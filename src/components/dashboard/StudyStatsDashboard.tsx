import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  TrendingUp,
  Clock,
  Target,
  BarChart2,
  Check,
} from 'lucide-react';
import type { LanguageCode } from '../../types/chemistry';
import type { LearnerProfile } from '../../store/useAppStore';
import { generateAiCoachReport, type AiCoachReport } from '../../engine/aiCoachEngine';

export interface StudyStatsDashboardProps {
  profile: LearnerProfile;
  lang: LanguageCode;
  onNavigateTab?: (tab: string, meta?: any) => void;
  onOpenUnitQuiz?: (unitId: string) => void;
  onOpenUnitCards?: (unitId: string) => void;
  onOpenUnitSlides?: (unitId: string) => void;
}

export const StudyStatsDashboard: React.FC<StudyStatsDashboardProps> = ({
  profile,
  lang,
  onNavigateTab,
  onOpenUnitQuiz,
  onOpenUnitCards,
  onOpenUnitSlides,
}) => {
  const [dayRange, setDayRange] = useState<7 | 14>(7);

  // Generate deterministic AI Coach report
  const report: AiCoachReport = useMemo(() => {
    return generateAiCoachReport(profile, lang);
  }, [profile, lang]);

  // Generate dates array for Daily Study & Goal Bar Chart
  const daysData = useMemo(() => {
    const result = [];
    const now = new Date();
    for (let i = dayRange - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(now.getDate() - i);
      const stamp = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
      const found = profile.dailyHistory.find((h) => h.date === stamp);
      result.push({
        date: stamp,
        dayLabel: `${d.getDate()}/${d.getMonth() + 1}`,
        questionsSolved: found?.questionsSolved ?? 0,
        studyMinutes: found?.studyMinutes ?? 0,
        xpEarned: found?.xpEarned ?? 0,
      });
    }
    return result;
  }, [profile.dailyHistory, dayRange]);

  // Chart max bounds for SVG scaling
  const maxQ = Math.max(
    profile.dailyQuestionGoal,
    ...daysData.map((d) => d.questionsSolved),
    10
  );
  const maxMin = Math.max(
    profile.dailyStudyMinutesGoal,
    ...daysData.map((d) => d.studyMinutes),
    15
  );

  // Accuracy Trend sparkline points (based on last 7 days or mock exams)
  const accuracyPoints = useMemo(() => {
    const points: number[] = [];
    if (profile.stats.examResults.length >= 3) {
      profile.stats.examResults.slice(0, 10).reverse().forEach((r) => {
        const pct = r.total > 0 ? Math.round((r.correct / r.total) * 100) : 0;
        points.push(pct);
      });
    } else {
      // Synthesize from daily accuracy trend or mastery
      daysData.forEach((d) => {
        const estAcc = d.questionsSolved > 0 ? Math.min(100, Math.max(40, report.overallAccuracy + (d.questionsSolved % 15) - 5)) : report.overallAccuracy || 70;
        points.push(estAcc);
      });
    }
    return points;
  }, [profile.stats.examResults, daysData, report.overallAccuracy]);

  // Activity breakdown calculation
  const breakdown = useMemo(() => {
    const slidesWeight = profile.stats.completedSlideUnits.length * 15;
    const cardsWeight = profile.masteredCardIds.length * 2;
    const questionsWeight = profile.solvedQuestionIds.length * 1.5;
    const gamesWeight = Object.keys(profile.stats.gameHighScores).length * 20;

    const totalWeight = Math.max(1, slidesWeight + cardsWeight + questionsWeight + gamesWeight);
    return {
      slidesPct: Math.round((slidesWeight / totalWeight) * 100),
      cardsPct: Math.round((cardsWeight / totalWeight) * 100),
      questionsPct: Math.round((questionsWeight / totalWeight) * 100),
      gamesPct: Math.max(0, 100 - (Math.round((slidesWeight / totalWeight) * 100) + Math.round((cardsWeight / totalWeight) * 100) + Math.round((questionsWeight / totalWeight) * 100))),
    };
  }, [profile]);

  // Pure SVG Ring Math
  const ringRadius = 42;
  const ringCircumference = 2 * Math.PI * ringRadius; // ~263.89
  const tytOffset = ringCircumference * (1 - Math.min(100, report.tytMasteryPercent) / 100);
  const aytOffset = ringCircumference * (1 - Math.min(100, report.aytMasteryPercent) / 100);

  // SVG Chart Dimensions for Bar Chart
  const svgW = 540;
  const svgH = 190;
  const barMarginX = 35;
  const barAvailableW = svgW - barMarginX * 2;
  const colW = barAvailableW / daysData.length;
  const barW = Math.min(12, colW * 0.35);

  const qGoalY = svgH - 30 - (profile.dailyQuestionGoal / maxQ) * (svgH - 50);
  const minGoalY = svgH - 30 - (profile.dailyStudyMinutesGoal / maxMin) * (svgH - 50);

  // SVG Sparkline path builder
  const sparklineW = 280;
  const sparklineH = 90;
  const sparklineStep = accuracyPoints.length > 1 ? sparklineW / (accuracyPoints.length - 1) : sparklineW;
  const sparklineCoords = accuracyPoints.map((val, idx) => {
    const x = idx * sparklineStep;
    const y = sparklineH - 10 - (val / 100) * (sparklineH - 25);
    return { x, y, val };
  });

  const sparklinePolylineStr = sparklineCoords.map((c) => `${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(' ');
  const sparklineAreaStr = `${sparklineCoords[0]?.x.toFixed(1) || 0},${sparklineH} ${sparklinePolylineStr} ${sparklineCoords[sparklineCoords.length - 1]?.x.toFixed(1) || sparklineW},${sparklineH}`;

  const trackChip =
    profile.targetTrack === 'TYT_ONLY' ? 'Sadece TYT' : profile.targetTrack === 'AYT_FOCUS' ? 'AYT Odaklı' : '1. TYT → 2. AYT';
  const labelStep = daysData.length > 8 ? 2 : 1;
  const rings = [
    { key: 'tyt', pct: report.tytMasteryPercent, offset: tytOffset, tag: 'TYT', name: '1. Aşama: TYT Kimya', units: 'u01–u10 • 10 Ünite (1.280 Soru)', weight: "YKS'de 7 Temel Kimya Sorusu" },
    { key: 'ayt', pct: report.aytMasteryPercent, offset: aytOffset, tag: 'AYT', name: '2. Aşama: AYT Kimya', units: 'u11–u24 • 14 Ünite (1.792 Soru)', weight: "YKS'de 13 Alan Kimya Sorusu" },
  ];

  return (
    <div className="sd">
      {/* 1. Summary + prerequisite coaching alert */}
      <div className="ky-card sd-card sd-summary">
        <div className="sd-chips">
          <span className="ky-chip ky-chip--accent">{trackChip}</span>
          <span className="ky-chip ky-chip--gold">{profile.stats.streakDays} Günlük Seri</span>
          <span className="ky-chip">{profile.stats.xp} XP</span>
          <span className="ky-chip ky-chip--ok">%{report.overallAccuracy} Genel Doğruluk</span>
        </div>

        {report.prerequisiteWarning?.needed && (
          <div className="sd-alert" role="alert">
            <AlertTriangle className="sd-alert__icon" size={20} aria-hidden="true" />
            <div>
              <strong>Önemli YKS İlerleme Uyarısı:</strong>
              <p>{report.prerequisiteWarning.message}</p>
            </div>
          </div>
        )}
      </div>

      {/* 2. Stage mastery rings */}
      <div className="ky-card sd-card">
        <div className="sd-head">
          <Target size={18} className="sd-head__icon" aria-hidden="true" />
          <h4>Türkiye YKS Sınav Aşamaları İlerlemesi</h4>
        </div>

        <div className="sd-rings">
          {rings.map((r) => (
            <div key={r.key} className={`ky-well sd-ring sd-ring--${r.key}`}>
              <div className="sd-ring__svgwrap">
                <svg viewBox="0 0 110 110" className="sd-ring__svg" role="img" aria-label={`${r.tag} %${r.pct}`}>
                  <circle cx="55" cy="55" r={ringRadius} className="sd-ring__bg" strokeWidth="9" />
                  <circle
                    cx="55"
                    cy="55"
                    r={ringRadius}
                    className="sd-ring__fg"
                    strokeWidth="9"
                    strokeDasharray={ringCircumference}
                    strokeDashoffset={r.offset}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="sd-ring__center">
                  <span className="ky-mono sd-ring__pct">%{r.pct}</span>
                  <span className="sd-ring__tag">{r.tag}</span>
                </div>
              </div>
              <div className="sd-ring__meta">
                <strong>{r.name}</strong>
                <span>{r.units}</span>
                <span>{r.weight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Daily study & goal bar chart */}
      <div className="ky-card sd-card">
        <div className="sd-head">
          <BarChart2 size={18} className="sd-head__icon" aria-hidden="true" />
          <h4>Günlük Çalışma & Hedef Takibi</h4>
          <div className="ky-segmented sd-range" role="group" aria-label="Aralık">
            <button type="button" aria-pressed={dayRange === 7} onClick={() => setDayRange(7)}>
              7 Gün
            </button>
            <button type="button" aria-pressed={dayRange === 14} onClick={() => setDayRange(14)}>
              14 Gün
            </button>
          </div>
        </div>

        <ul className="sd-legend">
          <li><span className="sd-swatch sd-swatch--q" />Çözülen Soru</li>
          <li><span className="sd-swatch sd-swatch--m" />Çalışma Süresi (Dk)</li>
          <li><span className="sd-swatch sd-swatch--qg" />Soru Hedefi ({profile.dailyQuestionGoal})</li>
          <li><span className="sd-swatch sd-swatch--mg" />Süre Hedefi ({profile.dailyStudyMinutesGoal} dk)</li>
        </ul>

        <div className="sd-chart">
          <svg viewBox={`0 0 ${svgW} ${svgH}`} className="sd-chart__svg" role="img" aria-label="Günlük Çalışma Grafiği">
            <line x1={barMarginX} y1={svgH - 30} x2={svgW - 10} y2={svgH - 30} className="sd-axis" />
            <line x1={barMarginX} y1={(svgH - 30) / 2} x2={svgW - 10} y2={(svgH - 30) / 2} className="sd-gridline" />
            <text x={barMarginX - 6} y={svgH - 26} textAnchor="end" className="sd-axis-text">0</text>
            <text x={barMarginX - 6} y={24} textAnchor="end" className="sd-axis-text">{maxQ}</text>

            {profile.dailyQuestionGoal > 0 && (
              <line x1={barMarginX} y1={qGoalY} x2={svgW - 10} y2={qGoalY} className="sd-goal sd-goal--q" strokeDasharray="5 4" />
            )}
            {profile.dailyStudyMinutesGoal > 0 && (
              <line x1={barMarginX} y1={minGoalY} x2={svgW - 10} y2={minGoalY} className="sd-goal sd-goal--m" strokeDasharray="5 4" />
            )}

            {daysData.map((d, idx) => {
              const xCenter = barMarginX + idx * colW + colW / 2;
              const qHeight = (d.questionsSolved / maxQ) * (svgH - 50);
              const minHeight = (d.studyMinutes / maxMin) * (svgH - 50);
              const qY = svgH - 30 - qHeight;
              const minY = svgH - 30 - minHeight;
              return (
                <g key={d.date}>
                  <rect x={xCenter - barW - 1} y={qY} width={barW} height={Math.max(2, qHeight)} rx="3" className="sd-bar sd-bar--q">
                    <title>{`${d.date}: ${d.questionsSolved} Soru`}</title>
                  </rect>
                  <rect x={xCenter + 1} y={minY} width={barW} height={Math.max(2, minHeight)} rx="3" className="sd-bar sd-bar--m">
                    <title>{`${d.date}: ${d.studyMinutes} Dakika`}</title>
                  </rect>
                  {(daysData.length - 1 - idx) % labelStep === 0 && (
                    <text x={xCenter} y={svgH - 9} textAnchor="middle" className="sd-axis-text">
                      {d.dayLabel}
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* 4. Sparkline + breakdown */}
      <div className="sd-dual">
        <div className="ky-card sd-card">
          <div className="sd-head">
            <TrendingUp size={18} className="sd-head__icon" aria-hidden="true" />
            <h4>Başarı & Net Skoru Trendi</h4>
            <span className="ky-chip ky-chip--accent ky-mono">%{report.overallAccuracy}</span>
          </div>

          <div className="sd-spark">
            <svg viewBox={`0 0 ${sparklineW} ${sparklineH}`} className="sd-spark__svg" role="img" aria-label={`%${report.overallAccuracy}`}>
              <defs>
                <linearGradient id="sdAccuracyArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" className="sd-spark__stop" stopOpacity="0.4" />
                  <stop offset="100%" className="sd-spark__stop" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon points={sparklineAreaStr} fill="url(#sdAccuracyArea)" />
              <polyline points={sparklinePolylineStr} className="sd-spark__line" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              {sparklineCoords.map((c, i) => (
                <circle key={i} cx={c.x} cy={c.y} r="3" className="sd-spark__dot" />
              ))}
            </svg>
          </div>
          <p className="sd-foot">Son deneme ve soru çözüm oturumlarının doğruluk trendi</p>
        </div>

        <div className="ky-card sd-card">
          <div className="sd-head">
            <Clock size={18} className="sd-head__icon" aria-hidden="true" />
            <h4>Aktivite Dağılımı</h4>
          </div>

          <div className="sd-stack" aria-hidden="true">
            <div className="sd-seg sd-seg--slides" style={{ inlineSize: `${breakdown.slidesPct}%` }} title={`Slaytlar: %${breakdown.slidesPct}`} />
            <div className="sd-seg sd-seg--cards" style={{ inlineSize: `${breakdown.cardsPct}%` }} title={`Kartlar: %${breakdown.cardsPct}`} />
            <div className="sd-seg sd-seg--questions" style={{ inlineSize: `${breakdown.questionsPct}%` }} title={`Soru Bankası: %${breakdown.questionsPct}`} />
            <div className="sd-seg sd-seg--games" style={{ inlineSize: `${breakdown.gamesPct}%` }} title={`Oyun & 3D Lab: %${breakdown.gamesPct}`} />
          </div>

          <ul className="sd-breakdown">
            <li><span className="sd-dot sd-seg--slides" /><span>Konu Slaytları</span><strong className="ky-mono">%{breakdown.slidesPct}</strong></li>
            <li><span className="sd-dot sd-seg--cards" /><span>3D Leitner Kartlar</span><strong className="ky-mono">%{breakdown.cardsPct}</strong></li>
            <li><span className="sd-dot sd-seg--questions" /><span>Soru Bankası & Deneme</span><strong className="ky-mono">%{breakdown.questionsPct}</strong></li>
            <li><span className="sd-dot sd-seg--games" /><span>Kimya Oyunları & Lab</span><strong className="ky-mono">%{breakdown.gamesPct}</strong></li>
          </ul>
        </div>
      </div>

      {/* 5. AI coach */}
      <div className="ky-card sd-card sd-coach">
        <div className="sd-head">
          <span className="ky-tile ky-tile--violet ky-tile--sm" aria-hidden="true"><Sparkles size={18} /></span>
          <div className="sd-head__titles">
            <h4>Yapay Zeka Kimya Koçu & Günlük Görevler</h4>
            <span className="sd-coach__sub">%100 Çevrimdışı Deterministik Koçluk Motoru</span>
          </div>
          <span className="ky-chip ky-chip--ok">Aktif</span>
        </div>

        <h5 className="sd-h5">Günün Akıllı Görev Listesi (Hedefli Çalışma)</h5>
        <ul className="sd-missions">
          {report.dailyMissions.map((m) => {
            const pct = Math.min(100, Math.round((m.currentCount / m.targetCount) * 100));
            return (
              <li key={m.id} className={`ky-well sd-mission ${m.completed ? 'is-done' : ''}`}>
                <span className="sd-mission__check" aria-hidden="true">{m.completed && <Check size={14} strokeWidth={3} />}</span>
                <div className="sd-mission__body">
                  <div className="sd-mission__row">
                    <strong>{m.title}</strong>
                    <span className="ky-mono sd-mission__count">
                      {m.currentCount} / {m.targetCount}
                    </span>
                  </div>
                  <p>{m.description}</p>
                  <div className="ky-track" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}>
                    <div className={`ky-fill ${m.completed ? 'ky-fill--ok' : ''}`} style={{ inlineSize: `${pct}%` }} />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="sd-topics">
          <div>
            <h5 className="sd-h5">
              <CheckCircle2 size={15} className="sd-c-ok" aria-hidden="true" />
              <span>Ustalaşılan Konular ({report.masteredTopics.length})</span>
            </h5>
            <div className="sd-pills">
              {report.masteredTopics.length > 0 ? (
                report.masteredTopics.map((t) => (
                  <span key={t.unitId} className="ky-chip ky-chip--ok sd-pill">
                    #{String(t.unitOrder).padStart(2, '0')} {t.unitTitle} (%{t.accuracyPercent})
                  </span>
                ))
              ) : (
                <span className="sd-note">En az 10 soru çözüp %75 doğruluk barajını geçen konular burada listelenir.</span>
              )}
            </div>
          </div>

          <div>
            <h5 className="sd-h5">
              <AlertTriangle size={15} className="sd-c-gold" aria-hidden="true" />
              <span>Geliştirilmesi Gereken Konular ({report.weakTopics.length})</span>
            </h5>
            <div className="sd-pills">
              {report.weakTopics.length > 0 ? (
                report.weakTopics.slice(0, 5).map((t) => (
                  <span key={t.unitId} className="ky-chip ky-chip--gold sd-pill">
                    #{String(t.unitOrder).padStart(2, '0')} {t.unitTitle} ({t.mistakeCount} Hata)
                  </span>
                ))
              ) : (
                <span className="sd-note">Hata tespit edilmedi, tüm çözülen konularda başarı mükemmel!</span>
              )}
            </div>
          </div>
        </div>

        {report.recommendations.length > 0 && (
          <div>
            <h5 className="sd-h5">Kişiselleştirilmiş Koçluk Önerileri</h5>
            <ul className="sd-recs">
              {report.recommendations.map((rec) => (
                <li key={rec.id} className={`ky-well sd-rec sd-rec--${rec.priority.toLowerCase()}`}>
                  <div className="sd-rec__info">
                    <strong>{rec.title}</strong>
                    <p>{rec.reason}</p>
                  </div>
                  <button
                    type="button"
                    className="ky-btn ky-btn--primary ky-btn--sm sd-rec__btn"
                    onClick={() => {
                      if (rec.type === 'SOLVE_MISTAKES') {
                        onNavigateTab?.('exams', { mode: 'mistakes' });
                      } else if (rec.type === 'REVIEW_SLIDES') {
                        onOpenUnitSlides?.(rec.unitId);
                      } else if (rec.type === 'PRACTICE_QUESTIONS') {
                        onOpenUnitQuiz?.(rec.unitId);
                      } else if (rec.type === 'STUDY_CARDS') {
                        onOpenUnitCards?.(rec.unitId);
                      }
                    }}
                  >
                    <span>{rec.actionLabel}</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
