/**
 * Display-time chemical notation for plain-ASCII bank text.
 *
 * The question bank stores formulas as ASCII ("H2SO4", "Fe3+", "SO4^2-", "10^-3",
 * "1s2 2s2", "sp3", "->"). This module turns a string into segments that the UI
 * renders with real <sub>/<sup> elements, without changing the stored data.
 *
 * Design rules (kept conservative on purpose):
 *  - A token is only formatted when it parses as a sequence of real element symbols
 *    (or ÖSYM placeholders X, Y, Z, A, Q, R, M) and carries a subscript, a charge,
 *    a hydrate dot, or is a known digit-less formula (NaCl, HCl, CO, NO, HF ...).
 *  - Roman numerals, exam names, period-table groups (2A, 8A), units, option letters,
 *    ids and words in any script are left untouched.
 *  - Characters are not replaced, only wrapped (H<sub>2</sub>SO<sub>4</sub> still
 *    reads "H2SO4"), except: "->" becomes "→", "<=>"/"<->" become "⇌", the charge /
 *    exponent hyphen becomes a real minus sign (U+2212) and "x10^" becomes "×10".
 *
 * Pure TypeScript (no React) so it can be unit-tested with `npx tsx`.
 */

export type ChemPartKind = 'n' | 'sub' | 'sup';
export interface ChemPart {
  k: ChemPartKind;
  s: string;
}

export type ChemTokenKind =
  | 'formula'
  | 'isotope'
  | 'econf'
  | 'core'
  | 'hybrid'
  | 'vsepr'
  | 'variable'
  | 'electron'
  | 'power'
  | 'unicode'
  | 'tag';

export interface ChemToken {
  kind: ChemTokenKind;
  start: number;
  end: number;
  raw: string;
  parts: ChemPart[];
  /** weak tokens (bare element symbols, "4Fe", "HA", "[Ar]") only render inside a group with a strong token */
  strong: boolean;
}

export type ChemSegment =
  | { type: 'text'; text: string }
  | { type: 'chem'; tokens: Array<{ parts: ChemPart[] } | { gap: string }>; raw: string };

// ---------------------------------------------------------------------------
// Element data
// ---------------------------------------------------------------------------

/** Elements 1..94 in order (index + 1 = atomic number). Cn and super-heavy symbols are left out on purpose. */
const ELEMENT_ORDER = (
  'H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr ' +
  'Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb ' +
  'Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu'
).split(' ');
const ATOMIC_NUMBER = new Map<string, number>(ELEMENT_ORDER.map((sym, i) => [sym, i + 1]));
const ELEMENTS = new Set(ELEMENT_ORDER);
/** Generic letters ÖSYM uses for unknown elements ("XY2", "X2+", "A-", "MX2"). */
const PLACEHOLDERS = new Set(['X', 'Y', 'Z', 'A', 'Q', 'R', 'M']);
/** Digit-less all-capital formulas that are safe to isolate (everything else all-caps is an acronym). */
const ALLCAPS_DIGITLESS_OK = new Set(['CO', 'NO', 'HF', 'HI', 'HCN', 'KI', 'KF', 'OH', 'COOH', 'CHO', 'COO', 'CN', 'NH', 'SCN', 'OCN', 'KOH', 'KCN', 'KSCN', 'HCOOH', 'CHCOOH', 'NOH']);
const PROSE_TOKENS = /^(?:[IVXLCDM]+|TYT|AYT|YKS|ÖSYM|MEB|LGS|KPSS|PVC|PET|CNS|SI|IUPAC|NOT|ON|IN|AS|AT|BE|HE|OK)$/;
/** Polyatomic ions that may be written with a space before the charge ("SO4 2-"). */
const SPACED_CHARGE_IONS = new Set(['SO4', 'SO3', 'CO3', 'PO4', 'HPO4', 'CrO4', 'Cr2O7', 'C2O4', 'S2O3', 'SiO3', 'MnO4', 'NO3', 'NH4', 'OH', 'HCO3', 'HSO4', 'H2PO4', 'NO2', 'ClO4', 'ClO3', 'ClO', 'CN', 'CH3COO']);
const STATE_SYMBOLS = /^\((?:k|s|g|l|aq|suda|sıvı|katı|gaz|buhar|steam|solid|liquid|gas|тв|ж|г|р-р|вод|aq\.)\)/;
const NOBLE_CORE = /^\[(?:He|Ne|Ar|Kr|Xe|Rn)\]/;

const MINUS = '−';
// CJK ideographs count as a boundary: Chinese text attaches formulas directly ("矾油是H2SO4的").
// Arabic letters too: the prefixes و / ب / ل are written joined to the next word ("وSO2").
const isLetterOrDigit = (ch: string | undefined): boolean => !!ch && /[\p{L}\p{N}_]/u.test(ch) && !/[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Arabic}]/u.test(ch);
const isLetter = (ch: string | undefined): boolean => !!ch && /\p{L}/u.test(ch);
const signChar = (c: string) => (c === '-' || c === '−' ? MINUS : c);

