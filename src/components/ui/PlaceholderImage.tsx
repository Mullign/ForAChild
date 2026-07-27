import { cx } from "@/lib/utils";

type PlaceholderImageProps = {
  label: string;
  alt: string;
  className?: string;
  aspect?: "hero" | "landscape" | "square" | "portrait";
};

const aspectClasses = {
  hero: "aspect-[16/10] sm:aspect-[21/9]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  portrait: "aspect-[3/4]",
};

function cleanAlt(alt: string, label: string) {
  const cleaned = alt.replace(/[\[\]]/g, "").replace(/\s*—\s*photo pending/i, "").trim();
  return cleaned || `Photo coming soon: ${label}`;
}

/**
 * Visual stand-in until real photography is provided.
 */
export function PlaceholderImage({
  label,
  alt,
  className,
  aspect = "landscape",
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={cleanAlt(alt, label)}
      className={cx(
        "relative overflow-hidden rounded-[var(--radius-lg)] bg-gradient-to-br from-blush-soft via-brand-soft to-mint-soft",
        aspectClasses[aspect],
        className,
      )}
    >
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage: `
            radial-gradient(circle at 18% 22%, rgb(251 244 212 / 0.9), transparent 38%),
            radial-gradient(circle at 82% 70%, rgb(232 145 122 / 0.22), transparent 42%),
            radial-gradient(circle at 55% 40%, rgb(255 255 255 / 0.45), transparent 35%)
          `,
        }}
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
        <span className="rounded-[var(--radius-sm)] bg-surface/85 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-dark">
          Photo coming soon
        </span>
        <span className="max-w-xs text-sm font-medium text-foreground/80 sm:text-base">
          {label.replace(/\s*photo pending$/i, "")}
        </span>
      </div>
    </div>
  );
}
