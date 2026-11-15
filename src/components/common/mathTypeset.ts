/**
 * Display-time equation typesetting for plain-notation bank text.
 *
 * The content stores equations as plain text inside prose ("[H+] ≈ √(Ka · Ca) = 10^-4 M",
 * "m = (Q * MA) / (96500 * z)", "sqrt(64/16) = 2"). This module finds those equation runs,
 * converts them to LaTeX and renders them with KaTeX. The stored text is never changed.
 *
 * Design rules (conservative on purpose — a sentence that is typeset by mistake is worse than an
 * equation that keeps today's rendering):
 *  - A run is parsed by a small recursive-descent grammar: operands joined by operators. Anything
 *    that is not a known operand (number, unit, symbol, chemical species, bracket group, root, log)
 *    ends the run, so ordinary words, option letters, ids and Turkish suffixes stay prose.
 *  - A run is only typeset when it contains a relation, a root, a power or a fraction.
 *  - Words are never passed to KaTeX as LaTeX. Labels ("ürünler", "toplam", "продукты") are replaced
 *    by private placeholder characters and substituted, HTML-escaped, into KaTeX's output.
 *  - Any parse failure, KaTeX error or unsafe character returns null and the caller falls back.
 *
 * Pure TypeScript (no React) so it can be tested with `npx tsx`.
 */
import katex from 'katex';
import { chemTokenAt, isElementSymbol, type ChemToken } from './chemNotation';

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface MathRun {
  start: number;
  end: number;
  raw: string;
}

export type MathSegment =
  | { type: 'text'; text: string }
  | { type: 'math'; raw: string; latex: string; html: string; wide: boolean };

const F_REL = 1;
const F_ROOT = 2;
const F_POW = 4;
const F_FRAC = 8;
const F_ARROW = 16;
const F_EQ = 32;
const F_CHEM = 64;
const F_CHEMMUL = 128;
const F_LABFRAC = 256;

type Kind = 'num' | 'sym' | 'chem' | 'conc' | 'group' | 'label' | 'other';

interface R {
  end: number;
  tex: string;
  /** rough visual width in characters (inline-fraction legibility, overflow guard) */
  w: number;
  feat: number;
  kind: Kind;
  /** tex of a parenthesised group without its brackets */
  bare?: string;
  bareW?: number;
  /** contains a stacked fraction or a root */
  tall?: boolean;
  /** has a top-level superscript already */
  sup?: boolean;
  /** plain number (no unit) */
  numeric?: boolean;
  /** contains word labels (too small for an inline stacked fraction) */
  fine?: boolean;
  /** several factors without own brackets */
  compound?: boolean;
  /** a bare I / V / X that could be a roman numeral */
  roman?: boolean;
  /** raw text ends with a digit (for the "2 x 3" operator) */
  digitEnd?: boolean;
  /** widest unbreakable top-level chunk */
  chunk?: number;
}

/** widest piece KaTeX cannot break (it breaks after top-level relations and binary operators) */
const unbreak = (r: R): number => r.chunk ?? r.w;

interface Ctx {
  s: string;
  /** same length as s, with Unicode sub/superscripts mapped to ASCII (Cu²⁺ → Cu2+) for the species parser */
  a: string;
  display: boolean;
  labels: string[];
  depth: number;
  sawRel: boolean;
  orbital: boolean;
  reaction: boolean;
  allowTight: boolean;
  usedTight: boolean;
}

// ---------------------------------------------------------------------------
// Character helpers
// ---------------------------------------------------------------------------

const HAN_RE = /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}]/u;
const isHan = (ch: string | undefined): boolean => !!ch && HAN_RE.test(ch);
/** letter / digit / underscore that glues to a neighbouring token (CJK ideographs do not) */
const isWordCh = (ch: string | undefined): boolean => !!ch && /[\p{L}\p{M}\p{N}_]/u.test(ch) && !isHan(ch);
const isLetterCh = (ch: string | undefined): boolean => !!ch && /[\p{L}\p{M}]/u.test(ch);
const isDigit = (ch: string | undefined): boolean => !!ch && ch >= '0' && ch <= '9';
const isSp = (ch: string | undefined): boolean => ch === ' ' || ch === '\u00A0' || ch === '\u202F';
const skipSp = (s: string, i: number): number => {
  let j = i;
  while (isSp(s[j]) && j - i < 3) j++;
  return j;
};

const SUB_DIGITS = '₀₁₂₃₄₅₆₇₈₉';
const SUP_CHARS: Record<string, string> = { '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9', '⁺': '+', '⁻': '-', 'ⁿ': 'n' };
const SUB_CHARS: Record<string, string> = { '₊': '+', '₋': '-', 'ₙ': 'n' };
for (let d = 0; d < 10; d++) SUB_CHARS[SUB_DIGITS[d]] = String(d);

const LABEL_BASE = 0xac00; // Hangul syllables: never used by the 8 app languages
const LABEL_MAX = 200;
const PLACEHOLDER_RE = /[\uAC00-\uACC8]/g;
const HAS_PLACEHOLDER = /[\uAC00-\uD7AF]/;

function label(c: Ctx, text: string): string {
  c.labels.push(text);
  return `\\text{${String.fromCharCode(LABEL_BASE + c.labels.length - 1)}}`;
}

// ---------------------------------------------------------------------------
// Tables
// ---------------------------------------------------------------------------

const GREEK: Record<string, string> = {
  α: '\\alpha', β: '\\beta', γ: '\\gamma', δ: '\\delta', ε: '\\varepsilon', θ: '\\theta', λ: '\\lambda', μ: '\\mu', µ: '\\mu',
  ν: '\\nu', π: '\\pi', ρ: '\\rho', σ: '\\sigma', τ: '\\tau', φ: '\\varphi', χ: '\\chi', ω: '\\omega',
  Π: '\\Pi', Ω: '\\Omega', Λ: '\\Lambda', Φ: '\\Phi', Ψ: '\\Psi', Γ: '\\Gamma', Θ: '\\Theta',
};

/** lowercase letters that may stand alone as a variable */
const LC_VARS = new Set('n m k s i z d v t c a b x y r q w h l p'.split(' '));
/** uppercase letters that may stand alone as a variable (O is always oxygen, L a unit) */
const UC_VARS = new Set('P V T M R K Q E C N F I A Z X Y S G H U W D B'.split(' '));
/** heads that take a numeric index: T1, V2, n1, x2 … (N2, H2, O2, F2, I2 stay molecules) */
const INDEX_HEADS = new Set('T P V M E C K R Q n m v r q t x c d k z a b s y w h'.split(' '));

/** whole-word symbols: [base tex, subscript tex] */
const EXACT: Record<string, [string, string]> = {
  Kc: ['K', '\\mathrm{c}'], Kp: ['K', '\\mathrm{p}'], Ka: ['K', '\\mathrm{a}'], Kb: ['K', '\\mathrm{b}'], Kw: ['K', '\\mathrm{w}'],
  Kf: ['K', '\\mathrm{f}'], Kd: ['K', '\\mathrm{d}'], Kk: ['K', '\\mathrm{k}'], Ks: ['K', '\\mathrm{s}'], Ke: ['K', '\\mathrm{e}'],
  Kg: ['K', '\\mathrm{g}'], Kh: ['K', '\\mathrm{h}'], Ksp: ['K', '\\mathrm{sp}'], Keq: ['K', '\\mathrm{eq}'],
  Qc: ['Q', '\\mathrm{c}'], Qi: ['Q', '\\mathrm{i}'], Qp: ['Q', '\\mathrm{p}'], Qsp: ['Q', '\\mathrm{sp}'],
  Ea: ['E', '\\mathrm{a}'], Ek: ['E', '\\mathrm{k}'], Ep: ['E', '\\mathrm{p}'], Eai: ['E', '\\mathrm{ai}'], Eag: ['E', '\\mathrm{ag}'],
  MA: ['M', '\\mathrm{A}'], NA: ['N', '\\mathrm{A}'], MB: ['M', '\\mathrm{B}'],
  Ca: ['C', '\\mathrm{a}'], Cb: ['C', '\\mathrm{b}'], Va: ['V', '\\mathrm{a}'], Vb: ['V', '\\mathrm{b}'],
  Ma: ['M', '\\mathrm{a}'], Mb: ['M', '\\mathrm{b}'], Za: ['Z', '\\mathrm{a}'], Zb: ['Z', '\\mathrm{b}'],
  Xi: ['X', 'i'], Pi: ['P', 'i'], ni: ['n', 'i'], nA: ['n', '\\mathrm{A}'], nB: ['n', '\\mathrm{B}'],
  XA: ['X', '\\mathrm{A}'], XB: ['X', '\\mathrm{B}'], PA: ['P', '\\mathrm{A}'], PB: ['P', '\\mathrm{B}'],
  ri: ['r', '\\mathrm{i}'], rg: ['r', '\\mathrm{g}'], ml: ['m', 'l'], ms: ['m', 's'], kH: ['k', '\\mathrm{H}'],
  pH: ['\\mathrm{pH}', ''], pOH: ['\\mathrm{pOH}', ''], pKa: ['\\mathrm{p}K', '\\mathrm{a}'], pKb: ['\\mathrm{p}K', '\\mathrm{b}'],
  pKw: ['\\mathrm{p}K', '\\mathrm{w}'], 'рН': ['\\mathrm{pH}', ''], 'рH': ['\\mathrm{pH}', ''], 'pН': ['\\mathrm{pH}', ''],
  'рОН': ['\\mathrm{pOH}', ''], IE: ['\\mathrm{IE}', ''], İE: ['\\mathrm{\\dot{I}E}', ''], EI: ['\\mathrm{EI}', ''],
};

/** products written without a multiplication sign */
const PRODUCTS: Record<string, string> = {
  PV: 'PV', nRT: 'nRT', RT: 'RT', PM: 'PM', dRT: 'dRT', MRT: 'MRT', iMRT: 'iMRT', nR: 'nR', nF: 'nF', zF: 'zF', nFE: 'nFE',
};

/** subscript words that may follow a head letter without an underscore (Pgaz, ntoplam, Epil …) */
const LATIN_LABELS = new Set(
  (
    'total toplam tot gesamt totale tevahî giştî gas gaz Gas gazê solvent solution solute solvant soluté çözücü çözelti çözünen ' +
    'helker çareserî helbûyî helyayî mehlûl Lösung Lösungsmittel gelöst Wasserdampf water_vapor vapeur_eau su_buharı final finale End son dawî ' +
    'new net yeni ilk initial pil cell Zelle pile pîl hücre red ox Red Ox réd oks ind yüks ürünler girenler products reactants ' +
    'Produkte Edukte produits réactifs berhem reaktant complex Komplex complexe kompleks aktifleşmiş cong éb ext dış baz asit asîd ' +
    'su çç sp anot katot anode cathode buhar vapor'
  ).split(' ')
);
/** heads that accept one of the labels above */
const LABEL_HEADS = new Set('P V M m n C X E H S T K Q c x k d t v q'.split(' '));
const HAN_LABELS = ['原电池', '生成物', '反应物', '络合物', '水蒸气', '电池', '溶液', '溶剂', '溶质', '气体', '还原', '氧化', '溶解', '蒸气', '起始', '平衡', '总', '终', '水', '外', '内', '酸', '碱'];

