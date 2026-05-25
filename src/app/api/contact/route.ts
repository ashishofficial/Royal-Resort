import { NextResponse } from "next/server";

// TODO: Wire this up to Resend / AWS SES / Twilio / Interakt when ready.
// For now this validates input, logs the lead to the server console,
// and returns a success response so the form works end-to-end.

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  eventType?: string;
  eventDate?: string;
  guests?: string;
  rooms?: string;
  message?: string;
};

function isValidPhone(value: string) {
  return /^[+\d][\d\s\-()]{7,18}$/.test(value);
}

export async function POST(request: Request) {
  let data: ContactPayload;
  try {
    data = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { ok: false, message: "Invalid request body." },
      { status: 400 },
    );
  }

  const name = (data.name ?? "").trim();
  const phone = (data.phone ?? "").trim();
  const eventType = (data.eventType ?? "").trim();
  const eventDate = (data.eventDate ?? "").trim();
  const guests = (data.guests ?? "").trim();

  if (!name || name.length < 2) {
    return NextResponse.json(
      { ok: false, message: "Please share your name." },
      { status: 400 },
    );
  }
  if (!phone || !isValidPhone(phone)) {
    return NextResponse.json(
      { ok: false, message: "A valid phone number is required so we can reach you." },
      { status: 400 },
    );
  }
  if (!eventType) {
    return NextResponse.json(
      { ok: false, message: "Please pick an event type." },
      { status: 400 },
    );
  }
  if (!eventDate) {
    return NextResponse.json(
      { ok: false, message: "Please share an approximate event date." },
      { status: 400 },
    );
  }
  if (!guests) {
    return NextResponse.json(
      { ok: false, message: "Please share an expected guest count." },
      { status: 400 },
    );
  }

  // TODO: replace console log with email delivery + CRM webhook
  console.log("[contact-lead]", {
    receivedAt: new Date().toISOString(),
    name,
    phone,
    email: data.email ?? "",
    eventType,
    eventDate,
    guests,
    rooms: data.rooms ?? "",
    message: data.message ?? "",
  });

  return NextResponse.json({ ok: true });
}
