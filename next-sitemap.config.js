/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://pepryan.github.io/portfolio',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  outDir: './out',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  transform: async (config, path) => {
    // Mengembalikan null untuk path yang tidak ingin dimasukkan ke sitemap
    if (path === '/404' || path === '/_not-found') {
      return null;
    }
    
    return {
      loc: path,
      changefreq: path === '/' ? 'daily' : 'weekly',
      priority: path === '/' ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    }
  },
} 