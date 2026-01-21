import Script from 'next/script';
import { PyodideProvider } from '@/contexts/pyodide-context';

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
