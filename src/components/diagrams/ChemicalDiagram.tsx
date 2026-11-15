import React, { useState, useRef, useEffect, useContext } from 'react';
import { Maximize2, X, ZoomIn, ZoomOut } from 'lucide-react';
import type { QuestionDiagramSpec, LanguageCode } from '../../types/chemistry';
import { ZOOM_FIT_I18N } from '../three/Kimya3DLab';
import { diagramLabelResolver } from '../../i18n/diagramStrings';

const FULLSCREEN_I18N: Record<LanguageCode, string> = {
  tr: 'Tam Ekran Büyüt',
  en: 'Fullscreen Expand',
  de: 'Vollbild vergrößern',
  fr: 'Agrandir en plein écran',
  ru: 'Развернуть на весь экран',
  ar: 'ملء الشاشة',
  zh: '全屏放大',
  ku: 'Tam ekran mezin bike',
};

export const CLOSE_MODAL_I18N: Record<LanguageCode, string> = {
  tr: 'Kapat',
  en: 'Close',
  de: 'Schließen',
  fr: 'Fermer',
  ru: 'Закрыть',
  ar: 'إغلاق',
  zh: '关闭',
  ku: 'Bigre',
};

// ---------------------------------------------------------------------------
// Obsidian Lab Glass primitives: lit-sphere gradients (white highlight at the
// upper left, the element colour, a deep shade and a dark rim), a soft drop
// shadow and a cylinder-like bond. The SVG sits on the dark .ky-stage.
// ---------------------------------------------------------------------------
const LIT_TONES: Record<string, [string, string]> = {
  teal: ['#5FF2DF', '#0C8073'],
  gold: ['#FFD873', '#A86A08'],
  ruby: ['#FF6B7A', '#9C1830'],
  green: ['#7DF0A8', '#0E8A52'],
  blue: ['#6FA8FF', '#1B3FA8'],
  violet: ['#C9A2FF', '#5B32C9'],
  white: ['#E9EEF5', '#7C8798'],
  slate: ['#7C8AA0', '#1B2536'],
};

const DiagramDefs: React.FC = () => (
  <defs>
    {Object.entries(LIT_TONES).map(([name, [c, cd]]) => (
      <radialGradient key={name} id={`dg-lit-${name}`} cx="0.32" cy="0.26" r="0.85" fx="0.32" fy="0.26">
        <stop offset="0" stopColor="#ffffff" />
        <stop offset="0.3" stopColor={c} />
        <stop offset="0.78" stopColor={cd} />
        <stop offset="1" stopColor="#020409" />
      </radialGradient>
    ))}
    <filter id="dg-shadow" x="-50%" y="-50%" width="200%" height="220%">
      <feDropShadow dx="0" dy="3" stdDeviation="2.4" floodColor="#000000" floodOpacity="0.55" />
    </filter>
  </defs>
);

/** Bond: a dark-edged grey rod with a lighter centre line, like the .ky-bond recipe. */
const Bond: React.FC<{ x1: number; y1: number; x2: number; y2: number }> = ({ x1, y1, x2, y2 }) => (
  <g>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#4A566A" strokeWidth={7} strokeLinecap="round" />
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#93A1B5" strokeWidth={5} strokeLinecap="round" />
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="#E8EEF6" strokeWidth={1.6} strokeLinecap="round" opacity={0.85} />
  </g>
);

// ---------------------------------------------------------------------------
// Fitted labels. Label strings come from 8 languages and vary a lot in length,
// so every label gets a slot width (SVG units): it stays on one line when it
// fits, otherwise wraps onto two lines at the space nearest the middle, and
// only then shrinks (down to a floor, after which textLength squeezes it).
// ---------------------------------------------------------------------------
function glyphUnits(text: string): number {
  let u = 0;
  for (const ch of text) {
    const c = ch.codePointAt(0) ?? 0;
    if (c >= 0x2e80) u += 1; // CJK: full em
    else if (ch === ' ') u += 0.28;
    else if (c >= 0x400 && c <= 0x4ff) u += c < 0x430 ? 0.72 : 0.62; // Cyrillic runs wider than Latin
    else if (/[A-ZÇĞİÖŞÜА-ЯΔ0-9]/.test(ch)) u += 0.64;
    else if (/[il.,:;'!|()Iı\[\]]/.test(ch)) u += 0.3;
    else u += 0.54;
  }
  return u;
}

function splitTwo(text: string): [string, string] | null {
  const mid = text.length / 2;
  let best = -1;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === ' ' && (best < 0 || Math.abs(i - mid) < Math.abs(best - mid))) best = i;
  }
  if (best <= 0) return null;
  return [text.slice(0, best), text.slice(best + 1)];
}

// ---------------------------------------------------------------------------
// Figure context: language (for right-to-left labels), the smallest font size
// in viewBox units that is still about 11 CSS px on screen at the measured
// width of the drawing (0 on wide stages: nothing changes), and the list of
// labels that did not fit their slot at that size. Those are drawn as a
// numbered badge in the figure and spelled out in the legend under it.
// ---------------------------------------------------------------------------
interface LegendEntry {
  key: string;
  n: number;
  text: string;
  color: string;
}

interface FigureCtx {
  lang: LanguageCode;
  min: number;
  legend: LegendEntry[] | null;
}

const FigureContext = React.createContext<FigureCtx>({ lang: 'tr', min: 0, legend: null });

const ARABIC = /[؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿]/;
const LRI = '⁦';
const PDI = '⁩';

/**
 * Arabic labels are laid out right to left; every formula, number-with-unit or symbol run inside
 * them is wrapped in a left-to-right isolate so it keeps its own order and its logical place
 * ("تسخين: T↑" keeps the colon after the Arabic word and "T↑" intact). Labels without Arabic
 * letters (pure formulas) stay ordinary left-to-right text.
 */
function bidiText(text: string, lang: LanguageCode): { text: string; rtl: boolean } {
  if (lang !== 'ar' || !ARABIC.test(text)) return { text, rtl: false };
  // A run = no Arabic letters, starts and ends on a non-space, non-sentence-punctuation character,
  // and holds at least one Latin letter, digit or chemistry symbol.
  const out = text.replace(/[^؀-ۿݐ-ݿﭐ-﷿ﹰ-﻿]+/g, (run) => {
    const m = run.match(/^([\s:،؛,;.!?·]*)([\s\S]*?)([\s:،؛,;.!?·]*)$/);
    if (!m) return run;
    let [, lead, core, trail] = m;
    if (!/[A-Za-z0-9Ͱ-Ͽ⁰-₟←-⋿°%+\-−=<>]/.test(core)) return run;
    // An unmatched bracket at the edge belongs to the Arabic sentence, not to the formula.
    const opens = (core.match(/[(\[（]/g) || []).length;
    const closes = (core.match(/[)\]）]/g) || []).length;
    if (opens > closes && /^[(\[（]/.test(core)) {
      lead += core[0];
      core = core.slice(1).replace(/^\s+/, (sp) => ((lead += sp), ''));
    } else if (closes > opens && /[)\]）]$/.test(core)) {
      trail = core[core.length - 1] + trail;
      core = core.slice(0, -1);
      const sp = core.match(/\s+$/);
      if (sp) {
        trail = sp[0] + trail;
        core = core.slice(0, -sp[0].length);
      }
    }
    if (!core) return run;
    return `${lead}${LRI}${core}${PDI}${trail}`;
  });
  return { text: out, rtl: true };
}

const flipAnchor = (a: 'start' | 'middle' | 'end'): 'start' | 'middle' | 'end' => (a === 'start' ? 'end' : a === 'end' ? 'start' : 'middle');

/** SVG text attributes for one label: right-to-left paragraph with a mirrored anchor for Arabic. */
function textDir(rtl: boolean, anchor: 'start' | 'middle' | 'end') {
  return rtl
    ? ({ textAnchor: flipAnchor(anchor), direction: 'rtl', style: { unicodeBidi: 'plaintext' as const } } as const)
    : ({ textAnchor: anchor } as const);
}

interface FitLabelProps {
  x: number;
  y: number;
  /** Slot width in SVG units. */
  w: number;
  size?: number;
  anchor?: 'start' | 'middle' | 'end';
  fill: string;
  weight?: number | string;
  /** Allow wrapping onto a second line. */
  wrap?: boolean;
  /** Where y sits when wrapped: first baseline (top), last baseline (bottom) or centred. */
  valign?: 'top' | 'middle' | 'bottom';
  minSize?: number;
  children: React.ReactNode;
}

const FitLabel: React.FC<FitLabelProps> = ({
  x,
  y,
  w,
  size = 11,
  anchor = 'middle',
  fill,
  weight,
  wrap = true,
  valign = 'middle',
  minSize = 8,
  children,
}) => {
  const ctx = useContext(FigureContext);
  const raw = React.Children.toArray(children).join('');
  if (!raw.trim()) return null;
  const phone = ctx.min > size; // narrow stage: this label has to grow to stay legible
  if (phone) size = r1(ctx.min);
  const floor = phone ? size : minSize;
  const bd = (t: string) => bidiText(t, ctx.lang);
  const whole = bd(raw);
  const dir = textDir(whole.rtl, anchor);
  const common = { x, fill, fontWeight: weight, ...dir } as const;
  const one = glyphUnits(raw) * size;
  const slack = phone ? 1.1 : 1; // a slightly condensed line is better than a legend entry
  if (one <= w) {
    return (
      <text {...common} y={y} fontSize={size}>
        {whole.text}
      </text>
    );
  }
  if (phone && one <= w * slack) {
    return (
      <text {...common} y={y} fontSize={size} textLength={w} lengthAdjust="spacingAndGlyphs">
        {whole.text}
      </text>
    );
  }
  const parts = wrap ? splitTwo(raw) : null;
  if (parts) {
    const units = Math.max(glyphUnits(parts[0]), glyphUnits(parts[1]));
    if (!phone || units * floor <= w * slack) {
      const fs = Math.max(floor, Math.min(size, w / units));
      const lh = Math.round(fs * 1.18 * 10) / 10;
      const y0 = valign === 'top' ? y : valign === 'bottom' ? y - lh : Math.round((y - lh / 2) * 10) / 10;
      const sq = (t: string) => (glyphUnits(t) * fs > w ? { textLength: w, lengthAdjust: 'spacingAndGlyphs' as const } : {});
      return (
        <text {...common} y={y0} fontSize={Math.round(fs * 10) / 10}>
          <tspan x={x} {...sq(parts[0])}>
            {bd(parts[0]).text}
          </tspan>
          <tspan x={x} dy={lh} {...sq(parts[1])}>
            {bd(parts[1]).text}
          </tspan>
        </text>
      );
    }
  }
  if (phone && ctx.legend) {
    // Does not fit at a legible size: numbered badge here, full text in the legend below.
    const key = `${x}|${y}|${raw}`;
    let entry = ctx.legend.find((e) => e.key === key);
    if (!entry) {
      entry = { key, n: ctx.legend.length + 1, text: raw, color: fill };
      ctx.legend.push(entry);
    }
    const r = r1(size * 0.62);
    const bx = anchor === 'middle' ? x : anchor === 'start' ? x + r : x - r;
    const by = r1(y - size * 0.34);
    return (
      <g className="diagram-badge">
        <circle cx={bx} cy={by} r={r} fill={fill} stroke="#0b1220" strokeWidth="1" />
        <text x={bx} y={r1(by + size * 0.35)} textAnchor="middle" fontSize={size} fontWeight="bold" fill="#0b1220">
          {entry.n}
        </text>
      </g>
    );
  }
  const fs = Math.max(floor, (size * w) / one);
  const squeeze = glyphUnits(raw) * fs > w;
  return (
    <text
      {...common}
      y={y}
      fontSize={Math.round(fs * 10) / 10}
      {...(squeeze ? { textLength: w, lengthAdjust: 'spacingAndGlyphs' } : {})}
    >
      {whole.text}
    </text>
  );
};

// ---------------------------------------------------------------------------
// Shared pieces for the topic figures: palette, arrows, axes and the few words
// (axis names, legend entries) those figures need in all 8 languages.
// ---------------------------------------------------------------------------
const K = {
  text: 'var(--text-primary, #f2f6fb)',
  sec: 'var(--text-secondary, #b4c0d0)',
  mut: 'var(--text-muted, #9fb0c6)',
  line: 'var(--border-subtle, #334155)',
  cyan: 'var(--accent-cyan, #2dd9c3)',
  ruby: 'var(--accent-ruby, #ff6b7a)',
  amber: 'var(--accent-amber, #f6b73c)',
  green: 'var(--accent-emerald, #5ee6a8)',
} as const;

const r1 = (n: number) => Math.round(n * 10) / 10;

/** Decimal comma for the languages that write "0,1 M" (the bank does the same). */
const dec = (lang: LanguageCode, s: string) => (lang === 'en' || lang === 'ar' || lang === 'zh' ? s : s.replace(/(\d)\.(\d)/g, '$1,$2'));

interface ArrowProps {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  color: string;
  width?: number;
  /** Arrowhead at both ends (a span, e.g. ΔT between two levels). */
  both?: boolean;
  dash?: string;
  head?: number;
}

const Arrow: React.FC<ArrowProps> = ({ x1, y1, x2, y2, color, width = 2, both = false, dash, head = 8 }) => {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const tip = (x: number, y: number, ang: number) =>
    [
      [x, y],
      [x - head * Math.cos(ang - 0.42), y - head * Math.sin(ang - 0.42)],
      [x - head * Math.cos(ang + 0.42), y - head * Math.sin(ang + 0.42)],
    ]
      .map((p) => `${r1(p[0])},${r1(p[1])}`)
      .join(' ');
  const cut = head * 0.7;
  const sx = both ? x1 + cut * Math.cos(a) : x1;
  const sy = both ? y1 + cut * Math.sin(a) : y1;
  return (
    <g>
      <line
        x1={r1(sx)}
        y1={r1(sy)}
        x2={r1(x2 - cut * Math.cos(a))}
        y2={r1(y2 - cut * Math.sin(a))}
        stroke={color}
        strokeWidth={width}
        strokeDasharray={dash}
      />
      <polygon points={tip(x2, y2, a)} fill={color} />
      {both && <polygon points={tip(x1, y1, a + Math.PI)} fill={color} />}
    </g>
  );
};

const Axes: React.FC<{ x0: number; y0: number; x1: number; y1: number }> = ({ x0, y0, x1, y1 }) => (
  <g>
    <Arrow x1={x0} y1={y0} x2={x1} y2={y0} color={K.sec} />
    <Arrow x1={x0} y1={y0} x2={x0} y2={y1} color={K.sec} />
  </g>
);

type FigureWord =
  | 'pure' | 'soln' | 'heat' | 'cool' | 'tC' | 'time' | 'solub' | 'unsat' | 'supersat' | 'enth' | 'buf'
  | 'cat' | 'an' | 'znDown' | 'cuUp' | 'allo' | 'nacl' | 'soil' | 'ax3e' | 'ratio' | 'dissolve' | 'precip';

const FIGURE_WORDS: Record<LanguageCode, Record<FigureWord, string>> = {
  tr: {
    pure: 'Saf su', soln: 'Çözelti', heat: 'Isıtma', cool: 'Soğutma', tC: 'Sıcaklık (°C)', time: 'Zaman',
    solub: 'Çözünürlük (g/100 g su)', unsat: 'doymamış', supersat: 'aşırı doymuş', enth: 'Entalpi (kJ)', buf: 'Tampon bölgesi',
    cat: 'Katot', an: 'Anot', znDown: 'Zn kütlesi azalır', cuUp: 'Cu kütlesi artar',
    allo: 'Dördü de yalnızca karbon atomlarından oluşur', nacl: 'NaCl çözeltisi', soil: 'Toprak',
    ax3e: 'AX₃E üçgen piramit 107°', ratio: 'Hacim oranı H₂ : O₂ = 2 : 1', dissolve: 'çözünme', precip: 'çökelme',
  },
  en: {
    pure: 'Pure water', soln: 'Solution', heat: 'Heating', cool: 'Cooling', tC: 'Temperature (°C)', time: 'Time',
    solub: 'Solubility (g/100 g water)', unsat: 'unsaturated', supersat: 'supersaturated', enth: 'Enthalpy (kJ)', buf: 'Buffer region',
    cat: 'Cathode', an: 'Anode', znDown: 'Zn mass decreases', cuUp: 'Cu mass increases',
    allo: 'All four consist of carbon atoms only', nacl: 'NaCl solution', soil: 'Soil',
    ax3e: 'AX₃E trigonal pyramidal 107°', ratio: 'Volume ratio H₂ : O₂ = 2 : 1', dissolve: 'dissolving', precip: 'precipitating',
  },
  de: {
    pure: 'Reines Wasser', soln: 'Lösung', heat: 'Erhitzen', cool: 'Abkühlen', tC: 'Temperatur (°C)', time: 'Zeit',
    solub: 'Löslichkeit (g/100 g Wasser)', unsat: 'ungesättigt', supersat: 'übersättigt', enth: 'Enthalpie (kJ)', buf: 'Pufferbereich',
    cat: 'Kathode', an: 'Anode', znDown: 'Zn-Masse nimmt ab', cuUp: 'Cu-Masse nimmt zu',
    allo: 'Alle vier bestehen nur aus Kohlenstoffatomen', nacl: 'NaCl-Lösung', soil: 'Boden',
    ax3e: 'AX₃E trigonal-pyramidal 107°', ratio: 'Volumenverhältnis H₂ : O₂ = 2 : 1', dissolve: 'Lösen', precip: 'Fällung',
  },
  fr: {
    pure: 'Eau pure', soln: 'Solution', heat: 'Chauffage', cool: 'Refroidissement', tC: 'Température (°C)', time: 'Temps',
    solub: "Solubilité (g/100 g d'eau)", unsat: 'non saturée', supersat: 'sursaturée', enth: 'Enthalpie (kJ)', buf: 'Zone tampon',
    cat: 'Cathode', an: 'Anode', znDown: 'La masse de Zn diminue', cuUp: 'La masse de Cu augmente',
    allo: 'Tous les quatre ne contiennent que des atomes de carbone', nacl: 'Solution de NaCl', soil: 'Sol',
    ax3e: 'AX₃E pyramide trigonale 107°', ratio: 'Rapport des volumes H₂ : O₂ = 2 : 1', dissolve: 'dissolution', precip: 'précipitation',
  },
  ru: {
    pure: 'Чистая вода', soln: 'Раствор', heat: 'Нагревание', cool: 'Охлаждение', tC: 'Температура (°C)', time: 'Время',
    solub: 'Растворимость (г/100 г воды)', unsat: 'ненасыщенный', supersat: 'пересыщенный', enth: 'Энтальпия (кДж)', buf: 'Буферная область',
    cat: 'Катод', an: 'Анод', znDown: 'Масса Zn уменьшается', cuUp: 'Масса Cu увеличивается',
    allo: 'Все четыре состоят только из атомов углерода', nacl: 'Раствор NaCl', soil: 'Почва',
    ax3e: 'AX₃E тригональная пирамида 107°', ratio: 'Отношение объёмов H₂ : O₂ = 2 : 1', dissolve: 'растворение', precip: 'осаждение',
  },
  ar: {
    pure: 'ماء نقي', soln: 'محلول', heat: 'تسخين', cool: 'تبريد', tC: 'درجة الحرارة (°C)', time: 'الزمن',
    solub: 'الذائبية (g/100 g ماء)', unsat: 'غير مشبع', supersat: 'فوق مشبع', enth: 'الإنتالبي (kJ)', buf: 'منطقة المحلول المنظم',
    cat: 'المهبط', an: 'المصعد', znDown: 'تقل كتلة Zn', cuUp: 'تزداد كتلة Cu',
    allo: 'تتكون الأربعة من ذرات الكربون فقط', nacl: 'محلول NaCl', soil: 'التربة',
    ax3e: 'AX₃E هرم ثلاثي 107°', ratio: 'نسبة الحجوم H₂ : O₂ = 2 : 1', dissolve: 'ذوبان', precip: 'ترسيب',
  },
  zh: {
    pure: '纯水', soln: '溶液', heat: '加热', cool: '冷却', tC: '温度 (°C)', time: '时间',
    solub: '溶解度 (g/100 g 水)', unsat: '不饱和', supersat: '过饱和', enth: '焓 (kJ)', buf: '缓冲区',
    cat: '阴极', an: '阳极', znDown: 'Zn 质量减小', cuUp: 'Cu 质量增大',
    allo: '四者都只由碳原子构成', nacl: 'NaCl 溶液', soil: '土壤',
    ax3e: 'AX₃E 三角锥形 107°', ratio: '体积比 H₂ : O₂ = 2 : 1', dissolve: '溶解', precip: '沉淀',
  },
  ku: {
    pure: 'Ava saf', soln: 'Çareserî', heat: 'Germkirin', cool: 'Sarkirin', tC: 'Germahî (°C)', time: 'Dem',
    solub: 'Helbûnî (g/100 g av)', unsat: 'netêr', supersat: 'zêde têr', enth: 'Entalpî (kJ)', buf: 'Herêma tampon',
    cat: 'Katot', an: 'Anot', znDown: 'Girseya Zn kêm dibe', cuUp: 'Girseya Cu zêde dibe',
    allo: 'Her çar tenê ji atomên karbonê pêk tên', nacl: 'Çareseriya NaCl', soil: 'Ax',
    ax3e: 'AX₃E pîramîda sêgoşeyî 107°', ratio: 'Rêjeya qebareyan H₂ : O₂ = 2 : 1', dissolve: 'helîn', precip: 'nişîn',
  },
};

const figureWords = (lang: LanguageCode) => FIGURE_WORDS[lang] ?? FIGURE_WORDS.tr;

/**
 * Plain SVG text at a fixed size, for short marks (symbols, numbers, formulas, atom symbols).
 * On narrow stages it grows to the legible minimum like every other label.
 */
const Mark: React.FC<{ x: number; y: number; size?: number; anchor?: 'start' | 'middle' | 'end'; fill?: string; weight?: number | string; children: React.ReactNode }> = ({
  x,
  y,
  size = 13,
  anchor = 'middle',
  fill = K.text,
  weight = 600,
  children,
}) => {
  const ctx = useContext(FigureContext);
  const raw = React.Children.toArray(children).join('');
  const b = bidiText(raw, ctx.lang);
  const fs = ctx.min > size ? r1(ctx.min) : size;
  // Keep the visual centre of a grown mark where the smaller one sat.
  const dy = fs > size ? r1((fs - size) * 0.34) : 0;
  return (
    <text x={x} y={y + dy} fontSize={fs} fill={fill} fontWeight={weight} {...textDir(b.rtl, anchor)}>
      {b.text}
    </text>
  );
};

/** Smallest label size on screen, in CSS px, that the inline figure keeps on narrow stages. */
const MIN_LABEL_PX = 11;

/** Labels that were replaced by a numbered badge on a narrow stage, spelled out under the figure. */
const FigureLegend: React.FC<{ entries: LegendEntry[]; lang: LanguageCode }> = ({ entries, lang }) => {
  if (entries.length === 0) return null;
  const rtl = lang === 'ar';
  return (
    <ol className="diagram-legend" dir={rtl ? 'rtl' : 'ltr'}>
      {entries.map((e) => (
        <li key={e.key}>
          <span className="diagram-legend__n" style={{ background: e.color }}>
            {e.n}
          </span>
          <span className="diagram-legend__t">{bidiText(e.text, lang).text}</span>
        </li>
      ))}
    </ol>
  );
};

export interface ChemicalDiagramProps {
  spec: QuestionDiagramSpec;
  className?: string;
  allowZoom?: boolean;
  lang?: LanguageCode;
  initialZoomed?: boolean;
  /**
   * 'full' (default): title row with zoom in / 100% / zoom out / expand above the stage.
   * 'expand': stage only, with one small expand control on its corner (tapping the stage
   * also opens it); zooming happens in the expanded view. Used in the quiz.
   */
  controls?: 'full' | 'expand';
}

