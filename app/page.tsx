/*
  Home page ("/").
  Two sections: the hero banner and the grid of Gravity tools.
*/

import { CallToActionLink } from "@/components/call-to-action-link";
import { HeroSection } from "@/components/hero-section";
import { SolutionsSection } from "@/components/solutions-section";

export default function HomePage() {
  return (
    <>
      <HeroSection
        videoSource="/videos/orbit-video.mp4"
        posterImage="/images/orbit-moon.jpg"
      >
        <h1 id="hero-heading">
          Built on open standards, <em>not guesswork.</em>
        </h1>

        <p className="text-2xl">
          A small team building tools that are honest about what they do, and
          what they dont.
        </p>

        <div className="flex gap-8">
          <CallToActionLink href="/#gravity-tools">
            View Gravity Tools
          </CallToActionLink>
        </div>
      </HeroSection>

      <SolutionsSection />
    </>
  );
}
