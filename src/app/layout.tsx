import type { Metadata, Viewport } from "next";
import { Hind, JetBrains_Mono, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";

import { ThemeProvider } from "@/components/ThemeProvider";

import "./globals.css";

/**
 * Two faces, deliberately paired.
 *
 * Space Grotesk carries the headings — its wide apertures and slightly technical
 * shapes suit a programming course and give the page a voice.
 * Plus Jakarta Sans carries the body — warmer and rounder than Inter, which
 * makes long explanations easier to sit with.
 */
const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display-face",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

/**
 * Devanagari for the Hindi track.
 *
 * Hind is drawn for on-screen reading and carries a noticeably larger apparent
 * size than Noto Sans Devanagari at the same pixel value, which is what made
 * Hindi pages feel cramped next to the English ones.
 */
const devanagari = Hind({
  subsets: ["devanagari", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-devanagari",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-code",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "KotlinPath — Learn Kotlin and Android",
    template: "%s · KotlinPath",
  },
  description:
    "A complete, visual, trilingual course on Kotlin and Android development, from absolute beginner to production.",
  applicationName: "KotlinPath",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f6f3" },
    { media: "(prefers-color-scheme: dark)", color: "#14161f" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${devanagari.variable} ${mono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