export const ChemicalDiagram: React.FC<ChemicalDiagramProps> = ({
  spec,
  className = '',
  allowZoom = true,
  lang = 'tr',
  initialZoomed = false,
  controls = 'full',
}) => {
  const compact = controls === 'expand';
  const [isZoomed, setIsZoomed] = useState(initialZoomed);
  const [zoomLevel, setZoomLevel] = useState<number>(1.0);
  const [panOffset, setPanOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const isDraggingRef = useRef(false);
  const dragStartRef = useRef({ x: 0, y: 0 });

  // Width of the inline drawing on screen. Below ~490 px the labels (11-13 viewBox units of
  // 540) would be smaller than 11 CSS px, so the figure context raises the minimum font size.
  const svgRef = useRef<SVGSVGElement>(null);
  const [stageWidth, setStageWidth] = useState(0);
  useEffect(() => {
    const el = svgRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver((entries) => {
      const wpx = Math.round(entries[0].contentRect.width);
      setStageWidth((prev) => (Math.abs(prev - wpx) >= 2 ? wpx : prev));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const minUnits = stageWidth > 0 && stageWidth < 536 ? Math.min(22, (MIN_LABEL_PX * 540) / stageWidth) : 0;
  const legend: LegendEntry[] = [];
  const inlineCtx: FigureCtx = { lang, min: minUnits, legend };
  const zoomCtx: FigureCtx = { lang, min: 0, legend: null };

  const zoomI18n = ZOOM_FIT_I18N[lang] || ZOOM_FIT_I18N.tr;
  const fsLabel = FULLSCREEN_I18N[lang] || FULLSCREEN_I18N.tr;

  const handleZoomIn = () => {
    setZoomLevel((z) => Math.min(2.5, Number((z + 0.25).toFixed(2))));
  };

  const handleZoomOut = () => {
    setZoomLevel((z) => {
      const next = Math.max(1.0, Number((z - 0.25).toFixed(2)));
      if (next === 1.0) setPanOffset({ x: 0, y: 0 });
      return next;
    });
  };

  const handleResetZoom = () => {
    setZoomLevel(1.0);
    setPanOffset({ x: 0, y: 0 });
  };

  const closeZoom = () => {
    setIsZoomed(false);
    // The compact quiz stage never zooms inline, so leave it at 100% again.
    if (compact) handleResetZoom();
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    if (zoomLevel <= 1.0) return;
    isDraggingRef.current = true;
    dragStartRef.current = { x: e.clientX - panOffset.x, y: e.clientY - panOffset.y };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDraggingRef.current || zoomLevel <= 1.0) return;
    const maxPanX = 270 * (zoomLevel - 1);
    const maxPanY = 150 * (zoomLevel - 1);
    const newX = Math.max(-maxPanX, Math.min(maxPanX, e.clientX - dragStartRef.current.x));
    const newY = Math.max(-maxPanY, Math.min(maxPanY, e.clientY - dragStartRef.current.y));
    setPanOffset({ x: newX, y: newY });
  };

  const handlePointerUp = () => {
    isDraggingRef.current = false;
  };

  const renderContent = () => {
    switch (spec.archetype) {
      case 'bohr-orbital-atom':
      case 'bohr-orbital-levels':
      case 'quantum-orbitals':
        return renderBohrOrbitalAtom(spec, lang);

      case 'periodic-table-trends':
      case 'periodic-trends-spiral':
        return renderPeriodicTrends(spec, lang);

      case 'gas-piston-manometer':
      case 'gas-law-piston-manometer':
        return renderGasPistonManometer(spec, lang);

      case 'phase-heating-curve':
      case 'heating-cooling-phase-diagram':
        return renderPhaseHeatingCurve(spec, lang);

      case 'potential-energy-reaction':
      case 'potential-energy-reaction-coordinate':
        return renderPotentialEnergyCurve(spec, lang);

      case 'titration-burette-curve':
      case 'titration-curve-burette':
        return renderTitrationBurette(spec, lang);

      case 'galvanic-daniell-cell':
        return renderDaniellCell(spec, lang);

      case 'electrolysis-hoffman-cell':
        return renderElectrolysisHoffman(spec, lang);

      case 'vsepr-molecular-geometry':
      case 'lewis-dot-bonding':
      case 'crystal-lattice':
      case 'polymer-micelle':
      case 'organic-functional-groups':
        return renderVseprGeometry(spec, lang);

      case 'equilibrium-le-chatelier':
      case 'equilibrium-le-chatelier-graph':
        return renderLeChatelierEquilibrium(spec, lang);

      case 'lab-glassware-setup':
      case 'solution-solvation-sphere':
      case 'stoichiometry-chamber':
      case 'distillation-column':
      case 'acid-base-metal':
      default:
        return renderLabGlassware(spec, lang);
    }
  };

  return (
    <div className={`chemical-diagram-container ${compact ? 'is-compact' : ''} ${className}`}>
      {!compact && (
      <div
        className="diagram-header"
      >
        <h4 className="diagram-title">{spec.title}</h4>
        {allowZoom && (
          <div className="diagram-zoom-toolbar">
            <button
              type="button"
              className="ky-icon-btn diagram-zoom-btn"
              data-glyph="+"
              onClick={handleZoomIn}
              aria-label={zoomI18n.zoomIn}
              title={zoomI18n.zoomIn}
            >
              <ZoomIn size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="ky-icon-btn diagram-zoom-btn"
              onClick={handleResetZoom}
              aria-label={zoomI18n.fitScreen}
              title={zoomI18n.fitScreen}
              data-role="level"
            >
              {Math.round(zoomLevel * 100)}%
            </button>
            <button
              type="button"
              className="ky-icon-btn diagram-zoom-btn"
              onClick={handleZoomOut}
              aria-label={zoomI18n.zoomOut}
              title={zoomI18n.zoomOut}
            >
              <ZoomOut size={18} aria-hidden="true" />
            </button>
            <button
              type="button"
              className="ky-icon-btn diagram-zoom-btn"
              onClick={() => setIsZoomed(true)}
              aria-label={fsLabel}
              title={fsLabel}
              data-glyph="🔍"
            >
              <Maximize2 size={18} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
      )}

      <div
        className="diagram-svg-wrapper ky-stage"
        dir="ltr"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        style={{
          overflow: 'hidden',
          position: 'relative',
          cursor: zoomLevel > 1.0 ? (isDraggingRef.current ? 'grabbing' : 'grab') : 'default',
          touchAction: zoomLevel > 1.0 ? 'none' : 'auto',
          borderRadius: '12px',
        }}
      >
        {compact && allowZoom && (
          <button
            type="button"
            className="diagram-expand-btn"
            onClick={(e) => {
              e.stopPropagation();
              setIsZoomed(true);
            }}
            aria-label={fsLabel}
            title={fsLabel}
          >
            <span className="diagram-expand-btn__face" aria-hidden="true">
              <Maximize2 size={16} />
            </span>
          </button>
        )}
        <div className="ky-floor" aria-hidden="true" />
        <svg
          ref={svgRef}
          viewBox="0 0 540 300"
          className="chemical-diagram-svg"
          onClick={compact && allowZoom ? () => setIsZoomed(true) : undefined}
          preserveAspectRatio="xMidYMid meet"
          role="img"
          aria-label={spec.title}
          style={{
            transform: `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px)`,
            transformOrigin: 'center center',
            transition: isDraggingRef.current ? 'none' : 'transform 0.15s ease-out',
            display: 'block',
            width: '100%',
            height: 'auto',
          }}
        >
          <style>{DIAGRAM_KEYFRAMES}</style>
          <DiagramDefs />
          <FigureContext.Provider value={inlineCtx}>{renderContent()}</FigureContext.Provider>
        </svg>
        <FigureLegend entries={legend} lang={lang} />
      </div>

      {spec.caption && !compact && <p className="diagram-caption">{spec.caption}</p>}

      {/* Zoom Modal Dialog */}
      {isZoomed && (
        <div className="ky-modal-backdrop diagram-zoom-overlay" onClick={closeZoom}>
          <div
            className="ky-sheet diagram-zoom-card"
            role="dialog"
            aria-modal="true"
            aria-label={spec.title}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="diagram-zoom-header">
              <h3>{spec.title}</h3>
              <div className="diagram-zoom-toolbar">
                <button
                  type="button"
                  className="ky-icon-btn diagram-zoom-btn"
                  data-glyph="+"
              onClick={handleZoomIn}
                  aria-label={zoomI18n.zoomIn}
                  title={zoomI18n.zoomIn}
                >
                  <ZoomIn size={18} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="ky-icon-btn diagram-zoom-btn"
                  onClick={handleResetZoom}
                  aria-label={zoomI18n.fitScreen}
                  title={zoomI18n.fitScreen}
                  data-role="level"
                >
                  {Math.round(zoomLevel * 100)}%
                </button>
                <button
                  type="button"
                  className="ky-icon-btn diagram-zoom-btn"
                  onClick={handleZoomOut}
                  aria-label={zoomI18n.zoomOut}
                  title={zoomI18n.zoomOut}
                >
                  <ZoomOut size={18} aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="ky-icon-btn diagram-close-btn"
                  onClick={closeZoom}
                  aria-label={CLOSE_MODAL_I18N[lang] || CLOSE_MODAL_I18N.tr}
                  title={CLOSE_MODAL_I18N[lang] || CLOSE_MODAL_I18N.tr}
                >
                  <X size={20} aria-hidden="true" />
                </button>
              </div>
            </div>
            <div
              className="diagram-zoom-body ky-stage"
              dir="ltr"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerCancel={handlePointerUp}
              style={{
                overflow: 'hidden',
                position: 'relative',
                cursor: zoomLevel > 1.0 ? (isDraggingRef.current ? 'grabbing' : 'grab') : 'default',
                touchAction: zoomLevel > 1.0 ? 'none' : 'auto',
              }}
            >
              <div className="ky-floor" aria-hidden="true" />
              <svg
                viewBox="0 0 540 300"
                className="chemical-diagram-svg zoom-svg"
                role="img"
                aria-label={spec.title}
                preserveAspectRatio="xMidYMid meet"
                style={{
                  transform: `scale(${zoomLevel}) translate(${panOffset.x / zoomLevel}px, ${panOffset.y / zoomLevel}px)`,
                  transformOrigin: 'center center',
                  transition: isDraggingRef.current ? 'none' : 'transform 0.15s ease-out',
                }}
              >
                <style>{DIAGRAM_KEYFRAMES}</style>
                <DiagramDefs />
                <FigureContext.Provider value={zoomCtx}>{renderContent()}</FigureContext.Provider>
              </svg>
            </div>
            {spec.caption && <p className="diagram-zoom-caption">{spec.caption}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

// ---------------------------------------------------------------------------
// 1. Bohr model: one electron falling from n = 3 to n = 2 and the photon it
//    emits. `s_orb` key: orbital shapes (u11); `cr` key: orbital box diagrams
//    of Cr and Cu (u11).
// ---------------------------------------------------------------------------
function renderBohrOrbitalAtom(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  if (lbl.s_orb) return renderOrbitalShapes(spec, lang);
  if (lbl.cr) return renderOrbitalBoxes(spec, lang);
  const L = diagramLabelResolver(spec.labels, lang);
  const cx = 150;
  const cy = 138;
  const shells: [number, string][] = [
    [38, lbl.n1 || 'n = 1 (K)'],
    [76, lbl.n2 || 'n = 2 (L)'],
    [114, lbl.n3 || 'n = 3 (M)'],
  ];
  return (
    <g>
      {shells.map(([r, name]) => (
        <g key={r}>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke={K.sec} strokeWidth="1.4" opacity="0.75" />
          <FitLabel x={cx} y={cy + r + 16} w={84} size={12} wrap={false} fill={K.sec}>
            {name}
          </FitLabel>
        </g>
      ))}

      {/* Nucleus */}
      <circle cx={cx} cy={cy} r="15" fill="url(#dg-lit-ruby)" filter="url(#dg-shadow)" />
      <Mark x={cx} y={cy + 5} size={15} fill="#ffffff" weight="bold">+</Mark>

      {/* The electron leaves n = 3 (dashed ghost) and lands on n = 2 */}
      <circle cx="248.7" cy="81" r="6.5" fill="none" stroke={K.amber} strokeWidth="1.8" strokeDasharray="3 2" />
      <Arrow x1={242.5} y1={84.5} x2={223} y2={95.8} color={K.amber} head={7} width={2} />
      <circle cx="215.8" cy="100" r="6.5" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-pulse" />

      {/* Emitted photon */}
      <path d="M 268 92 q 8 -12 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0 t 16 0" fill="none" stroke={K.amber} strokeWidth="2.5" />
      <polygon points="396,86 410,92 396,98" fill={K.amber} />
      <FitLabel x={402} y={124} w={256} size={13} weight="bold" valign="top" fill={K.amber}>
        {L('bohr_photon', 'photon')}
      </FitLabel>

      <Leader x1={296} y1={200} x2={163} y2={143} color={K.ruby} />
      <FitLabel x={302} y={204} w={230} size={13} anchor="start" weight="bold" fill={K.ruby}>
        {L('bohr_nucleus', 'nucleus')}
      </FitLabel>
    </g>
  );
}

/** One orbital lobe: a soft-edged ellipse rotated around the nucleus. */
const Lobe: React.FC<{ cx: number; cy: number; angle: number; dist: number; rx: number; ry: number; color: string }> = ({ cx, cy, angle, dist, rx, ry, color }) => {
  const a = (angle * Math.PI) / 180;
  const x = r1(cx + dist * Math.cos(a));
  const y = r1(cy + dist * Math.sin(a));
  return <ellipse cx={x} cy={y} rx={rx} ry={ry} transform={`rotate(${angle} ${x} ${y})`} fill={color} fillOpacity="0.55" stroke={color} strokeWidth="1.5" />;
};

/** u11: shapes of the s, p and d orbitals and the Pauli principle. */
function renderOrbitalShapes(spec: QuestionDiagramSpec, _lang: LanguageCode) {
  const lbl = spec.labels || {};
  const axes = (cx: number, cy: number, len: number) => (
    <g stroke={K.sec} strokeWidth="1" opacity="0.6">
      <line x1={cx - len} y1={cy} x2={cx + len} y2={cy} />
      <line x1={cx} y1={cy - len} x2={cx} y2={cy + len} />
    </g>
  );
  const box = (x: number, y: number, arrows: string, ok: boolean) => (
    <g>
      <rect x={x} y={y} width="44" height="38" rx="5" fill="rgba(255,255,255,0.05)" stroke={K.text} strokeWidth="2" />
      <Mark x={x + 22} y={y + 27} size={22} fill={ok ? K.green : K.ruby} weight="bold">{arrows}</Mark>
      <Mark x={x + 62} y={y + 26} size={20} fill={ok ? K.green : K.ruby} weight="bold">{ok ? '✓' : '✕'}</Mark>
    </g>
  );
  return (
    <g>
      <Card x={10} y={8} color={K.cyan} label={lbl.s_orb || ''}>
        {axes(137, 56, 44)}
        <circle cx="137" cy="56" r="30" fill="url(#dg-lit-teal)" opacity="0.85" />
      </Card>
      <Card x={276} y={8} color={K.amber} label={lbl.p_orb || ''}>
        {[
          [328, 0],
          [403, 90],
          [478, 45],
        ].map(([px, ang]) => (
          <g key={px}>
            {axes(px, 56, 34)}
            <Lobe cx={px} cy={56} angle={ang} dist={17} rx={16} ry={9} color={K.amber} />
            <Lobe cx={px} cy={56} angle={ang + 180} dist={17} rx={16} ry={9} color={K.cyan} />
          </g>
        ))}
      </Card>
      <Card x={10} y={154} color={K.green} label={lbl.d_orb || ''}>
        {axes(137, 200, 44)}
        {[45, 135, 225, 315].map((ang, i) => (
          <Lobe key={ang} cx={137} cy={200} angle={ang} dist={21} rx={18} ry={9} color={i % 2 === 0 ? K.green : K.cyan} />
        ))}
      </Card>
      <Card x={276} y={154} color={K.ruby} label={lbl.spin || ''}>
        {box(306, 176, '↑↓', true)}
        {box(412, 176, '↑↑', false)}
      </Card>
    </g>
  );
}

/** u11: orbital box diagrams — Cr is [Ar] 4s¹ 3d⁵ and Cu is [Ar] 4s¹ 3d¹⁰. */
function renderOrbitalBoxes(spec: QuestionDiagramSpec, _lang: LanguageCode) {
  const lbl = spec.labels || {};
  const row = (y: number, sym: string, s: string, d: string, color: string, label: string) => (
    <g>
      <Mark x={44} y={y + 30} size={18} fill={color} weight="bold">{sym}</Mark>
      <Mark x={104} y={y + 29} size={15} fill={K.sec}>[Ar]</Mark>
      <Mark x={157} y={y + 6} size={13} fill={K.sec}>4s</Mark>
      <rect x="140" y={y + 12} width="34" height="34" rx="4" fill="rgba(255,255,255,0.05)" stroke={K.text} strokeWidth="2" />
      <Mark x={157} y={y + 36} size={20} fill={color} weight="bold">{s}</Mark>
      <Mark x={293} y={y + 6} size={13} fill={K.sec}>3d</Mark>
      {Array.from({ length: 5 }, (_, i) => (
        <g key={i}>
          <rect x={208 + i * 34} y={y + 12} width="34" height="34" rx="4" fill="rgba(255,255,255,0.05)" stroke={K.text} strokeWidth="2" />
          <Mark x={225 + i * 34} y={y + 36} size={20} fill={color} weight="bold">{d}</Mark>
        </g>
      ))}
      <FitLabel x={270} y={y + 68} w={516} size={13} weight="bold" wrap={false} fill={color}>
        {label}
      </FitLabel>
    </g>
  );
  return (
    <g>
      {row(12, '₂₄Cr', '↑', '↑', K.cyan, lbl.cr || '')}
      {row(104, '₂₉Cu', '↑', '↑↓', K.amber, lbl.cu || '')}
      <FitLabel x={270} y={226} w={516} size={13} weight={600} fill={K.text}>
        {lbl.aufbau || ''}
      </FitLabel>
      <FitLabel x={270} y={268} w={516} size={13} weight={600} fill={K.sec}>
        {lbl.hund || ''}
      </FitLabel>
    </g>
  );
}

// ---------------------------------------------------------------------------
// 2. Periodic trends on the outline of the periodic table: ionisation energy
//    and electronegativity grow to the right and upwards, atomic radius and
//    metallic character to the left and downwards.
// ---------------------------------------------------------------------------
function renderPeriodicTrends(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const L = diagramLabelResolver(spec.labels, lang);
  const x0 = 108;
  const y0 = 58;
  const cw = 18;
  const ch = 20;
  const cells: React.ReactNode[] = [];
  for (let p = 0; p < 7; p++) {
    for (let g = 0; g < 18; g++) {
      const present = p === 0 ? g === 0 || g === 17 : p < 3 ? g < 2 || g > 11 : true;
      if (!present) continue;
      const fill = g < 2 ? 'var(--accent-cyan-subtle, rgba(45,217,195,0.18))' : g > 11 ? 'var(--accent-amber-subtle, rgba(246,183,60,0.18))' : 'rgba(255,255,255,0.06)';
      cells.push(<rect key={`${p}-${g}`} x={x0 + g * cw} y={y0 + p * ch} width={cw - 1.5} height={ch - 1.5} rx="2" fill={fill} stroke={K.line} strokeWidth="0.8" />);
    }
  }
  const row = (y: number, color: string, a: string, b: string, flip: boolean) => (
    <g>
      <Arrow x1={flip ? 40 : 16} y1={y - 5} x2={flip ? 16 : 40} y2={y - 5} color={color} head={7} width={2.4} />
      <Arrow x1={52} y1={flip ? y - 16 : y + 5} x2={52} y2={flip ? y + 5 : y - 16} color={color} head={7} width={2.4} />
      <FitLabel x={66} y={y} w={222} size={13} anchor="start" weight="bold" wrap={false} fill={color}>
        {a}
      </FitLabel>
      <FitLabel x={302} y={y} w={232} size={13} anchor="start" weight="bold" wrap={false} fill={color}>
        {b}
      </FitLabel>
    </g>
  );
  return (
    <g>
      {cells}
      <Mark x={x0 + 8} y={52} size={11} fill={K.sec}>1A</Mark>
      <Mark x={x0 + 17 * cw + 8} y={52} size={11} fill={K.sec}>8A</Mark>
      {/* Increase to the right and upwards */}
      <Arrow x1={136} y1={30} x2={406} y2={30} color={K.ruby} width={3} />
      <Arrow x1={448} y1={196} x2={448} y2={60} color={K.ruby} width={3} />
      {/* Increase to the left and downwards */}
      <Arrow x1={428} y1={212} x2={112} y2={212} color={K.cyan} width={3} />
      <Arrow x1={92} y1={60} x2={92} y2={196} color={K.cyan} width={3} />
      {row(246, K.ruby, L('per_ie', 'ie'), L('per_eneg', 'eneg'), false)}
      {row(276, K.cyan, L('per_radius', 'radius'), L('per_metallic', 'metallic'), true)}
    </g>
  );
}

// ---------------------------------------------------------------------------
// 3. Gas Piston & U-Tube Manometer Setup
// ---------------------------------------------------------------------------
function renderGasPistonManometer(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  if (lbl.mreact) return renderMassConservation(spec, lang);
  if (lbl.mol && lbl.vmol) return renderMoleMap(spec, lang);
  if (lbl.boyle) return renderGasLaws(spec, lang);
  if (lbl.p0 && lbl.hdiff) return renderManometers(spec, lang);
  if (lbl.vratio) return renderGrahamDiffusion(spec, lang);
  if (lbl.ptop) return renderDaltonPartial(spec, lang);
  const L = diagramLabelResolver(spec.labels, lang);
  return (
    <g>
      {/* Gas Cylinder Chamber */}
      <rect x="70" y="70" width="140" height="160" rx="4" fill="none" stroke="var(--text-primary, #ffffff)" strokeWidth="2.5" />

      {/* Movable Weighted Piston with Vertical Animation */}
      <g className="anim-float-y">
        <rect x="72" y="105" width="136" height="16" fill="var(--accent-amber, #f59e0b)" rx="2" />
        <rect x="133" y="45" width="14" height="60" fill="var(--accent-amber, #f59e0b)" />
        <circle cx="140" cy="38" r="8" fill="url(#dg-lit-ruby)" filter="url(#dg-shadow)" />
      </g>

      {/* Gas Particles inside chamber */}
      <circle cx="100" cy="150" r="4" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-bounce-1" />
      <circle cx="150" cy="170" r="4" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-bounce-2" />
      <circle cx="120" cy="200" r="4" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-bounce-3" />
      <circle cx="170" cy="140" r="4" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-bounce-1" />
      <circle cx="90" cy="180" r="4" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-bounce-2" />

      {/* Connecting Tube from Chamber to Manometer */}
      <path d="M 210 150 L 300 150 L 300 180" fill="none" stroke="var(--text-primary, #ffffff)" strokeWidth="4" />

      {/* U-Tube Manometer */}
      <path
        d="M 300 130 L 300 230 A 25 25 0 0 0 350 230 L 350 90"
        fill="none"
        stroke="var(--text-primary, #ffffff)"
        strokeWidth="6"
        strokeLinecap="round"
      />

      {/* Liquid Mercury (Hg) Level Difference */}
      <path
        d="M 300 190 L 300 230 A 25 25 0 0 0 350 230 L 350 140"
        fill="none"
        stroke="var(--accent-ruby, #f43f5e)"
        strokeWidth="4.5"
      />

      {/* Height Difference Δh markers */}
      <line x1="365" y1="140" x2="385" y2="140" stroke="var(--accent-amber, #f59e0b)" strokeWidth="1.5" />
      <line x1="365" y1="190" x2="385" y2="190" stroke="var(--accent-amber, #f59e0b)" strokeWidth="1.5" />
      <line x1="375" y1="140" x2="375" y2="190" stroke="var(--accent-amber, #f59e0b)" strokeWidth="1.5" strokeDasharray="2 2" />
      <FitLabel x={390} y={170} w={142} size={12} anchor="start" weight="bold" fill="var(--accent-amber, #f59e0b)">
        {lbl.hdiff || 'h (Hg)'}
      </FitLabel>

      {/* Labels */}
      <FitLabel x={140} y={248} w={210} size={12} valign="top" fill="var(--text-secondary, #94a3b8)">
        {L('gas_piston', 'piston')}
      </FitLabel>
      <FitLabel x={410} y={270} w={230} size={12} fill="var(--text-secondary, #94a3b8)">
        {L('gas_eq', 'eq')}
      </FitLabel>
    </g>
  );
}

// ---------------------------------------------------------------------------
// 4. Phase Diagram & Heating Curve (Solid, Melt, Liquid, Boil, Gas)
// ---------------------------------------------------------------------------
function renderPhaseHeatingCurve(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  if (lbl.dtk) return renderColligative(spec, lang);
  if (lbl.endo) return renderSolubilityCurves(spec, lang);
  if (lbl.solid && lbl.gas) return renderWaterHeatingCurve(spec, lang);
  if (lbl.pvap) return renderVapourPressure(spec, lang);
  const L = diagramLabelResolver(spec.labels, lang);
  return (
    <g>
      {/* Cartesian Axes */}
      <line x1="70" y1="240" x2="490" y2="240" stroke="var(--text-secondary, #94a3b8)" strokeWidth="2" />
      <line x1="70" y1="240" x2="70" y2="40" stroke="var(--text-secondary, #94a3b8)" strokeWidth="2" />
      <FitLabel x={490} y={258} w={300} anchor="end" wrap={false} fill="var(--text-muted, #64748b)">
        {L('phase_heat_axis', 'heat_axis', 'heat')}
      </FitLabel>
      <FitLabel x={75} y={30} w={300} anchor="start" wrap={false} fill="var(--text-muted, #64748b)">
        {L('phase_temp_axis', 'temp_axis', 'temp')}
      </FitLabel>

      {/* 5-Stage Stepped Heating Curve */}
      <path
        d="M 70 230 L 140 180 L 210 180 L 300 100 L 390 100 L 460 50"
        fill="none"
        stroke="var(--accent-cyan, #06b6d4)"
        strokeWidth="3.5"
      />

      {/* Temperature Reference Dashed Lines */}
      <line x1="70" y1="180" x2="210" y2="180" stroke="var(--border-subtle, #334155)" strokeDasharray="3 3" />
      <text x="60" y="184" textAnchor="start" fill="var(--text-secondary, #94a3b8)" fontSize="11">
        {L('phase_melt_point', 'melt_point', 'te')}
      </text>

      <line x1="70" y1="100" x2="390" y2="100" stroke="var(--border-subtle, #334155)" strokeDasharray="3 3" />
      <text x="60" y="104" textAnchor="start" fill="var(--text-secondary, #94a3b8)" fontSize="11">
        {L('phase_boil_point', 'boil_point', 'tk')}
      </text>

      {/* Animated Tracer Dot moving along the curve */}
      <circle cx="210" cy="180" r="6" fill="url(#dg-lit-ruby)" filter="url(#dg-shadow)" className="anim-pulse" />

      {/* Phase Labels */}
      <FitLabel x={105} y={215} w={150} anchor="start" weight="bold" valign="bottom" fill="var(--text-secondary, #94a3b8)">
        {`I: ${L('phase_solid', 'solid')}`}
      </FitLabel>
      <FitLabel x={175} y={170} w={125} anchor="start" weight="bold" valign="bottom" fill="var(--accent-amber, #f59e0b)">
        {`II: ${L('phase_melt', 'melt')}`}
      </FitLabel>
      <FitLabel x={255} y={145} w={130} anchor="start" weight="bold" valign="bottom" fill="var(--text-secondary, #94a3b8)">
        {`III: ${L('phase_liquid', 'liquid')}`}
      </FitLabel>
      <FitLabel x={345} y={90} w={110} anchor="start" weight="bold" valign="bottom" fill="var(--accent-ruby, #f43f5e)">
        {`IV: ${L('phase_boil', 'boil')}`}
      </FitLabel>
      <FitLabel x={430} y={65} w={105} anchor="start" weight="bold" valign="bottom" fill="var(--accent-cyan, #06b6d4)">
        {`V: ${L('phase_gas', 'gas')}`}
      </FitLabel>

      {/* Bottom Summary Pill */}
      <FitLabel x={270} y={282} w={500} size={12} weight={600} valign="bottom" fill="var(--text-primary, #ffffff)">
        {L('phase_summary', 'summary', 'heat_summary')}
      </FitLabel>
    </g>
  );
}

// ---------------------------------------------------------------------------
// 5. Potential Energy vs Reaction Coordinate Curve
//    Variants by label keys: `eai` = one path with Eai / Eag arrows (u16),
//    `uncat` = uncatalysed + catalysed paths with both Ea (u17), `hess` = Hess
//    enthalpy levels (u16), `slow` = two-step mechanism profile (u17).
// ---------------------------------------------------------------------------
function renderPotentialEnergyCurve(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  if (lbl.hess) return renderHessLevels(spec, lang);
  if (lbl.slow) return renderMechanismProfile(spec, lang);
  if (lbl.limit) return renderLimitingReagent(spec, lang);
  if (lbl.ppt) return renderNetIonic(spec, lang);
  const L = diagramLabelResolver(spec.labels, lang);
  const single = !!lbl.eai; // one path, forward and reverse activation energies
  const compare = !!lbl.uncat; // catalysed vs uncatalysed
  const showCat = !single;
  return (
    <g>
      <Axes x0={70} y0={240} x1={492} y1={38} />
      <FitLabel x={490} y={258} w={300} size={13} anchor="end" wrap={false} fill={K.mut}>
        {L('pe_coord', 'coord', 'rxn_coord')}
      </FitLabel>
      <FitLabel x={78} y={32} w={90} size={13} anchor="start" wrap={false} fill={K.mut}>
        {L('pe_pe', 'pe')}
      </FitLabel>

      {/* Reactant and product levels (thin guides the arrows are measured from) */}
      <line x1="70" y1="170" x2="468" y2="170" stroke={K.sec} strokeWidth="1" strokeDasharray="3 4" opacity="0.7" />
      <line x1={single ? 292 : 430} y1="210" x2="468" y2="210" stroke={K.sec} strokeWidth="1" strokeDasharray="3 4" opacity="0.7" />

      {/* Uncatalysed path */}
      <path d="M 70 170 C 140 170, 200 60, 270 60 C 340 60, 370 210, 430 210 L 452 210" fill="none" stroke={K.ruby} strokeWidth="3.5" />

      {/* Catalysed path: lower barrier, same start and end levels (same ΔH) */}
      {showCat && (
        <path d="M 70 170 C 140 170, 200 105, 270 105 C 340 105, 370 210, 430 210" fill="none" stroke={K.cyan} strokeWidth="3" strokeDasharray="6 4" />
      )}

      <FitLabel x={76} y={188} w={150} size={13} anchor="start" weight="bold" valign="top" fill={K.cyan}>
        {L('pe_reactants', 'reactants', 'girenler')}
      </FitLabel>
      <FitLabel x={452} y={230} w={170} size={13} anchor="end" weight="bold" wrap={false} fill={K.green}>
        {L('pe_products', 'products', 'urunler')}
      </FitLabel>

      {/* ΔH: from the reactant level down to the product level (exothermic) */}
      <Arrow x1={462} y1={171} x2={462} y2={209} color={K.amber} width={2.5} />
      <FitLabel x={470} y={194} w={66} size={13} anchor="start" weight="bold" fill={K.amber}>
        {lbl.dh_symbol || lbl.dh_const || 'ΔH < 0'}
      </FitLabel>

      {single && (
        <g>
          <Arrow x1={248} y1={169} x2={248} y2={64} color={K.cyan} />
          <FitLabel x={242} y={126} w={66} size={13} anchor="end" weight="bold" fill={K.cyan}>
            {lbl.eai}
          </FitLabel>
          <Arrow x1={292} y1={209} x2={292} y2={64} color={K.green} />
          <FitLabel x={299} y={152} w={58} size={13} anchor="start" weight="bold" fill={K.green}>
            {lbl.eag || 'Eag'}
          </FitLabel>
        </g>
      )}

      {compare && (
        <g>
          <Arrow x1={262} y1={169} x2={262} y2={109} color={K.cyan} />
          <Mark x={256} y={148} anchor="end" fill={K.cyan} weight="bold">Ea</Mark>
          <Arrow x1={278} y1={169} x2={278} y2={64} color={K.ruby} />
          <Mark x={285} y={92} anchor="start" fill={K.ruby} weight="bold">Ea</Mark>
          {/* Legend */}
          <line x1="372" y1="30" x2="394" y2="30" stroke={K.ruby} strokeWidth="3.5" />
          <FitLabel x={400} y={34} w={136} size={13} anchor="start" weight="bold" wrap={false} fill={K.ruby}>
            {lbl.uncat}
          </FitLabel>
          <line x1="372" y1="50" x2="394" y2="50" stroke={K.cyan} strokeWidth="3" strokeDasharray="6 4" />
          <FitLabel x={400} y={54} w={136} size={13} anchor="start" weight="bold" wrap={false} fill={K.cyan}>
            {lbl.cat || ''}
          </FitLabel>
        </g>
      )}

      {/* Activated complex at the top of the barrier */}
      <circle cx="270" cy="60" r="5" fill="url(#dg-lit-ruby)" filter="url(#dg-shadow)" className="anim-pulse" />
      <FitLabel x={270} y={48} w={compare ? 150 : 200} size={13} weight="bold" valign="bottom" fill={K.text}>
        {L('pe_ak', 'ak')}
      </FitLabel>

      <FitLabel x={270} y={284} w={510} size={14} weight={600} valign="bottom" fill={K.text}>
        {lbl.k_inc || lbl.dh || L('pe_summary', 'cat')}
      </FitLabel>
    </g>
  );
}

/** Hess's law as an enthalpy-level diagram: C + O2 -> CO2 directly, or through CO. */
function renderHessLevels(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  const w = figureWords(lang);
  const top = 78;
  const mid = 122; // −110.5 kJ
  const bot = 222; // −393.5 kJ
  return (
    <g>
      <Arrow x1={44} y1={246} x2={44} y2={40} color={K.sec} />
      <FitLabel x={52} y={36} w={150} size={13} anchor="start" wrap={false} fill={K.mut}>
        {w.enth}
      </FitLabel>

      <line x1="90" y1={top} x2="470" y2={top} stroke={K.text} strokeWidth="3" />
      <Mark x={96} y={top - 9} size={15} anchor="start" weight="bold">C + O₂</Mark>
      <FitLabel x={470} y={top - 9} w={250} size={13} anchor="end" wrap={false} fill={K.amber} weight="bold">
        {lbl.std || ''}
      </FitLabel>

      <line x1="270" y1={mid} x2="470" y2={mid} stroke={K.text} strokeWidth="3" />
      <Mark x={276} y={mid + 19} size={14} anchor="start" weight="bold">CO + ½O₂</Mark>

      <line x1="90" y1={bot} x2="470" y2={bot} stroke={K.text} strokeWidth="3" />
      <Mark x={96} y={bot + 19} size={15} anchor="start" weight="bold">CO₂</Mark>

      {/* Direct path */}
      <Arrow x1={150} y1={top + 3} x2={150} y2={bot - 3} color={K.cyan} width={3} />
      <Mark x={159} y={158} anchor="start" fill={K.cyan} weight="bold">{dec(lang, 'ΔH = −393.5 kJ')}</Mark>

      {/* Two-step path */}
      <Arrow x1={400} y1={top + 3} x2={400} y2={mid - 3} color={K.ruby} width={3} />
      <Mark x={392} y={105} anchor="end" fill={K.ruby} weight="bold">{dec(lang, 'ΔH₁ = −110.5 kJ')}</Mark>
      <Arrow x1={400} y1={mid + 3} x2={400} y2={bot - 3} color={K.green} width={3} />
      <Mark x={392} y={184} anchor="end" fill={K.green} weight="bold">{dec(lang, 'ΔH₂ = −283.0 kJ')}</Mark>

      <FitLabel x={270} y={266} w={510} size={14} weight="bold" wrap={false} fill={K.text}>
        {lbl.hess}
      </FitLabel>
      <FitLabel x={270} y={288} w={510} size={13} wrap={false} fill={K.sec}>
        {[lbl.rev, lbl.mult].filter(Boolean).join('  ·  ')}
      </FitLabel>
    </g>
  );
}

/** Two-step mechanism: the step with the higher barrier is the slow, rate-determining one. */
function renderMechanismProfile(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  const L = diagramLabelResolver(spec.labels, lang);
  return (
    <g>
      <Axes x0={70} y0={240} x1={492} y1={38} />
      <FitLabel x={490} y={258} w={300} size={13} anchor="end" wrap={false} fill={K.mut}>
        {L('pe_coord', 'coord', 'rxn_coord')}
      </FitLabel>
      <FitLabel x={78} y={32} w={90} size={13} anchor="start" wrap={false} fill={K.mut}>
        {L('pe_pe', 'pe')}
      </FitLabel>

      <line x1="70" y1="175" x2="196" y2="175" stroke={K.sec} strokeWidth="1" strokeDasharray="3 4" opacity="0.7" />
      <line x1="270" y1="140" x2="356" y2="140" stroke={K.sec} strokeWidth="1" strokeDasharray="3 4" opacity="0.7" />

      <path
        d="M 70 175 C 110 175, 140 62, 185 62 C 230 62, 235 140, 270 140 C 305 140, 310 102, 345 102 C 385 102, 400 215, 440 215 L 470 215"
        fill="none"
        stroke={K.ruby}
        strokeWidth="3.5"
      />

      {/* Step 1: high barrier (slow) */}
      <Arrow x1={185} y1={174} x2={185} y2={67} color={K.amber} />
      <Mark x={178} y={128} anchor="end" fill={K.amber} weight="bold">Ea₁</Mark>
      <FitLabel x={185} y={50} w={200} size={13} weight="bold" valign="bottom" fill={K.amber}>
        {lbl.slow}
      </FitLabel>

      {/* Step 2: low barrier (fast) */}
      <Arrow x1={345} y1={139} x2={345} y2={107} color={K.cyan} />
      <Mark x={352} y={136} size={12} anchor="start" fill={K.cyan} weight="bold">Ea₂</Mark>
      <FitLabel x={372} y={90} w={160} size={13} weight="bold" valign="bottom" fill={K.cyan}>
        {lbl.fast || ''}
      </FitLabel>

      {/* Intermediate in the valley between the two barriers */}
      <circle cx="270" cy="140" r="4.5" fill="url(#dg-lit-gold)" filter="url(#dg-shadow)" />
      <FitLabel x={270} y={160} w={130} size={13} weight="bold" valign="top" fill={K.text}>
        {lbl.intermediate || ''}
      </FitLabel>

      <FitLabel x={76} y={193} w={110} size={13} anchor="start" weight="bold" valign="top" fill={K.sec}>
        {L('pe_reactants', 'reactants')}
      </FitLabel>
      <FitLabel x={472} y={234} w={150} size={13} anchor="end" weight="bold" wrap={false} fill={K.green}>
        {L('pe_products', 'products')}
      </FitLabel>

      <FitLabel x={270} y={284} w={510} size={14} weight={600} valign="bottom" fill={K.text}>
        {lbl.rate_eq || ''}
      </FitLabel>
    </g>
  );
}

// ---------------------------------------------------------------------------
// 6. Acid-Base Titration Burette & pH Curve
//    Default: strong acid titrated with strong base (equivalence at pH 7).
//    `henderson` key: weak acid titrated with strong base (buffer region,
//    pH = pKa at half-equivalence, equivalence above pH 7).
// ---------------------------------------------------------------------------
function renderTitrationBurette(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  if (lbl.hplus) return renderPhScale(spec, lang);
  if (lbl.cu_conc) return renderMetalAcidGases(spec, lang);
  const L = diagramLabelResolver(spec.labels, lang);
  const w = figureWords(lang);
  const weak = !!lbl.henderson;
  const numbered = !!lbl.burette; // 100 mL 0.1 M HCl with 0.1 M NaOH: pH 1 → 7 at 100 mL → 13
  const pH = (v: number) => r1(240 - (v * 200) / 14);
  const eqY = weak ? pH(8.7) : pH(7);
  const curve = weak
    ? 'M 250 199 C 256 190, 268 184, 280 180 C 300 174, 330 168, 352 160 C 364 154, 368 140, 370 115.7 C 371 96, 373 84, 380 78 C 396 66, 440 62, 480 61'
    : 'M 250 226 C 300 224, 345 216, 362 200 C 368 194, 369 180, 370 140 C 371 100, 372 86, 378 80 C 395 66, 440 62, 480 61';
  return (
    <g>
      {/* Left: graduated burette with the titrant */}
      <rect x="110" y="30" width="22" height="130" fill="rgba(45,217,195,0.14)" stroke={K.text} strokeWidth="2" />
      <line x1="110" y1="60" x2="120" y2="60" stroke={K.sec} />
      <line x1="110" y1="90" x2="125" y2="90" stroke={K.sec} />
      <line x1="110" y1="120" x2="120" y2="120" stroke={K.sec} />
      <rect x="116" y="160" width="10" height="15" fill={K.amber} />
      <line x1="105" y1="167" x2="137" y2="167" stroke={K.amber} strokeWidth="3" />
      {lbl.burette && (
        <FitLabel x={142} y={70} w={92} size={13} anchor="start" weight="bold" fill={K.cyan}>
          {lbl.burette}
        </FitLabel>
      )}

      <circle cx="121" cy="188" r="3.5" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-drip-1" />
      <circle cx="121" cy="202" r="3.5" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-drip-2" />

      {/* Erlenmeyer flask with the solution being titrated */}
      <path d="M 112 195 L 90 245 A 8 8 0 0 0 98 255 L 144 255 A 8 8 0 0 0 152 245 L 130 195 Z" fill="rgba(255,107,122,0.16)" stroke={K.text} strokeWidth="2" />
      <FitLabel x={160} y={230} w={78} size={13} anchor="start" weight="bold" fill={K.ruby}>
        {L('tit_solution', 'solution', 'flask')}
      </FitLabel>

      {/* Right: pH against added volume */}
      <Axes x0={250} y0={240} x1={494} y1={36} />
      <FitLabel x={492} y={258} w={112} size={13} anchor="end" wrap={false} fill={K.mut}>
        {L('tit_base_vol', 'base_vol', 'volume')}
      </FitLabel>
      <Mark x={258} y={34} anchor="start" fill={K.mut} weight={500}>pH</Mark>

      {/* pH 7 guide */}
      <line x1="246" y1={pH(7)} x2="370" y2={pH(7)} stroke={K.sec} strokeWidth="1" strokeDasharray="3 4" opacity="0.8" />
      <Mark x={242} y={pH(7) + 5} anchor="end" fill={K.amber} weight="bold">7</Mark>
      {numbered && !weak && (
        <g>
          <line x1="246" y1={pH(1)} x2="254" y2={pH(1)} stroke={K.sec} strokeWidth="1.5" />
          <Mark x={242} y={pH(1) + 5} anchor="end" fill={K.sec}>1</Mark>
          <line x1="246" y1={pH(13)} x2="254" y2={pH(13)} stroke={K.sec} strokeWidth="1.5" />
          <Mark x={242} y={pH(13) + 5} anchor="end" fill={K.sec}>13</Mark>
        </g>
      )}

      {weak && (
        <g>
          {/* Buffer region around half-equivalence */}
          <rect x="272" y="152" width="78" height="38" rx="6" fill="rgba(246,183,60,0.14)" stroke={K.amber} strokeWidth="1" strokeDasharray="3 3" />
          <FitLabel x={311} y={98} w={108} size={13} weight="bold" valign="bottom" fill={K.amber}>
            {w.buf}
          </FitLabel>
          <line x1="310" y1="236" x2="310" y2="244" stroke={K.sec} strokeWidth="1.5" />
          <circle cx="310" cy="172" r="4.5" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" />
          <Mark x={311} y={118} fill={K.cyan} weight="bold">pH = pKa</Mark>
          <line x1="311" y1="124" x2="310" y2="166" stroke={K.cyan} strokeWidth="1.2" strokeDasharray="2 3" />
          <Mark x={310} y={254} size={12} fill={K.sec}>V/2</Mark>
          <Mark x={370} y={254} size={12} fill={K.sec}>V</Mark>
          {/* The weak acid starts well above pH 1 */}
          <FitLabel x={258} y={226} w={108} size={12} anchor="start" weight="bold" wrap={false} fill={K.sec}>
            {lbl.ka_eq || ''}
          </FitLabel>
        </g>
      )}

      <path d={curve} fill="none" stroke={K.ruby} strokeWidth="3.5" />

      {/* Equivalence point */}
      <line x1="370" y1="240" x2="370" y2={eqY} stroke={K.sec} strokeWidth="1" strokeDasharray="3 4" opacity="0.8" />
      {numbered && !weak && <Mark x={370} y={254} size={12} fill={K.sec}>100</Mark>}
      <circle cx="370" cy={eqY} r="6" fill="url(#dg-lit-gold)" filter="url(#dg-shadow)" className="anim-pulse" />
      <FitLabel x={382} y={weak ? 158 : eqY + 20} w={152} size={13} anchor="start" weight="bold" valign="top" fill={K.amber}>
        {weak ? lbl.salt_hydro || L('tit_eqpt') : L('tit_eqpt', 'eqpt')}
      </FitLabel>

      <FitLabel x={270} y={286} w={516} size={13} weight={600} wrap={false} fill={K.text}>
        {weak ? lbl.henderson : L('tit_summary')}
      </FitLabel>
    </g>
  );
}

// ---------------------------------------------------------------------------
// 7. Galvanic cell: Zn | Zn²⁺ || Cu²⁺ | Cu (Daniell). With the `conc_anode`
//    key the same frame shows a Cu concentration cell (same metal, 0.01 M / 1 M).
// ---------------------------------------------------------------------------
function renderDaniellCell(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  const L = diagramLabelResolver(spec.labels, lang);
  const w = figureWords(lang);
  const conc = !!lbl.conc_anode;
  const copper = 'var(--accent-amber, #f97316)';
  const zinc = 'var(--border-strong, #94a3b8)';
  return (
    <g>
      {/* Left half-cell: anode */}
      <rect x="60" y="118" width="140" height="104" rx="6" fill={conc ? 'rgba(96,165,250,0.10)' : 'rgba(226,232,240,0.10)'} stroke={K.sec} strokeWidth="2" />
      <rect x="100" y="84" width="22" height="118" fill={conc ? copper : zinc} stroke={conc ? '#c2410c' : '#475569'} strokeWidth="2" />
      <Mark x={111} y={150} size={12} fill="#0b1220" weight="bold">{conc ? 'Cu' : 'Zn'}</Mark>
      <Mark x={130} y={216} size={12} fill={K.sec}>{conc ? dec(lang, '0.01 M Cu²⁺') : lbl.anode_sol || '1 M ZnSO₄'}</Mark>

      {/* Right half-cell: cathode */}
      <rect x="340" y="118" width="140" height="104" rx="6" fill={conc ? 'rgba(96,165,250,0.34)' : 'rgba(96,165,250,0.26)'} stroke={K.sec} strokeWidth="2" />
      <rect x="418" y="84" width="22" height="118" fill={copper} stroke="#c2410c" strokeWidth="2" />
      <Mark x={429} y={150} size={12} fill="#0b1220" weight="bold">Cu</Mark>
      <Mark x={392} y={216} size={12} fill={K.sec}>{conc ? '1 M Cu²⁺' : lbl.cathode_sol || '1 M CuSO₄'}</Mark>

      {/* Salt bridge and the ions that leave it */}
      <path d="M 170 190 L 170 108 A 22 22 0 0 1 192 86 L 348 86 A 22 22 0 0 1 370 108 L 370 190" fill="none" stroke={K.amber} strokeWidth="17" strokeLinecap="round" />
      <FitLabel x={270} y={91} w={150} size={12} weight="bold" wrap={false} fill="#1a1204">
        {L('dan_bridge', 'bridge').replace('KNO3', 'KNO₃')}
      </FitLabel>
      <Mark x={228} y={116} size={12} fill={K.amber}>← NO₃⁻</Mark>
      <Mark x={312} y={116} size={12} fill={K.amber}>K⁺ →</Mark>

      {/* External circuit with voltmeter; electrons go from anode to cathode */}
      <path d="M 111 84 L 111 34 L 250 34" fill="none" stroke={K.text} strokeWidth="2.5" />
      <path d="M 290 34 L 429 34 L 429 84" fill="none" stroke={K.text} strokeWidth="2.5" />
      <circle cx="270" cy="34" r="20" fill="var(--bg-surface-elevated, #161e2e)" stroke={K.green} strokeWidth="2.5" />
      <Mark x={270} y={39} size={conc ? 15 : 12} fill={K.green} weight="bold">{conc ? 'V' : dec(lang, '1.10 V')}</Mark>
      <Arrow x1={150} y1={20} x2={212} y2={20} color={K.cyan} />
      <Mark x={181} y={15} size={12} fill={K.cyan} weight="bold">e⁻</Mark>
      <Arrow x1={328} y1={20} x2={390} y2={20} color={K.cyan} />
      <Mark x={359} y={15} size={12} fill={K.cyan} weight="bold">e⁻</Mark>
      <circle cx="125" cy="34" r="4" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-flow-1" />
      <circle cx="125" cy="34" r="4" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-flow-2" />
      <circle cx="305" cy="34" r="4" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-flow-3" />
      <circle cx="305" cy="34" r="4" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className="anim-flow-4" />

      {/* Electrode polarity in a galvanic cell: anode −, cathode + */}
      <Mark x={90} y={74} size={17} fill={K.cyan} weight="bold">−</Mark>
      <Mark x={450} y={76} size={17} fill={K.ruby} weight="bold">+</Mark>

      <FitLabel x={135} y={242} w={258} size={13} weight="bold" wrap={false} fill={K.cyan}>
        {conc ? lbl.conc_anode : L('dan_anode', 'anode_label', 'anode')}
      </FitLabel>
      <FitLabel x={405} y={242} w={258} size={13} weight="bold" wrap={false} fill={K.ruby}>
        {conc ? lbl.conc_cath || '' : L('dan_cathode', 'cathode_label', 'cathode')}
      </FitLabel>
      <FitLabel x={135} y={259} w={258} size={12} wrap={false} fill={K.sec}>
        {conc ? 'Cu → Cu²⁺ + 2e⁻' : w.znDown}
      </FitLabel>
      <FitLabel x={405} y={259} w={258} size={12} wrap={false} fill={K.sec}>
        {conc ? 'Cu²⁺ + 2e⁻ → Cu' : w.cuUp}
      </FitLabel>

      <FitLabel x={270} y={279} w={516} size={13} weight={600} wrap={false} fill={K.text}>
        {conc ? lbl.nernst || '' : L('dan_summary', 'anode_note', 'volt')}
      </FitLabel>
      {conc && (
        <FitLabel x={270} y={296} w={516} size={12} wrap={false} fill={K.sec}>
          {lbl.stop || ''}
        </FitLabel>
      )}
    </g>
  );
}

// ---------------------------------------------------------------------------
// 8. Electrolysis of water in a Hofmann voltameter (2 volumes H2 : 1 volume O2).
//    With the `faraday_law` key: electroplating cell + sacrificial anode.
// ---------------------------------------------------------------------------
function renderElectrolysisHoffman(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  if (lbl.faraday_law) return renderPlatingAndSacrificial(spec, lang);
  const w = figureWords(lang);
  return (
    <g>
      {/* Three connected tubes: cathode arm, reservoir, anode arm */}
      <rect x="150" y="34" width="36" height="160" rx="4" fill="rgba(45,217,195,0.10)" stroke={K.text} strokeWidth="2" />
      <rect x="250" y="16" width="40" height="178" rx="4" fill="rgba(255,255,255,0.05)" stroke={K.text} strokeWidth="2" />
      <rect x="354" y="34" width="36" height="160" rx="4" fill="rgba(255,107,122,0.10)" stroke={K.text} strokeWidth="2" />
      <rect x="150" y="176" width="240" height="20" fill="rgba(45,217,195,0.10)" stroke={K.text} strokeWidth="2" />

      {/* Collected gas: H2 column is twice the O2 column */}
      <rect x="152" y="36" width="32" height="80" fill="rgba(45,217,195,0.45)" />
      <rect x="356" y="36" width="32" height="40" fill="rgba(255,107,122,0.45)" />
      <Mark x={168} y={80} size={14} fill={K.text} weight="bold">H₂</Mark>
      <Mark x={372} y={62} size={14} fill={K.text} weight="bold">O₂</Mark>
      {/* Volume marks */}
      <line x1="190" y1="36" x2="190" y2="116" stroke={K.cyan} strokeWidth="2" />
      <line x1="186" y1="36" x2="194" y2="36" stroke={K.cyan} strokeWidth="2" />
      <line x1="186" y1="116" x2="194" y2="116" stroke={K.cyan} strokeWidth="2" />
      <Mark x={200} y={81} size={14} anchor="start" fill={K.cyan} weight="bold">2</Mark>
      <line x1="350" y1="36" x2="350" y2="76" stroke={K.ruby} strokeWidth="2" />
      <line x1="346" y1="36" x2="354" y2="36" stroke={K.ruby} strokeWidth="2" />
      <line x1="346" y1="76" x2="354" y2="76" stroke={K.ruby} strokeWidth="2" />
      <Mark x={340} y={61} size={14} anchor="end" fill={K.ruby} weight="bold">1</Mark>

      {/* Platinum electrodes */}
      <rect x="162" y="150" width="12" height="40" fill="#94a3b8" stroke="#475569" />
      <rect x="366" y="150" width="12" height="40" fill="#94a3b8" stroke="#475569" />

      {/* Bubbles */}
      <circle cx="165" cy="150" r="3" fill="url(#dg-lit-teal)" className="anim-rise-1" />
      <circle cx="172" cy="140" r="3.5" fill="url(#dg-lit-teal)" className="anim-rise-2" />
      <circle cx="168" cy="132" r="3" fill="url(#dg-lit-teal)" className="anim-rise-3" />
      <circle cx="170" cy="146" r="3" fill="url(#dg-lit-teal)" className="anim-rise-3" />
      <circle cx="372" cy="146" r="3" fill="url(#dg-lit-ruby)" className="anim-rise-2" />
      <circle cx="369" cy="134" r="3.5" fill="url(#dg-lit-ruby)" className="anim-rise-1" />

      {/* DC source: − pole to the cathode, + pole to the anode */}
      <path d="M 168 190 L 168 226 L 262 226" fill="none" stroke={K.text} strokeWidth="2.5" />
      <path d="M 278 226 L 372 226 L 372 190" fill="none" stroke={K.text} strokeWidth="2.5" />
      <line x1="262" y1="218" x2="262" y2="234" stroke={K.text} strokeWidth="5" />
      <line x1="278" y1="210" x2="278" y2="242" stroke={K.text} strokeWidth="2.5" />
      <Mark x={252} y={216} size={15} fill={K.cyan} weight="bold">−</Mark>
      <Mark x={290} y={217} size={15} fill={K.ruby} weight="bold">+</Mark>
      <Arrow x1={240} y1={238} x2={196} y2={238} color={K.cyan} />
      <Mark x={218} y={252} size={12} fill={K.cyan} weight="bold">e⁻</Mark>
      <FitLabel x={300} y={248} w={236} size={12} anchor="start" wrap={false} fill={K.sec}>
        {lbl.dc || ''}
      </FitLabel>

      {/* Electrode names and half-reactions beside each arm */}
      <FitLabel x={140} y={56} w={134} size={14} anchor="end" weight="bold" wrap={false} fill={K.cyan}>
        {`${w.cat} (−)`}
      </FitLabel>
      <FitLabel x={140} y={150} w={134} size={12} anchor="end" weight={600} fill={K.cyan}>
        {lbl.cathode_h2 || '4H⁺ + 4e⁻ → 2H₂'}
      </FitLabel>
      <FitLabel x={400} y={56} w={134} size={14} anchor="start" weight="bold" wrap={false} fill={K.ruby}>
        {`${w.an} (+)`}
      </FitLabel>
      <FitLabel x={400} y={150} w={134} size={12} anchor="start" weight={600} fill={K.ruby}>
        {lbl.anode_o2 || '2H₂O → O₂ + 4H⁺ + 4e⁻'}
      </FitLabel>

      <FitLabel x={270} y={276} w={516} size={14} weight="bold" wrap={false} fill={K.text}>
        {w.ratio}
      </FitLabel>
      <FitLabel x={270} y={294} w={516} size={12} wrap={false} fill={K.sec}>
        {lbl.faraday || '2H₂O → 2H₂ + O₂'}
      </FitLabel>
    </g>
  );
}

/** Left: electroplating (Faraday's law). Right: a sacrificial Mg anode protecting an iron pipe. */
function renderPlatingAndSacrificial(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  const w = figureWords(lang);
  return (
    <g>
      {/* ---- Electroplating cell ---- */}
      <FitLabel x={140} y={22} w={250} size={14} weight="bold" wrap={false} fill={K.text}>
        {lbl.electroplate || ''}
      </FitLabel>
      <rect x="50" y="104" width="180" height="112" rx="6" fill="rgba(96,165,250,0.14)" stroke={K.sec} strokeWidth="2" />
      {/* Ag anode (dissolves) */}
      <rect x="82" y="78" width="16" height="118" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
      <Mark x={90} y={140} size={11} fill="#0b1220" weight="bold">Ag</Mark>
      {/* Object at the cathode (gets coated) */}
      <path d="M 176 78 L 190 78 L 190 150 Q 204 168 190 190 L 176 190 Q 162 168 176 150 Z" fill="#b45309" stroke="#e2e8f0" strokeWidth="2.5" />
      {/* Battery: + to the anode, − to the cathode */}
      <path d="M 90 78 L 90 50 L 132 50" fill="none" stroke={K.text} strokeWidth="2.5" />
      <path d="M 148 50 L 183 50 L 183 78" fill="none" stroke={K.text} strokeWidth="2.5" />
      <line x1="132" y1="36" x2="132" y2="64" stroke={K.text} strokeWidth="2.5" />
      <line x1="148" y1="42" x2="148" y2="58" stroke={K.text} strokeWidth="5" />
      <Mark x={120} y={44} size={15} fill={K.ruby} weight="bold">+</Mark>
      <Mark x={160} y={43} size={15} fill={K.cyan} weight="bold">−</Mark>
      <FitLabel x={74} y={72} w={70} size={12} anchor="end" weight="bold" wrap={false} fill={K.ruby}>
        {w.an}
      </FitLabel>
      <FitLabel x={198} y={72} w={70} size={12} anchor="start" weight="bold" wrap={false} fill={K.cyan}>
        {w.cat}
      </FitLabel>
      <Arrow x1={106} y1={170} x2={162} y2={170} color={K.amber} />
      <Mark x={134} y={163} size={12} fill={K.amber} weight="bold">Ag⁺</Mark>
      <FitLabel x={140} y={238} w={250} size={13} weight="bold" wrap={false} fill={K.amber}>
        {lbl.faraday_law}
      </FitLabel>

      <line x1="270" y1="14" x2="270" y2="250" stroke={K.line} strokeWidth="1.5" strokeDasharray="4 5" />

      {/* ---- Sacrificial anode ---- */}
      <FitLabel x={405} y={22} w={250} size={14} weight="bold" wrap={false} fill={K.text}>
        {lbl.sac_anode || ''}
      </FitLabel>
      <rect x="286" y="96" width="240" height="124" rx="6" fill="rgba(180,120,60,0.16)" stroke="rgba(180,120,60,0.6)" strokeWidth="1.5" />
      <FitLabel x={294} y={112} w={90} size={11} anchor="start" wrap={false} fill={K.mut}>
        {w.soil}
      </FitLabel>
      {/* Iron pipe */}
      <rect x="298" y="150" width="130" height="38" rx="19" fill="#64748b" stroke="#cbd5e1" strokeWidth="2" />
      <Mark x={363} y={174} size={13} fill="#f8fafc" weight="bold">Fe</Mark>
      {/* Magnesium block */}
      <rect x="466" y="140" width="44" height="56" rx="5" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
      <Mark x={488} y={173} size={13} fill="#0b1220" weight="bold">Mg</Mark>
      {/* Wire: electrons from Mg to Fe */}
      <path d="M 363 150 L 363 66 L 488 66 L 488 140" fill="none" stroke={K.text} strokeWidth="2.5" />
      <Arrow x1={458} y1={54} x2={394} y2={54} color={K.cyan} />
      <Mark x={426} y={48} size={12} fill={K.cyan} weight="bold">e⁻</Mark>
      <Mark x={488} y={212} size={11} fill={K.sec}>Mg → Mg²⁺ + 2e⁻</Mark>
      <FitLabel x={405} y={238} w={250} size={13} weight="bold" wrap={false} fill={K.green}>
        {lbl.fe_pipe || ''}
      </FitLabel>
    </g>
  );
}

// ---------------------------------------------------------------------------
// 9. VSEPR Molecular Geometries (AX2, AX3, AX4, AX3E, AX2E2)
// ---------------------------------------------------------------------------
function renderVseprGeometry(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  if (lbl.diamond) return renderCarbonAllotropes(spec, lang);
  if (lbl.alcohol) return renderFunctionalGroups(spec, lang);
  if (lbl.markov) return renderMarkovnikovTollens(spec, lang);
  if (lbl.bond1) return renderBondTypes(spec, lang);
  if (lbl.doner) return renderHydrogenBondWater(spec, lang);
  if (lbl.head && lbl.tail) return renderSoapMicelle(spec, lang);
  if (lbl.mono) return renderPolymerization(spec, lang);
  const w = figureWords(lang);
  const L = diagramLabelResolver(spec.labels, lang);
  return (
    <g>
      {/* Center 1: Linear AX2 (180°) */}
      <g transform="translate(75, 50)">
        <g className="dg-float dg-d1">
        <Bond x1={20} y1={40} x2={100} y2={40} />
        <circle cx="60" cy="40" r="14" fill="url(#dg-lit-gold)" filter="url(#dg-shadow)" />
        <circle cx="20" cy="40" r="10" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <circle cx="100" cy="40" r="10" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <text x="60" y="44" textAnchor="middle" fill="#0b1220" fontSize="11.5" fontWeight="bold">Be</text>
        <FitLabel x={60} y={73} w={132} size={12.5} valign="top" fill="var(--text-secondary, #94a3b8)">
          {lbl.ax2 || 'AX₂ (180°)'}
        </FitLabel>
        </g>
      </g>

      {/* Center 2: Trigonal Planar AX3 (120°) */}
      <g transform="translate(210, 40)">
        <g className="dg-float dg-d2">
        <Bond x1={60} y1={45} x2={60} y2={15} />
        <Bond x1={60} y1={45} x2={25} y2={65} />
        <Bond x1={60} y1={45} x2={95} y2={65} />
        <circle cx="60" cy="45" r="14" fill="url(#dg-lit-green)" filter="url(#dg-shadow)" />
        <circle cx="60" cy="15" r="10" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <circle cx="25" cy="65" r="10" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <circle cx="95" cy="65" r="10" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <text x="60" y="49" textAnchor="middle" fill="#0b1220" fontSize="11.5" fontWeight="bold">B</text>
        <FitLabel x={60} y={93} w={132} size={12.5} valign="top" fill="var(--text-secondary, #94a3b8)">
          {lbl.ax3 || 'AX₃ (120°)'}
        </FitLabel>
        </g>
      </g>

      {/* Center 3: Tetrahedral AX4 (109.5°) */}
      <g transform="translate(345, 40)">
        <g className="dg-float dg-d3">
        <Bond x1={60} y1={45} x2={60} y2={12} />
        <Bond x1={60} y1={45} x2={30} y2={70} />
        <Bond x1={60} y1={45} x2={75} y2={72} />
        <Bond x1={60} y1={45} x2={95} y2={55} />
        <circle cx="60" cy="45" r="14" fill="url(#dg-lit-slate)" filter="url(#dg-shadow)" />
        <circle cx="60" cy="12" r="9" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <circle cx="30" cy="70" r="9" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <circle cx="75" cy="72" r="9" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <circle cx="95" cy="55" r="9" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <text x="60" y="49" textAnchor="middle" fill="var(--brand-on-primary, #ffffff)" fontSize="11.5" fontWeight="bold">C</text>
        <FitLabel x={60} y={93} w={132} size={12.5} valign="top" fill="var(--text-secondary, #94a3b8)">
          {lbl.ax4 || 'AX₄ (109.5°)'}
        </FitLabel>
        </g>
      </g>

      {/* Center 4: Bent / Angular AX2E2 (104.5° - H2O with Two Non-Bonding Lone Pairs) */}
      <g transform="translate(130, 160)">
        <g className="dg-float dg-d4">
        {/* Pair 1 at -25° */}
        <ellipse cx="48" cy="24" rx="10" ry="5" transform="rotate(-25 48 24)" fill="none" stroke="var(--accent-amber, #f59e0b)" strokeDasharray="2 2" className="anim-pulse" />
        {/* Pair 2 at +25° */}
        <ellipse cx="72" cy="24" rx="10" ry="5" transform="rotate(25 72 24)" fill="none" stroke="var(--accent-amber, #f59e0b)" strokeDasharray="2 2" className="anim-pulse" />
        <Bond x1={60} y1={45} x2={30} y2={70} />
        <Bond x1={60} y1={45} x2={90} y2={70} />
        <circle cx="60" cy="45" r="14" fill="url(#dg-lit-ruby)" filter="url(#dg-shadow)" />
        <circle cx="30" cy="70" r="10" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <circle cx="90" cy="70" r="10" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <text x="60" y="49" textAnchor="middle" fill="var(--brand-on-primary, #ffffff)" fontSize="11.5" fontWeight="bold">O</text>
        <FitLabel x={60} y={93} w={176} size={12.5} valign="top" fill="var(--text-secondary, #94a3b8)">
          {lbl.ax2e2 || 'AX₂E₂ (104.5°)'}
        </FitLabel>
        </g>
      </g>

      {/* Center 5: Trigonal Pyramidal AX3E (107.3° - NH3) */}
      <g transform="translate(310, 160)">
        <g className="dg-float dg-d5">
        <ellipse cx="60" cy="26" rx="12" ry="6" fill="none" stroke="var(--accent-amber, #f59e0b)" strokeDasharray="2 2" className="anim-pulse" />
        <Bond x1={60} y1={45} x2={25} y2={70} />
        <Bond x1={60} y1={45} x2={60} y2={75} />
        <Bond x1={60} y1={45} x2={95} y2={70} />
        <circle cx="60" cy="45" r="14" fill="url(#dg-lit-blue)" filter="url(#dg-shadow)" />
        <circle cx="25" cy="70" r="9" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <circle cx="60" cy="75" r="9" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <circle cx="95" cy="70" r="9" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
        <text x="60" y="49" textAnchor="middle" fill="#ffffff" fontSize="11.5" fontWeight="bold">N</text>
        <FitLabel x={60} y={93} w={176} size={12.5} valign="top" fill="var(--text-secondary, #94a3b8)">
          {lbl.ax3e || (lbl.ax2e2 ? w.ax3e : 'AX₃E (107°)')}
        </FitLabel>
        </g>
      </g>

      {/* Bottom Summary */}
      <FitLabel x={270} y={290} w={516} size={13} weight={600} wrap={false} fill="var(--text-primary, #ffffff)">
        {L('vsepr_summary', 'summary', 'vsepr')}
      </FitLabel>
    </g>
  );
}

// ---------------------------------------------------------------------------
// 10. Le Chatelier: concentration–time graph for N2 + 3H2 ⇌ 2NH3 when N2 is
//     added at t1 (sudden jump for N2, then gradual changes in the 1 : 3 : 2
//     ratio until the new equilibrium at t2). `qc_less` key: Qc approaching Kc.
// ---------------------------------------------------------------------------
function renderLeChatelierEquilibrium(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  if (lbl.qc_less) return renderReactionQuotient(spec, lang);
  const L = diagramLabelResolver(spec.labels, lang);
  return (
    <g>
      <Axes x0={70} y0={240} x1={492} y1={38} />
      <FitLabel x={488} y={233} w={100} size={13} anchor="end" wrap={false} fill={K.mut}>
        {L('le_time', 'time')}
      </FitLabel>
      <FitLabel x={78} y={32} w={150} size={13} anchor="start" wrap={false} fill={K.mut}>
        {L('le_conc', 'conc')}
      </FitLabel>
      <Mark x={488} y={32} anchor="end" fill={K.sec} weight={600}>N₂ + 3H₂ ⇌ 2NH₃</Mark>

      {/* t1: disturbance, t2: new equilibrium */}
      <line x1="220" y1="240" x2="220" y2="44" stroke={K.sec} strokeWidth="1" strokeDasharray="3 4" opacity="0.8" />
      <FitLabel x={220} y={257} w={150} size={13} weight="bold" wrap={false} fill={K.amber}>
        {L('le_t1', 't1')}
      </FitLabel>
      <line x1="380" y1="240" x2="380" y2="44" stroke={K.sec} strokeWidth="1" strokeDasharray="3 4" opacity="0.8" />
      <FitLabel x={380} y={257} w={150} size={13} weight="bold" wrap={false} fill={K.green}>
        {L('le_t2', 't2')}
      </FitLabel>

      {/* N2: jumps when added, then falls by d */}
      <path d="M 70 100 L 220 100 L 220 52 C 250 60, 310 64, 380 64 L 480 64" fill="none" stroke={K.cyan} strokeWidth="3" />
      <Mark x={80} y={92} size={14} anchor="start" fill={K.cyan} weight="bold">[N₂]</Mark>
      {/* H2: falls by 3d */}
      <path d="M 70 140 L 220 140 C 250 162, 310 176, 380 176 L 480 176" fill="none" stroke={K.ruby} strokeWidth="3" />
      <Mark x={80} y={132} size={14} anchor="start" fill={K.ruby} weight="bold">[H₂]</Mark>
      {/* NH3: rises by 2d */}
      <path d="M 70 222 L 220 222 C 250 208, 310 198, 380 198 L 480 198" fill="none" stroke={K.green} strokeWidth="3" />
      <Mark x={80} y={214} size={14} anchor="start" fill={K.green} weight="bold">[NH₃]</Mark>

      {lbl.spike && (
        <FitLabel x={228} y={47} w={150} size={13} anchor="start" weight="bold" wrap={false} fill={K.cyan}>
          {lbl.spike}
        </FitLabel>
      )}
      {lbl.shift && (
        <FitLabel x={300} y={118} w={150} size={13} weight="bold" fill={K.amber}>
          {lbl.shift}
        </FitLabel>
      )}

      <FitLabel x={270} y={283} w={516} size={13} weight={600} wrap={false} fill={K.text}>
        {L('le_summary', 'summary', 'kc_t')}
      </FitLabel>
    </g>
  );
}

/** Qc against time: whichever side Qc starts on, the system moves until Qc = Kc. */
function renderReactionQuotient(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  const L = diagramLabelResolver(spec.labels, lang);
  return (
    <g>
      <Axes x0={70} y0={240} x1={492} y1={38} />
      <FitLabel x={488} y={258} w={160} size={13} anchor="end" wrap={false} fill={K.mut}>
        {L('le_time', 'time')}
      </FitLabel>
      <Mark x={78} y={32} anchor="start" fill={K.mut} weight={500}>Qc</Mark>

      <line x1="70" y1="140" x2="484" y2="140" stroke={K.amber} strokeWidth="1.5" strokeDasharray="6 4" />
      <Mark x={62} y={145} size={14} anchor="end" fill={K.amber} weight="bold">Kc</Mark>

      {/* Starts above Kc: falls (reactants form) */}
      <path d="M 70 58 C 130 118, 250 138, 400 140" fill="none" stroke={K.ruby} strokeWidth="3.5" />
      <FitLabel x={150} y={76} w={330} size={13} anchor="start" weight="bold" wrap={false} fill={K.ruby}>
        {lbl.qc_more || 'Qc > Kc'}
      </FitLabel>
      {/* Starts below Kc: rises (products form) */}
      <path d="M 70 222 C 130 162, 250 142, 400 140" fill="none" stroke={K.cyan} strokeWidth="3.5" />
      <FitLabel x={150} y={212} w={330} size={13} anchor="start" weight="bold" wrap={false} fill={K.cyan}>
        {lbl.qc_less}
      </FitLabel>

      <circle cx="400" cy="140" r="5.5" fill="url(#dg-lit-gold)" filter="url(#dg-shadow)" />
      <FitLabel x={484} y={128} w={210} size={13} anchor="end" weight="bold" wrap={false} fill={K.amber}>
        {lbl.qc_eq || 'Qc = Kc'}
      </FitLabel>

      <FitLabel x={270} y={284} w={516} size={13} weight={600} wrap={false} fill={K.text}>
        {lbl.cat_effect || ''}
      </FitLabel>
    </g>
  );
}

// ---------------------------------------------------------------------------
// 11. Laboratory Glassware & Separation Apparatus
// ---------------------------------------------------------------------------
function renderLabGlassware(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  if (lbl.ksp_xy) return renderKspEquilibrium(spec, lang);
  if (lbl.common) return renderCommonIon(spec, lang);
  if (lbl.item1 && lbl.item4) return renderGlasswareSet(spec, lang);
  if (lbl.left && lbl.right) return renderAlembic(spec, lang);
  if (lbl.ion1) return renderWaterHardness(spec, lang);
  if (lbl.so2 && lbl.rain) return renderGreenhouseAcidRain(spec, lang);
  if (lbl.col && lbl.cond) return renderFractionalDistillation(spec, lang);
  if (lbl.valve) return renderSeparatoryFunnel(spec, lang);
  if (lbl.molar) return renderConcentrationUnits(spec, lang);
  if (lbl.salt && lbl.al) return renderIonConcentrations(spec, lang);
  const L = diagramLabelResolver(spec.labels, lang);
  return (
    <g>
      {/* Separation Funnel (Ayırma Hunisi) */}
      <g transform="translate(100, 30)">
        <path
          d="M 50 20 L 70 20 L 70 40 L 95 80 L 65 140 L 65 170 L 55 170 L 55 140 L 25 80 L 50 40 Z"
          fill="none"
          stroke="var(--text-primary, #ffffff)"
          strokeWidth="2.5"
        />
        {/* Immiscible Layers */}
        <path d="M 35 100 L 85 100 L 65 140 L 55 140 Z" fill="rgba(6,182,212,0.3)" />
        <path d="M 45 60 L 75 60 L 85 100 L 35 100 Z" fill="rgba(245,158,11,0.3)" />
        <rect x="52" y="150" width="16" height="8" fill="var(--accent-ruby, #f43f5e)" />
        {/* Layer labels sit beside the funnel (outside the narrow glass) with leader lines */}
        <line x1="20" y1="80" x2="44" y2="80" stroke="var(--accent-amber, #f59e0b)" strokeWidth="1.2" />
        <line x1="20" y1="118" x2="52" y2="118" stroke="var(--accent-cyan, #06b6d4)" strokeWidth="1.2" />
        <FitLabel x={16} y={84} w={100} size={10} anchor="end" weight="bold" fill="var(--accent-amber, #f59e0b)">
          {L('lab_oil', 'oil', 'top')}
        </FitLabel>
        <FitLabel x={16} y={122} w={100} size={10} anchor="end" weight="bold" fill="var(--accent-cyan, #06b6d4)">
          {L('lab_water', 'water', 'bottom')}
        </FitLabel>
        <FitLabel x={60} y={192} w={170} valign="top" fill="var(--text-secondary, #94a3b8)">
          {L('lab_funnel', 'funnel', 'item4')}
        </FitLabel>
      </g>

      {/* Beaker & Volumetric Flask */}
      <g transform="translate(300, 50)">
        {/* Beaker */}
        <rect x="30" y="70" width="70" height="90" rx="4" fill="rgba(6,182,212,0.15)" stroke="var(--text-primary, #ffffff)" strokeWidth="2" />
        <line x1="30" y1="100" x2="45" y2="100" stroke="var(--text-secondary, #94a3b8)" />
        <line x1="30" y1="120" x2="50" y2="120" stroke="var(--text-secondary, #94a3b8)" />
        <line x1="30" y1="140" x2="45" y2="140" stroke="var(--text-secondary, #94a3b8)" />
        <FitLabel x={60} y={180} w={92} valign="top" fill="var(--text-secondary, #94a3b8)">
          {L('lab_beaker', 'beaker', 'item2')}
        </FitLabel>

        {/* Volumetric Flask (Balon Joje) */}
        <path
          d="M 140 40 L 150 40 L 150 90 L 175 145 A 15 15 0 0 1 165 160 L 125 160 A 15 15 0 0 1 115 145 L 140 90 Z"
          fill="rgba(16,185,129,0.15)"
          stroke="var(--text-primary, #ffffff)"
          strokeWidth="2"
        />
        <line x1="138" y1="75" x2="152" y2="75" stroke="var(--accent-ruby, #f43f5e)" strokeWidth="1.5" />
        <FitLabel x={157} y={180} w={74} valign="top" fill="var(--text-secondary, #94a3b8)">
          {L('lab_flask', 'flask', 'item3')}
        </FitLabel>
      </g>

      {/* Bottom Summary */}
      <FitLabel x={270} y={282} w={510} size={12} weight={600} wrap={false} fill="var(--text-primary, #ffffff)">
        {L('lab_summary', 'item1', 'summary')}
      </FitLabel>
    </g>
  );
}

// ---------------------------------------------------------------------------
// Topic figures that reuse an archetype id but need their own drawing
// (selected by the label keys of the unit's spec).
// ---------------------------------------------------------------------------

/** u15: boiling-point elevation and freezing-point depression, pure water vs solution. */
function renderColligative(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  const w = figureWords(lang);
  const panel = (ox: number, heating: boolean) => {
    const ref = heating ? 118 : 128; // pure water: 100 °C / 0 °C plateau
    const start = heating ? 200 : 70;
    const sol = heating ? 96 : 152; // the solution starts to boil higher / freeze lower
    const solX = heating ? ox + 78 : ox + 88;
    const solEnd = heating ? sol - 12 : sol + 12; // and its temperature keeps drifting
    const bx = solX + 8;
    return (
      <g>
        <Axes x0={ox} y0={226} x1={ox + 196} y1={46} />
        <FitLabel x={ox + 6} y={42} w={120} size={12} anchor="start" wrap={false} fill={K.mut}>
          {w.tC}
        </FitLabel>
        <FitLabel x={ox + 192} y={242} w={90} size={12} anchor="end" wrap={false} fill={K.mut}>
          {w.time}
        </FitLabel>
        <line x1={ox - 4} y1={ref} x2={ox + 4} y2={ref} stroke={K.sec} strokeWidth="1.5" />
        <Mark x={ox - 8} y={ref + 5} anchor="end" fill={K.sec}>{heating ? '100' : '0'}</Mark>
        <path d={`M ${ox} ${start} L ${ox + 62} ${ref} L ${ox + 186} ${ref}`} fill="none" stroke={K.cyan} strokeWidth="3" />
        <path d={`M ${ox} ${start} L ${solX} ${sol} L ${ox + 186} ${solEnd}`} fill="none" stroke={K.ruby} strokeWidth="3" strokeDasharray="7 3" />
        <Arrow x1={bx} y1={ref} x2={bx} y2={heating ? sol + 1 : sol - 1} color={K.amber} both head={6} />
        <Mark x={bx + 8} y={heating ? ref - 6 : ref + 17} anchor="start" fill={K.amber} weight="bold">ΔT</Mark>
        <FitLabel x={ox + 186} y={heating ? 212 : 66} w={110} size={14} anchor="end" weight="bold" wrap={false} fill={K.text}>
          {heating ? w.heat : w.cool}
        </FitLabel>
      </g>
    );
  };
  return (
    <g>
      {/* Legend */}
      <line x1="150" y1="16" x2="176" y2="16" stroke={K.cyan} strokeWidth="3" />
      <FitLabel x={182} y={21} w={90} size={13} anchor="start" weight="bold" wrap={false} fill={K.cyan}>
        {w.pure}
      </FitLabel>
      <line x1="296" y1="16" x2="322" y2="16" stroke={K.ruby} strokeWidth="3" strokeDasharray="7 3" />
      <FitLabel x={328} y={21} w={110} size={13} anchor="start" weight="bold" wrap={false} fill={K.ruby}>
        {w.soln}
      </FitLabel>
      {panel(58, true)}
      {panel(320, false)}
      <FitLabel x={150} y={264} w={250} size={14} weight="bold" wrap={false} fill={K.amber}>
        {lbl.dtk}
      </FitLabel>
      <FitLabel x={412} y={264} w={250} size={14} weight="bold" wrap={false} fill={K.amber}>
        {lbl.dtd || ''}
      </FitLabel>
      <FitLabel x={270} y={288} w={516} size={13} wrap={false} fill={K.sec}>
        {lbl.vanthoff || ''}
      </FitLabel>
    </g>
  );
}

/** u15: solubility against temperature — most solids rise, gases fall. */
function renderSolubilityCurves(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  const w = figureWords(lang);
  return (
    <g>
      <Axes x0={70} y0={240} x1={492} y1={36} />
      <FitLabel x={490} y={258} w={200} size={13} anchor="end" wrap={false} fill={K.mut}>
        {w.tC}
      </FitLabel>
      <FitLabel x={78} y={30} w={230} size={13} anchor="start" wrap={false} fill={K.mut}>
        {w.solub}
      </FitLabel>

      {/* Solid (endothermic dissolving): solubility rises with temperature */}
      <path d="M 70 204 C 200 196, 330 150, 470 62" fill="none" stroke={K.cyan} strokeWidth="3.5" />
      <FitLabel x={478} y={50} w={230} size={13} anchor="end" weight="bold" wrap={false} fill={K.cyan}>
        {lbl.endo}
      </FitLabel>
      {/* Gas: solubility falls with temperature */}
      <path d="M 70 92 C 150 170, 300 212, 470 224" fill="none" stroke={K.ruby} strokeWidth="3.5" strokeDasharray="7 3" />
      <FitLabel x={104} y={84} w={190} size={13} anchor="start" weight="bold" wrap={false} fill={K.ruby}>
        {lbl.exo || ''}
      </FitLabel>

      {/* Regions around the solid's curve */}
      <FitLabel x={215} y={130} w={130} size={13} wrap={false} fill={K.sec}>
        {w.supersat}
      </FitLabel>
      <FitLabel x={430} y={178} w={120} size={13} wrap={false} fill={K.sec}>
        {w.unsat}
      </FitLabel>
      <circle cx="387" cy="110" r="5" fill="url(#dg-lit-gold)" filter="url(#dg-shadow)" />
      <FitLabel x={376} y={98} w={190} size={13} anchor="end" weight="bold" wrap={false} fill={K.amber}>
        {lbl.sat || ''}
      </FitLabel>

      <FitLabel x={270} y={284} w={516} size={13} weight={600} wrap={false} fill={K.text}>
        {lbl.henry || ''}
      </FitLabel>
    </g>
  );
}

/** Small labelled ion sphere. */
const Ion: React.FC<{ x: number; y: number; tone: string; sign: string; r?: number }> = ({ x, y, tone, sign, r = 9 }) => (
  <g>
    <circle cx={x} cy={y} r={r} fill={`url(#dg-lit-${tone})`} filter="url(#dg-shadow)" />
    <Mark x={x} y={y + 4.5} size={13} fill="#0b1220" weight="bold">{sign}</Mark>
  </g>
);

const Beaker: React.FC<{ x: number; y: number; w: number; h: number; fill: string }> = ({ x, y, w, h, fill }) => (
  <g>
    <rect x={x + 2} y={y + 16} width={w - 4} height={h - 18} rx="4" fill={fill} />
    <path d={`M ${x} ${y} L ${x} ${y + h - 6} Q ${x} ${y + h} ${x + 6} ${y + h} L ${x + w - 6} ${y + h} Q ${x + w} ${y + h} ${x + w} ${y + h - 6} L ${x + w} ${y}`} fill="none" stroke={K.text} strokeWidth="2.5" />
  </g>
);

/** u20: saturated solution in equilibrium with its solid, and Ksp in terms of s. */
function renderKspEquilibrium(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  const w = figureWords(lang);
  const rows: [string, string, string][] = [
    [lbl.ksp_xy || '', 'XY ⇌ X⁺ + Y⁻', K.cyan],
    [lbl.ksp_xy2 || '', 'XY₂ ⇌ X²⁺ + 2Y⁻', K.green],
    [lbl.ksp_x2y3 || '', 'X₂Y₃ ⇌ 2X³⁺ + 3Y²⁻', K.amber],
  ];
  return (
    <g>
      <Beaker x={36} y={52} w={176} h={186} fill="rgba(96,165,250,0.16)" />
      {/* Undissolved solid at the bottom */}
      <path d="M 42 232 L 42 216 Q 70 200 100 210 Q 128 196 156 208 Q 186 200 206 214 L 206 232 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
      <Mark x={124} y={228} size={13} fill="#0b1220" weight="bold">XY</Mark>
      {/* Ions in the saturated solution */}
      <Ion x={70} y={104} tone="teal" sign="+" />
      <Ion x={178} y={96} tone="ruby" sign="−" />
      <Ion x={150} y={140} tone="teal" sign="+" />
      <Ion x={66} y={160} tone="ruby" sign="−" />
      {/* Dissolving and precipitating at equal rates */}
      <Arrow x1={104} y1={200} x2={104} y2={122} color={K.cyan} width={2.5} />
      <Arrow x1={128} y1={122} x2={128} y2={200} color={K.ruby} width={2.5} />
      <FitLabel x={98} y={84} w={80} size={12} anchor="end" weight="bold" wrap={false} fill={K.cyan}>
        {w.dissolve}
      </FitLabel>
      <FitLabel x={134} y={84} w={74} size={12} anchor="start" weight="bold" wrap={false} fill={K.ruby}>
        {w.precip}
      </FitLabel>

      {rows.map(([label, eq, color], i) => (
        <g key={i}>
          <rect x="236" y={46 + i * 64} width="290" height="54" rx="10" fill="rgba(255,255,255,0.05)" stroke={color} strokeWidth="1.5" />
          <FitLabel x={381} y={68 + i * 64} w={274} size={15} weight="bold" wrap={false} fill={color}>
            {label}
          </FitLabel>
          <Mark x={381} y={90 + i * 64} size={12} fill={K.sec} weight={500}>{eq}</Mark>
        </g>
      ))}

      <FitLabel x={270} y={278} w={516} size={14} weight="bold" wrap={false} fill={K.text}>
        {lbl.q_precip || ''}
      </FitLabel>
    </g>
  );
}

/** u20: the same salt (AgCl) dissolves less when a common ion (Cl⁻) is already present. */
function renderCommonIon(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  const w = figureWords(lang);
  return (
    <g>
      <Mark x={270} y={22} size={15} weight="bold">AgCl ⇌ Ag⁺ + Cl⁻</Mark>

      {/* Pure water: more AgCl dissolves, little solid is left */}
      <FitLabel x={135} y={50} w={210} size={13} weight="bold" wrap={false} fill={K.cyan}>
        {w.pure}
      </FitLabel>
      <Beaker x={50} y={60} w={170} h={150} fill="rgba(96,165,250,0.14)" />
      <path d="M 100 204 Q 135 188 170 204 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
      <Ion x={84} y={104} tone="white" sign="+" />
      <Ion x={150} y={98} tone="green" sign="−" />
      <Ion x={186} y={140} tone="white" sign="+" />
      <Ion x={112} y={142} tone="green" sign="−" />
      <Ion x={78} y={168} tone="green" sign="−" />
      <Ion x={156} y={170} tone="white" sign="+" />

      {/* NaCl solution: Cl⁻ is already there, the equilibrium lies to the left */}
      <FitLabel x={405} y={50} w={210} size={13} weight="bold" wrap={false} fill={K.green}>
        {w.nacl}
      </FitLabel>
      <Beaker x={320} y={60} w={170} h={150} fill="rgba(94,230,168,0.12)" />
      <path d="M 334 204 Q 405 150 476 204 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
      <Ion x={352} y={100} tone="green" sign="−" />
      <Ion x={400} y={92} tone="violet" sign="+" />
      <Ion x={452} y={104} tone="green" sign="−" />
      <Ion x={372} y={138} tone="violet" sign="+" />
      <Ion x={428} y={132} tone="white" sign="+" />
      <Ion x={462} y={150} tone="green" sign="−" />
      <Ion x={346} y={160} tone="violet" sign="+" />

      {/* Legend of the ions */}
      <circle cx="246" cy="92" r="7" fill="url(#dg-lit-white)" />
      <Mark x={258} y={97} anchor="start" fill={K.text}>Ag⁺</Mark>
      <circle cx="246" cy="118" r="7" fill="url(#dg-lit-green)" />
      <Mark x={258} y={123} anchor="start" fill={K.green}>Cl⁻</Mark>
      <circle cx="246" cy="144" r="7" fill="url(#dg-lit-violet)" />
      <Mark x={258} y={149} anchor="start" fill="#C9A2FF">Na⁺</Mark>

      <FitLabel x={135} y={232} w={250} size={13} weight="bold" wrap={false} fill={K.cyan}>
        {lbl.pure || ''}
      </FitLabel>
      <FitLabel x={405} y={232} w={250} size={13} weight="bold" wrap={false} fill={K.green}>
        {lbl.ion_sol || ''}
      </FitLabel>
      <FitLabel x={270} y={256} w={516} size={13} wrap={false} fill={K.sec}>
        {lbl.common}
      </FitLabel>
      <FitLabel x={270} y={282} w={516} size={14} weight="bold" wrap={false} fill={K.text}>
        {lbl.ksp_const || ''}
      </FitLabel>
    </g>
  );
}

/** Honeycomb sheet seen at an angle: `cols` hexagons in a row, `rows` rows. */
function honeycomb(cx: number, cy: number, cols: number, rows: number, a: number): { d: string; pts: [number, number][] } {
  const pts = new Map<string, [number, number]>();
  let d = '';
  const tx = (x: number, y: number): [number, number] => [r1(cx + x + 0.55 * y), r1(cy + 0.42 * y)];
  const wHex = Math.sqrt(3) * a;
  const x0 = -((cols - 1) * wHex) / 2 - ((rows - 1) * wHex) / 4;
  const y0 = -((rows - 1) * 1.5 * a) / 2;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const hx = x0 + c * wHex + (r % 2 ? wHex / 2 : 0);
      const hy = y0 + r * 1.5 * a;
      const corners: [number, number][] = [];
      for (let k = 0; k < 6; k++) {
        const ang = (Math.PI / 180) * (60 * k - 90);
        corners.push(tx(hx + a * Math.cos(ang), hy + a * Math.sin(ang)));
      }
      corners.forEach((p, k) => {
        pts.set(`${Math.round(p[0])}:${Math.round(p[1])}`, p);
        d += `${k === 0 ? 'M' : 'L'} ${p[0]} ${p[1]} `;
      });
      d += 'Z ';
    }
  }
  return { d, pts: [...pts.values()] };
}

const Sheet: React.FC<{ cx: number; cy: number; cols: number; rows: number; a: number; tone?: string }> = ({ cx, cy, cols, rows, a, tone = 'slate' }) => {
  const h = honeycomb(cx, cy, cols, rows, a);
  return (
    <g>
      <path d={h.d} fill="none" stroke="#93A1B5" strokeWidth="2.2" strokeLinejoin="round" />
      {h.pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="3.4" fill={`url(#dg-lit-${tone})`} stroke="#cbd5e1" strokeWidth="0.6" />
      ))}
    </g>
  );
};

/** u23: diamond (sp3 network), graphite (stacked sp2 layers), graphene (one layer), nanotube (rolled layer). */
function renderCarbonAllotropes(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  const w = figureWords(lang);
  const cAtom = (x: number, y: number, r = 9) => <circle cx={x} cy={y} r={r} fill="url(#dg-lit-slate)" stroke="#cbd5e1" strokeWidth="0.8" filter="url(#dg-shadow)" />;
  return (
    <g>
      {/* Diamond: every C bonded to four others (tetrahedral) */}
      <g>
        <Bond x1={80} y1={78} x2={80} y2={38} />
        <Bond x1={80} y1={78} x2={40} y2={104} />
        <Bond x1={80} y1={78} x2={120} y2={100} />
        <Bond x1={80} y1={78} x2={92} y2={116} />
        <line x1="40" y1="104" x2="26" y2="124" stroke="#93A1B5" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 6" />
        <line x1="120" y1="100" x2="138" y2="116" stroke="#93A1B5" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 6" />
        <line x1="80" y1="38" x2="96" y2="22" stroke="#93A1B5" strokeWidth="3" strokeLinecap="round" strokeDasharray="1 6" />
        {cAtom(80, 38)}
        {cAtom(40, 104)}
        {cAtom(120, 100)}
        {cAtom(92, 116)}
        {cAtom(80, 78, 11)}
        <FitLabel x={80} y={146} w={150} size={13} weight="bold" valign="top" fill={K.cyan}>
          {lbl.diamond}
        </FitLabel>
      </g>

      {/* Graphite: flat layers held together weakly */}
      <g>
        <Sheet cx={262} cy={36} cols={3} rows={2} a={15} />
        <Sheet cx={262} cy={78} cols={3} rows={2} a={15} />
        <Sheet cx={262} cy={120} cols={3} rows={2} a={15} />
        <line x1="222" y1="50" x2="222" y2="64" stroke={K.amber} strokeWidth="1.5" strokeDasharray="2 3" />
        <line x1="302" y1="50" x2="302" y2="64" stroke={K.amber} strokeWidth="1.5" strokeDasharray="2 3" />
        <line x1="222" y1="92" x2="222" y2="106" stroke={K.amber} strokeWidth="1.5" strokeDasharray="2 3" />
        <line x1="302" y1="92" x2="302" y2="106" stroke={K.amber} strokeWidth="1.5" strokeDasharray="2 3" />
        <FitLabel x={262} y={146} w={170} size={13} weight="bold" valign="top" fill={K.amber}>
          {lbl.graphite || ''}
        </FitLabel>
      </g>

      {/* Graphene: a single layer */}
      <g>
        <Sheet cx={450} cy={78} cols={4} rows={3} a={15} />
        <FitLabel x={450} y={146} w={170} size={13} weight="bold" valign="top" fill={K.green}>
          {lbl.graphene || ''}
        </FitLabel>
      </g>

      {/* Nanotube: a layer rolled into a cylinder */}
      <g>
        <path d="M 150 196 L 380 196 A 10 22 0 0 1 380 240 L 150 240 A 10 22 0 0 1 150 196 Z" fill="rgba(147,161,181,0.12)" stroke="#93A1B5" strokeWidth="2.2" />
        <ellipse cx="380" cy="218" rx="10" ry="22" fill="rgba(11,18,32,0.6)" stroke="#93A1B5" strokeWidth="2.2" />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <path
            key={i}
            d={`M ${158 + i * 30} 218 l 8 -11 l 14 0 l 8 11 l -8 11 l -14 0 Z M ${173 + i * 30} 207 l -1 -11 M ${173 + i * 30} 229 l -1 11`}
            fill="none"
            stroke="#93A1B5"
            strokeWidth="1.8"
            strokeLinejoin="round"
          />
        ))}
        <FitLabel x={394} y={222} w={142} size={13} anchor="start" weight="bold" fill={K.ruby}>
          {lbl.nanotube || ''}
        </FitLabel>
      </g>

      <FitLabel x={270} y={284} w={516} size={13} weight={600} wrap={false} fill={K.text}>
        {w.allo}
      </FitLabel>
    </g>
  );
}

/** A short structural formula: atoms on a line, optional =O above one of them. */
const Chain: React.FC<{ x: number; y: number; atoms: string[]; oxo?: number; hot?: number[]; color: string; step?: number }> = ({ x, y, atoms, oxo, hot = [], color, step = 36 }) => {
  return (
    <g>
      {atoms.slice(1).map((_, i) => (
        <line key={`b${i}`} x1={x + i * step + 11} y1={y - 6} x2={x + (i + 1) * step - 11} y2={y - 6} stroke={K.sec} strokeWidth="2.2" />
      ))}
      {oxo !== undefined && (
        <g>
          <line x1={x + oxo * step - 3.5} y1={y - 18} x2={x + oxo * step - 3.5} y2={y - 32} stroke={color} strokeWidth="2.2" />
          <line x1={x + oxo * step + 3.5} y1={y - 18} x2={x + oxo * step + 3.5} y2={y - 32} stroke={color} strokeWidth="2.2" />
          <text x={x + oxo * step} y={y - 35} textAnchor="middle" fontSize="17" fontWeight="bold" fill={color}>
            O
          </text>
        </g>
      )}
      {atoms.map((sym, i) => (
        <text key={`a${i}`} x={x + i * step} y={y} textAnchor="middle" fontSize="17" fontWeight="bold" fill={hot.includes(i) ? color : K.text}>
          {sym}
        </text>
      ))}
    </g>
  );
};

/** u24: the oxygen-containing functional groups as structural formulas. */
function renderFunctionalGroups(spec: QuestionDiagramSpec, _lang: LanguageCode) {
  const lbl = spec.labels || {};
  const card = (x: number, y: number, color: string, label: string, body: React.ReactNode) => (
    <g>
      <rect x={x} y={y} width="254" height="134" rx="12" fill="rgba(255,255,255,0.04)" stroke={color} strokeWidth="1.5" />
      {body}
      <FitLabel x={x + 127} y={y + 122} w={240} size={13} weight="bold" valign="bottom" fill={color}>
        {label}
      </FitLabel>
    </g>
  );
  return (
    <g>
      {card(10, 8, K.cyan, lbl.alcohol || '', <Chain x={101} y={66} atoms={['R', 'O', 'H']} hot={[1, 2]} color={K.cyan} />)}
      {card(276, 8, K.green, lbl.ether || '', <Chain x={367} y={66} atoms={['R', 'O', 'R′']} hot={[1]} color={K.green} />)}
      {card(
        10,
        154,
        K.amber,
        lbl.carbonyl || '',
        <g>
          <Chain x={30} y={222} atoms={['R', 'C', 'H']} oxo={1} hot={[1, 2]} color={K.amber} />
          <Chain x={164} y={222} atoms={['R', 'C', 'R′']} oxo={1} hot={[1]} color={K.amber} />
        </g>
      )}
      {card(
        276,
        154,
        K.ruby,
        lbl.acid || '',
        <g>
          <Chain x={296} y={222} step={30} atoms={['R', 'C', 'O', 'H']} oxo={1} hot={[1, 2, 3]} color={K.ruby} />
          <Chain x={420} y={222} step={30} atoms={['R', 'C', 'O', 'R′']} oxo={1} hot={[1, 2]} color={K.ruby} />
        </g>
      )}
    </g>
  );
}

/** u24: Markovnikov addition and the Tollens test as four reaction lines. */
function renderMarkovnikovTollens(spec: QuestionDiagramSpec, _lang: LanguageCode) {
  const lbl = spec.labels || {};
  const rows: [string, string, string][] = [
    ['CH₃–CH=CH₂ + HBr → CH₃–CHBr–CH₃', lbl.markov || '', K.cyan],
    ['R–C≡C–H + [Ag(NH₃)₂]⁺ → R–C≡C–Ag ↓', lbl.tollens_alkyne || '', K.text],
    ['R–CHO + [Ag(NH₃)₂]⁺ → R–COO⁻ + Ag ↓', lbl.tollens_ald || '', K.amber],
    ['R–C≡C–R′ + [Ag(NH₃)₂]⁺ → ✕', lbl.internal || '', K.ruby],
  ];
  return (
    <g>
      {rows.map(([eq, label, color], i) => (
        <g key={i}>
          <rect x="12" y={8 + i * 72} width="516" height="64" rx="10" fill="rgba(255,255,255,0.04)" stroke={color} strokeWidth="1.2" opacity="0.9" />
          <FitLabel x={270} y={34 + i * 72} w={496} size={15} weight="bold" wrap={false} fill={K.text}>
            {eq}
          </FitLabel>
          <FitLabel x={270} y={58 + i * 72} w={496} size={13} weight="bold" wrap={false} fill={color}>
            {label}
          </FitLabel>
        </g>
      ))}
    </g>
  );
}

// ---------------------------------------------------------------------------
// u01–u14 topic figures (selected by the label keys of each unit's spec, like
// the u15–u24 figures above). Shared small parts first.
// ---------------------------------------------------------------------------

/** Leader line from a label to the part it names (dot on the part). */
const Leader: React.FC<{ x1: number; y1: number; x2: number; y2: number; color?: string }> = ({ x1, y1, x2, y2, color = K.sec }) => (
  <g>
    <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="1.3" />
    <circle cx={x2} cy={y2} r="2.6" fill={color} />
  </g>
);

/** Rounded card with its label on the bottom edge (same look as the u24 cards). */
const Card: React.FC<{ x: number; y: number; w?: number; h?: number; color: string; label?: string; children?: React.ReactNode }> = ({ x, y, w = 254, h = 134, color, label, children }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="12" fill="rgba(255,255,255,0.04)" stroke={color} strokeWidth="1.5" />
    {children}
    {label && (
      <FitLabel x={x + w / 2} y={y + h - 10} w={w - 14} size={13} weight="bold" valign="bottom" fill={color}>
        {label}
      </FitLabel>
    )}
  </g>
);

/** Atom or ion drawn as a lit sphere with its symbol. */
const Ball: React.FC<{ x: number; y: number; r: number; tone: string; label?: string; ink?: string; size?: number }> = ({ x, y, r, tone, label, ink = '#0b1220', size = 12 }) => (
  <g>
    <circle cx={x} cy={y} r={r} fill={`url(#dg-lit-${tone})`} filter="url(#dg-shadow)" />
    {label && (
      <Mark x={x} y={y + size * 0.36} size={size} fill={ink} weight="bold">
        {label}
      </Mark>
    )}
  </g>
);

const GLASS = { fill: 'none', stroke: K.text, strokeWidth: 2.2, strokeLinejoin: 'round', strokeLinecap: 'round' } as const;
const WATER = 'rgba(96,165,250,0.22)';

/** Lewis symbol: element symbol with valence dots; dots = [top, right, bottom, left] (0–2 each). */
const Lewis: React.FC<{ x: number; y: number; sym: string; dots: [number, number, number, number]; color?: string }> = ({ x, y, sym, dots, color = K.text }) => {
  const wide = sym.length > 1 ? 6 : 1;
  const cy = y - 6;
  const pts: [number, number][] = [];
  const put = (n: number, px: number, py: number, horizontal: boolean) => {
    if (n === 1) pts.push([px, py]);
    if (n >= 2) {
      pts.push(horizontal ? [px - 4, py] : [px, py - 4]);
      pts.push(horizontal ? [px + 4, py] : [px, py + 4]);
    }
  };
  put(dots[0], x, cy - 15, true);
  put(dots[1], x + 13 + wide, cy, false);
  put(dots[2], x, cy + 15, true);
  put(dots[3], x - 13 - wide, cy, false);
  return (
    <g>
      <text x={x} y={y} textAnchor="middle" fontSize="18" fontWeight="bold" fill={color}>
        {sym}
      </text>
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="2.2" fill={K.amber} />
      ))}
    </g>
  );
};

/** u01: the four pieces of glassware a student has to tell apart. */
function renderGlasswareSet(spec: QuestionDiagramSpec, _lang: LanguageCode) {
  const lbl = spec.labels || {};
  const name = (x: number, text: string) => (
    <FitLabel x={x} y={246} w={130} size={13} weight="bold" valign="top" fill={K.text}>
      {text}
    </FitLabel>
  );
  return (
    <g>
      <defs>
        <clipPath id="dg-clip-u01-funnel">
          <path d="M 467 42 C 428 58, 432 116, 468 152 L 478 152 C 514 116, 518 58, 479 42 Z" />
        </clipPath>
      </defs>

      {/* Burette: long graduated tube, zero at the top, stopcock at the bottom */}
      <rect x="62" y="44" width="12" height="124" fill="rgba(45,217,195,0.28)" />
      <path d="M 61 18 L 61 168 L 66 180 L 66 208 M 75 18 L 75 168 L 70 180 L 70 208" {...GLASS} />
      {Array.from({ length: 11 }, (_, i) => (
        <line key={i} x1="61" y1={44 + i * 12} x2={i % 5 === 0 ? 70 : 66} y2={44 + i * 12} stroke={K.sec} strokeWidth="1.2" />
      ))}
      <Mark x={82} y={48} size={11} anchor="start" fill={K.sec}>0</Mark>
      <Mark x={82} y={168} size={11} anchor="start" fill={K.sec}>50</Mark>
      <rect x="55" y="186" width="26" height="6" rx="2" fill={K.amber} />
      <rect x="81" y="182" width="5" height="14" rx="2" fill={K.amber} />
      <circle cx="68" cy="218" r="3" fill="url(#dg-lit-teal)" />
      {name(68, lbl.item1 || '')}

      {/* Erlenmeyer flask: conical body, short neck */}
      <path d="M 174.4 178 L 231.6 178 L 243 210 Q 246 218 237 218 L 169 218 Q 160 218 163 210 Z" fill="rgba(255,107,122,0.2)" />
      <path d="M 193 96 L 193 126 L 163 210 Q 160 218 169 218 L 237 218 Q 246 218 243 210 L 213 126 L 213 96" {...GLASS} />
      <line x1="189" y1="96" x2="217" y2="96" stroke={K.text} strokeWidth="2.2" strokeLinecap="round" />
      {name(203, lbl.item2 || '')}

      {/* Volumetric flask: pear-shaped body, long narrow neck with one calibration mark */}
      <path d="M 333 84 L 333 136 C 296 150, 292 204, 314 218 L 362 218 C 384 204, 380 150, 343 136 L 343 84 Z" fill="rgba(94,230,168,0.2)" />
      <path d="M 332 32 L 332 136 C 296 150, 292 204, 314 218 L 362 218 C 384 204, 380 150, 344 136 L 344 32" {...GLASS} />
      <rect x="329" y="20" width="18" height="12" rx="2" fill={K.amber} />
      <line x1="327" y1="84" x2="349" y2="84" stroke={K.ruby} strokeWidth="2.4" />
      <Arrow x1={376} y1={84} x2={353} y2={84} color={K.ruby} head={6} width={1.6} />
      {name(338, lbl.item3 || '')}

      {/* Separatory funnel: stoppered pear body, stopcock on the stem, two liquid layers */}
      <g clipPath="url(#dg-clip-u01-funnel)">
        <rect x="428" y="62" width="92" height="44" fill="rgba(246,183,60,0.4)" />
        <rect x="428" y="106" width="92" height="48" fill={WATER} />
      </g>
      <path d="M 467 28 L 467 42 C 428 58, 432 116, 468 152 L 468 206 M 479 28 L 479 42 C 518 58, 514 116, 478 152 L 478 206" {...GLASS} />
      <rect x="465" y="16" width="16" height="12" rx="2" fill={K.amber} />
      <rect x="458" y="168" width="30" height="6" rx="2" fill={K.amber} />
      <rect x="488" y="164" width="5" height="14" rx="2" fill={K.amber} />
      {name(473, lbl.item4 || '')}
    </g>
  );
}

/** u01: alembic — cucurbit on a furnace, cap where the vapour condenses, beak into a receiver. */
function renderAlembic(spec: QuestionDiagramSpec, _lang: LanguageCode) {
  const lbl = spec.labels || {};
  return (
    <g>
      {/* Furnace and flames */}
      <rect x="110" y="222" width="120" height="28" rx="4" fill="rgba(255,255,255,0.07)" stroke={K.sec} strokeWidth="1.5" />
      {[150, 170, 190].map((fx) => (
        <path key={fx} d={`M ${fx} 222 C ${fx - 8} 214, ${fx - 2} 210, ${fx} 204 C ${fx + 2} 210, ${fx + 8} 214, ${fx} 222 Z`} fill={K.amber} />
      ))}

      {/* Cucurbit with the mixture */}
      <path d="M 128.6 168 A 42 42 0 0 0 211.4 168 Z" fill="rgba(255,107,122,0.28)" />
      <path d="M 154 108 L 154 122 A 42 42 0 1 0 186 122 L 186 108" {...GLASS} />
      <Arrow x1={170} y1={156} x2={170} y2={116} color={K.sec} dash="3 3" head={6} width={1.6} />

      {/* Cap (alembic head) and its downward beak */}
      <path d="M 150 108 L 150 84 A 20 24 0 0 1 184.1 67 L 352 143 M 190 108 L 190 84 L 346 155" {...GLASS} />
      <Arrow x1={236} y1={78} x2={300} y2={107} color={K.cyan} head={7} width={2} />

      {/* Receiver with the distillate */}
      <path d="M 320.9 224 A 36 36 0 0 0 383.1 224 Z" fill="rgba(45,217,195,0.3)" />
      <path d="M 340 158 L 340 172 A 36 36 0 1 0 364 172 L 364 158" {...GLASS} />
      <circle cx="350" cy="170" r="3" fill="url(#dg-lit-teal)" />

      <FitLabel x={170} y={46} w={300} size={13} weight="bold" valign="bottom" fill={K.cyan}>
        {lbl.top || ''}
      </FitLabel>
      <Leader x1={112} y1={170} x2={134} y2={170} color={K.ruby} />
      <FitLabel x={108} y={174} w={102} size={13} anchor="end" weight="bold" fill={K.ruby}>
        {lbl.left || ''}
      </FitLabel>
      <FitLabel x={170} y={272} w={300} size={13} weight="bold" valign="top" fill={K.amber}>
        {lbl.bottom || ''}
      </FitLabel>
      <Leader x1={398} y1={206} x2={380} y2={206} color={K.green} />
      <FitLabel x={402} y={210} w={132} size={13} anchor="start" weight="bold" fill={K.green}>
        {lbl.right || ''}
      </FitLabel>
    </g>
  );
}

/** u03: ionic bond (electron transfer), covalent bond (shared pair) and the two dipole attractions. */
function renderBondTypes(spec: QuestionDiagramSpec, _lang: LanguageCode) {
  const lbl = spec.labels || {};
  return (
    <g>
      <Card x={10} y={8} color={K.amber} label={lbl.bond1 || ''}>
        <Lewis x={36} y={62} sym="Na" dots={[0, 1, 0, 0]} />
        <Arrow x1={62} y1={56} x2={80} y2={56} color={K.amber} head={6} width={1.6} />
        <Lewis x={102} y={62} sym="Cl" dots={[2, 2, 2, 1]} />
        <Arrow x1={130} y1={56} x2={152} y2={56} color={K.sec} head={7} />
        <Mark x={174} y={62} size={18} weight="bold">Na⁺</Mark>
        <Mark x={199} y={64} size={24} weight={400} fill={K.sec}>[</Mark>
        <Lewis x={222} y={62} sym="Cl" dots={[2, 2, 2, 2]} />
        <Mark x={245} y={64} size={24} weight={400} fill={K.sec}>]</Mark>
        <Mark x={254} y={46} size={15} weight="bold">⁻</Mark>
      </Card>

      <Card x={276} y={8} color={K.cyan} label={lbl.bond2 || ''}>
        <Lewis x={300} y={62} sym="H" dots={[0, 1, 0, 0]} />
        <Mark x={326} y={62} size={16} fill={K.sec}>+</Mark>
        <Lewis x={356} y={62} sym="Cl" dots={[2, 2, 2, 1]} />
        <Arrow x1={386} y1={56} x2={408} y2={56} color={K.sec} head={7} />
        <ellipse cx="451" cy="56" rx="9" ry="13" fill="rgba(45,217,195,0.18)" stroke={K.cyan} strokeWidth="1.3" strokeDasharray="3 2" />
        <Lewis x={432} y={62} sym="H" dots={[0, 0, 0, 0]} />
        <Lewis x={476} y={62} sym="Cl" dots={[2, 2, 2, 0]} />
        <circle cx="451" cy="52" r="2.2" fill={K.amber} />
        <circle cx="451" cy="60" r="2.2" fill={K.amber} />
      </Card>

      <Card x={10} y={154} color={K.green} label={lbl.dipole || ''}>
        {[62, 166].map((mx) => (
          <g key={mx}>
            <Bond x1={mx} y1={212} x2={mx + 34} y2={212} />
            <Ball x={mx} y={212} r={9} tone="white" />
            <Ball x={mx + 34} y={212} r={14} tone="green" />
            <Mark x={mx} y={190} size={13} fill={K.amber} weight="bold">δ+</Mark>
            <Mark x={mx + 36} y={186} size={13} fill={K.cyan} weight="bold">δ−</Mark>
          </g>
        ))}
        <line x1="114" y1="212" x2="153" y2="212" stroke={K.green} strokeWidth="2.4" strokeDasharray="3 4" />
      </Card>

      <Card x={276} y={154} color={K.ruby} label={lbl.hbond || ''}>
        <Bond x1={326} y1={200} x2={356} y2={200} />
        <Bond x1={326} y1={200} x2={318.5} y2={229} />
        <Ball x={326} y={200} r={13} tone="ruby" />
        <Ball x={356} y={200} r={8} tone="white" />
        <Ball x={318.5} y={229} r={8} tone="white" />
        <line x1="367" y1="200" x2="403" y2="200" stroke={K.ruby} strokeWidth="2.4" strokeDasharray="3 4" />
        <Bond x1={418} y1={200} x2={436.4} y2={176.3} />
        <Bond x1={418} y1={200} x2={436.4} y2={223.7} />
        <Ball x={418} y={200} r={13} tone="ruby" />
        <Ball x={436.4} y={176.3} r={8} tone="white" />
        <Ball x={436.4} y={223.7} r={8} tone="white" />
        <Mark x={358} y={182} size={13} fill={K.amber} weight="bold">δ+</Mark>
        <Mark x={410} y={178} size={13} fill={K.cyan} weight="bold">δ−</Mark>
      </Card>
    </g>
  );
}

/** u03: hydrogen bonds between water molecules and the open hexagonal network of ice. */
function renderHydrogenBondWater(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  const water = (ox: number, oy: number, hs: [number, number][]) => (
    <g>
      {hs.map((h, i) => (
        <Bond key={`b${i}`} x1={ox} y1={oy} x2={h[0]} y2={h[1]} />
      ))}
      <Ball x={ox} y={oy} r={13} tone="ruby" label="O" ink="#ffffff" size={11} />
      {hs.map((h, i) => (
        <Ball key={`h${i}`} x={h[0]} y={h[1]} r={8} tone="white" />
      ))}
    </g>
  );
  // Ice ring: six O atoms, each O–H pointing at the next O (solid = covalent, dotted = hydrogen bond)
  const ring = Array.from({ length: 6 }, (_, i) => {
    const a = ((90 + i * 60) * Math.PI) / 180;
    return [r1(410 + 56 * Math.cos(a)), r1(96 - 56 * Math.sin(a))] as [number, number];
  });
  return (
    <g>
      {/* Three liquid-water molecules joined by hydrogen bonds */}
      <line x1="103" y1="118.5" x2="138" y2="136" stroke={K.amber} strokeWidth="2.4" strokeDasharray="3 4" />
      <line x1="183.5" y1="121.7" x2="218" y2="107" stroke={K.amber} strokeWidth="2.4" strokeDasharray="3 4" />
      {water(70, 102, [[95, 114.5], [51.6, 123.1]])}
      {water(150, 142, [[175.8, 131.1], [154.1, 169.7]])}
      {water(230, 108, [[239.6, 81.7], [253.1, 123.9]])}
      <Leader x1={98} y1={52} x2={95} y2={112} color={K.cyan} />
      <FitLabel x={98} y={42} w={170} size={13} weight="bold" valign="bottom" fill={K.cyan}>
        {lbl.doner || ''}
      </FitLabel>
      <Leader x1={150} y1={196} x2={146} y2={156} color={K.green} />
      <FitLabel x={150} y={214} w={250} size={13} weight="bold" valign="top" fill={K.green}>
        {lbl.acceptor || ''}
      </FitLabel>

      {/* Ice */}
      {ring.map((p, i) => {
        const q = ring[(i + 1) % 6];
        const hx = r1(p[0] + (q[0] - p[0]) * 0.36);
        const hy = r1(p[1] + (q[1] - p[1]) * 0.36);
        const ox = r1(p[0] + (p[0] - 410) * 0.36);
        const oy = r1(p[1] + (p[1] - 96) * 0.36);
        return (
          <g key={i}>
            <line x1={hx} y1={hy} x2={q[0]} y2={q[1]} stroke={K.amber} strokeWidth="2" strokeDasharray="3 4" />
            <line x1={p[0]} y1={p[1]} x2={hx} y2={hy} stroke="#93A1B5" strokeWidth="4" strokeLinecap="round" />
            <line x1={p[0]} y1={p[1]} x2={ox} y2={oy} stroke="#93A1B5" strokeWidth="4" strokeLinecap="round" />
            <circle cx={hx} cy={hy} r="5.5" fill="url(#dg-lit-white)" />
            <circle cx={ox} cy={oy} r="5.5" fill="url(#dg-lit-white)" />
          </g>
        );
      })}
      {ring.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r="10" fill="url(#dg-lit-ruby)" filter="url(#dg-shadow)" />
      ))}
      <FitLabel x={410} y={196} w={250} size={13} weight="bold" valign="top" fill={K.text}>
        {lbl.ice || ''}
      </FitLabel>

      <FitLabel x={270} y={268} w={516} size={13} weight="bold" wrap={false} fill={K.amber}>
        {lbl.bp || ''}
      </FitLabel>
      <Mark x={270} y={290} size={13} fill={K.sec} weight={600}>{dec(lang, 'H₂O: 100 °C   ·   H₂S: −60 °C')}</Mark>
    </g>
  );
}

