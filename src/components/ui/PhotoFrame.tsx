import Image from "next/image";

// Curated stock photos from Unsplash — all free for commercial use.
// Each subject points to a specific photo ID, verified to return real images.
// To swap any of these for a real wedding photo: replace the URL with your
// own (Unsplash, Pexels, or your own CDN — domain must be whitelisted in
// next.config.ts -> images.remotePatterns).
const unsplash = (id: string) =>
  `https://images.unsplash.com/${id}?w=1600&q=80&auto=format&fit=crop`;

export const DUMMY_IMAGES = {
  banquet: unsplash("photo-1542665952-14513db15293"),         // banquet hall
  mandap: unsplash("photo-1587271636175-90d58cdad458"),       // Indian wedding mandap
  lawn: unsplash("photo-1768777277892-a7853afe5bd7"),         // outdoor wedding lawn
  miniHall: unsplash("photo-1770387688486-397ff1afdb2c"),     // intimate wedding hall
  stage: unsplash("photo-1523438885200-e635ba2c371e"),        // decorated wedding stage
  room: unsplash("photo-1611892440504-42a792e24d32"),         // luxury hotel room
  bathroom: unsplash("photo-1664917555352-f3f66e57ccc2"),     // hotel bathroom
  dressing: unsplash("photo-1643216583837-f6d664d48eac"),     // bride getting ready
  mehndi: unsplash("photo-1670774837214-21b88943a6bb"),       // haldi / mehndi setup
  aisle: unsplash("photo-1607861884586-c7cfaed16290"),        // wedding aisle
  gallery: unsplash("photo-1587271407850-8d438ca9fdf2"),      // Indian wedding moment
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
      />
    </div>
  );
}
