import { Capacitor } from '@capacitor/core';
import { App as NativeApp } from '@capacitor/app';

/**
 * One foreground/background signal for the whole app.
 *
 * `visibilitychange` covers browsers and iOS (WKWebView hides the document when the app leaves the
 * foreground). Android's WebView does not always flip `document.hidden` when the activity pauses,
 * so on native platforms Capacitor's `appStateChange` is listened to as well. Listeners only hear
 * real transitions, never the same state twice in a row.
 */
type Listener = (active: boolean) => void;

const listeners = new Set<Listener>();
let active = typeof document === 'undefined' ? true : !document.hidden;
let wired = false;

function set(next: boolean) {
  if (next === active) return;
  active = next;
  listeners.forEach((fn) => {
    try {
      fn(next);
    } catch {
      // A failing listener must not stop the others.
    }
  });
}

function wire() {
  if (wired || typeof document === 'undefined') return;
  wired = true;
  document.addEventListener('visibilitychange', () => set(!document.hidden));
  if (Capacitor.isNativePlatform()) {
    NativeApp.addListener('appStateChange', ({ isActive }) => set(isActive)).catch(() => {});
  }
}

export function isAppActive(): boolean {
  return active;
}

/** Calls `fn(active)` on every foreground/background transition; returns an unsubscribe function. */
export function onAppActiveChange(fn: Listener): () => void {
  wire();
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}
