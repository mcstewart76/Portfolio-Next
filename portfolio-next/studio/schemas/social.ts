import {defineType} from 'sanity'

export default defineType({
name: 'social',
  title: 'Social',
  type: 'document',
  fields: [
    {
      name: 'socialTitle',
      title: 'SocialTitle',
      type: 'string',
    },
    {
      name: 'SocialUrl',
      title: 'SocialUrl',
      type: 'url',
    },
  ],
})
