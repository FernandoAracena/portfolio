import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold">Kontakt</h1>
        <p className="mt-8 text-lg">
          Har du et prosjekt i tankene, eller ønsker du å diskutere en mulighet? 
        </p>
        <p className="mt-4 text-lg">
          Send en e-post direkte til <a href="mailto:aracenafernando@gmail.com" className="text-primary hover:underline font-medium">aracenafernando@gmail.com</a>.
        </p>
        {/* Skjemaet er deaktivert inntil videre 
        <div className="mt-12 max-w-xl mx-auto">
          <ContactForm />
        </div>
        */}
      </div>
    </main>
  );
}
