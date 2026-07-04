/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { faqQuestions } from "../data";
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from "lucide-react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    if (openIdx === idx) {
      setOpenIdx(null);
    } else {
      setOpenIdx(idx);
    }
  };

  return (
    <section id="faqs" className="py-24 bg-slate-950 relative overflow-hidden border-b border-white/5">
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-primary/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider animate-pulse-slow">
            <HelpCircle size={14} className="text-brand-secondary" />
            <span>Got Questions? We Have Answers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight leading-tight text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-300 font-medium">
            Find immediate answers to standard parental queries about timings, equipment, certification, and lesson records.
          </p>
        </div>

        {/* FAQs Accordion Grid */}
        <div className="space-y-4">
          {faqQuestions.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`glass border rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-slate-900/40 border-brand-secondary/40 shadow-[0_10px_25px_rgba(0,194,255,0.05)]"
                    : "border-white/5 bg-white/0 hover:border-white/10 hover:bg-white/5"
                }`}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-black text-white text-sm sm:text-base cursor-pointer select-none"
                >
                  <span className="leading-snug">{faq.question}</span>
                  <div className={`p-1.5 rounded-lg shrink-0 transition-colors ${
                    isOpen 
                      ? "bg-brand-secondary/20 text-brand-secondary border border-brand-secondary/30" 
                      : "bg-white/5 text-slate-400 border border-white/5"
                  }`}>
                    {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </div>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-0 border-t border-white/5 animate-fade-in text-xs sm:text-sm text-slate-300 leading-relaxed font-semibold">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Support Callout Box */}
        <div className="mt-14 p-6 glass bg-slate-900/20 rounded-3xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-2xl">
          <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="p-3 bg-brand-primary/20 text-brand-secondary border border-brand-primary/25 rounded-2xl shrink-0">
              <MessageCircle size={24} className="animate-pulse" />
            </div>
            <div>
              <h4 className="font-extrabold text-white text-sm sm:text-base font-display">Have a custom query?</h4>
              <p className="text-xs sm:text-sm text-slate-300 font-semibold leading-relaxed mt-1">
                Our support team is online on WhatsApp to answer syllabus questions.
              </p>
            </div>
          </div>
          
          <a
            href="https://wa.me/917795512226?text=Hi! I am interested in Natton SkillX Junior AI Classes for my child. Please help me with batch timings."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-primary hover:bg-brand-primary/95 text-white font-black px-6 py-3.5 rounded-full text-xs shadow-lg tracking-wider uppercase whitespace-nowrap transition-all cursor-pointer border border-white/10 text-center"
          >
            Chat With Counselor
          </a>
        </div>

      </div>
    </section>
  );
}
