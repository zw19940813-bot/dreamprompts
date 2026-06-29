import type { Metadata } from 'next'
import { AdSlot } from '@/components/ad-slot'
import { LibraryExplorer } from '@/components/library-explorer'
import { getPrompts } from '@/lib/sanity'

export const metadata: Metadata = { title: 'Prompt Library', description: 'Copy-ready prompts for ChatGPT, Claude, Midjourney, Sora, and creative AI workflows.', alternates: { canonical: '/library' } }

export default async function LibraryPage() {
  const prompts = await getPrompts()
  return <>
    <section className="border-b border-black/[.06] bg-soft"><div className="container-shell py-16 text-center md:py-24"><div className="eyebrow text-blue">Steal these thoughtfully</div><h1 className="serif mt-4 text-balance text-5xl font-bold tracking-[-.05em] md:text-7xl">The Prompt Library</h1><p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-8 text-muted">A living collection of useful starting points. Copy one, make it yours, and keep the parts that work.</p></div></section>
    <div className="container-shell py-12 md:py-16"><AdSlot format="leaderboard" className="mb-12" /><LibraryExplorer prompts={prompts} /></div>
  </>
}
