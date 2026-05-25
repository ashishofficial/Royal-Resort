"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "@/lib/icons";
import { CONTACT, NAV_LINKS } from "@/lib/site";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors"
      >
        {open ? <X size={20} strokeWidth={1.8} aria-hidden="true" /> : <Menu size={20} strokeWidth={1.8} aria-hidden="true" />}
      </button>

      {open && (
        <div
          className="lg:hidden fixed inset-0 top-16 sm:top-20 z-50 bg-[var(--color-bg)]"
          onClick={() => setOpen(false)}
        >
          <nav className="flex flex-col px-6 py-10 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-1 py-5 font-display text-xl border-b border-[var(--color-line)] text-[var(--color-ink)] hover:text-[var(--color-brand)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${CONTACT.phonePrimary}`}
              className="mt-8 px-6 py-4 rounded-full bg-[var(--color-brand)] text-[var(--color-bg)] text-center font-medium"
            >
              Call {CONTACT.phonePrimaryDisplay}
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              className="mt-3 px-6 py-4 rounded-full border border-[var(--color-brand)] text-[var(--color-brand)] text-center font-medium"
            >
              WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
