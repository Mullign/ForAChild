import Link from "next/link";
import { footerQuickLinks, siteConfig } from "@/content/site";
import { Container } from "@/components/ui/Container";
import { SiteLogo } from "@/components/layout/SiteLogo";

function PulsingHeart() {
  return (
    <span className="pulse-heart inline-block text-blush" aria-hidden="true">
      ♥
    </span>
  );
}

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border bg-surface">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div>
            <SiteLogo />
            <p className="mt-4 text-sm leading-relaxed text-muted">{siteConfig.tagline}</p>
            <div className="mt-5 space-y-2 text-sm text-foreground/90">
              <p>
                <span className="font-medium">Address:</span>{" "}
                {siteConfig.contact.address.display}
              </p>
              <p>
                <span className="font-medium">Phone:</span>{" "}
                <a className="hover:text-brand" href={siteConfig.contact.phoneHref}>
                  {siteConfig.contact.phone}
                </a>
              </p>
              {siteConfig.contact.email ? (
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a className="hover:text-brand" href={siteConfig.contact.emailHref}>
                    {siteConfig.contact.email}
                  </a>
                </p>
              ) : null}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-muted">
              Hours
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {siteConfig.hours.map((row) => (
                <li key={row.label} className="flex flex-col">
                  <span className="font-medium text-foreground">{row.label}</span>
                  <span className="text-muted">{row.value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.08em] text-muted">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2 text-sm">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-foreground/90 hover:text-brand">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="inline-flex flex-wrap items-center gap-1.5">
            <span>Website designed by John Russell</span>
            <PulsingHeart />
            <span className="sr-only">(with love)</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
