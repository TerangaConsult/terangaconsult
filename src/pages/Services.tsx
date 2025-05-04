import React, { useState } from "react";
import { FaChartLine, FaStar, FaLightbulb, FaUserGraduate, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

// Données des services
  const services = [
    {
    id: 1,
    titre: "Stratégie digitale & commerciale",
    icon: <FaChartLine className="text-hotel-gold text-4xl" />,
    description: "Déployez une stratégie sur-mesure pour booster votre visibilité, votre chiffre d'affaires et votre positionnement sur le marché hôtelier.",
    points: [
      "Audit digital & commercial complet",
      "Plan d'action personnalisé et suivi",
      "Optimisation des canaux de distribution"
    ],
    temoignage: {
      nom: "Fatou S.",
      citation: "Grâce à leur stratégie, notre hôtel a doublé ses réservations en ligne.",
      poste: "Directrice, Baobab Resort"
    }
  },
  {
    id: 2,
    titre: "Optimisation de la e-réputation",
    icon: <FaStar className="text-hotel-gold text-4xl" />,
    description: "Maîtrisez votre image en ligne, améliorez vos avis clients et développez une réputation digitale solide et durable.",
    points: [
      "Gestion proactive des avis & réponses",
      "Veille et analyse de la réputation",
      "Formation à la gestion de crise digitale"
    ],
    temoignage: {
      nom: "Jean M.",
      citation: "Notre note TripAdvisor a bondi grâce à leur accompagnement personnalisé.",
      poste: "Manager, Safari Lodge"
    }
  },
  {
    id: 3,
    titre: "Formation & accompagnement",
    icon: <FaUserGraduate className="text-hotel-gold text-4xl" />,
    description: "Formez vos équipes aux meilleures pratiques digitales et montez en compétence pour gagner en autonomie.",
    points: [
      "Ateliers pratiques personnalisés",
      "Support continu et documentation",
      "Transfert de compétences sur mesure"
    ],
    temoignage: {
      nom: "Awa B.",
      citation: "Nos équipes sont maintenant autonomes sur le digital grâce à leurs formations.",
      poste: "Gérante, Maison Teranga"
    }
  }
];

// Processus d'accompagnement
const processus = [
  {
    etape: 1,
    titre: "Audit & Diagnostic",
    description: "Analyse approfondie de votre situation actuelle et identification des opportunités."
  },
  {
    etape: 2,
    titre: "Stratégie personnalisée",
    description: "Élaboration d'un plan d'action sur-mesure adapté à vos objectifs."
  },
  {
    etape: 3,
    titre: "Mise en œuvre",
    description: "Déploiement des solutions avec accompagnement continu."
  },
  {
    etape: 4,
    titre: "Suivi & Optimisation",
    description: "Mesure des résultats et ajustements pour maximiser votre performance."
  }
];

const Services = () => {
  const [selected, setSelected] = useState(0);
  const prevService = () => setSelected((selected - 1 + services.length) % services.length);
  const nextService = () => setSelected((selected + 1) % services.length);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  return (
    <>
      <Helmet>
        <title>Nos Services - TerangaConsult</title>
        <meta name="description" content="Découvrez nos services de consulting hôtelier et marketing digital sur-mesure pour booster la visibilité et la performance de votre établissement au Sénégal." />
      </Helmet>
      <Layout>
        <main className="bg-white text-hotel-navy">
          {/* Section d'en-tête */}
          <section className="relative py-24 bg-hotel-navy text-white">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                  className="font-playfair text-4xl md:text-5xl text-hotel-gold mb-4 tracking-tight drop-shadow-lg"
                >
                  Nos Services
                </motion.h1>
                <p className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto mb-2">
                  Des solutions sur-mesure pour optimiser votre présence digitale et maximiser vos performances commerciales.
                </p>
                <p className="text-base text-white/70 max-w-2xl mx-auto mb-6">
                  Chaque service est conçu avec expertise pour répondre aux défis spécifiques des établissements hôteliers au Sénégal.
                </p>
                {/* Séparateur doré animé */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="mx-auto h-1 w-32 bg-hotel-gold rounded-full origin-left"
                />
                <div className="flex justify-center mt-10">
                  <a href="#contact" className="bg-white text-hotel-navy font-medium px-8 py-3 rounded-lg hover:bg-hotel-gold hover:text-white transition-colors">
                    Demandez un devis gratuit
                  </a>
                </div>
              </div>
            </div>
          </section>
          
          {/* Services en détail */}
          <section className="py-20 relative">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="font-playfair text-3xl text-hotel-navy text-center mb-12">
                  Notre approche : conjuguer expertise terrain, innovation digitale et accompagnement premium pour révéler le potentiel de chaque établissement hôtelier.
                </h2>
                
                {/* Slider de services */}
                <div className="relative bg-white rounded-2xl shadow-lg p-4 mb-16">
                  <div className="flex items-center justify-between mb-6">
                    <button 
                      onClick={prevService} 
                      className="p-3 rounded-full bg-hotel-navy/5 text-hotel-navy hover:bg-hotel-navy/10 transition-colors"
                      aria-label="Service précédent"
                    >
                      <FaChevronLeft />
                    </button>
                    <h3 className="font-playfair text-2xl text-hotel-navy font-bold">
                      {services[selected].titre}
                    </h3>
                    <button 
                      onClick={nextService} 
                      className="p-3 rounded-full bg-hotel-navy/5 text-hotel-navy hover:bg-hotel-navy/10 transition-colors"
                      aria-label="Service suivant"
                    >
                      <FaChevronRight />
                    </button>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Image du service */}
                    <div className="md:w-1/3">
                      <div className="aspect-square bg-hotel-navy/5 rounded-xl flex items-center justify-center">
                        {services[selected].icon}
                      </div>
                    </div>
                    
                    {/* Description du service */}
                    <div className="md:w-2/3">
                      <p className="text-base text-hotel-navy/80 mb-4">{services[selected].description}</p>
                      <h4 className="font-medium text-hotel-navy mb-2">Points clés :</h4>
                      <ul className="mb-6 space-y-2">
                        {services[selected].points.map((pt, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <span className="inline-block w-2 h-2 rounded-full bg-hotel-gold" />
                            <span className="text-hotel-navy">{pt}</span>
                        </li>
                      ))}
                      </ul>
                      <div className="bg-hotel-navy/5 p-4 rounded-lg">
                        <p className="italic text-hotel-navy/80">"{services[selected].temoignage.citation}"</p>
                        <p className="text-hotel-navy font-medium mt-2">{services[selected].temoignage.nom}, {services[selected].temoignage.poste}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Notre processus */}
          <section className="py-20 bg-hotel-bg-light">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto">
                <h2 className="font-playfair text-3xl text-hotel-navy text-center mb-16">Notre processus</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  {processus.map((etape) => (
                    <div key={etape.etape} className="bg-white rounded-xl p-6 shadow-md text-center">
                      <div className="w-12 h-12 bg-hotel-navy text-white rounded-full flex items-center justify-center mx-auto mb-4">
                        {etape.etape}
                      </div>
                      <h3 className="font-playfair text-xl text-hotel-navy mb-2">{etape.titre}</h3>
                      <p className="text-hotel-navy/70 text-sm">{etape.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          
          {/* Contact */}
          <section id="contact" className="py-20 bg-hotel-navy text-white">
            <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
                <h2 className="font-playfair text-3xl mb-6">Prêt à démarrer ?</h2>
              <p className="text-white/80 mb-8">
                  Contactez-nous pour discuter de vos besoins et découvrir comment nous pouvons vous aider à atteindre vos objectifs.
                </p>
                <form className="bg-white/10 p-8 rounded-xl" onSubmit={e => {
                  e.preventDefault();
                  setSuccess(false);
                  setError("");
                  fetch('/.netlify/functions/sendMail', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nom, email, message }),
                  })
                    .then(res => res.json())
                    .then(data => {
                      if (data.success) {
                        setSuccess(true);
                        setNom("");
                        setEmail("");
                        setMessage("");
                      } else {
                        setError('Erreur lors de l’envoi');
                      }
                    })
                    .catch(() => setError('Erreur lors de l’envoi'));
                }}>
                  {success && <div className="text-green-500 mb-4">Message envoyé !</div>}
                  {error && <div className="text-red-500 mb-4">{error}</div>}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input type="text" placeholder="Nom" className="p-3 rounded-lg bg-white/10 border border-white/20 text-white" value={nom} onChange={e => setNom(e.target.value)} required />
                    <input type="email" placeholder="Email" className="p-3 rounded-lg bg-white/10 border border-white/20 text-white" value={email} onChange={e => setEmail(e.target.value)} required />
                  </div>
                  <div className="mb-6">
                    <textarea placeholder="Message" rows={4} className="w-full p-3 rounded-lg bg-white/10 border border-white/20 text-white" value={message} onChange={e => setMessage(e.target.value)} required></textarea>
                  </div>
                  <button type="submit" className="bg-white text-hotel-navy px-8 py-3 rounded-lg hover:bg-hotel-gold transition-colors font-sans" style={{ fontFamily: 'Noto Sans, ui-sans-serif, system-ui, sans-serif' }}>
                    Envoyer
                  </button>
                </form>
          </div>
        </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default Services;