/** u04: heating curve of water at 1 atm (ice at −25 °C to steam). */
function renderWaterHeatingCurve(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  const L = diagramLabelResolver(spec.labels, lang);
  const w = figureWords(lang);
  const rows: [string, string, string][] = [
    ['I', lbl.solid || '', K.text],
    ['II', lbl.melt || '', K.amber],
    ['III', lbl.liquid || '', K.text],
    ['IV', lbl.boil || '', K.ruby],
    ['V', lbl.gas || '', K.cyan],
  ];
  return (
    <g>
      <Axes x0={64} y0={236} x1={502} y1={34} />
      <FitLabel x={72} y={28} w={220} size={13} anchor="start" wrap={false} fill={K.mut}>
        {w.tC}
      </FitLabel>
      <FitLabel x={500} y={256} w={300} size={13} anchor="end" wrap={false} fill={K.mut}>
        {L('phase_heat_axis', 'heat_axis')}
      </FitLabel>

      <line x1="60" y1="186" x2="68" y2="186" stroke={K.sec} strokeWidth="1.5" />
      <Mark x={56} y={191} anchor="end" fill={K.sec}>0</Mark>
      <line x1="60" y1="92" x2="270" y2="92" stroke={K.sec} strokeWidth="1" strokeDasharray="3 4" opacity="0.8" />
      <Mark x={56} y={97} anchor="end" fill={K.sec}>100</Mark>

      <path d="M 64 209.5 L 120 186 L 180 186 L 270 92 L 440 92 L 490 68.5" fill="none" stroke={K.cyan} strokeWidth="3.5" strokeLinejoin="round" />

      <Mark x={84} y={190} size={13} fill={K.text} weight="bold">I</Mark>
      <Mark x={150} y={178} size={13} fill={K.amber} weight="bold">II</Mark>
      <Mark x={210} y={136} size={13} anchor="end" fill={K.text} weight="bold">III</Mark>
      <Mark x={355} y={84} size={13} fill={K.ruby} weight="bold">IV</Mark>
      <Mark x={452} y={70} size={13} anchor="end" fill={K.cyan} weight="bold">V</Mark>

      {rows.map(([n, text, color], i) => (
        <FitLabel key={n} x={292} y={132 + i * 21} w={206} size={13} anchor="start" weight="bold" wrap={false} fill={color}>
          {`${n}  ${text}`}
        </FitLabel>
      ))}

      <FitLabel x={270} y={284} w={516} size={13} weight={600} wrap={false} fill={K.text}>
        {L('phase_summary', 'summary')}
      </FitLabel>
    </g>
  );
}

