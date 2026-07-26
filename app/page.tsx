import Link from 'next/link'
import { LogoMark } from '@/components/logo'
import { PostCard } from '@/components/post-card'
import { getPosts } from '@/lib/sanity'

export default async function HomePage() {
  const posts = await getPosts()
  const [featured, ...rest] = posts
  const displayPosts = rest.slice(0, 9)

  return (
    <section id="latest" className="container-shell scroll-mt-24 py-20 md:py-28">
      <div className="mb-10 flex items-end justify-between border-b border-black/10 pb-5">
        <div className="flex items-center gap-4">
          <LogoMark />
          <div>
            <div className="eyebrow text-blue">The journal</div>
            <h2 className="serif mt-2 text-3xl font-bold tracking-tight md:text-4xl">
              dreamprompts
            </h2>
          </div>
        </div>

        <Link href="/posts" className="text-sm font-bold text-ink transition hover:text-blue">
          View more
        </Link>
      </div>

      {featured ? <PostCard post={featured} featured /> : null}

      <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {displayPosts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>

      <div className="mt-14 flex justify-center">
        <Link
          href="/posts"
          className="rounded-full bg-[#0A2A20] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#123D30]"
        >
          View More Articles
        </Link>
      </div>
    </section>
  )
}
