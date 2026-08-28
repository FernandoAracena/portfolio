import React from 'react';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40 py-3.5">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
          arfeda <span className="text-primary font-black">IT</span>
        </Link>
        
        <div className="flex items-center gap-1 md:gap-2">
          <Link href="/" className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent">
            Hjem
          </Link>
          <Link href="/projects" className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent">
            Prosjekter
          </Link>
          <Link href="/services" className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent">
            Tjenester
          </Link>
          <Link href="/ai-lab" className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent">
            AI-Lab
          </Link>
          <Link href="/about" className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent">
            Om meg
          </Link>
          <Link href="/contact" className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent">
            Kontakt
          </Link>
          
          <a
            href="https://arfedai.no"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-primary bg-primary/10 border border-primary/20 rounded-md hover:bg-primary/20 transition-all"
            title="Besøk mitt AI-selskap for produkter som SpeechToReport"
          >
            <span>arfed AI</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;