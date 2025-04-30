
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
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Nos réalisations
          </h2>
          <p className="text-muted-foreground md:w-2/3 mx-auto">
            Découvrez comment nous avons transformé la présence en ligne de ces établissements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div key={index} className="group overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-all">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-semibold text-xl">{item.title}</h3>
                </div>
              </div>
              <div className="p-6">
                <div className="font-medium text-hotel-blue mb-4">{item.result}</div>
                <Button variant="outline" size="sm" className="group-hover:bg-hotel-blue group-hover:text-white transition-colors">
                  Voir l'étude de cas
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild className="bg-hotel-blue hover:bg-hotel-blue/90">
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
