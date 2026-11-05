import React from "react";

export const GoldDiamondDivider = ({ my = "10px" }: { my?: string }) => (
  <div
    style={{
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      margin: `${my} 0`,
    }}
  >
    <div
      style={{
        flex: 1,
        height: 1,
        background: "linear-gradient(to right, transparent, #C9A96E)",
      }}
    />
    <svg width="15" height="15" viewBox="0 0 16 16" fill="#C9A96E">
      <polygon points="8,0 9.5,6.5 16,8 9.5,9.5 8,16 6.5,9.5 0,8 6.5,6.5" />
    </svg>
    <div
      style={{
        flex: 1,
        height: 1,
        background: "linear-gradient(to left, transparent, #C9A96E)",
      }}
    />
  </div>
);

export const DoubleGoldLine = ({ op = 1 }: { op?: number }) => (
  <div
    style={{
      width: "100%",
      display: "flex",
      flexDirection: "column",
      gap: 3,
      margin: "8px 0",
      opacity: op,
    }}
  >
    <div
      style={{
        height: 1,
        background:
          "linear-gradient(to right, transparent, #C9A96E 30%, #C9A96E 70%, transparent)",
      }}
    />
    <div
      style={{
        height: 1,
        background:
          "linear-gradient(to right, transparent, rgba(201,169,110,0.4) 30%, rgba(201,169,110,0.4) 70%, transparent)",
      }}
    />
  </div>
);

export const ShimmerBar = ({
  margin = "0 10% 18px",
  delay = "0s",
}: {
  margin?: string;
  delay?: string;
}) => (
  <div
    style={{
      margin,
      height: 1,
      background:
        "linear-gradient(90deg, transparent 0%, #C9A96E 25%, #FFD700 50%, #C9A96E 75%, transparent 100%)",
      backgroundSize: "200% auto",
      animation: `shimmerBar 3.5s ${delay} linear infinite`,
    }}
  />
);

export const ArchOutlineSVG = () => (
  <svg
    viewBox="0 0 320 520"
    style={{
      position: "absolute",
      width: "min(320px, 88vw)",
      height: "auto",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      opacity: 0.18,
      zIndex: 1,
      pointerEvents: "none",
    }}
  >
    <path
      d="M20,520 L20,200 Q20,20 160,20 Q300,20 300,200 L300,520"
      fill="none"
      stroke="#C9A96E"
      strokeWidth="1.5"
    />
    <path
      d="M44,520 L44,205 Q44,48 160,48 Q276,48 276,205 L276,520"
      fill="none"
      stroke="#C9A96E"
      strokeWidth="0.8"
    />
    <path
      d="M130,20 Q160,2 190,20"
      fill="none"
      stroke="#C9A96E"
      strokeWidth="1"
    />
    <circle cx="160" cy="16" r="5" fill="none" stroke="#C9A96E" strokeWidth="1" />
    {[20, 300].map((x, i) => (
      <g key={i}>
        <rect
          x={x - 8}
          y={490}
          width={16}
          height={30}
          fill="none"
          stroke="#C9A96E"
          strokeWidth="1"
        />
        <rect
          x={x - 12}
          y={485}
          width={24}
          height={7}
          fill="none"
          stroke="#C9A96E"
          strokeWidth="0.8"
        />
      </g>
    ))}
    {[
      [20, 20],
      [300, 20],
      [20, 280],
      [300, 280],
    ].map(([x, y], i) => (
      <circle
        key={i}
        cx={x}
        cy={y}
        r={6}
        fill="none"
        stroke="#C9A96E"
        strokeWidth="0.8"
      />
    ))}
  </svg>
);

export const FloatingStarsCanvas = () => {
  const dots = [
    { x: "12%", y: "18%", s: 3, d: "0s" },
    { x: "88%", y: "14%", s: 2, d: "0.8s" },
    { x: "7%", y: "60%", s: 2, d: "1.3s" },
    { x: "93%", y: "55%", s: 3, d: "0.4s" },
    { x: "22%", y: "85%", s: 2, d: "1.8s" },
    { x: "78%", y: "82%", s: 2, d: "0.9s" },
    { x: "50%", y: "8%", s: 2, d: "1.1s" },
    { x: "35%", y: "92%", s: 2, d: "0.6s" },
    { x: "65%", y: "90%", s: 2, d: "1.5s" },
  ];

  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {dots.map((dot, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            left: dot.x,
            top: dot.y,
            width: dot.s,
            height: dot.s,
            borderRadius: "50%",
            background: "#C9A96E",
            animation: `dotFloat ${2.8 + i * 0.3}s ease-in-out ${dot.d} infinite`,
          }}
        />
      ))}
    </div>
  );
};
