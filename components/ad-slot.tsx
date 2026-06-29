'use client'

import { useEffect } from 'react'

declare global { interface Window { adsbygoogle?: Record<string, unknown>[] } }

type Props = { format: 'leaderboard' | 'rectangle'; label?: string; className?: string }

export function AdSlot({ format, label = 'Advertisement', className = '' }: Props) {
  const enabled = process.env.NEXT_PUBLIC_ADS_ENABLED === 'true'
  const client = process.env.NEXT_PUBLIC_ADSENSE_CLIENT
  const slot = format === 'leaderboard' ? process.env.NEXT_PUBLIC_ADSENSE_SLOT_LEADERBOARD : process.env.NEXT_PUBLIC_ADSENSE_SLOT_RECTANGLE
  useEffect(() => {
    if (!enabled || !client || !slot) return
    try { (window.adsbygoogle = window.adsbygoogle || []).push({}) } catch { /* Ad blockers can prevent initialization. */ }
  }, [client, enabled, slot])
  if (!enabled) return null
  if (client && slot) return <aside className={`mx-auto ${format === 'leaderboard' ? 'w-full max-w-[728px]' : 'w-full max-w-[300px]'} ${className}`} aria-label={label}>
    <ins className="adsbygoogle block" data-ad-client={client} data-ad-slot={slot} data-ad-format={format === 'leaderboard' ? 'horizontal' : 'rectangle'} data-full-width-responsive="true" />
  </aside>
  return <aside className={`mx-auto grid place-items-center border border-dashed border-black/15 bg-soft text-center text-[10px] uppercase tracking-[.16em] text-muted ${format === 'leaderboard' ? 'min-h-[90px] w-full max-w-[728px]' : 'min-h-[250px] w-full max-w-[300px]'} ${className}`} aria-label={label}>
    <span>{label}<br /><span className="normal-case tracking-normal">{format === 'leaderboard' ? '728 × 90' : '300 × 250'}</span></span>
  </aside>
}
