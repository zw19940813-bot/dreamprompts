import Image from 'next/image'
import Link from 'next/link'
import type { Post } from '@/lib/types'

export function PostCard({ post, featured = false }: { post: Post; featured?: boolean }) {
  return <article className={`group ${featured ? 'md:grid md:grid-cols-[1.2fr_1fr] md:gap-8' : ''}`}>
    <Link href={`/posts/${post.slug}`} className="focus-ring relative block aspect-[16/10] overflow-hidden rounded-2xl bg-soft">
      {post.mainImage && <Image src={post.mainImage} alt={post.mainImageAlt || post.title} fill sizes={featured ? '(max-width: 768px) 100vw, 55vw' : '(max-width: 768px) 100vw, 40vw'} className="object-cover transition duration-700 group-hover:scale-[1.03]" />}
    </Link>
    <div className={featured ? 'flex flex-col justify-center pt-5 md:pt-0' : 'pt-5'}>
      <div className="mb-3 flex items-center gap-3"><span className="eyebrow text-blue">{post.categories?.[0]?.title || 'Ideas'}</span><span className="text-xs text-muted">{post.readingTime} min read</span></div>
      <h2 className={`serif text-balance font-bold leading-[1.08] tracking-[-.035em] transition group-hover:text-blue ${featured ? 'text-3xl lg:text-[2.6rem]' : 'text-2xl'}`}><Link href={`/posts/${post.slug}`}>{post.title}</Link></h2>
      <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">{post.excerpt}</p>
      <div className="mt-5 text-sm font-semibold">Read story <span aria-hidden="true">→</span></div>
    </div>
  </article>
}
