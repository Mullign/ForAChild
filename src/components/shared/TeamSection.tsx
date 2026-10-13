import { teamMembers, teamPhoto } from "@/content/site";
import { Card } from "@/components/ui/Card";
import { SiteImage } from "@/components/ui/PlaceholderImage";
import { Section, SectionHeader } from "@/components/ui/Section";
import { isPendingCopy } from "@/lib/utils";

export function TeamSection() {
  return (
    <Section id="meet-the-team" tone="muted" ariaLabelledBy="team-heading">
      <SectionHeader
        eyebrow="Meet the Team"
        title="Leadership at For A Child"
        intro="Families are the building blocks on which For A Child was founded."
        titleId="team-heading"
      />
      <SiteImage
        src={teamPhoto.src}
        label={teamPhoto.label}
        alt={teamPhoto.alt}
        aspect="landscape"
        objectPosition="center 35%"
        className="mx-auto mb-8 max-w-3xl shadow-[var(--shadow-sm)]"
      />
      <ul className="grid gap-6 md:grid-cols-2">
        {teamMembers.map((member) => {
          const bio = member.bio.filter((paragraph) => !isPendingCopy(paragraph));
          return (
            <Card as="li" key={member.id} className="p-6">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-dark">
                {member.role}
              </p>
              <h3 className="mt-1 text-2xl font-semibold">{member.name}</h3>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted">
                {bio.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Card>
          );
        })}
      </ul>
    </Section>
  );
}
