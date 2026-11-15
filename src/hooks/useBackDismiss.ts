import { useEffect, useRef } from 'react';

/**
 * Makes the system back gesture / Android back button close the top-most open layer
 * (slide deck, quiz, zoom dialog, game, a non-home tab) instead of leaving the app.
 *
 * Each open layer pushes one history entry. A back navigation pops it and calls the layer's
 * close handler; only the top-most layer reacts. When a layer is closed from the UI, its history
 * entry is removed again so the stack never grows. If the close handler keeps the layer open
 * (e.g. it only shows an "are you sure?" dialog), the entry is re-armed.
 */
interface Layer {
  id: number;
  close: () => void;
}

const layers: Layer[] = [];
let nextId = 1;
let ignorePops = 0;
let listening = false;

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

/** True while at least one layer would react to a back navigation. */
export function hasBackLayers(): boolean {
  return layers.length > 0;
}

export function useBackDismiss(open: boolean, onClose: () => void): void {
  const closeRef = useRef(onClose);
  closeRef.current = onClose;

  useEffect(() => {
    if (!open || typeof window === 'undefined' || !window.history?.pushState) return undefined;
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
