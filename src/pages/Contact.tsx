import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaCalendarAlt, FaCheckCircle, FaChevronDown, FaChevronUp, FaUser, FaHotel, FaRegBuilding, FaStar, FaChartLine, FaUserGraduate, FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

const etablissements = [
  { value: "Hôtel", label: "Hôtel", icon: <FaHotel style={{color:'#F3F4F6'}} /> },
  { value: "Lodge", label: "Lodge", icon: <FaRegBuilding style={{color:'#F3F4F6'}} /> },
  { value: "Maison d'hôtes", label: "Maison d'hôtes", icon: <FaRegBuilding style={{color:'#F3F4F6'}} /> }
];
const services = [
  { value: "strategie", label: "Stratégie digitale & commerciale", icon: <FaChartLine style={{color:'#F3F4F6'}} /> },
  { value: "ereputation", label: "Optimisation de la e-réputation", icon: <FaStar style={{color:'#F3F4F6'}} /> },
  { value: "formation", label: "Formation & accompagnement", icon: <FaUserGraduate style={{color:'#F3F4F6'}} /> }
];
const faqs = [
  {
    question: "Quels types d'établissements accompagnez-vous ?",
    answer: "Nous accompagnons hôtels, lodges, maisons d'hôtes et tout établissement du secteur de l'hospitalité, quelle que soit leur taille.",
    icon: <FaHotel style={{color:'#F3F4F6'}} />
  },
  {
    question: "Quels services proposez-vous ?",
    answer: "Stratégie digitale, e-réputation, formation, accompagnement sur-mesure, audits, coaching et plus encore.",
    icon: <FaChartLine style={{color:'#F3F4F6'}} />
  },
  {
    question: "Comment se déroule un accompagnement ?",
    answer: "Après un diagnostic, nous définissons ensemble un plan d'action, puis nous vous accompagnons à chaque étape, avec suivi et ajustements réguliers.",
    icon: <FaUserGraduate style={{color:'#F3F4F6'}} />
  }
];
const temoignages = [
  {
    nom: "Fatou S.",
    citation: "Un accompagnement sur-mesure, des résultats concrets et une équipe à l'écoute.",
    etab: "Baobab Resort",
    photo: "/placeholder.svg"
  },
  {
    nom: "Jean M.",
    citation: "L'équipe TerangaConsult a transformé notre présence digitale.",
    etab: "Safari Lodge",
    photo: "/placeholder.svg"
  }
];

// Définition des types pour le formulaire, les erreurs et les champs touchés
interface ContactForm {
  nom: string;
  email: string;
  tel: string;
  etab: string;
  typeEtab: string;
  service: string;
  message: string;
  newsletter: boolean;
}
type ContactFormErrors = Partial<Record<keyof ContactForm, string>>;
type ContactFormTouched = Partial<Record<keyof ContactForm, boolean>>;

