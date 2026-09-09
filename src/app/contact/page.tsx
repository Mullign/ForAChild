import type { Metadata } from "next";
import { MapEmbed } from "@/components/shared/MapEmbed";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { pageContent, siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

const page = pageContent.contact;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <div className="border-b border-border bg-surface">
        <Container className="py-14 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-[0.1em] text-brand-dark">
            For A Child Office
          </p>
          <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
            {page.headline}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{page.intro}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={siteConfig.contact.phoneHref} size="lg">
              Call {siteConfig.contact.phone}
            </Button>
            <Button href={siteConfig.contact.emailHref} variant="secondary" size="lg">
              Email Katie
            </Button>
          </div>
        </Container>
      </div>

      <section className="py-14 sm:py-16">
        <Container>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2 lg:gap-10">
            <div className="rounded-[var(--radius-lg)] bg-brand-soft/70 p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-brand-dark">Ask for Katie</h2>
              <p className="mt-3 leading-relaxed text-foreground/90">
                Katie Thomas, Director of Operations, will answer your questions, help with
                enrollment, and set up a visit.
              </p>
              <div className="mt-6 space-y-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">Phone</p>
                  <a
                    href={siteConfig.contact.phoneHref}
                    className="mt-1 inline-block text-2xl font-semibold text-brand-dark hover:underline"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">Email</p>
                  <a
                    href={siteConfig.contact.emailHref}
                    className="mt-1 inline-block break-all text-lg font-semibold text-brand-dark hover:underline"
                  >
                    {siteConfig.contact.email}
                  </a>
                  <p className="mt-2 text-sm text-muted">
                    Opens your default email app with Katie’s address ready to go.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-[var(--radius-lg)] border border-border bg-surface p-6 sm:p-8">
                <h2 className="text-xl font-semibold">Visit us</h2>
                <dl className="mt-4 space-y-4 text-sm sm:text-base">
                  <div>
                    <dt className="font-semibold text-foreground">Address</dt>
                    <dd className="mt-1 text-muted">{siteConfig.contact.address.display}</dd>
                    <dd className="mt-2 text-sm text-muted">{siteConfig.contact.locationNote}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Hours</dt>
                    <dd className="mt-1 space-y-1 text-muted">
                      {siteConfig.hours.map((row) => (
                        <p key={row.label}>
                          {row.label}: {row.value}
                        </p>
                      ))}
                    </dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-foreground">Directions</dt>
                    <dd className="mt-1 space-y-2 text-muted">
                      {siteConfig.contact.directions.map((line) => (
                        <p key={line}>{line}</p>
                      ))}
                    </dd>
                  </div>
                </dl>
              </div>

              <MapEmbed />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
