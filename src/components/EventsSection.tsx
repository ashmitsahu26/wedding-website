"use client";

import React from "react";
import { motion } from "framer-motion";
import { GoldDiamondDivider, ShimmerBar } from "./Ornaments";

export const EventsSection: React.FC = () => {
  const titleLetters = "ENGAGEMENT CEREMONY".split("");

  const venueAddress =
    "Ruby by Occasions, Cuttack–Puri Bypass Road, near Sai Mandira Bypass, Bhubaneswar.";
  const googleMapsUrl = `https://maps.google.com/?q=${encodeURIComponent(
    venueAddress
  )}`;

  // Easing presets
  const royalEase = [0.22, 1, 0.36, 1];

  return (
    <section
      id="events"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "radial-gradient(ellipse at center, #2e1205 0%, #1a0c02 100%)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 14px 80px",
        overflowX: "hidden",
      }}
    >
      {/* Texture Background */}
      <img
        src="/assets/events-bg.jpg"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.16,
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
        {/* Sacred Invocation */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: royalEase }}
          style={{ textAlign: "center", marginBottom: 4 }}
        >
          <span
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "clamp(9px, 2.5vw, 12px)",
              fontWeight: 700,
              letterSpacing: "0.24em",
              color: "#C9A96E",
            }}
          >
            ॐ शुभ विवाह · Shubh Vivah
          </span>
        </motion.div>

        {/* Flourish */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: royalEase }}
          style={{ textAlign: "center", marginBottom: 8 }}
        >
          <span
            style={{
              color: "#C9A96E",
              fontSize: "clamp(13px, 3.6vw, 16px)",
              letterSpacing: 8,
            }}
          >
            ❧ ✦ ❧
          </span>
        </motion.div>

        <ShimmerBar margin="0 0 12px" delay="0s" />

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: royalEase }}
          style={{ textAlign: "center", marginBottom: 4 }}
        >
          <div
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(22px, 6.2vw, 30px)",
              fontWeight: 900,
              color: "#F5E6C8",
              lineHeight: 1.2,
              letterSpacing: "0.04em",
              textShadow: "0 0 20px rgba(201,169,110,0.35)",
            }}
          >
            The Celebrations
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.25 }}
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(22px, 6vw, 29px)",
            color: "#C9A96E",
            lineHeight: 1.1,
            marginBottom: 6,
            textAlign: "center",
          }}
        >
          Join Our Special Moments
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "clamp(12px, 3.2vw, 15px)",
            color: "#D8C2A0",
            letterSpacing: "0.08em",
            marginBottom: 24,
            textAlign: "center",
          }}
        >
          with joy, blessings &amp; celebration
        </motion.p>

        {/* ── SINGLE EVENT CARD: ENGAGEMENT CEREMONY ── */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: royalEase }}
          style={{
            width: "100%",
            borderRadius: 16,
            overflow: "hidden",
            background: "rgba(255, 249, 238, 0.96)",
            border: "1.8px solid #B8860B",
            boxShadow:
              "0 1px 0 rgba(255,255,255,0.95) inset, 0 12px 40px rgba(184,134,11,0.28), 0 2px 8px rgba(0,0,0,0.12)",
            marginBottom: 20,
            position: "relative",
          }}
        >
          {/* Top Radiant Golden Accent Strip */}
          <div
            style={{
              height: 5,
              background:
                "linear-gradient(90deg, #8B5E1A 0%, #FFD700 50%, #B8860B 100%)",
            }}
          />

          <div
            style={{
              padding: "clamp(16px, 4.8vw, 22px)",
            }}
          >
            {/* Header Badge Row */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 12,
              }}
            >
              {/* Event 01 with animated Ring */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                {/* Ring Icon with soft scale & rotation animation */}
                <motion.span
                  initial={{ scale: 0.5, rotate: -35, opacity: 0 }}
                  whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.9,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 120,
                    damping: 10,
                  }}
                  style={{
                    fontSize: "20px",
                    display: "inline-block",
                    filter: "drop-shadow(0 2px 6px rgba(184,134,11,0.4))",
                  }}
                >
                  💍
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  style={{
                    fontFamily: "'Cinzel', serif",
                    fontSize: "11px",
                    fontWeight: 700,
                    letterSpacing: "0.24em",
                    color: "#8B5E1A",
                    textTransform: "uppercase",
                  }}
                >
                  EVENT 01
                </motion.span>
              </div>

              {/* Auspicious Badge */}
              <motion.span
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                style={{
                  fontFamily: "'Cinzel', serif",
                  fontSize: "clamp(7.5px, 2.1vw, 8.5px)",
                  letterSpacing: "0.16em",
                  background: "rgba(184,134,11,0.14)",
                  border: "1px solid rgba(184,134,11,0.45)",
                  color: "#8B5E1A",
                  padding: "3px 9px",
                  borderRadius: 20,
                  textTransform: "uppercase",
                  fontWeight: 700,
                }}
              >
                Auspicious Beginning
              </motion.span>
            </div>

            {/* Event Heading with Letter-by-Letter Reveal */}
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.025,
                    delayChildren: 0.25,
                  },
                },
              }}
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "clamp(16px, 4.8vw, 23px)",
                fontWeight: 900,
                color: "#2D1200",
                letterSpacing: "0.03em",
                lineHeight: 1.25,
                marginBottom: 14,
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "0.5px",
              }}
            >
              {titleLetters.map((char, index) => (
                <motion.span
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.4, ease: royalEase },
                    },
                  }}
                  style={{
                    display: "inline-block",
                    whiteSpace: char === " " ? "pre" : "normal",
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h3>

            {/* Subtle Inner Gold Shimmer Line */}
            <div
              style={{
                height: 1,
                background:
                  "linear-gradient(90deg, transparent, rgba(184,134,11,0.45) 30%, rgba(184,134,11,0.45) 70%, transparent)",
                marginBottom: 14,
              }}
            />

            {/* Date & Time Grid (Date slides from Left, Time from Right) */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: 10,
                marginBottom: 12,
              }}
            >
              {/* Date Box — Slides from Left */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4, ease: royalEase }}
                style={{
                  background: "rgba(184,134,11,0.07)",
                  border: "1px solid rgba(184,134,11,0.24)",
                  borderRadius: 10,
                  padding: "10px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ fontSize: "20px" }}>📅</span>
                <div>
                  <div
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "8px",
                      letterSpacing: "0.2em",
                      color: "#8B5E1A",
                      textTransform: "uppercase",
                      fontWeight: 700,
                    }}
                  >
                    Date
                  </div>
                  <div
                    style={{
                      fontFamily: "'Times New Roman', serif",
                      fontWeight: 700,
                      fontSize: "clamp(13px, 3.8vw, 15px)",
                      color: "#2D1200",
                      lineHeight: 1.2,
                    }}
                  >
                    27 November
                  </div>
                </div>
              </motion.div>

              {/* Time Box — Slides from Right */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.45, ease: royalEase }}
                style={{
                  background: "rgba(184,134,11,0.07)",
                  border: "1px solid rgba(184,134,11,0.24)",
                  borderRadius: 10,
                  padding: "10px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ fontSize: "20px" }}>🕙</span>
                <div>
                  <div
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "8px",
                      letterSpacing: "0.2em",
                      color: "#8B5E1A",
                      textTransform: "uppercase",
                      fontWeight: 700,
                    }}
                  >
                    Time
                  </div>
                  <div
                    style={{
                      fontFamily: "'Times New Roman', serif",
                      fontWeight: 700,
                      fontSize: "clamp(13px, 3.8vw, 15px)",
                      color: "#B8860B",
                      lineHeight: 1.2,
                    }}
                  >
                    12:00 PM onwards
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Venue Box — Full-width with Gentle Upward Reveal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: 0.5, ease: royalEase }}
              style={{
                width: "100%",
                background: "rgba(184,134,11,0.07)",
                border: "1px solid rgba(184,134,11,0.24)",
                borderRadius: 10,
                padding: "12px 14px",
                marginBottom: 14,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    fontSize: "20px",
                    marginTop: "2px",
                    flexShrink: 0,
                  }}
                >
                  📍
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div
                    style={{
                      fontFamily: "'Cinzel', serif",
                      fontSize: "8px",
                      letterSpacing: "0.2em",
                      color: "#8B5E1A",
                      textTransform: "uppercase",
                      fontWeight: 700,
                      marginBottom: 3,
                    }}
                  >
                    Venue
                  </div>

                  {/* Venue Name in Prominent Bold Heading */}
                  <div
                    style={{
                      fontFamily: "'Cinzel Decorative', serif",
                      fontSize: "clamp(14px, 4vw, 17px)",
                      fontWeight: 800,
                      color: "#2D1200",
                      letterSpacing: "0.03em",
                      lineHeight: 1.3,
                      marginBottom: 4,
                    }}
                  >
                    RUBY BY OCCASIONS
                  </div>

                  {/* Full Complete Address — No clipping */}
                  <div
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 600,
                      fontStyle: "italic",
                      fontSize: "clamp(13px, 3.4vw, 15px)",
                      color: "#4A2800",
                      lineHeight: 1.45,
                      wordBreak: "break-word",
                      marginBottom: 8,
                    }}
                  >
                    Cuttack–Puri Bypass Road, near Sai Mandira Bypass, Bhubaneswar.
                  </div>

                  {/* Tasteful View Directions Button */}
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                      fontFamily: "'Cinzel', serif",
                      fontSize: "9.5px",
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      color: "#8B5E1A",
                      textTransform: "uppercase",
                      textDecoration: "none",
                      padding: "4px 10px",
                      borderRadius: 20,
                      background: "rgba(184,134,11,0.12)",
                      border: "0.8px solid rgba(184,134,11,0.4)",
                      transition: "all 0.25s ease",
                    }}
                    className="hover:bg-[#8B5E1A] hover:text-[#FFFDF7]"
                  >
                    <span>View Directions</span>
                    <span style={{ fontSize: "11px" }}>↗</span>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Special Engagement Message — Line by line / Gentle fade */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.55, ease: royalEase }}
              style={{
                background: "rgba(184,134,11,0.08)",
                borderLeft: "3.5px solid #B8860B",
                padding: "12px 14px",
                borderRadius: "0 8px 8px 0",
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "clamp(13px, 3.4vw, 14.5px)",
                color: "#4A2800",
                lineHeight: 1.65,
                fontWeight: 600,
              }}
            >
              &ldquo;A beautiful beginning to a lifetime of togetherness. Join us
              as Pratiksha and Sankalp exchange rings, celebrate their promise
              of forever, and begin a new chapter filled with love, happiness,
              and the blessings of our families.&rdquo;
            </motion.div>
          </div>
        </motion.div>

        {/* ── SPECIAL NOTE FROM OUR FAMILIES ── */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.6, ease: royalEase }}
          style={{
            width: "100%",
            borderRadius: 14,
            overflow: "hidden",
            background: "rgba(255, 252, 243, 0.08)",
            border: "1px solid rgba(201,169,110,0.4)",
            backdropFilter: "blur(10px)",
            boxShadow: "0 6px 26px rgba(0,0,0,0.35)",
            padding: "18px 20px",
            textAlign: "center",
            position: "relative",
            marginBottom: 16,
          }}
        >
          {/* Subtle Corner Accents */}
          <div
            style={{
              position: "absolute",
              top: 8,
              left: 10,
              color: "#C9A96E",
              fontSize: "10px",
              opacity: 0.6,
            }}
          >
            ✦
          </div>
          <div
            style={{
              position: "absolute",
              top: 8,
              right: 10,
              color: "#C9A96E",
              fontSize: "10px",
              opacity: 0.6,
            }}
          >
            ✦
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 8,
              left: 10,
              color: "#C9A96E",
              fontSize: "10px",
              opacity: 0.6,
            }}
          >
            ✦
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 8,
              right: 10,
              color: "#C9A96E",
              fontSize: "10px",
              opacity: 0.6,
            }}
          >
            ✦
          </div>

          {/* Note Title */}
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "10.5px",
              fontWeight: 700,
              letterSpacing: "0.32em",
              color: "#C9A96E",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            A Note From Our Families
          </div>

          <div
            style={{
              width: 50,
              height: 1,
              background: "#C9A96E",
              margin: "0 auto 10px",
              opacity: 0.5,
            }}
          />

          {/* Note Quote */}
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(13px, 3.4vw, 15px)",
              color: "#F5E6C8",
              lineHeight: 1.7,
              fontWeight: 500,
              letterSpacing: "0.01em",
              maxWidth: 420,
              margin: "0 auto",
            }}
          >
            &ldquo;Your presence will make this beautiful occasion even more
            memorable. We warmly invite you and your family to bless the couple as
            they take their first step towards a lifetime of love and
            togetherness.&rdquo;
          </p>
        </motion.div>

        <GoldDiamondDivider my="12px" />
      </div>
    </section>
  );
};
