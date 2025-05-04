import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Grâce à leur expertise, notre hôtel a connu une augmentation spectaculaire des réservations directes. Le retour sur investissement a été extrêmement rapide.",
      name: "Marie Diop",
      role: "Directrice",
      hotel: "Auberge du Lac Rose"
    },
    {
      quote: "Notre visibilité en ligne a complètement changé. Nous sommes maintenant en première page de Google et notre taux d'occupation a bondi de 45% en haute saison.",
      name: "Ahmadou Fall",
      role: "Propriétaire",
      hotel: "Hôtel Baobab Resort"
    },
    {
      quote: "L'équipe comprend parfaitement les défis du secteur hôtelier au Sénégal. Leur approche personnalisée a fait toute la différence pour notre établissement.",
      name: "Sophie Mendès",
      role: "Responsable Marketing",
      hotel: "Lodge Safari Sénégal"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight mb-3 text-hotel-navy">
            Ce que disent nos clients
          </h2>
          <p className="text-hotel-navy/60 md:w-2/3 mx-auto text-base">
            Découvrez les témoignages de nos clients satisfaits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="p-7 rounded-xl border border-hotel-gold/60 shadow-sm flex flex-col bg-white transition-all duration-200 ease-out hover:scale-101 hover:-translate-y-0.5 hover:shadow-lg hover:border-hotel-gold/80">
              <div className="mb-5 flex-grow">
                <div className="text-4xl text-hotel-gold/40 font-sans -ml-2 -mt-4">"</div>
                <p className="italic text-hotel-navy/90 font-sans text-base">{testimonial.quote}</p>
              </div>
              <div className="border-t border-hotel-gold pt-5">
                <p className="font-sans font-semibold text-hotel-gold text-base">{testimonial.name}</p>
                <p className="text-sm text-hotel-navy/60 font-sans">
                  {testimonial.role}, {testimonial.hotel}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
