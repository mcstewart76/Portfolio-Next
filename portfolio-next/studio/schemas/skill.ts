import {defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    {
      name: 'skillTitle',
      title: 'SkillTitle',
      type: 'string',
    },
    {
      name: 'skillImage',
      title: 'skillImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
})
