import React, { useState } from "react";
import { FaMapMarkerAlt, FaStar, FaChartLine, FaLightbulb, FaUserGraduate, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

const categories = ["Tous", "Hôtels de luxe", "Lodges", "Maisons d'hôtes"];
const interventions = [
  { key: "strategie", label: "Stratégie digitale", icon: <FaChartLine className="text-hotel-gold" /> },
  { key: "ereputation", label: "E-réputation", icon: <FaStar className="text-hotel-gold" /> },
  { key: "formation", label: "Formation", icon: <FaUserGraduate className="text-hotel-gold" /> }
];

const projets = [
  {
    id: 1,
    nom: "Baobab Resort",
    type: "Hôtel de luxe",
    localisation: "Dakar, Sénégal",
    image: "/assets/baobab-resort.jpg",
    services: ["strategie", "ereputation"],
    problematique: "Manque de visibilité digitale et faible taux de réservation directe.",
    solutions: [
      "Refonte du site web et optimisation SEO",
      "Campagnes de publicité ciblée",
      "Gestion proactive des avis clients"
    ],
    resultats: [
      { label: "Réservations directes", avant: 30, apres: 70, unite: "%" },
      { label: "Note TripAdvisor", avant: 3.8, apres: 4.7, unite: "/5" }
    ],
    temoignage: {
      nom: "Fatou S.",
      citation: "Grâce à TerangaConsult, notre hôtel a doublé ses réservations directes et notre réputation en ligne est au top !",
      photo: "/placeholder.svg"
    },
    periode: "2022-2023"
  },
  {
    id: 2,
    nom: "Safari Lodge Sénégal",
    type: "Lodge",
    localisation: "Saly, Sénégal",
    image: "/assets/safari-lodge.jpg",
    services: ["ereputation", "formation"],
    problematique: "Gestion difficile des avis négatifs et manque de formation des équipes.",
    solutions: [
      "Mise en place d'une stratégie de réponse aux avis",
      "Formation du personnel à la relation client digitale"
    ],
    resultats: [
      { label: "Note Google", avant: 4.0, apres: 4.8, unite: "/5" },
      { label: "Taux de réponse aux avis", avant: 20, apres: 95, unite: "%" }
    ],
    temoignage: {
      nom: "Jean M.",
      citation: "L'accompagnement a transformé notre image et motivé toute l'équipe !",
      photo: "/placeholder.svg"
    },
    periode: "2023"
  },
  {
    id: 3,
    nom: "Maison d'hôtes Teranga",
    type: "Maison d'hôtes",
    localisation: "Saint-Louis, Sénégal",
    image: "/assets/maison-teranga.jpg",
    services: ["strategie", "formation"],
    problematique: "Absence de stratégie digitale et équipe peu formée aux outils numériques.",
    solutions: [
      "Audit digital complet",
      "Coaching personnalisé des gérants",
      "Déploiement d'outils de gestion en ligne"
    ],
    resultats: [
      { label: "Visibilité en ligne", avant: 10, apres: 80, unite: "%" },
      { label: "Satisfaction client", avant: 70, apres: 98, unite: "%" }
    ],
    temoignage: {
      nom: "Awa B.",
      citation: "Un vrai tournant pour notre maison d'hôtes, nous avons gagné en autonomie et en notoriété.",
      photo: "/placeholder.svg"
    },
    periode: "2021-2022"
  }
];

const temoignages = projets.map(p => ({
  ...p.temoignage,
  etablissement: p.nom,
  image: p.image
}));

const stats = [
  { label: "Projets réalisés", value: 35 },
  { label: "Taux de satisfaction", value: 98 },
  { label: "Clients récurrents", value: 80 }
];

const Portfolio = () => {
  const [cat, setCat] = useState("Tous");
  const [interv, setInterv] = useState<string | null>(null);
  const [detail, setDetail] = useState<number | null>(null);
  const [tIndex, setTIndex] = useState(0);
  const [displayedStats, setDisplayedStats] = useState([0, 0, 0]);
  React.useEffect(() => {
    const intervals = stats.map((stat, i) =>
      setInterval(() => {
        setDisplayedStats(prev =>
          prev.map((v, idx) => (idx === i && v < stat.value ? v + 1 : v))
        );
      }, 20)
    );
    return () => intervals.forEach(clearInterval);
  }, []);
  const filtered = projets.filter(p =>
    (cat === "Tous" || p.type === cat) &&
    (!interv || p.services.includes(interv))
  );
  const nextT = () => setTIndex((tIndex + 1) % temoignages.length);
  const prevT = () => setTIndex((tIndex - 1 + temoignages.length) % temoignages.length);
  return (
    <>
      <Helmet>
        <title>Portfolio - TerangaConsult</title>
        <meta name="description" content="Découvrez des études de cas et des réalisations concrètes de TerangaConsult pour des hôtels et établissements au Sénégal." />
      </Helmet>
      <Layout>
        {/* 1. En-tête captivant */}
        <section className="relative bg-hotel-navy text-white min-h-[40vh] flex flex-col items-center justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center py-16"
          >
            <h1 className="font-playfair text-4xl md:text-5xl text-hotel-gold mb-4 tracking-tight drop-shadow-lg animate-fade-in">Notre Portfolio</h1>
            <p className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto mb-2">
              Découvrez comment nous avons transformé l'expérience client et la performance digitale d'établissements hôteliers au Sénégal.
            </p>
            <p className="text-base text-white/70 max-w-2xl mx-auto mb-6">
              Chaque projet est mené avec passion, expertise et une exigence d'excellence, pour des résultats concrets et durables.
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
        {/* 2. Système de filtrage premium */}
        <section className="bg-white py-10">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex gap-2 flex-wrap">
              {categories.map(c => (
                <button
                  key={c}
                  onClick={() => setCat(c)}
                  className={`px-5 py-2 rounded-full border-2 font-serif text-base transition-all duration-200 ${
                    cat === c
                      ? "bg-hotel-gold text-hotel-navy border-hotel-gold shadow"
                      : "bg-white text-hotel-navy border-hotel-gold/40 hover:bg-hotel-gold/10"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex gap-2 flex-wrap">
              {interventions.map(i => (
                <button
                  key={i.key}
                  onClick={() => setInterv(interv === i.key ? null : i.key)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 font-serif text-base transition-all duration-200 ${
                    interv === i.key
                      ? "bg-hotel-gold text-hotel-navy border-hotel-gold shadow"
                      : "bg-white text-hotel-navy border-hotel-gold/40 hover:bg-hotel-gold/10"
                  }`}
                >
                  {i.icon}
                  {i.label}
                </button>
              ))}
            </div>
          </div>
        </section>
        {/* 3. Grille élégante des projets */}
        <section className="bg-white py-10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence>
              {filtered.map((p, idx) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: idx * 0.1 }}
                  exit={{ opacity: 0, y: 40 }}
                  viewport={{ once: true }}
                  className="relative group rounded-3xl overflow-hidden shadow-xl border-2 border-hotel-gold/20 bg-white cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                  onClick={() => setDetail(p.id)}
                  tabIndex={0}
                  aria-label={`Voir le projet ${p.nom}`}
                >
                  <img
                    src={p.image}
                    alt={p.nom}
                    className="w-full h-56 object-cover group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-hotel-navy/70 opacity-0 group-hover:opacity-100 flex flex-col justify-end p-6 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <FaMapMarkerAlt className="text-hotel-gold" />
                      <span className="text-white/90 text-sm">{p.localisation}</span>
                    </div>
                    <div className="font-serif text-xl text-hotel-gold mb-1">{p.nom}</div>
                    <div className="flex gap-2">
                      {p.services.map(s =>
                        interventions.find(i => i.key === s)?.icon
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>
        {/* 5. Vue détaillée immersive */}
        <AnimatePresence>
          {detail && (
            <motion.div
              key={detail}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-hotel-navy/95 flex items-center justify-center px-4 py-8 overflow-y-auto"
              style={{ backdropFilter: "blur(6px)" }}
            >
              <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-2xl p-3 md:p-4 flex flex-col gap-3">
                <img
                  src={projets.find(p => p.id === detail)?.image}
                  alt={projets.find(p => p.id === detail)?.nom}
                  className="w-full h-36 md:h-40 object-cover rounded-xl mb-2"
                />
                <div className="flex-1 flex flex-col justify-center">
                  <h2 className="font-playfair text-2xl md:text-3xl text-hotel-gold mb-2">{projets.find(p => p.id === detail)?.nom}</h2>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-hotel-navy/80">{projets.find(p => p.id === detail)?.type}</span>
                    <span className="text-hotel-gold">•</span>
                    <span className="text-hotel-navy/60">{projets.find(p => p.id === detail)?.localisation}</span>
                  </div>
                  <div className="text-hotel-navy/80 mb-2">{projets.find(p => p.id === detail)?.problematique}</div>
                  <div className="mb-2">
                    <div className="font-serif text-lg text-hotel-gold mb-1">Solutions apportées</div>
                    <ul className="list-disc pl-6 text-hotel-navy/80">
                      {projets.find(p => p.id === detail)?.solutions.map((s, i) => (
                        <li key={i}>{s}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-2">
                    <div className="font-serif text-lg text-hotel-gold mb-1">Résultats obtenus</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {projets.find(p => p.id === detail)?.resultats.map((r, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-hotel-gold font-bold">{r.label} :</span>
                          <span className="text-hotel-navy/80 line-through">{r.avant}{r.unite}</span>
                          <FaChevronRight className="text-hotel-gold" />
                          <span className="text-hotel-gold font-bold">{r.apres}{r.unite}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  {projets.find(p => p.id === detail)?.temoignage && (
                    <div className="bg-hotel-navy/90 text-white rounded-xl p-3 md:p-4 shadow-lg border-l-4 border-hotel-gold mb-2 mt-4">
                      <div className="italic">{projets.find(p => p.id === detail)?.temoignage.citation}</div>
                      <div className="flex items-center gap-2 mt-4">
                        <img src={projets.find(p => p.id === detail)?.temoignage.photo} alt={projets.find(p => p.id === detail)?.temoignage.nom} className="w-10 h-10 rounded-full border-2 border-hotel-gold" />
                        <div>
                          <div className="text-hotel-gold font-serif">{projets.find(p => p.id === detail)?.temoignage.nom}</div>
                          <div className="text-xs text-white/60">{projets.find(p => p.id === detail)?.periode}</div>
                        </div>
                      </div>
                    </div>
                  )}
                  <button
                    onClick={() => setDetail(null)}
                    className="mt-4 px-6 py-2 rounded-full bg-hotel-gold text-hotel-navy font-bold shadow hover:bg-hotel-navy hover:text-hotel-gold border-2 border-hotel-gold hover:border-hotel-navy transition text-base mx-auto block"
                  >
                    Retour au portfolio
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* 6. Section témoignages clients */}
        <section className="py-20 bg-hotel-navy text-white">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-playfair text-3xl text-hotel-gold mb-10 text-center">Témoignages clients</h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={prevT}
                aria-label="Témoignage précédent"
                className="p-3 rounded-full bg-hotel-gold text-hotel-navy hover:bg-white hover:text-hotel-gold transition-all shadow-lg"
              >
                <FaChevronLeft />
              </button>
              <div className="relative w-full max-w-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tIndex}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 rounded-2xl p-8 shadow-lg border border-hotel-gold/40 text-center"
                  >
                    <div className="italic text-lg mb-2">{temoignages[tIndex].citation}</div>
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <img src={temoignages[tIndex].photo} alt={temoignages[tIndex].nom} className="w-10 h-10 rounded-full border-2 border-hotel-gold" />
                      <div>
                        <div className="text-hotel-gold font-serif">{temoignages[tIndex].nom}</div>
                        <div className="text-xs text-white/60">{temoignages[tIndex].etablissement}</div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <button
                onClick={nextT}
                aria-label="Témoignage suivant"
                className="p-3 rounded-full bg-hotel-gold text-hotel-navy hover:bg-white hover:text-hotel-gold transition-all shadow-lg"
              >
                <FaChevronRight />
              </button>
            </div>
            <div className="flex gap-2 justify-center mt-2">
              {temoignages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTIndex(i)}
                  className={`w-3 h-3 rounded-full border-2 ${tIndex === i ? "bg-hotel-gold border-hotel-gold" : "bg-white border-hotel-gold/40"} transition-all`}
                  aria-label={`Aller au témoignage ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
        {/* 7. Statistiques de réussite */}
        <section className="py-20 bg-white text-hotel-navy">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-12">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-bold text-hotel-gold">{displayedStats[i]}{i === 1 ? "%" : "+"}</div>
                <div className="text-sm text-hotel-navy/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>
        {/* 8. CTA sophistiqué */}
        <section className="py-16 bg-gradient-to-r from-hotel-navy to-[#F3F4F6]/30 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-playfair text-3xl" style={{color:'#F3F4F6'}} mb-6>Vous souhaitez transformer votre établissement ?</h2>
            <p className="text-white/90 mb-8">Discutons de votre projet et révélons ensemble le potentiel de votre hôtel, lodge ou maison d'hôtes.</p>
            <a
              href="/contact"
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
              Discuter de votre projet
            </a>
          </motion.div>
        </section>
      </Layout>
    </>
  );
};

export default Portfolio;