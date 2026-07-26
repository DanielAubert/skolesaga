'use client';

import { useEffect, useState } from 'react';

/**
 * Rendrer inline SVG fra kapitteldata, sanitert med DOMPurify — i NETTLESEREN.
 *
 * Hvorfor ikke `isomorphic-dompurify`: den pakken drar inn jsdom for å kunne
 * sanitere på serveren. jsdom → html-encoding-sniffer@6 → `@exodus/bytes`, som
 * er ren ESM («type»: «module»), mens html-encoding-sniffer laster den med
 * `require()`. På Vercel eksternaliseres jsdom, og da smeller det:
 *
 *   Failed to load external module jsdom: ERR_REQUIRE_ESM
 *   require() of ES Module @exodus/bytes/encoding-lite.js
 *
 * Det tok ned ALLE kapittelsider med HTTP 500 den 26. juli 2026. Ingen versjon
 * i det tillatte spennet er CommonJS, og jsdom 29 bruker samme avhengighet, så
 * verken pinning eller oppgradering løser det. Den varige fiksen er å ikke ha
 * jsdom i servergrafen i det hele tatt.
 *
 * Saneringen er ikke svekket: den skjer fortsatt før noe settes inn i DOM-en,
 * bare på klienten. Under SSR rendres en tom plassholder med samme mål, slik at
 * layouten ikke hopper — aldri usanert markup.
 */
export function SafeSvg({ svg, className }: { svg: string; className?: string }) {
  const [rent, setRent] = useState<string | null>(null);

  useEffect(() => {
    let avbrutt = false;
    // Dynamisk import: `dompurify` er nettleser-bare og skal aldri havne i
    // serverbunten.
    import('dompurify').then(({ default: DOMPurify }) => {
      if (avbrutt) return;
      setRent(DOMPurify.sanitize(svg, { USE_PROFILES: { svg: true, svgFilters: true } }));
    });
    return () => { avbrutt = true; };
  }, [svg]);

  if (rent === null) {
    // SSR og første maling: reserver plassen, ikke tegn noe usanert.
    return <div className={className} aria-hidden="true" />;
  }

  return <div className={className} dangerouslySetInnerHTML={{ __html: rent }} />;
}
