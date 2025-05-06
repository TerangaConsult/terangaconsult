# TerangaConsult - Consulting hôtelier et marketing digital au Sénégal

## Présentation du projet

**URL**: (à compléter après déploiement)

Ce projet est un site vitrine pour TerangaConsult, cabinet de conseil spécialisé dans l'hôtellerie et le marketing digital au Sénégal. Il présente les services, réalisations, valeurs et permet de contacter l'équipe pour un accompagnement sur-mesure.

## Technologies utilisées
- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Déploiement

Le site peut être déployé sur Netlify, Vercel ou tout autre hébergeur compatible avec les applications React/Vite.

## Formulaire de contact avec Netlify Functions

1. Créez le dossier `/netlify/functions/` à la racine du projet.
2. Ajoutez un fichier `sendMail.js` (voir exemple ci-dessous).
3. Installez `nodemailer` dans le projet :
   ```bash
   npm install nodemailer
   ```
4. Configurez un mot de passe d'application Gmail (voir documentation Google).
5. Dans votre formulaire React, envoyez les données en POST vers `/.netlify/functions/sendMail`.
6. Déployez sur Netlify.

**Exemple de fonction serverless :**
```js
const nodemailer = require('nodemailer');

exports.handler = async function(event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Méthode non autorisée' };
  }
  const { nom, email, message } = JSON.parse(event.body);

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'votre-adresse@gmail.com',
      pass: 'votre-mot-de-passe-application',
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'votre-adresse@gmail.com',
      subject: `Nouveau message de ${nom}`,
      text: message,
    });
    return { statusCode: 200, body: JSON.stringify({ success: true }) };
  } catch (err) {
    return { statusCode: 500, body: JSON.stringify({ error: err.message }) };
  }
};
```

**N'oubliez pas de remplacer les emails et mots de passe par vos informations.**

Pour toute question, contactez l'équipe TerangaConsult.
