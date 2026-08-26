import React, { useState } from 'react';
import { openWhatsApp, DISPLAY_PHONE } from '../utils/whatsapp';
import {
  MessageSquare,
  MessageCircle,
  X,
  Send,
  Sparkles,
  Bot,
  Zap,
  ArrowRight,
  CheckCircle2,
  Calculator,
  Smartphone,
  Cloud,
  Cpu,
} from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [quickMessage, setQuickMessage] = useState('');
  const [selectedPrompt, setSelectedPrompt] = useState<string | null>(null);

  const quickPrompts = [
    {
      icon: <Calculator className="w-3.5 h-3.5 text-cyan-500 shrink-0" />,
      label: 'Instant Project Quote',
      text: 'Hello Bynarixa AI! I would like to get an instant project estimate for a new software build.',
    },
    {
      icon: <Smartphone className="w-3.5 h-3.5 text-purple-500 shrink-0" />,
      label: 'Mobile / Web App Scope',
      text: 'Hello! I need a high-performance cross-platform iOS & Android mobile application.',
    },
    {
      icon: <Cpu className="w-3.5 h-3.5 text-pink-500 shrink-0" />,
      label: 'Gemini AI Integration',
      text: 'Hi Bynarixa! We want to integrate custom Gemini AI / LLM workflows into our existing platform.',
    },
    {
      icon: <Cloud className="w-3.5 h-3.5 text-emerald-500 shrink-0" />,
      label: 'Enterprise Cloud Architecture',
      text: 'Hello! Looking for enterprise cloud architecture, scalability, and security consultation.',
    },
  ];

  const handleSelectPrompt = (prompt: { label: string; text: string }) => {
    setSelectedPrompt(prompt.label);
    setQuickMessage(prompt.text);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const messageToSend = quickMessage.trim() || 'Hello Bynarixa Tech Solutions! I would like to discuss a software project with your engineering team.';
    openWhatsApp(messageToSend);
    setPopoverOpen(false);
    setQuickMessage('');
    setSelectedPrompt(null);
  };

  return (
    <aside aria-label="WhatsApp AI Chatbot Assistant" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end pointer-events-none">
      {/* Interactive AI WhatsApp Chatbot Popover Window */}
      {popoverOpen && (
        <div className="pointer-events-auto mb-3 w-[calc(100vw-2.5rem)] sm:w-96 max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-[#25D366]/40 dark:border-[#00E5FF]/40 bg-white dark:bg-[#0D1117] animate-fade-in backdrop-blur-xl transition-all">
          {/* Top Header with Vibrant Gradient & Live Status */}
          <div className="relative p-4 sm:p-5 bg-gradient-to-r from-[#0F5132] via-[#0D9488] to-[#0097A7] dark:from-[#082F24] dark:via-[#0E4A40] dark:to-[#093542] text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#25D366] to-[#00E5FF] p-0.5 shadow-lg flex items-center justify-center">
                    <div className="w-full h-full rounded-[14px] bg-[#070A0F] flex items-center justify-center text-[#25D366] dark:text-[#00E5FF]">
                      <Bot className="w-6 h-6 animate-bot-wiggle" />
                    </div>
                  </div>
                  {/* Live Pulsing Beacon Dot */}
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#22F55B] border-2 border-[#070A0F] shadow-[0_0_8px_#22F55B]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1.5">
                      <Bot className="w-4 h-4 text-[#25D366]" />
                      Bynarixa AI Consultant
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                  </div>
                  <div className="text-[11px] font-mono text-emerald-200 dark:text-cyan-200 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22F55B] animate-ping" />
                    <span>Active 24/7 • Instant Dispatch</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setPopoverOpen(false)}
                aria-label="Close AI Chatbot"
                className="p-1.5 rounded-xl bg-black/20 hover:bg-black/40 text-white/80 hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Direct Number Badge */}
            <div className="mt-3 flex items-center justify-between px-3 py-1.5 rounded-xl bg-black/30 backdrop-blur-sm text-[11px] font-mono text-white/90">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#25D366]" /> Official WhatsApp
              </span>
              <span className="font-bold text-[#00E5FF]">{DISPLAY_PHONE}</span>
            </div>
          </div>

          {/* Chat Body & Quick Prompts */}
          <div className="p-4 sm:p-5 space-y-4 max-h-[380px] overflow-y-auto">
            {/* Bot Message Bubble */}
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shrink-0 shadow-sm border border-[#25D366]/30">
                <Bot className="w-4 h-4 animate-bot-wiggle" />
              </div>
              <div className="p-3.5 rounded-2xl rounded-tl-none bg-slate-100 dark:bg-[#151B24] border border-slate-200/80 dark:border-[#263241] text-xs text-black dark:text-slate-200 leading-relaxed shadow-sm">
                <p className="font-semibold">
                  👋 Welcome to <strong className="text-[#0097A7] dark:text-[#00E5FF]">Bynarixa Tech</strong>! Select a quick prompt or type your project idea below to chat directly with our engineering team on WhatsApp.
                </p>
                {/* Simulated live typing indicator */}
                <div className="flex items-center gap-1 mt-2 text-[#0097A7] dark:text-[#00E5FF]">
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-typing-1" />
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-typing-2" />
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-typing-3" />
                  <span className="text-[10px] font-mono font-bold ml-1">AI Assistant Ready</span>
                </div>
              </div>
            </div>

            {/* Quick AI Prompt Buttons */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-black dark:text-slate-500 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-500" />
                Quick Project Templates:
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {quickPrompts.map((p, idx) => {
                  const isSelected = selectedPrompt === p.label;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelectPrompt(p)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between border ${
                        isSelected
                          ? 'bg-[#25D366]/15 dark:bg-[#00E5FF]/15 border-[#25D366] dark:border-[#00E5FF] text-[#0F5132] dark:text-[#00E5FF] shadow-sm'
                          : 'bg-slate-50 dark:bg-[#151B24] border-slate-200 dark:border-slate-800 text-black dark:text-slate-300 hover:border-[#25D366] dark:hover:border-[#00E5FF] hover:bg-slate-100 dark:hover:bg-[#1A2330]'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        {p.icon}
                        <span className="truncate">{p.label}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-60 shrink-0 ml-1" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input & Form Dispatch */}
            <form onSubmit={handleSend} className="space-y-2.5 pt-1 border-t border-slate-200 dark:border-slate-800">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask a question or describe your project..."
                  value={quickMessage}
                  onChange={(e) => setQuickMessage(e.target.value)}
                  className="w-full pl-3.5 pr-10 py-2.5 rounded-xl text-xs bg-slate-50 dark:bg-[#151B24] text-black dark:text-white border border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-[#25D366] dark:focus:ring-[#00E5FF] transition-all shadow-inner font-medium"
                />
                <MessageSquare className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
              </div>

              {/* High-Contrast Animated WhatsApp Action Button */}
              <button
                type="submit"
                className="w-full relative overflow-hidden group py-3 px-4 rounded-xl bg-gradient-to-r from-[#25D366] via-[#10B981] to-[#00E5FF] hover:from-[#20bd5a] hover:to-[#00cce5] text-slate-950 font-extrabold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/30 dark:shadow-[#00E5FF]/25 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              >
                {/* Continuous Shimmer Light Beam */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer-sweep pointer-events-none" />
                
                <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                <span>Launch WhatsApp AI Chat</span>
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button Group */}
      <div className="pointer-events-auto flex items-center gap-3">
        {/* Animated Floating Pill Badge (Desktop / Tablet) */}
        {!popoverOpen && (
          <button
            onClick={() => setPopoverOpen(true)}
            className="hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white dark:bg-[#0D1117] border border-[#25D366]/60 dark:border-[#00E5FF]/60 shadow-xl shadow-slate-900/10 hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer"
          >
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-xs">
              <Bot className="w-3.5 h-3.5 animate-bot-wiggle" />
            </div>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22F55B] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
            </span>
            <span className="text-xs font-bold text-black dark:text-white flex items-center gap-1">
              AI Chatbot <span className="text-[#059669] dark:text-[#00E5FF] font-extrabold">• Online</span>
            </span>
            <Sparkles className="w-3.5 h-3.5 text-amber-500 group-hover:rotate-12 transition-transform" />
          </button>
        )}

        {/* Floating Circular Trigger Button */}
        <div className="relative group">
          {/* Animated Pulsing Wave Rings */}
          <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-pulse-ring pointer-events-none" />
          <div className="absolute inset-0 rounded-full bg-[#00E5FF] opacity-40 animate-pulse-ring-delayed pointer-events-none" />

          <button
            onClick={() => setPopoverOpen(!popoverOpen)}
            aria-label="Open AI WhatsApp Chatbot Assistant"
            className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#00E5FF] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(37,211,102,0.4)] dark:shadow-[0_10px_30px_rgba(0,229,255,0.45)] hover:shadow-[0_15px_35px_rgba(37,211,102,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white dark:border-[#070A0F] cursor-pointer"
          >
            {popoverOpen ? (
              <X className="w-7 h-7 text-white drop-shadow-md" />
            ) : (
              <div className="relative flex items-center justify-center">
                {/* Custom Combined AI Robot + WhatsApp Chat Icon */}
                <Bot className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-md animate-bot-wiggle" />
                <div className="absolute -bottom-1 -right-1.5 w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full bg-[#070A0F] text-[#25D366] flex items-center justify-center border border-white/80 dark:border-[#070A0F] shadow-sm">
                  <MessageCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
                </div>
                <Sparkles className="w-3 h-3 absolute -top-1.5 -left-1 text-amber-300 animate-pulse" />
              </div>
            )}

            {/* Notification Count Badge */}
            {!popoverOpen && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#FF2BD6] text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white dark:border-[#070A0F] shadow-md animate-bounce">
                1
              </span>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
};
