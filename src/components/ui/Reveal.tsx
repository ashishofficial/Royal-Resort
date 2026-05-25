"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Fades + slides up its children as they enter the viewport. Uses
 * IntersectionObserver so it runs once and disconnects. Reduced-motion
 * users skip the animation entirely via Tailwind's motion-reduce variants.
 */
export function Reveal({
  children,
  className = "",
  delay = 0,
  threshold = 0.12,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${delay}ms` : undefined }}
      className={`motion-safe:transition-all motion-safe:duration-[700ms] motion-safe:ease-out will-change-[opacity,transform] motion-reduce:!opacity-100 motion-reduce:!translate-y-0 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      } ${className}`}
    >
      {children}
    </div>
  );
}
