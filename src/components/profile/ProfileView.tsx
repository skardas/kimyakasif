import React, { useMemo, useState } from 'react';
import {
  ChevronLeft,
  Sparkles,
  Check,
  Star,
  Play,
  Plus,
  Trash2,
  CheckCircle2,
  Zap,
  Search,
  FlaskConical,
  Scale,
  Target,
  Trophy,
  Flame,
  Crown,
} from 'lucide-react';
import type { CompiledQuestion, LanguageCode } from '../../types/chemistry';
import type { AppState, LearnerProfile } from '../../store/useAppStore';
import { todayStamp } from '../../store/useAppStore';
import { redesignStrings, redesignExtra } from '../../i18n/redesignStrings';
import { APP_SHELL_STRINGS } from '../../i18n/appShellStrings';
import { UI_TRANSLATIONS } from '../../i18n/translations';
import { ALL_CHEMISTRY_UNITS } from '../../data/units';
import { compileUnitQuestions } from '../../engine/questionGenerator';
import { compileAllFlashcards } from '../../engine/flashcardGenerator';
import { generateAiCoachReport } from '../../engine/aiCoachEngine';
import { formatChemText } from '../common/ChemFormula';
import { ConfirmDialog } from '../common/ConfirmDialog';
import { QuizSessionModal } from '../exams/QuizSessionModal';

export type ProfileTab = 'dashboard' | 'analytics' | 'mistakes' | 'bookmarks' | 'profiles';
type Track = LearnerProfile['targetTrack'];

export interface ProfileViewProps {
  lang: LanguageCode;
  store: AppState;
  initialTab?: ProfileTab;
  /** Daily question goal and today's solved count (the same numbers as the home ring). */
  dailyGoal?: number;
  todayCount?: number;
  onOpenSettings: () => void;
  onBack?: () => void;
  onOpenUnitQuiz?: (unitId: string) => void;
  onOpenCards?: () => void;
  onOpenSlides?: () => void;
  /** Records an answer (defaults to the store; App wraps it to also bump today's count). */
  onRecordQuestion?: (qId: string, isCorrect: boolean) => void;
}

/** Avatar colours (face, edge) for new profiles; stored on the profile as "c0".."c5". */
const AVATAR_COLORS: [string, string, string][] = [
  ['#A78BFA', '#5B32C9', '#3B1C91'],
  ['#2DD9C3', '#0C8073', '#07564E'],
  ['#F6B73C', '#A86A08', '#7A4B02'],
  ['#6FA8FF', '#1B3FA8', '#173680'],
  ['#FF8FA0', '#C2264A', '#7F1630'],
  ['#5EE6A8', '#0E8A52', '#06603E'],
];

/** Lit-sphere colours and icons for the 8 badges (unlocked state). */
const BADGES: { icon: React.ReactNode; c: string; cd: string }[] = [
  { icon: <Zap size={24} />, c: '#FFD873', cd: '#A86A08' },
  { icon: <Search size={24} />, c: '#6FA8FF', cd: '#1B3FA8' },
  { icon: <FlaskConical size={24} />, c: '#5EE6A8', cd: '#0E8A52' },
  { icon: <Scale size={24} />, c: '#C9A2FF', cd: '#5B32C9' },
  { icon: <Target size={24} />, c: '#FF8FA0', cd: '#9C1830' },
  { icon: <Trophy size={24} />, c: '#FFD873', cd: '#A86A08' },
  { icon: <Flame size={24} />, c: '#FF8FA0', cd: '#9C1830' },
  { icon: <Crown size={24} />, c: '#C9A2FF', cd: '#5B32C9' },
];

const TRACK_OPTIONS: [Track, string][] = [
  ['TYT_ONLY', 'TYT'],
  ['AYT_FOCUS', 'AYT'],
  ['TYT_FIRST', 'TYT → AYT'],
];

