import { cx } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
  tone?: "default" | "surface" | "brand" | "muted";
  ariaLabelledBy?: string;
};

const toneClasses = {
  default: "bg-background",
  surface: "bg-surface",
  brand: "bg-brand text-white",
  muted: "bg-surface-muted",
};

export function Section({
  children,
  className,
  containerClassName,
  id,
  tone = "default",
  ariaLabelledBy,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={ariaLabelledBy}
      className={cx("py-16 sm:py-20 lg:py-24", toneClasses[tone], className)}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  titleId?: string;
  light?: boolean;
};

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  titleId,
  light = false,
}: SectionHeaderProps) {
  return (
    <div
      className={cx(
        "mb-10 max-w-3xl sm:mb-12",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow ? (
        <p
          className={cx(
            "mb-3 text-sm font-semibold uppercase tracking-[0.08em]",
            light ? "text-white/80" : "text-brand-dark",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className={cx(
          "text-3xl font-semibold tracking-tight sm:text-4xl",
          light ? "text-white" : "text-foreground",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cx(
            "mt-4 text-lg leading-relaxed",
            light ? "text-white/85" : "text-muted",
          )}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}
