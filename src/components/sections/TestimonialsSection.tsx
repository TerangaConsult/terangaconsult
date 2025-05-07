import React from 'react';
import { FaStar } from 'react-icons/fa';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-hotel-gold/90 text-hotel-navy">
      <div className="container mx-auto px-6 md:px-8">
        <h2 className="text-3xl font-bold text-hotel-navy text-center mb-12">
          Ce que nos clients disent
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg border border-hotel-navy/10 shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img src="/assets/martin.jpg" alt="Martin Diatta" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold text-hotel-navy">Martin Diatta</div>
                <div className="text-hotel-navy/70 text-sm">Directeur, Hôtel Le Baobab</div>
              </div>
            </div>
            <p className="italic mb-4 text-hotel-navy/80">
              "Une collaboration fructueuse qui a transformé notre visibilité en ligne. Notre taux d'occupation a bondi de 32% dès le premier trimestre."
            </p>
            <div className="text-hotel-gold">
              <FaStar className="inline" />
              <FaStar className="inline" />
              <FaStar className="inline" />
              <FaStar className="inline" />
              <FaStar className="inline" />
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border border-hotel-navy/10 shadow-md">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <img src="/assets/awa.jpg" alt="Awa Seck" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="font-bold text-hotel-navy">Awa Seck</div>
                <div className="text-hotel-navy/70 text-sm">Responsable commercial, Villa Teranga</div>
              </div>
            </div>
            <p className="italic mb-4 text-hotel-navy/80">
              "L'audit réalisé nous a permis d'identifier précisément nos points faibles et de mettre en place des actions correctives efficaces."
            </p>
            <div className="text-hotel-gold">
              <FaStar className="inline" />
              <FaStar className="inline" />
              <FaStar className="inline" />
              <FaStar className="inline" />
              <FaStar className="inline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 