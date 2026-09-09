/*
  Solutions section.
  The "Solutions That Truly Matter" block on the home page. It holds the
  grid of product cards. The grid is one column on phones and three
  columns on wide screens.
*/

import { SolutionCard } from "@/components/solution-card";
import { solutions } from "@/lib/solutions";

export function SolutionsSection() {
  return (
    <section
      id="gravity-tools"
      aria-labelledby="solutions-heading"
      className="flex flex-col gap-4 px-6 md:px-12 lg:px-8"
    >
      <h2 id="solutions-heading">
        Solutions That Truly <em>Matter</em>
      </h2>

      {/* role="list" keeps the list meaning even though bullets are removed. */}
      <ul
        role="list"
        className="grid list-none grid-cols-1 gap-x-12 gap-y-20 min-[71.75em]:grid-cols-3"
      >
        {solutions.map((solution) => (
          <li key={solution.slug}>
            <SolutionCard solution={solution} />
          </li>
        ))}
      </ul>
    </section>
  );
}
