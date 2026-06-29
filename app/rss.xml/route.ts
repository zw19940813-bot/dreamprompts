import { getPosts } from '@/lib/sanity'

function escapeXml(value: string) { return value.replace(/[<>&'\"]/g, (char) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' }[char] || char)) }

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://dreamprompts.net'
  const posts = await getPosts()
  const items = posts.map((post) => `<item><title>${escapeXml(post.title)}</title><link>${base}/posts/${post.slug}</link><guid isPermaLink="true">${base}/posts/${post.slug}</guid><description>${escapeXml(post.excerpt)}</description><pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate></item>`).join('')
  const xml = `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>DreamPrompts</title><link>${base}</link><description>Better prompts. Brighter ideas.</description><language>en-us</language>${items}</channel></rss>`
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8', 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } })
}
