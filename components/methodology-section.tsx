/*
  Methodology section.
  A dark panel with a background video that explains what Orbit checks
  on its own and what still needs a person. Two lists sit side by side
  on tablets and up, and stack on phones.
  All wording is copied from the original site.
*/

import { BackgroundVideo } from "@/components/background-video";

/* Checks Orbit can run automatically. */
const automatedChecks: string[] = [
  "Missing or empty alt attributes",
  "Insufficient color contrast ratios",
  "Missing form labels",
  "Invalid or misused ARIA attributes",
  "Missing document landmarks",
  "Duplicate IDs",
  "Missing page language attributes",
  "Heading structure issues (ex. skipped levels)",
];

/* Checks that need a human reviewer. */
const humanChecks: string[] = [
  "Alt text accuracy and meaning, not just presence",
  "Logical reading order for screen reader users",
  "True keyboard operability of custom widgets",
  "Clarity of error messages",
  "Content that makes sense out of visual context",
  "Intuitive interactions for screen reader and switch device users",
  "No automated scanner, including Orbit, can verify these.",
];

export function MethodologySection() {
  return (
    <section
      id="methodology"
      aria-labelledby="methodology-heading"
      className="
        relative z-0 flex min-h-[40.625rem] flex-col items-center gap-16
        overflow-hidden rounded-brand bg-night p-8 text-paper
        md:flex-row md:p-12 lg:p-32
      "
    >
      <BackgroundVideo
        videoSource="/videos/orbit-video.mp4"
        posterImage="/images/orbit-moon.jpg"
      />

      <div className="relative z-[1] flex flex-col gap-12">
        <h2 id="methodology-heading">Methodology</h2>

        <p className="text-lg">
          Orbit automates what can be reliably automated, and is transparent
          about the rest. Automated tools like axe-core are excellent at catching
          objective, rule-based violations, but a meaningful share of WCAG
          success criteria require human judgment.
        </p>

        <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
          {/* Column one: automated checks. */}
          <div className="flex-[1_1_100%] md:flex-[0_0_50%]">
            <h3>What&apos;s Automated</h3>
            <ul role="list" className="list-disc py-4 pl-8 text-lg">
              {automatedChecks.map((checkItem) => (
                <li key={checkItem}>{checkItem}</li>
              ))}
            </ul>
          </div>

          {/* Column two: checks that need a person. */}
          <div className="flex-[1_1_100%] md:flex-[0_0_50%]">
            <h3>What Needs a Human Touch</h3>
            <ul role="list" className="list-disc py-4 pl-8 text-lg">
              {humanChecks.map((checkItem) => (
                <li key={checkItem}>{checkItem}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
