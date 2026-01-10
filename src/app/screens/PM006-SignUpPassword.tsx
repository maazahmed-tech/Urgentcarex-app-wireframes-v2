import { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface SignUpPasswordProps {
  onContinue: (password: string) => void;
  onBack: () => void;
}

export default function SignUpPassword({ onContinue, onBack }: SignUpPasswordProps) {
  const [password, setPassword] = useState('Patient@2026!');
  const [confirmPassword, setConfirmPassword] = useState('Patient@2026!');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // Password requirements
  const requirements = {
    minLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasLowercase: /[a-z]/.test(password),
    hasNumber: /\d/.test(password),
    hasSpecial: /[!@#$%^&*]/.test(password),
  };

  const allRequirementsMet = Object.values(requirements).every(Boolean) && 
    password === confirmPassword && 
    password.length > 0;

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header with Back Button */}
      <div className="flex items-center p-4">
        <button onClick={onBack} className="p-2">
          <ArrowLeft className="w-6 h-6 text-[#1F2937]" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-8 pt-8 overflow-y-auto">
        {/* Headline */}
        <h1 className="text-[28px] font-bold text-[#1F2937] mb-3">
          Create Password
        </h1>

        {/* Subhead */}
        <p className="text-base text-[#6B7280] mb-8">
          Choose a strong password to protect your account.
        </p>

        {/* Password Input */}
        <div className="mb-6">
          <Label className="text-sm font-medium text-[#374151] mb-2 block">
            Password
          </Label>
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="h-[52px] rounded-xl border-[#E5E7EB] bg-white pr-12"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showPassword ? (
                <EyeOff className="w-5 h-5 text-[#6B7280]" />
              ) : (
                <Eye className="w-5 h-5 text-[#6B7280]" />
              )}
            </button>
          </div>
        </div>

        {/* Confirm Password Input */}
        <div className="mb-6">
          <Label className="text-sm font-medium text-[#374151] mb-2 block">
            Confirm Password
          </Label>
          <div className="relative">
            <Input
              type={showConfirm ? 'text' : 'password'}
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="h-[52px] rounded-xl border-[#E5E7EB] bg-white pr-12"
            />
            <button
              type="button"
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-4 top-1/2 -translate-y-1/2"
            >
              {showConfirm ? (
                <EyeOff className="w-5 h-5 text-[#6B7280]" />
              ) : (
                <Eye className="w-5 h-5 text-[#6B7280]" />
              )}
            </button>
          </div>
        </div>

        {/* Requirements List */}
        <div className="mb-8">
          <p className="text-sm font-medium text-[#1F2937] mb-3">Password must have:</p>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className={requirements.minLength ? 'text-[#10B981]' : 'text-[#9CA3AF]'}>
                {requirements.minLength ? '✓' : '○'}
              </span>
              <span className="text-sm text-[#374151]">At least 8 characters</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={requirements.hasUppercase ? 'text-[#10B981]' : 'text-[#9CA3AF]'}>
                {requirements.hasUppercase ? '✓' : '○'}
              </span>
              <span className="text-sm text-[#374151]">One uppercase letter</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={requirements.hasLowercase ? 'text-[#10B981]' : 'text-[#9CA3AF]'}>
                {requirements.hasLowercase ? '✓' : '○'}
              </span>
              <span className="text-sm text-[#374151]">One lowercase letter</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={requirements.hasNumber ? 'text-[#10B981]' : 'text-[#9CA3AF]'}>
                {requirements.hasNumber ? '✓' : '○'}
              </span>
              <span className="text-sm text-[#374151]">One number</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={requirements.hasSpecial ? 'text-[#10B981]' : 'text-[#9CA3AF]'}>
                {requirements.hasSpecial ? '✓' : '○'}
              </span>
              <span className="text-sm text-[#374151]">One special character</span>
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <Button 
          onClick={() => onContinue(password)}
          disabled={!allRequirementsMet}
          className="w-full h-[52px] bg-[#1F2937] text-white rounded-xl text-base font-medium hover:bg-[#374151] disabled:bg-[#E5E7EB] disabled:text-[#9CA3AF] mb-8"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}