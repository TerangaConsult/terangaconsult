
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
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Notre méthode en 4 étapes
          </h2>
          <p className="text-muted-foreground md:w-2/3 mx-auto">
            Une approche structurée pour assurer des résultats optimaux.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-white rounded-lg shadow-md border border-border/50 p-8 hover:shadow-lg transition-all"
            >
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-hotel-blue flex items-center justify-center text-white font-bold text-lg">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold mt-4 mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
