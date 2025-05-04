import React from "react";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

const MentionsLegales = () => (
  <>
    <Helmet>
      <title>Mentions légales - TerangaConsult</title>
      <meta name="description" content="Mentions légales du site TerangaConsult : éditeur, hébergeur, propriété intellectuelle, données personnelles et responsabilité." />
    </Helmet>
    <Layout>
      <main className="bg-white text-hotel-navy min-h-screen py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-playfair text-3xl md:text-4xl text-hotel-gold mb-8">Mentions légales</h1>
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">Éditeur du site</h2>
            <p>Ce site est édité par <strong>TerangaConsult</strong>, société de conseil en hôtellerie et marketing digital.<br />
            Adresse : 123 Rue du Commerce, Dakar, Sénégal<br />
            Téléphone : +221 77 123 45 67<br />
            Email : contact@terangaconsult.com</p>
          </section>
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">Directrice de la publication</h2>
            <p>Safiya Diop</p>
          </section>
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">Hébergement</h2>
            <p>Ce site est hébergé par Netlify, Inc.<br />
            2325 3rd Street, Suite 296, San Francisco, CA 94107, États-Unis<br />
            <a href="https://www.netlify.com" className="text-hotel-gold underline">www.netlify.com</a></p>
          </section>
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">Propriété intellectuelle</h2>
            <p>L'ensemble des contenus (textes, images, graphismes, logo, icônes, etc.) présents sur ce site sont la propriété exclusive de TerangaConsult, sauf mention contraire. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable de TerangaConsult.</p>
          </section>
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">Données personnelles</h2>
            <p>Les informations recueillies via les formulaires sont destinées exclusivement à TerangaConsult pour la gestion de vos demandes. Conformément à la loi, vous disposez d'un droit d'accès, de rectification et de suppression de vos données. Pour exercer ce droit, contactez-nous à l'adresse <a href="mailto:contact@terangaconsult.com" className="text-hotel-gold underline">contact@terangaconsult.com</a>.</p>
          </section>
          <section>
            <h2 className="font-semibold text-lg mb-2">Responsabilité</h2>
            <p>TerangaConsult s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, la responsabilité de TerangaConsult ne saurait être engagée en cas d'erreur, d'omission ou de résultat obtenu par l'usage de ces informations.</p>
          </section>
        </div>
      </main>
    </Layout>
  </>
);

export default MentionsLegales; 