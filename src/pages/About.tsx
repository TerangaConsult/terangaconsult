
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Globe, Award, Users } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Amadou Diop",
      role: "Fondateur & Stratège Digital",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8cGVyc29ufHx8fHx8MTY0MjUzMjcyOA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      bio: "Avec plus de 15 ans d'expérience dans le marketing digital et l'hôtellerie au Sénégal et en Europe, Amadou a fondé HotelierConsulting pour aider les établissements africains à développer leur présence en ligne."
    },
    {
      name: "Fatou Ndiaye",
      role: "Consultante SEO & Content",
      image: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8YWZyaWNhbiB3b21hbnx8fHx8fDE2NDI1MzI3ODA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      bio: "Spécialiste en référencement et en création de contenu, Fatou s'assure que nos clients soient visibles sur les moteurs de recherche avec des contenus authentiques et optimisés."
    },
    {
      name: "Omar Sall",
      role: "Développeur Web & Solutions de Réservation",
      image: "https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8YWZyaWNhbiBtYW58fHx8fHwxNjQyNTMyODE5&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=300",
      bio: "Expert en développement web et en système de réservation, Omar crée des sites web performants et des solutions techniques adaptées aux besoins spécifiques de chaque établissement."
    }
  ];

  const values = [
    {
      title: "Expertise locale",
      description: "Connaissance approfondie du marché touristique sénégalais et des enjeux spécifiques à la région",
      icon: Globe
    },
    {
      title: "Excellence et résultats",
      description: "Focus sur des stratégies qui apportent des résultats mesurables et un retour sur investissement concret",
      icon: Award
    },
    {
      title: "Partenariat à long terme",
      description: "Nous construisons des relations durables avec nos clients pour assurer un succès continu",
      icon: Users
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-b from-hotel-blue/10 to-background pt-16 pb-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              À propos de nous
            </h1>
            <p className="text-muted-foreground text-lg">
              Votre partenaire de confiance pour la transformation digitale des établissements hôteliers au Sénégal
            </p>
          </div>
        </div>
      </div>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-6">
              Notre histoire et notre mission
            </h2>
            <p className="text-lg mb-6">
              HotelierConsulting est né d'un constat simple : de nombreux établissements hôteliers au Sénégal disposent d'un potentiel exceptionnel mais manquent de visibilité en ligne, ce qui limite considérablement leur capacité à attirer des clients directs.
            </p>
            <p className="text-lg mb-6">
              Fondée en 2018 par Amadou Diop, notre agence s'est fixée pour mission d'aider les hôtels, lodges et maisons d'hôtes sénégalais à développer leur présence numérique, à augmenter leurs réservations directes et à réduire leur dépendance aux intermédiaires.
            </p>
            <p className="text-lg mb-6">
              Notre équipe combine une connaissance approfondie du marché hôtelier sénégalais avec une expertise pointue des dernières technologies et stratégies de marketing digital. Cette double compétence nous permet de proposer des solutions parfaitement adaptées aux réalités locales et aux besoins spécifiques de chaque établissement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-12 text-center">
            Notre équipe
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.name} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="aspect-square">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-hotel-blue mb-4">{member.role}</p>
                  <p className="text-muted-foreground">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto mb-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
              Nos valeurs
            </h2>
            <p className="text-muted-foreground">
              Les principes qui guident notre travail et notre relation avec nos clients
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value) => (
              <div key={value.title} className="bg-white p-6 rounded-xl border border-muted/60">
                <div className="h-12 w-12 rounded-full bg-hotel-gold/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-hotel-gold" />
                </div>
                <h3 className="font-bold text-xl mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-hotel-darkBlue py-16 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Prêt à travailler avec nous ?
            </h2>
            <p className="text-white/80 mb-8">
              Découvrez comment nous pouvons vous aider à transformer la présence en ligne de votre établissement
            </p>
            <Button size="lg" asChild className="bg-hotel-gold hover:bg-hotel-gold/90 text-hotel-darkBlue font-medium">
              <Link to="/contact">
                Contactez notre équipe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
