/**
 * Kimya YKS — Web Audio Procedural Background Music & Laboratory Soundscapes
 * 100% offline, procedural audio synthesis with 0 external sound files.
 * Includes 7 procedural ambient tracks specifically tuned for chemistry study:
 * 1. calm-electron (smooth orbital pad, calm study)
 * 2. peace-crystal (crystalline bell arpeggios, lattice structure)
 * 3. focus-catalyst (lo-fi EP chords & study beat)
 * 4. energy-reaction (driving bass & rapid filter arps, exothermic reaction)
 * 5. up-synthesis (uplifting bouncy rhythm, compound synthesis)
 * 6. mystery-quantum (deep sub-bass, slow wind & ethereal bells, quantum model)
 * 7. ambient-laboratory (gentle bubbles, distant reflections, quiet hum)
 */

import { L } from '../data/units/L';
import type { LocalizedText } from '../types/chemistry';

export type MusicMood = 'calm' | 'peaceful' | 'focus' | 'energetic' | 'uplifting' | 'mysterious' | 'nature';

export const MUSIC_MOODS: Array<{ id: MusicMood; label: LocalizedText }> = [
  { id: 'calm', label: L('Sakin', 'Calm', 'Ruhig', 'Calme', 'Спокойная', 'هادئة', '平静', 'Aram') },
  { id: 'peaceful', label: L('Huzurlu', 'Peaceful', 'Friedlich', 'Paisible', 'Умиротворённая', 'مريحة', '安宁', 'Bi aştî') },
  { id: 'focus', label: L('Odak', 'Focus', 'Fokus', 'Concentration', 'Фокус', 'تركيز', '专注', 'Bal') },
  { id: 'energetic', label: L('Tepkime & Enerji', 'Reaction & Energy', 'Reaktion & Energie', 'Réaction & Énergie', 'Реакция и Энергия', 'التفاعل والطاقة', '反应与能量', 'Reaksiyon û Enerjî') },
  { id: 'uplifting', label: L('Sentez & Neşe', 'Synthesis & Joy', 'Synthese & Freude', 'Synthèse & Joie', 'Синтез и Радость', 'التخليق والبهجة', '合成与喜悦', 'Sentêz û Şadî') },
  { id: 'mysterious', label: L('Kuantum & Gizem', 'Quantum & Mystery', 'Quanten & Geheimnis', 'Quantique & Mystère', 'Квант и Загадка', 'الكم والغموض', '量子与奥秘', 'Kwantûm û Raz') },
  { id: 'nature', label: L('Laboratuvar Ambiyansı', 'Laboratory Ambience', 'Laboratmosphäre', 'Ambiance de Laboratoire', 'Атмосфера лаборатории', 'أجواء المختبر', '实验室环境音', 'Hawîrdora Taqîgehê') },
];

type ChordQuality = 'maj' | 'min' | 'maj7' | 'm7' | 'dom7' | 'add9' | 'm9' | 'sus2' | 'maj9';

const QUALITY: Record<ChordQuality, number[]> = {
  maj: [0, 4, 7],
  min: [0, 3, 7],
  maj7: [0, 4, 7, 11],
  m7: [0, 3, 7, 10],
  dom7: [0, 4, 7, 10],
  add9: [0, 4, 7, 14],
  m9: [0, 3, 7, 10, 14],
  sus2: [0, 2, 7],
  maj9: [0, 4, 7, 11, 14],
};

type Texture = 'rain' | 'ocean' | 'wind' | 'birds';

