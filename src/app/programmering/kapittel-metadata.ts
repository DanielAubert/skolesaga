import type { Metadata } from 'next';
import { BOOK_CHAPTERS, getLevelDisplayName } from '@/lib/data/book-chapters';
import { pageMetadata } from '@/lib/seo';

/**
 * Metadata for de 53 kapitlene i Python-boka.
 *
 * HVORFOR DETTE LIGGER I EN layout.tsx OG IKKE I SIDA SELV:
 *
 * Alle kapittelsidene er `'use client'` — de trenger Pyodide, som kjører
 * Python i nettleseren. En klientkomponent kan ikke eksportere
 * `generateMetadata`, og fram til 28. juli 2026 hadde derfor ingen av dem
 * egen tittel. Alle 54 arvet rotoppsettet og het det samme:
 *
 *     «Skolesaga - Interaktive lærebøker for norsk skole»
 *
 * ingen hadde beskrivelse, og ingen hadde canonical. For Google så det ut som
 * 53 identiske sider — nøyaktig signalet som får innhold avvist som tynt eller
 * duplikat. Innholdet var der hele tiden (~410 linjer og 3–4 kodebokser per
 * kapittel); det var bare umerket.
 *
 * Et `layout.tsx` kan være serverkomponent selv om sida under er klient, og
 * segmentets metadata gjelder for sida. Det er derfor hvert kapittel har en
 * fire linjers layout som kaller denne funksjonen.
 *
 * Nivået står i tittelen fordi det er slik faget faktisk søkes opp — «python
 * 1T», «programmering S1». Uten det konkurrerer 53 titler om de samme ordene.
 */
export function kapittelMetadata(kapittelId: string): Metadata {
  const kap = BOOK_CHAPTERS.find((c) => c.id === kapittelId);
  if (!kap) {
    // Kapittel-id-en er hardkodet i hver layout og kommer fra samme kilde som
    // rutemappa. Treffer vi ikke, er de to kommet ut av synk — da er en
    // generisk tittel bedre enn å kaste under bygg.
    return { title: 'Programmering i Python' };
  }

  const niva = getLevelDisplayName(kap.level);
  const tittel = `${kap.number} ${kap.title} | Python ${niva}`;

  return {
    // `absolute` fordi tittelmalen fra rotoppsettet ikke når hit: når
    // ./layout.tsx setter sin egen tittel som ren streng, sluttet malen
    // «%s | Skolesaga» å kaskadere nedover. Uten dette het kapitlene
    // «11.1 Numerisk integrasjon | Python R2» mens resten av siden følger
    // «<kapittel> | <fag> | Skolesaga». Merkenavnet settes derfor eksplisitt,
    // som også gjør tittelen uavhengig av framtidige malendringer.
    title: { absolute: `${tittel} | Skolesaga` },
    description: kap.description,
    ...pageMetadata({
      path: kap.url,
      title: tittel,
      description: kap.description,
      ogType: 'article',
    }),
  };
}
