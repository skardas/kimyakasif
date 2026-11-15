import React, { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { LANGUAGES } from '../../i18n/translations';
import { SHELL_STRINGS } from '../../i18n/shellStrings';
import { APP_SHELL_STRINGS } from '../../i18n/appShellStrings';
import { DAILY_GOAL_OPTIONS, type DailyGoal } from '../../store/usePreferences';
import type { LanguageCode } from '../../types/chemistry';

export type ExamPreference = 'ALL' | 'TYT' | 'AYT';

export interface OnboardingProps {
  lang: LanguageCode;
  onSetLanguage: (lang: LanguageCode) => void;
  onFinish: (examPref: ExamPreference, dailyGoal: DailyGoal) => void;
}

/** Dark 3D hero per step: NH3 molecule → TYT→AYT tiles → goal bars → lit atom. */
const OnboardingHero: React.FC<{ step: number; chip: string }> = ({ step, chip }) => (
  <div
    className={`onboarding-hero hero-3d-stage ky-stage step-${step} ${step > 0 ? 'compact' : ''}`}
    aria-hidden="true"
  >
    <div className="ky-floor" />
    {step === 0 && (
      <>
        <div className="hero-molecule ky-float">
          <div className="ky-orbit" style={{ left: 10, top: 86, inlineSize: 260, blockSize: 92, transform: 'rotate(-20deg)' }} />
          <div className="ky-bond" style={{ left: 140, top: 126, inlineSize: 96, transform: 'rotate(150deg)' }} />
          <div className="ky-bond" style={{ left: 140, top: 126, inlineSize: 96, transform: 'rotate(30deg)' }} />
          <div className="ky-bond" style={{ left: 140, top: 126, inlineSize: 84, transform: 'rotate(-90deg)' }} />
          <div className="ky-atom" style={{ ['--c' as string]: '#E9EEF5', ['--cd' as string]: '#7C8798', left: 22, top: 142, inlineSize: 68, blockSize: 68 }} />
          <div className="ky-atom" style={{ ['--c' as string]: '#E9EEF5', ['--cd' as string]: '#7C8798', left: 190, top: 142, inlineSize: 68, blockSize: 68 }} />
          <div className="ky-atom" style={{ ['--c' as string]: '#E9EEF5', ['--cd' as string]: '#7C8798', left: 110, top: 6, inlineSize: 60, blockSize: 60 }} />
          <div className="ky-atom" style={{ ['--c' as string]: '#6FA8FF', ['--cd' as string]: '#1B3FA8', left: 84, top: 72, inlineSize: 112, blockSize: 112 }} />
        </div>
        <span className="ky-chip onboarding-3d-chip" key="chip-0">
          {chip}
        </span>
      </>
    )}
    {step === 1 && (
      <div className="hero-track">
        <span className="ky-tile ky-float">TYT</span>
        <ArrowRight className="hero-track-arrow" size={28} strokeWidth={2.6} />
        <span className="ky-tile ky-tile--violet ky-float">AYT</span>
      </div>
    )}
    {step === 2 && (
      <div className="hero-goal ky-float">
        <span />
        <span />
        <span />
        <span />
      </div>
    )}
    {step === 3 && (
      <div className="hero-atom ky-float">
        <div className="ky-atom" style={{ ['--c' as string]: '#5FF2DF', ['--cd' as string]: '#0C8073', left: 0, top: 0, inlineSize: 96, blockSize: 96 }} />
        <div className="ky-orbit" style={{ left: -22, top: 30, inlineSize: 140, blockSize: 38, transform: 'rotate(-18deg)' }} />
      </div>
    )}
  </div>
);

export const Onboarding: React.FC<OnboardingProps> = ({ lang, onSetLanguage, onFinish }) => {
  const s = SHELL_STRINGS[lang];
  const sh = APP_SHELL_STRINGS[lang] ?? APP_SHELL_STRINGS.tr;
  const [step, setStep] = useState(0);
  const [examPref, setExamPref] = useState<ExamPreference>('ALL');
  const [goal, setGoal] = useState<DailyGoal>(20);

  const examOptions: { id: ExamPreference; badge: string; title: string; desc: string }[] = [
    { id: 'TYT', badge: 'TYT', title: 'TYT Kimya', desc: s.tytDesc },
    { id: 'AYT', badge: 'AYT', title: 'AYT Kimya', desc: s.aytDesc },
    { id: 'ALL', badge: '1→2', title: s.both, desc: s.bothDesc },
  ];

  const isLast = step === 3;

  return (
    <div className="onboarding-overlay" role="dialog" aria-modal="true" aria-labelledby="onboarding-title">
      <div className="onboarding-sheet">
        <OnboardingHero step={step} chip={sh.obChips[0]} />

        {step === 0 && (
          <div key="step-body-0" className="onboarding-body step-0 onboarding-3d-enter">
            <h1 id="onboarding-title">{s.ob1Title}</h1>
            <p>{s.ob1Body}</p>
          </div>
        )}

        {step === 1 && (
          <div key="step-body-1" className="onboarding-body onboarding-3d-enter">
            <h1 id="onboarding-title">{s.ob2Title}</h1>
            <p>{s.ob2Body}</p>
            <div className="onboarding-options" role="radiogroup" aria-labelledby="onboarding-title">
              {examOptions.map((o) => {
                const on = examPref === o.id;
                return (
                  <button
                    key={o.id}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    className={`ky-opt onboarding-option ${on ? 'on' : ''}`}
                    onClick={() => setExamPref(o.id)}
                  >
                    <span className="ky-key wide">{o.badge}</span>
                    <span className="onboarding-option-text">
                      <strong>{o.title}</strong>
                      <span>{o.desc}</span>
                    </span>
                    {on && <Check className="onboarding-option-check" size={22} strokeWidth={3} aria-hidden="true" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 2 && (
          <div key="step-body-2" className="onboarding-body onboarding-3d-enter">
            <h1 id="onboarding-title">{s.goalTitle}</h1>
            <p>{s.goalBody}</p>
            <div className="onboarding-options" role="radiogroup" aria-labelledby="onboarding-title">
              {DAILY_GOAL_OPTIONS.map((n, i) => {
                const on = goal === n;
                return (
                  <button
                    key={n}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    className={`ky-opt onboarding-option ${on ? 'on' : ''}`}
                    onClick={() => setGoal(n)}
                  >
                    <span className="ky-key wide ky-mono">{n}</span>
                    <span className="onboarding-option-text">
                      <strong>
                        {n} {s.goalUnit}
                      </strong>
                      <span>{s.goalNames[i]}</span>
                    </span>
                    {on && <Check className="onboarding-option-check" size={22} strokeWidth={3} aria-hidden="true" />}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 3 && (
          <div key="step-body-3" className="onboarding-body onboarding-3d-enter">
            <h1 id="onboarding-title">{s.ob3Title}</h1>
            <p>{sh.obLangBody}</p>
            <div className="onboarding-options two-col" role="radiogroup" aria-labelledby="onboarding-title">
              {LANGUAGES.map((l) => {
                const on = l.code === lang;
                return (
                  <button
                    key={l.code}
                    type="button"
                    role="radio"
                    aria-checked={on}
                    className={`ky-opt onboarding-option ${on ? 'on' : ''}`}
                    onClick={() => onSetLanguage(l.code)}
                  >
                    <span className="ky-key ky-mono">{l.code.toUpperCase()}</span>
                    <strong className="onboarding-lang-name">{l.nativeName}</strong>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="onboarding-footer">
          <div className="ky-dots onboarding-dots" role="img" aria-label={`${step + 1} / 4`}>
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className={i === step ? 'on' : ''} />
            ))}
          </div>
          <div className="onboarding-footer-row">
            {step === 0 ? (
              <button type="button" className="ky-btn-text onboarding-text-btn" onClick={() => onFinish(examPref, goal)}>
                {s.skip}
              </button>
            ) : (
              <button type="button" className="ky-btn-text onboarding-text-btn" onClick={() => setStep(step - 1)}>
                {s.back}
              </button>
            )}
            <button
              type="button"
              className="ky-btn ky-btn--primary ky-btn--lg onboarding-next-btn"
              data-sfx={isLast ? 'start' : undefined}
              onClick={() => (isLast ? onFinish(examPref, goal) : setStep(step + 1))}
            >
              {isLast ? s.start : s.next}
              {!isLast && <ArrowRight size={18} strokeWidth={2.6} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
