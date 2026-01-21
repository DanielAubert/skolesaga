/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnsøkonomi 2 (VG3 programfag)
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Makroøkonomiske modeller
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_1: TextbookChapter = {
  id: 'samfokonomi-2-1',
  courseId: 'samfokonomi-2',
  chapterNumber: '1',
  title: 'Makroøkonomiske modeller',
  description: 'Lær om de viktigste makroøkonomiske modellene som brukes til å analysere og forstå nasjonaløkonomien.',
  estimatedMinutes: 90,
  competenceGoals: [
    'analysere hvordan makroøkonomiske modeller kan brukes til å forstå økonomisk aktivitet',
    'drøfte sammenhengen mellom økonomisk vekst, arbeidsledighet og inflasjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfokonomi-2-1-intro',
      type: 'text',
      content: `Makroøkonomi handler om å forstå økonomien som helhet. Mens mikroøkonomi fokuserer på enkeltaktører som bedrifter og husholdninger, ser makroøkonomien på de store sammenhengene: Hvorfor vokser økonomien? Hva forårsaker arbeidsledighet? Hvorfor stiger prisene?

For å forstå disse komplekse sammenhengene, bruker økonomer **makroøkonomiske modeller**. Dette er forenklede fremstillinger av virkeligheten som hjelper oss å analysere økonomiske mekanismer og vurdere effekten av ulike tiltak.`,
    },

    // ========== NASJONALREGNSKAPET ==========
    {
      id: 'samfokonomi-2-1-def-bnp',
      type: 'definition',
      title: 'Bruttonasjonalprodukt (BNP)',
      content: `**Bruttonasjonalprodukt (BNP)** er den samlede verdien av alle varer og tjenester som produseres i et land i løpet av et år.

BNP kan beregnes på tre måter:
- **Produksjonsmetoden**: Summen av all verdiskaping
- **Inntektsmetoden**: Summen av alle inntekter
- **Utgiftsmetoden**: Summen av alle utgifter

Alle tre metodene skal gi samme resultat.`,
    },
    {
      id: 'samfokonomi-2-1-formel-bnp',
      type: 'formula',
      title: 'BNP fra etterspørselssiden',
      latex: 'BNP = C + I + G + (X - M)',
      description: `Der:
- $C$ = Privat konsum (husholdningenes forbruk)
- $I$ = Bruttoinvesteringer (bedriftenes investeringer)
- $G$ = Offentlig konsum og investeringer
- $X$ = Eksport
- $M$ = Import
- $(X - M)$ = Nettoeksport`,
    },
    {
      id: 'samfokonomi-2-1-example-1',
      type: 'example',
      title: 'Eksempel: BNP-beregning',
      problem: `Et land har følgende økonomiske størrelser (i milliarder kroner):
- Privat konsum: 1200
- Bruttoinvesteringer: 400
- Offentlig forbruk: 500
- Eksport: 600
- Import: 550

Beregn landets BNP.`,
      solution: `**Løsning:**

Vi bruker formelen: $BNP = C + I + G + (X - M)$

$BNP = 1200 + 400 + 500 + (600 - 550)$
$BNP = 1200 + 400 + 500 + 50$
$BNP = 2150$ milliarder kroner`,
    },
    {
      id: 'samfokonomi-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-1-exercise-1',
        number: '1.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Et land har følgende økonomiske data:\n- Privat konsum: 800 mrd\n- Investeringer: 200 mrd\n- Offentlig forbruk: 350 mrd\n- Eksport: 450 mrd\n- Import: 400 mrd\n\nBeregn BNP.',
        hints: ['Bruk formelen BNP = C + I + G + (X - M)'],
        solution: 'BNP = 800 + 200 + 350 + (450 - 400) = 800 + 200 + 350 + 50 = 1400 mrd',
        answer: 1400,
      },
    },

    // ========== KEYNESIANSK MODELL ==========
    {
      id: 'samfokonomi-2-1-text-keynes',
      type: 'text',
      title: 'Den keynesianske modellen',
      content: `Den keynesianske modellen, utviklet av John Maynard Keynes på 1930-tallet, fokuserer på **etterspørselssiden** av økonomien. Hovedideen er at samlet etterspørsel styrer produksjon og sysselsetting på kort sikt.

**Sentrale antakelser:**
- Priser og lønninger er relativt stive på kort sikt
- Det kan eksistere ledig kapasitet i økonomien
- Etterspørselen bestemmer produksjonsnivået
- Staten kan påvirke samlet etterspørsel gjennom finanspolitikk`,
    },
    {
      id: 'samfokonomi-2-1-def-multiplikator',
      type: 'definition',
      title: 'Multiplikatoreffekten',
      content: `**Multiplikatoreffekten** beskriver hvordan en endring i én komponent av samlet etterspørsel kan gi en større endring i BNP.

Når noen bruker penger, blir dette inntekt for andre som igjen bruker deler av dette videre. Slik sprer en opprinnelig økning i etterspørselen seg gjennom økonomien.`,
    },
    {
      id: 'samfokonomi-2-1-formel-multiplikator',
      type: 'formula',
      title: 'Multiplikatoren',
      latex: 'm = \\frac{1}{1 - c}',
      description: `Der $c$ er den marginale konsumtilbøyeligheten - hvor stor andel av en ekstra krone i inntekt som brukes til konsum.

For eksempel: Hvis $c = 0{,}8$ (80% av ekstra inntekt brukes), blir multiplikatoren:
$m = \\frac{1}{1 - 0{,}8} = \\frac{1}{0{,}2} = 5$`,
    },
    {
      id: 'samfokonomi-2-1-example-2',
      type: 'example',
      title: 'Eksempel: Multiplikatoreffekt',
      problem: `Staten øker de offentlige investeringene med 10 milliarder kroner. Den marginale konsumtilbøyeligheten er 0,75.

a) Beregn multiplikatoren.
b) Hva blir den totale effekten på BNP?`,
      solution: `**Løsning:**

a) Multiplikatoren: $m = \\frac{1}{1 - 0{,}75} = \\frac{1}{0{,}25} = 4$

b) Total effekt på BNP: $\\Delta BNP = m \\cdot \\Delta G = 4 \\cdot 10 = 40$ milliarder kroner

Den opprinnelige økningen på 10 milliarder gir altså en total BNP-økning på 40 milliarder.`,
    },
    {
      id: 'samfokonomi-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-1-exercise-2',
        number: '1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Den marginale konsumtilbøyeligheten i et land er 0,6. Regjeringen vurderer å øke offentlige utgifter med 5 milliarder kroner.\n\na) Hva er multiplikatoren?\nb) Hva blir den totale effekten på BNP?',
        subTasks: [
          { label: 'a', task: 'Beregn multiplikatoren', solution: 'm = 1/(1-0,6) = 1/0,4 = 2,5', answer: 2.5 },
          { label: 'b', task: 'Beregn total BNP-effekt', solution: 'ΔBNP = 2,5 × 5 = 12,5 mrd', answer: 12.5 },
        ],
        hints: ['m = 1/(1-c)', 'ΔBNP = m × ΔG'],
        solution: 'a) m = 2,5, b) ΔBNP = 12,5 milliarder kroner',
      },
    },

    // ========== AD-AS-MODELLEN ==========
    {
      id: 'samfokonomi-2-1-text-adas',
      type: 'text',
      title: 'AD-AS-modellen',
      content: `**AD-AS-modellen** (Aggregate Demand - Aggregate Supply) er en grunnleggende makroøkonomisk modell som viser sammenhengen mellom prisnivå og produksjon i økonomien.

Modellen består av to hovedkomponenter:
- **AD-kurven** (samlet etterspørsel): Viser sammenhengen mellom prisnivå og samlet etterspørsel
- **AS-kurven** (samlet tilbud): Viser sammenhengen mellom prisnivå og samlet produksjon`,
    },
    {
      id: 'samfokonomi-2-1-def-ad',
      type: 'definition',
      title: 'AD-kurven (Samlet etterspørsel)',
      content: `**AD-kurven** viser den totale mengden varer og tjenester som etterspørres ved ulike prisnivåer.

AD-kurven heller nedover fordi:
1. **Realbalanseeffekten**: Høyere priser reduserer kjøpekraften
2. **Renteeffekten**: Høyere priser gir høyere renter som demper investeringer
3. **Nettoeksporteffekten**: Høyere innenlandske priser svekker konkurranseevnen

Faktorer som skifter AD-kurven: Endringer i offentlige utgifter, skatter, pengemengde, forventninger og utenlandsk etterspørsel.`,
    },
    {
      id: 'samfokonomi-2-1-def-as',
      type: 'definition',
      title: 'AS-kurven (Samlet tilbud)',
      content: `**AS-kurven** viser den totale mengden varer og tjenester som tilbys ved ulike prisnivåer.

Vi skiller mellom:
- **Kortsiktig AS (SRAS)**: Stigende kurve - bedrifter øker produksjonen når prisene stiger
- **Langsiktig AS (LRAS)**: Vertikal linje ved potensiell produksjon - på lang sikt bestemmes produksjonen av realøkonomiske faktorer

Faktorer som skifter AS-kurven: Endringer i lønninger, råvarepriser, produktivitet og teknologi.`,
    },
    {
      id: 'samfokonomi-2-1-note-likevekt',
      type: 'note',
      title: 'Makroøkonomisk likevekt',
      content: `Makroøkonomisk likevekt oppstår der AD-kurven krysser AS-kurven. Dette skjæringspunktet bestemmer:
- **Likevektsproduksjonen** (BNP)
- **Likevektsprisnivået**

Dersom økonomien er i ubalanse, vil markedskreftene gradvis føre økonomien tilbake mot likevekt.`,
    },
    {
      id: 'samfokonomi-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-1-exercise-3',
        number: '1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som skjer i AD-AS-modellen når:\n\na) Regjeringen øker de offentlige utgiftene\nb) Oljeprisen stiger kraftig\nc) Sentralbanken senker renten',
        subTasks: [
          { label: 'a', task: 'Økte offentlige utgifter', solution: 'AD-kurven skifter til høyre → høyere BNP og høyere prisnivå' },
          { label: 'b', task: 'Økt oljepris', solution: 'AS-kurven skifter til venstre → lavere BNP og høyere prisnivå (stagflasjon)' },
          { label: 'c', task: 'Lavere rente', solution: 'AD-kurven skifter til høyre → høyere BNP og høyere prisnivå' },
        ],
        hints: ['Tenk på hva som påvirker etterspørsel vs. tilbud'],
        solution: 'a) AD høyre: økt BNP og prisnivå. b) AS venstre: lavere BNP, høyere prisnivå. c) AD høyre: økt BNP og prisnivå.',
      },
    },

    // ========== ØKONOMISKE SVINGNINGER ==========
    {
      id: 'samfokonomi-2-1-text-konjunktur',
      type: 'text',
      title: 'Konjunktursykler',
      content: `Økonomien svinger rundt sin langsiktige veksttrend. Disse svingningene kalles **konjunktursykler** og består av fire faser:

1. **Oppgang (ekspansjon)**: BNP vokser, arbeidsledigheten faller, optimisme
2. **Høykonjunktur**: Produksjonen over trend, press i arbeidsmarkedet, inflasjon
3. **Nedgang (resesjon)**: BNP faller, arbeidsledigheten stiger, pessimisme
4. **Lavkonjunktur**: Produksjonen under trend, ledig kapasitet, lav inflasjon`,
    },
    {
      id: 'samfokonomi-2-1-def-gap',
      type: 'definition',
      title: 'Produksjonsgap',
      content: `**Produksjonsgapet** er differansen mellom faktisk BNP og potensiell BNP (trend-BNP).

$$\\text{Produksjonsgap} = \\frac{\\text{BNP} - \\text{BNP}^*}{\\text{BNP}^*} \\times 100\\%$$

Der BNP* er potensiell produksjon.

- **Positivt gap**: Høykonjunktur, overoppheting
- **Negativt gap**: Lavkonjunktur, ledig kapasitet`,
    },
    {
      id: 'samfokonomi-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-1-exercise-4',
        number: '1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Faktisk BNP er 3200 milliarder kroner, mens potensiell BNP er 3000 milliarder. Beregn produksjonsgapet og forklar hva dette innebærer for økonomien.',
        hints: ['Produksjonsgap = (BNP - BNP*) / BNP* × 100%'],
        solution: 'Produksjonsgap = (3200 - 3000) / 3000 × 100% = 6,67%. Dette er et positivt gap som indikerer høykonjunktur med press i økonomien.',
        answer: 6.67,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfokonomi-2-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `I dette kapittelet har vi lært om:

**BNP og nasjonalregnskapet:**
- BNP måler samlet verdiskaping
- BNP = C + I + G + (X - M)

**Keynesiansk teori:**
- Etterspørselen driver produksjonen på kort sikt
- Multiplikatoreffekten forsterker impulser

**AD-AS-modellen:**
- AD viser samlet etterspørsel
- AS viser samlet tilbud
- Likevekt bestemmer BNP og prisnivå

**Konjunkturer:**
- Økonomien svinger rundt trend
- Produksjonsgapet måler avvik fra potensiell produksjon`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Penge- og finanspolitikk
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_2: TextbookChapter = {
  id: 'samfokonomi-2-2',
  courseId: 'samfokonomi-2',
  chapterNumber: '2',
  title: 'Penge- og finanspolitikk',
  description: 'Forstå hvordan staten og sentralbanken bruker økonomiske virkemidler for å styre økonomien.',
  estimatedMinutes: 90,
  competenceGoals: [
    'analysere virkemidlene i penge- og finanspolitikken',
    'vurdere hvordan økonomisk politikk påvirker konjunkturer, sysselsetting og prisstabilitet',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfokonomi-2-2-intro',
      type: 'text',
      content: `Staten har to hovedverktøy for å styre økonomien:

1. **Finanspolitikk**: Bruk av statsbudsjettet (offentlige utgifter og skatter)
2. **Pengepolitikk**: Styring av pengemengde og renter

Disse verktøyene brukes for å oppnå stabiliseringspolitiske mål som lav arbeidsledighet, stabil inflasjon og bærekraftig økonomisk vekst.`,
    },

    // ========== FINANSPOLITIKK ==========
    {
      id: 'samfokonomi-2-2-def-finans',
      type: 'definition',
      title: 'Finanspolitikk',
      content: `**Finanspolitikk** er statens bruk av offentlige utgifter og skatter for å påvirke samlet etterspørsel i økonomien.

**Ekspansiv finanspolitikk** (stimulerer økonomien):
- Øke offentlige utgifter
- Redusere skatter
- Øke overføringer

**Kontraktiv finanspolitikk** (demper økonomien):
- Redusere offentlige utgifter
- Øke skatter
- Redusere overføringer`,
    },
    {
      id: 'samfokonomi-2-2-text-budsjett',
      type: 'text',
      title: 'Statsbudsjettet',
      content: `Statsbudsjettet er statens viktigste verktøy i finanspolitikken. Det viser planlagte inntekter og utgifter for kommende år.

**Inntektssiden:**
- Skatter og avgifter
- Oljeinntekter (for Norge via SPU)
- Andre inntekter

**Utgiftssiden:**
- Løpende utgifter (lønn, overføringer)
- Investeringer
- Renteutgifter

**Budsjettbalanse:**
- **Overskudd**: Inntekter > Utgifter (kontraktiv effekt)
- **Underskudd**: Utgifter > Inntekter (ekspansiv effekt)`,
    },
    {
      id: 'samfokonomi-2-2-note-handlingsregel',
      type: 'note',
      title: 'Handlingsregelen i Norge',
      content: `Norge har en **handlingsregel** for bruk av oljeinntekter:
- Over tid skal bruken av oljepenger tilsvare forventet realavkastning av Statens pensjonsfond utland (SPU)
- Anslått til 3% av fondskapitalen
- Gir rom for fleksibilitet i konjunkturstyringen
- Sikrer at oljeformuen kommer fremtidige generasjoner til gode`,
    },
    {
      id: 'samfokonomi-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Finanspolitisk impuls',
      problem: `Regjeringen øker de offentlige utgiftene med 15 milliarder kroner og reduserer skattene med 10 milliarder. BNP er 3000 milliarder. Hva er den finanspolitiske impulsen?`,
      solution: `**Løsning:**

Finanspolitisk impuls måles som endring i strukturelt, oljekorrigert underskudd som andel av BNP.

Ekspansiv impuls = Økte utgifter + Reduserte skatter
= 15 + 10 = 25 milliarder

Impuls som andel av BNP = 25/3000 × 100% = 0,83%

Dette er en ekspansiv finanspolitisk impuls på 0,83 prosentpoeng av BNP.`,
    },
    {
      id: 'samfokonomi-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-2-exercise-1',
        number: '2.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom automatiske stabilisatorer og diskresjonær finanspolitikk. Gi eksempler på begge.',
        hints: ['Automatiske stabilisatorer virker uten politiske vedtak', 'Diskresjonær politikk krever aktive beslutninger'],
        solution: 'Automatiske stabilisatorer: Arbeidsledighetstrygd øker automatisk i nedgangstider, skatteinntekter faller automatisk. Diskresjonær politikk: Aktive vedtak om f.eks. tiltakspakker, skattelettelser, infrastrukturprosjekter.',
      },
    },

    // ========== PENGEPOLITIKK ==========
    {
      id: 'samfokonomi-2-2-def-penge',
      type: 'definition',
      title: 'Pengepolitikk',
      content: `**Pengepolitikk** er sentralbankens styring av renter og pengemengde for å påvirke økonomisk aktivitet og inflasjon.

I Norge har Norges Bank ansvar for pengepolitikken. Hovedvirkemiddelet er **styringsrenten** (foliorenten).

**Ekspansiv pengepolitikk** (stimulerer):
- Senke renten
- Øke pengemengden

**Kontraktiv pengepolitikk** (demper):
- Heve renten
- Redusere pengemengden`,
    },
    {
      id: 'samfokonomi-2-2-text-inflasjonsmål',
      type: 'text',
      title: 'Inflasjonsmålet',
      content: `Norge har et **fleksibelt inflasjonsmål** på 2% årlig vekst i konsumprisene over tid.

**Hvorfor 2%?**
- Gir rom for relative prisendringer
- Unngår deflasjon
- Forankrer inflasjonsforventningene
- Gir pengepolitikken handlingsrom

**Fleksibelt** betyr at sentralbanken også tar hensyn til:
- Produksjon og sysselsetting
- Finansiell stabilitet
- Risiko for at inflasjonen forblir høy over tid`,
    },
    {
      id: 'samfokonomi-2-2-def-transmisjonsmekanisme',
      type: 'definition',
      title: 'Transmisjonsmekanismen',
      content: `**Transmisjonsmekanismen** beskriver hvordan renteendringer påvirker økonomien:

1. **Rentekanalen**: Høyere rente → dyrere lån → lavere investeringer og konsum
2. **Valutakurskanalen**: Høyere rente → sterkere krone → svekket konkurranseevne
3. **Forventningskanalen**: Rentesignaler påvirker inflasjonsforventningene
4. **Kredittkanalen**: Renten påvirker bankenes utlånsvilje
5. **Formueskanalen**: Renten påvirker verdien av formuesobjekter`,
    },
    {
      id: 'samfokonomi-2-2-example-2',
      type: 'example',
      title: 'Eksempel: Rentebeslutning',
      problem: `Økonomien er i høykonjunktur med stigende inflasjon og lav arbeidsledighet. Forklar hvilken pengepolitisk respons som er passende og hvordan den virker.`,
      solution: `**Løsning:**

**Situasjon:** Høykonjunktur, økende inflasjon, press i arbeidsmarkedet.

**Passende respons:** Kontraktiv pengepolitikk - heve styringsrenten.

**Virkningsmekanismer:**
1. Høyere lånerente for husholdninger og bedrifter
2. Redusert konsum og investeringer
3. Sterkere kronekurs svekker eksporten
4. Lavere etterspørsel demper prisveksten
5. Økonomien beveger seg mot likevekt

**Tidsforsinkelse:** Det tar typisk 1-2 år før full effekt.`,
    },
    {
      id: 'samfokonomi-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-2-exercise-2',
        number: '2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Norges Bank setter ned styringsrenten med 0,5 prosentpoeng. Analyser hvordan dette påvirker:\na) Husholdningenes forbruk\nb) Bedriftenes investeringer\nc) Kronekursen\nd) Eksportbedriftene',
        subTasks: [
          { label: 'a', task: 'Effekt på husholdninger', solution: 'Lavere boliglånsrente → mer penger til forbruk → økt konsum' },
          { label: 'b', task: 'Effekt på investeringer', solution: 'Billigere å finansiere investeringer → økte investeringer' },
          { label: 'c', task: 'Effekt på kronekursen', solution: 'Lavere rente gjør NOK mindre attraktiv → svakere krone' },
          { label: 'd', task: 'Effekt på eksportbedrifter', solution: 'Svakere krone → bedre konkurranseevne → økt eksport' },
        ],
        hints: ['Tenk på rentekanalene'],
        solution: 'Rentekutt stimulerer økonomien gjennom økt forbruk, investeringer og eksport via svakere krone.',
      },
    },

    // ========== SAMSPILL MELLOM POLITIKKENE ==========
    {
      id: 'samfokonomi-2-2-text-samspill',
      type: 'text',
      title: 'Samspill mellom penge- og finanspolitikk',
      content: `Penge- og finanspolitikk må koordineres for best mulig resultat.

**Policy mix:**
- Begge politikkene kan være ekspansive eller kontraktive
- Ulik kombinasjon gir ulike effekter på rente og valutakurs
- Pengepolitikken er raskere å endre
- Finanspolitikken har sterkere fordelingseffekter

**Arbeidsdeling i Norge:**
- Pengepolitikken har hovedansvaret for konjunkturstyring
- Finanspolitikken fokuserer på langsiktige strukturelle mål
- Handlingsregelen begrenser finanspolitisk handlingsrom`,
    },
    {
      id: 'samfokonomi-2-2-warning-begrensninger',
      type: 'warning',
      title: 'Begrensninger i stabiliseringspolitikken',
      content: `**Tidsforsinkelser:**
- Erkjennelseslag: Tid før problemet oppdages
- Beslutningslag: Tid for politisk behandling
- Virkningslag: Tid før tiltakene virker

**Andre begrensninger:**
- Usikkerhet om økonomiens tilstand
- Forventningseffekter kan motvirke tiltak
- Globaliseringen begrenser nasjonal handlefrihet
- Gjeldsnivå kan begrense finanspolitikken`,
    },
    {
      id: 'samfokonomi-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-2-exercise-3',
        number: '2.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Norge opplever et kraftig økonomisk tilbakeslag. Drøft fordeler og ulemper ved å bruke henholdsvis ekspansiv pengepolitikk og ekspansiv finanspolitikk som respons.',
        hints: ['Vurder hastighet, presisjon, fordelingseffekter og langsiktige konsekvenser'],
        solution: 'Pengepolitikk: Rask implementering, men usikker effekt når renten allerede er lav. Kan skape bobler. Finanspolitikk: Direkte effekt på etterspørsel, kan målrettes, men tar tid å vedta og kan øke gjeld. Best: Kombinasjon tilpasset situasjonen.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfokonomi-2-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `I dette kapittelet har vi lært om:

**Finanspolitikk:**
- Staten bruker utgifter og skatter
- Automatiske stabilisatorer og diskresjonær politikk
- Handlingsregelen i Norge

**Pengepolitikk:**
- Sentralbanken styrer renten
- Inflasjonsmålet på 2%
- Transmisjonsmekanismen

**Samspill:**
- Koordinering gir best resultat
- Arbeidsdeling mellom politikkene
- Tidsforsinkelser begrenser effektiviteten`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Internasjonal handel
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_3: TextbookChapter = {
  id: 'samfokonomi-2-3',
  courseId: 'samfokonomi-2',
  chapterNumber: '3',
  title: 'Internasjonal handel',
  description: 'Forstå teoriene bak internasjonal handel og hvorfor land handler med hverandre.',
  estimatedMinutes: 85,
  competenceGoals: [
    'forklare teorier om internasjonal handel',
    'analysere fordeler og ulemper ved frihandel og proteksjonisme',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfokonomi-2-3-intro',
      type: 'text',
      content: `Internasjonal handel har vokst dramatisk de siste tiårene. Land handler med hverandre fordi alle kan tjene på det - dette er et av de mest robuste resultatene i økonomisk teori.

**Hvorfor handler land?**
- Ulike ressurser og klimatiske forhold
- Ulik teknologi og kompetanse
- Stordriftsfordeler
- Tilgang til større markeder
- Økt produktvariasjon for forbrukerne`,
    },

    // ========== KOMPARATIVE FORTRINN ==========
    {
      id: 'samfokonomi-2-3-def-komparativ',
      type: 'definition',
      title: 'Komparative fortrinn',
      content: `**Komparative fortrinn** (David Ricardo, 1817) er grunnlaget for moderne handelsteori.

Et land har komparativt fortrinn i å produsere en vare hvis alternativkostnaden ved å produsere den er lavere enn i andre land.

**Nøkkelinnsikt:** Selv om ett land er mest effektivt i å produsere alle varer (absolutt fortrinn), kan begge land tjene på handel ved å spesialisere seg på varene der de har komparativt fortrinn.`,
    },
    {
      id: 'samfokonomi-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Komparative fortrinn',
      problem: `To land, A og B, kan produsere vin og klær. Med én arbeidstime kan de produsere:

| Land | Vin (liter) | Klær (enheter) |
|------|-------------|----------------|
| A    | 4           | 8              |
| B    | 1           | 2              |

a) Hvilket land har absolutt fortrinn i begge varer?
b) Beregn alternativkostnaden for hver vare i hvert land.
c) Hvilket land har komparativt fortrinn i hva?`,
      solution: `**Løsning:**

