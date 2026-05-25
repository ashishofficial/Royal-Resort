"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "@/lib/icons";

/**
 * Full-screen image viewer. Renders into document.body via portal so it
 * escapes any clipping ancestors. Handles Esc, click-outside, and body
 * scroll-lock while open.
 */
export function Lightbox({
  src,
  alt,
  open,
  onClose,
}: {
  src: string;
  alt: string;
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (typeof document === "undefined" || !open) return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={alt}
      onClick={onClose}
      className="lb-backdrop fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-12 bg-black/85 backdrop-blur-sm"
    >
      <button
        type="button"
        aria-label="Close image"
        onClick={onClose}
        className="absolute top-5 right-5 sm:top-7 sm:right-7 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors backdrop-blur-sm"
      >
        <X size={22} strokeWidth={2} aria-hidden="true" />
      </button>

      <figure
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-7xl max-h-full w-full h-full flex flex-col items-center justify-center gap-4"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          className="lb-image max-w-full max-h-[85vh] object-contain rounded-lg shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]"
        />
        <figcaption className="text-white/80 text-sm font-medium px-4 text-center max-w-2xl">
          {alt}
        </figcaption>
      </figure>
    </div>,
    document.body,
  );
}
