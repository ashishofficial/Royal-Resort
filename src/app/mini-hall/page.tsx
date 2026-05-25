import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  AirVent,
  BedDouble,
  Briefcase,
  Cake,
  type LucideIcon,
  Cross,
  Diamond,
  GraduationCap,
  Hand,
  HandPlatter,
  Heart,
  Lamp,
  Lightbulb,
  Music,
  ParkingCircle,
  PartyPopper,
  Sparkles,
  Utensils,
  Wine,
} from "@/lib/icons";
import {
  breadcrumbSchema,
  faqSchema,
  miniHallServiceSchema,
} from "@/lib/schema";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Mini Hall for Haldi, Mehndi & Birthday Party in Prayagraj — ₹1L | Royal Resort",
  description:
    "AC mini hall in Prayagraj for haldi, mehndi, birthday, engagement & anniversary functions. 200 guest capacity, decorated stage, 2 AC rooms, 8 waiters at ₹1,00,000.",
  alternates: { canonical: "/mini-hall" },
  openGraph: {
    title: "Royal Mini Hall — Haldi, Mehndi & Birthday Venue in Prayagraj",
    description:
      "AC hall for 200 guests at ₹1,00,000. Perfect for pre-wedding functions, birthdays, engagements, and anniversaries.",
    url: "/mini-hall",
    type: "website",
  },
};

const faqs = [
  {
    question:
      "What kind of functions is the Royal Mini Hall best suited for?",
    answer:
      "The Mini Hall is purpose-designed for intimate functions where you want air-conditioned comfort but do not need a 500-guest banquet. Most bookings are haldi, mehndi, sangeet, birthday parties, engagement ceremonies, anniversaries, baby showers, and small corporate gatherings. Capacity is around 200 guests.",
  },
  {
    question: "What is included in the ₹1,00,000 mini hall package?",
    answer:
      "Fully AC hall, decorated stage, complete lighting, 2 AC rooms for the family to prepare in, and 8 trained waiters for service. Catering and any special food menu is arranged separately — we can connect you with our in-house caterer.",
  },
  {
    question: "Can the Mini Hall be booked along with the Banquet Hall?",
    answer:
      "Yes, this is one of the most common bookings — Mini Hall for haldi/mehndi the day before, and Banquet Hall for the wedding the next day. Booking both gives families a smooth multi-day experience without coordinating different venues.",
  },
  {
    question: "Is the Mini Hall good for a kid's birthday party?",
    answer:
      "Very much. Parents love it because the hall is AC, it has a decorated stage for cake-cutting, there is open space outside for kids to run around safely, and parking is hassle-free. Two AC rooms also help the host family stage gifts and food separately.",
  },
  {
    question:
      "What about decoration colours and themes for a birthday or engagement?",
    answer:
      "Stage decoration is included. We can do classic floral, balloon themes, themed backdrops for engagements or birthdays, and ring-ceremony arches. Tell us the theme when you book and we will arrange it accordingly.",
  },
  {
    question:
      "How early should I book the Mini Hall for an evening function?",
    answer:
      "For weekday functions, 2–3 weeks notice is usually enough. For weekend evenings and auspicious dates, 4–6 weeks is safer. Call us at 93051 10658 to check live availability.",
  },
];

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Mini Hall", path: "/mini-hall" },
];

