import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const grotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-grotesk",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
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
