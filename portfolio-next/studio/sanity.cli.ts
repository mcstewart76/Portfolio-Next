/* eslint-disable no-process-env */
import {loadEnvConfig} from '@next/env'
import {defineCliConfig} from 'sanity/cli'

const dev = process.env.NODE_ENV !== 'production'
loadEnvConfig(__dirname, dev, {info: () => null, error: console.error})

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "tgw14qe4"


const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production"

export default defineCliConfig({
  api: {projectId, dataset},
  server: {
    hostname: 'localhost',
    port: 3333,
  },
})


