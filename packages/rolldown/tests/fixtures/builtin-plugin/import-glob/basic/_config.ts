import path from 'node:path'
import { defineTest } from 'rolldown-tests'
import { importGlobPlugin } from 'rolldown/experimental'

export default defineTest({
  config: {
    plugins: [
      importGlobPlugin({
        root: path.resolve(import.meta.dirname),
      }),
    ],
  },
  async afterTest() {
    await import('./assert.mjs')
  },
})