/** u04: vapour pressure against temperature for three liquids; each boils where its curve reaches the external pressure. */
function renderVapourPressure(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  const X = (t: number) => r1(70 + t * 3.5);
  const Y = (p: number) => r1(214 - p * 0.17);
  // Clausius–Clapeyron through the normal boiling point: [Tb in K, ΔHvap / R in K]
  const curve = (tb: number, k: number) => {
    const pts: string[] = [];
    for (let t = 0; t <= 120; t += 2) {
      const p = 760 * Math.exp(k * (1 / tb - 1 / (t + 273.15)));
      if (p > 1010) break;
      pts.push(`${X(t)} ${Y(p)}`);
    }
    return `M ${pts.join(' L ')}`;
  };
  const liquids: [string, number, number, string, string][] = [
    ['(C₂H₅)₂O', 34.6, 3127, K.ruby, '34.6'],
    ['C₂H₅OH', 78.4, 5088, K.green, '78.4'],
    ['H₂O', 100, 4895, K.cyan, '100'],
  ];
  return (
    <g>
      <Axes x0={70} y0={214} x1={502} y1={36} />
      <FitLabel x={78} y={30} w={230} size={13} anchor="start" wrap={false} fill={K.mut}>
        {`${lbl.pvap || ''} (mmHg)`}
      </FitLabel>
      <Mark x={500} y={232} anchor="end" fill={K.mut} weight={500}>°C</Mark>

      {/* External pressure: 1 atm = 760 mmHg */}
      <line x1="66" y1={Y(760)} x2="488" y2={Y(760)} stroke={K.amber} strokeWidth="1.6" strokeDasharray="6 4" />
      <Mark x={62} y={Y(760) + 5} anchor="end" fill={K.amber} weight="bold">760</Mark>

      {liquids.map(([name, tb, k, color, tick], i) => (
        <g key={name}>
          <path d={curve(tb + 273.15, k)} fill="none" stroke={color} strokeWidth="3" />
          <line x1={X(tb)} y1={Y(760)} x2={X(tb)} y2={214} stroke={color} strokeWidth="1" strokeDasharray="2 3" />
          <circle cx={X(tb)} cy={Y(760)} r="5" fill="url(#dg-lit-gold)" filter="url(#dg-shadow)" />
          <Mark x={X(tb)} y={232} fill={color} weight="bold">{dec(lang, tick)}</Mark>
          <Mark x={i === 0 ? 198 : i === 1 ? 278 : 374} y={i === 0 ? 112 : i === 1 ? 154 : 164} anchor={i === 1 ? 'end' : 'start'} fill={color} weight="bold">
            {name}
          </Mark>
        </g>
      ))}

      <FitLabel x={496} y={30} w={200} size={13} anchor="end" weight="bold" wrap={false} fill={K.amber}>
        {lbl.tb || ''}
      </FitLabel>
      <FitLabel x={270} y={262} w={516} size={13} weight="bold" wrap={false} fill={K.amber}>
        {lbl.pext || ''}
      </FitLabel>
      <FitLabel x={270} y={286} w={516} size={13} weight={600} wrap={false} fill={K.sec}>
        {lbl.visc || ''}
      </FitLabel>
    </g>
  );
}

