import React, { useEffect } from 'react'

// Use the installed package's built module on the client. We import the
// packaged `dist` ESM file so webpack/next doesn't try to resolve internal
// `three/src/...` paths from the package source.
const ARViewer: React.FC<{ src?: string; poster?: string }> = ({
  src = '/models/sample.glb',
  poster,
}) => {
  useEffect(() => {
    // dynamic import only on client
    import('@google/model-viewer/dist/model-viewer.min.js')
      .catch((err) => console.warn('Could not load @google/model-viewer from installed package:', err))
  }, [])

  // Use a capitalized identifier so TypeScript treats this as a component
  // (avoids needing an intrinsic element declaration at the usage site).
  const ModelViewer: any = 'model-viewer'

  return (
    <div style={{ maxWidth: 800, margin: '0 auto' }}>
      <ModelViewer
        src={src}
        alt="3D model"
        poster={poster}
        ar
        ar-modes="webxr scene-viewer quick-look"
        environment-image="neutral"
        shadow-intensity="1"
        camera-controls
        style={{ width: '100%', height: '600px' }}
      >
        <div>
          3D model viewer requires a modern browser. If you see this message, your
          browser may not support Web Components or WebXR.
        </div>
      </ModelViewer>

      <div style={{ marginTop: 12 }}>
        <strong>Tips:</strong>
        <ul>
          <li>Use an HTTPS origin (or localhost) to test AR on mobile devices.</li>
          <li>On iOS Quick Look requires a USDZ file (not included).</li>
          <li>Place GLB files in <code>/public/models/</code> and update the src prop.</li>
        </ul>
      </div>
    </div>
  )
}

export default ARViewer
