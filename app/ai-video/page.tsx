import type { Metadata } from 'next'
import { PostCard } from '@/components/post-card'
import { getPosts } from '@/lib/sanity'

export const metadata: Metadata = { title: 'AI Video', description: 'AI video prompting guides, cinematic techniques, and workflows for Sora and the new generation of video models.', alternates: { canonical: '/ai-video' } }

export default async function VideoPage() {
  const posts = (await getPosts()).filter((post) => post.categories?.some((category) => category.slug === 'ai-video'))
  return <div className="container-shell py-16 md:py-24"><div className="max-w-3xl"><div className="eyebrow text-blue">Motion studies</div><h1 className="serif mt-4 text-balance text-5xl font-bold tracking-[-.05em] md:text-7xl">AI Video, directed.</h1><p className="mt-5 text-lg leading-8 text-muted">Camera language, visual rhythm, and prompt craft for turning an imagined scene into moving pictures.</p></div><div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">{posts.map((post) => <PostCard key={post._id} post={post} />)}</div></div>
}
