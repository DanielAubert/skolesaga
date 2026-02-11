/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Sikkerhetsfag VG2/VG3 - Del 2: Risikovurdering
 *
 * Delkapitler 2.1-2.5: Risikovurdering
 * Dekker LK20 kompetansemaal for sikkerhetsfag
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Risikobegreper
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_2_1: TextbookChapter = {
  id: 'sikkerhetsfag-2-1',
  courseId: 'sikkerhetsfag',
  chapterNumber: '2.1',
  title: 'Risikobegreper',
  description: 'Grunnleggende begreper i risikovurdering: risiko, saarbarhet, trussel, konsekvens og sannsynlighet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjennomfoere risikovurderinger og foreslaa tiltak',
    'bruke fagbegreper knyttet til risiko og saarbarhet',
  ],
  content: [
    {
      id: 'sik-2-1-intro',
      type: 'text',
      content: `# Risikobegreper

For aa arbeide profesjonelt med sikkerhet maa du forstaa de grunnleggende begrepene som brukes i risikovurdering. Disse begrepene danner et felles spraak for alle som jobber med sikkerhet, beredskap og samfunnssikkerhet. Uten et presist fagspraak blir det vanskelig aa kommunisere om fare, usikkerhet og beskyttelse.

I dette kapittelet laeerer du om de fem sentrale begrepene: risiko, saarbarhet, trussel, konsekvens og sannsynlighet. Sammen utgjor de fundamentet for all risikovurdering.`,
    },
    {
      id: 'sik-2-1-def-risiko',
      type: 'definition',
      title: 'Risiko',
      content: '**Risiko** er et uttrykk for kombinasjonen av sannsynligheten for at en uonsket hendelse inntreffer, og konsekvensene dersom hendelsen inntreffer. Risiko uttrykkes ofte som R = S x K (risiko = sannsynlighet x konsekvens). Lav sannsynlighet og hoey konsekvens kan gi samme risikonivaa som hoey sannsynlighet og lav konsekvens.',
    },
    {
      id: 'sik-2-1-text-risiko',
      type: 'text',
      content: `## Risiko i praksis

Risiko er ikke det samme som fare. En fare er noe som kan foraarsake skade, mens risiko er et maal paa hvor sannsynlig det er at faren faktisk foerer til skade, og hvor alvorlig skaden i saa fall blir.

**Eksempel:**
En motorvei er en fare fordi det kan skje ulykker. Men risikoen avhenger av mange faktorer:
- Fartsgrense og trafikkmengde (pavirker sannsynligheten)
- Bruk av bilbelte og airbag (pavirker konsekvensen)
- Veistandard og vedlikehold (pavirker begge)

### Ulike typer risiko

| Type | Beskrivelse | Eksempel |
|------|-------------|----------|
| Naturrisiko | Risiko fra naturhendelser | Flom, skred, storm |
| Teknologisk risiko | Risiko fra tekniske systemer | Industriulykker, stroembrudd |
| Tilsiktet risiko | Risiko fra bevisste handlinger | Terror, sabotasje, kriminalitet |
| Sammensatt risiko | Kombinasjon av flere typer | Pandemi med samfunnsmessige foelger |

I sikkerhetsfaget arbeider vi med alle disse typene og maa forstaa hvordan de samvirker.`,
    },
    {
      id: 'sik-2-1-def-trussel',
      type: 'definition',
      title: 'Trussel',
      content: '**Trussel** er en mulig uonsket handling eller hendelse som kan foraarsake skade paa verdier vi vil beskytte. I sikkerhetssammenheng skiller vi mellom tilsiktede trusler (som terror, spionasje, sabotasje) og utilsiktede trusler (som naturkatastrofer, systemfeil, menneskelig svikt). Trusselaktorer er de som kan staa bak tilsiktede trusler, for eksempel kriminelle nettverk eller statlige aktorer.',
    },
    {
      id: 'sik-2-1-text-trussel',
      type: 'text',
      content: `## Trusselvurdering

En trusselvurdering handler om aa identifisere hvem eller hva som kan foraarsake skade, og vurdere evne og vilje til aa gjennomfoere en uonsket handling.

### Trusselaktorer

**Statlige aktorer:** Nasjoner som driver etterretning, sabotasje eller cyberangrep mot andre land.

**Kriminelle nettverk:** Organiserte grupper som driver med vinningskriminalitet, narkotika eller menneskesmugling.

**Terrorgrupper:** Ekstremistiske organisasjoner med politiske eller religiose motiver.

**Innsidere:** Ansatte eller personer med tilgang som misbruker sin posisjon.

**Enkeltpersoner:** Personer som handler alene ut fra personlige motiver.

### Trusselnivaer i Norge

Politiets sikkerhetstjeneste (PST) og Nasjonal sikkerhetsmyndighet (NSM) vurderer trusselnivaet i Norge og utgir aarlige trusselvurderinger. Trusselnivaene er:
- **Lavt:** Lite sannsynlig at en hendelse inntreffer
- **Moderat:** Mulig, men ikke sannsynlig
- **Betydelig:** Hendelse kan inntreffe
- **Hoyt:** Sannsynlig at hendelse inntreffer
- **Ekstremt:** Hendelse er nesten sikker`,
    },
    {
      id: 'sik-2-1-def-saarbarhet',
      type: 'definition',
      title: 'Saarbarhet',
      content: '**Saarbarhet** er manglende evne til aa motstaa en uonsket hendelse eller til aa gjenopprette en oensket tilstand etter at hendelsen har inntruffet. Jo mer saarbart et system, en organisasjon eller et samfunn er, desto stoerre blir konsekvensene av en hendelse. Saarbarhet er altsaa det motsatte av robusthet og motstandsdyktighet.',
    },
    {
      id: 'sik-2-1-text-saarbarhet',
      type: 'text',
      content: `## Saarbarhet og robusthet

Saarbarhet handler om svakheter som kan utnyttes av trusler eller som forsterker konsekvensene av uoenskede hendelser.

**Eksempler paa saarbarhet:**
- En bygning uten sprinkleranlegg er saarbar for brann
- Et IT-system uten oppdatert programvare er saarbart for dataangrep
- Et samfunn med bare en veitilknytning er saarbart for isolasjon ved naturskade
- En virksomhet uten backup av data er saarbar for datatap

**Robusthet** er det motsatte av saarbarhet. Et robust system taler paakjenninger og fungerer selv under stress. Maalsetningen i sikkerhetsfaget er aa redusere saarbarhet og oeke robusthet.`,
    },
    {
      id: 'sik-2-1-def-konsekvens',
      type: 'definition',
      title: 'Konsekvens',
      content: '**Konsekvens** er det mulige resultatet av en uonsket hendelse, maalt i skade paa verdier som liv og helse, materielle verdier, miljo, okonomi eller omdoemme. Konsekvenser kan vaere direkte (umiddelbar skade) eller indirekte (foelgeskader over tid). Konsekvensene graderes ofte paa en skala fra ubetydelig til katastrofal.',
    },
    {
      id: 'sik-2-1-def-sannsynlighet',
      type: 'definition',
      title: 'Sannsynlighet',
      content: '**Sannsynlighet** er et maal paa hvor trolig det er at en uonsket hendelse inntreffer innenfor en gitt tidsperiode. Sannsynlighet kan uttrykkes kvantitativt (for eksempel 1 gang per 100 aar) eller kvalitativt (svart lite sannsynlig, lite sannsynlig, sannsynlig, meget sannsynlig). I risikoanalyser bruker vi ofte en skala fra 1 til 5 for aa gradere sannsynlighet.',
    },
    {
      id: 'sik-2-1-example-sammenheng',
      type: 'example',
      title: 'Sammenhengen mellom begrepene',
      problem: 'En skole ligger ved foten av en bratt aaside. Det har vaert mye nedbor den siste tiden. Forklar situasjonen ved hjelp av risikobegrepene trussel, saarbarhet, sannsynlighet, konsekvens og risiko.',
      solution: `**Trussel:** Jordskred fra den bratte aasiden utloest av kraftig nedbor.

**Saarbarhet:** Skolen ligger i utsatt plassering uten fysiske barrierer mot skred. Bygningen er ikke dimensjonert for aa tole trykket fra jordmasser.

**Sannsynlighet:** Etter langvarig nedbor er grunnen mettet med vann, noe som oeker sannsynligheten for skred betraktelig. Paa skalaen ville dette vaere 4 av 5 (meget sannsynlig).

**Konsekvens:** Dersom et skred treffer skolen mens den er i bruk, kan konsekvensene bli katastrofale med tap av menneskeliv. Materielle skader vil ogsaa vaere store. Konsekvens vurderes til 5 av 5 (katastrofal).

**Risiko:** Med hoey sannsynlighet (4) og katastrofal konsekvens (5) er risikoen svart hoey (4 x 5 = 20). Dette tilsier at umiddelbare tiltak maa iverksettes, for eksempel evakuering av skolen.`,
    },
    {
      id: 'sik-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-2-1-ex-1',
        type: 'multiple-choice',
        task: 'Hva er den vanligste definisjonen paa risiko?',
        options: [
          { id: 'a', text: 'Sannsynlighet ganger konsekvens', isCorrect: true },
          { id: 'b', text: 'Trussel pluss saarbarhet', isCorrect: false },
          { id: 'c', text: 'Antall ulykker per aar', isCorrect: false },
          { id: 'd', text: 'Summen av alle farer i en virksomhet', isCorrect: false },
        ],
        solution: 'Risiko defineres som kombinasjonen av sannsynlighet og konsekvens, ofte uttrykt som R = S x K. Dette betyr at risikoen oeker baade naar det blir mer sannsynlig at noe skjer og naar konsekvensene blir alvorligere.',
      },
    },
    {
      id: 'sik-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-2-1-ex-2',
        type: 'multiple-choice',
        task: 'Hva menes med saarbarhet i sikkerhetssammenheng?',
        options: [
          { id: 'a', text: 'Manglende evne til aa motstaa en uonsket hendelse', isCorrect: true },
          { id: 'b', text: 'Sannsynligheten for at en trussel realiseres', isCorrect: false },
          { id: 'c', text: 'Konsekvensene av en hendelse', isCorrect: false },
          { id: 'd', text: 'En aktors vilje til aa gjennomfoere et angrep', isCorrect: false },
        ],
        solution: 'Saarbarhet handler om svakheter og manglende evne til aa motstaa paakjenninger eller gjenopprette normal tilstand etter en hendelse. Det er det motsatte av robusthet og motstandsdyktighet.',
      },
    },
    {
      id: 'sik-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-2-1-ex-3',
        type: 'classic',
        task: 'Forklar forskjellen mellom fare og risiko. Bruk et selvvalgt eksempel fra hverdagen for aa illustrere forskjellen.',
        solution: 'Fare er noe som kan foraarsake skade, mens risiko er et maal paa kombinasjonen av sannsynligheten for at faren realiseres og konsekvensene dersom det skjer. Eksempel: Aa krysse en trafikkert vei er en fare. Risikoen avhenger av hvor mye trafikk det er (sannsynlighet for aa bli paakjoert) og farten paa bilene (konsekvens ved paakjoersel). Et fotgjengerfelt med trafikklys reduserer risikoen selv om faren fortsatt er til stede.',
      },
    },
    {
      id: 'sik-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-2-1-ex-4',
        type: 'classic',
        task: 'Gi eksempler paa tilsiktede og utilsiktede trusler mot en handelsbedrift. Nevn minst to av hver type.',
        solution: 'Tilsiktede trusler: 1) Innbrudd og tyveri fra kriminelle. 2) Dataangrep mot betalingssystemet for aa stjele kortinformasjon. 3) Svindel fra ansatte (underslag). 4) Sabotasje fra misfornoeyde medarbeidere. Utilsiktede trusler: 1) Brann paa grunn av elektrisk feil. 2) Oversvommelse fra vannlekkasje. 3) Stroembrudd som stopper datasystemer og kasser. 4) Pandemi som reduserer kundetilfang og bemanning.',
      },
    },
    {
      id: 'sik-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-2-1-ex-5',
        type: 'classic',
        task: 'Et kjopesenter vurderer risikoen for brann. Beskriv hvordan du vil vurdere sannsynlighet og konsekvens, og forklar hvilke faktorer som pavirker saarbarheten.',
        solution: 'Sannsynlighet: Vurderes ut fra historiske data om branner i kjopesentre, tilstanden paa det elektriske anlegget, om det oppbevares brannfarlig materiale, og kvaliteten paa vedlikeholdsrutiner. Konsekvens: Avhenger av antall personer i senteret, roemningsveier og tilgjengelighet, om brannvesenet er naeert, og verdien av bygning og inventar. Saarbarhetsfaktorer: Manglende sprinkleranlegg oeker saarbarheten. Daarlig vedlikeholdt brannslokkingsutstyr. Blokkerte roemmingsveier. Manglende branntrening for ansatte. Gammel bygning uten brannseksjonering. Mange leietakere uten koordinert brannsikkerhet.',
      },
    },
    {
      id: 'sik-2-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-2-1-ex-6',
        type: 'classic',
        task: 'PST opererer med fem trusselnivaer. Forklar hva de ulike nivaene betyr og diskuter hvorfor det er viktig aa ha et slikt system.',
        solution: 'De fem trusselnivaene er: Lavt (lite sannsynlig), Moderat (mulig men ikke sannsynlig), Betydelig (kan inntreffe), Hoyt (sannsynlig at hendelse inntreffer) og Ekstremt (nesten sikker). Systemet er viktig fordi det gir et felles referansepunkt for politiet, forsvaret, bedrifter og offentlige myndigheter. Det gjor det mulig aa tilpasse sikkerhetstiltak til det aktuelle trusselnivaet, slik at man verken bruker for mye eller for lite ressurser paa sikkerhet. Det gir ogsaa befolkningen informasjon om situasjonen og bidrar til aapen kommunikasjon om trusselbildet.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.2: Risikoanalyse
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_2_2: TextbookChapter = {
  id: 'sikkerhetsfag-2-2',
  courseId: 'sikkerhetsfag',
  chapterNumber: '2.2',
  title: 'Risikoanalyse',
  description: 'Metoder for risikoanalyse, blant annet risikomatrise, bow-tie-analyse og HAZOP.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjennomfoere risikovurderinger og foreslaa tiltak',
    'bruke anerkjente metoder for risikoanalyse',
  ],
  content: [
    {
      id: 'sik-2-2-intro',
      type: 'text',
      content: `# Risikoanalyse

Risikoanalyse er en systematisk prosess for aa identifisere farer, analysere risiko og vurdere om risikonivaaet er akseptabelt. En god risikoanalyse gir beslutningstakere et grunnlag for aa prioritere tiltak og fordele ressurser. Analysen besvarer tre grunnleggende sporsmaal: Hva kan gaa galt? Hvor sannsynlig er det? Og hva blir konsekvensene?

Risikoanalyse er lovpaalagt i mange sammenhenger. Arbeidsmiljoeloven krever at alle virksomheter kartlegger farer og vurderer risiko paa arbeidsplassen. Brann- og eksplosjonsvernloven stiller krav om risikovurdering av brannsikkerhet. Sikkerhetsloven krever risikovurdering for skjermingsverdig informasjon og infrastruktur.`,
    },
    {
      id: 'sik-2-2-def-risikoanalyse',
      type: 'definition',
      title: 'Risikoanalyse',
      content: '**Risikoanalyse** er en systematisk fremgangsmaate for aa beskrive og beregne risiko. Analysen omfatter identifikasjon av uoenskede hendelser, kartlegging av aarsaker og konsekvenser, og vurdering av sannsynlighet og konsekvensgrad. Risikoanalysen er en del av den overordnede risikostyringsprosessen.',
    },
    {
      id: 'sik-2-2-text-prosess',
      type: 'text',
      content: `## Risikoanalysens faser

En risikoanalyse foelger vanligvis disse fasene:

### 1. Planlegging
- Definer formaal og omfang
- Avgrens hva analysen skal dekke
- Velg analysemetode
- Sett sammen analyseteam med relevant kompetanse

### 2. Identifikasjon av farer og trusler
- Brainstorming og erfaringsbasert identifikasjon
- Sjekklister basert paa standarder og tidligere hendelser
- Befaring og inspeksjon av omraade eller system
- Gjennomgang av hendelsesrapporter og avviksmeldinger

### 3. Analyse av aarsaker og konsekvenser
- Kartlegg hva som kan utloese hendelsen
- Vurder mulige konsekvenser for ulike verdier
- Vurder eksisterende barrierer og tiltak

### 4. Risikovurdering
- Anslaa sannsynlighet og konsekvens
- Beregn risikonivaa
- Sammenlign med akseptkriterier

### 5. Risikoevaluering og anbefalinger
- Vurder om risikoen er akseptabel
- Foreslaa risikoreduserende tiltak
- Prioriter tiltak basert paa effekt og kostnad
- Dokumenter funn og anbefalinger`,
    },
    {
      id: 'sik-2-2-def-risikomatrise',
      type: 'definition',
      title: 'Risikomatrise',
      content: '**Risikomatrise** er et verktoy for aa visualisere risiko ved aa plassere hendelser i en matrise med sannsynlighet langs en akse og konsekvens langs den andre. Matrisen deles vanligvis inn i fargesoner: groent (akseptabel risiko), gult (risiko som boer reduseres) og roedt (uakseptabel risiko). Risikomatrisen er den mest brukte metoden for aa fremstille resultatene av en risikoanalyse.',
    },
    {
      id: 'sik-2-2-text-matrise',
      type: 'text',
      content: `## Risikomatrisen i praksis

En typisk 5x5 risikomatrise har foelgende struktur:

**Sannsynlighetsskala (vertikal):**
- 5: Svart sannsynlig (forekommer aarlig eller oftere)
- 4: Sannsynlig (forekommer hvert 1-10 aar)
- 3: Mulig (forekommer hvert 10-50 aar)
- 2: Lite sannsynlig (forekommer hvert 50-100 aar)
- 1: Svart lite sannsynlig (forekommer sjeldnere enn hvert 100 aar)

**Konsekvenskala (horisontal):**
- 1: Ubetydelig (ingen personskade, minimal materiell skade)
- 2: Liten (mindre personskade, begrenset skade)
- 3: Moderat (alvorlig personskade, betydelig skade)
- 4: Alvorlig (varig skade, en doed, stor materiell skade)
- 5: Katastrofal (flere doede, oedeleggelse av infrastruktur)

**Fargesoner:**
- **Groent (1-4):** Akseptabel risiko - ingen tiltak noedvendig
- **Gult (5-12):** Risiko som boer vurderes - tiltak gjennomfoeres hvis mulig
- **Roedt (15-25):** Uakseptabel risiko - tiltak maa gjennomfoeres

Matrisen gir en enkel visuell fremstilling som letter kommunikasjonen av risikoforhold til ledere og beslutningstakere.`,
    },
    {
      id: 'sik-2-2-def-bowtie',
      type: 'definition',
      title: 'Bow-tie-analyse',
      content: '**Bow-tie-analyse** er en metode som visualiserer risiko i form av en sloeyfe (butterfly/bow-tie). I sentrum staar den uoenskede hendelsen. Til venstre vises aarsaker (trusler) og forebyggende barrierer. Til hoeyre vises konsekvenser og konsekvensreduserende barrierer. Navnet kommer av at diagrammet ligner en sloeyfe. Bow-tie er saerlig nyttig for aa vise sammenhengen mellom trusler, barrierer og konsekvenser.',
    },
    {
      id: 'sik-2-2-text-bowtie',
      type: 'text',
      content: `## Bow-tie-analyse i detalj

Bow-tie-diagrammet bygges opp slik:

### Venstre side (aarsaker)
- Identifiser alle trusler og farer som kan utloese hendelsen
- For hver trussel: kartlegg forebyggende barrierer
- Vurder styrken paa barrierene

### Sentrum (tophendelse)
- Den uoenskede hendelsen som analyseres
- For eksempel: brann, datainnbrudd, lekkasje av farlig stoff

### Hoeyre side (konsekvenser)
- Identifiser alle mulige konsekvenser
- For hver konsekvens: kartlegg konsekvensreduserende barrierer
- Vurder styrken paa barrierene

### Fordeler med bow-tie
- Gir god oversikt over hele risikobildet
- Viser tydelig rollen til forebyggende og konsekvensreduserende tiltak
- Lett aa forstaa for ikke-spesialister
- Kan brukes som grunnlag for opplaering og oevelser`,
    },
    {
      id: 'sik-2-2-def-hazop',
      type: 'definition',
      title: 'HAZOP',
      content: '**HAZOP** (Hazard and Operability Study) er en systematisk metode for aa identifisere farer og driftsproblemer i prosessanlegg og tekniske systemer. Metoden bruker ledeord (for eksempel mer, mindre, ingen, motsatt, annen enn) i kombinasjon med prosessparametere (for eksempel trykk, temperatur, flow) for aa avdekke mulige avvik fra normal drift. HAZOP gjennomfoeres av et tverrfaglig team og er mye brukt i olje- og gassindustrien.',
    },
    {
      id: 'sik-2-2-example-analyse',
      type: 'example',
      title: 'Risikoanalyse av et arrangement',
      problem: 'En idrettsklubb skal arrangere et stort utendors arrangement med 2000 deltagere. Gjennomfoer en forenklet risikoanalyse med tre identifiserte farer.',
      solution: `**Hendelse 1: Uvaaer med lyn og torden**
- Sannsynlighet: 3 (mulig, vaermelding sjekkes)
- Konsekvens: 4 (alvorlig, fare for lynnedsalg i folkemengde)
- Risiko: 3 x 4 = 12 (gul sone, tiltak noedvendig)
- Tiltak: Ha vaersystem med varsling, plan for evakuering til innendoers lokaler, avbryte arrangement ved tordenvarsling

**Hendelse 2: Panikk og trengsel ved inngang/utgang**
- Sannsynlighet: 2 (lite sannsynlig med god planlegging)
- Konsekvens: 5 (katastrofal, fare for klemskader og dodsfall)
- Risiko: 2 x 5 = 10 (gul sone, tiltak noedvendig)
- Tiltak: Dimensjonere inn- og utganger for publikumsmengden, ha vakter som styrer stroemmen, tydelig skilting, unngaa flaskehalser

**Hendelse 3: Matforgiftning fra serveringen**
- Sannsynlighet: 2 (lite sannsynlig med gode rutiner)
- Konsekvens: 3 (moderat, mange kan bli syke)
- Risiko: 2 x 3 = 6 (gul sone, tiltak boer vurderes)
- Tiltak: Krav til mattrygghet hos leverandoerer, kjoelekjede for mat, haandhygiene

**Samlet vurdering:** Arrangementet kan gjennomfoeres dersom tiltakene iverksettes. Vaerforhold er den stoerste risikoen og krever tydelig beredskapsplan.`,
    },
    {
      id: 'sik-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-2-2-ex-1',
        type: 'multiple-choice',
        task: 'Hvilke tre grunnleggende sporsmaal besvarer en risikoanalyse?',
        options: [
          { id: 'a', text: 'Hva kan gaa galt, hvor sannsynlig er det, og hva blir konsekvensene?', isCorrect: true },
          { id: 'b', text: 'Hvem er ansvarlig, hva koster det, og naar skjer det?', isCorrect: false },
          { id: 'c', text: 'Hvor er faren, hvem er truet, og hvordan stopper vi det?', isCorrect: false },
          { id: 'd', text: 'Hva er aarsaken, hva er virkningen, og hvem har skylden?', isCorrect: false },
        ],
        solution: 'Risikoanalysens tre grunnleggende sporsmaal er: Hva kan gaa galt (identifikasjon av farer)? Hvor sannsynlig er det (sannsynlighetsvurdering)? Og hva blir konsekvensene (konsekvensvurdering)? Disse sporsmaaalene danner grunnlaget for aa beregne risikonivaa.',
      },
    },
    {
      id: 'sik-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-2-2-ex-2',
        type: 'multiple-choice',
        task: 'Hva brukes ledeord til i en HAZOP-analyse?',
        options: [
          { id: 'a', text: 'Aa identifisere mulige avvik fra normal drift', isCorrect: true },
          { id: 'b', text: 'Aa beregne sannsynlighet for ulykker', isCorrect: false },
          { id: 'c', text: 'Aa rangere tiltakene etter prioritet', isCorrect: false },
          { id: 'd', text: 'Aa klassifisere hendelser etter alvorlighetsgrad', isCorrect: false },
        ],
        solution: 'I HAZOP brukes ledeord som mer, mindre, ingen, motsatt og annen enn sammen med prosessparametere for systematisk aa avdekke mulige avvik. For eksempel: Hva skjer hvis det er mer trykk enn normalt? Hva skjer hvis det er ingen flow?',
      },
    },
    {
      id: 'sik-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-2-2-ex-3',
        type: 'classic',
        task: 'Forklar hva en risikomatrise er og beskriv hvordan den brukes for aa vurdere risiko. Tegn gjerne en enkel 5x5 matrise og vis hvordan en hendelse plasseres.',
        solution: 'En risikomatrise er et verktoy med sannsynlighet langs en akse (1-5) og konsekvens langs den andre (1-5). Risikoverdien beregnes som sannsynlighet ganger konsekvens. Matrisen er fargekodet: groent (1-4, akseptabel), gult (5-12, boer vurderes) og roedt (15-25, uakseptabel). For aa bruke matrisen vurderer du foerst sannsynligheten for at hendelsen inntreffer, deretter konsekvensen. Produktet gir en plassering i matrisen som viser om tiltak er noedvendig.',
      },
    },
    {
      id: 'sik-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-2-2-ex-4',
        type: 'classic',
        task: 'Lag et forenklet bow-tie-diagram for hendelsen "brann i lagerbygg". Identifiser minst tre aarsaker med forebyggende barrierer og tre konsekvenser med konsekvensreduserende barrierer.',
        solution: 'Aarsaker (venstre side): 1) Elektrisk feil -> Barriere: jevnlig el-kontroll, jordfeilbryter. 2) Uforsiktig bruk av varmt arbeid -> Barriere: arbeidstillatelse, opplaering. 3) Paasat brann -> Barriere: adgangskontroll, vakthold, alarmsystem. Tophendelse (sentrum): Brann i lagerbygg. Konsekvenser (hoeyre side): 1) Personskade -> Barriere: sprinkler, brannvarsling, evakueringsplan. 2) Tap av lagervarer -> Barriere: brannseksjonering, forsikring, alternativt lager. 3) Forurensning -> Barriere: oppsamling av slokkevann, beredskapsplan for miljoutslipp.',
      },
    },
    {
      id: 'sik-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-2-2-ex-5',
        type: 'classic',
        task: 'Du skal gjennomfoere en risikoanalyse paa arbeidsplassen din (eller skolen). Beskriv hvordan du vil planlegge og gjennomfoere analysen steg for steg.',
        solution: 'Steg 1 - Planlegging: Definer formaal (kartlegge HMS-risiko), omfang (hele skolebygningen), velg metode (risikomatrise med befaring), sett sammen team med rektor, verneombud, vaktmester og elevrepresentant. Steg 2 - Identifikasjon: Gjennomfoer befaring, bruk sjekkliste for vanlige farer i skolebygg (brann, fall, inneklima, vold), innhent rapporter om tidligere hendelser. Steg 3 - Analyse: For hver fare vurder aarsaker og konsekvenser, noter eksisterende tiltak. Steg 4 - Vurdering: Plasser farer i risikomatrise med sannsynlighet og konsekvens. Steg 5 - Anbefalinger: Foreslaa tiltak for farer i gul og roed sone, prioriter, lag handlingsplan med ansvarlige og frister.',
      },
    },
    {
      id: 'sik-2-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-2-2-ex-6',
        type: 'classic',
        task: 'Sammenlign risikomatrise, bow-tie-analyse og HAZOP. Naar egner de ulike metodene seg best?',
        solution: 'Risikomatrise: Enkel og visuell metode som egner seg for generelle risikovurderinger i alle typer virksomheter. God for aa prioritere og kommunisere risiko. Svakhet: Forenkler og skjuler detaljer. Bow-tie-analyse: Gir god oversikt over aarsaker, barrierer og konsekvenser for enkelthendelser. Egner seg for aa analysere spesifikke scenarioer grundig og for opplaering. Svakhet: Kan bli uoversiktlig for komplekse hendelser. HAZOP: Svart systematisk og grundig metode for tekniske systemer og prosessanlegg. Brukes i olje- og gassindustrien og kjemisk industri. Krever tverrfaglig kompetanse og mye tid. Svakhet: Ressurskrevende og passer ikke for enkle analyser. Valg av metode avhenger av analysens formaal, kompleksitet og tilgjengelige ressurser.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.3: Saarbarhetsvurdering
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_2_3: TextbookChapter = {
  id: 'sikkerhetsfag-2-3',
  courseId: 'sikkerhetsfag',
  chapterNumber: '2.3',
  title: 'Saarbarhetsvurdering',
  description: 'Saarbarhetsvurdering med fokus paa kritisk infrastruktur, svakheter og scenarioanalyse.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere saarbarhet i systemer og organisasjoner',
    'analysere kritisk infrastruktur og avhengigheter',
  ],
  content: [
    {
      id: 'sik-2-3-intro',
      type: 'text',
      content: `# Saarbarhetsvurdering

En saarbarhetsvurdering kartlegger svakheter i systemer, organisasjoner eller samfunn som kan utnyttes av trusler eller forsterke konsekvensene av hendelser. Mens risikoanalysen ser paa hele risikobildet, zoomer saarbarhetsvurderingen inn paa sporsmaalet: Hvor er vi mest utsatt?

Saarbarhetsvurderinger er saerlig viktige for kritisk infrastruktur og samfunnsfunksjoner der konsekvensene av svikt kan ramme mange mennesker. Norges saarbarhetsutvalg (Saarutvalget) la i 2000 grunnlaget for systematisk saarbarhetsvurdering i Norge, og arbeidet er videfoert av Direktoratet for samfunnssikkerhet og beredskap (DSB).`,
    },
    {
      id: 'sik-2-3-def-saarbarhetsvurdering',
      type: 'definition',
      title: 'Saarbarhetsvurdering',
      content: '**Saarbarhetsvurdering** er en systematisk prosess for aa identifisere og vurdere svakheter i et system, en organisasjon eller et samfunn. Vurderingen kartlegger hva som gjor oss saarbare, hvor alvorlige saarbarhetene er, og hva som kan gjores for aa redusere dem. Saarbarhetsvurderingen ser paa baade fysiske, tekniske, organisatoriske og menneskelige svakheter.',
    },
    {
      id: 'sik-2-3-text-kritisk',
      type: 'text',
      content: `## Kritisk infrastruktur

Kritisk infrastruktur er de anleggene, systemene og tjenestene som er noedvendige for at samfunnet skal fungere. Bortfall av kritisk infrastruktur kan faa alvorlige konsekvenser for liv, helse og grunnleggende samfunnsfunksjoner.

### Kategorier av kritisk infrastruktur

**Energiforsyning:**
- Kraftproduksjon (vannkraft, vindkraft)
- Overfoeringsnettet for stroem
- Olje- og gassforsyning

**Elektronisk kommunikasjon:**
- Telenett og mobilnett
- Internett og datasentre
- Bredbaaandsinfrastruktur

**Vann og avloep:**
- Vannforsyning og vannverk
- Avloepssystem og renseanlegg

**Transport:**
- Veinett, jernbane, flyplasser, havner
- Transportstyringssystemer

**Finansielle tjenester:**
- Betalingssystemer
- Bank- og finansinfrastruktur

**Helse:**
- Sykehus og helsetjenester
- Legemiddelforsyning

### Gjensidig avhengighet

Et sentralt trekk ved kritisk infrastruktur er at sektorene er gjensidig avhengige av hverandre. Et stroembrudd rammer kommunikasjon, transport, helse og finans. En svikt i kommunikasjon vanskeliggjor beredskapsarbeid. Denne sammenkoblingen gjor moderne samfunn mer saarbare enn foer.`,
    },
    {
      id: 'sik-2-3-def-kritisk-infrastruktur',
      type: 'definition',
      title: 'Kritisk infrastruktur',
      content: '**Kritisk infrastruktur** er de anlegg og systemer som er noedvendige for aa opprettholde samfunnets grunnleggende behov og funksjoner. Bortfall eller forstyrrelse av kritisk infrastruktur kan true liv og helse, nasjonale sikkerhetsinteresser eller samfunnets funksjonalitet. I Norge definerer sikkerhetsloven 14 grunnleggende nasjonale funksjoner som maa beskyttes.',
    },
    {
      id: 'sik-2-3-text-svakheter',
      type: 'text',
      content: `## Typer svakheter

For aa gjennomfoere en saarbarhetsvurdering maa vi systematisk kartlegge svakheter. Disse deles inn i fire hovedkategorier:

### Fysiske svakheter
- Manglende fysisk sikring (gjerder, laaaser, adgangskontroll)
- Daarlig vedlikeholdt infrastruktur
- Utsatt beliggenhet (flomfare, rasutsatt)
- Manglende redundans (kun en stroemforsyning, en vei inn)

### Tekniske svakheter
- Utdatert programvare med kjente sikkerhetshuller
- Manglende kryptering av sensitiv informasjon
- Svake passordrutiner
- Manglende overvaaakingssystemer

### Organisatoriske svakheter
- Uklare ansvarsforhold og kommandolinjer
- Manglende beredskapsplaner
- Daarlig informasjonsdeling mellom avdelinger
- Ingen rutiner for opplaering og oevelser

### Menneskelige svakheter
- Manglende sikkerhetsbevissthet hos ansatte
- Utilstrekkelig opplaering
- Tretthet og stress som oeker faren for feil
- Manglende sikkerhetskultur i organisasjonen`,
    },
    {
      id: 'sik-2-3-def-scenarioanalyse',
      type: 'definition',
      title: 'Scenarioanalyse',
      content: '**Scenarioanalyse** er en metode der man utvikler detaljerte beskrivelser av tenkte hendelsesforlop (scenarioer) for aa vurdere saarbarhet og beredskap. Scenarioene beskriver hva som skjer, hvordan hendelsen utvikler seg, og hvilke konsekvenser den faar. Metoden tvinger deltakerne til aa tenke gjennom konkrete situasjoner og avdekker svakheter som ikke alltid framgaar av generelle analyser.',
    },
    {
      id: 'sik-2-3-text-scenario',
      type: 'text',
      content: `## Scenarioanalyse i praksis

Scenarioanalyse er et kraftfullt verktoy for saarbarhetsvurdering. Ved aa gjennomtenke konkrete hendelsesforlop avdekker man svakheter som ellers lett overses.

### Hvordan gjennomfoere en scenarioanalyse

1. **Velg scenario:** Identifiser relevante scenarioer basert paa risikoanalysen. Velg scenarioer som er realistiske og som tester saarbarheter.

2. **Beskriv hendelsesforloepet:** Skriv en detaljert beskrivelse av hva som skjer, steg for steg. Vaar konkret om tidspunkt, sted og omfang.

3. **Vurder respons:** Analysere hvordan organisasjonen og samfunnet vil reagere paa hendelsen. Hvem gjor hva? Fungerer kommunikasjonen? Har man ressursene som trengs?

4. **Identifiser svakheter:** Noter alle punkter der responsen svikter eller er utilstrekkelig. Dette er saarbarhetene.

5. **Foreslaa forbedringer:** Basert paa svakhetene som er avdekket, foreslaa konkrete tiltak.

### Eksempler paa scenarioer for kommuner
- Langvarig stroembrudd om vinteren
- Flom som rammer sentrale deler av kommunen
- Forurensning av drikkevannskilden
- Alvorlig smittsom sykdom
- Stor transportulykke med farlig gods`,
    },
    {
      id: 'sik-2-3-example-scenario',
      type: 'example',
      title: 'Scenarioanalyse: Langvarig stroembrudd',
      problem: 'En kommune opplever stroembrudd som varer i fem dogn paa vinteren. Beskriv scenarioet og identifiser de viktigste saarbarhetene.',
      solution: `**Scenario:** I januar rammer en kraftig storm kommunen og foerer til at stroemnettet faller ut. Paa grunn av skadens omfang tar det fem dogn foer stroemmen er tilbake overalt.

**Konsekvenser dag 1-2:**
- Oppvarming av boliger stopper (mange har kun elektrisk oppvarming)
- Mobilnettet faller ut etter noen timer naar batteribackup er oppbrukt
- Dagligvarebutikker maa stenge (kassasystemer og kjoeling)
- Vannverket maa gaa over til noeddrift

**Konsekvenser dag 3-5:**
- Frostefare i boliger truer eldre og syke
- Behov for evakuering til oppvarmede lokaler
- Matvareforsyningen bryter sammen
- Helsetjenester er sterkt redusert
- Informasjon til befolkningen er vanskelig uten mobilnett

**Identifiserte saarbarheter:**
1. For stor avhengighet av elektrisitet til oppvarming
2. Mobilnettet har for kort batteribackup
3. Kommunen mangler tilstrekkelig antall aggregater
4. Evakueringsplan for eldre og pleietrengende er mangelfull
5. Ingen plan for alternativ kommunikasjon naar mobilnettet er nede
6. Dagligvarebutikker har ikke noedstroem`,
    },
    {
      id: 'sik-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-2-3-ex-1',
        type: 'multiple-choice',
        task: 'Hvilken av foelgende er IKKE en kategori av kritisk infrastruktur?',
        options: [
          { id: 'a', text: 'Underholdningsindustrien', isCorrect: true },
          { id: 'b', text: 'Energiforsyning', isCorrect: false },
          { id: 'c', text: 'Elektronisk kommunikasjon', isCorrect: false },
          { id: 'd', text: 'Helse og omsorg', isCorrect: false },
        ],
        solution: 'Underholdningsindustrien regnes ikke som kritisk infrastruktur. Kritisk infrastruktur er systemer og tjenester som er noedvendige for at samfunnet skal fungere, som energi, kommunikasjon, vann, transport, finans og helse. Underholdning er viktig for livskvalitet, men ikke kritisk for grunnleggende samfunnsfunksjoner.',
      },
    },
    {
      id: 'sik-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-2-3-ex-2',
        type: 'multiple-choice',
        task: 'Hva er det viktigste kjennetegnet ved kritisk infrastruktur i et moderne samfunn?',
        options: [
          { id: 'a', text: 'Gjensidig avhengighet mellom sektorer', isCorrect: true },
          { id: 'b', text: 'At den eies av staten', isCorrect: false },
          { id: 'c', text: 'At den er lokalisert i byene', isCorrect: false },
          { id: 'd', text: 'At den er bygget de siste 20 aarene', isCorrect: false },
        ],
        solution: 'Det viktigste kjennetegnet er den gjensidige avhengigheten mellom sektorer. Et stroembrudd rammer kommunikasjon, transport, helse og finans. Denne sammenkoblingen gjor at svikt i en sektor kan utloese kaskadeeffekter gjennom hele samfunnet, noe som gjor moderne samfunn mer saarbare.',
      },
    },
    {
      id: 'sik-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-2-3-ex-3',
        type: 'classic',
        task: 'Forklar de fire hovedkategoriene av svakheter (fysiske, tekniske, organisatoriske og menneskelige). Gi to eksempler for hver kategori.',
        solution: 'Fysiske svakheter: Manglende gjerder og adgangskontroll, bygning i flomutsatt omraade. Tekniske svakheter: Utdatert programvare med kjente sikkerhetshull, manglende kryptering av data. Organisatoriske svakheter: Uklare ansvarsforhold i en krise, ingen beredskapsplan for stroembrudd. Menneskelige svakheter: Ansatte som klikker paa phishing-lenker, manglende opplaering i noedprosedyrer.',
      },
    },
    {
      id: 'sik-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-2-3-ex-4',
        type: 'classic',
        task: 'Velg en type kritisk infrastruktur og gjennomfoer en forenklet saarbarhetsvurdering. Identifiser minst fire svakheter og foreslaa tiltak for aa redusere saarbarheten.',
        solution: 'Eksempel: Vannforsyning til en mellomstor kommune. Svakheter: 1) Kun en vannkilde (innsjoe) - dersom den forurenses, har kommunen ingen reserve. Tiltak: Etabler alternativ vannkilde eller noedvannsforsyning. 2) Vannverket har ikke noedstroem - ved stroembrudd stopper pumper og rensing. Tiltak: Installer noedaggregat med diesel for minimum 72 timers drift. 3) Ledningsnettet er gammelt med mange lekkasjer - saarbart for forurensning. Tiltak: Prioriter utskifting av de eldste og mest saarbare strekningene. 4) Ingen digital overvaakning av vannkvalitet - forurensning oppdages for sent. Tiltak: Installer sensorer for kontinuerlig maaaling av vannkvalitet med automatisk varsling.',
      },
    },
    {
      id: 'sik-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-2-3-ex-5',
        type: 'classic',
        task: 'Gjennomfoer en forenklet scenarioanalyse for foelgende hendelse: Kommunens drikkevannskilde blir forurenset med E. coli-bakterier. Beskriv hendelsesforloepet, identifiser saarbarheter og foreslaa tiltak.',
        solution: 'Hendelsesforlop: Dag 1: Flere innbyggere blir syke med diaresymptomer. Legevakt melder fra om uvanlig mange tilfeller. Dag 2: Vannproever viser E. coli over grenseverdiene. Kommunen sender ut kokevarsel. Dag 3-7: Kokevarsel opprettholdes mens kilden undersookes og desinfiseres. Berort befolkning: 15 000 innbyggere. Saarbarheter: 1) For sjelden proevetaking av vannet. 2) Manglende UV-desinfeksjon som ekstra barriere. 3) Treg varsling av befolkningen (tok 24 timer). 4) Ingen alternativ vannkilde. 5) Drikkevannskilden er ikke sikret mot avrenning fra landbruk. Tiltak: Daglig proevetaking, installere UV-anlegg, automatisk varslingssystem via SMS, inngaa avtale med nabokommune om noedvann, sikringssone rundt vannkilden.',
      },
    },
    {
      id: 'sik-2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-2-3-ex-6',
        type: 'classic',
        task: 'Forklar hva gjensidig avhengighet mellom kritiske infrastrukturer innebarer. Bruk stroembrudd som eksempel og beskriv kaskadeeffektene gjennom minst tre andre sektorer.',
        solution: 'Gjensidig avhengighet betyr at kritiske infrastrukturer er saa tett sammenkoblet at svikt i en sektor utloeser svikt i andre sektorer. Eksempel ved stroembrudd: 1) Elektronisk kommunikasjon: Mobilmaster har kun noen timers batteribackup, deretter faller mobilnettet ut. Internett og bredbaaand stopper. Folk kan ikke ringe 113 eller varsle om noedsituasjoner. 2) Helse: Sykehus gaar paa noedstroem med begrenset kapasitet. Hjemmebaserte helsetjenester som avhenger av elektronisk medisinering og varsling svikter. Kjoelekjeden for medisiner brytes. 3) Transport: Trafikklys slukker og skaper kaos. Bensinstasjoner kan ikke pumpe drivstoff. Togtrafikk stanser. 4) Finans: Betalingsterminaler fungerer ikke, folk kan ikke handle. Bankautomater er ute av drift. Denne kaskadeeffekten viser at et stroembrudd raskt kan foere til en alvorlig samfunnskrise.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.4: Tiltak og barrierer
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_2_4: TextbookChapter = {
  id: 'sikkerhetsfag-2-4',
  courseId: 'sikkerhetsfag',
  chapterNumber: '2.4',
  title: 'Tiltak og barrierer',
  description: 'Forebyggende og konsekvensreduserende tiltak, barrieretenkning og kost-nytte-vurdering.',
  estimatedMinutes: 20,
  competenceGoals: [
    'foreslaa og vurdere risikoreduserende tiltak',
    'anvende barrieretenkning i sikkerhetsarbeid',
  ],
  content: [
    {
      id: 'sik-2-4-intro',
      type: 'text',
      content: `# Tiltak og barrierer

Naar risikoanalysen viser at risikoen er for hoey, maa det iverksettes tiltak for aa redusere den. Tiltak kan enten redusere sannsynligheten for at en hendelse inntreffer (forebyggende tiltak) eller redusere konsekvensene dersom hendelsen faktisk skjer (konsekvensreduserende tiltak). I tillegg bruker vi begrepet barrierer om fysiske eller organisatoriske systemer som forhindrer uoenskede hendelser.

God sikkerhet handler om aa ha flere lag med tiltak og barrierer, slik at svikt i en barriere ikke automatisk foerer til en ulykke. Dette kalles forsvar i dybden.`,
    },
    {
      id: 'sik-2-4-def-forebyggende',
      type: 'definition',
      title: 'Forebyggende tiltak',
      content: '**Forebyggende tiltak** er tiltak som reduserer sannsynligheten for at en uonsket hendelse inntreffer. Eksempler er adgangskontroll, opplaering, vedlikehold, brannforebygging, vaksinering og sikkerhetsprosedyrer. Forebyggende tiltak er ofte mest kostnadseffektive fordi de forhindrer at hendelsen skjer i det hele tatt.',
    },
    {
      id: 'sik-2-4-text-forebyggende',
      type: 'text',
      content: `## Forebyggende tiltak i praksis

Forebyggende tiltak retter seg mot aarsakene til uoenskede hendelser og skal redusere sannsynligheten for at de inntreffer.

### Kategorier av forebyggende tiltak

**Fysiske tiltak:**
- Gjerder, murer og barrierer
- Laaaser, adgangskontroll og kameraovervaaking
- Brannsikring av bygninger
- Vedlikehold av utstyr og infrastruktur

**Tekniske tiltak:**
- Brannvarsling og automatiske slokkesystemer
- Innbruddsalarm og deteksjonssystemer
- IT-sikkerhet: brannmur, antivirus, kryptering
- Overvaaakingssystemer for prosessanlegg

**Organisatoriske tiltak:**
- Sikkerhetsprosedyrer og retningslinjer
- Opplaering og kompetansebygging
- Bakgrunnssjekk av ansatte
- Tilsyns- og kontrollordninger

**Holdningsskapende tiltak:**
- Sikkerhetskulturarbeid
- Kampanjer og informasjon
- Lederforankring av sikkerhetsarbeid
- Varsling og rapporteringskultur`,
    },
    {
      id: 'sik-2-4-def-konsekvensreduserende',
      type: 'definition',
      title: 'Konsekvensreduserende tiltak',
      content: '**Konsekvensreduserende tiltak** er tiltak som begrenser skadene naar en uonsket hendelse har inntruffet. Eksempler er beredskapsplaner, evakueringsrutiner, foerstehjelp, sprinkleranlegg, forsikring og reserveloesninger. Disse tiltakene aksepterer at hendelsen kan skje, men soerger for at konsekvensene blir saa smaa som mulig.',
    },
    {
      id: 'sik-2-4-text-konsekvensreduserende',
      type: 'text',
      content: `## Konsekvensreduserende tiltak

Selv med gode forebyggende tiltak kan uoenskede hendelser inntreffe. Da er det avgjoerende aa ha tiltak som begrenser konsekvensene.

### Eksempler paa konsekvensreduserende tiltak

**Under hendelsen:**
- Sprinkleranlegg som slokker brannen tidlig
- Evakueringsplan som sikrer at alle kommer seg ut
- Noedlys og skilting som viser vei
- Foerstehjelp fra opplaert personell
- Noedaggregat som opprettholder kritiske funksjoner

**Etter hendelsen:**
- Beredskapsplan som sikrer koordinert respons
- Krisekommunikasjon til beroorte og medier
- Backup-systemer for IT og data
- Forsikringsordninger som dekker oekonomisk tap
- Gjenopprettingsplaner for aa komme tilbake til normal drift

### Sammenhengen mellom forebyggende og konsekvensreduserende tiltak

De to typene tiltak utfyller hverandre. Et sykehus forebygger brann gjennom godt vedlikehold og forbud mot roeyking (forebyggende), men har ogsaa sprinkleranlegg, evakueringsplaner og oevd personale (konsekvensreduserende). Begge deler er noedvendig for god sikkerhet.`,
    },
    {
      id: 'sik-2-4-def-barriere',
      type: 'definition',
      title: 'Barriere',
      content: '**Barriere** er et teknisk, operasjonelt eller organisatorisk tiltak som enkeltvis eller samlet reduserer muligheten for at uoenskede hendelser oppstaar, eller begrenser konsekvensene av dem. Barrierer kan vaere fysiske (branndor, vernerekkverk), tekniske (sikkerhetsventil, noedbrems), operasjonelle (prosedyrer, sjekklister) eller organisatoriske (tilsyn, godkjenningsordninger). En barriere skal vaere paalitelig, robust og verifiserbar.',
    },
    {
      id: 'sik-2-4-text-barrieretenkning',
      type: 'text',
      content: `## Barrieretenkning og sveitserostmodellen

Barrieretenkning er et sentralt prinsipp i sikkerhetsarbeid. Ideen er at man skal ha flere uavhengige barrierer mellom en fare og en mulig ulykke.

### Sveitserostmodellen (James Reason)

Denne modellen sammenligner barrierer med skiver av sveitserost. Hver barriere har hull (svakheter), men hullene sitter paa forskjellige steder i de ulike skivene. En ulykke skjer foerst naar hullene i alle skivene staar paa linje, slik at trusselen passerer gjennom alle barrierene.

**Laerdommen:** Ingen enkeltbarriere er perfekt. Sikkerhet oppnaas ved aa ha flere lag med barrierer som dekker hverandres svakheter.

### Forsvar i dybden

Prinsippet om forsvar i dybden innebarer at man bygger opp flere lag med barrierer:

1. **Foerste lag:** Forebygge at faren oppstaar
2. **Andre lag:** Oppdage faren hvis den oppstaar
3. **Tredje lag:** Forhindre at faren utvikler seg til en hendelse
4. **Fjerde lag:** Begrense konsekvensene av hendelsen
5. **Femte lag:** Gjenopprette normal drift

**Eksempel for dataangrep:**
1. Opplaering av ansatte (forebygge at noen klikker paa phishing)
2. Antivirusprogram (oppdage ondsinnet kode)
3. Brannmur (stoppe angrepet)
4. Segmentering av nettverket (begrense spredning)
5. Backup og gjenopprettingsplan (komme tilbake til normal drift)`,
    },
    {
      id: 'sik-2-4-text-kostnytte',
      type: 'text',
      content: `## Kost-nytte-vurdering av tiltak

Alle tiltak koster penger, tid og ressurser. Derfor maa man vurdere om nytten av tiltaket staar i forhold til kostnaden. En kost-nytte-vurdering hjelper beslutningstakere med aa prioritere tiltak.

### Faktorer i en kost-nytte-vurdering

**Kostnader:**
- Investeringskostnad (innkjoep, installasjon)
- Driftskostnad (vedlikehold, bemanning, energi)
- Indirekte kostnader (forsinkelser, redusert effektivitet)
- Opplaeringskostnader

**Nytte (risikoreduksjon):**
- Redusert sannsynlighet for hendelsen
- Reduserte konsekvenser hvis hendelsen inntreffer
- Spart liv og helse (vanskelig aa verdsette i kroner)
- Unngaatt materielle tap
- Bevart omdoemme og tillit

### ALARP-prinsippet

Mange virksomheter bruker **ALARP-prinsippet** (As Low As Reasonably Practicable). Det betyr at risikoen skal reduseres saa langt det er praktisk mulig, med mindre kostnadene er aapentbart uforholdsmessige i forhold til risikoreduksjonen.

**Tre soner:**
- **Uakseptabel sone:** Risikoen maa reduseres uansett kostnad
- **ALARP-sonen:** Risikoen reduseres saa langt det er praktisk mulig
- **Akseptabel sone:** Tiltak er ikke noedvendig, men kan vurderes`,
    },
    {
      id: 'sik-2-4-example-tiltak',
      type: 'example',
      title: 'Kost-nytte-vurdering av sprinkleranlegg',
      problem: 'Et lagerbygg paa 2000 m2 vurderer aa installere sprinkleranlegg. Lageret inneholder varer til en verdi av 15 millioner kroner. Gjennomfoer en forenklet kost-nytte-vurdering.',
      solution: `**Kostnad for sprinkleranlegg:**
- Installasjon: ca. 600 000 kr
- Aarlig vedlikehold: ca. 30 000 kr
- Levetid: 30 aar
- Total kostnad over levetiden: ca. 1,5 millioner kr

**Nytte:**
- Verdien av lagervarene: 15 millioner kr
- Sannsynlighet for brann uten sprinkler (30 aar): ca. 5 %
- Forventet tap uten sprinkler: 15 mill x 5 % = 750 000 kr
- Sprinkler reduserer skadens omfang med ca. 80 %
- Forventet tap med sprinkler: 150 000 kr
- Besparelse: ca. 600 000 kr i redusert forventet tap

**I tillegg:**
- Lavere forsikringspremie (typisk 20-30 % reduksjon)
- Beskyttelse av liv og helse for ansatte
- Unngaar driftsstans og tapt omsetning
- Omdoemmebeskyttelse

**Konklusjon:** Selv uten aa ta hensyn til forsikringsbesparelse og indirekte kostnader, er sprinkleranlegget nesten selvfinansierende. Med forsikringsbesparelse og sikring av menneskeliv er tiltaket klart loensomt. I henhold til ALARP-prinsippet boer anlegget installeres.`,
    },
    {
      id: 'sik-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-2-4-ex-1',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom forebyggende og konsekvensreduserende tiltak?',
        options: [
          { id: 'a', text: 'Forebyggende tiltak reduserer sannsynligheten, konsekvensreduserende tiltak begrenser skadene', isCorrect: true },
          { id: 'b', text: 'Forebyggende tiltak er billigere enn konsekvensreduserende tiltak', isCorrect: false },
          { id: 'c', text: 'Forebyggende tiltak er fysiske, konsekvensreduserende er organisatoriske', isCorrect: false },
          { id: 'd', text: 'Forebyggende tiltak brukes foer en hendelse, konsekvensreduserende etter hendelsen er over', isCorrect: false },
        ],
        solution: 'Forebyggende tiltak reduserer sannsynligheten for at en uoensket hendelse inntreffer, for eksempel vedlikehold og opplaering. Konsekvensreduserende tiltak begrenser skadene dersom hendelsen faktisk inntreffer, for eksempel sprinkler og evakueringsplaner. Begge typer er noedvendige for god sikkerhet.',
      },
    },
    {
      id: 'sik-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-2-4-ex-2',
        type: 'multiple-choice',
        task: 'Hva beskriver sveitserostmodellen?',
        options: [
          { id: 'a', text: 'At ulykker skjer naar hull i flere barrierer staar paa linje', isCorrect: true },
          { id: 'b', text: 'At en enkelt barriere er nok til aa forhindre ulykker', isCorrect: false },
          { id: 'c', text: 'At alle barrierer har like stor effekt', isCorrect: false },
          { id: 'd', text: 'At fysiske barrierer er viktigere enn organisatoriske', isCorrect: false },
        ],
        solution: 'Sveitserostmodellen (James Reason) sammenligner barrierer med osteskiver som har hull. Hver barriere har svakheter (hull), men hullene sitter normalt paa ulike steder. En ulykke skjer foerst naar hullene i alle skivene tilfeldigvis staar paa linje, slik at trusselen slipper gjennom alle lag. Modellen viser hvorfor man trenger flere uavhengige barrierer.',
      },
    },
    {
      id: 'sik-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-2-4-ex-3',
        type: 'classic',
        task: 'Beskriv prinsippet om forsvar i dybden. Bruk brann i et kontorbygg som eksempel og beskriv minst fem lag med barrierer.',
        solution: 'Forsvar i dybden betyr aa ha flere lag med barrierer. For brann i kontorbygg: 1) Forebygging: Brannsikkert materialevalg, forbud mot levende lys, el-kontroll. 2) Deteksjon: Roeykvarslere og brannalarmsystem som oppdager brannen tidlig. 3) Forhindre utvikling: Branndoerer og seksjoneringsvegger som hindrer spredning. 4) Begrense konsekvens: Sprinkleranlegg slokker eller begrenser brannen, evakueringsplan sikrer at folk kommer seg ut, noedutganger med noedlys. 5) Gjenoppretting: Beredskapsplan for alternativt arbeidssted, forsikring som dekker skader, plan for gjenoppbygging og drift.',
      },
    },
    {
      id: 'sik-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-2-4-ex-4',
        type: 'classic',
        task: 'Forklar ALARP-prinsippet og beskriv de tre sonene. Gi et eksempel paa en situasjon der ALARP-prinsippet brukes i praksis.',
        solution: 'ALARP (As Low As Reasonably Practicable) betyr at risikoen skal reduseres saa langt det er praktisk mulig. De tre sonene er: 1) Uakseptabel sone: Risikoen er saa hoey at den maa reduseres uavhengig av kostnad, for eksempel alvorlig fare for tap av menneskeliv. 2) ALARP-sonen: Risikoen er mellom akseptabel og uakseptabel. Her skal risikoen reduseres med mindre kostnadene er aapentbart uforholdsmessige. 3) Akseptabel sone: Risikoen er saa lav at ytterligere tiltak normalt ikke er noedvendig. Eksempel: En oljeplattform vurderer aa installere et ekstra sikkerhetssystem til 50 millioner kroner som reduserer risikoen for gasslekkasje. Selv om kostnaden er hoey, er risikoen for tap av menneskeliv saa alvorlig at ALARP-prinsippet tilsier at tiltaket skal gjennomfoeres.',
      },
    },
    {
      id: 'sik-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-2-4-ex-5',
        type: 'classic',
        task: 'En bedrift vurderer to sikkerhetstiltak: (A) Adgangskontroll med kortleser til 200 000 kr, og (B) Vaktselskap paa natt til 500 000 kr per aar. Gjennomfoer en forenklet kost-nytte-vurdering og anbefal ett eller begge tiltak.',
        solution: 'Tiltak A - Adgangskontroll: Kostnad: 200 000 kr engangsinvestering pluss ca. 10 000 kr aarlig vedlikehold. Effekt: Hindrer uautorisert tilgang paa dagtid, logger hvem som gaar inn og ut, forebyggende effekt 24/7. Over 10 aar: ca. 300 000 kr totalt. Tiltak B - Vaktselskap: Kostnad: 500 000 kr per aar. Over 10 aar: 5 millioner kr. Effekt: Aktiv overvaakning paa natt, rask respons ved hendelser, avskrekkende effekt. Anbefaling: Adgangskontroll boer innfoeres foerst fordi den gir god sikkerhetseffekt til lav kostnad. Vaktselskap boer vurderes basert paa trusselbildet - dersom bedriften har verdier som krever aktiv beskyttelse paa natt (for eksempel medisiner, vaapen, verdifulle raavarer) kan vaktselskap vaere noedvendig. For de fleste bedrifter vil adgangskontroll kombinert med alarmsystem vaere tilstrekkelig.',
      },
    },
    {
      id: 'sik-2-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-2-4-ex-6',
        type: 'classic',
        task: 'Velg en arbeidsplass du kjenner til (for eksempel skolen) og identifiser tre forebyggende og tre konsekvensreduserende tiltak som er paa plass. Vurder om tiltakene er tilstrekkelige.',
        solution: 'Eksempel - en videregaaende skole. Forebyggende tiltak: 1) Adgangskontroll med laas paa alle doerer - godt tiltak, men noen doerer staar aapne paa dagtid. 2) Brannforebyggende rutiner med forbud mot levende lys og aarlig el-kontroll - viktig og godt innarbeidet. 3) Antimobbeprogram for aa forebygge vold og trusler - viktig organisatorisk tiltak, men krever kontinuerlig oppfoelging. Konsekvensreduserende tiltak: 1) Brannvarslingsanlegg med roeykvarlsere i alle rom - gir tidlig varsling slik at evakuering kan starte raskt. 2) Evakueringsplan med oevelser to ganger aarlig - bra, men oevelsene boer variere i scenario. 3) Foerstehjelpsskap og opplaert personale - godt tiltak, men flere ansatte boer faa oppdatert kurs. Vurdering: Tiltakene gir et rimelig sikkerhetsnivaa, men kan forbedres med bedre adgangskontroll, flere brannoesvelser og bredere foerstehjelpskompetanse.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2.5: Risikostyring
// ============================================================================

export const CHAPTER_SIKKERHETSFAG_2_5: TextbookChapter = {
  id: 'sikkerhetsfag-2-5',
  courseId: 'sikkerhetsfag',
  chapterNumber: '2.5',
  title: 'Risikostyring',
  description: 'Risikostyring med fokus paa risikoeier, akseptkriterier og kontinuerlig forbedring.',
  estimatedMinutes: 20,
  competenceGoals: [
    'beskrive og anvende prinsipper for risikostyring',
    'forstaa rollen til risikoeier og akseptkriterier',
  ],
  content: [
    {
      id: 'sik-2-5-intro',
      type: 'text',
      content: `# Risikostyring

Risikostyring er den overordnede prosessen som kobler risikoanalysen til beslutninger og handling. Mens risikoanalysen kartlegger og vurderer risiko, handler risikostyring om aa ta beslutninger om hvilke tiltak som skal iverksettes, hvem som har ansvar, og hvordan man sikrer kontinuerlig forbedring.

God risikostyring er en ledelsesoppgave. Det er ledelsen som fastsetter akseptkriterier for risiko, bevilger ressurser til tiltak og er ansvarlig for at risikoen holdes paa et akseptabelt nivaa. I Norge stiller flere lover krav om risikostyring, blant annet arbeidsmiljoeloven, sikkerhetsloven og brann- og eksplosjonsvernloven.`,
    },
    {
      id: 'sik-2-5-def-risikostyring',
      type: 'definition',
      title: 'Risikostyring',
      content: '**Risikostyring** er alle koordinerte aktiviteter for aa lede og kontrollere en organisasjon med hensyn til risiko. Risikostyring omfatter fastsettelse av rammeverk, risikovurdering (identifikasjon, analyse og evaluering), risikohaaandtering (valg og iverksetting av tiltak), overvaaking og gjennomgang. Maalsetningen er aa sikre at risikoen holdes paa et nivaa som er akseptabelt for organisasjonen og samfunnet.',
    },
    {
      id: 'sik-2-5-text-prosess',
      type: 'text',
      content: `## Risikostyringsprosessen

Risikostyring er en syklisk prosess som aldri avsluttes. Den foelger gjerne ISO 31000-standarden:

### 1. Etabler rammeverk
- Definer organisasjonens kontekst (interne og eksterne forhold)
- Fastsett risikostyringspoltiikk og -prinsipper
- Tildel roller og ansvar
- Bestem akseptkriterier

### 2. Risikovurdering
- Identifiser risiko (hva kan skje?)
- Analyser risiko (sannsynlighet og konsekvens)
- Evaluer risiko (er nivaaet akseptabelt?)

### 3. Risikohaaandtering
- Velg tiltak: unngaa, redusere, overfoere eller akseptere risiko
- Iverksett tiltak
- Dokumenter beslutninger

### 4. Overvaaking og gjennomgang
- Overvaak at tiltakene virker
- Foelg opp avvik og hendelser
- Gjennomfoer jevnlige revisjoner
- Oppdater risikovurderingen ved endringer

### 5. Kommunikasjon og konsultasjon
- Del informasjon med beroorte parter
- Soek innspill fra ansatte og eksperter
- Rapporter til ledelsen`,
    },
    {
      id: 'sik-2-5-def-risikoeier',
      type: 'definition',
      title: 'Risikoeier',
      content: '**Risikoeier** er den personen eller enheten som har myndighet og ansvar for aa haandtere en bestemt risiko. Risikoeieren er ansvarlig for aa soorge for at risikoen vurderes, at noedvendige tiltak iverksettes, og at risikoen overvaakes. I praksis er risikoeieren ofte en leder som har ansvar for det omraadet der risikoen oppstaar, for eksempel IT-sjefen for cyberrisiko eller driftssjefen for operasjonell risiko.',
    },
    {
      id: 'sik-2-5-text-risikoeier',
      type: 'text',
      content: `## Rollen som risikoeier

Risikoeierskap er et noekkelprinsipp i moderne risikostyring. Uten en tydelig risikoeier er det fare for at risiko faller mellom stoler og ingen tar ansvar.

### Risikoeierens oppgaver
- Sikre at risikoen er identifisert og analysert
- Vurdere om risikoen er akseptabel
- Beslutte og iverksette risikoreduserende tiltak
- Folge opp at tiltak gjennomfoeres og virker
- Rapportere risikostatus til overordnet ledelse
- Eskalere risiko som ikke kan haandteres paa eget nivaa

### Risikoeierskap i praksis

**Eksempel - en kommune:**
- Kommunedirektoren er overordnet risikoeier for kommunens samlede risikobilde
- Helse- og omsorgssjefen er risikoeier for risiko innen helsetjenestene
- IT-sjefen er risikoeier for digital sikkerhet
- Teknisk sjef er risikoeier for infrastrukturrisiko
- Rektor er risikoeier for risiko paa den enkelte skole

Risikoeierskap maa foelge linjeorganisasjonen. Den som har myndighet til aa ta beslutninger og bruke ressurser, maa ogsaa ha ansvar for risikoen i sitt omraade.`,
    },
    {
      id: 'sik-2-5-def-akseptkriterier',
      type: 'definition',
      title: 'Akseptkriterier',
      content: '**Akseptkriterier** er forhaaandsdefinerte kriterier som angir hvilke risikoer organisasjonen er villig til aa akseptere. Akseptkriteriene fastsettes av ledelsen og tar hensyn til lover og regler, organisasjonens verdier, oekonomiske rammer og interessentenes forventninger. Akseptkriteriene danner grunnlaget for aa vurdere om identifiserte risikoer krever tiltak.',
    },
    {
      id: 'sik-2-5-text-akseptkriterier',
      type: 'text',
      content: `## Akseptkriterier i praksis

Akseptkriterier gir svar paa sporsmaalet: Hvor stor risiko er vi villige til aa leve med? Uten tydelige akseptkriterier blir det vilkaarlig hva som regnes som akseptabel risiko.

### Eksempler paa akseptkriterier

**For liv og helse:**
- Ingen uakseptabel risiko for tap av menneskeliv
- Maksimalt 5 arbeidsulykker med fravaar per aar
- Ingen hendelser som gir varig helseskade

**For miljo:**
- Ingen utslipp over fastsatte grenseverdier
- Ingen varig skade paa lokalt miljo

**For okonomi:**
- Maksimalt oekonomisk tap paa 2 % av aarlig omsetning
- Ingen enkelthendelse med tap over 5 millioner kroner

**For omdoemme:**
- Ingen hendelser som foerer til tap av tillit hos kunder eller offentligheten

### Forholdet mellom akseptkriterier og risikomatrisen

Akseptkriteriene gjenspeiles i risikomatrisens fargesoner:
- **Groent:** Under akseptkriteriene - risikoen er akseptabel
- **Gult:** I graensesonen - tiltak boer vurderes
- **Roedt:** Over akseptkriteriene - risikoen er uakseptabel og maa reduseres`,
    },
    {
      id: 'sik-2-5-text-forbedring',
      type: 'text',
      content: `## Kontinuerlig forbedring

Risikostyring er ikke noe man gjor en gang og saa er ferdig. Trusselbildet endrer seg, ny teknologi innfoeres, organisasjonen utvikler seg, og tidligere ukjente risikoer dukker opp. Derfor maa risikostyringen vaere en kontinuerlig prosess.

### PDCA-syklusen (Plan-Do-Check-Act)

Kontinuerlig forbedring foelger ofte PDCA-syklusen:

**Plan (Planlegg):**
- Identifiser forbedringsmuligheter
- Sett maal for forbedring
- Lag handlingsplan

**Do (Gjennomfoer):**
- Iverksett planlagte tiltak
- Gjennomfoer opplaering
- Dokumenter hva som gjores

**Check (Kontroller):**
- Maal effekten av tiltakene
- Sammenlign med maal
- Identifiser avvik

**Act (Korriger):**
- Iverksett korrigerende tiltak ved avvik
- Oppdater rutiner og prosedyrer
- Del erfaringer i organisasjonen

### Verktoy for kontinuerlig forbedring

**Hendelsesrapportering:** Alle uoenskede hendelser og naestenhendelser rapporteres og analyseres. Naestenhendelser er saerlig verdifulle fordi de avdekker svakheter foer en ulykke skjer.

**Internrevisjon:** Systematisk gjennomgang av risikostyringssystemet for aa verifisere at det fungerer som tiltenkt.

**Ledelsens gjennomgang:** Ledelsen gjennomgaar risikostyringssystemet minst aarlig for aa sikre at det er hensiktsmessig og effektivt.

**Benchmarking:** Sammenlign egen praksis med bransjestandard og beste praksis fra andre organisasjoner.`,
    },
    {
      id: 'sik-2-5-example-styring',
      type: 'example',
      title: 'Risikostyring i en virksomhet',
      problem: 'En produksjonsbedrift med 150 ansatte skal etablere et risikostyringssystem. Beskriv hvordan bedriften boer organisere risikostyringen.',
      solution: `**Rammeverk:**
- Styret fastsetter overordnet risikopolitikk og akseptkriterier
- Daglig leder er overordnet risikoeier
- Avdelingsledere er risikoeiere for sine omraader
- HMS-leder koordinerer og fasiliteterer risikostyringsarbeidet

**Aarlig syklus:**
- Januar: Ledelsens gjennomgang av forrige aars risikobilde
- Februar: Oppdatering av risikovurdering med alle avdelinger
- Mars: Handlingsplan for risikoreduserende tiltak vedtas
- Kvartalsvise oppfoelgingsmoeter der status paa tiltak gjennomgaas
- Lopende hendelsesrapportering og oppfoelging hele aaret
- Oktober: Internrevisjon av risikostyringssystemet
- November: Beredskapsovelse

**Dokumentasjon:**
- Risikostyringshaandbok med policy og prosedyrer
- Risikoregister med alle identifiserte risikoer
- Handlingsplan med tiltak, ansvarlige og frister
- Hendelseslogg med oppfoelging
- Rapporter fra revisjoner og oevelser

**Kontinuerlig forbedring:**
- Naestenhendelser rapporteres og analyseres maanedlig
- Alle alvorlige hendelser graanskes og laerdommene deles
- Risikobildet oppdateres ved vesentlige endringer
- Akseptkriteriene gjennomgaas aarlig av styret`,
    },
    {
      id: 'sik-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sik-2-5-ex-1',
        type: 'multiple-choice',
        task: 'Hva er risikoeierens viktigste ansvar?',
        options: [
          { id: 'a', text: 'Aa sikre at risikoen er vurdert og at noedvendige tiltak iverksettes', isCorrect: true },
          { id: 'b', text: 'Aa gjennomfoere risikoanalyser personlig', isCorrect: false },
          { id: 'c', text: 'Aa forsikre virksomheten mot alle risikoer', isCorrect: false },
          { id: 'd', text: 'Aa eliminere all risiko i organisasjonen', isCorrect: false },
        ],
        solution: 'Risikoeierens viktigste ansvar er aa sikre at risikoen er identifisert, analysert og vurdert, og at noedvendige tiltak iverksettes og foelges opp. Risikoeieren trenger ikke gjennomfoere analysene selv, men maa soerge for at de gjennomfoeres og at resultatene foelges opp med konkrete tiltak.',
      },
    },
    {
      id: 'sik-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sik-2-5-ex-2',
        type: 'multiple-choice',
        task: 'Hva staar PDCA for i forbindelse med kontinuerlig forbedring?',
        options: [
          { id: 'a', text: 'Plan, Do, Check, Act', isCorrect: true },
          { id: 'b', text: 'Prevent, Detect, Control, Adapt', isCorrect: false },
          { id: 'c', text: 'Plan, Develop, Certify, Audit', isCorrect: false },
          { id: 'd', text: 'Protect, Defend, Counter, Assess', isCorrect: false },
        ],
        solution: 'PDCA staar for Plan (planlegg), Do (gjennomfoer), Check (kontroller) og Act (korriger). Det er en syklisk modell for kontinuerlig forbedring som sikrer at man systematisk planlegger, gjennomfoerer, evaluerer og korrigerer arbeidet. Syklusen gjentas stadig for aa oppnaa stadig bedre resultater.',
      },
    },
    {
      id: 'sik-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sik-2-5-ex-3',
        type: 'classic',
        task: 'Forklar hva akseptkriterier er og hvorfor de er viktige i risikostyring. Gi eksempler paa akseptkriterier for en industrivirksomhet.',
        solution: 'Akseptkriterier er forhaaandsdefinerte kriterier som angir hvor stor risiko organisasjonen er villig til aa akseptere. De er viktige fordi de gir et objektivt grunnlag for aa vurdere om risikoen er akseptabel eller om tiltak maa iverksettes. Uten akseptkriterier blir risikovurderingen subjektiv og vilkaarlig. Eksempler for industrivirksomhet: Liv og helse: Ingen dodsulykker, maks 3 alvorlige personskader per aar. Miljo: Ingen utslipp over grenseverdier, null varig miljoskade. Okonomi: Maks tap paa 1 million kr per hendelse. Driftsstans: Maks 24 timers ufrivillig stans per aar. Omdoemme: Ingen hendelser som foerer til medieoppmerksomet.',
      },
    },
    {
      id: 'sik-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sik-2-5-ex-4',
        type: 'classic',
        task: 'Beskriv risikostyringsprosessen steg for steg basert paa ISO 31000. Forklar hva som skjer i hver fase.',
        solution: 'Risikostyringsprosessen etter ISO 31000 har fem hovedfaser: 1) Etabler rammeverk: Definer kontekst, fastsett politikk, tildel roller og ansvar, bestem akseptkriterier. 2) Risikovurdering: Identifiser risiko (hva kan skje?), analyser risiko (sannsynlighet og konsekvens), evaluer risiko (sammenlign med akseptkriterier). 3) Risikohaaandtering: Velg strategi (unngaa, redusere, overfoere eller akseptere), iverksett tiltak, dokumenter beslutninger. 4) Overvaaking og gjennomgang: Overvaak at tiltak virker, foelg opp hendelser og avvik, gjennomfoer revisjoner, oppdater vurderinger ved endringer. 5) Kommunikasjon og konsultasjon: Del informasjon med beroorte parter, innhent innspill fra ansatte og eksperter, rapporter til ledelsen. Prosessen er syklisk og gjentas kontinuerlig.',
      },
    },
    {
      id: 'sik-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sik-2-5-ex-5',
        type: 'classic',
        task: 'Forklar hvorfor naestenhendelser er saerlig verdifulle i risikostyring. Gi eksempler paa hva en naestenhendelse er og hvordan den boer foelges opp.',
        solution: 'Naestenhendelser er hendelser som kunne ha ført til skade, men der skaden ble unngaatt, enten ved tilfeldigheter eller takket vaere barrierer. De er saerlig verdifulle fordi: 1) De avdekker svakheter foer en alvorlig ulykke skjer. 2) Det er langt flere naestenhendelser enn ulykker, saa de gir et bredere datagrunnlag. 3) De er enklere aa undersoke fordi ingen er skadet. Eksempler: En ansatt sklir paa vaat gulv men tar seg for (naesten-fall), en bil bremser i siste oeyeblikk for en fotgjenger (naesten-paakjoersel), en brannalarm gaar uten at det er brann men avdekker at roemmingsveien er blokkert. Oppfoelging: Registrer hendelsen i avvikssystem, analyser aarsaker, vurder om barrierer fungerte, iverksett tiltak for aa hindre gjentakelse, del laeerdommer med ansatte.',
      },
    },
    {
      id: 'sik-2-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sik-2-5-ex-6',
        type: 'classic',
        task: 'Diskuter de fire strategiene for risikohaaandtering: unngaa, redusere, overfoere og akseptere. Naar er det hensiktsmessig aa bruke hver strategi? Gi eksempler.',
        solution: 'De fire strategiene: 1) Unngaa risiko: Fjern aktiviteten eller kilden til risiko helt. Brukes naar risikoen er for hoey og ikke kan reduseres tilstrekkelig. Eksempel: Slutte aa produsere et farlig kjemikalie. 2) Redusere risiko: Iverksett tiltak for aa senke sannsynlighet eller konsekvens. Vanligste strategien. Eksempel: Installere sprinkler for aa redusere brannrisiko. 3) Overfoere risiko: Flytt den oekonomiske konsekvensen til en annen part. Brukes for risikoer der oekonomisk tap er hovedbekymringen. Eksempel: Tegne forsikring, bruke underleverandor med ansvar. 4) Akseptere risiko: Lev med risikoen uten tiltak. Brukes naar risikoen er lav nok til aa vaere innenfor akseptkriteriene, eller naar kostnaden ved tiltak er uforholdsmessig hoey. Eksempel: Akseptere risikoen for mindre vannskader i et eldre bygg fordi utbedring koster mer enn forventet skade. I praksis kombinerer man ofte strategiene.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av del 2 kapitler
// ============================================================================

export const SIKKERHETSFAG_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SIKKERHETSFAG_2_1,
  CHAPTER_SIKKERHETSFAG_2_2,
  CHAPTER_SIKKERHETSFAG_2_3,
  CHAPTER_SIKKERHETSFAG_2_4,
  CHAPTER_SIKKERHETSFAG_2_5,
];
