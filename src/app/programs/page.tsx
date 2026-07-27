import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Card } from "@/components/ui/Card";
import { daycareOverview, pageContent, programSummaries } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { displayCopy, isPendingCopy } from "@/lib/utils";

const page = pageContent.programs;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/programs",
});

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title={page.headline}
        intro={page.intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programs" },
        ]}
      />
      <Section>
        <Card className="mb-10 border-l-4 border-l-brand">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark">
            {daycareOverview.hours}
          </p>
          <h2 className="mt-2 text-2xl font-semibold">{daycareOverview.title}</h2>
          <p className="mt-3 text-muted">{daycareOverview.description}</p>
        </Card>
        <ul className="grid gap-6 md:grid-cols-2">
          {programSummaries.map((program) => (
            <li key={program.slug}>
              <article className="overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface">
                <PlaceholderImage
                  label={program.imageLabel}
                  alt={program.imageAlt}
                  className="rounded-none"
                />
                <div className="p-6">
                  {!isPendingCopy(program.ages) ? (
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-dark">
                      {program.ages}
                    </p>
                  ) : null}
                  <h2 className="mt-1 text-2xl font-semibold">
                    <Link href={program.href} className="hover:text-brand-dark">
                      {program.title}
                    </Link>
                  </h2>
                  <p className="mt-3 text-muted">
                    {displayCopy(program.description, "Details coming soon.")}
                  </p>
                  <Link
                    href={program.href}
                    className="mt-4 inline-block font-semibold text-brand-dark hover:underline"
                  >
                    View program →
                  </Link>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
