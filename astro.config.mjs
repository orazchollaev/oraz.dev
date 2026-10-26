// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import icon from 'astro-icon';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://oraz-chollaev.tech',
	integrations: [mdx(), react(), icon(), sitemap()],
	markdown: {
		shikiConfig: {
			theme: 'plastic',
			wrap: true,
		},
	},
});
