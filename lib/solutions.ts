/*
  The three products shown in the "Solutions That Truly Matter" grid on
  the home page. Text is copied word for word from the original site.
*/

export type Solution = {
  /* Short id used for element ids, for example "orbit" */
  slug: string;
  /* Product name shown as the card heading */
  name: string;
  /* Release month shown above the heading */
  releaseDate: string;
  /* Image path inside /public */
  imageSource: string;
  /* Description paragraph */
  description: string;
  /* Optional link out to the product. Left out for products not yet live. */
  link?: {
    label: string;
    href: string;
  };
};

export const solutions: Solution[] = [
  {
    slug: "apollo",
    name: "Apollo",
    releaseDate: "September 2026",
    imageSource: "/images/orbit-apollo.jpg",
    description:
      "Built to solve the pain points that make traditional Enterprise Resource Planning software feel broken. Role-based login shows each buyer their own account-specific pricing, stock, and warehouse access. Smart parsing turns messy SKUs and old invoices into accurate quotes instantly. Buyers reorder straight from purchase history or paste in SKUs, and activity logs give full visibility into what's happening behind the scenes.",
    link: {
      label: "Explore the Apollo Project",
      href: "https://apollo.gogogravity.com",
    },
  },
  {
    slug: "orbit",
    name: "Orbit",
    releaseDate: "July 2026",
    imageSource: "/images/orbit-card.avif",
    description:
      "Lightweight accessibility assistant. Runs right it your browser, scans the current page and flags violations by severity. It doesn't fix issues or certify compliance, its a starting point that finds the lowest hanging fruit before you do a manual review.",
    link: {
      label: "Download the Orbit Chrome Extension",
      href: "https://chromewebstore.google.com/detail/orbit/nflfajnljpdmndndfeeaagljhgjailco",
    },
  },
  {
    slug: "radar",
    name: "Radar",
    releaseDate: "August 2026",
    imageSource: "/images/radar-card.avif",
    description:
      "Radar looks for accessibility problems on any website you paste into the search bar. It scans the page, shows you what's wrong, and explains each issue in plain English. It doesn't fix problems or guarantee compliance, it points out where each issue lives on the page and gives you a prompt you can hand to a developer or AI tool for review",
    link: {
      label: "Try Radar Today!",
      href: "https://radar.gogogravity.com",
    },
  },
];
