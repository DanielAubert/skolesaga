/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Geografi VG1/VG2 - Del 5: Befolkning og migrasjon
 *
 * Dekker LK20-kompetansemaal for geografi
 * Delkapitler 5.1 - 5.6
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Befolkningsvekst og demografisk overgang
// ============================================================================

const CHAPTER_GEOGRAFI_5_1: TextbookChapter = {
  id: 'geografi-1-5-1',
  courseId: 'geografi',
  chapterNumber: '5.1',
  title: 'Befolkningsvekst og demografisk overgang',
  description: 'Verdens befolkningsutvikling, den demografiske overgangsmodellen og forholdet mellom fødsels- og dødsrater.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for befolkningsutviklingen i verden og drøfte årsaker til og konsekvenser av befolkningsvekst',
    'forklare den demografiske overgangsmodellen og bruke den til å analysere ulike lands befolkningsutvikling',
  ],
  content: [
    {
      id: 'geo-5-1-intro',
      type: 'text',
      content: `# Befolkningsvekst og demografisk overgang

I tusenvis av år vokste verdens befolkning sakte. Det tok menneskeheten rundt 200 000 år å nå den første milliarden mennesker, rundt år 1800. Deretter gikk det stadig raskere. I 2022 passerte vi **8 milliarder** mennesker, og FN anslår at vi kan nå rundt 10 milliarder mot slutten av dette århundret.

## Historisk befolkningsutvikling

Befolkningsveksten har ikke vært jevn gjennom historien:
- **Før jordbruksrevolusjonen** (ca. 10 000 f.Kr.): Noen få millioner mennesker levde som jegere og samlere
- **Jordbrukssamfunnet**: Stabil matproduksjon ga grunnlag for befolkningsvekst
- **Den industrielle revolusjonen** (ca. 1750–1900): Bedre hygiene, medisin og matproduksjon førte til dramatisk nedgang i dødelighet
- **1900-tallet**: Den raskeste befolkningsveksten i menneskehetens historie, særlig etter 1950

## Naturlig tilvekst

Befolkningsveksten i et land bestemmes av forskjellen mellom fødselsrate og dødsrate, kalt **naturlig tilvekst**. I tillegg påvirker inn- og utvandring befolkningstallet.`,
    },
    {
      id: 'geo-5-1-def-fodselsrate',
      type: 'definition',
      title: 'Fødselsrate og dødsrate',
      content: 'Fødselsraten (natalitet) er antall levendefødte per 1000 innbyggere per år. Dødsraten (mortalitet) er antall dødsfall per 1000 innbyggere per år. Differansen mellom fødselsrate og dødsrate gir den naturlige tilveksten, ofte uttrykt i promille (‰) eller prosent.',
    },
    {
      id: 'geo-5-1-modellen',
      type: 'text',
      content: `## Den demografiske overgangsmodellen

Den demografiske overgangsmodellen beskriver hvordan et land typisk gjennomgår fire faser i sin befolkningsutvikling, knyttet til økonomisk og sosial utvikling.

### Fase 1: Førmoderne samfunn
- **Høy fødselsrate** og **høy dødsrate**
- Lav eller ingen befolkningsvekst
- Sykdommer, hungersnød og dårlig hygiene holder dødsraten oppe
- Mange barn fødes for å sikre at noen overlever
- Historisk fase – nesten ingen land er her i dag

### Fase 2: Overgangens begynnelse
- **Høy fødselsrate**, men **synkende dødsrate**
- Rask befolkningsvekst
- Bedre hygiene, medisin, tilgang til rent vann og bedre ernæring
- Kulturelle normer henger igjen, så fødselstallene er fortsatt høye
- Eksempler: Flere land i Afrika sør for Sahara

### Fase 3: Sen overgang
- **Synkende fødselsrate** og **lav dødsrate**
- Befolkningsveksten avtar
- Urbanisering, utdanning (særlig for kvinner), tilgang til prevensjon
- Barn blir en økonomisk kostnad i stedet for ressurs
- Eksempler: India, Brasil, mange mellominntektsland

### Fase 4: Postmoderne samfunn
- **Lav fødselsrate** og **lav dødsrate**
- Stabil eller svakt synkende befolkning
- Høy levealder, lav fertilitet (ofte under reproduksjonsnivået på 2,1)
- Utfordringer med aldrende befolkning
- Eksempler: Norge, Japan, de fleste europeiske land`,
    },
    {
      id: 'geo-5-1-def-dem-overgang',
      type: 'definition',
      title: 'Demografisk overgang',
      content: 'Demografisk overgang er prosessen der et samfunn går fra høye fødsels- og dødsrater til lave fødsels- og dødsrater, vanligvis som følge av økonomisk utvikling, bedre helsetjenester og økt utdanningsnivå. Modellen deles i fire faser og beskriver en generell utviklingstrend, men alle land følger ikke nøyaktig samme mønster.',
    },
    {
      id: 'geo-5-1-malthus',
      type: 'text',
      content: `## Thomas Malthus og befolkningsdebatten

Den britiske økonomen og presten **Thomas Robert Malthus** (1766–1834) er kjent for sin pessimistiske teori om befolkningsvekst. I verket *An Essay on the Principle of Population* (1798) hevdet han at:

- Befolkningen vokser **eksponentielt** (dobles med jevne mellomrom)
- Matproduksjonen vokser bare **lineært** (øker med faste mengder)
- Dette vil uunngåelig føre til **hungersnød, sykdom og krig** som holder befolkningen nede

### Kritikk av Malthus
Malthus tok ikke høyde for:
- **Teknologisk utvikling**: Den grønne revolusjonen økte matproduksjonen dramatisk
- **Fallende fødselsrater**: Den demografiske overgangen viser at fødselsratene synker med velstand
- **Handel og globalisering**: Mat kan transporteres dit behovene er størst

Likevel er Malthus' tanker relevante i diskusjoner om jordas **bæreevne** – hvor mange mennesker planeten kan brødfø uten å ødelegge miljøet.`,
    },
    {
      id: 'geo-5-1-def-baereevne',
      type: 'definition',
      title: 'Bæreevne',
      content: 'Bæreevne er det maksimale antallet individer av en art som et økosystem kan opprettholde over tid uten at ressursgrunnlaget forringes. For mennesker avhenger bæreevnen av teknologi, forbruksnivå, fordeling og produksjonsmetoder, og er derfor omdiskutert.',
    },
    {
      id: 'geo-5-1-fertilitet',
      type: 'text',
      content: `## Fruktbarhet og samlet fruktbarhetstall

Et sentralt mål i demografi er **samlet fruktbarhetstall** (SFT), som angir gjennomsnittlig antall barn en kvinne føder i løpet av livet. For at en befolkning skal opprettholde seg selv uten innvandring, trengs et SFT på omtrent **2,1** – det såkalte **reproduksjonsnivået**.

### Faktorer som påvirker fruktbarheten
- **Utdanning**: Kvinner med høyere utdanning får færre barn
- **Urbanisering**: I byer er det dyrere å ha mange barn
- **Prevensjon**: Tilgang til moderne prevensjonsmidler
- **Spedbarnsdødelighet**: Når flere barn overlever, trengs ikke like mange fødsler
- **Økonomi**: I fattige jordbrukssamfunn er barn arbeidskraft
- **Religion og kultur**: Holdninger til familieplanlegging varierer`,
    },
    {
      id: 'geo-5-1-example',
      type: 'example',
      title: 'Demografisk overgang i praksis',
      problem: 'Land A har en fødselsrate på 40 ‰ og en dødsrate på 35 ‰. Land B har en fødselsrate på 38 ‰ og en dødsrate på 12 ‰. Land C har en fødselsrate på 11 ‰ og en dødsrate på 10 ‰. Plasser hvert land i riktig fase av den demografiske overgangsmodellen, og begrunn svaret.',
      solution: `**Land A: Fase 1 (førmoderne)**
- Naturlig tilvekst: 40 – 35 = 5 ‰ (svært lav)
- Både fødsels- og dødsraten er høye, noe som er typisk for fase 1
- Minimal befolkningsvekst på tross av mange fødsler

**Land B: Fase 2 (overgangens begynnelse)**
- Naturlig tilvekst: 38 – 12 = 26 ‰ (svært høy)
- Fødselsraten er fortsatt høy, men dødsraten har falt kraftig
- Dette gir rask befolkningsvekst, typisk for fase 2

**Land C: Fase 4 (postmoderne)**
- Naturlig tilvekst: 11 – 10 = 1 ‰ (svært lav)
- Både fødsels- og dødsraten er lave
- Stabil befolkning, typisk for et industrialisert velstandssamfunn`,
    },
    {
      id: 'geo-5-1-vekst-i-dag',
      type: 'text',
      content: `## Befolkningsvekst i dag

Den globale befolkningsveksten har avtatt fra toppen på rundt 2,1 % per år i 1960-årene til under 1 % i dag. Likevel betyr dette at det fortsatt fødes langt flere mennesker enn det dør hvert år.

### Regionale forskjeller
- **Afrika sør for Sahara**: Raskest vekst, mange land i fase 2–3
- **Sør-Asia**: Stor befolkning, avtagende vekst
- **Europa**: Stagnerende eller synkende befolkning uten innvandring
- **Øst-Asia**: Kraftig reduksjon i fruktbarhet, Japan og Sør-Korea blant de laveste i verden

FN opererer med ulike scenarier for fremtidig befolkningsvekst, avhengig av antakelser om fruktbarhet. I middelvarianten antas en topp på rundt **10,4 milliarder** mot 2080-tallet, etterfulgt av en gradvis nedgang.`,
    },
  
    {
      id: 'geo-5-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Verdens befolkning har vokst fra ca. 1 milliard i 1800 til over 8 milliarder i dag
- **Naturlig tilvekst** er forskjellen mellom fodselsrate og dodsrate
- Den **demografiske overgangsmodellen** beskriver fire faser fra hoye til lave fodsels- og dodsrater
- Malthus advarte om at befolkningsvekst ville overgaa matproduksjonen, men teknologisk utvikling har motbevist de mest pessimistiske spaadommmene
- FN anslaar at verdens befolkning vil naa ca. 10 milliarder mot slutten av dette aarhundret`,
    },
  ],
  exercises: [
    {
      id: 'geo-5-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kjennetegner fase 2 i den demografiske overgangsmodellen?',
      options: [
        { id: 'a', text: 'Høy fødselsrate og synkende dødsrate', isCorrect: true },
        { id: 'b', text: 'Lav fødselsrate og lav dødsrate', isCorrect: false },
        { id: 'c', text: 'Synkende fødselsrate og høy dødsrate', isCorrect: false },
        { id: 'd', text: 'Lav fødselsrate og høy dødsrate', isCorrect: false },
      ],
      solution: 'I fase 2 er fødselsraten fortsatt høy mens dødsraten synker, for eksempel på grunn av bedre helsetilbud og hygiene. Dette gir en rask befolkningsvekst.',
    },
    {
      id: 'geo-5-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva Thomas Malthus mente om forholdet mellom befolkningsvekst og matproduksjon, og gi minst to grunner til at teorien hans ikke har slått til slik han forutså.',
      solution: 'Malthus hevdet at befolkningen vokser eksponentielt mens matproduksjonen vokser lineært, noe som uunngåelig ville føre til hungersnød. Teorien har ikke slått til fordi (1) teknologisk utvikling som den grønne revolusjonen har mangedoblet matproduksjonen, (2) fruktbarhetsratene har falt kraftig i takt med økonomisk utvikling og bedre tilgang til utdanning og prevensjon, og (3) global handel gjør det mulig å distribuere mat mer effektivt.',
    },
    {
      id: 'geo-5-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er det såkalte reproduksjonsnivået for samlet fruktbarhetstall (SFT)?',
      options: [
        { id: 'a', text: 'Omtrent 2,1 barn per kvinne', isCorrect: true },
        { id: 'b', text: 'Omtrent 1,5 barn per kvinne', isCorrect: false },
        { id: 'c', text: 'Nøyaktig 2,0 barn per kvinne', isCorrect: false },
        { id: 'd', text: 'Omtrent 3,0 barn per kvinne', isCorrect: false },
      ],
      solution: 'Reproduksjonsnivået er omtrent 2,1 barn per kvinne. Tallet er litt over 2,0 for å kompensere for barnedødelighet og det faktum at det fødes litt flere gutter enn jenter. Under dette nivået vil befolkningen på sikt gå ned uten innvandring.',
    },
    {
      id: 'geo-5-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hvilken verdensdel har den raskeste befolkningsveksten i dag, og hvordan kan dette forklares med den demografiske overgangsmodellen?',
      solution: 'Afrika sør for Sahara har den raskeste befolkningsveksten. Mange land i denne regionen befinner seg i fase 2 eller tidlig fase 3 av den demografiske overgangen: dødsratene har falt på grunn av bedre helsetjenester og tilgang til medisiner, men fødselsratene er fortsatt relativt høye fordi utdanningsnivået, urbaniseringsgraden og tilgangen til prevensjon ennå ikke er tilstrekkelig til å drive fruktbarheten markant ned.',
    },
    {
      id: 'geo-5-1-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva menes med naturlig tilvekst?',
      options: [
        { id: 'a', text: 'Forskjellen mellom fødselsrate og dødsrate', isCorrect: true },
        { id: 'b', text: 'Forskjellen mellom innvandring og utvandring', isCorrect: false },
        { id: 'c', text: 'Det totale antall fødte per år', isCorrect: false },
        { id: 'd', text: 'Det totale befolkningstallet i et land', isCorrect: false },
      ],
      solution: 'Naturlig tilvekst er differansen mellom fødselsraten og dødsraten i et land. Dersom fødselsraten er høyere enn dødsraten, er den naturlige tilveksten positiv og befolkningen vokser (uten å ta hensyn til migrasjon).',
    },
  ],
};

// ============================================================================
// Kapittel 5.2: Befolkningsstrukturer
// ============================================================================

const CHAPTER_GEOGRAFI_5_2: TextbookChapter = {
  id: 'geografi-1-5-2',
  courseId: 'geografi',
  chapterNumber: '5.2',
  title: 'Befolkningsstrukturer',
  description: 'Befolkningspyramider, alders- og kjønnsfordeling, forsørgelsesbyrde og demografiske utfordringer.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere befolkningspyramider og forklare hva de forteller om et lands befolkningsstruktur',
    'drøfte demografiske utfordringer knyttet til aldring og ungdomsbølge',
  ],
  content: [
    {
      id: 'geo-5-2-intro',
      type: 'text',
      content: `# Befolkningsstrukturer

Et lands befolkning kan beskrives ut fra sammensetningen av ulike aldersgrupper og kjønn. Denne **befolkningsstrukturen** gir viktig informasjon om samfunnets utfordringer og muligheter – fra behov for skoleplasser og barnehager til pensjonsutgifter og helsetjenester.

## Befolkningspyramider

En **befolkningspyramide** er et diagram som viser aldersfordelingen i en befolkning, fordelt på kjønn. Menn vises vanligvis til venstre og kvinner til høyre, med de yngste nederst og de eldste øverst.

Det finnes tre hovedtyper pyramider:

### 1. Ekte pyramide (ekspansiv)
- Bred base og smal topp
- Mange unge, få eldre
- Typisk for land med høy fødselsrate og lav forventet levealder
- Eksempler: Nigeria, Etiopia, Afghanistan

### 2. Urneformet (konstraktiv)
- Smalere base enn midtparti
- Flere eldre enn unge
- Typisk for land med lav fødselsrate og høy forventet levealder
- Eksempler: Japan, Italia, Tyskland

### 3. Søyleformet (stasjonær)
- Tilnærmet like bred gjennom aldersgruppene
- Balansert alders- og kjønnsfordeling
- Typisk for land med stabil befolkning
- Eksempler: USA, Frankrike, Norge (til en viss grad)`,
    },
    {
      id: 'geo-5-2-def-pyramide',
      type: 'definition',
      title: 'Befolkningspyramide',
      content: 'En befolkningspyramide er en grafisk fremstilling av aldersfordelingen i en befolkning, delt inn i alderstrinn (vanligvis femårsgrupper) og kjønn. Formen på pyramiden forteller om befolkningens vekstmønster, fruktbarhet og dødelighet.',
    },
    {
      id: 'geo-5-2-aldersfordeling',
      type: 'text',
      content: `## Alders- og kjønnsfordeling

Befolkningen deles gjerne inn i tre hovedgrupper:
- **Unge** (0–14 år): Ikke yrkesaktive, trenger utdanning og omsorg
- **Yrkesaktive** (15–64 år): Den produktive delen av befolkningen
- **Eldre** (65 år og over): Ofte pensjonister, trenger helsetjenester

### Kjønnsforskjeller
- Ved fødsel er det litt flere gutter enn jenter (ca. 105 gutter per 100 jenter)
- I eldre aldersgrupper er det overvekt av kvinner, fordi kvinner i gjennomsnitt lever lenger
- I noen land er kjønnsbalansen skjev på grunn av kjønnsselektiv abort eller migrasjon`,
    },
    {
      id: 'geo-5-2-def-forsorgelsesbyrde',
      type: 'definition',
      title: 'Forsørgelsesbyrde',
      content: 'Forsørgelsesbyrden (dependency ratio) er forholdet mellom den ikke-yrkesaktive befolkningen (barn under 15 og eldre over 64) og den yrkesaktive befolkningen (15–64 år). En høy forsørgelsesbyrde betyr at færre yrkesaktive må forsørge flere ikke-yrkesaktive gjennom skatt, pensjoner og omsorgstjenester.',
    },
    {
      id: 'geo-5-2-forsorgelsesbyrde',
      type: 'text',
      content: `## Forsørgelsesbyrde i praksis

Forsørgelsesbyrden beregnes slik:

**Forsørgelsesbyrde = (Antall 0–14 + Antall 65+) / Antall 15–64 × 100**

En verdi på 50 betyr at det er 50 ikke-yrkesaktive per 100 yrkesaktive.

### To typer forsørgelsesbyrde
- **Barneforsørgelsesbyrde**: Andelen barn (0–14) i forhold til yrkesaktive. Høy i land med høy fødselsrate.
- **Eldreforsørgelsesbyrde**: Andelen eldre (65+) i forhold til yrkesaktive. Høy i land med aldrende befolkning.

I utviklingsland er det ofte barneforsørgelsesbyrden som dominerer, mens det i industriland er eldreforsørgelsesbyrden som skaper størst økonomisk press.`,
    },
    {
      id: 'geo-5-2-aldring',
      type: 'text',
      content: `## Demografiske utfordringer: Aldrende befolkning

Mange rike land opplever en stadig eldre befolkning. Dette skaper utfordringer:

- **Pensjonsutgifter**: Færre yrkesaktive skal betale for flere pensjonisters livsopphold
- **Helsevesen**: Eldre trenger mer helsetjenester og eldreomsorg
- **Arbeidskraft**: Mangel på arbeidskraft i mange sektorer
- **Økonomisk vekst**: Lavere produktivitet og forbruk

### Mulige tiltak
- Øke pensjonsalderen
- Stimulere til høyere fruktbarhet (familiepolitikk, barnehager, foreldrepermisjon)
- Arbeidsinnvandring for å fylle hull i arbeidsmarkedet
- Teknologiutvikling og automatisering`,
    },
    {
      id: 'geo-5-2-ungdomsbolge',
      type: 'text',
      content: `## Demografiske utfordringer: Ungdomsbølge

I mange utviklingsland utgjør unge under 30 år over halvparten av befolkningen. Denne **ungdomsbølgen** skaper andre utfordringer:

- **Arbeidsledighet**: Arbeidsmarkedet klarer ikke å absorbere alle unge som trenger jobb
- **Utdanning**: Behov for massiv utbygging av skoler og universiteter
- **Sosial uro**: Høy arbeidsledighet blant unge kan føre til politisk ustabilitet
- **Urbanisering**: Unge søker til byene for utdanning og arbeid

### Demografisk dividende
Dersom et land klarer å gi ungdommen utdanning og arbeid, kan ungdomsbølgen bli en **demografisk dividende** – en periode med sterk økonomisk vekst fordi en stor del av befolkningen er yrkesaktiv og forsørgelsesbyrden er lav. Dette var tilfellet for flere asiatiske tigerøkonomier fra 1960-tallet.`,
    },
    {
      id: 'geo-5-2-def-dividende',
      type: 'definition',
      title: 'Demografisk dividende',
      content: 'Demografisk dividende er den økonomiske gevinsten et land kan oppnå når andelen yrkesaktive i befolkningen er stor i forhold til forsørgede (barn og eldre). Denne «bonusen» oppstår i overgangsfasen mellom høy og lav fruktbarhet, og forutsetter at samfunnet investerer i utdanning, helse og jobbskaping.',
    },
    {
      id: 'geo-5-2-example',
      type: 'example',
      title: 'Tolke en befolkningspyramide',
      problem: 'Et land har en befolkningspyramide som er svært bred ved bunnen (0–14 år) og smalner raskt oppover. Kun en liten andel av befolkningen er over 60 år. Hva kan du slutte om dette landets demografiske situasjon?',
      solution: `**Analyse av pyramideformen:**

1. **Høy fødselsrate**: Den brede basen viser at det fødes mange barn
2. **Relativt høy dødelighet**: Den raske innsnevringen tyder på at mange dør i ung alder eller i middelalder
3. **Lav forventet levealder**: Få eldre i toppen bekrefter dette
4. **Fase i demografisk overgang**: Landet befinner seg sannsynligvis i fase 1 eller tidlig fase 2
5. **Høy barneforsørgelsesbyrde**: Mange unge som skal forsørges av en relativt liten yrkesaktiv gruppe
6. **Utfordringer**: Landet trenger investeringer i utdanning, helse og jobbskaping for å håndtere ungdomsbølgen
7. **Muligheter**: Dersom landet investerer riktig, kan den unge befolkningen bli en demografisk dividende`,
    },
  
    {
      id: 'geo-5-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Befolkningspyramider** viser alders- og kjoennsfordelingen i en befolkning
- Unge befolkninger har bred base (mange barn), aldrende befolkninger har smal base
- **Forsoergelsesbyrden** maalerr forholdet mellom yrkesaktive og de som forsoerges (barn og eldre)
- **Demografisk dividende** oppstaar naar andelen yrkesaktive er hoey
- Befolkningsstrukturen pavirker behov for helsetjenester, utdanning, arbeidsplasser og pensjoner`,
    },
  ],
  exercises: [
    {
      id: 'geo-5-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken type befolkningspyramide har smal base og bredt midtparti?',
      options: [
        { id: 'a', text: 'Urneformet (konstraktiv)', isCorrect: true },
        { id: 'b', text: 'Ekte pyramide (ekspansiv)', isCorrect: false },
        { id: 'c', text: 'Søyleformet (stasjonær)', isCorrect: false },
        { id: 'd', text: 'Klokkeformet', isCorrect: false },
      ],
      solution: 'En urneformet (konstraktiv) pyramide har smalere base enn midtparti, noe som betyr at det fødes færre barn enn det er voksne. Dette er typisk for land med lav fødselsrate og aldrende befolkning, som Japan og Italia.',
    },
    {
      id: 'geo-5-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva forsørgelsesbyrde er, og beskriv forskjellen mellom barneforsørgelsesbyrde og eldreforsørgelsesbyrde. Gi eksempler på land der hver type dominerer.',
      solution: 'Forsørgelsesbyrden er forholdet mellom den ikke-yrkesaktive delen av befolkningen (barn og eldre) og den yrkesaktive. Barneforsørgelsesbyrden er andelen barn (0–14 år) i forhold til yrkesaktive, og er høy i land med høy fødselsrate, som Niger og Mali. Eldreforsørgelsesbyrden er andelen eldre (65+) i forhold til yrkesaktive, og er høy i land med aldrende befolkning, som Japan og Tyskland. I utviklingsland dominerer barneforsørgelsesbyrden, mens eldreforsørgelsesbyrden er den største utfordringen i industriland.',
    },
    {
      id: 'geo-5-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva menes med demografisk dividende?',
      options: [
        { id: 'a', text: 'Økonomisk gevinst når en stor del av befolkningen er yrkesaktiv', isCorrect: true },
        { id: 'b', text: 'Utbetaling av pensjoner til en aldrende befolkning', isCorrect: false },
        { id: 'c', text: 'Økonomisk støtte fra rike land til fattige land', isCorrect: false },
        { id: 'd', text: 'Skatteinntekter fra arbeidsinnvandring', isCorrect: false },
      ],
      solution: 'Demografisk dividende er den økonomiske gevinsten som oppstår når en stor andel av befolkningen er i yrkesaktiv alder og forsørgelsesbyrden er lav. Denne muligheten oppstår i overgangsfasen mellom høy og lav fruktbarhet, og forutsetter at samfunnet investerer i utdanning og jobbskaping.',
    },
    {
      id: 'geo-5-2-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft hvilke utfordringer en aldrende befolkning skaper for velferdssamfunn som Norge, og foreslå tiltak som kan motvirke problemene.',
      solution: 'En aldrende befolkning skaper flere utfordringer: (1) Økte pensjonsutgifter fordi færre yrkesaktive skal finansiere flere pensjonisters livsopphold. (2) Økt press på helsevesenet, da eldre trenger mer behandling og omsorg. (3) Mangel på arbeidskraft i mange sektorer. (4) Lavere økonomisk vekst og innovasjon. Mulige tiltak inkluderer: økt pensjonsalder slik at flere jobber lenger, arbeidsinnvandring for å fylle hull i arbeidsmarkedet, tilrettelegging for høyere fruktbarhet gjennom god familiepolitikk (barnehager, foreldrepermisjon, barnetrygd), satsing på teknologi og automatisering for å opprettholde produktiviteten, og reformer av pensjonssystemet som gjør det bærekraftig over tid.',
    },
    {
      id: 'geo-5-2-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken aldersinndeling brukes vanligvis for å beregne forsørgelsesbyrden?',
      options: [
        { id: 'a', text: '0–14, 15–64 og 65+', isCorrect: true },
        { id: 'b', text: '0–18, 19–60 og 61+', isCorrect: false },
        { id: 'c', text: '0–16, 17–67 og 68+', isCorrect: false },
        { id: 'd', text: '0–20, 21–59 og 60+', isCorrect: false },
      ],
      solution: 'Den vanlige inndelingen er 0–14 år (barn), 15–64 år (yrkesaktive) og 65 år og over (eldre). Forsørgelsesbyrden beregnes ved å dele summen av barn og eldre på antall yrkesaktive.',
    },
  ],
};

