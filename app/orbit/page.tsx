/*
  Orbit page ("/orbit").
  Sections in order: hero, a short statement, the research panel,
  a second statement, and the methodology panel.
*/

import type { Metadata } from "next";

import { CallToActionLink } from "@/components/call-to-action-link";
import { HeroSection } from "@/components/hero-section";
import { MethodologySection } from "@/components/methodology-section";
import { ResearchSection } from "@/components/research-section";
import { StatementSection } from "@/components/statement-section";
import { ORBIT_EXTENSION_URL } from "@/lib/external-links";

/* Becomes "Orbit | Gravity" in the browser tab. */
export const metadata: Metadata = {
  title: "Orbit",
};

export default function OrbitPage() {
  return (
    <>
      <HeroSection
        videoSource="/videos/orbit-research.mp4"
        posterImage="/images/orbit-moon.jpg"
      >
        <p className="text-2xl">
          <strong>Orbit</strong> | Accessibility Assistant
        </p>

        <h1 id="hero-heading">
          <em>Accessibility</em> checks, built into every tab.
        </h1>

        <div className="flex gap-8">
          <CallToActionLink href={ORBIT_EXTENSION_URL} isExternal>
            Get The Orbit Extension
          </CallToActionLink>
        </div>
      </HeroSection>

      <StatementSection id="get-orbit" headingText="Say Hello to Orbit">
        Built on <strong>open standards</strong>, not <em>guesswork.</em>
      </StatementSection>

      <ResearchSection />

      <StatementSection id="orbit-transparency" headingText="Orbit Capabilities">
        A <strong>gravity</strong> tool, designed for transparency.
      </StatementSection>

      <MethodologySection />
    </>
  );
}
