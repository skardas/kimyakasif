import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { Capacitor } from '@capacitor/core';
import { App as NativeApp } from '@capacitor/app';
import { hasBackLayers } from './hooks/useBackDismiss';
import { readStoredLanguage } from './store/useAppStore';
import { ensureUnitLanguage } from './data/units/loader';
import '@fontsource-variable/figtree';
import '@fontsource-variable/bricolage-grotesque';
// KaTeX stylesheet + fonts are bundled by Vite (offline WebView, no CDN); theme.css overrides follow it.
import 'katex/dist/katex.min.css';
import './styles/theme.css';
import './styles/screens/curriculum.css';
import './styles/screens/slides.css';
import './styles/screens/lab.css';
import './styles/screens/cards.css';
import './styles/screens/games.css';
import './styles/screens/exams.css';
import './styles/screens/profile.css';
import './styles/screens/settings.css';

// Offline PWA service worker — web only. In the Android/iOS app every asset already ships inside the
// binary, so a worker would only add a second process and a second on-disk copy of the bundle
// (its cache name never changes, so old hashed chunks piled up with every app update). Builds that
// registered one earlier get it removed along with its cache.
if ('serviceWorker' in navigator && Capacitor.isNativePlatform()) {
  navigator.serviceWorker
    .getRegistrations()
    .then((regs) => Promise.all(regs.map((r) => r.unregister())))
    .then(() => (typeof caches !== 'undefined' ? caches.keys() : []))
    .then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
    .catch(() => {});
} else if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Gracefully silent in restricted webviews or Capacitor native wraps
    });
  });
}

// Android hardware back: close the top-most open layer (see useBackDismiss); on the home tab with
// nothing open, send the app to the background instead of killing it.
if (Capacitor.isNativePlatform()) {
  NativeApp.addListener('backButton', () => {
    if (hasBackLayers()) window.history.back();
    else NativeApp.minimizeApp().catch(() => {});
  }).catch(() => {});
}

// Warm the equation fonts so the first typeset equation does not reflow when its font arrives.
if (typeof document !== 'undefined' && document.fonts?.load) {
  ['1em KaTeX_Main', 'italic 1em KaTeX_Math', '1em KaTeX_Size1', '1em KaTeX_Size2'].forEach((font) => {
    document.fonts.load(font).catch(() => {});
  });
}

// Production builds load the unit texts one language at a time (src/data/units/packing.ts); the
// active language's pack has to be in place before the first render.
ensureUnitLanguage(readStoredLanguage())
  .catch(() => ensureUnitLanguage('tr'))
  .catch(() => {})
  .finally(() => {
    ReactDOM.createRoot(document.getElementById('root')!).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  });
