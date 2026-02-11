/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Økonomi og ledelse (VG2) - Del 8: Etikk og samfunnsansvar
 *
 * Kapittel 8.1–8.5
 *
 * LK20-kompetansemål:
 * - drøfte etiske dilemmaer i næringslivet
 * - gjøre rede for bedriftens samfunnsansvar (CSR)
 * - vurdere hvordan bedrifter kan bidra til bærekraftig utvikling
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Bedriftsetikk
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_8_1: TextbookChapter = {
  id: 'okonomi-ledelse-8-1',
  courseId: 'okonomi-ledelse',
  chapterNumber: '8.1',
  title: 'Bedriftsetikk',
  description: 'Etiske prinsipper i næringslivet. Du lærer om pliktetikk, konsekvensetikk og dydsetikk, og hvordan disse retningene kan brukes til å vurdere beslutninger i en bedrift.',
  estimatedMinutes: 22,
  competenceGoals: ['drøfte etiske dilemmaer i næringslivet'],
  keyTerms: [
    { term: 'Etikk', definition: 'Systematisk refleksjon over hva som er rett og galt, og hvorfor.' },
    { term: 'Moral', definition: 'De faktiske normene og verdiene som styrer handlingene våre i praksis.' },
    { term: 'Pliktetikk', definition: 'Etisk retning der handlinger vurderes ut fra om de følger bestemte regler eller plikter, uavhengig av konsekvensene.' },
    { term: 'Konsekvensetikk', definition: 'Etisk retning der handlinger vurderes ut fra hvilke konsekvenser de fører til.' },
    { term: 'Dydsetikk', definition: 'Etisk retning som fokuserer på karakteregenskaper og hva slags person man bør være.' },
    { term: 'Bedriftsetikk', definition: 'Anvendelse av etiske prinsipper på beslutninger og handlinger i en bedrift.' },
  ],
  content: [
    {
      id: 'ol-8-1-intro',
      type: 'text',
      content: `## Hva er rett og galt i næringslivet?

Bedrifter tar beslutninger hver dag som påvirker ansatte, kunder, lokalsamfunn og miljøet. Noen av disse beslutningene er vanskelige fordi det ikke alltid er opplagt hva som er den riktige handlingen. Bedriftsetikk handler om å reflektere systematisk over hva som er rett og galt i forretningslivet.

I dette kapittelet skal du lære:
- Forskjellen mellom etikk og moral
- Tre sentrale etiske retninger: pliktetikk, konsekvensetikk og dydsetikk
- Hvordan etiske prinsipper kan brukes i bedriftsbeslutninger
- Hva som kjennetegner en etisk bedriftskultur`,
    },
    {
      id: 'ol-8-1-def-1',
      type: 'definition',
      title: 'Etikk og moral',
      content: `**Etikk** er den systematiske refleksjonen over hva som er rett og galt. Etikk gir oss verktøy til å begrunne hvorfor noe er riktig eller galt. **Moral** er de faktiske normene og verdiene som styrer handlingene våre i hverdagen. Enkelt sagt: moral er hva vi gjør, etikk er tenkningen bak.`,
    },
    {
      id: 'ol-8-1-example-1',
      type: 'example',
      title: 'Eksempel: Etikk vs. moral i praksis',
      content: `En bedriftsleder oppdager at en leverandør bruker underleverandører med dårlige arbeidsforhold. De fleste vil si det er moralsk galt å utnytte arbeidere. Men når bedriften skal bestemme hva den faktisk skal gjøre, trenger den etiske verktøy: Er det plikten til å beskytte arbeidere som veier tyngst? Konsekvensene for alle involverte? Eller hva slags bedrift vi ønsker å være?

Etikken hjelper oss å komme fra magefølelsen til en begrunnet beslutning.`,
    },
    {
      id: 'ol-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-8-1-ex-1',
        number: '8.1.1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom etikk og moral?',
        options: [
          { id: 'a', text: 'Det er ingen forskjell, begrepene betyr det samme', isCorrect: false },
          { id: 'b', text: 'Moral handler om faktiske normer, etikk er den systematiske refleksjonen over dem', isCorrect: true },
          { id: 'c', text: 'Etikk handler om lover, moral om følelser', isCorrect: false },
          { id: 'd', text: 'Moral gjelder bare privatlivet, etikk gjelder bare næringslivet', isCorrect: false },
        ],
        solution: 'Moral er de normene og verdiene vi faktisk lever etter i hverdagen. Etikk er den systematiske, filosofiske refleksjonen over hva som er rett og galt, og hvorfor. Moral er praksis, etikk er teori og begrunnelse.',
      },
    },
    {
      id: 'ol-8-1-def-2',
      type: 'definition',
      title: 'Pliktetikk (deontologisk etikk)',
      content: `**Pliktetikk** vurderer handlinger ut fra om de følger bestemte regler eller plikter, uavhengig av konsekvensene. Filosofen Immanuel Kant formulerte det kategoriske imperativ: «Handle bare etter den regelen du samtidig kan ville skal bli en allmenn lov.» I næringslivet betyr dette at en bedrift bør følge etiske regler konsekvent, for eksempel alltid snakke sant til kunder, uansett om løgn ville gitt bedre resultat.`,
    },
    {
      id: 'ol-8-1-example-2',
      type: 'example',
      title: 'Eksempel: Pliktetikk i bedriften',
      problem: 'En bilprodusent oppdager en liten sikkerhetsfeil som sannsynligvis aldri vil skade noen. En tilbakekalling vil koste millioner. Hva bør de gjøre?',
      solution: `**Pliktetisk vurdering:**
Bedriften har en plikt til å levere trygge produkter. Denne plikten gjelder uansett om feilen sannsynligvis er ufarlig. Å skjule feilen ville bety at bedriften aksepterer at det er greit å holde tilbake sikkerhetsinformasjon - noe som ikke kan gjøres til en allmenn regel.

**Konklusjon:** Ut fra pliktetikken bør bilen tilbakekalles, fordi plikten til å informere om sikkerhetsfeil er absolutt.`,
    },
    {
      id: 'ol-8-1-def-3',
      type: 'definition',
      title: 'Konsekvensetikk (utilitarisme)',
      content: `**Konsekvensetikk** vurderer handlinger ut fra konsekvensene de fører til. Den mest kjente formen er utilitarisme, formulert av Jeremy Bentham og John Stuart Mill: «Den rette handlingen er den som gir størst mulig lykke for flest mulig.» I næringslivet betyr dette at en bedrift bør velge det alternativet som samlet sett gir best resultat for alle berørte parter.`,
    },
    {
      id: 'ol-8-1-example-3',
      type: 'example',
      title: 'Eksempel: Konsekvensetikk i nedbemanningsprosess',
      problem: 'En bedrift med 200 ansatte sliter økonomisk. Ledelsen vurderer å si opp 20 ansatte for å redde bedriften og de resterende 180 arbeidsplassene. Er dette etisk forsvarlig?',
      solution: `**Konsekvensetisk vurdering:**
- Alternativ 1: Si opp 20 ansatte. Konsekvenser: 20 mister jobben, men 180 beholder sin. Bedriften overlever.
- Alternativ 2: Beholde alle. Konsekvenser: Bedriften kan gå konkurs, og alle 200 mister jobben.
- Alternativ 3: Redusere lønn for alle. Konsekvenser: Alle beholder jobben, men med lavere inntekt.

**Konklusjon:** Konsekvensetikken veier totalnytten. Alternativ 1 eller 3 gir bedre totalresultat enn alternativ 2, men vurderingen avhenger av hvor mye vekt man legger på de ulike konsekvensene.`,
    },
    {
      id: 'ol-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-8-1-ex-2',
        number: '8.1.2',
        type: 'multiple-choice',
        task: 'Hva er hovedprinsippet i konsekvensetikk?',
        options: [
          { id: 'a', text: 'Handlinger er riktige hvis de følger regler og plikter', isCorrect: false },
          { id: 'b', text: 'Handlinger er riktige hvis de utføres av en person med god karakter', isCorrect: false },
          { id: 'c', text: 'Handlinger er riktige hvis de gir best mulige konsekvenser for flest mulig', isCorrect: true },
          { id: 'd', text: 'Handlinger er riktige hvis de er lovlige', isCorrect: false },
        ],
        solution: 'Konsekvensetikk (utilitarisme) vurderer handlinger ut fra resultatet de fører til. Den rette handlingen er den som gir størst mulig nytte eller lykke for flest mulig berørte parter.',
      },
    },
    {
      id: 'ol-8-1-text-dydsetikk',
      type: 'text',
      title: 'Dydsetikk',
      content: `### Dydsetikk - karakterens betydning

Den tredje store etiske retningen er **dydsetikk**, som stammer fra Aristoteles. I stedet for å spørre «Hva bør jeg gjøre?» spør dydsetikken «Hva slags person bør jeg være?»

**Sentrale dyder i næringslivet:**
- **Ærlighet** - å være sannferdig i all kommunikasjon
- **Rettferdighet** - å behandle alle parter likt og rimelig
- **Mot** - å tørre å ta vanskelige beslutninger
- **Måtehold** - å ikke la grådighet styre beslutninger
- **Integritet** - å handle i samsvar med egne verdier

En dydsetisk bedrift spør ikke bare «Er dette lovlig?» eller «Hva gir mest profitt?», men «Er dette noe vi kan være stolte av?»`,
    },
    {
      id: 'ol-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-8-1-ex-3',
        number: '8.1.3',
        type: 'classic',
        task: 'Forklar de tre etiske retningene (pliktetikk, konsekvensetikk og dydsetikk) med egne ord, og gi et eksempel fra næringslivet for hver.',
        hints: ['Tenk på hva som er ulikt fokus for de tre retningene: regler, resultater eller karakter'],
        solution: 'Pliktetikk: Handlinger vurderes etter regler og plikter. Eksempel: En bedrift forteller alltid sannheten i markedsføring, selv om overdrivelse ville solgt mer. Konsekvensetikk: Handlinger vurderes etter konsekvensene. Eksempel: En fabrikk investerer i bedre luftfiltre fordi det gir bedre helse for lokalsamfunnet, selv om det koster penger. Dydsetikk: Fokuserer på karakter og verdier. Eksempel: En leder avstår fra å utnytte en konkurrents problemer fordi det strider mot bedriftens verdier om fair play.',
      },
    },
    {
      id: 'ol-8-1-text-kultur',
      type: 'text',
      content: `### Etisk bedriftskultur

En bedrift trenger mer enn regler for å handle etisk - den trenger en kultur der etisk refleksjon er en naturlig del av hverdagen.

**Kjennetegn på en etisk bedriftskultur:**
- Ledelsen går foran som gode eksempler
- Åpen dialog om etiske spørsmål
- Klare etiske retningslinjer som faktisk brukes
- Trygge kanaler for varsling av kritikkverdige forhold
- Etikk er en del av opplæring og kompetanseutvikling

**Etiske retningslinjer** (ofte kalt «Code of Conduct») er et dokument som beskriver bedriftens verdier og forventninger til ansattes adferd. De beste retningslinjene er konkrete, lett tilgjengelige og forankret i ledelsen.`,
    },
    {
      id: 'ol-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-8-1-ex-4',
        number: '8.1.4',
        type: 'classic',
        task: 'Hva menes med etiske retningslinjer (Code of Conduct)? Nevn tre elementer du mener bør være med i en bedrifts etiske retningslinjer.',
        solution: 'Etiske retningslinjer er et dokument som beskriver bedriftens verdier og forventninger til ansattes adferd. Tre viktige elementer: 1) Regler for antikorrupsjon og gaver - hva ansatte kan motta og gi. 2) Retningslinjer for behandling av kunder og leverandører - krav til ærlighet, diskriminering og likeverd. 3) Varslingsrutiner - hvordan ansatte trygt kan melde fra om kritikkverdige forhold.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-8-1-ex-5',
        number: '8.1.5',
        type: 'classic',
        task: 'En klesbutikkjede oppdager at deres billigste leverandør bruker fabrikker med svært lave lønninger og lange arbeidsdager. Å bytte til en dyrere leverandør vil øke prisene med 20 prosent. Drøft situasjonen fra alle tre etiske perspektiver (pliktetikk, konsekvensetikk og dydsetikk). Hva ville du anbefalt bedriften å gjøre?',
        hints: ['Husk å vurdere konsekvenser for alle parter: arbeidere, kunder, aksjonærer og ansatte i butikken'],
        solution: 'Pliktetikk: Bedriften har en plikt til å ikke bidra til utnyttelse av arbeidere. Lave lønninger og lange dager kan ikke rettferdiggjøres uansett konsekvens. Konsekvensetikk: Man må veie alle konsekvenser - arbeiderne får det bedre med ny leverandør, men høyere priser kan bety færre salg og potensielt permitteringer. Samtidig kan noen argumentere for at uten ordrene ville arbeiderne hatt det enda verre. Dydsetikk: Hva slags bedrift vil vi være? En som tjener penger på andres lidelse, eller en vi kan være stolte av? Anbefaling: Bytte leverandør, men gjøre det gradvis. Kommunisere åpent til kundene hvorfor prisene øker. Mange kunder er villige til å betale mer for etisk produserte varer.',
      },
    },
    {
      id: 'ol-8-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-8-1-ex-6',
        number: '8.1.6',
        type: 'classic',
        task: 'Undersøk en norsk bedrift (for eksempel Equinor, DNB, Telenor eller en lokal bedrift) og finn deres etiske retningslinjer eller Code of Conduct. Beskriv kort hva de inneholder og vurder om de er gode nok.',
        hints: ['De fleste store bedrifter publiserer sine etiske retningslinjer på nettsidene sine'],
        solution: 'Besvarelsen bør inneholde: 1) Hvilken bedrift som er valgt. 2) Hvor retningslinjene ble funnet. 3) Kort oppsummering av innholdet, for eksempel antikorrupsjon, menneskerettigheter, miljø, varsling. 4) Vurdering av om retningslinjene er konkrete nok til å brukes i praksis, om de dekker relevante temaer, og om bedriften ser ut til å faktisk følge dem.',
        isInvestigation: true,
      },
    },
    {
      id: 'ol-8-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Etikk** er systematisk refleksjon over rett og galt, **moral** er de normene vi faktisk lever etter
- **Pliktetikk** vurderer handlinger etter regler og plikter, uavhengig av konsekvenser
- **Konsekvensetikk** vurderer handlinger etter resultater - størst nytte for flest mulig
- **Dydsetikk** fokuserer på karakter og verdier - hva slags person eller bedrift vi vil være
- En **etisk bedriftskultur** krever ledelse, åpenhet og klare retningslinjer

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Pliktetikk | Handlinger vurderes etter regler og plikter |
| Konsekvensetikk | Handlinger vurderes etter konsekvensene |
| Dydsetikk | Fokus på karakter og verdier |
| Code of Conduct | Bedriftens etiske retningslinjer |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2: Samfunnsansvar (CSR)
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_8_2: TextbookChapter = {
  id: 'okonomi-ledelse-8-2',
  courseId: 'okonomi-ledelse',
  chapterNumber: '8.2',
  title: 'Samfunnsansvar (CSR)',
  description: 'Bedriftens samfunnsansvar og den tredoble bunnlinjen. Du lærer om Carrolls CSR-pyramide, interessentdialog og hvordan bedrifter kan ta ansvar utover det loven krever.',
  estimatedMinutes: 24,
  competenceGoals: ['gjøre rede for bedriftens samfunnsansvar (CSR)'],
  keyTerms: [
    { term: 'CSR', definition: 'Corporate Social Responsibility - bedriftens samfunnsansvar utover lovkrav og profittmaksimering.' },
    { term: 'Tredobbel bunnlinje', definition: 'Prinsippet om at bedrifter bør måles på tre dimensjoner: økonomi (profit), miljø (planet) og sosiale forhold (people).' },
    { term: 'Carrolls CSR-pyramide', definition: 'Modell med fire nivåer av ansvar: økonomisk, juridisk, etisk og filantropisk.' },
    { term: 'Interessent', definition: 'Enhver person eller gruppe som påvirkes av eller kan påvirke bedriftens virksomhet.' },
    { term: 'Interessentdialog', definition: 'Systematisk kommunikasjon mellom bedriften og dens interessenter for å forstå forventninger og behov.' },
    { term: 'Grønnvasking', definition: 'Når en bedrift gir et misvisende inntrykk av å være mer miljøvennlig enn den faktisk er.' },
  ],
  content: [
    {
      id: 'ol-8-2-intro',
      type: 'text',
      content: `## Bedriftens ansvar for samfunnet

Bør en bedrift bare fokusere på å tjene penger, eller har den også et ansvar overfor samfunnet? Dette spørsmålet er sentralt i debatten om samfunnsansvar, eller CSR (Corporate Social Responsibility).

I dag forventer kunder, investorer og myndigheter at bedrifter tar ansvar utover det loven krever - for miljøet, for arbeidsforhold og for lokalsamfunnene de opererer i.

I dette kapittelet skal du lære:
- Hva samfunnsansvar (CSR) betyr i praksis
- Den tredoble bunnlinjen: profit, planet og people
- Carrolls CSR-pyramide og dens fire nivåer
- Hva interessentdialog er og hvorfor det er viktig`,
    },
    {
      id: 'ol-8-2-def-1',
      type: 'definition',
      title: 'Samfunnsansvar (CSR)',
      content: `**CSR** (Corporate Social Responsibility) handler om bedriftens ansvar for å bidra positivt til samfunnet utover det lovverket krever. Dette inkluderer ansvar for miljø, arbeidsforhold, menneskerettigheter, antikorrupsjon og lokale samfunn. CSR innebærer at bedriften frivillig integrerer sosiale og miljømessige hensyn i sin virksomhet.`,
    },
    {
      id: 'ol-8-2-example-1',
      type: 'example',
      title: 'Eksempel: CSR hos Stormberg',
      content: `Den norske friluftsmerket Stormberg er kjent for sin sterke CSR-profil:

**Miljø:** Alle produkter kan leveres tilbake for gjenvinning. De bruker resirkulerte materialer.
**Sosiale forhold:** 25 prosent av de ansatte er hentet fra Nav - mennesker som har stått utenfor arbeidslivet. Grunnlegger Steinar J. Olsen har sagt at dette ikke er veldedighet, men god forretningspraksis.
**Økonomi:** Stormberg gir bort 1 prosent av omsetningen til humanitære formål.

Stormberg viser at CSR kan kombineres med lønnsomhet. Mange kunder velger Stormberg nettopp fordi de tar samfunnsansvar.`,
    },
    {
      id: 'ol-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-8-2-ex-1',
        number: '8.2.1',
        type: 'multiple-choice',
        task: 'Hva betyr CSR?',
        options: [
          { id: 'a', text: 'Corporate Sales Revenue - bedriftens salgsinntekter', isCorrect: false },
          { id: 'b', text: 'Corporate Social Responsibility - bedriftens samfunnsansvar', isCorrect: true },
          { id: 'c', text: 'Customer Service Requirements - krav til kundeservice', isCorrect: false },
          { id: 'd', text: 'Corporate Strategy Report - bedriftens strategirapport', isCorrect: false },
        ],
        solution: 'CSR står for Corporate Social Responsibility, altså bedriftens samfunnsansvar. Det handler om at bedriften tar ansvar for miljø, sosiale forhold og samfunnet utover det lovverket krever.',
      },
    },
    {
      id: 'ol-8-2-def-2',
      type: 'definition',
      title: 'Den tredoble bunnlinjen',
      content: `**Den tredoble bunnlinjen** (triple bottom line) er prinsippet om at bedrifter bør måle suksess langs tre dimensjoner:

- **Profit** (økonomi) - er bedriften lønnsom?
- **Planet** (miljø) - ivaretar bedriften miljøet?
- **People** (mennesker) - tar bedriften ansvar for ansatte, lokalsamfunn og samfunnet?

Begrepet ble introdusert av John Elkington i 1994 og utfordrer ideen om at bunnlinjen bare handler om profitt.`,
    },
    {
      id: 'ol-8-2-example-2',
      type: 'example',
      title: 'Eksempel: Tredobbel bunnlinje i praksis',
      problem: 'Hvordan kan en dagligvarebutikk bruke den tredoble bunnlinjen?',
      solution: `**Profit:** Butikken må tjene nok til å overleve og betale ansatte. Effektiv drift og godt varesortiment sikrer lønnsomhet.

**Planet:** Butikken kan redusere matsvinn ved å selge varer med kort holdbarhetsdato til redusert pris. Energieffektive kjøleskap og LED-belysning reduserer strømforbruk. Mindre plastemballasje og gjenbruksposer.

**People:** Gode arbeidsforhold og rettferdige lønninger for ansatte. Støtte til lokale idrettslag eller frivillige organisasjoner. Tilby lærlingplasser til ungdom.

Alle tre dimensjonene henger sammen: redusert matsvinn sparer både miljøet og penger.`,
    },
    {
      id: 'ol-8-2-text-pyramide',
      type: 'text',
      content: `### Carrolls CSR-pyramide

Den amerikanske professoren Archie Carroll utviklet i 1991 en modell som deler bedriftens samfunnsansvar inn i fire nivåer, ofte fremstilt som en pyramide:

**Nivå 1 - Økonomisk ansvar (bunnen):**
Bedriften må være lønnsom. Uten inntjening kan den ikke eksistere eller ta noe som helst ansvar.

**Nivå 2 - Juridisk ansvar:**
Bedriften må følge lover og regler. Skattebetaling, arbeidsmiljølov, forbrukerrettigheter.

**Nivå 3 - Etisk ansvar:**
Bedriften bør gjøre det som er rett, selv om det ikke er lovpålagt. Rettferdig behandling av leverandører, åpenhet om produksjonsforhold.

**Nivå 4 - Filantropisk ansvar (toppen):**
Bedriften kan bidra til samfunnet utover det som forventes. Sponsing, donasjoner, frivillig arbeid.

Poenget er at hvert nivå bygger på det under: en bedrift som ikke er lønnsom eller som bryter loven, kan ikke gi seg ut for å ta samfunnsansvar.`,
    },
    {
      id: 'ol-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-8-2-ex-2',
        number: '8.2.2',
        type: 'multiple-choice',
        task: 'Hvilke fire nivåer inngår i Carrolls CSR-pyramide, fra bunn til topp?',
        options: [
          { id: 'a', text: 'Økonomisk, juridisk, etisk, filantropisk', isCorrect: true },
          { id: 'b', text: 'Miljø, økonomi, sosial, kulturell', isCorrect: false },
          { id: 'c', text: 'Profitt, vekst, innovasjon, bærekraft', isCorrect: false },
          { id: 'd', text: 'Juridisk, etisk, strategisk, operasjonell', isCorrect: false },
        ],
        solution: 'Carrolls CSR-pyramide har fire nivåer: 1) Økonomisk ansvar (bunnen - bedriften må tjene penger), 2) Juridisk ansvar (følge lover), 3) Etisk ansvar (gjøre det rette utover lovkrav), 4) Filantropisk ansvar (toppen - frivillige bidrag til samfunnet).',
      },
    },
    {
      id: 'ol-8-2-text-interessenter',
      type: 'text',
      content: `### Interessenter og interessentdialog

En **interessent** (stakeholder) er enhver person eller gruppe som påvirkes av, eller kan påvirke, bedriftens virksomhet.

**Viktige interessentgrupper:**
- **Eiere/aksjonærer** - ønsker avkastning og verdistigning
- **Ansatte** - ønsker trygg jobb, god lønn og godt arbeidsmiljø
- **Kunder** - ønsker gode produkter til rettferdig pris
- **Leverandører** - ønsker langsiktige og rettferdige avtaler
- **Lokalsamfunn** - ønsker arbeidsplasser og miljøhensyn
- **Myndigheter** - ønsker at lover følges og skatt betales
- **Miljøet** - har ingen stemme, men er sterkt berørt

**Interessentdialog** er systematisk kommunikasjon med disse gruppene for å forstå deres forventninger. Mange bedrifter gjennomfører årlige interessentundersøkelser og publiserer resultatene i bærekraftsrapporter.`,
    },
    {
      id: 'ol-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-8-2-ex-3',
        number: '8.2.3',
        type: 'classic',
        task: 'Nevn minst fire ulike interessentgrupper for en stor norsk dagligvarekjede (for eksempel Rema 1000 eller Coop). Beskriv kort hva hver interessentgruppe forventer av bedriften.',
        hints: ['Tenk på alle som berøres av bedriftens virksomhet - både interne og eksterne'],
        solution: '1) Kundene - forventer god kvalitet, lave priser, mattrygghet og ærlig markedsføring. 2) Ansatte - forventer rettferdig lønn, trygge arbeidsforhold og mulighet for utvikling. 3) Leverandører og bønder - forventer rettferdige innkjøpspriser og langsiktige avtaler. 4) Lokalsamfunnet - forventer arbeidsplasser og at butikken bidrar positivt. 5) Myndigheter - forventer at lover følges, at skatt betales korrekt. 6) Miljøorganisasjoner - forventer at kjeden reduserer matsvinn, plastemballasje og klimagassutslipp.',
      },
    },
    {
      id: 'ol-8-2-note-gronnvasking',
      type: 'warning',
      title: 'Grønnvasking',
      content: `**Grønnvasking** (greenwashing) er når en bedrift gir et misvisende inntrykk av å være mer miljøvennlig eller ansvarlig enn den faktisk er. Eksempler: vage påstander som «miljøvennlig» uten dokumentasjon, fremheve et lite grønt tiltak mens kjernevirksomheten forurenser, eller bruke grønn emballasje på produkter som ikke er spesielt bærekraftige. Forbrukere og medier er blitt flinkere til å avsløre grønnvasking, og konsekvensene for tilliten kan være alvorlige.`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-8-2-ex-4',
        number: '8.2.4',
        type: 'classic',
        task: 'Bruk Carrolls CSR-pyramide til å analysere en selvvalgt bedrift. Beskriv hvordan bedriften oppfyller hvert av de fire nivåene. Er det noen nivåer der bedriften kan bli bedre?',
        hints: ['Start med det økonomiske nivået og jobb deg oppover'],
        solution: 'Eksempel med IKEA: Økonomisk: IKEA er svært lønnsomt og skaper arbeidsplasser globalt. Juridisk: Følger lover, men har fått kritikk for aggressiv skatteplanlegging. Etisk: Har strenge krav til leverandører, men har hatt utfordringer med å kontrollere alle ledd i leverandørkjeden. Filantropisk: IKEA Foundation donerer milliarder til flyktninger, klima og utdanning. Forbedringsområde: Juridisk nivå - bedre skattemoral ville styrket troverdigheten.',
      },
    },
    {
      id: 'ol-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-8-2-ex-5',
        number: '8.2.5',
        type: 'classic',
        task: 'Noen hevder at bedriftens eneste ansvar er å tjene penger til eierne (Milton Friedmans syn). Andre mener at bedrifter har et bredt samfunnsansvar. Drøft begge synspunktene og ta stilling til hvilken side du er mest enig med.',
        hints: ['Tenk på argumenter for og mot at bedrifter bør ta samfunnsansvar utover lovkrav'],
        solution: 'Friedmans argument: Bedriftens formål er å skape verdi for eierne. Ledere som bruker bedriftens penger på samfunnsprosjekter, bruker andres penger. Markedet og konkurranse er de beste mekanismene for å skape velferd. Motargumenter: Bedrifter opererer ikke i et vakuum - de er avhengige av samfunnet rundt seg. Miljøskader og sosiale problemer skaper kostnader som alle må betale for. CSR kan gi konkurransefortrinn og tiltrekke talenter og kunder. Mange mener løsningen ligger i at CSR integreres i forretningsstrategien slik at det støtter både lønnsomhet og samfunnsnytte.',
      },
    },
    {
      id: 'ol-8-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-8-2-ex-6',
        number: '8.2.6',
        type: 'multiple-choice',
        task: 'Hva er grønnvasking?',
        options: [
          { id: 'a', text: 'Når en bedrift investerer i grønn teknologi', isCorrect: false },
          { id: 'b', text: 'Når en bedrift gir et misvisende inntrykk av å være mer miljøvennlig enn den er', isCorrect: true },
          { id: 'c', text: 'Når en bedrift bruker miljøvennlig emballasje', isCorrect: false },
          { id: 'd', text: 'Når en bedrift donerer penger til miljøorganisasjoner', isCorrect: false },
        ],
        solution: 'Grønnvasking (greenwashing) er når en bedrift gir et misvisende inntrykk av å være mer miljøvennlig enn den faktisk er. Det kan skje gjennom vage påstander, fremheving av små tiltak mens kjernevirksomheten forurenser, eller villedende bruk av grønne symboler.',
      },
    },
    {
      id: 'ol-8-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **CSR** er bedriftens samfunnsansvar utover lovkrav
- **Den tredoble bunnlinjen** måler profitt, planet og people
- **Carrolls pyramide** har fire nivåer: økonomisk, juridisk, etisk og filantropisk
- **Interessentdialog** sikrer at bedriften forstår forventningene fra omverdenen
- **Grønnvasking** er en risiko som undergraver troverdigheten

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| CSR | Bedriftens frivillige samfunnsansvar |
| Tredobbel bunnlinje | Profit, planet, people |
| CSR-pyramiden | Fire nivåer av ansvar (Carroll) |
| Interessentdialog | Kommunikasjon med berørte parter |
| Grønnvasking | Misvisende miljøkommunikasjon |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3: Bærekraft og grønn omstilling
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_8_3: TextbookChapter = {
  id: 'okonomi-ledelse-8-3',
  courseId: 'okonomi-ledelse',
  chapterNumber: '8.3',
  title: 'Bærekraft og grønn omstilling',
  description: 'Sirkulær økonomi, miljøsertifisering og grønn omstilling i næringslivet. Du lærer om ISO 14001, Svanemerket, Miljøfyrtårn og hvordan bedrifter kan redusere sitt miljøavtrykk.',
  estimatedMinutes: 22,
  competenceGoals: ['vurdere hvordan bedrifter kan bidra til bærekraftig utvikling'],
  keyTerms: [
    { term: 'Bærekraftig utvikling', definition: 'Utvikling som dekker dagens behov uten å ødelegge mulighetene for kommende generasjoner.' },
    { term: 'Sirkulær økonomi', definition: 'Økonomisk modell der ressurser brukes om igjen i lukkede kretsløp i stedet for å kastes.' },
    { term: 'Lineær økonomi', definition: 'Tradisjonell modell: ta ut råvarer, produsere, bruke og kaste.' },
    { term: 'ISO 14001', definition: 'Internasjonal standard for miljøstyringssystemer som hjelper bedrifter å redusere miljøpåvirkning systematisk.' },
    { term: 'Svanemerket', definition: 'Det offisielle nordiske miljømerket som stiller strenge krav til produkters miljøpåvirkning gjennom hele livsløpet.' },
    { term: 'Miljøfyrtårn', definition: 'Norsk sertifiseringsordning som hjelper bedrifter med konkret miljøarbeid og dokumentasjon.' },
  ],
  content: [
    {
      id: 'ol-8-3-intro',
      type: 'text',
      content: `## Fra bruk-og-kast til bærekraft

Klimaendringer, ressursknapphet og forurensning er blant de største utfordringene i vår tid. Næringslivet spiller en avgjørende rolle i å løse disse problemene - både fordi bedrifter er store forurensere, og fordi de har ressursene og kompetansen til å drive innovasjon.

Grønn omstilling handler om å endre måten vi produserer og forbruker på, slik at økonomisk vekst ikke skjer på bekostning av miljøet.

I dette kapittelet skal du lære:
- Hva bærekraftig utvikling betyr for næringslivet
- Forskjellen mellom lineær og sirkulær økonomi
- Viktige miljøsertifiseringer: ISO 14001, Svanemerket og Miljøfyrtårn
- Hvordan bedrifter kan gjennomføre grønn omstilling i praksis`,
    },
    {
      id: 'ol-8-3-def-1',
      type: 'definition',
      title: 'Bærekraftig utvikling',
      content: `**Bærekraftig utvikling** er «utvikling som dekker dagens behov uten å ødelegge mulighetene for at kommende generasjoner skal få dekket sine behov» (Brundtland-kommisjonen, 1987). For næringslivet innebærer dette å skape økonomisk verdi uten å tømme naturressurser eller skade miljøet på en måte som ikke kan repareres.`,
    },
    {
      id: 'ol-8-3-example-1',
      type: 'example',
      title: 'Eksempel: Lineær vs. sirkulær økonomi',
      content: `**Lineær økonomi (bruk-og-kast):**
Råvarer hentes ut → Produkter produseres → Produkter brukes → Produkter kastes
Eksempel: En t-skjorte lages av bomull, brukes noen ganger, og kastes i restavfallet.

**Sirkulær økonomi (kretsløp):**
Råvarer hentes ut → Produkter designes for gjenbruk → Produkter brukes → Produkter repareres, gjenbrukes eller resirkuleres → Materialene brukes på nytt
Eksempel: En t-skjorte lages av resirkulert polyester, kan leveres tilbake til produsenten, og fibrene brukes til nye klær.

**Nøkkelforskjell:** I en sirkulær økonomi finnes det ikke «avfall» - alt er en ressurs som kan brukes på nytt.`,
    },
    {
      id: 'ol-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-8-3-ex-1',
        number: '8.3.1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner en sirkulær økonomi?',
        options: [
          { id: 'a', text: 'At alle bedrifter må være non-profit', isCorrect: false },
          { id: 'b', text: 'At ressurser brukes om igjen i lukkede kretsløp i stedet for å kastes', isCorrect: true },
          { id: 'c', text: 'At bare fornybare energikilder brukes', isCorrect: false },
          { id: 'd', text: 'At bedrifter ikke kan vokse', isCorrect: false },
        ],
        solution: 'I en sirkulær økonomi designes produkter for å vare, repareres, gjenbrukes og resirkuleres. Materialene holdes i kretsløp så lenge som mulig, i motsetning til den lineære «bruk-og-kast»-modellen.',
      },
    },
    {
      id: 'ol-8-3-def-2',
      type: 'definition',
      title: 'Sirkulær økonomi - strategier',
      content: `Sirkulær økonomi bygger på flere strategier, ofte kalt **R-strategiene**:
- **Refuse** - unngå unødvendig forbruk
- **Reduce** - reduser materialbruk
- **Reuse** - bruk om igjen
- **Repair** - reparer i stedet for å kaste
- **Refurbish** - oppusser og selg på nytt
- **Remanufacture** - lag nytt produkt av gamle deler
- **Repurpose** - bruk til et nytt formål
- **Recycle** - resirkuler materialene
- **Recover** - gjenvinne energi fra det som ikke kan resirkuleres`,
    },
    {
      id: 'ol-8-3-text-sertifisering',
      type: 'text',
      content: `### Miljøsertifiseringer

Miljøsertifiseringer hjelper bedrifter med å dokumentere og forbedre miljøarbeidet sitt. De gir også kundene trygghet for at produkter og tjenester oppfyller bestemte miljøkrav.

**ISO 14001 - Miljøstyringssystem:**
- Internasjonal standard utviklet av ISO (International Organization for Standardization)
- Gir rammeverk for systematisk miljøarbeid
- Krever at bedriften setter miljømål, måler fremgang og forbedrer seg kontinuerlig
- Tredjepartssertifisert - en uavhengig revisor kontrollerer at kravene oppfylles
- Passer for alle typer bedrifter, uansett størrelse og bransje

**Svanemerket (Nordisk Miljømerking):**
- Det offisielle nordiske miljømerket, opprettet i 1989
- Stiller strenge krav til produkters miljøpåvirkning gjennom hele livsløpet
- Dekker over 60 produktgrupper: rengjøringsmidler, møbler, hoteller med mer
- Kravene skjerpes jevnlig slik at de beste produktene stadig blir bedre

**Miljøfyrtårn:**
- Norsk sertifiseringsordning, den mest brukte i Norge
- Hjelper bedrifter med konkrete tiltak for energi, avfall, innkjøp og transport
- Over 9 000 bedrifter i Norge er sertifisert
- Enklere og mer praktisk enn ISO 14001 for små og mellomstore bedrifter`,
    },
    {
      id: 'ol-8-3-example-2',
      type: 'example',
      title: 'Eksempel: Grønn omstilling i praksis',
      problem: 'Hvordan kan et lite byggefirma jobbe med grønn omstilling?',
      solution: `**Energi:** Bytte til elektriske gravemaskiner og biler. Bruke fornybar energi på byggeplassen.

**Materialer:** Velge miljøsertifiserte byggematerialer (Svanemerket). Bruke gjenbruksmaterialer der det er mulig. Bestille riktig mengde for å unngå avfall.

**Avfall:** Kildesortere på byggeplassen. Sende overskuddsmaterialer til gjenbruksstasjoner. Sette mål for andel avfall som resirkuleres.

**Sertifisering:** Bli Miljøfyrtårn-sertifisert for å få hjelp med systematisk arbeid og kunne dokumentere miljøarbeidet overfor kunder og oppdragsgivere.

**Resultat:** Lavere kostnader (mindre avfall, lavere energiforbruk), bedre omdømme, og lettere å vinne offentlige anbud der miljøkrav vektlegges.`,
    },
    {
      id: 'ol-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-8-3-ex-2',
        number: '8.3.2',
        type: 'multiple-choice',
        task: 'Hvilken av disse er en norsk miljøsertifiseringsordning som er spesielt populær blant små og mellomstore bedrifter?',
        options: [
          { id: 'a', text: 'ISO 14001', isCorrect: false },
          { id: 'b', text: 'Svanemerket', isCorrect: false },
          { id: 'c', text: 'Miljøfyrtårn', isCorrect: true },
          { id: 'd', text: 'EU Ecolabel', isCorrect: false },
        ],
        solution: 'Miljøfyrtårn er en norsk sertifiseringsordning som er den mest brukte i Norge med over 9 000 sertifiserte bedrifter. Den er enklere og mer praktisk rettet enn ISO 14001, og passer godt for små og mellomstore bedrifter.',
      },
    },
    {
      id: 'ol-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-8-3-ex-3',
        number: '8.3.3',
        type: 'classic',
        task: 'Forklar forskjellen mellom lineær og sirkulær økonomi. Gi et konkret eksempel på hvordan en bedrift kan gå fra lineær til sirkulær tankegang.',
        hints: ['Tenk på hva som skjer med produktet etter at kunden er ferdig med det'],
        solution: 'Lineær økonomi følger modellen «ta ut, produser, bruk, kast» - en rett linje fra råvare til avfall. Sirkulær økonomi holder materialene i bruk så lenge som mulig gjennom gjenbruk, reparasjon og resirkulering. Eksempel: En møbelprodusent (lineær) selger en sofa som kastes etter 10 år. Samme produsent (sirkulær) designer sofaen for demontering, tilbyr reparasjonstjeneste, tar tilbake brukte sofaer og bruker materialene i nye møbler. IKEA har begynt med tilbakekjøpsordning for brukte møbler som et steg mot sirkulær økonomi.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-8-3-ex-4',
        number: '8.3.4',
        type: 'classic',
        task: 'Velg en bransje (for eksempel klesindustrien, matindustrien eller IT-bransjen). Beskriv tre konkrete tiltak bedrifter i denne bransjen kan gjennomføre for å bli mer bærekraftige. Knytt tiltakene til R-strategiene.',
        hints: ['Tenk på hele verdikjeden - fra råvarer til avfall'],
        solution: 'Eksempel: Klesindustrien. 1) Reduce: Designe klær med høyere kvalitet som varer lenger, bruke mindre vann og kjemikalier i produksjonen. 2) Reuse: Tilby innbytte- eller utleietjenester der kunder kan levere tilbake brukte klær som selges videre. 3) Recycle: Bruke resirkulerte tekstilfibre i nye produkter og samle inn brukte klær for fiberresirkulering. Disse tiltakene reduserer miljøavtrykket samtidig som de kan gi nye inntektskilder.',
      },
    },
    {
      id: 'ol-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-8-3-ex-5',
        number: '8.3.5',
        type: 'classic',
        task: 'En bedrift vurderer å bli miljøsertifisert. Ledelsen er usikker på om de skal velge ISO 14001, Svanemerket eller Miljøfyrtårn. Bedriften er et mellomstort renholdsfirma med 40 ansatte. Hvilket alternativ ville du anbefalt, og hvorfor?',
        solution: 'For et mellomstort renholdsfirma med 40 ansatte ville jeg anbefalt en kombinasjon. Miljøfyrtårn som basis: Det er enklest å implementere, gir konkrete tiltak for avfall, energi, innkjøp og transport, og er godt kjent i Norge. Mange offentlige oppdragsgivere krever det. I tillegg kan de velge Svanemerket for rengjøringstjenester og produkter, noe som viser kundene at selve tjenesten oppfyller strenge miljøkrav. ISO 14001 ville vært overkill for denne størrelsen - det krever mye dokumentasjon og er mest relevant for større bedrifter eller de som opererer internasjonalt.',
      },
    },
    {
      id: 'ol-8-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-8-3-ex-6',
        number: '8.3.6',
        type: 'multiple-choice',
        task: 'Hva er formålet med R-strategiene i sirkulær økonomi?',
        options: [
          { id: 'a', text: 'Å øke produksjonshastigheten', isCorrect: false },
          { id: 'b', text: 'Å holde materialer i bruk så lenge som mulig og minimere avfall', isCorrect: true },
          { id: 'c', text: 'Å redusere antall ansatte i produksjonen', isCorrect: false },
          { id: 'd', text: 'Å øke bedriftens omsetning', isCorrect: false },
        ],
        solution: 'R-strategiene (Refuse, Reduce, Reuse, Repair, Refurbish, Remanufacture, Repurpose, Recycle, Recover) har som mål å holde materialer og produkter i bruk så lenge som mulig, og minimere mengden avfall som ender opp på fyllinger eller i naturen.',
      },
    },
    {
      id: 'ol-8-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Bærekraftig utvikling** handler om å dekke dagens behov uten å ødelegge for fremtidige generasjoner
- **Sirkulær økonomi** erstatter bruk-og-kast med lukkede kretsløp der materialer gjenbrukes
- **R-strategiene** gir konkrete verktøy for sirkulær omstilling
- **ISO 14001** er en internasjonal standard for miljøstyring
- **Svanemerket** og **Miljøfyrtårn** er miljøsertifiseringer som brukes mye i Norge

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Sirkulær økonomi | Lukket kretsløp for materialer |
| ISO 14001 | Internasjonal miljøstyringsstandard |
| Svanemerket | Nordisk miljømerke for produkter |
| Miljøfyrtårn | Norsk sertifiseringsordning for bedrifter |
| R-strategiene | Strategier for å holde ressurser i bruk |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4: FNs bærekraftsmål
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_8_4: TextbookChapter = {
  id: 'okonomi-ledelse-8-4',
  courseId: 'okonomi-ledelse',
  chapterNumber: '8.4',
  title: 'FNs bærekraftsmål',
  description: 'De 17 bærekraftsmålene og deres relevans for næringslivet. Du lærer hvordan bedrifter kan bidra til målene, og hvordan bærekraftsrapportering fungerer.',
  estimatedMinutes: 20,
  competenceGoals: ['vurdere hvordan bedrifter kan bidra til bærekraftig utvikling'],
  keyTerms: [
    { term: 'FNs bærekraftsmål (SDG)', definition: 'De 17 globale målene vedtatt av FN i 2015, som skal nås innen 2030, for å utrydde fattigdom, bekjempe ulikhet og stoppe klimaendringer.' },
    { term: 'Agenda 2030', definition: 'FNs handlingsplan for bærekraftig utvikling med de 17 bærekraftsmålene og 169 delmål.' },
    { term: 'Bærekraftsrapportering', definition: 'Systematisk rapportering av bedriftens påvirkning på miljø, sosiale forhold og styring (ESG).' },
    { term: 'ESG', definition: 'Environmental, Social, Governance - rammeverk for å vurdere bedrifters bærekraft og ansvarlighet.' },
    { term: 'Vesentlighetsanalyse', definition: 'Prosess der bedriften identifiserer hvilke bærekraftstemaer som er viktigst for virksomheten og interessentene.' },
  ],
  content: [
    {
      id: 'ol-8-4-intro',
      type: 'text',
      content: `## En global plan for bærekraft

I 2015 vedtok FNs 193 medlemsland 17 bærekraftsmål (Sustainable Development Goals, SDG) som skal nås innen 2030. Målene dekker alt fra fattigdomsbekjempelse og utdanning til klimahandling og ansvarlig forbruk.

Næringslivet spiller en nøkkelrolle i å nå disse målene. Uten bedriftenes bidrag - gjennom innovasjon, investeringer og endret praksis - vil målene ikke bli oppnådd.

I dette kapittelet skal du lære:
- Hva FNs bærekraftsmål er og hvorfor de ble laget
- Hvilke mål som er mest relevante for næringslivet
- Hvordan bedrifter kan bruke målene i sin strategi
- Hva bærekraftsrapportering er og hvorfor det er viktig`,
    },
    {
      id: 'ol-8-4-def-1',
      type: 'definition',
      title: 'FNs bærekraftsmål',
      content: `**FNs bærekraftsmål** (Sustainable Development Goals, SDG) er 17 globale mål vedtatt i 2015, med 169 delmål. De utgjør en felles arbeidsplan for å utrydde fattigdom, bekjempe ulikhet og stoppe klimaendringene innen 2030. Målene gjelder for alle land, og forutsetter innsats fra myndigheter, sivilsamfunn og næringsliv.`,
    },
    {
      id: 'ol-8-4-text-maalene',
      type: 'text',
      content: `### De 17 bærekraftsmålene

1. Utrydde fattigdom
2. Utrydde sult
3. God helse og livskvalitet
4. God utdanning
5. Likestilling mellom kjønnene
6. Rent vann og gode sanitærforhold
7. Ren energi til alle
8. Anstendig arbeid og økonomisk vekst
9. Industri, innovasjon og infrastruktur
10. Mindre ulikhet
11. Bærekraftige byer og lokalsamfunn
12. Ansvarlig forbruk og produksjon
13. Stoppe klimaendringene
14. Livet i havet
15. Livet på land
16. Fred, rettferdighet og velfungerende institusjoner
17. Samarbeid for å nå målene

Målene henger sammen - fremgang på ett mål påvirker andre. For eksempel bidrar god utdanning (mål 4) til økonomisk vekst (mål 8) og mindre ulikhet (mål 10).`,
    },
    {
      id: 'ol-8-4-example-1',
      type: 'example',
      title: 'Eksempel: Bærekraftsmål i næringslivet',
      content: `Ulike bransjer kan bidra til ulike bærekraftsmål:

**Matindustrien:**
- Mål 2 (Utrydde sult) - produsere nok mat
- Mål 12 (Ansvarlig forbruk og produksjon) - redusere matsvinn
- Mål 13 (Klimahandling) - kutte utslipp fra produksjon og transport

**Teknologibransjen:**
- Mål 4 (God utdanning) - tilgjengelig digital opplæring
- Mål 9 (Innovasjon) - utvikle nye løsninger
- Mål 12 (Ansvarlig produksjon) - resirkulering av elektronikk

**Bank og finans:**
- Mål 8 (Anstendig arbeid) - ansvarlig utlånspraksis
- Mål 10 (Mindre ulikhet) - tilgang til finansielle tjenester for alle
- Mål 13 (Klimahandling) - grønne investeringer

Poenget er ikke å jobbe med alle 17 mål, men å identifisere de målene der bedriften har størst påvirkning og mulighet.`,
    },
    {
      id: 'ol-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-8-4-ex-1',
        number: '8.4.1',
        type: 'multiple-choice',
        task: 'Hvor mange bærekraftsmål har FN vedtatt?',
        options: [
          { id: 'a', text: '10', isCorrect: false },
          { id: 'b', text: '15', isCorrect: false },
          { id: 'c', text: '17', isCorrect: true },
          { id: 'd', text: '20', isCorrect: false },
        ],
        solution: 'FN vedtok 17 bærekraftsmål i 2015, med 169 delmål. De skal nås innen 2030 og er en felles arbeidsplan for å løse verdens største utfordringer.',
      },
    },
    {
      id: 'ol-8-4-text-rapportering',
      type: 'text',
      content: `### Bærekraftsrapportering

Stadig flere bedrifter rapporterer systematisk om sitt bærekraftsarbeid. Fra 2024 krever EU at store bedrifter rapporterer etter CSRD-direktivet (Corporate Sustainability Reporting Directive).

**ESG-rammeverket:**
- **E (Environmental)** - klimagassutslipp, energibruk, avfall, naturpåvirkning
- **S (Social)** - arbeidsforhold, mangfold, menneskerettigheter, lokalsamfunn
- **G (Governance)** - styring, antikorrupsjon, åpenhet, etiske retningslinjer

**Vesentlighetsanalyse:**
Bedriften identifiserer hvilke bærekraftstemaer som er viktigst gjennom en vesentlighetsanalyse. Denne ser på:
1. Hvilke temaer som har størst innvirkning på omverdenen
2. Hvilke temaer som har størst innvirkning på bedriftens økonomi
3. Hva interessentene mener er viktigst

**Rapporteringsrammeverk:**
- **GRI** (Global Reporting Initiative) - det mest brukte globale rammeverket
- **CSRD** - EUs nye lovpålagte rapporteringskrav
- **TCFD** - rammeverk for klimarisikorapportering`,
    },
    {
      id: 'ol-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-8-4-ex-2',
        number: '8.4.2',
        type: 'multiple-choice',
        task: 'Hva står ESG for?',
        options: [
          { id: 'a', text: 'Economic, Strategic, Global', isCorrect: false },
          { id: 'b', text: 'Environmental, Social, Governance', isCorrect: true },
          { id: 'c', text: 'Ethical, Sustainable, Green', isCorrect: false },
          { id: 'd', text: 'Energy, Safety, Growth', isCorrect: false },
        ],
        solution: 'ESG står for Environmental (miljø), Social (sosiale forhold) og Governance (styring). Det er et rammeverk som brukes til å vurdere bedrifters bærekraft og ansvarlighet på tvers av disse tre dimensjonene.',
      },
    },
    {
      id: 'ol-8-4-example-2',
      type: 'example',
      title: 'Eksempel: Vesentlighetsanalyse',
      problem: 'En norsk oppdrettsbedrift skal gjennomføre en vesentlighetsanalyse. Hvilke temaer bør de fokusere på?',
      solution: `En oppdrettsbedrift bør vurdere:

**Miljø (E):**
- Utslipp og forurensning fra anleggene (viktigst)
- Rømming av fisk og påvirkning på villfisk
- Bruk av fôrressurser og bærekraftig fôr
- Energibruk og klimagassutslipp

**Sosiale forhold (S):**
- Arbeidsforhold og HMS på anleggene
- Påvirkning på kystsamfunnene
- Matsikkerhet og produktkvalitet

**Styring (G):**
- Åpenhet om miljødata og produksjonsforhold
- Overholdelse av konsesjonsvilkår
- Interessentdialog med fiskere, lokalsamfunn og miljøorganisasjoner

Vesentlighetsanalysen vil sannsynligvis vise at miljøpåvirkning er det viktigste temaet for denne bransjen.`,
    },
    {
      id: 'ol-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-8-4-ex-3',
        number: '8.4.3',
        type: 'classic',
        task: 'Velg en bedrift eller bransje du kjenner til. Identifiser tre bærekraftsmål som er mest relevante for denne bedriften, og forklar hvordan bedriften kan bidra til hvert mål.',
        hints: ['Tenk på bedriftens kjernevirksomhet og dens største påvirkning på omgivelsene'],
        solution: 'Eksempel med en transportbedrift: Mål 8 (Anstendig arbeid) - sikre gode arbeidsforhold for sjåfører, rettferdige lønninger og sikkerhet. Mål 11 (Bærekraftige byer) - effektiv logistikk reduserer unødvendig trafikk og bidrar til bedre byluft. Mål 13 (Klimahandling) - bytte til elektriske lastebiler, optimalisere ruter for å redusere kjørelengde, bruke biodrivstoff der elektrisk ikke er mulig.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-8-4-ex-4',
        number: '8.4.4',
        type: 'classic',
        task: 'Noen kritikere mener at FNs bærekraftsmål er for vage og at bedrifter bruker dem til å pynte på fasaden uten å gjøre reelle endringer (SDG-washing). Drøft denne påstanden. Hva kan gjøres for at bærekraftsmålene faktisk fører til endring?',
        hints: ['Tenk på forskjellen mellom å sette et bærekraftsmål-ikon på årsrapporten og å faktisk endre forretningspraksis'],
        solution: 'Kritikken har noe for seg: Mange bedrifter velger ut de enkleste målene og knytter dem løst til eksisterende aktiviteter uten å gjøre reelle endringer. SDG-washing ligner på grønnvasking. For at målene skal føre til endring trengs: 1) Konkrete, målbare forpliktelser med tidsfrister. 2) Uavhengig kontroll og verifisering av fremgang. 3) Åpen rapportering med sammenlignbare data. 4) Lovpålagte krav til rapportering (som CSRD). 5) At bedrifter fokuserer på de målene der de har størst negativ påvirkning, ikke bare de som er lettest å kommunisere.',
      },
    },
    {
      id: 'ol-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-8-4-ex-5',
        number: '8.4.5',
        type: 'classic',
        task: 'Forklar hva en vesentlighetsanalyse er og hvorfor den er viktig for en bedrifts bærekraftsarbeid. Gi eksempel på hvordan resultatet kan se ulikt ut for en bank og et byggefirma.',
        solution: 'En vesentlighetsanalyse er en prosess der bedriften identifiserer hvilke bærekraftstemaer som er viktigst - både for bedriftens økonomi og for påvirkningen på omverdenen. Den er viktig fordi bedrifter ikke kan jobbe med alt, og må prioritere der de har størst påvirkning. For en bank: Viktigste temaer er ansvarlige utlån og investeringer (hvilke prosjekter finansieres), antikorrupsjon og hvitvasking, og personvern. For et byggefirma: Viktigste temaer er avfallshåndtering og materialvalg, energieffektive bygg, HMS og arbeidssikkerhet, og støy og miljøpåvirkning i nabolaget.',
      },
    },
    {
      id: 'ol-8-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **FNs 17 bærekraftsmål** er en global plan for bærekraftig utvikling innen 2030
- Næringslivet spiller en **nøkkelrolle** i å nå målene
- Bedrifter bør fokusere på de målene der de har **størst påvirkning**
- **ESG** (Environmental, Social, Governance) er rammeverket for bærekraftsvurdering
- **Bærekraftsrapportering** blir stadig viktigere og mer lovpålagt
- En **vesentlighetsanalyse** hjelper bedrifter å prioritere riktig

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| SDG | FNs bærekraftsmål (17 stk) |
| ESG | Miljø, sosiale forhold, styring |
| Vesentlighetsanalyse | Identifisere viktigste bærekraftstemaer |
| CSRD | EUs krav til bærekraftsrapportering |
| GRI | Globalt rapporteringsrammeverk |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.5: Etiske dilemmaer i næringslivet
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_8_5: TextbookChapter = {
  id: 'okonomi-ledelse-8-5',
  courseId: 'okonomi-ledelse',
  chapterNumber: '8.5',
  title: 'Etiske dilemmaer i næringslivet',
  description: 'Konkrete casestudier om korrupsjon, barnearbeid, miljøskader og varsling. Du lærer å analysere etiske dilemmaer fra flere perspektiver og trene på å ta begrunnede standpunkt.',
  estimatedMinutes: 24,
  competenceGoals: ['drøfte etiske dilemmaer i næringslivet'],
  keyTerms: [
    { term: 'Etisk dilemma', definition: 'En situasjon der man må velge mellom to eller flere handlingsalternativer som alle har både positive og negative sider.' },
    { term: 'Korrupsjon', definition: 'Misbruk av makt eller stilling for personlig vinning, for eksempel bestikkelser, smøring eller favorisering.' },
    { term: 'Barnearbeid', definition: 'Arbeid som fratar barn sin barndom, sitt potensial og sin verdighet, og som er skadelig for fysisk og mental utvikling.' },
    { term: 'Varsling', definition: 'Å melde fra om kritikkverdige forhold på arbeidsplassen, for eksempel lovbrudd, korrupsjon eller fare for liv og helse.' },
    { term: 'Åpenhetsloven', definition: 'Norsk lov fra 2022 som pålegger store bedrifter å gjøre aktsomhetsvurderinger for menneskerettigheter og arbeidsforhold i leverandørkjeden.' },
  ],
  content: [
    {
      id: 'ol-8-5-intro',
      type: 'text',
      content: `## Når det riktige valget er vanskelig

I næringslivet oppstår det regelmessig situasjoner der det ikke finnes noe enkelt svar på hva som er riktig. Et etisk dilemma oppstår når ulike verdier eller hensyn står mot hverandre, og alle handlingsalternativer har både positive og negative konsekvenser.

I dette kapittelet skal du jobbe med konkrete case som illustrerer vanlige etiske utfordringer i næringslivet. Du skal trene på å analysere dilemmaer fra ulike perspektiver og ta begrunnede standpunkt.

Temaer vi tar opp:
- Korrupsjon og smøring
- Barnearbeid i leverandørkjeden
- Miljøskader og profitt
- Varsling og ytringsfrihet`,
    },
    {
      id: 'ol-8-5-def-1',
      type: 'definition',
      title: 'Etisk dilemma',
      content: `Et **etisk dilemma** er en situasjon der man må velge mellom to eller flere handlingsalternativer som alle har både positive og negative sider. I et ekte dilemma finnes det ikke et alternativ som er «riktig» i alle henseender. Man må veie ulike verdier og hensyn mot hverandre. Etiske dilemmaer skiller seg fra vanlige problemer ved at det ikke finnes en teknisk eller enkel løsning.`,
    },
    {
      id: 'ol-8-5-example-1',
      type: 'example',
      title: 'Case 1: Korrupsjon i internasjonalt næringsliv',
      content: `**Situasjonen:**
En norsk bedrift ønsker å vinne en stor kontrakt i et land der bestikkelser er vanlig praksis. Den lokale samarbeidspartneren sier at det er nødvendig å betale «tilretteleggingsavgifter» til offentlige tjenestemenn for å få kontrakten. Uten denne betalingen vil kontrakten gå til en konkurrent.

**Argumenter for å betale:**
- Kontrakten er verdt hundrevis av millioner og sikrer arbeidsplasser i Norge
- I det aktuelle landet er dette «vanlig praksis»
- Konkurrentene betaler, og uten betaling taper bedriften

**Argumenter mot:**
- Korrupsjon er ulovlig etter norsk lov, også når det skjer i utlandet
- Det undergraver rettferdige konkurransevilkår
- Det opprettholder et system som skader det aktuelle landets utvikling
- Bedriften risikerer store bøter og omdømmetap

**Norsk lov:** Straffeloven forbyr bestikkelser av utenlandske tjenestemenn. Norske bedrifter kan straffeforfølges for korrupsjon begått i utlandet.`,
    },
    {
      id: 'ol-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-8-5-ex-1',
        number: '8.5.1',
        type: 'multiple-choice',
        task: 'En norsk bedrift opererer i et land der bestikkelser er vanlig. Er det lovlig for den norske bedriften å betale bestikkelser der?',
        options: [
          { id: 'a', text: 'Ja, hvis det er vanlig praksis i det landet', isCorrect: false },
          { id: 'b', text: 'Ja, hvis beløpet er lite', isCorrect: false },
          { id: 'c', text: 'Nei, norsk lov forbyr bestikkelser også i utlandet', isCorrect: true },
          { id: 'd', text: 'Det avhenger av om det lokale lovverket tillater det', isCorrect: false },
        ],
        solution: 'Straffeloven forbyr norske bedrifter å betale bestikkelser uansett hvor i verden det skjer. «Alle andre gjør det» eller «det er vanlig praksis» er ikke gyldige unnskyldninger etter norsk lov.',
      },
    },
    {
      id: 'ol-8-5-text-barnearbeid',
      type: 'text',
      title: 'Barnearbeid og leverandørkjeder',
      content: `### Barnearbeid - et globalt problem

ILO anslår at rundt 160 millioner barn er i barnearbeid globalt. Barnearbeid er mest utbredt innen jordbruk, gruvedrift, tekstilproduksjon og tjenesteyting.

**Hva sier loven?**
Norsk lov og FNs barnekonvensjon forbyr barnearbeid som er skadelig for barns helse, utvikling og utdanning. Åpenhetsloven fra 2022 pålegger store norske bedrifter å gjennomføre aktsomhetsvurderinger for menneskerettigheter i hele leverandørkjeden.

**Dilemmaet:**
I noen fattige land er barnearbeid den eneste inntektskilden for familier. Å plutselig kutte leverandører som bruker barnearbeid kan gjøre at barna ender i verre situasjoner - gatearbeid, prostitusjon eller sult. Samtidig kan man ikke akseptere at barn utnyttes.

**Hva kan bedrifter gjøre?**
- Kartlegge leverandørkjeden grundig
- Stille krav til leverandører, men følge opp med støtte
- Bidra til skolegang for barna som tas ut av arbeid
- Samarbeide med lokale organisasjoner
- Gradvis forbedring fremfor brå brudd`,
    },
    {
      id: 'ol-8-5-example-2',
      type: 'example',
      title: 'Case 2: Miljøskade vs. arbeidsplasser',
      problem: 'En fabrikk i en liten norsk kommune slipper ut mer forurensning enn tillatt. Fabrikken er kommunens største arbeidsgiver med 200 ansatte. Myndighetene truer med å stenge fabrikken hvis ikke utslippene reduseres. Å installere renseutstyr vil koste 50 millioner kroner, noe som kan true fabrikkens lønnsomhet.',
      solution: `**Interessenter og deres perspektiv:**
- **Ansatte:** Frykter å miste jobben. 200 familier berøres direkte.
- **Kommunen:** Risikerer fraflytting og tap av skatteinntekter.
- **Naboene:** Bekymret for helse og miljø i nærområdet.
- **Eierne:** Vil ikke investere 50 millioner uten garanti for lønnsomhet.
- **Miljøet:** Forurensningen skader lokal natur og kan påvirke drikkevannet.

**Mulige løsninger:**
1. Investere i renseutstyr - beholde alle jobber, men lavere profitt
2. Stenge fabrikken - null utslipp, men 200 mister jobben
3. Redusere produksjonen og gradvis investere - delvis løsning
4. Søke statlig støtte til grønn omstilling

**Etisk analyse:** Både pliktetikk (plikt til å følge loven) og konsekvensetikk (veie arbeidsplasser mot miljøskade) peker mot å finne en løsning som ivaretar både miljø og arbeidsplasser.`,
    },
    {
      id: 'ol-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-8-5-ex-2',
        number: '8.5.2',
        type: 'classic',
        task: 'Les Case 2 om miljøskade vs. arbeidsplasser. Drøft dilemmaet fra de ulike interessentenes perspektiv. Hva ville du anbefalt bedriften å gjøre? Begrunn svaret med etiske argumenter.',
        hints: ['Bruk de etiske retningene fra kapittel 8.1 i drøftingen'],
        solution: 'En god besvarelse drøfter dilemmaet fra minst tre perspektiver: ansatte (trenger jobbene), miljøet (har rett til beskyttelse) og samfunnet (trenger både jobber og rent miljø). Pliktetikken tilsier at loven må følges - utslippene er ulovlige. Konsekvensetikken krever at man veier konsekvensene: en tredjel løsning som gradvis investerer i renseutstyr, eventuelt med statlig støtte, gir best totalresultat. Dydsetikken spør hva slags bedrift vi vil være - en som tar snarveier, eller en som tar ansvar. Anbefaling: Investere i renseutstyr, eventuelt med statlig støtte, og bruke omstillingen som en mulighet til å bli mer konkurransedyktig på sikt.',
      },
    },
    {
      id: 'ol-8-5-def-2',
      type: 'definition',
      title: 'Varsling',
      content: `**Varsling** er å melde fra om kritikkverdige forhold på arbeidsplassen, for eksempel lovbrudd, korrupsjon, fare for liv og helse, eller alvorlige brudd på etiske retningslinjer. Arbeidsmiljøloven gir alle ansatte rett til å varsle, og forbyr gjengjeldelse mot varslere. En bedrift er pliktig til å ha rutiner for varsling.`,
    },
    {
      id: 'ol-8-5-example-3',
      type: 'example',
      title: 'Case 3: Varsleren',
      content: `**Situasjonen:**
Maria jobber i økonomiavdelingen i en mellomstor bedrift. Hun oppdager at salgsdirektøren har fakturert private utgifter som forretningsutgifter - til sammen over 300 000 kroner. Salgsdirektøren er kompisen til daglig leder og en nøkkelperson i bedriften.

**Marias alternativer:**
1. **Varsle internt** til daglig leder - men de er venner
2. **Varsle til styret** - kan føre til store konsekvenser
3. **Varsle eksternt** (Arbeidstilsynet, politiet) - mest dramatisk
4. **Konfrontere salgsdirektøren direkte** - risikabelt
5. **Ikke si noe** - trygt for Maria, men uetisk

**Rettigheter:**
Maria har lovfestet rett til å varsle uten å bli straffet for det. Bedriften skal ha varslingsrutiner som beskytter varsleren. Likevel viser forskning at mange varslere opplever negative konsekvenser i praksis.

**Saken illustrerer:** Varsling krever mot, men er avgjørende for å avdekke uetisk adferd. Gode varslingsrutiner beskytter både varsleren og bedriften.`,
    },
    {
      id: 'ol-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-8-5-ex-3',
        number: '8.5.3',
        type: 'multiple-choice',
        task: 'Hva sier arbeidsmiljøloven om varsling?',
        options: [
          { id: 'a', text: 'Ansatte bør bare varsle internt, aldri eksternt', isCorrect: false },
          { id: 'b', text: 'Ansatte har rett til å varsle, og arbeidsgiver kan ikke straffe dem for det', isCorrect: true },
          { id: 'c', text: 'Bare ledere har rett til å varsle', isCorrect: false },
          { id: 'd', text: 'Varsling er kun tillatt for alvorlige lovbrudd', isCorrect: false },
        ],
        solution: 'Arbeidsmiljøloven gir alle ansatte rett til å varsle om kritikkverdige forhold på arbeidsplassen. Loven forbyr gjengjeldelse mot varslere, og bedrifter med mer enn fem ansatte er pliktige til å ha rutiner for intern varsling.',
      },
    },
    {
      id: 'ol-8-5-text-apenhetsloven',
      type: 'text',
      content: `### Åpenhetsloven - nye krav til norske bedrifter

Åpenhetsloven trådte i kraft 1. juli 2022 og stiller krav til at store norske bedrifter skal:

1. **Gjennomføre aktsomhetsvurderinger** - kartlegge faktiske og mulige negative konsekvenser for menneskerettigheter og arbeidsforhold i leverandørkjeden
2. **Iverksette tiltak** for å stanse, forebygge eller begrense negative konsekvenser
3. **Informere offentligheten** om hva de finner og gjør
4. **Svare på henvendelser** fra publikum om hvordan de håndterer menneskerettigheter

Loven gjelder for bedrifter over en viss størrelse (over 50 ansatte og/eller over 70 millioner i omsetning). Den gjør det vanskeligere for bedrifter å si «vi visste ikke» om dårlige forhold i leverandørkjeden.`,
    },
    {
      id: 'ol-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-8-5-ex-4',
        number: '8.5.4',
        type: 'classic',
        task: 'Forklar kort hva åpenhetsloven krever av norske bedrifter. Hvorfor er denne loven viktig?',
        solution: 'Åpenhetsloven krever at store norske bedrifter gjennomfører aktsomhetsvurderinger for å kartlegge risiko for brudd på menneskerettigheter og arbeidsforhold i hele leverandørkjeden. De må iverksette tiltak og rapportere åpent om funnene. Loven er viktig fordi den ansvarliggjør bedrifter for hele verdikjeden - ikke bare egen virksomhet. Tidligere kunne bedrifter lukke øynene for dårlige arbeidsforhold hos underleverandører. Loven gir også forbrukere og organisasjoner rett til å stille spørsmål og kreve svar.',
      },
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-8-5-ex-5',
        number: '8.5.5',
        type: 'classic',
        task: 'Les Case 3 om varsleren Maria. Hva ville du gjort i Marias situasjon? Drøft de ulike alternativene og begrunn ditt valg. Ta hensyn til både etiske og praktiske argumenter.',
        hints: ['Tenk på hva som er riktig, men også hva som er realistisk. Hvordan kan Maria beskytte seg selv?'],
        solution: 'En god besvarelse vurderer alle alternativene: Å ikke si noe er det enkleste, men uetisk - det aksepterer underslag. Å konfrontere salgsdirektøren direkte kan fungere, men er risikabelt og dokumenterer ingenting. Å varsle internt til daglig leder er logisk, men problematisk fordi de er venner. Å varsle til styret er mest forsvarlig: styret har overordnet ansvar og bør behandle saken objektivt. Maria bør dokumentere funnene grundig først. Ekstern varsling kan være nødvendig hvis intern behandling svikter. Praktiske hensyn: Maria bør kjenne til varslingsrutinene, dokumentere alt skriftlig, og eventuelt søke råd fra en fagforening eller advokat.',
      },
    },
    {
      id: 'ol-8-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-8-5-ex-6',
        number: '8.5.6',
        type: 'classic',
        task: 'Lag ditt eget etiske dilemma knyttet til næringslivet. Beskriv situasjonen, identifiser de berørte partene, presenter minst to handlingsalternativer, og analyser dilemmaet fra både pliktetisk og konsekvensetisk perspektiv.',
        hints: ['Et godt dilemma har ingen opplagt løsning - begge alternativene har både fordeler og ulemper'],
        solution: 'Besvarelsen bør inneholde: 1) En realistisk situasjon fra næringslivet med minst to parter med motstridende interesser. 2) Minst to handlingsalternativer som begge har positive og negative sider. 3) Identifikasjon av berørte parter og deres perspektiv. 4) Pliktetisk analyse: Hvilke plikter har bedriften? Kan handlingen gjøres til en allmenn regel? 5) Konsekvensetisk analyse: Hva er konsekvensene av hvert alternativ for alle berørte? Eksempel: En IT-bedrift oppdager at deres AI-programvare brukes til overvåking av politiske aktivister i et autoritært land. Alternativ 1: Trekke seg ut av markedet. Alternativ 2: Fortsette og forsøke å påvirke innenfra.',
      },
    },
    {
      id: 'ol-8-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'ol-8-5-ex-7',
        number: '8.5.7',
        type: 'multiple-choice',
        task: 'Hva er et etisk dilemma?',
        options: [
          { id: 'a', text: 'Et problem som kan løses ved å følge loven', isCorrect: false },
          { id: 'b', text: 'En situasjon der man må velge mellom alternativer som alle har positive og negative sider', isCorrect: true },
          { id: 'c', text: 'Et spørsmål om hva som er mest lønnsomt', isCorrect: false },
          { id: 'd', text: 'En uenighet mellom ansatte og ledelse', isCorrect: false },
        ],
        solution: 'Et etisk dilemma er en situasjon der det ikke finnes noe opplagt riktig svar. Alle handlingsalternativer har både positive og negative sider, og man må veie ulike verdier og hensyn mot hverandre for å ta en beslutning.',
      },
    },
    {
      id: 'ol-8-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- Et **etisk dilemma** oppstår når ulike verdier og hensyn står mot hverandre
- **Korrupsjon** er ulovlig etter norsk lov, også i utlandet
- **Barnearbeid** i leverandørkjeder krever nyanserte løsninger
- **Varsling** er en lovfestet rettighet som er viktig for å avdekke kritikkverdige forhold
- **Åpenhetsloven** krever at bedrifter kartlegger menneskerettighetsrisiko i leverandørkjeden
- Etiske dilemmaer har sjelden enkle svar - det viktige er en grundig og balansert vurdering

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Etisk dilemma | Valg uten opplagt riktig svar |
| Korrupsjon | Misbruk av makt for personlig vinning |
| Varsling | Melde fra om kritikkverdige forhold |
| Åpenhetsloven | Krav om aktsomhetsvurdering i leverandørkjeden |
| Aktsomhetsvurdering | Kartlegging av risiko for menneskerettighetsbrudd |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const OKONOMI_LEDELSE_DEL8_CHAPTERS = [
  CHAPTER_OKONOMI_LEDELSE_8_1,
  CHAPTER_OKONOMI_LEDELSE_8_2,
  CHAPTER_OKONOMI_LEDELSE_8_3,
  CHAPTER_OKONOMI_LEDELSE_8_4,
  CHAPTER_OKONOMI_LEDELSE_8_5,
];
