import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default defineConfig(({ command, mode }) => {
  
  console.log(`Running in ${mode} mode`);
  console.log(`Command: ${command}`);
  console.log(`Current directory: ${process.cwd()}`);

  return {
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html'),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
}})
