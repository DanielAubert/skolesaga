/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Økonomi og driftsledelse (VG3) - Del 8: Bærekraft og samfunnsansvar
 * Kapittel 8.1-8.5
 *
 * LK20-kompetansemål:
 * - gjøre rede for bedriftens samfunnsansvar og etiske utfordringer
 * - vurdere hvordan bedrifter kan arbeide med bærekraftig utvikling
 * - forklare hva miljøsertifisering innebærer for en virksomhet
 * - drøfte sammenhengen mellom økonomi, miljø og sosiale forhold
 * - vurdere virksomheters bærekraftsrapportering
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Samfunnsansvar (CSR)
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_8_1: TextbookChapter = {
  id: 'okonomi-drift-8-1',
  courseId: 'okonomi-drift',
  chapterNumber: '8.1',
  title: 'Samfunnsansvar (CSR)',
  description: 'En innforing i bedrifters samfunnsansvar. Du larer om den tredoble bunnlinjen, interessentmodellen og hvordan bedrifter kan balansere profitt med ansvar for mennesker og miljo.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'od-8-1-intro',
      type: 'text',
      content: `## Bedriftens rolle i samfunnet

Bedrifter eksisterer ikke i et vakuum. De pavirker ansatte, lokalsamfunn, miljo og hele samfunnet. I moderne naringsliv forventes det at bedrifter tar ansvar utover det a tjene penger. Dette kalles samfunnsansvar, eller CSR (Corporate Social Responsibility).

I dette kapittelet skal du lare:
- Hva samfunnsansvar (CSR) innebarer
- Hva den tredoble bunnlinjen betyr
- Hvordan interessentmodellen brukes
- Forskjellen mellom frivillig og lovpalagt ansvar`,
    },
    {
      id: 'od-8-1-def-1',
      type: 'definition',
      title: 'Samfunnsansvar (CSR)',
      content: `**Samfunnsansvar** (CSR - Corporate Social Responsibility) er bedriftens frivillige integrasjon av sosiale og miljomessige hensyn i sin daglige drift og i samhandling med interessenter. Det handler om a ta ansvar utover det loven krever.`,
    },
    {
      id: 'od-8-1-text-1',
      type: 'text',
      content: `### Den tredoble bunnlinjen

Tradisjonelt har bedrifter blitt malt pa en bunnlinje: okonomisk resultat. Den tredoble bunnlinjen (Triple Bottom Line) utvider dette til tre dimensjoner:

**1. Okonomisk bunnlinje (Profit)**
- Lonnsomhet og verdiskaping
- Skatteinntekter til samfunnet
- Arbeidsplasser og lonn

**2. Sosial bunnlinje (People)**
- Gode arbeidsforhold og HMS
- Mangfold og inkludering
- Menneskerettigheter i leverandorkjeden

**3. Miljo-bunnlinje (Planet)**
- Reduserte klimagassutslipp
- Ansvarlig ressursbruk
- Beskyttelse av biologisk mangfold

En bedrift er forst virkelig vellykket nar den presterer godt pa alle tre omradene.`,
    },
    {
      id: 'od-8-1-def-2',
      type: 'definition',
      title: 'Interessent',
      content: `En **interessent** (stakeholder) er enhver person, gruppe eller organisasjon som pavirkes av eller kan pavirke bedriftens virksomhet. Eksempler er ansatte, kunder, leverandorer, eiere, myndigheter og lokalsamfunn.`,
    },
    {
      id: 'od-8-1-text-2',
      type: 'text',
      content: `### Interessentmodellen

Interessentmodellen viser at bedriften har ansvar overfor mange ulike grupper:

**Primare interessenter:**
- **Eiere/aksjonarer:** Avkastning og verdiokning
- **Ansatte:** Lonn, sikkerhet, utvikling
- **Kunder:** Kvalitet, pris, service
- **Leverandorer:** Rettferdig betaling, langsiktige avtaler

**Sekundare interessenter:**
- **Myndigheter:** Skatteinnbetalinger, lovlydighet
- **Lokalsamfunn:** Arbeidsplasser, miljo
- **Miljoorganisasjoner:** Barekraftig drift
- **Media:** Apenhet og transparens

Utfordringen er at interessentenes behov ofte kan sta i konflikt med hverandre. Eierne onsker hoy avkastning, mens ansatte onsker hoye lonninger.`,
    },
    {
      id: 'od-8-1-example-1',
      type: 'example',
      title: 'Eksempel: Stormberg og samfunnsansvar',
      content: `Den norske friluftsklarprodusenten Stormberg er kjent for sitt sterke samfunnsengasjement:

**Sosialt:** Minst 25 % av de ansatte skal vare mennesker som har statt utenfor arbeidslivet. De ansetter folk med hull i CV-en og gir dem en sjanse.

**Miljo:** Stormberg bruker resirkulerte materialer og har innfort reparasjonstjeneste for a forlenge levetiden pa produktene.

**Okonomisk:** Bedriften er lonnsom og viser at det er mulig a drive lonnsomt og ta bredt samfunnsansvar.`,
    },
    {
      id: 'od-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'od-8-1-ex-1',
        number: '8.1.1',
        type: 'multiple-choice',
        task: 'Hva menes med den tredoble bunnlinjen?',
        options: [
          { id: 'a', text: 'At bedriften har tre ulike regnskaper', isCorrect: false },
          { id: 'b', text: 'At bedriften vurderes pa okonomi, sosiale forhold og miljo', isCorrect: true },
          { id: 'c', text: 'At bedriften ma betale tre typer skatt', isCorrect: false },
          { id: 'd', text: 'At bedriften har tre ulike eiere', isCorrect: false },
        ],
        solution: 'Den tredoble bunnlinjen (Triple Bottom Line) betyr at en bedrift vurderes pa tre dimensjoner: okonomisk resultat (Profit), sosiale forhold (People) og miljopavirkning (Planet).',
      },
    },
    {
      id: 'od-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'od-8-1-ex-2',
        number: '8.1.2',
        type: 'multiple-choice',
        task: 'Hvilken av folgende er en sekundar interessent?',
        options: [
          { id: 'a', text: 'Ansatte', isCorrect: false },
          { id: 'b', text: 'Kunder', isCorrect: false },
          { id: 'c', text: 'Miljoorganisasjoner', isCorrect: true },
          { id: 'd', text: 'Eiere', isCorrect: false },
        ],
        solution: 'Miljoorganisasjoner er sekundare interessenter fordi de ikke har en direkte okonomisk relasjon til bedriften, men pavirkes av og kan pavirke bedriftens virksomhet.',
      },
    },
    {
      id: 'od-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'od-8-1-ex-3',
        number: '8.1.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom frivillig og lovpalagt samfunnsansvar, og gi eksempler pa begge.',
        solution: 'Lovpalagt ansvar er det bedriften palegges gjennom lover, som HMS-krav, skatteinnbetaling og apenhetslov. Frivillig CSR gar utover lovens krav, for eksempel a stotte lokale foreninger eller velge miljovennlige leverandorer.',
      },
    },
    {
      id: 'od-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'od-8-1-ex-4',
        number: '8.1.4',
        type: 'classic',
        task: 'Velg en bedrift du kjenner til. Identifiser minst fire ulike interessenter og beskriv hva de forventer av bedriften.',
        solution: 'For eksempel Rema 1000: 1) Kunder forventer lave priser og god kvalitet. 2) Ansatte forventer rettferdig lonn og gode arbeidsforhold. 3) Leverandorer forventer rettferdig betaling og langsiktige kontrakter. 4) Lokalsamfunnet forventer arbeidsplasser og at butikken tar miljoansvar.',
      },
    },
    {
      id: 'od-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'od-8-1-ex-5',
        number: '8.1.5',
        type: 'classic',
        task: 'Drofte om CSR er noe bedrifter gjor fordi det er riktig, eller fordi det er lonnsomt.',
        solution: 'Noen bedrifter er genuint motivert av verdier. Samtidig viser forskning at CSR kan vare lonnsomt: det bygger omdomme, tiltrekker kunder og ansatte, og reduserer risiko. I praksis er motivasjonen ofte en kombinasjon.',
      },
    },
    {
      id: 'od-8-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'od-8-1-ex-6',
        number: '8.1.6',
        type: 'classic',
        task: 'Forklar Carrolls CSR-pyramide og gi et eksempel pa hvert niva.',
        solution: 'Carrolls pyramide har fire nivaer: 1) Okonomisk ansvar: vare lonnsom. 2) Juridisk ansvar: folge lover og regler. 3) Etisk ansvar: handle riktig utover lovkrav. 4) Filantropisk ansvar: gi tilbake til samfunnet, f.eks. sponse lokale idrettslag.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: Miljoledelse
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_8_2: TextbookChapter = {
  id: 'okonomi-drift-8-2',
  courseId: 'okonomi-drift',
  chapterNumber: '8.2',
  title: 'Miljoledelse',
  description: 'Du larer om miljoledelse som strategisk verktoy. Kapittelet dekker ISO 14001, livssyklusanalyse, okologisk fotavtrykk og hvordan bedrifter kan jobbe systematisk med a redusere miljopavirkningen.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'od-8-2-intro',
      type: 'text',
      content: `## Systematisk arbeid med miljo

Miljoledelse handler om a integrere miljohensyn i alle deler av bedriftens virksomhet. Det er ikke nok a ha gode intensjoner - bedriften trenger et system for a planlegge, gjennomfore, kontrollere og forbedre miljoarbeidet.

I dette kapittelet skal du lare:
- Hva miljoledelse innebarer
- Hvordan ISO 14001 fungerer
- Hva en livssyklusanalyse er
- Hvordan okologisk fotavtrykk beregnes`,
    },
    {
      id: 'od-8-2-def-1',
      type: 'definition',
      title: 'Miljoledelse',
      content: `**Miljoledelse** er den delen av bedriftens ledelsessystem som brukes til a utvikle og gjennomfore miljopolitikken og styre bedriftens miljoaspekter. Det innebarer systematisk planlegging, gjennomforing, kontroll og forbedring av miljoprestasjonene.`,
    },
    {
      id: 'od-8-2-text-1',
      type: 'text',
      content: `### ISO 14001 - Miljoledelsessystem

ISO 14001 er en internasjonal standard for miljoledelse. Den gir bedrifter et rammeverk basert pa PDCA-syklusen:

**1. Planlegge (Plan)**
- Kartlegge miljoaspekter og miljopavirkning
- Sette miljonal og lage handlingsplaner
- Identifisere relevante lover og krav

**2. Gjennomfore (Do)**
- Implementere tiltak og prosedyrer
- Opplare ansatte i miljoarbeid

**3. Kontrollere (Check)**
- Overvake og male miljoprestasjoner
- Gjennomfore interne revisjoner

**4. Forbedre (Act)**
- Korrigere avvik og forebygge gjentakelse
- Kontinuerlig forbedring av systemet

PDCA-syklusen sikrer at miljoarbeidet stadig forbedres.`,
    },
    {
      id: 'od-8-2-def-2',
      type: 'definition',
      title: 'Livssyklusanalyse (LCA)',
      content: `En **livssyklusanalyse** (LCA - Life Cycle Assessment) er en metode for a vurdere miljopavirkningen av et produkt gjennom hele dets levetid, fra utvinning av ravarer, via produksjon og bruk, til avfallshandtering. Ofte kalt "fra vugge til grav".`,
    },
    {
      id: 'od-8-2-text-2',
      type: 'text',
      content: `### Livssyklusanalyse i praksis

En livssyklusanalyse ser pa hele produktets livslos:

**Fase 1: Ravarer** - Utvinning og transport av materialer
**Fase 2: Produksjon** - Energi- og vannforbruk, utslipp
**Fase 3: Distribusjon** - Transport og emballasje
**Fase 4: Bruk** - Energiforbruk, vedlikehold, levetid
**Fase 5: Avfallshandtering** - Gjenvinning, forbrenning, deponering

En LCA gir bedriften kunnskap om hvor de storste miljobelastningene oppstar.`,
    },
    {
      id: 'od-8-2-text-3',
      type: 'text',
      content: `### Okologisk fotavtrykk

**Karbonfotavtrykk:**
- Maler totale klimagassutslipp i tonn CO2-ekvivalenter
- Norges gjennomsnitt: ca. 8 tonn CO2 per person per ar

**Scope 1, 2 og 3:**
- **Scope 1:** Direkte utslipp fra egen virksomhet
- **Scope 2:** Indirekte utslipp fra innkjopt energi
- **Scope 3:** Alle andre indirekte utslipp (leverandorkjede, produktbruk)

Scope 3 utgjor ofte 70-90 % av totale utslipp, men er vanskeligst a beregne.`,
    },
    {
      id: 'od-8-2-example-1',
      type: 'example',
      title: 'Eksempel: Livssyklusanalyse av en t-skjorte',
      content: `**Ravarer:** Bomullsproduksjon krever ca. 2700 liter vann per t-skjorte.
**Produksjon:** Farging og behandling bruker kjemikalier og energi.
**Distribusjon:** Transport fra Asia til Norge gir CO2-utslipp.
**Bruk:** Vask og tork star for en stor del av energiforbruket.
**Avfall:** Kun ca. 1 % av tekstiler resirkuleres til nye tekstiler.

Bedriften kan bruke okologisk bomull, velge sjotransport og tilby innsamling av brukte klar.`,
    },
    {
      id: 'od-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'od-8-2-ex-1',
        number: '8.2.1',
        type: 'multiple-choice',
        task: 'Hva star PDCA for i ISO 14001?',
        options: [
          { id: 'a', text: 'Price, Demand, Cost, Assessment', isCorrect: false },
          { id: 'b', text: 'Plan, Do, Check, Act', isCorrect: true },
          { id: 'c', text: 'Produce, Deliver, Control, Audit', isCorrect: false },
          { id: 'd', text: 'Plan, Design, Create, Approve', isCorrect: false },
        ],
        solution: 'PDCA star for Plan-Do-Check-Act og er kjernen i ISO 14001. Bedriften planlegger miljotiltak, gjennomforer dem, kontrollerer resultatene og forbedrer systemet.',
      },
    },
    {
      id: 'od-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'od-8-2-ex-2',
        number: '8.2.2',
        type: 'multiple-choice',
        task: 'Hva inkluderer Scope 3-utslipp?',
        options: [
          { id: 'a', text: 'Direkte utslipp fra egne anlegg', isCorrect: false },
          { id: 'b', text: 'Utslipp fra innkjopt energi', isCorrect: false },
          { id: 'c', text: 'Indirekte utslipp fra leverandorkjede og produktbruk', isCorrect: true },
          { id: 'd', text: 'Kun utslipp fra transport', isCorrect: false },
        ],
        solution: 'Scope 3 dekker alle indirekte utslipp utenom innkjopt energi, som leverandorkjede, ansattes reiser og produktbruk hos kunder. Det utgjor ofte 70-90 % av totale utslipp.',
      },
    },
    {
      id: 'od-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'od-8-2-ex-3',
        number: '8.2.3',
        type: 'classic',
        task: 'Forklar hva en livssyklusanalyse er og hvorfor den er nyttig for en bedrift.',
        solution: 'En livssyklusanalyse vurderer miljopavirkningen av et produkt gjennom hele levetiden: fra ravarer til avfallshandtering. Den er nyttig fordi bedriften far kunnskap om hvor de storste miljobelastningene oppstar, og kan sette inn tiltak der det gir storst effekt.',
      },
    },
    {
      id: 'od-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'od-8-2-ex-4',
        number: '8.2.4',
        type: 'classic',
        task: 'Beskriv de fire stegene i PDCA-syklusen og gi et konkret eksempel for hvert steg.',
        solution: '1) Plan: Bedriften kartlegger at transporten gir store utslipp og setter mal om 20 % reduksjon. 2) Do: De bytter til elbiler og optimerer ruteplanlegging. 3) Check: Etter seks maneder maler de at utslippene er redusert med 15 %. 4) Act: De justerer planen og utvider elbilflaten.',
      },
    },
    {
      id: 'od-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'od-8-2-ex-5',
        number: '8.2.5',
        type: 'classic',
        task: 'Forklar forskjellen mellom Scope 1, 2 og 3-utslipp. Hvorfor er Scope 3 vanskeligst a handtere?',
        solution: 'Scope 1 er direkte utslipp fra egne anlegg. Scope 2 er indirekte utslipp fra innkjopt energi. Scope 3 er alle andre indirekte utslipp. Scope 3 er vanskeligst fordi bedriften ikke kontrollerer disse utslippene direkte - de avhenger av leverandorenes praksis og kundenes bruk.',
      },
    },
    {
      id: 'od-8-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'od-8-2-ex-6',
        number: '8.2.6',
        type: 'classic',
        task: 'Gjennomfor en forenklet livssyklusanalyse av en mobiltelefon. Beskriv miljopavirkningen i minst fire faser.',
        solution: 'Ravarer: Utvinning av sjeldne metaller forarsaker naturodeleggelse. Produksjon: Sammenstilling krever energi og kjemikalier. Distribusjon: Frakt fra Asia gir CO2-utslipp. Bruk: Lading forbruker strom, og telefonen byttes ut etter 2-3 ar. Avfall: E-avfall inneholder giftige stoffer, men ogsa verdifulle materialer som kan gjenvinnes.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: Etikk i naringslivet
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_8_3: TextbookChapter = {
  id: 'okonomi-drift-8-3',
  courseId: 'okonomi-drift',
  chapterNumber: '8.3',
  title: 'Etikk i naringslivet',
  description: 'Du larer om etiske utfordringer i naringslivet, inkludert korrupsjon, varsling og etiske retningslinjer. Kapittelet gir verktoy for a vurdere etiske dilemmaer i en bedriftskontekst.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'od-8-3-intro',
      type: 'text',
      content: `## Riktig og galt i forretningslivet

Naringslivet star overfor etiske dilemmaer hver dag. Skal man akseptere en gave fra en leverandor? Bor man si ifra om ulovlige forhold pa arbeidsplassen? Etikk i naringslivet handler om a skille mellom riktig og galt i forretningssammenheng.

I dette kapittelet skal du lare:
- Hva naringsetikk innebarer
- Hva korrupsjon er og hvorfor det er skadelig
- Hva varsling betyr og hvordan varslere beskyttes
- Hvordan bedrifter lager etiske retningslinjer`,
    },
    {
      id: 'od-8-3-def-1',
      type: 'definition',
      title: 'Korrupsjon',
      content: `**Korrupsjon** er misbruk av makt eller posisjon for personlig vinning. I naringslivet innebarer det typisk bestikkelser, smoring eller utpressing for a pavirke beslutninger. Korrupsjon er ulovlig i Norge og reguleres av straffeloven.`,
    },
    {
      id: 'od-8-3-text-1',
      type: 'text',
      content: `### Former for korrupsjon

- **Bestikkelser:** Betale for a fa en fordel (kontrakt, tillatelse)
- **Smoring:** Gaver, reiser eller tjenester for a pavirke
- **Nepotisme:** Gi fordeler til familie og venner
- **Bedrageri:** Feilinformasjon for a oppna fordeler

**Konsekvenser av korrupsjon:**
- Undergravning av rettferdig konkurranse
- Svekkelse av tillit til naringsliv og myndigheter
- Fengselsstraff og boter for de involverte
- Omdommeskade for bedriften

I Norge ble korrupsjonslovgivningen skjerpet i 2003. Bade den som bestikker og den som mottar bestikkelsen kan straffes.`,
    },
    {
      id: 'od-8-3-def-2',
      type: 'definition',
      title: 'Varsling',
      content: `**Varsling** betyr at en arbeidstaker melder fra om kritikkverdige forhold pa arbeidsplassen. Det kan gjelde lovbrudd, fare for liv og helse, korrupsjon eller diskriminering. Arbeidsmiljoloven gir ansatte rett til a varsle og beskytter dem mot gjengjeldelse.`,
    },
    {
      id: 'od-8-3-text-2',
      type: 'text',
      content: `### Varsling i praksis

**Arbeidsmiljolovens regler:**
- Arbeidstakere har rett til a varsle om kritikkverdige forhold
- Arbeidsgiver ma legge til rette for varsling
- Det er forbudt a gjengjelde mot varslere
- Bedrifter med mer enn 5 ansatte ma ha varslingsrutiner

**Hvordan varsle:**
1. Varsle internt forst (leder, verneombud, tillitsvalgt)
2. Hvis det ikke nytter: varsle til tilsynsmyndigheter
3. I alvorlige tilfeller: varsle media

**Utfordringer for varslere:**
- Frykt for gjengjeldelse og utfrysing
- Lojalitetskonflikt med arbeidsgiver
- Psykisk belastning`,
    },
    {
      id: 'od-8-3-text-3',
      type: 'text',
      content: `### Etiske retningslinjer

Etiske retningslinjer (Code of Conduct) er bedriftens skriftlige normer for etisk atferd.

**Vanlige temaer:**
- Korrupsjon og bestikkelser
- Gaver og representasjon
- Interessekonflikter
- Konfidensialitet og personvern
- Arbeidsmiljo og mangfold

**Kjennetegn pa gode retningslinjer:**
- Konkrete og forstaelige
- Forankret i ledelsen
- Kommunisert til alle ansatte
- Konsekvenser ved brudd
- Regelmessig oppdatering`,
    },
    {
      id: 'od-8-3-example-1',
      type: 'example',
      title: 'Eksempel: Yara-saken',
      content: `Norske Yara International ble i 2014 domt til a betale 295 millioner kroner i bot for korrupsjon. Saken gjaldt bestikkelser til myndighetspersoner i India, Libya og Russland.

**Laringen:** Selv store, anerkjente norske selskaper kan havne i korrupsjonssaker. Det viser viktigheten av sterke internkontroller, etiske retningslinjer og nulltoleranse for korrupsjon.

**Tiltak etterpå:** Yara innforte et omfattende antikorrupsjonsprogram med opplaring, kontrollrutiner og varslingskanaler.`,
    },
    {
      id: 'od-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'od-8-3-ex-1',
        number: '8.3.1',
        type: 'multiple-choice',
        task: 'Hva er varsling ifolge arbeidsmiljoloven?',
        options: [
          { id: 'a', text: 'A klage pa lonnen sin', isCorrect: false },
          { id: 'b', text: 'A melde fra om kritikkverdige forhold pa arbeidsplassen', isCorrect: true },
          { id: 'c', text: 'A si opp jobben i protest', isCorrect: false },
          { id: 'd', text: 'A kontakte media om personlige konflikter', isCorrect: false },
        ],
        solution: 'Varsling betyr at en arbeidstaker melder fra om kritikkverdige forhold pa arbeidsplassen, som lovbrudd, korrupsjon eller diskriminering. Arbeidsmiljoloven beskytter varslere mot gjengjeldelse.',
      },
    },
    {
      id: 'od-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'od-8-3-ex-2',
        number: '8.3.2',
        type: 'multiple-choice',
        task: 'Hvilken av folgende er et eksempel pa korrupsjon?',
        options: [
          { id: 'a', text: 'A gi en kollega en bursdagsgave', isCorrect: false },
          { id: 'b', text: 'A betale en tjenestemann for a fa en byggetillatelse raskere', isCorrect: true },
          { id: 'c', text: 'A forhandle om rabatt med en leverandor', isCorrect: false },
          { id: 'd', text: 'A tilby gratis prove pa et produkt', isCorrect: false },
        ],
        solution: 'A betale en tjenestemann for a fa en byggetillatelse er bestikkelse, som er en form for korrupsjon. Det innebarer misbruk av makt for personlig vinning og er ulovlig.',
      },
    },
    {
      id: 'od-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'od-8-3-ex-3',
        number: '8.3.3',
        type: 'classic',
        task: 'Du oppdager at sjefen din tar imot gaver fra en leverandor i bytte mot kontrakter. Hva gjor du? Bruk arbeidsmiljolovens varslingsregler.',
        solution: 'Forst bor man varsle internt til HR-avdelingen, verneombudet eller en annen leder. Man kan ogsa bruke bedriftens varslingskanal. Dersom internt varsling ikke forer frem, kan man varsle til tilsynsmyndigheter. Arbeidsmiljoloven beskytter varslere mot gjengjeldelse.',
      },
    },
    {
      id: 'od-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'od-8-3-ex-4',
        number: '8.3.4',
        type: 'classic',
        task: 'Forklar hva etiske retningslinjer er og hvorfor de er viktige for en bedrift.',
        solution: 'Etiske retningslinjer (Code of Conduct) er bedriftens skriftlige normer for etisk atferd. De er viktige fordi de gir ansatte veiledning i etiske dilemmaer, forebygger korrupsjon, beskytter bedriftens omdomme og viser interessenter at bedriften tar etikk pa alvor.',
      },
    },
    {
      id: 'od-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'od-8-3-ex-5',
        number: '8.3.5',
        type: 'classic',
        task: 'Drofte etikken rundt a bruke billig arbeidskraft i lavkostland. Er det utnyttelse eller utvikling?',
        solution: 'Argumenter for utvikling: Arbeidsplassene gir inntekt i fattige land og bidrar til okonomisk vekst. Argumenter for utnyttelse: Lonningene er ofte urettferdig lave og arbeidsforholdene darlige. En balansert vurdering tilsier at det avhenger av hvordan det gjores - rettferdige lonninger og gode arbeidsforhold er avgjorende.',
      },
    },
    {
      id: 'od-8-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'od-8-3-ex-6',
        number: '8.3.6',
        type: 'classic',
        task: 'Bruk pliktetikk, konsekvensetikk og dydsetikk til a analysere folgende dilemma: En bedrift oppdager at et produkt har en feil som i sjeldne tilfeller kan vare farlig. Tilbakekalling koster 50 millioner kroner.',
        solution: 'Pliktetikk: Bedriften har plikt til a beskytte kundene uavhengig av kostnad. Konsekvensetikk: Kostnadene ved skader vil trolig overstige tilbakekallingskosten. Dydsetikk: Et ansvarlig selskap ville prioritert kundenes sikkerhet. Alle tre teoriene peker mot tilbakekalling.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4: Barekraftig produksjon
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_8_4: TextbookChapter = {
  id: 'okonomi-drift-8-4',
  courseId: 'okonomi-drift',
  chapterNumber: '8.4',
  title: 'Barekraftig produksjon',
  description: 'Du larer om sirkulaer okonomi, avfallshierarkiet og hvordan bedrifter kan produsere mer barekraftig. Kapittelet viser praktiske eksempler pa sirkulaere forretningsmodeller.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'od-8-4-intro',
      type: 'text',
      content: `## Fra lineaer til sirkulaer okonomi

Den tradisjonelle okonomien er lineaer: vi utvinner ressurser, produserer varer, bruker dem og kaster dem. Denne modellen er ikke barekraftig. Sirkulaer okonomi er et alternativ der ressurser holdes i bruk sa lenge som mulig.

I dette kapittelet skal du lare:
- Forskjellen mellom lineaer og sirkulaer okonomi
- Hva avfallshierarkiet innebarer
- Hvordan bedrifter kan produsere barekraftig
- Eksempler pa sirkulaere forretningsmodeller`,
    },
    {
      id: 'od-8-4-def-1',
      type: 'definition',
      title: 'Sirkulaer okonomi',
      content: `**Sirkulaer okonomi** er et okonomisk system der produkter, materialer og ressurser holdes i bruk sa lenge som mulig gjennom gjenbruk, reparasjon, oppgradering og resirkulering. Malet er a minimere avfall og maksimere verdien av ressursene.`,
    },
    {
      id: 'od-8-4-text-1',
      type: 'text',
      content: `### Lineaer vs. sirkulaer okonomi

**Lineaer okonomi (ta - lag - kast):**
- Utvinne ravarer fra naturen
- Produsere varer, selge og bruke
- Kaste nar det er brukt opp
- Enormt ressursforbruk og avfall

**Sirkulaer okonomi (sirkelen):**
- Designe for lang levetid og gjenbruk
- Bruke resirkulerte materialer
- Reparere og vedlikeholde
- Dele og leie i stedet for a eie
- Resirkulere materialer tilbake i kretslop`,
    },
    {
      id: 'od-8-4-def-2',
      type: 'definition',
      title: 'Avfallshierarkiet',
      content: `**Avfallshierarkiet** er en prioriteringsrekkefolgje for avfallshandtering, fra mest til minst onsket: 1) Forebygge, 2) Gjenbruke, 3) Resirkulere, 4) Energigjenvinne, 5) Deponere. Malet er a flytte sa mye avfall som mulig oppover i hierarkiet.`,
    },
    {
      id: 'od-8-4-text-2',
      type: 'text',
      content: `### Avfallshierarkiet i praksis

**1. Forebygge (best):** Produsere mindre avfall fra starten, bruke mindre emballasje.
**2. Gjenbruke:** Bruke produkter om igjen, reparere i stedet for a kaste.
**3. Resirkulere:** Bryte ned materialer og bruke dem pa nytt.
**4. Energigjenvinne:** Brenne avfall og utnytte energien, f.eks. fjernvarme.
**5. Deponere (darligst):** Legge avfall pa deponi. I Norge er det forbudt a deponere biologisk nedbrytbart avfall.`,
    },
    {
      id: 'od-8-4-text-3',
      type: 'text',
      content: `### Sirkulaere forretningsmodeller

**Produkt som tjeneste:** Kunden leier i stedet for a kjope. Eksempel: Michelin selger "kilometer" i stedet for dekk til lastebiler.

**Deling:** Flere personer deler et produkt. Eksempel: Bildelingsordninger, coworking-plasser.

**Reparasjon og vedlikehold:** Forlenge produktets levetid. Eksempel: Patagonia reparerer klar gratis.

**Gjenbruk og videresalg:** Selge brukte produkter pa nytt. Eksempel: IKEA kjoper tilbake brukte mobler.

**Resirkuleringsbasert produksjon:** Bruke resirkulerte materialer som ravare. Eksempel: Norsk Hydro produserer aluminium fra resirkulert skrap.`,
    },
    {
      id: 'od-8-4-example-1',
      type: 'example',
      title: 'Eksempel: TOMRA - fra panting til sirkulaer okonomi',
      content: `Norske TOMRA oppfant panteautomaten i 1972. I dag er Norge et av landene med hoyest returandel for flasker og bokser - over 90 %.

TOMRA utvikler avansert sensorteknologi som sorterer avfall automatisk. Deres maskiner skiller ulike plasttyper, metaller og andre materialer.

TOMRAs losninger bidrar til at materialer holdes i kretslop. De har bidratt til innsamling av over 40 milliarder brukte drikkevareemballasjer og viser at det er mulig a bygge en lonnsom bedrift pa sirkulaer okonomi.`,
    },
    {
      id: 'od-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'od-8-4-ex-1',
        number: '8.4.1',
        type: 'multiple-choice',
        task: 'Hva er det overste nivaet i avfallshierarkiet?',
        options: [
          { id: 'a', text: 'Resirkulere', isCorrect: false },
          { id: 'b', text: 'Energigjenvinne', isCorrect: false },
          { id: 'c', text: 'Forebygge', isCorrect: true },
          { id: 'd', text: 'Gjenbruke', isCorrect: false },
        ],
        solution: 'Forebygging er det overste nivaet i avfallshierarkiet. Det beste avfallet er det som aldri oppstar. Deretter folger gjenbruk, resirkulering, energigjenvinning og deponering.',
      },
    },
    {
      id: 'od-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'od-8-4-ex-2',
        number: '8.4.2',
        type: 'multiple-choice',
        task: 'Hva kjennetegner sirkulaer okonomi?',
        options: [
          { id: 'a', text: 'Ressurser brukes en gang og kastes', isCorrect: false },
          { id: 'b', text: 'Ressurser holdes i bruk sa lenge som mulig', isCorrect: true },
          { id: 'c', text: 'Alt avfall deponeres', isCorrect: false },
          { id: 'd', text: 'Bare biologiske materialer resirkuleres', isCorrect: false },
        ],
        solution: 'I sirkulaer okonomi holdes produkter, materialer og ressurser i bruk sa lenge som mulig gjennom gjenbruk, reparasjon og resirkulering.',
      },
    },
    {
      id: 'od-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'od-8-4-ex-3',
        number: '8.4.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom lineaer og sirkulaer okonomi med egne ord.',
        solution: 'Lineaer okonomi folger en rett linje: ta ut ravarer, produsere, bruke og kaste. Sirkulaer okonomi folger en sirkel: produkter designes for lang levetid, repareres, gjenbrukes og materialene resirkuleres tilbake i produksjonen.',
      },
    },
    {
      id: 'od-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'od-8-4-ex-4',
        number: '8.4.4',
        type: 'classic',
        task: 'Gi eksempler pa minst tre sirkulaere forretningsmodeller og forklar hvordan de fungerer.',
        solution: '1) Produkt som tjeneste: Michelin selger kilometer i stedet for dekk. 2) Deling: Bildeling reduserer antall biler. 3) Reparasjon: Patagonia tilbyr gratis reparasjon av klar. Alle modellene reduserer ressursforbruk og avfall.',
      },
    },
    {
      id: 'od-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'od-8-4-ex-5',
        number: '8.4.5',
        type: 'classic',
        task: 'Velg en bransje og forklar hvordan den kan bli mer sirkulaer.',
        solution: 'Tekstilbransjen: 1) Designe holdbare klar. 2) Tilby innbytte- og videresalg av brukte klar. 3) Tilby reparasjonstjenester. 4) Bruke fibre fra gamle klar til nye tekstiler. 5) Leie ut klar i stedet for a selge (f.eks. festklar).',
      },
    },
    {
      id: 'od-8-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'od-8-4-ex-6',
        number: '8.4.6',
        type: 'classic',
        task: 'Drofte utfordringene bedrifter moter nar de skal ga over fra lineaer til sirkulaer okonomi.',
        solution: 'Utfordringer inkluderer: 1) Okonomiske kostnader ved a endre produksjonsprosesser. 2) Mangel pa infrastruktur for innsamling og resirkulering. 3) Kundenes vaner om lave priser. 4) Komplekse verdikjeder som er vanskelig a omstille. Samtidig kan overgangen gi lavere ravarekostnader og sterkere omdomme.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.5: Rapportering og sertifisering
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_8_5: TextbookChapter = {
  id: 'okonomi-drift-8-5',
  courseId: 'okonomi-drift',
  chapterNumber: '8.5',
  title: 'Rapportering og sertifisering',
  description: 'Du larer om barekraftsrapportering, ESG-kriterier og miljosertifisering. Kapittelet dekker Miljofyrtarn, EMAS og hvordan bedrifter kommuniserer barekraftsarbeidet sitt.',
  estimatedMinutes: 20,
  content: [
    {
      id: 'od-8-5-intro',
      type: 'text',
      content: `## Vise verden hva du gjor

Det er ikke nok a jobbe med barekraft - bedriftene ma ogsa dokumentere og kommunisere arbeidet sitt. Barekraftsrapportering og sertifisering gir troverdighet og transparens.

I dette kapittelet skal du lare:
- Hva barekraftsrapportering innebarer
- Hva ESG-kriteriene betyr
- Hvordan Miljofyrtarn-sertifisering fungerer
- Forskjellen mellom ulike sertifiseringsordninger`,
    },
    {
      id: 'od-8-5-def-1',
      type: 'definition',
      title: 'Barekraftsrapport',
      content: `En **barekraftsrapport** er et dokument der bedriften rapporterer pa sine miljomessige, sosiale og okonomiske prestasjoner. Rapporten gir interessenter innsikt i hvordan bedriften arbeider med barekraft.`,
    },
    {
      id: 'od-8-5-text-1',
      type: 'text',
      content: `### Barekraftsrapportering

**Hvorfor rapportere?**
- Okt transparens overfor interessenter
- Krav fra investorer og finansinstitusjoner
- Lovkrav (EU-direktivet CSRD fra 2024)
- Identifisere forbedringspotensial

**Standarder for rapportering:**
- **GRI (Global Reporting Initiative):** Den mest brukte globale standarden
- **CSRD:** EU-krav fra 2024 for store bedrifter
- **TCFD:** Fokus pa klimarelaterte finansielle risikoer
- **FNs barekraftsmal:** Kobling til de 17 globale malene`,
    },
    {
      id: 'od-8-5-def-2',
      type: 'definition',
      title: 'ESG',
      content: `**ESG** star for Environmental, Social and Governance (miljo, sosiale forhold og eierstyring). ESG-kriteriene brukes av investorer og analytikere til a vurdere bedrifters barekraftsprestasjon og risikoprofil.`,
    },
    {
      id: 'od-8-5-text-2',
      type: 'text',
      content: `### ESG-kriteriene

**E - Environmental (miljo):**
- Klimagassutslipp og energiforbruk
- Ressursbruk og avfallshandtering
- Biologisk mangfold

**S - Social (sosiale forhold):**
- Arbeidstakerrettigheter og HMS
- Mangfold og likestilling
- Leverandorkjede og menneskerettigheter

**G - Governance (eierstyring):**
- Styrets sammensetning og kompetanse
- Antikorrupsjon og etikk
- Transparens og rapportering

Investorer bruker ESG til a vurdere risiko og muligheter. Oljefondet stiller ESG-krav til selskapene det investerer i.`,
    },
    {
      id: 'od-8-5-text-3',
      type: 'text',
      content: `### Miljofyrtarn og andre sertifiseringer

**Miljofyrtarn:**
- Norges mest brukte miljosertifisering
- Over 9000 sertifiserte virksomheter
- Krav til miljoledelse, arbeidsmiljo, innkjop og avfall
- Arlig klimarapportering, resertifisering hvert tredje ar

**Svanemerket:** Nordisk miljomerking for produkter og tjenester med strenge krav.

**ISO 14001:** Internasjonal standard for miljoledelse, mer krevende enn Miljofyrtarn.

**EMAS:** EUs miljoledelsesordning med strengere krav enn ISO 14001.

**B Corp:** Helhetlig vurdering av bedriftens samfunnspavirkning.`,
    },
    {
      id: 'od-8-5-text-4',
      type: 'text',
      content: `### Gronn-vasking

Gronn-vasking (greenwashing) er nar bedrifter gir et falsk inntrykk av a vare miljovennlige.

**Typiske kjennetegn:**
- Vage pastandar uten dokumentasjon
- Fokus pa ett lite positivt aspekt for a avlede fra store problemer
- Villedende bilder og symboler
- Manglende tredjepartsverifisering

**Hvordan unnga gronn-vasking:**
- Bruk anerkjente sertifiseringer
- Vare arlig om utfordringer
- Dokumentere alle pastandar
- La uavhengige parter granske rapporteringen

EU har innfort strengere regler mot gronn-vasking gjennom Green Claims Directive.`,
    },
    {
      id: 'od-8-5-example-1',
      type: 'example',
      title: 'Eksempel: Miljofyrtarn-sertifisering i praksis',
      content: `En bedrift med 30 ansatte gjennomforer Miljofyrtarn-sertifisering:

**Kartlegging:** De kartlegger energiforbruk, avfall, transport og innkjop.
**Handlingsplan:** Bytter til LED-belysning, innforer kildesortering og velger miljosertifiserte leverandorer.
**Sertifisering:** En uavhengig konsulent gjennomforer revisjon og godkjenner.

**Resultater etter forste ar:** 20 % reduksjon i energiforbruk, 40 % okning i kildesortering, og bedriften vinner en offentlig anbudskonkurranse der Miljofyrtarn var et pluss.`,
    },
    {
      id: 'od-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'od-8-5-ex-1',
        number: '8.5.1',
        type: 'multiple-choice',
        task: 'Hva star ESG for?',
        options: [
          { id: 'a', text: 'Economic, Social, Growth', isCorrect: false },
          { id: 'b', text: 'Environmental, Social, Governance', isCorrect: true },
          { id: 'c', text: 'Energy, Safety, Green', isCorrect: false },
          { id: 'd', text: 'Ethical, Sustainable, Global', isCorrect: false },
        ],
        solution: 'ESG star for Environmental (miljo), Social (sosiale forhold) og Governance (eierstyring). Kriteriene brukes av investorer til a vurdere bedrifters barekraftsprestasjon.',
      },
    },
    {
      id: 'od-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'od-8-5-ex-2',
        number: '8.5.2',
        type: 'multiple-choice',
        task: 'Hva er gronn-vasking (greenwashing)?',
        options: [
          { id: 'a', text: 'A vaske produkter med miljovennlige midler', isCorrect: false },
          { id: 'b', text: 'A gi et falskt inntrykk av a vare miljovennlig', isCorrect: true },
          { id: 'c', text: 'A sertifisere bedriften som Miljofyrtarn', isCorrect: false },
          { id: 'd', text: 'A rapportere ESG-data til investorer', isCorrect: false },
        ],
        solution: 'Gronn-vasking er nar bedrifter gir et falskt eller villedende inntrykk av a vare miljovennlige, for eksempel gjennom vage pastandar eller villedende bilder.',
      },
    },
    {
      id: 'od-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'od-8-5-ex-3',
        number: '8.5.3',
        type: 'classic',
        task: 'Forklar hva en barekraftsrapport er og hvorfor det er viktig at bedrifter rapporterer pa barekraft.',
        solution: 'En barekraftsrapport dokumenterer bedriftens miljomessige, sosiale og okonomiske prestasjoner. Det er viktig fordi det gir transparens overfor interessenter, er lovpalagt for mange bedrifter gjennom EUs CSRD-direktiv, hjelper bedriften a identifisere forbedringspotensial og bygger tillit.',
      },
    },
    {
      id: 'od-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'od-8-5-ex-4',
        number: '8.5.4',
        type: 'classic',
        task: 'Beskriv de tre ESG-dimensjonene og gi to eksempler pa hva som males under hver dimensjon.',
        solution: 'E (miljo): Klimagassutslipp og energiforbruk, avfallshandtering. S (sosiale forhold): Arbeidstakerrettigheter og HMS, mangfold og likestilling. G (eierstyring): Styrets sammensetning, antikorrupsjon og etikk. Investorer bruker ESG til a vurdere risiko og muligheter.',
      },
    },
    {
      id: 'od-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'od-8-5-ex-5',
        number: '8.5.5',
        type: 'classic',
        task: 'Sammenlign Miljofyrtarn og ISO 14001 som miljosertifiseringer. Hva er fordeler og ulemper med hver?',
        solution: 'Miljofyrtarn: Fordeler - tilpasset norske forhold, rimelig og tilgjengelig for sma bedrifter. Ulemper - kun anerkjent i Norden, mindre krevende. ISO 14001: Fordeler - internasjonalt anerkjent, grundig og systematisk. Ulemper - mer kostbart og tidkrevende. Valget avhenger av bedriftens storrelse og om den opererer internasjonalt.',
      },
    },
    {
      id: 'od-8-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'od-8-5-ex-6',
        number: '8.5.6',
        type: 'classic',
        task: 'Finn et eksempel pa gronn-vasking. Forklar hvorfor det er villedende og hva bedriften burde gjort i stedet.',
        solution: 'Eksempel: Et flyselskap reklamerer med at de planter ett tre per flyreise og kaller seg "klimapositive". Dette er villedende fordi ett tre ikke kompenserer for CO2-utslippene fra en flyreise. Bedriften burde heller rapportere faktiske utslipp, sette konkrete reduksjonsmal og vare arlig om utfordringene.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const OKONOMI_DRIFT_DEL8_CHAPTERS = [
  CHAPTER_OKONOMI_DRIFT_8_1,
  CHAPTER_OKONOMI_DRIFT_8_2,
  CHAPTER_OKONOMI_DRIFT_8_3,
  CHAPTER_OKONOMI_DRIFT_8_4,
  CHAPTER_OKONOMI_DRIFT_8_5,
];
