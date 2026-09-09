/*
  Root layout.
  Wraps every page with the shared shell: the skip link, the site
  header, the <main> landmark, and the site footer. The two brand fonts
  are loaded here so they apply to the whole site.
*/

import type { Metadata, Viewport } from "next";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkipLink } from "@/components/skip-link";
import { atkinsonHyperlegible, dmSerifText } from "./fonts";
import "./globals.css";

/* Page title and other head tags. Each page can override the title. */
export const metadata: Metadata = {
  title: {
    default: "Home | Gravity",
    template: "%s | Gravity",
  },
  description:
    "A small team building tools that are honest about what they do, and what they don't.",
  applicationName: "Gravity",
  appleWebApp: {
    title: "Gravity",
  },
};

/* Tell mobile browsers to use the full screen width. */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${atkinsonHyperlegible.variable} ${dmSerifText.variable} antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <SkipLink />
        <SiteHeader />

        {/*
          tabIndex={-1} lets the skip link move keyboard focus here.
          The huge gap and bottom padding match the original spacing.
        */}
        <main
          id="main-content"
          tabIndex={-1}
          className="mx-auto flex w-full max-w-[1600px] flex-col justify-center gap-60 px-4 pb-60 pt-0"
        >
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}
