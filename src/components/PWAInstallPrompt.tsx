import React, { useState, useEffect } from 'react';
import { usePWA } from './PWAInstallContext';
import {
  Download,
  Smartphone,
  Laptop,
  CheckCircle2,
  X,
  Share2,
  PlusSquare,
  Sparkles,
  Zap,
  ShieldCheck,
  Globe,
  ArrowRight,
} from 'lucide-react';

export const PWAInstallPrompt: React.FC = () => {
  const { isInstalled, isIOS, installApp, showInstallModal, setShowInstallModal } = usePWA();
  const [bannerDismissed, setBannerDismissed] = useState(false);
  const [activeTab, setActiveTab] = useState<'mobile' | 'desktop'>('mobile');

  // Remember dismissal in sessionStorage for current visit
  useEffect(() => {
    const dismissed = sessionStorage.getItem('bynarixa_app_install_dismissed');
    if (dismissed === 'true') {
      setBannerDismissed(true);
    }
  }, []);

  const handleDismissBanner = () => {
    setBannerDismissed(true);
    sessionStorage.setItem('bynarixa_app_install_dismissed', 'true');
  };

  const handleInstallClick = () => {
    installApp();
  };

  if (isInstalled) {
    return null;
  }

  return (
    <>
      {/* Floating Bottom Install Banner (Responsive across all screens) */}
      {!bannerDismissed && (
        <div className="fixed bottom-24 sm:bottom-6 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-40 animate-fade-in pointer-events-auto">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-[#0D1117] border-2 border-slate-200 dark:border-[#00E5FF]/40 shadow-xl shadow-slate-900/10 dark:shadow-2xl dark:shadow-black/70 text-slate-900 dark:text-white flex items-center justify-between gap-3 transition-colors">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0097A7] via-[#6D28D9] to-[#DB2777] dark:from-[#00E5FF] dark:via-[#8B5CF6] dark:to-[#FF2BD6] p-0.5 shadow-md flex items-center justify-center">
                  <div className="w-full h-full bg-slate-900 dark:bg-[#070A0F] rounded-[10px] flex items-center justify-center text-[#00E5FF]">
                    <Download className="w-5 h-5 animate-bounce text-white dark:text-[#00E5FF]" />
                  </div>
                </div>
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#10B981] animate-ping" />
              </div>
              <div className="truncate">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-white tracking-tight truncate">
                    Install Bynarixa App
                  </span>
                </div>
                <p className="text-[11px] font-medium text-slate-600 dark:text-slate-400 truncate">
                  Fast native experience & offline access
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleInstallClick}
                className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-[#00E5FF] dark:hover:bg-[#38EFFF] text-white dark:text-slate-950 font-black text-xs shadow-md hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 border border-slate-900 dark:border-transparent"
              >
                <Download className="w-3.5 h-3.5 text-[#00E5FF] dark:text-slate-950 stroke-[2.5]" />
                <span>Install</span>
              </button>
              <button
                onClick={handleDismissBanner}
                aria-label="Dismiss install banner"
                className="p-1.5 rounded-lg text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Installation Modal (For manual install / iOS guide / Desktop details) */}
      {showInstallModal && (
        <div className="fixed inset-0 z-[110] bg-black/75 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in">
          <div className="w-full max-w-lg rounded-3xl bg-white dark:bg-[#0D1117] border-2 border-slate-200 dark:border-[#263241] shadow-2xl overflow-hidden transition-colors">
            {/* Modal Header */}
            <div className="p-6 bg-slate-900 dark:bg-[#070A0F] border-b border-slate-800 dark:border-[#263241] text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#0097A7] to-[#6D28D9] dark:from-[#00E5FF] dark:to-[#8B5CF6] p-0.5 flex items-center justify-center shadow-inner">
                  <div className="w-full h-full bg-slate-900 rounded-[14px] flex items-center justify-center text-white dark:text-[#00E5FF]">
                    <Download className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-white">Install Bynarixa App</h3>
                  <p className="text-xs text-slate-300 dark:text-slate-400">Available on Android, iOS, Windows, Mac & Linux</p>
                </div>
              </div>
              <button
                onClick={() => setShowInstallModal(false)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto bg-white dark:bg-[#0D1117]">
              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#151B24] border border-slate-200 dark:border-slate-800">
                  <Zap className="w-5 h-5 text-amber-500 mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Instant Launch</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Zero App Store wait</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#151B24] border border-slate-200 dark:border-slate-800">
                  <Globe className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Offline Ready</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">Works without data</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#151B24] border border-slate-200 dark:border-slate-800">
                  <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-slate-900 dark:text-white">Ultra Lightweight</div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">&lt; 1MB Storage</div>
                </div>
              </div>

              {/* OS Tabs */}
              <div className="flex rounded-xl bg-slate-100 dark:bg-[#151B24] p-1 border border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => setActiveTab('mobile')}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'mobile'
                      ? 'bg-white dark:bg-[#263241] text-slate-900 dark:text-white shadow-sm border border-slate-200/80 dark:border-transparent'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  <Smartphone className="w-4 h-4 text-[#0097A7] dark:text-[#00E5FF]" />
                  <span>Mobile (iOS / Android)</span>
                </button>
                <button
                  onClick={() => setActiveTab('desktop')}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                    activeTab === 'desktop'
                      ? 'bg-white dark:bg-[#263241] text-slate-900 dark:text-white shadow-sm border border-slate-200/80 dark:border-transparent'
                      : 'text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
                  }`}
                >
                  <Laptop className="w-4 h-4 text-[#6D28D9] dark:text-[#8B5CF6]" />
                  <span>Desktop (Chrome / Edge / Safari)</span>
                </button>
              </div>

              {/* Step by Step Instructions */}
              {activeTab === 'mobile' ? (
                <div className="space-y-4">
                  {/* iOS Safari Instructions */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#151B24] border border-slate-200 dark:border-slate-800 space-y-3">
                    <div className="text-xs font-bold text-[#00838F] dark:text-[#00E5FF] flex items-center gap-1.5">
                      <span>🍎 For Apple iPhone & iPad (Safari):</span>
                    </div>
                    <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#0097A7]/15 dark:bg-[#00E5FF]/15 text-[#00838F] dark:text-[#00E5FF] font-bold flex items-center justify-center shrink-0">1</span>
                        <span>Tap the <strong>Share</strong> button <Share2 className="w-3.5 h-3.5 inline text-blue-600 dark:text-blue-400 mx-1" /> in Safari’s bottom toolbar.</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#0097A7]/15 dark:bg-[#00E5FF]/15 text-[#00838F] dark:text-[#00E5FF] font-bold flex items-center justify-center shrink-0">2</span>
                        <span>Scroll down and tap <strong>Add to Home Screen</strong> <PlusSquare className="w-3.5 h-3.5 inline text-emerald-600 dark:text-emerald-400 mx-1" />.</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#0097A7]/15 dark:bg-[#00E5FF]/15 text-[#00838F] dark:text-[#00E5FF] font-bold flex items-center justify-center shrink-0">3</span>
                        <span>Tap <strong>Add</strong> in the top right corner to launch like a native app.</span>
                      </div>
                    </div>
                  </div>

                  {/* Android Chrome Instructions */}
                  <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#151B24] border border-slate-200 dark:border-slate-800 space-y-3">
                    <div className="text-xs font-bold text-[#00838F] dark:text-[#00E5FF]">
                      🤖 For Android (Chrome / Edge / Samsung Internet):
                    </div>
                    <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#0097A7]/15 dark:bg-[#00E5FF]/15 text-[#00838F] dark:text-[#00E5FF] font-bold flex items-center justify-center shrink-0">1</span>
                        <span>Tap the <strong>Install Button</strong> below or browser menu (⋮).</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#0097A7]/15 dark:bg-[#00E5FF]/15 text-[#00838F] dark:text-[#00E5FF] font-bold flex items-center justify-center shrink-0">2</span>
                        <span>Select <strong>Install App</strong> or <strong>Add to Home screen</strong>.</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#151B24] border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="text-xs font-bold text-[#00838F] dark:text-[#00E5FF]">
                    💻 For Windows, Mac & Linux Desktop:
                  </div>
                  <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#0097A7]/15 dark:bg-[#00E5FF]/15 text-[#00838F] dark:text-[#00E5FF] font-bold flex items-center justify-center shrink-0">1</span>
                      <span>Click the <strong>Install Icon</strong> in your browser address bar (top right) or the button below.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#0097A7]/15 dark:bg-[#00E5FF]/15 text-[#00838F] dark:text-[#00E5FF] font-bold flex items-center justify-center shrink-0">2</span>
                      <span>Confirm <strong>Install</strong> to get a standalone desktop window on your dock/taskbar.</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Action Button in Modal */}
              <button
                onClick={() => {
                  setShowInstallModal(false);
                  installApp();
                }}
                className="w-full py-3.5 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-[#00E5FF] dark:hover:bg-[#38EFFF] text-white dark:text-slate-950 font-black text-sm shadow-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all border border-slate-900 dark:border-transparent"
              >
                <Download className="w-4 h-4 text-[#00E5FF] dark:text-slate-950 stroke-[2.5]" />
                <span>Launch Installation Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
