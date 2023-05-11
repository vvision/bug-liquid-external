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
        outDir: "../dist/4.6.0",
        lib: {
            entry: resolve(__dirname, 'src/WebComponentElement.tsx'),
            formats: ["es"],
            name: 'WebComponent',
            fileName: (format) => `webcomponent.${format}.js`
        },
    rollupOptions: {
        external: ['@emdgroup-liquid/liquid', '@emdgroup-liquid/liquid/dist/react'],
        // No success either with this configuration:
        // external: (id) => {
        //   console.log('* ', id);
        //   if(id.includes('@emdgroup-liquid/liquid')) console.log('LIQUID', id);
        //   return id.includes('@emdgroup-liquid/liquid');
        // },
    }
},
})
