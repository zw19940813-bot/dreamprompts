import Link from 'next/link'
import { Logo } from './logo'

export function Footer() {
  return <footer className="border-t border-black/[.08] bg-soft">
    <div className="container-shell grid gap-10 py-14 md:grid-cols-[1fr_auto] md:items-end">
      <div><Logo /><p className="mt-4 max-w-md text-sm leading-6 text-muted">Sharp prompts, thoughtful workflows, and creative direction for people making things with AI.</p></div>
      <nav className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium" aria-label="Footer navigation">
        <Link href="/sitemap.xml">Sitemap</Link><Link href="/rss.xml">RSS</Link><Link href="/about#privacy">Privacy</Link><Link href="mailto:hello@dreamprompts.net">Contact</Link>
      </nav>
    </div>
    <div className="container-shell border-t border-black/[.08] py-6 text-xs text-muted">© {new Date().getFullYear()} DreamPrompts. Built for curious minds.</div>
  </footer>
}
