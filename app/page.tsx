import Link from 'next/link'
import { AdSlot } from '@/components/ad-slot'
import { PostCard } from '@/components/post-card'
import { getPosts } from '@/lib/sanity'

export default async function HomePage() {
  const posts = await getPosts()
  const [featured, ...rest] = posts

  return (
    <>
      <section
        id="latest"
        className="container-shell scroll-mt-24 py-20 md:py-28"
      >
        <div className="mb-10 flex items-end justify-between border-b border-black/10 pb-5">
          <div>
            <div className="eyebrow text-blue">The journal</div>
            <h2 className="serif mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              Latest thinking
            </h2>
          </div>
          <span className="hidden text-sm text-muted md:block">
            Ideas worth trying, not just saving.
          </span>
        </div>

        {featured && <PostCard post={featured} featured />}

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_300px]">
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-2">
            {rest.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>

          <aside className="space-y-8">
            <AdSlot format="rectangle" />

            <div className="rounded-2xl bg-ink p-7 text-white">
              <div className="eyebrow text-blue">Start here</div>
              <h3 className="serif mt-3 text-2xl font-bold">
                The art of a useful prompt
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/60">
                Our short guide to context, constraints, examples, and iteration.
              </p>
              <Link
                href="/posts/briefing-prompts-for-complex-work"
                className="mt-5 inline-block text-sm font-semibold"
              >
                Read the guide →
              </Link>
            </div>

            <div className="border-t border-black/10 pt-6">
              <div className="eyebrow mb-4 text-muted">Editor’s note</div>
              <p className="serif text-lg leading-7">
                “The best prompt isn’t the cleverest sentence. It’s the clearest
                shared understanding.”
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="container-shell pb-20">
        <AdSlot format="leaderboard" />
      </section>
    </>
  )
}
