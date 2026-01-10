import { Button } from '../components/ui/button';
import { Video, Clock, Shield, CheckCircle } from 'lucide-react';

interface VirtualConsultIntroProps {
  onStartConsult: () => void;
  onBack: () => void;
}

export default function VirtualConsultIntro({ onStartConsult, onBack }: VirtualConsultIntroProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Content */}
      <div className="flex-1 px-8 overflow-y-auto pb-8">
        {/* Icon */}
        <div className="flex justify-center mt-12 mb-6">
          <div className="w-24 h-24 bg-[#1F2937]/5 rounded-full flex items-center justify-center">
            <Video className="w-12 h-12 text-[#1F2937]" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-[28px] font-bold text-[#1F2937] mb-3 text-center">
          Virtual Consultation
        </h1>

        {/* Subhead */}
        <p className="text-base text-[#6B7280] mb-8 text-center">
          Connect with a healthcare provider via video call from the comfort of your home.
        </p>

        {/* Features */}
        <div className="space-y-4 mb-8">
          <div className="flex items-start gap-4 p-4 bg-[#F3F4F6] rounded-xl">
            <div className="w-10 h-10 bg-[#10B981]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-[#10B981]" />
            </div>
            <div>
              <p className="text-base font-semibold text-[#1F2937] mb-1">
                Available Now
              </p>
              <p className="text-sm text-[#6B7280]">
                Connect with a provider within minutes
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-[#F3F4F6] rounded-xl">
            <div className="w-10 h-10 bg-[#10B981]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <Shield className="w-5 h-5 text-[#10B981]" />
            </div>
            <div>
              <p className="text-base font-semibold text-[#1F2937] mb-1">
                Secure & Private
              </p>
              <p className="text-sm text-[#6B7280]">
                HIPAA-compliant encrypted video connection
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 bg-[#F3F4F6] rounded-xl">
            <div className="w-10 h-10 bg-[#10B981]/10 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-[#10B981]" />
            </div>
            <div>
              <p className="text-base font-semibold text-[#1F2937] mb-1">
                Full Service
              </p>
              <p className="text-sm text-[#6B7280]">
                Diagnosis, treatment plan, and prescriptions available
              </p>
            </div>
          </div>
        </div>

        {/* What to Expect */}
        <div className="mb-8">
          <h3 className="text-base font-semibold text-[#1F2937] mb-4">
            What to Expect:
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#1F2937] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-medium">1</span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#1F2937]">Test Your Connection</p>
                <p className="text-sm text-[#6B7280]">We'll check your camera and microphone</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#1F2937] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-medium">2</span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#1F2937]">Virtual Waiting Room</p>
                <p className="text-sm text-[#6B7280]">Wait for the next available provider</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#1F2937] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-medium">3</span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#1F2937]">Video Consultation</p>
                <p className="text-sm text-[#6B7280]">Discuss your symptoms with the provider</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-[#1F2937] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-white text-sm font-medium">4</span>
              </div>
              <div>
                <p className="text-sm font-medium text-[#1F2937]">Treatment Plan</p>
                <p className="text-sm text-[#6B7280]">Receive diagnosis and next steps</p>
              </div>
            </div>
          </div>
        </div>

        {/* Before You Start */}
        <div className="bg-[#F59E0B]/10 border-l-4 border-[#F59E0B] rounded-xl p-4 mb-8">
          <h3 className="text-base font-semibold text-[#1F2937] mb-2">
            Before You Start:
          </h3>
          <ul className="text-sm text-[#6B7280] space-y-1 ml-4">
            <li>• Find a quiet, private location</li>
            <li>• Have good lighting for video</li>
            <li>• Keep your insurance card handy</li>
            <li>• Have a list of current medications ready</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="space-y-3">
          <Button 
            onClick={onStartConsult}
            className="w-full h-[52px] bg-[#1F2937] text-white rounded-xl text-base font-medium hover:bg-[#374151]"
          >
            <Video className="w-5 h-5 mr-2" />
            Start Virtual Consult
          </Button>

          <Button 
            onClick={onBack}
            variant="outline"
            className="w-full h-[52px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#F3F4F6]"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
