/**
 * E2E Test Environment Shims for Kimya YKS
 * Provides in-memory W3C Storage, Web Audio API, Canvas, and DOM mocks
 * for deterministic headless execution under Node.js / tsx.
 */

import React, { act } from 'react';
import ReactDOMClient from 'react-dom/client';

export class MockLocalStorage implements Storage {
  private store: Record<string, string> = {};

  get length(): number {
    return Object.keys(this.store).length;
  }

  clear(): void {
    this.store = {};
  }

  getItem(key: string): string | null {
    return Object.prototype.hasOwnProperty.call(this.store, key) ? this.store[key] : null;
  }

  key(index: number): string | null {
    const keys = Object.keys(this.store);
    return keys[index] ?? null;
  }

  removeItem(key: string): void {
    delete this.store[key];
  }

  setItem(key: string, value: string): void {
    this.store[key] = String(value);
  }

  dump(): Record<string, string> {
    return { ...this.store };
  }
}

export class MockAudioParam {
  value: number;
  events: Array<{ type: string; value: number; time: number; timeConstant?: number }> = [];

  constructor(initial = 0) {
    this.value = initial;
  }

  setValueAtTime(val: number, time: number): void {
    this.value = val;
    this.events.push({ type: 'setValueAtTime', value: val, time });
  }

  linearRampToValueAtTime(val: number, time: number): void {
    this.value = val;
    this.events.push({ type: 'linearRampToValueAtTime', value: val, time });
  }

  exponentialRampToValueAtTime(val: number, time: number): void {
    this.value = val;
    this.events.push({ type: 'exponentialRampToValueAtTime', value: val, time });
  }

  setTargetAtTime(val: number, time: number, timeConstant: number): void {
    this.value = val;
    this.events.push({ type: 'setTargetAtTime', value: val, time, timeConstant });
  }

  cancelScheduledValues(time: number): void {
    this.events.push({ type: 'cancelScheduledValues', value: this.value, time });
  }
}

export class MockAudioNode {
  connections: (MockAudioNode | MockAudioParam)[] = [];

  connect(dest: any): any {
    this.connections.push(dest);
    return dest;
  }

  disconnect(): void {
    this.connections = [];
  }
}

export class MockGainNode extends MockAudioNode {
  gain = new MockAudioParam(1);
}

export class MockOscillatorNode extends MockAudioNode {
  type: OscillatorType = 'sine';
  frequency = new MockAudioParam(440);
  detune = new MockAudioParam(0);
  started = false;
  stopped = false;
  startTime?: number;
  stopTime?: number;

  start(time = 0): void {
    this.started = true;
    this.startTime = time;
  }

  stop(time = 0): void {
    this.stopped = true;
    this.stopTime = time;
  }
}

export class MockBiquadFilterNode extends MockAudioNode {
  type: BiquadFilterType = 'lowpass';
  frequency = new MockAudioParam(350);
  Q = new MockAudioParam(1);
  gain = new MockAudioParam(0);
  detune = new MockAudioParam(0);
}

export class MockDynamicsCompressorNode extends MockAudioNode {
  threshold = new MockAudioParam(-24);
  knee = new MockAudioParam(30);
  ratio = new MockAudioParam(12);
  attack = new MockAudioParam(0.003);
  release = new MockAudioParam(0.25);
}

export class MockAudioBuffer {
  numberOfChannels: number;
  length: number;
  sampleRate: number;
  duration: number;
  private channelData: Float32Array[];

  constructor(channels: number, length: number, sampleRate: number) {
    this.numberOfChannels = channels;
    this.length = length;
    this.sampleRate = sampleRate;
    this.duration = length / sampleRate;
    this.channelData = Array.from({ length: channels }, () => new Float32Array(length));
  }

  getChannelData(channel: number): Float32Array {
    return this.channelData[channel] || new Float32Array(this.length);
  }
}

export class MockAudioBufferSourceNode extends MockAudioNode {
  buffer: MockAudioBuffer | null = null;
  playbackRate = new MockAudioParam(1);
  detune = new MockAudioParam(0);
  loop = false;
  started = false;
  stopped = false;

  start(_time = 0, _offset = 0, _duration = 0): void {
    this.started = true;
  }

  stop(_time = 0): void {
    this.stopped = true;
  }
}

export class MockConvolverNode extends MockAudioNode {
  buffer: MockAudioBuffer | null = null;
}

export class MockStereoPannerNode extends MockAudioNode {
  pan = new MockAudioParam(0);
}

