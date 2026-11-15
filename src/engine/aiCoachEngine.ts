import { ALL_CHEMISTRY_UNITS } from '../data/units';
import type { LanguageCode } from '../types/chemistry';
import type { LearnerProfile, DailyActivityRecord } from '../store/useAppStore';

export interface TopicMastery {
  unitId: string;
  unitOrder: number;
  unitTitle: string;
  exam: 'TYT' | 'AYT';
  grade: number;
  totalQuestions: number;
  solvedCount: number;
  correctCount: number;
  mistakeCount: number;
  accuracyPercent: number;
  status: 'MASTERED' | 'DEVELOPING' | 'NEEDS_FOCUS' | 'UNTOUCHED';
}

export interface AiCoachRecommendation {
  id: string;
  unitId: string;
  unitTitle: string;
  exam: 'TYT' | 'AYT';
  type: 'REVIEW_SLIDES' | 'SOLVE_MISTAKES' | 'PRACTICE_QUESTIONS' | 'STUDY_CARDS' | 'EXPLORE_3D' | 'TAKE_MOCK';
  priority: 'HIGH' | 'MEDIUM' | 'LOW';
  title: string;
  reason: string;
  actionLabel: string;
}

export interface AiCoachMission {
  id: string;
  title: string;
  description: string;
  category: 'DAILY_GOAL' | 'TYT_FOCUS' | 'AYT_FOCUS' | 'MISTAKE' | 'CARDS' | 'LAB_3D';
  targetCount: number;
  currentCount: number;
  completed: boolean;
  unitId?: string;
}

export interface SpacedRepetitionSummary {
  flashcardCountToReview: number;
  mistakeCountToRetry: number;
  dueUnitIds: string[];
  summary: string;
}

export interface PrerequisiteWarning {
  needed: boolean;
  tytMasteryPercent: number;
  message: string;
}

export interface AiCoachReport {
  timestamp: string;
  profileId: string;
  profileName: string;
  targetTrack: 'TYT_FIRST' | 'TYT_ONLY' | 'AYT_FOCUS';
  language: LanguageCode;
  overallAccuracy: number;
  totalSolved: number;
  tytMasteryPercent: number;
  aytMasteryPercent: number;
  masteredTopics: TopicMastery[];
  weakTopics: TopicMastery[];
  allTopics: TopicMastery[];
  recommendations: AiCoachRecommendation[];
  spacedRepetitionSuggestions: SpacedRepetitionSummary;
  dailyMissions: AiCoachMission[];
  prerequisiteWarning?: PrerequisiteWarning;
}

// ============================================================================
// 8-Language Localization Strings for Deterministic Coach Feedback
// ============================================================================

interface CoachI18nStrings {
  prereqWarning: (pct: number) => string;
  missionDailyQuestions: (target: number) => { title: string; desc: string };
  missionUnitPractice: (unitTitle: string, target: number) => { title: string; desc: string };
  missionFlashcards: (target: number) => { title: string; desc: string };
  missionMistakes: (target: number) => { title: string; desc: string };
  recMistakesTitle: (unitTitle: string) => string;
  recMistakesReason: (unitTitle: string, count: number) => string;
  recSlidesTitle: (unitTitle: string) => string;
  recSlidesReason: (unitTitle: string) => string;
  recPracticeTitle: (unitTitle: string) => string;
  recPracticeReason: (unitTitle: string) => string;
  actionSolveMistakes: string;
  actionReviewSlides: string;
  actionStartQuiz: string;
  actionStudyCards: string;
  actionTakeTrial: string;
  spacedRepSummary: (cards: number, mistakes: number) => string;
}

