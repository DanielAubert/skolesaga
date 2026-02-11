/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Samfunnsøkonomi 1 VG2 - Seksjon 8: Økonomi og bærekraft
 * Kapittel 8.1–8.5
 *
 * Følger LK20 læreplan for samfunnsøkonomi 1
 * Kompetansemål: reflektere over sammenhengen mellom økonomisk aktivitet og miljøutfordringer
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Markedssvikt og eksterne virkninger
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_8_1: TextbookChapter = {
  id: 'samfokonomi-1-8-1',
  courseId: 'samfokonomi-1',
  chapterNumber: '8.1',
  title: 'Markedssvikt og eksterne virkninger',
  description: 'Eksternaliteter, kollektive goder, allmenningens tragedie og hvorfor markedet ikke alltid gir samfunnsøkonomisk effektive løsninger.',
  estimatedMinutes: 20,
  competenceGoals: [
    'reflektere over sammenhengen mellom økonomisk aktivitet og miljøutfordringer',
    'forklare begrepet markedssvikt og gi eksempler på eksterne virkninger',
    'drøfte forskjellen mellom private og samfunnsmessige kostnader',
  ],
  content: [
    {
      id: 'soe-8-1-intro',
      type: 'text',
      content: `## Introduksjon

I de foregående kapitlene har vi sett hvordan markedet kan fordele ressurser effektivt gjennom pris- og konkurransemekanismene. Men markedet fungerer ikke alltid perfekt. Noen ganger fører markedsmekanismen til utfall som ikke er optimale for samfunnet. Dette kaller vi **markedssvikt**.

En av de viktigste formene for markedssvikt er **eksterne virkninger** (eksternaliteter). Når en bedrift forurenser, bærer ikke bedriften selv alle kostnadene – samfunnet gjør det. Når noen vaksinerer seg, får ikke bare den vaksinerte bedre helse – alle rundt dem nyter godt av lavere smittefare. Slike virkninger som treffer andre enn dem som gjennomfører handlingen, er kjernen i dette kapittelet.

Å forstå markedssvikt er avgjørende for å vurdere når og hvordan staten bør gripe inn i økonomien.`,
    },
    {
      id: 'soe-8-1-def-markedssvikt',
      type: 'definition',
      title: 'Markedssvikt',
      content: `**Markedssvikt** oppstår når det frie markedet ikke klarer å fordele ressursene på en samfunnsøkonomisk effektiv måte. Det betyr at markedsutfallet avviker fra det som ville maksimert den samlede velferden i samfunnet.

De viktigste årsakene til markedssvikt er:
- **Eksterne virkninger** (eksternaliteter)
- **Kollektive goder** (fellesgoder)
- **Ufullstendig konkurranse** (monopol, oligopol)
- **Asymmetrisk informasjon** (den ene parten vet mer enn den andre)
- **Fellesressurser** (allmenningens tragedie)`,
    },
    {
      id: 'soe-8-1-eksternaliteter',
      type: 'text',
      content: `## Eksterne virkninger (eksternaliteter)

En ekstern virkning oppstår når en økonomisk handling påvirker tredjeparter som ikke er direkte involvert i transaksjonen, uten at dette reflekteres i prisen.

### Negative eksterne virkninger

Negative eksternaliteter påfører andre kostnader uten kompensasjon:

- **Forurensning fra fabrikker**: En fabrikk slipper ut gift i en elv. Bøndene nedstrøms får ødelagt avlingene, men fabrikken betaler ikke for dette.
- **Trafikkstøy**: Biler skaper støy som reduserer livskvaliteten for folk langs veien.
- **Røyking**: Passiv røyking gir helseproblemer for omgivelsene.
- **Klimagassutslipp**: CO₂-utslipp bidrar til global oppvarming som rammer hele verden.

### Positive eksterne virkninger

Positive eksternaliteter gir andre fordeler uten at den som skaper dem, blir belønnet:

- **Utdanning**: Høyt utdannede mennesker bidrar til innovasjon og produktivitet for hele samfunnet.
- **Vaksinering**: Når mange vaksinerer seg, oppnår vi flokkimmunitet.
- **Forskning**: Ny kunnskap kan brukes av mange.
- **Birøkt**: En birøkter hjelper naboens avlinger gjennom pollinering.`,
    },
    {
      id: 'soe-8-1-def-eksternalitet',
      type: 'definition',
      title: 'Eksternalitet (ekstern virkning)',
      content: `En **eksternalitet** er en utilsiktet konsekvens av en økonomisk aktivitet som påvirker tredjeparter utenfor markedstransaksjonen.

- **Negativ eksternalitet**: Påfører andre en kostnad (f.eks. forurensning).
- **Positiv eksternalitet**: Gir andre en fordel (f.eks. vaksinering).

Når eksternaliteter er til stede, avviker de **private kostnadene/gevinstene** fra de **samfunnsmessige kostnadene/gevinstene**.`,
    },
    {
      id: 'soe-8-1-example-privat-samfunn',
      type: 'example',
      title: 'Eksempel: Private vs. samfunnsmessige kostnader',
      problem: 'En sementfabrikk produserer sement til en privat kostnad på 500 kr per tonn. Produksjonen forårsaker forurensning som gir helseplager og skader på avlinger i nærheten. Disse eksterne kostnadene er beregnet til 150 kr per tonn. Hva er den samfunnsøkonomiske kostnaden per tonn sement?',
      solution: `**Løsning:**

Vi skiller mellom privat kostnad og samfunnsmessig kostnad:

**Privat kostnad** = 500 kr/tonn
(Det fabrikken faktisk betaler for råvarer, arbeidskraft, energi osv.)

**Ekstern kostnad** = 150 kr/tonn
(Kostnadene som forurensningen påfører samfunnet: helseutgifter, tapte avlinger osv.)

**Samfunnsmessig kostnad** = Privat kostnad + Ekstern kostnad
**Samfunnsmessig kostnad** = 500 + 150 = **650 kr/tonn**

Markedsprisen reflekterer kun den private kostnaden på 500 kr. Derfor produseres det mer sement enn det som er samfunnsøkonomisk optimalt. Forskjellen på 150 kr representerer den ubetalte kostnaden som påføres samfunnet.`,
    },
    {
      id: 'soe-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-8-1-ex-1',
        number: '8.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en negativ eksternalitet?',
        options: [
          { id: 'a', text: 'En kostnad som påføres tredjeparter som ikke er del av transaksjonen', isCorrect: true },
          { id: 'b', text: 'En kostnad som bedriften betaler til staten i form av skatt', isCorrect: false },
          { id: 'c', text: 'Et tap som oppstår når etterspørselen synker', isCorrect: false },
          { id: 'd', text: 'En ulempe for bedriften ved økt konkurranse', isCorrect: false },
        ],
        hints: ['Tenk på hvem som bærer kostnaden – er det den som forurenser, eller noen utenforstående?'],
        solution: 'En negativ eksternalitet er en kostnad som påføres tredjeparter som ikke er del av transaksjonen. Fabrikken som forurenser betaler ikke selv for helseskadene – det gjør innbyggerne og helsevesenet. Derfor er forurensningen en ekstern kostnad.',
      },
    },
    {
      id: 'soe-8-1-kollektive-goder',
      type: 'text',
      content: `## Kollektive goder

Et kollektivt gode (fellesgode) har to spesielle egenskaper som gjør at markedet ikke kan tilby dem effektivt:

### Ikke-rivaliserende
Når én person bruker godet, reduseres ikke verdien for andre. Et fyrtårns lys lyser like sterkt uansett hvor mange skip som ser det.

### Ikke-ekskluderbart
Det er vanskelig eller umulig å hindre noen i å bruke godet. Du kan ikke stenge noen ute fra å nyte godt av nasjonalt forsvar.

### Eksempler på kollektive goder
- Nasjonalt forsvar
- Gateopplysning
- Ren luft
- Grunnforskning
- Fyrtårn

### Gratispassasjerproblemet
Fordi kollektive goder er ikke-ekskluderbare, kan folk nyte godt av dem uten å betale. Dette kalles **gratispassasjerproblemet**. Hvis alle tenker «la andre betale», blir godet aldri produsert. Derfor må staten ofte stå for finansieringen gjennom skatteinntekter.`,
    },
    {
      id: 'soe-8-1-def-kollektivt-gode',
      type: 'definition',
      title: 'Kollektivt gode',
      content: `Et **kollektivt gode** (fellesgode) er et gode som er:
1. **Ikke-rivaliserende**: Én persons bruk reduserer ikke tilgjengeligheten for andre.
2. **Ikke-ekskluderbart**: Man kan ikke hindre noen i å nyte godt av det.

Fordi private aktører ikke kan tjene penger på å tilby kollektive goder (gratispassasjerproblemet), må de som regel finansieres og tilbys av det offentlige.`,
    },
    {
      id: 'soe-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-8-1-ex-2',
        number: '8.1.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket av følgende er et eksempel på et kollektivt gode?',
        options: [
          { id: 'a', text: 'Nasjonalt forsvar', isCorrect: true },
          { id: 'b', text: 'En bil', isCorrect: false },
          { id: 'c', text: 'En pizza', isCorrect: false },
          { id: 'd', text: 'Et kinobesøk', isCorrect: false },
        ],
        hints: ['Et kollektivt gode er både ikke-rivaliserende og ikke-ekskluderbart.'],
        solution: 'Nasjonalt forsvar er et kollektivt gode fordi det beskytter alle innbyggere uavhengig av om de betaler skatt (ikke-ekskluderbart), og én persons beskyttelse reduserer ikke andres (ikke-rivaliserende). Biler og pizza er private goder (rivaliserende og ekskluderbare), og kinobesøk er et klubbgode (ekskluderbart, men delvis ikke-rivaliserende).',
      },
    },
    {
      id: 'soe-8-1-fellesressurser',
      type: 'text',
      content: `## Fellesressurser og allmenningens tragedie

Fellesressurser er goder som er **rivaliserende** (bruk av én person reduserer tilgjengeligheten for andre), men **ikke-ekskluderbare** (det er vanskelig å hindre folk i å bruke dem).

### Eksempler
- Fisk i havet
- Ren luft
- Grunnvann
- Beiteområder

### Allmenningens tragedie
Begrepet ble popularisert av Garrett Hardin i 1968. Når mange bruker en felles ressurs uten regulering, vil hver enkelt ha insentiv til å bruke mest mulig. Resultatet er overutnyttelse og ødeleggelse av ressursen.

**Klassisk eksempel:** En felles beiteeng i en landsby. Hver bonde tjener på å ha flere kyr, men kostnaden ved overbeiting deles av alle. Resultatet er at engen beites ned.

**Moderne eksempler:**
- Overfiske i internasjonale farvann
- Overutslipp av CO₂ til atmosfæren
- Nedtapping av grunnvannsreservoarer

### Løsninger
1. **Offentlig regulering**: Kvoter, lisenser, forbud
2. **Privatisering**: Eiendomsrett til ressursen
3. **Fellesstyring**: Lokale avtaler mellom brukerne (jf. Elinor Ostroms forskning)`,
    },
    {
      id: 'soe-8-1-example-torskekrise',
      type: 'example',
      title: 'Eksempel: Allmenningens tragedie og torskebestanden',
      problem: 'Forklar hvordan allmenningens tragedie kan forklare kollapsen i torskebestanden utenfor Newfoundland i Canada på 1990-tallet.',
      solution: `**Løsning:**

**Bakgrunn:**
Newfoundland-torsken var en av verdens rikeste fiskeressurser i århundrer. På 1960-tallet begynte industriell trålfiske i stor skala.

**Allmenningens tragedie i praksis:**
1. **Ingen eiendomsrett**: Torsken i havet tilhørte ingen – den var en fellesressurs.
2. **Individuelt rasjonelt**: Hvert rederi hadde insentiv til å fiske mest mulig – «tar ikke vi fisken, gjør noen andre det».
3. **Kollektivt irrasjonelt**: Alle fisket for mye, og bestanden kollapset.
4. **Resultat**: I 1992 ble fiskeriet stengt helt. Over 40 000 mistet jobben.

**Hvorfor markedet sviktet:**
- Prisen på torsk reflekterte ikke at bestanden var i fare.
- Ingen måtte betale for den skaden overfiske påførte bestanden.
- Kortsiktig profitt trumfet langsiktig bærekraft.

**Lærdommen:**
Uten regulering (kvoter, fiskeforbud, overvåking) kan fellesressurser ødelegges. Norge har håndtert lignende utfordringer bedre gjennom streng kvoteforvaltning av norsk-arktisk torsk.`,
    },
    {
      id: 'soe-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-8-1-ex-3',
        number: '8.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva «gratispassasjerproblemet» er, og gi et konkret eksempel på hvordan det kan hindre tilbudet av et kollektivt gode.',
        hints: ['Tenk på hva som skjer når ingen kan ekskluderes fra å bruke et gode.'],
        solution: 'Gratispassasjerproblemet oppstår fordi ingen kan ekskluderes fra å bruke et kollektivt gode. Alle har insentiv til å la andre betale – hvorfor betale for noe du får gratis? Eksempel: Et nabolag ønsker gatebelysning. Hver husstand tenker «naboen betaler nok», og resultatet er at ingen betaler og det blir mørkt. Derfor må kommunen finansiere gatebelysning gjennom skatter – alle tvinges til å bidra. Uten offentlig finansiering ville det blitt for lite gatebelysning i forhold til det som er samfunnsøkonomisk optimalt.',
      },
    },
    {
      id: 'soe-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-8-1-ex-4',
        number: '8.1.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Allmenningens tragedie beskriver en situasjon der:',
        options: [
          { id: 'a', text: 'En fellesressurs overutnyttes fordi ingen eier den', isCorrect: true },
          { id: 'b', text: 'Staten regulerer markedet for strengt', isCorrect: false },
          { id: 'c', text: 'Bedrifter produserer for lite av et gode', isCorrect: false },
          { id: 'd', text: 'Forbrukerne ikke har nok informasjon', isCorrect: false },
        ],
        solution: 'Allmenningens tragedie beskriver hvordan en fellesressurs (f.eks. fisk i havet, beiteeng) overutnyttes når ingen eier den og alle har fritt tilgang. Hver enkelt har insentiv til å bruke mest mulig, men resultatet er at ressursen ødelegges – til alles ulempe.',
      },
    },
    {
      id: 'soe-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-8-1-ex-5',
        number: '8.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvordan negative eksterne virkninger fører til at markedet produserer for mye av et gode sett fra et samfunnsøkonomisk perspektiv. Bruk begrepene privat kostnad, ekstern kostnad og samfunnsmessig kostnad i svaret ditt.',
        hints: ['Tenk på hva som skjer med tilbudet når produsenten ikke betaler alle kostnader.'],
        solution: 'Når det finnes negative eksterne virkninger, er den private kostnaden lavere enn den samfunnsmessige kostnaden. Bedriften betaler bare sine egne kostnader (råvarer, lønn, energi), men ikke de eksterne kostnadene (forurensning, helseskader, miljøødeleggelse). Fordi bedriften baser sine produksjonsbeslutninger på privat kostnad, produserer den mer enn det som er optimalt for samfunnet. Prisen blir for lav (reflekterer ikke de fulle kostnadene) og mengden for høy. Den samfunnsøkonomisk optimale mengden ville vært der marginal samfunnsmessig kostnad = marginal nytte. For å korrigere dette kan staten innføre avgifter (Pigou-skatt) som tvinger bedriften til å internalisere de eksterne kostnadene.',
      },
    },
    {
      id: 'soe-8-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-8-1-ex-6',
        number: '8.1.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av følgende er en positiv eksternalitet?',
        options: [
          { id: 'a', text: 'En nabo planter frukttrær som også gir bier mat', isCorrect: true },
          { id: 'b', text: 'En fabrikk slipper ut røyk som gir naboene astma', isCorrect: false },
          { id: 'c', text: 'En kunde kjøper en vare til markedspris', isCorrect: false },
          { id: 'd', text: 'En bedrift betaler lønn til sine ansatte', isCorrect: false },
        ],
        solution: 'Frukttrær som gir bier mat er en positiv eksternalitet fordi naboen (birøkteren) får en fordel uten å betale for den. Bedriften som betaler lønn og kunden som kjøper til markedspris er vanlige markedstransaksjoner uten eksternaliteter. Fabrikkrøyk som gir astma er en negativ eksternalitet.',
      },
    },
    {
      id: 'soe-8-1-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering av kapittel 8.1

- **Markedssvikt** oppstår når markedet ikke fordeler ressurser effektivt.
- **Negative eksternaliteter** påfører tredjeparter kostnader (forurensning, støy).
- **Positive eksternaliteter** gir tredjeparter fordeler (utdanning, vaksinering).
- **Kollektive goder** er ikke-rivaliserende og ikke-ekskluderbare, og tilbys derfor sjelden av private aktører.
- **Fellesressurser** kan overutnyttes (allmenningens tragedie) uten regulering.
- Staten har en rolle i å korrigere markedssvikt gjennom avgifter, reguleringer og offentlig tilbud av goder.`,
    },
  ],
  exercises: [
    {
      id: 'soe-8-1-samle-1',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Gjør rede for tre ulike former for markedssvikt. For hver form: definer begrepet, gi et konkret eksempel, og forklar hvordan staten kan korrigere svikten.',
      solution: '1) Negative eksternaliteter: Kostnader påført tredjeparter. Eksempel: CO₂-utslipp fra industri som forårsaker klimaendringer. Korrigering: CO₂-avgift tvinger bedrifter til å betale for utslippene. 2) Kollektive goder: Goder som er ikke-rivaliserende og ikke-ekskluderbare. Eksempel: Nasjonalt forsvar. Korrigering: Staten finansierer forsvaret gjennom skatt, siden ingen private aktører vil tilby det (gratispassasjerproblemet). 3) Fellesressurser: Goder som overutnyttes uten regulering. Eksempel: Overfiske. Korrigering: Fiskekvoter og reguleringer sikrer bærekraftig bruk.',
    },
    {
      id: 'soe-8-1-samle-2',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Klimagassutslipp kan beskrives som «verdens største markedssvikt». Drøft dette utsagnet ved hjelp av begrepene eksternalitet, fellesressurs og gratispassasjerproblemet.',
      solution: 'Klimagassutslipp er en negativ eksternalitet – de som slipper ut CO₂ betaler ikke for skadene klimaendringene forårsaker globalt. Atmosfæren er en fellesressurs – alle kan bruke den som «søppelplass» for utslipp, men ingen eier den. Allmenningens tragedie: Hvert land har insentiv til å slippe ut mye (billig energi gir økonomisk vekst), men resultatet er at alle lider. Gratispassasjerproblemet: Hvert land fristes til å la andre kutte utslippene – «hvorfor skal vi betale hvis andre ikke gjør det?» Derfor er det vanskelig å oppnå internasjonale klimaavtaler. Konklusjon: Utslipp inneholder alle de sentrale formene for markedssvikt samtidig, noe som gjør det ekstremt vanskelig å løse uten internasjonalt samarbeid og regulering.',
    },
  ],
};

// ============================================================================
// Kapittel 8.2: Miljøøkonomi
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_8_2: TextbookChapter = {
  id: 'samfokonomi-1-8-2',
  courseId: 'samfokonomi-1',
  chapterNumber: '8.2',
  title: 'Miljøøkonomi',
  description: 'Virkemidler for å håndtere forurensning og miljøproblemer: avgifter, omsettelige kvoter og nytte-kostnadsanalyser.',
  estimatedMinutes: 20,
  competenceGoals: [
    'reflektere over sammenhengen mellom økonomisk aktivitet og miljøutfordringer',
    'vurdere ulike virkemidler for å korrigere negative eksterne virkninger',
    'gjennomføre enkle nytte-kostnadsanalyser knyttet til miljøtiltak',
  ],
  content: [
    {
      id: 'soe-8-2-intro',
      type: 'text',
      content: `## Introduksjon

Miljøøkonomi handler om å bruke økonomiske verktøy for å løse miljøproblemer. Kjernen er enkel: Forurensning er en negativ eksternalitet. Hvis vi kan få forurenserne til å betale for skadene de påfører samfunnet, vil de ha insentiv til å forurense mindre.

Men hvordan gjør vi dette i praksis? I dette kapittelet ser vi på de viktigste virkemidlene: miljøavgifter (Pigou-skatt), omsettelige utslippskvoter (kvotehandel), direkte regulering og nytte-kostnadsanalyse.`,
    },
    {
      id: 'soe-8-2-def-pigou',
      type: 'definition',
      title: 'Pigou-skatt (miljøavgift)',
      content: `En **Pigou-skatt** er en avgift som tilsvarer den eksterne kostnaden ved en aktivitet. Avgiften er oppkalt etter økonomen Arthur Pigou (1877–1959).

**Formålet** er å internalisere eksternaliteten – det vil si å tvinge produsenten til å ta hensyn til den fulle samfunnsmessige kostnaden i sine beslutninger.

Når avgiften er lik den marginale eksterne kostnaden, vil markedet produsere den samfunnsøkonomisk optimale mengden.`,
    },
    {
      id: 'soe-8-2-avgifter-tekst',
      type: 'text',
      content: `## Miljøavgifter i praksis

Miljøavgifter er det mest brukte økonomiske virkemiddelet mot forurensning.

### Fordeler med avgifter
- **Kostnadseffektivt**: Bedrifter som kan redusere utslipp billig, gjør det. De som har dyre renseteknologier, betaler heller avgiften.
- **Inntekter til staten**: Avgiftsinntektene kan brukes til miljøtiltak eller skattelettelser.
- **Insentiv til innovasjon**: Bedrifter har vedvarende insentiv til å finne renere produksjonsmetoder.
- **Fleksibilitet**: Bedriftene velger selv hvordan de vil tilpasse seg.

### Ulemper med avgifter
- **Vanskelig å sette riktig nivå**: Hva er den nøyaktige eksterne kostnaden?
- **Usikkerhet om utslippsreduksjon**: Vi vet ikke nøyaktig hvor mye utslippene vil falle.
- **Kan ramme konkurranseevnen**: Bedrifter kan flytte produksjonen til land uten avgifter (karbonlekkasje).
- **Fordelingseffekter**: Avgifter på drivstoff rammer folk i distriktene hardere.

### Eksempler på norske miljøavgifter
- **CO₂-avgift** (innført 1991): En av verdens høyeste
- **NOₓ-avgift**: Avgift på utslipp av nitrogenoksider
- **Svovelavgift**: Avgift på svovel i drivstoff
- **Avgift på HFK-gasser**: Sterke klimagasser brukt i kjøling`,
    },
    {
      id: 'soe-8-2-example-co2avgift',
      type: 'example',
      title: 'Eksempel: CO₂-avgiften som Pigou-skatt',
      problem: 'Norge innførte CO₂-avgift i 1991. Forklar hvordan denne fungerer som en Pigou-skatt, og drøft om avgiftsnivået er «riktig».',
      solution: `**Løsning:**

**Pigou-skatt-mekanismen:**
CO₂-avgiften legges på utslipp av klimagasser. Den tvinger bedrifter og forbrukere til å betale for den skaden CO₂ forårsaker gjennom klimaendringer.

**Internalisering:**
- Uten avgift: Bedriften betaler 0 kr for CO₂-utslipp. Prisen på varer reflekterer ikke klimaskaden.
- Med avgift: Bedriften betaler ca. 950 kr per tonn CO₂ (2024-nivå for petroleumssektoren). Denne kostnaden legges inn i prisene.
- Forbrukere og bedrifter tilpasser seg: bruker mindre fossilt drivstoff, investerer i fornybar energi.

**Er nivået riktig?**
Den «riktige» Pigou-skatten er lik den marginale eksterne kostnaden. Estimater for klimaskadekostnad per tonn CO₂ varierer enormt:
- Lavt estimat: ca. 500 kr/tonn
- Sentralt estimat: ca. 1500–3000 kr/tonn
- Høyt estimat: over 5000 kr/tonn

Norges avgift er trolig lavere enn den reelle klimaskadekostnaden, men høyere enn i de fleste andre land.`,
    },
    {
      id: 'soe-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-8-2-ex-1',
        number: '8.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedformålet med en Pigou-skatt?',
        options: [
          { id: 'a', text: 'Å tvinge produsenten til å betale de eksterne kostnadene ved sin virksomhet', isCorrect: true },
          { id: 'b', text: 'Å øke statens inntekter mest mulig', isCorrect: false },
          { id: 'c', text: 'Å straffe bedrifter som forurenser', isCorrect: false },
          { id: 'd', text: 'Å forby all forurensning', isCorrect: false },
        ],
        hints: ['Pigou-skatten handler om å internalisere eksternaliteter.'],
        solution: 'En Pigou-skatt skal internalisere eksterne kostnader – altså tvinge produsenten til å betale for den skaden produksjonen påfører samfunnet. Når avgiften er lik den marginale eksterne kostnaden, vil markedet oppnå et samfunnsøkonomisk optimalt resultat.',
      },
    },
    {
      id: 'soe-8-2-kvotehandel',
      type: 'text',
      content: `## Omsettelige utslippskvoter (cap-and-trade)

Et alternativ til avgifter er omsettelige kvoter. Myndighetene setter et tak (cap) på totale utslipp og deler ut eller auksjonerer bort utslippstillatelser. Bedriftene kan så handle (trade) med kvotene seg imellom.

### Slik fungerer det
1. **Myndighetene setter et tak** for totale utslipp (f.eks. 100 millioner tonn CO₂).
2. **Kvoter deles ut** – hver kvote gir rett til å slippe ut 1 tonn CO₂.
3. **Bedrifter som kan kutte billig**, selger overskuddskvoter.
4. **Bedrifter med dyre kutt**, kjøper kvoter i stedet.
5. **Kvoteprisen** bestemmes av tilbud og etterspørsel i markedet.

### Fordeler
- **Sikkerhet om utslippsnivå**: Taket garanterer at totale utslipp ikke overstiger grensen.
- **Kostnadseffektivt**: Kuttene skjer der de er billigst.
- **Prismekanisme**: Kvoteprisen gir et tydelig signal om kostnaden ved utslipp.

### Ulemper
- **Volatil kvotepris**: Prisen kan svinge mye og skape usikkerhet.
- **Komplekst system**: Krever overvåking, rapportering og kontroll.
- **Gratistildeling**: Hvis kvoter deles ut gratis, kan det gi «windfall profits».
- **Lobbyvirksomhet**: Bransjer kjemper for å få flere gratiskvoter.`,
    },
    {
      id: 'soe-8-2-def-kvotehandel',
      type: 'definition',
      title: 'Omsettelige utslippskvoter (cap-and-trade)',
      content: `Et **kvotehandelssystem** er et markedsbasert virkemiddel der:
1. Myndighetene setter et **tak** (cap) på totale utslipp.
2. Utslippstillatelser (kvoter) fordeles mellom aktørene.
3. Aktører kan **handle** (trade) kvoter med hverandre.

Bedrifter som kan kutte utslipp billig, selger kvoter til bedrifter der kutt er dyrt. Slik minimeres totalkostnaden for å nå utslippsmålet.`,
    },
    {
      id: 'soe-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-8-2-ex-2',
        number: '8.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom en miljøavgift og omsettelige kvoter som virkemiddel mot forurensning. Hva er den viktigste fordelen med hvert system?',
        hints: ['Tenk på hva som er sikkert og usikkert med hvert system.'],
        solution: 'Miljøavgift: Staten setter prisen på utslipp (avgiften), men vet ikke nøyaktig hvor mye utslippene vil synke. Viktigste fordel: prisforutsigbarhet for bedriftene. Omsettelige kvoter: Staten setter mengden utslipp (taket), men vet ikke hva prisen per kvote blir. Viktigste fordel: sikkerhet om at utslippsmålet nås. Begge er kostnadseffektive fordi de lar bedrifter tilpasse seg fleksibelt. Valget mellom dem avhenger av om myndighetene prioriterer prissikkerhet (avgift) eller sikkerhet om utslippsnivå (kvoter).',
      },
    },
    {
      id: 'soe-8-2-nka',
      type: 'text',
      content: `## Nytte-kostnadsanalyse

Nytte-kostnadsanalyse (NKA) er et verktøy for å vurdere om et miljøtiltak er samfunnsøkonomisk lønnsomt. Vi sammenligner den samlede nytten av tiltaket med de samlede kostnadene.

### Prinsipp
Et tiltak bør gjennomføres hvis:

**Total nytte > Total kostnad**

### Utfordringer med NKA for miljø
- **Verdien av natur**: Hvordan setter vi en kroneverdi på en ren innsjø eller truede arter?
- **Langsiktige effekter**: Klimaendringer rammer mest om 50–100 år. Hvilken diskonteringsrente skal brukes?
- **Usikkerhet**: Vi kjenner ikke alle konsekvensene av miljøødeleggelse.
- **Irreversibilitet**: Noen skader kan ikke repareres uansett pris.
- **Fordelingseffekter**: Hvem bærer kostnadene og hvem høster nytten?

### Verdsettingsmetoder
Økonomer har utviklet metoder for å verdsette miljøgoder:

- **Betalingsvillighet**: Hva er folk villige til å betale for ren luft?
- **Reisekostnadsmetoden**: Hva bruker folk på å reise til et naturområde?
- **Hedoniske priser**: Hvor mye mer koster boliger ved ren innsjø vs. forurenset?
- **Betinget verdsetting**: Spørreundersøkelser om betalingsvillighet.`,
    },
    {
      id: 'soe-8-2-example-nka',
      type: 'example',
      title: 'Eksempel: Enkel nytte-kostnadsanalyse',
      problem: 'En kommune vurderer å bygge et renseanlegg for å stoppe utslipp i en elv. Anlegget koster 50 millioner kroner å bygge og 5 millioner per år å drifte. Nytten er beregnet til: reduserte helsekostnader 8 mill./år, økt turisme 3 mill./år, og økt eiendomsverdi 2 mill./år. Analyseperioden er 20 år. Er tiltaket lønnsomt? (Se bort fra diskontering.)',
      solution: `**Løsning:**

**Kostnader (20 år):**
- Bygging: 50 mill. kr
- Drift: 5 mill. × 20 = 100 mill. kr
- **Total kostnad = 150 mill. kr**

**Nytte (20 år):**
- Reduserte helsekostnader: 8 mill. × 20 = 160 mill. kr
- Økt turisme: 3 mill. × 20 = 60 mill. kr
- Økt eiendomsverdi: 2 mill. × 20 = 40 mill. kr
- **Total nytte = 260 mill. kr**

**Netto nytte = 260 – 150 = 110 mill. kr**

**Konklusjon:** Tiltaket er samfunnsøkonomisk lønnsomt fordi nytten (260 mill.) overstiger kostnadene (150 mill.). I tillegg kommer ikke-kvantifiserbare fordeler som bedre livskvalitet og biologisk mangfold.

**Merknad:** I en reell analyse ville vi diskontert fremtidige verdier for å ta hensyn til at en krone i dag er verdt mer enn en krone om 20 år.`,
    },
    {
      id: 'soe-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-8-2-ex-3',
        number: '8.2.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En viktig utfordring med nytte-kostnadsanalyse av miljøtiltak er:',
        options: [
          { id: 'a', text: 'At det er vanskelig å sette en kronevert på miljøgoder som ren luft og artsmangfold', isCorrect: true },
          { id: 'b', text: 'At vi alltid kjenner alle kostnader nøyaktig', isCorrect: false },
          { id: 'c', text: 'At nytten alltid overstiger kostnadene', isCorrect: false },
          { id: 'd', text: 'At staten ikke har lov til å gjennomføre slike analyser', isCorrect: false },
        ],
        solution: 'Den største utfordringen med NKA for miljø er å verdsette miljøgoder i kroner. Hva er verdien av ren luft, biologisk mangfold eller et vakkert landskap? Ulike metoder gir ulike svar, og det er alltid verdier som ikke kan fanges opp i en økonomisk analyse.',
      },
    },
    {
      id: 'soe-8-2-direkte-regulering',
      type: 'text',
      content: `## Direkte regulering

Ved siden av økonomiske virkemidler bruker myndighetene også direkte regulering:

### Typer direkte regulering
- **Utslippsgrenser**: Maksimalt tillatt utslipp per bedrift.
- **Teknologikrav**: Krav om å bruke best tilgjengelig teknologi.
- **Forbud**: Totalforbud mot visse stoffer (f.eks. KFK-gasser).
- **Standarder**: Krav til drivstofforbruk, energieffektivitet osv.

### Fordeler
- Enkelt og tydelig
- Garanterer at grenser overholdes
- Effektivt mot svært skadelige stoffer

### Ulemper
- Ikke kostnadseffektivt (alle må kutte like mye, uavhengig av kostnad)
- Gir ikke insentiv til å gjøre mer enn minstekravet
- Krever mye informasjon hos myndighetene`,
    },
    {
      id: 'soe-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-8-2-ex-4',
        number: '8.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bedrift slipper ut 1000 tonn CO₂ per år. Det koster 200 kr per tonn å rense de første 500 tonnene, og 800 kr per tonn å rense de siste 500. CO₂-avgiften er 500 kr per tonn. Hvor mange tonn vil bedriften velge å rense, og hvor mye vil den betale i avgift? Forklar logikken bak bedriftens valg.',
        hints: ['Bedriften vil rense så lenge kostnaden ved å rense er lavere enn avgiften.'],
        solution: 'Bedriften sammenligner rensekostnaden med avgiften for hvert tonn. De første 500 tonnene koster 200 kr/tonn å rense, som er billigere enn avgiften på 500 kr/tonn. Disse renses. De siste 500 tonnene koster 800 kr/tonn å rense, som er dyrere enn avgiften. Bedriften betaler heller avgift for disse. Resultat: Bedriften renser 500 tonn (kostnad: 500 × 200 = 100 000 kr) og betaler avgift for 500 tonn (kostnad: 500 × 500 = 250 000 kr). Total kostnad: 350 000 kr. Uten avgift ville bedriften renset 0 tonn. Med direkte krav om å rense alt: 500 × 200 + 500 × 800 = 500 000 kr.',
      },
    },
    {
      id: 'soe-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-8-2-ex-5',
        number: '8.2.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste fordelen med omsettelige utslippskvoter (cap-and-trade) sammenlignet med direkte regulering?',
        options: [
          { id: 'a', text: 'Utslippskuttene skjer der de er billigst, slik at totalkostnaden minimeres', isCorrect: true },
          { id: 'b', text: 'Det er lettere å kontrollere', isCorrect: false },
          { id: 'c', text: 'Det gir høyere statsinntekter', isCorrect: false },
          { id: 'd', text: 'Det forbyr all forurensning', isCorrect: false },
        ],
        solution: 'Kvotehandel er kostnadseffektivt: bedrifter som kan kutte billig, kutter mer og selger overskuddskvoter. Bedrifter med dyre kutt kjøper kvoter i stedet. Slik minimeres samfunnets totale kostnad for å nå utslippsmålet, i motsetning til direkte regulering der alle må kutte like mye.',
      },
    },
    {
      id: 'soe-8-2-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering av kapittel 8.2

- **Pigou-skatt** (miljøavgift) internaliserer eksterne kostnader ved å sette en pris på forurensning.
- **Omsettelige kvoter** (cap-and-trade) setter et tak på utslipp og lar bedrifter handle med utslippsrettigheter.
- **Direkte regulering** (forbud, grenser, standarder) er enklere, men mindre kostnadseffektivt.
- **Nytte-kostnadsanalyse** veier nytte mot kostnader, men er vanskelig å bruke for miljøgoder.
- Alle virkemidler har styrker og svakheter – i praksis brukes ofte en kombinasjon.`,
    },
  ],
  exercises: [
    {
      id: 'soe-8-2-samle-1',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft fordeler og ulemper ved å bruke CO₂-avgift versus omsettelige utslippskvoter i klimapolitikken. Hvilke hensyn bør veie tyngst?',
      solution: 'CO₂-avgift gir prisforutsigbarhet for bedrifter, er enkel å administrere og gir stabile statsinntekter. Men vi vet ikke nøyaktig hvor mye utslippene vil falle. Omsettelige kvoter gir sikkerhet om at utslippsmålet nås (taket er fast), men prisen kan svinge mye og systemet er komplekst å administrere. For klimapolitikk er utslippsmengden det viktigste – vi trenger å holde oss under bestemte utslippsgrenser for å nå Parisavtalens mål. Dette taler for kvoter. Samtidig verdsetter bedrifter prisforutsigbarhet for langsiktige investeringer, noe som taler for avgift. Hybridløsninger med prisgulv og pristak i kvotesystemer kan kombinere styrkene til begge systemer.',
    },
    {
      id: 'soe-8-2-samle-2',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En miljøavgift på plast er foreslått. Lag en enkel nytte-kostnadsanalyse der du identifiserer de viktigste nyttene og kostnadene ved et slikt tiltak. Hvilke verdier er vanskeligst å beregne?',
      solution: 'Nytte: Redusert plastforurensning i hav og natur, lavere oppryddingskostnader, reduserte helseskader fra mikroplast, bevaring av biologisk mangfold, redusert CO₂-utslipp fra plastproduksjon. Kostnader: Økte priser på plastprodukter for forbrukere, omstillingskostnader for plastindustrien, administrasjonskostnader, mulig tap av arbeidsplasser i plastbransjen, konkurranseulempe for norsk industri. Vanskeligst å beregne: Verdien av rent hav og natur, langsiktige helsevirkninger av mikroplast, verdien av biologisk mangfold, irreversible skader som unngås. Metodisk er det særlig utfordrende å verdsette goder som ikke handles i et marked og som har langsiktige, usikre konsekvenser.',
    },
  ],
};

