import { type ReactNode } from "react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";

type Tone = "default" | "surface" | "cream" | "dark";

const toneStyles: Record<Tone, string> = {
  default: "bg-[var(--color-bg)]",
  surface: "bg-[var(--color-surface)] border-y border-[var(--color-line)]",
  cream: "bg-[var(--color-cream)] border-y border-[var(--color-line-strong)]/40",
  dark: "bg-[var(--color-brand-deep)] text-white",
};

export function Section({
  children,
  className = "",
  containerClassName = "",
  eyebrow,
  title,
  intro,
  id,
  align = "left",
  tone = "default",
  index,
  animate = true,
}: {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  id?: string;
  align?: "left" | "center";
  tone?: Tone;
  /** Optional chapter index displayed in a top corner, magazine style. */
  index?: string;
  /** Fade in the header + content as the section enters the viewport. */
  animate?: boolean;
}) {
  const isCenter = align === "center";
  const isDark = tone === "dark";
  return (
    <section
      id={id}
      className={`relative py-20 sm:py-24 lg:py-32 ${toneStyles[tone]} ${className}`}
    >
      {index && (
        <div className="absolute top-6 left-0 right-0 pointer-events-none">
          <Container>
            <div
              className={`font-display italic text-sm tracking-wide ${isDark ? "text-white/40" : "text-[var(--color-muted)]"}`}
              aria-hidden="true"
            >
              {index}
            </div>
          </Container>
        </div>
      )}
      <Container className={containerClassName}>
        {(eyebrow || title || intro) && (
          <RevealOrFragment animate={animate}>
            <div
              className={`mb-12 sm:mb-16 max-w-3xl ${isCenter ? "mx-auto text-center" : ""}`}
            >
              {eyebrow && (
                <div
                  className={`flex items-center gap-3 mb-5 ${isCenter ? "justify-center" : ""}`}
                >
                  <span
                    className={`h-px w-8 ${isDark ? "bg-[var(--color-gold-soft)]" : "bg-[var(--color-gold)]"}`}
                    aria-hidden="true"
                  />
                  <p
                    className={`text-[11px] font-semibold uppercase tracking-[0.22em] ${isDark ? "text-[var(--color-gold-soft)]" : "text-[var(--color-gold-deep)]"}`}
                  >
                    {eyebrow}
                  </p>
                </div>
              )}
              {title && (
                <h2
                  className={`font-display text-2xl sm:text-3xl lg:text-[2.25rem] leading-[1.15] mb-5 ${isDark ? "text-white" : "text-[var(--color-ink)]"}`}
                >
                  {title}
                </h2>
              )}
              {intro && (
                <p
                  className={`text-lg leading-relaxed ${isDark ? "text-white/75" : "text-[var(--color-ink-soft)]"}`}
                >
                  {intro}
                </p>
              )}
            </div>
          </RevealOrFragment>
        )}
        <RevealOrFragment animate={animate} delay={120}>
          {children}
        </RevealOrFragment>
      </Container>
    </section>
  );
}

function RevealOrFragment({
  animate,
  children,
  delay,
}: {
  animate: boolean;
  children: ReactNode;
  delay?: number;
}) {
  if (!animate) return <>{children}</>;
  return <Reveal delay={delay}>{children}</Reveal>;
}
