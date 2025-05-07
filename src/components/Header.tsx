import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Navigation items
  const navItems = [
    { label: "Accueil", href: "#hero" },
    { label: "À propos", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Processus", href: "#process" },
    { label: "Témoignages", href: "#testimonials" },
  ];

  // Drawer variants
  const drawerVariants = {
    closed: { x: '100%', opacity: 0 },
    open: { x: 0, opacity: 1, transition: { type: 'spring', stiffness: 400, damping: 35 } },
    exit: { x: '100%', opacity: 0, transition: { duration: 0.25 } }
  };

  // Overlay variants
  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 0.5, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  return (
    <header className="fixed w-full bg-hotel-navy/95 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <div className="logo">
          <a href="#hero">
            <img src="/assets/logo.svg" alt="TerangaConsult" className="h-12" />
          </a>
        </div>
        
        {/* Menu navigation desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className="text-white hover:text-hotel-gold transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" className="bg-hotel-gold text-hotel-navy px-6 py-2 rounded-lg ml-4">
            Contactez-nous
          </a>
        </nav>
        
        {/* Menu burger pour mobile */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setMenuOpen(true)}
            className="text-white focus:outline-none"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      
      {/* Menu mobile avec animation drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Overlay */}
            <motion.div
              key="overlay"
              initial="closed"
              animate="open"
              exit="exit"
              variants={overlayVariants}
              className={`fixed inset-0 bg-black z-40 ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
              onClick={() => setMenuOpen(false)}
            />
            {/* Drawer */}
            <motion.div
              key="drawer"
              initial="closed"
              animate="open"
              exit="exit"
              variants={drawerVariants}
              className="fixed top-0 right-0 h-full w-4/5 max-w-xs bg-hotel-navy/95 z-50 shadow-lg flex flex-col"
            >
              <div className="flex justify-between items-center p-4">
                <img src="/assets/logo.svg" alt="TerangaConsult" className="h-10" />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-2xl focus:outline-none"
                  aria-label="Fermer le menu"
                >
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <nav className="flex flex-col space-y-4 px-6 mt-4">
                {navItems.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    className="text-white text-lg hover:text-hotel-gold transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="bg-hotel-gold text-hotel-navy px-6 py-2 rounded-lg inline-block text-center mt-4"
                  onClick={() => setMenuOpen(false)}
                >
                  Contactez-nous
                </a>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header; 