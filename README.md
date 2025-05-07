# TerangaConsult - Site Web

## Présentation

Ce site web est une landing page optimisée pour TerangaConsult, cabinet de consulting hôtelier et marketing digital au Sénégal. La page a été conçue pour offrir une expérience utilisateur fluide et concentrer l'attention sur les services essentiels proposés par TerangaConsult.

## Structure du Site

Le site a été simplifié en une landing page unique avec plusieurs sections :

1. **Hero** - Présentation principale et appels à l'action
2. **À Propos** - Présentation concise de TerangaConsult et chiffres clés
3. **Services** - Les 3 services principaux avec description et points clés
4. **Processus** - Les 4 étapes de l'accompagnement client
5. **Témoignages** - Ce que disent les clients avec résultats chiffrés
6. **Contact** - Formulaire simplifié et informations de contact

Les pages légales (Mentions Légales, Politique de Confidentialité, CGV) sont accessibles depuis le footer.

## Fonctionnalités

- **Navigation fluide** - Défilement smooth scroll entre les sections
- **Formulaire de contact** - Intégré directement dans la landing page
- **Design responsive** - Optimisé pour tous les appareils
- **Bouton "Retour en haut"** - Pour faciliter la navigation sur mobile
- **Redirections** - Les anciennes URLs sont redirigées vers les sections correspondantes

## Technologies utilisées

- React
- TypeScript
- Tailwind CSS
- React Router
- React Helmet (pour le SEO)
- React Icons

## Installation et développement

1. Cloner le dépôt
   ```
   git clone [URL du dépôt]
   ```

2. Installer les dépendances
   ```
   npm install
   ```

3. Lancer le serveur de développement
   ```
   npm run dev
   ```

4. Construire pour la production
   ```
   npm run build
   ```

## Déploiement

Le site est configuré pour être déployé sur Netlify. Le fichier `netlify.toml` définit les redirections pour les anciennes URLs.

## Structure des fichiers principaux

- `src/pages/LandingPage.tsx` - Composant principal de la landing page
- `src/hooks/useSmoothScroll.ts` - Hook pour le défilement fluide
- `src/components/ui/BackToTop.tsx` - Composant de bouton "Retour en haut"
- `netlify.toml` - Configuration Netlify et redirections

## Maintenance

Pour mettre à jour le contenu du site, modifiez directement le fichier `src/pages/LandingPage.tsx`. Chaque section est clairement délimitée par des commentaires pour faciliter la maintenance.

## Contact

Pour toute question concernant le site, contactez l'équipe de développement à [email@example.com].

---

© 2024 TerangaConsult
