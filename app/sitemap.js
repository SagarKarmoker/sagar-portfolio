const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://sagarkarmoker.dev';

export default function sitemap() {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
  ];
}
