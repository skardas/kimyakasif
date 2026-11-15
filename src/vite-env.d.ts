/// <reference types="vite/client" />
/// <reference types="node" />

/** URL of a unit-data pack file emitted by the `unitLanguagePacks` plugin in vite.config.ts (see packing.ts). */
declare module 'virtual:unit-pack/*' {
  const url: string;
  export default url;
}