/** u05: hard water and the two ways of softening it. */
function renderWaterHardness(spec: QuestionDiagramSpec, _lang: LanguageCode) {
  const lbl = spec.labels || {};
  const ions: [string, string, number][] = [
    ['Ca²⁺', 'teal', 104],
    ['Mg²⁺', 'green', 140],
    ['HCO₃⁻', 'ruby', 176],
  ];
  const route = (y: number, color: string, title: string, eq: string) => (
    <g>
      <rect x="196" y={y} width="334" height="106" rx="12" fill="rgba(255,255,255,0.04)" stroke={color} strokeWidth="1.5" />
      <FitLabel x={363} y={y + 26} w={318} size={13} weight="bold" valign="top" fill={color}>
        {title}
      </FitLabel>
      <FitLabel x={363} y={y + 86} w={318} size={13} weight="bold" wrap={false} fill={K.text}>
        {eq}
      </FitLabel>
    </g>
  );
  return (
    <g>
      <Beaker x={20} y={62} w={132} h={150} fill={WATER} />
      {ions.map(([name, tone, y]) => (
        <g key={name}>
          <circle cx="44" cy={y} r="9" fill={`url(#dg-lit-${tone})`} filter="url(#dg-shadow)" />
          <Mark x={60} y={y + 5} anchor="start" weight="bold">{name}</Mark>
        </g>
      ))}
      <FitLabel x={86} y={236} w={168} size={13} weight="bold" valign="top" fill={K.text}>
        {lbl.ion1 || ''}
      </FitLabel>
      <Arrow x1={156} y1={110} x2={192} y2={72} color={K.amber} width={2.4} />
      <Arrow x1={156} y1={160} x2={192} y2={186} color={K.cyan} width={2.4} />
      {route(10, K.amber, lbl.boil || '', 'Ca(HCO₃)₂ → CaCO₃↓ + CO₂↑ + H₂O')}
      {route(126, K.cyan, lbl.resin || '', 'Ca²⁺ + Na₂R → CaR + 2Na⁺')}
      <FitLabel x={363} y={262} w={334} size={13} weight="bold" fill={K.green}>
        {lbl.pure || ''}
      </FitLabel>
    </g>
  );
}

