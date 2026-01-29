import { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, Calendar, Clock, CheckCircle, MessageSquare, ClipboardList } from 'lucide-react';
import BottomNavigation from '../components/BottomNavigation';

interface Appointment {
  id: string;
  providerName: string;
  specialty: string;
  date: string;
  time: string;
  status: 'confirmed' | 'pending' | 'completed';
  rosCompleted?: boolean; // Add ROS completion tracking
}

interface UpcomingAppointmentsProps {
  onViewDetails: (appointment: Appointment) => void;
  onBack: () => void;
  initialFilter?: 'all' | 'pending' | 'confirmed' | 'completed';
  onMarkComplete?: () => void;
  onLeaveReview?: (appointment: Appointment) => void;
  onViewHistory?: () => void;
  onViewProfile?: () => void;
  onCompleteROS?: (appointmentId: string) => void; // Add ROS callback
}

const DEMO_APPOINTMENTS: Appointment[] = [
  {
    id: '1',
    providerName: 'Dr. Sarah Johnson',
    specialty: 'Primary Care Physician',
    date: '2026-01-15',
    time: '10:00 AM',
    status: 'confirmed',
    rosCompleted: true
  },
  {
    id: '2',
    providerName: 'Dr. Michael Chen',
    specialty: 'Internal Medicine',
    date: '2026-01-20',
    time: '2:30 PM',
    status: 'confirmed',
    rosCompleted: false
  },
  {
    id: '3',
    providerName: 'Dr. Emily Rodriguez',
    specialty: 'Family Medicine',
    date: '2026-02-05',
    time: '11:00 AM',
    status: 'pending',
    rosCompleted: true
  },
  {
    id: '4',
    providerName: 'Dr. James Williams',
    specialty: 'Urgent Care',
    date: '2026-01-05',
    time: '3:00 PM',
    status: 'completed',
    rosCompleted: true
  },
  {
    id: '5',
    providerName: 'Dr. Lisa Anderson',
    specialty: 'Family Medicine',
    date: '2025-12-28',
    time: '9:30 AM',
    status: 'completed',
    rosCompleted: true
  }
];

export default function UpcomingAppointments({ onViewDetails, onBack, initialFilter, onMarkComplete, onLeaveReview, onViewHistory, onViewProfile, onCompleteROS }: UpcomingAppointmentsProps) {
  const [appointments] = useState<Appointment[]>(DEMO_APPOINTMENTS);
  const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed' | 'completed'>(initialFilter || 'all');

  const filteredAppointments = appointments.filter(apt => {
    if (filter === 'all') return true;
    return apt.status === filter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-[#6B7280]';
      case 'pending': return 'bg-[#9CA3AF]';
      case 'completed': return 'bg-[#1F2937]';
      default: return 'bg-[#6B7280]';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'confirmed': return 'Confirmed';
      case 'pending': return 'Pending';
      case 'completed': return 'Completed';
      default: return status;
    }
  };

  const handleMarkComplete = (e: React.MouseEvent, appointmentId: string) => {
    e.stopPropagation();
    // In a real app, this would update the appointment status
    if (onMarkComplete) {
      onMarkComplete();
    }
  };

  const handleLeaveReview = (e: React.MouseEvent, appointment: Appointment) => {
    e.stopPropagation();
    // In a real app, this would navigate to the review screen
    if (onLeaveReview) {
      onLeaveReview(appointment);
    }
  };

  const handleCompleteROS = (e: React.MouseEvent, appointmentId: string) => {
    e.stopPropagation();
    // In a real app, this would update the ROS completion status
    if (onCompleteROS) {
      onCompleteROS(appointmentId);
    }
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-[#E5E7EB]">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-[#1F2937]" />
        </button>
        <h2 className="text-lg font-semibold text-[#1F2937]">Appointments</h2>
        <div className="w-10"></div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 px-4 py-3 border-b border-[#E5E7EB] overflow-x-auto">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            filter === 'all'
              ? 'bg-[#1F2937] text-white'
              : 'bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]'
          }`}
        >
          All ({appointments.length})
        </button>
        <button
          onClick={() => setFilter('pending')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            filter === 'pending'
              ? 'bg-[#1F2937] text-white'
              : 'bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]'
          }`}
        >
          Pending ({appointments.filter(a => a.status === 'pending').length})
        </button>
        <button
          onClick={() => setFilter('confirmed')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            filter === 'confirmed'
              ? 'bg-[#1F2937] text-white'
              : 'bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]'
          }`}
        >
          Confirmed ({appointments.filter(a => a.status === 'confirmed').length})
        </button>
        <button
          onClick={() => setFilter('completed')}
          className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
            filter === 'completed'
              ? 'bg-[#1F2937] text-white'
              : 'bg-[#F3F4F6] text-[#6B7280] hover:bg-[#E5E7EB]'
          }`}
        >
          Completed ({appointments.filter(a => a.status === 'completed').length})
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-4 py-4 pb-20">
        {filteredAppointments.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full py-12">
            <div className="w-24 h-24 bg-[#F3F4F6] rounded-full flex items-center justify-center mb-4">
              <Calendar className="w-12 h-12 text-[#6B7280]" />
            </div>
            <h3 className="text-lg font-semibold text-[#1F2937] mb-2">No Appointments</h3>
            <p className="text-sm text-[#6B7280] text-center">
              You don't have any upcoming appointments
            </p>
          </div>
        ) : (
          <div className="space-y-4">
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
                    <p className="text-sm text-[#6B7280] mb-3">
                      {appointment.specialty}
                    </p>
                  </div>
                  <div className={`px-3 py-1 ${getStatusColor(appointment.status)}/10 rounded-full`}>
                    <p className={`text-xs font-medium ${getStatusColor(appointment.status).replace('bg-', 'text-')}`}>
                      {getStatusText(appointment.status)}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(appointment.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                    <Clock className="w-4 h-4" />
                    <span>{appointment.time}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                {(appointment.status === 'pending' || appointment.status === 'confirmed') && !appointment.rosCompleted && (
                  <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
                    <button
                      onClick={(e) => handleCompleteROS(e, appointment.id)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1F2937] text-white rounded-xl text-sm font-medium hover:bg-[#374151] transition-colors"
                    >
                      <ClipboardList className="w-4 h-4" />
                      Complete ROS
                    </button>
                  </div>
                )}

                {appointment.status === 'confirmed' && (
                  <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
                    <button
                      onClick={(e) => handleMarkComplete(e, appointment.id)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#6B7280] text-white rounded-xl text-sm font-medium hover:bg-[#4B5563] transition-colors"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Mark as Complete
                    </button>
                  </div>
                )}

                {appointment.status === 'completed' && (
                  <div className="mt-4 pt-4 border-t border-[#E5E7EB]">
                    <button
                      onClick={(e) => handleLeaveReview(e, appointment)}
                      className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#1F2937] text-white rounded-xl text-sm font-medium hover:bg-[#374151] transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Leave a Review
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0">
        <BottomNavigation
          activeTab="appointments"
          onNavigateHome={onBack}
          onNavigateAppointments={() => {}}
          onNavigateHistory={onViewHistory || (() => {})}
          onNavigateProfile={onViewProfile || (() => {})}
        />
      </div>
    </div>
  );
}