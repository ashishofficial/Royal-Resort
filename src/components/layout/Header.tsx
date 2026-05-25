import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";
import { CONTACT, NAV_LINKS, SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[var(--color-line)]">
      <Container as="div" className="flex h-16 sm:h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-brand)] text-white font-display text-lg group-hover:scale-105 transition-transform"
          >
            R
          </span>
          <span className="font-display text-lg sm:text-xl leading-tight">
            <span className="block text-[var(--color-ink)]">{SITE.shortName}</span>
            <span className="block text-[10px] sm:text-xs uppercase tracking-[0.18em] text-[var(--color-muted)] -mt-0.5">
              Prayagraj
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-[15px] text-[var(--color-ink-soft)] hover:text-[var(--color-brand)] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href={`tel:${CONTACT.phonePrimary}`}
            className="text-sm font-medium text-[var(--color-ink)] hover:text-[var(--color-brand)] transition-colors"
          >
            {CONTACT.phonePrimaryDisplay}
          </a>
          <Button href="/contact" size="sm" variant="primary">
            Book Now
          </Button>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
