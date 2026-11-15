import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
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

// Register Offline PWA Service Worker
if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {
      // Gracefully silent in restricted webviews or Capacitor native wraps
    });
  });
}

// Warm the equation fonts so the first typeset equation does not reflow when its font arrives.
if (typeof document !== 'undefined' && document.fonts?.load) {
  ['1em KaTeX_Main', 'italic 1em KaTeX_Math', '1em KaTeX_Size1', '1em KaTeX_Size2'].forEach((font) => {
    document.fonts.load(font).catch(() => {});
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
