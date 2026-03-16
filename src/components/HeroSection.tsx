import React from 'react';

export const HeroSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold">Aracena Fernando IT</h1>
        <p className="mt-4 text-xl">Fullstack utvikler og AI-arkitekt hos Oslo Politidistrikt</p>
        <a href="/projects" className="mt-8 inline-block bg-primary text-primary-foreground px-6 py-3 rounded-md">
          Se mine prosjekter
        </a>
      </div>
    </section>
  );
};