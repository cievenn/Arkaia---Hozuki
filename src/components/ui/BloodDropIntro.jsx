import React, { useEffect, useState } from 'react';

/**
 * BloodDropIntro (renamed visually to AbyssalIntro)
 * - Une goutte d'eau sombre tombe.
 * - Des ondes se propagent dans l'eau.
 * - Un flash de lumière caustique révèle le fond.
 */
export const BloodDropIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState('black');

  useEffect(() => {
    const timers = [];

    // 1. Goutte tombe
    timers.push(setTimeout(() => setPhase('drop'), 100));
    
    // 2. Ondes
    timers.push(setTimeout(() => setPhase('spread'), 500)); 
    
    // 3. Détérioration / Fondu
    timers.push(setTimeout(() => setPhase('deteriorate'), 3000));
    
    // 4. Fin
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
        background: '#020617', // abyss-deep
        overflow: 'hidden',
        pointerEvents: 'all',
        animation: phase === 'deteriorate' ? 'introFadeOut 1s ease-in-out forwards' : 'none'
      }}
    >
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dropFallWater {
          0% { transform: translate(-50%, -10vh) scaleY(1.2) scaleX(0.8); opacity: 0; }
          10% { opacity: 1; }
          70% { transform: translate(-50%, 45vh) scaleY(1.4) scaleX(0.6); opacity: 1; }
          100% { transform: translate(-50%, 50vh) scaleY(0.5) scaleX(2.5); opacity: 0; }
        }

        @keyframes rippleSpread {
          0% { transform: translate(-50%, -50%) scale(0); opacity: 1; border-radius: 50%; filter: blur(2px); box-shadow: 0 0 0px #06b6d4; }
          30% { transform: translate(-50%, -50%) scale(1); opacity: 0.8; border-radius: 50%; filter: blur(4px); box-shadow: 0 0 50px #06b6d4, inset 0 0 20px #0891b2; border: 2px solid #22d3ee; }
          100% { transform: translate(-50%, -50%) scale(3); opacity: 0; border-radius: 50%; filter: blur(8px); box-shadow: 0 0 100px #06b6d4; border: 1px solid #06b6d4; }
        }

        @keyframes logoEmergeWater {
          0% { opacity: 0; transform: translate(-50%, -50%) scale(0.9); filter: blur(15px); }
          100% { opacity: 0.9; transform: translate(-50%, -50%) scale(1); filter: blur(0px) drop-shadow(0 0 15px rgba(6, 182, 212, 0.6)); }
        }

        @keyframes logoFadeOut {
          0% { transform: translate(-50%, -50%) scale(1); filter: blur(0px); opacity: 0.9; }
          100% { transform: translate(-50%, -60%) scale(1.1); filter: blur(10px); opacity: 0; }
        }

        @keyframes introFadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; pointer-events: none; }
        }
      `}} />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.2' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='150' height='150' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E")`,
          pointerEvents: 'none',
          zIndex: 10
        }}
      />

      {/* LA GOUTTE D'EAU */}
      {(phase === 'drop' || phase === 'spread' || phase === 'deteriorate') && (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '0',
            width: '16px',
            height: '24px',
            animation: phase === 'drop' ? 'dropFallWater 0.4s cubic-bezier(0.5, 0, 0.8, 0.5) forwards' : 'none',
            opacity: 0,
            zIndex: 2,
          }}
        >
          <svg viewBox="0 0 24 24" width="100%" height="100%" fill="url(#waterDropGrad)">
            <defs>
              <radialGradient id="waterDropGrad" cx="50%" cy="70%" r="50%">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#0891b2" />
              </radialGradient>
            </defs>
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
          </svg>
        </div>
      )}

      {/* L'ONDE / RIPPLE */}
      {(phase === 'spread' || phase === 'deteriorate') && (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: '30vw',
            height: '30vw',
            minWidth: '200px',
            minHeight: '200px',
            background: 'transparent',
            animation: 'rippleSpread 2.5s cubic-bezier(0.1, 0.8, 0.2, 1) forwards',
            opacity: 0,
            zIndex: 1,
          }}
        />
      )}

      {/* L'IMAGE Hozuki */}
      {(phase === 'spread' || phase === 'deteriorate') && (
        <img
          src="/Hozuki.webp"
          alt="Hozuki"
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            width: '30vw',
            height: 'auto',
            minWidth: '200px',
            maxWidth: '400px',
            objectFit: 'contain',
            animation: phase === 'deteriorate' 
              ? 'logoFadeOut 1s ease-in forwards' 
              : 'logoEmergeWater 1.5s 0.2s ease-out forwards',
            opacity: 0,
            zIndex: 3,
            willChange: 'transform, opacity, filter',
          }}
        />
      )}
    </div>
  );
};