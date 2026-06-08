import type { APIRoute } from "astro";
import { colorFamilies } from "../data/colors";

const siteUrl = "https://colorspedia.com";
const now = new Date().toISOString();

export const GET: APIRoute = () => {
  const urls = colorFamilies.flatMap((color) => {
    const entries = [
      // Color family index page
      `  <url>
    <loc>${siteUrl}/colors/${color.slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`,
      // Individual shade pages
      ...color.shades.map(
        (shade) => `  <url>
    <loc>${siteUrl}/colors/${color.slug}/${shade.weight}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`,
      ),
    ];
    return entries;
  });

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
