export default {
  type: 'object',
  name: 'quote',
  title: 'Quote',
  fields: [
    {
      name: 'quote',
      type: 'string',
      title: 'Quote'
    },
    {
      name: 'person',
      type: 'string',
      title: 'person'
    }
  ],
  preview: {
    select: {
      quote: 'quote'
    },
    prepare({ quote }) {
      return {
        title: `${quote}`,
        subtitle: 'Text section'
      }
    }
  }
}
