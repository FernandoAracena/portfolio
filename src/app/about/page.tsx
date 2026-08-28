import Link from 'next/link';
import { Mail, ArrowRight, ShieldCheck, Terminal, Cpu, Layers } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="border-b border-border/60 pb-8 mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">Om meg</h1>
          <p className="mt-3 text-xl text-muted-foreground">
            Fernando Aracena — Fullstack Utvikler & AI-Arkitekt basert i Oslo.
          </p>
        </div>

        <div className="space-y-6 text-lg leading-relaxed text-foreground/90">
          <p>
            Jeg er en erfaren fullstack-utvikler og AI-arkitekt med spesialisering innen autonome multi-agent systemer, sikre arkitekturer og robuste feltløsninger for krevende miljøer.
          </p>
          
          <p>
            Gjennom mitt arbeid i <strong>AI4INTERVIEWS ved Oslo Politidistrikt (OPD)</strong> har jeg designet og utviklet samfunnskritiske verktøy som <em>CSI Assistant Ecosystem</em> og bidratt til løsninger som <em>Skriber</em>. Min kjernekompetanse ligger i å koble sammen moderne web- og mobilteknologi med avansert AI-orkestrering (LangGraph), hybrid-RAG og offline-first prinsipper.
          </p>

          <p>
            I tillegg til min konsulent- og utviklervirksomhet gjennom <strong>arfeda IT</strong>, er jeg grunnlegger av teknologiselskapet <strong>arfed AI</strong>, hvor vi videreutvikler kommersielle AI-produkter som <em>SpeechToReport</em>.
          </p>
        </div>

        {/* Core Competencies */}
        <div className="mt-12 pt-8 border-t border-border/60">
          <h2 className="text-2xl font-bold mb-6">Kjernekompetanse</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-5 rounded-lg bg-card border border-border/50">
              <div className="flex items-center gap-3 font-semibold mb-2 text-primary">
                <Cpu className="w-5 h-5" />
                <h3>AI & Agent-orkestrering</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                LangGraph, Multi-Agent systemer, Human-in-the-Loop (HITL), Hybrid-RAG og lokal int8 CPU-inferens med faster-whisper.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-card border border-border/50">
              <div className="flex items-center gap-3 font-semibold mb-2 text-primary">
                <Layers className="w-5 h-5" />
                <h3>Fullstack & Mobil</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Next.js, React, TypeScript, Python (FastAPI), Expo / React Native, Angular og Kotlin WebView bridges.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-card border border-border/50">
              <div className="flex items-center gap-3 font-semibold mb-2 text-primary">
                <Terminal className="w-5 h-5" />
                <h3>Offline-First & Feltarbeid</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Lokal lagring (SQLite), robust bakgrunnsopptak, kryptografisk integritet (SHA-256) og synkronisering.
              </p>
            </div>

            <div className="p-5 rounded-lg bg-card border border-border/50">
              <div className="flex items-center gap-3 font-semibold mb-2 text-primary">
                <ShieldCheck className="w-5 h-5" />
                <h3>Sikkerhet & Personvern</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Arkitektur for sensitive data i offentlig og privat sektor, on-premise routing og audit-logging.
              </p>
            </div>
          </div>
        </div>

        {/* Contact & Collaboration */}
        <div className="mt-12 p-8 rounded-xl bg-card border border-border/60 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-2xl font-bold mb-2">Klar for en prat?</h2>
            <p className="text-sm text-muted-foreground max-w-md">
              Ta gjerne kontakt dersom du ønsker rådgivning innen AI-arkitektur, bistand til et utviklingsprosjekt eller et teknisk samarbeid.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-lg hover:bg-primary/90 transition-all shrink-0"
          >
            <Mail className="w-4 h-4" />
            Send melding
          </Link>
        </div>
      </div>
    </main>
  );
}

