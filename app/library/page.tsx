import type { Metadata } from 'next'
import Link from 'next/link'
import { LibraryExplorer } from '@/components/library-explorer'
import { getPrompts } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Prompt Library',
  description:
    'Copy-ready prompts for ChatGPT, Claude, Midjourney, Sora, and creative AI workflows.',
  alternates: { canonical: '/library' },
}

export default async function LibraryPage() {
  const prompts = (await getPrompts()).slice(0, 20)

  return (
    <>
      <section className="border-b border-black/[.06] bg-soft">
        <div className="container-shell py-16 text-center md:py-24">
          <div className="eyebrow text-blue">Prompt Library</div>
          <h1 className="serif mt-4 text-balance text-5xl font-bold tracking-[-.05em] md:text-7xl">
            dreamprompts
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-lg leading-8 text-muted">
            A refined collection of AI prompts for video generation, cinematic direction,
            image creation, and repeatable creative workflows.
          </p>
        </div>
      </section>

      <div className="container-shell py-12 md:py-16">
        <LibraryExplorer prompts={prompts} />

        <div className="mt-12 flex justify-center">
          <Link
            href="/library?page=2"
            className="rounded-full border border-black/10 px-6 py-3 text-sm font-bold transition hover:bg-black hover:text-white"
          >
            Next page
          </Link>
        </div>
      </div>
    </>
  )
}
