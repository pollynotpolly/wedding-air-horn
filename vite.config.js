import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'src/main.jsx', // Ensure this path is correct
      },
    },
  },
  test: {
    globals: true, // Allow us to use expect, describe etc. without importing in every file
    environment: 'jsdom', // We are testing a DOM environment, not Node
    setupFiles: './tests/setup.js',
  },
});


