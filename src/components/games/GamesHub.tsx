import React, { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { LayoutGrid, Scale, Atom, Droplet, FlaskConical, Zap, Trophy, Play } from 'lucide-react';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { GAMES_STRINGS } from '../../i18n/gamesStrings';
import { PeriodicTableHunter } from './PeriodicTableHunter';
import { EquationBalancer } from './EquationBalancer';
import { LewisDotBuilder } from './LewisDotBuilder';
import { TitrationSimulator } from './TitrationSimulator';
import { CompoundSynthesisGame } from './CompoundSynthesisGame';
import { ChemBlitzGame } from './ChemBlitzGame';

export interface GamesHubProps {
  lang: LanguageCode;
  highScores: Record<string, number>;
  onFinishGame: (gameKey: string, score: number) => void;
}

export type MiniGameId =
  | 'periodic-hunter'
  | 'equation-balancer'
  | 'lewis-builder'
  | 'titration-simulator'
  | 'compound-synthesis'
  | 'chem-blitz';

export const GamesHub: React.FC<GamesHubProps> = ({
  lang,
  highScores = {},
  onFinishGame,
}) => {
  const t = UI_TRANSLATIONS[lang];
  const g = GAMES_STRINGS[lang] ?? GAMES_STRINGS.en;
  const [activeGame, setActiveGame] = useState<MiniGameId | null>(null);

  // Callback to finish a game and record score
  const handleGameFinish = (gameKey: string, score: number) => {
    onFinishGame(gameKey, score);
  };

  // If a game is active, render that game component
  if (activeGame === 'periodic-hunter') {
    return (
      <div className="ky-immersive gm-run">
        <PeriodicTableHunter
          lang={lang}
          highScore={highScores['periodic-hunter'] || 0}
          onFinish={(score) => handleGameFinish('periodic-hunter', score)}
          onBack={() => setActiveGame(null)}
          />
      </div>
    );
  }

  if (activeGame === 'equation-balancer') {
    return (
      <div className="ky-immersive gm-run">
        <EquationBalancer
          lang={lang}
          highScore={highScores['equation-balancer'] || 0}
          onFinish={(score) => handleGameFinish('equation-balancer', score)}
          onBack={() => setActiveGame(null)}
          />
      </div>
    );
  }

  if (activeGame === 'lewis-builder') {
    return (
      <div className="ky-immersive gm-run">
        <LewisDotBuilder
          lang={lang}
          highScore={highScores['lewis-builder'] || 0}
          onFinish={(score) => handleGameFinish('lewis-builder', score)}
          onBack={() => setActiveGame(null)}
          />
      </div>
    );
  }

  if (activeGame === 'titration-simulator') {
    return (
      <div className="ky-immersive gm-run">
        <TitrationSimulator
          lang={lang}
          highScore={highScores['titration-simulator'] || 0}
          onFinish={(score) => handleGameFinish('titration-simulator', score)}
          onBack={() => setActiveGame(null)}
          />
      </div>
    );
  }

  if (activeGame === 'compound-synthesis') {
    return (
      <div className="ky-immersive gm-run">
        <CompoundSynthesisGame
          lang={lang}
          highScore={highScores['compound-synthesis'] || 0}
          onFinish={(score) => handleGameFinish('compound-synthesis', score)}
          onBack={() => setActiveGame(null)}
          />
      </div>
    );
  }

  if (activeGame === 'chem-blitz') {
    return (
      <div className="ky-immersive gm-run">
        <ChemBlitzGame
          lang={lang}
          highScore={highScores['chem-blitz'] || 0}
          onFinish={(score) => handleGameFinish('chem-blitz', score)}
          onBack={() => setActiveGame(null)}
          />
      </div>
    );
  }

  // 6 Mini-Games roster (artboard order)
  const gamesList: {
    id: MiniGameId;
    title: string;
    desc: string;
    icon: LucideIcon;
    tile: string;
    tag: string;
  }[] = [
    { id: 'periodic-hunter', title: t.games.periodicTitle, desc: t.games.periodicDesc, icon: LayoutGrid, tile: '', tag: 'TYT & AYT' },
    { id: 'equation-balancer', title: t.games.balancerTitle, desc: t.games.balancerDesc, icon: Scale, tile: 'ky-tile--gold', tag: 'TYT' },
    { id: 'compound-synthesis', title: t.games.synthesisTitle, desc: t.games.synthesisDesc, icon: FlaskConical, tile: 'ky-tile--violet', tag: 'AYT' },
    { id: 'lewis-builder', title: t.games.lewisTitle, desc: t.games.lewisDesc, icon: Atom, tile: 'ky-tile--blue', tag: 'VSEPR' },
    { id: 'titration-simulator', title: t.games.titrationTitle, desc: t.games.titrationDesc, icon: Droplet, tile: 'ky-tile--rose', tag: 'AYT' },
    { id: 'chem-blitz', title: t.games.blitzTitle, desc: t.games.blitzDesc, icon: Zap, tile: 'ky-tile--ok', tag: '60s' },
  ];

  return (
    <section className="ky-screen gm-hub" aria-label={t.games.title}>
      <div className="ky-fit">
        <div className="gm-hub__body">
          <header className="gm-hub__head">
            <p className="ky-eyebrow">{g.miniGames}</p>
            <h1 className="ky-disp ky-fs-28">{t.games.title}</h1>
          </header>

          {/* Daily challenge */}
          <section className="ky-stage gm-hero ky-persp" aria-label={g.daily}>
            <div className="ky-floor" aria-hidden="true" />
            <div className="gm-hero-orb" aria-hidden="true">
              <span className="ky-orbit3d gm-hero-ring" />
              <span className="ky-atom ky-float" style={{ ['--c' as string]: '#FFD873', ['--cd' as string]: '#A86A08' }} />
              <Zap size={30} fill="currentColor" />
            </div>
            <span className="ky-chip ky-chip--gold">{g.daily}</span>
            <h2>{g.dailyTitle}</h2>
            <p>{g.dailyDesc}</p>
            <button type="button" className="ky-btn ky-btn--gold" data-sfx="start" onClick={() => setActiveGame('chem-blitz')}>
              <Play size={16} fill="currentColor" aria-hidden="true" className="gm-flip" />
              <span>{g.challenge}</span>
            </button>
          </section>

          {/* Game tiles */}
          <ul className="gm-tiles" aria-label={t.games.title}>
            {gamesList.map((game) => {
              const GameIcon = game.icon;
              const bestScore = highScores[game.id] || 0;
              return (
                <li key={game.id}>
                  <button
                    type="button"
                    className="ky-card gm-tile"
                    data-sfx="start"
                    onClick={() => setActiveGame(game.id)}
                    aria-label={`${g.play}: ${game.title}`}
                  >
                    <span className={`ky-tile ${game.tile}`} aria-hidden="true">
                      <GameIcon size={26} />
                    </span>
                    <strong className="ky-fs-15">{game.title}</strong>
                    <span className="gm-tile__desc ky-fs-13">{game.desc}</span>
                    <span className="gm-tile__foot">
                      <span className="ky-chip gm-tag">{game.tag}</span>
                      <span className="gm-tile__best ky-fs-12">
                        <Trophy size={13} aria-hidden="true" /> {g.best}: {bestScore > 0 ? bestScore : '\u2014'}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
