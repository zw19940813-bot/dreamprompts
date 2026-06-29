'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Logo } from './logo'

const links = [
  ['Home', '/'], ['AI Prompts', '/ai-prompts'], ['AI Video', '/ai-video'], ['Prompt Library', '/library'], ['About', '/about']
]

export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="sticky top-0 z-50 border-b border-black/[.06] bg-white/90 backdrop-blur-xl">
    <div className="container-shell flex h-[72px] items-center justify-between">
      <Logo />
      <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
        {links.map(([label, href]) => <Link key={label} href={href} className="focus-ring rounded text-sm font-medium text-muted transition hover:text-blue">{label}</Link>)}
      </nav>
      <Link href="/library" className="focus-ring hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue md:block">Explore prompts</Link>
      <button className="focus-ring rounded-md p-2 md:hidden" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="container-shell flex flex-col border-t border-black/[.06] py-4 md:hidden" aria-label="Mobile navigation">
      {links.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)} className="py-3 text-base font-medium">{label}</Link>)}
    </nav>}
  </header>
}
