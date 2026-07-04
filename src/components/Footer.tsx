/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ShieldCheck, MapPin, Phone, Mail, Clock } from "lucide-react";
import logoImage from "../assets/images/logo_1782972143331.jpg";

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/5 relative overflow-hidden">
      {/* Glow spots */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Logo & Info */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center select-none h-14 w-fit">
              <img
                src={logoImage}
                alt="NATTON SkillX Junior Logo"
                className="h-10 sm:h-14 w-auto object-contain bg-white p-1 rounded-xl shadow-md border border-white/10"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-semibold max-w-sm">
              We are India's premier practical weekend AI academy specifically engineered for kids and teenagers. Helping families channel screen-time into high-paying, future-proof logical skillsets.
            </p>

            <div className="flex items-center space-x-2 bg-white/5 border border-white/10 p-3 rounded-xl w-fit">
              <ShieldCheck className="text-brand-success shrink-0" size={16} />
              <span className="text-[10px] text-slate-300 font-bold uppercase tracking-widest">
                100% Secure SSL Certified Admissions
              </span>
            </div>
          </div>

          {/* Quick Contact info */}
          <div className="md:col-span-4 space-y-5">
            <h4 className="text-white text-xs font-black uppercase tracking-widest">
              Natton Headquarters
            </h4>
            
            <div className="space-y-4 text-xs sm:text-sm font-semibold text-slate-400">
              <div className="flex items-start space-x-2.5">
                <MapPin size={16} className="text-brand-secondary mt-0.5 shrink-0" />
                <span className="leading-relaxed">#37, First Floor, Pride Icon, Gokul Road, Hubballi, Karnataka, India</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone size={16} className="text-brand-success shrink-0" />
                <a href="tel:+917795512226" className="hover:text-white hover:underline font-mono">
                  +91 77955 12226
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail size={16} className="text-brand-accent shrink-0" />
                <a href="mailto:juniornattonskillx@gmail.com" className="hover:text-white hover:underline">
                  juniornattonskillx@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Operating hours */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="text-white text-xs font-black uppercase tracking-widest">
              Working Schedules
            </h4>
            
            <div className="space-y-4 text-xs sm:text-sm font-semibold text-slate-400">
              <div className="flex items-start space-x-2.5">
                <Clock size={16} className="text-amber-400 mt-0.5 shrink-0" />
                <div>
                  <p className="font-extrabold text-white">Admissions Desk:</p>
                  <p className="text-xs text-slate-400 mt-0.5 font-bold">Monday - Saturday</p>
                  <p className="text-xs text-slate-300 font-mono font-bold">9:30 AM - 6:30 PM IST</p>
                </div>
              </div>
              <div className="flex items-start space-x-2.5 pt-4 border-t border-white/5">
                <ShieldCheck size={16} className="text-brand-success shrink-0" />
                <div>
                  <p className="font-extrabold text-white">Live AI Batches:</p>
                  <p className="text-xs text-brand-secondary font-mono font-black mt-0.5">Saturdays & Sundays Only</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Links & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold">
          
          <p className="text-slate-500 text-center sm:text-left font-semibold">
            © {currentYear} Natton SkillX Junior. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-slate-500 text-center">
            <span className="hover:text-slate-350 cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-slate-350 cursor-pointer transition-colors">Terms & Conditions</span>
            <span className="hover:text-slate-350 cursor-pointer transition-colors">Refund Policy</span>
            <span className="hover:text-slate-350 cursor-pointer transition-colors">Contact Us</span>
          </div>

        </div>

      </div>
    </footer>
  );
}
