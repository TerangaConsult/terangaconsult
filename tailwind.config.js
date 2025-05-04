module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Noto Sans', 'system-ui', 'sans-serif'],
        'serif': ['Playfair Display', 'serif'],
      },
      colors: {
        // Structure traditionnelle pour compatibilité
        'hotel-navy': '#145374',    // Bleu océan plus vif
        'hotel-blue': '#e8f1f5',    // Bleu très pâle, comme le ciel sénégalais
        'hotel-gold': '#f0c04c',    // Or ensoleillé, comme les plages
        'hotel-bg': '#fafbfc',      // Blanc cassé très subtil
        'hotel-bg-light': '#f0f4f7', // Bleu ultra clair
        'hotel-text': '#2d4154',    // Bleu-gris foncé pour le texte
        'hotel-accent': '#e8603c',  // Terracotta/orange, comme la terre sénégalaise
        'white': '#ffffff',
        
        // Palette Sénégal inspirée - couleurs vibrantes mais professionnelles
        'senegal': {
          // Couleurs principales
          'blue': '#145374',        // Bleu océan, comme les côtes sénégalaises
          'sand': '#f0c04c',        // Doré comme les plages de sable
          'terracotta': '#e8603c',  // Terre rouge/orange typique du Sénégal
          'green': '#00845d',       // Vert comme la végétation
          
          // Nuances et compléments
          'blue-light': '#e8f1f5',  // Bleu très clair
          'blue-dark': '#0d3b54',   // Bleu plus profond
          'sand-light': '#f7e3a0',  // Sable pâle
          'green-light': '#4cb69f', // Vert plus pâle
          
          // Neutres
          'dark': '#2d4154',        // Pour le texte principal
          'gray': '#7e8a97',        // Gris moyen
          'light': '#f0f4f7',       // Gris très clair
          'white': '#ffffff',       // Blanc pur
        },
        
        // Couleurs fonctionnelles
        'success': '#00845d',       // Vert sénégalais
        'warning': '#f0c04c',       // Or sénégalais
        'error': '#e8603c',         // Terracotta
        'info': '#145374',          // Bleu océan
        
        // Couleurs système / UI
        'background': {
          'light': '#ffffff',
          'DEFAULT': '#fafbfc',
          'dark': '#f0f4f7'
        },
        'text': {
          'primary': '#2d4154',
          'secondary': '#7e8a97',
          'light': '#a9b6c3'
        },
        'border': '#e2e8f0',
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.05)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
      },
      borderRadius: {
        'DEFAULT': '0.25rem',
        'sm': '0.125rem',
        'md': '0.375rem',
        'lg': '0.5rem'
      },
      spacing: {
        'content': '1200px',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};