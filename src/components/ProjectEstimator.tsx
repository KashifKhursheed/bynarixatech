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
    <section className="py-20 relative bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0097A7]/10 dark:bg-[#00E5FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#6D28D9]/10 dark:bg-[#8B5CF6]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel bg-white/90 dark:bg-[#0D1117]/90 p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200/90 dark:border-[#263241] shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Options Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-cyan-300 text-xs font-mono font-bold uppercase">
                <Calculator className="w-4 h-4 text-cyan-500" />
                <span>Instant Project Scope Estimator</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                Estimate Your <span className="text-gradient">Software Budget & Timeline</span>.
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                Select your parameters below for an instant preliminary estimate, then dispatch your quote directly to our engineering team on WhatsApp.
              </p>

              {/* 1. Project Type */}
              <div className="space-y-2">
                <label className="text-xs font-bold font-mono text-slate-700 dark:text-slate-400 uppercase">
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
                      className={`p-2.5 rounded-xl text-xs font-medium border transition-all text-center ${
                        projectType === item.id
                          ? 'bg-[#0097A7] dark:bg-[#00E5FF] border-transparent text-white dark:text-black font-bold shadow-md'
                          : 'bg-slate-100/70 dark:bg-[#151B24] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Platform */}
              <div className="space-y-2">
                <label className="text-xs font-bold font-mono text-slate-700 dark:text-slate-400 uppercase">
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
                      className={`p-2.5 rounded-xl text-xs font-medium border transition-all text-center ${
                        platform === item.id
                          ? 'bg-[#0097A7] dark:bg-[#00E5FF] border-transparent text-white dark:text-black font-bold shadow-md'
                          : 'bg-slate-100/70 dark:bg-[#151B24] border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. AI & Advanced Feature Toggle */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-100/70 dark:bg-[#151B24] border border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-amber-500" />
                  <span className="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">
                    Include Gemini AI / LLM Integration
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={hasAI}
                  onChange={(e) => setHasAI(e.target.checked)}
                  className="w-4 h-4 rounded text-[#0097A7] focus:ring-[#0097A7] bg-white dark:bg-slate-800 border-slate-300 dark:border-slate-700"
                />
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 glass-panel bg-slate-50 dark:bg-[#151B24] p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-[#263241] space-y-6 text-center shadow-lg">
              <div>
                <span className="text-xs font-mono uppercase text-[#0097A7] dark:text-[#00E5FF] font-bold tracking-wider">
                  ESTIMATED INVESTMENT RANGE
                </span>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white font-mono my-2">
                  ${min.toLocaleString()} - ${max.toLocaleString()}
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Includes full source code rights, UI/UX design, QA testing & 30-day post launch SLA support.
                </p>
              </div>

              <div className="space-y-2.5 text-left text-xs text-slate-700 dark:text-slate-300 pt-4 border-t border-slate-200 dark:border-slate-800">
                <div className="flex items-center justify-between">
                  <span>Estimated Timeframe:</span>
                  <span className="font-mono text-[#0097A7] dark:text-[#00E5FF] font-bold">3 - 6 Weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Engineering Pod:</span>
                  <span className="font-mono text-[#0097A7] dark:text-[#00E5FF] font-bold">3 Senior Engineers + QA</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>IP Code Ownership:</span>
                  <span className="font-mono text-emerald-600 dark:text-emerald-400 font-bold">100% Guaranteed</span>
                </div>
              </div>

              <button
                onClick={handleSendEstimate}
                className="w-full relative overflow-hidden group inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#0097A7] dark:from-[#25D366] dark:via-[#00E5FF] dark:to-[#8B5CF6] hover:opacity-95 text-white dark:text-black font-extrabold text-sm shadow-xl shadow-[#25D366]/25 dark:shadow-[#00E5FF]/25 hover:shadow-2xl hover:shadow-[#25D366]/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent animate-shimmer-sweep pointer-events-none" />
                <MessageSquare className="w-4 h-4" />
                <span>Send Estimate To WhatsApp AI</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
