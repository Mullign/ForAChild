import type { Metadata } from "next";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { HomeCta } from "@/components/home/HomeCta";
import { HomeHero } from "@/components/home/HomeHero";
import { LearningPhilosophy } from "@/components/home/LearningPhilosophy";
import { SafetySection } from "@/components/home/SafetySection";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { homeContent, siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

function HoursOverview() {
  const { programs } = homeContent;

  return (
    <Section tone="surface" ariaLabelledBy="hours-heading">
      <SectionHeader
        eyebrow={programs.eyebrow}
        title={programs.title}
        intro={programs.intro}
        titleId="hours-heading"
        align="center"
      />
      <ul className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
        {siteConfig.hours.map((row) => (
          <li
            key={row.label}
            className="rounded-[var(--radius-lg)] border border-border bg-background px-6 py-5 text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark">
              {row.label}
            </p>
            <p className="mt-2 text-lg font-semibold text-foreground">{row.value}</p>
          </li>
        ))}
      </ul>
      <div className="mt-8 flex justify-center">
        <Button href="/contact">Contact the Office</Button>
      </div>
    </Section>
  );
}

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WhyChooseUs />
      <HoursOverview />
      <LearningPhilosophy />
      <SafetySection />
      <TestimonialsPreview />
      <GalleryPreview />
      <HomeCta />
    </>
  );
}
