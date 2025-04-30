
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border/40 bg-hotel-darkBlue text-white">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="inline-block font-semibold text-2xl mb-4 text-white">
              HotelierConsulting
            </Link>
            <p className="text-sm text-white/70 mb-6">
              Transformez votre établissement, amplifiez votre visibilité
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-hotel-gold mr-3" />
                <span className="text-white/80">+221 77 123 45 67</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-hotel-gold mr-3" />
                <span className="text-white/80">contact@hotelconsulting.sn</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-hotel-gold mr-3 mt-1 flex-shrink-0" />
                <span className="text-white/80">123 Rue du Commerce, Dakar, Sénégal</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-white transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-white/70 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/temoignages" className="text-white/70 hover:text-white transition-colors">
                  Témoignages
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-white/70 hover:text-white transition-colors">
                  À propos
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services#landing-page" className="text-white/70 hover:text-white transition-colors">
                  Création de site web
                </Link>
              </li>
              <li>
                <Link to="/services#booking" className="text-white/70 hover:text-white transition-colors">
                  Système de réservation
                </Link>
              </li>
              <li>
                <Link to="/services#seo" className="text-white/70 hover:text-white transition-colors">
                  Optimisation SEO
                </Link>
              </li>
              <li>
                <Link to="/services#google" className="text-white/70 hover:text-white transition-colors">
                  Présence Google
                </Link>
              </li>
              <li>
                <Link to="/services#formation" className="text-white/70 hover:text-white transition-colors">
                  Formation
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Légal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/mentions-legales" className="text-white/70 hover:text-white transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/confidentialite" className="text-white/70 hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/cgv" className="text-white/70 hover:text-white transition-colors">
                  Conditions générales
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="container py-4 border-t border-white/10">
        <p className="text-sm text-center text-white/60">
          © {currentYear} HotelierConsulting. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
