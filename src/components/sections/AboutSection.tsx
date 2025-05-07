import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-hotel-navy mb-6">
            À propos de TerangaConsult
          </h2>
          <p className="text-lg text-hotel-navy/80 mb-8">
            TerangaConsult est le premier cabinet de consulting hôtelier au Sénégal spécialisé en stratégie digitale. 
            Notre mission : révéler le potentiel de votre établissement pour maximiser votre visibilité, 
            vos réservations directes et votre rentabilité.
          </p>
          <p className="text-md text-hotel-navy/70 mb-8 italic">
            « L'hôtellerie de demain sera humaine, innovante et durable. »
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-hotel-navy/5 p-6 rounded-lg">
              <div className="text-3xl font-bold text-hotel-gold">50+</div>
              <div className="text-hotel-navy">Clients satisfaits</div>
            </div>
            <div className="bg-hotel-navy/5 p-6 rounded-lg">
              <div className="text-3xl font-bold text-hotel-gold">30+</div>
              <div className="text-hotel-navy">Hôtels accompagnés</div>
            </div>
            <div className="bg-hotel-navy/5 p-6 rounded-lg">
              <div className="text-3xl font-bold text-hotel-gold">150%</div>
              <div className="text-hotel-navy">Croissance des réservations directes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection; 