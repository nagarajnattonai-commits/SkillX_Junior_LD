/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { learningOutcomes } from "../data";
import { CheckCircle, Award, Sparkles, User, FileBadge } from "lucide-react";
import logoImage from "../assets/images/logo_1782972143331.jpg";

export default function Outcomes() {
  const [childName, setChildName] = useState("");

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-b border-white/5">
      {/* Glow shapes */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-success/10 border border-brand-success/20 text-brand-success px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider animate-pulse-slow">
            <Award size={14} className="text-brand-success" />
            <span>Measurable Educational Milestones & Accomplishments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight leading-tight text-white">
            What Your Child Will Achieve
          </h2>
          <p className="text-base text-slate-300 font-medium">
            Clear, tangible milestones that turn your child from a gaming enthusiast into a certified futuristic creator with a live digital portfolio.
          </p>
        </div>

        {/* Content Split: Left Outcomes list, Right Interactive Certificate */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: 12 Outcomes Checkmarks */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-xl sm:text-2xl font-black font-display text-white leading-tight">
              A Comprehensive Roadmap of Tangible Outcomes
            </h3>
            <p className="text-sm sm:text-base text-slate-300 font-semibold leading-relaxed">
              Our syllabus goes way beyond code. We train the mind to think logically, dissect questions, and use artificial intelligence as an ethical, powerful amplifier of human potential.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {learningOutcomes.map((outcome, idx) => (
                <div
                  key={idx}
                  className="p-3.5 glass glass-card-hover rounded-xl border border-white/5 flex items-start space-x-3 transition-colors"
                >
                  <CheckCircle size={18} className="text-brand-success shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-bold text-slate-200 leading-tight">
                    {outcome}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Live Certificate Sandbox */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            {/* Input field to let parent type name */}
            <div className="w-full max-w-md glass border border-white/15 rounded-2xl p-5 mb-6 space-y-4 shadow-2xl">
              <label className="text-xs font-black text-slate-300 uppercase tracking-widest flex items-center space-x-2">
                <User size={14} className="text-brand-secondary" />
                <span>Type Your Child's Name to See Their Certificate:</span>
              </label>
              
              <div className="relative">
                <input
                  type="text"
                  maxLength={30}
                  placeholder="e.g. Advait Deshmukh"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  className="w-full glass bg-white/5 border border-white/10 focus:border-brand-secondary text-white rounded-xl py-3 px-4.5 text-xs sm:text-sm font-semibold outline-hidden shadow-xs"
                />
                <Sparkles size={14} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-brand-secondary animate-pulse" />
              </div>
              <p className="text-[10px] text-slate-400 font-bold leading-relaxed">
                *Graduation certificates are issued immediately upon successful completion of the weekend Capstone Portfolio presentation.
              </p>
            </div>

            {/* Certificate Render Card (Luxurious Ivory/Offwhite background with gold accents) */}
            <div className="w-full max-w-lg aspect-[1.414/1] bg-slate-50 border-8 border-slate-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative shadow-2xl overflow-hidden">
              
              {/* Delicate certificate border details */}
              <div className="absolute inset-2 border-2 border-amber-500/30 rounded-2xl pointer-events-none" />
              <div className="absolute inset-3 border border-amber-500/10 rounded-2xl pointer-events-none" />

              {/* Watermark Logo */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
                <Award size={180} className="text-slate-950" />
              </div>

              {/* Top Row: Institution Name with Real Brand Logo */}
              <div className="text-center space-y-1 z-10">
                <div className="flex items-center justify-center h-8 sm:h-9">
                  <img
                    src={logoImage}
                    alt="NATTON SkillX Junior Logo"
                    className="h-full w-auto object-contain mix-blend-multiply"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[8px] sm:text-[9px] font-bold text-slate-500 uppercase tracking-widest font-mono">
                  Institution of Future-Proof Educational Technology
                </p>
              </div>

              {/* Middle Row: Award Copy */}
              <div className="text-center space-y-3 sm:space-y-4 my-2 z-10">
                <h4 className="font-serif text-lg sm:text-2xl italic text-slate-850 font-extrabold">
                  Certificate of Achievement
                </h4>
                
                <p className="text-[9px] sm:text-[10px] text-slate-500 uppercase font-extrabold tracking-wider">
                  This is proudly presented to
                </p>

                {/* Interactive Dynamic Child Name */}
                <div className="border-b-2 border-slate-800/80 mx-auto w-3/4 pb-1 sm:pb-2">
                  <span className="font-display font-black text-sm sm:text-xl tracking-wide text-slate-900 min-h-[28px] inline-block font-sans">
                    {childName.trim() || "[ Your Child's Name Here ]"}
                  </span>
                </div>

                <p className="text-[9px] sm:text-[10px] text-slate-600 leading-relaxed font-semibold max-w-sm mx-auto">
                  for successfully mastering Prompt Engineering, AI Assistants, Digital Art, Automation, and presenting a validated live AI Capstone Portfolio.
                </p>
              </div>

              {/* Bottom Row: Signatures & Golden Seal */}
              <div className="flex items-center justify-between mt-1 sm:mt-2 z-10">
                {/* Sign 1 */}
                <div className="text-center">
                  <p className="font-serif text-xs italic text-slate-750 font-extrabold leading-none">Nagaraj S.</p>
                  <div className="border-t border-slate-300 w-16 sm:w-20 my-1 mx-auto" />
                  <p className="text-[7px] font-bold text-slate-400 uppercase tracking-wider">Program Director</p>
                </div>

                {/* Golden Seal of Validity */}
                <div className="flex items-center justify-center relative">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-amber-400 via-amber-300 to-yellow-500 rounded-full border-2 border-white flex items-center justify-center shadow-md">
                    <FileBadge className="text-amber-950" size={16} />
                  </div>
                  <div className="absolute -inset-1 border border-amber-400/30 rounded-full animate-ping" style={{ animationDuration: '4s' }} />
                </div>

                {/* Sign 2 */}
                <div className="text-center">
                  <p className="font-serif text-xs italic text-slate-750 font-extrabold leading-none">SkillX Mentor</p>
                  <div className="border-t border-slate-300 w-16 sm:w-20 my-1 mx-auto" />
                  <p className="text-[7px] font-bold text-slate-400 uppercase tracking-wider">Academic Head</p>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
