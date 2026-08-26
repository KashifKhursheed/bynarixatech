import React, { useState } from 'react';
import { PRICING_PLANS } from '../data/mockData';
import { openWhatsApp } from '../utils/whatsapp';
import { Check, Sparkles, MessageSquare, ArrowRight } from 'lucide-react';

export const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  return (
    <section id="pricing" className="py-20 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-black dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Transparent Investment Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black dark:text-white tracking-tight">
            Clear, Milestone-Based <span className="text-gradient">Pricing</span>.
          </h2>
          <p className="text-base sm:text-lg text-black dark:text-slate-300 font-medium">
            No hidden fees. Full source code ownership. SLA-backed quality assurance for startups and global brands.
          </p>

          {/* Billing Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs sm:text-sm font-bold ${!isAnnual ? 'text-black dark:text-white' : 'text-black/70 dark:text-slate-400'}`}>
              Monthly Sprints
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 rounded-full bg-slate-200 dark:bg-slate-800 p-1 transition-colors relative border border-slate-300 dark:border-slate-700"
              aria-label="Toggle Billing Frequency"
            >
              <div
                className={`w-6 h-6 rounded-full bg-slate-900 dark:bg-[#00E5FF] transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs sm:text-sm font-bold flex items-center gap-1.5 ${isAnnual ? 'text-black dark:text-[#00E5FF]' : 'text-black/70 dark:text-slate-400'}`}>
              Annual Contract
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950 text-black dark:text-emerald-300 font-black">
                SAVE 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            return (
              <div
                key={plan.id}
                className={`glass-panel rounded-3xl p-8 border flex flex-col justify-between relative transition-all ${
                  plan.popular
                    ? 'border-slate-900 dark:border-cyan-400 ring-2 ring-slate-900/20 dark:ring-cyan-400/30 shadow-2xl scale-105 z-10'
                    : 'border-slate-200/80 dark:border-slate-800/80 shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-slate-900 dark:bg-gradient-to-r dark:from-blue-600 dark:to-cyan-500 text-white text-[11px] font-black uppercase tracking-wider shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <span className="text-xs font-mono uppercase text-black dark:text-cyan-400 font-bold">
                      {plan.recommendedFor}
                    </span>
                    <h3 className="text-2xl font-bold text-black dark:text-white mt-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-black dark:text-slate-400 mt-2 min-h-[36px] font-medium">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-black dark:text-white font-mono">
                        ${price.toLocaleString()}
                      </span>
                      <span className="text-xs text-black dark:text-slate-400 font-mono font-bold">
                        / month
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold font-mono text-black dark:text-slate-400 uppercase tracking-wider block">
                      Included Package Features:
                    </span>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-black dark:text-slate-200 font-medium">
                        <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <button
                  onClick={() =>
                    openWhatsApp(
                      `Hello Bynarixa Tech Solutions! I am interested in the ${plan.name} plan ($${price}/mo) from your AI pricing guide. Let's discuss requirements.`
                    )
                  }
                  className={`w-full relative overflow-hidden group py-3.5 px-6 rounded-xl font-black text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#10B981] via-[#059669] to-[#00838F] dark:from-[#25D366] dark:via-[#00E5FF] dark:to-[#8B5CF6] text-white dark:text-slate-950 shadow-emerald-500/25 dark:shadow-[#00E5FF]/25 hover:shadow-xl'
                      : 'bg-slate-900 hover:bg-slate-800 dark:bg-[#151B24] dark:hover:bg-[#1A2330] text-white border border-slate-900 dark:border-slate-700'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer-sweep pointer-events-none" />
                  <MessageSquare className="w-4 h-4 text-white dark:text-slate-950" />
                  <span>Choose {plan.name} via WhatsApp</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
