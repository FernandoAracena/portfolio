
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold">Kontakt</h1>
        <p className="mt-8 text-lg">
          Har du et prosjekt i tankene, eller ønsker du å diskutere en mulighet? Ta kontakt via skjemaet under.
        </p>
        <div className="mt-12 max-w-xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
