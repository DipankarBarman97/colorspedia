// src/pages/sitemap-main.xml.ts
// Static / editorial pages sitemap
import type { APIRoute } from "astro";

const siteUrl = "https://colorspedia.com";
const now = new Date().toISOString();

interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority?: number;
}

const staticPages: SitemapEntry[] = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/colors", changefreq: "weekly", priority: 0.9 },
  { url: "/tools", changefreq: "weekly", priority: 0.8 },
  { url: "/tools/color-picker", changefreq: "monthly", priority: 0.7 },
  { url: "/tools/palette-generator", changefreq: "monthly", priority: 0.7 },
  { url: "/tools/contrast-checker", changefreq: "monthly", priority: 0.7 },
  { url: "/tools/gradient-generator", changefreq: "monthly", priority: 0.7 },
  { url: "/blog", changefreq: "weekly", priority: 0.6 },
  { url: "/about", changefreq: "yearly", priority: 0.4 },
  { url: "/contact", changefreq: "yearly", priority: 0.3 },
  { url: "/privacy-policy", changefreq: "yearly", priority: 0.2 },
  { url: "/terms", changefreq: "yearly", priority: 0.2 },
];

function buildUrl(entry: SitemapEntry): string {
  return `  <url>
    <loc>${siteUrl}${entry.url}</loc>
    <lastmod>${entry.lastmod ?? now}</lastmod>
    <changefreq>${entry.changefreq ?? "monthly"}</changefreq>
    <priority>${entry.priority ?? 0.5}</priority>
  </url>`;
}

export const GET: APIRoute = () => {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${staticPages.map(buildUrl).join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
