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


/**
 * Ordliste: hva sjangerkodene faktisk BETYR, per bok. Vises øverst i tooltipen
 * slik at badgen forklarer seg selv (produkteier-krav: «RED» alene sier ingenting).
 * Tekstene er destillert fra bøkenes egne sjangerkapitler (Del 0).
 */
const GENRE_GLOSSARY: Record<string, Record<string, string>> = {
  stv1100: {
    RED: 'Redegjørelse — «gjør rede for X»: plasser tenkeren og spørsmålet, og gjengi posisjonen trinnvis med pensumets kjernebegreper, presist og pensumnært.',
    SIT: 'Sitattolkning — parafraser utdraget med egne ord, identifiser funksjonen (premiss, innvending eller konklusjon) og knytt det til riktig tenker og begrep.',
    SAM: 'Sammenligning — presis redegjørelse for begge posisjoner, deretter eksplisitte likheter og forskjeller langs klare dimensjoner.',
    ANV: 'Anvendelse — bruk teorien på et konkret tilfelle: hent det relevante begrepet og vis hva tenkeren ville ment om akkurat denne situasjonen.',
    HYB: 'Drøftingshybrid — solid redegjørelse først (vektes tyngst), deretter én til to innvendinger med kort selvstendig vurdering.',
  },
  econ1310: {
    C: 'Telleregelen — klassifiser eller tell poster etter nasjonalregnskapets definisjoner (liten kortsvarssjanger).',
    D: 'Parametertolkning — forklar den økonomiske betydningen av en modellparameter i klartekst.',
    E: 'Komparativ statikk — «vis matematisk» hva som skjer med en endogen størrelse når en eksogen endres.',
    L: 'Teoridrøfting — verbal drøfting i ren tekst uten matematikk.',
    M: 'Rollecase — du spiller en rolle (typisk økonomisk rådgiver) og argumenterer for et politikkvalg.',
  },
};

/** Slår opp forklaring for en badge-etikett («RED», «Sjanger D») i ordlista. */
function glossaryFor(label: string, courseId?: string): string | null {
  if (!courseId) return null;
  const book = GENRE_GLOSSARY[courseId];
  if (!book) return null;
  const key = label.replace(/^Sjanger\s+/, '').trim();
  return book[key] ?? null;
}

export function extractGenreTag(task: string, courseId?: string): GenreTag | null {
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

  // Bygg tooltip: forklaring fra ordlista først, deretter oppgavens egen
  // forankring — men bare hvis den tilfører noe utover selve etiketten
  // (unngå tautologier som «Eksamenssjanger RED.»).
  const annotation = inner.trim();
  const explanation = glossaryFor(label, courseId);
  const stripped = annotation
    .replace(/^Eksamenssjanger\s+/i, '')
    .replace(/^Sjanger\s+/i, '')
    .replace(label.replace('…', ''), '')
    .replace(/^[\s.—:-]+|[\s.—:-]+$/g, '');
  const annotationAddsInfo = stripped.length > 8;

  let tooltip: string;
  if (explanation && annotationAddsInfo) tooltip = explanation + '\n\n' + annotation;
  else if (explanation) tooltip = explanation;
  else tooltip = annotation;

  return { label, tooltip, rest };
}