const Contact = () => {
  const [form, setForm] = useState<ContactForm>({
    nom: "",
    email: "",
    tel: "",
    etab: "",
    typeEtab: etablissements[0].value,
    service: services[0].value,
    message: "",
    newsletter: false
  });
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<ContactFormTouched>({});
  const [submitted, setSubmitted] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);
  const [tIndex, setTIndex] = useState(0);
  const nextT = () => setTIndex((tIndex + 1) % temoignages.length);
  const prevT = () => setTIndex((tIndex - 1 + temoignages.length) % temoignages.length);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const validate = () => {
    const newErrors: any = {};
    if (!form.nom) newErrors.nom = "Nom requis";
    if (!form.email || !/^[^@]+@[^@]+\.[^@]+$/.test(form.email)) newErrors.email = "Email valide requis";
    if (!form.tel) newErrors.tel = "Téléphone requis";
    if (!form.etab) newErrors.etab = "Établissement requis";
    if (!form.message) newErrors.message = "Message requis";
    return newErrors;
  };
  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
    setTouched({ ...touched, [name]: true });
    setErrors(validate());
    if (name === "message") setCharCount(value.length);
  };
  const handleBlur = e => {
    setTouched({ ...touched, [e.target.name]: true });
    setErrors(validate());
  };
  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      fetch('/.netlify/functions/sendMail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nom: form.nom, email: form.email, message: form.message }),
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setSuccess(true);
            setForm({
              nom: "",
              email: "",
              tel: "",
              etab: "",
              typeEtab: etablissements[0].value,
              service: services[0].value,
              message: "",
              newsletter: false
            });
            setCharCount(0);
            setTouched({});
            setTimeout(() => setSuccess(false), 3000);
          } else {
            setError('Erreur lors de l’envoi');
          }
        })
        .catch(() => setError('Erreur lors de l’envoi'));
    }
  };
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("contact@hotelconsulting.sn");
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <>
      <Helmet>
        <title>Contact - TerangaConsult</title>
        <meta name="description" content="Contactez TerangaConsult pour toute demande de conseil, d'accompagnement ou d'audit digital hôtelier au Sénégal." />
      </Helmet>
      <Layout>
        {/* 1. En-tête immersif */}
        <section className="relative bg-hotel-navy text-white min-h-[40vh] flex flex-col items-center justify-center overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative z-10 text-center py-16"
          >
            <h1 className="font-playfair text-4xl md:text-5xl text-hotel-gold mb-4 tracking-tight drop-shadow-lg">Nous contacter</h1>
            <p className="text-lg md:text-xl font-light text-white/90 max-w-2xl mx-auto mb-2">
              Échangeons sur vos projets hôteliers et révélons ensemble le potentiel de votre établissement.
            </p>
            {/* Séparateur doré animé */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mx-auto h-1 w-32 bg-hotel-gold rounded-full origin-left"
            />
          </motion.div>
          <div className="absolute top-0 left-0 w-full h-32 bg-hotel-gold/10 blur-2xl opacity-40 pointer-events-none" />
        </section>
        {/* 2. Layout principal innovant */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* 3. Formulaire premium */}
            <motion.form
              onSubmit={handleSubmit}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.12 } }
              }}
              className="bg-white/90 rounded-2xl shadow-xl border border-hotel-gold/20 p-8 flex flex-col gap-6"
            >
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="flex items-center gap-2 bg-hotel-gold/10 border border-hotel-gold text-hotel-gold rounded-lg px-4 py-3 mb-2 font-serif"
                  >
                    <FaCheckCircle className="text-2xl" />
                    Message envoyé avec succès !
                  </motion.div>
                )}
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="flex items-center gap-2 bg-red-100 border border-red-400 text-red-600 rounded-lg px-4 py-3 mb-2 font-serif"
                  >
                    Erreur lors de l'envoi
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Nom et prénom */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="flex flex-col gap-1"
              >
                <label className="font-serif text-hotel-navy mb-1 flex items-center gap-2">
                  <FaUser className="text-hotel-gold" /> Nom et prénom
                </label>
                <input
                  name="nom"
                  value={form.nom}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full rounded-lg px-4 py-2 bg-hotel-bg-light border-2 transition-all duration-200 focus:border-hotel-gold focus:bg-white ${errors.nom && touched['nom'] ? 'border-red-400' : 'border-transparent'}`}
                  placeholder="Votre nom complet"
                />
                {errors.nom && touched['nom'] && <span className="text-red-500 text-xs">{errors.nom}</span>}
              </motion.div>
              {/* Email */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="flex flex-col gap-1"
              >
                <label className="font-serif text-hotel-navy mb-1 flex items-center gap-2">
                  <FaEnvelope className="text-hotel-gold" /> Email
                </label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full rounded-lg px-4 py-2 bg-hotel-bg-light border-2 transition-all duration-200 focus:border-hotel-gold focus:bg-white ${errors.email && touched['email'] ? 'border-red-400' : 'border-transparent'}`}
                  placeholder="Votre email"
                  type="email"
                />
                {errors.email && touched['email'] && <span className="text-red-500 text-xs">{errors.email}</span>}
              </motion.div>
              {/* Téléphone */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="flex flex-col gap-1"
              >
                <label className="font-serif text-hotel-navy mb-1 flex items-center gap-2">
                  <FaPhone className="text-hotel-gold" /> Téléphone
                </label>
                <input
                  name="tel"
                  value={form.tel}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full rounded-lg px-4 py-2 bg-hotel-bg-light border-2 transition-all duration-200 focus:border-hotel-gold focus:bg-white ${errors.tel && touched['tel'] ? 'border-red-400' : 'border-transparent'}`}
                  placeholder="Votre téléphone"
                  type="tel"
                />
                {errors.tel && touched['tel'] && <span className="text-red-500 text-xs">{errors.tel}</span>}
              </motion.div>
              {/* Établissement */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="flex flex-col gap-1"
              >
                <label className="font-serif text-hotel-navy mb-1 flex items-center gap-2">
                  <FaRegBuilding className="text-hotel-gold" /> Nom de l'établissement
                </label>
                <input
                  name="etab"
                  value={form.etab}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full rounded-lg px-4 py-2 bg-hotel-bg-light border-2 transition-all duration-200 focus:border-hotel-gold focus:bg-white ${errors.etab && touched['etab'] ? 'border-red-400' : 'border-transparent'}`}
                  placeholder="Nom de l'établissement"
                />
                {errors.etab && touched['etab'] && <span className="text-red-500 text-xs">{errors.etab}</span>}
              </motion.div>
              {/* Type d'établissement */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="flex flex-col gap-1"
              >
                <label className="font-serif text-hotel-navy mb-1 flex items-center gap-2">
                  <FaHotel className="text-hotel-gold" /> Type d'établissement
                </label>
                <select
                  name="typeEtab"
                  value={form.typeEtab}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-2 bg-hotel-bg-light border-2 border-transparent focus:border-hotel-gold focus:bg-white transition"
                >
                  {etablissements.map(e => (
                    <option key={e.value} value={e.value}>{e.label}</option>
                  ))}
                </select>
              </motion.div>
              {/* Service souhaité */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="flex flex-col gap-1"
              >
                <label className="font-serif text-hotel-navy mb-1 flex items-center gap-2">
                  <FaStar className="text-hotel-gold" /> Service souhaité
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full rounded-lg px-4 py-2 bg-hotel-bg-light border-2 border-transparent focus:border-hotel-gold focus:bg-white transition"
                >
                  {services.map(s => (
                    <option key={s.value} value={s.value}>{s.label}</option>
                  ))}
                </select>
              </motion.div>
              {/* Message */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="flex flex-col gap-1"
              >
                <label className="font-serif text-hotel-navy mb-1 flex items-center gap-2">
                  <FaEnvelope className="text-hotel-gold" /> Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full rounded-lg px-4 py-2 bg-hotel-bg-light border-2 transition-all duration-200 focus:border-hotel-gold focus:bg-white ${errors.message && touched['message'] ? 'border-red-400' : 'border-transparent'}`}
                  placeholder="Votre message"
                  rows={4}
                  maxLength={500}
                />
                <div className="flex justify-between items-center text-xs mt-1">
                  {errors.message && touched['message'] && <span className="text-red-500">{errors.message}</span>}
                  <span className={`ml-auto ${charCount > 450 ? 'text-hotel-gold font-bold' : 'text-hotel-navy/50'}`}>{charCount}/500</span>
                </div>
              </motion.div>
              {/* Newsletter */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={form.newsletter}
                  onChange={handleChange}
                  className="accent-hotel-gold w-5 h-5 rounded border-2 border-hotel-gold focus:ring-2 focus:ring-hotel-gold transition"
                  id="newsletter"
                />
                <label htmlFor="newsletter" className="text-hotel-navy text-sm font-serif">Je souhaite recevoir la newsletter TerangaConsult</label>
              </motion.div>
              {/* Bouton d'envoi */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, boxShadow: "0 4px 24px #c4a77544" }}
                whileTap={{ scale: 0.97 }}
                className="mt-2 px-8 py-3 rounded-full bg-hotel-gold text-hotel-navy font-sans text-lg font-bold shadow-lg border-2 border-hotel-gold transition-all duration-300 focus-visible:outline-none hover:bg-hotel-navy hover:text-hotel-gold hover:border-hotel-navy"
                style={{ fontFamily: 'Noto Sans, ui-sans-serif, system-ui, sans-serif' }}
              >
                Envoyer
              </motion.button>
            </motion.form>
            {/* 5. Section d'informations de contact adjacente */}
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="bg-hotel-navy/90 text-white rounded-2xl shadow-lg border" style={{borderColor:'#F3F4F6', padding:'2rem'}}>
                <div className="flex items-center gap-3">
                  <FaEnvelope style={{color:'#F3F4F6', fontSize:'1.25rem'}} />
                  <span className="font-serif">Email :</span>
                  <button
                    onClick={handleCopy}
                    className="ml-2 underline underline-offset-2 hover:text-white transition-colors" style={{color:'#F3F4F6'}} title="Copier l'email"
                  >
                    contact@hotelconsulting.sn
                  </button>
                  <AnimatePresence>
                    {copied && (
                      <motion.span
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        className="ml-2 text-xs" style={{color:'#F3F4F6'}}
                      >
                        Copié !
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
                <div className="flex items-center gap-3">
                  <FaPhone style={{color:'#F3F4F6', fontSize:'1.25rem'}} />
                  <span className="font-serif">Téléphone :</span>
                  <a href="tel:+221771234567" className="ml-2 underline underline-offset-2 hover:text-white transition-colors" style={{color:'#F3F4F6'}}>+221 77 123 45 67</a>
                </div>
                <div className="flex items-center gap-3">
                  <FaMapMarkerAlt style={{color:'#F3F4F6', fontSize:'1.25rem'}} />
                  <span className="font-serif">Adresse :</span>
                  <span className="ml-2">123 Rue du Commerce, Dakar, Sénégal</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCalendarAlt style={{color:'#F3F4F6', fontSize:'1.25rem'}} />
                  <span className="font-serif">Horaires :</span>
                  <span className="ml-2">Lun - Ven : 9h - 18h</span>
                </div>
                {/* Mini-carte stylisée */}
                <div className="rounded-2xl overflow-hidden shadow border-2" style={{borderColor:'#F3F4F6', marginTop:'1rem'}}>
                  <iframe
                    title="Carte"
                    src="https://www.openstreetmap.org/export/embed.html?bbox=-17.467,14.692,-17.467,14.692&layer=mapnik"
                    className="w-full h-40 grayscale contrast-125"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </motion.div>
              {/* 6. Section rendez-vous */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg border border-hotel-gold/30 p-8 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3 mb-2">
                  <FaCalendarAlt className="text-hotel-gold text-xl" />
                  <span className="font-serif text-hotel-navy font-bold">Prendre rendez-vous</span>
                </div>
                <a
                  href="https://calendly.com/terangaconsult-com/rendez-vous-decouverte-terengaconsult"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 rounded-full bg-hotel-navy text-white font-bold shadow border-2 border-hotel-navy text-base transition-all duration-300 focus-visible:outline-none hover:bg-hotel-gold hover:text-hotel-navy hover:border-hotel-gold hover:-translate-y-1 hover:shadow-2xl"
                >
                  Accéder au calendrier
                </a>
                <div className="text-hotel-navy/60 text-sm mt-2">Choisissez une plage horaire pour un rendez-vous en présentiel ou en visio.</div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* 7. Section FAQ contextuelle */}
        <section className="py-16 bg-[#f7f8fa]">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-playfair text-2xl text-hotel-gold mb-8 text-center">Questions fréquentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={false}
                  animate={faqOpen === i ? { backgroundColor: "#fffbe6" } : { backgroundColor: "#f7f8fa" }}
                  className="rounded-xl border border-hotel-gold/30 shadow-sm"
                >
                  <button
                    className="w-full flex items-center justify-between px-6 py-4 font-serif text-hotel-navy text-lg focus:outline-none"
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    aria-expanded={faqOpen === i}
                    aria-controls={`faq-content-${i}`}
                  >
                    <span className="flex items-center gap-3">{faq.icon}{faq.question}</span>
                    {faqOpen === i ? <FaChevronUp className="text-hotel-gold" /> : <FaChevronDown className="text-hotel-gold" />}
                  </button>
                  <AnimatePresence>
                    {faqOpen === i && (
                      <motion.div
                        id={`faq-content-${i}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="px-6 pb-4 text-hotel-navy/80"
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* 9. Réseaux sociaux */}
        <section className="py-10 bg-white">
          <div className="max-w-4xl mx-auto flex flex-col items-center gap-4">
            <h3 className="font-playfair text-xl text-hotel-gold mb-2">Retrouvez-nous sur les réseaux</h3>
            <div className="flex gap-6">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-hotel-gold hover:text-hotel-navy transition-all text-3xl">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-hotel-gold hover:text-hotel-navy transition-all text-3xl">
                <FaInstagram />
              </a>
            </div>
          </div>
        </section>
        {/* 10. Témoignages clients */}
        <section className="py-16 bg-hotel-navy text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-playfair text-2xl text-hotel-gold mb-8 text-center">Ils nous font confiance</h2>
            <div className="flex items-center justify-center gap-4 mb-8">
              <button
                onClick={prevT}
                aria-label="Témoignage précédent"
                className="p-3 rounded-full bg-hotel-gold text-hotel-navy hover:bg-white hover:text-hotel-gold transition-all shadow-lg"
              >
                <FaChevronLeft />
              </button>
              <div className="relative w-full max-w-xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={tIndex}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -40 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/10 rounded-2xl p-8 shadow-lg border border-hotel-gold/40 text-center"
                  >
                    <div className="italic text-lg mb-2">{temoignages[tIndex].citation}</div>
                    <div className="flex items-center justify-center gap-2 mt-4">
                      <img src={temoignages[tIndex].photo} alt={temoignages[tIndex].nom} className="w-10 h-10 rounded-full border-2 border-hotel-gold" />
                      <div>
                        <div className="text-hotel-gold font-serif">{temoignages[tIndex].nom}</div>
                        <div className="text-xs text-white/60">{temoignages[tIndex].etab}</div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
              <button
                onClick={nextT}
                aria-label="Témoignage suivant"
                className="p-3 rounded-full bg-hotel-gold text-hotel-navy hover:bg-white hover:text-hotel-gold transition-all shadow-lg"
              >
                <FaChevronRight />
              </button>
            </div>
            <div className="flex gap-2 justify-center mt-2">
              {temoignages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTIndex(i)}
                  className={`w-3 h-3 rounded-full border-2 ${tIndex === i ? "bg-hotel-gold border-hotel-gold" : "bg-white border-hotel-gold/40"} transition-all`}
                  aria-label={`Aller au témoignage ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </section>
        {/* 11. CTA final contextualisé */}
        <section className="py-16 bg-gradient-to-r from-hotel-navy to-hotel-gold/30 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-playfair text-2xl text-hotel-gold mb-6">Découvrez nos expertises et réalisations</h2>
            <p className="text-white/90 mb-8">Explorez nos services ou notre portfolio pour voir comment nous pouvons transformer votre établissement.</p>
            <div className="flex justify-center gap-4">
              <a
                href="/services"
                className="inline-block font-sans text-base rounded-full transition-all duration-300"
                style={{
                  background: '#f7c873',
                  color: '#fff',
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  border: 'none',
                  boxShadow: 'none',
                  fontFamily: 'Noto Sans, ui-sans-serif, system-ui, sans-serif',
                }}
              >
                Nos services
              </a>
              <a
                href="/portfolio"
                className="inline-block font-sans text-base rounded-full transition-all duration-300"
                style={{
                  background: '#1A2341',
                  color: '#fff',
                  padding: '0.75rem 2rem',
                  borderRadius: '9999px',
                  border: 'none',
                  boxShadow: 'none',
                  fontFamily: 'Noto Sans, ui-sans-serif, system-ui, sans-serif',
                }}
              >
                Portfolio
              </a>
            </div>
          </motion.div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;