export interface MusicTrack {
  id: string;
  mood: MusicMood;
  title: LocalizedText;
  bpm: number;
  /** Ton merkezi (MIDI) */
  key: number;
  /** Akor dizisi: [kökten yarım ton uzaklığı, akor türü]; her akor `barsPerChord` ölçü sürer */
  chords: Array<[number, ChordQuality]>;
  barsPerChord: number;
  /** 0–0.3: çift sekizliklerin gecikmesi (shuffle) */
  swing?: number;
  pad?: { wave: OscillatorType; cutoff: number; level: number };
  /** 16 adım: akor tonu sırası, -1 = sus */
  arp?: { steps: number[]; voice: 'pluck' | 'bell' | 'ep'; octave: number; level: number };
  /** Akoru vuruş adımlarında elektrikli piyanoyla çal */
  keys?: { steps: number[]; level: number };
  bass?: { steps: number[]; level: number };
  drums?: { kick: number[]; snare: number[]; hat: number[]; openHat?: number[]; level: number };
  textures?: Partial<Record<Texture, number>>;
  /** Yankı miktarı 0–1 */
  space: number;
  /** Parçalar arası ses seviyesi dengesi */
  trim?: number;
}

const ALL = [0, 2, 4, 6, 8, 10, 12, 14];

export const MUSIC_TRACKS: MusicTrack[] = [
  // 1. calm-electron (Calm, 64 BPM, D major 9, smooth orbital ambient pad)
  {
    id: 'calm-electron',
    mood: 'calm',
    bpm: 64,
    key: 50, // D
    barsPerChord: 2,
    space: 0.7,
    title: L(
      'Elektron Bulutu',
      'Electron Cloud',
      'Elektronenwolke',
      'Nuage électronique',
      'Электронное облако',
      'السحابة الإلكترونية',
      '电子云',
      'Ewra elektronê'
    ),
    chords: [[0, 'maj9'], [9, 'm9'], [5, 'maj7'], [7, 'sus2']],
    pad: { wave: 'triangle', cutoff: 920, level: 0.055 },
    keys: { steps: [0, 10], level: 0.09 },
    bass: { steps: [0], level: 0.12 },
    textures: { rain: 0.04 },
  },

  // 2. peace-crystal (Peaceful, 72 BPM, F major, crystalline bell arpeggios, lattice structure)
  {
    id: 'peace-crystal',
    trim: 0.9,
    mood: 'peaceful',
    bpm: 72,
    key: 53, // F
    barsPerChord: 1,
    space: 0.65,
    title: L(
      'Kristal Örgü',
      'Crystal Lattice',
      'Kristallgitter',
      'Réseau cristallin',
      'Кристаллическая решётка',
      'الشبكة البلورية',
      '晶体点阵',
      'Tora krîstalî'
    ),
    chords: [[0, 'add9'], [7, 'maj'], [9, 'min'], [5, 'maj7']],
    pad: { wave: 'triangle', cutoff: 1300, level: 0.045 },
    arp: { steps: [0, -1, 1, -1, 2, -1, 3, -1, 2, -1, 1, -1, 2, -1, 3, 4], voice: 'bell', octave: 1, level: 0.06 },
    bass: { steps: [0, 8], level: 0.1 },
    textures: { wind: 0.03 },
  },

  // 3. focus-catalyst (Focus, 78 BPM, Eb major 7, lo-fi study beat with gentle rain/vinyl texture and EP chords)
  {
    id: 'focus-catalyst',
    trim: 1.4,
    mood: 'focus',
    bpm: 78,
    key: 51, // Eb
    barsPerChord: 1,
    swing: 0.18,
    space: 0.4,
    title: L(
      'Katalizör',
      'Catalyst Focus',
      'Katalysator',
      'Catalyseur',
      'Катализатор',
      'العامل الحفاز',
      '催化剂',
      'Katalîzor'
    ),
    chords: [[0, 'maj7'], [9, 'm7'], [2, 'm7'], [7, 'dom7']],
    keys: { steps: [0, 7, 10], level: 0.1 },
    bass: { steps: [0, 7, 10], level: 0.13 },
    drums: { kick: [0, 7, 10], snare: [4, 12], hat: ALL, level: 0.48 },
    textures: { rain: 0.03 },
  },

  // 4. energy-reaction (Energetic, 116 BPM, A minor, driving synth bass with rapid filter arps, exothermic reaction)
  {
    id: 'energy-reaction',
    mood: 'energetic',
    bpm: 116,
    key: 45, // A
    barsPerChord: 1,
    space: 0.38,
    title: L(
      'Ekzotermik Tepkime',
      'Exothermic Reaction',
      'Exotherme Reaktion',
      'Réaction exothermique',
      'Экзотермическая реакция',
      'تفاعل طارد للحرارة',
      '放热反应',
      'Reaksiyona ekzotermîk'
    ),
    chords: [[0, 'min'], [8, 'maj'], [3, 'maj'], [10, 'maj']],
    pad: { wave: 'triangle', cutoff: 1800, level: 0.045 },
    arp: { steps: [0, 2, 1, 2, 0, 2, 1, 2, 0, 2, 1, 2, 3, 2, 1, 2], voice: 'pluck', octave: 1, level: 0.055 },
    bass: { steps: [2, 6, 10, 14], level: 0.14 },
    drums: { kick: [0, 4, 8, 12], snare: [4, 12], hat: [2, 6, 10, 14], openHat: [14], level: 0.58 },
  },

  // 5. up-synthesis (Uplifting, 102 BPM, G major, bright brass-like bells and bouncy rhythm, compound synthesis)
  {
    id: 'up-synthesis',
    trim: 1.8,
    mood: 'uplifting',
    bpm: 102,
    key: 55, // G
    barsPerChord: 1,
    space: 0.45,
    title: L(
      'Bileşik Sentezi',
      'Compound Synthesis',
      'Verbindungssynthese',
      'Synthèse de composés',
      'Синтез соединений',
      'تخليق المركبات',
      '化合物合成',
      'Sentêza pêkhateyan'
    ),
    chords: [[0, 'add9'], [7, 'maj'], [9, 'min'], [5, 'add9']],
    keys: { steps: [0, 3, 6, 10, 12], level: 0.1 },
    arp: { steps: [-1, -1, 4, -1, -1, -1, 3, -1, -1, -1, 4, -1, 2, -1, 3, -1], voice: 'bell', octave: 1, level: 0.04 },
    bass: { steps: [0, 6, 8, 12], level: 0.12 },
    drums: { kick: [0, 8, 10], snare: [4, 12], hat: [2, 6, 10, 14], level: 0.45 },
    textures: { wind: 0.02 },
  },

  // 6. mystery-quantum (Mysterious, 58 BPM, C# minor, deep sub-bass, slow wind texture and ethereal bells, quantum model)
  {
    id: 'mystery-quantum',
    mood: 'mysterious',
    bpm: 58,
    key: 49, // C#
    barsPerChord: 2,
    space: 0.85,
    title: L(
      'Kuantum Modeli',
      'Quantum Realm',
      'Quantenmodell',
      'Modèle quantique',
      'Квантовая модель',
      'النموذج الكمي',
      '量子模型',
      'Modela kwantûmê'
    ),
    chords: [[0, 'min'], [1, 'maj7'], [7, 'sus2'], [8, 'maj']],
    pad: { wave: 'triangle', cutoff: 650, level: 0.06 },
    arp: { steps: [0, -1, -1, 2, -1, -1, 1, -1, -1, -1, 3, -1, -1, 2, -1, -1], voice: 'bell', octave: 1, level: 0.05 },
    bass: { steps: [0], level: 0.13 },
    textures: { wind: 0.06 },
  },

  // 7. ambient-laboratory (Lab ambience, 60 BPM, bubbling beaker textures, distant chime reflections, serene low hum)
  {
    id: 'ambient-laboratory',
    trim: 1.2,
    mood: 'nature',
    bpm: 60,
    key: 48, // C
    barsPerChord: 4,
    space: 0.65,
    title: L(
      'Laboratuvar Sessizliği',
      'Laboratory Ambience',
      'Laborruhe',
      'Silence du laboratoire',
      'Лабораторная тишина',
      'هدوء المختبر',
      '实验室寂静',
      'Bêdengiya taqîgehê'
    ),
    chords: [[0, 'sus2'], [5, 'sus2']],
    pad: { wave: 'triangle', cutoff: 600, level: 0.02 },
    textures: { rain: 0.16, wind: 0.04 },
  },
];

