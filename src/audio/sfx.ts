/**
 * Kimya YKS — Web Audio SFX Synthesis Engine
 * 100% offline, procedural audio synthesis with 0 external sound files.
 * Includes chemistry-specific acoustics: chemical bubble, reaction fizz, test tube clink,
 * correct chime, wrong buzzer, victory fanfare, and applause.
 */

let ctx: AudioContext | null = null;
let bus: GainNode | null = null;
let noise: AudioBuffer | null = null;
let enabled = true;
let masterVolume = 0.8;

export function setSfxEnabled(on: boolean): void {
  enabled = on;
}

export function setSfxVolume(vol: number): void {
  masterVolume = Math.max(0, Math.min(1, vol));
  if (bus && ctx) {
    bus.gain.setTargetAtTime(masterVolume * 0.8, ctx.currentTime, 0.05);
  }
}

export function unlockAudio(targetCtx?: AudioContext): void {
  const c = targetCtx ?? ctx;
  if (!c) return;

  try {
    const nav = navigator as Navigator & { audioSession?: { type: string } };
    if (nav.audioSession && nav.audioSession.type !== 'playback') {
      nav.audioSession.type = 'playback';
    }
  } catch {
    // Unsupported browser/environment, ignore
  }

  try {
    const buf = c.createBuffer(1, 1, 22050);
    const src = c.createBufferSource();
    src.buffer = buf;
    src.connect(c.destination);
    src.start(0);
    if (c.state !== 'running') {
      void c.resume().catch(() => {});
    }
  } catch {
    // Retry on subsequent user gesture
  }
}

function ensure(): AudioContext | null {
  if (!enabled) return null;
  if (!ctx || ctx.state === 'closed') {
    const Ctor: typeof AudioContext | undefined =
      typeof window !== 'undefined'
        ? window.AudioContext ??
          (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
        : undefined;
    if (!Ctor) return null;

    try {
      ctx = new Ctor();
      const comp = ctx.createDynamicsCompressor();
      comp.threshold.value = -12;
      comp.knee.value = 16;
      comp.ratio.value = 4;
      comp.attack.value = 0.005;
      comp.release.value = 0.15;

      bus = ctx.createGain();
      bus.gain.value = masterVolume * 0.8;
      bus.connect(comp);
      comp.connect(ctx.destination);

      // Precompute 1-second white noise buffer for bursts, fizz, and applause
      noise = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
      const d = noise.getChannelData(0);
      for (let i = 0; i < d.length; i++) {
        d[i] = Math.random() * 2 - 1;
      }
    } catch {
      return null;
    }
  }

  unlockAudio(ctx);
  return ctx;
}

function tone(
  c: AudioContext,
  freq: number,
  t: number,
  dur: number,
  vel: number,
  type: OscillatorType = 'sine',
  bendTo?: number
) {
  const o = c.createOscillator();
  const g = c.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t);
  if (bendTo) {
    o.frequency.exponentialRampToValueAtTime(bendTo, t + dur * 0.8);
  }
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(vel, t + 0.008);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);

  o.connect(g);
  g.connect(bus!);
  o.start(t);
  o.stop(t + dur + 0.02);
}

/** Parlak, iki notalı kristal yükselen "ding" (Doğru Cevap) */
export function playCorrect(): void {
  const c = ensure();
  if (!c) return;
  const t = c.currentTime + 0.01;
  tone(c, 1318.5, t, 0.35, 0.22, 'triangle'); // E6
  tone(c, 1975.5, t + 0.09, 0.55, 0.2, 'triangle'); // B6
  tone(c, 3951.0, t + 0.09, 0.25, 0.04, 'sine'); // Üst parıltı (B7)
}

/** Yumuşak, inen iki ton: uyarıcı ve eğitici (Yanlış Cevap) */
export function playWrong(): void {
  const c = ensure();
  if (!c) return;
  const t = c.currentTime + 0.01;
  const lp = c.createBiquadFilter();
  lp.type = 'lowpass';
  lp.frequency.value = 850;
  lp.connect(bus!);

  for (const [f, dt] of [
    [311.13, 0], // Eb4
    [233.08, 0.14], // Bb3
  ] as const) {
    const o = c.createOscillator();
    const g = c.createGain();
    o.type = 'triangle';
    o.frequency.setValueAtTime(f, t + dt);
    o.frequency.exponentialRampToValueAtTime(f * 0.94, t + dt + 0.22);
    g.gain.setValueAtTime(0.0001, t + dt);
    g.gain.linearRampToValueAtTime(0.22, t + dt + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dt + 0.26);

    o.connect(g);
    g.connect(lp);
    o.start(t + dt);
    o.stop(t + dt + 0.3);
  }
}

