
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
    <section className="py-16 md:py-24 bg-hotel-darkBlue text-white">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-center gap-12">
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Pourquoi choisir nos services?</h2>
            <ul className="space-y-4">
              {advantages.map((advantage, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-hotel-gold mr-3 flex-shrink-0 mt-0.5" />
                  <span className="text-lg">{advantage}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="md:w-1/2 bg-hotel-blue/30 p-8 rounded-xl">
            <h3 className="text-xl font-semibold mb-4">Notre promesse</h3>
            <p className="mb-4">
              Nous comprenons les défis spécifiques auxquels font face les établissements hôteliers au Sénégal. 
              Notre approche combine expertise locale et meilleures pratiques internationales.
            </p>
            <p>
              Avec nos solutions, vous reprenez le contrôle de votre visibilité en ligne et maximisez vos revenus 
              en réduisant votre dépendance aux plateformes de réservation externes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