const midiToHz = (m: number) => 440 * Math.pow(2, (m - 69) / 12);

function voiceChord(root: number, quality: ChordQuality, center: number): number[] {
  return QUALITY[quality]
    .map((iv) => {
      let n = root + iv;
      while (n < center - 7) n += 12;
      while (n > center + 7) n -= 12;
      return n;
    })
    .sort((a, b) => a - b);
}

const rand = (a: number, b: number) => a + Math.random() * (b - a);

export function unlockAudio(ctx: AudioContext): void {
  try {
    const nav = navigator as Navigator & { audioSession?: { type: string } };
    if (nav.audioSession && nav.audioSession.type !== 'playback') nav.audioSession.type = 'playback';
  } catch {
    // Unsupported browser/environment, ignore
  }
  try {
    const buf = ctx.createBuffer(1, 1, 22050);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    src.connect(ctx.destination);
    src.start(0);
    if (ctx.state !== 'running') void ctx.resume().catch(() => {});
  } catch {
    // Retry on next gesture
  }
}

export function audioLog(...parts: unknown[]): void {
  try {
    const nav = navigator as Navigator & { audioSession?: { type: string } };
    console.info('[kimya-audio]', ...parts, 'session=' + (nav.audioSession?.type ?? 'none'));
  } catch {
    // Ignore
  }
}

