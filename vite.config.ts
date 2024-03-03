/// <reference types="vitest" />
/// <reference types="vite/client" />
/// <reference types="vitest/globals" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
  resolve: {
    alias: [
      {
        find: '@',
        replacement: new URL('./src', import.meta.url).pathname,
      },
      {
        find: '@atoms',
        replacement: new URL('./src/Atoms', import.meta.url).pathname,
      },
      {
        find: '@molecules',
        replacement: new URL('./src/Molecules', import.meta.url).pathname,
      },
      {
        find: '@organisms',
        replacement: new URL('./src/Organisms', import.meta.url).pathname,
      },
      {
        find: '@utils',
        replacement: new URL('./src/utils', import.meta.url).pathname,
      },
      {
        find: '@assets',
        replacement: new URL('./src/assets', import.meta.url).pathname,
      },
      {
        find: '@model',
        replacement: new URL('./src/Model', import.meta.url).pathname,
      },
    ],
  },
});
