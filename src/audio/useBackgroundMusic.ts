import { useCallback, useEffect, useRef, useState } from 'react';
import { MUSIC_TRACKS, musicEngine } from './musicEngine';
import { suspendSfx } from './sfx';
import { onAppActiveChange } from '../utils/appLifecycle';

const KEY = 'kimya-music';

interface MusicPrefs {
  on: boolean;
  trackId: string;
  volume: number;
}

function loadPrefs(): MusicPrefs {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const p = JSON.parse(raw) as Partial<MusicPrefs>;
      return {
        on: p.on === true,
        trackId: MUSIC_TRACKS.some((t) => t.id === p.trackId) ? (p.trackId as string) : MUSIC_TRACKS[0].id,
        volume: typeof p.volume === 'number' ? Math.max(0, Math.min(1, p.volume)) : 0.7,
      };
    }
  } catch {
    // Default fallback
  }
  return { on: false, trackId: MUSIC_TRACKS[0].id, volume: 0.7 };
}

export function useBackgroundMusic() {
  const [prefs, setPrefs] = useState<MusicPrefs>(loadPrefs);
  const prefsRef = useRef(prefs);
  prefsRef.current = prefs;

  useEffect(() => {
    musicEngine.setVolume(prefs.volume);
  }, [prefs.volume]);

  useEffect(() => {
    try {
      localStorage.setItem(KEY, JSON.stringify(prefs));
    } catch {
      // Storage unavailable
    }
  }, [prefs]);

  // If music is enabled but not playing (fresh load / resume), start on first touch/click
  useEffect(() => {
    if (!prefs.on) return;
    const kick = () => {
      if (!musicEngine.isPlaying) void musicEngine.start(prefsRef.current.trackId);
    };
    const events = ['pointerup', 'touchend', 'click', 'keydown'] as const;
    events.forEach((ev) => window.addEventListener(ev, kick, { passive: true }));
    return () => events.forEach((ev) => window.removeEventListener(ev, kick));
  }, [prefs.on]);

  // Pause (and release both audio contexts) when the app is backgrounded, resume on return
  useEffect(
    () =>
      onAppActiveChange((active) => {
        if (!active) {
          musicEngine.pauseForBackground();
          suspendSfx();
        } else if (prefs.on) void musicEngine.start(prefs.trackId);
      }),
    [prefs.on, prefs.trackId]
  );

  const setMusicOn = useCallback((on: boolean) => {
    if (on) void musicEngine.start(prefsRef.current.trackId);
    else musicEngine.stop();
    setPrefs((p) => ({ ...p, on }));
  }, []);

  const setMusicTrack = useCallback((trackId: string) => {
    musicEngine.setTrack(trackId);
    if (prefsRef.current.on) void musicEngine.start(trackId);
    setPrefs((p) => ({ ...p, trackId }));
  }, []);

  const setMusicVolume = useCallback((volume: number) => {
    setPrefs((p) => ({ ...p, volume }));
  }, []);

  return {
    musicOn: prefs.on,
    musicTrackId: prefs.trackId,
    musicVolume: prefs.volume,
    setMusicOn,
    setMusicTrack,
    setMusicVolume,
  };
}
