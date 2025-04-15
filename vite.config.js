import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginSitemap from 'vite-plugin-sitemap';
import { createHtmlPlugin } from 'vite-plugin-html';
// import prerender from 'vite-plugin-prerender';

const routes = ['/', '/collection', '/orders', '/contact', '/about'];

export default defineConfig({
  plugins: [
    react(),
    // prerender({
    //   staticDir: 'dist',
    //   routes,
    // }),
    vitePluginSitemap({
      baseUrl: 'https://dammyskitchen.vercel.app',
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
