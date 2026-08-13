import React from 'react';

/**
 * PageWrapper — Wrapper de transition de page.
 * Conservé pour compatibilité ; la transition est maintenant gérée
 * directement dans App.jsx via PageTransition inline.
 */
export const PageWrapper = ({ children, isTransitioning }) => (
  <div
    style={{
      opacity:    isTransitioning ? 0 : 1,
      filter:     isTransitioning ? 'blur(4px)' : 'blur(0px)',
      transition: 'opacity 0.5s ease, filter 0.5s ease',
      width:      '100%',
    }}
  >
    {children}
  </div>
);