a) Land A har absolutt fortrinn i begge varer (produserer mer per time).

b) Alternativkostnader:
- **Land A:**
  - 1 liter vin koster 8/4 = 2 klær
  - 1 klær koster 4/8 = 0,5 liter vin
- **Land B:**
  - 1 liter vin koster 2/1 = 2 klær
  - 1 klær koster 1/2 = 0,5 liter vin

c) I dette tilfellet er alternativkostnadene like - ingen har komparativt fortrinn. La oss endre eksempelet:

Hvis Land B kunne produsere 3 enheter klær per time:
- Land B: 1 liter vin = 3 klær, 1 klær = 1/3 liter vin
- Land A har komparativt fortrinn i vin (2 < 3 klær)
- Land B har komparativt fortrinn i klær (1/3 < 0,5 liter vin)`,
    },
    {
      id: 'samfokonomi-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-3-exercise-1',
        number: '3.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Norge og Tyskland kan begge produsere fisk og biler. Med 100 arbeidstimer kan de produsere:\n\n- Norge: 100 tonn fisk eller 10 biler\n- Tyskland: 20 tonn fisk eller 40 biler\n\na) Beregn alternativkostnaden for fisk og biler i hvert land.\nb) Hvilket land har komparativt fortrinn i hva?\nc) Forklar hvorfor begge land tjener på handel.',
        subTasks: [
          { label: 'a', task: 'Alternativkostnader', solution: 'Norge: 1 fisk = 0,1 bil, 1 bil = 10 fisk. Tyskland: 1 fisk = 2 biler, 1 bil = 0,5 fisk' },
          { label: 'b', task: 'Komparative fortrinn', solution: 'Norge: fisk (0,1 < 2 biler). Tyskland: biler (0,5 < 10 fisk)' },
          { label: 'c', task: 'Handelsgevinst', solution: 'Ved spesialisering og handel kan begge land konsumere mer enn de kunne alene' },
        ],
        hints: ['Alternativkostnad = hva du gir opp av annen vare'],
        solution: 'Norge spesialiserer i fisk, Tyskland i biler. Begge får mer ved handel.',
      },
    },

    // ========== HANDELSPOLITIKK ==========
    {
      id: 'samfokonomi-2-3-text-politikk',
      type: 'text',
      title: 'Handelspolitikk',
      content: `Land kan velge ulike tilnærminger til internasjonal handel:

