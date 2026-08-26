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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EEFF] dark:bg-[#171525] border border-[#E5E1F5] dark:border-[#28243A] text-[#7C3AED] dark:text-[#A855F7] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#7C3AED] dark:text-[#A855F7]" />
            <span>Transparent Investment Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11111A] dark:text-[#F8F7FF] tracking-tight">
            Clear, Milestone-Based <span className="text-gradient">Pricing</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6070] dark:text-[#A9A7B8] font-medium">
            No hidden fees. Full source code ownership. SLA-backed quality assurance for startups and global brands.
          </p>

          {/* Billing Toggle */}
          <div className="pt-4 flex items-center justify-center gap-3">
            <span className={`text-xs sm:text-sm font-bold ${!isAnnual ? 'text-[#11111A] dark:text-[#F8F7FF]' : 'text-[#5F6070] dark:text-[#A9A7B8]'}`}>
              Monthly Sprints
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 rounded-full bg-[#E5E1F5] dark:bg-[#28243A] p-1 transition-colors relative border border-[#E5E1F5] dark:border-[#28243A] cursor-pointer"
              aria-label="Toggle Billing Frequency"
            >
              <div
                className={`w-6 h-6 rounded-full bg-[#7C3AED] transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs sm:text-sm font-bold flex items-center gap-1.5 ${isAnnual ? 'text-[#7C3AED] dark:text-[#A855F7]' : 'text-[#5F6070] dark:text-[#A9A7B8]'}`}>
              Annual Contract
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#F1EEFF] dark:bg-[#171525] text-[#7C3AED] dark:text-[#A855F7] font-black border border-[#E5E1F5] dark:border-[#28243A]">
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
                    ? 'border-[#7C3AED] ring-2 ring-[#7C3AED]/30 shadow-2xl shadow-[#7C3AED]/15 scale-105 z-10'
                    : 'border-[#E5E1F5] dark:border-[#28243A] shadow-lg hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7] text-white text-[11px] font-black uppercase tracking-wider shadow-md shadow-[#7C3AED]/25">
                    Most Popular Choice
                  </div>
                )}

                <div>
                  <div className="mb-6">
                    <span className="text-xs font-mono uppercase text-[#7C3AED] dark:text-[#A855F7] font-bold">
                      {plan.recommendedFor}
                    </span>
                    <h3 className="text-2xl font-bold text-[#11111A] dark:text-[#F8F7FF] mt-1">
                      {plan.name}
                    </h3>
                    <p className="text-xs text-[#5F6070] dark:text-[#A9A7B8] mt-2 min-h-[36px] font-medium">
                      {plan.tagline}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-[#E5E1F5] dark:border-[#28243A]">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl sm:text-5xl font-extrabold text-[#11111A] dark:text-[#F8F7FF] font-mono">
                        ${price.toLocaleString()}
                      </span>
                      <span className="text-xs text-[#5F6070] dark:text-[#A9A7B8] font-mono font-bold">
                        / month
                      </span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    <span className="text-xs font-bold font-mono text-[#5F6070] dark:text-[#A9A7B8] uppercase tracking-wider block">
                      Included Package Features:
                    </span>
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-[#11111A] dark:text-[#F8F7FF] font-medium">
                        <Check className="w-4 h-4 text-[#7C3AED] dark:text-[#A855F7] shrink-0 mt-0.5" />
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
                  className={`w-full relative overflow-hidden group py-3.5 px-6 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:scale-[1.02] active:scale-[0.98] cursor-pointer ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#06B6D4] text-white shadow-purple-500/25 hover:shadow-xl'
                      : 'bg-[#F1EEFF] dark:bg-[#171525] hover:bg-[#E5E1F5] dark:hover:bg-[#28243A] text-[#11111A] dark:text-[#F8F7FF] border border-[#E5E1F5] dark:border-[#28243A]'
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-shimmer-sweep pointer-events-none" />
                  <MessageSquare className={`w-4 h-4 ${plan.popular ? 'text-white' : 'text-[#7C3AED] dark:text-[#A855F7]'}`} />
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
