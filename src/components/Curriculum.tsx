/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { curriculumWeeks } from "../data";
import { Search, ChevronDown, ChevronUp, BookOpen, Clock, FileCheck, Brain } from "lucide-react";

export default function Curriculum() {
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedWeek, setExpandedWeek] = useState<string | null>("Week 1");

  // Toggle accordion item
  const toggleWeek = (week: string) => {
    if (expandedWeek === week) {
      setExpandedWeek(null);
    } else {
      setExpandedWeek(week);
    }
  };

  // Filter weeks based on search query
  const filteredWeeks = curriculumWeeks.filter((week) => {
    const titleMatch = week.title.toLowerCase().includes(searchQuery.toLowerCase());
    const descMatch = week.description.toLowerCase().includes(searchQuery.toLowerCase());
    const topicsMatch = week.topics.some((topic) =>
      topic.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return titleMatch || descMatch || topicsMatch;
  });

  return (
    <section id="curriculum" className="py-24 bg-slate-950 relative overflow-hidden border-b border-white/5">
      {/* 3D spheres & gradient spots */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-brand-accent/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-accent/10 border border-brand-accent/20 text-brand-secondary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider animate-pulse-slow">
            <Brain size={14} className="text-brand-secondary" />
            <span>Structured 12-Week Modern Curriculum (8 Key Blocks)</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight leading-tight text-white">
            Comprehensive Practical AI Curriculum
          </h2>
          <p className="text-base text-slate-300 font-medium">
            A powerful progressive combination of <span className="text-brand-secondary font-bold">AI Explorer</span> + <span className="text-brand-accent font-bold">AI Creator</span> specifically engineered for Weekend Learning.
          </p>
        </div>

        {/* Interactive Filter Block */}
        <div className="max-w-md mx-auto mb-12">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search topics (e.g. Python, Canva, Prompt, Claude...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full glass bg-white/5 border border-white/10 focus:border-brand-secondary text-white rounded-full py-3.5 pl-12 pr-4 text-sm font-semibold outline-hidden shadow-2xl transition-all placeholder:text-slate-400"
            />
          </div>
          {searchQuery && (
            <p className="text-center text-xs text-brand-secondary mt-3.5 font-bold">
              Found {filteredWeeks.length} matched weeks for "{searchQuery}"
            </p>
          )}
        </div>

        {/* Timeline & Accordion Layout */}
        <div className="max-w-4xl mx-auto">
          {filteredWeeks.length === 0 ? (
            <div className="text-center py-12 glass rounded-2xl border border-white/10 p-6">
              <p className="text-slate-400 font-bold">No curriculum weeks matched your search terms.</p>
              <button
                onClick={() => setSearchQuery("")}
                className="text-brand-secondary font-bold text-sm underline mt-2.5 cursor-pointer block mx-auto"
              >
                Clear Search Filter
              </button>
            </div>
          ) : (
            <div className="space-y-6 relative before:absolute before:left-6 sm:before:left-8 before:top-4 before:bottom-4 before:w-[2px] before:bg-gradient-to-b before:from-brand-secondary before:via-brand-accent before:to-brand-primary/10">
              {filteredWeeks.map((week, index) => {
                const isExpanded = expandedWeek === week.week;
                return (
                  <div
                    key={week.week}
                    className="relative pl-12 sm:pl-16 transition-all duration-300 group"
                  >
                    {/* Timeline dot as glass orb */}
                    <div
                      onClick={() => toggleWeek(week.week)}
                      className={`absolute left-3 sm:left-5 top-4.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center border-2 transition-all cursor-pointer z-10 ${
                        isExpanded
                          ? "bg-brand-secondary border-brand-secondary text-slate-950 scale-110 shadow-[0_0_15px_rgba(0,194,255,0.6)]"
                          : "bg-slate-900 border-white/20 text-slate-300 group-hover:border-brand-secondary group-hover:text-white"
                      }`}
                    >
                      <span className="text-[10px] sm:text-xs font-black font-mono">
                        {index + 1}
                      </span>
                    </div>

                    {/* Accordion Card with Glassmorphism */}
                    <div
                      className={`glass rounded-2xl border transition-all duration-300 overflow-hidden ${
                        isExpanded
                          ? "bg-slate-900/40 border-brand-secondary/40 shadow-[0_10px_30px_rgba(0,194,255,0.1)]"
                          : "bg-slate-950/20 border-white/5 hover:border-white/10 hover:bg-white/5"
                      }`}
                    >
                      {/* Accordion Header */}
                      <div
                        onClick={() => toggleWeek(week.week)}
                        className="p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer select-none"
                      >
                        <div className="flex-1 space-y-1">
                          <div className="flex items-center space-x-2">
                            <span className="text-xs font-black font-mono tracking-wider text-brand-secondary uppercase">
                              {week.week}
                            </span>
                            <span className="w-1.5 h-1.5 bg-slate-700 rounded-full" />
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide">
                              Duration: 1.5 Weeks
                            </span>
                          </div>
                          <h4 className="text-base sm:text-lg font-extrabold font-display text-white leading-tight">
                            {week.title}
                          </h4>
                        </div>
                        
                        <div className={`p-1.5 rounded-lg border transition-colors ${
                          isExpanded 
                            ? 'bg-brand-secondary/20 text-brand-secondary border-brand-secondary/30' 
                            : 'bg-white/5 text-slate-400 border-white/10 group-hover:bg-brand-secondary/10 group-hover:text-white'
                        }`}>
                          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </div>
                      </div>

                      {/* Accordion Content */}
                      {isExpanded && (
                        <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-0 border-t border-white/5 animate-fade-in">
                          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-5">
                            
                            {/* Left description column */}
                            <div className="md:col-span-5 space-y-4">
                              <h5 className="text-xs font-black text-slate-300 uppercase tracking-widest flex items-center space-x-2">
                                <BookOpen size={13} className="text-brand-secondary" />
                                <span>Session Purpose</span>
                              </h5>
                              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-semibold">
                                {week.description}
                              </p>
                              
                              <div className="p-3.5 bg-white/5 border border-white/5 rounded-xl space-y-1.5">
                                <p className="text-[10px] font-black text-brand-secondary uppercase tracking-widest flex items-center space-x-1.5">
                                  <Clock size={12} />
                                  <span>Classes Mode:</span>
                                </p>
                                <p className="text-xs text-slate-300 font-bold leading-relaxed">
                                  Live Classroom + Screen share sandbox + Interactive Coding Editor
                                </p>
                              </div>
                            </div>

                            {/* Right topics column */}
                            <div className="md:col-span-7 space-y-4">
                              <h5 className="text-xs font-black text-slate-300 uppercase tracking-widest flex items-center space-x-2">
                                <FileCheck size={13} className="text-brand-success" />
                                <span>Core Topics Covered</span>
                              </h5>
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {week.topics.map((topic, tIdx) => (
                                  <div
                                    key={tIdx}
                                    className="p-3 bg-white/5 border border-white/5 hover:border-white/10 rounded-xl flex items-center space-x-2 text-xs font-extrabold text-slate-200 hover:bg-white/10 transition-all"
                                  >
                                    <span className="w-1.5 h-1.5 bg-brand-success rounded-full shrink-0" />
                                    <span>{topic}</span>
                                  </div>
                                ))}
                              </div>
                            </div>

                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Quick Curriculum Footer Info */}
        <div className="text-center mt-12">
          <p className="text-xs text-slate-400 font-bold max-w-xl mx-auto leading-relaxed">
            *Every weekend is fully self-contained. Students receive interactive slides, sandbox playground links, code snippets, and custom homework challenges directly inside their emails.
          </p>
        </div>

      </div>
    </section>
  );
}
