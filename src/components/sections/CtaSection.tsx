import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Phone, Mail } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="py-24 md:py-32 bg-hotel-gold/10 text-hotel-navy">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-sans font-semibold tracking-tight mb-3 text-hotel-navy">
            Prêt à transformer votre établissement?
          </h2>
          <p className="text-hotel-navy/60 text-base mb-8 font-sans">
            Obtenez votre audit gratuit et sans engagement
          </p>
        </div>
        
        <div className="max-w-2xl mx-auto bg-white text-hotel-navy p-8 rounded-xl shadow-sm border" style={{borderColor:'#dfe9ff', transition:'all 0.2s'}}>
          <form className="space-y-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-sans text-sm">Votre nom</Label>
                <Input id="name" placeholder="Entrez votre nom" className="rounded-lg border" style={{borderColor:'#dfe9ff'}} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-sans text-sm">Votre email</Label>
                <Input id="email" type="email" placeholder="votre@email.com" className="rounded-lg border" style={{borderColor:'#dfe9ff'}} />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="font-sans text-sm">Téléphone</Label>
                <Input id="phone" placeholder="Votre numéro de téléphone" className="rounded-lg border" style={{borderColor:'#dfe9ff'}} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="establishment" className="font-sans text-sm">Nom de l'établissement</Label>
                <Input id="establishment" placeholder="Nom de votre hôtel" className="rounded-lg border" style={{borderColor:'#dfe9ff'}} />
              </div>
            </div>
            
            <Button
              type="submit"
              variant="outline"
              className="w-full font-sans text-base rounded-lg border transition-all duration-200"
              style={{
                borderColor: '#dfe9ff',
                background: '#1A2341',
                color: '#b4c6fe',
                boxShadow: 'none',
                padding: '0.75rem 0',
              }}
            >
              Obtenir mon audit gratuit
            </Button>
          </form>
          
          <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row justify-center gap-6 text-center sm:text-left" style={{borderTop:'1px solid #dfe9ff'}}>
            <div className="flex items-center justify-center sm:justify-start font-sans text-base">
              <Phone className="h-5 w-5" style={{color:'#dfe9ff', marginRight:'0.5rem'}} />
              <span className="text-hotel-navy">+221 77 123 45 67</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start font-sans text-base">
              <Mail className="h-5 w-5" style={{color:'#dfe9ff', marginRight:'0.5rem'}} />
              <span className="text-hotel-navy">contact@hotelconsulting.sn</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
