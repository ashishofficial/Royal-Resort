import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/sections/ContactForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { Mail, Phone } from "@/lib/icons";
import { breadcrumbSchema } from "@/lib/schema";
import { CONTACT, LOCATION } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Royal Resort Prayagraj — Book Your Wedding Date Today",
  description:
    "Call +91 93051 10658 or WhatsApp us to book Royal Resort Prayagraj. Located at JR27+649, Narayanpur, Soraon, Prayagraj. Address, directions, map, and enquiry form.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Royal Resort Prayagraj",
    description:
      "Address, phone, WhatsApp, and enquiry form for Royal Resort Prayagraj in Soraon.",
    url: "/contact",
    type: "website",
  },
};

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

const landmarks = [
  {
    from: "Prayagraj Junction (Allahabad Railway Station)",
    via: "via GT Road / NH-19 → Soraon turn-off → Narayanpur",
    time: "≈ 40 min · 28 km",
  },
  {
    from: "Prayagraj Airport (Bamrauli)",
    via: "via Phaphamau Bypass → Soraon road → Narayanpur",
    time: "≈ 55 min · 35 km",
  },
  {
    from: "Phaphamau",
    via: "via Soraon Highway → Narayanpur turn-off",
    time: "≈ 30 min · 22 km",
  },
  {
    from: "Naini",
    via: "via Yamuna Bridge → city → Soraon road",
    time: "≈ 50 min · 38 km",
  },
  {
    from: "Pratapgarh",
    via: "via NH-330 → Soraon",
    time: "≈ 1 hr 10 min · 50 km",
  },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />

      <Breadcrumbs items={breadcrumbItems} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--color-brand-deep)] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 30%, rgba(47,106,85,0.5), transparent 55%), radial-gradient(circle at 80% 80%, rgba(216,182,117,0.15), transparent 55%)",
          }}
        />
        <Container className="relative py-20 lg:py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-[var(--color-gold)]" aria-hidden="true" />
              <p className="text-[var(--color-gold-soft)] text-[11px] font-semibold uppercase tracking-[0.24em]">
                We are here to help
              </p>
            </div>
            <h1 className="font-display text-[40px] sm:text-5xl lg:text-[68px] leading-[1.02]">
              Talk to the <em className="italic text-[var(--color-gold-soft)]">Royal Resort</em> team
            </h1>
            <p className="mt-7 text-lg text-white/75 leading-relaxed">
              Call, WhatsApp, or send us an enquiry. We reply to almost every message within an hour during the day — usually with a quote, available dates, and an invitation to come walk the venue.
            </p>
          </div>
        </Container>
      </section>

      {/* QUICK CONTACT BAR */}
      <section className="bg-[var(--color-bg)] border-b border-[var(--color-line)]">
        <Container className="py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <a
              href={`tel:${CONTACT.phonePrimary}`}
              className="group flex items-start gap-4 p-6 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[0_1px_0_rgba(15,31,26,0.03)] hover:shadow-[0_20px_40px_-22px_rgba(31,74,58,0.22)] hover:border-[var(--color-line-strong)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] text-white">
                <Phone size={20} strokeWidth={2} aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  Call us
                </div>
                <div className="font-display text-lg text-[var(--color-ink)]">
                  {CONTACT.phonePrimaryDisplay}
                </div>
                <div className="text-sm text-[var(--color-ink-soft)]">
                  Also: {CONTACT.phoneSecondaryDisplay}
                </div>
              </div>
            </a>
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=Hi%2C%20I%20want%20to%20enquire%20about%20Royal%20Resort%20Prayagraj`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-4 p-5 rounded-xl border border-[var(--color-line)] hover:border-[#25D366] hover:shadow-md transition-all"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  WhatsApp
                </div>
                <div className="font-display text-lg text-[var(--color-ink)]">
                  Quick chat
                </div>
                <div className="text-sm text-[var(--color-ink-soft)]">
                  We reply within ~1 hour
                </div>
              </div>
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="group flex items-start gap-4 p-6 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] shadow-[0_1px_0_rgba(15,31,26,0.03)] hover:shadow-[0_20px_40px_-22px_rgba(31,74,58,0.22)] hover:border-[var(--color-line-strong)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-ink)] text-white">
                <Mail size={20} strokeWidth={2} aria-hidden="true" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.14em] text-[var(--color-muted)]">
                  Email
                </div>
                <div className="font-display text-lg text-[var(--color-ink)] break-all">
                  {CONTACT.email}
                </div>
                <div className="text-sm text-[var(--color-ink-soft)]">
                  For detailed enquiries
                </div>
              </div>
            </a>
          </div>
        </Container>
      </section>

      {/* FORM + ADDRESS */}
      <Section
        tone="surface"
        eyebrow="Send Enquiry"
        title="Tell us about your event"
        index="I — Enquire"
      >
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-14">
          <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg)] p-7 sm:p-9 shadow-[0_10px_30px_-18px_rgba(15,31,26,0.18)]">
            <ContactForm />
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-[var(--color-line-strong)]/40 bg-[var(--color-cream)] p-7">
              <h3 className="font-display text-2xl text-[var(--color-ink)] mb-3">Visit Us</h3>
              <address className="not-italic text-[var(--color-ink-soft)] leading-relaxed">
                <strong className="text-[var(--color-ink)] block">Royal Resort</strong>
                {LOCATION.streetAddress}<br />
                {LOCATION.locality}, {LOCATION.region} {LOCATION.postalCode}<br />
                {LOCATION.countryName}<br />
                <span className="text-xs text-[var(--color-muted)] mt-2 block">
                  Plus Code: {LOCATION.plusCode}
                </span>
              </address>
              <Button
                href={LOCATION.googleMapsUrl}
                variant="primary"
                size="md"
                className="mt-5"
              >
                Get Directions
              </Button>
            </div>
            <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-bg)] p-7">
              <h3 className="font-display text-xl text-[var(--color-ink)] mb-3">Hours</h3>
              <p className="text-[var(--color-ink-soft)] text-sm leading-relaxed">
                Open all 7 days for venue tours and event bookings.<br />
                Best time to call: <strong className="text-[var(--color-ink)]">9 AM – 9 PM</strong>.<br />
                Walk-in tours: please call ahead — we may be hosting an event.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* DIRECTIONS */}
      <Section
        tone="cream"
        eyebrow="How to Reach"
        title="Driving directions from key landmarks"
        intro="Soraon is on the Prayagraj-Lucknow side of the city. The drive is straightforward in any direction."
        index="II — Directions"
      >
        <div className="grid md:grid-cols-2 gap-4">
          {landmarks.map((l) => (
            <div
              key={l.from}
              className="bg-[var(--color-bg)] rounded-2xl p-6 border border-[var(--color-line)] shadow-[0_1px_0_rgba(15,31,26,0.03)] hover:shadow-[0_16px_30px_-18px_rgba(31,74,58,0.18)] hover:border-[var(--color-line-strong)] transition-all duration-300"
            >
              <h3 className="font-display text-lg text-[var(--color-ink)]">From {l.from}</h3>
              <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed mt-1.5">
                {l.via}
              </p>
              <p className="text-sm text-[var(--color-brand)] font-semibold mt-3">{l.time}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* MAP */}
      <Section
        tone="surface"
        eyebrow="On the Map"
        title="Find Royal Resort"
        index="III — Map"
      >
        <div className="rounded-2xl overflow-hidden border border-[var(--color-line)] aspect-[16/9] shadow-[0_20px_40px_-22px_rgba(15,31,26,0.2)]">
          <iframe
            src={`https://maps.google.com/maps?q=${encodeURIComponent(LOCATION.googleMapsEmbedQuery)}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Royal Resort Prayagraj — Google Map"
          />
        </div>
      </Section>
    </>
  );
}
