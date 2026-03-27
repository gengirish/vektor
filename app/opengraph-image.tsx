import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "VEKTOR — The Gateway. Evolved.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#07070A",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Gold border frame */}
        <div
          style={{
            position: "absolute",
            inset: "24px",
            border: "1px solid rgba(232,168,32,0.3)",
            display: "flex",
          }}
        />
        {/* Top label */}
        <div
          style={{
            color: "#E8A820",
            fontSize: "16px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          Dharwad, Karnataka · Est. 2024
        </div>
        {/* Company name */}
        <div
          style={{
            color: "#EAE6DC",
            fontSize: "96px",
            fontWeight: 900,
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            marginBottom: "24px",
          }}
        >
          VEKTOR
        </div>
        {/* Tagline */}
        <div
          style={{
            color: "#E8A820",
            fontSize: "36px",
            fontWeight: 300,
            letterSpacing: "0.04em",
          }}
        >
          The Gateway. Evolved.
        </div>
        {/* Bottom badge */}
        <div
          style={{
            position: "absolute",
            bottom: "56px",
            left: "80px",
            color: "#5A5960",
            fontSize: "14px",
            letterSpacing: "0.12em",
          }}
        >
          ◆ Built in Dharwad. Built for the World.
        </div>
      </div>
    ),
    { ...size }
  );
}
