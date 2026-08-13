import React, { useState } from 'react';

import { LiquidCursor }    from './components/ui/LiquidCursor';
import { MistIntro }       from './components/ui/MistIntro';
import { MistOverlay }     from './components/ui/MistOverlay';
import { StutterText }     from './components/ui/StutterText';

import { GeneralInfo }  from './pages/GeneralInfo';
import { Psychology }   from './pages/Psychology';
import { CombatStyle }  from './pages/CombatStyle';
import { Objectives }   from './pages/Objectives';
import { History }      from './pages/History';

// ─── Onglets de navigation ────────────────────────────────────
const TABS = [
  { id: 'general',    kanji: '壱', label: 'Informations'    },
  { id: 'psychology', kanji: '弐', label: 'Profil Psycho'   },
  { id: 'combat',     kanji: '参', label: 'Combat'          },
  { id: 'objectives', kanji: '四', label: 'Objectifs'       },
  { id: 'history',    kanji: '伍', label: 'Histoire'        },
];

// ─── Transition douce entre pages ─────────────────────────────
const PageTransition = ({ children, isTransitioning }) => (
  <div
    style={{
      opacity:    isTransitioning ? 0 : 1,
      filter:     isTransitioning ? 'blur(6px)' : 'blur(0px)',
      transform:  isTransitioning ? 'translateY(15px)' : 'translateY(0)',
      transition: 'opacity 0.4s ease-out, filter 0.4s ease-out, transform 0.5s ease-out',
      width:      '100%',
    }}
  >
    {children}
  </div>
);

