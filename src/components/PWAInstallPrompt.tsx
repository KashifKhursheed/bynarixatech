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
          <div className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-[#11111A] border border-[#E5E1F5] dark:border-[#28243A] shadow-xl shadow-purple-500/10 dark:shadow-2xl dark:shadow-black/70 text-[#11111A] dark:text-[#F8F7FF] flex items-center justify-between gap-3 transition-colors">
            <div className="flex items-center gap-3 min-w-0">
              <div className="relative shrink-0">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7C3AED] via-[#A855F7] to-[#06B6D4] p-0.5 shadow-md flex items-center justify-center">
                  <div className="w-full h-full bg-white dark:bg-[#171525] rounded-[10px] flex items-center justify-center text-[#7C3AED] dark:text-[#A855F7]">
                    <Download className="w-5 h-5 animate-bounce text-[#7C3AED] dark:text-[#A855F7]" />
                  </div>
                </div>
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#06B6D4] animate-ping" />
              </div>
              <div className="truncate">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-bold text-[#11111A] dark:text-[#F8F7FF] tracking-tight truncate">
                    Install Bynarixa App
                  </span>
                </div>
                <p className="text-[11px] font-medium text-[#5F6070] dark:text-[#A9A7B8] truncate">
                  Fast native experience & offline access
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleInstallClick}
                className="px-4 py-2 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs shadow-md shadow-[#7C3AED]/20 hover:scale-105 active:scale-95 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Download className="w-3.5 h-3.5 text-white stroke-[2.5]" />
                <span>Install</span>
              </button>
              <button
                onClick={handleDismissBanner}
                aria-label="Dismiss install banner"
                className="p-1.5 rounded-lg text-[#5F6070] hover:text-red-600 dark:text-[#A9A7B8] dark:hover:text-white transition-colors cursor-pointer"
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
          <div className="w-full max-w-lg rounded-3xl bg-white dark:bg-[#11111A] border border-[#E5E1F5] dark:border-[#28243A] shadow-2xl overflow-hidden transition-colors">
            {/* Modal Header */}
            <div className="p-6 bg-[#F8F7FF] dark:bg-[#171525] border-b border-[#E5E1F5] dark:border-[#28243A] text-[#11111A] dark:text-[#F8F7FF] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#7C3AED] to-[#A855F7] p-0.5 flex items-center justify-center shadow-inner">
                  <div className="w-full h-full bg-white dark:bg-[#09090F] rounded-[14px] flex items-center justify-center text-[#7C3AED] dark:text-[#A855F7]">
                    <Download className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold tracking-tight text-[#11111A] dark:text-[#F8F7FF]">Install Bynarixa App</h3>
                  <p className="text-xs text-[#5F6070] dark:text-[#A9A7B8]">Available on Android, iOS, Windows, Mac & Linux</p>
                </div>
              </div>
              <button
                onClick={() => setShowInstallModal(false)}
                className="p-2 rounded-xl bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 text-[#11111A] dark:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto bg-white dark:bg-[#11111A]">
              {/* Feature Highlights Grid */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div className="p-3 rounded-2xl bg-[#F1EEFF] dark:bg-[#171525] border border-[#E5E1F5] dark:border-[#28243A]">
                  <Zap className="w-5 h-5 text-[#A855F7] mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-[#11111A] dark:text-[#F8F7FF]">Instant Launch</div>
                  <div className="text-[10px] font-medium text-[#5F6070] dark:text-[#A9A7B8]">Zero App Store wait</div>
                </div>
                <div className="p-3 rounded-2xl bg-[#F1EEFF] dark:bg-[#171525] border border-[#E5E1F5] dark:border-[#28243A]">
                  <Globe className="w-5 h-5 text-[#06B6D4] mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-[#11111A] dark:text-[#F8F7FF]">Offline Ready</div>
                  <div className="text-[10px] font-medium text-[#5F6070] dark:text-[#A9A7B8]">Works without data</div>
                </div>
                <div className="p-3 rounded-2xl bg-[#F1EEFF] dark:bg-[#171525] border border-[#E5E1F5] dark:border-[#28243A]">
                  <ShieldCheck className="w-5 h-5 text-[#7C3AED] mx-auto mb-1.5" />
                  <div className="text-xs font-bold text-[#11111A] dark:text-[#F8F7FF]">Ultra Lightweight</div>
                  <div className="text-[10px] font-medium text-[#5F6070] dark:text-[#A9A7B8]">&lt; 1MB Storage</div>
                </div>
              </div>

              {/* OS Tabs */}
              <div className="flex rounded-xl bg-[#F1EEFF] dark:bg-[#171525] p-1 border border-[#E5E1F5] dark:border-[#28243A]">
                <button
                  onClick={() => setActiveTab('mobile')}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    activeTab === 'mobile'
                      ? 'bg-white dark:bg-[#11111A] text-[#7C3AED] dark:text-[#A855F7] shadow-sm border border-[#E5E1F5] dark:border-[#28243A]'
                      : 'text-[#5F6070] dark:text-[#A9A7B8] hover:text-[#11111A] dark:hover:text-white'
                  }`}
                >
                  <Smartphone className="w-4 h-4 text-[#7C3AED] dark:text-[#A855F7]" />
                  <span>Mobile (iOS / Android)</span>
                </button>
                <button
                  onClick={() => setActiveTab('desktop')}
                  className={`flex-1 py-2.5 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                    activeTab === 'desktop'
                      ? 'bg-white dark:bg-[#11111A] text-[#7C3AED] dark:text-[#A855F7] shadow-sm border border-[#E5E1F5] dark:border-[#28243A]'
                      : 'text-[#5F6070] dark:text-[#A9A7B8] hover:text-[#11111A] dark:hover:text-white'
                  }`}
                >
                  <Laptop className="w-4 h-4 text-[#06B6D4]" />
                  <span>Desktop (Chrome / Edge / Safari)</span>
                </button>
              </div>

              {/* Step by Step Instructions */}
              {activeTab === 'mobile' ? (
                <div className="space-y-4">
                  {/* iOS Safari Instructions */}
                  <div className="p-4 rounded-2xl bg-[#F1EEFF]/60 dark:bg-[#171525] border border-[#E5E1F5] dark:border-[#28243A] space-y-3">
                    <div className="text-xs font-bold text-[#7C3AED] dark:text-[#A855F7] flex items-center gap-1.5">
                      <span>🍎 For Apple iPhone & iPad (Safari):</span>
                    </div>
                    <div className="space-y-2.5 text-xs text-[#11111A] dark:text-[#F8F7FF] font-medium">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#7C3AED] text-white font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                        <span>Tap the <strong>Share</strong> button <Share2 className="w-3.5 h-3.5 inline text-[#7C3AED] dark:text-[#A855F7] mx-1" /> in Safari’s bottom toolbar.</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#7C3AED] text-white font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                        <span>Scroll down and tap <strong>Add to Home Screen</strong> <PlusSquare className="w-3.5 h-3.5 inline text-[#06B6D4] mx-1" />.</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#7C3AED] text-white font-bold flex items-center justify-center shrink-0 text-xs">3</span>
                        <span>Tap <strong>Add</strong> in the top right corner to launch like a native app.</span>
                      </div>
                    </div>
                  </div>

                  {/* Android Chrome Instructions */}
                  <div className="p-4 rounded-2xl bg-[#F1EEFF]/60 dark:bg-[#171525] border border-[#E5E1F5] dark:border-[#28243A] space-y-3">
                    <div className="text-xs font-bold text-[#7C3AED] dark:text-[#A855F7]">
                      🤖 For Android (Chrome / Edge / Samsung Internet):
                    </div>
                    <div className="space-y-2.5 text-xs text-[#11111A] dark:text-[#F8F7FF] font-medium">
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#7C3AED] text-white font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                        <span>Tap the <strong>Install Button</strong> below or browser menu (⋮).</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-6 h-6 rounded-full bg-[#7C3AED] text-white font-bold flex items-center justify-center shrink-0 text-xs">2</span>
                        <span>Select <strong>Install App</strong> or <strong>Add to Home screen</strong>.</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="p-4 rounded-2xl bg-[#F1EEFF]/60 dark:bg-[#171525] border border-[#E5E1F5] dark:border-[#28243A] space-y-3">
                  <div className="text-xs font-bold text-[#7C3AED] dark:text-[#A855F7]">
                    💻 For Windows, Mac & Linux Desktop:
                  </div>
                  <div className="space-y-2.5 text-xs text-[#11111A] dark:text-[#F8F7FF] font-medium">
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#7C3AED] text-white font-bold flex items-center justify-center shrink-0 text-xs">1</span>
                      <span>Click the <strong>Install Icon</strong> in your browser address bar (top right) or the button below.</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-[#7C3AED] text-white font-bold flex items-center justify-center shrink-0 text-xs">2</span>
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
                className="w-full py-3.5 px-6 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-sm shadow-xl shadow-purple-500/25 flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-white stroke-[2.5]" />
                <span>Launch Installation Now</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
