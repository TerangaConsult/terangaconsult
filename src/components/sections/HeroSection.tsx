import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 to-primary/10 z-10"></div>
      <div className="absolute inset-0 bg-cover bg-center" 
            style={{ backgroundImage: "url('/assets/consulting-laptop-pool.jpg')" }}></div>
      <div className="container mx-auto px-6 md:px-8 relative z-20 py-16 md:py-24">
        <div className="max-w-2xl mx-auto md:mx-0">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Cabinet de consulting pour hôteliers au Sénégal
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Stratégie digitale, e-réputation et accompagnement sur-mesure pour établissements d'exception
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-secondary text-primary font-medium px-8 py-3 rounded-lg text-center">
              Obtenir un audit gratuit
            </a>
            <a href="#services" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-center">
              Découvrir nos services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 