import React, { useState, useEffect } from 'react';
import { useTheme } from './ThemeContext';
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
} from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 20);
      if (totalHeight > 0) {
        setScrollProgress((currentScroll / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
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
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Sticky Navbar */}
      <header
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3 glass-nav border-b border-slate-200/80 dark:border-slate-800/80 shadow-md'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group focus:outline-none"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-cyan-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                  Bynarixa <span className="text-blue-600 dark:text-cyan-400 font-extrabold">Tech</span>
                </span>
                <span className="block text-[10px] font-mono tracking-widest uppercase text-slate-500 dark:text-slate-400">
                  01 Solutions
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
                        ? 'text-blue-600 dark:text-cyan-400 font-semibold bg-blue-50 dark:bg-blue-950/40'
                        : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-blue-600 dark:bg-cyan-400 rounded-full" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Right Controls */}
            <div className="flex items-center gap-3">
              {/* Theme Switcher */}
              <button
                onClick={toggleTheme}
                aria-label="Toggle Light and Dark Mode"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>

              {/* WhatsApp / Direct Quote Button */}
              <button
                onClick={() => openWhatsApp('Hello Bynarixa Tech Solutions! I want to request a free project quote.')}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-medium text-xs sm:text-sm shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all hover:-translate-y-0.5"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Get Quote</span>
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle Navigation Menu"
                className="lg:hidden p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
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
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="fixed top-16 right-0 bottom-0 w-full max-w-xs bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
            <div className="space-y-2">
              <div className="pb-4 border-b border-slate-200 dark:border-slate-800 mb-4 flex items-center justify-between">
                <span className="text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                  Navigation Menu
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-cyan-400 font-mono">
                  {DISPLAY_PHONE}
                </span>
              </div>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-slate-800 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 opacity-40" />
                </a>
              ))}
            </div>

            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openWhatsApp('Hello Bynarixa Tech Solutions! I would like to start a project.');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium text-sm shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Start Your Project</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
