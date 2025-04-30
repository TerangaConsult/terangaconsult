
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, Mail } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-16 md:py-24 bg-hotel-blue text-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            Prêt à transformer votre établissement?
          </h2>
          <p className="text-lg text-white/80 mb-8">
            Obtenez votre audit gratuit et sans engagement
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white text-foreground p-8 rounded-lg shadow-lg">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name">Votre nom</Label>
                <Input id="name" placeholder="Entrez votre nom" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Votre email</Label>
                <Input id="email" type="email" placeholder="votre@email.com" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" placeholder="Votre numéro de téléphone" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="establishment">Nom de l'établissement</Label>
                <Input id="establishment" placeholder="Nom de votre hôtel" />
              </div>
            </div>
            
            <Button type="submit" className="w-full bg-hotel-gold hover:bg-hotel-gold/90 text-hotel-darkBlue font-medium">
              Obtenir mon audit gratuit
            </Button>
          </form>
          
          <div className="mt-8 pt-6 border-t border-border/30 flex flex-col sm:flex-row justify-center gap-6 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start">
              <Phone className="h-5 w-5 text-hotel-blue mr-2" />
              <span className="text-foreground">+221 77 123 45 67</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <Mail className="h-5 w-5 text-hotel-blue mr-2" />
              <span className="text-foreground">contact@hotelconsulting.sn</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