class MusicEngine {
  private ctx: AudioContext | null = null;
  private out: GainNode | null = null;
  private dry: GainNode | null = null;
  private send: GainNode | null = null;
  private padBus: GainNode | null = null;
  private textureBus: GainNode | null = null;
  private noise: AudioBuffer | null = null;
  private textureNodes: AudioNode[] = [];
  private timer: number | null = null;
  private track: MusicTrack = MUSIC_TRACKS[0];
  private step = 0;
  private nextTime = 0;
  private playing = false;
  private volume = 0.7;
  private waveAt = 0;

  get isPlaying(): boolean {
    return this.playing;
  }

  private ensureContext(): AudioContext | null {
    if (this.ctx) return this.ctx;
    const Ctor: typeof AudioContext | undefined =
      typeof window !== 'undefined'
        ? window.AudioContext ??
          (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
        : undefined;
    if (!Ctor) return null;
    const ctx = new Ctor();

    const out = ctx.createGain();
    out.gain.value = 0;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -14;
    comp.knee.value = 18;
    comp.ratio.value = 2;
    comp.attack.value = 0.03;
    comp.release.value = 0.25;

    const tone = ctx.createBiquadFilter();
    tone.type = 'lowpass';
    tone.frequency.value = 6500;
    tone.Q.value = 0.5;
    comp.connect(tone);
    tone.connect(out);
    out.connect(ctx.destination);

    const dry = ctx.createGain();
    dry.connect(comp);

    const send = ctx.createGain();
    const reverb = ctx.createConvolver();
    reverb.buffer = this.makeImpulse(ctx, 2.4, 3);
    const wet = ctx.createGain();
    wet.gain.value = 0.9;
    send.connect(reverb);
    reverb.connect(wet);
    wet.connect(comp);

    const padBus = ctx.createGain();
    padBus.connect(dry);
    padBus.connect(send);

    const textureBus = ctx.createGain();
    textureBus.connect(dry);
    textureBus.connect(send);

    const noise = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const data = noise.getChannelData(0);
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1;

    this.ctx = ctx;
    this.out = out;
    this.dry = dry;
    this.send = send;
    this.padBus = padBus;
    this.textureBus = textureBus;
    this.noise = noise;
    return ctx;
  }

  private makeImpulse(ctx: AudioContext, seconds: number, decay: number): AudioBuffer {
    const len = Math.floor(ctx.sampleRate * seconds);
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = buf.getChannelData(c);
      let lp = 0;
      for (let i = 0; i < len; i++) {
        const t = i / len;
        const k = 0.25 - 0.2 * t;
        lp += k * (Math.random() * 2 - 1 - lp);
        d[i] = lp * 2.2 * Math.pow(1 - t, decay) * (i < 600 ? i / 600 : 1);
      }
    }
    return buf;
  }

