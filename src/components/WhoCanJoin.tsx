/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { whoCanJoinCards } from "../data";
import { GraduationCap, Sparkles, Tv, Laptop, CheckCircle } from "lucide-react";

export default function WhoCanJoin() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="text-brand-secondary" size={28} />;
      case "Sparkles":
        return <Sparkles className="text-brand-accent" size={28} />;
      case "Tv":
        return <Tv className="text-brand-success" size={28} />;
      default:
        return <Laptop className="text-amber-400" size={28} />;
    }
  };

  const getBorderColor = (title: string) => {
    if (title.includes("Age")) return "border-t-4 border-t-brand-primary hover:shadow-[0_0_20px_rgba(11,95,255,0.25)]";
    if (title.includes("Skill")) return "border-t-4 border-t-brand-accent hover:shadow-[0_0_20px_rgba(123,97,255,0.25)]";
    if (title.includes("Mode")) return "border-t-4 border-t-brand-success hover:shadow-[0_0_20px_rgba(0,200,83,0.25)]";
    return "border-t-4 border-t-amber-400 hover:shadow-[0_0_20px_rgba(251,191,36,0.25)]";
  };

  const getGlowBg = (title: string) => {
    if (title.includes("Age")) return "bg-brand-primary/10 border-brand-primary/25";
    if (title.includes("Skill")) return "bg-brand-accent/10 border-brand-accent/25";
    if (title.includes("Mode")) return "bg-brand-success/10 border-brand-success/25";
    return "bg-amber-400/10 border-amber-400/25";
  };

  return (
    <section id="who-can-join" className="py-24 bg-slate-950 relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-brand-secondary font-black">Eligibility criteria</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight leading-tight text-white">
            Who Can Join the Weekend AI Classes?
          </h3>
          <p className="text-base text-slate-300 font-medium">
            We hold separate progressive cohorts divided by age, ensuring lessons match your child's developmental milestones perfectly.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {whoCanJoinCards.map((card, i) => (
            <div
              key={i}
              className={`glass p-6 rounded-2xl border border-white/5 flex flex-col justify-between glass-card-hover ${getBorderColor(card.title)}`}
            >
              <div className="space-y-5">
                {/* Icon Circle */}
                <div className={`p-3 border rounded-xl w-fit shrink-0 ${getGlowBg(card.title)}`}>
                  {getIcon(card.icon)}
                </div>

                {/* Info Text */}
                <div className="space-y-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block font-mono">
                    {card.title}
                  </span>
                  <h4 className="text-xl font-black font-display text-white">
                    {card.value}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-semibold">
                    {card.description}
                  </p>
                </div>
              </div>

              {/* Verified badge */}
              <div className="pt-5 mt-6 border-t border-white/5 flex items-center space-x-1.5 text-[10px] font-black text-slate-400 font-mono uppercase tracking-widest">
                <CheckCircle size={12} className="text-brand-success" />
                <span>Verified Requirement</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
