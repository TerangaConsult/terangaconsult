
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <Layout>
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-muted -z-10"></div>
        <div className="container py-24 md:py-32">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-hotel-blue to-hotel-lightBlue">
                Expert en conseil hôtelier
              </span>
            </h1>
            <p className="text-xl text-muted-foreground md:w-2/3">
              Transformez votre établissement avec nos solutions sur mesure
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg">
                <Link to="/contact">Nous contacter</Link>
              </Button>
              <Button variant="outline" size="lg">
                En savoir plus
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 md:py-24 container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
            Prêt à recevoir vos contenus
          </h2>
          <p className="text-muted-foreground md:w-2/3 mx-auto">
            Ce site est configuré pour intégrer facilement vos documents Markdown et structurer votre contenu selon vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="relative group overflow-hidden rounded-lg border border-border/50 bg-card hover:border-border hover:shadow-md transition-all p-6">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <div className="h-6 w-6 rounded-full bg-primary/30"></div>
              </div>
              <h3 className="text-lg font-medium mb-2">Section {item}</h3>
              <p className="text-sm text-muted-foreground">
                Emplacement pour votre contenu. Ajoutez ici vos textes, images et autres éléments depuis vos fichiers Markdown.
              </p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Prêt à développer votre projet ?
              </h2>
              <p className="text-muted-foreground mb-6">
                Nous sommes prêts à implémenter votre contenu dès que vous nous fournirez vos documents Markdown.
              </p>
              <Button asChild>
                <Link to="/contact">Commencer maintenant</Link>
              </Button>
            </div>
            <div className="md:w-1/2 aspect-video bg-gradient-to-br from-hotel-blue/20 to-hotel-lightBlue/20 rounded-lg flex items-center justify-center">
              <div className="text-center p-8">
                <p className="font-medium text-foreground/80">Emplacement pour image ou contenu</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
