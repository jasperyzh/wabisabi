import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
    fs: {
      // Allow serving files from one level up to the project root
      allow: ['..']
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: "https://jasperyzh.github.io/wabisabi/"
  // base: "https://staging.fishermen-analytics.com/fanalytics/"
  // base: "https://staging.fishermen-analytics.com/yayasan-bold/"
  /* build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'fanalytics/index.html'),
        // nested: resolve(__dirname, 'nested/index.html')
      }
    }
  } */
})
