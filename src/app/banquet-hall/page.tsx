import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { Check } from "lucide-react";
import {
  banquetServiceSchema,
  breadcrumbSchema,
  faqSchema,
} from "@/lib/schema";
import { CONTACT, PRICING } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Banquet Hall in Prayagraj for Wedding — AC Hall for 500 Guests | Royal Resort",
  description:
    "AC banquet hall in Prayagraj for weddings & receptions. 500 guest capacity, decorated mandap, designer stage, catering kitchen, 2 AC rooms, 20 waiters. ₹2.5L. Book now.",
  alternates: { canonical: "/banquet-hall" },
  openGraph: {
    title: "Royal Banquet Hall — AC Wedding Banquet Hall in Prayagraj",
    description:
      "Fully air-conditioned 500-guest wedding banquet hall in Soraon, Prayagraj. Package at ₹2.5L includes decoration, mandap, stage, and rooms.",
    url: "/banquet-hall",
    type: "website",
  },
};

const faqs = [
  {
    question: "Is the Royal Banquet Hall fully air-conditioned?",
    answer:
      "Yes. The entire main hall runs on central air conditioning, sized for 500-guest functions. It stays comfortable even during peak May–June weddings when day temperatures cross 40°C.",
  },
  {
    question: "What is included in the ₹2.5 lakh wedding banquet package?",
    answer:
      "Fully AC banquet hall, decorated mandap, designer stage, jaimala & milni mala, complete flower & light decoration, 2 AC rooms for bride and groom, full catering space (kitchen, washing area, buffet space), 20 trained waiters, and on-site parking with a security attendant — all for 500 guests.",
  },
  {
    question: "What if my guest count exceeds 500?",
    answer:
      "Additional plates are billed at ₹150 each. Tell us your expected count when you enquire and we will plan layout, food quantity, and additional waiters accordingly. We can extend buffet seating onto the adjoining lawn for larger gatherings.",
  },
  {
    question: "Can I bring my own caterer?",
    answer:
      "Yes. The package includes the full catering space — kitchen, washing area, water, buffet stations, and 20 waiters — so you are free to use our in-house chef or your own caterer. Most families use our caterer because it removes one entire vendor from their planning list.",
  },
  {
    question: "How much advance is needed to book the banquet hall?",
    answer:
      "A token advance of ₹1,50,000 confirms your date. The remaining balance must be cleared 15 days before the event. We accept UPI, bank transfer, cash, and major debit/credit cards.",
  },
  {
    question:
      "Are pandit, photographer, DJ, and decoration colours included?",
    answer:
      "Pandit, photographer, and DJ are not included — we can recommend trusted vendors who regularly work at Royal Resort and know the venue inside-out. Decoration colours and mandap theme can be chosen by you during a planning call; we work with several palettes and floral arrangements.",
  },
  {
    question: "Is the venue available year-round, including off-season?",
    answer:
      "Yes. We host weddings every month of the year. Off-season months (July–September) often have special rates and easier date availability, so if you have flexibility on the calendar it can work in your favour.",
  },
  {
    question:
      "Can the venue host a baraat procession with horses, dhol, and DJ truck?",
    answer:
      "Absolutely. The approach road and entrance area are designed for full baraat processions — band-baaja-baraat with horses, dhol, and DJ trucks have all happened here. We provide a dedicated parking area for the baraat vehicles.",
  },
];

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Banquet Hall", path: "/banquet-hall" },
];

