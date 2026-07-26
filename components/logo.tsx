import Link from 'next/link'

export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#0A2A20] text-white shadow-sm ${className}`}
      aria-hidden="true"
    >
      <span className="text-sm font-black tracking-tight">AI</span>
    </span>
  )
}

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="dreamprompts home">
      <LogoMark />
      <span className="text-lg font-bold text-[#0A2A20]">dreamprompts</span>
    </Link>
  )
}

export default Logo
