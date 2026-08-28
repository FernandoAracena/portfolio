import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Terminal, ShieldCheck, Cpu } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/50 text-xs md:text-sm text-muted-foreground mb-6">
          <Sparkles className="w-3.5 h-3.5 text-primary" />
          <span>Fullstack Utvikler & AI-Arkitekt • Oslo</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          Fernando Aracena
        </h1>
        
        <p className="mt-4 text-xl md:text-2xl text-muted-foreground font-medium">
          Arkitektur for intelligente, robuste og samfunnskritiske systemer
        </p>

        <p className="mt-6 text-base md:text-lg text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed">
          Spesialisert på autonome multi-agent systemer med LangGraph, offline-first arkitekturer og sikre løsninger for krevende fagmiljøer. Erfaring fra AI4INTERVIEWS ved Oslo politidistrikt og grunnlegger av teknologiselskapet arfed AI.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-medium px-6 py-3 rounded-lg hover:bg-primary/90 transition-all shadow-sm"
          >
            Se mine prosjekter
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/ai-lab"
            className="inline-flex items-center justify-center gap-2 border border-border bg-card text-card-foreground font-medium px-6 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all"
          >
            <Terminal className="w-4 h-4 text-primary" />
            Utforsk AI-Lab
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 border border-border bg-transparent text-muted-foreground font-medium px-6 py-3 rounded-lg hover:bg-accent hover:text-accent-foreground transition-all"
          >
            Kontakt meg
          </Link>
        </div>

        {/* Highlight Highlights */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 text-left pt-10 border-t border-border/60">
          <div className="p-4 rounded-lg bg-card/50 border border-border/50">
            <div className="flex items-center gap-2 font-semibold text-sm mb-1 text-primary">
              <Cpu className="w-4 h-4" />
              <span>Autonome Agenter</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Kompleks orkestrering med LangGraph, Human-in-the-Loop og verktøystøtte.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-card/50 border border-border/50">
            <div className="flex items-center gap-2 font-semibold text-sm mb-1 text-primary">
              <ShieldCheck className="w-4 h-4" />
              <span>Samfunnskritisk IT</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Erfaring fra rettsvesen og politi med fokus på personvern og integritetskontroll.
            </p>
          </div>

          <div className="p-4 rounded-lg bg-card/50 border border-border/50">
            <div className="flex items-center gap-2 font-semibold text-sm mb-1 text-primary">
              <Terminal className="w-4 h-4" />
              <span>Offline-First & Edge</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Kvantiserte AI-modeller på CPU og pålitelig feltdokumentasjon uten nett.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};