const COACH_STRINGS: Record<LanguageCode, CoachI18nStrings> = {
  tr: {
    prereqWarning: (pct) =>
      `TYT Kimya temeliniz henüz %${pct} seviyesinde. YKS sıralaması için AYT konularına derinlemesine geçmeden önce TYT ünitelerini %60 barajına ulaştırmanız tavsiye edilir.`,
    missionDailyQuestions: (target) => ({
      title: `Günlük Soru Hedefi: ${target} Soru`,
      desc: `Bugün soru bankasından en az ${target} kimya sorusunu başarıyla tamamla.`,
    }),
    missionUnitPractice: (unitTitle, target) => ({
      title: `${unitTitle}: ${target} Soru Çöz`,
      desc: `ÖSYM soru kalıplarını pekiştirmek için bu üniteden ${target} soru çöz.`,
    }),
    missionFlashcards: (target) => ({
      title: `${target} Flashcard Kartı Tekrar Et`,
      desc: `Leitner 3D kutularındaki kimya kavramlarını aktif hatırlama ile tekrar et.`,
    }),
    missionMistakes: (target) => ({
      title: `Hata Defterinden ${target} Soru Temizle`,
      desc: `Daha önce yanlış çözdüğün soruları yeniden analiz ederek netini artır.`,
    }),
    recMistakesTitle: (unitTitle) => `${unitTitle} Ünitesindeki Hataları Temizle`,
    recMistakesReason: (unitTitle, count) =>
      `${unitTitle} konusunda hata defterinde ${count} soru birikti. Kavram tuzaklarını inceleyerek kalıcı öğrenme sağla.`,
    recSlidesTitle: (unitTitle) => `${unitTitle} Konu Özetini İncele`,
    recSlidesReason: (unitTitle) =>
      `${unitTitle} ünitesinin 9 slaytlık görsel konu özetini henüz tamamlamadın. Önemli reaksiyonları ve formülleri gözden geçir.`,
    recPracticeTitle: (unitTitle) => `${unitTitle} Soru Bankasını Güçlendir`,
    recPracticeReason: (unitTitle) =>
      `Bu ünitede çözülen soru sayısı henüz az. 16 soruluk yeni bir test çözerek hızını ve netini pekiştir.`,
    actionSolveMistakes: 'Hataları Çöz',
    actionReviewSlides: 'Slaytları Aç',
    actionStartQuiz: 'Test Çöz',
    actionStudyCards: 'Kartları Tekrar Et',
    actionTakeTrial: 'Denemeye Başla',
    spacedRepSummary: (cards, mistakes) =>
      `Aralıklı tekrar algoritmasına göre bugün ${cards} kart ve hata defterinde ${mistakes} soru tekrar bekliyor.`,
  },
  en: {
    prereqWarning: (pct) =>
      `Your TYT Chemistry mastery is currently at ${pct}%. In the Turkish YKS exam system, reaching at least 60% TYT mastery is strongly recommended before diving deep into AYT units.`,
    missionDailyQuestions: (target) => ({
      title: `Daily Target: ${target} Questions`,
      desc: `Complete at least ${target} chemistry questions today to stay on track.`,
    }),
    missionUnitPractice: (unitTitle, target) => ({
      title: `${unitTitle}: Practice ${target} Qs`,
      desc: `Solidify your exam problem-solving skills with ${target} questions in this topic.`,
    }),
    missionFlashcards: (target) => ({
      title: `Review ${target} Flashcards`,
      desc: `Use active recall in Leitner 3D boxes to reinforce chemical formulas.`,
    }),
    missionMistakes: (target) => ({
      title: `Clear ${target} Questions from Mistake Notebook`,
      desc: `Re-evaluate past mistakes to prevent traps on actual exam day.`,
    }),
    recMistakesTitle: (unitTitle) => `Clear Mistakes in ${unitTitle}`,
    recMistakesReason: (unitTitle, count) =>
      `You have ${count} mistake(s) logged in ${unitTitle}. Review step-by-step explanations to master the concept.`,
    recSlidesTitle: (unitTitle) => `Review Visual Study Deck for ${unitTitle}`,
    recSlidesReason: (unitTitle) =>
      `You haven't completed the 9-slide visual guide for ${unitTitle} yet. Inspect key formulas and diagrams.`,
    recPracticeTitle: (unitTitle) => `Reinforce ${unitTitle} with New Questions`,
    recPracticeReason: (unitTitle) =>
      `Practice volume in this topic is low. Solve a 16-question set to build speed and accuracy.`,
    actionSolveMistakes: 'Solve Mistakes',
    actionReviewSlides: 'Open Slides',
    actionStartQuiz: 'Start Quiz',
    actionStudyCards: 'Review Cards',
    actionTakeTrial: 'Start Mock Exam',
    spacedRepSummary: (cards, mistakes) =>
      `Spaced repetition system indicates ${cards} flashcard(s) and ${mistakes} mistake question(s) are due for review today.`,
  },
  de: {
    prereqWarning: (pct) =>
      `Ihre TYT-Chemie-Beherrschung liegt derzeit bei ${pct}%. Vor Vertiefung in AYT-Themen wird eine TYT-Quote von mindestens 60% dringend empfohlen.`,
    missionDailyQuestions: (target) => ({
      title: `Tagesziel: ${target} Fragen lösen`,
      desc: `Löse heute mindestens ${target} Chemiefragen, um dein Ziel zu erreichen.`,
    }),
    missionUnitPractice: (unitTitle, target) => ({
      title: `${unitTitle}: ${target} Fragen üben`,
      desc: `Festige deine Fähigkeiten mit ${target} Prüfungsfragen zu diesem Thema.`,
    }),
    missionFlashcards: (target) => ({
      title: `${target} Karteikarten wiederholen`,
      desc: `Nutze aktives Erinnern im Leitner-System für Formeln und Gesetze.`,
    }),
    missionMistakes: (target) => ({
      title: `${target} Fehler im Fehlerheft beheben`,
      desc: `Analysiere frühere Fehler, um Prüfungsfallen sicher zu vermeiden.`,
    }),
    recMistakesTitle: (unitTitle) => `Fehler in ${unitTitle} beheben`,
    recMistakesReason: (unitTitle, count) =>
      `Du hast ${count} Fehler in ${unitTitle}. Überprüfe die Lösungswege sorgfältig.`,
    recSlidesTitle: (unitTitle) => `Foliensatz zu ${unitTitle} ansehen`,
    recSlidesReason: (unitTitle) =>
      `Der 9-Folien-Leitfaden zu ${unitTitle} wurde noch nicht abgeschlossen.`,
    recPracticeTitle: (unitTitle) => `${unitTitle} vertiefen`,
    recPracticeReason: (unitTitle) =>
      `Löse ein Set mit 16 Fragen, um Sicherheit und Tempo zu steigern.`,
    actionSolveMistakes: 'Fehler lösen',
    actionReviewSlides: 'Folien öffnen',
    actionStartQuiz: 'Test starten',
    actionStudyCards: 'Karten üben',
    actionTakeTrial: 'Probeklausur starten',
    spacedRepSummary: (cards, mistakes) =>
      `Gemäß der Wiederholungsroutine stehen heute ${cards} Karteikarten und ${mistakes} Fehlfragen an.`,
  },
  fr: {
    prereqWarning: (pct) =>
      `Votre maîtrise de la chimie TYT est actuellement à ${pct}%. Il est vivement conseillé d'atteindre au moins 60% avant d'aborder le programme AYT.`,
    missionDailyQuestions: (target) => ({
      title: `Objectif du jour: ${target} questions`,
      desc: `Résolvez au moins ${target} questions de chimie aujourd'hui pour garder le rythme.`,
    }),
    missionUnitPractice: (unitTitle, target) => ({
      title: `${unitTitle}: ${target} questions`,
      desc: `Renforcez vos connaissances avec ${target} questions conformes au concours.`,
    }),
    missionFlashcards: (target) => ({
      title: `Réviser ${target} cartes mémoires`,
      desc: `Pratiquez le rappel actif dans le système Leitner 3D.`,
    }),
    missionMistakes: (target) => ({
      title: `Corriger ${target} erreurs du carnet`,
      desc: `Analysez vos erreurs pour éliminer les pièges récurrents.`,
    }),
    recMistakesTitle: (unitTitle) => `Corriger les erreurs dans ${unitTitle}`,
    recMistakesReason: (unitTitle, count) =>
      `Vous avez accumulé ${count} erreur(s) sur ${unitTitle}. Consultez les explications pas à pas.`,
    recSlidesTitle: (unitTitle) => `Consulter les diapositives de ${unitTitle}`,
    recSlidesReason: (unitTitle) =>
      `Vous n'avez pas encore terminé le résumé visuel de 9 diapositives pour ${unitTitle}.`,
    recPracticeTitle: (unitTitle) => `S'entraîner sur ${unitTitle}`,
    recPracticeReason: (unitTitle) =>
      `Résolvez une série de 16 questions pour développer rapidité et précision.`,
    actionSolveMistakes: 'Corriger erreurs',
    actionReviewSlides: 'Ouvrir diapos',
    actionStartQuiz: 'Lancer quiz',
    actionStudyCards: 'Réviser cartes',
    actionTakeTrial: 'Démarrer blanc',
    spacedRepSummary: (cards, mistakes) =>
      `L'algorithme de répétition espacée prévoit ${cards} carte(s) et ${mistakes} question(s) d'erreur à réviser aujourd'hui.`,
  },
  ru: {
    prereqWarning: (pct) =>
      `Твой уровень по химии TYT — ${pct} %. Прежде чем углубляться в AYT, лучше довести его до 60 %.`,
    missionDailyQuestions: (target) => ({
      title: `Цель на день — вопросов: ${target}`,
      desc: `Реши сегодня не меньше ${target} вопр. по химии.`,
    }),
    missionUnitPractice: (unitTitle, target) => ({
      title: `${unitTitle}: реши ${target} вопр.`,
      desc: `Закрепи типовые экзаменационные задания по этой теме.`,
    }),
    missionFlashcards: (target) => ({
      title: `Повтори карточки: ${target}`,
      desc: `Запоминай формулы и понятия по системе Лейтнера.`,
    }),
    missionMistakes: (target) => ({
      title: `Разбери ошибки из тетради: ${target}`,
      desc: `Реши заново задания, в которых ошибся, чтобы больше не попадаться в ловушки.`,
    }),
    recMistakesTitle: (unitTitle) => `Разбери ошибки по теме «${unitTitle}»`,
    recMistakesReason: (unitTitle, count) =>
      `Ошибок по теме «${unitTitle}»: ${count}. Изучи пошаговые решения.`,
    recSlidesTitle: (unitTitle) => `Изучи слайды по теме «${unitTitle}»`,
    recSlidesReason: (unitTitle) =>
      `Краткий иллюстрированный конспект из 9 слайдов по теме «${unitTitle}» ещё не пройден.`,
    recPracticeTitle: (unitTitle) => `Реши тест по теме «${unitTitle}»`,
    recPracticeReason: (unitTitle) =>
      `Реши набор из 16 вопросов, чтобы отработать скорость и точность.`,
    actionSolveMistakes: 'К ошибкам',
    actionReviewSlides: 'Открыть слайды',
    actionStartQuiz: 'Начать тест',
    actionStudyCards: 'К карточкам',
    actionTakeTrial: 'Пройти пробник',
    spacedRepSummary: (cards, mistakes) =>
      `Интервальное повторение на сегодня: карточек — ${cards}, вопросов с ошибками — ${mistakes}.`,
  },
  ar: {
    prereqWarning: (pct) =>
      `مستوى إتقانك لكيمياء TYT حالياً هو ${pct}%. في نظام امتحانات YKS، يُنصح بشدة ببلوغ عتبة 60% في TYT قبل التعمق في دروس AYT.`,
    missionDailyQuestions: (target) => ({
      title: `الهدف اليومي: حل ${target} سؤال`,
      desc: `أنجز اليوم ما لا يقل عن ${target} سؤال كيمياء لتحقيق هدفك.`,
    }),
    missionUnitPractice: (unitTitle, target) => ({
      title: `${unitTitle}: حل ${target} أسئلة`,
      desc: `ثبّت مهاراتك بحل ${target} سؤال من نماذج الامتحانات المعتمدة.`,
    }),
    missionFlashcards: (target) => ({
      title: `مراجعة ${target} بطاقة تعليمية`,
      desc: `استخدم نظام لايتنر 3D لتثبيت الصيغ والمفاهيم الكيميائية.`,
    }),
    missionMistakes: (target) => ({
      title: `تصحيح ${target} أخطاء من الدفتر`,
      desc: `أعد تحليل الأسئلة الخاطئة لتجنب الفخاخ الامتحانية.`,
    }),
    recMistakesTitle: (unitTitle) => `تصحيح الأخطاء في وحدة ${unitTitle}`,
    recMistakesReason: (unitTitle, count) =>
      `لديك ${count} خطأ مسجل في ${unitTitle}. راجع خطوات الحل المفصلة.`,
    recSlidesTitle: (unitTitle) => `استعراض ملخص شرائح ${unitTitle}`,
    recSlidesReason: (unitTitle) =>
      `لم تكمل ملخص الشرائح التسع المصور الخاص بوحدة ${unitTitle} بعد.`,
    recPracticeTitle: (unitTitle) => `التدرب على وحدة ${unitTitle}`,
    recPracticeReason: (unitTitle) =>
      `حل مجموعة من 16 سؤالاً لرفع الدقة والسرعة الحسابية.`,
    actionSolveMistakes: 'حل الأخطاء',
    actionReviewSlides: 'عرض الشرائح',
    actionStartQuiz: 'بدء الاختبار',
    actionStudyCards: 'مراجعة البطاقات',
    actionTakeTrial: 'بدء التجريبي',
    spacedRepSummary: (cards, mistakes) =>
      `نظام التكرار المتباعد يحدد لك اليوم ${cards} بطاقة و ${mistakes} سؤال خطأ للمراجعة.`,
  },
  zh: {
    prereqWarning: (pct) =>
      `您的 TYT 化学基础掌握度目前为 ${pct}%。为了 YKS 排名，建议先将 TYT 各单元提升到 60% 以上，再深入学习 AYT 内容。`,
    missionDailyQuestions: (target) => ({
      title: `今日目标：${target} 道题`,
      desc: `今天在题库中至少完成 ${target} 道化学题。`,
    }),
    missionUnitPractice: (unitTitle, target) => ({
      title: `${unitTitle}：练习 ${target} 题`,
      desc: `完成本单元 ${target} 道题，熟悉考试常见题型。`,
    }),
    missionFlashcards: (target) => ({
      title: `复习 ${target} 张闪卡`,
      desc: `用主动回忆法复习莱特纳 3D 记忆盒中的化学概念。`,
    }),
    missionMistakes: (target) => ({
      title: `清理错题本中的 ${target} 道题`,
      desc: `重新分析以前做错的题目，提高得分。`,
    }),
    recMistakesTitle: (unitTitle) => `清理“${unitTitle}”单元的错题`,
    recMistakesReason: (unitTitle, count) =>
      `“${unitTitle}”单元的错题本中已积累 ${count} 道题。分析其中的概念陷阱，真正掌握知识。`,
    recSlidesTitle: (unitTitle) => `复习“${unitTitle}”知识点总结`,
    recSlidesReason: (unitTitle) =>
      `您还没有看完“${unitTitle}”单元的 9 张图解幻灯片总结。请复习其中的重要反应和公式。`,
    recPracticeTitle: (unitTitle) => `加强“${unitTitle}”题库练习`,
    recPracticeReason: (unitTitle) =>
      `本单元已做的题目还较少。完成一组 16 道题的新测验，提高速度和得分。`,
    actionSolveMistakes: '订正错题',
    actionReviewSlides: '查看幻灯片',
    actionStartQuiz: '开始测验',
    actionStudyCards: '复习闪卡',
    actionTakeTrial: '开始模拟考',
    spacedRepSummary: (cards, mistakes) =>
      `根据间隔重复算法，今天有 ${cards} 张闪卡和错题本中的 ${mistakes} 道题等待复习。`,
  },
  ku: {
    prereqWarning: (pct) =>
      `Asta te ya Kîmyaya TYT li dora %${pct} ye. Li gorî pergala YKS, tê pêşniyarkirin ku beriya mijarên kûr ên AYT, TYT herî kêm bigihîje %60î.`,
    missionDailyQuestions: (target) => ({
      title: `Armanca Rojane: ${target} Pirs`,
      desc: `Îro herî kêm ${target} pirsên kîmyayê çareser bike da ku bigihîjî armanca xwe.`,
    }),
    missionUnitPractice: (unitTitle, target) => ({
      title: `${unitTitle}: ${target} Pirs Çareser Bike`,
      desc: `Ji bo xurtkirina zanînê ${target} pirsên vê yekeyê çareser bike.`,
    }),
    missionFlashcards: (target) => ({
      title: `${target} Qertên Bîrê Dubare Bike`,
      desc: `Bi pergala Leitner 3D têgîn û formulên kîmyayê dubare bike.`,
    }),
    missionMistakes: (target) => ({
      title: `${target} Çewtiyan Ji Deftera Çewtiyan Paqij Bike`,
      desc: `Pirsên berê çewt çareserkirî cardin binirxîne da ku nêta xwe zêde bikî.`,
    }),
    recMistakesTitle: (unitTitle) => `Çewtiyên Yekeya ${unitTitle} Paqij Bike`,
    recMistakesReason: (unitTitle, count) =>
      `Di mijara ${unitTitle} de ${count} pirsên çewt hene. Şiroveyên pirsan baş binirxîne.`,
    recSlidesTitle: (unitTitle) => `Slaytên Yekeya ${unitTitle} Binêre`,
    recSlidesReason: (unitTitle) =>
      `Te hîn kurteya wênebar a 9 slaytan a ji bo ${unitTitle} temam nekiriye.`,
    recPracticeTitle: (unitTitle) => `Yekeya ${unitTitle} Xurt Bike`,
    recPracticeReason: (unitTitle) =>
      `16 pirsên nû çareser bike da ku lez û serkeftina xwe bilind bikî.`,
    actionSolveMistakes: 'Çewtiyan Çareser Bike',
    actionReviewSlides: 'Slaytan Veke',
    actionStartQuiz: 'Testê Dest Pê Bike',
    actionStudyCards: 'Qertan Dubare Bike',
    actionTakeTrial: 'Dest Bi Ezmûnê Bike',
    spacedRepSummary: (cards, mistakes) =>
      `Li gorî algorîtmaya dubarekirinê îro ${cards} qert û ${mistakes} pirsên çewt li benda çareseriyê ne.`,
  },
};

