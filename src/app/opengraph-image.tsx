import { ImageResponse } from "next/og";
import { content } from "@/data/content";

export const alt = `${content.profile.name} - ${content.labels.portfolioTitle}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#fcf9f8",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            alignSelf: "flex-start",
            gap: 12,
            padding: "10px 20px",
            borderRadius: 999,
            backgroundColor: "#e3dfff",
            color: "#3525cd",
            fontSize: 24,
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              backgroundColor: "#3525cd",
            }}
          />
          {content.hero.badge}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 700,
              color: "#1b1b1e",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            {content.profile.name}
          </div>
          <div
            style={{
              maxWidth: 900,
              fontSize: 36,
              color: "#46464f",
              lineHeight: 1.4,
            }}
          >
            {content.profile.tagline}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 24,
            color: "#767680",
          }}
        >
          <span>{content.labels.portfolioTitle}</span>
          <span>{content.socials.email}</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}