/** approximate atomic masses: "C = 12", "Ca = 40" are element data, not variables */
const ATOMIC_MASS: Record<string, number[]> = {
  H: [1], He: [4], Li: [7], Be: [9], B: [11], C: [12], N: [14], O: [16], F: [19], Ne: [20], Na: [23], Mg: [24], Al: [27], Si: [28],
  P: [31], S: [32], Cl: [35, 35.5, 36], Ar: [40], K: [39], Ca: [40], Cr: [52], Mn: [55], Fe: [56], Co: [59], Ni: [59], Cu: [63, 63.5, 64],
  Zn: [65], Br: [80], Ag: [108], Sn: [119], I: [127], Ba: [137], Hg: [200, 201], Pb: [207], Au: [197],
};

// units -----------------------------------------------------------------------

const UNIT_ATOMS = [
  // SI and exam units (ASCII)
  'mmol', 'kmol', 'mol', 'Mol', 'mmHg', 'cmHg', 'torr', 'Torr', 'atm', 'bar', 'kPa', 'hPa', 'Pa', 'kcal', 'cal', 'kJ', 'mV', 'kV', 'mA',
  'ppm', 'ppb', 'min', 'dk', 'sn', 'akb', 'amu', 'uma', 'Hz', 'eV', 'kW', 'Da', 'mg', 'kg', 'µg', 'μg', 'ng', 'mL', 'ml', 'dL', 'cL',
  'nm', 'pm', 'cm', 'mm', 'dm', 'km', 'mM', '°C', '°F', '°С', '°',
  'M', 'g', 'L', 'l', 'K', 'V', 'C', 'F', 's', 'm', 'J', 'A', 'u', 'h', 'W', 'Ω',
  // Russian
  'ммоль', 'моль', 'кДж', 'Дж', 'кПа', 'Па', 'атм', 'мг', 'кг', 'мл', 'см', 'нм', 'пм', 'мм', 'мин', 'Кл', 'г', 'л', 'К', 'М', 'В', 'с',
  // Arabic
  'كيلوجول', 'مولار', 'جرام', 'غرام', 'كولوم', 'مول', 'لتر', 'جول', 'مل', 'م',
  // Chinese
  '千克', '毫升', '摩尔', '千焦', '克', '升',
].sort((a, b) => b.length - a.length);
const UNIT_SET = new Set(UNIT_ATOMS);
const SINGLE_LETTER_UNIT = /^[\p{L}Ω]$/u;

function unitAtomAt(s: string, i: number): string | null {
  for (const u of UNIT_ATOMS) {
    if (s.startsWith(u, i)) {
      const after = s[i + u.length];
      // the atom must end the word ("mol" but not "molekül"); CJK units may be followed by CJK text
      if (isWordCh(after) && !/[23]/.test(after ?? '') && SUP_CHARS[after ?? ''] === undefined && u !== '°') continue;
      if (/[23]/.test(after ?? '') && !/^(?:cm|dm|m|mm|km|nm|L|s|mol|см|м)$/.test(u)) continue;
      return u;
    }
  }
  return null;
}

function unitAtomTex(c: Ctx, u: string): string {
  if (u === '°C' || u === '°С') return '{}^{\\circ}\\mathrm{C}';
  if (u === '°F') return '{}^{\\circ}\\mathrm{F}';
  if (u === '°') return '^{\\circ}';
  if (u === 'Ω') return '\\Omega';
  if (u === 'µg' || u === 'μg') return '\\mu\\mathrm{g}';
  if (/^[A-Za-z]+$/.test(u)) return `\\mathrm{${u}}`;
  return label(c, u);
}

/** number + unit: "0,5 mol", "41 L·atm/(mol·K)", "25 °C", "2 mol/(L·s)", "g/cm³" */
function parseUnit(c: Ctx, i: number, spaced: boolean): { end: number; tex: string; w: number } | null {
  const s = c.s;
  let j = i;
  let tex = '';
  let w = 0;
  const atom = (): boolean => {
    const u = unitAtomAt(s, j);
    if (!u) return false;
    tex += unitAtomTex(c, u);
    j += u.length;
    w += u.length;
    // exponent: cm3, cm³, s^-1, mol^2
    const sup = s[j];
    if (sup && SUP_CHARS[sup] && sup !== 'ⁿ') {
      let e = '';
      while (s[j] && SUP_CHARS[s[j]]) e += SUP_CHARS[s[j++]];
      tex += `^{${e}}`;
    } else if (/[23]/.test(sup ?? '') && !isWordCh(s[j + 1])) {
      tex += `^{${sup}}`;
      j++;
    } else if (sup === '^') {
      const m = /^\^(?:\(([-−+]?\d)\)|([-−+]?\d))/.exec(s.slice(j, j + 6));
      if (m) {
        tex += `^{${(m[1] ?? m[2]).replace('−', '-')}}`;
        j += m[0].length;
      }
    }
    return true;
  };
  const first = unitAtomAt(s, j);
  if (!first) return null;
  if (!spaced && SINGLE_LETTER_UNIT.test(first)) return null; // "2s", "3d", "2A" are not units
  if (/^[smhulWс]$/.test(first) && s[j + 1] !== '^' && !SUP_CHARS[s[j + 1]]) return null; // "l = 0 s", "2 m" stay prose
  atom();
  for (;;) {
    const sep = s[j];
    if (sep !== '/' && sep !== '·' && sep !== '⋅' && sep !== '∙') break;
    const save = { j, tex, w };
    j++;
    tex += sep === '/' ? '/' : '{\\cdot}';
    if (s[j] === '(') {
      j++;
      tex += '(';
      if (!atom()) {
        ({ j, tex, w } = save);
        break;
      }
      let ok = true;
      while (s[j] === '·' || s[j] === '⋅' || s[j] === '∙' || s[j] === '/') {
        tex += s[j] === '/' ? '/' : '{\\cdot}';
        j++;
        if (!atom()) {
          ok = false;
          break;
        }
      }
      if (!ok || s[j] !== ')') {
        ({ j, tex, w } = save);
        break;
      }
      j++;
      tex += ')';
      w += 2;
    } else if (!atom()) {
      ({ j, tex, w } = save);
      break;
    }
    w += 1;
  }
  const after = s[j];
  if (isWordCh(after) || after === '^' || after === '_' || after === '°') return null;
  const thin = first === '°' || first === '°C' || first === '°F' || first === '°С' ? (spaced ? '\\,' : '') : '\\,';
  return { end: j, tex: thin + tex, w: w + 0.5 };
}

// ---------------------------------------------------------------------------
// Chemical species → LaTeX (from chemNotation's parsed parts)
// ---------------------------------------------------------------------------

function scriptTex(t: string): string | null {
  let out = '';
  for (const ch of t) {
    if (/[0-9A-Za-z+,.]/.test(ch)) out += ch;
    else if (ch === '−' || ch === '-') out += '-';
    else if (ch === ' ') out += '\\,';
    else if (SUP_CHARS[ch]) out += SUP_CHARS[ch];
    else if (SUB_CHARS[ch]) out += SUB_CHARS[ch];
    else return null;
  }
  return out;
}

function plainChemTex(c: Ctx, t: string): string | null {
  let out = '';
  let buf = '';
  const flush = () => {
    if (buf) out += `\\mathrm{${buf}}`;
    buf = '';
  };
  for (let i = 0; i < t.length; i++) {
    const ch = t[i];
    if (/[A-Za-z0-9]/.test(ch)) buf += ch;
    else if (ch === '(') {
      // state symbol: (k), (suda), (aq), (тв), (р-р)
      const m = /^\(([\p{Ll}\p{Lo}.\-]{1,8})\)/u.exec(t.slice(i));
      if (m && !/^[spdf]$/.test(m[1])) {
        if (/^[a-z.]+$/.test(m[1])) buf += `(${m[1]})`;
        else {
          flush();
          out += `(${label(c, m[1])})`;
        }
        i += m[0].length - 1;
      } else buf += '(';
    } else if (ch === ')' || ch === '[' || ch === ']') buf += ch;
    else if (ch === '+') buf += '{+}';
    else if (ch === '-' || ch === '−' || ch === '–') buf += '{-}';
    else if (ch === '=') buf += '{=}';
    else if (ch === '≡') buf += '{\\equiv}';
    else if (ch === '·' || ch === '•' || ch === '∙') buf += '{\\cdot}';
    else if (ch === ',') buf += ',';
    else if (ch === ' ') buf += '\\,';
    else if (SUB_CHARS[ch] !== undefined || SUP_CHARS[ch] !== undefined) {
      const sub = SUB_CHARS[ch] !== undefined;
      const map = sub ? SUB_CHARS : SUP_CHARS;
      let run = '';
      while (i < t.length && map[t[i]] !== undefined) run += map[t[i++]];
      i--;
      flush();
      if (!out) out = '{}';
      out += `${sub ? '_' : '^'}{${run}}`;
    } else return null;
  }
  flush();
  return out;
}

function chemTex(c: Ctx, tok: ChemToken): { tex: string; w: number } | null {
  const parts = tok.parts;
  let out = '';
  let k = 0;
  if (parts.length && parts[0].k !== 'n') {
    // isotope / atomic-number prescripts
    let pre = '';
    while (k < parts.length && parts[k].k !== 'n') {
      const st = scriptTex(parts[k].s);
      if (st === null) return null;
      pre += `${parts[k].k === 'sub' ? '_' : '^'}{${st}}`;
      k++;
    }
    out += `{}${pre}`;
  }
  let first = tok.kind === 'formula' || tok.kind === 'electron';
  let lastScript = '';
  for (; k < parts.length; k++) {
    const p = parts[k];
    if (p.k !== 'n') {
      const st = scriptTex(p.s);
      if (st === null) return null;
      const mark = p.k === 'sub' ? '_' : '^';
      if (lastScript.includes(mark)) out += '{}'; // never a double script on one base
      out += `${mark}{${st}}`;
      lastScript += mark;
      continue;
    }
    lastScript = '';
    let t = p.s;
    if (first) {
      const m = /^\d+/.exec(t);
      if (m) {
        out += `${m[0]}\\,`;
        t = t.slice(m[0].length);
      }
    }
    first = false;
    const pt = plainChemTex(c, t);
    if (pt === null) return null;
    out += pt;
  }
  return { tex: out, w: tok.raw.length * 0.85 };
}

// ---------------------------------------------------------------------------
// Symbols
// ---------------------------------------------------------------------------

