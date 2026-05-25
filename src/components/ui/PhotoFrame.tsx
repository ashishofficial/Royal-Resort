"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Lightbox } from "./Lightbox";
import { useGallery } from "./PhotoGallery";

// Curated stock photos from Unsplash — all free for commercial use.
// To swap any of these for a real wedding photo: replace the URL with your
// own (Unsplash, Pexels, or your own CDN — domain must be whitelisted in
// next.config.ts -> images.remotePatterns).
const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?w=1600&q=80&auto=format&fit=crop`;

// Higher-resolution version for the lightbox (browser-rendered full size).
const unsplashLarge = (id: string) =>
  `https://images.unsplash.com/${id}?w=2400&q=85&auto=format&fit=max`;

const IMAGE_IDS = {
  banquet: "photo-1542665952-14513db15293",
  mandap: "photo-1587271636175-90d58cdad458",
  lawn: "photo-1768777277892-a7853afe5bd7",
  miniHall: "photo-1770387688486-397ff1afdb2c",
  stage: "photo-1523438885200-e635ba2c371e",
  room: "photo-1611892440504-42a792e24d32",
  bathroom: "photo-1664917555352-f3f66e57ccc2",
  dressing: "photo-1643216583837-f6d664d48eac",
  mehndi: "photo-1670774837214-21b88943a6bb",
  aisle: "photo-1607861884586-c7cfaed16290",
  gallery: "photo-1587271407850-8d438ca9fdf2",
} as const;

export const DUMMY_IMAGES = Object.fromEntries(
  Object.entries(IMAGE_IDS).map(([k, id]) => [k, unsplash(id)]),
) as Record<keyof typeof IMAGE_IDS, string>;

export type ImageKey = keyof typeof IMAGE_IDS;

const RATIOS: Record<string, string> = {
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "3/2": "aspect-[3/2]",
  "16/9": "aspect-[16/9]",
  "3/4": "aspect-[3/4]",
};

export function PhotoFrame({
  label,
  imageKey = "gallery",
  aspect = "4/3",
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw",
}: {
  label: string;
  imageKey?: ImageKey;
  aspect?: "4/3" | "1/1" | "3/2" | "16/9" | "3/4";
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const gallery = useGallery();
  const [localOpen, setLocalOpen] = useState(false);
  const src = unsplash(IMAGE_IDS[imageKey]);
  const srcLarge = unsplashLarge(IMAGE_IDS[imageKey]);

  // Register with the parent PhotoGallery (if any) so the shared lightbox
  // knows about this image. Standalone PhotoFrames skip registration and
  // manage their own single-image modal below.
  useEffect(() => {
    if (gallery) gallery.register({ src: srcLarge, alt: label });
  }, [gallery, srcLarge, label]);

  const handleClick = () => {
    if (gallery) {
      gallery.open(srcLarge);
    } else {
      setLocalOpen(true);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        aria-label={`Open image: ${label}`}
        className={`group relative overflow-hidden rounded-2xl bg-[var(--color-brand-deep)] ${RATIOS[aspect]} ${className} cursor-zoom-in focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] w-full block`}
      >
        <Image
          src={src}
          alt={label}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
        />
        <span
          aria-hidden="true"
          className="absolute inset-0 flex items-end justify-end p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/40 via-transparent to-transparent"
        >
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[var(--color-brand)] shadow-md">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
              <line x1="11" y1="8" x2="11" y2="14" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
          </span>
        </span>
      </button>

      {/* Standalone fallback when no PhotoGallery wraps this PhotoFrame */}
      {!gallery && (
        <Lightbox
          items={[{ src: srcLarge, alt: label }]}
          index={localOpen ? 0 : null}
          onClose={() => setLocalOpen(false)}
          onIndexChange={() => {}}
        />
      )}
    </>
  );
}
