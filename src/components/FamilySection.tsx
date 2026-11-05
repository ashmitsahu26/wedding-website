"use client";

import React from "react";
import { GoldDiamondDivider, ShimmerBar } from "./Ornaments";

export const FamilySection: React.FC = () => {
  return (
    <section
      id="family"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "radial-gradient(ellipse at center, #2e1205 0%, #1a0c02 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 16px 80px",
        overflow: "hidden",
      }}
    >
      {/* Texture Background */}
      <img
        src="/assets/page-bg.jpg"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.14,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 4,
          width: "100%",
          maxWidth: 480,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Flourish */}
        <div style={{ textAlign: "center", marginBottom: 10 }}>
          <span
            style={{
              color: "#C9A96E",
              fontSize: "clamp(13px, 3.5vw, 16px)",
              letterSpacing: 8,
            }}
          >
            ❧ ✦ ❧
          </span>
        </div>

        <ShimmerBar margin="0 5% 14px" delay="0s" />

        {/* Section Heading */}
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <div
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(22px, 6vw, 30px)",
              fontWeight: 900,
              color: "#F5E6C8",
              lineHeight: 1.2,
              letterSpacing: "0.04em",
              textShadow: "0 0 22px rgba(201,169,110,0.45)",
            }}
          >
            ✦ A Note From Us ✦
          </div>
        </div>

        <ShimmerBar margin="12px 8% 18px" delay="0.4s" />

        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <div
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(26px, 7vw, 36px)",
              color: "#F5E6C8",
              fontWeight: 400,
              lineHeight: 1.35,
              textShadow: "0 2px 14px rgba(184,134,11,0.25)",
            }}
          >
            With hearts full of love
            <br />
            and boundless joy
          </div>
        </div>

        <ShimmerBar margin="0 12% 20px" delay="0.8s" />

        {/* Invitation Message */}
        <div style={{ textAlign: "center", marginBottom: 20 }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(14px, 3.8vw, 17px)",
              color: "#F5E6C8",
              fontWeight: 600,
              lineHeight: 1.85,
              letterSpacing: "0.01em",
            }}
          >
            We warmly invite you to grace our
            <br />
            wedding ceremony with your presence.
          </p>
        </div>

        <div style={{ textAlign: "center", marginBottom: 22 }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(13px, 3.4vw, 16px)",
              color: "#D8C2A0",
              fontWeight: 500,
              lineHeight: 1.9,
              letterSpacing: "0.01em",
            }}
          >
            Your presence will grace our union with
            <br />
            warmth, laughter, and memories that
            <br />
            shall endure a lifetime.
          </p>
        </div>

        <ShimmerBar margin="0 15% 20px" delay="1.2s" />

        {/* Family Cards Container */}
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: 16,
            marginBottom: 28,
          }}
        >
          {/* Bride's Family */}
          <div
            style={{
              background: "rgba(255, 252, 243, 0.08)",
              border: "1px solid rgba(201,169,110,0.35)",
              borderRadius: 12,
              padding: "18px 20px",
              textAlign: "center",
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
            }}
          >
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "10px",
                letterSpacing: "0.28em",
                color: "#C9A96E",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 6,
              }}
            >
              Bride&apos;s Family
            </span>
            <h4
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "16px",
                fontWeight: 700,
                color: "#F5E6C8",
                letterSpacing: "0.03em",
                marginBottom: 4,
              }}
            >
              Smt. Gitanjali Behera &amp; Shri Tankadhar Sahoo
            </h4>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "13px",
                color: "#D8C2A0",
              }}
            >
              Solicit your gracious presence &amp; heartfelt blessings for their
              beloved daughter Pratiksha
            </p>
          </div>

          {/* Groom's Family */}
          <div
            style={{
              background: "rgba(255, 252, 243, 0.08)",
              border: "1px solid rgba(201,169,110,0.35)",
              borderRadius: 12,
              padding: "18px 20px",
              textAlign: "center",
              backdropFilter: "blur(10px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
            }}
          >
            <span
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "10px",
                letterSpacing: "0.28em",
                color: "#C9A96E",
                textTransform: "uppercase",
                display: "block",
                marginBottom: 6,
              }}
            >
              Groom&apos;s Family
            </span>
            <h4
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "16px",
                fontWeight: 700,
                color: "#F5E6C8",
                letterSpacing: "0.03em",
                marginBottom: 4,
              }}
            >
              Dr. Geetashree Mishra &amp; Dr. Krushna Chandra Rath
            </h4>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "13px",
                color: "#D8C2A0",
              }}
            >
              Solicit your gracious presence &amp; heartfelt blessings for their
              beloved son Sankalp
            </p>
          </div>
        </div>

        {/* With Love signatures */}
        <div style={{ textAlign: "center", marginBottom: 6 }}>
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(8px, 2.2vw, 10px)",
              fontWeight: 700,
              letterSpacing: "0.38em",
              color: "#C9A96E",
              textTransform: "uppercase",
              marginBottom: 10,
            }}
          >
            With Love
          </div>
        </div>

        <div style={{ textAlign: "center", marginBottom: 14 }}>
          <div
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(40px, 11vw, 56px)",
              color: "#F5E6C8",
              fontWeight: 400,
              lineHeight: 1,
              textShadow: "0 2px 16px rgba(184,134,11,0.28)",
            }}
          >
            Pratiksha
          </div>
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(10px, 2.8vw, 13px)",
              color: "#B8860B",
              fontWeight: 700,
              letterSpacing: "0.38em",
              margin: "3px 0",
            }}
          >
            &amp;
          </div>
          <div
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(40px, 11vw, 56px)",
              color: "#F5E6C8",
              fontWeight: 400,
              lineHeight: 1,
              textShadow: "0 2px 16px rgba(184,134,11,0.28)",
            }}
          >
            Sankalp
          </div>
        </div>

        <ShimmerBar margin="6px 10% 12px" delay="1.6s" />

        <div style={{ textAlign: "center", marginTop: 4 }}>
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              color: "#C9A96E",
              fontSize: "clamp(11px, 3vw, 13px)",
              letterSpacing: "0.3em",
              fontWeight: 700,
            }}
          >
            ✦ &nbsp; 27 NOVEMBER &nbsp; ✦
          </span>
        </div>

        <GoldDiamondDivider my="20px" />
      </div>
    </section>
  );
};
