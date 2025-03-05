import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': '"production"',
  },
  build: {
    lib: {
      entry: 'src/my-app-element.js',
      name: 'MyAppElement',
      formats: ['iife'], 
      fileName: () => 'my-app-element.js',
    },
    rollupOptions: {},
  },
})
