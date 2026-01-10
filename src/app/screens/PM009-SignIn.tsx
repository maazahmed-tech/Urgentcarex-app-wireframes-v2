import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { ArrowLeft, Eye, EyeOff } from 'lucide-react';

interface SignInProps {
  onSignIn: () => void;
  onForgotPassword: () => void;
  onCreateAccount: () => void;
}

export default function SignIn({ onSignIn, onForgotPassword, onCreateAccount }: SignInProps) {
  const [emailOrPhone, setEmailOrPhone] = useState('demo.patient@urgentcarex.com');
  const [password, setPassword] = useState('Patient@2026!');
  const [showPassword, setShowPassword] = useState(false);

  const isValid = emailOrPhone.length > 0 && password.length > 0;

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header with Back Button */}
      <div className="flex items-center p-4">
        <button onClick={() => window.history.back()} className="p-2">
          <ArrowLeft className="w-6 h-6 text-[#1F2937]" />
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 px-8 pt-8">
        {/* Headline */}
        <h1 className="text-[28px] font-bold text-[#1F2937] mb-3">
          Welcome Back
        </h1>

        {/* Subhead */}
        <p className="text-base text-[#6B7280] mb-8">
          Sign in to your account
        </p>

        {/* Email/Phone Input */}
        <div className="mb-6">
          <Label className="text-sm font-medium text-[#374151] mb-2 block">
            Email or Phone Number
          </Label>
          <Input
            type="text"
            placeholder="demo.patient@urgentcarex.com"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            className="h-[52px] rounded-xl border-[#E5E7EB] bg-white"
          />
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <Label className="text-sm font-medium text-[#374151] mb-2 block">
            Password
          </Label>
          <div className="relative">
            <Input
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
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

        {/* Forgot Password Link */}
        <div className="flex justify-end mb-8">
          <button 
            onClick={onForgotPassword}
            className="text-base text-[#1F2937] hover:underline"
          >
            Forgot Password?
          </button>
        </div>

        {/* Sign In Button */}
        <Button 
          onClick={onSignIn}
          disabled={!isValid}
          className="w-full h-[52px] bg-[#1F2937] text-white rounded-xl text-base font-medium hover:bg-[#374151] disabled:bg-[#E5E7EB] disabled:text-[#9CA3AF] mb-8"
        >
          Sign In
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-8">
          <div className="flex-1 h-[1px] bg-[#E5E7EB]"></div>
          <span className="text-sm text-[#6B7280]">or</span>
          <div className="flex-1 h-[1px] bg-[#E5E7EB]"></div>
        </div>

        {/* Create Account Link */}
        <div className="text-center">
          <span className="text-base text-[#6B7280]">Don't have an account? </span>
          <button 
            onClick={onCreateAccount}
            className="text-base font-medium text-[#1F2937] underline"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
}