import { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Pill, Calendar, Clock, RefreshCw, Download, Filter } from 'lucide-react';

interface Prescription {
  id: string;
  medication: string;
  dosage: string;
  frequency: string;
  prescribedBy: string;
  prescribedDate: string;
  startDate: string;
  endDate?: string;
  refillsRemaining: number;
  instructions: string;
  status: 'active' | 'completed' | 'discontinued';
}

interface PrescriptionsListProps {
  onViewPrescription: (prescription: Prescription) => void;
  onRequestRefill: (prescription: Prescription) => void;
  onBack: () => void;
}

const DEMO_PRESCRIPTIONS: Prescription[] = [
  {
    id: '1',
    medication: 'Lisinopril',
    dosage: '10mg',
    frequency: 'Once daily',
    prescribedBy: 'Dr. Sarah Johnson',
    prescribedDate: '2025-06-15',
    startDate: '2025-06-15',
    refillsRemaining: 3,
    instructions: 'Take with water in the morning',
    status: 'active'
  },
  {
    id: '2',
    medication: 'Metformin',
    dosage: '500mg',
    frequency: 'Twice daily',
    prescribedBy: 'Dr. Sarah Johnson',
    prescribedDate: '2025-06-15',
    startDate: '2025-06-15',
    refillsRemaining: 5,
    instructions: 'Take with meals',
    status: 'active'
  },
  {
    id: '3',
    medication: 'Amoxicillin',
    dosage: '500mg',
    frequency: 'Twice daily',
    prescribedBy: 'Dr. Sarah Johnson',
    prescribedDate: '2026-01-08',
    startDate: '2026-01-08',
    endDate: '2026-01-18',
    refillsRemaining: 0,
    instructions: 'Take with food. Complete full course.',
    status: 'active'
  },
  {
    id: '4',
    medication: 'Ibuprofen',
    dosage: '400mg',
    frequency: 'As needed',
    prescribedBy: 'Dr. Michael Chen',
    prescribedDate: '2025-12-20',
    startDate: '2025-12-20',
    endDate: '2026-01-20',
    refillsRemaining: 0,
    instructions: 'Take with food for pain',
    status: 'completed'
  }
];

export default function PrescriptionsList({ onViewPrescription, onRequestRefill, onBack }: PrescriptionsListProps) {
  const [prescriptions] = useState<Prescription[]>(DEMO_PRESCRIPTIONS);
  const [filter, setFilter] = useState<'active' | 'all'>('active');

  const filteredPrescriptions = prescriptions.filter(p => {
    if (filter === 'active') return p.status === 'active';
    return true;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-[#10B981] bg-[#10B981]/10';
      case 'completed': return 'text-[#6B7280] bg-[#6B7280]/10';
      case 'discontinued': return 'text-[#EF4444] bg-[#EF4444]/10';
      default: return 'text-[#6B7280] bg-[#6B7280]/10';
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#E5E7EB]">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-[#1F2937]" />
        </button>
        <h2 className="text-lg font-semibold text-[#1F2937]">Prescriptions</h2>
        <button className="p-2">
          <Download className="w-6 h-6 text-[#1F2937]" />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 px-4 py-3 border-b border-[#E5E7EB]">
        <button
          onClick={() => setFilter('active')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            filter === 'active'
              ? 'bg-[#1F2937] text-white'
              : 'bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]'
          }`}
        >
          Active ({prescriptions.filter(p => p.status === 'active').length})
        </button>
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            filter === 'all'
              ? 'bg-[#1F2937] text-white'
              : 'bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]'
          }`}
        >
          All ({prescriptions.length})
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {/* Refill Reminders */}
        {prescriptions.some(p => p.refillsRemaining <= 1 && p.status === 'active') && (
          <div className="bg-[#F59E0B]/10 border-l-4 border-[#F59E0B] rounded-xl p-4 mb-4">
            <div className="flex items-start gap-2">
              <RefreshCw className="w-5 h-5 text-[#F59E0B] mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-[#1F2937] mb-1">Refill Needed</p>
                <p className="text-sm text-[#6B7280]">
                  Some prescriptions are running low. Request a refill soon.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Prescriptions List */}
        <div className="space-y-3 pb-4">
          {filteredPrescriptions.map((prescription) => (
            <div
              key={prescription.id}
              className="border border-[#E5E7EB] rounded-2xl p-5 hover:border-[#1F2937] transition-colors"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3 flex-1">
                  <div className="w-12 h-12 bg-[#1F2937]/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Pill className="w-6 h-6 text-[#1F2937]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-[#1F2937] mb-1">
                      {prescription.medication}
                    </h3>
                    <p className="text-sm text-[#6B7280] mb-2">
                      {prescription.dosage} • {prescription.frequency}
                    </p>
                  </div>
                </div>
                <div className={`px-3 py-1 rounded-full ${getStatusColor(prescription.status)}`}>
                  <p className="text-xs font-medium capitalize">{prescription.status}</p>
                </div>
              </div>

              <div className="space-y-2 mb-3 text-sm text-[#6B7280]">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>Started {new Date(prescription.startDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                {prescription.endDate && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Until {new Date(prescription.endDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                )}
                <p className="text-xs">Prescribed by {prescription.prescribedBy}</p>
              </div>

              {/* Refills Info */}
              {prescription.status === 'active' && (
                <div className="pt-3 border-t border-[#E5E7EB]">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-[#6B7280] mb-1">Refills Remaining</p>
                      <p className={`text-sm font-semibold ${
                        prescription.refillsRemaining <= 1 ? 'text-[#F59E0B]' : 'text-[#1F2937]'
                      }`}>
                        {prescription.refillsRemaining} {prescription.refillsRemaining === 1 ? 'refill' : 'refills'}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => onViewPrescription(prescription)}
                        className="px-4 py-2 bg-[#F3F4F6] text-[#1F2937] rounded-lg text-sm font-medium hover:bg-[#E5E7EB] transition-colors"
                      >
                        View Details
                      </button>
                      {prescription.refillsRemaining > 0 && (
                        <button
                          onClick={() => onRequestRefill(prescription)}
                          className="px-4 py-2 bg-[#1F2937] text-white rounded-lg text-sm font-medium hover:bg-[#374151] transition-colors"
                        >
                          <RefreshCw className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPrescriptions.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="w-24 h-24 bg-[#F3F4F6] rounded-full flex items-center justify-center mb-4">
              <Pill className="w-12 h-12 text-[#6B7280]" />
            </div>
            <h3 className="text-lg font-semibold text-[#1F2937] mb-2">No Active Prescriptions</h3>
            <p className="text-sm text-[#6B7280] text-center">
              You don't have any active prescriptions at this time
            </p>
          </div>
        )}

        {/* Info Notice */}
        <div className="bg-[#10B981]/10 rounded-xl p-4 mt-4">
          <p className="text-sm text-[#6B7280]">
            <span className="font-semibold text-[#1F2937]">Need a new prescription?</span> Schedule an appointment with your provider to discuss your medication needs.
          </p>
        </div>
      </div>
    </div>
  );
}
