
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-hotel-blue">HotelierConsulting</span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
            Accueil
          </Link>
          <Link to="/services" className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
            Services
          </Link>
          <Link to="/portfolio" className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
            Portfolio
          </Link>
          <Link to="/temoignages" className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
            Témoignages
          </Link>
          <Link to="/a-propos" className="text-sm font-medium text-foreground/70 transition-colors hover:text-foreground">
            À propos
          </Link>
          <Button variant="outline" size="sm" asChild>
            <Link to="/contact">Nous contacter</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
