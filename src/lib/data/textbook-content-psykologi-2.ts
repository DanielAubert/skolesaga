/**
 * Tekstbok innhold for Psykologi 2 (VG3)
 *
 * Folger LK20 lareplan for psykologi 2.
 * Dekker kognisjon, nevrovitenskap, stress, psykiske lidelser,
 * terapi, positiv psykologi, kommunikasjon, helsepsykologi,
 * arbeidspsykologi og etikk.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Kognisjon og tenkning
// ============================================================================

export const CHAPTER_PSYKOLOGI_2_1: TextbookChapter = {
  id: 'psykologi-2-1',
  courseId: 'psykologi-2',
  chapterNumber: '1',
  title: 'Kognisjon og tenkning',
  description: 'Utforsk hvordan vi tenker, lorer, husker og tar beslutninger.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjore rede for sentrale kognitive prosesser',
    'forklare hvordan hukommelse fungerer',
    'analysere hvordan vi tar beslutninger og loser problemer',
  ],
  content: [
    {
      id: 'psykologi-2-1-intro',
      type: 'text',
      content: `## Hva er kognisjon?

Kognisjon omfatter alle mentale prosesser som har med kunnskap og tenkning a gjore. Dette inkluderer persepsjon, oppmerksomhet, hukommelse, sprak, problemlosning og beslutningstaking.

**Sentrale kognitive prosesser:**
- Persepsjon - hvordan vi tolker sanseinntrykk
- Oppmerksomhet - hva vi fokuserer pa
- Hukommelse - hvordan vi lagrer og henter informasjon
- Tenkning - hvordan vi resonnerer og loser problemer
- Sprak - hvordan vi kommuniserer tanker

**Kognitiv psykologi:**
Studerer hvordan mennesker tilegner seg, bearbeider og bruker informasjon. Denne retningen vokste fram pa 1950-60-tallet som en reaksjon pa behaviorismen.`,
    },
    {
      id: 'psykologi-2-1-def-1',
      type: 'definition',
      title: 'Hukommelsens struktur',
      content: `**Sensorisk hukommelse:**
Kortvarig lagring av sanseinntrykk (under 1 sekund). Ikonisk (syn) og ekoisk (horsel).

**Korttidshukommelse/arbeidsminne:**
Midlertidig lagring og bearbeiding av informasjon. Kapasitet: 7 +/- 2 enheter. Varighet: 15-30 sekunder uten repetisjon.

**Langtidshukommelse:**
Permanent lagring av informasjon.
- *Eksplisitt (deklarativ):* Bevisst hukommelse
  - Episodisk: Personlige opplevelser
  - Semantisk: Faktakunnskap
- *Implisitt (prosedural):* Ubevisst hukommelse
  - Ferdigheter og vaner
  - Klassisk betinging`,
    },
    {
      id: 'psykologi-2-1-def-2',
      type: 'definition',
      title: 'Kognitive skjevheter',
      content: `**Bekreftelsesskjevhet (confirmation bias):**
Tendensen til a soke informasjon som bekrefter det vi allerede tror.

**Tilgjengelighetsheuristikk:**
Vi vurderer sannsynlighet basert pa hvor lett eksempler kommer til minnet.

**Forankringseffekt:**
Forste informasjon vi mottar pavirker senere vurderinger uforholdsmessig mye.

**Etterpaklokt (hindsight bias):**
Tendensen til a tro at vi "visste det hele tiden" etter at noe har skjedd.

**Overkonfidens:**
Vi har ofte storre tiltro til egne vurderinger enn det er grunnlag for.`,
    },
    {
      id: 'psykologi-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Hukommelsesteknikker',
      problem: 'Hvordan kan vi bruke kunnskap om hukommelse til a lare mer effektivt?',
      solution: `**Elaborering:**
Koble ny informasjon til det du allerede vet. Jo flere koblinger, jo lettere a huske.

**Chunking (gruppering):**
Grupper informasjon i meningsfulle enheter. Telefonnummer 98765432 blir lettere som 987-654-32.

**Spredt repetisjon:**
Repeter med okende mellomrom i stedet for a pugge alt pa en gang.

**Testing:**
A teste seg selv er mer effektivt enn bare a lese pa nytt.

**Minnepalassmetoden:**
Plasser informasjon mentalt pa kjente steder (f.eks. rom i huset ditt).`,
    },
    {
      id: 'psykologi-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-1-ex-1',
        number: '1.1',
        type: 'classic',
        task: 'Forklar forskjellen mellom eksplisitt og implisitt hukommelse, og gi eksempler pa hver.',
        hints: ['Tenk pa bevisst vs. ubevisst hukommelse'],
        solution: 'Eksplisitt hukommelse er bevisst og kan uttrykkes i ord (episodisk: "jeg husker min forste skoledag", semantisk: "Oslo er Norges hovedstad"). Implisitt hukommelse er ubevisst og vises gjennom handling (a sykle, skrive pa tastatur).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-1-ex-2',
        number: '1.2',
        type: 'classic',
        task: 'Hva er bekreftelsesskjevhet, og hvorfor er det viktig a vare bevisst pa denne tendensen?',
        hints: ['Tenk pa hvordan vi soker informasjon'],
        solution: 'Bekreftelsesskjevhet er tendensen til a soke, tolke og huske informasjon som bekrefter det vi allerede tror. Det er viktig a vare bevisst pa dette fordi det kan fore til darlige beslutninger, forsterke fordommer og hindre oss fra a lare nye ting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-1-ex-3',
        number: '1.3',
        type: 'classic',
        task: 'Beskriv arbeidsminnet og dets begrensninger.',
        hints: ['Tenk pa Baddeleys modell'],
        solution: 'Arbeidsminnet er et system for midlertidig lagring og bearbeiding av informasjon. Det har begrenset kapasitet (ca. 7 enheter) og varighet (15-30 sek). Baddeley foreslo at det bestar av sentral eksekutiv, fonologisk lokke, visuospatial skisseblokk og episodisk buffer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-1-ex-4',
        number: '1.4',
        type: 'classic',
        task: 'Hvordan kan kunnskap om kognitive skjevheter gjore oss til bedre beslutningstakere?',
        hints: ['Tenk pa bevissthet og strategier'],
        solution: 'Ved a kjenne til kognitive skjevheter kan vi: aktivt soke informasjon som motstrider vare antakelser, vare skeptiske til forste inntrykk, ta tid til a tenke gjennom beslutninger, soke andres perspektiver, og bruke sjekklister og systematiske metoder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-1-ex-5',
        number: '1.5',
        type: 'classic',
        task: 'Velg en laringsteknikk og forklar hvorfor den fungerer ut fra kunnskap om hukommelse.',
        hints: ['Bruk begreper som elaborering, testing, spredt repetisjon'],
        solution: 'Eksempel: Spredt repetisjon fungerer fordi hver gang vi henter informasjon fra hukommelsen, styrkes minnesporet. Nar vi venter til vi nesten har glemt, krever gjenkallingen mer innsats, noe som gjor laringen mer varig enn massiv repetisjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Nevrovitenskap og bevissthet
// ============================================================================

export const CHAPTER_PSYKOLOGI_2_2: TextbookChapter = {
  id: 'psykologi-2-2',
  courseId: 'psykologi-2',
  chapterNumber: '2',
  title: 'Nevrovitenskap og bevissthet',
  description: 'Utforsk hjernens oppbygning, nervesystemet og bevissthetens mysterier.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjore rede for nervesystemets oppbygning og funksjon',
    'forklare hvordan nevroner kommuniserer',
    'drofta teorier om bevissthet',
  ],
  content: [
    {
      id: 'psykologi-2-2-intro',
      type: 'text',
      content: `## Hjernen og nervesystemet

Nevrovitenskap studerer nervesystemet og dets rolle i atferd og mentale prosesser. Hjernen er kroppens mest komplekse organ med ca. 86 milliarder nevroner.

**Nervesystemets inndeling:**
- **Sentralnervesystemet (SNS):** Hjernen og ryggmargen
- **Det perifere nervesystemet (PNS):**
  - Somatisk: Viljestyrt bevegelse og sansing
  - Autonomt: Regulerer indre organer
    - Sympatisk: "Kamp eller flukt"
    - Parasympatisk: "Hvile og fordoyelse"

**Hjernens hovedstrukturer:**
- Hjernestammen: Livsviktige funksjoner
- Lillehjernen: Koordinasjon og balanse
- Det limbiske system: Folelser og hukommelse
- Hjernebarken (cortex): Hoyre kognitive funksjoner`,
    },
    {
      id: 'psykologi-2-2-def-1',
      type: 'definition',
      title: 'Nevronet og synaptisk overforsel',
      content: `**Nevronets struktur:**
- *Dendritter:* Mottar signaler fra andre nevroner
- *Cellekroppen (soma):* Inneholder cellekjernen
- *Aksonet:* Sender signaler videre
- *Synapsen:* Koblingspunkt mellom nevroner

**Signaloverforsel:**
1. Elektrisk signal (aksjonspotensial) beveger seg langs aksonet
2. Signalet utloser frigjoring av nevrotransmittere i synapsen
3. Nevrotransmitterne binder til reseptorer pa mottakernevronet
4. Dette kan utlose eller hemme nytt signal

**Viktige nevrotransmittere:**
- Dopamin: Belonning, motivasjon
- Serotonin: Stemningsleie, sovn
- Noradrenalin: Vakenhet, oppmerksomhet
- GABA: Hemming, avslapping
- Glutamat: Eksitasjon, laring`,
    },
    {
      id: 'psykologi-2-2-def-2',
      type: 'definition',
      title: 'Bevissthet',
      content: `**Hva er bevissthet?**
Den subjektive opplevelsen av a vare klar over seg selv og omverdenen. Et av filosofiens og vitenskapens storste mysterier.

**Bevissthetstilstander:**
- Vakenhet
- Sovn (ulike stadier inkludert REM)
- Drommer
- Endrede tilstander (meditasjon, hypnose, rusmidler)

**Teorier om bevissthet:**
- *Global workspace theory:* Bevissthet som en felles "arbeidsplass" i hjernen
- *Higher-order theories:* Bevissthet krever tanker om tanker
- *Integrated information theory:* Bevissthet er integrert informasjon
- *Problemet med qualia:* Hvorfor har opplevelser en subjektiv kvalitet?`,
    },
    {
      id: 'psykologi-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Phineas Gage',
      problem: 'Hva kan vi lare av historiske hjerneskader?',
      solution: `**Tilfellet Phineas Gage (1848):**
En jernstang gikk gjennom pannelappen hans i en arbeidsulykke. Han overlevde, men personligheten hans endret seg dramatisk - fra ansvarsfull til impulsiv og uhoeflig.

**Hva dette larte oss:**
- Pannelappen (prefrontal cortex) er viktig for personlighet og impulskontroll
- Ulike hjernedeler har spesialiserte funksjoner
- Hjerneskader kan endre personlighet uten a pavirke andre funksjoner

**Moderne forskning:**
I dag bruker vi fMRI, EEG og andre teknikker for a studere hjernen uten a vente pa skader. Men historiske tilfeller var viktige for a etablere kunnskapen var.`,
    },
    {
      id: 'psykologi-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-2-ex-1',
        number: '2.1',
        type: 'classic',
        task: 'Beskriv hvordan et signal overfortes fra et nevron til et annet.',
        hints: ['Tenk pa aksjonspotensial, synapse og nevrotransmittere'],
        solution: 'Et elektrisk signal (aksjonspotensial) beveger seg langs aksonet. Nar det nar enden, utloses frigjoring av nevrotransmittere i synapsespalten. Disse binder til reseptorer pa mottakernevronets dendritter, noe som kan utlose eller hemme et nytt signal.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-2-ex-2',
        number: '2.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom det sympatiske og parasympatiske nervesystemet.',
        hints: ['Tenk pa kamp/flukt vs. hvile/fordoyelse'],
        solution: 'Det sympatiske nervesystemet aktiveres ved stress og forbereder kroppen pa handling (okt hjertefrekvens, pupillutvidelse, energimobilisering). Det parasympatiske nervesystemet dominerer i hvile og fremmer gjenoppbygging (senket puls, fordoyelse, avslapning).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-2-ex-3',
        number: '2.3',
        type: 'classic',
        task: 'Hva er "det vanskelige problemet" (hard problem) med bevissthet?',
        hints: ['Tenk pa subjektiv opplevelse vs. hjerneprosesser'],
        solution: 'Det vanskelige problemet handler om hvorfor og hvordan fysiske hjerneprosesser gir opphav til subjektiv opplevelse (qualia). Vi kan forklare hvordan hjernen behandler informasjon, men ikke hvorfor dette foles som noe innenfra.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-2-ex-4',
        number: '2.4',
        type: 'classic',
        task: 'Nevn tre viktige nevrotransmittere og beskriv deres funksjoner.',
        hints: ['Tenk pa dopamin, serotonin, noradrenalin'],
        solution: 'Dopamin: Involvert i belonning, motivasjon og bevegelskontroll (lavt ved Parkinson). Serotonin: Pavirker stemningsleie, sovn og appetitt (lavt ved depresjon). Noradrenalin: Viktig for vakenhet, oppmerksomhet og stressrespons.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-2-ex-5',
        number: '2.5',
        type: 'classic',
        task: 'Drofte fordeler og begrensninger ved moderne hjerneavbildningsteknikker som fMRI.',
        hints: ['Tenk pa hva vi kan og ikke kan lare'],
        solution: 'Fordeler: Ikke-invasiv, viser hjerneaktivitet i sanntid, god romlig opplosning. Begrensninger: Maler blodstrom (indirekte), darlig tidsopplosning, kostbart, deltakere ma ligge stille, korrelasjon er ikke kausalitet, faren for overfortolkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Stress og mestring
// ============================================================================

export const CHAPTER_PSYKOLOGI_2_3: TextbookChapter = {
  id: 'psykologi-2-3',
  courseId: 'psykologi-2',
  chapterNumber: '3',
  title: 'Stress og mestring',
  description: 'Forsta stressreaksjoner, konsekvenser av langvarig stress og mestringsstrategier.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for biologiske og psykologiske stressreaksjoner',
    'analysere faktorer som pavirker stressmestring',
    'vurdere ulike mestringsstrategier',
  ],
  content: [
    {
      id: 'psykologi-2-3-intro',
      type: 'text',
      content: `## Hva er stress?

Stress er kroppens respons pa utfordringer eller trusler. Det er en naturlig og ofte nyttig reaksjon, men langvarig stress kan vare skadelig.

**Stressorer:**
- Fysiske (sykdom, skade, ekstreme temperaturer)
- Psykologiske (eksamener, konflikter, tap)
- Sosiale (isolasjon, mobbing, fattigdom)

**Akutt vs. kronisk stress:**
- *Akutt stress:* Kortvarig, aktiverer kamp-eller-flukt-respons
- *Kronisk stress:* Langvarig, kan fore til helseproblemer

**Stress er subjektivt:**
Hva som oppleves som stressende varierer fra person til person. Det handler om forholdet mellom opplevde krav og opplevde ressurser.`,
    },
    {
      id: 'psykologi-2-3-def-1',
      type: 'definition',
      title: 'Stressresponsen',
      content: `**Hans Selyes generelle adaptasjonssyndrom (GAS):**
1. *Alarmfasen:* Kroppen mobiliserer ressurser (kamp eller flukt)
2. *Motstandsfasen:* Kroppen tilpasser seg fortsatt stress
3. *Utmattelsesfasen:* Ressursene er oppbrukt, helseproblemer oppstar

**Biologiske stressreaksjoner:**
- HPA-aksen aktiveres (hypotalamus-hypofyse-binyre)
- Kortisol frigjores (stresshormon)
- Sympatisk nervesystem aktiveres
- Adrenalin og noradrenalin frigjores
- Okt hjertefrekvens, blodtrykk, muskelspending

**Konsekvenser av kronisk stress:**
- Svekket immunforsvar
- Okt risiko for hjerte- og karsykdom
- Fordoyelsesproblemer
- Angst og depresjon
- Soevnproblemer
- Hukommelsesvansker`,
    },
    {
      id: 'psykologi-2-3-def-2',
      type: 'definition',
      title: 'Mestringsstrategier',
      content: `**Lazarus og Folkmans mestringsmodell:**
Mestring er kognitive og atferdsmessige forsok pa a handtere krav som overstiger ens ressurser.

**Problemfokusert mestring:**
Forsok pa a endre selve situasjonen.
- Planlegge og handle
- Soke informasjon
- Soke praktisk hjelp

**Emosjonsfokusert mestring:**
Forsok pa a handtere folelsene knyttet til situasjonen.
- Avledning
- Avslapning
- Sosial stotte
- Refortolkning

**Nar brukes hva?**
Problemfokusert mestring er mest effektiv nar situasjonen kan endres. Emosjonsfokusert mestring er nyttig nar lite kan gjores med selve problemet.`,
    },
    {
      id: 'psykologi-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Mestring av eksamenspress',
      problem: 'Hvordan kan en student bruke ulike mestringsstrategier for a handtere eksamensangst?',
      solution: `**Problemfokusert mestring:**
- Lage en lesepian og folge den
- Soke hjelp fra larere eller medstudenter
- Ove pa gamle eksamensoppgaver
- Skaffe seg oversikt over pensum

**Emosjonsfokusert mestring:**
- Avslapningsteknikker (pusteovelser, meditasjon)
- Fysisk aktivitet for a redusere spenning
- Snakke med venner om angsten
- Refortolke: "Dette er en mulighet til a vise hva jeg kan"

**Kombinasjon er best:**
God eksamensforberedelse (problemfokusert) kombinert med teknikker for a roe seg ned (emosjonsfokusert) gir beste resultat.`,
    },
    {
      id: 'psykologi-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-3-ex-1',
        number: '3.1',
        type: 'classic',
        task: 'Beskriv de tre fasene i Selyes generelle adaptasjonssyndrom.',
        hints: ['Tenk pa alarm, motstand og utmattelse'],
        solution: 'Alarmfasen: Kroppen reagerer pa trusselen med kamp-eller-flukt-respons. Motstandsfasen: Kroppen tilpasser seg og forsoker a opprettholde homeostase under fortsatt stress. Utmattelsesfasen: Ressursene er oppbrukt, immunforsvaret svekkes, og sykdom kan oppsta.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-3-ex-2',
        number: '3.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom problemfokusert og emosjonsfokusert mestring.',
        hints: ['Tenk pa a endre situasjonen vs. endre folelsene'],
        solution: 'Problemfokusert mestring retter seg mot a endre selve situasjonen (planlegge, soke hjelp, handle). Emosjonsfokusert mestring retter seg mot a handtere folelsene knyttet til situasjonen (avslapning, stotte, avledning). Begge kan vare effektive avhengig av situasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-3-ex-3',
        number: '3.3',
        type: 'classic',
        task: 'Hvordan kan kronisk stress pavirke helsen?',
        hints: ['Tenk pa immunforsvar, hjerte-kar, mental helse'],
        solution: 'Kronisk stress kan svekke immunforsvaret og gjore oss mer mottagelige for sykdom. Det oker risikoen for hjerte- og karsykdommer, fordoyelsesproblemer, angst og depresjon. Langvarig forhoyede kortisolnivaer kan skade hippocampus og pavirke hukommelsen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-3-ex-4',
        number: '3.4',
        type: 'classic',
        task: 'Hva menes med at stress er subjektivt?',
        hints: ['Tenk pa individuelle forskjeller i stressopplevelse'],
        solution: 'Stress er subjektivt fordi det avhenger av hvordan personen vurderer situasjonen. Samme hendelse kan oppleves som truende av en person og som en spennende utfordring av en annen. Det handler om forholdet mellom opplevde krav og opplevde ressurser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-3-ex-5',
        number: '3.5',
        type: 'classic',
        task: 'Beskriv en situasjon fra eget liv og forklar hvilke mestringsstrategier du brukte eller kunne ha brukt.',
        hints: ['Vaer konkret og bruk fagbegreper'],
        solution: 'Svar vil variere. Eksempel: Ved en stor prosjektinnlevering (stressor) brukte jeg problemfokusert mestring (laget plan, delte oppgaven i mindre deler) og emosjonsfokusert mestring (tok pauser, snakket med venner). Kombinasjonen hjalp meg a fullfare uten a bli overveldet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Psykiske lidelser - diagnose og behandling
// ============================================================================

export const CHAPTER_PSYKOLOGI_2_4: TextbookChapter = {
  id: 'psykologi-2-4',
  courseId: 'psykologi-2',
  chapterNumber: '4',
  title: 'Psykiske lidelser - diagnose og behandling',
  description: 'Forsta klassifisering av psykiske lidelser og ulike forklaringsmodeller.',
  estimatedMinutes: 65,
  competenceGoals: [
    'gjore rede for sentrale psykiske lidelser',
    'forklare ulike forklaringsmodeller for psykiske lidelser',
    'drofta stigma og holdninger til psykisk helse',
  ],
  content: [
    {
      id: 'psykologi-2-4-intro',
      type: 'text',
      content: `## Psykiske lidelser

Psykiske lidelser er tilstander som pavirker tanker, folelser og atferd pa mater som skaper betydelig lidelse eller funksjonsnedsettelse.

**Hvor vanlig er det?**
- Ca. 1 av 5 vil oppleve en psykisk lidelse i lopet av livet
- Angst og depresjon er de vanligste lidelsene
- Mange soker aldri hjelp

**Diagnostiske systemer:**
- ICD-11 (WHO): Brukes i Norge og Europa
- DSM-5 (APA): Brukes mye i forskning og USA

**Utfordringer med diagnostikk:**
- Grensen mellom "normalt" og "sykt" er ikke alltid klar
- Kulturelle forskjeller i hva som anses som avvikende
- Risiko for overdiagnostisering eller underdiagnostisering
- Stigma knyttet til diagnoser`,
    },
    {
      id: 'psykologi-2-4-def-1',
      type: 'definition',
      title: 'Utvalgte psykiske lidelser',
      content: `**Depresjon:**
Vedvarende nedstemt stemningsleie, tap av interesse/glede, energilos het, konsentrasjonsvansker, sovnproblemer, endret appetitt, verdiloshetsfoleise, selvmordstanker.

**Angstlidelser:**
- *Generalisert angst:* Overdreven bekymring om mange ting
- *Panikklidelse:* Plutselige, intense angstanfall
- *Sosial angst:* Frykt for sosiale situasjoner
- *Spesifikke fobier:* Intens frykt for spesifikke objekter/situasjoner

**Schizofreni:**
Psykoselidelse med hallusinasjoner, vrangforestillinger, desorganisert tenkning og negative symptomer (apati, sosial tilbaketrekning).

**Bipolar lidelse:**
Veksling mellom depressive og maniske episoder (oppstemthet, nedsatt sovnbehov, grandiose ideer, impulsivitet).`,
    },
    {
      id: 'psykologi-2-4-def-2',
      type: 'definition',
      title: 'Forklaringsmodeller',
      content: `**Biologisk modell:**
Psykiske lidelser skyldes biologiske faktorer: genetikk, nevrotransmittere, hjernestruktur.

**Psykologisk modell:**
Fokuserer pa laeringshistorie, tankemsonstre, ubevisste konflikter, tilknytning.

**Sosial modell:**
Vektlegger sosiale faktorer: fattigdom, traumer, relasjoner, diskriminering.

**Biopsykososial modell:**
Integrerer alle tre: Biologisk sarbarhet + psykologiske faktorer + sosiale belastninger = lidelse.

**Stress-sarbarhetmodellen:**
Psykisk lidelse oppstar nar sarbare individer utsettes for tilstrekkelig stress. Bade sarbarhet og stress kan vare biologisk, psykologisk eller sosialt.`,
    },
    {
      id: 'psykologi-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Depresjon fra ulike perspektiver',
      problem: 'Hvordan forklarer de ulike modellene depresjon?',
      solution: `**Biologisk forklaring:**
Ubalanse i nevrotransmittere (serotonin, noradrenalin, dopamin), genetisk sarbarhet, endringer i hjernestrukturer.

**Psykologisk forklaring:**
- Kognitiv: Negative tankemonstre og kognitiv triade (negativt syn pa selv, verden, fremtid)
- Psykodynamisk: Ubearbeidet sorg eller sinne rettet innover
- Lart hjelpeloshet: Erfaring med mangel pa kontroll

**Sosial forklaring:**
Tap av naere relasjoner, isolasjon, fattigdom, diskriminering, arbeidsloshet.

**Biopsykososial forklaring:**
En person med genetisk sarbarhet (biologisk) som har lart negative tankemonstre (psykologisk) og opplever tap av jobb (sosialt) kan utvikle depresjon.`,
    },
    {
      id: 'psykologi-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-4-ex-1',
        number: '4.1',
        type: 'classic',
        task: 'Hva er den biopsykososiale modellen, og hvorfor er den nyttig for a forsta psykiske lidelser?',
        hints: ['Tenk pa integrering av ulike faktorer'],
        solution: 'Den biopsykososiale modellen integrerer biologiske, psykologiske og sosiale faktorer for a forklare psykisk helse. Den er nyttig fordi den anerkjenner kompleksiteten i psykiske lidelser og at behandling ofte ma rette seg mot flere omrader samtidig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-4-ex-2',
        number: '4.2',
        type: 'classic',
        task: 'Beskriv hovedsymptomene ved depresjon.',
        hints: ['Tenk pa stemning, energi, tanker, kropp'],
        solution: 'Hovedsymptomer ved depresjon inkluderer: nedstemt stemningsleie, tap av interesse og glede (anhedoni), energiloshet, konsentrasjonsvansker, sovnproblemer, endret appetitt, verdiloshetsfoleise, skyldfolelse, og i alvorlige tilfeller selvmordstanker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-4-ex-3',
        number: '4.3',
        type: 'classic',
        task: 'Hva er stress-sarbarhetmodellen?',
        hints: ['Tenk pa samspill mellom sarbarhet og stress'],
        solution: 'Stress-sarbarhetmodellen forklarer psykisk lidelse som et resultat av samspill mellom individets sarbarhet (genetisk, biologisk, psykologisk) og stressfaktorer i miljoet. Jo storre sarbarhet, jo mindre stress trengs for a utlose lidelse, og omvendt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-4-ex-4',
        number: '4.4',
        type: 'classic',
        task: 'Forklar forskjellen mellom angst og frykt.',
        hints: ['Tenk pa trussel - na eller fremtidig?'],
        solution: 'Frykt er en umiddelbar reaksjon pa en konkret, narvarende trussel (f.eks. en slange). Angst er en vedvarende tilstand av bekymring og uro rettet mot fremtidige, ofte uklare trusler. Angst kan vare tilstede uten at det er noen reell fare.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-4-ex-5',
        number: '4.5',
        type: 'classic',
        task: 'Drofte hvorfor stigma knyttet til psykiske lidelser er problematisk.',
        hints: ['Tenk pa konsekvenser for den enkelte og samfunnet'],
        solution: 'Stigma kan fore til at folk ikke soker hjelp, forverring av lidelsen, sosial isolasjon, diskriminering i arbeidsliv og lavere selvfolelse. Pa samfunnsniva forer stigma til manglende ressurser til psykisk helse og at forebygging og tidlig intervensjon svikter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: Terapi og behandlingsformer
// ============================================================================

export const CHAPTER_PSYKOLOGI_2_5: TextbookChapter = {
  id: 'psykologi-2-5',
  courseId: 'psykologi-2',
  chapterNumber: '5',
  title: 'Terapi og behandlingsformer',
  description: 'Utforsk ulike terapiformer og hvordan psykiske lidelser behandles.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjore rede for sentrale terapiformer',
    'sammenligne ulike behandlingstilaerminger',
    'vurdere evidensgrunnlaget for ulike behandlinger',
  ],
  content: [
    {
      id: 'psykologi-2-5-intro',
      type: 'text',
      content: `## Behandling av psykiske lidelser

Behandling av psykiske lidelser kan omfatte psykoterapi, medikamenter, eller en kombinasjon. Valg av behandling avhenger av lidelsen, alvorlighetsgrad og individuelle faktorer.

**Hovedkategorier av behandling:**
- Psykoterapi (samtaleterapi)
- Biologisk behandling (medikamenter, ECT)
- Sosiale intervensjoner (stottende miljo, arbeid)

**Hvem tilbyr behandling?**
- Psykologer: Utredning og terapi
- Psykiatere: Leger med spesialisering, kan forskrive medisiner
- Fastleger: Forste kontakt, kan behandle milde til moderate tilfeller
- Andre: Sosionomer, sykepleiere, miljoterapeuterer

**Evidensbasert praksis:**
Behandling bor baseres pa best tilgjengelige forskning kombinert med klinisk erfaring og pasientens verdier.`,
    },
    {
      id: 'psykologi-2-5-def-1',
      type: 'definition',
      title: 'Kognitiv atferdsterapi (KAT)',
      content: `**Grunnprinsipper:**
Tanker, folelser og atferd henger sammen. Ved a endre negative tankemonstre kan vi endre folelser og atferd.

**Kognitive teknikker:**
- Identifisere automatiske negative tanker
- Utfordre og teste tankenes gyldighet
- Erstatte med mer realistiske tanker
- Sokratisk sporsmalsmetode

**Atferdsteknikker:**
- Gradvis eksponering (for angst)
- Atferdsaktivering (for depresjon)
- Avslapningsteknikker
- Ferdighetstrening

**Egnethet:**
Godt dokumentert effekt for depresjon, angstlidelser, OCD, spiseforstyrrelser, somnproblemer. Strukturert, tidsbegrenset (ofte 10-20 timer).`,
    },
    {
      id: 'psykologi-2-5-def-2',
      type: 'definition',
      title: 'Andre terapiformer',
      content: `**Psykodynamisk terapi:**
Utforsker ubevisste konflikter, tidlige erfaringer og forsvarsmekanismer. Fokus pa terapeutisk relasjon og innsikt.

**Humanistisk terapi (f.eks. klientsentrert terapi):**
Fokuserer pa selverkjennelse og personlig vekst. Terapeuten viser ubetinget positiv aksept, empati og ekthet.

**Familieterapi:**
Ser problemet i familiekontekst. Jobber med kommunikasjon og relasjoner i hele familien.

**Dialektisk atferdsterapi (DAT):**
Kombinerer KAT med mindfulness og aksept. Utviklet for emosjonelt ustabil personlighetsforstyrrelse.

**Medikamentell behandling:**
- Antidepressiva (SSRI, SNRI)
- Anxiolytika (angstdempende)
- Antipsykotika
- Stemningsstabilisatorer`,
    },
    {
      id: 'psykologi-2-5-example-1',
      type: 'example',
      title: 'Eksempel: KAT ved sosial angst',
      problem: 'Hvordan kan kognitiv atferdsterapi hjelpe en person med sosial angst?',
      solution: `**Kognitivt arbeid:**
Personen har automatiske tanker som "Alle vil se at jeg er nervos" og "Jeg kommer til a dumme meg ut". Terapeuten hjelper med a:
1. Identifisere disse tankene
2. Undersoke bevisene for og imot
3. Utvikle mer balanserte tanker: "Noen legger kanskje merke til at jeg er nervos, men de fleste er opptatt av seg selv"

**Atferdseksponering:**
Gradvis okende utfordringer:
1. Si hei til en kollega
2. Stille et sporsamal i en liten gruppe
3. Holde en kort presentasjon
4. Delta i en sosial sammenkomst

**Hjemmeoppgaver:**
Ove mellom timene, fore dagbok over tanker og situasjoner, teste ut nye atferder.`,
    },
    {
      id: 'psykologi-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-5-ex-1',
        number: '5.1',
        type: 'classic',
        task: 'Forklar de sentrale prinsippene i kognitiv atferdsterapi.',
        hints: ['Tenk pa sammenhengen mellom tanker, folelser og atferd'],
        solution: 'KAT baseres pa at tanker, folelser og atferd pavirker hverandre. Negative automatiske tanker bidrar til vanskelige folelser og uhensiktsmessig atferd. Ved a identifisere og utfordre negative tanker og endre atferd kan man bryte onde sirkler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-5-ex-2',
        number: '5.2',
        type: 'classic',
        task: 'Hva er eksponering, og hvorfor er det en sentral teknikk i behandling av angst?',
        hints: ['Tenk pa habituering og mestring'],
        solution: 'Eksponering innabarer a gradvis utsette seg for det man frykter i trygge omgivelser. Det virker fordi angsten naturlig avtar over tid (habituering), og personen larer at frykten er overdrevet. Dette bryter unngaelsesatferd som opprettholder angsten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-5-ex-3',
        number: '5.3',
        type: 'classic',
        task: 'Sammenlign kognitiv atferdsterapi og psykodynamisk terapi.',
        hints: ['Tenk pa fokus, varighet, teknikker'],
        solution: 'KAT fokuserer pa narvarende tanker og atferd, er strukturert og tidsbegrenset, bruker aktive teknikker og hjemmeoppgaver. Psykodynamisk terapi fokuserer pa ubevisste konflikter og fortid, er ofte lengre, vektlegger innsikt og den terapeutiske relasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-5-ex-4',
        number: '5.4',
        type: 'classic',
        task: 'Hva menes med evidensbasert praksis i psykisk helsevern?',
        hints: ['Tenk pa forskning, erfaring og pasientpreferanser'],
        solution: 'Evidensbasert praksis betyr a kombinere best tilgjengelige forskningsbevis med klinisk erfaring og pasientens verdier og preferanser. Det sikrer at behandlingen har dokumentert effekt, men tar ogsa hensyn til individuelle behov.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-5-ex-5',
        number: '5.5',
        type: 'classic',
        task: 'Drofte fordeler og ulemper ved medikamentell behandling av psykiske lidelser.',
        hints: ['Tenk pa effekt, bivirkninger, tilgang, stigma'],
        solution: 'Fordeler: Kan gi rask symptomlindring, nodvendig ved alvorlige lidelser, lett tilgjengelig. Ulemper: Bivirkninger, behandler ofte symptomer ikke arsaker, risiko for avhengighet (noen medikamenter), kan kreve lang tids bruk. Ofte best i kombinasjon med terapi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Positiv psykologi og velvaere
// ============================================================================

export const CHAPTER_PSYKOLOGI_2_6: TextbookChapter = {
  id: 'psykologi-2-6',
  courseId: 'psykologi-2',
  chapterNumber: '6',
  title: 'Positiv psykologi og velvaere',
  description: 'Utforsk hva som gir et godt liv og hvordan vi kan fremme mental helse.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjore rede for sentrale begreper i positiv psykologi',
    'analysere faktorer som fremmer velvaere',
    'vurdere kritikk av positiv psykologi',
  ],
  content: [
    {
      id: 'psykologi-2-6-intro',
      type: 'text',
      content: `## Hva er positiv psykologi?

Positiv psykologi er studiet av hva som gjor livet verdt a leve. I stedet for bare a fokusere pa lidelse og problemer, utforsker positiv psykologi styrker, dyder og faktorer som fremmer velvaere.

**Grunnleggeren:**
Martin Seligman lanserte positiv psykologi rundt ar 2000. Han mente psykologien hadde vaert for opptatt av det negative.

**Tre pilarer:**
1. Positive folelser (lykke, takknemlighet, hap)
2. Positive egenskaper (styrker, dyder, talenter)
3. Positive institusjoner (familier, skoler, samfunn)

**Viktig presisering:**
Positiv psykologi handler ikke om a ignorere problemer eller alltid vaere glad. Det handler om a forsta hva som bidrar til et meningsfullt og tilfredsstillende liv.`,
    },
    {
      id: 'psykologi-2-6-def-1',
      type: 'definition',
      title: 'Velvaere og lykke',
      content: `**To typer velvaere:**
- *Hedonisk velvaere:* Opplevelse av glede og fravaer av smerte
- *Eudaimonisk velvaere:* Mening, selvrealisering, a leve i trad med sine verdier

**Seligmans PERMA-modell:**
- **P**ositive emotions (positive folelser)
- **E**ngagement (engasjement, flow)
- **R**elationships (positive relasjoner)
- **M**eaning (mening og formal)
- **A**ccomplishment (prestasjoner, mestring)

**Hva pavirker lykke?**
- Genetikk: Ca. 50% av variasjonen
- Livsomstendigheter: Ca. 10% (inntekt, sivilstatus, etc.)
- Bevisst aktivitet: Ca. 40% (det vi gjor og tenker)

Dette kalles "lykkekaka" og viser at vi har betydelig pavirkning pa egen lykke.`,
    },
    {
      id: 'psykologi-2-6-def-2',
      type: 'definition',
      title: 'Flow og karakterstyrker',
      content: `**Flow (Csikszentmihalyi):**
En tilstand av fullstendig oppslukthet i en aktivitet. Kjennetegn:
- Klar mal og umiddelbar tilbakemelding
- Balanse mellom utfordring og ferdighet
- Fullstendig fokus, tap av selvbevissthet
- Forvrengt tidsopplevelse

**Karakterstyrker (Peterson & Seligman):**
24 styrker gruppert i 6 dyder:
- Visdom (nysgjerrighet, kreativitet, klaerdom)
- Mot (tapperhet, utholdenhet, integritet)
- Menneskelighet (kjaerlighet, vennlighet)
- Rettferdighet (teamwork, ledelse, rettferdighet)
- Matehold (tilgivelse, beskjedenhet, selvregulering)
- Transcendens (takknemlighet, hap, humor, spiritualitet)

**Signaturstyrker:**
De styrkene som er mest typiske for deg og som gir deg energi nar du bruker dem.`,
    },
    {
      id: 'psykologi-2-6-example-1',
      type: 'example',
      title: 'Eksempel: Takknemlighetsovelse',
      problem: 'Hvordan kan en enkel ovelse oke velvaere?',
      solution: `**Tre gode ting (Three Good Things):**
En av de mest studerte positive intervensjoner.

**Slik gjor du det:**
1. Hver kveld, skriv ned tre ting som gikk bra i dag
2. For hver ting, reflekter over hvorfor det skjedde
3. Gjor dette i minst en uke

**Hvorfor virker det?**
- Flytter fokus fra det negative til det positive
- Trener hjernen i a legge merke til gode ting
- Oker takknemlighet og positiv folelse
- Kan motvirke negativitetsbias

**Forskning viser:**
Deltakere som gjorde ovelsen i en uke var lykkeligere og mindre deprimerte opp til 6 maneder senere.`,
    },
    {
      id: 'psykologi-2-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-6-ex-1',
        number: '6.1',
        type: 'classic',
        task: 'Forklar PERMA-modellen og dens komponenter.',
        hints: ['Tenk pa de fem elementene som bidrar til velvaere'],
        solution: 'PERMA-modellen beskriver fem elementer som bidrar til velvaere: Positive emotions (positive folelser), Engagement (engasjement/flow), Relationships (positive relasjoner), Meaning (mening og formal), og Accomplishment (prestasjoner). Et godt liv inkluderer alle disse elementene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-6-ex-2',
        number: '6.2',
        type: 'classic',
        task: 'Hva er flow, og hva kjennetegner denne tilstanden?',
        hints: ['Tenk pa Csikszentmihalyis beskrivelse'],
        solution: 'Flow er en tilstand av fullstendig oppslukthet i en aktivitet. Kjennetegn: Klare mal og umiddelbar tilbakemelding, balanse mellom utfordring og ferdighet, fullstendig konsentrasjon, tap av selvbevissthet, og forvrengt tidsopplevelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-6-ex-3',
        number: '6.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom hedonisk og eudaimonisk velvaere.',
        hints: ['Tenk pa nytelse vs. mening'],
        solution: 'Hedonisk velvaere handler om a maksimere nytelse og minimere smerte - a ha det godt her og na. Eudaimonisk velvaere handler om mening, selvrealisering og a leve i trad med sine verdier - a ha et godt liv i dypere forstand. Begge er viktige for helhetlig velvaere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-6-ex-4',
        number: '6.4',
        type: 'classic',
        task: 'Drofte kritikk som har vaert rettet mot positiv psykologi.',
        hints: ['Tenk pa forenkliog, individualisering, kulturelle forskjeller'],
        solution: 'Kritikk inkluderer: Overforenkling av komplekse fenomener, for mye fokus pa individet (ignorerer strukturelle arsaker til ulykke), vestlig kulturelt bias, risiko for "tvungen positivitet", og at negative folelser har viktige funksjoner som ikke bor undertrykkest.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-6-ex-5',
        number: '6.5',
        type: 'classic',
        task: 'Identifiser tre av dine egne karakterstyrker og beskriv hvordan du bruker dem.',
        hints: ['Tenk pa hva som gir deg energi og hva du er god pa'],
        solution: 'Svar vil variere. Eksempel: Nysgjerrighet (jeg elsker a lare nye ting), utholdenhet (jeg gir ikke opp lett), og humor (jeg bruker humor til a lette stemningen). Jeg bruker disse daglig i studiene og sosialt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Kommunikasjon og relasjoner
// ============================================================================

export const CHAPTER_PSYKOLOGI_2_7: TextbookChapter = {
  id: 'psykologi-2-7',
  courseId: 'psykologi-2',
  chapterNumber: '7',
  title: 'Kommunikasjon og relasjoner',
  description: 'Forsta hvordan vi kommuniserer og bygger relasjoner med andre.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for kommunikasjonsprosesser',
    'analysere faktorer som pavirker relasjoner',
    'vurdere betydningen av sosial stotte',
  ],
  content: [
    {
      id: 'psykologi-2-7-intro',
      type: 'text',
      content: `## Mennesket som sosialt vesen

Vi er grunnleggende sosiale vesener. Relasjoner og tilhorighet er blant vare viktigste behov, og kvaliteten pa vare relasjoner har stor betydning for vart velvaere.

**Hvorfor er relasjoner viktige?**
- Evolusjonart: Overlevelse og reproduksjon
- Psykologisk: Identitet, mening, stotte
- Fysisk helse: Sosial isolasjon er en helserisiko

**Kommunikasjon:**
Prosessen der vi utveksler informasjon, tanker og folelser. Kan vaere verbal (ord) eller nonverbal (kroppssprak, tonefall).

**Relasjonskompetanse:**
Evnen til a etablere, opprettholde og avslutte relasjoner pa konstruktive mater.`,
    },
    {
      id: 'psykologi-2-7-def-1',
      type: 'definition',
      title: 'Kommunikasjonsteori',
      content: `**Kommunikasjonsprosessen:**
1. Sender har en ide/budskap
2. Sender koder budskapet (ord, gester)
3. Budskapet overfortes gjennom en kanal
4. Mottaker dekoder budskapet
5. Mottaker gir tilbakemelding

**Stoy:**
Alt som forstyrrer kommunikasjonen (fysisk stoy, psykologiske barrierer, kulturforskjeller).

**Nonverbal kommunikasjon:**
- Kroppssprak (holdning, gester, ansiktsuttrykk)
- Oynekontakt
- Beroring
- Avstand (proksemikk)
- Tonefall og stemmeleie (paralingvistikk)

**Mehrabians regel (ofte misforstatt):**
I situasjoner der ord og nonverbal kommunikasjon ikke stemmer overens, stoler vi mest pa det nonverbale.`,
    },
    {
      id: 'psykologi-2-7-def-2',
      type: 'definition',
      title: 'Relasjoner og tilknytning',
      content: `**Tilknytningsteori (Bowlby og Ainsworth):**
Tidlige erfaringer med omsorgspersoner former vare forventninger til relasjoner.

**Tilknytningsstiler:**
- *Trygg:* Komfortabel med naerhet og uavhengighet
- *Engstelig:* Bekymret for avvisning, soker mye bekreftelse
- *Unngaende:* Holder avstand, ubehag ved naerhet
- *Desorganisert:* Veksler mellom naerhet og distanse

**Sosial stotte:**
- *Emosjonell stotte:* Omtanke, empati, trast
- *Instrumentell stotte:* Praktisk hjelp
- *Informasjonsstotte:* Rad og veiledning
- *Fellesskapsstotte:* Tilhorighet til gruppe

**Effekter av sosial stotte:**
Reduserer stress, styrker immunforsvar, oker velvaere, beskytter mot psykiske lidelser.`,
    },
    {
      id: 'psykologi-2-7-example-1',
      type: 'example',
      title: 'Eksempel: Aktiv lytting',
      problem: 'Hvordan kan vi bli bedre lyttere?',
      solution: `**Aktiv lytting:**
En kommunikasjonsteknikk der lytteren viser full oppmerksomhet og forstaelse.

**Teknikker:**
1. **Full oppmerksomhet:** Legg bort mobilen, ha oynekontakt, vend kroppen mot den andre
2. **Ikke avbryt:** La den andre snakke ferdig
3. **Reflekter:** Gjenta med egne ord det du har hort
4. **Spor apne sporsmael:** "Kan du fortelle mer om det?"
5. **Valider folelser:** "Det horees ut som du folte deg frustrert"
6. **Unnga radgivning (med mindre den onskes):** Ofte vil folk bare bli hort

**Hvorfor virker det?**
Den som snakker foler seg sett og forstatt. Det bygger tillit og naerhet. Det reduserer misforstaelser.`,
    },
    {
      id: 'psykologi-2-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-7-ex-1',
        number: '7.1',
        type: 'classic',
        task: 'Forklar de ulike typene sosial stotte og gi eksempler.',
        hints: ['Tenk pa emosjonell, instrumentell, informasjons- og fellesskapsstotte'],
        solution: 'Emosjonell stotte: Traste en venn som er lei seg. Instrumentell stotte: Hjelpe noen med flytting. Informasjonsstotte: Gi rad om jobbsoknad. Fellesskapsstotte: Inkludere noen i en vennegjeng. Alle typer er viktige for velvaere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-7-ex-2',
        number: '7.2',
        type: 'classic',
        task: 'Beskriv de fire tilknytningsstilene og hvordan de kan pavirke voksne relasjoner.',
        hints: ['Tenk pa trygg, engstelig, unngaende, desorganisert'],
        solution: 'Trygg tilknytning: Komfortabel med naerhet, takler konflikt godt. Engstelig: Redd for avvisning, kan bli klamrete. Unngaende: Holder avstand, vanskelig med naerhet. Desorganisert: Uforutsigbar, ofte knyttet til traumer. Tidlige erfaringer pavirker vare forventninger til relasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-7-ex-3',
        number: '7.3',
        type: 'classic',
        task: 'Hva er nonverbal kommunikasjon, og hvorfor er den viktig?',
        hints: ['Tenk pa kroppssprak, tonefall, ansiktsuttrykk'],
        solution: 'Nonverbal kommunikasjon inkluderer kroppssprak, ansiktsuttrykk, oynekontakt, beroring, avstand og tonefall. Den er viktig fordi den ofte avslorer ekte folelser, kan forsterke eller motsi ord, og vi stoler mer pa den nar ord og handling ikke stemmer overens.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-7-ex-4',
        number: '7.4',
        type: 'classic',
        task: 'Hvorfor er sosial stotte viktig for helsen?',
        hints: ['Tenk pa psykisk og fysisk helse'],
        solution: 'Sosial stotte demper stressresponsen, styrker immunforsvaret, gir mening og tilhorighet, og er en beskyttelsesfaktor mot psykiske lidelser. Forskning viser at sosial isolasjon er like skadelig for helsen som roeyking.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-7-ex-5',
        number: '7.5',
        type: 'classic',
        task: 'Beskriv hva aktiv lytting er og hvorfor det er en viktig ferdighet.',
        hints: ['Tenk pa teknikker og effekter'],
        solution: 'Aktiv lytting innebarer a gi full oppmerksomhet, ikke avbryte, reflektere det man har hort, stille apne sporsmael og validere folelser. Det er viktig fordi det bygger tillit, far andre til a fole seg forstatt, reduserer misforstaelser og styrker relasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: Helsepsykologi
// ============================================================================

export const CHAPTER_PSYKOLOGI_2_8: TextbookChapter = {
  id: 'psykologi-2-8',
  courseId: 'psykologi-2',
  chapterNumber: '8',
  title: 'Helsepsykologi',
  description: 'Utforsk sammenhengen mellom psykologi og fysisk helse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for sammenhenger mellom psykologi og helse',
    'analysere helseatferd og atferdsendring',
    'vurdere psykologiske faktorer i sykdom og behandling',
  ],
  content: [
    {
      id: 'psykologi-2-8-intro',
      type: 'text',
      content: `## Hva er helsepsykologi?

Helsepsykologi studerer psykologiske faktorers rolle i helse, sykdom og helsevesenet. Feltet utforsker hvordan tanker, folelser og atferd pavirker fysisk helse.

**Sentrale temaer:**
- Hvordan fremme sunn atferd (kost, mosjon, sovn)
- Hvordan forebygge skadelig atferd (roeyking, rus, risikosex)
- Hvordan psykologiske faktorer pavirker sykdom
- Hvordan hjelpe pasienter a mestre sykdom
- Hvordan forbedre kommunikasjon i helsevesenet

**Biopsykososial modell:**
Helse og sykdom er resultatet av samspill mellom biologiske, psykologiske og sosiale faktorer.

**Paradigmeskifte:**
Fra biomedisinsk modell (sykdom = kun biologisk) til biopsykososial modell (helse er komplekst).`,
    },
    {
      id: 'psykologi-2-8-def-1',
      type: 'definition',
      title: 'Helseatferd og atferdsendring',
      content: `**Helseatferd:**
Handlinger som pavirker helsen - positivt (trening, sunn mat) eller negativt (roeyking, inaktivitet).

**Hvorfor er atferdsendring vanskelig?**
- Kortsiktig nytelse vs. langsiktig gevinst
- Vaner og automatisk atferd
- Sosiale og milomessige faktorer
- Kognitive skjevheter ("det skjer ikke meg")

**Modeller for atferdsendring:**

*Health Belief Model:*
Atferd avhenger av oppfattet sarbarhet, alvorlighet, fordeler ved endring og barrierer.

*Transteoretisk modell (stadiemodellen):*
1. Foroverveielse (ikke klar over problem)
2. Overveielse (vurderer endring)
3. Forberedelse (planlegger endring)
4. Handling (gjennomforer endring)
5. Vedlikehold (opprettholder endring)`,
    },
    {
      id: 'psykologi-2-8-def-2',
      type: 'definition',
      title: 'Psykologiske faktorer i sykdom',
      content: `**Placebo og nocebo:**
- *Placebo:* Bedring fra virkningslost middel pga. forventning
- *Nocebo:* Forverring pga. negative forventninger
- Viser kroppens evne til selvhelbredelse og psykologiens makt

**Type A-personlighet:**
Konkurranseorientert, uttalmodig, fiendtlig. Koblet til okt risiko for hjertesykdom (men forskningen er blandet).

**Psykonevroimmuniologi:**
Studerer samspillet mellom psyke, nervesystem og immunforsvar. Stress kan svekke immunforsvaret.

**Smerte:**
Subjektiv opplevelse pavirket av biologiske, psykologiske og sosiale faktorer. "Gate control theory": Psykologiske faktorer kan apne eller stenge "porten" for smertesignaler.

**Kronisk sykdom:**
Krever psykologisk tilpasning, mestring og ofte livsstilsendring. Depresjon er vanlig ved kronisk sykdom.`,
    },
    {
      id: 'psykologi-2-8-example-1',
      type: 'example',
      title: 'Eksempel: Motiverende intervju',
      problem: 'Hvordan kan helsepersonell hjelpe folk a endre atferd?',
      solution: `**Motiverende intervju (MI):**
En samtalemetode for a fremme indre motivasjon for endring.

**Grunnprinsipper:**
1. **Uttrykke empati:** Forsta personens perspektiv
2. **Utvikle diskrepans:** Synliggjore gapet mellom narvarende atferd og verdier/mal
3. **Rulle med motstand:** Ikke argumentere mot, men utforske ambivalens
4. **Stotte mestringstro:** Tro pa at endring er mulig

**Teknikker:**
- Apne sporsmael ("Hvordan tenker du om roykingen din?")
- Reflektiv lytting
- Bekreftelse av styrker
- Oppsummering

**Hvorfor virker det?**
Mennesker er mer motiverte av egne argumenter enn andres. MI hjelper folk a finne sin egen motivasjon i stedet for a bli fortalt hva de bor gjore.`,
    },
    {
      id: 'psykologi-2-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-8-ex-1',
        number: '8.1',
        type: 'classic',
        task: 'Forklar den biopsykososiale modellen i helsepsykologi.',
        hints: ['Tenk pa samspill mellom ulike faktorer'],
        solution: 'Den biopsykososiale modellen ser helse og sykdom som resultatet av samspill mellom biologiske faktorer (gener, virus), psykologiske faktorer (stress, mestring, atferd) og sosiale faktorer (stotte, sosiooeonomisk status). Dette gir et mer helhetlig bilde enn en rent biomedisinsk tilnaerming.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-8-ex-2',
        number: '8.2',
        type: 'classic',
        task: 'Beskriv stadiene i den transteoretiske modellen for atferdsendring.',
        hints: ['Tenk pa foroverveielse til vedlikehold'],
        solution: 'De fem stadiene er: Foroverveielse (ikke klar over problemet), Overveielse (vurderer endring), Forberedelse (planlegger), Handling (gjennomforer endring), og Vedlikehold (opprettholder endring). Folk kan bevege seg fram og tilbake mellom stadiene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-8-ex-3',
        number: '8.3',
        type: 'classic',
        task: 'Hva er placeboeffekten, og hva forteller den oss om forholdet mellom psyke og kropp?',
        hints: ['Tenk pa forventningens kraft'],
        solution: 'Placeboeffekten er bedring som skyldes forventning, ikke den aktive behandlingen. Den viser at psykologiske faktorer (tro, forventning) kan pavirke fysiske prosesser i kroppen. Dette understreker viktigheten av a ta hensyn til psykologiske faktorer i all behandling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-8-ex-4',
        number: '8.4',
        type: 'classic',
        task: 'Hvorfor er atferdsendring vanskelig, og hva kan gjore det lettere?',
        hints: ['Tenk pa barrierer og strategier'],
        solution: 'Atferdsendring er vanskelig pga.: Kortsiktig nytelse vs. langsiktig gevinst, etablerte vaner, sosiale faktorer. Det kan bli lettere ved: Klare mal, sosial stotte, endre miljo, belonne smasteg, forberede seg pa tilbakefall, og jobbe med indre motivasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-8-ex-5',
        number: '8.5',
        type: 'classic',
        task: 'Forklar grunnprinsippene i motiverende intervju.',
        hints: ['Tenk pa empati, diskrepans, motstand, mestringstro'],
        solution: 'De fire grunnprinsippene er: Uttrykke empati (forsta personens perspektiv), Utvikle diskrepans (vise gap mellom atferd og verdier), Rulle med motstand (utforske ambivalens uten a argumentere), og Stotte mestringstro (styrke tro pa at endring er mulig).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9: Anvendt psykologi i arbeidsliv
// ============================================================================

export const CHAPTER_PSYKOLOGI_2_9: TextbookChapter = {
  id: 'psykologi-2-9',
  courseId: 'psykologi-2',
  chapterNumber: '9',
  title: 'Anvendt psykologi i arbeidsliv',
  description: 'Utforsk hvordan psykologi anvendes i organisasjoner og arbeidsliv.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for sentrale temaer i arbeids- og organisasjonspsykologi',
    'analysere faktorer som pavirker motivasjon og trivsel pa jobb',
    'vurdere psykologiske aspekter ved ledelse',
  ],
  content: [
    {
      id: 'psykologi-2-9-intro',
      type: 'text',
      content: `## Arbeids- og organisasjonspsykologi

Arbeids- og organisasjonspsykologi anvender psykologisk kunnskap for a forsta og forbedre arbeidslivet.

**Sentrale omrader:**
- Rekruttering og utvelgelse
- Motivasjon og jobbengasjement
- Ledelse og lederutvikling
- Team og samarbeid
- Arbeidsmiljo og trivsel
- Stress og utbrenthet

**Hvorfor er dette viktig?**
- Vi tilbringer store deler av livet pa jobb
- God psykososial arbeidsmiljo fremmer helse
- Motiverte ansatte er mer produktive
- Darlig arbeidsmiljo er kostbart (sykefravater, turnover)

**Historisk utvikling:**
Fra Scientific Management (effektivitet) via Human Relations (sosiale behov) til dagens fokus pa mening, autonomi og balanse.`,
    },
    {
      id: 'psykologi-2-9-def-1',
      type: 'definition',
      title: 'Motivasjonsteorier',
      content: `**Maslows behovshierarki:**
Fem nivaer av behov: Fysiologiske, trygghet, tilhorighet, anerkjennelse, selvrealisering. Lavere behov ma tilfredsstilles for hoyre.

**Herzbergs to-faktorteori:**
- *Hygienefaktorer:* Lonn, arbeidsforhold, ledelse. Forebygger misnooye.
- *Motivasjonsfaktorer:* Ansvar, anerkjennelse, vekst. Skaper tilfredshet.

**Selvbestemmelsesteori (Deci & Ryan):**
Tre grunnleggende behov for indre motivasjon:
- *Autonomi:* Folelse av valgfrihet
- *Kompetanse:* Folelse av mestring
- *Tilhorighet:* Folelse av sosial tilknytning

**Jobbkrav-ressursmodellen:**
Balansen mellom krav (tidspress, kompleksitet) og ressurser (stotte, autonomi) pavirker engasjement og utbrenthet.`,
    },
    {
      id: 'psykologi-2-9-def-2',
      type: 'definition',
      title: 'Ledelse og arbeidsmiljo',
      content: `**Ledelsesteorier:**
- *Transaksjonsledelse:* Fokus pa belonning og straff, klare mael og strukturer
- *Transformasjonsledelse:* Inspirerer, utfordrer, ser den enkelte, er rollemodell
- *Tjenende ledelse:* Lederens oppgave er a tjene medarbeiderne

**Psykososialt arbeidsmiljo:**
Sosiale og psykologiske forhold pa jobben: relasjoner, stotte, rettferdighet, balanse, mening.

**Utbrenthet (burnout):**
Tilstand av fysisk og emosjonell utmattelse etter langvarig stress pa jobb.
- Emosjonell utmattelse
- Kynisme/depersonalisering
- Redusert profesjonell yteevne

**Forebygging:**
Balanse mellom krav og ressurser, sosial stotte, autonomi, meningsfullt arbeid, god ledelse.`,
    },
    {
      id: 'psykologi-2-9-example-1',
      type: 'example',
      title: 'Eksempel: Fleksibelt arbeid',
      problem: 'Hvordan kan fleksibelt arbeid pavirke motivasjon og trivsel?',
      solution: `**Fordelene med fleksibilitet:**
Ut fra selvbestemmelsesteori gir fleksibelt arbeid (hjemmekontor, fleksitid) okt autonomi, noe som styrker indre motivasjon.

**Potensielle fordeler:**
- Bedre balanse arbeid-fritid
- Okt autonomi og ansvarsfoleise
- Redusert reisetid og stresss
- Tilpassning til individuelle behov

**Potensielle ulemper:**
- Sosial isolasjon (svekker tilhorighet)
- Vanskeligere a skille arbeid og fritid
- Kan kreve hoey selvdisiplin
- Ledelse og kommunikasjon blir vanskeligere

**Konklusjon:**
Fleksibilitet bor kombineres med tiltak for a ivareta sosial tilhorighet og klare grenser. Det som fungerer varierer mellom mennesker og arbeidsoppgaver.`,
    },
    {
      id: 'psykologi-2-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-9-ex-1',
        number: '9.1',
        type: 'classic',
        task: 'Forklar de tre grunnleggende behovene i selvbestemmelsesteori.',
        hints: ['Tenk pa autonomi, kompetanse og tilhorighet'],
        solution: 'De tre behovene er: Autonomi (folelse av valgfrihet og selvbestemmelse), Kompetanse (folelse av mestring og effektivitet), og Tilhorighet (folelse av sosial tilknytning og tilhorighet). Nar disse behovene er tilfredsstilt, oker indre motivasjon og velvaere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-9-ex-2',
        number: '9.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom hygienefaktorer og motivasjonsfaktorer i Herzbergs teori.',
        hints: ['Tenk pa hva som forebygger misnoeye vs. skaper tilfredshet'],
        solution: 'Hygienefaktorer (lonn, arbeidsforhold, ledelse) kan forebygge misnoeye, men skaper ikke motivasjon. Motivasjonsfaktorer (ansvar, anerkjennelse, vekst, selve arbeidet) skaper tilfredshet og motivasjon. Begge typer ma vaere tilstede for motiverte ansatte.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-9-ex-3',
        number: '9.3',
        type: 'classic',
        task: 'Hva er utbrenthet, og hva kjennetegner tilstanden?',
        hints: ['Tenk pa de tre hovedelementene'],
        solution: 'Utbrenthet er en tilstand av fysisk og emosjonell utmattelse etter langvarig jobbstress. De tre kjennetegnene er: Emosjonell utmattelse (tappet for energi), Kynisme/depersonalisering (distansert, negativ holdning), og Redusert yteevne (folelse av a ikke mestre jobben).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-9-ex-4',
        number: '9.4',
        type: 'classic',
        task: 'Sammenlign transaksjonsledelse og transformasjonsledelse.',
        hints: ['Tenk pa fokus og virkemaler'],
        solution: 'Transaksjonsledelse fokuserer pa utveksling (belonning for innsats), klare mael og strukturer - leder og folger har en "transaksjon". Transformasjonsledelse fokuserer pa a inspirere, utfordre intellektuelt, se den enkelte, og vaere rollemodell - lederen "transformerer" medarbeiderne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-9-ex-5',
        number: '9.5',
        type: 'classic',
        task: 'Hvordan kan en arbeidsgiver fremme et godt psykososialt arbeidsmiljo?',
        hints: ['Tenk pa behovsteorier og forebygging av utbrenthet'],
        solution: 'Arbeidsgiver kan: Gi ansatte autonomi og medbestemmelse, sikre rimelig arbeidsbelastning, fremme sosial stotte og godt samarbeid, anerkjenne innsats, tilby muligheter for utvikling, sikre rettferdig behandling, og ha god kommunikasjon og ledelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: Etikk i psykologisk forskning og praksis
// ============================================================================

export const CHAPTER_PSYKOLOGI_2_10: TextbookChapter = {
  id: 'psykologi-2-10',
  courseId: 'psykologi-2',
  chapterNumber: '10',
  title: 'Etikk i psykologisk forskning og praksis',
  description: 'Forsta etiske prinsipper og dilemmaer i psykologien.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjore rede for etiske prinsipper i psykologisk forskning',
    'analysere etiske dilemmaer i psykologisk praksis',
    'vurdere historiske eksempler pa etiske brudd',
  ],
  content: [
    {
      id: 'psykologi-2-10-intro',
      type: 'text',
      content: `## Etikk i psykologien

Psykologer arbeider med sarbare mennesker og har tilgang til sensitiv informasjon. Dette medforer et stort etisk ansvar.

**Hvorfor er etikk viktig?**
- Beskytter forskningsdeltakere og klienter
- Sikrer tillit til psykologien som fag
- Veileder vanskelige beslutninger
- Forebygger skade og overgrep

**Etiske retningslinjer:**
- Norsk psykologforenings etiske prinsipper
- Helsinkideklarasjonen (medisinsk forskning)
- APA Ethical Principles (amerikansk)

**Etiske organer:**
- Regionale etiske komiteer (REK) godkjenner forskning
- Psykologforeningens fagetiske rad behandler klager`,
    },
    {
      id: 'psykologi-2-10-def-1',
      type: 'definition',
      title: 'Etiske prinsipper i forskning',
      content: `**Informert samtykke:**
Deltakere ma fa tilstrekkelig informasjon til a ta en frivillig beslutning om a delta.
- Forstar hva studien gar ut pa
- Kjenner risiko og fordeler
- Vet at de kan trekke seg nar som helst
- Samtykker frivillig, uten press

**Konfidensialitet:**
Opplysninger ma beskyttes og anonymiseres. Unntak kun ved fare for liv og helse.

**Minimere skade:**
Forskningen ma ikke pafare unodvendig fysisk eller psykisk belastning.

**Debriefing:**
Etter studien informeres deltakere om formalat og eventuelle villedende elementer.

**Saerlige hensyn:**
Ekstra forsiktighet med sarbare grupper (barn, psykisk syke, innsatte).`,
    },
    {
      id: 'psykologi-2-10-def-2',
      type: 'definition',
      title: 'Etiske dilemmaer i praksis',
      content: `**Taushetsplikt:**
Grunnleggende prinsipp, men kan brytes ved fare for liv (f.eks. selvmordsfare, vold mot andre).

**Doble relasjoner:**
Unnga roller som kan kompromittere den profesjonelle relasjonen (f.eks. behandle venner, familiemedlemmer).

**Grenser:**
Opprettholde klare grenser mellom profesjonell og privat sfaere.

**Kompetanse:**
Kun arbeide innenfor eget kompetanseomrade. Henvise videre nar nodvendig.

**Autonomi vs. paternalisme:**
Respektere klientens selvbestemmelse, men ogsa ansvar for a beskytte mot skade.

**Kulturell sensitivitet:**
Vare bevisst egne kulturelle forstaelsesrammer og tilpasse praksisen.`,
    },
    {
      id: 'psykologi-2-10-example-1',
      type: 'example',
      title: 'Eksempel: Kontroversielle studier',
      problem: 'Hva kan vi lare av etisk problematiske studier fra fortiden?',
      solution: `**Milgram-eksperimentet (1961):**
Deltakere trodde de ga elektriske stot til andre. Viste lydighet til autoritet, men ga deltakere psykisk belastning og ikke fullstendig informert samtykke.

**Stanford fengselsstudie (1971):**
Studenter spilte fanger og fangevoktere. Matte avbrytes pga. psykisk skade. Manglet tilstrekkelige sikkerhetstiltak.

**Hva laerte vi:**
- Viktigheten av informert samtykke
- Nodvendigheten av a minimere skade
- Behov for uavhengig etisk vurdering
- At debriefing og oppfolging er viktig

**I dag:**
Slike studier ville ikke blitt godkjent. Etiske komiteer vurderer all forskning pa forhand. Men studiene ga viktig kunnskap (lydighet, situasjonens makt) som fortsatt er relevant.`,
    },
    {
      id: 'psykologi-2-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-10-ex-1',
        number: '10.1',
        type: 'classic',
        task: 'Forklar hva informert samtykke innebarer i psykologisk forskning.',
        hints: ['Tenk pa hva deltakeren ma vite og forsta'],
        solution: 'Informert samtykke innebarer at deltakeren far tilstrekkelig informasjon om studiens formal, prosedyrer, risiko og fordeler. Deltakelsen ma vaere frivillig uten press, og personen ma vite at de kan trekke seg nar som helst uten konsekvenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-10-ex-2',
        number: '10.2',
        type: 'classic',
        task: 'Hva var de etiske problemene med Milgram-eksperimentet?',
        hints: ['Tenk pa informert samtykke, skade, bedrag'],
        solution: 'Etiske problemer inkluderte: Mangelfult informert samtykke (deltakerne visste ikke hva de egentlig studerte), psykisk belastning (stress, skyldfolelse), bedrag (stokkene var ikke ekte), og utilstrekkelig debriefing og oppfolging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-10-ex-3',
        number: '10.3',
        type: 'classic',
        task: 'Nar kan en psykolog bryte taushetsplikten?',
        hints: ['Tenk pa fare for liv og helse'],
        solution: 'Taushetsplikten kan brytes nar det er fare for liv og helse - for eksempel ved akutt selvmordsfare, nar klienten truer med vold mot navngitte personer, eller ved mistanke om alvorlig omsorgssvikt av barn. Psykologen ma da vurdere hvem som ma varsles.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-10-ex-4',
        number: '10.4',
        type: 'classic',
        task: 'Hva menes med "doble relasjoner" i psykologisk praksis, og hvorfor er de problematiske?',
        hints: ['Tenk pa ulike roller og interessekonflikter'],
        solution: 'Doble relasjoner oppstar nar psykologen har flere roller overfor samme person (f.eks. terapeut og venn, foreleser og student). De er problematiske fordi de kan kompromittere objektivitet, skape interessekonflikter, og gjore det vanskelig a opprettholde profesjonelle grenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-2-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psykologi-2-10-ex-5',
        number: '10.5',
        type: 'classic',
        task: 'Drofte dilemmaet mellom respekt for autonomi og plikt til a beskytte i psykologisk praksis.',
        hints: ['Tenk pa selvbestemmelse vs. sikkerhet'],
        solution: 'Respekt for autonomi betyr a respektere klientens rett til a ta egne valg. Plikt til a beskytte kan kreve inngripen mot klientens vilje. Dilemmaet oppstar f.eks. ved selvskading: Bor psykologen gripe inn (paternalistisk) eller respektere valget (autonomi)? Losningen krever avveiing av skade, beslutningsevne og kontekst.',
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

export const PSYKOLOGI_2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_PSYKOLOGI_2_1,
  CHAPTER_PSYKOLOGI_2_2,
  CHAPTER_PSYKOLOGI_2_3,
  CHAPTER_PSYKOLOGI_2_4,
  CHAPTER_PSYKOLOGI_2_5,
  CHAPTER_PSYKOLOGI_2_6,
  CHAPTER_PSYKOLOGI_2_7,
  CHAPTER_PSYKOLOGI_2_8,
  CHAPTER_PSYKOLOGI_2_9,
  CHAPTER_PSYKOLOGI_2_10,
];