// ============================================================================
// Kapittel 5.3: Migrasjon – årsaker og typer
// ============================================================================

const CHAPTER_GEOGRAFI_5_3: TextbookChapter = {
  id: 'geografi-1-5-3',
  courseId: 'geografi',
  chapterNumber: '5.3',
  title: 'Migrasjon – årsaker og typer',
  description: 'Push- og pull-faktorer, ulike typer migrasjon, brain drain og remitter.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for ulike typer migrasjon og forklare årsaker til at mennesker flytter',
    'drøfte konsekvenser av migrasjon for avsender- og mottakerland',
  ],
  content: [
    {
      id: 'geo-5-3-intro',
      type: 'text',
      content: `# Migrasjon – årsaker og typer

Mennesker har alltid flyttet på seg. **Migrasjon** er en fellesbetegnelse for all form for flytting, enten det er innenfor et lands grenser eller over landegrenser. I en globalisert verden med bedre transportmuligheter og kommunikasjon har migrasjon blitt en av de mest debatterte politiske sakene.

## Grunnbegreper

- **Emigrasjon**: Å flytte ut av et land (utvandring)
- **Immigrasjon**: Å flytte inn i et land (innvandring)
- **Intern migrasjon**: Flytting innenfor et lands grenser (f.eks. fra bygd til by)
- **Internasjonal migrasjon**: Flytting over landegrenser

I 2020 var det anslagsvis **280 millioner internasjonale migranter** i verden, noe som tilsvarer ca. 3,6 % av verdens befolkning.`,
    },
    {
      id: 'geo-5-3-push-pull',
      type: 'text',
      content: `## Push- og pull-faktorer

Den mest brukte modellen for å forklare migrasjon er **push-pull-modellen**, utviklet av geografen Everett Lee i 1966. Den beskriver krefter som «skyver» folk bort fra hjemstedet og «trekker» dem mot et nytt sted.

### Push-faktorer (det som driver folk bort)
- Krig, konflikt og politisk forfølgelse
- Fattigdom og arbeidsledighet
- Naturkatastrofer og klimaendringer
- Diskriminering på grunn av etnisitet, religion eller legning
- Dårlige utdannings- og helsetilbud
- Overbefolkning og press på ressurser

### Pull-faktorer (det som trekker folk til et nytt sted)
- Fred og politisk stabilitet
- Bedre jobbmuligheter og høyere lønn
- Gode velferdsordninger
- Utdanningsmuligheter
- Familiegjenforening
- Personlig frihet og menneskerettigheter

I virkeligheten er migrasjonsbeslutninger ofte en kombinasjon av push- og pull-faktorer, sammen med personlige omstendigheter og nettverk.`,
    },
    {
      id: 'geo-5-3-def-push-pull',
      type: 'definition',
      title: 'Push-pull-modellen',
      content: 'Push-pull-modellen forklarer migrasjon som et resultat av to typer krefter: push-faktorer som skyver folk bort fra hjemstedet (krig, fattigdom, naturkatastrofer) og pull-faktorer som trekker folk mot et nytt sted (bedre jobbmuligheter, trygghet, velferdsordninger). Modellen er en forenkling, da migrasjonsbeslutninger også påvirkes av barrierer (avstand, grensekontroll, økonomi) og personlige faktorer.',
    },
    {
      id: 'geo-5-3-typer',
      type: 'text',
      content: `## Typer migrasjon

### Etter motivasjon
- **Arbeidsinnvandring**: Flytting for å finne arbeid eller bedre lønn. Den vanligste formen for internasjonal migrasjon.
- **Flukt**: Mennesker som flykter fra krig, forfølgelse eller naturkatastrofer. Regulert av FNs flyktningkonvensjon.
- **Familiemigrasjon**: Flytting for å gjenforenes med familiemedlemmer i et annet land.
- **Utdanningsmigrasjon**: Studenter som reiser til andre land for å studere.

### Etter varighet
- **Permanent migrasjon**: Varig bosetting i et nytt land.
- **Midlertidig migrasjon**: Sesongarbeid, kontraktsarbeid eller utdanning med planlagt hjemreise.
- **Sirkulær migrasjon**: Gjentatte flyttinger mellom hjemland og vertsland.

### Etter tvang
- **Frivillig migrasjon**: Personen velger selv å flytte, for eksempel for arbeid eller utdanning.
- **Tvungen migrasjon**: Personen har ikke noe reelt valg – for eksempel flukt fra krig eller fordrivelse.
- **Intern fordrivelse**: Mennesker som er tvunget til å flykte, men som forblir innenfor sitt eget lands grenser.`,
    },
    {
      id: 'geo-5-3-brain-drain',
      type: 'text',
      content: `## Brain drain

**Brain drain** (hjerneflukt) oppstår når høyt utdannede mennesker forlater hjemlandet for å arbeide i rikere land. Dette rammer utviklingsland hardt:

- Leger, ingeniører og forskere søker bedre lønn og arbeidsforhold i utlandet
- Hjemlandet mister kompetanse det har investert i gjennom utdanningssystemet
- Helsetjenester og annen kritisk infrastruktur svekkes
- Eksempler: Mange afrikanske land mister leger til Europa og Nord-Amerika

### Brain gain
I noen tilfeller kan migrasjon også føre til **brain gain** (hjernegevinst):
- Migranter tilegner seg ny kompetanse i utlandet og tar den med hjem
- Diasporanettverk kan stimulere handel og investeringer i hjemlandet
- Utdanningsambisjoner øker i hjemlandet når migrasjon viser at utdanning lønner seg`,
    },
    {
      id: 'geo-5-3-def-brain-drain',
      type: 'definition',
      title: 'Brain drain',
      content: 'Brain drain (hjerneflukt) er emigrasjon av høyt utdannet og kompetent arbeidskraft fra utviklingsland til rikere land. Fenomenet svekker avsenderlandets kapasitet innen helse, utdanning, teknologi og forskning, og kan forsterke ulikhet mellom rike og fattige land.',
    },
    {
      id: 'geo-5-3-remitter',
      type: 'text',
      content: `## Remitter – pengeoverføringer hjem

Migranter sender ofte penger tilbake til familien i hjemlandet. Disse pengeoverføringene kalles **remitter** og utgjør en enorm pengestrøm globalt.

### Betydningen av remitter
- I 2022 sendte migranter anslagsvis **over 600 milliarder dollar** til lav- og mellominntektsland
- For mange land utgjør remitter mer enn all bistand og utenlandske investeringer til sammen
- Pengene går ofte direkte til familier og brukes til mat, utdanning, helse og bolig
- Remitter bidrar til å redusere fattigdom og stimulere lokale økonomier

### Eksempler
- I land som Nepal, Tadsjikistan og Haiti utgjør remitter over 20 % av BNP
- Filippinene og India er blant de største mottakerne i absolutte tall
- Pengene sendes ofte gjennom formelle kanaler (banker, overføringsselskaper) eller uformelle nettverk`,
    },
    {
      id: 'geo-5-3-def-remitter',
      type: 'definition',
      title: 'Remitter',
      content: 'Remitter er pengeoverføringer som migranter sender tilbake til familier og lokalsamfunn i hjemlandet. Remitter er en viktig inntektskilde for mange utviklingsland og bidrar til fattigdomsreduksjon, bedre helsetilbud og økt utdanning i mottakerlandene.',
    },
    {
      id: 'geo-5-3-example',
      type: 'example',
      title: 'Push-pull-analyse',
      problem: 'Maria er 28 år og utdannet sykepleier i Filippinene. Hun tjener lite og arbeidsforholdene er tøffe. Søsteren hennes bor i Norge og har fått fast jobb som sykepleier der. Analyser Marias situasjon ved hjelp av push-pull-modellen.',
      solution: `**Push-faktorer (Filippinene):**
- Lav lønn for sykepleiere sammenlignet med levekostnadene
- Vanskelige arbeidsforhold med lange vakter og mangel på utstyr
- Begrensede karrieremuligheter innen helsesektoren

**Pull-faktorer (Norge):**
- Høyere lønn og bedre arbeidsforhold
- Etterspørsel etter sykepleiere (mangel på helsepersonell)
- Gode velferdsordninger (helseforsikring, pensjonsordning)
- Søsteren bor allerede der (nettverk og familiegjenforening)

**Barrierer:**
- Språk – Maria må lære norsk
- Godkjenning av utdanning i Norge
- Avstand fra resten av familien
- Kulturelle forskjeller

**Konsekvenser:**
- For Filippinene: Brain drain innen helsesektoren, men Maria kan sende remitter hjem
- For Norge: Brain gain – viktig kompetanse i en sektor med underskudd på arbeidskraft`,
    },
    {
      id: 'geo-5-3-konsekvenser',
      type: 'text',
      content: `## Konsekvenser av migrasjon

### For avsenderland
**Positive:**
- Remitter styrker økonomien
- Redusert press på arbeidsmarkedet
- Kompetanseoverføring ved tilbakevending

**Negative:**
- Brain drain – tap av utdannet arbeidskraft
- Familier splittes
- Avhengighet av remitter

### For mottakerland
**Positive:**
- Tilgang på arbeidskraft i sektorer med mangel
- Kulturelt mangfold og innovasjon
- Demografisk bidrag til aldrende samfunn

**Negative:**
- Integreringsutfordringer (språk, kultur, arbeid)
- Press på boliger, skoler og velferdsordninger
- Potensielle sosiale spenninger`,
    },
  
    {
      id: 'geo-5-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Migrasjon er permanent eller langvarig flytting mellom steder
- **Push-faktorer** (krig, fattigdom, naturkatastrofer) driver folk bort fra hjemstedet
- **Pull-faktorer** (arbeid, utdanning, sikkerhet) trekker folk til nye steder
- **Brain drain** oppstaar naar hoyt utdannede forlater hjemlandet
- Migrasjon har baade positive og negative konsekvenser for baade avsender- og mottakerland`,
    },
  ],
  exercises: [
    {
      id: 'geo-5-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er en push-faktor for migrasjon?',
      options: [
        { id: 'a', text: 'Krig og konflikt i hjemlandet', isCorrect: true },
        { id: 'b', text: 'Gode jobbmuligheter i utlandet', isCorrect: false },
        { id: 'c', text: 'Høyere lønn i et annet land', isCorrect: false },
        { id: 'd', text: 'Familiegjenforening i utlandet', isCorrect: false },
      ],
      solution: 'Krig og konflikt er en push-faktor fordi det er noe som driver folk bort fra hjemstedet. Pull-faktorer er det som trekker folk mot et nytt sted, som jobbmuligheter, høyere lønn og familiegjenforening.',
    },
    {
      id: 'geo-5-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva brain drain er, og drøft hvilke konsekvenser det kan ha for et utviklingsland.',
      solution: 'Brain drain (hjerneflukt) er emigrasjon av høyt utdannet arbeidskraft fra et land, typisk fra utviklingsland til rikere land. Konsekvensene for avsenderlandet kan være alvorlige: helsevesenet svekkes når leger emigrerer, utdanningssektoren mister kompetente lærere, og det teknologiske utviklingspotensialet reduseres. Landet taper investeringene det har gjort i utdanning. Samtidig kan brain drain ha noen positive sider: migranter sender remitter hjem, de kan bygge internasjonale nettverk som gagner hjemlandet, og noen returnerer med ny kompetanse (brain gain).',
    },
    {
      id: 'geo-5-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva menes med remitter?',
      options: [
        { id: 'a', text: 'Pengeoverføringer fra migranter til familien i hjemlandet', isCorrect: true },
        { id: 'b', text: 'Bistandspenger fra rike land til fattige land', isCorrect: false },
        { id: 'c', text: 'Utenlandske investeringer i utviklingsland', isCorrect: false },
        { id: 'd', text: 'Lån fra Verdensbanken til fattige stater', isCorrect: false },
      ],
      solution: 'Remitter er pengeoverføringer som migranter sender tilbake til familier og lokalsamfunn i hjemlandet. I mange utviklingsland utgjør remitter en større inntektskilde enn bistand og utenlandske investeringer.',
    },
    {
      id: 'geo-5-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv forskjellen mellom frivillig og tvungen migrasjon, og gi eksempler på hver type.',
      solution: 'Frivillig migrasjon er når en person selv velger å flytte, typisk for å søke bedre arbeid, utdanning eller livskvalitet. Eksempler er en polsk håndverker som reiser til Norge for å arbeide, eller en norsk student som tar utveksling i Storbritannia. Tvungen migrasjon er når en person ikke har noe reelt valg og må flytte for å overleve. Eksempler er syrere som flykter fra borgerkrig, rohingya-folket som er fordrevet fra Myanmar, eller klimaflyktninger som mister hjemmet sitt på grunn av havnivåstigning. Grensen mellom frivillig og tvungen migrasjon er ikke alltid skarp – for eksempel kan ekstrem fattigdom gjøre migrasjon nesten tvunget, selv om det formelt regnes som frivillig.',
    },
    {
      id: 'geo-5-3-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Omtrent hvor mange internasjonale migranter var det i verden rundt 2020?',
      options: [
        { id: 'a', text: 'Ca. 280 millioner', isCorrect: true },
        { id: 'b', text: 'Ca. 50 millioner', isCorrect: false },
        { id: 'c', text: 'Ca. 1 milliard', isCorrect: false },
        { id: 'd', text: 'Ca. 500 millioner', isCorrect: false },
      ],
      solution: 'I 2020 var det anslagsvis 280 millioner internasjonale migranter i verden, noe som tilsvarer omtrent 3,6 % av verdens befolkning. De fleste mennesker bor altså fortsatt i landet de er født i.',
    },
  ],
};

// ============================================================================
// Kapittel 5.4: Flyktninger og asyl
// ============================================================================

const CHAPTER_GEOGRAFI_5_4: TextbookChapter = {
  id: 'geografi-1-5-4',
  courseId: 'geografi',
  chapterNumber: '5.4',
  title: 'Flyktninger og asyl',
  description: 'FNs flyktningkonvensjon, globale flyktningkriser, internt fordrevne og UNHCRs rolle.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for flyktningsituasjonen i verden og drøfte utfordringer knyttet til flyktninger og asylsøkere',
    'forklare hva FNs flyktningkonvensjon innebærer og hvordan den anvendes i dag',
  ],
  content: [
    {
      id: 'geo-5-4-intro',
      type: 'text',
      content: `# Flyktninger og asyl

Verdens flyktningsituasjon er en av de største humanitære utfordringene i vår tid. Ved utgangen av 2022 var over **108 millioner** mennesker tvunget på flukt, det høyeste tallet noensinne. Av disse var omtrent 35 millioner flyktninger som hadde krysset en landegrense, mens resten var **internt fordrevne** – mennesker som hadde flyktet innenfor sitt eget land.

## Hvem er en flyktning?

Begrepet flyktning er juridisk definert i **FNs flyktningkonvensjon** fra 1951. En flyktning er en person som:

- Befinner seg utenfor sitt hjemland
- Har en velbegrunnet frykt for forfølgelse
- Forfølgelsen skyldes rase, religion, nasjonalitet, tilhørighet til en sosial gruppe eller politisk oppfatning
- Ikke kan eller vil søke beskyttelse i hjemlandet

Konvensjonen gir flyktninger rett til ikke å bli returnert til et land der de risikerer forfølgelse – det såkalte **non-refoulement-prinsippet**.`,
    },
    {
      id: 'geo-5-4-def-flyktning',
      type: 'definition',
      title: 'Flyktning',
      content: 'En flyktning er ifølge FNs flyktningkonvensjon (1951) en person som har flyktet fra sitt hjemland og har en velbegrunnet frykt for forfølgelse på grunn av rase, religion, nasjonalitet, tilhørighet til en bestemt sosial gruppe eller politisk oppfatning. Flyktningstatusen gir rett til internasjonal beskyttelse og et forbud mot å bli sendt tilbake til et land der man risikerer forfølgelse (non-refoulement).',
    },
    {
      id: 'geo-5-4-konvensjon',
      type: 'text',
      content: `## FNs flyktningkonvensjon

FNs flyktningkonvensjon ble vedtatt i 1951, i kjølvannet av andre verdenskrig og de enorme flyktningstrømmene den forårsaket. En tilleggsprotokoll fra 1967 fjernet de geografiske og tidsmessige begrensningene i den opprinnelige konvensjonen.

### Sentrale rettigheter for flyktninger
- **Non-refoulement**: Forbud mot å sende tilbake til fare
- **Rett til å søke asyl**: Alle har rett til å be om beskyttelse
- **Grunnleggende rettigheter**: Tilgang til rettsvesen, utdanning, arbeid og helsehjelp
- **Identitetsdokumenter**: Rett til reisedokumenter

### Begrensninger i konvensjonen
- Dekker ikke klimaflyktninger eller mennesker som flykter fra generell vold
- Mange land tolker konvensjonen ulikt
- Konvensjonen er utformet for individuelle tilfeller, men de fleste flyktningkriser i dag er masseflukt
- Internt fordrevne faller utenfor konvensjonens virkeområde`,
    },
    {
      id: 'geo-5-4-kriser',
      type: 'text',
      content: `## Store flyktningkriser i verden

### Syria (2011–)
- Borgerkrigen i Syria har drevet over 13 millioner mennesker på flukt
- Ca. 6,8 millioner er internt fordrevne
- Nabolandene Tyrkia, Libanon og Jordan har tatt imot flest
- Tyrkia alene huser over 3,5 millioner syriske flyktninger

### Ukraina (2022–)
- Russlands invasjon utløste den raskeste flyktningkrisen i Europa siden andre verdenskrig
- Over 6 millioner flyktet ut av landet i løpet av de første månedene
- De fleste flyktet til naboland: Polen, Romania, Moldova og andre EU-land

### Afghanistan
- Flere tiår med krig og Talibans maktovertagelse i 2021
- Over 5 millioner afghanske flyktninger, de fleste i Pakistan og Iran

### Andre store kriser
- **Sør-Sudan**: Borgerkrig har drevet millioner på flukt
- **Myanmar**: Forfølgelse av rohingya-folket
- **Venezuela**: Økonomisk og politisk krise har sendt over 7 millioner ut av landet
- **Sahel-regionen**: Konflikt og klimaendringer driver befolkningen på flukt`,
    },
    {
      id: 'geo-5-4-internt-fordrevne',
      type: 'text',
      content: `## Internt fordrevne

**Internt fordrevne** (IDP – Internally Displaced Persons) er mennesker som er tvunget til å flykte fra hjemmet sitt, men som forblir innenfor sitt eget lands grenser. De utgjør den største gruppen tvangsfordrevne i verden.

### Forskjell fra flyktninger
- Internt fordrevne har ikke krysset en landegrense
- De faller ikke inn under FNs flyktningkonvensjon
- De er fortsatt under ansvaret til sin egen regjering – som ofte er den som forfølger dem
- De får sjelden samme internasjonale oppmerksomhet og beskyttelse som flyktninger

### Årsaker til intern fordrivelse
- Væpnet konflikt (den vanligste årsaken)
- Naturkatastrofer (flom, jordskjelv, tørke)
- Klimaendringer (langsom forverring av levekår)
- Utviklingsprosjekter (dambygging, gruveindustri)

I 2022 var det over **60 millioner internt fordrevne** i verden, de fleste i Syria, Colombia, Den demokratiske republikken Kongo, Ukraina og Etiopia.`,
    },
    {
      id: 'geo-5-4-def-idp',
      type: 'definition',
      title: 'Internt fordrevne (IDP)',
      content: 'Internt fordrevne (Internally Displaced Persons) er personer som er tvunget til å forlate hjemstedet sitt, men som ikke har krysset en internasjonal grense. De faller utenfor FNs flyktningkonvensjon og er formelt under sin egen regjerings ansvar, noe som gjør dem særlig sårbare i konfliktsituasjoner der staten selv er ansvarlig for fordrivelsen.',
    },
    {
      id: 'geo-5-4-unhcr',
      type: 'text',
      content: `## UNHCR – FNs høykommissær for flyktninger

**UNHCR** (United Nations High Commissioner for Refugees) ble opprettet i 1950 og er FNs flyktningorganisasjon. Organisasjonen har mandat til å beskytte flyktninger og hjelpe dem med å finne varige løsninger.

### UNHCRs oppgaver
- **Beskyttelse**: Sikre at flyktningers rettigheter respekteres
- **Nødhjelp**: Mat, vann, husly og helsetjenester i kriser
- **Registrering**: Kartlegge og registrere flyktninger
- **Varige løsninger**: Arbeide for frivillig hjemreise, lokal integrering eller gjenbosetting

### Tre varige løsninger
1. **Frivillig hjemreise**: Flyktninger returnerer til hjemlandet når det er trygt
2. **Lokal integrering**: Flyktninger bosetter seg permanent i vertslandet
3. **Gjenbosetting**: Flyktninger flyttes til et tredjeland som har sagt ja til å ta imot dem

UNHCR bistår også i økende grad internt fordrevne, statsløse personer og andre sårbare grupper.`,
    },
    {
      id: 'geo-5-4-asyl',
      type: 'text',
      content: `## Asylprosessen

Når en person kommer til et land og ber om beskyttelse, kalles vedkommende en **asylsøker**. Personen er asylsøker inntil søknaden er behandlet. Dersom søknaden innvilges, får personen **flyktningstatus** eller annen form for oppholdstillatelse.

### Asylprosessen i korte trekk
1. **Ankomst og registrering**: Asylsøkeren melder seg og registreres
2. **Asylintervju**: Søkeren forklarer hvorfor han eller hun trenger beskyttelse
3. **Saksbehandling**: Myndighetene vurderer om personen oppfyller vilkårene
4. **Vedtak**: Innvilgelse (oppholdstillatelse) eller avslag
5. **Klage**: Ved avslag kan søkeren klage på vedtaket

### Utfordringer
- Lang ventetid i mange land (måneder til år)
- Asylsøkere lever ofte under vanskelige forhold i mottak
- Ulik praksis mellom land – noen er strengere enn andre
- Mennesker som får avslag, men ikke kan returneres, kan havne i en juridisk limbo`,
    },
    {
      id: 'geo-5-4-example',
      type: 'example',
      title: 'Nabolandsbelastning',
      problem: 'Drøft hvorfor de fleste flyktninger befinner seg i naboland til konfliktsonen, og hvilke konsekvenser dette har.',
      solution: `**Hvorfor naboland?**
- Flyktninger flykter til nærmeste trygge sted – det krever minst ressurser
- Mange har ikke råd til å reise langt
- Kulturell og språklig nærhet til naboland gjør overgangen lettere
- Familier splittes, og noen blir igjen – det er lettere å holde kontakten fra naboland
- Mange håper å kunne vende hjem snart

**Konsekvenser for nabolandene:**
- Enorme belastninger på infrastruktur (skoler, sykehus, vann, strøm)
- Press på arbeidsmarkedet og boligmarkedet
- Politisk spenning – store flyktninggrupper kan destabilisere vertslandet
- Miljøbelastning i områder med store flyktningleirer
- Eksempel: Libanon har ca. 1 million syriske flyktninger i et land med 5 millioner innbyggere – det tilsvarer 20 % av befolkningen

**Urettferdig fordeling:**
Rundt 76 % av verdens flyktninger bor i lav- og mellominntektsland. De rikeste landene tar imot en relativt liten andel, noe som skaper debatt om byrdefordeling.`,
    },
  
    {
      id: 'geo-5-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- En **flyktning** er en person som har flyktet fra hjemlandet paa grunn av forfolgelse, krig eller vold
- **FNs flyktningkonvensjon** (1951) definerer flyktningers rettigheter
- **UNHCR** (FNs hoykommissar for flyktninger) beskytter og bistaar flyktninger globalt
- De fleste flyktninger befinner seg i naboland til konfliktomraadet, ikke i Europa
- **Internt fordrevne** (IDPs) har flyktet innenfor eget land og har ofte svakere rettsbeskyttelse`,
    },
  ],
  exercises: [
    {
      id: 'geo-5-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva innebærer non-refoulement-prinsippet?',
      options: [
        { id: 'a', text: 'Forbud mot å returnere en flyktning til et land der vedkommende risikerer forfølgelse', isCorrect: true },
        { id: 'b', text: 'Forbud mot å nekte en flyktning arbeidstillatelse', isCorrect: false },
        { id: 'c', text: 'Rett til permanent opphold i alle land', isCorrect: false },
        { id: 'd', text: 'Forbud mot å ta imot flyktninger fra konfliktsoner', isCorrect: false },
      ],
      solution: 'Non-refoulement er et grunnleggende prinsipp i FNs flyktningkonvensjon som forbyr stater å sende en flyktning tilbake til et land der vedkommende risikerer forfølgelse, tortur eller umenneskelig behandling.',
    },
    {
      id: 'geo-5-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom en flyktning og en internt fordrevet person. Hvorfor er internt fordrevne ofte i en mer sårbar situasjon?',
      solution: 'En flyktning har krysset en internasjonal grense og har rett til beskyttelse under FNs flyktningkonvensjon. En internt fordrevet person er tvunget på flukt, men forblir innenfor sitt eget lands grenser. Internt fordrevne er ofte mer sårbare fordi de ikke omfattes av flyktningkonvensjonen, de er formelt under sin egen regjerings ansvar (som kanskje er den som forfølger dem), de får ofte mindre internasjonal oppmerksomhet og bistand, og det er vanskeligere for internasjonale organisasjoner å nå frem til dem, særlig i konfliktsoner.',
    },
    {
      id: 'geo-5-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilke tre varige løsninger arbeider UNHCR med for flyktninger?',
      options: [
        { id: 'a', text: 'Frivillig hjemreise, lokal integrering og gjenbosetting', isCorrect: true },
        { id: 'b', text: 'Deportering, arbeidsintegrering og statsborgerskap', isCorrect: false },
        { id: 'c', text: 'Flyktningleir, midlertidig opphold og familiegjenforening', isCorrect: false },
        { id: 'd', text: 'Bistand, militær intervensjon og diplomatisk press', isCorrect: false },
      ],
      solution: 'UNHCRs tre varige løsninger er: (1) Frivillig hjemreise – flyktninger returnerer til hjemlandet når det er trygt, (2) Lokal integrering – flyktninger bosetter seg permanent i vertslandet, og (3) Gjenbosetting – flyktninger overføres til et tredjeland som har sagt ja til å ta imot dem.',
    },
    {
      id: 'geo-5-4-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft utfordringer ved den globale byrdefordelingen av flyktninger. Hvorfor bor de fleste flyktninger i fattige naboland, og hva kan det internasjonale samfunnet gjøre for å forbedre situasjonen?',
      solution: 'De fleste flyktninger bor i lav- og mellominntektsland, ofte naboland til konfliktsoner, fordi de flykter til nærmeste trygge sted og sjelden har ressurser til å reise langt. Land som Tyrkia, Pakistan, Uganda og Libanon huser enorme flyktninggrupper, noe som legger enormt press på infrastruktur, arbeidsmarked og naturressurser. Rike land tar imot en forholdsmessig liten andel. For å forbedre situasjonen kan det internasjonale samfunnet: øke den finansielle støtten til vertsland, øke antall kvoteflyktninger som gjenbosettes i rike land, investere i langsiktig utvikling i vertssamfunnene (ikke bare nødhjelp), og arbeide for politiske løsninger på konfliktene som skaper flyktningstrømmene. Det trengs også bedre internasjonale avtaler om rettferdig byrdefordeling.',
    },
    {
      id: 'geo-5-4-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Når ble FNs flyktningkonvensjon vedtatt?',
      options: [
        { id: 'a', text: '1951', isCorrect: true },
        { id: 'b', text: '1945', isCorrect: false },
        { id: 'c', text: '1967', isCorrect: false },
        { id: 'd', text: '1990', isCorrect: false },
      ],
      solution: 'FNs flyktningkonvensjon ble vedtatt i 1951, i kjølvannet av andre verdenskrig og de store flyktningstrømmene den forårsaket. Tilleggsprotokollen fra 1967 utvidet konvensjonen til å gjelde globalt, ikke bare for europeiske flyktninger fra før 1951.',
    },
  ],
};