**Frihandel:**
- Ingen restriksjoner på handel
- Lar komparative fortrinn utnyttes
- Øker total velferd, men har fordelingseffekter

**Proteksjonisme:**
- Begrensninger på import/eksport
- Beskytter innenlandske næringer
- Kan være nødvendig i overgangsfaser`,
    },
    {
      id: 'samfokonomi-2-3-def-toll',
      type: 'definition',
      title: 'Handelshindre',
      content: `**Toll (tariffer):** Avgift på importerte varer
- Øker prisen på importvarer
- Gir staten inntekter
- Beskytter innenlandsk produksjon

**Kvoter:** Mengdebegrensning på import
- Direkte begrensning på importvolum
- Kan gi knapphetspriser

**Ikke-tariffære barrierer:**
- Tekniske standarder
- Sanitære krav
- Byråkratiske prosedyrer
- Subsidier til innenlandsk produksjon`,
    },
    {
      id: 'samfokonomi-2-3-example-2',
      type: 'example',
      title: 'Eksempel: Tollens effekter',
      problem: `Prisen på en importert vare er 100 kr uten toll. Staten innfører 20% toll. Analyser effektene på:
a) Pris for forbrukerne
b) Innenlandsk produksjon
c) Import
d) Statens inntekter`,
      solution: `**Løsning:**

a) **Pris:** Øker fra 100 til 120 kr (+20%)
   - Forbrukerne må betale mer

b) **Innenlandsk produksjon:** Øker
   - Innenlandske produsenter kan nå konkurrere bedre
   - Produksjon som var ulønnsom ved 100 kr blir lønnsom

c) **Import:** Reduseres
   - Høyere pris gir lavere etterspørsel etter importvaren
   - Noe av etterspørselen dekkes av innenlandsk produksjon

d) **Statens inntekter:** Tollinntekt = 20 kr × importert mengde
   - Staten får inntekter, men samfunnsøkonomisk tap (dødvektstap)`,
    },
    {
      id: 'samfokonomi-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-3-exercise-2',
        number: '3.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Drøft argumenter for og mot proteksjonisme. Vurder særlig følgende argumenter:\na) Beskyttelse av arbeidsplasser\nb) Nasjonal sikkerhet\nc) Spedbarnsindustri-argumentet\nd) Miljøhensyn',
        subTasks: [
          { label: 'a', task: 'Arbeidsplasser', solution: 'For: Bevarer jobber på kort sikt. Mot: Høyere priser, ineffektiv ressursbruk, gjengjeldelse' },
          { label: 'b', task: 'Nasjonal sikkerhet', solution: 'For: Viktig med egen produksjon av kritiske varer. Mot: Kan misbrukes, kostbart' },
          { label: 'c', task: 'Spedbarnsindustri', solution: 'For: Nye næringer trenger tid til å bli konkurransedyktige. Mot: Vanskelig å fjerne beskyttelse, kan skape avhengighet' },
          { label: 'd', task: 'Miljø', solution: 'For: Kan hindre import av varer produsert med høye utslipp. Mot: Kan være skjult proteksjonisme' },
        ],
        hints: ['Vurder både kortsiktige og langsiktige effekter'],
        solution: 'Alle argumenter har gyldighet i visse situasjoner, men kan misbrukes. Frihandel gir generelt høyest velferd.',
      },
    },

    // ========== HANDELSAVTALER ==========
    {
      id: 'samfokonomi-2-3-text-avtaler',
      type: 'text',
      title: 'Internasjonalt handelssamarbeid',
      content: `Land samarbeider om handelsregler gjennom ulike avtaler og organisasjoner:

**WTO (Verdens handelsorganisasjon):**
- Multilaterale handelsforhandlinger
- Tvisteløsningsmekanisme
- MFN-prinsippet (bestevilkårsprinsippet)

**Regionale handelsavtaler:**
- EU: Tollunion og indre marked
- EØS: Norges tilknytning til EU
- Frihandelsavtaler (FTA)

**Utviklingstrekk:**
- Økt regionalisering
- Flere bilaterale avtaler
- Utfordringer for multilateralismen`,
    },
    {
      id: 'samfokonomi-2-3-note-eos',
      type: 'note',
      title: 'Norge og EØS-avtalen',
      content: `EØS-avtalen gir Norge tilgang til EUs indre marked med fire friheter:
- Fri bevegelse av varer
- Fri bevegelse av tjenester
- Fri bevegelse av kapital
- Fri bevegelse av personer

