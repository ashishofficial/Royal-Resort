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
  Brush,
  Coffee,
  ConciergeBell,
  Flame,
  type LucideIcon,
  ParkingCircle,
  PlugZap,
  Shirt,
  ShowerHead,
  Sparkles,
  Wifi,
} from "@/lib/icons";
import {
  breadcrumbSchema,
  faqSchema,
  hotelSchema,
} from "@/lib/schema";
import { CONTACT, PRICING } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Deluxe AC Rooms in Prayagraj — ₹4,500/Night | Royal Resort Soraon",
  description:
    "Deluxe air-conditioned rooms at Royal Resort Soraon for wedding guests, baraat parties, and families. ₹4,500 per night including attached bath and breakfast on request.",
  alternates: { canonical: "/rooms" },
  openGraph: {
    title: "Deluxe AC Rooms in Prayagraj — Royal Resort Soraon",
    description:
      "On-campus AC rooms at ₹4,500/night for wedding guests and outstation families.",
    url: "/rooms",
    type: "website",
  },
};

const faqs = [
  {
    question: "What is the room tariff at Royal Resort?",
    answer:
      "Deluxe AC rooms are ₹4,500 per night plus 5% GST (total ₹4,725). Tariff is based on double occupancy. Children below 5 stay free; an extra mattress for a third guest is ₹500/night.",
  },
  {
    question: "Do I get rooms free as part of the wedding banquet package?",
    answer:
      "Yes. Two AC rooms are complimentary with the ₹2.5L Royal Banquet Hall wedding package — typically used for the bride and groom on the wedding day. Additional rooms for baraat and outstation guests are bookable at the standard tariff of ₹4,500/night.",
  },
  {
    question: "How many rooms are available for a wedding baraat?",
    answer:
      "We can accommodate small-to-medium baraat parties. Tell us your guest count when you enquire and we will confirm room availability for your dates. For 80–100 outstation guests over a wedding weekend, on-campus accommodation is usually much smoother than coordinating a city hotel.",
  },
  {
    question: "What are the standard check-in and check-out timings?",
    answer:
      "Check-in is from 12:00 noon and check-out by 11:00 AM the next day. Early check-in or late check-out can usually be arranged depending on availability — just request when you book.",
  },
  {
    question: "Is breakfast included in the room tariff?",
    answer:
      "Breakfast is not included in the standard ₹4,500/night tariff but can be added at ₹250 per person for a full North Indian breakfast spread. Tea/coffee in the room is always complimentary.",
  },
  {
    question: "What amenities do the rooms come with?",
    answer:
      "Each deluxe room has central air conditioning, an attached private bathroom with hot water, comfortable bedding, in-room tea/coffee setup, a wardrobe, a dressing area, and complimentary Wi-Fi (signal strength permitting at this location). Power backup is on the whole campus.",
  },
];

const breadcrumbItems = [
  { name: "Home", path: "/" },
  { name: "Rooms", path: "/rooms" },
];

