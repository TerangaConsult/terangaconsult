import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    // Fonction pour gérer les clics sur les liens d'ancrage
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (!anchor) return;
      
      const href = anchor.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
          
          // Ajouter le hash à l'URL sans reload
          history.pushState(null, '', href);
        }
      }
    };
    
    // Ajouter l'écouteur d'événement
    document.addEventListener('click', handleAnchorClick);
    
    // Nettoyer l'écouteur d'événement
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);
  
  // Gérer les liens d'ancrage lors du chargement initial
  useEffect(() => {
    if (window.location.hash) {
      const targetId = window.location.hash.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Petit délai pour s'assurer que le DOM est prêt
        setTimeout(() => {
          const offsetTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
          
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  }, []);
};

export default useSmoothScroll; 