import { unlinkSync, writeFileSync } from 'node:fs'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig, type Plugin } from 'vite'
import { SITE } from './src/lib/constants.ts'
import { buildJsonLd } from './src/lib/jsonld.ts'

function siteOrigin() {
  return SITE.url.replace(/\/$/, '')
}

function writeCrawlFiles() {
  const origin = siteOrigin()
  const robots = origin
    ? `User-agent: *\nAllow: /\n\nSitemap: ${origin}/sitemap.xml\n`
    : 'User-agent: *\nAllow: /\n'
  writeFileSync(new URL('./public/robots.txt', import.meta.url), robots)
  const sitemapPath = new URL('./public/sitemap.xml', import.meta.url)
  if (!origin) {
    try {
      unlinkSync(sitemapPath)
    } catch {
      // No sitemap until a public URL is set.
    }
    return
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${origin}/</loc>
    <lastmod>2026-11-19</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <image:image>
      <image:loc>${origin}${SITE.logo}</image:loc>
      <image:title>${SITE.name}</image:title>
      <image:caption>${SITE.description}</image:caption>
    </image:image>
  </url>
</urlset>
`
  writeFileSync(new URL('./public/sitemap.xml', import.meta.url), sitemap)
}

function seoPlugin(): Plugin {
  return {
    name: 'local-seo',
    buildStart: writeCrawlFiles,
    configureServer: writeCrawlFiles,
    transformIndexHtml(html) {
      const origin = siteOrigin()
      const json = JSON.stringify(buildJsonLd()).replace(/</g, '\\u003c')
      const tags = [
        origin ? `<link rel="canonical" href="${origin}/" />` : '',
        origin ? `<meta property="og:url" content="${origin}/" />` : '',
        origin ? `<link rel="sitemap" type="application/xml" title="Sitemap" href="${origin}/sitemap.xml" />` : '',
        `<script type="application/ld+json">${json}</script>`,
      ]
        .filter(Boolean)
        .join('\n    ')
      return html.replace('<!-- seo -->', tags)
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), seoPlugin()],
})
