import type { Metadata } from "next";
import { CONTROLLER } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Personvernerklæring",
  description: "Hvordan arfedait.no behandler personopplysninger: kontaktskjemaet, lagringstid, leverandører og dine rettigheter.",
};

const controller = CONTROLLER.orgNumber
  ? `${CONTROLLER.name} (org.nr. ${CONTROLLER.orgNumber}), ${CONTROLLER.city}`
  : `${CONTROLLER.name}, ${CONTROLLER.city}`;

const Email = () => (
  <a href={`mailto:${CONTROLLER.email}`} className="text-primary underline">
    {CONTROLLER.email}
  </a>
);

export default function PersonvernPage() {
  return (
    <div className="container mx-auto max-w-3xl py-12 px-4 space-y-8">
      <div>
        <h1 className="text-4xl font-bold">Personvernerklæring</h1>
        <p className="mt-2 text-sm text-muted-foreground">Sist oppdatert: {CONTROLLER.updated}</p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Hvem som er ansvarlig</h2>
        <p className="leading-relaxed text-foreground/90">
          {controller} er behandlingsansvarlig for personopplysningene som samles inn på arfedait.no. Spørsmål om
          personvern sender du til <Email />.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Kort fortalt</h2>
        <p className="leading-relaxed text-foreground/90">
          Nettstedet bruker ingen analyseverktøy, ingen informasjonskapsler for sporing og henter ikke innhold fra
          tredjeparter. Vi samler bare inn det du selv skriver i et kontaktskjema.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Kontaktskjemaene</h2>
        <p className="leading-relaxed text-foreground/90">
          Skjemaet på arfedait.no tar imot navn, e-postadresse og melding. Den samme tjenesten tar også imot
          skjemaet på arfedai.no, med virksomhet, avdeling, land, ønskede løsninger og driftsmodell i tillegg.
        </p>
        <p className="leading-relaxed text-foreground/90">
          Formålet er å svare på henvendelsen og eventuelt følge den opp. Grunnlaget er vår berettigede interesse i å
          svare deg (GDPR art. 6 nr. 1 bokstav f), og når henvendelsen gjelder et mulig oppdrag, tiltak før en avtale
          inngås (art. 6 nr. 1 bokstav b).
        </p>
        <p className="leading-relaxed text-foreground/90">
          Henvendelsen sendes som e-post gjennom Google (Gmail). For å stoppe misbruk brukes IP-adressen din kort i
          minnet til å begrense antall innsendinger; den lagres ikke.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Hvor lenge vi lagrer</h2>
        <p className="leading-relaxed text-foreground/90">
          Henvendelser slettes senest 12 måneder etter siste kontakt, med mindre de fører til et kundeforhold eller vi
          må oppbevare dem etter lov, for eksempel bokføringsloven.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Leverandører og overføring utenfor EØS</h2>
        <p className="leading-relaxed text-foreground/90">
          arfedait.no driftes hos Vercel Inc., og e-posten går gjennom Google LLC. Begge er selskaper i USA;
          overføringen bygger på EUs rammeverk for personvern mellom EU og USA (Data Privacy Framework) og EUs
          standardkontrakter. Vertsleverandøren kan føre tekniske logger, for eksempel IP-adresse og tidspunkt, for
          drift og sikkerhet.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Informasjonskapsler</h2>
        <p className="leading-relaxed text-foreground/90">
          Nettstedet setter ingen informasjonskapsler. Fram til 25.11.2026 kunne det bruke Google Analytics etter
          samtykke; et lite skript på siden sletter nå informasjonskapsler som kan ligge igjen fra den tiden.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Dine rettigheter</h2>
        <p className="leading-relaxed text-foreground/90">
          Du kan be om innsyn i, retting eller sletting av opplysningene om deg, be om begrenset behandling,
          protestere mot behandlingen og be om å få opplysningene utlevert. Skriv til <Email />; vi svarer innen én
          måned.
        </p>
        <p className="leading-relaxed text-foreground/90">
          Mener du at vi behandler personopplysninger i strid med regelverket, kan du klage til Datatilsynet
          (datatilsynet.no).
        </p>
      </section>
    </div>
  );
}
