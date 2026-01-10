import { Button } from '../components/ui/button';
import { ArrowLeft, ClipboardList, Shield } from 'lucide-react';

interface ROSIntroProps {
  onStart: () => void;
  onSkip: () => void;
  onBack: () => void;
}

export default function ROSIntro({ onStart, onSkip, onBack }: ROSIntroProps) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center p-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-[#1F2937]" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-8 overflow-y-auto pb-8">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 bg-[#1F2937]/5 rounded-full flex items-center justify-center">
            <ClipboardList className="w-12 h-12 text-[#1F2937]" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-[28px] font-bold text-[#1F2937] mb-3 text-center">
          Review of Systems
        </h1>

        {/* Info Card */}
        <div className="bg-[#F3F4F6] rounded-xl p-5 mb-6">
          <h3 className="text-base font-semibold text-[#1F2937] mb-3">
            What is Review of Systems?
          </h3>
          <p className="text-sm text-[#6B7280]">
            Review of Systems (ROS) is a comprehensive set of questions healthcare providers use to understand your overall health. It helps identify symptoms you might not have mentioned initially.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button 
            onClick={onSkip}
            variant="outline"
            className="flex-1 h-[52px] border-[#E5E7EB] text-[#1F2937] rounded-xl text-base font-medium hover:bg-[#F3F4F6]"
          >
            Skip
          </Button>
          <Button 
            onClick={onStart}
            className="flex-1 h-[52px] bg-[#1F2937] text-white rounded-xl text-base font-medium hover:bg-[#374151]"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}