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
    <footer className="bg-slate-100 dark:bg-[#070A0F] text-black dark:text-[#94A3B8] pt-16 pb-8 border-t border-slate-300 dark:border-[#263241] relative overflow-hidden transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-300 dark:border-[#263241]">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00E5FF] via-[#8B5CF6] to-[#FF2BD6] flex items-center justify-center text-black font-bold shadow-lg shadow-[#00E5FF]/20">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xl font-bold tracking-tight text-black dark:text-[#F8FAFC] flex items-center gap-1">
                  Bynarixa <span className="text-[#00838F] dark:text-[#00E5FF] font-extrabold">Tech</span>
                </span>
                <span className="block text-[10px] font-mono tracking-widest uppercase text-black dark:text-[#94A3B8] font-bold">
                  01 Software Solutions
                </span>
              </div>
            </a>

            <p className="text-xs sm:text-sm text-black dark:text-slate-400 leading-relaxed max-w-sm font-medium">
              "{COMPANY_INFO.tagline}"
            </p>

            <p className="text-xs text-black dark:text-slate-500 font-medium">
              Bynarixa Tech Solutions is a modern software company delivering mobile apps, cloud portals, AI models, and custom enterprise platforms globally.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-black dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-sm"
                aria-label="Github Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-black dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-sm"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 text-black dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-sm"
                aria-label="Twitter Profile"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-mono text-black dark:text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-black dark:text-slate-400 font-medium">
              <li><a href="#home" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Portfolio</a></li>
              <li><a href="#process" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Development Process</a></li>
              <li><a href="#pricing" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Pricing Plans</a></li>
              <li><a href="#careers" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Careers</a></li>
              <li><a href="#blog" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Tech Blog</a></li>
              <li><a href="#contact" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-mono text-black dark:text-white uppercase tracking-wider">
              Key Services
            </h4>
            <ul className="space-y-2 text-xs text-black dark:text-slate-400 font-medium">
              <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Android App Dev</a></li>
              <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">iOS Swift App Dev</a></li>
              <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Flutter Cross-Platform</a></li>
              <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">React Web Portals</a></li>
              <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Enterprise ERP & CRM</a></li>
              <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">AI & Gemini Models</a></li>
              <li><a href="#services" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Cloud DevOps & AWS</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold font-mono text-black dark:text-white uppercase tracking-wider">
              Tech Dispatch
            </h4>
            <p className="text-xs text-black dark:text-slate-400 font-medium">
              Subscribe to Bynarixa's engineering digest for tech architecture trends.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300 text-xs flex items-center gap-2 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Subscribed successfully!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <input
                  type="email"
                  placeholder="Enter work email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl text-xs bg-white dark:bg-[#0D1117] border border-slate-300 dark:border-[#263241] text-black dark:text-[#F8FAFC] focus:outline-none focus:ring-2 focus:ring-[#00E5FF] font-medium"
                  required
                />
                <button
                  type="submit"
                  className="w-full py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-[#00E5FF] dark:hover:bg-[#00CCE5] text-white dark:text-black font-black text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Subscribe</span>
                </button>
              </form>
            )}

            <div className="pt-2 text-xs space-y-1 text-black dark:text-[#94A3B8]">
              <div className="font-bold text-black dark:text-[#F8FAFC]">Direct WhatsApp Support:</div>
              <div
                onClick={() => openWhatsApp('Hello Bynarixa Tech Solutions!')}
                className="text-black dark:text-[#00E5FF] cursor-pointer hover:underline font-mono font-bold"
              >
                {DISPLAY_PHONE}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar & System Status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-black dark:text-[#94A3B8] font-mono">
          <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider font-bold">
            <span>Pakistan HQ</span>
            <span>•</span>
            <a href={`mailto:${COMPANY_INFO.email}`} className="text-black dark:text-[#94A3B8] hover:text-cyan-600 dark:hover:text-[#00E5FF] transition-colors">
              {COMPANY_INFO.email}
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[11px] uppercase tracking-wider font-bold">
            <span className="flex items-center gap-2 text-black dark:text-[#94A3B8]">
              <span className="w-2 h-2 bg-[#22F55B] rounded-full animate-pulse" />
              Systems Active
            </span>
            <span>© {new Date().getFullYear()} {COMPANY_INFO.name}</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white dark:bg-[#0D1117] hover:bg-slate-200 dark:hover:bg-[#151B24] text-black dark:text-[#F8FAFC] transition-colors border border-slate-300 dark:border-[#263241] font-bold shadow-xs"
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
