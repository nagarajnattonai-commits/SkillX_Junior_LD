/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Phone, ArrowRight, Menu, X } from "lucide-react";
import logoImage from "../assets/images/logo_1782972143331.jpg";

interface HeaderProps {
  onBookDemoClick: () => void;
}

export default function Header({ onBookDemoClick }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Track scroll position for sticky background effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-350 ${
        isScrolled
          ? "glass bg-slate-950/80 backdrop-blur-md shadow-2xl border-b border-white/5 py-2.5"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* LOGO with white capsule background to ensure logo's clarity */}
          <div
            className="flex items-center select-none group h-12 bg-white px-2 py-1.5 rounded-xl border border-white/15 shadow-md"
          >
            <img
              src={logoImage}
              alt="NATTON SkillX Junior Logo"
              className="h-11 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-7">
            <button
              onClick={() => scrollToSection("why-ai")}
              className="text-xs sm:text-sm font-extrabold text-slate-300 hover:text-brand-secondary transition-colors cursor-pointer uppercase tracking-wider"
            >
              Why AI Early?
            </button>
            <button
              onClick={() => scrollToSection("curriculum")}
              className="text-xs sm:text-sm font-extrabold text-slate-300 hover:text-brand-secondary transition-colors cursor-pointer uppercase tracking-wider"
            >
              Curriculum
            </button>
            <button
              onClick={() => scrollToSection("tools")}
              className="text-xs sm:text-sm font-extrabold text-slate-300 hover:text-brand-secondary transition-colors cursor-pointer uppercase tracking-wider"
            >
              AI Tools
            </button>
            <button
              onClick={() => scrollToSection("program-details")}
              className="text-xs sm:text-sm font-extrabold text-slate-300 hover:text-brand-secondary transition-colors cursor-pointer uppercase tracking-wider"
            >
            
              FAQs
            </button>
          </nav>

          {/* Contact Details & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+917795512226"
              className="flex items-center space-x-2 text-slate-200 hover:text-brand-secondary transition-colors"
            >
              <div className="p-2 bg-white/5 border border-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Phone size={14} className="text-brand-secondary" />
              </div>
              <span className="text-xs sm:text-sm font-black font-mono">+91 77955 12226</span>
            </a>
            
            <button
              onClick={onBookDemoClick}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-xs sm:text-sm font-black rounded-full group bg-gradient-to-br from-brand-secondary to-brand-accent group-hover:from-brand-secondary group-hover:to-brand-accent hover:text-white dark:text-white cursor-pointer shadow-lg"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-950 rounded-full group-hover:bg-opacity-0 text-white font-black flex items-center space-x-2">
                <span>Book Free Demo</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center space-x-3 md:hidden">
            <a
              href="tel:+917795512226"
              className="p-2 bg-white/5 text-slate-200 border border-white/5 rounded-full hover:bg-white/10 transition-colors"
              title="Call Admissions"
            >
              <Phone size={16} className="text-brand-secondary" />
            </a>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 bg-white/5 text-slate-200 border border-white/5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass border-t border-white/5 shadow-2xl absolute top-full left-0 right-0 py-6 px-4 space-y-4 animate-fade-in bg-slate-950/95 backdrop-blur-xl">
          <button
            onClick={() => scrollToSection("why-ai")}
            className="block w-full text-left py-2 text-base font-black text-slate-200 hover:text-brand-secondary"
          >
            Why Learn AI Early?
          </button>
          <button
            onClick={() => scrollToSection("curriculum")}
            className="block w-full text-left py-2 text-base font-black text-slate-200 hover:text-brand-secondary"
          >
            Curriculum
          </button>
          <button
            onClick={() => scrollToSection("tools")}
            className="block w-full text-left py-2 text-base font-black text-slate-200 hover:text-brand-secondary"
          >
            AI Tools
          </button>
          <button
            onClick={() => scrollToSection("program-details")}
            className="block w-full text-left py-2 text-base font-black text-slate-200 hover:text-brand-secondary"
          >
            Program Details
          </button>
          <button
            onClick={() => scrollToSection("faqs")}
            className="block w-full text-left py-2 text-base font-black text-slate-200 hover:text-brand-secondary"
          >
            FAQs
          </button>
          
          <div className="pt-4 border-t border-white/5 space-y-4">
            <div className="flex items-center justify-between text-slate-300 font-mono text-xs font-black bg-white/5 border border-white/5 p-3 rounded-xl">
              <span>Direct Admissions Hotline:</span>
              <a href="tel:+917795512226" className="text-brand-secondary font-black">
                +91 77955 12226
              </a>
            </div>
            
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onBookDemoClick();
              }}
              className="w-full bg-gradient-to-r from-brand-secondary to-brand-accent text-slate-950 font-black py-3 px-4 rounded-xl shadow-lg flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Book FREE Demo Class</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
