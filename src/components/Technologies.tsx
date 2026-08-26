import React, { useState } from 'react';
import { TECHNOLOGIES_DATA } from '../data/mockData';
import {
  Code2,
  Atom,
  Globe2,
  Boxes,
  Palette,
  FileCode,
  Terminal,
  Server,
  Cpu,
  Binary,
  Shield,
  Layers,
  Briefcase,
  Database,
  Table,
  HardDrive,
  Flame,
  CloudRain,
  Cloud,
  Box,
  CloudLightning,
  Smartphone,
  Tablet,
  SmartphoneNfc,
  AppWindow,
  CpuIcon,
  CheckCircle,
} from 'lucide-react';

const techIconMap: Record<string, React.ElementType> = {
  Code2,
  Atom,
  Globe2,
  Boxes,
  Palette,
  FileCode,
  Terminal,
  Server,
  Cpu,
  Binary,
  Shield,
  Layers,
  Briefcase,
  Database,
  Table,
  HardDrive,
  Flame,
  CloudRain,
  Cloud,
  Box,
  CloudLightning,
  Smartphone,
  Tablet,
  SmartphoneNfc,
  AppWindow,
};

export const Technologies: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Cloud', 'Mobile'];

  const filteredTech =
    activeTab === 'All'
      ? TECHNOLOGIES_DATA
      : TECHNOLOGIES_DATA.filter((item) => item.category === activeTab);

  return (
    <section id="technologies" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <CpuIcon className="w-4 h-4 text-cyan-500" />
            <span>Modern Engineering Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Battle-Tested <span className="text-gradient">Technologies</span>.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            We build software using modern, production-grade tools, frameworks, and cloud databases engineered for lightning execution and security.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                activeTab === cat
                  ? 'bg-slate-900 dark:bg-[#00E5FF] text-white dark:text-slate-950 shadow-md border border-slate-900 dark:border-transparent'
                  : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700 border-2 border-slate-200 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Technology Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {filteredTech.map((tech) => {
            const IconComponent = techIconMap[tech.icon] || Code2;
            return (
              <div
                key={tech.name}
                className="glass-panel p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-lg glow-card flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-bold">
                      {tech.level}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                    {tech.description}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                  <span className="font-mono">{tech.category}</span>
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
