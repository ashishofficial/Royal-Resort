"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

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
              className="w-full flex items-start justify-between gap-6 py-6 text-left group transition-colors px-1"
            >
              <span className="font-display text-base sm:text-lg text-[var(--color-ink)] pr-4 leading-snug">
                {item.question}
              </span>
              <span
                className={`shrink-0 mt-1.5 transition-all duration-300 ${isOpen ? "rotate-45 text-[var(--color-brand)]" : "text-[var(--color-muted)]"} group-hover:text-[var(--color-brand)]`}
                aria-hidden="true"
              >
                <Plus size={20} strokeWidth={1.6} />
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="pb-6 px-1 pr-12 text-[var(--color-ink-soft)] leading-relaxed">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
