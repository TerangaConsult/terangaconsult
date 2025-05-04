import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-hotel-navy/80 via-hotel-navy/60 to-hotel-navy/20 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ 
          backgroundImage: "url('/hero-senegal-hotel.jpg')",
          backgroundPosition: 'center 60%'
        }}
        aria-hidden="true"
      ></div>
      <div className="container relative z-20 py-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-sans font-extrabold tracking-tight text-white mb-6">
            Révélez le potentiel de votre hôtel au Sénégal
          </h1>
          <p className="text-lg md:text-2xl text-white mb-10 font-sans">
            Consulting digital premium pour établissements d'exception
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Button size="lg" variant="outline" asChild className="font-sans text-lg rounded-lg border-2 border-hotel-gold text-hotel-gold bg-transparent hover:bg-hotel-gold/10 hover:text-hotel-gold transition-all duration-200 shadow-none px-8 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-hotel-gold">
              <Link to="/contact" aria-label="Obtenez votre audit gratuit">
                Obtenez votre audit gratuit
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="font-sans text-lg rounded-lg border-2 border-hotel-navy text-white bg-transparent hover:bg-hotel-navy/10 hover:text-white transition-all duration-200 shadow-none px-8 py-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-hotel-navy">
              <Link to="/contact" aria-label="Contactez-nous">Contactez-nous</Link>
            </Button>
          </div>
          <div className="mt-12 inline-block bg-hotel-navy/20 text-white font-semibold px-8 py-3 rounded-xl text-base md:text-lg" role="status" aria-live="polite">
            +150% de réservations directes pour nos clients
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
