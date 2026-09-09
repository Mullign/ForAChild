import type { Metadata } from "next";
import { TeamSection } from "@/components/shared/TeamSection";
import { Button } from "@/components/ui/Button";
import { PageHero } from "@/components/ui/PageHero";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Section } from "@/components/ui/Section";
import { pageContent, siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

const page = pageContent.about;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title={page.headline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />
      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="space-y-4 text-lg leading-relaxed text-muted">
            {page.welcome.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="pt-4">
              <Button href="/contact">Schedule a Tour</Button>
            </div>
          </div>
          <PlaceholderImage
            label="Classroom at For A Child"
            alt="A caregiver with an infant and toddler in a For A Child classroom"
            src="/images/gallery/infant-toddler.jpg"
            aspect="landscape"
            objectPosition="center 25%"
          />
        </div>
      </Section>

      <Section tone="surface">
        <h2 className="text-2xl font-semibold sm:text-3xl">{page.missionTitle}</h2>
        <div className="mt-5 max-w-3xl space-y-4 text-lg leading-relaxed text-muted">
          {page.mission.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">{page.historyTitle}</h2>
            <div className="mt-5 space-y-4 leading-relaxed text-muted">
              {page.history.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <dl className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[var(--radius-md)] bg-brand-soft p-4">
                <dt className="text-sm font-semibold text-brand">Opened</dt>
                <dd className="mt-1 text-lg font-semibold text-foreground">{siteConfig.opened}</dd>
              </div>
              <div className="rounded-[var(--radius-md)] bg-accent-soft p-4">
                <dt className="text-sm font-semibold text-accent">Owner since {siteConfig.ownedSince}</dt>
                <dd className="mt-1 text-lg font-semibold text-foreground">{siteConfig.owner}</dd>
              </div>
            </dl>
          </div>
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">{page.activitiesTitle}</h2>
            <p className="mt-4 leading-relaxed text-muted">{page.activitiesIntro}</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-muted">
              {page.activities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-4 leading-relaxed text-muted">{page.activitiesNote}</p>
          </div>
        </div>
      </Section>

      <TeamSection />
    </>
  );
}
