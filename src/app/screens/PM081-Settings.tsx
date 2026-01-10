import { Button } from '../components/ui/button';
import { ArrowLeft, User, Bell, Lock, CreditCard, Users, Shield, HelpCircle, FileText, LogOut, ChevronRight, Home, Calendar, History, MapPin } from 'lucide-react';
import { useState } from 'react';

interface SettingsProps {
  onNavigate: (section: string) => void;
  onLogout: () => void;
  onBack: () => void;
  onNavigateHome?: () => void;
  onNavigateAppointments?: () => void;
  onNavigateHistory?: () => void;
}

export default function Settings({ onNavigate, onLogout, onBack, onNavigateHome, onNavigateAppointments, onNavigateHistory }: SettingsProps) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center p-4 border-b border-[#E5E7EB]">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-[#1F2937]" />
        </button>
        <h2 className="text-lg font-semibold text-[#1F2937] ml-2">Profile</h2>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        {/* Profile Section */}
        <div className="px-6 py-6 border-b border-[#E5E7EB]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-[#1F2937] rounded-full flex items-center justify-center text-white text-2xl font-bold">
              JS
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-[#1F2937] mb-1">John Smith</h3>
              <p className="text-sm text-[#6B7280]">demo.patient@urgentcarex.com</p>
            </div>
          </div>
          <Button 
            onClick={() => onNavigate('edit-profile')}
            variant="outline"
            className="w-full h-[48px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#F3F4F6]"
          >
            <User className="w-5 h-5 mr-2" />
            Edit Profile
          </Button>
        </div>

        {/* Account Settings */}
        <div className="px-6 py-4">
          <h3 className="text-sm font-semibold text-[#6B7280] mb-3">ACCOUNT</h3>
          <div className="space-y-2">
            <div className="w-full flex items-center justify-between p-4 bg-white border border-[#E5E7EB] rounded-xl">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-[#6B7280]" />
                <span className="text-base text-[#1F2937]">Notifications</span>
              </div>
              <button
                onClick={() => setNotificationsEnabled(!notificationsEnabled)}
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  notificationsEnabled ? 'bg-[#1F2937]' : 'bg-[#D1D5DB]'
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                    notificationsEnabled ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            <button
              onClick={() => onNavigate('security-privacy')}
              className="w-full flex items-center justify-between p-4 bg-white border border-[#E5E7EB] rounded-xl hover:border-[#1F2937] transition-colors"
            >
              <div className="flex items-center gap-3">
                <Lock className="w-5 h-5 text-[#6B7280]" />
                <span className="text-base text-[#1F2937]">Security & Privacy</span>
              </div>
              <ChevronRight className="w-5 h-5 text-[#6B7280]" />
            </button>

            <button
              onClick={() => onNavigate('insurance-management')}
              className="w-full flex items-center justify-between p-4 bg-white border border-[#E5E7EB] rounded-xl hover:border-[#1F2937] transition-colors"
            >
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-[#6B7280]" />
                <span className="text-base text-[#1F2937]">Insurance</span>
              </div>
              <ChevronRight className="w-5 h-5 text-[#6B7280]" />
            </button>
          </div>
        </div>

        {/* Health Settings */}
        <div className="px-6 py-4">
          <h3 className="text-sm font-semibold text-[#6B7280] mb-3">HEALTH</h3>
          <div className="space-y-2">
            <button
              onClick={() => onNavigate('medical-history')}
              className="w-full flex items-center justify-between p-4 bg-white border border-[#E5E7EB] rounded-xl hover:border-[#1F2937] transition-colors"
            >
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 text-[#6B7280]" />
                <span className="text-base text-[#1F2937]">Medical History</span>
              </div>
              <ChevronRight className="w-5 h-5 text-[#6B7280]" />
            </button>
          </div>
        </div>

        {/* Preferences */}
        <div className="px-6 py-4">
          <h3 className="text-sm font-semibold text-[#6B7280] mb-3">PREFERENCES</h3>
          <div className="space-y-2">
            <button
              onClick={() => onNavigate('location-radius')}
              className="w-full flex items-center justify-between p-4 bg-white border border-[#E5E7EB] rounded-xl hover:border-[#1F2937] transition-colors"
            >
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#6B7280]" />
                <span className="text-base text-[#1F2937]">Search Radius</span>
              </div>
              <ChevronRight className="w-5 h-5 text-[#6B7280]" />
            </button>
          </div>
        </div>

        {/* Support */}
        <div className="px-6 py-4">
          <h3 className="text-sm font-semibold text-[#6B7280] mb-3">SUPPORT</h3>
          <div className="space-y-2">
            <button
              onClick={() => onNavigate('help-support')}
              className="w-full flex items-center justify-between p-4 bg-white border border-[#E5E7EB] rounded-xl hover:border-[#1F2937] transition-colors"
            >
              <div className="flex items-center gap-3">
                <HelpCircle className="w-5 h-5 text-[#6B7280]" />
                <span className="text-base text-[#1F2937]">Help & Support</span>
              </div>
              <ChevronRight className="w-5 h-5 text-[#6B7280]" />
            </button>

            <button
              onClick={() => onNavigate('legal')}
              className="w-full flex items-center justify-between p-4 bg-white border border-[#E5E7EB] rounded-xl hover:border-[#1F2937] transition-colors"
            >
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#6B7280]" />
                <span className="text-base text-[#1F2937]">Legal & Policies</span>
              </div>
              <ChevronRight className="w-5 h-5 text-[#6B7280]" />
            </button>
          </div>
        </div>

        {/* Logout Button */}
        <div className="px-6 py-4">
          <Button 
            onClick={onLogout}
            variant="outline"
            className="w-full h-[52px] border-[#EF4444] text-[#EF4444] rounded-xl text-base font-medium hover:bg-[#EF4444]/5"
          >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
          </Button>
        </div>

        {/* App Info */}
        <div className="px-6 py-4 pb-6">
          <div className="bg-[#F3F4F6] rounded-xl p-4 text-center">
            <p className="text-sm text-[#6B7280] mb-1">UrgentCareX Patient App</p>
            <p className="text-xs text-[#6B7280]">Version 1.0.0</p>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="bg-white border-t border-[#E5E7EB] px-6 py-3 flex justify-around items-center">
        <button onClick={onNavigateHome} className="flex flex-col items-center gap-1 py-2">
          <Home className="w-6 h-6 text-[#6B7280]" />
          <span className="text-xs text-[#6B7280]">Home</span>
        </button>
        <button onClick={onNavigateAppointments} className="flex flex-col items-center gap-1 py-2">
          <Calendar className="w-6 h-6 text-[#6B7280]" />
          <span className="text-xs text-[#6B7280]">Appointments</span>
        </button>
        <button onClick={onNavigateHistory} className="flex flex-col items-center gap-1 py-2">
          <History className="w-6 h-6 text-[#6B7280]" />
          <span className="text-xs text-[#6B7280]">History</span>
        </button>
        <button className="flex flex-col items-center gap-1 py-2">
          <User className="w-6 h-6 text-[#1F2937]" />
          <span className="text-xs text-[#1F2937] font-medium">Profile</span>
        </button>
      </div>
    </div>
  );
}