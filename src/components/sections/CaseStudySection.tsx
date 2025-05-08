import React from 'react';

const CaseStudySection = () => {
  return (
    <section id="case-studies" className="py-20 bg-background-alt">
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-3xl font-bold text-primary text-center mb-16">
          Nos Études de Cas
        </h2>
        
        {/* Exemple d'étude de cas */}
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-card overflow-hidden md:flex">
          {/* Image (sera à gauche sur desktop, en haut sur mobile) */}
          <div className="md:w-1/2">
            <img 
              src="/assets/etudedecas.jpg"
              alt="Exemple de site client TerangaConsult" 
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          
          {/* Contenu texte */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-primary mb-3">
              Hôtel Le Clos des papillons : +45% de Réservations Directes
            </h3>
            <p className="text-text-secondary mb-4 text-sm">
              L'Hôtel Le Clos des papillons, un établissement de charme en Petite Côte, souffrait d'une faible visibilité en ligne et d'une forte dépendance aux OTAs.
            </p>
            <p className="text-text-secondary mb-6 text-sm">
              Après un audit complet et la refonte de leur site web axée sur la conversion, couplée à une stratégie SEO locale et une campagne Google Ads ciblée, nous avons observé des résultats significatifs en 6 mois.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <div className="text-2xl font-bold text-secondary">+45%</div>
                <div className="text-text-secondary text-xs">Réservations directes</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">-20%</div>
                <div className="text-text-secondary text-xs">Dépendance aux OTAs</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">+60%</div>
                <div className="text-text-secondary text-xs">Trafic organique</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-secondary">x2.5</div>
                <div className="text-text-secondary text-xs">ROI sur Google Ads</div>
              </div>
            </div>
            <a 
              href="#contact" 
              className="mt-auto bg-secondary text-primary font-medium px-6 py-2 rounded-lg text-center text-sm self-start hover:bg-secondary/90 transition-colors"
            >
              Discutons de votre projet
            </a>
          </div>
        </div>
        {/* Fin de l'exemple d'étude de cas */}
        
      </div>
    </section>
  );
};

export default CaseStudySection; 