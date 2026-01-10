import { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Calendar, Clock, FileText, Download, Filter } from 'lucide-react';

interface PastAppointment {
  id: string;
  providerName: string;
  specialty: string;
  date: string;
  time: string;
  diagnosis: string;
  type: 'in-person' | 'virtual';
  hasDocuments: boolean;
}

interface PastAppointmentsProps {
  onViewDetails: (appointment: PastAppointment) => void;
  onBack: () => void;
}

const DEMO_PAST_APPOINTMENTS: PastAppointment[] = [
  {
    id: '1',
    providerName: 'Dr. Sarah Johnson',
    specialty: 'Primary Care Physician',
    date: '2026-01-08',
    time: '10:00 AM',
    diagnosis: 'Upper Respiratory Infection',
    type: 'in-person',
    hasDocuments: true
  },
  {
    id: '2',
    providerName: 'Dr. Michael Chen',
    specialty: 'Internal Medicine',
    date: '2025-12-15',
    time: '2:30 PM',
    diagnosis: 'Annual Physical Exam',
    type: 'in-person',
    hasDocuments: true
  },
  {
    id: '3',
    providerName: 'Dr. Emily Rodriguez',
    specialty: 'Family Medicine',
    date: '2025-11-20',
    time: '11:00 AM',
    diagnosis: 'Follow-up - Hypertension',
    type: 'virtual',
    hasDocuments: true
  },
  {
    id: '4',
    providerName: 'Dr. James Wilson',
    specialty: 'Cardiology',
    date: '2025-10-05',
    time: '9:00 AM',
    diagnosis: 'Cardiac Consultation',
    type: 'in-person',
    hasDocuments: true
  }
];

export default function PastAppointments({ onViewDetails, onBack }: PastAppointmentsProps) {
  const [appointments] = useState<PastAppointment[]>(DEMO_PAST_APPOINTMENTS);
  const [filterPeriod, setFilterPeriod] = useState<'all' | '30' | '90' | '365'>('all');

  const filteredAppointments = appointments.filter(apt => {
    if (filterPeriod === 'all') return true;
    const daysAgo = Math.floor((new Date().getTime() - new Date(apt.date).getTime()) / (1000 * 60 * 60 * 24));
    return daysAgo <= parseInt(filterPeriod);
  });

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#E5E7EB]">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-[#1F2937]" />
        </button>
        <h2 className="text-lg font-semibold text-[#1F2937]">Past Appointments</h2>
        <button className="p-2">
          <Filter className="w-6 h-6 text-[#1F2937]" />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 px-4 py-3 border-b border-[#E5E7EB] overflow-x-auto">
        <button
          onClick={() => setFilterPeriod('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            filterPeriod === 'all'
              ? 'bg-[#1F2937] text-white'
              : 'bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]'
          }`}
        >
          All Time
        </button>
        <button
          onClick={() => setFilterPeriod('30')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            filterPeriod === '30'
              ? 'bg-[#1F2937] text-white'
              : 'bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]'
          }`}
        >
          Last 30 Days
        </button>
        <button
          onClick={() => setFilterPeriod('90')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            filterPeriod === '90'
              ? 'bg-[#1F2937] text-white'
              : 'bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]'
          }`}
        >
          Last 90 Days
        </button>
        <button
          onClick={() => setFilterPeriod('365')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            filterPeriod === '365'
              ? 'bg-[#1F2937] text-white'
              : 'bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]'
          }`}
        >
          Last Year
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4">
        {filteredAppointments.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full py-12">
            <div className="w-24 h-24 bg-[#F3F4F6] rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-12 h-12 text-[#6B7280]" />
            </div>
            <h3 className="text-lg font-semibold text-[#1F2937] mb-2">No Past Appointments</h3>
            <p className="text-sm text-[#6B7280] text-center">
              You don't have any appointments in this time period
            </p>
          </div>
        ) : (
          <div className="space-y-4 pb-4">
            {filteredAppointments.map((appointment) => (
              <div
                key={appointment.id}
                onClick={() => onViewDetails(appointment)}
                className="border border-[#E5E7EB] rounded-2xl p-5 hover:border-[#1F2937] transition-colors cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-[#1F2937] mb-1">
                      {appointment.providerName}
                    </h3>
                    <p className="text-sm text-[#6B7280] mb-2">
                      {appointment.specialty}
                    </p>
                  </div>
                  <div className="px-3 py-1 bg-[#6B7280]/10 rounded-full">
                    <p className="text-xs font-medium text-[#6B7280]">Completed</p>
                  </div>
                </div>

                <div className="space-y-2 mb-3">
                  <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(appointment.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                    <Clock className="w-4 h-4" />
                    <span>{appointment.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                    <FileText className="w-4 h-4" />
                    <span>{appointment.diagnosis}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-[#E5E7EB]">
                  <div className={`px-3 py-1 ${appointment.type === 'virtual' ? 'bg-[#10B981]' : 'bg-[#1F2937]'}/10 rounded-full`}>
                    <p className={`text-xs font-medium ${appointment.type === 'virtual' ? 'text-[#10B981]' : 'text-[#1F2937]'}`}>
                      {appointment.type === 'virtual' ? '📹 Virtual' : '🏥 In-Person'}
                    </p>
                  </div>
                  {appointment.hasDocuments && (
                    <div className="px-3 py-1 bg-[#10B981]/10 rounded-full">
                      <p className="text-xs font-medium text-[#10B981]">📄 Documents Available</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Summary Footer */}
      <div className="border-t border-[#E5E7EB] p-4 bg-[#F3F4F6]">
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#6B7280]">
            Total: {filteredAppointments.length} appointment{filteredAppointments.length !== 1 ? 's' : ''}
          </p>
          <button className="flex items-center gap-1 text-sm font-medium text-[#1F2937] hover:underline">
            <Download className="w-4 h-4" />
            Export All
          </button>
        </div>
      </div>
    </div>
  );
}
