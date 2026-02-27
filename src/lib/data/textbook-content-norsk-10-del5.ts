/**
 * Tekstbok innhold for Norsk 10. klasse - Del 5 (Kapittel 7.1-7.6)
 *
 * Følger LK20 læreplan for norsk ungdomstrinn.
 * Del 5 dekker språkhistorie og språkmangfold: fra norrønt til norsk,
 * dansketiden, språkstriden, dialekter, nabospråk og språk i endring.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7.1: Fra norrønt til norsk
// LK20: Gjøre rede for noen sentrale forskjeller mellom norrønt og moderne norsk
// ============================================================================

export const CHAPTER_NORSK_10_7_1: TextbookChapter = {
  id: 'norsk-10-7-1',
  courseId: 'norsk-10',
  chapterNumber: '7.1',
  title: 'Fra norrønt til norsk',
  description: 'Lær om det norrøne språket, runene, vikingtiden og hvordan norrønt gradvis ble til moderne norsk gjennom lydendringer og grammatiske forenklinger.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for noen sentrale forskjeller mellom norrønt og moderne norsk',
    'forklare viktige hendelser i norsk språkhistorie',
    'reflektere over hvordan språk endrer seg over tid og hva som påvirker språkendring',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-7-1-intro',
      type: 'text',
      content: `## Fra norrønt til norsk: Språket som bandt Norden sammen

Tenk deg at du står på et vikingskip rundt år 900. Du hører mannskapet snakke. Ville du forstått dem? Svaret er nei — i hvert fall ikke uten trening. Språket de snakket het **norrønt**, og selv om det er stamfaren til moderne norsk, dansk, svensk, islandsk og færøysk, ville det hørt ut som et fremmedspråk for deg.

Norrønt var språket til vikingene, sagadikterne og lovgiverne. Det ble skrevet med runer på steiner og tre, og senere med det latinske alfabetet på pergament. Norrønt hadde et rikt kasussystem, helt andre lydregler enn moderne norsk, og et vokabular vi i dag bare finner spor av i stedsnavnene og de eldste ordene våre.

Men språk står aldri stille. Fra vikingtiden til i dag har norsk gjennomgått en lang og dramatisk forvandling. Lyder har forsvunnet, grammatikk har blitt forenklet, og tusenvis av lånord har strømmet inn fra andre språk. Likevel kan vi fremdeles trekke en ubrutt linje fra norrønt til det norske du snakker i dag.

I dette kapittelet skal du lære:
- Hva norrønt var og hvordan det så ut
- Hvilke lydendringer og grammatiske forenklinger som forvandlet språket
- Hvordan vi kan se spor av norrønt i moderne norsk
- Forskjellen mellom runeskrift og det latinske alfabetet

Hvorfor er dette viktig? Fordi å forstå språkhistorien er å forstå hvem vi er. Språket bærer med seg historien til dem som snakket det — og norsk bærer med seg over tusen år med kunnskap, makt, tap og gjenreisning.`,
    },

    // ========== DEFINISJON: NORRØNT ==========
    {
      id: 'norsk-10-7-1-def-1',
      type: 'definition',
      title: 'Norrønt (gammelnorsk)',
      content: `**Norrønt** (også kalt gammelnorsk eller norrønt mål) er fellesbetegnelsen på de nordiske språkene i vikingtiden og middelalderen, fra ca. 700 til ca. 1350.

Norrønt deles gjerne i to hovedperioder:
- **Urnordisk** (ca. 200–700): Det aller eldste stadiet, kjent fra runeinnskrifter
- **Norrønt** (ca. 700–1350): Vikingtid og tidlig middelalder

Norrønt ble snakket i hele Norden, men etter hvert oppsto det forskjeller:
- **Vestnordisk**: Norsk og islandsk (og senere færøysk)
- **Østnordisk**: Dansk og svensk

**Viktig:** Islandsk har endret seg minst av de nordiske språkene. Islendinger i dag kan fremdeles lese norrøne sagaer nesten uten hjelp — noe som er umulig for nordmenn uten spesialtrening.`,
    },

    // ========== EKSEMPEL: NORRØNT VS. MODERNE NORSK ==========
    {
      id: 'norsk-10-7-1-example-1',
      type: 'example',
      title: 'Eksempel: Norrønt sammenlignet med moderne norsk',
      problem: `Se på disse norrøne setningene og deres moderne norske oversettelser. Hvilke forskjeller legger du merke til?

**Norrønt:** «Hann var maðr vitr ok vel at sér.»
**Moderne norsk:** «Han var en vis mann og vel ansett.»

**Norrønt:** «Konungr gaf honum gull ok góða gripi.»
**Moderne norsk:** «Kongen ga ham gull og gode gaver.»

**Norrønt:** «Þeir fóru til Íslands ok bygðu þar land.»
**Moderne norsk:** «De dro til Island og bosatte seg der.»

Sammenlign tekstene og finn forskjeller i ordforråd, grammatikk og stavemåte.`,
      solution: `**Ordforråd:**
- «maðr» → «mann» (lyden ð har forsvunnet)
- «vitr» → «vis» (endelsen -r er borte)
- «konungr» → «kongen» (endelsen -r er erstattet av bestemt artikkel -en)
- «honum» → «ham» (dativformen «honum» er forenklet)
- «góða gripi» → «gode gaver» (adjektivbøyningen er forenklet)
- «Þeir» → «De» (bokstaven Þ/þ [thorn] er blitt til «d» eller «t»)

**Grammatikk:**
- Norrønt hadde **fire kasus**: nominativ, akkusativ, dativ og genitiv. Moderne norsk har nesten ikke kasus igjen.
- Norrønt hadde rikere **verbøyning** som viste hvem som handlet, uten å trenge «jeg», «du» osv.
- Ordstillingen i norrønt var friere fordi kasusendelsene viste hvem som var subjekt og objekt.

**Stavemåte/lyder:**
- Bokstaven **ð** (stemt th-lyd) fantes i norrønt men forsvant fra norsk
- Bokstaven **þ** (ustemt th-lyd, som engelsk «think») ble til d/t
- Mange diftonger og vokaler har endret seg`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'norsk-10-7-1-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-1-ex-1',
        number: '7.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er norrønt?',
        options: [
          {
            id: 'a',
            text: 'Et kunstig språk skapt av Snorre Sturlason',
            isCorrect: false,
            feedback: 'Feil. Norrønt var et naturlig språk som ble snakket i hele Norden i vikingtiden og middelalderen. Snorre skrev ned sagaer på norrønt, men han skapte ikke språket.',
          },
          {
            id: 'b',
            text: 'Fellesbetegnelsen på de nordiske språkene fra ca. 700 til ca. 1350',
            isCorrect: true,
            feedback: 'Riktig! Norrønt ble snakket i hele Norden i vikingtiden og tidlig middelalder, og er stamfaren til moderne norsk, dansk, svensk, islandsk og færøysk.',
          },
          {
            id: 'c',
            text: 'Et gammelt dansk skriftspråk fra 1500-tallet',
            isCorrect: false,
            feedback: 'Feil. Norrønt er mye eldre enn 1500-tallet og var felles for hele Norden, ikke bare Danmark.',
          },
          {
            id: 'd',
            text: 'Et språk som bare ble snakket på Island',
            isCorrect: false,
            feedback: 'Feil. Norrønt ble snakket i hele Norden, men islandsk har bevart flest norrøne trekk.',
          },
        ],
        solution: 'Alternativ B er riktig. Norrønt ble snakket i Norden fra ca. 700 til ca. 1350.',
      },
    },

    // ========== RUNER OG SKRIFT ==========
    {
      id: 'norsk-10-7-1-runer',
      type: 'text',
      content: `## Runeskrift: Nordens eldste alfabet

Før det latinske alfabetet (det vi bruker i dag) kom til Norden med kristendommen, skrev nordboerne med **runer**. Runer er kantede bokstaver som var lette å risse inn i tre, bein og stein.

### Futhark — runealfabetet
Runealfabetet kalles **futhark** etter de seks første runene: **f, u, þ, a, r, k** (omtrent som vi kaller vårt alfabet «ABC»).

Det fantes to hovedversjoner:
- **Den eldre futhark** (ca. 150–800): 24 runer
- **Den yngre futhark** (ca. 800–1100): 16 runer (forenklet versjon brukt i vikingtiden)

Paradoksalt nok hadde den yngre futhark **færre** runer enn den eldre, selv om norrønt hadde minst like mange lyder. Det betydde at én rune ofte måtte representere flere lyder, noe som gjør vikingtidens runeinnskrifter vanskelige å tolke.

### Hva ble runer brukt til?
- **Runestener:** Store steiner med inskripsjoner, ofte til minne om døde eller for å markere eiendom
- **Hverdagsbruk:** Handelsmenn og håndverkere risset runer på trepinner, bein og gjenstander
- **Magi:** Runer ble også knyttet til norrøn mytologi — guden Odin skal ha «funnet» runene etter å ha hengt ni dager i verdenstreet Yggdrasil

### Kristendommen og det latinske alfabetet
Da kristendommen kom til Norge rundt år 1000, fulgte det latinske alfabetet med. Munkene og prestene som lærte nordmennene å lese og skrive, brukte det latinske alfabetet. Gradvis erstattet det runene, men runeskrift ble brukt ved siden av det latinske alfabetet i flere hundre år, spesielt på landsbygda.

### Bryggen i Bergen — en skattkiste av runer
I 1955 brant store deler av Bryggen i Bergen. Under branntomten fant arkeologene over **600 runeinnrissede trepinner** fra middelalderen (1100–1400-tallet). Disse viser at vanlige folk brukte runer til å skrive hverdagsbeskjeder, kjærlighetsnotater, vitser og handelsbrev. Runene var ikke bare for storfolk — de var allemannseie.`,
    },

    // ========== DEFINISJON: LYDENDRINGER ==========
    {
      id: 'norsk-10-7-1-def-2',
      type: 'definition',
      title: 'Viktige lydendringer fra norrønt til moderne norsk',
      content: `Språk forandrer seg gradvis over tid. Her er noen av de viktigste lydendringene som forvandlet norrønt til moderne norsk:

**1. Monoftongering (noen dialekter)**
Norrøne diftonger (dobbeltlyder) som «ei», «au» og «øy» ble til enkle vokaler i østnorsk:
- Norrønt «steinn» → «sten» / «stein» (avhenger av dialekt)
- Norrønt «auga» → «øye» / «auge»

**2. Bortfall av endelser**
Kasusendelsene forsvant gradvis:
- Norrønt «konungr» (nominativ) → «kongen»
- Norrønt «konungi» (dativ) → borte fra moderne norsk

**3. Lenisering (svekking av konsonanter)**
Harde konsonanter ble mykere:
- Norrønt «bók» [boːk] → «bok» (uttalt med myk k i mange dialekter)

**4. Bortfall av spesialbokstaver**
Bokstavene þ (thorn) og ð (eth) forsvant og ble erstattet:
- þ → t eller d (norrønt «þing» → «ting»)
- ð → d (norrønt «faðir» → «far/fader»)

**Husk:** Disse endringene skjedde ikke over natten, men over hundrevis av år. Og de skjedde ulikt i ulike deler av landet — noe som er en av grunnene til at Norge har så mange dialekter.`,
    },

    // ========== EKSEMPEL: SPOR AV NORRØNT ==========
    {
      id: 'norsk-10-7-1-example-2',
      type: 'example',
      title: 'Eksempel: Norrøne spor i moderne norsk',
      problem: `Mange moderne norske ord og uttrykk har norrøne røtter. Kan du se sammenhengen mellom de norrøne ordene og deres moderne etterkommere?

| Norrønt | Moderne norsk | Betydning |
|---------|---------------|-----------|
| húskarl | huskar/husmann | Tjener i huset |
| berserkr | berserk | Rasende kriger |
| þing | ting/Storting | Forsamling |
| bóndi | bonde | Gårdbruker |
| trollkona | trollkvinne | Trollkvinne |

Mange stedsnavn har også norrøne røtter:
- **-heim** (hjem): Trondheim, Seljheim
- **-vik** (vik/bukt): Sandvika, Narvik
- **-nes** (nes/odde): Bygdøynes, Lindesnes
- **-dal** (dal): Hallingdal, Gudbrandsdalen
- **-berg** (fjell): Tønsberg, Sarpsborg

Forklar hva disse eksemplene forteller oss om sammenhengen mellom norrønt og moderne norsk.`,
      solution: `**Ordforråd:**
Mange hverdagsord i moderne norsk stammer direkte fra norrønt. Ord som «bonde», «ting», «heim» og «vik» har vært i kontinuerlig bruk i over tusen år, selv om uttalen har endret seg.

**Stedsnavn:**
Stedsnavnene er som et språklig arkiv — de «fryser» gamle ord. Endelser som -heim, -vik, -nes, -dal og -berg viser at norrønt lever videre i det norske landskapet. Stedsnavn endrer seg langsommere enn dagligspråket fordi de er knyttet til et bestemt sted.

**Lånord til andre språk:**
Norrønt ga også ord til andre språk gjennom vikingenes reiser:
- Engelsk: «window» (vindauga = vindøye), «husband» (húsbóndi), «skill» (skil), «anger» (angr)
- Fransk: «turbot» (þornbutr), «vague» (vágr = bølge)

**Konklusjon:**
Sammenhengen mellom norrønt og moderne norsk er ubrutt. Selv om grammatikk og uttale har endret seg dramatisk, lever det norrøne ordforrådet videre — i dagligspråket, i stedsnavnene, og til og med i andre språk.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'norsk-10-7-1-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-1-ex-2',
        number: '7.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken påstand om runer er riktig?',
        options: [
          {
            id: 'a',
            text: 'Den yngre futhark hadde flere runer enn den eldre futhark',
            isCorrect: false,
            feedback: 'Feil. Det er omvendt: den eldre futhark hadde 24 runer, mens den yngre (vikingtiden) bare hadde 16.',
          },
          {
            id: 'b',
            text: 'Runer ble bare brukt av konger og prester',
            isCorrect: false,
            feedback: 'Feil. Funnene fra Bryggen i Bergen viser at vanlige folk brukte runer til hverdagsbeskjeder, vitser og handelsbrev.',
          },
          {
            id: 'c',
            text: 'Runene forsvant umiddelbart da kristendommen kom til Norge',
            isCorrect: false,
            feedback: 'Feil. Runeskrift ble brukt ved siden av det latinske alfabetet i flere hundre år etter kristningen.',
          },
          {
            id: 'd',
            text: 'Runene var kantede bokstaver som var lette å risse inn i tre og stein',
            isCorrect: true,
            feedback: 'Riktig! Runenes kantede form var praktisk tilpasset materialet de ble risset inn i.',
          },
        ],
        solution: 'Alternativ D er riktig. Runene hadde kantede former som var praktiske å risse inn i harde materialer.',
      },
    },

    // ========== NORRØN GRAMMATIKK ==========
    {
      id: 'norsk-10-7-1-grammatikk',
      type: 'text',
      content: `## Norrøn grammatikk: Et helt annet system

Norrønt hadde en grammatikk som var mye mer kompleks enn moderne norsk. For å virkelig forstå forskjellen, la oss se på noen nøkkelforskjeller:

### Kasussystemet
Moderne norsk har praktisk talt bare én form av substantivene (pluss bestemt/ubestemt og entall/flertall). Norrønt hadde **fire kasus** — fire ulike former av hvert ord, avhengig av funksjonen i setningen:

| Kasus | Funksjon | Eksempel (maðr = mann) |
|-------|----------|----------------------|
| Nominativ | Subjekt | **maðr** (mannen gjør noe) |
| Akkusativ | Direkte objekt | **mann** (noen ser mannen) |
| Dativ | Indirekte objekt | **manni** (noen gir mannen noe) |
| Genitiv | Eiendom | **manns** (mannens ting) |

### Verbbøyning
Norrøne verb ble bøyd for person og tall:
- Ek *fer* (jeg farer)
- Þú *ferr* (du farer)
- Hann *ferr* (han farer)
- Vér *forum* (vi farer)
- Þeir *fóru* (de farer)

I moderne norsk bruker vi samme verbform for alle: «jeg reiser, du reiser, han reiser, vi reiser, de reiser.»

### Adjektivbøyning
Adjektiv ble bøyd for kjønn, tall OG kasus. Et adjektiv som «god» hadde over 20 ulike former i norrønt. I moderne norsk har vi bare noen få: god, godt, gode.

### Hvorfor ble grammatikken enklere?
Den viktigste årsaken er **språkkontakt**. Da nordmenn kom i tett kontakt med dansker og andre folk (særlig fra 1300-tallet), ble det vanskelig å opprettholde et komplekst kasussystem. Kasusendelsene ble utydelige, og til slutt forsvant de — erstattet av ordstilling og preposisjoner.

Dette er et mønster vi ser over hele verden: når folk med ulike språk lever tett sammen, forenkles grammatikken i det språket som brukes som fellesspråk.`,
    },

    // ========== DEFINISJON: GAMMELNORSK TIL MELLOMNORSK ==========
    {
      id: 'norsk-10-7-1-def-3',
      type: 'definition',
      title: 'Periodene i norsk språkhistorie',
      content: `Norsk språkhistorie deles vanligvis inn i fire hovedperioder:

**1. Urnordisk (ca. 200–700)**
Det eldste stadiet. Kjent fra runeinnskrifter. Felles for hele Norden.

**2. Norrønt / gammelnorsk (ca. 700–1350)**
Vikingtiden og høymiddelalderen. Rikt kasussystem. Sagalitteraturen ble skrevet ned.

**3. Mellomnorsk (ca. 1350–1525)**
En overgangsperiode. Svartedauden (1349) drepte opp mot 60 % av befolkningen, og mange av dem som kunne lese og skrive, døde. Norsk skriftkultur kollapset. Kasusendelsene smuldret bort, og dansk fikk stadig større innflytelse.

**4. Moderne norsk (ca. 1525–i dag)**
Fra reformasjonen og fremover. Danmark-Norge fikk felles skriftspråk (dansk), men talespråket i Norge utviklet seg videre som egne dialekter. Først på 1800-tallet begynte nordmenn å utvikle egne skriftspråk igjen (bokmål og nynorsk).

**Svartedauden — språkhistoriens vendepunkt:**
Svartedauden i 1349 var katastrofal for norsk skriftkultur. Så mange skrivekyndige mennesker døde at den norske skrifttradisjonen nesten forsvant. I vakuumet som oppsto, tok dansk over som skriftspråk — noe som fikk konsekvenser som varte i flere hundre år.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'norsk-10-7-1-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-1-ex-3',
        number: '7.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar med egne ord hvorfor norrøn grammatikk ble forenklet over tid. Bruk minst to faktorer i svaret ditt.',
        hints: [
          'Tenk på hva som skjer når folk med ulike språk lever tett sammen',
          'Hva skjedde med skriftkulturen etter svartedauden?',
        ],
        solution: 'Den norrøne grammatikken ble forenklet av flere grunner: 1) Språkkontakt med dansker og andre folk førte til at kasusendelsene ble utydelige og forsvant — det var lettere å bruke ordstilling og preposisjoner. 2) Svartedauden i 1349 drepte mange skrivekyndige mennesker, og den norske skrifttradisjonen kollapset. Uten en sterk skrifttradisjon til å stabilisere språket, gikk endringene raskere. 3) I talespråket var det naturlig at utrydelige endelser falt bort over generasjoner.',
        allowsUpload: true,
      },
    },

    // ========== EKSEMPEL: STEDSNAVN ==========
    {
      id: 'norsk-10-7-1-example-3',
      type: 'example',
      title: 'Eksempel: Norrøne spor i stedsnavnene der du bor',
      problem: `Stedsnavnene rundt oss forteller om norrøn tid. Se på disse vanlige stedsnavnendelsene og hva de betyr:

| Endelse | Norrønt opphav | Betydning | Eksempler |
|---------|---------------|-----------|-----------|
| -by | býr | gård/bosted | Grimsby, Sandby |
| -rud | ruð | rydning | Siggerud, Knardalstrand |
| -tveit | þveit | rydning/stykke | Kvitseid, Hovdebygda |
| -heim | heimr | hjem | Trondheim, Solheim |
| -vin | vin | eng/beitemark | Bjørgvin (Bergen), Granvin |
| -stad | staðr | sted | Halvorstad, Hermanstad |
| -land | land | land/jord | Rogaland, Nordland |

Bruk denne kunnskapen: Hva kan stedsnavnet «Bjørgvin» (det gamle norrøne navnet på Bergen) bety?`,
      solution: `**Bjørgvin** er satt sammen av to norrøne ord:
- **bjǫrg** = fjell/berg
- **vin** = eng/beitemark

Bjørgvin betyr altså «engen/beitemarka mellom fjellene» — noe som passer perfekt med Bergens beliggenhet mellom de syv fjellene.

Dette viser hvordan norrøne stedsnavn er beskrivende: de forteller om landskapet, bruken av området eller hvem som bodde der. Stedsnavnene er som et levende kart over det norrøne landskapet.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'norsk-10-7-1-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-1-ex-4',
        number: '7.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Undersøk stedsnavn i nærheten av der du bor. Finn minst tre stedsnavn som har norrøne endelser (som -heim, -vik, -nes, -dal, -by, -rud, -stad, -land).',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv ned de tre stedsnavnene og forklar hva endelsen betyr.',
            solution: 'Svaret avhenger av hvor eleven bor. Eksempel: «Sandvika» — vik betyr bukt, så Sandvika betyr «den sandete bukta». «Solheim» — heim betyr hjem, så Solheim betyr «solens hjem». «Nordstrand» — strand betyr strandlinje.',
          },
          {
            label: 'b',
            task: 'Hva forteller stedsnavnene om området? Kan du se en sammenheng mellom navnet og landskapet?',
            solution: 'En god besvarelse viser at eleven kobler stedsnavnet til landskapet. For eksempel: «Sandvika heter det fordi det var en bukt med sandstrand der» eller «Bergheim ligger ved foten av et fjell, noe som passer med at berg betyr fjell og heim betyr hjem.»',
          },
        ],
        hints: ['Bruk kart over nærområdet ditt og se etter gjenkjennelige endelser', 'Du kan også søke på nett etter stedsnavn med norrønt opphav'],
        solution: 'En god besvarelse identifiserer tre stedsnavn med norrøne endelser, forklarer hva endelsene betyr, og kobler navnene til landskapet.',
        allowsUpload: true,
        isInvestigation: true,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'norsk-10-7-1-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-1-ex-5',
        number: '7.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor har islandsk bevart mer av det norrøne språket enn norsk?',
        options: [
          {
            id: 'a',
            text: 'Fordi islendingene bestemte seg for å aldri endre språket sitt',
            isCorrect: false,
            feedback: 'Feil. Ingen kan «bestemme» at et språk ikke skal endre seg. Islandsk har også endret seg, men mindre enn norsk.',
          },
          {
            id: 'b',
            text: 'Fordi Island hadde lite kontakt med andre språk og ingen union med Danmark',
            isCorrect: false,
            feedback: 'Delvis riktig om språkkontakt, men Island var også under dansk styre. Hovedårsaken er den geografiske isolasjonen som begrenset språkkontakt.',
          },
          {
            id: 'c',
            text: 'Fordi Islands geografiske isolasjon begrenset kontakten med andre språk, og islendingene har bevisst bevart språket',
            isCorrect: true,
            feedback: 'Riktig! Islands isolasjon reduserte påvirkning utenfra, og islendingene har i tillegg en sterk tradisjon for å lage nye islandske ord i stedet for å låne fra andre språk.',
          },
          {
            id: 'd',
            text: 'Fordi islandsk egentlig ikke ligner på norrønt — det er en myte',
            isCorrect: false,
            feedback: 'Feil. Islandsk ligner virkelig mye på norrønt. Islendinger kan faktisk lese norrøne sagaer med relativt god forståelse.',
          },
        ],
        solution: 'Alternativ C er riktig. Islands geografiske isolasjon og bevisst språkpolitikk har bevart mange norrøne trekk.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-7-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelpunkter
- **Norrønt** ble snakket i hele Norden fra ca. 700 til ca. 1350 og er stamfaren til alle moderne nordiske språk
- **Runene** var Nordens eldste skriftsystem, med 24 tegn (eldre futhark) og 16 tegn (yngre futhark)
- Norrønt hadde et rikt **kasussystem** med fire kasus, mens moderne norsk nesten bare bruker ordstilling
- **Lydendringer** som monoftongering og bortfall av spesialbokstaver (þ, ð) forvandlet språket
- **Svartedauden** (1349) var et vendepunkt — mange skrivekyndige døde, og den norske skrifttradisjonen kollapset
- Norsk språkhistorie deles inn i urnordisk, norrønt, mellomnorsk og moderne norsk
- **Stedsnavn** og **lånord** viser at norrønt lever videre i dag

### Viktige sammenhenger
- Språkendring skjer gradvis og skyldes kontakt mellom folk, naturlige lydendringer og historiske hendelser
- Islandsk har bevart flest norrøne trekk på grunn av geografisk isolasjon
- Det norske språket har en ubrutt linje fra vikingtiden til i dag`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-7-1-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-1-ex-6',
        number: '7.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Fra norrønt til norsk.

Skriv en tekst (200–300 ord) der du forklarer hvordan det norske språket har endret seg fra norrønt til moderne norsk. Du skal:

a) Nevne minst to viktige lydendringer eller grammatiske forenklinger
b) Forklare hvorfor disse endringene skjedde
c) Gi minst ett konkret eksempel med et norrønt ord og dets moderne form
d) Forklare hvilken rolle svartedauden spilte i norsk språkhistorie`,
        hints: [
          'Bruk eksemplene fra kapittelet som utgangspunkt',
          'Husk å forklare årsaker, ikke bare beskrive endringer',
          'Koble endringene til historiske hendelser',
        ],
        solution: 'En god besvarelse viser forståelse for de viktigste endringene (kasustap, lydendringer), forklarer årsakene (språkkontakt, svartedauden), bruker konkrete eksempler og viser historisk sammenheng.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-7-1-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-1-ex-7',
        number: '7.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Tenk deg at du er en munk i et norsk kloster rundt år 1100. Du har lært deg å skrive med det latinske alfabetet, men folk rundt deg bruker fremdeles runer.

Skriv et kort dagbokinnlegg (150–200 ord) der du beskriver utfordringene med å innføre et nytt skriftsystem. Hvorfor er det vanskelig å få folk til å bruke det latinske alfabetet? Hva er fordelene med det nye systemet?`,
        hints: [
          'Tenk på at mange ikke kan lese — verken runer eller latin',
          'Hva er forskjellen mellom å risse runer i tre og å skrive med blekk på pergament?',
        ],
        solution: 'En god besvarelse viser innlevelse i tidsperioden og forståelse for overgangen mellom skriftsystemer. Eleven bør nevne utfordringer (folk er vant til runer, pergament er dyrt, få kan lese) og fordeler (latinske bokstaver kan skrive flere lyder, passer bedre til lengre tekster, kobler Norge til europeisk lærdom).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Norrønt', definition: 'Fellesbetegnelse på de nordiske språkene fra ca. 700 til ca. 1350, snakket i hele Norden under vikingtiden.' },
    { term: 'Futhark', definition: 'Runealfabetet, oppkalt etter de seks første runene (f, u, þ, a, r, k).' },
    { term: 'Kasus', definition: 'Bøyningsformer av substantiver som viser ordets funksjon i setningen (subjekt, objekt osv.).' },
    { term: 'Svartedauden', definition: 'Pestepidemi i 1349 som drepte opp mot 60 % av Norges befolkning og ødela norsk skrifttradisjon.' },
    { term: 'Mellomnorsk', definition: 'Overgangsperiode i norsk språkhistorie (ca. 1350–1525) der kasusendelsene forsvant og dansk innflytelse økte.' },
    { term: 'Urnordisk', definition: 'Det eldste stadiet av nordiske språk (ca. 200–700), kjent fra tidlige runeinnskrifter.' },
  ],
};

// ============================================================================
// KAPITTEL 7.2: Dansketiden og språkforandring
// LK20: Forklare viktige hendelser i norsk språkhistorie
// ============================================================================

export const CHAPTER_NORSK_10_7_2: TextbookChapter = {
  id: 'norsk-10-7-2',
  courseId: 'norsk-10',
  chapterNumber: '7.2',
  title: 'Dansketiden og språkforandring',
  description: 'Lær om hvordan 400 år i union med Danmark påvirket det norske språket, hvordan dansk ble skriftspråket i Norge, og hvorfor norske dialekter likevel overlevde.',
  estimatedMinutes: 70,
  competenceGoals: [
    'forklare viktige hendelser i norsk språkhistorie',
    'gjøre rede for hvordan det danske skriftspråket ble innført i Norge',
    'reflektere over forholdet mellom skriftspråk og talespråk i dansketiden',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-7-2-intro',
      type: 'text',
      content: `## Dansketiden: Da Norge mistet sitt eget skriftspråk

Forestill deg at du er elev i Norge på 1600-tallet. Du snakker norsk dialekt hjemme med familien din. Men på skolen må du lese og skrive på **dansk** — et språk som høres annerledes ut enn det du snakker. Læreren din snakker kanskje til og med dansk. Bøkene dine er trykt i København. Bibelen du leser i kirken er på dansk. Lovene du skal følge er skrevet på dansk.

Slik var virkeligheten for nordmenn i over 400 år. Fra 1380 til 1814 var Norge i union med Danmark, og dansk ble det eneste skriftspråket. Det norske språket som hadde blitt brukt i sagaer, lover og brev i middelalderen, forsvant nesten helt som skriftspråk.

Men — og dette er det fascinerende — det norske **talespråket** døde aldri. Norske bønder, fiskere og håndverkere fortsatte å snakke sine dialekter, generasjon etter generasjon. Dialektene levde videre selv om skriftspråket var dansk. Denne splittelsen mellom tale og skrift fikk enorme konsekvenser som vi lever med den dag i dag.

I dette kapittelet skal du lære:
- Hvorfor Norge havnet i union med Danmark
- Hvordan dansk overtok som skriftspråk
- Hvorfor de norske dialektene overlevde
- Hvilke spor dansketiden har satt i moderne norsk`,
    },

    // ========== DEFINISJON: DANSKETIDEN ==========
    {
      id: 'norsk-10-7-2-def-1',
      type: 'definition',
      title: 'Dansketiden',
      content: `**Dansketiden** er perioden da Norge var i union med Danmark, fra 1380 til 1814 — altså over **430 år**.

**Viktige årstall:**
- **1349:** Svartedauden. Norge mister en enorm del av befolkningen, inkludert den skrivekyndige eliten.
- **1380:** Norge går inn i personalunion med Danmark (felles konge).
- **1397:** Kalmarunionen — Norge, Danmark og Sverige samlet under én krone.
- **1536:** Reformasjonen. Den danske kongen innfører luthersk kristendom. Norge blir formelt en del av det danske riket, og dansk blir offisielt administrasjonsspråk.
- **1660:** Eneveldet innføres. All makt samles hos den danske kongen i København.
- **1814:** Unionen oppløses. Norge får sin egen grunnlov.

**Konsekvenser for språket:**
- Dansk ble skriftspråk i kirke, skole, lov og administrasjon
- Norsk overlevde kun som talespråk (dialekter)
- Den norske overklassen begynte å snakke «dannet dagligtale» — norsk med sterk dansk påvirkning`,
    },

    // ========== EKSEMPEL: DANSK TEKST I NORGE ==========
    {
      id: 'norsk-10-7-2-example-1',
      type: 'example',
      title: 'Eksempel: Dansk skrift i Norge',
      problem: `Her er et utdrag fra en norsk lovtekst fra 1687, skrevet på dansk:

«Ingen Mand maa tage sig selv til Rette, men enhver skal søge sin Ret, hvor den findes at søge, og lade sig nøie med den Dom, som lovligen afsiges.»

Og her er et utdrag fra en norsk salme brukt i norske kirker på 1700-tallet:

«Den yndigste Rose er funden, blandt stiveste Torne oprunden, af Davids fuldædleste Rod.»

Sammenlign disse tekstene med moderne norsk. Hva er likt, og hva er forskjellig?`,
      solution: `**Likheter med moderne norsk (bokmål):**
- Grunnleggende setningsstruktur er gjenkjennelig
- Mange ord er de samme: «mand» (mann), «ret» (rett), «dom» (dom), «rose», «rod» (rot)
- Grammatikken er ikke veldig forskjellig fra moderne bokmål

**Forskjeller:**
- **Store bokstaver i substantiver** (typisk for dansk/tysk tradisjon): «Mand», «Rette», «Ret», «Dom», «Rose», «Torne»
- **Dansk stavemåte**: «afsiges» (avsies), «funden» (funnet), «oprunden» (opprunnhet), «stiveste» (stiveste)
- **Dobbel-a** i stedet for **å**: «maa» (må), «Mand» (mann)
- **Danske ordformer**: «nøie» (nøye), «fuldædleste» (fulleste/edleste)

**Viktig innsikt:**
Disse tekstene viser at skriftspråket i Norge var rent dansk. Det er derfor moderne bokmål ligner så mye på dansk — det er i bunn og grunn en fornorsket versjon av det danske skriftspråket som ble brukt i Norge i over 400 år.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'norsk-10-7-2-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-2-ex-1',
        number: '7.8',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor lenge varte unionen mellom Norge og Danmark?',
        options: [
          {
            id: 'a',
            text: 'Ca. 200 år (1614–1814)',
            isCorrect: false,
            feedback: 'Feil. Unionen varte mye lenger enn 200 år.',
          },
          {
            id: 'b',
            text: 'Ca. 430 år (1380–1814)',
            isCorrect: true,
            feedback: 'Riktig! Unionen varte fra 1380 til 1814, altså over 430 år.',
          },
          {
            id: 'c',
            text: 'Ca. 100 år (1714–1814)',
            isCorrect: false,
            feedback: 'Feil. Unionen begynte allerede i 1380, ikke på 1700-tallet.',
          },
          {
            id: 'd',
            text: 'Ca. 600 år (1200–1814)',
            isCorrect: false,
            feedback: 'Feil. Norge var selvstendig kongedømme på 1200-tallet. Unionen begynte i 1380.',
          },
        ],
        solution: 'Alternativ B er riktig. Unionen varte fra 1380 til 1814.',
      },
    },

    // ========== SKRIFTSPRÅK VS. TALESPRÅK ==========
    {
      id: 'norsk-10-7-2-skrift-tale',
      type: 'text',
      content: `## Skriftspråk vs. talespråk: To verdener

Det mest spennende med dansketiden er **kløften** mellom skrift og tale. Mens skriftspråket var dansk, fortsatte folk å snakke norsk. Men «norsk» var ikke ett enhetlig språk — det var hundrevis av lokale dialekter.

### Hvorfor overlevde dialektene?
- **Geografi:** Norges fjorder, fjell og daler isolerte lokalsamfunn fra hverandre. Folk i Setesdal hadde lite kontakt med folk i Troms, og begge hadde begrenset kontakt med København.
- **Sosial struktur:** De fleste nordmenn var bønder som verken leste eller skrev mye. Skriftspråket var noe for prester, embetsmenn og handelsmenn.
- **Ingen obligatorisk skolegang:** Det var ikke før 1739 at Norge fikk en form for allmenn skolegang, og selv da var den begrenset.

### «Dannet dagligtale» — et språk mellom to verdener
Den norske overklassen i byene utviklet etter hvert en spesiell måte å snakke på: de leste og skrev dansk, men snakket det med norsk uttale og intonasjon. Dette ble kalt **«dannet dagligtale»**.

Eksempler:
- **Dansk skrift:** «Jeg har ikke set ham i dag»
- **Dannet dagligtale (uttale):** «Jei har ikkje sett ham i dag» (norsk tonefall og r-lyd)
- **Norsk dialekt (Oslo-området):** «Æ har ikkje sett'n i dag»

Denne «dannede dagligtalen» ble senere grunnlaget for **bokmål** — det mest brukte skriftspråket i Norge i dag. Bokmål er altså ikke «ekte norsk» i den forstand at det vokste organisk frem fra norske dialekter — det er en fornorsket versjon av dansk.

### Reformasjonen (1536) — et vendepunkt
Da lutheranismen ble innført, fikk kirken en nøkkelrolle i å spre dansk skriftspråk. Bibelen, salmene og katekismen var på dansk, og alle nordmenn hørte dansk i kirken hver søndag. Skolen lærte barna å lese — på dansk. Slik ble dansk en del av den norske hverdagen.`,
    },

    // ========== DEFINISJON: DANNET DAGLIGTALE ==========
    {
      id: 'norsk-10-7-2-def-2',
      type: 'definition',
      title: 'Dannet dagligtale',
      content: `**Dannet dagligtale** var den muntlige språkformen som den norske overklassen og borgerskapet brukte, særlig i byene, fra 1700-tallet og utover.

**Kjennetegn:**
- Basert på **dansk skriftspråk**, men uttalt med **norsk tonefall, r-lyd og intonasjon**
- Brukte norske ord og uttrykk som ikke fantes i dansk
- Lå «mellom» rent dansk og norske dialekter

**Eksempel på forskjeller:**

| Trekk | Dansk | Dannet dagligtale | Norsk dialekt |
|-------|-------|------------------|---------------|
| R-lyd | Skarre-r | Rulle-r (i østnorsk) | Varierer |
| Tonefall | Flatt | Norsk «syngende» | Sterkt lokalt |
| «Ikke» | «Ikke» | «Ikke»/«ikkje» | «Ikkje»/«itte»/«ikkje» |
| Pronomen | «Jeg» | «Jeg» [jei] | «Æ»/«eg»/«jæ» |

**Hvorfor er dette viktig?**
Dannet dagligtale ble grunnlaget for det vi i dag kaller **bokmål**. Når noen sier at bokmål egentlig er «fornorsket dansk», er det nettopp dette de mener: bokmål stammer fra den danske skrifttradisjonen, tilpasset norsk uttale.`,
    },

    // ========== EKSEMPEL: DANSKE LÅNORD ==========
    {
      id: 'norsk-10-7-2-example-2',
      type: 'example',
      title: 'Eksempel: Danske og tyske lånord i norsk',
      problem: `I løpet av dansketiden strømmet det inn mange lånord i norsk — både fra dansk og fra tysk (via dansk). Hvilke av disse vanlige norske ordene tror du er lånord fra dansk/tysk, og hvilke er opprinnelig norske?

1. Snakke
2. Fjellet
3. Betale
4. Bukse
5. Hytte
6. Arbeid
7. Prate
8. Slakt`,
      solution: `**Lånord fra dansk/tysk (nedertysk):**
- **Snakke** — fra nedertysk «snacken» (det norske ordet var «tala» eller «mæla»)
- **Betale** — fra nedertysk «betalen»
- **Bukse** — fra nedertysk «bükse»
- **Arbeid** — fra tysk «Arbeit» (norrønt hadde «verk» og «strev»)
- **Slakt** — fra nedertysk «slachten»

**Opprinnelig norske ord:**
- **Fjellet** — fra norrønt «fjall»
- **Hytte** — fra norrønt «hytta»/«hytja»
- **Prate** — norsk dialektord

**Viktig innsikt:**
Mange av de vanligste ordene vi bruker i dag er faktisk lånord. Det betyr ikke at de er «dårlige» ord — de har vært en del av norsk i flere hundre år. Men det viser hvor stor innflytelse dansketiden og Hansahandelen hadde på det norske språket.

Den tyske (nedertyske) påvirkningen kom ikke bare gjennom dansk — den kom også gjennom Hansaforbundet og handelen i Bergen, der tyske kjøpmenn dominerte fra 1300-tallet.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'norsk-10-7-2-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-2-ex-2',
        number: '7.9',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva var «dannet dagligtale»?',
        options: [
          {
            id: 'a',
            text: 'En norsk dialekt fra Østlandet',
            isCorrect: false,
            feedback: 'Feil. Dannet dagligtale var ikke en dialekt, men en muntlig språkform basert på dansk skriftspråk med norsk uttale.',
          },
          {
            id: 'b',
            text: 'Dansk skriftspråk uttalt med norsk tonefall og uttale',
            isCorrect: true,
            feedback: 'Riktig! Dannet dagligtale var den norske overklassens muntlige språk — basert på dansk skrift, men med norsk uttale, tonefall og noen norske ord.',
          },
          {
            id: 'c',
            text: 'Et forsøk på å lage nynorsk allerede på 1600-tallet',
            isCorrect: false,
            feedback: 'Feil. Nynorsk ble først utviklet av Ivar Aasen på 1800-tallet. Dannet dagligtale var en uformell blanding av dansk og norsk.',
          },
          {
            id: 'd',
            text: 'Det offisielle språket brukt av den danske kongen',
            isCorrect: false,
            feedback: 'Feil. Kongen snakket dansk. Dannet dagligtale var den norske overklassens tilpasning av dansk til norsk uttale.',
          },
        ],
        solution: 'Alternativ B er riktig. Dannet dagligtale var dansk skrift uttalt med norsk tonefall.',
      },
    },

    // ========== NORSK UNDER PRESS ==========
    {
      id: 'norsk-10-7-2-under-press',
      type: 'text',
      content: `## Språket under press — men aldri borte

Selv om dansk var enerådende som skriftspråk, skjedde det noe interessant med norsk i denne perioden. Norske dialekter utviklet seg **uavhengig** av skriftspråket. Faktisk utviklet dialektene i Norge seg mer enn islandsk gjorde i samme periode, nettopp fordi de ikke hadde et skriftspråk som «holdt dem tilbake».

### Norske ordkunstnere i dansketiden
Noen norskfødte forfattere skrev på dansk, men med norske temaer og noen ganger norske ord:
- **Ludvig Holberg** (1684–1754): Født i Bergen, skrev på dansk, men brukte norske uttrykk. Regnes som grunnleggeren av dansk-norsk litteratur.
- **Petter Dass** (1647–1707): Nordnorsk prest som skrev diktet «Nordlands Trompet» på dansk, men med norske stedsnavn og naturbeskrivelser.

### Hva tok Norge med seg fra dansketiden?
- Et stort antall **lånord** fra dansk og tysk
- Et skriftspråk basert på dansk (som senere ble til bokmål)
- En **kløft mellom skrift og tale** som preget språkdebatten i flere hundre år
- En sterk **dialekttradisjon** som overlevde nettopp fordi den var muntlig
- **Bevissthet om språk som identitet** — noe som ble avgjørende for språkstriden på 1800-tallet

### Arven fra dansketiden
Dansketiden er ikke bare en historie om tap. Den er også en påminnelse om at talespråket er utrolig motstandsdyktig. Selv etter 430 år med dansk skriftspråk, snakket nordmenn fremdeles sine egne dialekter. Da unionen opphørte i 1814, hadde Norge et rikt dialektmangfold som ble selve grunnlaget for nynorsk.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'norsk-10-7-2-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-2-ex-3',
        number: '7.10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar med egne ord hvorfor norske dialekter overlevde dansketiden, til tross for at skriftspråket var dansk i over 400 år. Bruk minst to grunner.',
        hints: [
          'Tenk på Norges geografi — fjorder, fjell og daler',
          'Hvor mange nordmenn kunne egentlig lese og skrive?',
        ],
        solution: 'Dialektene overlevde fordi: 1) Norges geografi (fjorder, fjell, daler) isolerte lokalsamfunn fra hverandre og fra byene der dansk ble snakket. 2) De fleste nordmenn var bønder som verken leste eller skrev mye — skriftspråket var noe for den lille overklassen. 3) Det fantes ingen obligatorisk skolegang som tvang folk til å lære dansk. 4) Talespråk er motstandsdyktig mot press utenfra — det overføres muntlig fra foreldre til barn uavhengig av skriftspråket.',
        allowsUpload: true,
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'norsk-10-7-2-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-2-ex-4',
        number: '7.11',
        type: 'classic',
        difficulty: 'medium',
        task: `Se på disse setningene og avgjør om de er på moderne dansk, bokmål eller nynorsk:

a) «Jeg har aldrig set så mange mennesker.»
b) «Eg har aldri sett so mange menneske.»
c) «Jeg har aldri sett så mange mennesker.»`,
        subTasks: [
          {
            label: 'a',
            task: '«Jeg har aldrig set så mange mennesker.»',
            solution: 'Dansk. Kjennetegn: «aldrig» (ikke «aldri»), «set» (ikke «sett»).',
            multipleChoiceOptions: ['Dansk', 'Bokmål', 'Nynorsk'],
          },
          {
            label: 'b',
            task: '«Eg har aldri sett so mange menneske.»',
            solution: 'Nynorsk. Kjennetegn: «Eg» (ikke «Jeg»), «so» (ikke «så»), «menneske» (ikke «mennesker»).',
            multipleChoiceOptions: ['Nynorsk', 'Dansk', 'Bokmål'],
          },
          {
            label: 'c',
            task: '«Jeg har aldri sett så mange mennesker.»',
            solution: 'Bokmål. Kjennetegn: «Jeg» (som dansk), men «aldri» og «sett» (norsk form). Bokmål ligger mellom dansk og nynorsk.',
            multipleChoiceOptions: ['Bokmål', 'Dansk', 'Nynorsk'],
          },
        ],
        solution: 'a) Dansk, b) Nynorsk, c) Bokmål. Legg merke til at bokmål og dansk er svært like — det viser den historiske forbindelsen.',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'norsk-10-7-2-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-2-ex-5',
        number: '7.12',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken hendelse i 1536 var spesielt viktig for at dansk ble enerådende som skriftspråk i Norge?',
        options: [
          {
            id: 'a',
            text: 'Svartedauden rammet Norge',
            isCorrect: false,
            feedback: 'Feil. Svartedauden rammet Norge i 1349, ikke 1536. Men svartedauden la grunnlaget for det som skjedde senere.',
          },
          {
            id: 'b',
            text: 'Reformasjonen — innføringen av luthersk kristendom',
            isCorrect: true,
            feedback: 'Riktig! Reformasjonen i 1536 førte til at dansk Bibel, salmer og katekisme ble brukt i alle norske kirker. Kirken ble det viktigste verktøyet for å spre dansk skriftspråk.',
          },
          {
            id: 'c',
            text: 'Norge ble en selvstendig nasjon',
            isCorrect: false,
            feedback: 'Feil. I 1536 skjedde det stikk motsatte: Norge ble formelt underlagt Danmark som en del av det danske riket.',
          },
          {
            id: 'd',
            text: 'Ivar Aasen begynte arbeidet med nynorsk',
            isCorrect: false,
            feedback: 'Feil. Ivar Aasen levde på 1800-tallet, ikke på 1500-tallet.',
          },
        ],
        solution: 'Alternativ B er riktig. Reformasjonen i 1536 gjorde kirken til et redskap for å spre dansk skriftspråk.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-7-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelpunkter
- **Dansketiden** varte fra 1380 til 1814 — over 430 år med felles konge
- Dansk ble Norges eneste **skriftspråk** i kirke, skole, lov og administrasjon
- **Reformasjonen** (1536) var avgjørende for å spre dansk gjennom kirken
- Norske **dialekter** overlevde fordi folk fortsatte å snakke norsk, selv om de leste og skrev på dansk
- Norges **geografi** beskyttet dialektene ved å isolere lokalsamfunn fra hverandre
- **Dannet dagligtale** — dansk uttalt med norsk tonefall — ble grunnlaget for bokmål
- Mange **lånord** fra dansk og tysk (nedertysk) kom inn i norsk i denne perioden

### Viktige sammenhenger
- Kløften mellom skrift og tale som oppsto i dansketiden er selve grunnlaget for den norske språkstriden
- Bokmål er en fornorsket versjon av dansk — det er direkte arv fra dansketiden
- Dialektmangfoldet i Norge er et resultat av at talespråket levde videre uavhengig av skriftspråket`,
    },

    // ========== SAMLEOPPGAVE ==========
    {
      id: 'norsk-10-7-2-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-2-ex-6',
        number: '7.13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Dansketidens arv.

Skriv en tekst (200–300 ord) der du drøfter denne påstanden:

«Dansketiden var en katastrofe for det norske språket.»

Er du enig, delvis enig eller uenig? Begrunn svaret ditt ved å:
a) Forklare hva Norge mistet i dansketiden (skriftspråk, ordforråd)
b) Forklare hva Norge beholdt (dialekter, talespråk)
c) Vurdere om arven fra dansketiden er mest positiv eller negativ for norsk i dag`,
        hints: [
          'En god drøfting ser argumenter for og imot',
          'Husk at bokmål, som er Norges mest brukte skriftspråk, er en arv fra dansketiden',
          'Tenk på dialektene som en «motstandsbevegelse»',
        ],
        solution: 'En god drøfting veier argumentene: På den ene siden mistet Norge sitt eget skriftspråk, og norsk fikk store mengder lånord. På den andre siden overlevde dialektene, og kløften mellom skrift og tale ga grobunn for språkstriden og det rike språkmangfoldet vi har i dag. Bokmål — vår mest brukte skriftform — er en direkte arv fra dansketiden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Dansketiden', definition: 'Perioden 1380–1814 da Norge var i union med Danmark og dansk var skriftspråket.' },
    { term: 'Reformasjonen', definition: 'Innføringen av luthersk kristendom i 1536, som spredte dansk skriftspråk gjennom kirken.' },
    { term: 'Dannet dagligtale', definition: 'Den norske overklassens muntlige språk — dansk skrift uttalt med norsk tonefall og uttale.' },
    { term: 'Lånord', definition: 'Ord som er hentet inn fra andre språk, som «snakke» (fra nedertysk) og «betale» (fra nedertysk).' },
    { term: 'Skriftspråk vs. talespråk', definition: 'I dansketiden var skriftspråket dansk, mens talespråket var norske dialekter — to helt ulike systemer.' },
    { term: 'Personalunion', definition: 'Når to land deler samme konge, men formelt er selvstendige (slik Norge og Danmark var fra 1380).' },
  ],
};

// ============================================================================
// KAPITTEL 7.3: Språkstriden — Bokmål og nynorsk
// LK20: Gjøre rede for bakgrunnen for de to norske skriftspråkene
// ============================================================================

export const CHAPTER_NORSK_10_7_3: TextbookChapter = {
  id: 'norsk-10-7-3',
  courseId: 'norsk-10',
  chapterNumber: '7.3',
  title: 'Språkstriden — Bokmål og nynorsk',
  description: 'Lær om den norske språkstriden, hvorfor vi har to skriftspråk, hvem Ivar Aasen og Knud Knudsen var, og hva som skiller bokmål fra nynorsk.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for bakgrunnen for de to norske skriftspråkene',
    'reflektere over forholdet mellom bokmål og nynorsk',
    'bruke kunnskap om språkhistorien til å forstå dagens språkdebatt',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-7-3-intro',
      type: 'text',
      content: `## Språkstriden: Hvorfor har Norge to skriftspråk?

Visste du at Norge er et av svært få land i verden med **to offisielle skriftspråk**? Bokmål og nynorsk er begge norske, begge offisielle, og begge brukes i skolen, i det offentlige og i mediene. Men hvorfor?

Svaret ligger i historien du lærte om i forrige kapittel. Da unionen med Danmark opphørte i 1814, sto nordmennene overfor et vanskelig spørsmål: **Hvilket skriftspråk skal vi bruke?**

Vi snakket norsk, men vi skrev dansk. To grupper ga helt ulike svar:

- **Den ene gruppen** sa: «Vi fornorsker det danske skriftspråket gradvis. Vi endrer stavemåten så den passer bedre til norsk uttale.» Lederen for denne retningen var **Knud Knudsen**. Resultatet ble det vi i dag kaller **bokmål**.

- **Den andre gruppen** sa: «Vi lager et helt nytt skriftspråk basert på de norske dialektene — det ekte norske språket som har overlevd dansketiden.» Lederen for denne retningen var **Ivar Aasen**. Resultatet ble det vi i dag kaller **nynorsk**.

Denne uenigheten — språkstriden — har preget norsk kultur og politikk i over 150 år. Den handler ikke bare om grammatikk og stavemåter. Den handler om identitet: Hva betyr det å være norsk? Hvilket språk er «ekte» norsk?

I dette kapittelet skal du lære:
- Hvem Ivar Aasen og Knud Knudsen var
- Hvordan nynorsk og bokmål ble til
- Hva som skiller de to skriftspråkene
- Hvordan språkstriden utviklet seg og hvor vi står i dag`,
    },

    // ========== DEFINISJON: BOKMÅL OG NYNORSK ==========
    {
      id: 'norsk-10-7-3-def-1',
      type: 'definition',
      title: 'Bokmål og nynorsk',
      content: `**Bokmål** og **nynorsk** er Norges to offisielle skriftspråk (målformer). Begge er norske, men de har ulik opprinnelse:

**Bokmål** (tidligere «riksmål»/«dansk-norsk»):
- Utviklet fra det danske skriftspråket som ble brukt i Norge i dansketiden
- Gradvis fornorsket ved å endre stavemåter og ta inn norske ord
- Basert på «dannet dagligtale» — den norske overklassens talemål
- Brukes av ca. **85–90 %** av befolkningen som hovedmål
- Knud Knudsen (1812–1895) regnes som «bokmålets far»

**Nynorsk** (tidligere «landsmål»):
- Laget av Ivar Aasen basert på norske dialekter
- Skulle være et «ekte» norsk skriftspråk, fritt fra dansk påvirkning
- Bygger på grammatikk og ordforråd fra dialektene, særlig i Vestlands- og bygde-Norge
- Brukes av ca. **10–15 %** av befolkningen som hovedmål
- Ivar Aasen (1813–1896) regnes som «nynorskens far»

**Begge målformene er likeverdige:** Alle offentlige instanser skal bruke begge, og alle elever lærer å lese og skrive på begge målformer i skolen.`,
    },

    // ========== IVAR AASEN ==========
    {
      id: 'norsk-10-7-3-aasen',
      type: 'text',
      content: `## Ivar Aasen: Mannen som vandret gjennom Norge

Ivar Aasen (1813–1896) er en av de mest bemerkelsesverdigte personene i norsk kulturhistorie. Han var en bondegutt fra Sunnmøre med lite formell utdanning, men med et ekstraordinært språkøre og en jernvilje.

### Bakgrunn
Aasen vokste opp i en tid da norsk nasjonal identitet blomstret. Norge hadde fått sin grunnlov i 1814, men manglet et eget skriftspråk. Aasen mente at det danske skriftspråket var fremmed for vanlige nordmenn, og at Norge trengte et skriftspråk bygget på folkets eget mål.

### Dialektreisene
I perioden 1842–1846 reiste Aasen rundt i hele Norge og dokumenterte dialektene. Han gikk til fots fra bygd til bygd, lyttet til folk snakke, noterte ordformer, grammatikk og uttale. Resultatet var to banebrytende verk:
- **«Det norske Folkesprogs Grammatik»** (1848): En komplett grammatikk over de norske dialektene
- **«Ordbog over det norske Folkesprog»** (1850): En ordbok med tusenvis av norske ord

### Landsmålet
Basert på dialektstudiene sine skapte Aasen et nytt skriftspråk: **landsmål** (det som senere ble nynorsk). Aasen valgte ikke bare én dialekt — han laget en slags sammenstilling av de trekkene som var mest utbredt i de norske dialektene, med vekt på de formene som best bevarte det norrøne.

### Aasens prinsipp
Aasen mente at et skriftspråk måtte bygge på folkets talespråk for å være et ekte nasjonalt språk. Han sammenlignet Norge med andre land som hadde bygget skriftspråkene sine på folkelig tale — som Italia, der Dantes toskanske dialekt ble grunnlaget for det italienske skriftspråket.

### Kritikk
Aasens landsmål ble kritisert for å:
- Være «kunstig» — det var ingen som snakket nøyaktig slik landsmålet ble skrevet
- Legge for stor vekt på vestlandske og bygdedialekter
- Være vanskelig å lære for folk i byene
- Se bakover mot norrønt i stedet for fremover

Men mange mente også at landsmålet var den mest demokratiske løsningen: det bygde på språket til den store majoriteten av nordmenn — bøndene.`,
    },

    // ========== KNUD KNUDSEN ==========
    {
      id: 'norsk-10-7-3-knudsen',
      type: 'text',
      content: `## Knud Knudsen: Den gradvise veien

Knud Knudsen (1812–1895) var en Tvedestrand-gutt som ble en av Norges viktigste språkpolitikere. Han var like opptatt av norsk identitet som Ivar Aasen, men hans løsning var helt annerledes.

### Knudsens strategi
I stedet for å lage et nytt skriftspråk fra bunnen av, ville Knudsen **fornorske det eksisterende danske skriftspråket gradvis**. Han foreslo endringer som:
- Erstatte danske skrivemåter med norske: «have» → «ha», «give» → «gi», «skrive» → «skrive» (men uttalt norsk)
- Innføre norsk uttale som norm: «brog» → «bru», «bog» → «bok»
- Forenkle stavemåten for å bringe skriftspråket nærmere norsk tale

### «Den dannede dagligtale» som norm
Knudsen tok utgangspunkt i «den dannede dagligtale» — slik den norske overklassen faktisk snakket. Han mente at dette talespråket allerede var norsk nok, og at det bare trengte å gjenspeiles bedre i skriftspråket.

### Knudsens bidrag
Knudsen kalles «bokmålets far» fordi hans ideer la grunnlaget for de rettskrivingsreformene som gradvis forvandlet det danske skriftspråket i Norge til det vi i dag kaller bokmål. Viktige endringer inkluderte:
- **Harde konsonanter:** Danske «brog», «tog», «bog» → norske «bru», «tok», «bok»
- **Norske diftonger (valgfritt):** «sten» → «stein», «ben» → «bein»
- **Norske ordformer:** «have» → «ha», «give» → «gi»

### Forskjellen mellom Aasen og Knudsen

| Trekk | Ivar Aasen (landsmål/nynorsk) | Knud Knudsen (bokmål) |
|-------|-------------------------------|----------------------|
| Utgangspunkt | Norske dialekter | Dansk skriftspråk |
| Metode | Lage nytt språk | Fornorske eksisterende |
| Grunnlag | Folkets talespråk (bygdene) | Dannet dagligtale (byene) |
| Ideal | «Ekte norsk» uten dansk | Gradvis mer norsk |
| Støtte | Bygde-Norge, nasjonalromantikere | By-Norge, det etablerte |`,
    },

    // ========== EKSEMPEL: SAMMENLIGNING ==========
    {
      id: 'norsk-10-7-3-example-1',
      type: 'example',
      title: 'Eksempel: Samme tekst på bokmål og nynorsk',
      problem: `Se på denne teksten skrevet på begge målformer. Hvilke forskjeller legger du merke til?

**Bokmål:**
«Alle mennesker er født frie og med samme menneskeverd og menneskerettigheter. De er utstyrt med fornuft og samvittighet og bør handle overfor hverandre i brorskapets ånd.»

**Nynorsk:**
«Alle menneske er fødde til fridom og med same menneskeverd og menneskerettar. Dei er utstyrte med fornuft og samvit og bør handle mot kvarandre i brorskapsånd.»

(Artikkel 1 i FNs menneskerettighetserklæring)

Finn minst fem forskjeller mellom de to versjonene.`,
      solution: `**Forskjeller:**

1. **Flertallsendelse:** «mennesker» (bokmål) → «menneske» (nynorsk). Nynorsk bruker ofte kortere flertallsformer.

2. **Partisipp:** «født» (bokmål) → «fødde» (nynorsk). Nynorsk har andre bøyningsformer for verb.

3. **Adjektiv:** «frie» (bokmål) → «fridom» (nynorsk). Nynorsk bruker «fridom» (ordsammensetning) i stedet for «frie».

4. **Pronomen:** «De» (bokmål) → «Dei» (nynorsk). Nynorsk har egne pronomensformer basert på dialektene.

5. **Resiproke pronomen:** «hverandre» (bokmål) → «kvarandre» (nynorsk).

6. **Substantiv:** «samvittighet» (bokmål) → «samvit» (nynorsk). Nynorsk har ofte kortere ordformer.

7. **Substantiv:** «menneskerettigheter» (bokmål) → «menneskerettar» (nynorsk). Ulike flertallsendelser.

8. **Sammensetning:** «brorskapets ånd» (bokmål) → «brorskapsånd» (nynorsk). Nynorsk foretrekker sammensetning fremfor genitiv med «-s».

**Mønster:** Nynorsk har ofte kortere ordformer, egne pronomen og bøyningsformer som er nærmere de norske dialektene. Bokmål har former som ligger nærmere dansk.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'norsk-10-7-3-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-3-ex-1',
        number: '7.14',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvem laget det skriftspråket som ble til nynorsk?',
        options: [
          {
            id: 'a',
            text: 'Knud Knudsen',
            isCorrect: false,
            feedback: 'Feil. Knud Knudsen arbeidet med å fornorske det danske skriftspråket — det som ble bokmål.',
          },
          {
            id: 'b',
            text: 'Henrik Ibsen',
            isCorrect: false,
            feedback: 'Feil. Henrik Ibsen var dramatiker, ikke språkforsker. Han skrev på riksmål (en forløper til bokmål).',
          },
          {
            id: 'c',
            text: 'Ivar Aasen',
            isCorrect: true,
            feedback: 'Riktig! Ivar Aasen reiste rundt i Norge, studerte dialektene og skapte landsmål — det som senere ble nynorsk.',
          },
          {
            id: 'd',
            text: 'Bjørnstjerne Bjørnson',
            isCorrect: false,
            feedback: 'Feil. Bjørnson var forfatter og skrev på riksmål, ikke landsmål.',
          },
        ],
        solution: 'Alternativ C er riktig. Ivar Aasen skapte landsmål (nynorsk) basert på norske dialekter.',
      },
    },

    // ========== SPRÅKREFORMENE ==========
    {
      id: 'norsk-10-7-3-reformer',
      type: 'text',
      content: `## Språkreformene: 100 år med endringer

Etter at Aasen og Knudsen hadde lagt grunnlaget, fulgte en lang rekke **rettskrivingsreformer** som gradvis endret begge skriftspråkene. Målet var — tro det eller ei — å bringe bokmål og nynorsk **nærmere hverandre**, slik at de en dag kunne smelte sammen til ett felles norsk skriftspråk. Dette prosjektet ble kalt **samnorsk**.

### Viktige reformer

**1907-reformen (riksmål/bokmål):**
Innførte obligatoriske norske former: «have» → «ha», «give» → «gi», «skrive» → «skrive». Harde konsonanter ble offisielle: «Gade» → «gate», «Brog» → «bru».

**1917-reformen:**
Gikk enda lenger i fornorsking. Mange «folkelige» former ble tillatt: «bein» for «ben», «stein» for «sten». Også nynorsken ble reformert.

**1938-reformen (den mest radikale):**
Svært kontroversielle endringer i bokmål. Mange tradisjonelle dansk-norske former ble fjernet og erstattet med «radikale» former: «nu» → «nå», «efter» → «etter», «sprog» → «språk». Mange a-endinger ble innført: «boka» for «boken», «gata» for «gaten».

**Reaksjoner på 1938-reformen:**
1938-reformen utløste «foreldreaksjonen» der foreldre i Oslo-området protesterte voldsomt mot de nye formene. De mente at barna ble tvunget til å skrive et språk som ikke var naturlig for dem. Protestene var så sterke at noen av endringene ble reversert.

**2005 og 2012 (moderne reformer):**
De nyeste reformene har gitt opp tanken om samnorsk og i stedet gjort begge målformene mer **fleksible**. Mange valgfrie former er innført, slik at skriverne selv kan velge mellom ulike varianter.

### Samnorsk — et mislykket prosjekt
Ideen om å slå sammen bokmål og nynorsk til ett språk — **samnorsk** — ble offisielt forlatt i 2002. Det viste seg at nordmenn var for sterkt knyttet til sine respektive målformer til at en sammenslåing var mulig. I stedet lever begge skriftspråkene videre side om side.`,
    },

    // ========== DEFINISJON: SAMNORSK ==========
    {
      id: 'norsk-10-7-3-def-2',
      type: 'definition',
      title: 'Samnorsk',
      content: `**Samnorsk** var det språkpolitiske prosjektet om å slå sammen bokmål og nynorsk til ett felles norsk skriftspråk.

**Ideen:** Ved å gjøre bokmål mer folkelig og nynorsk mer moderat, ville de to målformene gradvis nærme seg hverandre inntil de ble ett.

**Virkemiddel:** Rettskrivingsreformer som fjernet «ekstreme» former i begge retninger og innførte fellesformer.

**Resultat:** Prosjektet mislyktes. Både bokmålstilhengere og nynorsktilhengere protesterte mot endringer i «sitt» språk. I 2002 ble samnorsk-politikken offisielt forlatt av Stortinget.

**Lærdommen:** Du kan ikke tvinge folk til å endre språk — språk er dypt knyttet til identitet. Nordmenn identifiserer seg med sin målform, og å true den oppleves som et angrep på hvem de er.`,
    },

    // ========== EKSEMPEL: REFORMENES EFFEKT ==========
    {
      id: 'norsk-10-7-3-example-2',
      type: 'example',
      title: 'Eksempel: Samme setning gjennom reformene',
      problem: `Se hvordan en enkel setning har endret seg gjennom de ulike rettskrivingsreformene i bokmål:

**Dansk (før 1907):** «Jeg har ikke seet ham paa Gaden i Dag.»
**1907:** «Jeg har ikke set ham paa Gaten i Dag.»
**1917:** «Jeg har ikke sett ham på gaten i dag.»
**1938 (radikal):** «Jeg har ikke sett ham på gata i dag.» / «Jei har ikkje sett'n på gata i dag.»
**Moderne bokmål:** «Jeg har ikke sett ham på gata/gaten i dag.»

Hva legger du merke til? Hvilke endringer har skjedd?`,
      solution: `**Steg for steg:**

1. **1907:** «Gade» → «Gate» (hard konsonant). «Set» → «set» (liten bokstav). Men mye er fremdeles dansk.

2. **1917:** «paa» → «på» (norsk skrivemåte). «Dag» → «dag» (liten bokstav i substantiver). «set» → «sett» (dobbel t, norsk uttale).

3. **1938:** «gaten» → «gata» (a-ending, folkelig form). Radikale former som «jei» og «ikkje» ble tillatt (men ikke obligatoriske).

4. **Moderne bokmål:** Valgfrihet — du kan skrive «gata» ELLER «gaten», «ikke» ELLER «ikkje». Begge er lov.

**Mønsteret:**
Skriftspråket har gradvis beveget seg bort fra dansk og mot norsk talespråk. Men prosessen har ikke vært lineær — noen endringer har blitt trukket tilbake etter protest. Det moderne bokmålet gir derfor stor valgfrihet mellom konservative og radikale former.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'norsk-10-7-3-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-3-ex-2',
        number: '7.15',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva var samnorsk?',
        options: [
          {
            id: 'a',
            text: 'Et nordisk fellesspråk for Norge, Sverige og Danmark',
            isCorrect: false,
            feedback: 'Feil. Samnorsk var et prosjekt for å slå sammen bokmål og nynorsk, ikke et nordisk fellesspråk.',
          },
          {
            id: 'b',
            text: 'Et prosjekt for å slå sammen bokmål og nynorsk til ett skriftspråk',
            isCorrect: true,
            feedback: 'Riktig! Samnorsk var ideen om å nærme bokmål og nynorsk til hverandre gjennom reformer, slik at de til slutt ble ett felles norsk skriftspråk. Prosjektet ble forlatt i 2002.',
          },
          {
            id: 'c',
            text: 'Et tredje skriftspråk som Stortinget innførte i 1938',
            isCorrect: false,
            feedback: 'Feil. Samnorsk var aldri et eget skriftspråk, men en politikk om å nærme de to eksisterende skriftspråkene til hverandre.',
          },
          {
            id: 'd',
            text: 'Et annet navn for moderne nynorsk',
            isCorrect: false,
            feedback: 'Feil. Samnorsk var verken bokmål eller nynorsk, men en idé om å slå dem sammen.',
          },
        ],
        solution: 'Alternativ B er riktig. Samnorsk var prosjektet om å slå sammen bokmål og nynorsk.',
      },
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'norsk-10-7-3-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-3-ex-3',
        number: '7.16',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign Ivar Aasens og Knud Knudsens syn på hva norsk skriftspråk burde være.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var Ivar Aasens utgangspunkt og metode?',
            solution: 'Aasen tok utgangspunkt i de norske dialektene. Han reiste rundt i Norge, dokumenterte dialektene, og skapte et helt nytt skriftspråk (landsmål/nynorsk) basert på de trekkene som var mest utbredt.',
          },
          {
            label: 'b',
            task: 'Hva var Knud Knudsens utgangspunkt og metode?',
            solution: 'Knudsen tok utgangspunkt i det eksisterende danske skriftspråket og ville fornorske det gradvis. Han baserte seg på «den dannede dagligtale» — slik den norske overklassen faktisk snakket — og foreslo endringer i stavemåte og ordformer.',
          },
          {
            label: 'c',
            task: 'Hvem av de to mener du hadde den beste løsningen? Begrunn svaret ditt.',
            solution: 'Her finnes det ikke ett riktig svar. En god besvarelse argumenterer for sitt standpunkt og bruker kunnskap fra kapittelet. For eksempel: Aasen var mer demokratisk (bygde på flertallet), men Knudsen var mer praktisk (lettere å innføre).',
          },
        ],
        solution: 'En god besvarelse viser forståelse for begge tilnærmingene og begrunner sitt eget standpunkt.',
        allowsUpload: true,
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'norsk-10-7-3-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-3-ex-4',
        number: '7.17',
        type: 'classic',
        difficulty: 'lett',
        task: `Hvilke av disse ordformene er bokmål (B), og hvilke er nynorsk (N)?

a) «Eg»
b) «Jeg»
c) «Ikkje»
d) «Menneskerettar»
e) «Menneskerettigheter»
f) «Kvarandre»`,
        subTasks: [
          {
            label: 'a',
            task: '«Eg»',
            solution: 'Nynorsk (N). «Eg» er nynorsk pronomen for «jeg».',
            multipleChoiceOptions: ['Nynorsk (N)', 'Bokmål (B)'],
          },
          {
            label: 'b',
            task: '«Jeg»',
            solution: 'Bokmål (B). «Jeg» er bokmålets pronomen.',
            multipleChoiceOptions: ['Bokmål (B)', 'Nynorsk (N)'],
          },
          {
            label: 'c',
            task: '«Ikkje»',
            solution: 'Nynorsk (N). «Ikkje» er nynorsk for «ikke».',
            multipleChoiceOptions: ['Nynorsk (N)', 'Bokmål (B)'],
          },
          {
            label: 'd',
            task: '«Menneskerettar»',
            solution: 'Nynorsk (N). «-rettar» er nynorsk flertallsform, bokmål bruker «-rettigheter».',
            multipleChoiceOptions: ['Nynorsk (N)', 'Bokmål (B)'],
          },
          {
            label: 'e',
            task: '«Menneskerettigheter»',
            solution: 'Bokmål (B). «-rettigheter» er bokmålets flertallsform.',
            multipleChoiceOptions: ['Bokmål (B)', 'Nynorsk (N)'],
          },
          {
            label: 'f',
            task: '«Kvarandre»',
            solution: 'Nynorsk (N). «Kvarandre» er nynorsk for «hverandre».',
            multipleChoiceOptions: ['Nynorsk (N)', 'Bokmål (B)'],
          },
        ],
        solution: 'a) N, b) B, c) N, d) N, e) B, f) N.',
      },
    },

    // ========== SPRÅKSTRIDEN I DAG ==========
    {
      id: 'norsk-10-7-3-idag',
      type: 'text',
      content: `## Språkstriden i dag: Hvor står vi?

Selv om de hete debattene fra 1900-tallet har kjølnet, lever spenningen mellom bokmål og nynorsk videre. Her er noen nøkkelfakta om situasjonen i dag:

### Statistikk
- Ca. **87 %** av norske elever har bokmål som hovedmål
- Ca. **13 %** har nynorsk
- Nynorskandelen har sunket jevnt de siste tiårene
- Nynorsk er sterkest i **Vestland, Rogaland, Møre og Romsdal** og indre Østland

### Sidemål
Alle norske elever skal lære å skrive på **begge** målformer. Den målformen du ikke har som hovedmål, er ditt **sidemål**. Det betyr at bokmålselever skal lære nynorsk, og nynorskelever skal lære bokmål.

Sidemålsundervisningen er kontroversiell. Noen mener den er viktig for å forstå norsk kultur og språkmangfold. Andre mener den er bortkastet tid og at valgfrihet burde gjelde.

### Språkloven (2022)
Norges nyeste språklov fra 2022 slår fast at:
- Bokmål og nynorsk er **likeverdige**
- Det offentlige har ansvar for å fremme nynorsk som det **minst brukte** skriftspråket
- Norsk tegnspråk er et offisielt språk
- Samiske språk skal beskyttes og fremmes

### Uenighet i dag
Språkdebatten lever videre, men handler nå om nye spørsmål:
- Bør sidemålsundervisningen være **obligatorisk**?
- Hvor mye nynorsk skal det være i **mediene** og **det offentlige**?
- Truer **engelsk** det norske språket mer enn bokmål truer nynorsk?
- Bør nynorsk få **ekstra beskyttelse** fordi det er det minst brukte skriftspråket?`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'norsk-10-7-3-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-3-ex-5',
        number: '7.18',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva sier den norske språkloven fra 2022 om bokmål og nynorsk?',
        options: [
          {
            id: 'a',
            text: 'Bokmål er det offisielle hovedspråket, nynorsk er valgfritt',
            isCorrect: false,
            feedback: 'Feil. Begge målformene er likeverdige ifølge språkloven.',
          },
          {
            id: 'b',
            text: 'Bokmål og nynorsk er likeverdige, og nynorsk skal fremmes som det minst brukte skriftspråket',
            isCorrect: true,
            feedback: 'Riktig! Språkloven slår fast at begge målformene er likeverdige, og at det offentlige har et ansvar for å fremme nynorsk.',
          },
          {
            id: 'c',
            text: 'Bokmål og nynorsk skal slås sammen til samnorsk innen 2030',
            isCorrect: false,
            feedback: 'Feil. Samnorsk-prosjektet ble forlatt allerede i 2002.',
          },
          {
            id: 'd',
            text: 'Nynorsk skal avskaffes innen 2050',
            isCorrect: false,
            feedback: 'Feil. Tvert imot — språkloven beskytter og fremmer nynorsk.',
          },
        ],
        solution: 'Alternativ B er riktig. Språkloven fra 2022 likestiller bokmål og nynorsk og gir nynorsk ekstra vern.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-7-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelpunkter
- Norge har to offisielle skriftspråk fordi det fantes to ulike svar på hva norsk skriftspråk burde være etter dansketiden
- **Ivar Aasen** skapte landsmål (nynorsk) basert på norske dialekter
- **Knud Knudsen** la grunnlaget for bokmål ved å fornorske det danske skriftspråket
- Rettskrivingsreformer har endret begge skriftspråkene gjennom over 100 år
- **Samnorsk**-prosjektet (å slå sammen bokmål og nynorsk) ble forlatt i 2002
- Bokmål brukes av ca. 87 % og nynorsk av ca. 13 % av elevene
- Språkloven fra 2022 likestiller bokmål og nynorsk og gir nynorsk ekstra vern

### Viktige sammenhenger
- Språkstriden er en direkte konsekvens av dansketiden — den oppsto fordi Norge mistet sitt eget skriftspråk
- Debatten handler om mer enn grammatikk: den handler om identitet, demokrati og hvem som definerer «norsk»
- Språkstriden er ikke over — den har bare endret karakter`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-7-3-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-3-ex-6',
        number: '7.19',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Språkstriden.

Skriv en tekst (200–300 ord) der du drøfter denne påstanden:

«Alle norske elever bør lære å skrive på begge målformer (bokmål og nynorsk).»

Er du enig, delvis enig eller uenig? Begrunn svaret ditt ved å bruke kunnskap fra kapittelet om:
a) Bakgrunnen for de to skriftspråkene
b) Argumenter for og imot sidemålsundervisning
c) Hva som skjer med nynorsk hvis sidemålet fjernes`,
        hints: [
          'Bruk språkhistorien som bakgrunn for drøftingen',
          'Prøv å se saken fra flere sider',
          'Husk å ta et tydelig standpunkt og begrunne det',
        ],
        solution: 'En god drøfting bruker kunnskap om språkhistorien, ser argumenter for og imot, og tar et begrunnet standpunkt. For: Viktig for å forstå norsk kultur og identitet, nynorsk trenger vern, demokratisk at alle skal kunne lese offentlige dokumenter. Mot: Mange opplever sidemål som tvang, tiden kunne brukes bedre, folk velger selv i praksis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-7-3-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-3-ex-7',
        number: '7.20',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Tenk deg at du lever i 1850. Du er norsk og brenner for norsk selvstendighet. Du leser om Ivar Aasens reiser rundt i Norge og hans arbeid med å samle dialektene.

Skriv et brev (150–250 ord) til en venn der du enten:
a) Forsvarer Aasens prosjekt — hvorfor Norge trenger et eget skriftspråk basert på folkemålet, ELLER
b) Argumenterer mot Aasens prosjekt — hvorfor det er bedre å fornorske det eksisterende skriftspråket`,
        hints: [
          'Skriv i rollen som en person fra 1850-tallet',
          'Bruk argumenter som passer til tiden',
          'Vis at du forstår begge sider av debatten',
        ],
        solution: 'En god besvarelse viser innlevelse i tidsperioden, bruker saklige argumenter og viser forståelse for den historiske konteksten. For Aasen: nasjonalt selvstyre krever nasjonalt språk, folket fortjener å bli hørt, dansk er et fremmedspråk. Mot Aasen: det er upraktisk, folk i byene snakker allerede en norsk form av dansk, det er bedre å endre gradvis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Bokmål', definition: 'Norsk skriftspråk utviklet fra det danske skriftspråket, gradvis fornorsket. Brukes av ca. 87 % av elevene.' },
    { term: 'Nynorsk', definition: 'Norsk skriftspråk skapt av Ivar Aasen basert på norske dialekter. Brukes av ca. 13 % av elevene.' },
    { term: 'Landsmål', definition: 'Det opprinnelige navnet på nynorsk, skapt av Ivar Aasen.' },
    { term: 'Samnorsk', definition: 'Mislykket prosjekt om å slå sammen bokmål og nynorsk til ett felles skriftspråk. Forlatt i 2002.' },
    { term: 'Sidemål', definition: 'Den målformen du ikke har som hovedmål. Alle elever lærer å skrive på begge målformer.' },
    { term: 'Rettskrivingsreform', definition: 'Offisiell endring av skriftspråkets regler for stavemåte, grammatikk og ordformer.' },
  ],
};

// ============================================================================
// KAPITTEL 7.4: Dialekter og sosiolekter
// LK20: Reflektere over dialektmangfoldet i Norge og bruke fagbegreper
// ============================================================================

export const CHAPTER_NORSK_10_7_4: TextbookChapter = {
  id: 'norsk-10-7-4',
  courseId: 'norsk-10',
  chapterNumber: '7.4',
  title: 'Dialekter og sosiolekter',
  description: 'Lær om norsk dialektmangfold, hva som kjennetegner ulike dialektgrupper, forskjellen mellom dialekt og sosiolekt, og hvorfor dialektene er under press.',
  estimatedMinutes: 70,
  competenceGoals: [
    'reflektere over dialektmangfoldet i Norge og gjøre rede for noen typiske dialekttrekk',
    'skille mellom dialekt, sosiolekt og standardtalemål',
    'reflektere over holdninger til ulike talemål og språklig mangfold',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-7-4-intro',
      type: 'text',
      content: `## Dialekter og sosiolekter: Språket som viser hvem du er

Du hører det med en gang. Noen sier «jæ», andre sier «eg», og atter andre sier «æ». Noen sier «ikke», andre sier «ikkje» eller «itte» eller «itj». Noen synger når de snakker, andre har en flatere melodi. Bare av å høre noen snakke noen få setninger, kan du ofte gjette hvor i Norge de kommer fra.

Norge er et av de landene i Europa med **størst dialektmangfold** i forhold til folketallet. Mens mange europeiske land har ett dominerende standardtalemål som de fleste bruker, har Norge hundrevis av ulike dialekter — og nordmenn er stolte av dem.

Men dialekter handler om mer enn geografi. Måten du snakker på forteller også noe om **hvem du er sosialt** — din alder, utdanning, yrke og sosiale tilhørighet. Dette kalles **sosiolekt**.

I dette kapittelet skal du lære:
- Hva en dialekt er og hvordan norske dialekter deles inn
- Typiske kjennetegn som skiller dialektene fra hverandre
- Hva sosiolekter er og hvordan de fungerer
- Hvorfor dialektene er under press og hvordan de endrer seg
- Holdninger til dialekter og språkmangfold`,
    },

    // ========== DEFINISJON: DIALEKT ==========
    {
      id: 'norsk-10-7-4-def-1',
      type: 'definition',
      title: 'Dialekt',
      content: `En **dialekt** er en geografisk bestemt variant av et språk. Dialekten din er preget av **hvor du kommer fra** — hvilket sted, hvilken region.

**Kjennetegn på dialekter:**
- Egen **uttale** (lydverk/fonologi)
- Egne **bøyningsformer** (morfologi)
- Egne **ord og uttrykk** (ordforråd)
- Egen **setningsmelodi** (intonasjon)

**Viktig prinsipp:**
Det finnes ikke «finere» eller «stygge» dialekter. Alle dialekter er fullverdige språksystemer med egen grammatikk og logikk. Når noen mener at en dialekt er «pen» eller «stygg», handler det om **holdninger** og fordommer, ikke om noe objektivt ved selve dialekten.

**Dialekt vs. språk:**
Hva er egentlig forskjellen mellom en dialekt og et språk? Den kjente lingvisten Max Weinreich sa det slik: «Et språk er en dialekt med en hær og en flåte.» Med andre ord: forskjellen er ofte politisk, ikke lingvistisk. Norsk og svensk er gjensidig forståelige, men regnes som ulike språk — mens noen norske dialekter er veldig ulike, men regnes som samme språk.`,
    },

    // ========== DIALEKTGRUPPENE ==========
    {
      id: 'norsk-10-7-4-grupper',
      type: 'text',
      content: `## Norske dialektgrupper: De fire hovedgruppene

Norske dialekter deles tradisjonelt inn i **fire hovedgrupper** etter geografi:

### 1. Østnorsk (østlandsk)
**Område:** Østlandet, fra Oslofjorden til Hedmark og Oppland
**Kjennetegn:**
- **Tjukk l** (en spesiell l-lyd): «sol» uttalt med tjukk l
- **Retrofleks** (sammensmeltede lyder): «barn» uttalt «bæɳ»
- **Monoftonger** i mange ord: «stein» → «sten», «bein» → «ben» (men mange dialekter beholder diftongene)
- **Kløyvd infinitiv**: Noen verb ender på -a, andre på -e (varierer)

### 2. Vestnorsk (vestlandsk)
**Område:** Vestlandet, fra Rogaland til Møre og Romsdal
**Kjennetegn:**
- **Diftonger** bevart: «stein», «bein», «røyk»
- **Ingen tjukk l**: «sol» med vanlig l
- **Sterke bøyningsformer**: Mange arkaiske former bevart fra norrønt
- **Eg/e** som pronomen (ikke «jeg» eller «æ»)

### 3. Trøndersk (trøndsk)
**Område:** Trøndelag
**Kjennetegn:**
- **Apokope** (bortfall av siste vokal): «å kåmmå» → «å kåmm», «å kasta» → «å kast»
- **Palatal** uttale: «mann» uttalt «mainnj», «ball» uttalt «baillj»
- **Æ** som pronomen for «jeg»
- **Tjukk l**: som østnorsk
- Karakteristisk **tonefall** med to toner

### 4. Nordnorsk
**Område:** Nordland, Troms og Finnmark
**Kjennetegn:**
- Stor variasjon innad i gruppen
- **E-mål** (verbendelse -e): «å kaste», «å fiske»
- **Palataler** som i trøndsk i noen områder
- Mange **norrøne ord** bevart
- **Æ** som pronomen i mange dialekter
- Noen områder har **dativ** bevart (en rest fra norrønt kasussystem!)

### En viktig presisering
Denne inndelingen er en forenkling. Innenfor hver gruppe finnes det stor variasjon, og grensene mellom gruppene er flytende. En person fra Mandal (Sørlandet) snakker veldig annerledes enn en person fra Oslo, selv om begge regnes som «østnorsk» i vid forstand.`,
    },

    // ========== EKSEMPEL: DIALEKTFORSKJELLER ==========
    {
      id: 'norsk-10-7-4-example-1',
      type: 'example',
      title: 'Eksempel: Samme setning på ulike dialekter',
      problem: `Se på denne setningen uttalt på ulike norske dialekter. Hvilke forskjeller legger du merke til?

**Bokmål (skrift):** «Jeg har ikke sett ham i dag.»

**Oslo:** «Jæi har ikkje sett'n i dag.»
**Bergen:** «Eg har ikkje sett han i dag.»
**Trondheim:** «Æ har itj sett'n i dag.»
**Tromsø:** «Æ har ikkje sett han i dag.»
**Stavanger:** «Eg har ikkje sett han i dag.»
**Setesdal:** «Eg hev ikkje sétt'en i dag.»

Sammenlign og finn forskjeller i pronomen, nektingsord og andre trekk.`,
      solution: `**Pronomen for «jeg»:**
- Oslo: «Jæi» (bokmålsnært)
- Bergen, Stavanger, Setesdal: «Eg» (vestnorsk)
- Trondheim, Tromsø: «Æ» (trøndersk/nordnorsk)

**Nektingsord «ikke»:**
- Oslo: «ikkje» eller «ikke»
- Bergen, Stavanger, Tromsø, Setesdal: «ikkje»
- Trondheim: «itj» (forkortet form, typisk trøndersk)

**Verb «har»:**
- De fleste: «har»
- Setesdal: «hev» (arkaisk form, bevart fra norrønt)

**Pronomen for «ham»:**
- Oslo, Trondheim: «'n» (forkortet)
- Bergen, Tromsø, Stavanger: «han» (full form)
- Setesdal: «'en» (forkortet med e)

**Viktig innsikt:**
Disse forskjellene er systematiske — de følger bestemte mønstre knyttet til geografi. De er ikke «feil» eller «slurv», men ulike løsninger på samme kommunikasjonsbehov.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'norsk-10-7-4-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-4-ex-1',
        number: '7.21',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke av disse er kjennetegn på trøndersk dialekt?',
        options: [
          {
            id: 'a',
            text: 'Diftonger som «stein» og «bein», og pronomen «eg»',
            isCorrect: false,
            feedback: 'Feil. Diftonger og «eg» er mest typisk for vestlandsk.',
          },
          {
            id: 'b',
            text: 'Apokope (bortfall av siste vokal), palataler og pronomen «æ»',
            isCorrect: true,
            feedback: 'Riktig! Trøndsk kjennetegnes av apokope (å kåmm), palataler (mainnj) og «æ» som pronomen.',
          },
          {
            id: 'c',
            text: 'Monoftonger som «sten» og «ben», og pronomen «jæi»',
            isCorrect: false,
            feedback: 'Feil. Monoftonger og «jæi» er mer typisk for østlandsk (Oslo-området).',
          },
          {
            id: 'd',
            text: 'Dativ bevart fra norrønt og e-mål',
            isCorrect: false,
            feedback: 'Feil. Bevart dativ finnes mest i noen nordnorske og vestlandske dialekter.',
          },
        ],
        solution: 'Alternativ B er riktig. Trøndersk kjennetegnes av apokope, palataler og «æ».',
      },
    },

    // ========== DEFINISJON: SOSIOLEKT ==========
    {
      id: 'norsk-10-7-4-def-2',
      type: 'definition',
      title: 'Sosiolekt',
      content: `En **sosiolekt** er en språkvariant som er preget av sosiale faktorer — ikke geografi, men **hvem du er** og **hvilken gruppe du tilhører**.

**Faktorer som påvirker sosiolekten din:**
- **Alder:** Ungdommer snakker annerledes enn eldre. (Tenk på ord som «cringe», «goated», «slay».)
- **Utdanning/yrke:** En professor snakker gjerne annerledes enn en håndverker — ikke bedre, men annerledes.
- **Sosial klasse:** Historisk har overklassen og arbeiderklassen ofte snakket ulike varianter av samme dialekt.
- **Kjønn:** Forskning viser at kvinner og menn noen ganger bruker litt ulike språktrekk.
- **Etnisitet/kultur:** Flerspråklige ungdommer utvikler ofte egne språkvarianter (se «multietnolekt» nedenfor).

**Dialekt vs. sosiolekt:**
- **Dialekt** = preget av **hvor** du kommer fra (geografi)
- **Sosiolekt** = preget av **hvem** du er sosialt (alder, klasse, utdanning osv.)

I praksis er dialekt og sosiolekt tett knyttet sammen. Alle snakker en kombinasjon av begge: en ung bergenser snakker bergensk dialekt, men med ungdomssosiolektens ord og uttrykk.`,
    },

    // ========== MULTIETNOLEKT ==========
    {
      id: 'norsk-10-7-4-multietnolekt',
      type: 'text',
      content: `## Multietnolekt: Nye språkvarianter i Norge

I flerkulturelle bymiljøer i Norge har det de siste tiårene vokst frem en ny type talemål som kalles **multietnolekt** (noen kaller det «kebabnorsk», men det begrepet oppleves som nedsettende av mange).

### Hva er multietnolekt?
Multietnolekt er en språkvariant som brukes av ungdommer med ulik etnisk bakgrunn i flerspråklige miljøer, for eksempel på Grønland, Tøyen og Holmlia i Oslo. Det er en blanding av:
- Norsk grammatikk og ordforråd
- Ord og uttrykk fra arabisk, tyrkisk, urdu, somali og andre språk
- Egen uttale og intonasjon
- Egne grammatiske trekk

### Eksempler på kjennetegn
- **Ordforråd:** «wolla» (ved Gud), «habibi» (venn/kjære), «yalla» (kom igjen)
- **Grammatikk:** «Han er kar som» (i stedet for «Han er en fyr som»), utelating av bestemt artikkel
- **Uttale:** Egen intonasjon og tonefall som skiller seg fra tradisjonell Oslo-dialekt

### Er multietnolekt en «ekte» språkvariant?
Ja. Språkforskere er enige om at multietnolekt er en fullverdig sosiolekt med sine egne regler og mønstre. Den er ikke «feil norsk» eller «lat norsk» — den er en naturlig utvikling som oppstår når mennesker med ulik språkbakgrunn lever sammen og utvikler et felles talemål.

Multietnolekten viser at norsk er et levende, dynamisk språk som stadig utvikler seg. Akkurat som norsk tok opp lånord fra dansk og tysk i dansketiden, tar norsk nå opp ord og uttrykk fra språkene til Norges nye innbyggere.

Noen språkforskere peker også på at det er viktig at ungdommer som bruker multietnolekt, også behersker et formelt register for bruk i skriftlige og faglige sammenhenger — på samme måte som alle nordmenn veksler mellom dialekt og mer formelt språk.`,
    },

    // ========== EKSEMPEL: SOSIOLEKT I PRAKSIS ==========
    {
      id: 'norsk-10-7-4-example-2',
      type: 'example',
      title: 'Eksempel: Sosiolekt — hvordan alder påvirker språket',
      problem: `Se på disse tre versjonene av omtrent samme ytring, sagt av tre ulike personer fra Oslo:

**Person A (70 år, pensjonist):** «Det var en riktig hyggelig forestilling i går kveld.»

**Person B (40 år, kontorarbeider):** «Forestillingen i går var veldig bra.»

**Person C (16 år, elev):** «Showet i går var helt sykt bra, ass.»

Alle tre er fra Oslo. Alle snakker østlandsk. Men språket deres er ulikt. Forklar hva som er forskjellig og hvorfor.`,
      solution: `**Forskjeller:**

**Ordvalg:**
- Person A bruker «riktig hyggelig» (formelt, gammeldags)
- Person B bruker «veldig bra» (nøytralt)
- Person C bruker «helt sykt bra, ass» (uformelt, ungdomsspråk)

**Ordforråd:**
- Person A: «forestilling» (tradisjonelt norsk ord)
- Person B: «forestillingen» (samme ord, men med bestemt form)
- Person C: «showet» (engelsk lånord med norsk bestemt form)

**Stil:**
- Person A: Formell, komplett setning
- Person B: Nøytral, standard
- Person C: Uformell, med forsterkningsord («sykt») og diskursmarkør («ass»)

**Forklaring:**
Disse forskjellene skyldes **alder** og **sosial kontekst**. Eldre personer har ofte et mer formelt språk med tradisjonelle ord. Ungdommer bruker mer engelske lånord, slang og forsterkningsuttrykk. Ingen av versjonene er «bedre» — de er tilpasset ulike situasjoner og generasjoner.

**Viktig:** Person C ville trolig snakke mer som Person B i en jobbintervju-situasjon. Vi tilpasser språket etter konteksten — dette kalles **kodeveksling**.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'norsk-10-7-4-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-4-ex-2',
        number: '7.22',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er forskjellen mellom dialekt og sosiolekt?',
        options: [
          {
            id: 'a',
            text: 'Dialekt er skriftspråk, sosiolekt er talespråk',
            isCorrect: false,
            feedback: 'Feil. Både dialekt og sosiolekt er talespråksvariasjoner. Skriftspråkene er bokmål og nynorsk.',
          },
          {
            id: 'b',
            text: 'Dialekt er preget av hvor du kommer fra, sosiolekt er preget av hvem du er sosialt',
            isCorrect: true,
            feedback: 'Riktig! Dialekt er knyttet til geografi (sted), mens sosiolekt er knyttet til sosiale faktorer som alder, utdanning og klasse.',
          },
          {
            id: 'c',
            text: 'Dialekt er for eldre folk, sosiolekt er for ungdommer',
            isCorrect: false,
            feedback: 'Feil. Alle snakker en dialekt uansett alder. Sosiolekt handler heller ikke bare om ungdom — alle har en sosiolekt preget av alder, utdanning og klasse.',
          },
          {
            id: 'd',
            text: 'Dialekt er ekte norsk, sosiolekt er ikke ordentlig norsk',
            isCorrect: false,
            feedback: 'Feil. Begge er fullverdige deler av det norske språket. Alle snakker en kombinasjon av dialekt og sosiolekt.',
          },
        ],
        solution: 'Alternativ B er riktig. Dialekt er geografisk bestemt, sosiolekt er sosialt bestemt.',
      },
    },

    // ========== DIALEKTPRESS OG REGIONALISERING ==========
    {
      id: 'norsk-10-7-4-press',
      type: 'text',
      content: `## Dialektene under press: Regionalisering og utjevning

Norske dialekter er under press. Mange lokale dialekttrekk forsvinner, og dialektene «smelter sammen» til større regionale varianter. Dette kalles **regionalisering** eller **dialektutjevning**.

### Hva skjer?
- Svært lokale trekk forsvinner (f.eks. bevart dativ, spesielle bøyningsformer)
- Dialektene nærmer seg det regionale sentrumet (f.eks. Bergen-dialekt dominerer på Vestlandet, Oslo-dialekt dominerer på Østlandet)
- Ungdommer snakker ofte en «lettere» versjon av foreldrenes dialekt
- Engelske lånord erstatter lokale dialektord

### Hvorfor skjer dette?
- **Medier:** TV, radio, YouTube og podcaster eksponerer alle for det samme talemålet
- **Mobilitet:** Folk flytter mer og møter andre dialekter
- **Urbanisering:** Flere bor i byer der lokale trekk viskes ut
- **Sosiale medier:** Unge kommuniserer skriftlig mer enn noen gang — og skrift er enten bokmål eller nynorsk, ikke dialekt
- **Holdninger:** Noen dialekttrekk oppleves som «gammeldagse» av unge

### Hva kan gjøres?
Noen mener at dialektene bør beskyttes aktivt, andre mener at språkendring er naturlig og ikke noe å bekymre seg over. Debatten handler om balansen mellom å bevare språklig mangfold og å la språket utvikle seg naturlig.

### Bevissthet og stolthet
Norge er unikt i at vi har en sterk tradisjon for å bruke dialekt i alle sammenhenger — også på TV, i Stortinget og i akademia. I mange andre land forventes det at du snakker standardspråk i formelle sammenhenger. I Norge er det helt greit å snakke dialekt hvor som helst. Denne holdningen er en viktig grunn til at norske dialekter har overlevd så godt.`,
    },

    // ========== DEFINISJON: KODEVEKSLING ==========
    {
      id: 'norsk-10-7-4-def-3',
      type: 'definition',
      title: 'Kodeveksling',
      content: `**Kodeveksling** betyr å veksle mellom ulike språkvarianter avhengig av situasjonen.

**Eksempler:**
- Du snakker dialekt med venner, men legger om til et mer standardnært talemål i jobbintervju
- Du bruker engelske ord når du snakker med venner om gaming, men norske ord i klasserommet
- Du snakker én dialekt hjemme og en annen på studiestedet

**Alle kodeveksler:** Det er ikke noe spesielt eller negativt ved kodeveksling — det er en naturlig del av å være flerspråklig eller flerdialektlig. Vi tilpasser språket vårt til konteksten hele tiden.

**Diglossi:**
Noen ganger er kodevekslingen så systematisk at den har et eget navn: **diglossi** betyr at man bruker to helt ulike språkvarianter i ulike sammenhenger — for eksempel dialekt hjemme og standardspråk på jobb.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'norsk-10-7-4-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-4-ex-3',
        number: '7.23',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tenk på din egen dialekt eller ditt eget talemål.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv tre trekk ved din egen dialekt/ditt eget talemål. Bruk fagbegreper som pronomen, nektingsord, intonasjon, ordforråd osv.',
            solution: 'Svaret avhenger av elevens dialekt. Eksempel: «Jeg sier «jæi» (pronomen), «ikke» (nektingsord) og har tjukk l i ord som «sol». Jeg bruker Oslo-intonasjon med to toner.»',
          },
          {
            label: 'b',
            task: 'Gi et eksempel på når du kodeveksler — altså snakker litt annerledes avhengig av situasjonen.',
            solution: 'Eksempel: «Jeg snakker mer dialekt med besteforeldrene mine enn med venner på skolen. Med venner bruker jeg flere engelske ord og slang.» Eller: «Når jeg snakker med læreren, bruker jeg mer fullstendige setninger enn når jeg snapper med venner.»',
          },
        ],
        hints: ['Tenk på hvilke ord du bruker som kanskje er typisk for ditt område', 'Sammenlign hvordan du snakker med venner vs. læreren'],
        solution: 'En god besvarelse bruker fagbegreper og viser bevissthet om eget språk.',
        allowsUpload: true,
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'norsk-10-7-4-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-4-ex-4',
        number: '7.24',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er «regionalisering» i sammenheng med dialekter?',
        options: [
          {
            id: 'a',
            text: 'At dialektene deles inn i regioner på et kart',
            isCorrect: false,
            feedback: 'Feil. Regionalisering handler ikke om inndeling, men om at lokale dialekttrekk forsvinner og erstattes av regionale fellestrekk.',
          },
          {
            id: 'b',
            text: 'At lokale dialekttrekk forsvinner og dialektene nærmer seg større regionale varianter',
            isCorrect: true,
            feedback: 'Riktig! Regionalisering betyr at de mest lokale trekkene forsvinner, mens dialektene beholder de trekkene som er felles for hele regionen.',
          },
          {
            id: 'c',
            text: 'At folk i alle regioner begynner å snakke Oslo-dialekt',
            isCorrect: false,
            feedback: 'Feil. Dialektene nærmer seg ikke nødvendigvis Oslo — de nærmer seg det regionale sentrumet i sitt område (Bergen på Vestlandet, Trondheim i Trøndelag osv.).',
          },
          {
            id: 'd',
            text: 'At alle dialekter i Norge forsvinner helt',
            isCorrect: false,
            feedback: 'Feil. Dialektene forsvinner ikke helt — de endrer seg og blir mer regionale i stedet for lokale.',
          },
        ],
        solution: 'Alternativ B er riktig. Regionalisering betyr at dialektene mister lokale trekk og nærmer seg regionale varianter.',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'norsk-10-7-4-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-4-ex-5',
        number: '7.25',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Mange mener at dialektmangfoldet i Norge er truet. Andre mener at dialektendring er naturlig og ikke noe å bekymre seg over.

Skriv en kort argumenterende tekst (150–200 ord) der du tar stilling til dette spørsmålet: **Bør norske dialekter beskyttes aktivt, eller bør språkendring få skje naturlig?**`,
        hints: [
          'Tenk på hva vi mister hvis dialektene forsvinner',
          'Tenk på om det er mulig — eller ønskelig — å stoppe naturlig språkendring',
          'Bruk eksempler fra kapittelet',
        ],
        solution: 'En god besvarelse veier argumenter for og imot. For beskyttelse: kulturarv, mangfold, identitet, norrøne trekk bevart. Mot aktiv beskyttelse: språkendring er naturlig, tvang virker ikke, mennesker velger selv. En balansert tilnærming kan være å fremme bevissthet og stolthet uten å tvinge folk til å snakke på en bestemt måte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-7-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelpunkter
- En **dialekt** er en geografisk bestemt språkvariant, preget av hvor du kommer fra
- Norske dialekter deles i fire hovedgrupper: **østnorsk, vestnorsk, trøndsk** og **nordnorsk**
- Viktige kjennetegn som skiller dialektene: pronomen, nektingsord, tjukk l, apokope, palataler, monoftonger/diftonger
- En **sosiolekt** er preget av sosiale faktorer: alder, utdanning, klasse, etnisitet
- **Multietnolekt** er en ny sosiolekt i flerkulturelle bymiljøer
- **Kodeveksling** betyr å veksle mellom språkvarianter avhengig av situasjonen
- **Regionalisering** betyr at lokale dialekttrekk forsvinner og erstattes av regionale

### Viktige sammenhenger
- Dialektmangfoldet i Norge er en arv fra dansketiden — da talespråket levde videre uavhengig av skriftspråket
- Norge er unikt i å akseptere dialektbruk i alle sammenhenger
- Språkendring er naturlig, men bevissthet om eget språk er viktig for å kunne velge bevisst`,
    },

    // ========== SAMLEOPPGAVE ==========
    {
      id: 'norsk-10-7-4-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-4-ex-6',
        number: '7.26',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Dialekter og sosiolekter.

Lag en kort presentasjon (200–300 ord) om talemålet der du bor. Inkluder:

a) Hvilken dialektgruppe hører talemålet til? (østnorsk, vestnorsk, trøndsk, nordnorsk)
b) Nevn minst tre typiske trekk ved dialekten (bruk fagbegreper)
c) Finnes det sosiolektforskjeller i området ditt? (Snakker ungdommer annerledes enn eldre?)
d) Har dialekten endret seg de siste årene? Gi eksempler.`,
        hints: [
          'Spør gjerne besteforeldre eller eldre familiemedlemmer om ord og uttrykk som ikke brukes lenger',
          'Tenk på hvordan vennene dine snakker sammenlignet med foreldrene dine',
          'Bruk fagbegrepene du har lært: dialekt, sosiolekt, kodeveksling, regionalisering',
        ],
        solution: 'En god besvarelse plasserer dialekten i riktig gruppe, beskriver typiske trekk med fagbegreper, reflekterer over sosiolektforskjeller og viser bevissthet om språkendring over tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Dialekt', definition: 'Geografisk bestemt språkvariant, preget av hvor du kommer fra.' },
    { term: 'Sosiolekt', definition: 'Språkvariant preget av sosiale faktorer som alder, utdanning, klasse og etnisitet.' },
    { term: 'Multietnolekt', definition: 'Språkvariant som brukes av ungdommer med ulik etnisk bakgrunn i flerspråklige bymiljøer.' },
    { term: 'Kodeveksling', definition: 'Å veksle mellom ulike språkvarianter avhengig av situasjonen.' },
    { term: 'Regionalisering', definition: 'At lokale dialekttrekk forsvinner og dialektene nærmer seg større regionale varianter.' },
    { term: 'Apokope', definition: 'Bortfall av siste vokal i et ord, typisk for trøndersk (f.eks. «å kåmm» for «å komme»).' },
  ],
};

// ============================================================================
// KAPITTEL 7.5: Nabospråksforståelse
// LK20: Sammenligne norsk med andre nordiske språk og reflektere over
//        nabospråksforståelse
// ============================================================================

export const CHAPTER_NORSK_10_7_5: TextbookChapter = {
  id: 'norsk-10-7-5',
  courseId: 'norsk-10',
  chapterNumber: '7.5',
  title: 'Nabospråksforståelse',
  description: 'Lær om de nordiske språkene, hva som gjør at nordmenn, svensker og dansker kan forstå hverandre, og hvorfor nabospråksforståelsen er under press.',
  estimatedMinutes: 70,
  competenceGoals: [
    'sammenligne norsk med andre nordiske språk',
    'reflektere over nabospråksforståelse og kommunikasjon i Norden',
    'gjøre rede for likheter og forskjeller mellom de skandinaviske språkene',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-7-5-intro',
      type: 'text',
      content: `## Nabospråksforståelse: Når naboene nesten snakker samme språk

Tenk deg at du er på ferie i Stockholm. Du spør om veien til et museum, og personen svarer på svensk. Du forstår det meste — men noen ord er merkelige. «Roligt» betyr visst «morsomt», ikke «rolig». «Fika» betyr kaffepause. Og hva i all verden er en «glass»? (Det er is, altså iskrem.)

Nå er du i København. Dansken i billettluka snakker, men du sliter. Ordene ser kjente ut, men de lyder helt annerledes enn du forventet. «Rødgrød med fløde» — kan du i det hele tatt si det?

Denne opplevelsen er **nabospråksforståelse** i praksis: evnen til å forstå de andre nordiske språkene uten å ha lært dem. Nordmenn, svensker og dansker snakker språk som er så nært beslektet at de i prinsippet kan forstå hverandre. Men det er ikke alltid like enkelt.

I dette kapittelet skal du lære:
- Hvordan de nordiske språkene er beslektet
- Hvilke språk som ligner mest og minst på norsk
- Hvorfor nordmenn er best i Norden til å forstå nabospråk
- Hva som truer nabospråksforståelsen — og hva vi kan gjøre for å bevare den`,
    },

    // ========== DEFINISJON: NORDISKE SPRÅK ==========
    {
      id: 'norsk-10-7-5-def-1',
      type: 'definition',
      title: 'Den nordiske språkfamilien',
      content: `De **nordiske språkene** (også kalt nordgermanske språk) stammer alle fra norrønt og deles i to grupper:

**Fastlandsskandinavisk (gjensidig forståelig):**
- **Norsk** (bokmål og nynorsk)
- **Svensk**
- **Dansk**

Disse tre kalles også de **skandinaviske språkene** og er så nært beslektet at talerne i prinsippet kan forstå hverandre. Dette kalles **nabospråksforståelse** eller **semikommunikasjon**.

**Øynordisk (ikke gjensidig forståelig med skandinavisk):**
- **Islandsk** — har bevart mest av norrønt, svært vanskelig for skandinaver
- **Færøysk** — mellomposisjon, noen likheter med vestnorsk

**Andre nordiske språk:**
- **Samisk** (flere varianter) — ikke germansk, men finsk-ugrisk. Et helt annet språkfamilie.
- **Finsk** — heller ikke germansk. Finland er nordisk, men finsk er ikke et nordisk språk i lingvistisk forstand.
- **Grønlandsk** — inuittisk språk, ingen slektskap med de nordiske språkene.

**Viktig:** «Nordisk» som geografisk/kulturelt begrep inkluderer alle disse språkene. «Nordisk» som lingvistisk begrep refererer bare til de språkene som stammer fra norrønt.`,
    },

    // ========== EKSEMPEL: SAMMENLIGNING ==========
    {
      id: 'norsk-10-7-5-example-1',
      type: 'example',
      title: 'Eksempel: Samme tekst på norsk, svensk og dansk',
      problem: `Her er artikkel 1 i FNs menneskerettighetserklæring på norsk (bokmål), svensk og dansk. Les alle tre og sammenlign.

**Norsk (bokmål):**
«Alle mennesker er født frie og med samme menneskeverd og menneskerettigheter. De er utstyrt med fornuft og samvittighet og bør handle overfor hverandre i brorskapets ånd.»

**Svensk:**
«Alla människor är födda fria och lika i värde och rättigheter. De har utrustats med förnuft och samvete och bör handla gentemot varandra i en anda av broderskap.»

**Dansk:**
«Alle mennesker er født frie og lige i værdighed og rettigheder. De er udstyret med fornuft og samvittighed og bør handle mod hverandre i en broderskabets ånd.»

Finn likheter og forskjeller mellom de tre versjonene.`,
      solution: `**Likheter (det er mange!):**
- Grunnleggende grammatikk er nesten identisk
- Ordstillingen er den samme
- Mange ord er gjenkjennelige på tvers: mennesker/människor/mennesker, født/födda/født, frie/fria/frie
- «fornuft» og «samvittighet» er nesten like på alle tre

**Forskjeller:**

| Trekk | Norsk | Svensk | Dansk |
|-------|-------|--------|-------|
| «Alle» | Alle | Alla | Alle |
| «mennesker» | mennesker | människor | mennesker |
| «født» | født | födda | født |
| «utstyrt» | utstyrt | utrustats | udstyret |
| «hverandre» | hverandre | varandra | hverandre |
| «brorskap» | brorskap | broderskap | broderskab |

**Mønster:**
- Norsk og dansk ligner mest i **skrift** (fordi bokmål stammer fra dansk)
- Norsk og svensk ligner mest i **uttale** (fordi norsk og svensk talespråk har mer til felles)
- Dansk skiller seg mest ut i **uttale** — danskene «svelger» mange lyder som norsk og svensk uttaler tydelig`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'norsk-10-7-5-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-5-ex-1',
        number: '7.27',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke tre språk regnes som de skandinaviske språkene?',
        options: [
          {
            id: 'a',
            text: 'Norsk, islandsk og finsk',
            isCorrect: false,
            feedback: 'Feil. Islandsk er nordisk, men øynordisk (ikke skandinavisk). Finsk er ikke et germansk språk i det hele tatt.',
          },
          {
            id: 'b',
            text: 'Norsk, svensk og dansk',
            isCorrect: true,
            feedback: 'Riktig! Norsk, svensk og dansk er de tre skandinaviske språkene, og de er gjensidig forståelige.',
          },
          {
            id: 'c',
            text: 'Norsk, svensk og finsk',
            isCorrect: false,
            feedback: 'Feil. Finsk er ikke et skandinavisk eller germansk språk. Det tilhører den finsk-ugriske språkfamilien.',
          },
          {
            id: 'd',
            text: 'Norsk, dansk og færøysk',
            isCorrect: false,
            feedback: 'Feil. Færøysk er nordisk, men regnes som øynordisk sammen med islandsk.',
          },
        ],
        solution: 'Alternativ B er riktig. Norsk, svensk og dansk er de skandinaviske språkene.',
      },
    },

    // ========== HVEM FORSTÅR HVEM? ==========
    {
      id: 'norsk-10-7-5-forstaelse',
      type: 'text',
      content: `## Hvem forstår hvem? Det skandinaviske forståelsestriangelet

Forskning viser et tydelig mønster i nabospråksforståelsen mellom de tre skandinaviske landene:

### Nordmenn er best
Nordmenn forstår svensk og dansk bedre enn svensker og dansker forstår hverandre. Hvorfor?
- Norge har **to skriftspråk** — bokmål (nært dansk) og nynorsk (nært noen svenske former). Norske elever er vant til språklig variasjon.
- Norsk ligger **midt mellom** dansk og svensk — det har trekk fra begge.
- NRK har sendt svenske og danske programmer i flere tiår.

### Svensker sliter med dansk
Svensker forstår norsk rimelig godt, men sliter med dansk. Dansk uttale er svært forskjellig fra svensk uttale — dansker «svelger» konsonanter og vokaler på en måte som gjør det vanskelig for svensker.

### Dansker sliter med svensk
Av samme grunn: dansk og svensk uttale er svært forskjellige. Dansker forstår norsk bedre enn svensk.

### Norsk som «brobygger»
Norsk fungerer som en slags **bro** mellom dansk og svensk:
- **Skriftlig** ligner norsk (bokmål) mest på dansk
- **Muntlig** ligner norsk mest på svensk
- Dermed kan nordmenn «oversette» mellom sine nordiske naboer

### «Falske venner» — ord som lurer
Noen ord ser like ut i de tre språkene, men betyr noe helt annet:

| Ord | Norsk | Svensk | Dansk |
|-----|-------|--------|-------|
| **Rolig** | Stille, fredelig | **Morsom** | Stille, fredelig |
| **Rar** | Merkelig | **Merkelig** | Sjelden |
| **By** | By (stor) | By (liten landsby) | By |
| **Grine** | Gråte (dialekt) | **Le/skratte** | **Gråte** |
| **Glass** | Glass (materiale) | **Iskrem** | Glass (materiale) |
| **Frokost** | Morgenmåltid | **Morgenmåltid** | **Lunsj** |
| **Hyggelig** | Koselig | — | **Særlig viktig begrep** (hygge) |

Disse «falske vennene» kan skape morsomme misforståelser. En norsk person som sier «Det var en rar opplevelse» kan bli overrasket når svensken svarer «Ja, det var det!» — fordi «rar» betyr det samme på svensk. Men en dansk person ville blitt forvirret, fordi «rar» på dansk betyr «sjelden».`,
    },

    // ========== EKSEMPEL: FALSKE VENNER ==========
    {
      id: 'norsk-10-7-5-example-2',
      type: 'example',
      title: 'Eksempel: Misforståelser med «falske venner»',
      problem: `Les denne lille historien og forklar hva som går galt:

En norsk turist i Stockholm sier til en svensk kelner: «Kan jeg få en frokost?»

Kelneren ser forvirret ut. «Frokost? Men det er jo bare klokken åtte om morgenen?»

Nordmannen svarer: «Ja, nettopp! Jeg vil gjerne ha frokost.»

Kelneren: «Men vi serverer inte frokost, det gör vi vid lunch.»

Hva er misforståelsen?`,
      solution: `**Misforståelsen handler om ordet «frokost»:**

- På **norsk** betyr «frokost» **morgenmåltid** (breakfast)
- På **svensk** betyr «frukost» også **morgenmåltid** — dette stemmer altså!

Men historien illustrerer en vanlig type misforståelse: ord som *nesten* betyr det samme kan skape forvirring fordi man antar at de betyr nøyaktig det samme.

Et bedre eksempel på en ekte misforståelse ville vært:

- Nordmann til dansk: «Var det en hyggelig frokost?»
- Dansken forstår «frokost» som **lunsj** på dansk.
- Dansken svarer: «Frokost? Vi har da ikke spist frokost ennå, det er først klokken tolv!»

**Her er misforståelsen tydelig:** «Frokost» betyr morgenmåltid på norsk, men lunsj på dansk!

**Viktig lærdom:** Selv mellom så nært beslektede språk som norsk, svensk og dansk finnes det nok forskjeller til å skape reelle misforståelser. Bevissthet om «falske venner» er viktig for god nabospråksforståelse.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'norsk-10-7-5-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-5-ex-2',
        number: '7.28',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor er nordmenn generelt best i Skandinavia til å forstå nabospråkene?',
        options: [
          {
            id: 'a',
            text: 'Fordi norsk er det eldste av de skandinaviske språkene',
            isCorrect: false,
            feedback: 'Feil. Alle de skandinaviske språkene stammer fra norrønt og er omtrent like «gamle». Alder forklarer ikke forståelse.',
          },
          {
            id: 'b',
            text: 'Fordi norsk ligger midt mellom dansk og svensk, og nordmenn er vant til språklig variasjon',
            isCorrect: true,
            feedback: 'Riktig! Norsk ligner dansk i skrift og svensk i uttale, og med to skriftspråk er nordmenn vant til variasjon.',
          },
          {
            id: 'c',
            text: 'Fordi nordmenn lærer svensk og dansk på skolen',
            isCorrect: false,
            feedback: 'Feil. Nordmenn lærer ikke svensk og dansk som egne fag, men eksponeres for dem gjennom medier og den generelle språklikheten.',
          },
          {
            id: 'd',
            text: 'Fordi Norge har flest innbyggere i Skandinavia',
            isCorrect: false,
            feedback: 'Feil. Sverige har flest innbyggere i Skandinavia. Folketall forklarer ikke nabospråksforståelse.',
          },
        ],
        solution: 'Alternativ B er riktig. Norsk er en bro mellom dansk og svensk.',
      },
    },

    // ========== NABOSPRÅKSFORSTÅELSE UNDER PRESS ==========
    {
      id: 'norsk-10-7-5-press',
      type: 'text',
      content: `## Nabospråksforståelsen under press

Forskning viser at nabospråksforståelsen i Skandinavia har blitt dårligere de siste tiårene, særlig blant unge. Det er flere grunner til dette:

### Årsaker
- **Engelsk tar over:** Unge skandinaver bruker ofte engelsk i stedet for nabospråkene når de kommuniserer med hverandre. Det er enklere, og alle kan det.
- **Mindre eksponering:** Færre ser dansk og svensk TV. Netflix og YouTube er på engelsk.
- **Holdninger:** Noen unge synes det er «flaut» eller «vanskelig» å prøve å forstå nabospråkene.
- **Urbanisering:** I storbyer som Stockholm, Oslo og København møtes folk fra hele verden — og fellesspråket blir ofte engelsk, ikke skandinavisk.

### Konsekvenser
Hvis nabospråksforståelsen forsvinner, mister Norden noe unikt: muligheten til å kommunisere på tvers av landegrensene uten å trenge et fremmedspråk. Det er et **kulturelt fellesskap** som bygger på hundrevis av år med felles historie og språk.

### Hva kan gjøres?
- **Medier:** Nordiske serier og filmer kan sendes med undertekster i stedet for dubbing
- **Skolen:** Elever kan lære om nabospråkene og øve på å lese og lytte til dem
- **Nordisk samarbeid:** Nordisk Råd og Nordisk Ministerråd arbeider for å styrke nabospråksforståelsen
- **Bevissthet:** Bare det å være klar over at nabospråkene finnes og er forståelige, kan gjøre en forskjell

### Et tankeeksperiment
Tenk deg at du er på ferie i Barcelona med en svensk venn. Dere kan velge å snakke engelsk med hverandre — eller dere kan snakke norsk og svensk. Det siste alternativet er tregere og krever mer innsats, men det vedlikeholder en unik nordisk tradisjon. Hva ville du valgt?`,
    },

    // ========== DEFINISJON: SEMIKOMMUNIKASJON ==========
    {
      id: 'norsk-10-7-5-def-2',
      type: 'definition',
      title: 'Semikommunikasjon',
      content: `**Semikommunikasjon** er et begrep brukt av språkforskere for å beskrive kommunikasjon mellom talere av nært beslektede språk som er **delvis, men ikke fullstendig, gjensidig forståelige**.

**Kjennetegn:**
- Talerne bruker hvert sitt språk
- Forståelsen er **delvis** — noen ting forstås, andre ikke
- **Kontekst** hjelper: du forstår mer hvis du vet hva samtalen handler om
- **Skrift** er lettere å forstå enn tale (fordi du har tid til å tenke)

**Skandinavisk semikommunikasjon:**
Når en nordmann snakker norsk og en svenske svarer på svensk, driver de med semikommunikasjon. Ingen har byttet språk — begge snakker sitt morsmål — men de forstår hverandre (mer eller mindre).

**Asymmetri:**
Semikommunikasjonen er **ikke symmetrisk** i Skandinavia. Nordmenn forstår mer av svensk og dansk enn omvendt. Svensker og dansker forstår hverandre dårligst.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'norsk-10-7-5-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-5-ex-3',
        number: '7.29',
        type: 'classic',
        difficulty: 'medium',
        task: 'Les disse svenske og danske ordene og forsøk å finne den norske oversettelsen.',
        subTasks: [
          {
            label: 'a',
            task: 'Svensk: «sjukhus»',
            solution: 'Sykehus. «Sjuk» betyr «syk» på svensk, «hus» er det samme.',
            multipleChoiceOptions: ['Sykehus', 'Skolehus', 'Sjøhus', 'Barnehus'],
          },
          {
            label: 'b',
            task: 'Dansk: «flyvemaskin»',
            solution: 'Fly/flyvmaskin. Dansk bruker ofte «flyvemaskin» der vi sier «fly».',
            multipleChoiceOptions: ['Fly', 'Helikopter', 'Drone', 'Rakett'],
          },
          {
            label: 'c',
            task: 'Svensk: «tåg»',
            solution: 'Tog. «Tåg» er svensk for «tog» — ordene er svært like.',
            multipleChoiceOptions: ['Tog', 'Tau', 'Tåke', 'Tagg'],
          },
          {
            label: 'd',
            task: 'Dansk: «dreng»',
            solution: 'Gutt. På dansk betyr «dreng» gutt/ung mann. I eldre norsk betyr «dreng» også ung mann/tjener.',
            multipleChoiceOptions: ['Gutt', 'Dronning', 'Dreng/tjener', 'Drage'],
          },
          {
            label: 'e',
            task: 'Svensk: «rolig»',
            solution: 'Morsom. «Rolig» betyr «morsom» på svensk — en klassisk falsk venn!',
            multipleChoiceOptions: ['Morsom', 'Stille/rolig', 'Trist', 'Farlig'],
          },
        ],
        solution: 'a) Sykehus, b) Fly, c) Tog, d) Gutt, e) Morsom.',
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'norsk-10-7-5-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-5-ex-4',
        number: '7.30',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den viktigste trusselen mot nabospråksforståelsen i Skandinavia i dag?',
        options: [
          {
            id: 'a',
            text: 'At de skandinaviske språkene blir mer forskjellige fra hverandre',
            isCorrect: false,
            feedback: 'Feil. Språkene endrer seg, men det er ikke hovedårsaken til at forståelsen svekkes.',
          },
          {
            id: 'b',
            text: 'At unge skandinaver bruker engelsk i stedet for nabospråkene og eksponeres mindre for dem',
            isCorrect: true,
            feedback: 'Riktig! Engelsk tar over som fellesspråk, og unge eksponeres mindre for nabospråkene gjennom medier og kontakt.',
          },
          {
            id: 'c',
            text: 'At Finland og Island har meldt seg ut av det nordiske samarbeidet',
            isCorrect: false,
            feedback: 'Feil. Finland og Island er fremdeles med i det nordiske samarbeidet. Dessuten snakker de ikke skandinaviske språk.',
          },
          {
            id: 'd',
            text: 'At Danmark har gjort det ulovlig å snakke norsk',
            isCorrect: false,
            feedback: 'Feil. Det finnes ingen slike lover. Problemet er holdninger og manglende eksponering, ikke lover.',
          },
        ],
        solution: 'Alternativ B er riktig. Engelsk tar over, og unge eksponeres mindre for nabospråkene.',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'norsk-10-7-5-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-5-ex-5',
        number: '7.31',
        type: 'classic',
        difficulty: 'medium',
        task: `Forklar hva «semikommunikasjon» betyr og gi et eksempel fra hverdagen der en nordmann og en svenske kan bruke semikommunikasjon.`,
        hints: [
          'Tenk på en situasjon der to personer snakker hvert sitt språk',
          'Hva gjør at de likevel forstår hverandre?',
        ],
        solution: 'Semikommunikasjon betyr at to personer snakker hvert sitt, nært beslektet språk og likevel forstår hverandre delvis. Eksempel: En norsk og en svensk ungdom møtes på ferie. Nordmannen snakker norsk, svensken svarer på svensk. De forstår det meste, men noen ord er ukjente. De bruker kontekst og lignende ord til å fylle hullene. Noen ganger må de forklare et ord, men stort sett fungerer samtalen.',
        allowsUpload: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-7-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelpunkter
- De skandinaviske språkene (norsk, svensk, dansk) stammer alle fra norrønt og er **gjensidig forståelige**
- **Islandsk** og **færøysk** er nordiske, men ikke skandinaviske — de er vanskeligere å forstå
- Nordmenn er **best i Skandinavia** til å forstå nabospråkene, fordi norsk ligger mellom dansk og svensk
- Norsk ligner dansk i **skrift** og svensk i **uttale**
- «Falske venner» er ord som ser like ut men betyr forskjellige ting (f.eks. svensk «rolig» = morsom)
- **Semikommunikasjon** er kommunikasjon der talerne bruker hvert sitt nært beslektede språk
- Nabospråksforståelsen er **under press** fordi unge bruker engelsk i stedet

### Viktige sammenhenger
- Nabospråksforståelsen er en direkte konsekvens av at norsk, svensk og dansk stammer fra norrønt
- Den norske «mellomposisjonen» mellom dansk og svensk er en arv fra dansketiden
- Bevaring av nabospråksforståelse krever aktiv innsats — eksponering, holdninger og bevissthet`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-7-5-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-5-ex-6',
        number: '7.32',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Nabospråksforståelse.

Skriv en argumenterende tekst (200–300 ord) der du drøfter dette spørsmålet:

«Bør unge skandinaver bruke skandinavisk eller engelsk når de snakker med hverandre?»

Inkluder:
a) Argumenter for å bruke skandinavisk (nabospråk)
b) Argumenter for å bruke engelsk
c) Ditt eget begrunnet standpunkt`,
        hints: [
          'Tenk på hva som går tapt hvis nabospråksforståelsen forsvinner',
          'Tenk på praktiske fordeler med engelsk',
          'Husk å ta et tydelig standpunkt',
        ],
        solution: 'En god drøfting veier begge sider: For skandinavisk — kulturelt fellesskap, unik tradisjon, styrker identitet, vedlikeholder en ferdighet. For engelsk — enklere, mer effektivt, alle kan det, inkluderer også finlendere og islendinger. Standpunktet skal være begrunnet med faglige argumenter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-7-5-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-5-ex-7',
        number: '7.33',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Finn en kort tekst (10–20 setninger) på svensk eller dansk — for eksempel en nyhetsartikkel eller Wikipedia-artikkel.

a) Les teksten og skriv en kort oppsummering (3–5 setninger) på norsk av hva teksten handler om.
b) Skriv ned tre ord eller uttrykk du syntes var vanskelige å forstå, og forklar hva de betyr.
c) Vurder: Var det enkelt eller vanskelig å forstå nabospråket? Begrunn.`,
        hints: [
          'Du kan bruke svenske aviser som aftonbladet.se eller danske som dr.dk',
          'Velg en tekst om et emne du kjenner — konteksten hjelper',
          'Skriv ned ordene du ikke forstår og prøv å gjette ut fra sammenhengen',
        ],
        solution: 'En god besvarelse viser at eleven har forsøkt å lese nabospråkteksten, identifiserer vanskelige ord, og reflekterer over sin egen forståelse.',
        allowsUpload: true,
        isInvestigation: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Nabospråksforståelse', definition: 'Evnen til å forstå nært beslektede nabospråk uten å ha lært dem formelt.' },
    { term: 'Skandinaviske språk', definition: 'Norsk, svensk og dansk — tre gjensidig forståelige språk som stammer fra norrønt.' },
    { term: 'Semikommunikasjon', definition: 'Kommunikasjon der talerne bruker hvert sitt nært beslektede språk og forstår hverandre delvis.' },
    { term: 'Falske venner', definition: 'Ord som ser like ut i to språk, men betyr forskjellige ting (f.eks. svensk «rolig» = morsom).' },
    { term: 'Øynordisk', definition: 'Islandsk og færøysk — nordiske språk som ikke er gjensidig forståelige med skandinavisk.' },
    { term: 'Nordisk Råd', definition: 'Samarbeidsorgan for de nordiske parlamentene, som blant annet arbeider for nabospråksforståelse.' },
  ],
};

// ============================================================================
// KAPITTEL 7.6: Språk i endring
// LK20: Reflektere over hvordan språk endrer seg over tid og hva som
//        påvirker språkendring
// ============================================================================

export const CHAPTER_NORSK_10_7_6: TextbookChapter = {
  id: 'norsk-10-7-6',
  courseId: 'norsk-10',
  chapterNumber: '7.6',
  title: 'Språk i endring',
  description: 'Lær om hvordan norsk endrer seg i dag, hvilken rolle engelsk, teknologi og sosiale medier spiller, og reflekter over hva som er «godt» og «dårlig» språk.',
  estimatedMinutes: 70,
  competenceGoals: [
    'reflektere over hvordan språk endrer seg over tid og hva som påvirker språkendring',
    'drøfte forholdet mellom norsk og engelsk i dagens samfunn',
    'vurdere språkholdninger og reflektere over hva som er «riktig» og «galt» i språk',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-7-6-intro',
      type: 'text',
      content: `## Språk i endring: Norsk i dag og i morgen

Du leste nettopp om hvordan norsk har endret seg fra norrønt gjennom dansketiden til bokmål og nynorsk. Men språkendringen stopper ikke der — den pågår akkurat nå, mens du leser dette.

Tenk på språket ditt eget. Du bruker sannsynligvis ord som besteforeldrene dine aldri har hørt: «cringe», «ghoste», «flexe», «slay». Du skriver meldinger med forkortelser, emojier og uten stor bokstav. Du bytter mellom norsk og engelsk midt i en setning uten å tenke over det.

Er dette et tegn på at norsk «forfaller»? Eller er det bare naturlig språkutvikling — det samme som har skjedd i tusen år, bare i en ny form?

I dette kapittelet skal du lære om:
- Hvordan norsk endrer seg akkurat nå
- Hvilken rolle **engelsk** spiller i norsk språkutvikling
- Hvordan **teknologi og sosiale medier** påvirker språket
- Hva språkforskere mener om «riktig» og «galt» språk
- Hva som skjer med norsk i fremtiden

Dette er kanskje det viktigste kapittelet i hele temaet om språkhistorie — fordi det handler om **ditt** språk, **din** tid og de valgene **du** gjør hver dag.`,
    },

    // ========== DEFINISJON: SPRÅKENDRING ==========
    {
      id: 'norsk-10-7-6-def-1',
      type: 'definition',
      title: 'Språkendring',
      content: `**Språkendring** er den naturlige prosessen der et språk forandrer seg over tid. Alle levende språk endrer seg — bare døde språk (som latin) står stille.

**Typer språkendring:**
- **Lydendring:** Uttalen forandrer seg (f.eks. «hv»-lyden i «hvem» forsvinner hos mange unge)
- **Ordforrådsendring:** Nye ord kommer inn, gamle forsvinner (f.eks. «laptop» erstatter «bærbar datamaskin»)
- **Grammatisk endring:** Bøyningsformer og setningsstruktur endrer seg
- **Betydningsendring:** Ord endrer betydning (f.eks. «flink» betydde opprinnelig «rask», nå betyr det «dyktig»)

**Årsaker til språkendring:**
- Kontakt med andre språk (lånord fra engelsk)
- Teknologiske endringer (nye ting trenger nye ord)
- Sosiale endringer (holdninger og normer endrer seg)
- Naturlig forenkling over tid (komplekse former blir enklere)
- Bevisst språkpolitikk (rettskrivningsreformer)

**Viktig prinsipp:**
Språkendring er **ikke det samme som språkforfall**. Når eldre klager over at «ungdommen ødelegger språket», sier de det samme som folk sa for 100 år siden, 200 år siden og 1000 år siden. Språkendring er naturlig og uunngåelig — det er et tegn på at språket lever.`,
    },

    // ========== EKSEMPEL: NORSK I ENDRING ==========
    {
      id: 'norsk-10-7-6-example-1',
      type: 'example',
      title: 'Eksempel: Ord som har endret betydning',
      problem: `Disse norske ordene betyr noe helt annet i dag enn de gjorde opprinnelig. Kan du gjette den opprinnelige betydningen?

1. **Flink** — i dag: dyktig
2. **Stue** — i dag: rom i huset
3. **Kone** — i dag: gift kvinne
4. **Gift** — i dag: å ha inngått ekteskap / en farlig substans
5. **Ting** — i dag: gjenstand

Hva betydde disse ordene opprinnelig?`,
      solution: `1. **Flink** — opprinnelig «rask, hurtig» (norrønt «fljótr»). I dag betyr det «dyktig» eller «god til noe».

2. **Stue** — opprinnelig «oppvarmet rom» eller «badstue» (fra gammelnorsk «stuga/stofa»). I dag er det et vanlig rom.

3. **Kone** — opprinnelig «kvinne» generelt (norrønt «kona»). Alle kvinner var «koner», ikke bare gifte. I dag betyr det spesifikt «gift kvinne/ektefelle».

4. **Gift** — de to betydningene har faktisk ulik opprinnelse:
   - «Gift» (ekteskap) — fra norrønt «gipta» (å gi bort, overdra)
   - «Gift» (farlig stoff) — fra tysk «Gift» (gave, men senere: farlig stoff)

5. **Ting** — opprinnelig en «forsamling der folk møttes for å diskutere lover og konflikter» (norrønt «þing»). Stortinget bærer fremdeles denne betydningen. I dag betyr «ting» i dagligtalen bare «gjenstand».

**Lærdommen:** Ordenes betydning «vandrer» over tid. Det er en av de vanligste formene for språkendring.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'norsk-10-7-6-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-6-ex-1',
        number: '7.34',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken påstand om språkendring er riktig?',
        options: [
          {
            id: 'a',
            text: 'Språkendring er et moderne fenomen som startet med internett',
            isCorrect: false,
            feedback: 'Feil. Språkendring har pågått i tusenvis av år. Fra norrønt til moderne norsk er det over tusen år med kontinuerlig endring.',
          },
          {
            id: 'b',
            text: 'Språkendring er naturlig og skjer i alle levende språk til alle tider',
            isCorrect: true,
            feedback: 'Riktig! Alle levende språk endrer seg. Bare døde språk (som latin) forblir uendret.',
          },
          {
            id: 'c',
            text: 'Språkendring er alltid negativt og bør stoppes',
            isCorrect: false,
            feedback: 'Feil. Språkendring er verken positiv eller negativ — den er naturlig. Dessuten er den umulig å stoppe helt.',
          },
          {
            id: 'd',
            text: 'Språkendring skjer bare i grammatikken, ikke i ordforrådet',
            isCorrect: false,
            feedback: 'Feil. Språkendring skjer på alle nivåer: lyd, grammatikk, ordforråd og betydning.',
          },
        ],
        solution: 'Alternativ B er riktig. Språkendring er naturlig og universell.',
      },
    },

    // ========== ENGELSK PÅVIRKNING ==========
    {
      id: 'norsk-10-7-6-engelsk',
      type: 'text',
      content: `## Engelsk påvirkning: «Domenetap» og lånord

Den kanskje mest debatterte språkendringen i Norge i dag er den massive innflytelsen fra **engelsk**. Engelske ord og uttrykk strømmer inn i norsk i et tempo vi aldri har sett før.

### Hvorfor?
- **Medier og underholdning:** Filmer, serier, musikk, YouTube, TikTok, gaming — det meste er på engelsk
- **Teknologi:** De fleste teknologibegreper kommer fra engelsk: «laptop», «software», «app», «streaming»
- **Næringsliv:** Mange bedrifter bruker engelsk som arbeidsspråk, også i Norge
- **Akademia:** Mye forskning og undervisning foregår på engelsk
- **Sosiale medier:** Mye av kommunikasjonen foregår på engelskspråklige plattformer

### Eksempler på engelske lånord i norsk
- **Direkte lån:** «cool», «date», «fake», «chill», «random»
- **Tilpassede lån:** «å streame» (fra «to stream»), «å ghoste» (fra «to ghost»), «å tagge» (fra «to tag»)
- **Kodeveksling:** «Det var literally den mest cringe tingen ever»

### Domenetap
Det kanskje mest alvorlige er det forskere kaller **domenetap** — at norsk mister hele fagområder til engelsk. Innen teknologi, vitenskap og næringsliv brukes engelsk stadig mer. Noen frykter at norsk kan bli et språk man bare bruker hjemme og i hverdagen, mens engelsk tar over i alle profesjonelle sammenhenger.

### En parallell til dansketiden?
Noen språkforskere trekker en parallell til dansketiden: den gang ble dansk skriftspråk i Norge, mens norsk bare overlevde som talespråk. Kan det samme skje med engelsk? Kan norsk bli et «hjemmespråk» mens engelsk tar over i arbeidsliv og utdanning?

Andre mener at sammenligningen halter. Norge er et selvstendig land med sterk nasjonal identitet. Norsk brukes i alle offentlige sammenhenger, i mediene og i skolen. Trusselen fra engelsk er reell, men ikke sammenlignbar med dansketiden.`,
    },

    // ========== DEFINISJON: DOMENETAP ==========
    {
      id: 'norsk-10-7-6-def-2',
      type: 'definition',
      title: 'Domenetap',
      content: `**Domenetap** betyr at et språk mister hele fagområder (domener) til et annet språk.

**Eksempler på mulig domenetap for norsk:**
- **Akademia:** Mye forskning skrives og publiseres på engelsk
- **Næringsliv:** Mange norske bedrifter bruker engelsk internt
- **Teknologi:** De fleste teknologibegreper er engelske
- **Populærkultur:** Musikk, film, gaming og sosiale medier er dominert av engelsk

**Hvorfor er det et problem?**
Hvis norsk ikke lenger brukes til å snakke om vitenskap, teknologi og næringsliv, mister språket ordforråd og presisjon på disse områdene. Over tid kan det føre til at norsk oppleves som «utilstrekkelig» for avanserte tema — og da er veien kort til at enda flere går over til engelsk.

**Motstrategier:**
- Språkrådet arbeider med å lage norske ord for nye begreper
- Norske lærebøker og fagterminologi bidrar til at norsk forblir et komplett språk
- Bevisst språkbruk — å velge norsk når det er mulig`,
    },

    // ========== EKSEMPEL: SPRÅK OG SOSIALE MEDIER ==========
    {
      id: 'norsk-10-7-6-example-2',
      type: 'example',
      title: 'Eksempel: Hvordan sosiale medier endrer språket',
      problem: `Se på disse eksemplene på moderne ungdomsspråk i meldinger og sosiale medier. Hva er spesielt med språket her?

**Eksempel 1 (Snapchat-melding):**
«hei kan du sende den tingen vi snakka om istad?? trenger den til imorgen»

**Eksempel 2 (Instagram-kommentar):**
«OMG dette er literally the best ting ever!! slayyy»

**Eksempel 3 (Discord-melding):**
«noen som vil game? er online nå, kan hoste en server»

Analyser hvert eksempel: Hva er typisk for skriftspråket i sosiale medier?`,
      solution: `**Eksempel 1 — Snapchat:**
- Ingen stor bokstav i begynnelsen av setningen
- Ingen punktum, men dobbelt spørsmålstegn for å forsterke
- «istad» (i stad) og «imorgen» (i morgen) — sammenskrivinger som bryter med rettskrivningen
- Uformelt, muntlig preg — det ligner mer på tale enn tradisjonell skrift

**Eksempel 2 — Instagram:**
- **Kodeveksling:** Norsk og engelsk blandes fritt: «literally the best ting ever»
- **Engelske uttrykk:** «OMG», «slay» — hentet fra engelsk internettkultur
- Ingen tegnsetting mellom språkene — byttet skjer sømløst
- Emosjonelt og forsterkende

**Eksempel 3 — Discord:**
- **Teknologilånord:** «game», «online», «hoste en server» — engelske ord med norsk grammatikk
- «å game» og «å hoste» er engelske verb tilpasset norsk bøyning
- Uformelt, men funksjonelt og tydelig

**Fellestrekk:**
1. **Uformell skrift** som ligner muntlig tale
2. **Norsk-engelsk kodeveksling** som naturlig del av kommunikasjonen
3. **Liten bokstav og minimal tegnsetting** — effektivitet er viktigere enn formelle regler
4. **Nye ord og uttrykk** som sprer seg raskt gjennom sosiale medier

**Viktig:** Dette er ikke «feil norsk» — det er en egen sjanger tilpasset mediet. De samme personene kan skrive formelt korrekt når situasjonen krever det. Det handler om **kodeveksling**.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'norsk-10-7-6-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-6-ex-2',
        number: '7.35',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er «domenetap»?',
        options: [
          {
            id: 'a',
            text: 'At et ord mister sin opprinnelige betydning',
            isCorrect: false,
            feedback: 'Feil. Det er betydningsendring, ikke domenetap. Domenetap handler om hele fagområder, ikke enkeltord.',
          },
          {
            id: 'b',
            text: 'At et språk mister hele fagområder til et annet språk',
            isCorrect: true,
            feedback: 'Riktig! Domenetap betyr at norsk mister bruksområder til engelsk — for eksempel innen teknologi, vitenskap eller næringsliv.',
          },
          {
            id: 'c',
            text: 'At internettdomener (.no) forsvinner',
            isCorrect: false,
            feedback: 'Feil. Domenetap har ingenting med internettdomener å gjøre — det handler om språklige bruksområder.',
          },
          {
            id: 'd',
            text: 'At dialekter forsvinner fra bestemte regioner',
            isCorrect: false,
            feedback: 'Feil. Det kalles dialektdød eller regionalisering, ikke domenetap. Domenetap handler om at et helt språk mister bruksområder.',
          },
        ],
        solution: 'Alternativ B er riktig. Domenetap betyr at et språk mister fagområder til et annet språk.',
      },
    },

    // ========== SPRÅKHOLDNINGER ==========
    {
      id: 'norsk-10-7-6-holdninger',
      type: 'text',
      content: `## Språkholdninger: Hva er «godt» og «dårlig» språk?

«Ungdommen kan ikke norsk lenger!» «De ødelegger språket med engelske ord!» «Ingen bruker komma riktig!»

Slike klager hører du hele tiden. Men hva sier egentlig språkforskerne?

### Deskriptiv vs. preskriptiv tilnærming
Språkforskere skiller mellom to tilnærminger til språk:

- **Preskriptiv** (foreskrivende): Det finnes regler for hva som er riktig og galt. Grammatikk skal følges. Rettskrivning er viktig.
- **Deskriptiv** (beskrivende): Vi beskriver hvordan folk faktisk bruker språket, uten å dømme. Språkendring er naturlig.

De fleste språkforskere har en **deskriptiv** tilnærming. De mener at alle språkvarianter (dialekter, sosiolekter, ungdomsspråk) er fullverdige kommunikasjonssystemer. Når folk klager over «dårlig» språk, handler det egentlig om **holdninger**, ikke om selve språket.

### Men regler er viktige — i riktig kontekst
Dette betyr ikke at rettskrivning og grammatikk er uviktig. I formelle sammenhenger — eksamen, jobbsøknader, offentlige dokumenter — er det viktig å følge skriftspråksnormene. Men i en Snapchat-melding til en venn? Da gjelder andre regler.

Poenget er: det finnes ikke «ett riktig norsk». Det finnes ulike varianter som passer i ulike situasjoner. En god språkbruker behersker **flere varianter** og kan veksle mellom dem.

### Historisk perspektiv
Klager over «dårlig» ungdomsspråk er ikke nytt:
- På 1800-tallet klaget folk over at norsk ble «ødelagt» av dansk
- På 1900-tallet klaget folk over at radikale bokmålsformer var «stygt norsk»
- På 2000-tallet klager folk over at engelsk «invaderer» norsk

Mønsteret er det samme: eldre generasjoner bekymrer seg for at de unges språk er «feil». Men språket utvikler seg, generasjon etter generasjon, uten å «forfalle» — det bare **endrer seg**.`,
    },

    // ========== DEFINISJON: SPRÅKNORMERING ==========
    {
      id: 'norsk-10-7-6-def-3',
      type: 'definition',
      title: 'Språknormering og Språkrådet',
      content: `**Språknormering** betyr å fastsette offisielle regler for skriftspråket — hva som er «lov» å skrive i bokmål og nynorsk.

**Språkrådet** er det norske statens organ for språknormering. Språkrådets oppgaver:
- Fastsette rettskrivningsregler for bokmål og nynorsk
- Gi råd om god språkbruk
- Lage norske ord for nye begreper (i stedet for engelske lånord)
- Fremme norsk som et komplett og samfunnsbærende språk
- Beskytte nynorsk som det minst brukte skriftspråket
- Verne om samiske språk og norsk tegnspråk

**Eksempler på Språkrådets arbeid:**
- Foreslå norske erstatninger for engelske ord: «nettsky» for «cloud», «strømming» for «streaming»
- Godkjenne nye norske ord: «selfie» → «sjølbilde» (valgfritt)
- Vurdere hva som skal være tillatt i skriftspråket

**Viktig:** Språkrådet bestemmer over **skriftspråket**, ikke **talespråket**. Du kan snakke akkurat som du vil — det er ingen «språkpoliti» som bestemmer hvordan du skal snakke.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'norsk-10-7-6-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-6-ex-3',
        number: '7.36',
        type: 'classic',
        difficulty: 'medium',
        task: 'Språkrådet foreslår norske erstatninger for engelske lånord. Men ikke alle slår an.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke av disse norske forslagene tror du folk faktisk bruker? Begrunn.',
            solution: 'Svaret avhenger av elevens vurdering. «Nettside» har slått an, «strømming» brukes delvis, men «sjølbilde» for «selfie» brukes nesten aldri. Generelt slår norske forslag best an når de kommer tidlig (før det engelske ordet etablerer seg) og er korte.',
          },
          {
            label: 'b',
            task: 'Foreslå tre engelske ord du bruker i hverdagen, og prøv å lage norske erstatninger.',
            solution: 'Eksempel: «cringe» → «flaut/pinlig», «streame» → «strømme», «ghoste» → «overse/ignorere». En god besvarelse viser kreativitet og forståelse for at norske alternativer må være korte og naturlige for å slå an.',
          },
        ],
        hints: ['Tenk på hvilke engelske ord som allerede har gode norske alternativer — og hvilke som ikke har det'],
        solution: 'En god besvarelse viser forståelse for at noen lånord er lette å erstatte (fordi det finnes gode norske alternativer) mens andre er vanskeligere.',
        allowsUpload: true,
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'norsk-10-7-6-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-6-ex-4',
        number: '7.37',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva mener de fleste språkforskere om språkendring?',
        options: [
          {
            id: 'a',
            text: 'Språkendring er alltid negativt og bør motarbeides',
            isCorrect: false,
            feedback: 'Feil. De fleste språkforskere ser på språkendring som naturlig — verken positivt eller negativt i seg selv.',
          },
          {
            id: 'b',
            text: 'Språkendring er naturlig, og alle språkvarianter er fullverdige',
            isCorrect: true,
            feedback: 'Riktig! Språkforskere har en deskriptiv tilnærming: de beskriver hvordan folk bruker språket, uten å dømme varianter som «bedre» eller «dårligere».',
          },
          {
            id: 'c',
            text: 'Bare endringer godkjent av Språkrådet er akseptable',
            isCorrect: false,
            feedback: 'Feil. Språkrådet normerer skriftspråket, men språkendring i talespråk er naturlig og utenfor noens kontroll.',
          },
          {
            id: 'd',
            text: 'Engelsk bør forbys i norsk for å beskytte språket',
            isCorrect: false,
            feedback: 'Feil. Språkforskere ønsker ikke å forby noe — de mener lånord er en naturlig del av alle språk. Men bevisst bruk av norsk er viktig.',
          },
        ],
        solution: 'Alternativ B er riktig. Språkforskere ser på språkendring som naturlig.',
      },
    },

    // ========== NORSK I FREMTIDEN ==========
    {
      id: 'norsk-10-7-6-fremtiden',
      type: 'text',
      content: `## Norsk i fremtiden: Hva skjer?

Hva vil norsk se ut om 50 eller 100 år? Ingen vet sikkert, men vi kan identifisere noen trender:

### Sannsynlige endringer
- **Mer engelske lånord** — men norsk grammatikk vil fortsatt dominere
- **Dialektutjevning** — lokale trekk forsvinner, regionale varianter dominerer
- **Enklere rettskrivning** — kanskje med færre valgfrie former
- **Nye ord** for nye fenomener (teknologi, klima, samfunnsendringer)
- **Fortsatt to skriftspråk** — men muligens med enda større fleksibilitet

### Vil norsk overleve?
Ja. Norsk er et sterkt språk med ca. 5 millioner morsmålsbrukere, full støtte fra staten, obligatorisk i skolen og brukt i alle samfunnsområder. Språk som er truet, er gjerne små minoritetsspråk uten statlig støtte — norsk er langt fra den kategorien.

Men norsk trenger **bevisst vedlikehold**:
- Norsk må brukes i akademia og næringsliv, ikke bare i hverdagen
- Norske fagtermer må utvikles for nye fagområder
- Unge må eksponeres for norsk kultur og litteratur
- Nynorsk trenger ekstra vern som det minst brukte skriftspråket

### Du er en del av historien
Hvert ord du sier, hver melding du skriver, hvert valg du gjør mellom norsk og engelsk — alt dette er med på å forme det norske språkets fremtid. Du er ikke bare en passiv bruker av språket. Du er en aktiv deltaker i en tusenårig språkhistorie som fortsetter akkurat nå.

Norsk begynte med norrøne runer risset inn i stein. Det overlevde dansketiden, ble to skriftspråk, tok opp tusenvis av lånord — og er fremdeles i live. Det vil fortsette å endre seg, akkurat som det alltid har gjort. Og det er ikke noe å bekymre seg over. Det er noe å feire.`,
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'norsk-10-7-6-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-6-ex-5',
        number: '7.38',
        type: 'classic',
        difficulty: 'medium',
        task: `Studer ditt eget språk i løpet av én dag. Legg merke til:

a) Hvor mange engelske ord eller uttrykk bruker du i løpet av en dag? Skriv ned minst fem eksempler.
b) I hvilke situasjoner bruker du engelsk (eller engelske ord) i stedet for norsk?
c) Kunne du ha brukt norske ord i stedet? Hvorfor/hvorfor ikke?`,
        hints: [
          'Tenk på meldinger, samtaler, sosiale medier, gaming, musikk',
          'Mange engelske ord brukes så naturlig at du kanskje ikke legger merke til dem',
        ],
        solution: 'En god besvarelse viser selvbevissthet om egen språkbruk, identifiserer konkrete eksempler, og reflekterer over når engelske ord er nødvendige (ingen norsk erstatning) og når de er valg (det finnes norske alternativer).',
        allowsUpload: true,
        isInvestigation: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-7-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelpunkter
- **Språkendring** er naturlig og skjer i alle levende språk — det er ikke det samme som «språkforfall»
- **Engelsk** påvirker norsk kraftig gjennom medier, teknologi og ungdomskultur
- **Domenetap** — at norsk mister hele fagområder til engelsk — er en reell trussel
- **Sosiale medier** skaper nye skrivenormer: uformelt, med kodeveksling og minimal tegnsetting
- Språkforskere skiller mellom **preskriptiv** (regler) og **deskriptiv** (beskrivende) tilnærming til språk
- **Språkrådet** normerer skriftspråket og arbeider for å bevare norsk som komplett språk
- Norsk er et **sterkt språk** som ikke er truet, men som trenger bevisst vedlikehold

### Viktige sammenhenger
- Engelskpåvirkningen i dag ligner på den danske/tyske påvirkningen i dansketiden — men i en helt annen kontekst
- Klager over «dårlig» ungdomsspråk har fulgt norsk gjennom hele historien
- Du er en aktiv deltaker i norsk språkhistorie — valgene du gjør påvirker språkets fremtid`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-7-6-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-6-ex-6',
        number: '7.39',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Språk i endring.

Skriv en argumenterende tekst (250–350 ord) der du drøfter dette spørsmålet:

«Er den engelske påvirkningen på norsk et problem, eller er det bare naturlig språkutvikling?»

Bruk kunnskap fra hele kapittel 7 (språkhistorie og språkmangfold) til å belyse spørsmålet. Inkluder:
a) En sammenligning med tidligere språkpåvirkning (f.eks. dansketiden)
b) Konkrete eksempler på engelsk påvirkning
c) Argumenter for og imot at dette er et problem
d) Ditt eget begrunnet standpunkt`,
        hints: [
          'Trekk paralleller til dansketiden — er det likheter eller forskjeller?',
          'Bruk begrepet «domenetap» i argumentasjonen',
          'Husk å skille mellom lånord (naturlig) og domenetap (potensielt problematisk)',
        ],
        solution: 'En god besvarelse kobler til språkhistorien, bruker fagbegreper (domenetap, lånord, kodeveksling), gir konkrete eksempler, veier argumenter og tar et begrunnet standpunkt. Lånord er naturlig (norsk har alltid tatt opp ord fra andre språk), men domenetap er potensielt alvorlig (norsk bør brukes i alle sammenhenger for å forbli et komplett språk).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-7-6-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-7-6-ex-7',
        number: '7.40',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Kapittelavsluttende oppgave: Hele reisen.

Du har nå lært om norsk språkhistorie fra norrønt til i dag. Lag en tidslinje (tekst eller visuell) som viser de viktigste hendelsene i norsk språkhistorie. Tidslinjen skal inkludere minst 8 hendelser med korte forklaringer.

Tips: Start med norrønt/vikingtiden og avslutt med språk i endring i dag. Bruk kunnskap fra alle kapitlene (7.1–7.6).`,
        hints: [
          'Viktige punkter: norrønt, svartedauden, dansketiden, reformasjonen, 1814, Aasen, Knudsen, rettskrivingsreformer, samnorsk, moderne påvirkning',
          'For hvert punkt: årstall + kort forklaring (1–2 setninger)',
          'Du kan tegne en visuell tidslinje eller skrive en liste',
        ],
        solution: 'En god tidslinje inkluderer nøkkelhendelser som: norrønt (700–1350), svartedauden (1349), dansketiden (1380–1814), reformasjonen (1536), Norges grunnlov (1814), Aasens landsmål (1850-tallet), Knudsens fornorsking, rettskrivingsreformer (1907/1917/1938), samnorsk-prosjektet og dets fall (2002), språkloven (2022), og engelsk påvirkning i dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Språkendring', definition: 'Den naturlige prosessen der et språk forandrer seg over tid i lyd, grammatikk, ordforråd og betydning.' },
    { term: 'Domenetap', definition: 'At et språk mister hele fagområder til et annet språk, f.eks. at norsk mister akademia til engelsk.' },
    { term: 'Lånord', definition: 'Ord som er hentet fra et annet språk og tilpasset norsk, f.eks. «å streame» fra engelsk «to stream».' },
    { term: 'Preskriptiv vs. deskriptiv', definition: 'To tilnærminger til språk: preskriptiv fastsetter regler, deskriptiv beskriver faktisk bruk.' },
    { term: 'Språkrådet', definition: 'Norges statlige organ for språknormering som fastsetter regler for bokmål og nynorsk.' },
    { term: 'Kodeveksling', definition: 'Å veksle mellom ulike språk eller språkvarianter, f.eks. mellom norsk og engelsk i en setning.' },
  ],
};

// ============================================================================
// Eksporter alle kapitler i del 5
// ============================================================================

export const NORSK_10_DEL5_CHAPTERS = [
  CHAPTER_NORSK_10_7_1,
  CHAPTER_NORSK_10_7_2,
  CHAPTER_NORSK_10_7_3,
  CHAPTER_NORSK_10_7_4,
  CHAPTER_NORSK_10_7_5,
  CHAPTER_NORSK_10_7_6,
];
