'use client'

import { Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import type { Prompt } from '@/lib/types'
import { PromptCard } from './prompt-card'

const filters = ['All', 'ChatGPT', 'Midjourney', 'Sora', 'Claude']

export function LibraryExplorer({ prompts }: { prompts: Prompt[] }) {
  const [query, setQuery] = useState('')
  const [tag, setTag] = useState('All')
  const results = useMemo(() => prompts.filter((prompt) => {
    const matchesTag = tag === 'All' || prompt.tags?.includes(tag)
    const haystack = `${prompt.title} ${prompt.promptText} ${prompt.tags?.join(' ')}`.toLowerCase()
    return matchesTag && haystack.includes(query.toLowerCase())
  }), [prompts, query, tag])

  return <div>
    <div className="relative"><Search className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-muted" size={20} /><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search by task, tool, or idea…" className="focus-ring h-14 w-full rounded-xl border border-black/10 bg-white pl-14 pr-5 text-base shadow-sm placeholder:text-muted" aria-label="Search prompt library" /></div>
    <div className="mt-5 flex flex-wrap gap-2" aria-label="Filter prompts by tool">{filters.map((item) => <button key={item} onClick={() => setTag(item)} className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold transition ${tag === item ? 'bg-blue text-white' : 'bg-soft text-muted hover:text-ink'}`} aria-pressed={tag === item}>{item}</button>)}</div>
    <p className="mt-8 text-sm text-muted">{results.length} {results.length === 1 ? 'prompt' : 'prompts'}</p>
    <div className="mt-4 grid gap-5 md:grid-cols-2">{results.map((prompt) => <PromptCard key={prompt._id} {...prompt} />)}</div>
    {!results.length && <div className="my-20 text-center"><p className="serif text-2xl font-bold">No prompts found.</p><p className="mt-2 text-sm text-muted">Try a broader search or another tool.</p></div>}
  </div>
}
