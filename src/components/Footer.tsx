import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/mockData';
import { openWhatsApp, DISPLAY_PHONE } from '../utils/whatsapp';
import {
  Terminal,
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setNewsletterSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setNewsletterSubscribed(false), 4000);
    }
  };

  return (
    <footer className="bg-[#F8F7FF] dark:bg-[#09090F] text-[#11111A] dark:text-[#A9A7B8] pt-16 pb-8 border-t border-[#E5E1F5] dark:border-[#28243A] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#E5E1F5] dark:border-[#28243A]">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7C3AED] via-[#A855F7] to-[#06B6D4] flex items-center justify-center text-white font-bold shadow-lg shadow-[#7C3AED]/25 group-hover:scale-105 transition-transform">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-[#11111A] dark:text-[#F8F7FF] flex items-center gap-1">
                  Bynarixa <span className="text-[#7C3AED] dark:text-[#A855F7] font-extrabold">Tech</span>
                </span>
                <span className="block text-[10px] font-mono tracking-widest uppercase text-[#5F6070] dark:text-[#A9A7B8] font-bold">
                  01 Software Solutions
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-[#5F6070] dark:text-[#A9A7B8] leading-relaxed max-w-sm font-medium">
              "{COMPANY_INFO.tagline}"
            </p>

            <p className="text-xs text-[#5F6070] dark:text-[#A9A7B8] font-medium">
              Bynarixa Tech Solutions is a modern software company delivering mobile apps, cloud portals, AI models, and custom enterprise platforms globally.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white dark:bg-[#11111A] border border-[#E5E1F5] dark:border-[#28243A] text-[#5F6070] dark:text-[#A9A7B8] hover:text-[#7C3AED] dark:hover:text-[#A855F7] hover:border-[#7C3AED] transition-colors shadow-sm"
                aria-label="Github Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white dark:bg-[#11111A] border border-[#E5E1F5] dark:border-[#28243A] text-[#5F6070] dark:text-[#A9A7B8] hover:text-[#7C3AED] dark:hover:text-[#A855F7] hover:border-[#7C3AED] transition-colors shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white dark:bg-[#11111A] border border-[#E5E1F5] dark:border-[#28243A] text-[#5F6070] dark:text-[#A9A7B8] hover:text-[#7C3AED] dark:hover:text-[#A855F7] hover:border-[#7C3AED] transition-colors shadow-sm"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-mono text-[#11111A] dark:text-[#F8F7FF] uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#5F6070] dark:text-[#A9A7B8] font-medium">
              <li><a href="#home" className="hover:text-[#7C3AED] dark:hover:text-[#A855F7] transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-[#7C3AED] dark:hover:text-[#A855F7] transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-[#7C3AED] dark:hover:text-[#A855F7] transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-[#7C3AED] dark:hover:text-[#A855F7] transition-colors">Portfolio</a></li>
              <li><a href="#process" className="hover:text-[#7C3AED] dark:hover:text-[#A855F7] transition-colors">Development Process</a></li>
              <li><a href="#pricing" className="hover:text-[#7C3AED] dark:hover:text-[#A855F7] transition-colors">Pricing Plans</a></li>
              <li><a href="#careers" className="hover:text-[#7C3AED] dark:hover:text-[#A855F7] transition-colors">Careers</a></li>
              <li><a href="#blog" className="hover:text-[#7C3AED] dark:hover:text-[#A855F7] transition-colors">Tech Blog</a></li>
              <li><a href="#contact" className="hover:text-[#7C3AED] dark:hover:text-[#A855F7] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-mono text-[#11111A] dark:text-[#F8F7FF] uppercase tracking-wider">
              Key Services
            </h4>
            <ul className="space-y-2 text-xs text-[#5F6070] dark:text-[#A9A7B8] font-medium">
              <li><a href="#services" className="hover:text-[#7C3AED] dark:hover:text-[#A855F7] transition-colors">Android App Dev</a></li>
              <li><a href="#services" className="hover:text-[#7C3AED] dark:hover:text-[#A855F7] transition-colors">iOS Swift App Dev</a></li>
              <li><a href="#services" className="hover:text-[#7C3AED] dark:hover:text-[#A855F7] transition-colors">Flutter Cross-Platform</a></li>
              <li><a href="#services" className="hover:text-[#7C3AED] dark:hover:text-[#A855F7] transition-colors">React Web Portals</a></li>
              <li><a href="#services" className="hover:text-[#7C3AED] dark:hover:text-[#A855F7] transition-colors">Enterprise ERP & CRM</a></li>
              <li><a href="#services" className="hover:text-[#7C3AED] dark:hover:text-[#A855F7] transition-colors">AI & Gemini Models</a></li>
              <li><a href="#services" className="hover:text-[#7C3AED] dark:hover:text-[#A855F7] transition-colors">Cloud DevOps & AWS</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-mono text-[#11111A] dark:text-[#F8F7FF] uppercase tracking-wider">
              Tech Dispatch
            </h4>
            <p className="text-xs text-[#5F6070] dark:text-[#A9A7B8] font-medium">
              Subscribe to Bynarixa's engineering digest for tech architecture trends.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 rounded-xl bg-[#F1EEFF] dark:bg-[#171525] border border-[#7C3AED]/30 text-[#7C3AED] dark:text-[#A855F7] text-xs flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#7C3AED] dark:text-[#A855F7] shrink-0" />
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter work email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl text-xs bg-white dark:bg-[#11111A] border border-[#E5E1F5] dark:border-[#28243A] text-[#11111A] dark:text-[#F8F7FF] focus:outline-none focus:ring-2 focus:ring-[#7C3AED] font-medium placeholder:text-[#5F6070]/60 dark:placeholder:text-[#A9A7B8]/60"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2 px-3 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm shadow-[#7C3AED]/25 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe</span>
                </button>
              </form>
            )}

            <div className="pt-2 text-xs space-y-1 text-[#5F6070] dark:text-[#A9A7B8]">
              <div className="font-bold text-[#11111A] dark:text-[#F8F7FF]">Direct WhatsApp Support:</div>
              <div
                onClick={() => openWhatsApp('Hello Bynarixa Tech Solutions!')}
                className="text-[#7C3AED] dark:text-[#A855F7] cursor-pointer hover:underline font-mono font-bold"
              >
                {DISPLAY_PHONE}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & System Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#5F6070] dark:text-[#A9A7B8] font-mono">
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider font-bold">
            <span>Pakistan HQ</span>
            <span>•</span>
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#5F6070] dark:text-[#A9A7B8] hover:text-[#7C3AED] dark:hover:text-[#A855F7] transition-colors">
              {COMPANY_INFO.email}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[11px] uppercase tracking-wider font-bold">
            <span className="flex items-center gap-2 text-[#5F6070] dark:text-[#A9A7B8]">
              <span className="w-2 h-2 bg-[#7C3AED] rounded-full animate-pulse" />
              Systems Active
            </span>
            <span>© {new Date().getFullYear()} {COMPANY_INFO.name}</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#11111A] hover:bg-[#F1EEFF] dark:hover:bg-[#171525] text-[#11111A] dark:text-[#F8F7FF] transition-colors border border-[#E5E1F5] dark:border-[#28243A] font-bold shadow-xs cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
