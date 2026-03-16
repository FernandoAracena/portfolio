import nodemailer from 'nodemailer';

interface MailOptions {
  to: string;
  subject: string;
  text: string;
}

export async function sendMail({ to, subject, text }: MailOptions) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    await transport.verify();
  } catch (error) {
    console.error("Failed to verify transport:", error);
    throw new Error("Failed to verify transport");
  }

  try {
    await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      text,
    });
  } catch (error) {
    console.error("Failed to send mail:", error);
    throw new Error("Failed to send mail");
  }
}
