import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/mockData';
import { ServiceItem } from '../types';
import { openWhatsApp } from '../utils/whatsapp';
import {
  Smartphone,
  Apple,
  Layers,
  Tablet,
  Globe,
  Code,
  Building2,
  Cloud,
  Bot,
  Cpu,
  Layout,
  Server,
  ShieldCheck,
  Database,
  UserCheck,
  ShoppingBag,
  Search,
  ArrowRight,
  Check,
  X,
  Sparkles,
  MessageSquare,
} from 'lucide-react';

const iconMap: Record<string, React.ElementType> = {
  Smartphone,
  Apple,
  Layers,
  Tablet,
  Globe,
  Code,
  Building2,
  Cloud,
  Bot,
  Cpu,
  Layout,
  Server,
  ShieldCheck,
  Database,
  UserCheck,
  ShoppingBag,
};

export const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Services (16)' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'web', label: 'Web & SaaS' },
    { id: 'enterprise', label: 'Enterprise & Systems' },
    { id: 'ai_cloud', label: 'AI & Cloud Infrastructure' },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory =
      selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch =
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="services" className="py-20 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <span>Full-Spectrum Engineering Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Core <span className="text-gradient">Software Services</span>.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            From mobile apps to enterprise cloud backends and AI models, Bynarixa Tech Solutions designs, builds, and deploys high-impact software tailored to your growth goals.
          </p>
        </div>

        {/* Category Filters & Search Input */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search services or tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = iconMap[service.iconName] || Code;
            return (
              <div
                key={service.id}
                className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl glow-card flex flex-col justify-between group transition-all"
              >
                <div>
                  {/* Icon & Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-cyan-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 font-semibold">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.techStack.length > 3 && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-cyan-300 font-mono">
                        +{service.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Learn More Action Button */}
                <button
                  onClick={() => setActiveModalService(service)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-cyan-500 dark:hover:text-slate-950 text-slate-800 dark:text-slate-200 font-medium text-xs transition-all group-hover:shadow-sm"
                >
                  <span>Learn More & Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 glass-panel rounded-2xl">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              No services found matching "{searchQuery}". Try searching for mobile, cloud, or AI.
            </p>
          </div>
        )}
      </div>

      {/* Service Details Modal */}
      {activeModalService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="glass-panel bg-white dark:bg-slate-900 w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 shadow-2xl relative space-y-6">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalService(null)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                {React.createElement(iconMap[activeModalService.iconName] || Code, {
                  className: 'w-6 h-6',
                })}
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-blue-600 dark:text-cyan-400 font-bold">
                  {activeModalService.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            {/* Full Description */}
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {activeModalService.fullDesc}
            </p>

            {/* Key Features */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                Key Service Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModalService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Technology Stack Used
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalService.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-cyan-300 font-mono font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Client Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                {activeModalService.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA inside Modal */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Ready to engineer your {activeModalService.title}?
              </span>
              <button
                onClick={() => {
                  openWhatsApp(
                    `Hello Bynarixa Tech Solutions! I am interested in ${activeModalService.title}. Let's discuss requirements.`
                  );
                  setActiveModalService(null);
                }}
                className="w-full sm:w-auto relative overflow-hidden group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#0097A7] dark:from-[#25D366] dark:via-[#00E5FF] dark:to-[#8B5CF6] text-white dark:text-black font-extrabold text-sm shadow-lg shadow-[#25D366]/25 dark:shadow-[#00E5FF]/25 hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none" />
                <MessageSquare className="w-4 h-4" />
                <span>Discuss on WhatsApp AI</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
