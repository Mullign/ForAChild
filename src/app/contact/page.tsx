import type { Metadata } from "next";
import { ContactForm, TourRequestForm } from "@/components/forms/ContactForms";
import { MapEmbed } from "@/components/shared/MapEmbed";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { pageContent, siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

const page = pageContent.contact;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/contact",
});

type ContactPageProps = {
  searchParams: Promise<{ intent?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const params = await searchParams;
  const intent = params.intent ?? "general";
  const showTourForm = intent === "tour";

  return (
    <>
      <PageHero
        title={page.headline}
        intro={page.intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">
              {showTourForm ? "Request a tour" : "Send us a message"}
            </h2>
            <p className="mt-3 text-muted">
              Share your name, email, phone number, and message. {siteConfig.contact.askFor} will be
              happy to help.
            </p>
            <div className="mt-6">
              {showTourForm ? <TourRequestForm /> : <ContactForm intent={intent} />}
            </div>
          </div>
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold">Visit & reach us</h2>
              <dl className="mt-4 space-y-4 text-sm sm:text-base">
                <div>
                  <dt className="font-semibold text-foreground">Address</dt>
                  <dd className="mt-1 text-muted">{siteConfig.contact.address.display}</dd>
                  <dd className="mt-2 text-sm text-muted">{siteConfig.contact.locationNote}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-foreground">Phone</dt>
                  <dd className="mt-1">
                    <a className="text-brand hover:underline" href={siteConfig.contact.phoneHref}>
                      {siteConfig.contact.phone}
                    </a>
                  </dd>
                  <dd className="mt-1 text-sm text-muted">
                    When you call, please ask for {siteConfig.contact.askFor}.
                  </dd>
                </div>
                {siteConfig.contact.email ? (
                  <div>
                    <dt className="font-semibold text-foreground">Email</dt>
                    <dd className="mt-1">
                      <a className="text-brand hover:underline" href={siteConfig.contact.emailHref}>
                        {siteConfig.contact.email}
                      </a>
                    </dd>
                  </div>
                ) : null}
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
      </Section>
    </>
  );
}
