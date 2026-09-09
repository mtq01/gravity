/*
  Local, self-hosted web fonts.
  Next.js bundles these files with the site, so the browser never has to
  call an outside font service. That keeps the layout from jumping while
  fonts load and it protects the reader's privacy.

  Each font exposes a CSS variable that we hand to Tailwind in globals.css:
    --font-atkinson  -> body text  (Atkinson Hyperlegible)
    --font-dm-serif  -> headings   (DM Serif Text)
*/

import localFont from "next/font/local";

/* Body font. Atkinson Hyperlegible is built for high readability. */
export const atkinsonHyperlegible = localFont({
  src: [
    {
      path: "./fonts/AtkinsonHyperlegible-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/AtkinsonHyperlegible-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/AtkinsonHyperlegible-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/AtkinsonHyperlegible-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-atkinson",
  display: "swap",
  fallback: ["Arial", "sans-serif"],
});

/* Heading font. DM Serif Text gives the titles their classic serif look. */
export const dmSerifText = localFont({
  src: [
    {
      path: "./fonts/DMSerifText-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/DMSerifText-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-dm-serif",
  display: "swap",
  fallback: ["Georgia", "serif"],
});
