import React, { useState } from 'react';
import { CAREERS_DATA } from '../data/mockData';
import { CareerPosition } from '../types';
import { openWhatsApp } from '../utils/whatsapp';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, X, Send, Sparkles } from 'lucide-react';

export const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<CareerPosition | null>(null);

  return (
    <section id="careers" className="py-20 relative bg-[#F1EEFF]/30 dark:bg-[#09090F]/60 border-y border-[#E5E1F5] dark:border-[#28243A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EEFF] dark:bg-[#171525] border border-[#E5E1F5] dark:border-[#28243A] text-[#7C3AED] dark:text-[#A855F7] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#7C3AED] dark:text-[#A855F7]" />
            <span>Join Our Engineering Pods</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11111A] dark:text-[#F8F7FF] tracking-tight">
            Build the Future <span className="text-gradient">With Us</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6070] dark:text-[#A9A7B8] font-medium">
            We are hiring world-class engineers, designers, and AI architects passionate about craftsmanship, clean code, and solving hard problems.
          </p>
        </div>

        {/* Jobs List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {CAREERS_DATA.map((job) => (
            <div
              key={job.id}
              className="glass-panel p-6 rounded-2xl border border-[#E5E1F5] dark:border-[#28243A] shadow-md hover:shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-[#F1EEFF] dark:bg-[#171525] text-[#7C3AED] dark:text-[#A855F7] uppercase border border-[#E5E1F5] dark:border-[#28243A]">
                    {job.department}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#5F6070] dark:text-[#A9A7B8] font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#7C3AED] dark:text-[#A855F7]" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-[#5F6070] dark:text-[#A9A7B8] font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#7C3AED] dark:text-[#A855F7]" />
                    {job.type} ({job.experience})
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[#11111A] dark:text-[#F8F7FF]">
                  {job.title}
                </h3>
                <p className="text-xs text-[#5F6070] dark:text-[#A9A7B8] line-clamp-1 font-medium">
                  {job.description}
                </p>
              </div>

              <button
                onClick={() => setSelectedJob(job)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs shadow-md transition-all shrink-0 cursor-pointer shadow-[#7C3AED]/20"
              >
                <span>View Position & Apply</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#09090F]/70 backdrop-blur-sm animate-fade-in">
          <div className="glass-panel bg-white dark:bg-[#11111A] w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 sm:p-8 border border-[#E5E1F5] dark:border-[#28243A] shadow-2xl relative space-y-6">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-[#F1EEFF] dark:bg-[#171525] text-[#11111A] dark:text-[#F8F7FF] hover:bg-[#E5E1F5] dark:hover:bg-[#28243A] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-mono uppercase text-[#7C3AED] dark:text-[#A855F7] font-bold">
                {selectedJob.department} • {selectedJob.location}
              </span>
              <h3 className="text-2xl font-bold text-[#11111A] dark:text-[#F8F7FF] mt-1">
                {selectedJob.title}
              </h3>
              <p className="text-xs text-[#5F6070] dark:text-[#A9A7B8] mt-1 font-medium">
                {selectedJob.type} | Required Experience: {selectedJob.experience}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#5F6070] dark:text-[#A9A7B8] leading-relaxed font-medium">
              {selectedJob.description}
            </p>

            {/* Requirements */}
            <div>
              <h4 className="text-xs font-bold font-mono text-[#11111A] dark:text-[#F8F7FF] uppercase tracking-wider mb-2">
                Requirements:
              </h4>
              <div className="space-y-1.5">
                {selectedJob.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#11111A] dark:text-[#F8F7FF] font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#7C3AED] dark:text-[#A855F7] shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div>
              <h4 className="text-xs font-bold font-mono text-[#11111A] dark:text-[#F8F7FF] uppercase tracking-wider mb-2">
                Key Responsibilities:
              </h4>
              <div className="space-y-1.5">
                {selectedJob.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-[#11111A] dark:text-[#F8F7FF] font-medium">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-1.5 shrink-0" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit application CTA */}
            <div className="pt-4 border-t border-[#E5E1F5] dark:border-[#28243A] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#5F6070] dark:text-[#A9A7B8] font-bold">
                Ready to apply? Send your CV & Github link via WhatsApp or info@bynarixa.com
              </span>
              <button
                onClick={() => {
                  openWhatsApp(
                    `Hello Bynarixa HR! I am applying for the position: ${selectedJob.title}. Here is my portfolio & resume link.`
                  );
                  setSelectedJob(null);
                }}
                className="w-full sm:w-auto relative overflow-hidden group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#06B6D4] text-white font-bold text-xs shadow-lg shadow-purple-500/25 hover:shadow-xl transition-all cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none" />
                <Send className="w-4 h-4 text-white" />
                <span>Apply via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
