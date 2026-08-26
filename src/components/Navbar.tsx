import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
import { usePWA } from './PWAInstallContext';
import { openWhatsApp, DISPLAY_PHONE } from '../utils/whatsapp';
import {
  Sun,
  Moon,
  Menu,
  X,
  MessageSquare,
  Sparkles,
  Terminal,
  ArrowRight,
  Download,
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { theme, toggleTheme } = useTheme();
  const { isInstalled, installApp } = usePWA();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Solutions', href: '#why-us' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Careers', href: '#careers' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Main Sticky Navbar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-2.5 sm:py-3 glass-nav border-b border-[#E2E8F0] dark:border-[#263241] shadow-md shadow-slate-900/5'
            : 'py-4 sm:py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            >
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#0097A7] via-[#6D28D9] to-[#DB2777] dark:from-[#00E5FF] dark:via-[#8B5CF6] dark:to-[#FF2BD6] flex items-center justify-center text-white dark:text-black font-bold shadow-lg shadow-[#0097A7]/20 dark:shadow-[#00E5FF]/20 group-hover:scale-105 transition-transform">
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] flex items-center gap-1">
                  Bynarixa <span className="text-[#0097A7] dark:text-[#00E5FF] font-extrabold">Tech</span>
                </span>
                <span className="block text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-[#475569] dark:text-[#94A3B8]">
                  Software Solutions
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-lg transition-all relative ${
                      isActive
                        ? 'text-[#0097A7] dark:text-[#00E5FF] font-semibold bg-[#F1F5F9] dark:bg-[#151B24]'
                        : 'text-[#475569] dark:text-[#94A3B8] hover:text-[#0097A7] dark:hover:text-[#00E5FF] hover:bg-[#F1F5F9] dark:hover:bg-[#151B24]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#0097A7] dark:bg-[#00E5FF] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Install PWA App Button (Desktop & Tablet) */}
              {!isInstalled && (
                <button
                  onClick={installApp}
                  aria-label="Install App as PWA"
                  className="hidden md:inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-[#151B24] hover:bg-[#0097A7]/10 dark:hover:bg-[#00E5FF]/10 text-slate-800 dark:text-slate-200 hover:text-[#0097A7] dark:hover:text-[#00E5FF] border border-slate-200 dark:border-[#263241] text-xs font-bold transition-all hover:scale-105 active:scale-95"
                >
                  <Download className="w-3.5 h-3.5 text-[#0097A7] dark:text-[#00E5FF]" />
                  <span>Install App</span>
                </button>
              )}

              {/* Theme Switcher */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Light and Dark Mode"
                className="p-2.5 rounded-xl bg-[#F1F5F9] dark:bg-[#151B24] text-[#0F172A] dark:text-[#F8FAFC] border border-[#E2E8F0] dark:border-[#263241] hover:text-[#0097A7] dark:hover:text-[#00E5FF] transition-all"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-[#00E5FF] animate-spin-slow" />
                ) : (
                  <Moon className="w-4 h-4 text-[#6D28D9]" />
                )}
              </button>

              {/* WhatsApp / AI Direct Quote Button */}
              <button
                onClick={() => openWhatsApp('Hello Bynarixa Tech Solutions! I want to request a free project quote from your AI Consultant.')}
                className="hidden sm:inline-flex relative overflow-hidden group items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#0097A7] dark:from-[#25D366] dark:via-[#00E5FF] dark:to-[#8B5CF6] text-white dark:text-black font-bold text-xs sm:text-sm shadow-md shadow-[#25D366]/25 dark:shadow-[#00E5FF]/25 hover:shadow-lg hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none" />
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white dark:bg-black opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white dark:bg-black" />
                </span>
                <MessageSquare className="w-4 h-4" />
                <span>AI WhatsApp Chat</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="lg:hidden p-2.5 rounded-xl bg-[#F1F5F9] dark:bg-[#151B24] text-[#0F172A] dark:text-[#F8FAFC] border border-[#E2E8F0] dark:border-[#263241] hover:bg-slate-200 dark:hover:bg-[#1A2330] transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 lg:hidden">
          <div
            className="fixed inset-0 bg-[#070A0F]/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-16 right-0 bottom-0 w-full max-w-xs bg-[#FFFFFF] dark:bg-[#0D1117] border-l border-[#E2E8F0] dark:border-[#263241] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div className="space-y-2">
              <div className="pb-4 border-b border-[#E2E8F0] dark:border-[#263241] mb-4 flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-widest text-[#475569] dark:text-[#94A3B8] uppercase">
                  Navigation Menu
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-[#0097A7]/10 dark:bg-[#00E5FF]/10 text-[#0097A7] dark:text-[#00E5FF] font-mono font-semibold">
                  {DISPLAY_PHONE}
                </span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-[#0F172A] dark:text-[#F8FAFC] hover:bg-[#F1F5F9] dark:hover:bg-[#151B24] hover:text-[#0097A7] dark:hover:text-[#00E5FF] transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-[#E2E8F0] dark:border-[#263241] space-y-3">
              {!isInstalled && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    installApp();
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-[#151B24] border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold text-xs flex items-center justify-center gap-2 hover:bg-slate-200 dark:hover:bg-[#1A2330] transition-colors"
                >
                  <Download className="w-4 h-4 text-[#0097A7] dark:text-[#00E5FF]" />
                  <span>Install App to Home Screen</span>
                </button>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp('Hello Bynarixa Tech Solutions! I would like to start a project via your AI Consultant.');
                }}
                className="w-full relative overflow-hidden group flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#0097A7] dark:from-[#25D366] dark:via-[#00E5FF] dark:to-[#8B5CF6] text-white dark:text-black font-extrabold text-sm shadow-lg shadow-[#25D366]/25 dark:shadow-[#00E5FF]/25 hover:shadow-xl transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none" />
                <MessageSquare className="w-4 h-4" />
                <span>Chat with AI on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
