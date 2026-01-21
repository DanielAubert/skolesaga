/**
 * Tekstbok innhold for Samfunnskunnskap (VG1-VG2)
 *
 * Folger LK20 lareplan for samfunnskunnskap.
 * Dekker sentrale temaer innen demokrati, rettigheter, politikk og samfunnsforhold.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Demokrati og medborgerskap
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_1: TextbookChapter = {
  id: 'samfunnskunnskap-1-1',
  courseId: 'samfunnskunnskap',
  chapterNumber: '1',
  title: 'Demokrati og medborgerskap',
  description: 'Forstå demokratiets grunnprinsipper og hva det betyr å være en aktiv medborger.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjøre rede for grunnleggende trekk ved demokratiet og reflektere over demokratiske verdier',
    'drøfte hva det vil si å være medborger og hvordan man kan delta i demokratiet',
  ],
  content: [
    {
      id: 'samfunnskunnskap-1-1-intro',
      type: 'text',
      content: `## Demokrati - folkestyre

Demokrati kommer fra gresk og betyr folkestyre. I et demokrati er det folket som har den øverste makten, enten direkte eller gjennom valgte representanter.

**Demokratiets kjennetegn:**
- Frie og rettferdige valg
- Ytringsfrihet og pressefrihet
- Organisasjonsfrihet
- Rettssikkerhet og likhet for loven
- Maktfordeling
- Beskyttelse av minoriteter

Demokrati handler ikke bare om å stemme ved valg. Det er en styreform som bygger på verdier som frihet, likhet og deltakelse.`,
    },
    {
      id: 'samfunnskunnskap-1-1-def-1',
      type: 'definition',
      title: 'Sentrale demokratibegreper',
      content: `**Direkte demokrati:**
Folket stemmer selv over politiske saker. Eksempel: Folkeavstemninger.

**Representativt demokrati:**
Folket velger representanter som fatter beslutninger på deres vegne. Norge er et representativt demokrati.

**Parlamentarisme:**
Regjeringen må ha støtte fra flertallet i nasjonalforsamlingen (Stortinget i Norge).

**Rettsstat:**
Staten styres av lover, ikke vilkårlig makt. Alle er like for loven.

**Medborgerskap:**
Å være en aktiv deltaker i samfunnet - med både rettigheter og plikter.

**Sivilsamfunn:**
Den delen av samfunnet som ligger mellom staten og enkeltindividet, som organisasjoner, foreninger og media.`,
    },
    {
      id: 'samfunnskunnskap-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Demokratisk deltakelse',
      problem: `Jonas er 18 år og vil engasjere seg politisk. Hvilke muligheter har han for demokratisk deltakelse?`,
      solution: `**Jonas har mange muligheter:**

**Formell deltakelse:**
- Stemme ved valg (stortings-, kommune- og fylkestingsvalg)
- Melde seg inn i et politisk parti
- Stille som kandidat til valg
- Delta i folkeavstemninger

**Uformell deltakelse:**
- Skrive leserbrev og debattinnlegg
- Delta i demonstrasjoner og markeringer
- Engasjere seg i organisasjoner
- Bruke sosiale medier til politisk påvirkning
- Signere opprop og underskriftskampanjer
- Kontakte politikere direkte
- Delta i høringer og folkemøter

Jonas kan kombinere flere former for deltakelse for å påvirke samfunnet.`,
    },
    {
      id: 'samfunnskunnskap-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom direkte og representativt demokrati.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva kjennetegner direkte demokrati?',
            solution: 'I direkte demokrati stemmer folket selv over politiske saker, uten mellomledd.',
          },
          {
            label: 'b',
            task: 'Hva kjennetegner representativt demokrati?',
            solution: 'I representativt demokrati velger folket representanter som fatter beslutninger på deres vegne.',
          },
          {
            label: 'c',
            task: 'Hvilken form har Norge, og hvorfor?',
            solution: 'Norge har representativt demokrati fordi det er praktisk i et stort samfunn med mange komplekse saker.',
          },
        ],
        solution: 'Direkte demokrati = folket stemmer direkte, representativt = folket velger representanter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva betyr det å være medborger? Gi eksempler på rettigheter og plikter.',
        hints: ['Tenk på både det du kan kreve og det du forventes å bidra med'],
        solution: 'Medborgerskap handler om å være en aktiv deltaker i samfunnet. Rettigheter: stemmerett, ytringsfrihet, rett til utdanning. Plikter: betale skatt, følge lover, delta i valg (moralsk plikt).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke utfordringer kan demokratiet stå overfor i dag?',
        hints: ['Tenk på valgdeltakelse, falske nyheter, polarisering'],
        solution: 'Utfordringer: Lav valgdeltakelse, spredning av feilinformasjon, politisk polarisering, manglende tillit til institusjoner, populisme, trusler mot pressefrihet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft påstanden: "Det nytter ikke å stemme - min stemme betyr ingenting."',
        hints: ['Tenk på både individuelt og kollektivt nivå'],
        solution: 'Hver stemme teller i det store bildet. Mange valg avgjøres med små marginer. Hvis mange tenker slik, undergraves demokratiet. Deltakelse er også en måte å vise støtte til demokratiske verdier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg en aktuell politisk sak og beskriv hvordan du kunne engasjert deg for å påvirke utfallet.',
        hints: ['Tenk på ulike former for deltakelse'],
        solution: 'Svaret bør inneholde konkret sak og flere former for engasjement, som å kontakte politikere, skrive innlegg, delta i demonstrasjoner, melde seg inn i organisasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvorfor er sivilsamfunnet viktig for demokratiet?',
        hints: ['Tenk på organisasjoner, media og foreninger'],
        solution: 'Sivilsamfunnet fungerer som bindeledd mellom staten og borgerne, gir folk mulighet til å organisere seg, fremmer mangfold av meninger, holder makthavere i sjakk, og skaper arenaer for deltakelse utenom valg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Menneskerettigheter og internasjonale avtaler
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_2: TextbookChapter = {
  id: 'samfunnskunnskap-1-2',
  courseId: 'samfunnskunnskap',
  chapterNumber: '2',
  title: 'Menneskerettigheter og internasjonale avtaler',
  description: 'Lær om menneskerettighetene og hvordan de beskyttes gjennom internasjonale avtaler.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjøre rede for sentrale menneskerettigheter og drøfte hvordan de utfordres',
    'reflektere over Norges rolle i internasjonalt samarbeid',
  ],
  content: [
    {
      id: 'samfunnskunnskap-1-2-intro',
      type: 'text',
      content: `## Menneskerettigheter

Menneskerettigheter er grunnleggende rettigheter som tilkommer alle mennesker, uavhengig av nasjonalitet, kjønn, etnisitet, religion eller andre forhold.

**Historisk bakgrunn:**
Etter andre verdenskrig og Holocaust vedtok FN Verdenserklæringen om menneskerettigheter i 1948. Dette var første gang verdenssamfunnet samlet seg om felles standarder for menneskeverd.

**Kjennetegn ved menneskerettighetene:**
- **Universelle:** Gjelder for alle mennesker
- **Udelelige:** Alle rettigheter er like viktige
- **Uavhendelige:** Kan ikke tas fra noen
- **Gjensidig avhengige:** Rettighetene henger sammen`,
    },
    {
      id: 'samfunnskunnskap-1-2-def-1',
      type: 'definition',
      title: 'Kategorier av menneskerettigheter',
      content: `**Sivile og politiske rettigheter:**
- Retten til liv
- Forbud mot tortur
- Ytringsfrihet
- Religionsfrihet
- Stemmerett
- Rettferdig rettssak

**Økonomiske, sosiale og kulturelle rettigheter:**
- Retten til utdanning
- Retten til helse
- Retten til arbeid
- Retten til en tilfredsstillende levestandard

**Solidaritetsrettigheter:**
- Retten til utvikling
- Retten til fred
- Retten til et rent miljø`,
    },
    {
      id: 'samfunnskunnskap-1-2-def-2',
      type: 'definition',
      title: 'Viktige internasjonale avtaler',
      content: `**FNs verdenserklæring (1948):**
30 artikler om grunnleggende menneskerettigheter. Ikke juridisk bindende, men moralsk forpliktende.

**Den europeiske menneskerettskonvensjonen (EMK, 1950):**
Juridisk bindende for medlemsland i Europarådet. Norge er tilsluttet.

**FNs barnekonvensjon (1989):**
Beskytter barns rettigheter. Barnets beste skal være et grunnleggende hensyn.

**ILO-konvensjon 169:**
Beskytter urfolks rettigheter til land, kultur og selvbestemmelse.

**Parisavtalen (2015):**
Internasjonal klimaavtale om å begrense global oppvarming.`,
    },
    {
      id: 'samfunnskunnskap-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Rettighetskonflikt',
      problem: `En avis publiserer en tegning som mange oppfatter som krenkende for en religiøs gruppe. Hvilke rettigheter står mot hverandre?`,
      solution: `**Rettigheter i konflikt:**

**Ytringsfriheten:**
- Retten til å uttrykke meninger
- Pressens rolle som vaktbikkje
- Viktig for demokratisk debatt

**Vern mot diskriminering og hatytringer:**
- Retten til ikke å bli krenket på grunn av religion
- Beskyttelse av minoriteter
- Respekt for religiøse følelser

**Avveining:**
Domstolene må veie rettighetene mot hverandre. I Norge har ytringsfriheten sterkt vern, men hatytringer og oppfordring til vold er forbudt. Grensen går ved ytringer som kan føre til diskriminering eller vold.

**Viktig poeng:** Det at noe er tillatt betyr ikke at det er klokt eller moralsk riktig.`,
    },
    {
      id: 'samfunnskunnskap-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-2-ex-1',
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
              'Solidaritetsrettighet',
            ],
          },
          {
            label: 'b',
            task: 'Ytringsfrihet',
            solution: 'Sivil og politisk rettighet',
            multipleChoiceOptions: [
              'Sivil og politisk rettighet',
              'Økonomisk rettighet',
              'Solidaritetsrettighet',
            ],
          },
          {
            label: 'c',
            task: 'Retten til et rent miljø',
            solution: 'Solidaritetsrettighet',
            multipleChoiceOptions: [
              'Solidaritetsrettighet',
              'Sivil rettighet',
              'Kulturell rettighet',
            ],
          },
        ],
        solution: 'a) Økonomisk/sosial/kulturell, b) Sivil/politisk, c) Solidaritetsrettighet',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor menneskerettighetene kalles universelle og uavhendelige.',
        solution: 'Universelle betyr at de gjelder for alle mennesker uansett hvem de er. Uavhendelige betyr at man ikke kan miste dem eller gi dem fra seg - de følger med det å være menneske.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan er menneskerettighetene beskyttet i Norge?',
        hints: ['Tenk på Grunnloven, lover og internasjonale avtaler'],
        solution: 'Grunnloven kapittel E inneholder menneskerettigheter. Menneskerettsloven gjør viktige konvensjoner til norsk lov. EMK gir rett til å klage til Den europeiske menneskerettsdomstolen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg et aktuelt menneskerettighetsbrudd i verden og analyser situasjonen.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke rettigheter brytes?',
            solution: 'Identifiser konkrete rettigheter fra konvensjonene.',
          },
          {
            label: 'b',
            task: 'Hvem er ansvarlig?',
            solution: 'Stater har hovedansvaret for å beskytte menneskerettighetene.',
          },
          {
            label: 'c',
            task: 'Hva kan verdenssamfunnet gjøre?',
            solution: 'Sanksjoner, diplomatisk press, støtte til sivilsamfunn, rettsforfølgelse.',
          },
        ],
        solution: 'Analysen bør være konkret og bruke relevante begreper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft: Bør rike land ha plikt til å hjelpe fattige land med å sikre menneskerettigheter?',
        hints: ['Tenk på solidaritet, suverenitet og praktiske muligheter'],
        solution: 'Argumenter for: Universelle rettigheter, global solidaritet, rike land har ressurser. Mot: Respekt for suverenitet, fare for nykolonialisme, mottakerland må ville endring selv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Politiske systemer og ideologier
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_3: TextbookChapter = {
  id: 'samfunnskunnskap-1-3',
  courseId: 'samfunnskunnskap',
  chapterNumber: '3',
  title: 'Politiske systemer og ideologier',
  description: 'Forstå ulike politiske systemer og ideologier som former samfunn.',
  estimatedMinutes: 65,
  competenceGoals: [
    'sammenligne ulike politiske systemer og ideologier',
    'reflektere over hvordan ideologier påvirker politiske valg',
  ],
  content: [
    {
      id: 'samfunnskunnskap-1-3-intro',
      type: 'text',
      content: `## Politiske systemer

Et politisk system er måten et samfunn organiserer makten og tar kollektive beslutninger. Ulike systemer gir ulik grad av frihet og deltakelse.

**Hovedtyper:**
- Demokrati - folkestyre med valg og rettigheter
- Autoritære regimer - begrenset frihet og deltakelse
- Totalitære regimer - staten kontrollerer alle aspekter av livet

**Viktige forskjeller:**
- Hvem har makten?
- Hvordan velges lederne?
- Hvilke rettigheter har borgerne?
- Er det maktfordeling?`,
    },
    {
      id: 'samfunnskunnskap-1-3-def-1',
      type: 'definition',
      title: 'Politiske ideologier',
      content: `**Liberalisme:**
Vektlegger individuell frihet, eiendomsrett og begrenset statsmakt. Markedsøkonomi.

**Konservatisme:**
Vektlegger tradisjon, stabilitet og gradvise endringer. Skepsis til raske reformer.

**Sosialisme:**
Vektlegger økonomisk likhet og felleseie. Staten skal omfordele ressurser.

**Sosialdemokrati:**
Kombinerer markedsøkonomi med sterk velferdsstat. Reformer innenfor demokratiet.

**Kommunisme:**
Mål om klasseløst samfunn uten privat eiendom. Historisk knyttet til ettpartistater.

**Fascisme:**
Autoritær nasjonalisme. Diktatur, undertrykkelse av opposisjon, ofte rasisme.

**Populisme:**
Hevder å representere "folket" mot "eliten". Kan finnes på både høyre- og venstresiden.`,
    },
    {
      id: 'samfunnskunnskap-1-3-def-2',
      type: 'definition',
      title: 'Politiske akser',
      content: `**Høyre-venstre-aksen:**
- Venstresiden: Mer stat, omfordeling, kollektive løsninger
- Høyresiden: Mindre stat, individuell frihet, markedsløsninger

**Autoritær-libertær-aksen:**
- Autoritær: Sterk stat, kontroll, tradisjonelle verdier
- Libertær: Personlig frihet, toleranse, mangfold

**GAL-TAN-skalaen:**
- GAL (Grønn, Alternativ, Libertær): Miljø, mangfold, internasjonalisme
- TAN (Tradisjonell, Autoritær, Nasjonalistisk): Tradisjon, orden, nasjonal identitet`,
    },
    {
      id: 'samfunnskunnskap-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Ideologier i praksis',
      problem: `Hvordan vil ulike ideologier forholde seg til spørsmålet om skattlegging av de rike?`,
      solution: `**Liberalisme:**
Lave skatter for å fremme økonomisk frihet og vekst. Tror markedet fordeler ressurser best.

**Konservatisme:**
Moderat skattlegging, skeptisk til store endringer. Vil bevare eksisterende ordninger.

**Sosialdemokrati:**
Progressive skatter der de rike betaler mer. Finansierer velferdsstaten.

**Sosialisme:**
Høy skattlegging for å omfordele fra rike til fattige. Redusere ulikhet.

**Populisme:**
Kan argumentere for høye skatter på "eliten" eller mot alle skatter avhengig av retning.

**Poenget:** Ideologier gir ulike svar på samme spørsmål fordi de har ulike verdier og mål.`,
    },
    {
      id: 'samfunnskunnskap-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Match ideologien med dens hovedkjennetegn:',
        subTasks: [
          {
            label: 'a',
            task: 'Liberalisme',
            solution: 'Individuell frihet og markedsøkonomi',
            multipleChoiceOptions: [
              'Individuell frihet og markedsøkonomi',
              'Økonomisk likhet og felleseie',
              'Tradisjon og gradvise endringer',
            ],
          },
          {
            label: 'b',
            task: 'Sosialisme',
            solution: 'Økonomisk likhet og omfordeling',
            multipleChoiceOptions: [
              'Økonomisk likhet og omfordeling',
              'Begrenset statsmakt',
              'Nasjonalisme og sterk leder',
            ],
          },
          {
            label: 'c',
            task: 'Konservatisme',
            solution: 'Tradisjon og stabilitet',
            multipleChoiceOptions: [
              'Tradisjon og stabilitet',
              'Revolusjon og klasseløst samfunn',
              'Grønn politikk og internasjonalisme',
            ],
          },
        ],
        solution: 'a) Individuell frihet, b) Økonomisk likhet, c) Tradisjon og stabilitet',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom demokrati, autoritære og totalitære regimer.',
        solution: 'Demokrati: Frie valg, rettigheter, maktfordeling. Autoritært: Begrenset frihet, kontrollerte valg, men noe sivilt liv. Totalitært: Staten kontrollerer alt, ingen opposisjon tillatt, ideologisk kontroll.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen mellom høyre-venstre-aksen og autoritær-libertær-aksen?',
        solution: 'Høyre-venstre handler om økonomisk politikk (stat vs. marked). Autoritær-libertær handler om personlig frihet og verdispørsmål. Man kan kombinere disse ulikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Velg to ideologier og sammenlign deres syn på statens rolle i økonomien.',
        hints: ['Bruk konkrete eksempler på politikk'],
        solution: 'Sammenligningen bør vise tydelige forskjeller med konkrete eksempler, f.eks. skatt, velferdsordninger, regulering av næringsliv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft: Kan populisme være en trussel mot demokratiet?',
        hints: ['Tenk på polarisering, angrep på institusjoner, minoriteters rettigheter'],
        solution: 'Populisme kan true demokratiet ved å undergrave institusjoner, spre splittelse, ignorere minoritetsrettigheter. Men det kan også revitalisere demokratiet ved å engasjere velgere som føler seg oversett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvor vil du plassere deg selv på høyre-venstre-aksen? Begrunn svaret.',
        hints: ['Tenk på konkrete saker som skatt, velferd, innvandring'],
        solution: 'Svaret bør vise refleksjon over egne verdier og standpunkter, med konkrete eksempler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Det norske politiske systemet
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_4: TextbookChapter = {
  id: 'samfunnskunnskap-1-4',
  courseId: 'samfunnskunnskap',
  chapterNumber: '4',
  title: 'Det norske politiske systemet',
  description: 'Forstå hvordan det norske demokratiet er organisert og fungerer.',
  estimatedMinutes: 65,
  competenceGoals: [
    'gjøre rede for det politiske systemet i Norge og hvordan beslutninger fattes',
    'analysere samspillet mellom ulike politiske institusjoner',
  ],
  content: [
    {
      id: 'samfunnskunnskap-1-4-intro',
      type: 'text',
      content: `## Det norske styringssystemet

Norge er et konstitusjonelt monarki med parlamentarisk styresett. Det betyr at vi har en konge som statsoverhode, men den reelle makten ligger hos folkevalgte organer.

**Grunnloven fra 1814:**
- Norges viktigste lov
- Bygger på maktfordelingsprinsippet
- Sikrer grunnleggende rettigheter
- Har blitt endret mange ganger

**Maktfordelingen:**
- Stortinget (lovgivende makt)
- Regjeringen (utøvende makt)
- Domstolene (dømmende makt)`,
    },
    {
      id: 'samfunnskunnskap-1-4-def-1',
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
- Statsoverhode med symbolsk rolle
- Åpner Stortinget
- Underskriver lover
- Ingen reell politisk makt

**Domstolene:**
- Tingrett, lagmannsrett, Høyesterett
- Dømmer i enkeltsaker
- Kan prøve om lover strider mot Grunnloven`,
    },
    {
      id: 'samfunnskunnskap-1-4-def-2',
      type: 'definition',
      title: 'Norske politiske partier',
      content: `**Høyresiden:**
- **Høyre (H):** Konservativt, lavere skatter, privat næringsliv
- **Fremskrittspartiet (FrP):** Lavere skatter, strengere innvandring

**Sentrum:**
- **Venstre (V):** Liberalt, miljø, individuell frihet
- **Kristelig Folkeparti (KrF):** Kristne verdier, familiepolitikk
- **Senterpartiet (Sp):** Distriktspolitikk, EU-motstand

**Venstresiden:**
- **Arbeiderpartiet (Ap):** Sosialdemokratisk, arbeiderbevegelsen
- **Sosialistisk Venstreparti (SV):** Sosialistisk, miljø, omfordeling
- **Rødt (R):** Sosialistisk, mot kapitalisme
- **Miljøpartiet De Grønne (MDG):** Miljø og klima`,
    },
    {
      id: 'samfunnskunnskap-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Hvordan blir en lov til?',
      problem: `Regjeringen vil endre bilavgiftene. Hvordan går prosessen?`,
      solution: `**Lovprosessen:**

1. **Utredning:** Regjeringen utreder saken, ofte med høringer der berørte parter får uttale seg.

2. **Proposisjon:** Regjeringen fremmer forslag til Stortinget (Prop. L).

3. **Komitebehandling:** Saken sendes til finanskomiteen som avgir innstilling.

4. **Debatt:** Stortinget debatterer saken i plenum.

5. **Første votering:** Stortinget stemmer over forslaget.

6. **Andre votering:** Minst tre dager senere stemmes det på nytt.

7. **Sanksjon:** Kongen i statsråd underskriver loven.

8. **Ikrafttredelse:** Loven trer i kraft på fastsatt dato.

**Underveis:** Opposisjonen kan fremme endringsforslag, og lobbyister forsøker å påvirke.`,
    },
    {
      id: 'samfunnskunnskap-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Match institusjonen med dens hovedfunksjon:',
        subTasks: [
          {
            label: 'a',
            task: 'Stortinget',
            solution: 'Vedtar lover og kontrollerer regjeringen',
            multipleChoiceOptions: [
              'Vedtar lover og kontrollerer regjeringen',
              'Utfører politikken',
              'Dømmer i straffesaker',
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
            ],
          },
          {
            label: 'c',
            task: 'Høyesterett',
            solution: 'Øverste domstol, kan prøve lover mot Grunnloven',
            multipleChoiceOptions: [
              'Øverste domstol, kan prøve lover mot Grunnloven',
              'Vedtar statsbudsjettet',
              'Leder regjeringen',
            ],
          },
        ],
        solution: 'a) Lovgivende/kontroll, b) Utøvende, c) Dømmende',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva parlamentarisme betyr og hvordan det fungerer i Norge.',
        solution: 'Parlamentarisme betyr at regjeringen må ha støtte fra flertallet i Stortinget. Hvis regjeringen taper et mistillitsvedtak, må den gå av. Regjeringen står til ansvar overfor Stortinget.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor er maktfordelingsprinsippet viktig?',
        hints: ['Tenk på hva som kan skje uten maktfordeling'],
        solution: 'Maktfordeling hindrer maktmisbruk ved at de tre statsmaktene kontrollerer hverandre. Ingen kan alene vedta, gjennomføre og dømme. Det sikrer rettssikkerhet og demokratisk kontroll.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Plasser de norske partiene på høyre-venstre-aksen og forklar kort hva som kjennetegner hvert parti.',
        solution: 'Fra venstre: Rødt, SV, Ap, MDG, Sp, KrF, V, H, FrP. Hvert parti bør beskrives med 1-2 kjennetegn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er forskjellen mellom flertallsregjering og mindretallsregjering?',
        solution: 'Flertallsregjering har støtte fra over halvparten av Stortinget og kan vedta saker selv. Mindretallsregjering må forhandle med andre partier for å få flertall for sine forslag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft: Bør valgordningen i Norge endres? Vurder fordeler og ulemper med dagens system.',
        hints: ['Tenk på sperregrense, utjevningsmandater, valgkretser'],
        solution: 'Dagens system sikrer bred representasjon men kan gi ustabile regjeringer. Sperregrensen holder små partier ute. Utjevningsmandater gir proporsjonalitet. Distriktsmandater sikrer geografisk representasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: Medier, demokrati og ytringsfrihet
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_5: TextbookChapter = {
  id: 'samfunnskunnskap-1-5',
  courseId: 'samfunnskunnskap',
  chapterNumber: '5',
  title: 'Medier, demokrati og ytringsfrihet',
  description: 'Forstå medienes rolle i demokratiet og utfordringer knyttet til ytringsfrihet.',
  estimatedMinutes: 60,
  competenceGoals: [
    'analysere medienes rolle i demokratiet og vurdere kilder kritisk',
    'drøfte ytringsfrihetens grenser og betydning',
  ],
  content: [
    {
      id: 'samfunnskunnskap-1-5-intro',
      type: 'text',
      content: `## Mediene i demokratiet

Mediene kalles ofte "den fjerde statsmakt" fordi de spiller en viktig rolle i å kontrollere makthavere og informere befolkningen.

**Medienes funksjoner:**
- Informere om viktige saker
- Være vaktbikkje overfor makthavere
- Skape arena for debatt
- Underholde

**Medielandskapet i endring:**
- Fra papiravis til digitale medier
- Sosiale medier som nyhetskanal
- Algoritmestyrte nyhetsstrømmer
- Utfordringer med falske nyheter`,
    },
    {
      id: 'samfunnskunnskap-1-5-def-1',
      type: 'definition',
      title: 'Sentrale mediebegreper',
      content: `**Pressefrihet:**
Medienes rett til å publisere uten statlig sensur eller kontroll.

**Redaktøransvaret:**
Redaktøren har ansvar for alt som publiseres i mediet.

**Vær Varsom-plakaten:**
Pressens etiske regler, vedtatt av Pressens Faglige Utvalg (PFU).

**Kildekritikk:**
Å vurdere om en kilde er troverdig, uavhengig og kompetent.

**Ekkokammer:**
Når man bare eksponeres for meninger man allerede er enig i.

**Falske nyheter:**
Bevisst feilinformasjon som spres som sannhet.

**Algoritme:**
Dataprogram som styrer hva du ser i sosiale medier basert på tidligere atferd.`,
    },
    {
      id: 'samfunnskunnskap-1-5-def-2',
      type: 'definition',
      title: 'Ytringsfrihet og grenser',
      content: `**Ytringsfriheten (Grunnloven § 100):**
- Retten til å uttrykke meninger
- Retten til å motta informasjon
- Retten til å spre informasjon

**Begrensninger:**
- Hatytringer (rasisme, homofobi)
- Oppfordring til vold
- Trusler
- Ærekrenkelser
- Personvern
- Rikets sikkerhet

**Viktig prinsipp:**
Ytringsfriheten beskytter upopulære meninger, men ikke oppfordring til skade mot andre.`,
    },
    {
      id: 'samfunnskunnskap-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Kildekritikk',
      problem: `Du leser en oppsiktsvekkende nyhet på sosiale medier. Hvordan bør du vurdere den?`,
      solution: `**Kildekritiske spørsmål:**

1. **Hvem står bak?**
   - Er det en anerkjent nyhetskilde?
   - Finnes kontaktinformasjon?
   - Hvem eier nettstedet?

2. **Hva er formålet?**
   - Informere, påvirke eller selge?
   - Er det reklame eller redaksjonelt?

3. **Finnes det flere kilder?**
   - Skriver andre medier om samme sak?
   - Stemmer opplysningene overens?

4. **Når ble det publisert?**
   - Er informasjonen oppdatert?
   - Kan det være en gammel sak?

5. **Hvordan er fremstillingen?**
   - Balansert eller ensidig?
   - Sensasjonell overskrift?
   - Mangler viktig informasjon?

**Tommelfingerregel:** Hvis noe virker for godt (eller ille) til å være sant, er det ofte det.`,
    },
    {
      id: 'samfunnskunnskap-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvorfor mediene kalles "den fjerde statsmakt".',
        solution: 'Mediene kontrollerer de tre statsmaktene ved å avdekke maktmisbruk, informere borgerne og skape debatt. De har makt til å sette dagsorden og påvirke opinionen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er et ekkokammer, og hvorfor kan det være problematisk for demokratiet?',
        solution: 'Ekkokammer oppstår når man bare eksponeres for meninger man er enig i. Problematisk fordi det hindrer innsikt i andres perspektiver, forsterker polarisering og gjør det vanskeligere å finne kompromisser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvor går grensen for ytringsfrihet? Gi eksempler på ytringer som ikke er beskyttet.',
        solution: 'Grensen går ved hatytringer, trusler, oppfordring til vold, ærekrenkelser. Eksempler: Rasistiske uttalelser, oppfordring til terrorisme, falske anklager mot navngitte personer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Analyser en nyhetssak med kildekritiske spørsmål.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem står bak saken?',
            solution: 'Identifiser avisen/nettstedet og vurder troverdigheten.',
          },
          {
            label: 'b',
            task: 'Hvilke kilder brukes?',
            solution: 'Er kildene navngitt? Er det flere kilder? Er de uavhengige?',
          },
          {
            label: 'c',
            task: 'Er fremstillingen balansert?',
            solution: 'Får begge sider komme til orde? Er vinklingen nøytral?',
          },
        ],
        solution: 'Analysen bør vise kritisk vurdering av kildens troverdighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft: Bør sosiale medier reguleres strengere for å bekjempe falske nyheter?',
        hints: ['Tenk på ytringsfrihet, ansvar, tekniske muligheter'],
        solution: 'For: Spredning av feilinformasjon skader demokratiet. Mot: Sensur kan misbrukes, vanskelig å avgjøre hva som er falskt, privatselskaper bør ikke bestemme sannheten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvordan påvirker algoritmer i sosiale medier hva vi ser og mener?',
        solution: 'Algoritmer viser oss innhold basert på tidligere atferd, noe som forsterker eksisterende interesser og meninger. Dette kan skape ekkokammer, øke polarisering og påvirke vårt verdensbilde uten at vi er klar over det.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Økonomi og velferdsstat
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_6: TextbookChapter = {
  id: 'samfunnskunnskap-1-6',
  courseId: 'samfunnskunnskap',
  chapterNumber: '6',
  title: 'Økonomi og velferdsstat',
  description: 'Forstå sammenhengen mellom økonomi, skatt og velferdsstaten.',
  estimatedMinutes: 65,
  competenceGoals: [
    'gjøre rede for hovedtrekk ved den norske velferdsstaten',
    'drøfte sammenhengen mellom økonomi, skatt og offentlige tjenester',
  ],
  content: [
    {
      id: 'samfunnskunnskap-1-6-intro',
      type: 'text',
      content: `## Den norske velferdsstaten

Norge har en av verdens mest omfattende velferdsstater. Velferdsstaten sikrer innbyggerne grunnleggende trygghet gjennom offentlige tjenester og ytelser.

**Velferdsstatens hovedprinsipper:**
- Universelle ordninger - gjelder alle
- Skattefinansiert - fellesskapet betaler
- Omfordeling - fra rike til fattige
- Trygghet - fra vugge til grav

**Viktige velferdsordninger:**
- Gratis utdanning
- Offentlig helsevesen
- Pensjon og trygd
- Foreldrepermisjon
- Dagpenger ved arbeidsledighet`,
    },
    {
      id: 'samfunnskunnskap-1-6-def-1',
      type: 'definition',
      title: 'Økonomiske begreper',
      content: `**Bruttonasjonalprodukt (BNP):**
Verdien av alle varer og tjenester produsert i et land på ett år.

**Statsbudsjettet:**
Statens årlige plan for inntekter og utgifter. Vedtas av Stortinget.

**Skatter og avgifter:**
- Inntektsskatt - skatt på lønn
- Formuesskatt - skatt på verdier
- Moms - avgift på varer og tjenester
- Særavgifter - på alkohol, tobakk, drivstoff

**Oljefondet (Statens pensjonsfond utland):**
Norges sparefond fra oljeinntekter. Verdens største statlige fond.

**Handlingsregelen:**
Staten kan bruke inntil 3 % av oljefondet hvert år.`,
    },
    {
      id: 'samfunnskunnskap-1-6-def-2',
      type: 'definition',
      title: 'Velferdsmodeller',
      content: `**Den skandinaviske modellen:**
- Høyt skattenivå
- Universelle ordninger
- Sterk stat
- Trepartssamarbeid (stat, arbeidsgivere, arbeidstakere)

**Den liberale modellen (USA):**
- Lavt skattenivå
- Behovsprøvde ordninger
- Mer privat ansvar
- Begrenset offentlig velferd

**Den kontinentale modellen (Tyskland):**
- Moderat skattenivå
- Yrkesbaserte ordninger
- Forsikringsprinsipp
- Familie som sikkerhetsnett`,
    },
    {
      id: 'samfunnskunnskap-1-6-example-1',
      type: 'example',
      title: 'Eksempel: Skatt og velferd',
      problem: `En familie med to voksne og to barn bruker offentlige tjenester. Hva får de igjen for skatten?`,
      solution: `**Eksempler på det familien får:**

**Utdanning:**
- Barnehage (subsidiert)
- Grunnskole (gratis)
- Videregående (gratis)
- Høyere utdanning (gratis + stipend/lån)

**Helse:**
- Fastlege (egenandel dekket over frikort)
- Sykehus (gratis)
- Tannlege for barn (gratis)

**Trygd og støtte:**
- Barnetrygd
- Kontantstøtte
- Foreldrepermisjon
- Sykepenger ved sykdom

**Infrastruktur:**
- Veier og kollektivtransport
- Bibliotek og kulturhus
- Parker og friområder

**Trygghet:**
- Politi
- Brannvesen
- Forsvar

**Regnestykket:** Mange mener man får mer igjen i tjenester enn man betaler i skatt, spesielt for familier med barn.`,
    },
    {
      id: 'samfunnskunnskap-1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner den skandinaviske velferdsmodellen?',
        solution: 'Høyt skattenivå, universelle ordninger for alle, sterk offentlig sektor, trepartssamarbeid mellom stat, arbeidsgivere og arbeidstakere, omfordeling fra rike til fattige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva oljefondet er og hvorfor handlingsregelen er viktig.',
        solution: 'Oljefondet er Norges sparefond fra oljeinntekter. Handlingsregelen begrenser bruken til 3 % årlig for å sikre at pengene varer, unngå overoppheting av økonomien, og spare til fremtidige generasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sammenlign den skandinaviske og den liberale velferdsmodellen.',
        subTasks: [
          {
            label: 'a',
            task: 'Skattenivå',
            solution: 'Skandinavisk: Høyt. Liberal: Lavt.',
          },
          {
            label: 'b',
            task: 'Hvem får ytelser?',
            solution: 'Skandinavisk: Alle (universelt). Liberal: De som trenger det (behovsprøvd).',
          },
          {
            label: 'c',
            task: 'Statens rolle',
            solution: 'Skandinavisk: Sterk, aktiv stat. Liberal: Begrenset stat, mer privat ansvar.',
          },
        ],
        solution: 'Skandinavisk = høy skatt, universelle ordninger. Liberal = lav skatt, privat ansvar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Lag en oversikt over de viktigste inntektene og utgiftene i statsbudsjettet.',
        hints: ['Bruk ssb.no eller statsbudsjettet.no'],
        solution: 'Inntekter: Skatter, avgifter, oljeinntekter. Utgifter: Helse, utdanning, sosial sikkerhet, forsvar, samferdsel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft: Bør skattenivået i Norge økes eller senkes?',
        hints: ['Tenk på både fordeler og ulemper med begge alternativer'],
        solution: 'For høyere skatt: Bedre velferd, mindre ulikhet. Mot: Mindre individuell frihet, kan hemme arbeidsinnsats. For lavere skatt: Mer personlig ansvar, kan stimulere økonomi. Mot: Svekket velferd, økt ulikhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvilke utfordringer står den norske velferdsstaten overfor i fremtiden?',
        hints: ['Tenk på demografi, økonomi og globalisering'],
        solution: 'Eldrebølgen (flere pensjonister), mindre oljeinntekter, økende helsekostnader, klimaomstilling, innvandring og integrering, globalisering og skattekonkurranse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Arbeidsliv og rettigheter
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_7: TextbookChapter = {
  id: 'samfunnskunnskap-1-7',
  courseId: 'samfunnskunnskap',
  chapterNumber: '7',
  title: 'Arbeidsliv og rettigheter',
  description: 'Forstå arbeidslivets organisering og dine rettigheter som arbeidstaker.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjøre rede for arbeidslivets organisering og den norske modellen',
    'drøfte rettigheter og plikter i arbeidslivet',
  ],
  content: [
    {
      id: 'samfunnskunnskap-1-7-intro',
      type: 'text',
      content: `## Den norske arbeidslivsmodellen

Norge har en spesiell modell for organisering av arbeidslivet, ofte kalt "den norske modellen". Denne bygger på samarbeid mellom partene i arbeidslivet.

**Kjennetegn:**
- Høy organisasjonsgrad
- Trepartssamarbeid
- Tariffavtaler og kollektive forhandlinger
- Medbestemmelse på arbeidsplassen
- Sterkt stillingsvern

**De tre partene:**
- Arbeidstakerorganisasjoner (LO, YS, Unio, Akademikerne)
- Arbeidsgiverorganisasjoner (NHO, Virke, KS)
- Staten (som lovgiver og mekler)`,
    },
    {
      id: 'samfunnskunnskap-1-7-def-1',
      type: 'definition',
      title: 'Sentrale begreper i arbeidslivet',
      content: `**Tariffavtale:**
Avtale mellom arbeidstaker- og arbeidsgiverorganisasjoner om lønn og arbeidsvilkår.

**Arbeidsmiljøloven:**
Lov som regulerer arbeidsforhold, arbeidstid, oppsigelse og HMS.

**Hovedavtalen:**
"Arbeidslivets grunnlov" - avtale om samarbeidsformer mellom partene.

**Streik:**
Arbeidstakere nekter å jobbe for å presse gjennom krav.

**Lockout:**
Arbeidsgivere stenger arbeidstakere ute.

**Organisasjonsgrad:**
Andelen arbeidstakere som er fagorganisert.

**Medbestemmelse:**
Arbeidstakeres rett til innflytelse på arbeidsplassen.`,
    },
    {
      id: 'samfunnskunnskap-1-7-def-2',
      type: 'definition',
      title: 'Dine rettigheter som arbeidstaker',
      content: `**Arbeidskontrakt:**
- Skriftlig avtale er påbudt
- Skal inneholde lønn, arbeidstid, arbeidsoppgaver

**Arbeidstid:**
- Maks 9 timer per dag, 40 timer per uke
- Rett til overtidsbetaling
- Minst 11 timer hvile mellom vakter

**Ferie:**
- Minst 25 virkedager per år
- Rett til feriepenger

**Oppsigelse:**
- Krav om saklig grunn
- Oppsigelsesfrist (vanligvis 1-3 måneder)
- Rett til å bestride usaklig oppsigelse

**HMS:**
- Krav til trygt arbeidsmiljø
- Verneombud på arbeidsplassen`,
    },
    {
      id: 'samfunnskunnskap-1-7-example-1',
      type: 'example',
      title: 'Eksempel: Lønnsforhandlinger',
      problem: `Det er tid for lønnsoppgjør. Hvordan foregår forhandlingene?`,
      solution: `**Lønnsoppgjøret steg for steg:**

1. **Forberedelser:**
   - LO og NHO kartlegger økonomisk situasjon
   - Teknisk beregningsutvalg (TBU) lager prognoser

2. **Frontfaget:**
   - Industrien forhandler først
   - Setter ramme for andre sektorer
   - Sikrer konkurransekraft

3. **Forhandlinger:**
   - Partene møtes og fremmer krav
   - Forhandler om lønnsvekst og andre forhold
   - Forsøker å bli enige

4. **Hvis uenighet:**
   - Mekling hos Riksmekleren
   - Partene prøver å finne løsning
   - Hvis ikke: Streik/lockout

5. **Resultat:**
   - Tariffavtale for kommende periode
   - Lønnsvekst og eventuelle andre forbedringer

**Viktig prinsipp:** Frontfagsmodellen sikrer at lønnsveksten ikke overstiger det konkurranseutsatt industri tåler.`,
    },
    {
      id: 'samfunnskunnskap-1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva trepartssamarbeidet innebærer og hvorfor det er viktig.',
        solution: 'Trepartssamarbeidet er samarbeid mellom arbeidstakere, arbeidsgivere og staten om arbeidslivsspørsmål. Det sikrer dialog, forutsigbarhet og legitimitet i beslutninger som påvirker arbeidslivet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva bør en arbeidskontrakt inneholde?',
        solution: 'Partenes navn, arbeidssted, stillingstittel og arbeidsoppgaver, lønn og lønnsutbetaling, arbeidstid, ferierettigheter, oppsigelsesfrister, eventuelle tariffavtaler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen mellom streik og lockout?',
        solution: 'Streik er arbeidstakernes virkemiddel der de nekter å jobbe. Lockout er arbeidsgivernes virkemiddel der de stenger arbeidstakerne ute. Begge brukes som pressmiddel i arbeidskonflikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er det viktig å være fagorganisert?',
        hints: ['Tenk på individuelle og kollektive fordeler'],
        solution: 'Kollektiv forhandlingsstyrke, juridisk hjelp, bedre lønns- og arbeidsvilkår, påvirkning på arbeidsplassen, trygghet ved konflikter, innflytelse på politikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft: Bør det innføres minstelønn i Norge?',
        hints: ['Norge har ikke lovfestet minstelønn, men tariffavtaler'],
        solution: 'For: Sikrer alle anstendig lønn, beskytter uorganiserte. Mot: Svekker tariffavtalesystemet, kan gi lavere lønn enn dagens system, stiv ordning. Norge bruker allmenngjøring av tariffavtaler i stedet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvilke utfordringer står den norske arbeidslivsmodellen overfor?',
        hints: ['Tenk på globalisering, teknologi, arbeidsinnvandring'],
        solution: 'Synkende organisasjonsgrad, arbeidsinnvandring og sosial dumping, useriøse aktører, plattformøkonomi, automatisering og AI, økt bruk av midlertidige ansettelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: Identitet, kultur og mangfold
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_8: TextbookChapter = {
  id: 'samfunnskunnskap-1-8',
  courseId: 'samfunnskunnskap',
  chapterNumber: '8',
  title: 'Identitet, kultur og mangfold',
  description: 'Forstå hvordan identitet formes og hvordan vi lever sammen i et mangfoldig samfunn.',
  estimatedMinutes: 60,
  competenceGoals: [
    'reflektere over hvordan identitet utvikles og kommer til uttrykk',
    'drøfte muligheter og utfordringer i et flerkulturelt samfunn',
  ],
  content: [
    {
      id: 'samfunnskunnskap-1-8-intro',
      type: 'text',
      content: `## Identitet og tilhørighet

Identitet handler om hvem vi er og hvem vi opplever oss som. Identiteten vår formes gjennom hele livet og påvirkes av mange faktorer.

**Identitetens byggeklosser:**
- Familie og oppvekst
- Kjønn og seksualitet
- Etnisitet og kulturell bakgrunn
- Religion og livssyn
- Utdanning og yrke
- Interesser og verdier
- Sosiale relasjoner

**Identitet i endring:**
I et moderne samfunn har vi større frihet til å forme vår egen identitet, men også større usikkerhet om hvem vi er og vil være.`,
    },
    {
      id: 'samfunnskunnskap-1-8-def-1',
      type: 'definition',
      title: 'Sentrale begreper',
      content: `**Kultur:**
Felles verdier, normer, tradisjoner og levemåter som deles av en gruppe.

**Etnisitet:**
Tilhørighet til en gruppe med felles opphav, språk eller kultur.

**Flerkulturelt samfunn:**
Samfunn der mennesker med ulik kulturell bakgrunn lever sammen.

**Integrering:**
Prosess der innvandrere blir del av samfunnet mens de beholder deler av egen kultur.

**Assimilering:**
Når minoriteter fullt ut overtar majoritetens kultur.

**Segregering:**
Når grupper lever atskilt fra hverandre.

**Rasisme:**
Diskriminering basert på etnisitet eller hudfarge.

**Diskriminering:**
Urettferdig forskjellsbehandling av personer eller grupper.`,
    },
    {
      id: 'samfunnskunnskap-1-8-def-2',
      type: 'definition',
      title: 'Nasjonale minoriteter og urfolk',
      content: `**Samer:**
Urfolk med rettigheter etter ILO-konvensjon 169. Eget parlament (Sametinget).

**Nasjonale minoriteter i Norge:**
- Kvener/norskfinner
- Skogfinner
- Jøder
- Rom (sigøynere)
- Romani (tatere)

**Rettigheter:**
- Rett til å bevare språk og kultur
- Beskyttelse mot diskriminering
- Politisk representasjon
- Kulturstøtte`,
    },
    {
      id: 'samfunnskunnskap-1-8-example-1',
      type: 'example',
      title: 'Eksempel: Identitet i praksis',
      problem: `Sara har norsk mor og pakistansk far. Hun er født i Norge, snakker norsk, men feirer også pakistanske tradisjoner. Hvem er Sara?`,
      solution: `**Saras sammensatte identitet:**

Sara har en **flerkulturell identitet** som kombinerer:

**Norske elementer:**
- Norsk statsborgerskap
- Norsk som hovedspråk
- Norsk skolegang og venner
- Norske verdier og normer

**Pakistanske elementer:**
- Familietradisjoner
- Mat og høytider
- Kontakt med slekt i Pakistan
- Muligens religion og språk

**Viktige poenger:**
- Identitet er ikke enten/eller, men både/og
- Sara definerer selv hvem hun er
- Hun kan veksle mellom kulturer avhengig av situasjon
- Å ha flere kulturer kan være en ressurs
- Hun trenger ikke velge én identitet

**Samfunnets rolle:**
Et inkluderende samfunn lar Sara være både norsk og pakistansk uten å måtte velge.`,
    },
    {
      id: 'samfunnskunnskap-1-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvilke faktorer har påvirket din identitet? Nevn minst fem.',
        hints: ['Tenk på familie, venner, interesser, verdier, opplevelser'],
        solution: 'Svaret bør reflektere over konkrete faktorer som har formet egen identitet, som familie, skole, venner, fritidsaktiviteter, religion, sted, osv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom integrering og assimilering.',
        solution: 'Integrering: Innvandrere blir del av samfunnet mens de beholder deler av egen kultur. Assimilering: Minoriteter gir helt opp egen kultur og overtar majoritetens. Integrering er toveis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilke nasjonale minoriteter har Norge, og hvilke rettigheter har de?',
        solution: 'Kvener, skogfinner, jøder, rom og romani. Rettigheter: Bevare språk og kultur, beskyttelse mot diskriminering, kulturstøtte, politisk representasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er rasisme og hvordan kommer det til uttrykk?',
        subTasks: [
          {
            label: 'a',
            task: 'Definer rasisme.',
            solution: 'Diskriminering og fordommer basert på etnisitet, hudfarge eller nasjonal opprinnelse.',
          },
          {
            label: 'b',
            task: 'Gi eksempler på åpen rasisme.',
            solution: 'Hatytringer, vold, trakassering, ekskludering basert på etnisitet.',
          },
          {
            label: 'c',
            task: 'Hva er strukturell rasisme?',
            solution: 'Systematisk forskjellsbehandling innebygd i samfunnsstrukturer.',
          },
        ],
        solution: 'Rasisme kan være åpen (direkte handlinger) eller strukturell (systemisk).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-8-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft: Hvilke muligheter og utfordringer gir et flerkulturelt samfunn?',
        hints: ['Tenk på både positive og negative sider'],
        solution: 'Muligheter: Kulturell berikelse, nye perspektiver, økonomisk gevinst. Utfordringer: Språkbarrierer, verdikonflikter, diskriminering, segregering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-8-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hvordan kan samfunnet motarbeide rasisme og diskriminering?',
        hints: ['Tenk på lover, utdanning, holdningsarbeid'],
        solution: 'Lover mot diskriminering, undervisning om mangfold, holdningskampanjer, representasjon i media og arbeidsliv, støtte til ofre, straff for hatytringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9: Bærekraftig utvikling og globale utfordringer
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_9: TextbookChapter = {
  id: 'samfunnskunnskap-1-9',
  courseId: 'samfunnskunnskap',
  chapterNumber: '9',
  title: 'Bærekraftig utvikling og globale utfordringer',
  description: 'Forstå globale utfordringer og hvordan vi kan oppnå bærekraftig utvikling.',
  estimatedMinutes: 65,
  competenceGoals: [
    'drøfte sammenhenger mellom miljø, økonomi og sosiale forhold',
    'analysere globale utfordringer og vurdere mulige løsninger',
  ],
  content: [
    {
      id: 'samfunnskunnskap-1-9-intro',
      type: 'text',
      content: `## Bærekraftig utvikling

Bærekraftig utvikling betyr å dekke dagens behov uten å ødelegge for fremtidige generasjoner. Det krever balanse mellom miljø, økonomi og sosiale forhold.

**De tre dimensjonene:**
- Miljømessig bærekraft - ta vare på naturen
- Økonomisk bærekraft - skape verdier uten å tømme ressurser
- Sosial bærekraft - rettferdig fordeling og gode levekår

**FNs bærekraftsmål:**
17 mål som skal nås innen 2030:
- Utrydde fattigdom og sult
- God helse og utdanning
- Likestilling og anstendig arbeid
- Bærekraftige byer og samfunn
- Klimahandling og bevaring av natur`,
    },
    {
      id: 'samfunnskunnskap-1-9-def-1',
      type: 'definition',
      title: 'Globale utfordringer',
      content: `**Klimaendringer:**
Global oppvarming forårsaket av menneskelige utslipp. Fører til ekstremvær, havstigning, naturødeleggelse.

**Fattigdom og ulikhet:**
Stor forskjell mellom rike og fattige land. Over 700 millioner lever i ekstrem fattigdom.

**Konflikter og krig:**
Væpnede konflikter skaper lidelse, flyktninger og hindrer utvikling.

**Pandemier:**
Smittsomme sykdommer som sprer seg globalt, som covid-19.

**Tap av biologisk mangfold:**
Arter utryddes i høyt tempo på grunn av menneskers aktivitet.

**Migrasjon:**
Mennesker på flukt fra krig, forfølgelse eller klimaendringer.`,
    },
    {
      id: 'samfunnskunnskap-1-9-def-2',
      type: 'definition',
      title: 'Internasjonalt samarbeid',
      content: `**FN (De forente nasjoner):**
Verdensorganisasjon med 193 medlemsland. Arbeider for fred, sikkerhet og utvikling.

**Parisavtalen:**
Internasjonal klimaavtale fra 2015. Mål: Begrense oppvarming til 1,5 grader.

**EØS-avtalen:**
Norges avtale med EU om økonomisk samarbeid.

**NATO:**
Forsvarsallianse der medlemslandene forplikter seg til å forsvare hverandre.

**Bistand:**
Økonomisk støtte fra rike til fattige land for utvikling.

**NGOer (frivillige organisasjoner):**
Organisasjoner som Røde Kors, Leger Uten Grenser som driver humanitært arbeid.`,
    },
    {
      id: 'samfunnskunnskap-1-9-example-1',
      type: 'example',
      title: 'Eksempel: Klimapolitikk',
      problem: `Hvordan kan verden redusere klimautslipp når det er så mange motstridende interesser?`,
      solution: `**Interessekonflikter:**

**Utviklingsland vs. industriland:**
- Rike land har historisk stått for mest utslipp
- Fattige land vil utvikle seg og trenger energi
- Hvem skal betale for omstillingen?

**Økonomiske interesser:**
- Fossil industri vs. fornybar energi
- Arbeidsplasser i karbonintensive næringer
- Kortsiktig profitt vs. langsiktig bærekraft

**Mulige løsninger:**
- Internasjonale avtaler (Parisavtalen)
- Karbonavgifter og kvoter
- Investeringer i grønn teknologi
- Klimafinansiering til fattige land
- Individuell atferdsendring

**Viktig innsikt:** Klimakrisen krever både globalt samarbeid og lokale tiltak.`,
    },
    {
      id: 'samfunnskunnskap-1-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-9-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva bærekraftig utvikling betyr og nevn de tre dimensjonene.',
        solution: 'Bærekraftig utvikling = dekke dagens behov uten å ødelegge for fremtiden. Tre dimensjoner: Miljømessig, økonomisk og sosial bærekraft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-9-ex-2',
        number: '2',
        type: 'classic',
        task: 'Velg tre av FNs bærekraftsmål og forklar hvordan de henger sammen.',
        hints: ['Tenk på årsak-virkning-sammenhenger'],
        solution: 'Eksempel: Mål 1 (fattigdom), 2 (sult) og 4 (utdanning) henger sammen ved at fattigdom hindrer tilgang til mat og utdanning, mens utdanning er veien ut av fattigdom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-9-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er Parisavtalen og hvorfor er den viktig?',
        solution: 'Parisavtalen (2015) er en internasjonal klimaavtale der nesten alle land forplikter seg til å begrense global oppvarming til under 2 grader, helst 1,5.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-9-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan henger klimaendringer og konflikter sammen?',
        solution: 'Klimaendringer kan føre til tørke, flom, matmangel og ressursknapphet. Dette skaper migrasjon og konkurranse om ressurser som kan utløse konflikter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-9-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft: Bør rike land gi mer bistand til fattige land?',
        hints: ['Tenk på rettferdighet, effektivitet, interesser'],
        solution: 'For: Moralsk ansvar, historisk urettferdighet, investering i stabilitet. Mot: Korrupsjon, avhengighet, bør løses lokalt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-9-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-9-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hva kan du som enkeltperson gjøre for bærekraftig utvikling?',
        hints: ['Tenk på forbruk, transport, politisk engasjement'],
        solution: 'Redusere forbruk og matsvinn, velge miljøvennlig transport, stemme på partier med god klimapolitikk, engasjere seg i organisasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: Konflikter og samarbeid internasjonalt
// ============================================================================

export const CHAPTER_SAMFUNNSKUNNSKAP_10: TextbookChapter = {
  id: 'samfunnskunnskap-1-10',
  courseId: 'samfunnskunnskap',
  chapterNumber: '10',
  title: 'Konflikter og samarbeid internasjonalt',
  description: 'Forstå årsaker til konflikter og hvordan internasjonalt samarbeid kan skape fred.',
  estimatedMinutes: 65,
  competenceGoals: [
    'analysere årsaker til og konsekvenser av internasjonale konflikter',
    'vurdere betydningen av internasjonalt samarbeid for fred og sikkerhet',
  ],
  content: [
    {
      id: 'samfunnskunnskap-1-10-intro',
      type: 'text',
      content: `## Konflikter i verden

Konflikter har alltid preget menneskelig historie. I dag står verden overfor både tradisjonelle statskonflikter og nye typer trusler.

**Typer konflikter:**
- Mellomstatlige konflikter (krig mellom land)
- Borgerkrig (krig innad i land)
- Terrorisme
- Hybride trusler (cyberangrep, desinformasjon)

**Årsaker til konflikter:**
- Territorielle krav
- Ressurskamp (olje, vann, land)
- Etniske og religiøse motsetninger
- Politisk undertrykkelse
- Økonomisk ulikhet
- Historiske urettferdigheter`,
    },
    {
      id: 'samfunnskunnskap-1-10-def-1',
      type: 'definition',
      title: 'Sentrale begreper',
      content: `**Suverenitet:**
En stats rett til å styre seg selv uten innblanding utenfra.

**Folkerett:**
Internasjonale regler som regulerer forholdet mellom stater.

**Humanitær intervensjon:**
Militær inngripen for å beskytte sivile mot overgrep.

**Krigforbrytelser:**
Alvorlige brudd på krigens lover, som angrep på sivile.

**Folkemord (genocid):**
Systematisk utryddelse av en folkegruppe.

**Flyktning:**
Person som har flyktet fra hjemlandet på grunn av krig eller forfølgelse.

**Internt fordrevet:**
Person som har flyktet, men fortsatt er i eget land.`,
    },
    {
      id: 'samfunnskunnskap-1-10-def-2',
      type: 'definition',
      title: 'Internasjonale organisasjoner',
      content: `**FN (De forente nasjoner):**
- 193 medlemsland
- Sikkerhetsrådet med vetorett for stormaktene
- Fredsbevarende operasjoner
- Menneskerettighetsarbeid

**NATO (North Atlantic Treaty Organization):**
- Forsvarsallianse
- Artikkel 5: Angrep på én er angrep på alle
- Norge medlem siden 1949

**EU (Den europeiske union):**
- Politisk og økonomisk samarbeid
- Felles marked og valuta (euro)
- Norge ikke medlem, men EØS-avtale

**Den internasjonale straffedomstolen (ICC):**
Dømmer enkeltpersoner for folkemord, forbrytelser mot menneskeheten og krigsforbrytelser.`,
    },
    {
      id: 'samfunnskunnskap-1-10-example-1',
      type: 'example',
      title: 'Eksempel: Konfliktanalyse',
      problem: `Hvordan kan vi analysere en internasjonal konflikt?`,
      solution: `**Analyseverktøy:**

1. **Identifiser partene:**
   - Hvem er de direkte partene?
   - Hvem støtter dem utenfra?
   - Hvem er berørt?

2. **Kartlegg årsakene:**
   - Historiske årsaker
   - Politiske årsaker
   - Økonomiske årsaker
   - Sosiale og kulturelle årsaker

3. **Vurder konsekvensene:**
   - Humanitære konsekvenser
   - Politiske konsekvenser
   - Økonomiske konsekvenser
   - Regionale ringvirkninger

4. **Se på løsninger:**
   - Diplomatiske muligheter
   - Internasjonal innsats
   - Lokale fredsinitiativ

**Viktig:** Konflikter er komplekse og har sjelden enkle løsninger.`,
    },
    {
      id: 'samfunnskunnskap-1-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-10-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn og forklar tre vanlige årsaker til konflikter mellom land.',
        solution: 'Territorielle krav (grensekonflikter), ressurskamp (olje, vann), etniske/religiøse motsetninger (minoritetskonflikter).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-10-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva FNs sikkerhetsråd er og hvordan vetoretten fungerer.',
        solution: 'Sikkerhetsrådet har 15 medlemmer, hvorav 5 faste med vetorett. Vetoretten betyr at ett av disse landene kan blokkere enhver beslutning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-10-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er NATO og hvorfor er Norge medlem?',
        solution: 'NATO er en forsvarsallianse der medlemslandene forplikter seg til å forsvare hverandre. Norge er medlem for kollektiv sikkerhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-10-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er forskjellen mellom flyktning og internt fordrevet?',
        solution: 'Flyktning har krysset en internasjonal grense og har rettigheter etter Flyktningkonvensjonen. Internt fordrevet har flyktet innenfor eget land.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-10-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft: Bør verdenssamfunnet gripe inn militært for å stoppe folkemord?',
        hints: ['Tenk på suverenitet, menneskerettigheter, praktiske utfordringer'],
        solution: 'For: Moralsk plikt til å beskytte. Mot: Respekt for suverenitet, fare for eskalering, hvem bestemmer når man skal gripe inn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-10-ex-6',
        number: '6',
        type: 'classic',
        task: 'Velg en pågående konflikt og analyser den.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem er partene?',
            solution: 'Identifiser stater, grupperinger, og eventuelle støttespillere.',
          },
          {
            label: 'b',
            task: 'Hva er årsaken til konflikten?',
            solution: 'Analyser historiske, politiske, økonomiske og sosiale faktorer.',
          },
          {
            label: 'c',
            task: 'Hva gjør verdenssamfunnet?',
            solution: 'Vurder FN, regionale organisasjoner, enkeltlands innsats.',
          },
        ],
        solution: 'Analysen bør vise forståelse for konfliktens kompleksitet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'samfunnskunnskap-1-10-ex-7',
      type: 'exercise',
      exercise: {
        id: 'samfunnskunnskap-1-10-ex-7',
        number: '7',
        type: 'classic',
        task: 'Hvordan kan internasjonalt samarbeid bidra til å forebygge konflikter?',
        hints: ['Tenk på diplomati, handel, organisasjoner, avtaler'],
        solution: 'Handel skaper gjensidig avhengighet, diplomati løser tvister fredelig, internasjonale avtaler setter regler, organisasjoner gir arenaer for dialog.',
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

export const SAMFUNNSKUNNSKAP_CHAPTERS = [
  CHAPTER_SAMFUNNSKUNNSKAP_1,
  CHAPTER_SAMFUNNSKUNNSKAP_2,
  CHAPTER_SAMFUNNSKUNNSKAP_3,
  CHAPTER_SAMFUNNSKUNNSKAP_4,
  CHAPTER_SAMFUNNSKUNNSKAP_5,
  CHAPTER_SAMFUNNSKUNNSKAP_6,
  CHAPTER_SAMFUNNSKUNNSKAP_7,
  CHAPTER_SAMFUNNSKUNNSKAP_8,
  CHAPTER_SAMFUNNSKUNNSKAP_9,
  CHAPTER_SAMFUNNSKUNNSKAP_10,
];
