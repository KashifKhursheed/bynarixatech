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
    <section className="py-20 relative bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-black dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Trusted Worldwide</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black dark:text-white tracking-tight">
            What Our <span className="text-gradient">Clients Say</span>.
          </h2>
          <p className="text-base sm:text-lg text-black dark:text-slate-300 font-medium">
            Read real feedback from CTOs, product managers, and founders who built their flagship software with Bynarixa Tech Solutions.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 shadow-2xl relative space-y-6 animate-fade-in bg-white dark:bg-[#151B24]">
            <Quote className="w-12 h-12 text-blue-500/20 dark:text-cyan-400/20 absolute top-6 right-6" />

            {/* Stars */}
            <div className="flex items-center gap-1">
              {Array.from({ length: current.rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Content */}
            <p className="text-base sm:text-xl text-black dark:text-slate-200 font-medium leading-relaxed italic">
              "{current.content}"
            </p>

            {/* Author details */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500 shadow-md"
                />
                <div>
                  <h3 className="text-base font-bold text-black dark:text-white">
                    {current.name}
                  </h3>
                  <p className="text-xs text-black dark:text-slate-400 font-bold">
                    {current.role} • <span className="text-black dark:text-cyan-400 font-black">{current.company}</span>
                  </p>
                </div>
              </div>

              <span className="hidden sm:inline-block text-xs font-mono font-bold px-3 py-1 rounded-full bg-blue-50 dark:bg-slate-800 text-black dark:text-cyan-300 border border-slate-200 dark:border-transparent">
                Project: {current.project}
              </span>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              aria-label="Previous Testimonial"
              className="p-3 rounded-full bg-white dark:bg-slate-800 text-black dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 shadow-md border border-slate-200 dark:border-slate-700 transition-all hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    currentIndex === idx
                      ? 'bg-blue-600 w-8'
                      : 'bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next Testimonial"
              className="p-3 rounded-full bg-white dark:bg-slate-800 text-black dark:text-slate-200 hover:text-cyan-600 dark:hover:text-cyan-400 shadow-md border border-slate-200 dark:border-slate-700 transition-all hover:scale-105"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
