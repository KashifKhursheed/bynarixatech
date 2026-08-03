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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <span>Transparent Investment Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Clear, Milestone-Based <span className="text-gradient">Pricing</span>.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            No hidden fees. Full source code ownership. SLA-backed quality assurance for startups and global brands.
          </p>

          {/* Billing Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs sm:text-sm font-medium ${!isAnnual ? 'text-blue-600 dark:text-cyan-400 font-bold' : 'text-slate-500'}`}>
              Monthly Sprints
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 rounded-full bg-slate-200 dark:bg-slate-800 p-1 transition-colors relative"
              aria-label="Toggle Billing Frequency"
            >
              <div
                className={`w-6 h-6 rounded-full bg-blue-600 transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs sm:text-sm font-medium flex items-center gap-1.5 ${isAnnual ? 'text-blue-600 dark:text-cyan-400 font-bold' : 'text-slate-500'}`}>
              Annual Contract
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">
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
                    ? 'border-blue-500 ring-2 ring-blue-500/30 dark:ring-cyan-400/30 shadow-2xl scale-105 z-10'
                    : 'border-slate-200/80 dark:border-slate-800/80 shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-[11px] font-bold uppercase tracking-wider shadow-md">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <span className="text-xs font-mono uppercase text-blue-600 dark:text-cyan-400 font-bold">
                      {plan.recommendedFor}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 min-h-[36px]">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white font-mono">
                        ${price.toLocaleString()}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        / month
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider block">
                      Included Package Features:
                    </span>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <button
                  onClick={() =>
                    openWhatsApp(
                      `Hello Bynarixa Tech Solutions! I am interested in the ${plan.name} plan ($${price}/mo). Let's start.`
                    )
                  }
                  className={`w-full py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 via-cyan-500 to-purple-600 text-white hover:shadow-lg shadow-blue-500/25'
                      : 'bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Choose {plan.name}</span>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