// ============================================================================
// Kapittel 5.5: Befolkningsutvikling i Norge
// ============================================================================

const CHAPTER_GEOGRAFI_5_5: TextbookChapter = {
  id: 'geografi-1-5-5',
  courseId: 'geografi',
  chapterNumber: '5.5',
  title: 'Befolkningsutvikling i Norge',
  description: 'Norsk befolkningshistorie, innvandring, sentralisering, urbanisering og befolkningsprognoser.',
  estimatedMinutes: 20,
  competenceGoals: [
    'beskrive hovedtrekk i Norges befolkningsutvikling og forklare årsaker til endringer',
    'drøfte konsekvenser av sentralisering, urbanisering og innvandring i Norge',
  ],
  content: [
    {
      id: 'geo-5-5-intro',
      type: 'text',
      content: `# Befolkningsutvikling i Norge

Norges befolkning har vokst fra under én million i 1800 til over **5,5 millioner** i dag. Denne veksten gjenspeiler den demografiske overgangen, men også store endringer i migrasjonsmønstre, levestandard og familiestrukturer.

## Historisk oversikt

### 1800-tallet: Emigrasjon og vekst
- Norges befolkning vokste fra ca. 900 000 i 1800 til 2,2 millioner i 1900
- Bedre ernæring og hygiene reduserte dødeligheten
- Samtidig utvandret over 800 000 nordmenn til Amerika mellom 1825 og 1930
- Fattigdom, jordmangel og religiøs forfølgelse drev utvandringen

### 1900-1950: Industrialisering
- Rask urbanisering – folk flyttet fra bygdene til byene
- Industrien skapte arbeidsplasser i byer og tettsteder
- Fruktbarheten begynte å synke
- Emigrasjonen avtok

### 1950-2000: Velferdsstat og innvandring
- Sterk velstandsvekst etter andre verdenskrig
- Norge gikk fra å være et utvandringsland til et innvandringsland
- Oljeindustrien fra 1970-tallet trakk til seg arbeidskraft
- Familieplanlegging og prevensjonsrevolusjonen ga lavere fruktbarhet`,
    },
    {
      id: 'geo-5-5-innvandring',
      type: 'text',
      content: `## Innvandring til Norge

Norge har gått fra å være et svært homogent land til et stadig mer mangfoldig samfunn. Innvandringen har kommet i flere bølger:

### Arbeidsinnvandring (1960-1975)
- Primært fra Pakistan, Tyrkia og Marokko
- Innvandringsstopp i 1975, men familiegjenforening fortsatte

### Flyktninger (1980-tallet og fremover)
- Vietnam, Chile, Iran, Irak, Somalia, Bosnia
- Syriske flyktninger fra 2015
- Ukrainske flyktninger fra 2022

### EØS-innvandring (etter 2004)
- EU-utvidelsen i 2004 åpnet for arbeidsmigrasjon fra Øst-Europa
- Stor tilstrømming fra Polen, Litauen, Latvia og Romania
- Mange jobbet i byggebransjen, helsevesenet og servicenæringen

### Befolkningssammensetning i dag
- Rundt 16–17 % av befolkningen er innvandrere eller norskfødte med innvandrerforeldre
- Innvandring har vært den viktigste kilden til befolkningsvekst de siste tiårene
- Oslo er den mest mangfoldige byen, der over 30 % av befolkningen har innvandrerbakgrunn`,
    },
    {
      id: 'geo-5-5-def-sentralisering',
      type: 'definition',
      title: 'Sentralisering',
      content: 'Sentralisering er en prosess der befolkning, arbeidsplasser, tjenester og makt konsentreres i og rundt de største byene og byregionene. I Norge innebærer dette at folk flytter fra distriktene til byene og nærliggende pendlingsområder, noe som fører til befolkningsvekst i sentrale strøk og nedgang i utkantene.',
    },
    {
      id: 'geo-5-5-sentralisering',
      type: 'text',
      content: `## Sentralisering og urbanisering

Norge har en tydelig sentraliseringstrend. Befolkningsveksten skjer primært i og rundt de store byene, mens mange distriktskommuner opplever fraflytting.

### Drivkrefter for sentralisering
- **Arbeidsmarkedet**: Flere og mer varierte jobber i byene
- **Utdanning**: Universiteter og høyskoler ligger i byene
- **Tjenestetilbud**: Bedre helsetjenester, kultur og fritidstilbud
- **Sosiale nettverk**: Unge trekkes dit jevnaldrende er

### Konsekvenser for byene
- Befolkningsvekst og boligpress
- Økt trafikk og transportbehov
- Større kulturelt mangfold
- Behov for utbygging av infrastruktur

### Konsekvenser for distriktene
- Fraflytting og synkende folketall
- Aldrende befolkning (unge flytter ut)
- Nedlegging av skoler, butikker og tjenestetilbud
- Fare for at lokalsamfunn «dør ut»

### Norsk distriktspolitikk
Norge har tradisjonelt ført en aktiv distriktspolitikk for å motvirke sentralisering:
- Lavere arbeidsgiveravgift i distriktene
- Desentralisering av statlige arbeidsplasser
- Støtte til næringsutvikling i utkantstrøk
- Gode velferdsordninger uavhengig av bosted`,
    },
    {
      id: 'geo-5-5-urbanisering',
      type: 'text',
      content: `## Urbanisering i Norge

I 1800 bodde bare ca. 10 % av nordmenn i byer. I dag bor over **80 %** i byer og tettsteder. Norge er blant de mest urbaniserte landene i verden.

### De største byregionene
- **Oslo-regionen**: Over 1 million innbyggere – Norges desidert største byområde
- **Bergen**: Ca. 285 000 innbyggere
- **Trondheim**: Ca. 210 000 innbyggere
- **Stavanger/Sandnes**: Ca. 240 000 innbyggere

### Byvekst og byspredning
Mange norske byer vokser ikke bare i folketall, men sprer seg også utover i areal. Denne **byspredningen** (urban sprawl) fører til:
- Økt transportbehov og bilbruk
- Nedbygging av matjord og natur
- Utfordringer for kollektivtrafikk
- Segregering mellom boligområder

Norsk planpolitikk forsøker å styre byveksten gjennom **fortetting** – å bygge tettere i eksisterende byområder fremfor å spre bebyggelsen utover.`,
    },
    {
      id: 'geo-5-5-prognoser',
      type: 'text',
      content: `## Befolkningsprognoser

**Statistisk sentralbyrå (SSB)** utarbeider jevnlig prognoser for Norges framtidige befolkningsutvikling. Disse framskrivningene er usikre og avhenger av antakelser om fruktbarhet, levealder og innvandring.

### Hovedtrekk i SSBs framskrivninger
- Norges befolkning forventes å vokse til ca. **6 millioner** i løpet av 2030–2040-tallet
- Veksten drives hovedsakelig av innvandring, da fruktbarheten er under reproduksjonsnivået
- Andelen eldre vil øke betydelig – antall personer over 70 kan doble seg innen 2060
- Distriktskommuner vil fortsette å oppleve nedgang, mens byregioner vokser

### Demografiske utfordringer for Norge
- **Eldrebølgen**: Stor etterkrigsgenerasjon når pensjonsalder
- **Lav fruktbarhet**: SFT har falt til rundt 1,4–1,5, godt under reproduksjonsnivået
- **Finansiering av velferdsstaten**: Færre yrkesaktive per pensjonist
- **Distriktspolitikk**: Opprettholde gode tjenester i hele landet
- **Integrering**: Sikre god integrering av innvandrere i arbeidsmarkedet`,
    },
    {
      id: 'geo-5-5-def-ssb',
      type: 'definition',
      title: 'Statistisk sentralbyrå (SSB)',
      content: 'Statistisk sentralbyrå (SSB) er Norges sentrale institusjon for innsamling, bearbeiding og formidling av offisiell statistikk. SSB utarbeider blant annet befolkningsframskrivninger som brukes som grunnlag for politiske beslutninger om velferd, infrastruktur og offentlige tjenester.',
    },
    {
      id: 'geo-5-5-example',
      type: 'example',
      title: 'Utvandring og innvandring i norsk historie',
      problem: 'Sammenlign den norske utvandringen til Amerika på 1800-tallet med innvandringen til Norge i dag. Hvilke likheter og forskjeller finner du?',
      solution: `**Likheter:**
- Begge gruppene søkte bedre økonomiske muligheter
- Push-faktorer spilte en viktig rolle (fattigdom for nordmenn, krig/fattigdom for mange innvandrere i dag)
- Familienettverkene var viktige – nordmenn reiste dit slektninger allerede var, og innvandrere i dag gjør det samme
- Begge gruppene opplevde utfordringer med integrering, språk og kultur i det nye landet

**Forskjeller:**
- Norsk utvandring var nesten utelukkende frivillig (økonomisk motivert), mens mange innvandrere til Norge i dag er flyktninger
- 1800-tallets nordmenn reiste til et land med ubegrenset innvandring, mens Norge i dag har strenge innvandringsregler
- Mange innvandrere til Norge i dag kommer fra kulturelt svært forskjellige samfunn, mens nordmenn reiste til et land med kulturelle likheter
- Kommunikasjon med hjemlandet var nesten umulig for utvandrerne, mens dagens migranter har telefon og internett
- Det finnes et velferdsapparat i Norge i dag som ikke eksisterte i 1800-tallets Amerika`,
    },
  
    {
      id: 'geo-5-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Norges befolkning har vokst fra ca. 1,7 millioner i 1800 til over 5,5 millioner i dag
- **Innvandring** har vaert den viktigste drivkraften for befolkningsvekst de siste tiaarene
- **Sentralisering** betyr at flere bor i og rundt de stoerste byene
- SSB lager befolkningsprognoser som brukes til planlegging av velferdsordninger
- Befolkningsfordelingen i Norge preges av geografi, med konsentrasjon langs kysten og i byomraadene`,
    },
  ],
  exercises: [
    {
      id: 'geo-5-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva var den viktigste årsaken til norsk utvandring til Amerika på 1800-tallet?',
      options: [
        { id: 'a', text: 'Fattigdom og mangel på jord', isCorrect: true },
        { id: 'b', text: 'Krig og politisk forfølgelse', isCorrect: false },
        { id: 'c', text: 'Naturkatastrofer', isCorrect: false },
        { id: 'd', text: 'Religiøs forfølgelse alene', isCorrect: false },
      ],
      solution: 'Den viktigste drivkraften bak den norske utvandringen var fattigdom og mangel på jord. Norge hadde en raskt voksende befolkning, men begrenset dyrkbar jord. I Amerika lokket billig jord og bedre økonomiske muligheter. Religiøs forfølgelse spilte også en rolle for noen grupper (som haugianerne), men økonomiske faktorer var dominerende.',
    },
    {
      id: 'geo-5-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de viktigste fasene i innvandringen til Norge fra 1960-tallet og frem til i dag.',
      solution: 'Innvandringen til Norge kan deles i tre hovedfaser: (1) Arbeidsinnvandring (1960–1975) fra Pakistan, Tyrkia og Marokko, som stoppet med innvandringsstoppen i 1975. (2) Flyktninginnvandring (1980-tallet og fremover) fra blant annet Vietnam, Chile, Iran, Irak, Somalia, Bosnia, Syria og Ukraina. (3) EØS-innvandring (etter 2004) med stor arbeidsinnvandring fra Øst-Europa, særlig Polen og de baltiske landene, etter EU-utvidelsen. Dagens norske befolkning består av rundt 16–17 % innvandrere eller norskfødte med innvandrerforeldre.',
    },
    {
      id: 'geo-5-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er omtrent samlet fruktbarhetstall (SFT) i Norge i dag?',
      options: [
        { id: 'a', text: 'Ca. 1,4–1,5 barn per kvinne', isCorrect: true },
        { id: 'b', text: 'Ca. 2,1 barn per kvinne', isCorrect: false },
        { id: 'c', text: 'Ca. 2,5 barn per kvinne', isCorrect: false },
        { id: 'd', text: 'Ca. 1,0 barn per kvinne', isCorrect: false },
      ],
      solution: 'Norges samlet fruktbarhetstall har falt de siste årene og ligger nå på ca. 1,4–1,5 barn per kvinne, godt under reproduksjonsnivået på 2,1. Uten innvandring ville den norske befolkningen på sikt gå ned.',
    },
    {
      id: 'geo-5-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Drøft positive og negative konsekvenser av sentraliseringen i Norge.',
      solution: 'Positive konsekvenser av sentralisering: byene tilbyr et bredere arbeidsmarked med flere karrieremuligheter, bedre utdanningstilbud, rikt kulturtilbud, effektiv kollektivtransport og stordriftsfordeler i tjenestetilbud. Negative konsekvenser: distriktene opplever fraflytting, aldrende befolkning og nedlegging av skoler, butikker og helsetilbud. I byene skaper veksten boligpress med høye priser, trafikkproblemer, forurensning og press på infrastruktur. Sentralisering kan også føre til at naturressurser i distriktene ikke utnyttes optimalt, og at kulturarv og lokalsamfunn forvitrer. Norsk distriktspolitikk forsøker å motvirke de negative konsekvensene gjennom differensiert arbeidsgiveravgift, desentralisering av statlige arbeidsplasser og støtte til næringsutvikling i distriktene.',
    },
    {
      id: 'geo-5-5-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Omtrent hvor stor andel av Norges befolkning bor i byer og tettsteder i dag?',
      options: [
        { id: 'a', text: 'Over 80 %', isCorrect: true },
        { id: 'b', text: 'Ca. 50 %', isCorrect: false },
        { id: 'c', text: 'Ca. 65 %', isCorrect: false },
        { id: 'd', text: 'Over 95 %', isCorrect: false },
      ],
      solution: 'Over 80 % av Norges befolkning bor i byer og tettsteder, noe som gjør Norge til et av de mest urbaniserte landene i verden. I 1800 var denne andelen bare ca. 10 %, noe som viser den dramatiske urbaniseringen som har skjedd over de siste 200 årene.',
    },
  ],
};

// ============================================================================
// Kapittel 5.6: Demografiske utfordringer globalt
// ============================================================================

const CHAPTER_GEOGRAFI_5_6: TextbookChapter = {
  id: 'geografi-1-5-6',
  courseId: 'geografi',
  chapterNumber: '5.6',
  title: 'Demografiske utfordringer globalt',
  description: 'Overbefolkning, aldring, befolkningspolitikk, befolkning og bærekraft, og urbanisering som global trend.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte sammenhenger mellom befolkningsutvikling, ressursbruk og bærekraftig utvikling',
    'vurdere ulike former for befolkningspolitikk og deres konsekvenser',
  ],
  content: [
    {
      id: 'geo-5-6-intro',
      type: 'text',
      content: `# Demografiske utfordringer globalt

Verden står overfor demografiske utfordringer som varierer enormt fra region til region. Mens noen land sliter med rask befolkningsvekst og ungdomsbølger, kjemper andre mot aldrende befolkninger og fødselsrater langt under reproduksjonsnivået. Disse utfordringene har store konsekvenser for økonomi, miljø og sosial stabilitet.

## Overbefolkning versus aldring

Verdens demografiske utfordringer kan grovt deles i to hovedkategorier:

### Utfordringen med rask befolkningsvekst
- Primært i Afrika sør for Sahara og deler av Sør-Asia
- Press på matproduksjon, vann, energi og naturressurser
- Vanskelig å skape nok arbeidsplasser for den unge befolkningen
- Utfordringer med å tilby utdanning og helsetjenester til alle
- Miljøbelastning og tap av biologisk mangfold

### Utfordringen med aldrende og krympende befolkninger
- Primært i Europa, Øst-Asia og deler av Sør-Amerika
- Færre yrkesaktive til å finansiere velferdsstaten
- Mangel på arbeidskraft
- Økonomisk stagnasjon
- Behov for innvandring eller dramatiske endringer i familiepolitikken`,
    },
    {
      id: 'geo-5-6-kina',
      type: 'text',
      content: `## Kinas befolkningspolitikk

Kina gir det mest kjente eksempelet på aktiv befolkningspolitikk. Landets tilnærming har endret seg dramatisk over tid:

### Ettbarnspolitikken (1979–2015)
- Innført for å bremse den raske befolkningsveksten
- Par i byene fikk bare lov til å ha ett barn
- Unntak for minoriteter, bønder og par der begge var enebarn
- Virkemidler: Økonomiske straffer for flere barn, belønning for ett-barnsfamilier, sosial kontroll

### Resultater
- Fruktbarheten falt dramatisk – fra ca. 5,8 barn per kvinne i 1970 til under 1,7 i dag
- Anslått at politikken «forhindret» ca. 400 millioner fødsler
- Kina unngikk den verste befolkningseksplosjonen

### Negative konsekvenser
- **Kjønnsubalanse**: Preferanse for gutter førte til kjønnsselektiv abort – ca. 115–120 gutter per 100 jenter i noen perioder
- **Aldrende befolkning**: Kina står nå overfor en eldrebølge uten et tilstrekkelig utbygd velferdssystem
- **«4-2-1-problemet»**: Ett enebarn skal forsørge to foreldre og fire besteforeldre
- **Menneskerettigheter**: Tvangsaborter og steriliseringer er dokumentert

### Politikkendringer
- 2015: Tobarnspolitikk innført
- 2021: Trebarnspolitikk innført
- Kina forsøker nå å stimulere til flere fødsler, men fruktbarheten fortsetter å falle`,
    },
    {
      id: 'geo-5-6-india',
      type: 'text',
      content: `## Indias familieplanlegging

India, verdens mest folkerike land med over 1,4 milliarder innbyggere, har valgt en annen tilnærming enn Kina:

### Frivillig familieplanlegging
- India var det første landet i verden med et nasjonalt familieplanleggingsprogram (1952)
- Fokus på informasjon, tilgang til prevensjon og frivillige steriliseringer
- Ingen streng tvangspolitikk som i Kina (med unntak av en kort periode under unntakstilstanden 1975–1977)

### Resultater
- Fruktbarheten har sunket gradvis, fra over 5 barn per kvinne i 1970 til ca. 2,0 i dag
- Stor variasjon mellom delstater: Kerala har SFT på 1,5, mens Bihar ligger på 3,0
- Sammenhengen mellom utdanning, velstand og fruktbarhet er tydelig

### Utdanning som nøkkel
Erfaringene fra India viser at **kvinners utdanning** er den viktigste enkeltfaktoren for å redusere fruktbarheten:
- Utdannede kvinner gifter seg senere
- De har bedre kunnskap om og tilgang til prevensjon
- De deltar i arbeidslivet og har færre barn
- Barna deres får bedre helse og utdanning – en positiv spiral`,
    },
    {
      id: 'geo-5-6-def-befolkningspolitikk',
      type: 'definition',
      title: 'Befolkningspolitikk',
      content: 'Befolkningspolitikk er statlige tiltak som har som mål å påvirke befolkningens størrelse, vekstrate eller sammensetning. Tiltakene kan være pronatalitistiske (stimulere til flere fødsler, som barnebidrag og foreldrepermisjon) eller antinatalitistiske (begrense fødsler, som familieplanleggingsprogrammer og ettbarnspolitikk).',
    },
    {
      id: 'geo-5-6-baerekraft',
      type: 'text',
      content: `## Befolkning og bærekraft

Sammenhengen mellom befolkningsvekst og miljøbelastning er sammensatt. Det er ikke bare antall mennesker som bestemmer presset på jordas ressurser, men også **forbruksnivået**.

### IPAT-formelen
Miljøpåvirkning kan beskrives med formelen:

**I = P x A x T**

- **I** = Impact (miljøpåvirkning)
- **P** = Population (befolkningstall)
- **A** = Affluence (velstandsnivå/forbruk per person)
- **T** = Technology (teknologiens miljøpåvirkning)

### Forbruk versus befolkningstall
- En gjennomsnittlig nordmann har et **økologisk fotavtrykk** som er mange ganger større enn en gjennomsnittsperson i et afrikansk land
- De 10 % rikeste i verden står for omtrent 50 % av alle klimagassutslipp
- Befolkningsvekst i fattige land bidrar langt mindre til global miljøbelastning enn overforbruk i rike land

### Bærekraftsmålene
FNs bærekraftsmål (SDG) adresserer befolkningsutfordringer gjennom flere delmål:
- **Mål 3**: God helse og livskvalitet (inkludert familieplanlegging)
- **Mål 4**: God utdanning (særlig for jenter)
- **Mål 5**: Likestilling mellom kjønnene
- **Mål 11**: Bærekraftige byer og lokalsamfunn
- **Mål 12**: Ansvarlig forbruk og produksjon`,
    },
    {
      id: 'geo-5-6-def-okologisk-fotavtrykk',
      type: 'definition',
      title: 'Økologisk fotavtrykk',
      content: 'Det økologiske fotavtrykket er et mål på hvor mye biologisk produktivt areal som kreves for å produsere ressursene en person, by eller nasjon forbruker, og for å absorbere avfallet som genereres. Dersom hele verdens befolkning levde som nordmenn, ville vi trenge anslagsvis tre jordkloder.',
    },
    {
      id: 'geo-5-6-urbanisering',
      type: 'text',
      content: `## Urbanisering som global trend

En av de mest gjennomgripende demografiske trendene i verden er **urbanisering** – at stadig flere mennesker bor i byer. I 2007 passerte verden en historisk milepæl: for første gang bodde over halvparten av verdens befolkning i byer. I dag er andelen over 56 %, og den forventes å nå **68 %** innen 2050.

### Urbanisering i utviklingsland
Den raskeste urbaniseringen skjer i Afrika og Asia:
- Byer som Lagos, Dhaka, Kinshasa og Karachi vokser eksplosivt
- Mye av veksten skjer i **slumområder** med manglende infrastruktur
- Urbaniseringen drives av push-faktorer fra landsbygda (fattigdom, konflikter, klimaendringer) og pull-faktorer i byene (arbeid, utdanning, tjenester)

### Megabyer
Byer med over 10 millioner innbyggere kalles **megabyer**. I 1970 fantes det bare tre (Tokyo, New York, Osaka). I dag er det over 30, de fleste i Asia og Afrika.

### Utfordringer med rask urbanisering
- Boligmangel og slumvekst
- Mangel på rent vann, avløp og strøm
- Forurensning og helseproblemer
- Trafikkaos og mangelfull kollektivtransport
- Sosial ulikhet og kriminalitet

### Muligheter
- Byer er mer energieffektive per innbygger enn spredt bosetting
- Innovasjon og økonomisk vekst konsentreres i byer
- Lettere å tilby helsetjenester, utdanning og infrastruktur
- Urbanisering bidrar til lavere fruktbarhet`,
    },
    {
      id: 'geo-5-6-example',
      type: 'example',
      title: 'IPAT-formelen i praksis',
      problem: 'Land A har 200 millioner innbyggere med et lavt forbruksnivå og enkel teknologi. Land B har 50 millioner innbyggere med et høyt forbruksnivå og avansert, men forurensende teknologi. Hvilket land har størst miljøpåvirkning, ifølge IPAT-formelen?',
      solution: `**IPAT-formelen: I = P x A x T**

**Land A:**
- P (befolkning) = 200 millioner (høy)
- A (forbruk) = lavt
- T (teknologi) = enkel, men lite forurensende
- Samlet: Høy P, men lavt produkt av A x T gir moderat samlet miljøpåvirkning

**Land B:**
- P (befolkning) = 50 millioner (lav)
- A (forbruk) = høyt
- T (teknologi) = avansert, men forurensende
- Samlet: Lavere P, men svært høyt produkt av A x T gir stor samlet miljøpåvirkning

**Konklusjon:**
Selv om Land A har fire ganger så mange innbyggere, kan Land B ha større total miljøpåvirkning fordi forbruksnivået og teknologiens miljøbelastning er mye høyere. Dette illustrerer at befolkningstall alene ikke bestemmer miljøpåvirkningen – forbruksmønsteret er minst like viktig. En nordmann belaster miljøet langt mer enn en gjennomsnittlig innbygger i et fattig land.`,
    },
    {
      id: 'geo-5-6-framtid',
      type: 'text',
      content: `## Veien fremover

De demografiske utfordringene verden står overfor krever ulike løsninger i ulike deler av verden:

### I land med rask befolkningsvekst
- Investere i jenteutdanning og kvinners rettigheter
- Styrke helsetjenester og familieplanlegging
- Skape arbeidsplasser for den unge befolkningen
- Bygge bærekraftige byer

### I land med aldrende befolkning
- Reformere pensjonssystemer og helsetjenester
- Tilrettelegge for arbeidsmigrasjon
- Investere i teknologi og automatisering
- Familiepolitikk som gjør det lettere å kombinere arbeid og barn

Felles for alle er behovet for **bærekraftig utvikling** – å møte dagens behov uten å ødelegge fremtidige generasjoners muligheter.`,
    },
  
    {
      id: 'geo-5-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Verdens befolkningsutvikling haenger tett sammen med ressursbruk og baerekraft
- **Overbefolkning** handler ikke bare om antall mennesker, men ogsaa om forbruksmoenstre
- Kinas ettbarnspolitikk (1979-2015) reduserte befolkningsveksten, men hadde alvorlige bivirkninger
- **Aldrende befolkninger** i Europa og Oest-Asia skaper utfordringer for velferdssystemer
- Utdanning av jenter er det mest effektive tiltaket for aa redusere befolkningsvekst`,
    },
  ],
  exercises: [
    {
      id: 'geo-5-6-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva var Kinas ettbarnspolitikk?',
      options: [
        { id: 'a', text: 'En politikk der par i byene kun fikk ha ett barn, innført i 1979', isCorrect: true },
        { id: 'b', text: 'En frivillig kampanje for å redusere familestørrelsen', isCorrect: false },
        { id: 'c', text: 'En lov som forbød alle kinesere å ha mer enn ett barn', isCorrect: false },
        { id: 'd', text: 'En politikk innført i 2015 for å øke fødselsratene', isCorrect: false },
      ],
      solution: 'Ettbarnspolitikken ble innført i 1979 og begrenset par i byene til ett barn. Det fantes unntak for minoriteter, bønder og noen andre grupper. Politikken ble avviklet i 2015, da Kina gikk over til tobarnspolitikk, og senere trebarnspolitikk i 2021.',
    },
    {
      id: 'geo-5-6-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar IPAT-formelen og drøft hvorfor befolkningstall alene ikke er et godt mål på et lands miljøpåvirkning.',
      solution: 'IPAT-formelen uttrykker at miljøpåvirkning (I) er et produkt av befolkningstall (P), forbruksnivå per person (A – Affluence) og teknologiens miljøbelastning (T). Befolkningstall alene sier lite om miljøpåvirkning fordi forbruksnivået varierer enormt: en nordmann forbruker mange ganger mer energi, mat og varer enn en person i et fattig land. Et land med liten befolkning men ekstremt høyt forbruk (som Norge) kan ha større samlet miljøavtrykk enn et land med stor befolkning men lavt forbruk per innbygger. Teknologien spiller også inn – grønn teknologi kan redusere T-faktoren, mens forurensende teknologi øker den. Derfor er det kombinasjonen av alle tre faktorene som bestemmer den totale miljøbelastningen.',
    },
    {
      id: 'geo-5-6-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er en megaby?',
      options: [
        { id: 'a', text: 'En by med over 10 millioner innbyggere', isCorrect: true },
        { id: 'b', text: 'En by med over 1 million innbyggere', isCorrect: false },
        { id: 'c', text: 'En by med over 5 millioner innbyggere', isCorrect: false },
        { id: 'd', text: 'Den største byen i et land', isCorrect: false },
      ],
      solution: 'En megaby er definert som en by med over 10 millioner innbyggere. I 1970 fantes det bare tre megabyer (Tokyo, New York og Osaka), mens det i dag finnes over 30, de fleste i Asia og Afrika. Eksempler er Tokyo, Delhi, Shanghai, Sao Paulo og Lagos.',
    },
    {
      id: 'geo-5-6-ex4',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Sammenlign Kinas og Indias tilnærminger til befolkningspolitikk. Hvilke fordeler og ulemper hadde de ulike strategiene?',
      solution: 'Kina brukte tvangspolitikk (ettbarnspolitikken) med strenge straffer, mens India hovedsakelig satset på frivillig familieplanlegging, utdanning og informasjon. Kinas tilnærming var effektiv i å redusere fruktbarheten raskt, men førte til alvorlige problemer: kjønnsubalanse på grunn av preferanse for gutter, rask aldring av befolkningen, menneskerettighetsbrudd med tvangsaborter og steriliseringer, og det såkalte «4-2-1-problemet». Indias tilnærming var langsommere, men mer respektfull overfor individets rettigheter. Den viser at utdanning, særlig for kvinner, er den viktigste faktoren for å senke fruktbarheten. Ulempen er at Indias befolkning vokste raskere og lenger enn Kinas. India har nå passert Kina som verdens mest folkerike land. Begge eksemplene viser at fruktbarhetsreduksjon er mulig, men veien dit og konsekvensene er svært forskjellige.',
    },
    {
      id: 'geo-5-6-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor stor andel av verdens befolkning bodde i byer i 2007, da vi passerte den historiske milepælen?',
      options: [
        { id: 'a', text: 'Over 50 %', isCorrect: true },
        { id: 'b', text: 'Over 75 %', isCorrect: false },
        { id: 'c', text: 'Ca. 30 %', isCorrect: false },
        { id: 'd', text: 'Ca. 40 %', isCorrect: false },
      ],
      solution: 'I 2007 bodde for første gang over halvparten – altså over 50 % – av verdens befolkning i byer. Denne andelen har fortsatt å vokse og er nå over 56 %, med en forventet økning til 68 % innen 2050.',
    },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const GEOGRAFI_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_GEOGRAFI_5_1,
  CHAPTER_GEOGRAFI_5_2,
  CHAPTER_GEOGRAFI_5_3,
  CHAPTER_GEOGRAFI_5_4,
  CHAPTER_GEOGRAFI_5_5,
  CHAPTER_GEOGRAFI_5_6,
];
