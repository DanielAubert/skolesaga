/**
 * Handverk, design og produktutvikling VG1 - Tekstbokinnhold DEL 7
 *
 * Kapittel 7: Produktutvikling (7.1-7.8)
 *
 * Dekker LK20 laereplan for Handverk, design og produktutvikling pa VG1
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 7: Produktutvikling
// ============================================================================

// ----------------------------------------------------------------------------
// 7.1 Designprosessen fra ide til produkt
// ----------------------------------------------------------------------------

export const CHAPTER_HANDVERK_DESIGN_VG1_7_1: TextbookChapter = {
  id: 'handverk-design-vg1-7-1',
  courseId: 'handverk-design-vg1',
  chapterNumber: '7.1',
  title: 'Designprosessen fra ide til produkt',
  description: 'Helhetlig gjennomgang av designprosessen med alle faser fra ideutvikling til ferdig produkt. Elevene laerer a planlegge og strukturere en komplett produktutviklingsprosess.',
  estimatedMinutes: 55,
  competenceGoals: [
    'planlegge og dokumentere en design- og produktutviklingsprosess alene og i samarbeid med andre innenfor gitte tidsrammer',
  ],
  content: [
    {
      id: 'handverk-design-vg1-7-1-intro',
      type: 'text',
      content: `## Fra ide til ferdig produkt

A utvikle et nytt produkt er en spennende reise som starter med en ide og ender med noe du kan holde i hendene. Men mellom disse to punktene ligger det en strukturert prosess som sikrer at produktet blir bade funksjonelt og estetisk tilfredsstillende.

I dette kapittelet skal vi se pa hele designprosessen fra start til slutt. Du vil laere hvordan profesjonelle designere arbeider systematisk for a omdanne ideer til ferdige produkter, og hvordan du selv kan bruke denne kunnskapen i dine egne prosjekter.

**Hvorfor trenger vi en designprosess?**

Uten en strukturert tilnaerming risikerer vi a:
- Glemme viktige trinn i utviklingen
- Bruke unodvendig mye tid og ressurser
- Lage produkter som ikke moter brukernes behov
- Oppdage problemer for sent i prosessen`,
    },
    {
      id: 'handverk-design-vg1-7-1-def-1',
      type: 'definition',
      title: 'Designprosessen',
      content: `Designprosessen er en systematisk metode for a utvikle nye produkter eller forbedre eksisterende. Den bestar av flere definerte faser som ideutvikling, research, skissering, prototyping, testing og produksjon. Prosessen er ofte iterativ, noe som betyr at man gar tilbake og forbedrer losninger underveis.`,
    },
    {
      id: 'handverk-design-vg1-7-1-text-1',
      type: 'text',
      content: `## Fasene i designprosessen

**Fase 1: Problemdefinisjon og research**
- Identifisere behov eller problem som skal loses
- Undersoke eksisterende losninger pa markedet
- Kartlegge malgruppen og brukerkrav
- Definere rammer: tid, budsjett, materialer

**Fase 2: Ideutvikling**
- Brainstorming og kreative teknikker
- Mange ideer uten sensur
- Skissering av konsepter
- Velge ut de mest lovende ideene

**Fase 3: Konseptutvikling**
- Videreutvikle valgte ideer
- Detaljerte skisser og tegninger
- Materialvalg og produksjonsmetoder
- Vurdere gjennomforbarhet

**Fase 4: Prototyping**
- Lage fysiske modeller
- Teste funksjonalitet og utseende
- Fa tilbakemeldinger fra brukere
- Justere og forbedre

**Fase 5: Produksjon**
- Lage det ferdige produktet
- Kvalitetskontroll
- Dokumentasjon av prosessen`,
    },
    {
      id: 'handverk-design-vg1-7-1-def-2',
      type: 'definition',
      title: 'Iterativ prosess',
      content: `En iterativ prosess betyr at man arbeider i sykluser der man stadig gar tilbake og forbedrer. I stedet for a ga lineaert fra start til slutt, tillater iterasjon at man laerer av feil og justerer kursen underveis. Hver gjentakelse (iterasjon) bringer produktet naermere det optimale resultatet.`,
    },
    {
      id: 'handverk-design-vg1-7-1-text-2',
      type: 'text',
      content: `## Planlegging og tidsstyring

God planlegging er nokkel til suksess i ethvert designprosjekt. Nar du har begrenset tid, ma du prioritere og fordele tiden klokt mellom de ulike fasene.

**Verktoy for planlegging:**

**Gantt-diagram**
- Visuell fremstilling av tidsplan
- Viser oppgaver langs en tidslinje
- Avhengigheter mellom oppgaver
- Lett a se fremdrift

**Milepaler**
- Viktige kontrollpunkter i prosjektet
- Definerer nar faser skal vaere ferdige
- Gir mulighet for evaluering underveis
- Holder prosjektet pa sporet

**Tidsbudsjett**
Fordel tilgjengelig tid mellom fasene:
- Research og ideutvikling: 20%
- Konseptutvikling og skissering: 25%
- Prototyping og testing: 30%
- Produksjon og finish: 20%
- Buffer for uforutsette problemer: 5%`,
    },
    {
      id: 'handverk-design-vg1-7-1-text-3',
      type: 'text',
      content: `## Dokumentasjon av prosessen

A dokumentere arbeidet underveis er viktig av flere grunner:
- Du kan ga tilbake og se hva du har provet
- Laereren kan vurdere prosessen, ikke bare resultatet
- Du laerer av egne erfaringer
- Profesjonelle designere gjor dette alltid

**Hva bor dokumenteres?**
- Skisser og tegninger (ogsa de som ble forkastet)
- Notater fra research og brukerundersokelser
- Materialprover og fargevalg
- Bilder av prototyper og testresultater
- Refleksjoner og begrunnelser for valg
- Endringer som ble gjort underveis

**Format for dokumentasjon:**
- Arbeidsbok eller designdagbok
- Digital mappe med bilder og tekst
- Presentasjon med visuell tidslinje
- Video som viser prosessen`,
    },
    {
      id: 'handverk-design-vg1-7-1-example-1',
      type: 'example',
      title: 'Eksempel: Tidsplan for lampeskjermprosjekt',
      content: `**Prosjekt:** Design og produksjon av lampeskjerm
**Tilgjengelig tid:** 6 uker (12 timer verkstedtid)

**Uke 1-2: Research og ideutvikling (4 timer)**
- Undersoke ulike lampeskjermtyper
- Kartlegge materialmuligheter
- Brainstorming og 20+ skisser
- Velge 3 konsepter a videreutvikle

**Uke 3: Konseptutvikling (2 timer)**
- Detaljerte tegninger av 3 konsepter
- Materialprover og fargetesting
- Velge endelig konsept
- Milepael: Konsept godkjent

**Uke 4: Prototyping (2 timer)**
- Lage papirprototype
- Teste storrelse og proporsjoner
- Justere design basert pa test

**Uke 5-6: Produksjon (4 timer)**
- Tilskjaering av materialer
- Montering og sammenfoying
- Overflatebehandling
- Milepael: Ferdig produkt`,
    },
    {
      id: 'handverk-design-vg1-7-1-tip-1',
      type: 'tip',
      title: 'Tips for god tidsstyring',
      content: `Start alltid bakfra nar du planlegger. Sett sluttdatoen forst, og arbeid deg deretter bakover til start. Dette sikrer at du har nok tid til alle faser. Husk a legge inn buffer - det tar nesten alltid lengre tid enn du tror!`,
    },
    {
      id: 'handverk-design-vg1-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv de fem hovedfasene i designprosessen.',
        solution: 'De fem hovedfasene er: 1) Problemdefinisjon og research - identifisere behov og undersoke eksisterende losninger, 2) Ideutvikling - brainstorming og skissering av mange konsepter, 3) Konseptutvikling - videreutvikle valgte ideer med detaljer, 4) Prototyping - lage fysiske modeller og teste dem, 5) Produksjon - lage det ferdige produktet med kvalitetskontroll.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva betyr det at designprosessen er iterativ?',
        options: [
          { id: 'a', text: 'At man bare gar fremover i prosessen', isCorrect: false },
          { id: 'b', text: 'At man arbeider i sykluser og gar tilbake for a forbedre', isCorrect: true },
          { id: 'c', text: 'At man hopper over noen faser', isCorrect: false },
          { id: 'd', text: 'At man jobber med flere prosjekter samtidig', isCorrect: false },
        ],
        solution: 'Iterativ betyr at man arbeider i sykluser der man stadig gar tilbake og forbedrer. I stedet for a ga lineaert fra start til slutt, tillater iterasjon at man laerer av feil og justerer kursen underveis.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Du har fatt 4 uker til a designe og lage en enkel oppbevaringsboks.',
        subTasks: [
          {
            label: 'a',
            task: 'Lag en tidsplan med faser og tidsfordeling.',
            solution: 'Eksempel: Uke 1: Research og ideutvikling (25%), Uke 2: Konseptutvikling og skissering (25%), Uke 3: Prototyping og testing (30%), Uke 4: Produksjon og finish (20%).',
          },
          {
            label: 'b',
            task: 'Definer to milepaler for prosjektet.',
            solution: 'Eksempel: Milepael 1 (slutten av uke 2): Endelig konsept valgt og godkjent. Milepael 2 (midten av uke 4): Produktet ferdig montert, kun overflatebehandling gjenstår.',
          },
        ],
        solution: 'Tidsplanen bor vise en logisk fordeling av tid mellom fasene, med mest tid til prototyping og produksjon. Milepaelene bor vaere konkrete kontrollpunkter som markerer viktige overganger i prosjektet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor er det viktig a dokumentere designprosessen underveis?',
        solution: 'Dokumentasjon er viktig fordi: 1) Du kan ga tilbake og se hva du har provet tidligere, 2) Laereren kan vurdere hele prosessen og ikke bare sluttresultatet, 3) Du laerer av egne erfaringer ved a reflektere over valg og feil, 4) Det er profesjonell praksis som alle designere bruker, 5) Det hjelper deg a forklare og begrunnende designvalgene dine.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvor stor andel av tiden bor settes av til buffer for uforutsette problemer?',
        options: [
          { id: 'a', text: '0% - alt bor planlegges', isCorrect: false },
          { id: 'b', text: '5% - litt ekstra tid', isCorrect: true },
          { id: 'c', text: '50% - halvparten av tiden', isCorrect: false },
          { id: 'd', text: '100% - dobbel tid pa alt', isCorrect: false },
        ],
        solution: 'En buffer pa ca. 5% av tiden er anbefalt for a handtere uforutsette problemer uten a forsinke hele prosjektet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Designprosessen', definition: 'Systematisk metode for a utvikle produkter gjennom definerte faser' },
    { term: 'Iterativ prosess', definition: 'Arbeide i sykluser der man gar tilbake og forbedrer underveis' },
    { term: 'Milepael', definition: 'Viktig kontrollpunkt som markerer fullforelsen av en fase' },
    { term: 'Gantt-diagram', definition: 'Visuell fremstilling av tidsplan med oppgaver langs en tidslinje' },
    { term: 'Konseptutvikling', definition: 'Fasen der valgte ideer videreutvikles med detaljer og spesifikasjoner' },
    { term: 'Dokumentasjon', definition: 'Systematisk registrering av prosessen gjennom skisser, notater og bilder' },
  ],
};

// ----------------------------------------------------------------------------
// 7.2 Brukerundersokelser og behovsanalyse
// ----------------------------------------------------------------------------

export const CHAPTER_HANDVERK_DESIGN_VG1_7_2: TextbookChapter = {
  id: 'handverk-design-vg1-7-2',
  courseId: 'handverk-design-vg1',
  chapterNumber: '7.2',
  title: 'Brukerundersokelser og behovsanalyse',
  description: 'Metoder for a kartlegge brukerbehov og markedsmuligheter som grunnlag for produktutvikling. Elevene laerer a gjennomfore enkle brukerundersokelser og analysere ettersporsel.',
  estimatedMinutes: 45,
  competenceGoals: [
    'utforske og formidle hvordan ettersporsel, kultur, tradisjon, trender og baerekraft har betydning for handverksfagene lokalt og regionalt',
  ],
  content: [
    {
      id: 'handverk-design-vg1-7-2-intro',
      type: 'text',
      content: `## A forsta brukeren

Det fineste produktet i verden har liten verdi hvis ingen har bruk for det. Derfor starter all god produktutvikling med a forsta hvem som skal bruke produktet og hva de faktisk trenger.

Brukerundersokelser og behovsanalyse handler om a samle informasjon om potensielle brukere for du begynner a designe. Ved a investere tid i denne fasen, oker du sjansen for a lage noe som virkelig moter et behov i markedet.

**Hvorfor undersoke brukerne?**
- Avdekke reelle behov, ikke bare antakelser
- Unnga a lage produkter ingen vil ha
- Fa inspirasjon til nye losninger
- Forstå begrensninger og krav`,
    },
    {
      id: 'handverk-design-vg1-7-2-def-1',
      type: 'definition',
      title: 'Behovsanalyse',
      content: `Behovsanalyse er en systematisk undersokelse av hva brukerne trenger og onsker. Analysen kartlegger bade uttalte behov (det folk sier de vil ha) og latente behov (behov de ikke er klar over selv). Resultatet danner grunnlaget for produktkrav og designvalg.`,
    },
    {
      id: 'handverk-design-vg1-7-2-text-1',
      type: 'text',
      content: `## Metoder for brukerundersokelser

**Intervjuer**
- Samtale med potensielle brukere
- Apne sporsmal gir dypere innsikt
- Kan avdekke uventede behov
- Tidkrevende, men verdifullt

**Sporreundersokelser**
- Nar mange med standardiserte sporsmal
- Lett a analysere kvantitative data
- Gir oversikt over preferanser
- Begrenset dybde i svarene

**Observasjon**
- Se hvordan folk bruker eksisterende produkter
- Avdekker problemer brukerne ikke nevner
- Gir ideer til forbedringer
- Krever tilgang til brukerens miljo

**Fokusgrupper**
- Gruppesamtale om et tema
- Deltakerne inspirerer hverandre
- Effektivt for a teste konsepter
- Krever god fasilitering`,
    },
    {
      id: 'handverk-design-vg1-7-2-def-2',
      type: 'definition',
      title: 'Malgruppe',
      content: `Malgruppen er den spesifikke gruppen mennesker produktet er ment for. A definere malgruppen tydelig hjelper deg a ta designvalg som passer brukerne. Malgruppen kan beskrives med demografiske faktorer (alder, kjonn, inntekt) og psykografiske faktorer (livsstil, verdier, interesser).`,
    },
    {
      id: 'handverk-design-vg1-7-2-text-2',
      type: 'text',
      content: `## Fra brukerinnsikt til produktkrav

Nar du har samlet informasjon om brukerne, ma denne analyseres og omdannes til konkrete produktkrav.

**Trinn i analysen:**

1. **Sammenstille data**
   - Samle all informasjon pa ett sted
   - Se etter monster og gjentakelser
   - Noter uventede funn

2. **Identifisere hovedbehov**
   - Hva er de viktigste behovene?
   - Prioriter etter betydning for brukeren
   - Skill mellom ma-ha og kjekt-a-ha

3. **Formulere produktkrav**
   - Oversett behov til konkrete krav
   - Vaer spesifikk og maalbar
   - Inkluder bade funksjon og estetikk

**Eksempel pa produktkrav:**
- Produktet skal vaere lett a rengjore
- Maksimal vekt: 500 gram
- Skal tåle daglig bruk i minst 5 ar
- Fargene skal appellere til unge voksne`,
    },
    {
      id: 'handverk-design-vg1-7-2-text-3',
      type: 'text',
      content: `## Markedsforstaelse

I tillegg til a forsta brukerne, er det nyttig a forsta markedet produktet skal inn i.

**Undersok konkurrentene:**
- Hvilke lignende produkter finnes?
- Hva gjor de bra og darlig?
- Hvor er det muligheter for forbedring?
- Hva skiller ditt produkt fra andre?

**Trender og ettersporsel:**
- Hva er populaert akkurat na?
- Hvilke trender er pa vei opp?
- Er det sesongvariasjoner?
- Hvordan pavirker baerekraft ettersporselen?

**Lokal kontekst:**
- Hva er etterspurt i ditt naermiljo?
- Finnes det lokale tradisjoner a bygge pa?
- Hvilke materialer er tilgjengelige lokalt?
- Er det nisjemarkeder som er underservert?`,
    },
    {
      id: 'handverk-design-vg1-7-2-example-1',
      type: 'example',
      title: 'Eksempel: Behovsanalyse for nokkelholder',
      content: `**Prosjekt:** Designe en nokkelholder for entrebruk

**Malgruppe:** Familier med barn i aldersgruppen 25-45 ar

**Intervjufunn (5 intervjuer):**
- Alle mistet nokler regelmessig
- Onskjer fast plass for nokler naer inngangen
- Barn trenger lav plassering
- Mange har flere sett nokler
- Estetikk er viktig - ma passe til interiret

**Observasjoner:**
- Mange legger nokler pa forskjellige steder
- Barna lar noklene ligge i jakkelommen
- Eksisterende nokkelholdere var fulle og rotete

**Produktkrav basert pa analyse:**
1. Plass til minst 4 nokkelsett
2. Todelt: en del for voksne, en lav del for barn
3. Enkel a montere pa vegg
4. Naturfarge i tre som passer skandinavisk stil
5. Maks storrelse: 30 x 20 cm`,
    },
    {
      id: 'handverk-design-vg1-7-2-tip-1',
      type: 'tip',
      title: 'Tips for gode intervjuer',
      content: `Still apne sporsmal som starter med "hvordan", "hvorfor" og "fortell om". Unnga ja/nei-sporsmal. La intervjuobjektet snakke fritt og folg opp interessante svar med oppfolgingssporsmal. Ikke led svarene i en bestemt retning.`,
    },
    {
      id: 'handverk-design-vg1-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom uttalte behov og latente behov.',
        solution: 'Uttalte behov er det folk direkte sier de vil ha eller trenger - det de selv er klar over. Latente behov er behov folk ikke er bevisst pa selv, men som blir tydelige nar man observerer dem eller presenterer nye losninger. For eksempel visste ingen at de trengte smartphones for de fantes, men na er de uunnvaerlige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken metode er best for a avdekke problemer brukerne selv ikke nevner?',
        options: [
          { id: 'a', text: 'Sporreundersokelse', isCorrect: false },
          { id: 'b', text: 'Observasjon', isCorrect: true },
          { id: 'c', text: 'Fokusgruppe', isCorrect: false },
          { id: 'd', text: 'Telefonintervju', isCorrect: false },
        ],
        solution: 'Observasjon er best for a avdekke problemer brukerne ikke nevner selv, fordi du ser hvordan de faktisk bruker produkter i praksis - ikke bare hva de sier de gjor.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Du skal designe en oppbevaringslosning for sminkeprodukter. Definer malgruppen og lag 5 intervjusporsmal.',
        solution: 'Malgruppe: Kvinner 16-35 ar som bruker sminke regelmessig. Sporsmal: 1) Hvordan oppbevarer du sminkeprodukter i dag? 2) Hva er det storste problemet med din naværende losning? 3) Fortell om en situasjon der du ikke fant noe du trengte. 4) Hvor mye plass har du tilgjengelig pa badet? 5) Hva er viktigst for deg: praktisk, pen a se pa, eller billig?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gjennomfor en mini-brukerundersokelse.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et produkt du bruker daglig og intervju 3 personer om deres opplevelse med lignende produkter.',
            solution: 'Dokumenter hvem du intervjuet, hvilke sporsmal du stilte, og hovedpunktene fra svarene.',
          },
          {
            label: 'b',
            task: 'Formuler 3 produktkrav basert pa intervjuene.',
            solution: 'Produktkravene bor vaere konkrete og maalbare, og direkte knyttet til funn fra intervjuene.',
          },
        ],
        solution: 'Oppgaven krever praktisk gjennomforing av intervjuer og analyse. Svarene vil variere basert pa valgt produkt og intervjuobjekter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Behovsanalyse', definition: 'Systematisk undersokelse av hva brukerne trenger og onsker' },
    { term: 'Malgruppe', definition: 'Den spesifikke gruppen mennesker produktet er ment for' },
    { term: 'Uttalte behov', definition: 'Behov folk selv er klar over og kan uttrykke' },
    { term: 'Latente behov', definition: 'Behov folk ikke er bevisst pa for de ser en losning' },
    { term: 'Produktkrav', definition: 'Konkrete, maalbare krav produktet ma oppfylle' },
    { term: 'Fokusgruppe', definition: 'Gruppesamtale for a samle innsikt om et tema' },
  ],
};

// ----------------------------------------------------------------------------
// 7.3 Prototyping og modellbygging
// ----------------------------------------------------------------------------

export const CHAPTER_HANDVERK_DESIGN_VG1_7_3: TextbookChapter = {
  id: 'handverk-design-vg1-7-3',
  courseId: 'handverk-design-vg1',
  chapterNumber: '7.3',
  title: 'Prototyping og modellbygging',
  description: 'Praktisk opplaering i a lage prototyper og modeller for testing og evaluering av produktideer. Elevene laerer ulike prototypeteknikker fra enkle papirmodeller til funksjonelle prototyper.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utforske og lage handverksprodukter med presisjon og noyaktighet med utgangspunkt i eget planleggingsarbeid og gitte tidsfrister',
  ],
  content: [
    {
      id: 'handverk-design-vg1-7-3-intro',
      type: 'text',
      content: `## Prototyper - a gjore ideer haandgripelige

En skisse kan vise hvordan noe ser ut, men en prototype lar deg kjenne pa, teste og forbedre designet for du lager det ferdige produktet. Prototyping er en av de viktigste ferdighetene i produktutvikling.

A bygge prototyper tidlig og ofte sparer tid og penger. Det er mye billigere a oppdage problemer i en papirmodell enn i det ferdige produktet. Gode designere lager mange prototyper og laerer noe nytt av hver enkelt.

**Fordeler med prototyping:**
- Tester ideer raskt og billig
- Avdekker problemer tidlig
- Kommuniserer ideer bedre enn tegninger
- Gir konkret tilbakemelding fra brukere
- Driver kreativiteten videre`,
    },
    {
      id: 'handverk-design-vg1-7-3-def-1',
      type: 'definition',
      title: 'Prototype',
      content: `En prototype er en tidlig versjon av et produkt laget for a teste og evaluere konsepter. Prototyper kan variere fra raske skisser i papir til fullt funksjonelle modeller. Formalet er a laere mest mulig med minst mulig innsats for du forplikter deg til endelig produksjon.`,
    },
    {
      id: 'handverk-design-vg1-7-3-text-1',
      type: 'text',
      content: `## Typer prototyper

**Papirprototyper (Lo-fi)**
- Raske og billige a lage
- Perfekt for a teste storrelse og form
- Kan lages av papp, papir, tape
- Brukes tidlig i prosessen
- Fokus: Grunnleggende konsept

**Volummodeller**
- Viser 3D-form og proporsjoner
- Lages ofte i skumplast eller leire
- Ikke funksjonelle
- Tester ergonomi og grep
- Fokus: Fysisk utforming

**Materialprover**
- Tester faktiske materialer
- Viser overflater og teksturer
- Viktig for estetiske valg
- Avdekker bearbeidingsproblemer
- Fokus: Materialkvaliteter

**Funksjonelle prototyper (Hi-fi)**
- Fungerer som det ferdige produktet
- Lages i riktige materialer
- Kan brukertestes grundig
- Krever mer tid og ressurser
- Fokus: Komplett testing`,
    },
    {
      id: 'handverk-design-vg1-7-3-def-2',
      type: 'definition',
      title: 'Iterasjon',
      content: `Iterasjon i prototyping betyr a lage flere versjoner av en prototype, der hver versjon bygger pa laeringen fra den forrige. Man tester, evaluerer, forbedrer og tester igjen. Malet er gradvis a naerme seg den optimale losningen gjennom gjentatte forbedringssykluser.`,
    },
    {
      id: 'handverk-design-vg1-7-3-text-2',
      type: 'text',
      content: `## Materialer for prototyping

**Papir og papp**
- Lett tilgjengelig og billig
- Enkelt a klippe og brette
- Godt for forste konsepter
- Begrensninger: Ikke holdbart

**Skumplast (styrofoam, foam board)**
- Lett a skaere og forme
- Gir volum uten vekt
- Godt for 3D-modeller
- Begrensninger: Skjort, detaljer vanskelig

**Leire og plastilin**
- Formbart og gjenbrukbart
- Godt for organiske former
- Kan tilpasses underveis
- Begrensninger: Ikke permanent

**Tre og MDF**
- Gir realistisk folelse
- Kan overflatebehandles
- Holdbare prototyper
- Begrensninger: Krever verktoy

**3D-printing**
- Presise, komplekse former
- Rask produksjon av deler
- Ulike materialer tilgjengelig
- Begrensninger: Krever utstyr og ferdigheter`,
    },
    {
      id: 'handverk-design-vg1-7-3-text-3',
      type: 'text',
      content: `## Iterativ prototyping i praksis

**Prinsippet: Fail fast, learn fast**
Jo fortere du oppdager at noe ikke fungerer, jo fortere kan du fikse det.

**Anbefalt fremgangsmate:**

**Runde 1: Raske skisser**
- Lag 5-10 papirmodeller pa 30 minutter
- Test grunnleggende konsepter
- Velg 2-3 a ga videre med

**Runde 2: Volummodeller**
- Lag mer detaljerte modeller av toppkandidatene
- Test storrelse, proporsjoner, grep
- Fa tilbakemelding fra andre
- Velg en retning

**Runde 3: Materialprover**
- Test materialer og teknikker
- Lag provestitkker i riktig materiale
- Vurder finish og overflate

**Runde 4: Funksjonell prototype**
- Lag en prototype som fungerer
- Test grundig med brukere
- Dokumenter alle funn
- Gjor siste justeringer`,
    },
    {
      id: 'handverk-design-vg1-7-3-example-1',
      type: 'example',
      title: 'Eksempel: Prototyping av mobiltelefonholder',
      content: `**Prosjekt:** Holder for mobiltelefon til bruk pa skrivebord

**Runde 1 - Papirprototyper (15 min)**
Brettet 5 ulike konsepter i papir:
- Vinkel 1: Liggende telefon
- Vinkel 2: Staende telefon
- Ulike stoetter og vinkler
- Laering: Staende vinkel pa ca. 70 grader fungerer best

**Runde 2 - Pappmodell (45 min)**
Laget en storre modell i papp:
- Testet med ekte telefon
- Oppdaget at basen var for liten - veltet
- Justerte bredden pa basen
- Laering: Basen ma vaere minst 8 cm bred

**Runde 3 - Treprototype (2 timer)**
Laget i 6mm MDF:
- Skar ut delene med lovsag
- Limt sammen med trelim
- Oppdaget at telefonen sklir ned
- La til gummikant nederst
- Laering: Trenger friksjonsmateriale

**Runde 4 - Endelig prototype (3 timer)**
Forbedret versjon i bjork:
- Pusset og behandlet overflaten
- La til filt pa undersiden
- Testet med flere telefonmodeller
- Klar for produksjon av flere`,
    },
    {
      id: 'handverk-design-vg1-7-3-tip-1',
      type: 'tip',
      title: 'Tips for effektiv prototyping',
      content: `Ikke vær perfeksjonist med prototyper - det er bortkastet tid. Prototypens formal er a laere, ikke a imponere. En stygg prototype som avdekker et problem er mer verdifull enn en pen prototype som ikke laerer deg noe nytt.`,
    },
    {
      id: 'handverk-design-vg1-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom en lo-fi og en hi-fi prototype.',
        solution: 'Lo-fi (lav troskap) prototyper er raske, enkle modeller laget av billige materialer som papir og papp. De brukes tidlig for a teste grunnleggende konsepter. Hi-fi (hoy troskap) prototyper er mer avanserte, laget i riktige materialer og fungerer naesten som det ferdige produktet. De brukes senere for grundig testing.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er hovedformalet med a lage prototyper?',
        options: [
          { id: 'a', text: 'A imponere kunder med flotte modeller', isCorrect: false },
          { id: 'b', text: 'A laere mest mulig med minst mulig innsats', isCorrect: true },
          { id: 'c', text: 'A unnga a lage det ferdige produktet', isCorrect: false },
          { id: 'd', text: 'A bruke opp restmaterialer', isCorrect: false },
        ],
        solution: 'Hovedformalet med prototyper er a laere mest mulig med minst mulig innsats. Ved a teste ideer tidlig og billig, unngår du kostbare feil i det ferdige produktet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn fire ulike materialer som kan brukes til prototyping, og beskriv hva hvert materiale egner seg til.',
        solution: '1) Papir/papp - egner seg til raske forste konsepter og testing av storrelse/form. 2) Skumplast - egner seg til 3D-volummodeller uten mye vekt. 3) Leire - egner seg til organiske former som kan justeres underveis. 4) Tre/MDF - egner seg til holdbare prototyper naer det ferdige produktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Praktisk oppgave: Lag tre papirprototyper av en penneholder.',
        subTasks: [
          {
            label: 'a',
            task: 'Lag tre ulike konsepter i papir eller papp.',
            solution: 'Dokumenter de tre konseptene med bilder eller skisser.',
          },
          {
            label: 'b',
            task: 'Test alle tre med ekte penner og vurder hvilken som fungerer best.',
            solution: 'Beskriv testkriterier (stabilitet, kapasitet, tilgjengelighet) og ranger konseptene.',
          },
          {
            label: 'c',
            task: 'Beskriv hva du laerte og hva du vil forbedre i neste runde.',
            solution: 'Refleksjoner bor inkludere konkrete forbedringspunkter basert pa testingen.',
          },
        ],
        solution: 'Oppgaven krever praktisk arbeid. Vurdering baseres pa variasjon i konsepter, kvalitet pa testing, og refleksjon over laering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva betyr prinsippet "fail fast, learn fast"?',
        options: [
          { id: 'a', text: 'A gi opp prosjekter raskt', isCorrect: false },
          { id: 'b', text: 'A oppdage feil tidlig sa de kan fikses billig', isCorrect: true },
          { id: 'c', text: 'A jobbe sa fort som mulig', isCorrect: false },
          { id: 'd', text: 'A unnga a lage prototyper', isCorrect: false },
        ],
        solution: '"Fail fast, learn fast" betyr at det er bra a oppdage feil tidlig i prosessen, fordi da kan de fikses enkelt og billig. Det er mye dyrere a oppdage feil i det ferdige produktet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-7-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv de fire rundene i en iterativ prototypingsprosess.',
        solution: 'Runde 1: Raske skisser - mange papirmodeller for a teste grunnleggende konsepter. Runde 2: Volummodeller - mer detaljerte modeller for a teste storrelse og proporsjoner. Runde 3: Materialprover - tester faktiske materialer og teknikker. Runde 4: Funksjonell prototype - en komplett versjon som kan brukertestes grundig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Prototype', definition: 'Tidlig versjon av et produkt laget for a teste og evaluere konsepter' },
    { term: 'Lo-fi prototype', definition: 'Enkel, rask prototype laget av billige materialer som papir' },
    { term: 'Hi-fi prototype', definition: 'Avansert prototype som ligner det ferdige produktet' },
    { term: 'Iterasjon', definition: 'A lage flere versjoner der hver bygger pa laering fra forrige' },
    { term: 'Volummodell', definition: 'Tredimensjonal modell som viser form og proporsjoner' },
    { term: 'Fail fast, learn fast', definition: 'Prinsipp om a oppdage feil tidlig for a laere raskt' },
  ],
};

// ----------------------------------------------------------------------------
// 7.4 Kostnadsberegning og priskalkulasjon
// ----------------------------------------------------------------------------

export const CHAPTER_HANDVERK_DESIGN_VG1_7_4: TextbookChapter = {
  id: 'handverk-design-vg1-7-4',
  courseId: 'handverk-design-vg1',
  chapterNumber: '7.4',
  title: 'Kostnadsberegning og priskalkulasjon',
  description: 'Innforing i metoder for a beregne kostnader og sette pris pa materialer og ferdige produkter. Elevene laerer om materialkostnader, tidsbruk, fortjeneste og markedsprising.',
  estimatedMinutes: 40,
  competenceGoals: [
    'beregne kostnader og pris pa materialer og produkter',
  ],
  content: [
    {
      id: 'handverk-design-vg1-7-4-intro',
      type: 'text',
      content: `## A sette riktig pris

Nar du lager handverksprodukter for salg, ma du vite hva de koster a produsere og hva du bor ta betalt. Mange handverkere setter for lav pris fordi de glemmer a regne med alt som gar med.

God priskalkulasjon sikrer at du far betalt for arbeidet ditt og kan drive lonnsomt. Samtidig ma prisen vaere konkurransedyktig nok til at folk vil kjope produktene dine.

**Hvorfor er kostnadsberegning viktig?**
- Sikrer at du ikke taper penger
- Gir grunnlag for prissetting
- Hjelper deg a sammenligne ulike produkter
- Nodvendig for a drive lonnsomme prosjekter`,
    },
    {
      id: 'handverk-design-vg1-7-4-def-1',
      type: 'definition',
      title: 'Selvkost',
      content: `Selvkost er den totale kostnaden for a produsere et produkt. Den inkluderer alle direkte kostnader (materialer, arbeidstid) og en andel av indirekte kostnader (verktoy, lokaler, strom). Selvkosten er minimumsprisen du ma ta for a ikke tape penger.`,
    },
    {
      id: 'handverk-design-vg1-7-4-text-1',
      type: 'text',
      content: `## Kostnadstyper

**Direkte kostnader**
Kostnader som kan knyttes direkte til produktet:

*Materialkostnader*
- Ramaterialer (tre, stoff, metall)
- Forbruksvarer (lim, skruer, trå)
- Emballasje og innpakning

*Arbeidskostnader*
- Timer brukt pa produksjon
- Timesats/timepris
- Design- og planleggingstid

**Indirekte kostnader**
Kostnader som deles pa flere produkter:

- Verktoy og maskiner (slitasje)
- Verksted/lokaler
- Strom og oppvarming
- Markedsforing
- Transport`,
    },
    {
      id: 'handverk-design-vg1-7-4-def-2',
      type: 'definition',
      title: 'Fortjenestemargin',
      content: `Fortjenestemargin (paslag) er prosenten som legges pa selvkosten for a gi overskudd. Marginen ma dekke risiko, utvikling av nye produkter, og lonnsomhet. Vanlige marginer for handverk er 30-100% avhengig av marked og produkttype.`,
    },
    {
      id: 'handverk-design-vg1-7-4-text-2',
      type: 'text',
      content: `## Kalkylemodell for handverksprodukter

**Trinn 1: Beregn materialkostnader**
- List opp alle materialer med mengde og pris
- Husk spon (materialsvinn)
- Inkluder forbruksvarer

**Trinn 2: Beregn arbeidskostnader**
- Estimer tidsbruk i timer
- Bestem timesats (f.eks. 200-400 kr)
- Arbeidskostnad = Timer x Timesats

**Trinn 3: Legg til indirekte kostnader**
- Ofte beregnet som prosent av direkte kostnader
- Typisk 10-30% for hobbyverksted
- Hoyre for profesjonelle verksteder

**Trinn 4: Beregn selvkost**
Selvkost = Materialer + Arbeid + Indirekte kostnader

**Trinn 5: Legg til fortjeneste**
Salgspris = Selvkost x (1 + Fortjenestemargin)

Eksempel: Selvkost 500 kr med 50% margin
Salgspris = 500 x 1,5 = 750 kr`,
    },
    {
      id: 'handverk-design-vg1-7-4-text-3',
      type: 'text',
      content: `## Markedstilpasning av pris

Kalkulert pris er et utgangspunkt, men ma vurderes mot markedet:

**Konkurransepris**
- Hva tar andre for lignende produkter?
- Er ditt produkt bedre eller darligere?
- Kan du forsvare en hoyere pris?

**Kundenes betalingsvilje**
- Hva er kundene villige til a betale?
- Pavirkes av merkevare og eksklusivitet
- Handverk kan ofte ta premium-pris

**Volum vs. margin**
- Lay pris = flere salg, lavere margin per enhet
- Hoy pris = faerre salg, hoyere margin per enhet
- Finn balansen som gir best total inntekt

**Tips for prissetting:**
- Ikke undervurder tiden din
- Husk at unike handverksprodukter har verdi
- Vaer konsekvent med priser
- Vurder a tilby ulike prisklasser`,
    },
    {
      id: 'handverk-design-vg1-7-4-example-1',
      type: 'example',
      title: 'Eksempel: Priskalkyle for trebrett',
      content: `**Produkt:** Handlaget skjaerebrett i eik

**Materialkostnader:**
- Eikeplanke 30x20 cm: 85 kr
- Matolje for behandling: 15 kr
- Sandpapir (forbruk): 10 kr
- **Sum materialer: 110 kr**

**Arbeidskostnader:**
- Tilskjaering og hobling: 0,5 timer
- Sliping og finish: 1 time
- Oljebehandling (inkl. torking): 0,5 timer
- **Sum: 2 timer x 250 kr = 500 kr**

**Indirekte kostnader (20%):**
- (110 + 500) x 0,20 = 122 kr

**Selvkost:**
- 110 + 500 + 122 = **732 kr**

**Salgspris med 40% fortjeneste:**
- 732 x 1,4 = **1025 kr**

**Markedsvurdering:**
- Lignende brett selges for 800-1200 kr
- Prisen er konkurransedyktig
- Kan vurdere 999 kr som psykologisk pris`,
    },
    {
      id: 'handverk-design-vg1-7-4-tip-1',
      type: 'tip',
      title: 'Tips for korrekt tidsberegning',
      content: `For produkter du aldri har laget for: Estimer tiden, og gang med 1,5. Erfaring viser at ting tar lengre tid enn man tror. Etter a ha laget noen eksemplarer far du mer norjaktig tidsbruk.`,
    },
    {
      id: 'handverk-design-vg1-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom direkte og indirekte kostnader.',
        solution: 'Direkte kostnader kan knyttes direkte til et spesifikt produkt, som materialer og arbeidstid. Indirekte kostnader deles pa flere produkter og inkluderer ting som verktoyslitasje, lokaler, strom og markedsforing. Begge ma regnes med for a finne den virkelige kostnaden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er selvkost?',
        options: [
          { id: 'a', text: 'Prisen du selger for', isCorrect: false },
          { id: 'b', text: 'Kun materialkostnaden', isCorrect: false },
          { id: 'c', text: 'Total kostnad for a produsere et produkt', isCorrect: true },
          { id: 'd', text: 'Fortjenesten du far', isCorrect: false },
        ],
        solution: 'Selvkost er den totale kostnaden for a produsere et produkt, inkludert materialer, arbeid og indirekte kostnader. Det er minimumsprisen for a ikke tape penger.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Du skal lage en enkel trekrukke. Lag en priskalkyle.',
        subTasks: [
          {
            label: 'a',
            task: 'List opp materialkostnadene (bruk realistiske priser).',
            solution: 'Eksempel: Fururplanker 100 kr, skruer 20 kr, lim 15 kr, beis 25 kr. Sum: 160 kr.',
          },
          {
            label: 'b',
            task: 'Estimer arbeidstid og beregn arbeidskostnad med timesats 200 kr.',
            solution: 'Eksempel: 3 timer x 200 kr = 600 kr.',
          },
          {
            label: 'c',
            task: 'Beregn selvkost med 20% indirekte kostnader.',
            solution: 'Eksempel: (160 + 600) x 1,2 = 912 kr selvkost.',
          },
          {
            label: 'd',
            task: 'Foreslå salgspris med 35% fortjenestemargin.',
            solution: 'Eksempel: 912 x 1,35 = 1231 kr. Kan rundes til 1250 kr.',
          },
        ],
        solution: 'Kalkylen bor vise systematisk gjennomgang av alle kostnadstyper og ende med en begrunnet salgspris.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor ma man vurdere markedet i tillegg til kalkulert pris?',
        solution: 'Markedsvurdering er viktig fordi: 1) Konkurrentpriser pavirker hva kundene forventer a betale, 2) Kundenes betalingsvilje varierer mellom markeder, 3) Et unikt handverksprodukt kan ta hoyre pris enn kalkylen tilsier, 4) For a selge ma prisen vaere akseptabel for malgruppen, ikke bare dekke kostnadene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvis selvkost er 400 kr og du legger pa 50% fortjenestemargin, hva blir salgsprisen?',
        options: [
          { id: 'a', text: '450 kr', isCorrect: false },
          { id: 'b', text: '500 kr', isCorrect: false },
          { id: 'c', text: '600 kr', isCorrect: true },
          { id: 'd', text: '800 kr', isCorrect: false },
        ],
        solution: 'Salgspris = Selvkost x (1 + Margin) = 400 x 1,5 = 600 kr',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Selvkost', definition: 'Total kostnad for a produsere et produkt inkludert alle kostnader' },
    { term: 'Direkte kostnader', definition: 'Kostnader som kan knyttes direkte til et produkt' },
    { term: 'Indirekte kostnader', definition: 'Felleskostnader som fordeles pa flere produkter' },
    { term: 'Fortjenestemargin', definition: 'Prosent som legges pa selvkost for a gi overskudd' },
    { term: 'Timesats', definition: 'Pris per arbeidstime brukt i kalkyler' },
    { term: 'Markedspris', definition: 'Pris som markedet og konkurrenter opererer med' },
  ],
};

// ----------------------------------------------------------------------------
// 7.5 Presentasjon av ideer og produkter
// ----------------------------------------------------------------------------

export const CHAPTER_HANDVERK_DESIGN_VG1_7_5: TextbookChapter = {
  id: 'handverk-design-vg1-7-5',
  courseId: 'handverk-design-vg1',
  chapterNumber: '7.5',
  title: 'Presentasjon av ideer og produkter',
  description: 'Utvikling av ferdigheter i a presentere ideer og ferdige produkter for kunder og andre interessenter. Elevene laerer a formidle produktenes historie, egenart og kvaliteter overbevisende.',
  estimatedMinutes: 45,
  competenceGoals: [
    'presentere ideer og produkter for kunder og andre og formidle produktenes historie og egenart',
  ],
  content: [
    {
      id: 'handverk-design-vg1-7-5-intro',
      type: 'text',
      content: `## A fortelle historien om produktet ditt

Et flott produkt selger ikke seg selv. Du må kunne formidle hva som gjor det spesielt, hvorfor du har laget det slik, og hvilken verdi det gir kunden. Presentasjonsferdigheter er like viktige som handverksferdigheter.

Enten du pitcher en ide til laereren, viser frem pa en utstilling, eller moter potensielle kunder, er evnen til a formidle entusiasme og kunnskap avgjorende.

**Gode presentasjoner:**
- Fanger oppmerksomheten
- Formidler verdi og kvalitet
- Skaper tillit til deg som handverker
- Inspirerer til kjop eller stotte`,
    },
    {
      id: 'handverk-design-vg1-7-5-def-1',
      type: 'definition',
      title: 'Produkthistorie',
      content: `Produkthistorien er fortellingen om hvordan og hvorfor produktet ble til. Den kan inkludere inspirasjonskilde, designprosessen, materialvalg, handverkstradisjoner og personlig tilknytning. En god produkthistorie skaper emosjonell tilknytning og gjor produktet mer verdifullt for kunden.`,
    },
    {
      id: 'handverk-design-vg1-7-5-text-1',
      type: 'text',
      content: `## Elementer i en god produktpresentasjon

**Apning - fang interessen**
- Start med noe overraskende eller engasjerende
- Still et sporsmal publikum kan kjenne seg igjen i
- Vis produktet pa en dramatisk mate
- Unnga a starte med "Hei, jeg skal snakke om..."

**Historien - skap tilknytning**
- Hvorfor laget du dette produktet?
- Hva inspirerte designet?
- Hvilke utfordringer loste du?
- Personlige elementer gjor det minneverdig

**Egenskaper - vis kvaliteten**
- Hvilke materialer er brukt og hvorfor?
- Hva gjor produktet spesielt?
- Demonstrer funksjonalitet
- Fremhev handverksdetaljer

**Verdi - forklar nytten**
- Hvilket problem loser produktet?
- Hvordan forbedrer det hverdagen?
- Hva far kunden som ingen andre tilbyr?
- Hvorfor er det verdt prisen?

**Avslutning - oppfordring til handling**
- Oppsummer hovedpoengene
- Inviter til sporsmal eller kontakt
- Gjor det enkelt a kjope/bestille`,
    },
    {
      id: 'handverk-design-vg1-7-5-def-2',
      type: 'definition',
      title: 'Visuell presentasjon',
      content: `Visuell presentasjon handler om a vise produktet pa best mulig mate gjennom bilder, plakater, utstillinger eller digitale medier. Gode visuelle presentasjoner bruker lys, bakgrunn, vinkling og kontekst for a fremheve produktets kvaliteter og skape profesjonelt inntrykk.`,
    },
    {
      id: 'handverk-design-vg1-7-5-text-2',
      type: 'text',
      content: `## Visuell presentasjon

**Produktfotografering**
- Bruk god belysning (naturlig lys er ofte best)
- Velg nodral bakgrunn som ikke stjeler fokus
- Ta bilder fra flere vinkler
- Inkluder nærbilder av detaljer
- Vis produktet i bruk (kontekstbilder)

**Utstilling og display**
- Plasser produktet i oyehoyde
- Bruk rekvisitter som forsterker budskapet
- Hold omradet rent og ryddig
- Lag tydelig skilting med pris og informasjon

**Digital presentasjon**
- Powerpoint/Google Slides for formelle presentasjoner
- Video for a vise produktet i bruk
- Sosiale medier for markedsforing
- Nettside eller portfolio for profesjonelt inntrykk

**Tips for slides:**
- Maks 3-4 punkter per slide
- Store, tydelige bilder
- Minimal tekst - du snakker resten
- Enhetlig design gjennom presentasjonen`,
    },
    {
      id: 'handverk-design-vg1-7-5-text-3',
      type: 'text',
      content: `## Muntlig presentasjonsteknikk

**Forberedelse**
- Ov presentasjonen hoyt flere ganger
- Tidsbestem deg selv
- Forbered svar pa sannsynlige sporsmal
- Kjenn produktet ditt ut og inn

**Kroppssprak**
- Sta stott og apent
- Ha oynekontakt med publikum
- Bruk hendene naturlig for a illustrere
- Smil og vis entusiasme

**Stemmebruk**
- Snakk tydelig og rolig
- Varier toneleie for a holde interessen
- Bruk pauser for a la viktige poeng synke inn
- Unnga "ehm" og "liksom"

**Handtering av nervositet**
- Nervositet er normalt og kan gi energi
- Pust dypt for du starter
- Fokuser pa budskapet, ikke pa deg selv
- Husk: Publikum onsker at du skal lykkes`,
    },
    {
      id: 'handverk-design-vg1-7-5-example-1',
      type: 'example',
      title: 'Eksempel: Produktpresentasjon av handlaget kopp',
      content: `**Apning:**
"Har dere noen gang holdt rundt en kopp som foltes som den var laget bare for dere? Det var det jeg onsket a skape."

**Historien:**
"Inspirert av min bestemors gamle kaffekopper fra 1960-tallet, onsket jeg a lage noe som kombinerer nostalgien med moderne design. Jeg eksperimenterte i flere uker med ulike former for jeg fant denne - bred nok for begge hender, men lett nok til a holde lenge."

**Egenskapene:**
"Koppen er dreid for hand i steingods og glasert med en unik koboltblå glasur jeg har utviklet selv. Legg merke til den tykke kanten her - den holder varmen lenger og foler deilig mot leppene."

**Verdien:**
"Dette er ikke bare en kopp - det er en daglig liten luksus. Hver morgen nar du tar den opp, vet du at den er laget med omtanke, bare for deg. Den taler oppvaskmaskin og er laget for a vare i generasjoner."

**Avslutning:**
"Jeg har noen eksemplarer tilgjengelig her i dag, og tar gjerne bestillinger pa egne fargevalg. Kom gjerne bort og kjenn pa den."`,
    },
    {
      id: 'handverk-design-vg1-7-5-tip-1',
      type: 'tip',
      title: 'Tips for kundekommunikasjon',
      content: `Lytt mer enn du snakker. Still sporsmal om hva kunden leter etter, og tilpass presentasjonen til deres behov. Hvis de er opptatt av holdbarhet, fremhev det. Hvis de setter pris pa estetikk, fokuser pa designet. La kunden ta og kjenne pa produktet - fysisk kontakt oker sjansen for kjop.`,
    },
    {
      id: 'handverk-design-vg1-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er de fem hovedelementene i en god produktpresentasjon?',
        solution: 'De fem hovedelementene er: 1) Apning - fang interessen med noe engasjerende, 2) Historien - skap tilknytning gjennom a fortelle om prosessen og inspirasjonen, 3) Egenskaper - vis kvaliteten og detaljene, 4) Verdi - forklar nytten og problemet det loser, 5) Avslutning - oppsummer og oppfordre til handling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er en produkthistorie?',
        options: [
          { id: 'a', text: 'En liste over produktets egenskaper', isCorrect: false },
          { id: 'b', text: 'Fortellingen om hvordan og hvorfor produktet ble til', isCorrect: true },
          { id: 'c', text: 'Prislisten for produktet', isCorrect: false },
          { id: 'd', text: 'Bruksanvisningen', isCorrect: false },
        ],
        solution: 'Produkthistorien er fortellingen om hvordan og hvorfor produktet ble til. Den skaper emosjonell tilknytning og gjor produktet mer verdifullt for kunden.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Skriv en kort produkthistorie for et handverksprodukt du har laget eller kunne tenke deg a lage.',
        solution: 'Svar vil variere. Historien bor inneholde: inspirasjonskilde, hvorfor du valgte dette prosjektet, utfordringer du motte, personlig tilknytning, og hva som gjor produktet spesielt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forbered og hold en 2-minutters presentasjon av et produkt for klassen.',
        subTasks: [
          {
            label: 'a',
            task: 'Lag et manus med alle fem elementer.',
            solution: 'Manuset bor ha tydelig apning, historie, egenskaper, verdi og avslutning.',
          },
          {
            label: 'b',
            task: 'Hold presentasjonen og fa tilbakemelding.',
            solution: 'Vurder kroppssprak, stemmebruk, struktur og overbevisningskraft.',
          },
        ],
        solution: 'Oppgaven krever praktisk gjennomforing. Vurdering baseres pa innhold, struktur, formidlingsevne og evne til a engasjere publikum.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Produkthistorie', definition: 'Fortellingen om hvordan og hvorfor produktet ble til' },
    { term: 'Visuell presentasjon', definition: 'A vise produktet pa best mulig mate gjennom bilder og utstilling' },
    { term: 'Kundekommunikasjon', definition: 'Dialog med potensielle kjopere for a forsta og mote deres behov' },
    { term: 'Kontekstbilde', definition: 'Produktfoto som viser produktet i bruk i riktig miljo' },
    { term: 'Pitch', definition: 'Kort, overbevisende presentasjon av en ide eller produkt' },
  ],
};

// ----------------------------------------------------------------------------
// 7.6 Fagterminologi og visuell kommunikasjon
// ----------------------------------------------------------------------------

export const CHAPTER_HANDVERK_DESIGN_VG1_7_6: TextbookChapter = {
  id: 'handverk-design-vg1-7-6',
  courseId: 'handverk-design-vg1',
  chapterNumber: '7.6',
  title: 'Fagterminologi og visuell kommunikasjon',
  description: 'Opplaering i korrekt bruk av fagterminologi og visuelle kommunikasjonsverktoy i handverksfaget. Elevene laerer a bruke presist fagsprak i dokumentasjon og kommunikasjon med andre.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke fagterminologi og visuelle virkemidler i kommunikasjon med andre og i dokumentasjon av eget arbeid',
  ],
  content: [
    {
      id: 'handverk-design-vg1-7-6-intro',
      type: 'text',
      content: `## A snakke faget

Hvert fag har sitt eget sprak - presise ord og uttrykk som gjor det mulig a kommunisere effektivt med andre fagfolk. Nar du bruker riktig fagterminologi, viser du kompetanse og unngår misforstaelser.

Visuell kommunikasjon er like viktig. Tegninger, diagrammer og symboler kan ofte formidle informasjon bedre enn ord. A mestre bade skriftlig og visuelt fagsprak er nodvendig for profesjonelt arbeid.

**Fordeler med god fagkommunikasjon:**
- Presisjon - unngår misforstaelser
- Effektivitet - spar tid i kommunikasjonen
- Profesjonalitet - viser kompetanse
- Dokumentasjon - riktig terminologi gjor arkiver sokebare`,
    },
    {
      id: 'handverk-design-vg1-7-6-def-1',
      type: 'definition',
      title: 'Fagterminologi',
      content: `Fagterminologi er spesialiserte ord og uttrykk som brukes innenfor et bestemt fagfelt. I handverk inkluderer dette navn pa verktoy, teknikker, materialer og prosesser. Presis bruk av fagterminologi sikrer entydig kommunikasjon mellom fagfolk.`,
    },
    {
      id: 'handverk-design-vg1-7-6-text-1',
      type: 'text',
      content: `## Viktige fagtermer innen handverk og design

**Designtermer:**
- Proporsjon - storelsen pa deler i forhold til hverandre
- Balanse - fordeling av visuelle elementer
- Ergonomi - tilpasning til menneskekroppen
- Form follows function - funksjon bestemmer form
- Estetikk - laeren om det vakre

**Materialtermer:**
- Fiberretning - retningen treet vokser
- Valsetning - retningen metall er valset
- Renning og innslag - tråder i veving
- Glasur - overflatebehandling pa keramikk

**Produksjonstermer:**
- Toleranse - tillatt avvik fra mal
- Finish - overflatekvalitet
- Sammenfoying - metode for a feste deler
- Prototype - testmodell
- Produksjonsserie - mange like produkter

**Teknikker:**
- Dreiing - forming pa dreieskive
- Smiing - forming av metall med varme
- Fresing - maskinell bearbeiding
- Pussing - finslliping av overflater`,
    },
    {
      id: 'handverk-design-vg1-7-6-def-2',
      type: 'definition',
      title: 'Arbeidstegning',
      content: `En arbeidstegning er en teknisk tegning med alle opplysninger som trengs for a produsere et produkt. Den inkluderer mal med toleranser, materialspesifikasjoner, overflatebehandling og eventuelt monteringsrekkefolge. Arbeidstegninger folger standardiserte konvensjoner for symboler og visninger.`,
    },
    {
      id: 'handverk-design-vg1-7-6-text-2',
      type: 'text',
      content: `## Visuell kommunikasjon i handverk

**Tekniske tegninger**
- Plantegning - sett ovenfra
- Oppriss - sett forfra
- Sideoppriss - sett fra siden
- Snittegning - viser innsiden
- Eksplosjonstegning - viser deler adskilt

**Maling og dimensjonering**
- Alle mal i millimeter (standard i Norge)
- Malpiler viser hva som males
- Toleranser angis nar presisjon er viktig
- Diameter markeres med O-symbol

**Symboler og konvensjoner**
- Stiplede linjer = skjulte kanter
- Senterlinjer = midtakse
- Skravering = snitflater
- Mallinjer med piler i endene

**Digital dokumentasjon**
- Fotografier av prosess og resultat
- Skjermbilder fra CAD-programmer
- Video av teknikker
- Organisert i mapper med tydelige navn`,
    },
    {
      id: 'handverk-design-vg1-7-6-text-3',
      type: 'text',
      content: `## God dokumentasjonspraksis

**Hva bor dokumenteres:**
- Alle trinn i designprosessen
- Materialvalg med begrunnelse
- Mal og spesifikasjoner
- Problemlosninger underveis
- Endringer fra opprinnelig plan
- Tidsbruk pa ulike aktiviteter
- Refleksjoner og laering

**Format for dokumentasjon:**
- Arbeidsbok med handskrevne notater og skisser
- Digital mappe med bilder og tekst
- Kombinasjon av begge

**Tips for god dokumentasjon:**
- Dokumenter underveis, ikke bare til slutt
- Bruk dato pa alle notater
- Ta bilder jevnlig gjennom prosessen
- Skriv kort, men presist
- Bruk riktig fagterminologi
- Organiser materialet logisk`,
    },
    {
      id: 'handverk-design-vg1-7-6-example-1',
      type: 'example',
      title: 'Eksempel: Prosessdokumentasjon',
      content: `**Prosjekt:** Liten oppbevaringsboks i tre
**Dato:** 15. januar

**Materialvalg:**
Valgte 12mm bjorkefiner for sidene og 6mm MDF for bunnen. Bjork gir fin overflate og er lett a beise. MDF er stabilt og billigere til bunnen som ikke synes.

**Dag 1 - Tilskjaering:**
Skar ut 4 sider 120x80mm og bunn 120x120mm. Brukte bordsag med anlegg. Toleranse +-0,5mm oppnadd. Problem: En side fikk litt brente kanter - reduserte matehastigheten.

**Dag 2 - Sammenfoying:**
Limt sammen med fingersinking i hjornene. Brukte trelim og spennband. Torkettid 24 timer. Sinkene passet godt etter justering med stemmejern.

**Dag 3 - Finish:**
Pusset med korn 120, 180 og 240. Paforte 2 lag vandig beis i farge "natur eik". Torkettid 4 timer mellom lag. Avsluttet med matt lakk.

**Refleksjon:**
Fornöyd med resultatet. Laerte at matehastighet pavirker brennmerker. Neste gang: Prøve oljebehandling i stedet for lakk for mer naturlig utseende.`,
    },
    {
      id: 'handverk-design-vg1-7-6-tip-1',
      type: 'tip',
      title: 'Tips for a laere fagterminologi',
      content: `Lag deg en egen ordliste der du skriver ned nye fagord du moter. Noter ordet, definisjonen, og et eksempel pa bruk. Les fagartikler og handverksboker aktivt. Bruk ordene i samtaler og skriftlig arbeid - da fester de seg.`,
    },
    {
      id: 'handverk-design-vg1-7-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva disse faguttrykkene betyr: toleranse, finish, og sammenfoying.',
        solution: 'Toleranse: Tillatt avvik fra et mal, f.eks. +-0,5mm. Finish: Kvaliteten pa et produkts overflate, for eksempel matt, blank eller teksturert. Sammenfoying: Metode for a feste to eller flere deler sammen, for eksempel liming, skruing eller sinking.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-6-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva viser stiplede linjer i en teknisk tegning?',
        options: [
          { id: 'a', text: 'Synlige kanter', isCorrect: false },
          { id: 'b', text: 'Skjulte kanter', isCorrect: true },
          { id: 'c', text: 'Mål', isCorrect: false },
          { id: 'd', text: 'Senterlinjer', isCorrect: false },
        ],
        solution: 'Stiplede linjer i tekniske tegninger viser skjulte kanter - kanter som ikke er synlige fra den vinkelen tegningen viser.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-7-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Lag en arbeidstegning av en enkel gjenstand.',
        subTasks: [
          {
            label: 'a',
            task: 'Velg et enkelt objekt (f.eks. en boks, hylle eller holder).',
            solution: 'Beskriv det valgte objektet.',
          },
          {
            label: 'b',
            task: 'Tegn forfra, fra siden og ovenfra med mal i millimeter.',
            solution: 'Tegningene bor vaere i forhold til hverandre og ha alle nodvendige mal.',
          },
          {
            label: 'c',
            task: 'Skriv materialspesifikasjon.',
            solution: 'Angi materiale, tykkelse og eventuelle overflatebehandlinger.',
          },
        ],
        solution: 'Oppgaven vurderes ut fra tegningenes klarhet, korrekt bruk av konvensjoner, og fullstendighet i mal og spesifikasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv en prosessbeskrivelse for et handverksprosjekt du har gjennomfort. Bruk minst 5 faguttrykk korrekt.',
        solution: 'Beskrivelsen bor vaere strukturert etter prosessens faser, bruke presist fagsprak, og reflektere over valg og utfordringer. Faguttrykkene bor vaere relevante og korrekt brukt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Fagterminologi', definition: 'Spesialiserte ord og uttrykk som brukes innenfor et fagfelt' },
    { term: 'Arbeidstegning', definition: 'Teknisk tegning med alle opplysninger for produksjon' },
    { term: 'Toleranse', definition: 'Tillatt avvik fra et spesifisert mal' },
    { term: 'Finish', definition: 'Kvaliteten og utseendet pa et produkts overflate' },
    { term: 'Snittegning', definition: 'Tegning som viser et tenkt kutt gjennom objektet' },
    { term: 'Eksplosjonstegning', definition: 'Tegning som viser delene adskilt i monteringsrekkefolge' },
  ],
};

// ----------------------------------------------------------------------------
// 7.7 Kvalitetssikring og evaluering
// ----------------------------------------------------------------------------

export const CHAPTER_HANDVERK_DESIGN_VG1_7_7: TextbookChapter = {
  id: 'handverk-design-vg1-7-7',
  courseId: 'handverk-design-vg1',
  chapterNumber: '7.7',
  title: 'Kvalitetssikring og evaluering',
  description: 'Metoder for a vurdere og sikre kvaliteten pa handverksprodukter gjennom hele prosessen. Elevene laerer a evaluere egne og andres produkter ut fra relevante kvalitetskriterier.',
  estimatedMinutes: 45,
  competenceGoals: [
    'vurdere handverksfaglig kvalitet pa eget og andres arbeid ut fra holdbarhet, funksjon og estetisk uttrykk',
  ],
  content: [
    {
      id: 'handverk-design-vg1-7-7-intro',
      type: 'text',
      content: `## Hva er kvalitet?

Kvalitet i handverk handler om mer enn at produktet ser pent ut. Et kvalitetsprodukt fungerer som det skal, holder over tid, og gir brukeren en god opplevelse. A kunne vurdere kvalitet - bade i eget og andres arbeid - er en viktig ferdighet.

Kvalitetssikring er ikke noe du gjor til slutt, men gjennom hele prosessen. Ved a ha fokus pa kvalitet fra start, unngår du a oppdage feil nar det er for sent a rette dem.

**Tre dimensjoner av kvalitet:**
- Funksjon - gjor produktet jobben det skal?
- Holdbarhet - taler det bruk over tid?
- Estetikk - har det et tiltalende uttrykk?`,
    },
    {
      id: 'handverk-design-vg1-7-7-def-1',
      type: 'definition',
      title: 'Kvalitetskriterier',
      content: `Kvalitetskriterier er målbare standarder som et produkt vurderes opp mot. De defineres for prosjektet starter og brukes til a evaluere om resultatet moter kravene. Kriteriene kan inkludere mal pa presisjon, funksjonalitet, holdbarhet og estetikk.`,
    },
    {
      id: 'handverk-design-vg1-7-7-text-1',
      type: 'text',
      content: `## Kvalitetskriterier for handverk

**Funksjonelle kriterier**
- Produktet gjor jobben det er designet for
- Lett a bruke som tiltenkt
- Ergonomisk tilpasset brukeren
- Sikker i bruk
- Oppfyller alle brukerkrav

**Holdbarhetskriterier**
- Taler normal bruk over tid
- Sammenfoynger er solide
- Materialer er egnet for bruksomradet
- Finish beskytter mot slitasje
- Kan vedlikeholdes og repareres

**Estetiske kriterier**
- Helhetlig designuttrykk
- Gode proporsjoner
- Harmoni mellom materialer og farger
- Fin overflate og finish
- Detaljniva som matcher priskategori

**Handverksmessige kriterier**
- Presise mal og vinkler
- Rene skjoter og samlinger
- Jevn overflatebehandling
- Ingen synlige feil eller skjemmende merker
- Profesjonell utforelse`,
    },
    {
      id: 'handverk-design-vg1-7-7-def-2',
      type: 'definition',
      title: 'Egenvurdering',
      content: `Egenvurdering er a systematisk evaluere eget arbeid opp mot definerte kriterier. Det innebærer a identifisere styrker og svakheter, reflektere over prosessen, og planlegge forbedringer. Egenvurdering utvikler kritisk sans og selvstendighet i laeringsarbeidet.`,
    },
    {
      id: 'handverk-design-vg1-7-7-text-2',
      type: 'text',
      content: `## Metoder for kvalitetskontroll

**Under produksjon:**
- Sjekk mal fortlopende med malestokkk og vinkelhake
- Test sammenfoynger for de limes/monteres permanent
- Kontroller overflater mellom hvert trinn
- Stopp og vurder for du gar videre til neste fase

**Etter ferdigstilling:**
- Systematisk gjennomgang av alle kriterier
- Funksjonstest - fungerer alt som det skal?
- Visuell inspeksjon fra alle vinkler
- Handtest - kjenn pa overflater og hjorner
- Sammenlign med opprinnelig mål og skisser

**Verktoy for evaluering:**
- Sjekkliste med kriterier
- Vurderingsskjema med gradering
- Fotografering for dokumentasjon
- Tilbakemelding fra andre

**Vanlige feil a se etter:**
- Ujevne gap i skjøter
- Limsol pa synlige flater
- Riper eller merker i overflaten
- Skjeve vinkler
- Darlig finish i hjorner og kanter`,
    },
    {
      id: 'handverk-design-vg1-7-7-text-3',
      type: 'text',
      content: `## Gi og motta tilbakemelding

**A gi konstruktiv tilbakemelding:**
- Start med noe positivt
- Vaer spesifikk og konkret
- Fokuser pa arbeidet, ikke personen
- Gi forslag til forbedring
- Vaer aerlig, men respektfull

**A motta tilbakemelding:**
- Lytt uten a forsvare deg
- Still sporsmal for a forsta bedre
- Noter ned tilbakemeldinger
- Vurder hva du kan laere
- Takk for innspillet

**Kameratvurdering:**
Nar dere vurderer hverandres arbeid:
1. Studer produktet grundig
2. Bruk de definerte kriteriene
3. Skriv ned 2-3 styrker
4. Skriv ned 1-2 forbedringsforslag
5. Del tilbakemeldingen konstruktivt`,
    },
    {
      id: 'handverk-design-vg1-7-7-example-1',
      type: 'example',
      title: 'Eksempel: Egenvurderingsskjema',
      content: `**Produkt:** Handlaget trebrikke

**Funksjon (1-5, der 5 er best):**
- Flat og stabil: 5
- Taler varme kopper: 4 (noe svi pa testen)
- Lett a rengjoere: 5
*Kommentar: Bor kanskje bruke tykkere tre eller varmebestandig lakk*

**Holdbarhet:**
- Solid konstruksjon: 5
- Overflatebehandling: 4
- Kanter og hjorner: 3 (noen skarpe kanter)
*Kommentar: Ma pussekantene rundere neste gang*

**Estetikk:**
- Helhetlig design: 5
- Proporsjoner: 5
- Finish-kvalitet: 4
*Kommentar: Svært fornoyd med designet*

**Handverksmessig utforelse:**
- Presisjon: 4
- Overflate: 4
- Detaljer: 3
*Kommentar: Trenger mer oving pa finpussing*

**Totalvurdering:** God, men med forbedringspotensial

**Tre ting jeg vil gjore bedre neste gang:**
1. Runde av kantene grundigere
2. Teste varmetalighet for valg av finish
3. Bruke finere sandpapir (korn 320) pa slutten`,
    },
    {
      id: 'handverk-design-vg1-7-7-tip-1',
      type: 'tip',
      title: 'Tips for aerlig egenvurdering',
      content: `Vaer din egen strengeste kritiker - pa en konstruktiv mate. Se pa produktet som om du skulle kjope det. Ville du vaert fornoyd? Hva ville en profesjonell handverker bemerket? Bruk gjerne et speil eller ta bilder for a se produktet med friske oyne.`,
    },
    {
      id: 'handverk-design-vg1-7-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar de tre hoveddimensjonene av kvalitet i handverk.',
        solution: 'De tre hoveddimensjonene er: 1) Funksjon - produktet gjor jobben det er designet for, er lett a bruke og sikkert. 2) Holdbarhet - produktet taler bruk over tid, har solide sammenfoynger og kan vedlikeholdes. 3) Estetikk - produktet har et tiltalende uttrykk med gode proporsjoner og fin finish.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-7-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Nar bor kvalitetssikring gjennomfores?',
        options: [
          { id: 'a', text: 'Kun til slutt nar produktet er ferdig', isCorrect: false },
          { id: 'b', text: 'Gjennom hele prosessen', isCorrect: true },
          { id: 'c', text: 'Bare hvis kunden klager', isCorrect: false },
          { id: 'd', text: 'For prosjektet starter', isCorrect: false },
        ],
        solution: 'Kvalitetssikring bor gjennomfores gjennom hele prosessen. Ved a ha fokus pa kvalitet fra start, unngår du a oppdage feil nar det er for sent a rette dem.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-7-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Lag et vurderingsskjema med 8-10 kvalitetskriterier for et selvvalgt handverksprodukt.',
        solution: 'Skjemaet bor inneholde kriterier fra alle tre dimensjoner (funksjon, holdbarhet, estetikk), ha plass til gradering (f.eks. 1-5), og rom for kommentarer. Kriteriene bor vaere relevante for det valgte produktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Gjennomfor en kameratvurdering.',
        subTasks: [
          {
            label: 'a',
            task: 'Bytt produkter med en medelev og vurder deres arbeid.',
            solution: 'Bruk definerte kriterier og vaer systematisk i vurderingen.',
          },
          {
            label: 'b',
            task: 'Skriv ned 2 styrker og 2 forbedringsforslag.',
            solution: 'Vaer spesifikk og konkret. Fokuser pa arbeidet, ikke personen.',
          },
          {
            label: 'c',
            task: 'Del tilbakemeldingen muntlig pa en konstruktiv mate.',
            solution: 'Start positivt, vaer respektfull, og gi konkrete forslag.',
          },
        ],
        solution: 'Oppgaven krever praktisk gjennomforing av kameratvurdering med fokus pa konstruktiv tilbakemelding.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-7-ex-5',
        number: '5',
        type: 'classic',
        task: 'Gjennomfor en grundig egenvurdering av et produkt du har laget, og identifiser tre konkrete ting du vil gjore bedre neste gang.',
        solution: 'Egenvurderingen bor vaere aerlig og balansert, dekke alle kvalitetsdimensjoner, og forbedringstiltakene bor vaere spesifikke og gjennomforbare.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Kvalitetskriterier', definition: 'Maalbare standarder et produkt vurderes opp mot' },
    { term: 'Egenvurdering', definition: 'A systematisk evaluere eget arbeid opp mot definerte kriterier' },
    { term: 'Kameratvurdering', definition: 'Nar elever vurderer hverandres arbeid' },
    { term: 'Funksjonstest', definition: 'Test av om produktet gjor jobben det er designet for' },
    { term: 'Kvalitetskontroll', definition: 'Systematisk sjekk av at produktet moter kravene' },
    { term: 'Konstruktiv tilbakemelding', definition: 'Tilbakemelding som er positiv, spesifikk og gir forslag til forbedring' },
  ],
};

// ----------------------------------------------------------------------------
// 7.8 Samarbeid og prosjektstyring
// ----------------------------------------------------------------------------

export const CHAPTER_HANDVERK_DESIGN_VG1_7_8: TextbookChapter = {
  id: 'handverk-design-vg1-7-8',
  courseId: 'handverk-design-vg1',
  chapterNumber: '7.8',
  title: 'Samarbeid og prosjektstyring',
  description: 'Utvikling av ferdigheter i samarbeid og prosjektstyring for gjennomforing av designprosjekter. Elevene laerer a planlegge, fordele oppgaver og holde tidsfrister i gruppearbeid.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og dokumentere en design- og produktutviklingsprosess alene og i samarbeid med andre innenfor gitte tidsrammer',
  ],
  content: [
    {
      id: 'handverk-design-vg1-7-8-intro',
      type: 'text',
      content: `## A skape sammen

Mange handverksprosjekter er for store eller komplekse til a gjennomfores alene. Samarbeid lar deg dra nytte av andres styrker, dele pa arbeidet, og laere av hverandre. Men godt samarbeid kommer ikke av seg selv - det krever bevisst innsats fra alle.

Prosjektstyring handler om a organisere arbeidet slik at alle vet hva de skal gjore, nar det skal vaere ferdig, og hvordan bitene henger sammen. God prosjektstyring gjor forskjellen mellom kaos og suksess.

**Fordeler med godt samarbeid:**
- Kombiner ulike ferdigheter og styrker
- Del pa arbeidsbelastningen
- Fa flere perspektiver og ideer
- Laer av hverandre underveis`,
    },
    {
      id: 'handverk-design-vg1-7-8-def-1',
      type: 'definition',
      title: 'Prosjektstyring',
      content: `Prosjektstyring er planlegging, organisering og oppfolging av et prosjekt for a na malene innenfor gitte rammer for tid, ressurser og kvalitet. Det inkluderer a definere oppgaver, fordele ansvar, sette tidsfrister, og sikre fremdrift gjennom hele prosjektet.`,
    },
    {
      id: 'handverk-design-vg1-7-8-text-1',
      type: 'text',
      content: `## Roller i et prosjektteam

**Prosjektleder**
- Har overordnet ansvar for prosjektet
- Koordinerer arbeidet mellom teammedlemmer
- Holder oversikt over tidsplan og fremdrift
- Leder moter og tar nodvendige beslutninger
- Kommuniserer med eksterne (laerer, oppdragsgiver)

**Fagansvarlige**
- Tar hovedansvar for sitt fagomrade
- Sikrer kvalitet innen sitt felt
- Veileder andre som bidrar pa omradet
- Rapporterer status til prosjektleder

**Teammedlemmer**
- Utforer tildelte oppgaver
- Kommuniserer status og utfordringer
- Bidrar med ideer og innspill
- Stotter hverandre ved behov

**Tips:** I mindre prosjekter kan en person ha flere roller. Det viktige er at ansvar er tydelig fordelt.`,
    },
    {
      id: 'handverk-design-vg1-7-8-def-2',
      type: 'definition',
      title: 'Arbeidsfordeling',
      content: `Arbeidsfordeling er a dele prosjektets oppgaver mellom teammedlemmene basert pa deres styrker, interesser og tilgjengelig tid. God arbeidsfordeling sikrer at alle bidrar meningsfullt, at ingen far for mye, og at oppgaver utfores av de som er best egnet.`,
    },
    {
      id: 'handverk-design-vg1-7-8-text-2',
      type: 'text',
      content: `## Planlegging av samarbeidsprosjekter

**Oppstartsfase:**
1. Definer prosjektets mal og leveranser
2. Kartlegg teamets ressurser og styrker
3. Bryt prosjektet ned i deloppgaver
4. Fordel ansvar og oppgaver
5. Lag tidsplan med milepaler

**Verktoy for planlegging:**

**Oppgaveliste**
- Alle oppgaver som ma gjores
- Hvem som er ansvarlig
- Frist for ferdigstillelse
- Status (ikke startet, i arbeid, ferdig)

**Tidsplan/Gantt-diagram**
- Visuell oversikt over tidslinjen
- Viser avhengigheter mellom oppgaver
- Identifiserer flaskehalser
- Lett a se om prosjektet er pa sporet

**Statusmoter**
- Korte, regelmessige moter (f.eks. ukentlig)
- Alle rapporterer hva de har gjort og skal gjore
- Diskuter utfordringer og losninger
- Juster planen ved behov`,
    },
    {
      id: 'handverk-design-vg1-7-8-text-3',
      type: 'text',
      content: `## Effektiv kommunikasjon i team

**Motekompetanse:**
- Kom forberedt med oppdateringer
- Hold deg til saken
- Lytt aktivt til andre
- Ta notater om avtaler
- Folg opp det du har lovet

**Digital samarbeid:**
- Bruk felles plattform for dokumenter
- Hold oversikt over versjoner
- Kommenter tydelig pa andres arbeid
- Svar raskt pa meldinger

**Handtering av konflikter:**
- Ta opp uenigheter tidlig
- Fokuser pa saken, ikke personen
- Sok a forsta den andres perspektiv
- Finn losninger alle kan leve med
- Trekk inn laerer hvis nodvendig

**Kommunikasjonsregler for team:**
- Alle meninger er velkomne
- Kritiser ideer, ikke personer
- Hold avtaler og frister
- Si ifra om utfordringer tidlig
- Feire suksesser sammen`,
    },
    {
      id: 'handverk-design-vg1-7-8-text-4',
      type: 'text',
      content: `## Holde tidsfrister

**Vanlige arsaker til forsinkelser:**
- Urealistisk tidsplan fra start
- Uklart ansvar
- Avhengigheter som ikke er tatt hoyden for
- For lite buffer for uforutsette problemer
- Manglende oppfolging

**Strategier for a holde tidsplanen:**
- Sett realistiske frister med buffer
- Bryt store oppgaver i mindre deler
- Ha klare milepaler og sjekkpunkter
- Folg opp status jevnlig
- Juster tidlig hvis noe tar lengre tid
- Prioriter de viktigste leveransene

**Hvis dere blir forsinket:**
1. Identifiser arsaken
2. Vurder konsekvensene
3. Lag en plan for a ta igjen
4. Kommuniser med laerer/oppdragsgiver
5. Laer av det til neste gang`,
    },
    {
      id: 'handverk-design-vg1-7-8-example-1',
      type: 'example',
      title: 'Eksempel: Prosjektplan for gruppeutstilling',
      content: `**Prosjekt:** Lage 4 produkter til skoleutstilling
**Team:** 4 elever (Marie, Ole, Sara, Ahmed)
**Tid:** 6 uker

**Roller:**
- Prosjektleder: Marie (koordinerer, holder oversikt)
- Designansvarlig: Ole (sikrer helhetlig uttrykk)
- Produksjonsansvarlig: Sara (verksted, materialer)
- Dokumentasjonsansvarlig: Ahmed (foto, tekst, plakat)

**Tidsplan:**
- Uke 1: Ideutvikling og konseptvalg (alle)
- Uke 2: Detaljdesign og materialinnkjop (Ole, Sara)
- Uke 3-4: Produksjon av 4 produkter (alle)
- Uke 5: Ferdigstilling og finish (alle)
- Uke 6: Utstillingsoppsett og presentasjon (alle)

**Milepaler:**
- Onsdag uke 2: Konsept godkjent
- Fredag uke 4: Alle produkter i raskisse ferdig
- Onsdag uke 6: Utstillingen klar

**Moter:** Mandager kl. 10:00 (15 min status)

**Felles avtaler:**
- Alle gjor det de har lovet til avtalt tid
- Problemer tas opp med en gang
- Vi hjelper hverandre ved behov`,
    },
    {
      id: 'handverk-design-vg1-7-8-tip-1',
      type: 'tip',
      title: 'Tips for godt samarbeid',
      content: `Start hvert prosjekt med en samtale om hvordan dere vil jobbe sammen. Avklar forventninger, styrker og utfordringer. Skriv ned de viktigste avtalene. Dette forebygger konflikter og misforstaelser senere.`,
    },
    {
      id: 'handverk-design-vg1-7-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv de tre hovedrollene i et prosjektteam og deres viktigste oppgaver.',
        solution: 'Prosjektleder har overordnet ansvar, koordinerer arbeidet, holder oversikt over tidsplan og leder moter. Fagansvarlige tar hovedansvar for sitt omrade, sikrer kvalitet og veileder andre. Teammedlemmer utforer tildelte oppgaver, kommuniserer status og bidrar med innspill.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-8-ex-2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er det viktigste formalet med statusmoter?',
        options: [
          { id: 'a', text: 'A kritisere de som er forsinket', isCorrect: false },
          { id: 'b', text: 'A dele status, diskutere utfordringer og justere planen', isCorrect: true },
          { id: 'c', text: 'A gi laereren noe a gjore', isCorrect: false },
          { id: 'd', text: 'A fylle ut skjemaer', isCorrect: false },
        ],
        solution: 'Formalet med statusmoter er a dele status pa arbeidet, diskutere utfordringer og losninger, og justere planen ved behov. Det handler om a holde prosjektet pa sporet.',
        allowsUpload: false,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'handverk-design-vg1-7-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Dere er 3 elever som skal lage et felles produkt pa 4 uker. Lag en prosjektplan.',
        subTasks: [
          {
            label: 'a',
            task: 'Fordel roller og ansvar.',
            solution: 'Eksempel: Prosjektleder/designer, Produksjonsansvarlig, Dokumentasjonsansvarlig.',
          },
          {
            label: 'b',
            task: 'Lag en tidsplan med milepaler.',
            solution: 'Uke 1: Ideutvikling. Uke 2: Design. Uke 3: Produksjon. Uke 4: Ferdigstilling. Milepaler etter uke 1 og 3.',
          },
          {
            label: 'c',
            task: 'Definer 3 kommunikasjonsregler for teamet.',
            solution: 'Eksempel: Alle moter forberedt, si fra om problemer tidlig, respekter andres ideer.',
          },
        ],
        solution: 'Planen bor vise tydelig rollefordeling, realistisk tidsplan med milepaler, og konkrete avtaler for samarbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'handverk-design-vg1-7-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'handverk-design-vg1-7-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv en situasjon der et samarbeidsprosjekt ble forsinket. Hva kan vaere arsaken, og hvordan bor teamet handtere det?',
        solution: 'Mulige arsaker: Urealistisk plan, uklart ansvar, sykdom, uforutsette problemer. Handtering: Identifiser arsaken, vurder konsekvenser, lag plan for a ta igjen, kommuniser med alle involverte, laer til neste gang. Ikke fokuser pa skyld, men pa losninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Prosjektstyring', definition: 'Planlegging, organisering og oppfolging av et prosjekt' },
    { term: 'Arbeidsfordeling', definition: 'A dele prosjektets oppgaver mellom teammedlemmene' },
    { term: 'Prosjektleder', definition: 'Person med overordnet ansvar for prosjektet' },
    { term: 'Milepael', definition: 'Viktig kontrollpunkt i prosjektet' },
    { term: 'Statusmote', definition: 'Kort mote for a dele fremdrift og diskutere utfordringer' },
    { term: 'Flaskehals', definition: 'Oppgave som forsinker hele prosjektet hvis den ikke er ferdig' },
  ],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const HANDVERK_DESIGN_VG1_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_HANDVERK_DESIGN_VG1_7_1,
  CHAPTER_HANDVERK_DESIGN_VG1_7_2,
  CHAPTER_HANDVERK_DESIGN_VG1_7_3,
  CHAPTER_HANDVERK_DESIGN_VG1_7_4,
  CHAPTER_HANDVERK_DESIGN_VG1_7_5,
  CHAPTER_HANDVERK_DESIGN_VG1_7_6,
  CHAPTER_HANDVERK_DESIGN_VG1_7_7,
  CHAPTER_HANDVERK_DESIGN_VG1_7_8,
];