export const playError = playWrong;

/** Kimyasal Baloncuk (Minnaert bubble acoustic resonance) */
export function playBubble(): void {
  const c = ensure();
  if (!c) return;
  const t = c.currentTime + 0.005;

  const bubbles = [
    { startFreq: 340, endFreq: 1120, time: t, dur: 0.08, vol: 0.24 },
    { startFreq: 480, endFreq: 1450, time: t + 0.045, dur: 0.06, vol: 0.15 },
  ];

  for (const b of bubbles) {
    const o = c.createOscillator();
    const g = c.createGain();
    const bp = c.createBiquadFilter();

    bp.type = 'bandpass';
    bp.frequency.value = (b.startFreq + b.endFreq) * 0.6;
    bp.Q.value = 1.2;

    o.type = 'sine';
    o.frequency.setValueAtTime(b.startFreq, b.time);
    o.frequency.exponentialRampToValueAtTime(b.endFreq, b.time + b.dur * 0.85);

    g.gain.setValueAtTime(0.0001, b.time);
    g.gain.linearRampToValueAtTime(b.vol, b.time + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, b.time + b.dur);

    o.connect(bp);
    bp.connect(g);
    g.connect(bus!);

    o.start(b.time);
    o.stop(b.time + b.dur + 0.01);
  }
}

/** Kimyasal Tepkime Köpürmesi / Efervesan Coşku (Reaction Fizz) */
export function playFizz(): void {
  const c = ensure();
  if (!c || !noise) return;
  const t = c.currentTime + 0.01;
  const dur = 0.45;

  const src = c.createBufferSource();
  src.buffer = noise;

  const hp = c.createBiquadFilter();
  hp.type = 'highpass';
  hp.frequency.value = 1400;

  const bp = c.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.setValueAtTime(3200, t);
  bp.frequency.linearRampToValueAtTime(6800, t + dur * 0.5);
  bp.frequency.exponentialRampToValueAtTime(4000, t + dur);
  bp.Q.value = 1.8;

  const lfo = c.createOscillator();
  lfo.frequency.value = 32;
  const lfoGain = c.createGain();
  lfoGain.gain.value = 0.35;

  const g = c.createGain();
  g.gain.setValueAtTime(0.0001, t);
  g.gain.linearRampToValueAtTime(0.28, t + 0.02);
  g.gain.setValueAtTime(0.25, t + dur * 0.6);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);

  lfo.connect(lfoGain);
  lfoGain.connect(g.gain);

  src.connect(hp);
  hp.connect(bp);
  bp.connect(g);
  g.connect(bus!);

  lfo.start(t);
  src.start(t, Math.random() * 0.5);
  lfo.stop(t + dur + 0.02);
  src.stop(t + dur + 0.02);
}

/** Deney Tüpü / Cam Tıklaması ve Sıvı Damlası (Test Tube Clink / Liquid Drop) */
export function playDrop(): void {
  const c = ensure();
  if (!c) return;
  const t = c.currentTime + 0.005;

  const f0 = 2489;
  const f1 = 5820;

  const o0 = c.createOscillator();
  const g0 = c.createGain();
  o0.type = 'sine';
  o0.frequency.setValueAtTime(f0, t);
  g0.gain.setValueAtTime(0.0001, t);
  g0.gain.linearRampToValueAtTime(0.25, t + 0.002);
  g0.gain.exponentialRampToValueAtTime(0.0001, t + 0.38);

  const o1 = c.createOscillator();
  const g1 = c.createGain();
  o1.type = 'sine';
  o1.frequency.setValueAtTime(f1, t);
  g1.gain.setValueAtTime(0.0001, t);
  g1.gain.linearRampToValueAtTime(0.12, t + 0.001);
  g1.gain.exponentialRampToValueAtTime(0.0001, t + 0.09);

  if (noise) {
    const clickSrc = c.createBufferSource();
    clickSrc.buffer = noise;
    const clickBp = c.createBiquadFilter();
    clickBp.type = 'bandpass';
    clickBp.frequency.value = 4500;
    clickBp.Q.value = 3.0;
    const clickG = c.createGain();
    clickG.gain.setValueAtTime(0.15, t);
    clickG.gain.exponentialRampToValueAtTime(0.0001, t + 0.015);
    clickSrc.connect(clickBp);
    clickBp.connect(clickG);
    clickG.connect(bus!);
    clickSrc.start(t);
    clickSrc.stop(t + 0.02);
  }

  o0.connect(g0);
  g0.connect(bus!);
  o1.connect(g1);
  g1.connect(bus!);

  o0.start(t);
  o1.start(t);
  o0.stop(t + 0.4);
  o1.stop(t + 0.12);
}

