"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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

  const drawer = open ? (
    <div
      className="lg:hidden fixed inset-0 z-[60] overflow-y-auto"
      style={{ backgroundColor: "#fbf8f2" }}
      onClick={() => setOpen(false)}
    >
      <div
        className="min-h-full flex flex-col"
        style={{ backgroundColor: "#fbf8f2" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer header — replicates the site header so it stays visible
            with a close button on the right */}
        <div className="flex items-center justify-between h-16 sm:h-20 px-5 sm:px-6 border-b border-[var(--color-line)]">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-3"
          >
            <span
              aria-hidden="true"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-brand)] text-[var(--color-brand)] font-display text-lg"
            >
              R
            </span>
            <span className="leading-tight">
              <span className="font-display text-xl text-[var(--color-ink)] block tracking-tight">
                Royal Resort
              </span>
              <span className="block text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] -mt-0.5">
                Soraon · Prayagraj
              </span>
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors"
          >
            <X size={20} strokeWidth={1.8} aria-hidden="true" />
          </button>
        </div>

        <nav className="flex flex-col px-6 pt-6 pb-4 flex-1">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="group flex items-center justify-between px-1 py-5 font-display text-xl border-b border-[var(--color-line)] text-[var(--color-ink)] hover:text-[var(--color-brand)] transition-colors"
            >
              <span className="flex items-baseline gap-3">
                <span className="text-xs text-[var(--color-muted)] font-sans tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {link.label}
              </span>
              <span
                aria-hidden="true"
                className="text-[var(--color-muted)] group-hover:text-[var(--color-brand)] group-hover:translate-x-1 transition-all"
              >
                →
              </span>
            </Link>
          ))}
        </nav>

        <div className="px-6 pb-8 space-y-3">
          <a
            href={`tel:${CONTACT.phonePrimary}`}
            className="block w-full px-6 py-4 rounded-full bg-[var(--color-brand)] text-[var(--color-bg)] text-center font-medium"
          >
            Call {CONTACT.phonePrimaryDisplay}
          </a>
          <a
            href={`https://wa.me/${CONTACT.whatsapp}?text=Hi%2C%20I%20want%20to%20enquire%20about%20Royal%20Resort%20Prayagraj`}
            className="block w-full px-6 py-4 rounded-full border border-[var(--color-brand)] text-[var(--color-brand)] text-center font-medium"
          >
            WhatsApp Us
          </a>
        </div>

        <div className="px-6 pb-10 text-center">
          <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)] mb-2">
            Visit
          </p>
          <address className="not-italic text-sm text-[var(--color-ink-soft)] leading-relaxed">
            JR27+649, Narayanpur, Soraon
            <br />
            Prayagraj, Uttar Pradesh
          </address>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-[var(--color-ink)] hover:bg-[var(--color-cream)] transition-colors"
      >
        {open ? (
          <X size={20} strokeWidth={1.8} aria-hidden="true" />
        ) : (
          <Menu size={20} strokeWidth={1.8} aria-hidden="true" />
        )}
      </button>

      {/* Portal the drawer to document.body so it escapes the Header's
          z-40 sticky stacking context — that was letting the hero bleed
          through the drawer's background on some browsers. The drawer
          only renders when `open === true` (always client-side after a
          tap), so a mounted check isn't needed. */}
      {drawer && typeof document !== "undefined"
        ? createPortal(drawer, document.body)
        : null}
    </>
  );
}
