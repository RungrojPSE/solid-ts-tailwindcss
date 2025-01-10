import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import path from 'path';

export default defineConfig({
  plugins: [solid()],
  build: {
    target: 'esnext',
    // polyfillDynamicImport: false,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src', 'assets'),
      '@components': path.resolve(__dirname, 'src', 'components'),
    },
  },
});