/** u05: greenhouse effect (left) and the formation of acid rain (right). */
function renderGreenhouseAcidRain(spec: QuestionDiagramSpec, _lang: LanguageCode) {
  const lbl = spec.labels || {};
  return (
    <g>
      {/* Greenhouse effect */}
      <rect x="10" y="196" width="250" height="14" rx="3" fill="rgba(94,230,168,0.35)" />
      <rect x="10" y="66" width="250" height="30" rx="6" fill="rgba(255,255,255,0.07)" stroke={K.sec} strokeWidth="1" strokeDasharray="4 4" />
      <Mark x={196} y={86} size={13} fill={K.text} weight="bold">CO₂  CH₄</Mark>
      <circle cx="36" cy="34" r="16" fill="url(#dg-lit-gold)" filter="url(#dg-shadow)" />
      <Arrow x1={50} y1={48} x2={98} y2={192} color={K.amber} width={3} />
      <Arrow x1={118} y1={194} x2={134} y2={102} color={K.ruby} width={2.4} dash="6 4" />
      <Arrow x1={146} y1={102} x2={166} y2={192} color={K.ruby} width={2.4} dash="6 4" />
      <Arrow x1={212} y1={194} x2={236} y2={30} color={K.ruby} width={1.6} dash="2 4" head={6} />
      <FitLabel x={135} y={234} w={250} size={13} weight="bold" valign="top" fill={K.amber}>
        {lbl.co2 || ''}
      </FitLabel>

      <line x1="270" y1="14" x2="270" y2="286" stroke={K.line} strokeWidth="1" />

      {/* Acid rain */}
      <rect x="280" y="196" width="250" height="14" rx="3" fill="rgba(94,230,168,0.35)" />
      <rect x="296" y="150" width="56" height="46" fill="rgba(255,255,255,0.1)" stroke={K.text} strokeWidth="2" />
      <rect x="312" y="104" width="16" height="46" fill="rgba(255,255,255,0.1)" stroke={K.text} strokeWidth="2" />
      <Arrow x1={320} y1={98} x2={352} y2={62} color={K.sec} width={2} dash="4 3" />
      <Mark x={288} y={40} size={13} anchor="start" fill={K.text} weight="bold">SO₂</Mark>
      <Mark x={288} y={64} size={13} anchor="start" fill={K.text} weight="bold">NO₂</Mark>
      <g fill="rgba(226,232,240,0.9)">
        <ellipse cx="420" cy="52" rx="42" ry="20" />
        <ellipse cx="462" cy="46" rx="38" ry="24" />
        <ellipse cx="490" cy="60" rx="30" ry="16" />
      </g>
      {[400, 428, 456, 484, 508].map((dx, i) => (
        <g key={dx} stroke={K.cyan} strokeWidth="2.4" strokeLinecap="round">
          <line x1={dx} y1={86 + (i % 2) * 8} x2={dx - 6} y2={104 + (i % 2) * 8} />
          <line x1={dx - 10} y1={122 + (i % 2) * 8} x2={dx - 16} y2={140 + (i % 2) * 8} />
          <line x1={dx - 20} y1={158 + (i % 2) * 8} x2={dx - 26} y2={176 + (i % 2) * 8} />
        </g>
      ))}
      <FitLabel x={405} y={234} w={250} size={13} weight="bold" wrap={false} fill={K.text}>
        {lbl.so2 || ''}
      </FitLabel>
      <FitLabel x={405} y={257} w={250} size={13} weight="bold" wrap={false} fill={K.text}>
        {lbl.no2 || ''}
      </FitLabel>
      <FitLabel x={405} y={282} w={250} size={13} weight="bold" wrap={false} fill={K.ruby}>
        {lbl.rain || ''}
      </FitLabel>
    </g>
  );
}

