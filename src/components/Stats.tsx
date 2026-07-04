/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { statisticsCards } from "../data";
import { BookOpen, Command, Cpu, CalendarClock } from "lucide-react";

export default function Stats() {
  // Map icons dynamically to support pure visual quality
  const getIcon = (title: string) => {
    if (title.includes("Sessions")) return <BookOpen className="text-brand-secondary" size={24} />;
    if (title.includes("Tools")) return <Command className="text-brand-accent" size={24} />;
    if (title.includes("Hands-on")) return <Cpu className="text-brand-success" size={24} />;
    return <CalendarClock className="text-amber-400" size={24} />;
  };

  const getBorderColor = (title: string) => {
    if (title.includes("Sessions")) return "border-l-4 border-l-brand-primary group-hover:border-l-brand-secondary";
    if (title.includes("Tools")) return "border-l-4 border-l-brand-accent group-hover:shadow-[0_0_20px_rgba(123,97,255,0.25)]";
    if (title.includes("Hands-on")) return "border-l-4 border-l-brand-success group-hover:shadow-[0_0_20px_rgba(0,200,83,0.25)]";
    return "border-l-4 border-l-amber-400 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.25)]";
  };

  const getGlowBg = (title: string) => {
    if (title.includes("Sessions")) return "bg-brand-primary/10 border-brand-primary/20";
    if (title.includes("Tools")) return "bg-brand-accent/10 border-brand-accent/20";
    if (title.includes("Hands-on")) return "bg-brand-success/10 border-brand-success/20";
    return "bg-amber-400/10 border-amber-400/20";
  };

  return (
    <section className="py-16 bg-slate-950 border-y border-white/5 relative overflow-hidden">
      {/* Dynamic background lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-64 h-64 bg-brand-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statisticsCards.map((card, idx) => (
            <div
              key={idx}
              className={`p-6 glass glass-card-hover rounded-2xl border border-white/10 shadow-2xl flex items-start space-x-4 group ${getBorderColor(card.title)}`}
            >
              {/* Icon Container with frosted lens */}
              <div className={`p-3 rounded-xl border shrink-0 transition-all duration-300 group-hover:scale-110 ${getGlowBg(card.title)}`}>
                {getIcon(card.title)}
              </div>
              
              {/* Content */}
              <div className="space-y-1">
                <div className="flex items-baseline space-x-1">
                  <span className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white drop-shadow-[0_2px_8px_rgba(255,255,255,0.15)]">
                    {card.number}
                  </span>
                </div>
                <h3 className="text-xs font-black text-slate-200 uppercase tracking-widest">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
