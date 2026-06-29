import Image from 'next/image'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { urlFor } from '@/lib/sanity'
import { AdSlot } from './ad-slot'
import { PromptCard } from './prompt-card'

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => <figure className="my-9"><Image src={urlFor(value).width(1200).quality(85).url()} width={1200} height={750} alt={value.alt || 'Article image'} className="h-auto w-full rounded-2xl" loading="lazy" /><figcaption className="mt-2 text-center font-sans text-xs text-muted">{value.caption}</figcaption></figure>,
    promptCard: ({ value }) => <PromptCard title={value.title} promptText={value.promptText} tags={value.tags} embedded />,
    code: ({ value }) => <pre><code>{value.code}</code></pre>
  }
}

export function ArticleBody({ body }: { body?: any[] }) {
  if (body?.length) {
    const midpoint = Math.max(1, Math.ceil(body.length / 2))
    return <div className="prose-dp">
      <PortableText value={body.slice(0, midpoint)} components={components} />
      <div className="not-prose my-12"><AdSlot format="rectangle" label="In-article advertisement" /></div>
      <PortableText value={body.slice(midpoint)} components={components} />
    </div>
  }
  return <div className="prose-dp">
    <p className="text-xl leading-9 text-[#3b3b40]">Good prompting is less like entering a command and more like directing a talented collaborator. The model can do remarkable work—but only after it understands what you can already see in your head.</p>
    <h2>Start with the invisible decision</h2>
    <p>Before describing the shot, answer the question underneath it: what should this moment feel like? “A person walking through a city” describes content. “A lonely figure moving through a city that feels indifferent to them” gives every later choice a direction.</p>
    <blockquote>The model needs nouns to draw the frame. It needs intention to make the frame mean something.</blockquote>
    <h2>Build the prompt in layers</h2>
    <p>A reliable structure is: subject and action, environment, camera, light, texture, and timing. Keep each layer legible. When everything is emphasized, nothing is.</p>
    <PromptCard embedded title="Cinematic scene builder" tags={['Sora', 'AI Video']} promptText={'A [SHOT TYPE] of [SUBJECT + ACTION] in [ENVIRONMENT]. The camera [CAMERA MOVEMENT]. [LIGHTING] creates a [MOOD] atmosphere. [TEXTURE / MEDIUM], restrained color palette, natural motion, [DURATION], no cuts.'} />
    <div className="not-prose my-12"><AdSlot format="rectangle" label="In-article advertisement" /></div>
    <h2>Direct motion, not just appearance</h2>
    <p>Video prompts often fail because they read like still-image prompts with “cinematic” attached. Describe what changes over time: where the camera begins, how the subject moves, what enters the frame, and where the shot resolves.</p>
    <h3>Keep the choreography plausible</h3>
    <p>One clear camera move and one clear subject action are a strong starting point. Add complexity only after the basic spatial relationship holds together.</p>
    <h2>Iterate like an editor</h2>
    <p>Change one family of variables at a time. First composition, then motion, then atmosphere. This makes each generation informative instead of merely different. Save the prompt and result together—you are building a visual vocabulary, not chasing a lucky roll.</p>
  </div>
}