/** Zafer Fanfarı: Sınav Tamamlama veya Seviye Atlama (Victory Fanfare) */
export function playSuccess(): void {
  const c = ensure();
  if (!c) return;
  const t = c.currentTime + 0.02;

  const notes = [
    { f: 523.25, dt: 0.0, dur: 0.35, v: 0.18 }, // C5
    { f: 659.25, dt: 0.09, dur: 0.35, v: 0.18 }, // E5
    { f: 783.99, dt: 0.18, dur: 0.35, v: 0.18 }, // G5
    { f: 1046.5, dt: 0.27, dur: 0.45, v: 0.22 }, // C6
    { f: 1318.5, dt: 0.36, dur: 0.7, v: 0.24 }, // E6
  ];

  notes.forEach((n) => {
    tone(c, n.f, t + n.dt, n.dur, n.v, 'triangle');
  });

  [523.25, 659.25, 783.99, 1046.5].forEach((f) => {
    tone(c, f * 2, t + 0.45, 1.4, 0.06, 'sine');
  });
}

/** Test Bitişi (Sakin Tamamlandı Akoru) */
export function playFinish(): void {
  const c = ensure();
  if (!c) return;
  const t = c.currentTime + 0.02;
  [392.0, 493.88, 587.33].forEach((f, i) => {
    tone(c, f, t + i * 0.03, 0.9, 0.09, 'triangle');
  });
}

function pop(c: AudioContext, t: number, vel: number) {
  if (!noise) return;
  const src = c.createBufferSource();
  src.buffer = noise;
  const bp = c.createBiquadFilter();
  bp.type = 'bandpass';
  bp.frequency.setValueAtTime(2200, t);
  bp.frequency.exponentialRampToValueAtTime(500, t + 0.12);
  const g = c.createGain();
  g.gain.setValueAtTime(vel, t);
  g.gain.exponentialRampToValueAtTime(0.0001, t + 0.15);
  src.connect(bp);
  bp.connect(g);
  g.connect(bus!);
  src.start(t, Math.random() * 0.5);
  src.stop(t + 0.18);
}

/** Alkış Efekti: Yükselip azalan yüzlerce el çırpma + kalabalık uğultusu */
export function playApplause(seconds = 3.2): void {
  const c = ensure();
  if (!c || !noise) return;
  const t0 = c.currentTime + 0.05;
  pop(c, t0, 0.5);

  const claps = Math.round(seconds * 70);
  for (let i = 0; i < claps; i++) {
    const u = Math.pow(Math.random(), 0.8);
    const t = t0 + 0.08 + u * seconds;
    const env = Math.sin(Math.min(1, (t - t0) / seconds) * Math.PI) ** 0.6;
    const src = c.createBufferSource();
    src.buffer = noise;
    const bp = c.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = 900 + Math.random() * 1600;
    bp.Q.value = 1.2;
    const g = c.createGain();
    const vel = (0.13 + Math.random() * 0.17) * env;
    g.gain.setValueAtTime(vel, t);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.02 + Math.random() * 0.03);

    let node: AudioNode = g;
    if (typeof c.createStereoPanner === 'function') {
      const p = c.createStereoPanner();
      p.pan.value = Math.random() * 1.6 - 0.8;
      g.connect(p);
      node = p;
    }
    src.connect(bp);
    bp.connect(g);
    node.connect(bus!);
    src.start(t, Math.random() * 0.9);
    src.stop(t + 0.06);
  }

  const hum = c.createBufferSource();
  hum.buffer = noise;
  hum.loop = true;
  const lp = c.createBiquadFilter();
  lp.type = 'bandpass';
  lp.frequency.value = 1200;
  lp.Q.value = 0.5;
  const hg = c.createGain();
  hg.gain.setValueAtTime(0.0001, t0);
  hg.gain.linearRampToValueAtTime(0.09, t0 + 0.6);
  hg.gain.linearRampToValueAtTime(0.0001, t0 + seconds + 0.3);
  hum.connect(lp);
  lp.connect(hg);
  hg.connect(bus!);
  hum.start(t0);
  hum.stop(t0 + seconds + 0.4);
}

export const sfx = {
  playCorrect,
  playWrong,
  playError: playWrong,
  playSuccess,
  playFinish,
  playApplause,
  playBubble,
  playFizz,
  playDrop,
  unlockAudio: () => {
    if (ctx) unlockAudio(ctx);
  },
  setEnabled: setSfxEnabled,
  setVolume: setSfxVolume,
};
