"use client";

import React from "react";
import { motion } from "framer-motion";
import { Flower2, Heart } from "lucide-react";
import { Ornament } from "../ui/Ornament";

export const ClosingSection: React.FC = () => {
  return (
    <footer id="closing" className="section-wine is-deep pattern-on-dark py-24 px-5 pb-28 text-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="w-full max-w-xs mx-auto flex flex-col items-center relative z-10"
      >
        {/* Floral Seal */}
        <div className="w-20 h-20 rounded-full border border-brass-500 outline outline-1 outline-brass-500/40 outline-offset-4 flex items-center justify-center text-brass-300 mb-9">
          <Flower2 className="w-9 h-9" />
        </div>

        {/* Thank You Message */}
        <h2 className="text-[1.9rem] leading-tight font-playfair font-bold text-brass-300 mb-4">
          Thank You & Salam
        </h2>
        <p className="text-[12.5px] text-paper/80 font-poppins leading-[1.9] mb-9 font-light">
          We look forward to celebrating this sacred milestone with you. May Allah shower our families with affection, understanding, and eternal peace.
        </p>

        {/* Prayer Box */}
        <div className="frame-brass w-full rounded-md px-6 py-8 mb-10 bg-wine-900/60">
          <span className="text-[10px] uppercase tracking-[0.28em] text-brass-400 font-semibold block mb-3 font-poppins">
            A Prayer For The Couple
          </span>
          <p className="text-[13.5px] font-playfair italic text-brass-300 leading-relaxed">
            &ldquo;Barakallahu lakuma wa baraka alaikuma wa jama&apos;a baynakuma fi khair.&rdquo;
          </p>
          <span className="text-[11px] text-paper/60 font-poppins mt-3 block leading-relaxed">
            (May Allah bless you both and join you together in goodness.)
          </span>
        </div>

        <Ornament className="mb-6" />

        {/* Monogram Seal / Signature */}
        <div className="flex items-center gap-3 font-calligraphy my-1 text-brass-300">
          <span className="text-5xl text-rose-300">Arshi</span>
          <Heart className="w-4 h-4 fill-rose-500 text-rose-500" />
          <span className="text-3xl">Arish</span>
        </div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-paper/50 font-poppins mt-4">
          14 NOVEMBER 2026 • BHOPAL
        </p>
      </motion.div>
    </footer>
  );
};
