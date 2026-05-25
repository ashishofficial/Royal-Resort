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
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors"
      >
        {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
      </button>

      {open && (
        <div
          className="lg:hidden fixed inset-0 top-16 sm:top-20 z-50 bg-white animate-in fade-in"
          onClick={() => setOpen(false)}
        >
          <nav className="flex flex-col px-6 py-8 gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-2 py-4 text-lg border-b border-[var(--color-line)] text-[var(--color-ink)] hover:text-[var(--color-brand)] transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${CONTACT.phonePrimary}`}
              className="mt-6 px-6 py-4 rounded-full bg-[var(--color-brand)] text-white text-center font-medium"
            >
              Call {CONTACT.phonePrimaryDisplay}
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}`}
              className="mt-3 px-6 py-4 rounded-full bg-[#25D366] text-white text-center font-medium"
            >
              WhatsApp Us
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
