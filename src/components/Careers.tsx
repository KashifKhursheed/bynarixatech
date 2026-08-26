import React, { useState } from 'react';
import { CAREERS_DATA } from '../data/mockData';
import { CareerPosition } from '../types';
import { openWhatsApp } from '../utils/whatsapp';
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2, X, Send, Sparkles } from 'lucide-react';

export const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<CareerPosition | null>(null);

  return (
    <section id="careers" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <span>Join Our Engineering Engineering Pods</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Build the Future <span className="text-gradient">With Us</span>.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            We are hiring world-class engineers, designers, and AI architects passionate about craftsmanship, clean code, and solving hard problems.
          </p>
        </div>

        {/* Jobs List */}
        <div className="space-y-4 max-w-4xl mx-auto">
          {CAREERS_DATA.map((job) => (
            <div
              key={job.id}
              className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 transition-all"
            >
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-cyan-300 uppercase">
                    {job.department}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-cyan-500" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-cyan-500" />
                    {job.type} ({job.experience})
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {job.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-1">
                  {job.description}
                </p>
              </div>

              <button
                onClick={() => setSelectedJob(job)}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-[#00E5FF] dark:hover:bg-[#38EFFF] text-white dark:text-slate-950 font-bold text-xs shadow-md transition-all shrink-0 border border-slate-900 dark:border-transparent"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="glass-panel w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative space-y-6">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div>
              <span className="text-xs font-mono uppercase text-blue-600 dark:text-cyan-400 font-bold">
                {selectedJob.department} • {selectedJob.location}
              </span>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                {selectedJob.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {selectedJob.type} | Required Experience: {selectedJob.experience}
              </p>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {selectedJob.description}
            </p>

            {/* Requirements */}
            <div>
              <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider mb-2">
                Requirements:
              </h4>
              <div className="space-y-1.5">
                {selectedJob.requirements.map((req, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{req}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Responsibilities */}
            <div>
              <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider mb-2">
                Key Responsibilities:
              </h4>
              <div className="space-y-1.5">
                {selectedJob.responsibilities.map((resp, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                    <span>{resp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Submit application CTA */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Ready to apply? Send your CV & Github link via WhatsApp or info@bynarixa.com
              </span>
              <button
                onClick={() => {
                  openWhatsApp(
                    `Hello Bynarixa HR! I am applying for the position: ${selectedJob.title}. Here is my portfolio & resume link.`
                  );
                  setSelectedJob(null);
                }}
                className="w-full sm:w-auto relative overflow-hidden group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#10B981] via-[#059669] to-[#00838F] dark:from-[#25D366] dark:via-[#00E5FF] dark:to-[#8B5CF6] text-white dark:text-slate-950 font-black text-xs shadow-lg shadow-emerald-500/25 dark:shadow-[#00E5FF]/25 hover:shadow-xl transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none" />
                <Send className="w-4 h-4 text-white dark:text-slate-950" />
                <span>Apply via WhatsApp</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
