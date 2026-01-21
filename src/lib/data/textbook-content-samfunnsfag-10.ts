/**
 * Tekstbok innhold for Samfunnsfag 10. klasse
 *
 * Folger LK20 lareplan for samfunnsfag ungdomstrinn.
 * Avsluttende ar med fokus pa eksamensforberedelse og aktuelle samfunnstemaer.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Demokrati og medborgerskap
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_1: TextbookChapter = {
  id: 'samfunnsfag-10-1',
  courseId: 'samfunnsfag-10',
  chapterNumber: '1',
  title: 'Demokrati og medborgerskap',
  description: 'Laer om demokratiets grunnprinsipper og din rolle som medborger.',
  estimatedMinutes: 55,
  competenceGoals: [
    'reflektere over hva det innebærer å være medborger, og ulike former for demokratisk deltakelse',
  ],
  content: [
    {
      id: 'samfunnsfag-10-1-intro',
      type: 'text',
      content: `## Hva er demokrati?

Demokrati betyr folkestyre - at folket selv bestemmer hvordan samfunnet skal styres. Norge er et representativt demokrati, der vi velger representanter som tar beslutninger på våre vegne.

**Demokratiets grunnprinsipper:**
- Frie og rettferdige valg
- Ytringsfrihet og pressefrihet
- Rettssikkerhet og likhet for loven
- Maktfordeling mellom statsmaktene
- Beskyttelse av mindretall`,
    },
    {
      id: 'samfunnsfag-10-1-def-1',
      type: 'definition',
      title: 'Demokratiske begreper',
      content: `**Direkte demokrati:**
Folket stemmer selv over alle viktige saker. Eksempel: Folkeavstemninger, som EU-avstemningen i 1994.

**Representativt demokrati:**
Folket velger representanter som tar beslutninger. Eksempel: Stortingsvalg hvert 4. år.

**Maktfordelingsprinsippet:**
Statsmakten deles i tre:
- **Storting** (lovgivende makt) - vedtar lover
- **Regjering** (utøvende makt) - setter lovene ut i livet
- **Domstolene** (dømmende makt) - tolker lovene

**Medborgerskap:**
Å være en aktiv deltaker i samfunnet - ikke bare ha rettigheter, men også ta ansvar for fellesskapet.`,
    },
    {
      id: 'samfunnsfag-10-1-example-1',
      type: 'example',
      title: 'Eksempel: Demokratisk deltakelse',
      problem: `Maria er 16 år og engasjert i klimasaken. Hvordan kan hun delta i demokratiet selv om hun ikke har stemmerett ennå?`,
      solution: `**Marias muligheter for demokratisk deltakelse:**

1. **Organisasjonsliv:** Melde seg inn i ungdomsparti eller miljøorganisasjon
2. **Demonstrasjoner:** Delta i lovlige markeringer og protester
3. **Sosiale medier:** Dele informasjon og meninger
4. **Påvirkning:** Skrive leserinnlegg, kontakte politikere
5. **Skolepolitikk:** Stille til elevråd, påvirke skolens miljøtiltak
6. **Frivillighet:** Bidra i lokale aksjoner

Maria har mange muligheter til å påvirke samfunnet selv uten stemmerett. Dette viser at demokratisk deltakelse handler om mer enn bare å stemme.`,
    },
    {
      id: 'samfunnsfag-10-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Match begrepet med riktig forklaring:',
        subTasks: [
          {
            label: 'a',
            task: 'Maktfordelingsprinsippet',
            solution: 'Statsmakten deles mellom Storting, regjering og domstoler',
            multipleChoiceOptions: [
              'Statsmakten deles mellom Storting, regjering og domstoler',
              'Makten ligger hos kongen',
              'Alle stemmer direkte over alle saker',
              'Kommunene bestemmer alt selv',
            ],
          },
          {
            label: 'b',
            task: 'Representativt demokrati',
            solution: 'Folket velger representanter som tar beslutninger',
            multipleChoiceOptions: [
              'Folket velger representanter som tar beslutninger',
              'Bare de rikeste får stemme',
              'Kongen utnevner alle politikere',
              'Alle beslutninger tas av domstolene',
            ],
          },
          {
            label: 'c',
            task: 'Medborgerskap',
            solution: 'Å være en aktiv deltaker i samfunnet med rettigheter og ansvar',
            multipleChoiceOptions: [
              'Å være en aktiv deltaker i samfunnet med rettigheter og ansvar',
              'Å bo i en by',
              'Å ha norsk pass',
              'Å betale skatt',
            ],
          },
        ],
        solution: 'a) Maktfordelingsprinsippet, b) Representativt demokrati, c) Medborgerskap',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Drøft: Hvilke fordeler og ulemper har direkte demokrati sammenlignet med representativt demokrati?',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn to fordeler med direkte demokrati.',
            solution: 'Folket får direkte innflytelse, økt engasjement og legitimitet',
          },
          {
            label: 'b',
            task: 'Nevn to ulemper med direkte demokrati.',
            solution: 'Tidkrevende, krever høy kompetanse hos alle, risiko for populistiske vedtak',
          },
          {
            label: 'c',
            task: 'Hvorfor har Norge valgt representativt demokrati?',
            solution: 'Praktisk i et stort samfunn, representantene kan spesialisere seg, mer effektivt',
          },
        ],
        hints: ['Tenk på tid, kompetanse og praktiske hensyn'],
        solution: 'Direkte demokrati gir mer direkte medvirkning, men er upraktisk i store samfunn med komplekse saker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er maktfordelingsprinsippet viktig for demokratiet?',
        hints: ['Tenk på hva som kan skje hvis én instans har all makt'],
        solution: 'Maktfordeling hindrer maktmisbruk ved at de tre statsmaktene kontrollerer hverandre. Ingen kan vedta, gjennomføre og dømme alene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'List opp minst fem måter du kan delta i demokratiet på - både formelle og uformelle.',
        hints: ['Tenk utover bare valg'],
        solution: 'Eksempler: Stemme ved valg, delta i parti, stille til valg, demonstrere, skrive leserinnlegg, signere opprop, delta i elevråd, frivillighet, delta i organisasjoner, kontakte politikere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv et kort debattinnlegg (150-200 ord) om hvorvidt stemmerettsalderen bør senkes til 16 år.',
        hints: ['Ha en tydelig mening', 'Bruk argumenter og eksempler'],
        solution: 'Innlegget bør ha en klar påstand, relevante argumenter og konklusjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Menneskerettigheter
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_2: TextbookChapter = {
  id: 'samfunnsfag-10-2',
  courseId: 'samfunnsfag-10',
  chapterNumber: '2',
  title: 'Menneskerettigheter',
  description: 'Forstå menneskerettighetenes betydning og hvordan de beskyttes.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og beskrive hvordan menneske- og urfolksrettigheter er nedfelt i nasjonale og internasjonale lover',
  ],
  content: [
    {
      id: 'samfunnsfag-10-2-intro',
      type: 'text',
      content: `## Menneskerettigheter

Menneskerettigheter er grunnleggende rettigheter som alle mennesker har, uavhengig av hvem de er, hvor de bor, eller hva de tror på. De er universelle, udelelige og uavhendelige.

**Historisk bakgrunn:**
FNs verdenserklæring om menneskerettigheter ble vedtatt i 1948, etter andre verdenskrig og Holocaust. Verden ønsket å sikre at slike grusomheter aldri skulle skje igjen.

**Hovedkategorier:**
- Sivile og politiske rettigheter
- Økonomiske, sosiale og kulturelle rettigheter
- Grupperettigheter`,
    },
    {
      id: 'samfunnsfag-10-2-def-1',
      type: 'definition',
      title: 'Viktige menneskerettigheter',
      content: `**Sivile og politiske rettigheter:**
- Retten til liv
- Forbud mot tortur
- Ytringsfrihet
- Religionsfrihet
- Rettferdig rettssak
- Stemmerett

**Økonomiske, sosiale og kulturelle rettigheter:**
- Retten til utdanning
- Retten til helse
- Retten til arbeid
- Retten til en tilfredsstillende levestandard
- Retten til deltakelse i kulturlivet

**Barns rettigheter (FNs barnekonvensjon):**
- Barnets beste skal være et grunnleggende hensyn
- Retten til å bli hørt
- Retten til identitet
- Beskyttelse mot vold og utnyttelse

**Urfolks rettigheter (ILO-konvensjon 169):**
- Rett til land og naturressurser
- Rett til selvbestemmelse
- Rett til å bevare språk og kultur`,
    },
    {
      id: 'samfunnsfag-10-2-example-1',
      type: 'example',
      title: 'Eksempel: Menneskerettighetsbrudd',
      problem: `Et land forbyr alle aviser å kritisere regjeringen. Hvilke menneskerettigheter brytes?`,
      solution: `**Rettigheter som brytes:**

1. **Ytringsfriheten:** Journalister og borgere kan ikke uttrykke sine meninger fritt.

2. **Pressefriheten:** Media kan ikke oppfylle sin rolle som "vaktbikkje".

3. **Retten til informasjon:** Befolkningen får ikke tilgang til kritisk informasjon.

**Konsekvenser:**
- Korrupsjon kan skjules
- Maktmisbruk avdekkes ikke
- Demokratiet undergraves
- Befolkningen kan ikke ta informerte valg

Dette viser hvordan menneskerettigheter henger sammen og støtter demokratiet.`,
    },
    {
      id: 'samfunnsfag-10-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Kategoriser disse rettighetene:',
        subTasks: [
          {
            label: 'a',
            task: 'Retten til utdanning',
            solution: 'Økonomisk, sosial og kulturell rettighet',
            multipleChoiceOptions: [
              'Økonomisk, sosial og kulturell rettighet',
              'Sivil og politisk rettighet',
              'Grupperettighet',
              'Miljørettighet',
            ],
          },
          {
            label: 'b',
            task: 'Stemmerett',
            solution: 'Sivil og politisk rettighet',
            multipleChoiceOptions: [
              'Sivil og politisk rettighet',
              'Økonomisk rettighet',
              'Kulturell rettighet',
              'Barnerettighet',
            ],
          },
          {
            label: 'c',
            task: 'Samenes rett til reindrift',
            solution: 'Urfolksrettighet/grupperettighet',
            multipleChoiceOptions: [
              'Urfolksrettighet/grupperettighet',
              'Sivil rettighet',
              'Økonomisk rettighet',
              'Religiøs rettighet',
            ],
          },
        ],
        solution: 'a) Økonomisk/sosial/kulturell, b) Sivil/politisk, c) Urfolksrettighet',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor menneskerettighetene kalles universelle, udelelige og uavhendelige.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr universelle rettigheter?',
            solution: 'De gjelder for alle mennesker, uavhengig av nasjonalitet, kultur eller religion.',
          },
          {
            label: 'b',
            task: 'Hva betyr udelelige rettigheter?',
            solution: 'Alle rettigheter henger sammen og er like viktige - man kan ikke velge bort noen.',
          },
          {
            label: 'c',
            task: 'Hva betyr uavhendelige rettigheter?',
            solution: 'Man kan ikke miste eller gi fra seg menneskerettighetene sine.',
          },
        ],
        solution: 'Universelle = gjelder alle, Udelelige = henger sammen, Uavhendelige = kan ikke tas fra deg',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan er menneskerettighetene beskyttet i Norge?',
        hints: ['Tenk på Grunnloven, lover og domstoler'],
        solution: 'Menneskerettighetene er beskyttet gjennom: Grunnloven (spesielt kapittel E), Menneskerettsloven (gjør konvensjonene til norsk lov), domstolene (kan prøve om lover bryter med rettighetene), Sivilombudet (klageinstans).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg et aktuelt menneskerettighetsbrudd i verden og forklar: Hvilke rettigheter brytes? Hvem er ansvarlig? Hva kan verdenssamfunnet gjøre?',
        hints: ['Følg med i nyhetene', 'Bruk flere kilder'],
        solution: 'Svaret bør identifisere konkrete rettigheter, peke på ansvarlige aktører og vurdere ulike tiltak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft: Kan menneskerettigheter noen ganger komme i konflikt med hverandre? Gi eksempler.',
        hints: ['Tenk på ytringsfrihet vs. vern mot diskriminering'],
        solution: 'Ja, rettigheter kan komme i konflikt. For eksempel kan ytringsfrihet stå mot vern mot hatytringer, eller religionsfrihet mot likestilling. Da må man avveie rettighetene mot hverandre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Forklar samenes stilling som urfolk i Norge. Hvilke særlige rettigheter har de?',
        hints: ['Tenk på Sametinget, språk, land og ressurser'],
        solution: 'Samene er Norges urfolk med særlige rettigheter: Sametinget (folkevalgt organ), rett til samisk språk i offentlig sammenheng, rett til land og naturressurser, rett til å bevare kultur og tradisjonelle næringer som reindrift.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Bærekraftig utvikling
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_3: TextbookChapter = {
  id: 'samfunnsfag-10-3',
  courseId: 'samfunnsfag-10',
  chapterNumber: '3',
  title: 'Bærekraftig utvikling',
  description: 'Forstå utfordringene med bærekraftig utvikling og FNs bærekraftsmål.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og presentere dagsaktuelle tema eller historiske hendingar med utgangspunkt i interessekonfliktar og maktforhold',
  ],
  content: [
    {
      id: 'samfunnsfag-10-3-intro',
      type: 'text',
      content: `## Bærekraftig utvikling

Bærekraftig utvikling betyr at vi dekker dagens behov uten å ødelegge mulighetene for fremtidige generasjoner. Det handler om balansen mellom miljø, økonomi og sosiale forhold.

**De tre dimensjonene:**
- Miljømessig bærekraft - ta vare på naturen
- Økonomisk bærekraft - skape verdier uten å tømme ressurser
- Sosial bærekraft - rettferdig fordeling og gode levekår

**FNs bærekraftsmål:**
I 2015 vedtok FN 17 mål for bærekraftig utvikling som skal nås innen 2030. Disse erstatter tusenårsmålene og gjelder for alle land.`,
    },
    {
      id: 'samfunnsfag-10-3-def-1',
      type: 'definition',
      title: 'FNs bærekraftsmål (utvalg)',
      content: `**Mål 1: Utrydde fattigdom**
Avskaffe all fattigdom i verden.

**Mål 4: God utdanning**
Sikre inkluderende og rettferdig utdanning for alle.

**Mål 5: Likestilling mellom kjønnene**
Oppnå likestilling og styrke jenters og kvinners stilling.

**Mål 10: Mindre ulikhet**
Redusere ulikhet i og mellom land.

**Mål 13: Stoppe klimaendringene**
Handle umiddelbart for å bekjempe klimaendringene.

**Mål 16: Fred, rettferdighet og velfungerende institusjoner**
Fremme fredelige og inkluderende samfunn.

**Viktig:** Målene henger sammen - man kan ikke oppnå ett mål uten å jobbe med de andre.`,
    },
    {
      id: 'samfunnsfag-10-3-example-1',
      type: 'example',
      title: 'Eksempel: Interessekonflikt om vindkraft',
      problem: `Det planlegges vindkraftverk i et naturområde. Hvilke interessekonflikter kan oppstå?`,
      solution: `**Interessenter og deres syn:**

**For vindkraft:**
- Klimaaktivister: Ren energi erstatter fossil energi
- Energiselskaper: Lønnsomt og etterspurt
- Kommunen: Arbeidsplasser og skatteinntekter

**Mot vindkraft:**
- Naturvernere: Ødelegger uberørt natur og dyreliv
- Reindriftsnæring: Forstyrrer reinens beiteområder
- Hytteiere/turister: Støy og visuell forurensning
- Urfolk: Inngrep i tradisjonelle områder

**Interessekonfliktens kjerne:**
Kortsiktig økonomisk gevinst vs. langsiktig naturvern
Klimatiltak vs. lokal naturødeleggelse
Storsamfunnets behov vs. lokale interesser`,
    },
    {
      id: 'samfunnsfag-10-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar de tre dimensjonene av bærekraftig utvikling:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er miljømessig bærekraft?',
            solution: 'Ta vare på naturen, ikke forbruke mer ressurser enn jorden tåler, bevare biologisk mangfold.',
          },
          {
            label: 'b',
            task: 'Hva er økonomisk bærekraft?',
            solution: 'Skape økonomisk vekst uten å tømme ressurser, investere i fornybar teknologi.',
          },
          {
            label: 'c',
            task: 'Hva er sosial bærekraft?',
            solution: 'Rettferdig fordeling, bekjempe fattigdom, sikre menneskerettigheter og gode levekår for alle.',
          },
        ],
        solution: 'De tre dimensjonene må være i balanse for at utviklingen skal være bærekraftig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Velg tre av FNs bærekraftsmål og forklar hvordan de henger sammen.',
        hints: ['Tenk på årsak-virkning', 'Hvordan påvirker ett mål et annet?'],
        solution: 'Eksempel: God utdanning (mål 4) fører til bedre muligheter i arbeidslivet, som reduserer fattigdom (mål 1), og utdannede mennesker tar bedre miljøvalg (mål 13).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Analyser interessekonflikten rundt oljeutvinning i Norge:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem tjener på fortsatt oljeutvinning?',
            solution: 'Oljeselskaper, oljearbeidere, staten (skatteinntekter), leverandørindustri.',
          },
          {
            label: 'b',
            task: 'Hvem mener vi bør slutte med olje?',
            solution: 'Miljøorganisasjoner, klimaforskere, fremtidige generasjoner, utsatte kystsamfunn.',
          },
          {
            label: 'c',
            task: 'Hva er hovedargumentene på hver side?',
            solution: 'For: Arbeidsplasser, velstand, verden trenger energi. Mot: Klimakrise, naturødeleggelse, må omstille nå.',
          },
        ],
        solution: 'Oljekonflikten illustrerer spenningen mellom kortsiktig økonomi og langsiktig bærekraft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva kan du som enkeltperson gjøre for bærekraftig utvikling? List opp minst fem konkrete tiltak.',
        hints: ['Tenk på forbruk, transport, mat, politikk'],
        solution: 'Eksempler: Resirkulere, redusere plastbruk, velge kollektivtransport/sykkel, spise mindre kjøtt, kjøpe brukt, spare strøm, stemme på miljøpartier, engasjere seg politisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriv en drøfting (200-250 ord): Er det rettferdig at fattige land skal begrense sin utvikling for å redde klimaet, når rike land har forurenset i over hundre år?',
        hints: ['Se saken fra begge sider', 'Tenk på historisk ansvar og rettferdighet'],
        solution: 'Drøftingen bør vurdere historisk ansvar, nåværende utslipp, behov for utvikling og mulige løsninger som klimafinansiering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Globalisering
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_4: TextbookChapter = {
  id: 'samfunnsfag-10-4',
  courseId: 'samfunnsfag-10',
  chapterNumber: '4',
  title: 'Globalisering',
  description: 'Forstå globaliseringens drivkrefter, konsekvenser og dilemmaer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske korleis handel, økonomiske strukturar og arbeidsforhold heng saman med ressursfordeling og maktforhold',
  ],
  content: [
    {
      id: 'samfunnsfag-10-4-intro',
      type: 'text',
      content: `## Hva er globalisering?

Globalisering betyr at verden blir stadig mer sammenkoblet. Mennesker, varer, tjenester, kapital og ideer flyter lettere over landegrensene.

**Drivkrefter:**
- Ny teknologi (internett, transport)
- Politiske vedtak (frihandelsavtaler)
- Internasjonale selskaper
- Kulturutveksling

**Globaliseringens ansikt:**
- Et smarttelefon kan ha komponenter fra 20 ulike land
- Du kan se en film fra Sør-Korea på Netflix
- Mat du kjøper kan være dyrket på flere kontinenter
- En nyhet sprer seg over hele verden på minutter`,
    },
    {
      id: 'samfunnsfag-10-4-def-1',
      type: 'definition',
      title: 'Typer globalisering',
      content: `**Økonomisk globalisering:**
- Frihandel og internasjonale selskaper
- Verdikjeder som krysser landegrenser
- Utenlandsinvesteringer
- Valutahandel og finansmarkeder

**Kulturell globalisering:**
- Spredning av kultur, ideer og livsstil
- Sosiale medier og underholdning
- Engelsk som verdensspråk
- Både mangfold og ensretting

**Politisk globalisering:**
- Internasjonale organisasjoner (FN, EU, NATO)
- Globale avtaler (klima, handel, sikkerhet)
- Menneskerettigheter som global standard
- Begrenset nasjonal suverenitet

**Digital globalisering:**
- Internett og sosiale medier
- Global informasjonsflyt
- Netthandel
- Fjernarbeid på tvers av grenser`,
    },
    {
      id: 'samfunnsfag-10-4-example-1',
      type: 'example',
      title: 'Eksempel: Verdikjeden bak en t-skjorte',
      problem: `Hvordan illustrerer produksjonen av en t-skjorte globaliseringen?`,
      solution: `**T-skjortens globale reise:**

1. **Bomull:** Dyrkes i USA, India eller Usbekistan
2. **Garn:** Spinnes i Pakistan eller Bangladesh
3. **Stoff:** Veves og farges i Kina
4. **Søm:** Sys i Vietnam eller Bangladesh
5. **Merking:** Designes i Europa eller USA
6. **Transport:** Fraktes med skip og lastebil
7. **Salg:** Selges i butikk i Norge eller på nett

**Økonomiske forhold:**
- Arbeider i Bangladesh tjener kanskje 100 kroner om dagen
- T-skjorten selges for 200-300 kroner i Norge
- Mesteparten av verdien skapes i rike land (design, merkevare)

**Dilemma:**
Billig produksjon gir rimelige klær, men kan innebære dårlige arbeidsforhold og miljøproblemer.`,
    },
    {
      id: 'samfunnsfag-10-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Kategoriser disse eksemplene på globalisering:',
        subTasks: [
          {
            label: 'a',
            task: 'Netflix tilgjengelig i 190 land',
            solution: 'Kulturell globalisering',
            multipleChoiceOptions: [
              'Kulturell globalisering',
              'Økonomisk globalisering',
              'Politisk globalisering',
              'Militær globalisering',
            ],
          },
          {
            label: 'b',
            task: 'Parisavtalen om klima',
            solution: 'Politisk globalisering',
            multipleChoiceOptions: [
              'Politisk globalisering',
              'Økonomisk globalisering',
              'Kulturell globalisering',
              'Sosial globalisering',
            ],
          },
          {
            label: 'c',
            task: 'IKEA produserer møbler i mange land',
            solution: 'Økonomisk globalisering',
            multipleChoiceOptions: [
              'Økonomisk globalisering',
              'Kulturell globalisering',
              'Digital globalisering',
              'Politisk globalisering',
            ],
          },
        ],
        solution: 'a) Kulturell, b) Politisk, c) Økonomisk globalisering',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Drøft fordeler og ulemper med økonomisk globalisering:',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn tre fordeler.',
            solution: 'Billigere varer, teknologioverføring, arbeidsplasser i fattige land, økonomisk vekst.',
          },
          {
            label: 'b',
            task: 'Nevn tre ulemper.',
            solution: 'Utnytting av arbeidere, miljøproblemer, ujevn maktfordeling, tap av arbeidsplasser i rike land.',
          },
        ],
        hints: ['Tenk på ulike perspektiver: forbruker, arbeider, miljø'],
        solution: 'Globaliseringen har både positive og negative sider avhengig av perspektiv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Undersøk hvor produkter i hjemmet ditt er laget. Velg tre produkter og beskriv deres "reise" til deg.',
        hints: ['Se på merking', 'Tenk på råvarer, produksjon, transport'],
        solution: 'Beskrivelsen bør vise forståelse for globale verdikjeder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er "sosial dumping"? Forklar begrepet og gi et eksempel.',
        hints: ['Tenk på arbeidsvilkår og lønn'],
        solution: 'Sosial dumping er når bedrifter utnytter lave lønninger og dårlige arbeidsvilkår i andre land for å redusere kostnader. Eksempel: Tekstilfabrikker i Bangladesh med lave lønner og farlige arbeidsforhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft: Fører kulturell globalisering til mer mangfold eller mer ensretting? Skriv 150-200 ord.',
        hints: ['Tenk på både spredning av kulturer og dominans av vestlig kultur'],
        solution: 'Drøftingen bør vise at det er begge deler: Vi får tilgang til flere kulturer, men vestlig (spesielt amerikansk) kultur dominerer ofte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvordan kan du som forbruker påvirke globale arbeidsforhold?',
        hints: ['Tenk på forbrukermakt, merkeordninger, bevisste valg'],
        solution: 'Eksempler: Kjøpe Fairtrade-produkter, boikotte uetiske selskaper, stille krav til bedrifter, være bevisst på pris vs. arbeidsforhold, støtte organisasjoner som jobber for arbeiderrettigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: Konflikter og fredsarbeid
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_5: TextbookChapter = {
  id: 'samfunnsfag-10-5',
  courseId: 'samfunnsfag-10',
  chapterNumber: '5',
  title: 'Konflikter og fredsarbeid',
  description: 'Forstå årsaker til konflikter og hvordan fred kan bygges.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjere greie for årsakene til sentrale historiske og notidige konfliktar og reflektere over om fredsutbygging og forsoning er mogleg',
  ],
  content: [
    {
      id: 'samfunnsfag-10-5-intro',
      type: 'text',
      content: `## Konflikter i verden

Konflikter har alltid vært en del av menneskets historie. For å kunne arbeide for fred, må vi forstå hvorfor konflikter oppstår og hva som kan bidra til varig fred.

**Typer konflikter:**
- Mellomstatlige konflikter (krig mellom land)
- Interne konflikter (borgerkrig)
- Terrorisme og voldelig ekstremisme
- Ressurskonflikter

**Norges rolle:**
Norge bidrar aktivt i internasjonalt fredsarbeid gjennom FN, NATO, humanitær hjelp og fredsmekling.`,
    },
    {
      id: 'samfunnsfag-10-5-def-1',
      type: 'definition',
      title: 'Årsaker til konflikter',
      content: `**Politiske årsaker:**
- Kamp om makt og innflytelse
- Undertrykkelse av grupper
- Manglende demokrati
- Grensekonflikter

**Økonomiske årsaker:**
- Fattigdom og ulikhet
- Ressurskamp (olje, vann, land)
- Økonomiske kriser

**Sosiale og kulturelle årsaker:**
- Etniske motsetninger
- Religiøse forskjeller
- Diskriminering
- Historiske urettferdigheter

**Andre faktorer:**
- Svake stater
- Våpenhandel
- Klimaendringer
- Flyktningestrømmer`,
    },
    {
      id: 'samfunnsfag-10-5-def-2',
      type: 'definition',
      title: 'Fredsbygging',
      content: `**Konfliktforebygging:**
- Diplomati og dialog
- Utvikling og fattigdomsbekjempelse
- Demokratisering
- Utdanning og informasjon

**Konfliktløsning:**
- Fredsforhandlinger
- Våpenhvile
- Fredsavtaler
- Mekling og meklere

**Fredsbygging etter konflikt:**
- Forsoning og sannhetskommisjoner
- Gjenoppbygging
- Rettsforfølgelse av krigsforbrytere
- Reintegrering av soldater

**Internasjonale aktører:**
- FN og fredsbevarende styrker
- Regionale organisasjoner (EU, AU)
- Sivilsamfunn og NGO-er
- Fredsmeglere (som Norge)`,
    },
    {
      id: 'samfunnsfag-10-5-example-1',
      type: 'example',
      title: 'Eksempel: Konflikten i Syria',
      problem: `Analyser hovedårsakene til konflikten i Syria.`,
      solution: `**Bakgrunn:**
Konflikten startet i 2011 som del av "den arabiske våren".

**Årsaker:**
1. **Politisk:** Autoritært styre under Assad-regimet, mangel på demokrati, undertrykkelse av opposisjon.

2. **Økonomisk:** Høy arbeidsledighet, fattigdom på landsbygda, korrupsjon.

3. **Sosial:** Diskriminering av visse grupper, spenninger mellom religiøse grupper.

4. **Miljø:** Langvarig tørke drev bønder inn til byene, skapte sosial uro.

**Eskalering:**
- Fredelige protester møtt med vold
- Væpnet motstand oppstod
- Internasjonal innblanding
- Ekstremistgrupper som IS utnyttet kaoset

**Lærdommer:**
Konflikten viser hvordan flere faktorer kan virke sammen og hvordan konflikter kan spre seg.`,
    },
    {
      id: 'samfunnsfag-10-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Kategoriser disse konfliktårsakene:',
        subTasks: [
          {
            label: 'a',
            task: 'Kamp om oljeressurser',
            solution: 'Økonomisk årsak',
            multipleChoiceOptions: [
              'Økonomisk årsak',
              'Politisk årsak',
              'Kulturell årsak',
              'Religiøs årsak',
            ],
          },
          {
            label: 'b',
            task: 'Undertrykkelse av en minoritetsgruppe',
            solution: 'Politisk/sosial årsak',
            multipleChoiceOptions: [
              'Politisk/sosial årsak',
              'Økonomisk årsak',
              'Miljømessig årsak',
              'Teknologisk årsak',
            ],
          },
          {
            label: 'c',
            task: 'Religiøse motsetninger',
            solution: 'Kulturell/religiøs årsak',
            multipleChoiceOptions: [
              'Kulturell/religiøs årsak',
              'Økonomisk årsak',
              'Politisk årsak',
              'Miljømessig årsak',
            ],
          },
        ],
        solution: 'a) Økonomisk, b) Politisk/sosial, c) Kulturell/religiøs',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva FN gjør for å skape fred:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er en fredsbevarende styrke?',
            solution: 'Militære styrker utplassert for å opprettholde våpenhvile og beskytte sivile.',
          },
          {
            label: 'b',
            task: 'Hva gjør FNs sikkerhetsråd?',
            solution: 'Vedtar resolusjoner om fred og sikkerhet, kan godkjenne bruk av makt.',
          },
          {
            label: 'c',
            task: 'Hvorfor er FN viktig for fredsarbeid?',
            solution: 'FN gir legitimitet, samler verdenssamfunnet, og har verktøy og ressurser til fredsarbeid.',
          },
        ],
        solution: 'FN har flere verktøy for å fremme fred, fra diplomati til militære operasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr forsoning etter en konflikt? Hvorfor er det viktig?',
        hints: ['Tenk på Sør-Afrika etter apartheid'],
        solution: 'Forsoning handler om å bearbeide konflikten, erkjenne overgrep, og bygge tillit mellom tidligere fiender. Det er viktig for å unngå ny konflikt og bygge et stabilt samfunn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg en aktuell konflikt i verden. Analyser årsakene og foreslå mulige løsninger.',
        hints: ['Bruk flere kilder', 'Se konflikten fra ulike sider'],
        solution: 'Analysen bør identifisere flere årsaker og vise forståelse for kompleksiteten i konflikter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Norge er kjent som en fredsnasjon. Hvordan bidrar Norge til internasjonal fred?',
        hints: ['Tenk på fredsmekling, FN-bidrag, humanitær hjelp'],
        solution: 'Norge bidrar gjennom: Fredsmekling (Oslo-avtalen, Colombia), FN-operasjoner, NATO-medlemskap, humanitær hjelp, utviklingshjelp, Nobels fredspris.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft: Kan militær intervensjon noen ganger være nødvendig for å skape fred?',
        hints: ['Tenk på humanitær intervensjon, beskyttelsesansvar, eksempler'],
        solution: 'Drøftingen bør vurdere argumenter for (beskytte sivile, stoppe folkemord) og mot (suverenitet, kan forverre konflikten, hvem bestemmer).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Norsk politikk og styreform
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_6: TextbookChapter = {
  id: 'samfunnsfag-10-6',
  courseId: 'samfunnsfag-10',
  chapterNumber: '6',
  title: 'Norsk politikk og styreform',
  description: 'Forstå hvordan Norge styres og hvordan du kan påvirke politikken.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjere greie for korleis ulike politiske parti framhevar ulike verdiar, og bruke dette til å analysere politiske saker',
  ],
  content: [
    {
      id: 'samfunnsfag-10-6-intro',
      type: 'text',
      content: `## Norges styreform

Norge er et konstitusjonelt monarki med parlamentarisk styringsform. Det betyr at vi har en konge som statsoverhode, men at den egentlige makten ligger hos folkevalgte organer.

**Grunnloven:**
Norges Grunnlov fra 1814 er en av verdens eldste grunnlover som fortsatt er i bruk. Den fastslår grunnleggende prinsipper for statsstyret.

**Styringsnivåer:**
- Stat (Storting og regjering)
- Fylke (fylkesting)
- Kommune (kommunestyre)`,
    },
    {
      id: 'samfunnsfag-10-6-def-1',
      type: 'definition',
      title: 'De politiske institusjonene',
      content: `**Stortinget (169 representanter):**
- Vedtar lover
- Vedtar statsbudsjettet
- Kontrollerer regjeringen
- Velges hvert 4. år

**Regjeringen:**
- Utøver politikken
- Forbereder saker for Stortinget
- Ledes av statsministeren
- Må ha Stortingets tillit (parlamentarisme)

**Kongen:**
- Statsoverhode, symbolsk rolle
- Åpner Stortinget
- Underskriver lover
- Ingen reell politisk makt

**Domstolene:**
- Tingrett, lagmannsrett, Høyesterett
- Dømmer i enkeltsaker
- Kan prøve om lover strider mot Grunnloven`,
    },
    {
      id: 'samfunnsfag-10-6-def-2',
      type: 'definition',
      title: 'Politiske partier',
      content: `**Høyresiden (borgerlig):**
- **Høyre (H):** Konservativt, lavere skatter, privat næringsliv
- **Fremskrittspartiet (FrP):** Lavere skatter, strengere innvandring
- **Venstre (V):** Liberalt, miljø, individuell frihet
- **Kristelig Folkeparti (KrF):** Kristne verdier, familiepolitikk

**Venstresiden (sosialistisk):**
- **Arbeiderpartiet (Ap):** Sosialdemokratisk, arbeiderbevegelsen
- **Sosialistisk Venstreparti (SV):** Sosialistisk, miljø, omfordeling
- **Rødt (R):** Sosialistisk, mot kapitalisme

**Sentrum:**
- **Senterpartiet (Sp):** Distriktspolitikk, nei til EU
- **Miljøpartiet De Grønne (MDG):** Miljø og klima som hovedsak`,
    },
    {
      id: 'samfunnsfag-10-6-example-1',
      type: 'example',
      title: 'Eksempel: En sak i Stortinget',
      problem: `Hvordan blir en lov til i Norge?`,
      solution: `**Lovprosessen:**

1. **Forslag:** Regjeringen fremmer forslag (proposisjon), eller stortingsrepresentanter fremmer forslag.

2. **Komitebehandling:** Saken sendes til en fagkomite som vurderer og avgir innstilling.

3. **Debatt:** Stortinget debatterer saken i plenum.

4. **Første votering:** Stortinget stemmer over forslaget.

5. **Andre votering:** Minst tre dager senere stemmes det på nytt.

6. **Sanksjon:** Kongen i statsråd underskriver loven.

7. **Kunngjøring:** Loven kunngjøres og trer i kraft.

**Eksempel:** Hvis regjeringen vil endre skoleloven, går den gjennom denne prosessen. Underveis kan opposisjonen foreslå endringer, og organisasjoner kan påvirke gjennom høringer.`,
    },
    {
      id: 'samfunnsfag-10-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Match institusjonen med dens funksjon:',
        subTasks: [
          {
            label: 'a',
            task: 'Stortinget',
            solution: 'Vedtar lover og kontrollerer regjeringen',
            multipleChoiceOptions: [
              'Vedtar lover og kontrollerer regjeringen',
              'Utfører politikken',
              'Dømmer i straffesaker',
              'Representerer Norge i utlandet',
            ],
          },
          {
            label: 'b',
            task: 'Regjeringen',
            solution: 'Utfører politikken og forbereder lovforslag',
            multipleChoiceOptions: [
              'Utfører politikken og forbereder lovforslag',
              'Vedtar lover',
              'Kontrollerer Stortinget',
              'Velger statsministeren',
            ],
          },
          {
            label: 'c',
            task: 'Høyesterett',
            solution: 'Øverste domstol, tolker lover',
            multipleChoiceOptions: [
              'Øverste domstol, tolker lover',
              'Vedtar Grunnloven',
              'Utnevner dommere',
              'Lager statsbudsjettet',
            ],
          },
        ],
        solution: 'a) Stortinget - lover, b) Regjeringen - utøver, c) Høyesterett - dømmer',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva parlamentarisme betyr.',
        hints: ['Tenk på forholdet mellom Storting og regjering'],
        solution: 'Parlamentarisme betyr at regjeringen må ha Stortingets tillit for å kunne regjere. Hvis Stortinget vedtar mistillit, må regjeringen gå av.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Plasser disse partiene på en høyre-venstre-akse:',
        subTasks: [
          {
            label: 'a',
            task: 'Rødt, Høyre, Arbeiderpartiet, Fremskrittspartiet',
            solution: 'Fra venstre: Rødt - Arbeiderpartiet - Høyre - Fremskrittspartiet',
          },
        ],
        hints: ['Tenk på synet på skatt, offentlig sektor, omfordeling'],
        solution: 'Rødt er lengst til venstre, deretter Ap, så Høyre, og FrP på høyresiden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er forskjellen på en flertallsregjering og en mindretallsregjering?',
        hints: ['Tenk på mandater i Stortinget'],
        solution: 'Flertallsregjering: Regjeringspartiene har over 85 mandater. Mindretallsregjering: Regjeringspartiene har under 85 mandater og må samarbeide med andre partier for å få flertall.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg en politisk sak og analyser hvordan ulike partier ser på den.',
        hints: ['Bruk partienes nettsider eller valgomater'],
        solution: 'Analysen bør vise forståelse for hvordan partienes ideologi påvirker standpunktene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Forklar forholdet mellom stat, fylke og kommune i Norge. Gi eksempler på hva hvert nivå har ansvar for.',
        hints: ['Tenk på skole, helse, veier, renovasjon'],
        solution: 'Staten: Forsvar, utenrikspolitikk, høyere utdanning. Fylke: Videregående skoler, kollektivtransport, fylkesveier. Kommune: Grunnskole, barnehage, eldreomsorg, renovasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Økonomi og arbeidsliv
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_7: TextbookChapter = {
  id: 'samfunnsfag-10-7',
  courseId: 'samfunnsfag-10',
  chapterNumber: '7',
  title: 'Økonomi og arbeidsliv',
  description: 'Forstå økonomiske sammenhenger og arbeidslivets organisering.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske korleis handel, økonomiske strukturar og arbeidsforhold heng saman med ressursfordeling og maktforhold',
  ],
  content: [
    {
      id: 'samfunnsfag-10-7-intro',
      type: 'text',
      content: `## Økonomi og arbeidsliv

Norge har en blandingsøkonomi - en kombinasjon av markedsøkonomi og statlig styring. Velferdsstaten gir omfattende tjenester, finansiert av skatter og avgifter.

**Norsk økonomi:**
- Høy levestandard
- Lav arbeidsledighet
- Oljefondet (Statens pensjonsfond utland)
- Sterk fagbevegelse

**Arbeidslivsmodellen:**
Den norske modellen bygger på trepartssamarbeid mellom arbeidstakere (fagforeninger), arbeidsgivere (NHO/Virke) og staten.`,
    },
    {
      id: 'samfunnsfag-10-7-def-1',
      type: 'definition',
      title: 'Økonomiske begreper',
      content: `**Markedsøkonomi:**
Tilbud og etterspørsel bestemmer priser. Privateid næringsliv.

**Planøkonomi:**
Staten bestemmer produksjon og priser. Ingen privat eiendom.

**Blandingsøkonomi:**
Kombinasjon av marked og statlig regulering. Norges modell.

**BNP (bruttonasjonalprodukt):**
Verdien av alt som produseres i et land på ett år. Mål på økonomiens størrelse.

**Inflasjon:**
Prisstigning over tid. Pengene blir mindre verdt.

**Arbeidsledighet:**
Andelen av arbeidsstyrken som er uten jobb.

**Velferdsstaten:**
Staten garanterer grunnleggende tjenester: helse, utdanning, trygd.`,
    },
    {
      id: 'samfunnsfag-10-7-def-2',
      type: 'definition',
      title: 'Den norske modellen',
      content: `**Trepartssamarbeidet:**
- **Arbeidstakere:** LO og andre fagforeninger
- **Arbeidsgivere:** NHO, Virke og andre
- **Staten:** Regulerer og megler

**Tariffavtaler:**
Avtaler mellom fagforening og arbeidsgiver om lønn og arbeidsvilkår.

**Hovedoppgjøret:**
Hvert andre år forhandles det om lønn for hele arbeidslivet.

**Rettigheter i arbeidslivet:**
- Minstelønn (gjennom tariff)
- Arbeidsmiljøloven beskytter arbeidstakere
- Oppsigelsesvern
- Rett til sykepenger og ferie

**Fordeler med modellen:**
- Lav konflikt i arbeidslivet
- Høy produktivitet
- Jevn inntektsfordeling
- Tillit mellom partene`,
    },
    {
      id: 'samfunnsfag-10-7-example-1',
      type: 'example',
      title: 'Eksempel: Lønnsforhandlinger',
      problem: `Hvordan foregår lønnsforhandlinger i Norge?`,
      solution: `**Hovedoppgjøret (hvert 2. år):**

1. **LO og NHO forhandler først** (frontfagsmodellen)
   - Industrien setter rammen for lønnsvekst
   - Sikrer at lønningene ikke vokser mer enn økonomien tåler

2. **Andre sektorer følger etter**
   - Offentlig sektor
   - Andre private sektorer

3. **Hvis uenighet:**
   - Mekleren (Riksmekleren) forsøker å få partene til enighet
   - Streik/lockout hvis mekling ikke lykkes
   - Tvungen lønnsnemnd i noen tilfeller

**Eksempel på resultat:**
"Partene ble enige om 5% lønnsvekst. LO-leder sa: 'Vi er fornøyde med at lavtlønte fikk et ekstra løft.'"`,
    },
    {
      id: 'samfunnsfag-10-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom markedsøkonomi, planøkonomi og blandingsøkonomi.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner markedsøkonomi?',
            solution: 'Privat eiendom, fri konkurranse, tilbud og etterspørsel bestemmer priser.',
          },
          {
            label: 'b',
            task: 'Hva kjennetegner planøkonomi?',
            solution: 'Staten eier produksjonsmidlene og bestemmer hva som skal produseres.',
          },
          {
            label: 'c',
            task: 'Hvorfor har Norge blandingsøkonomi?',
            solution: 'Vi kombinerer markedets effektivitet med statlig regulering for rettferdighet.',
          },
        ],
        solution: 'Norge har blandingsøkonomi for å balansere markedets styrker med behov for regulering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er fordelene med å være fagorganisert?',
        hints: ['Tenk på lønn, arbeidsvilkår, trygghet'],
        solution: 'Fordeler: Bedre lønn, sterkere forhandlingsposisjon, juridisk hjelp, trygghet ved oppsigelse, innflytelse på arbeidsplassen, streikekasse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er oljefondet, og hvorfor er det viktig for Norge?',
        hints: ['Tenk på fremtiden, stabilitet, investeringer'],
        solution: 'Oljefondet (Statens pensjonsfond utland) er sparepenger fra oljeinntektene. Det sikrer at fremtidige generasjoner også får del i oljerikdommen, stabiliserer økonomien, og finansierer deler av statsbudsjettet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar begrepet "frontfagsmodellen".',
        hints: ['Tenk på hvem som forhandler først'],
        solution: 'Frontfagsmodellen betyr at industrien (LO/NHO) forhandler først og setter rammen for lønnsveksten. Andre sektorer følger denne rammen. Det sikrer at lønningene ikke vokser mer enn konkurranseutsatt industri tåler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft: Er det rettferdig at en lege tjener mer enn en renholder? Skriv 150-200 ord.',
        hints: ['Tenk på utdanning, ansvar, tilbud/etterspørsel, samfunnsnytte'],
        solution: 'Drøftingen bør vurdere ulike perspektiver: utdanningslengde, ansvar, markedskrefter, men også samfunnsnytte og rettferdighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'Undersøk et yrke du er interessert i. Finn ut: Hvilken utdanning kreves? Hva er lønnsnivået? Er det lett å få jobb?',
        hints: ['Bruk utdanning.no eller nav.no'],
        solution: 'Svaret bør vise forståelse for sammenhengen mellom utdanning, arbeidsmarked og lønn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: Medier og kommunikasjon
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_8: TextbookChapter = {
  id: 'samfunnsfag-10-8',
  courseId: 'samfunnsfag-10',
  chapterNumber: '8',
  title: 'Medier og kommunikasjon',
  description: 'Forstå medienes rolle i demokratiet og utvikle kritisk medieforståelse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'vurdere korleis utvikling av vitenskap og teknologi har påvirka og påverkar dine levevilkår',
  ],
  content: [
    {
      id: 'samfunnsfag-10-8-intro',
      type: 'text',
      content: `## Medier i demokratiet

Mediene spiller en viktig rolle i et demokrati. De informerer befolkningen, setter dagsorden, og fungerer som en "vaktbikkje" som overvåker makthaverne.

**Medienes funksjoner:**
- Informere om viktige hendelser
- Sette dagsorden - bestemme hva vi snakker om
- Kontrollere makthaverne
- Være en arena for debatt
- Underholde

**Medierevolusjonen:**
Internett og sosiale medier har endret mediebildet radikalt. Alle kan nå være "utgivere", noe som gir både muligheter og utfordringer.`,
    },
    {
      id: 'samfunnsfag-10-8-def-1',
      type: 'definition',
      title: 'Medietyper og begreper',
      content: `**Tradisjonelle medier:**
- Aviser (papir og nett)
- TV og radio
- Nyhetsbyråer (NTB)

**Sosiale medier:**
- Facebook, Instagram, TikTok
- Twitter/X, Snapchat
- YouTube, Twitch

**Viktige begreper:**
- **Vinkling:** Hvordan en sak presenteres
- **Clickbait:** Overdrevne overskrifter for å få klikk
- **Algoritmer:** Bestemmer hva du ser
- **Ekkokammer:** Bare eksponert for like meninger
- **Falske nyheter:** Bevisst feilinformasjon
- **Desinformasjon:** Feilinformasjon spredt med vilje
- **Mediemakt:** Evnen til å påvirke hva folk tenker om`,
    },
    {
      id: 'samfunnsfag-10-8-example-1',
      type: 'example',
      title: 'Eksempel: Algoritmenes makt',
      problem: `Hvordan påvirker algoritmer hva du ser i sosiale medier?`,
      solution: `**Slik fungerer det:**

1. **Algoritmen lærer:** Plattformen registrerer hva du liker, deler, kommenterer og hvor lenge du ser på innhold.

2. **Personalisert innhold:** Du får mer av det du har engasjert deg i.

3. **Filterbobler:** Du ser stadig mindre av det som utfordrer synspunktene dine.

**Konsekvenser:**
- **Ekkokamre:** Du tror alle mener det samme som deg
- **Polarisering:** Ekstreme synspunkter får mer oppmerksomhet
- **Manipulasjon:** Mulig å påvirke ved å utnytte systemet
- **Avhengighet:** Designet for å holde deg på plattformen

**Hva kan du gjøre?**
- Aktivt oppsøke andre synspunkter
- Bruke flere kilder
- Være bevisst på algoritmenes rolle
- Justere innstillinger i sosiale medier`,
    },
    {
      id: 'samfunnsfag-10-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar medienes rolle som "vaktbikkje":',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr det at mediene er en "vaktbikkje"?',
            solution: 'Mediene overvåker makthavere og avslører maktmisbruk, korrupsjon og urettferdighet.',
          },
          {
            label: 'b',
            task: 'Gi et eksempel på at mediene har avslørt noe viktig.',
            solution: 'Eksempler: Panama Papers, Watergate, trakasserings-avsløringer, korrupsjonssaker.',
          },
        ],
        hints: ['Tenk på gravejournalistikk'],
        solution: 'Mediene holder makthavere ansvarlige ved å avsløre kritikkverdige forhold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen mellom feilinformasjon og desinformasjon?',
        hints: ['Tenk på hensikt'],
        solution: 'Feilinformasjon er usann informasjon spredt uten ond hensikt (folk tror det er sant). Desinformasjon er usann informasjon spredt bevisst for å villede.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan kan du sjekke om en nyhet er troverdig?',
        hints: ['Tenk på kilde, avsender, andre medier'],
        solution: 'Sjekk kilden, hvem som står bak, om andre medier rapporterer det samme, om det oppgis kilder, om det virker for godt/dårlig til å være sant.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft fordeler og ulemper med at alle kan publisere innhold på sosiale medier.',
        subTasks: [
          {
            label: 'a',
            task: 'Nevn to fordeler.',
            solution: 'Demokratisering av ytringsfriheten, makthavere kan utfordres, mangfold av stemmer.',
          },
          {
            label: 'b',
            task: 'Nevn to ulemper.',
            solution: 'Spredning av falsk informasjon, kvalitetskontroll mangler, hatefulle ytringer.',
          },
        ],
        solution: 'Sosiale medier gir flere mulighet til å ytre seg, men gjør det også vanskelig å skille fakta fra fiksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Analyser hvordan samme nyhetssak dekkes ulikt av to forskjellige medier.',
        hints: ['Sammenlign overskrift, vinkling, kilder, bilder'],
        solution: 'Analysen bør vise bevissthet om at medier gjør valg som påvirker hvordan vi oppfatter saker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'Reflekter over ditt eget mediebruk. Hvilke kilder bruker du? Hvordan påvirker det hva du vet og mener?',
        hints: ['Vær ærlig', 'Tenk på algoritmer'],
        solution: 'Refleksjonen bør vise bevissthet om egne vaner og mulige blindsoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9: Identitet og mangfold
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_9: TextbookChapter = {
  id: 'samfunnsfag-10-9',
  courseId: 'samfunnsfag-10',
  chapterNumber: '9',
  title: 'Identitet og mangfold',
  description: 'Utforsk identitet, tilhørighet og mangfold i det norske samfunnet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'reflektere over likskapar og ulikskapar mellom menneske og utforske korleis fordommar og stereotypiar kan oppstå og bli utfordra',
  ],
  content: [
    {
      id: 'samfunnsfag-10-9-intro',
      type: 'text',
      content: `## Identitet og tilhørighet

Identitet handler om hvem vi er og hvem vi opplever oss som. Den formes av mange faktorer og utvikler seg gjennom livet.

**Hva påvirker identiteten vår:**
- Familie og oppvekst
- Kultur og tradisjoner
- Språk og religion
- Venner og miljø
- Kjønn og seksualitet
- Nasjonalitet og etnisitet
- Interesser og valg

**Mangfold i Norge:**
Norge er et mangfoldig samfunn med mennesker fra mange ulike bakgrunner, kulturer og livssyn.`,
    },
    {
      id: 'samfunnsfag-10-9-def-1',
      type: 'definition',
      title: 'Identitetsbegreper',
      content: `**Identitetstyper:**
- **Personlig identitet:** Det unike ved deg
- **Sosial identitet:** Gruppetilhørighet
- **Kulturell identitet:** Tilhørighet til kultur/tradisjon
- **Nasjonal identitet:** Tilhørighet til nasjon

**Begreper om mangfold:**
- **Etnisitet:** Felles opphav, kultur, språk
- **Minoritet:** Gruppe som er i mindretall
- **Urfolk:** Opprinnelig befolkning i et område
- **Integrering:** Bli del av samfunnet mens man beholder egen kultur
- **Assimilering:** Bli helt lik majoriteten

**Begreper om fordommer:**
- **Stereotypi:** Forenklet bilde av en gruppe
- **Fordom:** Negativ holdning basert på gruppetilhørighet
- **Diskriminering:** Urettferdig behandling av en gruppe
- **Rasisme:** Forskjellsbehandling basert på etnisitet/hudfarge`,
    },
    {
      id: 'samfunnsfag-10-9-example-1',
      type: 'example',
      title: 'Eksempel: Sammensatt identitet',
      problem: `Sara er født i Norge av pakistanske foreldre. Hvordan kan hennes identitet være sammensatt?`,
      solution: `**Saras identitet kan inneholde:**

**Norsk identitet:**
- Oppvokst i Norge
- Snakker norsk
- Går på norsk skole
- Feirer 17. mai

**Pakistansk identitet:**
- Foreldrenes kultur og tradisjoner
- Urdu/punjabi hjemme
- Pakistansk mat
- Besøk hos familie i Pakistan

**Andre identiteter:**
- Jente/kvinne
- Muslim
- Fotballspiller
- Elev på skole X
- Ungdom

**Viktig poeng:**
Sara trenger ikke velge. Hun kan være både-og. Identitet er ikke enten-eller. De fleste av oss har sammensatte identiteter.

**Utfordringer:**
Noen kan oppleve press om å "velge side" eller føle seg "ikke norsk nok" eller "ikke pakistansk nok".`,
    },
    {
      id: 'samfunnsfag-10-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-9-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom:',
        subTasks: [
          {
            label: 'a',
            task: 'Stereotypi og fordom',
            solution: 'Stereotypi er et forenklet bilde av en gruppe. Fordom er en negativ holdning basert på gruppetilhørighet.',
          },
          {
            label: 'b',
            task: 'Integrering og assimilering',
            solution: 'Integrering er å bli del av samfunnet mens man beholder egen kultur. Assimilering er å bli helt lik majoriteten.',
          },
          {
            label: 'c',
            task: 'Personlig og sosial identitet',
            solution: 'Personlig identitet er det unike ved deg. Sosial identitet handler om gruppetilhørighet.',
          },
        ],
        solution: 'Begrepene handler om ulike aspekter ved identitet og holdninger til andre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-9-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv din egen identitet. Hvilke faktorer har formet hvem du er?',
        hints: ['Familie, kultur, interesser, venner, sted'],
        solution: 'Refleksjonen bør vise bevissthet om de mange faktorene som former identitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-9-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan kan fordommer og stereotypier oppstå?',
        hints: ['Tenk på medier, mangel på kontakt, generalisering'],
        solution: 'Fordommer kan oppstå gjennom: Mangel på kontakt med andre grupper, medienes fremstilling, generalisering fra enkelttilfeller, frykt for det ukjente, tradisjoner og oppdragelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-9-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gi tre eksempler på stereotypier og forklar hvorfor de er problematiske.',
        hints: ['Tenk på kjønn, nasjonalitet, alder'],
        solution: 'Stereotypier er problematiske fordi de forenkler virkeligheten, overser individuelle forskjeller, og kan føre til diskriminering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-9-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvordan kan vi utfordre og motarbeide fordommer?',
        hints: ['Tenk på kunnskap, kontakt, bevissthet'],
        solution: 'Vi kan utfordre fordommer gjennom: Kunnskap og utdanning, kontakt med andre grupper, kritisk tenkning, bevissthet om egne fordommer, å si fra når vi hører fordommer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-9-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-9-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft: Er det mulig å ha en felles norsk identitet samtidig som vi verdsetter mangfold? Skriv 150-200 ord.',
        hints: ['Tenk på hva som forener og hva som er ulikt'],
        solution: 'Drøftingen bør vise forståelse for at nasjonal identitet kan romme mangfold.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: Eksamensforberedelse
// ============================================================================

export const CHAPTER_SAMFUNNSFAG_10_10: TextbookChapter = {
  id: 'samfunnsfag-10-10',
  courseId: 'samfunnsfag-10',
  chapterNumber: '10',
  title: 'Eksamensforberedelse',
  description: 'Forbered deg til muntlig eksamen i samfunnsfag.',
  estimatedMinutes: 60,
  competenceGoals: [
    'presentere og drøfte faglige emner muntlig med god struktur og faglig presisjon',
  ],
  content: [
    {
      id: 'samfunnsfag-10-10-intro',
      type: 'text',
      content: `## Eksamen i samfunnsfag

Samfunnsfag er et trekkfag til muntlig eksamen. Det betyr at du kan bli trukket ut til eksamen. God forberedelse gir deg trygghet og bedre resultat.

**Eksamensformen:**
- Du trekker tema 48 timer før eksamen
- Du forbereder en presentasjon (ca. 10 minutter)
- Etterpå er det fagsamtale (ca. 20 minutter)

**Viktig:**
- Du skal vise at du kan se sammenhenger
- Du skal drøfte, ikke bare gjenfortelle
- Du skal bruke fagbegreper
- Du skal vise kritisk tenkning`,
    },
    {
      id: 'samfunnsfag-10-10-def-1',
      type: 'definition',
      title: 'Ferdigheter på eksamen',
      content: `**Å beskrive:**
Gjengi fakta og informasjon. Hva, hvem, hvor, når.
Eksempel: "FN ble grunnlagt i 1945..."

**Å forklare:**
Vise årsaker og sammenhenger. Hvorfor, hvordan.
Eksempel: "Konflikten oppstod fordi..."

**Å drøfte:**
Se en sak fra flere sider, veie argumenter, konkludere.
Eksempel: "På den ene siden... på den andre siden... Alt i alt..."

**Å vurdere:**
Gi din egen vurdering med begrunnelse.
Eksempel: "Jeg mener at... fordi..."

**Å analysere:**
Bryte ned i deler, se mønstre og sammenhenger.
Eksempel: "Hvis vi ser på årsakene, kan vi identifisere..."`,
    },
    {
      id: 'samfunnsfag-10-10-def-2',
      type: 'definition',
      title: 'Tips til presentasjon',
      content: `**Struktur:**
1. Innledning - fang oppmerksomheten, presenter tema
2. Hoveddel - 3-4 hovedpunkter, logisk rekkefølge
3. Avslutning - oppsummer, konkluder

**Hjelpemidler:**
- Stikkordsliste (IKKE manuskript!)
- PowerPoint med lite tekst
- Bilder og kart
- Konkrete eksempler

**Fremføring:**
- Øyekontakt
- Variert stemme
- Ikke for raskt
- Bruk fagbegreper
- Vis at du kan stoffet

**Fagsamtalen:**
- Lytt til spørsmålet
- Ta deg tid til å tenke
- Svar i hele setninger
- Bruk eksempler
- Det er lov å si "Jeg er usikker, men..."`,
    },
    {
      id: 'samfunnsfag-10-10-example-1',
      type: 'example',
      title: 'Eksempel: Eksamensoppgave',
      problem: `Du har trukket tema: "Demokrati og deltakelse". Hvordan kan du strukturere presentasjonen?`,
      solution: `**Mulig disposisjon:**

**Innledning (1 min):**
- Spør publikum: "Hva gjør DU for demokratiet?"
- Presenter tema: demokrati og deltakelse

**Del 1: Hva er demokrati? (2 min)**
- Definisjon og kjennetegn
- Direkte vs. representativt demokrati
- Maktfordeling

**Del 2: Hvordan kan vi delta? (3 min)**
- Formelle kanaler: valg, parti, organisasjoner
- Uformelle kanaler: demonstrasjoner, sosiale medier
- Eksempel: ungdomsengasjement i klimasaken

**Del 3: Utfordringer for demokratiet (3 min)**
- Lav valgdeltakelse blant unge
- Falske nyheter og polarisering
- Ekstremisme

**Avslutning (1 min):**
- Oppsummering
- Demokrati krever aktive medborgere
- Tilbake til åpningsspørsmålet`,
    },
    {
      id: 'samfunnsfag-10-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-10-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom å beskrive, forklare og drøfte.',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv FN.',
            solution: 'FN er en internasjonal organisasjon med 193 medlemsland, grunnlagt i 1945.',
          },
          {
            label: 'b',
            task: 'Forklar hvorfor FN ble opprettet.',
            solution: 'FN ble opprettet etter 2. verdenskrig for å forhindre nye kriger og fremme samarbeid.',
          },
          {
            label: 'c',
            task: 'Drøft om FN er effektivt.',
            solution: 'FN har lykkes med fredsbevarende operasjoner, men kritiseres for handlingslammelse i Sikkerhetsrådet...',
          },
        ],
        solution: 'Beskrive = gjengi, Forklare = vise sammenhenger, Drøfte = se fra flere sider.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-10-ex-2',
        number: '2',
        type: 'classic',
        task: 'Lag en disposisjon for en presentasjon om menneskerettigheter.',
        hints: ['Bruk strukturen innledning-hoveddel-avslutning', 'Ha 3-4 hovedpunkter'],
        solution: 'Disposisjonen bør ha tydelig struktur, relevante punkter og vise forståelse for temaet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-10-ex-3',
        number: '3',
        type: 'classic',
        task: 'Øv på fagsamtale. Svar på disse spørsmålene:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er de viktigste forskjellene mellom høyre- og venstresiden i norsk politikk?',
            solution: 'Høyresiden vektlegger individuell frihet, lavere skatter, privat næringsliv. Venstresiden vektlegger fellesskap, utjevning, offentlige tjenester.',
          },
          {
            label: 'b',
            task: 'Hvorfor er ytringsfrihet viktig i et demokrati?',
            solution: 'Ytringsfrihet sikrer at alle kan delta i debatten, kritisere makthavere og bidra til informerte valg.',
          },
          {
            label: 'c',
            task: 'Hvordan henger klimaendringer og konflikter sammen?',
            solution: 'Klimaendringer kan føre til ressursknapphet, migrasjon og ustabilitet, som igjen kan skape konflikter.',
          },
        ],
        solution: 'Gode svar viser fagkunnskap, evne til å se sammenhenger og bruk av fagbegreper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-10-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag en oversikt over de viktigste fagbegrepene fra hvert kapittel.',
        hints: ['Bruk definisjonsboksene', 'Lag stikkord'],
        solution: 'Oversikten bør inkludere sentrale begreper som demokrati, menneskerettigheter, bærekraft, globalisering, konflikt, parlamentarisme, etc.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-10-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hold en øvingspresentasjon for en medelev eller familiemedlem. Be om tilbakemelding på struktur, innhold og fremføring.',
        hints: ['Film deg selv om du er alene', 'Øv flere ganger'],
        solution: 'Øving er den beste forberedelsen. Jo mer du øver, jo tryggere blir du.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-10-ex-6',
        number: '6',
        type: 'classic',
        task: 'Skriv tre mulige eksamenstemaer og lag en kort disposisjon for hver.',
        hints: ['Tenk på temaer som kan kombinere flere kapitler'],
        solution: 'Eksempler: "Norge i verden", "Ungdom og demokrati", "Rettferdighet og ulikhet".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnsfag-10-10-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnsfag-10-10-ex-7',
        number: '7',
        type: 'classic',
        task: 'Lag en "jukselapp" med de viktigste sammenhengene mellom temaene i samfunnsfag.',
        hints: ['Bruk piler og linjer for å vise sammenhenger', 'Tenk på årsak-virkning'],
        solution: 'Eksempel: Fattigdom -> konflikt -> flyktninger -> integrering. Klimaendringer -> ressursknapphet -> konflikt.',
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

export const SAMFUNNSFAG_10_CHAPTERS = [
  CHAPTER_SAMFUNNSFAG_10_1,
  CHAPTER_SAMFUNNSFAG_10_2,
  CHAPTER_SAMFUNNSFAG_10_3,
  CHAPTER_SAMFUNNSFAG_10_4,
  CHAPTER_SAMFUNNSFAG_10_5,
  CHAPTER_SAMFUNNSFAG_10_6,
  CHAPTER_SAMFUNNSFAG_10_7,
  CHAPTER_SAMFUNNSFAG_10_8,
  CHAPTER_SAMFUNNSFAG_10_9,
  CHAPTER_SAMFUNNSFAG_10_10,
];
