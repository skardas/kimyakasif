import type { LanguageCode } from '../types/chemistry';

export interface ExamLocale {
  featured: string;
  replay: string;
  notSolved: string;
  bestNet: (net: string, attempts: number) => string;
  questionsN: (n: number) => string;
  minShort: string;
  correctTitle: string;
  wrongTitle: string;
  wrongAnswer: (letter: string) => string;
  reviewQuestions: string;
  retry: string;
  close: string;
  results: string;
  time: string;
  net: string;
  exitAria: string;
  bookmarkAdd: string;
  bookmarkRemove: string;
  navigator: string;
  questionAria: (n: number) => string;
  options: string;
  sessionDone: string;
  tabUnits: string;
  tabTg: string;
  reviewList: string;
  difficulty: Record<'easy' | 'medium' | 'hard' | 'osym', string>;
}

export const EXAM_STRINGS: Record<LanguageCode, ExamLocale> = {
  tr: {
    featured: 'Öne çıkan deneme', replay: 'Tekrar çöz', notSolved: 'Çözülmedi',
    bestNet: (n, a) => `En iyi ${n} net (${a}x)`, questionsN: (n) => `${n} soru`, minShort: 'dk',
    correctTitle: 'Doğru!', wrongTitle: 'Yanlış', wrongAnswer: (l) => `Doğru cevap ${l}`,
    reviewQuestions: 'Soruları incele', retry: 'Tekrar dene', close: 'Kapat', results: 'Sonuçlar',
    time: 'Süre', net: 'Net', exitAria: 'Sınavdan çık', bookmarkAdd: 'Soruyu kaydet', bookmarkRemove: 'Kaydedilenlerden çıkar',
    navigator: 'Soru gezgini', questionAria: (n) => `Soru ${n}`, options: 'Şıklar', sessionDone: 'Oturumu bitir',
    tabUnits: 'Ünite testi', tabTg: 'Derece provası', reviewList: 'Soru özeti',
    difficulty: { easy: 'Kolay', medium: 'Orta', hard: 'Zor', osym: 'ÖSYM' },
  },
  en: {
    featured: 'Featured mock exam', replay: 'Retake', notSolved: 'Not taken',
    bestNet: (n, a) => `Best ${n} net (${a}x)`, questionsN: (n) => `${n} questions`, minShort: 'min',
    correctTitle: 'Correct!', wrongTitle: 'Wrong', wrongAnswer: (l) => `Correct answer ${l}`,
    reviewQuestions: 'Review questions', retry: 'Try again', close: 'Close', results: 'Results',
    time: 'Time', net: 'Net', exitAria: 'Leave exam', bookmarkAdd: 'Save question', bookmarkRemove: 'Remove from saved',
    navigator: 'Question navigator', questionAria: (n) => `Question ${n}`, options: 'Options', sessionDone: 'Finish session',
    tabUnits: 'Unit tests', tabTg: 'Top-rank trial', reviewList: 'Question summary',
    difficulty: { easy: 'Easy', medium: 'Medium', hard: 'Hard', osym: 'ÖSYM' },
  },
  de: {
    featured: 'Empfohlene Probeprüfung', replay: 'Wiederholen', notSolved: 'Nicht gelöst',
    bestNet: (n, a) => `Beste ${n} Net (${a}x)`, questionsN: (n) => `${n} Fragen`, minShort: 'Min.',
    correctTitle: 'Richtig!', wrongTitle: 'Falsch', wrongAnswer: (l) => `Richtige Antwort ${l}`,
    reviewQuestions: 'Fragen ansehen', retry: 'Nochmal', close: 'Schließen', results: 'Ergebnisse',
    time: 'Zeit', net: 'Net', exitAria: 'Prüfung verlassen', bookmarkAdd: 'Frage speichern', bookmarkRemove: 'Aus Gespeicherten entfernen',
    navigator: 'Fragenübersicht', questionAria: (n) => `Frage ${n}`, options: 'Antworten', sessionDone: 'Sitzung beenden',
    tabUnits: 'Einheitentests', tabTg: 'Spitzenprobe', reviewList: 'Fragenübersicht',
    difficulty: { easy: 'Leicht', medium: 'Mittel', hard: 'Schwer', osym: 'ÖSYM' },
  },
  fr: {
    featured: 'Examen blanc à la une', replay: 'Refaire', notSolved: 'Non fait',
    bestNet: (n, a) => `Meilleur ${n} net (${a}x)`, questionsN: (n) => `${n} questions`, minShort: 'min',
    correctTitle: 'Correct !', wrongTitle: 'Faux', wrongAnswer: (l) => `Bonne réponse ${l}`,
    reviewQuestions: 'Revoir les questions', retry: 'Réessayer', close: 'Fermer', results: 'Résultats',
    time: 'Durée', net: 'Net', exitAria: "Quitter l'examen", bookmarkAdd: 'Enregistrer la question', bookmarkRemove: 'Retirer des enregistrées',
    navigator: 'Navigateur de questions', questionAria: (n) => `Question ${n}`, options: 'Réponses', sessionDone: 'Terminer la session',
    tabUnits: "Tests d'unité", tabTg: 'Épreuve de rang', reviewList: 'Résumé des questions',
    difficulty: { easy: 'Facile', medium: 'Moyen', hard: 'Difficile', osym: 'ÖSYM' },
  },
  ru: {
    featured: 'Рекомендуемый пробник', replay: 'Пройти снова', notSolved: 'Не пройден',
    bestNet: (n, a) => `Лучший результат: ${n} (${a}×)`, questionsN: (n) => `${n} вопр.`, minShort: 'мин',
    correctTitle: 'Верно!', wrongTitle: 'Неверно', wrongAnswer: (l) => `Правильный ответ ${l}`,
    reviewQuestions: 'Разбор вопросов', retry: 'Ещё раз', close: 'Закрыть', results: 'Итоги',
    time: 'Время', net: 'Балл', exitAria: 'Выйти из экзамена', bookmarkAdd: 'Сохранить вопрос', bookmarkRemove: 'Убрать из сохранённых',
    navigator: 'Навигация по вопросам', questionAria: (n) => `Вопрос ${n}`, options: 'Варианты', sessionDone: 'Завершить',
    tabUnits: 'Тесты по темам', tabTg: 'Репетиция', reviewList: 'Сводка по вопросам',
    difficulty: { easy: 'Лёгкий', medium: 'Средний', hard: 'Сложный', osym: 'ÖSYM' },
  },
  ar: {
    featured: 'اختبار تجريبي مميز', replay: 'أعد الحل', notSolved: 'لم يُحل',
    bestNet: (n, a) => `أفضل صافٍ ${n} (${a}x)`, questionsN: (n) => `${n} سؤال`, minShort: 'د',
    correctTitle: 'صحيح!', wrongTitle: 'خطأ', wrongAnswer: (l) => `الإجابة الصحيحة ${l}`,
    reviewQuestions: 'مراجعة الأسئلة', retry: 'حاول مجددًا', close: 'إغلاق', results: 'النتائج',
    time: 'الوقت', net: 'الصافي', exitAria: 'الخروج من الاختبار', bookmarkAdd: 'حفظ السؤال', bookmarkRemove: 'إزالة من المحفوظات',
    navigator: 'متصفح الأسئلة', questionAria: (n) => `السؤال ${n}`, options: 'الخيارات', sessionDone: 'إنهاء الجلسة',
    tabUnits: 'اختبارات الوحدات', tabTg: 'تجربة المراتب الأولى', reviewList: 'ملخص الأسئلة',
    difficulty: { easy: 'سهل', medium: 'متوسط', hard: 'صعب', osym: 'ÖSYM' },
  },
  zh: {
    featured: '精选模考', replay: '重做', notSolved: '未做',
    bestNet: (n, a) => `最佳净分 ${n}(${a}次)`, questionsN: (n) => `${n} 题`, minShort: '分钟',
    correctTitle: '正确！', wrongTitle: '错误', wrongAnswer: (l) => `正确答案：${l}`,
    reviewQuestions: '查看题目', retry: '再试一次', close: '关闭', results: '成绩',
    time: '用时', net: '净分', exitAria: '退出考试', bookmarkAdd: '收藏题目', bookmarkRemove: '取消收藏',
    navigator: '题目导航', questionAria: (n) => `第 ${n} 题`, options: '选项', sessionDone: '结束练习',
    tabUnits: '单元测验', tabTg: '冲刺演练', reviewList: '题目概览',
    difficulty: { easy: '简单', medium: '中等', hard: '困难', osym: '真题级' },
  },
  ku: {
    featured: 'Ceribandina taybet', replay: 'Dîsa çareser bike', notSolved: 'Nehatiye çareserkirin',
    bestNet: (n, a) => `Net-a herî baş ${n} (${a}x)`, questionsN: (n) => `${n} pirs`, minShort: 'xul',
    correctTitle: 'Rast!', wrongTitle: 'Şaş', wrongAnswer: (l) => `Bersiva rast ${l}`,
    reviewQuestions: 'Pirsan bibîne', retry: 'Dîsa biceribîne', close: 'Bigire', results: 'Encam',
    time: 'Dem', net: 'Net', exitAria: 'Ji azmûnê derkeve', bookmarkAdd: 'Pirsê tomar bike', bookmarkRemove: 'Ji tomaran rake',
    navigator: 'Gerokê pirsan', questionAria: (n) => `Pirsa ${n}`, options: 'Vebijark', sessionDone: 'Rûniştinê biqedîne',
    tabUnits: 'Testên yekeyê', tabTg: 'Ceribandina rêzê', reviewList: 'Kurteya pirsan',
    difficulty: { easy: 'Hêsan', medium: 'Navîn', hard: 'Dijwar', osym: 'ÖSYM' },
  },
};
