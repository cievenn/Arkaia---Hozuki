import React from 'react';

/**
 * DeepWaterOverlay (ex MistOverlay)
 * Effets de lumière caustique sous-marine et vignettage abyssal.
 * OPTIMISÉ : Retrait de `filter: blur()` qui est très gourmand en performances sur de grandes surfaces.
 * Remplacé par des radial/linear gradients doux et l'utilisation de `will-change`.
 */
export const MistOverlay = () => (
  <>
    {/* Couche 1 — Rayons lumineux venant du haut */}
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 w-full pointer-events-none z-10"
      style={{
        height:     '40vh',
        // Un dégradé plus doux pour simuler le flou
        background: 'linear-gradient(to bottom, rgba(6, 182, 212, 0.06) 0%, rgba(6, 182, 212, 0.02) 40%, transparent 100%)',
        animation:  'mist-float 14s infinite ease-in-out',
        willChange: 'transform', // Déporte sur le GPU
      }}
    />

    {/* Couche 2 — Faisceaux obliques */}
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 w-full pointer-events-none z-10"
      style={{
        height:     '30vh',
        background: 'linear-gradient(135deg, rgba(34, 211, 238, 0.04) 0%, rgba(34, 211, 238, 0.01) 50%, transparent 100%)',
        animation:  'mist-float 20s infinite ease-in-out reverse',
        willChange: 'transform',
      }}
    />

    {/* Couche 3 — Voile abyssal latéral (profondeur) */}
    <div
      aria-hidden="true"
      className="fixed bottom-0 left-0 w-full pointer-events-none z-10"
      style={{
        height:     '30vh',
        background: 'linear-gradient(to top, rgba(8, 145, 178, 0.05) 0%, transparent 100%)',
        animation:  'mist-float 18s 3s infinite ease-in-out',
        willChange: 'transform',
      }}
    />

    {/* Vignette des abysses — bords assombris pour accentuer la pression sous-marine */}
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-10"
      style={{
        background: 'radial-gradient(ellipse at 50% 40%, transparent 35%, rgba(2, 6, 23, 0.8) 100%)',
      }}
    />
  </>
);
