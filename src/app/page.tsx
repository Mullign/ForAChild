import type { Metadata } from "next";
import { GalleryPreview } from "@/components/home/GalleryPreview";
import { HomeCta } from "@/components/home/HomeCta";
import { HomeHero } from "@/components/home/HomeHero";
import { LearningPhilosophy } from "@/components/home/LearningPhilosophy";
import { ProgramsOverview } from "@/components/home/ProgramsOverview";
import { SafetySection } from "@/components/home/SafetySection";
import { TestimonialsPreview } from "@/components/home/TestimonialsPreview";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <WhyChooseUs />
      <ProgramsOverview />
      <LearningPhilosophy />
      <SafetySection />
      <TestimonialsPreview />
      <GalleryPreview />
      <HomeCta />
    </>
  );
}
