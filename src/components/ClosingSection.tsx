"use client";

import React, { useState } from "react";
import confetti from "canvas-confetti";
import { GoldDiamondDivider } from "./Ornaments";

interface ClosingSectionProps {
  guestName?: string;
}

export const ClosingSection: React.FC<ClosingSectionProps> = ({ guestName }) => {
  const [name, setName] = useState(guestName || "");
  const [attending, setAttending] = useState<"yes" | "no">("yes");
  const [guestCount, setGuestCount] = useState("2");
  const [wishes, setWishes] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      // Post to our local RSVP API route
      await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name || "Honored Guest",
          attending,
          guestCount,
          wishes,
          submittedAt: new Date().toISOString(),
        }),
      });
    } catch {
      // Non-blocking fallback
    }

    setSubmitting(false);
    setSubmitted(true);

    // Burst golden celebration confetti!
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#C9A96E", "#B8860B", "#FFD700", "#F5E6C8"],
      });
    } catch {
      // Ignored if canvas not ready
    }
  };

  return (
    <section
      id="rsvp"
      style={{
        position: "relative",
        minHeight: "100vh",
        background: "radial-gradient(ellipse at center, #2e1205 0%, #1a0c02 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingTop: "5rem",
        paddingBottom: "12vh",
        paddingLeft: "1.2rem",
        paddingRight: "1.2rem",
        overflow: "hidden",
      }}
    >
      {/* Background Image Texture */}
      <img
        src="/assets/rsvp-bg.jpg"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.15,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: 460,
        }}
      >
        {/* RSVP Card */}
        <div
          style={{
            background: "rgba(255, 252, 242, 0.92)",
            border: "0.8px solid rgba(139, 105, 20, 0.35)",
            borderRadius: 8,
            padding: "2rem 1.6rem 1.6rem",
            backdropFilter: "blur(12px)",
            boxShadow:
              "0 4px 32px rgba(100, 60, 10, 0.25), 0 1px 4px rgba(139, 105, 20, 0.1)",
            marginBottom: "2.5rem",
          }}
        >
          {submitted ? (
            <div style={{ textAlign: "center", padding: "1.8rem 0.5rem" }}>
              <div
                style={{
                  fontFamily: "'Great Vibes', cursive",
                  fontSize: "clamp(2rem, 7vw, 2.5rem)",
                  color: "#7A3E1E",
                  lineHeight: 1.1,
                  marginBottom: 10,
                }}
              >
                Thank You!
              </div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: "15px",
                  color: "#3d2a08",
                  lineHeight: 1.6,
                  marginBottom: 16,
                }}
              >
                Your warm response has been joyfully received. We eagerly look
                forward to celebrating with you!
              </p>
              <div
                style={{
                  fontFamily: "'Cinzel Decorative', serif",
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#B8860B",
                }}
              >
                — Pratiksha &amp; Sankalp
              </div>
            </div>
          ) : (
            <>
              {/* Header */}
              <div style={{ textAlign: "center", marginBottom: "1.2rem" }}>
                <span
                  style={{
                    display: "block",
                    fontFamily: "'Great Vibes', cursive",
                    fontSize: "clamp(1.1rem, 4vw, 1.5rem)",
                    color: "#8b5e1a",
                    lineHeight: 1.2,
                  }}
                >
                  You are cordially invited
                </span>
                <h2
                  style={{
                    fontFamily: "'Cinzel Decorative', serif",
                    fontSize: "clamp(1.3rem, 4.5vw, 1.7rem)",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    color: "#2D1200",
                    margin: "0.3rem 0",
                  }}
                >
                  R · S · V · P
                </h2>
                <span
                  style={{
                    display: "block",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "0.95rem",
                    color: "#6b4515",
                  }}
                >
                  Please confirm your gracious presence
                </span>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                {/* Guest Name Field */}
                <div style={{ marginBottom: "1rem" }}>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 500,
                      fontSize: "0.62rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "rgba(90, 55, 10, 0.8)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    style={{
                      width: "100%",
                      background: "rgba(255, 252, 245, 0.75)",
                      border: "0.8px solid rgba(139, 105, 20, 0.4)",
                      borderRadius: 3,
                      padding: "0.65rem 0.9rem",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.82rem",
                      color: "#3d2a08",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Attendance Toggle */}
                <div style={{ marginBottom: "1rem" }}>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 500,
                      fontSize: "0.62rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "rgba(90, 55, 10, 0.8)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Will You Attend?
                  </label>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "0.65rem",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setAttending("yes")}
                      style={{
                        padding: "0.65rem",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "0.72rem",
                        letterSpacing: "0.1em",
                        borderRadius: 3,
                        cursor: "pointer",
                        border:
                          attending === "yes"
                            ? "1.2px solid #8b5e1a"
                            : "0.8px solid rgba(139, 105, 20, 0.3)",
                        background:
                          attending === "yes"
                            ? "rgba(184, 134, 11, 0.16)"
                            : "rgba(255, 255, 255, 0.5)",
                        color: attending === "yes" ? "#5a3209" : "#7a5c2e",
                        fontWeight: attending === "yes" ? 600 : 400,
                        transition: "all 0.2s",
                      }}
                    >
                      Joyfully Accept ✓
                    </button>
                    <button
                      type="button"
                      onClick={() => setAttending("no")}
                      style={{
                        padding: "0.65rem",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "0.72rem",
                        letterSpacing: "0.1em",
                        borderRadius: 3,
                        cursor: "pointer",
                        border:
                          attending === "no"
                            ? "1.2px solid #8b5e1a"
                            : "0.8px solid rgba(139, 105, 20, 0.3)",
                        background:
                          attending === "no"
                            ? "rgba(184, 134, 11, 0.16)"
                            : "rgba(255, 255, 255, 0.5)",
                        color: attending === "no" ? "#5a3209" : "#7a5c2e",
                        fontWeight: attending === "no" ? 600 : 400,
                        transition: "all 0.2s",
                      }}
                    >
                      Regretfully Decline
                    </button>
                  </div>
                </div>

                {/* Guest Count */}
                {attending === "yes" && (
                  <div style={{ marginBottom: "1rem" }}>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Montserrat', sans-serif",
                        fontWeight: 500,
                        fontSize: "0.62rem",
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "rgba(90, 55, 10, 0.8)",
                        marginBottom: "0.35rem",
                      }}
                    >
                      Number of Guests Attending
                    </label>
                    <select
                      value={guestCount}
                      onChange={(e) => setGuestCount(e.target.value)}
                      style={{
                        width: "100%",
                        background: "rgba(255, 252, 245, 0.75)",
                        border: "0.8px solid rgba(139, 105, 20, 0.4)",
                        borderRadius: 3,
                        padding: "0.6rem 0.9rem",
                        fontFamily: "'Montserrat', sans-serif",
                        fontSize: "0.82rem",
                        color: "#3d2a08",
                        outline: "none",
                      }}
                    >
                      <option value="1">1 Person</option>
                      <option value="2">2 Persons</option>
                      <option value="3">3 Persons</option>
                      <option value="4">4 Persons</option>
                      <option value="5+">Family (5+ Persons)</option>
                    </select>
                  </div>
                )}

                {/* Warm Wishes */}
                <div style={{ marginBottom: "1.2rem" }}>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 500,
                      fontSize: "0.62rem",
                      letterSpacing: "0.22em",
                      textTransform: "uppercase",
                      color: "rgba(90, 55, 10, 0.8)",
                      marginBottom: "0.35rem",
                    }}
                  >
                    Warm Wishes &amp; Blessings (Optional)
                  </label>
                  <textarea
                    rows={2}
                    value={wishes}
                    onChange={(e) => setWishes(e.target.value)}
                    placeholder="Leave a heartfelt blessing for the couple..."
                    style={{
                      width: "100%",
                      background: "rgba(255, 252, 245, 0.75)",
                      border: "0.8px solid rgba(139, 105, 20, 0.4)",
                      borderRadius: 3,
                      padding: "0.6rem 0.9rem",
                      fontFamily: "'Montserrat', sans-serif",
                      fontSize: "0.82rem",
                      color: "#3d2a08",
                      outline: "none",
                      resize: "none",
                    }}
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={submitting}
                  style={{
                    width: "100%",
                    padding: "0.85rem",
                    fontFamily: "'Montserrat', sans-serif",
                    fontWeight: 500,
                    fontSize: "0.68rem",
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    border: "0.8px solid rgba(139, 105, 20, 0.5)",
                    borderRadius: 3,
                    background: "rgba(184, 134, 11, 0.15)",
                    color: "#5a3209",
                    cursor: submitting ? "not-allowed" : "pointer",
                    transition: "all 0.3s ease",
                  }}
                  className="hover:bg-[#8B5E1A] hover:text-white"
                >
                  {submitting ? "Submitting RSVP…" : "Confirm RSVP"}
                </button>
              </form>
            </>
          )}
        </div>

        {/* Compliments & Closing Footer */}
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "9px",
              letterSpacing: "0.32em",
              color: "#C9A96E",
              textTransform: "uppercase",
              marginBottom: 8,
            }}
          >
            With Best Compliments from:
          </div>

          <div
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "14px",
              fontWeight: 700,
              color: "#F5E6C8",
              lineHeight: 1.6,
              marginBottom: 10,
            }}
          >
            Sahoo &amp; Rath Family
          </div>

          <div
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "13px",
              color: "#D8C2A0",
              lineHeight: 1.5,
              marginBottom: 16,
            }}
          >
            Smt. Gitanjali Behera &amp; Shri Tankadhar Sahoo
            <br />
            Dr. Geetashree Mishra &amp; Dr. Krushna Chandra Rath
          </div>

          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.28em",
              color: "#B8860B",
              marginBottom: 14,
            }}
          >
            #PratikshaWedsSankalp
          </div>

          <p
            style={{
              fontFamily: "'Times New Roman', serif",
              fontSize: "12px",
              color: "#A08055",
              letterSpacing: "0.1em",
            }}
          >
            27 November &nbsp;·&nbsp; Ruby by Occasions, Bhubaneswar
          </p>

          <GoldDiamondDivider my="16px" />
        </div>
      </div>
    </section>
  );
};
