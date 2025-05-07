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
        'white': '#ffffff',
        'black': '#000000',

        'primary': {
          DEFAULT: '#145374',
          light: '#e8f1f5',
          dark: '#0d3b54',
        },
        'secondary': {
          DEFAULT: '#f0c04c',
          light: '#f7e3a0',
        },
        'accent': {
          DEFAULT: '#e8603c',
        },
        
        'text': {
          primary: '#2d4154',
          secondary: '#7e8a97',
          inverted: '#ffffff',
          light: '#a9b6c3'
        },
        
        'background': {
          default: '#fafbfc',
          alt: '#f0f4f7',
          white: '#ffffff',
        },
        
        'border': '#e2e8f0',
        
        'success': '#00845d',
        'warning': '#f0c04c',
        'destructive': '#e8603c',  // Mappé sur accent.DEFAULT
        'info': '#145374',          // Mappé sur primary.DEFAULT
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