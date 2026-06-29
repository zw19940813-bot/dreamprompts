import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = { title: 'About', description: 'Why DreamPrompts exists: to make AI tools more useful, expressive, and human.', alternates: { canonical: '/about' } }

export default function AboutPage() {
  return <div className="container-shell py-16 md:py-24">
    <section className="grid gap-12 border-b border-black/10 pb-20 md:grid-cols-[.7fr_1.3fr]"><div className="eyebrow pt-2 text-blue">About DreamPrompts</div><div><h1 className="serif text-balance text-5xl font-bold leading-[.98] tracking-[-.05em] md:text-7xl">AI should expand your taste—not flatten it.</h1><p className="mt-8 max-w-2xl text-xl leading-9 text-muted">DreamPrompts is an independent publication and practical library for people learning to think, write, design, and direct alongside AI.</p></div></section>
    <section className="grid gap-12 py-20 md:grid-cols-[.7fr_1.3fr]"><h2 className="serif text-3xl font-bold">Our mission</h2><div className="space-y-6 text-lg leading-8 text-[#3f3f44]"><p>We publish prompts that teach a way of thinking. Every guide aims to explain why a technique works, where it breaks, and how to adapt it to your own voice.</p><p>We believe useful AI education should be clear, candid, and free of magical thinking. The tool matters. Your judgment matters more.</p><Link href="mailto:hello@dreamprompts.net" className="inline-block font-semibold text-blue">hello@dreamprompts.net →</Link></div></section>
    <section id="privacy" className="scroll-mt-24 rounded-3xl bg-soft p-7 md:p-12"><div className="eyebrow text-blue">Privacy policy</div><h2 className="serif mt-3 text-3xl font-bold">The short, readable version</h2><div className="mt-6 max-w-3xl space-y-4 text-sm leading-7 text-muted"><p>DreamPrompts may use privacy-conscious analytics to understand aggregate site usage. We do not sell personal information. If advertising is enabled, third-party vendors such as Google may use cookies to serve and measure ads.</p><p>Comments are provided by Giscus and are subject to GitHub’s privacy practices. Messages you send by email are used only to respond to you. You may request deletion of your correspondence at any time.</p><p>Last updated: June 28, 2026. Questions? Contact hello@dreamprompts.net.</p></div></section>
  </div>
}
