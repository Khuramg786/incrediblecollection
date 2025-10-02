const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

// Your website domain
const domain = 'https://www.inkcrediblecollection.store/';

// List of your site routes
const pages = [
  '/',
  '/Filter',
  '/Contactus',
  '/Blog',
];

// Create sitemap
const sitemapStream = new SitemapStream({ hostname: domain });
pages.forEach((page) => {
  sitemapStream.write({ url: page, changefreq: 'weekly', priority: 0.8 });
});
sitemapStream.end();

// Save sitemap.xml
streamToPromise(sitemapStream).then((data) => {
  createWriteStream('./public/sitemap.xml').write(data.toString());
  console.log('✅ Sitemap created at public/sitemap.xml');
});
