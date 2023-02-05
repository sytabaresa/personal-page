import react from '@vitejs/plugin-react'
// import preact from "@preact/preset-vite";
import ssr from 'vite-plugin-ssr/plugin'
import tsconfigPaths from 'vite-tsconfig-paths'
import mdx from '@mdx-js/rollup'
import { defineConfig, UserConfig } from 'vite'

export default defineConfig(({ command, mode, ssrBuild }) => ({
  plugins: [
    react(),
    // preact(),
    ssr({ prerender: true }),
    tsconfigPaths(),
    mdx(),
  ],
  // We manually add a list of dependencies to be pre-bundled, in order to avoid a page reload at dev start which breaks vite-plugin-ssr's CI
  //  optimizeDeps: {
  //   include: ['preact', 'preact/devtools', 'preact/debug', 'preact/jsx-dev-runtime', 'preact/hooks']
  // },
  // resolve: {
  //   alias: {
  //     'react': 'preact/compat',
  //     'react-dom': 'preact/compat'
  //   }
  // },
  ssr: {
    // Add libraries containing invalid ESM here
    noExternal: command == 'serve' ? [] : ['@egjs/react-grid']
  }
}))
