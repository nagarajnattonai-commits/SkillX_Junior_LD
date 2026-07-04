/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { comparisonFeatures } from "../data";
import { Check, X, ShieldCheck, HelpCircle } from "lucide-react";

export default function ComparisonTable() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs uppercase tracking-widest text-brand-secondary font-black">Value Comparison</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight leading-tight text-white">
            How Natton SkillX Junior Outperforms Others
          </h3>
          <p className="text-base text-slate-300 font-medium">
            We are built on absolute transparent quality. No high lock-in contracts, no pre-recorded videos—just real live interactive weekend mentorship.
          </p>
        </div>

        {/* Comparison Table Container (Frosted glass scroll view) */}
        <div className="overflow-x-auto rounded-3xl border border-white/10 shadow-2xl glass">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="bg-slate-900/90 text-white font-display text-xs sm:text-sm font-black uppercase tracking-widest border-b border-white/10">
                <th className="py-5 px-6 font-semibold">Core Curriculum Features</th>
                <th className="py-5 px-6 font-black text-brand-secondary bg-slate-900/50 border-x border-white/10">
                  <span className="flex items-center space-x-1.5">
                    <ShieldCheck size={18} className="text-brand-secondary animate-pulse" />
                    <span>Natton SkillX Junior</span>
                  </span>
                </th>
                <th className="py-5 px-6 font-semibold text-slate-400">Other Coding/Tuition Centers</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {comparisonFeatures.map((item, idx) => (
                <tr key={idx} className="hover:bg-white/5 transition-colors">
                  {/* Feature Name */}
                  <td className="py-5 px-6 font-extrabold text-slate-100 text-sm">
                    {item.feature}
                  </td>
                  
                  {/* Natton SkillX Junior */}
                  <td className="py-5 px-6 font-bold text-xs bg-brand-primary/10 border-x border-white/5">
                    <div className="flex items-start space-x-2.5">
                      <div className="p-0.5 bg-brand-success rounded-full text-white shrink-0 mt-0.5 shadow-[0_0_8px_rgba(0,200,83,0.5)]">
                        <Check size={11} className="stroke-[3]" />
                      </div>
                      <span className="text-slate-200 font-bold sm:text-sm">{item.natton}</span>
                    </div>
                  </td>
                  
                  {/* Other standard solutions */}
                  <td className="py-5 px-6 font-semibold text-slate-400 text-xs">
                    <div className="flex items-start space-x-2.5">
                      <div className="p-0.5 bg-rose-500/20 rounded-full text-rose-400 shrink-0 mt-0.5 border border-rose-500/30">
                        <X size={11} className="stroke-[3]" />
                      </div>
                      <span className="text-slate-400 font-bold sm:text-sm">{item.others}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick comparative badge underneath */}
        <div className="text-center mt-10">
          <div className="inline-flex flex-col sm:flex-row items-center space-y-3.5 sm:space-y-0 sm:space-x-4 glass bg-white/5 border border-white/10 px-6 py-4 rounded-2xl shadow-xl">
            <span className="text-xs font-black uppercase tracking-widest bg-brand-primary text-white px-3 py-1 rounded font-mono">Guaranteed</span>
            <p className="text-xs sm:text-sm font-bold text-slate-200">
              No long term commitments! Pay monthly (<span className="text-brand-secondary font-mono">₹1,999</span>) and cancel anytime if your child doesn't love it.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
