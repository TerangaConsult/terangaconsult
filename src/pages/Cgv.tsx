import React from "react";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

const Cgv = () => (
  <>
    <Helmet>
      <title>Conditions générales de vente - TerangaConsult</title>
      <meta name="description" content="Conditions générales de vente de TerangaConsult : prestations, tarifs, responsabilité, propriété intellectuelle et litiges." />
    </Helmet>
      <main className="bg-white text-primary min-h-screen pt-32 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="font-playfair text-3xl md:text-4xl text-secondary mb-8">Conditions générales</h1>
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">Objet</h2>
            <p>Les présentes conditions générales régissent les prestations de conseil en hôtellerie et marketing digital proposées par TerangaConsult.</p>
          </section>
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">Prestations</h2>
            <p>Les prestations sont définies dans le devis accepté par le client. Toute demande supplémentaire fera l'objet d'un avenant.</p>
          </section>
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">Tarifs et paiement</h2>
            <p>Les tarifs sont indiqués en euros ou francs CFA, hors taxes. Le paiement s'effectue selon les modalités précisées sur le devis (acompte, solde, échéances). Tout retard de paiement pourra entraîner des pénalités.</p>
          </section>
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">Responsabilité</h2>
            <p>TerangaConsult s'engage à fournir ses prestations avec diligence et professionnalisme. Sa responsabilité ne saurait être engagée en cas de force majeure ou de résultats non garantis dépendant de facteurs extérieurs.</p>
          </section>
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">Propriété intellectuelle</h2>
            <p>Les livrables réalisés restent la propriété de TerangaConsult jusqu'au paiement complet. Toute reproduction ou diffusion sans autorisation est interdite.</p>
          </section>
          <section className="mb-8">
            <h2 className="font-semibold text-lg mb-2">Données personnelles</h2>
            <p>Les données collectées sont traitées conformément à la politique de confidentialité du site. Le client dispose d'un droit d'accès, de rectification et de suppression de ses données.</p>
          </section>
          <section>
            <h2 className="font-semibold text-lg mb-2">Litiges</h2>
            <p>En cas de litige, une solution amiable sera recherchée. À défaut, les tribunaux de Dakar seront compétents.</p>
          </section>
        </div>
      </main>
  </>
);

export default Cgv; 