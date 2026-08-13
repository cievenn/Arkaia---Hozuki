import React, { useState } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';

/**
 * CombatStyle — Mécaniques de Combat (Kiyoshi Hōzuki)
 * Présentation des capacités létales.
 */

const MECHANICS = [
  {
    id: 'pistolet',
    title: 'Pistolet à Eau Compressée (Mizu Teppō no Jutsu)',
    content: "Il n'utilise pas la technique classique (tirer une simple balle). Il l'utilise comme un fusil à pompe de corps à corps (tirant une volée de gouttelettes perforantes à bout touchant) ou comme un sniper (se concentrant pour tirer une seule goutte ultra-dense à longue distance). Il aime faire le bruit \"Pew pew\" avec sa bouche quand il tire.",
  },
  {
    id: 'esquive',
    title: "La Danse de l'Esquive (Liquéfaction partielle)",
    content: "Plutôt que de bloquer un coup, il laisse l'arme ennemie le traverser. S'il reçoit un coup d'épée dans le ventre, il liquéfie uniquement cette zone, laissant la lame passer dans le vide, puis solidifie instantanément son corps pour coincer l'arme à l'intérieur de lui, désarmant ainsi son adversaire avec un sourire narquois.",
  },
  {
    id: 'suffocation',
    title: "Suffocation Aquatique",
    content: "Son mouvement signature d'assassinat. S'il arrive à plaquer sa main sur le visage de sa cible, il génère une bulle d'eau sous pression directement dans les voies respiratoires. La victime se noie à l'air libre en quelques secondes. C'est sa méthode la plus clinique, silencieuse et terrifiante.",
  },
];

export const CombatStyle = () => {
  const [activeMechanic, setActiveMechanic] = useState(MECHANICS[0].id);

  return (
    <PageWrapper title="Mécaniques de Combat" subtitle="L'Assassin Thermodynamique">
      
      <div className="grid-responsive-asym" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Colonne de gauche — Liste interactive */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {MECHANICS.map((mechanic) => {
            const isActive = activeMechanic === mechanic.id;
            return (
              <button
                key={mechanic.id}
                onClick={() => setActiveMechanic(mechanic.id)}
                style={{
                  textAlign: 'left',
                  background: isActive ? 'rgba(56, 189, 248, 0.1)' : 'transparent',
                  border: '1px solid',
                  borderColor: isActive ? 'var(--cyan-predator)' : 'rgba(56, 189, 248, 0.2)',
                  padding: '1.2rem',
                  color: isActive ? 'var(--cyan-bright)' : 'var(--water-foam-dark)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  boxShadow: isActive ? 'inset 0 0 15px rgba(56, 189, 248, 0.2)' : 'none',
                  transform: isActive ? 'translateX(10px)' : 'translateX(0)'
                }}
              >
                <h3 className="font-noble" style={{ fontSize: '1.1rem', letterSpacing: '0.1em' }}>
                  {mechanic.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Colonne de droite — Détail de la mécanique */}
        <div className="glass-panel" style={{ padding: '2rem', minHeight: '300px' }}>
          {MECHANICS.map((mechanic) => (
            <div
              key={mechanic.id}
              style={{
                display: activeMechanic === mechanic.id ? 'block' : 'none',
                animation: 'intro-text-appear 0.5s ease-out forwards'
              }}
            >
              <h2
                className="font-noble clinical-glow"
                data-text={mechanic.title}
                style={{
                  fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                  color: 'var(--cyan-bright)',
                  marginBottom: '1.5rem',
                  borderBottom: '1px solid rgba(56, 189, 248, 0.3)',
                  paddingBottom: '0.5rem',
                  lineHeight: 1.2
                }}
              >
                {mechanic.title}
              </h2>
              <p
                className="font-body"
                style={{
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'var(--water-foam)',
                }}
              >
                {mechanic.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
};
