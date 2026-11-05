import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: "#F5E6C8",
          DEFAULT: "#C9A96E",
          deep: "#B8860B",
          dark: "#8B5E1A",
        },
        royal: {
          bg: "#1a0c02",
          darkBg: "#120801",
          card: "rgba(255, 252, 243, 0.7)",
          textDark: "#1E0E00",
          textMuted: "#5C3A10",
        },
      },
      fontFamily: {
        cinzel: ["'Cinzel'", "serif"],
        "cinzel-decorative": ["'Cinzel Decorative'", "serif"],
        vibes: ["'Great Vibes'", "cursive"],
        cormorant: ["'Cormorant Garamond'", "serif"],
        montserrat: ["'Montserrat'", "sans-serif"],
        times: ["'Times New Roman'", "serif"],
      },
      keyframes: {
        petalFall: {
          "0%": { transform: "translateY(-50px) translateX(0) rotate(var(--rot, 0deg))", opacity: "0" },
          "8%": { opacity: "0.95" },
          "92%": { opacity: "0.8" },
          "100%": { transform: "translateY(110vh) translateX(var(--pd, 40px)) rotate(calc(var(--rot, 0deg) + 500deg))", opacity: "0" },
        },
        lanternRise: {
          "0%": { transform: "translateY(110vh) translateX(0) scale(var(--ls, 1))", opacity: "0" },
          "7%": { opacity: "1" },
          "93%": { opacity: "0.75" },
          "100%": { transform: "translateY(-120px) translateX(var(--ld, 30px)) scale(var(--ls, 1))", opacity: "0" },
        },
        butterflyDrift: {
          "0%": { transform: "translateY(105vh) translateX(0) rotate(-6deg)", opacity: "0" },
          "6%": { opacity: "0.9" },
          "50%": { transform: "translateY(30vh) translateX(var(--bd, 20px)) rotate(6deg)", opacity: "0.85" },
          "94%": { opacity: "0.6" },
          "100%": { transform: "translateY(-60px) translateX(calc(var(--bd, 20px) * 1.6)) rotate(-4deg)", opacity: "0" },
        },
        sparkleTwinkle: {
          "0%, 100%": { opacity: "0", transform: "scale(0.15) rotate(0deg)" },
          "50%": { opacity: "1", transform: "scale(1) rotate(180deg)" },
        },
        starBlink: {
          "0%, 100%": { opacity: "0.15" },
          "50%": { opacity: "0.9" },
        },
        goldPulse: {
          "0%, 100%": { opacity: "0.85", textShadow: "0 0 6px rgba(201,169,110,0.25)" },
          "50%": { opacity: "1", textShadow: "0 0 24px rgba(201,169,110,0.95), 0 0 48px rgba(184,134,11,0.5)" },
        },
        floatBob: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmerBar: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        loaderGlow: {
          "0%, 100%": { textShadow: "0 0 60px rgba(201,169,110,0.35), 0 4px 24px rgba(180,110,30,0.3)" },
          "50%": { textShadow: "0 0 90px rgba(201,169,110,0.6), 0 4px 40px rgba(180,110,30,0.5)" },
        },
        loaderFade: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
        tapPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201,169,110,0.5), 0 0 0 0 rgba(201,169,110,0.3)" },
          "60%": { boxShadow: "0 0 0 14px rgba(201,169,110,0), 0 0 0 28px rgba(201,169,110,0)" },
        },
      },
      animation: {
        petal: "petalFall var(--dur, 9s) var(--delay, 0s) ease-in-out infinite",
        lantern: "lanternRise var(--dur, 12s) var(--delay, 0s) ease-in-out infinite",
        butterfly: "butterflyDrift var(--dur, 11s) var(--delay, 0s) ease-in-out infinite",
        sparkle: "sparkleTwinkle var(--dur, 3s) var(--delay, 0s) ease-in-out infinite",
        star: "starBlink var(--dur, 2.5s) var(--delay, 0s) ease-in-out infinite",
        goldPulse: "goldPulse 4s ease-in-out infinite",
        float: "floatBob 4s ease-in-out infinite",
        shimmer: "shimmerBar 3.5s linear infinite",
        loaderGlow: "loaderGlow 3s ease-in-out infinite",
        loaderFade: "loaderFade 2.5s ease-in-out infinite",
        tapPulse: "tapPulse 2.2s ease-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
