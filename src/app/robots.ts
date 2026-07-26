import type { MetadataRoute } from 'next';

const BASE_URL = 'https://skolesaga.no';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          // API-er — aldri innhold for lesere
          '/api/',
          // Innloggede flater (lærer-/elev-/admin-dashbord ligger under /dashboard)
          '/dashboard/',
          '/profil',
          '/endre-passord',
          // Autentisering og pålogging
          '/login',
          '/join',
          '/onboarding',
          // Servicerute uten innhold
          '/offline',
          // Internt korrekturverktøy for nordsamisk oversettelse
          '/sme-review/',
          // Utviklerside for illustrasjonskatalogen (/test/illustrasjoner)
          '/test/',
          // Efemere, brukergenererte utfordringskoder (landingssida
          // /hoderegning/challenge er fortsatt tillatt — ingen skråstrek der)
          '/hoderegning/challenge/',
        ],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    // `Host:` er fjernet med vilje: direktivet er avviklet (kun Yandex leste det,
    // Google har alltid ignorert det), og det pekte på apex mens nettstedet
    // fortsatt svarer på www — en tvetydighet som ikke er verdt å ha stående.
    // Foretrukket vert styres av 301/307-redirect + canonical, ikke av robots.txt.
  };
}
