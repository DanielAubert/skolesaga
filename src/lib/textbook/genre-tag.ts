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
    RED: 'RED = Redegjørelse. Oppgaven ber deg forklare en teori eller et begrep. Si kort hvem tenkeren er og hvilket spørsmål det handler om, og forklar så standpunktet steg for steg med de viktigste begrepene fra pensum.',
    SIT: 'SIT = Sitattolkning. Du får et sitat og skal forklare med egne ord hva det sier, hvilken rolle det spiller i argumentet (premiss, innvending eller konklusjon), og hvilken tenker og hvilket begrep det hører til.',
    SAM: 'SAM = Sammenligning. Sett to tenkere eller begreper opp mot hverandre: forklar hver av dem kort, og pek tydelig på hva som er likt og hva som er forskjellig.',
    ANV: 'ANV = Anvendelse. Bruk teorien på et konkret eksempel: finn begrepet som passer, og vis hva tenkeren ville sagt om akkurat denne situasjonen.',
    HYB: 'HYB = Drøftingshybrid. Forklar først teorien grundig (det teller mest), og løft deretter én til to innvendinger med en kort egen vurdering.',
  },
  econ1310: {
    C: 'Sjanger C = Telleregelen. Kort oppgave der du skal plassere eller telle poster riktig etter nasjonalregnskapets definisjoner.',
    D: 'Sjanger D = Parametertolkning. Forklar med vanlige ord hva en parameter i modellen betyr økonomisk.',
    E: 'Sjanger E = Komparativ statikk. Vis matematisk hva som skjer med en størrelse i modellen når noe utenfor modellen endres.',
    L: 'Sjanger L = Teoridrøfting. Ren tekstoppgave uten matematikk der du drøfter et økonomisk spørsmål.',
    M: 'Sjanger M = Rollecase. Du er økonomisk rådgiver og skal anbefale og begrunne et politikkvalg.',
  },
}

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

  // Når vi har en forklaring, er «Eksamenssjanger RED —»-delen av annotasjonen
  // overflødig — vis bare det oppgavespesifikke, tydelig merket.
  const specific = annotation
    .replace(/^(Eksamenssjanger|Sjanger)\s+[A-ZÆØÅ]+\s*[—:.-]?\s*/i, '')
    .trim();

  let tooltip: string;
  if (explanation && annotationAddsInfo && specific)
    tooltip = explanation + '\n\nOm denne oppgaven: ' + specific;
  else if (explanation) tooltip = explanation;
  else tooltip = annotation;

  return { label, tooltip, rest };
}
