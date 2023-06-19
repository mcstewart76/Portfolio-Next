import {defineType} from 'sanity'

export default defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'JobTitle',
      type: 'string',
    },
    {
      name: 'companyImage',
      title: 'companyImage',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'companyName',
      title: 'CompanyName',
      type: 'text',
    },
    {
      name: 'dateStarted',
      title: 'DateEnded',
      type: 'date',
    },
    {
      name: 'dateEnded',
      title: 'DateEnded',
      type: 'date',
    },
    {
      name: 'isCurrentJob',
      title: 'IsCurrentJob',
      type: 'boolean',
    },
    {
      name: 'technlogies',
      title: 'Technlogies',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'skill'}]}],
    },
    {
      name: 'points',
      title: 'Points',
      type: 'array',
      of: [{type: 'string' }],
    },
  ],
})
