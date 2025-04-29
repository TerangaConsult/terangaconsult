
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé",
      description: "Nous vous contacterons prochainement.",
    });
  };

  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold tracking-tight mb-6">Nous contacter</h1>
          <p className="text-muted-foreground mb-8">
            Vous avez des questions ou souhaitez discuter de vos besoins en conseil hôtelier ? 
            Contactez-nous en utilisant le formulaire ci-dessous.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nom
              </label>
              <Input id="name" placeholder="Votre nom" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input id="email" type="email" placeholder="votre@email.com" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Comment pouvons-nous vous aider?"
                className="min-h-[150px]"
              />
            </div>
            
            <Button type="submit" className="w-full">
              Envoyer le message
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
