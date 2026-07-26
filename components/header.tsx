import Link from 'next/link'
import { Logo } from '@/components/logo'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[#FFFBEA]/95 shadow-sm backdrop-blur">
      <div className="container-shell flex h-16 items-center justify-between">
        <Logo />

        <nav className="flex items-center gap-2 text-sm font-semibold text-[#1F2A24]">
          <Link
            href="/"
            className="rounded-xl px-4 py-2 transition hover:bg-[#F1E6BF] hover:text-[#0A2A20]"
          >
            Home
          </Link>
          <Link
            href="/posts"
            className="rounded-xl px-4 py-2 transition hover:bg-[#F1E6BF] hover:text-[#0A2A20]"
          >
            Directory
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
