import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { label: "Accueil", href: "/" },
    { label: "À propos", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Processus", href: "/#process" },
    { label: "Témoignages", href: "/#testimonials" },
  ];

  return (
    <header className="fixed w-full bg-hotel-navy/95 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="logo">
          <Link to="/">
            <img src="/assets/logo.svg" alt="TerangaConsult" className="h-12" />
          </Link>
        </div>
        
        {/* Menu navigation desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.href}
              className="text-white hover:text-hotel-gold transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/#contact" className="bg-hotel-gold text-hotel-navy px-6 py-2 rounded-lg ml-4">
            Contactez-nous
          </Link>
        </nav>
        
        {/* Menu burger pour mobile */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {menuOpen ? 
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> :
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              }
            </svg>
          </button>
        </div>
      </div>
      
      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden bg-hotel-navy/95 py-4 px-4">
          <nav className="flex flex-col space-y-4">
            {navItems.map((item, index) => (
              <Link 
                key={index} 
                to={item.href} 
                className="text-white hover:text-hotel-gold transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link 
              to="/#contact" 
              className="bg-hotel-gold text-hotel-navy px-6 py-2 rounded-lg inline-block text-center"
              onClick={() => setMenuOpen(false)}
            >
              Contactez-nous
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
