import React from 'react';
import {
  Palette,
  Zap,
  Shield,
  Layers,
  Workflow,
  Clock,
  Headphones,
  DollarSign,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const advantages = [
    {
      title: 'Modern UI/UX Design',
      desc: 'Pixel-perfect, human-centered interfaces with fluid animations that captivate users and boost conversion rates.',
      icon: Palette,
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'High Performance & Speed',
      desc: 'Sub-second page loads, 60fps mobile transitions, and efficient code caching guarantee zero lag.',
      icon: Zap,
      gradient: 'from-cyan-500 to-teal-500',
    },
    {
      title: 'Secure Architecture',
      desc: 'Bank-grade encryption, OWASP top 10 protection, and automated security vulnerability scanning.',
      icon: Shield,
      gradient: 'from-indigo-500 to-purple-500',
    },
    {
      title: 'Scalable Systems',
      desc: 'Cloud-native microservices engineered to handle millions of daily active users without breaking.',
      icon: Layers,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Agile Development',
      desc: 'Bi-weekly sprint demos, continuous integration pipelines, and full client transparency at every milestone.',
      icon: Workflow,
      gradient: 'from-blue-600 to-indigo-600',
    },
    {
      title: 'Fast On-Time Delivery',
      desc: 'Predictable sprint schedules and rapid MVP deployment to get your software to market ahead of competitors.',
      icon: Clock,
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      title: '24/7 SLA Support',
      desc: 'Around-the-clock server health monitoring, proactive security updates, and instant emergency hotfixes.',
      icon: Headphones,
      gradient: 'from-amber-500 to-orange-500',
    },
    {
      title: 'Affordable & Transparent Pricing',
      desc: 'Flexible milestone-based billing with zero hidden costs, ensuring maximum return on your tech investment.',
      icon: DollarSign,
      gradient: 'from-rose-500 to-red-500',
    },
  ];

  return (
    <section id="why-us" className="py-20 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800/80 text-black dark:text-cyan-300 text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>The Bynarixa Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black dark:text-white tracking-tight">
            Why Leading Businesses <span className="text-gradient">Choose Us</span>.
          </h2>
          <p className="text-base sm:text-lg text-black dark:text-slate-300 font-medium">
            We don't just write code—we partner with you to engineer scalable digital products that deliver measurable revenue growth.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((adv, idx) => {
            const IconComp = adv.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 shadow-md hover:shadow-xl glow-card group transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${adv.gradient} text-white flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-black dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm text-black dark:text-slate-300 leading-relaxed font-medium">
                  {adv.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
