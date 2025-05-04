# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/a67f8cab-9c16-47b4-8fa4-7ccaa30bfb95

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/a67f8cab-9c16-47b4-8fa4-7ccaa30bfb95) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/a67f8cab-9c16-47b4-8fa4-7ccaa30bfb95) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

## Formulaire de contact avec Nodemailer (Netlify Functions)

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

Pour toute question, contactez le développeur du projet.
