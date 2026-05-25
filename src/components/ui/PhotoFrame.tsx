import Image from "next/image";

// Real photo of the resort exterior — used wherever the building / lawn is the
// most relevant subject. Themed SVG dummies fill the interior/specialty slots
// (mandap, room, bathroom, dressing, mehndi, stage) until those photos arrive.
const RESORT_EXTERIOR = "/images/resort-exterior.jpeg";

export const DUMMY_IMAGES = {
  banquet: RESORT_EXTERIOR,
  lawn: RESORT_EXTERIOR,
  miniHall: RESORT_EXTERIOR,
  gallery: RESORT_EXTERIOR,
  aisle: RESORT_EXTERIOR,
  mandap: "/images/dummy/mandap.svg",
  stage: "/images/dummy/stage.svg",
  room: "/images/dummy/room.svg",
  bathroom: "/images/dummy/bathroom.svg",
  dressing: "/images/dummy/dressing.svg",
  mehndi: "/images/dummy/mehndi.svg",
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
      className={`relative overflow-hidden rounded-2xl bg-[var(--color-ink)] ${RATIOS[aspect]} ${className}`}
    >
      <Image
        src={DUMMY_IMAGES[imageKey]}
        alt={label}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
