import React, { useState, useEffect } from 'react';
import { STATS } from '../data/mockData';
import {
  CheckCircle2,
  Target,
  Eye,
  Shield,
  Zap,
  Award,
  Users,
  Globe,
  Cpu,
  Layers,
  Code2,
  Workflow,
  Sparkles,
} from 'lucide-react';

export const About: React.FC = () => {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    countries: 0,
    years: 0,
    team: 0,
  });

  // Animated counter effect on scroll/mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setCounts({
        projects: 250,
        clients: 120,
        countries: 18,
        years: 8,
        team: 45,
      });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const coreValues = [
    {
      title: 'Architectural Excellence',
      description: 'We adhere to clean, self-documenting code standards, SOLID principles, and zero-defect quality thresholds.',
      icon: Code2,
    },
    {
      title: 'Client-Centric Transparency',
      description: 'Weekly sprint demos, open Jira access, and dedicated Slack/WhatsApp channels ensure full project visibility.',
      icon: Users,
    },
    {
      title: 'Security & Compliance First',
      description: 'SOC2, HIPAA, and GDPR compliance standards baked directly into every line of server and database code.',
      icon: Shield,
    },
    {
      title: 'Relentless Innovation',
      description: 'Pioneering custom AI models, microservices, and cross-platform native speed ahead of industry benchmarks.',
      icon: Zap,
    },
  ];

  const methodologySteps = [
    { name: 'Quality Assurance', desc: 'Automated unit, integration, and E2E Cypress/Jest testing before every release.' },
    { name: 'Agile Methodology', desc: 'Bi-weekly sprints, backlog grooming, and rapid iterative software updates.' },
    { name: 'Development Standards', desc: 'Strict TypeScript typing, ESLint rules, and peer code review gates.' },
    { name: 'Post-Launch SLA', desc: 'Proactive 24/7 server health monitoring and dedicated hotfix response.' },
  ];

  return (
    <section id="about" className="py-20 relative bg-[#F1EEFF]/40 dark:bg-[#09090F]/60 border-y border-[#E5E1F5] dark:border-[#28243A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EEFF] dark:bg-[#171525] border border-[#E5E1F5] dark:border-[#28243A] text-[#7C3AED] dark:text-[#A855F7] text-xs font-mono font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-[#7C3AED] dark:text-[#A855F7]" />
            <span>About Bynarixa Tech Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11111A] dark:text-[#F8F7FF] tracking-tight">
            Engineering Software with <span className="text-gradient">Precision & Soul</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6070] dark:text-[#A9A7B8] font-medium">
            Founded with a vision to build software that stands the test of time, Bynarixa Tech Solutions combines world-class engineering discipline with human-centered product design.
          </p>
        </div>

        {/* Animated Counter Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-16">
          <div className="glass-panel p-6 rounded-2xl text-center border border-[#E5E1F5] dark:border-[#28243A] shadow-md hover:border-[#7C3AED]/50 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#7C3AED] dark:text-[#A855F7] font-mono mb-1">
              {counts.projects}+
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#5F6070] dark:text-[#A9A7B8]">
              Projects Completed
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl text-center border border-[#E5E1F5] dark:border-[#28243A] shadow-md hover:border-[#7C3AED]/50 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#7C3AED] dark:text-[#A855F7] font-mono mb-1">
              {counts.clients}+
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#5F6070] dark:text-[#A9A7B8]">
              Happy Global Clients
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl text-center border border-[#E5E1F5] dark:border-[#28243A] shadow-md hover:border-[#7C3AED]/50 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#7C3AED] dark:text-[#A855F7] font-mono mb-1">
              {counts.countries}+
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#5F6070] dark:text-[#A9A7B8]">
              Countries Served
            </div>
          </div>

          <div className="glass-panel p-6 rounded-2xl text-center border border-[#E5E1F5] dark:border-[#28243A] shadow-md hover:border-[#7C3AED]/50 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#7C3AED] dark:text-[#A855F7] font-mono mb-1">
              {counts.years}+
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#5F6070] dark:text-[#A9A7B8]">
              Years Experience
            </div>
          </div>

          <div className="col-span-2 lg:col-span-1 glass-panel p-6 rounded-2xl text-center border border-[#E5E1F5] dark:border-[#28243A] shadow-md hover:border-[#7C3AED]/50 transition-all">
            <div className="text-3xl sm:text-4xl font-extrabold text-[#7C3AED] dark:text-[#A855F7] font-mono mb-1">
              {counts.team}+
            </div>
            <div className="text-xs sm:text-sm font-bold text-[#5F6070] dark:text-[#A9A7B8]">
              Expert Engineers
            </div>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="glass-panel p-8 rounded-2xl border border-[#E5E1F5] dark:border-[#28243A] shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#F1EEFF] dark:bg-[#171525] text-[#7C3AED] dark:text-[#A855F7] flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#11111A] dark:text-[#F8F7FF]">Our Mission</h3>
            <p className="text-[#5F6070] dark:text-[#A9A7B8] text-sm sm:text-base leading-relaxed font-medium">
              To empower visionaries, startups, and enterprises worldwide by transforming complex ideas into intuitive, robust, and scalable software platforms that drive real business growth.
            </p>
          </div>

          <div className="glass-panel p-8 rounded-2xl border border-[#E5E1F5] dark:border-[#28243A] shadow-lg space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#F1EEFF] dark:bg-[#171525] text-[#06B6D4] flex items-center justify-center">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-[#11111A] dark:text-[#F8F7FF]">Our Vision</h3>
            <p className="text-[#5F6070] dark:text-[#A9A7B8] text-sm sm:text-base leading-relaxed font-medium">
              To be recognized globally as the gold standard in bespoke software development—renowned for software reliability, cutting-edge AI integrations, and uncompromised client satisfaction.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#11111A] dark:text-[#F8F7FF]">
              Core Principles & Engineering Standards
            </h3>
            <p className="text-[#5F6070] dark:text-[#A9A7B8] text-sm mt-2 font-medium">
              Every system we construct is anchored in four uncompromising core principles.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-2xl border border-[#E5E1F5] dark:border-[#28243A] shadow-md hover:border-[#7C3AED]/50 hover:-translate-y-1 transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#F1EEFF] dark:bg-[#171525] text-[#7C3AED] dark:text-[#A855F7] flex items-center justify-center mb-4">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-lg font-bold text-[#11111A] dark:text-[#F8F7FF] mb-2">{val.title}</h4>
                  <p className="text-xs sm:text-sm text-[#5F6070] dark:text-[#A9A7B8] leading-relaxed font-medium">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Development & Quality Standards */}
        <div className="mt-16 glass-panel p-8 rounded-2xl border border-[#E5E1F5] dark:border-[#28243A] shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F1EEFF] dark:bg-[#171525] text-[#7C3AED] dark:text-[#A855F7] text-xs font-mono font-bold border border-[#E5E1F5] dark:border-[#28243A]">
                <Workflow className="w-3.5 h-3.5" />
                <span>AGILE SOFTWARE DEVELOPMENT</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#11111A] dark:text-[#F8F7FF]">
                How We Guarantee Quality Assurance
              </h3>
              <p className="text-sm text-[#5F6070] dark:text-[#A9A7B8] leading-relaxed font-medium">
                We bridge rigorous engineering practices with flexible Agile execution. Our clients enjoy predictability, full code ownership, and continuous integration.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {methodologySteps.map((m, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-[#171525] border border-[#E5E1F5] dark:border-[#28243A] space-y-1.5"
                >
                  <div className="flex items-center gap-2 text-[#11111A] dark:text-[#F8F7FF] font-bold text-sm">
                    <CheckCircle2 className="w-4 h-4 shrink-0 text-[#7C3AED] dark:text-[#A855F7]" />
                    <span>{m.name}</span>
                  </div>
                  <p className="text-xs text-[#5F6070] dark:text-[#A9A7B8] font-medium">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
