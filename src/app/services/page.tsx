
import { ServiceCard } from "@/components/ServiceCard";

const services = [
  {
    title: "Webutvikling og AI-integrasjon",
    description: "Utvikling av moderne nettsider og webapplikasjoner med Next.js, React og Python – med mulighet for integrasjon av AI-verktøy som tale-til-tekst, dataanalyse og automatisering.",
    image: "/images/WebutviklingogAIintegrasjon.png",
  },
  {
    title: "Systemarkitektur og automasjon",
    description: "Planlegging og bygging av fleksible og sikre systemer som håndterer komplekse arbeidsflyter. Jeg designer hybride sky/on-premise løsninger som kombinerer skalerbarhet med strenge krav til datasikkerhet.",
    image: "/images/Systemarkitekturogautomasjon.png",
  },
  {
    title: "Offline-First Mobilapplikasjoner",
    description: "Utvikling av robuste feltverktøy som fungerer uten internettdekning. Jeg bygger apper med lokal database (IndexedDB/SQLite) og sikker bakgrunnssynkronisering for kritiske operasjoner.",
    image: "/images/WebutviklingogAIintegrasjon.png", // Using a placeholder for now
  },
  {
    title: "Teknologisk rådgivning og opplæring",
    description: "Veiledning innen bruk av kunstig intelligens, dataanalyse og utviklingsmetoder. Jeg tilbyr også opplæring for team som ønsker å utforske AI i praksis.",
    image: "/images/Teknologiskrådgivningogopplæring.png",
  },
];

export default function ServicesPage() {
  return (
    <main>
      <div className="container mx-auto py-12">
        <h1 className="text-4xl font-bold">IT-Tjenester</h1>
        <p className="mt-8 text-lg">
          Jeg tilbyr tjenester som kombinerer webutvikling, kunstig intelligens og teknologisk rådgivning – tilpasset behovene til både små bedrifter og offentlige organisasjoner.
        </p>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.title} title={service.title} description={service.description} image={service.image} />
          ))}
        </div>
        <p className="mt-12 text-center">
          <a href="/contact" className="text-primary hover:underline">
            Vil du vite mer? Ta kontakt for en uforpliktende prat om hvordan jeg kan hjelpe deg med din teknologiske utfordring.
          </a>
        </p>
      </div>
    </main>
  );
}
