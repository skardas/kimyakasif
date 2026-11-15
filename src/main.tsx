import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import '@fontsource-variable/figtree';
import '@fontsource-variable/bricolage-grotesque';
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

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
