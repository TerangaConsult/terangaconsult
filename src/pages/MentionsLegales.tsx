
import React from 'react';
import Layout from '@/components/layout/Layout';

const MentionsLegales = () => {
  return (
    <Layout>
      <div className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Mentions légales</h1>
          
          <div className="prose prose-slate max-w-none">
            <p>
              Cet espace est prêt à accueillir vos mentions légales, qui pourront être ajoutées 
              depuis vos documents Markdown.
            </p>
            
            <h2>Informations générales</h2>
            <p>
              HotelierConsulting
              <br />
              Adresse à compléter
              <br />
              Contact: email@example.com
            </p>
            
            <h2>Propriété intellectuelle</h2>
            <p>
              L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle.
            </p>
            
            <h2>Données personnelles</h2>
            <p>
              Cette section contiendra les informations relatives à la collection et au traitement des données personnelles.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MentionsLegales;
