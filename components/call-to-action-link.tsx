/*
  Call to action link.
  A link that is styled to look like a button. It is used for every
  "Get the extension" / "View tools" action on the site, so the look
  stays the same everywhere.

  It is a real link (an <a>), not a <button>, because it takes the
  visitor to another page or site.
*/

import Link from "next/link";

type CallToActionLinkProps = {
  /* Where the link goes */
  href: string;
  /* The visible label */
  children: React.ReactNode;
  /*
    Set to true when the link leaves the Gravity site. That opens a new
    tab, adds safe rel values, shows a small icon, and tells screen
    reader users that a new tab will open.
  */
  isExternal?: boolean;
  /* Extra classes for spacing tweaks in a specific spot */
  className?: string;
};

/* The shared button look. One place to change it. */
const buttonLookClasses =
  "inline-flex items-center gap-2 rounded-brand-sm border-2 border-paper " +
  "bg-night px-4 py-2 text-lg text-paper no-underline " +
  "hover:bg-brand hover:text-paper hover:underline";

export function CallToActionLink({
  href,
  children,
  isExternal = false,
  className,
}: CallToActionLinkProps) {
  const combinedClasses = className
    ? `${buttonLookClasses} ${className}`
    : buttonLookClasses;

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={combinedClasses}
      >
        {children}
        {/* Decorative icon. The screen reader text below carries the meaning. */}
        <img
          src="/icons/external-link.svg"
          alt=""
          width={20}
          height={20}
          className="w-5"
        />
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }

  return (
    <Link href={href} className={combinedClasses}>
      {children}
    </Link>
  );
}
