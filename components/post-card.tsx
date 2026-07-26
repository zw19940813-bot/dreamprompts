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

function getSlug(slug: PostCardProps['post']['slug'], fallback?: string) {
  if (typeof slug === 'string') return slug
  if (slug?.current) return slug.current
  return fallback || '#'
}

function getImage(post: PostCardProps['post']) {
  return post.coverImage || post.image || post.mainImage?.asset?.url || ''
}

function formatDate(value?: string) {
  if (!value) return ''
  return value.slice(0, 10)
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
  if (image) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl bg-ink ${
          featured ? 'min-h-[320px]' : 'min-h-[190px]'
        }`}
      >
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
        <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase text-white backdrop-blur">
          {label}
        </span>
      </div>
    )
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-ink ${
        featured ? 'min-h-[320px]' : 'min-h-[190px]'
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(111,175,150,.32),transparent_24%),linear-gradient(135deg,#071813_0%,#10251e_56%,#050807_100%)]" />
      <div className="absolute inset-8 rounded-xl border border-white/15 bg-[linear-gradient(90deg,transparent_49%,rgba(244,247,241,.09)_50%,transparent_51%),linear-gradient(0deg,transparent_49%,rgba(244,247,241,.09)_50%,transparent_51%)]" />
      <span className="absolute left-5 top-5 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase text-white backdrop-blur">
        {label}
      </span>
      <span className="absolute left-[22%] top-[54%] h-12 w-12 rounded-full bg-[#6FAF96]" />
      <span className="absolute left-[20%] top-[49%] h-1 w-36 rotate-[-20deg] rounded-full bg-[#D8E7DE]" />
      <span className="absolute bottom-[28%] right-[18%] h-1 w-32 rotate-[-18deg] rounded-full bg-[#34D399]" />
    </div>
  )
}

export function PostCard({ post, featured = false }: PostCardProps) {
  const title = post.title || 'Untitled'
  const slug = getSlug(post.slug, post._id)
  const href = slug === '#' ? '#' : `/posts/${slug}`
  const category = post.category || 'AI Prompt'
  const excerpt = post.excerpt || post.description || ''
  const date = formatDate(post.date || post.publishedAt)
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
          {excerpt && (
            <p className="mt-5 text-lg leading-8 text-muted">{excerpt}</p>
          )}
          <Link href={href} className="mt-6 inline-block text-sm font-bold">
            Read story →
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
        {post.readTime && <span>{post.readTime}</span>}
      </div>

      <h3 className="serif mt-3 text-xl font-bold leading-tight">
        <Link href={href} className="transition group-hover:text-blue">
          {title}
        </Link>
      </h3>

      {excerpt && (
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted">
          {excerpt}
        </p>
      )}

      <div className="mt-5 flex items-center justify-between border-b border-black/10 pb-5 text-sm
