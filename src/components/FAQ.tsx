import React, { useState } from 'react';
import { FAQS_DATA } from '../data/mockData';
import { ChevronDown, HelpCircle, Search, Sparkles } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string>('faq-1');
  const [search, setSearch] = useState<string>('');

  const filteredFaqs = FAQS_DATA.filter(
    (faq) =>
      faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-20 relative bg-grid-pattern">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EEFF] dark:bg-[#171525] border border-[#E5E1F5] dark:border-[#28243A] text-[#7C3AED] dark:text-[#A855F7] text-xs font-mono font-bold uppercase tracking-wider">
            <HelpCircle className="w-4 h-4 text-[#7C3AED] dark:text-[#A855F7]" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11111A] dark:text-[#F8F7FF] tracking-tight">
            Frequently Asked <span className="text-gradient">Questions</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6070] dark:text-[#A9A7B8] font-medium">
            Everything you need to know about starting a software engineering engagement with Bynarixa Tech Solutions.
          </p>

          {/* Search Box */}
          <div className="relative max-w-md mx-auto pt-4">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 translate-y-0.5 text-[#5F6070] dark:text-[#A9A7B8]" />
            <input
              type="text"
              placeholder="Search questions (e.g. source code, timeline, IP rights)..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl text-xs sm:text-sm bg-white dark:bg-[#11111A] text-[#11111A] dark:text-[#F8F7FF] border border-[#E5E1F5] dark:border-[#28243A] focus:outline-none focus:ring-2 focus:ring-[#7C3AED] shadow-sm font-medium placeholder:text-[#5F6070]/60 dark:placeholder:text-[#A9A7B8]/60"
            />
          </div>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="glass-panel rounded-2xl border border-[#E5E1F5] dark:border-[#28243A] overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenId(isOpen ? '' : faq.id)}
                  className="w-full p-5 flex items-center justify-between text-left font-bold text-sm sm:text-base text-[#11111A] dark:text-[#F8F7FF] hover:text-[#7C3AED] dark:hover:text-[#A855F7] transition-colors cursor-pointer"
                >
                  <span className="pr-4">{faq.question}</span>
                  <div className={`p-1.5 rounded-lg bg-[#F1EEFF] dark:bg-[#171525] text-[#7C3AED] dark:text-[#A855F7] transition-transform ${isOpen ? 'rotate-180 bg-[#7C3AED] text-white dark:bg-[#7C3AED] dark:text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-[#5F6070] dark:text-[#A9A7B8] leading-relaxed border-t border-[#E5E1F5] dark:border-[#28243A] animate-fade-in pt-3 font-medium">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
