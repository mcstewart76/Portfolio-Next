import {defineConfig} from 'sanity'

import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID! || 'tgw14qe4'
const dataset = process.env.SANITY_STUDIO_DATASET! || 'production'

export default defineConfig({
  basePath: '/studio', // <-- important that `basePath` matches the route you're mounting your studio from, it applies to both `/pages` and `/app`
  projectId,
  dataset,

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
