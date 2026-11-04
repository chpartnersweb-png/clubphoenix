import type { APIRoute } from 'astro';
import { seo } from '../config/seo.mjs';

export const prerender = true;

// The current website has one indexable page; in-page anchors are not URLs here.
export const GET: APIRoute = () => new Response(
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${seo.url}</loc>\n  </url>\n</urlset>\n`,
  { headers: { 'Content-Type': 'application/xml; charset=utf-8' } },
);
