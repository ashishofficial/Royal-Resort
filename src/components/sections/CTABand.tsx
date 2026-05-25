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
          ? "bg-[var(--color-brand)] text-white"
          : "bg-[var(--color-cream)] text-[var(--color-ink)]"
      }
    >
      <Container className="py-14 lg:py-20">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-8 items-center">
          <div>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl leading-tight ${isBrand ? "text-white" : ""}`}
            >
              {title}
            </h2>
            <p
              className={`mt-4 text-lg ${isBrand ? "text-white/85" : "text-[var(--color-ink-soft)]"}`}
            >
              {subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
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
