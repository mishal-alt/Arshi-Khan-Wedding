"use client";

import React from "react";
import { motion } from "framer-motion";
import { coupleData } from "../../data/weddingData";

export const HeroSection: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-between text-center px-6 pt-10 pb-8 overflow-hidden bg-[#8B6B4A] select-none"
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.img
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.52 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          src="/hero-couple.jpg"
          alt="Hero Background"
          className="w-full h-full object-cover object-[50%_35%]"
        />
        {/* Warm Mocha & Gold Overlay to ensure crisp, readable text */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#8B6B4A]/80 via-[#7F6142]/70 to-[#73573A]/90 pointer-events-none" />
      </div>

      {/* Subtle Texture Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none z-0" />

      {/* Decorative Corner Floral Leaves (Top Left) */}
      <div className="absolute top-0 left-0 w-32 h-32 pointer-events-none opacity-25 text-white">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M0,0 C30,10 50,30 60,60 C40,45 25,35 0,30 Z" />
          <path d="M0,15 C20,20 35,35 45,55 C30,40 15,30 0,25 Z" />
          <circle cx="20" cy="20" r="2" />
          <circle cx="35" cy="15" r="1.5" />
          <circle cx="15" cy="35" r="1.5" />
        </svg>
      </div>

      {/* Decorative Corner Floral Leaves (Top Right) */}
      <div className="absolute top-0 right-0 w-32 h-32 pointer-events-none opacity-25 text-white transform scale-x-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M0,0 C30,10 50,30 60,60 C40,45 25,35 0,30 Z" />
          <path d="M0,15 C20,20 35,35 45,55 C30,40 15,30 0,25 Z" />
          <circle cx="20" cy="20" r="2" />
          <circle cx="35" cy="15" r="1.5" />
          <circle cx="15" cy="35" r="1.5" />
        </svg>
      </div>

      {/* Decorative Corner Floral Leaves (Bottom Left) */}
      <div className="absolute bottom-0 left-0 w-32 h-32 pointer-events-none opacity-25 text-white transform scale-y-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M0,0 C30,10 50,30 60,60 C40,45 25,35 0,30 Z" />
          <path d="M0,15 C20,20 35,35 45,55 C30,40 15,30 0,25 Z" />
          <circle cx="20" cy="20" r="2" />
          <circle cx="35" cy="15" r="1.5" />
          <circle cx="15" cy="35" r="1.5" />
        </svg>
      </div>

      {/* Decorative Corner Floral Leaves (Bottom Right) */}
      <div className="absolute bottom-0 right-0 w-32 h-32 pointer-events-none opacity-25 text-white transform scale-[-1]">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-current">
          <path d="M0,0 C30,10 50,30 60,60 C40,45 25,35 0,30 Z" />
          <path d="M0,15 C20,20 35,35 45,55 C30,40 15,30 0,25 Z" />
          <circle cx="20" cy="20" r="2" />
          <circle cx="35" cy="15" r="1.5" />
          <circle cx="15" cy="35" r="1.5" />
        </svg>
      </div>

      {/* Top Monogram Initials */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 pt-2"
      >
        <span className="text-2xl font-calligraphy text-white tracking-widest block">
          A & A
        </span>
      </motion.div>

      {/* Center Main Invitation Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 my-auto flex flex-col items-center w-full max-w-xs"
      >
        {/* Bismillah Gold Spaced Subtitle */}
        <p className="text-[9px] sm:text-[10px] tracking-[0.35em] uppercase font-poppins text-white font-medium mb-8 text-center">
          BISMILLĀHIR RAḤMĀNIR RAḤĪM
        </p>

        {/* Stacked Serif Names */}
        <div className="flex flex-col items-center my-2">
          <h1 className="text-[2.75rem] sm:text-6xl font-playfair font-normal text-white tracking-wide leading-none drop-shadow-sm my-1">
            {coupleData.brideName || "Arshi Khan"}
          </h1>

          <span className="text-3xl sm:text-4xl font-calligraphy text-white my-3.5 block italic">
            &
          </span>

          <h1 className="text-4xl sm:text-5xl font-playfair font-normal text-white tracking-wide leading-none drop-shadow-sm my-1">
            {coupleData.groomName || "Arish Siddiqui"}
          </h1>
        </div>

        {/* Calligraphy Subtitle */}
        <p className="text-2xl font-calligraphy text-white tracking-normal mt-5 mb-8">
          are getting married
        </p>

        {/* Wedding Date with Dots */}
        <div className="text-sm sm:text-base tracking-[0.35em] text-white font-medium font-poppins mb-2">
          1 4 • 1 1 • 2 0 2 6
        </div>


      </motion.div>

      {/* Scroll Indicator at Bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="relative z-10 flex flex-col items-center gap-2 mt-4"
      >
        <motion.span
          animate={{ height: [24, 34, 24], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[1px] bg-gradient-to-b from-white to-transparent"
        />
        <span className="text-[9px] tracking-[0.35em] uppercase text-white font-poppins font-medium">
          S C R O L L
        </span>
      </motion.div>
    </section>
  );
};
