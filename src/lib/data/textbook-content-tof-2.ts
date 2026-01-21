/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Teknologi og forskningslære 2 (VG3)
 *
 * Følger LK20 læreplan for ToF 2 (TOF02-01)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Fordypning i vitenskapelig metode
// ============================================================================

export const CHAPTER_TOF_2_1: TextbookChapter = {
  id: 'tof-2-1',
  courseId: 'tof-2',
  chapterNumber: '1',
  title: 'Fordypning i vitenskapelig metode',
  description: 'Avanserte vitenskapelige metoder, forskningsdesign og kritisk evaluering av forskning.',
  estimatedMinutes: 75,
  competenceGoals: [
    'planlegge og gjennomføre egne undersøkelser med avanserte metoder',
    'vurdere kvalitet og pålitelighet i forskningsresultater',
    'drøfte etiske problemstillinger knyttet til forskning',
  ],
  content: [
    {
      id: 'tof-2-1-intro',
      type: 'text',
      content: `## Vitenskapelig metode på høyere nivå

I ToF 2 bygger vi videre på kunnskapen fra ToF 1 og går dypere inn i vitenskapelig metode. Vi skal lære å planlegge og gjennomføre mer komplekse undersøkelser, og kritisk vurdere andres forskning.

**Hovedtemaer i dette kapittelet:**
- Forskningsdesign og metodevalg
- Validitet og reliabilitet
- Eksperimentelle vs. ikke-eksperimentelle metoder
- Systematiske feilkilder
- Kritisk lesning av vitenskapelige artikler`,
    },
    {
      id: 'tof-2-1-def-1',
      type: 'definition',
      title: 'Forskningsdesign',
      content: `**Forskningsdesign** er den overordnede planen for hvordan en undersøkelse skal gjennomføres.

**Hovedtyper:**
- *Eksperimentelt design:* Forskeren manipulerer variabler og kontrollerer betingelser
- *Kvasi-eksperimentelt design:* Sammenligning av grupper uten full randomisering
- *Observasjonsstudie:* Forskeren observerer uten å påvirke
- *Spørreundersøkelse:* Systematisk innsamling av selvrapporterte data
- *Casestudie:* Dybdestudie av enkelttilfeller`,
    },
    {
      id: 'tof-2-1-def-2',
      type: 'definition',
      title: 'Validitet og reliabilitet',
      content: `**Validitet** handler om hvorvidt vi måler det vi faktisk ønsker å måle.
- *Intern validitet:* Kan vi stole på årsakssammenhengen?
- *Ekstern validitet:* Kan resultatene generaliseres?
- *Begrepsvaliditet:* Måler vi det teoretiske begrepet korrekt?

**Reliabilitet** handler om målingens pålitelighet og konsistens.
- *Test-retest reliabilitet:* Gir gjentatte målinger samme resultat?
- *Inter-rater reliabilitet:* Er ulike bedømmere enige?
- *Intern konsistens:* Måler alle delene av testen det samme?`,
    },
    {
      id: 'tof-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Vurdering av forskningsdesign',
      problem: 'En forsker ønsker å undersøke om en ny undervisningsmetode forbedrer elevenes læringsutbytte. Hvordan kan dette designes?',
      solution: `**Optimalt design - Randomisert kontrollert studie:**
1. Velg et representativt utvalg elever
2. Randomiser til to grupper: intervensjonsgruppe (ny metode) og kontrollgruppe (tradisjonell metode)
3. Gjennomfør pretest for å måle utgangsnivå
4. Gjennomfør undervisningen over en definert periode
5. Gjennomfør posttest
6. Sammenlign forbedring mellom gruppene

**Styrker:** Høy intern validitet, kontrollerer for konfunderende variabler
**Svakheter:** Kan være praktisk vanskelig, etiske hensyn ved å "holde tilbake" potensielt bedre undervisning`,
    },
    {
      id: 'tof-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof-2-1-ex-1',
        number: '1.1',
        type: 'classic',
        task: 'Forklar forskjellen mellom intern og ekstern validitet, og gi et eksempel på en studie med høy intern men lav ekstern validitet.',
        hints: ['Tenk på laboratorieeksperimenter vs. feltstudier'],
        solution: 'Intern validitet handler om årsakssammenheng - kan vi si at X forårsaket Y? Ekstern validitet handler om generaliserbarhet. Et laboratorieeksperiment med streng kontroll har høy intern validitet, men resultatene gjelder kanskje ikke i den virkelige verden (lav ekstern validitet).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof-2-1-ex-2',
        number: '1.2',
        type: 'classic',
        task: 'Hva er konfunderende variabler, og hvordan kan vi kontrollere for dem i et eksperiment?',
        hints: ['Tenk på randomisering og kontrollgrupper'],
        solution: 'Konfunderende variabler er faktorer som kan påvirke både uavhengig og avhengig variabel, og dermed gi falske sammenhenger. Vi kontrollerer for dem gjennom: randomisering, matching, kontrollgrupper, blindingsteknikker, og statistisk kontroll.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof-2-1-ex-3',
        number: '1.3',
        type: 'classic',
        task: 'Beskriv tre ulike typer feilkilder som kan påvirke resultatene i en spørreundersøkelse.',
        hints: ['Tenk på utvalgsskjevhet, responsbias, målefeil'],
        solution: '1) Utvalgsskjevhet: Utvalget er ikke representativt (f.eks. bare de mest engasjerte svarer). 2) Sosial ønskverdighet: Respondenter svarer det de tror er "riktig". 3) Ledende spørsmål: Spørsmålsformuleringen påvirker svarene. Andre: Hukommelsesfeil, rekkefølgeeffekter, manglende svar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof-2-1-ex-4',
        number: '1.4',
        type: 'classic',
        task: 'Velg et forskningsspørsmål og beskriv hvordan du ville designet en studie for å besvare det. Diskuter styrker og svakheter ved ditt valgte design.',
        hints: ['Vurder praktiske og etiske hensyn'],
        solution: 'Svaret avhenger av valgt tema. Vurder: Forskningsdesign (eksperimentelt, observasjonelt), utvalg, datainnsamlingsmetode, variabler, kontroll for feilkilder. Styrker og svakheter bør knyttes til validitet, reliabilitet, praktisk gjennomførbarhet og etikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof-2-1-ex-5',
        number: '1.5',
        type: 'classic',
        task: 'Finn en vitenskapelig artikkel og analyser metodedelen kritisk. Hvilke styrker og svakheter har studien?',
        hints: ['Se på utvalg, metode, kontrollvariabler, statistiske analyser'],
        solution: 'Analysen bør vurdere: Utvalgsstørrelse og representativitet, validitet og reliabilitet av måleinstrumenter, kontroll for konfunderende variabler, statistiske metoder, begrensninger som forfatterne selv nevner, og potensielle bias.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Statistikk og dataanalyse
// ============================================================================

export const CHAPTER_TOF_2_2: TextbookChapter = {
  id: 'tof-2-2',
  courseId: 'tof-2',
  chapterNumber: '2',
  title: 'Statistikk og dataanalyse',
  description: 'Avanserte statistiske metoder for analyse og tolkning av forskningsdata.',
  estimatedMinutes: 90,
  competenceGoals: [
    'velge og anvende relevante statistiske metoder',
    'tolke resultater fra statistiske analyser',
    'bruke digitale verktøy for dataanalyse',
  ],
  content: [
    {
      id: 'tof-2-2-intro',
      type: 'text',
      content: `## Statistikk i forskning

Statistikk er et uunnværlig verktøy i moderne forskning. Det hjelper oss å:
- Beskrive og oppsummere data
- Teste hypoteser
- Trekke slutninger fra utvalg til populasjon
- Vurdere usikkerhet i resultater

**Sentrale begreper:**
- Deskriptiv statistikk
- Inferensiell statistikk
- Hypotesetesting
- Signifikans og p-verdier
- Effektstørrelse`,
    },
    {
      id: 'tof-2-2-def-1',
      type: 'definition',
      title: 'Hypotesetesting',
      content: `**Hypotesetesting** er en systematisk metode for å avgjøre om observerte forskjeller er statistisk signifikante.

**Nullhypotese (H₀):** Ingen effekt eller forskjell (det vi vil motbevise)
**Alternativ hypotese (H₁):** Det finnes en effekt eller forskjell

**P-verdi:** Sannsynligheten for å observere resultatet (eller mer ekstremt) gitt at H₀ er sann.
- p < 0.05: Statistisk signifikant (vanlig terskel)
- p < 0.01: Sterkt signifikant
- p < 0.001: Svært sterkt signifikant`,
    },
    {
      id: 'tof-2-2-def-2',
      type: 'definition',
      title: 'Type I og Type II feil',
      content: `**Type I feil (falsk positiv):**
Forkaste H₀ når den er sann. Sannsynligheten er lik signifikansnivået α (typisk 0.05).

**Type II feil (falsk negativ):**
Beholde H₀ når den er usann. Sannsynligheten kalles β.

**Statistisk styrke (power):**
Sannsynligheten for å oppdage en reell effekt = 1 - β. Økes ved større utvalg, større effekt, eller høyere α.`,
    },
    {
      id: 'tof-2-2-def-3',
      type: 'definition',
      title: 'Vanlige statistiske tester',
      content: `**t-test:** Sammenligner gjennomsnitt mellom to grupper
- Uavhengig t-test: To forskjellige grupper
- Paret t-test: Samme gruppe målt to ganger

**ANOVA:** Sammenligner gjennomsnitt mellom tre eller flere grupper

**Kjikvadrattest:** Tester sammenheng mellom kategoriske variabler

**Korrelasjon:** Måler styrke og retning på sammenheng mellom kontinuerlige variabler (Pearson r)

**Regresjon:** Modellerer hvordan én variabel påvirker en annen`,
    },
    {
      id: 'tof-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Tolkning av statistiske resultater',
      problem: 'En studie viser at en ny medisin reduserer blodtrykk med gjennomsnittlig 5 mmHg (p = 0.03, 95% KI: 1-9 mmHg, Cohens d = 0.4). Hvordan tolker vi dette?',
      solution: `**Statistisk signifikans:**
p = 0.03 < 0.05, så resultatet er statistisk signifikant. Vi kan forkaste nullhypotesen om ingen effekt.

**Konfidensintervall:**
95% KI: 1-9 mmHg betyr at vi er 95% sikre på at den sanne effekten ligger i dette intervallet. Siden 0 ikke er inkludert, bekreftes signifikansen.

**Effektstørrelse:**
Cohens d = 0.4 indikerer en middels effekt. Dette forteller om den praktiske betydningen, ikke bare statistisk signifikans.

**Konklusjon:** Medisinen har en statistisk signifikant og klinisk relevant effekt på blodtrykk.`,
    },
    {
      id: 'tof-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof-2-2-ex-1',
        number: '2.1',
        type: 'classic',
        task: 'Forklar forskjellen mellom statistisk signifikans og praktisk betydning (effektstørrelse).',
        hints: ['Tenk på store utvalg og små effekter'],
        solution: 'Statistisk signifikans forteller om en effekt sannsynligvis er reell (ikke tilfeldig), mens effektstørrelse forteller hvor stor effekten er. Med store utvalg kan selv små, ubetydelige effekter bli signifikante. Derfor bør man alltid rapportere begge deler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof-2-2-ex-2',
        number: '2.2',
        type: 'classic',
        task: 'Hva er forskjellen mellom Type I og Type II feil? Gi eksempler fra medisinsk forskning.',
        hints: ['Type I = falsk positiv, Type II = falsk negativ'],
        solution: 'Type I feil: Konkludere at en medisin virker når den ikke gjør det (godkjenne virkningsløs behandling). Type II feil: Konkludere at en medisin ikke virker når den faktisk gjør det (avvise effektiv behandling). Begge har alvorlige konsekvenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof-2-2-ex-3',
        number: '2.3',
        type: 'classic',
        task: 'Når bør du bruke t-test, ANOVA og kjikvadrattest? Gi eksempler på forskningsspørsmål for hver.',
        hints: ['Tenk på datatype og antall grupper'],
        solution: 't-test: Sammenligne to gruppers gjennomsnitt (f.eks. effekt av trening vs. kontroll). ANOVA: Sammenligne tre+ gruppers gjennomsnitt (f.eks. effekt av ulike kostholdtyper). Kjikvadrat: Sammenheng mellom kategoriske variabler (f.eks. sammenheng mellom kjønn og yrkesvalg).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof-2-2-ex-4',
        number: '2.4',
        type: 'classic',
        task: 'Bruk et regneark eller statistikkprogram til å gjennomføre en enkel analyse av et datasett. Beskriv fremgangsmåte og resultater.',
        hints: ['Du kan bruke Excel, Google Sheets, eller Python'],
        solution: 'Besvarelsen bør inneholde: 1) Beskrivelse av data, 2) Valg av statistisk metode med begrunnelse, 3) Gjennomføring med skjermbilder/kode, 4) Tolkning av resultater inkludert signifikans og effektstørrelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof-2-2-ex-5',
        number: '2.5',
        type: 'classic',
        task: 'Forklar hva et 95% konfidensintervall betyr, og hvorfor det ofte er mer informativt enn bare p-verdien.',
        hints: ['Tenk på presisjon og usikkerhet'],
        solution: 'Et 95% KI angir et intervall der vi er 95% sikre på at den sanne populasjonsverdien befinner seg. Det er mer informativt enn p-verdien fordi det viser både størrelsen på effekten og presisjonen i estimatet. Et smalt KI indikerer høy presisjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Nanoteknologi
// ============================================================================

export const CHAPTER_TOF_2_3: TextbookChapter = {
  id: 'tof-2-3',
  courseId: 'tof-2',
  chapterNumber: '3',
  title: 'Nanoteknologi',
  description: 'Utforskning av nanoskala-fenomener og anvendelser innen materialer, medisin og elektronikk.',
  estimatedMinutes: 80,
  competenceGoals: [
    'gjøre rede for grunnleggende prinsipper i nanoteknologi',
    'beskrive anvendelser av nanoteknologi i ulike felt',
    'drøfte muligheter og utfordringer med nanoteknologi',
  ],
  content: [
    {
      id: 'tof-2-3-intro',
      type: 'text',
      content: `## Hva er nanoteknologi?

Nanoteknologi handler om å forstå og manipulere materie på nanoskala - typisk mellom 1 og 100 nanometer (nm). En nanometer er én milliardtedel av en meter (10⁻⁹ m).

**Størrelsessammenligning:**
- DNA-dobbeltheliks: ca. 2 nm bred
- Protein: 5-50 nm
- Virus: 20-300 nm
- Menneskehår: ca. 80 000 nm

På nanoskala oppfører materialer seg ofte annerledes enn i bulk-form på grunn av kvanteeffekter og stort overflate-til-volum-forhold.`,
    },
    {
      id: 'tof-2-3-def-1',
      type: 'definition',
      title: 'Nanomaterialer',
      content: `**Nanomaterialer** er materialer med minst én dimensjon i nanoskala.

**Typer nanomaterialer:**
- *Nulldimensjonale (0D):* Nanopartikler, kvanteprikker
- *Endimensjonale (1D):* Nanorør, nanotråder
- *Todimensjonale (2D):* Grafén, nanofilmer
- *Tredimensjonale (3D):* Nanokompositter, nanoporøse materialer

**Spesielle egenskaper:**
- Endrede optiske egenskaper (kvanteprikker endrer farge med størrelse)
- Økt reaktivitet (stort overflate/volum-forhold)
- Endret elektrisk ledningsevne
- Superparamagnetisme`,
    },
    {
      id: 'tof-2-3-def-2',
      type: 'definition',
      title: 'Karbonbaserte nanomaterialer',
      content: `**Fullerener (C₆₀):**
Sfæriske karbonmolekyler, "buckyballs". Brukes i elektronikk og medisin.

**Karbon-nanorør (CNT):**
Sylindere av grafén. Ekstremt sterke (100x sterkere enn stål), gode elektriske ledere. Brukes i komposittmaterialer og elektronikk.

**Grafén:**
Enkeltlag av karbonatomer i heksagonalt gitter. Sterkeste kjente materiale, utmerket elektrisk og termisk leder. Potensiale i batterier, sensorer, fleksibel elektronikk.`,
    },
    {
      id: 'tof-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Nanoteknologi i medisin',
      problem: 'Hvordan kan nanopartikler brukes til målrettet kreftbehandling?',
      solution: `**Nanomedisin for kreftbehandling:**

1. **Målrettet legemiddellevering:**
   - Nanopartikler lastet med cellegift
   - Overflaten dekkes med molekyler som gjenkjenner kreftceller
   - Medisinen frigjøres bare ved svulsten
   - Reduserer bivirkninger betydelig

2. **EPR-effekten (Enhanced Permeability and Retention):**
   - Tumorers blodårer er mer "lekke"
   - Nanopartikler akkumuleres passivt i svulster

3. **Teranostikk:**
   - Samme nanopartikkel brukes til både diagnose og behandling
   - Kan inneholde kontrastmiddel + medisin

**Eksempler i klinisk bruk:**
- Doxil (liposomalt doksorubicin) - godkjent kreftmedisin
- Jernoksid-nanopartikler for MR-kontrast`,
    },
    {
      id: 'tof-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof-2-3-ex-1',
        number: '3.1',
        type: 'classic',
        task: 'Forklar hvorfor materialer kan ha andre egenskaper på nanoskala enn i større størrelser.',
        hints: ['Tenk på overflate/volum-forhold og kvanteeffekter'],
        solution: 'På nanoskala: 1) Overflate/volum-forholdet blir enormt - flere atomer er eksponert på overflaten, noe som øker reaktivitet. 2) Kvanteeffekter blir dominerende - elektronene oppfører seg mer som bølger, noe som påvirker optiske og elektriske egenskaper. 3) Overflatespenning og intermolekylære krefter blir viktigere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof-2-3-ex-2',
        number: '3.2',
        type: 'classic',
        task: 'Sammenlign egenskapene til grafén og karbon-nanorør. Hvilke anvendelser passer best for hvert materiale?',
        hints: ['Tenk på struktur, styrke, ledningsevne'],
        solution: 'Grafén: 2D-struktur, ekstremt sterkt, utmerket elektrisk leder. Passer for: fleksible skjermer, hurtigeladende batterier, membraner. Karbon-nanorør: 1D-struktur, kan være halvledere eller ledere avhengig av hvordan de er rullet. Passer for: komposittmaterialer, nanoskala-elektronikk, sensorer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof-2-3-ex-3',
        number: '3.3',
        type: 'classic',
        task: 'Beskriv tre ulike anvendelsesområder for nanoteknologi og forklar hvordan nanomaterialenes egenskaper utnyttes.',
        hints: ['Medisin, elektronikk, materialer, energi'],
        solution: '1) Solceller: Kvanteprikker absorberer ulike bølgelengder, øker effektivitet. 2) Vannrensing: Nanofiltre fjerner bakterier og forurensninger pga. liten porestørrelse. 3) Kosmetikk: Nano-sinkoksid i solkrem blokkerer UV uten å være synlig (transparent). Andre: sensorer, katalysatorer, tekstiler.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof-2-3-ex-4',
        number: '3.4',
        type: 'classic',
        task: 'Drøft potensielle risikoer og etiske problemstillinger knyttet til nanoteknologi.',
        hints: ['Helse, miljø, regulering, tilgang'],
        solution: 'Risikoer: 1) Helse - nanopartikler kan krysse biologiske barrierer, ukjente langtidseffekter. 2) Miljø - persistens, bioakkumulering, økotoksisitet. 3) Regulering - vanskelig å spore og kontrollere. Etikk: Rettferdig tilgang til nanomedisin, personvern (nanosensorer), militær bruk, transparens i forskning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof-2-3-ex-5',
        number: '3.5',
        type: 'classic',
        task: 'Design et tenkt nanoteknologisk produkt. Beskriv hvilket nanomateriale du ville brukt, hvordan det ville fungere, og diskuter fordeler og ulemper.',
        hints: ['Vær kreativ men realistisk'],
        solution: 'Eksempel: Selvrengjørende vindu med nano-titandioksid. Virker fotokatalytisk - bryter ned organisk smuss i sollys. Superhydrofil overflate får vann til å spre seg og skylle bort smuss. Fordeler: Redusert vedlikehold, miljøvennlig. Ulemper: Kostnad, fungerer best i sollys, holdbarhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Romteknologi og astronomi
// ============================================================================

export const CHAPTER_TOF_2_4: TextbookChapter = {
  id: 'tof-2-4',
  courseId: 'tof-2',
  chapterNumber: '4',
  title: 'Romteknologi og astronomi',
  description: 'Moderne romforskning, satellitteknologi og utforskning av universet.',
  estimatedMinutes: 85,
  competenceGoals: [
    'gjøre rede for prinsipper bak romfart og satellitteknologi',
    'beskrive metoder for å studere universet',
    'drøfte teknologiske og vitenskapelige utfordringer ved romutforskning',
  ],
  content: [
    {
      id: 'tof-2-4-intro',
      type: 'text',
      content: `## Mennesket i rommet

Romforskning representerer menneskehetens streben etter å forstå universet og vår plass i det. Teknologien som utvikles for romfart har også mange anvendelser på jorden.

**Hovedområder:**
- Rakettvitenskap og framdrift
- Satellitter og baneberegninger
- Astronomi og astrofysikk
- Planetutforskning
- Søk etter liv i universet`,
    },
    {
      id: 'tof-2-4-def-1',
      type: 'definition',
      title: 'Rakettfysikk',
      content: `**Rakettlikningen (Tsiolkovskijs likning):**
$$\\Delta v = v_e \\ln\\left(\\frac{m_0}{m_f}\\right)$$

Der:
- Δv = hastighetsendring
- vₑ = eksoshastighet (hvor fort gassen strømmer ut)
- m₀ = startmasse (med drivstoff)
- mf = sluttmasse (uten drivstoff)

**Implikasjoner:**
- For å oppnå høy hastighet trengs enten høy eksoshastighet eller mye drivstoff
- Hver ekstra kg nyttelast krever betydelig mer drivstoff
- Derfor brukes flertrinnsraketter`,
    },
    {
      id: 'tof-2-4-def-2',
      type: 'definition',
      title: 'Satellittbaner',
      content: `**Banehøyder og perioder:**
- *LEO (Low Earth Orbit):* 200-2000 km, 90-120 min omløpstid
- *MEO (Medium Earth Orbit):* 2000-35786 km, GPS-satellitter
- *GEO (Geostationary Earth Orbit):* 35786 km, 24 timer omløpstid

**Geostasjonær bane:**
Satellitten "henger" over samme punkt på ekvator. Brukes til TV- og kommunikasjonssatellitter.

**Keplers lover:**
1. Baner er ellipser med sentrallegemet i ett brennpunkt
2. Arealloven: Lik areal i lik tid
3. T² ∝ a³ (perioden avhenger av halvakse)`,
    },
    {
      id: 'tof-2-4-example-1',
      type: 'example',
      title: 'Eksempel: James Webb-romteleskopet',
      problem: 'Hvordan fungerer James Webb-romteleskopet, og hvorfor ble det plassert ved L2-punktet?',
      solution: `**James Webb Space Telescope (JWST):**

**Teknologi:**
- 6.5 m hovedspeil (gullbelagt beryllium)
- Infrarød observasjon (0.6-28 μm)
- Solskjerm på størrelse med en tennisbane
- Avkjølt til -233°C for å detektere svak IR-stråling

**L2-punktet (Lagrange-punkt 2):**
- 1.5 millioner km fra jorden (motsatt retning fra solen)
- Stabil posisjon der gravitasjon fra sol og jord balanseres
- Fordeler:
  1. Konstant mørke forhold (solskjermen blokkerer sol, jord og måne)
  2. Stabilt termisk miljø
  3. Kontinuerlig observasjonsmulighet
  4. Lite drivstoff for banejusteringer

**Vitenskapelige mål:**
- Studere de første galaksene etter Big Bang
- Undersøke atmosfæren til exoplaneter
- Forstå stjerners og planeters dannelse`,
    },
    {
      id: 'tof-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof-2-4-ex-1',
        number: '4.1',
        type: 'classic',
        task: 'Forklar hvorfor flertrinnsraketter er mer effektive enn enkelttrinnsraketter for å nå rommet.',
        hints: ['Tenk på dødvekt og rakettlikningen'],
        solution: 'Flertrinnsraketter kaster tomme drivstofftanker underveis, slik at raketten ikke trenger å akselerere unødvendig masse. Ifølge rakettlikningen er Δv proporsjonal med ln(m₀/mf). Ved å redusere mf (kaste tankene) økes Δv for gjenværende drivstoff betydelig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof-2-4-ex-2',
        number: '4.2',
        type: 'classic',
        task: 'Sammenlign fordelene og ulempene ved å plassere teleskoper i rommet vs. på bakken.',
        hints: ['Tenk på atmosfæren, vedlikehold, kostnad'],
        solution: 'Romteleskoper: + Ingen atmosfærisk forstyrrelse, + Tilgang til alle bølgelengder, + Ingen værproblemer. - Ekstremt kostbart, - Vanskelig vedlikehold, - Begrenset størrelse. Bakketeleskoper: + Større speil mulig, + Lettere oppgraderbar, + Lavere kostnad. - Atmosfærisk forstyrrelse, - Begrenset til visse bølgelengder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof-2-4-ex-3',
        number: '4.3',
        type: 'classic',
        task: 'Beskriv tre metoder astronomer bruker for å oppdage og karakterisere exoplaneter.',
        hints: ['Transitt, radialhastighe, direkte avbildning'],
        solution: '1) Transittmetoden: Måler lysreduksjon når planet passerer foran stjernen. Gir størrelse og bane. 2) Radialhastighetmetoden: Måler stjernens "vingling" pga. planetens gravitasjon. Gir masse og bane. 3) Direkte avbildning: Blokkerer stjernelys for å se planeten direkte. Vanskelig men gir spektroskopiske data om atmosfære.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof-2-4-ex-4',
        number: '4.4',
        type: 'classic',
        task: 'Drøft teknologiske og fysiologiske utfordringer ved en bemannet Mars-ferd.',
        hints: ['Reisevarighet, stråling, psykologi, ressurser'],
        solution: 'Teknologiske: Pålitelig fremdriftssystem, livsstøttesystem for 2-3 år, landing og oppstigning fra Mars, kommunikasjonsforsinkelse. Fysiologiske: Stråling (kosmisk + sol), muskel- og bentap i mikrogravitasjon, psykologiske effekter av isolasjon. Løsninger: Magnetisk skjerming, kunstig gravitasjon, streng utvelgelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof-2-4-ex-5',
        number: '4.5',
        type: 'classic',
        task: 'Velg et aktuelt romforskningsprosjekt og beskriv dets vitenskapelige mål, teknologi og forventede funn.',
        hints: ['F.eks. Artemis, JWST, Mars-rovere, Europa Clipper'],
        solution: 'Besvarelsen bør inneholde: Prosjektets navn og organisasjon (NASA, ESA, etc.), vitenskapelige mål, nøkkelteknologi og instrumenter, tidsplan, forventede oppdagelser/resultater, og prosjektets betydning for videre forskning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: Medisinsk teknologi
// ============================================================================

export const CHAPTER_TOF_2_5: TextbookChapter = {
  id: 'tof-2-5',
  courseId: 'tof-2',
  chapterNumber: '5',
  title: 'Medisinsk teknologi',
  description: 'Moderne medisinsk teknologi for diagnostikk, behandling og forskning.',
  estimatedMinutes: 80,
  competenceGoals: [
    'gjøre rede for prinsipper bak moderne medisinsk bildediagnostikk',
    'beskrive hvordan teknologi brukes i medisinsk behandling',
    'drøfte etiske problemstillinger knyttet til medisinsk teknologi',
  ],
  content: [
    {
      id: 'tof-2-5-intro',
      type: 'text',
      content: `## Teknologi i medisinens tjeneste

Medisinsk teknologi har revolusjonert hvordan vi diagnostiserer og behandler sykdommer. Fra avanserte bildediagnostiske metoder til presisjonskirurgi og genterapi.

**Hovedområder:**
- Bildediagnostikk (MR, CT, PET, ultralyd)
- Biomarkører og laboratorietester
- Proteser og implantater
- Robotkirurgi
- Genterapi og CRISPR
- Persontilpasset medisin`,
    },
    {
      id: 'tof-2-5-def-1',
      type: 'definition',
      title: 'Bildediagnostiske metoder',
      content: `**Røntgen og CT:**
Bruker ioniserende stråling. CT tar snittbilder som kan rekonstrueres til 3D.

**MR (Magnetisk resonans):**
Bruker sterke magnetfelt og radiobølger. Ingen ioniserende stråling. Utmerket for bløtvev.

**Ultralyd:**
Bruker høyfrekvente lydbølger. Sanntidsbilder, trygt, billig. Begrenset av luft og ben.

**PET (Positronemisjonstomografi):**
Bruker radioaktive sporstoffer. Viser metabolsk aktivitet, ikke bare struktur. Ofte kombinert med CT.

**SPECT:**
Lignende PET, men bruker gammaemittere. Billigere, lavere oppløsning.`,
    },
    {
      id: 'tof-2-5-def-2',
      type: 'definition',
      title: 'CRISPR-Cas9 genredigering',
      content: `**Hvordan det fungerer:**
1. Guide-RNA designes for å matche målsekvensen i DNA
2. Cas9-proteinet (en "molekylær saks") finner og kutter DNA på riktig sted
3. Cellens reparasjonsmekanismer aktiveres
4. Genet kan deaktiveres (knock-out) eller en ny sekvens kan settes inn

**Anvendelser:**
- Behandling av genetiske sykdommer (sigdcelleanemi, β-thalassemi)
- Kreftimmunterapi (CAR-T-celler)
- Sykdomsresistente avlinger
- Grunnforskning

**Begrensninger:**
- Off-target-effekter (utilsiktede endringer)
- Levering til riktige celler i kroppen
- Etiske betraktninger`,
    },
    {
      id: 'tof-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Da Vinci-robotkirurgi',
      problem: 'Hvordan fungerer robotassistert kirurgi, og hva er fordelene?',
      solution: `**Da Vinci kirurgisystem:**

**Komponenter:**
1. Kirurgkonsoll med 3D-visning og joysticks
2. Pasientvogn med robotarmer
3. Synsystem med forstørrelse

**Hvordan det fungerer:**
- Kirurgen sitter ved konsollen og styrer instrumentene
- Roboten filtrerer ut skjelving
- Bevegelser kan skaleres (store handbevegelser → små presise snitt)
- Instrumentene kan bevege seg i flere akser enn en menneskelig hånd

**Fordeler:**
- Minimal invasiv kirurgi (mindre snitt)
- Bedre presisjon
- Mindre blødning
- Raskere rekonvalesens
- 3D-visualisering med forstørrelse

**Begrensninger:**
- Høy kostnad (10-20 mill. kr)
- Ingen taktil feedback
- Krever spesialisert trening
- Ikke alle operasjoner egner seg`,
    },
    {
      id: 'tof-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof-2-5-ex-1',
        number: '5.1',
        type: 'classic',
        task: 'Sammenlign MR og CT som bildediagnostiske metoder. Når er hver metode best egnet?',
        hints: ['Tenk på stråling, bløtvev vs. ben, tilgjengelighet'],
        solution: 'MR: Best for bløtvev (hjerne, ledd, muskler), ingen stråling, men langsom og dyr. CT: Best for ben, lunger, akutte skader, rask, men bruker ioniserende stråling. MR foretrukkes for nevrologiske undersøkelser og kreft i bløtvev. CT for traumer, lungesykdom og benbrudd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof-2-5-ex-2',
        number: '5.2',
        type: 'classic',
        task: 'Forklar prinsippet bak CRISPR-Cas9 og gi eksempler på hvordan det kan brukes i medisin.',
        hints: ['Guide-RNA, molekylær saks, genreparasjon'],
        solution: 'CRISPR bruker et guide-RNA til å lede Cas9-proteinet til et spesifikt sted i DNA, der det kutter. Cellens reparasjon kan da deaktivere genet eller sette inn ny sekvens. Medisinske anvendelser: Behandle sigdcelleanemi ved å korrigere mutasjon, lage CAR-T-celler for kreftbehandling, behandle arvelige øyesykdommer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof-2-5-ex-3',
        number: '5.3',
        type: 'classic',
        task: 'Hva menes med "persontilpasset medisin", og hvordan kan genomsekvensering bidra til dette?',
        hints: ['Individuelle forskjeller, biomarkører, målrettet behandling'],
        solution: 'Persontilpasset medisin tilpasser behandling til den enkelte pasient basert på genetikk, livsstil og miljø. Genomsekvensering kan identifisere: 1) Sykdomsrisiko før symptomer oppstår, 2) Hvilke medisiner som vil virke best (farmakogenomikk), 3) Målrettede kreftbehandlinger basert på svulstens genetikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof-2-5-ex-4',
        number: '5.4',
        type: 'classic',
        task: 'Drøft etiske problemstillinger knyttet til genredigering av mennesker.',
        hints: ['Somatiske vs. kjønnsceller, samtykke, ulikhet, "designerbabyer"'],
        solution: 'Etiske spørsmål: 1) Somatisk vs. kimbane-redigering - endringer som arves er mer kontroversielle. 2) Terapeutisk vs. forbedring - hvor går grensen? 3) Samtykke - fremtidige generasjoner kan ikke samtykke. 4) Sosial ulikhet - vil bare rike ha tilgang? 5) Uforutsette konsekvenser - hva om vi gjør feil?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof-2-5-ex-5',
        number: '5.5',
        type: 'classic',
        task: 'Velg en medisinsk teknologi og beskriv hvordan den fungerer, dens anvendelser, og potensial for fremtidig utvikling.',
        hints: ['Proteser, implantater, diagnostikk, behandling'],
        solution: 'Besvarelsen bør inneholde: Teknologiens virkemåte (vitenskapelige prinsipper), nåværende kliniske anvendelser, fordeler og begrensninger, pågående forskning og utvikling, og potensielle fremtidige anvendelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: Kunstig intelligens og maskinlæring
// ============================================================================

export const CHAPTER_TOF_2_6: TextbookChapter = {
  id: 'tof-2-6',
  courseId: 'tof-2',
  chapterNumber: '6',
  title: 'Kunstig intelligens og maskinlæring',
  description: 'Prinsipper bak AI og maskinlæring, anvendelser og samfunnsmessige konsekvenser.',
  estimatedMinutes: 85,
  competenceGoals: [
    'gjøre rede for grunnleggende prinsipper i kunstig intelligens og maskinlæring',
    'beskrive anvendelser av AI i ulike sektorer',
    'drøfte muligheter, begrensninger og etiske aspekter ved AI',
  ],
  content: [
    {
      id: 'tof-2-6-intro',
      type: 'text',
      content: `## Hva er kunstig intelligens?

Kunstig intelligens (AI) handler om å lage systemer som kan utføre oppgaver som normalt krever menneskelig intelligens: gjenkjenne mønstre, ta beslutninger, lære av erfaring.

**Viktige begreper:**
- **AI:** Overordnet felt for "intelligent" databehandling
- **Maskinlæring (ML):** AI som lærer fra data uten eksplisitt programmering
- **Dyp læring:** ML med nevrale nettverk med mange lag
- **Generativ AI:** Systemer som kan skape nytt innhold (tekst, bilder, etc.)`,
    },
    {
      id: 'tof-2-6-def-1',
      type: 'definition',
      title: 'Typer maskinlæring',
      content: `**Veiledet læring (Supervised):**
Trenes på merkede data (input + fasit). Brukes til klassifikasjon og regresjon.
*Eksempel:* Trene modell til å gjenkjenne hunder/katter med merkede bilder.

**Ikke-veiledet læring (Unsupervised):**
Finner mønstre i umerkede data. Brukes til klyngeanalyse og dimensjonsreduksjon.
*Eksempel:* Gruppere kunder etter kjøpsmønster.

**Forsterkningslæring (Reinforcement):**
Lærer gjennom prøving og feiling med belønning/straff.
*Eksempel:* AI som lærer å spille spill.`,
    },
    {
      id: 'tof-2-6-def-2',
      type: 'definition',
      title: 'Nevrale nettverk',
      content: `**Struktur:**
- Inputlag: Mottar data
- Skjulte lag: Bearbeider informasjon
- Outputlag: Gir resultat

**Hvordan det lærer:**
1. Data går gjennom nettverket (forward pass)
2. Feil beregnes ved å sammenligne output med fasit
3. Feil sendes bakover (backpropagation)
4. Vekter justeres for å redusere feil
5. Gjenta med mer data

**Dyp læring:**
Nettverk med mange skjulte lag. Kan lære komplekse representasjoner. Krever store mengder data og regnekraft.`,
    },
    {
      id: 'tof-2-6-example-1',
      type: 'example',
      title: 'Eksempel: Store språkmodeller (LLM)',
      problem: 'Hvordan fungerer store språkmodeller som GPT, og hva kan de gjøre?',
      solution: `**Store språkmodeller (LLM):**

**Arkitektur:**
- Basert på Transformer-arkitektur
- Milliarder av parametere
- Trent på enorme mengder tekst fra internett

**Hvordan de fungerer:**
1. Tekst tokeniseres (deles i biter)
2. Tokens representeres som vektorer (embeddings)
3. Attention-mekanismen vekter relevans av ulike deler
4. Modellen predikerer neste token basert på kontekst

**Kapabiliteter:**
- Tekstgenerering og oppsummering
- Oversettelse
- Spørsmål og svar
- Koding og feilsøking
- Kreativ skriving

**Begrensninger:**
- Kan "hallusinere" (finne på fakta)
- Begrenset kontekstvindu
- Ingen ekte forståelse eller resonnering
- Bias fra treningsdata
- Kan ikke oppdatere seg selv`,
    },
    {
      id: 'tof-2-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof-2-6-ex-1',
        number: '6.1',
        type: 'classic',
        task: 'Forklar forskjellen mellom veiledet og ikke-veiledet maskinlæring, og gi eksempler på anvendelser av hver.',
        hints: ['Merkede vs. umerkede data'],
        solution: 'Veiledet læring bruker merkede data (input + fasit) for å trene modellen. Eksempel: Spam-filter trent på e-poster merket som spam/ikke-spam. Ikke-veiledet læring finner mønstre i umerkede data. Eksempel: Kundesegmentering der algoritmen selv finner naturlige grupperinger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof-2-6-ex-2',
        number: '6.2',
        type: 'classic',
        task: 'Beskriv hvordan et nevralt nettverk lærer, og forklar begrepene forward pass og backpropagation.',
        hints: ['Vekter, feilberegning, gradient'],
        solution: 'Forward pass: Data går gjennom nettverket lag for lag, hver node beregner vektet sum + aktivering. Feil beregnes ved output. Backpropagation: Feilen sendes bakover, og gradienten beregnes for hver vekt. Vektene justeres i retning som reduserer feil (gradientnedstigning). Prosessen gjentas mange ganger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof-2-6-ex-3',
        number: '6.3',
        type: 'classic',
        task: 'Beskriv tre ulike anvendelsesområder for AI i samfunnet og diskuter fordeler og utfordringer ved hver.',
        hints: ['Helse, transport, finans, utdanning'],
        solution: '1) Helse: AI for røntgentolkning - raskere diagnose, men risiko for feil og ansvarsspørsmål. 2) Transport: Selvkjørende biler - økt sikkerhet potensielt, men komplekse etiske dilemmaer. 3) Finans: Kredittscoring - effektivt, men kan forsterke bias og diskriminering. Alle krever regulering og transparens.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof-2-6-ex-4',
        number: '6.4',
        type: 'classic',
        task: 'Hva er algoritmisk bias, hvordan oppstår det, og hvordan kan det motvirkes?',
        hints: ['Treningsdata, historiske skjevheter, representasjon'],
        solution: 'Algoritmisk bias oppstår når AI-systemer systematisk diskriminerer. Årsaker: Skjeve treningsdata (historisk diskriminering), underrepresentasjon av grupper, biased merking av data. Motvirkes gjennom: Diversifiserte datasett, bias-testing, transparens, regulering, tverrfaglige team.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof-2-6-ex-5',
        number: '6.5',
        type: 'classic',
        task: 'Drøft hvordan AI kan påvirke arbeidsmarkedet i fremtiden. Hvilke jobber er mest utsatt, og hvilke nye muligheter kan oppstå?',
        hints: ['Automatisering, nye yrker, kompetansekrav'],
        solution: 'Utsatte jobber: Rutinepreget arbeid (dataregistrering, enkel kundeservice, noe produksjon). Nye muligheter: AI-trening og vedlikehold, etikk og regulering, kreative yrker der AI assisterer, omsorgsyrker. Viktige kompetanser: Kreativitet, sosiale ferdigheter, kritisk tenkning, AI-literacy.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: Robotikk og automasjon
// ============================================================================

export const CHAPTER_TOF_2_7: TextbookChapter = {
  id: 'tof-2-7',
  courseId: 'tof-2',
  chapterNumber: '7',
  title: 'Robotikk og automasjon',
  description: 'Robotteknologi, automatiserte systemer og deres anvendelser i industri og samfunn.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for grunnleggende prinsipper i robotikk',
    'beskrive hvordan roboter brukes i ulike sektorer',
    'drøfte konsekvenser av økt automatisering',
  ],
  content: [
    {
      id: 'tof-2-7-intro',
      type: 'text',
      content: `## Robotikk - maskinene som handler

Robotikk kombinerer mekanikk, elektronikk, informatikk og AI for å skape maskiner som kan utføre oppgaver i den fysiske verden.

**Hovedkomponenter i en robot:**
- **Sensorer:** Gir informasjon om omgivelsene (kamera, lidar, trykkfølere)
- **Aktuatorer:** Utfører bevegelser (motorer, hydraulikk, pneumatikk)
- **Kontroller:** Prosesserer informasjon og tar beslutninger
- **Mekanisk struktur:** Kroppen som bærer alt

**Typer roboter:**
- Industriroboter (sveisingroboter, monteringsroboter)
- Serviceroboter (rengjøring, logistikk)
- Medisinske roboter (kirurgi, rehabilitering)
- Utforskningsroboter (romfart, undersjøisk)
- Samarbeidsroboter (cobots)`,
    },
    {
      id: 'tof-2-7-def-1',
      type: 'definition',
      title: 'Grader av frihet (DOF)',
      content: `**Grader av frihet** beskriver hvor mange uavhengige bevegelser en robot kan utføre.

En robotarm har typisk 6 DOF:
- 3 for posisjon (x, y, z)
- 3 for orientering (roll, pitch, yaw)

Menneskearmen har ca. 7 DOF, noe som gir redundans og fleksibilitet.

**Arbeidsområde:**
Volumet roboten kan nå. Bestemmes av armens lengde og leddenes bevegelsesområde.

**Nøyaktighet vs. repeterbarhet:**
- Nøyaktighet: Hvor nær roboten kommer ønsket posisjon
- Repeterbarhet: Hvor konsistent roboten returnerer til samme posisjon`,
    },
    {
      id: 'tof-2-7-def-2',
      type: 'definition',
      title: 'Sensorer i robotikk',
      content: `**Proprioseptive sensorer** (interne):
- Enkodere: Måler leddvinkler
- Kraftmomentsensorer: Måler krefter
- Gyroskop og akselerometer: Orientering og bevegelse

**Eksteroceptive sensorer** (eksterne):
- Kamera: Visuell informasjon
- Lidar: 3D-avstandsmåling med laser
- Ultralydsensorer: Avstandsmåling
- Taktile sensorer: Berøring

**Sensorfusjon:**
Kombinere data fra flere sensorer for bedre situasjonsforståelse.`,
    },
    {
      id: 'tof-2-7-example-1',
      type: 'example',
      title: 'Eksempel: Autonome mobile roboter',
      problem: 'Hvordan navigerer et autonomt lagerhus-robot?',
      solution: `**Autonome mobile roboter (AMR) i lager:**

**Lokalisering (hvor er jeg?):**
- SLAM (Simultaneous Localization and Mapping)
- Bruker lidar til å bygge kart mens den kjører
- Sammenligner sensordata med internt kart

**Planlegging (hvor skal jeg?):**
- Global baneplanlegging: Finner beste rute fra A til B
- Lokal baneplanlegging: Unngår hindringer underveis

**Sensorikk:**
- Lidar for kartlegging
- Kameraer for objektgjenkjenning
- Sikkerhetsscannere for kollisjonsunngåelse

**Flåtestyring:**
- Sentralisert system koordinerer mange roboter
- Unngår kollisjoner og optimerer trafikk
- Dynamisk oppgavetildeling

**Fordeler:**
- Fleksibilitet (ingen faste baner)
- Skalerbarhet
- 24/7 drift`,
    },
    {
      id: 'tof-2-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof-2-7-ex-1',
        number: '7.1',
        type: 'classic',
        task: 'Forklar hva som menes med grader av frihet (DOF) i robotikk, og hvorfor en typisk industrirobot har 6 DOF.',
        hints: ['Posisjon og orientering i 3D-rom'],
        solution: 'Grader av frihet er antall uavhengige bevegelser en mekanisme kan utføre. For å plassere et objekt vilkårlig i 3D-rom trengs 3 DOF for posisjon (x,y,z) og 3 DOF for orientering (roll, pitch, yaw). Totalt 6 DOF gir full kontroll over posisjon og orientering av verktøyet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof-2-7-ex-2',
        number: '7.2',
        type: 'classic',
        task: 'Beskriv forskjellen mellom tradisjonelle industriroboter og samarbeidsroboter (cobots).',
        hints: ['Sikkerhet, fleksibilitet, programmering'],
        solution: 'Tradisjonelle industriroboter: Høy hastighet og kraft, krever sikkerhetsgjerder, kompleks programmering, faste oppgaver. Cobots: Designet for sikker interaksjon med mennesker (kraftbegrensning, polstrede overflater), enkel programmering (ofte "lead-through"), fleksibel bruk, lavere hastighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof-2-7-ex-3',
        number: '7.3',
        type: 'classic',
        task: 'Forklar hvordan SLAM (Simultaneous Localization and Mapping) fungerer, og hvorfor det er viktig for autonome roboter.',
        hints: ['Kartbygging og lokalisering samtidig'],
        solution: 'SLAM løser "høna-eller-egget"-problemet: For å lokalisere seg trenger roboten et kart, men for å lage kart må den vite hvor den er. SLAM gjør begge deler samtidig ved å: 1) Samle sensordata, 2) Finne landemerker, 3) Oppdatere kart og posisjon iterativt. Kritisk for roboter i ukjente miljøer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof-2-7-ex-4',
        number: '7.4',
        type: 'classic',
        task: 'Drøft hvordan økt robotisering kan påvirke arbeidsmarkedet og samfunnet.',
        hints: ['Produktivitet, arbeidsplasser, ulikhet, nye muligheter'],
        solution: 'Positive effekter: Økt produktivitet, lavere priser, fjerne farlige/kjedelige jobber, nye høykvalifiserte jobber. Negative effekter: Tap av rutinearbeid, økt ulikhet (kapital vs. arbeid), behov for omskolering, geografisk konsentrasjon. Løsninger: Utdanning, sosiale sikkerhetsnett, mulig skattelegging av automatisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof-2-7-ex-5',
        number: '7.5',
        type: 'classic',
        task: 'Design en robot for en selvvalgt oppgave. Beskriv hvilke sensorer, aktuatorer og kontrollsystemer som trengs.',
        hints: ['Definer oppgaven tydelig, tenk på utfordringer'],
        solution: 'Besvarelsen bør inneholde: Oppgavebeskrivelse, sensorvalg med begrunnelse (hva må roboten oppfatte?), aktuatorvalg (hvilke bevegelser kreves?), kontrollstrategi (hvordan ta beslutninger?), sikkerhetshensyn, og diskusjon av begrensninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: Etikk i teknologi og forskning
// ============================================================================

export const CHAPTER_TOF_2_8: TextbookChapter = {
  id: 'tof-2-8',
  courseId: 'tof-2',
  chapterNumber: '8',
  title: 'Etikk i teknologi og forskning',
  description: 'Etiske prinsipper, forskningsetikk og samfunnsansvar i teknologiutvikling.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjøre rede for sentrale forskningsetiske prinsipper',
    'drøfte etiske dilemmaer knyttet til teknologiutvikling',
    'reflektere over eget og andres samfunnsansvar',
  ],
  content: [
    {
      id: 'tof-2-8-intro',
      type: 'text',
      content: `## Etikk - teknologiens kompass

All forskning og teknologiutvikling skjer i en samfunnsmessig kontekst. Etikk hjelper oss å navigere vanskelige valg og sikre at teknologi tjener mennesker og samfunn.

**Hvorfor er etikk viktig?**
- Teknologi har enorm påvirkningskraft
- Konsekvenser kan være vanskelige å forutse
- Maktforholdet mellom utvikler og bruker
- Noen effekter er irreversible
- Forskningsfusk undergraver tilliten til vitenskap`,
    },
    {
      id: 'tof-2-8-def-1',
      type: 'definition',
      title: 'Forskningsetiske prinsipper',
      content: `**Grunnleggende prinsipper:**

1. **Ærlighet:** Ikke fabriker, falsifiser eller plagier data
2. **Objektivitet:** Unngå bias i design, analyse og tolkning
3. **Integritet:** Hold løfter, vær konsekvent
4. **Åpenhet:** Del data, metoder og resultater
5. **Respekt for deltakere:** Informert samtykke, konfidensialitet
6. **Samfunnsansvar:** Vurder konsekvenser av forskningen

**Helsinkideklarasjonen:**
Internasjonal standard for medisinsk forskning på mennesker. Krav om etisk godkjenning, informert samtykke, og at deltakernes velferd går foran vitenskapelige interesser.`,
    },
    {
      id: 'tof-2-8-def-2',
      type: 'definition',
      title: 'Etiske rammeverk',
      content: `**Konsekvensetikk (utilitarisme):**
Handlingens etiske verdi bestemmes av konsekvensene. Mål: Maksimere nytte/velferd for flest mulig.

**Pliktetikk (deontologi):**
Noen handlinger er rett eller galt uavhengig av konsekvenser. Respekt for rettigheter, verdighet, autonomi.

**Dydsetikk:**
Fokus på karaktertrekk og dyder (ærlighet, rettferdighet, visdom).

**Føre-var-prinsippet:**
Ved fare for alvorlig eller irreversibel skade, bør usikkerhet ikke brukes som grunn til å utsette tiltak.`,
    },
    {
      id: 'tof-2-8-example-1',
      type: 'example',
      title: 'Eksempel: Etiske dilemmaer i AI',
      problem: 'En selvkjørende bil må velge mellom å kjøre på en fotgjenger eller sette passasjerene i fare. Hvordan bør den programmeres?',
      solution: `**Det etiske dilemmaet (trolley-problemet i moderne form):**

**Ulike perspektiver:**

*Konsekvensetisk:*
Minimer total skade. Men hvem definerer "verdi" - alder, antall, helse?

*Pliktetisk:*
Man skal ikke aktivt skade noen. Å svinge er en aktiv handling.

*Praktiske utfordringer:*
- Usikkerhet i situasjonen
- Hvem har ansvaret? (produsent, eier, passasjer)
- Kan vi forutse slike situasjoner?

**Mulige tilnærminger:**
1. Programmer aldri bilen til å "velge" - la fysikkens lover bestemme
2. Minimer statistisk skade basert på data
3. La eieren velge (og ta ansvar)
4. Følg lovverk/standard

**Diskusjon:**
Dette er et ekstremt scenario. I praksis bør fokus være på å unngå slike situasjoner helt gjennom bedre sensorer, kjøremønster, og infrastruktur.`,
    },
    {
      id: 'tof-2-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof-2-8-ex-1',
        number: '8.1',
        type: 'classic',
        task: 'Forklar forskjellen mellom konsekvensetikk og pliktetikk, og gi et eksempel på hvordan de kan gi ulike svar på et etisk dilemma.',
        hints: ['Konsekvenser vs. prinsipper'],
        solution: 'Konsekvensetikk vurderer handlinger etter deres utfall (maksimer nytte). Pliktetikk ser på handlingen selv (visse handlinger er gale uansett). Eksempel: Er det greit å lyve for å redde liv? Konsekvensetikk: Ja, konsekvensen er god. Pliktetikk: Nei, løgn er prinsipielt galt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof-2-8-ex-2',
        number: '8.2',
        type: 'classic',
        task: 'Hva menes med informert samtykke i forskning, og hvorfor er det viktig?',
        hints: ['Frivillighet, informasjon, forståelse'],
        solution: 'Informert samtykke betyr at deltakere frivillig aksepterer å delta etter å ha fått tilstrekkelig informasjon om studiens formål, prosedyrer, risikoer og rettigheter. Viktig fordi: Respekterer autonomi, beskytter mot utnyttelse, bygger tillit til forskning, er lovpålagt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof-2-8-ex-3',
        number: '8.3',
        type: 'classic',
        task: 'Drøft hvilke etiske hensyn som bør vurderes ved utvikling av overvåkningsteknologi.',
        hints: ['Personvern, maktbalanse, misbruk, nytte'],
        solution: 'Personvern: Hvor mye overvåkning er akseptabelt? Samtykke: Kan man samtykke til å bli overvåket? Maktbalanse: Hvem overvåker hvem, og med hvilke begrensninger? Formålsutglidning: Teknologi brukt til nye formål. Diskriminering: Ansiktsgjenkjenning fungerer ulikt for ulike grupper. Demokrati: Nedkjølingseffekt på ytringsfrihet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof-2-8-ex-4',
        number: '8.4',
        type: 'classic',
        task: 'Hva er føre-var-prinsippet, og når bør det anvendes i teknologiutvikling?',
        hints: ['Usikkerhet, irreversibilitet, alvorlighet'],
        solution: 'Føre-var-prinsippet sier at ved risiko for alvorlig eller irreversibel skade, skal mangel på vitenskapelig sikkerhet ikke brukes som grunn til å utsette tiltak. Bør anvendes: Ved nye teknologier med ukjente effekter (nanomaterialer), miljøpåvirkning (GMO), systemisk risiko (AI i kritisk infrastruktur).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-8-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof-2-8-ex-5',
        number: '8.5',
        type: 'classic',
        task: 'Analyser et selvvalgt etisk dilemma knyttet til teknologi. Bruk minst to ulike etiske rammeverk.',
        hints: ['Beskriv dilemmaet, analyser fra ulike perspektiver, konkluder'],
        solution: 'Besvarelsen bør inneholde: Klar beskrivelse av dilemmaet, analyse fra konsekvensetisk perspektiv, analyse fra pliktetisk perspektiv, eventuelt andre rammeverk, sammenligning av konklusjoner, og egen reflektert konklusjon med begrunnelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9: Selvstendig forskningsprosjekt
// ============================================================================

export const CHAPTER_TOF_2_9: TextbookChapter = {
  id: 'tof-2-9',
  courseId: 'tof-2',
  chapterNumber: '9',
  title: 'Selvstendig forskningsprosjekt',
  description: 'Planlegging, gjennomføring og dokumentasjon av et eget forskningsprosjekt.',
  estimatedMinutes: 90,
  competenceGoals: [
    'planlegge og gjennomføre et selvstendig forskningsprosjekt',
    'dokumentere forskningsprosessen',
    'presentere resultater på en vitenskapelig måte',
  ],
  content: [
    {
      id: 'tof-2-9-intro',
      type: 'text',
      content: `## Ditt eget forskningsprosjekt

I ToF 2 skal du gjennomføre et selvstendig forskningsprosjekt. Dette gir deg praktisk erfaring med hele forskningsprosessen - fra idé til ferdig rapport.

**Faser i prosjektet:**
1. Idéutvikling og problemformulering
2. Litteratursøk og forarbeid
3. Metodevalg og planlegging
4. Datainnsamling
5. Analyse og tolkning
6. Rapportskriving
7. Presentasjon

**Tips for suksess:**
- Velg et tema du er genuint interessert i
- Avgrens problemstillingen - heller liten og grundig enn stor og overfladisk
- Start tidlig med litteratursøk
- Hold en forskningsdagbok underveis`,
    },
    {
      id: 'tof-2-9-def-1',
      type: 'definition',
      title: 'Prosjektplanlegging',
      content: `**Problemstilling:**
En god problemstilling er:
- Avgrenset og spesifikk
- Undersøkbar med tilgjengelige ressurser
- Interessant og relevant

**Fra tema til problemstilling:**
Tema: Klimaendringer
↓
Avgrenset tema: Effekt av klimaendringer på norsk natur
↓
Problemstilling: "Hvordan har vekstsesongen for bjørk i Sør-Norge endret seg de siste 50 årene, og kan dette knyttes til temperaturendringer?"

**Prosjektplan:**
- Tidsplan med milepæler
- Ressursbehov (utstyr, data, tid)
- Risikovurdering
- Alternativ plan B`,
    },
    {
      id: 'tof-2-9-def-2',
      type: 'definition',
      title: 'Forskningsdagbok',
      content: `**Hva er en forskningsdagbok?**
En løpende dokumentasjon av alt du gjør i prosjektet.

**Innhold:**
- Dato og tid
- Hva du gjorde
- Observasjoner og målinger
- Problemer du støtte på
- Idéer og refleksjoner
- Endringer i planen

**Hvorfor viktig?**
- Sporing av fremgang
- Reproduserbarhet
- Hjelp ved rapportskriving
- Dokumentasjon ved tvil
- Læring for fremtidige prosjekter

**Format:**
Kan være analog (notatbok) eller digital (OneNote, Google Docs). Det viktigste er at du bruker den konsekvent.`,
    },
    {
      id: 'tof-2-9-example-1',
      type: 'example',
      title: 'Eksempel: Fra idé til problemstilling',
      problem: 'Du er interessert i hvordan musikk påvirker konsentrasjon. Hvordan utvikler du dette til en undersøkbar problemstilling?',
      solution: `**Trinn 1: Utforsk temaet**
Les litt om temaet. Hva vet vi allerede? Hva er uavklart?

**Trinn 2: Avgrens**
- Hvilken type musikk? (klassisk, pop, instrumental?)
- Hvilken type konsentrasjon? (lesing, matte, kreativt?)
- Hvem? (ungdom, voksne, elever?)
- Hvordan måle? (oppgaveprestasjoner, selvrapportering?)

**Trinn 3: Formuler hypotese**
"Elever som hører instrumental musikk mens de gjør matematikkoppgaver, får flere riktige svar enn elever som jobber i stillhet."

**Trinn 4: Operasjonaliser**
- Uavhengig variabel: Musikk (instrumental) vs. stillhet
- Avhengig variabel: Antall riktige svar på standardisert matematikktest
- Kontrollvariabler: Vanskelighetsgrad, tid, forstyrrelser

**Trinn 5: Vurder gjennomførbarhet**
- Kan jeg rekruttere deltakere?
- Har jeg tilgang til standardisert test?
- Er det etiske problemstillinger?
- Rekker jeg dette innenfor tidsrammen?`,
    },
    {
      id: 'tof-2-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof-2-9-ex-1',
        number: '9.1',
        type: 'classic',
        task: 'Utvikle tre mulige problemstillinger innenfor et selvvalgt temaområde. Vurder styrker og svakheter ved hver.',
        hints: ['Tenk på avgrensning, gjennomførbarhet, interesse'],
        solution: 'Besvarelsen bør vise tre problemstillinger som er gradert i spesifisitet/avgrensning. Vurder for hver: Er den undersøkbar? Har jeg tilgang til nødvendige ressurser? Er den tilstrekkelig avgrenset? Er den interessant/relevant? Velg til slutt den beste med begrunnelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof-2-9-ex-2',
        number: '9.2',
        type: 'classic',
        task: 'Lag en detaljert prosjektplan for ditt forskningsprosjekt, inkludert tidsplan og milepæler.',
        hints: ['Bruk Gantt-diagram eller lignende'],
        solution: 'Prosjektplanen bør inneholde: Problemstilling, bakgrunn, metodevalg med begrunnelse, tidsplan med milepæler (litteratursøk, datainnsamling, analyse, skriving), ressursbehov, risikovurdering med tiltak, og vurdering av etiske hensyn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof-2-9-ex-3',
        number: '9.3',
        type: 'classic',
        task: 'Gjennomfør et litteratursøk innenfor ditt prosjekttema og skriv en kort litteraturgjennomgang (ca. 500 ord).',
        hints: ['Bruk akademiske databaser som Google Scholar'],
        solution: 'Litteraturgjennomgangen bør: Beskrive søkestrategi (database, søkeord), oppsummere relevant forskning (hva vet vi?), identifisere kunnskapshull (hva mangler?), og relatere til egen problemstilling. Inkluder referanser i konsistent format.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof-2-9-ex-4',
        number: '9.4',
        type: 'classic',
        task: 'Start en forskningsdagbok og før den i minst én uke. Reflekter over hva du har lært av prosessen.',
        hints: ['Skriv daglig, inkluder både fremgang og utfordringer'],
        solution: 'Dagboken bør vise: Daglige innføringer med dato, beskrivelse av aktiviteter, observasjoner/resultater, problemer og løsninger, idéer for videre arbeid. Refleksjonen bør vurdere: Hva fungerte? Hva var utfordrende? Hvordan hjalp dagboken?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof-2-9-ex-5',
        number: '9.5',
        type: 'classic',
        task: 'Vurder hvilke etiske hensyn som er relevante for ditt prosjekt og beskriv hvordan du vil håndtere dem.',
        hints: ['Personvern, samtykke, risikoer, interessekonflikter'],
        solution: 'Vurderingen bør identifisere: Hvem påvirkes av forskningen? Kreves samtykke? Hvordan sikres konfidensialitet? Er det potensielle risikoer for deltakere? Er det interessekonflikter? Beskriv konkrete tiltak for å håndtere hvert hensyn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: Vitenskapelig publisering
// ============================================================================

export const CHAPTER_TOF_2_10: TextbookChapter = {
  id: 'tof-2-10',
  courseId: 'tof-2',
  chapterNumber: '10',
  title: 'Vitenskapelig publisering',
  description: 'Skriving av vitenskapelige rapporter, referanser og presentasjon av forskning.',
  estimatedMinutes: 75,
  competenceGoals: [
    'skrive en vitenskapelig rapport med korrekt struktur',
    'bruke referanser og sitater korrekt',
    'presentere forskningsresultater muntlig og visuelt',
  ],
  content: [
    {
      id: 'tof-2-10-intro',
      type: 'text',
      content: `## Å formidle forskning

Vitenskapelig publisering er siste steg i forskningsprosessen. Resultatene må kommuniseres til andre for å ha verdi. God formidling krever både presisjon og klarhet.

**Formål med publisering:**
- Dele ny kunnskap med forskningssamfunnet
- Muliggjøre etterprøving og kritikk
- Bygge videre på andres arbeid
- Dokumentere vitenskapelig fremgang

**Ulike formater:**
- Vitenskapelig artikkel
- Rapport/oppgave
- Poster
- Muntlig presentasjon
- Populærvitenskapelig formidling`,
    },
    {
      id: 'tof-2-10-def-1',
      type: 'definition',
      title: 'IMRaD-strukturen',
      content: `**IMRaD** er standardstrukturen for vitenskapelige artikler:

**Introduction (Innledning):**
- Bakgrunn og motivasjon
- Problemstilling og hypotese
- Kort om hva som ble gjort

**Methods (Metode):**
- Detaljert beskrivelse av fremgangsmåte
- Nok detaljer til at andre kan gjenta studien
- Materialer, prosedyrer, analysemetoder

**Results (Resultater):**
- Presenter funnene objektivt
- Bruk figurer og tabeller
- Ikke tolk - bare beskriv

**Discussion (Diskusjon):**
- Tolk resultatene
- Sammenlign med tidligere forskning
- Diskuter begrensninger
- Konkluder og foreslå videre forskning`,
    },
    {
      id: 'tof-2-10-def-2',
      type: 'definition',
      title: 'Referansehåndtering',
      content: `**Hvorfor referere?**
- Gi kreditt til originalforfattere
- Vise at påstander har belegg
- La leseren finne kildene
- Unngå plagiat

**Vanlige referansestiler:**
- **APA:** Vanlig i samfunnsvitenskap og psykologi
  (Forfatter, årstall)
- **Vancouver:** Vanlig i medisin - nummer i tekst
- **Harvard:** Lignende APA
- **IEEE:** Vanlig i teknologi

**Eksempel (APA):**
I teksten: "(Hansen & Olsen, 2023)"
I litteraturlisten: "Hansen, K. & Olsen, P. (2023). Tittel på artikkel. Tidsskriftsnavn, 15(2), 45-67."

**Tips:**
Bruk referansehåndteringsverktøy som Zotero, Mendeley eller EndNote.`,
    },
    {
      id: 'tof-2-10-example-1',
      type: 'example',
      title: 'Eksempel: Skrive en god metodedel',
      problem: 'Hvordan beskriver du en eksperimentell metode slik at andre kan gjenta forsøket?',
      solution: `**God metodebeskrivelse:**

**Deltakere/materiale:**
"30 VG3-elever (15 jenter, 15 gutter, gjennomsnittsalder 18.2 år) fra tre ulike skoler i Oslo-området ble rekruttert via oppslag. Inklusjonskriterier: Normalt syn (med eller uten korreksjon), ingen diagnostisert konsentrasjonsvanske."

**Prosedyre:**
"Deltakerne ble randomisert til to grupper (musikk/stillhet) ved loddtrekning. Hver deltaker gjennomførte en 20-minutters matematikktest i et stille rom. Testgruppen hørte instrumental klassisk musikk (Bachs Goldberg-variasjoner) via hodetelefoner (65 dB). Kontrollgruppen brukte hodetelefoner uten lyd."

**Materialer:**
"Matematikktesten besto av 40 standardiserte oppgaver fra Nasjonale prøver 2022, med stigende vanskelighetsgrad. Musikken ble spilt fra Spotify via JBL-hodetelefoner."

**Dataanalyse:**
"Antall riktige svar ble sammenlignet mellom gruppene med uavhengig t-test (α = 0.05) i SPSS versjon 28."`,
    },
    {
      id: 'tof-2-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof-2-10-ex-1',
        number: '10.1',
        type: 'classic',
        task: 'Skriv et abstract (sammendrag) på ca. 200 ord for et tenkt eller reelt forskningsprosjekt. Følg IMRaD-strukturen.',
        hints: ['Inkluder bakgrunn, metode, hovedfunn og konklusjon'],
        solution: 'Abstractet bør inneholde: 1-2 setninger bakgrunn/problemstilling, 2-3 setninger om metode, 2-3 setninger om hovedresultater, 1-2 setninger konklusjon. Unngå referanser og forkortelser. Vær presis og konkret.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof-2-10-ex-2',
        number: '10.2',
        type: 'classic',
        task: 'Konverter følgende kilde til korrekt APA-format: En bok fra 2022 av Per Hansen og Kari Olsen kalt "Forskningsmetode i praksis" utgitt av Universitetsforlaget.',
        hints: ['Forfatter(e), (år). Tittel i kursiv. Utgiver.'],
        solution: 'Hansen, P. & Olsen, K. (2022). Forskningsmetode i praksis. Universitetsforlaget.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof-2-10-ex-3',
        number: '10.3',
        type: 'classic',
        task: 'Lag en figur (graf eller diagram) som presenterer et tenkt datasett, og skriv en figurtekst som beskriver innholdet.',
        hints: ['Figurteksten skal kunne forstås uten å lese brødteksten'],
        solution: 'Figuren bør ha: Tydelige akselabels med enheter, forklarende tittel, lesbar skrift, passende fargevalg. Figurteksten (under figuren) bør beskrive hva figuren viser, utvalg, og eventuelle statistiske mål. Eksempel: "Figur 1. Gjennomsnittlig antall riktige svar (± standardavvik) for musikk- og kontrollgruppen (n=15 per gruppe)."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof-2-10-ex-4',
        number: '10.4',
        type: 'classic',
        task: 'Skriv en diskusjonsdel (ca. 400 ord) som tolker tenkte resultater og setter dem i sammenheng med tidligere forskning.',
        hints: ['Tolk, sammenlign, diskuter begrensninger, konkluder'],
        solution: 'Diskusjonen bør: Oppsummere hovedfunn, tolke hva de betyr, sammenligne med lignende studier (med referanser), diskutere mulige forklaringer, erkjenne begrensninger, og avslutte med implikasjoner og forslag til videre forskning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof-2-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof-2-10-ex-5',
        number: '10.5',
        type: 'classic',
        task: 'Lag en 5-minutters presentasjon av ditt forskningsprosjekt med 5-8 lysbilder. Beskriv hva hvert lysbilde inneholder.',
        hints: ['Visuelt fokus, ikke for mye tekst, fortell en historie'],
        solution: 'Lysbilder: 1) Tittel og navn, 2) Problemstilling/motivasjon, 3) Bakgrunn/teori (kort), 4) Metode (illustrer), 5-6) Resultater (figurer/grafer), 7) Konklusjon og implikasjoner, 8) Spørsmål. Hvert lysbilde: maks 5-6 punkter, bruk bilder/figurer, snakk mer enn du viser.',
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

export const TOF_2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TOF_2_1,
  CHAPTER_TOF_2_2,
  CHAPTER_TOF_2_3,
  CHAPTER_TOF_2_4,
  CHAPTER_TOF_2_5,
  CHAPTER_TOF_2_6,
  CHAPTER_TOF_2_7,
  CHAPTER_TOF_2_8,
  CHAPTER_TOF_2_9,
  CHAPTER_TOF_2_10,
];
