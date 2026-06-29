import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { AdSlot } from '@/components/ad-slot'
import { ArticleBody } from '@/components/article-body'
import { GiscusComments } from '@/components/giscus-comments'
import { PostCard } from '@/components/post-card'
import { ShareButtons } from '@/components/share-buttons'
import { getPost, getPosts } from '@/lib/sanity'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://dreamprompts.net'

export async function generateStaticParams() { return (await getPosts()).map((post) => ({ slug: post.slug })) }

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPost(params.slug)
  if (!post) return {}
  const description = post.excerpt || `Read ${post.title} on DreamPrompts.`
  const url = `/posts/${post.slug}`
  return {
    title: post.title,
    description,
    alternates: { canonical: url },
    openGraph: { type: 'article', title: post.title, description, url, publishedTime: post.publishedAt, authors: [post.author], images: post.mainImage ? [{ url: post.mainImage, alt: post.mainImageAlt || post.title }] : [] },
    twitter: { card: 'summary_large_image', title: post.title, description, images: post.mainImage ? [post.mainImage] : [] }
  }
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug)
  if (!post) notFound()
  const allPosts = await getPosts()
  const category = post.categories?.[0]
  const related = allPosts.filter((item) => item.slug !== post.slug && item.categories?.some((itemCategory) => itemCategory.slug === category?.slug)).slice(0, 2)
  const postUrl = `${siteUrl}/posts/${post.slug}`
  const articleLd = { '@context': 'https://schema.org', '@type': 'TechArticle', headline: post.title, description: post.excerpt, image: post.mainImage ? [post.mainImage] : undefined, datePublished: post.publishedAt, dateModified: post.publishedAt, author: { '@type': 'Person', name: post.author }, publisher: { '@type': 'Organization', name: 'DreamPrompts', url: siteUrl }, mainEntityOfPage: postUrl }
  const breadcrumbLd = { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl }, { '@type': 'ListItem', position: 2, name: category?.title || 'Articles', item: category?.slug === 'ai-video' ? `${siteUrl}/ai-video` : `${siteUrl}/ai-prompts` }, { '@type': 'ListItem', position: 3, name: post.title, item: postUrl }] }
  const videoLd = post.isVideoObject && post.videoUrl ? { '@context': 'https://schema.org', '@type': 'VideoObject', name: post.title, description: post.excerpt, thumbnailUrl: [post.videoThumbnailUrl || post.mainImage].filter(Boolean), uploadDate: post.publishedAt, contentUrl: post.videoUrl, embedUrl: post.videoUrl } : null

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd).replace(/</g, '\\u003c') }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd).replace(/</g, '\\u003c') }} />
    {videoLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoLd).replace(/</g, '\\u003c') }} />}
    <article>
      <header className="container-shell py-10 md:py-16">
        <nav className="mb-10 flex flex-wrap items-center gap-2 text-xs text-muted" aria-label="Breadcrumb"><Link href="/" className="hover:text-blue">Home</Link><span>/</span><Link href={category?.slug === 'ai-video' ? '/ai-video' : '/ai-prompts'} className="hover:text-blue">{category?.title || 'Ideas'}</Link><span>/</span><span className="max-w-[250px] truncate text-ink">{post.title}</span></nav>
        <div className="mx-auto max-w-4xl text-center"><div className="eyebrow text-blue">{category?.title || 'Ideas'}</div><h1 className="serif mt-5 text-balance text-[clamp(2.7rem,7vw,5.8rem)] font-bold leading-[.96] tracking-[-.055em]">{post.title}</h1><p className="mx-auto mt-7 max-w-2xl text-balance text-lg leading-8 text-muted">{post.excerpt}</p><div className="mt-7 flex flex-wrap items-center justify-center gap-3 text-xs text-muted"><span className="font-semibold text-ink">By {post.author}</span><span>•</span><time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</time><span>•</span><span>{post.readingTime} min read</span></div></div>
      </header>
      {post.mainImage && <div className="container-shell"><div className="relative aspect-[16/8.7] overflow-hidden rounded-2xl bg-soft"><Image src={post.mainImage} alt={post.mainImageAlt || post.title} fill priority sizes="(max-width: 1200px) 100vw, 1180px" className="object-cover" /></div></div>}
      <div className="container-shell grid gap-14 py-14 lg:grid-cols-[minmax(0,740px)_300px] lg:justify-center lg:py-20">
        <div><ArticleBody body={post.body} /><div className="mt-12 border-t border-black/10 pt-6"><ShareButtons title={post.title} url={postUrl} /></div><GiscusComments /></div>
        <aside className="space-y-8 lg:sticky lg:top-28 lg:self-start"><AdSlot format="rectangle" /><div className="rounded-2xl border border-black/10 p-6"><div className="eyebrow text-blue">Keep exploring</div><p className="serif mt-3 text-xl font-bold">Prompts that are ready when you are.</p><Link href="/library" className="mt-4 inline-block text-sm font-semibold">Open the library →</Link></div></aside>
      </div>
    </article>
    {!!related.length && <section className="border-t border-black/10 bg-soft"><div className="container-shell py-16 md:py-20"><div className="eyebrow text-blue">Read next</div><h2 className="serif mt-2 text-3xl font-bold">Related ideas</h2><div className="mt-9 grid gap-10 md:grid-cols-2">{related.map((item) => <PostCard key={item._id} post={item} />)}</div></div></section>}
  </>
}
