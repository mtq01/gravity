/*
  Site footer.
  A dark band with the Gravity wordmark and a copyright line.
  It stacks in one column on phones and sits in a row on tablets and up.
*/

import Link from "next/link";

export function SiteFooter() {
  return (
    <footer
      role="contentinfo"
      className="bg-ink px-4 py-24 text-paper"
    >
      <div className="mx-auto flex w-full max-w-[1600px] flex-col justify-center">
        <div className="flex flex-col items-center justify-between gap-4 px-6 md:flex-row">
          {/* Wordmark. Links back to the home page. */}
          <Link
            href="/"
            aria-label="Gravity — home"
            className="font-body text-3xl font-extrabold text-paper no-underline hover:text-paper"
          >
            gravity
          </Link>

          <p className="text-center text-paper">© 2026 – Gravity</p>
        </div>
      </div>
    </footer>
  );
}
