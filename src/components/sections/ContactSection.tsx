import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Logique d'envoi du formulaire
      fetch('/.netlify/functions/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          nom, 
          email, 
          message, 
          subject: "Demande de contact via la landing page TerangaConsult" 
        }),
      })
        .then(response => response.json())
        .then(data => {
          if (data.success) {
            setSuccess(true);
            setNom("");
            setEmail("");
            setMessage("");
          } else {
            setError("Une erreur est survenue. Veuillez réessayer.");
          }
        })
        .catch(err => {
          setError("Une erreur est survenue. Veuillez réessayer.");
        });
    } catch (err) {
      setError("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-hotel-navy text-center mb-8">
            Contactez-nous
          </h2>
          <p className="text-center text-hotel-navy/70 mb-12 max-w-2xl mx-auto">
            Prêt à transformer votre établissement ? Contactez-nous pour un audit gratuit ou un devis personnalisé.
          </p>
          
          <div className="bg-hotel-navy/5 p-8 rounded-lg">
            {success ? (
              <div className="bg-green-100 text-green-800 p-4 rounded-lg text-center">
                Votre message a bien été envoyé. Nous vous contacterons dans les plus brefs délais.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-hotel-navy">Nom</label>
                  <input 
                    type="text" 
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    required
                    className="w-full p-3 border border-hotel-navy/20 rounded-lg" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-hotel-navy">Email</label>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full p-3 border border-hotel-navy/20 rounded-lg" 
                  />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="block text-hotel-navy">Message</label>
                  <textarea 
                    rows={4} 
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full p-3 border border-hotel-navy/20 rounded-lg"
                  ></textarea>
                </div>
                {error && (
                  <div className="md:col-span-2 text-red-500">
                    {error}
                  </div>
                )}
                <div className="md:col-span-2">
                  <button type="submit" className="bg-hotel-gold text-hotel-navy px-8 py-3 rounded-lg w-full md:w-auto">
                    Envoyer ma demande
                  </button>
                </div>
              </form>
            )}
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center mt-12 gap-8">
            <div>
              <div className="text-xl font-bold text-hotel-navy mb-2">TerangaConsult</div>
              <div className="text-hotel-navy/70">contact@terangaconsult.com</div>
              <div className="text-hotel-navy/70">+221 77 123 45 67</div>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-hotel-navy text-2xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-hotel-navy text-2xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-hotel-navy text-2xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection; 