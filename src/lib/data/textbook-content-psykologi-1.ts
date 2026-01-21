/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Psykologi 1 (VG2/VG3 valgfag)
 *
 * Folger LK20 lareplan for psykologi 1 (PSY01-01).
 * Dekker grunnleggende psykologi, biologisk psykologi, kognisjon,
 * laring, motivasjon, utvikling, personlighet, sosialpsykologi,
 * psykisk helse og anvendt psykologi.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Hva er psykologi?
// ============================================================================

export const CHAPTER_PSYKOLOGI_1_1: TextbookChapter = {
  id: 'psykologi-1-1',
  courseId: 'psykologi-1',
  chapterNumber: '1',
  title: 'Hva er psykologi?',
  description: 'En introduksjon til psykologifaget, dets historie og hovedretninger.',
  estimatedMinutes: 60,
  competenceGoals: [
    'gjore rede for hva psykologi er som vitenskap',
    'beskrive sentrale psykologiske retninger',
    'forklare hvordan psykologisk kunnskap utvikles gjennom forskning',
  ],
  content: [
    {
      id: 'psykologi-1-1-intro',
      type: 'text',
      content: `## Velkommen til psykologien

Psykologi er vitenskapen om atferd og mentale prosesser. Ordet kommer fra gresk: *psyche* (sjel) og *logos* (lare). Psykologer studerer hvordan vi tenker, foler, handler og samhandler med andre.

**Psykologiens formal:**
- Beskrive atferd og mentale prosesser
- Forklare hvorfor vi tenker og handler som vi gjor
- Forutsi fremtidig atferd
- Pavirke og endre atferd (f.eks. i terapi)

**Hva skiller psykologi fra andre fag?**
- Filosofi: Stiller lignende sporsamal, men psykologi bruker vitenskapelige metoder
- Sosiologi: Studerer grupper og samfunn, psykologi fokuserer pa individet
- Biologi: Psykologi inkluderer biologiske faktorer, men ogsa tanker og folelser
- Psykiatri: Er medisin, psykologi er ikke begrenset til psykiske lidelser`,
    },
    {
      id: 'psykologi-1-1-def-1',
      type: 'definition',
      title: 'Psykologiens historie',
      content: `**Filosofiske roetter:**
Gamle grekere som Platon og Aristoteles diskuterte sjelens natur. Descartes skilte mellom kropp og sjel (dualisme).

**Psykologiens fodsel (1879):**
Wilhelm Wundt opprettet verdens forste psykologilaboratorium i Leipzig. Han brukte introspeksjon - systematisk selvobservasjon.

**Viktige milepaler:**
- 1879: Wundts laboratorium
- 1890: William James utgir "Principles of Psychology"
- 1900: Freuds psykoanalyse
- 1913: Watson grunnlegger behaviorismen
- 1950-tallet: Den kognitive revolusjon
- 1960-tallet: Humanistisk psykologi
- I dag: Integrering av biologiske, kognitive og sosiale perspektiver`,
    },
    {
      id: 'psykologi-1-1-def-2',
      type: 'definition',
      title: 'Psykologiske hovedretninger',
      content: `**Psykoanalyse (Freud):**
Fokuserer pa ubevisste prosesser, barndomserfaringer og indre konflikter. Bruker teknikker som fri assosiasjon og drommetydning.

**Behaviorisme (Watson, Skinner):**
Studerer kun observerbar atferd. Atferd lares gjennom betinging. Avviser fokus pa indre mentale prosesser.

**Kognitiv psykologi:**
Studerer mentale prosesser som tenkning, hukommelse, persepsjon og problemlosning. Sammenligner ofte sinnet med en datamaskin.

**Humanistisk psykologi (Maslow, Rogers):**
Vektlegger personlig vekst, selvrealisering og frie valg. Ser mennesket som grunnleggende godt.

**Biologisk psykologi:**
Forklarer atferd ut fra hjernen, gener, hormoner og evolusjon.

**Sosialpsykologi:**
Studerer hvordan andre mennesker pavirker vare tanker, folelser og handlinger.`,
    },
    {
      id: 'psykologi-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Ulike perspektiver pa aggresjon',
      problem: 'Hvordan forklarer de ulike retningene aggressiv atferd?',
      solution: `**Psykoanalytisk:**
Aggresjon er et uttrykk for undertrykte drifter eller ubevisste konflikter fra barndommen.

**Behavioristisk:**
Aggresjon er lart atferd - enten gjennom forsterkning (man far det man vil) eller observasjonslaring (man ser andre vaere aggressive).

**Kognitiv:**
Aggresjon skyldes hvordan vi tolker situasjoner. Hvis vi oppfatter noe som en trussel eller provokasjon, reagerer vi aggressivt.

**Biologisk:**
Aggresjon pavirkes av hormoner (testosteron), nevrotransmittere (serotonin) og hjernestrukturer (amygdala).

**Sosialpsykologisk:**
Aggresjon pavirkes av sosiale normer, gruppepress og deindividuering (tap av personlig identitet i mengder).`,
    },
    {
      id: 'psykologi-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-1-ex-1',
        number: '1.1',
        type: 'classic',
        task: 'Forklar hva psykologi er, og nevn de fire hovedformalene med psykologisk forskning.',
        hints: ['Tenk pa beskrive, forklare, forutsi, pavirke'],
        solution: 'Psykologi er vitenskapen om atferd og mentale prosesser. De fire hovedformalene er: 1) Beskrive atferd og mentale prosesser, 2) Forklare hvorfor vi tenker og handler som vi gjor, 3) Forutsi fremtidig atferd basert pa kunnskap, 4) Pavirke og endre atferd, for eksempel gjennom terapi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-1-ex-2',
        number: '1.2',
        type: 'classic',
        task: 'Beskriv kort de tre folgende psykologiske retningene: behaviorisme, kognitiv psykologi og psykoanalyse.',
        hints: ['Tenk pa hva hver retning fokuserer pa'],
        solution: 'Behaviorisme fokuserer kun pa observerbar atferd og hvordan den lares gjennom betinging. Kognitiv psykologi studerer mentale prosesser som tenkning, hukommelse og problemlosning. Psykoanalyse fokuserer pa ubevisste prosesser, barndomserfaringer og indre konflikter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-1-ex-3',
        number: '1.3',
        type: 'classic',
        task: 'Hvorfor regnes Wilhelm Wundt som psykologiens grunnlegger?',
        hints: ['Tenk pa hva han gjorde i 1879'],
        solution: 'Wilhelm Wundt regnes som psykologiens grunnlegger fordi han i 1879 opprettet verdens forste psykologilaboratorium i Leipzig, Tyskland. Han gjorde psykologi til en selvstendig vitenskap ved a bruke systematiske, eksperimentelle metoder for a studere bevissthet og mentale prosesser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-1-ex-4',
        number: '1.4',
        type: 'classic',
        task: 'Velg en atferd (f.eks. spising, frykt, hjelpsomhet) og forklar den fra minst to ulike psykologiske perspektiver.',
        hints: ['Bruk perspektivene du har lart om'],
        solution: 'Eksempel med frykt: Biologisk perspektiv - frykt aktiverer amygdala og utloser kamp-eller-flukt-respons med hormoner som adrenalin. Kognitiv perspektiv - frykt avhenger av hvordan vi tolker en situasjon som truende. Behavioristisk perspektiv - frykt kan lares gjennom klassisk betinging (Watson og lille Albert).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-1-ex-5',
        number: '1.5',
        type: 'classic',
        task: 'Hva skiller psykologi fra filosofi og sosiologi?',
        hints: ['Tenk pa metoder og fokusomrade'],
        solution: 'Psykologi skiller seg fra filosofi ved a bruke vitenskapelige og empiriske metoder, mens filosofi ofte baserer seg pa logisk argumentasjon. Psykologi fokuserer pa individet, mens sosiologi studerer grupper, institusjoner og samfunnsstrukturer. Psykologi bruker eksperimenter og observasjoner for a teste hypoteser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Biologisk psykologi
// ============================================================================

export const CHAPTER_PSYKOLOGI_1_2: TextbookChapter = {
  id: 'psykologi-1-2',
  courseId: 'psykologi-1',
  chapterNumber: '2',
  title: 'Biologisk psykologi',
  description: 'Utforsk hjernens struktur og funksjon, nervesystemet og hormoner.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjore rede for hjernens oppbygning og funksjon',
    'forklare hvordan nevroner kommuniserer',
    'beskrive nervesystemets organisering',
  ],
  content: [
    {
      id: 'psykologi-1-2-intro',
      type: 'text',
      content: `## Hjernen - kroppens kontrollsenter

Biologisk psykologi studerer sammenhengen mellom kropp og sinn. Hjernen er det mest komplekse organet vi kjenner til, med ca. 86 milliarder nevroner som kommuniserer gjennom billioner av forbindelser.

**Hvorfor studere hjernen?**
- All atferd, tanker og folelser har et biologisk grunnlag
- Hjerneskader kan endre personlighet og atferd
- Psykiske lidelser har biologiske komponenter
- Medisiner virker pa hjernen

**Metoder for a studere hjernen:**
- Hjerneavbildning (fMRI, PET, EEG)
- Studier av hjerneskader
- Dyreforsok
- Stimulering av hjernen (TMS)`,
    },
    {
      id: 'psykologi-1-2-def-1',
      type: 'definition',
      title: 'Nervesystemets oppbygning',
      content: `**Sentralnervesystemet (SNS):**
- *Hjernen:* Kontrollerer hoyre funksjoner, bevegelse, sanser
- *Ryggmargen:* Bindeledd mellom hjerne og kropp, reflekser

**Det perifere nervesystemet (PNS):**
- *Somatisk nervesystem:* Styrer vilkarlig bevegelse og sanser
- *Autonomt nervesystem:* Styrer indre organer automatisk
  - Sympatisk: "Kamp eller flukt" - aktiverer
  - Parasympatisk: "Hvile og fordoyelse" - roer ned

**Nevronet - nervecellen:**
- Dendritter: Mottar signaler
- Cellekroppen: Inneholder kjernen
- Aksonet: Sender signaler videre
- Synapse: Koblingspunkt mellom nevroner`,
    },
    {
      id: 'psykologi-1-2-def-2',
      type: 'definition',
      title: 'Hjernens hovedstrukturer',
      content: `**Hjernestammen:**
Styrer livsviktige funksjoner som pust, hjerteslag og vakenhet.

**Lillehjernen (cerebellum):**
Koordinerer bevegelser og balanse. Viktig for motorisk laring.

**Det limbiske system:**
- *Amygdala:* Folelser, spesielt frykt
- *Hippocampus:* Hukommelse og laring
- *Hypothalamus:* Regulerer hormoner, sult, torst, temperatur

**Hjernebarken (cortex):**
- *Pannelappen (frontal):* Planlegging, impulskontroll, personlighet
- *Isselappen (parietal):* Beroring, romlig orientering
- *Tinninglappen (temporal):* Horsel, sprak, hukommelse
- *Bakhodelappen (occipital):* Syn`,
    },
    {
      id: 'psykologi-1-2-def-3',
      type: 'definition',
      title: 'Nevrotransmittere og hormoner',
      content: `**Nevrotransmittere (kjemiske budbringere i hjernen):**
- *Dopamin:* Belonning, motivasjon, bevegelse
- *Serotonin:* Stemningsleie, sovn, appetitt
- *Noradrenalin:* Vakenhet, oppmerksomhet
- *GABA:* Hemmer nervesignaler, demper angst
- *Glutamat:* Aktiverer nervesignaler, laring

**Hormoner (kjemiske budbringere i kroppen):**
- *Adrenalin:* Stressrespons, aktivering
- *Kortisol:* Langvarig stressrespons
- *Testosteron:* Maskulinisering, aggresjon
- *Ostrogen:* Feminisering, humorssvingninger
- *Oksytocin:* Tilknytning, tillit`,
    },
    {
      id: 'psykologi-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Phineas Gage',
      problem: 'Hva laerte vi om hjernen fra tilfellet Phineas Gage?',
      solution: `**Hva skjedde:**
I 1848 fikk jernbanearbeideren Phineas Gage en jernstang gjennom hodet i en ulykke. Stangen gikk inn under venstre oye og ut gjennom toppen av hodet, og oedela store deler av pannelappen.

**Overraskende nok overlevde han.**

**Personlighetsendringer:**
For ulykken var Gage ansvarlig, hoeflig og hardtarbeidende. Etter ulykken ble han impulsiv, uhoeflig og upålitelig. Vennene sa at han "ikke lenger var Gage."

**Hva vi laerte:**
- Pannelappen er viktig for personlighet og impulskontroll
- Ulike hjernedeler har ulike funksjoner (lokalisasjon)
- Hjerneskade kan endre atferd uten a pavirke andre funksjoner`,
    },
    {
      id: 'psykologi-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-2-ex-1',
        number: '2.1',
        type: 'classic',
        task: 'Beskriv nevronets struktur og forklar hvordan signaler overfortes mellom nevroner.',
        hints: ['Tenk pa dendritter, akson, synapse og nevrotransmittere'],
        solution: 'Et nevron bestar av dendritter (mottar signaler), cellekropp (behandler informasjon) og akson (sender signaler). Signaler overfortes elektrisk langs aksonet. Ved synapsen frigjores nevrotransmittere som binder til reseptorer pa neste nevron og kan utlose et nytt signal.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-2-ex-2',
        number: '2.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom det sympatiske og det parasympatiske nervesystemet.',
        hints: ['Tenk pa kamp/flukt vs. hvile/fordoyelse'],
        solution: 'Det sympatiske nervesystemet aktiveres ved stress og fare - det forbereder kroppen pa handling (oker hjertefrekvens, utvider pupiller, frigjor energi). Det parasympatiske nervesystemet dominerer i hvile og fremmer gjenoppbygging (senker pulsen, stimulerer fordoyelse).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-2-ex-3',
        number: '2.3',
        type: 'classic',
        task: 'Nevn tre viktige nevrotransmittere og beskriv deres funksjoner.',
        hints: ['Tenk pa dopamin, serotonin, noradrenalin'],
        solution: 'Dopamin er viktig for belonning, motivasjon og bevegelskontroll (for lite ved Parkinson). Serotonin pavirker stemningsleie, sovn og appetitt (lavt niva kobles til depresjon). Noradrenalin er viktig for vakenhet og oppmerksomhet, og frigjores ved stress.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-2-ex-4',
        number: '2.4',
        type: 'classic',
        task: 'Beskriv de fire lappene i hjernebarken og deres hovedfunksjoner.',
        hints: ['Pannelapp, isselapp, tinninglapp, bakhodelapp'],
        solution: 'Pannelappen (frontal): planlegging, impulskontroll, personlighet, motorikk. Isselappen (parietal): beroring, romlig orientering. Tinninglappen (temporal): horsel, sprak, hukommelse. Bakhodelappen (occipital): synsprosessering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-2-ex-5',
        number: '2.5',
        type: 'classic',
        task: 'Hva er det limbiske system, og hvilke strukturer inngår i det?',
        hints: ['Tenk pa folelser og hukommelse'],
        solution: 'Det limbiske system er en gruppe strukturer dypt i hjernen som er viktige for folelser og hukommelse. Det inkluderer amygdala (folelser, spesielt frykt), hippocampus (danning av nye minner) og hypothalamus (regulering av hormoner, sult, torst og temperatur).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-2-ex-6',
        number: '2.6',
        type: 'classic',
        task: 'Hvordan kan studier av hjerneskader hjelpe oss a forsta hjernens funksjoner?',
        hints: ['Tenk pa Phineas Gage og lokalisasjon'],
        solution: 'Nar en bestemt hjernedel skades og spesifikke funksjoner svikter, kan vi slutte at denne hjernedelen er viktig for disse funksjonene. For eksempel viste tilfellet Phineas Gage at pannelappen er viktig for personlighet og impulskontroll. Slike studier har bidratt til kunnskap om lokalisasjon av funksjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Kognitiv psykologi
// ============================================================================

export const CHAPTER_PSYKOLOGI_1_3: TextbookChapter = {
  id: 'psykologi-1-3',
  courseId: 'psykologi-1',
  chapterNumber: '3',
  title: 'Kognitiv psykologi',
  description: 'Utforsk persepsjon, oppmerksomhet, hukommelse og tenkning.',
  estimatedMinutes: 80,
  competenceGoals: [
    'gjore rede for sentrale kognitive prosesser',
    'forklare hvordan hukommelse fungerer',
    'beskrive faktorer som pavirker oppmerksomhet og persepsjon',
  ],
  content: [
    {
      id: 'psykologi-1-3-intro',
      type: 'text',
      content: `## Hvordan vi tenker og oppfatter verden

Kognitiv psykologi studerer mentale prosesser - hvordan vi tar inn, bearbeider, lagrer og bruker informasjon. Ordet "kognitiv" kommer fra latin *cognoscere*, som betyr "a kjenne" eller "a vite".

**Sentrale kognitive prosesser:**
- Persepsjon - hvordan vi tolker sanseinntrykk
- Oppmerksomhet - hva vi fokuserer pa
- Hukommelse - hvordan vi lagrer og henter informasjon
- Tenkning - hvordan vi resonnerer og loser problemer
- Sprak - hvordan vi forstar og produserer sprak

**Den kognitive revolusjonen:**
Pa 1950-60-tallet begynte psykologer a studere mentale prosesser igjen etter behaviorismens dominans. Datamaskinen ble en viktig metafor - sinnet som en informasjonsprosessor.`,
    },
    {
      id: 'psykologi-1-3-def-1',
      type: 'definition',
      title: 'Persepsjon og oppmerksomhet',
      content: `**Persepsjon:**
Prosessen der vi organiserer og tolker sanseinntrykk for a gi dem mening. Vi oppfatter ikke verden passivt - hjernen konstruerer aktivt var opplevelse.

**Top-down vs. bottom-up:**
- *Bottom-up:* Prosessering starter med sanseinntrykkene
- *Top-down:* Tidligere kunnskap og forventninger pavirker hva vi oppfatter

**Gestaltprinsipper:**
Vi organiserer sanseinntrykk i meningsfulle helheter:
- Narhet: Ting som er naer hverandre, grupperes
- Likhet: Like ting grupperes sammen
- Lukking: Vi "fyller inn" manglende deler
- Kontinuitet: Vi foretrekker glatte, sammenhengende linjer

**Oppmerksomhet:**
Vi kan bare bearbeide begrenset informasjon om gangen. Selektiv oppmerksomhet velger ut hva vi fokuserer pa. "Cocktailparty-effekten" - vi kan plutselig hore navnet vart i en samtale vi ikke fulgte med pa.`,
    },
    {
      id: 'psykologi-1-3-def-2',
      type: 'definition',
      title: 'Hukommelsens struktur',
      content: `**Sensorisk hukommelse:**
Svart kortvarig lagring av sanseinntrykk (under 1 sekund). Ikonisk (syn) varer ca. 0,5 sek, ekoisk (horsel) varer ca. 3-4 sek.

**Korttidshukommelse/arbeidsminne:**
Midlertidig lagring og bearbeiding av informasjon.
- Kapasitet: Ca. 7 +/- 2 enheter (Millers magiske tall)
- Varighet: 15-30 sekunder uten repetisjon
- Arbeidsminne: Aktiv bearbeiding, ikke bare lagring

**Langtidshukommelse:**
Tilsynelatende ubegrenset kapasitet og varighet.
- *Eksplisitt (deklarativ):* Bevisst hukommelse
  - Episodisk: Personlige opplevelser
  - Semantisk: Faktakunnskap
- *Implisitt (prosedural):* Ubevisst hukommelse
  - Ferdigheter og vaner (sykle, skrive)`,
    },
    {
      id: 'psykologi-1-3-def-3',
      type: 'definition',
      title: 'Glemsel og hukommelsesfeil',
      content: `**Hvorfor glemmer vi?**
- *Forfall:* Minnespor svekkes over tid
- *Interferens:* Annen informasjon forstyrrer
  - Proaktiv: Gammel kunnskap forstyrrer ny
  - Retroaktiv: Ny kunnskap forstyrrer gammel
- *Mangelfull innkoding:* Informasjonen ble aldri ordentlig lagret
- *Gjenkallingssvikt:* Informasjonen finnes, men er vanskelig a hente

**Hukommelsen er konstruktiv:**
Vi husker ikke som et videokamera. Minner rekonstrueres hver gang de hentes, og kan endres.

**Falske minner:**
Det er mulig a "huske" ting som aldri skjedde. Elizabeth Loftus viste at ledende sporsamal kan skape falske minner - viktig i rettssaker.`,
    },
    {
      id: 'psykologi-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Chunking og hukommelse',
      problem: 'Hvordan kan vi huske mer informasjon enn korttidshukommelsens kapasitet tillater?',
      solution: `**Chunking (gruppering):**
Ved a gruppere informasjon i meningsfulle enheter kan vi "jukse" med kapasitetsbegrensningen.

**Eksempel:**
Telefonnummeret 98765432 er 8 sifre - for mye for korttidshukommelsen.

Men gruppert som 987-654-32 blir det bare 3 enheter.

**Enda bedre:**
Hvis tallene har mening (987 er et arstaIl, 654 er en adresse), blir de enda lettere a huske.

**Eksperter bruker chunking:**
Sjakkspillere husker ikke enkeltbrikker, men typiske stillinger. Eksperter i et felt kan huske mer fordi de organiserer informasjonen i store, meningsfulle enheter.`,
    },
    {
      id: 'psykologi-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-3-ex-1',
        number: '3.1',
        type: 'classic',
        task: 'Forklar forskjellen mellom sensorisk hukommelse, korttidshukommelse og langtidshukommelse.',
        hints: ['Tenk pa varighet og kapasitet'],
        solution: 'Sensorisk hukommelse varer under 1 sekund og holder rå sanseinntrykk. Korttidshukommelse varer 15-30 sekunder og holder ca. 7 enheter. Langtidshukommelse har tilsynelatende ubegrenset kapasitet og varighet, og lagrer informasjon mer permanent.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-3-ex-2',
        number: '3.2',
        type: 'classic',
        task: 'Hva er forskjellen mellom eksplisitt og implisitt hukommelse? Gi eksempler.',
        hints: ['Tenk pa bevisst vs. ubevisst'],
        solution: 'Eksplisitt hukommelse er bevisst og kan uttrykkes i ord - episodisk (personlige minner som "min forste skoledag") og semantisk (fakta som "Paris er Frankrikes hovedstad"). Implisitt hukommelse er ubevisst og vises gjennom handling, som a sykle eller skrive pa tastatur.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-3-ex-3',
        number: '3.3',
        type: 'classic',
        task: 'Forklar hva som menes med at hukommelsen er konstruktiv.',
        hints: ['Tenk pa rekonstruksjon og falske minner'],
        solution: 'Hukommelsen er konstruktiv fordi vi ikke lagrer og henter minner som en videoopptaker. I stedet rekonstruerer vi minner hver gang vi henter dem, og de kan pavirkes av var navaerende kunnskap, forventninger og informasjon vi far i ettertid. Dette kan fore til hukommelsesfeil og falske minner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-3-ex-4',
        number: '3.4',
        type: 'classic',
        task: 'Hva er gestaltprinsipper, og nevn minst tre eksempler.',
        hints: ['Tenk pa hvordan vi organiserer sanseinntrykk'],
        solution: 'Gestaltprinsipper beskriver hvordan vi automatisk organiserer sanseinntrykk i meningsfulle helheter. Eksempler: Narhet (ting som er naer hverandre grupperes), likhet (like ting grupperes), lukking (vi fyller inn manglende deler), kontinuitet (vi foretrekker glatte linjer), figur-grunn (vi skiller figurer fra bakgrunn).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-3-ex-5',
        number: '3.5',
        type: 'classic',
        task: 'Forklar forskjellen mellom top-down og bottom-up prosessering i persepsjon.',
        hints: ['Tenk pa sanseinntrykk vs. forventninger'],
        solution: 'Bottom-up prosessering starter med sanseinntrykk og bygger opp en oppfattelse fra delene. Top-down prosessering bruker tidligere kunnskap, forventninger og kontekst til a tolke det vi sanser. I praksis samarbeider begge - vi bruker bade sansedata og forventninger for a forsta verden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-3-ex-6',
        number: '3.6',
        type: 'classic',
        task: 'Beskriv tre effektive laringsstrategier basert pa kunnskap om hukommelse.',
        hints: ['Tenk pa elaborering, spredt repetisjon, testing'],
        solution: 'Effektive strategier: 1) Elaborering - koble ny informasjon til det du allerede vet gjennom dype, meningsfulle assosiasjoner. 2) Spredt repetisjon - repeter med okende mellomrom i stedet for a pugge alt pa en gang. 3) Testing - a teste seg selv er mer effektivt enn bare a lese igjen fordi aktiv gjenkalling styrker minnespor.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Laring og atferd
// ============================================================================

export const CHAPTER_PSYKOLOGI_1_4: TextbookChapter = {
  id: 'psykologi-1-4',
  courseId: 'psykologi-1',
  chapterNumber: '4',
  title: 'Laring og atferd',
  description: 'Forsta hvordan vi larer gjennom betinging, observasjon og erfaring.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjore rede for klassisk og operant betinging',
    'forklare observasjonslaring',
    'analysere hvordan laring pavirker atferd',
  ],
  content: [
    {
      id: 'psykologi-1-4-intro',
      type: 'text',
      content: `## Hvordan larer vi?

Laring er en relativt varig endring i atferd eller kunnskap som skyldes erfaring. Vi larer hele tiden - fra vi er nyfodte til vi dor.

**Hovedformer for laring:**
- Klassisk betinging (assosiasjonslaring)
- Operant betinging (konsekvenslaering)
- Observasjonslaring (sosial laring)
- Kognitiv laring (innsiktslaring)

**Behavioristenes bidrag:**
Behaviorister som Watson og Skinner viste at mye av atferden var kan forklares gjennom enkle laringsprinsipper. De fokuserte pa observerbar atferd og miljoets pavirkning.

**Moderne syn:**
I dag anerkjenner vi at laring ogsa involverer kognitive prosesser - tanker, forventninger og tolkninger pavirker hva og hvordan vi larer.`,
    },
    {
      id: 'psykologi-1-4-def-1',
      type: 'definition',
      title: 'Klassisk betinging',
      content: `**Ivan Pavlovs oppdagelse (1890-tallet):**
Hunder begynte a sikle nar de hotte skrittene til den som skulle gi dem mat - for de sa maten.

**Grunnleggende begreper:**
- *Ubetinget stimulus (UBS):* Utloser automatisk respons (mat)
- *Ubetinget respons (UBR):* Automatisk reaksjon pa UBS (sikkel)
- *Betinget stimulus (BS):* Noytral stimulus som blir assosiert med UBS (bjelle)
- *Betinget respons (BR):* Lart reaksjon pa BS (sikkel ved bjelle)

**Prosessen:**
For: Bjelle -> ingen respons, Mat -> sikkel
Laring: Bjelle + Mat -> sikkel (gjentatte ganger)
Etter: Bjelle alene -> sikkel

**Viktige fenomener:**
- *Ekstinksjon:* BR svekkes hvis BS presenteres alene
- *Generalisering:* Lignende stimuli utloser BR
- *Diskriminering:* Larer a skille mellom stimuli`,
    },
    {
      id: 'psykologi-1-4-def-2',
      type: 'definition',
      title: 'Operant betinging',
      content: `**B.F. Skinners bidrag:**
Atferd formes av sine konsekvenser. Atferd som forsterkes, gjentas. Atferd som straffes, avtar.

**Forsterkning (oker atferd):**
- *Positiv forsterkning:* Noe behagelig legges til (ros, belonning)
- *Negativ forsterkning:* Noe ubehagelig fjernes (smerte forsvinner)

**Straff (reduserer atferd):**
- *Positiv straff:* Noe ubehagelig legges til (irettesettelse)
- *Negativ straff:* Noe behagelig fjernes (mister privilegier)

**Forsterkningsskjemaer:**
- *Kontinuerlig:* Forsterkning hver gang - rask laring, rask ekstinksjon
- *Intermitterende:* Forsterkning noen ganger - langsommere laring, mer motstandsdyktig

**Typer intermitterende forsterkning:**
- Fast ratio (hver n-te respons)
- Variabel ratio (tilfeldig antall)
- Fast intervall (forste respons etter tid)
- Variabel intervall (tilfeldig tid)`,
    },
    {
      id: 'psykologi-1-4-def-3',
      type: 'definition',
      title: 'Observasjonslaring',
      content: `**Albert Banduras sosiale laringsteori:**
Vi larer ikke bare gjennom egne erfaringer, men ogsa ved a observere andre.

**Bobo-dukke-eksperimentet (1961):**
Barn som sa voksne vaere aggressive mot en dukke, imiterte denne atferden. Barn som sa ikke-aggressiv atferd, var mindre aggressive.

**Fire prosesser i observasjonslaring:**
1. *Oppmerksomhet:* Ma legge merke til modellen
2. *Hukommelse:* Ma huske det observerte
3. *Reproduksjon:* Ma kunne gjenskape atferden
4. *Motivasjon:* Ma onsake a utfore atferden

**Vikarterende forsterkning:**
Vi larer ogsa av konsekvensene andre far. Ser vi at noen blir belennet, er vi mer tilbayelige til a imitere. Ser vi straff, unngår vi atferden.

**Betydning:**
Forklarer hvordan barn larer aggressiv atferd, kjonnsstereotypier, sosiale ferdigheter osv.`,
    },
    {
      id: 'psykologi-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Lille Albert',
      problem: 'Hvordan viste Watson at frykt kan laeres gjennom klassisk betinging?',
      solution: `**Watson og Rayners eksperiment (1920):**
Lille Albert var et 9 maneder gammelt spedbarn. Han likte a leke med hvite rotter.

**Prosedyre:**
1. Albert ble vist en hvit rotte (noytral stimulus)
2. Samtidig ble det laget en hey, skremende lyd (UBS)
3. Albert ble skremt og graet (UBR)
4. Etter flere paringer: rotta alene fikk Albert til a grate (BR)

**Generalisering:**
Frykten spredte seg til andre hvite, lodne ting - kaniner, pels, julenisse-maske.

**Betydning:**
- Viste at folelser kan laeres gjennom klassisk betinging
- Viktig for forstaelse av fobier
- Etisk svart problematisk etter dagens standarder`,
    },
    {
      id: 'psykologi-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-4-ex-1',
        number: '4.1',
        type: 'classic',
        task: 'Forklar begrepene ubetinget stimulus, ubetinget respons, betinget stimulus og betinget respons med et eget eksempel.',
        hints: ['Bruk gjerne et dagligdags eksempel'],
        solution: 'Eksempel: Nar du horer ringeklokken hjemme (UBS), gar du automatisk for a apne (UBR). Hvis mobillyden alltid kommer for ringeklokken, kan mobilen bli BS og utlose at du gar mot doren (BR). UBS/UBR er automatiske, BS/BR er laerte assosiasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-4-ex-2',
        number: '4.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom positiv og negativ forsterkning. Gi eksempler.',
        hints: ['Begge oker atferd, men pa ulike mater'],
        solution: 'Bade positiv og negativ forsterkning oker sannsynligheten for atferd. Positiv forsterkning: Noe behagelig legges til (fa ros for a rydde rommet). Negativ forsterkning: Noe ubehagelig fjernes (ta smertestillende som fjerner hodepine). "Positiv" og "negativ" handler om a legge til eller fjerne, ikke om bra/darlig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-4-ex-3',
        number: '4.3',
        type: 'classic',
        task: 'Beskriv Banduras Bobo-dukke-eksperiment og hva det viste om laring.',
        hints: ['Tenk pa observasjonslaring og imitasjon'],
        solution: 'Barn ble delt i grupper og sa voksne behandle en Bobo-dukke ulikt - aggressivt, ikke-aggressivt, eller ingen modell. Barn som sa aggressiv atferd, viste mer aggresjon mot dukken etterpå. Eksperimentet viste at barn larer atferd ved a observere andre, uten direkte forsterkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-4-ex-4',
        number: '4.4',
        type: 'classic',
        task: 'Hvorfor er variabel ratio-forsterkning sa effektiv og motstandsdyktig mot ekstinksjon?',
        hints: ['Tenk pa spilleautomater og uforutsigbarhet'],
        solution: 'Ved variabel ratio far man forsterkning etter et uforutsigbart antall responser. Siden man aldri vet nar forsterkningen kommer, fortsetter man a respondere i håp om at "neste gang" er den heldige. Spilleautomater bruker dette prinsippet. Atferden er vanskelig a slukke fordi fravoer av forsterkning er forventet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-4-ex-5',
        number: '4.5',
        type: 'classic',
        task: 'Nevn de fire prosessene i Banduras observasjonslaring og forklar hvorfor alle er nodvendige.',
        hints: ['Oppmerksomhet, hukommelse, reproduksjon, motivasjon'],
        solution: 'Oppmerksomhet: Ma legge merke til modellen for a lare. Hukommelse: Ma huske det observerte til senere. Reproduksjon: Ma ha evne til a utfore atferden fysisk/mentalt. Motivasjon: Ma ha grunn til a ville utfore atferden. Mangler en prosess, skjer ingen laring eller utforelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: Motivasjon og emosjoner
// ============================================================================

export const CHAPTER_PSYKOLOGI_1_5: TextbookChapter = {
  id: 'psykologi-1-5',
  courseId: 'psykologi-1',
  chapterNumber: '5',
  title: 'Motivasjon og emosjoner',
  description: 'Forsta hva som driver atferd og hvordan folelser fungerer.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjore rede for ulike motivasjonsteorier',
    'forklare sammenhengen mellom motivasjon og atferd',
    'beskrive emosjonenes komponenter og funksjoner',
  ],
  content: [
    {
      id: 'psykologi-1-5-intro',
      type: 'text',
      content: `## Hva driver oss?

Motivasjon er de indre og ytre kreftene som setter i gang, styrer og opprettholder atferd. Emosjoner er komplekse tilstander som involverer fysiologiske reaksjoner, subjektive opplevelser og atferdstendenser.

**Sentrale sporsamal:**
- Hvorfor gjor vi det vi gjor?
- Hva far oss til a anstrenge oss?
- Hvorfor foler vi som vi gjor?
- Hvordan pavirker folelser atferd?

**Motivasjon og emosjoner henger sammen:**
Folelser kan motivere atferd (frykt far oss til a flykte), og a oppna mal pavirker folelsene vare (glade nar vi lykkes, frustrert nar vi mislykkes).`,
    },
    {
      id: 'psykologi-1-5-def-1',
      type: 'definition',
      title: 'Motivasjonsteorier',
      content: `**Driftsteorien (Hull):**
Biologiske behov skaper ubehagelige drivetilstander som motiverer atferd for a gjenopprette balanse (homeostase). Eksempel: sult driver oss til a spise.

**Maslows behovshierarki:**
Behov ordnet i pyramide - lavere behov ma tilfredsstilles for vi motiveres av hoyere:
1. Fysiologiske behov (mat, vann, sovn)
2. Sikkerhet (trygghet, stabilitet)
3. Tilhorighet (kjarlighet, vennskap)
4. Anerkjennelse (respekt, status)
5. Selvaktualisering (realisere potensial)

**Selvbestemmelsesteorien (Deci & Ryan):**
Tre grunnleggende psykologiske behov:
- *Autonomi:* Folelse av selvbestemmelse og kontroll
- *Kompetanse:* Folelse av mestring
- *Tilhorighet:* Folelse av tilknytning til andre

**Indre vs. ytre motivasjon:**
- Indre: Gjore noe fordi det er interessant i seg selv
- Ytre: Gjore noe for belonning eller unngar straff`,
    },
    {
      id: 'psykologi-1-5-def-2',
      type: 'definition',
      title: 'Emosjoner',
      content: `**Emosjonenes komponenter:**
1. *Fysiologisk:* Kroppslige reaksjoner (hjertebank, svetting)
2. *Kognitiv:* Tanker og vurderinger (dette er farlig)
3. *Subjektiv:* Folelse (jeg er redd)
4. *Atferdsmessig:* Handlingstendens (jeg vil flykte)
5. *Uttrykksmessig:* Ansiktsuttrykk, kroppssprak

**Grunnfolelser (Ekman):**
- Glede, tristhet, frykt, sinne, avsky, overraskelse
- Universelle ansiktsuttrykk pa tvers av kulturer

**Teorier om emosjoner:**
- *James-Lange:* Vi foler fordi kroppen reagerer (vi er redde fordi vi skjelver)
- *Cannon-Bard:* Kroppslig reaksjon og folelse skjer samtidig
- *Schachter-Singer:* Folelse = fysiologisk aktivering + kognitiv tolkning
- *Lazarus:* Kognitiv vurdering kommer forst`,
    },
    {
      id: 'psykologi-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Indre og ytre motivasjon i skolen',
      problem: 'Hvordan kan forstaelse av motivasjon forbedre laring i skolen?',
      solution: `**Ytre motivasjon:**
Karakterer, ros, straff for darlige resultater. Kan vaere effektivt pa kort sikt, men kan underminere indre motivasjon.

**Indre motivasjon:**
Eleven er interessert i stoffet, liker utfordringer, vil forsta.

**Forskning viser:**
Ytre belonninger for noe man allerede liker a gjore (indre motivert) kan faktisk redusere indre motivasjon ("overjustification effect").

**For a fremme indre motivasjon:**
- Gi valgmuligheter (autonomi)
- Tilpass vanskelighetsgrad (kompetanse)
- Skap godt laeringsmiljo (tilhorighet)
- Fokuser pa laring, ikke bare prestasjon
- Bruk ros for innsats, ikke evner`,
    },
    {
      id: 'psykologi-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-5-ex-1',
        number: '5.1',
        type: 'classic',
        task: 'Beskriv Maslows behovshierarki og forklar hovedprinsippet.',
        hints: ['Tenk pa pyramiden og rekkefolgsen av behov'],
        solution: 'Maslow foreslo at behov er ordnet hierarkisk: fysiologiske, sikkerhet, tilhorighet, anerkjennelse og selvaktualisering. Hovedprinsippet er at lavere behov ma vaere rimelig tilfredsstilt for hoyere behov blir motiverende. En sulten person tenker ikke pa selvaktualisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-5-ex-2',
        number: '5.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom indre og ytre motivasjon med eksempler.',
        hints: ['Tenk pa hvorfor man gjor aktiviteten'],
        solution: 'Indre motivasjon: Man gjor noe fordi det er interessant eller gledelig i seg selv (lese en bok for fornoyelsen). Ytre motivasjon: Man gjor noe for a oppna belonning eller unngar straff (lese for a fa god karakter). Begge kan drive atferd, men indre motivasjon gir ofte mer vedvarende engasjement.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-5-ex-3',
        number: '5.3',
        type: 'classic',
        task: 'Beskriv de fire hovedkomponentene i en emosjon.',
        hints: ['Fysiologisk, kognitiv, subjektiv, atferdsmessig'],
        solution: 'Fysiologisk komponent: Kroppslige reaksjoner som hjertebank, svetting. Kognitiv komponent: Tanker og vurderinger av situasjonen. Subjektiv komponent: Den bevisste opplevelsen av folelsen. Atferdsmessig komponent: Handlingstendens, som a flykte ved frykt eller angripe ved sinne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-5-ex-4',
        number: '5.4',
        type: 'classic',
        task: 'Sammenlign James-Lange-teorien og Schachter-Singer-teorien om emosjoner.',
        hints: ['Tenk pa rekkefolgsen mellom kropp, tanke og folelse'],
        solution: 'James-Lange: Folelse er var oppfattelse av kroppslige reaksjoner - vi er redde fordi vi skjelver. Schachter-Singer: Folelse krever bade fysiologisk aktivering OG kognitiv tolkning av situasjonen. Samme aktivering kan gi ulike folelser avhengig av hvordan vi tolker situasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-5-ex-5',
        number: '5.5',
        type: 'classic',
        task: 'Hva er selvbestemmelsesteorien, og hvilke tre behov star sentralt?',
        hints: ['Tenk pa autonomi, kompetanse, tilhorighet'],
        solution: 'Selvbestemmelsesteorien (Deci & Ryan) sier at indre motivasjon avhenger av tre psykologiske grunnbehov: Autonomi (folelse av selvbestemmelse), kompetanse (folelse av mestring) og tilhorighet (folelse av tilknytning). Nar disse behovene tilfredsstilles, blomstrer indre motivasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-5-ex-6',
        number: '5.6',
        type: 'classic',
        task: 'Hva er overjustification-effekten, og hva betyr den for bruk av belonninger?',
        hints: ['Tenk pa hva som skjer nar man belannes for noe man allerede liker'],
        solution: 'Overjustification-effekten oppstar nar ytre belonning for en aktivitet man allerede er indre motivert for, reduserer den indre motivasjonen. Personen begynner a se aktiviteten som noe man gjor for belonningen, ikke for fornoyelsens skyld. Implikasjon: Var forsiktig med a belonne aktiviteter barn allerede liker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Utviklingspsykologi
// ============================================================================

export const CHAPTER_PSYKOLOGI_1_6: TextbookChapter = {
  id: 'psykologi-1-6',
  courseId: 'psykologi-1',
  chapterNumber: '6',
  title: 'Utviklingspsykologi',
  description: 'Forsta hvordan mennesker utvikler seg gjennom barndom og ungdomstid.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjore rede for sentrale utviklingsteorier',
    'beskrive kognitiv utvikling hos barn',
    'forklare betydningen av tilknytning',
  ],
  content: [
    {
      id: 'psykologi-1-6-intro',
      type: 'text',
      content: `## Menneskets utvikling

Utviklingspsykologi studerer hvordan mennesker endrer seg gjennom livet - fysisk, kognitivt, emosjonelt og sosialt. Tradisjonelt har fokuset vaert pa barn og ungdom, men i dag studerer man hele livslapet.

**Sentrale sporsamal:**
- Arv vs. miljo: Hva er medfodt og hva er laert?
- Kontinuitet vs. stadier: Utvikler vi oss gradvis eller i trinn?
- Kritiske perioder: Finnes det "vinduer" for visse typer utvikling?
- Stabilitet vs. endring: Hvor mye kan vi forandre oss?

**Viktige utviklingsomrader:**
- Fysisk utvikling (kropp, hjerne, motorikk)
- Kognitiv utvikling (tenkning, sprak)
- Sosial-emosjonell utvikling (folelser, relasjoner)
- Moralsk utvikling (rett og galt)`,
    },
    {
      id: 'psykologi-1-6-def-1',
      type: 'definition',
      title: 'Piagets kognitive utviklingsteori',
      content: `**Jean Piaget (1896-1980):**
Barn er ikke "sma voksne" - de tenker kvalitativt annerledes. Kognitiv utvikling skjer gjennom aktiv interaksjon med omgivelsene.

**Grunnleggende begreper:**
- *Skjema:* Mentale strukturer for a organisere kunnskap
- *Assimilasjon:* Tilpasse ny informasjon til eksisterende skjemaer
- *Akkomodasjon:* Endre skjemaer for a passe ny informasjon

**De fire stadiene:**
1. *Sensomotorisk (0-2 ar):* Larer gjennom sanser og bevegelse. Utvikler objektpermanens.
2. *Preoperasjonell (2-7 ar):* Symbolsk tenkning, sprak. Egosentrisk, mangler konservasjon.
3. *Konkret-operasjonell (7-11 ar):* Logisk tenkning om konkrete ting. Konservasjon, klassifisering.
4. *Formell-operasjonell (11+ ar):* Abstrakt og hypotetisk tenkning. Kan resonnere om ideer.`,
    },
    {
      id: 'psykologi-1-6-def-2',
      type: 'definition',
      title: 'Tilknytningsteori',
      content: `**John Bowlby:**
Barn har et medfodt behov for a danne sterke emosjonelle band til omsorgspersoner. Tilknytning er viktig for overlevelse og sunn utvikling.

**Mary Ainsworths fremmedsituasjon:**
Metode for a vurdere tilknytningsstil hos sma barn (12-18 md).

**Tilknytningsstiler:**
- *Trygg tilknytning (~65%):* Bruker omsorgsperson som trygg base, protesterer ved separasjon, glad ved gjenforening.
- *Utrygg-unnvikende (~20%):* Viser lite folelser, unngår omsorgsperson.
- *Utrygg-ambivalent (~10%):* Klamrende, engstelig, vanskelig a tregste.
- *Desorganisert (~5%):* Forvirret, inkonsistent atferd. Ofte ved omsorgssvikt.

**Indre arbeidsmodeller:**
Tidlige tilknytningserfaringer former forventninger til relasjoner gjennom livet.`,
    },
    {
      id: 'psykologi-1-6-def-3',
      type: 'definition',
      title: 'Eriksons psykososiale utvikling',
      content: `**Erik Erikson:**
Utvikling skjer gjennom atte stadier, hver med en psykososial krise som ma losses.

**De forste fem stadiene (barndom og ungdom):**

1. *Tillit vs. mistillit (0-1 ar):*
Lar barnet at verden er trygg og forutsigbar?

2. *Autonomi vs. skam (1-3 ar):*
Utvikler barnet selvstendighet og selvkontroll?

3. *Initiativ vs. skyld (3-6 ar):*
Far barnet utforske og ta initiativ uten overdreven skyld?

4. *Arbeidsomhet vs. mindreverd (6-12 ar):*
Opplever barnet mestring pa skolen og blant jevnaldrende?

5. *Identitet vs. rolleforvirring (12-18 ar):*
Utvikler ungdommen en sammenhengende folelse av hvem de er?`,
    },
    {
      id: 'psykologi-1-6-example-1',
      type: 'example',
      title: 'Eksempel: Konservasjon',
      problem: 'Hva er konservasjon, og hvorfor mangler sma barn denne evnen?',
      solution: `**Konservasjon:**
Forstaelse av at mengde forblir lik selv om formen endres.

**Klassisk eksempel (Piaget):**
To identiske glass med like mye vann. Barnet ser at glasseene har like mye.
Sa helles vannet fra ett glass over i et hoyt, smalt glass.
Sporsamal: Har glassene like mye vann na?

**Barn i preoperasjonelt stadium:**
Sier at det hoye glasset har mer - fordi vannflaten er hoyere. De fokuserer pa ett aspekt (hoyde) og klarer ikke a ta hensyn til at bredden ogsa endret seg.

**Barn i konkret-operasjonelt stadium:**
Forstar at mengden er den samme, kan forklare logisk (ingenting ble lagt til/fjernet, kan helle tilbake).`,
    },
    {
      id: 'psykologi-1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-6-ex-1',
        number: '6.1',
        type: 'classic',
        task: 'Beskriv Piagets fire stadier i kognitiv utvikling.',
        hints: ['Sensomotorisk, preoperasjonell, konkret-operasjonell, formell-operasjonell'],
        solution: 'Sensomotorisk (0-2): Larer gjennom sanser/bevegelse, utvikler objektpermanens. Preoperasjonell (2-7): Symbolsk tenkning, egosentrisk, mangler konservasjon. Konkret-operasjonell (7-11): Logisk tenkning om konkrete ting, konservasjon. Formell-operasjonell (11+): Abstrakt tenkning, hypoteser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-6-ex-2',
        number: '6.2',
        type: 'classic',
        task: 'Forklar begrepene assimilasjon og akkomodasjon med eksempler.',
        hints: ['Tenk pa a tilpasse ny informasjon'],
        solution: 'Assimilasjon: Ny informasjon tilpasses eksisterende skjema. Et barn som kaller alle firdyrslger "hund" assimilerer. Akkomodasjon: Skjemaet endres for a passe ny informasjon. Nar barnet larer at noen firdyrslger er "katter", akkomoderer det sitt skjema ved a lage en ny kategori.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-6-ex-3',
        number: '6.3',
        type: 'classic',
        task: 'Beskriv Ainsworths tilknytningsstiler og hva som kjennetegner hver stil.',
        hints: ['Trygg, utrygg-unnvikende, utrygg-ambivalent, desorganisert'],
        solution: 'Trygg: Bruker omsorgsperson som trygg base, protesterer ved separasjon, glad ved gjenforening. Utrygg-unnvikende: Viser lite folelser, unngår omsorgsperson. Utrygg-ambivalent: Klamrende, engstelig, vanskelig a treste. Desorganisert: Forvirret atferd, ofte ved omsorgssvikt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-6-ex-4',
        number: '6.4',
        type: 'classic',
        task: 'Hva er identitetskrise ifolgse Erikson, og nar oppstar den typisk?',
        hints: ['Tenk pa ungdomstiden'],
        solution: 'Identitetskrise er den psykososiale krisen i ungdomstiden (12-18 år) der ungdommen strir med sporsamalet "Hvem er jeg?". De utforsker ulike roller, verdier og mal. En vellykket losning gir en stabil identitet, mens mislykket losning forer til rolleforvirring og usikkerhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-6-ex-5',
        number: '6.5',
        type: 'classic',
        task: 'Hvorfor er tidlig tilknytning viktig for senere utvikling?',
        hints: ['Tenk pa indre arbeidsmodeller'],
        solution: 'Tidlig tilknytning former indre arbeidsmodeller - mentale forventninger til relasjoner. Trygg tilknytning gir forventning om at andre er tilgjengelige og responsive, noe som fremmer sunne relasjoner, selvtillit og emosjonell regulering gjennom livet. Utrygg tilknytning kan skape vansker med tillit og narhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Personlighetspsykologi
// ============================================================================

export const CHAPTER_PSYKOLOGI_1_7: TextbookChapter = {
  id: 'psykologi-1-7',
  courseId: 'psykologi-1',
  chapterNumber: '7',
  title: 'Personlighetspsykologi',
  description: 'Utforsk teorier om personlighet og individuelle forskjeller.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjore rede for ulike personlighetsteorier',
    'beskrive trekkteori og femfaktormodellen',
    'drofta arv og miljos betydning for personlighet',
  ],
  content: [
    {
      id: 'psykologi-1-7-intro',
      type: 'text',
      content: `## Hva er personlighet?

Personlighet er de karakteristiske mønstrene av tanker, folelser og atferd som gjor et individ unikt og relativt stabilt over tid og situasjoner.

**Sentrale sporsamal:**
- Hva forklarer individuelle forskjeller?
- Hvor stabilt er personligheten?
- Hvor mye er arv vs. miljo?
- Hvordan best beskrive personlighet?

**Ulike tilnarminger:**
- Psykoanalytisk (Freud): Ubevisste drivkrefter
- Trekkteori: Stabile egenskaper
- Humanistisk: Selvaktualisering
- Sosial-kognitiv: Samspill person-situasjon
- Biologisk: Gener og temperament`,
    },
    {
      id: 'psykologi-1-7-def-1',
      type: 'definition',
      title: 'Freuds personlighetsteori',
      content: `**Personlighetens struktur:**
- *Id (det):* Primitive drifter, soker umiddelbar tilfredsstillelse. Lystprinsippet.
- *Ego (jeg):* Formidler mellom id, superego og virkeligheten. Realitetsprinsippet.
- *Superego (overjeg):* Moral og samvittighet, internaliserte regler.

**Psykoseksuell utvikling:**
Personligheten formes gjennom stadier der fokus er pa ulike kroppssoner:
1. Oral (0-1 ar): Munn
2. Anal (1-3 ar): Kontroll
3. Fallisk (3-6 ar): Kjonnsforskjeller, odipuskompleks
4. Latens (6-pubertet): Fokus pa laring
5. Genital (pubertet+): Voksen seksualitet

**Forsvarsmekanismer:**
Ubevisste strategier ego bruker for a handtere angst:
- Fortrenging, projisering, rasjonalisering, sublimering, regresjon`,
    },
    {
      id: 'psykologi-1-7-def-2',
      type: 'definition',
      title: 'Femfaktormodellen (Big Five)',
      content: `**Trekkteori:**
Personlighet kan beskrives med et begrenset antall grunnleggende trekk som varierer i styrke mellom mennesker.

**De fem faktorene (OCEAN):**

1. *Apenhet (Openness):*
Fantasi, kreativitet, nysgjerrighet, estetisk sans

2. *Planmessighet (Conscientiousness):*
Orden, selvdisiplin, pliktfolelse, malrettethet

3. *Ekstraversjon (Extraversion):*
Sosialitet, energi, positivitet, selvhevdelse

4. *Medmenneskelighet (Agreeableness):*
Tillit, samarbeidsvilje, vennlighet, empati

5. *Nevrotisisme (Neuroticism):*
Angst, sinne, sorgmodighet, emosjonell ustabilitet

**Styrker med modellen:**
- Funnet i ulike kulturer
- Stabil over tid (fra voksen alder)
- Kan predikere viktige livsutfall`,
    },
    {
      id: 'psykologi-1-7-def-3',
      type: 'definition',
      title: 'Arv og miljo i personlighet',
      content: `**Tvillingstudier:**
Ved a sammenligne eneggede (100% like gener) og toeggede (50%) tvillinger kan vi estimere arvens bidrag.

**Funn:**
- Personlighetstrekk er ca. 40-60% arvelige
- Resten skyldes miljo, men mest ikke-delt miljo (unike opplevelser)
- Delt familiemiljo har overraskende liten effekt pa voksne

**Temperament:**
Medfodte tilboyeleligheter til visse reaksjonsmoenstre. Vises fra spebarnsalder:
- Aktivitetsniva
- Irritabilitet
- Sosialitet
- Emosjonalitet

**Gen-miljo-samspill:**
- Gener pavirker hvilke miljoer vi soker ut
- Miljoet kan "sla av og pa" gener (epigenetikk)
- Same gen kan ha ulik effekt i ulike miljoer`,
    },
    {
      id: 'psykologi-1-7-example-1',
      type: 'example',
      title: 'Eksempel: Personlighet og livsutfall',
      problem: 'Kan personlighetstrekk forutsi viktige ting i livet?',
      solution: `**Forskning viser sammenhenger:**

**Planmessighet predikerer:**
- Bedre skoleprestasjoner
- Hoyere jobbtilfredshet og -prestasjon
- Bedre helse og lengre liv
- Lavere risiko for rusbruk

**Ekstraversjon predikerer:**
- Flere sosiale relasjoner
- Hoyere subjektivt velvare
- Lederposisjoner

**Nevrotisisme predikerer:**
- Hoyere risiko for angst og depresjon
- Lavere livstilfredshet
- Relasjonsproblemer

**Men:** Sammenhenger er moderate, og situasjon og valg spiller ogsa stor rolle. Personlighet er ikke skjebne.`,
    },
    {
      id: 'psykologi-1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-7-ex-1',
        number: '7.1',
        type: 'classic',
        task: 'Beskriv Freuds tre personlighetsstrukturer: id, ego og superego.',
        hints: ['Tenk pa drifter, realitet og moral'],
        solution: 'Id: Den primitive delen, styrt av lystprinsippet, soker umiddelbar tilfredsstillelse av drifter. Ego: Formidler mellom id, superego og virkeligheten, styrt av realitetsprinsippet. Superego: Samvittigheten, internaliserte moralske regler og idealer fra foreldre og samfunn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-7-ex-2',
        number: '7.2',
        type: 'classic',
        task: 'Beskriv de fem faktorene i femfaktormodellen (Big Five).',
        hints: ['OCEAN - apenhet, planmessighet, ekstraversjon, medmenneskelighet, nevrotisisme'],
        solution: 'Apenhet: Kreativitet, nysgjerrighet. Planmessighet: Orden, selvdisiplin. Ekstraversjon: Sosialitet, energi. Medmenneskelighet: Vennlighet, samarbeidsvilje. Nevrotisisme: Emosjonell ustabilitet, angst. Hvert trekk er et kontinuum der alle scorer et sted.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-7-ex-3',
        number: '7.3',
        type: 'classic',
        task: 'Hva viser tvillingstudier om arv og miljo i personlighet?',
        hints: ['Tenk pa arvelighet og miljo-effekter'],
        solution: 'Tvillingstudier viser at personlighetstrekk er ca. 40-60% arvelige. Resten skyldes miljo, men overraskende lite skyldes delt familiemiljo. Ikke-delt miljo (unike opplevelser) har storre effekt. Dette antyder at gener er viktige, men individuelle opplevelser former oss mest.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-7-ex-4',
        number: '7.4',
        type: 'classic',
        task: 'Hva er forsvarsmekanismer ifolgse Freud? Nevn og forklar tre eksempler.',
        hints: ['Tenk pa ubevisste strategier for a handtere angst'],
        solution: 'Forsvarsmekanismer er ubevisste strategier ego bruker for a beskytte mot angst. Fortrenging: Ubehagelige tanker/minner skyves ut av bevisstheten. Projisering: Egne uakseptable tanker tillegges andre. Rasjonalisering: Finne akseptable forklaringer pa uakseptabel atferd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-7-ex-5',
        number: '7.5',
        type: 'classic',
        task: 'Hva er temperament, og hvordan skiller det seg fra personlighet?',
        hints: ['Tenk pa medfodt vs. utviklet'],
        solution: 'Temperament er medfodte, biologisk baserte tilboyeligheter til visse reaksjonsmoenstre som aktivitetsniva, irritabilitet og sosialitet. Det vises fra spebarnsalder. Personlighet er bredere og inkluderer temperament pluss laerte moenstre, holdninger og verdier som utvikles over tid i samspill med miljoet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: Sosialpsykologi
// ============================================================================

export const CHAPTER_PSYKOLOGI_1_8: TextbookChapter = {
  id: 'psykologi-1-8',
  courseId: 'psykologi-1',
  chapterNumber: '8',
  title: 'Sosialpsykologi',
  description: 'Forsta hvordan andre mennesker pavirker vare tanker, folelser og handlinger.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjore rede for sosial pavirkning og konformitet',
    'forklare holdningsdannelse og fordommer',
    'beskrive gruppeprosesser',
  ],
  content: [
    {
      id: 'psykologi-1-8-intro',
      type: 'text',
      content: `## Mennesket som sosialt vesen

Sosialpsykologi studerer hvordan menneskers tanker, folelser og atferd pavirkes av andre mennesker - virkelige, forestilte eller impliserte.

**Sentrale temaer:**
- Sosial persepsjon: Hvordan vi oppfatter andre
- Holdninger: Hva vi mener og hvorfor
- Sosial pavirkning: Konformitet, lydighet, overtalelse
- Gruppeprosesser: Hvordan grupper pavirker oss
- Mellommenneskelige relasjoner: Tiltrekning, kjarlighet
- Fordommer og diskriminering

**Berommete eksperimenter:**
Sosialpsykologien er kjent for klassiske eksperimenter som avslorer overraskende ting om mennesker, som Asch's konformitetsstudier og Milgrams lydighetseksperiment.`,
    },
    {
      id: 'psykologi-1-8-def-1',
      type: 'definition',
      title: 'Sosial persepsjon og attribusjon',
      content: `**Sosial persepsjon:**
Hvordan vi danner inntrykk av andre og forklarer deres atferd.

**Attribusjonsteori:**
Vi soker a forklare atferd ved a tilskrive (attribuere) arsaker.

**Indre vs. ytre attribusjon:**
- *Indre (disposisjonell):* Atferd skyldes personens egenskaper
- *Ytre (situasjonell):* Atferd skyldes situasjonen

**Den fundamentale attribusjonsfeilen:**
Vi overvurderer personlige egenskaper og undervurderer situasjonens pavirkning nar vi forklarer andres atferd. "Han kom for sent fordi han er upålitelig" (ikke fordi bussen var forsinket).

**Selvtjenende attribusjon:**
Vi forklarer egen suksess med indre faktorer (jeg er flink) og nederlag med ytre (det var urettferdig).

**Forsteinntrykkeffekten:**
Forste informasjon vi mottar om en person pavirker var oppfatning uforholdsmessig mye.`,
    },
    {
      id: 'psykologi-1-8-def-2',
      type: 'definition',
      title: 'Konformitet og lydighet',
      content: `**Konformitet:**
Endring i atferd eller mening for a tilpasse seg en gruppe.

**Aschs linjeeksperiment (1951):**
Deltakere sa 7 andre (medsammensvorne) gi arspenbare feil svar pa en enkel oppgave. Ca. 75% ga minst ett feil svar for a folge gruppen.

**Arsakar til konformitet:**
- *Normativ pavirkning:* Vi vil bli likt og akseptert
- *Informativ pavirkning:* Vi antar andre vet bedre

**Lydighet:**
A folge ordrer fra autoriteter.

**Milgrams lydighetseksperiment (1963):**
Deltakere ble bedt om a gi elektriske stot til en annen person (skuespiller) nar han svarte feil. 65% gikk helt til maksimalt, farlig niva (450 volt) pa forskerens ordre.

**Hva pavirket lydighet:**
- Fysisk narhet til offeret (mindre lydighet)
- Narhet til autoritet (mer lydighet)
- Sosial stotte fra andre som nektet (mindre lydighet)`,
    },
    {
      id: 'psykologi-1-8-def-3',
      type: 'definition',
      title: 'Holdninger og fordommer',
      content: `**Holdninger:**
Vurderinger av objekter, mennesker eller ideer. Har tre komponenter:
- Kognitiv: Tanker og overbevisninger
- Affektiv: Folelser
- Atferdsmessig: Handlingstendens

**Kognitiv dissonans (Festinger):**
Ubehag nar var atferd ikke stemmer med vare holdninger. Vi er motivert til a redusere dissonansen, ofte ved a endre holdninger.

**Fordommer:**
Negative holdninger mot en gruppe og dens medlemmer.
- *Stereotypi:* Generaliserte antakelser om gruppemedlemmer
- *Diskriminering:* Negativ atferd basert pa gruppetilhorighet

**Arsaker til fordommer:**
- Sosial kategorisering (inngruppe vs. utgruppe)
- Konkurranase om ressurser
- Sosial laring
- Bekreftelsestendensen`,
    },
    {
      id: 'psykologi-1-8-example-1',
      type: 'example',
      title: 'Eksempel: Tilskuereffekten',
      problem: 'Hvorfor hjelper vi ikke alltid nar noen trenger det?',
      solution: `**Kitty Genovese-saken (1964):**
En kvinne ble angrepet og drept mens visstnok 38 vitner ikke grep inn. (Historien er overdrevet, men inspirerte forskning.)

**Tilskuereffekten:**
Jo flere tilskuere, jo mindre sannsynlig at noen hjelper.

**Forklaringer:**
1. *Ansvarsfordeling:* "Noen andre vil sikkert hjelpe"
2. *Pluralistisk ignoranse:* "Ingen andre reagerer, sa det er kanskje ikke alvorlig"
3. *Evalueringsfrykt:* Redd for a dumme seg ut

**Nar hjelper vi?**
- Nar vi er alene (ingen ansvarsfordeling)
- Nar situasjonen er tydelig nodssituasjon
- Nar vi har relevant kompetanse
- Nar vi foler tilhorighet med offeret`,
    },
    {
      id: 'psykologi-1-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-8-ex-1',
        number: '8.1',
        type: 'classic',
        task: 'Hva er den fundamentale attribusjonsfeilen? Gi et eksempel.',
        hints: ['Tenk pa person vs. situasjon'],
        solution: 'Den fundamentale attribusjonsfeilen er tendensen til a overvurdere personlige egenskaper og undervurdere situasjonsfaktorer nar vi forklarer andres atferd. Eksempel: Vi tenker at en sur ekspeditrise er en sur person, uten a vurdere at hun kanskje har hatt en lang dag eller problemer hjemme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-8-ex-2',
        number: '8.2',
        type: 'classic',
        task: 'Beskriv Aschs konformitetseksperiment og hva det viste.',
        hints: ['Tenk pa linjeoppgaven og gruppepress'],
        solution: 'I Aschs eksperiment skulle deltakere sammenligne linjelengder - en enkel oppgave. Nar 7 medsammensvorne ga arspenbare feilsvar, fulgte ca. 75% av deltakerne gruppen minst en gang. Eksperimentet viste at vi ofte tilpasser oss gruppen selv nar vi vet at gruppen tar feil, bade for a bli likt og fordi vi tviler pa egen vurdering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-8-ex-3',
        number: '8.3',
        type: 'classic',
        task: 'Hva viste Milgrams lydighetseksperiment, og hva laerte vi av det?',
        hints: ['Tenk pa lydighet til autoritet'],
        solution: 'Milgram viste at vanlige mennesker kan utfore skadelige handlinger pa ordre fra autoritet - 65% ga maksimalt "stot" til en protest-erende person. Vi laerte at situasjonelle faktorer (autoritetens tilstedevaerelse, gradvis eskalering) har enorm makt, og at "onde handlinger" ikke nodvendigvis krever onde mennesker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-8-ex-4',
        number: '8.4',
        type: 'classic',
        task: 'Hva er kognitiv dissonans, og hvordan reduserer vi den?',
        hints: ['Tenk pa konflikt mellom holdning og atferd'],
        solution: 'Kognitiv dissonans er ubehaget vi foler nar atferden var ikke stemmer med holdningene vare. Vi reduserer det ved a: endre holdning for a matche atferd, endre atferd, rettferdiggjore/bagatellisere, eller legge til nye tanker. Oftest endrer vi holdninger - det er lettere enn a innromme feil.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-8-ex-5',
        number: '8.5',
        type: 'classic',
        task: 'Forklar tilskuereffekten og hvorfor den oppstar.',
        hints: ['Tenk pa ansvarsfordeling og pluralistisk ignoranse'],
        solution: 'Tilskuereffekten er fenomenet der jo flere tilskuere det er til en nodsituasjon, jo mindre sannsynlig er det at noen hjelper. Arsaker: Ansvarsfordeling ("andre vil hjelpe"), pluralistisk ignoranse ("ingen reagerer, sa det er kanskje ikke alvorlig"), og evalueringsfrykt (redd for a gjore noe feil foran andre).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-8-ex-6',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-8-ex-6',
        number: '8.6',
        type: 'classic',
        task: 'Hva er forskjellen mellom stereotypier, fordommer og diskriminering?',
        hints: ['Tenk pa tanker, folelser og handling'],
        solution: 'Stereotypier er generaliserte antakelser/oppfatninger om gruppemedlemmer (kognitivt). Fordommer er negative holdninger og folelser mot en gruppe (affektivt). Diskriminering er faktisk negativ atferd mot gruppemedlemmer basert pa gruppetilhorighet (atferdsmessig). De henger ofte sammen, men kan opptre uavhengig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9: Psykisk helse og lidelser
// ============================================================================

export const CHAPTER_PSYKOLOGI_1_9: TextbookChapter = {
  id: 'psykologi-1-9',
  courseId: 'psykologi-1',
  chapterNumber: '9',
  title: 'Psykisk helse og lidelser',
  description: 'Forsta psykisk helse, vanlige lidelser og faktorer som pavirker velvare.',
  estimatedMinutes: 80,
  competenceGoals: [
    'gjore rede for hva psykisk helse innebarer',
    'beskrive vanlige psykiske lidelser',
    'forklare faktorer som fremmer psykisk helse',
  ],
  content: [
    {
      id: 'psykologi-1-9-intro',
      type: 'text',
      content: `## Psykisk helse

Psykisk helse er ikke bare fravaer av psykiske lidelser, men en tilstand av velvare der individet kan realisere sine evner, handtere normal stress, arbeide produktivt og bidra til samfunnet.

**Viktige fakta:**
- Ca. 1 av 5 vil oppleve en psykisk lidelse i lopet av livet
- Angst og depresjon er de vanligste
- Mange soker ikke hjelp
- Psykiske lidelser kan behandles effektivt

**Psykisk helse er et kontinuum:**
De fleste av oss beveger oss mellom god og darligere psykisk helse gjennom livet. Det er normalt a ha perioder med stress, tristhet eller angst.

**Stigma:**
Fordommer mot psykiske lidelser kan hindre folk fra a soke hjelp og forverrer situasjonen.`,
    },
    {
      id: 'psykologi-1-9-def-1',
      type: 'definition',
      title: 'Angstlidelser',
      content: `**Hva er angst?**
Angst er en naturlig reaksjon pa opplevd trussel. Det blir et problem nar det er overdrevet, langvarig eller hemmer daglig fungering.

**Generalisert angstlidelse:**
Vedvarende, overdreven bekymring om mange ting. Muskelspennning, rastloshet, konsentrasjonsvansker, somnproblemer.

**Panikklidelse:**
Gjentatte panikkanfall - plutselige episoder av intens frykt med fysiske symptomer (hjertebank, svetting, pustevansker, folelse av a do).

**Sosial angstlidelse:**
Intens frykt for sosiale situasjoner der man kan bli vurdert negativt. Unngåelsesatferd.

**Spesifikke fobier:**
Irrasjonell, intens frykt for spesifikke objekter eller situasjoner (hoyder, slanger, sproytor).

**Behandling:**
Kognitiv atferdsterapi (spesielt eksponering) og medikamenter (SSRI) er effektive.`,
    },
    {
      id: 'psykologi-1-9-def-2',
      type: 'definition',
      title: 'Depresjon',
      content: `**Hva er depresjon?**
Mer enn vanlig tristhet. En lidelse som pavirker hvordan man foler, tenker og fungerer.

**Hovedsymptomer:**
- Nedstemt stemningsleie det meste av dagen
- Tap av interesse eller glede (anhedoni)
- Energiloshet
- Somnforstyrrelser (for mye eller for lite)
- Endret appetitt
- Konsentrasjonsvansker
- Verdiloshetsfoleise eller skyldfoleise
- Tanker om dod eller selvmord

**For diagnose:** Symptomer i minst to uker som forårsaker lidelse eller nedsatt fungering.

**Biopsykososiale faktorer:**
- Biologisk: Genetikk, nevrotransmittere, hormoner
- Psykologisk: Negative tankemonstre, tap, stress
- Sosialt: Isolasjon, fattigdom, traumer

**Behandling:**
Samtaleterapi (saerlig kognitiv terapi), medikamenter (antidepressiva), fysisk aktivitet, kombinasjoner.`,
    },
    {
      id: 'psykologi-1-9-def-3',
      type: 'definition',
      title: 'Faktorer som pavirker psykisk helse',
      content: `**Risikofaktorer:**
- Genetisk sarbarhet
- Traumer og vonde barndomsopplevelser
- Kronisk stress
- Sosial isolasjon
- Rusbruk
- Alvorlig sykdom
- Fattigdom og diskriminering

**Beskyttelsesfaktorer:**
- Sosial stotte og gode relasjoner
- Mestringsstrategier
- Fysisk aktivitet
- Meningsfulle aktiviteter
- Tilgang pa hjelp
- Resiliens (motstandskraft)

**Forebygging:**
- Styrke beskyttelsesfaktorer
- Redusere risikofaktorer
- Tidlig intervensjon
- Redusere stigma
- Tilgjengelig helsehjelp

**Hva kan du gjore selv?**
Regelmessig fysisk aktivitet, nok sovn, sosial kontakt, begrense rus, soke hjelp tidlig.`,
    },
    {
      id: 'psykologi-1-9-example-1',
      type: 'example',
      title: 'Eksempel: Stress-sarbarhetmodellen',
      problem: 'Hvorfor utvikler noen psykiske lidelser mens andre ikke gjor det?',
      solution: `**Stress-sarbarhetmodellen:**
Psykiske lidelser oppstar nar saarbare individer utsettes for tilstrekkelig stress.

**Sarbarhet kan vare:**
- Genetisk (familie med psykiske lidelser)
- Biologisk (ubalanse i nevrotransmittere)
- Psykologisk (negative tankemoenstre, lav selvfolelse)
- Tidlige erfaringer (traumer, utrygg tilknytning)

**Stress kan vare:**
- Store livshendelser (tap, skilsmisse, sykdom)
- Kronisk stress (jobb, okonomi, relasjoner)
- Akutt traume

**Samspillet:**
- Hoy sarbarhet + lite stress = kan utvikle lidelse
- Lav sarbarhet + mye stress = kan utvikle lidelse
- Lav sarbarhet + lite stress = lav risiko

**Implikasjon:** Bade sarbarhet og stress kan pavirkes - styrk motstandskraft og reduser stress.`,
    },
    {
      id: 'psykologi-1-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-9-ex-1',
        number: '9.1',
        type: 'classic',
        task: 'Hva er forskjellen mellom normal angst og en angstlidelse?',
        hints: ['Tenk pa intensitet, varighet og funksjon'],
        solution: 'Normal angst er en hensiktsmessig reaksjon pa reelle trusler som hjelper oss a handtere farer. Angstlidelse kjennetegnes av overdrevet, langvarig og ofte irrasjonell frykt som forstyrrer daglig fungering. Angsten star ikke i forhold til den faktiske trusselen og forer til unngaelsesatferd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-9-ex-2',
        number: '9.2',
        type: 'classic',
        task: 'Beskriv hovedsymptomene ved depresjon.',
        hints: ['Tenk pa stemning, energi, sovn, tanker'],
        solution: 'Hovedsymptomer ved depresjon: Vedvarende nedstemt stemningsleie, tap av interesse/glede (anhedoni), energiloshet, somnforstyrrelser, appetittendringer, konsentrasjonsvansker, verdiloshetsfoleise, overdreven skyld, og i alvorlige tilfeller tanker om dod/selvmord. Symptomene varer minst 2 uker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-9-ex-3',
        number: '9.3',
        type: 'classic',
        task: 'Forklar stress-sarbarhetmodellen for psykiske lidelser.',
        hints: ['Tenk pa samspillet mellom sarbarhet og stressfaktorer'],
        solution: 'Stress-sarbarhetmodellen sier at psykiske lidelser oppstar nar saarbare individer utsettes for tilstrekkelig stress. Sarbarhet kan vaere genetisk, biologisk eller psykologisk. Jo hoyere sarbarhet, desto mindre stress trengs for a utlose lidelse. Bade sarbarhet og stress kan pavirkes gjennom forebygging og behandling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-9-ex-4',
        number: '9.4',
        type: 'classic',
        task: 'Nevn tre risikofaktorer og tre beskyttelsesfaktorer for psykisk helse.',
        hints: ['Tenk pa hva som oker og reduserer risiko'],
        solution: 'Risikofaktorer: Genetisk sarbarhet, traumer/vonde barndomsopplevelser, sosial isolasjon, kronisk stress, rusbruk. Beskyttelsesfaktorer: Sosial stotte og gode relasjoner, mestringsstrategier, fysisk aktivitet, meningsfulle aktiviteter, tilgang pa hjelp ved behov.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-9-ex-5',
        number: '9.5',
        type: 'classic',
        task: 'Hvorfor er stigma knyttet til psykiske lidelser et problem?',
        hints: ['Tenk pa konsekvenser for de som sliter'],
        solution: 'Stigma er problematisk fordi det kan hindre folk fra a soke hjelp (skam, frykt for andres reaksjoner), forsinke behandling og forverre tilstanden. Det kan fore til sosial isolasjon, diskriminering i arbeidsliv, lavere selvfolelse, og at samfunnet ikke prioriterer psykisk helse tilstrekkelig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-9-ex-6',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-9-ex-6',
        number: '9.6',
        type: 'classic',
        task: 'Hva kan du selv gjore for a ta vare pa din psykiske helse?',
        hints: ['Tenk pa livsstil og sosiale faktorer'],
        solution: 'Gode strategier: Regelmessig fysisk aktivitet, tilstrekkelig sovn, opprettholde sosiale relasjoner, ha meningsfulle aktiviteter, begrense rusbruk, lare mestringsstrategier for stress, soke hjelp tidlig nar man sliter, og snakke med noen om vanskelige ting. Balanse mellom arbeid, hvile og fritid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: Anvendt psykologi og metode
// ============================================================================

export const CHAPTER_PSYKOLOGI_1_10: TextbookChapter = {
  id: 'psykologi-1-10',
  courseId: 'psykologi-1',
  chapterNumber: '10',
  title: 'Anvendt psykologi og metode',
  description: 'Forsta hvordan psykologisk kunnskap brukes og hvordan forskning gjennomfores.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjore rede for ulike anvendelsesomrader i psykologi',
    'beskrive sentrale forskningsmetoder',
    'drofta etiske hensyn i psykologisk forskning',
  ],
  content: [
    {
      id: 'psykologi-1-10-intro',
      type: 'text',
      content: `## Psykologi i praksis

Psykologisk kunnskap brukes pa mange omrader for a forsta og forbedre menneskers liv. Denne kunnskapen bygger pa forskning utfort med vitenskapelige metoder.

**Anvendelsesomrader:**
- Klinisk psykologi: Behandling av psykiske lidelser
- Pedagogisk psykologi: Laring og utdanning
- Arbeids- og organisasjonspsykologi: Arbeidsliv
- Helsepsykologi: Fysisk helse og atferd
- Rettspsykologi: Rettssystemet
- Idrettspsykologi: Prestasjon og mental trening
- Miljopsykologi: Mennesker og omgivelser

**Hvorfor metode er viktig:**
Vitenskapelig metode sikrer palitelig kunnskap. Uten gode metoder risikerer vi a basere oss pa myter og anekdoter.`,
    },
    {
      id: 'psykologi-1-10-def-1',
      type: 'definition',
      title: 'Forskningsmetoder i psykologi',
      content: `**Eksperiment:**
Forsokspersonene tilfeldig fordelt til ulike betingelser. Manipulerer uavhengig variabel, maler avhengig variabel. Kan fastslå arsak-virkning.

**Korrelasjonsstudie:**
Maler sammenheng mellom variabler uten manipulasjon. Kan IKKE fastslå arsak-virkning (korrelasjon ≠ kausalitet).

**Observasjon:**
Systematisk iakttakelse av atferd. Naturalistisk (i naturlige omgivelser) eller kontrollert (i lab).

**Sporreundersokelse:**
Samler data gjennom sporsamal. Effektivt for store utvalg, men avhengig av arllige svar.

**Kasusstudie:**
Grundig studie av enkeltindivider eller sma grupper. Detaljert, men vanskelig a generalisere.

**Viktige begreper:**
- *Validitet:* Maler vi det vi skal male?
- *Reliabilitet:* Gir metoden konsistente resultater?
- *Generaliserbarhet:* Gjelder resultatene for andre?`,
    },
    {
      id: 'psykologi-1-10-def-2',
      type: 'definition',
      title: 'Etikk i psykologisk forskning',
      content: `**Grunnleggende prinsipper:**

**Informert samtykke:**
Deltakere ma fa tilstrekkelig informasjon om studien og frivillig samtykke til a delta. De kan trekke seg nar som helst.

**Konfidensialitet:**
Deltakernes identitet og data ma beskyttes.

**Ikke skade:**
Forskning ma ikke paforeise unodvendig fysisk eller psykisk skade. Nytten ma veies mot risiko.

**Debriefing:**
Etter studien informeres deltakere om formalget, saerlig hvis bedrag var nodvendig.

**Sarlig beskyttelse:**
Barn og sarbare grupper krever ekstra forsiktighet.

**Historiske overgrep:**
- Milgrams lydighetseksperiment (etisk kritisert)
- Stanford fengselsstudie (avbrutt pga. skade)
- Tuskegee-studien (alvorlig overgrep)

**I dag:** Alle studier ma godkjennes av etisk komite pa forhand.`,
    },
    {
      id: 'psykologi-1-10-def-3',
      type: 'definition',
      title: 'Anvendelsesomrader',
      content: `**Klinisk psykologi:**
Vurderer og behandler psykiske lidelser. Bruker tester, terapi (KAT, psykodynamisk, etc.), og samarbeider med annet helsepersonell.

**Pedagogisk psykologi:**
Studerer laring og undervisning. Utvikler metoder for effektiv opplaring, stotter elever med larevansker.

**Arbeids- og organisasjonspsykologi:**
Rekruttering, ledelse, arbeidsmiljo, motivasjon, teamarbeid. Skal oke trivsel og produktivitet.

**Helsepsykologi:**
Psykologiske faktorer i fysisk helse. Livsstilsendring, mestring av sykdom, forebygging.

**Rettspsykologi:**
Troverdighet av vitner, risikovurdering, behandling av lovbrytere, barnets beste ved omsorgssvikt.

**Idrettspsykologi:**
Mental trening, motivasjon, prestasjonsangst, teamdynamikk, skaderehabiliteering.`,
    },
    {
      id: 'psykologi-1-10-example-1',
      type: 'example',
      title: 'Eksempel: Korrelasjon vs. kausalitet',
      problem: 'Hvorfor kan vi ikke slutte at A forarsaker B bare fordi de korrelerer?',
      solution: `**Problemet:**
To variabler kan henge sammen (korrelere) uten at den ene forarsaker den andre.

**Eksempel:**
Studier viser sammenheng mellom iskremssalg og drukningsulykker. Betyr det at iskrem forarsaker drukning?

**Mulige forklaringer:**
1. A forarsaker B (iskrem -> drukning) - usannsynlig
2. B forarsaker A (drukning -> iskrem) - usannsynlig
3. C forarsaker bade A og B (varmt vaer -> mer iskrem OG mer bading)

**Det er den tredje!** Varmt vaer forklarer begge.

**Andre eksempler:**
- Skostorrelse korrelerer med leseferdighet (alder er tredje variabel)
- Antall brannmenn korrelerer med skadeomfang (storrelsen pa brannen)

**Konklusjon:**
Kun eksperimenter med kontroll og manipulasjon kan fastslå arsakssammenheng.`,
    },
    {
      id: 'psykologi-1-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-10-ex-1',
        number: '10.1',
        type: 'classic',
        task: 'Forklar forskjellen mellom eksperiment og korrelasjonsstudie.',
        hints: ['Tenk pa manipulasjon og arsak-virkning'],
        solution: 'I et eksperiment manipulerer forskeren en uavhengig variabel og maler effekten på en avhengig variabel, med tilfeldig fordeling til grupper. Dette tillater arsaksslutninger. I korrelasjonsstudier males sammenheng mellom variabler uten manipulasjon, sa man kan ikke fastslå hva som forarsaker hva.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-10-ex-2',
        number: '10.2',
        type: 'classic',
        task: 'Hva menes med "korrelasjon er ikke kausalitet"? Gi et eksempel.',
        hints: ['Tenk pa tredje variabler'],
        solution: 'At to ting henger sammen (korrelerer) betyr ikke at den ene forarsaker den andre. Det kan vaere en tredje variabel som pavirker begge. Eksempel: Antall brannmenn pa et arested korrelerer med skadeomfang, men brannmennene forarsaker ikke skaden - det er brannens storrelse som forarsaker bade flere brannmenn OG mer skade.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-10-ex-3',
        number: '10.3',
        type: 'classic',
        task: 'Hva innebarer informert samtykke i forskning?',
        hints: ['Tenk pa informasjon, frivillighet, rett til a trekke seg'],
        solution: 'Informert samtykke betyr at deltakere far tilstrekkelig informasjon om studiens formal, prosedyrer, potensielle risikoer og fordeler for de samtykker. Samtykket ma vaere frivillig uten press, og deltakerne ma vite at de kan trekke seg nar som helst uten negative konsekvenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-10-ex-4',
        number: '10.4',
        type: 'classic',
        task: 'Beskriv tre ulike anvendelsesomrader for psykologi.',
        hints: ['Velg fra klinisk, pedagogisk, arbeids-, helse-, rettspsykologi'],
        solution: 'Klinisk psykologi: Vurderer og behandler psykiske lidelser gjennom terapi og tester. Arbeidspsykologi: Jobber med rekruttering, ledelse, motivasjon og arbeidsmiljo i organisasjoner. Helsepsykologi: Studerer psykologiske faktorer i fysisk helse, hjelper med livsstilsendring og mestring av sykdom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-10-ex-5',
        number: '10.5',
        type: 'classic',
        task: 'Hva er forskjellen mellom validitet og reliabilitet?',
        hints: ['Tenk pa "maler vi riktig" vs. "maler vi konsistent"'],
        solution: 'Validitet handler om vi maler det vi faktisk skal male - om malet er treffende. Reliabilitet handler om konsistens - gir metoden like resultater ved gjentatte malinger? En metode kan vaere reliabel (konsistent) uten a vaere valid (male feil ting konsistent). God forskning krever begge deler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'psykologi-1-10-ex-6',
      type: 'exercise',
      exercise: {
        id: 'psykologi-1-10-ex-6',
        number: '10.6',
        type: 'classic',
        task: 'Hvorfor er etiske retningslinjer sa viktige i psykologisk forskning?',
        hints: ['Tenk pa beskyttelse av deltakere og historiske overgrep'],
        solution: 'Etiske retningslinjer beskytter forskningsdeltakere mot skade (fysisk og psykisk), sikrer at de deltar frivillig og informert, og beskytter deres personvern. Historiske overgrep (Tuskegee, Milgram) viste at uten regulering kan forskning skade mennesker. Etikk sikrer ogsa at psykologien opprettholder tillit hos offentligheten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const PSYKOLOGI_1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_PSYKOLOGI_1_1,
  CHAPTER_PSYKOLOGI_1_2,
  CHAPTER_PSYKOLOGI_1_3,
  CHAPTER_PSYKOLOGI_1_4,
  CHAPTER_PSYKOLOGI_1_5,
  CHAPTER_PSYKOLOGI_1_6,
  CHAPTER_PSYKOLOGI_1_7,
  CHAPTER_PSYKOLOGI_1_8,
  CHAPTER_PSYKOLOGI_1_9,
  CHAPTER_PSYKOLOGI_1_10,
];
