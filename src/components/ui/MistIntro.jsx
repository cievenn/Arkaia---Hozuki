import React, { useEffect, useState } from 'react';

/**
 * MistIntro (Hozuki Clan Theme)
 * - Effet de désembuage minimaliste.
 * - Apparition fluide du logo.
 * - Très optimisé (GPU transforms et opacity uniquement).
 */
export const MistIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState('mist');

  useEffect(() => {
    const timers = [];

    // 1. Désembuage
    timers.push(setTimeout(() => setPhase('clear'), 500)); 
    
    // 2. Détérioration / Fondu
    timers.push(setTimeout(() => setPhase('fadeout'), 3000));
    
    // 3. Fin
    timers.push(setTimeout(() => onComplete(), 4000));

    return () => timers.forEach(clearTimeout);
  }, [onComplete]); 

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: '#020813', // abyss-deep
        overflow: 'hidden',
        pointerEvents: 'all',
        animation: phase === 'fadeout' ? 'introFadeOut 1s ease-in-out forwards' : 'none'
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes mistReveal {
          0% { filter: blur(20px); transform: scale(1.1); opacity: 1; }
          100% { filter: blur(0px); transform: scale(1); opacity: 0; pointer-events: none; }
        }

        @keyframes logoEmergeWater {
          0% { opacity: 0; transform: translate(-50%, -45%) scale(0.95); filter: blur(10px); }
          100% { opacity: 1; transform: translate(-50%, -50%) scale(1); filter: blur(0px); }
        }

        @keyframes logoFadeOut {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 1; }
          100% { transform: translate(-50%, -55%) scale(1.05); opacity: 0; }
        }

        @keyframes introFadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; pointer-events: none; }
        }
      `}} />

      {/* OVERLAY DE BRUME (qui se dissipe) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(224, 242, 254, 0.05)', // water-foam très léger
          backdropFilter: phase === 'mist' ? 'blur(20px)' : 'blur(0px)',
          WebkitBackdropFilter: phase === 'mist' ? 'blur(20px)' : 'blur(0px)',
          transition: 'backdrop-filter 2s ease-out, -webkit-backdrop-filter 2s ease-out, opacity 2s ease-out',
          opacity: (phase === 'clear' || phase === 'fadeout') ? 0 : 1,
          zIndex: 10,
          pointerEvents: 'none'
        }}
      />

      {/* L'IMAGE (Hozuki / Hozuki - on garde l'image de base pour l'instant) */}
      <img
        src="/Hozuki.webp"
        alt="Arkaia"
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '30vw',
          height: 'auto',
          minWidth: '200px',
          maxWidth: '400px',
          objectFit: 'contain',
          animation: phase === 'fadeout' 
            ? 'logoFadeOut 0.8s ease-in forwards' 
            : (phase === 'clear' ? 'logoEmergeWater 2s ease-out forwards' : 'none'),
          opacity: 0,
          zIndex: 3,
          willChange: 'transform, opacity, filter',
        }}
      />
    </div>
  );
};
