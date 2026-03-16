import { NextResponse } from 'next/server';
import { sendMail } from '@/lib/mail';

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return NextResponse.json({ message: 'Alle felt må fylles ut' }, { status: 400 });
  }

  try {
    await sendMail({
      to: process.env.SMTP_EMAIL as string,
      subject: `Ny melding fra ${name}`,
      text: `
        Navn: ${name}
        E-post: ${email}
        Melding:
        ${message}
      `,
    });
    return NextResponse.json({ message: 'Melding sendt!' }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: 'Kunne ikke sende melding' }, { status: 500 });
  }
}
