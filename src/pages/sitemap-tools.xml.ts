// src/pages/sitemap-tools.xml.ts
// Sitemap for tool pages — extend tools[] as new tools are added
import type { APIRoute } from "astro";

const siteUrl = "https://colorspedia.com";
const now = new Date().toISOString();

const tools = [
  { slug: "color-picker", label: "Color Picker" },
  { slug: "palette-generator", label: "Palette Generator" },
  { slug: "contrast-checker", label: "Contrast Checker" },
  { slug: "gradient-generator", label: "Gradient Generator" },
  { slug: "color-converter", label: "Color Converter" },
  { slug: "color-mixer", label: "Color Mixer" },
  { slug: "tint-shade-generator", label: "Tint & Shade Generator" },
  { slug: "complementary-colors", label: "Complementary Colors" },
];

export const GET: APIRoute = () => {
  const urls = tools?.map(
    (tool) => `  <url>
    <loc>${siteUrl}/tools/${tool.slug}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
  );

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
