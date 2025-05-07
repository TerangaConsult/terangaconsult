# Plan de Refactorisation du Site Web de TerangaConsult

## Analyse de la Structure Actuelle

### Pages Existantes
1. **Index** (Page d'accueil)
   - Hero section avec présentation générale
   - Section "Pourquoi choisir notre cabinet"
   - Section "Nos expertises"
   - Témoignages clients
   - Partenaires
   - Formulaire de contact simple

2. **Services**
   - Présentation détaillée des services
   - Slider des différents services
   - Processus d'accompagnement
   - Formulaire de demande de devis

3. **Portfolio**
   - Présentation des réalisations
   - Études de cas

4. **About**
   - Présentation de l'équipe
   - Valeurs de l'entreprise
   - Histoire et vision
   - Expertises
   - Témoignages
   - Partenaires

5. **Contact**
   - Formulaire de contact détaillé
   - Informations de contact

6. **Pages Légales**
   - Mentions Légales
   - Politique de Confidentialité
   - CGV

## Problématique

La structure actuelle est trop complexe et fragmentée. L'information est dispersée sur de nombreuses pages, ce qui peut nuire à l'expérience utilisateur et à la conversion. Une landing page unique et bien structurée permettrait de :
- Simplifier le parcours utilisateur
- Concentrer l'attention sur les éléments essentiels
- Améliorer la conversion
- Faciliter la maintenance du site

## Proposition de Structure pour la Landing Page

### 1. Hero Section
- Message principal clair et impactant
- Call-to-action principal (demande d'audit gratuit)
- Visuel attractif d'un hôtel au Sénégal

### 2. À Propos (Concis)
- Présentation brève de TerangaConsult
- Vision et positionnement unique
- Chiffres clés (50 clients, 30 hôtels accompagnés)

### 3. Services (Condensés)
- Présentation des 3 services principaux :
  - Stratégie digitale & commerciale
  - Optimisation de la e-réputation
  - Formation & accompagnement
- Points clés pour chaque service 
- Un seul CTA pour tous les services

### 4. Processus de Travail
- Les 4 étapes simplifiées :
  1. Audit & Diagnostic
  2. Stratégie personnalisée
  3. Mise en œuvre
  4. Suivi & Optimisation

### 5. Témoignages Clients
- 2-3 témoignages impactants avec photo
- Résultats chiffrés mis en avant

### 6. Formulaire de Contact
- Formulaire simplifié
- CTA clair
- Informations de contact essentielles

### 7. Footer
- Liens légaux obligatoires
- Réseaux sociaux
- Contact rapide

## Éléments à Supprimer ou Simplifier

### Pages à Supprimer
- Page Services (intégrer le contenu essentiel dans la landing)
- Page Portfolio (intégrer quelques exemples dans les témoignages)
- Page About (intégrer l'essentiel dans la section À Propos condensée)

### Éléments à Conserver
- Les pages légales obligatoires (accessibles depuis le footer)
- Le formulaire de contact (simplifié)
- Les témoignages clés
- Les services principaux (présentés de manière concise)

## Plan d'Action pour la Refactorisation

1. **Phase 1: Création de la Landing Page**
   - Développer la nouvelle structure HTML/CSS
   - Adapter les composants existants pour la landing page
   - Intégrer le contenu essentiel des autres pages

2. **Phase 2: Optimisation UX/UI**
   - Simplifier la navigation
   - Améliorer les appels à l'action
   - Optimiser le formulaire de contact

3. **Phase 3: Migration et Finalisation**
   - Rediriger les anciennes URLs vers la landing page
   - Conserver uniquement les pages légales
   - Tests et optimisations finales

## Recommandations Techniques

1. **Structure React**
   - Créer un composant unique `LandingPage.tsx`
   - Subdiviser en sous-composants pour chaque section
   - Simplifier les routes dans `App.tsx`

2. **Style et UI**
   - Conserver l'identité visuelle existante
   - Privilégier une mise en page verticale fluide
   - Optimiser pour mobile

3. **Performance**
   - Réduire le nombre de requêtes et de composants
   - Optimiser les images
   - Lazy loading pour les éléments non critiques

## Conclusion

Cette refactorisation permettra de transformer un site web complexe en une landing page efficace et convertissante. La simplification de la structure facilitera la maintenance tout en améliorant l'expérience utilisateur. Le contenu sera plus concentré sur l'essentiel, mettant en avant les points forts de TerangaConsult pour maximiser les conversions. 