import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      number: "1",
      title: "Audit complet",
      description: "Analyse de votre situation actuelle et identification des opportunités"
    },
    {
      number: "2",
      title: "Stratégie personnalisée",
      description: "Élaboration d'un plan d'action adapté à vos besoins et budget"
    },
    {
      number: "3",
      title: "Mise en œuvre",
      description: "Création et optimisation de vos outils numériques"
    },
    {
      number: "4",
      title: "Suivi et optimisation",
      description: "Analyse des résultats et ajustements continus"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight mb-3 text-hotel-navy">
            Notre méthode en 4 étapes
          </h2>
          <p className="text-hotel-navy/60 md:w-2/3 mx-auto text-base">
            Une approche structurée pour assurer des résultats optimaux.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-xl border border-hotel-gold/60 shadow-sm p-7 transition-all duration-200 ease-out hover:scale-101 hover:-translate-y-0.5 hover:shadow-lg hover:border-hotel-gold/80"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-hotel-gold/20 flex items-center justify-center text-hotel-navy font-bold text-lg shadow-sm border border-hotel-gold/60">
                {step.number}
              </div>
              <h3 className="text-base font-sans font-semibold mt-8 mb-2 text-hotel-navy">{step.title}</h3>
              <p className="text-sm text-hotel-navy/60 font-sans">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
