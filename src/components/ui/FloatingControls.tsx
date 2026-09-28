"use client";

import React, { useState, useEffect, useRef } from "react";
import { Music, VolumeX } from "lucide-react";

interface FloatingControlsProps {
  audioUrl: string;
  hasEntered: boolean;
  musicRequested: boolean;
}

export const FloatingControls: React.FC<FloatingControlsProps> = ({
  audioUrl,
  hasEntered,
  musicRequested,
}) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // Set once the guest pauses on purpose, so nothing restarts the music behind their back
  const userPausedRef = useRef<boolean>(false);

  useEffect(() => {
    const audio = new Audio(audioUrl);
    audio.loop = true;
    audio.volume = 0.5;
    audio.preload = "auto";

    // Keep the button in sync with what the audio element is really doing
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = () => {
      setIsPlaying(false);
      console.error("Background music failed to load:", audioUrl);
    };
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("error", handleError);
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("error", handleError);
      audio.removeAttribute("src");
      audio.load();
      audioRef.current = null;
    };
  }, [audioUrl]);

  // Start the music as soon as the guest opens the invitation
  useEffect(() => {
    const audio = audioRef.current;
    if (!musicRequested || !audio || userPausedRef.current || !audio.paused) return;
    audio.play().catch(() => {
      // Autoplay blocked by browser policy; the guest can use the music button
    });
  }, [musicRequested]);

  // Stop music while the tab is in the background, resume on return
  useEffect(() => {
    let resumeOnReturn = false;
    const handleVisibility = () => {
      const audio = audioRef.current;
      if (!audio) return;
      if (document.hidden) {
        resumeOnReturn = !audio.paused;
        audio.pause();
      } else if (resumeOnReturn && !userPausedRef.current) {
        resumeOnReturn = false;
        audio.play().catch(() => {});
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      userPausedRef.current = false;
      audio.play().catch((err) => console.error("Playback error:", err));
    } else {
      userPausedRef.current = true;
      audio.pause();
    }
  };

  if (!hasEntered) return null;

  return (
    <>
      {/* Top Scroll Progress Indicator right on top of mobile frame */}
      <div className="sticky top-0 left-0 right-0 z-50 h-1.5 w-full bg-[#E7D7C9]/40 backdrop-blur-sm overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-[#C4A484] via-[#8B6B4A] to-[#D4AF37] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Circular Music Button at Bottom Right */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center pointer-events-auto">
        {/* Circular Button */}
        <button
          onClick={toggleAudio}
          aria-label={isPlaying ? "Mute Background Music" : "Play Background Music"}
          title={isPlaying ? "Music Playing (Click to mute)" : "Click to play Arabic music"}
          className={`w-13 h-13 rounded-full flex items-center justify-center transition-all duration-300 shadow-2xl border-2 active:scale-90 cursor-pointer ${isPlaying
              ? "bg-[#8B6B4A] border-[#EAD0B1] shadow-[#8B6B4A]/50 ring-4 ring-[#C4A484]/30 scale-105"
              : "bg-[#8B6B4A]/90 border-[#C4A484]/60 hover:bg-[#8B6B4A] opacity-90"
            }`}
          style={{ width: "52px", height: "52px" }}
        >
          {isPlaying ? (
            <div className="relative flex items-center justify-center">
              <Music className="w-6 h-6 text-[#EAD0B1] animate-pulse" />
            </div>
          ) : (
            <div className="relative flex items-center justify-center">
              <Music className="w-6 h-6 text-[#EAD0B1]/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="w-7 h-[2px] bg-[#EAD0B1] rotate-45 rounded-full" />
              </div>
            </div>
          )}
        </button>
      </div>
    </>
  );
};
