"use client";

import { useEffect, useState } from "react";

/**
 * Slim gold progress bar fixed at the top of the viewport.
 * Width tracks how far through the page the user has scrolled.
 */
export function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) {
        setPct(0);
        return;
      }
      const next = Math.min(100, Math.max(0, (window.scrollY / max) * 100));
      setPct(next);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-50 h-[2px] pointer-events-none"
    >
      <div
        className="h-full bg-gradient-to-r from-[var(--color-gold)] via-[var(--color-gold-soft)] to-[var(--color-gold)] origin-left transition-[width] duration-150 ease-out"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