export class MockAudioContext {
  static instances: MockAudioContext[] = [];
  static totalOscillatorsCreated = 0;
  static totalGainNodesCreated = 0;

  static resetTelemetry(): void {
    MockAudioContext.totalOscillatorsCreated = 0;
    MockAudioContext.totalGainNodesCreated = 0;
  }

  state: AudioContextState = 'running';
  currentTime = 0;
  sampleRate = 44100;
  destination = new MockAudioNode();
  activeOscillators: MockOscillatorNode[] = [];
  activeGainNodes: MockGainNode[] = [];
  activeFilters: MockBiquadFilterNode[] = [];
  activeBufferSources: MockAudioBufferSourceNode[] = [];
  activeCompressors: MockDynamicsCompressorNode[] = [];

  constructor() {
    MockAudioContext.instances.push(this);
  }

  createGain(): MockGainNode {
    MockAudioContext.totalGainNodesCreated++;
    const node = new MockGainNode();
    this.activeGainNodes.push(node);
    return node;
  }

  createOscillator(): MockOscillatorNode {
    MockAudioContext.totalOscillatorsCreated++;
    const node = new MockOscillatorNode();
    this.activeOscillators.push(node);
    return node;
  }

  createBiquadFilter(): MockBiquadFilterNode {
    const node = new MockBiquadFilterNode();
    this.activeFilters.push(node);
    return node;
  }

  createDynamicsCompressor(): MockDynamicsCompressorNode {
    const node = new MockDynamicsCompressorNode();
    this.activeCompressors.push(node);
    return node;
  }

  createBuffer(channels: number, length: number, sampleRate: number): MockAudioBuffer {
    return new MockAudioBuffer(channels, length, sampleRate);
  }

  createBufferSource(): MockAudioBufferSourceNode {
    const node = new MockAudioBufferSourceNode();
    this.activeBufferSources.push(node);
    return node;
  }

  createConvolver(): MockConvolverNode {
    return new MockConvolverNode();
  }

  createStereoPanner(): MockStereoPannerNode {
    return new MockStereoPannerNode();
  }

  resume(): Promise<void> {
    this.state = 'running';
    return Promise.resolve();
  }

  suspend(): Promise<void> {
    this.state = 'suspended';
    return Promise.resolve();
  }

  close(): Promise<void> {
    this.state = 'closed';
    return Promise.resolve();
  }
}

export class MockCanvasRenderingContext2D {
  canvas: any;
  fillStyle = '#000000';
  strokeStyle = '#000000';
  lineWidth = 1;
  globalAlpha = 1.0;
  operations: string[] = [];

  scaleX = 1;
  scaleY = 1;
  private stateStack: Array<{
    scaleX: number;
    scaleY: number;
    fillStyle: string;
    strokeStyle: string;
    lineWidth: number;
    globalAlpha: number;
  }> = [];

  clearRect(x: number, y: number, w: number, h: number): void {
    this.operations.push(`clearRect(${x},${y},${w},${h})`);
  }
  fillRect(x: number, y: number, w: number, h: number): void {
    this.operations.push(`fillRect(${x},${y},${w},${h})`);
  }
  strokeRect(x: number, y: number, w: number, h: number): void {
    this.operations.push(`strokeRect(${x},${y},${w},${h})`);
  }
  beginPath(): void {
    this.operations.push('beginPath()');
  }
  arc(x: number, y: number, r: number, sAngle: number, eAngle: number): void {
    this.operations.push(`arc(${x},${y},${r},${sAngle},${eAngle})`);
  }
  fill(): void {
    this.operations.push('fill()');
  }
  stroke(): void {
    this.operations.push('stroke()');
  }
  save(): void {
    this.stateStack.push({
      scaleX: this.scaleX,
      scaleY: this.scaleY,
      fillStyle: this.fillStyle,
      strokeStyle: this.strokeStyle,
      lineWidth: this.lineWidth,
      globalAlpha: this.globalAlpha,
    });
    this.operations.push('save()');
  }
  restore(): void {
    const prev = this.stateStack.pop();
    if (prev) {
      this.scaleX = prev.scaleX;
      this.scaleY = prev.scaleY;
      this.fillStyle = prev.fillStyle;
      this.strokeStyle = prev.strokeStyle;
      this.lineWidth = prev.lineWidth;
      this.globalAlpha = prev.globalAlpha;
    }
    this.operations.push('restore()');
  }
  translate(x: number, y: number): void {
    this.operations.push(`translate(${x},${y})`);
  }
  scale(x: number, y: number): void {
    this.scaleX *= x;
    this.scaleY *= y;
    this.operations.push(`scale(${x},${y})`);
  }
  rotate(angle: number): void {
    this.operations.push(`rotate(${angle})`);
  }
  moveTo(x: number, y: number): void {
    this.operations.push(`moveTo(${x},${y})`);
  }
  lineTo(x: number, y: number): void {
    this.operations.push(`lineTo(${x},${y})`);
  }
  closePath(): void {
    this.operations.push('closePath()');
  }
  fillText(text: string, x: number, y: number): void {
    this.operations.push(`fillText(${text},${x},${y})`);
  }
  strokeText(text: string, x: number, y: number): void {
    this.operations.push(`strokeText(${text},${x},${y})`);
  }
  measureText(text: string) {
    return { width: text.length * 7 };
  }
  createRadialGradient(_x0: number, _y0: number, _r0: number, _x1: number, _y1: number, _r1: number) {
    return {
      addColorStop: (_offset: number, _color: string) => {},
    };
  }
  createLinearGradient(_x0: number, _y0: number, _x1: number, _y1: number) {
    return {
      addColorStop: (_offset: number, _color: string) => {},
    };
  }
}

