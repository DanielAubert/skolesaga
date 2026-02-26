/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnsøkonomi 2 (VG3 programfag) - Del 5: Fordeling og velferd
 *
 * Dekker LK20-kompetansemål:
 * - drøfte ulike perspektiver på rettferdig fordeling og velferd
 * - analysere hvordan skattesystemet og offentlige overføringer påvirker inntektsfordelingen
 * - vurdere velferdsstatens bærekraft og utfordringer i et langsiktig perspektiv
 *
 * Kapittel 5.1–5.5
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Inntektsfordeling
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_5_1: TextbookChapter = {
  id: 'samfokonomi-2-5-1',
  courseId: 'samfokonomi-2',
  chapterNumber: '5.1',
  title: 'Inntektsfordeling',
  description: 'Lorenz-kurve, Gini-koeffisient og desiler som verktoy for a male og analysere inntektsfordeling.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drofte ulike perspektiver pa rettferdig fordeling og velferd',
    'analysere hvordan skattesystemet og offentlige overforinger påvirker inntektsfordelingen',
  ],
  content: [
    {
      id: 'sf2-5-1-intro',
      type: 'text',
      content: `# Inntektsfordeling

Hvordan inntekten i et samfunn er fordelt mellom innbyggerne, er et sentralt tema i samfunnsokonomien. Fordelingen påvirker levestandard, sosial stabilitet og okonomisk vekst. For a kunne diskutere fordelingspolitikk pa en meningsfull mate trenger vi presise verktoy for a male og sammenligne fordelinger.

I dette kapittelet ser vi pa tre viktige analytiske verktoy: Lorenz-kurven, Gini-koeffisienten og desilinndelingen. Disse brukes av okonomer, politikere og internasjonale organisasjoner for a vurdere graden av ulikhet i et land og sammenligne land med hverandre.`,
    },
    {
      id: 'sf2-5-1-def-lorenz',
      type: 'definition',
      title: 'Lorenz-kurven',
      content: `**Lorenz-kurven** er en grafisk fremstilling av inntektsfordelingen i et samfunn. Den viser sammenhengen mellom den kumulative andelen av befolkningen (sortert fra lavest til hoyest inntekt) og den kumulative andelen av samlet inntekt denne gruppen mottar.

- **X-aksen** viser kumulativ andel av befolkningen (fra 0 % til 100 %).
- **Y-aksen** viser kumulativ andel av samlet inntekt (fra 0 % til 100 %).
- **Likhetslinja** (45-graders linja) representerer perfekt lik fordeling: de fattigste 10 % har 10 % av inntektene, de fattigste 50 % har 50 % osv.
- Jo lenger Lorenz-kurven boyer seg bort fra likhetslinja, desto storre er ulikheten.`,
    },
    {
      id: 'sf2-5-1-example-lorenz',
      type: 'example',
      title: 'Eksempel: Tolking av Lorenz-kurven',
      problem: 'I et tenkt land viser Lorenz-kurven at de fattigste 50 % av befolkningen mottar 20 % av samlet inntekt. Hva forteller dette om inntektsfordelingen?',
      solution: `Dersom de fattigste 50 % bare mottar 20 % av den samlede inntekten, betyr det at de rikeste 50 % sitter igjen med 80 % av inntektene. Lorenz-kurven ville ligge langt under likhetslinja.

**Tolkning:**
- Ved perfekt likhet ville 50 % av befolkningen hatt 50 % av inntektene.
- Avviket (50 % - 20 % = 30 prosentpoeng) viser en betydelig skjevfordeling.
- De rikeste 10 % kan potensielt motta en svart stor andel av den totale inntekten.

**Sammenligning:** I Norge mottar de fattigste 50 % omtrent 30 % av samlet inntekt, mens i mer ulike land som Brasil kan denne andelen ligge rundt 10-15 %. Norge har dermed en Lorenz-kurve som ligger narmere likhetslinja enn de fleste land.`,
    },
    {
      id: 'sf2-5-1-def-gini',
      type: 'definition',
      title: 'Gini-koeffisienten',
      content: `**Gini-koeffisienten** er et tall mellom 0 og 1 som oppsummerer graden av ulikhet i inntektsfordelingen.

- **Gini = 0** betyr perfekt lik fordeling (alle har lik inntekt).
- **Gini = 1** betyr maksimal ulikhet (en person har all inntekt).
- Gini-koeffisienten beregnes som forholdet mellom arealet mellom likhetslinja og Lorenz-kurven (A) og det totale arealet under likhetslinja (A + B): **Gini = A / (A + B)**.

**Typiske verdier:**
- Nordiske land: 0,25-0,30 (relativt lav ulikhet)
- USA: ca. 0,39 (moderat ulikhet)
- Sor-Afrika: ca. 0,63 (hoy ulikhet)

Gini-koeffisienten er nyttig fordi den gir ett enkelt tall som kan brukes til a sammenligne land og se utviklingstrender over tid.`,
    },
    {
      id: 'sf2-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-1-ex-1',
        number: '5.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva viser Lorenz-kurven?',
        multipleChoiceOptions: [
          'Sammenhengen mellom kumulativ andel av befolkningen og kumulativ andel av samlet inntekt',
          'Sammenhengen mellom BNP og befolkningsvekst',
          'Utviklingen i arbeidsledigheten over tid',
          'Forholdet mellom inflasjon og rente',
        ],
        hints: ['Tenk pa hva aksene i Lorenz-diagrammet representerer.'],
        solution: 'Lorenz-kurven viser sammenhengen mellom den kumulative andelen av befolkningen (sortert fra lavest til hoyest inntekt) og den kumulative andelen av samlet inntekt denne gruppen mottar. Jo lenger kurven boyer seg bort fra likhetslinja, desto storre er ulikheten i inntektsfordelingen.',
      },
    },
    {
      id: 'sf2-5-1-def-desiler',
      type: 'definition',
      title: 'Desiler og desilfordeling',
      content: `**Desiler** er en inndeling av befolkningen i ti like store grupper etter inntektsniva. Forste desil er de 10 % med lavest inntekt, mens tiende desil er de 10 % med hoyest inntekt.

**Desilforholdet** (ofte D9/D1 eller P90/P10) maler forholdet mellom inntekten til den overste desilen og den nederste. Et hoyt desilforhold indikerer stor spredning i inntektene.

Desiler brukes ofte til a analysere:
- Hvor mye av den samlede inntekten som tilfaller ulike grupper
- Hvordan skattepolitikk og overforinger påvirker fordelingen
- Utviklingen i topp- og bunninntektene over tid

Andre inndelinger som brukes er **kvintiler** (fem grupper a 20 %) og **persentiler** (hundre grupper a 1 %).`,
    },
    {
      id: 'sf2-5-1-example-desil',
      type: 'example',
      title: 'Eksempel: Desilfordeling i praksis',
      problem: 'I et land tjener den tiende desilen 12 ganger mer enn den forste desilen. Hva betyr dette, og hvordan kan vi tolke det?',
      solution: `Et desilforhold (D10/D1) pa 12 betyr at gjennomsnittsinntekten til de rikeste 10 % er tolv ganger hoyere enn gjennomsnittsinntekten til de fattigste 10 %.

**Tolkning:**
- Hvis den fattigste desilen i gjennomsnitt tjener 200 000 kr, tjener den rikeste desilen i gjennomsnitt 2 400 000 kr.
- I Norge er dette forholdet omtrent 6-7, noe som er lavt i internasjonal sammenheng.
- I USA er forholdet rundt 16-18, som indikerer langt storre ulikhet.

**Begrensning:** Desilforholdet fanger ikke opp ulikhet innad i desilene. Selv om topp-desilen har 12 ganger mer enn bunn-desilen, kan den rikeste prosenten ha mye mer enn de neste 9 prosentene i topp-desilen.`,
    },
    {
      id: 'sf2-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-1-ex-2',
        number: '5.1.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Land A har en Gini-koeffisient pa 0,28 og land B har en Gini-koeffisient pa 0,55. Hva kan vi konkludere?',
        multipleChoiceOptions: [
          'Land A har jevnere inntektsfordeling enn land B',
          'Land A har hoyere BNP enn land B',
          'Land B har flere fattige enn land A',
          'Land A har lavere skatter enn land B',
        ],
        hints: ['Husk at Gini-koeffisienten kun maler ulikhet i fordelingen, ikke nivaet pa inntektene.'],
        solution: 'En lavere Gini-koeffisient betyr jevnere fordeling. Land A (0,28) har altsa jevnere inntektsfordeling enn land B (0,55). Gini-koeffisienten sier ingenting om BNP-niva, absolutt fattigdom eller skattesatser. Et rikt land kan ha hoy ulikhet, og et fattig land kan ha lav ulikhet.',
      },
    },
    {
      id: 'sf2-5-1-text-norge',
      type: 'text',
      title: 'Inntektsfordelingen i Norge',
      content: `## Inntektsfordelingen i Norge

Norge har tradisjonelt hatt en relativt jevn inntektsfordeling sammenlignet med de fleste andre land. Flere faktører bidrar til dette:

- **Koordinert lonnsdannelse** - Trepartssamarbeidet mellom stat, arbeidsgivere og arbeidstakere holder lonnsforskjellene moderate.
- **Progressivt skattesystem** - De som tjener mest, betaler en hoyere andel i skatt.
- **Omfattende velferdsordninger** - Overforinger til de med lav inntekt lofter bunnen.
- **Gratis utdanning og helsevesen** - Reduserer betydningen av inntektsforskjeller for levekar.

Likevel har ulikheten i Norge okt noe de siste tiarene, sarlig drevet av okte kapitalinntekter blant de aller rikeste. Debatten om fordeling handler derfor stadig oftere om formue og kapitalinntekter, ikke bare lonnsinntekter.`,
    },
    {
      id: 'sf2-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-1-ex-3',
        number: '5.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar sammenhengen mellom Lorenz-kurven og Gini-koeffisienten. Hvorfor er det nyttig a ha begge verktoyene tilgjengelig nar man analyserer inntektsfordeling?',
        hints: [
          'Tenk pa hva Lorenz-kurven viser grafisk, og hva Gini-koeffisienten uttrykker som et tall.',
          'Kan to land ha lik Gini-koeffisient men ulik form pa Lorenz-kurven?',
        ],
        solution: 'Gini-koeffisienten beregnes ut fra Lorenz-kurven: den er forholdet mellom arealet mellom likhetslinja og Lorenz-kurven (A) og det totale arealet under likhetslinja (A+B). Lorenz-kurven gir mer informasjon fordi den viser hvor i fordelingen ulikheten befinner seg. To land kan ha lik Gini-koeffisient, men ulik Lorenz-kurve: det ene kan ha stor ulikhet i bunnen, det andre i toppen. Lorenz-kurven viser formen pa ulikheten, mens Gini-koeffisienten gir et enkelt tall som er lettere a sammenligne over tid og mellom land.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-1-ex-4',
        number: '5.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva desiler er, og bruk et konkret eksempel til a vise hvordan desilforholdet kan brukes til a sammenligne inntektsfordelingen i to ulike land.',
        hints: [
          'Velg to land med forskjellig grad av ulikhet, for eksempel Norge og USA.',
          'Bruk konkrete tall for a illustrere poenget.',
        ],
        solution: 'Desiler deler befolkningen i ti like store grupper etter inntekt. Desilforholdet (D10/D1) viser hvor mange ganger mer den rikeste tiendedelen tjener sammenlignet med den fattigste. Eksempel: I Norge er desilforholdet omtrent 6, mens det i USA er rundt 16. Det betyr at forskjellen mellom de rikeste og de fattigste 10 % er mye storre i USA. I Norge tjener topp-desilen kanskje 6 ganger mer enn bunn-desilen, mens i USA er forskjellen 16 ganger. Dette gjenspeiler forskjeller i lonnsdannelse, skattesystem og velferdsordninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-5-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering - Inntektsfordeling

- **Lorenz-kurven** viser grafisk forholdet mellom kumulativ befolkningsandel og kumulativ inntektsandel.
- **Gini-koeffisienten** (0-1) gir et enkelt mal pa ulikhet, der 0 er perfekt likhet og 1 er maksimal ulikhet.
- **Desiler** deler befolkningen i ti grupper etter inntekt, og desilforholdet viser spredningen mellom topp og bunn.
- Norge har relativt lav ulikhet, men trenden har vart svakt okende de siste tiarene.
- Fordelingsanalyse er grunnlaget for a utforme effektiv skatte- og velferdspolitikk.`,
    },
    {
      id: 'sf2-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-1-ex-5',
        number: '5.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gini-koeffisienten i Norge har okt fra omtrent 0,22 pa 1980-tallet til rundt 0,27 i dag. Droft mulige arsaker til denne okningen, og vurder om en Gini-koeffisient pa 0,27 er et problem for det norske samfunnet.',
        hints: [
          'Tenk pa endringer i arbeidsmarkedet, kapitalinntekter og globalisering.',
          'Vurder om noe ulikhet kan vare positivt for okonomien.',
        ],
        solution: 'Okningen i Gini-koeffisienten kan skyldes flere faktører: okte kapitalinntekter blant de rikeste (aksjegevinster, utbytte), globalisering som presser lonninger i noen sektorer, teknologisk endring som oker etterspørselen etter hoykompetent arbeidskraft, og politiske endringer som lavere toppskatt. Om 0,27 er et problem, avhenger av perspektiv. Sammenlignet med andre land er det fortsatt lavt. Noe ulikhet kan gi insentiver til utdanning og entreprenorskap. Men om trenden fortsetter, kan det svekke sosial tillit, redusere sosial mobilitet og skape politisk polarisering. Det handler ikke bare om tallet, men om retningen det utvikler seg i.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-1-ex-6',
        number: '5.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter styrker og svakheter ved Gini-koeffisienten som mal pa ulikhet. Er det tilstrekkelig a bruke ett enkelt tall for a vurdere inntektsfordelingen i et land?',
        hints: [
          'Tenk pa hva Gini-koeffisienten fanger opp og hva den ikke fanger opp.',
          'Vurder om det finnes situasjoner der to land med lik Gini kan ha svart ulike fordelinger.',
        ],
        solution: 'Styrker: Gini-koeffisienten er enkel a forsta, muliggjor sammenligning mellom land og over tid, og oppsummerer hele fordelingen i ett tall. Svakheter: Den skiller ikke mellom ulikhet i toppen og bunnen av fordelingen, fanger ikke opp formuesforskjeller, og sier ingenting om absolutt levestandard. To land med lik Gini kan ha svart ulike fordelingsmonstre. For en fullstendig analyse bor man kombinere Gini med Lorenz-kurver, desilfordeling, fattigdomsmal og informasjon om sosial mobilitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.2: Skattesystemet
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_5_2: TextbookChapter = {
  id: 'samfokonomi-2-5-2',
  courseId: 'samfokonomi-2',
  chapterNumber: '5.2',
  title: 'Skattesystemet',
  description: 'Progressiv og flat skatt, skattegrunnlag, effektivitetstap og utforming av skattesystemet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere hvordan skattesystemet og offentlige overforinger påvirker inntektsfordelingen',
    'drofte ulike perspektiver pa rettferdig fordeling og velferd',
  ],
  content: [
    {
      id: 'sf2-5-2-intro',
      type: 'text',
      content: `# Skattesystemet

Skattesystemet er statens viktigste verktoy for a finansiere offentlige tjenester og omfordele inntekt. Hvordan skatten er utformet, påvirker ikke bare inntektsfordelingen, men ogsa insentivene til a arbeide, spare og investere. Et godt skattesystem ma balansere hensynet til rettferdig fordeling mot hensynet til okonomisk effektivitet.

I samfunnsokonomien analyserer vi skattesystemet ut fra tre grunnleggende sporsmal: Hva skal beskattes (skattegrunnlaget)? Hvor mye skal beskattes (skattesatsen)? Og hvem skal betale mest (fordelingsprofilen)?`,
    },
    {
      id: 'sf2-5-2-def-progressiv',
      type: 'definition',
      title: 'Progressiv skatt',
      content: `**Progressiv skatt** betyr at skattesatsen oker med inntekten. De som tjener mer, betaler en hoyere andel av inntekten sin i skatt.

- **Marginalskatt** er skatten man betaler pa den siste kronen man tjener.
- **Gjennomsnittsskatt** er total skatt delt pa total inntekt.
- I et progressivt system er marginalskatten hoyere enn gjennomsnittsskatten for de fleste inntektsnivaer.

**Norges skattesystem** er progressivt, med trinnskatt der satsen oker i flere trinn:
- Trinn 1: 1,7 % for inntekt over ca. 208 050 kr
- Trinn 2: 4,0 % for inntekt over ca. 292 850 kr
- Trinn 3: 13,6 % for inntekt over ca. 670 000 kr
- Trinn 4: 16,6 % for inntekt over ca. 937 900 kr
- Trinn 5: 17,6 % for inntekt over ca. 1 573 500 kr

I tillegg kommer alminnelig skatt (22 %) og trygdeavgift.`,
    },
    {
      id: 'sf2-5-2-example-marginal',
      type: 'example',
      title: 'Eksempel: Marginalskatt vs. gjennomsnittsskatt',
      problem: 'En arbeidstaker har en bruttoinntekt pa 700 000 kr. Forklar forskjellen mellom marginalskatt og gjennomsnittsskatt for denne personen.',
      solution: `Med en inntekt pa 700 000 kr befinner arbeidstakeren seg i trinn 3 av trinnskatten.

**Marginalskatt:** Den siste kronen denne personen tjener, beskattes med trinnskattesats 13,6 % pluss alminnelig skatt 22 % pluss trygdeavgift 7,9 %, totalt ca. 43,5 %. Det betyr at hvis personen jobber overtid og tjener 1 000 kr ekstra, sitter vedkommende igjen med ca. 565 kr etter skatt.

**Gjennomsnittsskatt:** Total skatt delt pa total inntekt. Siden mye av inntekten beskattes i lavere trinn, vil gjennomsnittsskatten vare lavere enn marginalskatten, kanskje rundt 30-33 %.

**Forskjellen er viktig:** Marginalskatten påvirker insentivene til a jobbe mer (gir den ekstra timen nok igjen?), mens gjennomsnittsskatten bestemmer den totale skattebelastningen og kjopekraften.`,
    },
    {
      id: 'sf2-5-2-def-flat',
      type: 'definition',
      title: 'Flat skatt',
      content: `**Flat skatt** (proporsjonal skatt) betyr at alle betaler samme prosentandel av inntekten i skatt, uavhengig av inntektsniva.

**Egenskaper:**
- Marginalskatt = gjennomsnittsskatt for alle inntektsnivaer
- Enklere a administrere og forsta
- Gir svakere omfordelingseffekt enn progressiv skatt

**Argumenter for flat skatt:**
- Enklere system med lavere administrasjonskostnader
- Mindre vridning av insentiver (lik marginalskatt for alle)
- Kan kombineres med et skattefritt bunnfradrag for a gi noe progressivitet

**Argumenter mot flat skatt:**
- Svakere omfordelingseffekt
- De med lav inntekt rammes hardere relativt sett
- Kan oke ulikheten i samfunnet

Flere osteuropeiske land har innfort flat skatt, mens de nordiske landene holder fast ved progressive systemer.`,
    },
    {
      id: 'sf2-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-2-ex-1',
        number: '5.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner et progressivt skattesystem?',
        multipleChoiceOptions: [
          'Skattesatsen oker med inntekten, slik at de som tjener mest betaler en hoyere andel',
          'Alle betaler samme prosentandel i skatt',
          'De med lavest inntekt betaler hoyest skatteprosent',
          'Skatten er fast i kroner, uavhengig av inntekt',
        ],
        hints: ['Tenk pa hva ordet progressiv betyr i skattsammenheng.'],
        solution: 'Et progressivt skattesystem betyr at skattesatsen oker med inntekten. De som tjener mer, betaler en hoyere andel av inntekten sin i skatt. I Norge realiseres dette gjennom trinnskatten, der satsen stiger i flere trinn etter hvert som inntekten oker.',
      },
    },
    {
      id: 'sf2-5-2-def-skattegrunnlag',
      type: 'definition',
      title: 'Skattegrunnlag og Laffer-kurven',
      content: `**Skattegrunnlaget** er det som beskattes - det kan vare inntekt, formue, forbruk, eiendom eller kapitalgevinster. Bredden og sammensetningen av skattegrunnlaget bestemmer hvor mye staten kan kreve inn.

**Laffer-kurven** illustrerer sammenhengen mellom skattesats og skatteinntekter:
- Ved 0 % skattesats er skatteinntektene null (ingen skatt innkreves).
- Ved 100 % skattesats er skatteinntektene ogsa null (ingen vil jobbe hvis alt tas i skatt).
- Et sted mellom 0 % og 100 % finnes den skattesatsen som maksimerer statens inntekter.

**Prinsippet om bred base og lav sats:** Et godt skattesystem bor ha et bredt skattegrunnlag (mange ting beskattes) med relativt lave satser. Dette gir hoye inntekter med lave effektivitetstap, fordi det blir vanskelig a unnga skatt og vridningene i okonomien minimeres.`,
    },
    {
      id: 'sf2-5-2-example-laffer',
      type: 'example',
      title: 'Eksempel: Laffer-kurven og skattetilpasning',
      problem: 'Forklar hvorfor en okning i skattesatsen ikke alltid forer til okte skatteinntekter.',
      solution: `Ifolge Laffer-kurven finnes det et punkt der hoyere skattesats faktisk reduserer skatteinntektene. Dette skyldes atferdsendringer:

**Ved moderate skattesatser:**
- Okt skattesats gir okte inntekter fordi de fleste fortsatt jobber og betaler skatt.

**Ved hoye skattesatser:**
- Folk jobber mindre (redusert arbeidstilbud).
- Flere forsoker a unndra skatt eller flytte inntekt til lavskattland.
- Bedrifter investerer mindre, noe som reduserer den okonomiske aktiviteten.
- Skattegrunnlaget krymper, og total skatteinnkreving kan falle.

**Norsk eksempel:** Da formuesskatten ble opprettholdt mens Sverige fjernet sin, argumenterte noen for at rike nordmenn ville flytte til Sverige for a unnga skatten. Dette ville redusere det norske skattegrunnlaget og potensielt gi lavere totale skatteinntekter.`,
    },
    {
      id: 'sf2-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-2-ex-2',
        number: '5.2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva illustrerer Laffer-kurven?',
        multipleChoiceOptions: [
          'At det finnes en skattesats som maksimerer skatteinntektene, og at satser over dette nivaet kan gi lavere innkreving',
          'At hoyere skattesats alltid gir hoyere skatteinntekter',
          'At flat skatt gir hoyest skatteinntekter',
          'At skatteinntektene er uavhengige av skattesatsen',
        ],
        hints: ['Tenk pa hva som skjer med folks atferd ved svart hoye skattesatser.'],
        solution: 'Laffer-kurven viser at sammenhengen mellom skattesats og skatteinntekter ikke er linear. Ved lave satser gir okt skatt hoyere inntekter, men ved svart hoye satser kan folk redusere arbeidsinnsatsen, flytte kapital eller unndra skatt, slik at skattegrunnlaget krymper og de totale skatteinntektene faller.',
      },
    },
    {
      id: 'sf2-5-2-text-effektivitet',
      type: 'text',
      title: 'Effektivitetstap ved beskatning',
      content: `## Effektivitetstap ved beskatning

Alle skatter skaper et **effektivitetstap** (dodvektstap) fordi de vrir folks beslutninger bort fra det som er samfunnsokonomisk optimalt. Skatt pa arbeidsinntekt gjor det mindre lonnsomt a jobbe, skatt pa sparing gjor det mindre lonnsomt a spare, og skatt pa varer endrer forbruksmonsteret.

**Nokkelprinsipper for a minimere effektivitetstapet:**
- **Bred base, lav sats:** Mange sma vridninger er bedre enn noen fa store.
- **Beskatt det som er vanskelig a flytte:** Eiendomsskatt gir lite effektivitetstap fordi eiendom ikke kan flyttes til utlandet.
- **Unnga dobbeltbeskatning:** A beskatte samme inntekt flere ganger forsterker vridningene.
- **Ramsey-regelen:** Varer med lav priselastisitet bor beskattes hardere fordi etterspørselen endrer seg lite.

Et godt skattesystem er et kompromiss mellom fordelingshensyn (progressivitet) og effektivitetshensyn (minimale vridninger).`,
    },
    {
      id: 'sf2-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-2-ex-3',
        number: '5.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign progressiv skatt og flat skatt. Droft fordeler og ulemper ved hver av dem, med vekt pa hensynet til fordeling og okonomisk effektivitet.',
        hints: [
          'Tenk pa hvordan de to systemene påvirker insentivene til a jobbe og investere.',
          'Vurder omfordelingseffekten og administrasjonskostnadene.',
        ],
        solution: 'Progressiv skatt gir sterkere omfordeling fordi de rike betaler en hoyere andel, men kan svekke insentivene til arbeid og investeringer for de med hoyest inntekt. Flat skatt er enklere a administrere og gir like insentiver for alle, men omfordeler mindre og kan oppfattes som urettferdig fordi en krone i skatt betyr mer for en lavinntektsfamilie. I praksis kombinerer mange land elementer av begge: en flat basisskatt med progressive tillegg, eller en flat skatt med store bunnfradrag som gir reell progressivitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-2-ex-4',
        number: '5.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar prinsippet om bred base og lav sats i utformingen av et skattesystem. Hvorfor anbefaler okonomer dette prinsippet?',
        hints: [
          'Tenk pa hva som skjer med effektivitetstapet nar skattesatsen oker.',
          'Vurder hva som skjer dersom mange fradrag og unntak gjor skattegrunnlaget smalt.',
        ],
        solution: 'Prinsippet om bred base og lav sats innebarer at skattegrunnlaget bor vare sa bredt som mulig, med relativt lave skattesatser. Okonomer anbefaler dette fordi effektivitetstapet oker mer enn proporsjonalt med skattesatsen (det oker kvadratisk). Det er bedre a beskatte mange aktiviteter litt enn noen fa aktiviteter mye. Et bredt skattegrunnlag med fa unntak reduserer muligheten for skatteplanlegging og gjor systemet mer rettferdig. Et smalt skattegrunnlag med hoye satser gir store vridninger, stimulerer til unndragelse og kan faktisk gi lavere samlede inntekter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-5-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering - Skattesystemet

- **Progressiv skatt** betyr at skattesatsen oker med inntekten; **flat skatt** betyr lik sats for alle.
- **Marginalskatt** er skatten pa siste krone tjent; **gjennomsnittsskatt** er total skatt delt pa total inntekt.
- **Laffer-kurven** viser at det finnes en optimal skattesats som maksimerer inntektene.
- **Skattegrunnlaget** bor vare bredt med lave satser for a minimere effektivitetstap.
- Et godt skattesystem balanserer fordeling (omfordeling) mot effektivitet (minimale vridninger).`,
    },
    {
      id: 'sf2-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-2-ex-5',
        number: '5.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I Norge betaler de 10 % rikeste omtrent 38 % av all inntektsskatt. Droft om dette er rettferdig, og vurder argumenter for og mot a oke skatten for de rikeste ytterligere.',
        hints: [
          'Tenk pa ulike rettferdighetsprinsipper: evneprinsippet, nytteprinsippet og likebehandlingsprinsippet.',
          'Vurder ogsa mulige atferdsendringer ved okt skatt.',
        ],
        solution: 'Ifolge evneprinsippet bor de som har mest betalingsevne betale mest, noe som stotter at de rikeste betaler en stor andel. Argumenter for ytterligere okning: de rikeste har hoyest betalingsevne, marginalnytten av penger er lavere for rike, og det kan finansiere viktige velferdstjenester. Argumenter mot: kan svekke insentivene til investering og entreprenorskap, kan fore til skatteflukt og kapitalutgang, og Norge konkurrerer med andre land om a tiltrekke kapital. Det er ogsa et sporsmal om effektivitet: dersom vi er over toppen pa Laffer-kurven, vil okt skattesats gi lavere, ikke hoyere, inntekter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-2-ex-6',
        number: '5.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjor rede for hva effektivitetstap ved beskatning innebarer. Bruk et eksempel for a illustrere hvordan en skatt kan endre folks atferd og fore til et samfunnsokonomisk tap.',
        hints: [
          'Tenk pa en konkret skatt, for eksempel skatt pa arbeidsinntekt eller merverdiavgift.',
          'Vis hvordan skatten forer til at noen transaksjoner eller aktiviteter ikke gjennomfores.',
        ],
        solution: 'Effektivitetstap (dodvektstap) oppstar fordi skatter vrir folks beslutninger bort fra det samfunnsokonomisk optimale. Eksempel: En tomrer vurderer a ta en ekstra jobb til 500 kr. Uten skatt ville han tatt jobben fordi kunden er villig til a betale og han er villig til a jobbe. Men med 43 % marginalskatt sitter han igjen med bare 285 kr. Hvis han verdsetter fritiden til 350 kr, tar han ikke jobben. Resultatet: kunden far ikke tjenesten, tomreren far ikke inntekten, og staten far ingen skatteinntekt. Transaksjonen som ville ha gagnet begge parter gjennomfores ikke. Dette tapet er dodvektstapet - verdien av de transaksjonene som forsvinner pa grunn av skatten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.3: Velferdsstaten
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_5_3: TextbookChapter = {
  id: 'samfokonomi-2-5-3',
  courseId: 'samfokonomi-2',
  chapterNumber: '5.3',
  title: 'Velferdsstaten',
  description: 'Universelle velferdsordninger, NAV, trygdesystemet og den norske velferdsmodellen.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drofte ulike perspektiver pa rettferdig fordeling og velferd',
    'vurdere velferdsstatens barekraft og utfordringer i et langsiktig perspektiv',
  ],
  content: [
    {
      id: 'sf2-5-3-intro',
      type: 'text',
      content: `# Velferdsstaten

Velferdsstaten er et system der staten tar ansvar for innbyggernes grunnleggende velferd gjennom offentlige tjenester, sosiale forsikringer og inntektsoverforinger. Den norske velferdsstaten er en av verdens mest omfattende og bygger pa prinsippet om at alle borgere skal ha tilgang til et minimum av okonomisk trygghet, helse og utdanning.

Velferdsstatens omfang og innretning varierer mellom land, men i Norge er den kjennetegnet av universelle ordninger som gjelder alle innbyggere, uavhengig av inntekt eller sosial bakgrunn. Dette skiller den norske modellen fra mer behovsprovde systemer i andre land.`,
    },
    {
      id: 'sf2-5-3-def-universell',
      type: 'definition',
      title: 'Universelle velferdsordninger',
      content: `**Universelle velferdsordninger** er offentlige tjenester og ytelser som gjelder alle innbyggere, uavhengig av inntekt, formue eller sosial status.

**Kjennetegn:**
- Alle har lik rett til ytelsen
- Finansieres gjennom skatter og avgifter
- Skaper bred oppslutning fordi alle er mottakere
- Unngår stigmatisering av mottakere

**Eksempler i Norge:**
- Barnetrygd - utbetales til alle familier med barn under 18 ar
- Folketrygden - gir rett til alderspensjon, sykepenger og dagpenger
- Gratis grunnskole og videregaende opplaring
- Offentlig helsevesen med lave egenandeler
- Fodselspermisjon med full lonnskompensasjon

**Motsetning: behovsprovde ordninger** gis kun til de som kan dokumentere behov, for eksempel sosialhjelp. Slike ordninger er mer malrettede, men kan skape stigma og fattigdomsfeller.`,
    },
    {
      id: 'sf2-5-3-example-universell',
      type: 'example',
      title: 'Eksempel: Universell vs. behovsprovd',
      problem: 'Barnetrygden i Norge er universell - den gis til alle familier med barn. Hva er fordelene og ulempene ved dette sammenlignet med en behovsprovd ordning der bare lavinntektsfamilier far stotte?',
      solution: `**Fordeler med universell barnetrygd:**
- Ingen stigmatisering - alle far ytelsen, sa det er ingen skam knyttet til a motta den.
- Ingen fattigdomsfelle - man mister ikke ytelsen ved a oke inntekten, noe som kan vare et problem med behovsprovde ordninger.
- Enklere administrasjon - ingen behov for a vurdere hvem som kvalifiserer.
- Bred politisk oppslutning - alle har interesse av a opprettholde ordningen.

**Ulemper med universell barnetrygd:**
- Dyrere for staten fordi alle mottar den, ogsa de rike.
- Mindre malrettet - pengene kunne vart konsentrert om de som trenger dem mest.
- Omfordelingseffekten er svakere enn en behovsprovd ordning med samme budsjett.

I praksis kompenserer progressiv beskatning for dette: rike familier betaler mer i skatt enn de far i barnetrygd, slik at nettoeffekten likevel er omfordelende.`,
    },
    {
      id: 'sf2-5-3-def-nav',
      type: 'definition',
      title: 'NAV og trygdesystemet',
      content: `**NAV (Arbeids- og velferdsforvaltningen)** er den norske statens viktigste organ for arbeids- og velferdstjenester. NAV ble opprettet i 2006 gjennom sammenslåingen av Aetat, trygdeetaten og den kommunale sosialtjenesten.

**NAVs hovedoppgaver:**
- **Dagpenger** - inntektssikring ved arbeidsledighet
- **Sykepenger** - kompensasjon ved sykdom (inntil 100 % i 12 maneder)
- **Arbeidsavklaringspenger (AAP)** - for de som er under utredning eller behandling
- **Uforetrygd** - varig inntektssikring for de som ikke kan jobbe
- **Alderspensjon** - fra folketrygden
- **Foreldrepenger** - kompensasjon under foreldrepermisjon
- **Sosialhjelp** - siste sikkerhetsnett for de som ikke har andre inntektskilder

**Folketrygden** er grunnpilaren i det norske trygdesystemet. Alle som bor eller arbeider i Norge er automatisk medlemmer, og den finansieres gjennom trygdeavgiften som trekkes fra lonnen.`,
    },
    {
      id: 'sf2-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-3-ex-1',
        number: '5.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner en universell velferdsordning?',
        multipleChoiceOptions: [
          'Den gjelder alle innbyggere, uavhengig av inntekt eller sosial status',
          'Den gis bare til de som kan dokumentere at de trenger den',
          'Den finansieres gjennom private forsikringer',
          'Den gjelder bare norske statsborgere som bor i utlandet',
        ],
        hints: ['Tenk pa ordet universell - det betyr allmenngyldig eller gjeldende for alle.'],
        solution: 'En universell velferdsordning gjelder alle innbyggere uavhengig av inntekt, formue eller sosial status. Eksempler er barnetrygd, folketrygden og gratis grunnskole. Fordelen er at det unngår stigmatisering og sikrer bred oppslutning, mens ulempen er at det koster mer enn behovsprovde ordninger.',
      },
    },
    {
      id: 'sf2-5-3-text-modell',
      type: 'text',
      title: 'Den norske velferdsmodellen',
      content: `## Den norske velferdsmodellen

Den norske (eller nordiske) velferdsmodellen kombinerer tre elementer som forsterker hverandre:

**1. Universelle velferdsordninger**
Et omfattende sikkerhetsnett som gir alle innbyggere grunnleggende trygghet. Dette inkluderer helse, utdanning, pensjon og inntektssikring.

**2. Koordinert lonnsdannelse**
Trepartssamarbeidet mellom stat, arbeidsgivere og fagforeninger holder lonnsforskjellene moderate og sikrer produktivitetsvekst.

**3. Aktiv arbeidsmarkedspolitikk**
Staten investerer i utdanning, omskolering og tiltak for a fa folk tilbake i arbeid, fremfor a bare gi passive stonader.

**Resultatene:**
- Hoy sysselsetting, ogsa blant kvinner
- Lav ulikhet sammenlignet med de fleste land
- Hoy sosial mobilitet
- Hoy tillit mellom innbyggere og til institusjoner
- Relativt lav fattigdom

Modellen forutsetter hoy yrkesdeltakelse og et bredt skattegrunnlag. Uten at en stor andel av befolkningen jobber og betaler skatt, er det ikke mulig a finansiere de omfattende velferdsordningene.`,
    },
    {
      id: 'sf2-5-3-example-modell',
      type: 'example',
      title: 'Eksempel: Sammenligning av velferdsmodeller',
      problem: 'Sammenlign den norske velferdsmodellen med den amerikanske. Hva er de viktigste forskjellene, og hvilke konsekvenser har de?',
      solution: `**Den norske modellen (sosialdemokratisk):**
- Universelle ordninger finansiert gjennom hoye skatter
- Offentlig helsevesen med lave egenandeler
- Sterk statlig regulering av arbeidsmarkedet
- Resultat: lav ulikhet, hoy sosial mobilitet, men hoyt skattetrykk

**Den amerikanske modellen (liberal):**
- Behovsprovde ordninger og privat forsikring
- Helseforsikring hovedsakelig gjennom arbeidsgiver
- Svak regulering av arbeidsmarkedet
- Resultat: hoy ulikhet, lavere sosial mobilitet, men lavere skatter og potensielt sterkere insentiver til a ta risiko

**Konsekvensene vises tydelig i tall:**
- Gini-koeffisient: Norge ca. 0,27 vs. USA ca. 0,39
- Andel uten helseforsikring: Norge 0 % vs. USA ca. 8 %
- Sosial mobilitet: En nordmann fra bunn-desilen har langt storre sjanse for a na topp-desilen enn en amerikaner

Ingen modell er objektivt best - det avhenger av hvilke verdier man vektlegger: likhet og trygghet versus individuell frihet og insentiver.`,
    },
    {
      id: 'sf2-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-3-ex-2',
        number: '5.3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av folgende er IKKE en sentral del av den norske velferdsmodellen?',
        multipleChoiceOptions: [
          'Behovsprovde velferdsordninger som bare gjelder de aller fattigste',
          'Universelle velferdsordninger som gjelder alle innbyggere',
          'Koordinert lonnsdannelse gjennom trepartssamarbeid',
          'Aktiv arbeidsmarkedspolitikk med omskolering og tiltak',
        ],
        hints: ['Tenk pa hva som er spesielt for den norske modellen sammenlignet med for eksempel den amerikanske.'],
        solution: 'Den norske velferdsmodellen bygger pa universelle ordninger, ikke behovsprovde. Universalitet, koordinert lonnsdannelse og aktiv arbeidsmarkedspolitikk er de tre soylene i modellen. Behovsprovde ordninger finnes som tilleggsordninger (sosialhjelp), men de er ikke den sentrale modellen.',
      },
    },
    {
      id: 'sf2-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-3-ex-3',
        number: '5.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjor rede for forskjellen mellom universelle og behovsprovde velferdsordninger. Droft fordeler og ulemper ved hver tilnarming, og forklar hvorfor Norge har valgt universelle ordninger.',
        hints: [
          'Tenk pa stigmatisering, fattigdomsfeller og administrasjonskostnader.',
          'Vurder ogsa den politiske oppslutningen om ordningene.',
        ],
        solution: 'Universelle ordninger gjelder alle uavhengig av inntekt, mens behovsprovde ordninger kun gis til de som kan dokumentere behov. Universelle ordninger unngår stigmatisering og fattigdomsfeller, er enklere a administrere og har bredere politisk stotte. Behovsprovde ordninger er billigere og mer malrettede, men kan stigmatisere mottakere og skape fattigdomsfeller der folk mister ytelser nar inntekten oker. Norge har valgt universelle ordninger fordi de skaper en bred samfunnskontrakt der alle bidrar og alle mottar, noe som styrker tilliten og oppslutningen om velferdsstaten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-3-ex-4',
        number: '5.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv NAVs rolle i den norske velferdsstaten. Hvilke hovedoppgaver har NAV, og hvorfor ble de tre tidligere etatene slatt sammen?',
        hints: [
          'Tenk pa hvilke behov brukerne har, og hvorfor det kan vare vanskelig a forholde seg til tre ulike etater.',
          'Vurder ogsa utfordringene med NAV-reformen.',
        ],
        solution: 'NAV ble opprettet i 2006 ved sammenslåing av Aetat (arbeid), trygdeetaten (trygd) og kommunal sosialtjeneste. Hovedoppgavene er dagpenger, sykepenger, arbeidsavklaringspenger, uforetrygd, alderspensjon, foreldrepenger og sosialhjelp. Sammenslåingen skulle gi brukerne ett kontaktpunkt istedenfor tre, forenkle overganger mellom ytelser og gi bedre helhetlig oppfolging. Utfordringene har vart at organisasjonen ble svart stor og kompleks, og at mange brukere opplever systemet som byrakratisk og vanskelig a navigere i.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-5-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering - Velferdsstaten

- **Velferdsstaten** er et system der staten sikrer grunnleggende velferd gjennom tjenester, forsikringer og overforinger.
- **Universelle ordninger** gjelder alle og unngår stigmatisering; **behovsprovde ordninger** er mer malrettede men kan skape fattigdomsfeller.
- **NAV** forvalter sentrale ytelser som dagpenger, sykepenger, uforetrygd og alderspensjon.
- **Den norske modellen** kombinerer universelle ordninger, koordinert lonnsdannelse og aktiv arbeidsmarkedspolitikk.
- Modellen forutsetter hoy yrkesdeltakelse og bred skattefinansiering.`,
    },
    {
      id: 'sf2-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-3-ex-5',
        number: '5.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Den norske velferdsmodellen kombinerer universelle ordninger, koordinert lonnsdannelse og aktiv arbeidsmarkedspolitikk. Droft hvorfor disse tre elementene forsterker hverandre, og vurder om modellen kan eksporteres til andre land.',
        hints: [
          'Tenk pa hvordan hvert element bidrar til a opprettholde de andre.',
          'Vurder kulturelle, historiske og okonomiske forutsetninger for modellen.',
        ],
        solution: 'De tre elementene forsterker hverandre: Universelle ordninger skaper trygghet som gjor at arbeidstakere tor a akseptere omstilling. Koordinert lonnsdannelse holder lonnsforskjellene moderate og sikrer at produktivitetsveksten fordeles bredt. Aktiv arbeidsmarkedspolitikk sorger for at folk raskt kommer tilbake i jobb, noe som sikrer skattegrunnlaget som finansierer de universelle ordningene. Eksport av modellen er vanskelig fordi den forutsetter hoy tillit mellom borgere og myndigheter, sterke fagforeninger, tradisjon for samarbeid og vilje til a betale hoy skatt. Disse forutsetningene er historisk og kulturelt betinget, og finnes ikke i alle land.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-5-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-3-ex-6',
        number: '5.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign den norske velferdsmodellen med en annen velferdsmodell (for eksempel den amerikanske eller britiske). Droft hvilke konsekvenser forskjellene har for ulikhet, sosial mobilitet og okonomisk effektivitet.',
        hints: [
          'Velg en konkret modell og beskriv hovedforskjellene systematisk.',
          'Bruk konkrete data eller eksempler for a underbygge argumentene.',
        ],
        solution: 'Sammenlignet med den amerikanske modellen: Norge har universelle ordninger mot USAs behovsprovde, sterkere regulering av arbeidsmarkedet, og hoyere skatter. Konsekvenser for ulikhet: Norges Gini er 0,27 mot USAs 0,39. Sosial mobilitet: studier viser at det er storre sjanse for a klatre fra fattigdom til velstand i Norge. Okonomisk effektivitet: USA har potensielt sterkere insentiver for innovasjon og risikotaking, men hoyere ulikhet kan svekke den samlede etterspørselen og humankapitalutviklingen. Norges modell er dyrere i form av skatter, men genererer hoy produktivitet gjennom god utdanning og et friskt arbeidsliv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.4: Fattigdom og ulikhet
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_5_4: TextbookChapter = {
  id: 'samfokonomi-2-5-4',
  courseId: 'samfokonomi-2',
  chapterNumber: '5.4',
  title: 'Fattigdom og ulikhet',
  description: 'Absolutt og relativ fattigdom, sosial mobilitet og sammenhengen mellom ulikhet og samfunnsutvikling.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drofte ulike perspektiver pa rettferdig fordeling og velferd',
    'analysere hvordan skattesystemet og offentlige overforinger påvirker inntektsfordelingen',
  ],
  content: [
    {
      id: 'sf2-5-4-intro',
      type: 'text',
      content: `# Fattigdom og ulikhet

Fattigdom og ulikhet er to beslektede, men forskjellige begreper. Ulikhet handler om fordelingen av ressurser mellom mennesker, mens fattigdom handler om at noen har for lite til a dekke grunnleggende behov eller til a delta fullverdig i samfunnet.

Selv i rike land som Norge finnes det fattigdom. For a forsta og bekjempe fattigdom trenger vi presise definisjoner og mal, samt kunnskap om hva som skaper og opprettholder fattigdom. I dette kapittelet ser vi pa absolutt og relativ fattigdom, sosial mobilitet og sammenhengen mellom ulikhet og samfunnsutvikling.`,
    },
    {
      id: 'sf2-5-4-def-absolutt',
      type: 'definition',
      title: 'Absolutt fattigdom',
      content: `**Absolutt fattigdom** betyr at en person ikke har tilstrekkelige ressurser til a dekke grunnleggende behov som mat, klar, bolig og helsehjelp.

- **Verdensbanken** definerer ekstrem fattigdom som a leve for under 2,15 dollar om dagen (justert for kjopekraft).
- Absolutt fattigdom er mest utbredt i utviklingsland, sarlig i Afrika sor for Sahara og deler av Sor-Asia.
- Globalt har andelen i ekstrem fattigdom sunket dramatisk - fra over 35 % i 1990 til under 10 % i dag.

**Kjennetegn:**
- Mangel pa nok mat (underernaring)
- Mangel pa rent vann og sanitaranlegg
- Ingen tilgang til grunnleggende helsetjenester
- Ingen mulighet for utdanning
- Mangel pa trygg bolig

Absolutt fattigdom er et objektivt mal som ikke avhenger av hva andre i samfunnet har.`,
    },
    {
      id: 'sf2-5-4-def-relativ',
      type: 'definition',
      title: 'Relativ fattigdom',
      content: `**Relativ fattigdom** betyr at en person har vesentlig lavere inntekt enn det som er vanlig i samfunnet vedkommende lever i. Man er relativt fattig hvis man ikke har rad til a leve slik de fleste andre i samfunnet gjor.

- **EU-definisjonen:** En person er i risiko for fattigdom dersom husholdningens inntekt er under 60 % av medianinntekten.
- I Norge betyr dette en inntekt under ca. 250 000 kr for en enslig person.
- Relativ fattigdom finnes i alle land, ogsa rike land som Norge.

**Eksempler pa relativ fattigdom i Norge:**
- Barn som ikke har rad til a delta pa fritidsaktiviteter
- Familier som ikke har rad til ferie
- Enslige forsorgere med lav inntekt som sliter med boutgifter
- Innvandrerfamilier med svak tilknytning til arbeidsmarkedet

Relativ fattigdom er et mal som endrer seg med det generelle velstandsnivaet: Nar medianinntekten oker, oker ogsa terskelen for relativ fattigdom.`,
    },
    {
      id: 'sf2-5-4-example-fattigdom',
      type: 'example',
      title: 'Eksempel: Absolutt vs. relativ fattigdom',
      problem: 'En familie i Norge har en inntekt pa 300 000 kr i aret. En familie i et utviklingsland lever pa 1 dollar om dagen per person. Hvilken type fattigdom opplever hver av disse familiene?',
      solution: `**Familien i utviklingslandet:**
- Lever under Verdensbankens grense for ekstrem fattigdom (2,15 USD/dag).
- Opplever **absolutt fattigdom** - de kan ikke dekke grunnleggende behov som mat, rent vann og helsetjenester.
- Situasjonen er objektivt alvorlig uavhengig av hva andre i landet tjener.

**Familien i Norge (300 000 kr):**
- Har nok til a dekke grunnleggende materielle behov.
- Opplever trolig **relativ fattigdom** dersom dette er under 60 % av medianinntekten.
- Barna kan mangle mulighet til a delta pa aktiviteter som er vanlige blant jevnaldrende.
- Familien kan oppleve sosial eksklusjon og redusert livskvalitet sammenlignet med andre i Norge.

**Viktig poeng:** Relativ fattigdom i Norge innebarer ikke sult eller mangel pa tak over hodet, men det kan likevel ha alvorlige konsekvenser for livskvalitet, helse og muligheter - sarlig for barn.`,
    },
    {
      id: 'sf2-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-4-ex-1',
        number: '5.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom absolutt og relativ fattigdom?',
        multipleChoiceOptions: [
          'Absolutt fattigdom er mangel pa grunnleggende behov, mens relativ fattigdom er a ha vesentlig lavere inntekt enn det som er vanlig i samfunnet',
          'Absolutt fattigdom finnes bare i rike land, mens relativ fattigdom finnes bare i fattige land',
          'Absolutt fattigdom er mer alvorlig enn relativ fattigdom i alle tilfeller',
          'Det er ingen forskjell - begrepene betyr det samme',
        ],
        hints: ['Tenk pa hva som er referansepunktet for hvert mal: grunnleggende behov eller samfunnets gjennomsnitt.'],
        solution: 'Absolutt fattigdom defineres ut fra evnen til a dekke grunnleggende behov (mat, bolig, helse), uavhengig av hva andre har. Relativ fattigdom defineres i forhold til det gjennomsnittlige velstandsnivaet i samfunnet. En person kan vare relativt fattig i Norge uten a oppleve absolutt fattigdom, fordi grunnleggende behov er dekket, men livskvaliteten er vesentlig lavere enn gjennomsnittet.',
      },
    },
    {
      id: 'sf2-5-4-def-mobilitet',
      type: 'definition',
      title: 'Sosial mobilitet',
      content: `**Sosial mobilitet** er graden av bevegelse mellom sosiale og okonomiske posisjoner i et samfunn, enten i lopet av en persons liv (intragenerasjonell mobilitet) eller mellom generasjoner (intergenerasjonell mobilitet).

**Intergenerasjonell mobilitet** maler i hvilken grad barns okonomiske situasjon er uavhengig av foreldrenes:
- Hoy mobilitet: Barns inntekt har liten sammenheng med foreldrenes inntekt.
- Lav mobilitet: Barn av rike foreldre blir rike, barn av fattige forblir fattige.

**The Great Gatsby-kurven** viser en sammenheng mellom ulikhet og mobilitet: land med hoy ulikhet tenderer til a ha lav sosial mobilitet. Denne sammenhengen er oppkalt etter F. Scott Fitzgeralds roman om den amerikanske drommen.

**Faktører som påvirker sosial mobilitet:**
- Tilgang til utdanning
- Kvaliteten pa offentlige skoler
- Segregering i boligmarkedet
- Helse- og velferdstjenester
- Diskriminering og sosiale barrierer`,
    },
    {
      id: 'sf2-5-4-example-mobilitet',
      type: 'example',
      title: 'Eksempel: The Great Gatsby-kurven',
      problem: 'Forklar The Great Gatsby-kurven og hva den forteller oss om sammenhengen mellom ulikhet og sosial mobilitet.',
      solution: `The Great Gatsby-kurven plotter land langs to akser:
- **X-aksen:** Gini-koeffisient (ulikhet)
- **Y-aksen:** Intergenerasjonell inntektselastisitet (lav mobilitet)

**Monsteret:** Land med hoy ulikhet har typisk lav sosial mobilitet, og omvendt.

**Eksempler:**
- **Danmark og Norge** (lav ulikhet, hoy mobilitet): Gini rundt 0,25-0,28. En person fra bunnen har relativt god sjanse til a bevege seg oppover.
- **USA og Storbritannia** (hoy ulikhet, lav mobilitet): Gini rundt 0,35-0,40. Foreldrenes inntekt har sterk innvirkning pa barnas framtid.
- **Brasil og Sor-Afrika** (svart hoy ulikhet, svart lav mobilitet): Gini over 0,50. Okonomiske posisjoner gar i stor grad i arv.

**Mulige forklaringer:** Hoy ulikhet kan fore til at rike familier investerer mye mer i barnas utdanning og nettverk, at fattige barn har darligere tilgang til kvalitetsutdanning, og at okonomiske barrierer hindrer talentfulle individer fra lavere klasser.`,
    },
    {
      id: 'sf2-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-4-ex-2',
        number: '5.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva viser The Great Gatsby-kurven?',
        multipleChoiceOptions: [
          'At land med hoy ulikhet tenderer til a ha lav sosial mobilitet',
          'At rikere land alltid har hoyere sosial mobilitet',
          'At fattigdom oker automatisk med okonomisk vekst',
          'At skattesystemet ikke påvirker sosial mobilitet',
        ],
        hints: ['Tenk pa sammenhengen mellom Gini-koeffisient og intergenerasjonell mobilitet.'],
        solution: 'The Great Gatsby-kurven viser en positiv sammenheng mellom ulikhet (malt ved Gini-koeffisienten) og lav sosial mobilitet (malt ved intergenerasjonell inntektselastisitet). Land med hoy ulikhet, som USA og Brasil, har lavere sosial mobilitet enn land med lav ulikhet, som de nordiske landene. Det betyr at i ulike land har foreldrenes okonomiske posisjon storre innvirkning pa barnas fremtid.',
      },
    },
    {
      id: 'sf2-5-4-text-konsekvenser',
      type: 'text',
      title: 'Konsekvenser av ulikhet',
      content: `## Konsekvenser av ulikhet

Okonomisk ulikhet kan ha vidtrekkende konsekvenser for samfunnet. Forskningen viser at hoy ulikhet kan fore til:

**Okonomiske konsekvenser:**
- Svakere samlet etterspørsel (fattige bruker en hoyere andel av inntekten, men har ikke nok a bruke)
- Underinvestering i humankapital (talenter i fattige familier realiseres ikke)
- Finansiell ustabilitet (gjeldsdrevet forbruk blant de med lav inntekt)

**Sosiale konsekvenser:**
- Lavere sosial tillit
- Darligere folkehelse (stressrelaterte sykdommer er mer utbredt i ulike samfunn)
- Hoyere kriminalitet
- Politisk polarisering

**Positive sider ved noe ulikhet:**
- Gir insentiver til utdanning, arbeid og innovasjon
- Belonner risikotaking og entreprenorskap
- Kan drive okonomisk vekst gjennom investeringer

Debatten handler ikke om a eliminere all ulikhet, men om a finne et niva som gir tilstrekkelige insentiver uten a undergrave sosial sammenhengskraft og like muligheter.`,
    },
    {
      id: 'sf2-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-4-ex-3',
        number: '5.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom absolutt og relativ fattigdom. Gi eksempler pa begge typer, og diskuter hvorfor det er viktig a ha begge matene a male fattigdom pa.',
        hints: [
          'Tenk pa hvordan fattigdom kan oppleves ulikt i ulike land.',
          'Vurder om relativ fattigdom i et rikt land kan ha like alvorlige konsekvenser som absolutt fattigdom.',
        ],
        solution: 'Absolutt fattigdom er mangel pa grunnleggende behov (mat, bolig, helse), definert av Verdensbanken som under 2,15 dollar/dag. Relativ fattigdom er inntekt under 60 % av medianinntekten i eget land. Absolutt fattigdom fanger opp de mest prekare situasjonene globalt, mens relativ fattigdom fanger opp sosial eksklusjon i rike samfunn. Begge malene er viktige fordi absolutt fattigdom alene ville indikere at det ikke finnes fattigdom i Norge, til tross for at mange opplever reelle begrensninger i livskvalitet og deltakelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-4-ex-4',
        number: '5.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjor rede for begrepet sosial mobilitet. Forklar forskjellen mellom intragenerasjonell og intergenerasjonell mobilitet, og droft hvilke faktører som fremmer sosial mobilitet.',
        hints: [
          'Tenk pa hva som gjor det mulig for en person a forbedre sin okonomiske situasjon.',
          'Vurder rollen til utdanning, helse og velferdsordninger.',
        ],
        solution: 'Sosial mobilitet er graden av bevegelse mellom okonomiske posisjoner. Intragenerasjonell mobilitet handler om endring i lopet av en persons liv (f.eks. fra lav til hoy inntekt gjennom utdanning og karriere). Intergenerasjonell mobilitet handler om forholdet mellom foreldres og barns posisjon (f.eks. om barn av fattige foreldre kan bli velstaende). Faktører som fremmer mobilitet: tilgjengelig utdanning av hoy kvalitet, universelle helsetjenester, progressive skatter og overforinger, desegregering i boligmarkedet og aktiv arbeidsmarkedspolitikk. De nordiske landene scorer hoyt pa sosial mobilitet nettopp fordi disse faktorene er godt utviklet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-5-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering - Fattigdom og ulikhet

- **Absolutt fattigdom** er mangel pa grunnleggende behov; **relativ fattigdom** er inntekt vesentlig under samfunnets gjennomsnitt.
- **Sosial mobilitet** maler muligheten til a bevege seg mellom okonomiske posisjoner.
- **The Great Gatsby-kurven** viser at hoy ulikhet henger sammen med lav sosial mobilitet.
- Ulikhet kan ha negative konsekvenser for helse, tillit og okonomisk stabilitet.
- Noe ulikhet gir insentiver, men for mye kan undergrave like muligheter og sosial sammenhengskraft.`,
    },
    {
      id: 'sf2-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-4-ex-5',
        number: '5.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Droft pastanden: "Noe ulikhet er nodvendig for okonomisk vekst, men for mye ulikhet hemmer veksten." Bruk teori og eksempler til a argumentere for og mot denne pastanden.',
        hints: [
          'Tenk pa hvordan ulikhet kan skape insentiver, men ogsa hindre investeringer i humankapital.',
          'Bruk eksempler fra land med ulike nivaer av ulikhet.',
        ],
        solution: 'For: Noe ulikhet gir insentiver til arbeid, utdanning og risikotaking. Uten mulighet for a tjene mer enn andre, ville motivasjonen til a innovere og investere vare svakere. Mot for mye ulikhet: Nar ulikheten er svart hoy, realiseres ikke talentene til de fattige fordi de mangler tilgang til utdanning og helse. Etterspørselen svekkes nar kjopekraften konsentreres hos noen fa, og politisk ustabilitet kan undergrave investeringsklimaet. IMF har vist at moderat ulikhet kan fremme vekst, men at land med svart hoy ulikhet har lavere og mer ustabil vekst. De nordiske landene demonstrerer at lav ulikhet og hoy produktivitet kan ga hand i hand.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-4-ex-6',
        number: '5.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I Norge har andelen barn i familier med vedvarende lavinntekt okt fra rundt 5 % til over 11 % de siste to tiarene. Droft mulige arsaker til denne utviklingen og foresla tiltak som kan redusere barnefattigdom.',
        hints: [
          'Tenk pa endringer i arbeidsmarkedet, innvandring og familiestrukturer.',
          'Vurder tiltak som retter seg mot bade foreldre og barn.',
        ],
        solution: 'Mulige arsaker: okt innvandring fra land med lavere sysselsettingsgrad (sarlig blant kvinner), flere enslige forsorgere, okte boutgifter i storbyene, og at overforinger ikke har holdt tritt med generell inntektsvekst. Tiltak: styrke integreringen i arbeidsmarkedet (sarlig for innvandrerkvinner), oke barnetrygden eller gjore den behovsprovd med hoyere satser for lavinntektsfamilier, sikre rimelige barnehageplasser, innfore gratis fritidsaktiviteter for barn i lavinntektsfamilier, og investere i kvalitetsutdanning i omrader med mange lavinntektsfamilier. Det viktigste enkelttiltaket er trolig a fa flere foreldre i arbeid, da arbeidsinntekt er den viktigste veien ut av fattigdom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.5: Velferdsstatens utfordringer
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_5_5: TextbookChapter = {
  id: 'samfokonomi-2-5-5',
  courseId: 'samfokonomi-2',
  chapterNumber: '5.5',
  title: 'Velferdsstatens utfordringer',
  description: 'Eldrebolgen, finansiering av velferdsstaten og barekraft i et langsiktig perspektiv.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere velferdsstatens barekraft og utfordringer i et langsiktig perspektiv',
    'drofte ulike perspektiver pa rettferdig fordeling og velferd',
  ],
  content: [
    {
      id: 'sf2-5-5-intro',
      type: 'text',
      content: `# Velferdsstatens utfordringer

Den norske velferdsstaten har levert imponerende resultater: lav ulikhet, hoy levestandard og hoy sosial mobilitet. Men modellen star overfor betydelige utfordringer i tiarene som kommer. En aldrende befolkning, endrede migrasjonsmonstre, teknologisk omstilling og klimaendringer vil alle sette press pa velferdsstatens finansiering og innretning.

I dette kapittelet analyserer vi de viktigste utfordringene og drofter mulige losninger. Sporsmalet er ikke om velferdsstaten vil besta, men hvordan den ma tilpasses for a forbli barekraftig.`,
    },
    {
      id: 'sf2-5-5-def-eldrebolge',
      type: 'definition',
      title: 'Eldrebolgen',
      content: `**Eldrebolgen** refererer til den demografiske utviklingen der andelen eldre i befolkningen oker kraftig, samtidig som andelen i yrkesaktiv alder synker.

**Arsaker:**
- De store etterkrigskullene (babyboomerne) nar pensjonsalder
- Okt levealder - nordmenn lever stadig lenger
- Lavere fodselsrater - farre barn fodes per kvinne

**Konsekvenser for velferdsstaten:**
- **Okte pensjonsutgifter** - Flere pensjonister som skal ha utbetalinger over lengre tid
- **Okte helseutgifter** - Eldre bruker mer helsetjenester
- **Okte pleieutgifter** - Flere trenger hjemmehjelp og sykehjemsplasser
- **Redusert skattegrunnlag** - Farre yrkesaktive betaler inn til systemet
- **Forsorgerbyren oker** - Hver yrkesaktiv ma finansiere mer velferd

**Forsorgerbyren:** I 1970 var det omtrent 5 yrkesaktive per pensjonist. I 2050 anslas dette a synke til ca. 2,5 yrkesaktive per pensjonist. Denne utviklingen er den kanskje storste trusselen mot velferdsstatens barekraft.`,
    },
    {
      id: 'sf2-5-5-example-forsorger',
      type: 'example',
      title: 'Eksempel: Forsorgerbyren',
      problem: 'I 2020 var det ca. 4 yrkesaktive per pensjonist i Norge. I 2050 forventes dette a synke til ca. 2,5. Hva betyr dette for finansieringen av velferdsstaten?',
      solution: `**Regnestykket:**
Anta at en gjennomsnittlig pensjonist mottar 300 000 kr i arlig pensjon og offentlige tjenester (helse, pleie osv.).

**I 2020 (4 yrkesaktive per pensjonist):**
- Hver yrkesaktiv ma bidra med 300 000 / 4 = 75 000 kr for a finansiere en pensjonist.

**I 2050 (2,5 yrkesaktive per pensjonist):**
- Hver yrkesaktiv ma bidra med 300 000 / 2,5 = 120 000 kr for a finansiere en pensjonist.
- Det er en okning pa 60 %.

**Mulige losninger:**
1. Oke skattene (men kan svekke insentivene)
2. Redusere ytelsene (men kan oke fattigdom blant eldre)
3. Oke pensjonsalderen (slik at folk jobber lenger)
4. Oke yrkesdeltakelsen (sarlig blant innvandrere og eldre)
5. Oke produktiviteten (slik at farre yrkesaktive produserer mer)

I praksis vil trolig en kombinasjon av disse tiltakene vare nodvendig.`,
    },
    {
      id: 'sf2-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-5-ex-1',
        number: '5.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste arsaken til at forsorgerbyren oker i Norge?',
        multipleChoiceOptions: [
          'Andelen eldre oker mens andelen yrkesaktive synker, pa grunn av hoyere levealder og lavere fodselsrater',
          'Stadig flere unge velger a ikke jobbe',
          'Innvandringen har stoppet helt opp',
          'Skattesatsene er for lave til a finansiere velferdsstaten',
        ],
        hints: ['Tenk pa demografiske endringer - hva skjer med alderssammensetningen i befolkningen?'],
        solution: 'Forsorgerbyren oker fordi andelen eldre i befolkningen vokser (eldrebolgen), drevet av hoyere levealder og lavere fodselsrater. Samtidig synker andelen i yrkesaktiv alder relativt sett. Det betyr at farre yrkesaktive skal finansiere velferdstjenester for stadig flere eldre. Dette er den sentrale demografiske utfordringen for velferdsstaten.',
      },
    },
    {
      id: 'sf2-5-5-def-finansiering',
      type: 'definition',
      title: 'Finansieringsutfordringen',
      content: `**Finansieringsutfordringen** handler om gapet mellom velferdsstatens utgifter og inntekter i framtiden.

**Perspektivmeldingen** (Finansdepartementet) anslar at det vil oppsta et betydelig **finansieringsgap** i tiarene framover:
- Utgiftene til helse, omsorg og pensjon vil oke kraftig
- Oljeinntektene vil gradvis avta
- Handlingsregelen begrenser bruken av oljefondet til 3 % av fondets verdi

**Oljefondet (Statens pensjonsfond utland):**
- Verdens storste statlige investeringsfond (ca. 17 000 milliarder kr)
- Skal ikke tappes, men avkastningen brukes
- 3 %-regelen sikrer at fondet varer, men dekker bare en del av utgiftene
- Fondet er ikke nok alene til a finansiere framtidens velferdsstat

**Handlingsrommet begrenses av:**
- Eldrebolgen som oker utgiftene
- Avtakende oljeinntekter
- Klimaomstilling som krever nye investeringer
- Begrensninger i hvor mye skattene kan okes uten at det svekker okonomien`,
    },
    {
      id: 'sf2-5-5-example-perspektiv',
      type: 'example',
      title: 'Eksempel: Perspektivmeldingens budskap',
      problem: 'Perspektivmeldingen viser at det vil oppsta et finansieringsgap i framtiden. Hva innebarer dette, og hvilke valg star vi overfor?',
      solution: `**Finansieringsgapet:**
Perspektivmeldingen anslar at inntektene fra skatt og oljefond ikke vil vare tilstrekkelige til a dekke de forventede utgiftene til velferdsstaten i 2060. Gapet tilsvarer omtrent 5-6 % av BNP for fastlands-Norge.

**Valg vi star overfor:**
1. **Oke skattene:** Mulig, men hoye skatter kan svekke insentivene og gjore Norge mindre konkurransedyktig.
2. **Kutte i velferd:** Politisk vanskelig og kan ramme utsatte grupper.
3. **Jobbe mer:** Hoyere pensjonsalder, flere i arbeid og lengre arbeidstid per uke.
4. **Jobbe smartere:** Okt produktivitet gjennom teknologi og innovasjon.
5. **Redusere sykefravaret:** Norge har relativt hoyt sykefravar sammenlignet med nabolandene.

**Nokkelbudskap:** Det er ikke ett enkelttiltak som loser problemet. Det kreves en kombinasjon av tiltak, og jo tidligere vi starter, desto mildere kan hvert enkelt tiltak vare.`,
    },
    {
      id: 'sf2-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-5-ex-2',
        number: '5.5.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor kan ikke oljefondet alene lose velferdsstatens finansieringsutfordring?',
        multipleChoiceOptions: [
          'Fordi handlingsregelen begrenser bruken til 3 % av fondets verdi per ar, og dette dekker bare en del av de framtidige utgiftene',
          'Fordi oljefondet er investert i utlandet og pengene ikke kan brukes i Norge',
          'Fordi fondet vil vare tomt innen 2040',
          'Fordi fondets avkastning alltid er negativ',
        ],
        hints: ['Tenk pa handlingsregelen og forholdet mellom fondets avkastning og de framtidige velferdsutgiftene.'],
        solution: 'Handlingsregelen sier at vi over tid skal bruke ca. 3 % av fondets verdi per ar. Selv om fondet er enormt (ca. 17 000 milliarder kr), gir 3 % ca. 500 milliarder, som kun dekker en begrenset del av statsbudsjettet. De samlede velferdsutgiftene er langt hoyere og vil oke kraftig med eldrebolgen. A bruke mer enn 3 % ville tare pa fondet og svekke handlingsrommet for fremtidige generasjoner.',
      },
    },
    {
      id: 'sf2-5-5-text-barekraft',
      type: 'text',
      title: 'Velferdsstatens barekraft',
      content: `## Velferdsstatens barekraft

Barekraft i velferdsstaten handler om a sikre at dagens velferdsordninger kan opprettholdes for framtidige generasjoner uten a undergrave de okonomiske, sosiale og miljomessige forutsetningene.

**Tiltak for barekraft:**

**1. Oke yrkesdeltakelsen**
- Fa flere innvandrere i arbeid (sarlig kvinner)
- Redusere andelen ufore og langtidssykemeldte
- Tilrettelegge for at eldre kan jobbe lenger
- Inkludere flere med nedsatt funksjonsevne i arbeidslivet

**2. Pensjonsreformer**
- Levealdersjustering: Pensjonen justeres automatisk nar levealderen oker
- Fleksibel pensjonsalder: Mulighet til a jobbe lenger mot hoyere pensjon
- Allearsregelen: Hele yrkeskarrieren teller, ikke bare de beste arene

**3. Effektivisering av offentlig sektor**
- Digitalisering av offentlige tjenester
- Bruk av velferdsteknologi i eldreomsorgen
- Bedre samordning mellom forvaltningsnivaer

**4. Forebygging framfor reparasjon**
- Investere i folkehelse for a redusere sykdomsbyrden
- Tidlig innsats for barn i risikofamilier
- Forebygge frafall fra videregaende opplaring`,
    },
    {
      id: 'sf2-5-5-example-pensjon',
      type: 'example',
      title: 'Eksempel: Pensjonsreformen',
      problem: 'Norges pensjonsreform fra 2011 innforte levealdersjustering. Forklar hva dette innebarer og hvorfor det ble innfort.',
      solution: `**Levealdersjustering** betyr at den arlige pensjonsutbetalingen justeres ned nar forventet levealder oker. Hvis en generasjon lever lenger, ma den samlede pensjonen fordeles over flere ar, noe som gir lavere arlige utbetalinger.

**Hvorfor det ble innfort:**
- Uten justering ville okt levealder gjore pensjonssystemet ufinansierbart.
- Folk lever i gjennomsnitt 3-4 ar lenger na enn da pensjonssystemet ble designet.
- Hvert ekstra levear koster samfunnet mange milliarder i pensjonsutbetalinger.

**Hvordan det fungerer i praksis:**
- For en person fodt i 1963 kan effekten vare at de ma jobbe til 67 ar for a fa samme pensjon som en person fodt i 1943 fikk ved 62 ar.
- Alternativet er a ga av ved 62, men med lavere arlig pensjon.
- Systemet gir insentiver til a jobbe lenger, noe som bade oker pensjonen for den enkelte og styrker velferdsstatens finansiering.

Reformen er et eksempel pa en automatisk stabilisator: den justerer utgiftene i takt med demografiske endringer uten at politikerne ma ta vanskelige vedtak hvert ar.`,
    },
    {
      id: 'sf2-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-5-ex-3',
        number: '5.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjor rede for hva eldrebolgen innebarer, og droft minst tre konsekvenser den har for velferdsstatens finansiering.',
        hints: [
          'Tenk pa hva som skjer med utgiftene og inntektene nar befolkningen eldes.',
          'Vurder hva dette betyr for pensjon, helse og omsorg.',
        ],
        solution: 'Eldrebolgen betyr at andelen eldre i befolkningen oker kraftig pa grunn av okt levealder og lavere fodselsrater. Konsekvenser: 1) Pensjonsutgiftene oker fordi flere pensjonister mottar pensjon over lengre tid. 2) Helse- og omsorgsutgiftene oker fordi eldre bruker mer helsetjenester og flere trenger sykehjem eller hjemmehjelp. 3) Skattegrunnlaget svekkes fordi farre yrkesaktive betaler inn til systemet. 4) Forsorgerbyren oker - hver yrkesaktiv ma finansiere velferd for flere eldre. Samlet skaper dette et finansieringsgap som krever tiltak som pensjonsreformer, okt yrkesdeltakelse og effektivisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-5-ex-4',
        number: '5.5.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva handlingsregelen innebarer og hvorfor den er viktig for den langsiktige forvaltningen av oljefondet og velferdsstatens finansiering.',
        hints: [
          'Tenk pa hva som ville skje dersom vi brukte mer enn fondets avkastning hvert ar.',
          'Vurder hensynet til framtidige generasjoner.',
        ],
        solution: 'Handlingsregelen sier at staten over tid skal bruke ca. 3 % av oljefondets verdi per ar, som tilsvarer forventet realavkastning. Dette sikrer at fondet ikke tappes, men opprettholdes for framtidige generasjoner. Uten handlingsregelen kunne politikere fristes til a bruke for mye, noe som ville svekke fondet, oke inflasjonen og gjore norsk okonomi sarbar for oljeprisfall. Regelen er viktig fordi oljeinntektene er midlertidige, mens velferdsforpliktelsene er varige. Ved a la fondet vokse og bare bruke avkastningen, sikrer vi at rikdommen fordeles mellom generasjonene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-5-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering - Velferdsstatens utfordringer

- **Eldrebolgen** oker forsorgerbyren og presser velferdsstatens utgifter oppover.
- **Finansieringsgapet** mellom forventede inntekter og utgifter krever tiltak.
- **Oljefondet** og handlingsregelen gir et viktig bidrag, men loser ikke utfordringen alene.
- **Pensjonsreformer** som levealdersjustering er viktige for barekraft.
- **Okt yrkesdeltakelse**, effektivisering og forebygging er sentrale tiltak for a sikre velferdsstatens framtid.`,
    },
    {
      id: 'sf2-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-5-ex-5',
        number: '5.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Perspektivmeldingen viser et framtidig finansieringsgap i velferdsstaten. Droft minst tre ulike tiltak for a tette dette gapet, og vurder fordeler og ulemper ved hvert tiltak.',
        hints: [
          'Tenk pa tiltak som påvirker henholdsvis inntektssiden og utgiftssiden.',
          'Vurder bade okonomiske og sosiale konsekvenser av hvert tiltak.',
        ],
        solution: 'Tiltak 1: Oke skattene - gir okte inntekter, men kan svekke insentiver og konkurranseevne. Tiltak 2: Heve pensjonsalderen - oker arbeidsstyrken og skattegrunnlaget, men kan ramme yrkesgrupper med fysisk krevende arbeid urettferdig. Tiltak 3: Oke yrkesdeltakelsen blant innvandrere - utnytter et stort potensial, men krever investeringer i integrering og utdanning. Tiltak 4: Effektivisere offentlig sektor gjennom digitalisering - kan redusere kostnader, men kan ogsa fore til nedbemanning og tap av personlig kontakt. Tiltak 5: Redusere sykefravaret - Norge har hoyt sykefravar, og selv en liten reduksjon gir store besparelser. I praksis trengs en kombinasjon av tiltak fordi hvert enkelt tiltak har begrensninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-5-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-5-5-ex-6',
        number: '5.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Droft om den norske velferdsstaten er barekraftig pa lang sikt. Bruk okonomisk teori og konkrete eksempler til a argumentere for og mot barekraft, og foresla hva som ma gjores for a sikre velferden for kommende generasjoner.',
        hints: [
          'Tenk pa demografiske, okonomiske og politiske faktører.',
          'Vurder om teknologisk utvikling kan vare en del av losningen.',
        ],
        solution: 'For barekraft: Norge har et enormt oljefond, hoy produktivitet, et velfungerende arbeidsmarked og tradisjon for omstilling. Pensjonsreformen viser evne til langsiktig tilpasning. Mot barekraft: Eldrebolgen vil oke utgiftene dramatisk, oljeinntektene vil avta, klimaomstillingen krever store investeringer, og hoy innvandring stiller krav til integrering. For a sikre velferden trengs: okt yrkesdeltakelse (sarlig innvandrere, eldre, ufore), fortsatt pensjonsreformer, effektivisering gjennom digitalisering og velferdsteknologi, forebygging framfor reparasjon, og vilje til a prioritere. Teknologi (AI, automatisering) kan oke produktiviteten og kompensere for farre yrkesaktive. Barekraften avhenger til syvende og sist av politisk vilje til a tilpasse modellen til nye realiteter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const SAMFOKONOMI_2_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFOKONOMI_2_5_1, CHAPTER_SAMFOKONOMI_2_5_2, CHAPTER_SAMFOKONOMI_2_5_3,
  CHAPTER_SAMFOKONOMI_2_5_4, CHAPTER_SAMFOKONOMI_2_5_5,
];
