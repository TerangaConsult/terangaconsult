import React from 'react';
import { FaChartLine, FaStar, FaUserGraduate } from 'react-icons/fa';

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary/75 z-10"></div>
      <div className="absolute inset-0 bg-cover bg-center opacity-80" 
            style={{ backgroundImage: "url('/assets/formation_accompagnement.jpg')" }}></div>
      <div className="container mx-auto px-6 md:px-8 relative z-20">
        <h2 className="text-3xl font-bold text-secondary text-center mb-12">
          Nos Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white/10 p-6 rounded-lg border border-secondary/30">
            <div className="text-secondary text-3xl mb-4">
              <FaChartLine />
            </div>
            <h3 className="text-xl font-bold mb-3">Stratégie digitale & commerciale</h3>
            <p className="text-white/80 text-sm mb-4">
              Déployez une stratégie sur-mesure pour booster votre visibilité, votre chiffre d'affaires et votre positionnement sur le marché hôtelier.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-secondary text-lg">•</span>
                <span>Audit digital complet</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary text-lg">•</span>
                <span>Plan d'action personnalisé</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary text-lg">•</span>
                <span>Optimisation des canaux de distribution</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg border border-secondary/30">
            <div className="text-secondary text-3xl mb-4">
              <FaStar />
            </div>
            <h3 className="text-xl font-bold mb-3">Optimisation de la e-réputation</h3>
            <p className="text-white/80 text-sm mb-4">
              Maîtrisez votre image en ligne, améliorez vos avis clients et développez une réputation digitale solide et durable.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-secondary text-lg">•</span>
                <span>Gestion proactive des avis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary text-lg">•</span>
                <span>Veille et analyse de la réputation</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary text-lg">•</span>
                <span>Formation à la gestion de crise</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white/10 p-6 rounded-lg border border-secondary/30">
            <div className="text-secondary text-3xl mb-4">
              <FaUserGraduate />
            </div>
            <h3 className="text-xl font-bold mb-3">Formation & accompagnement</h3>
            <p className="text-white/80 text-sm mb-4">
              Formez vos équipes aux meilleures pratiques digitales et montez en compétence pour gagner en autonomie.
            </p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <span className="text-secondary text-lg">•</span>
                <span>Ateliers personnalisés</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary text-lg">•</span>
                <span>Support continu</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-secondary text-lg">•</span>
                <span>Transfert de compétences</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
          <a href="#contact" className="bg-secondary text-primary px-8 py-3 rounded-lg inline-block">
            Demander un devis personnalisé
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection; 