**Unntak:**
- Landbruk og fisk er delvis utenfor
- Norge er ikke del av EUs tollunion
- Norge har egne handelsavtaler med tredjeland`,
    },
    {
      id: 'samfokonomi-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-3-exercise-3',
        number: '3.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser hvordan globaliseringen av handel har påvirket:\na) Økonomisk vekst globalt\nb) Inntektsfordeling innad i rike land\nc) Utviklingsland\nd) Miljøet',
        hints: ['Vurder både positive og negative effekter'],
        solution: 'a) Betydelig vekstbidrag, særlig for Asia. b) Økt ulikhet, tap for ufaglærte arbeidere i rike land. c) Store muligheter, men ujevn utvikling. d) Blandet - økt transport vs. teknologioverføring og spesialisering.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfokonomi-2-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `I dette kapittelet har vi lært om:

**Handelsteori:**
- Komparative fortrinn forklarer handelsgevinster
- Selv land uten absolutt fortrinn tjener på handel
- Spesialisering øker total velferd

**Handelspolitikk:**
- Toll, kvoter og ikke-tariffære barrierer
- Frihandel vs. proteksjonisme
- Argumenter på begge sider

**Handelssamarbeid:**
- WTO og multilaterale avtaler
- Regionale handelsavtaler
- Norges EØS-tilknytning`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Valuta og valutamarkeder
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_4: TextbookChapter = {
  id: 'samfokonomi-2-4',
  courseId: 'samfokonomi-2',
  chapterNumber: '4',
  title: 'Valuta og valutamarkeder',
  description: 'Forstå hvordan valutakurser bestemmes og deres betydning for økonomien.',
  estimatedMinutes: 80,
  competenceGoals: [
    'analysere faktorer som påvirker valutakursen',
    'vurdere hvordan valutakursendringer påvirker ulike aktører i økonomien',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfokonomi-2-4-intro',
      type: 'text',
      content: `Valutakursen er prisen på ett lands valuta målt i en annen valuta. I en globalisert verden er valutakursen avgjørende for:

- Internasjonal handel
- Investeringsstrømmer
- Reisevirksomhet
- Økonomisk stabilitet

Valutamarkedet er verdens største finansmarked med daglig omsetning på over 6000 milliarder dollar.`,
    },

    // ========== VALUTAKURS ==========
    {
      id: 'samfokonomi-2-4-def-kurs',
      type: 'definition',
      title: 'Valutakurs',
      content: `**Valutakurs** er bytteforholdet mellom to valutaer.

**Noteringsmetoder:**
- **Direkte notering (prisnotering):** NOK per enhet utenlandsk valuta
  - Eksempel: 1 EUR = 11,50 NOK
- **Indirekte notering (mengdenotering):** Utenlandsk valuta per NOK
  - Eksempel: 1 NOK = 0,087 EUR

**Terminologi:**
- **Appresiering:** Valutaen styrker seg (stiger i verdi)
- **Depresiering:** Valutaen svekker seg (faller i verdi)`,
    },
    {
      id: 'samfokonomi-2-4-tip-forstå',
      type: 'tip',
      content: `**Huskeregel for kronekursen:**

Når kursen EUR/NOK *øker* (f.eks. fra 10 til 11):
- Kronen har *svekket* seg
- Du må betale flere kroner for én euro

Når kursen EUR/NOK *synker* (f.eks. fra 11 til 10):
- Kronen har *styrket* seg
- Du trenger færre kroner for én euro`,
    },
    {
      id: 'samfokonomi-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Valutakursberegning',
      problem: `Valutakursen endres fra 1 EUR = 10,00 NOK til 1 EUR = 10,50 NOK.

a) Har kronen styrket eller svekket seg?
b) Hvor mye har kroneverdien endret seg i prosent?
c) En norsk importør skal betale 10 000 EUR. Hvor mye mer koster det i NOK?`,
      solution: `**Løsning:**

a) Kronen har **svekket** seg (du må betale flere NOK for én EUR).

b) Prosentvis endring i kroneverdi:
$\\frac{10{,}50 - 10{,}00}{10{,}00} \\times 100\\% = 5\\%$

Kronen har svekket seg med 5% mot euro.

c) Kostnad før: 10 000 EUR × 10,00 = 100 000 NOK
   Kostnad etter: 10 000 EUR × 10,50 = 105 000 NOK
   Økning: 5 000 NOK`,
    },
    {
      id: 'samfokonomi-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-4-exercise-1',
        number: '4.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Kursen USD/NOK endres fra 9,00 til 8,50.\n\na) Har kronen styrket eller svekket seg?\nb) Hvor mye har dollarverdien endret seg i prosent (målt i NOK)?\nc) En nordmann skal kjøpe en vare til 500 USD. Hvor mye sparer han på kursendringen?',
        subTasks: [
          { label: 'a', task: 'Styrket eller svekket?', solution: 'Kronen har styrket seg (færre NOK per USD)' },
          { label: 'b', task: 'Prosentendring', solution: '(8,50-9,00)/9,00 × 100% = -5,6%', answer: -5.56 },
          { label: 'c', task: 'Besparelse', solution: '500 × 9,00 - 500 × 8,50 = 4500 - 4250 = 250 NOK', answer: 250 },
        ],
        hints: ['Lavere kurs = sterkere krone'],
        solution: 'a) Styrket, b) -5,6%, c) 250 NOK',
      },
    },

    // ========== VALUTAKURSSYSTEMER ==========
    {
      id: 'samfokonomi-2-4-text-systemer',
      type: 'text',
      title: 'Valutakurssystemer',
      content: `Land kan velge ulike systemer for å organisere sin valutakurs:

**Flytende kurs:**
- Kursen bestemmes fritt av markedet
- Tilbud og etterspørsel avgjør
- Norge har flytende kurs siden 1992

**Fast kurs:**
- Sentralbanken holder kursen stabil mot en annen valuta
- Krever store valutareserver
- Danmark har fast kurs mot euro

**Styrt flyt:**
- Hovedsakelig markedsbestemt
- Sentralbanken intervenerer ved behov
- Mange fremvoksende økonomier`,
    },
    {
      id: 'samfokonomi-2-4-def-tilbudetterspørsel',
      type: 'definition',
      title: 'Tilbud og etterspørsel i valutamarkedet',
      content: `**Etterspørsel etter NOK:**
- Utlendinger som vil kjøpe norske varer (eksport)
- Utlendinger som vil investere i Norge
- Turister som kommer til Norge

**Tilbud av NOK:**
- Nordmenn som vil kjøpe utenlandske varer (import)
- Nordmenn som vil investere i utlandet
- Nordmenn som reiser utenlands

Valutakursen finner likevekt der tilbud = etterspørsel.`,
    },
    {
      id: 'samfokonomi-2-4-text-faktorer',
      type: 'text',
      title: 'Faktorer som påvirker valutakursen',
      content: `**Kortsiktige faktorer:**
- Rentedifferanse mot utlandet
- Forventninger og spekulasjon
- Politisk usikkerhet
- Nyheter og overraskelser

**Langsiktige faktorer:**
- Inflasjonsdifferanse (kjøpekraftsparitet)
- Handelsbalanse og driftsbalanse
- Produktivitetsutvikling
- Økonomisk vekst

**For Norge spesielt:**
- Oljeprisen
- Oljeinvesteringer
- Globale risikoforhold (oljefondet)`,
    },
    {
      id: 'samfokonomi-2-4-example-2',
      type: 'example',
      title: 'Eksempel: Oljepris og kronekurs',
      problem: `Oljeprisen faller kraftig. Analyser hvordan dette påvirker den norske kronen og forklar virkningsmekanismene.`,
      solution: `**Løsning:**

**Umiddelbar effekt:** Kronen svekker seg.

**Virkningsmekanismer:**

1. **Handelsbalansen:**
   - Lavere oljeinntekter → redusert eksportverdi
   - Driftsbalansen svekkes
   - Mindre etterspørsel etter NOK

2. **Investeringer:**
   - Lavere oljepris → mindre oljeinvesteringer
   - Redusert aktivitet i oljesektoren
   - Kapitalutstrømning

3. **Forventninger:**
   - Markedet forventer svakere norsk økonomi
   - Spekulanter selger NOK
   - Selvforsterkende effekt

4. **Pengepolitikk:**
   - Norges Bank kan respondere med lavere rente
   - Forsterker kronesvekkelsen

**Historisk:** Under oljeprisfallet i 2014-2016 svekket kronen seg betydelig.`,
    },
    {
      id: 'samfokonomi-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-4-exercise-2',
        number: '4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Norges Bank hever styringsrenten mens Den europeiske sentralbanken holder sin rente uendret. Forklar hvordan dette påvirker kronekursen mot euro og hvilke konsekvenser det har for:\na) Norske eksportbedrifter\nb) Norske importører\nc) Nordmenn som skal på ferie i Europa',
        subTasks: [
          { label: 'a', task: 'Eksportbedrifter', solution: 'Sterkere krone svekker konkurranseevnen - varer blir dyrere for utlendinger' },
          { label: 'b', task: 'Importører', solution: 'Sterkere krone gir billigere import - lavere kostnader' },
          { label: 'c', task: 'Turister', solution: 'Sterkere krone gjør Europa billigere - mer for pengene' },
        ],
        hints: ['Høyere rente gjør NOK mer attraktiv'],
        solution: 'Høyere norsk rente → sterkere krone. Negativt for eksport, positivt for import og turister.',
      },
    },

    // ========== KJØPEKRAFTSPARITET ==========
    {
      id: 'samfokonomi-2-4-def-ppp',
      type: 'definition',
      title: 'Kjøpekraftsparitet (PPP)',
      content: `**Kjøpekraftsparitet** (Purchasing Power Parity) er en teori om langsiktig valutakurs.

**Absolutt PPP:** Identiske varer skal koste det samme i ulike land (målt i felles valuta).

**Relativ PPP:** Valutakursen endres proporsjonalt med inflasjonsdifferansen:

$$\\frac{\\Delta S}{S} \\approx \\pi_{hjem} - \\pi_{utland}$$

Der $S$ er valutakurs og $\\pi$ er inflasjon.

**Big Mac-indeksen:** Illustrerer PPP ved å sammenligne prisen på en Big Mac i ulike land.`,
    },
    {
      id: 'samfokonomi-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-4-exercise-3',
        number: '4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Inflasjonen i Norge er 4% og i euroområdet 2%. Valutakursen er nå 10 NOK per EUR.\n\na) Ifølge relativ PPP, hva forventes valutakursen å bli om ett år?\nb) Forklar intuisjonen bak dette resultatet.',
        subTasks: [
          { label: 'a', task: 'Forventet kurs', solution: 'Kursendring ≈ 4% - 2% = 2%. Ny kurs ≈ 10 × 1,02 = 10,20 NOK/EUR', answer: 10.20 },
          { label: 'b', task: 'Intuisjon', solution: 'Høyere inflasjon i Norge betyr at norske varer blir relativt dyrere. For å opprettholde konkurranseevne må kronen svekke seg.' },
        ],
        hints: ['Høyere inflasjon hjemme → svakere valuta'],
        solution: 'a) 10,20 NOK/EUR, b) Kronen må svekkes for å kompensere for høyere norsk inflasjon.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfokonomi-2-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `I dette kapittelet har vi lært om:

**Valutakurs:**
- Bytteforhold mellom valutaer
- Appresiering og depresiering
- Ulike noterings-metoder

