"use client";

import React, { useState, useEffect, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { OpeningCover } from "@/components/OpeningCover";
import { HeroSection } from "@/components/HeroSection";
import { CoupleSection } from "@/components/CoupleSection";
import { EventsSection } from "@/components/EventsSection";
import { FamilySection } from "@/components/FamilySection";
import { VenueSection } from "@/components/VenueSection";
import { ClosingSection } from "@/components/ClosingSection";
import { FloatingMusic } from "@/components/FloatingMusic";
import { FloatingDecorations } from "@/components/FloatingDecorations";

function WeddingContent() {
  const searchParams = useSearchParams();
  const guestParam = searchParams.get("guest");
  const guestName = guestParam ? decodeURIComponent(guestParam) : "";

  const [viewState, setViewState] = useState<"loader" | "home">("loader");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [songUrl, setSongUrl] = useState<string>("/music/wedding-song.mp3");

  // Fetch active wedding song from API
  useEffect(() => {
    fetch("/api/music/current")
      .then((res) => res.json())
      .then((data) => {
        if (data?.activeSongUrl) {
          setSongUrl(data.activeSongUrl);
        }
      })
      .catch(() => {});
  }, []);

  // Initialize Audio element
  useEffect(() => {
    const audio = new Audio(songUrl);
    audio.volume = 0.55;
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
    };
  }, [songUrl]);

  // Handle Double-click to toggle pause/resume anywhere on the page
  const handleDoubleClick = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  const handleEnterInvitation = () => {
    setViewState("home");
  };

  const handlePlayAudio = () => {
    audioRef.current?.play().catch((err) => {
      console.warn("Autoplay blocked:", err);
    });
  };

  return (
    <>
      {/* 1. Opening Cover Screen (P & S Monogram) */}
      {viewState === "loader" && (
        <OpeningCover
          onEnter={handleEnterInvitation}
          onPlayAudio={handlePlayAudio}
        />
      )}

      {/* 2. Main Wedding Invitation */}
      {viewState === "home" && (
        <div
          onDoubleClick={handleDoubleClick}
          title="Double-click anywhere to pause or resume background music"
          className="relative min-h-screen bg-[#1a0c02] text-[#F5E6C8]"
        >
          {/* Ambient Particles, Falling Rose Petals, Rising Lanterns, Butterflies */}
          <FloatingDecorations />

          {/* Section 1: Hero Wedding Card with Arch Frame & Circular Portrait */}
          <HeroSection guestName={guestName} />

          {/* Section 2: Couple Introduction & Love Story Gallery */}
          <CoupleSection />

          {/* Section 3: Celebrations & Itinerary Schedule */}
          <EventsSection />

          {/* Section 4: Family Blessings & Introductions */}
          <FamilySection />

          {/* Section 5: Venue & Interactive Map */}
          <VenueSection />

          {/* Section 6: RSVP & Heartfelt Closing */}
          <ClosingSection guestName={guestName} />

          {/* Floating Music Player Pill */}
          <FloatingMusic audioRef={audioRef} />
        </div>
      )}
    </>
  );
}

export default function Page() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#1a0c02] flex items-center justify-center">
          <div className="text-[#C9A96E] font-serif tracking-widest text-sm uppercase">
            Loading Invitation…
          </div>
        </div>
      }
    >
      <WeddingContent />
    </Suspense>
  );
}
