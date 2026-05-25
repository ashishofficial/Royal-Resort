import { type ReactNode } from "react";

type Tone = "default" | "raised" | "ghost" | "dark";

const tones: Record<Tone, string> = {
  default:
    "bg-[var(--color-surface)] border border-[var(--color-line)] shadow-[0_1px_0_rgba(15,31,26,0.03),0_8px_24px_-16px_rgba(15,31,26,0.08)] hover:shadow-[0_2px_0_rgba(15,31,26,0.04),0_24px_40px_-20px_rgba(31,74,58,0.18)] hover:border-[var(--color-line-strong)] hover:-translate-y-0.5",
  raised:
    "bg-[var(--color-surface)] border border-[var(--color-line)] shadow-[0_10px_30px_-12px_rgba(15,31,26,0.15)] hover:shadow-[0_24px_50px_-20px_rgba(31,74,58,0.25)] hover:-translate-y-1",
  ghost:
    "bg-transparent border border-[var(--color-line)] hover:bg-[var(--color-surface)] hover:border-[var(--color-line-strong)]",
  dark:
    "bg-white/[0.04] border border-white/10 backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/20",
};

export function Card({
  children,
  className = "",
  tone = "default",
  as: Tag = "div",
  topAccent = false,
}: {
  children: ReactNode;
  className?: string;
  tone?: Tone;
  as?: "div" | "article" | "section" | "figure" | "li";
  topAccent?: boolean;
}) {
  return (
    <Tag
      className={`relative rounded-2xl transition-all duration-300 ease-out ${tones[tone]} ${className}`}
    >
      {topAccent && (
        <span
          aria-hidden="true"
          className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[var(--color-gold)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        />
      )}
      {children}
    </Tag>
  );
}