// ---------------------------------------------------------------------------
// Formula parser
// ---------------------------------------------------------------------------

interface BodyResult {
  end: number;
  parts: ChemPart[];
  units: number; // atom/group units
  elements: number; // real element units
  placeholders: number;
  hasSub: boolean;
  hasLower: boolean;
  hasParen: boolean;
  /** subscript digits of the very last unit (for charge disambiguation) */
  lastSub: { partIndex: number; digits: string } | null;
  lastWasBracket: boolean;
  text: string;
}

function readSubscript(s: string, j: number): string | null {
  // generic CnH2n+2 style subscripts: n, 2n, 2n+2, 2n-2, 2n+1 ...
  const m = /^(\d*n(?:[+\-−]\d)?|\d+)/.exec(s.slice(j));
  if (!m) return null;
  let sub = m[1];
  if (sub.includes('n')) {
    // "n" must not run into a word ("Sn" is tin and handled before; "Cno..." is nonsense)
    const after = s[j + sub.length];
    if (after && /[a-z]/.test(after)) return null;
    // a "+2" after "2n" is part of the subscript only if followed by a non-digit
    if (/[+\-−]\d$/.test(sub) && /\d/.test(s[j + sub.length] ?? '')) sub = sub.replace(/[+\-−]\d$/, '');
  }
  return sub;
}

function parseBody(s: string, start: number, depth = 0): BodyResult | null {
  let j = start;
  const parts: ChemPart[] = [];
  let units = 0;
  let elements = 0;
  let placeholders = 0;
  let hasSub = false;
  let hasLower = false;
  let hasParen = false;
  let lastSub: BodyResult['lastSub'] = null;
  let lastWasBracket = false;

  const pushN = (txt: string) => {
    const last = parts[parts.length - 1];
    if (last && last.k === 'n') last.s += txt;
    else parts.push({ k: 'n', s: txt });
  };

  while (j < s.length) {
    const ch = s[j];
    if (ch === '(' || ch === '[') {
      const close = ch === '(' ? ')' : ']';
      if (!/[A-Z]/.test(s[j + 1] ?? '')) break;
      const inner = parseBody(s, j + 1, depth + 1);
      if (!inner || s[inner.end] !== close) break;
      pushN(ch);
      for (const p of inner.parts) {
        if (p.k === 'n') pushN(p.s);
        else parts.push({ ...p });
      }
      pushN(close);
      j = inner.end + 1;
      units += 1;
      elements += inner.elements;
      placeholders += inner.placeholders;
      hasLower ||= inner.hasLower;
      hasSub ||= inner.hasSub;
      hasParen = true;
      lastSub = null;
      lastWasBracket = ch === '[';
      const sub = readSubscript(s, j);
      if (sub) {
        parts.push({ k: 'sub', s: sub });
        lastSub = { partIndex: parts.length - 1, digits: sub };
        hasSub = true;
        j += sub.length;
      }
      continue;
    }
    if (/[A-Z]/.test(ch)) {
      const two = s.slice(j, j + 2);
      let sym: string | null = null;
      if (two.length === 2 && /[a-z]/.test(two[1]) && ELEMENTS.has(two)) sym = two;
      else if (ELEMENTS.has(ch) || PLACEHOLDERS.has(ch)) sym = ch;
      if (!sym) break;
      if (sym.length === 2) hasLower = true;
      if (ELEMENTS.has(sym)) elements += 1;
      else placeholders += 1;
      units += 1;
      pushN(sym);
      j += sym.length;
      lastSub = null;
      lastWasBracket = false;
      // "n" subscripts only after a closing bracket ((CH2)n); after an element it is a word ("On", "Tin")
      const rawSub = readSubscript(s, j);
      const sub = rawSub && !rawSub.includes('n') ? rawSub : null;
      if (sub) {
        parts.push({ k: 'sub', s: sub });
        lastSub = { partIndex: parts.length - 1, digits: sub };
        hasSub = true;
        j += sub.length;
      }
      continue;
    }
    // bonds inside structural formulas: CH3-CH2-OH, CH2=CH2, HC≡CH, H-Br
    if ((ch === '-' || ch === '=' || ch === '≡') && units > 0 && depth === 0) {
      const next = s[j + 1] ?? '';
      if (/[A-Z]/.test(next) || (next === '(' && /[A-Z]/.test(s[j + 2] ?? ''))) {
        const rest = parseBody(s, j + 1, depth);
        if (rest && rest.units > 0 && !isLetter(s[rest.end])) {
          pushN(ch);
          for (const p of rest.parts) {
            if (p.k === 'n') pushN(p.s);
            else parts.push({ ...p });
          }
          // re-index lastSub against the merged parts
          lastSub = rest.lastSub ? { partIndex: parts.length - (rest.parts.length - rest.lastSub.partIndex), digits: rest.lastSub.digits } : null;
          units += rest.units;
          elements += rest.elements;
          placeholders += rest.placeholders;
          hasSub ||= rest.hasSub;
          hasLower ||= rest.hasLower;
          hasParen ||= rest.hasParen;
          lastWasBracket = rest.lastWasBracket;
          j = rest.end;
          continue;
        }
      }
    }
    break;
  }
  if (units === 0) return null;
  return { end: j, parts, units, elements, placeholders, hasSub, hasLower, hasParen, lastSub, lastWasBracket, text: s.slice(start, j) };
}

