import type { Post, Prompt } from './types'

export const demoPosts: Post[] = [
  {
    _id: 'signal-cinematic',
    title: 'The Cinematic Prompt Formula That Makes AI Video Feel Directed',
    slug: 'cinematic-prompt-formula-ai-video',
    author: 'Maya Chen',
    publishedAt: '2026-06-24T09:00:00Z',
    excerpt: 'A practical framework for directing light, camera movement, atmosphere, and rhythm in a single AI video prompt.',
    categories: [{ title: 'AI Video', slug: 'ai-video' }],
    mainImage: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1600&q=85',
    mainImageAlt: 'A cinematographer operating a cinema camera',
    readingTime: 8,
    isVideoObject: true,
    videoUrl: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
    videoThumbnailUrl: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1280&q=80'
  },
  {
    _id: 'reasoning-brief',
    title: 'Stop Asking, Start Briefing: Better Prompts for Complex Work',
    slug: 'briefing-prompts-for-complex-work',
    author: 'Eli Ward',
    publishedAt: '2026-06-19T09:00:00Z',
    excerpt: 'Turn vague requests into crisp creative briefs that give ChatGPT and Claude the context they need.',
    categories: [{ title: 'AI Prompts', slug: 'ai-prompts' }],
    mainImage: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=85',
    mainImageAlt: 'Laptop and notebook on a clean desk',
    readingTime: 6
  },
  {
    _id: 'midjourney-light',
    title: 'A Field Guide to Natural Light in Midjourney',
    slug: 'natural-light-midjourney-guide',
    author: 'Noah Vale',
    publishedAt: '2026-06-12T09:00:00Z',
    excerpt: 'Use time, weather, direction, and texture to make generated light feel physical instead of decorative.',
    categories: [{ title: 'Midjourney', slug: 'midjourney' }],
    mainImage: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=85',
    mainImageAlt: 'Soft sunlight falling across a misty landscape',
    readingTime: 7
  },
  {
    _id: 'sora-scenes',
    title: 'Six Scene Transitions to Try in Your Next Sora Prompt',
    slug: 'sora-scene-transitions',
    author: 'Maya Chen',
    publishedAt: '2026-06-05T09:00:00Z',
    excerpt: 'Move beyond simple cuts with visual transitions that are legible, motivated, and surprisingly cinematic.',
    categories: [{ title: 'AI Video', slug: 'ai-video' }],
    mainImage: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=85',
    mainImageAlt: 'Vintage camera in warm evening light',
    readingTime: 5
  }
]

export const demoPrompts: Prompt[] = [
  { _id: 'p1', title: 'Strategic Devil’s Advocate', promptText: 'Act as a thoughtful devil’s advocate. Examine the following plan, identify its three most fragile assumptions, and suggest one low-cost test for each. Keep the tone constructive and specific. Plan: [PASTE PLAN]', tags: ['ChatGPT', 'Claude'] },
  { _id: 'p2', title: 'Editorial Portrait', promptText: 'Editorial portrait of [SUBJECT], quiet confidence, soft directional window light, subtle film grain, restrained color palette, 85mm lens, shallow depth of field, clean negative space --ar 4:5 --style raw', tags: ['Midjourney'] },
  { _id: 'p3', title: 'One-Shot Product Film', promptText: 'A continuous slow dolly shot orbiting a [PRODUCT] on a monolithic stone plinth at blue hour. Fine mist moves through the scene. Precise specular highlights, premium campaign film, no cuts, 8 seconds.', tags: ['Sora', 'AI Video'] },
  { _id: 'p4', title: 'Messy Notes to Clear Brief', promptText: 'Transform the notes below into a one-page creative brief. Include: objective, audience, key insight, single-minded message, evidence, constraints, deliverables, and open questions. Do not invent missing facts; mark them clearly. Notes: [PASTE NOTES]', tags: ['ChatGPT', 'Claude'] },
  { _id: 'p5', title: 'Explain With Three Lenses', promptText: 'Explain [TOPIC] three ways: first for a curious 12-year-old, then for a working professional, then for a domain expert. Preserve accuracy at every level and note where the analogy breaks down.', tags: ['ChatGPT'] },
  { _id: 'p6', title: 'Dreamlike Match Cut', promptText: 'Close-up of an eye reflecting a moonlit ocean; the camera pushes into the reflection, match-cutting seamlessly to an aerial shot over silver waves. Dreamlike realism, subtle motion blur, midnight blue palette, 6 seconds.', tags: ['Sora', 'AI Video'] }
]
