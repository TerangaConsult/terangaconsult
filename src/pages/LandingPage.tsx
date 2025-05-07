import React from "react";
import { Helmet } from "react-helmet-async";
import useSmoothScroll from "@/hooks/useSmoothScroll";
import BackToTop from "@/components/ui/BackToTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

const LandingPage = () => {
  // Utilisation du hook de smooth scroll
  useSmoothScroll();
  
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
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* À Propos Section */}
      <AboutSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Processus de Travail */}
      <ProcessSection />
      
      {/* Témoignages */}
      <TestimonialsSection />
      
      {/* Formulaire de Contact */}
      <ContactSection />
      
      {/* Footer */}
      <Footer />
    </>
  );
};

export default LandingPage; 