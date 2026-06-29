import { CopyButton } from './copy-button'

export function PromptCard({ title, promptText, tags = [], embedded = false }: { title: string; promptText: string; tags?: string[]; embedded?: boolean }) {
  return <section className={`not-prose rounded-2xl border border-black/[.08] bg-soft ${embedded ? 'my-9 p-6 md:p-8' : 'flex h-full flex-col p-6'}`}>
    <div className="mb-5 flex items-start justify-between gap-4">
      <div><div className="eyebrow mb-2 text-blue">Ready to use</div><h3 className="serif text-xl font-bold tracking-tight">{title}</h3></div>
      {embedded && <CopyButton text={promptText} compact />}
    </div>
    <p className="whitespace-pre-wrap font-mono text-[13px] leading-6 text-[#323238]">{promptText}</p>
    <div className="mt-auto flex flex-wrap items-center justify-between gap-3 pt-6">
      <div className="flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-full border border-black/10 bg-white px-3 py-1 text-[11px] font-semibold">{tag}</span>)}</div>
      {!embedded && <CopyButton text={promptText} compact />}
    </div>
  </section>
}
