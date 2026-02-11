/* eslint-disable */
// @ts-nocheck

/**
 * Medie- og informasjonskunnskap 1 (VG2) - Del 3: Journalistikk og nyheter
 *
 * Kapittel 3.1–3.5
 *
 * LK20-kompetansemål:
 * - analysere og vurdere nyhetskriterier og kildebruk i ulike medier
 * - drøfte presseetiske problemstillinger med utgangspunkt i Vær Varsom-plakaten
 * - gjøre rede for journalistikkens samfunnsoppdrag og redaktøransvaret
 * - vurdere kilder kritisk og anvende prinsipper for kildekritikk
 * - skille mellom ulike journalistiske sjangre og vurdere deres formål
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Journalistikkens grunnlag
// ============================================================================

export const CHAPTER_MEDIEINFO_1_3_1: TextbookChapter = {
  id: 'medieinfo-1-3-1',
  courseId: 'medieinfo-1',
  chapterNumber: '3.1',
  title: 'Journalistikkens grunnlag',
  description: 'En innføring i journalistikkens samfunnsoppdrag, kravene til uavhengighet og sannhet, og hva som skiller journalistikk fra annen informasjonsformidling.',
  estimatedMinutes: 22,
  competenceGoals: ['gjøre rede for journalistikkens samfunnsoppdrag og redaktøransvaret'],
  keyTerms: [
    { term: 'Samfunnsoppdrag', definition: 'Medienes rolle som informasjonsformidler, vaktbikkje og arena for offentlig debatt' },
    { term: 'Uavhengighet', definition: 'At redaksjonelle avgjørelser tas fritt fra press fra eiere, annonsører og politiske aktører' },
    { term: 'Sannhetskrav', definition: 'Journalistens plikt til å formidle korrekt, verifisert og balansert informasjon' },
    { term: 'Vaktbikkjefunksjonen', definition: 'Medienes oppgave med å overvåke og granske maktutøvelse i samfunnet' },
    { term: 'Den fjerde statsmakt', definition: 'Betegnelse på pressen som en uformell kontrollfunksjon overfor de tre statsformelle maktene' },
  ],
  content: [
    {
      id: 'mi-3-1-intro',
      type: 'text',
      content: `## Hva er journalistikk?

Journalistikk er noe langt mer enn bare det å skrive artikler. Det handler om å oppsøke, verifisere og formidle informasjon som samfunnet trenger for at demokratiet skal fungere. Uten fri, uavhengig journalistikk ville innbyggerne mangle grunnlaget for å ta informerte valg.

I dette kapittelet skal du lære:
- Hva journalistikkens samfunnsoppdrag innebærer
- Hvorfor uavhengighet er avgjørende for troverdig journalistikk
- Hva sannhetskravet betyr i praksis
- Hva det vil si at mediene er «den fjerde statsmakt»`,
    },
    {
      id: 'mi-3-1-def-1',
      type: 'definition',
      title: 'Samfunnsoppdraget',
      content: `**Samfunnsoppdraget** er den rollen mediene har i et demokrati. Det innebærer tre hovedfunksjoner: (1) **informere** befolkningen om viktige hendelser og prosesser, (2) fungere som **vaktbikkje** overfor maktmisbruk i politikk, næringsliv og forvaltning, og (3) være en **arena** for offentlig debatt der ulike synspunkter kommer til orde.`,
    },
    {
      id: 'mi-3-1-text-1',
      type: 'text',
      content: `### Tre funksjoner i samfunnsoppdraget

**1. Informasjonsfunksjonen**
Mediene skal sørge for at innbyggerne har tilgang til korrekt og relevant informasjon. Dette gjelder alt fra politiske beslutninger og rettssaker til helseråd og værvarsel. Uten denne funksjonen ville mange viktige beslutninger blitt fattet i det skjulte.

**2. Vaktbikkjefunksjonen**
Pressen skal granske og kontrollere makten. Det betyr å stille kritiske spørsmål til politikere, avdekke korrupsjon, undersøke offentlig pengebruk og holde samfunnsinstitusjoner ansvarlige. Historiske eksempler som Watergate-skandalen i USA og VG-avsløringene om Giske-saken i Norge viser kraften i denne funksjonen.

**3. Arenafunksjonen**
Mediene skal gi rom for meningsbryting og debatt. Gjennom leserinnlegg, debattartikler, kommentarfelt og debattprogram får ulike stemmer komme til orde. Dette er grunnleggende for et levende demokrati.`,
    },
    {
      id: 'mi-3-1-def-2',
      type: 'definition',
      title: 'Den fjerde statsmakt',
      content: `**Den fjerde statsmakt** er en betegnelse på pressen som en uformell kontrollfunksjon ved siden av de tre formelle statsmaktene: Stortinget (lovgivende), regjeringen (utøvende) og domstolene (dømmende). Uttrykket understreker medienes rolle som vokter av demokratiet.`,
    },
    {
      id: 'mi-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Uavhengighet under press',
      problem: 'En lokal avis avslører at kommunens ordfører har gitt byggekontrakter til et firma eid av sin svoger. Ordføreren ringer sjefredaktøren og truer med å trekke all kommunal annonsering dersom saken publiseres. Hva bør redaksjonen gjøre?',
      solution: `Redaksjonen bør publisere saken. Begrunnelsen er:

1. **Samfunnsoppdraget krever det** – dette er en klassisk vaktbikkjesak der maktmisbruk avdekkes
2. **Uavhengigheten må vernes** – dersom redaksjonen lar seg presse av økonomiske trusler, svekkes troverdigheten
3. **Sannhetskravet** – så lenge faktaene er grundig verifisert, har offentligheten rett til å vite
4. **Redaktøransvaret** – det er sjefredaktøren, ikke annonsører, som bestemmer hva som publiseres

Et slikt press utenfra er nettopp det uavhengighetsprinsippet skal beskytte mot.`,
    },
    {
      id: 'mi-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-3-1-ex-1',
        number: '3.1.1',
        type: 'multiple-choice',
        task: 'Hva menes med at pressen er «den fjerde statsmakt»?',
        options: [
          { id: 'a', text: 'Pressen har lovgivende makt over medielovgivning', isCorrect: false },
          { id: 'b', text: 'Pressen fungerer som en uformell kontrollinstans overfor de tre statsformelle maktene', isCorrect: true },
          { id: 'c', text: 'Pressen er en del av den utøvende makt gjennom statskanalen NRK', isCorrect: false },
          { id: 'd', text: 'Pressen har rett til å omgjøre politiske vedtak', isCorrect: false },
        ],
        solution: 'Pressen er «den fjerde statsmakt» fordi den fungerer som en uformell kontrollinstans som overvåker Stortinget, regjeringen og domstolene. Den har ingen formell makt, men påvirker gjennom informasjon, gransking og debatt.',
      },
    },
    {
      id: 'mi-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-3-1-ex-2',
        number: '3.1.2',
        type: 'classic',
        task: 'Forklar de tre hovedfunksjonene i journalistikkens samfunnsoppdrag med egne ord, og gi et eksempel til hver.',
        hints: ['Tenk på informasjon, gransking og debatt'],
        solution: 'De tre funksjonene er: (1) Informasjonsfunksjonen – å gi befolkningen korrekt informasjon om viktige hendelser, f.eks. dekning av stortingsvalg. (2) Vaktbikkjefunksjonen – å granske maktmisbruk, f.eks. avsløring av korrupsjon i kommuner. (3) Arenafunksjonen – å tilby en plattform for debatt, f.eks. debattsider i aviser der ulike synspunkter møtes.',
      },
    },
    {
      id: 'mi-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-3-1-ex-3',
        number: '3.1.3',
        type: 'classic',
        task: 'Hvorfor er det viktig at journalister er uavhengige av eiere, annonsører og politiske aktører? Drøft med minst to argumenter.',
        solution: 'Uavhengighet er viktig fordi: (1) Troverdighet – leserne må kunne stole på at informasjonen ikke er farget av særinteresser. Dersom en avis lar annonsører påvirke innholdet, vil publikum miste tilliten. (2) Demokratisk kontroll – hvis mediene lar seg styre av politikere, mister de evnen til å granske makten. Da forsvinner vaktbikkjefunksjonen. (3) Mangfold – uavhengige medier kan presentere et bredt spekter av synspunkter uten å sensurere kritiske stemmer.',
      },
    },
    {
      id: 'mi-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-3-1-ex-4',
        number: '3.1.4',
        type: 'multiple-choice',
        task: 'Hvilken av disse situasjonene bryter mest tydelig med prinsippet om redaksjonell uavhengighet?',
        options: [
          { id: 'a', text: 'En journalist intervjuer en politiker fra et parti journalisten selv stemmer på', isCorrect: false },
          { id: 'b', text: 'Sjefredaktøren lar en storannonsør bestemme at en kritisk sak om annonsøren ikke skal publiseres', isCorrect: true },
          { id: 'c', text: 'En avis publiserer en pressemelding fra en bedrift', isCorrect: false },
          { id: 'd', text: 'En journalist skriver om et tema der avisen selv har tatt redaksjonelt standpunkt', isCorrect: false },
        ],
        solution: 'At en sjefredaktør lar en annonsør stoppe en kritisk sak er et direkte brudd på redaksjonell uavhengighet. Det innebærer at kommersielle interesser styrer journalistisk innhold, noe som undergraver hele samfunnsoppdraget.',
      },
    },
    {
      id: 'mi-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-3-1-ex-5',
        number: '3.1.5',
        type: 'classic',
        task: 'Hva innebærer sannhetskravet i journalistikken? Gi eksempler på hva som kan skje dersom en redaksjon bryter med dette kravet.',
        solution: 'Sannhetskravet innebærer at journalister skal formidle korrekt, verifisert informasjon. De skal sjekke fakta med flere kilder, gjengi sitater korrekt og ikke bevisst utelate vesentlig informasjon. Dersom kravet brytes, kan det føre til: (1) feilinformasjon som skader enkeltpersoner, (2) tap av tillit fra publikum, (3) klage til Pressens Faglige Utvalg (PFU), og (4) i ytterste konsekvens rettslige konsekvenser som injuriesøksmål.',
      },
    },
    {
      id: 'mi-3-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Samfunnsoppdraget** gir mediene tre funksjoner: informere, granske og gi rom for debatt
- **Uavhengighet** fra eiere, annonsører og politikere er en forutsetning for troverdig journalistikk
- **Sannhetskravet** forplikter journalister til å formidle verifisert og balansert informasjon
- Pressen omtales som **den fjerde statsmakt** fordi den fungerer som uformell kontrollinstans

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Samfunnsoppdrag | Medienes rolle som informasjonsformidler, vaktbikkje og debattarena |
| Uavhengighet | At redaksjonen tar avgjørelser fritt fra utenforliggende press |
| Sannhetskrav | Plikten til å formidle korrekt, verifisert informasjon |
| Vaktbikkjefunksjonen | Å overvåke og granske maktutøvelse |
| Den fjerde statsmakt | Pressen som uformell kontrollfunksjon |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.2: Nyhetskriterier
// ============================================================================

export const CHAPTER_MEDIEINFO_1_3_2: TextbookChapter = {
  id: 'medieinfo-1-3-2',
  courseId: 'medieinfo-1',
  chapterNumber: '3.2',
  title: 'Nyhetskriterier',
  description: 'Du lærer om VISA-modellen (Vesentlighet, Identifikasjon, Sensasjon, Aktualitet), hva som gir en hendelse nyhetsverdi, og hvordan mediene setter dagsorden.',
  estimatedMinutes: 24,
  competenceGoals: ['analysere og vurdere nyhetskriterier og kildebruk i ulike medier'],
  keyTerms: [
    { term: 'Nyhetskriterier', definition: 'Kriterier som avgjør om en hendelse har nyhetsverdi og bør dekkes journalistisk' },
    { term: 'VISA', definition: 'Forkortelse for de fire nyhetskriteriene: Vesentlighet, Identifikasjon, Sensasjon og Aktualitet' },
    { term: 'Nyhetsverdi', definition: 'Graden av interesse og viktighet en hendelse har for publikum' },
    { term: 'Dagsorden', definition: 'De sakene mediene velger å sette søkelys på og som dermed preger den offentlige debatten' },
    { term: 'Mediedramaturgi', definition: 'Måten mediene bygger opp en sak på for å skape interesse og engasjement' },
  ],
  content: [
    {
      id: 'mi-3-2-intro',
      type: 'text',
      content: `## Hva er en nyhet?

Tusenvis av hendelser skjer hver eneste dag, men bare et fåtall blir nyheter. Hva avgjør hvilke hendelser som ender opp på forsiden av en avis eller som toppsak i Dagsrevyen? Svaret ligger i **nyhetskriteriene** – et sett med prinsipper som hjelper journalister å vurdere hva som er verdt å formidle.

I dette kapittelet skal du lære:
- De fire nyhetskriteriene i VISA-modellen
- Hvordan nyhetsverdi vurderes i praksis
- Hva det betyr at mediene setter dagsorden
- Forskjellen mellom hendelsesnyheter og gravejournalistikk`,
    },
    {
      id: 'mi-3-2-def-1',
      type: 'definition',
      title: 'Nyhetskriterier',
      content: `**Nyhetskriterier** er retningslinjer som journalister bruker for å vurdere om en hendelse er verdt å dekke. Jo flere kriterier en hendelse oppfyller, og jo sterkere hvert kriterium er til stede, desto høyere er **nyhetsverdien**.`,
    },
    {
      id: 'mi-3-2-text-1',
      type: 'text',
      content: `### VISA-modellen

Den mest brukte modellen for nyhetskriterier i norsk journalistikk er VISA:

**V – Vesentlighet**
Hvor viktig er saken for samfunnet og for mange mennesker? Politiske beslutninger som påvirker velferden, endringer i skatteregler og utdanningsreformer scorer høyt på vesentlighet. En sak kan være vesentlig uten å være spennende.

**I – Identifikasjon**
Kan publikum kjenne seg igjen i saken? Identifikasjon handler om nærhet – geografisk, kulturell og følelsesmessig. En bilulykke i nabokommunen oppleves som mer relevant enn en tilsvarende ulykke i et land langt borte. Enkeltskjebner skaper sterkere identifikasjon enn abstrakte tall.

**S – Sensasjon**
Er saken uvanlig, overraskende eller dramatisk? Det uventede og oppsiktsvekkende tiltrekker seg oppmerksomhet. Et fly som lander trygt er ingen nyhet, men en nødlanding er sensasjonelt. Konflikter, skandaler og rekorder hører inn under sensasjonskriteriet.

**A – Aktualitet**
Er saken aktuell akkurat nå? Nyheter har kort holdbarhet. En hendelse som skjedde i dag er mer aktuell enn noe som skjedde forrige uke. Aktualitet handler også om at saken knytter seg til noe som allerede er på dagsordenen.`,
    },
    {
      id: 'mi-3-2-example-1',
      type: 'example',
      title: 'Eksempel: VISA-analyse av en nyhetssak',
      problem: 'Statsministeren varsler kutt i studiestøtten for studenter. Analyser nyhetsverdien ved hjelp av VISA-modellen.',
      solution: `**Vesentlighet:** Høy. Saken påvirker flere hundre tusen studenter og deres økonomi direkte. Den handler om politikk og velferd.

**Identifikasjon:** Høy. Svært mange kjenner seg igjen – enten som nåværende student, tidligere student eller forelder til student. Geografisk nærhet er også høy (norsk politikk).

**Sensasjon:** Middels til høy. Kutt i studiestøtte er kontroversielt og vil utløse sterke reaksjoner og protester. Det bryter med forventningen om at støtten skal holde tritt med prisveksten.

**Aktualitet:** Høy. Det er nylig varslet og knytter seg til det kommende statsbudsjettet.

**Konklusjon:** Saken har svært høy nyhetsverdi fordi den scorer høyt på alle fire kriterier. Dette er typisk toppsak-materiale.`,
    },
    {
      id: 'mi-3-2-text-2',
      type: 'text',
      content: `### Dagsordenfunksjonen

Medienes **dagsordenfunksjon** innebærer at mediene ikke bare forteller oss hva som skjer, men også påvirker hva vi mener er viktig. Når en sak får bred mediedekning, oppfatter publikum den som viktigere enn saker som ikke dekkes.

**Medieviterens formel:** Mediene bestemmer ikke hva folk skal mene, men de bestemmer hva folk skal mene *noe om*.

Dagsordenen påvirkes av:
- **Redaksjonelle prioriteringer** – hva redaktørene vurderer som viktigst
- **Ressurser** – store redaksjoner kan dekke flere saker
- **Publikums interesse** – klikk og lesertall påvirker hva som prioriteres
- **Konkurranse** – medier følger hverandre og «kjører på» saker som får oppmerksomhet
- **Kilder** – PR-byråer, politikere og organisasjoner forsøker aktivt å sette dagsorden`,
    },
    {
      id: 'mi-3-2-tip-1',
      type: 'tip',
      title: 'Husk forskjellen',
      content: `En hendelse trenger ikke score høyt på alle fire VISA-kriteriene for å bli en nyhet. En sak kan ha lav vesentlighet men høy sensasjon (kjendissladder), eller høy vesentlighet men lav sensasjon (endring i pensjonsregler). De beste nyhetssakene scorer høyt på flere kriterier samtidig.`,
    },
    {
      id: 'mi-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-3-2-ex-1',
        number: '3.2.1',
        type: 'multiple-choice',
        task: 'Hva står bokstavene i VISA-modellen for?',
        options: [
          { id: 'a', text: 'Viktighet, Interesse, Spenning, Alder', isCorrect: false },
          { id: 'b', text: 'Vesentlighet, Identifikasjon, Sensasjon, Aktualitet', isCorrect: true },
          { id: 'c', text: 'Verdi, Informasjon, Sannhet, Aktuell', isCorrect: false },
          { id: 'd', text: 'Verifisering, Identitet, Saklighet, Argumentasjon', isCorrect: false },
        ],
        solution: 'VISA står for Vesentlighet, Identifikasjon, Sensasjon og Aktualitet. Dette er de fire sentrale nyhetskriteriene i norsk journalistikk.',
      },
    },
    {
      id: 'mi-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-3-2-ex-2',
        number: '3.2.2',
        type: 'classic',
        task: 'Velg en nyhetssak du har lest nylig. Analyser den ved hjelp av VISA-modellen og vurder nyhetsverdien.',
        hints: ['Gå gjennom hvert kriterium og vurder om det er høyt, middels eller lavt'],
        solution: 'En god besvarelse tar utgangspunkt i en konkret nyhetssak og vurderer den systematisk mot hvert av de fire VISA-kriteriene. For hvert kriterium bør eleven forklare hvorfor det scorer høyt, middels eller lavt, og avslutte med en samlet vurdering av nyhetsverdien.',
      },
    },
    {
      id: 'mi-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-3-2-ex-3',
        number: '3.2.3',
        type: 'multiple-choice',
        task: 'Hva innebærer medienes dagsordenfunksjon?',
        options: [
          { id: 'a', text: 'Mediene bestemmer hva folk skal mene om politiske saker', isCorrect: false },
          { id: 'b', text: 'Mediene påvirker hvilke saker folk oppfatter som viktige', isCorrect: true },
          { id: 'c', text: 'Mediene lager en fast plan for hvilke saker som skal dekkes hver dag', isCorrect: false },
          { id: 'd', text: 'Mediene samarbeider om å velge de samme toppsakene', isCorrect: false },
        ],
        solution: 'Dagsordenfunksjonen handler om at mediene påvirker hva folk tenker på og oppfatter som viktig, ikke nødvendigvis hva de mener. Når en sak får bred dekning, oppfattes den som mer viktig av publikum.',
      },
    },
    {
      id: 'mi-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-3-2-ex-4',
        number: '3.2.4',
        type: 'classic',
        task: 'Forklar forskjellen mellom vesentlighet og sensasjon som nyhetskriterier. Gi et eksempel på en sak som scorer høyt på sensasjon men lavt på vesentlighet.',
        solution: 'Vesentlighet handler om sakens betydning for samfunnet og mange mennesker, mens sensasjon handler om at noe er uvanlig, overraskende eller dramatisk. Eksempel på høy sensasjon/lav vesentlighet: En kjendis som havner i en skandale på sosiale medier. Det er overraskende og dramatisk, men har liten betydning for samfunnet som helhet.',
      },
    },
    {
      id: 'mi-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-3-2-ex-5',
        number: '3.2.5',
        type: 'classic',
        task: 'Drøft: Kan medienes dagsordenfunksjon være problematisk for demokratiet? Begrunn svaret ditt.',
        solution: 'Ja, det kan være problematisk: (1) Viktige men «kjedelige» saker kan bli ignorert til fordel for sensasjonelle saker. (2) Mediekonsentrasjon kan føre til at noen få eiere styrer hva som settes på dagsorden. (3) Klikk-jag kan prioritere underholdning over samfunnsrelevans. Samtidig er det nødvendig at noen filtrerer informasjonsstrømmen, og konkurranse mellom ulike medier bidrar til mangfold. En bevisst og kritisk mediebruk er viktig for å motvirke skjevheter.',
      },
    },
    {
      id: 'mi-3-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Nyhetskriterier** avgjør hva som blir nyheter blant tusenvis av daglige hendelser
- **VISA-modellen**: Vesentlighet, Identifikasjon, Sensasjon og Aktualitet
- Jo flere kriterier en sak oppfyller, desto høyere **nyhetsverdi**
- Medienes **dagsordenfunksjon** påvirker hva folk oppfatter som viktig

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| VISA | Vesentlighet, Identifikasjon, Sensasjon, Aktualitet |
| Nyhetsverdi | Graden av interesse og viktighet en hendelse har |
| Dagsorden | Sakene mediene setter søkelys på |
| Mediedramaturgi | Hvordan mediene bygger opp en sak |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.3: Presseetikk og Vær Varsom-plakaten
// ============================================================================

export const CHAPTER_MEDIEINFO_1_3_3: TextbookChapter = {
  id: 'medieinfo-1-3-3',
  courseId: 'medieinfo-1',
  chapterNumber: '3.3',
  title: 'Presseetikk og Vær Varsom-plakaten',
  description: 'Du lærer om det etiske rammeverket for norsk presse, Vær Varsom-plakatens viktigste punkter, Pressens Faglige Utvalg (PFU), redaktøransvaret og Tekstreklameplakaten.',
  estimatedMinutes: 24,
  competenceGoals: ['drøfte presseetiske problemstillinger med utgangspunkt i Vær Varsom-plakaten'],
  keyTerms: [
    { term: 'Vær Varsom-plakaten', definition: 'Norsk presses etiske regelverk med retningslinjer for god presseskikk, vedtatt av Norsk Presseforbund' },
    { term: 'PFU', definition: 'Pressens Faglige Utvalg – klageorgan som behandler brudd på god presseskikk' },
    { term: 'Redaktøransvaret', definition: 'Sjefredaktørens personlige ansvar for alt innhold i mediet, nedfelt i Redaktørplakaten' },
    { term: 'Tekstreklameplakaten', definition: 'Regelverk som krever tydelig skille mellom redaksjonelt innhold og reklame/sponset innhold' },
    { term: 'God presseskikk', definition: 'Etisk standard for ansvarlig journalistikk, definert av Vær Varsom-plakaten' },
  ],
  content: [
    {
      id: 'mi-3-3-intro',
      type: 'text',
      content: `## Etikk i pressen

Med stor makt følger stort ansvar. Journalister har makt til å påvirke meninger, ødelegge omdømmer og endre politikk. Derfor trenger pressen et etisk rammeverk som sikrer at denne makten brukes ansvarlig. I Norge er dette rammeverket først og fremst **Vær Varsom-plakaten**.

I dette kapittelet skal du lære:
- Hva Vær Varsom-plakaten er og dens viktigste innhold
- Hvordan PFU fungerer som klageorgan
- Hva redaktøransvaret innebærer
- Hva Tekstreklameplakaten regulerer
- Hvordan presseetiske dilemmaer oppstår i praksis`,
    },
    {
      id: 'mi-3-3-def-1',
      type: 'definition',
      title: 'Vær Varsom-plakaten',
      content: `**Vær Varsom-plakaten** er norsk presses etiske regelverk, vedtatt av Norsk Presseforbund. Den ble først vedtatt i 1936 og revideres jevnlig. Plakaten inneholder regler for pressens samfunnsrolle, integritet, journalistisk atferd og forholdet til kildene. Medier som bryter plakaten kan bli felt av Pressens Faglige Utvalg (PFU).`,
    },
    {
      id: 'mi-3-3-text-1',
      type: 'text',
      content: `### De fire hoveddelene i Vær Varsom-plakaten

**1. Pressens samfunnsrolle**
- Pressen har et ansvar for at ulike syn kommer til uttrykk
- Pressen skal verne om ytringsfriheten og offentlighetsprinsippet
- Pressen skal være uavhengig av myndigheter og interessegrupper

**2. Integritet og troverdighet**
- Unngå dobbeltroller som kan svekke troverdigheten
- Tydelig skille mellom reklame og redaksjonelt innhold
- Journalister bør ikke dekke saker der de selv er part

**3. Journalistisk atferd og forholdet til kildene**
- Vise hensyn overfor personer som ikke er vant til mediekontakt
- Sitater skal gjengis korrekt
- Kildevernet er et grunnleggende prinsipp

**4. Publiseringsregler**
- Vær kritisk til overskrifter og ingresser – de skal ha dekning i stoffet
- Vis respekt for menneskers privatliv
- Vær varsom med bruk av navn og bilde i kriminalsaker
- Gi alltid den som angripes mulighet til å forsvare seg (tilsvarsretten)`,
    },
    {
      id: 'mi-3-3-def-2',
      type: 'definition',
      title: 'Pressens Faglige Utvalg (PFU)',
      content: `**Pressens Faglige Utvalg (PFU)** er klageorganet for norsk presse. Hvem som helst kan klage inn et medium dersom de mener det har brutt god presseskikk. PFU behandler klagen og kan enten frifinne mediet eller felle det for brudd på Vær Varsom-plakaten. En fellelse i PFU er ikke en rettslig dom, men mediet er forpliktet til å publisere avgjørelsen.`,
    },
    {
      id: 'mi-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Presseetisk dilemma',
      problem: 'En 16 år gammel gutt er siktet for grov vold. Avisen har tilgang til bilder fra hendelsen og kjenner guttens identitet. Hva bør avisen gjøre?',
      solution: `Avisen bør vurdere følgende ut fra Vær Varsom-plakaten:

1. **Punkt 4.7 – Identifisering:** Vær varsom med bruk av navn og bilde i kriminalsaker, spesielt når det gjelder mindreårige.
2. **Punkt 4.8 – Barn:** Barns identitet skal som hovedregel ikke røpes i forbindelse med rettssaker.
3. **Punkt 4.1 – Saklighet:** Avisen kan dekke saken, men bør anonymisere den siktede.

**Konklusjon:** Avisen bør dekke saken uten å identifisere gutten med navn, bilde eller andre opplysninger som kan avsløre identiteten. Hensynet til den mindreårige veier tyngre enn offentlighetens interesse i å kjenne identiteten.`,
    },
    {
      id: 'mi-3-3-text-2',
      type: 'text',
      content: `### Redaktøransvaret og Redaktørplakaten

**Redaktørplakaten** fastslår at sjefredaktøren har det personlige og fulle ansvar for mediets innhold. Ingen utenforstående – verken eiere, annonsører eller andre – kan diktere hva redaksjonen publiserer.

Redaktøransvaret innebærer at:
- Redaktøren er ansvarlig for alt som publiseres
- Redaktøren bestemmer hva som skal publiseres, uten innblanding fra eieren
- Redaktøren plikter å følge Vær Varsom-plakaten
- Dersom eieren forsøker å gripe inn, kan redaktøren gå av i protest

### Tekstreklameplakaten

**Tekstreklameplakaten** regulerer forholdet mellom reklame og redaksjonelt innhold. Dens viktigste prinsipper er:

- Reklame og sponset innhold skal tydelig merkes
- Redaksjonelt innhold skal ikke kunne forveksles med reklame
- Journalister skal ikke motta gaver eller fordeler som kan påvirke innholdet
- Annonsører skal ikke ha innflytelse på redaksjonelle valg

I en tid med **innholdsmarkedsføring** og **sponsede artikler** er dette prinsippet viktigere enn noen gang.`,
    },
    {
      id: 'mi-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-3-3-ex-1',
        number: '3.3.1',
        type: 'multiple-choice',
        task: 'Hva er PFU?',
        options: [
          { id: 'a', text: 'Et statlig organ som bøtelegger medier som bryter loven', isCorrect: false },
          { id: 'b', text: 'Pressens eget klageorgan som behandler brudd på god presseskikk', isCorrect: true },
          { id: 'c', text: 'En avdeling i Stortinget som regulerer pressefriheten', isCorrect: false },
          { id: 'd', text: 'En fagforening for norske journalister', isCorrect: false },
        ],
        solution: 'PFU (Pressens Faglige Utvalg) er pressens eget klageorgan. Det er ikke et statlig organ og kan ikke ilegge bøter, men medier som felles for brudd på god presseskikk er forpliktet til å publisere avgjørelsen.',
      },
    },
    {
      id: 'mi-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-3-3-ex-2',
        number: '3.3.2',
        type: 'classic',
        task: 'Forklar hva redaktøransvaret innebærer. Hvorfor er det viktig at redaktøren er uavhengig av eierne?',
        hints: ['Tenk på hva som skjer dersom eiere styrer innholdet'],
        solution: 'Redaktøransvaret innebærer at sjefredaktøren har personlig og fullt ansvar for alt innhold i mediet, og at ingen utenforstående kan diktere hva som publiseres. Det er viktig at redaktøren er uavhengig av eierne fordi: (1) Det sikrer at journalistikken styres av samfunnsoppdraget, ikke kommersielle interesser. (2) Eierne kan ha økonomiske interesser som står i konflikt med kritisk journalistikk. (3) Uten redaksjonell uavhengighet ville mediene miste sin troverdighet som vaktbikkje.',
      },
    },
    {
      id: 'mi-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-3-3-ex-3',
        number: '3.3.3',
        type: 'multiple-choice',
        task: 'Hva regulerer Tekstreklameplakaten?',
        options: [
          { id: 'a', text: 'Hvor mye reklame aviser har lov til å selge', isCorrect: false },
          { id: 'b', text: 'Skillet mellom redaksjonelt innhold og reklame/sponset innhold', isCorrect: true },
          { id: 'c', text: 'Regler for annonsering av alkohol og tobakk i medier', isCorrect: false },
          { id: 'd', text: 'Prisen medier kan ta for annonser', isCorrect: false },
        ],
        solution: 'Tekstreklameplakaten regulerer skillet mellom redaksjonelt innhold og reklame. Den krever at reklame og sponset innhold tydelig merkes slik at publikum alltid vet om de leser journalistikk eller betalt innhold.',
      },
    },
    {
      id: 'mi-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-3-3-ex-4',
        number: '3.3.4',
        type: 'classic',
        task: 'Du leser en artikkel i en nettavis som handler om hvor bra en bestemt hudkrem er. Artikkelen ser ut som en vanlig nyhetssak, men du legger merke til at den er merket «annonsørinnhold» med liten skrift nederst. Vurder dette opp mot Tekstreklameplakaten.',
        solution: 'Ifølge Tekstreklameplakaten skal det være et tydelig skille mellom redaksjonelt innhold og reklame. At merkingen «annonsørinnhold» står med liten skrift nederst er problematisk – merkingen bør være tydelig og synlig allerede i overskriften eller øverst i artikkelen. Når sponset innhold ser ut som vanlige nyheter, kan det villede leseren og svekke tilliten til avisen. God praksis tilsier at merkingen skal være umiddelbart synlig, for eksempel med tydelig farget bakgrunn og teksten «ANNONSE» øverst.',
      },
    },
    {
      id: 'mi-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-3-3-ex-5',
        number: '3.3.5',
        type: 'classic',
        task: 'Nevn og forklar to av de fire hoveddelene i Vær Varsom-plakaten. Gi et eksempel på hvordan hver del kan bli aktuell i en konkret journalistisk situasjon.',
        solution: 'Eksempelsvar med to deler: (1) Integritet og troverdighet – en journalist bør ikke skrive en positiv anmeldelse av en restaurant der journalisten eier aksjer. Dobbeltroller svekker troverdigheten. (2) Publiseringsregler – en avis som navngir en person i en kriminalsak uten dom, bør vurdere om identifiseringen er nødvendig. Ifølge plakaten skal man vise varsomhet med navn og bilde, spesielt før rettskraftig dom.',
      },
    },
    {
      id: 'mi-3-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Vær Varsom-plakaten** er norsk presses etiske regelverk med fire hoveddeler
- **PFU** er klageorganet som behandler brudd på god presseskikk
- **Redaktøransvaret** gir sjefredaktøren fullt ansvar for innholdet, uavhengig av eier
- **Tekstreklameplakaten** krever tydelig skille mellom journalistikk og reklame

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Vær Varsom-plakaten | Etisk regelverk for norsk presse |
| PFU | Klageorgan for brudd på god presseskikk |
| Redaktøransvaret | Redaktørens personlige ansvar for innholdet |
| Tekstreklameplakaten | Regelverk om skillet mellom redaksjonelt og reklame |
| Tilsvarsretten | Retten til å forsvare seg mot angrep i mediene |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.4: Kilder og kildekritikk
// ============================================================================

export const CHAPTER_MEDIEINFO_1_3_4: TextbookChapter = {
  id: 'medieinfo-1-3-4',
  courseId: 'medieinfo-1',
  chapterNumber: '3.4',
  title: 'Kilder og kildekritikk',
  description: 'Du lærer om ulike kildetyper, kildekritiske prinsipper, metoder for faktasjekk, og hva kildevernet innebærer.',
  estimatedMinutes: 22,
  competenceGoals: ['vurdere kilder kritisk og anvende prinsipper for kildekritikk'],
  keyTerms: [
    { term: 'Kilde', definition: 'Enhver person, dokument eller kilde til informasjon som journalisten bruker i sitt arbeid' },
    { term: 'Primærkilde', definition: 'Den opprinnelige kilden til informasjon – førstehåndsvitnett, originaldokumentet eller personen det handler om' },
    { term: 'Sekundærkilde', definition: 'En kilde som videreformidler informasjon fra en annen kilde, f.eks. en journalist som gjengir et rykte' },
    { term: 'Kildevern', definition: 'Journalistens rett til å holde identiteten til anonyme kilder hemmelig, selv overfor domstolene' },
    { term: 'Faktasjekk', definition: 'Systematisk verifisering av informasjon gjennom uavhengige kilder og dokumentasjon' },
  ],
  content: [
    {
      id: 'mi-3-4-intro',
      type: 'text',
      content: `## Kilder – journalistikkens råmateriale

Journalistikk uten kilder er som et hus uten fundament. Kvaliteten på kildene bestemmer kvaliteten på journalistikken. Å velge riktige kilder, vurdere dem kritisk og verifisere informasjon er blant de viktigste ferdighetene en journalist har.

I dette kapittelet skal du lære:
- Hva en kilde er og hvilke typer kilder som finnes
- Prinsipper for kildekritikk
- Metoder for faktasjekk
- Hva kildevernet innebærer og hvorfor det er viktig`,
    },
    {
      id: 'mi-3-4-def-1',
      type: 'definition',
      title: 'Kilde',
      content: `En **kilde** er enhver person, dokument, database, observasjon eller annen informasjonskilde som journalisten henter opplysninger fra. Kilder kan være muntlige (intervjuer), skriftlige (dokumenter, rapporter), digitale (databaser, sosiale medier) eller visuelle (bilder, video).`,
    },
    {
      id: 'mi-3-4-text-1',
      type: 'text',
      content: `### Kildetyper

**Primærkilder**
Den opprinnelige kilden til informasjon. Eksempler:
- Øyenvitnet som så hendelsen
- Originaldokumentet fra departementet
- Personen saken handler om
- Forskeren som utførte studien

**Sekundærkilder**
Kilder som videreformidler informasjon fra andre. Eksempler:
- En journalist som refererer til en annen avis
- En person som har hørt noe fra noen
- En lærebok som gjengir forskning
- En Wikipedia-artikkel

**Anonyme kilder**
Kilder som ikke ønsker å stå fram med navn. Brukes i:
- Varslingssaker
- Saker om maktmisbruk
- Situasjoner der kilden risikerer straff

**Åpne kilder**
Informasjon som er fritt tilgjengelig:
- Offentlige registre og dokumenter
- Rettsavgjørelser
- Stortingsforhandlinger
- Skattelister`,
    },
    {
      id: 'mi-3-4-def-2',
      type: 'definition',
      title: 'Kildevern',
      content: `**Kildevernet** er journalistens rett og plikt til å beskytte identiteten til anonyme kilder. Det er nedfelt i straffeloven og betyr at en journalist normalt ikke kan tvinges til å oppgi sine kilder, selv i retten. Kildevernet er avgjørende for at varslere og andre tør å dele sensitiv informasjon med mediene.`,
    },
    {
      id: 'mi-3-4-text-2',
      type: 'text',
      content: `### Kildekritiske prinsipper

Kildekritikk handler om å vurdere om informasjon er pålitelig. Her er de sentrale prinsippene:

**1. Ekthet** – Er kilden det den gir seg ut for å være? Er dokumentet autentisk? Er personen den hun sier hun er?

**2. Nærhet** – Hvor nær er kilden det som beskrives? En primærkilde er mer pålitelig enn en sekundærkilde. Jo flere ledd informasjonen har passert gjennom, desto større er risikoen for feil.

**3. Uavhengighet** – Er kilden uavhengig, eller har den en egeninteresse? En forsker uten bindinger til industrien er mer troverdig enn en bedrifts egen pressemelding.

**4. Konsistens** – Stemmer informasjonen overens med det andre, uavhengige kilder sier? Dersom flere uavhengige kilder bekrefter det samme, styrker det troverdigheten.

**5. Tendens** – Har kilden et bestemt perspektiv eller en agenda? En interesseorganisasjon vil naturlig fremheve informasjon som støtter sin sak.`,
    },
    {
      id: 'mi-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Kildekritisk vurdering',
      problem: 'En journalist skriver om helsefaren ved et nytt kosttilskudd. Hun har to kilder: (1) en pressemelding fra produsenten som sier produktet er trygt, og (2) en uavhengig studie fra Folkehelseinstituttet som advarer mot bivirkninger. Hvordan bør hun vurdere kildene?',
      solution: `**Vurdering av kilde 1 – pressemeldingen:**
- Nærhet: Høy (produsenten kjenner eget produkt)
- Uavhengighet: Lav (produsenten har økonomisk interesse i at produktet fremstår som trygt)
- Tendens: Sterk (kommersielt motiv)

**Vurdering av kilde 2 – FHI-studien:**
- Nærhet: Middels (forskere har undersøkt produktet vitenskapelig)
- Uavhengighet: Høy (FHI er et uavhengig statlig organ uten kommersiell interesse)
- Tendens: Lav (faglig, ikke kommersielt motivert)

**Konklusjon:** FHI-studien er den mest troverdige kilden. Pressemeldingen kan brukes for å gjengi produsentens syn, men bør ikke behandles som objektiv sannhet. En god journalist ville konfrontert produsenten med funnene fra FHI.`,
    },
    {
      id: 'mi-3-4-tip-1',
      type: 'tip',
      title: 'Tommelfingerregel',
      content: `Spør alltid: «Hvorfor forteller denne kilden meg dette?» Dersom kilden har noe å vinne på at informasjonen publiseres, bør du være ekstra kritisk. Det betyr ikke at informasjonen er feil – men det betyr at du bør verifisere den med uavhengige kilder.`,
    },
    {
      id: 'mi-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-3-4-ex-1',
        number: '3.4.1',
        type: 'multiple-choice',
        task: 'Hva er en primærkilde?',
        options: [
          { id: 'a', text: 'Den viktigste kilden i en sak', isCorrect: false },
          { id: 'b', text: 'Den opprinnelige kilden til informasjonen', isCorrect: true },
          { id: 'c', text: 'En kilde som alltid er pålitelig', isCorrect: false },
          { id: 'd', text: 'En kilde som er godkjent av redaktøren', isCorrect: false },
        ],
        solution: 'En primærkilde er den opprinnelige kilden til informasjonen – personen som var til stede, originaldokumentet eller den som handlingen gjelder. Primærkilde betyr ikke automatisk at den er pålitelig, men den er nærmest det som faktisk skjedde.',
      },
    },
    {
      id: 'mi-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-3-4-ex-2',
        number: '3.4.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom primærkilde og sekundærkilde. Gi et eksempel på hver.',
        hints: ['Tenk på nærhet til hendelsen'],
        solution: 'En primærkilde er den opprinnelige kilden til informasjonen, for eksempel et øyenvitne som selv var til stede ved en trafikkulykke. En sekundærkilde videreformidler informasjon fra andre, for eksempel en nabo som forteller hva øyenvitnet fortalte henne. Sekundærkilden har fått informasjonen i andre hånd, noe som øker risikoen for feil og misforståelser.',
      },
    },
    {
      id: 'mi-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-3-4-ex-3',
        number: '3.4.3',
        type: 'multiple-choice',
        task: 'Hva innebærer kildevernet?',
        options: [
          { id: 'a', text: 'At journalisten skal beskytte kildene sine mot kritikk', isCorrect: false },
          { id: 'b', text: 'At journalisten ikke kan tvinges til å oppgi identiteten til anonyme kilder', isCorrect: true },
          { id: 'c', text: 'At kildene har rett til å lese artikkelen før den publiseres', isCorrect: false },
          { id: 'd', text: 'At alle kilder må oppgis med fullt navn i artikkelen', isCorrect: false },
        ],
        solution: 'Kildevernet betyr at en journalist normalt ikke kan tvinges til å oppgi hvem som er kilde, selv av domstolene. Dette er viktig for at varslere og andre skal tørre å dele sensitiv informasjon med mediene.',
      },
    },
    {
      id: 'mi-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-3-4-ex-4',
        number: '3.4.4',
        type: 'classic',
        task: 'Gjør en kildekritisk vurdering av følgende kilde: Et innlegg på et nettforum der en anonym bruker hevder at et bestemt matvaremerke inneholder skadelige tilsetningsstoffer. Bruk de kildekritiske prinsippene.',
        solution: 'Kildekritisk vurdering: (1) Ekthet – vi vet ikke hvem som skriver, og kan ikke bekrefte personens bakgrunn. (2) Nærhet – ukjent; vi vet ikke om personen har førstehåndskunnskap. (3) Uavhengighet – ukjent; personen kan ha en agenda, f.eks. være en konkurrent. (4) Konsistens – vi må sjekke om andre uavhengige kilder bekrefter påstanden. (5) Tendens – anonym kritikk kan være motivert av mange ulike grunner. Konklusjon: Kilden er svak og bør ikke brukes uten verifisering fra troverdige, uavhengige kilder som Mattilsynet.',
      },
    },
    {
      id: 'mi-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-3-4-ex-5',
        number: '3.4.5',
        type: 'classic',
        task: 'Hvorfor er kildevernet viktig for demokratiet? Drøft med minst to argumenter.',
        solution: 'Kildevernet er viktig for demokratiet fordi: (1) Det gjør det mulig å avdekke maktmisbruk – uten anonymitetsbeskyttelse ville mange varslere ikke tørre å kontakte mediene, og viktige skandaler ville forbli skjult. (2) Det styrker pressefriheten – journalister kan drive gravejournalistikk uten frykt for at kildene straffes. (3) Det fremmer åpenhet – paradoksalt nok bidrar muligheten for anonyme kilder til at mer informasjon kommer fram i offentligheten, fordi folk tør å snakke.',
      },
    },
    {
      id: 'mi-3-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kilder** er råmaterialet i journalistikk – personer, dokumenter og andre informasjonskilder
- **Primærkilder** er nærmest hendelsen, **sekundærkilder** videreformidler
- De kildekritiske prinsippene er: ekthet, nærhet, uavhengighet, konsistens og tendens
- **Kildevernet** beskytter anonyme kilders identitet og er avgjørende for gravejournalistikk

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Primærkilde | Opprinnelig kilde til informasjon |
| Sekundærkilde | Kilde som videreformidler andres informasjon |
| Kildevern | Retten til å beskytte anonyme kilders identitet |
| Faktasjekk | Systematisk verifisering av informasjon |
| Kildekritikk | Vurdering av kilders pålitelighet og troverdighet |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.5: Journalistiske sjangre
// ============================================================================

export const CHAPTER_MEDIEINFO_1_3_5: TextbookChapter = {
  id: 'medieinfo-1-3-5',
  courseId: 'medieinfo-1',
  chapterNumber: '3.5',
  title: 'Journalistiske sjangre',
  description: 'Du lærer å skille mellom de viktigste journalistiske sjangrene: nyhetsartikkel, reportasje, feature, kommentar, leder og kronikk, og forstår formålet med hver enkelt.',
  estimatedMinutes: 20,
  competenceGoals: ['skille mellom ulike journalistiske sjangre og vurdere deres formål'],
  keyTerms: [
    { term: 'Nyhetsartikkel', definition: 'En saklig, faktabasert tekst som formidler en nyhet etter den omvendte pyramide-strukturen' },
    { term: 'Reportasje', definition: 'En journalistisk tekst der journalisten er til stede og formidler opplevelser, inntrykk og fakta' },
    { term: 'Feature', definition: 'En utdypende artikkel som går bak nyhetene og belyser et tema fra flere sider' },
    { term: 'Kommentar', definition: 'En meningsytring der journalisten analyserer og vurderer en aktuell sak' },
    { term: 'Leder', definition: 'Avisens offisielle standpunkt i en sak, skrevet av sjefredaktør eller redaksjonsledelsen' },
    { term: 'Kronikk', definition: 'En lengre, argumenterende tekst skrevet av en ekstern skribent om et aktuelt tema' },
  ],
  content: [
    {
      id: 'mi-3-5-intro',
      type: 'text',
      content: `## Ulike former for journalistikk

Journalistikk er ikke bare nyhetsartikler. Mediene bruker en rekke ulike sjangre for å informere, analysere og engasjere. Å kjenne til de journalistiske sjangrene gjør deg til en bedre og mer kritisk leser.

I dette kapittelet skal du lære:
- De viktigste journalistiske sjangrene og hva som kjennetegner dem
- Forskjellen mellom faktabaserte og meningsbaserte sjangre
- Den omvendte pyramide som nyhetsstruktur
- Når og hvorfor de ulike sjangrene brukes`,
    },
    {
      id: 'mi-3-5-def-1',
      type: 'definition',
      title: 'Journalistisk sjanger',
      content: `En **journalistisk sjanger** er en teksttype med bestemte kjennetegn, struktur og formål. Sjangertrekkene hjelper leseren å forstå hva slags tekst de leser – er det objektiv nyhetsformidling, personlig reportasje eller subjektiv meningsytring?`,
    },
    {
      id: 'mi-3-5-text-1',
      type: 'text',
      content: `### Faktabaserte sjangre

**Nyhetsartikkelen**
Den vanligste journalistiske sjangeren. Kjennetegn:
- Saklig og nøytral fremstilling
- Følger **den omvendte pyramide**: det viktigste først, detaljene etterpå
- Hvem, hva, hvor, når, hvorfor og hvordan (de seks nyhetsspørsmålene)
- Journalistens mening skal ikke komme fram
- Kort og konsis språk

**Reportasjen**
Journalisten er til stede og formidler med egne sanser. Kjennetegn:
- Personlig tilstedeværelse – «jeg var der»
- Scener, stemninger og beskrivelser
- Kombinerer observasjoner, intervjuer og fakta
- Mer levende og fortellende enn en nyhetsartikkel
- Gir leseren en følelse av å «være med»

**Feature**
Går bak nyhetene for å utdype og belyse. Kjennetegn:
- Lengre og mer dyptgående enn nyhetsartikkelen
- Bakgrunn, kontekst og analyse
- Kan bruke fortellerteknikker som scener og karakterer
- Ofte knyttet til en aktuell sak, men med bredere perspektiv`,
    },
    {
      id: 'mi-3-5-text-2',
      type: 'text',
      content: `### Meningsbaserte sjangre

**Kommentaren**
En journalists personlige analyse og vurdering. Kjennetegn:
- Journalistens egne meninger og vurderinger
- Basert på fakta, men med tydelig standpunkt
- Merkes tydelig som kommentar/analyse
- Ofte skrevet av erfarne journalister eller spesialister
- Skiller seg fra nyhetsartikkelen ved at subjektivitet er tillatt

**Lederen**
Avisens offisielle standpunkt. Kjennetegn:
- Representerer avisens syn, ikke en enkelt journalists
- Skrevet av sjefredaktør eller politisk redaktør
- Tar stilling til aktuelle saker
- Argumenterende og tydelig i sin posisjon
- Tradisjonelt plassert på side 2 eller kommentarsidene

**Kronikken**
Ekstern stemme med dybde. Kjennetegn:
- Skrevet av personer utenfor redaksjonen (eksperter, politikere, forskere)
- Lengre og mer argumenterende enn et leserbrev
- Tar opp et aktuelt tema i dybden
- Gir plass til stemmer som ikke er journalister
- Bidrar til arenafunksjonen i samfunnsoppdraget`,
    },
    {
      id: 'mi-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Sjangergjenkjenning',
      problem: 'Les denne åpningen og avgjør hvilken sjanger det er: «Regjeringen la i dag frem forslag om å innføre nye avgifter på sukkerholdig drikke. Finansministeren begrunner forslaget med hensynet til folkehelsen. Næringslivets Hovedorganisasjon (NHO) kaller forslaget et angrep på norsk industri.»',
      solution: `Dette er en **nyhetsartikkel**. Begrunnelse:

1. **Saklig og nøytral** – det er ingen synlige meninger fra journalisten
2. **Omvendt pyramide** – det viktigste (regjeringens forslag) kommer først
3. **Nyhetsspørsmål** – hvem (regjeringen), hva (nye avgifter), når (i dag), hvorfor (folkehelse)
4. **Balansert** – både regjeringens begrunnelse og en kritisk stemme (NHO) er med
5. **Kort og konsis** – faktabasert språk uten stemningsbeskrivelser

Hadde journalisten skrevet «dette er et klokt forslag» ville det vært en kommentar. Hadde teksten beskrevet stemningen i pressekonferansen, ville det pekt mot reportasje.`,
    },
    {
      id: 'mi-3-5-note-1',
      type: 'note',
      title: 'Viktig skille',
      content: `Skillet mellom fakta og mening er grunnleggende i journalistikken. Leseren må alltid kunne avgjøre om teksten er objektiv nyhetsformidling eller subjektiv meningsytring. Derfor skal meningssjangre som kommentar, leder og kronikk alltid merkes tydelig.`,
    },
    {
      id: 'mi-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-3-5-ex-1',
        number: '3.5.1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner den omvendte pyramide-strukturen?',
        options: [
          { id: 'a', text: 'Artikkelen bygger opp mot et klimaks til slutt', isCorrect: false },
          { id: 'b', text: 'Det viktigste kommer først, detaljene og bakgrunnen etterpå', isCorrect: true },
          { id: 'c', text: 'Artikkelen starter med journalistens mening og avslutter med fakta', isCorrect: false },
          { id: 'd', text: 'Artikkelen er strukturert kronologisk med innledning, hoveddel og avslutning', isCorrect: false },
        ],
        solution: 'Den omvendte pyramide betyr at det viktigste kommer øverst, deretter følger utfyllende detaljer og bakgrunn. Strukturen gjør at leseren raskt får det essensielle, og at artikkelen kan kortes ned fra bunnen uten at det viktigste forsvinner.',
      },
    },
    {
      id: 'mi-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-3-5-ex-2',
        number: '3.5.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom en nyhetsartikkel og en kommentar. Hvorfor er det viktig at leseren kan skille dem?',
        hints: ['Tenk på forholdet mellom fakta og mening'],
        solution: 'En nyhetsartikkel er en saklig, nøytral formidling av fakta der journalistens mening ikke skal komme fram. En kommentar er en subjektiv tekst der journalisten analyserer og tar stilling til en sak. Det er viktig å skille dem fordi: (1) Leseren må vite om informasjonen er objektiv eller farget av meninger. (2) Dersom meninger blandes med nyheter uten merking, kan leseren bli villedet. (3) Troverdigheten til mediet avhenger av at dette skillet respekteres.',
      },
    },
    {
      id: 'mi-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-3-5-ex-3',
        number: '3.5.3',
        type: 'multiple-choice',
        task: 'Hva er en leder i journalistisk sammenheng?',
        options: [
          { id: 'a', text: 'En artikkel skrevet av avisens mest erfarne journalist', isCorrect: false },
          { id: 'b', text: 'Avisens offisielle standpunkt i en aktuell sak', isCorrect: true },
          { id: 'c', text: 'Den viktigste nyhetsartikkelen i dagens avis', isCorrect: false },
          { id: 'd', text: 'Et intervju med en leder i næringslivet eller politikken', isCorrect: false },
        ],
        solution: 'En leder (lederartikkel) er avisens offisielle standpunkt i en aktuell sak. Den representerer avisens syn som helhet, ikke en enkelt journalists personlige mening, og er vanligvis skrevet av sjefredaktør eller politisk redaktør.',
      },
    },
    {
      id: 'mi-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-3-5-ex-4',
        number: '3.5.4',
        type: 'classic',
        task: 'Forklar hva en reportasje er, og hva som skiller den fra en vanlig nyhetsartikkel. Gi eksempler på situasjoner der reportasje er mer egnet enn nyhetsartikkel.',
        solution: 'En reportasje er en journalistisk tekst der journalisten er til stede og formidler opplevelser, inntrykk og fakta gjennom scener og stemninger. Den skiller seg fra nyhetsartikkelen ved at den er mer personlig, fortellende og detaljrik. Reportasje er mer egnet enn nyhetsartikkel i situasjoner der: (1) stemningen er viktig å formidle, f.eks. fra en demonstrasjon, (2) leseren skal «oppleve» noe, f.eks. livet i en flyktningeleir, (3) enkelmenneskers historier er i sentrum, f.eks. en reportasje fra et sykehjem.',
      },
    },
    {
      id: 'mi-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-3-5-ex-5',
        number: '3.5.5',
        type: 'classic',
        task: 'Finn en kronikk og en nyhetsartikkel om samme tema i en nettavis. Beskriv minst tre forskjeller mellom de to tekstene.',
        solution: 'En god besvarelse bør peke på forskjeller som: (1) Avsender – nyhetsartikkelen er skrevet av en journalist, kronikken av en ekstern skribent. (2) Formål – nyhetsartikkelen informerer nøytralt, kronikken argumenterer for et standpunkt. (3) Struktur – nyhetsartikkelen følger den omvendte pyramide, kronikken har en argumenterende struktur. (4) Språk – nyhetsartikkelen bruker kort, saklig språk, kronikken bruker mer utdypende og personlig språk. (5) Merking – kronikken er tydelig merket som meningssjanger.',
      },
    },
    {
      id: 'mi-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'mi-3-5-ex-6',
        number: '3.5.6',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom en kronikk og en kommentar?',
        options: [
          { id: 'a', text: 'Kronikken er lengre og skrevet av noen utenfor redaksjonen, kommentaren er skrevet av en journalist', isCorrect: true },
          { id: 'b', text: 'Kronikken er objektiv mens kommentaren er subjektiv', isCorrect: false },
          { id: 'c', text: 'Kronikken handler om kultur, kommentaren om politikk', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell, ordene brukes om hverandre', isCorrect: false },
        ],
        solution: 'Hovedforskjellen er at en kronikk skrives av en ekstern skribent (forsker, politiker, ekspert), mens en kommentar skrives av en journalist i redaksjonen. Begge er meningssjangre, men kronikken gir plass til eksterne stemmer og er vanligvis lengre og mer utdypende.',
      },
    },
    {
      id: 'mi-3-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Nyhetsartikkelen** er saklig og nøytral, og følger den omvendte pyramide
- **Reportasjen** er personlig og fortellende, med journalisten til stede
- **Feature** går bak nyhetene og utdyper et tema
- **Kommentar**, **leder** og **kronikk** er meningssjangre med ulike avsendere
- Skillet mellom fakta og mening er grunnleggende i journalistikken

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Nyhetsartikkel | Saklig, faktabasert tekst etter omvendt pyramide |
| Reportasje | Personlig, fortellende tekst med journalisten til stede |
| Feature | Utdypende artikkel som belyser et tema fra flere sider |
| Kommentar | Journalists personlige analyse og vurdering |
| Leder | Avisens offisielle standpunkt |
| Kronikk | Ekstern skribents argumenterende tekst |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const MEDIEINFO_1_DEL3_CHAPTERS = [
  CHAPTER_MEDIEINFO_1_3_1,
  CHAPTER_MEDIEINFO_1_3_2,
  CHAPTER_MEDIEINFO_1_3_3,
  CHAPTER_MEDIEINFO_1_3_4,
  CHAPTER_MEDIEINFO_1_3_5,
];
