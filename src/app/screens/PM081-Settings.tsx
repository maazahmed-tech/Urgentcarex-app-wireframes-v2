import { Button } from '../components/ui/button';
import { ArrowLeft, User, Bell, Lock, CreditCard, Shield, HelpCircle, FileText, LogOut, ChevronRight, MapPin, Globe, Check } from 'lucide-react';
import { useState } from 'react';
import BottomNavigation from '../components/BottomNavigation';

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
  const [showLanguageModal, setShowLanguageModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = [
    { code: 'en', name: 'English', nativeName: 'English' },
    { code: 'es', name: 'Spanish', nativeName: 'Español' }
  ];

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
  };

  const handleConfirmLanguage = () => {
    setShowLanguageModal(false);
    setShowConfirmModal(true);
  };

  const handleFinalConfirm = () => {
    setCurrentLanguage(selectedLanguage);
    setShowConfirmModal(false);
  };

  const handleCancelLanguage = () => {
    setSelectedLanguage(currentLanguage);
    setShowLanguageModal(false);
  };

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

            <button
              onClick={() => setShowLanguageModal(true)}
              className="w-full flex items-center justify-between p-4 bg-white border border-[#E5E7EB] rounded-xl hover:border-[#1F2937] transition-colors"
            >
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-[#6B7280]" />
                <span className="text-base text-[#1F2937]">Language</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#6B7280]">{currentLanguage}</span>
                <ChevronRight className="w-5 h-5 text-[#6B7280]" />
              </div>
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
      <BottomNavigation
        activeTab="profile"
        onNavigateHome={onNavigateHome || (() => {})}
        onNavigateAppointments={onNavigateAppointments || (() => {})}
        onNavigateHistory={onNavigateHistory || (() => {})}
        onNavigateProfile={() => {}}
      />

      {/* Language Selection Modal */}
      {showLanguageModal && (
        <div className="absolute inset-0 bg-black/50 flex items-end z-50">
          <div className="bg-white w-full rounded-t-3xl p-6 animate-slide-up">
            <h2 className="text-xl font-semibold text-[#1F2937] mb-2">Select Language</h2>
            <p className="text-sm text-[#6B7280] mb-6">Choose your preferred language for the app</p>

            <div className="space-y-3 mb-6">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang.name)}
                  className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all ${
                    selectedLanguage === lang.name
                      ? 'border-[#1F2937] bg-[#1F2937]/5'
                      : 'border-[#E5E7EB] hover:border-[#1F2937]/30'
                  }`}
                >
                  <div className="flex flex-col items-start">
                    <span className="text-base font-medium text-[#1F2937]">{lang.name}</span>
                    <span className="text-sm text-[#6B7280]">{lang.nativeName}</span>
                  </div>
                  {selectedLanguage === lang.name && (
                    <div className="w-6 h-6 bg-[#1F2937] rounded-full flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>

            <div className="flex gap-3">
              <Button
                onClick={handleCancelLanguage}
                variant="outline"
                className="flex-1 h-[52px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium"
              >
                Cancel
              </Button>
              <Button
                onClick={handleConfirmLanguage}
                className="flex-1 h-[52px] bg-[#1F2937] text-white rounded-xl text-base font-medium hover:bg-[#374151]"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Confirm Language Change Modal */}
      {showConfirmModal && (
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-50 px-6">
          <div className="bg-white w-full max-w-sm rounded-2xl p-6 animate-scale-up">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-[#1F2937]/10 rounded-full flex items-center justify-center">
                <Globe className="w-8 h-8 text-[#1F2937]" />
              </div>
            </div>

            <h2 className="text-xl font-semibold text-[#1F2937] mb-2 text-center">
              Change Language?
            </h2>
            <p className="text-sm text-[#6B7280] mb-6 text-center">
              Are you sure you want to change the app language to <span className="font-semibold text-[#1F2937]">{selectedLanguage}</span>?
            </p>

            <div className="flex gap-3">
              <Button
                onClick={() => {
                  setShowConfirmModal(false);
                  setSelectedLanguage(currentLanguage);
                }}
                variant="outline"
                className="flex-1 h-[52px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium"
              >
                Cancel
              </Button>
              <Button
                onClick={handleFinalConfirm}
                className="flex-1 h-[52px] bg-[#1F2937] text-white rounded-xl text-base font-medium hover:bg-[#374151]"
              >
                Confirm
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}