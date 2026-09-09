/*
  Research section ("Discover Orbit").
  A dark panel with a background video. On the left it explains that
  Orbit is built on well-known standards. On the right it lists those
  standards as links that open in a new tab.

  Layout: one column on phones, two columns on tablets and up.
*/

import { BackgroundVideo } from "@/components/background-video";
import { CallToActionLink } from "@/components/call-to-action-link";
import { Separator } from "@/components/ui/separator";
import { ORBIT_EXTENSION_URL } from "@/lib/external-links";
import { researchLinks } from "@/lib/research-links";

export function ResearchSection() {
  return (
    <section
      id="orbit-extension"
      aria-labelledby="research-heading"
      className="
        relative z-0 flex min-h-125 items-center overflow-hidden
        rounded-brand bg-night text-paper
      "
    >
      {/*
        Poster note: the original markup pointed at an image that does
        not exist, so we use the moon still image that ships with the site.
      */}
      <BackgroundVideo
        videoSource="/videos/orbit-moon.mp4"
        posterImage="/images/orbit-moon.jpg"
      />

      <div className="relative z-2 flex w-full flex-1 flex-col items-stretch gap-8 p-8 md:flex-row md:p-12 lg:p-32">
        {/* Left column: heading, paragraph, and the call to action. */}
        <div className="flex flex-col gap-8">
          <h2 id="research-heading">Discover Orbit</h2>

          <p className="text-[1.2rem] font-normal md:w-[65%]">
            We didn&apos;t invent our own accessibility rules. Orbit is built on
            axe-core, the same engine used by major testing tools industry-wide,
            and pairs it with WCAG 2.x contrast math and The A11y Project&apos;s
            community-maintained checklist, so what you see in Orbit reflects
            established, peer-reviewed accessibility guidance.
          </p>

          <div className="flex gap-8">
            <CallToActionLink href={ORBIT_EXTENSION_URL} isExternal>
              Get The Orbit Extension
            </CallToActionLink>
          </div>
        </div>

        {/* Right column: the list of standards Orbit relies on. */}
        <nav
          aria-label="Standards and resources Orbit is built on"
          className="md:flex-[0_0_40%]"
        >
          <ul role="list" className="flex list-none flex-col gap-8">
            {researchLinks.map((researchLink, index) => {
              const isLastLink = index === researchLinks.length - 1;

              return (
                <li key={researchLink.href}>
                  <a
                    href={researchLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between gap-4 text-paper no-underline hover:text-paper hover:underline"
                  >
                    <div className="flex flex-col gap-4">
                      <h3>{researchLink.title}</h3>
                      <p>{researchLink.description}</p>
                    </div>

                    <span aria-hidden="true">
                      <img
                        src="/icons/external-link.svg"
                        alt=""
                        width={50}
                        height={50}
                        className="w-6 max-w-none"
                      />
                    </span>

                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>

                  {/* Thin divider between links, like the original <hr>. */}
                  {isLastLink ? null : (
                    <Separator className="mt-8 bg-paper/30" />
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </section>
  );
}