  private route(node: AudioNode, sendAmount: number, pan = 0, bus?: GainNode) {
    const ctx = this.ctx!;
    let src: AudioNode = node;
    if (pan !== 0 && typeof ctx.createStereoPanner === 'function') {
      const p = ctx.createStereoPanner();
      p.pan.value = pan;
      node.connect(p);
      src = p;
    }
    if (bus) {
      src.connect(bus);
      return;
    }
    src.connect(this.dry!);
    if (sendAmount > 0) {
      const s = ctx.createGain();
      s.gain.value = sendAmount;
      src.connect(s);
      s.connect(this.send!);
    }
  }

  // ——— Instruments

  private pad(notes: number[], t: number, dur: number, cfg: NonNullable<MusicTrack['pad']>) {
    const ctx = this.ctx!;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.Q.value = 0.6;
    filter.frequency.setValueAtTime(cfg.cutoff * 0.6, t);
    filter.frequency.linearRampToValueAtTime(cfg.cutoff, t + dur * 0.5);
    filter.frequency.linearRampToValueAtTime(cfg.cutoff * 0.7, t + dur);
    const env = ctx.createGain();
    const attack = Math.min(2.5, dur * 0.35);
    env.gain.setValueAtTime(0.0001, t);
    env.gain.linearRampToValueAtTime(cfg.level * 1.5, t + attack);
    env.gain.setValueAtTime(cfg.level * 1.5, t + dur - 0.2);
    env.gain.linearRampToValueAtTime(0.0001, t + dur + 1.6);
    filter.connect(env);
    this.route(env, 0, 0, this.padBus!);
    for (const n of notes.slice(0, 4)) {
      for (const det of [-4, 4]) {
        const o = ctx.createOscillator();
        o.type = det < 0 ? 'sine' : cfg.wave;
        o.frequency.value = midiToHz(n);
        o.detune.value = det;
        o.connect(filter);
        o.start(t);
        o.stop(t + dur + 1.8);
      }
    }
  }

  private ep(freq: number, t: number, vel: number, pan: number) {
    const ctx = this.ctx!;
    const car = ctx.createOscillator();
    const mod = ctx.createOscillator();
    const modGain = ctx.createGain();
    const amp = ctx.createGain();
    car.frequency.value = freq;
    mod.frequency.value = freq;
    modGain.gain.setValueAtTime(freq * 0.6, t);
    modGain.gain.exponentialRampToValueAtTime(freq * 0.08, t + 0.9);
    mod.connect(modGain);
    modGain.connect(car.frequency);
    amp.gain.setValueAtTime(0.0001, t);
    amp.gain.linearRampToValueAtTime(vel, t + 0.006);
    amp.gain.exponentialRampToValueAtTime(vel * 0.35, t + 0.4);
    amp.gain.exponentialRampToValueAtTime(0.0001, t + 2.6);
    car.connect(amp);
    this.route(amp, 0.35, pan);
    car.start(t);
    mod.start(t);
    car.stop(t + 2.7);
    mod.stop(t + 2.7);
  }

  private bell(freq: number, t: number, vel: number, pan: number) {
    const ctx = this.ctx!;
    const car = ctx.createOscillator();
    const mod = ctx.createOscillator();
    const modGain = ctx.createGain();
    const amp = ctx.createGain();
    car.frequency.value = freq;
    mod.frequency.value = freq * 2;
    modGain.gain.setValueAtTime(freq * 0.7, t);
    modGain.gain.exponentialRampToValueAtTime(freq * 0.05, t + 1.4);
    mod.connect(modGain);
    modGain.connect(car.frequency);
    amp.gain.setValueAtTime(0.0001, t);
    amp.gain.linearRampToValueAtTime(vel, t + 0.01);
    amp.gain.exponentialRampToValueAtTime(0.0001, t + 3.2);
    car.connect(amp);
    this.route(amp, 0.6, pan);
    car.start(t);
    mod.start(t);
    car.stop(t + 3.3);
    mod.stop(t + 3.3);
  }

