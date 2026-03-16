import React from 'react';

export default function AiLabPage() {
  return (
    <main>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-8">AI-Lab</h1>
        <p className="text-lg mb-12 text-muted-foreground">
          Dette er senteret for min forskning og utvikling (FoU). Mens prosjektsiden viser <em>hva</em> jeg har bygget, viser AI-Laben <em>hvordan</em> jeg løser komplekse tekniske utfordringer – fra agent-orkestrering med LangGraph til optimalisering for edge-enheter.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Agentic Orchestration */}
          <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Agentisk Orkestrering (LangGraph)</h2>
            <p className="mb-4 text-sm">
              Utover enkle chat-modeller bygger jeg autonome agenter som opererer i sykluser for å løse komplekse forespørsler.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li><strong>Multi-Agent Systemer:</strong> Bruk av LangGraph for å styre komplekse tilstander og feilhåndtering mellom flere agenter.</li>
              <li><strong>Proaktiv Compliance:</strong> Agenter som overvåker handlinger i sanntid og gir advarsler ved brudd på protokoller (SOP).</li>
            </ul>
          </div>

          {/* Hybrid RAG */}
          <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Hybrid RAG Arkitektur</h2>
            <p className="mb-4 text-sm">
              En avansert RAG-løsning designet for å møte strenge norske krav til personvern og spesialisert saksbehandling.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li><strong>Tre Moduser:</strong> Implementering av spesialiserte chat-moduser: Dokument-RAG, Faglig Chat, og Autonome Agenter med verktøystøtte.</li>
              <li><strong>Smart Routing:</strong> Sensitiv data behandles lokalt (On-premise), mens generell kunnskap routes til Gemini i skyen.</li>
            </ul>
          </div>

          {/* CPU-Optimized AI */}
          <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-4">CPU-Optimalisert AI</h2>
            <p className="mb-4 text-sm">
              Kjøring av avanserte AI-modeller på standard maskinvare uten behov for dyre GPU-er.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li><strong>Teknologier:</strong> faster-whisper (int8 kvantisering), sentence-transformers.</li>
              <li><strong>Resultat:</strong> Rask transkribering og semantisk søk på vanlige laptoper.</li>
            </ul>
          </div>

          {/* Offline-First Mobile */}
          <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Offline-First Mobile AI</h2>
            <p className="mb-4 text-sm">
              Robust mobilarkitektur for feltarbeid uten internettdekning.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li><strong>Persistens:</strong> SQLite/AsyncStorage for lokal lagring og auto-sync når nettet er tilbake.</li>
              <li><strong>Bakgrunnsopptak:</strong> React Native Background Actions for stabil lydopptak selv om appen minimeres.</li>
            </ul>
          </div>

          {/* Native Bridge */}
          <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-4">Native Hardware Bridge</h2>
            <p className="mb-4 text-sm">
              Kobling mellom web-teknologi og spesialisert hardware som RealWear og JodaPro.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li><strong>Løsning:</strong> Android WebView med <code>@JavascriptInterface</code> bro.</li>
              <li><strong>Funksjon:</strong> Lar web-appen styre kamera, filsystem og stemmestyring på native nivå.</li>      
            </ul>
          </div>

          {/* Take Point */}
          <div className="bg-card p-6 rounded-lg border border-border shadow-sm">
            <h2 className="text-2xl font-bold mb-4">&quot;Take Point&quot; Synkronisering</h2>
            <p className="mb-4 text-sm">
              Proprietær teknologi for kontekstuell dokumentasjon.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground">
              <li><strong>Konsept:</strong> Bilder tatt i felt tidsstemples nøyaktig til sekundet i lydopptaket.</li>
              <li><strong>Verdi:</strong> Lar AI generere rapporter hvor bilder automatisk plasseres i riktig tekstkontekst.</li>
            </ul>
          </div>

        </div>
      </div>
    </main>
  );
}
