
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
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-muted-foreground md:w-2/3 mx-auto">
            Découvrez les témoignages de nos clients satisfaits.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-border/50 flex flex-col">
              <div className="mb-6 flex-grow">
                <div className="text-6xl text-hotel-gold/30 font-serif -ml-4 -mt-8">"</div>
                <p className="text-muted-foreground italic">{testimonial.quote}</p>
              </div>
              <div className="border-t border-border pt-6">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">
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
