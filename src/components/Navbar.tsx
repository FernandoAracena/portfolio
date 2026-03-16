import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-background p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Fernando Aracena</Link>
        <div>
          <Link href="/" className="p-2">Hjem</Link>
          <Link href="/projects" className="p-2">Prosjekter</Link>
          <Link href="/services" className="p-2">Tjenester</Link>
          <Link href="/ai-lab" className="p-2">AI-Lab</Link>
          <Link href="/about" className="p-2">Om meg</Link>
          <Link href="/contact" className="p-2">Kontakt</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;