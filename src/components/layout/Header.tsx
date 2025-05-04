import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/constants';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navigation = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'À propos', path: '/a-propos' },
  ];

  return (
    <header className="border-b border-hotel-brown-light bg-hotel-brown">
      <div className="container flex h-14 items-center justify-between px-2 md:px-8">
        <Link to="/" className="flex items-center">
          <span className="text-lg md:text-xl font-semibold text-hotel-brown-light tracking-tight">{COMPANY_INFO.name}</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          {navigation.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className={`relative text-base font-sans font-medium px-1 py-0.5 transition-colors duration-200
                ${isActive(item.path)
                  ? 'text-hotel-brown-light after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-hotel-brown-light after:rounded-full after:opacity-90 after:scale-x-100 after:transition-transform'
                  : 'text-hotel-brown-light hover:text-hotel-brown-light after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-hotel-brown-light after:rounded-full after:opacity-0 hover:after:opacity-80 hover:after:scale-x-100 after:transition-all'}
              `}
            >
              {item.name}
            </Link>
          ))}
          <Button variant="outline" className="ml-6 border border-hotel-brown-light text-hotel-brown-light font-sans text-sm rounded-lg px-5 py-1.5 bg-transparent hover:bg-hotel-brown-light hover:text-hotel-brown transition-all duration-200 shadow-none" asChild>
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </nav>
        <button 
          className="md:hidden rounded p-1 text-hotel-brown-light bg-hotel-brown/80"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? (
            <X className="h-6 w-6 stroke-1" />
          ) : (
            <Menu className="h-6 w-6 stroke-1" />
          )}
        </button>
      </div>
      {isNavOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-hotel-brown">
          <div className="flex items-center justify-between px-6 py-4 border-b border-hotel-brown-light">
            <Link to="/" className="flex items-center" onClick={() => setIsNavOpen(false)}>
              <span className="text-lg font-semibold text-hotel-brown-light tracking-tight"> {COMPANY_INFO.name}</span>
            </Link>
            <button 
              className="rounded p-1" style={{color:'#fffcea', background:'rgba(255,252,234,0.08)'}} onClick={() => setIsNavOpen(false)}>
              <X className="h-6 w-6 stroke-1" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-lg font-sans font-medium px-1 py-1 transition-colors duration-200
                  ${isActive(item.path)
                    ? 'text-hotel-brown-light after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-hotel-brown-light after:rounded-full after:opacity-90 after:scale-x-100 after:transition-transform'
                    : 'text-hotel-brown-light hover:text-hotel-brown-light after:absolute after:left-0 after:right-0 after:-bottom-0.5 after:h-0.5 after:bg-hotel-brown-light after:rounded-full after:opacity-0 hover:after:opacity-80 hover:after:scale-x-100 after:transition-all'}
                `}
                onClick={() => setIsNavOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button variant="outline" className="mt-8 border border-hotel-brown-light text-hotel-brown-light font-sans text-base rounded-lg px-7 py-2 bg-transparent hover:bg-hotel-brown-light hover:text-hotel-brown transition-all duration-200 shadow-none" asChild>
              <Link to="/contact" onClick={() => setIsNavOpen(false)}>
                Nous contacter
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
