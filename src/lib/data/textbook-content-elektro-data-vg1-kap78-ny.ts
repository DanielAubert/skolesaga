/* eslint-disable */
// @ts-nocheck
/**
 * Elektro og datateknologi VG1 - Kapittel 7-8 (ny)
 *
 * Dekker HMS/sikkerhet/bærekraft og prosjektarbeid/karriere
 * 6 kapitler: 7.2, 7.3, 7.5, 8.1, 8.3, 8.5
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.2: HMS-rutiner og arbeidsmiljø
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_7_2: TextbookChapter = {
  id: 'elektro-data-vg1-7-2',
  courseId: 'elektro-data-vg1',
  chapterNumber: '7.2',
  title: 'HMS-rutiner og arbeidsmiljø',
  description: 'HMS-lovgivning, verneombud, verneutstyr og risikoanalyse i elektrofagene.',
  estimatedMinutes: 45,
  competenceGoals: [
    'følge gjeldende HMS-regelverk og bruke verneutstyr',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-7-2-intro',
      type: 'text',
      content: `## HMS i elektrofagene

HMS står for helse, miljø og sikkerhet. I elektrofagene er det spesielt viktig å ha gode rutiner fordi vi arbeider med strøm, verktøy og utstyr som kan være farlig dersom det brukes feil. Alle arbeidsgivere har plikt til å sørge for et trygt arbeidsmiljø, og alle arbeidstakere har plikt til å følge reglene.

I dette kapittelet lærer du om HMS-lovgivningen, hvem som har ansvar for arbeidsmiljøet, hvilket verneutstyr du skal bruke, og hvordan du gjennomfører en risikoanalyse før du starter arbeid.`,
    },

    // BLOKK 1: Arbeidsmiljøloven
    {
      id: 'elektro-data-vg1-7-2-def-1',
      type: 'definition',
      title: 'Arbeidsmiljøloven (AML)',
      content: `Arbeidsmiljøloven er den viktigste loven for HMS i Norge. Den skal sikre:
- Et trygt og helsefremmende arbeidsmiljø
- Trygge ansettelsesforhold
- Likebehandling i arbeidslivet
- Tilpasning av arbeidet til den enkeltes evne og situasjon

Loven gjelder for alle virksomheter som sysselsetter arbeidstakere, inkludert lærlinger.`,
    },

    // BLOKK 2: Verneombud og AMU
    {
      id: 'elektro-data-vg1-7-2-def-2',
      type: 'definition',
      title: 'Verneombud og arbeidsmiljøutvalg (AMU)',
      content: `**Verneombud** er arbeidstakernes representant i HMS-spørsmål. Alle virksomheter med 5 eller flere ansatte skal ha verneombud. Verneombudet skal:
- Påse at arbeidsmiljøet er forsvarlig
- Varsle arbeidsgiver om farlige forhold
- Kunne stanse farlig arbeid

**Arbeidsmiljøutvalg (AMU)** er påkrevd i virksomheter med minst 50 ansatte. AMU består av like mange representanter fra arbeidsgiver og arbeidstaker, og behandler saker om arbeidsmiljø, tilrettelegging og HMS-opplæring.`,
    },

    // BLOKK 3: Verneutstyr
    {
      id: 'elektro-data-vg1-7-2-text-1',
      type: 'text',
      title: 'Personlig verneutstyr (PVU)',
      content: `Når du jobber med elektro og data, må du bruke riktig verneutstyr:

- **Vernebriller** – beskytter øynene mot gnister, splinter og støv
- **Vernehansker** – isolerende hansker ved arbeid nær spenningssatte deler
- **Vernesko** – sko med ståltupp og isolerende såle
- **Hjelm** – ved arbeid i installasjoner, på byggeplass eller i høyden
- **Hørselsvern** – ved bruk av maskiner som borer, sliper eller sager

Arbeidsgiver plikter å stille verneutstyr til rådighet uten kostnad for arbeidstaker.`,
    },

    {
      id: 'elektro-data-vg1-7-2-example-1',
      type: 'example',
      title: 'Valg av verneutstyr',
      problem: 'Du skal montere kabelbroer i et teknisk rom med høy støy fra ventilasjonsanlegg. Hvilket verneutstyr bør du bruke?',
      solution: `Du bør bruke følgende verneutstyr:
1. **Hjelm** – arbeid med montering over hodet
2. **Vernebriller** – beskytter mot borspon og støv
3. **Hørselsvern** – høy støy fra ventilasjonsanlegget
4. **Vernesko** – beskytter føttene ved fall av tungt utstyr
5. **Vernehansker** – beskytter hendene under montering

Alltid vurder arbeidsoppgaven og omgivelsene før du velger verneutstyr.`,
    },

    // BLOKK 4: Risikoanalyse og SJA
    {
      id: 'elektro-data-vg1-7-2-def-3',
      type: 'definition',
      title: 'Risikoanalyse og SJA',
      content: `**Risikoanalyse** er en systematisk vurdering av farer forbundet med en arbeidsoppgave. Man identifiserer hva som kan gå galt, vurderer sannsynlighet og konsekvens, og planlegger tiltak for å redusere risikoen.

**Risiko = Sannsynlighet × Konsekvens**

**SJA (Sikker-Jobb-Analyse)** er en forenklet risikoanalyse som gjøres på arbeidsstedet like før jobben starter. SJA gjennomføres av de som skal utføre arbeidet, og dokumenteres skriftlig. Typiske punkter i en SJA:
1. Beskriv arbeidsoppgaven
2. Identifiser mulige farer
3. Vurder risikoen for hver fare
4. Bestem tiltak for å redusere risikoen
5. Alle involverte signerer`,
    },

    {
      id: 'elektro-data-vg1-7-2-example-2',
      type: 'example',
      title: 'Gjennomføring av SJA',
      problem: 'Du skal skifte en lysarmatur i et lagerbygg. Beskriv en enkel SJA.',
      solution: `**Arbeidsoppgave:** Skifte lysarmatur i lagerbygg.

**Mulige farer og tiltak:**
| Fare | Sannsynlighet | Konsekvens | Tiltak |
|---|---|---|---|
| Strømgjennomgang | Middels | Alvorlig | Sikre at strømmen er frakoblet og låst. Bruk spenningsprøver. |
| Fall fra stige | Middels | Alvorlig | Bruk godkjent stige. Sikre at den står stødig. Ha en kollega til å holde. |
| Støv i øynene | Lav | Lav | Bruk vernebriller. |

**Konklusjon:** Arbeidet kan gjennomføres med de beskrevne tiltakene. Alle i arbeidslaget har lest og signert SJA.`,
    },

    // OPPGAVER
    {
      id: 'elektro-data-vg1-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-7-2-mc-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedformålet med Arbeidsmiljøloven?',
        options: [
          { id: 'a', text: 'Å regulere arbeidstiden for alle ansatte', correct: false },
          { id: 'b', text: 'Å sikre et trygt og helsefremmende arbeidsmiljø', correct: true },
          { id: 'c', text: 'Å bestemme lønnsnivået i bedrifter', correct: false },
          { id: 'd', text: 'Å regulere import av utenlandsk arbeidskraft', correct: false },
        ],
        solution: 'Hovedformålet med Arbeidsmiljøloven er å sikre et trygt og helsefremmende arbeidsmiljø. Loven regulerer også ansettelsesforhold og arbeidstid, men det overordnede formålet er et forsvarlig arbeidsmiljø.',
      },
    },
    {
      id: 'elektro-data-vg1-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-7-2-mc-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor mange ansatte må en virksomhet ha for å være pålagt å ha verneombud?',
        options: [
          { id: 'a', text: '3 eller flere', correct: false },
          { id: 'b', text: '5 eller flere', correct: true },
          { id: 'c', text: '10 eller flere', correct: false },
          { id: 'd', text: '50 eller flere', correct: false },
        ],
        solution: 'Alle virksomheter med 5 eller flere ansatte er pålagt å ha verneombud. Virksomheter med 50 eller flere ansatte må i tillegg ha et arbeidsmiljøutvalg (AMU).',
      },
    },
    {
      id: 'elektro-data-vg1-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-7-2-classic-1',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva en SJA (Sikker-Jobb-Analyse) er, og beskriv de viktigste stegene i gjennomføringen.',
        solution: 'En SJA er en forenklet risikoanalyse som gjennomføres på arbeidsstedet like før arbeidet starter. De viktigste stegene er: (1) Beskriv arbeidsoppgaven, (2) identifiser mulige farer, (3) vurder risikoen (sannsynlighet og konsekvens), (4) bestem tiltak for å redusere risikoen, og (5) alle involverte signerer dokumentet. SJA gjennomføres av de som faktisk skal utføre arbeidet.',
      },
    },
    {
      id: 'elektro-data-vg1-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-7-2-classic-2',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal bore hull i en betongvegg for å føre gjennom kabler. Gjennomfør en forenklet risikoanalyse: Identifiser minst tre farer, og foreslå tiltak for å redusere risikoen.',
        solution: 'Mulige farer og tiltak: (1) Støv og partikler i øynene – bruk vernebriller. (2) Høy støy fra boremaskinen – bruk hørselsvern. (3) Skjulte strømledninger eller rør i veggen – bruk kabelsøker/ledningssøker før boring. (4) Fallende betongbiter – bruk hjelm og vernesko. (5) Vibrasjonsskader – ta pauser og bruk dempede bor. Tiltakene reduserer risikoen til et akseptabelt nivå.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3: Førstehjelp ved strømulykker
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_7_3: TextbookChapter = {
  id: 'elektro-data-vg1-7-3',
  courseId: 'elektro-data-vg1',
  chapterNumber: '7.3',
  title: 'Førstehjelp ved strømulykker',
  description: 'Strømpåvirkning på kroppen, frigjøring, HLR og branntiltak.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utføre livreddende førstehjelp ved strømulykker',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-7-3-intro',
      type: 'text',
      content: `## Førstehjelp ved strømulykker

Strømulykker kan være svært farlige og potensielt dødelige. Som elektriker eller datatekniker jobber du med spenning og strøm, og du må vite hvordan du skal handle hvis en ulykke skjer. Rask og riktig førstehjelp kan redde liv.

Den viktigste regelen ved strømulykker er: **SLUKK strømmen først!** Du skal aldri berøre en person som er i kontakt med en strømførende del – da kan du selv bli skadet.`,
    },

    // BLOKK 1: Strømpåvirkning på kroppen
    {
      id: 'elektro-data-vg1-7-3-def-1',
      type: 'definition',
      title: 'Strømpåvirkning på kroppen',
      content: `Strøm gjennom kroppen påvirker muskler, hjerte og nervesystem. Faren avhenger av strømstyrken (mA):

| Strømstyrke | Virkning |
|---|---|
| 1–5 mA | Prikking, svak følelse |
| 5–10 mA | Smerter, ufrivillige muskelsammentrekninger |
| 10–30 mA | Kramper, kan ikke slippe taket («hold-on»-effekt) |
| 30–75 mA | Pustevansker, hjertepåvirkning |
| 75–300 mA | Hjerteflimmer (livstruende) |
| Over 300 mA | Hjertestans, alvorlige brannskader |

**Merk:** Det er strømmen (mA), ikke spenningen alene, som dreper. Men høyere spenning gir høyere strøm gjennom kroppen (etter Ohms lov). Kroppens motstand varierer fra ca. 500 Ω (våt hud) til 100 000 Ω (tørr hud).`,
    },

    {
      id: 'elektro-data-vg1-7-3-warning-1',
      type: 'warning',
      title: 'Livsfarlig spenning',
      content: 'Selv lav spenning kan være livsfarlig under uheldige forhold. 50V vekselstrøm regnes som øvre grense for berøringsspenning i tørre rom. I våte omgivelser er grensen bare 25V. Nettstrøm på 230V er alltid livsfarlig!',
    },

    // BLOKK 2: Frigjøring
    {
      id: 'elektro-data-vg1-7-3-text-1',
      type: 'text',
      title: 'Frigjøring av person ved strømulykke',
      content: `Når en person er fastklemt til en strømførende del, gjør du følgende i prioritert rekkefølge:

1. **SLUKK strømmen** – Bruk sikringsskap, hovedbryter eller trekk ut støpsel
2. **Bryt forbindelsen** – Hvis du ikke kan slukke strømmen, bruk en isolerende gjenstand (tørt treverk, tau, tørt klede) til å dytte eller dra personen bort
3. **Aldri berør personen direkte** – Du kan selv bli en del av strømkretsen
4. **Ring 113** – Varsle AMK-sentralen umiddelbart
5. **Start førstehjelp** – Sjekk bevissthet og pust

**Huskeregel: SLUKK – SIKRE – VARSLE – HJELPE**`,
    },

    {
      id: 'elektro-data-vg1-7-3-example-1',
      type: 'example',
      title: 'Handling ved strømulykke',
      problem: 'En kollega har fått strøm gjennom seg fra en defekt maskin og kan ikke slippe taket. Hva gjør du?',
      solution: `Steg for steg:
1. **SLUKK strømmen** – Dra ut støpselet eller slå av sikringen. Ikke berør kollegaen!
2. **Bryt forbindelsen** – Hvis strømmen ikke kan slås av, bruk en isolerende gjenstand (f.eks. en tørr planke) til å skyve kollegaen bort fra maskinen.
3. **Ring 113** – Varsle AMK-sentralen med informasjon om strømulykke.
4. **Sjekk bevissthet** – Rist forsiktig i skuldrene og snakk høyt.
5. **Sjekk pust** – Bøy hodet bakover og kjenn etter pust i 10 sekunder.
6. **Start HLR** hvis personen ikke puster – 30 kompresjoner og 2 innblåsinger.`,
    },

    // BLOKK 3: HLR
    {
      id: 'elektro-data-vg1-7-3-def-2',
      type: 'definition',
      title: 'HLR – Hjerte-lunge-redning',
      content: `HLR utføres når en person er bevisstløs og ikke puster normalt:

1. **Legg personen flatt på ryggen** på et hardt underlag
2. **30 brystkompresjoner** – Trykk midt på brystet, 5–6 cm dypt, med en frekvens på 100–120 per minutt
3. **2 innblåsinger** – Bøy hodet bakover, løft haken, klem igjen nesen og blås luft inn
4. **Fortsett 30:2** til ambulanse ankommer eller personen viser livstegn
5. **Bruk hjertestarter (AED)** hvis tilgjengelig – følg instruksjonene fra apparatet

Ved strømulykker er det spesielt viktig å starte HLR raskt, fordi hjerteflimmer er en vanlig følge av strømgjennomgang.`,
    },

    // BLOKK 4: Branntiltak
    {
      id: 'elektro-data-vg1-7-3-text-2',
      type: 'text',
      title: 'Branntiltak og alarmrutiner',
      content: `Elektriske feil er en av de vanligste årsakene til brann. Viktige branntiltak:

- **Slukk strømmen** til utstyret som brenner
- **Bruk riktig slukkemiddel** – CO₂-apparat eller pulverapparat på elektrisk brann (aldri vann på strømførende utstyr!)
- **Varsle** – Aktiver brannalarm og ring **110** (brannvesen)
- **Evakuer** – Følg evakueringsplan og gå til oppmøteplass
- **Møt brannvesenet** – Gi informasjon om hva som brenner og om det er personer igjen i bygget

**Nødnumre:**
- **113** – Ambulanse (medisinsk nødhjelp)
- **110** – Brannvesen
- **112** – Politi`,
    },

    {
      id: 'elektro-data-vg1-7-3-example-2',
      type: 'example',
      title: 'Brann i sikringsskap',
      problem: 'Det oppstår brann i et sikringsskap på arbeidsplassen. Beskriv hva du gjør.',
      solution: `1. **Varsle** – Rop «BRANN!» og aktiver nærmeste brannalarm.
2. **Slukk strømmen** – Slå av hovedbryteren hvis det er mulig å gjøre det trygt.
3. **Forsøk slukking** – Bruk CO₂-apparat eller pulverapparat. Aldri vann på elektrisk brann!
4. **Ring 110** – Meld fra til brannvesenet.
5. **Evakuer** – Hvis brannen ikke lar seg slukke, forlat bygget via nødutgang.
6. **Gå til oppmøteplass** – Kontroller at alle er kommet ut.`,
    },

    // OPPGAVER
    {
      id: 'elektro-data-vg1-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-7-3-mc-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det første du skal gjøre ved en strømulykke?',
        options: [
          { id: 'a', text: 'Ringe 113', correct: false },
          { id: 'b', text: 'Starte HLR', correct: false },
          { id: 'c', text: 'Slukke strømmen', correct: true },
          { id: 'd', text: 'Flytte personen', correct: false },
        ],
        solution: 'Det aller første du skal gjøre er å slukke strømmen. Huskeregelen er SLUKK – SIKRE – VARSLE – HJELPE. Berør aldri en person som er i kontakt med en strømførende del.',
      },
    },
    {
      id: 'elektro-data-vg1-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-7-3-mc-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Ved hvilken strømstyrke oppstår typisk hjerteflimmer?',
        options: [
          { id: 'a', text: '1–5 mA', correct: false },
          { id: 'b', text: '10–30 mA', correct: false },
          { id: 'c', text: '75–300 mA', correct: true },
          { id: 'd', text: 'Over 1000 mA', correct: false },
        ],
        solution: 'Hjerteflimmer oppstår typisk ved strømstyrker mellom 75 og 300 mA. Ved enda høyere strømmer kan hjertet stoppe helt. Det er derfor viktig å respektere selv moderate spenninger.',
      },
    },
    {
      id: 'elektro-data-vg1-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-7-3-classic-1',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv stegene i HLR (hjerte-lunge-redning) i riktig rekkefølge.',
        solution: 'HLR utføres slik: (1) Legg personen flatt på ryggen på et hardt underlag. (2) Gi 30 brystkompresjoner – trykk midt på brystet 5–6 cm dypt med en frekvens på 100–120 per minutt. (3) Gi 2 innblåsinger – bøy hodet bakover, løft haken, klem nesen og blås luft inn. (4) Fortsett med 30 kompresjoner og 2 innblåsinger (30:2) til ambulanse ankommer eller personen viser livstegn. (5) Bruk hjertestarter (AED) hvis tilgjengelig.',
      },
    },
    {
      id: 'elektro-data-vg1-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-7-3-classic-2',
        number: '4',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar hvorfor man aldri skal bruke vann til å slukke brann i elektrisk utstyr. Hvilket slukkemiddel skal du bruke i stedet?',
        solution: 'Vann leder strøm. Hvis du spruter vann på utstyr som fortsatt er spenningssatt, kan du få strøm gjennom deg og bli alvorlig skadet. I stedet skal du bruke CO₂-apparat (karbondioksid) eller pulverapparat. Disse slukkemidlene leder ikke strøm. Husk også å slukke strømmen til utstyret først hvis det er mulig.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.5: Gjenbruk, avfallshåndtering og sirkulær økonomi
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_7_5: TextbookChapter = {
  id: 'elektro-data-vg1-7-5',
  courseId: 'elektro-data-vg1',
  chapterNumber: '7.5',
  title: 'Gjenbruk, avfallshåndtering og sirkulær økonomi',
  description: 'EE-avfall, WEEE-direktivet, resirkulering, sirkulær økonomi og miljøfarlige stoffer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for ansvarlig avfallshåndtering og gjenbruk av elektronikk',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-7-5-intro',
      type: 'text',
      content: `## Elektronisk avfall og bærekraft

Hvert år kastes millioner av tonn med elektronisk utstyr over hele verden. Mobiltelefoner, datamaskiner, TV-er og hvitevarer inneholder verdifulle materialer som kan gjenvinnes, men også miljøfarlige stoffer som må behandles forsvarlig.

Som fagarbeidere innen elektro og data har vi et spesielt ansvar for å håndtere elektronisk avfall riktig og bidra til en mer bærekraftig fremtid.`,
    },

    // BLOKK 1: EE-avfall
    {
      id: 'elektro-data-vg1-7-5-def-1',
      type: 'definition',
      title: 'EE-avfall',
      content: `**EE-avfall** (elektrisk og elektronisk avfall) er kasserte produkter som er avhengige av strøm eller batteri for å fungere. Eksempler:
- Mobiltelefoner og nettbrett
- Datamaskiner og skjermer
- Hvitevarer (kjøleskap, vaskemaskin)
- Lyspærer og lysrør
- Kabler og ledninger
- Batterier og ladere

EE-avfall er den raskest voksende avfallstypen i verden. I Norge samles det inn rundt 28 kg EE-avfall per innbygger årlig.`,
    },

    // BLOKK 2: WEEE-direktivet
    {
      id: 'elektro-data-vg1-7-5-def-2',
      type: 'definition',
      title: 'WEEE-direktivet og produsentansvar',
      content: `**WEEE-direktivet** (Waste Electrical and Electronic Equipment) er et EU-direktiv som også er innført i Norge gjennom EØS-avtalen. Direktivet fastsetter:

- **Produsentansvar**: Produsenter og importører har ansvar for innsamling og forsvarlig behandling av EE-avfall
- **Returordning**: Forbrukere kan levere EE-avfall gratis til butikker som selger tilsvarende produkter, eller til kommunale gjenvinningsstasjoner
- **Behandlingskrav**: EE-avfall skal behandles på godkjente anlegg

I Norge er det organisasjoner som **Renas** og **Norsirk** som administrerer returordningen på vegne av produsentene.`,
    },

    // BLOKK 3: Resirkulering
    {
      id: 'elektro-data-vg1-7-5-text-1',
      type: 'text',
      title: 'Resirkulering av materialer',
      content: `Elektronikk inneholder mange verdifulle materialer som kan gjenvinnes:

- **Kobber** – fra kabler og kretskort
- **Gull og sølv** – fra kontaktpunkter og kretskort
- **Aluminium** – fra kabinetter og kjøleribber
- **Sjeldne jordarter** – fra batterier og magneter
- **Plast** – fra kabinetter og isolasjon

Ved resirkulering demonteres produktene, og de ulike materialene sorteres og sendes til smelteverkeller gjenvinningsanlegg. Gjenvinning av metaller fra elektronikk krever langt mindre energi enn utvinning av nye metaller fra malm.`,
    },

    {
      id: 'elektro-data-vg1-7-5-example-1',
      type: 'example',
      title: 'Materialer i en mobiltelefon',
      problem: 'En mobiltelefon inneholder mange ulike materialer. Hvilke kan gjenvinnes, og hvordan?',
      solution: `En gjennomsnittlig mobiltelefon inneholder over 60 ulike grunnstoffer:

- **Gull (ca. 0,03 g)** – fra kontakter og kretskort → smeltes og gjenvinnes
- **Kobber (ca. 15 g)** – fra ledninger og kretskort → smeltes
- **Kobolt og litium** – fra batteriet → kjemisk gjenvinning
- **Sjeldne jordarter** – fra vibrasjonsmotoren → spesialbehandling
- **Glass og keramikk** – fra skjerm → kan knuses og gjenvinnes
- **Plast** – fra kabinett → smeltes og formes på nytt

Én tonn mobiltelefoner inneholder mer gull enn ett tonn gullmalm!`,
    },

    // BLOKK 4: Sirkulær vs lineær økonomi
    {
      id: 'elektro-data-vg1-7-5-def-3',
      type: 'definition',
      title: 'Sirkulær økonomi vs. lineær økonomi',
      content: `**Lineær økonomi** følger modellen «ta – lage – bruke – kaste». Ressurser utvinnes, brukes én gang, og ender som avfall.

**Sirkulær økonomi** er en modell der ressurser holdes i bruk så lenge som mulig. Produkter designes for å vare, repareres, gjenbrukes og til slutt resirkuleres. Prinsippene er:
1. **Reduser** – bruk mindre ressurser
2. **Gjenbruk** – bruk produkter flere ganger
3. **Reparer** – fiks heller enn å kaste
4. **Resirkuler** – gjenvinning av materialer
5. **Design for sirkulæritet** – lag produkter som er enkle å demontere og gjenvinne`,
    },

    // BLOKK 5: Miljøfarlige stoffer
    {
      id: 'elektro-data-vg1-7-5-warning-1',
      type: 'warning',
      title: 'Miljøfarlige stoffer i elektronikk',
      content: `Elektronikk kan inneholde flere miljøfarlige stoffer som krever spesiell håndtering:

- **Bly** – i loddetinn (eldre elektronikk) og CRT-skjermer
- **Kvikksølv** – i lysrør og eldre LCD-skjermer
- **Kadmium** – i NiCd-batterier og visse halvledere
- **Bromerte flammehemmere** – i plast og kretskort
- **PCB** – i eldre kondensatorer og transformatorer

**RoHS-direktivet** (Restriction of Hazardous Substances) begrenser bruk av disse stoffene i ny elektronikk. Likevel finnes stoffene i eldre utstyr som fortsatt er i bruk.`,
    },

    {
      id: 'elektro-data-vg1-7-5-example-2',
      type: 'example',
      title: 'Riktig håndtering av kasserte lysrør',
      problem: 'Du skal bytte ut gamle lysrør i et kontorbygg. Hvordan håndterer du de kasserte lysrørene?',
      solution: `Lysrør inneholder kvikksølv og skal behandles som farlig avfall:

1. **Ikke knus lysrørene** – kvikksølvdamp er giftig å puste inn
2. **Legg lysrørene forsiktig i original emballasje** eller spesialemballasje for lysrør
3. **Oppbevar tørt og sikkert** på et midlertidig lager
4. **Lever til godkjent mottaker** – kommunal gjenvinningsstasjon eller returordning
5. **Dokumenter** antall og type lysrør som leveres inn

Knuste lysrør skal behandles som farlig avfall. Bruk hansker og pustevernmaske ved opprydding.`,
    },

    // OPPGAVER
    {
      id: 'elektro-data-vg1-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-7-5-mc-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva står WEEE for?',
        options: [
          { id: 'a', text: 'Waste Electrical and Electronic Equipment', correct: true },
          { id: 'b', text: 'World Energy and Environment Evaluation', correct: false },
          { id: 'c', text: 'Western European Electronics Enforcement', correct: false },
          { id: 'd', text: 'Waste Emission and Environmental Efficiency', correct: false },
        ],
        solution: 'WEEE står for Waste Electrical and Electronic Equipment. Det er et EU-direktiv som regulerer innsamling og behandling av elektrisk og elektronisk avfall.',
      },
    },
    {
      id: 'elektro-data-vg1-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-7-5-mc-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket av disse stoffene finnes i lysrør og er miljøfarlig?',
        options: [
          { id: 'a', text: 'Kobber', correct: false },
          { id: 'b', text: 'Kvikksølv', correct: true },
          { id: 'c', text: 'Aluminium', correct: false },
          { id: 'd', text: 'Gull', correct: false },
        ],
        solution: 'Lysrør inneholder kvikksølv, som er et giftig tungmetall. Derfor skal lysrør aldri kastes i vanlig søppel, men leveres til godkjent mottak for farlig avfall.',
      },
    },
    {
      id: 'elektro-data-vg1-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-7-5-classic-1',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom lineær økonomi og sirkulær økonomi. Gi et eksempel fra elektrofaget på hvordan sirkulær økonomi kan praktiseres.',
        solution: 'Lineær økonomi følger modellen «ta – lage – bruke – kaste», der ressurser brukes én gang og ender som avfall. Sirkulær økonomi handler om å holde ressurser i bruk så lenge som mulig gjennom reparasjon, gjenbruk og resirkulering. Et eksempel fra elektrofaget: I stedet for å kaste en defekt datamaskin, kan man reparere den, oppgradere komponenter (RAM, SSD), eller demontere den og gjenvinne materialer som kobber, gull og aluminium.',
      },
    },
    {
      id: 'elektro-data-vg1-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-7-5-classic-2',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv produsentansvaret for EE-avfall i Norge. Hvem har ansvaret, og hva innebærer det i praksis?',
        solution: 'Produsentansvaret innebærer at produsenter og importører av elektrisk og elektronisk utstyr har ansvar for innsamling og forsvarlig behandling av produktene når de blir avfall. I praksis betyr dette at de finansierer returordninger (som Renas og Norsirk), og at forbrukere kan levere EE-avfall gratis til butikker som selger tilsvarende produkter eller til kommunale gjenvinningsstasjoner. Produsentene betaler et miljøgebyr for hvert produkt de selger, som finansierer ordningen.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.1: Prosjektplanlegging og -styring
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_8_1: TextbookChapter = {
  id: 'elektro-data-vg1-8-1',
  courseId: 'elektro-data-vg1',
  chapterNumber: '8.1',
  title: 'Prosjektplanlegging og -styring',
  description: 'Prosjektfaser, Gantt-diagram, milepæler og ressursplanlegging.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og gjennomføre tekniske prosjekter',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-8-1-intro',
      type: 'text',
      content: `## Prosjektarbeid i elektrofagene

I elektro- og datateknikkfagene jobber du ofte i prosjekter. Enten det er installasjon av elektrisk anlegg, oppsett av nettverk eller utvikling av et styresystem – alt krever planlegging, organisering og oppfølging.

God prosjektstyring sikrer at arbeidet blir ferdig til rett tid, med riktig kvalitet og innenfor budsjett. I dette kapittelet lærer du om prosjektfaser, planleggingsverktøy og hvordan du styrer et prosjekt fra start til mål.`,
    },

    // BLOKK 1: Prosjektfaser
    {
      id: 'elektro-data-vg1-8-1-def-1',
      type: 'definition',
      title: 'Prosjektfaser',
      content: `Et prosjekt deles vanligvis inn i fire faser:

**1. Initiering** – Hva skal vi gjøre og hvorfor?
- Definere mål og formål
- Avklare omfang og begrensninger
- Identifisere interessenter

**2. Planlegging** – Hvordan skal vi gjøre det?
- Lage aktivitetsliste og tidsplan
- Fordele ansvar og ressurser
- Planlegge innkjøp av materialer
- Gjennomføre risikovurdering

**3. Gjennomføring** – Utfør arbeidet
- Følge planen og fordele oppgaver
- Holde jevnlige møter og oppdatere status
- Håndtere avvik og endringer
- Kvalitetssikre underveis

**4. Avslutning** – Evaluering og levering
- Teste og kontrollere resultatet
- Skrive sluttrapport
- Evaluere hva som gikk bra og hva som kan forbedres`,
    },

    // BLOKK 2: Gantt-diagram
    {
      id: 'elektro-data-vg1-8-1-def-2',
      type: 'definition',
      title: 'Gantt-diagram',
      content: `Et **Gantt-diagram** er et visuelt planleggingsverktøy som viser aktiviteter langs en tidslinje. Hver aktivitet vises som en horisontal stolpe der lengden representerer varigheten.

Gantt-diagrammet viser:
- **Aktiviteter** – hva som skal gjøres
- **Tidsperiode** – når aktiviteten starter og slutter
- **Avhengigheter** – hvilke aktiviteter som må fullføres før andre kan starte
- **Milepæler** – viktige tidspunkter (markeres ofte som ruter eller stjerner)

Verktøy for Gantt-diagram: Microsoft Project, Excel, eller gratisverktøy som GanttProject.`,
    },

    {
      id: 'elektro-data-vg1-8-1-example-1',
      type: 'example',
      title: 'Gantt-diagram for nettverksinstallasjon',
      problem: 'Du skal installere nettverk i et nytt kontorlokale. Lag en oversikt over aktiviteter med tidsestimat.',
      solution: `**Prosjekt:** Nettverksinstallasjon i kontorlokale

| Aktivitet | Uke 1 | Uke 2 | Uke 3 | Uke 4 |
|---|---|---|---|---|
| Planlegging og bestilling | ████ | | | |
| Kabelføring | | ████ | ████ | |
| Montering av nettverkspunkter | | | ████ | |
| Installasjon av svitsjer | | | | ██ |
| Konfigurasjon og testing | | | | ████ |
| Dokumentasjon | | | | ██ |

**Milepæler:**
- Uke 1: Materialer bestilt ✓
- Uke 3: Kabling ferdig ✓
- Uke 4: Nettverk operativt ✓`,
    },

    // BLOKK 3: Milepæler og tidsfrister
    {
      id: 'elektro-data-vg1-8-1-text-1',
      type: 'text',
      title: 'Milepæler og tidsfrister',
      content: `**Milepæler** er viktige kontrollpunkter i et prosjekt. De markerer at en fase eller deloppgave er fullført. Eksempler:

- «Planlegging godkjent» – planen er klar og godkjent av oppdragsgiver
- «Materialer levert» – alt utstyr er på plass
- «Installasjon ferdig» – det fysiske arbeidet er utført
- «Testing godkjent» – alt fungerer som det skal
- «Prosjekt avsluttet» – sluttrapport levert

**Tidsfrister** er datoer som må overholdes. Forsinkelser i én aktivitet kan forplante seg til resten av prosjektet. Derfor er det viktig å bygge inn litt «buffer» i tidsplanen.`,
    },

    // BLOKK 4: Ressursplanlegging
    {
      id: 'elektro-data-vg1-8-1-text-2',
      type: 'text',
      title: 'Ressursplanlegging',
      content: `Ressursplanlegging handler om å sørge for at riktige ressurser er tilgjengelige til rett tid:

**Menneskelige ressurser:**
- Hvem skal gjøre hva?
- Har alle riktig kompetanse?
- Er noen overbelastet?

**Materialer og utstyr:**
- Hva trengs av kabler, komponenter og verktøy?
- Hvor lang leveringstid har materialene?
- Er det spesialutstyr som må leies?

**Økonomi:**
- Hva koster materialene?
- Hva koster arbeidstimene?
- Er det rom for uforutsette utgifter?

En god ressursplan forebygger flaskehalser og forsinkelser.`,
    },

    {
      id: 'elektro-data-vg1-8-1-example-2',
      type: 'example',
      title: 'Ressursplanlegging for elektroinstallasjon',
      problem: 'Du planlegger elektroinstallasjon i en ny leilighet. Sett opp en enkel ressursoversikt.',
      solution: `**Prosjekt:** Elektroinstallasjon i leilighet (80 m²)

**Personell:**
- 1 elektriker (fagansvarlig) – 5 dager
- 1 lærling – 5 dager

**Materialer:**
- Installasjonskabler (PFXP, PN) – bestilles 1 uke i forveien
- Sikringsskap med automatsikringer – bestilles 2 uker i forveien
- Stikkontakter, brytere og koblingsbokser – standard lager
- Downlights og armaturer – bestilles etter kundens valg

**Verktøy:**
- Kabeltrekker, avspolingsutstyr, multimeter, isolasjonstester

**Budsjett:**
- Materialer: ca. 45 000 kr
- Arbeid: ca. 35 000 kr
- Buffer (10 %): ca. 8 000 kr
- **Totalt: ca. 88 000 kr**`,
    },

    // OPPGAVER
    {
      id: 'elektro-data-vg1-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-8-1-mc-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er riktig rekkefølge på prosjektfasene?',
        options: [
          { id: 'a', text: 'Planlegging → Initiering → Gjennomføring → Avslutning', correct: false },
          { id: 'b', text: 'Initiering → Planlegging → Gjennomføring → Avslutning', correct: true },
          { id: 'c', text: 'Gjennomføring → Planlegging → Avslutning → Initiering', correct: false },
          { id: 'd', text: 'Initiering → Gjennomføring → Planlegging → Avslutning', correct: false },
        ],
        solution: 'Riktig rekkefølge er: Initiering (hva og hvorfor?) → Planlegging (hvordan?) → Gjennomføring (utfør arbeidet) → Avslutning (evaluering og levering).',
      },
    },
    {
      id: 'elektro-data-vg1-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-8-1-mc-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva viser et Gantt-diagram?',
        options: [
          { id: 'a', text: 'Organisasjonsstrukturen i en bedrift', correct: false },
          { id: 'b', text: 'Aktiviteter og tidsplan i et prosjekt', correct: true },
          { id: 'c', text: 'Budsjettet fordelt på ulike poster', correct: false },
          { id: 'd', text: 'Risikovurdering av prosjektet', correct: false },
        ],
        solution: 'Et Gantt-diagram er et visuelt planleggingsverktøy som viser aktiviteter langs en tidslinje. Hver aktivitet er en horisontal stolpe som viser start, varighet og slutt.',
      },
    },
    {
      id: 'elektro-data-vg1-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-8-1-classic-1',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva en milepæl er i prosjektsammenheng, og gi tre eksempler på milepæler i et elektroinstallasjonsprosjekt.',
        solution: 'En milepæl er et viktig kontrollpunkt som markerer at en fase eller deloppgave er fullført. Tre eksempler fra et elektroinstallasjonsprosjekt: (1) «Planlegging godkjent» – tegninger og materialliste er godkjent av byggherre. (2) «Kabling fullført» – alle kabler er trukket og tilkoblet i fordelingsskapet. (3) «Sluttkontroll bestått» – det lokale eltilsynet har godkjent installasjonen.',
      },
    },
    {
      id: 'elektro-data-vg1-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-8-1-classic-2',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal planlegge installasjon av et alarmsystem i en butikk. Lag en enkel aktivitetsliste med minst 6 aktiviteter, og angi rekkefølgen de må utføres i.',
        solution: 'Aktivitetsliste for installasjon av alarmsystem: (1) Befaring og kartlegging av butikklokalet – identifiser dører, vinduer og sårbare punkter. (2) Utarbeide plan og bestille utstyr – sentralenhet, sensorer, kameraer, kabler. (3) Kabelføring – legge kabler fra sentral til alle sensorpunkter. (4) Montering av sensorer og kameraer – magnetkontakter på dører, bevegelsessensorer, kameraer. (5) Tilkobling og programmering av sentralen – koble til alle sensorer, sette opp soner og alarmprofiler. (6) Testing og opplæring – teste at alt fungerer, lære opp butikkpersonalet i bruk av systemet.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: Rapportskriving og presentasjon
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_8_3: TextbookChapter = {
  id: 'elektro-data-vg1-8-3',
  courseId: 'elektro-data-vg1',
  chapterNumber: '8.3',
  title: 'Rapportskriving og presentasjon',
  description: 'Rapportstruktur, faglig skriving, kildehenvisning og presentasjonsteknikk.',
  estimatedMinutes: 45,
  competenceGoals: [
    'dokumentere og presentere eget arbeid faglig',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-8-3-intro',
      type: 'text',
      content: `## Dokumentasjon og formidling

Faglig dokumentasjon er en viktig del av arbeidet i elektro- og datafagene. Enten du skriver en prosjektrapport, dokumenterer en installasjon eller presenterer et resultat for en oppdragsgiver, må du kunne uttrykke deg klart og presist.

God dokumentasjon gjør det mulig for andre å forstå hva du har gjort, hvorfor du har gjort det, og hva resultatet ble. Det er også en viktig del av kvalitetssikringen.`,
    },

    // BLOKK 1: Rapportstruktur
    {
      id: 'elektro-data-vg1-8-3-def-1',
      type: 'definition',
      title: 'Rapportstruktur',
      content: `En faglig rapport følger vanligvis denne strukturen:

**1. Forside** – Tittel, forfattere, dato, skole/bedrift
**2. Innholdsfortegnelse** – Oversikt over kapitler og sider
**3. Innledning** – Bakgrunn, formål og problemstilling
**4. Teori** – Relevant fagstoff som trengs for å forstå arbeidet
**5. Metode** – Hvordan arbeidet ble utført (utstyr, fremgangsmåte)
**6. Resultat** – Hva du fant ut (målinger, observasjoner, data)
**7. Drøfting** – Analyse og tolkning av resultatene, sammenligning med teori
**8. Konklusjon** – Oppsummering av de viktigste funnene, svar på problemstillingen
**9. Kildeliste** – Alle kilder du har brukt
**10. Vedlegg** – Tegninger, datablad, kode, bilder`,
    },

    {
      id: 'elektro-data-vg1-8-3-example-1',
      type: 'example',
      title: 'Innledning til prosjektrapport',
      problem: 'Skriv en kort innledning til en rapport om måling av spenning og strøm i en krets.',
      solution: `**Innledning**

Formålet med dette prosjektet var å måle spenning og strøm i enkle seriekretser og parallellkretser for å verifisere Ohms lov og Kirchhoffs lover.

Bakgrunnen for prosjektet er kompetansemålet om å «bygge og analysere elektriske kretser». Forståelse av spennings- og strømforhold er grunnleggende for alt arbeid innen elektrofaget.

I denne rapporten presenterer vi oppsettet av kretser med kjente motstander, måleresultater med multimeter, og sammenligner de målte verdiene med beregnede verdier.`,
    },

    // BLOKK 2: Faglig skriving
    {
      id: 'elektro-data-vg1-8-3-text-1',
      type: 'text',
      title: 'Faglig skriving',
      content: `Når du skriver faglig, bør du følge disse reglene:

**Presist språk:**
- Bruk fagbegreper korrekt (si «spenning», ikke «strøm» når du mener spenning)
- Vær konkret og unngå vage formuleringer
- Oppgi enheter og verdier nøyaktig

**Passiv form:**
- Faglig tekst skrives ofte i passiv form: «Spenningen ble målt til 12,3 V» (ikke «Jeg målte spenningen til 12,3 V»)
- Passiv form gir en mer objektiv og nøytral tone

**Struktur:**
- Bruk overskrifter og avsnitt for å organisere teksten
- Hvert avsnitt bør handle om ett tema
- Bruk tabeller og figurer for å presentere data oversiktlig`,
    },

    // BLOKK 3: Kildehenvisning
    {
      id: 'elektro-data-vg1-8-3-def-2',
      type: 'definition',
      title: 'Kildehenvisning',
      content: `Når du bruker informasjon fra andre kilder, må du oppgi kilden. Dette gjelder bøker, nettsider, datablad og artikler.

**Hvorfor kildehenvisning?**
- Viser at arbeidet bygger på pålitelige kilder
- Gjør det mulig å sjekke informasjonen
- Er et krav i all faglig skriving
- Forebygger plagiat

**APA-stil (vanlig i skolen):**
- I teksten: (Forfatter, årstall)
- I kildelisten: Forfatter, A. A. (årstall). *Tittel*. Utgiver.

**Eksempel:**
- I teksten: «Ohms lov beskriver sammenhengen mellom spenning, strøm og motstand (Nilsen, 2022).»
- I kildelisten: Nilsen, P. (2022). *Elektrofag grunnleggende*. Gyldendal.`,
    },

    {
      id: 'elektro-data-vg1-8-3-example-2',
      type: 'example',
      title: 'Kildehenvisning i praksis',
      problem: 'Du har brukt informasjon fra en nettside og en lærebok i rapporten din. Vis hvordan du henviser til kildene.',
      solution: `**I teksten:**
«Ifølge NEK 400 skal alle elektriske installasjoner ha overspenningsvern (Nelfo, 2023). Spenningen i en seriekrets fordeles mellom komponentene proporsjonalt med motstanden (Hansen & Berg, 2021).»

**I kildelisten:**
- Hansen, T. & Berg, K. (2021). *Elektro og datateknologi VG1*. Cappelen Damm.
- Nelfo. (2023). *Krav til overspenningsvern i nye installasjoner*. Hentet fra https://www.nelfo.no/overspenningsvern`,
    },

    // BLOKK 4: Presentasjonsteknikk
    {
      id: 'elektro-data-vg1-8-3-text-2',
      type: 'text',
      title: 'Presentasjonsteknikk',
      content: `Når du presenterer et prosjekt muntlig, er dette viktig:

**Forberedelse:**
- Lag en klar disposisjon med innledning, hoveddel og avslutning
- Lag visuelle hjelpemidler (presentasjon, plakater, demonstrasjoner)
- Øv på fremføringen og hold deg innenfor tidsrammen

**Under presentasjonen:**
- Snakk tydelig og i passelig tempo
- Ha blikkontakt med publikum
- Bruk bilder og diagrammer heller enn mye tekst på lysbilder
- Forklar fagbegreper du bruker
- Vær forberedt på spørsmål

**Tips for gode lysbilder:**
- Maks 5–6 punkter per lysbilde
- Bruk store nok skrifttyper (min. 24 pt)
- Bruk bilder og diagrammer for å illustrere
- Unngå å lese direkte fra lysbildene`,
    },

    // OPPGAVER
    {
      id: 'elektro-data-vg1-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-8-3-mc-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken del av en rapport inneholder analyse og tolkning av resultatene?',
        options: [
          { id: 'a', text: 'Innledning', correct: false },
          { id: 'b', text: 'Metode', correct: false },
          { id: 'c', text: 'Drøfting', correct: true },
          { id: 'd', text: 'Konklusjon', correct: false },
        ],
        solution: 'Drøftingsdelen er der du analyserer og tolker resultatene. Du sammenligner med teori, vurderer feilkilder og diskuterer hva resultatene betyr. Konklusjonen oppsummerer bare de viktigste funnene.',
      },
    },
    {
      id: 'elektro-data-vg1-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-8-3-mc-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvorfor bruker man kildehenvisninger i faglige rapporter?',
        options: [
          { id: 'a', text: 'For å gjøre rapporten lengre', correct: false },
          { id: 'b', text: 'For å vise at arbeidet bygger på pålitelige kilder og unngå plagiat', correct: true },
          { id: 'c', text: 'For å imponere læreren', correct: false },
          { id: 'd', text: 'Fordi det er plass til det i vedlegg', correct: false },
        ],
        solution: 'Kildehenvisninger viser at arbeidet bygger på pålitelige kilder, gjør det mulig for leseren å kontrollere informasjonen, og forebygger plagiat. Det er et grunnleggende krav i all faglig skriving.',
      },
    },
    {
      id: 'elektro-data-vg1-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-8-3-classic-1',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en kort metodebeskrivelse for et prosjekt der du har målt motstanden i tre ulike materialer (kobber, aluminium og jern) med et multimeter.',
        solution: 'Metode: Motstanden i tre materialprøver ble målt med et digitalt multimeter (Fluke 115). Materialprøvene var ledere av kobber, aluminium og jern, alle med lengde 1,0 m og tverrsnitt 1,5 mm². Multimeteret ble stilt inn på motstandsmåling (Ω). Måleledningene ble koblet til hver ende av materialprøven, og motstandsverdien ble avlest fra displayet. Målingen ble gjentatt tre ganger for hvert materiale, og gjennomsnittsverdien ble beregnet. Temperaturen i rommet var 22 °C under målingene.',
      },
    },
    {
      id: 'elektro-data-vg1-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-8-3-classic-2',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi tre konkrete tips for en god presentasjon av et teknisk prosjekt, og forklar hvorfor hvert tips er viktig.',
        solution: '(1) Bruk bilder og diagrammer i stedet for mye tekst – dette gjør det lettere for publikum å forstå tekniske konsepter, og visuelle hjelpemidler huskes bedre enn tekst. (2) Forklar fagbegreper når du bruker dem – ikke alle i publikum har samme fagbakgrunn, og forklaringer sikrer at budskapet når frem. (3) Øv på fremføringen og hold deg innenfor tidsrammen – god forberedelse gir selvtillit, naturlig flyt og viser respekt for publikums tid.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.5: Lærlingordning og fagbrev
// ============================================================================

export const CHAPTER_ELEKTRO_DATA_VG1_8_5: TextbookChapter = {
  id: 'elektro-data-vg1-8-5',
  courseId: 'elektro-data-vg1',
  chapterNumber: '8.5',
  title: 'Lærlingordning og fagbrev',
  description: '2+2-modellen, lærlingkontrakt, fagprøve og karrieremuligheter.',
  estimatedMinutes: 40,
  competenceGoals: [
    'forklare lærlingordningen og veien til fagbrev',
  ],
  content: [
    // INTRO
    {
      id: 'elektro-data-vg1-8-5-intro',
      type: 'text',
      content: `## Veien til fagbrev

Etter VG1 Elektro og datateknologi og VG2 (et valgt programområde) venter læretiden i bedrift. Lærlingordningen er en sentral del av det norske utdanningssystemet og gir deg mulighet til å kombinere opplæring med praktisk arbeid.

I dette kapittelet lærer du om 2+2-modellen, lærlingkontrakten, fagprøven og hvilke karrieremuligheter som åpner seg med fagbrev.`,
    },

    // BLOKK 1: 2+2-modellen
    {
      id: 'elektro-data-vg1-8-5-def-1',
      type: 'definition',
      title: '2+2-modellen',
      content: `**2+2-modellen** er hovedmodellen for yrkesfaglig utdanning i Norge:

- **2 år i skole**: VG1 og VG2 på videregående skole
- **2 år i bedrift**: Læretid med opplæring og verdiskaping

Eksempel for elektrikerfaget:
- **VG1**: Elektro og datateknologi (felles for alle elektroretninger)
- **VG2**: Elenergi og ekom (eller annet programområde)
- **Lære 1. år**: Opplæring i bedrift, mye veiledning
- **Lære 2. år**: Mer selvstendig arbeid, forberedes til fagprøve

Etter fullført læretid og bestått fagprøve får du **fagbrev**.`,
    },

    // BLOKK 2: Lærlingkontrakt
    {
      id: 'elektro-data-vg1-8-5-text-1',
      type: 'text',
      title: 'Lærlingkontrakt – rettigheter og plikter',
      content: `Når du starter som lærling, signerer du en **lærlingkontrakt** med lærebedriften. Kontrakten godkjennes av fylkeskommunen.

**Lærlingens rettigheter:**
- Opplæring i henhold til læreplanen
- Veiledning fra en faglig leder og instruktør
- Lærlinglønn (se tabell under)
- Ferie og fridager som andre arbeidstakere
- Beskyttelse gjennom Arbeidsmiljøloven

**Lærlingens plikter:**
- Møte opp til avtalt tid og gjøre sitt beste
- Følge bedriftens regler og HMS-rutiner
- Delta aktivt i opplæringen
- Føre opplæringsbok/dokumentere arbeidet
- Melde fra om fravær`,
    },

    // BLOKK 3: Lærlinglønn
    {
      id: 'elektro-data-vg1-8-5-text-2',
      type: 'text',
      title: 'Lærlinglønn',
      content: `Lærlinglønnen er vanligvis en andel av en fagarbeiders lønn, og øker for hvert halvår:

| Halvår | Andel av fagarbeiderlønn | Ca. månedslønn* |
|---|---|---|
| 1. halvår | 30 % | ca. 11 000 kr |
| 2. halvår | 40 % | ca. 14 500 kr |
| 3. halvår | 50 % | ca. 18 000 kr |
| 4. halvår | 80 % | ca. 29 000 kr |

*Tallene er omtrentlige og varierer mellom bransjer og tariffavtaler.

De to første halvårene regnes som «opplæringsdelen» der bedriften bruker mye tid på opplæring. De to siste halvårene er «verdiskapingsdelen» der lærlingen bidrar mer produktivt.`,
    },

    {
      id: 'elektro-data-vg1-8-5-example-1',
      type: 'example',
      title: 'Fra VG1 til fagbrev',
      problem: 'Beskriv veien fra VG1 til fagbrev for en som vil bli elektriker.',
      solution: `**Trinn 1 – VG1 Elektro og datateknologi (1 år)**
Grunnleggende elektrofag: kretser, komponenter, sikkerhet, digital teknologi.

**Trinn 2 – VG2 Elenergi og ekom (1 år)**
Spesialisering: installasjonsteknikk, kabling, forskrifter, prosjektarbeid.

**Trinn 3 – Lærling i bedrift (2 år)**
Praktisk opplæring som lærling i en elektrobedrift. Du jobber med reelle installasjoner under veiledning, fører opplæringsbok og forbereder deg til fagprøven.

**Trinn 4 – Fagprøve**
Praktisk prøve der du planlegger, gjennomfører, dokumenterer og vurderer et elektrikerarbeid. Prøven vurderes til «bestått meget godt», «bestått» eller «ikke bestått».

**Resultat: Fagbrev som elektriker!**`,
    },

    // BLOKK 4: Fagprøve og videre karriere
    {
      id: 'elektro-data-vg1-8-5-def-2',
      type: 'definition',
      title: 'Fagprøve / svenneprøve',
      content: `**Fagprøven** er den avsluttende prøven etter læretiden. Den består av fire deler:

1. **Planlegging** – Du lager en plan for arbeidet du skal utføre
2. **Gjennomføring** – Du utfører det praktiske arbeidet
3. **Dokumentasjon** – Du dokumenterer arbeidet (tegninger, beskrivelser, bilder)
4. **Egenvurdering** – Du vurderer eget arbeid og reflekterer over prosessen

Prøven vurderes av en prøvenemnd med representanter fra bransjen. Resultatet er:
- **Bestått meget godt** – Arbeidet holder svært høy faglig standard
- **Bestått** – Arbeidet holder god faglig standard
- **Ikke bestått** – Arbeidet holder ikke tilstrekkelig standard (kan tas på nytt)`,
    },

    {
      id: 'elektro-data-vg1-8-5-text-3',
      type: 'text',
      title: 'Karrieremuligheter med fagbrev',
      content: `Med fagbrev i et elektrofag har du mange muligheter:

**Jobbe som fagarbeider:**
- Elektriker, dataelektroniker, automatiker, energimontør m.m.
- Godt arbeidsmarked med stabil etterspørsel

**Videreutdanning:**
- **Mesterbrev** – etter noen års praksis, gir rett til å drive egen bedrift
- **Fagskole** (2 år) – teknisk spesialisering (f.eks. elkraft, automasjon)
- **Generell studiekompetanse** – via påbygging (1 år), gir tilgang til høgskole/universitet
- **Ingeniørutdanning** – via Y-veien (fagbrev gir direkte opptak til ingeniørstudier)

**Lederroller:**
- Bas/formann på prosjekter
- Prosjektleder
- Avdelingsleder
- Starte egen bedrift (med mesterbrev)`,
    },

    // OPPGAVER
    {
      id: 'elektro-data-vg1-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-8-5-mc-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva innebærer 2+2-modellen i yrkesfaglig utdanning?',
        options: [
          { id: 'a', text: '2 år ungdomsskole + 2 år videregående', correct: false },
          { id: 'b', text: '2 år i skole + 2 år i bedrift som lærling', correct: true },
          { id: 'c', text: '2 år teori + 2 år på fagskole', correct: false },
          { id: 'd', text: '2 år norsk + 2 år engelsk utdanning', correct: false },
        ],
        solution: '2+2-modellen betyr 2 år i videregående skole (VG1 + VG2) etterfulgt av 2 år som lærling i bedrift. Etter bestått fagprøve får du fagbrev.',
      },
    },
    {
      id: 'elektro-data-vg1-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-8-5-mc-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke fire deler består fagprøven av?',
        options: [
          { id: 'a', text: 'Teori, praksis, muntlig, skriftlig', correct: false },
          { id: 'b', text: 'Planlegging, gjennomføring, dokumentasjon, egenvurdering', correct: true },
          { id: 'c', text: 'Sikkerhet, installasjon, måling, rapport', correct: false },
          { id: 'd', text: 'Tegning, kabling, testing, godkjenning', correct: false },
        ],
        solution: 'Fagprøven består av fire deler: planlegging, gjennomføring, dokumentasjon og egenvurdering. Prøven vurderes av en prøvenemnd med representanter fra bransjen.',
      },
    },
    {
      id: 'elektro-data-vg1-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'elektro-data-vg1-8-5-classic-1',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv minst tre ulike karrieremuligheter du har etter å ha tatt fagbrev i et elektrofag. Forklar kort hva hver mulighet innebærer.',
        solution: '(1) Jobbe som fagarbeider (f.eks. elektriker) – du utfører installasjoner, feilsøking og vedlikehold av elektriske anlegg. (2) Ta mesterbrev – etter noen års praksis kan du ta mesterbrev, som gir rett til å starte og drive egen elektrobedrift. (3) Gå Y-veien til ingeniørutdanning – fagbrevet gir direkte opptak til ingeniørstudier ved høgskole, der du kan spesialisere deg innen elkraft, automasjon eller elektronikk. Andre muligheter inkluderer fagskole (teknisk spesialisering) og påbygging til generell studiekompetanse.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const CHAPTERS_ELEKTRO_DATA_VG1_KAP78_NY = [
  CHAPTER_ELEKTRO_DATA_VG1_7_2,
  CHAPTER_ELEKTRO_DATA_VG1_7_3,
  CHAPTER_ELEKTRO_DATA_VG1_7_5,
  CHAPTER_ELEKTRO_DATA_VG1_8_1,
  CHAPTER_ELEKTRO_DATA_VG1_8_3,
  CHAPTER_ELEKTRO_DATA_VG1_8_5,
];
