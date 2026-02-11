/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Økonomi og ledelse (VG2) - Del 3: Ledelse
 *
 * Kapittel 3.1–3.5
 *
 * LK20-kompetansemål:
 * - gjøre rede for ulike ledelsesstiler og vurdere deres styrker og svakheter
 * - anvende situasjonsbestemt ledelse i ulike situasjoner
 * - reflektere over ledelse i norsk arbeidsliv
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Hva er ledelse?
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_3_1: TextbookChapter = {
  id: 'okonomi-ledelse-3-1',
  courseId: 'okonomi-ledelse',
  chapterNumber: '3.1',
  title: 'Hva er ledelse?',
  description: 'I dette kapittelet lærer du hva ledelse innebærer, forskjellen mellom ledelse (leadership) og styring (management), og hvilke funksjoner en leder må ivareta.',
  estimatedMinutes: 20,
  competenceGoals: ['gjøre rede for ulike ledelsesstiler og vurdere deres styrker og svakheter'],
  keyTerms: [
    { term: 'Ledelse', definition: 'Å påvirke, motivere og inspirere mennesker til å jobbe mot felles mål' },
    { term: 'Styring', definition: 'Å planlegge, organisere, kontrollere og administrere virksomhetens ressurser og prosesser' },
    { term: 'Leadership', definition: 'Den mellommenneskelige, inspirerende siden av ledelse – å vise retning og motivere' },
    { term: 'Management', definition: 'Den administrative, systemorienterte siden av ledelse – å sørge for orden og kontroll' },
    { term: 'Lederrollen', definition: 'Summen av forventninger og oppgaver knyttet til det å være leder' },
  ],
  content: [
    {
      id: 'ol-3-1-intro',
      type: 'text',
      content: `## Hva er ledelse?

Alle organisasjoner trenger ledelse. Enten det dreier seg om en liten kafé, et fotballag eller en stor industribedrift, må noen ta ansvar for å sette retning, koordinere innsatsen og motivere de som jobber der. Men hva betyr det egentlig å lede?

I dette kapittelet skal du lære:
- Hva begrepet ledelse innebærer
- Forskjellen mellom ledelse og styring (leadership vs. management)
- Hvilke funksjoner en leder må ivareta
- Hvorfor begge sidene av lederrollen er nødvendige`,
    },
    {
      id: 'ol-3-1-def-1',
      type: 'definition',
      title: 'Ledelse',
      content: `**Ledelse** handler om å påvirke, motivere og inspirere mennesker til å jobbe mot felles mål. En leder skaper engasjement, viser retning og bygger tillit slik at medarbeiderne yter sitt beste. Ledelse dreier seg i bunn og grunn om relasjoner mellom mennesker.`,
    },
    {
      id: 'ol-3-1-text-1',
      type: 'text',
      content: `### Ledelse vs. styring

I faglitteraturen skiller man ofte mellom to sider av det å lede: **leadership** (ledelse) og **management** (styring). Begge er nødvendige, men de handler om ulike ting.

**Leadership (ledelse) handler om:**
- Å inspirere og motivere medarbeiderne
- Å skape en visjon og vise retning
- Å bygge relasjoner og tillit
- Å håndtere endring og utvikle organisasjonen
- Å se hver enkelt medarbeider og tilpasse seg

**Management (styring) handler om:**
- Å planlegge og organisere arbeidet
- Å lage budsjetter og følge opp resultater
- Å sette opp systemer og rutiner
- Å kontrollere at ting gjøres riktig
- Å administrere ressurser effektivt

En mye brukt formulering sier det slik: *«Management handler om å gjøre tingene riktig. Leadership handler om å gjøre de riktige tingene.»*`,
    },
    {
      id: 'ol-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Ledelse og styring i en restaurantkjede',
      problem: 'Vis hvordan en daglig leder i en restaurant ivaretar både leadership og management.',
      solution: `**Leadership (ledelse):**
- Inspirer kokkene til å eksperimentere med nye retter og ta stolthet i maten de lager
- Skaper en visjon: «Vi skal bli byens beste lunsjsted innen to år»
- Har ukentlige samtaler med ansatte for å høre hvordan de har det
- Motiverer de ansatte ved å anerkjenne god innsats og feire suksesser
- Går foran som godt eksempel ved å vise entusiasme og serviceinnstilling

**Management (styring):**
- Setter opp vaktlister og sørger for at det er nok folk på jobb
- Følger opp kostnadene og sørger for at matbudsjettet holdes
- Bestiller råvarer og holder oversikt over lagerbeholdningen
- Kontrollerer at hygieneforskriftene følges
- Rapporterer omsetning og resultater til eier

Begge sidene er nødvendige. Uten leadership mangler det retning og motivasjon. Uten management blir det kaos i den daglige driften.`,
    },
    {
      id: 'ol-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-3-1-ex-1',
        number: '3.1.1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste forskjellen mellom ledelse (leadership) og styring (management)?',
        options: [
          { id: 'a', text: 'Ledelse handler om å inspirere mennesker, mens styring handler om å administrere systemer og prosesser', isCorrect: true },
          { id: 'b', text: 'Ledelse er for store bedrifter, styring er for små bedrifter', isCorrect: false },
          { id: 'c', text: 'Ledelse handler om økonomi, styring handler om personale', isCorrect: false },
          { id: 'd', text: 'Det er ingen forskjell, begrepene betyr det samme', isCorrect: false },
        ],
        solution: 'Leadership (ledelse) handler om den mellommenneskelige siden – å inspirere, motivere og gi retning. Management (styring) handler om den administrative siden – å planlegge, organisere og kontrollere. Begge er nødvendige i enhver organisasjon.',
      },
    },
    {
      id: 'ol-3-1-def-2',
      type: 'definition',
      title: 'Lederens funksjoner',
      content: `En leders hovedfunksjoner kan oppsummeres i fire områder: **planlegge** (sette mål og lage planer), **organisere** (fordele oppgaver og ressurser), **lede** (motivere og veilede medarbeidere) og **kontrollere** (følge opp resultater og korrigere avvik). Disse fire funksjonene kalles ofte ledelseshjulet.`,
    },
    {
      id: 'ol-3-1-text-2',
      type: 'text',
      content: `### Lederens funksjoner – ledelseshjulet

Uansett om du leder en liten gruppe eller en stor avdeling, må du ivareta fire grunnleggende funksjoner:

**1. Planlegge**
- Sette mål for hva som skal oppnås
- Lage strategier og handlingsplaner
- Vurdere muligheter og risikoer
- Bestemme hvordan ressursene skal brukes

**2. Organisere**
- Fordele oppgaver mellom medarbeiderne
- Sørge for at alle vet hva de skal gjøre
- Bygge team og strukturer
- Sikre at nødvendige ressurser er tilgjengelige

**3. Lede**
- Motivere og inspirere medarbeiderne
- Kommunisere tydelig og lytte aktivt
- Veilede og utvikle kompetanse
- Håndtere konflikter og utfordringer

**4. Kontrollere**
- Måle resultater opp mot mål
- Identifisere avvik og korrigere kursen
- Gi tilbakemelding på innsats og resultater
- Evaluere og lære av erfaringer

Disse fire funksjonene henger sammen og utgjør en kontinuerlig prosess – man planlegger, organiserer, leder gjennomføringen og kontrollerer resultater, før man planlegger på nytt basert på det man har lært.`,
    },
    {
      id: 'ol-3-1-example-2',
      type: 'example',
      title: 'Eksempel: Ledelseshjulet i praksis',
      problem: 'En prosjektleder skal gjennomføre et arrangement for 200 deltakere. Vis hvordan hun bruker ledelseshjulets fire funksjoner.',
      solution: `**Planlegge:**
- Setter mål: «Arrangementet skal ha minst 200 påmeldte og 90 % tilfredshet»
- Lager tidsplan med milepæler: Sted booket innen 1. mars, program klart innen 1. april
- Lager budsjett på 150 000 kr

**Organisere:**
- Fordeler oppgaver: Kari tar booking av lokale, Erik tar markedsføring, Lise tar mat og drikke
- Setter opp uke ntlige prosjektmøter
- Skaffer nødvendig utstyr og materiell

**Lede:**
- Motiverer teamet med felles kickoff der visjonen presenteres
- Har jevnlige en-til-en-samtaler for å høre hvordan det går
- Gir ros når folk leverer godt arbeid

**Kontrollere:**
- Følger opp antall påmeldte hver uke
- Sjekker at budsjettet holdes
- Etter arrangementet: gjennomfører evaluering med tilbakemeldinger fra deltakere og team`,
    },
    {
      id: 'ol-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-3-1-ex-2',
        number: '3.1.2',
        type: 'multiple-choice',
        task: 'Hvilke fire funksjoner utgjør ledelseshjulet?',
        options: [
          { id: 'a', text: 'Planlegge, organisere, lede og kontrollere', isCorrect: true },
          { id: 'b', text: 'Rekruttere, trene, betale og evaluere', isCorrect: false },
          { id: 'c', text: 'Produsere, markedsføre, selge og levere', isCorrect: false },
          { id: 'd', text: 'Analysere, designe, implementere og teste', isCorrect: false },
        ],
        solution: 'Ledelseshjulet består av fire funksjoner: planlegge, organisere, lede og kontrollere. Disse fire funksjonene henger sammen i en kontinuerlig prosess som alle ledere må ivareta.',
      },
    },
    {
      id: 'ol-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-3-1-ex-3',
        number: '3.1.3',
        type: 'classic',
        task: 'Tenk deg at du er leder for en gruppe på fem elever som skal gjennomføre et skoleprosjekt. Gi konkrete eksempler på hvordan du ville ivaretatt alle fire funksjoner i ledelseshjulet.',
        hints: ['Tenk gjennom hele prosjektet fra start til slutt – hva må planlegges, hvem gjør hva, hvordan motiverer du, og hvordan sjekker du at dere er i rute?'],
        solution: 'Planlegge: Sette mål for prosjektet, lage tidsplan med frister, fordele arbeidet i deler. Organisere: Gi hver person ansvar for sin del, avtale møtetidspunkter, skaffe nødvendige materialer. Lede: Motivere gruppa ved å vise entusiasme, lytte til alles ideer, hjelpe den som sitter fast, løse uenigheter. Kontrollere: Sjekke fremgang på felles møter, lese gjennom bidragene, gi tilbakemelding, justere planen om noen ligger etter.',
      },
    },
    {
      id: 'ol-3-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Ledelse** handler om å påvirke, motivere og inspirere mennesker til å jobbe mot felles mål
- **Leadership** (ledelse) fokuserer på mennesker, inspirasjon og retning
- **Management** (styring) fokuserer på systemer, planer og kontroll
- Begge sidene er nødvendige for at en organisasjon skal fungere godt
- **Ledelseshjulet** beskriver fire funksjoner: planlegge, organisere, lede og kontrollere

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Ledelse (leadership) | Å inspirere, motivere og gi retning |
| Styring (management) | Å planlegge, organisere, administrere og kontrollere |
| Ledelseshjulet | Fire funksjoner: planlegge, organisere, lede, kontrollere |
| Lederrollen | Summen av forventninger og oppgaver knyttet til det å være leder |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-3-1-ex-4',
        number: '3.1.4',
        type: 'classic',
        task: 'Drøft om det er mulig å være en god leder uten å ha management-kompetanse. Gi argumenter for og mot, og bruk eksempler.',
        solution: 'For: En karismatisk leder kan inspirere og motivere selv uten god administrativ kompetanse. Steve Jobs var kjent for visjon og inspirasjon, mens Tim Cook tok seg av mye av den administrative styringen. Mot: Uten management-kompetanse risikerer lederen kaos – budsjetter sprekker, frister glipper, og rutiner mangler. En leder som bare inspirerer men ikke organiserer, vil tape troverdighet over tid. Konklusjon: De beste lederne mestrer begge deler, eller omgir seg med folk som utfyller dem. En leder med sterk leadership men svak management bør ha en god administrasjonssjef ved sin side.',
      },
    },
    {
      id: 'ol-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-3-1-ex-5',
        number: '3.1.5',
        type: 'multiple-choice',
        task: 'Hva menes med utsagnet «Management handler om å gjøre tingene riktig, leadership handler om å gjøre de riktige tingene»?',
        options: [
          { id: 'a', text: 'Management sikrer at prosessene fungerer effektivt, mens leadership sikrer at organisasjonen jobber med riktige prioriteringer', isCorrect: true },
          { id: 'b', text: 'Management er viktigere enn leadership', isCorrect: false },
          { id: 'c', text: 'Leadership handler om moral og etikk', isCorrect: false },
          { id: 'd', text: 'Management handler om å unngå feil', isCorrect: false },
        ],
        solution: 'Utsagnet betyr at management sikrer at arbeidet gjøres korrekt og effektivt (riktig prosess), mens leadership sikrer at organisasjonen bruker ressursene på det som faktisk er viktig (riktig retning). Begge deler er nødvendige – det hjelper ikke å gjøre ting perfekt hvis det er feil ting man gjør.',
      },
    },
    {
      id: 'ol-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-3-1-ex-6',
        number: '3.1.6',
        type: 'classic',
        task: 'Velg en leder du kjenner til (fra jobb, idrett, skole eller media). Analyser hvordan denne lederen balanserer leadership og management. Gi konkrete eksempler.',
        hints: ['Tenk på hva lederen gjør for å motivere folk (leadership) og hva han/hun gjør for å holde orden (management).'],
        solution: 'Svaret bør inneholde: 1) Hvem lederen er og i hvilken sammenheng. 2) Konkrete eksempler på leadership: Hvordan lederen inspirerer, motiverer, bygger relasjoner, viser retning. 3) Konkrete eksempler på management: Hvordan lederen planlegger, organiserer, setter opp systemer, følger opp resultater. 4) Vurdering av balansen: Er lederen sterkest på leadership eller management? Hva er konsekvensene av dette?',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.2: Ledelsesstiler
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_3_2: TextbookChapter = {
  id: 'okonomi-ledelse-3-2',
  courseId: 'okonomi-ledelse',
  chapterNumber: '3.2',
  title: 'Ledelsesstiler',
  description: 'Du lærer om de klassiske ledelsesstilene autoritær, demokratisk og laissez-faire, samt nyere tilnærminger som transformasjonsledelse og relasjonsledelse. Du vurderer styrker og svakheter ved hver stil.',
  estimatedMinutes: 24,
  competenceGoals: ['gjøre rede for ulike ledelsesstiler og vurdere deres styrker og svakheter'],
  keyTerms: [
    { term: 'Autoritær ledelse', definition: 'Lederen tar beslutninger alene og gir klare instrukser uten å involvere medarbeiderne' },
    { term: 'Demokratisk ledelse', definition: 'Lederen involverer medarbeiderne i beslutninger og oppmuntrer til medvirkning' },
    { term: 'Laissez-faire-ledelse', definition: 'Lederen gir medarbeiderne stor frihet og blander seg lite inn i det daglige arbeidet' },
    { term: 'Transformasjonsledelse', definition: 'Lederen inspirerer til endring og utvikling ved å appellere til medarbeidernes indre motivasjon' },
    { term: 'Relasjonsledelse', definition: 'Lederen fokuserer på å bygge sterke relasjoner, tillit og samarbeid med medarbeiderne' },
  ],
  content: [
    {
      id: 'ol-3-2-intro',
      type: 'text',
      content: `## Ledelsesstiler

Ulike ledere leder på ulike måter. Noen bestemmer alt selv, andre lar medarbeiderne ta egne avgjørelser, og mange ligger et sted midt imellom. Måten en leder velger å utøve sitt lederskap på kalles ledelsesstil.

I dette kapittelet skal du lære:
- De tre klassiske ledelsesstilene: autoritær, demokratisk og laissez-faire
- Nyere tilnærminger: transformasjonsledelse og relasjonsledelse
- Styrker og svakheter ved de ulike stilene
- Når de ulike stilene passer best`,
    },
    {
      id: 'ol-3-2-def-1',
      type: 'definition',
      title: 'Ledelsesstil',
      content: `En **ledelsesstil** er det mønsteret av atferd en leder viser overfor sine medarbeidere. Ledelsesstilen beskriver hvordan lederen tar beslutninger, kommuniserer, delegerer oppgaver og forholder seg til sine ansatte. Den påvirkes av lederens personlighet, verdier, erfaring og situasjonen.`,
    },
    {
      id: 'ol-3-2-text-1',
      type: 'text',
      content: `### De tre klassiske ledelsesstilene

Den tyske psykologen Kurt Lewin identifiserte på 1930-tallet tre grunnleggende ledelsesstiler som fortsatt er sentrale i ledelseslitteraturen:

**1. Autoritær ledelse**
Lederen tar alle beslutninger selv og forventer at medarbeiderne følger instruksene uten diskusjon. Kommunikasjonen går hovedsakelig én vei: fra leder til medarbeider.

| Styrker | Svakheter |
|---------|-----------|
| Raske beslutninger | Lav medarbeidertilfredshet |
| Tydelig ansvarsfordeling | Lite kreativitet og initiativ |
| Fungerer godt i kriser | Avhengig av lederens kompetanse |
| Effektivt for rutineoppgaver | Høy turnover blant ansatte |

**2. Demokratisk ledelse**
Lederen involverer medarbeiderne i beslutninger og oppmuntrer til diskusjon og medvirkning. Lederen tar fortsatt den endelige avgjørelsen, men lytter til innspill.

| Styrker | Svakheter |
|---------|-----------|
| Høy medarbeidertilfredshet | Tidkrevende beslutningsprosesser |
| Fremmer kreativitet og initiativ | Vanskelig i krisesituasjoner |
| Bedre kvalitet på beslutninger | Kan gi uklare ansvarsforhold |
| Lav turnover og høy lojalitet | Fungerer dårlig med uerfarne ansatte |

**3. Laissez-faire-ledelse**
Lederen gir medarbeiderne stor frihet til å ta egne beslutninger og blander seg lite inn i det daglige arbeidet. Lederen er tilgjengelig ved behov, men styrer ikke aktivt.

| Styrker | Svakheter |
|---------|-----------|
| Stor autonomi for dyktige ansatte | Kan gi kaos og manglende retning |
| Fremmer selvstendighet | Usikre medarbeidere føler seg overlatt |
| Passer for eksperter og kreative | Vanskelig å holde oversikt |
| Fleksibelt for den enkelte | Risiko for ulikhet og konflikter |`,
    },
    {
      id: 'ol-3-2-example-1',
      type: 'example',
      title: 'Eksempel: De tre ledelsesstilene i praksis',
      problem: 'En avdeling skal bestemme hvordan de skal organisere sommerferien. Vis hvordan de tre ledelsesstilene ville håndtert dette.',
      solution: `**Autoritær leder:**
«Jeg har satt opp ferieplanen. Kari har ferie i juni, Per i juli og Lise i august. Planen er endelig.»
Lederen bestemmer selv basert på sine vurderinger av hva som er best for avdelingen.

**Demokratisk leder:**
«Vi må fordele sommerferien. Jeg har satt opp noen rammer: minst to personer må være på jobb til enhver tid. Kan dere komme med ønsker, så finner vi en løsning som fungerer for alle?»
Lederen setter rammene, men lar medarbeiderne påvirke fordelingen.

**Laissez-faire-leder:**
«Dere ordner feriefordelingen dere imellom. Gi meg beskjed når dere har bestemt.»
Lederen overlater hele prosessen til medarbeiderne.

I dette tilfellet vil den demokratiske tilnærmingen trolig fungere best – den gir medarbeiderne medbestemmelse innenfor tydelige rammer.`,
    },
    {
      id: 'ol-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-3-2-ex-1',
        number: '3.2.1',
        type: 'multiple-choice',
        task: 'Hvilken ledelsesstil kjennetegnes ved at lederen tar alle beslutninger selv og forventer at medarbeiderne følger instruksene?',
        options: [
          { id: 'a', text: 'Demokratisk ledelse', isCorrect: false },
          { id: 'b', text: 'Autoritær ledelse', isCorrect: true },
          { id: 'c', text: 'Laissez-faire-ledelse', isCorrect: false },
          { id: 'd', text: 'Transformasjonsledelse', isCorrect: false },
        ],
        solution: 'Autoritær ledelse kjennetegnes ved at lederen tar alle beslutninger alene og gir klare instrukser. Kommunikasjonen går hovedsakelig én vei, fra leder til medarbeider. Stilen kan være effektiv i krisesituasjoner, men gir ofte lav medarbeidertilfredshet.',
      },
    },
    {
      id: 'ol-3-2-def-2',
      type: 'definition',
      title: 'Transformasjonsledelse',
      content: `**Transformasjonsledelse** er en ledelsesstil der lederen inspirerer medarbeiderne til å se ut over egne interesser og jobbe for et felles, høyere mål. Transformasjonslederen bruker visjon, karisma og intellektuell stimulering for å skape endring og utvikling i organisasjonen.`,
    },
    {
      id: 'ol-3-2-text-2',
      type: 'text',
      content: `### Transformasjonsledelse

Transformasjonsledelse ble utviklet av James MacGregor Burns og senere videreutviklet av Bernard Bass. Denne ledelsesstilen bygger på fire grunnpilarer:

**De fire I-ene:**
1. **Idealisert innflytelse (Idealized Influence):** Lederen er et forbilde som medarbeiderne ser opp til og stoler på
2. **Inspirerende motivasjon (Inspirational Motivation):** Lederen kommuniserer en engasjerende visjon som gir arbeidet mening
3. **Intellektuell stimulering (Intellectual Stimulation):** Lederen utfordrer medarbeiderne til å tenke nytt og stille spørsmål ved etablerte sannheter
4. **Individuell omtanke (Individualized Consideration):** Lederen ser hver enkelt medarbeider og tilpasser sin ledelse etter individuelle behov

### Relasjonsledelse

**Relasjonsledelse** legger vekt på å bygge sterke, tillitsfulle relasjoner mellom leder og medarbeider. Lederen investerer tid i å bli kjent med medarbeiderne, forstå deres behov og skape et trygt arbeidsmiljø.

**Kjennetegn ved relasjonsledelse:**
- Åpen og ærlig kommunikasjon
- Aktiv lytting og empati
- Anerkjennelse og positiv tilbakemelding
- Fokus på tillit og psykologisk trygghet
- Konfliktløsning gjennom dialog`,
    },
    {
      id: 'ol-3-2-example-2',
      type: 'example',
      title: 'Eksempel: Transformasjonsledelse',
      problem: 'Hvordan kan en rektor bruke transformasjonsledelse for å forbedre en skole som sliter med svake resultater og lav motivasjon?',
      solution: `**Idealisert innflytelse:**
Rektoren viser selv stor arbeidsinnsats og entusiasme. Hun deltar i undervisningen, er synlig i gangene og lever etter skolens verdier. Lærerne ser at hun mener det hun sier.

**Inspirerende motivasjon:**
Hun formulerer en visjon: «Om tre år skal vi være en skole der alle elever opplever mestring og alle lærere er stolte av jobben sin.» Hun forteller historier om andre skoler som har snudd negative trender.

**Intellektuell stimulering:**
Hun utfordrer lærerne til å tenke nytt om undervisningsmetoder: «Hva om vi prøver prosjektbasert læring i stedet for tradisjonelle timer? Hva kan vi lære av skolene i Finland?»

**Individuell omtanke:**
Hun har jevnlige samtaler med hver lærer om deres faglige utvikling, hva de trenger for å trives, og hvilke mål de har. Hun tilpasser støtten etter den enkeltes behov.

Resultatet kan bli at lærerne går fra å se jobben som en plikt til å se den som et meningsfullt oppdrag.`,
    },
    {
      id: 'ol-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-3-2-ex-2',
        number: '3.2.2',
        type: 'multiple-choice',
        task: 'Hva er de fire «I-ene» i transformasjonsledelse?',
        options: [
          { id: 'a', text: 'Idealisert innflytelse, inspirerende motivasjon, intellektuell stimulering og individuell omtanke', isCorrect: true },
          { id: 'b', text: 'Informasjon, instruksjon, inspeksjon og integrasjon', isCorrect: false },
          { id: 'c', text: 'Innovasjon, inkludering, initiativ og integritet', isCorrect: false },
          { id: 'd', text: 'Involvering, implementering, investering og internalisering', isCorrect: false },
        ],
        solution: 'De fire I-ene er idealisert innflytelse (forbilde), inspirerende motivasjon (visjon), intellektuell stimulering (utfordre til nytenkning) og individuell omtanke (se den enkelte). Sammen beskriver de kjernen i transformasjonsledelse.',
      },
    },
    {
      id: 'ol-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-3-2-ex-3',
        number: '3.2.3',
        type: 'classic',
        task: 'Sammenlign autoritær og demokratisk ledelsesstil. Gi to situasjoner der autoritær ledelse passer best, og to situasjoner der demokratisk ledelse passer best. Begrunn valgene dine.',
        hints: ['Tenk på faktorer som tidspress, kompetanse hos medarbeiderne, og type oppgave.'],
        solution: 'Autoritær ledelse passer best: 1) I krisesituasjoner der det haster, for eksempel brann, ulykke eller akutt økonomisk krise – her trengs raske beslutninger uten langvarig diskusjon. 2) Når medarbeiderne er uerfarne og trenger tydelig veiledning, for eksempel nyansatte i sin første uke. Demokratisk ledelse passer best: 1) Når man trenger kreative løsninger, for eksempel strategiutvikling eller produktutvikling – flere perspektiver gir bedre løsninger. 2) Når medarbeiderne er kompetente og erfarne, for eksempel et team av spesialister – de har mye kunnskap å bidra med og blir demotiverte av å bli overkjørt.',
      },
    },
    {
      id: 'ol-3-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- En **ledelsesstil** er mønsteret av atferd en leder viser overfor sine medarbeidere
- **Autoritær ledelse:** Lederen bestemmer, gir instrukser – effektivt men lite motiverende
- **Demokratisk ledelse:** Medarbeiderne involveres – motiverende men tidkrevende
- **Laissez-faire:** Stor frihet – passer for eksperter men kan gi kaos
- **Transformasjonsledelse:** Inspirerer til endring gjennom visjon og de fire I-ene
- **Relasjonsledelse:** Fokus på tillit, relasjoner og individuell oppfølging

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Autoritær ledelse | Lederen tar alle beslutninger alene |
| Demokratisk ledelse | Medarbeiderne involveres i beslutninger |
| Laissez-faire | Stor frihet, lite styring |
| Transformasjonsledelse | Inspirerer til endring gjennom visjon og karisma |
| Relasjonsledelse | Fokus på tillit og relasjoner |
| De fire I-ene | Idealisert innflytelse, inspirerende motivasjon, intellektuell stimulering, individuell omtanke |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-3-2-ex-4',
        number: '3.2.4',
        type: 'classic',
        task: 'Drøft fordeler og ulemper ved laissez-faire-ledelse. I hvilke bransjer tror du denne stilen fungerer best, og hvorfor?',
        solution: 'Fordeler: 1) Dyktige medarbeidere får stor frihet til å bruke sin kompetanse. 2) Fremmer kreativitet og selvstendighet. 3) Kan gi høy jobbtilfredshet for de som liker autonomi. Ulemper: 1) Usikre medarbeidere kan føle seg overlatt til seg selv. 2) Kan gi manglende retning og koordinering. 3) Vanskelig å oppdage problemer tidlig. Bransjer: Passer godt i kreative bransjer som reklame, design og forskning, der medarbeiderne er høyt kompetente og trenger frihet for å yte sitt beste. Passer også godt for erfarne konsulenter og akademikere. Passer dårlig i bransjer med klare prosedyrer og sikkerhetskrav, som helsevesen eller bygg og anlegg.',
      },
    },
    {
      id: 'ol-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-3-2-ex-5',
        number: '3.2.5',
        type: 'multiple-choice',
        task: 'Hva kjennetegner relasjonsledelse?',
        options: [
          { id: 'a', text: 'Fokus på systemer, rutiner og kontroll', isCorrect: false },
          { id: 'b', text: 'Å gi medarbeiderne full frihet uten innblanding', isCorrect: false },
          { id: 'c', text: 'Å bygge sterke, tillitsfulle relasjoner med medarbeiderne', isCorrect: true },
          { id: 'd', text: 'Å ta raske beslutninger uten å involvere andre', isCorrect: false },
        ],
        solution: 'Relasjonsledelse kjennetegnes av fokus på å bygge sterke, tillitsfulle relasjoner mellom leder og medarbeider. Lederen bruker åpen kommunikasjon, aktiv lytting, empati og anerkjennelse for å skape et trygt arbeidsmiljø.',
      },
    },
    {
      id: 'ol-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-3-2-ex-6',
        number: '3.2.6',
        type: 'classic',
        task: 'Forklar hva transformasjonsledelse er, og gi et eksempel fra sport, politikk eller næringsliv der en leder har brukt denne stilen. Hvilke resultater oppnådde lederen?',
        hints: ['Tenk på ledere som har inspirert folk til å yte mer enn de trodde var mulig.'],
        solution: 'Transformasjonsledelse handler om å inspirere medarbeidere til å se ut over egne interesser og jobbe for et felles, høyere mål. Eksempel: Jürgen Klopp som trener for Liverpool FC. Idealisert innflytelse: Han var et tydelig forbilde med sin lidenskap og energi. Inspirerende motivasjon: Han formulerte en visjon om å gjøre Liverpool til verdens beste fotballag. Intellektuell stimulering: Han innførte nye treningsmetoder og taktikker. Individuell omtanke: Han var kjent for å bry seg genuint om hver spillers trivsel og utvikling. Resultat: Liverpool vant Champions League og Premier League under hans ledelse, og spillerne beskrev ham som transformerende for deres karrierer.',
      },
    },
    {
      id: 'ol-3-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'ol-3-2-ex-7',
        number: '3.2.7',
        type: 'classic',
        task: 'En leder sier: «Jeg bruker alltid demokratisk ledelse fordi det er den beste stilen.» Er du enig i dette utsagnet? Begrunn svaret ditt med referanse til ulike situasjoner.',
        solution: 'Utsagnet er for kategorisk. Demokratisk ledelse har mange fordeler, men ingen ledelsesstil er den beste i alle situasjoner. I en krise (brann, alvorlig ulykke, akutt økonomisk krise) trengs raske avgjørelser – autoritær ledelse er mer effektivt. Når medarbeiderne er uerfarne og trenger tydelig veiledning, fungerer demokratisk ledelse dårlig fordi de mangler grunnlag for å bidra til beslutninger. I kreative team med høy kompetanse kan laissez-faire gi bedre resultater enn demokratisk ledelse. Den beste lederen tilpasser stilen etter situasjonen – dette kalles situasjonsbestemt ledelse, som vi skal lære om i neste kapittel.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.3: Situasjonsbestemt ledelse
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_3_3: TextbookChapter = {
  id: 'okonomi-ledelse-3-3',
  courseId: 'okonomi-ledelse',
  chapterNumber: '3.3',
  title: 'Situasjonsbestemt ledelse',
  description: 'Du lærer om Hersey og Blanchards modell for situasjonsbestemt ledelse, de fire modenhetsnivåene, og hvordan ledere kan tilpasse stilen sin etter medarbeidernes kompetanse og motivasjon.',
  estimatedMinutes: 22,
  competenceGoals: ['anvende situasjonsbestemt ledelse i ulike situasjoner'],
  keyTerms: [
    { term: 'Situasjonsbestemt ledelse', definition: 'En tilnærming der lederen tilpasser sin ledelsesstil etter situasjonen og medarbeidernes modenhetsnivå' },
    { term: 'Modenhetsnivå', definition: 'Medarbeiderens kombinasjon av kompetanse (evner og erfaring) og motivasjon (vilje og selvtillit) for en bestemt oppgave' },
    { term: 'Instruerende stil', definition: 'Mye styring, lite støtte – lederen gir klare instrukser og følger opp tett' },
    { term: 'Coachende stil', definition: 'Mye styring, mye støtte – lederen forklarer, veileder og oppmuntrer' },
    { term: 'Deltakende stil', definition: 'Lite styring, mye støtte – lederen involverer medarbeideren i beslutninger' },
    { term: 'Delegerende stil', definition: 'Lite styring, lite støtte – lederen overlater ansvar og beslutningsmyndighet til medarbeideren' },
  ],
  content: [
    {
      id: 'ol-3-3-intro',
      type: 'text',
      content: `## Situasjonsbestemt ledelse

I forrige kapittel lærte du om ulike ledelsesstiler. Men hvilken stil er egentlig den beste? Svaret er: det kommer an på situasjonen. En god leder bruker ikke alltid samme stil – hun tilpasser seg etter hvem hun leder, hva oppgaven krever, og hvor erfarne medarbeiderne er.

I dette kapittelet skal du lære:
- Hva situasjonsbestemt ledelse innebærer
- Hersey og Blanchards modell med fire ledelsesstiler
- De fire modenhetsnivåene hos medarbeidere
- Hvordan du velger riktig ledelsesstil for riktig situasjon`,
    },
    {
      id: 'ol-3-3-def-1',
      type: 'definition',
      title: 'Situasjonsbestemt ledelse',
      content: `**Situasjonsbestemt ledelse** er en tilnærming utviklet av Paul Hersey og Ken Blanchard. Modellen sier at det ikke finnes én beste ledelsesstil – den riktige stilen avhenger av medarbeiderens **modenhetsnivå** for den aktuelle oppgaven. Modenhetsnivået bestemmes av to faktorer: **kompetanse** (kan medarbeideren gjøre oppgaven?) og **motivasjon** (vil medarbeideren gjøre oppgaven?).`,
    },
    {
      id: 'ol-3-3-text-1',
      type: 'text',
      content: `### De fire modenhetsnivåene

Hersey og Blanchard deler medarbeidernes modenhet inn i fire nivåer:

**M1 – Lav kompetanse, høy motivasjon**
Medarbeideren er ny og uerfaren, men entusiastisk og villig til å lære. Typisk for nyansatte som er ivrige etter å komme i gang.

**M2 – Noe kompetanse, lav motivasjon**
Medarbeideren har lært litt, men begynner å innse hvor mye hun ikke kan. Motivasjonen synker fordi oppgavene er vanskeligere enn forventet.

**M3 – Høy kompetanse, varierende motivasjon**
Medarbeideren kan jobben godt, men mangler kanskje selvtillit eller motivasjon for å ta fullt ansvar. Kan være usikker på egne evner.

**M4 – Høy kompetanse, høy motivasjon**
Medarbeideren mestrer oppgaven og er motivert til å jobbe selvstendig. Trenger lite oppfølging fra lederen.

**Viktig:** Modenhetsnivået gjelder for en **spesifikk oppgave**, ikke for personen generelt. En erfaren selger (M4 på salg) kan være nybegynner (M1) på et nytt datasystem.`,
    },
    {
      id: 'ol-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Modenhetsnivåer i en butikk',
      problem: 'Plasser disse medarbeiderne på riktig modenhetsnivå for oppgaven «kundebehandling i kassen».',
      solution: `**Emma (M1):** Første dag i butikkjobben. Hun er spent og ivrig, men har aldri jobbet i kasse før. Høy motivasjon, lav kompetanse.

**Tobias (M2):** Har jobbet i to uker. Han kan det grunnleggende, men sliter med returer og reklamasjoner. Begynner å bli frustrert over alle feilene han gjør. Noe kompetanse, lav motivasjon.

**Sara (M3):** Har jobbet i seks måneder og kan kassesystemet godt. Men hun er usikker på om hun takler det alene på travle lørdager og liker best å ha noen å spørre. Høy kompetanse, varierende motivasjon.

**Magnus (M4):** Har jobbet i to år, kan alt, og tar gjerne ansvar for hele avdelingen. Trener opp nyansatte og løser problemer selv. Høy kompetanse, høy motivasjon.`,
    },
    {
      id: 'ol-3-3-ex-mc1',
      type: 'exercise',
      exercise: {
        id: 'ol-3-3-ex-1',
        number: '3.3.1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner en medarbeider på modenhetsnivå M2?',
        options: [
          { id: 'a', text: 'Høy kompetanse og høy motivasjon', isCorrect: false },
          { id: 'b', text: 'Lav kompetanse og høy motivasjon', isCorrect: false },
          { id: 'c', text: 'Noe kompetanse og lav motivasjon', isCorrect: true },
          { id: 'd', text: 'Høy kompetanse og varierende motivasjon', isCorrect: false },
        ],
        solution: 'M2 kjennetegnes av noe kompetanse og lav motivasjon. Medarbeideren har lært noe, men innser at oppgaven er vanskeligere enn forventet. Motivasjonen og selvtilliten synker, og vedkommende trenger ekstra støtte og oppmuntring.',
      },
    },
    {
      id: 'ol-3-3-def-2',
      type: 'definition',
      title: 'De fire lederstilene i situasjonsbestemt ledelse',
      content: `Hersey og Blanchard kobler fire lederstiler til de fire modenhetsnivåene. Stilene varierer langs to akser: **styring** (hvor mye lederen bestemmer og instruerer) og **støtte** (hvor mye lederen lytter, oppmuntrer og involverer). De fire stilene er: **instruerende** (S1), **coachende** (S2), **deltakende** (S3) og **delegerende** (S4).`,
    },
    {
      id: 'ol-3-3-text-2',
      type: 'text',
      content: `### De fire lederstilene

**S1 – Instruerende (for M1: lav kompetanse, høy motivasjon)**
- Mye styring, lite støtte
- Lederen gir klare instrukser: «Gjør dette, på denne måten»
- Tett oppfølging og korrigering
- Passer når medarbeideren trenger å lære det grunnleggende

**S2 – Coachende (for M2: noe kompetanse, lav motivasjon)**
- Mye styring, mye støtte
- Lederen forklarer hvorfor ting gjøres, ikke bare hva
- Oppmuntring og ros for fremgang
- Passer når medarbeideren trenger både veiledning og motivasjon

**S3 – Deltakende (for M3: høy kompetanse, varierende motivasjon)**
- Lite styring, mye støtte
- Lederen involverer medarbeideren i beslutninger
- Fokus på å bygge selvtillit og lytte til innspill
- Passer når medarbeideren kan jobben, men trenger trygghet

**S4 – Delegerende (for M4: høy kompetanse, høy motivasjon)**
- Lite styring, lite støtte
- Lederen gir ansvar og tillit
- Medarbeideren tar egne beslutninger
- Passer når medarbeideren mestrer jobben og er selvgående

### Koblingen mellom modenhet og lederstil

| Modenhetsnivå | Lederstil | Styring | Støtte |
|---------------|-----------|---------|--------|
| M1 | S1 – Instruerende | Høy | Lav |
| M2 | S2 – Coachende | Høy | Høy |
| M3 | S3 – Deltakende | Lav | Høy |
| M4 | S4 – Delegerende | Lav | Lav |`,
    },
    {
      id: 'ol-3-3-example-2',
      type: 'example',
      title: 'Eksempel: Situasjonsbestemt ledelse i butikken',
      problem: 'Bruk eksempelet fra forrige oppgave. Hvilken lederstil bør brukes for hver medarbeider?',
      solution: `**Emma (M1) → S1 Instruerende:**
«Emma, la meg vise deg steg for steg hvordan du registrerer en vare. Først scanner du strekkoden, deretter...» Lederen gir tydelige instrukser og følger opp tett. Emma er motivert, så hun trenger ikke mye oppmuntring – hun trenger å lære.

**Tobias (M2) → S2 Coachende:**
«Tobias, du gjør mye riktig allerede! La meg forklare hvorfor vi gjør returer på denne måten, slik at det gir mening for deg.» Lederen veileder, men gir også ros og oppmuntring for å bygge opp motivasjonen igjen.

**Sara (M3) → S3 Deltakende:**
«Sara, du kan kassesystemet godt. Hva tenker du er den beste måten å håndtere køen på travle lørdager? Jeg stoler på vurderingen din.» Lederen involverer Sara i beslutninger og bygger hennes selvtillit.

**Magnus (M4) → S4 Delegerende:**
«Magnus, du har ansvaret for kassen i dag. Ring meg om det oppstår noe uventet.» Lederen gir Magnus frihet og ansvar. Han trenger verken detaljerte instrukser eller mye oppmuntring.`,
    },
    {
      id: 'ol-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-3-3-ex-2',
        number: '3.3.2',
        type: 'multiple-choice',
        task: 'Hvilken lederstil bør brukes for en medarbeider med høy kompetanse men varierende motivasjon (M3)?',
        options: [
          { id: 'a', text: 'Instruerende – mye styring, lite støtte', isCorrect: false },
          { id: 'b', text: 'Coachende – mye styring, mye støtte', isCorrect: false },
          { id: 'c', text: 'Deltakende – lite styring, mye støtte', isCorrect: true },
          { id: 'd', text: 'Delegerende – lite styring, lite støtte', isCorrect: false },
        ],
        solution: 'For M3 passer den deltakende stilen (S3) med lite styring og mye støtte. Medarbeideren kan jobben, men trenger støtte og involvering for å bygge selvtillit og motivasjon. Lederen bør lytte, involvere og oppmuntre fremfor å instruere.',
      },
    },
    {
      id: 'ol-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-3-3-ex-3',
        number: '3.3.3',
        type: 'classic',
        task: 'Du er teamleder for en gruppe på fire medarbeidere. Beskriv en konkret situasjon der du ville brukt en annen lederstil for den samme medarbeideren på to ulike oppgaver. Forklar hvorfor.',
        hints: ['Husk at modenhetsnivå gjelder for en spesifikk oppgave, ikke for personen generelt.'],
        solution: 'Eksempel: Medarbeideren Nora er erfaren prosjektleder (M4 på prosjektledelse) men har nettopp begynt å lære et nytt rapporteringssystem (M1 på rapportering). For prosjektledelse bruker jeg delegerende stil (S4): «Nora, du tar ansvaret for dette prosjektet. Hold meg oppdatert på milepælene.» For rapporteringssystemet bruker jeg instruerende stil (S1): «La meg vise deg steg for steg hvordan du fyller ut den nye rapporten.» Samme person, ulike oppgaver, ulike modenhetsnivåer, ulike lederstiler. Dette viser kjernen i situasjonsbestemt ledelse.',
      },
    },
    {
      id: 'ol-3-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Situasjonsbestemt ledelse** betyr at lederen tilpasser sin stil etter situasjonen
- Modenhetsnivået avhenger av **kompetanse** (kan) og **motivasjon** (vil) for den aktuelle oppgaven
- Fire modenhetsnivåer: **M1** (lav kompetanse/høy motivasjon) → **M4** (høy kompetanse/høy motivasjon)
- Fire lederstiler: **S1 instruerende**, **S2 coachende**, **S3 deltakende**, **S4 delegerende**
- Modenhetsnivå gjelder for **spesifikke oppgaver**, ikke for personen generelt

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Situasjonsbestemt ledelse | Tilpasse ledelsesstil etter situasjon og modenhetsnivå |
| Modenhetsnivå | Kombinasjon av kompetanse og motivasjon for en oppgave |
| Instruerende (S1) | Mye styring, lite støtte – for M1 |
| Coachende (S2) | Mye styring, mye støtte – for M2 |
| Deltakende (S3) | Lite styring, mye støtte – for M3 |
| Delegerende (S4) | Lite styring, lite støtte – for M4 |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-3-3-ex-4',
        number: '3.3.4',
        type: 'classic',
        task: 'En nyansatt sykepleier starter på avdelingen. Beskriv hvordan lederens stil bør endres etter hvert som sykepleieren utvikler seg gjennom de fire modenhetsnivåene over det første året.',
        solution: 'Uke 1-4 (M1 → S1 instruerende): Sykepleieren er ny og ivrig. Avdelingsleder gir tydelige instrukser om rutiner, systemer og prosedyrer. Tett oppfølging for å sikre at alt gjøres riktig. Måned 2-3 (M2 → S2 coachende): Sykepleieren kan det grunnleggende, men møter vanskelige pasientsituasjoner og føler seg utilstrekkelig. Lederen forklarer bakgrunn og sammenhenger, gir ros for fremgang og er tålmodig. Måned 4-8 (M3 → S3 deltakende): Sykepleieren er faglig dyktig, men usikker i vanskelige beslutninger. Lederen involverer henne i faglige diskusjoner, spør om hennes vurderinger og bygger selvtillit. Måned 9-12 (M4 → S4 delegerende): Sykepleieren mestrer jobben og tar ansvar. Lederen gir henne egne ansvarsområder og stoler på hennes vurderinger.',
      },
    },
    {
      id: 'ol-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-3-3-ex-5',
        number: '3.3.5',
        type: 'multiple-choice',
        task: 'Hvorfor er det viktig at modenhetsnivået vurderes for hver enkelt oppgave og ikke for personen generelt?',
        options: [
          { id: 'a', text: 'Fordi en person kan ha ulik kompetanse og motivasjon for forskjellige oppgaver', isCorrect: true },
          { id: 'b', text: 'Fordi alle medarbeidere er like dårlige i starten', isCorrect: false },
          { id: 'c', text: 'Fordi modellen bare gjelder for nye ansatte', isCorrect: false },
          { id: 'd', text: 'Fordi lederen ikke trenger å kjenne medarbeiderne', isCorrect: false },
        ],
        solution: 'En erfaren medarbeider kan være M4 (mestrer oppgaven) på sine vante arbeidsoppgaver, men M1 (nybegynner) på en helt ny oppgave. Å vurdere modenhet per oppgave sikrer at lederen gir riktig type støtte for den konkrete situasjonen, ikke behandler alle oppgaver likt.',
      },
    },
    {
      id: 'ol-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-3-3-ex-6',
        number: '3.3.6',
        type: 'classic',
        task: 'Drøft styrker og svakheter ved Hersey og Blanchards modell for situasjonsbestemt ledelse. Er modellen nyttig i praksis?',
        hints: ['Tenk på hva modellen forenkler og hva den ikke tar hensyn til.'],
        solution: 'Styrker: 1) Enkel og intuitiv modell som er lett å forstå og bruke. 2) Minner lederen på å tilpasse seg den enkelte medarbeider. 3) Anerkjenner at folk har ulike behov. 4) Nyttig rammeverk for å diskutere ledelse. Svakheter: 1) Forenkler virkeligheten – mennesker er mer komplekse enn fire nivåer. 2) Vanskelig å vurdere modenhetsnivå presist i praksis. 3) Tar ikke nok hensyn til gruppeeffekter og teamdynamikk. 4) Kulturen i organisasjonen kan begrense muligheten til å variere stil. 5) Forskningen gir begrenset støtte for de eksakte koblingene mellom modenhet og stil. Konklusjon: Modellen er et nyttig tankeverktøy som minner ledere om å tilpasse seg, men den bør ikke brukes mekanisk.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.4: Makt og autoritet
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_3_4: TextbookChapter = {
  id: 'okonomi-ledelse-3-4',
  courseId: 'okonomi-ledelse',
  chapterNumber: '3.4',
  title: 'Makt og autoritet',
  description: 'Du lærer om French og Ravens fem maktbaser, forskjellen mellom formell og uformell makt, begrepet legitimitet, og hvordan makt påvirker relasjoner i organisasjoner.',
  estimatedMinutes: 22,
  competenceGoals: ['gjøre rede for ulike ledelsesstiler og vurdere deres styrker og svakheter'],
  keyTerms: [
    { term: 'Makt', definition: 'Evnen til å påvirke andres atferd, holdninger eller beslutninger – også mot deres vilje' },
    { term: 'Autoritet', definition: 'Rett til å utøve makt som er akseptert og anerkjent av dem som ledes' },
    { term: 'Legitimitet', definition: 'At maktutøvelsen oppfattes som rettferdig og akseptabel av de som berøres' },
    { term: 'Formell makt', definition: 'Makt som følger av en persons offisielle stilling og posisjon i organisasjonen' },
    { term: 'Uformell makt', definition: 'Makt som bygger på personlige egenskaper som kunnskap, karisma eller nettverk' },
  ],
  content: [
    {
      id: 'ol-3-4-intro',
      type: 'text',
      content: `## Makt og autoritet

For å utøve ledelse må du ha en form for makt – evnen til å påvirke andres handlinger. Men makt er et tveegget sverd. Brukt klokt kan den motivere og skape retning. Brukt uklokt kan den ødelegge tillit og skape motstand.

I dette kapittelet skal du lære:
- Hva makt og autoritet betyr i en ledelsesammenheng
- French og Ravens fem maktbaser
- Forskjellen mellom formell og uformell makt
- Hva legitimitet innebærer og hvorfor den er viktig`,
    },
    {
      id: 'ol-3-4-def-1',
      type: 'definition',
      title: 'Makt',
      content: `**Makt** er evnen til å påvirke andres atferd, holdninger eller beslutninger. I organisasjoner handler makt om å få andre til å gjøre noe de ellers ikke ville gjort. Makt kan være formell (knyttet til stilling) eller uformell (knyttet til personlige egenskaper). Makt er ikke i seg selv positivt eller negativt – det avhenger av hvordan den brukes.`,
    },
    {
      id: 'ol-3-4-text-1',
      type: 'text',
      content: `### French og Ravens fem maktbaser

Sosialpsykologene John French og Bertram Raven identifiserte i 1959 fem kilder til makt. Disse maktbasene er fortsatt sentrale i organisasjonsfaget:

**1. Belønningsmakt**
Makt basert på evnen til å gi belønninger: lønn, bonus, forfremmelse, ros eller andre fordeler.
- *Eksempel:* Lederen kan gi bonus til de som leverer gode resultater.

**2. Tvangsmakt**
Makt basert på evnen til å straffe eller true med negative konsekvenser: advarsel, degradering, oppsigelse.
- *Eksempel:* Lederen kan gi skriftlig advarsel ved gjentatt fravær.

**3. Legitim makt (stillingsmakt)**
Makt som følger av den formelle posisjonen i organisasjonen. Andre aksepterer at denne personen har rett til å bestemme.
- *Eksempel:* Avdelingslederen har rett til å fordele oppgaver og godkjenne ferie.

**4. Ekspertmakt**
Makt basert på kunnskap, ferdigheter eller erfaring som andre er avhengige av.
- *Eksempel:* IT-spesialisten som er den eneste som kan fikse serverproblemet.

**5. Referansemakt (karismatisk makt)**
Makt basert på andres beundring, respekt eller ønske om å identifisere seg med personen.
- *Eksempel:* En leder som er så respektert at folk frivillig følger henne.`,
    },
    {
      id: 'ol-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Maktbasene i en skole',
      problem: 'Identifiser de fem maktbasene i en skolesetting.',
      solution: `**Belønningsmakt:**
Læreren kan gi gode karakterer, ros og positive tilbakemeldinger. Rektor kan gi lærere attraktive fag og undervisningsopplegg.

**Tvangsmakt:**
Læreren kan gi anmerkninger og kontakte hjemmet. Rektor kan gi advarsler og i ytterste konsekvens endre arbeidsoppgaver.

**Legitim makt:**
Rektor har i kraft av sin stilling rett til å ta beslutninger om skolens drift. Læreren har i kraft av sin rolle rett til å lede undervisningen.

**Ekspertmakt:**
En mattelærer med doktorgrad har ekspertmakt gjennom sin dype fagkunnskap. En lærer med lang erfaring i spesialpedagogikk har ekspertmakt når andre trenger råd.

**Referansemakt:**
En lærer som er genuint engasjert, som bryr seg om elevene og som er en inspirerende formidler, kan ha stor referansemakt. Elevene gjør en ekstra innsats fordi de beundrer læreren.`,
    },
    {
      id: 'ol-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-3-4-ex-1',
        number: '3.4.1',
        type: 'multiple-choice',
        task: 'Hvilken maktbase bygger på andres beundring og ønske om å identifisere seg med lederen?',
        options: [
          { id: 'a', text: 'Belønningsmakt', isCorrect: false },
          { id: 'b', text: 'Ekspertmakt', isCorrect: false },
          { id: 'c', text: 'Legitim makt', isCorrect: false },
          { id: 'd', text: 'Referansemakt', isCorrect: true },
        ],
        solution: 'Referansemakt (karismatisk makt) bygger på andres beundring, respekt og ønske om å identifisere seg med lederen. Folk følger lederen fordi de ser opp til henne, ikke fordi de er tvunget til det eller belønnes for det.',
      },
    },
    {
      id: 'ol-3-4-def-2',
      type: 'definition',
      title: 'Legitimitet',
      content: `**Legitimitet** betyr at maktutøvelsen oppfattes som rettferdig, rimelig og akseptabel av dem som berøres. En leder har legitimitet når medarbeiderne anerkjenner lederens rett til å lede. Legitimitet kan komme fra formell posisjon, men må også bygges gjennom rettferdig og konsistent atferd over tid.`,
    },
    {
      id: 'ol-3-4-text-2',
      type: 'text',
      content: `### Formell og uformell makt

**Formell makt** er knyttet til posisjonen:
- Stillingsfullmakt og beslutningsmyndighet
- Kontroll over budsjetter og ressurser
- Rett til å ansette, forfremme og si opp
- Maktbasene belønningsmakt, tvangsmakt og legitim makt er hovedsakelig formelle

**Uformell makt** er knyttet til personen:
- Kunnskap og erfaring (ekspertmakt)
- Personlighet og karisma (referansemakt)
- Sosialt nettverk og relasjoner
- Tilgang til informasjon

### Hvorfor legitimitet er viktig

En leder kan ha formell makt til å gi ordrer, men uten legitimitet vil medarbeiderne bare gjøre det minimale. Legitimitet skaper frivillig oppslutning.

**Hva bygger legitimitet:**
- Rettferdige og konsekvente beslutninger
- Kompetanse og faglig troverdighet
- Åpen kommunikasjon og ærlighet
- At lederen går foran som godt eksempel
- Involvering av medarbeiderne i beslutninger

**Hva undergraver legitimitet:**
- Forskjellsbehandling og urettferdighet
- Løfter som brytes
- Beslutninger som ikke kan begrunnes
- At lederen ikke lever etter egne krav
- Maktmisbruk og hersketeknikker`,
    },
    {
      id: 'ol-3-4-example-2',
      type: 'example',
      title: 'Eksempel: Når makt mister legitimitet',
      problem: 'En avdelingsleder bruker sin formelle makt på en måte som undergraver legitimiteten. Hva kan skje?',
      solution: `**Situasjon:** Avdelingsleder Ole bruker sin formelle makt til å:
- Gi de beste oppgavene til sine venner, ikke til de mest kompetente
- True med negative konsekvenser (tvangsmakt) i stedet for å motivere
- Ta æren for teamets arbeid i møter med ledelsen
- Nekte å forklare bakgrunnen for sine beslutninger

**Konsekvenser:**
1. **Tap av tillit:** Medarbeiderne slutter å stole på Ole
2. **Motstand:** Ansatte gjør kun det absolutt nødvendige, ingen ekstra innsats
3. **Omgåelse:** Medarbeiderne går til Oles sjef i stedet for å ta opp ting med Ole
4. **Turnover:** De dyktigste medarbeiderne søker seg bort
5. **Uformelle ledere tar over:** En erfaren medarbeider får uformell makt fordi kollegene går til henne i stedet for til Ole

**Lærdom:** Formell makt gir rett til å bestemme, men legitimitet gir evne til å lede. Uten legitimitet fungerer lederen som en administrator, ikke som en leder.`,
    },
    {
      id: 'ol-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-3-4-ex-2',
        number: '3.4.2',
        type: 'multiple-choice',
        task: 'Hvilke av French og Ravens maktbaser er hovedsakelig knyttet til formell posisjon?',
        options: [
          { id: 'a', text: 'Ekspertmakt og referansemakt', isCorrect: false },
          { id: 'b', text: 'Belønningsmakt, tvangsmakt og legitim makt', isCorrect: true },
          { id: 'c', text: 'Referansemakt og tvangsmakt', isCorrect: false },
          { id: 'd', text: 'Alle fem maktbasene er formelle', isCorrect: false },
        ],
        solution: 'Belønningsmakt, tvangsmakt og legitim makt er hovedsakelig knyttet til formell posisjon – de følger av stillingen lederen har. Ekspertmakt og referansemakt er hovedsakelig uformelle og knyttet til personen, ikke posisjonen.',
      },
    },
    {
      id: 'ol-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-3-4-ex-3',
        number: '3.4.3',
        type: 'classic',
        task: 'Velg to av French og Ravens maktbaser og sammenlign dem. Forklar hvilke fordeler og ulemper hver maktbase har, og gi et eksempel på hver.',
        hints: ['Tenk på langsiktig effekt – hvilken maktbase gir mest varig innflytelse?'],
        solution: 'Eksempel: Tvangsmakt vs. referansemakt. Tvangsmakt: Fordeler – kan gi umiddelbare resultater, nødvendig i noen situasjoner (sikkerhetskrav). Ulemper – skaper frykt og motstand, ødelegger tillit, folk gjør bare det minimale. Eksempel: En leder truer med oppsigelse for å få ansatte til å jobbe overtid. Referansemakt: Fordeler – skaper frivillig innsats, bygger lojalitet, folk yter ekstra fordi de vil. Ulemper – tar tid å bygge opp, avhengig av personlighet, ikke alle kan utvikle karisma. Eksempel: En leder som er så respektert at teamet frivillig strekker seg lenger for å nå felles mål. Konklusjon: Referansemakt gir mer varig innflytelse, men tvangsmakt kan være nødvendig som siste utvei.',
      },
    },
    {
      id: 'ol-3-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Makt** er evnen til å påvirke andres atferd og beslutninger
- **French og Ravens fem maktbaser:** belønningsmakt, tvangsmakt, legitim makt, ekspertmakt og referansemakt
- **Formell makt** følger av stillingen, **uformell makt** følger av personen
- **Legitimitet** betyr at maktutøvelsen oppfattes som rettferdig og akseptabel
- Legitimitet bygges gjennom rettferdighet, kompetanse, åpenhet og at lederen går foran som eksempel

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Makt | Evnen til å påvirke andres atferd og beslutninger |
| Autoritet | Akseptert rett til å utøve makt |
| Legitimitet | At maktutøvelsen oppfattes som rettferdig |
| Belønningsmakt | Makt til å gi belønninger |
| Tvangsmakt | Makt til å straffe |
| Legitim makt | Makt fra formell posisjon |
| Ekspertmakt | Makt fra kunnskap og erfaring |
| Referansemakt | Makt fra beundring og karisma |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-3-4-ex-4',
        number: '3.4.4',
        type: 'classic',
        task: 'En ny leder har nettopp fått jobben. Hvilke maktbaser har hun fra dag én, og hvilke må hun bygge opp over tid? Gi konkrete råd om hvordan hun kan styrke sin maktposisjon.',
        solution: 'Fra dag én har hun: 1) Legitim makt – stillingen gir formell myndighet. 2) Belønningsmakt – kontroll over lønn, bonuser og oppgavefordeling. 3) Tvangsmakt – mulighet til å gi advarsler og igangsette disiplinærsaker. Må bygges over tid: 4) Ekspertmakt – vise faglig kompetanse gjennom gode beslutninger og kunnskap. 5) Referansemakt – bygge tillit og respekt gjennom rettferdighet, engasjement og ærlighet. Konkrete råd: Lytt til medarbeiderne før du tar store beslutninger. Vis ydmykhet overfor deres erfaring. Vær tydelig og konsekvent. Hold det du lover. Gå foran som godt eksempel. Bygg relasjoner gjennom genuine samtaler. Vis faglig interesse og kompetanse.',
      },
    },
    {
      id: 'ol-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-3-4-ex-5',
        number: '3.4.5',
        type: 'multiple-choice',
        task: 'Hva menes med at en leder har legitimitet?',
        options: [
          { id: 'a', text: 'At lederen har fått stillingen gjennom en formell ansettelsesprosess', isCorrect: false },
          { id: 'b', text: 'At medarbeiderne oppfatter lederens maktutøvelse som rettferdig og akseptabel', isCorrect: true },
          { id: 'c', text: 'At lederen har den høyeste lønnen i avdelingen', isCorrect: false },
          { id: 'd', text: 'At lederen aldri tar upopulære beslutninger', isCorrect: false },
        ],
        solution: 'Legitimitet betyr at de som ledes oppfatter maktutøvelsen som rettferdig, rimelig og akseptabel. Det handler ikke om at lederen er formelt ansatt, men om at medarbeiderne frivillig anerkjenner lederens rett til å lede. En leder som har legitimitet skaper oppslutning, ikke bare lydighet.',
      },
    },
    {
      id: 'ol-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-3-4-ex-6',
        number: '3.4.6',
        type: 'classic',
        task: 'Drøft påstanden: «En leder som kun bruker tvangsmakt, vil til slutt miste all makt.» Er du enig? Begrunn svaret ditt med referanse til de ulike maktbasene.',
        hints: ['Tenk på hva som skjer med tillit, motivasjon og turnover over tid.'],
        solution: 'Enig i påstanden. En leder som kun bruker tvangsmakt (trusler og straff) vil oppleve: 1) Tap av legitimitet – medarbeiderne mister respekt for lederen. 2) Lav motivasjon – folk gjør bare det minimale for å unngå straff. 3) Høy turnover – dyktige ansatte slutter og finner andre jobber. 4) Ingen ekspertmakt – lederen lærer ikke av medarbeiderne fordi kommunikasjonen er enveis. 5) Ingen referansemakt – ingen beundrer en leder som styrer gjennom frykt. Over tid mister lederen sine beste folk, får et dårlig rykte, og produksjonen synker. Den formelle makten består, men den reelle innflytelsen forsvinner. Konklusjon: Tvangsmakt er den svakeste maktbasen over tid fordi den bryter ned alle andre maktbaser.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3.5: Ledelse i praksis
// ============================================================================

export const CHAPTER_OKONOMI_LEDELSE_3_5: TextbookChapter = {
  id: 'okonomi-ledelse-3-5',
  courseId: 'okonomi-ledelse',
  chapterNumber: '3.5',
  title: 'Ledelse i praksis',
  description: 'Du lærer om den norske arbeidslivsmodellen, medbestemmelse gjennom tillitsvalgte og arbeidsmiljøutvalg, trepartssamarbeidet mellom stat, arbeidsgiver og arbeidstaker, og lederens HMS-ansvar.',
  estimatedMinutes: 24,
  competenceGoals: ['reflektere over ledelse i norsk arbeidsliv'],
  keyTerms: [
    { term: 'Den norske arbeidslivsmodellen', definition: 'Et system basert på samarbeid mellom arbeidsgiver, arbeidstaker og staten, med høy organisasjonsgrad og medbestemmelse' },
    { term: 'Trepartssamarbeid', definition: 'Samarbeidet mellom staten, arbeidsgiverorganisasjonene og arbeidstakerorganisasjonene om lønn og arbeidsvilkår' },
    { term: 'Medbestemmelse', definition: 'Ansattes rett til å påvirke beslutninger som angår deres arbeidssituasjon' },
    { term: 'Tillitsvalgt', definition: 'En valgt representant for de ansatte som ivaretar deres interesser overfor ledelsen' },
    { term: 'HMS', definition: 'Helse, miljø og sikkerhet – lederens ansvar for å sørge for et trygt og forsvarlig arbeidsmiljø' },
  ],
  content: [
    {
      id: 'ol-3-5-intro',
      type: 'text',
      content: `## Ledelse i praksis

Ledelse utøves ikke i et vakuum. I Norge har vi et arbeidsliv som er preget av sterke tradisjoner for samarbeid, medbestemmelse og likeverd mellom ledere og ansatte. Norske ledere kan ikke bare bestemme selv – de må samarbeide med tillitsvalgte, følge lover og regler, og ivareta helse, miljø og sikkerhet.

I dette kapittelet skal du lære:
- Hva den norske arbeidslivsmodellen innebærer
- Hvordan trepartssamarbeidet fungerer
- Hva medbestemmelse betyr i praksis
- Lederens ansvar for helse, miljø og sikkerhet (HMS)`,
    },
    {
      id: 'ol-3-5-def-1',
      type: 'definition',
      title: 'Den norske arbeidslivsmodellen',
      content: `**Den norske arbeidslivsmodellen** (også kalt den nordiske modellen) er et system der arbeidsliv og økonomi bygger på samarbeid mellom tre parter: staten, arbeidsgiverne og arbeidstakerne. Modellen kjennetegnes av høy organisasjonsgrad, sterke fagforeninger, sentrale lønnsforhandlinger, medbestemmelse for ansatte og en velferdsstat som gir trygghet.`,
    },
    {
      id: 'ol-3-5-text-1',
      type: 'text',
      content: `### Trepartssamarbeidet

Trepartssamarbeidet er grunnpilaren i den norske arbeidslivsmodellen. Det innebærer at tre parter samarbeider om å utvikle norsk arbeidsliv:

**1. Staten**
- Lager lover og regelverk (arbeidsmiljøloven, ferieloven, likestillingsloven)
- Fører tilsyn gjennom Arbeidstilsynet
- Legger til rette for samarbeid gjennom Hovedavtalen

**2. Arbeidsgiverorganisasjonene**
- NHO (Næringslivets Hovedorganisasjon) er den største
- Representerer bedriftene i lønnsforhandlinger
- Gir råd og veiledning til arbeidsgivere
- Andre: Virke, KS (kommuner), Spekter

**3. Arbeidstakerorganisasjonene**
- LO (Landsorganisasjonen i Norge) er den største
- Representerer de ansatte i lønnsforhandlinger
- Kjemper for gode arbeidsvilkår og rettigheter
- Andre: Unio, YS, Akademikerne

**Hvordan fungerer det i praksis?**
Partene forhandler om lønn og arbeidsvilkår gjennom tariffavtaler. De samarbeider i ulike fora om arbeidsmiljø, pensjon, kompetanseutvikling og omstilling. Ved uenighet finnes det ordninger for megling og eventuelt streik eller lockout.`,
    },
    {
      id: 'ol-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Trepartssamarbeidet i praksis',
      problem: 'Forklar hvordan trepartssamarbeidet fungerer i en lønnsforhandling.',
      solution: `**Situasjon:** Det er tid for tariffoppgjøret våren 2025.

**Forberedelse:**
- LO og NHO analyserer den økonomiske situasjonen
- Teknisk beregningsutvalg (med representanter fra alle tre parter) legger frem tall for prisstigning, produktivitet og konkurranseevne

**Forhandling:**
- LO og NHO forhandler om lønnstillegg for det kommende året
- LO krever 5 % lønnsvekst, NHO tilbyr 3 %
- Partene forhandler seg frem til en enighet på 4,2 %
- Frontfagsmodellen: Konkurranseutsatt industri forhandler først og setter normen

**Statens rolle:**
- Riksmekleren megler dersom partene ikke blir enige
- Regjeringen kan gripe inn med tvungen lønnsnemnd hvis det truer liv og helse
- Staten regulerer rammene gjennom lovgivning

**Resultat:**
Lønnsveksten fordeles utover, og lokale forhandlinger kan gi tillegg på toppen av det sentrale oppgjøret. Modellen sikrer at lønnsveksten samsvarer med det økonomien tåler.`,
    },
    {
      id: 'ol-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'ol-3-5-ex-1',
        number: '3.5.1',
        type: 'multiple-choice',
        task: 'Hvem er de tre partene i trepartssamarbeidet?',
        options: [
          { id: 'a', text: 'Bedrifter, kunder og leverandører', isCorrect: false },
          { id: 'b', text: 'Staten, arbeidsgiverorganisasjonene og arbeidstakerorganisasjonene', isCorrect: true },
          { id: 'c', text: 'Stortinget, regjeringen og domstolene', isCorrect: false },
          { id: 'd', text: 'Eiere, ledere og ansatte', isCorrect: false },
        ],
        solution: 'Trepartssamarbeidet består av staten (lover og tilsyn), arbeidsgiverorganisasjonene (representerer bedriftene, f.eks. NHO) og arbeidstakerorganisasjonene (representerer de ansatte, f.eks. LO). Sammen forhandler de om lønn og arbeidsvilkår.',
      },
    },
    {
      id: 'ol-3-5-def-2',
      type: 'definition',
      title: 'Medbestemmelse',
      content: `**Medbestemmelse** er ansattes lovfestede rett til å påvirke beslutninger som angår deres arbeidssituasjon. Medbestemmelse utøves gjennom tillitsvalgte, verneombud, arbeidsmiljøutvalg (AMU) og ansattes representanter i styret. Retten er forankret i arbeidsmiljøloven og i Hovedavtalen mellom partene.`,
    },
    {
      id: 'ol-3-5-text-2',
      type: 'text',
      content: `### Medbestemmelse i praksis

I norsk arbeidsliv har de ansatte flere kanaler for medbestemmelse:

**Tillitsvalgt**
- Valgt av og blant de ansatte
- Representerer de ansatte overfor ledelsen
- Deltar i forhandlinger om lønn og arbeidsvilkår
- Har rett til innsyn og informasjon om bedriftens situasjon

**Verneombud**
- Pålagt i alle bedrifter med minst 10 ansatte
- Ivaretar arbeidstakernes interesser i saker om arbeidsmiljø
- Skal varsle om farlige forhold
- Kan stanse arbeid som utgjør umiddelbar fare for liv og helse

**Arbeidsmiljøutvalg (AMU)**
- Pålagt i bedrifter med minst 50 ansatte
- Sammensatt av representanter fra ledelse og ansatte
- Behandler saker om arbeidsmiljø, HMS og tilrettelegging
- Har beslutningsmyndighet i visse arbeidsmiljøsaker

**Ansattes styrerepresentanter**
- I selskaper med over 30 ansatte kan de kreve representasjon i styret
- Over 50 ansatte: rett til å velge representanter
- Gir ansatte innflytelse på strategiske beslutninger`,
    },
    {
      id: 'ol-3-5-example-2',
      type: 'example',
      title: 'Eksempel: Medbestemmelse når bedriften skal omorganisere',
      problem: 'En bedrift med 80 ansatte skal gjennomføre en omorganisering som berører alle avdelinger. Hvordan sikres medbestemmelse?',
      solution: `**Steg 1: Informasjon**
Ledelsen informerer tillitsvalgte om planene i god tid, før beslutninger er tatt. Tillitsvalgte får innsyn i bakgrunn, analyser og konsekvensutredninger.

**Steg 2: Drøfting**
Ledelsen drøfter omorganiseringen med tillitsvalgte. Drøfting betyr at begge parter legger frem sine synspunkter, og at ledelsen plikter å vurdere de ansattes innspill seriøst.

**Steg 3: Arbeidsmiljøutvalget (AMU)**
AMU behandler konsekvensene for arbeidsmiljøet: Vil omorganiseringen føre til økt stress? Endrede fysiske arbeidsforhold? Behov for ny kompetanse?

**Steg 4: Ansatterepresentanter i styret**
Ansattes styrerepresentanter deltar i styrebehandlingen av omorganiseringen og kan fremme ansattes synspunkter på styrenivå.

**Steg 5: Gjennomføring**
Ledelsen tar den endelige beslutningen, men den er bedre forankret og har større sjanse for å lykkes fordi de ansatte har vært involvert og hørt.`,
    },
    {
      id: 'ol-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'ol-3-5-ex-2',
        number: '3.5.2',
        type: 'multiple-choice',
        task: 'Hva er verneombudets viktigste oppgave?',
        options: [
          { id: 'a', text: 'Å forhandle om lønn på vegne av de ansatte', isCorrect: false },
          { id: 'b', text: 'Å ivareta arbeidstakernes interesser i saker om arbeidsmiljø og sikkerhet', isCorrect: true },
          { id: 'c', text: 'Å ansette nye medarbeidere', isCorrect: false },
          { id: 'd', text: 'Å føre bedriftens regnskap', isCorrect: false },
        ],
        solution: 'Verneombudets viktigste oppgave er å ivareta arbeidstakernes interesser i saker om arbeidsmiljø, helse og sikkerhet. Verneombudet skal varsle om farlige forhold og kan i ytterste konsekvens stanse arbeid som utgjør umiddelbar fare for liv og helse.',
      },
    },
    {
      id: 'ol-3-5-text-3',
      type: 'text',
      content: `### Lederens HMS-ansvar

**HMS** står for helse, miljø og sikkerhet. Ifølge arbeidsmiljøloven har arbeidsgiveren det overordnede ansvaret for at arbeidsmiljøet er forsvarlig. I praksis betyr dette at lederen må:

**Helse:**
- Forebygge arbeidsrelaterte skader og sykdom
- Tilrettelegge for ansatte med helseproblemer
- Sørge for at arbeidsbelastningen er forsvarlig
- Følge opp sykefravær og tilby tilpasset arbeid

**Miljø:**
- Sørge for godt fysisk arbeidsmiljø (lys, luft, støy, ergonomi)
- Fremme et godt psykososialt arbeidsmiljø (trivsel, inkludering, forebygging av mobbing)
- Gjennomføre medarbeiderundersøkelser
- Håndtere konflikter på en god måte

**Sikkerhet:**
- Identifisere og vurdere risikoer (risikovurdering)
- Innføre tiltak for å redusere risiko
- Sørge for opplæring i sikkerhet
- Ha beredskapsplaner og øve på nødssituasjoner

**Internkontroll:** Alle bedrifter er pålagt å ha et system for internkontroll av HMS. Dette betyr at bedriften systematisk skal dokumentere sitt HMS-arbeid, gjennomføre jevnlige kontroller og forbedre seg kontinuerlig.`,
    },
    {
      id: 'ol-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'ol-3-5-ex-3',
        number: '3.5.3',
        type: 'classic',
        task: 'Du er leder for en avdeling med 15 ansatte i et lagerbygg. Lag en kort HMS-plan som dekker helse, miljø og sikkerhet. Nevn minst to konkrete tiltak for hvert område.',
        hints: ['Tenk på fysiske farer (tunge løft, maskiner), psykososiale faktorer (trivsel, stress) og hva som bør dokumenteres.'],
        solution: 'Helse: 1) Tilby ergonomikurs for riktig løfteteknikk og bruk av hjelpemidler. 2) Følge opp sykefravær med samtaler og tilbud om tilrettelagt arbeid. Miljø: 1) Gjennomføre årlig medarbeiderundersøkelse om trivsel og psykososialt arbeidsmiljø. 2) Sørge for god belysning, ventilasjon og temperaturregulering i lageret. Sikkerhet: 1) Gjennomføre risikovurdering for alle arbeidsoppgaver og dokumentere tiltak. 2) Holde jevnlige brannøvelser og sikre at alle vet hvor nødutganger og slukkeutstyr er. I tillegg: Dokumentere alt i et internkontrollsystem, ha faste HMS-møter med verneombud, og sørge for at alle nyansatte får sikkerhetsopplæring.',
      },
    },
    {
      id: 'ol-3-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Den norske arbeidslivsmodellen** bygger på samarbeid mellom stat, arbeidsgivere og arbeidstakere
- **Trepartssamarbeidet** sikrer at lønn og arbeidsvilkår forhandles mellom partene
- **Medbestemmelse** gir ansatte rett til å påvirke beslutninger gjennom tillitsvalgte, verneombud, AMU og styrerepresentanter
- **HMS** (helse, miljø og sikkerhet) er lederens ansvar og reguleres gjennom arbeidsmiljøloven
- **Internkontroll** sikrer at HMS-arbeidet er systematisk og dokumentert

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Den norske arbeidslivsmodellen | Samarbeid mellom stat, arbeidsgiver og arbeidstaker |
| Trepartssamarbeid | Samarbeid mellom staten, arbeidsgiverorganisasjoner og arbeidstakerorganisasjoner |
| Medbestemmelse | Ansattes rett til å påvirke beslutninger om arbeidssituasjonen |
| Tillitsvalgt | Valgt representant for de ansatte overfor ledelsen |
| Verneombud | Ivaretar arbeidstakernes interesser i HMS-saker |
| AMU | Arbeidsmiljøutvalg – behandler arbeidsmiljøsaker |
| HMS | Helse, miljø og sikkerhet |
| Internkontroll | Systematisk dokumentasjon av HMS-arbeid |`,
    },
    // --- Samleoppgaver ---
    {
      id: 'ol-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'ol-3-5-ex-4',
        number: '3.5.4',
        type: 'classic',
        task: 'Drøft hvorfor den norske arbeidslivsmodellen med trepartssamarbeid og medbestemmelse har vært så vellykket. Hvilke fordeler gir modellen for bedrifter, ansatte og samfunnet?',
        solution: 'For bedrifter: 1) Forutsigbarhet gjennom ordnede lønnsforhandlinger. 2) Færre konflikter fordi uenigheter løses gjennom forhandling. 3) Høy produktivitet fordi ansatte er motiverte og involverte. 4) God kompetanse fordi modellen fremmer utdanning og opplæring. For ansatte: 1) Trygge ansettelsesforhold og rettigheter. 2) Medbestemmelse gir reell innflytelse. 3) Rettferdig lønnsutvikling gjennom kollektive forhandlinger. 4) Godt arbeidsmiljø gjennom HMS-lovgivning. For samfunnet: 1) Lav arbeidsledighet og høy sysselsetting. 2) Lite ulikhet og høy sosial tillit. 3) Stabil økonomi med få streiker. 4) Konkurransedyktig næringsliv internasjonalt.',
      },
    },
    {
      id: 'ol-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'ol-3-5-ex-5',
        number: '3.5.5',
        type: 'multiple-choice',
        task: 'I bedrifter med hvor mange ansatte er arbeidsmiljøutvalg (AMU) pålagt?',
        options: [
          { id: 'a', text: 'Alle bedrifter uansett størrelse', isCorrect: false },
          { id: 'b', text: 'Bedrifter med minst 10 ansatte', isCorrect: false },
          { id: 'c', text: 'Bedrifter med minst 50 ansatte', isCorrect: true },
          { id: 'd', text: 'Bare offentlige virksomheter', isCorrect: false },
        ],
        solution: 'Arbeidsmiljøutvalg (AMU) er pålagt i bedrifter med minst 50 ansatte. Bedrifter med mellom 20 og 50 ansatte kan pålegges AMU hvis en av partene krever det. AMU behandler saker om arbeidsmiljø og HMS.',
      },
    },
    {
      id: 'ol-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'ol-3-5-ex-6',
        number: '3.5.6',
        type: 'classic',
        task: 'Forklar hva medbestemmelse betyr i praksis ved å beskrive en konkret situasjon der en tillitsvalgt bør involveres. Hvilke rettigheter har den tillitsvalgte, og hva skjer hvis ledelsen ikke involverer de ansatte?',
        hints: ['Tenk på situasjoner der endringer påvirker arbeidssituasjonen til de ansatte.'],
        solution: 'Situasjon: Bedriften vurderer å innføre nye arbeidstider med mer kveldsarbeid. Tillitsvalgtes rettigheter: 1) Rett til informasjon om planene og bakgrunnen. 2) Rett til å drøfte endringene med ledelsen før beslutning tas. 3) Rett til å fremme ansattes synspunkter og foreslå alternativer. 4) Rett til innsyn i relevante dokumenter. Hvis ledelsen ikke involverer: 1) Det kan være brudd på arbeidsmiljøloven og tariffavtalen. 2) Fagforeningen kan ta saken videre gjennom forhandlinger eller klage. 3) Beslutningen mangler legitimitet og møter sterkere motstand. 4) De ansatte mister tillit til ledelsen, noe som skader samarbeidsklimaet. 5) I ytterste konsekvens kan det føre til arbeidskonflikter.',
      },
    },
    {
      id: 'ol-3-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'ol-3-5-ex-7',
        number: '3.5.7',
        type: 'classic',
        task: 'Sammenlign den norske arbeidslivsmodellen med et land der fagforeninger har lite makt (for eksempel USA). Hvilke forskjeller ser du i arbeidsvilkår, lønnsnivå og arbeidsmiljø? Hva er fordelene og ulempene med de to systemene?',
        solution: 'Norge: Høy organisasjonsgrad, kollektive lønnsforhandlinger, sterk arbeidsmiljølov, rett til medbestemmelse, relativt lik lønnsfordeling, omfattende velferdsstat. USA: Lav organisasjonsgrad, individuelle lønnsforhandlinger, svakere arbeidsrettslig vern, «employment at will» (kan sies opp uten grunn), større lønnsforskjeller, begrenset velferdsstat. Fordeler Norge: Bedre beskyttelse av ansatte, lavere ulikhet, høyere trivsel, færre konflikter, trygghet. Ulemper Norge: Høyere arbeidskostnader, mindre fleksibilitet for bedrifter, komplekse forhandlingsprosesser. Fordeler USA: Mer fleksibilitet for bedrifter, raskere tilpasning til markedsendringer, mulighet for høyere lønn for noen. Ulemper USA: Større ulikhet, mindre trygghet for ansatte, dårligere arbeidsvilkår for lavtlønte, hyppigere konflikter.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const OKONOMI_LEDELSE_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_OKONOMI_LEDELSE_3_1,
  CHAPTER_OKONOMI_LEDELSE_3_2,
  CHAPTER_OKONOMI_LEDELSE_3_3,
  CHAPTER_OKONOMI_LEDELSE_3_4,
  CHAPTER_OKONOMI_LEDELSE_3_5,
];