  private pluck(freq: number, t: number, vel: number, pan: number) {
    const ctx = this.ctx!;
    const o1 = ctx.createOscillator();
    const o2 = ctx.createOscillator();
    o1.type = 'triangle';
    o2.type = 'sine';
    o1.frequency.value = freq;
    o2.frequency.value = freq * 2;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.Q.value = 0.5;
    filter.frequency.setValueAtTime(Math.min(5000, freq * 5), t);
    filter.frequency.exponentialRampToValueAtTime(Math.max(300, freq * 1.2), t + 0.35);
    const amp = ctx.createGain();
    amp.gain.setValueAtTime(0.0001, t);
    amp.gain.linearRampToValueAtTime(vel, t + 0.008);
    amp.gain.exponentialRampToValueAtTime(0.0001, t + 0.9);
    const mix2 = ctx.createGain();
    mix2.gain.value = 0.35;
    o1.connect(filter);
    o2.connect(mix2);
    mix2.connect(filter);
    filter.connect(amp);
    this.route(amp, 0.4, pan);
    o1.start(t);
    o2.start(t);
    o1.stop(t + 1);
    o2.stop(t + 1);
  }

  private bassNote(freq: number, t: number, dur: number, vel: number) {
    const ctx = this.ctx!;
    const o = ctx.createOscillator();
    const sub = ctx.createOscillator();
    o.type = 'triangle';
    sub.type = 'sine';
    o.frequency.value = freq;
    sub.frequency.value = freq / 2;
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 420;
    const amp = ctx.createGain();
    amp.gain.setValueAtTime(0.0001, t);
    amp.gain.linearRampToValueAtTime(vel, t + 0.015);
    amp.gain.exponentialRampToValueAtTime(vel * 0.6, t + dur * 0.5);
    amp.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(filter);
    sub.connect(filter);
    filter.connect(amp);
    this.route(amp, 0.05);
    o.start(t);
    sub.start(t);
    o.stop(t + dur + 0.05);
    sub.stop(t + dur + 0.05);
  }

  private kick(t: number, vel: number) {
    const ctx = this.ctx!;
    const o = ctx.createOscillator();
    const amp = ctx.createGain();
    o.frequency.setValueAtTime(140, t);
    o.frequency.exponentialRampToValueAtTime(42, t + 0.12);
    amp.gain.setValueAtTime(0.0001, t);
    amp.gain.linearRampToValueAtTime(vel, t + 0.004);
    amp.gain.exponentialRampToValueAtTime(0.0001, t + 0.45);
    o.connect(amp);
    this.route(amp, 0);
    o.start(t);
    o.stop(t + 0.5);
  }

  private noiseHit(
    t: number,
    dur: number,
    vel: number,
    type: BiquadFilterType,
    freq: number,
    q: number,
    pan: number,
    sendAmt: number
  ) {
    const ctx = this.ctx!;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    const filter = ctx.createBiquadFilter();
    filter.type = type;
    filter.frequency.value = freq;
    filter.Q.value = q;
    const amp = ctx.createGain();
    amp.gain.setValueAtTime(0.0001, t);
    amp.gain.linearRampToValueAtTime(vel, t + 0.003);
    amp.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(filter);
    filter.connect(amp);
    this.route(amp, sendAmt, pan);
    src.start(t, Math.random() * 1.5);
    src.stop(t + dur + 0.02);
  }

  private snare(t: number, vel: number) {
    this.noiseHit(t, 0.2, vel * 0.4, 'bandpass', 1500, 0.7, 0, 0.25);
    const ctx = this.ctx!;
    const o = ctx.createOscillator();
    const amp = ctx.createGain();
    o.frequency.setValueAtTime(220, t);
    o.frequency.exponentialRampToValueAtTime(160, t + 0.08);
    amp.gain.setValueAtTime(vel * 0.35, t);
    amp.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
    o.connect(amp);
    this.route(amp, 0.1);
    o.start(t);
    o.stop(t + 0.15);
  }

  // ——— Textures

