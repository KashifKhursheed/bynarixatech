import React, { useState, useEffect } from 'react';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Star, ChevronLeft, ChevronRight, Quote, Sparkles } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Auto slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-20 relative bg-[#F1EEFF]/30 dark:bg-[#09090F]/60 border-y border-[#E5E1F5] dark:border-[#28243A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EEFF] dark:bg-[#171525] border border-[#E5E1F5] dark:border-[#28243A] text-[#7C3AED] dark:text-[#A855F7] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#7C3AED] dark:text-[#A855F7]" />
            <span>Trusted Worldwide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11111A] dark:text-[#F8F7FF] tracking-tight">
            What Our <span className="text-gradient">Clients Say</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6070] dark:text-[#A9A7B8] font-medium">
            Read real feedback from CTOs, product managers, and founders who built their flagship software with Bynarixa Tech Solutions.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#E5E1F5] dark:border-[#28243A] shadow-2xl relative space-y-6 animate-fade-in bg-white dark:bg-[#11111A]">
            <Quote className="w-12 h-12 text-[#7C3AED]/15 dark:text-[#A855F7]/15 absolute top-6 right-6" />

            {/* Stars */}
            <div className="flex items-center gap-1">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Content */}
            <p className="text-base sm:text-xl text-[#11111A] dark:text-[#F8F7FF] font-medium leading-relaxed italic">
              "{current.content}"
            </p>

            {/* Author details */}
            <div className="pt-6 border-t border-[#E5E1F5] dark:border-[#28243A] flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-[#7C3AED] shadow-md"
                />
                <div>
                  <h3 className="text-base font-bold text-[#11111A] dark:text-[#F8F7FF]">
                    {current.name}
                  </h3>
                  <p className="text-xs text-[#5F6070] dark:text-[#A9A7B8] font-bold">
                    {current.role} • <span className="text-[#7C3AED] dark:text-[#A855F7] font-black">{current.company}</span>
                  </p>
                </div>
              </div>

              <span className="hidden sm:inline-block text-xs font-mono font-bold px-3 py-1 rounded-full bg-[#F1EEFF] dark:bg-[#171525] text-[#7C3AED] dark:text-[#A855F7] border border-[#E5E1F5] dark:border-[#28243A]">
                Project: {current.project}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="p-3 rounded-full bg-white dark:bg-[#171525] text-[#11111A] dark:text-[#F8F7FF] hover:text-[#7C3AED] dark:hover:text-[#A855F7] shadow-md border border-[#E5E1F5] dark:border-[#28243A] transition-all hover:scale-105 cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'bg-[#7C3AED] w-8'
                      : 'bg-[#E5E1F5] dark:bg-[#28243A] hover:bg-[#7C3AED]/50'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="p-3 rounded-full bg-white dark:bg-[#171525] text-[#11111A] dark:text-[#F8F7FF] hover:text-[#7C3AED] dark:hover:text-[#A855F7] shadow-md border border-[#E5E1F5] dark:border-[#28243A] transition-all hover:scale-105 cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
