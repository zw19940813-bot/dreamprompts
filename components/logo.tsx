import Link from 'next/link'

export function Logo() {
  return <Link href="/" className="focus-ring inline-flex items-center gap-2 rounded-md" aria-label="DreamPrompts home">
    <span className="grid h-8 w-8 place-items-center rounded-full bg-blue text-lg text-white" aria-hidden="true">✦</span>
    <span className="serif text-xl font-bold tracking-tight">DreamPrompts</span>
  </Link>
}
