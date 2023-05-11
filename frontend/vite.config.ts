import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import copy from 'rollup-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    react(),
    copy({
      targets: [
          {
              src: 'node_modules/@emdgroup-liquid/liquid/dist/liquid/assets/*',
              dest: 'public/liquid/assets',
          }
      ],
      hook: "buildStart"
    }),
  ],
  build: {
    assetsInlineLimit: 4096 * 5, // 20Ko
    minify: "esbuild",
    sourcemap: true,
    outDir: "build/",
  }
})
