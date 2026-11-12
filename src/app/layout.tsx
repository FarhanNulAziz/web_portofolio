import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { content } from "@/data/content";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteTitle = `${content.profile.name} | ${content.labels.portfolioTitle}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: content.profile.tagline,
  openGraph: {
    type: "website",
    locale: "id_ID",
    siteName: content.labels.portfolioTitle,
    title: siteTitle,
    description: content.profile.tagline,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: content.profile.tagline,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fcf9f8",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${jetBrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-surface font-sans text-on-surface">
        <a
          href="#konten"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:inline-flex focus:min-h-10 focus:items-center focus:rounded-control focus:bg-primary-container focus:px-space-md focus:py-space-sm focus:text-label-md focus:text-on-primary focus:outline-2 focus:outline-offset-2 focus:outline-primary"
        >
          {content.labels.skipToContent}
        </a>
        {children}
      </body>
    </html>
  );
}
