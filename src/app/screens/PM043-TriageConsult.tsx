import { Button } from '../components/ui/button';
import { Video, Calendar, Phone, Home } from 'lucide-react';

interface TriageConsultProps {
  onBookVirtualConsult: () => void;
  onBookInPerson: () => void;
  onCallNurse: () => void;
  onGoHome: () => void;
}

export default function TriageConsult({ 
  onBookVirtualConsult, 
  onBookInPerson, 
  onCallNurse,
  onGoHome
}: TriageConsultProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header with Result Badge */}
      <div className="bg-[#F59E0B] px-6 pt-12 pb-8">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4">
            <span className="text-4xl">💬</span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">
            Consultation Recommended
          </h1>
          <p className="text-base text-white/90">
            You should speak with a healthcare provider
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 py-6 overflow-y-auto pb-8">
        {/* Triage Level Info */}
        <div className="bg-[#F59E0B]/10 border-l-4 border-[#F59E0B] rounded-xl p-5 mb-6">
          <p className="text-sm font-semibold text-[#1F2937] mb-2">
            Triage Level: Moderate Priority (Yellow)
          </p>
          <p className="text-sm text-[#6B7280]">
            Based on your symptoms, we recommend consulting with a healthcare provider within the next 1-2 days. This can be done virtually or in-person.
          </p>
        </div>

        {/* Recommended Timeline */}
        <div className="mb-6">
          <div className="flex items-center gap-3 p-4 bg-[#F59E0B]/10 rounded-xl">
            <span className="text-2xl">⏰</span>
            <div>
              <p className="text-sm font-semibold text-[#1F2937]">Recommended Timeline</p>
              <p className="text-sm text-[#6B7280]">Consult within 1-2 days</p>
            </div>
          </div>
        </div>

        {/* Consultation Options */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#1F2937] mb-4">
            Choose Your Consultation Type
          </h2>

          <div className="space-y-4">
            {/* Virtual Consult Option */}
            <div className="border-2 border-[#1F2937] rounded-2xl p-5">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#1F2937]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Video className="w-6 h-6 text-[#1F2937]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-1">
                    Virtual Consultation
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-3">
                    Video call with a licensed provider from home
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <span className="text-[#10B981]">✓</span>
                      <span>Available today</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <span className="text-[#10B981]">✓</span>
                      <span>No travel required</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <span className="text-[#10B981]">✓</span>
                      <span>Prescription if needed</span>
                    </div>
                  </div>
                  <Button 
                    onClick={onBookVirtualConsult}
                    className="w-full h-[48px] bg-[#1F2937] text-white rounded-xl text-base font-medium hover:bg-[#374151]"
                  >
                    Book Virtual Consult
                  </Button>
                </div>
              </div>
            </div>

            {/* In-Person Option */}
            <div className="border border-[#E5E7EB] rounded-2xl p-5">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-[#1F2937]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-[#1F2937]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-[#1F2937] mb-1">
                    In-Person Visit
                  </h3>
                  <p className="text-sm text-[#6B7280] mb-3">
                    Visit a provider at a nearby clinic
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <span className="text-[#10B981]">✓</span>
                      <span>Physical examination</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <span className="text-[#10B981]">✓</span>
                      <span>Diagnostic tests available</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <span className="text-[#10B981]">✓</span>
                      <span>Next available: Tomorrow</span>
                    </div>
                  </div>
                  <Button 
                    onClick={onBookInPerson}
                    variant="outline"
                    className="w-full h-[48px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#F3F4F6]"
                  >
                    Book In-Person Visit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Self-Care While Waiting */}
        <div className="bg-[#F3F4F6] rounded-xl p-5 mb-6">
          <h3 className="text-base font-semibold text-[#1F2937] mb-3">
            💊 Self-Care While You Wait
          </h3>
          <ul className="text-sm text-[#6B7280] space-y-2 ml-4">
            <li>• Rest and stay hydrated</li>
            <li>• Monitor your symptoms</li>
            <li>• Take over-the-counter medications as needed</li>
            <li>• Avoid strenuous activities</li>
          </ul>
        </div>

        {/* Warning Signs */}
        <div className="bg-[#EF4444]/10 border-l-4 border-[#EF4444] rounded-xl p-5 mb-6">
          <h3 className="text-base font-semibold text-[#EF4444] mb-2">
            🚨 Seek Emergency Care If:
          </h3>
          <ul className="text-sm text-[#6B7280] space-y-1 ml-4">
            <li>• Severe chest pain or difficulty breathing</li>
            <li>• High fever that won't come down (104°F+)</li>
            <li>• Symptoms rapidly worsen</li>
            <li>• You feel your life is in danger</li>
          </ul>
        </div>

        {/* Additional Actions */}
        <div className="space-y-3">
          <Button 
            onClick={onCallNurse}
            variant="outline"
            className="w-full h-[52px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#F3F4F6]"
          >
            <Phone className="w-5 h-5 mr-2" />
            Speak with a Nurse Now
          </Button>

          <Button 
            onClick={onGoHome}
            variant="outline"
            className="w-full h-[52px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#F3F4F6]"
          >
            <Home className="w-5 h-5 mr-2" />
            Go to Dashboard
          </Button>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-[#F3F4F6] rounded-xl">
          <p className="text-xs text-[#6B7280] text-center">
            This assessment is for guidance only. If you feel your condition is urgent, seek immediate medical attention.
          </p>
        </div>
      </div>
    </div>
  );
}