const H2: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g>
    <circle cx={x - 6} cy={y} r="7" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
    <circle cx={x + 6} cy={y} r="7" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
  </g>
);
const O2: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g>
    <circle cx={x - 8} cy={y} r="10" fill="url(#dg-lit-ruby)" filter="url(#dg-shadow)" />
    <circle cx={x + 8} cy={y} r="10" fill="url(#dg-lit-ruby)" filter="url(#dg-shadow)" />
  </g>
);
const H2O: React.FC<{ x: number; y: number }> = ({ x, y }) => (
  <g>
    <circle cx={x - 11} cy={y + 8} r="6" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
    <circle cx={x + 11} cy={y + 8} r="6" fill="url(#dg-lit-white)" filter="url(#dg-shadow)" />
    <circle cx={x} cy={y} r="10" fill="url(#dg-lit-ruby)" filter="url(#dg-shadow)" />
  </g>
);

/** u06: a level balance — 4 g H₂ + 32 g O₂ on one pan, 36 g H₂O on the other. */
function renderMassConservation(spec: QuestionDiagramSpec, _lang: LanguageCode) {
  const lbl = spec.labels || {};
  const pan = (cx: number) => (
    <g>
      <line x1={cx} y1="96" x2={cx - 46} y2="158" stroke={K.sec} strokeWidth="1.4" />
      <line x1={cx} y1="96" x2={cx + 46} y2="158" stroke={K.sec} strokeWidth="1.4" />
      <path d={`M ${cx - 54} 158 L ${cx + 54} 158 L ${cx + 44} 166 L ${cx - 44} 166 Z`} fill={K.amber} />
    </g>
  );
  return (
    <g>
      <Mark x={120} y={34} size={15} weight="bold">2H₂ + O₂</Mark>
      <Mark x={120} y={62} size={14} fill={K.amber} weight="bold">4 g + 32 g</Mark>
      <Mark x={270} y={50} size={22} fill={K.sec} weight="bold">=</Mark>
      <Mark x={420} y={34} size={15} weight="bold">2H₂O</Mark>
      <Mark x={420} y={62} size={14} fill={K.amber} weight="bold">36 g</Mark>

      {/* Beam balance, level */}
      <line x1="120" y1="96" x2="420" y2="96" stroke={K.text} strokeWidth="5" strokeLinecap="round" />
      <line x1="270" y1="96" x2="270" y2="196" stroke={K.text} strokeWidth="5" />
      <path d="M 246 222 L 294 222 L 270 194 Z" fill={K.text} />
      <circle cx="270" cy="96" r="6" fill={K.amber} />
      {pan(120)}
      {pan(420)}
      <H2 x={88} y={150} />
      <H2 x={120} y={150} />
      <O2 x={152} y={147} />
      <H2O x={400} y={142} />
      <H2O x={442} y={142} />

      <FitLabel x={124} y={190} w={236} size={13} weight="bold" valign="top" fill={K.cyan}>
        {lbl.mreact || ''}
      </FitLabel>
      <FitLabel x={416} y={190} w={236} size={13} weight="bold" valign="top" fill={K.green}>
        {lbl.mprod || ''}
      </FitLabel>
      <FitLabel x={270} y={254} w={516} size={13} weight="bold" wrap={false} fill={K.text}>
        {lbl.balance || ''}
      </FitLabel>
      <FitLabel x={270} y={280} w={516} size={13} weight={600} wrap={false} fill={K.sec}>
        {lbl.ratio || ''}
      </FitLabel>
    </g>
  );
}

/** u06: the mole as the hub between mass, number of particles and gas volume. */
function renderMoleMap(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  const M = lang === 'tr' || lang === 'ku' ? 'MA' : 'M';
  const node = (x: number, y: number, text: string, color: string) => (
    <g>
      <rect x={x} y={y} width="112" height="48" rx="10" fill="rgba(255,255,255,0.05)" stroke={color} strokeWidth="2" />
      <Mark x={x + 56} y={y + 30} size={16} fill={color} weight="bold">{text}</Mark>
    </g>
  );
  return (
    <g>
      <FitLabel x={270} y={24} w={300} size={13} weight="bold" wrap={false} fill={K.amber}>
        {lbl.mol || ''}
      </FitLabel>
      <circle cx="270" cy="88" r="38" fill="rgba(246,183,60,0.14)" stroke={K.amber} strokeWidth="2.5" />
      <Mark x={270} y={95} size={18} fill={K.amber} weight="bold">n (mol)</Mark>

      {node(14, 64, 'm (g)', K.cyan)}
      <Arrow x1={130} y1={78} x2={228} y2={78} color={K.cyan} width={2.2} />
      <Arrow x1={228} y1={100} x2={130} y2={100} color={K.cyan} width={2.2} />
      <Mark x={179} y={70} size={13} fill={K.cyan} weight="bold">{`÷ ${M}`}</Mark>
      <Mark x={179} y={119} size={13} fill={K.cyan} weight="bold">{`× ${M}`}</Mark>

      {node(414, 64, 'N', K.green)}
      <Arrow x1={312} y1={78} x2={410} y2={78} color={K.green} width={2.2} />
      <Arrow x1={410} y1={100} x2={312} y2={100} color={K.green} width={2.2} />
      <Mark x={361} y={70} size={13} fill={K.green} weight="bold">× Nₐ</Mark>
      <Mark x={361} y={119} size={13} fill={K.green} weight="bold">÷ Nₐ</Mark>

      {node(214, 178, 'V (L)', K.ruby)}
      <Arrow x1={258} y1={130} x2={258} y2={174} color={K.ruby} width={2.2} />
      <Arrow x1={282} y1={174} x2={282} y2={130} color={K.ruby} width={2.2} />
      <Mark x={248} y={158} size={13} anchor="end" fill={K.ruby} weight="bold">{dec(lang, '× 22.4')}</Mark>
      <Mark x={292} y={158} size={13} anchor="start" fill={K.ruby} weight="bold">{dec(lang, '÷ 22.4')}</Mark>

      <FitLabel x={70} y={134} w={136} size={13} weight="bold" valign="top" fill={K.cyan}>
        {lbl.ma || ''}
      </FitLabel>
      <FitLabel x={470} y={134} w={136} size={13} weight="bold" valign="top" fill={K.green}>
        {lbl.na || ''}
      </FitLabel>
      <FitLabel x={270} y={252} w={516} size={13} weight="bold" valign="top" fill={K.ruby}>
        {lbl.vmol || ''}
      </FitLabel>
    </g>
  );
}

/** u07: 4 H₂ + 3 O₂ → 4 H₂O + 1 O₂ left over: H₂ runs out first (limiting), O₂ is in excess. */
function renderLimitingReagent(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  const w = figureWords14(lang);
  const frame = (x: number) => <rect x={x} y="42" width="226" height="128" rx="12" fill="rgba(255,255,255,0.04)" stroke={K.sec} strokeWidth="1.5" />;
  return (
    <g>
      <FitLabel x={270} y={26} w={516} size={14} weight="bold" wrap={false} fill={K.text}>
        {lbl.comb || '2H₂ + O₂ → 2H₂O'}
      </FitLabel>
      {frame(14)}
      <H2 x={50} y={72} />
      <H2 x={104} y={66} />
      <H2 x={58} y={134} />
      <H2 x={112} y={142} />
      <O2 x={176} y={68} />
      <O2 x={200} y={112} />
      <O2 x={164} y={146} />
      <Arrow x1={246} y1={106} x2={294} y2={106} color={K.amber} width={3} head={10} />
      {frame(300)}
      <H2O x={336} y={66} />
      <H2O x={400} y={62} />
      <H2O x={344} y={132} />
      <H2O x={412} y={136} />
      <O2 x={480} y={100} />
      <circle cx="480" cy="100" r="26" fill="none" stroke={K.ruby} strokeWidth="1.6" strokeDasharray="4 3" />

      <FitLabel x={127} y={192} w={226} size={13} weight="bold" wrap={false} fill={K.sec}>
        {`${w.before}: 4 H₂ + 3 O₂`}
      </FitLabel>
      <FitLabel x={413} y={192} w={226} size={13} weight="bold" wrap={false} fill={K.sec}>
        {`${w.after}: 4 H₂O + 1 O₂`}
      </FitLabel>
      <FitLabel x={135} y={220} w={256} size={13} weight="bold" valign="top" fill={K.cyan}>
        {lbl.limit || ''}
      </FitLabel>
      <FitLabel x={405} y={220} w={256} size={13} weight="bold" valign="top" fill={K.ruby}>
        {lbl.excess || ''}
      </FitLabel>
      <FitLabel x={270} y={284} w={516} size={13} weight={600} wrap={false} fill={K.amber}>
        {lbl.yield || ''}
      </FitLabel>
    </g>
  );
}

/** u07: AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq); Na⁺ and NO₃⁻ stay in solution as spectators. */
function renderNetIonic(spec: QuestionDiagramSpec, _lang: LanguageCode) {
  const lbl = spec.labels || {};
  const legend: [string, string, number][] = [
    ['Ag⁺', 'white', 60],
    ['NO₃⁻', 'blue', 172],
    ['Na⁺', 'violet', 300],
    ['Cl⁻', 'green', 412],
  ];
  return (
    <g>
      <Mark x={76} y={24} size={14} weight="bold">AgNO₃</Mark>
      <Beaker x={20} y={36} w={112} h={126} fill={WATER} />
      <Ion x={50} y={84} tone="white" sign="+" />
      <Ion x={98} y={74} tone="blue" sign="−" />
      <Ion x={88} y={120} tone="white" sign="+" />
      <Ion x={46} y={134} tone="blue" sign="−" />
      <Mark x={152} y={104} size={20} fill={K.sec} weight="bold">+</Mark>
      <Mark x={228} y={24} size={14} weight="bold">NaCl</Mark>
      <Beaker x={172} y={36} w={112} h={126} fill={WATER} />
      <Ion x={202} y={80} tone="violet" sign="+" />
      <Ion x={250} y={92} tone="green" sign="−" />
      <Ion x={236} y={136} tone="violet" sign="+" />
      <Ion x={198} y={124} tone="green" sign="−" />
      <Arrow x1={294} y1={100} x2={338} y2={100} color={K.amber} width={3} head={10} />

      <Beaker x={348} y={36} w={176} h={126} fill={WATER} />
      <path d="M 353 157 L 353 146 Q 384 130 420 140 Q 456 128 492 138 Q 510 140 519 148 L 519 157 Z" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="1.5" />
      <Mark x={436} y={155} size={12} fill="#0b1220" weight="bold">AgCl</Mark>
      <Ion x={380} y={78} tone="violet" sign="+" />
      <Ion x={436} y={66} tone="blue" sign="−" />
      <Ion x={490} y={84} tone="violet" sign="+" />
      <Ion x={408} y={110} tone="blue" sign="−" />

      {legend.map(([name, tone, x]) => (
        <g key={name}>
          <circle cx={x} cy={183} r="8" fill={`url(#dg-lit-${tone})`} filter="url(#dg-shadow)" />
          <Mark x={x + 14} y={188} anchor="start" weight="bold">{name}</Mark>
        </g>
      ))}

      <FitLabel x={270} y={216} w={516} size={13} weight="bold" wrap={false} fill={K.text}>
        {lbl.ppt || ''}
      </FitLabel>
      <FitLabel x={270} y={242} w={516} size={13} weight={600} wrap={false} fill={K.sec}>
        {[lbl.spec1, lbl.spec2].filter(Boolean).join('  ·  ')}
      </FitLabel>
      <FitLabel x={270} y={278} w={516} size={14} weight="bold" wrap={false} fill={K.amber}>
        {lbl.net || ''}
      </FitLabel>
    </g>
  );
}

/** u08: fractional distillation of an ethanol–water mixture. */
function renderFractionalDistillation(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  const w = figureWords14(lang);
  return (
    <g>
      {/* Heater and boiling flask */}
      <rect x="40" y="236" width="80" height="12" rx="3" fill={K.amber} />
      <path d="M 47.2 204 A 34 34 0 0 0 112.8 204 Z" fill="rgba(255,107,122,0.28)" />
      <path d="M 68 150 L 68 163.5 A 34 34 0 1 0 92 163.5 L 92 150" {...GLASS} />

      {/* Fractionating column with packing, thermometer at the top */}
      <path d="M 68 150 L 68 46 L 92 46 L 92 150" {...GLASS} />
      {Array.from({ length: 7 }, (_, i) => (
        <path key={i} d={`M 71 ${140 - i * 13} l 6 -6 l 6 6 l 6 -6`} fill="none" stroke={K.sec} strokeWidth="1.4" />
      ))}
      <line x1="80" y1="14" x2="80" y2="58" stroke={K.ruby} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="80" cy="60" r="4" fill={K.ruby} />
      <rect x="72" y="38" width="16" height="8" rx="2" fill={K.amber} />

      {/* Condenser: inner tube and water jacket (water in at the lower end, out at the upper end) */}
      <path d="M 147.3 91.6 L 156.7 67.4 L 292.2 119.3 L 282.8 143.5 Z" fill="rgba(96,165,250,0.2)" stroke={K.text} strokeWidth="2" strokeLinejoin="round" />
      <path d="M 92 52 L 97.4 54.3 L 340 147.4 L 340 170 M 92 62 L 94.6 61.7 L 333 153.1 L 333 170" {...GLASS} />
      <line x1="231.4" y1="123.8" x2="231.4" y2="142" stroke={K.text} strokeWidth="5" />
      <line x1="170.7" y1="72.7" x2="170.7" y2="56" stroke={K.text} strokeWidth="5" />
      <Arrow x1={231.4} y1={172} x2={231.4} y2={147} color={K.cyan} width={2.4} />
      <Arrow x1={170.7} y1={52} x2={170.7} y2={28} color={K.cyan} width={2.4} />
      <FitLabel x={180} y={36} w={120} size={12} anchor="start" weight="bold" wrap={false} fill={K.cyan}>
        {w.waterOut}
      </FitLabel>
      <FitLabel x={231} y={190} w={128} size={12} weight="bold" valign="top" fill={K.cyan}>
        {w.waterIn}
      </FitLabel>

      {/* Receiver */}
      <path d="M 311.3 212 L 364.7 212 L 373 230 Q 376 238 368 238 L 308 238 Q 300 238 303 230 Z" fill="rgba(45,217,195,0.3)" />
      <path d="M 324 162 L 324 182 L 303 230 Q 300 238 308 238 L 368 238 Q 376 238 373 230 L 352 182 L 352 162" {...GLASS} />
      <circle cx="336.5" cy="182" r="3" fill="url(#dg-lit-teal)" />

      <Leader x1={104} y1={110} x2={92} y2={110} color={K.text} />
      <FitLabel x={108} y={128} w={112} size={13} anchor="start" weight="bold" valign="top" fill={K.text}>
        {lbl.col || ''}
      </FitLabel>
      <Leader x1={300} y1={92} x2={262} y2={104} color={K.text} />
      <FitLabel x={304} y={90} w={230} size={13} anchor="start" weight="bold" valign="bottom" fill={K.text}>
        {lbl.cond || ''}
      </FitLabel>
      <Leader x1={386} y1={214} x2={362} y2={224} color={K.green} />
      <FitLabel x={390} y={214} w={146} size={13} anchor="start" weight="bold" fill={K.green}>
        {lbl.vap1 || ''}
      </FitLabel>
      <FitLabel x={8} y={272} w={300} size={13} anchor="start" weight="bold" valign="top" fill={K.ruby}>
        {lbl.vap2 || ''}
      </FitLabel>
    </g>
  );
}

/** u08: separatory funnel — the denser liquid (water) is the lower layer and is run off first. */
function renderSeparatoryFunnel(spec: QuestionDiagramSpec, _lang: LanguageCode) {
  const lbl = spec.labels || {};
  const tag = (y: number, tx: number, ty: number, color: string, text: string) => (
    <g>
      <Leader x1={286} y1={y - 4} x2={tx} y2={ty} color={color} />
      <FitLabel x={292} y={y} w={242} size={13} anchor="start" weight="bold" fill={color}>
        {text}
      </FitLabel>
    </g>
  );
  return (
    <g>
      <defs>
        <clipPath id="dg-clip-u08-funnel">
          <path d="M 194 40 C 150 58, 152 130, 195 170 L 205 170 C 248 130, 250 58, 206 40 Z" />
        </clipPath>
      </defs>
      {/* Stand with ring */}
      <rect x="96" y="268" width="170" height="8" rx="3" fill={K.sec} />
      <line x1="116" y1="20" x2="116" y2="268" stroke={K.sec} strokeWidth="5" strokeLinecap="round" />
      <line x1="116" y1="126" x2="166" y2="126" stroke={K.sec} strokeWidth="4" />
      <ellipse cx="200" cy="126" rx="36" ry="5" fill="none" stroke={K.sec} strokeWidth="3" />

      <g clipPath="url(#dg-clip-u08-funnel)">
        <rect x="150" y="62" width="100" height="50" fill="rgba(246,183,60,0.45)" />
        <rect x="150" y="112" width="100" height="60" fill="rgba(96,165,250,0.32)" />
      </g>
      <path d="M 194 26 L 194 40 C 150 58, 152 130, 195 170 L 195 214 M 206 26 L 206 40 C 250 58, 248 130, 205 170 L 205 214" {...GLASS} />
      <rect x="191" y="14" width="18" height="12" rx="2" fill={K.amber} />
      <rect x="183" y="186" width="34" height="7" rx="2" fill={K.amber} />
      <rect x="217" y="181" width="6" height="17" rx="2" fill={K.amber} />
      <circle cx="200" cy="224" r="3" fill="url(#dg-lit-blue)" />

      <rect x="170" y="250" width="60" height="16" rx="3" fill="rgba(96,165,250,0.32)" />
      <path d="M 168 232 L 168 262 Q 168 268 174 268 L 226 268 Q 232 268 232 262 L 232 232" {...GLASS} />

      {tag(84, 226, 86, K.amber, lbl.top || '')}
      {tag(140, 222, 140, K.cyan, lbl.bot || '')}
      {tag(194, 226, 190, K.text, lbl.valve || '')}
      {tag(252, 236, 254, K.green, lbl.flask || '')}
    </g>
  );
}

/** u09: the pH scale at 25 °C with the acidic, neutral and basic regions. */
function renderPhScale(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  const w = figureWords14(lang);
  const colors = ['#d7263d', '#e03a2f', '#e85d2a', '#f08a24', '#f2b01e', '#e9d21f', '#b9d532', '#5fbf4a', '#2fae7a', '#2a9aa8', '#2b7fc4', '#3564c8', '#4a4fc0', '#5b3fb0', '#5a2d91'];
  return (
    <g>
      <FitLabel x={270} y={26} w={300} size={13} weight="bold" wrap={false} fill={K.green}>
        {lbl.neutral || ''}
      </FitLabel>
      <Mark x={128} y={58} size={13} fill={K.ruby} weight="bold">[H⁺] &gt; [OH⁻]</Mark>
      <Mark x={270} y={58} size={13} fill={K.green} weight="bold">[H⁺] = [OH⁻]</Mark>
      <Mark x={412} y={58} size={13} fill={K.cyan} weight="bold">[H⁺] &lt; [OH⁻]</Mark>
      <line x1="270" y1="68" x2="270" y2="96" stroke={K.green} strokeWidth="1.6" />
      <FitLabel x={128} y={88} w={200} size={13} weight="bold" wrap={false} fill={K.ruby}>
        {lbl.acid || ''}
      </FitLabel>
      <FitLabel x={412} y={88} w={200} size={13} weight="bold" wrap={false} fill={K.cyan}>
        {lbl.base || ''}
      </FitLabel>

      {colors.map((c, i) => (
        <g key={i}>
          <rect x={30 + i * 32} y="98" width="32" height="32" fill={c} />
          <Mark x={46 + i * 32} y={150} size={12} fill={i === 7 ? K.green : K.sec} weight="bold">{String(i)}</Mark>
        </g>
      ))}
      <rect x="30" y="98" width="480" height="32" rx="4" fill="none" stroke={K.text} strokeWidth="1.5" />
      <rect x="254" y="96" width="32" height="36" rx="3" fill="none" stroke={K.text} strokeWidth="2.5" />

      {/* Litmus paper in each region */}
      <rect x="34" y="168" width="14" height="30" rx="2" fill="#e5484d" stroke={K.text} strokeWidth="1" />
      <FitLabel x={58} y={188} w={190} size={13} anchor="start" weight="bold" wrap={false} fill={K.ruby}>
        {w.litmusRed}
      </FitLabel>
      <rect x="492" y="168" width="14" height="30" rx="2" fill="#3b82f6" stroke={K.text} strokeWidth="1" />
      <FitLabel x={482} y={188} w={190} size={13} anchor="end" weight="bold" wrap={false} fill={K.cyan}>
        {w.litmusBlue}
      </FitLabel>

      <Mark x={270} y={240} size={17} fill={K.amber} weight="bold">H⁺ + OH⁻ → H₂O</Mark>
      <FitLabel x={270} y={276} w={516} size={13} weight={600} wrap={false} fill={K.text}>
        {lbl.hplus || ''}
      </FitLabel>
    </g>
  );
}

/** Reaction rows: equation on top, what it shows underneath (same layout as the u24 Tollens figure). */
function reactionRows(rows: [string, string, string][]) {
  return (
    <g>
      {rows.map(([eq, label, color], i) => (
        <g key={i}>
          <rect x="12" y={8 + i * 72} width="516" height="64" rx="10" fill="rgba(255,255,255,0.04)" stroke={color} strokeWidth="1.2" opacity="0.9" />
          <FitLabel x={270} y={34 + i * 72} w={496} size={15} weight="bold" wrap={false} fill={K.text}>
            {eq}
          </FitLabel>
          <FitLabel x={270} y={58 + i * 72} w={496} size={13} weight="bold" wrap={false} fill={color}>
            {label}
          </FitLabel>
        </g>
      ))}
    </g>
  );
}

/** u09: which gas a metal gives with an acid (or an amphoteric metal with a strong base). */
function renderMetalAcidGases(spec: QuestionDiagramSpec, _lang: LanguageCode) {
  const lbl = spec.labels || {};
  return reactionRows([
    ['Zn + 2HCl → ZnCl₂ + H₂↑', lbl.active || '', K.cyan],
    ['Cu + 4HNO₃ → Cu(NO₃)₂ + 2NO₂↑ + 2H₂O', lbl.cu_conc || '', K.amber],
    ['3Cu + 8HNO₃ → 3Cu(NO₃)₂ + 2NO↑ + 4H₂O', lbl.cu_dil || '', K.ruby],
    ['Zn + 2NaOH → Na₂ZnO₂ + H₂↑', lbl.amph || '', K.green],
  ]);
}

/** u10: soap micelle in water — hydrophobic tails in the grease droplet, hydrophilic heads in the water. */
function renderSoapMicelle(spec: QuestionDiagramSpec, _lang: LanguageCode) {
  const lbl = spec.labels || {};
  const cx = 150;
  const cy = 148;
  const n = 14;
  const soaps = Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2 - 0.35;
    const ux = Math.cos(a);
    const uy = Math.sin(a);
    const pts: string[] = [];
    for (let k = 0; k <= 6; k++) {
      const r = 34 + k * 7.4;
      const side = k === 0 || k === 6 ? 0 : k % 2 === 0 ? 3.2 : -3.2;
      pts.push(`${r1(cx + ux * r - uy * side)} ${r1(cy + uy * r + ux * side)}`);
    }
    return { d: `M ${pts.join(' L ')}`, hx: r1(cx + ux * 87), hy: r1(cy + uy * 87) };
  });
  const tag = (y: number, tx: number, ty: number, color: string, text: string) => (
    <g>
      <Leader x1={314} y1={y - 4} x2={tx} y2={ty} color={color} />
      <FitLabel x={320} y={y} w={214} size={13} anchor="start" weight="bold" fill={color}>
        {text}
      </FitLabel>
    </g>
  );
  return (
    <g>
      <rect x="10" y="14" width="284" height="272" rx="18" fill="rgba(96,165,250,0.14)" stroke="rgba(96,165,250,0.4)" strokeWidth="1.2" />
      <circle cx={cx} cy={cy} r="36" fill="url(#dg-lit-gold)" filter="url(#dg-shadow)" opacity="0.92" />
      {soaps.map((s, i) => (
        <g key={i}>
          <path d={s.d} fill="none" stroke={K.amber} strokeWidth="2.2" strokeLinejoin="round" />
          <circle cx={s.hx} cy={s.hy} r="8" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" />
        </g>
      ))}
      {tag(64, soaps[13].hx + 6, soaps[13].hy - 4, K.cyan, lbl.head || '')}
      {tag(124, soaps[0].hx - 26, soaps[0].hy + 9, K.amber, lbl.tail || '')}
      {tag(184, cx + 22, cy + 12, K.text, lbl.dirt || '')}
      {tag(244, 268, 252, K.sec, lbl.water || '')}
    </g>
  );
}

