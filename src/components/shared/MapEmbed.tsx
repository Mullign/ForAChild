import Link from "next/link";
import { siteConfig } from "@/content/site";
import { cx } from "@/lib/utils";

type MapEmbedProps = {
  className?: string;
};

function embedSrc() {
  if (siteConfig.contact.mapsEmbedUrl) return siteConfig.contact.mapsEmbedUrl;

  const query = encodeURIComponent(siteConfig.contact.address.display);
  return `https://www.google.com/maps?q=${query}&hl=en&z=16&output=embed`;
}

/**
 * In-page Google Maps preview of the center location.
 */
export function MapEmbed({ className }: MapEmbedProps) {
  return (
    <div className={cx("overflow-hidden rounded-[var(--radius-lg)] border border-border bg-surface", className)}>
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3 sm:px-5">
        <div>
          <p className="font-semibold text-foreground">Find us</p>
          <p className="mt-0.5 text-sm text-muted">{siteConfig.contact.address.display}</p>
        </div>
        <Link
          href={siteConfig.contact.mapsLink}
          className="shrink-0 text-sm font-medium text-brand-dark hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open in Maps
          <span className="sr-only"> (opens in a new window)</span>
        </Link>
      </div>
      <iframe
        title={`Map showing location of ${siteConfig.name}`}
        src={embedSrc()}
        className="aspect-[16/10] w-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
