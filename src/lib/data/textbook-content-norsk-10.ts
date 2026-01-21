/**
 * Tekstbok innhold for Norsk 10. klasse
 *
 * Følger LK20 læreplan for norsk ungdomstrinn.
 * Avsluttende år med fokus på eksamensforberedelse og avanserte ferdigheter.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.1: Litteraturhistorie og analyse
// ============================================================================

export const CHAPTER_NORSK_10_1_1: TextbookChapter = {
  id: 'norsk-10-1-1',
  courseId: 'norsk-10',
  chapterNumber: '1.1',
  title: 'Litteraturhistorie og analyse',
  description: 'Lær om norsk litteraturhistorie fra realismen til modernismen.',
  estimatedMinutes: 55,
  competenceGoals: [
    'analysere og tolke tekster fra ulike litterære epoker',
  ],
  content: [
    {
      id: 'norsk-10-1-1-intro',
      type: 'text',
      content: `## Norsk litteraturhistorie

Litteraturhistorien hjelper oss å forstå hvordan samfunn, verdier og ideer har utviklet seg over tid. Gjennom å lese tekster fra ulike epoker, kan vi se hvordan forfattere har speilet og kritisert sin samtid.

I 10. klasse fokuserer vi på perioden fra **realismen** (ca. 1850-1890) til **modernismen** (ca. 1890-1940).`,
    },
    {
      id: 'norsk-10-1-1-def-1',
      type: 'definition',
      title: 'Litterære epoker',
      content: `**Realismen (ca. 1850-1890)**
- Ville vise virkeligheten slik den var
- Kritiserte samfunnsproblemer
- Henrik Ibsen, Alexander Kielland, Jonas Lie
- Typiske tema: klasseskiller, kvinneundertrykkelse, hykleri

**Naturalismen (ca. 1880-1900)**
- Enda mer virkelighetsnær enn realismen
- Mennesket styrt av arv og miljø
- Amalie Skram, Hans Jæger
- Mørke, deterministiske tema

**Nyromantikken (ca. 1890-1905)**
- Reaksjon mot realismens nøkternhet
- Fokus på følelser, natur, mystikk
- Knut Hamsun, Sigbjørn Obstfelder
- Indre liv og stemninger

**Modernismen (ca. 1890-1940)**
- Eksperimentell form
- Fragmentert virkelighet
- Sigrid Undset, Tarjei Vesaas
- Psykologisk dybde`,
    },
    {
      id: 'norsk-10-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Analyse av realistisk tekst',
      problem: `Les dette utdraget fra Ibsens "Et dukkehjem" (1879):

NORA: "Jeg har vært din dukkekone her, likesom jeg hjemme var papas dukkebarn. Og barna, de har igjen vært mine dukker."`,
      solution: `**Epoke:** Realismen

**Tema:** Kvinneundertrykkelse, roller i ekteskapet

**Virkemidler:**
- **Metafor:** "dukkekone" - sammenligner kvinnen med en dukke uten egen vilje
- **Gjentakelse:** "dukke" - forsterker budskapet
- **Parallellisme:** Far-datter-forhold speiles i mann-kone-forhold

**Tolkning:** Ibsen kritiserer samfunnets syn på kvinner som pynt og underholdning uten selvstendighet.`,
    },
    {
      id: 'norsk-10-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Koble forfatter til riktig epoke:',
        subTasks: [
          {
            label: 'a',
            task: 'Henrik Ibsen',
            solution: 'Realismen',
            multipleChoiceOptions: ['Realismen', 'Romantikken', 'Modernismen', 'Barokken'],
          },
          {
            label: 'b',
            task: 'Knut Hamsun',
            solution: 'Nyromantikken',
            multipleChoiceOptions: ['Nyromantikken', 'Realismen', 'Klassisismen', 'Naturalismen'],
          },
          {
            label: 'c',
            task: 'Amalie Skram',
            solution: 'Naturalismen',
            multipleChoiceOptions: ['Naturalismen', 'Romantikken', 'Modernismen', 'Nyromantikken'],
          },
        ],
        solution: 'a) Realismen, b) Nyromantikken, c) Naturalismen',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-10-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyser følgende sitat og bestem hvilken epoke det tilhører:',
        subTasks: [
          {
            label: 'a',
            task: '"Sult er en sykdom, en feber..." - Knut Hamsun. Hvilken epoke?',
            solution: 'Nyromantikken - fokus på indre tilstander og psykologi',
          },
          {
            label: 'b',
            task: 'Begrunn svaret ditt med minst to kjennetegn fra epoken.',
            solution: 'Fokus på individets indre liv, subjektive opplevelser, psykologisk dybde',
          },
        ],
        hints: ['Tenk på hva teksten fokuserer på - ytre eller indre virkelighet'],
        solution: 'Nyromantikken preges av fokus på det indre mennesket og subjektive opplevelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-10-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv en kort analyse (200-300 ord) av en selvvalgt tekst fra realismen eller naturalismen. Inkluder: epoke, tema, virkemidler og tolkning.',
        hints: ['Bruk SPOR-modellen', 'Finn minst tre virkemidler'],
        solution: 'En god analyse identifiserer epoken, hovedtema, sentrale virkemidler og gir en begrunnet tolkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 1.2: Sakprosaanalyse og kildekritikk
// ============================================================================

export const CHAPTER_NORSK_10_1_2: TextbookChapter = {
  id: 'norsk-10-1-2',
  courseId: 'norsk-10',
  chapterNumber: '1.2',
  title: 'Sakprosaanalyse og kildekritikk',
  description: 'Lær å analysere sakprosatekster og vurdere kilder kritisk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'vurdere teksters troverdighet og bruke kilder kritisk',
  ],
  content: [
    {
      id: 'norsk-10-1-2-intro',
      type: 'text',
      content: `## Sakprosa og kildekritikk

I en tid med mye informasjon er det viktig å kunne vurdere tekster kritisk. Sakprosa er tekster som formidler informasjon, meninger eller argumenter - ikke fiksjon.

**Sakprosatyper:**
- Artikler og nyheter
- Kronikker og debattinnlegg
- Rapporter og utredninger
- Blogger og sosiale medier`,
    },
    {
      id: 'norsk-10-1-2-def-1',
      type: 'definition',
      title: 'Kildekritiske spørsmål',
      content: `**TONE-modellen for kildekritikk:**

**T - Troverdighet**
- Hvem står bak teksten?
- Har avsenderen relevant kompetanse?
- Er kilden uavhengig?

**O - Objektivitet**
- Er teksten balansert?
- Presenteres flere sider av saken?
- Er det skjulte motiver?

**N - Nøyaktighet**
- Er fakta korrekte og oppdaterte?
- Oppgis kilder for påstander?
- Kan informasjonen verifiseres?

**E - Egnethet**
- Passer kilden til formålet?
- Er den relevant for problemstillingen?
- Er nivået passende?`,
    },
    {
      id: 'norsk-10-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Kildekritisk vurdering',
      problem: `Vurder denne kilden: En artikkel på Wikipedia om klimaendringer.`,
      solution: `**Troverdighet:** Middels - Wikipedia har mange bidragsytere, men ingen garantert ekspertise. Artikkelen kan være redigert av hvem som helst.

**Objektivitet:** Varierer - Wikipedia tilstreber nøytralitet, men kan ha skjevheter. Kontroversielle emner kan være preget av redaksjonskonflikter.

**Nøyaktighet:** Ofte god - artiklene har kildehenvisninger som kan sjekkes. Men feil kan forekomme.

**Egnethet:** God som utgangspunkt - bra for oversikt, men bør suppleres med primærkilder for akademiske formål.

**Konklusjon:** Brukbar som introduksjon, men kildene i artikkelen bør følges opp for dypere forståelse.`,
    },
    {
      id: 'norsk-10-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identifiser problemet med disse kildene:',
        subTasks: [
          {
            label: 'a',
            task: 'En blogg om helse skrevet av en person uten medisinsk utdanning.',
            solution: 'Manglende troverdighet - avsenderen har ikke relevant kompetanse',
          },
          {
            label: 'b',
            task: 'En nyhetsartikkel fra 2015 om dagens teknologi.',
            solution: 'Manglende nøyaktighet - informasjonen er utdatert',
          },
          {
            label: 'c',
            task: 'En reklametekst som presenterer produktet som "vitenskapelig bevist".',
            solution: 'Manglende objektivitet - avsenderen har økonomiske motiver',
          },
        ],
        solution: 'a) Troverdighet, b) Nøyaktighet, c) Objektivitet',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-10-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Finn tre kilder om samme tema og sammenlign dem ved hjelp av TONE-modellen.',
        hints: ['Velg et aktuelt tema', 'Bruk ulike kildetyper'],
        solution: 'En god sammenligning vurderer alle kilder etter samme kriterier og trekker en konklusjon om hvilken som er mest pålitelig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-10-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv en kildekritisk vurdering av en selvvalgt nettartikkel (150-200 ord). Bruk TONE-modellen.',
        hints: ['Vær konkret', 'Gi eksempler fra teksten'],
        solution: 'Vurderingen skal systematisk gjennomgå troverdighet, objektivitet, nøyaktighet og egnethet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.1: Eksamensforberedelse - Skriftlig
// ============================================================================

export const CHAPTER_NORSK_10_2_1: TextbookChapter = {
  id: 'norsk-10-2-1',
  courseId: 'norsk-10',
  chapterNumber: '2.1',
  title: 'Eksamensforberedelse - Skriftlig',
  description: 'Forbered deg til skriftlig eksamen med ulike oppgavetyper.',
  estimatedMinutes: 60,
  competenceGoals: [
    'skrive tekster med god struktur, saklig argumentasjon og korrekt språk',
  ],
  content: [
    {
      id: 'norsk-10-2-1-intro',
      type: 'text',
      content: `## Skriftlig eksamen i norsk

På eksamen i norsk får du velge mellom ulike oppgavetyper. Det er viktig å kjenne sjangerkravene og kunne strukturere teksten din godt.

**Vanlige oppgavetyper:**
- Kreativ/skjønnlitterær tekst (fortelling, novelle)
- Saklig/argumenterende tekst (artikkel, essay)
- Sammensatt tekst (analyse + drøfting)`,
    },
    {
      id: 'norsk-10-2-1-def-1',
      type: 'definition',
      title: 'Oppgavetyper og struktur',
      content: `**Artikkel/Kronikk:**
- Innledning: Fang leseren, presenter tema
- Hoveddel: Argumenter med belegg
- Avslutning: Oppsummering, konklusjon

**Essay:**
- Mer personlig og reflekterende
- Undersøkende holdning
- Kan ha åpen avslutning

**Novelle/Fortelling:**
- Spenningskurve
- Virkemidler: dialog, skildring, indre monolog
- Overraskende vendepunkt

**Analyse + drøfting:**
- Kort analyse av vedleggstekst
- Drøft tema i lys av egne synspunkter
- Bruk eksempler fra teksten`,
    },
    {
      id: 'norsk-10-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Struktur på artikkel',
      problem: `Skriv en artikkel om sosiale medier og mental helse.`,
      solution: `**Innledning:**
"Har du noen gang scrollet gjennom Instagram og følt deg mislykket? Du er ikke alene." (Engasjerende åpning)

**Hoveddel:**
Argument 1: Sosiale medier skaper urealistiske forventninger
- Belegg: Forskning fra NOVA-rapporten
- Eksempel: Redigerte bilder

Argument 2: Men sosiale medier kan også gi fellesskap
- Belegg: Støttegrupper på nett
- Eksempel: Ungdom med sjeldne sykdommer

**Avslutning:**
Oppsummering av hovedpoeng, oppfordring til bevisst bruk.`,
    },
    {
      id: 'norsk-10-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Match oppgavetype med kjennetegn:',
        subTasks: [
          {
            label: 'a',
            task: 'Personlig, reflekterende, undersøkende',
            solution: 'Essay',
            multipleChoiceOptions: ['Essay', 'Artikkel', 'Novelle', 'Rapport'],
          },
          {
            label: 'b',
            task: 'Spenningskurve, dialog, vendepunkt',
            solution: 'Novelle',
            multipleChoiceOptions: ['Novelle', 'Essay', 'Kronikk', 'Analyse'],
          },
          {
            label: 'c',
            task: 'Saklig argumentasjon med belegg',
            solution: 'Artikkel',
            multipleChoiceOptions: ['Artikkel', 'Dagbok', 'Novelle', 'Dikt'],
          },
        ],
        solution: 'a) Essay, b) Novelle, c) Artikkel',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-10-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Lag en disposisjon for en artikkel om følgende tema: "Bør karakterer i skolen avskaffes?"',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv en engasjerende innledning (2-3 setninger).',
            solution: 'Innledningen bør fange leserens interesse og presentere tema.',
          },
          {
            label: 'b',
            task: 'List opp tre argumenter du vil bruke.',
            solution: 'Argumentene bør være relevante og støtte en tydelig holdning.',
          },
          {
            label: 'c',
            task: 'Skriv en avslutning som oppsummerer.',
            solution: 'Avslutningen bør samle trådene og eventuelt komme med en oppfordring.',
          },
        ],
        hints: ['Tenk på hvem som er målgruppen', 'Ha en tydelig mening'],
        solution: 'En god disposisjon har klar struktur med innledning, argumenter og avslutning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-10-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv en kort artikkel (300-400 ord) om et selvvalgt tema. Pass på struktur, argumentasjon og språk.',
        hints: ['Bruk disposisjonen du laget', 'Les gjennom og rett feil'],
        solution: 'Artikkelen vurderes etter struktur, innhold, argumentasjon og språk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.2: Eksamensforberedelse - Muntlig
// ============================================================================

export const CHAPTER_NORSK_10_2_2: TextbookChapter = {
  id: 'norsk-10-2-2',
  courseId: 'norsk-10',
  chapterNumber: '2.2',
  title: 'Eksamensforberedelse - Muntlig',
  description: 'Forbered deg til muntlig eksamen med presentasjonsteknikk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'presentere og drøfte faglige emner muntlig med god struktur',
  ],
  content: [
    {
      id: 'norsk-10-2-2-intro',
      type: 'text',
      content: `## Muntlig eksamen

Muntlig eksamen består vanligvis av to deler:
1. **Presentasjon** (ca. 10 minutter) - du legger fram et forberedt tema
2. **Fagsamtale** (ca. 20 minutter) - samtale om andre deler av pensum

God forberedelse og øvelse er nøkkelen til å lykkes.`,
    },
    {
      id: 'norsk-10-2-2-def-1',
      type: 'definition',
      title: 'Presentasjonsteknikk',
      content: `**Struktur:**
- Innledning: Fang oppmerksomheten
- Hoveddel: Maks 3-4 hovedpunkter
- Avslutning: Oppsummer og konkluder

**Fremføring:**
- Øyekontakt med publikum
- Variert stemmebruk
- Pauser for effekt
- Kroppsspråk som støtter

**Hjelpemidler:**
- Stikkordsliste (ikke manuskript!)
- PowerPoint med lite tekst
- Bilder, video, lyd
- Konkrete eksempler

**Tips mot nervøsitet:**
- Øv flere ganger
- Pust dypt
- Fokuser på budskapet, ikke deg selv
- Husk: sensorer vil at du skal lykkes!`,
    },
    {
      id: 'norsk-10-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva bør du IKKE gjøre på muntlig eksamen?',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke av disse er dårlig presentasjonsteknikk?',
            solution: 'Lese rett fra manus',
            multipleChoiceOptions: ['Lese rett fra manus', 'Ha øyekontakt', 'Bruke eksempler', 'Variere stemmen'],
          },
          {
            label: 'b',
            task: 'Hva bør du unngå på PowerPoint-slides?',
            solution: 'Mye tekst og hele setninger',
            multipleChoiceOptions: ['Mye tekst og hele setninger', 'Relevante bilder', 'Stikkord', 'Grafer'],
          },
        ],
        solution: 'a) Lese rett fra manus, b) Mye tekst',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-10-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Planlegg en presentasjon om en litterær epoke:',
        subTasks: [
          {
            label: 'a',
            task: 'Velg epoke og lag en åpning som fanger oppmerksomheten.',
            solution: 'En god åpning kan være et sitat, et spørsmål eller en overraskende fakta.',
          },
          {
            label: 'b',
            task: 'Lag en stikkordsliste med 3-4 hovedpunkter.',
            solution: 'Stikkordene bør dekke kjennetegn, forfattere og betydning.',
          },
          {
            label: 'c',
            task: 'Planlegg hvordan du vil avslutte presentasjonen.',
            solution: 'Avslutningen bør oppsummere og gjerne koble til dagens samfunn.',
          },
        ],
        hints: ['Hold det enkelt', 'Øv på å snakke ut fra stikkord'],
        solution: 'En god presentasjon har tydelig struktur og engasjerer publikum.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-10-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Øv på fagsamtale: Forbered deg på å svare på spørsmål om litterære epoker uten forberedelse.',
        hints: ['Øv med en medelev', 'Svar i hele setninger', 'Det er lov å tenke litt først'],
        solution: 'God fagsamtale viser at du kan reflektere og knytte sammen kunnskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.1: Språkhistorie og språkutvikling
// ============================================================================

export const CHAPTER_NORSK_10_3_1: TextbookChapter = {
  id: 'norsk-10-3-1',
  courseId: 'norsk-10',
  chapterNumber: '3.1',
  title: 'Språkhistorie og språkutvikling',
  description: 'Lær om det norske språkets historie fra norrønt til moderne norsk.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for utviklingen av norsk språk og sammenhengen mellom språk, kultur og identitet',
  ],
  content: [
    {
      id: 'norsk-10-3-1-intro',
      type: 'text',
      content: `## Språkhistorie

Det norske språket har utviklet seg gjennom tusen år. Ved å forstå språkets historie, kan vi bedre forstå dagens språksituasjon og språkdebatter.

**Hovedperioder:**
- Norrønt (ca. 700-1350)
- Mellomnorsk (ca. 1350-1525)
- Dansk tid (1525-1814)
- Moderne norsk (1814 - i dag)`,
    },
    {
      id: 'norsk-10-3-1-def-1',
      type: 'definition',
      title: 'Fra norrønt til norsk',
      content: `**Norrønt (700-1350)**
- Fellesspråk i Norden
- Runealfabetet, senere latinsk alfabet
- Rikt litterært språk (sagaer, Edda)

**Mellomnorsk (1350-1525)**
- Svartedauden svekket skrifttradisjonen
- Påvirkning fra hanseatisk lavtysk
- Mange låneord

**Dansk tid (1525-1814)**
- Norge under Danmark
- Dansk skriftspråk i kirke og skole
- Norske dialekter levde videre muntlig

**Etter 1814**
- Nasjonsbygging og språkstrid
- To skriftspråk utvikles
- Ivar Aasen og landsmål
- Knud Knudsen og riksmål`,
    },
    {
      id: 'norsk-10-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sett disse hendelsene i riktig rekkefølge:',
        subTasks: [
          {
            label: 'a',
            task: 'Nummer 1-4: Svartedauden, Unionen med Danmark, Ivar Aasen lager landsmål, Vikingtidens norrøne språk',
            solution: '1. Norrønt språk, 2. Svartedauden, 3. Unionen med Danmark, 4. Ivar Aasen',
          },
        ],
        solution: 'Norrønt → Svartedauden → Unionen → Ivar Aasen',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-10-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor vi har to skriftspråk i Norge (bokmål og nynorsk).',
        hints: ['Tenk på historien', 'Hvem var Ivar Aasen og Knud Knudsen?'],
        solution: 'Vi har to skriftspråk fordi Norge manglet et eget skriftspråk etter dansketiden. Knudsen ville fornorske dansken (riksmål/bokmål), mens Aasen ville bygge et nytt språk på dialektene (landsmål/nynorsk).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-10-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv en kort tekst (150 ord) om hvordan språket har endret seg i din levetid. Gi eksempler på nye ord og uttrykk.',
        hints: ['Tenk på teknologi, sosiale medier, ungdomsspråk'],
        solution: 'Teksten bør gi konkrete eksempler på språkendringer og reflektere over årsakene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2: Bokmål og nynorsk
// ============================================================================

export const CHAPTER_NORSK_10_3_2: TextbookChapter = {
  id: 'norsk-10-3-2',
  courseId: 'norsk-10',
  chapterNumber: '3.2',
  title: 'Bokmål og nynorsk',
  description: 'Forstå forskjellene mellom bokmål og nynorsk og lær å skrive begge.',
  estimatedMinutes: 50,
  competenceGoals: [
    'skrive tekster på hovedmål og sidemål med språklig variasjon',
  ],
  content: [
    {
      id: 'norsk-10-3-2-intro',
      type: 'text',
      content: `## Bokmål og nynorsk

Norge er det eneste landet i verden med to offisielle skriftspråk som er så like. Begge har samme status, og du skal lære å bruke begge.

**Viktig:** Bokmål og nynorsk er IKKE dialekter - de er skriftspråk. Du kan snakke dialekt og skrive bokmål eller nynorsk.`,
    },
    {
      id: 'norsk-10-3-2-def-1',
      type: 'definition',
      title: 'Hovedforskjeller',
      content: `**Verb:**
| Bokmål | Nynorsk |
|--------|---------|
| å kaste - kastet | å kaste - kasta |
| å lese - leste | å lese - las |
| å skrive - skrev | å skrive - skreiv |

**Substantiv:**
| Bokmål | Nynorsk |
|--------|---------|
| boken | boka |
| guttene | gutane |
| jentene | jentene |

**Pronomen:**
| Bokmål | Nynorsk |
|--------|---------|
| jeg | eg |
| ikke | ikkje |
| hva | kva |
| hvordan | korleis |

**Ord:**
| Bokmål | Nynorsk |
|--------|---------|
| noe | noko |
| mye | mykje |
| noen | nokon |
| også | òg |`,
    },
    {
      id: 'norsk-10-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Oversett til nynorsk:',
        subTasks: [
          {
            label: 'a',
            task: '"Jeg kastet boken på bordet."',
            solution: 'Eg kasta boka på bordet.',
          },
          {
            label: 'b',
            task: '"Hun leste mye og skrev ofte."',
            solution: 'Ho las mykje og skreiv ofte.',
          },
          {
            label: 'c',
            task: '"Guttene visste ikke hva de skulle gjøre."',
            solution: 'Gutane visste ikkje kva dei skulle gjere.',
          },
        ],
        solution: 'a) Eg kasta boka på bordet. b) Ho las mykje og skreiv ofte. c) Gutane visste ikkje kva dei skulle gjere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-10-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Skriv en kort tekst (100 ord) på sidemålet ditt om et selvvalgt tema.',
        hints: ['Bruk ordbok om du er usikker', 'Les teksten høyt for å sjekke flyt'],
        solution: 'Teksten vurderes etter korrekt bruk av sidemålet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-10-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Drøft: Bør Norge beholde to skriftspråk? Skriv argumenter for og mot.',
        hints: ['Tenk på tradisjon, identitet, praktiske hensyn'],
        solution: 'En god drøfting presenterer argumenter fra begge sider og viser forståelse for ulike synspunkter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.1: Mediekritikk
// ============================================================================

export const CHAPTER_NORSK_10_4_1: TextbookChapter = {
  id: 'norsk-10-4-1',
  courseId: 'norsk-10',
  chapterNumber: '4.1',
  title: 'Mediekritikk',
  description: 'Lær å analysere og kritisere medietekster.',
  estimatedMinutes: 50,
  competenceGoals: [
    'analysere og vurdere medietekster med vekt på troverdighet og påvirkning',
  ],
  content: [
    {
      id: 'norsk-10-4-1-intro',
      type: 'text',
      content: `## Mediekritikk

Vi lever i en tid med enormt medietrykk. Hver dag møter vi hundrevis av mediebudskap - fra nyheter og reklame til sosiale medier og underholdning. Mediekritikk handler om å forstå hvordan medier fungerer og påvirker oss.

**Hvorfor mediekritikk er viktig:**
- Skille fakta fra meninger
- Gjenkjenne manipulasjon
- Forstå algoritmers påvirkning
- Være bevisst forbruker`,
    },
    {
      id: 'norsk-10-4-1-def-1',
      type: 'definition',
      title: 'Medietekster og virkemidler',
      content: `**Nyhetsmedier:**
- Vinkling og prioritering
- Kilder og sitater
- Bilder og overskrifter
- Clickbait

**Reklame:**
- Målgruppe og behov
- Følelsesappell
- Skjult budskap
- Sponset innhold

**Sosiale medier:**
- Algoritmer og ekkokamre
- Influencer-markedsføring
- Filterbobler
- Falske nyheter

**Analysespørsmål:**
1. Hvem er avsender?
2. Hvem er målgruppen?
3. Hva er budskapet?
4. Hvilke virkemidler brukes?
5. Hva er hensikten?`,
    },
    {
      id: 'norsk-10-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Definer begrepene:',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er clickbait?',
            solution: 'Overskrifter laget for å få deg til å klikke, ofte overdrevne eller villedende.',
          },
          {
            label: 'b',
            task: 'Hva er et ekkokammer?',
            solution: 'Når du bare møter meninger som ligner dine egne, fordi algoritmer filtrerer bort annet.',
          },
          {
            label: 'c',
            task: 'Hva er sponset innhold?',
            solution: 'Innhold som ser ut som vanlige artikler/innlegg, men som er betalt reklame.',
          },
        ],
        solution: 'Clickbait, ekkokammer og sponset innhold er alle former for mediepåvirkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-10-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyser en reklame du har sett nylig:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvem er målgruppen?',
            solution: 'Beskriv alders, kjønn, interesser, livssituasjon for målgruppen.',
          },
          {
            label: 'b',
            task: 'Hvilke følelser appellerer reklamen til?',
            solution: 'For eksempel: tilhørighet, status, frykt, glede, FOMO.',
          },
          {
            label: 'c',
            task: 'Hva er det skjulte budskapet?',
            solution: 'Ofte: "Du er ikke god nok uten dette produktet."',
          },
        ],
        hints: ['Se på farger, musikk, personer i reklamen'],
        solution: 'En god reklameanalyse avdekker både åpenbare og skjulte virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-10-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv en analyse (200-250 ord) av en nyhetsartikkel. Vurder vinkling, kilder, bilder og overskrift.',
        hints: ['Sammenlign gjerne med andre mediers dekning av samme sak'],
        solution: 'Analysen bør vise kritisk bevissthet om mediets valg og virkemidler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.2: Digitalt personvern og ytringsfrihet
// ============================================================================

export const CHAPTER_NORSK_10_4_2: TextbookChapter = {
  id: 'norsk-10-4-2',
  courseId: 'norsk-10',
  chapterNumber: '4.2',
  title: 'Digitalt personvern og ytringsfrihet',
  description: 'Forstå rettigheter og ansvar i den digitale verden.',
  estimatedMinutes: 45,
  competenceGoals: [
    'reflektere over ytringsfrihet, personvern og digitalt medborgerskap',
  ],
  content: [
    {
      id: 'norsk-10-4-2-intro',
      type: 'text',
      content: `## Digitalt medborgerskap

Som digitale borgere har vi både rettigheter og ansvar. Ytringsfrihet gir oss rett til å uttrykke oss, men med ansvar for det vi sier. Personvern gir oss rett til privatliv, men vi må også respektere andres.

**Grunnleggende prinsipper:**
- Din rett til å ytre deg
- Din rett til privatliv
- Ditt ansvar for egne ytringer
- Ditt ansvar for å respektere andre`,
    },
    {
      id: 'norsk-10-4-2-def-1',
      type: 'definition',
      title: 'Ytringsfrihet og grenser',
      content: `**Ytringsfrihet omfatter:**
- Dele meninger og tanker
- Kritisere myndigheter
- Kunstnerisk uttrykk
- Journalistikk

**Ytringsfrihet beskytter IKKE:**
- Trusler
- Ærekrenkelse (usanne påstander)
- Hatefulle ytringer mot grupper
- Oppfordring til vold
- Deling av andres private bilder

**Personvern innebærer:**
- Kontroll over egne data
- Samtykke til deling
- Rett til å bli glemt
- Beskyttelse mot overvåking`,
    },
    {
      id: 'norsk-10-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Er dette lov eller ikke?',
        subTasks: [
          {
            label: 'a',
            task: 'Dele et morsomt bilde av en venn uten å spørre først.',
            solution: 'Ikke lov - du trenger samtykke for å dele bilder av andre.',
          },
          {
            label: 'b',
            task: 'Skrive en negativ anmeldelse av en restaurant på nett.',
            solution: 'Lov - så lenge det er dine ærlige meninger og ikke usanne påstander.',
          },
          {
            label: 'c',
            task: 'Skrive at "alle [en folkegruppe] er kriminelle" på sosiale medier.',
            solution: 'Ikke lov - dette er hatefulle ytringer mot en gruppe.',
          },
        ],
        solution: 'a) Ikke lov, b) Lov, c) Ikke lov',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-10-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Drøft dilemmaet: En venn vil dele et bilde av deg på sosiale medier. Du synes ikke du ser bra ut på bildet. Hva gjør du?',
        hints: ['Tenk på både dine og vennens følelser', 'Hva sier loven?'],
        solution: 'Du har rett til å si nei. En god løsning kan være å forklare ærlig hvorfor.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-10-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv et debattinnlegg (200 ord) om ytringsfrihet på sosiale medier: Bør plattformene ha strengere moderering?',
        hints: ['Gi eksempler', 'Se saken fra flere sider'],
        solution: 'Innlegget bør vise forståelse for ulike perspektiver på ytringsfrihet og moderering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.1: Sammensatte tekster
// ============================================================================

export const CHAPTER_NORSK_10_5_1: TextbookChapter = {
  id: 'norsk-10-5-1',
  courseId: 'norsk-10',
  chapterNumber: '5.1',
  title: 'Sammensatte tekster',
  description: 'Analyser tekster som kombinerer ord, bilder og lyd.',
  estimatedMinutes: 50,
  competenceGoals: [
    'analysere sammensatte tekster og vurdere samspillet mellom ulike uttrykksformer',
  ],
  content: [
    {
      id: 'norsk-10-5-1-intro',
      type: 'text',
      content: `## Sammensatte tekster

En sammensatt tekst (multimodal tekst) kombinerer flere uttrykksformer:
- Skrift
- Bilder
- Lyd
- Film
- Grafikk

Eksempler: nettsider, reklamefilmer, musikkvideoer, tegneserier, lærebøker.`,
    },
    {
      id: 'norsk-10-5-1-def-1',
      type: 'definition',
      title: 'Modaliteter og samspill',
      content: `**Modaliteter:**
- **Verbalspråk:** Skriftlig eller muntlig tekst
- **Visuell:** Bilder, farger, layout, typografi
- **Auditiv:** Musikk, lydeffekter, stemme
- **Kinestetisk:** Bevegelse, animasjon

**Samspill mellom modaliteter:**
- **Forsterkning:** Modalitetene støtter samme budskap
- **Utfylling:** Hver modalitet tilfører noe eget
- **Kontrast:** Modalitetene står i motsetning
- **Forankring:** Én modalitet styrer tolkningen av en annen`,
    },
    {
      id: 'norsk-10-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identifiser modalitetene i følgende tekster:',
        subTasks: [
          {
            label: 'a',
            task: 'En Instagram-post med bilde og tekst.',
            solution: 'Visuell (bilde, farger, filter) + verbalspråk (tekst, hashtags)',
          },
          {
            label: 'b',
            task: 'En musikkvideno på YouTube.',
            solution: 'Visuell (film, farger) + auditiv (musikk, sang) + verbalspråk (sangtekst)',
          },
          {
            label: 'c',
            task: 'En nyhetsartikkel med bilder og faktabokser.',
            solution: 'Verbalspråk (artikkel) + visuell (bilder, layout, typografi)',
          },
        ],
        solution: 'Sammensatte tekster bruker flere modaliteter som sammen skaper mening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-10-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Analyser samspillet i en reklamefilm:',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke modaliteter brukes?',
            solution: 'Beskriv de ulike modalitetene i reklamen.',
          },
          {
            label: 'b',
            task: 'Hvordan støtter de hverandre (forsterkning, utfylling, kontrast)?',
            solution: 'Analyser hvordan bilde, lyd og tekst samarbeider.',
          },
          {
            label: 'c',
            task: 'Hva ville gått tapt om du bare hadde teksten?',
            solution: 'Beskriv hva de visuelle og auditive elementene tilfører.',
          },
        ],
        hints: ['Velg en reklame du husker godt', 'Se den flere ganger'],
        solution: 'En god analyse viser hvordan modalitetene sammen skaper mening.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-10-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Lag en plan for en sammensatt tekst (f.eks. en informasjonsplakat eller en kort video). Beskriv hvordan du vil bruke ulike modaliteter.',
        hints: ['Velg et tema først', 'Tenk på målgruppen'],
        solution: 'Planen bør vise bevisste valg av modaliteter og hvordan de skal samspille.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.2: Kreativ skriving
// ============================================================================

export const CHAPTER_NORSK_10_5_2: TextbookChapter = {
  id: 'norsk-10-5-2',
  courseId: 'norsk-10',
  chapterNumber: '5.2',
  title: 'Kreativ skriving',
  description: 'Utvikle dine ferdigheter i kreativ og skjønnlitterær skriving.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skrive kreative tekster med bevisst bruk av litterære virkemidler',
  ],
  content: [
    {
      id: 'norsk-10-5-2-intro',
      type: 'text',
      content: `## Kreativ skriving

Kreativ skriving handler om å uttrykke deg gjennom fiksjon. Det kan være noveller, fortellinger, dikt eller andre skjønnlitterære sjangre.

**Hvorfor skrive kreativt?**
- Utvikle språket ditt
- Utforske følelser og tanker
- Forstå andre mennesker bedre
- Ha det gøy med språk!`,
    },
    {
      id: 'norsk-10-5-2-def-1',
      type: 'definition',
      title: 'Litterære virkemidler',
      content: `**Fortelleteknikk:**
- **Synsvinkel:** Hvem forteller? (jeg, han/hun, allvitende)
- **Tidshåndtering:** Kronologisk, tilbakeblikk, frempek
- **Dialog:** Samtaler mellom karakterer
- **Indre monolog:** Tankene til en person

**Språklige virkemidler:**
- **Sammenligninger:** "Hun lo som en bekk"
- **Metaforer:** "Livet er en reise"
- **Besjeling:** "Vinden hvisket"
- **Kontraster:** "Utenfor var det mørkt, men inne lyste håpet"

**Spenningskurve:**
1. Eksposisjon (introduksjon)
2. Konflikt oppstår
3. Spenningsstigning
4. Klimaks (høydepunkt)
5. Avtrapning og løsning`,
    },
    {
      id: 'norsk-10-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identifiser virkemiddel:',
        subTasks: [
          {
            label: 'a',
            task: '"Trærne danset i vinden."',
            solution: 'Besjeling - trærne får menneskelige egenskaper',
          },
          {
            label: 'b',
            task: '"Hjertet hans var en stein."',
            solution: 'Metafor - sammenligning uten "som"',
          },
          {
            label: 'c',
            task: '"Hun var sterk som en løve."',
            solution: 'Sammenligning - sammenligning med "som"',
          },
        ],
        solution: 'a) Besjeling, b) Metafor, c) Sammenligning',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-10-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Skriv åpningen på en novelle (100-150 ord) som starter "in medias res" (midt i handlingen).',
        hints: ['Start med en spennende scene', 'La leseren lure på hva som skjer'],
        solution: 'En god åpning fanger leseren og skaper nysgjerrighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'norsk-10-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv en kort novelle (400-500 ord) med følgende krav: minst tre litterære virkemidler, tydelig spenningskurve, overraskende avslutning.',
        hints: ['Planlegg spenningskurven først', 'Marker virkemidlene i teksten'],
        solution: 'Novellen vurderes etter bruk av virkemidler, struktur og kreativitet.',
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

export const NORSK_10_CHAPTERS = [
  CHAPTER_NORSK_10_1_1,
  CHAPTER_NORSK_10_1_2,
  CHAPTER_NORSK_10_2_1,
  CHAPTER_NORSK_10_2_2,
  CHAPTER_NORSK_10_3_1,
  CHAPTER_NORSK_10_3_2,
  CHAPTER_NORSK_10_4_1,
  CHAPTER_NORSK_10_4_2,
  CHAPTER_NORSK_10_5_1,
  CHAPTER_NORSK_10_5_2,
];