  private startTextures(track: MusicTrack) {
    const ctx = this.ctx!;
    this.stopTextures();
    const tx = track.textures ?? {};
    const loopNoise = () => {
      const s = ctx.createBufferSource();
      s.buffer = this.noise;
      s.loop = true;
      s.start();
      this.textureNodes.push(s);
      return s;
    };
    if (tx.rain) {
      const s = loopNoise();
      const hp = ctx.createBiquadFilter();
      hp.type = 'highpass';
      hp.frequency.value = 450;
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass';
      lp.frequency.value = 2800;
      const g = ctx.createGain();
      g.gain.value = tx.rain;
      s.connect(hp);
      hp.connect(lp);
      lp.connect(g);
      g.connect(this.textureBus!);
      this.textureNodes.push(g);
    }
    if (tx.wind) {
      const s = loopNoise();
      const bp = ctx.createBiquadFilter();
      bp.type = 'bandpass';
      bp.Q.value = 0.9;
      bp.frequency.value = 500;
      const lfo = ctx.createOscillator();
      lfo.frequency.value = 0.07;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = 260;
      lfo.connect(lfoGain);
      lfoGain.connect(bp.frequency);
      lfo.start();
      const g = ctx.createGain();
      g.gain.value = tx.wind;
      s.connect(bp);
      bp.connect(g);
      g.connect(this.textureBus!);
      this.textureNodes.push(lfo, g);
    }
  }

  private stopTextures() {
    for (const n of this.textureNodes) {
      try {
        if (n instanceof AudioScheduledSourceNode) n.stop();
        n.disconnect();
      } catch {
        // Already stopped
      }
    }
    this.textureNodes = [];
  }

  // ——— Sequencer

  private schedule = () => {
    const ctx = this.ctx;
    if (!ctx || !this.playing) return;
    const tr = this.track;
    const sixteenth = 60 / tr.bpm / 4;
    const barSteps = 16;
    const totalBars = tr.chords.length * tr.barsPerChord;
    const totalSteps = totalBars * barSteps;

    while (this.nextTime < ctx.currentTime + 0.35) {
      const s = this.step;
      const inBar = s % barSteps;
      const bar = Math.floor(s / barSteps);
      const chordIdx = Math.floor(bar / tr.barsPerChord) % tr.chords.length;
      const [semi, qual] = tr.chords[chordIdx];
      const rootMidi = tr.key + semi;
      const chordNotes = voiceChord(rootMidi, qual, 60);

      const section = Math.floor(bar / 4) % 4;
      const full = section === 1 || section === 2;

      let t = this.nextTime;
      if (tr.swing && inBar % 2 === 1) t += sixteenth * tr.swing;
      const hum = () => 0.9 + Math.random() * 0.2;

      // Pad chord trigger
      if (inBar === 0 && bar % tr.barsPerChord === 0 && tr.pad) {
        this.pad(chordNotes, t, sixteenth * barSteps * tr.barsPerChord, tr.pad);
      }

      // Keys chord stabs
      if (tr.keys && tr.keys.steps.includes(inBar)) {
        chordNotes.forEach((n, i) => {
          this.ep(midiToHz(n), t + i * 0.008, tr.keys!.level * hum(), (i - 1.5) * 0.2);
        });
      }

      // Arpeggio
      if (tr.arp) {
        const stepIdx = inBar % tr.arp.steps.length;
        const degree = tr.arp.steps[stepIdx];
        if (degree >= 0) {
          const octaveOffset = (tr.arp.octave ?? 1) * 12;
          const noteMidi = chordNotes[degree % chordNotes.length] + octaveOffset;
          const pan = ((degree % 4) - 1.5) * 0.3;
          const vel = tr.arp.level * hum();
          if (tr.arp.voice === 'bell') this.bell(midiToHz(noteMidi), t, vel, pan);
          else if (tr.arp.voice === 'ep') this.ep(midiToHz(noteMidi), t, vel, pan);
          else this.pluck(midiToHz(noteMidi), t, vel, pan);
        }
      }

      // Bass note
      if (tr.bass && tr.bass.steps.includes(inBar)) {
        let b = rootMidi;
        while (b > 45) b -= 12;
        this.bassNote(midiToHz(b), t, sixteenth * 3.5, tr.bass.level * hum());
      }

      // Drums
      if (tr.drums && full) {
        const d = tr.drums;
        if (d.kick.includes(inBar)) this.kick(t, d.level * hum());
        if (d.snare.includes(inBar)) this.snare(t, d.level * 0.8 * hum());
        if (d.hat.includes(inBar)) this.noiseHit(t, 0.05, d.level * 0.1 * hum(), 'bandpass', 5200, 0.9, 0.25, 0.05);
        if (d.openHat?.includes(inBar)) this.noiseHit(t, 0.2, d.level * 0.08, 'bandpass', 5000, 0.8, -0.2, 0.1);
      }

      this.nextTime += sixteenth;
      this.step = (s + 1) % totalSteps;
    }
  };