function subPiece(c: Ctx, lab: string): string {
  if (/^\d+$/.test(lab)) return lab;
  if (/^[ijn]$/.test(lab)) return lab;
  if (/^[A-Za-z]$/.test(lab) || lab === 'sp') return `\\mathrm{${lab}}`;
  return label(c, lab.replace(/_/g, ' '));
}

interface Sym {
  tex: string;
  w: number;
  sup: boolean;
  fine: boolean;
  roman?: boolean;
}

function buildSym(base: string, subs: string[], deg: boolean, w: number, fine: boolean): Sym {
  let tex = base;
  if (subs.length) tex += `_{${subs.join('')}}`;
  if (deg) tex += '^{\\circ}';
  return { tex, w, sup: deg, fine };
}

function headTex(h: string): string | null {
  if (/^[A-Za-z]$/.test(h)) return h;
  if (/^Δ[A-Za-z]$/.test(h)) return `\\Delta ${h[1]}`;
  if (GREEK[h]) return GREEK[h];
  if (h.length === 2 && h[0] === 'Δ' && GREEK[h[1]]) return `\\Delta${GREEK[h[1]]}`;
  return null;
}

const CYR_AR = /^[\p{Script=Cyrillic}\p{Script=Arabic}\p{M}]+$/u;

/** Interprets one lexed word (no underscore) as a symbol. */
function symbolFromCore(c: Ctx, word: string): Sym | null {
  let core = word;
  let deg = false;
  if (core.endsWith('°')) {
    deg = true;
    core = core.slice(0, -1);
  }
  if (!core) return null;
  const w = word.length;
  if (!deg && PRODUCTS[core]) return { tex: PRODUCTS[core], w, sup: false, fine: false };
  // (T1)(V1) written together: P1V1, M1V1, C1m1
  if (!deg && /^(?:[A-Za-z][0-3]){2,}$/.test(core)) {
    let tex = '';
    for (let k = 0; k < core.length; k += 2) {
      if (!INDEX_HEADS.has(core[k])) return null;
      tex += `${core[k]}_{${core[k + 1]}}`;
    }
    return { tex, w, sup: false, fine: false };
  }
  let idx = '';
  const im = /^(.*?[^\d])(\d)$/.exec(core);
  if (im) {
    core = im[1];
    idx = im[2];
  }
  if (EXACT[core]) {
    const [b, sub] = EXACT[core];
    return buildSym(b, sub || idx ? [sub + idx] : [], deg, w, false);
  }
  // single letter (optionally Δ-prefixed)
  const single = /^Δ?[A-Za-z]$/.test(core) || !!GREEK[core] || (core.length === 2 && core[0] === 'Δ' && !!GREEK[core[1]]);
  if (single) {
    const letter = core[core.length - 1];
    const plain = core.length === 1;
    if (plain && !GREEK[core]) {
      const lower = letter >= 'a' && letter <= 'z';
      if (lower ? !LC_VARS.has(letter) : !UC_VARS.has(letter)) return null;
      if (idx && !INDEX_HEADS.has(letter)) return null;
    }
    const sym = buildSym(headTex(core)!, idx ? [idx] : [], deg, w, false);
    if (plain && !idx && !deg && /^[IVX]$/.test(core)) sym.roman = true;
    return sym;
  }
  // E°pil, P°çözücü, ΔH°f: degree sign in the middle
  const dm = /^(Δ?[A-Za-z])°([\p{L}\p{M}]+)$/u.exec(core);
  if (dm && !deg) {
    const b = headTex(dm[1]);
    if (!b) return null;
    return buildSym(b, [subPiece(c, dm[2]) + idx], true, w, dm[2].length > 2);
  }
  // Δ + head + label: ΔHf, ΔTk, ΔTcong, ΔTзам
  const dl = /^(Δ[A-Za-z])([\p{L}\p{M}]+)$/u.exec(core);
  if (dl) return buildSym(headTex(dl[1])!, [subPiece(c, dl[2]) + idx], deg, w, dl[2].length > 2);
  // head + whitelisted label / Cyrillic or Arabic label: Pgaz, ntoplam, Epil, Kкр
  const hl = /^([A-Za-z])([\p{L}\p{M}_]+)$/u.exec(core);
  if (hl && (LABEL_HEADS.has(hl[1]) || deg)) {
    const lab = hl[2];
    const lowerHead = hl[1] >= 'a' && hl[1] <= 'z';
    const latinOk = LATIN_LABELS.has(lab) && (!lowerHead || lab.length >= 4 || /^(?:gaz|gas|Gas|tot)$/.test(lab));
    if (latinOk || (CYR_AR.test(lab) && lab.length >= 2)) {
      return buildSym(hl[1], [subPiece(c, lab) + idx], deg, w, lab.length > 2);
    }
  }
  return null;
}

function lexWord(s: string, i: number): string {
  let j = i;
  while (j < s.length) {
    const ch = s[j];
    if ((isLetterCh(ch) && !isHan(ch)) || ch === '_' || ch === '°' || (isDigit(ch) && j > i) || (SUB_CHARS[ch] !== undefined && j > i)) j++;
    else break;
  }
  let w = s.slice(i, j);
  // a trailing underscore is kept only in front of a CJK label (m_溶质)
  while (w.endsWith('_') && !(w.length === j - i && isHan(s[j]) && !w.slice(0, -1).includes('_'))) w = w.slice(0, -1);
  return w;
}
const normSub = (w: string): string => w.replace(/[₀-₉]/g, (d) => SUB_CHARS[d]);

function symR(i: number, len: number, sym: Sym): R {
  return { end: i + len, tex: sym.tex, w: sym.w, feat: 0, kind: 'sym', sup: sym.sup, fine: sym.fine, roman: sym.roman };
}

function chemR(c: Ctx, tok: ChemToken): R | null {
  const ct = chemTex(c, tok);
  if (!ct) return null;
  return { end: tok.end, tex: ct.tex, w: ct.w, feat: 0, kind: 'chem', sup: /\^\{[^}]*\}$/.test(ct.tex) };
}

/** A word-like operand: function, symbol, chemical species. */
function parseWordOperand(c: Ctx, i: number): R | null {
  const s = c.s;
  const fn = /^(log|ln|lg)(?![\p{L}\p{N}_])/u.exec(s.slice(i, i + 4));
  if (fn) return parseFn(c, i, fn[1]);

  // "C = 12", "Ca = 40": atomic-mass data → element, not a variable
  const am = /^([A-Z][a-z]?)(?:\s?=\s?)(\d+(?:[.,]\d)?)(?![\d.,]*\d)/.exec(s.slice(i, i + 12));
  if (am && ATOMIC_MASS[am[1]]?.includes(Number(am[2].replace(',', '.')))) {
    return { end: i + am[1].length, tex: `\\mathrm{${am[1]}}`, w: am[1].length, feat: 0, kind: 'chem' };
  }

  // (a tight "O=O" / "C=O" is a double bond, not an equation)
  const ed = /^([A-Z][a-z]?)(?: [=<>] [\d+\-−A-Z]|[=<>][\d+\-−])/.exec(s.slice(i, i + 7));
  // C / N / S … are element data only next to another "element = value" pair ("C = 2,4/12; H = 0,4/1")
  const sibling = (): boolean => {
    for (const m of s.slice(Math.max(0, i - 48), i + 64).matchAll(/(?:^|[\s(,;:])([A-Z][a-z]|H|O)\s?=\s?[\d+\-−]/g)) {
      if (isElementSymbol(m[1]) && !EXACT[m[1]]) return true;
    }
    return false;
  };
  if (ed && isElementSymbol(ed[1]) && !EXACT[ed[1]] && !c.reaction && (ed[1].length === 2 || ed[1] === 'O' || ed[1] === 'H' || (/[CNSPFIK]/.test(ed[1]) && /^[A-Z] ?= ?\d/.test(ed[0]) && sibling()))) {
    return { end: i + ed[1].length, tex: `\\mathrm{${ed[1]}}`, w: ed[1].length, feat: 0, kind: 'sym' };
  }
  const raw = lexWord(s, i);
  const tok = chemTokenAt(c.a, i);
  if (c.reaction) return tok ? chemR(c, tok) : null;
  const word = normSub(raw);

  if (raw) {
    const us = word.indexOf('_');
    const core = us === -1 ? word : word.slice(0, us);
    // a species that extends past the word ("Ca2+", "Fe3+", "SO4^2-") is chemistry
    // …unless the "species" is only a symbol glued to a bond-like "=" ("M1V1=M2V2", "T1=T2")
    const bondGlue = /[=≡]/.test(s[i + raw.length] ?? '') && us === -1 && !!symbolFromCore(c, core);
    // P(H2), V(O2), M(NaOH): a quantity with a species as its argument, not a compound
    const argGlue = /^[PVMT]$/.test(raw) && s[i + 1] === '(' && /[A-Z]/.test(s[i + 2] ?? '');
    const chemWins = tok && tok.strong && tok.end > i + raw.length && !bondGlue && !argGlue;
    if (!chemWins) {
      const wholeSym = us === -1 ? null : symbolFromCore(c, word);
      if (wholeSym) return symR(i, raw.length, wholeSym);
      if (us === -1) {
        const sym = symbolFromCore(c, core);
        if (sym) {
          // Latin head + CJK label without underscore: P气体, n总, E°电池
          const hanAt = i + raw.length;
          if (isHan(s[hanAt]) && /^(?:Δ?[A-Za-z]°?)$/.test(core)) {
            const hl = HAN_LABELS.find((h) => s.startsWith(h, hanAt) && !isHan(s[hanAt + h.length]));
            if (hl) {
              const deg = core.endsWith('°');
              const b = headTex(deg ? core.slice(0, -1) : core);
              if (b) return symR(i, raw.length + hl.length, buildSym(b, [label(c, hl)], deg, raw.length + hl.length, true));
            }
          }
          return symR(i, raw.length, sym);
        }
      } else {
        // underscore subscript: V_toplam, m_çözünen, n_H⁺, P_H2O, Kc_new, kg_çözücü, m_溶质
        let head: Sym | null = symbolFromCore(c, core);
        if (!head && UNIT_SET.has(core)) head = { tex: unitAtomTex(c, core), w: core.length, sup: false, fine: false };
        if (head && !(head.sup && head.tex.includes('_{'))) {
          const labStart = i + us + 1;
          const lt = chemTokenAt(c.a, labStart);
          let labEnd = i + raw.length;
          while (isHan(s[labEnd]) && labEnd - labStart < 10) labEnd++;
          let sub: string | null = null;
          let fine = false;
          if (lt && lt.end >= labEnd && lt.kind !== 'electron' && /^[A-Z]/.test(lt.raw)) {
            const ct = chemTex(c, lt);
            if (ct) {
              sub = ct.tex;
              labEnd = lt.end;
            }
          }
          if (sub === null) {
            const lab = s.slice(labStart, labEnd);
            if (!lab || /[°₀-₉]/.test(lab)) return null;
            sub = subPiece(c, lab);
            fine = lab.length > 2;
          }
          const tex = head.tex.includes('_{') ? head.tex.replace(/\}$/, `,${sub}}`) : `${head.tex}_{${sub}}`;
          return { end: labEnd, tex, w: labEnd - i, feat: 0, kind: 'sym', fine, sup: head.sup };
        }
        return null;
      }
    }
  }
  if (tok && tok.strong && !(/^[PVMT]$/.test(raw) && s[i + 1] === '(' && /[A-Z]/.test(s[i + 2] ?? '')) && !(raw && /[=≡]/.test(s[i + raw.length] ?? '') && tok.end > i + raw.length && /^(?:[A-Za-z]\d)+$/.test(raw))) return chemR(c, tok);
  // n / m / v / t / M + species: nH+, nOH-, mO, vHe, tX, MHe
  if (/[nmvtMx]/.test(s[i]) && /[A-Z]/.test(s[i + 1] ?? '') && !UNIT_SET.has(raw)) {
    const st = chemTokenAt(c.a, i + 1);
    const lowerHead = /[a-z]/.test(s[i]);
    let subTex: string | null = null;
    let end = 0;
    if (st && !/[()[\]]/.test(st.raw) && (lowerHead || /^(?:[A-Z][a-z]?\d*)+$/.test(st.raw))) {
      const ct = chemTex(c, st);
      if (ct) {
        subTex = ct.tex;
        end = st.end;
      }
    } else if (lowerHead && /^[A-Z](?![\p{L}\p{N}])/u.test(s.slice(i + 1, i + 3))) {
      subTex = `\\mathrm{${s[i + 1]}}`;
      end = i + 2;
    }
    if (subTex !== null) return { end, tex: `${s[i]}_{${subTex}}`, w: end - i, feat: 0, kind: 'sym' };
  }
  // bare element symbols only where a species is expected: inside brackets, or as a later member of
  // a comparison chain ("H2O > CH4 > NaCl > He")
  if (tok && c.depth > 0) return chemR(c, tok);
  if (tok && c.sawRel && /^[A-Z][a-z]$/.test(tok.raw) && isElementSymbol(tok.raw)) return chemR(c, tok);
  return null;
}

