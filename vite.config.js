import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  },
  build: {
    // Optimize chunks for better caching
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'animations': ['gsap', '@studio-freight/lenis'],
          'icons': ['lucide-react']
        }
      }
    },
    // Image optimization
    assetsInlineLimit: 4096,
    reportCompressedSize: true,
    chunkSizeWarningLimit: 500
  }
})

