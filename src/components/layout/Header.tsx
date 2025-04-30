
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
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-hotel-blue">{COMPANY_INFO.name}</span>
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden rounded-md p-2 text-hotel-blue"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
        
        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => (
            <Link 
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-foreground ${
                isActive(item.path) ? 'text-foreground' : 'text-foreground/70'
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Button variant="outline" size="sm" asChild>
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </nav>
      </div>
      
      {/* Mobile navigation */}
      {isNavOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background h-full w-full">
          <div className="container py-8">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="flex items-center space-x-2" onClick={() => setIsNavOpen(false)}>
                <span className="text-xl font-bold text-hotel-blue">{COMPANY_INFO.name}</span>
              </Link>
              <button 
                className="rounded-md p-2 text-hotel-blue"
                onClick={() => setIsNavOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`py-2 text-lg font-medium ${
                    isActive(item.path) ? 'text-hotel-blue' : 'text-foreground'
                  }`}
                  onClick={() => setIsNavOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button 
                className="mt-4 w-full bg-hotel-blue hover:bg-hotel-blue/90" 
                asChild
              >
                <Link to="/contact" onClick={() => setIsNavOpen(false)}>
                  Nous contacter
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
