import React from 'react';
import { Briefcase, Star, Award, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const services = [
    {
      title: "Stratégie digitale hôtelière",
      description: "Audit de votre présence en ligne et plan d'action stratégique pour améliorer votre visibilité.",
      icon: <Briefcase />,
      link: "/services#strategie"
    },
    {
      title: "Optimisation des avis clients",
      description: "Gestion de votre e-réputation et stratégies pour obtenir des avis positifs authentiques.",
      icon: <Star />,
      link: "/services#reputation"
    },
    {
      title: "Formation du personnel",
      description: "Ateliers personnalisés pour développer les compétences digitales de votre équipe.",
      icon: <GraduationCap />,
      link: "/services#formation"
    },
    {
      title: "Audit qualité",
      description: "Évaluation complète de votre établissement selon les standards internationaux.",
      icon: <Award />,
      link: "/services#audit"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight mb-3 text-hotel-navy">
            Nos services pour transformer votre présence numérique
          </h2>
          <p className="text-hotel-navy/60 md:w-2/3 mx-auto text-base">
            Des solutions complètes adaptées aux besoins spécifiques des établissements hôteliers au Sénégal.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              tabIndex={0}
              aria-label={service.title}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl border shadow-sm transition-shadow hover:shadow-md"
              style={{borderColor:'#dfe9ff'}}
            >
              <div className="mb-3" aria-hidden="true">
                {React.cloneElement(service.icon, { className: 'h-7 w-7', style: {color:'#dfe9ff'} })}
              </div>
              <h3 className="font-sans font-medium text-base mb-1 text-hotel-navy">{service.title}</h3>
              <p className="text-sm text-hotel-navy/60 mb-3 font-sans">{service.description}</p>
              
              <Link 
                to={service.link} 
                className="mt-auto flex items-center text-sm text-hotel-gold hover:text-hotel-navy transition-colors"
              >
                En savoir plus <ArrowRight className="ml-1 h-3 w-3" />
              </Link>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link 
            to="/services" 
            className="inline-flex items-center px-6 py-3 bg-hotel-navy text-white rounded-lg hover:bg-hotel-navy/90 transition-colors"
          >
            Tous nos services <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