**Valutakurssystemer:**
- Flytende, fast og styrt kurs
- Norges flytende kursregime

**Kursdrivere:**
- Renter, inflasjon, handel
- Oljepris viktig for Norge

**Kjøpekraftsparitet:**
- Langsiktig ankerfeste for kursen
- Relativ PPP og inflasjonsdifferanser`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: Økonomisk politikk
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_5: TextbookChapter = {
  id: 'samfokonomi-2-5',
  courseId: 'samfokonomi-2',
  chapterNumber: '5',
  title: 'Økonomisk politikk',
  description: 'Analyser hvordan økonomisk politikk utformes og implementeres for å nå samfunnets mål.',
  estimatedMinutes: 85,
  competenceGoals: [
    'drøfte mål og virkemidler i økonomisk politikk',
    'analysere avveininger og målkonflikter i økonomisk styring',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfokonomi-2-5-intro',
      type: 'text',
      content: `Økonomisk politikk handler om hvordan myndighetene bruker ulike virkemidler for å påvirke økonomien i ønsket retning. Dette innebærer å:

- Definere mål for den økonomiske utviklingen
- Velge virkemidler for å nå målene
- Håndtere avveininger og målkonflikter
- Evaluere effekten av politikken`,
    },

    // ========== MÅL ==========
    {
      id: 'samfokonomi-2-5-text-mål',
      type: 'text',
      title: 'Mål for økonomisk politikk',
      content: `De viktigste målene for økonomisk politikk er:

**Stabiliseringsmål:**
- Lav og stabil arbeidsledighet
- Lav og stabil inflasjon
- Stabil økonomisk vekst
- Balanse i utenriksøkonomien

**Fordelingsmål:**
- Rettferdig inntektsfordeling
- Like muligheter
- Regional balanse

**Effektivitetsmål:**
- Effektiv ressursutnyttelse
- Høy produktivitet
- Velfungerende markeder

**Bærekraftsmål:**
- Miljømessig bærekraft
- Økonomisk bærekraft
- Sosial bærekraft`,
    },
    {
      id: 'samfokonomi-2-5-def-phillips',
      type: 'definition',
      title: 'Phillipskurven',
      content: `**Phillipskurven** beskriver en kortsiktig sammenheng mellom inflasjon og arbeidsledighet:

- Lav arbeidsledighet → høyt lønnspress → høy inflasjon
- Høy arbeidsledighet → lavt lønnspress → lav inflasjon

**Moderne forståelse:**
- Kortsiktig avveining mellom inflasjon og ledighet
- Langsiktig: Ingen stabil avveining (vertikal Phillipskurve)
- Inflasjonsforventninger er avgjørende`,
    },
    {
      id: 'samfokonomi-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Målkonflikt',
      problem: `Økonomien er i høykonjunktur med 2% arbeidsledighet og 4% inflasjon. Myndighetene ønsker å redusere inflasjonen til 2%. Analyser hvilke avveininger de står overfor.`,
      solution: `**Løsning:**

**Situasjon:** Overopphetet økonomi med for høy inflasjon.

**Nødvendig politikk:** Innstramming (kontraktiv politikk)
- Høyere renter
- Strammere finanspolitikk

**Målkonflikt:**
Innstramming vil:
✓ Redusere inflasjonen mot 2%
✗ Øke arbeidsledigheten (kanskje til 3-4%)
✗ Dempe økonomisk vekst
✗ Ramme enkelte grupper hardere enn andre

**Avveining:**
- Kortsiktig kostnad (høyere ledighet) vs. langsiktig gevinst (stabil inflasjon)
- Jo lenger man venter, jo større innstramming trengs
- Viktig med troverdig kommunikasjon for å forankre forventninger`,
    },
    {
      id: 'samfokonomi-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-5-exercise-1',
        number: '5.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'Diskuter potensielle målkonflikter mellom:\na) Lav inflasjon og lav arbeidsledighet\nb) Økonomisk vekst og miljømessig bærekraft\nc) Effektivitet og rettferdig fordeling',
        subTasks: [
          { label: 'a', task: 'Inflasjon vs. ledighet', solution: 'Kortsiktig avveining via Phillipskurven. Ekspansiv politikk gir lavere ledighet men høyere inflasjon.' },
          { label: 'b', task: 'Vekst vs. miljø', solution: 'Tradisjonell vekst ofte basert på økt ressursbruk. Men: grønn vekst mulig, og miljøskader har økonomiske kostnader.' },
          { label: 'c', task: 'Effektivitet vs. fordeling', solution: 'Skatter for omfordeling kan redusere insentiver. Men: stor ulikhet kan også hemme vekst.' },
        ],
        hints: ['Tenk på både kortsiktige og langsiktige perspektiver'],
        solution: 'Alle målene har potensielle konflikter, men god politikkutforming kan redusere avveiningene.',
      },
    },

    // ========== VIRKEMIDLER ==========
    {
      id: 'samfokonomi-2-5-text-virkemidler',
      type: 'text',
      title: 'Økonomisk-politiske virkemidler',
      content: `Myndighetene har en rekke virkemidler til disposisjon:

**Makroøkonomiske virkemidler:**
- Finanspolitikk (statsbudsjett)
- Pengepolitikk (renter)
- Valutapolitikk

**Strukturelle virkemidler:**
- Skatte- og avgiftspolitikk
- Arbeidsmarkedspolitikk
- Konkurransepolitikk
- Næringspolitikk
- Utdanningspolitikk

**Regulering:**
- Miljøreguleringer
- Finansmarkedsregulering
- Forbrukerregulering`,
    },
    {
      id: 'samfokonomi-2-5-note-handlingsrom',
      type: 'note',
      title: 'Politisk handlingsrom',
      content: `Flere faktorer begrenser det økonomisk-politiske handlingsrommet:

**Internasjonale forpliktelser:**
- EØS-avtalen
- WTO-regler
- Klimaavtaler

**Økonomiske realiteter:**
- Gjeldsnivå og bærekraft
- Markedsreaksjoner
- Globaliseringens begrensninger

**Politiske realiteter:**
- Tidshorisont (valgsykluser)
- Interessekonflikter
- Implementeringskapasitet`,
    },
    {
      id: 'samfokonomi-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-5-exercise-2',
        number: '5.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Norge opplever et "negativt tilbudssidesjokk" - for eksempel kraftig økning i energipriser. Analyser:\na) Hvilke effekter dette har på økonomien\nb) Hvilke politiske dilemmaer myndighetene står overfor\nc) Mulige politiske responser og deres konsekvenser',
        subTasks: [
          { label: 'a', task: 'Økonomiske effekter', solution: 'Høyere kostnader → høyere inflasjon + lavere produksjon (stagflasjon)' },
          { label: 'b', task: 'Dilemmaer', solution: 'Ekspansiv politikk forsterker inflasjonen, kontraktiv politikk forsterker nedgangen' },
          { label: 'c', task: 'Responser', solution: 'Målrettede støtteordninger, strukturelle tiltak, pengepolitisk varsomhet' },
        ],
        hints: ['Tilbudssidesjokk gir både inflasjon og lavere produksjon'],
        solution: 'Stagflasjon er vanskelig å håndtere. Krever balansert respons med fokus på å unngå lønns-prisspiral.',
      },
    },

    // ========== EVALUERING ==========
    {
      id: 'samfokonomi-2-5-text-evaluering',
      type: 'text',
      title: 'Evaluering av økonomisk politikk',
      content: `For å vurdere økonomisk politikk må vi stille flere spørsmål:

**Effektivitet:**
- Oppnår tiltakene målene?
- Til hvilken kostnad?
- Er det utilsiktede effekter?

**Fordeling:**
- Hvem vinner og hvem taper?
- Er fordelingsvirkningene akseptable?

**Bærekraft:**
- Er tiltakene langsiktig bærekraftige?
- Hvilke effekter på fremtidige generasjoner?

**Alternativer:**
- Finnes det bedre måter å nå målene på?
- Hva er kostnadene ved å ikke handle?`,
    },
    {
      id: 'samfokonomi-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-5-exercise-3',
        number: '5.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Evaluer den norske modellen for økonomisk styring:\na) Beskriv hovedtrekkene i modellen\nb) Diskuter styrker og svakheter\nc) Vurder utfordringer modellen står overfor fremover',
        hints: ['Tenk på samspillet mellom ulike institusjoner og aktører'],
        solution: 'a) Pengepolitikk med inflasjonsmål, finanspolitikk med handlingsregel, trepartssamarbeid. b) Styrker: stabilitet, legitimitet. Svakheter: kan være treg. c) Grønn omstilling, eldrebølge, internasjonal konkurranse.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfokonomi-2-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `I dette kapittelet har vi lært om:

**Mål:**
- Stabilisering, fordeling, effektivitet, bærekraft
- Phillipskurven og avveininger

**Virkemidler:**
- Makroøkonomiske og strukturelle
- Regulering og incentiver

**Handlingsrom:**
- Internasjonale og nasjonale begrensninger
- Politiske realiteter

**Evaluering:**
- Effektivitet, fordeling, bærekraft
- Kontinuerlig læring og tilpasning`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Arbeidsmarked og sysselsetting
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_6: TextbookChapter = {
  id: 'samfokonomi-2-6',
  courseId: 'samfokonomi-2',
  chapterNumber: '6',
  title: 'Arbeidsmarked og sysselsetting',
  description: 'Analyser arbeidsmarkedets funksjon og politikk for å fremme sysselsetting.',
  estimatedMinutes: 80,
  competenceGoals: [
    'analysere faktorer som påvirker sysselsetting og arbeidsledighet',
    'vurdere arbeidsmarkedspolitikkens rolle og virkemidler',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfokonomi-2-6-intro',
      type: 'text',
      content: `Arbeidsmarkedet er sentralt i enhver økonomi. Det er her arbeidskraft - samfunnets viktigste ressurs - fordeles mellom ulike anvendelser.

**Arbeidsmarkedets betydning:**
- Bestemmer inntektsfordelingen
- Påvirker produktivitet og vekst
- Har stor betydning for livskvalitet
- Er en indikator på økonomiens tilstand`,
    },

    // ========== ARBEIDSLEDIGHET ==========
    {
      id: 'samfokonomi-2-6-def-ledighet',
      type: 'definition',
      title: 'Arbeidsledighet',
      content: `**Arbeidsledig** er en person som:
- Er uten inntektsgivende arbeid
- Har søkt arbeid siste fire uker
- Kan begynne i arbeid innen to uker

**Arbeidsledighetsrate:**
$$\\text{Ledighetsrate} = \\frac{\\text{Antall arbeidsledige}}{\\text{Arbeidsstyrken}} \\times 100\\%$$

**Arbeidsstyrken** = Sysselsatte + Arbeidsledige

Personer utenfor arbeidsstyrken: Studenter, pensjonister, uføre, hjemmeværende.`,
    },
    {
      id: 'samfokonomi-2-6-text-typer',
      type: 'text',
      title: 'Typer arbeidsledighet',
      content: `Arbeidsledighet kan klassifiseres etter årsak:

