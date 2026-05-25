import Link from "next/link";
import { Container } from "./Container";

type Crumb = { name: string; path: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-[var(--color-cream)] border-b border-[var(--color-line)]"
    >
      <Container className="py-3">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-[var(--color-muted)]">
          {items.map((item, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={item.path} className="flex items-center gap-2">
                {isLast ? (
                  <span className="text-[var(--color-ink)] font-medium">
                    {item.name}
                  </span>
                ) : (
                  <>
                    <Link
                      href={item.path}
                      className="hover:text-[var(--color-brand)] transition-colors"
                    >
                      {item.name}
                    </Link>
                    <span aria-hidden="true">/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </nav>
  );
}
