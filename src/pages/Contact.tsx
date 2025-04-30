
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Le nom doit contenir au moins 2 caractères.",
  }),
  email: z.string().email({
    message: "Veuillez saisir un email valide.",
  }),
  phone: z.string().min(6, {
    message: "Veuillez saisir un numéro de téléphone valide.",
  }),
  establishment: z.string().min(2, {
    message: "Le nom de l'établissement doit contenir au moins 2 caractères.",
  }),
  service: z.string().optional(),
  message: z.string().min(10, {
    message: "Le message doit contenir au moins 10 caractères.",
  }),
});

const Contact = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      establishment: "",
      service: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "Message envoyé",
      description: "Nous vous contacterons prochainement.",
    });
    form.reset();
  }

  return (
    <Layout>
      <div className="bg-gradient-to-b from-hotel-blue/10 to-background pt-16 pb-12">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Nous contacter
            </h1>
            <p className="text-muted-foreground text-lg">
              Vous avez des questions ou souhaitez discuter de vos besoins en conseil hôtelier ? 
              Contactez-nous en utilisant le formulaire ci-dessous.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-muted/60">
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom</FormLabel>
                          <FormControl>
                            <Input placeholder="Votre nom complet" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="votre@email.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Téléphone</FormLabel>
                          <FormControl>
                            <Input placeholder="+221 XX XXX XX XX" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="establishment"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nom de l'établissement</FormLabel>
                          <FormControl>
                            <Input placeholder="Nom de votre hôtel/établissement" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service qui vous intéresse</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Sélectionnez un service (optionnel)" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="landing-page">Création de site web</SelectItem>
                            <SelectItem value="booking">Système de réservation</SelectItem>
                            <SelectItem value="seo">Optimisation SEO</SelectItem>
                            <SelectItem value="google">Présence Google</SelectItem>
                            <SelectItem value="content">Stratégie de contenu</SelectItem>
                            <SelectItem value="formation">Formation</SelectItem>
                            <SelectItem value="audit">Audit gratuit</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Comment pouvons-nous vous aider?"
                            className="min-h-[150px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button type="submit" className="w-full bg-hotel-blue hover:bg-hotel-blue/90">
                    Envoyer le message
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          
          <div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-muted/60 mb-8">
              <h2 className="text-xl font-bold mb-6">Coordonnées</h2>
              
              <div className="space-y-6">
                <div className="flex">
                  <Phone className="h-5 w-5 text-hotel-gold mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Téléphone</div>
                    <div className="text-muted-foreground">+221 77 123 45 67</div>
                  </div>
                </div>
                
                <div className="flex">
                  <Mail className="h-5 w-5 text-hotel-gold mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-muted-foreground">contact@hotelconsulting.sn</div>
                  </div>
                </div>
                
                <div className="flex">
                  <MapPin className="h-5 w-5 text-hotel-gold mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Adresse</div>
                    <div className="text-muted-foreground">123 Rue du Commerce, Dakar, Sénégal</div>
                  </div>
                </div>
                
                <div className="flex">
                  <Clock className="h-5 w-5 text-hotel-gold mr-3 flex-shrink-0" />
                  <div>
                    <div className="font-medium">Horaires</div>
                    <div className="text-muted-foreground">
                      Lundi - Vendredi: 9h - 18h<br />
                      Samedi: 10h - 14h
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-muted/60">
              <h2 className="text-xl font-bold mb-4">Audit gratuit</h2>
              <p className="text-muted-foreground mb-6">
                Demandez un audit gratuit de votre présence en ligne et recevez des recommandations personnalisées.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/contact?service=audit">Demander un audit</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
