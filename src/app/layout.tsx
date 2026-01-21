import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import { SkipNav } from "@/components/accessibility/skip-nav";
// OPTIONAL: Toast notifications - can be removed by deleting import and <ToastProvider> wrapper
import { ToastProvider } from "@/components/ui/toast";
import { ThemeProvider } from "@/components/theme-provider";
import { AuthProvider } from "@/lib/auth/provider";
import { PWAProvider } from "@/components/pwa";
import { IllustrationApprovalProvider } from "@/lib/illustration-approval-context";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://skolesaga.no'),
  title: {
    default: "Skolesaga - Interaktive lærebøker for norsk skole",
    template: "%s | Skolesaga"
  },
  description: "Gratis interaktive lærebøker med øvingsoppgaver, quiz og fremgangsregistrering for alle fag fra 5. klasse til VG3. Tilpasset LK20.",
  keywords: ["lærebøker", "interaktive lærebøker", "gratis lærebøker", "matematikk", "norsk", "engelsk", "naturfag", "videregående", "ungdomsskole", "barneskole", "LK20", "øvingsoppgaver", "quiz", "programmering", "GeoGebra"],
  authors: [{ name: "Skolesaga" }],
  creator: "Skolesaga",
  publisher: "Skolesaga",
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Skolesaga',
  },
  formatDetection: {
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "nb_NO",
    url: "https://skolesaga.no",
    siteName: "Skolesaga",
    title: "Interaktive lærebøker for norsk skole",
    description: "Gratis interaktive lærebøker med øvingsoppgaver, quiz og fremgangsregistrering for alle fag fra 5. klasse til VG3.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Skolesaga - Interaktive lærebøker",
    description: "Gratis interaktive lærebøker for alle fag fra 5. klasse til VG3.",
  },
  icons: {
    icon: [
      { url: '/icons/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icons/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/icons/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Skolesaga",
    "url": "https://skolesaga.no",
    "description": "Gratis interaktive lærebøker med øvingsoppgaver og fremgangsregistrering for alle fag i norsk skole",
    "educationalLevel": ["Barneskole", "Ungdomsskole", "Videregående"],
    "inLanguage": "nb",
  };

  return (
    <html lang="nb" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <PWAProvider>
              {/* OPTIONAL: ToastProvider wrapper - can be removed to disable toast notifications */}
              <ToastProvider>
                <IllustrationApprovalProvider>
                  <SkipNav />
                  {children}
                  <Analytics />
                  <GoogleAnalytics />
                </IllustrationApprovalProvider>
              </ToastProvider>
            </PWAProvider>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
