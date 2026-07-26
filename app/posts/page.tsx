import type { Metadata } from 'next'
import Link from 'next/link'
import { LogoMark } from '@/components/logo'
import { PostCard } from '@/components/post-card'
import { getPosts } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Article Directory',
  description: 'Browse AI video prompt refinement articles, workflows, and practical guides.',
  alternates: { canonical: '/posts' },
}

export default async function PostsPage({
  searchParams,
}: {
  searchParams?: { page?: string }
}) {
  const posts = await getPosts()
  const page = Math.max(Number(searchParams?.page || 1), 1)
  const pageSize = 20
  const start = (page - 1) * pageSize
  const currentPosts = posts.slice(start, start + pageSize)
  const hasPreviousPage = page > 1
  const hasNextPage = posts.length > start + pageSize

  return (
    <section className="container-shell py-16 md:py-24">
      <div className="mb-10 border-b border-black/10 pb-5">
        <div className="flex items-center gap-4">
          <LogoMark className="h-12 w-12 rounded-2xl" />
          <div>
            <div className="eyebrow text-blue">Directory</div>
            <h1 className="serif mt-2 text-4xl font-bold tracking-tight md:text-5xl">
              Article Directory
            </h1>
          </div>
        </div>
      </div>

      <div className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
        {currentPosts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>

      {hasPreviousPage || hasNextPage ? (
        <div className="mt-14 flex justify-center gap-3">
          {hasPreviousPage ? (
            <Link
              href={page === 2 ? '/posts' : `/posts?page=${page - 1}`}
              className="rounded-full border border-black/10 px-7 py-3 text-sm font-bold text-ink transition hover:border-[#0A2A20]"
            >
              Previous Page
            </Link>
          ) : null}

          {hasNextPage ? (
            <Link
              href={`/posts?page=${page + 1}`}
              className="rounded-full bg-[#0A2A20] px-7 py-3 text-sm font-bold text-white transition hover:bg-[#123D30]"
            >
              Next Page
            </Link>
          ) : null}
        </div>
      ) : null}
    </section>
  )
}
