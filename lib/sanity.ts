import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
import type { Post, Prompt } from './types'
import { demoPosts, demoPrompts } from './fallback-data'

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder'
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
export const apiVersion = '2024-06-01'
export const isSanityConfigured = projectId !== 'placeholder'

export const client = createClient({ projectId, dataset, apiVersion, useCdn: true })

const builder = imageUrlBuilder(client)
export function urlFor(source: any) { return builder.image(source) }

const postFields = `_id,title,"slug":slug.current,"author":coalesce(author,"DreamPrompts Editorial"),publishedAt,excerpt,
  "categories":categories[]->{title,"slug":slug.current,description},
  "mainImage":mainImage.asset->url,"mainImageAlt":coalesce(mainImage.alt,title),body,isVideoObject,videoUrl,videoThumbnailUrl,
  "readingTime":round(length(pt::text(body))/5/180 + 1)`

export async function getPosts(): Promise<Post[]> {
  if (!isSanityConfigured) return demoPosts
  try { return await client.fetch(`*[_type == "post" && defined(slug.current) && publishedAt <= now()] | order(publishedAt desc){${postFields}}`, {}, { next: { revalidate: 60 } }) }
  catch { return demoPosts }
}

export async function getPost(slug: string): Promise<Post | null> {
  if (!isSanityConfigured) return demoPosts.find((post) => post.slug === slug) || null
  try { return await client.fetch(`*[_type == "post" && slug.current == $slug && publishedAt <= now()][0]{${postFields}}`, { slug }, { next: { revalidate: 60 } }) }
  catch { return demoPosts.find((post) => post.slug === slug) || null }
}

export async function getPrompts(): Promise<Prompt[]> {
  if (!isSanityConfigured) return demoPrompts
  try { return await client.fetch(`*[_type == "promptCard"] | order(_createdAt desc){_id,title,promptText,tags}`, {}, { next: { revalidate: 60 } }) }
  catch { return demoPrompts }
}
