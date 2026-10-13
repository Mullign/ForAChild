import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site";
import { assetPath, cx } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  priority?: boolean;
};

export function SiteLogo({ className, priority = false }: SiteLogoProps) {
  return (
    <Link
      href="/"
      className={cx(
        "inline-flex min-w-0 items-center rounded-[var(--radius-sm)] bg-surface p-1.5 shadow-sm ring-1 ring-border/70",
        className,
      )}
      aria-label={`${siteConfig.name} home`}
    >
      <Image
        src={assetPath(siteConfig.logo.src)}
        alt={siteConfig.logo.alt}
        width={siteConfig.logo.width}
        height={siteConfig.logo.height}
        priority={priority}
        className="h-9 w-auto sm:h-11"
        sizes="(max-width: 640px) 160px, 200px"
      />
    </Link>
  );
}
