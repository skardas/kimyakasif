import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Bell, Download } from 'lucide-react';
import type { LanguageCode } from '../../types/chemistry';
import type { AppState } from '../../store/useAppStore';
import type { DailyGoal, TextSizeStep } from '../../store/usePreferences';
import { LANGUAGES, UI_TRANSLATIONS } from '../../i18n/translations';
import { redesignStrings, redesignExtra } from '../../i18n/redesignStrings';
import { ConfirmDialog } from '../common/ConfirmDialog';
import { MUSIC_TRACKS } from '../../audio/musicEngine';
import { notificationManager } from '../../utils/notificationManager';

export interface SettingsViewProps {
  lang: LanguageCode;
  store: AppState;
  dailyGoal: DailyGoal;
  reduceMotion: boolean;
  sfxOn: boolean;
  textSize: TextSizeStep;
  musicOn: boolean;
  musicTrackId: string;
  musicVolume: number;
  onSetSfxOn: (v: boolean) => void;
  onSetTextSize: (v: TextSizeStep) => void;
  onSetMusicOn: (v: boolean) => void;
  onSetMusicTrack: (t: string) => void;
  onSetMusicVolume: (v: number) => void;
  onSetDailyGoal: (g: DailyGoal) => void;
  onSetReduceMotion: (r: boolean) => void;
  onRelaunchOnboarding: () => void;
  onOpenProfiles: () => void;
  onBack: () => void;
  onInstall?: () => void;
}

const Switch: React.FC<{ on: boolean; label: string; onToggle: () => void }> = ({ on, label, onToggle }) => (
  <button type="button" role="switch" aria-checked={on} aria-label={label} className="ky-switch" onClick={onToggle} />
);

const GOALS: DailyGoal[] = [10, 20, 40];
const STUDY_MINUTES = [15, 30, 45, 60];
const REMINDER_TIMES = ['18:00', '19:00', '20:00', '21:00', '22:00'];

/**
 * Every setting in one screen: Görünüm (theme, text size, language, reduce motion),
 * Ses (music, track, volume, sound effects), Çalışma (target exam, daily goals, reminder)
 * and Profil ve veri (profiles, install, replay onboarding, reset).
 */
