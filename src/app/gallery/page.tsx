import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { galleryImages, pageContent } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

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
        intro={page.intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />
      <Section>
        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {galleryImages.map((item) => (
            <li key={item.id}>
              <figure>
                <PlaceholderImage
                  label={item.label}
                  alt={item.alt}
                  src={item.src}
                  aspect={item.src.includes("storytime") ? "landscape" : "portrait"}
                />
                <figcaption className="mt-2 text-center text-sm text-muted">
                  {item.label}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Section>
    </>
  );
}
