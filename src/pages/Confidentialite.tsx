import React from "react";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

const Confidentialite = () => (
  <>
    <Helmet>
      <title>Politique de confidentialité - TerangaConsult</title>
      <meta name="description" content="Politique de confidentialité de TerangaConsult : collecte, utilisation, partage et protection de vos données personnelles." />
    </Helmet>
      <main className="bg-white text-primary min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-playfair text-3xl md:text-4xl text-secondary mb-8">Politique de confidentialité</h1>
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">Collecte des données</h2>
            <p>Nous collectons uniquement les données strictement nécessaires à la gestion de vos demandes (nom, email, téléphone, établissement, message). Ces informations sont recueillies via les formulaires présents sur le site.</p>
          </section>
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">Utilisation des données</h2>
            <p>Les données collectées sont utilisées exclusivement par TerangaConsult pour répondre à vos demandes, vous contacter ou vous envoyer des informations sur nos services. Elles ne sont jamais cédées ou vendues à des tiers.</p>
          </section>
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">Conservation des données</h2>
            <p>Vos données sont conservées pendant la durée strictement nécessaire au traitement de votre demande et à la relation commerciale. Vous pouvez demander leur suppression à tout moment.</p>
          </section>
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">Sécurité</h2>
            <p>Nous mettons en œuvre toutes les mesures techniques et organisationnelles appropriées pour protéger vos données contre la perte, l'accès non autorisé ou la divulgation.</p>
          </section>
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">Vos droits</h2>
            <p>
            Vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données. Vous pouvez également vous opposer ou limiter leur traitement. Pour exercer ces droits, contactez-nous à <a href="mailto:terangaconsult.com@gmail.com" className="text-secondary underline">terangaconsult.com@gmail.com</a>.
            </p>
          </section>
          <section>
            <h2 className="font-semibold text-lg mb-2">Contact</h2>
            <p>Pour toute question relative à la protection de vos données, vous pouvez nous écrire à <a href="mailto:terangaconsult.com@gmail.com" className="text-secondary underline">terangaconsult.com@gmail.com</a>.</p>
          </section>
        </div>
      </main>
  </>
);

export default Confidentialite; 