export const SettingsView: React.FC<SettingsViewProps> = ({
  lang,
  store,
  dailyGoal,
  reduceMotion,
  sfxOn,
  textSize,
  musicOn,
  musicTrackId,
  musicVolume,
  onSetSfxOn,
  onSetTextSize,
  onSetMusicOn,
  onSetMusicTrack,
  onSetMusicVolume,
  onSetDailyGoal,
  onSetReduceMotion,
  onRelaunchOnboarding,
  onOpenProfiles,
  onBack,
  onInstall,
}) => {
  const t = UI_TRANSLATIONS[lang];
  const r = redesignStrings(lang);
  const rx = redesignExtra(lang);
  const profile = store.activeProfile;
  const [notificationFeedback, setNotificationFeedback] = useState<string | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);

  const volPct = Math.round(Math.max(0, Math.min(1, musicVolume)) * 100);
  const langEntry = LANGUAGES.find((l) => l.code === store.language);
  const trackEntry = MUSIC_TRACKS.find((x) => x.id === musicTrackId) ?? MUSIC_TRACKS[0];

  const flash = (msg: string, ms = 4000) => {
    setNotificationFeedback(msg);
    window.setTimeout(() => setNotificationFeedback(null), ms);
  };

  const handleToggleNotifications = async (enabled: boolean) => {
    store.updateProfile(profile.id, { notificationsEnabled: enabled });
    if (enabled) {
      const granted = await notificationManager.requestPermission();
      if (granted) {
        await notificationManager.scheduleDailyReminder(
          profile.reminderTime || '20:00',
          rx.reminderTitle,
          rx.reminderBody(profile.name),
          true
        );
        flash(r.notifOn);
      } else {
        flash(r.notifDenied);
      }
    } else {
      await notificationManager.cancelAllReminders();
      flash(r.notifOff);
    }
  };

  const handleChangeReminderTime = (time: string) => {
    store.updateProfile(profile.id, { reminderTime: time });
    if (profile.notificationsEnabled) {
      notificationManager.scheduleDailyReminder(
        time,
        rx.reminderTitle,
        rx.reminderBody(profile.name),
        true
      );
    }
  };

  return (
    <section className="ky-screen st" aria-label={r.settingsTitle}>
      <header className="ky-screen-head">
        <button type="button" className="ky-icon-btn ky-only-narrow" onClick={onBack} aria-label={t.profile.close}>
          <ChevronLeft size={20} aria-hidden="true" className="st-flip" />
        </button>
        <h1 className="ky-disp ky-fs-28">{r.settingsTitle}</h1>
      </header>

      <div className="ky-fit">
        <div className="st-grid">
          {/* Görünüm */}
          <section className="ky-card st-group" aria-labelledby="st-g-look">
            <p className="ky-eyebrow st-group__title" id="st-g-look">{r.appearance}</p>
            <div className="ky-row">
              <span className="ky-row__lbl" id="st-theme">{r.theme}</span>
              <div className="ky-seg ky-seg--sm" role="radiogroup" aria-labelledby="st-theme">
                {(
                  [
                    ['system', rx.themeNames[0]],
                    ['light', rx.themeNames[1]],
                    ['dark', rx.themeNames[2]],
                  ] as const
                ).map(([val, label]) => (
                  <button key={val} type="button" role="radio" aria-checked={store.themeSetting === val} onClick={() => store.setThemeSetting(val)}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="ky-row">
              <span className="ky-row__lbl" id="st-size">
                {r.textSize}
                <span className="ky-row__sub">{r.textSizeHint}</span>
              </span>
              <div className="ky-seg ky-seg--sm" role="radiogroup" aria-labelledby="st-size">
                {r.textSizeNames.map((name, i) => (
                  <button
                    key={name}
                    type="button"
                    role="radio"
                    aria-checked={textSize === i}
                    aria-label={name}
                    className="st-size-btn"
                    style={{ fontSize: 12 + i * 3 }}
                    onClick={() => onSetTextSize(i as TextSizeStep)}
                  >
                    A
                  </button>
                ))}
              </div>
            </div>
            <div className="ky-row st-preview">
              <p className="ky-fs-16">
                {r.preview}: <span className="st-preview__strong">{r.previewText}</span>{' '}
                <bdi dir="ltr" className="ky-mono st-preview__formula">n = m / M</bdi>
              </p>
            </div>
            <label className="ky-row st-select-row">
              <span className="ky-row__lbl">{r.language}</span>
              <span className="ky-row__val" aria-hidden="true">
                {langEntry ? `${langEntry.flag} ${langEntry.nativeName}` : store.language}
              </span>
              <ChevronRight size={18} aria-hidden="true" className="st-chev st-flip" />
              <select
                className="st-select-overlay"
                value={store.language}
                aria-label={r.language}
                onChange={(e) => store.setLanguage(e.target.value as LanguageCode)}
              >
                {LANGUAGES.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.flag} {l.nativeName}
                  </option>
                ))}
              </select>
            </label>
            <div className="ky-row">
              <span className="ky-row__lbl">
                {r.reduceMotion}
                <span className="ky-row__sub">{r.reduceMotionHint}</span>
              </span>
              <Switch on={reduceMotion} label={r.reduceMotion} onToggle={() => onSetReduceMotion(!reduceMotion)} />
            </div>
          </section>

          {/* Ses */}
          <section className="ky-card st-group" aria-labelledby="st-g-sound">
            <p className="ky-eyebrow st-group__title" id="st-g-sound">{r.sound}</p>
            <div className="ky-row">
              <span className="ky-row__lbl">{r.music}</span>
              <Switch on={musicOn} label={r.music} onToggle={() => onSetMusicOn(!musicOn)} />
            </div>
            <label className={`ky-row st-select-row ${musicOn ? '' : 'is-off'}`}>
              <span className="ky-row__lbl">{r.musicTrack}</span>
              <span className="ky-row__val" aria-hidden="true">
                {trackEntry ? trackEntry.title[lang] || trackEntry.title.tr : ''}
              </span>
              <ChevronRight size={18} aria-hidden="true" className="st-chev st-flip" />
              <select
                className="st-select-overlay"
                value={musicTrackId}
                disabled={!musicOn}
                aria-label={r.musicTrack}
                onChange={(e) => onSetMusicTrack(e.target.value)}
              >
                {MUSIC_TRACKS.map((tr) => (
                  <option key={tr.id} value={tr.id}>
                    {tr.title[lang] || tr.title.tr}
                  </option>
                ))}
              </select>
            </label>
            <div className={`ky-row ${musicOn ? '' : 'is-off'}`}>
              <label className="ky-row__lbl st-vol-lbl" htmlFor="st-vol">
                {r.musicVolume}
              </label>
              <input
                id="st-vol"
                type="range"
                className="ky-range st-vol"
                min="0"
                max="1"
                step="0.05"
                value={musicVolume}
                disabled={!musicOn}
                aria-valuetext={`${volPct}%`}
                style={{ ['--pct' as string]: `${volPct}%` }}
                onChange={(e) => onSetMusicVolume(parseFloat(e.target.value))}
              />
              <span className="ky-mono ky-row__val st-vol-val">{volPct}%</span>
            </div>
            <div className="ky-row">
              <span className="ky-row__lbl">
                {r.sfx}
                <span className="ky-row__sub">{r.sfxHint}</span>
              </span>
              <Switch on={sfxOn} label={r.sfx} onToggle={() => onSetSfxOn(!sfxOn)} />
            </div>
          </section>

          {/* Çalışma */}
          <section className="ky-card st-group" aria-labelledby="st-g-study">
            <p className="ky-eyebrow st-group__title" id="st-g-study">{r.study}</p>
            <div className="ky-row">
              <span className="ky-row__lbl" id="st-track">{r.targetExam}</span>
              <div className="ky-seg ky-seg--sm" role="radiogroup" aria-labelledby="st-track">
                {(
                  [
                    ['TYT_ONLY', 'TYT'],
                    ['AYT_FOCUS', 'AYT'],
                    ['TYT_FIRST', 'TYT → AYT'],
                  ] as const
                ).map(([val, label]) => (
                  <button
                    key={val}
                    type="button"
                    role="radio"
                    aria-checked={profile.targetTrack === val}
                    onClick={() => store.updateProfile(profile.id, { targetTrack: val })}
                  >
                    <bdi>{label}</bdi>
                  </button>
                ))}
              </div>
            </div>
            <div className="ky-row">
              <span className="ky-row__lbl" id="st-goal">{r.dailyGoal}</span>
              <div className="ky-seg ky-seg--sm" role="radiogroup" aria-labelledby="st-goal">
                {GOALS.map((g) => (
                  <button
                    key={g}
                    type="button"
                    role="radio"
                    className="ky-mono"
                    aria-checked={dailyGoal === g}
                    onClick={() => {
                      store.updateProfile(profile.id, { dailyQuestionGoal: g });
                      onSetDailyGoal(g);
                    }}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
            <div className="ky-row">
              <span className="ky-row__lbl" id="st-min">
                {r.studyMinutes}
                <span className="ky-row__sub">{r.minutesUnit}</span>
              </span>
              <div className="ky-seg ky-seg--sm" role="radiogroup" aria-labelledby="st-min">
                {STUDY_MINUTES.map((m) => (
                  <button
                    key={m}
                    type="button"
                    role="radio"
                    className="ky-mono"
                    aria-checked={profile.dailyStudyMinutesGoal === m}
                    onClick={() => store.updateProfile(profile.id, { dailyStudyMinutesGoal: m })}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>
            <div className="ky-row">
              <span className="ky-row__lbl">
                {r.reminder}
                <span className="ky-row__sub">{r.reminderHint}</span>
              </span>
              <Switch
                on={profile.notificationsEnabled}
                label={r.reminder}
                onToggle={() => handleToggleNotifications(!profile.notificationsEnabled)}
              />
            </div>
            {profile.notificationsEnabled && (
              <>
                <label className="ky-row st-select-row">
                  <span className="ky-row__lbl">{r.reminderTime}</span>
                  <span className="ky-row__val ky-mono" aria-hidden="true">{profile.reminderTime || '20:00'}</span>
                  <ChevronRight size={18} aria-hidden="true" className="st-chev st-flip" />
                  <select
                    className="st-select-overlay"
                    value={profile.reminderTime || '20:00'}
                    aria-label={r.reminderTime}
                    onChange={(e) => handleChangeReminderTime(e.target.value)}
                  >
                    {REMINDER_TIMES.map((h) => (
                      <option key={h} value={h}>
                        {h}
                      </option>
                    ))}
                  </select>
                </label>
                <div className="ky-row">
                  <button
                    type="button"
                    className="ky-btn ky-btn--quiet ky-btn--sm"
                    onClick={async () => {
                      const ok = await notificationManager.sendImmediateNotification(
                        rx.testNotifTitle,
                        rx.testNotifBody,
                        true
                      );
                      flash(ok ? r.notifTestOk : r.notifTestFail, 3000);
                    }}
                  >
                    <Bell size={16} aria-hidden="true" />
                    <span>{r.testNotification}</span>
                  </button>
                </div>
              </>
            )}
            {notificationFeedback && (
              <p className="st-feedback ky-fs-14" role="status">
                {notificationFeedback}
              </p>
            )}
          </section>

          {/* Profil ve veri */}
          <section className="ky-card st-group" aria-labelledby="st-g-data">
            <p className="ky-eyebrow st-group__title" id="st-g-data">{r.profileData}</p>
            <button type="button" className="ky-row st-link" onClick={onOpenProfiles}>
              <span className="ky-row__lbl">
                {r.profiles}
                <span className="ky-row__sub">
                  {profile.name} · {r.active}
                </span>
              </span>
              <ChevronRight size={18} aria-hidden="true" className="st-chev st-flip" />
            </button>
            {onInstall && (
              <button type="button" className="ky-row st-link" onClick={onInstall}>
                <span className="ky-row__lbl">{t.installApp}</span>
                <Download size={18} aria-hidden="true" className="st-chev" />
              </button>
            )}
            <button type="button" className="ky-row st-link" onClick={onRelaunchOnboarding}>
              <span className="ky-row__lbl">{r.replayOnboarding}</span>
              <ChevronRight size={18} aria-hidden="true" className="st-chev st-flip" />
            </button>
            <div className="ky-row">
              <span className="ky-row__lbl st-danger">
                {r.resetProgress}
                <span className="ky-row__sub">{r.resetHint}</span>
              </span>
              <button
                type="button"
                className="ky-chip ky-chip--bad st-reset"
                onClick={() => setConfirmReset(true)}
              >
                {r.reset}
              </button>
            </div>
          </section>
        </div>
      </div>

      {confirmReset && (
        <ConfirmDialog
          title={t.profile.resetConfirmTitle}
          body={t.profile.resetConfirmBody}
          confirmLabel={t.profile.confirmReset}
          cancelLabel={t.profile.cancel}
          onCancel={() => setConfirmReset(false)}
          onConfirm={() => {
            store.resetAllProgress();
            setConfirmReset(false);
          }}
        />
      )}
    </section>
  );
};
