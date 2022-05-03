import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from '@vuetify/vite-plugin'
import { createHtmlPlugin } from 'vite-plugin-html'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      minify: true,
      entry: '/src/main.ts',
      /**
       * Data that needs to be injected into the index.html ejs template
       */
      inject: {
        data: {
          title: 'Portfolio',
          description: 'Motivated student in information technology, I have practical experience in backend and frontend development acquired during various projects and trainings.',
          owner: 'Carlos Ruiz Herrera',
          domainName: process.env.DOMAIN_NAME,
          imagePath: "me.jpg",
        },
      },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
    vuetify({
      autoImport: true,
    }),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
