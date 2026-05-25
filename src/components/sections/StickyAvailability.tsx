"use client";

import { useState, useEffect, type FormEvent } from "react";
import { ArrowRight, Calendar, Users, X } from "@/lib/icons";
import { CONTACT } from "@/lib/site";

/**
 * Desktop-only sticky availability bar — slides up after the user scrolls
 * past the hero, hides again as they reach the footer, and is dismissible.
 * Submits to WhatsApp with a pre-filled enquiry so a real person responds
 * within minutes instead of "we'll get back to you".
 */
export function StickyAvailability() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [date, setDate] = useState("");
  const [guests, setGuests] = useState("");

  useEffect(() => {
    if (dismissed) return;
    const onScroll = () => {
      const scrolled = window.scrollY;
      const remaining =
        document.documentElement.scrollHeight - window.scrollY - window.innerHeight;
      // Show after scrolling past hero (~600px), hide when within ~480px of footer
      setVisible(scrolled > 600 && remaining > 480);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const parts = ["Hi, I want to check availability at Royal Resort Prayagraj."];
    if (date) parts.push(`Event date: ${date}.`);
    if (guests) parts.push(`Expected guests: ${guests}.`);
    const url = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(parts.join(" "))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (dismissed) return null;

  return (
    <div
      aria-hidden={!visible}
      className={`hidden lg:block fixed bottom-0 inset-x-0 z-30 transition-transform duration-500 ease-out ${
        visible ? "translate-y-0" : "translate-y-full pointer-events-none"
      }`}
    >
      <div className="bg-[var(--color-bg)]/95 backdrop-blur-xl border-t border-[var(--color-line)] shadow-[0_-12px_30px_-12px_rgba(15,31,26,0.18)]">
        <div className="max-w-6xl mx-auto px-8">
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-4 py-3.5"
          >
            <div className="flex items-center gap-2">
              <span className="font-display italic text-[var(--color-brand)] text-xl">
                Available?
              </span>
              <span className="text-xs text-[var(--color-muted)] uppercase tracking-[0.18em] hidden xl:inline">
                Quick check
              </span>
            </div>

            <label className="flex items-center gap-2.5 ml-2">
              <Calendar
                size={16}
                className="text-[var(--color-muted)]"
                aria-hidden="true"
              />
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                aria-label="Event date"
                className="h-10 px-3 rounded-lg border border-[var(--color-line)] bg-white text-[14px] text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent"
              />
            </label>

            <label className="flex items-center gap-2.5">
              <Users
                size={16}
                className="text-[var(--color-muted)]"
                aria-hidden="true"
              />
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                aria-label="Guest count"
                className="h-10 px-3 rounded-lg border border-[var(--color-line)] bg-white text-[14px] text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent"
              >
                <option value="">Guests</option>
                <option>Under 100</option>
                <option>100–200</option>
                <option>200–350</option>
                <option>350–500</option>
                <option>500+</option>
              </select>
            </label>

            <button
              type="submit"
              className="ml-auto inline-flex items-center gap-2 h-10 px-5 rounded-full bg-[var(--color-brand)] text-white text-[14px] font-semibold hover:bg-[var(--color-brand-dark)] hover:shadow-[0_8px_20px_-8px_rgba(31,74,58,0.45)] transition-all"
            >
              Check on WhatsApp
              <ArrowRight size={14} strokeWidth={2.4} />
            </button>

            <button
              type="button"
              onClick={() => setDismissed(true)}
              aria-label="Dismiss availability bar"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-muted)] hover:text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors"
            >
              <X size={16} aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
