const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sagarkarmoker.dev';

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/keystatic/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
