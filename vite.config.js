import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import ssr from 'vite-plugin-ssr/plugin';
// import pagesPlugin from 'vite-plugin-pages';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // pagesPlugin({
    //   dirs: 'src/pages',
    // }),
    // ssr({
    //   rootDocument: 'src/app.jsx',
    //   clientMinify: false,
    //   serverMinify: false,
    //   // prerender: true, // Enable prerendering of static pages
    // }),
  ],
  build: {
    target: 'esnext',
  },
  server: { port: 5173 },
});
