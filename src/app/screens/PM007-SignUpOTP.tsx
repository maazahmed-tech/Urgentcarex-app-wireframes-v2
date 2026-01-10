import { useState, useRef, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { ArrowLeft } from 'lucide-react';

interface SignUpOTPProps {
  email: string;
  onVerify: () => void;
  onBack: () => void;
}

export default function SignUpOTP({ email, onVerify, onBack }: SignUpOTPProps) {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [resendTimer, setResendTimer] = useState(30);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [resendTimer]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      // Handle paste
      const pastedData = value.slice(0, 6).split('');
      const newOtp = [...otp];
      pastedData.forEach((char, i) => {
        if (index + i < 6) {
          newOtp[index + i] = char;
        }
      });
      setOtp(newOtp);
      
      const nextIndex = Math.min(index + pastedData.length, 5);
      inputRefs.current[nextIndex]?.focus();
      
      if (newOtp.every(digit => digit !== '')) {
        setTimeout(() => onVerify(), 300);
      }
    } else {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && index < 5) {
        inputRefs.current[index + 1]?.focus();
      }

      if (newOtp.every(digit => digit !== '')) {
        setTimeout(() => onVerify(), 300);
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setResendTimer(30);
    // In real app, trigger resend API call here
  };

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header with Back Button */}
      <div className="flex items-center p-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-[#1F2937]" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-8 pt-8">
        {/* Headline */}
        <h1 className="text-[28px] font-bold text-[#1F2937] mb-3">
          Verify Your Account
        </h1>

        {/* Subhead */}
        <p className="text-base text-[#6B7280] mb-12">
          We sent a 6-digit code to{' '}
          <span className="font-medium text-[#1F2937]">{email}</span>
        </p>

        {/* OTP Input Boxes */}
        <div className="flex gap-3 justify-center mb-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={6}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              className="w-12 h-14 text-center text-2xl font-bold border-2 border-[#E5E7EB] rounded-xl focus:border-[#1F2937] focus:outline-none transition-colors"
              style={{
                backgroundColor: digit ? '#1F2937' : 'white',
                color: digit ? 'white' : '#1F2937',
              }}
            />
          ))}
        </div>

        {/* Resend Link */}
        <div className="text-center mb-12">
          <span className="text-base text-[#6B7280]">Didn't receive the code? </span>
          {resendTimer > 0 ? (
            <span className="text-base text-[#6B7280]">Resend ({resendTimer}s)</span>
          ) : (
            <button 
              onClick={handleResend}
              className="text-base font-medium text-[#1F2937] underline"
            >
              Resend
            </button>
          )}
        </div>

        {/* Verify Button */}
        <Button 
          onClick={onVerify}
          disabled={otp.some(digit => !digit)}
          className="w-full h-[52px] bg-[#1F2937] text-white rounded-xl text-base font-medium hover:bg-[#374151] disabled:bg-[#E5E7EB] disabled:text-[#9CA3AF]"
        >
          Verify
        </Button>
      </div>
    </div>
  );
}
