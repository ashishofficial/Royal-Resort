import { type ReactNode } from "react";
import { Container } from "./Container";

export function Section({
  children,
  className = "",
  containerClassName = "",
  eyebrow,
  title,
  intro,
  id,
}: {
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  eyebrow?: string;
  title?: string;
  intro?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container className={containerClassName}>
        {(eyebrow || title || intro) && (
          <div className="mb-10 sm:mb-14 max-w-3xl">
            {eyebrow && (
              <p className="text-[var(--color-brand)] text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] mb-3">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[var(--color-ink)] leading-tight mb-4">
                {title}
              </h2>
            )}
            {intro && (
              <p className="text-[var(--color-ink-soft)] text-lg leading-relaxed">
                {intro}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
