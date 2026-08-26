import React, { useState } from 'react';
import { openWhatsApp } from '../utils/whatsapp';
import { Calculator, CheckCircle2, MessageSquare, Sparkles, ArrowRight, Zap } from 'lucide-react';

export const ProjectEstimator: React.FC = () => {
  const [projectType, setProjectType] = useState<string>('mobile');
  const [platform, setPlatform] = useState<string>('both');
  const [timeline, setTimeline] = useState<string>('standard');
  const [hasAI, setHasAI] = useState<boolean>(true);

  const calculateEstimate = () => {
    let base = 1500;
    if (projectType === 'web') base = 1800;
    if (projectType === 'saas') base = 3200;
    if (projectType === 'enterprise') base = 5000;

    if (platform === 'both') base += 800;
    if (timeline === 'urgent') base *= 1.25;
    if (hasAI) base += 750;

    const min = Math.round(base);
    const max = Math.round(base * 1.35);
    return { min, max };
  };

  const { min, max } = calculateEstimate();

  const handleSendEstimate = () => {
    const msg = `Hello Bynarixa Tech Solutions! I used your Project Estimator:
- Project Type: ${projectType.toUpperCase()}
- Platform: ${platform.toUpperCase()}
- Timeline: ${timeline.toUpperCase()}
- Includes AI Features: ${hasAI ? 'YES' : 'NO'}
- Estimated Range: $${min.toLocaleString()} - $${max.toLocaleString()}
I'd like to confirm this quote and start my project.`;

    openWhatsApp(msg);
  };

  return (
    <section className="py-20 relative bg-[#F1EEFF]/30 dark:bg-[#09090F]/60 border-y border-[#E5E1F5] dark:border-[#28243A] overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7C3AED]/10 dark:bg-[#7C3AED]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#06B6D4]/10 dark:bg-[#06B6D4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel bg-white/90 dark:bg-[#11111A]/90 p-6 sm:p-10 lg:p-12 rounded-3xl border border-[#E5E1F5] dark:border-[#28243A] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Options Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EEFF] dark:bg-[#171525] border border-[#E5E1F5] dark:border-[#28243A] text-[#7C3AED] dark:text-[#A855F7] text-xs font-mono font-bold uppercase">
                <Calculator className="w-4 h-4 text-[#7C3AED] dark:text-[#A855F7]" />
                <span>Instant Project Scope Estimator</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#11111A] dark:text-[#F8F7FF] tracking-tight">
                Estimate Your <span className="text-gradient">Software Budget & Timeline</span>.
              </h2>

              <p className="text-xs sm:text-sm text-[#5F6070] dark:text-[#A9A7B8] leading-relaxed font-medium">
                Select your parameters below for an instant preliminary estimate, then dispatch your quote directly to our engineering team on WhatsApp.
              </p>

              {/* 1. Project Type */}
              <div className="space-y-2">
                <label className="text-xs font-bold font-mono text-[#5F6070] dark:text-[#A9A7B8] uppercase">
                  1. Project Category
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'mobile', label: 'Mobile App' },
                    { id: 'web', label: 'Web Portal' },
                    { id: 'saas', label: 'SaaS Platform' },
                    { id: 'enterprise', label: 'ERP / CRM' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setProjectType(item.id)}
                      className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                        projectType === item.id
                          ? 'bg-[#7C3AED] border-[#7C3AED] text-white shadow-md shadow-[#7C3AED]/25'
                          : 'bg-white dark:bg-[#171525] border-[#E5E1F5] dark:border-[#28243A] text-[#11111A] dark:text-[#A9A7B8] hover:bg-[#F1EEFF] dark:hover:bg-[#11111A]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Platform */}
              <div className="space-y-2">
                <label className="text-xs font-bold font-mono text-[#5F6070] dark:text-[#A9A7B8] uppercase">
                  2. Platform Scope
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'ios', label: 'iOS Native' },
                    { id: 'android', label: 'Android Native' },
                    { id: 'both', label: 'Cross-Platform (Both)' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setPlatform(item.id)}
                      className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center cursor-pointer ${
                        platform === item.id
                          ? 'bg-[#7C3AED] border-[#7C3AED] text-white shadow-md shadow-[#7C3AED]/25'
                          : 'bg-white dark:bg-[#171525] border-[#E5E1F5] dark:border-[#28243A] text-[#11111A] dark:text-[#A9A7B8] hover:bg-[#F1EEFF] dark:hover:bg-[#11111A]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. AI & Advanced Feature Toggle */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-[#171525] border border-[#E5E1F5] dark:border-[#28243A] shadow-xs">
                <div className="flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-[#7C3AED] dark:text-[#A855F7]" />
                  <span className="text-xs sm:text-sm font-bold text-[#11111A] dark:text-[#F8F7FF]">
                    Include Gemini AI / LLM Integration
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={hasAI}
                  onChange={(e) => setHasAI(e.target.checked)}
                  className="w-4 h-4 rounded text-[#7C3AED] focus:ring-[#7C3AED] bg-white dark:bg-[#11111A] border-[#E5E1F5] dark:border-[#28243A] cursor-pointer"
                />
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 glass-panel bg-[#F1EEFF]/60 dark:bg-[#171525]/80 p-6 sm:p-8 rounded-2xl border border-[#E5E1F5] dark:border-[#28243A] space-y-6 text-center shadow-lg">
              <div>
                <span className="text-xs font-mono uppercase text-[#7C3AED] dark:text-[#A855F7] font-black tracking-wider">
                  ESTIMATED INVESTMENT RANGE
                </span>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11111A] dark:text-[#F8F7FF] font-mono my-2">
                  ${min.toLocaleString()} - ${max.toLocaleString()}
                </div>
                <p className="text-xs text-[#5F6070] dark:text-[#A9A7B8] font-medium">
                  Includes full source code rights, UI/UX design, QA testing & 30-day post launch SLA support.
                </p>
              </div>

              <div className="space-y-2.5 text-left text-xs text-[#11111A] dark:text-[#F8F7FF] pt-4 border-t border-[#E5E1F5] dark:border-[#28243A] font-bold">
                <div className="flex items-center justify-between">
                  <span className="text-[#5F6070] dark:text-[#A9A7B8]">Estimated Timeframe:</span>
                  <span className="font-mono text-[#7C3AED] dark:text-[#A855F7] font-black">3 - 6 Weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#5F6070] dark:text-[#A9A7B8]">Engineering Pod:</span>
                  <span className="font-mono text-[#7C3AED] dark:text-[#A855F7] font-black">3 Senior Engineers + QA</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#5F6070] dark:text-[#A9A7B8]">IP Code Ownership:</span>
                  <span className="font-mono text-[#7C3AED] dark:text-[#A855F7] font-black">100% Guaranteed</span>
                </div>
              </div>

              <button
                onClick={handleSendEstimate}
                className="w-full relative overflow-hidden group inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#06B6D4] text-white font-bold text-sm shadow-xl shadow-purple-500/25 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent animate-shimmer-sweep pointer-events-none" />
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Send Estimate To WhatsApp AI</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
