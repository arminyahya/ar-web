declare module '@google/model-viewer';
declare module '@google/model-viewer/dist/model-viewer.min.js';
declare module '@google/model-viewer/dist/model-viewer.js';

interface ModelViewerElement extends HTMLElement {
  showPoster: boolean
}

declare namespace JSX {
  interface IntrinsicElements {
    // minimal typing for the model-viewer web component used in the app
    'model-viewer': any
  }
}
