import Link from 'next/link'

export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#06251c] text-white shadow-sm ${className}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 40 40" className="h-7 w-7" fill="none">
        <rect x="9" y="8" width="17" height="22" rx="4" stroke="#D9F5E8" strokeWidth="2" />
        <path d="M15 16h8M15 21h6M15 26h8" stroke="#D9F5E8" strokeWidth="2" strokeLinecap="round" />
        <circle cx="27" cy="25" r="5" fill="#3DD6A3" />
        <path d="M27 22v6M24 25h6" stroke="#06251c" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    </span>
  )
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <LogoMark />
      <span className="leading-tight">
        <span className="block text-sm font-bold text-ink">Prompt Refinement</span>
        <span className="block text-xs text-muted">AI Video Quality Lab</span>
      </span>
    </Link>
  )
}

export default Logo
