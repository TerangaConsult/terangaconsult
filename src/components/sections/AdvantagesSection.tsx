import React from 'react';
import { CheckCircle } from 'lucide-react';

const AdvantagesSection = () => {
  const advantages = [
    "Expertise spécifique au marché hôtelier sénégalais",
    "Solutions adaptées à votre budget et vos besoins",
    "Résultats mesurables et concrets",
    "Accompagnement personnalisé et suivi régulier",
    "Retour sur investissement rapide"
  ];

  return (
    <section className="py-24 md:py-32 bg-hotel-navy text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center gap-16">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight mb-6 text-white">
              Pourquoi choisir nos services ?
            </h2>
            <ul className="space-y-3">
              {advantages.map((advantage, index) => (
                <li
                  key={index}
                  tabIndex={0}
                  aria-label={advantage}
                  className="flex items-center border border-hotel-gold/60 rounded-lg p-3 bg-transparent shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-hotel-gold hover:border-hotel-gold/90 transition-colors"
                >
                  <CheckCircle className="h-5 w-5 text-hotel-gold mr-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-base text-white font-sans">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 bg-hotel-navy/60 rounded-xl p-8 border border-hotel-gold/30">
            <h3 className="text-xl font-semibold mb-4 text-hotel-gold">Nos engagements</h3>
            <p className="text-white/90 mb-4">
              Nous nous engageons à fournir un service personnalisé et des solutions concrètes adaptées aux défis spécifiques de votre établissement.
            </p>
            <p className="text-white/90">
              Notre équipe d'experts combine des compétences locales et internationales pour vous offrir le meilleur de l'innovation hôtelière.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
