
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 'auberge-lac-rose',
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23",
      title: "Auberge du Lac Rose",
      location: "Lac Rose, Sénégal",
      description: "Établissement bien situé mais peu visible en ligne, système de réservation par email uniquement, avis peu nombreux.",
      solutions: [
        "Création d'un site web optimisé en 3 langues",
        "Mise en place d'un système de réservation en ligne",
        "Optimisation de la fiche Google My Business",
        "Campagne de collecte d'avis clients"
      ],
      results: [
        "+130% de réservations directes en 3 mois",
        "+45% de taux d'occupation en haute saison",
        "1ère position sur Google pour 'hébergement lac rose'",
        "Augmentation de la note moyenne de 3.6 à 4.7/5"
      ],
      testimonial: {
        content: "Grâce à HotelierConsulting, notre établissement est maintenant visible sur internet et les réservations directes ont considérablement augmenté. Un investissement rentabilisé en quelques mois seulement !",
        author: "Fatou Diop",
        position: "Directrice, Auberge du Lac Rose"
      }
    },
    {
      id: 'baobab-resort',
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625",
      title: "Hôtel Baobab Resort",
      location: "Saly, Sénégal",
      description: "Grand complexe avec une présence digitale limitée et un taux élevé de dépendance aux agences de voyage en ligne (OTA).",
      solutions: [
        "Refonte complète du site web avec système de réservation direct",
        "Stratégie de contenu multilingue",
        "Campagne SEO ciblée pour les marchés français et britannique",
        "Formation du personnel à la gestion des relations client en ligne"
      ],
      results: [
        "1ère position sur Google pour 'resort saly Sénégal'",
        "+60% de réservations provenant du site web",
        "Réduction de 35% des commissions versées aux OTA",
        "Augmentation du panier moyen de 25%"
      ],
      testimonial: {
        content: "L'équipe d'HotelierConsulting a compris nos besoins et a développé une stratégie sur mesure qui nous a permis de réduire considérablement notre dépendance aux OTA. Leur approche professionnelle et leur connaissance du secteur hôtelier africain sont incomparables.",
        author: "Moussa Sène",
        position: "Directeur Commercial, Hôtel Baobab Resort"
      }
    },
    {
      id: 'safari-lodge',
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
      title: "Lodge Safari Sénégal",
      location: "Parc national du Niokolo-Koba, Sénégal",
      description: "Établissement éco-responsable dans une zone reculée avec des difficultés à attirer une clientèle internationale.",
      solutions: [
        "Création d'un site web immersif mettant en valeur l'expérience unique",
        "Stratégie de contenu axée sur l'écotourisme et la conservation",
        "Optimisation pour le référencement international",
        "Mise en place de partenariats avec des blogs de voyage influents"
      ],
      results: [
        "+45% de taux d'occupation",
        "Augmentation de 70% des réservations internationales",
        "Durée moyenne de séjour passée de 2 à 3 nuits",
        "+40% de revenus annuels"
      ],
      testimonial: {
        content: "Notre lodge est maintenant connu internationalement grâce au travail d'HotelierConsulting. Leur compréhension de notre mission écologique et leur capacité à la mettre en valeur en ligne ont transformé notre entreprise.",
        author: "Amadou Diallo",
        position: "Fondateur, Lodge Safari Sénégal"
      }
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-b from-hotel-blue/10 to-background pt-16 pb-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Nos réalisations
            </h1>
            <p className="text-muted-foreground text-lg">
              Découvrez comment nous avons transformé la présence en ligne de ces établissements au Sénégal
            </p>
          </div>
        </div>
      </div>

      {portfolioItems.map((item, index) => (
        <section key={item.id} id={item.id} className={`py-16 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}>
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="aspect-video rounded-xl overflow-hidden mb-6">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-1">
                  {item.title}
                </h2>
                <p className="text-muted-foreground mb-4">{item.location}</p>
                <div className="mb-8">
                  <h3 className="font-medium mb-2">Problématique</h3>
                  <p>{item.description}</p>
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Solutions mises en place</h3>
                    <ul className="space-y-2">
                      {item.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-hotel-gold mr-2">•</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Résultats obtenus</h3>
                    <ul className="space-y-2">
                      {item.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0">
                            <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          </span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white p-6 rounded-lg border border-muted/60 shadow-sm">
                    <blockquote className="text-muted-foreground italic mb-4">
                      "{item.testimonial.content}"
                    </blockquote>
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-hotel-blue/20 flex items-center justify-center text-hotel-blue font-medium mr-3">
                        {item.testimonial.author.charAt(0)}
                      </div>
                      <div>
                        <div className="font-medium">{item.testimonial.author}</div>
                        <div className="text-sm text-muted-foreground">{item.testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <div className="bg-hotel-darkBlue py-16 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-6">
              Vous souhaitez des résultats similaires ?
            </h2>
            <p className="text-white/80 mb-8">
              Nos experts sont prêts à analyser votre établissement et à créer une stratégie sur mesure pour transformer votre présence en ligne
            </p>
            <Button size="lg" asChild className="bg-hotel-gold hover:bg-hotel-gold/90 text-hotel-darkBlue font-medium">
              <Link to="/contact">
                Obtenez votre audit gratuit
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Portfolio;
