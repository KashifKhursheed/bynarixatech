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
    <section className="py-16 relative bg-slate-900 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-panel bg-slate-950/80 p-8 sm:p-12 rounded-3xl border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Options Controls */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/50 border border-blue-700/80 text-cyan-300 text-xs font-mono font-bold uppercase">
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span>Instant Project Scope Estimator</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
                Estimate Your <span className="text-gradient">Software Budget & Timeline</span>.
              </h2>

              <p className="text-sm text-slate-300">
                Select your parameters below for an instant rough estimate, then dispatch your quote directly to our engineering team on WhatsApp.
              </p>

              {/* 1. Project Type */}
              <div className="space-y-2">
                <label className="text-xs font-bold font-mono text-slate-400 uppercase">
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
                          ? 'bg-blue-600 border-blue-400 text-white shadow-md'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 2. Platform */}
              <div className="space-y-2">
                <label className="text-xs font-bold font-mono text-slate-400 uppercase">
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
                          ? 'bg-blue-600 border-blue-400 text-white shadow-md'
                          : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* 3. AI & Advanced Feature Toggle */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-900 border border-slate-800">
                <div className="flex items-center gap-2.5">
                  <Zap className="w-4 h-4 text-amber-400" />
                  <span className="text-xs sm:text-sm font-medium text-slate-200">
                    Include Gemini AI / LLM Integration
                  </span>
                </div>
                <input
                  type="checkbox"
                  checked={hasAI}
                  onChange={(e) => setHasAI(e.target.checked)}
                  className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 bg-slate-800 border-slate-700"
                />
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-5 glass-panel bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6 text-center">
              <div>
                <span className="text-xs font-mono uppercase text-cyan-400 font-bold tracking-wider">
                  ESTIMATED INVESTMENT RANGE
                </span>
                <div className="text-3xl sm:text-5xl font-extrabold text-white font-mono my-2">
                  ${min.toLocaleString()} - ${max.toLocaleString()}
                </div>
                <p className="text-xs text-slate-400">
                  Includes full source code rights, UI/UX design, QA testing & 30-day post launch support.
                </p>
              </div>

              <div className="space-y-2 text-left text-xs text-slate-300 pt-4 border-t border-slate-800">
                <div className="flex items-center justify-between">
                  <span>Estimated Timeframe:</span>
                  <span className="font-mono text-cyan-400 font-bold">3 - 6 Weeks</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Engineering Pod:</span>
                  <span className="font-mono text-cyan-400 font-bold">3 Senior Engineers + QA</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>IP Code Ownership:</span>
                  <span className="font-mono text-emerald-400 font-bold">100% Guaranteed</span>
                </div>
              </div>

              <button
                onClick={handleSendEstimate}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-sm shadow-xl shadow-blue-500/25 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Send Quote To WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
