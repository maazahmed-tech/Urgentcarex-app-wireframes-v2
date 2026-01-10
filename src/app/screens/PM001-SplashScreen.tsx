import { useEffect, useState } from 'react';
import { Progress } from '../components/ui/progress';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 300);
          return 100;
        }
        return prev + 10;
      });
    }, 200);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="flex flex-col items-center justify-center h-full bg-white px-8">
      {/* Logo Container */}
      <div className="w-[120px] h-[120px] bg-white rounded-3xl flex items-center justify-center mb-6">
        <div className="text-6xl">✚</div>
      </div>

      {/* App Name */}
      <h1 className="text-[28px] font-bold text-[#1F2937] mb-2">UrgentCareX</h1>

      {/* Tagline */}
      <p className="text-base text-[#6B7280] mb-16">Find Care Fast</p>

      {/* Loading Progress Bar */}
      <div className="w-[200px]">
        <Progress value={progress} className="h-1 bg-[#E5E7EB]" />
      </div>
    </div>
  );
}
