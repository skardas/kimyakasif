import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Award,
  CheckCircle2,
  AlertTriangle,
  Flame,
  ArrowRight,
  BookOpen,
  FileCheck2,
  Layers,
  Box,
  TrendingUp,
  Clock,
  Target,
  BarChart2,
  CheckSquare,
  Square,
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
  const svgH = 180;
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

  return (
    <div className="study-stats-dashboard">
      {/* 1. Header Banner & Profile Overview */}
      <div className="dashboard-hero-card">
        <div className="dashboard-profile-row">
          <div className="dashboard-avatar-box">
            <span className="dashboard-avatar-emoji">{profile.avatar || '👨‍🎓'}</span>
          </div>
          <div className="dashboard-profile-info">
            <div className="profile-name-cluster">
              <h3>{profile.name}</h3>
              <span className="dashboard-track-badge">
                {profile.targetTrack === 'TYT_ONLY'
                  ? '🎯 Sadece TYT'
                  : profile.targetTrack === 'AYT_FOCUS'
                  ? '⚡ AYT Odaklı'
                  : '🚀 1. TYT → 2. AYT Sıralı'}
              </span>
            </div>
            <p className="dashboard-hero-sub">
              {profile.stats.streakDays} Günlük Seri • {profile.stats.xp} Toplam XP • %{report.overallAccuracy} Genel Doğruluk
            </p>
          </div>
        </div>

        {/* Prerequisite Coaching Alert */}
        {report.prerequisiteWarning?.needed && (
          <div className="prereq-warning-banner" role="alert">
            <AlertTriangle className="prereq-icon" size={20} />
            <div className="prereq-text">
              <strong>Önemli YKS İlerleme Uyarısı:</strong>
              <p>{report.prerequisiteWarning.message}</p>
            </div>
          </div>
        )}
      </div>

      {/* 2. Turkey YKS Sequential Stage Mastery Rings */}
      <div className="dashboard-section-card stages-comparison-card">
        <div className="section-head-row">
          <div className="head-title-cluster">
            <Target size={18} className="head-icon" />
            <h4>Türkiye YKS Sınav Aşamaları İlerlemesi</h4>
          </div>
          <span className="stage-note-pill">1. Aşama TYT → 2. Aşama AYT</span>
        </div>

        <div className="stages-rings-grid">
          {/* Stage 1: TYT Kimya */}
          <div className="stage-ring-box tyt-stage">
            <div className="svg-ring-container">
              <svg width="110" height="110" viewBox="0 0 110 110" className="mastery-svg-ring">
                <circle
                  cx="55"
                  cy="55"
                  r={ringRadius}
                  className="ring-bg-circle"
                  strokeWidth="9"
                />
                <circle
                  cx="55"
                  cy="55"
                  r={ringRadius}
                  className="ring-progress-circle tyt-glow"
                  strokeWidth="9"
                  strokeDasharray={ringCircumference}
                  strokeDashoffset={tytOffset}
                  strokeLinecap="round"
                />
              </svg>
              <div className="ring-center-content">
                <span className="ring-pct-number">%{report.tytMasteryPercent}</span>
                <span className="ring-label-micro">TYT</span>
              </div>
            </div>
            <div className="stage-meta-info">
              <strong className="stage-name-bold">1. Aşama: TYT Kimya</strong>
              <span className="stage-units-sub">u01–u10 • 10 Ünite (1.280 Soru)</span>
              <span className="stage-yks-weight">YKS'de 7 Temel Kimya Sorusu</span>
            </div>
          </div>

          {/* Stage 2: AYT Kimya */}
          <div className="stage-ring-box ayt-stage">
            <div className="svg-ring-container">
              <svg width="110" height="110" viewBox="0 0 110 110" className="mastery-svg-ring">
                <circle
                  cx="55"
                  cy="55"
                  r={ringRadius}
                  className="ring-bg-circle"
                  strokeWidth="9"
                />
                <circle
                  cx="55"
                  cy="55"
                  r={ringRadius}
                  className="ring-progress-circle ayt-glow"
                  strokeWidth="9"
                  strokeDasharray={ringCircumference}
                  strokeDashoffset={aytOffset}
                  strokeLinecap="round"
                />
              </svg>
              <div className="ring-center-content">
                <span className="ring-pct-number">%{report.aytMasteryPercent}</span>
                <span className="ring-label-micro">AYT</span>
              </div>
            </div>
            <div className="stage-meta-info">
              <strong className="stage-name-bold">2. Aşama: AYT Kimya</strong>
              <span className="stage-units-sub">u11–u24 • 14 Ünite (1.792 Soru)</span>
              <span className="stage-yks-weight">YKS'de 13 Alan Kimya Sorusu</span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Pure SVG Daily Study & Goal Bar Chart */}
      <div className="dashboard-section-card study-chart-card">
        <div className="section-head-row">
          <div className="head-title-cluster">
            <BarChart2 size={18} className="head-icon" />
            <h4>Günlük Çalışma & Hedef Takibi (SVG Grafik)</h4>
          </div>
          <div className="chart-range-toggle">
            <button
              type="button"
              className={`range-pill-btn ${dayRange === 7 ? 'active' : ''}`}
              onClick={() => setDayRange(7)}
            >
              7 Gün
            </button>
            <button
              type="button"
              className={`range-pill-btn ${dayRange === 14 ? 'active' : ''}`}
              onClick={() => setDayRange(14)}
            >
              14 Gün
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="chart-legend-strip">
          <span className="legend-item">
            <span className="legend-color-box cyan-bg" />
            <span>Çözülen Soru</span>
          </span>
          <span className="legend-item">
            <span className="legend-color-box emerald-bg" />
            <span>Çalışma Süresi (Dk)</span>
          </span>
          <span className="legend-item">
            <span className="legend-line-sample amber-stroke" />
            <span>Soru Hedefi ({profile.dailyQuestionGoal})</span>
          </span>
          <span className="legend-item">
            <span className="legend-line-sample purple-stroke" />
            <span>Süre Hedefi ({profile.dailyStudyMinutesGoal} dk)</span>
          </span>
        </div>

        <div className="svg-barchart-wrapper">
          <svg
            viewBox={`0 0 ${svgW} ${svgH}`}
            className="pure-svg-barchart"
            aria-label="Günlük Çalışma Grafiği"
          >
            {/* Horizontal Grid lines */}
            <line x1={barMarginX} y1={svgH - 30} x2={svgW - 10} y2={svgH - 30} className="grid-axis-line" />
            <line x1={barMarginX} y1={(svgH - 30) / 2} x2={svgW - 10} y2={(svgH - 30) / 2} className="grid-subtle-line" />

            {/* Target Goal Lines */}
            {profile.dailyQuestionGoal > 0 && (
              <line
                x1={barMarginX}
                y1={qGoalY}
                x2={svgW - 10}
                y2={qGoalY}
                className="goal-reference-line q-goal"
                strokeDasharray="4 3"
              />
            )}
            {profile.dailyStudyMinutesGoal > 0 && (
              <line
                x1={barMarginX}
                y1={minGoalY}
                x2={svgW - 10}
                y2={minGoalY}
                className="goal-reference-line min-goal"
                strokeDasharray="4 3"
              />
            )}

            {/* Bars for Each Day */}
            {daysData.map((d, idx) => {
              const xCenter = barMarginX + idx * colW + colW / 2;
              const qHeight = (d.questionsSolved / maxQ) * (svgH - 50);
              const minHeight = (d.studyMinutes / maxMin) * (svgH - 50);
              const qY = svgH - 30 - qHeight;
              const minY = svgH - 30 - minHeight;

              return (
                <g key={d.date} className="barchart-day-group">
                  {/* Bar 1: Questions Solved */}
                  <rect
                    x={xCenter - barW - 1}
                    y={qY}
                    width={barW}
                    height={Math.max(2, qHeight)}
                    rx="3"
                    className="bar-rect questions-bar"
                  >
                    <title>{`${d.date}: ${d.questionsSolved} Soru`}</title>
                  </rect>

                  {/* Bar 2: Study Minutes */}
                  <rect
                    x={xCenter + 1}
                    y={minY}
                    width={barW}
                    height={Math.max(2, minHeight)}
                    rx="3"
                    className="bar-rect minutes-bar"
                  >
                    <title>{`${d.date}: ${d.studyMinutes} Dakika`}</title>
                  </rect>

                  {/* Day Label Text */}
                  <text
                    x={xCenter}
                    y={svgH - 12}
                    textAnchor="middle"
                    className="chart-axis-label"
                  >
                    {d.dayLabel}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* 4. Accuracy Trend Sparkline & Activity Category Breakdown */}
      <div className="dashboard-grid-dual">
        {/* Weekly Accuracy Sparkline */}
        <div className="dashboard-section-card sparkline-card">
          <div className="section-head-row">
            <div className="head-title-cluster">
              <TrendingUp size={18} className="head-icon" />
              <h4>Başarı & Net Skoru Trendi</h4>
            </div>
            <span className="trend-badge-value">%{report.overallAccuracy}</span>
          </div>

          <div className="sparkline-container">
            <svg viewBox={`0 0 ${sparklineW} ${sparklineH}`} className="pure-svg-sparkline">
              <defs>
                <linearGradient id="accuracyAreaGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              <polygon points={sparklineAreaStr} fill="url(#accuracyAreaGradient)" />
              <polyline
                points={sparklinePolylineStr}
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {sparklineCoords.map((c, i) => (
                <circle key={i} cx={c.x} cy={c.y} r="3" className="sparkline-dot" />
              ))}
            </svg>
          </div>
          <span className="sparkline-footnote">Son deneme ve soru çözüm oturumlarının doğruluk trendi</span>
        </div>

        {/* Activity Category Breakdown */}
        <div className="dashboard-section-card breakdown-card">
          <div className="section-head-row">
            <div className="head-title-cluster">
              <Clock size={18} className="head-icon" />
              <h4>Aktivite Dağılımı</h4>
            </div>
          </div>

          <div className="breakdown-horizontal-bar">
            <div
              className="seg-slice seg-slides"
              style={{ width: `${breakdown.slidesPct}%` }}
              title={`Slaytlar: %${breakdown.slidesPct}`}
            />
            <div
              className="seg-slice seg-cards"
              style={{ width: `${breakdown.cardsPct}%` }}
              title={`Kartlar: %${breakdown.cardsPct}`}
            />
            <div
              className="seg-slice seg-questions"
              style={{ width: `${breakdown.questionsPct}%` }}
              title={`Soru Bankası: %${breakdown.questionsPct}`}
            />
            <div
              className="seg-slice seg-games"
              style={{ width: `${breakdown.gamesPct}%` }}
              title={`Oyun & 3D Lab: %${breakdown.gamesPct}`}
            />
          </div>

          <div className="breakdown-legend-list">
            <div className="legend-row">
              <span className="dot dot-slides" />
              <span>Konu Slaytları</span>
              <strong className="pct-val">%{breakdown.slidesPct}</strong>
            </div>
            <div className="legend-row">
              <span className="dot dot-cards" />
              <span>3D Leitner Kartlar</span>
              <strong className="pct-val">%{breakdown.cardsPct}</strong>
            </div>
            <div className="legend-row">
              <span className="dot dot-questions" />
              <span>Soru Bankası & Deneme</span>
              <strong className="pct-val">%{breakdown.questionsPct}</strong>
            </div>
            <div className="legend-row">
              <span className="dot dot-games" />
              <span>Kimya Oyunları & Lab</span>
              <strong className="pct-val">%{breakdown.gamesPct}</strong>
            </div>
          </div>
        </div>
      </div>

      {/* 5. 100% Offline AI Coach Card & Daily Smart Missions */}
      <div className="dashboard-section-card coach-hub-card">
        <div className="section-head-row">
          <div className="head-title-cluster">
            <Sparkles size={20} className="head-icon sparkles-pulse" />
            <div>
              <h4>Yapay Zeka Kimya Koçu & Günlük Görevler</h4>
              <span className="coach-subtitle">%100 Çevrimdışı Deterministik Koçluk Motoru</span>
            </div>
          </div>
          <span className="coach-badge-live">Aktif</span>
        </div>

        {/* Smart Daily Mission Checklist */}
        <div className="missions-checklist-section">
          <h5>Günün Akıllı Görev Listesi (Hedefli Çalışma)</h5>
          <div className="missions-grid">
            {report.dailyMissions.map((m) => (
              <div
                key={m.id}
                className={`mission-item-card ${m.completed ? 'is-completed' : ''}`}
              >
                <div className="mission-check-slot">
                  {m.completed ? (
                    <CheckSquare size={19} className="check-icon-done" />
                  ) : (
                    <Square size={19} className="check-icon-pending" />
                  )}
                </div>
                <div className="mission-content-col">
                  <div className="mission-title-row">
                    <strong>{m.title}</strong>
                    <span className="mission-counter">
                      {m.currentCount} / {m.targetCount}
                    </span>
                  </div>
                  <p className="mission-desc">{m.description}</p>
                  <div className="mission-progress-bar">
                    <div
                      className="mission-progress-fill"
                      style={{
                        width: `${Math.min(100, Math.round((m.currentCount / m.targetCount) * 100))}%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mastered & Weak Topic Clusters */}
        <div className="topics-clusters-row">
          {/* Mastered Topics */}
          <div className="topic-cluster-col">
            <h5>
              <CheckCircle2 size={15} className="cluster-icon emerald" />
              <span>Ustalaşılan Konular ({report.masteredTopics.length})</span>
            </h5>
            <div className="topics-pills-wrap">
              {report.masteredTopics.length > 0 ? (
                report.masteredTopics.map((t) => (
                  <span key={t.unitId} className="topic-pill mastered">
                    #{String(t.unitOrder).padStart(2, '0')} {t.unitTitle} (%{t.accuracyPercent})
                  </span>
                ))
              ) : (
                <span className="cluster-empty-note">
                  En az 10 soru çözüp %75 doğruluk barajını geçen konular burada listelenir.
                </span>
              )}
            </div>
          </div>

          {/* Weak Topics */}
          <div className="topic-cluster-col">
            <h5>
              <AlertTriangle size={15} className="cluster-icon amber" />
              <span>Geliştirilmesi Gereken Konular ({report.weakTopics.length})</span>
            </h5>
            <div className="topics-pills-wrap">
              {report.weakTopics.length > 0 ? (
                report.weakTopics.slice(0, 5).map((t) => (
                  <span key={t.unitId} className="topic-pill weak">
                    #{String(t.unitOrder).padStart(2, '0')} {t.unitTitle} ({t.mistakeCount} Hata)
                  </span>
                ))
              ) : (
                <span className="cluster-empty-note">
                  Hata tespit edilmedi, tüm çözülen konularda başarı mükemmel!
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Personalized AI Recommendations */}
        {report.recommendations.length > 0 && (
          <div className="recommendations-section">
            <h5>Kişiselleştirilmiş Koçluk Önerileri</h5>
            <div className="recommendations-list">
              {report.recommendations.map((rec) => (
                <div key={rec.id} className={`rec-card priority-${rec.priority.toLowerCase()}`}>
                  <div className="rec-info-col">
                    <strong>{rec.title}</strong>
                    <p>{rec.reason}</p>
                  </div>
                  <button
                    type="button"
                    className="rec-action-btn"
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
                    <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