export default function RoomsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbItems)} />
      <JsonLd data={hotelSchema()} />
      <JsonLd data={faqSchema(faqs)} />

      <Breadcrumbs items={breadcrumbItems} />

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0d0d18] via-[#1a1a2a] to-[var(--color-ink)] text-white">
        <Container className="relative py-16 lg:py-24">
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-14 items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs sm:text-sm font-medium uppercase tracking-[0.18em] text-[var(--color-gold-soft)] mb-6">
                Deluxe Rooms
              </p>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
                On-Campus AC Rooms for Wedding Guests &amp; Families
              </h1>
              <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-xl">
                Comfortable air-conditioned deluxe rooms with attached bathrooms on the Royal Resort campus — ideal for baraat parties, outstation family, and couples who would rather stay over than drive back to the city after a function.
              </p>
              <div className="mt-8 flex items-baseline gap-4">
                <span className="font-display text-5xl text-white">
                  ₹{PRICING.deluxeRoomNight.toLocaleString("en-IN")}
                </span>
                <span className="text-white/70">per night · double occupancy</span>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" variant="gold" size="lg">
                  Check Room Availability
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
                label="Deluxe AC Room"
                aspect="4/3"
                imageKey="room"
                priority
                className="shadow-2xl"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* WHO IT'S FOR */}
      <Section
        eyebrow="Who Stays Here"
        title="Built around weddings — open to anyone who needs comfort away from the city"
      >
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="space-y-5 text-[var(--color-ink-soft)] leading-relaxed text-[17px]">
            <p>
              The rooms at Royal Resort exist primarily to support our weddings — so baraat guests, the couple&rsquo;s immediate family, pandit ji, photographers, and outstation relatives all have a place to stay on the same campus as the function. That keeps weddings flowing smoothly: no late-night drives back to the city, no missed muhurat because someone got stuck in traffic, no awkward coordination across multiple hotels.
            </p>
            <p>
              Outside of wedding bookings, the rooms are also a quiet, affordable option for families travelling to Prayagraj for Kumbh, Magh Mela, religious visits to Sangam, business in Soraon and Phaphamau, or anyone who just wants a peaceful overnight stay close to the city without paying city hotel rates.
            </p>
            <p>
              Each room is fully air-conditioned with central AC, has an attached private bathroom with hot water, comfortable bedding, in-room tea/coffee setup, and a dedicated dressing zone — important when guests are getting ready for evening functions.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <PhotoFrame label="Deluxe Room — Bedside" aspect="3/4" imageKey="room" />
            <div className="grid gap-4">
              <PhotoFrame label="Attached Bathroom" aspect="1/1" imageKey="bathroom" />
              <PhotoFrame label="Dressing Area" aspect="1/1" imageKey="dressing" />
            </div>
          </div>
        </div>
      </Section>

      {/* AMENITIES */}
      <Section
        className="bg-[var(--color-cream)]"
        eyebrow="In Every Room"
        title="Standard amenities — across every deluxe room"
      >
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {(
            [
              { Icon: AirVent, label: "Central AC" },
              { Icon: BedDouble, label: "Comfortable bedding" },
              { Icon: ShowerHead, label: "Attached bathroom" },
              { Icon: Flame, label: "Hot water" },
              { Icon: Coffee, label: "Tea/coffee setup" },
              { Icon: Shirt, label: "Wardrobe" },
              { Icon: Sparkles, label: "Dressing area" },
              { Icon: Wifi, label: "Wi-Fi" },
              { Icon: PlugZap, label: "Power backup" },
              { Icon: ParkingCircle, label: "Free parking" },
              { Icon: ConciergeBell, label: "On-call service" },
              { Icon: Brush, label: "Daily housekeeping" },
            ] satisfies Array<{ Icon: LucideIcon; label: string }>
          ).map((a) => (
            <div
              key={a.label}
              className="bg-white rounded-xl p-4 border border-[var(--color-line)] text-center"
            >
              <a.Icon
                size={24}
                strokeWidth={1.6}
                className="mx-auto mb-2 text-[var(--color-brand)]"
                aria-hidden="true"
              />
              <div className="text-sm font-medium text-[var(--color-ink)]">{a.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* TARIFF */}
      <Section
        eyebrow="Tariff"
        title="Simple, transparent room rates"
      >
        <div className="overflow-x-auto rounded-2xl border border-[var(--color-line)] bg-white">
          <table className="w-full text-left">
            <thead className="bg-[var(--color-cream)] text-[var(--color-ink)]">
              <tr>
                <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Room Type</th>
                <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Occupancy</th>
                <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider">Includes</th>
                <th className="px-6 py-4 font-semibold text-sm uppercase tracking-wider text-right">Per Night</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--color-line)]">
              <tr>
                <td className="px-6 py-5">
                  <div className="font-display text-lg text-[var(--color-ink)]">Deluxe AC Room</div>
                  <div className="text-xs text-[var(--color-muted)] mt-1">Standard room</div>
                </td>
                <td className="px-6 py-5 text-[var(--color-ink-soft)]">Double</td>
                <td className="px-6 py-5 text-[var(--color-ink-soft)]">AC, attached bath, tea/coffee</td>
                <td className="px-6 py-5 text-right">
                  <div className="font-display text-xl text-[var(--color-brand)]">₹4,500</div>
                  <div className="text-xs text-[var(--color-muted)]">+ 5% GST</div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-5">
                  <div className="font-display text-lg text-[var(--color-ink)]">Extra mattress</div>
                  <div className="text-xs text-[var(--color-muted)] mt-1">Third guest add-on</div>
                </td>
                <td className="px-6 py-5 text-[var(--color-ink-soft)]">+ 1 guest</td>
                <td className="px-6 py-5 text-[var(--color-ink-soft)]">Mattress, bedding</td>
                <td className="px-6 py-5 text-right">
                  <div className="font-display text-xl text-[var(--color-brand)]">₹500</div>
                  <div className="text-xs text-[var(--color-muted)]">per night</div>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-5">
                  <div className="font-display text-lg text-[var(--color-ink)]">Breakfast</div>
                  <div className="text-xs text-[var(--color-muted)] mt-1">Add-on per person</div>
                </td>
                <td className="px-6 py-5 text-[var(--color-ink-soft)]">Per guest</td>
                <td className="px-6 py-5 text-[var(--color-ink-soft)]">North Indian breakfast</td>
                <td className="px-6 py-5 text-right">
                  <div className="font-display text-xl text-[var(--color-brand)]">₹250</div>
                  <div className="text-xs text-[var(--color-muted)]">per person</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 mt-8 text-sm">
          <div className="bg-white rounded-xl p-5 border border-[var(--color-line)]">
            <div className="font-semibold text-[var(--color-ink)] mb-1">Check-in</div>
            <div className="text-[var(--color-ink-soft)]">From 12:00 noon</div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-[var(--color-line)]">
            <div className="font-semibold text-[var(--color-ink)] mb-1">Check-out</div>
            <div className="text-[var(--color-ink-soft)]">By 11:00 AM</div>
          </div>
          <div className="bg-white rounded-xl p-5 border border-[var(--color-line)]">
            <div className="font-semibold text-[var(--color-ink)] mb-1">Wedding bookings</div>
            <div className="text-[var(--color-ink-soft)]">2 AC rooms included free in the ₹2.5L banquet package</div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section
        className="bg-[var(--color-cream)]"
        eyebrow="Quick Answers"
        title="Rooms — most asked questions"
      >
        <FAQ items={faqs} />
      </Section>

      <CTABand
        title="Reserve rooms for your wedding weekend."
        subtitle="Tell us your dates and headcount — we will hold the rooms you need on the same campus as the function."
      />
    </>
  );
}
