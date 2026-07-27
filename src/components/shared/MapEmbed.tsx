import Link from "next/link";
import { siteConfig } from "@/content/site";

type MapEmbedProps = {
  className?: string;
};

/**
 * Google Maps embed — provide mapsEmbedUrl in site config when ready.
 */
export function MapEmbed({ className }: MapEmbedProps) {
  if (!siteConfig.contact.mapsEmbedUrl) {
    return (
      <div
        className={
          className ??
          "flex aspect-[16/10] items-center justify-center rounded-[var(--radius-lg)] border border-dashed border-border bg-surface-muted p-6 text-center"
        }
        role="img"
        aria-label={`Map placeholder for ${siteConfig.contact.address.display}`}
      >
        <div>
          <p className="font-semibold text-foreground">Find us</p>
          <p className="mt-2 text-sm text-muted">{siteConfig.contact.address.display}</p>
          <p className="mt-3 text-sm">
            <Link
              href={siteConfig.contact.mapsLink}
              className="font-medium text-brand-dark hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
              <span className="sr-only"> (opens in a new window)</span>
            </Link>
          </p>
        </div>
      </div>
    );
  }

  return (
    <iframe
      title={`Map showing location of ${siteConfig.name}`}
      src={siteConfig.contact.mapsEmbedUrl}
      className={
        className ??
        "aspect-[16/10] w-full rounded-[var(--radius-lg)] border border-border"
      }
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  );
}
