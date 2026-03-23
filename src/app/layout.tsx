import type { Metadata } from "next";
import { Inter, Playfair_Display, DM_Sans, DM_Mono } from "next/font/google";

import "./globals.css";

// Anthropic uses Tiempos Headline — Playfair Display is the closest free match
const displayFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500"],
});

// Anthropic uses Söhne — DM Sans is a clean geometric sans equivalent
const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const monoFont = DM_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Snitik Swaroop — Software Developer",
  description: "Software developer crafting thoughtful, performant systems — from elegant APIs to polished UIs.",
  openGraph: {
    title: "Snitik Swaroop — Software Developer",
    description: "Software developer crafting thoughtful, performant systems.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body className="bg-cream font-body text-ink antialiased">{children}</body>
    </html>
  );
}
