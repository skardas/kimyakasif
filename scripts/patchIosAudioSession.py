"""iOS uygulamasında ses oturumunu 'playback' yapar: müzik ve ses efektleri sessiz mod anahtarı açıkken de çalar,
başka uygulamaların sesiyle karışabilir. ios/ klasörü git'e girmediği için `npx cap add ios` sonrasında yeniden çalıştırın:
    python3 scripts/patchIosAudioSession.py
"""
from pathlib import Path

p = Path(__file__).resolve().parent.parent / 'ios/App/App/AppDelegate.swift'
if p.exists():
    s = p.read_text()
    if 'AVAudioSession' in s:
        print('zaten uygulanmış')
    else:
        s = s.replace('import Capacitor\n', 'import Capacitor\nimport AVFoundation\n', 1)
        s = s.replace(
            '        // Override point for customization after application launch.\n        return true',
            '        // Web Audio sessiz mod anahtarına takılmasın: müzik ve ses efektleri "oynatma" oturumunda çalar\n'
            '        try? AVAudioSession.sharedInstance().setCategory(.playback, mode: .default, options: [.mixWithOthers])\n'
            '        try? AVAudioSession.sharedInstance().setActive(true)\n'
            '        return true',
            1,
        )
        p.write_text(s)
        print('uygulandı')
else:
    print('ios/App/App/AppDelegate.swift bulunamadı (npx cap add ios sonrası çalıştırın)')
