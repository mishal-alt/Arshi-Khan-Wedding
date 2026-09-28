"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { Ornament } from "../ui/Ornament";
import { coupleData } from "../../data/weddingData";

const familyCard =
  "frame-brass relative rounded-md px-3 py-6 flex flex-col items-center justify-center text-center bg-wine-900";

export const CoupleSection: React.FC = () => {
  return (
    <section id="couple" className="section-paper pattern-on-paper py-24 px-4 text-center overflow-hidden">
      <div className="w-full max-w-xs mx-auto relative z-10">
        {/* Top Tracking Header */}
        <SectionHeading eyebrow="THE BLESSED COUPLE" title="Bride & Groom" className="mb-10" />

        {/* Central Couple Portrait Card (arched frame) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-[250px] mx-auto mb-9 group"
        >
          <div className="p-2 rounded-[130px_130px_4px_4px] bg-cream border border-brass-600/60 shadow-[0_14px_28px_-18px_rgba(61,26,32,0.6)]">
            <div className="p-1 rounded-[122px_122px_2px_2px] border border-rose-500/40">
              <div className="w-full h-[320px] rounded-[118px_118px_0_0] overflow-hidden">
                <img
                  src={coupleData.image || "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop"}
                  alt="Arshi & Arish"
                  className="w-full h-full object-cover object-[50%_35%] sepia-[.22] contrast-[1.03] group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Calligraphy Couple Names */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="mb-8"
        >
          <p className="font-calligraphy text-wine-900">
            <span className="block text-[2.8rem] leading-[1.15]">{coupleData.brideName}</span>
            <span className="block mx-auto my-1 h-px w-14 bg-rose-500/60" />
            <span className="block text-xl text-brass-600 my-0.5">&amp;</span>
            <span className="block text-[1.75rem] leading-[1.25] text-wine-800">{coupleData.groomName}</span>
          </p>
        </motion.div>

        <Ornament tone="light" className="mb-10" />

        {/* Family Cards Side by Side */}
        <div className="grid grid-cols-2 gap-3.5 text-center">
          {/* Bride's Family Card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={familyCard}
          >
            <span className="text-[8px] uppercase tracking-[0.25em] text-brass-400 font-semibold mb-3 font-poppins">
              BRIDE&apos;S FAMILY
            </span>
            <span className="text-[1.7rem] leading-none font-calligraphy text-brass-300 mb-3">
              Arshi
            </span>
            <span className="text-[7px] uppercase tracking-[0.25em] text-paper/55 font-medium mb-1.5 font-poppins">
              DAUGHTER OF
            </span>
            <span className="text-[11px] font-playfair text-paper font-medium leading-tight">
              Lt. Shahjahan Khan
            </span>
            <span className="text-[10px] text-brass-400 italic my-0.5">&amp;</span>
            <span className="text-[11px] font-playfair text-paper font-medium leading-tight">
              Mrs. Jaharan Khan
            </span>
          </motion.div>

          {/* Groom's Family Card */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={familyCard}
          >
            <span className="text-[8px] uppercase tracking-[0.25em] text-brass-400 font-semibold mb-3 font-poppins">
              GROOM&apos;S FAMILY
            </span>
            <span className="text-[1.7rem] leading-none font-calligraphy text-brass-300 mb-3">
              Arish
            </span>
            <span className="text-[7px] uppercase tracking-[0.25em] text-paper/55 font-medium mb-1.5 font-poppins">
              SON OF
            </span>
            <span className="text-[11px] font-playfair text-paper font-medium leading-tight">
              Lt. Rafat Aslam Siddiqui
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