**Friksjonsledighet:**
- Normal "søkeledighet" mellom jobber
- Reflekterer at matching tar tid
- Ikke nødvendigvis et problem

**Strukturell ledighet:**
- Mismatch mellom tilbud og etterspørsel
- Geografisk eller kvalifikasjonsmessig
- Krever omstilling og opplæring

**Konjunkturell ledighet:**
- Følger konjunktursvingningene
- Skyldes svikt i samlet etterspørsel
- Kan motvirkes med stabiliseringspolitikk

**Sesongledighet:**
- Følger sesongvariasjoner
- Vanlig i turisme, bygg, landbruk`,
    },
    {
      id: 'samfokonomi-2-6-def-nairu',
      type: 'definition',
      title: 'Likevektsledighet (NAIRU)',
      content: `**NAIRU** (Non-Accelerating Inflation Rate of Unemployment) er det ledighets-nivået som er forenlig med stabil inflasjon.

- Ved ledighet under NAIRU: Press på lønninger → økende inflasjon
- Ved ledighet over NAIRU: Lønnspress dempes → fallende inflasjon

**Faktorer som påvirker NAIRU:**
- Arbeidsmarkedsinstitusjoner
- Arbeidsledighetstrygdens utforming
- Lønnsforhandlingssystem
- Mobilitet og fleksibilitet`,
    },
    {
      id: 'samfokonomi-2-6-example-1',
      type: 'example',
      title: 'Eksempel: Beregning av ledighetstall',
      problem: `Et land har følgende arbeidsstyrke-data:
- Befolkning 15-74 år: 4 000 000
- Sysselsatte: 2 700 000
- Arbeidsledige: 150 000

Beregn:
a) Arbeidsstyrken
b) Arbeidsledighetsraten
c) Yrkesdeltakelsen (andel av befolkningen i arbeidsstyrken)`,
      solution: `**Løsning:**

a) Arbeidsstyrken = Sysselsatte + Arbeidsledige
   = 2 700 000 + 150 000 = 2 850 000

b) Ledighetsrate = $\\frac{150\\,000}{2\\,850\\,000} \\times 100\\% = 5{,}26\\%$

c) Yrkesdeltakelse = $\\frac{2\\,850\\,000}{4\\,000\\,000} \\times 100\\% = 71{,}25\\%$

Merknad: 1 150 000 personer (28,75%) er utenfor arbeidsstyrken.`,
    },
    {
      id: 'samfokonomi-2-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-6-exercise-1',
        number: '6.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Et land har 3,5 millioner sysselsatte og 175 000 arbeidsledige.\n\na) Hva er arbeidsstyrken?\nb) Hva er arbeidsledighetsraten?',
        subTasks: [
          { label: 'a', task: 'Arbeidsstyrken', solution: '3 500 000 + 175 000 = 3 675 000', answer: 3675000 },
          { label: 'b', task: 'Ledighetsrate', solution: '175 000 / 3 675 000 × 100% = 4,76%', answer: 4.76 },
        ],
        hints: ['Arbeidsstyrken = Sysselsatte + Ledige'],
        solution: 'a) 3,675 millioner, b) 4,76%',
      },
    },

    // ========== ARBEIDSMARKEDSPOLITIKK ==========
    {
      id: 'samfokonomi-2-6-text-politikk',
      type: 'text',
      title: 'Arbeidsmarkedspolitikk',
      content: `Arbeidsmarkedspolitikken har to hovedretninger:

**Passiv arbeidsmarkedspolitikk:**
- Inntektssikring for arbeidsledige
- Arbeidsledighetstrygd
- Sosialstønad

**Aktiv arbeidsmarkedspolitikk:**
- Arbeidsformidling
- Opplæring og omskolering
- Lønnstilskudd
- Arbeidstrening
- Jobbskapende tiltak`,
    },
    {
      id: 'samfokonomi-2-6-note-trepartssamarbeid',
      type: 'note',
      title: 'Den norske arbeidslivsmodellen',
      content: `Norge har en velorganisert arbeidslivsmodell med:

**Trepartssamarbeid:**
- Staten, arbeidsgiver-organisasjoner, arbeidstaker-organisasjoner
- Koordinerte lønnsforhandlinger
- Samarbeid om produktivitet og omstilling

**Sentrale elementer:**
- Høy organisasjonsgrad
- Frontfagsmodellen for lønnsdannelse
- Sterkt stillingsvern
- Universell velferdsstat
- Komprimert lønnsstruktur`,
    },
    {
      id: 'samfokonomi-2-6-example-2',
      type: 'example',
      title: 'Eksempel: Frontfagsmodellen',
      problem: `Forklar hvordan frontfagsmodellen fungerer og hvorfor den er viktig for norsk økonomi.`,
      solution: `**Løsning:**

**Frontfagsmodellen:**

1. **Hvem forhandler først?**
   - Konkurranseutsatt industri (frontfaget) forhandler først
   - Setter rammen for øvrige oppgjør

2. **Hvorfor denne rekkefølgen?**
   - Konkurranseutsatte næringer må tilpasse seg verdensmarkedspriser
   - De kan ikke skyve høyere kostnader over på kundene
   - Setter derfor en "ansvarlig" lønnsramme

3. **Betydning:**
   - Sikrer at lønnsveksten er forenlig med konkurranseevnen
   - Bidrar til lav inflasjon
   - Fordeler produktivitetsveksten jevnt
   - Hindrer lønns-prisspiraler

4. **Utfordringer:**
   - Offentlig sektor ønsker "egen" vurdering
   - Noen bransjer har høyere produktivitetsvekst
   - Internasjonal konkurranse endrer forutsetningene`,
    },
    {
      id: 'samfokonomi-2-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-6-exercise-2',
        number: '6.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Diskuter fordeler og ulemper ved:\na) Høy stillingsbeskyttelse (vern mot oppsigelse)\nb) Sjenerøs arbeidsledighetstrygd\nc) Aktive arbeidsmarkedstiltak vs. passive ytelser',
        subTasks: [
          { label: 'a', task: 'Stillingsvern', solution: 'Fordeler: Trygghet, investering i ansatte. Ulemper: Kan hemme omstilling, gjøre det vanskeligere å ansette' },
          { label: 'b', task: 'Dagpenger', solution: 'Fordeler: Sikrer levestandard, gir tid til jobbsøk. Ulemper: Kan redusere søkeinnsats, lengre ledighetsperioder' },
          { label: 'c', task: 'Aktiv vs. passiv', solution: 'Aktive tiltak: Mer målrettet, øker kompetanse. Passiv: Enklere å administrere, men kan skape avhengighet' },
        ],
        hints: ['Vurder både individ- og samfunnsperspektiv'],
        solution: 'Alle virkemidler har avveininger. God politikk balanserer trygghet og omstillingsevne.',
      },
    },

    // ========== FREMTIDENS ARBEIDSMARKED ==========
    {
      id: 'samfokonomi-2-6-text-fremtid',
      type: 'text',
      title: 'Utfordringer i arbeidsmarkedet',
      content: `Arbeidsmarkedet står overfor betydelige endringer:

**Teknologisk utvikling:**
- Automatisering og digitalisering
- Kunstig intelligens
- Nye arbeidsformer (gig-økonomi)

**Demografiske endringer:**
- Aldring av befolkningen
- Innvandring
- Endret familiemønster

**Grønn omstilling:**
- Nye kompetansebehov
- Omstilling av næringer
- Geografisk omfordeling av arbeidsplasser`,
    },
    {
      id: 'samfokonomi-2-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-6-exercise-3',
        number: '6.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser hvordan kunstig intelligens (AI) kan påvirke det norske arbeidsmarkedet:\na) Hvilke typer jobber er mest utsatt?\nb) Hvilke nye muligheter kan oppstå?\nc) Hvilken rolle bør utdanningspolitikken spille?',
        hints: ['Tenk på både substitusjons- og komplementaritetseffekter'],
        solution: 'a) Rutinepregede jobber, både manuelle og kognitive. b) Nye yrker, økt produktivitet, bedre arbeidsforhold. c) Livslang læring, omstillingskompetanse, teknologiforståelse.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfokonomi-2-6-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `I dette kapittelet har vi lært om:

**Arbeidsledighet:**
- Definisjon og måling
- Friksjonell, strukturell, konjunkturell
- NAIRU og likevektsledighet

**Arbeidsmarkedspolitikk:**
- Passiv vs. aktiv politikk
- Den norske modellen
- Frontfagsmodellen

**Fremtiden:**
- Teknologiske endringer
- Demografiske utfordringer
- Grønn omstilling`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Velferdsstaten og fordelingspolitikk
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_7: TextbookChapter = {
  id: 'samfokonomi-2-7',
  courseId: 'samfokonomi-2',
  chapterNumber: '7',
  title: 'Velferdsstaten og fordelingspolitikk',
  description: 'Forstå velferdsstatens funksjon og virkemidlene for å påvirke inntektsfordelingen.',
  estimatedMinutes: 85,
  competenceGoals: [
    'analysere velferdsstatens rolle i økonomien',
    'drøfte fordelingspolitiske mål og virkemidler',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfokonomi-2-7-intro',
      type: 'text',
      content: `Velferdsstaten er en sentral del av den norske samfunnsmodellen. Den sørger for:

- Omfordeling av inntekt og formue
- Sikkerhetsnett ved sykdom, arbeidsledighet og alderdom
- Offentlige tjenester som helse og utdanning
- Sosial mobilitet og like muligheter

Norge regnes som en av verdens mest utviklede velferdsstater, med omfattende ordninger finansiert av høye skatter.`,
    },

    // ========== VELFERDSSTATENS OPPGAVER ==========
    {
      id: 'samfokonomi-2-7-text-oppgaver',
      type: 'text',
      title: 'Velferdsstatens hovedoppgaver',
      content: `Velferdsstaten fyller flere viktige funksjoner:

**Forsikringsfunksjon:**
- Beskyttelse mot inntektsbortfall
- Sykepenger, dagpenger, uføretrygd
- Pensjon

**Omfordelingsfunksjon:**
- Fra rik til fattig
- Over livsløpet
- Mellom generasjoner

**Tjenestefunksjon:**
- Helse, utdanning, eldreomsorg
- Barnehager og SFO
- Infrastruktur

**Investeringsfunksjon:**
- Utdanning og kompetanse
- Helsefremmende tiltak
- Sosial mobilitet`,
    },
    {
      id: 'samfokonomi-2-7-def-gini',
      type: 'definition',
      title: 'Gini-koeffisienten',
      content: `**Gini-koeffisienten** er et mål på ulikhet i inntektsfordelingen.

- Verdien varierer mellom 0 og 1
- 0 = perfekt likhet (alle har lik inntekt)
- 1 = maksimal ulikhet (én person har all inntekt)

**Norges Gini-koeffisient:**
- Før skatt og overføringer: ca. 0,42
- Etter skatt og overføringer: ca. 0,25

