import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaUserTie, FaHotel, FaHandshake, FaAward, FaLightbulb, FaShieldAlt, FaUsers, FaChartLine, FaStar, FaUserGraduate, FaBullhorn } from "react-icons/fa";
import Layout from "@/components/layout/Layout";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const timeline = [
  { year: "2018", title: "Création", desc: "Fondation du cabinet par Safiya Diop, experte en hôtellerie.", icon: <FaUserTie className="text-hotel-gold text-2xl" /> },
  { year: "2019", title: "Premiers succès", desc: "Accompagnement de nos premiers établissements partenaires.", icon: <FaHotel className="text-hotel-gold text-2xl" /> },
  { year: "2021", title: "Croissance", desc: "Équipe élargie et nouveaux services digitaux.", icon: <FaUsers className="text-hotel-gold text-2xl" /> },
  { year: "2024", title: "Référence", desc: "Cabinet reconnu pour l'excellence et l'innovation au Sénégal.", icon: <FaAward className="text-hotel-gold text-2xl" /> },
];

const valeurs = [
  { label: "Excellence", icon: <FaAward />, desc: "Nous visons l'excellence dans chaque mission." },
  { label: "Engagement", icon: <FaHandshake />, desc: "Un accompagnement sur-mesure et durable." },
  { label: "Innovation", icon: <FaLightbulb />, desc: "Des solutions créatives et adaptées à chaque client." },
  { label: "Intégrité", icon: <FaShieldAlt />, desc: "Transparence et éthique au cœur de notre démarche." },
];

const equipe = [
  { nom: "Safiya Diop", poste: "Fondatrice & CEO", expertise: "Stratégie hôtelière, digital, formation", photo: "/placeholder.svg" },
  { nom: "Mamadou Ndiaye", poste: "Consultant Senior", expertise: "Gestion opérationnelle, revenue management", photo: "/placeholder.svg" },
  { nom: "Awa Ba", poste: "Responsable Digital", expertise: "E-réputation, marketing digital", photo: "/placeholder.svg" },
];

const expertises = [
  { label: "Stratégie digitale", icon: <FaChartLine /> },
  { label: "E-réputation", icon: <FaStar /> },
  { label: "Formation", icon: <FaUserGraduate /> },
  { label: "Consulting", icon: <FaLightbulb /> },
  { label: "Marketing", icon: <FaBullhorn /> },
  { label: "Gestion Hôtelière", icon: <FaHotel /> },
];

const temoignages = [
  {
    citation: "Un vrai partenaire qui nous a permis de développer notre visibilité internationale.",
    nom: "Ahmed Sow",
    poste: "Directeur, Baobab Resort"
  },
  {
    citation: "L'équipe a transformé notre approche du digital et boosté nos réservations.",
    nom: "Marie Gomis",
    poste: "Directrice Marketing, Palm Resort"
  }
];

const partenaires = [
  { nom: "Fédération Sénégalaise du Tourisme", type: "Institutionnel", logo: "/placeholder.svg" },
  { nom: "Ecole Hôtelière de Dakar", type: "Formation", logo: "/placeholder.svg" },
  { nom: "Africa Digital Network", type: "Digital", logo: "/placeholder.svg" },
  { nom: "Consortium Hôtelier du Sénégal", type: "Associatif", logo: "/placeholder.svg" },
];

