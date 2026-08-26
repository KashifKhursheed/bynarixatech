import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/mockData';
import { ProjectItem } from '../types';
import { openWhatsApp } from '../utils/whatsapp';
import {
  ExternalLink,
  Sparkles,
  Layers,
  CheckCircle2,
  X,
  MessageSquare,
  TrendingUp,
} from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const categories = ['All', 'Mobile Apps', 'Web Applications', 'Enterprise Software', 'SaaS', 'E-Commerce'];

  const filteredProjects =
    activeCategory === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EEFF] dark:bg-[#171525] border border-[#E5E1F5] dark:border-[#28243A] text-[#7C3AED] dark:text-[#A855F7] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#7C3AED] dark:text-[#A855F7]" />
            <span>Showcase of Engineering Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11111A] dark:text-[#F8F7FF] tracking-tight">
            Featured <span className="text-gradient">Case Studies</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6070] dark:text-[#A9A7B8] font-medium">
            Explore how Bynarixa Tech Solutions engineered high-performance web platforms, mobile apps, and SaaS platforms for global enterprises.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#7C3AED] text-white shadow-md shadow-[#7C3AED]/25 border border-[#7C3AED]'
                  : 'bg-white dark:bg-[#11111A] text-[#11111A] dark:text-[#A9A7B8] hover:bg-[#F1EEFF] dark:hover:bg-[#171525] hover:text-[#7C3AED] dark:hover:text-[#A855F7] border border-[#E5E1F5] dark:border-[#28243A]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl border border-[#E5E1F5] dark:border-[#28243A] overflow-hidden shadow-lg hover:shadow-2xl glow-card group transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image & Overlay */}
                <div className="relative h-52 overflow-hidden bg-[#09090F]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09090F] via-[#09090F]/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-[#7C3AED]/90 backdrop-blur-md text-white shadow-xs">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <span className="text-xs font-mono text-[#7C3AED] dark:text-[#A855F7] font-bold">
                    Client: {project.client}
                  </span>
                  <h3 className="text-lg font-bold text-[#11111A] dark:text-[#F8F7FF] group-hover:text-[#7C3AED] dark:group-hover:text-[#A855F7] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5F6070] dark:text-[#A9A7B8] leading-relaxed line-clamp-2 font-medium">
                    {project.shortDesc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2.5 py-0.5 rounded-md bg-[#F1EEFF] dark:bg-[#171525] text-[#11111A] dark:text-[#A9A7B8] font-mono font-bold border border-[#E5E1F5] dark:border-[#28243A]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Actions Footer */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs shadow-md transition-all text-center cursor-pointer shadow-[#7C3AED]/20"
                >
                  Read Case Study
                </button>
                <button
                  onClick={() =>
                    openWhatsApp(
                      `Hello Bynarixa Tech Solutions! I saw the case study for ${project.title} and want to discuss something similar.`
                    )
                  }
                  className="p-2.5 rounded-xl bg-[#F1EEFF] dark:bg-[#171525] text-[#11111A] dark:text-[#F8F7FF] hover:bg-[#E5E1F5] dark:hover:bg-[#28243A] transition-colors border border-[#E5E1F5] dark:border-[#28243A] cursor-pointer"
                  aria-label="Discuss project on WhatsApp"
                >
                  <ExternalLink className="w-4 h-4 text-[#7C3AED] dark:text-[#A855F7]" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#09090F]/70 backdrop-blur-sm animate-fade-in">
          <div className="glass-panel bg-white dark:bg-[#11111A] w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-[#E5E1F5] dark:border-[#28243A] shadow-2xl relative space-y-6">
            {/* Header Image banner */}
            <div className="relative h-60 bg-[#09090F] rounded-t-2xl overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090F] via-[#09090F]/40 to-transparent" />

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-[#09090F]/80 text-white hover:bg-[#09090F] transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#7C3AED] text-white">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-[#06B6D4]">Client: {selectedProject.client}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Metrics Header */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-[#F1EEFF] dark:bg-[#171525] border border-[#E5E1F5] dark:border-[#28243A]">
                {selectedProject.metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl sm:text-2xl font-extrabold text-[#7C3AED] dark:text-[#A855F7] font-mono">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-[#5F6070] dark:text-[#A9A7B8] font-bold">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge vs Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-[#11111A] dark:text-[#F8F7FF] uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    The Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5F6070] dark:text-[#A9A7B8] leading-relaxed font-medium">
                    {selectedProject.fullChallenge}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-[#11111A] dark:text-[#F8F7FF] uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    The Engineering Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-[#5F6070] dark:text-[#A9A7B8] leading-relaxed font-medium">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Measured Impact */}
              <div>
                <h4 className="text-sm font-bold text-[#11111A] dark:text-[#F8F7FF] uppercase tracking-wider mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-[#7C3AED] dark:text-[#A855F7]" />
                  Key Business Impact & Results
                </h4>
                <div className="space-y-2">
                  {selectedProject.impact.map((imp, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#11111A] dark:text-[#F8F7FF] font-bold">
                      <CheckCircle2 className="w-4 h-4 text-[#7C3AED] dark:text-[#A855F7] shrink-0" />
                      <span>{imp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-[#E5E1F5] dark:border-[#28243A] flex flex-wrap gap-2">
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-[#F1EEFF] dark:bg-[#171525] text-[#7C3AED] dark:text-[#A855F7] font-bold border border-[#E5E1F5] dark:border-[#28243A]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#5F6070] dark:text-[#A9A7B8] font-bold">
                  Want to build a platform like this for your business?
                </span>
                <button
                  onClick={() => {
                    openWhatsApp(
                      `Hello Bynarixa Tech Solutions! I reviewed the case study for ${selectedProject.title} and would like to build a similar app.`
                    );
                    setSelectedProject(null);
                  }}
                  className="w-full sm:w-auto relative overflow-hidden group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#06B6D4] text-white font-bold text-sm shadow-lg shadow-purple-500/25 hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none" />
                  <MessageSquare className="w-4 h-4 text-white" />
                  <span>Discuss Case Study on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
