import { resolve } from "path";
import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import copy from 'rollup-plugin-copy';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3001
  },
  plugins: [
    preact(),
    copy({
      targets: [
          {
              src: 'node_modules/@emdgroup-liquid/liquid/dist/liquid/assets/*',
              dest: 'public/liquid/assets',
          }
      ],
      hook: "buildStart"
    })
  ],
  build: {
    minify: "esbuild",
        sourcemap: true,
        outDir: "../dist/4.5.1",
        lib: {
            entry: resolve(__dirname, 'src/WebComponentElement.tsx'),
            formats: ["es"],
            name: 'WebComponent',
            fileName: (format) => `webcomponent.${format}.js`
        },
    rollupOptions: {
        external: ['liquid'],
    }
},
})
