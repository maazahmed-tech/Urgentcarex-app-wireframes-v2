import { Button } from '../components/ui/button';
import { Home, Calendar, History, User, MessageSquare, Stethoscope, Clock, MapPin, Bell, Navigation, X } from 'lucide-react';
import { useState } from 'react';

interface DashboardProps {
  onStartSymptomCheck: () => void;
  onViewAppointments: () => void;
  onViewHistory: () => void;
  onViewProfile: () => void;
  onViewFacility?: (facilityId: string) => void;
  userName?: string;
}

export default function Dashboard({ 
  onStartSymptomCheck, 
  onViewAppointments, 
  onViewHistory, 
  onViewProfile,
  onViewFacility,
  userName = 'John'
}: DashboardProps) {
  const [showNotifications, setShowNotifications] = useState(false);

  const notifications = [
    {
      id: 1,
      type: 'appointment-reminder',
      title: 'Appointment Reminder',
      message: 'Your appointment with Dr. Sarah Johnson is tomorrow at 10:00 AM',
      time: '2h ago'
    },
    {
      id: 2,
      type: 'medical-history',
      title: 'Complete Medical History',
      message: 'Help us serve you better by completing your medical history',
      time: '1d ago'
    },
    {
      id: 3,
      type: 'appointment-confirmed',
      title: 'Appointment Confirmed',
      message: 'Dr. Emily Rodriguez has confirmed your appointment for February 5, 2026 at 2:30 PM',
      time: '3d ago'
    }
  ];

  return (
    <div className="flex flex-col h-full bg-[#F3F4F6] relative">
      {/* Header */}
      <div className="bg-[#1F2937] px-6 pt-8 pb-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold text-white">{userName}</h1>
          <button className="p-2 relative" onClick={() => setShowNotifications(!showNotifications)}>
            <Bell className="w-5 h-5 text-[#9CA3AF]" />
            {/* Notification Badge */}
            <div className="absolute top-1 right-1 w-2 h-2 bg-[#EF4444] rounded-full"></div>
          </button>
        </div>
      </div>

      {/* Notification Panel Overlay */}
      {showNotifications && (
        <>
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setShowNotifications(false)}
          ></div>
          
          {/* Notification Panel */}
          <div className="absolute top-0 right-0 bottom-0 w-full bg-white z-50 shadow-2xl">
            {/* Panel Header */}
            <div className="bg-[#1F2937] px-6 py-4 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-white">Notifications</h2>
              <button 
                onClick={() => setShowNotifications(false)}
                className="p-2 hover:bg-[#374151] rounded-lg transition-colors"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Notifications List */}
            <div className="overflow-y-auto h-full pb-20">
              <div className="p-4 space-y-3">
                {notifications.map((notification) => (
                  <div 
                    key={notification.id}
                    className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-xl p-4 hover:bg-white transition-colors"
                  >
                    <div className="flex items-start justify-between mb-1">
                      <h3 className="text-sm font-semibold text-[#1F2937]">
                        {notification.title}
                      </h3>
                      <span className="text-xs text-[#9CA3AF]">{notification.time}</span>
                    </div>
                    <p className="text-sm text-[#6B7280] leading-relaxed">
                      {notification.message}
                    </p>
                  </div>
                ))}
              </div>

              {/* Empty State (hidden when there are notifications) */}
              {notifications.length === 0 && (
                <div className="flex flex-col items-center justify-center py-20 px-6">
                  <Bell className="w-16 h-16 text-[#E5E7EB] mb-4" />
                  <p className="text-base font-medium text-[#9CA3AF] text-center">
                    No notifications yet
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}

      {/* Content */}
      <div className="flex-1 px-6 py-6 overflow-y-auto pb-24">
        {/* Quick Actions Card */}
        <div className="bg-white rounded-2xl p-6 mb-6 shadow-sm">
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            How can we help you today?
          </h2>
          <Button 
            onClick={onStartSymptomCheck}
            className="w-full h-[56px] bg-[#1F2937] text-white rounded-xl text-base font-medium hover:bg-[#374151]"
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            Start Symptom Check
          </Button>
        </div>

        {/* Upcoming Appointments */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-[#1F2937]">Upcoming Appointments</h3>
          </div>
          
          <div className="bg-white rounded-2xl p-5 shadow-sm border-l-4 border-[#1F2937]">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <p className="text-base font-semibold text-[#1F2937] mb-1">
                  Dr. Sarah Johnson
                </p>
                <p className="text-sm text-[#6B7280] mb-2">
                  Primary Care Physician
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-sm text-[#6B7280]">
                    <Calendar className="w-4 h-4" />
                    <span>Jan 15, 2026</span>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-[#6B7280]">
                    <Clock className="w-4 h-4" />
                    <span>10:00 AM</span>
                  </div>
                </div>
              </div>
              <div className="px-3 py-1 bg-[#F3F4F6] rounded-full">
                <p className="text-xs font-medium text-[#1F2937]">Confirmed</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm text-[#6B7280]">
              <MapPin className="w-4 h-4" />
              <span>UrgentCare Center - Downtown</span>
            </div>
          </div>
        </div>

        {/* Nearby Open Facilities */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-[#1F2937] mb-4">Nearby Urgent Care</h3>
          <div className="space-y-3">
            {/* Facility 1 */}
            <div 
              onClick={() => onViewFacility?.('facility-1')}
              className="bg-white rounded-xl p-4 shadow-sm border border-[#E5E7EB] hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-base font-semibold text-[#1F2937] mb-1">
                    UrgentCare Center - Downtown
                  </p>
                  <div className="flex items-center gap-1 text-sm text-[#6B7280] mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>0.8 miles away</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-1 bg-[#1F2937] rounded-full">
                      <p className="text-xs font-medium text-white">Open Now</p>
                    </div>
                    <p className="text-xs text-[#6B7280]">Closes at 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Facility 2 */}
            <div 
              onClick={() => onViewFacility?.('facility-2')}
              className="bg-white rounded-xl p-4 shadow-sm border border-[#E5E7EB] hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-base font-semibold text-[#1F2937] mb-1">
                    HealthFirst Urgent Care
                  </p>
                  <div className="flex items-center gap-1 text-sm text-[#6B7280] mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>1.2 miles away</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-1 bg-[#1F2937] rounded-full">
                      <p className="text-xs font-medium text-white">Open Now</p>
                    </div>
                    <p className="text-xs text-[#6B7280]">Closes at 8:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Facility 3 */}
            <div 
              onClick={() => onViewFacility?.('facility-3')}
              className="bg-white rounded-xl p-4 shadow-sm border border-[#E5E7EB] hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <p className="text-base font-semibold text-[#1F2937] mb-1">
                    CityMed Urgent Care - Westside
                  </p>
                  <div className="flex items-center gap-1 text-sm text-[#6B7280] mb-2">
                    <MapPin className="w-4 h-4" />
                    <span>2.4 miles away</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-2 py-1 bg-[#1F2937] rounded-full">
                      <p className="text-xs font-medium text-white">Open Now</p>
                    </div>
                    <p className="text-xs text-[#6B7280]">Open 24 Hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB]">
        <div className="flex items-center justify-around h-16">
          <button className="flex flex-col items-center gap-1 px-4 py-2">
            <Home className="w-6 h-6 text-[#1F2937]" />
            <span className="text-xs font-medium text-[#1F2937]">Home</span>
          </button>
          
          <button 
            onClick={onViewAppointments}
            className="flex flex-col items-center gap-1 px-4 py-2"
          >
            <Calendar className="w-6 h-6 text-[#6B7280]" />
            <span className="text-xs text-[#6B7280]">Appointments</span>
          </button>
          
          <button 
            onClick={onViewHistory}
            className="flex flex-col items-center gap-1 px-4 py-2"
          >
            <History className="w-6 h-6 text-[#6B7280]" />
            <span className="text-xs text-[#6B7280]">History</span>
          </button>
          
          <button 
            onClick={onViewProfile}
            className="flex flex-col items-center gap-1 px-4 py-2"
          >
            <User className="w-6 h-6 text-[#6B7280]" />
            <span className="text-xs text-[#6B7280]">Profile</span>
          </button>
        </div>
      </div>
    </div>
  );
}