export class MockCanvasElement {
  width = 800;
  height = 600;
  style: Record<string, string> = {};
  private ctx = new MockCanvasRenderingContext2D();

  constructor() {
    this.ctx.canvas = this;
  }

  getContext(type: string): any {
    if (type === '2d') {
      return this.ctx;
    }
    return null;
  }

  setAttribute(k: string, v: string): void {
    (this as any)[k] = v;
  }

  getAttribute(k: string): string | null {
    return (this as any)[k] ?? null;
  }

  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: this.width,
      height: this.height,
      right: this.width,
      bottom: this.height,
    };
  }
}

export function setupTestEnvironment(): void {
  // 1. React act environment flag
  (globalThis as any).IS_REACT_ACT_ENVIRONMENT = true;

  // 2. DOM Node/Element mocks
  if (typeof (globalThis as any).HTMLElement === 'undefined') {
    (globalThis as any).HTMLElement = class {};
    (globalThis as any).HTMLIFrameElement = class {};
    (globalThis as any).Element = class {};
    (globalThis as any).Node = class {};
  }

  // 3. LocalStorage
  if (typeof (globalThis as any).localStorage === 'undefined') {
    (globalThis as any).localStorage = new MockLocalStorage();
  }

  // 4. Window & listeners
  const winListeners: Record<string, Function[]> = {};
  if (typeof (globalThis as any).window === 'undefined') {
    (globalThis as any).window = globalThis;
  }

  (globalThis as any).window.addEventListener = (ev: string, fn: Function) => {
    winListeners[ev] = winListeners[ev] || [];
    winListeners[ev].push(fn);
  };
  (globalThis as any).window.removeEventListener = (ev: string, fn: Function) => {
    if (winListeners[ev]) winListeners[ev] = winListeners[ev].filter((f) => f !== fn);
  };
  (globalThis as any).window.dispatchEvent = (event: { type: string }) => {
    if (winListeners[event.type]) {
      winListeners[event.type].forEach((fn) => fn(event));
      return true;
    }
    return false;
  };

  (globalThis as any).window.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });

  // 5. Document & DocumentElement
  if (typeof (globalThis as any).document === 'undefined' || !(globalThis as any).document.documentElement) {
    const docElement = {
      lang: 'tr',
      dir: 'ltr',
      dataset: {} as Record<string, string>,
      attributes: {} as Record<string, string>,
      hasAttribute(name: string): boolean {
        return this.attributes[name] !== undefined || (this as any)[name] !== undefined;
      },
      setAttribute(k: string, v: string) {
        this.attributes[k] = v;
        if (k === 'data-theme') {
          (this as any)['data-theme'] = v;
          this.dataset.theme = v;
        }
        if (k === 'data-reduce-motion') {
          (this as any)['data-reduce-motion'] = v;
        }
      },
      getAttribute(k: string): string | null {
        return this.attributes[k] || (this as any)[k] || null;
      },
      removeAttribute(k: string) {
        delete this.attributes[k];
        delete (this as any)[k];
        if (k === 'data-theme') {
          delete this.dataset.theme;
        }
      },
      toggleAttribute(name: string, force?: boolean): boolean {
        const exists = this.hasAttribute(name);
        const shouldHave = force !== undefined ? Boolean(force) : !exists;
        if (shouldHave) {
          this.setAttribute(name, '');
          return true;
        } else {
          this.removeAttribute(name);
          return false;
        }
      },
    };

    const docListeners: Record<string, Function[]> = {};

    (globalThis as any).document = {
      documentElement: docElement,
      body: {
        appendChild(_node: any) {},
        removeChild(_node: any) {},
        style: {},
      },
      createElement(tag: string) {
        if (tag.toLowerCase() === 'canvas') {
          return new MockCanvasElement();
        }
        return {
          nodeType: 1,
          tagName: tag.toUpperCase(),
          nodeName: tag.toUpperCase(),
          attributes: {} as Record<string, string>,
          style: {},
          setAttribute(k: string, v: string) {
            this.attributes[k] = v;
          },
          getAttribute(k: string) {
            return this.attributes[k] ?? null;
          },
          appendChild(_child: any) {},
          removeChild(_child: any) {},
          insertBefore(_child: any, _ref: any) {},
          addEventListener(_ev: string, _fn: Function) {},
          removeEventListener(_ev: string, _fn: Function) {},
        };
      },
      querySelector(sel: string) {
        if (sel === 'meta[name="color-scheme"]') {
          return {
            setAttribute: () => {},
            getAttribute: () => null,
          };
        }
        return null;
      },
      addEventListener(event: string, fn: Function) {
        if (!docListeners[event]) docListeners[event] = [];
        docListeners[event].push(fn);
      },
      removeEventListener(event: string, fn: Function) {
        if (docListeners[event]) {
          docListeners[event] = docListeners[event].filter((f) => f !== fn);
        }
      },
      dispatchEvent(event: { type: string }) {
        if (docListeners[event.type]) {
          docListeners[event.type].forEach((fn) => fn(event));
          return true;
        }
        return false;
      },
    };
  } else {
    // If document exists, ensure all required shims are augmented
    const el = (globalThis as any).document.documentElement;
    if (!el.dataset) el.dataset = {};
    if (!el.hasAttribute) {
      el.hasAttribute = function (name: string) {
        return this.attributes && this.attributes[name] !== undefined;
      };
    }
    if (!el.toggleAttribute) {
      el.toggleAttribute = function (name: string, force?: boolean) {
        const exists = this.hasAttribute ? this.hasAttribute(name) : false;
        const shouldHave = force !== undefined ? Boolean(force) : !exists;
        if (shouldHave) {
          this.setAttribute(name, '');
          return true;
        } else {
          this.removeAttribute(name);
          return false;
        }
      };
    }
    if (!(globalThis as any).document.querySelector) {
      (globalThis as any).document.querySelector = (sel: string) => {
        if (sel === 'meta[name="color-scheme"]') {
          return { setAttribute: () => {}, getAttribute: () => null };
        }
        return null;
      };
    }
  }

  // 6. Web Audio API
  (globalThis as any).AudioContext = MockAudioContext;
  (globalThis as any).webkitAudioContext = MockAudioContext;

  // 7. Navigator
  if (typeof (globalThis as any).navigator === 'undefined') {
    (globalThis as any).navigator = {
      onLine: true,
      userAgent: 'Kimya-YKS-E2E-Harness',
    };
  } else {
    try {
      (globalThis as any).navigator.onLine = true;
    } catch {
      Object.defineProperty(globalThis.navigator, 'onLine', {
        value: true,
        writable: true,
        configurable: true,
      });
    }
  }
}

export async function renderStoreHook<T>(useHook: () => T): Promise<{
  result: { current: T };
  act: (fn: () => void | Promise<void>) => Promise<void>;
  unmount: () => void;
}> {
  const result = { current: null as unknown as T };
  const container = {
    nodeType: 1,
    nodeName: 'DIV',
    tagName: 'DIV',
    ownerDocument: (globalThis as any).document,
    appendChild: () => {},
    removeChild: () => {},
    insertBefore: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
  };
  function HookComponent() {
    result.current = useHook();
    return null;
  }
  const root = ReactDOMClient.createRoot(container as any);
  await act(async () => {
    root.render(React.createElement(HookComponent));
  });
  return {
    result,
    act: async (fn: () => void | Promise<void>) => {
      await act(fn);
    },
    unmount: () => {
      void act(() => {
        root.unmount();
      });
    },
  };
}
