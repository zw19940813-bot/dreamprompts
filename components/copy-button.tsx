'use client'

import { Check, Copy } from 'lucide-react'
import { useState } from 'react'

export function CopyButton({ text, compact = false }: { text: string; compact?: boolean }) {
  const [copied, setCopied] = useState(false)
  async function copy() { await navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1800) }
  return <button onClick={copy} className={`focus-ring inline-flex items-center justify-center gap-2 rounded-full font-semibold transition ${compact ? 'h-9 px-4 text-xs' : 'px-5 py-2.5 text-sm'} ${copied ? 'bg-emerald-600 text-white' : 'bg-ink text-white hover:bg-blue'}`} aria-label="Copy prompt to clipboard">
    {copied ? <Check size={15} /> : <Copy size={15} />}{copied ? 'Copied' : 'Copy prompt'}
  </button>
}
