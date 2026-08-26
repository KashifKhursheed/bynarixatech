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
            ? 'py-2.5 sm:py-3 glass-nav border-b border-[#E5E1F5] dark:border-[#28243A] shadow-md shadow-purple-950/5'
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
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-[#7C3AED] via-[#A855F7] to-[#06B6D4] flex items-center justify-center text-white font-bold shadow-lg shadow-[#7C3AED]/25 group-hover:scale-105 transition-transform">
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <span className="text-lg sm:text-xl font-bold tracking-tight text-[#11111A] dark:text-[#F8F7FF] flex items-center gap-1">
                  Bynarixa <span className="text-[#7C3AED] dark:text-[#A855F7] font-extrabold">Tech</span>
                </span>
                <span className="block text-[9px] sm:text-[10px] font-mono tracking-widest uppercase text-[#5F6070] dark:text-[#A9A7B8] font-bold">
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
                    className={`px-3 py-1.5 text-xs xl:text-sm rounded-lg transition-all relative font-semibold ${
                      isActive
                        ? 'text-[#7C3AED] dark:text-[#A855F7] font-black bg-[#F1EEFF] dark:bg-[#171525]'
                        : 'text-[#11111A] dark:text-[#A9A7B8] hover:text-[#7C3AED] dark:hover:text-[#A855F7] hover:bg-[#F1EEFF] dark:hover:bg-[#171525]'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#7C3AED] dark:bg-[#A855F7] rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Install App Button (Desktop & Tablet) */}
              {!isInstalled && (
                <button
                  onClick={installApp}
                  aria-label="Install App"
                  className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-md shadow-[#7C3AED]/25 text-xs font-bold transition-all hover:scale-105 active:scale-95 border border-[#7C3AED] cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                  <span>Install App</span>
                </button>
              )}

              {/* Theme Switcher */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Light and Dark Mode"
                className="p-2.5 rounded-xl bg-[#F1EEFF] dark:bg-[#171525] text-[#11111A] dark:text-[#F8F7FF] border border-[#E5E1F5] dark:border-[#28243A] hover:text-[#7C3AED] dark:hover:text-[#A855F7] hover:border-[#7C3AED] transition-all cursor-pointer"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-[#A855F7] animate-spin-slow" />
                ) : (
                  <Moon className="w-4 h-4 text-[#7C3AED]" />
                )}
              </button>

              {/* WhatsApp / AI Direct Quote Button */}
              <button
                onClick={() => openWhatsApp('Hello Bynarixa Tech Solutions! I want to request a free project quote from your AI Consultant.')}
                className="hidden sm:inline-flex relative overflow-hidden group items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#06B6D4] text-white font-bold text-xs sm:text-sm shadow-md shadow-purple-500/25 hover:shadow-lg hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none" />
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                </span>
                <MessageSquare className="w-4 h-4 text-white" />
                <span>AI WhatsApp Chat</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="lg:hidden p-2.5 rounded-xl bg-[#F1EEFF] dark:bg-[#171525] text-[#11111A] dark:text-[#F8FAFC] border border-[#E5E1F5] dark:border-[#28243A] hover:bg-[#E5E1F5] dark:hover:bg-[#28243A] transition-colors cursor-pointer"
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
            className="fixed inset-0 bg-[#09090F]/70 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-16 right-0 bottom-0 w-full max-w-xs bg-[#FFFFFF] dark:bg-[#11111A] border-l border-[#E5E1F5] dark:border-[#28243A] p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div className="space-y-2">
              <div className="pb-4 border-b border-[#E5E1F5] dark:border-[#28243A] mb-4 flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-widest text-[#11111A] dark:text-[#A9A7B8] uppercase">
                  Navigation Menu
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-[#F1EEFF] dark:bg-[#171525] text-[#7C3AED] dark:text-[#A855F7] font-mono font-bold border border-[#E5E1F5] dark:border-[#28243A]">
                  {DISPLAY_PHONE}
                </span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold text-[#11111A] dark:text-[#F8F7FF] hover:bg-[#F1EEFF] dark:hover:bg-[#171525] hover:text-[#7C3AED] dark:hover:text-[#A855F7] transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-[#E5E1F5] dark:border-[#28243A] space-y-3">
              {!isInstalled && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    installApp();
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-98 border border-[#7C3AED] cursor-pointer"
                >
                  <Download className="w-4 h-4 text-white stroke-[2.5]" />
                  <span>Install App to Device</span>
                </button>
              )}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp('Hello Bynarixa Tech Solutions! I would like to start a project via your AI Consultant.');
                }}
                className="w-full relative overflow-hidden group flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#06B6D4] text-white font-bold text-sm shadow-lg shadow-purple-500/25 hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none" />
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Chat with AI on WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
