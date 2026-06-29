'use client'

import { useEffect, useRef } from 'react'

export function GiscusComments() {
  const ref = useRef<HTMLDivElement>(null)
  const repo = process.env.NEXT_PUBLIC_GISCUS_REPO
  const repoId = process.env.NEXT_PUBLIC_GISCUS_REPO_ID
  const categoryId = process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID
  useEffect(() => {
    if (!ref.current || !repo || !repoId || !categoryId || ref.current.hasChildNodes()) return
    const script = document.createElement('script')
    Object.entries({ src: 'https://giscus.app/client.js', 'data-repo': repo, 'data-repo-id': repoId, 'data-category': 'Announcements', 'data-category-id': categoryId, 'data-mapping': 'pathname', 'data-strict': '0', 'data-reactions-enabled': '1', 'data-emit-metadata': '0', 'data-input-position': 'top', 'data-theme': 'light', 'data-lang': 'en', crossorigin: 'anonymous', async: 'true' }).forEach(([key, value]) => script.setAttribute(key, value))
    ref.current.appendChild(script)
  }, [repo, repoId, categoryId])
  if (!repo || !repoId || !categoryId) return null
  return <section className="mt-16 border-t border-black/10 pt-12"><h2 className="serif mb-8 text-3xl font-bold">Join the conversation</h2><div ref={ref} /></section>
}
