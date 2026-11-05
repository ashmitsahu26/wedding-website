"use client";

import React, { useState, useEffect } from "react";
import { ArchOutlineSVG, FloatingStarsCanvas, GoldDiamondDivider } from "./Ornaments";

interface OpeningCoverProps {
  onEnter: () => void;
  onPlayAudio: () => void;
}

export const OpeningCover: React.FC<OpeningCoverProps> = ({
  onEnter,
  onPlayAudio,
}) => {
  const [clicked, setClicked] = useState(false);
  const [fadedOut, setFadedOut] = useState(false);
  const [glowReady, setGlowReady] = useState(false);
  const [rippling, setRippling] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setGlowReady(true), 600);
    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    if (clicked) return;
    setClicked(true);
    setRippling(true);
    onPlayAudio();

    // 2.2 seconds anticipation before fading into home
    setTimeout(() => {
      setFadedOut(true);
      setTimeout(onEnter, 700);
    }, 2000);
  };

  return (
    <div
      onClick={handleOpen}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background:
          "radial-gradient(ellipse at 50% 30%, #2e1a06 0%, #140900 60%, #0a0500 100%)",
        cursor: clicked ? "default" : "pointer",
        userSelect: "none",
        opacity: fadedOut ? 0 : 1,
        transition: fadedOut ? "opacity 0.7s ease" : "none",
        overflow: "hidden",
      }}
    >
      {/* Background Star Particles */}
      <FloatingStarsCanvas />

      {/* Ornate Arch Outline SVG */}
      <ArchOutlineSVG />

      {/* Ripple Animation on Click */}
      {rippling && (
        <div
          style={{
            position: "absolute",
            width: 40,
            height: 40,
            borderRadius: "50%",
            background: "rgba(201,169,110,0.35)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            animation: "rippleAnim 1.4s ease-out forwards",
            pointerEvents: "none",
            zIndex: 10,
          }}
        />
      )}

      {/* Foreground Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 28px",
          maxWidth: "500px",
        }}
      >
        <p
          style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(8px, 2.2vw, 11px)",
            letterSpacing: "0.42em",
            color: "#C9A96E",
            textTransform: "uppercase",
            opacity: 0.85,
            marginBottom: 18,
          }}
        >
          ✦ &nbsp; A Sacred Celebration &nbsp; ✦
        </p>

        {/* Majestic Intertwined P & S Monogram */}
        <div
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(80px, 24vw, 130px)",
            color: "#C9A96E",
            lineHeight: 0.88,
            textShadow:
              "0 0 60px rgba(201,169,110,0.4), 0 4px 24px rgba(180,110,30,0.35)",
            marginBottom: 14,
            animation: glowReady ? "loaderGlow 3s ease-in-out infinite" : "none",
          }}
        >
          P &amp; S
        </div>

        {/* Bride & Groom Names */}
        <h1
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "clamp(18px, 5.2vw, 28px)",
            fontWeight: 700,
            color: "#F5E6C8",
            letterSpacing: "0.06em",
            lineHeight: 1.2,
            marginBottom: 8,
            textShadow: "0 2px 20px rgba(201,169,110,0.3)",
          }}
        >
          Pratiksha &amp; Sankalp
        </h1>

        {/* Wedding Date & Venue Details */}
        <p
          style={{
            fontFamily: "'Times New Roman', serif",
            fontStyle: "italic",
            fontSize: "clamp(13px, 3.8vw, 16.5px)",
            color: "#C9A96E",
            letterSpacing: "0.14em",
            opacity: 0.9,
            marginBottom: 28,
          }}
        >
          27 November &nbsp;·&nbsp; Bhubaneswar, Odisha
        </p>

        {/* Golden Diamond Divider */}
        <GoldDiamondDivider my="4px" />

        <div style={{ height: 26 }} />

        {/* Tap Button / Spinner */}
        {clicked ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 14,
            }}
          >
            <div style={{ position: "relative", width: 52, height: 52 }}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: "50%",
                  border: "2px solid rgba(201,169,110,0.15)",
                  borderTop: "2px solid #C9A96E",
                  animation: "loaderSpin 1s linear infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 8,
                  borderRadius: "50%",
                  border: "1.5px solid rgba(201,169,110,0.1)",
                  borderBottom: "1.5px solid rgba(201,169,110,0.7)",
                  animation: "loaderSpin 0.7s linear infinite reverse",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: "50%",
                  margin: "-4px",
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#C9A96E",
                  boxShadow: "0 0 10px rgba(201,169,110,0.8)",
                }}
              />
            </div>
            <p
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(8.5px, 2vw, 10.5px)",
                letterSpacing: "0.35em",
                color: "#C9A96E",
                textTransform: "uppercase",
                opacity: 0.8,
                animation: "loaderFade 1s ease-in-out infinite",
              }}
            >
              Preparing your invitation…
            </p>
          </div>
        ) : (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
              padding: "14px 34px",
              borderRadius: 40,
              border: "1.5px solid rgba(201,169,110,0.7)",
              background: "rgba(201,169,110,0.09)",
              backdropFilter: "blur(8px)",
              cursor: "pointer",
              animation: glowReady ? "tapPulse 2.2s ease-out infinite" : "none",
              boxShadow: "0 0 0 0 rgba(201,169,110,0.5)",
              transition: "transform 0.2s, background 0.2s",
            }}
            className="hover:scale-105 hover:bg-[#C9A96E]/20"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C9A96E"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M12 2v20M2 12h20" />
            </svg>
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "clamp(9.5px, 2.5vw, 11.5px)",
                fontWeight: 600,
                letterSpacing: "0.3em",
                color: "#C9A96E",
                textTransform: "uppercase",
              }}
            >
              Tap To Open Invitation
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C9A96E"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <path d="M12 2v20M2 12h20" />
            </svg>
          </div>
        )}

        <div style={{ height: 22 }} />

        {!clicked && (
          <p
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(8px, 1.9vw, 9.5px)",
              letterSpacing: "0.3em",
              color: "#C9A96E",
              textTransform: "uppercase",
              opacity: 0.45,
              animation: "loaderFade 2.5s ease-in-out infinite",
            }}
          >
            tap anywhere to enter
          </p>
        )}
      </div>
    </div>
  );
};
