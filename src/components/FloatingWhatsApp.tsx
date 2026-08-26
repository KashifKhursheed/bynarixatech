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
        <div className="pointer-events-auto mb-3 w-[calc(100vw-2.5rem)] sm:w-96 max-w-sm rounded-3xl overflow-hidden shadow-2xl border border-[#7C3AED]/40 dark:border-[#7C3AED]/50 bg-white dark:bg-[#11111A] animate-fade-in backdrop-blur-xl transition-all">
          {/* Top Header with Vibrant Gradient & Live Status */}
          <div className="relative p-4 sm:p-5 bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#06B6D4] text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-11 h-11 rounded-2xl bg-white/20 p-0.5 shadow-lg flex items-center justify-center backdrop-blur-sm">
                    <div className="w-full h-full rounded-[14px] bg-[#09090F] flex items-center justify-center text-[#A855F7]">
                      <Bot className="w-6 h-6 animate-bot-wiggle" />
                    </div>
                  </div>
                  {/* Live Pulsing Beacon Dot */}
                  <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full bg-[#06B6D4] border-2 border-[#09090F] shadow-[0_0_8px_#06B6D4]" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-extrabold tracking-tight text-white flex items-center gap-1.5">
                      <Bot className="w-4 h-4 text-[#06B6D4]" />
                      Bynarixa AI Consultant
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                  </div>
                  <div className="text-[11px] font-mono text-purple-100 font-medium flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4] animate-ping" />
                    <span>Active 24/7 • Instant Dispatch</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setPopoverOpen(false)}
                aria-label="Close AI Chatbot"
                className="p-1.5 rounded-xl bg-black/20 hover:bg-black/40 text-white/80 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Direct Number Badge */}
            <div className="mt-3 flex items-center justify-between px-3 py-1.5 rounded-xl bg-black/30 backdrop-blur-sm text-[11px] font-mono text-white/90">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#06B6D4]" /> Official WhatsApp
              </span>
              <span className="font-bold text-[#F8F7FF]">{DISPLAY_PHONE}</span>
            </div>
          </div>

          {/* Chat Body & Quick Prompts */}
          <div className="p-4 sm:p-5 space-y-4 max-h-[380px] overflow-y-auto">
            {/* Bot Message Bubble */}
            <div className="flex items-start gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#7C3AED] to-[#A855F7] text-white flex items-center justify-center shrink-0 shadow-sm border border-[#7C3AED]/30">
                <Bot className="w-4 h-4 animate-bot-wiggle" />
              </div>
              <div className="p-3.5 rounded-2xl rounded-tl-none bg-[#F1EEFF] dark:bg-[#171525] border border-[#E5E1F5] dark:border-[#28243A] text-xs text-[#11111A] dark:text-[#F8F7FF] leading-relaxed shadow-sm">
                <p className="font-semibold">
                  👋 Welcome to <strong className="text-[#7C3AED] dark:text-[#A855F7]">Bynarixa Tech</strong>! Select a quick prompt or type your project idea below to chat directly with our engineering team on WhatsApp.
                </p>
                {/* Simulated live typing indicator */}
                <div className="flex items-center gap-1 mt-2 text-[#7C3AED] dark:text-[#A855F7]">
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-typing-1" />
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-typing-2" />
                  <span className="w-1.5 h-1.5 rounded-full bg-current animate-typing-3" />
                  <span className="text-[10px] font-mono font-bold ml-1">AI Assistant Ready</span>
                </div>
              </div>
            </div>

            {/* Quick AI Prompt Buttons */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#5F6070] dark:text-[#A9A7B8] flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#A855F7]" />
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
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-between border cursor-pointer ${
                        isSelected
                          ? 'bg-[#F1EEFF] dark:bg-[#171525] border-[#7C3AED] text-[#7C3AED] dark:text-[#A855F7] shadow-sm'
                          : 'bg-white dark:bg-[#171525] border-[#E5E1F5] dark:border-[#28243A] text-[#11111A] dark:text-[#F8F7FF] hover:border-[#7C3AED] hover:bg-[#F1EEFF]/60 dark:hover:bg-[#171525]'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        {p.icon}
                        <span className="truncate">{p.label}</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 opacity-60 shrink-0 ml-1 text-[#7C3AED] dark:text-[#A855F7]" />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Input & Form Dispatch */}
            <form onSubmit={handleSend} className="space-y-2.5 pt-1 border-t border-[#E5E1F5] dark:border-[#28243A]">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Ask a question or describe your project..."
                  value={quickMessage}
                  onChange={(e) => setQuickMessage(e.target.value)}
                  className="w-full pl-3.5 pr-10 py-2.5 rounded-xl text-xs bg-white dark:bg-[#171525] text-[#11111A] dark:text-[#F8F7FF] border border-[#E5E1F5] dark:border-[#28243A] focus:outline-none focus:ring-2 focus:ring-[#7C3AED] transition-all font-medium placeholder:text-[#5F6070]/60 dark:placeholder:text-[#A9A7B8]/60"
                />
                <MessageSquare className="w-4 h-4 text-[#5F6070] dark:text-[#A9A7B8] absolute right-3 top-3 pointer-events-none" />
              </div>

              {/* High-Contrast Action Button */}
              <button
                type="submit"
                className="w-full relative overflow-hidden group py-3 px-4 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#A855F7] to-[#06B6D4] hover:from-[#6D28D9] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                {/* Continuous Shimmer Light Beam */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer-sweep pointer-events-none" />
                
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
            className="hidden sm:flex items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-white dark:bg-[#11111A] border border-[#7C3AED]/40 dark:border-[#7C3AED]/50 shadow-xl shadow-purple-500/10 hover:shadow-2xl transition-all duration-300 hover:scale-105 group cursor-pointer"
          >
            <div className="w-6 h-6 rounded-lg bg-gradient-to-tr from-[#7C3AED] to-[#A855F7] text-white flex items-center justify-center shadow-xs">
              <Bot className="w-3.5 h-3.5 animate-bot-wiggle" />
            </div>
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#06B6D4] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#06B6D4]" />
            </span>
            <span className="text-xs font-bold text-[#11111A] dark:text-[#F8F7FF] flex items-center gap-1">
              AI Chatbot <span className="text-[#7C3AED] dark:text-[#A855F7] font-extrabold">• Online</span>
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#A855F7] group-hover:rotate-12 transition-transform" />
          </button>
        )}

        {/* Floating Circular Trigger Button */}
        <div className="relative group">
          {/* Animated Pulsing Wave Rings */}
          <div className="absolute inset-0 rounded-full bg-[#7C3AED] opacity-50 animate-pulse-ring pointer-events-none" />
          <div className="absolute inset-0 rounded-full bg-[#06B6D4] opacity-30 animate-pulse-ring-delayed pointer-events-none" />

          <button
            onClick={() => setPopoverOpen(!popoverOpen)}
            aria-label="Open AI WhatsApp Chatbot Assistant"
            className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#7C3AED] via-[#A855F7] to-[#06B6D4] text-white flex items-center justify-center shadow-[0_10px_25px_rgba(124,58,237,0.4)] dark:shadow-[0_10px_30px_rgba(168,85,247,0.45)] hover:shadow-[0_15px_35px_rgba(124,58,237,0.6)] hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white dark:border-[#09090F] cursor-pointer"
          >
            {popoverOpen ? (
              <X className="w-7 h-7 text-white drop-shadow-md" />
            ) : (
              <div className="relative flex items-center justify-center">
                {/* Custom Combined AI Robot + WhatsApp Chat Icon */}
                <Bot className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-md animate-bot-wiggle" />
                <div className="absolute -bottom-1 -right-1.5 w-4 h-4 sm:w-4.5 sm:h-4.5 rounded-full bg-[#09090F] text-[#06B6D4] flex items-center justify-center border border-white/80 dark:border-[#28243A] shadow-sm">
                  <MessageCircle className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-current" />
                </div>
                <Sparkles className="w-3 h-3 absolute -top-1.5 -left-1 text-amber-300 animate-pulse" />
              </div>
            )}

            {/* Notification Count Badge */}
            {!popoverOpen && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#A855F7] text-white text-[10px] font-black rounded-full flex items-center justify-center border-2 border-white dark:border-[#09090F] shadow-md animate-bounce">
                1
              </span>
            )}
          </button>
        </div>
      </div>
    </aside>
  );
};
