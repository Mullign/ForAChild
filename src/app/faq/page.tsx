import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageContent, siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

const page = pageContent.faq;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/faq",
});

export default function FaqPage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <JsonLd data={faqJsonLd} />
      <PageHero
        title={page.headline}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ" },
        ]}
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-3">
          {page.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-[var(--radius-lg)] border border-border bg-surface px-5 py-4 open:shadow-[var(--shadow-sm)]"
            >
              <summary className="cursor-pointer list-none font-semibold text-foreground marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="flex items-start justify-between gap-4">
                  {item.question}
                  <span
                    aria-hidden="true"
                    className="mt-0.5 text-brand transition group-open:rotate-45"
                  >
                    +
                  </span>
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-muted">{item.answer}</p>
            </details>
          ))}
        </div>
        <div className="mx-auto mt-12 max-w-3xl rounded-[var(--radius-lg)] bg-brand-soft p-6 text-center">
          <p className="font-semibold text-foreground">
            Still have questions for {siteConfig.shortName}?
          </p>
          <p className="mt-2 text-sm text-muted">
            Call {siteConfig.contact.phone} and ask for {siteConfig.contact.askFor}.
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Contact Us</Button>
            <Button href={siteConfig.contact.phoneHref} variant="secondary">
              Call Now
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
