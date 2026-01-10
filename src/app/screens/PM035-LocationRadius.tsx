import { useState } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft, MapPin } from 'lucide-react';

interface LocationRadiusProps {
  onContinue: (radius: number) => void;
  onBack: () => void;
  initialData?: number;
}

export default function LocationRadius({ onContinue, onBack, initialData }: LocationRadiusProps) {
  const [radius, setRadius] = useState(initialData || 10);

  const radiusOptions = [5, 10, 15, 25, 50];

  const handleContinue = () => {
    onContinue(radius);
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="px-4 pt-4 pb-4 border-b border-[#E5E7EB]">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-[#1F2937]" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-8 pt-6">
          {/* Headline */}
          <h1 className="text-[28px] font-bold text-[#1F2937] mb-3">
            Search Radius
          </h1>

          {/* Subhead */}
          <p className="text-base text-[#6B7280] mb-8">
            How far are you willing to travel for care?
          </p>

          {/* Radius Selection */}
          <div className="mb-8">
            <p className="text-sm font-medium text-[#374151] mb-4">
              Search within:
            </p>
            <div className="space-y-3">
              {radiusOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setRadius(option)}
                  className={`w-full h-[60px] rounded-xl border-2 transition-all ${
                    radius === option
                      ? 'border-[#1F2937] bg-[#F3F4F6]'
                      : 'border-[#E5E7EB] bg-white hover:bg-[#F3F4F6]'
                  }`}
                >
                  <div className="flex items-center justify-between px-5">
                    <div className="flex items-center gap-3">
                      <MapPin className={`w-5 h-5 ${radius === option ? 'text-[#1F2937]' : 'text-[#6B7280]'}`} />
                      <span className={`text-base font-medium ${radius === option ? 'text-[#1F2937]' : 'text-[#374151]'}`}>
                        {option} miles
                      </span>
                    </div>
                    {radius === option && (
                      <div className="w-6 h-6 bg-[#1F2937] rounded-full flex items-center justify-center">
                        <span className="text-white text-sm">✓</span>
                      </div>
                    )}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Visual Representation */}
          <div className="bg-[#F3F4F6] rounded-2xl p-6 mb-6">
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-6 h-6 text-[#1F2937]" />
              <p className="text-base text-[#374151]">
                Searching <span className="font-semibold text-[#1F2937]">{radius} miles</span> from your location
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="bg-white border-t border-[#E5E7EB] p-4">
        <Button 
          onClick={handleContinue}
          className="w-full h-[52px] bg-[#1F2937] text-white rounded-xl text-base font-medium hover:bg-[#374151]"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}