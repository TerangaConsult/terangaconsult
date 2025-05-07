import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Navigation items - "Accueil" a été supprimé
  const navItems = [
    { label: "À propos", href: "/#about" },
    { label: "Services", href: "/#services" },
    { label: "Processus", href: "/#process" },
    { label: "Études de Cas", href: "/#case-studies" },
    { label: "Témoignages", href: "/#testimonials" },
  ];

  // Variants pour le drawer
  const drawerVariants = {
    closed: { y: '-100%', opacity: 0 },
    open: { y: 0, opacity: 1, transition: { ease: "easeInOut", duration: 0.3 } },
    exit: { y: '-100%', opacity: 0, transition: { ease: "easeInOut", duration: 0.2 } }
  };

  // Overlay
  const overlayVariants = {
    closed: { opacity: 0 },
    open: { opacity: 0.5, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.2 } }
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (menuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed w-full bg-primary/95 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="logo">
          <Link to="/" onClick={handleLogoClick}>
            <img src="/assets/logo.svg" alt="TerangaConsult" className="h-12" />
          </Link>
        </div>
        
        {/* Menu navigation desktop */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <Link 
              key={index} 
              to={item.href}
              className="text-white hover:text-secondary transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link to="/#contact" className="bg-secondary text-primary px-6 py-2 rounded-lg ml-4">
            Contactez-nous
          </Link>
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
      
      {/* Drawer mobile */}
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
              className="fixed top-0 left-0 w-full bg-primary/95 z-50 shadow-lg flex flex-col"
            >
              <div className="flex justify-between items-center p-4">
                <Link to="/" onClick={handleLogoClick} className="focus:outline-none">
                  <img src="/assets/logo.svg" alt="TerangaConsult" className="h-10" />
                </Link>
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
              <nav className="flex flex-col space-y-4 px-6 mt-4 pb-8">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.href}
                    className="text-white text-lg hover:text-secondary transition-colors"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  to="/#contact"
                  className="bg-secondary text-primary px-6 py-2 rounded-lg inline-block text-center mt-4"
                  onClick={() => setMenuOpen(false)}
                >
                  Contactez-nous
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
