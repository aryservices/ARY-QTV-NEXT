const fs = require('fs');
const fetch = require('node-fetch');

const SITE_URL = 'https://aryqtv.tv'; // Replace with your domain

// Define the API endpoints
const APIs = [
  'https://node.aryzap.com/api/series/byCatID/QTV%20ARCHIVE/PK', // Archive Dramas
  'https://node.aryzap.com/api/series/byCatID/QTV%20ON%20AIR/PK', // Popular Dramas
  'https://node.aryzap.com/api/series/byCatID/QTV%20FEATURED/PK', // Latest Dramas
  'https://node.aryzap.com/api/series/byCatID/QTV%20single%20series/PK', // Latest Dramas
];

async function fetchAllPlaylists() {
  try {
    // Fetch data from all APIs in parallel
    const responses = await Promise.all(APIs.map((api) => fetch(api)));
    const results = await Promise.all(responses.map((res) => res.json()));

    // Merge all playlists into a single array
    const playlists = results.flatMap((result) => result.series); // Flatten the arrays
    return playlists;
  } catch (error) {
    console.error('Error fetching playlists:', error);
    return [];
  }
}

async function generateSitemap() {
  const playlists = await fetchAllPlaylists();

  // Generate dynamic URLs for all playlists
  const dynamicUrls = playlists
    .map(
      (playlist) =>
        `<url><loc>${SITE_URL}/playlist/${playlist._id}</loc><changefreq>daily</changefreq><priority>0.7</priority></url>`
    )
    .join('\n');

  // Add static URLs
  const staticUrls = [
    `<url><loc>${SITE_URL}/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>`,
    `<url><loc>${SITE_URL}/about</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>`,
  ].join('\n');

  // Combine URLs into a sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticUrls}
${dynamicUrls}
</urlset>`;

  // Write sitemap to the public directory
  fs.writeFileSync('./public/sitemap.xml', sitemap, 'utf8');
  console.log('Sitemap generated successfully!');
}

generateSitemap().catch((error) => {
  console.error('Error generating sitemap:', error);
});