/** u10: addition polymerisation — the C=C bond of each monomer opens and the units join into a chain. */
function renderPolymerization(spec: QuestionDiagramSpec, _lang: LanguageCode) {
  const lbl = spec.labels || {};
  const row = (y: number, color: string, eq: string, label: string) => (
    <g>
      <rect x="12" y={y} width="516" height="70" rx="10" fill="rgba(255,255,255,0.04)" stroke={color} strokeWidth="1.2" />
      <FitLabel x={270} y={y + 28} w={496} size={15} weight="bold" wrap={false} fill={K.text}>
        {eq}
      </FitLabel>
      <FitLabel x={270} y={y + 56} w={496} size={13} weight="bold" wrap={false} fill={color}>
        {label}
      </FitLabel>
    </g>
  );
  return (
    <g>
      {/* Separate monomers (C=C) → one chain (C–C–C–…) */}
      {[34, 86, 138, 190].map((mx) => (
        <g key={mx}>
          <line x1={mx} y1="20" x2={mx + 22} y2="20" stroke="#93A1B5" strokeWidth="2.4" />
          <line x1={mx} y1="26" x2={mx + 22} y2="26" stroke="#93A1B5" strokeWidth="2.4" />
          <circle cx={mx} cy="23" r="8" fill="url(#dg-lit-slate)" filter="url(#dg-shadow)" />
          <circle cx={mx + 22} cy="23" r="8" fill="url(#dg-lit-slate)" filter="url(#dg-shadow)" />
        </g>
      ))}
      <Arrow x1={232} y1={23} x2={270} y2={23} color={K.amber} width={3} head={10} />
      <path d={`M ${Array.from({ length: 9 }, (_, i) => `${290 + i * 28} ${i % 2 === 0 ? 28 : 18}`).join(' L ')}`} fill="none" stroke="#93A1B5" strokeWidth="3" />
      {Array.from({ length: 9 }, (_, i) => (
        <circle key={i} cx={290 + i * 28} cy={i % 2 === 0 ? 28 : 18} r="8" fill="url(#dg-lit-slate)" filter="url(#dg-shadow)" />
      ))}
      <FitLabel x={124} y={56} w={236} size={13} weight="bold" valign="top" fill={K.cyan}>
        {lbl.mono || ''}
      </FitLabel>
      <FitLabel x={402} y={56} w={256} size={13} weight="bold" valign="top" fill={K.cyan}>
        {lbl.poly || ''}
      </FitLabel>
      <FitLabel x={270} y={112} w={516} size={15} weight="bold" wrap={false} fill={K.cyan}>
        {'n CH₂=CH₂ → –[CH₂–CH₂]ₙ–'}
      </FitLabel>
      {row(126, K.amber, 'n CH₂=CHCl → –[CH₂–CHCl]ₙ–', lbl.pvc || '')}
      {row(206, K.green, 'n CF₂=CF₂ → –[CF₂–CF₂]ₙ–', lbl.teflon || '')}
    </g>
  );
}

/** u12: a gas under a freely moving piston, Boyle's P–V curve and Charles's V–T line through 0 K. */
function renderGasLaws(spec: QuestionDiagramSpec, _lang: LanguageCode) {
  const lbl = spec.labels || {};
  const boyle = Array.from({ length: 24 }, (_, i) => {
    const v = 0.17 + (i / 23) * 0.83;
    return `${r1(196 + v * 132)} ${r1(190 - (0.17 / v) * 128)}`;
  });
  const under = (x: number, text: string, color: string) => (
    <FitLabel x={x} y={214} w={170} size={13} weight="bold" valign="top" fill={color}>
      {text}
    </FitLabel>
  );
  return (
    <g>
      {/* Cylinder with a movable piston */}
      <path d="M 40 52 L 40 192 L 124 192 L 124 52" {...GLASS} />
      <rect x="42" y="106" width="80" height="12" rx="2" fill={K.amber} />
      <rect x="77" y="62" width="10" height="44" fill={K.amber} />
      <rect x="62" y="52" width="40" height="12" rx="3" fill={K.sec} />
      {[
        [58, 140],
        [98, 134],
        [80, 162],
        [108, 174],
        [54, 178],
      ].map(([px, py], i) => (
        <circle key={i} cx={px} cy={py} r="4.5" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className={`anim-bounce-${(i % 3) + 1}`} />
      ))}
      {under(84, lbl.piston || '', K.amber)}

      {/* Boyle: P against V at constant T and n */}
      <Axes x0={196} y0={190} x1={346} y1={50} />
      <Mark x={188} y={64} anchor="end" fill={K.mut}>P</Mark>
      <Mark x={344} y={207} anchor="end" fill={K.mut}>V</Mark>
      <path d={`M ${boyle.join(' L ')}`} fill="none" stroke={K.cyan} strokeWidth="3.2" />
      {under(266, lbl.boyle || '', K.cyan)}

      {/* Charles: V against T in kelvin at constant P and n — a straight line through the origin */}
      <Axes x0={386} y0={190} x1={534} y1={50} />
      <Mark x={378} y={64} anchor="end" fill={K.mut}>V</Mark>
      <Mark x={532} y={207} anchor="end" fill={K.mut}>T (K)</Mark>
      <Mark x={382} y={207} anchor="end" fill={K.mut}>0</Mark>
      <line x1="386" y1="190" x2="422" y2="158.4" stroke={K.ruby} strokeWidth="2" strokeDasharray="4 4" />
      <line x1="422" y1="158.4" x2="516" y2="76" stroke={K.ruby} strokeWidth="3.2" />
      {under(452, lbl.charles || '', K.ruby)}

      <FitLabel x={270} y={282} w={516} size={13} weight="bold" wrap={false} fill={K.text}>
        {lbl.rconst || ''}
      </FitLabel>
    </g>
  );
}

/** U-tube drawn as a hollow glass tube with mercury in it. */
const UTube: React.FC<{ path: string; mercury: string }> = ({ path, mercury }) => (
  <g fill="none">
    <path d={path} stroke={K.text} strokeWidth="14" strokeLinejoin="round" />
    <path d={path} stroke="#0d1626" strokeWidth="10" strokeLinejoin="round" />
    <path d={mercury} stroke="#c3ccd9" strokeWidth="10" />
  </g>
);

/** u12: closed-end manometer (Pgas = h) and open-end manometer (Pgas = P0 + h, gas-side level lower). */
function renderManometers(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  const w = figureWords14(lang);
  const bulb = (cx: number) => (
    <g>
      <circle cx={cx} cy="92" r="34" fill="rgba(45,217,195,0.12)" stroke={K.text} strokeWidth="2.2" />
      {[
        [-12, -10],
        [10, -14],
        [14, 10],
        [-8, 12],
        [0, -2],
      ].map(([dx, dy], i) => (
        <circle key={i} cx={cx + dx} cy={92 + dy} r="4" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" className={`anim-bounce-${(i % 3) + 1}`} />
      ))}
      <FitLabel x={cx} y={146} w={116} size={13} weight="bold" valign="top" fill={K.cyan}>
        {lbl.gas || ''}
      </FitLabel>
    </g>
  );
  const span = (x: number, y1: number, y2: number) => (
    <g>
      <line x1={x - 8} y1={y1} x2={x + 8} y2={y1} stroke={K.amber} strokeWidth="1.5" />
      <line x1={x - 8} y1={y2} x2={x + 8} y2={y2} stroke={K.amber} strokeWidth="1.5" />
      <Arrow x1={x} y1={y1 + 1} x2={x} y2={y2 - 1} color={K.amber} both head={6} width={1.6} />
      <Mark x={x + 10} y={(y1 + y2) / 2 + 5} anchor="start" fill={K.amber} weight="bold">h</Mark>
    </g>
  );
  return (
    <g>
      {/* Closed end: vacuum above the mercury in the far arm */}
      {bulb(62)}
      <UTube path="M 95 92 L 138 92 L 138 196 A 24 24 0 0 0 186 196 L 186 58" mercury="M 138 180 L 138 196 A 24 24 0 0 0 186 196 L 186 112" />
      <rect x="177" y="50" width="18" height="9" rx="3" fill={K.text} />
      {span(206, 112, 180)}
      <FitLabel x={186} y={40} w={110} size={12} weight="bold" wrap={false} fill={K.sec}>
        {w.vacuum}
      </FitLabel>
      <FitLabel x={136} y={250} w={256} size={13} weight="bold" wrap={false} fill={K.text}>
        {w.closedEq}
      </FitLabel>

      <line x1="270" y1="14" x2="270" y2="262" stroke={K.line} strokeWidth="1" />

      {/* Open end: the atmosphere presses on the far arm */}
      {bulb(336)}
      <UTube path="M 369 92 L 412 92 L 412 196 A 24 24 0 0 0 460 196 L 460 52" mercury="M 412 180 L 412 196 A 24 24 0 0 0 460 196 L 460 124" />
      {span(480, 124, 180)}
      <Arrow x1={460} y1={28} x2={460} y2={50} color={K.ruby} width={2.4} />
      <FitLabel x={452} y={20} w={170} size={13} weight="bold" wrap={false} fill={K.ruby}>
        {lbl.p0 || ''}
      </FitLabel>
      <FitLabel x={404} y={250} w={256} size={13} weight="bold" wrap={false} fill={K.text}>
        {lbl.eq || ''}
      </FitLabel>

      <FitLabel x={270} y={284} w={516} size={13} weight={600} wrap={false} fill={K.amber}>
        {lbl.hdiff || ''}
      </FitLabel>
    </g>
  );
}

/** u13: CH₄ (16 g/mol) moves twice as fast as SO₂ (64 g/mol); they meet two thirds of the way along the tube. */
function renderGrahamDiffusion(spec: QuestionDiagramSpec, _lang: LanguageCode) {
  const lbl = spec.labels || {};
  const light = [84, 118, 150, 186, 222, 258, 292, 322];
  const heavy = [366, 402, 436, 462];
  return (
    <g>
      <FitLabel x={196} y={72} w={272} size={13} weight="bold" valign="bottom" fill={K.cyan}>
        {lbl.ch4 || ''}
      </FitLabel>
      <FitLabel x={414} y={72} w={156} size={13} weight="bold" valign="bottom" fill={K.amber}>
        {lbl.so2 || ''}
      </FitLabel>

      <rect x="60" y="88" width="420" height="44" rx="10" fill="rgba(255,255,255,0.05)" stroke={K.text} strokeWidth="2.2" />
      {light.map((px, i) => (
        <circle key={px} cx={px} cy={i % 2 === 0 ? 102 : 119} r="4.5" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" />
      ))}
      {heavy.map((px, i) => (
        <circle key={px} cx={px} cy={i % 2 === 0 ? 118 : 102} r="8" fill="url(#dg-lit-gold)" filter="url(#dg-shadow)" />
      ))}
      <line x1="340" y1="82" x2="340" y2="160" stroke={K.text} strokeWidth="1.6" strokeDasharray="4 3" />
      <Arrow x1={16} y1={110} x2={54} y2={110} color={K.cyan} width={3} head={10} />
      <Arrow x1={524} y1={110} x2={486} y2={110} color={K.amber} width={3} head={10} />

      <Arrow x1={62} y1={152} x2={338} y2={152} color={K.cyan} both head={7} />
      <Mark x={200} y={174} fill={K.cyan} weight="bold">2x</Mark>
      <Arrow x1={342} y1={152} x2={478} y2={152} color={K.amber} both head={7} />
      <Mark x={410} y={174} fill={K.amber} weight="bold">x</Mark>

      <FitLabel x={270} y={222} w={516} size={14} weight="bold" wrap={false} fill={K.text}>
        {lbl.vratio || ''}
      </FitLabel>
      <FitLabel x={270} y={262} w={516} size={13} weight={600} fill={K.sec}>
        {lbl.temp || ''}
      </FitLabel>
    </g>
  );
}

/** u13: partial pressures add up; a gas collected over water also contains water vapour. */
function renderDaltonPartial(spec: QuestionDiagramSpec, _lang: LanguageCode) {
  const lbl = spec.labels || {};
  const box = (x: number, a: [number, number][], b: [number, number][]) => (
    <g>
      <rect x={x} y="34" width="72" height="84" rx="8" fill="rgba(255,255,255,0.05)" stroke={K.text} strokeWidth="2" />
      {a.map(([dx, dy], i) => (
        <circle key={`a${i}`} cx={x + dx} cy={34 + dy} r="5" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" />
      ))}
      {b.map(([dx, dy], i) => (
        <circle key={`b${i}`} cx={x + dx} cy={34 + dy} r="5" fill="url(#dg-lit-gold)" filter="url(#dg-shadow)" />
      ))}
    </g>
  );
  const A: [number, number][] = [[18, 20], [50, 30], [30, 54], [56, 66]];
  const B: [number, number][] = [[40, 16], [16, 40], [54, 48]];
  return (
    <g>
      {box(12, A, [])}
      <Mark x={98} y={82} size={18} fill={K.sec} weight="bold">+</Mark>
      {box(112, [], B)}
      <Arrow x1={190} y1={76} x2={212} y2={76} color={K.amber} width={2.6} />
      {box(218, A, B.map(([dx, dy]) => [dx - 6, dy + 14] as [number, number]))}
      <Mark x={48} y={140} fill={K.cyan} weight="bold">P₁</Mark>
      <Mark x={148} y={140} fill={K.amber} weight="bold">P₂</Mark>
      <Mark x={254} y={140} fill={K.text} weight="bold">P₁ + P₂</Mark>
      <FitLabel x={150} y={176} w={284} size={13} weight="bold" wrap={false} fill={K.text}>
        {lbl.ptop || ''}
      </FitLabel>
      <FitLabel x={150} y={204} w={284} size={13} weight="bold" wrap={false} fill={K.cyan}>
        {lbl.molefrac || ''}
      </FitLabel>

      <line x1="304" y1="14" x2="304" y2="262" stroke={K.line} strokeWidth="1" />

      {/* Gas collected over water */}
      <rect x="326" y="150" width="200" height="56" fill={WATER} />
      <rect x="401" y="96" width="48" height="110" fill={WATER} />
      <path d="M 324 132 L 324 206 L 528 206 L 528 132" {...GLASS} />
      <path d="M 400 196 L 400 30 Q 400 22 408 22 L 442 22 Q 450 22 450 30 L 450 196" {...GLASS} />
      <path d="M 312 60 L 352 60 L 352 190 Q 352 198 360 198 L 425 198 L 425 184" fill="none" stroke={K.sec} strokeWidth="4" strokeLinejoin="round" />
      {[
        [414, 44],
        [434, 58],
        [418, 76],
        [437, 84],
      ].map(([px, py], i) => (
        <circle key={i} cx={px} cy={py} r="5" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" />
      ))}
      <circle cx="425" cy="170" r="4" fill="none" stroke={K.text} strokeWidth="1.5" className="anim-rise-1" />
      <circle cx="425" cy="150" r="3" fill="none" stroke={K.text} strokeWidth="1.5" className="anim-rise-2" />
      <FitLabel x={424} y={230} w={224} size={13} weight="bold" valign="top" fill={K.text}>
        {lbl.water || ''}
      </FitLabel>

      <FitLabel x={150} y={250} w={284} size={13} weight={600} fill={K.sec}>
        {lbl.jt || ''}
      </FitLabel>
    </g>
  );
}

/** Stack of formula rows on the right of a drawing (same look as the u20 Kçç rows). */
function formulaRows(rows: [string, string][], y0: number, step: number, h: number) {
  return (
    <g>
      {rows.map(([text, color], i) => (
        <g key={i}>
          <rect x="196" y={y0 + i * step} width="334" height={h} rx="10" fill="rgba(255,255,255,0.05)" stroke={color} strokeWidth="1.5" />
          <FitLabel x={363} y={y0 + i * step + h / 2 + 5} w={318} size={14} weight="bold" fill={color}>
            {text}
          </FitLabel>
        </g>
      ))}
    </g>
  );
}

/** u14: a volumetric flask filled to the mark, and the concentration formulas. */
function renderConcentrationUnits(spec: QuestionDiagramSpec, lang: LanguageCode) {
  const lbl = spec.labels || {};
  return (
    <g>
      <path d="M 87 76 L 87 124 C 30 144, 26 226, 58 246 L 132 246 C 164 226, 160 144, 103 124 L 103 76 Z" fill="rgba(45,217,195,0.22)" />
      <path d="M 86 30 L 86 124 C 30 144, 26 226, 58 246 L 132 246 C 164 226, 160 144, 104 124 L 104 30" {...GLASS} />
      <rect x="82" y="16" width="26" height="14" rx="3" fill={K.amber} />
      <line x1="80" y1="76" x2="110" y2="76" stroke={K.ruby} strokeWidth="2.6" />
      <Arrow x1={142} y1={76} x2={115} y2={76} color={K.ruby} head={6} width={1.6} />
      <Mark x={146} y={81} anchor="start" fill={K.ruby} weight="bold">{dec(lang, '1.00 L')}</Mark>
      <Mark x={95} y={200} size={15} fill={K.text} weight="bold">V</Mark>
      {formulaRows(
        [
          [lbl.molar || '', K.cyan],
          [lbl.molal || '', K.green],
          [lbl.dens || '', K.amber],
          [lbl.mix || '', K.ruby],
        ],
        12,
        70,
        60
      )}
    </g>
  );
}

/** u14: 1 M Al₂(SO₄)₃ gives 2 M Al³⁺ and 3 M SO₄²⁻ — 5 M ions in total. */
function renderIonConcentrations(spec: QuestionDiagramSpec, _lang: LanguageCode) {
  const lbl = spec.labels || {};
  return (
    <g>
      <Beaker x={20} y={36} w={152} h={186} fill={WATER} />
      {[
        [62, 92],
        [124, 150],
      ].map(([px, py], i) => (
        <circle key={`a${i}`} cx={px} cy={py} r="11" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" />
      ))}
      {[
        [122, 84],
        [56, 150],
        [92, 190],
      ].map(([px, py], i) => (
        <circle key={`s${i}`} cx={px} cy={py} r="15" fill="url(#dg-lit-ruby)" filter="url(#dg-shadow)" />
      ))}
      <circle cx="26" cy="250" r="8" fill="url(#dg-lit-teal)" filter="url(#dg-shadow)" />
      <Mark x={40} y={255} anchor="start" weight="bold">Al³⁺</Mark>
      <circle cx="106" cy="250" r="9" fill="url(#dg-lit-ruby)" filter="url(#dg-shadow)" />
      <Mark x={121} y={255} anchor="start" weight="bold">SO₄²⁻</Mark>

      <rect x="196" y="10" width="334" height="82" rx="10" fill="rgba(255,255,255,0.05)" stroke={K.text} strokeWidth="1.5" />
      <FitLabel x={363} y={40} w={318} size={14} weight="bold" wrap={false} fill={K.text}>
        {lbl.salt || ''}
      </FitLabel>
      <FitLabel x={363} y={72} w={318} size={14} weight="bold" wrap={false} fill={K.sec}>
        {'Al₂(SO₄)₃ → 2Al³⁺ + 3SO₄²⁻'}
      </FitLabel>
      {formulaRows(
        [
          [lbl.al || '', K.cyan],
          [lbl.so4 || '', K.ruby],
          [lbl.total || '', K.amber],
        ],
        102,
        62,
        52
      )}
    </g>
  );
}

// Words the u01–u14 figures need beyond their spec labels.
type FigureWord14 = 'waterIn' | 'waterOut' | 'before' | 'after' | 'litmusRed' | 'litmusBlue' | 'vacuum' | 'closedEq';

const FIGURE_WORDS_14: Record<LanguageCode, Record<FigureWord14, string>> = {
  tr: { waterIn: 'Soğuk su girişi', waterOut: 'Su çıkışı', before: 'Önce', after: 'Sonra', litmusRed: 'Turnusol: kırmızı', litmusBlue: 'Turnusol: mavi', vacuum: 'Boşluk', closedEq: 'Kapalı uç: Pgaz = h' },
  en: { waterIn: 'Cold water in', waterOut: 'Water out', before: 'Before', after: 'After', litmusRed: 'Litmus: red', litmusBlue: 'Litmus: blue', vacuum: 'Vacuum', closedEq: 'Closed end: Pgas = h' },
  de: { waterIn: 'Kühlwasser ein', waterOut: 'Wasser aus', before: 'Vorher', after: 'Nachher', litmusRed: 'Lackmus: rot', litmusBlue: 'Lackmus: blau', vacuum: 'Vakuum', closedEq: 'Geschlossen: PGas = h' },
  fr: { waterIn: "Entrée d'eau froide", waterOut: "Sortie d'eau", before: 'Avant', after: 'Après', litmusRed: 'Tournesol : rouge', litmusBlue: 'Tournesol : bleu', vacuum: 'Vide', closedEq: 'Tube fermé : Pgaz = h' },
  ru: { waterIn: 'Вход холодной воды', waterOut: 'Выход воды', before: 'До', after: 'После', litmusRed: 'Лакмус: красный', litmusBlue: 'Лакмус: синий', vacuum: 'Вакуум', closedEq: 'Закрытый: Pгаза = h' },
  ar: { waterIn: 'دخول الماء البارد', waterOut: 'خروج الماء', before: 'قبل', after: 'بعد', litmusRed: 'عباد الشمس: أحمر', litmusBlue: 'عباد الشمس: أزرق', vacuum: 'فراغ', closedEq: 'طرف مغلق: Pgas = h' },
  zh: { waterIn: '冷水进口', waterOut: '出水口', before: '反应前', after: '反应后', litmusRed: '石蕊：红色', litmusBlue: '石蕊：蓝色', vacuum: '真空', closedEq: '闭口：P气 = h' },
  ku: { waterIn: 'Ketina ava sar', waterOut: 'Derketina avê', before: 'Berê', after: 'Piştî', litmusRed: 'Turnusol: sor', litmusBlue: 'Turnusol: şîn', vacuum: 'Valahî', closedEq: 'Serê girtî: Pgaz = h' },
};

const figureWords14 = (lang: LanguageCode) => FIGURE_WORDS_14[lang] ?? FIGURE_WORDS_14.tr;


// ---------------------------------------------------------------------------
// Embedded CSS Keyframes for High-Performance GPU SVG Animations
// ---------------------------------------------------------------------------
const DIAGRAM_KEYFRAMES = `
  @keyframes spinFast {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes spinMed {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes spinSlow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  @keyframes pulseGlow {
    0%, 100% { opacity: 0.8; transform: scale(1); }
    50% { opacity: 1; transform: scale(1.08); }
  }
  @keyframes floatY {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
  }
  @keyframes bounce1 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(4px, -6px); }
  }
  @keyframes bounce2 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(-5px, 4px); }
  }
  @keyframes bounce3 {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(3px, 5px); }
  }
  @keyframes dripDrop {
    0% { transform: translateY(0); opacity: 1; }
    80% { transform: translateY(25px); opacity: 0.8; }
    100% { transform: translateY(35px); opacity: 0; }
  }
  @keyframes flowContinuous {
    0% { transform: translateX(0px); opacity: 0; }
    10% { opacity: 1; }
    85% { opacity: 1; }
    100% { transform: translateX(110px); opacity: 0; }
  }
  @keyframes bubbleRise {
    0% { transform: translateY(0) scale(0.8); opacity: 0.3; }
    50% { opacity: 1; }
    100% { transform: translateY(-40px) scale(1.2); opacity: 0; }
  }

  @keyframes dgFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-4px); }
  }

  .chemical-diagram-svg text { font-family: var(--font-sans); }
  .anim-pulse, .anim-float-y, .dg-float { transform-box: fill-box; }
  .anim-spin-fast { animation: spinFast 3s linear infinite; }
  .anim-spin-med { animation: spinMed 6s linear infinite; }
  .anim-spin-slow { animation: spinSlow 10s linear infinite; }
  .anim-pulse { animation: pulseGlow 2.4s ease-in-out infinite; transform-origin: center; }
  .anim-float-y { animation: floatY 2.5s ease-in-out infinite; }
  .anim-bounce-1 { animation: bounce1 1.5s ease-in-out infinite; }
  .anim-bounce-2 { animation: bounce2 1.8s ease-in-out infinite; }
  .anim-bounce-3 { animation: bounce3 2.1s ease-in-out infinite; }
  .anim-drip-1 { animation: dripDrop 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite; }
  .anim-drip-2 { animation: dripDrop 1.6s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.8s; }
  .anim-flow-1 { animation: flowContinuous 2s linear infinite; }
  .anim-flow-2 { animation: flowContinuous 2s linear infinite 1s; }
  .anim-flow-3 { animation: flowContinuous 2s linear infinite; }
  .anim-flow-4 { animation: flowContinuous 2s linear infinite 1s; }
  .anim-rise-1 { animation: bubbleRise 2s ease-in infinite; }
  .anim-rise-2 { animation: bubbleRise 2s ease-in infinite 0.7s; }
  .anim-rise-3 { animation: bubbleRise 2s ease-in infinite 1.4s; }
  .dg-float { animation: dgFloat 5s ease-in-out infinite; }
  .dg-d2 { animation-delay: -1s; }
  .dg-d3 { animation-delay: -2s; }
  .dg-d4 { animation-delay: -3s; }
  .dg-d5 { animation-delay: -4s; }

  /* Reduced motion (OS setting or the in-app toggle): a still, readable figure */
  @media (prefers-reduced-motion: reduce) {
    .chemical-diagram-svg * { animation: none !important; }
  }
  :root[data-reduce-motion] .chemical-diagram-svg * { animation: none !important; }
`;
