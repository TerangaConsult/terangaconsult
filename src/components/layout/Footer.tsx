import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-hotel-navy text-white py-8">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-white/70">
            © {new Date().getFullYear()} TerangaConsult. Tous droits réservés.
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/mentions-legales" className="text-sm text-white/70 hover:text-white">Mentions légales</Link>
            <Link to="/confidentialite" className="text-sm text-white/70 hover:text-white">Politique de confidentialité</Link>
            <Link to="/cgv" className="text-sm text-white/70 hover:text-white">CGV</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
