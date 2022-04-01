import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import mdx from '@mdx-js/rollup'
import legacy from '@vitejs/plugin-legacy'
import remarkGfm from 'remark-gfm'
import rehypeKatex from 'rehype-katex'
import remarkMath from 'remark-math'
import rehypeHighlight from 'rehype-highlight'



// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    legacy({
      targets: ['defaults', 'not IE 11']
    }),
    mdx({
      jsxImportSource: "preact",
      providerImportSource: '@mdx-js/preact',
      rehypePlugins:[
        rehypeKatex,
        rehypeHighlight
      ],
     remarkPlugins:[
       remarkMath,
       remarkGfm
     ]}),
    preact()
  ]
})
