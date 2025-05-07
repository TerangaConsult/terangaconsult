import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-hotel-navy text-white py-8">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/70">
            © 2024 TerangaConsult. Tous droits réservés.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="/mentions-legales" className="text-sm text-white/70 hover:text-white">Mentions légales</a>
            <a href="/confidentialite" className="text-sm text-white/70 hover:text-white">Politique de confidentialité</a>
            <a href="/cgv" className="text-sm text-white/70 hover:text-white">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 