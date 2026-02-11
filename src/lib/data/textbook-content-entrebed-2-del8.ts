/* eslint-disable */
// @ts-nocheck
/**
 * Entreprenorskap og bedriftsutvikling 2 (VG3) - Del 8: Studentbedrift og fordypning
 * Kapittel 8.1-8.5
 *
 * Dekker LK20 kompetansemål:
 * - drive en studentbedrift med strategisk planlegging, vekst og utvidelse
 * - utarbeide forretningsrapport og årsregnskap for studentbedrift
 * - delta på messer og konkurranser for studentbedrifter
 * - planlegge og gjennomføre avvikling eller videreføring av en bedrift
 * - reflektere over erfaringsbasert læring og bygge en profesjonell portfølje
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Avansert studentbedrift
// ============================================================================

export const CHAPTER_ENTREBED_2_8_1: TextbookChapter = {
  id: 'entrebed-2-8-1',
  courseId: 'entrebed-2',
  chapterNumber: '8.1',
  title: 'Avansert studentbedrift',
  description: 'Lær om strategisk drift av studentbedriften, hvordan du planlegger vekst og utvidelse, og hvordan du bruker verktøy for å ta bedriften til neste nivå.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drive en studentbedrift med strategisk planlegging og langsiktig perspektiv',
    'vurdere muligheter for vekst og utvidelse av studentbedriften',
  ],
  content: [
    {
      id: 'eb2-8-1-intro',
      type: 'text',
      content: `## Fra oppstart til strategisk drift

Mange studentbedrifter starter med en god idé og mye entusiasme, men etter de første ukene kan det være utfordrende å holde momentum. Avansert studentbedrift handler om å løfte blikket fra daglig drift til strategisk tenkning: Hvor vil vi med bedriften? Hvordan kan vi vokse? Og hvordan sikrer vi at alle i teamet jobber mot samme mål?

I dette kapittelet skal du lære:
- Hvordan strategisk planlegging fungerer i praksis for en studentbedrift
- Verktøy for å analysere vekstmuligheter
- Hvordan skalere produktet eller tjenesten
- Hvordan håndtere utfordringer som oppstår i vekstfasen`,
    },
    {
      id: 'eb2-8-1-def-1',
      type: 'definition',
      title: 'Strategisk drift av studentbedrift',
      content: `**Strategisk drift** innebærer at bedriften tar bevisste valg om retning, ressursbruk og prioriteringer basert på analyser og langsiktige mål.

**Sentrale elementer i strategisk drift:**

1. **Visjon og misjon:** Hva er bedriftens langsiktige ambisjon (visjon), og hva er dens formål og eksistensgrunnlag (misjon)?

2. **Strategiske mål:** Konkrete, målbare mål for semesteret eller skoleåret. Bruk SMART-modellen (Spesifikke, Målbare, Aksepterte, Realistiske, Tidsbestemte).

3. **Handlingsplaner:** Konkrete tiltak med tidsfrister og ansvarsfordeling for å nå målene.

4. **Oppfølging og evaluering:** Regelmessige statusmøter der fremgang måles mot planene.

**Verktøy for strategisk analyse:**
- **SWOT-analyse:** Kartlegg styrker, svakheter, muligheter og trusler
- **Ansoffs vekstmatrise:** Identifiser vekststrategier (markedspenetrering, markedsutvikling, produktutvikling, diversifisering)
- **Porters fem krefter:** Analyser konkurransesituasjonen i markedet`,
    },
    {
      id: 'eb2-8-1-example-1',
      type: 'example',
      title: 'Eksempel: Strategisk planlegging i en studentbedrift',
      problem: 'Studentbedriften «GrøntSnacks SB» selger sunne snackbokser til elever på skolen. Etter to måneder har de god omsetning, men salget har flatet ut. Hvordan kan de bruke strategisk planlegging for å ta bedriften videre?',
      solution: `**Steg 1 - SWOT-analyse:**
- **Styrker:** Godt produkt, lojale kunder, lavt kostnadsnivå
- **Svakheter:** Begrenset produksjonskapasitet, kun én salgskanal (skolens kantine)
- **Muligheter:** Andre skoler i nærområdet, lærere som kunder, online bestilling
- **Trusler:** Kantinen kan begynne å selge lignende produkter, sesongvariasjoner

**Steg 2 - SMART-mål:**
«Øke ukentlig omsetning fra 3 000 kr til 5 000 kr innen 8 uker ved å åpne to nye salgskanaler.»

**Steg 3 - Ansoffs vekstmatrise:**
- **Markedspenetrering:** Tilby «abonnementsordning» til eksisterende kunder
- **Markedsutvikling:** Selge på to naboskoler
- **Produktutvikling:** Lansere en premium-boks med proteinbar og smoothie

**Steg 4 - Handlingsplan:**
| Uke | Tiltak | Ansvarlig |
|-----|--------|-----------|
| 1-2 | Kontakte naboskoler om salgsavtale | Markeds-ansvarlig |
| 2-3 | Utvikle premium-boks og teste på fokusgruppe | Produktansvarlig |
| 3-4 | Lansere abonnementsordning med QR-bestilling | Daglig leder |
| 5-8 | Evaluere og justere etter resultater | Hele teamet |`,
    },
    {
      id: 'eb2-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-1-ex-1',
        number: '8.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva beskriver Ansoffs vekstmatrise?',
        options: [
          { id: 'a', text: 'Fire ulike lederstiler tilpasset medarbeidernes modenhet', isCorrect: false },
          { id: 'b', text: 'Fire strategier for vekst basert på marked og produkt', isCorrect: true },
          { id: 'c', text: 'Fem konkurransekrefter som påvirker en bransje', isCorrect: false },
          { id: 'd', text: 'Tre nivåer av organisasjonskultur', isCorrect: false },
        ],
        solution: 'Svar B er riktig. Ansoffs vekstmatrise beskriver fire vekststrategier: markedspenetrering (eksisterende produkt i eksisterende marked), markedsutvikling (eksisterende produkt i nytt marked), produktutvikling (nytt produkt i eksisterende marked) og diversifisering (nytt produkt i nytt marked).',
      },
    },
    {
      id: 'eb2-8-1-def-2',
      type: 'definition',
      title: 'Vekst og skalering',
      content: `**Vekst** i en studentbedrift kan skje på flere måter:

**Organisk vekst:** Gradvis økning i omsetning gjennom flere kunder, høyere priser eller nye produkter. Dette er den vanligste formen i studentbedrifter.

**Skalering:** Å øke omsetningen betydelig uten at kostnadene øker proporsjonalt. For en studentbedrift kan dette bety:
- Automatisere bestillingsprosessen (nettbutikk, QR-bestilling)
- Gå fra fysisk til digital leveranse
- Lisensiere produktet/konseptet til andre skoler

**Vekstutfordringer i studentbedrifter:**

| Utfordring | Løsning |
|------------|---------|
| Begrenset tid (skole + SB) | Prioriter ruthless - fokuser på det som gir mest verdi |
| Begrenset kapital | Bruk bootstrapping og kreative løsninger |
| Teamkonflikter ved press | Tydelige roller, regelmessige møter, åpen kommunikasjon |
| Kvalitet ved vekst | Standardiser prosesser, lag sjekklister og maler |
| Motivasjonsfall | Feir milepæler, roter oppgaver, sett kortsiktige mål |

**KPI-er for studentbedriften:**
- Omsetning per uke/måned
- Antall kunder
- Kundetilfredshet (enkel spørreundersøkelse)
- Fortjenestemargin
- Teamtilfredshet`,
    },
    {
      id: 'eb2-8-1-example-2',
      type: 'example',
      title: 'Eksempel: Skalering av studentbedrift',
      problem: 'Studentbedriften «DesignIT SB» lager logoer og grafisk design for lokale bedrifter. De har tre designere og får flere henvendelser enn de klarer å håndtere. Hvordan kan de skalere?',
      solution: `**Analyse av flaskehals:**
Hver designer bruker mye tid på kundemøter, revisjoner og administrasjon. Selve designarbeidet utgjør bare 40 % av tiden.

**Skaleringsstrategi:**

1. **Standardisere prosessen:**
   - Lage designpakker med faste priser (Logo Basic, Logo Premium, Komplett profil)
   - Bruke et standardisert spørreskjema for å forstå kundens behov uten lange møter
   - Sette maks antall revisjoner per pakke

2. **Effektivisere med verktøy:**
   - Bruke prosjektstyringsverktøy (Trello/Notion) for å holde oversikt
   - Lage maler som utgangspunkt for vanlige oppdrag
   - Automatisere fakturering

3. **Utvide kapasiteten:**
   - Rekruttere én ekstra designer fra skolen
   - Samarbeide med IT-linjen for nettside-oppdrag (utvidet tjenestetilbud)

4. **Øke inntekt per kunde:**
   - Tilby vedlikeholdsavtale for grafisk profil
   - Selge tilleggstjenester som visittkort og brevark

**Resultat:** Med standardiserte pakker og effektive verktøy kan DesignIT SB doble kapasiteten uten å doble arbeidstimene.`,
    },
    {
      id: 'eb2-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-1-ex-2',
        number: '8.1.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva innebærer skalering i en bedrift?',
        options: [
          { id: 'a', text: 'At bedriften ansetter flere medarbeidere i takt med omsetningsvekst', isCorrect: false },
          { id: 'b', text: 'At omsetningen øker uten at kostnadene øker proporsjonalt', isCorrect: true },
          { id: 'c', text: 'At bedriften ekspanderer til utenlandske markeder', isCorrect: false },
          { id: 'd', text: 'At bedriften reduserer prisene for å vinne markedsandeler', isCorrect: false },
        ],
        solution: 'Svar B er riktig. Skalering betyr at bedriften kan øke omsetningen betydelig uten at kostnadene øker i samme takt. Dette oppnås gjennom effektivisering, automatisering og standardisering av prosesser.',
      },
    },
    {
      id: 'eb2-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-1-ex-3',
        number: '8.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjennomfør en SWOT-analyse for din egen studentbedrift (eller en fiktiv studentbedrift). Identifiser minst to punkter for hver kategori, og forklar hvordan dere kan utnytte styrkene og mulighetene for å motvirke svakhetene og truslene.',
        hints: ['Tenk på hva dere er gode på internt (styrker) og hva som begrenser dere (svakheter)', 'Se på eksterne faktorer: hvilke muligheter finnes i markedet, og hva kan true bedriften?'],
        solution: 'Eksempel for en studentbedrift som selger håndlagde smykker: Styrker - unikt design, lav produksjonskostnad. Svakheter - begrenset produksjonstid, avhengig av én designer. Muligheter - julemarkeder, Instagram-markedsføring, samarbeid med lokale butikker. Trusler - billigere masseproduserte smykker, sesongavhengig etterspørsel. Strategi: Bruke styrkene (unikt design) til å utnytte mulighetene (sosiale medier for å nå flere kunder), og motvirke truslene (konkurranse fra masseprodusert) ved å fremheve håndlaget kvalitet og unik historie.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-1-ex-4',
        number: '8.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk Ansoffs vekstmatrise til å identifisere fire konkrete vekststrategier for en studentbedrift som selger hjemmebakte kaker på skolen. Beskriv hva hver strategi innebærer og vurder hvilken som er mest realistisk.',
        hints: ['Husk de fire kvadrantene: markedspenetrering, markedsutvikling, produktutvikling og diversifisering', 'Tenk på hva som er eksisterende vs. nytt marked og eksisterende vs. nytt produkt'],
        solution: 'Markedspenetrering (eksisterende produkt, eksisterende marked): Selge flere kaker på skolen ved å tilby smaksprøver, lojalitetskort eller spesialtilbud. Markedsutvikling (eksisterende produkt, nytt marked): Selge kaker på naboskoler, lokale arrangementer eller til bedrifter i nærområdet. Produktutvikling (nytt produkt, eksisterende marked): Utvide sortimentet med smoothies, cookies eller cateringpakker til skolearrangementer. Diversifisering (nytt produkt, nytt marked): Starte bakekurs for ungdom eller selge oppskriftsbøker digitalt. Mest realistisk: Markedspenetrering, fordi det krever minst ressurser og bygger på eksisterende kunderelasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-1-ex-5',
        number: '8.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Lag en strategisk plan for din studentbedrift (eller en fiktiv SB) for de neste 12 ukene. Planen skal inneholde: 1) Visjon og misjon, 2) Tre SMART-mål, 3) SWOT-analyse, 4) Handlingsplan med milepæler, og 5) KPI-er dere vil følge opp.',
        hints: ['Start med visjonen - hvor vil dere være om 12 uker?', 'Bruk SMART-modellen for å sikre at målene er konkrete og målbare'],
        solution: 'Eksempel: Visjon: «Bli den foretrukne leverandøren av sunne lunsjalternativer for elever i kommunen.» Misjon: «Vi gjør det enkelt og rimelig å spise sunt på skolen.» SMART-mål 1: Øke ukentlig omsetning fra 2 000 til 4 000 kr innen uke 8. SMART-mål 2: Oppnå 90 % kundetilfredshet (målt med spørreundersøkelse) innen uke 6. SMART-mål 3: Åpne salg på én naboskole innen uke 10. SWOT: Styrker - godt produkt, lavt kostnadsnivå. Svakheter - begrenset tid, avhengig av manuell produksjon. Muligheter - økende helsetrend, lite konkurranse. Trusler - kantineendringer, sesongvariasjoner. Handlingsplan: Uke 1-2: Markedsundersøkelse naboskole. Uke 3-4: Abonnementsordning. Uke 5-6: Kundeundersøkelse. Uke 7-8: Evaluering og justering. Uke 9-10: Lansering naboskole. Uke 11-12: Oppsummering og rapportering. KPI-er: Ukentlig omsetning, antall kunder, kundetilfredshet, fortjenestemargin.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-8-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-1-ex-6',
        number: '8.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Studentbedriften deres har nådd et platå der omsetningen ikke lenger vokser. Skriv et notat til styret der du analyserer situasjonen og foreslår tre konkrete tiltak for å bryte gjennom platået. Bruk relevant teori fra kapittelet.',
        hints: ['Et platå kan skyldes mettet marked, manglende innovasjon eller interne flaskehalser', 'Bruk SWOT og Ansoffs matrise som rammeverk for analysen'],
        solution: 'Notat til styret: Analyse - Omsetningen har vært stabil på 3 500 kr/uke i fire uker. Årsaker: 1) Vi har nådd de fleste potensielle kundene på skolen (markedsmetning). 2) Produktsortimentet har ikke endret seg (manglende innovasjon). 3) Bestillingsprosessen er tungvinn (intern flaskehals). Tiltak 1 - Markedsutvikling (Ansoff): Kontakte tre naboskoler for å inngå salgsavtaler. Estimert effekt: +1 500 kr/uke. Tiltak 2 - Produktutvikling (Ansoff): Lansere to nye produkter basert på kundetilbakemeldinger. Estimert effekt: +800 kr/uke. Tiltak 3 - Effektivisering (skalering): Innføre QR-basert bestillingssystem for å redusere tidskostnader og øke kundeopplevelsen. Estimert effekt: 20 % tidsbesparelse i bestillingshåndtering. Konklusjon: Med disse tiltakene er målet å øke omsetningen til 5 500 kr/uke innen seks uker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-8-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Strategisk drift** handler om bevisste valg om retning, ressursbruk og prioriteringer basert på analyser
- **SWOT-analyse** kartlegger styrker, svakheter, muligheter og trusler
- **Ansoffs vekstmatrise** gir fire strategier for vekst: markedspenetrering, markedsutvikling, produktutvikling og diversifisering
- **Skalering** betyr å øke omsetningen uten at kostnadene øker proporsjonalt
- **KPI-er** brukes for å måle og følge opp fremdrift mot strategiske mål

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Strategisk drift | Bevisste valg om retning og ressursbruk basert på analyse |
| SMART-mål | Spesifikke, Målbare, Aksepterte, Realistiske, Tidsbestemte mål |
| Ansoffs vekstmatrise | Fire vekststrategier basert på kombinasjonen av marked og produkt |
| Skalering | Øke omsetning uten proporsjonal kostnadsøkning |
| KPI | Key Performance Indicator - nøkkeltall for å måle prestasjon |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 8.2: Forretningsrapport og regnskap
// ============================================================================

export const CHAPTER_ENTREBED_2_8_2: TextbookChapter = {
  id: 'entrebed-2-8-2',
  courseId: 'entrebed-2',
  chapterNumber: '8.2',
  title: 'Forretningsrapport og regnskap',
  description: 'Lær å utarbeide årsregnskap og forretningsrapport for studentbedriften, gjennomføre enkel regnskapsanalyse og presentere bedriftens økonomiske resultater.',
  estimatedMinutes: 20,
  competenceGoals: [
    'utarbeide årsregnskap og forretningsrapport for studentbedrift',
    'gjennomføre enkel regnskapsanalyse og tolke økonomiske nøkkeltall',
  ],
  content: [
    {
      id: 'eb2-8-2-intro',
      type: 'text',
      content: `## Økonomi og dokumentasjon i studentbedriften

En sentral del av studentbedriftens arbeid er å dokumentere den økonomiske virksomheten. Årsregnskapet og forretningsrapporten er ikke bare krav fra Ungt Entreprenørskap - de er viktige verktøy for å forstå bedriftens økonomiske helse og kommunisere resultater til eiere, veiledere og jury på messer.

I dette kapittelet skal du lære:
- Hvordan du setter opp et årsregnskap for studentbedriften
- Hvordan du skriver en profesjonell forretningsrapport
- Grunnleggende regnskapsanalyse med nøkkeltall
- Hvordan du presenterer økonomi på en forståelig måte`,
    },
    {
      id: 'eb2-8-2-def-1',
      type: 'definition',
      title: 'Årsregnskap for studentbedrift',
      content: `**Årsregnskapet** gir et bilde av studentbedriftens økonomiske stilling og resultat. Det består av to hoveddeler:

**1. Resultatregnskap** - viser inntekter og kostnader i perioden:
\`\`\`
Salgsinntekter                          25 000 kr
- Varekostnad                           -8 000 kr
= Bruttofortjeneste                     17 000 kr
- Driftskostnader
  Markedsføring                         -2 000 kr
  Materiell og utstyr                   -1 500 kr
  Diverse kostnader                       -500 kr
= Driftsresultat                        13 000 kr
- Finanskostnader                         -200 kr
= Resultat før skatt                    12 800 kr
\`\`\`

**2. Balanse** - viser eiendeler, gjeld og egenkapital på et tidspunkt:
\`\`\`
EIENDELER                    | EGENKAPITAL OG GJELD
Bankinnskudd    14 300 kr    | Aksjekapital       2 000 kr
Varelager        1 500 kr    | Opptjent EK       12 800 kr
Kundefordringer  1 000 kr    | Leverandørgjeld     2 000 kr
-----------------------------|-----------------------------
Sum eiendeler   16 800 kr    | Sum EK og gjeld    16 800 kr
\`\`\`

**Viktig prinsipp:** Balansen skal alltid balansere - eiendeler = egenkapital + gjeld.`,
    },
    {
      id: 'eb2-8-2-example-1',
      type: 'example',
      title: 'Eksempel: Resultatregnskap for GrøntSnacks SB',
      problem: 'GrøntSnacks SB har drevet i ett skoleår. De har hatt salgsinntekter på 42 000 kr, varekostnad på 15 000 kr, markedsføringskostnader på 3 000 kr, emballasje på 2 500 kr, diverse kostnader på 1 500 kr, og renteinntekter på 200 kr. Sett opp resultatregnskapet og beregn resultatet.',
      solution: `**Resultatregnskap for GrøntSnacks SB (skoleåret 2025/26):**

| Post | Beløp |
|------|-------|
| Salgsinntekter | 42 000 kr |
| - Varekostnad | -15 000 kr |
| **= Bruttofortjeneste** | **27 000 kr** |
| - Markedsføring | -3 000 kr |
| - Emballasje | -2 500 kr |
| - Diverse kostnader | -1 500 kr |
| **= Driftsresultat** | **20 000 kr** |
| + Renteinntekter | +200 kr |
| **= Resultat før skatt** | **20 200 kr** |

**Bruttofortjenestemargin:** 27 000 / 42 000 = 64,3 %
**Driftsmargin:** 20 000 / 42 000 = 47,6 %

GrøntSnacks SB har et svært godt resultat med høy bruttomargin. Det betyr at de har god avanse på produktene sine og holder driftskostnadene lave.`,
    },
    {
      id: 'eb2-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-2-ex-1',
        number: '8.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva viser et resultatregnskap?',
        options: [
          { id: 'a', text: 'Bedriftens eiendeler og gjeld på et bestemt tidspunkt', isCorrect: false },
          { id: 'b', text: 'Bedriftens inntekter og kostnader i en bestemt periode', isCorrect: true },
          { id: 'c', text: 'Bedriftens kontantstrøm gjennom året', isCorrect: false },
          { id: 'd', text: 'Bedriftens budsjett for neste periode', isCorrect: false },
        ],
        solution: 'Svar B er riktig. Resultatregnskapet viser bedriftens inntekter og kostnader i en bestemt periode (f.eks. et skoleår), og resultatet (overskudd eller underskudd) er differansen mellom inntekter og kostnader.',
      },
    },
    {
      id: 'eb2-8-2-def-2',
      type: 'definition',
      title: 'Forretningsrapport og regnskapsanalyse',
      content: `**Forretningsrapporten** er studentbedriftens viktigste dokumentasjon. Den oppsummerer hele bedriftens historie, drift og resultater.

**Innhold i forretningsrapporten:**

1. **Forside og innholdsfortegnelse**
2. **Sammendrag** - kort oppsummering av hele rapporten
3. **Forretningsidé og mål** - hva bedriften gjør og hva den ønsket å oppnå
4. **Organisasjon og team** - rollfordeling, samarbeid, organisasjonskart
5. **Marked og markedsføring** - kundegrupper, konkurranseanalyse, markedsføringstiltak
6. **Økonomi** - regnskap, budsjett vs. resultat, nøkkeltall
7. **Bærekraft og samfunnsansvar** - miljø, sosiale hensyn, etikk
8. **Erfaringer og læring** - hva gikk bra, hva kunne vært bedre, personlig utvikling
9. **Vedlegg** - regnskap, bilder, kundeanmeldelser, presseklipp

**Nøkkeltall for regnskapsanalyse:**

| Nøkkeltall | Formel | Hva det forteller |
|------------|--------|-------------------|
| Bruttofortjenestemargin | (Salgsinntekt - Varekost) / Salgsinntekt × 100 | Hvor mye som er igjen etter varekostnad |
| Driftsmargin | Driftsresultat / Salgsinntekt × 100 | Lønnsomheten av selve driften |
| Totalkapitalrentabilitet | Resultat / Totalkapital × 100 | Avkastning på all investert kapital |
| Egenkapitalandel | Egenkapital / Totalkapital × 100 | Bedriftens soliditet |`,
    },
    {
      id: 'eb2-8-2-example-2',
      type: 'example',
      title: 'Eksempel: Regnskapsanalyse av studentbedrift',
      problem: 'DesignIT SB har følgende tall: Salgsinntekter 55 000 kr, varekostnad 5 000 kr, driftskostnader 18 000 kr, driftsresultat 32 000 kr, totalkapital 38 000 kr, egenkapital 34 000 kr, gjeld 4 000 kr. Beregn og tolk nøkkeltallene.',
      solution: `**Beregning av nøkkeltall:**

**Bruttofortjenestemargin:**
(55 000 - 5 000) / 55 000 × 100 = **90,9 %**
Tolkning: Svært høy margin fordi tjenestebedrifter har lave varekostnader.

**Driftsmargin:**
32 000 / 55 000 × 100 = **58,2 %**
Tolkning: Meget god lønnsomhet. Over halvparten av inntektene blir til overskudd.

**Totalkapitalrentabilitet:**
32 000 / 38 000 × 100 = **84,2 %**
Tolkning: Svært høy avkastning på investert kapital. Typisk for studentbedrifter med lave kapitalbehov.

**Egenkapitalandel:**
34 000 / 38 000 × 100 = **89,5 %**
Tolkning: Bedriften er svært solid med liten gjeld. Egenkapitalandelen er langt over det som regnes som sunt (over 30 %).

**Samlet vurdering:** DesignIT SB har svært gode økonomiske resultater. Den høye bruttomarginen er typisk for tjenestebedrifter, og den høye egenkapitalandelen viser at bedriften er finansielt robust.`,
    },
    {
      id: 'eb2-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-2-ex-2',
        number: '8.2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En studentbedrift har salgsinntekter på 30 000 kr, varekostnad på 12 000 kr og driftsresultat på 10 000 kr. Hva er driftsmarginen?',
        options: [
          { id: 'a', text: '60 %', isCorrect: false },
          { id: 'b', text: '40 %', isCorrect: false },
          { id: 'c', text: '33,3 %', isCorrect: true },
          { id: 'd', text: '83,3 %', isCorrect: false },
        ],
        solution: 'Svar C er riktig. Driftsmargin = Driftsresultat / Salgsinntekter × 100 = 10 000 / 30 000 × 100 = 33,3 %. Det betyr at 33,3 % av salgsinntektene blir til driftsresultat etter at alle driftskostnader er trukket fra.',
      },
    },
    {
      id: 'eb2-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-2-ex-3',
        number: '8.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sett opp et resultatregnskap for en fiktiv studentbedrift med følgende tall: Salgsinntekter 35 000 kr, varekostnad 10 000 kr, markedsføring 4 000 kr, utstyr 2 000 kr, diverse kostnader 1 000 kr, og renteinntekter 150 kr. Beregn bruttofortjeneste, driftsresultat og resultat før skatt.',
        hints: ['Bruttofortjeneste = salgsinntekter minus varekostnad', 'Driftsresultat = bruttofortjeneste minus alle driftskostnader'],
        solution: 'Resultatregnskap: Salgsinntekter 35 000 kr - Varekostnad 10 000 kr = Bruttofortjeneste 25 000 kr. Driftskostnader: Markedsføring 4 000 kr + Utstyr 2 000 kr + Diverse 1 000 kr = 7 000 kr. Driftsresultat = 25 000 - 7 000 = 18 000 kr. Renteinntekter +150 kr. Resultat før skatt = 18 150 kr. Bruttofortjenestemargin = 25 000/35 000 × 100 = 71,4 %. Driftsmargin = 18 000/35 000 × 100 = 51,4 %.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-2-ex-4',
        number: '8.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom resultatregnskap og balanse. Hvorfor er begge viktige for å forstå en bedrifts økonomi? Bruk gjerne eksempler fra en studentbedrift.',
        hints: ['Tenk på resultatregnskapet som en film (viser en periode) og balansen som et fotografi (viser et tidspunkt)', 'En bedrift kan ha godt resultat men dårlig likviditet - hvorfor?'],
        solution: 'Resultatregnskapet viser inntekter og kostnader over en periode og forteller om bedriften har gått med overskudd eller underskudd. Det er som en film av økonomien. Balansen viser eiendeler, gjeld og egenkapital på et bestemt tidspunkt og forteller om bedriftens finansielle stilling. Det er som et fotografi. Begge er viktige: En studentbedrift kan ha godt resultat (høy omsetning og lavt kostnadsnivå), men likevel ha dårlig likviditet hvis pengene er bundet i varelager eller kundefordringer. Resultatregnskapet viser lønnsomheten, mens balansen viser soliditeten. Eksempel: SB har 20 000 kr i overskudd (resultatregnskap), men bare 3 000 kr på konto fordi 17 000 kr er bundet i usolgt varelager (balanse).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-2-ex-5',
        number: '8.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Skriv et utkast til økonomidelen av forretningsrapporten for din studentbedrift (eller en fiktiv SB). Inkluder: resultatregnskap, balanse, beregning av minst tre nøkkeltall, og en kort analyse der du tolker tallene.',
        hints: ['Bruk tabellformat for resultatregnskap og balanse', 'Husk å forklare hva nøkkeltallene betyr, ikke bare beregne dem'],
        solution: 'Eksempel: Økonomidel for SmartLogo SB. Resultatregnskap: Salgsinntekter 48 000 kr, varekostnad 6 000 kr, bruttofortjeneste 42 000 kr, driftskostnader 14 000 kr, driftsresultat 28 000 kr. Balanse: Eiendeler - bank 26 000 kr, fordringer 4 000 kr, sum 30 000 kr. EK og gjeld - aksjekapital 2 000 kr, opptjent EK 28 000 kr, sum 30 000 kr. Nøkkeltall: Bruttomargin 87,5 % (svært høy, typisk for tjenestebedrift), driftsmargin 58,3 % (god lønnsomhet), egenkapitalandel 100 % (ingen gjeld, svært solid). Analyse: SmartLogo SB har svært god lønnsomhet takket være lave varekostnader. Egenkapitalandelen på 100 % viser at bedriften er helt selvfinansiert. Utfordringen fremover er at vekst krever investering i markedsføring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-8-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-2-ex-6',
        number: '8.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Sammenlign budsjettet og det faktiske regnskapet for en studentbedrift. Identifiser avvik og forklar mulige årsaker. Hva ville du gjort annerledes basert på det du har lært?',
        hints: ['Lag en tabell med budsjetterte tall, faktiske tall og avvik', 'Skill mellom positive avvik (bedre enn budsjettert) og negative avvik (dårligere enn budsjettert)'],
        solution: 'Eksempel: Budsjett vs. regnskap for GrøntSnacks SB. Salgsinntekter: Budsjett 50 000 kr, Faktisk 42 000 kr, Avvik -8 000 kr (negativt - lavere salg enn forventet, trolig pga. ferie i mai). Varekostnad: Budsjett 20 000 kr, Faktisk 15 000 kr, Avvik +5 000 kr (positivt - bedre innkjøpsavtaler). Markedsføring: Budsjett 5 000 kr, Faktisk 3 000 kr, Avvik +2 000 kr (positivt - brukte mer gratismarkedsføring via sosiale medier). Driftsresultat: Budsjett 20 000 kr, Faktisk 20 000 kr, Avvik 0 kr. Analyse: Selv om salget var lavere enn budsjettert, klarte vi å holde driftsresultatet på mål takket være lavere kostnader. Lærdom: Vi burde ha budsjettert mer konservativt for salg, og bør starte markedsføring tidligere neste gang for å unngå sesongfall.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-8-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Årsregnskapet** består av resultatregnskap (inntekter og kostnader) og balanse (eiendeler, gjeld og egenkapital)
- **Forretningsrapporten** dokumenterer hele studentbedriftens historie, drift og resultater
- **Nøkkeltall** som bruttomargin, driftsmargin og egenkapitalandel gir innsikt i lønnsomhet og soliditet
- **Regnskapsanalyse** handler om å tolke tallene, ikke bare beregne dem
- Avviksanalyse mellom budsjett og regnskap er et viktig læringsverktøy

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Resultatregnskap | Oversikt over inntekter og kostnader i en periode |
| Balanse | Oversikt over eiendeler, gjeld og egenkapital på et tidspunkt |
| Bruttofortjenestemargin | Andel av omsetning som er igjen etter varekostnad |
| Driftsmargin | Andel av omsetning som blir til driftsresultat |
| Egenkapitalandel | Andel av totalkapitalen som er egenkapital |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 8.3: Messer og konkurranser
// ============================================================================

export const CHAPTER_ENTREBED_2_8_3: TextbookChapter = {
  id: 'entrebed-2-8-3',
  courseId: 'entrebed-2',
  chapterNumber: '8.3',
  title: 'Messer og konkurranser',
  description: 'Lær hvordan du forbereder studentbedriften til fylkesmesse, NM for studentbedrifter og internasjonale konkurranser. Forstå vurderingskriterier og presentasjonsteknikk.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forberede og gjennomføre presentasjon av studentbedriften på messer og konkurranser',
    'vurdere studentbedriften ut fra relevante konkurransekriterier',
  ],
  content: [
    {
      id: 'eb2-8-3-intro',
      type: 'text',
      content: `## Studentbedriften i rampelyset

Messer og konkurranser er høydepunktet i studentbedriftens år. Her får dere muligheten til å vise frem alt dere har jobbet med, konkurrere mot andre studentbedrifter og få verdifull tilbakemelding fra erfarne dommere.

I Norge arrangeres det fylkesmesser over hele landet, etterfulgt av NM for studentbedrifter. De beste kan gå videre til europeiske og internasjonale konkurranser gjennom JA Europe og JA Worldwide.

I dette kapittelet skal du lære:
- Hvordan messer og konkurranser er organisert
- Hvilke vurderingskriterier som brukes
- Hvordan du forbereder en vinnende presentasjon
- Tips for å gjøre det best mulig på stand og i intervju`,
    },
    {
      id: 'eb2-8-3-def-1',
      type: 'definition',
      title: 'Messer og konkurransestruktur',
      content: `**Konkurransesystemet for studentbedrifter i Norge:**

**1. Fylkesmesse (februar-mars):**
- Arrangeres av Ungt Entreprenørskap i hvert fylke
- Alle studentbedrifter i fylket kan delta
- Juryering med intervju, standvurdering og forretningsrapport
- Vinnere i ulike kategorier går videre til NM

**2. NM for studentbedrifter (april):**
- Nasjonalt mesterskap med de beste fra hver fylkesmesse
- Arrangeres over to dager med utstilling, presentasjoner og prisutdeling
- Kategorier inkluderer: Beste studentbedrift, Beste innovasjon, Beste bærekraft, Beste markedsføring m.fl.
- Vinnere kan representere Norge internasjonalt

**3. Internasjonale konkurranser:**
- **JA Europe Company of the Year:** Europeisk mesterskap med 40+ land
- **JA Worldwide Competition:** Global konkurranse
- Krever presentasjon på engelsk

**Vurderingsområder (typisk):**

| Område | Vekt | Hva vurderes |
|--------|------|--------------|
| Forretningsidé og innovasjon | 20 % | Originalitet, markedsbehov, verdiskapning |
| Gjennomføring og drift | 25 % | Organisering, økonomi, salg, produksjon |
| Markedsføring og salg | 15 % | Strategi, kreativitet, resultater |
| Bærekraft og samfunnsansvar | 15 % | Miljø, sosiale hensyn, etikk |
| Presentasjon og stand | 15 % | Profesjonalitet, kommunikasjon, visuelt |
| Forretningsrapport | 10 % | Kvalitet, helhet, refleksjon |`,
    },
    {
      id: 'eb2-8-3-example-1',
      type: 'example',
      title: 'Eksempel: Forberedelse til fylkesmessen',
      problem: 'Studentbedriften «EcoWrap SB» lager bærekraftig innpakningspapir av resirkulerte materialer. De har tre uker til fylkesmessen. Lag en forberedelsesplan.',
      solution: `**Forberedelsesplan for EcoWrap SB:**

**Uke 1 - Dokumentasjon og strategi:**
- Ferdigstille forretningsrapporten (alle må lese og komme med innspill)
- Gjennomgå vurderingskriteriene og identifisere styrker og svakheter
- Bestemme hovedbudskap: «Bærekraftig innpakning uten kompromiss på design»
- Samle dokumentasjon: salgstall, kundeanmeldelser, bilder, presseklipp

**Uke 2 - Presentasjon og stand:**
- Designe standen: produktvisning, rollup, skjerm med video, prøver
- Skrive og øve på heispresentasjonen (30 sekunder, 2 minutter og 5 minutter)
- Fordele roller: hvem presenterer, hvem håndterer spørsmål, hvem demonstrerer
- Forberede svar på typiske juryspørsmål

**Uke 3 - Finpuss og øving:**
- Generalprøve med veileder som «jury»
- Justere basert på tilbakemeldinger
- Pakke alt utstyr og materiell
- Mental forberedelse: «Vi kjenner bedriften vår best - dette skal vi klare!»

**Typiske juryspørsmål å forberede:**
- Hva er unikt med forretningsideen deres?
- Hvordan har dere validert markedsbehovet?
- Hva er de viktigste utfordringene dere har møtt, og hvordan løste dere dem?
- Hva ville dere gjort annerledes?
- Kan denne bedriften videreføres etter skoleåret?`,
    },
    {
      id: 'eb2-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-3-ex-1',
        number: '8.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er riktig rekkefølge i konkurransesystemet for studentbedrifter i Norge?',
        options: [
          { id: 'a', text: 'NM → Fylkesmesse → Internasjonal konkurranse', isCorrect: false },
          { id: 'b', text: 'Fylkesmesse → NM → Internasjonal konkurranse', isCorrect: true },
          { id: 'c', text: 'Internasjonal konkurranse → NM → Fylkesmesse', isCorrect: false },
          { id: 'd', text: 'Fylkesmesse → Internasjonal konkurranse → NM', isCorrect: false },
        ],
        solution: 'Svar B er riktig. Konkurransestrukturen starter med fylkesmesse (februar-mars), der vinnerne går videre til NM for studentbedrifter (april). De beste fra NM kan deretter representere Norge i internasjonale konkurranser som JA Europe Company of the Year.',
      },
    },
    {
      id: 'eb2-8-3-def-2',
      type: 'definition',
      title: 'Presentasjonsteknikk for messer',
      content: `**En god messepresentasjon** kombinerer visuell appell, tydelig kommunikasjon og engasjement. Her er nøkkelprinsippene:

**Heispresentasjonen (Elevator Pitch):**
En kort, overbevisende presentasjon som kan leveres på 30-60 sekunder. Strukturen:
1. **Hook** - Fang oppmerksomheten med et spørsmål, en statistikk eller en historie
2. **Problem** - Beskriv problemet dere løser
3. **Løsning** - Presenter produktet/tjenesten
4. **Bevis** - Del resultater, tall eller kundeuttalelser
5. **Call to action** - Hva vil dere at tilhøreren skal gjøre?

**Standdesign:**
- **Synlighet:** Tydelig logo, farger og budskap som synes på avstand
- **Interaktivitet:** La besøkende prøve produktet, se en demo eller delta i noe
- **Profesjonalitet:** Ryddig, gjennomtenkt og helhetlig visuelt uttrykk
- **Teamet:** Alle bør ha matchende antrekk eller klesplagg (f.eks. t-skjorter med logo)

**Under juryintervjuet:**
- Vær ærlige - dommerne setter pris på refleksjon over utfordringer
- Bruk konkrete tall og eksempler
- Vis at alle i teamet har bidratt og kan svare
- Vis entusiasme uten å overdrive
- Lytt nøye til spørsmålene og svar på det som faktisk blir spurt om`,
    },
    {
      id: 'eb2-8-3-example-2',
      type: 'example',
      title: 'Eksempel: Heispresentasjon for EcoWrap SB',
      problem: 'Skriv en heispresentasjon (elevator pitch) for EcoWrap SB som kan leveres på 30-60 sekunder.',
      solution: `**Heispresentasjon for EcoWrap SB:**

«Visste du at nordmenn kaster over 150 000 tonn innpakningspapir hvert år - mesteparten havner rett i søpla etter én gangs bruk?

Vi er EcoWrap, og vi har løst dette problemet. Vi lager innpakningspapir av 100 % resirkulerte materialer, med design som er like vakkert som det er bærekraftig. Papiret kan resirkuleres igjen etter bruk, slik at ingenting går til spille.

På bare fem måneder har vi solgt over 800 ark, fått avtale med tre lokale butikker, og kundene våre gir oss 4,8 av 5 i tilfredshet. En kunde sa det best: 'Endelig kan jeg pakke inn gaver med god samvittighet.'

Vi tror at bærekraft og design går hånd i hånd. Kom gjerne bort til standen vår for å se og kjenne på produktene selv!»

**Analyse:** Presentasjonen følger strukturen hook (statistikk om papirbruk) → problem (engangsbruk) → løsning (resirkulert papir) → bevis (salgstall og kundeuttalelse) → call to action (besøk standen).`,
    },
    {
      id: 'eb2-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-3-ex-2',
        number: '8.3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er det viktigste formålet med en heispresentasjon (elevator pitch)?',
        options: [
          { id: 'a', text: 'Å gi en komplett oversikt over alle aspekter ved bedriften', isCorrect: false },
          { id: 'b', text: 'Å fange oppmerksomhet og skape interesse for bedriften på kort tid', isCorrect: true },
          { id: 'c', text: 'Å presentere detaljerte økonomiske nøkkeltall', isCorrect: false },
          { id: 'd', text: 'Å forklare teamets organisasjonsstruktur', isCorrect: false },
        ],
        solution: 'Svar B er riktig. En heispresentasjon (elevator pitch) er designet for å fange oppmerksomhet og skape interesse på 30-60 sekunder. Målet er ikke å fortelle alt, men å vekke nok nysgjerrighet til at tilhøreren vil vite mer.',
      },
    },
    {
      id: 'eb2-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-3-ex-3',
        number: '8.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en heispresentasjon (elevator pitch) for din egen studentbedrift (eller en fiktiv SB). Presentasjonen skal vare 30-60 sekunder og følge strukturen: hook, problem, løsning, bevis, call to action.',
        hints: ['Start med noe overraskende som fanger oppmerksomheten', 'Bruk konkrete tall og eksempler som bevis'],
        solution: 'En god heispresentasjon følger strukturen: 1) Hook - et spørsmål, en overraskende statistikk eller en kort historie. 2) Problem - beskriv smertepunktet kort og tydelig. 3) Løsning - presenter produktet/tjenesten som løsningen. 4) Bevis - del konkrete resultater (salgstall, kundeuttalelser, priser). 5) Call to action - fortell tilhøreren hva du vil de skal gjøre (besøke standen, prøve produktet, kontakte dere). Hele presentasjonen bør kunne leveres naturlig på under ett minutt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-3-ex-4',
        number: '8.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vurder din egen studentbedrift (eller en fiktiv SB) ut fra de typiske vurderingsområdene på fylkesmessen. Gi dere selv en score fra 1-5 på hvert område og forklar kort hva som er bra og hva som kan forbedres.',
        hints: ['Bruk de seks vurderingsområdene: forretningsidé, gjennomføring, markedsføring, bærekraft, presentasjon og forretningsrapport', 'Vær ærlig og selvkritisk - det er det dommerne verdsetter'],
        solution: 'Eksempel: Forretningsidé og innovasjon: 4/5 - God idé som møter et reelt behov, men ikke helt unik i markedet. Gjennomføring og drift: 3/5 - God organisering, men økonomistyringen kunne vært tettere. Markedsføring og salg: 4/5 - Kreativ bruk av sosiale medier, men mangler systematisk kundekontakt. Bærekraft: 5/5 - Bærekraft er kjernen i forretningsideen. Presentasjon og stand: 3/5 - Må øve mer på presentasjon og investere i bedre standmateriell. Forretningsrapport: 3/5 - Mangler grundig refleksjon og avviksanalyse. Totalt: 22/30 - Sterke på idé og bærekraft, må forbedre presentasjon og dokumentasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-3-ex-5',
        number: '8.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Lag en komplett forberedelsesplan for fylkesmessen. Planen skal inneholde: 1) Tidslinje med milepæler, 2) Ansvarsfordeling i teamet, 3) Standdesign (tegning eller beskrivelse), 4) Heispresentasjon, og 5) Liste over mulige juryspørsmål med forberedte svar.',
        hints: ['Start med å jobbe bakover fra messedatoen', 'Tenk på hvem i teamet som har hvilke styrker for de ulike oppgavene'],
        solution: 'Eksempel: Tidslinje: 4 uker før - ferdigstille forretningsrapport. 3 uker før - designe stand og bestille materiell. 2 uker før - skrive og øve presentasjoner, fordele roller. 1 uke før - generalprøve med veileder, pakke utstyr. Ansvarsfordeling: DL - koordinering og hovedpresentasjon. Økonomi - regnskap og nøkkeltall. Marked - stand og visuelt materiell. Produksjon - produktdemo. HR - teamhistorie og læringspunkter. Standdesign: Rollup med logo og hovedbudskap, bord med produkter, skjerm med kundevideo, brosjyrer. Heispresentasjon: [se eksempel fra oppgave 8.3.3]. Juryspørsmål: «Hva er unikt?» - Svar med konkret differensiering. «Største utfordring?» - Ærlig svar med løsning. «Kan dette videreføres?» - Realistisk vurdering med begrunnelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-8-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-3-ex-6',
        number: '8.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Du skal representere Norge med studentbedriften din på en internasjonal konkurranse. Beskriv hvordan forberedelsene vil skille seg fra fylkesmessen. Hva må tilpasses for et internasjonalt publikum? Skriv også en kort heispresentasjon på engelsk.',
        hints: ['Tenk på kulturforskjeller, språkbarrierer og internasjonalt markedspotensial', 'Internasjonale dommere ser etter skalerbarhet og global relevans'],
        solution: 'Forskjeller fra fylkesmesse: 1) Språk - all kommunikasjon på engelsk, forretningsrapport oversettes. 2) Markedsperspektiv - vise at ideen er relevant internasjonalt, ikke bare lokalt. 3) Kulturell tilpasning - unngå norske referanser som ikke forstås internasjonalt. 4) Skalerbarhet - dommerne vil vite om konseptet kan fungere i andre land. 5) Presentasjonsstil - mer profesjonell og polert, høyere energi. 6) Nettverking - mulighet til å lære av og samarbeide med bedrifter fra andre land. Engelsk pitch: "Did you know that 150,000 tons of wrapping paper is thrown away in Norway alone every year? At EcoWrap, we create beautiful wrapping paper from 100% recycled materials. In just five months, we have sold over 800 sheets and partnered with three local retailers. Our customers love that sustainability and great design can go hand in hand. Come visit our booth to see and feel the difference!"',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-8-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Konkurransestrukturen** for studentbedrifter går fra fylkesmesse via NM til internasjonale konkurranser
- **Vurderingskriteriene** dekker forretningsidé, gjennomføring, markedsføring, bærekraft, presentasjon og forretningsrapport
- **Heispresentasjonen** følger strukturen: hook, problem, løsning, bevis, call to action
- **Standdesign** bør være synlig, interaktivt og profesjonelt
- **Juryintervjuet** krever ærlighet, konkrete tall og refleksjon over utfordringer

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Fylkesmesse | Regional konkurranse for studentbedrifter arrangert av UE |
| NM for studentbedrifter | Nasjonalt mesterskap for de beste fra fylkesmessene |
| Heispresentasjon | Kort, overbevisende presentasjon på 30-60 sekunder |
| Elevator pitch | Engelsk term for heispresentasjon |
| JA Europe | Organisasjonen bak europeisk mesterskap for studentbedrifter |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 8.4: Avvikling og exit
// ============================================================================

export const CHAPTER_ENTREBED_2_8_4: TextbookChapter = {
  id: 'entrebed-2-8-4',
  courseId: 'entrebed-2',
  chapterNumber: '8.4',
  title: 'Avvikling og exit',
  description: 'Lær om strategier for avvikling av studentbedriften, salg og videreføring. Forstå de juridiske, økonomiske og praktiske aspektene ved å avslutte en bedrift.',
  estimatedMinutes: 20,
  competenceGoals: [
    'planlegge og gjennomføre avvikling eller videreføring av en studentbedrift',
    'vurdere ulike exit-strategier og deres konsekvenser',
  ],
  content: [
    {
      id: 'eb2-8-4-intro',
      type: 'text',
      content: `## Når eventyret tar slutt - eller fortsetter

Alle studentbedrifter har en fastsatt levetid, vanligvis ett skoleår. Men avslutningen trenger ikke bety at alt stopper. Noen studentbedrifter videreføres som ekte bedrifter, andre overdras til neste årstrinn, og de fleste avvikles på en ryddig måte.

Uansett hvilken vei dere velger, er det viktig å planlegge avslutningen grundig. En god avvikling er like profesjonell som en god oppstart.

I dette kapittelet skal du lære:
- Hvordan du planlegger og gjennomfører en ryddig avvikling
- Ulike exit-strategier og når de passer
- Juridiske og økonomiske hensyn ved avvikling
- Muligheter for videreføring av forretningsideen`,
    },
    {
      id: 'eb2-8-4-def-1',
      type: 'definition',
      title: 'Avvikling av studentbedrift',
      content: `**Avvikling** er prosessen med å avslutte en bedrifts virksomhet på en ordnet måte. For en studentbedrift (SB) innebærer dette:

**Steg i avviklingsprosessen:**

1. **Styrevedtak:** Styret vedtar formelt å avvikle bedriften. Dokumenteres i styreprotokoll.

2. **Gjøre opp forpliktelser:**
   - Betale alle utestående regninger til leverandører
   - Levere bestilte produkter/tjenester til kunder
   - Gjøre opp eventuelle lån

3. **Selge varelager:** Selge restlager med rabatt eller donere til veldedig formål.

4. **Lukke bankkontoer:** Overføre restbeløp og lukke bedriftskontoen.

5. **Utbetale aksjonærer:** Fordele eventuelt overskudd til aksjonærene (elevene og eventuelle investorer) i henhold til aksjefordeling.

6. **Avregistrering:** Melde fra til Ungt Entreprenørskap om at bedriften er avviklet.

7. **Arkivering:** Arkivere alle viktige dokumenter: forretningsrapport, regnskap, bilder og kontrakter.

**Juridisk viktig:** Alle forpliktelser må gjøres opp FØR overskuddet fordeles til eierne. Aksjonærene har rett til sin andel av overskuddet etter at all gjeld er betalt.`,
    },
    {
      id: 'eb2-8-4-example-1',
      type: 'example',
      title: 'Eksempel: Avvikling av GrøntSnacks SB',
      problem: 'GrøntSnacks SB avslutter driften etter skoleåret. De har 14 300 kr på konto, varelager for 1 500 kr, utestående kundefordringer på 1 000 kr, og leverandørgjeld på 2 000 kr. Aksjekapitalen er 2 000 kr fordelt på 5 aksjonærer med 400 kr hver. Beskriv avviklingsprosessen.',
      solution: `**Avviklingsprosess for GrøntSnacks SB:**

**Steg 1 - Styrevedtak:**
Styret vedtar avvikling med virkning fra 15. juni. Alle gjenværende bestillinger leveres innen denne datoen.

**Steg 2 - Gjøre opp forpliktelser:**
- Betale leverandørgjeld: 2 000 kr
- Inndrive kundefordringer: 1 000 kr
- Ny bankbeholdning: 14 300 + 1 000 - 2 000 = 13 300 kr

**Steg 3 - Selge varelager:**
Selge restlager for 1 000 kr (rabattert fra 1 500 kr).
Ny bankbeholdning: 13 300 + 1 000 = 14 300 kr

**Steg 4 - Beregne overskudd til fordeling:**
- Tilgjengelig: 14 300 kr
- Aksjekapital tilbake: 2 000 kr (400 kr × 5 aksjonærer)
- Overskudd til fordeling: 14 300 - 2 000 = 12 300 kr
- Per aksjonær: 12 300 / 5 = 2 460 kr i utbytte

**Steg 5 - Utbetaling per aksjonær:**
Tilbakebetaling av aksjekapital: 400 kr + Utbytte: 2 460 kr = **2 860 kr per person**

**Steg 6 - Avregistrering og arkivering:**
Melde avvikling til UE, lukke bankkonto, arkivere dokumenter.`,
    },
    {
      id: 'eb2-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-4-ex-1',
        number: '8.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det første steget i en formell avviklingsprosess for en studentbedrift?',
        options: [
          { id: 'a', text: 'Selge alt varelager', isCorrect: false },
          { id: 'b', text: 'Fordele overskuddet til aksjonærene', isCorrect: false },
          { id: 'c', text: 'Styret vedtar formelt å avvikle bedriften', isCorrect: true },
          { id: 'd', text: 'Lukke bankkontoen', isCorrect: false },
        ],
        solution: 'Svar C er riktig. En formell avvikling starter med at styret fatter vedtak om avvikling, som dokumenteres i styreprotokollen. Deretter gjøres forpliktelser opp, varelager selges, og til slutt fordeles overskuddet og bedriften avregistreres.',
      },
    },
    {
      id: 'eb2-8-4-def-2',
      type: 'definition',
      title: 'Exit-strategier',
      content: `**Exit-strategi** beskriver hvordan eierne avslutter sitt engasjement i en bedrift. For studentbedrifter finnes det flere alternativer:

**1. Ren avvikling:**
- Bedriften avsluttes og alt gjøres opp
- Vanligst for studentbedrifter
- Passer når ideen er sesongbasert eller vanskelig å videreføre

**2. Videreføring til nytt årstrinn:**
- Neste års elever tar over konseptet og driften
- Krever god dokumentasjon og kunnskapsoverføring
- Passer når forretningsideen har langsiktig potensial

**3. Konvertering til vanlig bedrift:**
- Studentbedriften omregistreres til AS eller ENK
- Én eller flere av grunnleggerne fortsetter
- Krever forretningsplan, kapital og tid
- Eksempler: Flere norske bedrifter startet som studentbedrifter

**4. Salg av forretningsidé/konsept:**
- Selge rettigheter, kundelister eller merkevare til en eksisterende bedrift
- Kan gi inntekt til aksjonærene utover driftsoverskuddet
- Krever at ideen har verdi uavhengig av teamet

**5. Lisensmodell:**
- La andre bruke konseptet mot en avgift
- Eksempel: En studentbedrift som har utviklet et undervisningsopplegg, kan lisensiere det til andre skoler

**Faktorer som påvirker valg av exit-strategi:**
- Har ideen langsiktig kommersielt potensial?
- Er noen i teamet villige til å fortsette?
- Finnes det etterspørsel i markedet?
- Har bedriften opparbeidet verdier (merkevare, kundebase, teknologi)?`,
    },
    {
      id: 'eb2-8-4-example-2',
      type: 'example',
      title: 'Eksempel: Vurdering av exit-strategier',
      problem: 'Studentbedriften «CodeHelp SB» har utviklet en app som hjelper elever med programmering. Appen har 500 aktive brukere, 4,5 i rating og genererer 8 000 kr i månedlig inntekt fra abonnement. Vurder hvilken exit-strategi som passer best.',
      solution: `**Analyse av exit-alternativer for CodeHelp SB:**

**Alternativ 1 - Ren avvikling:**
Appen legges ned, brukerne mister tilgangen. Overskudd fordeles.
Vurdering: **Dårlig valg.** Appen har stor verdi og lojale brukere. Å legge ned ville sløse bort det som er bygget opp.

**Alternativ 2 - Videreføring til neste årstrinn:**
Neste års elever tar over drift og videreutvikling.
Vurdering: **Mulig**, men risikabelt. Krever at neste kull har teknisk kompetanse til å vedlikeholde appen.

**Alternativ 3 - Konvertering til vanlig bedrift:**
To av grunnleggerne starter et AS og fortsetter å utvikle appen.
Vurdering: **Beste alternativ** hvis noen vil satse. Appen har bevist markedsbehov (500 brukere), inntektsmodell (abonnement) og vekstpotensial. Kapitalbehov er lavt (hosting og markedsføring).

**Alternativ 4 - Salg:**
Selge appen til et edtech-selskap.
Vurdering: **God mulighet** hvis ingen vil fortsette. En verdsettelse basert på MRR (Monthly Recurring Revenue) på 8 000 kr kan gi en salgspris på 100 000-200 000 kr.

**Anbefaling:** Konvertering til AS (alternativ 3) er førstevalget. Om ingen vil fortsette, er salg (alternativ 4) nest best. Ren avvikling bør unngås.`,
    },
    {
      id: 'eb2-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-4-ex-2',
        number: '8.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En studentbedrift har utviklet et populært produkt med mange faste kunder, men ingen i teamet ønsker å drive bedriften videre etter skoleåret. Hvilken exit-strategi er mest hensiktsmessig?',
        options: [
          { id: 'a', text: 'Ren avvikling og fordeling av overskudd', isCorrect: false },
          { id: 'b', text: 'Konvertering til aksjeselskap', isCorrect: false },
          { id: 'c', text: 'Salg av forretningsidé, kundedatabase og merkevare', isCorrect: true },
          { id: 'd', text: 'Videreføring til neste årstrinn', isCorrect: false },
        ],
        solution: 'Svar C er riktig. Når bedriften har opparbeidet verdier (populært produkt, faste kunder, merkevare), men ingen ønsker å fortsette, er salg den beste exit-strategien. Det gir verdi til aksjonærene og sikrer at produktet og kunderelasjoner ikke går tapt.',
      },
    },
    {
      id: 'eb2-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-4-ex-3',
        number: '8.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En studentbedrift har 18 500 kr på konto, varelager for 2 000 kr, kundefordringer på 1 500 kr, leverandørgjeld på 3 000 kr og aksjekapital på 2 500 kr fordelt på 5 aksjonærer. Beregn hvor mye hver aksjonær får utbetalt ved avvikling. Forutsett at varelageret selges for 1 200 kr.',
        hints: ['Husk å gjøre opp all gjeld før du fordeler overskudd', 'Aksjonærene får først tilbake aksjekapitalen, deretter fordeles overskuddet'],
        solution: 'Steg 1: Inndrive fordringer og selge varelager. Bank: 18 500 + 1 500 (fordringer) + 1 200 (varelager) = 21 200 kr. Steg 2: Betale gjeld. 21 200 - 3 000 (leverandørgjeld) = 18 200 kr. Steg 3: Aksjekapital tilbake. 18 200 - 2 500 = 15 700 kr overskudd. Steg 4: Per aksjonær. Aksjekapital tilbake: 500 kr + Utbytte: 15 700/5 = 3 140 kr. Totalt per aksjonær: 500 + 3 140 = 3 640 kr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-4-ex-4',
        number: '8.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Drøft fordeler og ulemper ved å videreføre en studentbedrift til neste årstrinn. Hva kreves for at en slik overføring skal lykkes?',
        hints: ['Tenk på kunnskapsoverføring, motivasjon og juridiske aspekter', 'Hva skjer med aksjeeierne fra det opprinnelige teamet?'],
        solution: 'Fordeler: Konseptet og merkevaren lever videre, kunder og leverandøravtaler beholdes, neste team starter med et forsprang (ikke fra null), og det gir erfaring med overdragelse. Ulemper: Vanskelig å overføre taus kunnskap og entusiasme, nye elever har ikke «eierskap» til ideen, kvaliteten kan falle uten de opprinnelige grunnleggerne, og det kan oppstå uenigheter om aksjefordeling. Suksesskriterier: 1) Grundig dokumentasjon av alle prosesser og kontakter. 2) Overlappingsperiode der gammelt og nytt team jobber sammen. 3) Tydelig avtale om eierskap og aksjefordeling. 4) Det nye teamet må virkelig ønske å videreføre konseptet, ikke bare overta det av bekvemmelighet. 5) Veileder bør være involvert i overgangen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-4-ex-5',
        number: '8.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Lag en avviklingsplan for din studentbedrift (eller en fiktiv SB). Planen skal inneholde: 1) Vurdering av exit-strategier, 2) Valgt strategi med begrunnelse, 3) Tidslinje for avviklingsprosessen, 4) Økonomisk oppgjør med beregninger, og 5) Plan for kunnskapsoverføring og arkivering.',
        hints: ['Start med å vurdere om forretningsideen har verdi utover studentbedriftens levetid', 'Husk at alle forpliktelser må gjøres opp før utbytte kan utbetales'],
        solution: 'Eksempel: 1) Vurdering: Ren avvikling passer fordi produktet er sesongbasert (julemarkeder) og ingen i teamet vil fortsette. 2) Valgt strategi: Ren avvikling med donasjon av restlager til Røde Kors. 3) Tidslinje: Uke 1 - styrevedtak. Uke 2 - betale leverandører og inndrive fordringer. Uke 3 - selge/donere varelager. Uke 4 - beregne og utbetale utbytte, lukke bankkonto, avregistrere hos UE. 4) Oppgjør: Bank 22 000 kr + fordringer 3 000 kr - leverandørgjeld 5 000 kr - aksjekapital tilbake 3 000 kr = 17 000 kr overskudd. Per aksjonær (6 stk): 500 kr aksjekapital + 2 833 kr utbytte = 3 333 kr. 5) Arkivering: Lagre forretningsrapport, regnskap, kundeanmeldelser og bilder i en delt mappe. Skrive erfaringsnotat for eventuelt fremtidige team.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-8-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-4-ex-6',
        number: '8.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: En studentbedrift har utviklet en innovativ løsning med stort markedspotensial. To av fem teammedlemmer ønsker å videreføre bedriften som et AS. Skriv et notat som drøfter: Hvordan bør overgangen gjennomføres? Hvordan håndteres det at tre teammedlemmer ikke vil være med videre? Hvilke juridiske og økonomiske spørsmål må avklares?',
        hints: ['Tenk på verdivurdering, aksjefordeling og avtaler mellom partene', 'Vurder om de som ikke vil videre bør kompenseres for sin innsats'],
        solution: 'Notat: 1) Overgangsprosess: SB avvikles formelt, og et nytt AS stiftes. De to grunnleggerne investerer egen kapital i AS-et og overfører relevante eiendeler (kundedatabase, merkevare, teknologi). 2) Håndtering av uttreden: De tre som ikke vil videre, har rett til sin andel av SB-ens overskudd. Det bør også vurderes en kompensasjon for overføring av immaterielle verdier til det nye AS-et. En mulig modell: De tre får utbetalt sin aksjeandel + en premie for IP-overføring. Alternativt kan de beholde en liten eierandel i AS-et som «stille» aksjonærer. 3) Juridiske spørsmål: Hvem eier rettighetene til produktet/appen? (Normalt SB-en, som eies av alle.) Bør det opprettes en overdragelsesavtale? Trenger AS-et nye avtaler med kunder og leverandører? 4) Økonomiske spørsmål: Verdivurdering av SB-ens eiendeler og immaterielle verdier. Kapitalbehov for AS-et. Aksjefordeling i det nye selskapet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-8-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Avvikling** er en ordnet prosess med styrevedtak, gjøre opp forpliktelser, selge eiendeler og fordele overskudd
- **Exit-strategier** inkluderer ren avvikling, videreføring, konvertering til AS, salg og lisensmodell
- All **gjeld må gjøres opp** før overskudd kan fordeles til aksjonærene
- **Videreføring** krever grundig dokumentasjon og kunnskapsoverføring
- Valg av exit-strategi avhenger av bedriftens verdi, teamets motivasjon og markedets etterspørsel

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Avvikling | Ordnet prosess for å avslutte en bedrifts virksomhet |
| Exit-strategi | Plan for hvordan eierne avslutter sitt engasjement i bedriften |
| Konvertering | Omgjøring av studentbedrift til vanlig selskapsform (f.eks. AS) |
| Styreprotokoll | Formelt dokument som dokumenterer styrets vedtak |
| Utbytte | Andel av overskuddet som utbetales til aksjonærene |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 8.5: Refleksjon og læring
// ============================================================================

export const CHAPTER_ENTREBED_2_8_5: TextbookChapter = {
  id: 'entrebed-2-8-5',
  courseId: 'entrebed-2',
  chapterNumber: '8.5',
  title: 'Refleksjon og læring',
  description: 'Reflekter over erfaringene fra studentbedriften, bygg en profesjonell portfølje og forstå hvordan erfaringsbasert læring styrker din fremtidige karriere.',
  estimatedMinutes: 20,
  competenceGoals: [
    'reflektere over erfaringsbasert læring og personlig utvikling gjennom studentbedriften',
    'bygge en profesjonell portfølje som dokumenterer kompetanse og erfaring',
  ],
  content: [
    {
      id: 'eb2-8-5-intro',
      type: 'text',
      content: `## Hva har du egentlig lært?

Studentbedriften gir en unik læringsopplevelse som er vanskelig å oppnå i vanlig klasseromsundervisning. Du har ikke bare lest om entreprenørskap - du har *gjort* det. Du har tatt beslutninger under usikkerhet, samarbeidet under press, håndtert konflikter og skapt noe fra ingenting.

Men for at erfaringene virkelig skal bli til varig læring, er det viktig å reflektere bevisst over hva du har opplevd. Hva gikk bra? Hva var vanskelig? Hva ville du gjort annerledes? Og ikke minst: Hva kan du ta med deg videre?

I dette kapittelet skal du lære:
- Teori om erfaringsbasert læring (Kolbs læringssirkel)
- Hvordan du reflekterer systematisk over studentbedriftsarbeidet
- Hvordan du bygger en profesjonell portfølje
- Hvordan du bruker SB-erfaringen i jobbsøking og videre studier`,
    },
    {
      id: 'eb2-8-5-def-1',
      type: 'definition',
      title: 'Erfaringsbasert læring',
      content: `**Erfaringsbasert læring** bygger på ideen om at vi lærer best gjennom å gjøre, reflektere og deretter anvende det vi har lært i nye situasjoner.

**Kolbs læringssirkel** (David Kolb, 1984) beskriver fire faser:

1. **Konkret erfaring:** Du gjør noe - f.eks. gjennomfører et salg, holder en presentasjon eller håndterer en konflikt i teamet.

2. **Reflekterende observasjon:** Du stopper opp og tenker over hva som skjedde. Hva fungerte? Hva fungerte ikke? Hvordan reagerte de andre?

3. **Abstrakt konseptualisering:** Du trekker ut prinsipper og lærdommer. «Neste gang bør jeg forberede meg bedre på innvendinger» eller «Teamkonflikter løses best med åpen dialog».

4. **Aktiv eksperimentering:** Du prøver ut det du har lært i en ny situasjon. Sirkelen starter på nytt.

**Nøkkelpoeng:** Erfaring alene gir ikke automatisk læring. Det er **refleksjonen** som gjør erfaring om til kunnskap. Uten refleksjon risikerer vi å gjenta de samme feilene.

**Donald Schöns begreper:**
- **Reflection-in-action:** Refleksjon mens du handler (justere underveis)
- **Reflection-on-action:** Refleksjon etter hendelsen (evaluere i etterkant)`,
    },
    {
      id: 'eb2-8-5-example-1',
      type: 'example',
      title: 'Eksempel: Kolbs læringssirkel i praksis',
      problem: 'Marte er markedsansvarlig i studentbedriften. Hun planla en Instagram-kampanje som fikk svært lite engasjement. Vis hvordan hun kan bruke Kolbs læringssirkel for å lære av erfaringen.',
      solution: `**Fase 1 - Konkret erfaring:**
Marte publiserte fem Instagram-innlegg over én uke med produktbilder og tekst om pris og tilgjengelighet. Innleggene fikk gjennomsnittlig 12 likes og 0 kommentarer, mot vanlige 40-50 likes.

**Fase 2 - Reflekterende observasjon:**
Marte analyserer kampanjen: Innleggene var produktfokuserte og «selgende». Hun sammenligner med tidligere innlegg som fikk mer engasjement - de handlet om historien bak produktet, teamets arbeidshverdag og kundeanmeldelser.

**Fase 3 - Abstrakt konseptualisering:**
Marte formulerer en lærdom: «Følgerne våre responderer på autentisk innhold og historier, ikke på reklame. Markedsføring på sosiale medier handler om relasjoner, ikke om å selge direkte.» Hun kobler dette til teori om content marketing og storytelling.

**Fase 4 - Aktiv eksperimentering:**
Marte planlegger en ny kampanjeserie: «En dag i GrøntSnacks SB» med behind-the-scenes-bilder, intervjuer med teammedlemmer og kundeuttalelser. Resultatet: Gjennomsnittlig 65 likes og 8 kommentarer per innlegg.

**Ny syklus:** Med de nye erfaringene starter en ny runde av læringssirkelen, og Marte fortsetter å utvikle sine markedsføringsevner.`,
    },
    {
      id: 'eb2-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-5-ex-1',
        number: '8.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'I Kolbs læringssirkel: Hvilken fase kommer etter «konkret erfaring»?',
        options: [
          { id: 'a', text: 'Aktiv eksperimentering', isCorrect: false },
          { id: 'b', text: 'Abstrakt konseptualisering', isCorrect: false },
          { id: 'c', text: 'Reflekterende observasjon', isCorrect: true },
          { id: 'd', text: 'Ny konkret erfaring', isCorrect: false },
        ],
        solution: 'Svar C er riktig. Kolbs læringssirkel følger rekkefølgen: 1) Konkret erfaring, 2) Reflekterende observasjon, 3) Abstrakt konseptualisering, 4) Aktiv eksperimentering. Etter en erfaring er neste steg å reflektere over hva som skjedde.',
      },
    },
    {
      id: 'eb2-8-5-def-2',
      type: 'definition',
      title: 'Portføljebygging',
      content: `**En profesjonell portfølje** er en samling dokumentasjon som viser din kompetanse, erfaring og utvikling. For en studentbedriftselev kan portføljen være et kraftfullt verktøy i jobbsøking og opptak til videre studier.

**Innhold i en SB-portfølje:**

**1. Personlig sammendrag:**
- Din rolle i studentbedriften
- Hovedansvar og nøkkelbidrag
- Kort oppsummering av bedriftens resultater

**2. Kompetansebevis:**
- Konkrete eksempler på hva du har gjort (salgsresultater, markedsføringstiltak, økonomistyring)
- Problemer du har løst og beslutninger du har tatt
- Verktøy og metoder du har brukt

**3. Dokumentasjon:**
- Utdrag fra forretningsrapporten
- Bilder fra messer, stand, produkter
- Presseklipp eller omtaler
- Kundeanmeldelser
- Sertifikater og diplomer

**4. Refleksjon:**
- Hva du har lært om deg selv
- Hvordan du har utviklet deg
- Kompetanse du kan overføre til andre sammenhenger

**Formater:**
- **Digital portfølje:** Nettside, LinkedIn-profil, PDF
- **Fysisk portfølje:** Mappe med dokumenter (f.eks. til jobbintervju)
- **Vidoportfølje:** Kort video der du presenterer erfaringene dine`,
    },
    {
      id: 'eb2-8-5-example-2',
      type: 'example',
      title: 'Eksempel: Portfølje for jobbsøknad',
      problem: 'Jonas var daglig leder i studentbedriften «TechHelp SB» og søker sommerjobb i et konsulentfirma. Hvordan kan han bruke SB-erfaringen i søknaden og portføljen?',
      solution: `**Jonas sitt portføljeoppsett:**

**Personlig sammendrag:**
«Som daglig leder i TechHelp SB ledet jeg et team på seks personer gjennom et helt skoleår. Vi leverte IT-hjelp til lokale småbedrifter og oppnådde en omsetning på 65 000 kr med 45 000 kr i overskudd. Bedriften vant pris for beste kundeservice på fylkesmessen.»

**Konkrete kompetansebevis:**

| Kompetanse | Bevis fra SB |
|------------|-------------|
| Ledelse | Ledet ukentlige møter, fordelte oppgaver, håndterte teamkonflikt |
| Kundebehandling | Gjennomførte 35 kundemøter, 95 % kundetilfredshet |
| Økonomi | Ansvarlig for budsjett, regnskap og økonomisk rapportering |
| Problemløsning | Løste kapasitetsproblem ved å innføre bookingsystem |
| Presentasjon | Presenterte for jury på fylkesmesse, holdt pitch for investorer |

**I søknadsbrevet:**
«Gjennom ett år som daglig leder i TechHelp SB har jeg fått praktisk erfaring med prosjektledelse, kundebehandling og økonomistyring. Jeg lærte at god ledelse handler om å tilpasse stilen etter situasjonen - noe jeg vil ta med meg inn i konsulentbransjen.»

**Refleksjon for intervjuet:**
«Den viktigste lærdommen var at ting sjelden går som planlagt. Vi måtte endre forretningsmodellen halvveis i året, og det lærte meg å være fleksibel og løsningsorientert under press.»`,
    },
    {
      id: 'eb2-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-5-ex-2',
        number: '8.5.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er hovedforskjellen mellom «reflection-in-action» og «reflection-on-action» ifølge Donald Schön?',
        options: [
          { id: 'a', text: 'Reflection-in-action er individuell, mens reflection-on-action er i gruppe', isCorrect: false },
          { id: 'b', text: 'Reflection-in-action skjer mens du handler, mens reflection-on-action skjer etter hendelsen', isCorrect: true },
          { id: 'c', text: 'Reflection-in-action er skriftlig, mens reflection-on-action er muntlig', isCorrect: false },
          { id: 'd', text: 'Reflection-in-action er for ledere, mens reflection-on-action er for alle', isCorrect: false },
        ],
        solution: 'Svar B er riktig. Reflection-in-action betyr at du reflekterer og justerer mens du er midt i handlingen (f.eks. endrer tilnærmingen i et møte som ikke går bra). Reflection-on-action betyr at du reflekterer over hendelsen i etterkant (f.eks. evaluerer møtet dagen etter).',
      },
    },
    {
      id: 'eb2-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-5-ex-3',
        number: '8.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg én konkret situasjon fra studentbedriftsarbeidet (eller en fiktiv situasjon) og analyser den med Kolbs læringssirkel. Beskriv alle fire faser og forklar hva du lærte.',
        hints: ['Velg en situasjon der noe gikk galt eller overraskende - det gir best læringsutbytte', 'Vær konkret i fase 3: Hvilken generell lærdom kan du trekke ut?'],
        solution: 'Eksempel: Konkret erfaring - Vi satte en høy pris på produktet og fikk nesten ikke salg den første uken. Reflekterende observasjon - Kundene sa det var for dyrt sammenlignet med alternativer. Vi hadde ikke undersøkt konkurrentenes priser grundig nok. Abstrakt konseptualisering - Lærdom: Prisstrategien må baseres på markedsundersøkelse, ikke bare kostnadsberegning. Betalingsvilje er like viktig som kostnadsdekning. Aktiv eksperimentering - Vi senket prisen med 30 %, la til en rimeligere inngangsvariant, og doblet salget. Neste gang vil vi gjennomføre en pristest med potensielle kunder før lansering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-5-ex-4',
        number: '8.5.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en liste over minst åtte konkrete kompetanser du har utviklet gjennom studentbedriftsarbeidet. For hver kompetanse: gi et spesifikt eksempel fra SB-arbeidet og forklar hvordan kompetansen kan brukes i fremtiden.',
        hints: ['Tenk bredt: faglige, sosiale, personlige og organisatoriske kompetanser', 'Koble hver kompetanse til en konkret hendelse eller oppgave fra SB-arbeidet'],
        solution: 'Eksempel: 1) Teamarbeid - samarbeidet i gruppe over lengre tid, lærte å håndtere uenigheter. Bruk: Alle jobber krever samarbeid. 2) Økonomistyring - førte regnskap og laget budsjett. Bruk: Relevant for privatøkonomi og jobbroller med økonomiansvar. 3) Kundebehandling - snakket med kunder, håndterte klager. Bruk: Enhver stilling med kundekontakt. 4) Presentasjon - holdt presentasjoner for klassen og jury. Bruk: Jobbintervjuer, møter, studier. 5) Problemløsning - løste uventede utfordringer underveis. Bruk: Alle livssituasjoner. 6) Tidsstyring - balanserte SB med skole. Bruk: Studier, jobb, privatliv. 7) Digital kompetanse - brukte sosiale medier, regneark, presentasjonsverktøy. Bruk: De fleste jobber. 8) Beslutningstakning - tok beslutninger under usikkerhet. Bruk: Ledelse, prosjektarbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-5-ex-5',
        number: '8.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Bygg en profesjonell portfølje som dokumenterer dine erfaringer fra studentbedriften. Portføljen skal inneholde: 1) Personlig sammendrag, 2) Oversikt over kompetanser med konkrete bevis, 3) Refleksjon over din viktigste lærdom, og 4) Forklaring av hvordan du vil bruke erfaringene videre.',
        hints: ['Skriv som om du skal vise portføljen til en fremtidig arbeidsgiver eller studieplass', 'Bruk konkrete tall, eksempler og resultater - ikke bare generelle beskrivelser'],
        solution: 'Eksempel: 1) Personlig sammendrag: «Som økonomiansvarlig i SmartLogo SB var jeg ansvarlig for budsjett, regnskap og økonomisk rapportering for en bedrift med 48 000 kr i omsetning. Jeg innførte et system for ukentlig økonomisk oppfølging som bidro til at vi endte 15 % over budsjettert resultat.» 2) Kompetanser: Budsjettoppfølging (bevart 95 % av budsjettpostene innenfor rammen), rapportering (utarbeidet månedlige rapporter til styret), analyse (gjennomførte avviksanalyse som identifiserte besparelsesmuligheter), teamarbeid (samarbeidet med daglig leder om strategiske beslutninger). 3) Viktigste lærdom: «Jeg lærte at god økonomistyring handler om mer enn tall - det handler om å gi teamet informasjon til å ta gode beslutninger. Da jeg presenterte ukestallene visuelt med grafer i stedet for tabeller, økte engasjementet i teamet betraktelig.» 4) Videre bruk: «Jeg søker økonomi- og administrasjonsstudier, og SB-erfaringen har gitt meg praktisk forståelse for regnskap, budsjettering og økonomisk analyse som vil gi meg et forsprang i studiene.»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-8-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb2-8-5-ex-6',
        number: '8.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Skriv et refleksjonsessay (ca. 500 ord) der du drøfter: Hva er det viktigste du har lært gjennom studentbedriftsarbeidet? Hvordan har erfaringen endret din forståelse av entreprenørskap? Og hva ville du rådet en elev som skal starte studentbedrift neste år?',
        hints: ['Bruk Kolbs læringssirkel som rammeverk for refleksjonen', 'Vær ærlig om både suksesser og utfordringer - det viser modenhet'],
        solution: 'Et godt refleksjonsessay bør: 1) Starte med en konkret hendelse eller situasjon som var viktig. 2) Reflektere ærlig over hva som fungerte og hva som ikke fungerte. 3) Koble erfaringene til teori (f.eks. Kolbs læringssirkel, ledelsesteorier, markedsføringsprinsipper). 4) Formulere tydelige lærdommer. 5) Gi konkrete råd til fremtidige elever basert på egne erfaringer. Eksempel på struktur: Innledning - den viktigste erfaringen. Hoveddel 1 - hva som gikk bra og hvorfor. Hoveddel 2 - hva som var vanskelig og hva jeg lærte av det. Hoveddel 3 - hvordan synet mitt på entreprenørskap har endret seg. Avslutning - tre konkrete råd til neste års elever. Nøkkelen er å vise evne til selvkritisk refleksjon og koble praksis til teori.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'eb2-8-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Erfaringsbasert læring** (Kolb) handler om å lære gjennom å gjøre, reflektere, forstå og eksperimentere
- **Refleksjon** er nøkkelen til å gjøre erfaring om til varig kunnskap
- **Reflection-in-action** er refleksjon under handling, mens **reflection-on-action** er refleksjon etter handling
- En **profesjonell portfølje** dokumenterer din kompetanse med konkrete bevis
- SB-erfaringen gir **overførbare kompetanser** som er verdifulle i jobb og videre studier

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Kolbs læringssirkel | Fire faser av erfaringsbasert læring: erfaring, refleksjon, konseptualisering, eksperimentering |
| Reflection-in-action | Refleksjon og justering mens du handler |
| Reflection-on-action | Refleksjon og evaluering etter en hendelse |
| Portfølje | Samling av dokumentasjon som viser kompetanse og erfaring |
| Overførbare kompetanser | Ferdigheter som kan brukes i ulike sammenhenger |`,
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const ENTREBED_2_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_ENTREBED_2_8_1,
  CHAPTER_ENTREBED_2_8_2,
  CHAPTER_ENTREBED_2_8_3,
  CHAPTER_ENTREBED_2_8_4,
  CHAPTER_ENTREBED_2_8_5,
];
