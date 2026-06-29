export type Category = { title: string; slug: string; description?: string }

export type Prompt = {
  _id: string
  title: string
  promptText: string
  tags: string[]
}

export type Post = {
  _id: string
  title: string
  slug: string
  author: string
  publishedAt: string
  excerpt: string
  categories: Category[]
  mainImage?: string
  mainImageAlt?: string
  readingTime: number
  body?: any[]
  isVideoObject?: boolean
  videoUrl?: string
  videoThumbnailUrl?: string
}
