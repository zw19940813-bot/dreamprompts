import Link from 'next/link'

type PostCardProps = {
  post: {
    _id?: string
    title?: string
    slug?: string | { current?: string }
    excerpt?: string
    description?: string
    category?: string
    categories?: { title?: string }[]
    readTime?: string
    readingTime?: number
    date?: string
    publishedAt?: string
    mainImage?: string
    coverImage?: string
    image?: string
  }
  featured?: boolean
}

export function PostCard({ post, featured = false }: PostCardProps) {
  const title = post.title || 'Untitled'
  const slug = typeof post.slug === 'string' ? post.slug : post.slug?.current || post._id || '#'
  const href = slug === '#' ? '#' : `/posts/${slug}`
  const category = post.category || post.categories?.[0]?.title || 'AI Prompt'
  const excerpt = post.excerpt || post.description || ''
  const date = (post.date || post.publishedAt || '').slice(0, 10)
  const readTime = post.readTime || (post.readingTime ? `${post.readingTime} min read` : '')
  const image = post.mainImage || post.coverImage || post.image || ''

  const cover = (
    <div className={featured ? 'relative h-80 overflow-hidden rounded-2xl bg-ink' : 'relative h-48 overflow-hidden rounded-2xl bg-ink'}>
      {image ? (
        <img src={image} alt="" className="h-full w-full object-cover" />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[#08261d]">
          <div className="h-16 w-16 rounded-2xl border border-white/20 bg-white/10" />
        </div>
      )}
      <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase text-white backdrop-blur">
        {category}
      </span>
    </div>
  )

  if (featured) {
    return (
      <article className="grid gap-8 md:grid-cols-2 md:items-center">
        <Link href={href} aria-label={`Read ${title}`}>
          {cover}
        </Link>

        <div>
          <div className="eyebrow text-blue">{category}</div>
          <h3 className="serif mt-4 text-balance text-4xl font-bold leading-none md:text-5xl">
            <Link href={href}>{title}</Link>
          </h3>
          {excerpt ? <p className="mt-5 text-lg leading-8 text-muted">{excerpt}</p> : null}
          <Link href={href} className="mt-6 inline-block text-sm font-bold">
            Read story
          </Link>
        </div>
      </article>
    )
  }

  return (
    <article className="group flex h-full flex-col">
      <Link href={href} aria-label={`Read ${title}`}>
        {cover}
      </Link>

      <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs font-bold text-muted">
        <span>{category}</span>
        {readTime ? <span>{readTime}</span> : null}
      </div>

      <h3 className="serif mt-3 text-xl font-bold leading-tight">
        <Link href={href} className="transition group-hover:text-blue">
          {title}
        </Link>
      </h3>

      {excerpt ? <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">{excerpt}</p> : null}

      <div className="mt-auto flex items-center justify-between border-b border-black/10 pb-5 pt-5 text-sm font-bold">
        <span className="text-muted">{date}</span>
        <Link href={href}>Read</Link>
      </div>
    </article>
  )
}
