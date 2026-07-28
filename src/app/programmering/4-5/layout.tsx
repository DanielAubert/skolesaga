import type { ReactNode } from 'react';
import type { Metadata } from 'next';

/**
 * ETTERLATT UTKAST — bevisst holdt utenfor indeksen.
 *
 * «Numerisk integrasjon og rekursjon» er en tidligere sammenslått utgave av
 * stoffet som senere ble splittet i fire kapitler:
 *
 *     11-1  Numerisk integrasjon
 *     11-2  Trapesmetoden og Simpson
 *     11-3  Rekursive følger
 *     11-4  Prosjekt – Arealer og volum
 *
 * Den står ikke i BOOK_CHAPTERS, er ikke lenket fra noe sted i grensesnittet,
 * og er bare nåbar ved å skrive adressen. Siden innholdet overlapper de fire
 * levende kapitlene, ville indeksering gitt Google duplikat å velge mellom —
 * og valget kunne falt på utkastet.
 *
 * Fila er ikke slettet fordi det er en redaksjonell avgjørelse, ikke en
 * teknisk. Skal den bort, slettes hele src/app/programmering/4-5/.
 */
export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
