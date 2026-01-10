import { Button } from '../components/ui/button';
import { Calendar, Phone, AlertTriangle, MapPin } from 'lucide-react';

interface Triage24HourProps {
  onFindUrgentCare: () => void;
  onCall24HourLine: () => void;
  onViewERLocations: () => void;
}

export default function Triage24Hour({ 
  onFindUrgentCare, 
  onCall24HourLine,
  onViewERLocations
}: Triage24HourProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header with Result Badge */}
      <div className="bg-[#F97316] px-6 pt-12 pb-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4">
            <AlertTriangle className="w-10 h-10 text-[#F97316]" />
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Seek Care Within 24 Hours
          </h1>
          <p className="text-base text-white/90">
            Your symptoms require prompt medical attention
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 overflow-y-auto pb-8">
        {/* Triage Level Info */}
        <div className="bg-[#F97316]/10 border-l-4 border-[#F97316] rounded-xl p-5 mb-6">
          <p className="text-sm font-semibold text-[#1F2937] mb-2">
            Triage Level: Urgent (Orange)
          </p>
          <p className="text-sm text-[#6B7280]">
            Your symptoms indicate you should be evaluated by a healthcare provider within the next 24 hours. Do not delay seeking care.
          </p>
        </div>

        {/* Immediate Action Required */}
        <div className="mb-6">
          <div className="flex items-center gap-3 p-4 bg-[#F97316]/10 rounded-xl border border-[#F97316]">
            <span className="text-2xl">⏰</span>
            <div>
              <p className="text-sm font-semibold text-[#1F2937]">Immediate Action Required</p>
              <p className="text-sm text-[#F97316] font-medium">Seek care within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Recommended Actions */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            Recommended Next Steps
          </h2>

          <div className="space-y-4">
            {/* Option 1: Urgent Care */}
            <div className="border-2 border-[#F97316] rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#F97316]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#F97316]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-1">
                    Visit Urgent Care Now
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-3">
                    Walk-in or same-day appointments available
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <span className="text-[#F97316]">●</span>
                      <span>Open 7 days a week, extended hours</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <span className="text-[#F97316]">●</span>
                      <span>Lab tests and imaging available</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <span className="text-[#F97316]">●</span>
                      <span>Nearest location: 2.3 miles away</span>
                    </div>
                  </div>
                  <Button 
                    onClick={onFindUrgentCare}
                    className="w-full h-[48px] bg-[#F97316] text-white rounded-xl text-base font-medium hover:bg-[#EA580C]"
                  >
                    Find Urgent Care Near Me
                  </Button>
                </div>
              </div>
            </div>

            {/* Option 2: 24-Hour Nurse Line */}
            <div className="border border-[#E5E7EB] rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#1F2937]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#1F2937]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-1">
                    Call 24-Hour Nurse Line
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-3">
                    Speak with a registered nurse for guidance
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <span className="text-[#10B981]">✓</span>
                      <span>Available 24/7</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <span className="text-[#10B981]">✓</span>
                      <span>No wait time</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <span className="text-[#10B981]">✓</span>
                      <span>Free for members</span>
                    </div>
                  </div>
                  <Button 
                    onClick={onCall24HourLine}
                    variant="outline"
                    className="w-full h-[48px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#F3F4F6]"
                  >
                    Call Nurse Line
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why This is Urgent */}
        <div className="bg-[#F3F4F6] rounded-xl p-5 mb-6">
          <h3 className="text-base font-semibold text-[#1F2937] mb-3">
            Why Your Symptoms Require Urgent Care
          </h3>
          <p className="text-sm text-[#6B7280] mb-3">
            Your symptom profile suggests a condition that should be evaluated promptly to:
          </p>
          <ul className="text-sm text-[#6B7280] space-y-2 ml-4">
            <li>• Prevent complications</li>
            <li>• Ensure proper diagnosis</li>
            <li>• Begin treatment if necessary</li>
            <li>• Rule out serious conditions</li>
          </ul>
        </div>

        {/* Emergency Warning */}
        <div className="bg-[#EF4444]/10 border-2 border-[#EF4444] rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🚨</span>
            <div>
              <h3 className="text-base font-semibold text-[#EF4444] mb-2">
                Call 911 or Go to ER If:
              </h3>
              <ul className="text-sm text-[#1F2937] space-y-1 ml-4">
                <li>• Severe chest pain or pressure</li>
                <li>• Difficulty breathing or shortness of breath</li>
                <li>• Sudden severe headache or confusion</li>
                <li>• Loss of consciousness or fainting</li>
                <li>• Severe bleeding that won't stop</li>
                <li>• Signs of stroke (facial drooping, arm weakness, speech difficulty)</li>
                <li>• Symptoms rapidly worsen</li>
              </ul>
            </div>
          </div>
        </div>

        {/* ER Locations Button */}
        <Button 
          onClick={onViewERLocations}
          variant="outline"
          className="w-full h-[52px] border-[#EF4444] text-[#EF4444] rounded-xl text-base font-medium hover:bg-[#EF4444]/5"
        >
          View Nearest Emergency Rooms
        </Button>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-[#F3F4F6] rounded-xl">
          <p className="text-xs text-[#6B7280] text-center">
            This is a clinical decision support tool. Use your judgment and seek emergency care if you feel your life is at risk.
          </p>
        </div>
      </div>
    </div>
  );
}
