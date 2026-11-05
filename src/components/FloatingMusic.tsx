"use client";

import React, { useState, useEffect } from "react";

interface FloatingMusicProps {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}

export const FloatingMusic: React.FC<FloatingMusicProps> = ({ audioRef }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    // Initial check
    if (!audio.paused) {
      setIsPlaying(true);
    }

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
    };
  }, [audioRef]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play().catch(() => {});
    } else {
      audio.pause();
    }
  };

  return (
    <button
      onClick={togglePlay}
      title={isPlaying ? "Pause music" : "Play music"}
      style={{
        position: "fixed",
        bottom: 20,
        right: 16,
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: 7,
        padding: "8px 14px",
        borderRadius: 30,
        border: "1px solid rgba(201,169,110,0.45)",
        background: "rgba(20,9,0,0.8)",
        backdropFilter: "blur(12px)",
        cursor: "pointer",
        boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
        transition: "opacity 0.3s, transform 0.2s",
      }}
      className="hover:scale-105 active:scale-95"
    >
      {isPlaying ? (
        /* Animated SVG Equalizer Bars */
        <svg width="14" height="14" viewBox="0 0 14 14" fill="#C9A96E">
          <rect x="0" y="4" width="2.5" height="6" rx="1">
            <animate
              attributeName="height"
              values="6;10;6"
              dur="0.8s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="4;2;4"
              dur="0.8s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="4" y="2" width="2.5" height="10" rx="1">
            <animate
              attributeName="height"
              values="10;5;10"
              dur="0.6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="2;4.5;2"
              dur="0.6s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="8" y="5" width="2.5" height="5" rx="1">
            <animate
              attributeName="height"
              values="5;9;5"
              dur="0.9s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="5;2;5"
              dur="0.9s"
              repeatCount="indefinite"
            />
          </rect>
          <rect x="11.5" y="3" width="2.5" height="8" rx="1">
            <animate
              attributeName="height"
              values="8;4;8"
              dur="0.7s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="y"
              values="3;5;3"
              dur="0.7s"
              repeatCount="indefinite"
            />
          </rect>
        </svg>
      ) : (
        /* Play Icon */
        <svg width="14" height="14" viewBox="0 0 14 14" fill="#C9A96E">
          <polygon points="2,1 13,7 2,13" />
        </svg>
      )}

      <span
        style={{
          fontFamily: "'Cinzel', serif",
          fontSize: 9,
          letterSpacing: "0.2em",
          color: "#C9A96E",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        {isPlaying ? "Playing" : "Paused"}
      </span>
    </button>
  );
};