// ============================================================================
// Kapittel 8.3: Bærekraftig utvikling
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_8_3: TextbookChapter = {
  id: 'samfokonomi-1-8-3',
  courseId: 'samfokonomi-1',
  chapterNumber: '8.3',
  title: 'Bærekraftig utvikling',
  description: 'Brundtland-definisjonen, FNs bærekraftsmål, sterk vs. svak bærekraft og sirkulær økonomi.',
  estimatedMinutes: 20,
  competenceGoals: [
    'reflektere over sammenhengen mellom økonomisk aktivitet og miljøutfordringer',
    'gjøre rede for hva bærekraftig utvikling innebærer',
    'drøfte spenningen mellom økonomisk vekst og miljøhensyn',
  ],
  content: [
    {
      id: 'soe-8-3-intro',
      type: 'text',
      content: `## Introduksjon

Kan vi fortsette å ha økonomisk vekst uten å ødelegge planeten? Dette er et av de viktigste spørsmålene i vår tid. Begrepet **bærekraftig utvikling** forsøker å forene to tilsynelatende motstridende mål: at mennesker skal kunne leve gode liv, og at naturen skal bevares for fremtidige generasjoner.

I dette kapittelet ser vi på hva bærekraftig utvikling betyr, hvordan det kan måles, og hvilke økonomiske modeller som kan fremme bærekraft.`,
    },
    {
      id: 'soe-8-3-def-baerekraft',
      type: 'definition',
      title: 'Bærekraftig utvikling',
      content: `**Bærekraftig utvikling** er «utvikling som tilfredsstiller dagens behov uten å ødelegge fremtidige generasjoners muligheter til å tilfredsstille sine behov.»

Denne definisjonen ble lansert av **Brundtland-kommisjonen** (Verdenskommisjonen for miljø og utvikling) i rapporten *Vår felles fremtid* i 1987, ledet av Norges tidligere statsminister Gro Harlem Brundtland.

Bærekraftig utvikling hviler på tre pilarer:
1. **Økonomisk bærekraft**: Langsiktig økonomisk verdiskaping
2. **Sosial bærekraft**: Rettferdig fordeling, helse, utdanning
3. **Miljømessig bærekraft**: Bevaring av naturressurser og økosystemer`,
    },
    {
      id: 'soe-8-3-example-brundtland',
      type: 'example',
      title: 'Eksempel: De tre pilarene i praksis',
      problem: 'Et gruveselskap i et utviklingsland vurderer å åpne en ny gruve. Bruk de tre pilarene til å analysere prosjektet.',
      solution: `**Løsning:**

**Økonomisk bærekraft:**
- Gruven skaper arbeidsplasser og skatteinntekter.
- Men: Er inntektene bærekraftige? Gruven vil en dag være tom.
- Investeres overskuddet i varig infrastruktur og utdanning?

**Sosial bærekraft:**
- Gir gruven lokale arbeidsplasser og bedre levestandard?
- Eller: Tvangsflytting av lokalbefolkning? Dårlige arbeidsforhold?
- Fordeles inntektene rettferdig mellom selskap, stat og lokalsamfunn?

**Miljømessig bærekraft:**
- Hvilke økosystemer ødelegges av gruvedriften?
- Forurenses grunnvann eller elver?
- Kan naturen restaureres etter at gruven er stengt?

**Konklusjon:**
Prosjektet er bare bærekraftig hvis det tilfredsstiller alle tre pilarene. I praksis innebærer det avveininger: miljøskader kan aksepteres hvis de er begrensede og reversible, og hvis den økonomiske og sosiale nytten er stor nok.`,
    },
    {
      id: 'soe-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-8-3-ex-1',
        number: '8.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvem ledet kommisjonen som lanserte definisjonen av bærekraftig utvikling i 1987?',
        options: [
          { id: 'a', text: 'Gro Harlem Brundtland', isCorrect: true },
          { id: 'b', text: 'Jens Stoltenberg', isCorrect: false },
          { id: 'c', text: 'Ban Ki-moon', isCorrect: false },
          { id: 'd', text: 'Kofi Annan', isCorrect: false },
        ],
        solution: 'Gro Harlem Brundtland ledet Verdenskommisjonen for miljø og utvikling som i 1987 la frem rapporten «Vår felles fremtid». Denne rapporten lanserte den mest brukte definisjonen av bærekraftig utvikling: utvikling som tilfredsstiller dagens behov uten å ødelegge fremtidige generasjoners muligheter.',
      },
    },
    {
      id: 'soe-8-3-sdg',
      type: 'text',
      content: `## FNs bærekraftsmål (SDG)

I 2015 vedtok FNs 193 medlemsland **17 bærekraftsmål** (Sustainable Development Goals) som skal nås innen 2030. Målene dekker alle tre pilarene av bærekraftig utvikling.

### De 17 målene (utvalg)
1. **Utrydde fattigdom**
2. Utrydde sult
3. God helse og livskvalitet
4. God utdanning
7. Ren energi til alle
8. **Anstendig arbeid og økonomisk vekst**
9. Innovasjon og infrastruktur
10. Mindre ulikhet
12. **Ansvarlig forbruk og produksjon**
13. **Stoppe klimaendringene**
14. Livet i havet
15. Livet på land
16. Fred, rettferdighet og sterke institusjoner
17. Samarbeid for å nå målene

### Økonomisk relevans
Bærekraftsmålene viser at økonomi, sosiale forhold og miljø henger sammen. Mål 8 (økonomisk vekst) må balanseres mot mål 12 (ansvarlig forbruk) og mål 13 (klimahandling). Dette skaper krevende avveininger.

### Kritikk av bærekraftsmålene
- Målene kan være motstridende (vekst vs. klima)
- Vanskelig å måle fremgang presist
- Ingen bindende forpliktelser eller sanksjoner
- Rike land ligger ikke an til å nå flere av målene innen 2030`,
    },
    {
      id: 'soe-8-3-sterk-svak',
      type: 'text',
      content: `## Sterk versus svak bærekraft

Økonomer skiller mellom to hovedtolkninger av bærekraft:

### Svak bærekraft
- Naturkapital kan erstattes av menneskeskapt kapital.
- Det er greit å bruke opp olje så lenge inntektene investeres i utdanning, teknologi og infrastruktur.
- **Totalkapitalen** (natur + menneskeskapt) skal ikke synke.
- Eksempel: Norge bruker oljeinntektene til å bygge opp Oljefondet.

### Sterk bærekraft
- Naturkapital kan **ikke** fullt ut erstattes av menneskeskapt kapital.
- Noen naturressurser og økosystemtjenester er uerstattelige (biologisk mangfold, et stabilt klima, pollinering).
- Vi må opprettholde **kritisk naturkapital** – naturen som er nødvendig for menneskelig overlevelse.
- Eksempel: Å bevare regnskog er viktigere enn å tjene penger på å hugge den ned.

### Viktig forskjell
Svak bærekraft antar at teknologi kan løse miljøproblemene. Sterk bærekraft mener at noen grenser ikke kan krysses uansett teknologisk utvikling. Tipping points i klimasystemet (f.eks. smelting av isbreer) er eksempler på slike absolutte grenser.`,
    },
    {
      id: 'soe-8-3-def-sterksvak',
      type: 'definition',
      title: 'Sterk og svak bærekraft',
      content: `**Svak bærekraft**: Naturkapital og menneskeskapt kapital er **substitutter**. Totalkapitalen (natur + menneskeskapt) skal opprettholdes, men sammensetningen kan endres.

**Sterk bærekraft**: Naturkapital og menneskeskapt kapital er **komplementære**. Visse former for naturkapital (kritisk naturkapital) er uerstattelig og må bevares uavhengig av menneskeskapt kapital.`,
    },
    {
      id: 'soe-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-8-3-ex-2',
        number: '8.3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket syn på bærekraft representerer følgende påstand: «Det er greit å tømme oljebrønnene så lenge vi investerer pengene i utdanning og teknologi»?',
        options: [
          { id: 'a', text: 'Svak bærekraft', isCorrect: true },
          { id: 'b', text: 'Sterk bærekraft', isCorrect: false },
          { id: 'c', text: 'Brundtland-definisjonen', isCorrect: false },
          { id: 'd', text: 'Sirkulær økonomi', isCorrect: false },
        ],
        hints: ['Tenk på om naturkapital erstattes av menneskeskapt kapital.'],
        solution: 'Svak bærekraft tillater at naturkapital erstattes av menneskeskapt kapital, så lenge totalkapitalen opprettholdes. Å bruke opp olje og investere pengene i utdanning er et typisk eksempel – naturressursen olje konverteres til humankapital. Sterk bærekraft ville derimot hevde at noen naturressurser er uerstattelige.',
      },
    },
    {
      id: 'soe-8-3-sirkular',
      type: 'text',
      content: `## Sirkulær økonomi

Den tradisjonelle økonomien er **lineær**: vi tar ut råvarer, produserer varer, bruker dem og kaster dem (ta – lage – bruke – kaste). Den **sirkulære økonomien** bryter med dette mønsteret.

### Prinsipper for sirkulær økonomi
1. **Design for lang levetid**: Produkter som varer lenger og kan repareres.
2. **Gjenbruk**: Brukte produkter får nytt liv (bruktmarked, redesign).
3. **Materialgjenvinning**: Materialene i avfall brukes som råstoff i ny produksjon.
4. **Delingsøkonomi**: Vi deler produkter i stedet for at alle eier (bildeling, verktøylån).
5. **Produkt som tjeneste**: Bedriften eier produktet og selger bruken (leasing, abonnement).

### Økonomiske fordeler
- Redusert avhengighet av importerte råvarer
- Nye forretningsmodeller og arbeidsplasser
- Lavere avfallskostnader
- Innovasjon og konkurransefortrinn

### Utfordringer
- Krever ny infrastruktur for gjenvinning
- Forbrukeratferd må endres
- Ikke alle materialer kan gjenvinnes effektivt
- Kan være dyrere på kort sikt`,
    },
    {
      id: 'soe-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-8-3-ex-3',
        number: '8.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva sirkulær økonomi er, og gi tre konkrete eksempler på sirkulære forretningsmodeller.',
        hints: ['Tenk på alternativer til «ta – lage – bruke – kaste».'],
        solution: 'Sirkulær økonomi er et alternativ til den lineære modellen (ta-lage-bruke-kaste). Målet er å holde produkter og materialer i bruk så lenge som mulig, gjennom design, gjenbruk, reparasjon og gjenvinning. Tre eksempler: 1) Bildeling (f.eks. Bilkollektivet): I stedet for at alle eier en bil, deles biler mellom mange brukere – færre biler produseres. 2) Panteordningen: Plastflasker og bokser samles inn, materialet gjenvinnes til nye flasker og bokser – råstoffet går i sirkel. 3) Reparasjonstjenester (f.eks. Elkjøps reparasjonsverksted): Elektronikk repareres i stedet for å kastes, noe som forlenger levetiden og reduserer avfall.',
      },
    },
    {
      id: 'soe-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-8-3-ex-4',
        number: '8.3.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er et kjennetegn ved den lineære økonomien?',
        options: [
          { id: 'a', text: 'Ressurser tas ut, brukes og kastes etter bruk', isCorrect: true },
          { id: 'b', text: 'Alle materialer gjenvinnes til nye produkter', isCorrect: false },
          { id: 'c', text: 'Produkter deles mellom mange brukere', isCorrect: false },
          { id: 'd', text: 'Avfall brukes som råstoff i ny produksjon', isCorrect: false },
        ],
        solution: 'Den lineære økonomien følger mønsteret «ta – lage – bruke – kaste». Råvarer tas ut av naturen, bearbeides til produkter, brukes en stund, og ender til slutt som avfall. Dette står i motsetning til den sirkulære økonomien, som forsøker å holde materialer i bruk så lenge som mulig.',
      },
    },
    {
      id: 'soe-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-8-3-ex-5',
        number: '8.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om Norges forvaltning av oljeinntektene (gjennom Statens pensjonsfond utland) representerer svak eller sterk bærekraft. Bruk konkrete argumenter for begge sider.',
        hints: ['Tenk på hva som skjer med naturkapitalen (olje) og menneskeskapt kapital (fondet).'],
        solution: 'For svak bærekraft: Norge konverterer naturkapital (olje/gass) til finanskapital (Oljefondet). Totalkapitalen opprettholdes og økes kanskje. Handlingsregelen sikrer at vi bare bruker avkastningen, ikke fondet selv. Oljeinntektene investeres i utdanning, helse og infrastruktur. For sterk bærekraft: Oljen bidrar til klimaendringer som er irreversible – dette er kritisk naturkapital som ødelegges. Penger i banken kan ikke erstatte et stabilt klima. Havstigning, ekstremvær og tap av biologisk mangfold kan ikke «kjøpes tilbake». Dessuten reduserer forbrenning av olje atmosfærens evne til å absorbere CO₂ uten konsekvenser. Konklusjon: Oljefondet representerer svak bærekraft i sin design, men den underliggende aktiviteten (olje- og gassproduksjon) bryter med sterk bærekraft fordi den bidrar til irreversible klimaendringer.',
      },
    },
    {
      id: 'soe-8-3-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering av kapittel 8.3

- **Bærekraftig utvikling** (Brundtland, 1987) balanserer økonomisk, sosial og miljømessig bærekraft.
- **FNs 17 bærekraftsmål** gir et felles globalt rammeverk, men er ikke juridisk bindende.
- **Svak bærekraft** tillater at naturkapital erstattes av menneskeskapt kapital.
- **Sterk bærekraft** krever at kritisk naturkapital bevares.
- **Sirkulær økonomi** er et alternativ til den lineære «bruk-og-kast»-modellen, med fokus på gjenbruk, gjenvinning og deling.`,
    },
  ],
  exercises: [
    {
      id: 'soe-8-3-samle-1',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Bærekraftsmål 8 handler om «anstendig arbeid og økonomisk vekst», mens mål 13 handler om «stoppe klimaendringene». Drøft om det er mulig å oppnå begge målene samtidig, og hvilke økonomiske tiltak som kan bidra til det.',
      solution: 'Det er mulig, men krevende, å kombinere økonomisk vekst med klimahandling. Grønn vekst: Investeringer i fornybar energi, grønn teknologi og sirkulær økonomi kan skape arbeidsplasser og verdiskaping uten økte utslipp. Mange land har vist at BNP kan vokse mens utslippene synker (frikobling). Tiltak: Karbonprising (avgifter/kvoter) gjør forurensning dyrt og grønne alternativer lønnsomme. Offentlige investeringer i grønn infrastruktur skaper arbeidsplasser. Forskning og innovasjon utvikler renere teknologi. Men: Noen mener at evig økonomisk vekst er uforenlig med planetens tålegrenser (nedvekst-perspektivet). Rebound-effekten kan undergrave effektiviseringsgevinster. Utviklingsland trenger rom for å vokse. Konklusjon: Det krever aktiv politikk og nye måter å måle velstand på – BNP er ikke nødvendigvis det beste målet.',
    },
  ],
};

// ============================================================================
// Kapittel 8.4: Norsk klimapolitikk
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_8_4: TextbookChapter = {
  id: 'samfokonomi-1-8-4',
  courseId: 'samfokonomi-1',
  chapterNumber: '8.4',
  title: 'Norsk klimapolitikk',
  description: 'CO₂-avgift, kvotehandel i EU ETS, grønt skifte og petroleumssektorens fremtid.',
  estimatedMinutes: 20,
  competenceGoals: [
    'reflektere over sammenhengen mellom økonomisk aktivitet og miljøutfordringer',
    'gjøre rede for Norges viktigste klimapolitiske virkemidler',
    'drøfte spenningen mellom norsk oljeproduksjon og klimamål',
  ],
  content: [
    {
      id: 'soe-8-4-intro',
      type: 'text',
      content: `## Introduksjon

Norge har en spesiell rolle i klimapolitikken. Vi er et av verdens rikeste land, mye takket være olje- og gassproduksjon. Samtidig har vi ambisiøse klimamål og en av verdens høyeste CO₂-avgifter. Denne dobbeltrollen – stor petroleumsprodusent med sterke klimaambisjoner – skaper spenninger og debatter.

I dette kapittelet ser vi på de viktigste virkemidlene i norsk klimapolitikk, Norges rolle i EUs kvotesystem, og den krevende omstillingen fra en oljebasert til en grønnere økonomi.`,
    },
    {
      id: 'soe-8-4-klimamal',
      type: 'text',
      content: `## Norges klimamål

Norge har forpliktet seg til ambisiøse mål for utslippsreduksjon:

### Parisavtalen (2015)
- Begrense global oppvarming til godt under 2 °C, helst 1,5 °C
- Norge lovte å kutte utslipp med minst 50–55 % innen 2030 (sammenlignet med 1990)

### Klimaloven (2018)
- Norges første klimalov fastsetter juridisk bindende klimamål
- 2030-mål: 55 % reduksjon sammenlignet med 1990
- 2050-mål: Lavutslippssamfunn (90–95 % kutt)
- Regjeringen må rapportere om klimafremdriften årlig

### Status for norske utslipp
- Norges totale utslipp: ca. 49 millioner tonn CO₂-ekvivalenter (2022)
- Petroleumssektoren: ca. 25 % av utslippene
- Transport: ca. 30 %
- Industri: ca. 23 %
- Landbruk: ca. 9 %
- Resten: oppvarming, avfall m.m.`,
    },
    {
      id: 'soe-8-4-def-co2avgift',
      type: 'definition',
      title: 'Norsk CO₂-avgift',
      content: `**CO₂-avgiften** ble innført i Norge i 1991 og var blant de første i verden. Avgiften legges på utslipp av CO₂ fra fossile brensler.

**Satser (2024):**
- Petroleumssektoren: ca. 950 kr/tonn CO₂ (avgift + kvotepris)
- Bensin og diesel: Avgiften utgjør ca. 1,50–2 kr per liter
- Industri i kvotesystemet: Kvotepris pluss eventuell tilleggsavgift

CO₂-avgiften skal økes kraftig og nå 2000 kr/tonn innen 2030 for å nå klimamålene.`,
    },
    {
      id: 'soe-8-4-eu-ets',
      type: 'text',
      content: `## EUs kvotesystem (EU ETS)

Norge deltar i **EUs kvotehandelssystem** (Emissions Trading System), verdens største kvotemarked.

### Slik fungerer EU ETS
- Dekker ca. 40 % av EUs utslipp (industri, kraft, luftfart)
- Ca. 10 000 fabrikker og kraftverk må ha kvoter
- Taket på totale utslipp senkes hvert år
- Kvoter kan handles fritt mellom deltakerne
- Prisen bestemmes av tilbud og etterspørsel

### Norges deltagelse
- Norge har vært med siden 2008 (gjennom EØS-avtalen)
- Ca. 140 norske virksomheter er omfattet
- Petroleumssektoren betaler både CO₂-avgift og kvotepris (dobbel prising)
- Samlet karbonpris for norsk petroleumssektor er blant verdens høyeste

### Kvoteprisen
- Kvoteprisen i EU ETS har økt kraftig: fra under 50 kr/tonn (2017) til over 800 kr/tonn (2023)
- Høyere pris gir sterkere insentiv til å kutte utslipp
- Prisøkningen skyldes blant annet strengere tak og redusert overskudd av kvoter`,
    },
    {
      id: 'soe-8-4-example-elbil',
      type: 'example',
      title: 'Eksempel: Elbilpolitikken som klimavirkemiddel',
      problem: 'Norge har verdens høyeste andel elbiler. Bruk økonomiske begreper til å forklare hvorfor Norge har lykkes bedre enn de fleste land med elbilomstilling.',
      solution: `**Løsning:**

Norges elbilsuksess skyldes en kombinasjon av økonomiske virkemidler:

**Avgiftsfritak (redusert pris):**
- Elbiler er fritatt for moms (25 %) og engangsavgift.
- En elbil som koster 400 000 kr ville kostet ca. 550 000 kr som fossilbil.
- Avgiftsfritaket er en implisitt subsidiering av positiv eksternalitet (null utslipp).

**Lavere brukskostnader:**
- Fritak fra bompenger (nå delvis avviklet)
- Billigere parkering
- Tilgang til kollektivfelt
- Lav strømpris relativt til bensin/diesel

**Høye avgifter på fossile biler:**
- Engangsavgift basert på CO₂-utslipp (Pigou-skatt-prinsipp)
- CO₂-avgift på bensin og diesel
- Veibruksavgift

**Resultat:**
Den relative prisen gjør det lønnsomt å velge elbil. Over 80 % av nye biler solgt i 2023 var elektriske. Dette er klassisk miljøøkonomi i praksis: rett prisene, og forbrukerne tilpasser seg.`,
    },
    {
      id: 'soe-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-8-4-ex-1',
        number: '8.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Når ble CO₂-avgiften innført i Norge?',
        options: [
          { id: 'a', text: '1991', isCorrect: true },
          { id: 'b', text: '2005', isCorrect: false },
          { id: 'c', text: '2015', isCorrect: false },
          { id: 'd', text: '1970', isCorrect: false },
        ],
        solution: 'Norges CO₂-avgift ble innført i 1991 og var en av de første i verden. Den ble opprinnelig lagt på utslipp fra olje- og gassvirksomheten på sokkelen, og ble senere utvidet til å dekke flere sektorer.',
      },
    },
    {
      id: 'soe-8-4-groent-skifte',
      type: 'text',
      content: `## Det grønne skiftet

Det grønne skiftet handler om overgangen fra en fossilbasert til en fornybar og bærekraftig økonomi.

### Norges fortrinn
- **Fornybar energi**: Nesten all strømproduksjon er vannkraft (ca. 90 %)
- **Havvind**: Stor kompetanse fra offshorevirksomhet
- **Hydrogen**: Muligheter for produksjon av grønt og blått hydrogen
- **Karbonfangst og -lagring (CCS)**: Langskip-prosjektet fanger CO₂ fra industri
- **Batteriteknologi**: Nye fabrikker (f.eks. FREYR, Beyonder)
- **Oljefondet**: Finansiell buffer for omstilling

### Utfordringer
- **Oljeavhengighet**: Petroleumssektoren utgjør ca. 20 % av BNP og over 40 % av eksporten
- **Kompetanseoverføring**: Kan oljearbeidere flyttes til grønn industri?
- **Investeringer**: Det grønne skiftet krever enorme investeringer
- **Tidsperspektivet**: Omstillingen må skje raskt for å nå klimamålene
- **Energibehov**: Grønn industri krever mer strøm enn vi produserer i dag`,
    },
    {
      id: 'soe-8-4-petroleum',
      type: 'text',
      content: `## Petroleumssektorens fremtid

Den norske petroleumsdebatten handler om en grunnleggende spenning:

### Argumenter for fortsatt produksjon
- Norsk olje og gass er «renere» å produsere enn mange andre steder (lavere utslipp per enhet)
- Gass kan erstatte kull i energimiksen og dermed senke globale utslipp
- Petroleumsinntektene finansierer velferdssamfunnet
- Kompetansen fra sektoren kan brukes i grønn omstilling
- Brå avvikling ville gitt økonomisk sjokk (arbeidsplasser, statsfinanser)

### Argumenter for utfasing
- For å nå 1,5 °C-målet kan det meste av kjente fossile reserver ikke utvinnes (stranded assets)
- Nye investeringer i olje og gass binder kapital i fossil infrastruktur i tiår
- Norge bør lede an som rikt land med alternativer
- Oljefondet gir økonomisk buffer for omstilling
- Klimarisiko: Fremtidig klimapolitikk kan gjøre oljeinvesteringer ulønnsomme

### «Stranded assets» (strandede eiendeler)
Hvis verden lykkes med klimapolitikken, vil etterspørselen etter fossil energi falle kraftig. Olje- og gassreserver som ikke kan utvinnes lønnsomt, kalles «strandede eiendeler». Norske investeringer i nye felt kan dermed bli verdiløse.`,
    },
    {
      id: 'soe-8-4-def-karbonlekkasje',
      type: 'definition',
      title: 'Karbonlekkasje',
      content: `**Karbonlekkasje** oppstår når streng klimapolitikk i ett land fører til at produksjonen flyttes til land med svakere klimaregulering. Utslippene reduseres ikke globalt – de flyttes bare.

**Eksempel:** Hvis norske avgifter gjør det ulønnsomt å produsere aluminium i Norge, kan produksjonen flyttes til et land med kullkraft og ingen CO₂-avgift. Globale utslipp kan da øke.

**Tiltak mot karbonlekkasje:**
- EUs karbontoll (CBAM): Importerte varer betaler for karbonavtrykket
- Gratiskvoter til utsatte industrier
- Internasjonale klimaavtaler som harmoniserer karbonprising`,
    },
    {
      id: 'soe-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-8-4-ex-2',
        number: '8.4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva karbonlekkasje er, og beskriv tiltak som kan motvirke det.',
        hints: ['Tenk på hva som skjer når én bedrift møter høye klimaavgifter mens konkurrentene i andre land ikke gjør det.'],
        solution: 'Karbonlekkasje oppstår når streng klimapolitikk i ett land fører til at produksjonen flyttes til land med svakere reguleringer. Utslippene forsvinner ikke – de bare flyttes. Tiltak mot karbonlekkasje: 1) Karbontoll (CBAM): EU innfører toll på importerte varer basert på deres karbonfotavtrykk, slik at utenlandske produsenter møter samme kostnad som europeiske. 2) Gratiskvoter: Gi utsatte industrier gratis utslippskvoter for å bevare konkurranseevnen. 3) Internasjonale avtaler: Hvis alle land har lignende karbonprising, er det ingen fordel å flytte. 4) Grensejusteringer: Refundere CO₂-avgift på eksport og legge den til på import.',
      },
    },
    {
      id: 'soe-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-8-4-ex-3',
        number: '8.4.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med «stranded assets» (strandede eiendeler) i klimasammenheng?',
        options: [
          { id: 'a', text: 'Fossile reserver som ikke kan utvinnes lønnsomt hvis klimapolitikken strammes inn', isCorrect: true },
          { id: 'b', text: 'Bygninger som er oversvømt på grunn av havstigning', isCorrect: false },
          { id: 'c', text: 'Fornybar energi som ikke er lønnsom uten subsidier', isCorrect: false },
          { id: 'd', text: 'Usolgte elbiler på bruktmarkedet', isCorrect: false },
        ],
        solution: '«Stranded assets» er fossile reserver eller infrastruktur som kan bli verdiløse dersom verden lykkes med å begrense global oppvarming. Hvis etterspørselen etter olje og gass faller kraftig, kan investeringer i nye oljefelt bli ulønnsomme – kapitalen er «strandet» i verdiløse eiendeler.',
      },
    },
    {
      id: 'soe-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-8-4-ex-4',
        number: '8.4.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken sektor står for den største andelen av Norges totale CO₂-utslipp?',
        options: [
          { id: 'a', text: 'Transport', isCorrect: true },
          { id: 'b', text: 'Landbruk', isCorrect: false },
          { id: 'c', text: 'Boliger og oppvarming', isCorrect: false },
          { id: 'd', text: 'Avfallshåndtering', isCorrect: false },
        ],
        solution: 'Transportsektoren står for ca. 30 % av Norges CO₂-utslipp og er dermed den største enkeltsektoren. Petroleumssektoren følger med ca. 25 % og industri med ca. 23 %. Elbilsatsingen er derfor et viktig klimatiltak.',
      },
    },
    {
      id: 'soe-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-8-4-ex-5',
        number: '8.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: «Norge bør slutte å lete etter ny olje og gass.» Bruk økonomiske argumenter for begge sider.',
        hints: ['Tenk på alternativkostnad, klimarisiko, statsinntekter og omstilling.'],
        solution: 'For å slutte med ny leting: 1) Klimarisiko – nye felt binder kapital i 30-50 år, og det er stor sjanse for at etterspørselen etter olje faller kraftig (stranded assets). 2) Alternativkostnad – investeringer i olje kunne gått til fornybar energi med bedre langsiktig avkastning. 3) Troverdighet – vanskelig å lede internasjonalt klimaarbeid mens vi utvider oljeproduksjonen. 4) Sterk bærekraft krever at vi bevarer kritisk naturkapital (stabilt klima). Mot å slutte: 1) Petroleumsinntektene finansierer velferden – å miste dem brått ville være ødeleggende. 2) Norsk gass kan erstatte kull og dermed senke globale utslipp. 3) Kompetansen utviklet i oljebransjen er verdifull for grønn omstilling. 4) Oljefondet vokser så lenge produksjonen fortsetter. 5) Markedet bør avgjøre – hvis klimapolitikken lykkes, vil leting automatisk bli ulønnsom.',
      },
    },
    {
      id: 'soe-8-4-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering av kapittel 8.4

- Norge har ambisiøse klimamål: 55 % kutt innen 2030, lavutslippssamfunn innen 2050.
- **CO₂-avgiften** (1991) og deltakelse i **EU ETS** er de viktigste virkemidlene.
- **Elbilpolitikken** viser hvordan riktige prisinsentiver kan endre forbrukeratferd.
- **Det grønne skiftet** krever omstilling fra fossil til fornybar økonomi.
- Debatten om petroleumssektorens fremtid handler om avveiningen mellom inntekter i dag og klimarisiko i morgen.
- **Karbonlekkasje** er en utfordring når klimapolitikk varierer mellom land.`,
    },
  ],
  exercises: [
    {
      id: 'soe-8-4-samle-1',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Gjør rede for Norges viktigste klimapolitiske virkemidler (CO₂-avgift, kvotehandel, regulering), og drøft om de er tilstrekkelige for å nå målet om 55 % utslippsreduksjon innen 2030.',
      solution: 'Norges viktigste virkemidler: 1) CO₂-avgift – internaliserer eksterne kostnader, gir prisincitament til utslippskutt. Skal økes til 2000 kr/tonn innen 2030. 2) EU ETS – setter tak på utslipp fra industri og petroleumssektor, sikrer at totale utslipp i kvotesektoren synker. 3) Direkte regulering – forbud mot oljefyr (2020), krav til nullutslippskjøretøy, byggeforskrifter. 4) Subsidier – elbilfordeler, Enova-støtte til grønn teknologi. Er det nok? Sannsynligvis ikke uten ytterligere tiltak. Transport og landbruk er vanskelige sektorer å kutte i. Mange av kuttene kommer fra kvotesystemet (som styres på EU-nivå). Ytterligere nasjonale tiltak kan være nødvendig, men disse kan utløse karbonlekkasje. Tempet i omstillingen må økes betydelig for å nå 2030-målet.',
    },
  ],
};

