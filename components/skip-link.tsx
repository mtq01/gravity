/*
  Skip link.
  It is hidden until a keyboard user presses Tab. Then it appears at the
  top-left and lets that user jump straight past the header to the main
  content. This is a basic accessibility requirement (WCAG 2.4.1).
*/

export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="
        sr-only
        focus:not-sr-only
        focus:absolute focus:left-4 focus:top-4 focus:z-[9999]
        focus:rounded-brand-sm focus:bg-black focus:px-6 focus:py-3
        focus:font-bold focus:text-white focus:no-underline
      "
    >
      Skip to main content
    </a>
  );
}
