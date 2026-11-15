/**
 * Kimya YKS — Leitner 5-Box Spaced Repetition Engine
 * Follows Ebbinghaus forgetting curve intervals:
 * Box 1: 1 day (immediate review)
 * Box 2: 2 days
 * Box 3: 5 days
 * Box 4: 9 days
 * Box 5: 14 days (Mastered)
 */

export interface CardProgressRecord {
  cardId: string;
  box: 1 | 2 | 3 | 4 | 5;
  lastReviewedAt: number;
  nextReviewAt: number;
  reviewCount: number;
  lapseCount: number;
}

export const LEITNER_INTERVALS_MS: Record<1 | 2 | 3 | 4 | 5, number> = {
  1: 1 * 86_400_000,
  2: 2 * 86_400_000,
  3: 5 * 86_400_000,
  4: 9 * 86_400_000,
  5: 14 * 86_400_000,
};

/** Legacy app-wide key (before card boxes became per profile). Still read for migration. */
export const LEITNER_STORAGE_KEY = 'kimya-yks-leitner-v1';
const PROGRESS_STORAGE_KEY = 'kimya-yks-progress-v1';

/** Per-profile storage key for card-box progress. */
export function leitnerStorageKey(profileId?: string): string {
  return profileId ? `${LEITNER_STORAGE_KEY}:${profileId}` : LEITNER_STORAGE_KEY;
}

/** The profile that was active when the app last saved (the owner of legacy, app-wide card boxes). */
function storedActiveProfileId(): string {
  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    if (parsed && typeof parsed === 'object') {
      const profiles = Array.isArray(parsed.profiles) ? parsed.profiles : [];
      if (typeof parsed.activeProfileId === 'string' && profiles.some((p: { id?: unknown }) => p?.id === parsed.activeProfileId)) {
        return parsed.activeProfileId;
      }
      if (typeof profiles[0]?.id === 'string' && profiles[0].id) return profiles[0].id;
    }
  } catch {
    // fall through
  }
  return 'profile-default';
}

/**
 * One-time migration: card boxes saved app-wide under the legacy key move to the
 * profile that is currently active, then the legacy key is removed so other
 * profiles start with empty boxes.
 */
export function migrateLegacyLeitnerData(): void {
  if (typeof localStorage === 'undefined') return;
  try {
    const legacy = localStorage.getItem(LEITNER_STORAGE_KEY);
    if (legacy === null) return;
    const target = leitnerStorageKey(storedActiveProfileId());
    if (localStorage.getItem(target) === null) localStorage.setItem(target, legacy);
    localStorage.removeItem(LEITNER_STORAGE_KEY);
  } catch {
    // Storage unavailable
  }
}

/** Removes one profile's saved card boxes (used when a profile is deleted). */
export function clearLeitnerDataForProfile(profileId: string): void {
  if (typeof localStorage === 'undefined') return;
  try {
    localStorage.removeItem(leitnerStorageKey(profileId));
  } catch {
    // Ignore
  }
}

export interface LeitnerEngineOptions {
  /** Store card boxes for this profile only. Without it the legacy app-wide key is used. */
  profileId?: string;
}

export class LeitnerBoxEngine {
  private boxMap: Record<string, number> = {};
  private progressMap: Record<string, CardProgressRecord> = {};
  private readonly storageKey: string;
  private readonly profileId?: string;

  constructor(initialData?: Record<string, CardProgressRecord | number> | null, options: LeitnerEngineOptions = {}) {
    this.profileId = options.profileId || undefined;
    this.storageKey = leitnerStorageKey(this.profileId);
    if (initialData) {
      Object.entries(initialData).forEach(([k, v]) => {
        if (typeof v === 'number') {
          this.setBox(k, v);
        } else {
          const clamped = Math.max(1, Math.min(5, Math.round(v.box || 1))) as 1 | 2 | 3 | 4 | 5;
          v.box = clamped;
          this.progressMap[k] = v;
          this.boxMap[k] = clamped;
        }
      });
    } else {
      this.load();
    }
  }

  getBox(cardId: string): number {
    return this.boxMap[cardId] ?? 1;
  }

  setBox(cardId: string, box: number): void {
    const clampedBox = Math.max(1, Math.min(5, Math.floor(box))) as 1 | 2 | 3 | 4 | 5;
    this.boxMap[cardId] = clampedBox;
    const existing = this.progressMap[cardId];
    const now = Date.now();
    this.progressMap[cardId] = {
      cardId,
      box: clampedBox,
      lastReviewedAt: existing?.lastReviewedAt ?? now,
      nextReviewAt: now + LEITNER_INTERVALS_MS[clampedBox],
      reviewCount: existing?.reviewCount ?? 1,
      lapseCount: existing?.lapseCount ?? 0,
    };
    this.save();
  }

  rateCard(cardId: string, mastered: boolean): { newBox: number; xpAwarded: number } {
    const current = this.getBox(cardId);
    const now = Date.now();
    const existing = this.progressMap[cardId];

    if (mastered) {
      const newBox = Math.min(current + 1, 5) as 1 | 2 | 3 | 4 | 5;
      this.boxMap[cardId] = newBox;
      const xpAwarded = newBox === 5 ? 25 : 15;
      this.progressMap[cardId] = {
        cardId,
        box: newBox,
        lastReviewedAt: now,
        nextReviewAt: now + LEITNER_INTERVALS_MS[newBox],
        reviewCount: (existing?.reviewCount ?? 0) + 1,
        lapseCount: existing?.lapseCount ?? 0,
      };
      this.save();
      return { newBox, xpAwarded };
    } else {
      const newBox = 1;
      this.boxMap[cardId] = newBox;
      this.progressMap[cardId] = {
        cardId,
        box: 1,
        lastReviewedAt: now,
        nextReviewAt: now + LEITNER_INTERVALS_MS[1],
        reviewCount: (existing?.reviewCount ?? 0) + 1,
        lapseCount: (existing?.lapseCount ?? 0) + 1,
      };
      this.save();
      return { newBox: 1, xpAwarded: 0 };
    }
  }

  isDue(cardId: string, now: number = Date.now()): boolean {
    const rec = this.progressMap[cardId];
    if (!rec || rec.lastReviewedAt === 0) return true;
    return now >= rec.nextReviewAt;
  }

  getDistribution(allCardIds: string[]): Record<number, number> {
    const dist: Record<number, number> = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    for (const id of allCardIds) {
      const b = this.getBox(id);
      dist[b] = (dist[b] || 0) + 1;
    }
    return dist;
  }

  save(): void {
    if (typeof localStorage === 'undefined') return;
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(this.progressMap));
    } catch {
      // Storage unavailable or quota exceeded
    }
  }

  load(): void {
    if (typeof localStorage === 'undefined') return;
    if (this.profileId) migrateLegacyLeitnerData();
    try {
      const raw = localStorage.getItem(this.storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        this.progressMap = parsed;
        Object.entries(parsed).forEach(([k, v]) => {
          const record = v as CardProgressRecord;
          const clamped = Math.max(1, Math.min(5, Math.round(record?.box || 1))) as 1 | 2 | 3 | 4 | 5;
          record.box = clamped;
          this.boxMap[k] = clamped;
        });
      }
    } catch {
      this.progressMap = {};
      this.boxMap = {};
    }
  }

  reset(): void {
    this.progressMap = {};
    this.boxMap = {};
    if (typeof localStorage !== 'undefined') {
      try {
        localStorage.removeItem(this.storageKey);
      } catch {
        // Ignore
      }
    }
  }
}