// ---------------------------------------------------------------------------
// Parser
// ---------------------------------------------------------------------------

function parseFn(c: Ctx, i: number, name: string): R | null {
  const s = c.s;
  const j = i + name.length;
  let arg: R | null = null;
  let tex = '';
  if (s[j] === '(') {
    arg = parseGroup(c, j, false);
    if (arg) tex = `\\${name === 'lg' ? 'lg' : name}${arg.tex}`;
  } else if (s[j] === '[') {
    arg = parseBracket(c, j, false);
    if (arg) tex = `\\${name}${arg.tex}`;
  } else if (isSp(s[j]) && !isSp(s[j + 1])) {
    arg = parseFactor(c, j + 1);
    if (arg) tex = `\\${name} ${arg.tex}`;
  }
  if (!arg) return null;
  return { end: arg.end, tex, w: name.length + 0.5 + arg.w, feat: arg.feat, kind: 'other', tall: arg.tall, fine: arg.fine };
}

function parseRoot(c: Ctx, i: number): R | null {
  const s = c.s;
  let j = i;
  let cube = false;
  if (s.startsWith('sqrt', i)) j = i + 4;
  else if (s[i] === '√') j = i + 1;
  else if (s[i] === '∛') {
    j = i + 1;
    cube = true;
  } else return null;
  let arg: R | null = null;
  if (s[j] === '(') arg = parseGroup(c, j, false);
  else if (s[j] === '[') arg = parseBracket(c, j, true);
  else if (s[i] !== 's') arg = parsePrimary(c, j);
  if (!arg) return null;
  const inner = arg.bare ?? arg.tex;
  return {
    end: arg.end,
    tex: `\\sqrt${cube ? '[3]' : ''}{${inner}}`,
    w: (arg.bareW ?? arg.w) + 1.2,
    feat: arg.feat | F_ROOT,
    kind: 'other',
    tall: true,
    fine: arg.fine,
  };
}

function groupR(c: Ctx, open: string, close: string, e: R, end: number): R {
  const big = c.display && e.tall;
  const lo = open === '[' ? '[' : '(';
  const lc = close === ']' ? ']' : ')';
  return {
    end,
    tex: big ? `\\left${lo}${e.tex}\\right${lc}` : `${lo}${e.tex}${lc}`,
    w: e.w + 1.2,
    feat: e.feat,
    kind: 'group',
    bare: e.tex,
    bareW: e.w,
    tall: e.tall,
    fine: e.fine,
    chunk: big ? undefined : unbreak(e) + 1.2,
  };
}

/** "(" expr ")" — labelOnlyOk for an argument attached to a symbol: ΔHf(ürünler), E°(katot) */
function parseGroup(c: Ctx, i: number, labelOnlyOk: boolean): R | null {
  const s = c.s;
  if (s[i] !== '(') return null;
  if (labelOnlyOk) {
    // T(K) = t(°C) + 273, V(L), m(kg): a unit as the argument
    const um = /^\((K|°C|°F|L|mL|kg|g|mg|mol|atm|kJ|J|cm|mmHg|cmHg)\)/.exec(s.slice(i, i + 7));
    if (um) return { end: i + um[0].length, tex: `(${unitAtomTex(c, um[1])})`, w: um[0].length, feat: 0, kind: 'group' };
    // n(Ca), M(Na): an element symbol as the argument of a symbol
    const el = /^\(([A-Z][a-z]?)\)/.exec(s.slice(i, i + 4));
    if (el && isElementSymbol(el[1]) && (el[1].length === 2 || /[HONCS]/.test(el[1]))) {
      return { end: i + el[0].length, tex: `(\\mathrm{${el[1]}})`, w: el[0].length, feat: 0, kind: 'group' };
    }
  }
  c.depth++;
  try {
    const j = skipSp(s, i + 1);
    const e = parseExpr(c, j);
    if (e) {
      const k = skipSp(s, e.end);
      if (s[k] === ')') {
        if (e.kind === 'label' && !labelOnlyOk) return null;
        return groupR(c, '(', ')', e, k + 1);
      }
    }
    // a bare unit: V_çözelti(L), m_çözücü(kg)
    if (labelOnlyOk) {
      const u = unitAtomAt(s, i + 1);
      if (u && s[i + 1 + u.length] === ')') {
        return { end: i + 2 + u.length, tex: `(${unitAtomTex(c, u)})`, w: u.length + 2, feat: 0, kind: 'group' };
      }
    }
    return null;
  } finally {
    c.depth--;
  }
}

/** "[H+]", "[eşlenik baz]", "[Fe(CN)6]3-", or a square bracket used as a group (after a root) */
function parseBracket(c: Ctx, i: number, grouping: boolean): R | null {
  const s = c.s;
  if (s[i] !== '[') return null;
  const close = s.indexOf(']', i + 1);
  if (close === -1 || close - i > 80) return null;
  // complex ion: the species continues after the bracket
  const whole = chemTokenAt(c.a, i);
  if (whole && whole.strong && whole.end > close + 1) return chemR(c, whole);
  const j = skipSp(s, i + 1);
  const inner = s.slice(j, close).trimEnd();
  if (!inner || inner === '?' || /^(?:He|Ne|Ar|Kr|Xe|Rn)$/.test(inner)) return null;
  if (!grouping) {
    const tok = chemTokenAt(c.a, j);
    if (tok && skipSp(s, tok.end) === close) {
      const ct = chemTex(c, tok);
      if (ct) return { end: close + 1, tex: `[${ct.tex}]`, w: ct.w + 1.2, feat: 0, kind: 'conc' };
    }
    if (/^[A-Z][a-z]?$/.test(inner)) return { end: close + 1, tex: `[\\mathrm{${inner}}]`, w: inner.length + 1.2, feat: 0, kind: 'conc' };
  }
  c.depth++;
  try {
    const e = parseExpr(c, j);
    if (e && skipSp(s, e.end) === close) {
      if (e.kind === 'label') return { end: close + 1, tex: `[${e.tex}]`, w: e.w + 1.2, feat: 0, kind: 'conc', fine: true };
      // "[A]" style content that parsed as a variable is still a concentration
      if (!grouping && e.kind === 'sym') return { end: close + 1, tex: `[${e.tex}]`, w: e.w + 1.2, feat: 0, kind: 'conc' };
      return groupR(c, '[', ']', e, close + 1);
    }
  } finally {
    c.depth--;
  }
  return null;
}

/** Words used as an operand inside brackets: (kırılan bağlar), [eşlenik baz], (كمية الناتج / …) */
function parseWords(c: Ctx, i: number): R | null {
  const s = c.s;
  const max = c.display ? 8 : 5;
  let j = i;
  let n = 0;
  for (;;) {
    const m = /^[\p{L}\p{M}][\p{L}\p{M}'’\-]*/u.exec(s.slice(j, j + 40));
    if (!m) break;
    j += m[0].length;
    n++;
    if (n >= max) break;
    if (isSp(s[j]) && isLetterCh(s[j + 1])) j++;
    else break;
  }
  if (n === 0) return null;
  const text = s.slice(i, j);
  if (text.length < 2) return null;
  const k = skipSp(s, j);
  if (!/[)\]/·*×+−\-=]/.test(s[k] ?? '')) return null;
  return { end: j, tex: label(c, text), w: text.length * 0.95, feat: 0, kind: 'label', fine: true };
}

function parseNumber(c: Ctx, i: number): R | null {
  const s = c.s;
  const head = s.slice(i, i + 24);
  // periodic-table groups in comparisons: 1A < 3A < 2A
  const grp = /^[1-8][AB](?![\p{L}\p{N}^_])/u.exec(head);
  if (grp) return { end: i + 2, tex: `\\mathrm{${grp[0]}}`, w: 2, feat: 0, kind: 'sym' };
  if (c.orbital) {
    const orb = /^[1-7][spdf](?![\p{L}\p{N}^_])/u.exec(head);
    if (orb) return { end: i + 2, tex: `\\mathrm{${orb[0]}}`, w: 2, feat: 0, kind: 'sym' };
  }
  const m = /^\d+(?:[.,]\d+)?/.exec(head);
  if (!m) return null;
  let txt = m[0];
  if (/[.,]/.test(txt) && /^[.,]\d/.test(s.slice(i + txt.length, i + txt.length + 2))) txt = /^\d+/.exec(txt)![0]; // 1,2,3 / 12.05.2024
  let j = i + txt.length;
  let tex = txt.replace(',', '{,}');
  let w = txt.length;
  let numeric = true;
  if (s[j] === '%') {
    tex += '\\%';
    j++;
    w++;
    numeric = false;
  } else if (isSp(s[j]) && s[j + 1] === '%' && !isWordCh(s[j + 2]) && !/^ ?[·*×=]/.test(s.slice(j + 2, j + 4))) {
    // French / German spacing: "36 %"
    tex += '\\,\\%';
    j += 2;
    w += 1.5;
    numeric = false;
  }
  const r: R = { end: j, tex, w, feat: 0, kind: 'num', numeric, digitEnd: numeric };
  return withUnit(c, r);
}

