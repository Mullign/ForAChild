import Link from "next/link";
import { galleryPlaceholders, homeContent } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Section, SectionHeader } from "@/components/ui/Section";
import { displayCopy } from "@/lib/utils";

export function GalleryPreview() {
  const { gallery } = homeContent;
  const preview = galleryPlaceholders.slice(0, 6);

  return (
    <Section tone="default" ariaLabelledBy="gallery-preview-heading">
      <SectionHeader
        eyebrow={gallery.eyebrow}
        title={gallery.title}
        intro={displayCopy(gallery.intro, "A peek at everyday moments — photos coming soon.")}
        titleId="gallery-preview-heading"
      />
      <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {preview.map((item) => (
          <li key={item.id}>
            <Link
              href="/gallery"
              className="block overflow-hidden rounded-[var(--radius-lg)] focus-visible:outline-offset-4"
            >
              <PlaceholderImage
                label={item.label}
                alt={item.alt}
                aspect="square"
                className="transition duration-300 hover:scale-[1.02]"
              />
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        <Button href={gallery.cta.href} variant="secondary">
          {gallery.cta.label}
        </Button>
      </div>
    </Section>
  );
}
