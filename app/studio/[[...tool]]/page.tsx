'use client'

import dynamic from 'next/dynamic'
import config from '@/sanity.config'

const NextStudio = dynamic(
  () => import('next-sanity/studio').then((mod) => mod.NextStudio),
  { ssr: false }
)

export default function StudioPage() {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return (
      <div style={{ padding: 40, fontFamily: 'sans-serif' }}>
        <h1>Connect Sanity first</h1>
        <p>Add NEXT_PUBLIC_SANITY_PROJECT_ID to your environment, then restart the app.</p>
      </div>
    )
  }

  return <NextStudio config={config} />
}