// ============================================================================
// Core Deterministic AI Coach Algorithm
// ============================================================================

export function generateAiCoachReport(profile: LearnerProfile, lang: LanguageCode): AiCoachReport {
  const strings = COACH_STRINGS[lang] ?? COACH_STRINGS.tr;
  const targetTrack = profile.targetTrack ?? 'TYT_FIRST';

  // 1. Analyze all 24 Units
  const allTopics: TopicMastery[] = ALL_CHEMISTRY_UNITS.map((u) => {
    const unitTitle = u.title[lang] || u.title.tr;
    const solvedForUnit = profile.solvedQuestionIds.filter((id) => id.startsWith(u.id));
    const solvedCount = solvedForUnit.length;
    const mistakesForUnit = profile.mistakeQuestionIds.filter((id) => id.startsWith(u.id));
    const mistakeCount = mistakesForUnit.length;

    let correctCount = 0;
    if (profile.solvedMap) {
      solvedForUnit.forEach((id) => {
        if (profile.solvedMap![id] === true) correctCount++;
      });
    } else {
      correctCount = Math.max(0, solvedCount - mistakeCount);
    }

    const accuracyPercent = solvedCount > 0 ? Math.round((correctCount / solvedCount) * 100) : 0;

    let status: TopicMastery['status'] = 'UNTOUCHED';
    if (solvedCount >= 10 && accuracyPercent >= 75) {
      status = 'MASTERED';
    } else if (solvedCount >= 5 && (accuracyPercent < 60 || mistakeCount >= 3)) {
      status = 'NEEDS_FOCUS';
    } else if (solvedCount > 0) {
      status = 'DEVELOPING';
    }

    return {
      unitId: u.id,
      unitOrder: u.order,
      unitTitle,
      exam: u.exam,
      grade: u.grade,
      totalQuestions: 128,
      solvedCount,
      correctCount,
      mistakeCount,
      accuracyPercent,
      status,
    };
  });

  // 2. Filter Mastered & Weak Topics
  const masteredTopics = allTopics.filter((t) => t.status === 'MASTERED');

  const weakTopics = allTopics
    .filter((t) => t.status === 'NEEDS_FOCUS' || t.mistakeCount > 0 || (t.solvedCount > 0 && t.accuracyPercent < 65))
    .sort((a, b) => {
      // Sort priority: highest mistake count first, then lowest accuracy
      if (b.mistakeCount !== a.mistakeCount) return b.mistakeCount - a.mistakeCount;
      return a.accuracyPercent - b.accuracyPercent;
    });

  // 3. Stage Progression & Prerequisite Logic
  const tytTopics = allTopics.filter((t) => t.exam === 'TYT');
  const aytTopics = allTopics.filter((t) => t.exam === 'AYT');

  const tytTotalSolved = tytTopics.reduce((acc, cur) => acc + cur.solvedCount, 0);
  const tytTotalCorrect = tytTopics.reduce((acc, cur) => acc + cur.correctCount, 0);
  const tytAccuracy = tytTotalSolved > 0 ? Math.round((tytTotalCorrect / tytTotalSolved) * 100) : 0;
  // TYT foundational coverage: 160 questions (1 set per unit) is 100% foundation
  const tytCoverage = Math.min(100, Math.round((tytTotalSolved / 160) * 100));
  const tytMasteryPercent = Math.round(tytCoverage * 0.5 + tytAccuracy * 0.5);

  const aytTotalSolved = aytTopics.reduce((acc, cur) => acc + cur.solvedCount, 0);
  const aytTotalCorrect = aytTopics.reduce((acc, cur) => acc + cur.correctCount, 0);
  const aytAccuracy = aytTotalSolved > 0 ? Math.round((aytTotalCorrect / aytTotalSolved) * 100) : 0;
  const aytCoverage = Math.min(100, Math.round((aytTotalSolved / 224) * 100));
  const aytMasteryPercent = Math.round(aytCoverage * 0.5 + aytAccuracy * 0.5);

  const totalSolved = profile.solvedQuestionIds.length;
  const totalCorrect = allTopics.reduce((acc, cur) => acc + cur.correctCount, 0);
  const overallAccuracy = totalSolved > 0 ? Math.round((totalCorrect / totalSolved) * 100) : 0;

  let prerequisiteWarning: PrerequisiteWarning | undefined;
  if (targetTrack === 'TYT_FIRST' && tytMasteryPercent < 60) {
    prerequisiteWarning = {
      needed: true,
      tytMasteryPercent,
      message: strings.prereqWarning(tytMasteryPercent),
    };
  }

  // 4. Personalized Actionable Recommendations
  const recommendations: AiCoachRecommendation[] = [];

  // Rec 1: Top mistake unit
  const mistakeCandidate = weakTopics.find((t) => t.mistakeCount > 0);
  if (mistakeCandidate) {
    recommendations.push({
      id: `rec-mistakes-${mistakeCandidate.unitId}`,
      unitId: mistakeCandidate.unitId,
      unitTitle: mistakeCandidate.unitTitle,
      exam: mistakeCandidate.exam,
      type: 'SOLVE_MISTAKES',
      priority: 'HIGH',
      title: strings.recMistakesTitle(mistakeCandidate.unitTitle),
      reason: strings.recMistakesReason(mistakeCandidate.unitTitle, mistakeCandidate.mistakeCount),
      actionLabel: strings.actionSolveMistakes,
    });
  }

  // Rec 2: Slides not completed in weak or current unit
  const incompleteSlideTopic = allTopics.find(
    (t) => !profile.stats.completedSlideUnits.includes(t.unitId) && (targetTrack === 'AYT_FOCUS' ? t.exam === 'AYT' : true)
  );
  if (incompleteSlideTopic) {
    recommendations.push({
      id: `rec-slides-${incompleteSlideTopic.unitId}`,
      unitId: incompleteSlideTopic.unitId,
      unitTitle: incompleteSlideTopic.unitTitle,
      exam: incompleteSlideTopic.exam,
      type: 'REVIEW_SLIDES',
      priority: 'MEDIUM',
      title: strings.recSlidesTitle(incompleteSlideTopic.unitTitle),
      reason: strings.recSlidesReason(incompleteSlideTopic.unitTitle),
      actionLabel: strings.actionReviewSlides,
    });
  }

  // Rec 3: Low question volume unit to practice
  const practiceCandidate =
    (targetTrack === 'AYT_FOCUS' ? aytTopics : tytTopics).find((t) => t.solvedCount < 16) ?? allTopics[0];
  if (practiceCandidate) {
    recommendations.push({
      id: `rec-practice-${practiceCandidate.unitId}`,
      unitId: practiceCandidate.unitId,
      unitTitle: practiceCandidate.unitTitle,
      exam: practiceCandidate.exam,
      type: 'PRACTICE_QUESTIONS',
      priority: 'MEDIUM',
      title: strings.recPracticeTitle(practiceCandidate.unitTitle),
      reason: strings.recPracticeReason(practiceCandidate.unitTitle),
      actionLabel: strings.actionStartQuiz,
    });
  }

  // Rec 4: Spaced repetition cards
  const unmasteredCardCount = Math.max(0, 396 - profile.masteredCardIds.length);
  if (unmasteredCardCount > 0) {
    recommendations.push({
      id: 'rec-cards-general',
      unitId: practiceCandidate?.unitId ?? 'u01',
      unitTitle: '3D Leitner Flashcards',
      exam: 'TYT',
      type: 'STUDY_CARDS',
      priority: 'LOW',
      title: strings.missionFlashcards(10).title,
      reason: strings.missionFlashcards(10).desc,
      actionLabel: strings.actionStudyCards,
    });
  }

  // 5. Spaced Repetition Summary
  const dueUnitIds = weakTopics.slice(0, 3).map((t) => t.unitId);
  const spacedRepetitionSuggestions: SpacedRepetitionSummary = {
    flashcardCountToReview: Math.min(25, unmasteredCardCount),
    mistakeCountToRetry: profile.mistakeQuestionIds.length,
    dueUnitIds,
    summary: strings.spacedRepSummary(Math.min(25, unmasteredCardCount), profile.mistakeQuestionIds.length),
  };

  // 6. Daily Smart Missions (3 to 4 missions with live status)
  const today = profile.dailyHistory[profile.dailyHistory.length - 1];
  const questionsSolvedToday = today?.questionsSolved ?? 0;
  const questionTarget = profile.dailyQuestionGoal || 30;

  const mission1: AiCoachMission = {
    id: 'mission-daily-q',
    title: strings.missionDailyQuestions(questionTarget).title,
    description: strings.missionDailyQuestions(questionTarget).desc,
    category: 'DAILY_GOAL',
    targetCount: questionTarget,
    currentCount: Math.min(questionTarget, questionsSolvedToday),
    completed: questionsSolvedToday >= questionTarget,
  };

  // Mission 2: Focus on weak unit or target track unit
  const focusTopic =
    weakTopics[0] ??
    (targetTrack === 'AYT_FOCUS'
      ? aytTopics.find((t) => t.status !== 'MASTERED')
      : tytTopics.find((t) => t.status !== 'MASTERED')) ??
    allTopics[0];

  const focusTarget = 5;
  const focusSolved = Math.min(focusTarget, focusTopic.solvedCount % focusTarget || (focusTopic.solvedCount > 0 ? focusTarget : 0));
  const mission2: AiCoachMission = {
    id: `mission-focus-${focusTopic.unitId}`,
    title: strings.missionUnitPractice(focusTopic.unitTitle, focusTarget).title,
    description: strings.missionUnitPractice(focusTopic.unitTitle, focusTarget).desc,
    category: focusTopic.exam === 'TYT' ? 'TYT_FOCUS' : 'AYT_FOCUS',
    targetCount: focusTarget,
    currentCount: focusSolved,
    completed: focusSolved >= focusTarget,
    unitId: focusTopic.unitId,
  };

  // Mission 3: Flashcards or 3D Lab
  const cardsTarget = 10;
  const cardsMasteredToday = Math.min(cardsTarget, profile.masteredCardIds.length % cardsTarget || (profile.masteredCardIds.length > 0 ? cardsTarget : 0));
  const mission3: AiCoachMission = {
    id: 'mission-cards',
    title: strings.missionFlashcards(cardsTarget).title,
    description: strings.missionFlashcards(cardsTarget).desc,
    category: 'CARDS',
    targetCount: cardsTarget,
    currentCount: cardsMasteredToday,
    completed: cardsMasteredToday >= cardsTarget,
  };

  // Mission 4: Mistake notebook clearing
  const mistakeTarget = Math.min(5, Math.max(1, profile.mistakeQuestionIds.length));
  const mission4: AiCoachMission = {
    id: 'mission-mistakes',
    title: strings.missionMistakes(mistakeTarget).title,
    description: strings.missionMistakes(mistakeTarget).desc,
    category: 'MISTAKE',
    targetCount: mistakeTarget,
    currentCount: profile.mistakeQuestionIds.length === 0 ? mistakeTarget : 0,
    completed: profile.mistakeQuestionIds.length === 0,
  };

  const dailyMissions: AiCoachMission[] = [mission1, mission2, mission3, mission4];

  return {
    timestamp: new Date().toISOString(),
    profileId: profile.id,
    profileName: profile.name,
    targetTrack,
    language: lang,
    overallAccuracy,
    totalSolved,
    tytMasteryPercent,
    aytMasteryPercent,
    masteredTopics,
    weakTopics,
    allTopics,
    recommendations: recommendations.slice(0, 4),
    spacedRepetitionSuggestions,
    dailyMissions,
    prerequisiteWarning,
  };
}
