import React, { useMemo } from 'react';

/**
 * BloodMetaballs (Renamed to AbyssalCurrents)
 * Des courants d'eau et bulles abyssales.
 * OPTIMISÉ : Retrait du SVG filter Gooey très lourd. Utilisation de box-shadow pour adoucir les bords.
 */
export const BloodMetaballs = ({ count = 8, className = '' }) => {
  const blobs = useMemo(() => {
    const seed = [
      { x: 15,  y: 80,  r: 120, anim: 'blob-drift-1', dur: '9s',  delay: '0s'   },
      { x: 45,  y: 90,  r: 90,  anim: 'blob-drift-2', dur: '13s', delay: '2s'   },
      { x: 70,  y: 70,  r: 140, anim: 'blob-drift-3', dur: '11s', delay: '1s'   },
      { x: 30,  y: 85,  r: 80,  anim: 'blob-drift-4', dur: '15s', delay: '3s'   },
      { x: 80,  y: 95,  r: 100, anim: 'blob-drift-5', dur: '8s',  delay: '0.5s' },
      { x: 55,  y: 85,  r: 70,  anim: 'blob-drift-1', dur: '12s', delay: '4s'   },
      { x: 10,  y: 98,  r: 110, anim: 'blob-drift-3', dur: '10s', delay: '1.5s' },
      { x: 90,  y: 88,  r: 85,  anim: 'blob-drift-2', dur: '14s', delay: '2.5s' },
      { x: 60,  y: 92,  r: 65,  anim: 'blob-drift-4', dur: '7s',  delay: '5s'   },
      { x: 25,  y: 75,  r: 95,  anim: 'blob-drift-5', dur: '16s', delay: '0.8s' },
    ];
    return seed.slice(0, Math.max(count, 4));
  }, [count]);

  return (
    <>
      <div
        className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className}`}
        aria-hidden="true"
        style={{
          // On ajoute un mix-blend-mode léger pour fondre les bulles entres elles
          mixBlendMode: 'screen',
        }}
      >
        {blobs.map((blob, i) => (
          <div
            key={i}
            style={{
              position:        'absolute',
              left:            `${blob.x}%`,
              top:             `${blob.y}%`,
              width:           `${blob.r}px`,
              height:          `${blob.r}px`,
              transform:       'translate(-50%, -50%)',
              background:      `radial-gradient(circle at 35% 35%,
                                  rgba(34, 211, 238, 0.15) 0%,
                                  rgba(6, 182, 212, 0.05) 50%,
                                  transparent 100%)`,
              // L'adoucissement via box-shadow remplace le flou SVG lourd
              boxShadow:       '0 0 30px rgba(6, 182, 212, 0.1)',
              animation:       `${blob.anim} ${blob.dur} ${blob.delay} infinite ease-in-out`,
              willChange:      'transform',
              borderRadius:    i % 2 === 0
                ? '60% 40% 55% 45% / 45% 55% 40% 60%'
                : '45% 55% 40% 60% / 60% 40% 55% 45%',
            }}
          />
        ))}
      </div>

      <div
        className="fixed inset-0 pointer-events-none z-0"
        aria-hidden="true"
        style={{
          background: 'radial-gradient(ellipse at 50% 100%, transparent 20%, rgba(2,6,23,0.95) 100%)',
        }}
      />
    </>
  );
};
