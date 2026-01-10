import { Button } from '../components/ui/button';
import { Home, Calendar, Phone } from 'lucide-react';

interface TriageSelfCareProps {
  onGoHome: () => void;
  onBookAppointment: () => void;
  onCallNurse: () => void;
  symptoms?: string[];
}

export default function TriageSelfCare({ 
  onGoHome, 
  onBookAppointment, 
  onCallNurse,
  symptoms = []
}: TriageSelfCareProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header with Result Badge */}
      <div className="bg-[#10B981] px-6 pt-12 pb-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4">
            <span className="text-4xl">✓</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Self-Care Recommended
          </h1>
          <p className="text-base text-white/90">
            Your symptoms can likely be managed at home
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 overflow-y-auto pb-8">
        {/* Triage Level Info */}
        <div className="bg-[#10B981]/10 border-l-4 border-[#10B981] rounded-xl p-5 mb-6">
          <p className="text-sm font-semibold text-[#1F2937] mb-2">
            Triage Level: Low Priority (Green)
          </p>
          <p className="text-sm text-[#6B7280]">
            Based on your symptoms, self-care measures should help you feel better. However, if symptoms worsen or new symptoms develop, please seek medical attention.
          </p>
        </div>

        {/* Recommendations */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            Recommended Care
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
              <h3 className="text-base font-semibold text-[#1F2937] mb-2">
                💊 Rest and Hydration
              </h3>
              <ul className="text-sm text-[#6B7280] space-y-1 ml-4">
                <li>• Get plenty of rest (7-9 hours of sleep)</li>
                <li>• Drink at least 8 glasses of water daily</li>
                <li>• Avoid strenuous activities</li>
              </ul>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
              <h3 className="text-base font-semibold text-[#1F2937] mb-2">
                🌡️ Symptom Management
              </h3>
              <ul className="text-sm text-[#6B7280] space-y-1 ml-4">
                <li>• Over-the-counter pain relievers (as directed)</li>
                <li>• Monitor your temperature if you have a fever</li>
                <li>• Use a humidifier for congestion</li>
              </ul>
            </div>

            <div className="bg-white border border-[#E5E7EB] rounded-xl p-5">
              <h3 className="text-base font-semibold text-[#1F2937] mb-2">
                ⏰ Monitor Your Symptoms
              </h3>
              <ul className="text-sm text-[#6B7280] space-y-1 ml-4">
                <li>• Keep track of how you're feeling</li>
                <li>• Note any changes or worsening symptoms</li>
                <li>• Follow up if symptoms last more than 7 days</li>
              </ul>
            </div>
          </div>
        </div>

        {/* When to Seek Care */}
        <div className="bg-[#F59E0B]/10 border-l-4 border-[#F59E0B] rounded-xl p-5 mb-6">
          <h3 className="text-base font-semibold text-[#1F2937] mb-2">
            ⚠️ Seek Medical Care If:
          </h3>
          <ul className="text-sm text-[#6B7280] space-y-1 ml-4">
            <li>• Symptoms worsen or don't improve in 3-5 days</li>
            <li>• You develop a high fever (over 103°F/39.4°C)</li>
            <li>• You experience difficulty breathing</li>
            <li>• Symptoms interfere with daily activities</li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={onBookAppointment}
            variant="outline"
            className="w-full h-[52px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#F3F4F6]"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Follow-up Appointment
          </Button>

          <Button 
            onClick={onCallNurse}
            variant="outline"
            className="w-full h-[52px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#F3F4F6]"
          >
            <Phone className="w-5 h-5 mr-2" />
            Speak with a Nurse
          </Button>

          <Button 
            onClick={onGoHome}
            className="w-full h-[52px] bg-[#1F2937] text-white rounded-xl text-base font-medium hover:bg-[#374151]"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Dashboard
          </Button>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-[#F3F4F6] rounded-xl">
          <p className="text-xs text-[#6B7280] text-center">
            This assessment is for informational purposes only and does not replace professional medical advice. If you have concerns about your health, please consult a healthcare provider.
          </p>
        </div>
      </div>
    </div>
  );
}
