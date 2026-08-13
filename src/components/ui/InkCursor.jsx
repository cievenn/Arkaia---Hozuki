import React, { useRef, useEffect, useState } from 'react';
import { useMouseLerp } from '../../hooks/useMouseLerp';

/**
 * WaterTrailCursor (ex InkCursor)
 * Curseur personnalisé — bulle/ripple d'eau qui suit la souris.
 * OPTIMISÉ : Les requêtes DOM querySelectorAll(':hover') ont été retirées du RAF.
 * On utilise des eventListeners globaux pour tracker si le curseur survole un élément interactif.
 */
export const InkCursor = () => {
  const blobRef  = useRef(null);
  const dotRef   = useRef(null);
  const mouse    = useMouseLerp();
  
  // État local non-réactif via ref pour éviter les re-renders dans le RAF
  const isHoveringInteractive = useRef(false);

  useEffect(() => {
    // Écouteurs globaux pour l'état interactif du curseur
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button'
      ) {
        isHoveringInteractive.current = true;
      }
    };
    
    const handleMouseOut = () => {
      isHoveringInteractive.current = false;
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  useEffect(() => {
    let raf;
    const render = () => {
      mouse.current.x += (mouse.current.targetX - mouse.current.x) * 0.15;
      mouse.current.y += (mouse.current.targetY - mouse.current.y) * 0.15;

      const isInteractive = isHoveringInteractive.current;

      if (blobRef.current) {
        blobRef.current.style.transform =
          `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
          
        blobRef.current.style.width  = isInteractive ? '48px' : '28px';
        blobRef.current.style.height = isInteractive ? '48px' : '28px';
        blobRef.current.style.background = isInteractive
          ? 'rgba(6, 182, 212, 0.2)'
          : 'rgba(2, 6, 23, 0.5)';
        blobRef.current.style.borderColor = isInteractive
          ? 'rgba(34, 211, 238, 0.8)'
          : 'rgba(6, 182, 212, 0.4)';
        blobRef.current.style.boxShadow = isInteractive
          ? '0 0 15px rgba(6, 182, 212, 0.5)'
          : '0 2px 8px rgba(0,0,0,0.6)';
      }
      
      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate3d(${mouse.current.targetX}px, ${mouse.current.targetY}px, 0)`;
      }

      raf = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(raf);
  }, [mouse]);

  return (
    <>
      <div
        ref={blobRef}
        aria-hidden="true"
        style={{
          position:       'fixed',
          top:            '-14px',
          left:           '-14px',
          width:          '28px',
          height:         '28px',
          borderRadius:   '50%',
          border:         '1px solid rgba(6, 182, 212, 0.4)',
          background:     'rgba(2, 6, 23, 0.5)',
          pointerEvents:  'none',
          zIndex:         9999,
          willChange:     'transform, width, height, background, border-color', // Accélération matérielle ciblée
          transition:     'width 0.3s ease, height 0.3s ease, background 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
        }}
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position:      'fixed',
          top:           '-3px',
          left:          '-3px',
          width:         '6px',
          height:        '6px',
          borderRadius:  '50%',
          background:    '#22d3ee',
          pointerEvents: 'none',
          zIndex:        10000,
          willChange:    'transform',
          boxShadow:     '0 0 8px #0891b2',
        }}
      />
    </>
  );
};
