"use client";

/*
  Site header.
  Shows the Gravity wordmark on the left and the main menu on the right.
  It is a Client Component only so it can read the current URL and mark
  the matching menu link with aria-current="page".
*/

import Link from "next/link";
import { usePathname } from "next/navigation";

import { primaryNavigationLinks } from "@/lib/site-navigation";

/*
  Decide whether a menu link points at the page the visitor is on.
  "/orbit" is a simple match. "/#gravity-tools" counts as active only on
  the home page.
*/
function isCurrentPage(linkHref: string, currentPath: string): boolean {
  if (linkHref.startsWith("/#")) {
    return currentPath === "/";
  }
  return currentPath === linkHref;
}

export function SiteHeader() {
  const currentPath = usePathname();

  return (
    <header
      role="banner"
      className="mx-auto flex w-full max-w-[1600px] flex-col justify-center bg-background p-4"
    >
      <div className="flex flex-row items-center justify-between">
        {/* Wordmark. Links back to the home page. */}
        <Link
          href="/"
          aria-label="Gravity — home"
          className="font-body text-3xl font-extrabold text-ink no-underline hover:text-ink"
        >
          gravity
        </Link>

        <nav aria-label="Primary navigation">
          <ul role="list" className="flex flex-wrap gap-4">
            {primaryNavigationLinks.map((navigationLink) => {
              const current = isCurrentPage(navigationLink.href, currentPath);

              /* External links open in a new tab and say so to screen readers. */
              if (navigationLink.isExternal) {
                return (
                  <li key={navigationLink.href}>
                    <a
                      href={navigationLink.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-brand-sm border border-ink px-2 py-1 text-ink no-underline hover:bg-ink hover:text-background"
                    >
                      {navigationLink.label}
                      <span className="sr-only"> (opens in a new tab)</span>
                    </a>
                  </li>
                );
              }

              return (
                <li key={navigationLink.href}>
                  <Link
                    href={navigationLink.href}
                    aria-current={current ? "page" : undefined}
                    className="rounded-brand-sm border border-ink px-2 py-1 text-ink no-underline hover:bg-ink hover:text-background"
                  >
                    {navigationLink.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
