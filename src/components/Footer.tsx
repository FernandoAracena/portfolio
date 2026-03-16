import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-background p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} arfedaIT. Alle rettigheter forbeholdt.</p>
      </div>
    </footer>
  );
};

export default Footer;