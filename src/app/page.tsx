import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { PhotoFrame } from "@/components/ui/PhotoFrame";
import { FAQ } from "@/components/sections/FAQ";
import { CTABand } from "@/components/sections/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  AirVent,
  BedDouble,
  CheckCircle2,
  ChefHat,
  Crown,
  Flower2,
  Lightbulb,
  ParkingCircle,
  Ribbon,
  StarRating,
  Users,
} from "@/lib/icons";
import {
  banquetServiceSchema,
  breadcrumbSchema,
  faqSchema,
  miniHallServiceSchema,
} from "@/lib/schema";
import { CONTACT, LOCATION, PRICING, RATING, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Royal Resort Prayagraj — Best Wedding & Banquet Resort in Soraon | ₹2.5L for 500 Guests",
  description:
    "Book Prayagraj's top wedding resort in Soraon. AC banquet hall for 500 guests at ₹2.5L, decorated mandap, in-house catering, AC rooms & open lawn. Call 93051 10658.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Royal Resort Prayagraj — Best Wedding & Banquet Resort",
    description:
      "AC banquet hall for 500 guests at ₹2.5L, decorated mandap, catering, rooms & lawn in Soraon, Prayagraj.",
    url: SITE.url,
    type: "website",
  },
};

const homeFaqs = [
  {
    question:
      "What is the price of Royal Resort banquet hall for a wedding in Prayagraj?",
    answer:
      "Our flagship wedding package is ₹2,50,000 for 500 guests. It includes a fully air-conditioned banquet hall, decorated mandap, jaimala & milni mala arrangement, complete catering space, two AC rooms (bride & groom), designer stage, 20 trained waiters, and full flower & light decoration. Additional plates beyond 500 guests are billed at ₹150 each.",
  },
  {
    question: "Where exactly is Royal Resort located in Prayagraj?",
    answer:
      "Royal Resort is at JR27+649, Narayanpur, Soraon, Prayagraj, Uttar Pradesh 212502. We are around 35–45 minutes from Prayagraj Junction and easily reachable via NH-19 and the Soraon road. The location keeps the celebration away from city traffic and noise while staying convenient for guests travelling in from anywhere in the district.",
  },
  {
    question: "How many guests can the Royal Banquet Hall comfortably host?",
    answer:
      "The Royal Banquet Hall comfortably hosts 500 guests for a wedding reception with a full buffet, mandap, and stage layout. For larger gatherings, we can extend catering and seating onto the adjoining lawn — please share your expected count when you enquire and we will design the layout around it.",
  },
  {
    question: "What advance is required to confirm a booking at Royal Resort?",
    answer:
      "An advance of ₹1,50,000 is required at the time of confirmation as a token amount. The balance must be cleared 15 days before the event date. We accept UPI, bank transfer, cash, and major cards.",
  },
  {
    question:
      "Can Royal Resort host smaller events like haldi, mehndi, birthdays, and engagements?",
    answer:
      "Yes. Our Royal Mini Hall is built exactly for those intimate functions. It accommodates around 200 guests, is fully air-conditioned, and is available at ₹1,00,000 with a decorated stage, two AC rooms, and 8 waiters — ideal for haldi, mehndi, birthday parties, engagements, and anniversaries.",
  },
  {
    question: "Do you provide rooms for outstation wedding guests?",
    answer:
      "Yes. We have deluxe air-conditioned rooms on-site at ₹4,500 per night (plus 5% GST). This is a huge convenience for baraat parties and out-of-town guests — no late-night travel back to the city after the function. Two AC rooms are already complimentary with the wedding banquet package.",
  },
  {
    question: "Is in-house catering available, or do we have to bring our own?",
    answer:
      "We have an experienced in-house catering team with full North Indian, Mughlai, Chinese, and live-counter menus. You can also bring your own caterer if you prefer — our package includes the catering space, water, washing area, and 20 waiters either way. Custom menus and tasting sessions can be arranged on request.",
  },
  {
    question:
      "What makes Royal Resort better than other wedding venues in Prayagraj?",
    answer:
      "Three reasons. First, value — ₹2.5L for 500 guests with full decoration and rooms is roughly half the per-plate cost of comparable city banquets. Second, peace — Soraon is calm, green, and free of traffic, so your photography and rituals are not interrupted by horns and crowds. Third, completeness — banquet, mini hall, lawn, rooms, catering, and parking are all on one campus, so you are not coordinating five vendors at five locations.",
  },
  {
    question: "How early should I book my wedding date at Royal Resort?",
    answer:
      "For peak wedding months (November to February and April to June), we recommend booking 4–6 months in advance. Auspicious dates fill up first. For off-season weddings or smaller functions in the Mini Hall, 4–6 weeks is usually enough. Call us at 93051 10658 to check live availability.",
  },
  {
    question: "Is there parking available for our guests?",
    answer:
      "Yes, we have ample free on-site parking for cars and two-wheelers, plus a separate area for the baraat procession and rented vehicles. Security and a dedicated parking attendant are arranged for every wedding.",
  },
];

