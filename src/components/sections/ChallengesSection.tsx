import React from 'react';
import { ShieldCheck } from 'lucide-react';

const ChallengesSection = () => {
  const challenges = [
    "Dépendance aux plateformes de réservation",
    "Visibilité limitée face aux grands établissements",
    "Manque de stratégie digitale cohérente",
    "Difficulté à générer des avis clients positifs",
    "Ressources limitées pour gérer le marketing digital"
  ];

  const solutions = [
    "Stratégie de réservation directe personnalisée",
    "Positionnement local fort et ciblage précis",
    "Plan d'action digital sur-mesure et complet",
    "Gestion proactive de votre e-réputation",
    "Services optimisés adaptés à votre budget"
  ];

  return (
    <section className="py-24 md:py-32 bg-hotel-bg text-hotel-navy">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-start gap-16">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight mb-6">
              Les défis des hôteliers sénégalais
            </h2>
            <p className="text-hotel-navy/70 mb-8">
              Dans un marché dynamique, les établissements hôteliers au Sénégal font face à de nombreux défis dans le domaine digital.
            </p>
            <ul className="space-y-3">
              {challenges.map((challenge, index) => (
                <li
                  key={index}
                  className="flex items-center border-l-4 pl-4 py-2 border-hotel-gold bg-white rounded-r-lg shadow-sm"
                >
                  <span className="text-base text-hotel-navy font-sans">{challenge}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 aspect-video bg-white rounded-lg overflow-hidden shadow-sm border border-hotel-gold/20">
              {/* Emplacement pour photo */}
              <div className="w-full h-full bg-hotel-navy/5 flex items-center justify-center">
                <span className="text-hotel-navy/30">Image illustrative</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight mb-6">
              Nos solutions sur-mesure
            </h2>
            <p className="text-hotel-navy/70 mb-8">
              Nous proposons des approches adaptées pour transformer ces défis en opportunités et vous aider à vous démarquer.
            </p>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li
                  key={index}
                  className="flex items-center p-3 bg-white rounded-lg shadow-sm border border-hotel-gold/30"
                >
                  <ShieldCheck className="h-5 w-5 text-hotel-gold mr-2 flex-shrink-0" aria-hidden="true" />
                  <span className="text-base text-hotel-navy font-sans">{solution}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-6 bg-white rounded-lg border border-hotel-gold/20 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-hotel-navy">Notre approche</h3>
              <p className="text-hotel-navy/70 mb-4">
                Nous travaillons en étroite collaboration avec votre équipe pour comprendre vos besoins spécifiques et développer des solutions adaptées à votre établissement.
              </p>
              <p className="text-hotel-navy/70">
                Chaque stratégie est conçue pour maximiser votre retour sur investissement et renforcer votre présence numérique à long terme.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
