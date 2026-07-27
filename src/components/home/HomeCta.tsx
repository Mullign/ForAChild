import { homeContent } from "@/content/site";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function HomeCta() {
  const { cta } = homeContent;

  return (
    <section
      aria-labelledby="home-cta-heading"
      className="bg-brand-dark py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2
            id="home-cta-heading"
            className="text-3xl font-semibold tracking-tight text-white sm:text-4xl"
          >
            {cta.title}
          </h2>
          <p className="mt-4 text-lg text-white/90">{cta.body}</p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Button
              href={cta.primaryCta.href}
              size="lg"
              className="!border-transparent !bg-white !text-brand-dark hover:!bg-sunshine-soft hover:!text-brand-dark"
            >
              {cta.primaryCta.label}
            </Button>
            <Button
              href={cta.secondaryCta.href}
              size="lg"
              className="!border !border-white/70 !bg-transparent !text-white hover:!border-white hover:!bg-white/15 hover:!text-white"
            >
              {cta.secondaryCta.label}
            </Button>
            <Button
              href={cta.tertiaryCta.href}
              size="lg"
              className="!border-transparent !bg-transparent !text-white hover:!bg-white/15 hover:!text-white"
            >
              {cta.tertiaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
