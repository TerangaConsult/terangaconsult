
import React from 'react';

const ResultsSection = () => {
  const results = [
    {
      value: "+150%",
      label: "de réservations directes en moyenne",
      color: "from-hotel-blue to-hotel-lightBlue"
    },
    {
      value: "+85%",
      label: "de visibilité sur Google",
      color: "from-hotel-gold to-hotel-cream"
    },
    {
      value: "+65%",
      label: "de chiffre d'affaires",
      color: "from-hotel-blue to-hotel-lightBlue"
    },
    {
      value: "4-6",
      label: "semaines de mise en place",
      color: "from-hotel-gold to-hotel-cream"
    }
  ];

  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Des résultats concrets pour nos clients
          </h2>
          <p className="text-muted-foreground md:w-2/3 mx-auto">
            Voici ce que nos clients ont obtenu en moyenne après avoir mis en place nos solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((result, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br bg-white rounded-lg shadow-md border border-border/50 p-8 text-center hover:shadow-lg transition-all"
            >
              <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${result.color} bg-clip-text text-transparent`}>
                {result.value}
              </div>
              <p className="text-muted-foreground">{result.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
