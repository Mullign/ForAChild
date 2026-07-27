import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { pageContent } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

const page = pageContent.blog;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/blog",
});

export default function BlogPage() {
  return (
    <>
      <PageHero
        title={page.headline}
        intro={page.intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "News & Updates" },
        ]}
      />
      <Section>
        <div className="rounded-[var(--radius-lg)] border border-dashed border-border bg-surface p-10 text-center">
          <p className="text-lg text-muted">{page.empty}</p>
        </div>
      </Section>
    </>
  );
}
