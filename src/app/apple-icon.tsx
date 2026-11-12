import { ImageResponse } from "next/og";
import { content } from "@/data/content";
import { getInitials } from "@/lib/getInitials";

export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 40,
          backgroundColor: "#4f46e5",
          color: "#ffffff",
          fontSize: 80,
          fontWeight: 700,
          fontFamily: "sans-serif",
          letterSpacing: "-0.03em",
        }}
      >
        {getInitials(content.profile.name)}
      </div>
    ),
    {
      ...size,
    },
  );
}
