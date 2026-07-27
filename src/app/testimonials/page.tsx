import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { pageContent, testimonials } from "@/content/site";
import { buildMetadata } from "@/lib/seo";
import { isPendingCopy } from "@/lib/utils";

const page = pageContent.testimonials;

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: "/testimonials",
});

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        title={page.headline}
        intro={page.intro}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Testimonials" },
        ]}
      />
      <Section>
        <ul className="grid gap-5">
          {testimonials.map((item) => (
            <Card as="li" key={item.id}>
              <blockquote>
                <p className="text-lg leading-relaxed text-foreground/90">“{item.quote}”</p>
                <footer className="mt-5 border-t border-border pt-4">
                  <cite className="not-italic">
                    <span className="block font-semibold">
                      {isPendingCopy(item.name) ? "A For A Child family" : item.name}
                    </span>
                    {item.detail && !isPendingCopy(item.detail) ? (
                      <span className="text-sm text-muted">{item.detail}</span>
                    ) : null}
                  </cite>
                </footer>
              </blockquote>
            </Card>
          ))}
        </ul>
        <div className="mt-10">
          <Button href="/contact?intent=tour">Schedule a Tour</Button>
        </div>
      </Section>
    </>
  );
}
