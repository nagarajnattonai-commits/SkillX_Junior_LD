/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { AlertTriangle, Sparkles, HelpCircle, ArrowRight, Laptop, Lightbulb } from "lucide-react";

export default function ProblemSolution() {
  const problemItems = [
    {
      title: "Technology Over-Consumption",
      desc: "Children spend 4+ hours daily playing mobile games or watching passive video loops, without learning any transferable digital skills.",
      badge: "Mobile Addiction"
    },
    {
      title: "Outdated School Curriculum",
      desc: "Traditional schools teach ancient concepts (like MS Paint or basic typing) that fail to prepare children for the AI-powered economy.",
      badge: "Curriculum Gap"
    },
    {
      title: "Rapidly Automating Jobs",
      desc: "By the time kids enter college, AI will be fully integrated into design, finance, code, and writing. Passive workers risk falling behind.",
      badge: "Future Risk"
    },
    {
      title: "Dry Theoretical Learning",
      desc: "Typical computer classes are boring, memorization-heavy, and lack practical project building or personalized feedback.",
      badge: "Boring Methods"
    }
  ];

  const solutionItems = [
    {
      title: "Empower Active AI Creators",
      desc: "Turn screen time productive! Your child will build games, design custom AI models, write actual scripts, and make animated artwork.",
      badge: "Create with AI"
    },
    {
      title: "Hands-on Future Readiness",
      desc: "Master 30+ cutting-edge AI tools (ChatGPT, Gemini, Claude, Canva, Python) that give them a massive digital edge before college.",
      badge: "Industry Standard"
    },
    {
      title: "Career Superpower Development",
      desc: "Prompt Engineering and AI Automation are the highest-paying skills. We teach them to leverage AI to learn and deliver 10x faster.",
      badge: "Modern Edge"
    },
    {
      title: "100% Live Interactive Batches",
      desc: "Fun, engaging live online weekend classes. Small cohorts with real industry mentors who answer every single doubt face-to-face.",
      badge: "Live Mentoring"
    }
  ];

  return (
    <section id="why-ai" className="py-24 bg-slate-950 relative overflow-hidden border-b border-white/5">
      {/* 3D decorative light glows */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-rose-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-brand-secondary font-black">The Tech Transition</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary via-brand-accent to-brand-primary drop-shadow-[0_2px_10px_rgba(0,194,255,0.2)]">
            Why Learning AI Early Matters More Than Ever
          </h3>
          <p className="text-base text-slate-300 font-medium">
            AI is completely reshaping our world. We help your child transition from a passive screen consumer to an active digital builder.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* LEFT: THE PROBLEM CARD (Red/Rose tinted glass) */}
          <div className="glass bg-slate-900/30 border border-rose-500/10 hover:border-rose-500/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300">
            <div className="space-y-6">
              
              {/* Card Title */}
              <div className="flex items-center space-x-3.5 pb-4 border-b border-rose-500/15">
                <div className="p-2.5 bg-rose-500/10 border border-rose-500/20 rounded-xl text-rose-400">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-black text-rose-100 font-display">The Traditional Pitfall</h4>
                  <p className="text-xs font-black text-rose-400 uppercase tracking-wider">What children are facing today</p>
                </div>
              </div>

              {/* Problem List */}
              <div className="space-y-6">
                {problemItems.map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <span className="w-6 h-6 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs font-black font-mono flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h5 className="font-extrabold text-slate-100 text-sm sm:text-base">{item.title}</h5>
                        <span className="text-[9px] font-black bg-rose-500/10 border border-rose-500/20 text-rose-300 px-2 py-0.5 rounded font-mono uppercase tracking-wider">{item.badge}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-semibold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Warning Sticker */}
            <div className="mt-8 p-4 bg-rose-500/5 rounded-2xl border border-rose-500/10 text-xs text-rose-300 font-bold flex items-start space-x-3">
              <span className="text-base leading-none">⚠️</span>
              <p className="leading-relaxed">Passive screen addiction is proven to reduce attention spans. Traditional schools aren't teaching how to change this.</p>
            </div>
          </div>

          {/* RIGHT: THE SOLUTION CARD (Emerald glowing glass) */}
          <div className="glass bg-slate-900/30 border border-emerald-500/10 hover:border-emerald-500/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_15px_40px_rgba(0,200,83,0.05)]">
            <div className="space-y-6">
              
              {/* Card Title */}
              <div className="flex items-center space-x-3.5 pb-4 border-b border-emerald-500/15">
                <div className="p-2.5 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-brand-success">
                  <Sparkles size={24} className="animate-pulse" />
                </div>
                <div>
                  <h4 className="text-lg font-black text-emerald-100 font-display">The Natton SkillX Junior Way</h4>
                  <p className="text-xs font-black text-brand-success uppercase tracking-wider">Empowering your child's genius</p>
                </div>
              </div>

              {/* Solution List */}
              <div className="space-y-6">
                {solutionItems.map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <span className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-brand-success text-xs font-black font-mono flex items-center justify-center shrink-0 mt-0.5">
                      ✓
                    </span>
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h5 className="font-extrabold text-slate-100 text-sm sm:text-base">{item.title}</h5>
                        <span className="text-[9px] font-black bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono uppercase tracking-wider">{item.badge}</span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-semibold">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Outcome Indicator */}
            <div className="mt-8 p-4 bg-emerald-500/5 rounded-2xl border border-emerald-500/10 text-xs text-emerald-300 font-bold flex items-center">
              <div className="flex items-start space-x-3">
                <Lightbulb size={18} className="text-amber-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">The absolute gold standard weekend activity for kids age 6 to 17. Safe, interactive, and highly rewarding!</span>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}
