'use client'

import { Check, Link as LinkIcon } from 'lucide-react'
import { useState } from 'react'

export function ShareButtons({ title, url }: { title: string; url: string }) {
  const [copied, setCopied] = useState(false)
  return <div className="flex items-center gap-3">
    <span className="text-xs font-semibold uppercase tracking-widest text-muted">Share</span>
    <a className="focus-ring grid h-9 w-9 place-items-center rounded-full border border-black/10 text-sm font-bold transition hover:border-blue hover:text-blue" href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`} target="_blank" rel="noreferrer" aria-label="Share on X">𝕏</a>
    <button className="focus-ring grid h-9 w-9 place-items-center rounded-full border border-black/10 transition hover:border-blue hover:text-blue" onClick={async () => { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 1500) }} aria-label="Copy article link">{copied ? <Check size={15} /> : <LinkIcon size={15} />}</button>
  </div>
}
