import React, { useState } from 'react';
import {
  Gamepad2,
  Table,
  Scale,
  Atom,
  FlaskConical,
  Beaker,
  Zap,
  Trophy,
  Sparkles,
  ChevronRight,
  Flame,
} from 'lucide-react';
import type { LanguageCode } from '../../types/chemistry';
import { UI_TRANSLATIONS } from '../../i18n/translations';
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
  const [activeGame, setActiveGame] = useState<MiniGameId | null>(null);

  // Callback to finish a game and record score
  const handleGameFinish = (gameKey: string, score: number) => {
    onFinishGame(gameKey, score);
  };

  // If a game is active, render that game component
  if (activeGame === 'periodic-hunter') {
    return (
      <PeriodicTableHunter
        lang={lang}
        highScore={highScores['periodic-hunter'] || 0}
        onFinish={(score) => handleGameFinish('periodic-hunter', score)}
        onBack={() => setActiveGame(null)}
      />
    );
  }

  if (activeGame === 'equation-balancer') {
    return (
      <EquationBalancer
        lang={lang}
        highScore={highScores['equation-balancer'] || 0}
        onFinish={(score) => handleGameFinish('equation-balancer', score)}
        onBack={() => setActiveGame(null)}
      />
    );
  }

  if (activeGame === 'lewis-builder') {
    return (
      <LewisDotBuilder
        lang={lang}
        highScore={highScores['lewis-builder'] || 0}
        onFinish={(score) => handleGameFinish('lewis-builder', score)}
        onBack={() => setActiveGame(null)}
      />
    );
  }

  if (activeGame === 'titration-simulator') {
    return (
      <TitrationSimulator
        lang={lang}
        highScore={highScores['titration-simulator'] || 0}
        onFinish={(score) => handleGameFinish('titration-simulator', score)}
        onBack={() => setActiveGame(null)}
      />
    );
  }

  if (activeGame === 'compound-synthesis') {
    return (
      <CompoundSynthesisGame
        lang={lang}
        highScore={highScores['compound-synthesis'] || 0}
        onFinish={(score) => handleGameFinish('compound-synthesis', score)}
        onBack={() => setActiveGame(null)}
      />
    );
  }

  if (activeGame === 'chem-blitz') {
    return (
      <ChemBlitzGame
        lang={lang}
        highScore={highScores['chem-blitz'] || 0}
        onFinish={(score) => handleGameFinish('chem-blitz', score)}
        onBack={() => setActiveGame(null)}
      />
    );
  }

  // 6 Mini-Games roster configuration
  const gamesList = [
    {
      id: 'periodic-hunter' as MiniGameId,
      title: t.games.periodicTitle,
      desc: t.games.periodicDesc,
      icon: Table,
      difficulty: 'Orta',
      xpReward: '+100 XP / Tur',
      accentColor: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10 border-cyan-500/30',
      tag: 'TYT & AYT',
    },
    {
      id: 'equation-balancer' as MiniGameId,
      title: t.games.balancerTitle,
      desc: t.games.balancerDesc,
      icon: Scale,
      difficulty: 'Kolay - Zor',
      xpReward: '+150 XP / Denkleştirme',
      accentColor: 'text-amber-400',
      bgColor: 'bg-amber-500/10 border-amber-500/30',
      tag: 'TYT Temel Kanunlar',
    },
    {
      id: 'lewis-builder' as MiniGameId,
      title: t.games.lewisTitle,
      desc: t.games.lewisDesc,
      icon: Atom,
      difficulty: 'Orta',
      xpReward: '+120 XP / Molekül',
      accentColor: 'text-purple-400',
      bgColor: 'bg-purple-500/10 border-purple-500/30',
      tag: 'TYT & AYT VSEPR',
    },
    {
      id: 'titration-simulator' as MiniGameId,
      title: t.games.titrationTitle,
      desc: t.games.titrationDesc,
      icon: FlaskConical,
      difficulty: 'Zor',
      xpReward: '+300 XP / Tam Eşdeğerlik',
      accentColor: 'text-pink-400',
      bgColor: 'bg-pink-500/10 border-pink-500/30',
      tag: 'AYT Asit-Baz',
    },
    {
      id: 'compound-synthesis' as MiniGameId,
      title: t.games.synthesisTitle,
      desc: t.games.synthesisDesc,
      icon: Beaker,
      difficulty: 'Orta - İleri',
      xpReward: '+40 XP / Keşif',
      accentColor: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10 border-emerald-500/30',
      tag: 'AYT Organik Kimya',
    },
    {
      id: 'chem-blitz' as MiniGameId,
      title: t.games.blitzTitle,
      desc: t.games.blitzDesc,
      icon: Zap,
      difficulty: 'Hızlı Sprint (60s)',
      xpReward: '+20-70 XP / Soru',
      accentColor: 'text-orange-400',
      bgColor: 'bg-orange-500/10 border-orange-500/30',
      tag: 'Tüm Müfredat 24 Ünite',
    },
  ];

  return (
    <section className="games-container p-4 max-w-5xl mx-auto flex flex-col gap-6" aria-label={t.games.title}>
      {/* Header */}
      <div className="section-header flex items-center justify-between flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2">
            <Gamepad2 className="text-primary" size={28} aria-hidden="true" />
            <h1 className="text-2xl font-bold tracking-tight">{t.games.title}</h1>
          </div>
          <p className="subtitle-text text-sm opacity-80">{t.games.subtitle}</p>
        </div>

        <div className="telemetry-pill">
          <span>Toplam Oyun: 6 Mini-Oyun</span>
        </div>
      </div>

      {/* Daily Challenge Banner */}
      <div className="daily-challenge-banner p-4 bg-gradient-to-r from-primary/15 via-surface to-amber-500/15 border border-primary/30 rounded-2xl flex items-center justify-between flex-wrap gap-3 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-primary/20 text-primary">
            <Flame size={24} />
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider font-bold text-primary">
              Günün Kimya Meydan Okuması
            </div>
            <div className="text-sm font-bold">
              Chem-Blitz 60s Koşusunda 100+ Puan Al ve 5x Seriyi Yakala!
            </div>
            <div className="text-xs opacity-70">Ödül: +50 Bonus XP & Günlük Seri Koruma</div>
          </div>
        </div>

        <button
          type="button"
          onClick={() => setActiveGame('chem-blitz')}
          className="btn-primary py-2 px-4 text-xs font-bold flex items-center gap-1.5"
        >
          <span>Meydan Oku</span>
          <ChevronRight size={14} />
        </button>
      </div>

      {/* 6 Games Selector Grid */}
      <div className="games-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {gamesList.map((game) => {
          const GameIcon = game.icon;
          const bestScore = highScores[game.id] || 0;

          return (
            <div
              key={game.id}
              onClick={() => setActiveGame(game.id)}
              className="game-card p-5 bg-surface border border-subtle hover:border-primary/50 rounded-2xl flex flex-col justify-between gap-4 transition-all hover:scale-102 hover:shadow-xl cursor-pointer group"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl border ${game.bgColor} ${game.accentColor}`}>
                    <GameIcon size={24} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-surface-elevated border border-subtle">
                    {game.tag}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-base group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-xs opacity-75 line-clamp-2 mt-1 leading-relaxed">
                    {game.desc}
                  </p>
                </div>
              </div>

              <div className="pt-3 border-t border-subtle/50 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 font-semibold text-amber-400">
                  <Trophy size={14} />
                  <span>Rekor: {bestScore}</span>
                </div>

                <div className="flex items-center gap-1 text-primary font-bold">
                  <span>{t.games.playNow}</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