export default function MiniHallPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={miniHallServiceSchema()} />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs items={breadcrumbItems} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#3a2a05] via-[#5a3f10] to-[var(--color-ink)] text-white">
        <Container className="relative py-16 lg:py-24">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-gold-soft)] mb-6">
                Royal Mini Hall
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
                Haldi, Mehndi, Birthday &amp; Engagement Venue in Prayagraj
              </h1>
              <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-xl">
                An air-conditioned mini hall built for intimate functions of around 200 guests. Decorated stage, 2 AC rooms, 8 waiters — all in one package, on the same campus as our main banquet hall.
              </p>
              <div className="mt-8 flex items-baseline gap-4">
                <span className="font-display text-5xl text-white">₹1L</span>
                <span className="text-white/70">for 200 guests · all-inclusive</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" variant="gold" size="lg">
                  Reserve a Date
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
                label="Mini Hall — Haldi Setup"
                aspect="4/3"
                imageKey="miniHall"
                priority
                className="shadow-2xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* USE CASES */}
      <Section
        eyebrow="Designed For"
        title="The intimate function that deserves its own space"
        intro="A 500-guest banquet hall is wrong for a 100-guest haldi. A community hall is wrong for an engagement. The Mini Hall was built for exactly the in-between functions every Indian family hosts every few years."
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {(
            [
              { Icon: Hand, label: "Haldi" },
              { Icon: Lamp, label: "Mehndi" },
              { Icon: Cake, label: "Birthday" },
              { Icon: Diamond, label: "Engagement" },
              { Icon: Wine, label: "Anniversary" },
              { Icon: Music, label: "Sangeet" },
              { Icon: Heart, label: "Baby Shower" },
              { Icon: GraduationCap, label: "Graduation" },
              { Icon: Briefcase, label: "Corporate" },
              { Icon: Cross, label: "Pooja / Hawan" },
              { Icon: Utensils, label: "Family Dinner" },
              { Icon: PartyPopper, label: "Reception" },
            ] satisfies Array<{ Icon: LucideIcon; label: string }>
          ).map((u) => (
            <div
              key={u.label}
              className="bg-white rounded-xl p-4 border border-[var(--color-line)] text-center hover:border-[var(--color-brand)] transition-colors"
            >
              <u.Icon
                size={28}
                strokeWidth={1.6}
                className="mx-auto mb-2 text-[var(--color-brand)]"
                aria-hidden="true"
              />
              <div className="text-sm font-medium text-[var(--color-ink)]">{u.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* INCLUSIONS */}
      <Section
        className="bg-[var(--color-cream)]"
        eyebrow="What's Included"
        title="Everything in the ₹1L package"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {(
            [
              { Icon: AirVent, title: "Fully AC mini hall", body: "Comfortable for 200 guests through any season — built-in central AC, not portable units." },
              { Icon: Sparkles, title: "Decorated stage", body: "Themed backdrop with floral or fabric work, photographic lighting, and seating for the family." },
              { Icon: BedDouble, title: "2 AC rooms", body: "Two on-site AC rooms for the family to prepare in, change outfits, and rest between rituals." },
              { Icon: HandPlatter, title: "8 trained waiters", body: "Eight-person service team in uniform — drinks, plates, buffet refills handled while you focus on the function." },
              { Icon: Lightbulb, title: "Full lighting", body: "Hall ambient lighting, accent lights, and decorative entrance lighting for evening functions." },
              { Icon: ParkingCircle, title: "Free parking", body: "On-site parking for guests and family. Easy entry and exit even during dinner-time rush." },
            ] satisfies Array<{ Icon: LucideIcon; title: string; body: string }>
          ).map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 border border-[var(--color-line)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white text-[var(--color-brand)] border border-[var(--color-line)]">
                <item.Icon size={24} strokeWidth={1.6} aria-hidden="true" />
              </div>
              <h3 className="font-display text-lg text-[var(--color-ink)] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-[var(--color-muted)] mt-8 max-w-2xl mx-auto">
          Catering and food menus are charged separately. We can connect you with our in-house caterer or you can bring your own.
        </p>
      </Section>

      {/* PAIRING */}
      <Section
        eyebrow="Multi-Day Weddings"
        title="Pair the Mini Hall with the Banquet Hall for a complete wedding weekend"
      >
        <div className="rounded-2xl bg-[var(--color-ink)] text-white overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-8 lg:p-10">
              <p className="text-[var(--color-gold-soft)] uppercase tracking-[0.18em] text-xs font-semibold mb-3">
                Wedding Weekend Combo
              </p>
              <h3 className="font-display text-3xl lg:text-4xl text-white mb-4">
                Mini Hall + Banquet Hall, same campus
              </h3>
              <p className="text-white/80 leading-relaxed">
                Host haldi and mehndi in the Mini Hall on Day 1, then move straight to the main Banquet Hall for the wedding on Day 2 — without packing up, driving across town, or coordinating two different vendors. Outstation family stays on-site through the whole celebration.
              </p>
              <Button href="/contact" variant="gold" size="md" className="mt-6">
                Get a Combined Quote
              </Button>
            </div>
            <div className="bg-gradient-to-br from-[var(--color-brand)] to-[var(--color-brand-dark)] p-8 lg:p-10">
              <h4 className="font-display text-xl text-white mb-4">A typical weekend</h4>
              <ul className="space-y-3 text-white/90 text-sm">
                <li className="flex gap-3"><span className="font-mono opacity-70">Fri</span><span>Family arrives, AC rooms checked in</span></li>
                <li className="flex gap-3"><span className="font-mono opacity-70">Sat AM</span><span>Haldi in Mini Hall</span></li>
                <li className="flex gap-3"><span className="font-mono opacity-70">Sat PM</span><span>Mehndi / sangeet in Mini Hall</span></li>
                <li className="flex gap-3"><span className="font-mono opacity-70">Sun</span><span>Pheras, baraat &amp; reception in Banquet Hall</span></li>
                <li className="flex gap-3"><span className="font-mono opacity-70">Mon</span><span>Breakfast, send-off, check-out</span></li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section
        className="bg-[var(--color-cream)]"
        eyebrow="Quick Answers"
        title="Mini hall — most asked questions"
      >
        <FAQ items={faqs} />
      </Section>

      <CTABand
        title="Book the Mini Hall for your next celebration."
        subtitle="Haldi, birthday, engagement, sangeet — one call and we will lock the date."
      />
    </>
  );
}
