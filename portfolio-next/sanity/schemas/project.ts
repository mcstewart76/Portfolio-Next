import {defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Title of the project',
      type: 'string',
    },
    {
      name: 'projectImage',
      title: 'ProjectImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'projectSummary',
      title: 'ProjectSummary',
      type: 'text',
    },
    {
      name: 'technlogies',
      title: 'Technlogies',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
    },
    {
      name: 'linkToProject',
      title: 'LinkToProject',
      type: 'url',
    },
  ],
})
