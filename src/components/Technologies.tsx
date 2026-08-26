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
    <section id="technologies" className="py-20 relative bg-[#F1EEFF]/30 dark:bg-[#09090F]/60 border-y border-[#E5E1F5] dark:border-[#28243A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EEFF] dark:bg-[#171525] border border-[#E5E1F5] dark:border-[#28243A] text-[#7C3AED] dark:text-[#A855F7] text-xs font-mono font-bold uppercase tracking-wider">
            <CpuIcon className="w-4 h-4 text-[#7C3AED] dark:text-[#A855F7]" />
            <span>Modern Engineering Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11111A] dark:text-[#F8F7FF] tracking-tight">
            Battle-Tested <span className="text-gradient">Technologies</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6070] dark:text-[#A9A7B8] font-medium">
            We build software using modern, production-grade tools, frameworks, and cloud databases engineered for lightning execution and security.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                activeTab === cat
                  ? 'bg-[#7C3AED] text-white shadow-md shadow-[#7C3AED]/25 border border-[#7C3AED]'
                  : 'bg-white dark:bg-[#11111A] text-[#11111A] dark:text-[#A9A7B8] hover:bg-[#F1EEFF] dark:hover:bg-[#171525] hover:text-[#7C3AED] dark:hover:text-[#A855F7] border border-[#E5E1F5] dark:border-[#28243A]'
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
                className="glass-panel p-5 rounded-2xl border border-[#E5E1F5] dark:border-[#28243A] shadow-md hover:shadow-lg glow-card flex flex-col justify-between group transition-all"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F1EEFF] dark:bg-[#171525] text-[#7C3AED] dark:text-[#A855F7] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:text-white transition-all shadow-xs">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-[#F1EEFF] dark:bg-[#171525] text-[#7C3AED] dark:text-[#A855F7] font-bold border border-[#E5E1F5] dark:border-[#28243A]">
                      {tech.level}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#11111A] dark:text-[#F8F7FF] mb-1 group-hover:text-[#7C3AED] dark:group-hover:text-[#A855F7] transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-[11px] text-[#5F6070] dark:text-[#A9A7B8] leading-relaxed font-medium">
                    {tech.description}
                  </p>
                </div>

                <div className="mt-4 pt-2 border-t border-[#E5E1F5] dark:border-[#28243A] flex items-center justify-between text-[10px] text-[#5F6070] dark:text-[#A9A7B8] font-bold">
                  <span className="font-mono">{tech.category}</span>
                  <CheckCircle className="w-3.5 h-3.5 text-[#7C3AED] dark:text-[#A855F7]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
