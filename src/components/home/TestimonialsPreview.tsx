import Link from "next/link";
import { homeContent, testimonials } from "@/content/site";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { isPendingCopy } from "@/lib/utils";

export function TestimonialsPreview() {
  const { testimonials: section } = homeContent;
  const preview = testimonials.slice(0, 2);

  return (
    <Section tone="surface" ariaLabelledBy="testimonials-heading">
      <SectionHeader
        eyebrow={section.eyebrow}
        title={section.title}
        intro={section.intro}
        titleId="testimonials-heading"
      />
      <ul className="grid gap-5 md:grid-cols-2">
        {preview.map((item) => (
          <Card as="li" key={item.id} className="flex h-full flex-col">
            <blockquote className="flex-1 text-base leading-relaxed text-foreground/90">
              <p className="line-clamp-8">“{item.quote}”</p>
            </blockquote>
            <footer className="mt-5 border-t border-border pt-4">
              <p className="font-semibold text-foreground">
                {isPendingCopy(item.name) ? "A For A Child family" : item.name}
              </p>
              {item.detail && !isPendingCopy(item.detail) ? (
                <p className="text-sm text-muted">{item.detail}</p>
              ) : null}
            </footer>
          </Card>
        ))}
      </ul>
      <p className="mt-8">
        <Link href="/testimonials" className="font-semibold text-brand-dark hover:underline">
          Read more testimonials →
        </Link>
      </p>
    </Section>
  );
}
