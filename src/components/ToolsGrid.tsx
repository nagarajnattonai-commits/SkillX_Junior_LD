/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { aiToolsList } from "../data";
import { Cpu, Terminal, Sparkles, Wand2, Lightbulb } from "lucide-react";

export default function ToolsGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  // Detailed mappings for tools to give them a premium EdTech SaaS feel
  const toolsMeta: Record<string, { category: string; icon: string; desc: string; color: string }> = {
    "ChatGPT": {
      category: "AI Assistants & Writing",
      icon: "💬",
      desc: "Ideation, writing essays, grammar help, and personal chat sandbox.",
      color: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
    },
    "Google Gemini": {
      category: "AI Assistants & Writing",
      icon: "♊",
      desc: "Search integrations, school work assistance, and complex summaries.",
      color: "bg-blue-500/10 text-blue-300 border-blue-500/20"
    },
    "Claude": {
      category: "AI Assistants & Writing",
      icon: "🤖",
      desc: "Exceptional writing assistant, creative brainstorming, and logical analysis.",
      color: "bg-orange-500/10 text-orange-300 border-orange-500/20"
    },
    "Perplexity": {
      category: "AI Assistants & Writing",
      icon: "🔍",
      desc: "Search grounding, citing academic sources, and real-time deep research.",
      color: "bg-cyan-500/10 text-cyan-300 border-cyan-500/20"
    },
    "Canva AI": {
      category: "AI Art & Design",
      icon: "🎨",
      desc: "Magic design, AI visual suite, and making gorgeous posters & banners.",
      color: "bg-purple-500/10 text-purple-300 border-purple-500/20"
    },
    "Python": {
      category: "Coding & Logic",
      icon: "🐍",
      desc: "Standard coding syntax, logic variables, loops, and simple programs.",
      color: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20"
    },
    "Google Colab": {
      category: "Coding & Logic",
      icon: "📓",
      desc: "Running cloud Python scripts, charting metrics, and saving datasets.",
      color: "bg-amber-500/10 text-amber-300 border-amber-500/20"
    },
    "Scratch": {
      category: "Coding & Logic",
      icon: "🧩",
      desc: "Visual block programming to understand algorithms and build simple games.",
      color: "bg-orange-500/10 text-orange-300 border-orange-500/20"
    },
    "NotebookLM": {
      category: "AI Assistants & Writing",
      icon: "📓",
      desc: "Creating audio summaries and studying from school PDFs and notebooks.",
      color: "bg-teal-500/10 text-teal-300 border-teal-500/20"
    },
    "Gamma": {
      category: "Productivity & Media",
      icon: "🪄",
      desc: "Generating premium webpage layouts and pitch decks in seconds.",
      color: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
    },
    "Grammarly": {
      category: "Productivity & Media",
      icon: "✍️",
      desc: "Ethical grammar improvement, formatting essays, and speech tone analysis.",
      color: "bg-green-500/10 text-green-300 border-green-500/20"
    },
    "QuillBot": {
      category: "Productivity & Media",
      icon: "🪶",
      desc: "Paraphrasing, vocabulary optimization, and rewriting academic notes.",
      color: "bg-emerald-500/10 text-emerald-300 border-emerald-500/20"
    },
    "Miro": {
      category: "Productivity & Media",
      icon: "🗺️",
      desc: "Collaborative whiteboarding, brainstorming layouts, and mind maps.",
      color: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20"
    },
    "Teachable Machine": {
      category: "Machine Learning",
      icon: "⚙️",
      desc: "Training custom models on webcams for images, voice, and poses.",
      color: "bg-red-500/10 text-red-300 border-red-500/20"
    },
    "ElevenLabs": {
      category: "AI Art & Design",
      icon: "🔊",
      desc: "Voice synthesis, creating professional voiceovers for video stories.",
      color: "bg-violet-500/10 text-violet-300 border-violet-500/20"
    },
    "HeyGen": {
      category: "AI Art & Design",
      icon: "👥",
      desc: "Generating video avatars for video lessons and speaking presentations.",
      color: "bg-fuchsia-500/10 text-fuchsia-300 border-fuchsia-500/20"
    },
    "Power BI": {
      category: "Productivity & Media",
      icon: "📊",
      desc: "Data modeling, visual dashboards, and basic metrics charts.",
      color: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20"
    },
    "Lovable": {
      category: "Coding & Logic",
      icon: "❤️",
      desc: "AI-assisted custom web app creation and responsive layout assembly.",
      color: "bg-rose-500/10 text-rose-300 border-rose-500/20"
    },
    "Suno AI": {
      category: "AI Art & Design",
      icon: "🎵",
      desc: "Generating high-fidelity custom songs, rhymes, and melodies using prompts.",
      color: "bg-pink-500/10 text-pink-300 border-pink-500/20"
    },
    "Kling AI": {
      category: "AI Art & Design",
      icon: "🎥",
      desc: "High-quality text-to-video generation and cinematic visuals generation.",
      color: "bg-indigo-500/10 text-indigo-300 border-indigo-500/20"
    }
  };

  const categories = ["All", "AI Assistants & Writing", "AI Art & Design", "Coding & Logic", "Machine Learning", "Productivity & Media"];

  const filteredTools = aiToolsList.filter((tool) => {
    const meta = toolsMeta[tool];
    if (activeCategory === "All") return true;
    return meta?.category === activeCategory;
  });

  return (
    <section id="tools" className="py-24 bg-slate-950 relative overflow-hidden border-b border-white/5">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider animate-pulse-slow">
            <Wand2 size={14} className="text-brand-secondary animate-spin-slow" />
            <span>30+ Modern Tools Covered (20 Key Core Platforms)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight leading-tight text-white">
            AI Tools Your Child Will Learn to Master
          </h2>
          <p className="text-base text-slate-300 font-medium">
            We don't just talk about theory. Kids actively log into, prompt, and build with the exact software tools used by professional developers.
          </p>
        </div>

        {/* Category Filter Pills (Glass style) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4.5 py-2.5 rounded-full text-xs font-black transition-all cursor-pointer border ${
                activeCategory === cat
                  ? "bg-brand-secondary border-brand-secondary text-slate-950 shadow-[0_0_15px_rgba(0,194,255,0.4)] scale-102"
                  : "glass bg-white/5 border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools Grid with Glassmorphism */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTools.map((tool) => {
            const meta = toolsMeta[tool] || {
              category: "AI",
              icon: "🤖",
              desc: "Practical tool usage and prompting guidelines covered in class.",
              color: "bg-slate-800/50 text-slate-300 border-white/5"
            };
            return (
              <div
                key={tool}
                className="glass glass-card-hover p-6 rounded-2xl border border-white/5 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon & Title */}
                  <div className="flex items-center justify-between">
                    <span className="text-3xl drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)]">{meta.icon}</span>
                    <span className={`text-[9px] font-black px-2.5 py-1 rounded-md uppercase border font-mono tracking-wider ${meta.color}`}>
                      {meta.category.split(" & ")[0].split(" ")[0]}
                    </span>
                  </div>
                  
                  {/* Tool Name */}
                  <h4 className="text-base sm:text-lg font-black text-white font-display">
                    {tool}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-semibold">
                    {meta.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 flex items-center justify-between text-[10px] font-black text-slate-500 uppercase tracking-wider">
                  <span>Class Project Tool</span>
                  <span className="text-brand-secondary font-bold">Grade 1-12 Batch</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner glass callout */}
        <div className="mt-14 glass bg-slate-900/20 rounded-2xl p-6 shadow-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-start space-x-3.5">
            <div className="p-3 bg-brand-secondary/15 rounded-xl text-brand-secondary border border-brand-secondary/20 shrink-0">
              <Lightbulb size={20} className="animate-pulse" />
            </div>
            <div>
              <h4 className="text-white font-extrabold text-sm sm:text-base font-display">Are these premium accounts free?</h4>
              <p className="text-xs sm:text-sm text-slate-300 font-semibold leading-relaxed mt-1">
                Yes! We guide children exclusively using free-tier options or student editions of all listed tools. Parents do not need to purchase any secondary expensive subscriptions.
              </p>
            </div>
          </div>
          <div className="text-xs font-mono font-black uppercase tracking-widest bg-emerald-500/15 border border-emerald-500/20 text-emerald-300 px-4 py-2 rounded-lg whitespace-nowrap">
            Zero Extra Cost
          </div>
        </div>

      </div>
    </section>
  );
}
