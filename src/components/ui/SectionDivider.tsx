import { Container } from "./Container";

/**
 * Editorial chapter marker — subtle gold diamond + ruled lines.
 * Use between major page chapters to make the transition feel intentional.
 * `chapter` is shown in small caps (e.g., "I", "II", "III" or "OUR SPACES").
 */
export function SectionDivider({
  chapter,
  className = "",
  tone = "light",
}: {
  chapter?: string;
  className?: string;
  tone?: "light" | "cream" | "dark";
}) {
  const tones = {
    light: {
      bg: "bg-[var(--color-bg)]",
      line: "bg-[var(--color-line-strong)]",
      label: "text-[var(--color-muted)]",
      diamond: "text-[var(--color-gold)]",
    },
    cream: {
      bg: "bg-[var(--color-cream)]",
      line: "bg-[var(--color-line-strong)]",
      label: "text-[var(--color-ink-soft)]",
      diamond: "text-[var(--color-gold-deep)]",
    },
    dark: {
      bg: "bg-[var(--color-brand-deep)]",
      line: "bg-white/15",
      label: "text-white/50",
      diamond: "text-[var(--color-gold-soft)]",
    },
  }[tone];

  return (
    <div className={`${tones.bg} ${className}`}>
      <Container className="py-10 sm:py-12">
        <div className="flex items-center justify-center gap-5 sm:gap-6">
          <span className={`hidden sm:block h-px flex-1 max-w-[180px] ${tones.line}`} aria-hidden="true" />
          <span className={`${tones.diamond} text-[10px]`} aria-hidden="true">
            ◆
          </span>
          {chapter && (
            <span
              className={`${tones.label} text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.32em] whitespace-nowrap`}
            >
              {chapter}
            </span>
          )}
          <span className={`${tones.diamond} text-[10px]`} aria-hidden="true">
            ◆
          </span>
          <span className={`hidden sm:block h-px flex-1 max-w-[180px] ${tones.line}`} aria-hidden="true" />
        </div>
      </Container>
    </div>
  );
}
