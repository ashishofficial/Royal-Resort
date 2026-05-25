import Link from "next/link";
import { type ComponentProps, type ReactNode } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "ghost"
  | "gold"
  | "outline-light"
  | "white";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-gold-soft)] disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-brand)] text-white hover:bg-[var(--color-brand-dark)] shadow-sm hover:shadow-md",
  secondary:
    "bg-white border border-[var(--color-brand)] text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-white",
  ghost: "text-[var(--color-ink)] hover:bg-[var(--color-cream)]",
  gold:
    "bg-[var(--color-gold)] text-[var(--color-ink)] hover:bg-[var(--color-gold-soft)] shadow-sm hover:shadow-md",
  // For use on dark/brand backgrounds — transparent with white outline,
  // inverts to white-on-brand on hover.
  "outline-light":
    "bg-transparent border border-white/80 text-white hover:bg-white hover:text-[var(--color-brand)] hover:border-white",
  // Solid white button on dark backgrounds.
  white:
    "bg-white text-[var(--color-brand)] hover:bg-[var(--color-cream)] shadow-sm",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[15px]",
  lg: "h-13 px-8 text-base py-3.5",
};

type Props = {
  variant?: Variant;
  size?: Size;
  href?: string;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<"button">, "ref">;

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
  ...rest
}: Props) {
  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  if (href) {
    const external =
      href.startsWith("http") ||
      href.startsWith("tel:") ||
      href.startsWith("mailto:");
    if (external) {
      return (
        <a href={href} className={cls} {...(rest as ComponentProps<"a">)}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