const About = () => {
  const [clients, setClients] = useState(0);
  const [hotels, setHotels] = useState(0);
  useEffect(() => {
    let c = 0, h = 0;
    const interval = setInterval(() => {
      if (c < 50) setClients(++c);
      if (h < 30) setHotels(++h);
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Helmet>
        <title>À propos - TerangaConsult</title>
        <meta name="description" content="Découvrez l'histoire, les valeurs et l'équipe de TerangaConsult, cabinet de consulting hôtelier et digital au Sénégal." />
      </Helmet>
      <Layout>
        <main className="bg-hotel-navy text-white font-sans">
          {/* 1. Introduction */}
          <section
            className="relative min-h-[60vh] flex items-center justify-center overflow-hidden"
            style={{
              background: "linear-gradient(120deg, #1a2342cc 70%, #c4a77522 100%), url('/assets/terrasse-pool.jpg') center/cover no-repeat",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative z-10 text-center py-20 max-w-3xl mx-auto"
            >
              <h1 className="font-playfair text-4xl md:text-5xl text-hotel-gold mb-4 tracking-tight drop-shadow-lg animate-fade-in">À propos</h1>
              <p className="text-lg md:text-xl font-light text-white/90 mb-2">
                TerangaConsult, c'est l'expertise, la passion et l'innovation au service de l'hôtellerie sénégalaise. Notre mission : accompagner les établissements vers l'excellence, la rentabilité et la reconnaissance internationale.
              </p>
              <p className="text-base text-white/70 max-w-2xl mx-auto mb-6">
                Une équipe dévouée, des méthodes éprouvées et une approche personnalisée pour répondre aux défis uniques de chaque établissement.
              </p>
              {/* Séparateur doré animé */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="mx-auto h-1 w-32 bg-hotel-gold rounded-full origin-left"
              />
            </motion.div>
            <div className="absolute top-0 left-0 w-full h-32 bg-hotel-gold/10 blur-2xl opacity-40 pointer-events-none" />
          </section>
          
          {/* 3. Vision */}
          <section className="py-20 bg-hotel-navy text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-playfair text-3xl text-hotel-gold mb-8">Notre Vision</h2>
              <blockquote className="italic text-xl md:text-2xl font-serif text-hotel-gold mb-4 relative">
                « L'hôtellerie de demain sera humaine, innovante et durable. »
              </blockquote>
              <span className="block text-white/80 font-light">— Safiya Diop, Fondatrice</span>
            </div>
          </section>
          
          {/* 4. Valeurs */}
          <section className="py-20 bg-white text-hotel-navy">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-playfair text-3xl mb-10 text-center" style={{color:'#1A2341'}}>Nos Valeurs</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {valeurs.map((val, i) => (
                  <div
                    key={val.label}
                    className="bg-hotel-navy rounded-xl p-6 text-center shadow-lg border-b-4" 
                    style={{borderBottomColor:'#dfe9ff'}}
                  >
                    <div className="mb-3" style={{color:'#dfe9ff', fontSize:'2.25rem'}}>{val.icon}</div>
                    <div className="font-playfair text-xl mb-2" style={{color:'#dfe9ff'}}>{val.label}</div>
                    <div className="text-white/90 text-sm">{val.desc}</div>
          </div>
                ))}
            </div>
          </div>
        </section>

          {/* 5. Équipe */}
          <section className="py-20 bg-hotel-navy text-white">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-playfair text-3xl text-hotel-gold mb-10 text-center">Notre Équipe</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {equipe.map((m, i) => (
                  <div
                    key={m.nom}
                    className="bg-white/10 rounded-2xl p-6 flex flex-col items-center shadow-lg border border-hotel-gold/40 relative group"
                  >
                    <div className="w-28 h-28 mb-4 overflow-hidden rounded-full border-4 border-hotel-gold shadow-lg">
                      <img src={m.photo} alt={m.nom} className="w-full h-full object-cover" />
                    </div>
                    <div className="font-playfair text-xl text-hotel-gold mb-1">{m.nom}</div>
                    <div className="text-white/90 text-sm mb-1">{m.poste}</div>
                    <div className="text-white/60 text-xs">{m.expertise}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* 6. Expertise */}
          <section className="py-20 bg-white text-hotel-navy">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-playfair text-3xl text-hotel-gold mb-10 text-center">Notre Expertise</h2>
              <div className="flex flex-wrap justify-center gap-8 mb-10">
                {expertises.map((exp, i) => (
                  <div key={exp.label} className="flex flex-col items-center">
                    <div className="text-hotel-gold text-4xl mb-2">{exp.icon}</div>
                    <div className="font-playfair text-lg">{exp.label}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-12 mb-10">
                <div className="text-center">
                  <div className="text-4xl font-bold text-hotel-gold">{clients}+</div>
                  <div className="text-sm text-hotel-navy/80">Clients accompagnés</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-hotel-gold">{hotels}+</div>
                  <div className="text-sm text-hotel-navy/80">Hôtels & établissements</div>
                </div>
              </div>
              <div className="max-w-2xl mx-auto">
                {temoignages.map((t, i) => (
                  <blockquote key={i} className="bg-hotel-navy/90 text-white rounded-xl p-6 mb-6 shadow-lg border-l-4 border-hotel-gold relative">
                    <FaQuoteLeft className="absolute -left-6 top-2 text-2xl text-hotel-gold/60" />
                    <div className="italic text-lg mb-2">{t.citation}</div>
                    <div className="text-hotel-gold font-playfair">{t.nom}</div>
                    <div className="text-xs text-white/60">{t.poste}</div>
                  </blockquote>
              ))}
            </div>
          </div>
        </section>

          {/* 7. Partenaires */}
          <section className="py-20 bg-hotel-navy text-white">
            <div className="max-w-5xl mx-auto">
              <h2 className="font-playfair text-3xl text-hotel-gold mb-10 text-center">Nos Partenaires</h2>
              <div className="flex flex-wrap justify-center gap-10">
                {partenaires.map((p, i) => (
                  <div key={p.nom} className="flex flex-col items-center group">
                    <div className="h-16 w-auto mb-2 grayscale hover:grayscale-0 transition-all duration-300">
                      <img src={p.logo} alt={p.nom} className="h-full w-auto object-contain" />
            </div>
                    <div className="text-sm text-hotel-gold">{p.nom}</div>
                    <div className="text-xs text-white/60">{p.type}</div>
                </div>
              ))}
              </div>
            </div>
          </section>

          {/* 8. Appel à l'action */}
          <section className="py-16 bg-gradient-to-r from-hotel-navy to-hotel-gold/30 text-center">
            <div className="max-w-4xl mx-auto px-4">
              <h2 className="font-playfair text-3xl text-white mb-6">Prêt à collaborer avec nous ?</h2>
              <p className="text-lg text-white/80 mb-8">Contactez-nous pour discuter de votre projet et découvrir comment nous pouvons vous accompagner vers l'excellence hôtelière.</p>
              <a href="/contact"
                className="inline-block font-sans text-base rounded-full transition-all duration-300"
                style={{
                  background: '#f7c873',
                  color: '#fff',
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  border: 'none',
                  boxShadow: 'none',
                  fontFamily: 'Noto Sans, ui-sans-serif, system-ui, sans-serif',
                }}
              >
                Contactez-nous
              </a>
            </div>
          </section>
        </main>
      </Layout>
    </>
  );
};

export default About;