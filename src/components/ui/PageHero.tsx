import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Container } from "@/components/ui/Container";

type PageHeroProps = {
  title: string;
  intro?: string;
  breadcrumbs?: { label: string; href?: string }[];
};

export function PageHero({ title, intro, breadcrumbs }: PageHeroProps) {
  return (
    <div className="border-b border-border bg-surface">
      <Container className="py-12 sm:py-16">
        {breadcrumbs ? <Breadcrumbs items={breadcrumbs} /> : null}
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted">{intro}</p>
        ) : null}
      </Container>
    </div>
  );
}
