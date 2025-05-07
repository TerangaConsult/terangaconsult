# Guide de Migration - TerangaConsult

## Étapes de Migration vers une Landing Page Simple

### Phase 1: Préparation et Sauvegarde

1. **Sauvegarde du Projet Actuel**
   - Créer une branche Git dédiée à la refactorisation
   - Faire une copie de sauvegarde de l'ensemble du projet

2. **Préparation de l'Environnement**
   - Vérifier que tous les packages sont à jour
   - S'assurer que le système de build fonctionne correctement

### Phase 2: Création du Composant Landing Page

1. **Création du Nouveau Fichier**
   ```bash
   touch src/pages/LandingPage.tsx
   ```

2. **Structure Initiale**
   - Implémenter le squelette de base avec les sections définies dans `structure-landing-page.md`
   - Importer les icônes et dépendances nécessaires

3. **Réutilisation des Composants Existants**
   - Identifier les composants réutilisables dans le site actuel
   - Adapter les styles pour la nouvelle structure
   
### Phase 3: Migration du Contenu Essentiel

1. **Hero Section**
   - Extraire le contenu pertinent de la page d'accueil actuelle
   - Simplifier les messages et appels à l'action

2. **Section À Propos**
   - Condenser l'information de la page About
   - Sélectionner uniquement les éléments clés (mission, vision, chiffres)

3. **Section Services**
   - Extraire les informations essentielles des 3 services principaux
   - Simplifier les descriptions en conservant les points clés

4. **Processus de Travail**
   - Reprendre les 4 étapes du processus existant
   - Clarifier et simplifier chaque étape

5. **Témoignages**
   - Sélectionner les 2-3 témoignages les plus impactants
   - S'assurer qu'ils couvrent différents aspects des services

6. **Contact**
   - Simplifier le formulaire de contact actuel
   - Conserver uniquement les champs essentiels

### Phase 4: Nettoyage et Optimisation

1. **Simplification des Routes**
   - Modifier `App.tsx` pour supprimer les routes inutiles
   - Conserver uniquement les routes pour la landing page et les pages légales

2. **Suppression des Fichiers Inutiles**
   - Une fois la migration validée, supprimer les pages obsolètes
   - Conserver les composants réutilisables

3. **Optimisation des Assets**
   - Vérifier et optimiser les images utilisées
   - Supprimer les ressources non utilisées

### Phase 5: Tests et Déploiement

1. **Tests de Compatibilité**
   - Vérifier le rendu sur différents navigateurs
   - Assurer la compatibilité mobile (responsive)

2. **Tests Fonctionnels**
   - Vérifier que tous les liens fonctionnent correctement
   - Tester le formulaire de contact

3. **Déploiement**
   - Déployer la nouvelle version sur un environnement de staging
   - Après validation, déployer en production

## Considérations SEO

1. **Redirections**
   - Mettre en place des redirections 301 depuis les anciennes URLs vers la landing page
   - Exemple:
     ```
     /services -> /#services
     /a-propos -> /#about
     /portfolio -> /#testimonials
     /contact -> /#contact
     ```

2. **Mots-clés et Balises**
   - Conserver les mots-clés principaux dans le contenu
   - Maintenir des balises meta title et description optimisées
   - Assurer une structure de titres (h1, h2, h3) cohérente

## Plan d'Implémentation par Composant

### 1. Migration du Header
```tsx
// Extraire la partie essentielle du Header.tsx actuel
// Remplacer la navigation complexe par un simple CTA
```

### 2. Migration du Hero
```tsx
// Adapter le contenu de HeroSection.tsx
// Simplifier les messages et appels à l'action
```

### 3. Migration des Services
```tsx
// Fusionner le contenu de ServicesSection.tsx
// Extraire les points clés de Services.tsx
```

### 4. Migration des Témoignages
```tsx
// Sélectionner les meilleurs témoignages de TestimonialsSection.tsx
// Intégrer certains résultats de Portfolio.tsx comme preuves sociales
```

### 5. Migration du Formulaire de Contact
```tsx
// Simplifier le formulaire de Contact.tsx
// Conserver uniquement les champs essentiels et la logique d'envoi
```

## Liste des Fichiers à Conserver

1. Pages essentielles:
   - `src/pages/LandingPage.tsx` (nouveau)
   - `src/pages/MentionsLegales.tsx`
   - `src/pages/Confidentialite.tsx`
   - `src/pages/Cgv.tsx`
   - `src/pages/NotFound.tsx`

2. Composants de layout:
   - `src/components/layout/Layout.tsx` (adapté)
   - `src/components/layout/Footer.tsx` (simplifié)

3. Composants UI:
   - Tous les composants de `src/components/ui/`

## Liste des Fichiers à Supprimer (une fois la migration validée)

1. Pages obsolètes:
   - `src/pages/Index.tsx`
   - `src/pages/Services.tsx`
   - `src/pages/Portfolio.tsx`
   - `src/pages/About.tsx`
   - `src/pages/Contact.tsx`

2. Sections non utilisées:
   - Les sections qui ne sont pas réutilisées dans la landing page

## Suivi de la Migration

Utiliser ce tableau pour suivre la progression de la migration:

| Composant | Statut | Remarques |
|-----------|--------|-----------|
| Header    | À faire | |
| Hero      | À faire | |
| À propos  | À faire | |
| Services  | À faire | |
| Processus | À faire | |
| Témoignages | À faire | |
| Contact   | À faire | |
| Footer    | À faire | |
| App.tsx   | À faire | |

## Conclusion

Cette migration permettra de transformer un site web complexe en une landing page efficace, tout en conservant le contenu essentiel et l'identité visuelle de TerangaConsult. Ce guide peut être utilisé comme feuille de route pour mener à bien cette transformation, en assurant que tous les éléments clés sont correctement migrés et que l'expérience utilisateur est améliorée. 