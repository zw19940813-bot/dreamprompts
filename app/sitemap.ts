import type { MetadataRoute } from 'next'
import { getPosts } from '@/lib/sanity'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://dreamprompts.net'
  const posts = await getPosts()
  const staticPages = ['', '/ai-prompts', '/library', '/ai-video', '/about'].map((path) => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: path === '' ? 'daily' as const : 'weekly' as const, priority: path === '' ? 1 : .8 }))
  return [...staticPages, ...posts.map((post) => ({ url: `${base}/posts/${post.slug}`, lastModified: new Date(post.publishedAt), changeFrequency: 'monthly' as const, priority: .7 }))]
}