function withUnit(c: Ctx, r: R): R {
  const s = c.s;
  let j = r.end;
  const spaced = isSp(s[j]) && !isSp(s[j + 1]);
  if (spaced) j++;
  const u = parseUnit(c, j, spaced);
  if (!u) return r;
  return { ...r, end: u.end, tex: r.tex + u.tex, w: r.w + u.w, numeric: false, digitEnd: false, fine: r.fine || /\\text/.test(u.tex) };
}

function parsePrimary(c: Ctx, i: number): R | null {
  const s = c.s;
  const ch = s[i];
  if (!ch) return null;
  if (ch === '√' || ch === '∛' || (ch === 's' && s.startsWith('sqrt(', i))) return parseRoot(c, i);
  if (ch === '(') return parseGroup(c, i, false);
  if (ch === '[') return parseBracket(c, i, false);
  if (isDigit(ch)) {
    if (c.reaction) return null;
    // "2H2O", "3Fe2+" inside an equation are species with a coefficient
    const tok = /^\d{1,3}[A-Z(]/.test(s.slice(i, i + 4)) ? chemTokenAt(c.a, i) : null;
    if (tok && tok.strong && (tok.kind === 'isotope' || !/^\d+[A-Z]$/.test(tok.raw))) return chemR(c, tok);
    return parseNumber(c, i);
  }
  if (ch === '%' && /^[A-Z](?![\p{L}\p{N}])/u.test(s.slice(i + 1, i + 3))) {
    // %C: percent concentration used as a quantity
    return { end: i + 2, tex: `\\%${s[i + 1]}`, w: 2, feat: 0, kind: 'sym' };
  }
  if (ch === 'Δ' && s[i + 1] === '[') {
    // Δ[giren]/Δt
    const b = parseBracket(c, i + 1, false);
    if (!b || b.kind === 'group') return null;
    return { ...b, tex: `\\Delta${b.tex}`, w: b.w + 1, kind: 'other' };
  }
  if (ch === '%' && isDigit(s[i + 1])) {
    const n = parseNumber(c, i + 1);
    if (!n) return null;
    return { ...n, tex: `\\%${n.tex}`, w: n.w + 1, numeric: false };
  }
  if (ch === '…' || s.startsWith('...', i)) {
    return { end: i + (ch === '…' ? 1 : 3), tex: '\\dots', w: 2, feat: 0, kind: 'other' };
  }
  if (ch === 'Σ' || ch === '∑') {
    const j = skipSp(s, i + 1);
    const f = s[j] === '(' ? parseGroup(c, j, true) : parseFactor(c, j);
    if (!f) return null;
    return { ...f, tex: `\\sum ${f.tex}`, w: f.w + 1.5, kind: 'other', bare: undefined, bareW: undefined, compound: false };
  }
  if (isLetterCh(ch) && !isHan(ch)) {
    const r = parseWordOperand(c, i);
    if (r || c.reaction) return r;
    // a unit expression on its own: L^2/(mol^2·s), mol·L^-1·s^-1
    const u = parseUnit(c, i, true);
    if (u && u.tex.includes('^{') && !u.tex.includes('\\circ')) {
      return { end: u.end, tex: u.tex.replace(/^\\,/, ''), w: u.w, feat: F_POW, kind: 'other' };
    }
  }
  return null;
}

function parseExponent(c: Ctx, i: number): { end: number; tex: string; w: number } | null {
  const s = c.s;
  if (s[i] === '(') {
    c.depth++;
    try {
      const e = parseExpr(c, skipSp(s, i + 1));
      if (e && e.kind !== 'label') {
        const k = skipSp(s, e.end);
        if (s[k] === ')') return { end: k + 1, tex: e.tex, w: e.w * 0.7 };
      }
    } finally {
      c.depth--;
    }
    return null;
  }
  let j = i;
  let sign = '';
  if (s[j] === '-' || s[j] === '−' || s[j] === '+') {
    sign = s[j] === '+' ? '+' : '-';
    j++;
  }
  const m = /^\d+(?:[.,]\d+)?/.exec(s.slice(j, j + 12));
  if (m) {
    const txt = m[0];
    const end = j + txt.length;
    if (isWordCh(s[end])) return null;
    return { end, tex: sign + txt.replace(',', '{,}'), w: (txt.length + sign.length) * 0.7 };
  }
  const raw = lexWord(s, j);
  if (raw && raw.length <= 3 && !raw.includes('_')) {
    const sym = symbolFromCore(c, normSub(raw));
    if (sym && !sym.sup) return { end: j + raw.length, tex: sign + sym.tex, w: (raw.length + sign.length) * 0.7 };
  }
  return null;
}

function parseFactor(c: Ctx, i: number): R | null {
  const s = c.s;
  let b = parsePrimary(c, i);
  if (!b) return null;
  for (;;) {
    const ch = s[b.end];
    if (ch === '^') {
      const e = parseExponent(c, b.end + 1);
      if (!e) return null;
      const wasNum = b.kind === 'num' && b.numeric;
      b = {
        end: e.end,
        tex: `${b.sup ? `{${b.tex}}` : b.tex}^{${e.tex}}`,
        w: b.w + e.w,
        feat: b.feat | F_POW,
        kind: b.kind === 'num' ? 'num' : 'other',
        tall: b.tall,
        sup: true,
        fine: b.fine,
        chunk: unbreak(b) + e.w,
      };
      if (wasNum) b = withUnit(c, b);
      continue;
    }
    if (ch && SUP_CHARS[ch] !== undefined && ch !== 'ⁿ' && b.kind !== 'chem') {
      let e = '';
      let j: number = b.end;
      while (s[j] && SUP_CHARS[s[j]] !== undefined) e += SUP_CHARS[s[j++]];
      if (b.sup) return null;
      const wasNum = b.kind === 'num' && b.numeric;
      b = { end: j, tex: `${b.tex}^{${e}}`, w: b.w + e.length * 0.7, feat: b.feat | F_POW, kind: b.kind === 'num' ? 'num' : 'other', sup: true, fine: b.fine, tall: b.tall };
      if (wasNum) b = withUnit(c, b);
      continue;
    }
    if (c.reaction) break;
    if (ch === '(' && b.kind !== 'label') {
      // attached argument / implicit product: v(He), ΔHf(ürünler), 3(−394), (a)(b)
      const g = parseGroup(c, b.end, b.kind === 'sym' || b.kind === 'other');
      if (!g) break;
      // C(grafit), S(rombik): an allotrope of an element, not a variable
      if (/^[CS]$/.test(b.tex) && g.bare !== undefined && /^\\text\{.\}$/.test(g.bare)) b = { ...b, tex: `\\mathrm{${b.tex}}` };
      b = { end: g.end, tex: b.tex + g.tex, w: b.w + g.w, feat: b.feat | g.feat, kind: 'other', tall: b.tall || g.tall, fine: b.fine || g.fine, chunk: unbreak(b) + unbreak(g) };
      continue;
    }
    if (ch === '[' && (b.kind === 'sym' || b.kind === 'conc' || b.kind === 'num' || b.kind === 'other')) {
      // k[A]^2[B], [H+][OH-]
      const g = parseBracket(c, b.end, false);
      if (!g || g.kind === 'group') break;
      b = { end: g.end, tex: b.tex + g.tex, w: b.w + g.w, feat: b.feat | g.feat, kind: 'other', fine: b.fine || g.fine, tall: b.tall, chunk: unbreak(b) + unbreak(g) };
      continue;
    }
    if (ch === 'x' && isDigit(s[b.end + 1])) break; // 1,0x10^-5: the multiplication sign of scientific notation
    if (b.kind === 'num' && b.numeric && !b.sup && (isLetterCh(ch) || ch === '√') && !isHan(ch)) {
      // 2s, 4s^3, 27s^4, 2n, 3√2
      const f = parseFactor(c, b.end);
      if (!f || (f.kind !== 'sym' && f.kind !== 'other')) return null;
      b = { end: f.end, tex: b.tex + f.tex, w: b.w + f.w, feat: b.feat | f.feat, kind: 'other', sup: f.sup, fine: f.fine, tall: f.tall, chunk: unbreak(b) + unbreak(f) };
      break;
    }
    break;
  }
  return b;
}

/** A factor, or — inside brackets — a word label when the content is not an expression. */
function parseOperand(c: Ctx, i: number): R | null {
  const s = c.s;
  const f = parseFactor(c, i);
  if (c.depth > 0 && !c.reaction) {
    const k = f ? f.end : -1;
    const wordAfter = f && isSp(s[k]) && isLetterCh(s[k + 1]) && !(s[k + 1] === 'x' && isSp(s[k + 2]) && isDigit(s[k + 3]));
    if (!f) {
      // "(L / mol)^(n-1)", "(% · d · 10) / MA": a unit or a percent sign used as a quantity
      const u = unitAtomAt(s, i);
      const ue = u ? i + u.length : s[i] === '%' ? i + 1 : -1;
      if (ue !== -1 && /^\s?[)\]/·*×]/.test(s.slice(ue, ue + 2))) {
        return { end: ue, tex: u ? unitAtomTex(c, u) : '\\%', w: ue - i, feat: 0, kind: u ? 'chem' : 'sym' };
      }
    }
    if (!f || wordAfter) {
      if (isLetterCh(s[i])) {
        const lab = parseWords(c, i);
        if (lab) return lab;
      }
    }
  }
  return f;
}

interface Op {
  k: '·' | '×' | '/' | ':';
  tight: boolean;
}

