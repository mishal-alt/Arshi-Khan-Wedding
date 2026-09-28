"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, MessageSquareHeart, Heart, Send, PlusCircle, CheckCircle2, Mail } from "lucide-react";
import confetti from "canvas-confetti";
import { initialWishesData } from "../../data/weddingData";
import { WishComment } from "../../types";
import { SectionHeading } from "../ui/SectionHeading";

export const WishesSection: React.FC = () => {
  const [wishes, setWishes] = useState<WishComment[]>([]);
  const [name, setName] = useState("");
  const [relation, setRelation] = useState("Guest");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [likedIds, setLikedIds] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleAddWish = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim() || isSubmitting) return;

    setIsSubmitting(true);

    const wishName = name.trim();
    const wishRelation = relation.trim() || "Guest";
    const wishMessage = message.trim();

    // 1. Send to WhatsApp
    const whatsappMessage = encodeURIComponent(`Wedding Wish from ${wishName} (${wishRelation}):\n\n${wishMessage}`);
    window.open(`https://wa.me/918871529952?text=${whatsappMessage}`, "_blank");

    // 2. Add to UI live board right away
    const newWish: WishComment = {
      id: `w-${Date.now()}`,
      name: wishName,
      relation: wishRelation,
      message: wishMessage,
      timestamp: "Just now",
      likes: 1,
    };

    setWishes([newWish, ...wishes]);
    setName("");
    setMessage("");
    setIsSubmitting(false);
    setShowForm(false);

    // 3. Trigger celebratory golden confetti
    try {
      confetti({
        particleCount: 130,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#C4A484", "#8B6B4A", "#D4AF37", "#10B981"],
      });
    } catch (e) {
      console.log("Confetti triggered");
    }
  };

  const toggleLike = (id: string) => {
    if (likedIds.includes(id)) {
      setLikedIds(likedIds.filter((i) => i !== id));
      setWishes(
        wishes.map((w) => (w.id === id ? { ...w, likes: Math.max(0, w.likes - 1) } : w))
      );
    } else {
      setLikedIds([...likedIds, id]);
      setWishes(wishes.map((w) => (w.id === id ? { ...w, likes: w.likes + 1 } : w)));
    }
  };

  return (
    <section id="wishes" className="section-paper pattern-on-paper py-24 px-5">
      <div className="w-full max-w-xs mx-auto relative z-10">
        {/* Section Header */}
        <SectionHeading
          eyebrow="WORDS OF BLESSING"
          title="Guest Wishes"
          subtitle="Send your heartfelt prayers & wishes"
          className="mb-9"
        />

        {/* Add Wish Trigger / Form */}
        <div className="mb-8">
          {!showForm ? (
            <button
              onClick={() => setShowForm(true)}
              className="w-full py-4 rounded-md bg-wine-900 text-brass-300 border border-brass-500 font-semibold text-[11px] uppercase tracking-[0.22em] flex items-center justify-center gap-2 active:bg-wine-950 hover:bg-wine-800 transition-colors cursor-pointer"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Send a Blessing</span>
            </button>
          ) : (
            <motion.form
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onSubmit={handleAddWish}
              className="card-paper rounded-md p-6"
            >
              <h3 className="text-base font-playfair font-bold text-wine-900 mb-1 text-center">
                Leave Your Blessing
              </h3>
              <p className="text-[10px] text-ink/60 text-center font-poppins mb-4">
                Your message will be sent via WhatsApp
              </p>
              <input
                type="text"
                placeholder="Your Name (e.g. Uncle Rashid)"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={isSubmitting}
                className="w-full text-xs p-3 rounded-md border border-brass-500/30 bg-cream text-ink placeholder:text-ink/40 mb-2.5 outline-none focus:border-wine-800 focus:ring-2 focus:ring-wine-800/15 transition disabled:opacity-50"
              />
              <select
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                disabled={isSubmitting}
                className="w-full text-xs p-3 rounded-md border border-brass-500/30 bg-cream text-wine-900 mb-2.5 outline-none focus:border-wine-800 focus:ring-2 focus:ring-wine-800/15 transition disabled:opacity-50"
              >
                <option value="Family">Family Member</option>
                <option value="Close Friend">Close Friend</option>
                <option value="Colleague">Colleague</option>
                <option value="Well Wisher">Well Wisher</option>
              </select>
              <textarea
                placeholder="Write your heartfelt wish or prayer..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={3}
                disabled={isSubmitting}
                className="w-full text-xs p-3 rounded-md border border-brass-500/30 bg-cream text-ink placeholder:text-ink/40 mb-3.5 outline-none focus:border-wine-800 focus:ring-2 focus:ring-wine-800/15 transition disabled:opacity-50"
              />
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  disabled={isSubmitting}
                  className="flex-[0.8] py-3 rounded-md border border-brass-500/40 text-wine-900 text-xs font-semibold cursor-pointer disabled:opacity-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-[1.4] py-3 rounded-md bg-wine-900 text-brass-300 border border-brass-500 text-xs font-semibold whitespace-nowrap flex items-center justify-center gap-1.5 shadow-md cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Sparkles className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <MessageSquareHeart className="w-3.5 h-3.5" />
                      <span>Send via WhatsApp</span>
                    </>
                  )}
                </button>
              </div>
            </motion.form>
          )}
        </div>

        {/* Wishes List */}
        <div className="flex flex-col gap-4">
          <AnimatePresence>
            {wishes.map((wish, index) => (
              <motion.div
                key={wish.id}
                initial={{ opacity: 0, y: 35, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="card-paper rounded-md p-5 relative overflow-hidden"
              >
                {/* Decorative top accent */}
                <div className="absolute top-0 left-0 w-1.5 h-full bg-brass-500" />

                <div className="flex justify-between items-start mb-2 pl-2">
                  <div>
                    <h4 className="text-sm font-playfair font-bold text-wine-900 flex items-center gap-1.5">
                      {wish.name}
                      <span className="text-[10px] font-poppins font-normal text-brass-600 bg-cream px-2 py-0.5 rounded-full border border-brass-500/30">
                        {wish.relation}
                      </span>
                    </h4>
                  </div>
                  <span className="text-[10px] font-poppins text-ink/50">
                    {wish.timestamp}
                  </span>
                </div>

                <p className="text-[13px] font-playfair italic text-ink/85 leading-relaxed pl-2 mb-3">
                  &ldquo;{wish.message}&rdquo;
                </p>

                <div className="flex justify-end pl-2">
                  <button
                    onClick={() => toggleLike(wish.id)}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-poppins transition-all cursor-pointer ${likedIds.includes(wish.id)
                        ? "bg-wine-900 text-brass-300 shadow-sm scale-105"
                        : "bg-cream text-wine-900 hover:bg-parchment border border-brass-500/30"
                      }`}
                  >
                    <Heart
                      className={`w-3.5 h-3.5 ${likedIds.includes(wish.id) ? "fill-brass-400 text-brass-400" : "text-brass-600"
                        }`}
                    />
                    <span>{wish.likes}</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
