"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Navigation, Sparkles, HeartHandshake } from "lucide-react";
import { eventsData } from "../../data/weddingData";
import { SectionHeading } from "../ui/SectionHeading";

const row = "flex items-start gap-3.5 py-3.5";
const rowIcon = "w-4 h-4 text-brass-600 shrink-0 mt-0.5";

export const EventDetails: React.FC = () => {
  return (
    <section id="events" className="section-parchment pattern-on-paper py-24 px-5">
      <div className="w-full max-w-xs mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeading
          eyebrow="SACRED CELEBRATIONS"
          title="Event Details"
          subtitle="We eagerly await your gracious presence"
        />

        {/* Venue Cards */}
        <div className="flex flex-col gap-8">
          {eventsData.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="card-paper rounded-md overflow-hidden"
            >
              {/* Wine header band */}
              <div className="bg-wine-900 px-6 pt-6 pb-6 border-b-2 border-brass-500">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[9px] uppercase tracking-[0.28em] text-brass-400 font-semibold">
                    {event.subtitle || "Celebration"}
                  </span>
                  <span className="text-brass-400">
                    {event.icon === "HeartHandshake" ? <HeartHandshake className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                  </span>
                </div>

                <h3 className="text-[1.65rem] leading-tight font-playfair font-bold text-brass-300">
                  {event.title}
                </h3>
              </div>

              <div className="px-6 pt-3 pb-6">
                {/* Event Time & Date */}
                <div className="flex flex-col divide-y divide-brass-600/25 text-xs font-poppins text-ink">
                  <div className={row}>
                    <Calendar className={rowIcon} />
                    <span className="font-medium">{event.date}</span>
                  </div>
                  <div className={row}>
                    <Clock className={rowIcon} />
                    <span className="font-medium">{event.time}</span>
                  </div>
                  <div className={row}>
                    <MapPin className={rowIcon} />
                    <div>
                      <span className="font-semibold block text-wine-900">{event.location}</span>
                      {event.address && (
                        <span className="text-[11px] text-ink/65 leading-relaxed block mt-0.5">{event.address}</span>
                      )}
                    </div>
                  </div>
                  {event.dressCode && (
                    <div className={row}>
                      <Sparkles className={rowIcon} />
                      <span className="font-semibold text-wine-900">
                        Dress Code: <span className="font-normal text-ink/75">{event.dressCode}</span>
                      </span>
                    </div>
                  )}
                </div>

                <p className="text-[12.5px] text-ink/70 font-playfair italic leading-[1.8] mt-3 mb-6">
                  {event.description}
                </p>

                {/* Google Maps Button */}
                <a
                  href={event.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-md bg-wine-900 text-brass-300 border border-brass-500 font-semibold text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 transition-colors active:bg-wine-950 hover:bg-wine-800"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
