import type { MetadataRoute } from 'next';

const BASE_URL = 'https://skolesaga.no';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/dashboard/',
          '/profil',
          '/login',
          '/join',
          '/onboarding',
          '/offline',
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
