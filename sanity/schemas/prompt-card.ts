import { defineField, defineType } from 'sanity'

export const promptCard = defineType({
  name: 'promptCard', title: 'Prompt Card', type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title / label', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'promptText', title: 'Prompt text', type: 'text', rows: 8, validation: (rule) => rule.required() }),
    defineField({ name: 'tags', title: 'Tool & keyword tags', type: 'array', of: [{ type: 'string' }], options: { layout: 'tags' } })
  ],
  preview: { select: { title: 'title', subtitle: 'promptText' } }
})
