import type { LanguageCode } from '../types/chemistry';

export interface CurriculumLocale {
  goalEyebrow: string;
  goalUnit: string;
  solveCta: string;
  unitsHeading: string;
  stage1: string;
  stage2: string;
  unitsCount: (n: number) => string;
  progression: string;
  noResults: string;
}

export const CURRICULUM_STRINGS: Record<LanguageCode, CurriculumLocale> = {
  tr: { goalEyebrow: 'Bugünkü hedef', goalUnit: 'soru', solveCta: 'Soru çöz', unitsHeading: 'Üniteler', stage1: '1. AŞAMA', stage2: '2. AŞAMA', unitsCount: (n) => `${n} ünite`, progression: "TYT'den AYT'ye sıralı ilerleme", noResults: 'Sonuç bulunamadı' },
  en: { goalEyebrow: "Today's goal", goalUnit: 'questions', solveCta: 'Solve', unitsHeading: 'Units', stage1: 'STAGE 1', stage2: 'STAGE 2', unitsCount: (n) => `${n} units`, progression: 'TYT to AYT step-by-step progress', noResults: 'No results found' },
  de: { goalEyebrow: 'Heutiges Ziel', goalUnit: 'Fragen', solveCta: 'Üben', unitsHeading: 'Einheiten', stage1: 'STUFE 1', stage2: 'STUFE 2', unitsCount: (n) => `${n} Einheiten`, progression: 'Fortschritt von TYT zu AYT', noResults: 'Keine Ergebnisse' },
  fr: { goalEyebrow: "Objectif du jour", goalUnit: 'questions', solveCta: 'Résoudre', unitsHeading: 'Unités', stage1: 'ÉTAPE 1', stage2: 'ÉTAPE 2', unitsCount: (n) => `${n} unités`, progression: 'Progression de TYT vers AYT', noResults: 'Aucun résultat' },
  ru: { goalEyebrow: 'Цель на сегодня', goalUnit: 'вопросов', solveCta: 'Решать', unitsHeading: 'Темы', stage1: 'ЭТАП 1', stage2: 'ЭТАП 2', unitsCount: (n) => `${n} тем`, progression: 'Путь от TYT к AYT', noResults: 'Ничего не найдено' },
  ar: { goalEyebrow: 'هدف اليوم', goalUnit: 'سؤال', solveCta: 'حل الأسئلة', unitsHeading: 'الوحدات', stage1: 'المرحلة 1', stage2: 'المرحلة 2', unitsCount: (n) => `${n} وحدة`, progression: 'التقدم من TYT إلى AYT', noResults: 'لا توجد نتائج' },
  zh: { goalEyebrow: '今日目标', goalUnit: '题', solveCta: '做题', unitsHeading: '单元', stage1: '第 1 阶段', stage2: '第 2 阶段', unitsCount: (n) => `${n} 个单元`, progression: '从 TYT 到 AYT 的进阶', noResults: '没有结果' },
  ku: { goalEyebrow: 'Armanca îro', goalUnit: 'pirs', solveCta: 'Pirs çareser bike', unitsHeading: 'Yekeyî', stage1: 'ÇEND 1', stage2: 'ÇEND 2', unitsCount: (n) => `${n} yekeyî`, progression: 'Pêşketina ji TYT bo AYT', noResults: 'Encam nehat dîtin' },
};
