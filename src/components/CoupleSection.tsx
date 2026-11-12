"use client";

import React, { useState } from "react";
import { GoldDiamondDivider, ShimmerBar } from "./Ornaments";

export const CoupleSection: React.FC = () => {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  const galleryPhotos = [
    {
      src: "/images/photo-2.jpg",
      title: "Laughter in the Golden Sun",
      caption: "A candid joy that lights up the world.",
      orientation: "portrait",
    },
    {
      src: "/images/photo-3.jpg",
      title: "Shared Smiles & Whispers",
      caption: "Conversations that turn everyday moments into magic.",
      orientation: "portrait",
    },
    {
      src: "/images/photo-4.jpg",
      title: "Peace Beside You",
      caption: "Two souls finding tranquil solace together.",
      orientation: "landscape",
    },
    {
      src: "/images/photo-5.jpg",
      title: "Framed In Love",
      caption: "Looking forward to an eternal horizon.",
      orientation: "landscape",
    },
    {
      src: "/images/photo-6.jpg",
      title: "The Radiant Bride",
      caption: "Pratiksha — elegance, grace, and pure warmth.",
      orientation: "portrait",
    },
    {
      src: "/images/photo-7.jpg",
      title: "The Joyful Groom",
      caption: "Sankalp — warmth, love, and endless devotion.",
      orientation: "portrait",
    },
    {
      src: "/images/photo-8.jpg",
      title: "Forever & Always",
      caption: "Every love story is beautiful, but ours is our favorite.",
      orientation: "landscape",
    },
  ];

  return (
    <section
      id="couple"
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
          zIndex: 2,
          width: "100%",
          maxWidth: 480,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Flourish Icon */}
        <div style={{ textAlign: "center", marginBottom: 6 }}>
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
        <div style={{ textAlign: "center", marginBottom: 6 }}>
          <div
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(22px, 6vw, 30px)",
              fontWeight: 900,
              color: "#F5E6C8",
              lineHeight: 1.2,
              letterSpacing: "0.04em",
              textShadow: "0 0 24px rgba(201,169,110,0.4)",
            }}
          >
            ✦ The Couple ✦
          </div>
        </div>

        <p
          style={{
            fontFamily: "'Great Vibes', cursive",
            fontSize: "clamp(24px, 6.5vw, 32px)",
            color: "#C9A96E",
            lineHeight: 1.1,
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Two Hearts, One Journey
        </p>

        <p
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: "italic",
            fontSize: "clamp(13px, 3.6vw, 15.5px)",
            color: "#D8C2A0",
            textAlign: "center",
            lineHeight: 1.7,
            maxWidth: 380,
            marginBottom: 26,
          }}
        >
          &ldquo;When soul meets soul in sacred grace, time stands still and
          destiny gently takes its rightful place.&rdquo;
        </p>

        {/* Couple Profile Cards */}
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 14,
            marginBottom: 28,
          }}
        >
          {/* Bride Card */}
          <div
            style={{
              background: "rgba(255, 252, 243, 0.07)",
              border: "1px solid rgba(201,169,110,0.35)",
              borderRadius: 10,
              padding: "16px 12px",
              textAlign: "center",
              backdropFilter: "blur(8px)",
              boxShadow: "0 6px 24px rgba(0,0,0,0.4)",
            }}
          >
            <div
              style={{
                width: 90,
                height: 90,
                margin: "0 auto 12px",
                borderRadius: "50%",
                border: "2px solid #C9A96E",
                overflow: "hidden",
                boxShadow: "0 0 0 4px rgba(201,169,110,0.15)",
              }}
            >
              <img
                src="/images/bride-pratiksha.jpg"
                alt="Pratiksha Sahoo"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "45% 38%",
                  transform: "scale(1.25)",
                  transformOrigin: "45% 38%",
                }}
              />
            </div>
            <div
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "14px",
                fontWeight: 700,
                color: "#F5E6C8",
                letterSpacing: "0.04em",
              }}
            >
              Pratiksha
            </div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "12px",
                color: "#C9A96E",
                marginTop: 2,
              }}
            >
              The Bride
            </div>
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "8.5px",
                letterSpacing: "0.15em",
                color: "#BCA37F",
                textTransform: "uppercase",
                marginTop: 6,
              }}
            >
              D/o Smt. Gitanjali Behera &amp; Shri Tankadhar Sahoo
            </div>
          </div>

          {/* Groom Card */}
          <div
            style={{
              background: "rgba(255, 252, 243, 0.07)",
              border: "1px solid rgba(201,169,110,0.35)",
              borderRadius: 10,
              padding: "16px 12px",
              textAlign: "center",
              backdropFilter: "blur(8px)",
              boxShadow: "0 6px 24px rgba(0,0,0,0.4)",
            }}
          >
            <div
              style={{
                width: 90,
                height: 90,
                margin: "0 auto 12px",
                borderRadius: "50%",
                border: "2px solid #C9A96E",
                overflow: "hidden",
                boxShadow: "0 0 0 4px rgba(201,169,110,0.15)",
              }}
            >
              <img
                src="/images/groom-sankalp.jpg"
                alt="Sankalp Rath"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "72% 26%",
                  transform: "scale(1.55)",
                  transformOrigin: "72% 26%",
                }}
              />
            </div>
            <div
              style={{
                fontFamily: "'Cinzel Decorative', serif",
                fontSize: "14px",
                fontWeight: 700,
                color: "#F5E6C8",
                letterSpacing: "0.04em",
              }}
            >
              Sankalp
            </div>
            <div
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: "italic",
                fontSize: "12px",
                color: "#C9A96E",
                marginTop: 2,
              }}
            >
              The Groom
            </div>
            <div
              style={{
                fontFamily: "'Cinzel', serif",
                fontSize: "8.5px",
                letterSpacing: "0.15em",
                color: "#BCA37F",
                textTransform: "uppercase",
                marginTop: 6,
              }}
            >
              S/o Dr. Geetashree Mishra &amp; Dr. Krushna Chandra Rath
            </div>
          </div>
        </div>

        {/* Gallery Subtitle */}
        <div style={{ textAlign: "center", marginBottom: 16 }}>
          <div
            style={{
              fontFamily: "'Cinzel', serif",
              fontSize: "11px",
              letterSpacing: "0.28em",
              color: "#C9A96E",
              textTransform: "uppercase",
            }}
          >
            ✦ Captured Moments ✦
          </div>
        </div>

        {/* Photo Gallery Grid displaying all photographs */}
        <div
          style={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: 12,
            marginBottom: 20,
          }}
        >
          {galleryPhotos.map((photo, idx) => (
            <div
              key={idx}
              onClick={() => setActivePhoto(photo.src)}
              style={{
                position: "relative",
                borderRadius: 8,
                overflow: "hidden",
                cursor: "pointer",
                border: "1px solid rgba(201,169,110,0.3)",
                boxShadow: "0 4px 18px rgba(0,0,0,0.35)",
                gridColumn: photo.orientation === "landscape" ? "span 2" : "span 1",
                height: photo.orientation === "landscape" ? 210 : 230,
                transition: "transform 0.3s ease, border-color 0.3s ease",
              }}
              className="group hover:scale-[1.02] hover:border-[#C9A96E]"
            >
              <img
                src={photo.src}
                alt={photo.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.6s ease",
                }}
                className="group-hover:scale-105"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to top, rgba(16,7,0,0.85) 0%, rgba(16,7,0,0.2) 40%, transparent 100%)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "12px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Cinzel Decorative', serif",
                    fontSize: "12px",
                    fontWeight: 700,
                    color: "#F5E6C8",
                  }}
                >
                  {photo.title}
                </div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontStyle: "italic",
                    fontSize: "11px",
                    color: "#C9A96E",
                    lineHeight: 1.3,
                  }}
                >
                  {photo.caption}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activePhoto && (
          <div
            onClick={() => setActivePhoto(null)}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 10000,
              background: "rgba(10,4,0,0.92)",
              backdropFilter: "blur(10px)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
              cursor: "zoom-out",
            }}
          >
            <div
              style={{
                position: "relative",
                maxWidth: "92vw",
                maxHeight: "90vh",
                borderRadius: 8,
                overflow: "hidden",
                border: "2px solid #C9A96E",
                boxShadow: "0 0 40px rgba(201,169,110,0.4)",
              }}
            >
              <img
                src={activePhoto}
                alt=""
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "85vh",
                  objectFit: "contain",
                  display: "block",
                }}
              />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActivePhoto(null);
                }}
                style={{
                  position: "absolute",
                  top: 12,
                  right: 12,
                  background: "rgba(0,0,0,0.65)",
                  border: "1px solid #C9A96E",
                  color: "#C9A96E",
                  borderRadius: "50%",
                  width: 32,
                  height: 32,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  fontSize: 16,
                }}
              >
                ✕
              </button>
            </div>
          </div>
        )}

        <GoldDiamondDivider my="18px" />
      </div>
    </section>
  );
};
