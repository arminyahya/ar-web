# ar-web

Minimal Next.js + TypeScript scaffold for displaying 3D models and trying AR on the web using @google/model-viewer.

## What's included

- Next.js (latest)
- TypeScript
- A client-side `ARViewer` component using `@google/model-viewer`
- Example page at `/` that loads `/public/models/sample.glb`

## Install

Open PowerShell at the project root (d:\ar-web) and run:

```powershell
npm install
```

## Run locally

```powershell
npm run dev
```

Open https://localhost:3000 or http://localhost:3000 in a browser.

## AR testing notes

- AR / WebXR requires HTTPS or localhost. `model-viewer` will show AR UI on supported devices.
- For Android Chrome, WebXR-based AR is supported on compatible phones (Chrome + WebXR). For Scene Viewer, Android will open the native Scene Viewer when available.
- For iOS, Quick Look requires a USDZ file (not provided) and Safari.

## Adding models

Put `.glb` files in `public/models/` and update the `src` prop in `pages/index.tsx` or pass a different `src` to the `ARViewer` component.

## Next steps / improvements

- Add sample GLB or point to hosted models.
- Add local HTTPS (mkcert or dev certificates) to test WebXR on devices.
- For plane detection and more advanced AR, integrate Three.js + WebXR instead of `model-viewer`.
