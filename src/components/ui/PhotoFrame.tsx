import Image from "next/image";

// Stock photos served from picsum.photos.
// Each key uses a stable seed so the same photo loads every time —
// swap a seed (or replace with a specific Unsplash photo URL) when you have
// the real image for that subject.
const stock = (seed: string) =>
  `https://picsum.photos/seed/${seed}/1600/1200`;

export const DUMMY_IMAGES = {
  banquet: stock("royal-resort-banquet-hall-1"),
  mandap: stock("royal-resort-mandap-decor-2"),
  lawn: stock("royal-resort-lawn-evening-3"),
  miniHall: stock("royal-resort-mini-hall-4"),
  stage: stock("royal-resort-designer-stage-5"),
  room: stock("royal-resort-deluxe-room-6"),
  bathroom: stock("royal-resort-bathroom-7"),
  dressing: stock("royal-resort-dressing-area-8"),
  mehndi: stock("royal-resort-mehndi-haldi-9"),
  aisle: stock("royal-resort-bride-aisle-10"),
  gallery: stock("royal-resort-gallery-11"),
} as const;

export type ImageKey = keyof typeof DUMMY_IMAGES;

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
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-[var(--color-brand-deep)] ${RATIOS[aspect]} ${className}`}
    >
      <Image
        src={DUMMY_IMAGES[imageKey]}
        alt={label}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
        unoptimized
      />
    </div>
  );
}
