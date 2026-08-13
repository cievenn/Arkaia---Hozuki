import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';

/**
 * Objectives — Ambitions (Kiyoshi Hōzuki)
 * Mise en page épurée et clinique.
 */

const OBJECTIVES = [
  {
    id: 1,
    title: "L'ÉROSION DU SYSTÈME",
    subtitle: "La Croisade contre la « Solidité »",
    content: "Kiyoshi méprise tout ce qui est rigide : la morale, l’honneur, les règles militaires et les principes auxquels les shinobis s’accrochent. Pour lui, tout ce qui est solide finit forcément par se briser. Il considère donc que Kirigakure est faible tant que ses ninjas restent attachés à leurs valeurs humaines ou refusent d’évoluer. Son objectif est de pousser le village à devenir « liquide » : adaptable, imprévisible et dépourvu de pitié. Plutôt que de tuer directement les individus les plus honorables, il cherche à les corrompre en les confrontant à des dilemmes moraux impossibles, jusqu’à ce qu’ils soient contraints de mentir, trahir ou abandonner leurs principes. Pour Kiyoshi, le véritable succès n’est pas de vaincre un shinobi, mais de le regarder se briser de l’intérieur et comprendre que sa morale n’était qu’une illusion.",
    quote: "« Regardez-vous avec vos beaux principes d’acier... L’acier, ça rouille. L’eau, ça s’adapte. Je vais vous faire plier jusqu’à ce que vous réalisiez que votre morale n’est qu’une putain de blague. »",
  },
  {
    id: 2,
    title: "L'INQUISITION DES 7 ÉPÉES",
    subtitle: "Le Dogme du Métal",
    content: "Kiyoshi ne considère pas les Sept Épées de la Brume comme de simples armes ou des trophées à collectionner, mais comme des armes presque vivantes qui ne devraient être confiées qu’à des êtres capables de les porter sans les « souiller ». Selon sa vision tordue, seuls les Hōzuki, capables de liquéfier leur corps et de ne pas craindre le sang ou la douleur comme les humains ordinaires, seraient réellement dignes de les manier. Lorsqu’un shinobi obtient une épée sans correspondre à ses critères, Kiyoshi ne cherche pas forcément à la lui reprendre par la force : il devient plutôt son ombre. Il le traque, sabote ses missions, s’en prend à ses proches et exploite chacune de ses faiblesses afin de l’épuiser psychologiquement, jusqu’à ce que le porteur doute lui-même de sa légitimité. Son objectif est de lui faire croire qu’il ne mérite pas l’arme et que le seul moyen de mettre fin au cauchemar est de la lui abandonner.",
  },
  {
    id: 3,
    title: "LE COMPLEXE DU PARASITE",
    subtitle: "Le Roi des Secrets",
    content: "Grâce aux capacités naturelles des Hōzuki, Kiyoshi possède un moyen unique de s’infiltrer dans des endroits normalement inaccessibles. Il peut se dissimuler dans l’eau, se glisser sous une porte ou se fondre dans les canalisations, faisant de lui un espion presque impossible à détecter. Pour lui, la violence physique n’est qu’un moyen grossier de domination : le véritable pouvoir consiste à connaître les secrets des autres et à pouvoir les détruire sans jamais avoir à lever le petit doigt. Kiyoshi veut donc devenir le plus grand détenteur de secrets de Kirigakure, espionnant les chefs de clans, les ANBU, les Jōnin et même les hautes figures du village afin de constituer un véritable réseau de chantage. Il veut que personne ne puisse se sentir en sécurité, car chacun doit savoir qu’à tout moment, Kiyoshi pourrait connaître quelque chose qu’il aurait préféré garder caché.",
  },
  {
    id: 4,
    title: "LA QUÊTE DU « ZÉRO ABSOLU »",
    subtitle: "Le Désir de Geler",
    content: "Derrière toute sa cruauté se cache un objectif beaucoup plus personnel : Kiyoshi cherche désespérément à ressentir quelque chose. Sa condition et son rapport particulier à la douleur et à la peur l’ont rendu profondément engourdi, au point que la violence et le danger ne provoquent presque plus rien chez lui. Il veut donc rencontrer quelqu’un ou quelque chose capable de dépasser ses limites et de lui faire ressentir une véritable terreur, cette sensation d’être à une seconde de mourir pour de bon. Lorsqu’il rencontre un individu réellement terrifiant, il ne cherche pas à s’en éloigner : il développe au contraire une fascination obsessionnelle pour lui et cherche constamment à provoquer ses limites. Il accepte volontairement de se mettre en danger, voire de frôler la mort, simplement dans l’espoir de ressentir enfin cette peur qu’il ne connaît plus. Pour Kiyoshi, ce qui ressemble à une pulsion suicidaire est en réalité une quête désespérée pour retrouver la sensation d’être vivant.",
  }
];

export const Objectives = () => (
  <PageWrapper title="Ambitions" subtitle="Les Objectifs du Sujet">
    
    <div style={{ position: 'relative', zIndex: 2, padding: '2rem 0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(2rem, 5vw, 3.5rem)' }}>
        {OBJECTIVES.map((obj) => (
          <div
            key={obj.id}
            className="glass-panel"
            style={{
              padding: 'clamp(2rem, 4vw, 3rem)',
              borderLeft: '4px solid var(--cyan-dark)',
              background: 'linear-gradient(90deg, rgba(2, 6, 23, 0.8), transparent)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>

              <h2
                className="font-noble clinical-glow"
                data-text={obj.title}
                style={{
                  fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                  color: 'var(--cyan-predator)',
                  lineHeight: 1.1,
                  letterSpacing: '0.05em'
                }}
              >
                {obj.title}
              </h2>
            </div>
            
            <h3
              className="font-noble"
              style={{
                fontSize: '1rem',
                color: 'var(--cyan-bright)',
                letterSpacing: '0.15em',
                marginBottom: '1.5rem',
                textTransform: 'uppercase'
              }}
            >
              — {obj.subtitle}
            </h3>

            <p
              className="font-body"
              style={{
                fontSize: 'clamp(1.05rem, 1.5vw, 1.2rem)',
                lineHeight: 1.8,
                color: 'var(--water-foam)',
              }}
            >
              {obj.content}
            </p>

            {obj.quote && (
              <blockquote
                className="font-body italic"
                style={{
                  fontSize: 'clamp(1.1rem, 1.6vw, 1.3rem)',
                  color: 'var(--cyan-bright)',
                  paddingLeft: '1rem',
                  borderLeft: '2px solid var(--cyan-bright)',
                  marginTop: '1.5rem'
                }}
              >
                {obj.quote}
              </blockquote>
            )}
          </div>
        ))}
      </div>
    </div>
  </PageWrapper>
);
