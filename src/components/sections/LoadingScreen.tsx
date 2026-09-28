"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Flower2, Music } from "lucide-react";
import confetti from "canvas-confetti";
import { coupleData } from "../../data/weddingData";

interface LoadingScreenProps {
  onEnter: () => void;
  onOpen?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onEnter, onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleEnterClick = () => {
    if (isOpening) return;
    setIsOpening(true);
    // Called synchronously inside the click so the browser lets music start
    onOpen?.();

    // Trigger celebratory golden confetti on opening
    try {
      confetti({
        particleCount: 140,
        spread: 90,
        origin: { y: 0.55 },
        colors: ["#C4A484", "#8B6B4A", "#F8F4EF", "#D4AF37", "#FFF5C0"],
      });
    } catch (e) {
      console.log("Confetti animation triggered");
    }

    setTimeout(() => {
      setIsOpen(true);
      onEnter();
    }, 1100);
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[100] bg-[#F8F4EF] flex flex-col items-center justify-center p-6 text-center overflow-hidden selection:bg-[#C4A484]"
        >
          {/* Animated Floral Background & Soft Ambient Glow outside the card (Untouched) */}
          <div className="absolute inset-0 bg-[radial-gradient(#E7D7C9_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
          <div className="absolute w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-[#C4A484]/20 via-[#E7D7C9]/30 to-transparent blur-3xl pointer-events-none animate-pulse-glow" />

          {/* Floating Background Petals & Leaves outside the card */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-16 -right-16 w-64 h-64 border-[1px] border-[#C4A484]/20 rounded-full border-dashed pointer-events-none flex items-center justify-center"
          >
            <Flower2 className="w-12 h-12 text-[#C4A484]/20 absolute -top-6" />
          </motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-72 h-72 border-[1px] border-[#8B6B4A]/20 rounded-full border-dashed pointer-events-none flex items-center justify-center"
          >
            <Flower2 className="w-14 h-14 text-[#8B6B4A]/20 absolute -bottom-7" />
          </motion.div>

          {/* Luxury Frame Border outside inside Mobile View */}
          <div className="absolute inset-5 border border-[#C4A484]/40 rounded-[28px] pointer-events-none flex flex-col justify-between p-4 z-10">
            <div className="flex justify-between items-center text-[#8B6B4A]/70 text-[10px] tracking-widest uppercase font-poppins font-medium">
              <span>BISMILLAH</span>
              <span>14 • 11 • 2026</span>
            </div>
            <div className="flex justify-between items-center text-[#8B6B4A]/70 text-[10px] tracking-widest uppercase font-poppins font-medium">
              <span>ROYAL WEDDING</span>
              <span>BHOPAL</span>
            </div>
          </div>

          {/* Central Invitation Card Seal — Background Image ONLY INSIDE THIS AREA */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="relative bg-white/85 border border-[#C4A484]/50 rounded-[32px] p-8 max-w-xs w-full shadow-2xl flex flex-col items-center z-10 overflow-hidden"
          >
            {/* Couple Background Image ONLY INSIDE THIS CARD AREA — Slow Theme Fade-In */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden rounded-[32px]">
              <motion.img
                initial={{ opacity: 0, scale: 1.18, filter: "blur(8px)" }}
                animate={{ opacity: 0.88, scale: 1.03, filter: "blur(0px)" }}
                transition={{ duration: 3.2, ease: [0.22, 1, 0.36, 1] }}
                src="/hero-couple.jpg"
                alt="Couple Background"
                className="w-full h-full object-cover object-[50%_35%]"
              />
              {/* Soft warm gold/mocha overlay so the image is beautifully visible while text remains high contrast */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#F8F4EF]/75 via-[#F8F4EF]/35 to-[#F8F4EF]/85 pointer-events-none" />
            </div>

            {/* Content inside the card right on top of the bg image (z-10) */}
            <div className="relative z-10 w-full flex flex-col items-center">
              {/* Islamic Calligraphy Bismillah Header */}
              <p className="text-xl font-calligraphy text-[#8B6B4A] mb-3 drop-shadow-sm">
                {coupleData.bismillahArabic}
              </p>

              <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#C4A484] to-transparent my-2" />

              {/* Floral Icon Seal */}
              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="my-3 text-[#C4A484]"
              >
                <Flower2 className="w-9 h-9 sm:w-10 sm:h-10 text-[#8B6B4A] drop-shadow-md" />
              </motion.div>

              <h3 className="text-[11px] uppercase tracking-[0.3em] text-[#8B6B4A]/80 font-poppins font-semibold mb-3">
                The Wedding Invitation
              </h3>

              {/* Couple Script Names */}
              <div className="flex flex-col items-center my-3 gap-1">
                <span className="text-5xl font-calligraphy text-[#8B6B4A] leading-tight drop-shadow-md">
                  {coupleData.brideShort}
                </span>
                <motion.div
                  animate={{ scale: [1, 1.25, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                  className="text-[#C4A484] my-0.5"
                >
                  <Heart className="w-5 h-5 fill-[#C4A484]" />
                </motion.div>
                <span className="text-5xl font-calligraphy text-[#8B6B4A] leading-tight drop-shadow-md">
                  {coupleData.groomShort}
                </span>
              </div>

              <p className="text-xs font-playfair italic text-[#8B6B4A] mt-2 mb-6 tracking-wide">
                {coupleData.dateFormatted}
              </p>

              {/* Audio auto-prep indicator badge */}
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#F8F4EF]/90 border border-[#C4A484]/40 text-[#8B6B4A] text-[11px] mb-6 font-poppins shadow-sm">
                <Music className="w-3.5 h-3.5 animate-bounce text-[#C4A484]" />
                <span>Audio Prepared • Tap Below</span>
              </div>

              {/* Open Invitation Button */}
              <motion.button
                onClick={handleEnterClick}
                disabled={isOpening}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="group relative w-full py-4 rounded-full bg-gradient-to-r from-[#8B6B4A] via-[#C4A484] to-[#8B6B4A] text-[#F8F4EF] font-semibold text-xs uppercase tracking-[0.25em] shadow-xl shadow-[#8B6B4A]/25 transition-all overflow-hidden border border-white/30 cursor-pointer flex items-center justify-center gap-2"
              >
                {/* Button Shimmer Overlay */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                {isOpening ? (
                  <span className="animate-pulse flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#FFF5C0] animate-spin" />
                    Opening Royal Invitation...
                  </span>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4 text-[#FFF5C0]" />
                    <span>Open Invitation</span>
                    <Sparkles className="w-4 h-4 text-[#FFF5C0]" />
                  </>
                )}
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
