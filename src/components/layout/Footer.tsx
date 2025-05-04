import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '@/lib/constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t-2 border-gray-200 bg-gray-100 text-gray-700">
      <div className="container py-14 md:py-20 mx-auto md:ml-auto text-center md:text-right">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
          <div className="md:col-span-1 animate-fade-in-up">
            <Link to="/" className="inline-block font-serif text-3xl mb-4 text-gray-700 tracking-tight">
              {COMPANY_INFO.name}
            </Link>
            <p className="text-base mb-6 font-light italic animate-fade-in-up delay-100 text-gray-700">
              Transformez votre établissement, amplifiez votre visibilité
            </p>
            <div className="space-y-4 animate-fade-in-up delay-200">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-3 text-gray-700" aria-hidden="true" />
                <span className="font-semibold text-gray-700">{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-3 text-gray-700" aria-hidden="true" />
                <span className="font-semibold text-gray-700">{COMPANY_INFO.email}</span>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-gray-700" aria-hidden="true" />
                <span className="font-semibold text-gray-700">{COMPANY_INFO.address}</span>
              </div>
            </div>
          </div>
          
          <div className="animate-fade-in-up delay-100">
            <h3 className="text-lg font-serif mb-4 text-gray-700">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-700 hover:text-gray-900 transition-colors focus-visible:outline-none">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-700 hover:text-gray-900 transition-colors focus-visible:outline-none">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-700 hover:text-gray-900 transition-colors focus-visible:outline-none">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/a-propos" className="text-gray-700 hover:text-gray-900 transition-colors focus-visible:outline-none">
                  À propos
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-700 hover:text-gray-900 transition-colors focus-visible:outline-none">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="animate-fade-in-up delay-200">
            <h3 className="text-lg font-serif mb-4 text-gray-700">Services</h3>
            <ul className="space-y-3">
              {SERVICES.map(service => (
                <li key={service.id}>
                  <Link 
                    to={`/services#${service.id}`} 
                    className="text-gray-700 hover:text-gray-900 transition-colors focus-visible:outline-none"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="animate-fade-in-up delay-300">
            <h3 className="text-lg font-serif mb-4 text-gray-700">Légal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/mentions-legales" className="text-gray-700 hover:text-gray-900 transition-colors focus-visible:outline-none">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link to="/confidentialite" className="text-gray-700 hover:text-gray-900 transition-colors focus-visible:outline-none">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link to="/cgv" className="text-gray-700 hover:text-gray-900 transition-colors focus-visible:outline-none">
                  Conditions générales
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="w-full border-t border-gray-200 animate-fade-in-up delay-400">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 py-5">
          <p className="text-sm font-serif text-center md:text-left text-gray-700">
            © 2025 <span className="font-semibold text-gray-700">TerangaConsult</span>. Tous droits réservés.
          </p>
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a href={COMPANY_INFO.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="rounded-full p-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M18.77,7.46H14.5v-1.9c0-0.9,0.6-1.1,1-1.1h3V0.3h-4.33c-3.28,0-4.46,2.45-4.46,4.06v3.1h-2.7v3.9h2.7v10.64h5.79V11.06h3.29L18.77,7.46z" />
              </svg>
            </a>
            <a href={COMPANY_INFO.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="rounded-full p-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="rounded-full p-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href={COMPANY_INFO.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="rounded-full p-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-white transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.159 1.207 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