const AvatarTile: React.FC<{ profile: Pick<LearnerProfile, 'avatar' | 'name'>; lang: LanguageCode; size?: 'md' | 'lg' }> = ({
  profile,
  lang,
  size = 'md',
}) => {
  const m = /^c(\d)$/.exec(profile.avatar || '');
  const col = m ? AVATAR_COLORS[Number(m[1])] ?? AVATAR_COLORS[0] : AVATAR_COLORS[0];
  const label = m ? (profile.name.trim().charAt(0) || '?').toLocaleUpperCase(lang) : profile.avatar || '?';
  return (
    <span
      className={`ky-tile pf-avatar pf-avatar--${size}`}
      aria-hidden="true"
      style={{ ['--t' as string]: col[0], ['--td' as string]: col[1], ['--te' as string]: col[2] }}
    >
      {label}
    </span>
  );
};

export const ProfileView: React.FC<ProfileViewProps> = ({
  lang,
  store,
  initialTab = 'dashboard',
  dailyGoal,
  todayCount,
  onOpenSettings,
  onBack,
  onOpenUnitQuiz,
  onOpenCards,
  onOpenSlides,
  onRecordQuestion,
}) => {
  const r = redesignStrings(lang);
  const rx = redesignExtra(lang);
  const sh = APP_SHELL_STRINGS[lang] ?? APP_SHELL_STRINGS.tr;
  const t = UI_TRANSLATIONS[lang];
  const profile = store.activeProfile;
  const goal = dailyGoal ?? profile.dailyQuestionGoal;

  const [activeTab, setActiveTab] = useState<ProfileTab>(initialTab);
  const [session, setSession] = useState<{
    title: string;
    subtitle?: string;
    examType: 'MISTAKE' | 'BOOKMARK';
    questions: CompiledQuestion[];
  } | null>(null);
  const [newName, setNewName] = useState('');
  const [newColor, setNewColor] = useState(1);
  const [newTrack, setNewTrack] = useState<Track>('TYT_FIRST');
  const [pendingDelete, setPendingDelete] = useState<LearnerProfile | null>(null);

  const trackLabel = (track: Track) =>
    track === 'TYT_ONLY' ? sh.trackTytOnly : track === 'AYT_FOCUS' ? sh.trackAytFocus : sh.trackSequential;

  // Coach report, built with the same daily goal the home screen shows
  const report = useMemo(
    () => generateAiCoachReport({ ...profile, dailyQuestionGoal: goal }, lang),
    [profile, goal, lang]
  );

  const totalCards = useMemo(() => compileAllFlashcards(ALL_CHEMISTRY_UNITS, lang).length, [lang]);

  const resolveQuestions = (ids: string[]): CompiledQuestion[] => {
    const cache = new Map<string, CompiledQuestion[]>();
    const out: CompiledQuestion[] = [];
    ids.forEach((id) => {
      const uId = id.slice(0, 3);
      if (!cache.has(uId)) {
        const u = ALL_CHEMISTRY_UNITS.find((unit) => unit.id === uId);
        cache.set(uId, u ? compileUnitQuestions(u, lang) : []);
      }
      const found = cache.get(uId)!.find((q) => q.id === id);
      if (found) out.push(found);
    });
    return out;
  };

  const mistakes = useMemo(() => resolveQuestions(store.mistakeQuestionIds), [store.mistakeQuestionIds, lang]);
  const starred = useMemo(() => resolveQuestions(store.bookmarkedQuestionIds), [store.bookmarkedQuestionIds, lang]);

  const unitLabel = (unitId: string) => {
    const u = ALL_CHEMISTRY_UNITS.find((x) => x.id === unitId);
    if (!u) return unitId.toUpperCase();
    return `${String(u.order).padStart(2, '0')} · ${u.title[lang] || u.title.tr}`;
  };

  const tabs: { id: ProfileTab | 'settings'; label: string }[] = [
    { id: 'dashboard', label: r.tabCoach },
    { id: 'analytics', label: r.tabAnalytics },
    { id: 'mistakes', label: r.tabMistakes },
    { id: 'profiles', label: r.profiles },
    { id: 'settings', label: r.openSettings },
  ];
  const isTabOn = (id: ProfileTab | 'settings') => id === activeTab || (id === 'mistakes' && activeTab === 'bookmarks');

  // ------------------------------------------------------------------ Coach
  const renderCoach = () => {
    const focusMission = report.dailyMissions.find((m) => m.unitId);
    const focusUnitId = focusMission?.unitId ?? 'u01';
    const focusTitle = report.allTopics.find((x) => x.unitId === focusUnitId)?.unitTitle ?? focusUnitId;
    const solvedToday = todayCount ?? report.dailyMissions[0]?.currentCount ?? 0;
    const cardsMission = report.dailyMissions.find((m) => m.category === 'CARDS');
    const todayRec = profile.dailyHistory.find((h) => h.date === todayStamp());
    const minutesToday = todayRec?.studyMinutes ?? 0;
    const minutesGoal = profile.dailyStudyMinutesGoal;
    const waitingCards = Math.max(0, totalCards - profile.masteredCardIds.length);

    const plan = [
      {
        key: 'solve',
        done: solvedToday >= goal,
        title: rx.planSolve(goal),
        sub: rx.planSolveSub(unitLabel(focusUnitId), Math.min(solvedToday, goal), goal),
        action: rx.planStart,
        primary: true,
        onClick: () => onOpenUnitQuiz?.(focusUnitId),
      },
      {
        key: 'cards',
        done: !!cardsMission?.completed,
        title: rx.planCards(cardsMission?.targetCount ?? 10),
        sub: rx.planCardsSub(waitingCards),
        action: rx.planOpen,
        primary: false,
        onClick: () => onOpenCards?.(),
      },
      {
        key: 'study',
        done: minutesToday >= minutesGoal,
        title: rx.planStudy(minutesGoal),
        sub: rx.planStudySub(Math.min(minutesToday, minutesGoal), minutesGoal),
        action: rx.planSlides,
        primary: false,
        onClick: () => onOpenSlides?.(),
      },
    ];
    const doneCount = plan.filter((p) => p.done).length;

    const totalSolved = profile.solvedQuestionIds.length;
    const highNet = store.examResults.some((x) => x.netScore >= 14);
    const unlocked = [
      totalSolved >= 1,
      totalSolved >= 50,
      store.xp >= 500,
      totalSolved >= 200,
      totalSolved >= 20 && store.mistakeQuestionIds.length <= 5,
      store.examResults.length >= 5,
      store.streakDays >= 3,
      highNet || store.xp >= 1000,
    ];
    const unlockedCount = unlocked.filter(Boolean).length;

    return (
      <div className="pf-stack">
        <section className="ky-stage pf-coach">
          <div className="ky-floor" aria-hidden="true" />
          <span className="ky-tile ky-tile--violet pf-coach__tile ky-float" aria-hidden="true">
            <Sparkles size={26} />
          </span>
          <div className="pf-coach__text">
            <p className="ky-eyebrow pf-coach__eyebrow">{rx.coachEyebrow(profile.name)}</p>
            <p className="ky-disp ky-fs-20 pf-coach__line">{rx.coachHeadline(focusTitle, goal)}</p>
          </div>
        </section>

        <section className="ky-card pf-list" aria-labelledby="pf-plan-title">
          <div className="pf-list__head">
            <h2 id="pf-plan-title" className="ky-fs-16">{rx.todayPlan}</h2>
            <span className="ky-mono pf-count">
              {doneCount} / {plan.length}
            </span>
          </div>
          {plan.map((p) => (
            <div key={p.key} className={`pf-plan ${p.done ? 'is-done' : ''}`}>
              <span className="pf-check" aria-hidden="true">
                {p.done && <Check size={16} strokeWidth={3} />}
              </span>
              <span className="pf-plan__text">
                <span className="ky-fs-15 pf-plan__title">{p.title}</span>
                <span className="ky-fs-12 pf-plan__sub">{p.sub}</span>
              </span>
              <button
                type="button"
                className={`ky-chip ky-chip--lg pf-plan__go ${p.primary ? 'ky-chip--accent' : ''}`}
                data-sfx={p.primary ? 'start' : undefined}
                onClick={p.onClick}
              >
                {p.action}
              </button>
            </div>
          ))}
        </section>

        <div className="pf-sechead">
          <h2 className="ky-fs-18">{rx.badges}</h2>
          <span className="ky-mono pf-count">
            {unlockedCount} / {BADGES.length}
          </span>
        </div>
        <ul className="pf-badges" aria-label={rx.badges}>
          {BADGES.map((b, i) => (
            <li key={i} className={`pf-badge ${unlocked[i] ? 'is-on' : ''}`} title={rx.badgeDescs[i]}>
              <span
                className="pf-badge__orb"
                aria-hidden="true"
                style={unlocked[i] ? { ['--c' as string]: b.c, ['--cd' as string]: b.cd } : undefined}
              >
                {unlocked[i] && b.icon}
              </span>
              <span className="ky-fs-12 pf-badge__name">{rx.badgeNames[i]}</span>
              <span className="pf-sr">{unlocked[i] ? rx.badgeDescs[i] : rx.badgeLocked}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // ------------------------------------------------------------- Analytics
  const renderAnalytics = () => {
    const ringLen = 2 * Math.PI * 24;
    const tytUnits = ALL_CHEMISTRY_UNITS.filter((u) => u.exam === 'TYT').length;
    const aytUnits = ALL_CHEMISTRY_UNITS.length - tytUnits;
    const stages = [
      { exam: 'TYT', pct: report.tytMasteryPercent, n: tytUnits, color: 'var(--accent)' },
      { exam: 'AYT', pct: report.aytMasteryPercent, n: aytUnits, color: 'var(--violet)' },
    ];

    const days = Array.from({ length: 7 }, (_, i) => {
      const d = new Date();
      d.setDate(d.getDate() - (6 - i));
      const stamp = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      const v = profile.dailyHistory.find((h) => h.date === stamp)?.questionsSolved ?? 0;
      return { stamp, v, day: rx.dayShort[(d.getDay() + 6) % 7] };
    });
    const max = Math.max(goal, ...days.map((d) => d.v), 1);
    const BAR_MAX = 100;

    const answers = Object.values(store.solvedQuestionIds);
    const correct = answers.filter((v) => v === true).length;
    const wrong = answers.length - correct;
    const empty = store.examResults.reduce((acc, x) => acc + (x.empty || 0), 0);
    const net = (correct - wrong / 4).toLocaleString(lang, { maximumFractionDigits: 2 });
    const weak = report.weakTopics.slice(0, 4);

    return (
      <div className="pf-stack">
        <section className="pf-rings" aria-label={r.tabAnalytics}>
          {stages.map((s) => (
            <div key={s.exam} className="ky-card pf-ring">
              <svg role="img" aria-label={rx.stageAria(s.exam, s.pct)} width="60" height="60" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="24" fill="none" stroke="var(--raised)" strokeWidth="8" />
                {s.pct > 0 && (
                  <circle
                    cx="30"
                    cy="30"
                    r="24"
                    fill="none"
                    stroke={s.color}
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={ringLen}
                    strokeDashoffset={ringLen * (1 - Math.min(100, s.pct) / 100)}
                    transform="rotate(-90 30 30)"
                    className="pf-ring__fg"
                  />
                )}
              </svg>
              <div>
                <p className="ky-mono ky-disp pf-ring__v">%{s.pct}</p>
                <p className="ky-fs-12 pf-muted">{rx.stageUnits(s.exam, s.n)}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="ky-card pf-panel" aria-labelledby="pf-daily-title">
          <div className="pf-panel__head">
            <h2 id="pf-daily-title" className="ky-fs-16">{rx.dailySolved}</h2>
            <span className="ky-fs-12 pf-muted">{rx.last7Goal(goal)}</span>
          </div>
          <div className="pf-chart" role="img" aria-label={rx.chartAria(days.map((d) => d.v).join(', '))}>
            <div className="pf-chart__plot" style={{ ['--bar-max' as string]: `${BAR_MAX}px` }}>
              <div
                className="pf-chart__goal"
                aria-hidden="true"
                style={{ insetBlockEnd: `${Math.round((goal / max) * BAR_MAX)}px` }}
              />
              {days.map((d) => (
                <div key={d.stamp} className="pf-chart__col" aria-hidden="true">
                  <span className="ky-mono pf-chart__v">{d.v}</span>
                  <span
                    className={`pf-chart__bar ${d.v >= goal ? 'is-hit' : ''}`}
                    style={{ blockSize: `${Math.max(4, Math.round((d.v / max) * BAR_MAX))}px` }}
                  />
                </div>
              ))}
            </div>
            <div className="pf-chart__days" aria-hidden="true">
              {days.map((d) => (
                <span key={d.stamp}>{d.day}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="ky-card pf-panel" aria-labelledby="pf-split-title">
          <h2 id="pf-split-title" className="ky-fs-16">{rx.answerSplit}</h2>
          <div
            className="pf-split"
            role="img"
            aria-label={`${rx.correctN(correct)}, ${rx.wrongN(wrong)}, ${rx.emptyN(empty)}`}
          >
            {correct + wrong + empty === 0 ? (
              <span className="pf-split__none" />
            ) : (
              <>
                {correct > 0 && <span className="pf-split__ok" style={{ flexGrow: correct }} />}
                {wrong > 0 && <span className="pf-split__bad" style={{ flexGrow: wrong }} />}
                {empty > 0 && <span className="pf-split__empty" style={{ flexGrow: empty }} />}
              </>
            )}
          </div>
          <div className="pf-chips">
            <span className="ky-chip ky-chip--ok">{rx.correctN(correct)}</span>
            <span className="ky-chip ky-chip--bad">{rx.wrongN(wrong)}</span>
            <span className="ky-chip">{rx.emptyN(empty)}</span>
            <span className="ky-chip ky-chip--accent pf-chips__end">{rx.netN(net)}</span>
          </div>
        </section>

        <section className="ky-card pf-list" aria-labelledby="pf-weak-title">
          <div className="pf-list__head">
            <h2 id="pf-weak-title" className="ky-fs-16">{rx.weakTopics}</h2>
          </div>
          {weak.length === 0 ? (
            <p className="ky-fs-14 pf-muted pf-list__empty">{rx.noWeakTopics}</p>
          ) : (
            weak.map((w) => {
              const tone = w.accuracyPercent < 50 ? 'var(--bad)' : w.accuracyPercent < 70 ? 'var(--gold)' : 'var(--ok)';
              return (
                <div key={w.unitId} className="pf-topic">
                  <span className="ky-fs-14 pf-topic__name">{w.unitTitle}</span>
                  <div className="ky-track pf-topic__bar" aria-hidden="true">
                    <div className="ky-fill" style={{ inlineSize: `${Math.max(3, w.accuracyPercent)}%`, background: tone }} />
                  </div>
                  <span className="ky-mono pf-topic__pct">%{w.accuracyPercent}</span>
                </div>
              );
            })
          )}
        </section>
      </div>
    );
  };

  // ------------------------------------------------------ Mistakes / starred
  const showStarred = activeTab === 'bookmarks';
  const listQs = showStarred ? starred : mistakes;

  const openSingle = (q: CompiledQuestion, kind: 'MISTAKE' | 'BOOKMARK') =>
    setSession({
      title: kind === 'MISTAKE' ? rx.retryTitle : rx.starredTitle,
      subtitle: unitLabel(q.unitId),
      examType: kind,
      questions: [q],
    });

  const renderMistakes = () => (
    <div className="pf-stack">
      <div role="tablist" aria-label={rx.listAria} className="ky-seg">
        <button type="button" role="tab" aria-selected={!showStarred} className="ky-fs-14" onClick={() => setActiveTab('mistakes')}>
          {r.myMistakes} · <span className="ky-mono">{store.mistakeQuestionIds.length}</span>
        </button>
        <button type="button" role="tab" aria-selected={showStarred} className="ky-fs-14" onClick={() => setActiveTab('bookmarks')}>
          {r.starred} · <span className="ky-mono">{store.bookmarkedQuestionIds.length}</span>
        </button>
      </div>

      {listQs.length === 0 ? (
        <div className="ky-card ky-empty">
          <span className={`ky-tile ${showStarred ? 'ky-tile--gold' : 'ky-tile--ok'}`} aria-hidden="true">
            {showStarred ? <Star size={24} /> : <CheckCircle2 size={24} />}
          </span>
          <h3 className="ky-disp">{showStarred ? rx.emptyStarredTitle : rx.emptyMistakesTitle}</h3>
          <p>{showStarred ? rx.emptyStarredBody : rx.emptyMistakesBody}</p>
        </div>
      ) : (
        <ul className="pf-qlist">
          {listQs.map((q) => (
            <li key={q.id} className="ky-card pf-q">
              <div className="pf-q__meta">
                {showStarred ? (
                  <span className="ky-chip ky-chip--gold">{r.starred}</span>
                ) : (
                  <span className="ky-chip ky-chip--bad">{rx.wrongChip}</span>
                )}
                <span className="ky-chip pf-q__unit">{unitLabel(q.unitId)}</span>
                {showStarred && (
                  <button
                    type="button"
                    className="ky-icon-btn is-on pf-q__star"
                    onClick={() => store.toggleBookmark(q.id)}
                    aria-label={rx.unstar}
                    title={rx.unstar}
                  >
                    <Star size={18} fill="currentColor" aria-hidden="true" />
                  </button>
                )}
              </div>
              <p className="ky-fs-15 pf-q__stem">{formatChemText(q.stem)}</p>
              <div className="pf-q__foot">
                <span className="ky-fs-13 pf-q__right">
                  {rx.correctIs} {formatChemText(q.options[q.correctIndex] ?? '')}
                </span>
                <button
                  type="button"
                  className="ky-chip ky-chip--lg pf-q__go"
                  data-sfx="start"
                  onClick={() => openSingle(q, showStarred ? 'BOOKMARK' : 'MISTAKE')}
                >
                  {showStarred ? rx.solveOne : rx.solution}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  // -------------------------------------------------------------- Profiles
  const handleCreate = (e: React.FormEvent) => {
    e.preventDefault();
    const name = newName.trim();
    if (!name) return;
    store.createProfile(name, `c${newColor}`, newTrack);
    setNewName('');
  };

  const renderProfiles = () => (
    <div className="pf-stack">
      <p className="ky-eyebrow">{rx.studentProfiles(store.profiles.length)}</p>
      <ul className="pf-profiles">
        {store.profiles.map((p) => {
          const isActive = p.id === profile.id;
          const lv = Math.max(1, Math.floor(Math.max(0, p.stats.xp) / 250) + 1);
          return (
            <li key={p.id} className="pf-profile-row">
              <button
                type="button"
                className={`ky-opt pf-profile ${isActive ? 'on' : ''}`}
                aria-pressed={isActive}
                onClick={() => !isActive && store.switchProfile(p.id)}
              >
                <AvatarTile profile={p} lang={lang} />
                <span className="pf-profile__text">
                  <strong className="ky-fs-16">{p.name}</strong>
                  <span className="ky-fs-13">
                    Lv.{lv} · <span className="ky-mono">{p.stats.xp}</span> XP · {trackLabel(p.targetTrack)}
                  </span>
                </span>
                {isActive ? (
                  <span className="ky-chip ky-chip--accent">{r.active.charAt(0).toLocaleUpperCase(lang) + r.active.slice(1)}</span>
                ) : (
                  <span className="ky-chip">{rx.makeActive}</span>
                )}
              </button>
              {!isActive && store.profiles.length > 1 && (
                <button
                  type="button"
                  className="ky-icon-btn pf-profile__del"
                  onClick={() => setPendingDelete(p)}
                  aria-label={`${rx.deleteProfile}: ${p.name}`}
                  title={rx.deleteProfile}
                >
                  <Trash2 size={18} aria-hidden="true" />
                </button>
              )}
            </li>
          );
        })}
      </ul>

      <form className="ky-card pf-form" onSubmit={handleCreate} aria-labelledby="pf-new-title">
        <h2 id="pf-new-title" className="ky-fs-18">{rx.newProfile}</h2>
        <label className="pf-field">
          <span className="ky-eyebrow">{rx.nameLabel}</span>
          <input
            type="text"
            className="ky-input pf-input"
            value={newName}
            maxLength={40}
            onChange={(e) => setNewName(e.target.value)}
            placeholder={rx.namePlaceholder}
            required
          />
        </label>
        <div className="pf-field">
          <span className="ky-eyebrow" id="pf-color-label">{rx.avatarColor}</span>
          <div className="pf-colors" role="radiogroup" aria-labelledby="pf-color-label">
            {AVATAR_COLORS.map(([c, , e], i) => (
              <button
                key={c}
                type="button"
                role="radio"
                aria-checked={newColor === i}
                aria-label={rx.colorNames[i]}
                className="pf-color"
                style={{ ['--c' as string]: c, ['--ce' as string]: e }}
                onClick={() => setNewColor(i)}
              />
            ))}
          </div>
        </div>
        <div className="pf-field">
          <span className="ky-eyebrow" id="pf-track-label">{rx.targetLabel}</span>
          <div className="ky-seg" role="radiogroup" aria-labelledby="pf-track-label">
            {TRACK_OPTIONS.map(([val, label]) => (
              <button
                key={val}
                type="button"
                role="radio"
                aria-checked={newTrack === val}
                className={`ky-fs-14 ${val === 'TYT_FIRST' ? 'pf-seg-wide' : ''}`}
                onClick={() => setNewTrack(val)}
              >
                <bdi>{label}</bdi>
              </button>
            ))}
          </div>
        </div>
        <button type="submit" className="ky-btn ky-btn--primary ky-btn--block" disabled={!newName.trim()}>
          <Plus size={18} aria-hidden="true" />
          <span>{rx.createProfile}</span>
        </button>
      </form>

      <p className="ky-fs-13 pf-note">{rx.privacyNote}</p>
    </div>
  );

  const listFooter =
    (activeTab === 'mistakes' || activeTab === 'bookmarks') && listQs.length > 0 ? (
      <footer className="ky-screen-foot pf-foot">
        <button
          type="button"
          className="ky-btn ky-btn--primary ky-btn--lg ky-grow"
          data-sfx="start"
          onClick={() =>
            setSession({
              title: showStarred ? rx.starredTitle : rx.retryTitle,
              subtitle: showStarred ? rx.starredSessionSub(listQs.length) : rx.mistakeSessionSub(listQs.length),
              examType: showStarred ? 'BOOKMARK' : 'MISTAKE',
              questions: listQs,
            })
          }
        >
          <Play size={16} fill="currentColor" aria-hidden="true" />
          <span>{showStarred ? rx.solveAllStarred(listQs.length) : rx.retryAll(listQs.length)}</span>
        </button>
      </footer>
    ) : null;

  return (
    <section className="ky-screen pf" aria-labelledby="pf-title">
      <header className="ky-screen-head pf-head">
        {onBack && (
          <button type="button" className="ky-icon-btn ky-only-narrow" onClick={onBack} aria-label={rx.back}>
            <ChevronLeft size={20} aria-hidden="true" className="pf-flip" />
          </button>
        )}
        <h1 id="pf-title" className="ky-disp ky-fs-24">{rx.profileTitle}</h1>
        <span className="ky-chip ky-chip--gold pf-head__streak">{rx.streakDays(store.streakDays)}</span>
      </header>

      <nav className="ky-scroll-x pf-tabs" role="tablist" aria-label={rx.profileTabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={isTabOn(tab.id)}
            className={`ky-chip ky-chip--lg pf-tab ${isTabOn(tab.id) ? 'ky-chip--accent' : ''}`}
            onClick={() => (tab.id === 'settings' ? onOpenSettings() : setActiveTab(tab.id))}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="ky-fit">
        <div className="pf-body">
          {activeTab === 'dashboard' && renderCoach()}
          {activeTab === 'analytics' && renderAnalytics()}
          {(activeTab === 'mistakes' || activeTab === 'bookmarks') && renderMistakes()}
          {activeTab === 'profiles' && renderProfiles()}
        </div>
      </div>

      {listFooter}

      {pendingDelete && (
        <ConfirmDialog
          title={rx.deleteConfirmTitle(pendingDelete.name)}
          body={rx.deleteConfirmBody}
          confirmLabel={rx.deleteAction}
          cancelLabel={t.profile.cancel}
          onCancel={() => setPendingDelete(null)}
          onConfirm={() => {
            store.deleteProfile(pendingDelete.id);
            setPendingDelete(null);
          }}
        />
      )}

      {session && (
        <QuizSessionModal
          title={session.title}
          subtitle={session.subtitle}
          examType={session.examType}
          questions={session.questions}
          isExamMode={false}
          durationMinutes={Math.max(10, Math.ceil(session.questions.length * 1.5))}
          lang={lang}
          bookmarkedQuestionIds={store.bookmarkedQuestionIds}
          onRecordQuestion={onRecordQuestion ?? store.recordQuestionResult}
          onToggleBookmark={store.toggleBookmark}
          onClose={() => setSession(null)}
        />
      )}
    </section>
  );
};
