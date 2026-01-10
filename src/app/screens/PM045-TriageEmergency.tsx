import { Button } from '../components/ui/button';
import { Phone, MapPin, AlertTriangle } from 'lucide-react';

interface TriageEmergencyProps {
  onCall911: () => void;
  onFindER: () => void;
}

export default function TriageEmergency({ onCall911, onFindER }: TriageEmergencyProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header with Result Badge */}
      <div className="bg-[#EF4444] px-6 pt-12 pb-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4 animate-pulse">
            <AlertTriangle className="w-12 h-12 text-[#EF4444]" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Emergency Care Needed
          </h1>
          <p className="text-base text-white/90">
            Go to the emergency room immediately
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 overflow-y-auto pb-8">
        {/* Triage Level Info */}
        <div className="bg-[#EF4444]/10 border-2 border-[#EF4444] rounded-xl p-5 mb-6">
          <p className="text-sm font-semibold text-[#EF4444] mb-2">
            Triage Level: Emergency (Red)
          </p>
          <p className="text-sm text-[#1F2937] font-medium">
            Your symptoms indicate a potentially serious medical condition that requires immediate emergency evaluation. DO NOT DELAY.
          </p>
        </div>

        {/* Immediate Actions */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            Take Action Immediately
          </h2>

          <div className="space-y-4">
            {/* Call 911 */}
            <div className="border-2 border-[#EF4444] rounded-2xl p-6 bg-[#EF4444]/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#EF4444] rounded-full flex items-center justify-center flex-shrink-0 animate-pulse">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#1F2937] mb-1">
                    Call 911 Now
                  </h3>
                  <p className="text-sm text-[#6B7280]">
                    If you cannot get to an ER safely or quickly
                  </p>
                </div>
              </div>
              <Button 
                onClick={onCall911}
                className="w-full h-[56px] bg-[#EF4444] text-white rounded-xl text-lg font-bold hover:bg-[#DC2626]"
              >
                <Phone className="w-6 h-6 mr-2" />
                Call 911
              </Button>
            </div>

            {/* Find ER */}
            <div className="border-2 border-[#1F2937] rounded-2xl p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-[#1F2937] rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-[#1F2937] mb-1">
                    Go to Nearest ER
                  </h3>
                  <p className="text-sm text-[#6B7280]">
                    If you can get there safely right now
                  </p>
                </div>
              </div>
              <Button 
                onClick={onFindER}
                className="w-full h-[56px] bg-[#1F2937] text-white rounded-xl text-lg font-bold hover:bg-[#374151]"
              >
                <MapPin className="w-6 h-6 mr-2" />
                Find Nearest ER
              </Button>
            </div>
          </div>
        </div>

        {/* Warning Signs */}
        <div className="bg-[#FEE2E2] border-l-4 border-[#EF4444] rounded-xl p-5 mb-6">
          <h3 className="text-base font-bold text-[#1F2937] mb-3">
            🚨 Your Symptoms Indicate:
          </h3>
          <ul className="text-sm text-[#1F2937] space-y-2 ml-4">
            <li>• Potential life-threatening condition</li>
            <li>• Need for immediate medical evaluation</li>
            <li>• Possible need for emergency treatment</li>
            <li>• Risk of rapid deterioration</li>
          </ul>
        </div>

        {/* Do Not Do */}
        <div className="bg-[#F3F4F6] rounded-xl p-5 mb-6">
          <h3 className="text-base font-semibold text-[#1F2937] mb-3">
            ⛔ Do NOT:
          </h3>
          <ul className="text-sm text-[#6B7280] space-y-2 ml-4">
            <li>• Wait to see if symptoms improve</li>
            <li>• Drive yourself if symptoms are severe</li>
            <li>• Delay seeking emergency care</li>
            <li>• Attempt to treat this at home</li>
            <li>• Book a regular appointment instead</li>
          </ul>
        </div>

        {/* What to Tell 911 */}
        <div className="border-2 border-[#1F2937] rounded-xl p-5 mb-6">
          <h3 className="text-base font-semibold text-[#1F2937] mb-3">
            📞 What to Tell 911:
          </h3>
          <div className="space-y-3">
            <div className="bg-[#F3F4F6] rounded-lg p-3">
              <p className="text-sm text-[#1F2937]">
                <span className="font-semibold">1.</span> Your location and phone number
              </p>
            </div>
            <div className="bg-[#F3F4F6] rounded-lg p-3">
              <p className="text-sm text-[#1F2937]">
                <span className="font-semibold">2.</span> Your symptoms and when they started
              </p>
            </div>
            <div className="bg-[#F3F4F6] rounded-lg p-3">
              <p className="text-sm text-[#1F2937]">
                <span className="font-semibold">3.</span> Any medications you're currently taking
              </p>
            </div>
            <div className="bg-[#F3F4F6] rounded-lg p-3">
              <p className="text-sm text-[#1F2937]">
                <span className="font-semibold">4.</span> Any known medical conditions or allergies
              </p>
            </div>
          </div>
        </div>

        {/* Critical Info */}
        <div className="bg-[#EF4444]/10 rounded-xl p-5">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="text-sm font-semibold text-[#1F2937] mb-2">
                This is a Medical Emergency
              </p>
              <p className="text-sm text-[#6B7280]">
                This assessment tool has determined that your symptoms require immediate emergency medical attention. Do not ignore this recommendation. Your health and safety are paramount.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
