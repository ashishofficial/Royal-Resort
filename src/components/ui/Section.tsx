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
  /**
   * Deprecated chapter marker (e.g. "I — The Resort"). Still accepted by
   * existing call sites but no longer rendered. Drop in a future cleanup.
   */
  index?: string;
  /** Fade in the header + content as the section enters the viewport. */
  animate?: boolean;
}) {
  const isCenter = align === "center";
  const isDark = tone === "dark";
  return (
    <section
      id={id}
      className={`relative py-8 ${toneStyles[tone]} ${className}`}
    >
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
