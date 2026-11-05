"use client";

import React, { useMemo } from "react";

export const FloatingDecorations: React.FC = () => {
  // Stars
  const stars = useMemo(
    () => [
      { id: 1, left: 8, top: 15, dur: 2.8, delay: 0.2 },
      { id: 2, left: 88, top: 12, dur: 3.2, delay: 0.8 },
      { id: 3, left: 24, top: 45, dur: 2.4, delay: 1.1 },
      { id: 4, left: 75, top: 58, dur: 3.5, delay: 0.4 },
      { id: 5, left: 14, top: 82, dur: 2.9, delay: 1.6 },
      { id: 6, left: 92, top: 78, dur: 3.1, delay: 0.7 },
      { id: 7, left: 52, top: 25, dur: 2.7, delay: 1.3 },
      { id: 8, left: 40, top: 92, dur: 3.4, delay: 0.5 },
    ],
    []
  );

  // Sparkles
  const sparkles = useMemo(
    () => [
      { id: 1, left: 18, top: 22, size: 10, dur: 3.2, delay: 0.4, char: "✦" },
      { id: 2, left: 82, top: 35, size: 12, dur: 2.8, delay: 1.2, char: "✧" },
      { id: 3, left: 28, top: 68, size: 9, dur: 3.6, delay: 0.8, char: "✦" },
      { id: 4, left: 70, top: 80, size: 11, dur: 3.0, delay: 1.5, char: "✧" },
      { id: 5, left: 45, top: 50, size: 8, dur: 3.4, delay: 0.2, char: "✦" },
    ],
    []
  );

  // Rose Petals
  const petals = useMemo(
    () => [
      { id: 1, left: 10, size: 16, rotate: 20, drift: 35, dur: 10, delay: 0, emoji: "🌸" },
      { id: 2, left: 32, size: 14, rotate: -40, drift: -25, dur: 12, delay: 2.5, emoji: "🌺" },
      { id: 3, left: 58, size: 18, rotate: 30, drift: 45, dur: 9, delay: 5.0, emoji: "🌸" },
      { id: 4, left: 76, size: 15, rotate: -15, drift: -30, dur: 11, delay: 1.8, emoji: "💮" },
      { id: 5, left: 90, size: 13, rotate: 45, drift: 20, dur: 13, delay: 4.2, emoji: "🌸" },
    ],
    []
  );

  // Rising Lanterns
  const lanterns = useMemo(
    () => [
      { id: 1, left: 12, drift: 20, scale: 0.85, dur: 14, delay: 0 },
      { id: 2, left: 84, drift: -25, scale: 0.9, dur: 16, delay: 3.5 },
      { id: 3, left: 48, drift: 15, scale: 0.75, dur: 18, delay: 8.0 },
    ],
    []
  );

  // Butterflies
  const butterflies = useMemo(
    () => [
      { id: 1, left: 22, drift: 35, dur: 13, delay: 1 },
      { id: 2, left: 72, drift: -40, dur: 15, delay: 6 },
    ],
    []
  );

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 5,
        overflow: "hidden",
      }}
    >
      {/* Blinking Stars */}
      {stars.map((s) => (
        <div
          key={s.id}
          style={{
            position: "absolute",
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: 3,
            height: 3,
            borderRadius: "50%",
            background: "#C9A96E",
            animation: `starBlink ${s.dur}s ${s.delay}s ease-in-out infinite`,
          }}
        />
      ))}

      {/* Sparkles */}
      {sparkles.map((sp) => (
        <div
          key={sp.id}
          style={{
            position: "absolute",
            left: `${sp.left}%`,
            top: `${sp.top}%`,
            fontSize: sp.size,
            color: "#C9A96E",
            lineHeight: 1,
            animation: `sparkleTwinkle ${sp.dur}s ${sp.delay}s ease-in-out infinite`,
          }}
        >
          {sp.char}
        </div>
      ))}

      {/* Falling Petals */}
      {petals.map((p) => (
        <div
          key={p.id}
          style={
            {
              position: "absolute",
              left: `${p.left}%`,
              top: "-40px",
              fontSize: p.size,
              "--rot": `${p.rotate}deg`,
              "--pd": `${p.drift}px`,
              animation: `petalFall ${p.dur}s ${p.delay}s ease-in-out infinite`,
            } as React.CSSProperties
          }
        >
          {p.emoji}
        </div>
      ))}

      {/* Rising Lanterns */}
      {lanterns.map((l) => (
        <div
          key={l.id}
          style={
            {
              position: "absolute",
              left: `${l.left}%`,
              bottom: "-60px",
              fontSize: 24,
              "--ld": `${l.drift}px`,
              "--ls": l.scale,
              filter: "drop-shadow(0 0 10px rgba(255,170,40,0.85))",
              animation: `lanternRise ${l.dur}s ${l.delay}s ease-in-out infinite`,
            } as React.CSSProperties
          }
        >
          🏮
        </div>
      ))}

      {/* Drifting Golden Butterflies */}
      {butterflies.map((b) => (
        <div
          key={b.id}
          style={
            {
              position: "absolute",
              left: `${b.left}%`,
              bottom: 0,
              fontSize: 16,
              "--bd": `${b.drift}px`,
              animation: `butterflyDrift ${b.dur}s ${b.delay}s ease-in-out infinite`,
            } as React.CSSProperties
          }
        >
          🦋
        </div>
      ))}
    </div>
  );
};
