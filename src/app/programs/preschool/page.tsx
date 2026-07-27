import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Section } from "@/components/ui/Section";
import { preschoolPageContent, programSummaries } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

const program = programSummaries.find((p) => p.slug === "preschool")!;
const content = preschoolPageContent;

export const metadata: Metadata = buildMetadata({
  title: program.title,
  description: program.description,
  path: program.href,
});

export default function PreschoolPage() {
  return (
    <>
      <PageHero
        title={program.title}
        intro={program.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programs", href: "/programs" },
          { label: program.title },
        ]}
      />
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark">
              {program.ages}
            </p>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{content.headline}</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{content.intro}</p>
            <h3 className="mt-8 text-xl font-semibold">{content.highlightsTitle}</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              {content.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <h3 className="mt-8 text-xl font-semibold">{content.dailyRhythmTitle}</h3>
            <p className="mt-3 leading-relaxed text-muted">{content.dailyRhythm}</p>
            <p className="mt-6 text-muted">{content.ctaNote}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact?intent=tour">Schedule a Tour</Button>
              <Button href="/enrollment" variant="secondary">
                Enrollment Inquiry
              </Button>
            </div>
            <p className="mt-6 text-sm">
              <Link href="/programs" className="font-medium text-brand-dark hover:underline">
                ← Back to all programs
              </Link>
            </p>
          </div>
          <PlaceholderImage
            label={program.imageLabel}
            alt={program.imageAlt}
            aspect="landscape"
          />
        </div>
      </Section>
    </>
  );
}
