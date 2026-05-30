import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: 6,
          background: "#1c3d2a",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          fontWeight: 700,
          fontSize: 14,
          color: "white",
          letterSpacing: "-0.5px",
        }}
      >
        FP
      </div>
    ),
    { ...size }
  );
}
