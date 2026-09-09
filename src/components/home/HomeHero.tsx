import { homeContent, siteConfig } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";

export function HomeHero() {
  const { hero } = homeContent;

  return (
    <section aria-labelledby="home-hero-heading" className="relative overflow-hidden bg-surface">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background: `
            radial-gradient(circle at 12% 20%, rgb(252 238 243 / 0.95), transparent 35%),
            radial-gradient(circle at 88% 15%, rgb(223 243 249 / 0.95), transparent 32%),
            radial-gradient(circle at 70% 75%, rgb(251 244 212 / 0.7), transparent 30%),
            radial-gradient(circle at 25% 80%, rgb(229 246 237 / 0.75), transparent 28%)
          `,
        }}
      />
      <Container className="relative pt-10 sm:pt-14 lg:pt-16">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-dark">
            {siteConfig.name}
          </p>
          <h1
            id="home-hero-heading"
            className="mt-4 font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            “{hero.headline}”
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-xl font-semibold leading-relaxed text-brand-dark sm:text-2xl">
            {hero.subheadline}
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button href={hero.primaryCta.href} size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
              {hero.secondaryCta.label}
            </Button>
            <Button href={hero.tertiaryCta.href} variant="ghost" size="lg">
              {hero.tertiaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
      <div className="relative mt-10 w-full sm:mt-12">
        <PlaceholderImage
          aspect="hero"
          label={hero.imageLabel}
          alt={hero.imageAlt}
          src={hero.imageSrc}
          priority
          objectPosition="center 35%"
          className="w-full rounded-none"
        />
      </div>
    </section>
  );
}
