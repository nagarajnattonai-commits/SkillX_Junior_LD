/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Sparkles, ArrowRight, Video, Calendar, Clock, Trophy, CheckCircle, Orbit } from "lucide-react";

interface HeroProps {
  onCtasClick: (sectionId: string) => void;
  onBookDemoClick: () => void;
}

export default function Hero({ onCtasClick, onBookDemoClick }: HeroProps) {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 34, seconds: 12 });
  const [seatsFilled, setSeatsFilled] = useState(16);
  const maxSeats = 20;

  // Countdown timer logic (runs infinitely in real-time, resetting to maintain high converting urgency)
  useEffect(() => {
    const targetDate = new Date();
    targetDate.setHours(23, 59, 59, 999);
    
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      
      if (diff <= 0) {
        targetDate.setDate(targetDate.getDate() + 1);
      } else {
        const hrs = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const mins = Math.floor((diff / (1000 * 60)) % 60);
        const secs = Math.floor((diff / 1000) % 60);
        setTimeLeft({ hours: hrs, minutes: mins, seconds: secs });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Simulating small activity in scarcity seats
  useEffect(() => {
    const timer = setTimeout(() => {
      setSeatsFilled(17);
    }, 15000);
    return () => clearTimeout(timer);
  }, []);

  const benefits = [
    "Live Interactive Online Classes",
    "Only Saturdays & Sundays (1 Hr)",
    "Small Batch Learning (Max 10 kids)",
    "Hands-on Projects & AI Tools",
    "Industry Expert Mentors",
    "Certificate of Completion"
  ];

  const trustBadges = [
    { text: "Live Online", icon: Video },
    { text: "Weekend Batch", icon: Calendar },
    { text: "Practical Learning", icon: Trophy },
    { text: "Future Skills", icon: Sparkles }
  ];

  const heroImagePath = "/src/assets/images/ai_classroom_kids_1782968901497.jpg";

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-slate-950">
      
      {/* 3D BACKGROUND LAYER */}
      
      {/* Perspective wireframe grid rotating slowly in depth */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[200%] h-[120%] bg-grid-3d opacity-25 -z-10 pointer-events-none" />

      {/* Realistic 3D floating orb 1 (Primary blue) */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full sphere-primary animate-float -z-10 opacity-80" />
      
      {/* Realistic 3D floating orb 2 (Cyan neon) */}
      <div className="absolute top-[60%] right-12 w-48 h-48 rounded-full sphere-secondary animate-float-delayed -z-10 opacity-75" />

      {/* Realistic 3D floating orb 3 (Purple accent) */}
      <div className="absolute bottom-10 left-1/3 w-24 h-24 rounded-full sphere-accent animate-orbit -z-10 opacity-70" style={{ animationDuration: "20s" }} />

      {/* Ambient gradient spots */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand-accent/10 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Hero Copy & CTA */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* Super Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 text-brand-secondary px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold w-fit animate-pulse-slow">
              <Sparkles size={14} className="text-brand-secondary animate-spin-slow" />
              <span>🚀 India's #1 Practical AI Program for School Students</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display leading-tight text-transparent bg-clip-text bg-gradient-to-r from-brand-secondary via-brand-accent to-brand-primary drop-shadow-[0_2px_10px_rgba(0,194,255,0.2)]">
              Prepare Your Child for the AI-Powered Future
            </h1>

            {/* Sub-badge highlighting the age and days */}
            <div className="glass bg-white/5 border border-white/10 text-white px-5 py-3 rounded-2xl shadow-2xl w-fit">
              <p className="font-extrabold text-sm sm:text-base flex items-center space-x-2.5">
                <span className="w-2.5 h-2.5 bg-brand-success rounded-full animate-ping" />
                <span className="text-gradient">Weekend Live AI Classes for Kids (Age 6–17)</span>
              </p>
            </div>

            {/* Subheadline Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-medium">
              Give your child the skills that schools don't teach. Learn <span className="text-brand-secondary font-bold">Artificial Intelligence</span>, <span className="text-brand-accent font-bold">ChatGPT</span>, <span className="text-white font-bold">Prompt Engineering</span>, and build real-world AI projects with expert mentors.
            </p>

            {/* List of Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start space-x-2.5 bg-white/5 border border-white/5 rounded-xl p-2.5 backdrop-blur-xs hover:border-white/10 transition-colors">
                  <CheckCircle size={18} className="text-brand-success mt-0.5 shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-slate-200">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Real-time Scarcity Container (Glassmorphism Facelift) */}
            <div className="glass p-5 rounded-2xl border border-white/10 space-y-4 max-w-xl shadow-[0_10px_50px_rgba(0,0,0,0.5)]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center space-x-2 text-rose-400">
                  <Clock size={16} className="animate-spin text-rose-400" style={{ animationDuration: '6s' }} />
                  <span className="text-xs font-black uppercase tracking-wider">Demo Batch Closes Soon:</span>
                </div>
                {/* Countdown Timer */}
                <div className="flex items-center space-x-1.5 font-mono text-xs font-bold text-slate-200">
                  <span className="bg-slate-900/80 border border-white/10 text-white px-2 py-1 rounded text-center min-w-[24px]">{timeLeft.hours.toString().padStart(2, '0')}</span>
                  <span className="text-slate-400 font-semibold">h</span>
                  <span className="bg-slate-900/80 border border-white/10 text-white px-2 py-1 rounded text-center min-w-[24px]">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                  <span className="text-slate-400 font-semibold">m</span>
                  <span className="bg-slate-900/80 border border-white/10 text-white px-2 py-1 rounded text-center min-w-[24px]">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                  <span className="text-slate-400 font-semibold">s</span>
                </div>
              </div>

              {/* Seats Scarcity Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold text-slate-300">
                  <span>Batch Capacity: {seatsFilled}/{maxSeats} Seats Filled</span>
                  <span className="text-brand-secondary font-mono font-extrabold">{Math.round((seatsFilled / maxSeats) * 100)}% Full</span>
                </div>
                <div className="w-full bg-slate-950/80 border border-white/5 rounded-full h-3.5 overflow-hidden p-0.5">
                  <div
                    className="bg-gradient-to-r from-brand-primary via-brand-secondary to-emerald-400 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${(seatsFilled / maxSeats) * 100}%` }}
                  />
                </div>
                <p className="text-[11px] text-amber-400 font-bold flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-ping" />
                  <span>⚠️ Only {maxSeats - seatsFilled} Free Seats Left in the Upcoming Weekend Batch!</span>
                </p>
              </div>
            </div>

            {/* Direct Pricing & Guarantee Label */}
            <div className="flex items-center space-x-3.5 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl w-fit">
              <span className="font-extrabold text-xs uppercase tracking-wider text-emerald-400">Special Launch Offer</span>
              <span className="font-black text-lg sm:text-xl font-mono text-white">₹1,999<span className="text-xs font-semibold text-slate-400">/month</span></span>
              <span className="text-[10px] font-black uppercase text-emerald-300 bg-emerald-950/40 border border-emerald-500/20 px-2.5 py-0.5 rounded-md">Limited Seats</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-3">
              <button
                onClick={onBookDemoClick}
                className="bg-brand-primary hover:bg-brand-primary/95 text-white font-extrabold px-8 py-4 rounded-full shadow-lg hover:shadow-2xl hover:shadow-brand-primary/20 transition-all hover:-translate-y-0.5 flex items-center justify-center space-x-2 text-base md:text-lg cursor-pointer group"
              >
                <span>Book FREE Demo Class</span>
                <ArrowRight size={20} className="group-hover:translate-x-1.5 transition-transform" />
              </button>
              
              <button
                onClick={() => onCtasClick("curriculum")}
                className="glass bg-white/5 hover:bg-white/10 text-white border-white/10 hover:border-white/20 font-extrabold px-8 py-4 rounded-full transition-all flex items-center justify-center space-x-2 text-base cursor-pointer"
              >
                <span>View Curriculum</span>
              </button>
            </div>

            {/* Inline Trust Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {trustBadges.map((badge, i) => {
                const Icon = badge.icon;
                return (
                  <div key={i} className="flex items-center space-x-2 text-slate-400">
                    <div className="p-1.5 bg-white/5 border border-white/5 rounded-lg text-slate-300">
                      <Icon size={14} />
                    </div>
                    <span className="text-xs font-extrabold tracking-tight">{badge.text}</span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive Hero Image with Glass Border */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient glow mesh behind frame */}
            <div className="absolute -inset-2 bg-gradient-to-r from-brand-secondary via-brand-accent to-brand-primary rounded-3xl blur-2xl opacity-20 animate-pulse-slow" />
            
            {/* Main Interactive Stage with Glass Ring */}
            <div className="relative w-full aspect-[4/3] bg-slate-900 rounded-3xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] border border-white/15 p-2">
              <div className="w-full h-full rounded-2xl overflow-hidden relative">
                <img
                  src={heroImagePath}
                  alt="Natton SkillX Junior Classroom"
                  className="w-full h-full object-cover grayscale-15 hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glass Overlay vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-70" />

                {/* Interactive Hover Floating Badges (EdTech) */}
                <div className="absolute top-4 left-4 glass bg-slate-950/80 border border-white/10 shadow-xl px-3.5 py-1.5 rounded-full flex items-center space-x-1.5 animate-float" style={{ animationDelay: '0s' }}>
                  <span className="w-2 h-2 bg-brand-success rounded-full animate-ping" />
                  <span className="text-[10px] font-black text-brand-secondary uppercase tracking-widest">Live Batch Online</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 glass bg-slate-950/80 border border-white/15 px-4.5 py-3.5 rounded-2xl flex items-center justify-between text-white shadow-2xl">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-brand-primary/20 rounded-xl text-brand-secondary border border-brand-primary/30">
                      <Sparkles size={16} className="animate-pulse" />
                    </div>
                    <div>
                      <p className="text-xs font-black tracking-wider uppercase text-brand-secondary">AI Tools Mastery</p>
                      <p className="text-[11px] text-slate-300 font-bold">Gemini, ChatGPT, Python, Canva</p>
                    </div>
                  </div>
                  <div className="text-right font-mono text-xs font-black bg-white/10 px-3 py-1.5 rounded-lg border border-white/10 text-white">
                    AGE: 6–17 Yrs
                  </div>
                </div>

                {/* 3D-feeling Floating Tags */}
                <div className="absolute top-12 right-4 glass bg-slate-950/90 border border-white/15 shadow-md px-3 py-1.5 rounded-xl text-[10px] font-black text-brand-secondary flex items-center space-x-1 animate-float-delayed" style={{ animationDelay: '2s' }}>
                  <span>🤖 Teachable Machine</span>
                </div>

                <div className="absolute bottom-24 right-4 glass bg-slate-950/90 border border-white/15 shadow-md px-3 py-1.5 rounded-xl text-[10px] font-black text-brand-accent flex items-center space-x-1 animate-float" style={{ animationDelay: '4s' }}>
                  <span>🎨 Canva AI</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
