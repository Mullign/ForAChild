import { homeContent } from "@/content/site";
import { Card } from "@/components/ui/Card";
import { Section, SectionHeader } from "@/components/ui/Section";
import { cx } from "@/lib/utils";

const cardAccents = [
  "border-t-4 border-t-brand",
  "border-t-4 border-t-blush",
  "border-t-4 border-t-mint",
  "border-t-4 border-t-sunshine",
];

export function WhyChooseUs() {
  const { whyChooseUs } = homeContent;

  return (
    <Section tone="default" ariaLabelledBy="why-choose-heading">
      <SectionHeader
        eyebrow={whyChooseUs.eyebrow}
        title={whyChooseUs.title}
        intro={whyChooseUs.intro}
        titleId="why-choose-heading"
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whyChooseUs.items.map((item, index) => (
          <Card
            as="li"
            key={item.title}
            className={cx("h-full", cardAccents[index % cardAccents.length])}
          >
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
          </Card>
        ))}
      </ul>
    </Section>
  );
}
