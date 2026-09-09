/*
  Hero section.
  The tall banner at the top of a page. It has a background video, a
  dark scrim, and the page's main heading and call to action on top.

  The heading and supporting text are passed in as children so each
  page can supply its own wording.
*/

import { BackgroundVideo } from "@/components/background-video";

type HeroSectionProps = {
  /* Path to the background video file */
  videoSource: string;
  /* Still image shown until the video loads */
  posterImage: string;
  /* Heading, sub text, and the call to action for this page */
  children: React.ReactNode;
};

export function HeroSection({
  videoSource,
  posterImage,
  children,
}: HeroSectionProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="
        hero-section relative z-0 flex h-[85dvh] flex-col items-center
        justify-center overflow-hidden rounded-brand bg-night
      "
    >
      <BackgroundVideo videoSource={videoSource} posterImage={posterImage} />

      {/* Content sits above the video and scrim. */}
      <div className="relative flex flex-col gap-8 px-6 text-left text-paper">
        {children}
      </div>
    </section>
  );
}
