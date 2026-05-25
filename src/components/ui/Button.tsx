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
  "btn-shine group relative overflow-hidden inline-flex items-center justify-center gap-2 font-medium tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-gold)] focus-visible:ring-offset-[var(--color-bg)] disabled:opacity-50 disabled:pointer-events-none rounded-full";

const variants: Record<Variant, string> = {
  primary:
    "bg-[var(--color-brand)] text-[var(--color-bg)] hover:bg-[var(--color-brand-dark)] shadow-[0_1px_2px_rgba(15,31,26,0.08)] hover:shadow-[0_8px_24px_-8px_rgba(31,74,58,0.4)]",
  secondary:
    "bg-[var(--color-surface)] border border-[var(--color-line-strong)] text-[var(--color-ink)] hover:border-[var(--color-brand)] hover:text-[var(--color-brand)]",
  ghost:
    "text-[var(--color-ink)] hover:bg-[var(--color-cream)]",
  gold:
    "bg-[var(--color-gold)] text-[var(--color-ink)] hover:bg-[var(--color-gold-soft)] shadow-[0_1px_2px_rgba(15,31,26,0.08)] hover:shadow-[0_8px_24px_-8px_rgba(194,154,75,0.5)]",
  // For dark/brand backgrounds — transparent w/ subtle outline, inverts on hover.
  "outline-light":
    "bg-transparent border border-white/30 text-white hover:bg-white hover:text-[var(--color-brand)] hover:border-white backdrop-blur-sm",
  // Solid white on dark backgrounds.
  white:
    "bg-[var(--color-bg)] text-[var(--color-brand)] hover:bg-white",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[14px]",
  lg: "h-12 px-7 text-[15px]",
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
