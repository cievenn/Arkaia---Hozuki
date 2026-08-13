import React from 'react';
import { StutterText } from '../components/ui/StutterText';

/**
 * GeneralInfo — Dossier Shinobi : Kiyoshi Hōzuki
 */

const FIELDS = [
  { label: 'Nom / Prénom',      value: 'Kiyoshi Hōzuki' },
  { label: 'Clan',              value: 'Hōzuki (Les Maîtres de la Liquéfaction)' },
  { label: 'Archétype',         value: 'Le Bouffon Intouchable / L\'Assassin Thermodynamique', danger: true },
];

const NOTE = `« Pourquoi vous criez quand on vous coupe ? C'est juste de la chair. Ça se recoud, ça pourrit... Quelle architecture défaillante. Devenez de l'eau, les gars. L'eau ne pleure pas. L'eau ne meurt pas. L'eau s'infiltre juste dans vos poumons quand vous ouvrez la bouche pour supplier. »`;

export const GeneralInfo = () => (
  <div style={{ position: 'relative' }}>

    {/* ── KANJI DE FOND (Eau) ───────────────────────── */}
    <div
      className="font-kanji font-black select-none pointer-events-none"
      aria-hidden="true"
      style={{
        position:  'absolute',
        top:       '-0.2em',
        right:     '-0.1em',
        fontSize:  'clamp(10rem, 28vw, 36rem)',
        color:     'rgba(56, 189, 248, 0.03)',
        lineHeight: 1,
        zIndex:    0,
      }}
    >
      水
    </div>

    {/* ── TITRE ─────────────────────────────────────────────────── */}
    <div style={{ marginBottom: 'clamp(2.5rem, 6vw, 5rem)', position: 'relative', zIndex: 1 }}>
      <p
        className="font-noble"
        style={{
          fontSize:      '0.6rem',
          letterSpacing: '0.5em',
          color:         'var(--cyan-bright)',
          textTransform: 'uppercase',
          marginBottom:  '0.6rem',
        }}
      >
        — DOSSIER SHINOBI : KIYOSHI HŌZUKI
      </p>

      <div style={{ overflow: 'visible' }}>
        <StutterText
          as="h1"
          intensity="med"
          className="font-noble font-black"
          style={{
            fontSize:         'clamp(4rem, 13vw, 15rem)',
            lineHeight:       0.85,
            color:            'transparent',
            WebkitTextStroke: '1.5px var(--water-foam)',
            letterSpacing:    '-0.03em',
            display:          'block',
          }}
        >
          KIYOSHI
        </StutterText>
      </div>

      <div
        style={{
          display:    'flex',
          alignItems: 'baseline',
          gap:        'clamp(1rem, 2vw, 2rem)',
          marginTop:  '0.5rem',
        }}
      >
        <span
          className="font-noble font-black"
          style={{
            fontSize:      'clamp(1.4rem, 3.5vw, 3rem)',
            color:         'var(--cyan-predator)',
            letterSpacing: '0.1em',
          }}
        >
          HŌZUKI
        </span>
        <span
          className="font-kanji font-black"
          style={{
            fontSize:  'clamp(1.6rem, 4vw, 3.5rem)',
            color:     'rgba(56, 189, 248, 0.7)',
            lineHeight: 1,
          }}
        >
          鬼灯
        </span>
      </div>
    </div>

    {/* ── CORPS — Deux colonnes asymétriques ────────────────────── */}
    <div
      className="grid-responsive-asym"
      style={{
        position: 'relative',
        zIndex:   1,
      }}
    >
      {/* Colonne gauche — Données froides */}
      <div style={{ transform: 'rotate(-0.2deg)' }}>
        <div className="glass-panel" style={{ padding: 'clamp(1.2rem, 2.5vw, 2rem)' }}>
          <p
            className="font-noble"
            style={{
              fontSize:      '0.55rem',
              letterSpacing: '0.4em',
              color:         'var(--cyan-bright)',
              textTransform: 'uppercase',
              marginBottom:  '1.5rem',
            }}
          >
            ⬛ IDENTITÉ & BIOMÉTRIE
          </p>

          {FIELDS.map(({ label, value, danger }) => (
            <div
              key={label}
              style={{
                borderBottom:  '1px solid rgba(56, 189, 248, 0.1)',
                paddingBottom: '0.8rem',
                marginBottom:  '0.8rem',
              }}
            >
              <div
                className="font-noble"
                style={{
                  fontSize:      '0.5rem',
                  letterSpacing: '0.35em',
                  color:         'var(--water-foam-dark)',
                  textTransform: 'uppercase',
                  marginBottom:  '0.15rem',
                }}
              >
                {label}
              </div>
              <div
                className="font-body"
                style={{
                  fontSize:  'clamp(0.85rem, 1.2vw, 1rem)',
                  color:     danger ? 'var(--cyan-bright)' : 'var(--water-foam)',
                  fontWeight: danger ? 600 : 400,
                  fontStyle: danger ? 'normal' : 'italic',
                }}
              >
                {value}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Colonne droite — Note & Apparence */}
      <div>
        <h2
          className="font-noble font-black clinical-glow"
          data-text="CITATION DU SUJET"
          style={{
            fontSize:      'clamp(1.3rem, 2.5vw, 2rem)',
            color:         'var(--water-foam)',
            letterSpacing: '0.08em',
            marginBottom:  'clamp(1rem, 2vw, 1.8rem)',
            borderLeft:    '3px solid var(--cyan-dark)',
            paddingLeft:   '1rem',
          }}
        >
          CITATION DU SUJET
        </h2>

        <div
          className="glass-panel"
          style={{
            padding:    'clamp(1.5rem, 3vw, 2.5rem)',
            transform:  'rotate(0.2deg)',
          }}
        >
          <p
            className="font-body italic"
            style={{
              fontSize:   'clamp(1.05rem, 1.6vw, 1.2rem)',
              lineHeight:  1.85,
              color:      'var(--water-foam)',
              marginBottom: '1rem',
            }}
          >
            {NOTE}
          </p>
        </div>

        {/* Morphologie */}
        <div
          style={{
            marginTop:  'clamp(2rem, 3vw, 3rem)',
            padding:    'clamp(1rem, 2vw, 1.5rem)',
            borderTop:  '1px solid rgba(56, 189, 248, 0.3)',
          }}
        >
          <h3 className="font-noble clinical-glow" style={{ color: 'var(--cyan-bright)', marginBottom: '1rem', fontSize: '1.2rem' }}>
            APPARENCE PHYSIQUE
          </h3>
          <ul
            className="font-body"
            style={{
              fontSize:   'clamp(0.9rem, 1.3vw, 1.05rem)',
              lineHeight: 1.8,
              color:      'var(--water-foam-dark)',
              listStyle: 'none',
              paddingLeft: 0,
            }}
          >
            <li style={{ marginBottom: '1.5rem' }}>
              <strong style={{ color: 'var(--cyan-predator)' }}>Le Corps Fluide :</strong> Kiyoshi est fin, élancé, presque frêle en apparence. Il a la peau extrêmement pâle, presque translucide sous certains éclairages, et des cheveux blancs en bataille. Ses dents sont pointues, un trait génétique commun aux clans aqueux de Kiri.
            </li>
            <li style={{ marginBottom: '1.5rem' }}>
              <strong style={{ color: 'var(--cyan-predator)' }}>L'Attitude Corporelle :</strong> Il n'a aucune tenue. Il s'affale sur les chaises comme s'il n'avait pas de squelette (ce qui est techniquement vrai quand il le décide). Il marche en traînant les pieds, les mains souvent dans les poches ou derrière la tête.
            </li>
            <li>
              <strong style={{ color: 'var(--cyan-predator)' }}>L'Accessoire Indispensable :</strong> Il a toujours sur lui des gourdes d'eau. Mais contrairement aux autres qui boivent pour s'hydrater, lui s'en verse souvent directement sur la tête ou sur les mains en plein milieu d'une conversation, juste pour "se rafraîchir les idées".
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);
