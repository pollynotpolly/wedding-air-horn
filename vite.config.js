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
    globals: true, 
    environment: 'jsdom', 
    setupFiles: './tests/setup.js',
  },
});


