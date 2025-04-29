
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40 bg-muted/40">
      <div className="container py-8 md:py-12 flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0">
          <Link to="/" className="font-semibold text-foreground">
            HotelierConsulting
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">
            Solutions de conseil pour l'industrie hôtelière
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:gap-16">
          <div>
            <h3 className="text-sm font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold mb-3">Légal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/mentions-legales" className="text-muted-foreground hover:text-foreground transition-colors">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container py-4 border-t border-border/40">
        <p className="text-sm text-center text-muted-foreground">
          © {currentYear} HotelierConsulting. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
