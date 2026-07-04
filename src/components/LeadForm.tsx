/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from "react";
import { ShieldCheck, X } from "lucide-react";

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess?: () => void;
}

export default function LeadForm({ isOpen, onClose, onSuccess }: LeadFormProps) {
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle the script loading for GoHighLevel form inside the popup
  useEffect(() => {
    if (!isOpen) return;

    const script = document.createElement("script");
    script.src = "https://automation.natton.ai/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    const handleMessage = (event: MessageEvent) => {
      try {
        if (event.origin === "https://automation.natton.ai" && (
          (event.data && event.data.type === "submit") || 
          (typeof event.data === "string" && event.data.includes("submit"))
        )) {
          console.log("Form submitted via GHL Iframe Widget!");
          onSuccess?.();
          // Auto close after 2 seconds on success
          setTimeout(() => {
            onClose();
          }, 2000);
        }
      } catch (e) {
        console.error("Error processing form message:", e);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      document.body.removeChild(script);
      window.removeEventListener("message", handleMessage);
    };
  }, [isOpen, onSuccess, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto animate-fade-in">
      
      {/* Click outside to close */}
      <div className="absolute inset-0 cursor-default" onClick={onClose} />

      {/* Glassmorphic Modal Box */}
      <div className="glass bg-slate-950/90 border border-white/10 rounded-3xl w-full max-w-2xl shadow-[0_0_60px_rgba(244,63,94,0.25)] overflow-hidden relative my-6 flex flex-col z-10 max-h-[92vh]">
        
        {/* Pink & Blue Ambient Background Lights */}
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-pink-500/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-fuchsia-500/10 rounded-full blur-[60px] pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4.5 right-4.5 p-2 text-slate-400 hover:text-white hover:bg-white/10 border border-white/5 rounded-full transition-all cursor-pointer z-50 bg-slate-950/40"
          title="Close Modal"
        >
          <X size={18} />
        </button>

        {/* Header Block inside Modal */}
        <div className="p-5 sm:p-6 text-center border-b border-white/10 relative z-10 space-y-2 pb-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-pink-500/15 text-brand-secondary px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
            <span className="text-slate-300">Instant Reservation</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
          </div>
          
          {/* Requested One-Line Heading styled with light pink and blue combination */}
          <h3 className="text-lg sm:text-2xl md:text-3xl font-extrabold font-display tracking-tight leading-tight whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-pink-200 via-fuchsia-200 to-blue-200 drop-shadow-[0_2px_12px_rgba(244,114,182,0.25)] px-4">
            Book Your FREE Live Demo Class
          </h3>
          
          <p className="text-xs text-slate-400 font-bold max-w-md mx-auto">
            ⚡ Weekend spots are extremely limited. Secure yours now!
          </p>
        </div>

        {/* Scarcity / Progress Banner inside Form Header with gradient theme */}
        <div className="bg-slate-900/80 backdrop-blur-md text-white px-5 py-2.5 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 border-b border-white/5 relative z-10">
          <div className="flex items-center space-x-2 justify-center sm:justify-start">
            <span className="w-2 h-2 bg-pink-500 rounded-full animate-ping" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-300">Demo Schedule: Saturday & Sunday</span>
          </div>
          <span className="text-[10px] font-mono font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-400 bg-white/5 border border-pink-500/30 px-2 py-1 rounded-md text-center">
            🎓 ONLY 3 SEATS LEFT FOR THIS WEEKEND!
          </span>
        </div>

        {/* Scrollable Iframe Viewport */}
        <div className="p-3 sm:p-5 relative z-10 overflow-y-auto flex-grow" style={{ minHeight: "400px" }}>
          <iframe
            src="https://automation.natton.ai/widget/form/aIYPR2gGKqFkvDe1V563"
            style={{ width: "100%", height: "919px", border: "none", borderRadius: "16px", background: "transparent" }}
            id="inline-aIYPR2gGKqFkvDe1V563" 
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="SkillX_Junior"
            data-height="919"
            data-layout-iframe-id="inline-aIYPR2gGKqFkvDe1V563"
            data-form-id="aIYPR2gGKqFkvDe1V563"
            title="SkillX_Junior"
          />
        </div>

        {/* Bottom Form Assurance Badges with pink/blue hints */}
        <div className="bg-slate-900/60 backdrop-blur-md p-4.5 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 text-[10px] text-slate-300 font-extrabold relative z-10 shrink-0">
          <span className="flex items-center space-x-1.5 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full">
            <ShieldCheck size={12} className="text-pink-400" />
            <span>No Payment Required</span>
          </span>
          <span className="flex items-center space-x-1.5 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full">
            <ShieldCheck size={12} className="text-blue-400" />
            <span>Spam Free WhatsApp</span>
          </span>
          <span className="flex items-center space-x-1.5 bg-white/5 border border-white/5 px-2.5 py-1 rounded-full">
            <ShieldCheck size={12} className="text-fuchsia-400" />
            <span>Secure SSL Encryption</span>
          </span>
        </div>

      </div>
    </div>
  );
}
