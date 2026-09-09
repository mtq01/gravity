/*
  The outside standards and resources Orbit is built on, shown in the
  "Discover Orbit" section. Text is copied word for word from the
  original site.
*/

export type ResearchLink = {
  /* Resource name, shown as a small heading */
  title: string;
  /* Short explanation of what it is */
  description: string;
  /* Address of the resource (opens in a new tab) */
  href: string;
};

export const researchLinks: ResearchLink[] = [
  {
    title: "Axe-core",
    description:
      "The open-source accessibility testing engine that powers Orbit's automated scans, built and maintained by Deque Systems and used across the industry.",
    href: "https://www.deque.com/axe/core-documentation/api-documentation/",
  },
  {
    title: "WCAG Guidelines",
    description:
      'The Web Content Accessibility Guidelines. The official W3C standard that defines what "accessible" means, and the benchmark Orbit\'s contrast checker and scanner test against.',
    href: "https://www.w3.org/TR/WCAG21/",
  },
  {
    title: "The A11y Project",
    description:
      "A community-driven effort making web accessibility easier to understand, with practical resources and the checklist that powers Orbit's manual audit tab.",
    href: "https://www.a11yproject.com/checklist/",
  },
];
