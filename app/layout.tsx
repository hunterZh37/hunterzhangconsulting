import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
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
  title: "Hunter Zhang · Agentic AI Automation",
  description:
    "Agentic AI automation for professionals and lean teams. You own what I build.",
  keywords: [
    "AI automation",
    "agentic automation",
    "AI consulting",
    "enterprise AI",
    "workflow automation",
    "Hunter Zhang",
  ],
  openGraph: {
    title: "Hunter Zhang · Agentic AI Automation",
    description:
      "Agentic AI automation for professionals and lean teams. You own what I build.",
    url: SITE_URL,
    siteName: "Hunter Zhang",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hunter Zhang · Agentic AI Automation",
    description:
      "Agentic AI automation for professionals and lean teams. You own what I build.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${grotesk.variable} ${mono.variable}`}
    >
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