  setTrack(id: string) {
    const next = MUSIC_TRACKS.find((x) => x.id === id) ?? MUSIC_TRACKS[0];
    const changed = next.id !== this.track.id;
    this.track = next;
    this.step = 0;
    if (this.ctx && this.send && this.padBus) {
      this.send.gain.setTargetAtTime(next.space * 0.55, this.ctx.currentTime, 0.3);
      this.padBus.gain.setTargetAtTime(1, this.ctx.currentTime, 0.1);
      if (this.playing && changed) {
        this.nextTime = this.ctx.currentTime + 0.1;
        this.startTextures(next);
        this.out?.gain.setTargetAtTime(this.level(), this.ctx.currentTime, 0.3);
      }
    }
  }

  private level(): number {
    return this.volume * 0.9 * (this.track.trim ?? 1);
  }

  setVolume(v: number) {
    this.volume = Math.max(0, Math.min(1, v));
    if (this.ctx && this.out && this.playing) {
      this.out.gain.setTargetAtTime(this.level(), this.ctx.currentTime, 0.15);
    }
  }

  async start(trackId?: string): Promise<boolean> {
    const ctx = this.ensureContext();
    if (!ctx || !this.out || !this.send) return false;
    if (trackId) this.setTrack(trackId);
    this.send.gain.value = this.track.space * 0.55;
    unlockAudio(ctx);
    try {
      if (ctx.state !== 'running') await ctx.resume();
    } catch (e) {
      audioLog('resume error', String(e));
      return false;
    }
    if (ctx.state !== 'running') return false;
    if (!this.playing) {
      this.playing = true;
      this.nextTime = ctx.currentTime + 0.1;
      this.startTextures(this.track);
      this.timer = window.setInterval(this.schedule, 100);
      this.schedule();
    }
    this.out.gain.cancelScheduledValues(ctx.currentTime);
    this.out.gain.setTargetAtTime(this.level(), ctx.currentTime, 0.8);
    return true;
  }

  stop() {
    this.playing = false;
    if (this.timer !== null) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
    if (this.ctx && this.out) {
      this.out.gain.cancelScheduledValues(this.ctx.currentTime);
      this.out.gain.setTargetAtTime(0, this.ctx.currentTime, 0.25);
      const ctx = this.ctx;
      window.setTimeout(() => {
        if (this.playing || ctx.state !== 'running') return;
        this.stopTextures();
        // A running AudioContext keeps the audio thread rendering silence (battery drain, and on iOS
        // an active audio session); start() resumes it.
        void ctx.suspend().catch(() => {});
      }, 1500);
    }
  }

  /** App went to the background: stop at once (no fade, timers may not fire) and release the audio thread. */
  pauseForBackground() {
    this.playing = false;
    if (this.timer !== null) {
      window.clearInterval(this.timer);
      this.timer = null;
    }
    if (!this.ctx) return;
    this.out?.gain.cancelScheduledValues(this.ctx.currentTime);
    if (this.out) this.out.gain.value = 0;
    this.stopTextures();
    if (this.ctx.state === 'running') void this.ctx.suspend().catch(() => {});
  }
}

export const musicEngine = new MusicEngine();
