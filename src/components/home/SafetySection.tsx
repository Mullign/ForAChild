import { homeContent } from "@/content/site";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cx, displayCopy } from "@/lib/utils";

const accents = [
  "border-l-brand",
  "border-l-blush",
  "border-l-mint",
  "border-l-accent",
  "border-l-sunshine",
  "border-l-brand",
];

export function SafetySection() {
  const { safety } = homeContent;

  return (
    <Section tone="muted" ariaLabelledBy="safety-heading">
      <SectionHeader
        eyebrow={safety.eyebrow}
        title={safety.title}
        intro={safety.intro}
        titleId="safety-heading"
        align="center"
      />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {safety.items.map((item, index) => (
          <Card
            as="li"
            key={item.title}
            className={cx("border-l-4", accents[index % accents.length])}
          >
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {displayCopy(item.description, "Details coming soon.")}
            </p>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
