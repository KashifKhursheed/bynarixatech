import React, { useState, useEffect } from 'react';

export const ScrollProgressBar: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;

      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (currentScroll / totalHeight) * 100));
        setScrollProgress(progress);
        setIsVisible(currentScroll > 10);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside
      aria-label="Page scroll progress indicator"
      aria-valuenow={Math.round(scrollProgress)}
      aria-valuemin={0}
      aria-valuemax={100}
      role="progressbar"
      className="fixed top-0 left-0 right-0 z-[100] h-[3.5px] pointer-events-none bg-[#E5E1F5]/80 dark:bg-[#171525]/80 backdrop-blur-xs overflow-visible"
    >
      {/* Animated Gradient Fill Bar */}
      <div
        className="h-full relative transition-[width] duration-150 ease-out bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#06B6D4] shadow-[0_0_12px_rgba(124,58,237,0.4)] dark:shadow-[0_0_14px_rgba(168,85,247,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      >
        {/* Animated continuous shimmer light beam */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 dark:via-white/60 to-transparent animate-shimmer-sweep" />

        {/* Glowing Beacon Head on Leading Edge */}
        {isVisible && scrollProgress > 0 && (
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 flex items-center justify-center">
            {/* Outer pulse glow */}
            <span className="absolute w-3.5 h-3.5 rounded-full bg-[#7C3AED] dark:bg-[#A855F7] opacity-75 animate-ping" />
            {/* Solid glowing center dot */}
            <span className="relative w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-white dark:bg-[#A855F7] shadow-[0_0_8px_#7C3AED,0_0_16px_#06B6D4] dark:shadow-[0_0_10px_#A855F7,0_0_20px_#06B6D4]" />
          </div>
        )}
      </div>
    </aside>
  );
};
