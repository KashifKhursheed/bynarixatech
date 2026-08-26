import React, { useEffect, useRef, useState } from 'react';
import { openWhatsApp, DISPLAY_PHONE } from '../utils/whatsapp';
import {
  ArrowRight,
  Code2,
  Cpu,
  Sparkles,
  CheckCircle2,
  Terminal,
  Play,
  Layers,
  Shield,
  Smartphone,
  Globe,
  Zap,
  MessageSquare,
} from 'lucide-react';

export const Hero: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Binary particles animation canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const binaryChars = ['0', '1', '{', '}', '<', '>', '/', ';', '=>', '01'];
    const particles = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      char: binaryChars[Math.floor(Math.random() * binaryChars.length)],
      fontSize: Math.floor(Math.random() * 8) + 12,
      speedY: Math.random() * 0.8 + 0.2,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX;
        if (p.y > height) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.fillStyle = Math.random() > 0.5 
          ? `rgba(124, 58, 237, ${p.opacity})` 
          : `rgba(6, 182, 212, ${p.opacity})`;
        ctx.font = `${p.fontSize}px monospace`;
        ctx.fillText(p.char, p.x, p.y);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-grid-pattern"
    >
      {/* Background Matrix Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none opacity-30 dark:opacity-40 z-0"
      />

      {/* Floating Ambient Glowing Blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7C3AED]/15 dark:bg-[#7C3AED]/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        style={{
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#06B6D4]/12 dark:bg-[#06B6D4]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        style={{
          transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F1EEFF] dark:bg-[#171525] border border-[#E5E1F5] dark:border-[#28243A] text-[#7C3AED] dark:text-[#A855F7] text-xs font-mono font-bold uppercase tracking-widest shadow-xs">
              <span className="w-2 h-2 bg-[#7C3AED] dark:bg-[#A855F7] rounded-full animate-pulse" />
              <span>Innovation Hub • Intelligent Software</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#11111A] dark:text-[#F8F7FF] leading-[1.12]">
              Engineering the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#06B6D4]">
                Future
              </span>{' '}
              with Intelligent Software.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#5F6070] dark:text-[#A9A7B8] max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              We build next-generation mobile apps, web ecosystems, and enterprise software designed to scale your business into the digital frontier.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={() =>
                  openWhatsApp(
                    'Hello Bynarixa Tech Solutions! I would like to get a free project quote from your AI Consultant.'
                  )
                }
                className="w-full sm:w-auto relative overflow-hidden group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#06B6D4] text-white font-bold text-sm sm:text-base shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/35 hover:-translate-y-0.5 transition-all duration-300 active:scale-95 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none" />
                <MessageSquare className="w-5 h-5 text-white" />
                <span>Chat with AI on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-white" />
              </button>

              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white dark:bg-[#11111A] text-[#11111A] dark:text-[#F8F7FF] hover:text-[#7C3AED] dark:hover:text-[#A855F7] hover:border-[#7C3AED] font-bold text-sm sm:text-base border border-[#E5E1F5] dark:border-[#28243A] transition-all hover:bg-[#F1EEFF] dark:hover:bg-[#171525] shadow-xs hover:shadow-md"
              >
                <Play className="w-4 h-4 fill-current text-[#7C3AED] dark:text-[#A855F7]" />
                <span>View Case Studies</span>
              </a>
            </div>

            {/* Metrics Stats Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#E5E1F5] dark:border-[#28243A]">
              <div className="bg-white dark:bg-[#11111A] border border-[#E5E1F5] dark:border-[#28243A] rounded-2xl p-3.5 text-center shadow-xs">
                <div className="text-2xl font-black text-[#11111A] dark:text-[#F8F7FF] font-mono">500+</div>
                <div className="text-[10px] text-[#5F6070] dark:text-[#A9A7B8] uppercase tracking-widest font-bold mt-0.5">Projects</div>
              </div>
              <div className="bg-white dark:bg-[#11111A] border border-[#E5E1F5] dark:border-[#28243A] rounded-2xl p-3.5 text-center shadow-xs">
                <div className="text-2xl font-black text-[#11111A] dark:text-[#F8F7FF] font-mono">98%</div>
                <div className="text-[10px] text-[#5F6070] dark:text-[#A9A7B8] uppercase tracking-widest font-bold mt-0.5">Retention</div>
              </div>
              <div className="bg-white dark:bg-[#11111A] border border-[#E5E1F5] dark:border-[#28243A] rounded-2xl p-3.5 text-center shadow-xs">
                <div className="text-2xl font-black text-[#11111A] dark:text-[#F8F7FF] font-mono">25+</div>
                <div className="text-[10px] text-[#5F6070] dark:text-[#A9A7B8] uppercase tracking-widest font-bold mt-0.5">Countries</div>
              </div>
              <div className="bg-white dark:bg-[#11111A] border border-[#E5E1F5] dark:border-[#28243A] rounded-2xl p-3.5 text-center shadow-xs">
                <div className="text-2xl font-black text-[#11111A] dark:text-[#F8F7FF] font-mono">12+</div>
                <div className="text-[10px] text-[#5F6070] dark:text-[#A9A7B8] uppercase tracking-widest font-bold mt-0.5">Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Software Architecture Interactive Card */}
          <div className="lg:col-span-5 relative">
            <div
              className="glass-panel p-6 sm:p-8 rounded-2xl shadow-2xl border border-[#E5E1F5] dark:border-[#28243A] relative z-10 transition-transform duration-300"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 6}deg) rotateX(${
                  mousePos.y * -6
                }deg)`,
              }}
            >
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-[#E5E1F5] dark:border-[#28243A] mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs font-mono text-[#11111A] dark:text-[#A9A7B8] font-bold">
                    bynarixa-core-v2.6.ts
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-[#F1EEFF] dark:bg-[#171525] text-[#7C3AED] dark:text-[#A855F7] font-bold border border-[#E5E1F5] dark:border-[#28243A]">
                  LIVE COMPILING
                </span>
              </div>

              {/* Code Snippet Display */}
              <div className="bg-[#09090F] text-[#F8F7FF] rounded-xl p-4 font-mono text-xs space-y-2 shadow-inner border border-[#28243A] overflow-x-auto">
                <div className="text-[#5F6070]">// Bynarixa Software Engine</div>
                <div>
                  <span className="text-[#A855F7]">import</span> &#123; AIModel, Microservice, Encryption &#125; <span className="text-[#A855F7]">from</span> <span className="text-[#06B6D4]">'@bynarixa/core'</span>;
                </div>
                <div className="pt-1">
                  <span className="text-[#7C3AED]">export const</span> <span className="text-amber-300">AppEngine</span> = <span className="text-[#A855F7]">async</span> () =&gt; &#123;
                </div>
                <div className="pl-4 text-[#06B6D4]">
                  const status = await compileApp(&#123; target: 'iOS, Android, Web', security: 'SOC2' &#125;);
                </div>
                <div className="pl-4 text-emerald-400">
                  return status.isProductionReady; // true
                </div>
                <div>&#125;;</div>
              </div>

              {/* Live Architecture Grid Cards */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="p-3 rounded-xl bg-[#F1EEFF]/80 dark:bg-[#171525]/80 border border-[#E5E1F5] dark:border-[#28243A] flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#7C3AED] text-white">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#11111A] dark:text-[#F8F7FF]">
                      Mobile & Web
                    </div>
                    <div className="text-[10px] text-[#5F6070] dark:text-[#A9A7B8] font-medium">
                      Flutter, React, iOS
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-[#F1EEFF]/80 dark:bg-[#171525]/80 border border-[#E5E1F5] dark:border-[#28243A] flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#06B6D4] text-white">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-[#11111A] dark:text-[#F8F7FF]">
                      AI & Cloud
                    </div>
                    <div className="text-[10px] text-[#5F6070] dark:text-[#A9A7B8] font-medium">
                      Gemini API, AWS
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -right-4 px-4 py-2.5 rounded-xl bg-white dark:bg-[#11111A] border border-[#E5E1F5] dark:border-[#28243A] shadow-xl flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-[#7C3AED] animate-ping" />
                <span className="text-xs font-bold text-[#11111A] dark:text-[#F8F7FF]">
                  Direct Line: {DISPLAY_PHONE}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
