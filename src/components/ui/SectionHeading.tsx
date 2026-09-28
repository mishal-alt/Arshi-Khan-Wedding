"use client";

import React from "react";
import { motion } from "framer-motion";
import { Ornament } from "./Ornament";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  tone?: "dark" | "light";
  className?: string;
}

/** Shared section header: ruled small-caps label, serif title, optional italic subtitle. */
export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  className = "mb-10",
}) => {
  const onDark = tone === "dark";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`text-center ${className}`}
    >
      <div className="flex items-center justify-center gap-3 mb-4">
        <span className={`h-px w-8 ${onDark ? "bg-brass-400/60" : "bg-brass-600/50"}`} />
        <span
          className={`text-[10px] uppercase tracking-[0.3em] font-semibold ${
            onDark ? "text-brass-400" : "text-brass-600"
          }`}
        >
          {eyebrow}
        </span>
        <span className={`h-px w-8 ${onDark ? "bg-brass-400/60" : "bg-brass-600/50"}`} />
      </div>

      <h2
        className={`text-[2.1rem] leading-tight font-playfair font-bold ${
          onDark ? "text-brass-300" : "text-wine-900"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p className={`text-[13px] font-playfair italic mt-2 ${onDark ? "text-paper/70" : "text-ink/60"}`}>
          {subtitle}
        </p>
      )}

      <Ornament tone={onDark ? "dark" : "light"} className="mt-5" />
    </motion.div>
  );
};
