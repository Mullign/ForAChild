import { homeContent } from "@/content/site";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { Section, SectionHeader } from "@/components/ui/Section";

export function LearningPhilosophy() {
  const { philosophy } = homeContent;

  return (
    <Section tone="default" ariaLabelledBy="philosophy-heading">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <SectionHeader
            eyebrow={philosophy.eyebrow}
            title={philosophy.title}
            titleId="philosophy-heading"
          />
          <div className="-mt-4 space-y-4 text-base leading-relaxed text-muted sm:text-lg">
            {philosophy.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <PlaceholderImage
          label={philosophy.imageLabel}
          alt={philosophy.imageAlt}
          src={philosophy.imageSrc}
          aspect="landscape"
          objectPosition="center 30%"
        />
      </div>
    </Section>
  );
}
