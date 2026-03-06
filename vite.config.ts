import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import viteReact from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'
import { nitro } from 'nitro/vite'

const plugins = [
  nitro({ rollupConfig: { external: [/^@sentry\//] } }),
  tsconfigPaths({ projects: ['./tsconfig.json'] }),
  tailwindcss(),
  tanstackStart(),
  viteReact(),
]

if (process.env.NODE_ENV === 'development') {
  const { devtools } = await import('@tanstack/devtools-vite')
  plugins.unshift(devtools())
}

export default defineConfig({
  plugins,
})
