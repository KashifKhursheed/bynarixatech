import React, { useState } from 'react';
import {
  Search,
  FileText,
  Layout,
  Code2,
  CheckCircle2,
  Rocket,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: 1,
      title: 'Requirement Analysis',
      subtitle: 'Discovery & Feasibility Study',
      desc: 'We conduct deep workshops to audit your business goals, target user personas, technical constraints, and competitors.',
      icon: Search,
      deliverables: ['PRD Document', 'Tech Feasibility Report', 'Project Scope & Budget'],
    },
    {
      num: 2,
      title: 'Planning & Architecture',
      subtitle: 'Sprint Strategy & Schema Design',
      desc: 'Our architects map out microservice boundaries, database schemas, API specs, and sprint timelines.',
      icon: FileText,
      deliverables: ['System Architecture Diagram', 'Database ERD', 'Agile Roadmap'],
    },
    {
      num: 3,
      title: 'UI/UX Design',
      subtitle: 'Figma Wireframes & Prototypes',
      desc: 'We craft human-centered user flows, design systems, and interactive clickable prototypes in Figma.',
      icon: Layout,
      deliverables: ['Clickable Prototype', 'Component Design System', 'Exported Design Tokens'],
    },
    {
      num: 4,
      title: 'Development',
      subtitle: 'Agile Coding & Code Review',
      desc: 'Our senior engineers write clean, modular, tested TypeScript code across frontend, mobile, and backend microservices.',
      icon: Code2,
      deliverables: ['Weekly Staging Builds', 'Git Repository Access', 'Automated Test Suites'],
    },
    {
      num: 5,
      title: 'Testing & QA',
      subtitle: 'Security Audit & Performance Tests',
      desc: 'We execute rigorous automated unit tests, manual cross-browser testing, penetration tests, and load testing.',
      icon: CheckCircle2,
      deliverables: ['QA Bug Audit Report', 'Security Scan Cert', 'Lighthouse Score Audit'],
    },
    {
      num: 6,
      title: 'Deployment & Launch',
      subtitle: 'Cloud Production Setup',
      desc: 'We configure CI/CD pipelines, auto-scaling Kubernetes/Docker clusters, SSL certificates, and publish to App Stores.',
      icon: Rocket,
      deliverables: ['Live App Store Release', 'Cloud Infrastructure Setup', 'Admin Portal Access'],
    },
    {
      num: 7,
      title: 'Maintenance & Support',
      subtitle: '24/7 Monitoring & Optimization',
      desc: 'We provide SLA-backed post-launch support, real-time server health monitoring, security patches, and feature additions.',
      icon: ShieldCheck,
      deliverables: ['Monthly Health Metrics', 'SLA Uptime Guarantee', 'Dedicated Support Manager'],
    },
  ];

  return (
    <section id="process" className="py-20 relative bg-slate-50/50 dark:bg-slate-900/40 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-blue-700 dark:text-cyan-300 text-xs font-mono font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-500" />
            <span>Proven Delivery Blueprint</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Our 7-Step <span className="text-gradient">Development Process</span>.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A structured Agile methodology designed to eliminate risk, guarantee code quality, and launch your software on schedule.
          </p>
        </div>

        {/* Desktop Interactive Timeline Bar */}
        <div className="hidden lg:grid grid-cols-7 gap-2 mb-12 relative">
          <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-slate-200 dark:bg-slate-800 -translate-y-1/2 z-0" />
          {steps.map((step) => {
            const isActive = activeStep === step.num;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStep(step.num)}
                className={`relative z-10 flex flex-col items-center group focus:outline-none transition-all`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-bold font-mono transition-all ${
                    isActive
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg shadow-blue-500/30 scale-110 ring-4 ring-blue-100 dark:ring-blue-950'
                      : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 group-hover:border-blue-500'
                  }`}
                >
                  0{step.num}
                </div>
                <span
                  className={`mt-3 text-xs font-semibold text-center max-w-[100px] line-clamp-2 transition-colors ${
                    isActive
                      ? 'text-blue-600 dark:text-cyan-400'
                      : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'
                  }`}
                >
                  {step.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed Feature Card */}
        {steps.map((step) => {
          if (step.num !== activeStep) return null;
          const IconComp = step.icon;
          return (
            <div
              key={step.num}
              className="glass-panel p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-xl max-w-4xl mx-auto space-y-6 animate-fade-in"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-blue-600 dark:text-cyan-400 font-bold">
                      PHASE 0{step.num} OF 07
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{step.subtitle}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    disabled={activeStep === 1}
                    onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                    className="px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700 disabled:opacity-40"
                  >
                    Previous
                  </button>
                  <button
                    disabled={activeStep === 7}
                    onClick={() => setActiveStep((prev) => Math.min(7, prev + 1))}
                    className="px-3.5 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 dark:bg-[#00E5FF] dark:hover:bg-[#38EFFF] text-white dark:text-slate-950 text-xs font-bold disabled:opacity-40 border border-slate-900 dark:border-transparent shadow-sm"
                  >
                    Next Step
                  </button>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {step.desc}
              </p>

              <div>
                <h4 className="text-xs font-bold font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Key Phase Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {step.deliverables.map((del, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-white/80 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-xs font-medium text-slate-800 dark:text-slate-200 flex items-center gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}

        {/* Mobile View Accordion List */}
        <div className="lg:hidden space-y-4 mt-8">
          {steps.map((step) => {
            const IconComp = step.icon;
            const isOpen = activeStep === step.num;
            return (
              <div
                key={step.num}
                className="glass-panel rounded-2xl border border-slate-200/80 dark:border-slate-800/80 overflow-hidden"
              >
                <button
                  onClick={() => setActiveStep(step.num)}
                  className="w-full p-4 flex items-center justify-between text-left font-bold text-slate-900 dark:text-white"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900/60 text-blue-600 dark:text-cyan-400 flex items-center justify-center text-xs font-mono font-bold">
                      0{step.num}
                    </span>
                    <span className="text-sm">{step.title}</span>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="p-4 pt-0 text-xs text-slate-600 dark:text-slate-300 space-y-3 border-t border-slate-100 dark:border-slate-800">
                    <p className="pt-2">{step.desc}</p>
                    <div className="space-y-1.5">
                      {step.deliverables.map((d, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500" />
                          <span>{d}</span>
                        </div>
                      ))}
                    </div>
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
