import { useState } from 'react';
import { ArrowLeft, MapPin, Star, Building2, Clock } from 'lucide-react';

interface Provider {
  id: string;
  type: 'facility' | 'doctor';
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  distance: string;
  nextAvailable: string;
  image: string;
  acceptingNew: boolean;
  // Facility-specific fields
  facilityType?: string;
  servicesCount?: number;
  hoursToday?: string;
}

interface ProviderSearchProps {
  onSelectProvider: (provider: Provider) => void;
  onBack: () => void;
}

const DEMO_PROVIDERS: Provider[] = [
  {
    id: 'f1',
    type: 'facility',
    name: 'CityHealth Urgent Care Center',
    specialty: 'Urgent Care',
    facilityType: 'Urgent Care',
    rating: 4.7,
    reviewCount: 342,
    distance: '1.2 miles',
    nextAvailable: 'Walk-ins Welcome',
    hoursToday: 'Open until 9:00 PM',
    servicesCount: 15,
    image: '🏥',
    acceptingNew: true
  },
  {
    id: '1',
    type: 'doctor',
    name: 'Dr. Sarah Johnson',
    specialty: 'Primary Care Physician',
    rating: 4.9,
    reviewCount: 127,
    distance: '2.3 miles',
    nextAvailable: 'Today at 2:00 PM',
    image: '👩‍⚕️',
    acceptingNew: true
  },
  {
    id: 'f2',
    type: 'facility',
    name: 'Memorial Medical Center',
    specialty: 'Hospital',
    facilityType: 'Hospital',
    rating: 4.5,
    reviewCount: 856,
    distance: '2.8 miles',
    nextAvailable: 'Emergency 24/7',
    hoursToday: 'Open 24 hours',
    servicesCount: 45,
    image: '🏥',
    acceptingNew: true
  },
  {
    id: '2',
    type: 'doctor',
    name: 'Dr. Michael Chen',
    specialty: 'Internal Medicine',
    rating: 4.8,
    reviewCount: 95,
    distance: '3.1 miles',
    nextAvailable: 'Tomorrow at 10:00 AM',
    image: '👨‍⚕️',
    acceptingNew: true
  },
  {
    id: 'f3',
    type: 'facility',
    name: 'QuickCare Walk-In Clinic',
    specialty: 'Walk-In Clinic',
    facilityType: 'Walk-In Clinic',
    rating: 4.6,
    reviewCount: 215,
    distance: '3.5 miles',
    nextAvailable: 'No Appointment Needed',
    hoursToday: 'Open until 8:00 PM',
    servicesCount: 12,
    image: '🏥',
    acceptingNew: true
  },
  {
    id: '3',
    type: 'doctor',
    name: 'Dr. Emily Rodriguez',
    specialty: 'Family Medicine',
    rating: 4.9,
    reviewCount: 143,
    distance: '4.5 miles',
    nextAvailable: 'Today at 4:30 PM',
    image: '👩‍⚕️',
    acceptingNew: true
  }
];

export default function ProviderSearch({ onSelectProvider, onBack }: ProviderSearchProps) {
  const [providers] = useState<Provider[]>(DEMO_PROVIDERS);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header - No filter icon */}
      <div className="flex items-center p-4 border-b border-[#E5E7EB]">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-[#1F2937]" />
        </button>
        <h2 className="text-lg font-semibold text-[#1F2937] ml-2">Available Providers Near You</h2>
      </div>

      {/* Location - With change button */}
      <div className="px-4 py-3 bg-[#F3F4F6] flex items-center gap-2">
        <MapPin className="w-4 h-4 text-[#6B7280]" />
        <span className="text-sm text-[#6B7280]">Los Angeles, CA 90210 • Within 10 miles</span>
        <button className="ml-auto text-sm text-[#1F2937] font-medium">Change</button>
      </div>

      {/* Results Count */}
      <div className="px-4 py-3">
        <p className="text-sm text-[#6B7280]">{providers.length} providers found</p>
      </div>

      {/* Provider List */}
      <div className="flex-1 overflow-y-auto px-4 pb-4">
        <div className="space-y-4">
          {providers.map((provider) => (
            <div
              key={provider.id}
              onClick={() => onSelectProvider(provider)}
              className="border border-[#E5E7EB] rounded-2xl p-4 hover:border-[#1F2937] transition-colors cursor-pointer"
            >
              {/* Type Badge */}
              <div className="flex items-center gap-2 mb-3">
                {provider.type === 'facility' ? (
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#1F2937]/5 rounded-full">
                    <Building2 className="w-3.5 h-3.5 text-[#1F2937]" />
                    <span className="text-xs font-medium text-[#1F2937]">Facility</span>
                  </div>
                ) : (
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#10B981]/10 rounded-full">
                    <span className="text-xs font-medium text-[#10B981]">Individual Doctor</span>
                  </div>
                )}
              </div>

              <div className="flex gap-4 mb-3">
                <div className="w-16 h-16 bg-[#F3F4F6] rounded-full flex items-center justify-center text-3xl flex-shrink-0">
                  {provider.image}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#1F2937] mb-1">
                    {provider.name}
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-2">
                    {provider.specialty}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B]" />
                      <span className="text-sm font-medium text-[#1F2937]">{provider.rating}</span>
                      <span className="text-sm text-[#6B7280]">({provider.reviewCount})</span>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-[#6B7280]">
                      <MapPin className="w-4 h-4" />
                      <span>{provider.distance}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Facility-specific info */}
              {provider.type === 'facility' && provider.hoursToday && (
                <div className="flex items-center gap-2 mb-3 px-3 py-2 bg-[#F3F4F6] rounded-lg">
                  <Clock className="w-4 h-4 text-[#6B7280]" />
                  <span className="text-sm text-[#1F2937]">{provider.hoursToday}</span>
                  {provider.servicesCount && (
                    <>
                      <span className="text-[#E5E7EB]">•</span>
                      <span className="text-sm text-[#6B7280]">{provider.servicesCount} services</span>
                    </>
                  )}
                </div>
              )}

              {/* Removed bottom section with availability, badges, and buttons */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}