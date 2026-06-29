import { defineArrayMember, defineField, defineType } from 'sanity'

export const post = defineType({
  name: 'post', title: 'Post', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title', maxLength: 96, isUnique: (value, context) => context.defaultIsUnique(value, context) }, validation: (rule) => rule.required() }),
    defineField({ name: 'author', title: 'Author', type: 'string', initialValue: 'DreamPrompts Editorial', validation: (rule) => rule.required() }),
    defineField({ name: 'mainImage', title: 'Cover image', type: 'image', options: { hotspot: true }, fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string', description: 'Describe the image for search engines and screen readers.', validation: (rule) => rule.required() })] }),
    defineField({ name: 'categories', title: 'Categories', type: 'array', of: [{ type: 'reference', to: [{ type: 'category' }] }], validation: (rule) => rule.required().min(1) }),
    defineField({ name: 'publishedAt', title: 'Publish at', type: 'datetime', initialValue: () => new Date().toISOString(), description: 'Set a future date to schedule publication.', validation: (rule) => rule.required() }),
    defineField({ name: 'excerpt', title: 'SEO excerpt', description: 'Used for search and social descriptions (max 200 characters).', type: 'text', rows: 3, validation: (rule) => rule.required().max(200) }),
    defineField({ name: 'body', title: 'Body', type: 'array', of: [
      defineArrayMember({ type: 'block', styles: [{ title: 'Normal', value: 'normal' }, { title: 'Heading 2', value: 'h2' }, { title: 'Heading 3', value: 'h3' }, { title: 'Quote', value: 'blockquote' }] }),
      defineArrayMember({ type: 'image', options: { hotspot: true }, fields: [defineField({ name: 'alt', title: 'Alt text', type: 'string', validation: (rule) => rule.required() }), defineField({ name: 'caption', title: 'Caption', type: 'string' })] }),
      defineArrayMember({ name: 'promptCard', title: 'Embedded Prompt Card', type: 'object', fields: [defineField({ name: 'title', title: 'Title', type: 'string', validation: (rule) => rule.required() }), defineField({ name: 'promptText', title: 'Prompt text', type: 'text', rows: 8, validation: (rule) => rule.required() }), defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } })], preview: { select: { title: 'title', subtitle: 'promptText' } } }),
      defineArrayMember({ name: 'code', title: 'Code block', type: 'object', fields: [defineField({ name: 'language', title: 'Language', type: 'string' }), defineField({ name: 'code', title: 'Code', type: 'text', rows: 10 })] })
    ], validation: (rule) => rule.required() }),
    defineField({ name: 'isVideoObject', title: 'Video tutorial', type: 'boolean', initialValue: false }),
    defineField({ name: 'videoUrl', title: 'Video URL', type: 'url', hidden: ({ parent }) => !parent?.isVideoObject }),
    defineField({ name: 'videoThumbnailUrl', title: 'Video thumbnail URL', type: 'url', hidden: ({ parent }) => !parent?.isVideoObject })
  ],
  preview: { select: { title: 'title', media: 'mainImage', publishedAt: 'publishedAt' }, prepare: ({ title, media, publishedAt }) => ({ title, media, subtitle: publishedAt ? new Date(publishedAt).toLocaleDateString() : 'Draft' }) },
  orderings: [{ title: 'Publish date, new', name: 'publishedAtDesc', by: [{ field: 'publishedAt', direction: 'desc' }] }]
})
