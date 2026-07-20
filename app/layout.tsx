import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Headline face — Geist, the sans sibling designed to pair with Geist Mono.
// (Reference site's headline is the licensed "GT Pressura Extended", which
// can't be legally bundled without a license.)
const grotesk = Geist({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-grotesk",
  display: "swap",
});

// Body & micro-labels — Geist Mono, the exact monospace used on the reference site.
const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-geist-mono",
  display: "swap",
});

const SITE_URL = "https://hunterzhangconsulting.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Hunter Zhang — Agentic Automation for Professionals & Enterprises",
  description:
    "I help senior professionals and lean enterprises build agentic AI automation they can own and maintain — becoming the most leveraged person in the room instead of the one being replaced.",
  keywords: [
    "AI automation",
    "agentic automation",
    "AI consulting",
    "enterprise AI",
    "workflow automation",
    "Hunter Zhang",
  ],
  openGraph: {
    title: "Hunter Zhang — Agentic Automation",
    description:
      "Agentic AI automation for high-profile professionals and lean enterprises. Systems you own and maintain, shipped to production in weeks.",
    url: SITE_URL,
    siteName: "Hunter Zhang",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hunter Zhang — Agentic Automation",
    description:
      "Agentic AI automation for high-profile professionals and lean enterprises.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${grotesk.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
