import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "64px",
          background: "#0A0A0F",
          color: "white",
        }}
      >
        <div style={{ fontSize: 20, letterSpacing: 8, color: "#6C4BFF" }}>STACK STUDIO</div>
        <div style={{ marginTop: 24, fontSize: 60, fontWeight: 700, maxWidth: 960, lineHeight: 1.1 }}>
          We Build &amp; Scale Software That Moves Your Business Forward
        </div>
        <div style={{ marginTop: 20, fontSize: 24, color: "#22D3EE" }}>
          Full Stack · MERN · AI Agents · SaaS
        </div>
      </div>
    ),
    { ...size },
  );
}
