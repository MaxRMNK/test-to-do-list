import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Чтобы не ругался на SCSS
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  resolve: {
    alias: {
      app: '/src/app',
      // entities: '/src/entities',
      features: '/src/features',
      // pages: '/src/pages',
      shared: '/src/shared',
      widgets: '/src/widgets',
    },
  },
  server: {
    port: 3000,
  },
});