function matchMulOp(c: Ctx, prev: R, k: number): { op: Op['k']; len: number } | null {
  const s = c.s;
  const ch = s[k];
  if (ch === '·' || ch === '*' || ch === '⋅' || ch === '∙') return { op: '·', len: 1 };
  if (ch === '×') return { op: '×', len: 1 };
  if (ch === 'x' && prev.digitEnd && isDigit(s[skipSp(s, k + 1)])) return { op: '×', len: 1 };
  if (ch === 'x' && prev.kind === 'group' && isSp(s[k - 1]) && isSp(s[k + 1]) && /[\d(]/.test(s[k + 2] ?? '')) return { op: '×', len: 1 };
  if (ch === '.' && prev.kind === 'sym' && /\d/.test(s[k - 1] ?? '') && /^[A-Za-z]\d/.test(s.slice(k + 1, k + 3))) return { op: '·', len: 1 }; // M1.V1 = M2.V2
  if (ch === '/' && s[k + 1] !== '/') return { op: '/', len: 1 };
  if (ch === ':' && isSp(s[k - 1]) && isSp(s[k + 1])) return { op: ':', len: 1 };
  return null;
}

function frac(c: Ctx, a: R, b: R, end: number): R {
  const feat = a.feat | b.feat;
  if (a.kind === 'chem' && b.kind === 'chem') {
    // conjugate pairs / mixtures written with a slash: CH3COOH/CH3COONa
    return { end, tex: `${a.tex}/${b.tex}`, w: a.w + b.w + 1, feat, kind: 'other', compound: true };
  }
  const wa = a.bareW ?? a.w;
  const wb = b.bareW ?? b.w;
  const stack = c.display || (!a.tall && !b.tall && Math.max(wa, wb) <= 9 && !a.fine && !b.fine);
  const labelOnly = a.kind === 'label' && b.kind === 'label';
  if (labelOnly && !c.display) {
    return { end, tex: `${a.tex}/${b.tex}`, w: a.w + b.w + 1, feat: feat | F_LABFRAC, kind: 'other', fine: true, compound: true };
  }
  if (stack) {
    return { end, tex: `\\frac{${a.bare ?? a.tex}}{${b.bare ?? b.tex}}`, w: Math.max(wa, wb) * (c.display ? 1 : 0.75) + 0.4, feat: feat | (labelOnly ? F_LABFRAC : F_FRAC), kind: 'other', tall: true, fine: a.fine || b.fine };
  }
  const pa = a.compound ? `(${a.tex})` : a.tex;
  const pb = b.compound ? `(${b.tex})` : b.tex;
  return { end, tex: `${pa}/${pb}`, w: a.w + b.w + 1, feat: feat | F_FRAC, kind: 'other', tall: a.tall || b.tall, fine: a.fine || b.fine, compound: true, chunk: unbreak(a) + unbreak(b) + 1 };
}

function composeLevel(c: Ctx, items: R[], ops: Op['k'][]): R {
  if (items.length === 1) return items[0];
  const end = items[items.length - 1].end;
  if (ops.length === 1 && ops[0] === '/') return frac(c, items[0], items[1], end);
  let tex = '';
  let w = 0;
  let feat = 0;
  let tall = false;
  let fine = false;
  let piece = 0;
  let chunk = 0;
  items.forEach((it, k) => {
    const nearSlash = ops[k - 1] === '/' || ops[k] === '/';
    const t = nearSlash && it.compound ? `(${it.tex})` : it.tex;
    if (k > 0) {
      const op = ops[k - 1];
      tex += op === '·' ? ' \\cdot ' : op === '×' ? ' \\times ' : op === ':' ? ' : ' : '/';
      w += op === '/' ? 0.6 : 1.4;
      if (op === '/' && !(items[k - 1].kind === 'chem' && it.kind === 'chem')) feat |= F_FRAC;
      // "0,24 mol NH3 · 4 = …": a species used as a factor belongs to a sentence, not to an equation
      if (op !== '/' && c.depth === 0 && (items[k - 1].kind === 'chem' || it.kind === 'chem')) feat |= F_CHEMMUL;
    }
    tex += t;
    w += it.w;
    // KaTeX can break after · and × but not at a slash
    piece = k > 0 && ops[k - 1] === '/' ? piece + unbreak(it) + 0.6 : unbreak(it) + 1.4;
    chunk = Math.max(chunk, piece);
    feat |= it.feat;
    tall ||= !!it.tall;
    fine ||= !!it.fine;
  });
  return { end, tex, w, feat, kind: 'other', tall, fine, compound: true, chunk };
}

/** Products and quotients. Operators written without spaces bind tighter than spaced ones. */
function parseTerm(c: Ctx, i: number): R | null {
  const s = c.s;
  const first = parseOperand(c, i);
  if (!first) return null;
  // tight level
  const tightLevel = (start: R): R => {
    const items = [start];
    const ops: Op['k'][] = [];
    for (;;) {
      const last = items[items.length - 1];
      const m = matchMulOp(c, last, last.end);
      if (!m || m.op === ':') break;
      const n = parseOperand(c, last.end + m.len);
      if (!n) break;
      items.push(n);
      ops.push(m.op);
    }
    return composeLevel(c, items, ops);
  };
  const items = [tightLevel(first)];
  const ops: Op['k'][] = [];
  for (;;) {
    const last = items[items.length - 1];
    if (!isSp(s[last.end])) break;
    const k = skipSp(s, last.end);
    const m = matchMulOp(c, last, k);
    if (!m || !isSp(s[k + m.len])) break;
    const at = skipSp(s, k + m.len);
    let n = parseOperand(c, at);
    if (!n && c.depth === 0 && c.sawRel && (m.op === '·' || m.op === '×')) {
      // "n = M · V · iyon sayısı)" — a trailing word factor closes the equation
      c.depth++;
      const lab = parseTrailingWords(c, at);
      c.depth--;
      if (lab) n = lab;
    }
    if (!n) break;
    if (m.op === ':') {
      // a ratio only between two numbers or two symbols ("2 : 1", "V_H2 : V_O2")
      const quantity = (r: R) => r.kind === 'sym' || (r.kind === 'other' && !r.compound);
      if (!!last.numeric !== !!n.numeric || (!last.numeric && !(quantity(last) && quantity(n)))) break;
    }
    items.push(n.kind === 'label' ? n : tightLevel(n));
    ops.push(m.op);
  }
  return composeLevel(c, items, ops);
}

function parseTrailingWords(c: Ctx, i: number): R | null {
  const s = c.s;
  const m = /^[\p{Ll}][\p{L}\p{M}]+(?: [\p{Ll}][\p{L}\p{M}]+){0,2}/u.exec(s.slice(i, i + 60));
  if (!m) return null;
  const end = i + m[0].length;
  if (!/[),.;]/.test(s[end] ?? '') && end !== s.length) return null;
  return { end, tex: label(c, m[0]), w: m[0].length, feat: 0, kind: 'label', fine: true };
}

