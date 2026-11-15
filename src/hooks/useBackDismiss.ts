import { useEffect, useRef } from 'react';
import { Capacitor } from '@capacitor/core';

/**
 * Makes the system back gesture / Android back button close the top-most open layer
 * (slide deck, quiz, zoom dialog, game, a non-home tab) instead of leaving the app.
 *
 * Each open layer pushes one history entry. A back navigation pops it and calls the layer's
 * close handler; only the top-most layer reacts. When a layer is closed from the UI, its history
 * entry is removed again so the stack never grows. If the close handler keeps the layer open
 * (e.g. it only shows an "are you sure?" dialog), the entry is re-armed.
 *
 * In the Android/iOS app no history entries are used: the Android back button calls
 * dismissTopLayer() directly (main.tsx) and iOS has no back navigation in the WebView. History
 * traversals are asynchronous, and on a busy Android WebView a back() could land seconds later,
 * after the next layer had pushed its own entry, and close that layer instead (tap the Cards tab
 * right after closing a slide deck with the back button → thrown back to the home tab).
 */
interface Layer {
  id: number;
  close: () => void;
}

const layers: Layer[] = [];
let nextId = 1;
let ignorePops = 0;
let listening = false;
const useHistory = !Capacitor.isNativePlatform();

function onPopState(): void {
  if (ignorePops > 0) {
    ignorePops -= 1;
    return;
  }
  const top = layers[layers.length - 1];
  if (!top) return;
  top.close();
  // Still registered after the handler ran: the layer stayed open, so give it its entry back.
  window.setTimeout(() => {
    if (layers.includes(top)) window.history.pushState({ kyLayer: top.id }, '');
  }, 0);
}

/**
 * Native back button: closes the top-most layer at once. Returns false when there is none.
 * (A layer whose close handler keeps it open, e.g. behind an "are you sure?" dialog, simply stays.)
 */
export function dismissTopLayer(): boolean {
  const top = layers[layers.length - 1];
  if (!top) return false;
  top.close();
  return true;
}

export function useBackDismiss(open: boolean, onClose: () => void): void {
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    if (!open || typeof window === 'undefined') return undefined;
    if (!useHistory) {
      const layer: Layer = { id: nextId++, close: () => closeRef.current() };
      layers.push(layer);
      return () => {
        const idx = layers.indexOf(layer);
        if (idx >= 0) layers.splice(idx, 1);
      };
    }
    if (!window.history?.pushState) return undefined;
    if (!listening) {
      window.addEventListener('popstate', onPopState);
      listening = true;
    }
    const layer: Layer = { id: nextId++, close: () => closeRef.current() };
    layers.push(layer);
    window.history.pushState({ kyLayer: layer.id }, '');

    return () => {
      const idx = layers.indexOf(layer);
      if (idx >= 0) layers.splice(idx, 1);
      // Closed from the UI (not by a back navigation): drop the entry this layer pushed.
      if (window.history.state && window.history.state.kyLayer === layer.id) {
        ignorePops += 1;
        window.history.back();
      }
    };
  }, [open]);
}
