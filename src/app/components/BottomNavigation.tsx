import { Home, Calendar, History, User } from 'lucide-react';

export type NavTab = 'home' | 'appointments' | 'history' | 'profile';

interface BottomNavigationProps {
  activeTab: NavTab;
  onNavigateHome: () => void;
  onNavigateAppointments: () => void;
  onNavigateHistory: () => void;
  onNavigateProfile: () => void;
}

export default function BottomNavigation({
  activeTab,
  onNavigateHome,
  onNavigateAppointments,
  onNavigateHistory,
  onNavigateProfile
}: BottomNavigationProps) {
  const tabs = [
    { id: 'home' as NavTab, label: 'Home', icon: Home, onClick: onNavigateHome },
    { id: 'appointments' as NavTab, label: 'Appointments', icon: Calendar, onClick: onNavigateAppointments },
    { id: 'history' as NavTab, label: 'History', icon: History, onClick: onNavigateHistory },
    { id: 'profile' as NavTab, label: 'Profile', icon: User, onClick: onNavigateProfile },
  ];

  return (
    <div className="bg-white border-t border-[#E5E7EB] px-6 py-3 flex justify-around items-center">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;

        return (
          <button
            key={tab.id}
            onClick={tab.onClick}
            className="flex flex-col items-center gap-1 py-2"
          >
            <Icon className={`w-6 h-6 ${isActive ? 'text-[#1F2937]' : 'text-[#6B7280]'}`} />
            <span className={`text-xs ${isActive ? 'text-[#1F2937] font-medium' : 'text-[#6B7280]'}`}>
              {tab.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
