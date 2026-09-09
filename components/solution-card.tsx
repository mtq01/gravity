/*
  Solution card.
  One product in the home page grid: an image, the release month, the
  product name, a short description, and an optional link out.
*/

import Image from "next/image";

import type { Solution } from "@/lib/solutions";

type SolutionCardProps = {
  solution: Solution;
};

export function SolutionCard({ solution }: SolutionCardProps) {
  /* Tie the card's label to its heading for screen readers. */
  const headingId = `solution-${solution.slug}-title`;

  return (
    <article
      aria-labelledby={headingId}
      className="flex flex-col gap-4 sm:min-w-60"
    >
      {/*
        The image is decorative, so its alt text is empty. The heading
        and description already describe the product.
      */}
      <Image
        src={solution.imageSource}
        alt=""
        width={1600}
        height={900}
        className="aspect-[16/9] w-full rounded-brand-sm object-cover"
      />

      <span>{solution.releaseDate}</span>

      <h3 id={headingId}>{solution.name}</h3>

      <p>{solution.description}</p>

      {solution.link ? (
        <div>
          <a
            href={solution.link.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {solution.link.label}
            {/* Small icon marking an outside link. Meaning is in the text below. */}
            <img
              src="/icons/external-link-dark.svg"
              alt=""
              width={20}
              height={20}
              className="ml-1 inline w-5 align-baseline"
            />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      ) : null}
    </article>
  );
}
