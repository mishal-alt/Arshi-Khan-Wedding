"use client";

import React from "react";
import { motion } from "framer-motion";
import { Heart, Sparkles, Building2 } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

const storyItems = [
  {
    id: "beginning",
    label: "THE BEGINNING",
    title: "Two Families, One Dua",
    description:
      "What Allah has decreed shall always come to pass. Two families, bound by faith and love, came together in prayer.",
    icon: "heart",
    side: "right",
  },
  {
    id: "promise",
    label: "THE PROMISE",
    title: "Istikhara & Acceptance",
    description:
      "Guided by Allah's wisdom, both hearts found peace and acceptance in this blessed union.",
    icon: "ring",
    side: "left",
  },
  {
    id: "nikah",
    label: "14 NOVEMBER 2026",
    title: "The Sacred Nikah",
    description:
      "With the words of Allah as their bond and their families as witnesses, Arshi and Arish begin their forever.",
    icon: "mosque",
    side: "right",
  },
];

const IconNode = ({ icon }: { icon: string; side: string }) => (
  <div className="w-12 h-12 rounded-full bg-wine-950 border border-brass-500 outline outline-1 outline-brass-500/40 outline-offset-[3px] flex items-center justify-center shrink-0">
    {icon === "heart" && <Heart className="w-5 h-5 fill-brass-400 text-brass-400" />}
    {icon === "ring" && <Sparkles className="w-5 h-5 text-brass-300" />}
    {icon === "mosque" && <Building2 className="w-5 h-5 text-brass-300" />}
  </div>
);

export const StoryTimeline: React.FC = () => {
  return (
    <section id="story" className="section-wine pattern-on-dark py-24 px-5 overflow-hidden">
      <div className="w-full max-w-xs mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeading
          tone="dark"
          eyebrow="OUR JOURNEY"
          title="Our Story"
          subtitle="How Allah brought our paths together"
          className="mb-12"
        />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line running through the icon nodes */}
          <div className="absolute left-6 -translate-x-1/2 top-6 bottom-6 w-px bg-brass-500/40" />

          <div className="flex flex-col gap-9">
            {storyItems.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
                className="relative flex items-start gap-5"
              >
                <div className="relative z-10">
                  <IconNode icon={item.icon} side={item.side} />
                </div>

                <div className="flex-1 pt-0.5">
                  <span className="text-[9px] uppercase tracking-[0.28em] text-brass-400 font-semibold font-poppins block mb-1.5">
                    {item.label}
                  </span>
                  <h3 className="text-[1.1rem] font-playfair font-bold text-brass-300 leading-snug mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-paper/75 font-poppins font-light leading-[1.8]">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