const breadcrumbs = breadcrumbSchema([{ name: "Home", path: "/" }]);

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbs} />
      <JsonLd data={banquetServiceSchema()} />
      <JsonLd data={miniHallServiceSchema()} />
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a0808] via-[#2d0a0a] to-[var(--color-ink)] text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 30%, rgba(176,138,60,0.45), transparent 45%), radial-gradient(circle at 75% 70%, rgba(139,0,0,0.55), transparent 50%)",
          }}
        />
        <Container className="relative py-20 lg:py-28">
          <div className="grid lg:grid-cols-[1.15fr_1fr] gap-12 lg:gap-16 items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-gold-soft)] mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-gold-soft)]" />
                Soraon · Prayagraj
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] text-white">
                {SITE.shortName} — Premier Wedding &amp; Banquet Resort in Prayagraj
              </h1>
              <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-xl">
                A peaceful, fully air-conditioned wedding resort in Soraon with a 500-guest banquet hall, decorated mandap, in-house catering, deluxe AC rooms, and an open lawn — all on one campus from <span className="font-semibold text-white">₹2.5 lakh</span>.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" variant="gold" size="lg">
                  Check Availability
                </Button>
                <Button
                  href={`tel:${CONTACT.phonePrimary}`}
                  variant="outline-light"
                  size="lg"
                >
                  Call {CONTACT.phonePrimaryDisplay}
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-3 text-sm text-white/70">
                <StarRating className="text-[var(--color-gold-soft)]" size={18} />
                <span>
                  {RATING.value} rating from {RATING.count}+ happy families
                </span>
              </div>
            </div>

            <div className="relative">
              <PhotoFrame
                label="Royal Banquet Hall — Decorated for Reception"
                aspect="3/4"
                imageKey="banquet"
                priority
                className="shadow-2xl"
              />
              <div className="hidden sm:block absolute -bottom-6 -left-6 w-44 rotate-[-6deg]">
                <PhotoFrame
                  label="Decorated Mandap"
                  aspect="1/1"
                  imageKey="mandap"
                  className="shadow-xl border-4 border-white/20"
                />
              </div>
              <div className="hidden sm:block absolute -top-6 -right-6 w-40 rotate-[6deg]">
                <PhotoFrame
                  label="Lawn at Dusk"
                  aspect="1/1"
                  imageKey="lawn"
                  className="shadow-xl border-4 border-white/20"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* STATS BAR */}
      <section className="bg-[var(--color-cream)] border-y border-[var(--color-line)]">
        <Container className="py-8">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { value: "500+", label: "Guest capacity" },
              { value: "200+", label: "Weddings hosted" },
              { value: "2", label: "AC halls + lawn" },
              { value: "₹2.5L", label: "All-in package" },
            ].map((s) => (
              <div key={s.label}>
                <dt className="font-display text-3xl sm:text-4xl text-[var(--color-brand)]">
                  {s.value}
                </dt>
                <dd className="text-xs sm:text-sm uppercase tracking-[0.12em] text-[var(--color-muted)] mt-1">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* ABOUT */}
      <Section
        eyebrow="About the Resort"
        title="Prayagraj's most loved wedding resort, just a short drive from the city"
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-5 text-[var(--color-ink-soft)] leading-relaxed text-[17px]">
            <p>
              <strong className="text-[var(--color-ink)]">Royal Resort</strong> is a dedicated wedding resort in Prayagraj, set in the green and peaceful belt of Soraon-Narayanpur on the outskirts of the city. We host weddings, receptions, engagements, haldi and mehndi functions, birthday parties, anniversaries, and corporate offsites — all on a single campus that combines an air-conditioned banquet hall, an intimate mini hall, deluxe AC rooms, and an open lawn for outdoor ceremonies and photography.
            </p>
            <p>
              For over a decade, we have helped families across Prayagraj, Allahabad, Pratapgarh, Kaushambi, and Bhadohi pull off the wedding they pictured — without the chaos of a city banquet hall and without the city-banquet price tag. Our flagship wedding package handles the heaviest part of planning for you: hall, mandap, stage, mandap decoration, jaimala &amp; milni mala, catering space, two AC rooms for the couple, and a 20-person service team are all included in one transparent price of ₹2.5 lakh.
            </p>
            <p>
              What you remember most about a wedding is how it <em>felt</em> — and that is where being a few kilometres outside the city changes everything. There is space to breathe. The pheras happen without horns in the background. Your photographer gets clean wide shots of the lawn and the mandap. Outstation guests stay on-site instead of driving back to a city hotel at 1am. That combination — full-package wedding resort, calm setting, honest pricing — is why families keep recommending us to each other.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <PhotoFrame label="Banquet Hall — Reception Setup" aspect="3/4" imageKey="banquet" />
            <div className="grid gap-4">
              <PhotoFrame label="Mandap with Flower Decoration" aspect="1/1" imageKey="mandap" />
              <PhotoFrame label="Open Lawn — Evening" aspect="1/1" imageKey="lawn" />
            </div>
          </div>
        </div>
      </Section>

      {/* VENUE SHOWCASE */}
      <Section
        className="bg-white"
        eyebrow="Spaces at Royal Resort"
        title="Pick the right space for your celebration"
        intro="Whether it is a 500-guest baraat or an intimate haldi for 80, we have a dedicated space for it — and you can combine spaces for multi-day weddings."
      >
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {[
            {
              href: "/banquet-hall",
              eyebrow: "Royal Banquet Hall",
              title: "Wedding & Reception Hall",
              capacity: "Up to 500 guests",
              price: "From ₹2,50,000",
              points: [
                "Fully AC main hall",
                "Decorated mandap & designer stage",
                "Jaimala & milni mala included",
                "2 AC rooms + 20 waiters",
              ],
              imageKey: "banquet" as const,
              cta: "View Banquet Hall",
            },
            {
              href: "/mini-hall",
              eyebrow: "Royal Mini Hall",
              title: "Haldi, Mehndi, Birthdays",
              capacity: "Up to 200 guests",
              price: "From ₹1,00,000",
              points: [
                "AC hall with decorated stage",
                "2 AC rooms included",
                "Perfect for pre-wedding & birthdays",
                "8 waiters included",
              ],
              imageKey: "miniHall" as const,
              cta: "View Mini Hall",
            },
            {
              href: "/rooms",
              eyebrow: "Deluxe AC Rooms",
              title: "Stay for the Whole Celebration",
              capacity: "Per night",
              price: "From ₹4,500",
              points: [
                "AC rooms with attached bath",
                "Ideal for baraat & guests",
                "On-campus convenience",
                "Breakfast on request",
              ],
              imageKey: "room" as const,
              cta: "View Rooms",
            },
          ].map((card) => (
            <article
              key={card.href}
              className="group flex flex-col rounded-2xl border border-[var(--color-line)] bg-white overflow-hidden hover:shadow-xl transition-shadow"
            >
              <PhotoFrame label={card.title} aspect="3/2" imageKey={card.imageKey} />
              <div className="p-6 sm:p-7 flex flex-col flex-1">
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--color-brand)] font-semibold">
                  {card.eyebrow}
                </p>
                <h3 className="font-display text-2xl mt-2 text-[var(--color-ink)]">
                  {card.title}
                </h3>
                <div className="flex items-baseline gap-3 mt-3 mb-5">
                  <span className="font-display text-2xl text-[var(--color-brand)]">
                    {card.price}
                  </span>
                  <span className="text-sm text-[var(--color-muted)]">{card.capacity}</span>
                </div>
                <ul className="space-y-2 text-sm text-[var(--color-ink-soft)] mb-6">
                  {card.points.map((p) => (
                    <li key={p} className="flex items-start gap-2">
                      <CheckCircle2
                        size={16}
                        strokeWidth={2}
                        className="text-[var(--color-brand)] mt-0.5 shrink-0"
                        aria-hidden="true"
                      />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={card.href}
                  className="mt-auto inline-flex items-center gap-1 text-[var(--color-brand)] font-semibold text-sm hover:gap-2 transition-all"
                >
                  {card.cta} →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* PACKAGE INCLUSIONS */}
      <Section
        className="bg-[var(--color-cream)]"
        eyebrow="What's Included"
        title="Everything in the ₹2.5L wedding package"
        intro="One transparent price. No surprises on the bill. Here is exactly what the Royal Banquet Hall wedding package covers for 500 guests."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { Icon: AirVent, title: "Fully AC banquet hall", body: "Powerful central air-conditioning. Stays comfortable for 500 guests even at peak summer functions." },
            { Icon: Flower2, title: "Decorated mandap", body: "Full flower-and-fabric mandap setup. Choice of palette to match your theme — discuss during booking." },
            { Icon: Crown, title: "Designer stage", body: "Raised stage with backdrop, themed drapery, and lighting for the couple and family photographs." },
            { Icon: Ribbon, title: "Jaimala & milni mala", body: "Garlands and floral arrangement for the jaimala and milni rituals — no separate florist needed." },
            { Icon: BedDouble, title: "2 AC rooms", body: "Two complimentary deluxe AC rooms for the bride and groom — get ready and rest on-site." },
            { Icon: ChefHat, title: "Catering space", body: "Full kitchen, washing, and buffet space. Use our in-house chef or bring your own caterer." },
            { Icon: Users, title: "20 trained waiters", body: "20-person uniformed service team for the duration of the event. Coordinated by our floor manager." },
            { Icon: Lightbulb, title: "Flower & light decoration", body: "Hall ambient lighting, entrance decoration, and themed floral arrangements included." },
            { Icon: ParkingCircle, title: "Free on-site parking", body: "Ample car and two-wheeler parking with a dedicated attendant and security for the night." },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-6 border border-[var(--color-line)] hover:border-[var(--color-brand)] transition-colors"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-cream)] text-[var(--color-brand)]">
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
        <p className="text-sm text-[var(--color-muted)] mt-8 text-center max-w-2xl mx-auto">
          Extra guests beyond 500 are charged at ₹{PRICING.banquetExtraPerPlate} per plate. GST as applicable. Pandit, photographer, and music are not included — we can recommend trusted vendors.
        </p>
      </Section>

      {/* GALLERY PREVIEW */}
      <Section
        eyebrow="Gallery"
        title="A look around Royal Resort"
        intro="Real photos from real weddings — full gallery available on request."
      >
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          <PhotoFrame label="Decorated Banquet Hall" aspect="4/3" imageKey="banquet" />
          <PhotoFrame label="Mandap Close-up" aspect="4/3" imageKey="mandap" />
          <PhotoFrame label="Lawn at Twilight" aspect="4/3" imageKey="lawn" />
          <PhotoFrame label="Bride Entry Aisle" aspect="4/3" imageKey="aisle" />
          <PhotoFrame label="Stage with Family" aspect="4/3" imageKey="stage" />
          <PhotoFrame label="Mehndi Function Setup" aspect="4/3" imageKey="mehndi" />
        </div>
        <div className="mt-10 text-center">
          <Button href="/contact" variant="secondary" size="md">
            Request Full Gallery on WhatsApp
          </Button>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <section className="bg-[var(--color-ink)] text-white py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="max-w-3xl mb-12">
            <p className="text-[var(--color-gold-soft)] text-sm font-semibold uppercase tracking-[0.18em] mb-3">
              Why Families Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Real reviews from real weddings
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "We compared every banquet hall in Prayagraj for our daughter's wedding. Nobody came close to Royal Resort on price, and the food and decoration were better than venues charging double. 500 guests, zero complaints.",
                name: "Ravi & Sunita Mishra",
                role: "Wedding of Ananya · Dec 2025",
              },
              {
                quote:
                  "Booked the mini hall for my mother's 70th birthday. Decoration was beautiful, the AC was perfect, and the team handled everything. We just had to bring the cake.",
                name: "Vikrant Pandey",
                role: "Birthday · Oct 2025",
              },
              {
                quote:
                  "Outstation baraat of 80 people. Two AC rooms came with the package, more rooms at fair rates. Best part — no traffic, no honking, mandap photos turned out incredible.",
                name: "Aakash & Priya Tiwari",
                role: "Wedding · Feb 2026",
              },
            ].map((t) => (
              <figure
                key={t.name}
                className="rounded-2xl bg-white/[0.04] border border-white/10 p-6 backdrop-blur"
              >
                <StarRating className="text-[var(--color-gold-soft)] mb-3" size={18} />
                <blockquote className="text-white/90 leading-relaxed text-[15px]">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 pt-5 border-t border-white/10">
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-white/60 mt-0.5">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="mt-8 flex items-center justify-center gap-2 text-white/60 text-sm">
            <StarRating className="text-[var(--color-gold-soft)]" size={14} />
            <span>
              {RATING.value} average across {RATING.count}+ Google reviews
            </span>
          </p>
        </Container>
      </section>

      {/* PRICING SNAPSHOT */}
      <Section
        eyebrow="Transparent Pricing"
        title="No hidden costs. No per-plate surprises."
        intro="Compared to city banquet halls in Prayagraj at ₹999–₹1500 per plate, our wedding package works out to roughly ₹500 per plate — with the venue, decoration, mandap, stage, rooms, and waiters all included."
      >
        <div className="overflow-x-auto rounded-2xl border border-[var(--color-line)] bg-white">
          <table className="w-full text-left">
            <thead className="bg-[var(--color-cream)] text-[var(--color-ink)]">
              <tr>
                <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Package</th>
                <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Capacity</th>
                <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Best For</th>
                <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider text-right">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-line)]">
              <tr className="hover:bg-[var(--color-cream)]/40">
                <td className="px-6 py-5">
                  <div className="font-display text-lg text-[var(--color-ink)]">Royal Banquet Hall</div>
                  <div className="text-xs text-[var(--color-muted)] mt-1">Full wedding package</div>
                </td>
                <td className="px-6 py-5 text-[var(--color-ink-soft)]">500 guests</td>
                <td className="px-6 py-5 text-[var(--color-ink-soft)]">Wedding, reception</td>
                <td className="px-6 py-5 text-right">
                  <div className="font-display text-xl text-[var(--color-brand)]">₹2,50,000</div>
                  <div className="text-xs text-[var(--color-muted)]">+ ₹150/extra plate</div>
                </td>
              </tr>
              <tr className="hover:bg-[var(--color-cream)]/40">
                <td className="px-6 py-5">
                  <div className="font-display text-lg text-[var(--color-ink)]">Royal Mini Hall</div>
                  <div className="text-xs text-[var(--color-muted)] mt-1">Pre-wedding & parties</div>
                </td>
                <td className="px-6 py-5 text-[var(--color-ink-soft)]">200 guests</td>
                <td className="px-6 py-5 text-[var(--color-ink-soft)]">Haldi, mehndi, birthday, engagement</td>
                <td className="px-6 py-5 text-right">
                  <div className="font-display text-xl text-[var(--color-brand)]">₹1,00,000</div>
                  <div className="text-xs text-[var(--color-muted)]">Decoration included</div>
                </td>
              </tr>
              <tr className="hover:bg-[var(--color-cream)]/40">
                <td className="px-6 py-5">
                  <div className="font-display text-lg text-[var(--color-ink)]">Deluxe AC Room</div>
                  <div className="text-xs text-[var(--color-muted)] mt-1">Per night, double occupancy</div>
                </td>
                <td className="px-6 py-5 text-[var(--color-ink-soft)]">2 guests</td>
                <td className="px-6 py-5 text-[var(--color-ink-soft)]">Baraat, outstation guests</td>
                <td className="px-6 py-5 text-right">
                  <div className="font-display text-xl text-[var(--color-brand)]">₹4,500</div>
                  <div className="text-xs text-[var(--color-muted)]">+ 5% GST</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8 grid sm:grid-cols-3 gap-4 text-sm">
          <div className="bg-white rounded-xl p-5 border border-[var(--color-line)]">
            <div className="font-semibold text-[var(--color-ink)] mb-1">Booking Advance</div>
            <div className="text-[var(--color-ink-soft)]">₹1,50,000 to confirm date. Balance 15 days before event.</div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-[var(--color-line)]">
            <div className="font-semibold text-[var(--color-ink)] mb-1">Payment Modes</div>
            <div className="text-[var(--color-ink-soft)]">UPI, bank transfer, card, and cash all accepted.</div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-[var(--color-line)]">
            <div className="font-semibold text-[var(--color-ink)] mb-1">Custom Packages</div>
            <div className="text-[var(--color-ink-soft)]">Multi-day weddings, combinations, larger guest counts — just ask.</div>
          </div>
        </div>
      </Section>

      {/* LOCATION */}
      <Section
        className="bg-[var(--color-cream)]"
        eyebrow="Find Us"
        title="A peaceful drive from the heart of Prayagraj"
        intro="Far enough from city traffic for calm pheras and clean photography — close enough that no guest is inconvenienced."
      >
        <div className="grid lg:grid-cols-[1fr_1.3fr] gap-8 lg:gap-10 items-start">
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-6 border border-[var(--color-line)]">
              <h3 className="font-display text-xl text-[var(--color-ink)] mb-3">Address</h3>
              <address className="not-italic text-[var(--color-ink-soft)] leading-relaxed">
                {LOCATION.streetAddress}<br />
                {LOCATION.locality}, {LOCATION.region} {LOCATION.postalCode}<br />
                Plus Code: {LOCATION.plusCode}
              </address>
              <a
                href={LOCATION.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 text-[var(--color-brand)] font-semibold hover:underline"
              >
                Open in Google Maps →
              </a>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-[var(--color-line)]">
              <h3 className="font-display text-xl text-[var(--color-ink)] mb-3">Driving Distance</h3>
              <ul className="space-y-2 text-sm text-[var(--color-ink-soft)]">
                <li className="flex justify-between gap-4"><span>Prayagraj Junction</span> <span className="text-[var(--color-muted)]">~40 min</span></li>
                <li className="flex justify-between gap-4"><span>Prayagraj Airport</span> <span className="text-[var(--color-muted)]">~55 min</span></li>
                <li className="flex justify-between gap-4"><span>Phaphamau</span> <span className="text-[var(--color-muted)]">~30 min</span></li>
                <li className="flex justify-between gap-4"><span>Naini</span> <span className="text-[var(--color-muted)]">~50 min</span></li>
                <li className="flex justify-between gap-4"><span>Soraon Centre</span> <span className="text-[var(--color-muted)]">~10 min</span></li>
              </ul>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[var(--color-line)] aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[420px]">
            <iframe
              src={`https://maps.google.com/maps?q=${encodeURIComponent(LOCATION.googleMapsEmbedQuery)}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Royal Resort Prayagraj location map"
            />
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section
        eyebrow="Common Questions"
        title="Everything you wanted to ask"
        intro="If you have a question that is not answered here, WhatsApp us — we usually reply within an hour."
      >
        <FAQ items={homeFaqs} />
      </Section>

      <CTABand
        title="Let's plan the wedding you actually want."
        subtitle="One call. Honest pricing. Walk-through of the venue on a date that suits you."
      />
    </>
  );
}
