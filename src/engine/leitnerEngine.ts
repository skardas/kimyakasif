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

export const LEITNER_STORAGE_KEY = 'kimya-yks-leitner-v1';

export class LeitnerBoxEngine {
  private boxMap: Record<string, number> = {};
  private progressMap: Record<string, CardProgressRecord> = {};

  constructor(initialData?: Record<string, CardProgressRecord | number>) {
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
      localStorage.setItem(LEITNER_STORAGE_KEY, JSON.stringify(this.progressMap));
    } catch {
      // Storage unavailable or quota exceeded
    }
  }

  load(): void {
    if (typeof localStorage === 'undefined') return;
    try {
      const raw = localStorage.getItem(LEITNER_STORAGE_KEY);
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
        localStorage.removeItem(LEITNER_STORAGE_KEY);
      } catch {
        // Ignore
      }
    }
  }
}
