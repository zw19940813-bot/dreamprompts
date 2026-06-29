import type { Metadata } from 'next'
import { PostCard } from '@/components/post-card'
import { getPosts } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'AI Prompts',
  description: 'Practical prompting guides and creative workflows for ChatGPT, Claude, Midjourney, and other AI tools.',
  alternates: { canonical: '/ai-prompts' }
}

export default async function AiPromptsPage() {
  const posts = (await getPosts()).filter((post) => !post.categories?.some((category) => category.slug === 'ai-video'))
  return <div className="container-shell py-16 md:py-24">
    <div className="max-w-3xl">
      <div className="eyebrow text-blue">Think clearly, ask better</div>
      <h1 className="serif mt-4 text-balance text-5xl font-bold tracking-[-.05em] md:text-7xl">AI prompts with a point of view.</h1>
      <p className="mt-5 text-lg leading-8 text-muted">Frameworks, examples, and field notes for getting thoughtful work from language and image models.</p>
    </div>
    <div className="mt-14 grid gap-x-8 gap-y-14 md:grid-cols-2">{posts.map((post) => <PostCard key={post._id} post={post} />)}</div>
  </div>
}
