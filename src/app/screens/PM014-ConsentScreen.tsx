import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { ArrowLeft } from 'lucide-react';

interface ConsentScreenProps {
  onContinue: () => void;
  onBack?: () => void;
  onViewPrivacy: () => void;
  onViewHIPAA: () => void;
  onViewDisclaimer: () => void;
}

export default function ConsentScreen({ 
  onContinue, 
  onBack,
  onViewPrivacy,
  onViewHIPAA,
  onViewDisclaimer 
}: ConsentScreenProps) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header with Back Button */}
      {onBack && (
        <div className="flex items-center p-4 border-b border-[#E5E7EB]">
          <button onClick={onBack} className="p-2">
            <ArrowLeft className="w-6 h-6 text-[#1F2937]" />
          </button>
          <h2 className="text-lg font-semibold text-[#1F2937] ml-2">Before We Begin</h2>
        </div>
      )}

      {/* Content */}
      <div className="flex-1 overflow-y-auto pb-24">
        <div className="px-8 pt-6">
          {/* Subhead */}
          <p className="text-base text-[#6B7280] mb-8">
            Please review and accept the following to continue.
          </p>

          {/* HIPAA Card */}
          <button
            onClick={onViewHIPAA}
            className="w-full bg-white border border-[#E5E7EB] rounded-2xl p-5 mb-4 text-left hover:bg-[#F3F4F6] transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl">📋</div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-[#1F2937] mb-2">
                  How We Use Your Data
                </h3>
                <p className="text-sm text-[#6B7280] mb-3">
                  Your health information is protected under HIPAA regulations.
                </p>
                <div className="text-sm font-medium text-[#1F2937]">
                  Learn More →
                </div>
              </div>
            </div>
          </button>

          {/* Disclaimer Card */}
          <button
            onClick={onViewDisclaimer}
            className="w-full bg-white border border-[#E5E7EB] rounded-2xl p-5 mb-8 text-left hover:bg-[#F3F4F6] transition-colors"
          >
            <div className="flex items-start gap-3">
              <div className="text-2xl">⚠️</div>
              <div className="flex-1">
                <h3 className="text-base font-semibold text-[#1F2937] mb-2">
                  Important Disclaimer
                </h3>
                <p className="text-sm text-[#6B7280] mb-3">
                  This app does NOT provide medical diagnoses.
                </p>
                <div className="text-sm font-medium text-[#1F2937]">
                  Read Full Disclaimer →
                </div>
              </div>
            </div>
          </button>

          {/* Checkbox Agreement */}
          <div 
            onClick={() => setAgreed(!agreed)}
            className="flex items-start gap-3 p-4 bg-white border border-[#E5E7EB] rounded-2xl mb-6 cursor-pointer"
          >
            <Checkbox 
              checked={agreed}
              onCheckedChange={setAgreed}
              className="mt-1"
            />
            <div className="flex-1">
              <p className="text-sm text-[#1F2937]">
                I have read and agree to the{' '}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewPrivacy();
                  }}
                  className="font-medium underline"
                >
                  Terms of Service and Privacy Policy
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Button */}
      <div className="bg-white border-t border-[#E5E7EB] p-4">
        <Button 
          onClick={onContinue}
          disabled={!agreed}
          className="w-full h-[52px] bg-[#1F2937] text-white rounded-xl text-base font-medium hover:bg-[#374151] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          I Understand & Agree
        </Button>
      </div>
    </div>
  );
}