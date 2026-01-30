/**
 * Tekstbok innhold for Geografi VG1 - Del 2
 * Kapittel 6-10: Samfunnsgeografi grunnlag
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 6: Urbanisering og byutvikling
// ============================================================================

export const CHAPTER_GEOGRAFI_6: TextbookChapter = {
  id: 'geografi-1-6',
  courseId: 'geografi',
  chapterNumber: '6',
  title: 'Urbanisering og byutvikling',
  description: 'Forstå prosessen med urbanisering og utfordringer knyttet til byutvikling.',
  estimatedMinutes: 75,
  competenceGoals: [
    'utforske og gjøre rede for årsaker til og konsekvenser av urbanisering',
  ],
  content: [
    {
      id: 'geografi-1-6-intro',
      type: 'text',
      content: `## Urbanisering

Urbanisering er prosessen der stadig flere mennesker flytter til byer. For første gang i historien bor nå over halvparten av verdens befolkning i urbane områder.

**Global urbanisering:**
- 1950: 30% bodde i byer
- 2024: ca. 57% bor i byer
- 2050: forventet 68% i byer

**Drivkrefter bak urbanisering:**
- Push-faktorer: Fattigdom, mangel på jobb, konflikter på landsbygda
- Pull-faktorer: Jobbmuligheter, utdanning, helsetjenester, underholdning

**Hvor skjer urbaniseringen?**
Raskest i Afrika og Asia, der urbaniseringsgraden fortsatt er relativt lav.`,
    },
    {
      id: 'geografi-1-6-text-monstre',
      type: 'text',
      content: `## Urbaniseringsmønstre globalt

Urbaniseringen har ulike mønstre i ulike deler av verden.

**Utviklingsland — rask, uplanlagt urbanisering:**
I mange land i Afrika og Asia vokser byene raskere enn infrastrukturen. Resultatet er ofte uformelle bosettinger (slum) med mangelfull vannforsyning, sanitær og helsetjenester. Lagos i Nigeria vokser med ca. 3000 innbyggere per dag.

**Industriland — stabil urbanisering og suburbanisering:**
I Europa og Nord-Amerika er urbaniseringsgraden allerede høy (75-85%). Her er trenden suburbanisering (vekst i forsteder) og reurbanisering (folk flytter tilbake til sentrumsnære områder).

**Megabyer:**
I 1950 fantes bare to megabyer (over 10 millioner). I dag er det over 30, de fleste i utviklingsland. De fem største: Tokyo (37 mill.), Delhi (32 mill.), Shanghai (29 mill.), São Paulo (22 mill.), Mumbai (21 mill.).

**Slum og uformell bosetting:**
Ca. 1 milliard mennesker bor i slumområder. Kjennetegn: Mangelfull infrastruktur, usikker boligsituasjon, fattigdom, men også kreativitet og sterke sosiale nettverk. Dharavi i Mumbai huser ca. 1 million mennesker på 2,1 km² og har en uformell økonomi verdt over 1 milliard dollar.

**Motstrømmer:**
- **Counter-urbanisering:** Folk flytter fra store byer til småbyer og bygder, drevet av høye boligpriser, miljøhensyn og muligheter for fjernarbeid.
- **Rurbanisering:** Landlige områder nær byer får urbane trekk (butikker, infrastruktur) uten å bli by.`,
    },
    {
      id: 'geografi-1-6-def-1',
      type: 'definition',
      title: 'Bytyper og byvekst',
      content: `**Megaby:**
By med over 10 millioner innbyggere. Eksempler: Tokyo, Delhi, Shanghai, São Paulo.

**Bybånd (megalopolis):**
Sammenhengende byområder som har vokst sammen. Eksempel: Boston-New York-Washington.

**Primatby:**
En dominerende by som er mye større enn andre byer i landet. Eksempel: Paris, London, Bangkok.

**Suburbanisering:**
Befolkning flytter fra sentrum til forsteder. Vanlig i utviklede land.

**Gentrification:**
Fornyelse av nedslitte byområder, ofte med konsekvenser for opprinnelige beboere.

**Slum:**
Fattige, uformelle bosettinger med dårlig infrastruktur. Stor utfordring i utviklingsland.`,
    },
    {
      id: 'geografi-1-6-def-2',
      type: 'definition',
      title: 'Baerekraftig byutvikling',
      content: `**Kompakt byutvikling:**
Fortetting fremfor spredning. Korte avstander, effektiv arealbruk.

**Blandet arealbruk:**
Boliger, arbeidsplasser og tjenester i samme område. Reduserer transportbehov.

**Kollektivtransport:**
Buss, trikk, T-bane, tog. Reduserer biltrafikk og utslipp.

**Grønne områder:**
Parker, grøntarealer, bytrær. Viktig for luftkvalitet, rekreasjon og biologisk mangfold.

**Smart by (smart city):**
Teknologi brukes til å effektivisere bytjenester: trafikkstyring, energiforbruk, avfall.

**Sirkulær økonomi i byer:**
Gjenbruk, resirkulering, redusert avfall. Byer som kretsløp fremfor gjennomstrømning.`,
    },
    {
      id: 'geografi-1-6-def-bymodeller',
      type: 'definition',
      title: 'Bymodeller',
      content: `**Burgess' konsentriske sonemodell (1925):**
Byer vokser i konsentriske ringer ut fra sentrum: CBD (forretningssentrum) → overgangsone → arbeiderboliger → middelklasseboliger → pendlerforstad. Enkel modell, passer best nordamerikanske byer.

**Hoyts sektormodell (1939):**
Byens funksjoner fordeler seg i sektorer langs transportårer. Industri følger jernbaner, velstående boligområder følger landskapskvaliteter.

**Harris og Ullmans flerkjernemodell (1945):**
Store byer har flere sentra (kjerner) med ulike funksjoner: CBD, industriområder, boligområder, forstadssentra. Mer realistisk for moderne storbyer.

**Begrensninger:** Alle modellene er forenklinger basert på vestlige byer. Byer i utviklingsland har ofte ulike mønstre med uformelle bosettinger, gated communities og annen organisering.`,
    },
    {
      id: 'geografi-1-6-example-1',
      type: 'example',
      title: 'Eksempel: Oslos byutvikling',
      problem: `Hvordan har Oslo forsøkt å utvikle seg mer bærekraftig, og hvilke debatter har dette skapt?`,
      solution: `**Oslos byutviklingstiltak:**

1. **Fortetting:**
   - Bjørvika/Barcode - ny bydel på tidligere havneområde
   - Høyhus og tett bebyggelse nær kollektivknutepunkter

2. **Bilfritt sentrum:**
   - Fjernet parkeringsplasser i sentrum
   - Prioritert gående og syklende
   - Utvidet gågater

3. **Kollektivsatsing:**
   - Utbygging av T-bane og trikk
   - Bysykler
   - Ruter-app for enkel billettkjøp

4. **Fjordbyen:**
   - Åpnet fjorden for befolkningen
   - Tidligere havne- og industriområder blir parker og boliger

5. **Grønne områder:**
   - Bevaring av Marka
   - Nye parker (Operataket, Sørenga)
   - Bytrær og grønne tak

**Kritikk og debatter:**
Oslos byutvikling er politisk omdiskutert:
- **Boligpriser:** Fortetting har ikke løst boligmangelen, og prisene har fortsatt å stige kraftig
- **Sosial ulikhet:** Nye områder som Bjørvika oppfattes av noen som ekskluderende og rettet mot høyinntektsgrupper
- **Bilfritt sentrum:** Kritikere mener det rammer butikker og folk utenfor sentrum som er avhengige av bil
- **Fortetting vs. bomiljø:** Noen mener fortettingen har gått på bekostning av sol, luft og grønne områder i boligstrøk
- **Kostnader:** Store offentlige investeringer i kollektivtrafikk og byutvikling

**Ulike syn:** Noen ser Oslo som et forbilde for grønn byutvikling, andre mener politikken har hatt utilsiktede negative konsekvenser for visse grupper.`,
    },
    {
      id: 'geografi-1-6-tip-1',
      type: 'tip',
      title: 'Kobling til kapittel 18',
      content: `**I dette kapittelet** lærer du om urbaniseringsprosessen globalt — hvorfor folk flytter til byer og hvilke utfordringer det skaper.

**I kapittel 18** går vi dypere inn i byenes indre struktur, byplanleggingens historie, sosial segregering, transportsystemer og konkrete eksempler som København.

Disse to kapitlene utfyller hverandre: Kapittel 6 handler om **prosessen**, kapittel 18 om **strukturen**.`,
    },
    {
      id: 'geografi-1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva urbanisering er, og nevn tre push-faktorer og tre pull-faktorer.',
        hints: ['Push = det som driver folk vekk, Pull = det som trekker folk til'],
        solution: 'Urbanisering er prosessen der befolkningen i byer øker. Push-faktorer: fattigdom, jordmangel, arbeidsledighet på landsbygda. Pull-faktorer: jobbmuligheter, utdanning, helsetjenester, underholdning, sosiale nettverk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er en megaby? Nevn tre megabyer og hvilke utfordringer de står overfor.',
        hints: ['Tenk på infrastruktur, miljø, sosiale forhold'],
        solution: 'Megaby har over 10 millioner innbyggere. Eksempler: Tokyo, Delhi, Mumbai, Lagos. Utfordringer: trafikkork, luftforurensning, vannmangel, bolignød, slumområder, avfallshåndtering, kriminalitet, sosial ulikhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sammenlign urbaniseringen i utviklede land og utviklingsland:',
        subTasks: [
          {
            label: 'a',
            task: 'Tempo og tidspunkt for urbanisering',
            solution: 'Utviklede land: Gradvis over 200 år. Utviklingsland: Rask urbanisering de siste 50 årene.',
          },
          {
            label: 'b',
            task: 'Hovedutfordringer',
            solution: 'Utviklede land: Suburbanisering, forgubbing, transport. Utviklingsland: Slum, mangelfull infrastruktur, fattigdom.',
          },
        ],
        solution: 'Se deloppgavene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kjennetegner bærekraftig byutvikling? Beskriv minst fire viktige prinsipper.',
        hints: ['Tenk på transport, arealbruk, energi, grønne områder'],
        solution: 'Prinsipper: 1) Kompakt bystruktur med fortetting, 2) Effektiv kollektivtransport, 3) Blandet arealbruk (bolig, jobb, tjenester), 4) Grøntområder og biologisk mangfold, 5) Energieffektive bygninger, 6) Sirkulær avfallshåndtering, 7) Sosial inkludering og rimelige boliger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er gentrification? Diskuter positive og negative sider ved denne prosessen.',
        hints: ['Tenk på hvem som tjener og hvem som taper'],
        solution: 'Gentrification er oppgradering av nedslitte byområder. Positivt: Bedre bygninger, lavere kriminalitet, økte skatteinntekter. Negativt: Opprinnelige beboere presses ut av høyere priser, tap av lokal kultur og fellesskap, økt sosial ulikhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Analyser din egen by eller et sted du kjenner: Hvilke byutviklingstiltak har blitt gjennomført de siste årene? Er utviklingen bærekraftig?',
        hints: ['Se på transport, boligbygging, grøntområder, sentrumsutvikling'],
        solution: 'Svaret bør inneholde konkrete eksempler fra lokalsamfunnet og vurdering opp mot prinsipper for bærekraftig byutvikling: fortetting vs. spredning, kollektiv vs. bil, grøntområder, sosial inkludering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-6-mc-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-6-mc-1',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — urbanisering:',
        subTasks: [
          {
            label: 'a',
            task: 'Omtrent hvor stor andel av verdens befolkning bor i byer i dag?',
            solution: 'Ca. 57%',
            multipleChoiceOptions: ['Ca. 30%', 'Ca. 45%', 'Ca. 57%', 'Ca. 75%'],
          },
          {
            label: 'b',
            task: 'Hva er en primatby?',
            solution: 'En dominerende by som er mye større enn andre byer i landet',
            multipleChoiceOptions: ['Den første byen som ble grunnlagt i et land', 'En dominerende by som er mye større enn andre byer i landet', 'En by med over 10 millioner innbyggere', 'En by som er hovedstad'],
          },
          {
            label: 'c',
            task: 'Hva er counter-urbanisering?',
            solution: 'Folk flytter fra store byer til småbyer og bygder',
            multipleChoiceOptions: ['Folk flytter fra bygda til byen', 'Folk flytter fra store byer til småbyer og bygder', 'Byer krymper på grunn av krig', 'Forsteder vokser raskere enn sentrum'],
          },
        ],
        solution: 'a) Ca. 57%, b) Dominerende storby, c) Flytting fra by til bygd',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-6-mc-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-6-mc-2',
        number: '8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — bymodeller og slum:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange mennesker bor anslagsvis i slumområder globalt?',
            solution: 'Ca. 1 milliard',
            multipleChoiceOptions: ['Ca. 100 millioner', 'Ca. 500 millioner', 'Ca. 1 milliard', 'Ca. 3 milliarder'],
          },
          {
            label: 'b',
            task: 'Hvilken bymodell deler byen inn i konsentriske ringer?',
            solution: 'Burgess\' sonemodell',
            multipleChoiceOptions: ['Burgess\' sonemodell', 'Hoyts sektormodell', 'Harris og Ullmans flerkjernemodell', 'Webers industrimodell'],
          },
          {
            label: 'c',
            task: 'Hva betyr gentrification?',
            solution: 'Oppgradering av nedslitte byområder som kan presse ut opprinnelige beboere',
            multipleChoiceOptions: ['Bygging av nye forsteder', 'Oppgradering av nedslitte byområder som kan presse ut opprinnelige beboere', 'Nedlegging av industri i byer', 'Flytting av hovedstaden'],
          },
        ],
        solution: 'a) Ca. 1 milliard, b) Burgess, c) Oppgradering som presser ut beboere',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Ressursforvaltning og baerekraft
// ============================================================================

export const CHAPTER_GEOGRAFI_7: TextbookChapter = {
  id: 'geografi-1-7',
  courseId: 'geografi',
  chapterNumber: '7',
  title: 'Ressursforvaltning og baerekraft',
  description: 'Forstå forvaltning av naturressurser og prinsipper for baerekraftig utvikling.',
  estimatedMinutes: 75,
  competenceGoals: [
    'drøfte ulike interesser knyttet til ressursbruk og ressurskonflikter',
  ],
  content: [
    {
      id: 'geografi-1-7-intro',
      type: 'text',
      content: `## Naturressurser

Naturressurser er materialer og energikilder fra naturen som mennesker bruker. Hvordan vi forvalter disse ressursene avgjør om utviklingen er bærekraftig.

**Typer naturressurser:**
- Fornybare: Sol, vind, vann, skog, fisk (kan fornye seg)
- Ikke-fornybare: Olje, gass, kull, mineraler (begrensede mengder)
- Betinget fornybare: Jord, ferskvann (fornybare hvis ikke overbelastet)

**Ressursenes fordeling:**
Naturressurser er ujevnt fordelt på kloden. Dette skaper handel, maktforhold og konflikter.`,
    },
    {
      id: 'geografi-1-7-def-1',
      type: 'definition',
      title: 'Ressursforvaltning',
      content: `**Bærekraftig utvikling:**
Utvikling som dekker dagens behov uten å ødelegge fremtidige generasjoners muligheter (Brundtlandkommisjonen, 1987).

**De tre dimensjonene:**
- Økologisk bærekraft: Ta vare på naturens tålegrenser
- Økonomisk bærekraft: Langsiktig verdiskaping
- Sosial bærekraft: Rettferdig fordeling og gode levekår

**Avveininger og debatter:**
Det er ofte spenninger mellom de tre dimensjonene. For eksempel kan strenge miljøkrav gi høyere kostnader og tap av arbeidsplasser. Det er politisk uenighet om hvordan disse avveiningene bør gjøres, og hvor mye dagens generasjon bør ofre for fremtidige generasjoner.

**Allmenningens tragedie:**
Når alle har tilgang til en ressurs, risikerer hver enkelt å overutnytte den. Eksempel: Overfiske i internasjonalt farvann.

**Føre-var-prinsippet:**
Ved usikkerhet om miljøkonsekvenser bør man være forsiktig. Prinsippet er omdiskutert - noen mener det hindrer innovasjon og utvikling, andre at det er nødvendig for å unngå irreversible skader.

**Forurenser betaler-prinsippet:**
Den som forurenser skal betale for opprydding og skadene. Det er debatt om hvordan dette bør praktiseres, og om det rammer ulike grupper rettferdig.`,
    },
    {
      id: 'geografi-1-7-def-sdg',
      type: 'definition',
      title: 'FNs bærekraftsmål (SDG)',
      content: `**17 mål for bærekraftig utvikling vedtatt i 2015:**
De viktigste for geografi:

- **Mål 1:** Utrydde fattigdom
- **Mål 2:** Utrydde sult
- **Mål 6:** Rent vann og gode sanitærforhold
- **Mål 7:** Ren energi til alle
- **Mål 11:** Bærekraftige byer og lokalsamfunn
- **Mål 12:** Ansvarlig forbruk og produksjon
- **Mål 13:** Stoppe klimaendringene
- **Mål 14:** Livet i havet
- **Mål 15:** Livet på land

**Målene henger sammen:** Fattigdomsbekjempelse (mål 1) krever utdanning (mål 4), som krever likestilling (mål 5), som fremmer økonomisk vekst (mål 8). Men økonomisk vekst kan utfordre klima (mål 13) og naturmangfold (mål 15).

**Kritikk:** Noen mener målene er for ambisiøse og vanskelige å måle. Andre mener de ikke er ambisiøse nok, eller at de ikke tar tilstrekkelig hensyn til maktstrukturer.`,
    },
    {
      id: 'geografi-1-7-text-sirkulaer',
      type: 'text',
      content: `## Økologisk fotavtrykk og sirkulær økonomi

**Økologisk fotavtrykk:**
Måler hvor mye biologisk produktivt areal som trengs for å opprettholde en persons forbruk og absorbere avfall. Hvis alle levde som en gjennomsnittlig nordmann, ville vi trengt ca. 3,4 jordkloder.

**Earth Overshoot Day:**
Dagen da menneskeheten har brukt opp jordens fornybare ressurser for året. I 2024 falt den i august — resten av året «lever vi på kreditt». Norges overshoot day er allerede i april.

**Lineær økonomi (ta-bruk-kast):**
Tradisjonell modell: Utvinning → produksjon → forbruk → avfall. Fører til ressursuttømming og forurensning.

**Sirkulær økonomi:**
Ressurser holdes i kretsløp gjennom:
- **Redusere:** Bruke mindre materialer og energi
- **Gjenbruke:** Bruke produkter flere ganger
- **Reparere:** Forlenge levetiden til produkter
- **Resirkulere:** Bruke materialer på nytt
- **Dele:** Delingsøkonomi (bildelingsordninger, verktøyutlån)

**Internasjonale miljøavtaler:**
- **Montreal-protokollen (1987):** Forbud mot KFK-gasser. Regnes som en av de mest vellykkede miljøavtalene — ozonlaget er i ferd med å reparere seg.
- **Basel-konvensjonen (1989):** Regulerer transport av farlig avfall mellom land.
- **CITES (1975):** Regulerer handel med truede arter.
- **Biodiversitetskonvensjonen (1992):** Bevaring av biologisk mangfold.`,
    },
    {
      id: 'geografi-1-7-def-2',
      type: 'definition',
      title: 'Ressurskonflikter',
      content: `**Vannkonflikter:**
Kamp om ferskvannsressurser. Særlig akutt i Midtøsten (Jordan, Eufrat/Tigris) og Afrika.

**Oljekonflikter:**
Geopolitiske spenninger knyttet til oljerike områder. Eksempel: Midtøsten, Sør-Kinahavet.

**Mineralkonflikter:**
Etterspørsel etter sjeldne jordarter og mineraler til teknologi. Utvinning skaper miljøproblemer og konflikter.

**Arealbrukskonflikter:**
Konkurranse om land mellom jordbruk, naturvern, urbanisering, energiproduksjon.

**Fiskerikonflikter:**
Uenighet om kvoter og rettigheter i havet. Eksempel: Makrelkrigen mellom Norge, EU og Island.

**Urfolksrettigheter:**
Konflikter mellom urfolks tradisjonelle ressursbruk og storsamfunnets interesser.`,
    },
    {
      id: 'geografi-1-7-example-1',
      type: 'example',
      title: 'Eksempel: Norges oljeforvaltning',
      problem: `Hvordan har Norge forvaltet sine oljeressurser?`,
      solution: `**Den norske modellen:**

1. **Statlig kontroll:**
   - Staten eier ressursene på sokkelen
   - Lisenssystem for utvinning
   - Statlig selskap (Equinor, tidligere Statoil)

2. **Oljefondet (Statens pensjonsfond utland):**
   - Oljeinntekter settes i fond
   - Investeres i utlandet
   - Kun avkastningen brukes (handlingsregelen: 3%)
   - Verdi: over 15 000 milliarder kr

3. **Fordeler:**
   - Unngått "oljeforbannelsen" (ressursrike land med dårlig utvikling)
   - Sparing for fremtidige generasjoner
   - Stabiliserer norsk økonomi

4. **Utfordringer og debatter:**
   - Noen omtaler det som et "klimaparadoks" at Norge er rik på fossil energi samtidig som vi ønsker å være et foregangsland i klimapolitikken. Andre mener dette ikke er et paradoks, men naturlig ressursutnytting, og at norsk gass erstatter mer forurensende kull i Europa.
   - Omstillingsbehov: Det er uenighet om hvor raskt Norge bør fase ut olje og gass, og hvem som skal bære kostnadene ved omstilling
   - Avhengighet: Både arbeidsplasser og statsfinanser er avhengig av næringen

**Spørsmål for fremtiden:** Hvordan og hvor raskt bør olje- og gassutvinning eventuelt fases ut, og hvordan sikre en rettferdig overgang for berørte lokalsamfunn og arbeidstakere?`,
    },
    {
      id: 'geografi-1-7-tip-1',
      type: 'tip',
      title: 'Kobling til kapittel 19',
      content: `**I dette kapittelet** lærer du om bærekraftsprinsipper, ressursforvaltning og internasjonale rammeverk.

**I kapittel 19** fordyper vi oss i konkrete ressurstyper: energiomstilling, hydrogen, CCS, vannressurser og energisystemenes geografi.

Disse utfyller hverandre: Kapittel 7 gir **rammeverket**, kapittel 19 gir **detaljene**.`,
    },
    {
      id: 'geografi-1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom fornybare, ikke-fornybare og betinget fornybare ressurser. Gi to eksempler på hver.',
        hints: ['Tenk på tidsperspektivet for fornyelse'],
        solution: 'Fornybare: Fornyer seg kontinuerlig (sol, vind, tidevannn). Ikke-fornybare: Dannet over millioner av år, endelige mengder (olje, kull, metaller). Betinget fornybare: Kan fornyes hvis ikke overbelastet (jord, grunnvann, skog).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er "allmenningens tragedie"? Gi et eksempel og forklar hvordan problemet kan løses.',
        hints: ['Tenk på felles ressurser uten eierskap'],
        solution: 'Allmenningens tragedie oppstår når alle har fri tilgang til en ressurs og hver enkelt har insentiv til å overutnytte. Eksempel: Overfiske. Løsninger: Regulering (kvoter), privatisering (eierskap), internasjonale avtaler, fellesskap som forvalter sammen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv en ressurskonflikt i verden i dag. Hvem er partene, hva er uenigheten om, og hvilke løsninger finnes?',
        hints: ['Velg vann, olje, mineraler, fisk eller areal'],
        solution: 'Svaret bør inneholde: 1) Ressursen det kjempes om, 2) Hvilke parter/land som er involvert, 3) Bakgrunnen for konflikten, 4) Konsekvenser for mennesker og miljø, 5) Mulige løsninger og kompromisser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar føre-var-prinsippet og forurenser betaler-prinsippet. Hvorfor er disse viktige for miljøpolitikk?',
        hints: ['Tenk på ansvar og forebygging'],
        solution: 'Føre-var: Ved usikkerhet om miljøkonsekvenser skal man være forsiktig. Viktig fordi miljøskader ofte er irreversible. Forurenser betaler: Den som forurenser har økonomisk ansvar. Viktig for å internalisere miljøkostnader og gi insentiv til renere produksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft Norges forvaltning av oljeressursene. Hva har vært suksessfaktorer, og hvilke utfordringer står vi overfor?',
        hints: ['Tenk på oljefondet, statlig kontroll, klimautfordringer'],
        solution: 'Suksessfaktorer: Statlig kontroll, oljefondet, handlingsregelen, stabile institusjoner og lavt korrupsjonsnivå. Utfordringer og debatter: Forholdet mellom oljeinntekter og klimapolitikk er omdiskutert - noen mener Norge har et klimaparadoks, andre at norsk gass er en del av løsningen ved å erstatte kull. Det er også debatt om tempo for omstilling, kostnadsfordeling, og etiske spørsmål om fortsatt utvinning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hva er sirkulær økonomi, og hvordan skiller den seg fra lineær økonomi? Gi eksempler på tiltak.',
        hints: ['Tenk på ta-bruk-kast vs. kretsløp'],
        solution: 'Lineær økonomi: Ta ut ressurser, produser, bruk, kast (ta-bruk-kast). Sirkulær økonomi: Ressurser holdes i kretsløp gjennom gjenbruk, reparasjon, resirkulering. Eksempler: Panteordning, reparasjonscafeer, modulær design, utleietjenester fremfor eierskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-7-mc-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-7-mc-1',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — bærekraft og ressurser:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem definerte bærekraftig utvikling i 1987?',
            solution: 'Brundtlandkommisjonen',
            multipleChoiceOptions: ['FNs klimapanel', 'Brundtlandkommisjonen', 'Verdensbanken', 'Greenpeace'],
          },
          {
            label: 'b',
            task: 'Hvor mange jordkloder ville vi trenge hvis alle levde som en gjennomsnittlig nordmann?',
            solution: 'Ca. 3,4',
            multipleChoiceOptions: ['Ca. 1,2', 'Ca. 2,0', 'Ca. 3,4', 'Ca. 5,0'],
          },
          {
            label: 'c',
            task: 'Hvilken miljøavtale regnes som en av de mest vellykkede?',
            solution: 'Montreal-protokollen (om ozonlaget)',
            multipleChoiceOptions: ['Kyoto-protokollen', 'Montreal-protokollen (om ozonlaget)', 'Parisavtalen', 'Basel-konvensjonen'],
          },
        ],
        solution: 'a) Brundtlandkommisjonen, b) Ca. 3,4, c) Montreal-protokollen',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-7-mc-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-7-mc-2',
        number: '8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — FNs bærekraftsmål:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange bærekraftsmål har FN vedtatt?',
            solution: '17',
            multipleChoiceOptions: ['10', '15', '17', '20'],
          },
          {
            label: 'b',
            task: 'Hva er allmenningens tragedie?',
            solution: 'Overutnyttelse av felles ressurser fordi alle har insentiv til å ta mest mulig',
            multipleChoiceOptions: ['Når en ressurs blir forbudt å bruke', 'Overutnyttelse av felles ressurser fordi alle har insentiv til å ta mest mulig', 'Når en nasjon kontrollerer alle ressursene', 'Naturkatastrofer som ødelegger ressurser'],
          },
        ],
        solution: 'a) 17, b) Overutnyttelse av felles ressurser',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: Naturkatastrofer og saarbarhet
// ============================================================================

export const CHAPTER_GEOGRAFI_8: TextbookChapter = {
  id: 'geografi-1-8',
  courseId: 'geografi',
  chapterNumber: '8',
  title: 'Naturkatastrofer og saarbarhet',
  description: 'Forstå aarsaker til naturkatastrofer og hvorfor noen samfunn er mer saarbare.',
  estimatedMinutes: 75,
  competenceGoals: [
    'utforske og gjøre rede for årsaker til og konsekvenser av naturkatastrofer',
  ],
  content: [
    {
      id: 'geografi-1-8-intro',
      type: 'text',
      content: `## Naturkatastrofer

En naturkatastrofe oppstår når en naturhendelse rammer et sårbart samfunn og forårsaker store tap av liv, eiendom eller miljø.

**Naturhendelse vs. naturkatastrofe:**
Et jordskjelv i et ubebodd område er en naturhendelse. Samme jordskjelv i en storby kan bli en katastrofe.

**Typer naturkatastrofer:**
- Geologiske: Jordskjelv, vulkanutbrudd, skred
- Meteorologiske: Stormer, flom, tørke, hetebølger
- Klimarelaterte: Sykloner, monsunflom, skogbranner

**Trend:**
Antall naturkatastrofer øker, delvis på grunn av klimaendringer, delvis fordi flere mennesker bor i utsatte områder.`,
    },
    {
      id: 'geografi-1-8-text-klassifisering',
      type: 'text',
      content: `## Katastrofetyper i detalj

**Geologiske katastrofer:**
- **Jordskjelv:** Utløses ved plategrenser. Måles i magnitude (Richters/momentmagnitude). Kan utløse tsunamier og skred.
- **Vulkanutbrudd:** Lavastrømmer, askeskyer, pyroklastiske strømmer, laharer (vulkansk gjørmeskred). Kan påvirke klimaet globalt.
- **Skred:** Fjellskred, jordskred, snøskred, leirskred (kvikkleire). Norge er spesielt utsatt for kvikkleireskred.

**Meteorologiske og hydrologiske katastrofer:**
- **Tropiske sykloner:** Orkaner (Atlanteren), tyfoner (Stillehavet), sykloner (Det indiske hav). Krever havtemperatur over 26°C.
- **Flom:** Elveflom, stormflo, flomskred. Verdens mest ødeleggende katastrofetype målt i antall berørte.
- **Tørke:** Langvarig nedbørsunderskudd. Rammer jordbruk, vannforsyning og helse. Kan utløse hungersnød og migrasjon.
- **Hetebølger:** Økende i hyppighet og intensitet. Dreper flere enn de fleste andre naturkatastrofer i Europa.

**Biologiske katastrofer:**
- **Pandemier:** Sykdomsutbrudd som sprer seg globalt (covid-19, ebola).
- **Gresshoppesvermer:** Kan ødelegge avlinger over enorme områder i Afrika og Asia.`,
    },
    {
      id: 'geografi-1-8-def-1',
      type: 'definition',
      title: 'Fare, saarbarhet og risiko',
      content: `**Fare (hazard):**
Potensielt skadelig naturhendelse. Eksempel: Jordskjelv, flom, orkan.

**Sårbarhet (vulnerability):**
Et samfunns evne til å motstå og håndtere en naturhendelse. Påvirkes av:
- Fattigdom
- Dårlig infrastruktur
- Mangel på varsling
- Befolkningstetthet i utsatte områder

**Risiko:**
Risiko = Fare × Sårbarhet

Samme fare gir ulik risiko i ulike samfunn. Et jordskjelv i Japan (lav sårbarhet) gir færre ofre enn i Haiti (høy sårbarhet).

**Resiliens:**
Evnen til å komme tilbake etter en katastrofe. Rike land har ofte høyere resiliens.`,
    },
    {
      id: 'geografi-1-8-def-2',
      type: 'definition',
      title: 'Katastrofeberedskap',
      content: `**Forebygging:**
Tiltak for å redusere faren: Diker mot flom, jordskjelvsikre bygninger, regulering av arealbruk.

**Varsling:**
Systemer for tidlig varsling: Tsunami-varsling, værvarsling, overvåking av vulkaner.

**Beredskap:**
Planer og ressurser for å håndtere katastrofer: Evakueringsplaner, nødforsyninger, øvelser.

**Respons:**
Umiddelbar innsats etter katastrofe: Redning, nødhjelp, midlertidig husly.

**Gjenoppbygging:**
Langsiktig arbeid for å bygge opp samfunnet, helst bedre enn før ("build back better").

**Klimatilpasning:**
Tiltak for å redusere sårbarhet for klimarelaterte hendelser som øker i hyppighet.`,
    },
    {
      id: 'geografi-1-8-def-sendai',
      type: 'definition',
      title: 'DRR og Sendai-rammeverket',
      content: `**DRR (Disaster Risk Reduction):**
Katastroferisikoreduksjon — systematisk arbeid for å redusere risiko og sårbarhet for naturkatastrofer.

**Sendai-rammeverket (2015-2030):**
FN-avtale for katastroferisikoreduksjon med fire prioriteringer:
1. Forstå risiko
2. Styrke risikostyring
3. Investere i forebygging
4. Bedre beredskap og «build back better»

**Mål:** Redusere tap av liv, berørte mennesker og økonomiske tap fra katastrofer.

**Prinsipper:**
- Statene har hovedansvaret
- Lokal medvirkning er viktig
- Alle sektorer må bidra
- Særlig fokus på sårbare grupper (kvinner, barn, eldre, funksjonshemmede)`,
    },
    {
      id: 'geografi-1-8-example-1',
      type: 'example',
      title: 'Eksempel: Jordskjelvet i Haiti 2010 vs. Japan 2011',
      problem: `Hvorfor var konsekvensene av jordskjelvene så forskjellige?`,
      solution: `**Sammenligning:**

| | Haiti 2010 | Japan 2011 |
|---|---|---|
| Styrke | 7,0 | 9,0 (mye kraftigere) |
| Døde | ca. 230 000 | ca. 19 000 |
| BNP per innb. | ca. 700 USD | ca. 46 000 USD |

**Hvorfor flere døde i Haiti med svakere skjelv?**

1. **Bygningskvalitet:**
   - Haiti: Dårlig byggekvalitet, ikke dimensjonert for jordskjelv
   - Japan: Strenge bygningskoder, jordskjelvsikring

2. **Infrastruktur:**
   - Haiti: Svak infrastruktur kollapset
   - Japan: Robust infrastruktur, rask respons

3. **Beredskap:**
   - Haiti: Lite øvelser, svak koordinering
   - Japan: Regelmessige øvelser, effektive varslinger

4. **Økonomiske ressurser:**
   - Haiti: Fattig land, få ressurser til beredskap
   - Japan: Rik nasjon med store ressurser

**Konklusjon:** Det er ikke naturhendelsen alene, men kombinasjonen av fare og sårbarhet som bestemmer katastrofens omfang.`,
    },
    {
      id: 'geografi-1-8-example-gjerdrum',
      type: 'example',
      title: 'Eksempel: Gjerdrum-skredet 2020',
      problem: `Hva skjedde i Gjerdrum, og hva kan vi lære av det?`,
      solution: `**Hendelsen:**
30. desember 2020 gikk et stort kvikkleireskred i Ask i Gjerdrum kommune, Viken. Ti mennesker mistet livet, og et helt boligområde ble ødelagt.

**Årsaker:**
1. **Kvikkleire:** Marin leire avsatt under havet etter istiden. Når saltet vaskes ut av grunnvann, kan leiren kollapse fra fast til flytende tilstand.
2. **Erosjon:** Tistilbekken hadde erodert i leiravsetningene over tid.
3. **Arealbruk:** Boligbygging på kvikkleireavsetninger.
4. **Nedbør:** Mye regn og snøsmelting forut for skredet.

**Lærdommer:**
- Bedre kartlegging av kvikkleireområder
- Strengere regler for bygging i fareområder
- Viktigheten av vedlikehold av bekker og dreneringsveier
- Erosjonssikring langs vassdrag i kvikkleireområder

**Norsk relevans:** Norge har store kvikkleireavsetninger langs kysten og i dalene. Over 100 000 mennesker bor i kartlagte kvikkleiresoner.`,
    },
    {
      id: 'geografi-1-8-tip-1',
      type: 'tip',
      title: 'Eksamenstips: Naturkatastrofer',
      content: `**Husk formelen:** Risiko = Fare × Sårbarhet

**Typisk eksamensoppgave:** Sammenlign konsekvensene av en naturkatastrofe i et rikt og et fattig land. Bruk rammeverket fare-sårbarhet-risiko-resiliens.

**Norske eksempler å kunne:**
- Gjerdrum-skredet (kvikkleire)
- Flom i Gudbrandsdalen (2011, 2013)
- Stormen Dagmar (2011)
- Skredfare generelt i norske fjell`,
    },
    {
      id: 'geografi-1-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom en naturhendelse og en naturkatastrofe.',
        hints: ['Tenk på hvem/hva som rammes'],
        solution: 'En naturhendelse er en naturlig prosess (jordskjelv, flom, storm). Det blir en naturkatastrofe når hendelsen rammer et samfunn og forårsaker store tap av liv, eiendom eller miljø. Samme hendelse i et ubebodd område er ikke en katastrofe.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar begrepene fare, sårbarhet og risiko. Bruk en formel og et eksempel.',
        hints: ['Risiko = Fare × Sårbarhet'],
        solution: 'Fare = potensielt skadelig hendelse. Sårbarhet = samfunnets evne til å motstå hendelsen. Risiko = Fare × Sårbarhet. Eksempel: En flom (fare) i et fattig land med dårlige diker (høy sårbarhet) gir høy risiko, mens samme flom i et rikt land med gode diker (lav sårbarhet) gir lav risiko.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre geologiske og tre meteorologiske naturkatastrofer, og forklar kort hva som forårsaker dem.',
        subTasks: [
          {
            label: 'a',
            task: 'Geologiske katastrofer',
            solution: 'Jordskjelv (platebevegelser), vulkanutbrudd (magma stiger opp), skred/ras (ustabile fjellsider, utløst av vann eller skjelv).',
          },
          {
            label: 'b',
            task: 'Meteorologiske katastrofer',
            solution: 'Flom (mye nedbør, issmelting), orkaner/sykloner (varmt havvann gir kraftige stormer), tørke (manglende nedbør over tid).',
          },
        ],
        solution: 'Se deloppgavene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor rammes fattige land hardere av naturkatastrofer enn rike land?',
        hints: ['Tenk på sårbarhetsfaktorer'],
        solution: 'Fattige land har: 1) Dårligere bygningskvalitet, 2) Svakere infrastruktur, 3) Manglende varslingssystemer, 4) Færre ressurser til beredskap og respons, 5) Svakere institusjoner, 6) Ofte flere som bor i utsatte områder (flomsletter, bratte skråninger).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar sammenhengen mellom klimaendringer og naturkatastrofer. Hvilke typer hendelser forventes å øke?',
        hints: ['Tenk på temperatur, nedbør, havnivå'],
        solution: 'Klimaendringer forsterker mange naturhendelser: Hyppigere/kraftigere hetebølger, mer intens nedbør og flom, kraftigere tropiske stormer (mer energi i varmere hav), lengre tørkeperioder, skogbranner, stigende havnivå som forsterker stormflo.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvilke naturkatastrofer er Norge mest utsatt for? Beskriv hvordan vi kan forberede oss.',
        hints: ['Tenk på vær, skred, klima'],
        solution: 'Norge: Flom (snøsmelting, styrtregn), skred (snø, jord, stein), storm, stormflo, skogbrann (tørt vær). Forberedelse: Gode varslinger (NVE, MET), arealplanlegging (unngå bygging i utsatte områder), sikringstiltak (flomvern, skredsikring), klimatilpasning, beredskapsplaner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-8-mc-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-8-mc-1',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — naturkatastrofer:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er formelen for risiko?',
            solution: 'Risiko = Fare × Sårbarhet',
            multipleChoiceOptions: ['Risiko = Fare + Sårbarhet', 'Risiko = Fare × Sårbarhet', 'Risiko = Fare ÷ Resiliens', 'Risiko = Fare − Beredskap'],
          },
          {
            label: 'b',
            task: 'Hva er kvikkleire?',
            solution: 'Marin leire som kan kollapse fra fast til flytende tilstand',
            multipleChoiceOptions: ['En type vulkansk stein', 'Marin leire som kan kollapse fra fast til flytende tilstand', 'Sand som synker under vann', 'Leire som tåler jordskjelv'],
          },
          {
            label: 'c',
            task: 'Hva er Sendai-rammeverket?',
            solution: 'FN-avtale for katastroferisikoreduksjon',
            multipleChoiceOptions: ['En klimaavtale', 'FN-avtale for katastroferisikoreduksjon', 'En japansk byggestandard', 'Et tsunamivarslingssystem'],
          },
        ],
        solution: 'a) Fare × Sårbarhet, b) Marin leire som kollapser, c) FN-avtale for DRR',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-8-mc-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-8-mc-2',
        number: '8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — beredskap:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken havtemperatur kreves for at tropiske sykloner skal dannes?',
            solution: 'Over 26°C',
            multipleChoiceOptions: ['Over 15°C', 'Over 20°C', 'Over 26°C', 'Over 35°C'],
          },
          {
            label: 'b',
            task: 'Hva betyr "build back better"?',
            solution: 'Bygge opp samfunnet bedre enn før etter en katastrofe',
            multipleChoiceOptions: ['Bygge raskere enn konkurrentene', 'Bygge opp samfunnet bedre enn før etter en katastrofe', 'Bygge høyere bygninger', 'Bygge med billigere materialer'],
          },
        ],
        solution: 'a) Over 26°C, b) Bygge opp bedre enn før etter katastrofe',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9: Norge — naturgrunnlag og ressurser
// ============================================================================

export const CHAPTER_GEOGRAFI_9: TextbookChapter = {
  id: 'geografi-1-9',
  courseId: 'geografi',
  chapterNumber: '9',
  title: 'Norge - naturgrunnlag og ressurser',
  description: 'Forstå Norges naturgeografiske forhold og hvordan de pavirker ressursbruk og bosetting.',
  estimatedMinutes: 75,
  competenceGoals: [
    'utforske og beskrive hvordan naturgrunnlaget påvirker ressurser, bosetting og næringsliv i Norge',
  ],
  content: [
    {
      id: 'geografi-1-9-intro',
      type: 'text',
      content: `## Norges naturgeografi

Norge er et langstrakt land med variert natur - fra kystlandskap i sør til arktiske områder i nord. Naturgrunnlaget har formet bosetting, næringsliv og kultur.

**Naturgeografiske hovedtrekk:**
- Langstrakt land (1800 km nord-sør)
- Fjorder og kystlandskap
- Høyfjell og vidder
- Breer og isformer
- Lang kystlinje (over 100 000 km med øyer)

**Geologisk grunnlag:**
Den skandinaviske fjellkjeden (Kaledonidene) ble dannet for ca. 400 millioner år siden. Istidene formet landskapet vi ser i dag.`,
    },
    {
      id: 'geografi-1-9-text-geologi',
      type: 'text',
      content: `## Norges geologi

**Grunnfjellet:**
Det norske grunnfjellet er blant de eldste bergartene i verden (1-3 milliarder år). Består hovedsakelig av gneis og granitt. Finnes i Sør-Norge, Lofoten og deler av Nordland.

**Den kaledonske fjellkjeden:**
For ca. 400 millioner år siden kolliderte det nordamerikanske og det eurasiske kontinentet. Kollisjonen skapte en fjellkjede like høy som Himalaya. Gjennom hundrevis av millioner år med erosjon ble fjellene slitt ned til det vi ser i dag.

**Istidenes påvirkning:**
De siste 2,6 millioner årene har isbreer formet det norske landskapet:
- Gravde ut fjorder og U-daler
- Dannet morener og andre avsetninger
- Avsatte løsmasser (sand, grus, leire)
- Presset jordskorpen ned under isens vekt

**Landhevning:**
Da isen smeltet for ca. 10 000 år siden, begynte jordskorpen å heve seg igjen. Denne prosessen pågår fortsatt — Oslo-området hever seg ca. 4 mm per år. Havbunn fra istiden ligger nå høyt over havet (marine grenser). Kvikkleire ble avsatt i havet under istiden og befinner seg nå langt fra kysten.`,
    },
    {
      id: 'geografi-1-9-def-1',
      type: 'definition',
      title: 'Norges landskapstyper',
      content: `**Kystlandskapet:**
- Fjorder, skjærgård, strandflate
- Mildt klima, mye nedbør i vest
- Fiskeri, havbruk, skipsfart

**Fjellområdene:**
- Høyfjell over tregrensen (ca. 1000-1200 m i sør)
- Vidder (Hardangervidda, Finnmarksvidda)
- Breer (Jostedalsbreen - Europas største fastlandsbre)

**Dalene:**
- U-daler formet av isbreer
- Jordbruk, bosetting, kommunikasjon
- Eksempler: Gudbrandsdalen, Hallingdal

**Lavlandet:**
- Østlandet og Trøndelag
- Løsmasser fra istiden
- Best jordbruksland

**Nordområdene:**
- Midnattssol og mørketid
- Permafrost i Svalbard
- Sårbar arktisk natur`,
    },
    {
      id: 'geografi-1-9-def-klimaregioner',
      type: 'definition',
      title: 'Klimaregioner i Norge',
      content: `**Vestlandsklima (oseanisk):**
Milde vintre, kjølige somre, mye nedbør (1500-3500 mm/år). Bergen er Norges våteste storby.

**Østlandsklima (kontinentalt):**
Kalde vintre, varme somre, moderat nedbør (500-800 mm/år). Store temperaturforskjeller gjennom året.

**Trøndelagsklima:**
Mellomting mellom kyst og innland. Moderat nedbør, milde vintre langs kysten.

**Nordnorsk klima:**
Kystområdene milde pga. Golfstrømmen. Innlandet (Finnmarksvidda) har Norges kaldeste vintre. Karasjok har Norges kulderekord: -51,4°C.

**Fjellklima:**
Temperaturen synker ca. 0,6°C per 100 m. Kort vekstsesong. Mye vind og nedbør.

**Svalbardklima (arktisk):**
Permafrost, kort sommer, midnattssol og mørketid. Gjennomsnitt -6°C, men stigende raskt pga. klimaendringer.`,
    },
    {
      id: 'geografi-1-9-def-2',
      type: 'definition',
      title: 'Norges naturressurser',
      content: `**Energiressurser:**
- Vannkraft (ca. 90% av strømproduksjonen)
- Olje og gass (Nordsjøen, Norskehavet, Barentshavet)
- Vindkraft (økende)

**Mineralressurser:**
- Jernmalm, kobber, titan, olivin
- Kvarts og andre industrimineraler
- Potensial for sjeldne jordarter

**Marine ressurser:**
- Fiskeri (torsk, sild, makrell, laks)
- Havbruk/oppdrett
- Tang og tare

**Biologiske ressurser:**
- Skog (ca. 40% av landarealet)
- Utmarksbeite (reindrift, sau)
- Genetiske ressurser

**Arealressurser:**
- Bare 3% er dyrket mark
- Betydelig potensial for turisme og friluftsliv`,
    },
    {
      id: 'geografi-1-9-def-verneomrader',
      type: 'definition',
      title: 'Verneområder i Norge',
      content: `**Nasjonalparker:**
Norge har 47 nasjonalparker (inkludert 7 på Svalbard). Formål: Bevare urørt natur, biologisk mangfold og kulturminner. Eksempler: Jotunheimen, Hardangervidda, Rondane.

**Naturreservater:**
Strengeste verneform. Ca. 2500 naturreservater i Norge. All aktivitet som kan skade naturen er forbudt.

**Landskapsvernområder:**
Verner landskapskarakter. Tillater mer bruk enn nasjonalparker.

**Markaloven:**
Beskytter Oslomarka som friluftsområde. Begrenser utbygging.

**Allemannsretten:**
Norsk rett til ferdsel i utmark. Viktig for friluftsliv og folkehelse. Unik i internasjonal sammenheng.

**Vernedebatt:** Det er politisk uenighet om omfanget av vern. Noen mener vern er nødvendig for å bevare natur, andre mener det begrenser næringsutvikling og lokal selvbestemmelse.`,
    },
    {
      id: 'geografi-1-9-example-1',
      type: 'example',
      title: 'Eksempel: Vannkraft i Norge',
      problem: `Hvorfor har Norge så mye vannkraft, og hva er fordeler og utfordringer?`,
      solution: `**Hvorfor vannkraft i Norge:**

1. **Naturlige forutsetninger:**
   - Mye nedbør, særlig på Vestlandet
   - Høye fjell gir stor fallhøyde
   - Mange innsjøer fungerer som naturlige magasiner
   - Breer og snø gir jevn vannføring

2. **Utbygging:**
   - Startet rundt 1900
   - Industrialiseringen drevet av billig strøm
   - I dag ca. 1700 vannkraftverk

**Fordeler:**
- Fornybar og utslippsfri
- Regulerbar (kan lagre vann)
- Billig å drifte når utbygget
- Gir Norge konkurransefortrinn

**Utfordringer:**
- Naturinngrep (regulering av vassdrag, neddemming)
- Konflikt med fiske, friluftsliv, landskap
- Begrenset potensial for ny utbygging
- Klimaendringer kan påvirke vannføring

**Konklusjon:** Vannkraften er en nasjonal ressurs som må balanseres mot naturvern.`,
    },
    {
      id: 'geografi-1-9-tip-1',
      type: 'tip',
      title: 'Studietips: Norges geografi',
      content: `**Bruk kart aktivt:**
- Norgeskart.no for å utforske norsk landskap
- Se etter glasiale landformer i kartet (U-daler, morener, fjorder)
- Sammenlign bosettingsmønster med terreng og klima

**Viktige sammenhenger:**
- Geologi → landformer → bosetting → næringsliv
- Klima → vegetasjon → jordbruksmuligheter
- Ressurser → industri → velstand

**Til eksamen:**
- Kunne forklare hvordan istidene formet norsk landskap
- Vite om landhevning og kvikkleire
- Kunne diskutere avveininger mellom naturvern og næringsutvikling`,
    },
    {
      id: 'geografi-1-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-9-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv hvordan istidene har formet det norske landskapet. Nevn minst fire eksempler på landskapsformer.',
        hints: ['Tenk på erosjon og avsetning'],
        solution: 'Istidene formet: 1) Fjorder (overfordypede daler fylt med sjøvann), 2) U-daler (brede daler med bratte sider), 3) Botner (sirkelformede fordypninger i fjellet), 4) Morener (avsetninger fra breene), 5) Strandflaten (flat kyststripe), 6) Innsjøer (bredemte dalfører).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-9-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor bosettingsmønsteret i Norge er slik det er. Hvilke naturgeografiske faktorer har vært viktigst?',
        hints: ['Tenk på klima, terreng, ressurser'],
        solution: 'Bosettingen er konsentrert langs kysten og i lavlandet. Faktorer: 1) Kysten ga tilgang til fiske og sjøtransport, 2) Lavlandet har best jordbruksjord, 3) Fjell og bratt terreng hindrer bosetting, 4) Mildere klima ved kysten. Resultatet: Spredt bosetting, mange små tettsteder langs kysten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-9-ex-3',
        number: '3',
        type: 'classic',
        task: 'Gi en oversikt over Norges viktigste naturressurser:',
        subTasks: [
          {
            label: 'a',
            task: 'Energiressurser',
            solution: 'Vannkraft (fornybar, ca. 90% av strøm), olje og gass (fossil, stor eksportinntekt), vindkraft (voksende).',
          },
          {
            label: 'b',
            task: 'Marine ressurser',
            solution: 'Fiskeri (torsk, sild, makrell), havbruk (laks, ørret), potensial i tang/tare og bioteknologi.',
          },
          {
            label: 'c',
            task: 'Andre ressurser',
            solution: 'Skog, mineraler (jernmalm, titan, kvarts), turistressurser (natur, friluftsliv).',
          },
        ],
        solution: 'Se deloppgavene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-9-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er bare 3% av Norges areal dyrket mark? Hva betyr dette for norsk matproduksjon?',
        hints: ['Tenk på terreng, klima, jordsmonn'],
        solution: 'Lite dyrkbart areal fordi: 1) Mye fjell og bratt terreng, 2) Kort vekstsesong i nord og i høyden, 3) Dårlig jordsmonn mange steder. Konsekvenser: Norge importerer mye mat, jordvern er viktig, fokus på husdyrhold som kan utnytte utmarksbeite.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-9-ex-5',
        number: '5',
        type: 'classic',
        task: 'Diskuter fordeler og ulemper ved vannkraftutbygging i Norge.',
        hints: ['Tenk på energi, miljø, økonomi, lokalsamfunn'],
        solution: 'Fordeler: Fornybar og utslippsfri energi, regulerbar, billig drift, eksportinntekter, grunnlag for industri. Ulemper: Naturinngrep, påvirker vassdrag og fisk, landskapsendringer, konflikter med friluftsliv og reiseliv, kan ramme reindrift.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-9-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-9-ex-6',
        number: '6',
        type: 'classic',
        task: 'Analyser hjemstedet ditt eller et sted du kjenner. Hvordan har naturgrunnlaget påvirket bosetting, næringsliv og kommunikasjon?',
        hints: ['Se på terreng, klima, tilgang til ressurser, transportårer'],
        solution: 'Svaret bør beskrive: 1) Stedets naturgeografiske forhold (terreng, klima, ressurser), 2) Hvordan dette har påvirket historisk bosetting og næringsliv, 3) Dagens situasjon og utfordringer, 4) Eventuelle konflikter mellom ulike interesser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-9-mc-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-9-mc-1',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — Norges geografi:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er Europas største fastlandsbre?',
            solution: 'Jostedalsbreen',
            multipleChoiceOptions: ['Folgefonna', 'Jostedalsbreen', 'Svartisen', 'Hardangerjøkulen'],
          },
          {
            label: 'b',
            task: 'Hva er landhevning?',
            solution: 'Jordskorpen hever seg etter at isens vekt ble fjernet',
            multipleChoiceOptions: ['Fjell som vokser pga. vulkanisme', 'Jordskorpen hever seg etter at isens vekt ble fjernet', 'Havet som trekker seg tilbake', 'Sedimenter som bygger opp kystlinjen'],
          },
          {
            label: 'c',
            task: 'Omtrent hvor stor andel av Norges areal er dyrket mark?',
            solution: 'Ca. 3%',
            multipleChoiceOptions: ['Ca. 3%', 'Ca. 10%', 'Ca. 20%', 'Ca. 30%'],
          },
        ],
        solution: 'a) Jostedalsbreen, b) Hevning etter istiden, c) Ca. 3%',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-9-mc-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-9-mc-2',
        number: '8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — norsk klima og vern:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange nasjonalparker har Norge (inkludert Svalbard)?',
            solution: '47',
            multipleChoiceOptions: ['12', '25', '47', '73'],
          },
          {
            label: 'b',
            task: 'Hvilken fjellkjede ble dannet for ca. 400 millioner år siden i Norge?',
            solution: 'Den kaledonske fjellkjeden',
            multipleChoiceOptions: ['Himalaya', 'Den kaledonske fjellkjeden', 'Alpene', 'Andesfjellene'],
          },
          {
            label: 'c',
            task: 'Hva er allemannsretten?',
            solution: 'Retten til fri ferdsel i utmark',
            multipleChoiceOptions: ['Retten til å stemme ved valg', 'Retten til fri ferdsel i utmark', 'Retten til gratis helsehjelp', 'Retten til å fiske i alle vann'],
          },
        ],
        solution: 'a) 47, b) Den kaledonske fjellkjeden, c) Fri ferdsel i utmark',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: Global ulikhet og utvikling
// ============================================================================

export const CHAPTER_GEOGRAFI_10: TextbookChapter = {
  id: 'geografi-1-10',
  courseId: 'geografi',
  chapterNumber: '10',
  title: 'Global ulikhet og utvikling',
  description: 'Forstå globale utviklingsforskjeller og arbeidet for en mer rettferdig verden.',
  estimatedMinutes: 80,
  competenceGoals: [
    'utforske og drøfte årsaker til og konsekvenser av global ulikhet',
  ],
  content: [
    {
      id: 'geografi-1-10-intro',
      type: 'text',
      content: `## Global ulikhet

Verden er preget av store forskjeller mellom rike og fattige land, og mellom rike og fattige innenfor land. Å forstå årsakene til og konsekvensene av denne ulikheten er sentralt i geografifaget.

**Fakta om global ulikhet:**
- De 10% rikeste eier over 75% av verdens formue
- Ca. 700 millioner mennesker lever i ekstrem fattigdom (under $2,15/dag)
- Forventet levealder varierer fra under 55 år (noen afrikanske land) til over 85 år (Japan)
- Store forskjeller i tilgang til utdanning, helse og rent vann

**Positive trender:**
- Ekstrem fattigdom har blitt halvert siden 1990
- Barnedødeligheten har falt dramatisk
- Flere har tilgang til utdanning`,
    },
    {
      id: 'geografi-1-10-def-1',
      type: 'definition',
      title: 'Maal paa utvikling',
      content: `**BNP per innbygger:**
Bruttonasjonalprodukt delt på befolkningen. Måler økonomisk aktivitet, men ikke fordeling eller velferd.

**HDI (Human Development Index):**
FNs indeks som kombinerer:
- Forventet levealder
- Utdanningsnivå
- Levestandard (BNP per innbygger)
Skala fra 0 til 1. Norge ligger ofte øverst.

**Gini-koeffisient:**
Mål på ulikhet i inntektsfordeling. 0 = perfekt likhet, 1 = én person har alt.

**MPI (Multidimensional Poverty Index):**
Måler fattigdom ut fra helse, utdanning og levestandard - ikke bare inntekt.

**FNs bærekraftsmål:**
17 mål for bærekraftig utvikling innen 2030. Inkluderer fattigdomsbekjempelse, utdanning, helse, ulikhet.`,
    },
    {
      id: 'geografi-1-10-def-2',
      type: 'definition',
      title: 'Aarsaker til global ulikhet',
      content: `**Historiske årsaker:**
- Kolonialisme - utbytting av ressurser og mennesker
- Slaveri - tvangsarbeid og menneskehandel
- Handelsstrukturer som favoriserte kolonimaktene

**Lokale og institusjonelle faktorer:**
- Styresett og politisk stabilitet
- Korrupsjon og svake institusjoner
- Eiendomsrettigheter og rettssikkerhet
- Konflikter og krig
- Kulturelle faktorer som påvirker økonomisk aktivitet

**Strukturelle årsaker:**
- Handelsregler som noen mener favoriserer rike land
- Gjeldsbyrde
- Begrenset tilgang til internasjonale markeder

**Geografiske faktorer:**
- Klima og naturressurser
- Innlandsland uten kyst
- Sårbarhet for naturkatastrofer
- Tropiske sykdommer

**Ulike perspektiver på årsaker:**
Det er faglig og politisk debatt om hvilke faktorer som er viktigst. Noen vektlegger historiske forhold som kolonialisme og urettferdige internasjonale strukturer. Andre peker på at lokale faktorer som styresett, korrupsjon og politikk er avgjørende - og viser til at land med lignende historisk bakgrunn har utviklet seg svært forskjellig (f.eks. Sør-Korea vs. Nord-Korea, Botswana vs. Zimbabwe).

**Fattigdomsfeller:**
Selvforsterkende sirkler som gjør det vanskelig å komme ut av fattigdom: mangel på utdanning → lav produktivitet → lav inntekt → ikke råd til utdanning.`,
    },
    {
      id: 'geografi-1-10-def-bistand',
      type: 'definition',
      title: 'Bistand og utviklingssamarbeid',
      content: `**Bilateral bistand:**
Direkte fra giverland til mottakerland. Eksempel: Norges bistand til Mosambik.

**Multilateral bistand:**
Gjennom internasjonale organisasjoner (FN, Verdensbanken). Fordel: Mer koordinert. Ulempe: Byråkrati.

**Humanitær bistand:**
Nødhjelp ved kriser (naturkatastrofer, konflikter, hungersnød). Kortsiktig, livreddende.

**Langsiktig utviklingsbistand:**
Investering i utdanning, helse, infrastruktur, institusjonsbygging. Mer bærekraftig effekt.

**Norsk bistand:**
Norge gir ca. 1% av BNI til bistand (blant verdens høyeste). Diskusjon om bistandens effektivitet og innretning er en vedvarende politisk debatt.

**BRICS:**
Brasil, Russland, India, Kina, Sør-Afrika (pluss nylig Egypt, Etiopia, Iran, De forente arabiske emirater, Saudi-Arabia). Utfordrer vestlig dominans i internasjonale institusjoner. Representerer nye maktstrukturer i global økonomi.`,
    },
    {
      id: 'geografi-1-10-text-brics',
      type: 'text',
      content: `## Nye maktstrukturer — BRICS og det globale sør

**Fra «tredje verden» til «det globale sør»:**
Tidligere snakket man om «i-land og u-land» eller «den tredje verden». I dag brukes ofte begrepene «det globale nord» og «det globale sør», selv om disse også er forenklinger. Noen land passer dårlig inn i todelingen — Kina er verdens nest største økonomi, men har fortsatt hundrevis av millioner fattige.

**BRICS-landenes vekst:**
- **Kina:** Fra fattig jordbruksland til verdens nest største økonomi på 40 år. Løftet ca. 800 millioner ut av fattigdom.
- **India:** Verdens raskest voksende store økonomi. Sterk IT-sektor, men stor ulikhet.
- **Brasil:** Største økonomi i Sør-Amerika. Rik på naturressurser, men politisk ustabil.

**Hva betyr dette for global ulikhet?**
Mellomlandsulikheten (mellom land) har faktisk minket de siste 30 årene, hovedsakelig på grunn av Kinas og Indias vekst. Men ulikheten innad i mange land har økt. Det betyr at hvor du bor i et land kan bety mer enn hvilket land du bor i.`,
    },
    {
      id: 'geografi-1-10-example-1',
      type: 'example',
      title: 'Eksempel: Utviklingen i Sør-Korea',
      problem: `Hvordan gikk Sør-Korea fra å være et av verdens fattigste land til et av de rikeste på 50 år?`,
      solution: `**Sør-Koreas utvikling:**

**Utgangspunktet (1960):**
- Fattig jordbruksland etter Korea-krigen
- BNP per innbygger under $100
- Lite naturressurser
- Sammenlignbart med Ghana

**Suksessfaktorer:**

1. **Utdanningssatsing:**
   - Massiv investering i grunnskole og høyere utdanning
   - Høyt utdannet arbeidsstyrke

2. **Eksportorientert industri:**
   - Fra jordbruk til industri (tekstil → elektronikk → teknologi)
   - Store konglomerater (chaebols): Samsung, Hyundai, LG

3. **Statlig styring:**
   - Aktiv industripolitikk
   - Beskyttelse av unge industrier
   - Investering i infrastruktur

4. **Kulturelle faktorer:**
   - Høy arbeidsmoral
   - Vekt på utdanning

**Resultatet (i dag):**
- BNP per innbygger ca. $35 000
- Verdensledende i teknologi
- Høy HDI

**Lærdom:** Utvikling er mulig, men krever langsiktig satsing på utdanning og produktiv næring.`,
    },
    {
      id: 'geografi-1-10-tip-1',
      type: 'tip',
      title: 'Eksamenstips: Global ulikhet',
      content: `**Drøftingsoppgaver om utvikling:**
- Vis at du kjenner ulike perspektiver på årsakene til fattigdom
- Bruk konkrete eksempler (land, tall, sammenhenger)
- Ikke forenkel — utviklingsspørsmål er komplekse

**Viktige mål å kunne:**
- HDI vs. BNP per innbygger — styrker og svakheter
- Gini-koeffisienten — hva den måler
- MPI — hvorfor flerdimensjonal fattigdomsmåling er viktig

**Nyttige nettsider:**
- Gapminder.org — visualiser utviklingsdata
- data.worldbank.org — statistikk fra Verdensbanken
- hdr.undp.org — FNs Human Development Reports`,
    },
    {
      id: 'geografi-1-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-10-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom BNP per innbygger og HDI som mål på utvikling. Hva er styrker og svakheter ved hver?',
        hints: ['Tenk på hva som måles og hva som ikke fanges opp'],
        solution: 'BNP per innbygger måler kun økonomisk aktivitet, ikke fordeling, helse eller utdanning. HDI kombinerer levealder, utdanning og inntekt, gir bredere bilde. Svakhet BNP: Ignorer ulikhet, miljø, ubetalt arbeid. Svakhet HDI: Fortsatt begrenset, fanger ikke opp demokrati, frihet, miljø.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-10-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv tre historiske og tre nåtidige årsaker til global ulikhet, og vis at det finnes ulike perspektiver.',
        subTasks: [
          {
            label: 'a',
            task: 'Historiske årsaker',
            solution: 'Kolonialisme (utbytting av ressurser), slaveri (tvangsarbeid), handelsstrukturer etablert under kolonitiden. Merk: Betydningen av disse årsakene er omdiskutert - noen mener de fortsatt har stor effekt, andre peker på at land med lignende historie har utviklet seg svært forskjellig.',
          },
          {
            label: 'b',
            task: 'Nåtidige årsaker',
            solution: 'Mulige faktorer inkluderer: 1) Internasjonale forhold som handelsregler og gjeldsbyrde, 2) Lokale forhold som styresett, korrupsjon og konflikter, 3) Geografiske faktorer som klima og beliggenhet. Det er faglig debatt om hvilke faktorer som er viktigst.',
          },
        ],
        solution: 'Se deloppgavene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-10-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er en fattigdomsfelle? Gi et eksempel og forklar hvordan den virker.',
        hints: ['Tenk på selvforsterkende sirkler'],
        solution: 'Fattigdomsfelle er en selvforsterkende sirkel som holder mennesker i fattigdom. Eksempel: Foreldre har ikke råd til skolegang for barn → barn får ikke utdanning → barn får dårlig betalt jobb som voksen → har ikke råd til skolegang for egne barn. Kan brytes med investeringer i utdanning, helse, infrastruktur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-10-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er FNs bærekraftsmål, og hvordan henger de sammen med bekjempelse av global ulikhet?',
        hints: ['Tenk på mål 1 (fattigdom), 10 (ulikhet) og andre'],
        solution: 'FNs 17 bærekraftsmål skal nås innen 2030. Flere handler direkte om ulikhet: Mål 1 (utrydde fattigdom), Mål 4 (utdanning), Mål 10 (redusere ulikhet). Målene henger sammen - fattigdomsbekjempelse krever utdanning, helse, rettferdige institusjoner og klimatiltak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-10-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft påstanden: "Bistand hjelper ikke - det gjør land avhengige og hindrer utvikling."',
        hints: ['Se på argumenter for og mot, ulike typer bistand'],
        solution: 'For: Kan skape avhengighet, underminere lokalt næringsliv, brukes av korrupte regimer. Mot: Har reddet millioner av liv (vaksinering, nødhjelp), investering i utdanning/helse gir avkastning, noen land har utviklet seg med bistand. Nyansert: Type bistand og mottakerland påvirker effekten. Handelsvilkår og strukturelle forhold er også viktige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-10-ex-6',
        number: '6',
        type: 'classic',
        task: 'Velg et utviklingsland og analyser: Hva er landets utviklingsnivå (bruk HDI eller andre indikatorer)? Hva er de viktigste utfordringene? Hvilke muligheter har landet?',
        hints: ['Bruk statistikk fra FN, Verdensbanken eller Gapminder'],
        solution: 'Svaret bør inneholde: 1) Landets HDI og andre relevante tall, 2) Historisk bakgrunn, 3) Hovedutfordringer (fattigdom, helse, klima, konflikter), 4) Ressurser og muligheter, 5) Egne vurderinger av veien videre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-10-mc-1',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-10-mc-1',
        number: '7',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — global ulikhet:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva måler Gini-koeffisienten?',
            solution: 'Ulikhet i inntektsfordeling',
            multipleChoiceOptions: ['Bruttonasjonalprodukt', 'Ulikhet i inntektsfordeling', 'Forventet levealder', 'Utdanningsnivå'],
          },
          {
            label: 'b',
            task: 'Hvilket land ligger ofte øverst på HDI-rangeringen?',
            solution: 'Norge',
            multipleChoiceOptions: ['USA', 'Norge', 'Kina', 'Japan'],
          },
          {
            label: 'c',
            task: 'Hva er MPI?',
            solution: 'Flerdimensjonal fattigdomsindeks som måler helse, utdanning og levestandard',
            multipleChoiceOptions: ['Et mål på bruttonasjonalprodukt', 'En indeks for miljøkvalitet', 'Flerdimensjonal fattigdomsindeks som måler helse, utdanning og levestandard', 'Et mål på landets militære styrke'],
          },
        ],
        solution: 'a) Ulikhet i inntektsfordeling, b) Norge, c) Flerdimensjonal fattigdomsindeks',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'geografi-1-10-mc-2',
      type: 'exercise',
      exercise: {
        id: 'geografi-1-10-mc-2',
        number: '8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Flervalg — utvikling og bistand:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke land utgjør de opprinnelige BRICS-landene?',
            solution: 'Brasil, Russland, India, Kina, Sør-Afrika',
            multipleChoiceOptions: ['Brasil, Russland, India, Kina, Sør-Afrika', 'Bolivia, Romania, Iran, Kongo, Syria', 'Belgia, Rwanda, Indonesia, Canada, Sverige', 'Bangladesh, Russland, Israel, Chile, Spania'],
          },
          {
            label: 'b',
            task: 'Omtrent hvor stor andel av BNI gir Norge i bistand?',
            solution: 'Ca. 1%',
            multipleChoiceOptions: ['Ca. 0,1%', 'Ca. 0,5%', 'Ca. 1%', 'Ca. 5%'],
          },
          {
            label: 'c',
            task: 'Hva viste Sør-Koreas utvikling om veien ut av fattigdom?',
            solution: 'Langsiktig satsing på utdanning og eksportorientert industri kan gi rask utvikling',
            multipleChoiceOptions: ['Naturressurser er avgjørende for utvikling', 'Langsiktig satsing på utdanning og eksportorientert industri kan gi rask utvikling', 'Bistand er den viktigste faktoren', 'Geografi bestemmer utviklingsnivå'],
          },
        ],
        solution: 'a) Brasil, Russland, India, Kina, Sør-Afrika, b) Ca. 1%, c) Utdanning og industri',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for Del 2
// ============================================================================

export const GEOGRAFI_CHAPTERS_DEL2: TextbookChapter[] = [
  CHAPTER_GEOGRAFI_6,
  CHAPTER_GEOGRAFI_7,
  CHAPTER_GEOGRAFI_8,
  CHAPTER_GEOGRAFI_9,
  CHAPTER_GEOGRAFI_10,
];
