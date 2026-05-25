"use client";

import { useState, type FormEvent } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.message ?? "Something went wrong. Please try calling us.");
      }
      setStatus("success");
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Unexpected error.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl bg-white border border-[var(--color-line)] p-8 sm:p-10 text-center">
        <div
          aria-hidden="true"
          className="mx-auto h-14 w-14 rounded-full bg-[var(--color-brand)] text-white flex items-center justify-center mb-4"
        >
          <Check size={26} strokeWidth={2.5} />
        </div>
        <h3 className="font-display text-2xl text-[var(--color-ink)] mb-2">
          Thank you. We have got your enquiry.
        </h3>
        <p className="text-[var(--color-ink-soft)]">
          Our team usually replies within an hour during the day. If your event is urgent, please call us directly at +91 93051 10658.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-[var(--color-brand)] font-semibold hover:underline"
        >
          Send another enquiry →
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <Field label="Your name" name="name" required autoComplete="name" />
        <Field
          label="Phone number"
          name="phone"
          type="tel"
          required
          inputMode="tel"
          autoComplete="tel"
          placeholder="+91"
        />
      </div>
      <Field
        label="Email (optional)"
        name="email"
        type="email"
        inputMode="email"
        autoComplete="email"
      />
      <div className="grid sm:grid-cols-2 gap-5">
        <SelectField
          label="Event type"
          name="eventType"
          required
          options={[
            "Wedding",
            "Reception",
            "Engagement",
            "Haldi / Mehndi",
            "Birthday",
            "Anniversary",
            "Corporate event",
            "Other",
          ]}
        />
        <Field
          label="Event date (approx.)"
          name="eventDate"
          type="date"
          required
        />
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <SelectField
          label="Expected guests"
          name="guests"
          required
          options={[
            "Under 100",
            "100–200",
            "200–350",
            "350–500",
            "500+",
          ]}
        />
        <SelectField
          label="Need rooms?"
          name="rooms"
          options={["Not sure yet", "No", "1–3 rooms", "4–8 rooms", "9+ rooms"]}
        />
      </div>
      <TextAreaField
        label="Any specific requirements? (optional)"
        name="message"
        placeholder="Multi-day function, specific cuisine, decoration theme, etc."
      />
      {status === "error" && (
        <p className="text-sm text-[var(--color-brand)]">{errorMsg}</p>
      )}
      <Button type="submit" size="lg" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
      </Button>
      <p className="text-xs text-[var(--color-muted)]">
        By submitting, you agree to be contacted by our team about your enquiry. We do not share your details.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  ...rest
}: {
  label: string;
  name: string;
  type?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
        {label}
        {rest.required && <span className="text-[var(--color-brand)]"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        {...rest}
        className="w-full h-11 px-4 rounded-lg border border-[var(--color-line)] bg-white text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent transition"
      />
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
  required,
}: {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
        {label}
        {required && <span className="text-[var(--color-brand)]"> *</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="w-full h-11 px-4 rounded-lg border border-[var(--color-line)] bg-white text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent transition"
      >
        <option value="" disabled>Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}

function TextAreaField({
  label,
  name,
  ...rest
}: {
  label: string;
  name: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block">
      <span className="block text-sm font-medium text-[var(--color-ink)] mb-1.5">
        {label}
      </span>
      <textarea
        name={name}
        rows={4}
        {...rest}
        className="w-full px-4 py-3 rounded-lg border border-[var(--color-line)] bg-white text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-brand)] focus:border-transparent transition resize-y"
      />
    </label>
  );
}