// ============================================================================
// Kapittel 8.5: Global økonomi og miljø
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_8_5: TextbookChapter = {
  id: 'samfokonomi-1-8-5',
  courseId: 'samfokonomi-1',
  chapterNumber: '8.5',
  title: 'Global økonomi og miljø',
  description: 'Klimafinansiering, grønn vekst, nedvekstdebatt, utviklingsland og rettferdig omstilling.',
  estimatedMinutes: 20,
  competenceGoals: [
    'reflektere over sammenhengen mellom økonomisk aktivitet og miljøutfordringer',
    'drøfte globale fordelingsspørsmål knyttet til klima og miljø',
    'vurdere ulike perspektiver på økonomisk vekst og miljø',
  ],
  content: [
    {
      id: 'soe-8-5-intro',
      type: 'text',
      content: `## Introduksjon

Klimaendringer og miljøødeleggelse er globale problemer som krever globale løsninger. Men hvem skal betale? Rike land har sluppet ut mest historisk, men utviklingsland rammes hardest. Kan hele verden bli rik uten å ødelegge planeten? Og er evig økonomisk vekst mulig på en endelig planet?

I dette kapittelet ser vi på de store globale spørsmålene i skjæringspunktet mellom økonomi og miljø.`,
    },
    {
      id: 'soe-8-5-klimarettferdighet',
      type: 'text',
      content: `## Klimarettferdighet og global fordeling

Klimaendringene har en dyp rettferdighetsdimensjon:

### Historisk ansvar
- Rike land (Europa, USA, Japan) har stått for det meste av historiske utslipp.
- Industrialiseringen som ga dem velstand, var drevet av fossile brensler.
- De fattigste landene har bidratt minst til problemet.

### Ulik sårbarhet
- Utviklingsland har minst ressurser til å tilpasse seg.
- Øystater trues av havstigning.
- Fattige land i tropene rammes av tørke, flom og ekstremvær.
- Klimaendringer forsterker eksisterende ulikheter.

### Utslipp per innbygger
| Land/region | Tonn CO₂ per person/år (ca.) |
|-------------|-------------------------------|
| USA | 14 |
| Norge | 8 |
| EU snitt | 6 |
| Kina | 8 |
| India | 2 |
| Afrika snitt | 1 |

### Dilemmaet
Utviklingsland har rett til økonomisk vekst og fattigdomsreduksjon. Men hvis de følger samme fossile utviklingsvei som rike land, vil klimamålene bli umulige å nå.`,
    },
    {
      id: 'soe-8-5-def-klimafinansiering',
      type: 'definition',
      title: 'Klimafinansiering',
      content: `**Klimafinansiering** er pengeoverføringer fra rike til fattige land for å hjelpe dem med å:
1. **Redusere utslipp** (mitigation): Investere i fornybar energi i stedet for kull.
2. **Tilpasse seg** (adaptation): Bygge flomvern, tørkeresistent landbruk, varslingssystemer.

**Parisavtalen**: Rike land lovet å mobilisere 100 milliarder dollar per år til klimafinansiering innen 2020. Målet ble først nådd i 2022, to år for sent.

**Tap og skade** (Loss and Damage): På klimatoppmøtet i 2022 ble det vedtatt et eget fond for å kompensere sårbare land for klimaskader de allerede opplever.`,
    },
    {
      id: 'soe-8-5-example-bangladesh',
      type: 'example',
      title: 'Eksempel: Bangladesh og klimarettferdighet',
      problem: 'Bangladesh er et av verdens mest klimasårbare land. Forklar hvordan dette illustrerer utfordringene med klimarettferdighet.',
      solution: `**Løsning:**

**Sårbarhet:**
- Over 160 millioner mennesker, mange langs kysten og i flomsletter.
- Store deler av landet ligger under 5 meter over havet.
- Rammes allerede av hyppigere flommer, sykloner og havstigning.
- Ca. 20 millioner mennesker kan bli klimaflyktninger innen 2050.

**Lavt ansvar:**
- Utslipp per innbygger: ca. 0,5 tonn CO₂ (blant verdens laveste).
- Minimal industrialisering sammenlignet med rike land.
- Har bidratt svært lite til klimaendringene.

**Klimarettferdighet:**
- De som lider mest, har bidratt minst til problemet.
- Bangladesh har verken ressurser til store utslippskutt (har lite å kutte) eller kostbare tilpasningstiltak.
- Rike land har et moralsk og historisk ansvar for å bidra med finansiering.

**Økonomisk perspektiv:**
- Klimafinansiering fra rike land er ikke veldedighet – det er kompensasjon for eksternaliteter.
- Rike lands utslipp har påført Bangladesh enorme kostnader (flomskader, tapte avlinger).
- Uten klimafinansiering forsterkes global ulikhet.`,
    },
    {
      id: 'soe-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-8-5-ex-1',
        number: '8.5.1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er hovedbegrunnelsen for at rike land bør betale for klimatiltak i fattige land?',
        options: [
          { id: 'a', text: 'Rike land har historisk ansvar for de fleste utslippene og fattige land rammes hardest', isCorrect: true },
          { id: 'b', text: 'Fattige land har flere innbyggere', isCorrect: false },
          { id: 'c', text: 'Det er billigere å kutte utslipp i rike land', isCorrect: false },
          { id: 'd', text: 'Fattige land bruker mer energi per person', isCorrect: false },
        ],
        solution: 'Rike land har stått for det meste av de historiske utslippene som har forårsaket klimaendringene. Samtidig rammes fattige land hardest, selv om de har bidratt minst. Klimafinansiering er derfor et spørsmål om rettferdighet – de som forårsaket problemet, bør betale for å løse det.',
      },
    },
    {
      id: 'soe-8-5-gronn-vekst',
      type: 'text',
      content: `## Grønn vekst

**Grønn vekst** bygger på ideen om at økonomisk vekst kan fortsette hvis vi endrer hva vi produserer og hvordan.

### Frikobling
Nøkkelen til grønn vekst er **frikobling** (decoupling) – at BNP kan vokse mens ressursbruk og utslipp synker.

- **Relativ frikobling**: Utslippene vokser saktere enn BNP (bedring, men ikke nok).
- **Absolutt frikobling**: BNP vokser mens utslippene faktisk synker (målet).

### Eksempler på frikobling
Flere land har vist absolutt frikobling for CO₂:
- **Sverige**: BNP økte 78 % mellom 1990 og 2020, mens CO₂-utslippene falt 29 %.
- **Storbritannia**: BNP økte 75 % mens CO₂ falt 44 % i samme periode.
- **Danmark**: Verdensledende i vindkraft, grønn vekst-modell.

### Grønn vekst i praksis
- Investering i fornybar energi (sol, vind, hydrogen)
- Elektrifisering av transport og industri
- Sirkulær økonomi (gjenbruk, gjenvinning)
- Grønn teknologi og innovasjon
- Karbonfangst og -lagring (CCS)`,
    },
    {
      id: 'soe-8-5-def-frikobling',
      type: 'definition',
      title: 'Frikobling (decoupling)',
      content: `**Frikobling** betyr at økonomisk vekst (BNP) skilles fra miljøbelastning (utslipp, ressursbruk).

- **Relativ frikobling**: Miljøbelastningen vokser, men saktere enn økonomien.
- **Absolutt frikobling**: Økonomien vokser mens miljøbelastningen synker.

Absolutt frikobling av BNP fra CO₂-utslipp er dokumentert i flere rike land, men det er uklart om global absolutt frikobling av alle ressurser er mulig.`,
    },
    {
      id: 'soe-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-8-5-ex-2',
        number: '8.5.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr absolutt frikobling?',
        options: [
          { id: 'a', text: 'BNP vokser mens utslippene synker', isCorrect: true },
          { id: 'b', text: 'BNP og utslipp vokser like raskt', isCorrect: false },
          { id: 'c', text: 'Utslippene vokser saktere enn BNP', isCorrect: false },
          { id: 'd', text: 'Både BNP og utslipp synker', isCorrect: false },
        ],
        solution: 'Absolutt frikobling betyr at økonomien (BNP) vokser mens miljøbelastningen (f.eks. CO₂-utslipp) faktisk synker. Dette er målet for grønn vekst. Relativ frikobling, der utslippene vokser saktere enn BNP, er ikke tilstrekkelig for å nå klimamålene.',
      },
    },
    {
      id: 'soe-8-5-nedvekst',
      type: 'text',
      content: `## Nedvekstdebatten (degrowth)

Ikke alle tror at grønn vekst er mulig. **Nedvekstbevegelsen** (degrowth) mener at vi trenger en planlagt reduksjon av produksjon og forbruk i rike land.

### Argumenter for nedvekst
- **Planetens tålegrenser**: Vi har allerede overskredet flere av jordens grenser (klima, biologisk mangfold, nitrogen).
- **Rebound-effekten**: Effektiviseringsgevinster spises opp av økt forbruk. Når bilen bruker mindre bensin, kjører vi lenger.
- **Materiellt fotavtrykk**: Selv om CO₂-utslipp kan frikobles, er det uklart om total ressursbruk kan det.
- **Velferd ≠ BNP**: Over et visst inntektsnivå gir mer penger ikke mer lykke.

### Argumenter mot nedvekst
- **Politisk urealistisk**: Ingen velgere stemmer for lavere levestandard.
- **Fattigdom**: Utviklingsland trenger vekst for å komme ut av fattigdom.
- **Innovasjon**: Teknologisk utvikling kan løse miljøproblemene.
- **Arbeidsledighet**: Uten vekst kollapser jobbmarkedet i dagens økonomiske system.
- **Statsgjeld**: Uten vekst blir det vanskelig å betjene statsgjeld og finansiere velferden.

### En middelvei?
Noen økonomer foreslår **post-vekst** eller **avekst** (agrowth): Vi bør fokusere på velferd og bærekraft, uavhengig av om BNP vokser eller synker. BNP bør ikke lenger være hovedmålet for politikken.`,
    },
    {
      id: 'soe-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-8-5-ex-3',
        number: '8.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva «rebound-effekten» er, og gi et eksempel på hvordan den kan undergrave energieffektivisering.',
        hints: ['Tenk på hva som skjer med forbruket når noe blir billigere å bruke.'],
        solution: 'Rebound-effekten (tilbakeslagseffekten) oppstår når effektiviseringsgevinster delvis eller helt spises opp av økt forbruk. Eksempel: Når biler blir mer drivstoffeffektive, blir det billigere å kjøre per kilometer. Folk kjører da lenger og oftere, slik at total bensinkjøp ikke synker like mye som forventet. I verste fall kan totalforbruket til og med øke – dette kalles Jevons paradoks. Andre eksempler: Energieffektive hus gjør det billigere å varme opp store boliger, LED-pærer gjør det billig å ha mye belysning. Rebound-effekten er en viktig innvending mot ideen om at teknologisk effektivisering alene kan løse miljøproblemene.',
      },
    },
    {
      id: 'soe-8-5-rettferdig-omstilling',
      type: 'text',
      content: `## Rettferdig omstilling (just transition)

Overgangen til en grønn økonomi skaper vinnere og tapere. **Rettferdig omstilling** handler om å sørge for at byrden fordeles rettferdig.

### Hvem kan tape?
- **Arbeidere i fossil industri**: Mister jobber når olje- og kullproduksjonen reduseres
- **Lokalsamfunn**: Byer avhengige av fossil industri (f.eks. Stavanger-regionen, kullgruvesamfunn)
- **Lavinntektsgrupper**: Høyere energipriser rammer fattige hardest
- **Utviklingsland**: Får begrensninger på sin utvikling

### Tiltak for rettferdig omstilling
- **Omskolering**: Gratis utdanning og kursing for arbeidere som mister jobben
- **Regional utvikling**: Investeringer i ny industri i områder som rammes
- **Sosiale sikkerhetsnett**: Dagpenger, støtte til jobbsøking
- **Kompensasjon**: Direkte pengeoverføringer til lavinntektshusholdninger (f.eks. tilbakebetaling av karbonavgift)
- **Klimafinansiering**: Hjelpe utviklingsland med grønn omstilling

### Hvorfor det er viktig
Uten rettferdig omstilling kan klimapolitikken miste folkelig støtte. Hvis folk opplever at de bærer byrdene mens andre tjener, vil de motsette seg tiltak – og nødvendige klimakutt forsinkes.`,
    },
    {
      id: 'soe-8-5-def-rettferdig-omstilling',
      type: 'definition',
      title: 'Rettferdig omstilling (just transition)',
      content: `**Rettferdig omstilling** er prinsippet om at overgangen til en lavutslippsøkonomi skal skje på en måte som ivaretar arbeidstakere, lokalsamfunn og sårbare grupper.

Kjernen er at klimatiltak må utformes slik at kostnadene fordeles rettferdig, og at de som rammes hardest av omstillingen, får støtte til å tilpasse seg.`,
    },
    {
      id: 'soe-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-8-5-ex-4',
        number: '8.5.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva handler «rettferdig omstilling» (just transition) om?',
        options: [
          { id: 'a', text: 'At byrden ved grønn omstilling fordeles rettferdig og at sårbare grupper ivaretas', isCorrect: true },
          { id: 'b', text: 'At alle land kutter like mye utslipp', isCorrect: false },
          { id: 'c', text: 'At fornybar energi blir billigere enn fossil energi', isCorrect: false },
          { id: 'd', text: 'At utviklingsland ikke trenger å kutte utslipp', isCorrect: false },
        ],
        solution: 'Rettferdig omstilling handler om at overgangen til en grønn økonomi skal skje rettferdig – arbeidere som mister jobben, lokalsamfunn som rammes, og lavinntektsgrupper som må betale mer for energi, skal ivaretas gjennom omskolering, støtteordninger og kompensasjon.',
      },
    },
    {
      id: 'soe-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-8-5-ex-5',
        number: '8.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om rike land som Norge har et særskilt ansvar for å finansiere klimatiltak i utviklingsland. Bruk økonomiske begreper i argumentasjonen din.',
        hints: ['Tenk på historisk ansvar, eksternaliteter, betalingsevne og effektivitet.'],
        solution: 'Argumenter for: 1) Historisk ansvar – Norges velstand er delvis bygget på fossil energi. Utslippene fra denne velstandsutviklingen er en negativ eksternalitet som rammer utviklingsland. Klimafinansiering er internalisering av denne eksternaliteten. 2) Betalingsevne – Norge er blant verdens rikeste land og har Oljefondet som buffer. Det er samfunnsøkonomisk effektivt at de med størst evne bidrar mest. 3) Effektivitet – Det er billigere å kutte utslipp i utviklingsland (f.eks. bygge solkraft i stedet for kullkraft) enn i Norge, der utslippene allerede er relativt lave. 4) Fellesressurs – Atmosfæren er en global fellesressurs, og alle drar nytte av at utslippene kuttes. Motargumenter: 1) Moralsk risiko – kan svekke utviklingslands eget insentiv til handling. 2) Effektivitet – usikkert om pengene brukes godt. 3) Rettferdighet – Norges historiske utslipp er relativt små sammenlignet med USA/Kina. Konklusjon: Ja, rike land har et særskilt ansvar basert på forurenser-betaler-prinsippet og betalingsevne.',
      },
    },
    {
      id: 'soe-8-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-8-5-ex-6',
        number: '8.5.6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Nedvekstbevegelsen (degrowth) argumenterer for at:',
        options: [
          { id: 'a', text: 'Rike land bør redusere produksjon og forbruk for å komme innenfor planetens tålegrenser', isCorrect: true },
          { id: 'b', text: 'Alle land bør slutte med all økonomisk aktivitet', isCorrect: false },
          { id: 'c', text: 'Teknologisk utvikling alene kan løse miljøproblemene', isCorrect: false },
          { id: 'd', text: 'Utviklingsland bør redusere sin økonomiske vekst', isCorrect: false },
        ],
        solution: 'Nedvekstbevegelsen mener at rike land bør planlagt redusere produksjon og forbruk fordi planeten har tålegrenser som ikke kan overskrides med teknologi alene. Viktig: Nedvekst handler primært om rike land – de fleste tilhengere mener at fattige land fortsatt trenger vekst for å redusere fattigdom.',
      },
    },
    {
      id: 'soe-8-5-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering av kapittel 8.5

- **Klimarettferdighet**: Rike land har historisk ansvar, mens fattige land rammes hardest.
- **Klimafinansiering**: Overføringer fra rike til fattige land for utslippskutt og klimatilpasning.
- **Grønn vekst** og **frikobling** viser at BNP kan vokse mens utslipp synker – men det er usikkert om det er nok.
- **Nedvekst** utfordrer ideen om evig vekst og peker på planetens tålegrenser.
- **Rettferdig omstilling** er nødvendig for at klimapolitikken skal ha folkelig støtte.
- De globale miljøutfordringene krever samarbeid mellom land, og avveininger mellom vekst, rettferdighet og bærekraft.`,
    },
  ],
  exercises: [
    {
      id: 'soe-8-5-samle-1',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft om økonomisk vekst er forenlig med å løse klimakrisen. Bruk argumenter fra både «grønn vekst»-perspektivet og «nedvekst»-perspektivet, og ta stilling til spørsmålet med begrunnelse.',
      solution: 'Grønn vekst: Absolutt frikobling er dokumentert i flere land – BNP kan vokse mens utslipp synker. Fornybar energi er nå billigere enn fossil i mange land. Teknologisk innovasjon drives av økonomisk vekst. Investering i grønn teknologi skaper nye markeder og arbeidsplasser. Nedvekst: Frikobling gjelder primært CO₂, ikke total ressursbruk. Rebound-effekten spiser opp effektiviseringsgevinster. Vi har allerede overskredet flere planetære grenser. BNP-vekst i rike land gir marginal velferdsøkning, men store miljøkostnader. Egen vurdering bør veie: Er teknologisk endring rask nok? Kan vi endre hva vi måler (velferd fremfor BNP)? Er det politisk mulig å slutte å vokse? Trolig trengs elementer fra begge: grønn teknologi og innovasjon, kombinert med endret forbruksmønster og nye velstandsmål. Rike land bør prioritere velferd fremfor vekst, mens utviklingsland trenger rom for å vokse seg ut av fattigdom.',
    },
    {
      id: 'soe-8-5-samle-2',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Tenk deg at du er rådgiver for FN og skal foreslå tiltak for å sikre rettferdig klimaomstilling globalt. Beskriv tre konkrete tiltak, og forklar den økonomiske logikken bak hvert av dem.',
      solution: '1) Global karbonminstepris: Alle land innfører en minstepris på CO₂ (f.eks. 50 USD/tonn for rike land, 25 USD for mellominntektsland, unntak for fattige land). Økonomisk logikk: Internaliserer eksternaliteten globalt og reduserer karbonlekkasje. 2) Klimafond finansiert av rike land (0,5 % av BNP): Finansierer fornybar energi, klimatilpasning og tap-og-skade i sårbare land. Økonomisk logikk: Forurenser-betaler-prinsippet – rike land betaler for sine historiske eksternaliteter. Effektivitet – utslippskutt er billigere i utviklingsland. 3) Grønn teknologioverføring: Rike land deler patenter og teknologi for fornybar energi med utviklingsland til redusert pris. Økonomisk logikk: Kollektivt gode – klimaet er en fellesressurs, og det er i alles interesse at alle land tar i bruk ren teknologi. Markedssvikt i patentvern hindrer spredning av livsnødvendig teknologi.',
    },
  ],
};

// ============================================================================
// Eksport alle delkapitler
// ============================================================================

export const SAMFOKONOMI_1_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFOKONOMI_1_8_1, CHAPTER_SAMFOKONOMI_1_8_2, CHAPTER_SAMFOKONOMI_1_8_3,
  CHAPTER_SAMFOKONOMI_1_8_4, CHAPTER_SAMFOKONOMI_1_8_5,
];
