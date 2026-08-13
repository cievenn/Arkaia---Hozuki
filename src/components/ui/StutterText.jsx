import React from 'react';

/**
 * StutterText (Renamed visually to SonarText)
 * Rend plusieurs couches d'un même texte, avec un effet de sonar/radar ou de réfraction sous-marine.
 */
export const StutterText = ({
  children,
  className = '',
  style = {},
  intensity = 'med',
  as: Tag = 'div',
}) => {
  const text = String(children);

  const configs = {
    low: {
      layers: [
        { dx: 2,  dy: 0, color: 'rgba(6, 182, 212, 0.4)',     blur: 2, dur: '4s', delay: '0.1s',  scale: 1.02 },
        { dx: -2, dy: 0, color: 'rgba(34, 211, 238, 0.2)',    blur: 4, dur: '5s', delay: '0.5s',  scale: 0.98 },
      ],
    },
    med: {
      layers: [
        { dx: 3,  dy: -1, color: 'rgba(6, 182, 212, 0.5)',    blur: 3, dur: '3s', delay: '0s',    scale: 1.03 },
        { dx: -3, dy: 1,  color: 'rgba(8, 145, 178, 0.3)',    blur: 2, dur: '4s', delay: '0.3s',  scale: 0.97 },
        { dx: 0,  dy: 2,  color: 'rgba(34, 211, 238, 0.2)',   blur: 5, dur: '6s', delay: '0.7s',  scale: 1.05 },
      ],
    },
    high: {
      layers: [
        { dx: 5,  dy: -2, color: 'rgba(34, 211, 238, 0.6)',   blur: 1, dur: '1.5s', delay: '0s',    scale: 1.04 },
        { dx: -5, dy: 2,  color: 'rgba(6, 182, 212, 0.5)',    blur: 3, dur: '2s',   delay: '0.1s',  scale: 0.96 },
        { dx: 3,  dy: -4, color: 'rgba(8, 145, 178, 0.4)',    blur: 4, dur: '1.2s', delay: '0.05s', scale: 1.08 },
        { dx: -3, dy: 4,  color: 'rgba(34, 211, 238, 0.3)',   blur: 2, dur: '2.5s', delay: '0.2s',  scale: 0.95 },
      ],
    },
  };

  // On utilise les animations définies dans index.css
  const animName = intensity === 'high'
    ? 'glitch-minimal'
    : intensity === 'low'
    ? 'subtle-pulse'
    : 'glitch-minimal';

  const layers = configs[intensity]?.layers ?? configs.med.layers;

  return (
    <Tag className={`relative inline-block ${className}`} style={style}>
      {/* Couches de réfraction (sonar) — derrière */}
      {layers.map((l, i) => (
        <span
          key={i}
          aria-hidden="true"
          style={{
            position:  'absolute',
            inset:     0,
            color:     l.color,
            filter:    l.blur ? `blur(${l.blur}px)` : undefined,
            transform: `translate(${l.dx}px, ${l.dy}px) scale(${l.scale})`,
            animation: `${animName} ${l.dur} ${l.delay} infinite ease-in-out alternate`,
            pointerEvents: 'none',
            userSelect:    'none',
            whiteSpace:    'inherit',
            mixBlendMode:  'screen',
          }}
        >
          {text}
        </span>
      ))}

      {/* Couche principale — devant */}
      <span className="relative z-10">{text}</span>
    </Tag>
  );
};
