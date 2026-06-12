import type { APIRoute } from "astro";
import { paletteSets } from "../data/palettes";

const siteUrl = "https://colorspedia.com";
const now = new Date().toISOString();

export const GET: APIRoute = () => {
  const urls = [
    // Palettes index
    `<url>
    <loc>${siteUrl}/palettes</loc>
    <lastmod>${now}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`,

    // Individual palette pages
    ...paletteSets?.map(
      (palette) => `  <url>
    <loc>${siteUrl}/palettes/${palette.id}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
    ),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
};
