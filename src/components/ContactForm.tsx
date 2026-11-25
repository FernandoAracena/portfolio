"use client";

import React, { useState } from 'react';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  // Hidden from people; form-filling bots write in it and the server then sends nothing.
  const [website, setWebsite] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Sender...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message, website }),
    });

    const data = await res.json().catch(() => ({ message: 'Kunne ikke sende melding' }));

    if (res.ok) {
      setStatus('Melding sendt!');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus(`Feil: ${data.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium">Navn</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-input border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">E-post</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full px-3 py-2 bg-input border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium">Melding</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          rows={4}
          className="mt-1 block w-full px-3 py-2 bg-input border border-border rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
        />
      </div>
      <div aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
        <label htmlFor="website">Ikke fyll ut dette feltet</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <button type="submit" className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-md">
        Send melding
      </button>
      <p className="text-xs text-muted-foreground">
        Opplysningene brukes bare til å svare på henvendelsen.{' '}
        <a href="/personvern" className="underline">Les personvernerklæringen</a>.
      </p>
      {status && <p className="mt-4 text-center">{status}</p>}
    </form>
  );
};