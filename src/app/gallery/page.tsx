import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { galleryPlaceholders, pageContent } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { displayCopy } from "@/lib/utils";

const page = pageContent.gallery;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title={page.headline}
        intro={displayCopy(
          page.intro,
          "Photos from everyday moments at For A Child — coming soon.",
        )}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />
      <Section>
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
          {galleryPlaceholders.map((item) => (
            <li key={item.id}>
              <figure>
                <PlaceholderImage label={item.label} alt={item.alt} aspect="square" />
                <figcaption className="mt-2 text-center text-sm text-muted">{item.label}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
