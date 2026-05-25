import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT } from "@/lib/site";

export function CTABand({
  title = "Ready to book Prayagraj's most loved wedding venue?",
  subtitle = "Talk to our team for available dates, custom packages, and a personal tour.",
  variant = "brand",
}: {
  title?: string;
  subtitle?: string;
  variant?: "brand" | "cream";
}) {
  const isBrand = variant === "brand";
  return (
    <section
      className={
        isBrand
          ? "relative overflow-hidden bg-[var(--color-brand)] text-white"
          : "bg-[var(--color-cream)] text-[var(--color-ink)]"
      }
    >
      {isBrand && (
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(216,182,117,0.4) 0, transparent 50%), radial-gradient(circle at 80% 70%, rgba(47,106,85,0.6) 0, transparent 50%)",
          }}
        />
      )}
      <Container className="relative py-20 lg:py-28">
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 items-end">
          <div>
            <h2
              className={`font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05] ${isBrand ? "text-white" : "text-[var(--color-ink)]"}`}
            >
              {title}
            </h2>
            <p
              className={`mt-6 text-lg leading-relaxed max-w-xl ${isBrand ? "text-white/80" : "text-[var(--color-ink-soft)]"}`}
            >
              {subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end lg:items-end">
            <Button
              href={`tel:${CONTACT.phonePrimary}`}
              variant={isBrand ? "gold" : "primary"}
              size="lg"
            >
              Call {CONTACT.phonePrimaryDisplay}
            </Button>
            <Button
              href={`https://wa.me/${CONTACT.whatsapp}?text=Hi%2C%20I%20want%20to%20enquire%20about%20Royal%20Resort%20Prayagraj`}
              variant={isBrand ? "outline-light" : "secondary"}
              size="lg"
            >
              WhatsApp Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
