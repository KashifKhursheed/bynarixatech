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

        ctx.fillStyle = `rgba(59, 130, 246, ${p.opacity})`;
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
        className="absolute inset-0 w-full h-full pointer-events-none opacity-40 dark:opacity-60 z-0"
      />

      {/* Floating Ambient Glowing Blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/15 dark:bg-blue-600/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        style={{
          transform: `translate(${mousePos.x * 30}px, ${mousePos.y * 30}px)`,
        }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-500/15 dark:bg-cyan-500/20 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        style={{
          transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)`,
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Hero Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0097A7]/10 dark:bg-[#00E5FF]/10 border border-[#0097A7]/20 dark:border-[#00E5FF]/20 text-[#0097A7] dark:text-[#00E5FF] text-xs font-mono font-semibold uppercase tracking-widest shadow-sm">
              <span className="w-2 h-2 bg-[#0097A7] dark:bg-[#00E5FF] rounded-full animate-pulse" />
              <span>Innovation Hub • Intelligent Software</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#0F172A] dark:text-[#F8FAFC] leading-[1.12]">
              Engineering the{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0097A7] via-[#6D28D9] to-[#DB2777] dark:from-[#00E5FF] dark:via-[#8B5CF6] dark:to-[#FF2BD6]">
                Future
              </span>{' '}
              with Intelligent Software.
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#475569] dark:text-[#94A3B8] max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
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
                className="w-full sm:w-auto relative overflow-hidden group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#0097A7] dark:from-[#25D366] dark:via-[#00E5FF] dark:to-[#8B5CF6] text-white dark:text-black font-extrabold text-sm sm:text-base shadow-xl shadow-[#25D366]/25 dark:shadow-[#00E5FF]/25 hover:shadow-2xl hover:shadow-[#25D366]/40 hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none" />
                <MessageSquare className="w-5 h-5" />
                <span>Chat with AI on WhatsApp</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-white/90 dark:bg-[#0D1117] text-[#0F172A] dark:text-[#F8FAFC] hover:text-[#0097A7] dark:hover:text-[#00E5FF] font-bold text-sm sm:text-base border border-[#E2E8F0] dark:border-[#263241] transition-all hover:bg-[#F1F5F9] dark:hover:bg-[#151B24] shadow-sm hover:shadow-md"
              >
                <Play className="w-4 h-4 fill-current text-[#0097A7] dark:text-[#00E5FF]" />
                <span>View Case Studies</span>
              </a>
            </div>

            {/* Metrics Stats Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#E2E8F0] dark:border-[#263241]">
              <div className="bg-white/80 dark:bg-[#0D1117] border border-[#E2E8F0] dark:border-[#263241] rounded-2xl p-3.5 text-center backdrop-blur-md">
                <div className="text-2xl font-bold text-[#0F172A] dark:text-[#F8FAFC] font-mono">500+</div>
                <div className="text-[10px] text-[#475569] dark:text-[#94A3B8] uppercase tracking-widest font-semibold mt-0.5">Projects</div>
              </div>
              <div className="bg-white/80 dark:bg-[#0D1117] border border-[#E2E8F0] dark:border-[#263241] rounded-2xl p-3.5 text-center backdrop-blur-md">
                <div className="text-2xl font-bold text-[#0F172A] dark:text-[#F8FAFC] font-mono">98%</div>
                <div className="text-[10px] text-[#475569] dark:text-[#94A3B8] uppercase tracking-widest font-semibold mt-0.5">Retention</div>
              </div>
              <div className="bg-white/80 dark:bg-[#0D1117] border border-[#E2E8F0] dark:border-[#263241] rounded-2xl p-3.5 text-center backdrop-blur-md">
                <div className="text-2xl font-bold text-[#0F172A] dark:text-[#F8FAFC] font-mono">25+</div>
                <div className="text-[10px] text-[#475569] dark:text-[#94A3B8] uppercase tracking-widest font-semibold mt-0.5">Countries</div>
              </div>
              <div className="bg-white/80 dark:bg-[#0D1117] border border-[#E2E8F0] dark:border-[#263241] rounded-2xl p-3.5 text-center backdrop-blur-md">
                <div className="text-2xl font-bold text-[#0F172A] dark:text-[#F8FAFC] font-mono">12+</div>
                <div className="text-[10px] text-[#475569] dark:text-[#94A3B8] uppercase tracking-widest font-semibold mt-0.5">Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Software Architecture Interactive Card */}
          <div className="lg:col-span-5 relative">
            <div
              className="glass-panel p-6 sm:p-8 rounded-2xl shadow-2xl border border-slate-200/80 dark:border-slate-800/80 relative z-10 transition-transform duration-300"
              style={{
                transform: `perspective(1000px) rotateY(${mousePos.x * 6}deg) rotateX(${
                  mousePos.y * -6
                }deg)`,
              }}
            >
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800 mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs font-mono text-slate-500 dark:text-slate-400">
                    bynarixa-core-v2.6.ts
                  </span>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-cyan-300 font-semibold">
                  LIVE COMPILING
                </span>
              </div>

              {/* Code Snippet Display */}
              <div className="bg-slate-900 text-slate-200 rounded-xl p-4 font-mono text-xs space-y-2 shadow-inner border border-slate-800 overflow-x-auto">
                <div className="text-slate-500">// Bynarixa Software Engine</div>
                <div>
                  <span className="text-purple-400">import</span> &#123; AIModel, Microservice, Encryption &#125; <span className="text-purple-400">from</span> <span className="text-emerald-400">'@bynarixa/core'</span>;
                </div>
                <div className="pt-1">
                  <span className="text-blue-400">export const</span> <span className="text-amber-300">AppEngine</span> = <span className="text-purple-400">async</span> () =&gt; &#123;
                </div>
                <div className="pl-4 text-cyan-300">
                  const status = await compileApp(&#123; target: 'iOS, Android, Web', security: 'SOC2' &#125;);
                </div>
                <div className="pl-4 text-emerald-400">
                  return status.isProductionReady; // true
                </div>
                <div>&#125;;</div>
              </div>

              {/* Live Architecture Grid Cards */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="p-3 rounded-xl bg-blue-50/50 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700/60 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-500 text-white">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                      Mobile & Web
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      Flutter, React, iOS
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-cyan-50/50 dark:bg-slate-800/60 border border-cyan-100 dark:border-slate-700/60 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-cyan-500 text-white">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-800 dark:text-slate-100">
                      AI & Cloud
                    </div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">
                      Gemini API, AWS
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-5 -right-4 px-4 py-2.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-xl flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
                <span className="text-xs font-bold text-slate-800 dark:text-slate-100">
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
