import { Button } from '../components/ui/button';

interface WelcomeScreen3Props {
  onGetStarted: () => void;
  onSkip: () => void;
}

export default function WelcomeScreen3({ onGetStarted, onSkip }: WelcomeScreen3Props) {
  return (
    <div className="flex flex-col h-full bg-white">
      {/* Skip Button */}
      <div className="flex justify-end p-4">
        <button 
          onClick={onSkip}
          className="text-base font-medium text-[#6B7280]"
        >
          Skip
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* Illustration Placeholder */}
        <div className="w-[280px] h-[240px] bg-[#F3F4F6] rounded-2xl flex items-center justify-center mb-12">
          <div className="text-center">
            <div className="text-6xl mb-4">📅</div>
            <div className="text-sm text-[#6B7280]">Calendar with checkmark</div>
          </div>
        </div>

        {/* Headline */}
        <h2 className="text-2xl font-bold text-[#1F2937] text-center mb-4">
          Book Appointments
        </h2>

        {/* Body Text */}
        <p className="text-base text-[#6B7280] text-center max-w-[280px] mb-12">
          Schedule visits with doctors directly in the app. No phone calls needed.
        </p>

        {/* Page Dots */}
        <div className="flex gap-3 mb-12">
          <div className="w-2 h-2 rounded-full bg-[#E5E7EB]"></div>
          <div className="w-2 h-2 rounded-full bg-[#E5E7EB]"></div>
          <div className="w-2 h-2 rounded-full bg-[#1F2937]"></div>
        </div>

        {/* Get Started Button */}
        <Button 
          onClick={onGetStarted}
          className="w-full max-w-[326px] h-[52px] bg-[#1F2937] text-white rounded-xl text-base font-medium hover:bg-[#374151]"
        >
          Get Started
        </Button>
      </div>

      <div className="h-8"></div>
    </div>
  );
}
