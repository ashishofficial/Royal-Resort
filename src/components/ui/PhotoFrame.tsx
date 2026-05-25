"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Lightbox } from "./Lightbox";
import { useGallery } from "./PhotoGallery";

// Real Royal Resort photos served from /public/images/.
// To swap any subject for a better photo: drop a new JPEG into /public/images/
// with the same filename, or change the path here.
// TODO: room/bathroom/dressing currently re-use venue exterior/event photos
// because dedicated room photos were not provided. Replace once available.
const IMAGES = {
  banquet: "/images/banquet.jpeg",
  mandap: "/images/mandap.jpeg",
  lawn: "/images/lawn.jpeg",
  miniHall: "/images/mini-hall.jpeg",
  stage: "/images/stage.jpeg",
  room: "/images/room.jpeg",
  bathroom: "/images/bathroom.jpeg",
  dressing: "/images/dressing.jpeg",
  mehndi: "/images/mehndi.jpeg",
  aisle: "/images/aisle.jpeg",
  gallery: "/images/gallery.jpeg",
} as const;

export const DUMMY_IMAGES = IMAGES;

export type ImageKey = keyof typeof IMAGES;

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
  const src = IMAGES[imageKey];

  // Register with the parent PhotoGallery (if any) so the shared lightbox
  // knows about this image. Standalone PhotoFrames skip registration and
  // manage their own single-image modal below.
  useEffect(() => {
    if (gallery) gallery.register({ src, alt: label });
  }, [gallery, src, label]);

  const handleClick = () => {
    if (gallery) {
      gallery.open(src);
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
          items={[{ src, alt: label }]}
          index={localOpen ? 0 : null}
          onClose={() => setLocalOpen(false)}
          onIndexChange={() => {}}
        />
      )}
    </>
  );
}
