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

  // deploy to gh-pages
  // base: "https://jasperyzh.github.io/wabisabi/",
  // build: {
  //   assetsDir: process.env.NODE_ENV === 'production' ? './wabisabi/assets/' : './'
  // }

  
  // base: process.env.NODE_ENV === 'production' ? '/<REPO>/' : './',
  // base: "https://staging.fishermen-analytics.com/fanalytics/"
  // base: "https://staging.fishermen-analytics.com/yayasan-bold/"
  /* build: {
    
    minify: true,
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'fanalytics/index.html'),
        // nested: resolve(__dirname, 'nested/index.html')
      }
    }
  } */

})
// console.log(process.env.NODE_ENV)
// process.env.NODE_ENV === 'production' ? '/my-app/' : '/'