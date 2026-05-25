"use client";

import { useState } from "react";

type FAQItem = { question: string; answer: string };

export function FAQ({ items }: { items: FAQItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[var(--color-line)] border-y border-[var(--color-line)]">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div key={idx}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpenIdx(isOpen ? null : idx)}
              className="w-full flex items-start justify-between gap-4 py-5 text-left hover:bg-[var(--color-cream)]/30 transition-colors px-1"
            >
              <span className="text-base sm:text-lg font-medium text-[var(--color-ink)] pr-4">
                {item.question}
              </span>
              <span
                className={`shrink-0 mt-1 transition-transform duration-200 ${isOpen ? "rotate-45" : ""} text-[var(--color-brand)]`}
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </button>
            {isOpen && (
              <div className="pb-6 px-1 text-[var(--color-ink-soft)] leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