// ─── COMPOSANT PRINCIPAL ──────────────────────────────────────
export default function App() {
  const [activeTab,        setActiveTab]        = useState('general');
  const [nextTab,          setNextTab]          = useState('general');
  const [isTransitioning,  setIsTransitioning]  = useState(false);
  const [introDone,        setIntroDone]        = useState(false);

  const handleTabChange = (tabId) => {
    if (tabId === activeTab || isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveTab(tabId);
      setNextTab(tabId);
      setIsTransitioning(false);
    }, 450); // Plus rapide pour l'effet fluide Hozuki
  };

  return (
    <div
      className="min-h-screen overflow-hidden flex flex-col"
      style={{ background: 'var(--abyss-deep)', color: 'var(--water-foam)' }}
    >
      <LiquidCursor />

      {!introDone && (
        <MistIntro onComplete={() => setIntroDone(true)} />
      )}

      {introDone && (
        <>
          <MistOverlay />

          {/* ── EN-TÊTE ──────────────────────────────────────── */}
          <header
            className="fixed top-0 left-0 w-full z-40 flex justify-between items-start"
            style={{ padding: 'clamp(1rem, 3vw, 2.5rem) clamp(1rem, 4vw, 4rem)' }}
          >
            <div style={{ pointerEvents: 'none' }}>
              <StutterText
                as="div"
                intensity="low"
                className="font-noble clinical-glow text-white"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.5rem)', fontWeight: 300, letterSpacing: '0.2em' }}
              >
                HOZUKI
              </StutterText>
              <div
                className="font-body hidden sm:block"
                style={{
                  fontSize: 'clamp(0.55rem, 1.2vw, 0.9rem)',
                  color: 'var(--cyan-bright)',
                  letterSpacing: '0.3em',
                  marginTop: '0.4rem',
                  opacity: 0.8
                }}
              >
                鬼灯 — MIST SHINOBI
              </div>
            </div>

            <div
              className="font-body text-right hidden sm:block glass-panel"
              style={{
                padding: '0.5rem 1rem',
                color: 'var(--water-foam)',
                fontSize: 'clamp(0.55rem, 0.9vw, 0.75rem)',
                letterSpacing: '0.2em',
                lineHeight: 1.8,
                pointerEvents: 'none',
              }}
            >
              DOSSIER #014-HOZ<br />
              <span style={{ color: 'var(--cyan-bright)' }}>CLASS: S-RANK FLUID</span>
            </div>
          </header>

          {/* ── LAYOUT : NAV (desktop gauche / mobile bas) + CONTENU ─── */}
          <div
            className="flex-1 w-full"
            style={{
              minHeight: '100vh',
              overflowX: 'hidden',
              scrollbarWidth: 'thin',
              scrollbarColor: 'var(--shark-skin) var(--abyss-deep)',
            }}
          >
            {/* ── Navigation desktop : fixée à gauche ─────────────── */}
            <nav
              className="hidden md:flex md:fixed md:left-0 md:top-1/2 md:-translate-y-1/2 z-50 flex-col"
              style={{ padding: 'clamp(1rem, 2vw, 2rem) clamp(1.5rem, 3vw, 3rem)' }}
              aria-label="Navigation sections"
            >
              <ul className="flex flex-col gap-6">
                {TABS.map((tab) => {
                  const isActive = nextTab === tab.id;
                  return (
                    <li key={tab.id}>
                      <button
                        onClick={() => handleTabChange(tab.id)}
                        aria-current={isActive ? 'page' : undefined}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '1rem',
                          padding: '0.4rem 0',
                          background: 'none',
                          border: 'none',
                          color: 'var(--water-foam)',
                          transition: 'transform 0.4s ease',
                          transform: isActive ? 'translateX(6px)' : 'translateX(0)',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        <span
                          className="font-noble"
                          style={{
                            fontSize: '0.9rem',
                            color: isActive ? 'var(--cyan-bright)' : 'rgba(224, 242, 254, 0.4)',
                            transition: 'color 0.4s ease',
                          }}
                        >
                          {tab.kanji}
                        </span>
                        <span
                          style={{
                            display: 'inline-block',
                            width: isActive ? '30px' : '10px',
                            height: '1px',
                            background: isActive ? 'var(--cyan-bright)' : 'rgba(224, 242, 254, 0.2)',
                            transition: 'width 0.5s ease, background 0.4s ease',
                            boxShadow: isActive ? '0 0 8px var(--cyan-dark)' : 'none',
                          }}
                        />
                        <span
                          className="font-body"
                          style={{
                            fontSize: 'clamp(0.6rem, 0.8vw, 0.75rem)',
                            letterSpacing: '0.2em',
                            textTransform: 'uppercase',
                            opacity: isActive ? 1 : 0.6,
                            transition: 'opacity 0.4s ease',
                          }}
                        >
                          {tab.label}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* ── Navigation mobile : barre fixée en bas ──────────── */}
            <nav
              className="md:hidden fixed bottom-0 left-0 w-full z-50 glass-panel"
              style={{
                background: 'rgba(2, 8, 19, 0.85)',
                borderTop: '1px solid rgba(56, 189, 248, 0.15)',
                borderBottom: 'none',
                borderLeft: 'none',
                borderRight: 'none',
                borderRadius: 0,
                padding: '0.8rem 0',
              }}
              aria-label="Navigation sections mobile"
            >
              <ul className="flex flex-row justify-around items-center">
                {TABS.map((tab) => {
                  const isActive = nextTab === tab.id;
                  return (
                    <li key={tab.id}>
                      <button
                        onClick={() => handleTabChange(tab.id)}
                        aria-current={isActive ? 'page' : undefined}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          gap: '0.3rem',
                          background: 'none',
                          border: 'none',
                        }}
                      >
                        <span
                          className="font-noble"
                          style={{
                            fontSize: '1.2rem',
                            color: isActive ? 'var(--cyan-bright)' : 'rgba(224, 242, 254, 0.4)',
                            transition: 'color 0.3s ease',
                          }}
                        >
                          {tab.kanji}
                        </span>
                        {isActive && (
                          <span style={{
                            display: 'block',
                            width: '20px',
                            height: '1px',
                            background: 'var(--cyan-bright)',
                            boxShadow: '0 0 6px var(--cyan-dark)',
                          }} />
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Contenu de la page active */}
            <main
              className="relative z-20"
              style={{
                paddingLeft:   'clamp(1rem, 18vw, 20rem)',
                paddingRight:  'clamp(1rem, 4vw, 5rem)',
                paddingTop:    'clamp(4.5rem, 10vh, 10rem)',
                paddingBottom: 'clamp(5rem, 8vw, 6rem)',
              }}
            >
              <PageTransition isTransitioning={isTransitioning}>
                {activeTab === 'general'    && <GeneralInfo />}
                {activeTab === 'psychology' && <Psychology />}
                {activeTab === 'combat'     && <CombatStyle />}
                {activeTab === 'objectives' && <Objectives />}
                {activeTab === 'history'    && <History />}
              </PageTransition>
            </main>
          </div>
        </>
      )}
    </div>
  );
}