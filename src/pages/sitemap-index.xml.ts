// src/pages/sitemap-index.xml.ts
// Sitemap index pointing to individual section sitemaps
import type { APIRoute } from "astro";

const siteUrl = "https://colorspedia.com";
const now = new Date().toISOString();

export const GET: APIRoute = () => {
  const sitemaps = [
    "sitemap-main.xml",
    "sitemap-colors.xml",
    "sitemap-palettes.xml",
    // "sitemap-tools.xml",
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemaps
  ?.map(
    (s) => `<sitemap>
    <loc>${siteUrl}/${s}</loc>
    <lastmod>${now}</lastmod>
  </sitemap>`,
  )
  .join("\n")}
</sitemapindex>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
