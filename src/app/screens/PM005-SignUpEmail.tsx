import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { ArrowLeft } from 'lucide-react';

interface SignUpEmailProps {
  onContinue: (email: string) => void;
  onSignIn: () => void;
  onBack: () => void;
  onViewTerms: () => void;
  onViewPrivacy: () => void;
}

export default function SignUpEmail({ onContinue, onSignIn, onBack, onViewTerms, onViewPrivacy }: SignUpEmailProps) {
  const [email, setEmail] = useState('demo.patient@urgentcarex.com');

  const isValid = email.length > 0 && email.includes('@');

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
          Create Account
        </h1>

        {/* Subhead */}
        <p className="text-base text-[#6B7280] mb-8">
          Enter your email to get started.
        </p>

        {/* Input */}
        <div className="mb-4">
          <Label className="text-sm font-medium text-[#374151] mb-2 block">
            Email
          </Label>
          <Input
            type="email"
            placeholder="email@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-[52px] rounded-xl border-[#E5E7EB] bg-white"
          />
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-[#9CA3AF] mb-8">
          Note: Your email address cannot be changed after account creation.
        </p>

        {/* Continue Button */}
        <Button
          onClick={() => onContinue(email)}
          disabled={!isValid}
          className="w-full h-[52px] bg-[#1F2937] text-white rounded-xl text-base font-medium hover:bg-[#374151] disabled:bg-[#E5E7EB] disabled:text-[#9CA3AF] mb-8"
        >
          Continue
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-[1px] bg-[#E5E7EB]"></div>
          <span className="text-sm text-[#6B7280]">or</span>
          <div className="flex-1 h-[1px] bg-[#E5E7EB]"></div>
        </div>

        {/* Sign In Link */}
        <div className="text-center mb-6">
          <span className="text-base text-[#6B7280]">Already have an account? </span>
          <button 
            onClick={onSignIn}
            className="text-base font-medium text-[#1F2937] underline"
          >
            Sign In
          </button>
        </div>

        {/* Legal Text */}
        <p className="text-sm text-[#6B7280] text-center">
          By continuing, you agree to our{' '}
          <button
            onClick={onViewTerms}
            className="text-sm text-[#1F2937] underline"
          >
            Terms of Service
          </button>
          {' '}and{' '}
          <button
            onClick={onViewPrivacy}
            className="text-sm text-[#1F2937] underline"
          >
            Privacy Policy
          </button>.
        </p>
      </div>
    </div>
  );
}