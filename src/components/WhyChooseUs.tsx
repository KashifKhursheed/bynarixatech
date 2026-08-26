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
      gradient: 'from-[#7C3AED] to-[#A855F7]',
    },
    {
      title: 'High Performance & Speed',
      desc: 'Sub-second page loads, 60fps mobile transitions, and efficient code caching guarantee zero lag.',
      icon: Zap,
      gradient: 'from-[#7C3AED] to-[#06B6D4]',
    },
    {
      title: 'Secure Architecture',
      desc: 'Bank-grade encryption, OWASP top 10 protection, and automated security vulnerability scanning.',
      icon: Shield,
      gradient: 'from-[#4C1D95] to-[#2563EB]',
    },
    {
      title: 'Scalable Systems',
      desc: 'Cloud-native microservices engineered to handle millions of daily active users without breaking.',
      icon: Layers,
      gradient: 'from-[#7C3AED] to-[#A855F7]',
    },
    {
      title: 'Agile Development',
      desc: 'Bi-weekly sprint demos, continuous integration pipelines, and full client transparency at every milestone.',
      icon: Workflow,
      gradient: 'from-[#4C1D95] to-[#7C3AED]',
    },
    {
      title: 'Fast On-Time Delivery',
      desc: 'Predictable sprint schedules and rapid MVP deployment to get your software to market ahead of competitors.',
      icon: Clock,
      gradient: 'from-[#06B6D4] to-[#7C3AED]',
    },
    {
      title: '24/7 SLA Support',
      desc: 'Around-the-clock server health monitoring, proactive security updates, and instant emergency hotfixes.',
      icon: Headphones,
      gradient: 'from-[#7C3AED] to-[#A855F7]',
    },
    {
      title: 'Affordable & Transparent Pricing',
      desc: 'Flexible milestone-based billing with zero hidden costs, ensuring maximum return on your tech investment.',
      icon: DollarSign,
      gradient: 'from-[#A855F7] to-[#06B6D4]',
    },
  ];

  return (
    <section id="why-us" className="py-20 relative bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EEFF] dark:bg-[#171525] border border-[#E5E1F5] dark:border-[#28243A] text-[#7C3AED] dark:text-[#A855F7] text-xs font-mono font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4 text-[#7C3AED] dark:text-[#A855F7]" />
            <span>The Bynarixa Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11111A] dark:text-[#F8F7FF] tracking-tight">
            Why Leading Businesses <span className="text-gradient">Choose Us</span>.
          </h2>
          <p className="text-base sm:text-lg text-[#5F6070] dark:text-[#A9A7B8] font-medium">
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
                className="glass-panel p-6 rounded-2xl border border-[#E5E1F5] dark:border-[#28243A] shadow-md hover:shadow-xl glow-card group transition-all"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${adv.gradient} text-white flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}
                >
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-[#11111A] dark:text-[#F8F7FF] mb-2 group-hover:text-[#7C3AED] dark:group-hover:text-[#A855F7] transition-colors">
                  {adv.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5F6070] dark:text-[#A9A7B8] leading-relaxed font-medium">
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
