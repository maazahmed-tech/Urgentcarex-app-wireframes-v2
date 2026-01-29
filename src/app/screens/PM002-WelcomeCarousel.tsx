import { useState } from 'react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { Button } from '../components/ui/button';
import { ChevronLeft } from 'lucide-react';

interface WelcomeCarouselProps {
  onComplete: () => void;
  onSkip: () => void;
}

const slides = [
  {
    emoji: '💬',
    illustration: 'Person talking to AI chat',
    title: 'Describe Your Symptoms',
    description: "Tell us how you're feeling using our friendly AI chat. It's quick and easy."
  },
  {
    emoji: '📍',
    illustration: 'Map with pins showing doctors',
    title: 'Get Matched to Care',
    description: "We'll find doctors and facilities that match your symptoms, location, and insurance."
  },
  {
    emoji: '📅',
    illustration: 'Calendar with checkmark',
    title: 'Book Appointments',
    description: 'Schedule visits with doctors directly in the app. No phone calls needed.'
  }
];

export default function WelcomeCarousel({ onComplete, onSkip }: WelcomeCarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === slides.length - 1;

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const goNext = () => {
    if (isLastSlide) {
      onComplete();
    } else {
      setDirection(1);
      setCurrentSlide(prev => prev + 1);
    }
  };

  const goBack = () => {
    if (!isFirstSlide) {
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);
    }
  };

  const handleDragEnd = (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    const { offset } = info;

    if (offset.x < -threshold && !isLastSlide) {
      // Swiped left - go next
      goNext();
    } else if (offset.x > threshold && !isFirstSlide) {
      // Swiped right - go back
      goBack();
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

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

      {/* Content - Swipeable Area */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "tween", duration: 0.2, ease: "easeOut" },
              opacity: { duration: 0.15 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.1}
            onDragEnd={handleDragEnd}
            className="flex flex-col items-center w-full cursor-grab active:cursor-grabbing"
          >
            {/* Illustration Placeholder */}
            <div className="w-[280px] h-[240px] bg-[#F3F4F6] rounded-2xl flex items-center justify-center mb-12">
              <div className="text-center">
                <div className="text-6xl mb-4">{slides[currentSlide].emoji}</div>
                <div className="text-sm text-[#6B7280]">{slides[currentSlide].illustration}</div>
              </div>
            </div>

            {/* Headline */}
            <h2 className="text-2xl font-bold text-[#1F2937] text-center mb-4">
              {slides[currentSlide].title}
            </h2>

            {/* Body Text */}
            <p className="text-base text-[#6B7280] text-center max-w-[280px] mb-12">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Page Dots - Clickable */}
        <div className="flex gap-3 mb-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentSlide ? 'bg-[#1F2937]' : 'bg-[#E5E7EB]'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <div className="w-full max-w-[326px] flex gap-3">
          {/* Back Button - Hidden on first slide */}
          {!isFirstSlide && (
            <Button
              onClick={goBack}
              variant="outline"
              className="h-[52px] px-4 border-[#E5E7EB] text-[#1F2937] rounded-xl"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
          )}

          {/* Next / Get Started Button */}
          <Button
            onClick={goNext}
            className="flex-1 h-[52px] bg-[#1F2937] text-white rounded-xl text-base font-medium hover:bg-[#374151]"
          >
            {isLastSlide ? 'Get Started' : 'Next'}
          </Button>
        </div>
      </div>

      <div className="h-8"></div>
    </div>
  );
}
