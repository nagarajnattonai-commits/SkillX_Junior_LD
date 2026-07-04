/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Sparkles, Phone, MessageSquare, ArrowRight, X, Award, ShieldAlert } from "lucide-react";

interface ConversionTriggersProps {
  onBookDemoClick: () => void;
}

export default function ConversionTriggers({ onBookDemoClick }: ConversionTriggersProps) {
  const [showStickyBar, setShowStickyBar] = useState(false);
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [hasPopupTriggered, setHasPopupTriggered] = useState(false);

  // Monitor scroll height to show Sticky Bottom CTA Bar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Exit Intent Event Listener
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY < 30 && !hasPopupTriggered && !showExitPopup) {
        setShowExitPopup(true);
        setHasPopupTriggered(true);
        localStorage.setItem("natton_exit_triggered", "true");
      }
    };

    // Check if triggered already this session
    const alreadyTriggered = localStorage.getItem("natton_exit_triggered");
    if (alreadyTriggered === "true") {
      setHasPopupTriggered(true);
    }

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasPopupTriggered, showExitPopup]);

  const handleCtaClick = () => {
    setShowExitPopup(false);
    onBookDemoClick();
  };

  const whatsappLink = "https://wa.me/917795512226?text=Hi! I am visiting your landing page and want to secure a spot for the Free AI Demo weekend class. Please guide me.";

  return (
    <>
      {/* 1. STICKY BOTTOM BAR (Frosted glass panel) */}
      <div
        className={`fixed bottom-0 left-0 right-0 glass bg-slate-950/90 backdrop-blur-md border-t border-white/5 text-white z-40 py-4 px-4 shadow-2xl transition-all duration-500 transform ${
          showStickyBar ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="hidden md:flex items-center space-x-3.5">
            <div className="p-2 bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary rounded-xl">
              <Sparkles size={16} className="animate-pulse" />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-black font-display text-white">
                Book Your Child's FREE Live Weekend Demo Class
              </p>
              <p className="text-[10px] text-slate-400 font-bold">
                Saturday & Sunday Morning / Evening Interactive Slots
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-between md:justify-end w-full md:w-auto gap-4">
            <div className="text-left md:text-right">
              <p className="text-[9px] font-black text-rose-400 uppercase tracking-widest leading-none">LAUNCH SPECIAL PRICE</p>
              <p className="text-sm sm:text-base font-black font-mono text-brand-secondary">₹1,999/Month</p>
            </div>

            <button
              onClick={handleCtaClick}
              className="bg-brand-primary hover:bg-brand-primary/95 text-white font-black text-xs sm:text-sm px-5 py-2.5 rounded-full shadow-lg flex items-center space-x-1 hover:scale-102 transition-all cursor-pointer border border-white/10"
            >
              <span>Book Demo Free</span>
              <ArrowRight size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* 2. FLOATING WHATSAPP BUTTON */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 bg-emerald-500 hover:bg-emerald-600 text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
        title="Direct Support on WhatsApp"
      >
        <span className="absolute right-full mr-3 bg-slate-950 text-slate-100 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-2xl border border-white/5 pointer-events-none">
          🟢 Chat with Counselor
        </span>
        {/* Playful alert dot */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-slate-950 animate-ping" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-rose-500 rounded-full border-2 border-slate-950" />
        
        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5.5 h-5.5 sm:w-6 sm:h-6"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.742.002-2.602-1.005-5.05-2.835-6.882-1.83-1.833-4.264-2.84-6.872-2.842-5.443 0-9.867 4.371-9.872 9.744-.002 1.813.483 3.585 1.405 5.148l-1.012 3.696 3.826-.989zm11.218-6.19c-.29-.145-1.72-.848-1.986-.944-.265-.096-.458-.145-.65.145-.194.291-.747.944-.916 1.137-.168.194-.337.217-.628.072-1.54-.766-2.545-1.291-3.557-3.029-.269-.465.269-.431.77-1.43.085-.168.043-.314-.021-.441-.064-.128-.543-1.308-.744-1.791-.196-.473-.393-.41-.543-.417-.14-.007-.3-.007-.46-.007s-.422.06-.643.301c-.22.241-.843.824-.843 2.009 0 1.185.862 2.33 1.01 2.529.15.199 1.697 2.592 4.11 3.635.574.248 1.022.396 1.372.508.577.183 1.102.157 1.517.095.463-.069 1.72-.703 1.962-1.383.243-.68.243-1.261.171-1.383-.071-.122-.264-.194-.555-.339z" />
        </svg>
      </a>

      {/* 3. EXIT INTENT POPUP (Dark glass scholarship offer) */}
      {showExitPopup && (
        <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="glass bg-slate-900/90 rounded-3xl w-full max-w-md shadow-2xl overflow-hidden border border-white/10 relative p-6 sm:p-8 space-y-6">
            
            {/* Close trigger */}
            <button
              onClick={() => setShowExitPopup(false)}
              className="absolute top-4.5 right-4.5 p-1.5 text-slate-450 hover:text-white hover:bg-white/5 rounded-full transition-all cursor-pointer border border-white/5"
            >
              <X size={16} />
            </button>

            {/* Graphic Badge */}
            <div className="w-16 h-16 bg-amber-400/10 border border-amber-400/20 rounded-2xl flex items-center justify-center text-amber-400 mx-auto">
              <Award size={36} className="animate-pulse" />
            </div>

            {/* Main Header */}
            <div className="text-center space-y-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-brand-secondary bg-brand-primary/10 border border-brand-primary/15 px-3 py-1 rounded-md">
                EXCLUSIVE WEEKEND OFFER
              </span>
              <h4 className="text-xl sm:text-2xl font-black font-display text-white">
                Wait! Your Child Deserves a Future-Proof Edge
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 font-semibold leading-relaxed">
                We noticed you were leaving. Sign up for a Free Demo today, and unlock a special **₹500 Launch Scholarship**!
              </p>
            </div>

            {/* Scholarship Voucher Card */}
            <div className="bg-slate-950/50 border-2 border-dashed border-amber-400/30 rounded-2xl p-4.5 text-center space-y-2.5 relative overflow-hidden">
              <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-900 border-r-2 border-dashed border-amber-400/30 rounded-full" />
              <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-900 border-l-2 border-dashed border-amber-400/30 rounded-full" />
              
              <p className="text-[9px] font-black text-amber-400 uppercase tracking-widest leading-none">Voucher Code active</p>
              <p className="text-xl font-black font-mono text-brand-secondary tracking-widest select-all cursor-copy">
                SKILLX500
              </p>
              <p className="text-[10px] text-slate-400 font-bold leading-none">
                *Applies directly to your 1st month subscription (₹1499 instead of ₹1999)
              </p>
            </div>

            {/* Direct booking connector */}
            <button
              onClick={handleCtaClick}
              className="w-full bg-brand-primary hover:bg-brand-primary/95 text-white font-black py-3.5 rounded-full text-xs sm:text-sm uppercase tracking-widest flex items-center justify-center space-x-2 cursor-pointer shadow-lg border border-white/5"
            >
              <span>Apply Scholarship & Book Demo</span>
              <ArrowRight size={14} />
            </button>

            <div className="text-center">
              <button
                onClick={() => setShowExitPopup(false)}
                className="text-[10px] text-slate-400 font-black hover:underline cursor-pointer uppercase tracking-wider"
              >
                No thanks, I will pass on the ₹500 discount
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