/** Sums and differences with an optional leading sign. */
function parseExpr(c: Ctx, i: number): R | null {
  const s = c.s;
  let j = i;
  let lead = '';
  const sc = s[j];
  if ((sc === '-' || sc === '−' || sc === '+' || sc === '±' || (sc === '–' && isDigit(s[j + 1]) && /[=≈<>(] ?$/.test(s.slice(Math.max(0, j - 2), j)))) && !isSp(s[j + 1])) {
    lead = sc === '+' ? '+' : sc === '±' ? '\\pm ' : '-';
    j++;
  }
  const first = parseTerm(c, j);
  if (!first) return null;
  if (!lead && first.kind === 'label') {
    // a label may still be one side of a quotient/sum inside brackets; handled by parseTerm
  }
  let cur: R = lead ? { ...first, tex: lead + first.tex, w: first.w + 0.6, kind: first.kind === 'num' ? 'num' : 'other', bare: undefined, bareW: undefined, roman: false } : first;
  let chunk = unbreak(cur);
  let maxChunk = 0;
  let chemTerm = first.kind === 'chem';
  for (;;) {
    const before = isSp(s[cur.end]);
    const k = skipSp(s, cur.end);
    const op = s[k];
    const dash = op === '–' && before && isSp(s[k + 1]);
    if (op !== '+' && op !== '-' && op !== '−' && op !== '±' && !dash) break;
    if (c.reaction && op !== '+') break;
    const after = isSp(s[k + 1]);
    if (before !== after) break;
    const hyphen = op === '-';
    if (!before && hyphen) {
      if (!c.allowTight && c.depth === 0) break;
      if (c.depth === 0) c.usedTight = true;
    }
    // "->" is an arrow, not a minus
    if (hyphen && s[k + 1] === '>') break;
    if (op === '+' && s[k + 1] === '+') break;
    const n = parseTerm(c, skipSp(s, k + 1));
    if (!n) break;
    chemTerm ||= n.kind === 'chem';
    // "pH ≈ 8,2-10": two plain numbers joined by a tight hyphen are a range, not a difference
    const range = hyphen && !before && !!cur.numeric && !!n.numeric && c.depth === 0 && !/^\s?[=≈]/.test(s.slice(n.end, n.end + 2));
    const optex = range ? '\\text{--}' : op === '+' ? ' + ' : op === '±' ? ' \\pm ' : ' - ';
    maxChunk = Math.max(maxChunk, chunk);
    chunk = unbreak(n) + 1.5;
    cur = {
      end: n.end,
      tex: cur.tex + optex + n.tex,
      w: cur.w + n.w + 1.5,
      feat: cur.feat | n.feat,
      kind: 'other',
      tall: cur.tall || n.tall,
      fine: cur.fine || n.fine,
      compound: true,
    };
  }
  cur.chunk = Math.max(maxChunk, chunk);
  if (chemTerm && c.depth === 0) cur = { ...cur, feat: cur.feat | F_CHEM };
  return cur;
}

// relations -------------------------------------------------------------------

interface Rel {
  len: number;
  tex: string;
  arrow: boolean;
}
const RELS: Array<[string, string, boolean]> = [
  ['<==>', '\\rightleftharpoons', true], ['<-->', '\\rightleftharpoons', true], ['<=>', '\\rightleftharpoons', true], ['<->', '\\rightleftharpoons', true],
  ['⇌', '\\rightleftharpoons', true], ['⇄', '\\rightleftharpoons', true], ['-->', '\\rightarrow', true], ['->', '\\rightarrow', true],
  ['→', '\\rightarrow', true], ['⟶', '\\rightarrow', true], ['=>', '\\Rightarrow', true], ['⇒', '\\Rightarrow', true],
  ['<=', '\\leq', false], ['>=', '\\geq', false], ['≤', '\\leq', false], ['≥', '\\geq', false], ['≠', '\\neq', false], ['!=', '\\neq', false],
  ['≈', '\\approx', false], ['≅', '\\approx', false], ['≃', '\\approx', false], ['∝', '\\propto', false], ['≪', '\\ll', false], ['≫', '\\gg', false],
  ['=', '=', false], ['<', '<', false], ['>', '>', false],
];
function matchRel(s: string, k: number): Rel | null {
  for (const [t, tex, arrow] of RELS) {
    if (s.startsWith(t, k)) {
      if (t === '=' && s[k + 1] === '=') return null;
      return { len: t.length, tex, arrow };
    }
  }
  return null;
}

interface RunResult {
  end: number;
  tex: string;
  feat: number;
  chunk: number;
  labels: string[];
}

const UNI_SCRIPT = /[₀-₉₊₋⁰¹²³⁴-⁹⁺⁻]/;
const asciiScripts = (s: string): string =>
  UNI_SCRIPT.test(s) ? s.replace(/[₀-₉₊₋⁰¹²³⁴-⁹⁺⁻]/g, (ch) => SUB_CHARS[ch] ?? SUP_CHARS[ch] ?? ch) : s;

function newCtx(s: string, display: boolean): Ctx {
  return { s, a: asciiScripts(s), display, labels: [], depth: 0, sawRel: false, orbital: false, reaction: false, allowTight: true, usedTight: false };
}

const HEAT_WORDS = /^(?:ısı|enerji|heat|energy|Wärme|Energie|chaleur|énergie|тепло|теплота|энергия|حرارة|طاقة|热量|热|能量|germ|germahî|enerjî)(?![\p{L}\p{N}])/u;

/** A reaction equation: species joined by "+" with at least one arrow. */
function parseReactionAt(s: string, i: number, display: boolean): RunResult | null {
  const c = newCtx(s, display);
  c.reaction = true;
  let strong = false;
  let generic = 0;
  let nonRoman = false;
  const species = (j: number): R | null => {
    // spaced coefficient: "2 H2O"
    const cm = /^(\d{1,2}|\d\/\d) (?=[A-Z([])/.exec(s.slice(j, j + 5));
    const at = cm ? j + cm[0].length : j;
    const tok = chemTokenAt(c.a, at);
    if (tok && (!cm || !/^\d/.test(tok.raw))) {
      if (isWordCh(s[tok.end]) || s[tok.end] === '^' || s[tok.end] === '_') return null;
      const r = chemR(c, tok);
      if (!r) return null;
      if (tok.strong) strong = true;
      const coef = cm ? (cm[1].includes('/') ? `\\tfrac{${cm[1][0]}}{${cm[1][2]}}` : cm[1]) : '';
      return cm ? { ...r, tex: `${coef}\\,${r.tex}`, w: r.w + 1.5 } : r;
    }
    if (cm) return null;
    // generic species: X + 2Y → Z + 2T
    const gp = /^(\d{0,2})([A-Z])([1-9]?)(\((?:g|k|s|l|aq|suda)\))?(?![\p{L}\p{N}^_(\[])/u.exec(s.slice(j, j + 12));
    if (gp) {
      generic++;
      if (gp[1] || gp[3] || gp[4] || !/[IVX]/.test(gp[2])) nonRoman = true;
      const tex = `${gp[1] ? `${gp[1]}\\,` : ''}\\mathrm{${gp[2]}}${gp[3] ? `_{${gp[3]}}` : ''}${gp[4] ? `\\mathrm{${gp[4]}}` : ''}`;
      return { end: j + gp[0].length, tex, w: gp[0].length, feat: 0, kind: 'chem' };
    }
    const hw = HEAT_WORDS.exec(s.slice(j, j + 12));
    if (hw) return { end: j + hw[0].length, tex: label(c, hw[0]), w: hw[0].length, feat: 0, kind: 'label' };
    if (isDigit(s[j])) {
      c.reaction = false;
      const n = parseNumber(c, j);
      c.reaction = true;
      if (n && !n.numeric && /kJ|кДж|kcal|J\}/.test(s.slice(j, n.end))) return n;
    }
    return null;
  };
  const side = (j: number): R | null => {
    let cur = species(j);
    if (!cur) return null;
    let chunk = unbreak(cur);
    for (;;) {
      const k = skipSp(s, cur.end);
      if (s[k] !== '+' || s[k + 1] === '+') break;
      const n = species(skipSp(s, k + 1));
      if (!n) break;
      chunk = Math.max(chunk, n.w + 1.5);
      cur = { end: n.end, tex: `${cur.tex} + ${n.tex}`, w: cur.w + n.w + 1.5, feat: 0, kind: 'other' };
    }
    cur.chunk = chunk;
    return cur;
  };
  const first = side(i);
  if (!first) return null;
  let tex = first.tex;
  let end = first.end;
  let chunk = first.chunk ?? first.w;
  let arrows = 0;
  for (;;) {
    const k = skipSp(s, end);
    const rel = matchRel(s, k);
    if (!rel || !rel.arrow) break;
    const r = side(skipSp(s, k + rel.len));
    if (!r) break;
    tex += ` ${rel.tex} ${r.tex}`;
    end = r.end;
    chunk = Math.max(chunk, (r.chunk ?? r.w) + 2);
    arrows++;
  }
  if (!arrows || !(strong || (generic >= 3 && nonRoman))) return null;
  return { end, tex, feat: F_REL | F_ARROW, chunk, labels: c.labels };
}

function parseEquationAt(s: string, i: number, display: boolean, orbital: boolean, allowTight: boolean): (RunResult & { usedTight: boolean }) | null {
  const c = newCtx(s, display);
  c.orbital = orbital;
  c.allowTight = allowTight;
  const first = parseExpr(c, i);
  if (!first || first.kind === 'label') return null;
  let tex = first.tex;
  let end = first.end;
  let feat = first.feat;
  let chunk = first.chunk ?? first.w;
  let prev = first;
  for (;;) {
    const k = skipSp(s, end);
    const rel = matchRel(s, k);
    if (!rel) break;
    const before = k > end;
    const after = isSp(s[k + rel.len]);
    if (before !== after && !rel.arrow) {
      // "olan =CH2", "pH= 7" keep today's rendering unless both sides are tight or both spaced
      break;
    }
    c.sawRel = true;
    const at = skipSp(s, k + rel.len);
    const r = parseExpr(c, at);
    if (!r || r.kind === 'label') break;
    if (rel.arrow) {
      // "III → IV → I → II" (statement order) and "… → 2. Sonraki adım" (step lists) are not equations
      if (prev.roman || r.roman) break;
      // a species next to an arrow is a reaction; if the reaction parser did not take it, leave it alone
      if ((prev.feat | r.feat) & F_CHEM) break;
      if (r.numeric && /^[.)]/.test(s.slice(r.end, r.end + 1)) && (isSp(s[r.end + 1]) || r.end + 1 >= s.length)) break;
    }
    tex += ` ${rel.tex} ${r.tex}`;
    end = r.end;
    feat |= r.feat | F_REL | (rel.arrow ? F_ARROW : F_EQ);
    chunk = Math.max(chunk, (r.chunk ?? r.w) + 2);
    prev = r;
  }
  // an arrow in an equation only links two equations ("… = 0,2 · Vb → Vb = 50 mL"); "Y -> 0,05 mol Z" is prose
  if (feat & F_ARROW && !(feat & F_EQ)) return null;
  return { end, tex, feat, chunk, labels: c.labels, usedTight: c.usedTight };
}

const ORBITAL_HINT = /(?:^|[^\p{L}\p{N}.,])[1-7][pdf](?![\p{L}\p{N}^])/u;

function parseRunAt(s: string, i: number, display: boolean): RunResult | null {
  // placeholder element data: "X = Na", "Z = P"
  const pe = /^([XYZTQRAM]) = ([A-Z][a-z]?)(?![\p{L}\p{N}^_(\[+\-·*/])/u.exec(s.slice(i, i + 8));
  if (pe && isElementSymbol(pe[2]) && !/^\s?[=<>+·*/×]/.test(s.slice(i + pe[0].length, i + pe[0].length + 2))) {
    return { end: i + pe[0].length, tex: `\\mathrm{${pe[1]}} = \\mathrm{${pe[2]}}`, feat: F_REL, chunk: 6, labels: [] };
  }
  if (s[i] === '≈' || s[i] === '≤' || s[i] === '≥') {
    // "(≈ 7,4)", "≥ 3": a bare comparison with a number
    const c = newCtx(s, display);
    const at = skipSp(s, i + 1);
    const n = isDigit(s[at]) || ((s[at] === '-' || s[at] === '−') && isDigit(s[at + 1])) ? parseExpr(c, at) : null;
    if (!n) return null;
    return { end: n.end, tex: `${s[i] === '≈' ? '\\approx' : s[i] === '≤' ? '\\leq' : '\\geq'} ${n.tex}`, feat: n.feat | F_REL, chunk: n.w + 2, labels: c.labels };
  }
  const rx = parseReactionAt(s, i, display);
  let eq = /^[1-7][spdf] = \d \+ \d/.test(s.slice(i, i + 10)) ? parseEquationAt(s, i, display, true, true) : parseEquationAt(s, i, display, false, true);
  if (eq && eq.usedTight && !(eq.feat & F_REL)) eq = parseEquationAt(s, i, display, false, false);
  if (eq && (ORBITAL_HINT.test(s.slice(i, eq.end)) || /^[1-7][spdf] = \d \+ \d/.test(s.slice(i, i + 10)))) eq = parseEquationAt(s, i, display, true, !!(eq.feat & F_REL)) ?? eq;
  if (rx && (!eq || rx.end >= eq.end)) return rx;
  return eq;
}

// ---------------------------------------------------------------------------
// Run detection
// ---------------------------------------------------------------------------

const START_CH = /[\p{L}\d(\[√∛Σ∑%+\-−≈≤≥]/u;

function canStart(s: string, i: number): boolean {
  const ch = s[i];
  if (!START_CH.test(ch) || isHan(ch)) return false;
  const prev = s[i - 1];
  if (prev === undefined) return true;
  if (isWordCh(prev)) return false;
  if (prev === "'" || prev === '’' || prev === '^' || prev === '°' || prev === '{' || prev === '\\' || prev === '@' || prev === '#' || prev === '?' || prev === '&') return false;
  if ((prev === '-' || prev === '−' || prev === '–' || prev === '/' || prev === '.' || prev === ',' || prev === ':' || prev === '=' || prev === '≡') && isWordCh(s[i - 2])) return false;
  if (ch === '+' || ch === '-' || ch === '−') {
    if (!(isDigit(s[i + 1]) || isLetterCh(s[i + 1]) || s[i + 1] === '(')) return false;
    if (prev === '+' || prev === '-' || prev === ')' || prev === ']') return false;
  }
  if (ch === '%' && !isDigit(s[i + 1])) return false;
  return true;
}

function worthy(s: string, i: number, r: RunResult): boolean {
  // "(mass / molar mass)" alone is a remark; "(ürün miktarı / teorik miktar) × 100" is a formula
  const labFrac = !!(r.feat & F_LABFRAC) && /[×·*]| x /.test(s.slice(i, r.end));
  if (!(r.feat & (F_REL | F_ROOT | F_POW | F_FRAC)) && !labFrac) return false;
  const raw = s.slice(i, r.end);
  if (!(r.feat & F_REL) && r.feat & F_CHEM) return false; // "CO2 + (y/2)": part of a reaction, not an equation
  if (r.feat & F_CHEMMUL) return false;
  // a run that stops in front of / right after a multiplication or division sign is a truncated
  // equation ("m = n / kg çözücü", "n = M · V · iyon sayısı"): keep the whole thing as it is today
  if (/^[ \u00A0]?[·*×/][ \u00A0]?[^\s/]/.test(s.slice(r.end, r.end + 4))) return false;
  const beforeRun = s.slice(Math.max(0, i - 28), i);
  if (/(?:[·*×/^]|[\d)\]] x)[ \u00A0]?$/.test(beforeRun)) return false;
  if (/[\p{L}\p{N})\]] [+\-−–] $/u.test(beforeRun)) return false;
  if (/[\d)\]] : $/.test(beforeRun)) return false; // the second half of a ratio
  if (/^[A-Z]/.test(raw) && /[+→⇌] \d{1,2} $/.test(beforeRun)) return false; // "2 H–H + 1 O=O = …": a term of a sum
  if (/^\(\d+\)\s?=/.test(raw)) return false;
  // "CO3 2-" whose spaced charge the species parser could not attach (CJK text follows)
  if (/^ [1-4][+\-−]/.test(s.slice(r.end, r.end + 3))) return false;
  // "4 g H2 + 32 g O2 = 36 g H2O": a species that belongs to the amount in front of it
  if (/^[A-Z]/.test(raw) && /\d\s?(?:g|mg|kg|mol|mmol|mL|L|г|моль|мл|л|مول|克|升)\s$/.test(beforeRun) && !/^[A-Z][a-z]?\s?=\s?\d+(?:[.,]\d+)?(?:\s?g\/mol)?$/.test(raw)) return false; // "2p (3) + 3p (3) = 10": an electron count, not an equation
  if (/^ [+\-−–] [\d(\[Δ]/.test(s.slice(r.end, r.end + 4))) return false;
  if (/^ x \d/.test(s.slice(r.end, r.end + 4)) && /[\d)]$/.test(raw)) return false;
  // a reaction cut out of a longer one ("Cu + derişik HNO3 → NO2", "Na + 1/2 Cl2 → NaCl") keeps today's rendering
  if (r.feat & F_ARROW && !(r.feat & F_EQ) && /\+ (?:[\p{L}\d/]+ ){0,2}$/u.test(beforeRun)) return false;
  const next = s[r.end];
  if (isWordCh(next) || next === '^' || next === '_' || next === '°') return false;
  if (!(r.feat & (F_REL | F_ROOT | F_POW))) {
    // a lone fraction
    if (next === '/' || s[i - 1] === '/') return false; // dates, a/b/c lists
    if (raw === '24/7') return false;
    if (/^[spdfSPDF]\s?\/\s?[spdfSPDF]$/.test(raw)) return false; // "s/p orbitalleri"
    if (/^[A-Za-z]\s?\/\s?[A-Za-z]$/.test(raw) && !/^[PVTnmMdQRC]\s?\/\s?[PVTnmMdQRC]$/.test(raw)) return false; // "A/B", "e/m"
    if (/^\d+\s?\/\s?\d+$/.test(raw) && (next === '.' || next === ',') && isDigit(s[r.end + 1])) return false;
  }
  return true;
}

function tagSpans(s: string): Array<[number, number]> {
  const out: Array<[number, number]> = [];
  for (let a = s.indexOf('{{chem:'); a !== -1; a = s.indexOf('{{chem:', a + 1)) {
    const b = s.indexOf('}}', a);
    if (b === -1) break;
    out.push([a, b + 2]);
    a = b;
  }
  return out;
}

interface FoundRun extends MathRun {
  tex: string;
  labels: string[];
  chunk: number;
}

function scanRuns(text: string, display: boolean): FoundRun[] {
  const out: FoundRun[] = [];
  if (!text || text.length < 3) return out;
  // cheap pre-filter: an equation needs an operator character
  if (!/[=≈≠<>≤≥^√/→⇌⇒∝⁰¹²³⁴-⁹⁺⁻]|sqrt|->/.test(text)) return out;
  if (HAS_PLACEHOLDER.test(text)) return out;
  const tags = tagSpans(text);
  let i = 0;
  while (i < text.length) {
    const tag = tags.find(([a, b]) => i >= a && i < b);
    if (tag) {
      i = tag[1];
      continue;
    }
    if (!canStart(text, i)) {
      i++;
      continue;
    }
    let r: RunResult | null = null;
    try {
      r = parseRunAt(text, i, display);
    } catch {
      r = null;
    }
    if (r && r.end > i && worthy(text, i, r) && !tags.some(([a, b]) => r!.end > a && i < b) && r.labels.length <= LABEL_MAX && texIsSafe(r.tex)) {
      // Inline, a piece KaTeX cannot break that is wider than a phone line (a long "formula in words",
      // a long bracketed quotient) wraps better as plain text than as one overflowing box.
      const tooWide = !display && r.chunk > INLINE_MAX_CHUNK;
      if (!tooWide) out.push({ start: i, end: r.end, raw: text.slice(i, r.end), tex: r.tex, labels: r.labels, chunk: r.chunk });
      i = r.end;
    } else {
      i++;
    }
  }
  return out;
}

/** Only our own output may reach KaTeX: printable ASCII plus label placeholders, balanced braces. */
function texIsSafe(tex: string): boolean {
  if (!/^[\x20-\x7E\uAC00-\uACC8]*$/.test(tex)) return false;
  let depth = 0;
  for (const ch of tex) {
    if (ch === '{') depth++;
    else if (ch === '}') {
      depth--;
      if (depth < 0) return false;
    }
  }
  return depth === 0;
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Locates the equation runs of a string (inline rules). */
export function findMathRuns(text: string): MathRun[] {
  return scanRuns(text, false).map(({ start, end, raw }) => ({ start, end, raw }));
}

const texEscape = (t: string): string =>
  t.replace(/[\\{}$&#^_%~]/g, (ch) => (ch === '\\' ? '\\textbackslash{}' : ch === '^' ? '\\^{}' : ch === '~' ? '\\~{}' : `\\${ch}`));
const htmlEscape = (t: string): string => t.replace(/[&<>"']/g, (ch) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[ch]!);

const readableTex = (tex: string, labels: string[]): string =>
  tex.replace(PLACEHOLDER_RE, (ch) => texEscape(labels[ch.charCodeAt(0) - LABEL_BASE] ?? ''));

/**
 * Converts one equation run to LaTeX (labels shown as \text{…}). Returns null when the string is
 * not, as a whole, an equation the converter is confident about.
 */
export function toLatex(run: string, opts: { display?: boolean } = {}): string | null {
  const runs = scanRuns(run, !!opts.display);
  if (runs.length !== 1 || runs[0].start !== 0 || runs[0].end !== run.length) return null;
  return readableTex(runs[0].tex, runs[0].labels);
}

const htmlCache = new Map<string, string | null>();
const HTML_CACHE_MAX = 4000;

function renderTex(tex: string, labels: string[], display: boolean): string | null {
  const key = `${display ? 'D' : 'I'}\u0001${tex}\u0001${labels.join('\u0002')}`;
  const hit = htmlCache.get(key);
  if (hit !== undefined) return hit;
  let html: string | null = null;
  try {
    html = katex.renderToString((display ? '\\displaystyle ' : '') + tex, {
      throwOnError: true,
      output: 'htmlAndMathml',
      displayMode: false,
      strict: false,
      trust: false,
    });
    html = html.replace(PLACEHOLDER_RE, (ch) => htmlEscape(labels[ch.charCodeAt(0) - LABEL_BASE] ?? ''));
    // Expose each box's depth so that CSS can keep a scrollable box on the text baseline
    // (an inline-block with overflow other than visible sits on its bottom edge).
    html = html.replace(
      /<span class="katex-base"><span class="katex-strut" style="height:[\d.]+em;vertical-align:(-[\d.]+em);">/g,
      (m, depth: string) => m.replace('<span class="katex-base">', `<span class="katex-base" style="--kd:${depth}">`)
    );
  } catch {
    html = null;
  }
  if (htmlCache.size >= HTML_CACHE_MAX) htmlCache.clear();
  htmlCache.set(key, html);
  return html;
}

/** Renders one run with KaTeX. Null on any doubt or error (the caller falls back). */
export function renderMathRun(run: string, opts: { display?: boolean } = {}): { html: string; latex: string } | null {
  const runs = scanRuns(run, !!opts.display);
  if (runs.length !== 1 || runs[0].start !== 0 || runs[0].end !== run.length) return null;
  const html = renderTex(runs[0].tex, runs[0].labels, !!opts.display);
  return html === null ? null : { html, latex: readableTex(runs[0].tex, runs[0].labels) };
}

const segCache = new Map<string, MathSegment[]>();
const SEG_CACHE_MAX = 3000;
/**
 * Width guards, in characters of the widest piece KaTeX cannot break:
 *  - above WIDE_CHUNK a run is flagged `wide`: inline, each unbreakable box may scroll inside itself
 *    (see .chem-math--wide in theme.css); in display style the equation is set a little smaller;
 *  - above INLINE_MAX_CHUNK an inline run is not typeset at all (plain text wraps, a box cannot).
 */
const WIDE_CHUNK = 22;
const INLINE_MAX_CHUNK = 36;

/**
 * Splits a string into prose and typeset equations. Concatenating `text` / `raw` of the segments
 * always gives back the original string.
 */
export function typesetMath(text: string, opts: { display?: boolean } = {}): MathSegment[] {
  if (!text) return [];
  const display = !!opts.display;
  const key = (display ? 'D' : 'I') + text;
  const hit = segCache.get(key);
  if (hit) return hit;
  const segs: MathSegment[] = [];
  let cursor = 0;
  const pushText = (t: string) => {
    if (!t) return;
    const last = segs[segs.length - 1];
    if (last && last.type === 'text') last.text += t;
    else segs.push({ type: 'text', text: t });
  };
  for (const run of scanRuns(text, display)) {
    const html = renderTex(run.tex, run.labels, display);
    if (html === null) continue; // fall back: stays in the surrounding text
    pushText(text.slice(cursor, run.start));
    segs.push({ type: 'math', raw: run.raw, latex: readableTex(run.tex, run.labels), html, wide: run.chunk > WIDE_CHUNK });
    cursor = run.end;
  }
  pushText(text.slice(cursor));
  if (segCache.size >= SEG_CACHE_MAX) segCache.clear();
  segCache.set(key, segs);
  return segs;
}

/** True when the whole (trimmed) string is exactly one equation. */
export function isWholeEquation(text: string): boolean {
  const t = text.trim();
  if (!t) return false;
  const runs = scanRuns(t, false);
  return runs.length === 1 && runs[0].start === 0 && runs[0].end === t.length;
}

/** Diagnostics for tests and corpus sweeps: every detected run with its LaTeX and KaTeX status. */
export function inspectMath(text: string, opts: { display?: boolean } = {}): Array<MathRun & { latex: string; ok: boolean; error?: string; wide: boolean }> {
  const display = !!opts.display;
  return scanRuns(text, display).map((run) => {
    let ok = true;
    let error: string | undefined;
    try {
      katex.renderToString((display ? '\\displaystyle ' : '') + run.tex, { throwOnError: true, output: 'htmlAndMathml', displayMode: false, strict: false, trust: false });
    } catch (e) {
      ok = false;
      error = e instanceof Error ? e.message : String(e);
    }
    return { start: run.start, end: run.end, raw: run.raw, latex: readableTex(run.tex, run.labels), ok, error, wide: run.chunk > WIDE_CHUNK };
  });
}
