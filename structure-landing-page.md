# Structure de la Landing Page TerangaConsult

## Composants et Sections

### 1. Header
```tsx
<header className="fixed w-full bg-hotel-navy/95 z-50">
  <div className="container mx-auto flex justify-between items-center py-4 px-4">
    <div className="logo">
      <img src="/logo-teranga.png" alt="TerangaConsult" className="h-12" />
    </div>
    <a href="#contact" className="bg-hotel-gold text-hotel-navy px-6 py-2 rounded-lg">
      Contactez-nous
    </a>
  </div>
</header>
```

### 2. Hero Section
```tsx
<section id="hero" className="relative min-h-screen flex items-center pt-16">
  <div className="absolute inset-0 bg-gradient-to-b from-hotel-navy/80 to-hotel-navy/20 z-10"></div>
  <div className="absolute inset-0 bg-cover bg-center" 
       style={{ backgroundImage: "url('/hero-senegal-hotel.jpg')" }}></div>
  <div className="container relative z-20 py-24">
    <div className="max-w-2xl">
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
```

### 3. À Propos (Concis)
```tsx
<section id="about" className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold text-hotel-navy mb-6">
        À propos de TerangaConsult
      </h2>
      <p className="text-lg text-hotel-navy/80 mb-8">
        TerangaConsult est le premier cabinet de consulting hôtelier au Sénégal spécialisé en stratégie digitale. 
        Notre mission : révéler le potentiel de votre établissement pour maximiser votre visibilité, vos réservations directes et votre rentabilité.
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
```

### 4. Services (Condensés)
```tsx
<section id="services" className="py-20 bg-hotel-navy text-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-hotel-gold text-center mb-12">
      Nos Services
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      <div className="bg-white/10 p-6 rounded-lg border border-hotel-gold/30">
        <div className="text-hotel-gold text-3xl mb-4">
          <FaChartLine />
        </div>
        <h3 className="text-xl font-bold mb-3">Stratégie digitale & commerciale</h3>
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
```

### 5. Processus de Travail
```tsx
<section id="process" className="py-20 bg-white text-hotel-navy">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">
      Notre Processus
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
      <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-hotel-navy text-white flex items-center justify-center text-2xl mx-auto mb-4">1</div>
        <h3 className="text-xl font-bold mb-2">Audit & Diagnostic</h3>
        <p className="text-hotel-navy/70">Analyse approfondie de votre situation actuelle</p>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-hotel-navy text-white flex items-center justify-center text-2xl mx-auto mb-4">2</div>
        <h3 className="text-xl font-bold mb-2">Stratégie personnalisée</h3>
        <p className="text-hotel-navy/70">Plan d'action adapté à vos objectifs</p>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-hotel-navy text-white flex items-center justify-center text-2xl mx-auto mb-4">3</div>
        <h3 className="text-xl font-bold mb-2">Mise en œuvre</h3>
        <p className="text-hotel-navy/70">Déploiement des solutions avec accompagnement</p>
      </div>
      <div className="text-center">
        <div className="w-16 h-16 rounded-full bg-hotel-navy text-white flex items-center justify-center text-2xl mx-auto mb-4">4</div>
        <h3 className="text-xl font-bold mb-2">Suivi & Optimisation</h3>
        <p className="text-hotel-navy/70">Mesure des résultats et ajustements</p>
      </div>
    </div>
  </div>
</section>
```

### 6. Témoignages
```tsx
<section id="testimonials" className="py-20 bg-hotel-navy text-white">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-hotel-gold text-center mb-12">
      Ce que nos clients disent
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="bg-white/10 p-6 rounded-lg border border-hotel-gold/30">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src="/testimonial-1.jpg" alt="Jean Martin" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="font-bold text-hotel-gold">Jean Martin</div>
            <div className="text-white/70 text-sm">Directeur, Hôtel Le Baobab</div>
          </div>
        </div>
        <p className="italic mb-4">
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
      
      <div className="bg-white/10 p-6 rounded-lg border border-hotel-gold/30">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src="/testimonial-2.jpg" alt="Marie Diop" className="w-full h-full object-cover" />
          </div>
          <div>
            <div className="font-bold text-hotel-gold">Marie Diop</div>
            <div className="text-white/70 text-sm">Responsable commercial, Villa Teranga</div>
          </div>
        </div>
        <p className="italic mb-4">
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
```

### 7. Formulaire de Contact
```tsx
<section id="contact" className="py-20 bg-white">
  <div className="container mx-auto px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-hotel-navy text-center mb-8">
        Contactez-nous
      </h2>
      <p className="text-center text-hotel-navy/70 mb-12 max-w-2xl mx-auto">
        Prêt à transformer votre établissement ? Contactez-nous pour un audit gratuit ou un devis personnalisé.
      </p>
      
      <div className="bg-hotel-navy/5 p-8 rounded-lg">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="block text-hotel-navy">Nom</label>
            <input type="text" className="w-full p-3 border border-hotel-navy/20 rounded-lg" />
          </div>
          <div className="space-y-2">
            <label className="block text-hotel-navy">Email</label>
            <input type="email" className="w-full p-3 border border-hotel-navy/20 rounded-lg" />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="block text-hotel-navy">Message</label>
            <textarea rows={4} className="w-full p-3 border border-hotel-navy/20 rounded-lg"></textarea>
          </div>
          <div className="md:col-span-2">
            <button type="submit" className="bg-hotel-gold text-hotel-navy px-8 py-3 rounded-lg w-full md:w-auto">
              Envoyer ma demande
            </button>
          </div>
        </form>
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
```

### 8. Footer
```tsx
<footer className="bg-hotel-navy text-white py-8">
  <div className="container mx-auto px-4">
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
```

## Structure du Fichier Principal `LandingPage.tsx`

```tsx
import React, { useState } from "react";
import { FaChartLine, FaStar, FaUserGraduate, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

const LandingPage = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Logique d'envoi du formulaire...
      setSuccess(true);
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <>
      <Helmet>
        <title>TerangaConsult - Consulting hôtelier et marketing digital au Sénégal</title>
        <meta name="description" content="Cabinet de consulting hôtelier et marketing digital au Sénégal. Stratégie digitale, e-réputation, accompagnement sur-mesure pour hôtels, lodges et maisons d'hôtes." />
      </Helmet>
      
      {/* Header */}
      {/* ... */}
      
      {/* Hero Section */}
      {/* ... */}
      
      {/* À Propos Section */}
      {/* ... */}
      
      {/* Services Section */}
      {/* ... */}
      
      {/* Processus Section */}
      {/* ... */}
      
      {/* Témoignages Section */}
      {/* ... */}
      
      {/* Contact Section */}
      {/* ... */}
      
      {/* Footer */}
      {/* ... */}
    </>
  );
};

export default LandingPage;
```

## Modification de `App.tsx`

```tsx
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import MentionsLegales from "./pages/MentionsLegales";
import Confidentialite from "./pages/Confidentialite";
import Cgv from "./pages/Cgv";
import NotFound from "./pages/NotFound";
import { HelmetProvider } from "react-helmet-async";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/confidentialite" element={<Confidentialite />} />
            <Route path="/cgv" element={<Cgv />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;