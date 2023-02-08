import { defineConfig } from 'astro/config'
import remarkToc from 'remark-toc'
import rehypeToc from 'rehype-toc'
import image from '@astrojs/image'
import svelte from '@astrojs/svelte'

// https://astro.build/config
export default defineConfig({
    remarkPlugins: [
        [
            remarkToc,
            {
                tight: true,
                ordered: true,
            },
        ],
    ],
    rehypePlugins: [
      [
        rehypeToc,
        {
          headings: ['h1', 'h2', 'h3'],
          cssClasses: {
            toc: 'toc-post', 
            link: 'toc-link', 
          },
        },
      ],
    ],
    integrations: [
        svelte(),
        image({
            serviceEntryPoint: '@astrojs/image/sharp',
        }),
    ],
})
