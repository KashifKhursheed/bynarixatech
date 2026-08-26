import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { PWAProvider } from './components/PWAInstallContext';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { PWAInstallPrompt } from './components/PWAInstallPrompt';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Technologies } from './components/Technologies';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { ProjectEstimator } from './components/ProjectEstimator';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { Careers } from './components/Careers';
import { FAQ } from './components/FAQ';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');

  // Track active scroll section for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'services',
        'why-us',
        'technologies',
        'portfolio',
        'process',
        'pricing',
        'about',
        'careers',
        'blog',
        'contact',
      ];

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ThemeProvider>
      <PWAProvider>
        <div className="min-h-screen bg-[#F8FAFC] dark:bg-[#090D16] text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-[#7C3AED] selection:text-white relative overflow-hidden">
          {/* Subtle Background Glow Accents from Electric Purple / Cyan Palette */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[40%] bg-[#7C3AED]/10 dark:bg-[#7C3AED]/15 rounded-full blur-[140px] pointer-events-none z-0" />
          <div className="absolute top-[40%] right-[-10%] w-[45%] h-[45%] bg-[#06B6D4]/10 dark:bg-[#06B6D4]/12 rounded-full blur-[140px] pointer-events-none z-0" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] bg-[#A855F7]/10 dark:bg-[#A855F7]/12 rounded-full blur-[140px] pointer-events-none z-0" />

          {/* Top Animated Scroll Depth Progress Bar */}
          <ScrollProgressBar />

          {/* Navigation */}
          <Navbar activeSection={activeSection} />

          {/* Main Content Sections */}
          <main>
            <Hero />
            <About />
            <Services />
            <Technologies />
            <WhyChooseUs />
            <Process />
            <Portfolio />
            <ProjectEstimator />
            <Testimonials />
            <Pricing />
            <Careers />
            <FAQ />
            <Blog />
            <Contact />
          </main>

          {/* Footer */}
          <Footer />

          {/* Floating WhatsApp Quick Action Button */}
          <FloatingWhatsApp />

          {/* PWA App Install Banner & Modal Guide */}
          <PWAInstallPrompt />
        </div>
      </PWAProvider>
    </ThemeProvider>
  );
}
