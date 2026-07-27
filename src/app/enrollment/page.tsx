import type { Metadata } from "next";
import { EnrollmentInquiryForm } from "@/components/forms/ContactForms";
import { Card } from "@/components/ui/Card";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { pageContent, siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { displayCopy } from "@/lib/utils";

const page = pageContent.enrollment;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/enrollment",
});

export default function EnrollmentPage() {
  return (
    <>
      <PageHero
        title={page.headline}
        intro={page.intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Enrollment" },
        ]}
      />
      <Section>
        <ol className="grid gap-5 md:grid-cols-3">
          {page.steps.map((step, index) => (
            <Card as="li" key={step.title}>
              <p className="text-sm font-semibold text-brand-dark">Step {index + 1}</p>
              <h2 className="mt-2 text-xl font-semibold">{step.title}</h2>
              <p className="mt-2 text-sm text-muted">
                {displayCopy(step.description, "Details coming soon.")}
              </p>
            </Card>
          ))}
        </ol>
      </Section>
      <Section tone="surface">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Enrollment inquiry</h2>
            <p className="mt-3 text-muted">
              Share a few details and we will follow up. When you call, please ask for{" "}
              {siteConfig.contact.askFor}.
            </p>
            <div className="mt-6">
              <EnrollmentInquiryForm />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">Prefer to visit first?</h2>
            <p className="mt-3 text-muted">
              Katie Thomas will be happy to answer your questions and set up a visit.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact?intent=tour">Schedule a Tour</Button>
              <Button href={siteConfig.contact.phoneHref} variant="secondary">
                Call {siteConfig.contact.phone}
              </Button>
            </div>
            <div className="mt-10 rounded-[var(--radius-lg)] border border-dashed border-border bg-surface-muted p-6">
              <h3 className="font-semibold">Downloadable forms</h3>
              <p className="mt-2 text-sm text-muted">
                Enrollment packets and forms will be linked here when provided.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
