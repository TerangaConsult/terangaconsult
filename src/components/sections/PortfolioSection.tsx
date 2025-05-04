import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const PortfolioSection = () => {
  const portfolioItems = [
    {
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
      title: "Auberge du Lac Rose",
      result: "+130% de réservations directes"
    },
    {
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      title: "Hôtel Baobab Resort",
      result: "1ère position sur Google"
    },
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      title: "Lodge Safari Sénégal",
      result: "+45% de taux d'occupation"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight mb-3 text-hotel-navy">
            Nos réalisations
          </h2>
          <p className="text-hotel-navy/60 md:w-2/3 mx-auto text-base">
            Découvrez comment nous avons transformé la présence en ligne de ces établissements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group overflow-hidden rounded-xl border border-hotel-gold/60 shadow-sm bg-white transition-all duration-200">
              <div className="aspect-video relative overflow-hidden rounded-t-xl">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-hotel-navy/60 via-transparent to-transparent rounded-t-xl"></div>
                <div className="absolute top-3 left-3 bg-hotel-gold/90 text-hotel-navy font-medium px-3 py-1.5 rounded-lg text-xs shadow">
                  {item.result}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-sans font-semibold text-base drop-shadow-md">{item.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <Button variant="outline" size="sm" className="font-sans w-full border border-hotel-gold text-hotel-gold rounded-lg bg-transparent hover:bg-hotel-gold/10 hover:text-hotel-gold transition-all duration-200 shadow-none">
                  Voir l'étude de cas
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" className="font-sans text-base border border-hotel-gold text-hotel-gold rounded-lg bg-transparent hover:bg-hotel-gold/10 hover:text-hotel-gold transition-all duration-200 shadow-none px-7 py-2">
            <Link to="/portfolio">
              Voir toutes nos réalisations
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
