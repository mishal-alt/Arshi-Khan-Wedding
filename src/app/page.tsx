"use client";

import React, { useState } from "react";
import { LoadingScreen } from "../components/sections/LoadingScreen";
import { HeroSection } from "../components/sections/HeroSection";
import { GreetingSection } from "../components/sections/GreetingSection";
import { CoupleSection } from "../components/sections/CoupleSection";
import { EventDetails } from "../components/sections/EventDetails";
import { StoryTimeline } from "../components/sections/StoryTimeline";
import { WishesSection } from "../components/sections/WishesSection";
import { ClosingSection } from "../components/sections/ClosingSection";
import { FloatingControls } from "../components/ui/FloatingControls";
import { coupleData } from "../data/weddingData";

export default function Home() {
  const [hasEntered, setHasEntered] = useState<boolean>(false);
  const [musicRequested, setMusicRequested] = useState<boolean>(false);

  const handleEnterCelebration = () => {
    setHasEntered(true);
  };

  return (
    <main className="w-full min-h-screen bg-[#11100F] flex items-center justify-center py-0 sm:py-6 sm:px-4">
      {/* 
        Mobile-first 390px Container: 
        Full width on mobile screen, exact 390px simulated luxury phone frame on larger screens 
      */}
      <div className="mobile-invitation-container min-h-screen sm:min-h-[844px] sm:max-h-[94vh] sm:rounded-[36px] sm:overflow-y-auto sm:shadow-2xl sm:ring-8 sm:ring-[#8B6B4A]/10 no-scrollbar">
        {/* Section 1: Splash Screen */}
        <LoadingScreen
          onEnter={handleEnterCelebration}
          onOpen={() => setMusicRequested(true)}
        />

        {/* Floating Controls: Scroll progress bar right inside frame & floating Audio/Share pills */}
        <FloatingControls
          audioUrl={coupleData.audioUrl}
          hasEntered={hasEntered}
          musicRequested={musicRequested}
        />

        {/* Main Vertical Scrollable Experience (Sections 2 - 10 in exact order) */}
        <div
          className={`transition-opacity duration-1000 ${hasEntered ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
        >
          {/* Section 2: Hero Section */}
          <HeroSection />

          {/* Section 3: Greeting Section */}
          <GreetingSection />

          {/* Section 4: Couple Section */}
          <CoupleSection />

          {/* Section 5: Event Details */}
          <EventDetails />

          {/* Section 6: Love Story Timeline */}
          <StoryTimeline />

          {/* Section 9: Wishes Section */}
          <WishesSection />

          {/* Section 10: Closing Section */}
          <ClosingSection />
        </div>
      </div>
    </main>
  );
}
