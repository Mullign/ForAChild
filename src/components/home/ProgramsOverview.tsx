import Link from "next/link";
import { homeContent, programSummaries } from "@/content/site";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Section, SectionHeader } from "@/components/ui/Section";
import { displayCopy, isPendingCopy } from "@/lib/utils";

export function ProgramsOverview() {
  const { programs } = homeContent;

  return (
    <Section tone="surface" ariaLabelledBy="programs-overview-heading">
      <SectionHeader
        eyebrow={programs.eyebrow}
        title={programs.title}
        intro={programs.intro}
        titleId="programs-overview-heading"
      />
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {programSummaries.map((program) => {
          const pending = isPendingCopy(program.description);
          return (
            <li key={program.slug}>
              <Link
                href={program.href}
                className="group block h-full overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface transition hover:border-brand/40 hover:shadow-[var(--shadow-md)] focus-visible:outline-offset-4"
              >
                <PlaceholderImage
                  label={program.imageLabel}
                  alt={program.imageAlt}
                  aspect="landscape"
                  className="rounded-none rounded-t-[var(--radius-lg)]"
                />
                <div className="p-5">
                  {!isPendingCopy(program.ages) ? (
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-dark">
                      {program.ages}
                    </p>
                  ) : null}
                  <h3 className="mt-1 text-xl font-semibold text-foreground group-hover:text-brand-dark">
                    {program.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {displayCopy(program.description, "Details coming soon.")}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-brand-dark group-hover:underline">
                    {pending ? "Learn more →" : "Learn more →"}
                  </p>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
