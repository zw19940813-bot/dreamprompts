import Link from 'next/link'

type PostCardProps = {
  post: {
    _id?: string
    title?: string
    slug?: string | { current?: string }
    excerpt?: string
    description?: string
    category?: string
    readTime?: string
    date?: string
    publishedAt?: string
  }
  featured?: boolean
}

function getSlug(post: PostCardProps['post']) {
  if (typeof post.slug === 'string') return post.slug
  if (post.slug?.current) return post.slug.current
  return post._id || '#'
}

function getDate(post: PostCardProps['post']) {
  const value = post.date || post.publishedAt || ''
  return value ? value.slice(0, 10) : ''
}

function Cover({ label, featured = false }: { label: string; featured?: boolean }) {
  return (
    <div className={featured ? 'post-cover post-cover-featured' : 'post-cover'}>
      <span className="post-cover-label">{label}</span>
      <span className="post-cover-dot" />
      <span className="post-cover-line-one" />
      <span className="post-cover-line-two" />
    </div>
  )
}

export function PostCard({ post, featured = false }: PostCardProps) {
  const title = post.title || 'Untitled'
  const slug = getSlug(post)
  const href = slug === '#' ? '#' : `/posts/${slug}`
  const category = post.category || 'AI Prompt'
  const excerpt = post.excerpt || post.description || ''
  const date = getDate(post)

  if (featured) {
    return (
      <article className="grid gap-8 md:grid-cols-[1.05fr_.85fr] md:items-center">
        <Link href={href} aria-label={`Read ${title}`}>
          <Cover label="Featured System" featured />
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
    <article className="group">
      <Link href={href} aria-label={`Read ${title}`}>
        <Cover label={category} />
      </Link>

      <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1 text-xs font-bold text-muted">
        <span>{category}</span>
        {post.readTime ? <span>{post.readTime}</span> : null}
      </div>

      <h3 className="serif mt-3 text-xl font-bold leading-tight">
        <Link href={href} className="transition group-hover:text-blue">
          {title}
        </Link>
      </h3>

      {excerpt ? <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">{excerpt}</p> : null}

      <div className="mt-5 flex items-center justify-between border-b border-black/10 pb-5 text-sm font-bold">
        <span className="text-muted">{date}</span>
        <Link href={href}>Read</Link>
      </div>
    </article>
  )
}
