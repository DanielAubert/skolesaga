/**
 * Trekker ut et ledende «sjanger-/drill-prefiks» i parentes fra en oppgavetekst,
 * slik at det kan vises som en liten badge i stedet for i brødteksten.
 *
 * Eksempler på prefikser som fanges:
 *   «(Eksamenssjanger RED — Pettit, gjenganger 5/8 sett. …) Definer …»
 *   «(Sjanger D — parametertolkning …) Forklar …»
 *   «(Kravsanalyse-drill — …) Les …»
 *   «(Typetilfelle: avtalebinding — …) …»
 *   «(Skjult delspørsmål-drill: § 4 (2).) …»   ← nestede parenteser
 *   «(Kontrollspørsmål — …) …»
 *
 * Ikke alle oppgaver som starter med «(» er sjanger-prefiks (f.eks. en oppgave
 * som starter med et matematisk uttrykk i parentes), derfor gate på nøkkelord.
 */

export interface GenreTag {
  /** Kort tekst til badgen, f.eks. «RED», «Sjanger D», «Kravsanalyse-drill». */
  label: string;
  /** Hele parentes-innholdet (uten ytterparentesene) – vises som tooltip. */
  tooltip: string;
  /** Oppgaveteksten uten prefikset (trimmet). */
  rest: string;
}

/**
 * Nøkkelord-gate: innholdet i den ledende parentesen må matche ett av disse
 * mønstrene for at det skal regnes som et sjanger-prefiks. Ellers lar vi
 * teksten stå urørt (returnerer null).
 */
const GATE =
  /^(Eksamenssjanger|Sjanger\s|[A-ZÆØÅ«»][\wÆØÅæøå«»\-. ]*?drill\b|Typetilfelle|Kontrollspørsmål|Trener[\s:]|Eksamensnivå|Eksamensstil|(Fullt )?[Mm]inipraktikum|Faktumvariant|Variant\s|Feilvaksine|Kalibrering|Metodepoeng|Fra kap\.|Skjult delspørsmål|Avvisningsøvelse|Begrepskontroll|Feilfinning|Feil dom|Rettskilde|Tolkning\b|Uklarhetsregelen|Ugyldighet|Grunnvilkår|Grunnsteget|Medvirkning\b|Kollisjon\b|To spor|Hevingssperren|Vesentlighetsvurdering|Tilknytningsvilkåret|Adekvans|Kravssubjekt|Affeksjonsverdi|Tapsbegrensning|Lemping|«[^»]+»|§\s?\d)/u;

const MAX_LABEL = 24;

/**
 * Finner lengden på en ledende, balansert parentes-gruppe.
 * Returnerer indeksen RETT ETTER den avsluttende «)», eller -1 hvis teksten
 * ikke starter med en balansert parentes.
 * Håndterer nestede parenteser, f.eks. «(Skjult delspørsmål-drill: § 4 (2).)».
 */
function balancedParenEnd(s: string): number {
  if (s[0] !== '(') return -1;
  let depth = 0;
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (ch === '(') depth++;
    else if (ch === ')') {
      depth--;
      if (depth === 0) return i + 1;
    }
  }
  return -1; // ubalansert
}

/**
 * Lager en kort badge-etikett fra parentes-innholdet.
 * Regel: teksten før første « — » eller «:», med «Eksamenssjanger »-prefikset
 * strippet; maks ~24 tegn, ellers kutt ved ordgrense.
 */
function makeLabel(inner: string): string {
  // Del ved første « — » (em-dash med mellomrom) eller «:».
  let head = inner;
  const dashIdx = head.indexOf(' — ');
  const colonIdx = head.indexOf(':');
  let cut = -1;
  if (dashIdx !== -1) cut = dashIdx;
  if (colonIdx !== -1 && (cut === -1 || colonIdx < cut)) cut = colonIdx;
  if (cut !== -1) head = head.slice(0, cut);

  head = head.trim();

  // Strip «Eksamenssjanger »-prefikset: «Eksamenssjanger RED» → «RED».
  head = head.replace(/^Eksamenssjanger\s+/, '');

  // Fjern eventuell avsluttende punktum.
  head = head.replace(/\.$/, '').trim();

  if (head.length <= MAX_LABEL) return head;

  // Kutt ved ordgrense innenfor maks-lengden.
  const clipped = head.slice(0, MAX_LABEL);
  const lastSpace = clipped.lastIndexOf(' ');
  const base = lastSpace > 0 ? clipped.slice(0, lastSpace) : clipped;
  return base.trimEnd() + '…';
}

export function extractGenreTag(task: string): GenreTag | null {
  if (!task) return null;
  const trimmed = task.trimStart();
  if (trimmed[0] !== '(') return null;

  const end = balancedParenEnd(trimmed);
  if (end === -1) return null;

  const inner = trimmed.slice(1, end - 1); // uten ytterparentesene
  if (!GATE.test(inner.trimStart())) return null;

  const rest = trimmed.slice(end).trim();
  const label = makeLabel(inner.trimStart());
  if (!label) return null;

  return { label, tooltip: inner.trim(), rest };
}