const ALKYL = /^(?:CH3|CH2|CH|C\d+H\d+|R)$/;

/** Tries to read a formula token at s[i]. Returns null when the text there is not a formula. */
function parseFormulaAt(s: string, i: number): ChemToken | null {
  let j = i;
  const parts: ChemPart[] = [];
  // coefficient (or isotope / atomic-number prescript)
  const coefM = /^\d{1,3}/.exec(s.slice(j));
  let coef = '';
  if (coefM) {
    coef = coefM[0];
    j += coef.length;
    if (!/[A-Z([]/.test(s[j] ?? '')) return null;
  }
  const body = parseBody(s, j);
  if (!body) return null;
  j = body.end;
  const bodyParts = body.parts.map((p) => ({ ...p }));

  // hydrate / adduct: CuSO4·5H2O, Fe2O3.nH2O, CaCl2·2NH3
  let hydrate = false;
  const hyd = /^([·•∙.])(\d+|n|x)?(?=H2O|NH3)/.exec(s.slice(j));
  if (hyd) {
    const hb = parseBody(s, j + hyd[0].length);
    if (hb && (hb.text === 'H2O' || hb.text === 'NH3')) {
      bodyParts.push({ k: 'n', s: (hyd[1] === '.' ? '·' : hyd[1]) + (hyd[2] ?? '') });
      bodyParts.push(...hb.parts);
      j = hb.end;
      hydrate = true;
    }
  }

  // charge: Na+, Ca2+, SO42-, MnO4-, [Fe(CN)6]3-, SO4^2-, SO4 2-
  let charge = '';
  let chargeExplicitDigits = '';
  let consumedLastSub = false;
  if (!hydrate) {
    const tail = s.slice(j);
    // a charge may be followed by a German compound hyphen ("Ca2+-Ionen", "NO3--Ionen")
    let cm = /^\^?(\d?)([+\-−])(?=-[\p{L}\s]|[^+\-−\d]|$)/u.exec(tail);
    if (cm && !cm[0].startsWith('^') && cm[1] !== '') cm = null; // "Ca2+" digits already eaten as subscript
    const caretSignFirst = /^\^([+\-−])(\d?)(?![\d])/.exec(tail);
    if (cm) {
      const after = s[j + cm[0].length];
      const sign = cm[2];
      const looksLikeBond = sign !== '+' && (/[A-Z]/.test(after ?? '') || (after === '(' && /[A-Z]/.test(s[j + cm[0].length + 1] ?? '')));
      const blocked = isLetterOrDigit(after) || looksLikeBond || (sign === '+' && after === '+' );
      // trailing hyphen after an alkyl group is a bond ("CH3- grubu"), not a charge
      const prevCh = s[i - 1];
      // German suspended compound hyphen: "CO2- und CH4-Gase", "H- und O-Atome", "NaCl- und AlCl3-Lösungen"
      const suspended = sign !== '+' && /^\s(?:und|oder|als|bzw\.?|sowie)\s/.test(s.slice(j + cm[0].length, j + cm[0].length + 8));
      const alkylBond = suspended || (sign !== '+' && (ALKYL.test(body.text) || prevCh === '-' || prevCh === '=' || prevCh === '≡'));
      if (!blocked && !alkylBond) {
        charge = signChar(sign);
        chargeExplicitDigits = cm[1];
        j += cm[0].length;
      }
    } else if (caretSignFirst && !isLetterOrDigit(s[j + caretSignFirst[0].length])) {
      charge = signChar(caretSignFirst[1]);
      chargeExplicitDigits = caretSignFirst[2];
      j += caretSignFirst[0].length;
    } else {
      // spaced charge for a few well-known polyatomic ions
      const sp = /^ ([1-4])([+\-−])(?![\p{L}\p{N}])/u.exec(tail);
      if (sp && SPACED_CHARGE_IONS.has(body.text)) {
        charge = signChar(sp[2]);
        chargeExplicitDigits = sp[1];
        j += sp[0].length;
      }
    }
    if (charge && !chargeExplicitDigits && body.lastSub) {
      const d = body.lastSub.digits;
      if (/^\d+$/.test(d)) {
        const singleUnit = body.units === 1 && !body.hasParen;
        let chargeDigits = '';
        if (body.lastWasBracket) chargeDigits = d; // [Fe(CN)6]3-
        else if (singleUnit) chargeDigits = d.length === 1 ? d : d.slice(-1); // Fe3+, Hg22+
        else if (d.length >= 2) chargeDigits = d.slice(-1); // SO42-, PO43-, Cr2O72-
        if (chargeDigits) {
          const keep = d.slice(0, d.length - chargeDigits.length);
          if (keep) bodyParts[body.lastSub.partIndex].s = keep;
          else {
            bodyParts.splice(body.lastSub.partIndex, 1);
            consumedLastSub = true;
          }
          chargeExplicitDigits = chargeDigits;
        }
      }
    }
  }

  // state symbol, kept on the baseline
  let state = '';
  const st = STATE_SYMBOLS.exec(s.slice(j));
  if (st) {
    state = st[0];
    j += state.length;
  }

  // the token must end at a word boundary
  if (isLetterOrDigit(s[j])) return null;

  if (body.units === 1 && !body.hasParen && bodyParts.some((p) => p.k === 'sub' && p.s.includes('n'))) return null;
  const hasSubAfterCharge = body.hasSub && !(consumedLastSub && bodyParts.every((p) => p.k !== 'sub'));
  const raw = s.slice(i, j);

  // --- validation --------------------------------------------------------
  const bodyText = body.text;
  if (PROSE_TOKENS.test(bodyText) && !charge && !hasSubAfterCharge && !coef) return null;
  if (body.elements === 0 && !(hasSubAfterCharge || charge)) return null; // placeholders alone ("AX", "XY") need digits/charge
  if (body.elements === 0 && body.placeholders === 1 && !charge && body.units === 1) {
    // "M1", "A2" ... are variables / table cells, not formulas
    return null;
  }

  // isotope / atomic number prescript: 12C, 235U, 24Cr, 11Na+
  if (coef && body.units === 1 && body.elements === 1 && !hasSubAfterCharge && !hydrate) {
    const sym = bodyText.replace(/\d+$/, '');
    const z = ATOMIC_NUMBER.get(sym) ?? 0;
    const n = Number(coef);
    // "5B" / "3B" are periodic-table groups, so boron never gets the atomic-number prescript
    if (z >= 3 && n === z && sym !== 'B') {
      parts.push({ k: 'sub', s: coef }, ...bodyParts);
      if (charge) parts.push({ k: 'sup', s: (chargeExplicitDigits || '') + charge });
      if (state) parts.push({ k: 'n', s: state });
      return { kind: 'isotope', start: i, end: j, raw, parts, strong: true };
    }
    if (sym !== 'H' && z >= 2 && n > z && n >= 2 * z - 2 && n <= Math.ceil(2.7 * z) + 2) {
      parts.push({ k: 'sup', s: coef }, ...bodyParts);
      if (charge) parts.push({ k: 'sup', s: (chargeExplicitDigits || '') + charge });
      if (state) parts.push({ k: 'n', s: state });
      return { kind: 'isotope', start: i, end: j, raw, parts, strong: true };
    }
  }

  let strong = false;
  if (hasSubAfterCharge || charge || hydrate) strong = true;
  else if (body.units >= 2 && body.elements >= 1) {
    const allCaps = !body.hasLower && !/[a-z]/.test(bodyText);
    if (allCaps) strong = ALLCAPS_DIGITLESS_OK.has(bodyText);
    else strong = body.placeholders === 0;
  }
  // "Ca2+" style single element with a charge is strong; bare "Zn", "4Fe", "HA" are weak
  if (!strong && body.units === 1 && body.elements === 0) return null;
  if (!strong && body.units >= 2 && body.elements === 0) return null;
  if (!strong) {
    // weak token: bare element symbol ("Zn", "C"), coefficient + element ("4Fe"), digit-less acronym-like
    const allCaps = !/[a-z]/.test(bodyText);
    if (body.units >= 2 && allCaps && !ALLCAPS_DIGITLESS_OK.has(bodyText) && !(body.placeholders > 0 && body.elements > 0)) return null;
    if (PROSE_TOKENS.test(bodyText)) return null;
  }

  if (coef) parts.push({ k: 'n', s: coef });
  parts.push(...bodyParts);
  if (charge) parts.push({ k: 'sup', s: (chargeExplicitDigits || '') + charge });
  if (state) parts.push({ k: 'n', s: state });
  return { kind: 'formula', start: i, end: j, raw, parts: mergeParts(parts), strong };
}

function mergeParts(parts: ChemPart[]): ChemPart[] {
  const out: ChemPart[] = [];
  for (const p of parts) {
    const last = out[out.length - 1];
    if (last && last.k === p.k) last.s += p.s;
    else if (p.s) out.push({ ...p });
  }
  return out;
}

// ---------------------------------------------------------------------------
// Other notations
// ---------------------------------------------------------------------------

const ORBITAL_MAX: Record<string, number> = { s: 2, p: 6, d: 10, f: 14 };

function parseEconfAt(s: string, i: number): ChemToken | null {
  const m = /^(\(n-1\)|[1-7n])([spdf])(\d{1,2})(?![\p{L}\p{N}^])/u.exec(s.slice(i));
  if (!m) return null;
  if (Number(m[3]) > ORBITAL_MAX[m[2]] || Number(m[3]) === 0) return null;
  return { kind: 'econf', start: i, end: i + m[0].length, raw: m[0], parts: [{ k: 'n', s: m[1] + m[2] }, { k: 'sup', s: m[3] }], strong: true };
}

function parseHybridAt(s: string, i: number): ChemToken | null {
  const m = /^sp([23])(?:(d)([2])?)?(?![\p{L}\p{N}])/u.exec(s.slice(i));
  if (!m) return null;
  const parts: ChemPart[] = [{ k: 'n', s: 'sp' }, { k: 'sup', s: m[1] }];
  if (m[2]) parts.push({ k: 'n', s: 'd' });
  if (m[3]) parts.push({ k: 'sup', s: m[3] });
  return { kind: 'hybrid', start: i, end: i + m[0].length, raw: m[0], parts, strong: true };
}

function parseVseprAt(s: string, i: number): ChemToken | null {
  const m = /^AX(\d?)(?:E(\d?))?(?![\p{L}\p{N}])/u.exec(s.slice(i));
  if (!m || (!m[1] && m[2] === undefined)) return null;
  const parts: ChemPart[] = [{ k: 'n', s: 'AX' }];
  if (m[1]) parts.push({ k: 'sub', s: m[1] });
  if (m[2] !== undefined) {
    parts.push({ k: 'n', s: 'E' });
    if (m[2]) parts.push({ k: 'sub', s: m[2] });
  }
  return { kind: 'vsepr', start: i, end: i + m[0].length, raw: m[0], parts, strong: true };
}

/** Physics-style indexed variables: T1, V2, P1V1, M1·V1, C1m1, IE1, Kc1, ΔH1, n1 */
const VAR_NAME = '(?:IE|İE|Kc|Kp|Ka|Kb|Ksp|ΔH|E°|[TPVMECKRnmvrq])';
const VAR_RE = new RegExp(`^(?:${VAR_NAME}[1-3])+(?![\\p{L}\\p{N}])`, 'u');
function parseVariableAt(s: string, i: number): ChemToken | null {
  const m = VAR_RE.exec(s.slice(i));
  if (!m) return null;
  const parts: ChemPart[] = [];
  const unit = new RegExp(`(${VAR_NAME})([1-3])`, 'gu');
  for (const u of m[0].matchAll(unit)) {
    parts.push({ k: 'n', s: u[1] }, { k: 'sub', s: u[2] });
  }
  return { kind: 'variable', start: i, end: i + m[0].length, raw: m[0], parts: mergeParts(parts), strong: true };
}

function parseElectronAt(s: string, i: number): ChemToken | null {
  const m = /^(\d{0,2})e([-−⁻])(?![\p{L}\p{N}])/u.exec(s.slice(i));
  if (!m) return null;
  const parts: ChemPart[] = [];
  if (m[1]) parts.push({ k: 'n', s: m[1] });
  parts.push({ k: 'n', s: 'e' }, { k: 'sup', s: MINUS });
  return { kind: 'electron', start: i, end: i + m[0].length, raw: m[0], parts, strong: true };
}

function parseGenericAlkaneAt(s: string, i: number): ChemToken | null {
  // CnH2n+2, CnH2n-2, CnH2n, CnH2n+1OH, CnH2nO2 ...
  const m = /^C(n|\d*n)H(2n(?:[+\-−][126])?)/.exec(s.slice(i));
  if (!m) return null;
  let j = i + m[0].length;
  const parts: ChemPart[] = [{ k: 'n', s: 'C' }, { k: 'sub', s: m[1] }, { k: 'n', s: 'H' }, { k: 'sub', s: m[2].replace('-', MINUS) }];
  const rest = /[A-Z(]/.test(s[j] ?? '') ? parseBody(s, j) : null;
  if (rest) {
    parts.push(...rest.parts);
    j = rest.end;
  }
  if (isLetterOrDigit(s[j])) return null;
  return { kind: 'formula', start: i, end: j, raw: s.slice(i, j), parts: mergeParts(parts), strong: true };
}

/** Underscore subscripts: V_H2, M_son, P_H2O(buhar), V_total */
function parseUnderscoreAt(s: string, i: number): ChemToken | null {
  const m = /^([A-Za-z]{1,2})_([\p{L}\d]+)/u.exec(s.slice(i));
  if (!m) return null;
  let j = i + m[0].length;
  const label = m[2];
  const labelParts: ChemPart[] = [];
  // a formula label (H2, O2, H2O) keeps its own digits as plain text inside the subscript
  labelParts.push({ k: 'sub', s: label });
  if (isLetterOrDigit(s[j])) return null;
  const st = STATE_SYMBOLS.exec(s.slice(j));
  const parts: ChemPart[] = [{ k: 'n', s: m[1] }, ...labelParts];
  if (st && /^[A-Z]/.test(label)) {
    parts.push({ k: 'n', s: st[0] });
    j += st[0].length;
  }
  return { kind: 'variable', start: i, end: j, raw: s.slice(i, j), parts, strong: true };
}

/**
 * Short Latin comparisons ("Qi > Ksp", "pH < 7", "Ka = Kb"): isolated LTR so that in Arabic the
 * operator is not mirrored and both sides keep their order. Text is not changed.
 */
function parseComparisonAt(s: string, i: number): ChemToken | null {
  const side = '(?:[A-Za-z][A-Za-z0-9]{0,4}|\\d+(?:[.,]\\d+)?)';
  const m = new RegExp(`^(${side})( ?)([<>≤≥≈]|=)( ?)(${side})(?![\\p{L}\\p{N}])`, 'u').exec(s.slice(i));
  if (!m || !/[A-Za-z]/.test(m[1] + m[5])) return null;
  if (m[2] !== m[4]) return null; // "olan =CH2" is a structural fragment, not a comparison
  // plain words ("gas = mole", "Kp = this", "E°cell = …" fragments) are prose, not math
  if (/^[a-z]{3,}$/.test(m[1]) || /^[a-z]{3,}$/.test(m[5])) return null;
  if (/[\p{L}°]/u.test(s[i - 1] ?? '')) return null;
  if (PROSE_TOKENS.test(m[1]) || PROSE_TOKENS.test(m[5])) return null;
  return { kind: 'variable', start: i, end: i + m[0].length, raw: m[0], parts: [{ k: 'n', s: m[0] }], strong: true };
}

function parseCoreAt(s: string, i: number): ChemToken | null {
  const m = NOBLE_CORE.exec(s.slice(i));
  if (!m) return null;
  return { kind: 'core', start: i, end: i + m[0].length, raw: m[0], parts: [{ k: 'n', s: m[0] }], strong: false };
}

const UNI_SUBSUP = /[₀-₉₊₋ₙ⁰-⁹⁺⁻ⁿ]/;
function parseUnicodeAt(s: string, i: number): ChemToken | null {
  const m = /^[\dA-Ze₀-₉⁰-⁹(][A-Za-z0-9₀-₉₊₋ₙ⁰-⁹⁺⁻ⁿ()[\]·]*/.exec(s.slice(i));
  if (!m) return null;
  let raw = m[0];
  if (!UNI_SUBSUP.test(raw)) return null;
  // trim unbalanced closing brackets / leading opener without closer
  const balance = (t: string) => (t.match(/\(/g)?.length ?? 0) - (t.match(/\)/g)?.length ?? 0);
  while (raw.length && /[)\]]$/.test(raw) && balance(raw) < 0) raw = raw.slice(0, -1);
  while (raw.startsWith('(') && balance(raw) > 0) raw = raw.slice(1);
  if (!raw || !UNI_SUBSUP.test(raw) || !/[A-Za-z]/.test(raw)) return null;
  const start = s.indexOf(raw, i);
  if (start !== i && isLetterOrDigit(s[start - 1])) return null;
  return { kind: 'unicode', start, end: start + raw.length, raw, parts: [{ k: 'n', s: raw }], strong: true };
}

// --- powers: 10^-3, 6.02x10^23, s^2, 4s^3, (RT)^Δn, [Cl-]^2, (L/mol)^(n-1) -----

const EXP_RE = /^\^(\((?:[+\-−]?[\w Δ]{1,4}(?:[+\-−]\d)?)\)|[+\-−]?\d+(?:[.,]\d+)?[+\-−]?|[+\-−]?Δ?[a-zA-Z]\d?)/;

function findPowerSpans(s: string): ChemToken[] {
  const out: ChemToken[] = [];
  for (let c = s.indexOf('^'); c !== -1; c = s.indexOf('^', c + 1)) {
    const em = EXP_RE.exec(s.slice(c));
    if (!em) continue;
    let b = c - 1;
    if (b < 0) continue;
    if (s[b] === ')' || s[b] === ']') {
      const close = s[b];
      const open = close === ')' ? '(' : '[';
      let depth = 0;
      for (; b >= 0; b--) {
        if (s[b] === close) depth++;
        else if (s[b] === open) {
          depth--;
          if (depth === 0) break;
        }
      }
      if (b < 0) continue;
    } else if (/[A-Za-z0-9]/.test(s[b])) {
      while (b > 0 && /[A-Za-z0-9.,×]/.test(s[b - 1])) b--;
      while (/[.,]/.test(s[b])) b++;
    } else continue;
    // a power directly on a formula ("SO4^2-") is handled as a charge by the formula parser
    const base = s.slice(b, c);
    const exp = em[1];
    if (/[A-Z]/.test(base[0] ?? '') && /^\d?[+\-−]$|^[+\-−]\d?$/.test(exp)) continue;
    const baseParts: ChemPart[] = [];
    const sci = /^(.*?\d)\s?[x×]\s?(10)$/.exec(base);
    if (sci) baseParts.push({ k: 'n', s: sci[1] + '×' + sci[2] });
    else {
      // format formulas inside the base, e.g. [Pb2+] or [Cl-]
      for (const seg of tokenize(base, false)) {
        if (seg.type === 'text') baseParts.push({ k: 'n', s: seg.text });
        else for (const t of seg.tokens) if ('parts' in t) baseParts.push(...t.parts);
        else baseParts.push({ k: 'n', s: t.gap });
      }
    }
    let expText = exp.startsWith('(') ? exp.slice(1, -1) : exp;
    expText = expText.replace(/[-−]/g, MINUS);
    out.push({
      kind: 'power',
      start: b,
      end: c + em[0].length,
      raw: s.slice(b, c + em[0].length),
      parts: mergeParts([...baseParts, { k: 'sup', s: expText }]),
      strong: true,
    });
  }
  // drop overlaps (keep the earliest)
  return out.filter((t, idx) => !out.some((o, k) => k < idx && o.end > t.start));
}

// ---------------------------------------------------------------------------
// Tokenizer
// ---------------------------------------------------------------------------

/** Normalises ASCII arrows and "x10^" before tokenising. */
export function normalizeChemArrows(s: string): string {
  return s
    .replace(/<=>|<->|<-->|<==>/g, '⇌')
    .replace(/-{1,2}>/g, '→')
    .replace(/(\d)\s?x\s?(?=10\^)/g, '$1×')
    // sqrt(…) written in ASCII is shown as a radical sign
    .replace(/\bsqrt\s?\(/g, '√(');
}

function scanTokens(s: string, withPowers: boolean): ChemToken[] {
  const tokens: ChemToken[] = [];
  const powers = withPowers ? findPowerSpans(s) : [];
  let pi = 0;
  let i = 0;
  while (i < s.length) {
    if (pi < powers.length && powers[pi].start <= i) {
      if (powers[pi].start === i || powers[pi].end > i) {
        tokens.push(powers[pi]);
        i = Math.max(i, powers[pi].end);
      }
      pi++;
      continue;
    }
    const nextPowerStart = pi < powers.length ? powers[pi].start : Infinity;
    const prev = s[i - 1];
    const ch = s[i];
    const boundaryOk = !isLetterOrDigit(prev) && prev !== '.' && prev !== ',' && prev !== '/' && prev !== '_' && !(prev === '-' && isLetterOrDigit(s[i - 2]));
    const boundaryOkLoose = !isLetterOrDigit(prev);
    let tok: ChemToken | null = null;
    if (ch === '{' && s.startsWith('{{chem:', i)) {
      const close = s.indexOf('}}', i);
      if (close !== -1) {
        const inner = s.slice(i + 7, close);
        const parts: ChemPart[] = [];
        for (const seg of tokenize(inner, true)) {
          if (seg.type === 'text') parts.push({ k: 'n', s: seg.text });
          else for (const t of seg.tokens) if ('parts' in t) parts.push(...t.parts);
          else parts.push({ k: 'n', s: t.gap });
        }
        tok = { kind: 'tag', start: i, end: close + 2, raw: s.slice(i, close + 2), parts: mergeParts(parts), strong: true };
      }
    } else if (boundaryOkLoose && ch === 'Δ') {
      tok = parseVariableAt(s, i);
    } else if (ch === 's' && s[i + 1] === 'p' && prev === '-' && /\d/.test(s[i - 2] ?? '')) {
      tok = parseHybridAt(s, i); // "sp3-sp2-sp"
    } else if (boundaryOkLoose && /[A-Za-z]/.test(ch) && /^[A-Za-z]{1,2}_[\p{L}\d]/u.test(s.slice(i, i + 4))) {
      tok = parseUnderscoreAt(s, i);
    } else if (boundaryOk && ch === 'n' && /[A-Z]/.test(s[i + 1] ?? '')) {
      // mole-number notation: nH+ = nOH-
      const f = parseFormulaAt(s, i + 1);
      if (f && f.strong) tok = { ...f, start: i, raw: s.slice(i, f.end), parts: [{ k: 'n', s: 'n' }, ...f.parts] };
    } else if (boundaryOk || (boundaryOkLoose && /[A-Z[(]/.test(ch))) {
      if (ch === '[') tok = parseCoreAt(s, i) ?? parseFormulaAt(s, i);
      else if (ch === 'A' && s[i + 1] === 'X') tok = parseVseprAt(s, i) ?? parseFormulaAt(s, i);
      else if (ch === 's' && s[i + 1] === 'p') tok = parseHybridAt(s, i);
      else if (ch === 'C' && s[i + 1] === 'n') tok = parseGenericAlkaneAt(s, i);
      else if (/[1-7n(]/.test(ch) && /^(?:\(n-1\)|[1-7n])[spdf]\d/.test(s.slice(i, i + 9))) tok = parseEconfAt(s, i);
      if (!tok && /\d/.test(ch) && s[i + 1 + (/\d/.test(s[i + 1] ?? '') ? 1 : 0)] === 'e') tok = parseElectronAt(s, i);
      if (!tok && ch === 'e') tok = parseElectronAt(s, i);
      if (!tok && /[A-ZΔİ]|[nmvrq]/.test(ch)) tok = parseVariableAt(s, i);
      if (!tok && /[\dA-Z([]/.test(ch)) tok = parseFormulaAt(s, i);
      if (!tok && /[\dA-Ze₀-₉⁰-⁹(]/.test(ch)) tok = parseUnicodeAt(s, i);
      if (!tok && /[A-Za-z]/.test(ch)) tok = parseComparisonAt(s, i);
    }
    if (tok && tok.end <= nextPowerStart && tok.end > i) {
      tokens.push(tok);
      i = tok.end;
    } else {
      i++;
    }
  }
  return tokens;
}

const GROUP_GAP = /^\s*(?:\+|→|⇌|⇄|⟶|⟷)\s*(?:\d{1,2}\s)?$|^\s?\/\s?$/;
const CONF_GAP = /^ $/;

function tokenize(s: string, withPowers: boolean): ChemSegment[] {
  const tokens = scanTokens(s, withPowers);
  // group tokens joined by reaction operators (or spaced electron configurations)
  const groups: ChemToken[][] = [];
  for (const t of tokens) {
    const g = groups[groups.length - 1];
    const last = g?.[g.length - 1];
    if (last) {
      const gap = s.slice(last.end, t.start);
      const confJoin = CONF_GAP.test(gap) && (last.kind === 'econf' || last.kind === 'core') && t.kind === 'econf';
      if (GROUP_GAP.test(gap) || confJoin) {
        g.push(t);
        continue;
      }
    }
    groups.push([t]);
  }
  const segs: ChemSegment[] = [];
  let cursor = 0;
  const pushText = (txt: string) => {
    if (!txt) return;
    const last = segs[segs.length - 1];
    if (last && last.type === 'text') last.text += txt;
    else segs.push({ type: 'text', text: txt });
  };
  for (const g of groups) {
    // a group needs at least one strong token; weak tokens (bare "Zn", "4Fe", "HA", "[Ar]")
    // are kept because they are joined to it by a reaction operator
    if (!g.some((t) => t.strong)) continue;
    const sub = g;
    pushText(s.slice(cursor, sub[0].start));
    const items: Array<{ parts: ChemPart[] } | { gap: string }> = [];
    sub.forEach((t, k) => {
      if (k > 0) items.push({ gap: s.slice(sub[k - 1].end, t.start) });
      items.push({ parts: t.parts });
    });
    segs.push({ type: 'chem', tokens: items, raw: s.slice(sub[0].start, sub[sub.length - 1].end) });
    cursor = sub[sub.length - 1].end;
  }
  pushText(s.slice(cursor));
  return segs;
}

/** Splits a bank string into plain-text and chemical-notation segments. */
export function tokenizeChemText(raw: string): ChemSegment[] {
  if (!raw) return [];
  return tokenize(normalizeChemArrows(raw), true);
}

/** Compact debug rendering: chem tokens in ‹›, subscripts as _{..}, superscripts as ^{..}. */
export function renderChemDebug(raw: string): string {
  return tokenizeChemText(raw)
    .map((seg) =>
      seg.type === 'text'
        ? seg.text
        : '‹' +
          seg.tokens
            .map((t) => ('gap' in t ? t.gap : t.parts.map((p) => (p.k === 'n' ? p.s : p.k === 'sub' ? `_{${p.s}}` : `^{${p.s}}`)).join('')))
            .join('') +
          '›'
    )
    .join('');
}

/** Plain text a screen reader / copy would see after formatting (characters unchanged except arrows and minus). */
export function chemPlainText(raw: string): string {
  return tokenizeChemText(raw)
    .map((seg) => (seg.type === 'text' ? seg.text : seg.tokens.map((t) => ('gap' in t ? t.gap : t.parts.map((p) => p.s).join(''))).join('')))
    .join('');
}

// ---------------------------------------------------------------------------
// Additive helpers for mathTypeset.ts (equation typesetting). They expose the existing
// parsers without changing tokenizeChemText / renderChemDebug / chemPlainText.
// ---------------------------------------------------------------------------

/** True for a real element symbol (H … Pu). */
export function isElementSymbol(sym: string): boolean {
  return ELEMENTS.has(sym);
}

/**
 * Reads one chemical species at s[i]: a formula / ion / isotope ("H2SO4", "Fe3+", "SO4^2-", "2H2O(s)"),
 * a generic alkane ("CnH2n+2") or an electron ("2e-").
 * Indexed variables, powers, comparisons and electron configurations are NOT read here (the
 * equation typesetter handles variables and powers itself). The caller checks the left boundary.
 */
export function chemTokenAt(s: string, i: number): ChemToken | null {
  const ch = s[i];
  if (!ch) return null;
  let tok: ChemToken | null = null;
  if (ch === 'C' && s[i + 1] === 'n') tok = parseGenericAlkaneAt(s, i);
  if (!tok && /\d/.test(ch) && s[i + 1 + (/\d/.test(s[i + 1] ?? '') ? 1 : 0)] === 'e') tok = parseElectronAt(s, i);
  if (!tok && ch === 'e') tok = parseElectronAt(s, i);
  if (!tok && /[\dA-Z([]/.test(ch)) tok = parseFormulaAt(s, i);
  return tok && tok.end > i ? tok : null;
}
