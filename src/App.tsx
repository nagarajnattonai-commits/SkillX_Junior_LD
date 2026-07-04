/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ProblemSolution from "./components/ProblemSolution";
import Curriculum from "./components/Curriculum";
import ToolsGrid from "./components/ToolsGrid";
import Outcomes from "./components/Outcomes";
import WhoCanJoin from "./components/WhoCanJoin";
import ComparisonTable from "./components/ComparisonTable";
import Testimonials from "./components/Testimonials";
import LeadForm from "./components/LeadForm";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import ConversionTriggers from "./components/ConversionTriggers";

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
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

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text flex flex-col justify-between selection:bg-brand-primary/20">
      
      {/* 1. HEADER (STAYS STICKY TOP) */}
      <Header onBookDemoClick={handleOpenDemoModal} />

      {/* 2. DYNAMIC LANDING SECTIONS */}
      <main className="flex-grow">
        
        {/* HERO HEADER SECTION */}
        <Hero onCtasClick={handleScrollToSection} onBookDemoClick={handleOpenDemoModal} />

        {/* REASSURING STATISTICS METRICS */}
        <Stats />

        {/* THE DILEMMA & THE CURE GRID */}
        <ProblemSolution />

        {/* EXPANDABLE ACCORDION WEEK-BY-WEEK RoadMap */}
        <Curriculum />

        {/* INTERACTIVE 20 AI TOOLS SHOWCASE */}
        <ToolsGrid />

        {/* ACCUMULATED OUTCOMES & DYNAMIC CERTIFICATE SIMULATOR */}
        <Outcomes />

        {/* BENTO COHORT ELIGIBILITY CARD GRID */}
        <WhoCanJoin />

        {/* COMPARISON METRIC CHECKLIST SHEET */}
        <ComparisonTable />

        {/* PARENTAL TESTIMONIAL SLIDER & SUBMIT STUDIO */}
        <Testimonials />

        {/* ACCORDION FAQ DIRECTORY */}
        <FAQ />

      </main>

      {/* 3. FOOTER (ADDRESS, SCHEDULES, LEGAL DISCLAIMERS) */}
      <Footer />

      {/* 4. FLOATING TRIGGER ENGINES (STICKY BOTTOM, WHATSAPP, EXIT INTENT MODAL) */}
      <ConversionTriggers onBookDemoClick={handleOpenDemoModal} />

      {/* 5. GORGEOUS GLASSMORPHIC POPUP MODAL (PINK & BLUE COMBINATION) */}
      <LeadForm isOpen={isDemoModalOpen} onClose={() => setIsDemoModalOpen(false)} />

    </div>
  );
}
