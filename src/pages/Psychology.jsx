import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';

/**
 * Psychology — Profil psychologique (Kiyoshi Hōzuki)
 * Design froid, structuré, analytique.
 */

const TRAITS = [
  {
    title: "L'État Liquide (L'Ennui et le Troll)",
    subtitle: "Son état par défaut",
    content: "Kiyoshi est un pitre insupportable. Il prend tout à la légère, donne des surnoms mignons aux tueurs les plus sanguinaires du village, et répond aux menaces de mort par des blagues enfantines. Il utilise l'ironie comme une arme d'humiliation massive. Si un ennemi hurle de rage devant lui, Kiyoshi va s'asseoir par terre, bâiller, et lui demander s'il a bientôt fini sa crise de nerfs.",
    align: "left"
  },
  {
    title: "L'État Solide (Le Glissement Sombre)",
    subtitle: "La concentration",
    content: "C'est le moment de flottement psychologique. Quand quelqu'un touche son égo, l'insulte sur son clan, ou (pire) s'il trouve un adversaire qui résiste à ses blagues. Kiyoshi arrête de sourire. Ses blagues s'arrêtent net. Ses yeux se vident de leur malice pour devenir froids comme la banquise. Il passe d'un enfant capricieux à un exécuteur clinique qui va cibler les faiblesses psychologiques de son ennemi pour le briser avant même de le frapper.",
    align: "right"
  },
  {
    title: "L'État Vapeur (La Frénésie Hystérique)",
    subtitle: "L'ivresse du combat",
    content: "L'adrénaline pure. L'eau de son corps bout. Kiyoshi devient hyperactif, imprévisible, et totalement psychopathe. Il bondit dans tous les sens, hurle de rire à chaque fois qu'il mutile un ennemi, et commente ses propres meurtres comme s'il commentait un match de sport. C'est la folie totale, bruyante et sanglante.",
    align: "left"
  },
];

export const Psychology = () => (
  <PageWrapper title="Profil Psychologique" subtitle="La Thermodynamique Mentale">
    
    <div style={{ position: 'relative', zIndex: 2 }}>
      
      {/* ── INTRODUCTION ───────────────────────────────────────── */}
      <div className="glass-panel" style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)', marginBottom: 'clamp(3rem, 6vw, 5rem)', borderTop: '2px solid var(--cyan-dark)' }}>
        <p className="font-body" style={{ color: 'var(--water-foam)', fontSize: '1.1rem', lineHeight: 1.8, marginBottom: '1rem' }}>
          La folie de Kiyoshi ne vient pas d'un traumatisme infantile classique. Elle vient de sa biologie. Parce qu'il est immunisé à la douleur physique grâce au <strong style={{color: 'var(--cyan-predator)'}}>Suika no Jutsu</strong> (Technique de Liquéfaction), <strong style={{color: 'var(--cyan-bright)'}}>il a perdu toute empathie</strong>.
        </p>
        <p className="font-body" style={{ color: 'var(--water-foam)', fontSize: '1.1rem', lineHeight: 1.8 }}>
          L'empathie naît de la vulnérabilité partagée. Puisque rien ne peut le blesser, il ne comprend plus la peur des autres. Il voit les humains de chair comme des créatures absurdes, fragiles et dramatiques. Pour ne pas mourir d'ennui dans ce monde de "mortels fragiles", son esprit navigue entre trois états, calqués sur la physique de l'eau :
        </p>
      </div>

      {/* ── TRAITS PSYCHOLOGIQUES ─────────────────────────────── */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 5vw, 4rem)' }}>
        {TRAITS.map((trait, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              justifyContent: trait.align === 'left' ? 'flex-start' : 'flex-end',
              width: '100%'
            }}
          >
            <div
              style={{
                width: '85%',
                maxWidth: '600px',
                borderLeft: trait.align === 'left' ? '4px solid var(--cyan-dark)' : 'none',
                borderRight: trait.align === 'right' ? '4px solid var(--cyan-dark)' : 'none',
                paddingLeft: trait.align === 'left' ? '1.5rem' : '0',
                paddingRight: trait.align === 'right' ? '1.5rem' : '0',
                textAlign: trait.align,
              }}
            >
              <h3
                className="font-noble clinical-glow"
                data-text={trait.title}
                style={{
                  color: 'var(--cyan-predator)',
                  fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                  marginBottom: '0.2rem',
                  letterSpacing: '0.1em'
                }}
              >
                {trait.title}
              </h3>
              <p
                className="font-noble"
                style={{
                  color: 'var(--cyan-bright)',
                  fontSize: '0.8rem',
                  letterSpacing: '0.2em',
                  marginBottom: '1rem',
                  textTransform: 'uppercase',
                  opacity: 0.8
                }}
              >
                — {trait.subtitle}
              </p>
              <p
                className="font-body"
                style={{
                  color: 'var(--water-foam-dark)',
                  fontSize: 'clamp(0.95rem, 1.2vw, 1.1rem)',
                  lineHeight: 1.8,
                }}
              >
                {trait.content}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div>
  </PageWrapper>
);
