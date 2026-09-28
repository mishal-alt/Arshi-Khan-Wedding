"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { coupleData } from "../../data/weddingData";
import { Ornament } from "../ui/Ornament";

export const GreetingSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const target = new Date(coupleData.weddingDate).getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Mins", value: timeLeft.minutes },
    { label: "Secs", value: timeLeft.seconds },
  ];

  return (
    <div className="section-wine pattern-on-dark overflow-hidden">
      {/* SECTION 1: STANDALONE COUNTDOWN */}
      <section id="countdown" className="pt-20 pb-6 px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-xs mx-auto text-center"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-brass-400 font-semibold mb-5 flex items-center justify-center gap-2 font-poppins">
            <Clock className="w-3.5 h-3.5" />
            <span>COUNTDOWN TO OUR UNION</span>
          </p>

          <div className="grid grid-cols-4 gap-2">
            {timeUnits.map((unit) => (
              <div
                key={unit.label}
                className="frame-brass rounded-md py-3.5 px-1 flex flex-col items-center justify-center bg-wine-950/40"
              >
                <span className="text-[1.6rem] leading-none font-playfair font-bold text-brass-300 tabular-nums">
                  {String(unit.value).padStart(2, "0")}
                </span>
                <span className="text-[9px] uppercase tracking-[0.2em] text-paper/60 font-medium mt-2 font-poppins">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <Ornament className="w-full max-w-xs mx-auto mt-14" />
      </section>

      {/* SECTION 2: STANDALONE DIVINE BLESSING */}
      <section id="greeting" className="pt-8 pb-20 px-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-xs mx-auto"
        >
          <div className="frame-brass relative bg-wine-950/45 rounded-md px-7 py-10 text-center flex flex-col items-center">
            {/* Label */}
            <div className="flex items-center gap-3 mb-7">
              <span className="h-px w-6 bg-brass-400/60" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-brass-400 font-semibold font-poppins">
                DIVINE BLESSING
              </span>
              <span className="h-px w-6 bg-brass-400/60" />
            </div>

            {/* Bismillah Calligraphy */}
            <h2 className="text-[1.7rem] font-arabic text-brass-300 leading-[1.9] mb-1" dir="rtl" lang="ar">
              {coupleData.bismillahArabic}
            </h2>
            <p className="text-[10px] uppercase tracking-[0.22em] text-paper/55 font-poppins mb-6 italic">
              {coupleData.bismillahTransliteration}
            </p>

            <Ornament className="mb-6 scale-90" />

            {/* Islamic Greeting */}
            <h3 className="text-[15px] leading-snug font-playfair font-bold text-brass-300 mb-4 tracking-wide">
              {coupleData.islamicGreeting}
            </h3>

            {/* Invitation Message */}
            <p className="text-[12.5px] text-paper/85 font-poppins leading-[1.9] mb-8 font-light">
              {coupleData.greetingIntro}
            </p>

            {/* Quranic Verse Block */}
            <div className="w-full border-t border-b border-brass-500/40 py-6">
              <p className="text-[1.15rem] font-arabic text-brass-300 leading-[2.1] mb-4" dir="rtl" lang="ar">
                {coupleData.quranVerseArabic}
              </p>
              <p className="text-[12.5px] font-playfair italic text-paper/85 leading-relaxed mb-4">
                &ldquo;{coupleData.quranVerseEnglish}&rdquo;
              </p>
              <span className="text-[10px] uppercase tracking-[0.22em] text-brass-400 font-semibold block font-poppins">
                — {coupleData.quranReference}
              </span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};
