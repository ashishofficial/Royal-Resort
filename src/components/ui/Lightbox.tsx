"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "@/lib/icons";

export type LightboxItem = { src: string; alt: string };

/**
 * Fully controlled fullscreen image viewer. Pass null for `index` to keep it
 * closed, a number to open at that index. Supports prev/next arrows + arrow
 * keys when there is more than one item; otherwise behaves as a single-image
 * modal. Portal-rendered into document.body, body scroll locks while open.
 */
export function Lightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (newIndex: number) => void;
}) {
  const open = index !== null;
  const total = items.length;
  const safeIndex = index ?? 0;
  const current = open ? items[safeIndex] : null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (total > 1) {
        if (e.key === "ArrowLeft") {
          onIndexChange((safeIndex - 1 + total) % total);
        } else if (e.key === "ArrowRight") {
          onIndexChange((safeIndex + 1) % total);
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, onIndexChange, safeIndex, total]);

  if (typeof document === "undefined" || !open || !current) return null;

  const goPrev = () => onIndexChange((safeIndex - 1 + total) % total);
  const goNext = () => onIndexChange((safeIndex + 1) % total);

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      onClick={onClose}
      className="lb-backdrop fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-12 bg-black/85 backdrop-blur-sm"
    >
      {/* Close */}
      <button
        type="button"
        aria-label="Close image"
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-5 right-5 sm:top-7 sm:right-7 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
      >
        <X size={22} strokeWidth={2} aria-hidden="true" />
      </button>

      {/* Prev / Next — only when multiple items */}
      {total > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous image"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all backdrop-blur-sm hover:-translate-x-0.5"
            style={{ transform: "translateY(-50%)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next image"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-10 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all backdrop-blur-sm"
            style={{ transform: "translateY(-50%)" }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </>
      )}

      <figure
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center gap-4"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          key={current.src}
          src={current.src}
          alt={current.alt}
          className="lb-image max-w-full max-h-[82vh] object-contain rounded-lg shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
        />
        <figcaption className="flex items-center gap-3 text-white/80 text-sm font-medium px-4 text-center">
          <span>{current.alt}</span>
          {total > 1 && (
            <>
              <span className="h-3 w-px bg-white/30" aria-hidden="true" />
              <span className="text-white/55 tabular-nums">
                {safeIndex + 1} / {total}
              </span>
            </>
          )}
        </figcaption>
      </figure>
    </div>,
    document.body,
  );
}
