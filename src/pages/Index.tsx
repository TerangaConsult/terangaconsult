import React, { useState } from "react";
import { FaStar, FaChartLine, FaUserGraduate, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

// Données des témoignages
const temoignages = [
  {
    nom: "Jean Martin",
    role: "Directeur",
    hotel: "Hôtel Le Baobab",
    image: "/assets/testimonial-1.jpg",
    texte: "Une collaboration fructueuse qui a transformé notre visibilité en ligne. Notre taux d'occupation a bondi de 32% dès le premier trimestre.",
  },
  {
    nom: "Marie Diop",
    role: "Responsable commercial",
    hotel: "Villa Teranga",
    image: "/assets/testimonial-2.jpg",
    texte: "L'audit réalisé nous a permis d'identifier précisément nos points faibles et de mettre en place des actions correctives efficaces.",
  },
];

export default function Home() {
  const [tIndex, setTIndex] = React.useState(0);
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const nextT = () => setTIndex((tIndex + 1) % temoignages.length);
  const prevT = () => setTIndex((tIndex - 1 + temoignages.length) % temoignages.length);

  return (
    <>
      <Helmet>
        <title>TerangaConsult - Consulting hôtelier et marketing digital au Sénégal</title>
        <meta name="description" content="Cabinet de consulting hôtelier et marketing digital au Sénégal. Stratégie digitale, e-réputation, accompagnement sur-mesure pour hôtels, lodges et maisons d'hôtes. Augmentez votre visibilité et vos réservations directes avec TerangaConsult." />
        <meta property="og:title" content="TerangaConsult - Consulting hôtelier et marketing digital au Sénégal" />
        <meta property="og:description" content="Cabinet de consulting hôtelier et marketing digital au Sénégal. Stratégie digitale, e-réputation, accompagnement sur-mesure pour hôtels, lodges et maisons d'hôtes." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/og-terangaconsult.jpg" />
        <link rel="canonical" href="https://www.terangaconsult.com/" />
      </Helmet>
      <Layout>
        {/* Section principale avec bannière */}
        <section className="relative min-h-screen bg-white">
          <div className="container mx-auto px-4 py-32">
            <div className="text-center">
              <h1 className="font-playfair text-4xl md:text-6xl text-hotel-navy mb-6">
                Cabinet de consulting pour hôteliers au Sénégal
              </h1>
              <p className="text-xl text-hotel-navy/80 mb-8 max-w-3xl mx-auto">
                Stratégie digitale, e-réputation et accompagnement sur-mesure pour établissements d'exception
              </p>
              <div className="flex justify-center gap-6 mb-16">
                <a
                  href="/services"
                  className="bg-hotel-navy text-white font-medium px-8 py-3 rounded-lg hover:bg-hotel-navy/90 transition-colors"
                >
                  Découvrir nos services
                </a>
                <a
                  href="/contact"
                  className="bg-[#f7c873] text-hotel-navy font-medium px-8 py-3 rounded-lg transition-colors"
                  style={{ fontFamily: 'Noto Sans, ui-sans-serif, system-ui, sans-serif', opacity: 0.9 }}
                  onMouseOver={e => { e.currentTarget.style.opacity = '1'; }}
                  onMouseOut={e => { e.currentTarget.style.opacity = '0.9'; }}
                >
                  Contactez-nous
                </a>
              </div>
            </div>
            
            {/* Bannière avec image et texte */}
            <div className="relative bg-hotel-navy rounded-2xl overflow-hidden mt-8 shadow-lg">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                  <h2 className="font-playfair text-2xl md:text-3xl text-white mb-4">
                    Révélez le potentiel de votre établissement
                  </h2>
                  <p className="text-white/90 mb-6">
                    Des solutions sur-mesure pour augmenter votre visibilité, optimiser votre réputation en ligne et maximiser vos revenus.
                  </p>
                  <a
                    href="/contact"
                    className="bg-white text-hotel-navy font-medium px-6 py-2 rounded-lg self-start hover:bg-hotel-gold hover:text-white transition-colors"
                  >
                    Obtenir un audit gratuit
                  </a>
                </div>
                <div className="md:w-1/2 min-h-[300px] flex items-center justify-center">
                  <img
                    src="/assets/consulting-laptop-pool.jpg"
                    alt="Travail sur ordinateur au bord d'une piscine dans un hôtel premium"
                    className="w-full h-[300px] object-cover rounded-2xl shadow-lg"
                    style={{ maxHeight: 340 }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi choisir notre cabinet */}
        <section className="relative py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl md:text-4xl text-hotel-navy text-center mb-16">
              Pourquoi choisir notre cabinet&nbsp;?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="bg-hotel-bg-light rounded-2xl border border-hotel-gold p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <FaChartLine className="mb-3 text-hotel-accent text-3xl" />
                <h3 className="font-playfair text-lg text-hotel-navy mb-2">Expertise locale & internationale</h3>
                <p className="text-hotel-navy/80 text-sm">
                  Une équipe sénégalaise formée aux standards internationaux pour un accompagnement adapté au contexte local.
                </p>
              </div>
              <div className="bg-hotel-bg-light rounded-2xl border border-hotel-gold p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <FaUserGraduate className="mb-3 text-hotel-accent text-3xl" />
                <h3 className="font-playfair text-lg text-hotel-navy mb-2">Approche sur-mesure</h3>
                <p className="text-hotel-navy/80 text-sm">
                  Des solutions personnalisées selon vos besoins, votre positionnement et votre budget, sans standardisation.
                </p>
              </div>
              <div className="bg-hotel-bg-light rounded-2xl border border-hotel-gold p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                <FaStar className="mb-3 text-hotel-accent text-3xl" />
                <h3 className="font-playfair text-lg text-hotel-navy mb-2">Résultats concrets</h3>
                <p className="text-hotel-navy/80 text-sm">
                  Des retours mesurables sur la visibilité, la réputation et la performance commerciale.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nos expertises */}
        <section className="relative py-20 bg-hotel-bg">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl md:text-4xl text-hotel-navy text-center mb-12">Nos expertises</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <article 
                className="relative flex-1 rounded-3xl shadow-lg border border-hotel-gold bg-hotel-navy px-8 py-12 flex flex-col items-center justify-between hover:shadow-xl transition-shadow">
                <FaChartLine className="text-white text-5xl mb-6" />
                <h3 className="font-playfair text-xl md:text-2xl text-white font-bold mb-3 text-center">
                  Stratégie digitale & commerciale
                </h3>
                <p className="font-sans text-base text-white/90 text-center mb-4">
                  Développez votre présence en ligne, attirez plus de clients et optimisez vos canaux de vente.
                </p>
              </article>
              
              <article 
                className="relative flex-1 rounded-3xl shadow-lg border border-hotel-gold bg-hotel-blue px-8 py-12 flex flex-col items-center justify-between hover:shadow-xl transition-shadow">
                <FaStar className="text-hotel-navy text-5xl mb-6" />
                <h3 className="font-playfair text-xl md:text-2xl text-hotel-navy font-bold mb-3 text-center">
                  Optimisation de la e-réputation
                </h3>
                <p className="font-sans text-base text-hotel-navy/90 text-center mb-4">
                  Transformez les avis clients en atout commercial et renforcez votre image en ligne.
                </p>
              </article>
              
              <article 
                className="relative flex-1 rounded-3xl shadow-lg border border-hotel-gold bg-hotel-navy px-8 py-12 flex flex-col items-center justify-between hover:shadow-xl transition-shadow">
                <FaUserGraduate className="text-white text-5xl mb-6" />
                <h3 className="font-playfair text-xl md:text-2xl text-white font-bold mb-3 text-center">
                  Formation & accompagnement
                </h3>
                <p className="font-sans text-base text-white/90 text-center mb-4">
                  Bénéficiez de formations sur-mesure et d'un suivi personnalisé pour votre équipe.
                </p>
              </article>
            </div>
            <div className="text-center mt-12">
              <a href="/services" className="inline-block bg-hotel-navy text-white font-medium px-8 py-3 rounded-full mt-4 hover:bg-hotel-navy/80 transition-colors">
                Voir tous nos services
              </a>
            </div>
          </div>
        </section>

        {/* Témoignages premium */}
        <section id="temoignages" className="relative py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl md:text-4xl text-hotel-navy text-center mb-12">
              Ce que nos clients disent
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-hotel-navy rounded-2xl p-8 shadow-lg relative">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                    <img src={temoignages[tIndex].image} alt={temoignages[tIndex].nom} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="text-white/90 italic mb-4">"{temoignages[tIndex].texte}"</p>
                    <div className="text-hotel-gold font-semibold">{temoignages[tIndex].nom}</div>
                    <div className="text-white/70 text-sm">{temoignages[tIndex].role}, {temoignages[tIndex].hotel}</div>
                  </div>
                </div>
                <div className="flex justify-center mt-6 gap-2">
                  <button 
                    onClick={prevT} 
                    className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                    aria-label="Témoignage précédent">
                    <FaChevronLeft />
                  </button>
                  <button 
                    onClick={nextT} 
                    className="p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                    aria-label="Témoignage suivant">
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partenaires */}
        <section className="py-20 bg-hotel-bg-light">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl text-hotel-navy text-center mb-12">Ils nous font confiance</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {Array.from({ length: 4 }, (_, i) => (
                <div key={i} className="flex justify-center">
                  <div className="h-16 w-full max-w-[160px] bg-white rounded-lg flex items-center justify-center p-4">
                    <img src="/placeholder.svg" alt={`Partenaire ${i + 1}`} className="max-h-full max-w-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA avec formulaire simple */}
        <section className="py-20 bg-hotel-navy text-white">
          <div className="container mx-auto px-4">
            <h2 className="font-playfair text-3xl md:text-4xl text-white mb-8 text-center">
              Prêt à transformer votre établissement&nbsp;?
            </h2>
            <form className="bg-white/10 p-8 rounded-xl max-w-3xl mx-auto" onSubmit={e => {
              e.preventDefault();
              setSuccess(false);
              setError("");
              fetch('/.netlify/functions/sendMail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nom, email, message, subject: "Demande de contact via la page d'accueil TerangaConsult" }),
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
              <div className="flex justify-center">
                <button type="submit" className="bg-white text-hotel-navy px-8 py-3 rounded-lg hover:bg-hotel-gold transition-colors font-sans" style={{ fontFamily: 'Noto Sans, ui-sans-serif, system-ui, sans-serif', border: 'none' }}>
                  Envoyer ma demande
                </button>
              </div>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
}
