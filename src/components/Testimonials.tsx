/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { initialTestimonials } from "../data";
import { Testimonial } from "../types";
import { Star, ChevronLeft, ChevronRight, MessageSquare, Plus, Check, User } from "lucide-react";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Testimonial Form State
  const [showAddForm, setShowAddForm] = useState(false);
  const [newParentName, setNewParentName] = useState("");
  const [newChildInfo, setNewChildInfo] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newQuote, setNewQuote] = useState("");
  const [newRating, setNewRating] = useState(5);
  const [newAvatar, setNewAvatar] = useState("avatar-1");
  const [successMsg, setSuccessMsg] = useState("");

  const avatarPresets = [
    { id: "avatar-1", url: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150", label: "Mother Profile" },
    { id: "avatar-2", url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150", label: "Father Profile" },
    { id: "avatar-3", url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150", label: "Alt Mother" },
    { id: "avatar-4", url: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150", label: "Alt Father" }
  ];

  // Load testimonials from localStorage if available, else load initial
  useEffect(() => {
    const stored = localStorage.getItem("natton_testimonials");
    if (stored) {
      try {
        setTestimonials(JSON.parse(stored));
      } catch (e) {
        setTestimonials(initialTestimonials);
      }
    } else {
      setTestimonials(initialTestimonials);
    }
  }, []);

  const saveTestimonials = (updated: Testimonial[]) => {
    setTestimonials(updated);
    localStorage.setItem("natton_testimonials", JSON.stringify(updated));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleAddTestimonial = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newParentName || !newQuote || !newChildInfo) return;

    const avatarObj = avatarPresets.find(p => p.id === newAvatar) || avatarPresets[0];

    const item: Testimonial = {
      id: `custom-${Date.now()}`,
      parentName: newParentName,
      childNameAge: newChildInfo,
      location: newLocation || "India",
      quote: newQuote,
      rating: newRating,
      avatarUrl: avatarObj.url
    };

    const updated = [item, ...testimonials];
    saveTestimonials(updated);
    setCurrentIndex(0); // View the newly added testimonial immediately

    // Reset Form
    setNewParentName("");
    setNewChildInfo("");
    setNewLocation("");
    setNewQuote("");
    setNewRating(5);
    setSuccessMsg("Testimonial posted successfully! Check the carousel above to see it live.");
    
    setTimeout(() => {
      setSuccessMsg("");
      setShowAddForm(false);
    }, 4000);
  };

  const handleDeleteTestimonial = (id: string) => {
    if (!id.startsWith("custom-")) return;
    const updated = testimonials.filter(t => t.id !== id);
    saveTestimonials(updated);
    setCurrentIndex(0);
  };

  if (testimonials.length === 0) return null;
  const activeTestimonial = testimonials[currentIndex];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-b border-white/5">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-brand-primary/10 border border-brand-primary/20 text-brand-secondary px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-wider animate-pulse-slow">
            <MessageSquare size={14} className="text-brand-secondary" />
            <span>Success Stories From Homes Like Yours</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight leading-tight text-white">
            What Parents Love About Us
          </h2>
          <p className="text-base text-slate-300 font-medium">
            Hear from real moms and dads about how weekend live classes helped channel screen time into structural digital logic and creativity.
          </p>
        </div>

        {/* Testimonials Main Slider Card (Frosted Glass box) */}
        <div className="max-w-3xl mx-auto relative mb-12">
          <div className="glass rounded-3xl p-6 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
            
            {/* Quote watermark icon */}
            <span className="absolute -top-4 left-4 text-8xl font-serif text-white/5 select-none pointer-events-none">
              “
            </span>

            <div className="space-y-6 relative z-10 text-center sm:text-left">
              {/* Rating stars */}
              <div className="flex items-center justify-center sm:justify-start space-x-1.5 text-amber-400">
                {[...Array(activeTestimonial.rating)].map((_, idx) => (
                  <Star key={idx} size={18} fill="currentColor" className="drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
                ))}
              </div>

              {/* Quote text */}
              <blockquote className="text-sm sm:text-lg text-slate-100 font-bold leading-relaxed italic">
                "{activeTestimonial.quote}"
              </blockquote>

              {/* Author Row */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5">
                <div className="flex flex-col sm:flex-row items-center space-y-2.5 sm:space-y-0 sm:space-x-4">
                  {/* Avatar */}
                  <img
                    src={activeTestimonial.avatarUrl}
                    alt={activeTestimonial.parentName}
                    className="w-14 h-14 rounded-full object-cover border-2 border-brand-secondary shadow-lg shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-extrabold text-white text-sm sm:text-base font-display">
                      {activeTestimonial.parentName}
                    </h4>
                    <p className="text-xs text-slate-400 font-bold mt-0.5">
                      {activeTestimonial.childNameAge}
                    </p>
                  </div>
                </div>

                <div className="text-center sm:text-right">
                  <span className="text-[10px] sm:text-xs font-mono font-black uppercase text-brand-secondary bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg whitespace-nowrap">
                    📍 {activeTestimonial.location}
                  </span>
                  
                  {activeTestimonial.id.startsWith("custom-") && (
                    <button
                      onClick={() => handleDeleteTestimonial(activeTestimonial.id)}
                      className="block text-[10px] text-rose-400 font-black hover:underline mt-3 mx-auto sm:ml-auto cursor-pointer uppercase tracking-wider"
                    >
                      Delete Testimonial
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>

          {/* Slider controls (Frosted pill buttons) */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 glass bg-white/5 border border-white/10 rounded-full text-slate-200 hover:border-brand-secondary hover:text-brand-secondary shadow-lg transition-all cursor-pointer"
            >
              <ChevronLeft size={18} />
            </button>
            <span className="text-xs font-mono font-black text-slate-400">
              {currentIndex + 1} of {testimonials.length} Parents
            </span>
            <button
              onClick={handleNext}
              className="p-3 glass bg-white/5 border border-white/10 rounded-full text-slate-200 hover:border-brand-secondary hover:text-brand-secondary shadow-lg transition-all cursor-pointer"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Dynamic Parental Testimonial Studio block */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          {!showAddForm ? (
            <button
              onClick={() => setShowAddForm(true)}
              className="inline-flex items-center space-x-2.5 glass bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 font-extrabold px-6 py-3.5 rounded-full text-xs sm:text-sm cursor-pointer shadow-xl transition-all"
            >
              <Plus size={14} className="text-brand-secondary" />
              <span>Have a Success Story? Add a Testimonial</span>
            </button>
          ) : (
            <div className="glass p-6 sm:p-8 rounded-3xl border border-white/10 text-left shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-white/5 pb-4">
                <h4 className="text-base font-black text-white font-display">
                  Submit a New Success Story
                </h4>
                <button
                  onClick={() => setShowAddForm(false)}
                  className="text-xs text-slate-400 font-extrabold hover:text-white cursor-pointer"
                >
                  Cancel
                </button>
              </div>

              {successMsg && (
                <div className="p-4 bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 rounded-xl text-xs font-black flex items-center space-x-2.5 animate-bounce">
                  <Check size={16} className="text-brand-success" />
                  <span>{successMsg}</span>
                </div>
              )}

              <form onSubmit={handleAddTestimonial} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Parent Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-300 uppercase tracking-widest">Parent Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Meenakshi Sunder"
                    value={newParentName}
                    onChange={(e) => setNewParentName(e.target.value)}
                    className="w-full glass bg-white/5 border border-white/10 focus:border-brand-secondary text-white rounded-xl py-2.5 px-4 text-xs font-semibold outline-hidden"
                  />
                </div>

                {/* Child Name & Age */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-300 uppercase tracking-widest">Child Name & Age</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Mother of Rohan (10 Years)"
                    value={newChildInfo}
                    onChange={(e) => setNewChildInfo(e.target.value)}
                    className="w-full glass bg-white/5 border border-white/10 focus:border-brand-secondary text-white rounded-xl py-2.5 px-4 text-xs font-semibold outline-hidden"
                  />
                </div>

                {/* Parent Location */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-300 uppercase tracking-widest">City & Country</label>
                  <input
                    type="text"
                    placeholder="e.g. Hubballi, India"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full glass bg-white/5 border border-white/10 focus:border-brand-secondary text-white rounded-xl py-2.5 px-4 text-xs font-semibold outline-hidden"
                  />
                </div>

                {/* Rating */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-300 uppercase tracking-widest">Rating (Stars)</label>
                  <select
                    value={newRating}
                    onChange={(e) => setNewRating(Number(e.target.value))}
                    className="w-full glass bg-white/5 border border-white/10 focus:border-brand-secondary text-white rounded-xl py-2.5 px-4 text-xs font-semibold outline-hidden"
                  >
                    <option value={5}>⭐⭐⭐⭐⭐ (5/5)</option>
                    <option value={4}>⭐⭐⭐⭐ (4/5)</option>
                  </select>
                </div>

                {/* Avatar Presets Selection */}
                <div className="sm:col-span-2 space-y-2">
                  <label className="text-xs font-black text-slate-300 uppercase tracking-widest block">Select Profile Photo Avatar</label>
                  <div className="flex flex-wrap gap-4">
                    {avatarPresets.map((preset) => (
                      <label key={preset.id} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="avatar-group"
                          value={preset.id}
                          checked={newAvatar === preset.id}
                          onChange={() => setNewAvatar(preset.id)}
                          className="text-brand-secondary focus:ring-0 cursor-pointer"
                        />
                        <img
                          src={preset.url}
                          alt={preset.label}
                          className={`w-10 h-10 rounded-full object-cover border-2 transition-all ${newAvatar === preset.id ? 'border-brand-secondary scale-110 shadow-lg' : 'border-white/10'}`}
                          referrerPolicy="no-referrer"
                        />
                      </label>
                    ))}
                  </div>
                </div>

                {/* Testimonial Quote */}
                <div className="sm:col-span-2 space-y-1.5">
                  <label className="text-xs font-black text-slate-300 uppercase tracking-widest">Testimonial Quote / Success Story</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Describe how the weekend live classes helped your child understand prompt engineering, decrease negative screen hours, or build custom coding portfolios..."
                    value={newQuote}
                    onChange={(e) => setNewQuote(e.target.value)}
                    className="w-full glass bg-white/5 border border-white/10 focus:border-brand-secondary text-white rounded-xl p-3.5 text-xs font-semibold outline-hidden"
                  />
                </div>

                {/* Submit button */}
                <div className="sm:col-span-2 pt-2">
                  <button
                    type="submit"
                    className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white font-black py-3 rounded-xl text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-all cursor-pointer"
                  >
                    Post Testimonial Live
                  </button>
                </div>

              </form>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
