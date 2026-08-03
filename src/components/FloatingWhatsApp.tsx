import React, { useState } from 'react';
import { openWhatsApp, DISPLAY_PHONE } from '../utils/whatsapp';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [popoverOpen, setPopoverOpen] = useState(false);
  const [quickMessage, setQuickMessage] = useState('');

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    openWhatsApp(quickMessage || 'Hello Bynarixa Tech Solutions! I would like to discuss a software project.');
    setPopoverOpen(false);
    setQuickMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Card */}
      {popoverOpen && (
        <div className="glass-panel mb-3 w-80 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl bg-white dark:bg-slate-900 animate-fade-in relative space-y-3">
          <button
            onClick={() => setPopoverOpen(false)}
            className="absolute top-3 right-3 p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-white"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold shadow-md">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                Bynarixa Engineering Support
              </div>
              <div className="text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                Online • {DISPLAY_PHONE}
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            Hi there! 👋 Looking to build an app or enterprise software? Ask us a question on WhatsApp.
          </p>

          <form onSubmit={handleSend} className="space-y-2">
            <input
              type="text"
              placeholder="Type your project message..."
              value={quickMessage}
              onChange={(e) => setQuickMessage(e.target.value)}
              className="w-full px-3 py-2 rounded-xl text-xs bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
              type="submit"
              className="w-full py-2 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Start WhatsApp Chat</span>
            </button>
          </form>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <div className="relative group">
        <button
          onClick={() => setPopoverOpen(!popoverOpen)}
          aria-label="Contact Bynarixa on WhatsApp"
          className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all relative z-10 border-2 border-white dark:border-slate-800"
        >
          <MessageSquare className="w-7 h-7" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-bounce">
            1
          </span>
        </button>

        {/* Pulsing ring animation */}
        <div className="absolute inset-0 rounded-full bg-emerald-500 opacity-75 animate-ping pointer-events-none" />

        {/* Desktop Tooltip on Hover */}
        {!popoverOpen && (
          <div className="hidden sm:block absolute right-16 top-2.5 px-3 py-1.5 rounded-xl bg-slate-900 text-white text-xs font-semibold whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            Chat on WhatsApp: {DISPLAY_PHONE}
          </div>
        )}
      </div>
    </div>
  );
};
