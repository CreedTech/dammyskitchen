import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import ssr from 'vite-plugin-ssr/plugin';
// import pagesPlugin from 'vite-plugin-pages';
import { ViteSitemap } from 'vite-plugin-sitemap';
import { createHtmlPlugin } from 'vite-plugin-html';
import { viteSSG } from 'vite-ssg/serialized-data';

const routes = [
  { path: '/', name: 'Home' },
  { path: '/collection', name: 'Collection' },
  { path: '/orders', name: 'Orders' },
  { path: '/contact', name: 'Contact' },
  { path: '/about', name: 'About' },
];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteSSG({ includedRoutes: () => routes }),
    ViteSitemap({
      baseUrl: 'https://yourdomain.com',
      routes,
      generateRobotsTxt: true,
    }),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: 'DammysKitchen | Nigerian Food Delivery in London',
          description: 'Order authentic Nigerian meals online in London.',
        },
      },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    target: 'esnext',
  },
  server: { port: 5173 },
});
