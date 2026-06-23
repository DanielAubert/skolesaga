import type { NextConfig } from "next";

// Content-Security-Policy directives
const cspDirectives = [
  "default-src 'self'",
  // Scripts: self + CDNs + inline (required by Next.js hydration) + wasm (Pyodide)
  "script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval' https://www.googletagmanager.com https://cdn.jsdelivr.net https://www.geogebra.org",
  // Styles: self + inline (required by Tailwind/React)
  "style-src 'self' 'unsafe-inline'",
  // Images: self + data URIs + external image sources
  "img-src 'self' data: blob: https://images.unsplash.com https://img.youtube.com https://xerfxuoxqdptoxkiefju.supabase.co",
  // Fonts: self only (Next.js bundles fonts at build time)
  "font-src 'self'",
  // Audio/video: self + Supabase Storage (lydbøker ligger i media-bucketen)
  "media-src 'self' https://xerfxuoxqdptoxkiefju.supabase.co",
  // API connections: self + Supabase + Feide/Dataporten + Google Analytics + Google OAuth
  "connect-src 'self' https://xerfxuoxqdptoxkiefju.supabase.co https://auth.dataporten.no https://www.googletagmanager.com https://cdn.jsdelivr.net https://accounts.google.com https://oauth2.googleapis.com",
  // Iframes: YouTube + Vimeo
  "frame-src https://www.youtube-nocookie.com https://www.youtube.com https://player.vimeo.com https://www.geogebra.org",
  // Workers: self (PWA service worker)
  "worker-src 'self' blob:",
  // Block object/embed/applet
  "object-src 'none'",
  // Restrict base URI
  "base-uri 'self'",
].join('; ');

const nextConfig: NextConfig = {
  /* config options here */
  // Bokmål bundles inn (synkron fs-lasting). Nynorsk/nordsamisk hentes fra
  // Supabase Storage ved kjøretid og må IKKE bundles (273 MB > 250 MB-grensa).
  outputFileTracingIncludes: {
    '/**': ['./src/lib/data/chapters/_all.json'],
  },
  outputFileTracingExcludes: {
    '/**': [
      './src/lib/data/chapters/_all.nn.json',
      './src/lib/data/chapters/_all.sme.json',
    ],
  },
  turbopack: {
    root: __dirname, // Explicitly set root to prevent parent directory inference
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'xerfxuoxqdptoxkiefju.supabase.co',
        pathname: '/storage/**',
      },
    ],
  },
  webpack: (config) => {
    // Enable WebAssembly support
    config.experiments = {
      ...config.experiments,
      asyncWebAssembly: true,
    };
    return config;
  },
  // Sikkerhetsnett: mediefilene er flyttet til Supabase Storage (bucket: media).
  // Render-koden bruker mediaUrl() fra src/lib/media.ts; disse redirectene fanger
  // opp eventuelle direkte lenker og referanser som ikke går via hjelperen.
  async redirects() {
    const mediaBase = process.env.NEXT_PUBLIC_SUPABASE_URL
      ? `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/media`
      : null;
    if (!mediaBase) return [];
    return [
      {
        source: '/audio/:path*',
        destination: `${mediaBase}/audio/:path*`,
        permanent: false,
      },
      {
        source: '/images/:path*',
        destination: `${mediaBase}/images/:path*`,
        permanent: false,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), payment=()',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },
          {
            key: 'Content-Security-Policy',
            value: cspDirectives,
          },
        ],
      },
    ];
  },
};

export default nextConfig;
