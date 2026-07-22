import { Inter as FontSans } from "next/font/google";

/**
 * Main website font
 *
 * next/font automatically:
 * - Self-hosts the font
 * - Optimizes font loading
 * - Generates WOFF2 files
 * - Preloads required font files
 * - Prevents external Google Fonts requests
 */
export const fontSans = FontSans({
  subsets: ["latin"],

  // CSS variable used by Tailwind
  variable: "--font-sans",

  // Show fallback font until Inter is available
  display: "swap",

  // Preload important font resource
  preload: true,

  // Prevent synthetic styles where possible
  style: ["normal"],
});