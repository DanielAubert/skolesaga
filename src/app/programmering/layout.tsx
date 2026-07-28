import Script from 'next/script';
import type { Metadata } from 'next';
import { PyodideProvider } from '@/contexts/pyodide-context';
import { pageMetadata } from '@/lib/seo';

const TITTEL = 'Programmering i Python for norsk skole';
const BESKRIVELSE =
  'Interaktiv Python-bok med kjørbar kode i nettleseren. 52 kapitler fra '
  + 'grunnleggende programmering til R2 – dekker 8.–10. klasse, 1P, 1T, 2P, '
  + 'S1, R1, S2 og R2.';

/**
 * Metadata for oversiktssida. Kapitlene under har hver sin layout.tsx som
 * overstyrer dette med egen tittel — se ./kapittel-metadata.ts for hvorfor
 * metadataene ligger i oppsett og ikke i sidene selv.
 */
export const metadata: Metadata = {
  title: TITTEL,
  description: BESKRIVELSE,
  ...pageMetadata({ path: '/programmering', title: TITTEL, description: BESKRIVELSE }),
};

export default function BookLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/pyodide/v0.25.1/full/pyodide.js"
        strategy="afterInteractive"
        crossOrigin="anonymous"
      />
      <PyodideProvider>
        {children}
      </PyodideProvider>
    </>
  );
}
