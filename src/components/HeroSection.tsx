"use client";

import React, { useState, useEffect } from "react";
import { GoldDiamondDivider, DoubleGoldLine } from "./Ornaments";

interface HeroSectionProps {
  guestName?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ guestName }) => {
  const [mounted, setMounted] = useState(false);
  const [aspectRatio, setAspectRatio] = useState(9 / 16);
  const [windowWidth, setWindowWidth] = useState(400);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    const timer = setTimeout(() => setMounted(true), 150);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, []);

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth, naturalHeight } = e.currentTarget;
    if (naturalWidth && naturalHeight) {
      setAspectRatio(naturalWidth / naturalHeight);
    }
  };

  const isMobile = windowWidth < 640;
  const cardWidth = isMobile
    ? windowWidth
    : windowWidth < 1024
    ? Math.min(windowWidth * 0.72, 520)
    : Math.min(windowWidth * 0.44, 560);

  const cardHeight = cardWidth / aspectRatio;
  const topOffset = cardHeight * 0.135;
  const bottomOffset = cardHeight * 0.155;
  const sideOffset = cardWidth * 0.105;
  const contentWidth = cardWidth - sideOffset * 2;
  const contentHeight = cardHeight - topOffset - bottomOffset;
  const scaleRatio = contentWidth / 320;
  const g = (val: number) => `${Math.round(val * scaleRatio)}px`;

  const displayName = guestName || "Dear Guest";

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "radial-gradient(ellipse at center, #2e1205 0%, #1a0c02 100%)",
        padding: isMobile ? "0" : "48px 16px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: cardWidth,
          height: cardHeight,
          flexShrink: 0,
          borderRadius: isMobile ? 0 : 10,
          overflow: "hidden",
          boxShadow: isMobile
            ? "none"
            : "0 0 0 1px rgba(201,169,110,0.35), 0 32px 100px rgba(0,0,0,0.85)",
        }}
      >
        {/* Background Arch Frame */}
        <img
          src="/assets/hero-frame.jpg"
          alt=""
          onLoad={handleImageLoad}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "fill",
            display: "block",
          }}
        />

        {/* Ambient Radial Golden Sheen */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 65% 55% at 50% 47%, rgba(255,250,240,0.22) 0%, transparent 80%)",
            pointerEvents: "none",
          }}
        />

        {/* Scaled Invitation Content */}
        <div
          className="hero-content"
          style={{
            position: "absolute",
            top: topOffset,
            left: sideOffset,
            width: contentWidth,
            height: contentHeight,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 1.3s ease, transform 1.3s ease",
            overflow: "hidden",
          }}
        >
          {/* Top Monogram */}
          <div
            style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: g(42),
              color: "#7A3E1E",
              lineHeight: 0.95,
              textShadow: "0 3px 18px rgba(180,110,40,0.22)",
              letterSpacing: "0.01em",
              flexShrink: 0,
              marginTop: "24px",
            }}
          >
            P &amp; S
          </div>

          {/* Bride weds Groom Title */}
          <div style={{ textAlign: "center", lineHeight: 1 }}>
            <span
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: g(17),
                fontWeight: 700,
                color: "#2D1200",
                letterSpacing: "0.04em",
              }}
            >
              Pratiksha
            </span>
            <span
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: g(15),
                color: "#A06828",
                margin: `0 ${g(5)}`,
              }}
            >
              {" "}
              weds{" "}
            </span>
            <span
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: g(17),
                fontWeight: 700,
                color: "#2D1200",
                letterSpacing: "0.04em",
              }}
            >
              Sankalp
            </span>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: g(11),
                color: "#7A4820",
                letterSpacing: "0.18em",
                marginTop: 4,
                opacity: 0.92,
              }}
            >
              Two Days to Forever
            </div>
          </div>

          {/* Golden Diamond Divider */}
          <GoldDiamondDivider my={g(2)} />

          {/* Couple Circular Portrait Frame */}
          <div
            style={{
              width: g(135),
              height: g(135),
              borderRadius: "50%",
              border: "2px solid #C9A96E",
              boxShadow:
                "0 0 0 1px rgba(201,169,110,0.2), 0 0 0 6px rgba(201,169,110,0.09), 0 6px 28px rgba(100,40,0,0.18)",
              background: "rgba(255,247,235,0.55)",
              backdropFilter: "blur(4px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              flexShrink: 0,
            }}
          >
            <img
              src="/images/couple-hero.jpg"
              alt="Pratiksha & Sankalp"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center 28%",
              }}
            />
          </div>

          {/* Family & Cordial Invitation */}
          <div
            style={{
              textAlign: "center",
              fontFamily: "'Cormorant Garamond', serif",
              color: "#4A2800",
              lineHeight: 1.7,
            }}
          >
            <div
              style={{
                fontStyle: "italic",
                fontSize: g(14.5),
                opacity: 0.88,
              }}
            >
              Together with our families
            </div>
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontWeight: 600,
                fontSize: g(8),
                letterSpacing: "0.22em",
                color: "#6B3510",
                textTransform: "uppercase",
                margin: "2px 0",
              }}
            >
              We Cordially Invite
            </div>
            {/* Cordially Invited - Generic for All Guests */}
            <div
              style={{
                fontFamily: "'Great Vibes', cursive",
                fontSize: g(23),
                color: "#A06828",
                lineHeight: 1.1,
                margin: "2px 0 3px",
                whiteSpace: "nowrap",
              }}
            >
              You &amp; Your Family
            </div>
            <div
              style={{
                fontStyle: "italic",
                fontSize: g(10.5),
                opacity: 0.85,
                lineHeight: 1.6,
              }}
            >
              To grace the celebration with your presence,
              <br />
              blessings &amp; love on our special day.
            </div>
          </div>

          {/* Golden Diamond Divider */}
          <GoldDiamondDivider my={g(1)} />

          {/* Date & Location Summary */}
          <div style={{ textAlign: "center" }}>
            <div
              style={{
                fontFamily: "'Times New Roman', serif",
                fontSize: g(16),
                fontWeight: 700,
                color: "#2D1200",
                letterSpacing: "0.06em",
              }}
            >
              27 November
            </div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: g(10),
                color: "#7A4820",
                letterSpacing: "0.1em",
                margin: "2px 0",
              }}
            >
              12 PM onwards
            </div>
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: g(8.5),
                color: "#6B3510",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Ruby by Occasions, Bhubaneswar
            </div>
          </div>

          {/* Ornate Table Badge */}
          <div
            style={{
              width: "100%",
              borderRadius: 7,
              overflow: "hidden",
              border: "1px solid rgba(201,169,110,0.5)",
              background: "rgba(255,252,243,0.7)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 2px 16px rgba(100,40,0,0.1)",
              flexShrink: 0,
            }}
          >
            {[
              ["Date", "27 November"],
              ["Venue", "Ruby by Occasions, Bhubaneswar"],
              ["Time", "12 PM Onwards"],
            ].map(([label, val], idx) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  borderBottom:
                    idx < 2 ? "1px solid rgba(201,169,110,0.25)" : "none",
                }}
              >
                <div
                  style={{
                    padding: `${g(5)} ${g(8)}`,
                    fontFamily: "'Times New Roman', serif",
                    fontSize: g(7.5),
                    fontWeight: 600,
                    color: "#6B3510",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    minWidth: g(52),
                    borderRight: "1px solid rgba(201,169,110,0.25)",
                    background: "rgba(201,169,110,0.12)",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    padding: `${g(5)} ${g(8)}`,
                    fontFamily: "'Times New Roman', serif",
                    fontSize: g(10.5),
                    color: "#2D1200",
                    letterSpacing: "0.04em",
                    display: "flex",
                    alignItems: "center",
                    fontWeight: 500,
                  }}
                >
                  {val}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Star Trio Flourish */}
          <div style={{ width: "100%" }}>
            <DoubleGoldLine op={0.8} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 8,
                marginTop: 3,
              }}
            >
              <span style={{ color: "#C9A96E", fontSize: g(7) }}>✦</span>
              <span style={{ color: "#C9A96E", fontSize: g(10) }}>✦</span>
              <span style={{ color: "#C9A96E", fontSize: g(7) }}>✦</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
