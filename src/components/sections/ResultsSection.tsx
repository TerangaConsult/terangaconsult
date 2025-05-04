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
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight mb-3 text-hotel-navy">
            Des résultats concrets pour nos clients
          </h2>
          <p className="text-hotel-navy/60 md:w-2/3 mx-auto text-base">
            Voici ce que nos clients ont obtenu en moyenne après avoir mis en place nos solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {results.map((result, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl border" style={{borderColor:'#dfe9ff', boxShadow:'0 1px 8px #dfe9ff', transition:'all 0.3s'}}
            >
              <div className={`text-4xl md:text-5xl font-sans font-bold mb-2`} style={{color: index % 2 === 0 ? '#1A2341' : '#dfe9ff'}}>
                {result.value}
              </div>
              <p className="text-base text-hotel-navy/60 font-sans">{result.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
