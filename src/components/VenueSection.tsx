"use client";

import React from "react";
import { GoldDiamondDivider, ShimmerBar } from "./Ornaments";

export const VenueSection: React.FC = () => {
  const venueAddress =
    "Ruby by Occasions, Cuttack–Puri Bypass Road, near Sai Mandira Bypass, Bhubaneswar, Odisha";
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(
    venueAddress
  )}`;
  const embedMapsUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    venueAddress
  )}&t=m&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section
      id="venue"
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
        <div style={{ textAlign: "center", marginBottom: 5 }}>
          <div
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(24px, 7vw, 34px)",
              fontWeight: 900,
              color: "#F5E6C8",
              letterSpacing: "0.04em",
              lineHeight: 1.15,
              textShadow: "0 0 20px rgba(201,169,110,0.35)",
            }}
          >
            ✦ The Venue ✦
          </div>
        </div>

        <ShimmerBar margin="10px 8% 18px" delay="0.5s" />

        <div style={{ textAlign: "center", marginBottom: 4 }}>
          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(13px, 3.6vw, 16px)",
              color: "#C9A96E",
              fontWeight: 600,
              letterSpacing: "0.06em",
            }}
          >
            Join us at
          </div>
        </div>

        {/* Venue Title */}
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <div
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: "clamp(38px, 10.5vw, 52px)",
              color: "#F5E6C8",
              fontWeight: 400,
              lineHeight: 1.1,
              textShadow: "0 2px 16px rgba(184,134,11,0.28)",
            }}
          >
            Ruby by Occasions
          </div>
        </div>

        <ShimmerBar margin="0 12% 18px" delay="0.8s" />

        {/* Address Card */}
        <div style={{ textAlign: "center", marginBottom: 24, width: "100%" }}>
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(9px, 2.3vw, 11px)",
              fontWeight: 700,
              letterSpacing: "0.32em",
              color: "#C9A96E",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            Address &amp; Location
          </div>
          <div
            style={{
              background: "rgba(255, 252, 243, 0.08)",
              border: "1px solid rgba(201,169,110,0.35)",
              borderRadius: 10,
              padding: "16px 20px",
              backdropFilter: "blur(8px)",
              boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
            }}
          >
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "clamp(15px, 4vw, 18px)",
                color: "#F5E6C8",
                fontWeight: 600,
                lineHeight: 1.6,
                letterSpacing: "0.02em",
              }}
            >
              Cuttack–Puri Bypass Road,
              <br />
              near Sai Mandira Bypass,
              <br />
              Bhubaneswar, Odisha
            </p>
          </div>
        </div>

        <ShimmerBar margin="0 15% 20px" delay="1.2s" />

        {/* Interactive Google Map with Ornate Gold Brackets */}
        <div style={{ width: "100%", marginBottom: 24 }}>
          <div
            style={{
              textAlign: "center",
              marginBottom: 10,
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(8.5px, 2.1vw, 10px)",
              fontWeight: 700,
              letterSpacing: "0.32em",
              color: "#C9A96E",
              textTransform: "uppercase",
            }}
          >
            📍 Google Maps Directions
          </div>

          <div
            style={{
              borderRadius: 14,
              overflow: "hidden",
              border: "1.5px solid rgba(201,169,110,0.55)",
              position: "relative",
              boxShadow: "0 6px 30px rgba(0,0,0,0.5)",
            }}
          >
            {/* 4 Golden Corner Flairs */}
            {[
              {
                top: 0,
                left: 0,
                borderTop: "3px solid #B8860B",
                borderLeft: "3px solid #B8860B",
                borderRadius: "14px 0 0 0",
              },
              {
                top: 0,
                right: 0,
                borderTop: "3px solid #B8860B",
                borderRight: "3px solid #B8860B",
                borderRadius: "0 14px 0 0",
              },
              {
                bottom: 0,
                left: 0,
                borderBottom: "3px solid #B8860B",
                borderLeft: "3px solid #B8860B",
                borderRadius: "0 0 0 14px",
              },
              {
                bottom: 0,
                right: 0,
                borderBottom: "3px solid #B8860B",
                borderRight: "3px solid #B8860B",
                borderRadius: "0 0 14px 0",
              },
            ].map((style, idx) => (
              <div
                key={idx}
                style={{
                  position: "absolute",
                  width: 20,
                  height: 20,
                  zIndex: 2,
                  pointerEvents: "none",
                  ...style,
                }}
              />
            ))}

            <iframe
              src={embedMapsUrl}
              width="100%"
              height="240"
              style={{
                border: "none",
                display: "block",
                filter: "contrast(1.05) saturate(1.1)",
              }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ruby by Occasions Location"
            />
          </div>
        </div>

        {/* Directions Action Button */}
        <a
          href={googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
            padding: "13px 28px",
            borderRadius: 30,
            border: "1.2px solid #C9A96E",
            background: "rgba(201,169,110,0.14)",
            backdropFilter: "blur(8px)",
            color: "#F5E6C8",
            fontFamily: "'Cinzel', serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            textDecoration: "none",
            boxShadow: "0 4px 18px rgba(0,0,0,0.3)",
            transition: "all 0.3s ease",
          }}
          className="hover:scale-105 hover:bg-[#C9A96E]/25 hover:border-[#FFD700]"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#C9A96E"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span>Open in Google Maps</span>
        </a>

        <GoldDiamondDivider my="22px" />
      </div>
    </section>
  );
};
