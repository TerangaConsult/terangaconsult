
import React from 'react';
import { Search, Globe, BarChart2, Award, CheckCircle } from 'lucide-react';

const ChallengesSection = () => {
  const challenges = [
    {
      icon: <BarChart2 className="h-8 w-8 text-hotel-blue" />,
      title: "Peu de réservations directes sur votre site"
    },
    {
      icon: <Search className="h-8 w-8 text-hotel-blue" />,
      title: "Visibilité limitée sur les moteurs de recherche"
    },
    {
      icon: <Globe className="h-8 w-8 text-hotel-blue" />,
      title: "Difficulté à attirer des clients internationaux"
    },
    {
      icon: <Award className="h-8 w-8 text-hotel-blue" />,
      title: "Avis en ligne peu nombreux ou mal gérés"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-hotel-blue" />,
      title: "Système de réservation obsolète ou inexistant"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Vous faites face à ces défis?</h2>
          <p className="text-muted-foreground md:w-2/3 mx-auto">
            De nombreux établissements hôteliers au Sénégal rencontrent ces obstacles qui limitent leur potentiel de croissance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {challenges.map((challenge, index) => (
            <div 
              key={index} 
              className="flex items-start p-6 bg-background rounded-lg shadow-sm border border-border/50 hover:border-border hover:shadow-md transition-all"
            >
              <div className="mr-4 mt-1">{challenge.icon}</div>
              <div>
                <h3 className="font-medium mb-2">{challenge.title}</h3>
                <p className="text-sm text-muted-foreground">
                  Un obstacle majeur qui peut limiter votre visibilité et impacter votre taux d'occupation.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ChallengesSection;
