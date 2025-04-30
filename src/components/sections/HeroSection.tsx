
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0 bg-gradient-to-r from-hotel-darkBlue/80 to-hotel-blue/70 z-10"></div>
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1500375592092-40eb2168fd21')] bg-cover bg-center"
        style={{ backgroundPosition: 'center 60%' }}
      ></div>
      <div className="container relative z-20 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">
            Boostez la visibilité numérique de votre hôtel au Sénégal
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Solutions sur mesure pour augmenter vos réservations et votre chiffre d'affaires
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-hotel-gold hover:bg-hotel-gold/90 text-hotel-darkBlue font-medium">
              <Link to="/contact">
                Obtenez votre audit gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-white/70 text-white hover:bg-white/10">
              <Link to="/contact">Contactez-nous</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
