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
    coverImage?: string
    image?: string
    mainImage?: {
      asset?: {
        url?: string
      }
      alt?: string
    }
  }
  featured?: boolean
}

function getSlug(post: PostCardProps['post']) {
  if (typeof post.slug === 'string') return post.slug
  if (post.slug?.current) return post.slug.current
  return post._id || '#'
}

function getImage(post: PostCardProps['post']) {
  return post.coverImage || post.image || post.mainImage?.asset?.url || ''
}

function getDate(post: PostCardProps['post']) {
  const value = post.date || post.publishedAt || ''
  return value ? value.slice(0, 10) : ''
}

function PromptCover({
  label,
  image,
  featured,
}: {
  label: string
  image: string
  featured?: boolean
}) {
  const heightClass = featured ? 'min-h-[320px]' : 'min-h-[190px]'

  return (
    <div className={`relative overflow-hidden rounded-2xl bg-ink ${heightClass}`}>
      {image ? (
        <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-[#071813] via-[#10251e] to-[#050807]" />
          <div className="absolute inset-8 rounded-xl border border-white/15" />
          <span className="absolute left-[22%] top-[54%] h-12 w-12 rounded-full bg-[#6FAF96]" />
          <span className="absolute left-[20%] top-[49%] h-1 w-36 rotate-[-20deg] rounded-full bg-[#D8E7DE]" />
          <span className="absolute bottom-[28%] right-[18%] h-1 w-32 rotate-[-18deg] rounded-full bg-[#34D399]" />
        </>
      )}

      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

      <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase text-white backdrop-blur">
        {label}
      </span>
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
  const image = getImage(post)

  if (featured) {
    return (
      <article className="grid gap-8 md:grid-cols-[1.05fr_.85fr] md:items-center">
        <Link href={href} aria-label={`Read ${title}`}>
          <PromptCover label="Featured System" image={image} featured />
        </Link>

        <div>
          <div className="eyebrow text-blue">{category}</div>
          <h3 className="serif mt-4 text-balance text-4xl font-bold leading-none md:text-5xl">
            <Link href={href}>{title}</Link>
          </h3>

          {excerpt ? (
            <p className="mt-5 text-lg leading-8 text-muted">{excerpt}</p>
          ) : null}

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
        <PromptCover label={category} image={image} />
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

      {excerpt ? (
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">{excerpt}</p>
      ) : null}

      <div className="mt-5 flex items-center justify-between border-b border-black/10 pb-5 text-sm font-bold">
        <span className="text-muted">{date}</span>
        <Link href={href}>Read</Link>
      </div>
    </article>
  )
}
