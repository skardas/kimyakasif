import React, { useState } from 'react';
import { LANGUAGES } from '../../i18n/translations';
import { SHELL_STRINGS } from '../../i18n/shellStrings';
import { FlaskMark } from '../common/FlaskMark';
import { DAILY_GOAL_OPTIONS, type DailyGoal } from '../../store/usePreferences';
import type { LanguageCode } from '../../types/chemistry';

export type ExamPreference = 'ALL' | 'TYT' | 'AYT';

export interface OnboardingProps {
  lang: LanguageCode;
  onSetLanguage: (lang: LanguageCode) => void;
  onFinish: (examPref: ExamPreference, dailyGoal: DailyGoal) => void;
}

export const Onboarding: React.FC<OnboardingProps> = ({ lang, onSetLanguage, onFinish }) => {
  const s = SHELL_STRINGS[lang];
  const [step, setStep] = useState(0);
  const [examPref, setExamPref] = useState<ExamPreference>('ALL');
  const [goal, setGoal] = useState<DailyGoal>(20);

  const examOptions: { id: ExamPreference; title: string; desc: string }[] = [
    { id: 'TYT', title: 'TYT Kimya', desc: s.tytDesc },
    { id: 'AYT', title: 'AYT Kimya', desc: s.aytDesc },
    { id: 'ALL', title: s.both, desc: s.bothDesc },
  ];

  const isLast = step === 3;

  return (
    <div className="onboarding-overlay" role="dialog" aria-modal="true" aria-labelledby="onboarding-title">
      <div className="onboarding-sheet">
        {step === 0 && (
          <>
            <div className="onboarding-hero">
              <FlaskMark width={160} height={160} />
            </div>
            <div className="onboarding-body">
              <h1 id="onboarding-title">{s.ob1Title}</h1>
              <p>{s.ob1Body}</p>
            </div>
          </>
        )}

        {step === 1 && (
          <div className="onboarding-body padded">
            <h1 id="onboarding-title">{s.ob2Title}</h1>
            <p>{s.ob2Body}</p>
            <div className="onboarding-options" role="radiogroup" aria-labelledby="onboarding-title">
              {examOptions.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  role="radio"
                  aria-checked={examPref === o.id}
                  className={`onboarding-option ${examPref === o.id ? 'active' : ''}`}
                  onClick={() => setExamPref(o.id)}
                >
                  <strong>{o.title}</strong>
                  <span>{o.desc}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="onboarding-body padded">
            <h1 id="onboarding-title">{s.goalTitle}</h1>
            <p>{s.goalBody}</p>
            <div className="onboarding-options" role="radiogroup" aria-labelledby="onboarding-title">
              {DAILY_GOAL_OPTIONS.map((n, i) => (
                <button
                  key={n}
                  type="button"
                  role="radio"
                  aria-checked={goal === n}
                  className={`onboarding-option ${goal === n ? 'active' : ''}`}
                  onClick={() => setGoal(n)}
                >
                  <strong>
                    {n} {s.goalUnit}
                  </strong>
                  <span>{s.goalNames[i]}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="onboarding-body padded">
            <h1 id="onboarding-title">{s.ob3Title}</h1>
            <div className="onboarding-options two-col" role="radiogroup" aria-labelledby="onboarding-title">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  type="button"
                  role="radio"
                  aria-checked={l.code === lang}
                  className={`onboarding-option ${l.code === lang ? 'active' : ''}`}
                  onClick={() => onSetLanguage(l.code)}
                >
                  <strong>{l.nativeName}</strong>
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="onboarding-footer">
          {step === 0 ? (
            <button type="button" className="onboarding-text-btn" onClick={() => onFinish(examPref, goal)}>
              {s.skip}
            </button>
          ) : (
            <button type="button" className="onboarding-text-btn" onClick={() => setStep(step - 1)}>
              {s.back}
            </button>
          )}
          <div className="onboarding-dots" role="img" aria-label={`${step + 1} / 4`}>
            {[0, 1, 2, 3].map((i) => (
              <span key={i} className={i === step ? 'active' : ''} />
            ))}
          </div>
          <button
            type="button"
            className="onboarding-next-btn"
            onClick={() => (isLast ? onFinish(examPref, goal) : setStep(step + 1))}
          >
            {isLast ? s.start : s.next}
          </button>
        </div>
      </div>
    </div>
  );
};