Dette viser at velferdsstaten har betydelig omfordelingseffekt.`,
    },
    {
      id: 'samfokonomi-2-7-example-1',
      type: 'example',
      title: 'Eksempel: Omfordelingseffekten',
      problem: `Et land har Gini-koeffisient 0,45 før skatt og overføringer, og 0,30 etter. Beregn den prosentvise reduksjonen i ulikhet som skatte- og velferdsystemet oppnår.`,
      solution: `**Løsning:**

Reduksjon i Gini-koeffisient:
$\\Delta G = 0{,}45 - 0{,}30 = 0{,}15$

Prosentvis reduksjon:
$\\frac{0{,}15}{0{,}45} \\times 100\\% = 33{,}3\\%$

Skatte- og velferdssystemet reduserer ulikheten med en tredjedel.

**Tolkning:**
- Betydelig omfordeling
- Mange land har større reduksjon (nordiske land)
- Omfordelingen skjer gjennom progressive skatter og universelle ytelser`,
    },
    {
      id: 'samfokonomi-2-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-7-exercise-1',
        number: '7.1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Land A har Gini-koeffisient 0,35 etter skatt, Land B har 0,28.\n\na) Hvilket land har mest lik inntektsfordeling?\nb) Hva kan forklare forskjellen mellom landene?',
        subTasks: [
          { label: 'a', task: 'Mest lik fordeling', solution: 'Land B (lavere Gini = mer likhet)' },
          { label: 'b', task: 'Mulige forklaringer', solution: 'Mer progressivt skattesystem, mer generøse velferdsordninger, høyere minstelønninger, sterkere fagbevegelse' },
        ],
        hints: ['Lavere Gini = mer likhet'],
        solution: 'a) Land B, b) Forskjeller i skattesystem og velferdsordninger.',
      },
    },

    // ========== SKATTEPOLITIKK ==========
    {
      id: 'samfokonomi-2-7-text-skatt',
      type: 'text',
      title: 'Skattesystemet som fordelingsverktøy',
      content: `Skatter kan utformes for å påvirke fordelingen:

**Progressiv beskatning:**
- Høyere skattesats ved høyere inntekt
- Trinnskatt i Norge
- Omfordeler fra høy- til lavinntekt

**Formuesskatt:**
- Skatt på nettoformue
- Norge er blant få land med slik skatt
- Omdiskutert effektivitet

**Kapitalbeskatning:**
- Skatt på renter, utbytte, gevinster
- Utbytte- og gevinstskatt i Norge

**Arv og gave:**
- Ingen arveavgift i Norge (fjernet 2014)
- Bidrar til formuekonsentrasjon`,
    },
    {
      id: 'samfokonomi-2-7-def-progressivitet',
      type: 'definition',
      title: 'Skatteprogressivitet',
      content: `Et skattesystem kan være:

**Progressivt:** Skattesatsen øker med inntekten
- Rike betaler større andel av inntekten
- Norsk inntektsskatt er progressiv

**Proporsjonalt (flat):** Samme skattesats for alle
- Alle betaler like stor andel
- Noen land har flat skatt

**Regressivt:** Skattesatsen synker med inntekten
- Fattige betaler større andel
- MVA har regressiv effekt fordi fattige bruker mer av inntekten på forbruk`,
    },
    {
      id: 'samfokonomi-2-7-example-2',
      type: 'example',
      title: 'Eksempel: Progressiv vs. flat skatt',
      problem: `To skattesystemer:
A) Progressiv: 25% skatt under 500 000 kr, 40% over
B) Flat: 30% skatt på all inntekt

Beregn skatten for en person med 700 000 kr i inntekt under hvert system.`,
      solution: `**Løsning:**

**System A (Progressiv):**
- Skatt av første 500 000: 500 000 × 0,25 = 125 000
- Skatt av neste 200 000: 200 000 × 0,40 = 80 000
- Total skatt: 125 000 + 80 000 = 205 000 kr
- Gjennomsnittlig skattesats: 205 000 / 700 000 = 29,3%

**System B (Flat):**
- Skatt: 700 000 × 0,30 = 210 000 kr
- Gjennomsnittlig skattesats: 30%

**Sammenligning:**
I dette eksempelet betaler personen 5 000 kr mindre i det progressive systemet.

Merk: For lavere inntekter vil forskjellen være større i favør av det progressive systemet.`,
    },
    {
      id: 'samfokonomi-2-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-7-exercise-2',
        number: '7.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Diskuter argumenter for og mot progressiv beskatning:\na) Hvilke rettferdighetsargumenter taler for?\nb) Hvilke effektivitetsargumenter taler mot?\nc) Hva sier økonomisk teori om avveiningen?',
        subTasks: [
          { label: 'a', task: 'For (rettferdighet)', solution: 'Evneprinsippet: De som har mest bør bidra mest. Marginalnytteteori: En krone er mindre verdt for rike.' },
          { label: 'b', task: 'Mot (effektivitet)', solution: 'Kan svekke arbeidsinsentiver. Kan føre til skatteplanlegging. Kapitalflukt.' },
          { label: 'c', task: 'Avveining', solution: 'Trade-off mellom likhet og effektivitet, men empirisk er denne mindre enn mange tror.' },
        ],
        hints: ['Vurder både moralske og praktiske argumenter'],
        solution: 'Progressiv skatt har sterke rettferdighetsargumenter, men effektivitetskostnader må vurderes.',
      },
    },

    // ========== VELFERDSORDNINGER ==========
    {
      id: 'samfokonomi-2-7-text-ordninger',
      type: 'text',
      title: 'De viktigste velferdsordningene',
      content: `Norge har et omfattende velferdssystem:

**Folketrygden:**
- Alderspensjon
- Uføretrygd
- Sykepenger
- Dagpenger
- Foreldrepenger

**Helsetjenester:**
- Fastlege og sykehus
- Legemidler
- Rehabilitering

**Utdanning:**
- Gratis grunnskole og videregående
- Subsidiert høyere utdanning
- Lån og stipend

**Andre ordninger:**
- Barnetrygd
- Kontantstøtte
- Sosialhjelp
- Bostøtte`,
    },
    {
      id: 'samfokonomi-2-7-warning-bærekraft',
      type: 'warning',
      title: 'Velferdsstatens bærekraft',
      content: `Den norske velferdsstaten står overfor utfordringer:

**Eldrebølgen:**
- Flere pensjonister per yrkesaktiv
- Økte helse- og omsorgskostnader
- Pensjonsreformen et svar

**Oljeinntektene:**
- Vil gradvis avta
- Handlingsregelen må følges
- Behov for andre inntektskilder

**Globalisering:**
- Skattekonkurranse mellom land
- Vanskeligere å skattlegge kapital
- Press på velferdsmodellen

**Løsninger:**
- Økt yrkesdeltakelse
- Effektivisering
- Omprioriteringer
- Eventuelt høyere skatter`,
    },
    {
      id: 'samfokonomi-2-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-7-exercise-3',
        number: '7.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser utfordringer og mulige løsninger for å sikre velferdsstatens bærekraft:\na) Demografiske utfordringer\nb) Finansieringsutfordringer\nc) Forslag til reformer',
        hints: ['Tenk på både inntekts- og utgiftssiden'],
        solution: 'a) Eldrebølge krever flere i arbeid, lenger arbeidsliv. b) Lavere oljeinntekter, press på skattegrunnlag. c) Pensjonsreform, arbeidsinkludering, effektivisering, prioritering.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfokonomi-2-7-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `I dette kapittelet har vi lært om:

**Velferdsstatens rolle:**
- Forsikring, omfordeling, tjenester
- Betydelig omfordelingseffekt
- Gini-koeffisienten som mål

**Skattepolitikk:**
- Progressiv, proporsjonal, regressiv
- Norsk progressiv inntektsskatt
- Avveiningen likhet vs. effektivitet

**Velferdsordninger:**
- Folketrygden og andre ordninger
- Helsetjenester og utdanning

**Bærekraft:**
- Demografiske og finansielle utfordringer
- Behov for tilpasninger`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: Bærekraftig økonomi
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_8: TextbookChapter = {
  id: 'samfokonomi-2-8',
  courseId: 'samfokonomi-2',
  chapterNumber: '8',
  title: 'Bærekraftig økonomi',
  description: 'Forstå sammenhengen mellom økonomi og miljø, og hvordan økonomisk politikk kan fremme bærekraftig utvikling.',
  estimatedMinutes: 90,
  competenceGoals: [
    'analysere økonomiske virkemidler for å fremme bærekraftig utvikling',
    'drøfte avveininger mellom økonomisk vekst og miljømessig bærekraft',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'samfokonomi-2-8-intro',
      type: 'text',
      content: `Klimaendringer og miljøproblemer er blant vår tids største utfordringer. Økonomisk teori og politikk spiller en sentral rolle i å forstå årsakene og finne løsninger.

**Sentrale spørsmål:**
- Hvordan kan markedet bidra til miljøproblemer?
- Hvilke virkemidler kan korrigere markedssvikt?
- Er økonomisk vekst forenlig med bærekraft?
- Hvordan kan Norge omstille seg til en grønnere økonomi?`,
    },

    // ========== MILJØ SOM ØKONOMISK PROBLEM ==========
    {
      id: 'samfokonomi-2-8-def-eksternalitet',
      type: 'definition',
      title: 'Eksterne virkninger',
      content: `**Eksterne virkninger (eksternaliteter)** oppstår når en økonomisk aktivitet påvirker andre uten at dette reflekteres i prisene.

**Negative eksternaliteter:**
- Forurensning
- Klimagassutslipp
- Støy
- Overforbruk av fellesressurser

**Positive eksternaliteter:**
- Forskning og utvikling
- Utdanning
- Vaksinering

Når eksterne virkninger ikke er priset, vil markedet gi for mye av aktiviteter med negative eksternaliteter og for lite av aktiviteter med positive.`,
    },
    {
      id: 'samfokonomi-2-8-text-markedssvikt',
      type: 'text',
      title: 'Markedssvikt og miljøproblemer',
      content: `Miljøproblemer skyldes ofte markedssvikt:

**Manglende prising:**
- Atmosfæren er "gratis" å forurense
- Ingen betaler den fulle kostnaden
- Resultat: For høye utslipp

**Allmenningens tragedie:**
- Fellesressurser overutnyttes
- Fiske, beiteområder, regnskog
- Ingen enkeltaktør har insentiv til å spare

**Informasjonssvikt:**
- Forbrukere kjenner ikke produkters miljøbelastning
- Vanskelig å vurdere langsiktige konsekvenser

**Nåtidsbias:**
- Fremtidige kostnader nedvurderes
- Klimaskader kommer i fremtiden
- Hvem representerer fremtidige generasjoner?`,
    },
    {
      id: 'samfokonomi-2-8-example-1',
      type: 'example',
      title: 'Eksempel: Klimagassutslipp som eksternalitet',
      problem: `En fabrikk produserer stål. Produksjonen medfører CO₂-utslipp som bidrar til klimaendringer. Forklar hvorfor dette er et eksternalitetsproblem og hvordan det kan løses.`,
      solution: `**Løsning:**

