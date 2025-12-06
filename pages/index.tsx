import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useState } from 'react'

// Dynamic imports to disable SSR for client-only components
const ARViewer = dynamic(() => import('../components/ARViewer'), { ssr: false })

export default function Home() {
  const [mode, setMode] = useState<'modelviewer' | 'camera'>('modelviewer')

  return (
    <>
      <Head>
        <title>ar-web — model viewer AR demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main style={{ padding: 24 }}>
        <h1>AR Web demo</h1>
          <ul>
            <li><strong>Model Viewer</strong>: mobile-first AR using <code>@google/model-viewer</code>.</li>
            <li><strong>Camera Overlay</strong>: laptop/desktop webcam overlay using Three.js (no plane detection).</li>
          </ul>

        <div style={{ marginBottom: 12 }}>
          <button onClick={() => setMode('modelviewer')} style={{ marginRight: 8 }}>
            Model Viewer (mobile AR)
          </button>
          <button onClick={() => setMode('camera')}>Camera Overlay (webcam)</button>
        </div>

-          <ARViewer src="/models/sample.glb" />

        <section style={{ marginTop: 28 }}>
          <h2>How to add your model</h2>
          <ol>
            <li>Place a .glb file in <code>public/models/</code></li>
            <li>Update the <code>src</code> prop on the viewer component or leave it as <code>/models/sample.glb</code></li>
            <li>For Camera mode grant camera permission when the browser prompts.</li>
          </ol>
        </section>
      </main>
    </>
  )
}
