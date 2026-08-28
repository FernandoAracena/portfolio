import React from 'react';
import Link from 'next/link';
import { ExternalLink, Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/40 border-t border-border/40 py-10 mt-16 text-sm text-muted-foreground">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pb-8 border-b border-border/40">
          <div>
            <span className="text-lg font-bold text-foreground">arfeda <span className="text-primary">IT</span></span>
            <p className="text-xs text-muted-foreground mt-1">
              Personlig portfolio og konsulentvirksomhet for Fernando Aracena.
            </p>
          </div>

          <div className="flex items-center gap-4 text-foreground">
            <a
              href="https://github.com/FernandoAracena"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/fernandoaracena"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <Link
              href="/contact"
              className="p-2 rounded-md hover:bg-accent text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Kontakt"
            >
              <Mail className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 text-xs">
          <p>&copy; {new Date().getFullYear()} Fernando Aracena (arfeda IT). Alle rettigheter forbeholdt.</p>
          
          <div className="flex items-center gap-2">
            <span>Søker du programvareprodukter?</span>
            <a
              href="https://arfedai.no"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-primary hover:underline"
            >
              Besøk arfed AI (arfedai.no) <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;