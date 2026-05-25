import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileNav } from "./MobileNav";
import { CONTACT, NAV_LINKS, SITE } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-40 bg-[var(--color-bg)]/85 backdrop-blur-xl border-b border-[var(--color-line)]">
      <Container as="div" className="flex h-16 sm:h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span
            aria-hidden="true"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-brand)] text-[var(--color-brand)] font-display text-lg transition-all group-hover:bg-[var(--color-brand)] group-hover:text-[var(--color-bg)]"
          >
            R
          </span>
          <span className="leading-tight">
            <span className="font-display text-xl sm:text-[22px] text-[var(--color-ink)] block tracking-tight">
              {SITE.shortName}
            </span>
            <span className="block text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] -mt-0.5">
              Soraon · Prayagraj
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-[14px] text-[var(--color-ink-soft)] hover:text-[var(--color-brand)] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${CONTACT.phonePrimary}`}
            aria-label={`Call ${CONTACT.contactName} at ${CONTACT.phonePrimaryDisplay}`}
            className="group inline-flex items-center gap-2 text-[14px] font-medium text-[var(--color-ink)] hover:text-[var(--color-brand)] transition-colors"
          >
            <span
              aria-hidden="true"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-line-strong)] text-[var(--color-brand)] group-hover:bg-[var(--color-brand)] group-hover:text-[var(--color-bg)] group-hover:border-[var(--color-brand)] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            {CONTACT.contactName}
          </a>
          <Button href="/contact" size="sm" variant="primary">
            Enquire
          </Button>
        </div>

        <MobileNav />
      </Container>
    </header>
  );
}
