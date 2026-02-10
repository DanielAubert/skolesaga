/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Informasjonsteknologi 1 (IT 1) VG2
 *
 * Seksjon 8: Design, prosjekt og dokumentasjon (Kapittel 8.1–8.5)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 8.1: Brukergrensesnitt og UX-design
// ============================================================================

export const CHAPTER_IT_1_8_1: TextbookChapter = {
  id: 'it-1-8-1',
  courseId: 'it-1',
  chapterNumber: '8.1',
  title: 'Brukergrensesnitt og UX-design',
  description: 'Forstå forskjellen mellom UI og UX, lær sentrale designprinsipper, og arbeid med wireframes og prototyper for å planlegge digitale løsninger.',
  estimatedMinutes: 60,
  prevChapter: 'it-1-7-5',
  nextChapter: 'it-1-8-2',
  competenceGoals: [
    'planlegge og designe brukergrensesnitt for digitale løsninger',
    'anvende grunnleggende designprinsipper i utvikling av nettsider og applikasjoner',
    'lage wireframes og prototyper som del av en designprosess',
  ],
  keyTerms: [
    { term: 'UI (User Interface)', definition: 'Brukergrensesnittet er den visuelle delen av en digital løsning som brukeren ser og interagerer med. UI omfatter alle grafiske elementer som knapper, menyer, skjemaer, ikoner, farger og typografi. Et godt UI er visuelt tiltalende, konsistent og gjør det enkelt for brukeren å forstå hva som kan klikkes, skrives og navigeres. UI-design handler om å utforme det konkrete utseendet til en applikasjon eller nettside.' },
    { term: 'UX (User Experience)', definition: 'Brukeropplevelsen beskriver den totale opplevelsen en bruker har når de interagerer med et digitalt produkt. UX handler ikke bare om hvordan noe ser ut, men om hvordan det føles å bruke det – er det enkelt å finne frem? Forstår brukeren hva de skal gjøre? Føler de seg trygge og fornøyde? UX-design omfatter hele prosessen fra brukerundersøkelser og informasjonsarkitektur til prototyping og brukertesting.' },
    { term: 'Wireframe', definition: 'En wireframe er en forenklet skisse av en nettside eller applikasjon som viser layouten og plasseringen av elementer uten farger, bilder eller detaljert design. Wireframes fungerer som en blåkopi og hjelper designere og utviklere med å planlegge strukturen før de bruker tid på visuell utforming. De kan lages for hånd på papir eller med digitale verktøy som Figma eller Balsamiq.' },
    { term: 'Prototype', definition: 'En prototype er en interaktiv modell av et digitalt produkt som simulerer brukeropplevelsen uten å ha full funksjonalitet. Prototyper kan variere fra enkle papirskisser med klikkbare områder til avanserte digitale modeller som ser ut som det ferdige produktet. De brukes til å teste og forbedre designet før utvikling starter, noe som sparer tid og ressurser.' },
    { term: 'Designprinsipper', definition: 'Et sett med retningslinjer og regler som hjelper designere med å lage brukergrensesnitt som er brukervennlige, estetisk tiltalende og effektive. Sentrale prinsipper inkluderer konsistens, tilbakemelding, synlighet, enkelhet og feilhåndtering. Disse prinsippene er basert på forskning innen kognitiv psykologi og menneske-maskin-interaksjon.' },
    { term: 'Informasjonsarkitektur', definition: 'Organiseringen og struktureringen av innhold i en digital løsning slik at brukere enkelt kan finne det de leter etter. God informasjonsarkitektur innebærer logisk gruppering av innhold, tydelig navigasjon og en hierarkisk struktur som gjenspeiler brukernes mentale modeller.' },
    { term: 'Figma', definition: 'Et nettbasert designverktøy som brukes til å lage wireframes, prototyper og ferdige design for nettsider og applikasjoner. Figma tillater samarbeid i sanntid, noe som gjør det populært i designteam. Verktøyet er gratis for individuell bruk og har blitt bransjens foretrukne verktøy for UI/UX-design.' },
  ],
  content: [
    {
      id: 'it-1-8-1-intro',
      type: 'text',
      content: `## Brukergrensesnitt og UX-design

Når du lager en nettside eller en applikasjon, er det ikke nok at koden fungerer teknisk. Produktet må også være enkelt og behagelig å bruke. Tenk på de appene du bruker mest – de har sannsynligvis noe til felles: du finner raskt det du leter etter, knappene er tydelige, og du slipper å lure på hva du skal gjøre. Dette er ikke tilfeldig, men resultatet av gjennomtenkt design.

I dette kapittelet skal vi utforske to sentrale begreper innen digital design: **UI** (brukergrensesnitt) og **UX** (brukeropplevelse). Vi skal lære designprinsipper som gjør digitale løsninger bedre, og vi skal jobbe praktisk med wireframes og prototyper – verktøy som hjelper oss å planlegge før vi begynner å kode.

Design handler i bunn og grunn om empati. Du må sette deg i brukerens sted og tenke: Hva trenger de? Hva forventer de? Hvor kan de bli forvirret? Når du forstår brukeren, kan du lage løsninger som faktisk fungerer for dem.`,
    },
    {
      id: 'it-1-8-1-def-ui',
      type: 'definition',
      title: 'UI – brukergrensesnitt (User Interface)',
      content: `**UI (User Interface)** er brukergrensesnittet – den visuelle og interaktive delen av en digital løsning som brukeren ser og samhandler med direkte. UI omfatter alle grafiske elementer som knapper, menyer, tekstfelt, ikoner, farger, typografi og layout. UI-design handler om å utforme det konkrete utseendet og den fysiske interaksjonen i et produkt. Et godt UI er visuelt ryddig, konsistent i utformingen og gjør det intuitivt for brukeren å forstå hva de kan gjøre.`,
    },
    {
      id: 'it-1-8-1-def-ux',
      type: 'definition',
      title: 'UX – brukeropplevelse (User Experience)',
      content: `**UX (User Experience)** er brukeropplevelsen – den helhetlige opplevelsen en person har når de bruker et digitalt produkt. UX handler om mer enn bare utseende: det inkluderer hvor enkelt det er å utføre oppgaver, hvor raskt brukeren finner informasjon, hvor trygg og fornøyd brukeren føler seg, og om produktet løser problemet brukeren hadde. UX-design er en prosess som omfatter brukerundersøkelser, informasjonsarkitektur, interaksjonsdesign, prototyping og brukertesting.`,
    },
    {
      id: 'it-1-8-1-text-uivsux',
      type: 'text',
      title: 'Forskjellen mellom UI og UX',
      content: `## UI vs. UX – hva er forskjellen?

UI og UX brukes ofte om hverandre, men de beskriver forskjellige aspekter av design. En enkel måte å forstå forskjellen på er gjennom en analogi:

Tenk deg at du skal på restaurant. **UX** er hele opplevelsen – fra du bestiller bord til du forlater restauranten. Var det enkelt å finne restauranten? Fikk du bord raskt? Var maten god? Var servicen hyggelig? **UI** er det konkrete du ser og tar på – menyen, tallerkenene, interiøret, belysningen. Et vakkert interiør (god UI) betyr lite hvis maten er dårlig og du venter i to timer (dårlig UX).

I digital sammenheng kan vi si:

- **UI** handler om *hvordan ting ser ut* – farger, fonter, ikoner, knappestørrelser, layout
- **UX** handler om *hvordan ting fungerer* – navigasjon, flyt, hastighet, brukervennlighet

Du kan ha et vakkert brukergrensesnitt som likevel gir dårlig brukeropplevelse. For eksempel kan en nettside se fantastisk ut, men hvis brukeren ikke finner handlekurven eller betalingsprosessen er forvirrende, er UX-en svak. Omvendt kan et visuelt enkelt grensesnitt gi fantastisk UX fordi alt er logisk og intuitivt.

De beste digitale produktene kombinerer god UI og god UX. Apple er et klassisk eksempel – produktene deres ser bra ut (UI) og er enkle å bruke (UX). Google sin søkemotor er et annet eksempel: grensesnittet er ekstremt enkelt (ett tekstfelt og en knapp), men brukeropplevelsen er utmerket fordi du finner det du leter etter raskt.

**I praksis jobber UI- og UX-designere tett sammen:**

1. UX-designeren kartlegger brukerbehov og lager strukturen
2. UI-designeren utformer det visuelle basert på UX-strukturen
3. Sammen tester de løsningen med ekte brukere
4. De itererer og forbedrer basert på tilbakemeldinger`,
    },
    {
      id: 'it-1-8-1-example-uiux',
      type: 'example',
      title: 'UI vs. UX i en nettbutikk',
      content: `La oss se på en nettbutikk og identifisere UI- og UX-elementer:

**UI-elementer (det visuelle):**
- Fargepaletten er blå og hvit for å gi et ryddig og profesjonelt inntrykk
- Produktbildene er store og tydelige med zoom-funksjon
- Knappen «Legg i handlekurv» er oransje og skiller seg ut fra resten
- Fonten er lettlest (sans-serif, god størrelse)
- Ikoner brukes for handlekurv, søk og bruker

**UX-elementer (opplevelsen):**
- Søkefeltet er plassert øverst og gir forslag mens du skriver
- Produktene er kategorisert logisk (klær → herre → bukser → jeans)
- Betalingsprosessen er delt i tydelige steg: handlekurv → levering → betaling → bekreftelse
- Brukeren får umiddelbar bekreftelse når et produkt legges i handlekurven
- Det finnes en tydelig «Tilbake»-knapp i alle steg av betalingsprosessen
- Feilmeldinger er forståelige: «Vennligst fyll inn postnummer» i stedet for «Feil i felt 4»

Et godt designteam tenker på begge deler samtidig og sørger for at det visuelle støtter opplevelsen.`,
    },
    {
      id: 'it-1-8-1-text-prinsipper',
      type: 'text',
      title: 'Sentrale designprinsipper',
      content: `## Designprinsipper for gode brukergrensesnitt

Gjennom flere tiår med forskning på menneske-maskin-interaksjon har det blitt etablert en rekke designprinsipper som hjelper oss å lage bedre digitale løsninger. Her er de viktigste:

### 1. Konsistens
Bruk de samme mønstrene gjennomgående i hele løsningen. Hvis en blå knapp betyr «Lagre» på én side, bør den bety det samme overalt. Konsistens gjør at brukeren kan overføre det de lærer fra én del av løsningen til en annen, noe som reduserer den kognitive belastningen.

Eksempler på konsistens:
- Navigasjonen er alltid på samme sted
- Knapper med samme funksjon har samme farge og form
- Feilmeldinger følger samme format og plassering
- Terminologien er lik overalt (ikke «Lagre» ett sted og «Gem» et annet)

### 2. Tilbakemelding (feedback)
Brukeren må alltid vite hva som skjer. Når de klikker på en knapp, bør noe synlig skje – knappen endrer farge, en spinner viser at noe lastes, eller en bekreftelsesmelding dukker opp. Uten tilbakemelding lurer brukeren på om klikket ble registrert, og de kan ende opp med å klikke flere ganger.

Eksempler:
- En ladeindikator når en side hentes
- Grønn hake når et skjema er sendt vellykket
- Rød ramme rundt et felt med ugyldig input
- Knappen endrer utseende når musepekeren holdes over den (hover-effekt)

### 3. Synlighet (visibility)
Viktige funksjoner skal være synlige og lette å finne. Brukeren skal slippe å lete. Sekundære funksjoner kan gjemmes bak menyer, men kjerneoppgavene bør alltid være tilgjengelige.

### 4. Enkelhet
Fjern alt som ikke er nødvendig. Hvert ekstra element på skjermen øker den kognitive belastningen for brukeren. Minimalisme i design betyr ikke at ting ser kjedelige ut, men at alt som er der har en funksjon. Designeren Antoine de Saint-Exupéry sa det treffende: «Perfeksjon oppnås ikke når det ikke er mer å legge til, men når det ikke er mer å ta bort.»

### 5. Feilhåndtering
Design for feil – brukere kommer til å gjøre feil, og løsningen din bør håndtere dette på en vennlig måte. Gode feilmeldinger forklarer hva som gikk galt og hvordan brukeren kan rette det opp. Enda bedre er det å forhindre feil i utgangspunktet, for eksempel ved å deaktivere knapper som ikke kan brukes, eller ved å validere input fortløpende.

### 6. Affordance
Designelementer bør kommunisere sin funksjon visuelt. En knapp bør se ut som noe du kan klikke på (opphøyet, med kontrast). Et tekstfelt bør se ut som noe du kan skrive i (innfelt, med blinkende markør). Lenker bør skille seg fra vanlig tekst (farge, understreking).`,
    },
    {
      id: 'it-1-8-1-def-wireframe',
      type: 'definition',
      title: 'Wireframe',
      content: `En **wireframe** er en forenklet, skjematisk skisse av en nettside eller applikasjon som viser plassering av elementer, innholdsstruktur og navigasjon – uten farger, bilder eller detaljert visuell utforming. Wireframes fungerer som en blåkopi for designet og hjelper teamet med å bli enige om struktur og layout tidlig i prosessen. De kan lages på papir (lo-fi) eller i digitale verktøy som Figma, Balsamiq eller Adobe XD (hi-fi). Wireframes sparer tid fordi det er mye enklere å endre en enkel skisse enn et ferdig design.`,
    },
    {
      id: 'it-1-8-1-text-wireframes',
      type: 'text',
      title: 'Wireframes i praksis',
      content: `## Fra idé til wireframe

En wireframe er det første visuelle steget i designprosessen. Før du åpner et designverktøy, bør du ha tenkt gjennom følgende:

1. **Hvem er brukerne?** Hva trenger de å gjøre?
2. **Hva er hovedinnholdet?** Hvilken informasjon skal vises?
3. **Hvordan navigerer brukeren?** Hva er den logiske flyten?

### Nivåer av wireframes

**Lo-fi (low-fidelity) wireframes** er enkle skisser, ofte tegnet for hånd på papir eller whiteboard. De bruker bokser, linjer og tekst for å vise layouten. Fordeler: raske å lage, lave forventninger til ferdighetsgrad, lett å kaste og starte på nytt. Disse brukes i tidlig fase for å utforske ideer.

**Mid-fi wireframes** lages i digitale verktøy og har mer detaljer – faktiske overskrifter, placeholder-tekst og mer nøyaktige proporsjoner. Disse brukes for å teste navigasjon og layout.

**Hi-fi (high-fidelity) wireframes** nærmer seg det ferdige designet med faktisk innhold, typografi og noen ganger interaktivitet. Disse brukes for å presentere for kunder og for brukertesting.

### Vanlige elementer i en wireframe

- Rektangler med kryss representerer bilder
- Horisontale linjer representerer tekst
- Rektangler med tekst representerer knapper
- Piler viser navigasjonsflyt mellom sider
- Tekst i klammer \`[Søkefelt]\` beskriver interaktive elementer`,
    },
    {
      id: 'it-1-8-1-example-wireframe',
      type: 'example',
      title: 'Wireframe for en bloggside',
      content: `Her er en enkel tekstbasert wireframe for en bloggside:

\`\`\`
+-----------------------------------------------+
|  [Logo]        Hjem | Om | Blogg | Kontakt    |
+-----------------------------------------------+
|                                               |
|  Siste innlegg                                |
|  ============                                 |
|                                               |
|  +---+  Tittel på blogginnlegg               |
|  |Img|  Kort beskrivelse av innlegget...     |
|  +---+  Publisert: 15. mars 2025  [Les mer]  |
|                                               |
|  +---+  Enda et blogginnlegg                 |
|  |Img|  Kort beskrivelse av innlegget...     |
|  +---+  Publisert: 10. mars 2025  [Les mer]  |
|                                               |
|  +---+  Tredje blogginnlegg                  |
|  |Img|  Kort beskrivelse av innlegget...     |
|  +---+  Publisert: 5. mars 2025   [Les mer]  |
|                                               |
|        [<< Forrige]  1  2  3  [Neste >>]      |
|                                               |
+-----------------------------------------------+
|  © 2025 Min Blogg | Personvern | Vilkår       |
+-----------------------------------------------+
\`\`\`

Denne wireframen viser:
- **Header** med logo og navigasjon
- **Hovedinnhold** med blogginnlegg i listeformat
- Hvert innlegg har bilde, tittel, beskrivelse og publiseringsdato
- **Paginering** for å navigere mellom sider
- **Footer** med opphavsrett og lenker

Legg merke til at wireframen ikke sier noe om farger, fonter eller eksakte størrelser. Den fokuserer kun på struktur og innholdsplassering.`,
    },
    {
      id: 'it-1-8-1-text-prototyper',
      type: 'text',
      title: 'Prototyper og brukertesting',
      content: `## Fra wireframe til prototype

Når wireframene er godkjent, er neste steg å lage en **prototype** – en interaktiv modell som simulerer den ferdige løsningen. Mens en wireframe er statisk, lar en prototype brukeren klikke seg gjennom løsningen og oppleve flyten.

### Typer prototyper

**Papirprototype:** Den enkleste formen. Du tegner hver skjermvisning på papir og lar en testperson «klikke» ved å peke. En person spiller «datamaskinen» og bytter ut papirlappene basert på hva brukeren trykker på. Overraskende effektivt for å oppdage problemer tidlig.

**Klikkbar prototype:** Laget i verktøy som Figma, Adobe XD eller InVision. Designskjermene kobles sammen med klikkbare områder slik at brukeren kan navigere mellom sidene. Disse ser mer realistiske ut, men har ingen reell funksjonalitet bak.

**Funksjonell prototype:** En forenklet versjon av den ferdige løsningen, ofte bygd med HTML, CSS og litt JavaScript. Denne har begrenset funksjonalitet, men gir den mest realistiske opplevelsen.

### Brukertesting

Hensikten med prototyper er å teste designet med ekte brukere *før* du bruker tid på å utvikle den ferdige løsningen. En brukertest foregår typisk slik:

1. **Definer oppgaver:** «Finn en vinterbukse i størrelse M og legg den i handlekurven»
2. **Rekrutter testpersoner:** 5-8 personer fra målgruppen er ofte nok
3. **Observer og noter:** Se hvordan brukerne navigerer, hvor de nøler, hva de klikker feil på
4. **Analyser funn:** Identifiser mønster – hvis flere brukere gjør samme feil, er det et designproblem
5. **Iterer:** Endre designet basert på funnene og test igjen

Å teste tidlig og ofte er mye billigere enn å fikse problemer i en ferdig løsning. En tommelfingerregel sier at det koster 10 ganger mer å fikse et designproblem etter at koden er skrevet, og 100 ganger mer etter at produktet er lansert.`,
    },
    {
      id: 'it-1-8-1-tip-figma',
      type: 'tip',
      title: 'Kom i gang med Figma',
      content: `Figma (figma.com) er gratis for personlig bruk og fungerer direkte i nettleseren. Her er en rask oppstart:

1. Opprett en gratis konto på figma.com
2. Lag en ny designfil («New design file»)
3. Bruk rektangelverktøyet (R) for å tegne bokser for layout
4. Bruk tekstverktøyet (T) for å legge til tekst
5. Grupper elementer (Ctrl+G) for å holde orden
6. Bruk «Prototype»-fanen for å koble skjermene sammen med klikkbare lenker

Figma har også ferdige UI-kits og maler som du kan bruke som utgangspunkt for dine egne wireframes og prototyper.`,
    },
    {
      id: 'it-1-8-1-text-designprosess',
      type: 'text',
      title: 'Designprosessen',
      content: `## Den iterative designprosessen

Godt design oppstår sjelden på første forsøk. I stedet følger profesjonelle designere en iterativ prosess der de gjennomgår flere runder med forbedring. En vanlig modell er **Design Thinking**, som har fem faser:

1. **Empati (Empathize):** Forstå brukerne gjennom intervjuer, observasjoner og undersøkelser. Hvem er de? Hva trenger de? Hva frustrerer dem?

2. **Definer (Define):** Formuler problemet tydelig basert på innsikten du har samlet. «Elever trenger en enklere måte å holde oversikt over innleveringsfrister på.»

3. **Idéutvikling (Ideate):** Generer mange mulige løsninger gjennom brainstorming. Ikke sensurer ideer i denne fasen – kvantitet er viktigere enn kvalitet.

4. **Prototype:** Lag raske, enkle modeller av de beste ideene. Start med papirskisser og beveg deg mot digitale prototyper.

5. **Test:** Test prototypene med ekte brukere, samle tilbakemeldinger og bruk innsikten til å forbedre løsningen.

Prosessen er ikke lineær – du vil ofte gå tilbake til tidligere faser basert på det du lærer underveis. Denne iterative tilnærmingen sikrer at det endelige produktet faktisk møter brukernes behov.`,
    },
    {
      id: 'it-1-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it1-8-1-ex-1',
        number: '8.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste forskjellen mellom UI og UX?',
        options: [
          { id: 'a', text: 'UI handler om koding og UX handler om design', isCorrect: false, feedback: 'Både UI og UX handler om design, men på forskjellige måter.' },
          { id: 'b', text: 'UI handler om det visuelle utseendet, og UX handler om den helhetlige brukeropplevelsen', isCorrect: true },
          { id: 'c', text: 'UI er for mobilapper og UX er for nettsider', isCorrect: false, feedback: 'Begge begrepene gjelder for alle typer digitale produkter.' },
          { id: 'd', text: 'UI er viktigere enn UX fordi utseende kommer først', isCorrect: false, feedback: 'Begge er like viktige, og UX bør ofte planlegges før det visuelle.' },
        ],
        solution: 'UI (User Interface) handler om den visuelle utformingen – farger, fonter, knapper og layout. UX (User Experience) handler om den totale opplevelsen – er det enkelt å bruke? Finner brukeren det de leter etter? Føler de seg fornøyde? Et produkt trenger både god UI og god UX.',
      },
    },
    {
      id: 'it-1-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it1-8-1-ex-2',
        number: '8.1.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en wireframe?',
        options: [
          { id: 'a', text: 'En ferdig nettside med all funksjonalitet', isCorrect: false, feedback: 'En wireframe er en tidlig skisse, ikke et ferdig produkt.' },
          { id: 'b', text: 'Et program for å skrive kode', isCorrect: false, feedback: 'Det er et designverktøy, ikke et kodeverktøy.' },
          { id: 'c', text: 'En forenklet skisse som viser layout og struktur uten visuelt design', isCorrect: true },
          { id: 'd', text: 'En sikkerhetsfunksjon i nettleseren', isCorrect: false, feedback: 'Wireframe er et designbegrep, ikke et sikkerhetsbegrep.' },
        ],
        solution: 'En wireframe er en forenklet skisse av en nettside eller applikasjon som viser plasseringen av elementer, navigasjon og innholdsstruktur – uten farger, bilder eller detaljert visuelt design. Den fungerer som en blåkopi som hjelper teamet med å planlegge layouten tidlig i designprosessen.',
      },
    },
    {
      id: 'it-1-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it1-8-1-ex-3',
        number: '8.1.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av følgende er et eksempel på designprinsippet «tilbakemelding» (feedback)?',
        options: [
          { id: 'a', text: 'Alle knapper på nettsiden har samme farge og form', isCorrect: false, feedback: 'Dette er et eksempel på konsistens, ikke tilbakemelding.' },
          { id: 'b', text: 'En spinner-animasjon vises mens en side laster', isCorrect: true },
          { id: 'c', text: 'Navigasjonsmenyen er alltid synlig øverst på siden', isCorrect: false, feedback: 'Dette er et eksempel på synlighet (visibility).' },
          { id: 'd', text: 'Siden har bare de mest nødvendige elementene', isCorrect: false, feedback: 'Dette er et eksempel på enkelhet.' },
        ],
        solution: 'Designprinsippet tilbakemelding (feedback) handler om at brukeren alltid skal vite hva som skjer. En spinner-animasjon mens en side laster gir brukeren beskjed om at systemet jobber, slik at de ikke lurer på om klikket ble registrert. Andre eksempler er grønn hake etter vellykket sending, og rød ramme rundt feil i et skjema.',
      },
    },
    {
      id: 'it-1-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it1-8-1-ex-4',
        number: '8.1.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor er det viktig å teste prototyper med ekte brukere?',
        options: [
          { id: 'a', text: 'Fordi utviklerne trenger noen til å skrive koden for dem', isCorrect: false, feedback: 'Brukertesting handler om å teste designet, ikke om koding.' },
          { id: 'b', text: 'Fordi det er et lovkrav å teste med brukere', isCorrect: false, feedback: 'Det er ikke et lovkrav, men det er god praksis.' },
          { id: 'c', text: 'Fordi designere og utviklere ofte ikke oppdager problemer som ekte brukere støter på', isCorrect: true },
          { id: 'd', text: 'Fordi prototyper ikke fungerer uten brukere', isCorrect: false, feedback: 'Prototyper kan demonstreres uten brukertesting, men da mister man verdifull innsikt.' },
        ],
        solution: 'Designere og utviklere kjenner produktet sitt for godt til å se det med friske øyne. Ekte brukere kan avsløre problemer med navigasjon, forståelse og flyt som teamet ikke har tenkt på. Det er også mye billigere å oppdage og fikse designproblemer i prototypefasen enn etter at produktet er utviklet ferdig.',
      },
    },
    {
      id: 'it-1-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it1-8-1-ex-5',
        number: '8.1.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en enkel wireframe (skisse) for forsiden til en skoleportal der elever kan se sine fag, karakterer og kommende innleveringer. Beskriv wireframen med tekst eller tegn den for hånd. Forklar hvilke designprinsipper du har brukt i valget av layout.',
        solution: `En mulig wireframe for en skoleportal:

**Header:** Logo til venstre, brukerens navn og profilikon til høyre, navigasjonsmeny under (Hjem, Fag, Karakterer, Innleveringer, Meldinger).

**Hovedinnhold delt i tre seksjoner:**
1. Velkomstboks med brukerens navn og dagens dato
2. «Mine fag» – grid med fagkort (ikon, fagnavn, lærer)
3. «Kommende innleveringer» – liste sortert etter dato med fagnavn, oppgavetittel og frist

**Sidebar:** Rask tilgang til kalender og nylige meldinger.

**Footer:** Kontaktinfo og lenker til personvern.

**Designprinsipper brukt:**
- Synlighet: De viktigste oppgavene (fag og frister) er umiddelbart synlige
- Konsistens: Alle fagkort har samme utforming
- Enkelhet: Kun nødvendig informasjon på forsiden
- Tilbakemelding: Innleveringer nær fristen markeres med en farge`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-1-8-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it1-8-1-ex-6',
        number: '8.1.6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'En nettbutikk har en vakker og moderne design med store bilder og elegant typografi, men brukertester viser at 60 % av kundene forlater handlekurven uten å fullføre kjøpet. Hva er den mest sannsynlige forklaringen?',
        options: [
          { id: 'a', text: 'Nettsiden har god UI men dårlig UX – betalingsprosessen er for komplisert eller forvirrende', isCorrect: true },
          { id: 'b', text: 'Nettsiden trenger enda flottere bilder for å overtale kundene', isCorrect: false, feedback: 'Mer visuelt design løser sjelden UX-problemer i betalingsflyten.' },
          { id: 'c', text: 'Produktene er for dyre, og det har ingenting med design å gjøre', isCorrect: false, feedback: 'Prising kan påvirke, men 60 % avbrudd i handlekurven tyder på designproblemer i betalingsflyten.' },
          { id: 'd', text: 'Nettsiden har dårlig UI og god UX', isCorrect: false, feedback: 'Oppgaven sier at designet er vakkert og moderne, noe som tyder på god UI.' },
        ],
        solution: 'Når en nettside ser bra ut (god UI) men mange brukere ikke fullfører ønsket handling, tyder det på at brukeropplevelsen (UX) har problemer. Mulige årsaker: for mange steg i betalingsprosessen, krav om å opprette konto, uventet fraktkostnad sent i prosessen, forvirrende skjemafelt, eller manglende tilbakemelding på feil. Dette viser at god UI alene ikke er nok – UX-designet av hele kjøpsflyten er like viktig.',
      },
    },
    {
      id: 'it-1-8-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it1-8-1-ex-7',
        number: '8.1.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en app eller nettside du bruker ofte. Analyser den ved å identifisere minst tre UI-elementer og tre UX-elementer. Vurder deretter: Er det noe du ville forbedret? Begrunn svaret ditt med designprinsippene du har lært.',
        solution: `Eksempel med appen Ruter (kollektivtransport):

**UI-elementer:**
1. Den store, grønne «Kjøp billett»-knappen er synlig og har god affordance
2. Kartvisningen bruker farger for å skille mellom T-bane, buss og trikk
3. Ikoner for de ulike transporttypene er konsistente og gjenkjennelige

**UX-elementer:**
1. Appen foreslår stasjoner basert på GPS-posisjon, noe som sparer tid
2. Favorittreiser kan lagres for rask tilgang
3. Sanntidsinformasjon viser nøyaktig når neste avgang er

**Mulige forbedringer:**
- Konsistens: Noen sider har ulik navigasjonsstruktur (bryter med konsistensprinsippet)
- Feilhåndtering: Når betalingen feiler, er feilmeldingen ikke alltid tydelig nok
- Synlighet: Funksjonen for å planlegge reiser fremover i tid er gjemt bak flere menyer`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.2: Universell utforming og tilgjengelighet
// ============================================================================

export const CHAPTER_IT_1_8_2: TextbookChapter = {
  id: 'it-1-8-2',
  courseId: 'it-1',
  chapterNumber: '8.2',
  title: 'Universell utforming og tilgjengelighet',
  description: 'Lær om WCAG-retningslinjene, kontrastkrav, skjermlesere og tastaturnavigasjon, og forstå hvorfor universell utforming er viktig for alle brukere.',
  estimatedMinutes: 55,
  prevChapter: 'it-1-8-1',
  nextChapter: 'it-1-8-3',
  competenceGoals: [
    'gjøre rede for krav til universell utforming av digitale løsninger',
    'anvende WCAG-retningslinjer i utvikling av nettsider',
    'teste tilgjengelighet i egne digitale løsninger',
  ],
  keyTerms: [
    { term: 'Universell utforming', definition: 'Prinsippet om at produkter og tjenester skal utformes slik at de kan brukes av alle mennesker, uavhengig av funksjonsevne. I digital sammenheng betyr det at nettsider og applikasjoner skal være tilgjengelige for personer med synshemming, hørselshemming, motoriske utfordringer og kognitive funksjonsnedsettelser. I Norge er universell utforming av IKT lovpålagt gjennom likestillings- og diskrimineringsloven.' },
    { term: 'WCAG', definition: 'Web Content Accessibility Guidelines er internasjonale retningslinjer for tilgjengelig webinnhold, utviklet av W3C (World Wide Web Consortium). WCAG er bygd opp rundt fire prinsipper: innhold skal være mulig å oppfatte (Perceivable), mulig å betjene (Operable), forståelig (Understandable) og robust (Robust). Retningslinjene har tre nivåer: A (minimum), AA (anbefalt, lovkrav i Norge) og AAA (optimal tilgjengelighet).' },
    { term: 'Skjermleser', definition: 'Et hjelpemiddel som leser opp innholdet på skjermen for personer med synshemming. Skjermlesere tolker HTML-strukturen og leser opp tekst, beskriver bilder (via alt-tekst) og annonserer interaktive elementer. Vanlige skjermlesere er NVDA og JAWS for Windows, VoiceOver for macOS/iOS, og TalkBack for Android. For at skjermlesere skal fungere godt, må nettsiden bruke semantisk HTML og ha god struktur.' },
    { term: 'Kontrast', definition: 'Forholdet i lysstyrke mellom forgrunnsfargen (tekst) og bakgrunnsfargen. God kontrast er avgjørende for lesbarhet, spesielt for personer med nedsatt syn. WCAG krever et kontrastforhold på minst 4.5:1 for vanlig tekst og 3:1 for stor tekst (over 18pt/24px) på nivå AA. Verktøy som WebAIM Contrast Checker kan brukes til å måle kontrastforholdet mellom to farger.' },
    { term: 'Tastaturnavigasjon', definition: 'Muligheten til å bruke alle funksjoner på en nettside kun ved hjelp av tastaturet, uten mus. Dette er essensielt for brukere med motoriske utfordringer og for skjermleserbrukere. Tab-tasten brukes for å flytte fokus mellom interaktive elementer, Enter for å aktivere, og Escape for å lukke. Alle interaktive elementer må ha en synlig fokusindikator som viser hvor brukeren befinner seg.' },
    { term: 'Alt-tekst', definition: 'Alternativ tekst er en tekstbeskrivelse av et bilde som legges til med HTML-attributtet alt på img-elementer. Alt-tekst leses opp av skjermlesere for synshemmede brukere, vises når bilder ikke kan lastes, og brukes av søkemotorer for å forstå bildeinnhold. God alt-tekst beskriver bildets innhold og funksjon kort og presist, for eksempel "Elev som jobber med koding på laptop" i stedet for bare "Bilde".' },
    { term: 'ARIA', definition: 'Accessible Rich Internet Applications er et sett med HTML-attributter som gir tilleggsinformasjon til skjermlesere om interaktive og dynamiske elementer som ikke dekkes av standard HTML-elementer. ARIA-attributter som role, aria-label og aria-live hjelper skjermlesere med å forstå komplekse brukergrensesnitt som menyer, dialogbokser, varsler og faner.' },
  ],
  content: [
    {
      id: 'it-1-8-2-intro',
      type: 'text',
      content: `## Universell utforming og tilgjengelighet

Forestill deg at du skal bruke en nettside, men du kan ikke se skjermen. Eller at du skal fylle ut et skjema, men du ikke kan bruke mus. Eller at du prøver å lese en tekst, men fargene gjør det umulig å se bokstavene. For mange mennesker er dette hverdagen. Rundt 15–20 % av befolkningen har en eller annen form for funksjonsnedsettelse, og alle kan oppleve midlertidig nedsatt funksjon – en brukket arm, en øyeoperasjon, eller rett og slett at solen skinner på skjermen.

**Universell utforming** handler om å designe digitale løsninger slik at de fungerer for alle. Det er ikke et tillegg du legger på etterpå – det er en grunnleggende kvalitet som bør bygges inn fra starten. I Norge er universell utforming av IKT lovpålagt, og som IT-utvikler er dette noe du må kunne.

I dette kapittelet skal vi lære om WCAG-retningslinjene som setter standarden for tilgjengelig webdesign, og vi skal jobbe praktisk med kontrast, skjermlesere, tastaturnavigasjon og korrekt HTML-koding for tilgjengelighet.`,
    },
    {
      id: 'it-1-8-2-def-uu',
      type: 'definition',
      title: 'Universell utforming',
      content: `**Universell utforming** er prinsippet om at produkter, omgivelser, programmer og tjenester skal utformes slik at de kan brukes av alle mennesker, i så stor utstrekning som mulig, uten behov for tilpasning eller spesialdesign. I digital sammenheng betyr det at nettsider og applikasjoner skal være tilgjengelige for personer med synshemming, hørselshemming, motoriske utfordringer og kognitive funksjonsnedsettelser. I Norge er universell utforming av IKT-løsninger rettet mot allmennheten lovpålagt gjennom likestillings- og diskrimineringsloven, med WCAG 2.1 nivå AA som gjeldende standard.`,
    },
    {
      id: 'it-1-8-2-text-hvorfor',
      type: 'text',
      title: 'Hvorfor er universell utforming viktig?',
      content: `## Universell utforming angår alle

Det er lett å tenke at universell utforming bare handler om en liten gruppe mennesker med permanente funksjonsnedsettelser. Men virkeligheten er mer nyansert. Funksjonsnedsettelser kan deles inn i tre kategorier:

**Permanente:** Blindhet, døvhet, amputert arm, kognitiv funksjonsnedsettelse. Disse er varige tilstander som personen lever med.

**Midlertidige:** Brukket arm, øyeoperasjon, ørebetennelse, hjernerystelse. Disse påvirker brukeren i en begrenset periode, men gir lignende utfordringer.

**Situasjonsbestemte:** Sol på skjermen (synlighet), støyete miljø (hørsel), bærer et barn (kun én hånd), distrahert (oppmerksomhet). Alle opplever dette fra tid til annen.

Når du designer for tilgjengelighet, forbedrer du opplevelsen for *alle* brukere:

- **Undertekster** hjelper døve, men også folk som ser video uten lyd på bussen
- **God kontrast** hjelper svaksynte, men også folk som bruker mobilen i sollys
- **Tastaturnavigasjon** hjelper folk uten mus, men også effektive brukere som foretrekker hurtigtaster
- **Tydelig språk** hjelper folk med kognitive utfordringer, men gjør innholdet bedre for alle

Universell utforming er også god forretning. Tilgjengelige nettsider når et bredere publikum, gir bedre søkemotoroptimalisering (søkemotorer «leser» sider som skjermlesere), og reduserer risikoen for søksmål og bøter.`,
    },
    {
      id: 'it-1-8-2-def-wcag',
      type: 'definition',
      title: 'WCAG (Web Content Accessibility Guidelines)',
      content: `**WCAG** er de internasjonale retningslinjene for tilgjengelig webinnhold, utviklet av World Wide Web Consortium (W3C). WCAG er organisert rundt fire hovedprinsipper, kjent som **POUR**:

1. **Perceivable (Mulig å oppfatte):** Innhold må presenteres slik at alle brukere kan oppfatte det – bilder trenger alt-tekst, video trenger undertekster
2. **Operable (Mulig å betjene):** Grensesnittet må kunne betjenes med ulike verktøy – tastatur, skjermleser, stemmestyring
3. **Understandable (Forståelig):** Innhold og navigasjon må være forståelig – tydelig språk, forutsigbar oppførsel, gode feilmeldinger
4. **Robust:** Innholdet må fungere med ulike teknologier – nettlesere, skjermlesere, fremtidige enheter

Retningslinjene har tre samsvarsnivåer: **A** (minimum), **AA** (anbefalt og lovkrav), **AAA** (best mulig). Norge krever WCAG 2.1 nivå AA.`,
    },
    {
      id: 'it-1-8-2-text-kontrast',
      type: 'text',
      title: 'Farge og kontrast',
      content: `## Kontrast – lesbarhet for alle

Kontrast handler om forskjellen i lysstyrke mellom tekst og bakgrunn. Lav kontrast gjør tekst vanskelig å lese, spesielt for personer med nedsatt syn, eldre brukere, og alle som ser på skjermen i sterkt lys.

WCAG stiller følgende krav til kontrastforhold på nivå AA:

- **Vanlig tekst** (under 18pt/24px): Minst **4.5:1** kontrast
- **Stor tekst** (over 18pt/24px eller 14pt/19px fet): Minst **3:1** kontrast
- **Grafiske elementer og grensesnittkomponenter:** Minst **3:1** kontrast

Kontrastforholdet er et tall som beskriver forskjellen mellom to farger. **1:1** betyr ingen kontrast (f.eks. hvit tekst på hvit bakgrunn), mens **21:1** er maksimal kontrast (svart tekst på hvit bakgrunn).

### Eksempler på kontrastforhold

- Svart (#000000) på hvit (#FFFFFF): **21:1** – utmerket
- Mørk grå (#333333) på hvit (#FFFFFF): **12.6:1** – utmerket
- Mellomgrå (#767676) på hvit (#FFFFFF): **4.5:1** – akkurat godkjent for vanlig tekst
- Lys grå (#AAAAAA) på hvit (#FFFFFF): **2.3:1** – ikke godkjent

### Vanlige feil

Mange designere gjør feil med kontrast fordi de prioriterer estetikk over lesbarhet:

- Lys grå tekst på hvit bakgrunn (ser elegant ut, men er vanskelig å lese)
- Farget tekst på farget bakgrunn (f.eks. blå tekst på grønn bakgrunn)
- Tekst over bilder uten tilstrekkelig kontrast
- Placeholder-tekst i skjemafelt med for lav kontrast

Bruk alltid et kontrastverktøy for å sjekke. WebAIM Contrast Checker (webaim.org/resources/contrastchecker) er gratis og enkelt å bruke – du skriver inn forgrunns- og bakgrunnsfarge og får umiddelbart svar på om kontrastforholdet er godkjent.`,
    },
    {
      id: 'it-1-8-2-example-kontrast',
      type: 'example',
      title: 'Sjekke kontrast i CSS',
      content: `Her er et eksempel der vi velger farger med god kontrast for en nettside:

\`\`\`css
/* God kontrast – godkjent */
body {
  background-color: #FFFFFF; /* Hvit bakgrunn */
  color: #1A1A1A;            /* Nesten svart tekst, kontrast 17.1:1 */
}

h1, h2, h3 {
  color: #003366;            /* Mørk blå, kontrast 11.8:1 mot hvit */
}

a {
  color: #0066CC;            /* Blå lenker, kontrast 5.9:1 mot hvit */
}

/* Dårlig kontrast – IKKE godkjent */
.daarlig-eksempel {
  background-color: #F5F5F5; /* Lys grå bakgrunn */
  color: #BBBBBB;            /* Lys grå tekst, kontrast bare 1.8:1 */
}
\`\`\`

**Tips:** I Chrome DevTools kan du sjekke kontrast direkte. Klikk på et element, se på fargeverdien i Styles-panelet, og klikk på fargeboksen. Chrome viser kontrastforholdet og om det oppfyller WCAG AA.`,
    },
    {
      id: 'it-1-8-2-text-skjermleser',
      type: 'text',
      title: 'Skjermlesere og semantisk HTML',
      content: `## Skjermlesere – å høre nettsiden

En **skjermleser** er et program som leser opp innholdet på skjermen for brukere med synshemming. Skjermlesere tolker HTML-strukturen og presenterer innholdet som tale eller punktskrift. For at en nettside skal fungere godt med skjermlesere, er **semantisk HTML** avgjørende.

### Semantisk HTML gjør forskjellen

Semantisk HTML betyr å bruke riktige HTML-elementer for å beskrive innholdets betydning, ikke bare utseende:

\`\`\`html
<!-- FEIL: Visuelt riktig, men semantisk meningsløst -->
<div class="overskrift-stor-fet">Nyheter</div>
<div class="tekst">Artikkelinnhold her...</div>
<div class="klikkbar">Les mer</div>

<!-- RIKTIG: Semantisk korrekt -->
<h1>Nyheter</h1>
<p>Artikkelinnhold her...</p>
<a href="/artikkel">Les mer</a>
\`\`\`

Visuelt kan begge versjonene se like ut med riktig CSS. Men skjermleseren forstår kun den semantiske versjonen:

- **\`<h1>\`** annonseres som «Overskrift nivå 1: Nyheter» – brukeren vet at dette er en hovedoverskrift
- **\`<p>\`** leses som et tekstarvsnitt
- **\`<a>\`** annonseres som «Lenke: Les mer» – brukeren vet at dette er klikkbart

Med \`<div>\`-versjonen leser skjermleseren bare teksten uten kontekst, og brukeren vet ikke hva som er overskrifter, avsnitt eller lenker.

### Viktige semantiske elementer

- **\`<header>\`, \`<nav>\`, \`<main>\`, \`<footer>\`** – Definerer sideopsettet. Skjermleserbrukere kan hoppe direkte til navigasjon eller hovedinnhold.
- **\`<h1>\`–\`<h6>\`** – Overskriftshierarki. Skjermleserbrukere navigerer ofte via overskrifter.
- **\`<button>\`** – Interaktive knapper. Fungerer automatisk med tastatur (Enter og mellomrom).
- **\`<form>\`, \`<label>\`, \`<input>\`** – Skjemaelementer med tilhørende etiketter.
- **\`<img alt="beskrivelse">\`** – Bilder med alternativ tekst.
- **\`<table>\`, \`<th>\`, \`<td>\`** – Tabeller med overskriftsrader.

### Alt-tekst for bilder

Alle bilder som gir meningsfull informasjon, trenger en alt-tekst:

\`\`\`html
<!-- God alt-tekst – beskriver innholdet -->
<img src="diagram.png" alt="Flytdiagram som viser tre steg: input, prosess, output">

<!-- Dekorativt bilde – tom alt-tekst (skjermleseren hopper over det) -->
<img src="dekor-linje.png" alt="">

<!-- Dårlig alt-tekst -->
<img src="foto.jpg" alt="Bilde">
<img src="graf.png" alt="graf.png">
\`\`\``,
    },
    {
      id: 'it-1-8-2-text-tastatur',
      type: 'text',
      title: 'Tastaturnavigasjon',
      content: `## Tastaturnavigasjon – uten mus

Mange brukere navigerer nettsider kun med tastaturet. Dette gjelder blant annet personer med motoriske utfordringer, skjermleserbrukere, og brukere som rett og slett foretrekker tastaturet for effektivitet. For at en nettside skal være tilgjengelig, må **alle** funksjoner kunne nås og brukes med tastatur alene.

### Viktige tastaturkommandoer

- **Tab** – Flytt fokus til neste interaktive element (lenke, knapp, skjemafelt)
- **Shift + Tab** – Flytt fokus til forrige interaktive element
- **Enter** – Aktiver lenker og knapper
- **Mellomrom** – Aktiver knapper, kryss av i avkrysningsbokser
- **Piltaster** – Naviger i menyer, rullegardinlister og radioknapper
- **Escape** – Lukk dialogbokser og menyer

### Fokusindikator

Når brukeren navigerer med Tab, må det være tydelig synlig *hvilket element* som har fokus. Nettlesere viser en standard fokusramme (outline), men noen designere fjerner den for estetiske grunner – dette er en alvorlig tilgjengelighetsfeil.

\`\`\`css
/* ALDRI gjør dette: */
*:focus {
  outline: none; /* Fjerner fokusindikatoren! */
}

/* Gjør heller dette – behold eller forbedre fokus: */
*:focus-visible {
  outline: 3px solid #005FCC;
  outline-offset: 2px;
}
\`\`\`

\`:focus-visible\` er en CSS-pseudoklasse som viser fokusindikatoren kun for tastaturnavigasjon, ikke for museklikk. Dette gir det beste av begge verdener: synlig fokus for tastaturbrukere, uten forstyrrende rammer for musebrukere.

### Fokusfelle

En «fokusfelle» oppstår når brukeren ikke kan tabbe seg ut av et element – for eksempel en modal som ikke lukkes med Escape. Modale dialogbokser bør fange fokus (slik at brukeren ikke tabber til elementer bak), men de må alltid kunne lukkes med Escape-tasten.

### Skip-lenke

Sider med mange navigasjonslenker bør ha en «Hopp til hovedinnhold»-lenke som det første elementet. Denne er vanligvis visuelt skjult, men vises når den får fokus:

\`\`\`html
<a href="#main" class="skip-link">Hopp til hovedinnhold</a>
<!-- ...navigasjon... -->
<main id="main">
  <!-- Hovedinnhold -->
</main>
\`\`\``,
    },
    {
      id: 'it-1-8-2-text-aria',
      type: 'text',
      title: 'ARIA-attributter',
      content: `## ARIA – når HTML ikke er nok

Noen ganger trenger vi interaktive komponenter som ikke har et tilsvarende HTML-element – for eksempel faner (tabs), trekkspillmenyer (accordions) eller varsler som dukker opp dynamisk. I slike tilfeller bruker vi **ARIA** (Accessible Rich Internet Applications) – et sett med HTML-attributter som gir ekstra informasjon til skjermlesere.

### Viktige ARIA-attributter

- **\`role\`** – Forteller skjermleseren hva slags element dette er
- **\`aria-label\`** – Gir et element en tekstetikett som leses opp
- **\`aria-labelledby\`** – Refererer til et annet element som fungerer som etikett
- **\`aria-hidden="true"\`** – Skjuler et element for skjermlesere
- **\`aria-live="polite"\`** – Forteller skjermleseren at innholdet oppdateres dynamisk
- **\`aria-expanded\`** – Indikerer om en seksjon er åpen eller lukket

\`\`\`html
<!-- Eksempel: Hamburger-meny -->
<button aria-label="Åpne navigasjonsmeny" aria-expanded="false">
  ☰
</button>

<!-- Eksempel: Varsel som dukker opp dynamisk -->
<div role="alert" aria-live="assertive">
  Bestillingen din er bekreftet!
</div>
\`\`\`

### Den første regelen for ARIA

Den viktigste regelen for ARIA er: **Ikke bruk ARIA hvis du kan bruke et standard HTML-element.** En \`<button>\` er alltid bedre enn en \`<div role="button">\`, fordi HTML-elementet har innebygd tastaturstøtte og riktige semantiske egenskaper. ARIA er et supplement, ikke en erstatning for god semantisk HTML.`,
    },
    {
      id: 'it-1-8-2-note-testing',
      type: 'note',
      title: 'Verktøy for tilgjengelighetstesting',
      content: `Her er noen nyttige verktøy for å teste universell utforming:

- **Lighthouse** (innebygd i Chrome DevTools) – Automatisk tilgjengelighetsscore med konkrete forbedringsforslag
- **axe DevTools** (nettleserutvidelse) – Finner tilgjengelighetsfeil direkte i nettleseren
- **WebAIM WAVE** (wave.webaim.org) – Visuell analyse av tilgjengelighet
- **WebAIM Contrast Checker** – Sjekker kontrastforhold mellom farger
- **Skjermleser-testing** – Prøv VoiceOver (Mac: Cmd+F5) eller NVDA (Windows, gratis)
- **Tastaturtest** – Prøv å navigere hele nettsiden din med bare Tab, Enter og Escape

Den beste testen er å prøve løsningen selv uten mus og med skjermleser.`,
    },
    {
      id: 'it-1-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it1-8-2-ex-1',
        number: '8.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva står WCAG for, og hva er formålet?',
        options: [
          { id: 'a', text: 'Web Coding And Graphics – retningslinjer for visuelt webdesign', isCorrect: false, feedback: 'WCAG handler om tilgjengelighet, ikke visuelt design generelt.' },
          { id: 'b', text: 'Web Content Accessibility Guidelines – retningslinjer for tilgjengelig webinnhold', isCorrect: true },
          { id: 'c', text: 'World Computer Association Group – en organisasjon for IT-sikkerhet', isCorrect: false, feedback: 'WCAG er retningslinjer, ikke en organisasjon.' },
          { id: 'd', text: 'Web Compliance And Governance – regler for personvern på nett', isCorrect: false, feedback: 'WCAG handler om tilgjengelighet, ikke personvern.' },
        ],
        solution: 'WCAG står for Web Content Accessibility Guidelines – retningslinjer for tilgjengelig webinnhold utviklet av W3C. Formålet er å sikre at webinnhold er tilgjengelig for alle brukere, inkludert personer med funksjonsnedsettelser. WCAG bygger på fire prinsipper: innhold skal være mulig å oppfatte, mulig å betjene, forståelig og robust.',
      },
    },
    {
      id: 'it-1-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it1-8-2-ex-2',
        number: '8.2.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er minimumskravet til kontrastforhold for vanlig tekst ifølge WCAG nivå AA?',
        options: [
          { id: 'a', text: '2:1', isCorrect: false, feedback: '2:1 er for lavt og vil gjøre tekst vanskelig å lese for mange.' },
          { id: 'b', text: '3:1', isCorrect: false, feedback: '3:1 er kravet for stor tekst, ikke vanlig tekst.' },
          { id: 'c', text: '4.5:1', isCorrect: true },
          { id: 'd', text: '21:1', isCorrect: false, feedback: '21:1 er maksimal kontrast (svart på hvit), ikke minimumskravet.' },
        ],
        solution: 'WCAG nivå AA krever et kontrastforhold på minst 4.5:1 for vanlig tekst (under 18pt/24px). For stor tekst (over 18pt eller 14pt i fet skrift) er kravet 3:1. Kontrastforholdet måler forskjellen i lysstyrke mellom tekst og bakgrunn.',
      },
    },
    {
      id: 'it-1-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it1-8-2-ex-3',
        number: '8.2.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor er det problematisk å fjerne CSS-fokusindikatoren (`outline: none`) fra interaktive elementer?',
        options: [
          { id: 'a', text: 'Fordi det gjør nettsiden tregere', isCorrect: false, feedback: 'Fjerning av fokusindikator påvirker ikke ytelsen.' },
          { id: 'b', text: 'Fordi tastaturbrukere ikke lenger kan se hvilket element som har fokus', isCorrect: true },
          { id: 'c', text: 'Fordi nettleseren vil krasje uten fokusindikator', isCorrect: false, feedback: 'Nettleseren fungerer fortsatt, men brukervennligheten reduseres.' },
          { id: 'd', text: 'Fordi søkemotorer krever fokusindikatorer for å rangere sider', isCorrect: false, feedback: 'Søkemotorer tar ikke hensyn til fokusindikatorer direkte.' },
        ],
        solution: 'Når fokusindikatoren fjernes, mister tastaturbrukere oversikten over hvor de befinner seg på siden. De kan ikke se hvilket element (lenke, knapp, skjemafelt) som er aktivt, noe som gjør navigasjon umulig. Dette bryter med WCAG-kravet om at interaktive elementer skal ha synlig fokusindikator. Bruk heller :focus-visible for å vise fokus kun ved tastaturnavigasjon.',
      },
    },
    {
      id: 'it-1-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it1-8-2-ex-4',
        number: '8.2.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den viktigste grunnen til å bruke semantisk HTML (f.eks. `<nav>`, `<main>`, `<h1>`) i stedet for generiske `<div>`-elementer?',
        options: [
          { id: 'a', text: 'Semantiske elementer laster raskere enn div-elementer', isCorrect: false, feedback: 'Det er ingen ytelsesforskjell mellom semantiske elementer og div.' },
          { id: 'b', text: 'Semantiske elementer gir mening til innholdet slik at skjermlesere kan navigere og forstå strukturen', isCorrect: true },
          { id: 'c', text: 'Nettlesere støtter ikke div-elementer lenger', isCorrect: false, feedback: 'Div-elementer er fullt støttet, men de mangler semantisk betydning.' },
          { id: 'd', text: 'Semantiske elementer er nødvendig for at CSS skal fungere', isCorrect: false, feedback: 'CSS fungerer med alle HTML-elementer, men semantisk HTML gir bedre tilgjengelighet.' },
        ],
        solution: 'Semantiske HTML-elementer beskriver innholdets betydning og struktur. Skjermlesere bruker denne informasjonen til å hjelpe brukere med å navigere – de kan hoppe til navigasjonen (<nav>), hovedinnholdet (<main>) eller bla mellom overskrifter (<h1>-<h6>). Med bare <div>-elementer mister skjermleseren denne strukturen, og brukeren må lytte gjennom alt innhold sekvensielt.',
      },
    },
    {
      id: 'it-1-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it1-8-2-ex-5',
        number: '8.2.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Under ser du HTML-kode med flere tilgjengelighetsproblemer. Identifiser minst fire problemer og forklar hvordan du ville fikset dem.\n\n```html\n<div class="header">\n  <div class="logo">Min Side</div>\n  <div onclick="openMenu()">Meny</div>\n</div>\n<div class="main">\n  <div class="title">Velkommen</div>\n  <img src="hero.jpg">\n  <div style="color: #CCCCCC; background: #FFFFFF;">Viktig informasjon</div>\n</div>\n```',
        solution: `Fire tilgjengelighetsproblemer og løsninger:

1. **Manglende semantiske elementer:** <div class="header"> bør være <header>, <div class="main"> bør være <main>, og <div class="title"> bør være <h1>. Dette gir skjermlesere strukturell informasjon.

2. **Div med onclick i stedet for button:** <div onclick="openMenu()"> bør være <button onclick="openMenu()">. En div er ikke tastaturnavigérbar og annonseres ikke som interaktiv for skjermlesere. En button fungerer automatisk med Tab, Enter og mellomrom.

3. **Bilde uten alt-tekst:** <img src="hero.jpg"> mangler alt-attributtet. Legg til meningsfull alt-tekst: <img src="hero.jpg" alt="Beskrivende tekst om bildet"> eller alt="" hvis bildet er dekorativt.

4. **For lav kontrast:** Fargen #CCCCCC på #FFFFFF bakgrunn gir et kontrastforhold på bare 1.6:1, langt under kravet på 4.5:1. Bruk en mørkere tekstfarge som #595959 eller mørkere for å oppfylle kravet.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-1-8-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it1-8-2-ex-6',
        number: '8.2.6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva er den første regelen for bruk av ARIA-attributter?',
        options: [
          { id: 'a', text: 'Bruk alltid ARIA på alle elementer for å være sikker', isCorrect: false, feedback: 'Overdreven bruk av ARIA kan faktisk gjøre ting verre for skjermlesere.' },
          { id: 'b', text: 'ARIA skal alltid brukes i stedet for semantisk HTML', isCorrect: false, feedback: 'Det er omvendt – semantisk HTML foretrekkes over ARIA.' },
          { id: 'c', text: 'Ikke bruk ARIA hvis du kan bruke et standard HTML-element i stedet', isCorrect: true },
          { id: 'd', text: 'ARIA skal kun brukes på bilder og lenker', isCorrect: false, feedback: 'ARIA kan brukes på mange elementtyper, men bare når standard HTML ikke strekker til.' },
        ],
        solution: 'Den første regelen for ARIA er: Ikke bruk ARIA hvis du kan løse problemet med standard HTML-elementer. For eksempel er <button> alltid bedre enn <div role="button"> fordi HTML-elementet har innebygd tastaturstøtte, fokushåndtering og korrekte semantiske egenskaper. ARIA skal kun brukes som supplement når det ikke finnes et passende HTML-element for det du trenger.',
      },
    },
    {
      id: 'it-1-8-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it1-8-2-ex-7',
        number: '8.2.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar de fire WCAG-prinsippene (POUR) med egne ord og gi et konkret eksempel på et tilgjengelighetsproblem som bryter med hvert prinsipp.',
        solution: `**1. Perceivable (Mulig å oppfatte):** Alt innhold må kunne oppfattes av brukere. Brudd: Et bilde uten alt-tekst – en blind bruker kan ikke oppfatte bildeinnholdet fordi skjermleseren ikke har noe å lese opp.

**2. Operable (Mulig å betjene):** Grensesnittet må kunne brukes av alle. Brudd: En meny som kun fungerer med mus (hover-effekt) – en bruker som navigerer med tastatur kan ikke åpne menyen og er utestengt fra innholdet.

**3. Understandable (Forståelig):** Innhold og navigasjon må være forståelig. Brudd: En feilmelding som bare sier «Feil 4012» i stedet for «Postnummeret må inneholde fire siffer» – brukeren forstår ikke hva som er galt eller hvordan de fikser det.

**4. Robust:** Innholdet må fungere med ulike hjelpemidler. Brudd: En nettside som bruker ikke-standard HTML-kode som bare fungerer i Chrome – skjermlesere og andre nettlesere kan ikke tolke innholdet korrekt.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.3: Prosjektplanlegging og smidig utvikling
// ============================================================================

export const CHAPTER_IT_1_8_3: TextbookChapter = {
  id: 'it-1-8-3',
  courseId: 'it-1',
  chapterNumber: '8.3',
  title: 'Prosjektplanlegging og smidig utvikling',
  description: 'Lær om smidige utviklingsmetoder som Scrum og Kanban, hvordan du planlegger et IT-prosjekt med sprinter og brukerhistorier, og hva et MVP er.',
  estimatedMinutes: 60,
  prevChapter: 'it-1-8-2',
  nextChapter: 'it-1-8-4',
  competenceGoals: [
    'planlegge og gjennomføre et IT-prosjekt ved bruk av smidig utviklingsmetodikk',
    'beskrive roller, prosesser og artefakter i Scrum',
    'bruke brukerhistorier og Kanban-tavle til å organisere arbeid',
  ],
  keyTerms: [
    { term: 'Smidig utvikling (Agile)', definition: 'En samlebetegnelse for utviklingsmetodikker som legger vekt på fleksibilitet, samarbeid og hyppige leveranser av fungerende programvare. I motsetning til tradisjonell fossefallsmetodikk der alt planlegges i detalj på forhånd, tilpasser smidig utvikling seg underveis basert på tilbakemeldinger og endrede behov. De fire kjerneverdiene i det smidige manifestet er: individer og samspill over prosesser og verktøy, fungerende programvare over omfattende dokumentasjon, kundesamarbeid over kontraktsforhandlinger, og det å respondere på endring over å følge en plan.' },
    { term: 'Scrum', definition: 'Et rammeverk for smidig utvikling der arbeidet organiseres i korte, tidsbegrensede perioder kalt sprinter (vanligvis 2-4 uker). Scrum har tre definerte roller: Product Owner (prioriterer oppgaver), Scrum Master (fjerner hindringer og fasiliterer) og utviklingsteamet (utfører arbeidet). Sentrale seremonier inkluderer sprint planning, daglige stand-ups, sprint review og sprint retrospektiv.' },
    { term: 'Kanban', definition: 'En visuell metode for å organisere arbeid der oppgaver representeres som kort på en tavle med kolonner som «A gjore», «Under arbeid» og «Ferdig». Kanban-metoden fokuserer på å begrense antall oppgaver under arbeid samtidig (WIP-grense) for å unngå at teamet starter for mange ting uten å fullføre dem. Metoden gir god oversikt over arbeidsflyten og hjelper med å identifisere flaskehalser.' },
    { term: 'Sprint', definition: 'En tidsbegrenset arbeidsperiode i Scrum, vanligvis 2-4 uker, der teamet forplikter seg til å levere et sett med oppgaver. Hver sprint starter med et planleggingsmøte (sprint planning) der teamet velger oppgaver fra produktkøen, og avsluttes med en gjennomgang (sprint review) der resultatet demonstreres og et tilbakeblikk (retrospektiv) for å forbedre prosessen.' },
    { term: 'Brukerhistorie', definition: 'En kort beskrivelse av en funksjon sett fra brukerens perspektiv, skrevet på formatet: «Som [brukertype] ønsker jeg [funksjon] slik at [nytte]». For eksempel: «Som elev ønsker jeg å se mine kommende innleveringsfrister slik at jeg kan planlegge tiden min.» Brukerhistorier hjelper utviklingsteamet med å forstå hva brukeren faktisk trenger og hvorfor, noe som gir bedre løsninger enn rene tekniske kravspesifikasjoner.' },
    { term: 'MVP (Minimum Viable Product)', definition: 'Den enkleste versjonen av et produkt som kan lanseres for å samle tilbakemeldinger fra ekte brukere. Et MVP inneholder kun de mest essensielle funksjonene – akkurat nok til at produktet er nyttig. Formålet er å teste ideen raskest mulig med minimalt ressursbruk, lære av tilbakemeldingene, og deretter forbedre produktet iterativt. Begrepet ble popularisert av Eric Ries i boken The Lean Startup.' },
    { term: 'Produktkø (Product Backlog)', definition: 'En prioritert liste over alt arbeid som skal gjøres i et prosjekt. Produktkøen eies av Product Owner og inneholder brukerhistorier, feilrettinger, tekniske oppgaver og forbedringer. Oppgavene øverst i listen er de viktigste og mest detaljerte, mens oppgaver lenger ned kan være mer overordnede. Produktkøen er et levende dokument som oppdateres kontinuerlig etter hvert som prosjektet utvikler seg.' },
  ],
  content: [
    {
      id: 'it-1-8-3-intro',
      type: 'text',
      content: `## Prosjektplanlegging og smidig utvikling

Når du skal lage et digitalt produkt – enten det er en nettside, en app eller et annet program – trenger du mer enn bare kodingsferdigheter. Du trenger en plan. Hvordan organiserer du arbeidet? Hva gjør du først? Hvordan håndterer du endringer underveis? Og hvordan sørger du for at det du lager faktisk er noe brukerne trenger?

Tradisjonelt ble IT-prosjekter planlagt i detalj på forhånd, med lange kravspesifikasjoner som beskrev alt som skulle lages. Problemet var at kravene ofte endret seg, og når produktet endelig var ferdig etter måneder eller år, var det ikke lenger det brukerne trengte. Denne tilnærmingen kalles **fossefallsmetoden** fordi arbeidet flyter nedover som en foss – fra krav til design til utvikling til testing – uten å gå tilbake.

**Smidig utvikling** (agile) er svaret på disse problemene. I stedet for å planlegge alt på forhånd, jobber du i korte sykluser der du leverer fungerende deler av produktet, samler tilbakemeldinger og tilpasser planen underveis. I dette kapittelet skal vi lære om de mest brukte smidige metodene: Scrum og Kanban.`,
    },
    {
      id: 'it-1-8-3-def-agile',
      type: 'definition',
      title: 'Smidig utvikling (Agile)',
      content: `**Smidig utvikling** er en filosofi for programvareutvikling som vektlegger fleksibilitet, samarbeid, hyppige leveranser og evne til å tilpasse seg endringer. Det smidige manifestet (2001) definerer fire kjerneverdier: individer og samspill er viktigere enn prosesser og verktøy, fungerende programvare er viktigere enn omfattende dokumentasjon, kundesamarbeid er viktigere enn kontraktsforhandlinger, og å respondere på endring er viktigere enn å følge en plan. Smidig utvikling er ikke én metode, men en samlebetegnelse for rammeverk som Scrum, Kanban, Extreme Programming (XP) og andre.`,
    },
    {
      id: 'it-1-8-3-text-fossefall',
      type: 'text',
      title: 'Fossefall vs. smidig',
      content: `## Fossefallsmetoden vs. smidig utvikling

For å forstå hvorfor smidig utvikling er blitt dominerende, er det nyttig å sammenligne med den tradisjonelle fossefallsmetoden.

### Fossefallsmetoden

Fossefallsmetoden organiserer prosjektet i sekvensielle faser:

1. **Kravinnsamling** – Alle krav defineres i detalj på forhånd
2. **Design** – Systemet designes basert på kravene
3. **Implementering** – Koden skrives
4. **Testing** – Produktet testes mot kravene
5. **Lansering** – Produktet leveres til kunden
6. **Vedlikehold** – Feil rettes og oppdateringer gjøres

Hver fase skal fullføres før neste begynner. Fordeler: tydelig struktur, lett å planlegge budsjett og tidsbruk. Ulemper: vanskelig å håndtere endringer, brukerne ser ikke produktet før sent i prosessen, feil oppdages sent.

### Smidig utvikling

Smidig utvikling jobber i korte sykluser (iterasjoner):

1. **Planlegg** en liten del av produktet
2. **Bygg** denne delen
3. **Test** med ekte brukere
4. **Lær** fra tilbakemeldingene
5. **Gjenta** – planlegg neste del basert på det du har lært

Fordeler: tidlig og hyppig levering, enklere å tilpasse seg endringer, risiko oppdages tidlig. Ulemper: krever tett kommunikasjon, kan være vanskelig å estimere total tid og kostnad.

I dag bruker de fleste IT-selskaper en form for smidig utvikling. Fossefallsmetoden brukes fortsatt i prosjekter med svært tydelige og uforanderlige krav, som bygging av broer eller fly.`,
    },
    {
      id: 'it-1-8-3-text-scrum',
      type: 'text',
      title: 'Scrum – det mest brukte smidige rammeverket',
      content: `## Scrum i praksis

Scrum er det mest utbredte rammeverket for smidig utvikling. Det organiserer arbeidet i korte **sprinter** (vanligvis 2 uker) der teamet leverer en fungerende del av produktet.

### Roller i Scrum

**Product Owner (PO):** Ansvarlig for hva som skal lages. Eier produktkøen (backlog), prioriterer oppgaver basert på forretningsverdi, og representerer brukernes behov. PO-en bestemmer hvilke funksjoner som er viktigst.

**Scrum Master (SM):** Ansvarlig for at Scrum-prosessen fungerer. Fjerner hindringer for teamet, fasiliterer møter og beskytter teamet mot forstyrrelser. Scrum Master er ikke en sjef, men en servant-leader som hjelper teamet å jobbe effektivt.

**Utviklingsteamet:** Tverrfaglig team (vanligvis 3-9 personer) som gjør selve arbeidet – designere, utviklere, testere. Teamet er selvorganiserende og bestemmer selv hvordan oppgavene løses.

### Scrum-seremonier (møter)

**Sprint Planning:** Møte i starten av hver sprint der teamet velger oppgaver fra produktkøen og planlegger arbeidet for sprinten. Resultatet er et sprint-mål og en sprint-backlog.

**Daily Stand-up:** Kort daglig møte (15 minutter) der hvert teammedlem svarer på: Hva gjorde jeg i går? Hva skal jeg gjøre i dag? Har jeg noen hindringer?

**Sprint Review:** Møte på slutten av sprinten der teamet demonstrerer det de har laget for Product Owner og andre interessenter. Tilbakemeldinger noteres for fremtidig arbeid.

**Sprint Retrospektiv:** Møte der teamet reflekterer over prosessen: Hva fungerte bra? Hva kan forbedres? Hva skal vi gjøre annerledes neste sprint?

### Sprint-syklus

\`\`\`
Sprint Planning --> Daglig arbeid (med Daily Stand-ups) --> Sprint Review --> Retrospektiv
     ^                                                                          |
     +--------------------------------------------------------------------------+
                            (Ny sprint starter)
\`\`\``,
    },
    {
      id: 'it-1-8-3-example-brukerhistorie',
      type: 'example',
      title: 'Brukerhistorier for en skoleapp',
      content: `Brukerhistorier skrives på formatet: «Som [hvem] ønsker jeg [hva] slik at [hvorfor]»

Her er eksempler for en skole-app:

**Brukerhistorie 1:**
Som *elev* ønsker jeg å *se mine innleveringsfrister på én side* slik at *jeg kan planlegge tiden min og unngå å levere for sent*.

**Brukerhistorie 2:**
Som *lærer* ønsker jeg å *legge ut oppgaver med frist og beskrivelse* slik at *elevene vet hva de skal gjøre og når det skal leveres*.

**Brukerhistorie 3:**
Som *elev* ønsker jeg å *motta varsling dagen før en frist* slik at *jeg blir minnet på innleveringer jeg kanskje har glemt*.

**Brukerhistorie 4:**
Som *forelder* ønsker jeg å *se barnets fraværsoversikt* slik at *jeg kan følge med på oppmøtet*.

Hver brukerhistorie kan deretter brytes ned i konkrete oppgaver:

Brukerhistorie 1 --> Oppgaver:
- Lage databasetabell for innleveringer
- Lage API-endepunkt som henter frister for en elev
- Designe og kode fristlistevisning
- Sortere frister etter dato
- Markere frister som er passert med rød farge
- Skrive tester for fristvisningen`,
    },
    {
      id: 'it-1-8-3-text-kanban',
      type: 'text',
      title: 'Kanban-tavle',
      content: `## Kanban – visuell arbeidsstyring

Kanban er en enklere metode enn Scrum som fokuserer på å visualisere arbeidsflyten. En **Kanban-tavle** er et verktøy der oppgaver representeres som kort som flyttes gjennom kolonner:

\`\`\`
+----------------+----------------+----------------+----------------+
|  A gjore       |  Under         |  Testing       |  Ferdig        |
|  (To Do)       |  arbeid        |  (Review)      |  (Done)        |
|                |  (In Progress) |                |                |
+----------------+----------------+----------------+----------------+
| [Lage logo]    | [Design        | [Login-        | [Database-     |
|                |  forside]      |  side]         |  oppsett]      |
| [Feilmelding   |                |                |                |
|  ved login]    | [Bruker-       |                | [Wireframes]   |
|                |  profil]       |                |                |
| [Soke-         |                |                |                |
|  funksjon]     |                |                |                |
+----------------+----------------+----------------+----------------+
\`\`\`

### WIP-grense (Work In Progress)

Et sentralt prinsipp i Kanban er å begrense antall oppgaver som er under arbeid samtidig. Hvis du har en WIP-grense på 2 for «Under arbeid»-kolonnen, kan ikke teamet starte en tredje oppgave for en av de to pågående er ferdig. Dette forhindrer multitasking (som reduserer effektiviteten) og tvinger teamet til å fullføre oppgaver for de starter nye.

### Verktøy for Kanban

- **Trello** – Gratis og enkelt, perfekt for skoleprosjekter
- **GitHub Projects** – Integrert med GitHub, fint for kodeprosjekter
- **Jira** – Brukes mye i profesjonelle IT-selskaper
- **Fysisk tavle** – Post-it-lapper på en whiteboard fungerer utmerket

For skoleprosjekter anbefales enten Trello eller GitHub Projects, som begge er gratis og enkle å komme i gang med.`,
    },
    {
      id: 'it-1-8-3-text-mvp',
      type: 'text',
      title: 'MVP – Minimum Viable Product',
      content: `## MVP – start med det viktigste

Et vanlig problem i IT-prosjekter er å prøve å lage alt på én gang. Du har en stor idé, du vil ha alle funksjonene, og du ender opp med et halvferdig produkt der ingenting fungerer ordentlig. **MVP** (Minimum Viable Product) er løsningen på dette.

Et MVP er den enkleste versjonen av produktet ditt som gir verdi til brukerne. Det er ikke en halvferdig versjon – det er en *komplett* versjon med bare de mest essensielle funksjonene.

### Eksempel: MVP for en nettavis

**Full visjon:** Nettavis med artikler, kommentarer, brukerprofiler, nyhetsbrev, podcast, videoinnhold, personalisert forside, push-varsler, delefunksjoner og annonsesystem.

**MVP:** Nettavis med artikler organisert etter kategori, og en enkel forside som viser de nyeste artiklene.

Med MVP-en kan du:
- Teste om folk er interessert i innholdet ditt
- Lære hva brukerne savner (kanskje de vil ha søkefunksjon, ikke kommentarer)
- Lansere raskt og forbedre basert på tilbakemeldinger

### MVP i et skoleprosjekt

Når du har et skoleprosjekt med begrenset tid, er MVP-tenking spesielt nyttig:

1. **List opp alle funksjonene** du ønsker i produktet
2. **Prioriter:** Hva er absolutt nødvendig for at produktet skal fungere?
3. **Definer MVP:** De 3-5 viktigste funksjonene
4. **Bygg MVP først** – sørg for at disse fungerer skikkelig
5. **Legg til flere funksjoner** hvis det er tid igjen

Det er alltid bedre å ha et lite produkt som fungerer perfekt, enn et stort produkt fullt av feil.`,
    },
    {
      id: 'it-1-8-3-note-skoleprosjekt',
      type: 'note',
      title: 'Tips for skoleprosjekter i IT 1',
      content: `Her er en enkel oppskrift for å planlegge et IT-prosjekt på skolen:

1. **Definer problemet:** Hva skal løsningen gjøre? Hvem er brukerne?
2. **Skriv 3-5 brukerhistorier:** Hva trenger brukerne?
3. **Lag wireframes:** Skisser sidene/skjermbildene
4. **Sett opp Kanban-tavle:** Bryt brukerhistoriene ned i oppgaver
5. **Definer MVP:** Hva er minimumsleveransen?
6. **Jobb i sprinter:** Del prosjekttiden i 1-2 ukers sprinter
7. **Test underveis:** Vis produktet til medelever og samle tilbakemeldinger
8. **Dokumenter:** Hold README oppdatert og kommenter koden

Denne prosessen viser læreren at du forstår smidig utvikling i praksis, ikke bare i teori.`,
    },
    {
      id: 'it-1-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it1-8-3-ex-1',
        number: '8.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedforskjellen mellom fossefallsmetoden og smidig utvikling?',
        options: [
          { id: 'a', text: 'Fossefallsmetoden bruker tastatur og smidig utvikling bruker mus', isCorrect: false, feedback: 'Forskjellen handler om prosjektmetodikk, ikke verktøy.' },
          { id: 'b', text: 'Fossefallsmetoden planlegger alt i detalj på forhånd, mens smidig utvikling jobber i korte sykluser og tilpasser seg underveis', isCorrect: true },
          { id: 'c', text: 'Smidig utvikling er raskere fordi man slipper å planlegge', isCorrect: false, feedback: 'Smidig utvikling innebærer også planlegging, men i kortere sykluser.' },
          { id: 'd', text: 'Fossefallsmetoden er for store selskaper og smidig utvikling er for små', isCorrect: false, feedback: 'Begge kan brukes i organisasjoner av alle størrelser.' },
        ],
        solution: 'Fossefallsmetoden gjennomfører prosjektet i sekvensielle faser (krav, design, koding, testing, lansering) der alt planlegges på forhånd. Smidig utvikling jobber i korte sykluser (sprinter) der man planlegger, bygger, tester og lærer iterativt. Smidig utvikling håndterer endringer bedre fordi man kan justere kursen underveis basert på tilbakemeldinger.',
      },
    },
    {
      id: 'it-1-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it1-8-3-ex-2',
        number: '8.3.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en sprint i Scrum?',
        options: [
          { id: 'a', text: 'Et daglig møte der alle forteller hva de jobber med', isCorrect: false, feedback: 'Det er daily stand-up. En sprint er en hel arbeidsperiode.' },
          { id: 'b', text: 'En tidsbegrenset arbeidsperiode (vanligvis 2-4 uker) der teamet leverer en del av produktet', isCorrect: true },
          { id: 'c', text: 'En programmeringskonkurranse mellom utviklere', isCorrect: false, feedback: 'Det kalles en hackathon, ikke en sprint.' },
          { id: 'd', text: 'En rask test av produktet med brukere', isCorrect: false, feedback: 'Det kalles en brukertest. En sprint er en hel arbeidsperiode.' },
        ],
        solution: 'En sprint er en tidsbegrenset arbeidsperiode i Scrum, vanligvis 2-4 uker. Teamet forplikter seg til å levere et definert sett med oppgaver i løpet av sprinten. Hver sprint har en planleggingsfase, daglige standup-møter, en gjennomgang av resultatet og et retrospektiv for å forbedre prosessen.',
      },
    },
    {
      id: 'it-1-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it1-8-3-ex-3',
        number: '8.3.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er formålet med en WIP-grense (Work In Progress-grense) i Kanban?',
        options: [
          { id: 'a', text: 'Å sørge for at teamet ikke jobber for mange timer om dagen', isCorrect: false, feedback: 'WIP-grense handler om antall samtidige oppgaver, ikke arbeidstimer.' },
          { id: 'b', text: 'Å begrense antall oppgaver under arbeid samtidig, slik at teamet fullfører oppgaver i stedet for å starte for mange', isCorrect: true },
          { id: 'c', text: 'Å sette en grense for hvor mange personer som kan jobbe på prosjektet', isCorrect: false, feedback: 'WIP handler om oppgaver, ikke teamstørrelse.' },
          { id: 'd', text: 'Å sikre at ingen oppgaver tar mer enn én dag', isCorrect: false, feedback: 'WIP sier ingenting om varigheten på enkeltoppgaver.' },
        ],
        solution: 'WIP-grense begrenser antall oppgaver som kan være under arbeid samtidig. For eksempel betyr en WIP-grense på 3 at teamet ikke kan ha mer enn tre oppgaver i kolonnen Under arbeid. Dette forhindrer multitasking, tvinger teamet til å fullføre pågående arbeid, og gjør det lettere å oppdage flaskehalser i arbeidsflyten.',
      },
    },
    {
      id: 'it-1-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it1-8-3-ex-4',
        number: '8.3.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av følgende er en korrekt brukerhistorie?',
        options: [
          { id: 'a', text: 'Lag en database med brukertabell og innloggingsfunksjon', isCorrect: false, feedback: 'Dette er en teknisk oppgave, ikke en brukerhistorie. Den mangler brukerperspektiv og nytte.' },
          { id: 'b', text: 'Som elev ønsker jeg å søke etter bøker i biblioteket slik at jeg raskt kan finne bøker om emnet jeg jobber med', isCorrect: true },
          { id: 'c', text: 'Søkefunksjonen skal bruke et REST-API med JSON-respons', isCorrect: false, feedback: 'Dette er en teknisk spesifikasjon, ikke en brukerhistorie.' },
          { id: 'd', text: 'Nettbutikken trenger en betalingsløsning innen uke 5', isCorrect: false, feedback: 'Dette er et krav med frist, men mangler brukerens perspektiv og behov.' },
        ],
        solution: 'En brukerhistorie følger formatet «Som [brukertype] ønsker jeg [funksjon] slik at [nytte]». Alternativ B er korrekt fordi den definerer hvem brukeren er (elev), hva de trenger (søke etter bøker) og hvorfor (finne relevante bøker raskt). Brukerhistorier holder fokus på brukerens behov fremfor teknisk implementasjon.',
      },
    },
    {
      id: 'it-1-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it1-8-3-ex-5',
        number: '8.3.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal lage en enkel nettside for skolens elevråd. Nettsiden skal informere om elevrådets arbeid, vise referater fra møter, presentere medlemmene, og la elever sende inn forslag.\n\nSkriv minst tre brukerhistorier for prosjektet og definer et MVP – hva bør den første versjonen av nettsiden inneholde?',
        solution: `Brukerhistorier:

1. Som elev ønsker jeg å lese referater fra elevrådsmøter slik at jeg kan holde meg oppdatert på hva elevrådet jobber med.

2. Som elev ønsker jeg å sende inn forslag til elevrådet slik at mine ideer kan bli hørt og diskutert.

3. Som elevrådsleder ønsker jeg å publisere nye referater enkelt slik at informasjonen er tilgjengelig raskt etter hvert møte.

4. Som elev ønsker jeg å se hvem som sitter i elevrådet slik at jeg vet hvem jeg kan kontakte.

MVP (Minimum Viable Product) – den første versjonen bør inneholde:
1. Forside med kort introduksjon om elevrådet
2. Side med oversikt over elevrådets medlemmer (navn, klasse, rolle)
3. Side med referater fra møter (sortert etter dato)

Forslagsfunksjonen og publiseringsverktøyet kan legges til i versjon 2, da MVP-en fokuserer på å gjøre informasjon tilgjengelig.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-1-8-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it1-8-3-ex-6',
        number: '8.3.6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva er forskjellen mellom rollen Product Owner og Scrum Master i Scrum?',
        options: [
          { id: 'a', text: 'Product Owner skriver kode og Scrum Master tester koden', isCorrect: false, feedback: 'Ingen av disse rollene skriver eller tester kode – det gjør utviklingsteamet.' },
          { id: 'b', text: 'Product Owner prioriterer hva som skal lages, og Scrum Master sørger for at prosessen fungerer og fjerner hindringer', isCorrect: true },
          { id: 'c', text: 'Product Owner er sjefen og Scrum Master er assistenten', isCorrect: false, feedback: 'Scrum har ikke et tradisjonelt sjef-underordnet-forhold. Rollene har ulike ansvarsområder.' },
          { id: 'd', text: 'Det er ingen forskjell – de gjør det samme', isCorrect: false, feedback: 'Rollene har tydelig forskjellige ansvarsområder.' },
        ],
        solution: 'Product Owner (PO) er ansvarlig for produktet – de eier produktkøen, prioriterer oppgaver basert på forretningsverdi og representerer brukernes behov. PO-en bestemmer hva som skal lages og i hvilken rekkefølge. Scrum Master (SM) er ansvarlig for prosessen – de fasiliterer Scrum-seremoniene, fjerner hindringer som blokkerer teamet, og beskytter teamet mot forstyrrelser. SM er en servant-leader som hjelper teamet å jobbe effektivt.',
      },
    },
    {
      id: 'it-1-8-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it1-8-3-ex-7',
        number: '8.3.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hva MVP (Minimum Viable Product) betyr og gi et eksempel der du viser forskjellen mellom MVP og full visjon for et selvvalgt digitalt produkt. Drøft fordeler og ulemper med MVP-tilnærmingen.',
        solution: `MVP (Minimum Viable Product) er den enkleste versjonen av et produkt som kan lanseres for å teste ideen med ekte brukere og samle tilbakemeldinger.

Eksempel – treningsapp:

Full visjon: App med treningsprogrammer, kalenderplanlegging, personlig trener-AI, videoguider, sosial deling, utfordringer med venner, kobling til smartklokke, kostholdsplanlegger og statistikkdashboard.

MVP: App der brukeren kan logge treningsøkter (dato, type, varighet) og se en enkel oversikt over gjennomførte treninger den siste måneden.

Fordeler med MVP:
- Rask lansering – du kan teste ideen på uker, ikke måneder
- Sparer tid og penger – du unngår å bygge funksjoner ingen bruker
- Ekte tilbakemeldinger – du lærer hva brukerne faktisk vil ha
- Redusert risiko – du oppdager tidlig om ideen fungerer

Ulemper med MVP:
- Kan virke ufullstendig – brukere kan bli skuffet over begrenset funksjonalitet
- Krever rask oppfølging – du må faktisk forbedre produktet basert på tilbakemeldingene
- Kan gi feil inntrykk – brukere dømmer produktet basert på MVP-en, ikke visjonen
- Vanskelig å definere minimum – det er fristende å legge til bare en ting til`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.4: Versjonskontroll med Git
// ============================================================================

export const CHAPTER_IT_1_8_4: TextbookChapter = {
  id: 'it-1-8-4',
  courseId: 'it-1',
  chapterNumber: '8.4',
  title: 'Versjonskontroll med Git',
  description: 'Lær å bruke Git for versjonskontroll, forstå konsepter som repository, commit, branch og merge, og samarbeid med andre via GitHub og pull requests.',
  estimatedMinutes: 65,
  prevChapter: 'it-1-8-3',
  nextChapter: 'it-1-8-5',
  competenceGoals: [
    'bruke versjonskontroll til å håndtere kodeendringer i et prosjekt',
    'forklare grunnleggende Git-konsepter som repository, commit, branch og merge',
    'samarbeide med andre utviklere ved hjelp av GitHub og pull requests',
  ],
  keyTerms: [
    { term: 'Versjonskontroll', definition: 'Et system som holder styr på endringer i filer over tid, slik at du kan gå tilbake til tidligere versjoner, se hvem som endret hva og når, og samarbeide med andre uten å overskrive hverandres arbeid. Versjonskontroll er like viktig for programvareutvikling som «Angre»-funksjonen (Ctrl+Z) er for tekstbehandling, men mye kraftigere – det holder styr på hele prosjektets historikk.' },
    { term: 'Git', definition: 'Det mest brukte versjonskontrollsystemet i verden, utviklet av Linus Torvalds i 2005 (skaperen av Linux). Git er et distribuert system, noe som betyr at hver utvikler har en komplett kopi av hele prosjekthistorikken på sin egen maskin. Git sporer endringer i filer, gjør det mulig å jobbe på flere versjoner parallelt (brancher), og har kraftige verktøy for å slå sammen (merge) endringer fra forskjellige bidragsytere.' },
    { term: 'Repository (repo)', definition: 'Et repository er en mappe som inneholder prosjektfilene dine og hele endringshistorikken, administrert av Git. Et lokalt repository finnes på din egen datamaskin, mens et eksternt (remote) repository er lagret på en server som GitHub. Repositoryet inneholder en skjult .git-mappe som lagrer all versjonsinformasjon.' },
    { term: 'Commit', definition: 'En commit er et lagringspunkt i Git – et øyeblikksbilde av prosjektet på et bestemt tidspunkt. Hver commit har en unik ID (hash), en melding som beskriver endringene, informasjon om hvem som lagde den og et tidsstempel. Commits bygger på hverandre og danner prosjektets historikk. En god commit-melding forklarer hva som ble endret og hvorfor.' },
    { term: 'Branch (gren)', definition: 'En branch er en uavhengig utviklingslinje som lar deg jobbe med endringer uten å påvirke hovedkoden. Du kan tenke på en branch som en parallell virkelighet der du kan eksperimentere fritt. Hovedbranchen heter vanligvis «main» eller «master». Nye funksjoner utvikles typisk i egne brancher som slås sammen med main når de er ferdige og testet.' },
    { term: 'Merge', definition: 'Prosessen med å slå sammen endringer fra én branch inn i en annen. Når en funksjon er ferdig utviklet i sin egen branch, merges den inn i main-branchen. Git prøver å slå sammen endringene automatisk, men hvis to personer har endret de samme linjene i en fil, oppstår en merge-konflikt som må løses manuelt.' },
    { term: 'Pull Request (PR)', definition: 'En pull request er en forespørsel om å slå sammen endringer fra én branch inn i en annen, vanligvis brukt på GitHub. PR-en viser alle endringene som er gjort og gir teammedlemmer mulighet til å gjennomgå (review) koden, kommentere, foreslå endringer og godkjenne før endringene slås sammen. Pull requests er sentrale i profesjonelt samarbeid og sikrer kodekvalitet gjennom kodegjennomgang.' },
    { term: 'GitHub', definition: 'En nettbasert plattform som bygger på Git og tilbyr hosting av Git-repositorier, samarbeidsverktøy, pull requests, issues (feilrapporter), prosjektstyring og mye mer. GitHub er verdens største plattform for programvareutvikling med over 100 millioner utviklere. Det er gratis for åpne prosjekter og personlig bruk.' },
  ],
  content: [
    {
      id: 'it-1-8-4-intro',
      type: 'text',
      content: `## Versjonskontroll med Git

Har du noen gang lagret filer med navn som \`prosjekt_v1.html\`, \`prosjekt_v2_ENDELIG.html\`, \`prosjekt_v3_ENDELIG_NY.html\`? Eller kanskje du har gjort en endring som ødela noe, og du anga at du ikke hadde en kopi av den forrige versjonen? Versjonskontroll løser disse problemene.

**Git** er et versjonskontrollsystem som holder styr på alle endringer du gjør i prosjektet ditt. Det er som en tidmaskin for koden din – du kan se hele endringshistorikken, gå tilbake til en hvilken som helst tidligere versjon, og samarbeide med andre uten å overskrive hverandres arbeid.

Git er det mest brukte verktøyet i profesjonell programvareutvikling. Uansett om du jobber alene eller i et team, er Git en ferdighet du trenger. I dette kapittelet lærer du de grunnleggende konseptene og kommandoene du trenger for å komme i gang.`,
    },
    {
      id: 'it-1-8-4-def-git',
      type: 'definition',
      title: 'Git',
      content: `**Git** er et distribuert versjonskontrollsystem som sporer endringer i filer og koordinerer arbeid mellom flere personer. Git ble utviklet av Linus Torvalds i 2005 for å håndtere utviklingen av Linux-kjernen. Distribuert betyr at hver utvikler har en komplett kopi av hele prosjekthistorikken, slik at du kan jobbe offline og ikke er avhengig av en sentral server. Git er gratis, åpen kildekode, og brukes av alt fra enkeltpersonprosjekter til de største programvareprosjektene i verden.`,
    },
    {
      id: 'it-1-8-4-text-hvorfor',
      type: 'text',
      title: 'Hvorfor bruke versjonskontroll?',
      content: `## Hvorfor versjonskontroll er uunnværlig

Versjonskontroll gir deg flere superkrefter:

**1. Historikk:** Hver endring du gjør lagres med en beskrivelse. Du kan se nøyaktig hva som ble endret, når og av hvem. Dette er uvurderlig når du lurer på hvorfor koden ser ut som den gjør, eller når noe plutselig slutter å fungere.

**2. Angre-funksjon:** Gjorde du en feil? Du kan gå tilbake til en hvilken som helst tidligere versjon av prosjektet. Ingen endring er permanent – du kan alltid rulle tilbake.

**3. Parallell utvikling:** Med brancher kan du jobbe på en ny funksjon uten å forstyrre den fungerende koden. Når funksjonen er ferdig, slår du den sammen med hovedkoden.

**4. Samarbeid:** Flere personer kan jobbe på det samme prosjektet samtidig uten å overskrive hverandres endringer. Git holder styr på hvem som endret hva og hjelper med å slå sammen arbeidet.

**5. Eksperimentering:** Du kan prøve ut ideer i en egen branch uten risiko. Fungerer det? Slå det sammen. Fungerer det ikke? Slett branchen og ingen skade er gjort.

**6. Sikkerhetskopi:** Når du dytter (push) koden til GitHub, har du en sikkerhetskopi i skyen. Selv om datamaskinen din dør, er koden trygg.`,
    },
    {
      id: 'it-1-8-4-text-grunnbegreper',
      type: 'text',
      title: 'Grunnleggende Git-begreper',
      content: `## De viktigste Git-begrepene

Før vi ser på kommandoer, la oss forstå de sentrale begrepene:

### Repository (repo)
Et repository er prosjektmappen din med Git aktivert. Det inneholder alle prosjektfilene dine pluss en skjult \`.git\`-mappe som lagrer hele endringshistorikken. Du kan ha et **lokalt repo** på maskinen din og et **eksternt (remote) repo** på GitHub.

### Working Directory, Staging Area og Repository
Git har tre «områder» for filer:

1. **Working Directory:** Mappen du jobber i. Endringer her er ikke lagret i Git ennå.
2. **Staging Area (Index):** Et mellomsteg der du velger hvilke endringer som skal inkluderes i neste commit. Du legger filer til staging med \`git add\`.
3. **Repository:** Den permanente historikken. Når du kjører \`git commit\`, lagres endringene fra staging area som et nytt punkt i historikken.

\`\`\`
Arbeidsmappe  -->  Staging Area  -->  Repository
 (endringer)      (klargjort)       (lagret historikk)
    git add           git commit
\`\`\`

### Commit
En commit er et øyeblikksbilde av prosjektet ditt på et bestemt tidspunkt. Tenk på det som et lagringspunkt i et spill – du kan alltid gå tilbake hit.

### Branch
En branch er en parallell utviklingslinje. Hovedbranchen heter \`main\`. Når du vil lage en ny funksjon, lager du en ny branch, gjør endringene der, og merger tilbake til \`main\` når du er ferdig.`,
    },
    {
      id: 'it-1-8-4-example-gitkommandoer',
      type: 'example',
      title: 'De viktigste Git-kommandoene',
      content: `Her er de grunnleggende Git-kommandoene du trenger for å komme i gang:

**Oppsett og oppretting:**
\`\`\`bash
# Opprett et nytt Git-repository i gjeldende mappe
git init

# Klon et eksisterende repository fra GitHub
git clone https://github.com/brukernavn/prosjekt.git

# Konfigurer navn og e-post (gjøres én gang)
git config --global user.name "Ditt Navn"
git config --global user.email "din@epost.no"
\`\`\`

**Daglig arbeid:**
\`\`\`bash
# Se status – hvilke filer er endret?
git status

# Legg til en fil i staging area
git add filnavn.html

# Legg til alle endrede filer i staging area
git add .

# Lagre endringene som en commit med beskrivelse
git commit -m "Legg til navigasjonsmeny på forsiden"

# Se historikken over commits
git log --oneline
\`\`\`

**Samarbeid med GitHub:**
\`\`\`bash
# Last opp commits til GitHub
git push

# Hent og slå sammen endringer fra GitHub
git pull
\`\`\`

**Branching:**
\`\`\`bash
# Lag en ny branch
git branch ny-funksjon

# Bytt til branchen
git checkout ny-funksjon

# Eller lag og bytt i ett steg
git checkout -b ny-funksjon

# Slå sammen en branch inn i gjeldende branch
git merge ny-funksjon
\`\`\``,
    },
    {
      id: 'it-1-8-4-text-commitmelding',
      type: 'text',
      title: 'Gode commit-meldinger',
      content: `## Skriv gode commit-meldinger

Commit-meldinger er viktigere enn du tror. De er fremtidens dokumentasjon – når du (eller en annen) lurer på hvorfor en endring ble gjort, er commit-meldingen det første stedet å sjekke. En god commit-melding forklarer *hva* som ble endret og *hvorfor*.

### Eksempler på dårlige commit-meldinger

\`\`\`
git commit -m "fix"
git commit -m "endringer"
git commit -m "oppdatering"
git commit -m "ting"
git commit -m "asdfjkl"
\`\`\`

Disse sier ingenting om hva som ble gjort eller hvorfor.

### Eksempler på gode commit-meldinger

\`\`\`
git commit -m "Fiks feil der kontaktskjema ikke sendte e-post"
git commit -m "Legg til responsivt design for mobilvisning"
git commit -m "Endre bakgrunnsfarge til morkebla etter kundens ønske"
git commit -m "Fjern utdatert jQuery-avhengighet og bruk vanilla JS"
git commit -m "Legg til passordvalidering med minimum 8 tegn"
\`\`\`

### Retningslinjer for commit-meldinger

1. **Start med et verb i imperativ:** «Legg til», «Fiks», «Endre», «Fjern», «Oppdater»
2. **Vær spesifikk:** «Fiks innloggingsfeil» er bedre enn «Fiks feil»
3. **Hold det kort:** Første linje bør være under 50-72 tegn
4. **Skriv på norsk eller engelsk** – vær konsistent gjennom prosjektet
5. **Én commit per logisk endring:** Ikke bland urelaterte endringer i samme commit`,
    },
    {
      id: 'it-1-8-4-text-branching',
      type: 'text',
      title: 'Branching og merging',
      content: `## Brancher – parallelle utviklingslinjer

Branching er en av Gits kraftigste funksjoner. En branch lar deg jobbe på en funksjon eller en feilretting isolert fra resten av koden. Tenk på det som et parallelt univers der du kan gjøre hva du vil uten å påvirke den fungerende koden i \`main\`.

### En typisk arbeidsflyt med brancher

1. Du er på \`main\`-branchen med fungerende kode
2. Du lager en ny branch: \`git checkout -b legg-til-bildegalleri\`
3. Du gjør endringer og committer dem i den nye branchen
4. Når funksjonen er ferdig og testet, merger du tilbake til \`main\`
5. Du sletter den gamle branchen (valgfritt)

\`\`\`
main:     A---B---C---------F---G
                   \\       /
bildegalleri:       D---E
\`\`\`

Her representerer bokstavene commits. Branch \`bildegalleri\` ble opprettet fra commit C, fikk to egne commits (D og E), og ble merget tilbake til \`main\` som commit F.

### Merge-konflikter

Noen ganger har to brancher endret de samme linjene i en fil. Da oppstår en **merge-konflikt** – Git kan ikke avgjøre hvilken versjon som er riktig og ber deg løse konflikten manuelt.

En merge-konflikt ser slik ut i filen:

\`\`\`
<<<<<<< HEAD
<h1>Velkommen til Min Side</h1>
=======
<h1>Velkommen til Vår Nettside</h1>
>>>>>>> bildegalleri
\`\`\`

Du må velge hvilken versjon du vil beholde (eller kombinere dem), fjerne konfliktmerkene (\`<<<\`, \`===\`, \`>>>\`), og committe resultatet.`,
    },
    {
      id: 'it-1-8-4-text-github',
      type: 'text',
      title: 'GitHub og samarbeid',
      content: `## GitHub – samarbeidsplattformen

**GitHub** er en nettbasert plattform som bygger på Git og legger til samarbeidsverktøy. Mens Git er kommandolinjeverktøyet som kjører lokalt, er GitHub et nettsted der du kan:

- Lagre repositoriene dine i skyen
- Dele kode med andre (offentlig eller privat)
- Samarbeide gjennom pull requests
- Spore feil og oppgaver med Issues
- Vise prosjektets historikk visuelt
- Bygge en portefølje av prosjektene dine

### Pull Requests – kodegjennomgang

En **pull request** (PR) er hjertet av samarbeid på GitHub. Når du har jobbet med en funksjon i en branch og vil slå den sammen med \`main\`, oppretter du en pull request. PR-en:

1. Viser alle endringene du har gjort (diff)
2. Lar teammedlemmer kommentere på spesifikke kodelinjer
3. Gir mulighet for diskusjon om designvalg
4. Kan kjøre automatiske tester
5. Krever godkjenning før sammenslåing

Arbeidsflyt med pull requests:

\`\`\`
1. Lag en branch lokalt
2. Gjør endringer og commit
3. Push branchen til GitHub: git push -u origin min-branch
4. Opprett en Pull Request på GitHub
5. Teammedlemmer gjennomgår og kommenterer
6. Du gjør eventuelle endringer basert på tilbakemeldinger
7. PR-en godkjennes og merges inn i main
\`\`\`

### GitHub for skoleprosjekter

GitHub er et utmerket verktøy for skoleprosjekter:

- Læreren kan se kodehistorikken og hvem som har bidratt med hva
- Gruppemedlemmer kan jobbe på forskjellige deler samtidig
- Issues kan brukes som oppgaveliste (Kanban-lignende)
- README-filen fungerer som prosjektdokumentasjon
- GitHub Pages kan brukes til å publisere nettsider gratis`,
    },
    {
      id: 'it-1-8-4-tip-gitignore',
      type: 'tip',
      title: '.gitignore – filer Git skal ignorere',
      content: `Ikke alle filer skal spores av Git. Opprett en \`.gitignore\`-fil i prosjektmappen for å fortelle Git hvilke filer og mapper den skal ignorere:

\`\`\`
# .gitignore

# Node.js avhengigheter (installeres med npm install)
node_modules/

# Miljøvariabler (passord, API-nøkler)
.env

# OS-genererte filer
.DS_Store
Thumbs.db

# IDE-innstillinger
.vscode/
.idea/

# Kompilerte filer
dist/
build/
\`\`\`

Aldri legg passord, API-nøkler eller personlige innstillinger i Git. Bruk \`.env\`-filer for hemmeligheter og legg dem i \`.gitignore\`.`,
    },
    {
      id: 'it-1-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it1-8-4-ex-1',
        number: '8.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva gjør kommandoen `git commit -m "Legg til kontaktside"`?',
        options: [
          { id: 'a', text: 'Laster opp filer til GitHub', isCorrect: false, feedback: 'For å laste opp til GitHub bruker du git push. Commit lagrer lokalt.' },
          { id: 'b', text: 'Lagrer endringene fra staging area som et nytt punkt i historikken med meldingen "Legg til kontaktside"', isCorrect: true },
          { id: 'c', text: 'Sletter kontaktsiden fra prosjektet', isCorrect: false, feedback: 'Commit lagrer endringer, den sletter ingenting.' },
          { id: 'd', text: 'Oppretter en ny mappe kalt kontaktside', isCorrect: false, feedback: 'Git commit lagrer endringer i versjonskontroll, den oppretter ikke mapper.' },
        ],
        solution: 'git commit lagrer alle endringer som er i staging area (lagt til med git add) som et nytt lagringspunkt i prosjekthistorikken. Flagget -m lar deg skrive en commit-melding direkte i kommandoen. Meldingen "Legg til kontaktside" beskriver hva som ble endret i denne committen.',
      },
    },
    {
      id: 'it-1-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it1-8-4-ex-2',
        number: '8.4.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en branch i Git?',
        options: [
          { id: 'a', text: 'En sikkerhetskopi av prosjektet på en ekstern server', isCorrect: false, feedback: 'Det er et remote repository. En branch er en parallell utviklingslinje.' },
          { id: 'b', text: 'En parallell utviklingslinje der du kan jobbe isolert fra hovedkoden', isCorrect: true },
          { id: 'c', text: 'En mappe inne i prosjektet for å organisere filer', isCorrect: false, feedback: 'En branch er ikke en mappe, men en separat versjon av hele prosjektet.' },
          { id: 'd', text: 'Et verktøy for å slette gammel kode', isCorrect: false, feedback: 'Brancher brukes til å utvikle ny funksjonalitet, ikke til å slette kode.' },
        ],
        solution: 'En branch (gren) er en uavhengig utviklingslinje i Git som lar deg jobbe med endringer uten å påvirke hovedkoden (main). Du kan lage en branch for en ny funksjon, gjøre alle endringene der, og slå den sammen (merge) med main når funksjonen er ferdig og testet.',
      },
    },
    {
      id: 'it-1-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it1-8-4-ex-3',
        number: '8.4.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er riktig rekkefølge for å lagre endringer i Git og laste dem opp til GitHub?',
        options: [
          { id: 'a', text: 'git commit → git add → git push', isCorrect: false, feedback: 'Du må legge til filer i staging (git add) før du kan committe dem.' },
          { id: 'b', text: 'git push → git commit → git add', isCorrect: false, feedback: 'Rekkefølgen er omvendt – du må legge til og committe før du pusher.' },
          { id: 'c', text: 'git add → git commit → git push', isCorrect: true },
          { id: 'd', text: 'git add → git push → git commit', isCorrect: false, feedback: 'Du må committe endringene lokalt før du pusher til GitHub.' },
        ],
        solution: 'Riktig rekkefølge er: 1) git add (legger endrede filer i staging area), 2) git commit (lagrer endringene som et punkt i lokal historikk), 3) git push (laster opp commits til GitHub). Du kan tenke på det som: velg hva som skal med (add), lagre lokalt (commit), del med andre (push).',
      },
    },
    {
      id: 'it-1-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it1-8-4-ex-4',
        number: '8.4.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er en pull request på GitHub?',
        options: [
          { id: 'a', text: 'En kommando for å laste ned kode fra GitHub', isCorrect: false, feedback: 'Det er git pull. En pull request er en samarbeidsfunksjon på GitHub.' },
          { id: 'b', text: 'En forespørsel om å slå sammen endringer fra én branch til en annen, med mulighet for kodegjennomgang', isCorrect: true },
          { id: 'c', text: 'En melding til GitHub om å slette et repository', isCorrect: false, feedback: 'Pull requests handler om å slå sammen kode, ikke slette repositorier.' },
          { id: 'd', text: 'En automatisk test som kjøres på koden', isCorrect: false, feedback: 'Automatiske tester kan kjøres som del av en PR, men PR-en selv er en sammenslåingsforespørsel.' },
        ],
        solution: 'En pull request (PR) er en funksjon på GitHub der du ber om å slå sammen endringer fra en branch inn i en annen (vanligvis inn i main). PR-en viser alle endringene, lar teammedlemmer kommentere og diskutere koden, og krever godkjenning før sammenslåing. Dette sikrer kodekvalitet gjennom kodegjennomgang (code review).',
      },
    },
    {
      id: 'it-1-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it1-8-4-ex-5',
        number: '8.4.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv steg for steg hva du ville gjort for å: (1) opprette et nytt Git-repository for et skoleprosjekt, (2) legge til en index.html-fil, (3) committe den, og (4) laste den opp til et nytt repository på GitHub. Skriv de nødvendige Git-kommandoene.',
        solution: `Steg for steg:

1. Opprett prosjektmappe og initialiser Git:
   mkdir mitt-skoleprosjekt
   cd mitt-skoleprosjekt
   git init

2. Opprett index.html (med en teksteditor) og legg den til i staging:
   git add index.html

3. Commit filen med en beskrivende melding:
   git commit -m "Legg til forsiden med grunnleggende HTML-struktur"

4. Koble til et nytt repository på GitHub og push:
   (Først oppretter du et nytt repository på github.com)
   git remote add origin https://github.com/brukernavn/mitt-skoleprosjekt.git
   git branch -M main
   git push -u origin main

Etter dette er prosjektet tilgjengelig både lokalt og på GitHub. Fremtidige endringer kan pushes med bare git push.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-1-8-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it1-8-4-ex-6',
        number: '8.4.6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva skjer når du prøver å merge to brancher som har endret de samme linjene i en fil?',
        options: [
          { id: 'a', text: 'Git sletter begge endringene og beholder originalen', isCorrect: false, feedback: 'Git sletter ikke endringer automatisk – den ber deg om hjelp.' },
          { id: 'b', text: 'Git velger alltid endringene fra main-branchen', isCorrect: false, feedback: 'Git foretrekker ikke noen branch automatisk.' },
          { id: 'c', text: 'Det oppstår en merge-konflikt som må løses manuelt av utvikleren', isCorrect: true },
          { id: 'd', text: 'Git oppretter automatisk en tredje versjon som kombinerer begge', isCorrect: false, feedback: 'Git kan ikke automatisk avgjøre hvordan motstridende endringer skal kombineres.' },
        ],
        solution: 'Når to brancher har endret de samme linjene i en fil, oppstår en merge-konflikt. Git markerer de motstridende seksjonene i filen med spesielle markeringer (<<<<<<, ======, >>>>>>) og ber utvikleren velge hvilken versjon som skal beholdes, eller skrive en ny kombinert versjon. Etter at konflikten er løst, må endringene committes.',
      },
    },
    {
      id: 'it-1-8-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it1-8-4-ex-7',
        number: '8.4.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar forskjellen mellom Git og GitHub. Beskriv deretter en komplett arbeidsflyt der et team på tre elever samarbeider om et nettside-prosjekt ved hjelp av Git og GitHub, inkludert brancher og pull requests.',
        solution: `Git vs. GitHub:
Git er et versjonskontrollsystem (programvare) som kjører lokalt på datamaskinen og sporer endringer i filer. GitHub er en nettbasert plattform som bruker Git og legger til samarbeidsverktøy som pull requests, issues og prosjektstyring.

Arbeidsflyt for teamet:

1. Elev A oppretter et repository på GitHub og deler tilgang med B og C.

2. Alle kloner repositoryet: git clone [URL]

3. Teamet avtaler en arbeidsfordeling:
   - Elev A: Forside (index.html)
   - Elev B: Om-oss-side (om.html)
   - Elev C: Kontaktside med skjema (kontakt.html)

4. Hver elev lager sin egen branch:
   - Elev A: git checkout -b forside
   - Elev B: git checkout -b om-oss
   - Elev C: git checkout -b kontaktside

5. Hver elev jobber i sin branch, committer jevnlig og pusher til GitHub.

6. Når en funksjon er ferdig, oppretter eleven en Pull Request på GitHub.

7. De andre elevene gjennomgår koden, gir tilbakemelding og godkjenner.

8. PR-en merges inn i main.

9. De andre elevene henter oppdateringene med git pull.

Denne arbeidsflyten sikrer at alle kan jobbe parallelt uten å forstyrre hverandre, og at koden gjennomgås før den slås sammen med hovedkoden.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.5: Dokumentasjon og presentasjon
// ============================================================================

export const CHAPTER_IT_1_8_5: TextbookChapter = {
  id: 'it-1-8-5',
  courseId: 'it-1',
  chapterNumber: '8.5',
  title: 'Dokumentasjon og presentasjon',
  description: 'Lær å skrive god dokumentasjon med README-filer og kodekommentarer, forstå teknisk dokumentasjon, og presenter prosjektet ditt på en overbevisende måte.',
  estimatedMinutes: 55,
  prevChapter: 'it-1-8-4',
  nextChapter: undefined,
  competenceGoals: [
    'dokumentere utviklingsprosessen og det ferdige produktet',
    'skrive README-filer og kodekommentarer som gjør prosjektet forståelig for andre',
    'presentere et IT-prosjekt muntlig og visuelt på en strukturert måte',
  ],
  keyTerms: [
    { term: 'README', definition: 'En README-fil (vanligvis README.md) er det første dokumentet folk ser når de besøker et prosjekt på GitHub. Den inneholder en oversikt over prosjektet, instruksjoner for installasjon og bruk, og annen viktig informasjon. En god README gjør det mulig for andre (og fremtidens deg selv) å forstå hva prosjektet gjør og hvordan det brukes, uten å måtte lese all koden. README-filer skrives vanligvis i Markdown-format.' },
    { term: 'Markdown', definition: 'Et lettvekts markeringsspråk som brukes til å formatere tekst. Markdown bruker enkle symboler for å lage overskrifter (#), fet tekst (**tekst**), kursiv (*tekst*), lister (- element), lenker ([tekst](url)) og kodeblokker (```kode```). Markdown brukes i README-filer på GitHub, i dokumentasjon, og mange andre steder. Det er designet for å være lesbart både som ren tekst og som formatert output.' },
    { term: 'Kodekommentar', definition: 'Tekst i kildekoden som er ment for mennesker, ikke for datamaskinen. Kommentarer ignoreres av programmet, men hjelper utviklere med å forstå hva koden gjør og hvorfor den er skrevet slik. I Python brukes # for enkeltlinjekommentarer, i JavaScript/HTML brukes // og /* */. Gode kommentarer forklarer hensikten bak koden, ikke hva koden gjør linje for linje.' },
    { term: 'Teknisk dokumentasjon', definition: 'Skriftlig materiale som beskriver et systems arkitektur, funksjonalitet, API-er, konfigurasjon og vedlikeholdsprosedyrer. Teknisk dokumentasjon er rettet mot utviklere og teknisk personell og gir den informasjonen de trenger for å forstå, bruke, vedlikeholde og videreutvikle systemet. God teknisk dokumentasjon inkluderer diagrammer, kodeeksempler og steg-for-steg-instruksjoner.' },
    { term: 'API-dokumentasjon', definition: 'Dokumentasjon som beskriver hvordan et programmeringsgrensesnitt (API) brukes. Den spesifiserer tilgjengelige endepunkter, parametere, returverdier og eksempler. God API-dokumentasjon gjør det mulig for andre utviklere å bruke API-et uten å lese kildekoden. Verktøy som Swagger/OpenAPI kan generere interaktiv API-dokumentasjon automatisk.' },
    { term: 'Prosessdokumentasjon', definition: 'Dokumentasjon som beskriver hvordan et prosjekt ble gjennomført – fra planlegging og design til implementering og testing. I skolesammenheng inkluderer prosessdokumentasjon prosjektplan, brukerhistorier, wireframes, beslutninger som ble tatt underveis, utfordringer som oppstod og hvordan de ble løst. Prosessdokumentasjon viser at du forstår utviklingsprosessen, ikke bare det ferdige produktet.' },
  ],
  content: [
    {
      id: 'it-1-8-5-intro',
      type: 'text',
      content: `## Dokumentasjon og presentasjon

Kode som ingen forstår er verdiløs. Du kan ha skrevet den mest elegante løsningen i verden, men hvis ingen – inkludert deg selv om seks måneder – kan forstå hva den gjør og hvordan den brukes, har du et problem.

**Dokumentasjon** er det som gjør kode og prosjekter forståelige. Det handler om å skrive ned det som ikke er åpenbart fra koden selv: hva prosjektet gjør, hvorfor det er laget slik, hvordan man installerer og bruker det, og hva man bør vite for å kunne jobbe videre med det.

**Presentasjon** er like viktig – du må kunne formidle arbeidet ditt til andre. Enten det er læreren din, medelever, eller en fremtidig arbeidsgiver, må du kunne forklare hva du har laget, hvilke valg du tok og hvorfor.

I dette kapittelet lærer du å skrive gode README-filer, kommentere kode på en nyttig måte, lage teknisk dokumentasjon, og presentere IT-prosjekter på en overbevisende måte.`,
    },
    {
      id: 'it-1-8-5-def-dokumentasjon',
      type: 'definition',
      title: 'Dokumentasjon',
      content: `**Dokumentasjon** er all skriftlig informasjon som beskriver, forklarer og støtter et programvareprosjekt. Dokumentasjon kan deles inn i flere typer: brukerdokumentasjon (for sluttbrukere), teknisk dokumentasjon (for utviklere), prosessdokumentasjon (beskriver utviklingsprosessen) og API-dokumentasjon (beskriver programmeringsgrensesnitt). God dokumentasjon gjør det mulig for andre å forstå, bruke og videreutvikle prosjektet uten å måtte kontakte den opprinnelige utvikleren. Regelen er: «Kode forteller datamaskinen hva den skal gjøre. Dokumentasjon forteller mennesker hva koden gjør.»`,
    },
    {
      id: 'it-1-8-5-text-readme',
      type: 'text',
      title: 'README-filen',
      content: `## README – prosjektets visittkort

README-filen er det aller viktigste dokumentet i prosjektet ditt. Det er det første folk ser på GitHub, og det bør gi all informasjon som trengs for å forstå og bruke prosjektet.

### Hva bør en god README inneholde?

1. **Prosjektnavn og kort beskrivelse** – Hva gjør prosjektet? Én til to setninger.

2. **Skjermbilde eller demo** – Vis hvordan det ser ut. Et bilde sier mer enn tusen ord.

3. **Installasjon** – Steg-for-steg-instruksjoner for hvordan man setter opp prosjektet lokalt.

4. **Bruk** – Hvordan bruker man prosjektet? Eksempler er gull verdt.

5. **Teknologier** – Hvilke språk, rammeverk og verktøy er brukt?

6. **Bidragsytere** – Hvem har jobbet med prosjektet?

7. **Lisens** – Hvilke rettigheter har andre til å bruke koden?

For skoleprosjekter kan du også inkludere:
- Læreplankompetansemål prosjektet dekker
- Prosessdokumentasjon (lenke til prosjektlogg)
- Refleksjon over hva du har lært`,
    },
    {
      id: 'it-1-8-5-example-readme',
      type: 'example',
      title: 'Eksempel på en god README',
      content: `Her er et eksempel på en README for et skoleprosjekt:

\`\`\`markdown
# Vaermelding - Enkel Vaerapp

En nettside som viser vaervarselet for norske byer ved hjelp av
data fra Meterologisk institutt sitt API (Yr).

## Skjermbilde

(Her ville du lagt inn et bilde av nettsiden)

## Teknologier

- HTML5
- CSS3 (Flexbox og Grid)
- JavaScript (Fetch API)
- Yr API (api.met.no)

## Installasjon

1. Klon repositoryet:
   git clone https://github.com/brukernavn/vaermelding.git

2. Apne index.html i nettleseren

Ingen ekstra installasjon er nodvendig – prosjektet bruker
kun HTML, CSS og vanilla JavaScript.

## Bruk

1. Skriv inn navnet pa en norsk by i sokfeltet
2. Trykk "Sok" eller Enter
3. Vaervarselet for de neste 3 dagene vises

## Bidragsytere

- Ola Nordmann – Design og CSS
- Kari Nordmann – JavaScript og API-integrasjon

## Kompetansemal (IT 1)

- Utvikle nettsider ved bruk av HTML og CSS
- Bruke et API til a hente og presentere data
- Planlegge og dokumentere utviklingsprosessen

## Lisens

MIT License
\`\`\`

Legg merke til at README-en er kort, tydelig og gir all nødvendig informasjon for å forstå og bruke prosjektet.`,
    },
    {
      id: 'it-1-8-5-text-markdown',
      type: 'text',
      title: 'Markdown – formateringsspråket',
      content: `## Markdown – enkelt tekstformat

README-filer og mye annen dokumentasjon skrives i **Markdown** – et lettvekts formateringsspråk som er designet for å være lesbart både som ren tekst og som formatert output.

### De viktigste Markdown-elementene

\`\`\`markdown
# Overskrift nivå 1
## Overskrift nivå 2
### Overskrift nivå 3

**Fet tekst** og *kursiv tekst*

- Punktliste
- Element to
- Element tre

1. Nummerert liste
2. Element to
3. Element tre

[Lenketekst](https://www.eksempel.no)

![Bildetekst](bilde.jpg)

\\\`Inline kode\\\`

\\\`\\\`\\\`python
# Kodeblokk med syntaksutheving
print("Hei verden!")
\\\`\\\`\\\`

> Sitat eller merknad

| Kolonne 1 | Kolonne 2 |
|-----------|-----------|
| Data 1    | Data 2    |
\`\`\`

Markdown brukes overalt: GitHub (README, issues, pull requests), Notion, Slack, Discord, Jupyter Notebooks og mange andre steder. Det er et essensielt verktøy for alle som jobber med teknologi.`,
    },
    {
      id: 'it-1-8-5-text-kodekommentarer',
      type: 'text',
      title: 'Kodekommentarer',
      content: `## Kodekommentarer – forklar hvorfor, ikke hva

Kodekommentarer er tekst i kildekoden som ignoreres av datamaskinen men hjelper mennesker med å forstå koden. Men ikke alle kommentarer er nyttige – dårlige kommentarer kan faktisk gjøre koden vanskeligere å forstå.

### Hvordan skrive kommentarer i ulike språk

\`\`\`python
# Python: Enkeltlinje-kommentar med #
x = 10  # Kommentar på slutten av en linje
\`\`\`

\`\`\`javascript
// JavaScript: Enkeltlinje-kommentar
/* JavaScript: Flerlinjekommentar
   som kan gå over
   flere linjer */
\`\`\`

\`\`\`html
<!-- HTML-kommentar -->
\`\`\`

\`\`\`css
/* CSS-kommentar */
\`\`\`

### Dårlige kommentarer

\`\`\`python
# Dårlig: Sier hva koden gjør (åpenbart fra koden selv)
x = x + 1  # Øker x med 1
navn = input("Navn: ")  # Henter input fra brukeren
liste.sort()  # Sorterer listen
\`\`\`

### Gode kommentarer

\`\`\`python
# Bra: Forklarer HVORFOR, ikke hva
x = x + 1  # Kompenserer for 0-indeksering i API-responsen

# Bra: Forklarer en ikke-opplagt beslutning
# Bruker bubblesort i stedet for quicksort fordi listen
# alltid er under 20 elementer, og bubblesort er enklere å feilsøke
sorter_manuelt(liste)

# Bra: Varsler om en begrensning
# OBS: Fungerer bare for norske postnumre (4 siffer)
def valider_postnummer(postnummer):
    return len(postnummer) == 4 and postnummer.isdigit()
\`\`\`

### Tommelfingerregler for kommentarer

1. **Forklar hvorfor, ikke hva** – Koden viser hva som gjøres; kommentaren forklarer hvorfor
2. **Oppdater kommentarer når koden endres** – Utdaterte kommentarer er verre enn ingen kommentarer
3. **Bruk beskrivende variabelnavn** i stedet for å kommentere dårlige navn
4. **Kommenter kompleks logikk** – Algoritmer, formler og ikke-opplagt kode
5. **Marker midlertidige løsninger** med TODO-kommentarer: \`# TODO: Bytt til databaselagring\``,
    },
    {
      id: 'it-1-8-5-text-teknisk-dokumentasjon',
      type: 'text',
      title: 'Teknisk dokumentasjon',
      content: `## Teknisk dokumentasjon for utviklere

Teknisk dokumentasjon går dypere enn README-filen og er rettet mot utviklere som skal jobbe med eller vedlikeholde koden. I et skoleprosjekt viser teknisk dokumentasjon læreren at du forstår systemet du har bygd.

### Hva bør teknisk dokumentasjon dekke?

**Systemarkitektur:** Hvordan er prosjektet organisert? Hvilke filer gjør hva? Hvordan henger delene sammen?

\`\`\`
prosjekt/
├── index.html          # Forside
├── css/
│   └── style.css       # Alle stiler
├── js/
│   ├── main.js         # Hovedlogikk og event handlers
│   ├── api.js          # API-kall til Yr
│   └── utils.js        # Hjelpefunksjoner
├── images/             # Bilder og ikoner
└── README.md           # Prosjektdokumentasjon
\`\`\`

**Dataflyt:** Hvordan flyter data gjennom systemet? Fra brukerens input til visning av resultat.

**API-bruk:** Hvilke eksterne tjenester bruker prosjektet? Hva slags data hentes og sendes?

**Kjente begrensninger:** Hva fungerer ikke ennå? Hvilke kjente feil finnes? Hva ville du forbedret med mer tid?

**Installasjonskrav:** Hvilke verktøy og versjoner trengs for å kjøre prosjektet?`,
    },
    {
      id: 'it-1-8-5-text-prosessdokumentasjon',
      type: 'text',
      title: 'Prosessdokumentasjon',
      content: `## Prosessdokumentasjon – vis at du forstår prosessen

I IT 1 vurderes du ikke bare på det ferdige produktet, men også på prosessen. Prosessdokumentasjon viser hvordan du planla, jobbet og reflekterte underveis.

### Elementer i prosessdokumentasjon

**Prosjektplan:**
- Hva er målet med prosjektet?
- Hvilke brukerhistorier definerte vi?
- Hva er MVP-en?
- Tidsplan med milepæler

**Designprosess:**
- Wireframes og skisser (tidlige versjoner)
- Designvalg og begrunnelser (hvorfor valgte vi disse fargene, denne layouten?)
- Prototyper og brukertesting (hva lærte vi?)

**Utviklingslogg:**
- Hva ble gjort i hver sprint/uke?
- Hvilke utfordringer oppstod?
- Hvordan ble de løst?
- Hva tok lengre tid enn forventet?

**Refleksjon:**
- Hva fungerte bra i prosjektet?
- Hva ville du gjort annerledes?
- Hva har du lært?
- Hvordan fungerte samarbeidet (hvis gruppeprosjekt)?

### Tips for prosessdokumentasjon

- Skriv litt underveis i stedet for alt på slutten
- Ta skjermbilder av wireframes, prototyper og viktige steg
- Vær ærlig om utfordringer – det viser refleksjonsevne
- Knytt arbeidet til kompetansemål fra læreplanen`,
    },
    {
      id: 'it-1-8-5-text-presentasjon',
      type: 'text',
      title: 'Presentasjonsteknikk',
      content: `## Presentere IT-prosjekter

Å kunne presentere arbeidet ditt er en viktig ferdighet. I IT 1 vil du sannsynligvis presentere prosjekter for klassen eller læreren. Her er noen prinsipper for gode presentasjoner.

### Struktur for en prosjektpresentasjon

1. **Introduksjon (1-2 min):** Hva er problemet? Hva har du laget? For hvem?
2. **Demo (3-5 min):** Vis produktet i aksjon. La det snakke for seg selv.
3. **Teknisk gjennomgang (2-3 min):** Hvilke teknologier brukte du? Hvordan er koden organisert? Vis et interessant kodeutdrag.
4. **Prosess (2-3 min):** Hvordan planla du prosjektet? Hvilke utfordringer møtte du? Hva lærte du?
5. **Avslutning (1 min):** Hva ville du gjort med mer tid? Spørsmål?

### Gode presentasjonstips

**Vis, ikke fortell:** I stedet for å si «Nettsiden er brukervennlig», vis det ved å demonstrere at det er enkelt å utføre en oppgave.

**Hold det enkelt:** Ikke vis all koden – velg ut de mest interessante eller utfordrende delene. Publikum trenger ikke se 500 linjer HTML.

**Forbered demo:** Test alt på forhånd. Ha en backup-plan hvis noe ikke fungerer (skjermbilder, video av demoen).

**Snakk om utfordringer:** De mest interessante delene av et prosjekt er ofte problemene du løste. Ikke vær redd for å dele hva som var vanskelig.

**Tilpass for publikum:** Læreren vil se at du forstår konseptene. Medelever vil se noe kult. Tilpass språkbruken etter hvem du snakker til.

**Unngå å lese fra lysbilder:** Lysbildene er visuell støtte, ikke manuskriptet ditt. Bruk stikkord og bilder, ikke lange tekstblokker.`,
    },
    {
      id: 'it-1-8-5-example-presentasjon',
      type: 'example',
      title: 'Eksempel på lysbildestruktur',
      content: `Her er en foreslått lysbildestruktur for en 10-minutters prosjektpresentasjon:

**Lysbilde 1: Tittel**
Prosjektnavn, navn på teammedlemmer, dato

**Lysbilde 2: Problemet**
Hva er problemet vi løser? Hvem er brukerne?
(Bruk et bilde eller scenario som illustrerer problemet)

**Lysbilde 3: Løsningen**
Kort beskrivelse + skjermbilde av det ferdige produktet

**Lysbilde 4-5: Live demo**
Vis produktet i aksjon (nettleseren)

**Lysbilde 6: Teknologi**
Teknologier brukt (HTML, CSS, JS, API-er)
Enkel arkitekturoversikt

**Lysbilde 7: Kode-høydepunkt**
Vis et interessant kodeutdrag med forklaring
(Velg noe du er stolt av eller som var utfordrende)

**Lysbilde 8: Prosessen**
Wireframes -> Prototype -> Ferdig produkt
Kanban-tavle eller sprint-oversikt

**Lysbilde 9: Utfordringer og lærdom**
Hva var vanskelig? Hva lærte du?

**Lysbilde 10: Veien videre**
Hva ville du gjort med mer tid?
Takk for oppmerksomheten / spørsmål?`,
    },
    {
      id: 'it-1-8-5-note-portefolje',
      type: 'note',
      title: 'Bygg din portefølje på GitHub',
      content: `GitHub-profilen din kan fungere som en portefølje som viser hva du kan. Tips for en god GitHub-profil:

- **Profil-README:** Opprett et repository med samme navn som brukernavnet ditt og legg til en README.md som presenterer deg selv
- **Pin beste prosjekter:** Velg 4-6 prosjekter du er stolt av og pin dem på profilsiden
- **Skriv gode README-filer:** Hvert prosjekt bør ha en README som forklarer hva det gjør
- **Commit jevnlig:** Et grønt bidragsdiagram viser at du er aktiv
- **Bruk beskrivende commit-meldinger:** Folk kan se historikken din

En god GitHub-profil kan være verdifull når du søker lærlingplass, jobb eller studieplass innen IT.`,
    },
    {
      id: 'it-1-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'it1-8-5-ex-1',
        number: '8.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedformålet med en README-fil i et prosjekt?',
        options: [
          { id: 'a', text: 'Å lagre passord og API-nøkler for prosjektet', isCorrect: false, feedback: 'Passord og nøkler skal ALDRI lagres i README eller andre filer i Git. Bruk .env-filer.' },
          { id: 'b', text: 'Å gi en oversikt over prosjektet slik at andre kan forstå og bruke det', isCorrect: true },
          { id: 'c', text: 'Å erstatte kommentarer i koden', isCorrect: false, feedback: 'README og kodekommentarer har ulike funksjoner – README gir oversikt, kommentarer forklarer kode.' },
          { id: 'd', text: 'Å lagre en sikkerhetskopi av all koden', isCorrect: false, feedback: 'README inneholder dokumentasjon, ikke en kopi av koden.' },
        ],
        solution: 'README-filen er prosjektets visittkort. Den gir en oversikt over hva prosjektet gjør, hvordan man installerer og bruker det, hvilke teknologier som er brukt, og hvem som har bidratt. En god README gjør det mulig for andre å forstå prosjektet uten å måtte lese all koden.',
      },
    },
    {
      id: 'it-1-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'it1-8-5-ex-2',
        number: '8.5.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av følgende er en god kodekommentar?',
        options: [
          { id: 'a', text: '# Setter x til 10\nx = 10', isCorrect: false, feedback: 'Denne kommentaren sier bare det som allerede er åpenbart fra koden.' },
          { id: 'b', text: '# Bruker 10 som grenseverdi fordi API-et returnerer maks 10 resultater per side\nx = 10', isCorrect: true },
          { id: 'c', text: '# endre denne verdien\nx = 10', isCorrect: false, feedback: 'Kommentaren er vag og forklarer ikke hvorfor eller til hva.' },
          { id: 'd', text: '# TODO\nx = 10', isCorrect: false, feedback: 'Kommentaren er ufullstendig og gir ingen nyttig informasjon.' },
        ],
        solution: 'En god kodekommentar forklarer HVORFOR koden er slik den er, ikke HVA den gjør. Alternativ B er god fordi den forklarer at tallet 10 er valgt på grunn av en begrensning i API-et – noe som ikke er åpenbart fra koden alene. De andre kommentarene gir ingen nyttig tilleggsinformasjon.',
      },
    },
    {
      id: 'it-1-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'it1-8-5-ex-3',
        number: '8.5.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er Markdown, og hvor brukes det?',
        options: [
          { id: 'a', text: 'Et programmeringsspråk for å lage nettsider, brukt i stedet for HTML', isCorrect: false, feedback: 'Markdown er ikke et programmeringsspråk og erstatter ikke HTML for nettsider.' },
          { id: 'b', text: 'Et lettvekts formateringsspråk som brukes til å skrive dokumentasjon, README-filer og andre tekster med enkel formatering', isCorrect: true },
          { id: 'c', text: 'Et designverktøy for å lage wireframes', isCorrect: false, feedback: 'Markdown er et tekstformat, ikke et designverktøy.' },
          { id: 'd', text: 'En JavaScript-modul for å animere nettsider', isCorrect: false, feedback: 'Markdown har ingenting med JavaScript eller animasjoner å gjøre.' },
        ],
        solution: 'Markdown er et lettvekts markeringsspråk som bruker enkle symboler for formatering: # for overskrifter, ** for fet tekst, - for lister, osv. Det brukes på GitHub (README, issues, pull requests), i dokumentasjonsverktøy, i Notion, Slack og mange andre steder. Det er designet for å være lesbart både som ren tekst og som formatert output.',
      },
    },
    {
      id: 'it-1-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'it1-8-5-ex-4',
        number: '8.5.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva bør du fokusere på når du presenterer et IT-prosjekt for klassen?',
        options: [
          { id: 'a', text: 'Les opp all koden linje for linje slik at alle forstår hvert steg', isCorrect: false, feedback: 'Ingen vil forstå all koden muntlig. Velg ut de mest interessante delene.' },
          { id: 'b', text: 'Vis bare det ferdige produktet og ignorer prosessen', isCorrect: false, feedback: 'Prosessen er en viktig del av vurderingen i IT 1.' },
          { id: 'c', text: 'Vis produktet i aksjon, forklar teknologivalgene og del utfordringer du møtte underveis', isCorrect: true },
          { id: 'd', text: 'Fokuser kun på det visuelle designet og ignorer koden', isCorrect: false, feedback: 'Teknisk forståelse er en viktig del av IT 1-presentasjoner.' },
        ],
        solution: 'En god prosjektpresentasjon kombinerer demonstrasjon av produktet (vis det i aksjon), teknisk forklaring (hvilke teknologier og løsninger du valgte) og prosessrefleksjon (utfordringer, lærdommer). Du bør velge ut de mest interessante kodedelene i stedet for å vise alt, og være ærlig om hva som var vanskelig.',
      },
    },
    {
      id: 'it-1-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'it1-8-5-ex-5',
        number: '8.5.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv en komplett README.md i Markdown-format for et tenkt IT 1-prosjekt: en nettside for en fiktiv kafé. README-en skal inneholde minst: prosjektnavn, beskrivelse, teknologier brukt, installasjonsinstruksjoner og bidragsytere.',
        solution: `# Kafé Solskin - Nettside

En responsiv nettside for Kafé Solskin som viser meny, åpningstider, beliggenhet og kontaktinformasjon.

## Beskrivelse

Denne nettsiden er laget som et skoleprosjekt i IT 1. Den presenterer en fiktiv kafé med fokus på brukervennlig design, responsivt layout og god tilgjengelighet.

## Teknologier

- HTML5 (semantiske elementer)
- CSS3 (Flexbox, Grid, Media Queries)
- JavaScript (interaktiv meny, skjemavalidering)
- Google Maps API (kart over beliggenhet)

## Installasjon

1. Klon repositoryet: git clone https://github.com/brukernavn/kafe-solskin.git
2. Åpne index.html i en nettleser

Ingen ekstra avhengigheter er nødvendig.

## Sider

- Forside – Velkommen og høydepunkter
- Meny – Drikke og matmeny med priser
- Om oss – Historien bak kaféen
- Kontakt – Kontaktskjema og kart

## Bidragsytere

- Ola Nordmann – Design, HTML og CSS
- Kari Nordmann – JavaScript og API-integrasjon

## Lisens

MIT License`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'it-1-8-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'it1-8-5-ex-6',
        number: '8.5.6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Hva er forskjellen mellom brukerdokumentasjon, teknisk dokumentasjon og prosessdokumentasjon?',
        options: [
          { id: 'a', text: 'Det er tre ulike navn for det samme – README-filen', isCorrect: false, feedback: 'De tre typene har ulike formål og målgrupper.' },
          { id: 'b', text: 'Brukerdokumentasjon forklarer bruken, teknisk dokumentasjon forklarer koden, og prosessdokumentasjon forklarer utviklingsprosessen', isCorrect: true },
          { id: 'c', text: 'Brukerdokumentasjon er for lærere, teknisk er for elever, og prosess er for sensorer', isCorrect: false, feedback: 'Typene defineres av innholdet og formålet, ikke av hvem som leser dem.' },
          { id: 'd', text: 'Bare teknisk dokumentasjon er relevant for IT 1-prosjekter', isCorrect: false, feedback: 'Alle tre typene er relevante i IT 1, spesielt prosessdokumentasjon.' },
        ],
        solution: 'De tre dokumentasjonstypene har ulike formål: Brukerdokumentasjon forklarer hvordan man bruker produktet (for sluttbrukere). Teknisk dokumentasjon beskriver systemets arkitektur, kode og API-er (for utviklere). Prosessdokumentasjon beskriver hvordan prosjektet ble gjennomført – planlegging, designvalg, utfordringer og refleksjoner (for å vise utviklingsprosessen, spesielt viktig i skolesammenheng).',
      },
    },
    {
      id: 'it-1-8-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'it1-8-5-ex-7',
        number: '8.5.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en disposisjon for en 10-minutters presentasjon av et IT 1-prosjekt (en selvvalgt nettside eller app). For hvert lysbilde, skriv hva det bør inneholde og omtrent hvor lang tid du vil bruke. Inkluder også en kort prosessdokumentasjon der du beskriver minst to utfordringer du kunne ha møtt og hvordan de ville blitt løst.',
        solution: `Disposisjon for 10-minutters presentasjon av en Quizapp for skolen:

Lysbilde 1 (30 sek): Tittel
- "SkoleQuiz" – En quizapp for VG2-elever
- Navnene på teammedlemmene

Lysbilde 2 (1 min): Problemet
- Elever trenger en morsom måte å repetere pensum på
- Eksisterende løsninger er for generelle eller kjedelige

Lysbilde 3 (1 min): Løsningen
- Skjermbilde av appen, kort beskrivelse
- "En quizapp der lærere kan lage spørsmål og elever kan konkurrere"

Lysbilde 4-5 (3 min): Live demo
- Vis opprettelse av en quiz
- Vis gjennomføring fra elevens perspektiv
- Vis resultatsiden

Lysbilde 6 (1 min): Teknologi
- HTML, CSS, JavaScript, localStorage for datalagring
- Filstruktur-diagram

Lysbilde 7 (1 min): Kode-høydepunkt
- Vis funksjonen som sjekker svar og beregner poeng

Lysbilde 8 (1 min): Prosessen
- Fra wireframes til ferdig produkt (bilder)
- Kanban-tavle i Trello

Lysbilde 9 (1 min): Utfordringer
- Utfordring 1: Lagring av quizdata – først prøvde vi JSON-filer, men byttet til localStorage fordi det ikke krevde server
- Utfordring 2: Responsivt design for mobil – knappene var for små, løst med CSS media queries og min-height

Lysbilde 10 (30 sek): Avslutning
- Med mer tid: Brukerkontoer, statistikk, multiplayer
- Spørsmål fra publikum`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT – alle kapitler i seksjon 8
// ============================================================================

export const IT_1_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IT_1_8_1, CHAPTER_IT_1_8_2, CHAPTER_IT_1_8_3, CHAPTER_IT_1_8_4, CHAPTER_IT_1_8_5,
];
