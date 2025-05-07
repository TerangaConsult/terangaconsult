import React, { useState } from "react";
import { FaChartLine, FaStar, FaUserGraduate, FaFacebook, FaInstagram, FaLinkedin, 
         FaSearchPlus, FaLightbulb, FaCogs, FaChartBar } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import BackToTop from "@/components/ui/BackToTop";

const LandingPage = () => {
  // Utilisation du hook de smooth scroll
  useSmoothScroll();
  
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Logique d'envoi du formulaire
      fetch('/.netlify/functions/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          nom, 
          email, 
          message, 
          subject: "Demande de contact via la landing page TerangaConsult" 
        }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            setSuccess(true);
            setNom("");
            setEmail("");
            setMessage("");
          } else {
            setError("Une erreur est survenue. Veuillez réessayer.");
          }
        })
        .catch(err => {
          setError("Une erreur est survenue. Veuillez réessayer.");
        });
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  // Navigation items
  const navItems = [
    { label: "Accueil", href: "#hero" },
    { label: "À propos", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Processus", href: "#process" },
    { label: "Témoignages", href: "#testimonials" },
  ];

  return (
    <>
      <Helmet>
        <title>TerangaConsult - Consulting hôtelier et marketing digital au Sénégal</title>
        <meta name="description" content="Cabinet de consulting hôtelier et marketing digital au Sénégal. Stratégie digitale, e-réputation, accompagnement sur-mesure pour hôtels, lodges et maisons d'hôtes." />
        <meta property="og:title" content="TerangaConsult - Consulting hôtelier et marketing digital au Sénégal" />
        <meta property="og:description" content="Cabinet de consulting hôtelier et marketing digital au Sénégal. Stratégie digitale, e-réputation, accompagnement sur-mesure pour hôtels, lodges et maisons d'hôtes." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/assets/og-terangaconsult.jpg" />
        <link rel="canonical" href="https://www.terangaconsult.com/" />
      </Helmet>
      
      {/* Bouton retour en haut */}
      <BackToTop />
      
      {/* Header */}
      <header className="fixed w-full bg-hotel-navy/95 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-4">
          <div className="logo">
            <img src="/assets/logo.svg" alt="TerangaConsult" className="h-12" />
          </div>
          
          {/* Menu navigation desktop */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a 
                key={index} 
                href={item.href} 
                className="text-white hover:text-hotel-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="bg-hotel-gold text-hotel-navy px-6 py-2 rounded-lg ml-4">
              Contactez-nous
            </a>
          </nav>
          
          {/* Menu burger pour mobile */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {menuOpen ? 
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> :
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                }
              </svg>
            </button>
          </div>
        </div>
        
        {/* Menu mobile */}
        {menuOpen && (
          <div className="md:hidden bg-hotel-navy/95 py-4 px-4">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item, index) => (
                <a 
                  key={index} 
                  href={item.href} 
                  className="text-white hover:text-hotel-gold transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a 
                href="#contact" 
                className="bg-hotel-gold text-hotel-navy px-6 py-2 rounded-lg inline-block text-center"
                onClick={() => setMenuOpen(false)}
              >
                Contactez-nous
              </a>
            </nav>
          </div>
        )}
      </header>
      
      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-hotel-navy/60 to-hotel-navy/10 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center" 
             style={{ backgroundImage: "url('/assets/consulting-laptop-pool.jpg')" }}></div>
        <div className="container mx-auto px-6 md:px-8 relative z-20 py-24">
          <div className="max-w-2xl mx-auto md:mx-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Cabinet de consulting pour hôteliers au Sénégal
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Stratégie digitale, e-réputation et accompagnement sur-mesure pour établissements d'exception
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="bg-hotel-gold text-hotel-navy font-medium px-8 py-3 rounded-lg text-center">
                Obtenir un audit gratuit
              </a>
              <a href="#services" className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg text-center">
                Découvrir nos services
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* À Propos Section */}
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
      
      {/* Services Section */}
      <section id="services" className="relative py-20 text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-hotel-navy/80 to-hotel-navy/75 z-10"></div>
        <div className="absolute inset-0 bg-cover bg-center opacity-80" 
             style={{ backgroundImage: "url('/assets/formation_accompagnement.jpg')" }}></div>
        <div className="container mx-auto px-6 md:px-8 relative z-20">
          <h2 className="text-3xl font-bold text-hotel-gold text-center mb-12">
            Nos Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/10 p-6 rounded-lg border border-hotel-gold/30">
              <div className="text-hotel-gold text-3xl mb-4">
                <FaChartLine />
              </div>
              <h3 className="text-xl font-bold mb-3">Stratégie digitale & commerciale</h3>
              <p className="text-white/80 text-sm mb-4">
                Déployez une stratégie sur-mesure pour booster votre visibilité, votre chiffre d'affaires et votre positionnement sur le marché hôtelier.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-hotel-gold text-lg">•</span>
                  <span>Audit digital complet</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hotel-gold text-lg">•</span>
                  <span>Plan d'action personnalisé</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hotel-gold text-lg">•</span>
                  <span>Optimisation des canaux de distribution</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg border border-hotel-gold/30">
              <div className="text-hotel-gold text-3xl mb-4">
                <FaStar />
              </div>
              <h3 className="text-xl font-bold mb-3">Optimisation de la e-réputation</h3>
              <p className="text-white/80 text-sm mb-4">
                Maîtrisez votre image en ligne, améliorez vos avis clients et développez une réputation digitale solide et durable.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-hotel-gold text-lg">•</span>
                  <span>Gestion proactive des avis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hotel-gold text-lg">•</span>
                  <span>Veille et analyse de la réputation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hotel-gold text-lg">•</span>
                  <span>Formation à la gestion de crise</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg border border-hotel-gold/30">
              <div className="text-hotel-gold text-3xl mb-4">
                <FaUserGraduate />
              </div>
              <h3 className="text-xl font-bold mb-3">Formation & accompagnement</h3>
              <p className="text-white/80 text-sm mb-4">
                Formez vos équipes aux meilleures pratiques digitales et montez en compétence pour gagner en autonomie.
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-hotel-gold text-lg">•</span>
                  <span>Ateliers personnalisés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hotel-gold text-lg">•</span>
                  <span>Support continu</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-hotel-gold text-lg">•</span>
                  <span>Transfert de compétences</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="#contact" className="bg-hotel-gold text-hotel-navy px-8 py-3 rounded-lg inline-block">
              Demander un devis personnalisé
            </a>
          </div>
        </div>
      </section>
      
      {/* Processus de Travail */}
      <section id="process" className="py-20 bg-white text-hotel-navy">
        <div className="container mx-auto px-6 md:px-8">
          <h2 className="text-3xl font-bold text-center mb-4">
            Notre Processus
          </h2>
          <p className="text-center text-hotel-navy/70 max-w-2xl mx-auto mb-16">
            Une approche structurée en 4 étapes pour transformer votre établissement
          </p>
          
          {/* Roadmap - Version desktop */}
          <div className="hidden md:block">
            <div className="relative max-w-5xl mx-auto">
              {/* Ligne de progression horizontale */}
              <div className="absolute top-1/2 left-0 right-0 h-2 bg-hotel-navy/20 -translate-y-1/2 rounded-full"></div>
              
              <div className="grid grid-cols-4 gap-6">
                {/* Étape 1 */}
                <div className="relative">
                  <div className="flex flex-col items-center">
                    {/* Point avec numéro */}
                    <div className="w-16 h-16 rounded-full bg-hotel-gold z-10 mb-6 flex items-center justify-center text-2xl font-bold text-hotel-navy">
                      1
                    </div>
                    {/* Contenu */}
                    <div className="bg-white border border-hotel-navy/10 rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-bold mb-3 text-hotel-navy">Audit & Diagnostic</h3>
                      <ul className="text-sm space-y-2 text-hotel-navy/80">
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Analyse de votre présence en ligne</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Étude de votre e-réputation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Benchmark concurrentiel</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Étape 2 */}
                <div className="relative">
                  <div className="flex flex-col items-center">
                    {/* Point avec numéro */}
                    <div className="w-16 h-16 rounded-full bg-hotel-gold z-10 mb-6 flex items-center justify-center text-2xl font-bold text-hotel-navy">
                      2
                    </div>
                    {/* Contenu */}
                    <div className="bg-white border border-hotel-navy/10 rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-bold mb-3 text-hotel-navy">Stratégie</h3>
                      <ul className="text-sm space-y-2 text-hotel-navy/80">
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Plan d'action personnalisé</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Objectifs mesurables</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Calendrier d'implémentation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Étape 3 */}
                <div className="relative">
                  <div className="flex flex-col items-center">
                    {/* Point avec numéro */}
                    <div className="w-16 h-16 rounded-full bg-hotel-gold z-10 mb-6 flex items-center justify-center text-2xl font-bold text-hotel-navy">
                      3
                    </div>
                    {/* Contenu */}
                    <div className="bg-white border border-hotel-navy/10 rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-bold mb-3 text-hotel-navy">Mise en œuvre</h3>
                      <ul className="text-sm space-y-2 text-hotel-navy/80">
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Accompagnement pas à pas</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Formation de vos équipes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Déploiement des actions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Étape 4 */}
                <div className="relative">
                  <div className="flex flex-col items-center">
                    {/* Point avec numéro */}
                    <div className="w-16 h-16 rounded-full bg-hotel-gold z-10 mb-6 flex items-center justify-center text-2xl font-bold text-hotel-navy">
                      4
                    </div>
                    {/* Contenu */}
                    <div className="bg-white border border-hotel-navy/10 rounded-lg p-6 shadow-md">
                      <h3 className="text-xl font-bold mb-3 text-hotel-navy">Suivi & Optimisation</h3>
                      <ul className="text-sm space-y-2 text-hotel-navy/80">
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Analyse des performances</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Rapports détaillés</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Ajustements stratégiques</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Roadmap - Version mobile (verticale) */}
          <div className="md:hidden">
            <div className="relative max-w-md mx-auto">
              {/* Ligne de progression verticale */}
              <div className="absolute top-0 bottom-0 left-8 w-1 bg-hotel-navy/20"></div>
              
              <div className="space-y-16">
                {/* Étape 1 */}
                <div className="relative">
                  <div className="flex">
                    {/* Point avec numéro */}
                    <div className="w-16 h-16 rounded-full bg-hotel-gold z-10 flex items-center justify-center text-2xl font-bold text-hotel-navy shrink-0">
                      1
                    </div>
                    {/* Contenu */}
                    <div className="bg-white border border-hotel-navy/10 rounded-lg p-6 shadow-md ml-6">
                      <h3 className="text-xl font-bold mb-3 text-hotel-navy">Audit & Diagnostic</h3>
                      <ul className="text-sm space-y-2 text-hotel-navy/80">
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Analyse de votre présence en ligne</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Étude de votre e-réputation</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Benchmark concurrentiel</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Étape 2 */}
                <div className="relative">
                  <div className="flex">
                    {/* Point avec numéro */}
                    <div className="w-16 h-16 rounded-full bg-hotel-gold z-10 flex items-center justify-center text-2xl font-bold text-hotel-navy shrink-0">
                      2
                    </div>
                    {/* Contenu */}
                    <div className="bg-white border border-hotel-navy/10 rounded-lg p-6 shadow-md ml-6">
                      <h3 className="text-xl font-bold mb-3 text-hotel-navy">Stratégie</h3>
                      <ul className="text-sm space-y-2 text-hotel-navy/80">
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Plan d'action personnalisé</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Objectifs mesurables</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Calendrier d'implémentation</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Étape 3 */}
                <div className="relative">
                  <div className="flex">
                    {/* Point avec numéro */}
                    <div className="w-16 h-16 rounded-full bg-hotel-gold z-10 flex items-center justify-center text-2xl font-bold text-hotel-navy shrink-0">
                      3
                    </div>
                    {/* Contenu */}
                    <div className="bg-white border border-hotel-navy/10 rounded-lg p-6 shadow-md ml-6">
                      <h3 className="text-xl font-bold mb-3 text-hotel-navy">Mise en œuvre</h3>
                      <ul className="text-sm space-y-2 text-hotel-navy/80">
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Accompagnement pas à pas</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Formation de vos équipes</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Déploiement des actions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                {/* Étape 4 */}
                <div className="relative">
                  <div className="flex">
                    {/* Point avec numéro */}
                    <div className="w-16 h-16 rounded-full bg-hotel-gold z-10 flex items-center justify-center text-2xl font-bold text-hotel-navy shrink-0">
                      4
                    </div>
                    {/* Contenu */}
                    <div className="bg-white border border-hotel-navy/10 rounded-lg p-6 shadow-md ml-6">
                      <h3 className="text-xl font-bold mb-3 text-hotel-navy">Suivi & Optimisation</h3>
                      <ul className="text-sm space-y-2 text-hotel-navy/80">
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Analyse des performances</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Rapports détaillés</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>Ajustements stratégiques</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <a href="#contact" className="bg-hotel-gold text-hotel-navy px-8 py-3 rounded-lg inline-block hover:bg-hotel-gold/90 transition-colors">
              Démarrer votre transformation
            </a>
          </div>
        </div>
      </section>
      
      {/* Témoignages */}
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
      
      {/* Formulaire de Contact */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-hotel-navy text-center mb-8">
              Contactez-nous
            </h2>
            <p className="text-center text-hotel-navy/70 mb-12 max-w-2xl mx-auto">
              Prêt à transformer votre établissement ? Contactez-nous pour un audit gratuit ou un devis personnalisé.
            </p>
            
            <div className="bg-hotel-navy/5 p-8 rounded-lg">
              {success ? (
                <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center">
                  Votre message a bien été envoyé. Nous vous contacterons dans les plus brefs délais.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-hotel-navy">Nom</label>
                    <input 
                      type="text" 
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      required
                      className="w-full p-3 border border-hotel-navy/20 rounded-lg" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="block text-hotel-navy">Email</label>
                    <input 
                      type="email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full p-3 border border-hotel-navy/20 rounded-lg" 
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <label className="block text-hotel-navy">Message</label>
                    <textarea 
                      rows={4} 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      className="w-full p-3 border border-hotel-navy/20 rounded-lg"
                    ></textarea>
                  </div>
                  {error && (
                    <div className="md:col-span-2 text-red-500">
                      {error}
                    </div>
                  )}
                  <div className="md:col-span-2">
                    <button type="submit" className="bg-hotel-gold text-hotel-navy px-8 py-3 rounded-lg w-full md:w-auto">
                      Envoyer ma demande
                    </button>
                  </div>
                </form>
              )}
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-8">
              <div>
                <div className="text-xl font-bold text-hotel-navy mb-2">TerangaConsult</div>
                <div className="text-hotel-navy/70">contact@terangaconsult.com</div>
                <div className="text-hotel-navy/70">+221 77 123 45 67</div>
              </div>
              <div className="flex gap-4">
                <a href="#" className="text-hotel-navy text-2xl">
                  <FaFacebook />
                </a>
                <a href="#" className="text-hotel-navy text-2xl">
                  <FaInstagram />
                </a>
                <a href="#" className="text-hotel-navy text-2xl">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-hotel-navy text-white py-8">
        <div className="container mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-white/70">
              © 2024 TerangaConsult. Tous droits réservés.
            </div>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="/mentions-legales" className="text-sm text-white/70 hover:text-white">Mentions légales</a>
              <a href="/confidentialite" className="text-sm text-white/70 hover:text-white">Politique de confidentialité</a>
              <a href="/cgv" className="text-sm text-white/70 hover:text-white">CGV</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage; 