**Problemet:**
1. Fabrikken betaler for innsatsfaktorer (arbeid, kapital, råvarer)
2. Fabrikken betaler **ikke** for klimaskadene fra utslippene
3. Prisen på stål reflekterer ikke den fulle samfunnskostnaden
4. Resultat: For mye stålproduksjon og for høye utslipp

**Markedets sammenbrudd:**
- Privat kostnad < Samfunnskostnad
- Privat pris = Privat kostnad
- Forbrukere betaler for lite → etterspør for mye

**Løsningsmekanismer:**
1. **Karbonavgift:** Pris på utslipp som reflekterer skadekostnaden
2. **Kvotemarked:** Sett tak på utslipp, la markedet fordele
3. **Regulering:** Utslippsgrenser, teknologikrav
4. **Subsidier:** Støtte til renere produksjonsmetoder`,
    },

    // ========== ØKONOMISKE VIRKEMIDLER ==========
    {
      id: 'samfokonomi-2-8-text-virkemidler',
      type: 'text',
      title: 'Økonomiske virkemidler i miljøpolitikken',
      content: `Myndighetene har flere verktøy for å korrigere miljørelatert markedssvikt:

**Skatter og avgifter (Pigouskatter):**
- Gjør forurensende aktiviteter dyrere
- Internaliserer eksterne kostnader
- Eksempel: CO₂-avgift, drivstoffavgift

**Subsidier:**
- Gjør miljøvennlige alternativer billigere
- Støtte til fornybar energi, elbiler
- Kan være kostbart for staten

**Omsettelige kvoter:**
- Tak på totale utslipp
- Kvotene kan handles
- EU ETS for kraftsektor og industri

**Regulering og forbud:**
- Direkte påbud og forbud
- Utslippsgrenser, teknologikrav
- Kan være mindre fleksibelt`,
    },
    {
      id: 'samfokonomi-2-8-def-karbonpris',
      type: 'definition',
      title: 'Karbonprising',
      content: `**Karbonprising** er fellesbetegnelsen på virkemidler som setter en pris på utslipp av klimagasser.

**Karbonavgift:**
- Fast pris per tonn CO₂
- Gir sikkerhet om pris, usikkerhet om utslippsmengde
- Norge har en av verdens høyeste CO₂-avgifter

**Kvotemarked:**
- Fast mengde utslipp tillatt
- Markedet bestemmer prisen
- Gir sikkerhet om mengde, usikkerhet om pris

**Effektiv karbonpris:**
- Bør reflektere klimaskadekostnad
- Estimater: 50-200 USD per tonn CO₂
- Økende pris over tid for å nå klimamål`,
    },
    {
      id: 'samfokonomi-2-8-example-2',
      type: 'example',
      title: 'Eksempel: Virkemiddelvalg',
      problem: `Myndighetene vil redusere CO₂-utslipp fra transportsektoren. Sammenlign en CO₂-avgift med et kvotesystem. Hvilke faktorer bør vurderes i valget mellom disse?`,
      solution: `**Løsning:**

**CO₂-avgift:**
Fordeler:
- Enkel å administrere
- Forutsigbar pris for bedrifter
- Kan gi stabile skatteinntekter

Ulemper:
- Usikker utslippsreduksjon
- Må justeres for å nå mål

**Kvotesystem:**
Fordeler:
- Garantert utslippstak
- Kostnadseffektiv fordeling
- Prisen tilpasser seg automatisk

Ulemper:
- Mer kompleks administrasjon
- Prisvolatilitet kan skape usikkerhet
- Risiko for karbonlekkasje

**Valg avhenger av:**
1. Om utslippsmål er viktigst (kvote) vs. prisstabilitet (avgift)
2. Administrativ kapasitet
3. Sektorens karakteristikker
4. Internasjonal koordinering

**I praksis:** Mange land bruker en kombinasjon.`,
    },
    {
      id: 'samfokonomi-2-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-8-exercise-1',
        number: '8.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'CO₂-avgiften i Norge er ca. 1000 kr per tonn CO₂.\n\na) Forklar hvordan avgiften påvirker bedrifter og forbrukere.\nb) Hvem bærer byrden av avgiften?\nc) Diskuter om avgiften er høy nok til å nå klimamålene.',
        subTasks: [
          { label: 'a', task: 'Virkningsmekanismer', solution: 'Øker kostnadene for fossilt brensel → bedrifter og forbrukere velger renere alternativer' },
          { label: 'b', task: 'Byrdefordeling', solution: 'Fordeles mellom produsenter og forbrukere avhengig av priselastisitet. Kan ramme lavinntektsgrupper relativt hardere.' },
          { label: 'c', task: 'Er den høy nok?', solution: 'Estimater for klimaskadekostnad varierer. Norge har høy avgift sammenlignet med andre land, men kanskje ikke høy nok for å nå 2030-målene.' },
        ],
        hints: ['Tenk på hvordan avgiften endrer relative priser'],
        solution: 'Avgiften gjør fossilt dyrere, vrir valg mot grønnere alternativer. Fordelingseffekter må håndteres.',
      },
    },

    // ========== GRØNN OMSTILLING ==========
    {
      id: 'samfokonomi-2-8-text-omstilling',
      type: 'text',
      title: 'Grønn omstilling',
      content: `Norge og verden må gjennom en omfattende grønn omstilling:

**Hva innebærer det?**
- Overgang fra fossil til fornybar energi
- Elektrifisering av transport og industri
- Sirkulærøkonomi og ressurseffektivitet
- Ny næringsstruktur

**Utfordringer:**
- Kostnader i overgangsfasen
- Arbeidsplasser i fossile næringer
- Teknologisk usikkerhet
- Internasjonal konkurranseevne

**Muligheter:**
- Nye næringer og arbeidsplasser
- Teknologieksport
- Bedre miljø og helse
- Energisikkerhet`,
    },
    {
      id: 'samfokonomi-2-8-note-norge',
      type: 'note',
      title: 'Norges situasjon',
      content: `Norge har en spesiell posisjon i klimasammenheng:

**Utfordringer:**
- Stor olje- og gassektor
- Høyt utslippsnivå per innbygger
- Avhengighet av oljeinntekter

**Muligheter:**
- Ren kraft (vannkraft)
- Oljefondet gir finansielt handlingsrom
- Kompetanse fra petroleumssektoren
- Naturgitte fordeler (offshore vind, karbonfangst)

**Politikk:**
- Klimamål: 55% kutt innen 2030
- Kvoteplikt og CO₂-avgift
- Støtte til grønn teknologi
- Elektrifisering av sokkelen`,
    },
    {
      id: 'samfokonomi-2-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-8-exercise-2',
        number: '8.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser dilemmaer knyttet til norsk olje- og gassproduksjon:\na) Hvilke argumenter taler for å trappe ned produksjonen?\nb) Hvilke argumenter taler for å opprettholde produksjonen?\nc) Hvordan bør politikken utformes?',
        subTasks: [
          { label: 'a', task: 'For nedtrapping', solution: 'Klimahensyn, karbonbudsjett, troverdighet, omstilling før ressursene tar slutt' },
          { label: 'b', task: 'For opprettholdelse', solution: 'Inntekter til velferd, arbeidsplasser, renere enn annen produksjon, global etterspørsel' },
          { label: 'c', task: 'Politikk', solution: 'Gradvis omstilling, skatteinsentiver, støtte til berørte regioner, investering i nye næringer' },
        ],
        hints: ['Vurder både nasjonale og globale perspektiver'],
        solution: 'Komplekst dilemma uten enkle svar. Krever balansert politikk som tar mange hensyn.',
      },
    },

    // ========== BÆREKRAFTIG UTVIKLING ==========
    {
      id: 'samfokonomi-2-8-text-bærekraft',
      type: 'text',
      title: 'Bærekraftig utvikling',
      content: `**Bærekraftig utvikling** (Brundtland-definisjonen, 1987):
"Utvikling som imøtekommer dagens behov uten å ødelegge mulighetene for at kommende generasjoner skal få dekket sine behov."

**Tre dimensjoner:**
- Økonomisk bærekraft
- Sosial bærekraft
- Miljømessig bærekraft

**FNs bærekraftsmål (2015):**
17 mål for å utrydde fattigdom, bekjempe ulikhet og stoppe klimaendringene innen 2030.

**Grønn vekst vs. degrowth:**
- Kan vi ha økonomisk vekst og bærekraft?
- Noen mener vi må akseptere lavere materiell levestandard
- Andre mener teknologisk innovasjon kan "frikoble" vekst fra miljøbelastning`,
    },
    {
      id: 'samfokonomi-2-8-def-frikobling',
      type: 'definition',
      title: 'Frikobling',
      content: `**Frikobling** refererer til at økonomisk vekst kan skje uten tilsvarende økning i miljøbelastning.

**Relativ frikobling:**
Miljøbelastningen vokser saktere enn BNP.
- Eksempel: Energieffektivisering

**Absolutt frikobling:**
Miljøbelastningen faller mens BNP vokser.
- Nødvendig for reell bærekraft
- Observert for noen land og noen utslippstyper
- Globalt fortsatt ikke oppnådd for CO₂

**Kritikk:**
- Rebound-effekter (effektivitet gir økt forbruk)
- Eksportert miljøbelastning
- Planetære tålegrenser`,
    },
    {
      id: 'samfokonomi-2-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfokonomi-2-8-exercise-3',
        number: '8.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter om det er mulig å kombinere økonomisk vekst med miljømessig bærekraft:\na) Hva er argumentene for at det er mulig (grønn vekst)?\nb) Hva er argumentene mot (degrowth-perspektivet)?\nc) Hva innebærer dette for økonomisk politikk?',
        hints: ['Vurder empiriske observasjoner og teoretiske argumenter'],
        solution: 'a) Teknologisk innovasjon, tjenestebasert økonomi, frikobling observert i noen tilfeller. b) Planetære grenser, rebound-effekter, energibehov. c) Uavhengig av syn: behov for sterkere miljøpolitikk.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'samfokonomi-2-8-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `I dette kapittelet har vi lært om:

**Miljø og økonomi:**
- Eksterne virkninger og markedssvikt
- Hvorfor markedet gir for mye forurensning

**Virkemidler:**
- Skatter og avgifter
- Kvotesystemer
- Subsidier og regulering
- Karbonprising

**Grønn omstilling:**
- Utfordringer og muligheter
- Norges spesielle situasjon

**Bærekraft:**
- Tre dimensjoner
- FNs bærekraftsmål
- Frikobling og degrowth-debatten`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORTER ALLE KAPITLER
// ============================================================================

export const SAMFOKONOMI_2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFOKONOMI_2_1,
  CHAPTER_SAMFOKONOMI_2_2,
  CHAPTER_SAMFOKONOMI_2_3,
  CHAPTER_SAMFOKONOMI_2_4,
  CHAPTER_SAMFOKONOMI_2_5,
  CHAPTER_SAMFOKONOMI_2_6,
  CHAPTER_SAMFOKONOMI_2_7,
  CHAPTER_SAMFOKONOMI_2_8,
];
