# TerangaConsult - Site vitrine

Site vitrine de TerangaConsult, expert en consulting hôtelier et marketing digital au Sénégal. Solutions sur-mesure pour hôtels, lodges et maisons d'hôtes.

## Structure du projet

Le projet est organisé selon une architecture modulaire et maintenable :

```
src/
├── components/         # Composants réutilisables
│   ├── Header.tsx      # En-tête avec navigation
│   ├── Footer.tsx      # Pied de page
│   ├── sections/       # Sections de la landing page
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── ContactSection.tsx
│   │
│   └── ui/             # Composants UI réutilisables
│       └── BackToTop.tsx
│
├── pages/              # Pages du site
│   ├── LandingPage.tsx # Page d'accueil principale
│   ├── MentionsLegales.tsx
│   ├── Confidentialite.tsx
│   ├── Cgv.tsx
│   └── NotFound.tsx
│
├── hooks/              # Hooks personnalisés
│   └── useSmoothScroll.ts
│
├── lib/                # Utilitaires et constantes
│   └── constants.ts
│
├── netlify/functions/  # Fonctions serverless Netlify
│   └── sendMail.js
│
└── App.tsx             # Point d'entrée principal
```

## Fonctionnalités

- **Landing page unique** avec sections modulaires et facilement modifiables
- **Menu mobile** avec animation fluide en mode drawer (tiroir latéral)
- **Formulaire de contact** fonctionnel avec intégration Netlify Functions
- **Design responsive** optimisé pour mobile, tablette et desktop
- **Animation fluide** entre les sections avec smooth scroll
- **Pages légales** accessibles depuis le footer
- **Optimisation SEO** avec méta-tags et structure sémantique

## Technologies utilisées

- **React** - Bibliothèque front-end
- **TypeScript** - Typage statique pour JavaScript
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **React Router** - Navigation entre les pages
- **React Icons** - Icônes vectorielles
- **Netlify Functions** - Backend serverless pour le formulaire
- **Vite** - Build tool et serveur de développement

## Développement local

1. Cloner le dépôt
2. Installer les dépendances : `npm install`
3. Créer un fichier `.env` avec les variables requises (voir `.env.example`)
4. Démarrer le serveur de développement : `npm run dev`
5. Pour tester les fonctions Netlify : `npm run netlify`

## Déploiement

Le site est automatiquement déployé sur Netlify à chaque push sur la branche main.

## Crédits

- Design et développement : TerangaConsult
- Images : Tous droits réservés

## Licence

Tous droits réservés © 2024 TerangaConsult
