import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail';

// The route sends mail from the owner's Gmail account: without limits anyone could fill the
// inbox and use up the account's daily sending quota. These are the limits.
const MAX_BODY_BYTES = 10_000;
const MAX_NAME = 100;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 5_000;
const EMAIL = /^[^\s@<>"',;]+@[^\s@<>"',;]+\.[^\s@<>"',;]{2,}$/;

// Per address: 3 messages in 10 minutes. For the whole site: 40 a day.
// In memory: on a serverless host each instance counts on its own, so keep the
// platform's own rate limit (or a CAPTCHA) in front of this route as well.
const WINDOW_MS = 10 * 60_000;
const PER_ADDRESS = 3;
const PER_DAY = 40;
const MAX_TRACKED = 5_000;
const recent = new Map<string, number[]>();
let day = '';
let sentToday = 0;

function callerAddress(request: Request): string {
  const hops = (request.headers.get('x-forwarded-for') ?? '')
    .split(',')
    .map((x) => x.trim())
    .filter(Boolean);
  // The last hop is the one the platform's proxy added; earlier ones are written by the caller.
  return hops[hops.length - 1] ?? request.headers.get('x-real-ip') ?? 'unknown';
}

function allowed(address: string, now: number): boolean {
  const today = new Date(now).toISOString().slice(0, 10);
  if (today !== day) {
    day = today;
    sentToday = 0;
  }
  if (sentToday >= PER_DAY) return false;
  const times = (recent.get(address) ?? []).filter((t) => now - t < WINDOW_MS);
  if (times.length >= PER_ADDRESS) {
    recent.set(address, times);
    return false;
  }
  if (!recent.has(address) && recent.size >= MAX_TRACKED) {
    recent.delete(recent.keys().next().value as string);
  }
  times.push(now);
  recent.set(address, times);
  sentToday += 1;
  return true;
}

/** One line of plain text: no line breaks or control characters reach the subject. */
const oneLine = (value: string) => value.replace(/[\u0000-\u001f\u007f]+/g, ' ').trim();

const refuse = (message: string, status: number) => NextResponse.json({ message }, { status });

export async function POST(request: Request) {
  if (!(request.headers.get('content-type') ?? '').toLowerCase().startsWith('application/json')) {
    return refuse('Ugyldig forespørsel', 415);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return refuse('Meldingen er for lang', 413);

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return refuse('Ugyldig forespørsel', 400);
  }
  if (typeof body !== 'object' || body === null) return refuse('Ugyldig forespørsel', 400);
  const { name, email, message, website } = body as Record<string, unknown>;

  // "website" is a field no person sees: a form filler that writes in it gets the usual answer and no mail.
  if (typeof website === 'string' && website.trim()) {
    return NextResponse.json({ message: 'Melding sendt!' }, { status: 200 });
  }

  if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
    return refuse('Alle felt må fylles ut', 400);
  }
  const cleanName = oneLine(name);
  const cleanEmail = oneLine(email);
  const cleanMessage = message.trim();
  if (!cleanName || !cleanEmail || !cleanMessage) return refuse('Alle felt må fylles ut', 400);
  if (cleanName.length > MAX_NAME || cleanEmail.length > MAX_EMAIL || cleanMessage.length > MAX_MESSAGE) {
    return refuse('Meldingen er for lang', 413);
  }
  if (!EMAIL.test(cleanEmail)) return refuse('Ugyldig e-postadresse', 400);

  if (!allowed(callerAddress(request), Date.now())) {
    return NextResponse.json(
      { message: 'For mange meldinger. Prøv igjen senere.' },
      { status: 429, headers: { 'Retry-After': '600' } },
    );
  }

  try {
    await sendMail({
      to: process.env.SMTP_EMAIL as string,
      subject: `Ny melding fra ${cleanName}`,
      text: `Navn: ${cleanName}\nE-post: ${cleanEmail}\nMelding:\n${cleanMessage}\n`,
    });
    return NextResponse.json({ message: 'Melding sendt!' }, { status: 200 });
  } catch {
    // The error is logged in lib/mail.ts; the sender's text is not written to the log here.
    return refuse('Kunne ikke sende melding', 500);
  }
}
