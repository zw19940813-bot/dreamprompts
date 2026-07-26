import Link from 'next/link'
import { LogoMark } from '@/components/logo'

export function Header() {
  return (
    <header className="border-b border-black/10 bg-white">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="dreamprompts home">
          <LogoMark className="h-11 w-11 rounded-2xl" />
          <div className="leading-tight">
            <div className="text-base font-bold text-ink">dreamprompts</div>
            <div className="text-xs text-muted">AI Video Prompt Lab</div>
          </div>
        </Link>

        <nav className="flex items-center gap-8 text-sm font-semibold text-muted">
          <Link href="/" className="transition hover:text-ink">
            Home
          </Link>
          <Link href="/posts" className="transition hover:text-ink">
            Directory
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
