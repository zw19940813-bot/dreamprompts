import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'DreamPrompts — Better prompts. Brighter ideas.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#ffffff', color: '#0a0a0a', padding: '72px 82px', fontFamily: 'Georgia, serif' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18, fontSize: 34, fontWeight: 700 }}>
        <div style={{ width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 999, background: '#2563ff', color: 'white' }}>✦</div>
        DreamPrompts
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', fontSize: 92, lineHeight: .96, letterSpacing: '-5px', fontWeight: 700 }}>
        <span>Better prompts.</span>
        <span style={{ color: '#2563ff', fontStyle: 'italic', fontWeight: 400 }}>Brighter ideas.</span>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: 'Arial, sans-serif', fontSize: 22, color: '#6b6b70' }}>
        <span>Practical AI prompts and creative workflows</span><span>dreamprompts.net</span>
      </div>
    </div>,
    size
  )
}
