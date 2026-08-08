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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <span>Showcase of Engineering Mastery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Featured <span className="text-gradient">Case Studies</span>.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Explore how Bynarixa Tech Solutions engineered high-performance web platforms, mobile apps, and SaaS platforms for global enterprises.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
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
              className="glass-panel rounded-2xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden shadow-lg hover:shadow-2xl glow-card group transition-all flex flex-col justify-between"
            >
              <div>
                {/* Image & Overlay */}
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold bg-blue-600/90 backdrop-blur-md text-white">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3">
                  <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-medium">
                    Client: {project.client}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                    {project.shortDesc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-2.5 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono"
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
                  className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-xs shadow-md shadow-blue-500/20 transition-all text-center"
                >
                  Read Case Study
                </button>
                <button
                  onClick={() =>
                    openWhatsApp(
                      `Hello Bynarixa Tech Solutions! I saw the case study for ${project.title} and want to discuss something similar.`
                    )
                  }
                  className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                  aria-label="Discuss project on WhatsApp"
                >
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="glass-panel bg-white dark:bg-slate-900 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl relative space-y-6">
            {/* Header Image banner */}
            <div className="relative h-60 bg-slate-900 rounded-t-2xl overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-900/80 text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-600 text-white">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
                  {selectedProject.title}
                </h3>
                <p className="text-xs font-mono text-cyan-300">Client: {selectedProject.client}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Metrics Header */}
              <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-blue-50/50 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700/60">
                {selectedProject.metrics.map((m, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xl sm:text-2xl font-extrabold text-blue-600 dark:text-cyan-400 font-mono">
                      {m.value}
                    </div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Challenge vs Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    The Challenge
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedProject.fullChallenge}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    The Engineering Solution
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Measured Impact */}
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-cyan-500" />
                  Key Business Impact & Results
                </h4>
                <div className="space-y-2">
                  {selectedProject.impact.map((imp, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{imp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-lg text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Want to build a platform like this for your business?
                </span>
                <button
                  onClick={() => {
                    openWhatsApp(
                      `Hello Bynarixa Tech Solutions! I reviewed the case study for ${selectedProject.title} and would like to build a similar app.`
                    );
                    setSelectedProject(null);
                  }}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium text-sm shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
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
