
import React from 'react';
import { Globe, Search, CheckCircle, Award, BarChart2, Settings } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="h-10 w-10 text-hotel-blue" />,
      title: "Création de landing page optimisée",
      description: "Sites web modernes, rapides et optimisés pour les conversions"
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-hotel-blue" />,
      title: "Système de réservation en ligne",
      description: "Solution simple et efficace pour vos clients"
    },
    {
      icon: <Search className="h-10 w-10 text-hotel-blue" />,
      title: "Optimisation SEO locale",
      description: "Positionnez-vous en tête des recherches locales"
    },
    {
      icon: <Award className="h-10 w-10 text-hotel-blue" />,
      title: "Gestion de la présence Google",
      description: "Fiche Google My Business optimisée et suivi des avis"
    },
    {
      icon: <BarChart2 className="h-10 w-10 text-hotel-blue" />,
      title: "Stratégie de contenu",
      description: "Photos, descriptions et contenus authentiques qui valorisent votre établissement"
    },
    {
      icon: <Settings className="h-10 w-10 text-hotel-blue" />,
      title: "Formation du personnel",
      description: "Maîtrise des outils numériques pour pérenniser les résultats"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Nos services pour transformer votre présence numérique
          </h2>
          <p className="text-muted-foreground md:w-2/3 mx-auto">
            Des solutions complètes adaptées aux besoins spécifiques des établissements hôteliers au Sénégal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-y-12">
          {services.map((service, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6">
              <div className="rounded-full bg-muted p-4 mb-4">
                {service.icon}
              </div>
              <h3 className="font-semibold text-xl mb-2">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