export default function BanquetHallPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={banquetServiceSchema()} />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs items={breadcrumbItems} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a0808] via-[#2d0a0a] to-[var(--color-ink)] text-white">
        <Container className="relative py-16 lg:py-24">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-gold-soft)] mb-6">
                Royal Banquet Hall
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
                AC Banquet Hall in Prayagraj for 500 Guests
              </h1>
              <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-xl">
                Prayagraj&rsquo;s most complete wedding banquet hall — central air-conditioning, decorated mandap, designer stage, two AC rooms, full catering space, and 20 trained waiters. One package, one transparent price.
              </p>
              <div className="mt-8 flex items-baseline gap-4">
                <span className="font-display text-5xl text-white">₹2.5L</span>
                <span className="text-white/70">
                  for 500 guests · all-inclusive
                </span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" variant="gold" size="lg">
                  Check Date Availability
                </Button>
                <Button
                  href={`tel:${CONTACT.phonePrimary}`}
                  variant="outline-light"
                  size="lg"
                >
                  Call {CONTACT.phonePrimaryDisplay}
                </Button>
              </div>
            </div>
            <div className="relative">
              <PhotoFrame
                label="Royal Banquet Hall — Wedding Setup"
                aspect="4/3"
                imageKey="banquet"
                priority
                className="shadow-2xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* INTRO */}
      <Section
        eyebrow="Overview"
        title="Built for weddings of every scale, not retrofitted from a hotel ballroom"
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-5 text-[var(--color-ink-soft)] leading-relaxed text-[17px]">
            <p>
              When you book a banquet hall in Prayagraj, you usually run into one of two problems: a city hall that fits the guest list but charges ₹1000+ per plate with last-minute extras, or a cheap option that looks good in photos but has weak AC, leaking ceilings, and crammed parking. The Royal Banquet Hall was designed to be neither.
            </p>
            <p>
              The main hall is a purpose-built wedding banquet — high ceiling, central AC sized for {PRICING.banquetCapacity} guests, polished floor for dancing, integrated stage and mandap zones, and clean sight-lines from every corner so guests can see the rituals. The adjoining catering kitchen and 20-person service team are part of the venue, not separate vendors you have to coordinate.
            </p>
            <p>
              And because we are a resort campus — not a standalone hall — you also get a Mini Hall for haldi/mehndi, a lawn for outdoor functions, and on-site AC rooms for the bride, groom, and their immediate families. That is why families that come for a tour usually leave having booked the date.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <PhotoFrame label="Hall — Empty Layout" aspect="3/4" imageKey="banquet" />
            <div className="grid gap-4">
              <PhotoFrame label="Decorated Stage Close-up" aspect="1/1" imageKey="stage" />
              <PhotoFrame label="Mandap with Flowers" aspect="1/1" imageKey="mandap" />
            </div>
          </div>
        </div>
      </Section>

      {/* PACKAGE INCLUSIONS */}
      <Section
        className="bg-[var(--color-cream)]"
        eyebrow="Inside the ₹2.5L Package"
        title="What you get, line by line"
        intro="No fine print. No surprise add-ons. This is the full inclusion list for the Royal Banquet Hall wedding package."
      >
        <div className="grid md:grid-cols-2 gap-4">
          {[
            ["Fully air-conditioned banquet hall", "Central AC sized for 500-guest functions — no portable units, no hot zones near the buffet."],
            ["Decorated mandap with floral & fabric setup", "Themed mandap built fresh for your function. Discuss the palette during your planning call."],
            ["Designer stage with backdrop and lighting", "Raised stage with themed drapery, photographic backdrop, and ambient stage lighting."],
            ["Jaimala & milni mala arrangement", "Garlands and floral set-up for the jaimala and milni ceremonies — no separate florist coordination."],
            ["Two AC rooms (bride & groom)", "Two deluxe AC rooms for the couple to get ready and rest during the function. Attached bathrooms."],
            ["Complete catering space", "Equipped kitchen, washing & prep area, buffet stations, dishwashing & cutlery — ready for any caterer."],
            ["20 trained waiters in uniform", "Coordinated by our floor manager. Drinks service, plate-clearing, and buffet refills handled."],
            ["Full flower & light decoration", "Entrance flowers, hall ambient lighting, table accents, and stage florals — all part of the package."],
            ["Free on-site parking & security", "Ample parking for guests and baraat vehicles, with a dedicated attendant and overnight security."],
            ["Power backup", "Full generator backup so the AC, lighting, and sound never miss a beat — no matter what the city grid does."],
          ].map(([title, body]) => (
            <div
              key={title}
              className="bg-white rounded-xl p-5 border border-[var(--color-line)] flex gap-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[var(--color-brand)] text-white">
                <Check size={18} strokeWidth={2.5} aria-hidden="true" />
              </div>
              <div>
                <h3 className="font-display text-lg text-[var(--color-ink)]">
                  {title}
                </h3>
                <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed mt-1">
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CATERING & FOOD ESSENTIALS */}
      <Section
        eyebrow="Catering"
        title="In-house chef, or bring your own — either way, the kitchen is ready"
        intro="The venue includes everything a caterer needs. We also offer an in-house catering team with full North Indian, Mughlai, Chinese, South Indian, and live-counter menus."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-[var(--color-line)]">
            <h3 className="font-display text-xl text-[var(--color-ink)] mb-3">
              Kitchen Provided
            </h3>
            <ul className="text-sm text-[var(--color-ink-soft)] space-y-1.5">
              <li>· Full prep kitchen with counters</li>
              <li>· Gas connections and burners</li>
              <li>· Washing & dishwashing zone</li>
              <li>· Cold storage for prep</li>
              <li>· Drinking water and ice</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-[var(--color-line)]">
            <h3 className="font-display text-xl text-[var(--color-ink)] mb-3">
              Buffet & Live Counters
            </h3>
            <ul className="text-sm text-[var(--color-ink-soft)] space-y-1.5">
              <li>· Buffet stations with chafing dishes</li>
              <li>· Live chaat, pasta, tikka counters</li>
              <li>· Dessert &amp; ice-cream stations</li>
              <li>· Welcome drinks zone</li>
              <li>· Plates, glasses, cutlery for 500</li>
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-[var(--color-line)]">
            <h3 className="font-display text-xl text-[var(--color-ink)] mb-3">
              Cuisines Available
            </h3>
            <ul className="text-sm text-[var(--color-ink-soft)] space-y-1.5">
              <li>· North Indian (UP/Punjabi)</li>
              <li>· Mughlai &amp; tandoor</li>
              <li>· Chinese &amp; Indo-Chinese</li>
              <li>· South Indian</li>
              <li>· Pure veg, Jain &amp; Sattvik on request</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* HALL LAYOUT & SPECS */}
      <Section
        className="bg-[var(--color-cream)]"
        eyebrow="Hall Layout"
        title="Specifications at a glance"
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Guest Capacity", value: "500" },
            { label: "Air Conditioning", value: "Central" },
            { label: "Stage", value: "Designer" },
            { label: "Mandap", value: "Decorated" },
            { label: "AC Rooms", value: "2 included" },
            { label: "Waiters", value: "20 included" },
            { label: "Catering Kitchen", value: "Yes" },
            { label: "Parking", value: "Free, on-site" },
          ].map((spec) => (
            <div
              key={spec.label}
              className="bg-white rounded-xl p-5 border border-[var(--color-line)] text-center"
            >
              <div className="text-xs uppercase tracking-[0.14em] text-[var(--color-muted)] mb-1.5">
                {spec.label}
              </div>
              <div className="font-display text-2xl text-[var(--color-ink)]">
                {spec.value}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* TERMS */}
      <Section
        eyebrow="Booking Terms"
        title="Clear, fair terms — no fine print"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {[
            ["Advance to confirm date", "₹1,50,000 token advance is required at booking. Date is held for you only after the advance is received."],
            ["Balance payment", "Balance must be cleared 15 days before the event date. Final guest count should also be confirmed 15 days prior."],
            ["Payment modes", "UPI, IMPS/NEFT bank transfer, cash, and major debit/credit cards are accepted. GST applicable as per current rates."],
            ["Cancellation", "Token amount is non-refundable but can be adjusted against a rescheduled date within 6 months, subject to availability."],
            ["Extra plates", "Above the 500-guest package, additional plates are charged at ₹150 per plate. Tell us the expected count at booking."],
            ["Decoration changes", "Mandap & stage decoration colours can be chosen during the planning call. Heavily custom themes may incur add-on charges."],
          ].map(([title, body]) => (
            <div
              key={title}
              className="rounded-2xl border border-[var(--color-line)] p-6 bg-white"
            >
              <h3 className="font-display text-lg text-[var(--color-ink)] mb-2">
                {title}
              </h3>
              <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
                {body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section
        className="bg-[var(--color-cream)]"
        eyebrow="Quick Answers"
        title="Banquet hall — most asked questions"
      >
        <FAQ items={faqs} />
      </Section>

      <CTABand
        title="Hold your wedding date at Royal Banquet Hall."
        subtitle="Most peak-season dates fill 4–6 months out. Call us today to check availability and lock in the venue."
      />
    </>
  );
}
