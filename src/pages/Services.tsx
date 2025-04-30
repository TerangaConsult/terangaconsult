
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Search, Calendar, BarChart2, FileText, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      id: 'landing-page',
      title: 'Création de landing page optimisée',
      description: 'Nous créons des sites web modernes, rapides et optimisés pour les conversions, spécialement conçus pour les établissements hôteliers au Sénégal.',
      icon: Globe,
      features: [
        'Design responsive adapté à tous les appareils',
        'Optimisation pour le SEO local',
        'Vitesse de chargement optimale',
        'Intégration de galeries photos professionnelles',
        'Mise en valeur des services et points forts de l\'établissement',
        'Intégration d\'un système de réservation',
        'Version multilingue (français, anglais, autres selon besoins)'
      ]
    },
    {
      id: 'booking',
      title: 'Système de réservation en ligne',
      description: 'Un système de réservation simple, efficace et adapté à vos besoins, qui permet à vos clients de réserver facilement et vous évite les commissions des plateformes.',
      icon: Calendar,
      features: [
        'Calendrier de disponibilité en temps réel',
        'Paiement sécurisé',
        'Confirmation automatique par email',
        'Interface d\'administration simple',
        'Synchronisation possible avec d\'autres plateformes',
        'Adaptation aux spécificités de votre établissement'
      ]
    },
    {
      id: 'seo',
      title: 'Optimisation SEO locale',
      description: 'Nous optimisons votre présence sur les moteurs de recherche pour être visible par les clients potentiels qui recherchent un hébergement dans votre région.',
      icon: Search,
      features: [
        'Recherche de mots-clés pertinents pour le marché sénégalais et international',
        'Optimisation du contenu et des métadonnées',
        'Création de backlinks de qualité',
        'Optimisation technique (vitesse, mobile-first, etc.)',
        'Contenu local pertinent et authentique',
        'Stratégie de netlinking ciblée'
      ]
    },
    {
      id: 'google',
      title: 'Gestion de la présence Google',
      description: 'Optimisation complète de votre fiche Google My Business et gestion proactive de votre réputation en ligne.',
      icon: BarChart2,
      features: [
        'Création/optimisation de votre fiche Google My Business',
        'Ajout de photos professionnelles',
        'Gestion et réponse aux avis',
        'Publication régulière de posts et actualités',
        'Suivi des performances et ajustements',
        'Formation à l\'utilisation de l\'outil'
      ]
    },
    {
      id: 'content',
      title: 'Stratégie de contenu',
      description: 'Nous créons des contenus authentiques et engageants qui valorisent votre établissement et attirent des clients potentiels.',
      icon: FileText,
      features: [
        'Création de descriptions attrayantes de votre établissement',
        'Mise en valeur de vos services et installations',
        'Valorisation de l\'environnement et des attractions locales',
        'Contenu optimisé pour le référencement',
        'Adaptation aux différentes plateformes (site web, réseaux sociaux, OTA)'
      ]
    },
    {
      id: 'formation',
      title: 'Formation du personnel',
      description: 'Nous formons votre équipe à la maîtrise des outils numériques pour pérenniser les résultats de votre stratégie digitale.',
      icon: Users,
      features: [
        'Formation à l\'utilisation des outils de gestion de contenu',
        'Techniques de réponse aux avis clients',
        'Optimisation des fiches d\'établissement sur les OTA',
        'Gestion de la relation client en ligne',
        'Suivi des performances et analyses statistiques'
      ]
    }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-b from-hotel-blue/10 to-background pt-16 pb-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Nos services pour transformer votre présence numérique
            </h1>
            <p className="text-muted-foreground text-lg">
              Des solutions sur mesure pour augmenter vos réservations et votre visibilité en ligne
            </p>
          </div>
        </div>
      </div>

      {services.map((service, index) => (
        <section 
          key={service.id} 
          id={service.id}
          className={`py-16 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}
        >
          <div className="container">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="inline-block p-3 rounded-full bg-hotel-gold/10 mb-4">
                  <service.icon size={28} className="text-hotel-gold" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                  {service.title}
                </h2>
                <p className="text-muted-foreground mb-6 text-lg">
                  {service.description}
                </p>
                <Button asChild className="bg-hotel-blue hover:bg-hotel-blue/90">
                  <Link to="/contact">
                    Demander un devis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="text-lg font-medium mb-4">Ce que nous incluons</h3>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex">
                        <span className="bg-green-100 rounded-full p-1 mr-3 flex-shrink-0">
                          <svg className="h-4 w-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        </span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
              Prêt à transformer votre présence en ligne ?
            </h2>
            <p className="text-white/80 mb-8">
              Contactez-nous pour discuter de vos besoins et obtenir un devis personnalisé
            </p>
            <Button size="lg" asChild className="bg-hotel-gold hover:bg-hotel-gold/90 text-hotel-darkBlue font-medium">
              <Link to="/contact">
                Contactez-nous maintenant
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Services;
