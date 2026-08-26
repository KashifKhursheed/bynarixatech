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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-[#7C3AED] dark:text-[#A855F7] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#7C3AED] dark:text-[#A855F7]" />
            <span>Full-Spectrum Engineering Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our Core <span className="text-gradient">Software Services</span>.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 font-medium">
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
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#7C3AED] text-white shadow-md shadow-[#7C3AED]/25 border border-[#7C3AED]'
                    : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-purple-50 dark:hover:bg-slate-800 hover:text-[#7C3AED] dark:hover:text-[#A855F7] border border-slate-200 dark:border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 dark:text-slate-400" />
            <input
              type="text"
              placeholder="Search services or tech stack..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-[#7C3AED] font-medium placeholder:text-slate-400"
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
                className="glass-panel bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-lg glow-card flex flex-col justify-between group transition-all"
              >
                <div>
                  {/* Icon & Category Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 text-[#7C3AED] dark:text-[#A855F7] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#7C3AED] group-hover:text-white transition-all shadow-xs">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-purple-50 dark:bg-purple-950/60 text-[#7C3AED] dark:text-[#A855F7] font-bold border border-purple-200 dark:border-purple-800">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#7C3AED] dark:group-hover:text-[#A855F7] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-4 font-medium">
                    {service.shortDesc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.techStack.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono font-bold border border-slate-200 dark:border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                    {service.techStack.length > 3 && (
                      <span className="text-[10px] px-2 py-0.5 rounded-md bg-purple-50 dark:bg-purple-950/60 text-[#7C3AED] dark:text-[#A855F7] font-mono font-bold border border-purple-200 dark:border-purple-800">
                        +{service.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Learn More Action Button */}
                <button
                  onClick={() => setActiveModalService(service)}
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-[#7C3AED] hover:text-white dark:hover:bg-[#7C3AED] dark:hover:text-white text-slate-900 dark:text-white font-bold text-xs transition-all border border-slate-200 dark:border-slate-700 shadow-xs cursor-pointer"
                >
                  <span>Learn More & Specs</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12 glass-panel bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
            <p className="text-sm text-slate-600 dark:text-slate-300 font-bold">
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
              className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#7C3AED] text-white flex items-center justify-center shrink-0 shadow-md shadow-[#7C3AED]/25">
                {React.createElement(iconMap[activeModalService.iconName] || Code, {
                  className: 'w-6 h-6',
                })}
              </div>
              <div>
                <span className="text-xs font-mono uppercase text-[#7C3AED] dark:text-[#A855F7] font-bold">
                  {activeModalService.category}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {activeModalService.title}
                </h3>
              </div>
            </div>

            {/* Full Description */}
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-medium">
              {activeModalService.fullDesc}
            </p>

            {/* Key Features */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-3">
                Key Service Features
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModalService.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-800 dark:text-slate-200 font-medium">
                    <Check className="w-4 h-4 text-[#7C3AED] dark:text-[#A855F7] shrink-0 mt-0.5" />
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
                    className="px-3 py-1 rounded-lg text-xs bg-purple-50 dark:bg-purple-950/60 text-[#7C3AED] dark:text-[#A855F7] font-mono font-bold border border-purple-200 dark:border-purple-800"
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300 font-medium">
                {activeModalService.deliverables.map((del, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#7C3AED]" />
                    <span>{del}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA inside Modal */}
            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-slate-600 dark:text-slate-400 font-bold">
                Ready to engineer your {activeModalService.title}?
              </span>
              <button
                onClick={() => {
                  openWhatsApp(
                    `Hello Bynarixa Tech Solutions! I am interested in ${activeModalService.title}. Let's discuss requirements.`
                  );
                  setActiveModalService(null);
                }}
                className="w-full sm:w-auto relative overflow-hidden group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#9333EA] to-[#0891B2] text-white font-bold text-sm shadow-lg shadow-purple-500/25 hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none" />
                <MessageSquare className="w-4 h-4 text-white" />
                <span>Discuss on WhatsApp AI</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
