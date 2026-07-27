import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { programPageDefaults, siteConfig } from "@/content/site";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { displayCopy, isPendingCopy } from "@/lib/utils";

type ProgramPageProps = {
  title: string;
  ages: string;
  description: string;
  imageLabel: string;
  imageAlt: string;
  slug?: string;
  href?: string;
};

export function ProgramPageTemplate({
  title,
  ages,
  description,
  imageLabel,
  imageAlt,
}: ProgramPageProps) {
  const content = programPageDefaults;
  const detailsPending = isPendingCopy(content.intro);

  return (
    <>
      <PageHero
        title={title}
        intro={displayCopy(description, "Program details coming soon.")}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programs", href: "/programs" },
          { label: title },
        ]}
      />
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div>
            {!isPendingCopy(ages) ? (
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark">
                {ages}
              </p>
            ) : null}

            {detailsPending ? (
              <>
                <h2 className="mt-2 text-2xl font-semibold sm:text-3xl">{title}</h2>
                <p className="mt-4 text-lg leading-relaxed text-muted">
                  Full program details will be added here soon. In the meantime, call{" "}
                  {siteConfig.contact.phone} and ask for {siteConfig.contact.askFor} to learn more
                  or schedule a visit.
                </p>
              </>
            ) : (
              <>
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
              </>
            )}

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
          <PlaceholderImage label={imageLabel} alt={imageAlt} aspect="landscape" />
        </div>
      </Section>
    </>
  );
}
