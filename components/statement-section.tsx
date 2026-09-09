/*
  Statement section.
  A large centered quote inside a bordered box, with the "Get the Orbit
  extension" button underneath. It is used twice on the Orbit page.

  The visible heading for each statement is hidden from sight but read
  by screen readers, so the section still has a proper label.
*/

import { CallToActionLink } from "@/components/call-to-action-link";
import { ORBIT_EXTENSION_URL } from "@/lib/external-links";

type StatementSectionProps = {
  /* Unique id for this section, for example "get-orbit" */
  id: string;
  /* Screen-reader-only heading text */
  headingText: string;
  /* The quote itself (allows bold and italic parts) */
  children: React.ReactNode;
};

export function StatementSection({
  id,
  headingText,
  children,
}: StatementSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="
        flex min-h-[31.25rem] flex-col items-center justify-center gap-12
        rounded-brand border-2 border-night p-8 text-ink
        md:p-12 lg:p-32
      "
    >
      <h2 id={headingId} className="sr-only">
        {headingText}
      </h2>

      <blockquote cite="/" className="text-center text-5xl leading-[1.1]">
        {children}
      </blockquote>

      <div className="flex gap-8">
        <CallToActionLink href={ORBIT_EXTENSION_URL} isExternal>
          Get The Orbit Extension
        </CallToActionLink>
      </div>
    </section>
  );
}
