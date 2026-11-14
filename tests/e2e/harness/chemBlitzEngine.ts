export interface BlitzQuestion {
  id: string;
  statement: string;
  isTrue: boolean;
  trapExplanation: string;
}

export const CANONICAL_BLITZ_QUESTIONS: BlitzQuestion[] = [
  {
    id: 'blitz-01',
    statement: 'Tüm soy gazlar hiçbir koşulda bileşik oluşturamaz.',
    isTrue: false,
    trapExplanation: 'Tuzak: Ksenon (Xe) ve Kripton (Kr), flor ve oksijenle bileşik yapabilir (örn. XeF2, XeF4).',
  },
  {
    id: 'blitz-02',
    statement: 'İdeal gaz molekülleri arasında öz hacim sıfır ve çekim kuvveti yok kabul edilir.',
    isTrue: true,
    trapExplanation: 'Doğru: Kinetik teoriye göre ideal gaz tanımıdır.',
  },
  {
    id: 'blitz-03',
    statement: 'pH değeri küçüldükçe çözeltideki H+ iyon derişimi artar.',
    isTrue: true,
    trapExplanation: 'Doğru: pH = -log[H+], ters logaritmik ilişkidir.',
  },
  {
    id: 'blitz-04',
    statement: 'Katalizör bir tepkimenin entalpi değişimini (ΔH) değiştirir.',
    isTrue: false,
    trapExplanation: 'Tuzak: Katalizör Ea değerini düşürür, tepkime entalpisini (ΔH) asla değiştirmez.',
  },
  {
    id: 'blitz-05',
    statement: 'Bir elektrokimyasal pilde anot kutbunda daima yükseltgenme gerçekleşir.',
    isTrue: true,
    trapExplanation: 'Doğru: Kimya tekerlemesi (KİMYA: Katotta İndirgenme, Mayot/Anotta Yükseltgenme).',
  },
  {
    id: 'blitz-06',
    statement: 'Endotermik tepkimelerde sıcaklık arttıkça denge sabiti (Kc) azalır.',
    isTrue: false,
    trapExplanation: 'Tuzak: Endotermik tepkimelerde sıcaklık artarsa ürünler lehine kayar, Kc artar.',
  },
  {
    id: 'blitz-07',
    statement: 'Aynı periyotta soldan sağa gidildikçe genellikle elektronegatiflik artar.',
    isTrue: true,
    trapExplanation: 'Doğru: Çekirdek yükü artar, atom yarıçapı küçülür, elektronegatiflik artar.',
  },
];

export class ChemBlitzEngine {
  public durationSeconds: number;
  public remainingSeconds: number;
  public score: number = 0;
  public combo: number = 0;
  public maxCombo: number = 0;
  public isFinished: boolean = false;
  public currentIndex: number = 0;
  public questions: BlitzQuestion[];
  public answersLog: Array<{ id: string; choice: boolean; isCorrect: boolean; points: number }> = [];

  constructor(questions = CANONICAL_BLITZ_QUESTIONS, durationSeconds = 60) {
    this.questions = questions;
    this.durationSeconds = durationSeconds;
    this.remainingSeconds = durationSeconds;
  }

  tick(deltaSeconds: number): void {
    if (this.isFinished) return;
    this.remainingSeconds = Math.max(0, this.remainingSeconds - deltaSeconds);
    if (this.remainingSeconds === 0) {
      this.isFinished = true;
    }
  }

  submitAnswer(choice: boolean): { isCorrect: boolean; pointsAwarded: number; isGameOver: boolean } {
    if (this.isFinished || this.remainingSeconds <= 0) {
      this.isFinished = true;
      return { isCorrect: false, pointsAwarded: 0, isGameOver: true };
    }

    const currentQ = this.questions[this.currentIndex % this.questions.length];
    const isCorrect = choice === currentQ.isTrue;
    let points = 0;

    if (isCorrect) {
      this.combo++;
      if (this.combo > this.maxCombo) this.maxCombo = this.combo;
      points = 20 + this.combo * 5;
      this.score += points;
    } else {
      this.combo = 0;
    }

    this.answersLog.push({
      id: currentQ.id,
      choice,
      isCorrect,
      points,
    });

    this.currentIndex++;
    return { isCorrect, pointsAwarded: points, isGameOver: this.isFinished };
  }
}
