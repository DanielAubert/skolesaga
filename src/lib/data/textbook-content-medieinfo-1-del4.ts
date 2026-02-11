/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Medie- og informasjonskunnskap 1 (VG2) - Del 4: Medietekster og analyse
 *
 * Kapittel 4.1–4.5
 *
 * LK20-kompetansemål:
 * - analysere og vurdere ulike medietekster med utgangspunkt i sjanger, modalitet og retorikk
 * - bruke sentrale begreper fra semiotikk og visuell kommunikasjon i analyse av medietekster
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Mediesjangre
// ============================================================================

export const CHAPTER_MEDIEINFO_1_4_1: TextbookChapter = {
  id: 'medieinfo-1-4-1',
  courseId: 'medieinfo-1',
  chapterNumber: '4.1',
  title: 'Mediesjangre',
  description: 'Sjangerteori, sjangerkjennetegn og hybridsjangre. Du lærer hvordan medietekster klassifiseres i sjangre, hvilke forventninger sjangre skaper, og hvordan sjangergrenser utfordres i moderne medier.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analysere og vurdere ulike medietekster med utgangspunkt i sjanger, modalitet og retorikk',
  ],
  keyTerms: [
    { term: 'Sjanger', definition: 'En kategori eller type tekst med bestemte kjennetegn knyttet til form, innhold og funksjon. Sjangre skaper forventninger hos publikum om hva slags tekst de møter.' },
    { term: 'Sjangerkonvensjon', definition: 'De uskrevne reglene og forventningene som kjennetegner en bestemt sjanger, for eksempel at en nyhetsartikkel har tittel, ingress og brødtekst.' },
    { term: 'Hybridsjanger', definition: 'En medietekst som blander trekk fra to eller flere sjangre, for eksempel infotainment som kombinerer informasjon og underholdning.' },
    { term: 'Sjangerforventning', definition: 'Det publikum forventer av en tekst basert på hvilken sjanger den tilhører. Forventningene styrer hvordan teksten leses og tolkes.' },
    { term: 'Sjangerbrudd', definition: 'Når en tekst bevisst bryter med etablerte sjangerkonvensjoner for å overraske, provosere eller skape ny mening.' },
  ],
  content: [
    {
      id: 'mi-4-1-intro',
      type: 'text',
      content: `## Hvordan vi sorterer medietekster

Hver dag møter vi hundrevis av medietekster: nyhetsartikler, reklamefilmer, podkaster, Instagram-innlegg, dokumentarer og mye mer. For å forstå og analysere disse tekstene bruker vi begrepet *sjanger*. Sjangre hjelper oss med å gjenkjenne og tolke det vi ser, leser og hører.

I dette kapittelet skal du lære:
- Hva en sjanger er og hvorfor sjangre er viktige
- Hvilke hovedsjangre vi finner i mediene
- Hva sjangerkonvensjoner og sjangerforventninger innebærer
- Hva hybridsjangre er og hvorfor de blir stadig vanligere`,
    },
    {
      id: 'mi-4-1-def-1',
      type: 'definition',
      title: 'Sjanger',
      content: `En **sjanger** er en kategori eller type tekst med bestemte kjennetegn knyttet til form, innhold og funksjon. Begrepet kommer fra det franske ordet *genre*, som betyr «type» eller «art». I mediesammenheng bruker vi sjangre for å klassifisere alt fra nyhetsartikler og dokumentarer til reklame og underholdningsprogrammer. Sjangre er ikke faste kategorier, men utvikler seg over tid i takt med samfunnet og teknologien.`,
    },
    {
      id: 'mi-4-1-text-1',
      type: 'text',
      content: `### Hovedsjangre i mediene

Medietekster kan deles inn i flere hovedkategorier:

**Informasjonssjangre**
- Nyhetsartikkel, nyhetsreportasje, intervju
- Dokumentar, faktaprogram
- Leksikon, fagartikkel, feature

**Meningssjangre**
- Lederartikkel, kommentar, kronikk
- Debattinnlegg, anmeldelse
- Blogginnlegg, podkast med meningsinnhold

**Underholdningssjangre**
- Dramaserie, film, komedie
- Realityshow, talkshow, gameshow
- Musikkvideoer, humorprogram

**Reklamesjangre**
- Annonse (trykt, digital), reklameplakat
- Reklamefilm, sponset innhold
- Influencer-markedsføring, produktplassering

**Sosiale medier-sjangre**
- Story, reel, TikTok-video
- Twittermelding, Facebook-innlegg
- Memes, delevennlig innhold`,
    },
    {
      id: 'mi-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Sjangergjenkjenning i praksis',
      problem: 'Du ser en TV-sending som begynner med en studio-setting, en programleder som ser alvorlig i kamera, og en vignett med dramatisk musikk. Hvilken sjanger forventer du?',
      solution: `**Analyse:**
Elementene du ser er typiske sjangerkonvensjoner for en nyhetssending:
- **Studio-setting**: Nyhetsanker sitter ved et skrivebord, nøytral bakgrunn
- **Alvorlig programleder**: Signaliserer seriøsitet og troverdighet
- **Vignett med dramatisk musikk**: Skaper oppmerksomhet og markerer at viktig informasjon kommer

Du forventer automatisk en nyhetssending fordi du gjenkjenner sjangerkonvensjonene. Dersom det viser seg å være en parodisending (som NRKs «Nytt på nytt»), opplever du et sjangerbrudd som skaper humor nettopp fordi forventningene dine ble brutt.

**Poeng:** Sjangergjenkjenning skjer ofte ubevisst. Vi er trent til å lese signaler som forteller oss hva slags tekst vi møter.`,
    },
    {
      id: 'mi-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-4-1-ex-1',
        number: '4.1.1',
        type: 'multiple-choice',
        task: 'Hva er en sjanger i mediesammenheng?',
        options: [
          { id: 'a', text: 'Et bestemt medium, som TV eller avis', isCorrect: false },
          { id: 'b', text: 'En kategori tekst med bestemte kjennetegn knyttet til form, innhold og funksjon', isCorrect: true },
          { id: 'c', text: 'Et annet ord for stil eller tone i en tekst', isCorrect: false },
          { id: 'd', text: 'En teknikk som brukes i reklame', isCorrect: false },
        ],
        solution: 'En sjanger er en kategori eller type tekst med bestemte kjennetegn knyttet til form, innhold og funksjon. Sjangre hjelper oss med å gjenkjenne og tolke medietekster.',
      },
    },
    {
      id: 'mi-4-1-def-2',
      type: 'definition',
      title: 'Hybridsjanger',
      content: `En **hybridsjanger** oppstår når en medietekst blander trekk fra to eller flere etablerte sjangre. Begrepet hybrid kommer fra biologi og betyr «krysning». I mediene ser vi stadig mer sjangerblanding, for eksempel *infotainment* (informasjon + underholdning), *dokudrama* (dokumentar + drama) og *advertainment* (advertising + entertainment). Hybridsjangre utfordrer tradisjonelle sjangergrenser og kan gjøre det vanskeligere for publikum å vite hva slags tekst de forholder seg til.`,
    },
    {
      id: 'mi-4-1-text-2',
      type: 'text',
      content: `### Hvorfor oppstår hybridsjangre?

Sjangerblanding har blitt stadig vanligere i moderne medier. Det er flere grunner til dette:

**Konkurranse om oppmerksomhet**
- Mediene kjemper om publikums tid og oppmerksomhet
- Sjangerblanding kan gjøre innholdet mer engasjerende
- Underholdningselementer tiltrekker et bredere publikum

**Digitalisering og sosiale medier**
- Plattformer som YouTube og TikTok legger ikke tradisjonelle sjangergrenser
- Brukergenerert innhold utfordrer profesjonelle sjangernormer
- Format og lengde tilpasses plattformens logikk

**Kommersielle hensyn**
- Sponset innhold og produktplassering blander reklame og redaksjonelt innhold
- Influencere blander personlig innhold og reklame
- Native advertising ligner på journalistikk, men er betalt

**Eksempler på hybridsjangre i norske medier:**
- «Kompani Lauritzen» (reality + militær dokumentar)
- Podkasten «Aftenpodden» (nyhetsjournalistikk + samtale + underholdning)
- Merkede artikler i VG/Dagbladet (journalistikk + reklame)`,
    },
    {
      id: 'mi-4-1-example-2',
      type: 'example',
      title: 'Eksempel: Hybridsjanger - infotainment',
      content: `**Program:** «Folkeopplysningen» på NRK

**Informasjonselementer (dokumentar):**
- Faglig innhold basert på forskning
- Intervjuer med eksperter
- Statistikk og fakta presentert

**Underholdningselementer:**
- Humoristisk programleder (Andreas Wahl)
- Spektakulære eksperimenter og stunts
- Raske klipp og engasjerende musikk

**Analyse:** «Folkeopplysningen» er et typisk infotainment-program. Det kombinerer seriøs kunnskapsformidling med underholdende presentasjon. Fordelen er at programmet når et bredt publikum som kanskje ikke ville sett en tradisjonell dokumentar. Utfordringen er at komplekse temaer kan bli forenklet for å passe underholdningsformatet.`,
    },
    {
      id: 'mi-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-4-1-ex-2',
        number: '4.1.2',
        type: 'classic',
        task: 'Velg en medietekst du kjenner godt (en TV-serie, en podkast, en YouTube-kanal eller lignende). Beskriv hvilken sjanger den tilhører, og pek på minst tre sjangerkonvensjoner teksten bruker. Bryter teksten med noen sjangerforventninger?',
        hints: ['Tenk på form, innhold og funksjon', 'Vurder om teksten blander elementer fra flere sjangre'],
        solution: 'Et godt svar identifiserer sjangeren med begrunnelse og peker på konkrete sjangerkonvensjoner. Eksempel: YouTube-kanalen «Kurzgesagt» tilhører sjangeren animert faktaprogram/populærvitenskap. Konvensjoner: 1) Tydelig faktabasert innhold med kildehenvisninger. 2) En fortellerstemme som guider seeren gjennom temaet. 3) Illustrerende animasjoner som visualiserer komplekse begreper. Sjangerbrudd: Bruker humor og fargerik stil som bryter med tradisjonelle dokumentarkonvensjoner, noe som gjør det til en hybridsjanger mellom underholdning og formidling.',
      },
    },
    {
      id: 'mi-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-4-1-ex-3',
        number: '4.1.3',
        type: 'multiple-choice',
        task: 'Hva er en hybridsjanger?',
        options: [
          { id: 'a', text: 'En sjanger som bare finnes i digitale medier', isCorrect: false },
          { id: 'b', text: 'En medietekst som blander trekk fra to eller flere sjangre', isCorrect: true },
          { id: 'c', text: 'En sjanger som er utdatert og ikke brukes lenger', isCorrect: false },
          { id: 'd', text: 'En tekst som ikke passer inn i noen sjanger', isCorrect: false },
        ],
        solution: 'En hybridsjanger oppstår når en medietekst blander trekk fra to eller flere etablerte sjangre. Eksempler er infotainment (informasjon + underholdning) og dokudrama (dokumentar + drama).',
      },
    },
    {
      id: 'mi-4-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- En **sjanger** er en tekstkategori med bestemte kjennetegn knyttet til form, innhold og funksjon
- **Sjangerkonvensjoner** er de uskrevne reglene som kjennetegner en sjanger
- **Sjangerforventninger** styrer hvordan vi leser og tolker medietekster
- **Hybridsjangre** blander trekk fra flere sjangre og blir stadig vanligere
- **Sjangerbrudd** kan overraske, provosere eller skape ny mening`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-4-1-ex-4',
        number: '4.1.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvorfor hybridsjangre har blitt vanligere i moderne medier. Bruk konkrete eksempler og vurder hvilke fordeler og ulemper sjangerblanding gir for publikum.',
        hints: ['Tenk på konkurranse, digitalisering og kommersielle hensyn', 'Vurder konsekvensene for publikums forståelse og kildekritikk'],
        solution: 'Hybridsjangre har blitt vanligere fordi mediene konkurrerer om oppmerksomhet (underholdning tiltrekker), digitale plattformer legger ikke tradisjonelle sjangergrenser (TikTok blander alt), og kommersielle hensyn driver sjangerblanding (native advertising ligner redaksjonelt). Fordeler for publikum: Mer engasjerende innhold, kunnskap formidles på underholdende måter, og nye kreative uttrykksformer oppstår. Ulemper: Vanskeligere å skille reklame fra journalistikk, vanskelig å vite om man møter fakta eller fiksjon, og sjangerblanding kan undergrave journalistisk troverdighet. Eksempler: Influencere som blander personlig innhold med reklame, reality-TV som blander dokumentar med iscenesettelse.',
      },
    },
    {
      id: 'mi-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-4-1-ex-5',
        number: '4.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hva et sjangerbrudd er, og gi to eksempler fra medier du kjenner. Diskuter hvilken effekt sjangerbruddet har på publikum i hvert tilfelle.',
        hints: ['Tenk på parodier, overraskende vendinger eller tekster som leker med sjanger'],
        solution: 'Et sjangerbrudd oppstår når en tekst bevisst bryter med etablerte sjangerkonvensjoner. Eksempel 1: NRK-serien «Exit» bruker sjangerkoden til en glamorøs finansthriller, men avslører etter hvert alvorlige overgrep. Sjangerbruddet skaper ubehag og tvinger seeren til å reflektere over maktmisbruk. Eksempel 2: Satirekontoer på sosiale medier som etterligner nyhetsformat for å lage humor (f.eks. «Norsk Rikskringkansen»). Sjangerbruddet skaper humor nettopp fordi det alvorlige nyhetsformatet brukes til absurde saker, men kan også skape forvirring hos dem som tar innholdet bokstavelig.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.2: Multimodalitet
// ============================================================================

export const CHAPTER_MEDIEINFO_1_4_2: TextbookChapter = {
  id: 'medieinfo-1-4-2',
  courseId: 'medieinfo-1',
  chapterNumber: '4.2',
  title: 'Multimodalitet',
  description: 'Samspill mellom tekst, bilde, lyd og video i medietekster. Du lærer om ulike modaliteter, hvordan de samvirker for å skape mening, og hvordan multimodale tekster analyseres.',
  estimatedMinutes: 24,
  competenceGoals: [
    'analysere og vurdere ulike medietekster med utgangspunkt i sjanger, modalitet og retorikk',
  ],
  keyTerms: [
    { term: 'Multimodalitet', definition: 'At en tekst bruker flere uttrykksmåter (modaliteter) samtidig, for eksempel skrift, bilde, lyd og bevegelse, for å skape mening.' },
    { term: 'Modalitet', definition: 'En uttrykksmåte eller kommunikasjonskanal, for eksempel verbalspråk, bilde, lyd, farger, typografi eller kroppsspråk.' },
    { term: 'Koherens', definition: 'Sammenheng og helhet i en multimodal tekst. Koherens oppstår når de ulike modalitetene samvirker til å skape en tydelig og sammenhengende mening.' },
    { term: 'Funksjonell tyngde', definition: 'Hvilken modalitet som bærer mest mening i en bestemt tekst. I en musikkvideoer har bildet og lyden størst funksjonell tyngde, mens verbalspråket ofte er sekundært.' },
    { term: 'Multimodalt samspill', definition: 'Hvordan ulike modaliteter forsterker, utdyper, motsier eller utfyller hverandre i en tekst. Samspillet mellom modalitetene skaper mer mening enn hver enkelt modalitet alene.' },
  ],
  content: [
    {
      id: 'mi-4-2-intro',
      type: 'text',
      content: `## Tekster som bruker flere uttrykksmåter

De fleste medietekster vi møter i dag er *multimodale* - de kombinerer flere uttrykksmåter for å skape mening. En nyhetssak på nett har tekst, bilder, videoklipp og hyperlenker. En TikTok-video kombinerer bilde, lyd, tekst og bevegelse. Selv en bok bruker skrift, typografi, layout og illustrasjoner.

I dette kapittelet skal du lære:
- Hva multimodalitet betyr og hvilke modaliteter som finnes
- Hvordan modaliteter samvirker for å skape mening
- Hva koherens og funksjonell tyngde innebærer
- Hvordan du analyserer multimodale medietekster`,
    },
    {
      id: 'mi-4-2-def-1',
      type: 'definition',
      title: 'Multimodalitet',
      content: `**Multimodalitet** betyr at en tekst bruker flere uttrykksmåter (modaliteter) samtidig for å skape mening. Begrepet ble utviklet av lingvistene Gunther Kress og Theo van Leeuwen. De argumenterte for at vi ikke kan forstå moderne tekster bare ved å analysere verbalspråket - vi må også se på bilder, lyd, layout, farger og andre uttrykksmåter. I dag er de aller fleste medietekster multimodale.`,
    },
    {
      id: 'mi-4-2-text-1',
      type: 'text',
      content: `### De viktigste modalitetene

**Verbalspråk (skrift og tale)**
- Tekst i artikler, plakater, undertekster
- Tale i podkaster, nyhetssendinger, dokumentarer
- Formidler presis informasjon, argumenter og nyanser

**Visuelle modaliteter**
- Bilder (foto, illustrasjon, grafikk)
- Video og film (bevegelige bilder)
- Farger, former og komposisjon
- Typografi (skrifttype, størrelse, uthevinger)
- Layout og romlig organisering

**Auditive modaliteter**
- Musikk (stemning, assosiasjoner, rytme)
- Lydeffekter (forsterker opplevelse)
- Stemmekvalitet (tonefall, tempo, volum)
- Stillhet (kan være like meningsbærende som lyd)

**Romlige og gestuelle modaliteter**
- Kroppsspråk og mimikk (i video og film)
- Bevegelse og tempo i animasjoner
- Romlig plassering av elementer på en nettside`,
    },
    {
      id: 'mi-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Multimodal analyse av en nettavis-forside',
      problem: 'Analyser hvilke modaliteter som er i spill på forsiden av en nettavis som VG.no.',
      solution: `**Modaliteter på VG.no:**

**Verbalspråk:** Overskrifter, ingresser, bildetekster og lenketekster formidler innholdet. Store, fete overskrifter signaliserer viktige saker.

**Bilder:** Store bilder tiltrekker oppmerksomhet og formidler følelser. Bildet av en gråtende person signaliserer tragedie, mens et smilende kjendisfoto signaliserer underholdning.

**Farger:** Rød brukes for breaking news og viktige saker. Gul brukes for plusssaker (betalingsinnhold). Fargebruken styrer blikket og signaliserer prioritering.

**Typografi:** Størrelse og tykkelse på skrift viser hierarki. Hovedsaken har størst font, mindre saker har mindre skrift.

**Layout:** Viktigste saker øverst og størst. Sidekolonner med relatert innhold. Annonser er visuelt adskilt men følger lignende design.

**Video:** Autospillende videoklipp blant artiklene tiltrekker oppmerksomhet og formidler nyheter hurtig.

**Samspill:** Alle modalitetene samvirker for å skape en helhet der leseren raskt kan orientere seg, vurdere viktighet og velge hva de vil lese.`,
    },
    {
      id: 'mi-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-4-2-ex-1',
        number: '4.2.1',
        type: 'multiple-choice',
        task: 'Hva betyr multimodalitet?',
        options: [
          { id: 'a', text: 'At en tekst er publisert på flere plattformer samtidig', isCorrect: false },
          { id: 'b', text: 'At en tekst bruker flere uttrykksmåter (modaliteter) for å skape mening', isCorrect: true },
          { id: 'c', text: 'At en tekst henvender seg til flere målgrupper', isCorrect: false },
          { id: 'd', text: 'At en tekst er oversatt til flere språk', isCorrect: false },
        ],
        solution: 'Multimodalitet betyr at en tekst bruker flere uttrykksmåter (modaliteter) samtidig for å skape mening. Eksempler på modaliteter er verbalspråk, bilder, lyd, farger og typografi.',
      },
    },
    {
      id: 'mi-4-2-def-2',
      type: 'definition',
      title: 'Funksjonell tyngde',
      content: `**Funksjonell tyngde** refererer til hvilken modalitet som bærer mest mening i en bestemt tekst. I en avisartikkel har verbalspråket vanligvis størst funksjonell tyngde, mens bildet er illustrerende. I en musikkvideoer har bilde og lyd størst funksjonell tyngde, mens teksten er underordnet. Å identifisere funksjonell tyngde er viktig i multimodal analyse fordi det viser hvilken uttrykksmåte som er mest sentral for budskapet.`,
    },
    {
      id: 'mi-4-2-text-2',
      type: 'text',
      content: `### Multimodalt samspill

Når ulike modaliteter kombineres i en tekst, kan de forholde seg til hverandre på flere måter:

**Forsterkning (redundans)**
- Modalitetene sier det samme på ulike måter
- Eksempel: Et nyhetsbilde av en flom forsterker teksten som beskriver ødeleggelsene
- Budskapet blir tydeligere og sterkere

**Utfylling (komplementaritet)**
- Modalitetene bidrar med ulik informasjon som til sammen skaper helhet
- Eksempel: En artikkel forteller hvem og hva, mens bildet viser hvordan det ser ut
- Helheten er mer enn summen av delene

**Utdyping (elaborering)**
- En modalitet forklarer eller utdyper en annen
- Eksempel: Bildetekst som forklarer konteksten til et foto
- Den ene modaliteten gir tilleggsinformasjon

**Kontrast (motsetning)**
- Modalitetene motsier hverandre bevisst
- Eksempel: En reklame som viser glade mennesker mens teksten forteller om alvorlige bivirkninger
- Kan skape ironi, humor eller ubehag`,
    },
    {
      id: 'mi-4-2-example-2',
      type: 'example',
      title: 'Eksempel: Multimodalt samspill i reklame',
      content: `**Reklamefilm for et bilfirma:**

**Bilde:** Vakre naturlandskap, solnedgang, åpen vei. Bilen kjører smidig gjennom landskapet.
**Musikk:** Rolig, stemningsfull pianomelodi som gir følelse av frihet og ro.
**Tekst (voiceover):** «Frihet er ikke et sted. Frihet er en følelse.»
**Logo og tekst på skjermen:** Bilmerket og modellnavnet vises til slutt.

**Analyse av samspillet:**
- **Bilde + musikk = forsterkning:** Begge skaper en stemning av frihet og ro
- **Voiceover + bilde = utfylling:** Teksten gir ord til følelsen som bildet viser
- **Funksjonell tyngde:** Bildet og musikken bærer mest mening - det er følelsen som selger, ikke tekniske spesifikasjoner
- **Koherens:** Alle modalitetene jobber i samme retning og skaper en helhetlig opplevelse av frihet og luksus

Reklamen handler egentlig ikke om bilen, men om en livsstil. Det multimodale samspillet gjør at budskapet oppleves som følelser, ikke fakta.`,
    },
    {
      id: 'mi-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-4-2-ex-2',
        number: '4.2.2',
        type: 'classic',
        task: 'Velg en reklame du har sett (TV, nett eller sosiale medier). Beskriv hvilke modaliteter som brukes, og analyser hvordan de samvirker. Hvilken modalitet har størst funksjonell tyngde?',
        hints: ['Tenk på bilde, lyd, tekst, farger og musikk', 'Vurder om modalitetene forsterker, utfyller eller motsier hverandre'],
        solution: 'Et godt svar identifiserer de ulike modalitetene i reklamen og analyserer samspillet mellom dem. For eksempel: I en Pepsi Max-reklame brukes raske klipp (bilde), energisk musikk (lyd), lite tekst og sterke farger. Bildet og musikken har størst funksjonell tyngde og skaper en følelse av energi og ungdommelighet. Modalitetene forsterker hverandre og skaper en helhetlig stemning som appellerer til målgruppen. Tekst brukes minimalt og har lav funksjonell tyngde.',
      },
    },
    {
      id: 'mi-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-4-2-ex-3',
        number: '4.2.3',
        type: 'multiple-choice',
        task: 'Hva betyr funksjonell tyngde i en multimodal tekst?',
        options: [
          { id: 'a', text: 'Hvor mye teksten veier i fysisk forstand', isCorrect: false },
          { id: 'b', text: 'Hvor mange modaliteter teksten bruker totalt', isCorrect: false },
          { id: 'c', text: 'Hvilken modalitet som bærer mest mening i teksten', isCorrect: true },
          { id: 'd', text: 'Hvor vanskelig teksten er å forstå', isCorrect: false },
        ],
        solution: 'Funksjonell tyngde refererer til hvilken modalitet som bærer mest mening i en bestemt tekst. I en avisartikkel har verbalspråket oftest størst funksjonell tyngde, mens i en musikkvideoer er det bilde og lyd som dominerer.',
      },
    },
    {
      id: 'mi-4-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Multimodalitet** betyr at en tekst bruker flere uttrykksmåter for å skape mening
- Viktige **modaliteter** inkluderer verbalspråk, bilder, lyd, farger, typografi og layout
- **Funksjonell tyngde** angir hvilken modalitet som bærer mest mening
- Modaliteter kan **forsterke**, **utfylle**, **utdype** eller **motsi** hverandre
- **Koherens** oppstår når modalitetene samvirker til en helhetlig mening`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-4-2-ex-4',
        number: '4.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign to medietekster som formidler samme nyhetshendelse: en nettavisartikkel og et TV-nyhetsinnslag. Analyser hvilke modaliteter som brukes i hver tekst, og diskuter hvordan de ulike modalitetsvalgene påvirker hvordan nyheten oppleves.',
        hints: ['Tenk på funksjonell tyngde i hver tekst', 'Vurder fordeler og ulemper med de ulike modalitetsvalgene'],
        solution: 'Nettavisartikkel: Verbalspråk (overskrift, ingress, brødtekst) har størst funksjonell tyngde. Bilder illustrerer. Typografi viser hierarki. Hyperlenker gir utdyping. Leseren styrer tempo selv. TV-nyhetsinnslag: Video og lyd (reporter, intervjuobjekter, miljølyd) har størst funksjonell tyngde. Seeren opplever hendelsen mer direkte gjennom bevegelige bilder og stemmer. Grafiske elementer og tekst på skjermen utfyller. Innslaget styrer tempo for seeren. Forskjell i opplevelse: TV-innslaget er mer emosjonelt og umiddelbart på grunn av video og lyd, mens nettartikkelen gir mer rom for detaljer, bakgrunn og leserens egen refleksjon.',
      },
    },
    {
      id: 'mi-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-4-2-ex-5',
        number: '4.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar begrepet koherens i en multimodal tekst. Gi et eksempel på en tekst med god koherens og et eksempel på en tekst der mangel på koherens skaper forvirring.',
        hints: ['Koherens handler om sammenheng mellom modalitetene', 'Tenk på tekster der bilde og tekst passer eller ikke passer sammen'],
        solution: 'Koherens i en multimodal tekst betyr at de ulike modalitetene samvirker til å skape en tydelig og sammenhengende mening. God koherens: En reiseblogg der teksten beskriver en vakker strand, bildet viser stranden, og fargene i layouten er blå og gul som strand og hav. Alle modalitetene jobber i samme retning. Mangel på koherens: En artikkel om miljøproblemer som bruker et fargerikt og lekent design med emojier og morsom font. Modalitetene sender motstridende signaler - innholdet er alvorlig, men designet signaliserer letthet. Leseren blir usikker på hvordan teksten skal tolkes.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.3: Tekstanalyse og semiotikk
// ============================================================================

export const CHAPTER_MEDIEINFO_1_4_3: TextbookChapter = {
  id: 'medieinfo-1-4-3',
  courseId: 'medieinfo-1',
  chapterNumber: '4.3',
  title: 'Tekstanalyse og semiotikk',
  description: 'Tegn, denotasjon, konnotasjon og sentrale semiotiske tenkere. Du lærer hvordan medietekster skaper mening gjennom tegn, og bruker begreper fra Saussure og Barthes til å analysere medieinnhold.',
  estimatedMinutes: 24,
  competenceGoals: [
    'bruke sentrale begreper fra semiotikk og visuell kommunikasjon i analyse av medietekster',
  ],
  keyTerms: [
    { term: 'Semiotikk', definition: 'Læren om tegn og tegnbruk. Semiotikk undersøker hvordan tegn skaper mening i kommunikasjon, og brukes til å analysere alt fra språk og bilder til reklame og film.' },
    { term: 'Tegn', definition: 'I semiotikken er et tegn noe som står for noe annet. Et tegn består av et uttrykk (det vi ser, hører eller leser) og et innhold (det uttrykket representerer eller betyr).' },
    { term: 'Denotasjon', definition: 'Den bokstavelige, direkte betydningen av et tegn. Det vi faktisk ser eller hører, uten tolkning. For eksempel: Et foto av en rose denoterer en blomst.' },
    { term: 'Konnotasjon', definition: 'De assosiasjoner, følelser og tilleggsbetydninger et tegn gir utover den bokstavelige betydningen. For eksempel: En rose konnoterer kjærlighet, romantikk eller skjønnhet.' },
    { term: 'Myte (Barthes)', definition: 'Ifølge Roland Barthes er en myte en kulturelt betinget forståelse som fremstilles som naturlig og selvfølgelig. Myter er konnotasjoner som har blitt så innarbeidet at de oppleves som sannheter.' },
  ],
  content: [
    {
      id: 'mi-4-3-intro',
      type: 'text',
      content: `## Hvordan medietekster skaper mening

Medietekster er fulle av tegn som skaper mening: ord, bilder, farger, lyder og symboler. Men hvordan oppstår denne meningen? Og hvorfor kan det samme bildet bety ulike ting for ulike mennesker? *Semiotikken* gir oss verktøy for å svare på slike spørsmål.

I dette kapittelet skal du lære:
- Hva semiotikk er og hvordan det brukes i medieanalyse
- Hva et tegn er ifølge Saussure
- Forskjellen mellom denotasjon og konnotasjon
- Roland Barthes' teori om myter i mediene
- Hvordan du utfører en semiotisk analyse`,
    },
    {
      id: 'mi-4-3-def-1',
      type: 'definition',
      title: 'Semiotikk',
      content: `**Semiotikk** er læren om tegn og tegnbruk. Begrepet kommer av det greske ordet *semeion*, som betyr «tegn». Semiotikken ble grunnlagt av den sveitsiske lingvisten **Ferdinand de Saussure** (1857-1913) og den amerikanske filosofen **Charles Sanders Peirce** (1839-1914). I medieanalyse brukes semiotikk til å undersøke hvordan tekster skaper mening gjennom tegn - for eksempel hvordan en reklame bruker bilder, farger og ord for å formidle et budskap.`,
    },
    {
      id: 'mi-4-3-text-1',
      type: 'text',
      content: `### Saussures tegnmodell

Ferdinand de Saussure beskrev tegnet som bestående av to deler:

**Uttrykk (signifikant)**
- Det vi faktisk ser, hører eller leser
- Den konkrete, sansbare siden av tegnet
- Eksempel: Lydmønsteret eller bokstavene i ordet «hund»

**Innhold (signifikat)**
- Det uttrykket representerer, tanken eller ideen
- Den mentale forestillingen vi knytter til uttrykket
- Eksempel: Vår forestilling om hva en hund er

**Vilkårlig forbindelse**
Saussure påpekte at forbindelsen mellom uttrykk og innhold er *vilkårlig* (arbitrær). Det er ingen naturlig grunn til at nettopp lydene i «hund» betyr det dyret vi kaller hund. På engelsk heter det «dog», på fransk «chien». Forbindelsen er en kulturell konvensjon.

**Betydning for medieanalyse:**
Fordi tegn er konvensjonelle, kan de også endres og manipuleres. Mediene bruker dette aktivt: En rød farge kan bety fare, kjærlighet eller energi - avhengig av konteksten.`,
    },
    {
      id: 'mi-4-3-example-1',
      type: 'example',
      title: 'Eksempel: Denotasjon og konnotasjon i et reklamebilde',
      problem: 'Et reklamebilde viser en kvinne i hvit kjole som går barbeint på en strand ved solnedgang. Analyser bildet med begrepene denotasjon og konnotasjon.',
      solution: `**Denotasjon (det vi ser):**
- En kvinne i en hvit kjole
- Hun går barbeint på en sandstrand
- Solen går ned i bakgrunnen
- Havet er rolig

**Konnotasjon (det vi tolker):**
- **Hvit kjole:** Renhet, uskyld, frihet, romantikk
- **Barbeint:** Frihet, naturlighet, avslappet livsstil
- **Strand ved solnedgang:** Romantikk, ferie, luksus, drøm
- **Rolig hav:** Fred, harmoni, balanse

**Samlet konnotasjon:** Bildet konnoterer en drøm om frihet, skjønnhet og luksus. Dersom dette er en reklame for parfyme, bygger bildet opp en følelse av at produktet representerer denne drømmen.

**Poeng:** Denotasjonen er den samme for alle som ser bildet. Konnotasjonene kan variere mellom kulturer og individer, men mange konnotasjoner er kulturelt delte.`,
    },
    {
      id: 'mi-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-4-3-ex-1',
        number: '4.3.1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom denotasjon og konnotasjon?',
        options: [
          { id: 'a', text: 'Denotasjon er den positive betydningen, konnotasjon er den negative', isCorrect: false },
          { id: 'b', text: 'Denotasjon er den bokstavelige betydningen, konnotasjon er tilleggsbetydningene og assosiasjonene', isCorrect: true },
          { id: 'c', text: 'Denotasjon er skriftlig kommunikasjon, konnotasjon er muntlig', isCorrect: false },
          { id: 'd', text: 'Denotasjon er fakta, konnotasjon er løgn', isCorrect: false },
        ],
        solution: 'Denotasjon er den bokstavelige, direkte betydningen av et tegn (det vi faktisk ser). Konnotasjon er de assosiasjonene, følelsene og tilleggsbetydningene tegnet gir utover den bokstavelige betydningen.',
      },
    },
    {
      id: 'mi-4-3-def-2',
      type: 'definition',
      title: 'Myte (Roland Barthes)',
      content: `Den franske semiotikeren **Roland Barthes** (1915-1980) utviklet begrepet **myte** i boken *Mytologier* (1957). Ifølge Barthes er en myte en konnotasjon som har blitt så innarbeidet i en kultur at den oppleves som naturlig og selvfølgelig, selv om den er kulturelt skapt. Myter «naturaliserer» bestemte verdier og oppfatninger. Mediene spiller en sentral rolle i å skape og opprettholde myter.`,
    },
    {
      id: 'mi-4-3-text-2',
      type: 'text',
      content: `### Barthes og myter i mediene

Roland Barthes var opptatt av hvordan mediene skaper «myter» - kulturelle forestillinger som fremstilles som naturlige.

**Hvordan myter fungerer:**
1. Et tegn har en denotasjon (bokstavelig betydning)
2. Tegnet får konnotasjoner (tilleggsbetydninger)
3. Konnotasjonene blir så innarbeidet at de oppleves som «naturlige» = myte

**Eksempler på myter i mediene:**
- **Myten om «det gode liv»:** Reklame viser at lykke kommer gjennom konsum - ny bil, fint hus, dyre klær. Myten: Materielle ting = lykke.
- **Myten om den «perfekte kroppen»:** Medier viser gjentatte ganger slanke, veltrente kropper som idealet. Myten: Det finnes én riktig kroppstype.
- **Myten om ungdom:** Ungdom fremstilles som energisk, teknologikyndig og fremtidsrettet. Myten: Ungdom er alltid den beste livsfasen.

**Barthes poeng:** Mytene er ikke «usanne», men de er kulturelt skapte. Ved å analysere myter kan vi avsløre hvilke verdier og maktstrukturer som ligger bak medietekster. Når vi oppdager at noe vi tar for gitt er en kulturell konstruksjon, får vi en mer kritisk forståelse av mediene.`,
    },
    {
      id: 'mi-4-3-example-2',
      type: 'example',
      title: 'Eksempel: Semiotisk analyse av en reklame for sportsutstyr',
      content: `**Reklamen viser:** En ung mann som løper alene i regnvær på en øde vei, med teksten «No excuses».

**Denotasjon:** En mann som løper utendørs i dårlig vær. Tekst: «Ingen unnskyldninger».

**Konnotasjon:**
- **Regnvær:** Motstand, utfordringer som overvinnes
- **Alene:** Selvstendighet, individuell styrke
- **Løping:** Disiplin, viljestyrke, helse
- **«No excuses»:** Hardhet, ansvar for eget liv, ingen svakhet

**Myte (Barthes):**
Reklamen bygger på myten om «den sterke individualisten» - forestillingen om at suksess handler om viljestyrke og personlig innsats. Myten naturaliserer ideen om at alle kan lykkes bare de prøver hardt nok, og nedtoner betydningen av strukturelle forutsetninger som økonomi, helse og sosial bakgrunn.

**Kritisk refleksjon:** Reklamen selger ikke bare sportsutstyr, men en livsstil og en verdensforståelse. Semiotisk analyse hjelper oss å se forbi den umiddelbare opplevelsen og forstå de dypere budskapene.`,
    },
    {
      id: 'mi-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-4-3-ex-2',
        number: '4.3.2',
        type: 'classic',
        task: 'Velg en reklame (trykt, digital eller film). Utfør en semiotisk analyse der du beskriver denotasjon, konnotasjoner og eventuell myte. Bruk begrepene fra kapittelet.',
        hints: ['Start med å beskrive det du ser (denotasjon)', 'Deretter: Hva assosierer du med det du ser (konnotasjon)?', 'Finnes det en underliggende myte?'],
        solution: 'Et godt svar følger stegene: 1) Denotasjon: Beskriv det du ser, hører eller leser bokstavelig. 2) Konnotasjon: Analyser hvilke assosiasjoner og tilleggsbetydninger elementene gir. 3) Myte: Vurder om reklamen bygger på en kulturelt skapt forestilling som fremstilles som naturlig. For eksempel: En parfymereklame som viser en glamorøs kvinne i en storby. Denotasjon: Kvinne, by, parfymeflaske. Konnotasjon: Luksus, eleganse, makt, frihet. Myte: Skjønnhet og suksess er knyttet til forbruk av luksusprodukter.',
      },
    },
    {
      id: 'mi-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-4-3-ex-3',
        number: '4.3.3',
        type: 'multiple-choice',
        task: 'Hva mente Roland Barthes med begrepet «myte»?',
        options: [
          { id: 'a', text: 'En usann historie fra gresk mytologi', isCorrect: false },
          { id: 'b', text: 'En reklameteknikk som brukes for å villede publikum', isCorrect: false },
          { id: 'c', text: 'En kulturelt betinget forståelse som fremstilles som naturlig og selvfølgelig', isCorrect: true },
          { id: 'd', text: 'En type sjanger innen journalistikk', isCorrect: false },
        ],
        solution: 'Barthes brukte begrepet «myte» om kulturelt betingede forståelser som har blitt så innarbeidet at de oppleves som naturlige og selvfølgelige. Myter naturaliserer bestemte verdier og oppfatninger.',
      },
    },
    {
      id: 'mi-4-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Semiotikk** er læren om tegn og tegnbruk i kommunikasjon
- Et **tegn** består av uttrykk (det vi sanser) og innhold (det det representerer)
- **Denotasjon** er den bokstavelige betydningen, **konnotasjon** er tilleggsbetydningene
- **Barthes** utviklet begrepet **myte** om konnotasjoner som fremstilles som naturlige
- Semiotisk analyse avslører skjulte verdier og maktstrukturer i medietekster`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-4-3-ex-4',
        number: '4.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Barthes hevdet at mediene skaper «myter» som får kulturelle konstruksjoner til å fremstå som naturlige. Gi to eksempler på myter du finner i dagens medier, og forklar hvordan de opprettholdes gjennom gjentakelse i ulike medietekster.',
        hints: ['Tenk på reklame, sosiale medier og underholdning', 'Hva tas for gitt i mediebildet?'],
        solution: 'Eksempel 1: Myten om at ungdommelighet er det høyeste idealet. Denne opprettholdes gjennom reklame for anti-aldringsprodukter, filmer med unge hovedpersoner, og sosiale medier-filtre som glatter huden. Myten naturaliserer ideen om at aldring er noe negativt. Eksempel 2: Myten om at teknologi løser alle problemer. Denne opprettholdes gjennom reklame for teknologiprodukter som lover bedre liv, nyhetsoppslag om teknologiske gjennombrudd, og underholdning som fremstiller teknologi som magi. Myten naturaliserer ideen om at fremskritt alltid er teknologisk, og nedtoner teknologiens bivirkninger. Begge mytene opprettholdes gjennom gjentagelse på tvers av medier og sjangre, slik at de blir «selvfølgelige».',
      },
    },
    {
      id: 'mi-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-4-3-ex-5',
        number: '4.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar Saussures skille mellom uttrykk (signifikant) og innhold (signifikat) med egne ord. Hvorfor er det viktig at forbindelsen mellom uttrykk og innhold er vilkårlig (arbitrær)?',
        hints: ['Tenk på hvorfor ulike språk har ulike ord for det samme', 'Hva betyr dette for medienes makt til å skape mening?'],
        solution: 'Uttrykk (signifikant) er den sansbare siden av tegnet - det vi hører, ser eller leser. Innhold (signifikat) er det tegnet representerer, altså forestillingen vi knytter til uttrykket. For eksempel: Bokstavene h-u-n-d (uttrykk) representerer vår forestilling om en hund (innhold). At forbindelsen er vilkårlig betyr at det ikke er noen naturlig sammenheng mellom lyden/bildet og det det representerer. Dette er viktig fordi det betyr at mening er kulturelt skapt, ikke naturgitt. For medieanalyse er dette sentralt: Mediene skaper mening gjennom konvensjoner, og disse konvensjonene kan endres, utfordres og manipuleres. Når vi forstår at mening er konstruert, kan vi stille kritiske spørsmål om hvorfor bestemte tegn brukes i bestemte sammenhenger.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.4: Visuell kommunikasjon
// ============================================================================

export const CHAPTER_MEDIEINFO_1_4_4: TextbookChapter = {
  id: 'medieinfo-1-4-4',
  courseId: 'medieinfo-1',
  chapterNumber: '4.4',
  title: 'Visuell kommunikasjon',
  description: 'Bildeutsnitt, komposisjon, farger og visuell retorikk. Du lærer å analysere visuell kommunikasjon i medier ved hjelp av begreper for bildeanalyse, og forstå hvordan visuelle valg påvirker budskapet.',
  estimatedMinutes: 22,
  competenceGoals: [
    'bruke sentrale begreper fra semiotikk og visuell kommunikasjon i analyse av medietekster',
  ],
  keyTerms: [
    { term: 'Bildeutsnitt', definition: 'Hvor mye av motivet som er med i bildet, fra totalbilde (viser hele miljøet) til ultranært (viser en liten detalj). Bildeutsnittet påvirker nærhet og avstand til det avbildede.' },
    { term: 'Komposisjon', definition: 'Hvordan elementene i et bilde er arrangert i flaten. Komposisjonen styrer blikket, skaper balanse eller spenning, og påvirker hvordan bildet oppleves.' },
    { term: 'Tredjedelsregelen', definition: 'En komposisjonsregel der bildeflaten deles i ni like deler med to horisontale og to vertikale linjer. Viktige elementer plasseres langs linjene eller i skjæringspunktene.' },
    { term: 'Visuell retorikk', definition: 'Hvordan visuelle virkemidler brukes for å overbevise, påvirke eller skape bestemte tolkninger. Farger, komposisjon, perspektiv og symboler er sentrale verktøy.' },
    { term: 'Kameraperspektiv', definition: 'Vinkelen kameraet eller betrakteren ser motivet fra. Froskeperspektiv (nedenfra) gir autoritet, fugleperspektiv (ovenfra) gir oversikt eller svakhet, normalperspektiv (øyehøyde) gir likeverdighet.' },
  ],
  content: [
    {
      id: 'mi-4-4-intro',
      type: 'text',
      content: `## Bilder som kommuniserer

Vi lever i en visuell kultur der bilder omgir oss overalt - i aviser, på nettet, i reklame, i sosiale medier og i film. Men bilder er aldri nøytrale. Hvert valg fotografen eller designeren gjør - utsnitt, vinkel, farger, komposisjon - påvirker hvordan vi tolker budskapet.

I dette kapittelet skal du lære:
- Hvordan bildeutsnitt og kameravinkler skaper ulike uttrykk
- Sentrale komposisjonsprinsipper
- Hvordan farger brukes i visuell kommunikasjon
- Hva visuell retorikk innebærer`,
    },
    {
      id: 'mi-4-4-def-1',
      type: 'definition',
      title: 'Bildeutsnitt',
      content: `**Bildeutsnitt** beskriver hvor mye av motivet som er med i bildet. De vanligste utsnittene er:
- **Totalbilde:** Viser hele scenen og miljøet. Brukes for å gi oversikt og kontekst.
- **Halvtotalt:** Viser personen fra knærne og opp. Gir en kombinasjon av person og miljø.
- **Halvnært:** Viser personen fra livet og opp. Standard for intervjuer og samtaler.
- **Nært (close-up):** Viser ansiktet. Skaper nærhet og avslører følelser.
- **Ultranært (extreme close-up):** Viser en detalj (øyne, hender). Skaper intensitet og fokus.
Jo nærmere utsnittet er, desto sterkere nærhet og emosjonell forbindelse skapes mellom betrakter og motiv.`,
    },
    {
      id: 'mi-4-4-text-1',
      type: 'text',
      content: `### Kameravinkler og perspektiv

Vinkelen vi ser motivet fra påvirker hvordan vi tolker det:

**Normalperspektiv (øyehøyde)**
- Kameraet er i øyehøyde med motivet
- Skaper likeverdighet og nøytralitet
- Brukes i de fleste intervjuer og nyhetssendinger

**Froskeperspektiv (lav vinkel)**
- Kameraet ser opp på motivet
- Gjør motivet større og mektigere
- Brukes i reklame for å gi produkter og personer autoritet
- Politikere fotograferes ofte i froskeperspektiv

**Fugleperspektiv (høy vinkel)**
- Kameraet ser ned på motivet
- Gjør motivet mindre og mer sårbart
- Kan gi oversikt og kontroll (overvåkning)
- Brukes i film for å vise sårbarhet eller underordning

**Skjevt perspektiv (dutch angle)**
- Kameraet holdes skjevt
- Skaper uro, kaos eller ubehag
- Brukes i thrillere og horror for å signalisere fare`,
    },
    {
      id: 'mi-4-4-example-1',
      type: 'example',
      title: 'Eksempel: Bildeanalyse av et pressefoto',
      problem: 'Et pressefoto viser en politiker som taler fra en talerstol. Bildet er tatt i froskeperspektiv, med nært utsnitt av politikerens ansikt og overkropp. Bakgrunnen er mørk, og et sterkt lys faller på ansiktet.',
      solution: `**Analyse av visuelle virkemidler:**

**Bildeutsnitt (nært):** Vi ser ansiktet og overkroppen tydelig. Dette skaper nærhet og gjør at vi fokuserer på personens uttrykk og følelser. Vi opplever en personlig forbindelse.

**Kameravinkel (froskeperspektiv):** Ved å se opp på politikeren fremstår vedkommende som mektig, autoritativ og stor. Det gir inntrykk av en sterk leder.

**Belysning:** Sterkt lys på ansiktet mot mørk bakgrunn skaper dramatikk og fokus. Det konnoterer viktighet og alvor. Teknikken minner om renessansemaleriets chiaroscuro.

**Samlet effekt:** Bildet fremstiller politikeren som en mektig, seriøs leder. Et bilde av den samme politikeren i fugleperspektiv, i totalbilde, med jevnt lys, ville gitt et helt annet inntrykk.

**Kritisk refleksjon:** Fotografens valg er aldri nøytrale. Bildet er en konstruksjon som påvirker vår oppfatning av politikeren.`,
    },
    {
      id: 'mi-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-4-4-ex-1',
        number: '4.4.1',
        type: 'multiple-choice',
        task: 'Hvilket kameraperspektiv gjør at motivet fremstår som mektig og autoritativt?',
        options: [
          { id: 'a', text: 'Fugleperspektiv (vi ser ned på motivet)', isCorrect: false },
          { id: 'b', text: 'Normalperspektiv (vi ser motivet i øyehøyde)', isCorrect: false },
          { id: 'c', text: 'Froskeperspektiv (vi ser opp på motivet)', isCorrect: true },
          { id: 'd', text: 'Skjevt perspektiv (kameraet holdes på skrå)', isCorrect: false },
        ],
        solution: 'Froskeperspektiv (lav vinkel) gjør at vi ser opp på motivet, noe som får det til å fremstå som stort, mektig og autoritativt. Denne teknikken brukes bevisst i medier for å påvirke vår oppfatning.',
      },
    },
    {
      id: 'mi-4-4-def-2',
      type: 'definition',
      title: 'Visuell retorikk',
      content: `**Visuell retorikk** handler om hvordan visuelle virkemidler brukes for å overbevise, påvirke eller skape bestemte tolkninger hos betrakteren. Begrepet bygger på den klassiske retorikken (etos, patos, logos) og anvender den på bilder, design og visuell kommunikasjon. Farger, komposisjon, bildeutsnitt, perspektiv og symboler er alle verktøy i visuell retorikk.`,
    },
    {
      id: 'mi-4-4-text-2',
      type: 'text',
      content: `### Farger i visuell kommunikasjon

Farger er et kraftig virkemiddel i medier fordi de skaper umiddelbare følelsesmessige reaksjoner:

**Varme farger (rødt, oransje, gult)**
- Rødt: Energi, kjærlighet, fare, kraft. Brukes i salgskampanjer og viktige varsler.
- Oransje: Varme, entusiasme, kreativitet. Brukes for å skape oppmerksomhet.
- Gult: Optimisme, glede, advarsel. Brukes for å tiltrekke blikket.

**Kalde farger (blått, grønt, fiolett)**
- Blått: Tillit, ro, profesjonalitet. Brukes av banker, teknologifirmaer og nyhetsmedier.
- Grønt: Natur, helse, miljø, vekst. Brukes av miljøorganisasjoner og helsemerker.
- Fiolett: Luksus, kreativitet, spiritualitet. Brukes for eksklusive merker.

**Nøytrale farger**
- Hvitt: Renhet, enkelhet, minimalisme.
- Svart: Eleganse, makt, mystikk.
- Grått: Nøytralitet, balanse, profesjonalitet.

**Viktig:** Fargers betydning varierer mellom kulturer. Hvitt symboliserer renhet og bryllup i vestlige kulturer, men sorg og død i mange asiatiske kulturer.`,
    },
    {
      id: 'mi-4-4-example-2',
      type: 'example',
      title: 'Eksempel: Visuell retorikk i logodesign',
      content: `**Sammenligning av to logoer:**

**Røde Kors:** Rød farge på hvit bakgrunn. Rødt konnoterer hjelp i nød (blod, hjertet) og handling. Hvitt konnoterer renhet, nøytralitet og medisin. Korssymbolet er universelt gjenkjennelig. Enkelt design = troverdighet og klarhet.

**Apple:** Et eplebilde med et bitt tatt ut, i sølv/grått eller svart. Formen er ren og minimalistisk. Fargevalget (sølv/grått) konnoterer teknologi, presisjon og modernitet. Det «bitte» i eplet gir assosiasjoner til kunnskap (Edens hage), nysgjerrighet og det å «ta en bit» av noe nytt.

**Visuell retorikk i begge tilfeller:**
Logoene bruker farger, former og symboler bevisst for å skape bestemte konnotasjoner. Røde Kors bruker patos (følelse av å hjelpe), mens Apple bruker etos (tillit til innovasjon og kvalitet). Ingen av logoene viser direkte hva organisasjonen gjør - meningen skapes gjennom konvensjoner og assosiasjoner.`,
    },
    {
      id: 'mi-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-4-4-ex-2',
        number: '4.4.2',
        type: 'classic',
        task: 'Analyser en logo eller et reklamebilde du kjenner godt. Beskriv hvilke visuelle virkemidler som brukes (farger, former, komposisjon, perspektiv) og hvilke konnotasjoner de skaper. Hvordan brukes visuell retorikk for å påvirke betrakteren?',
        hints: ['Start med å beskrive det du ser', 'Analyser farger, former og plassering', 'Hva er den ønskede effekten på betrakteren?'],
        solution: 'Et godt svar beskriver konkrete visuelle virkemidler og knytter dem til konnotasjoner og visuell retorikk. For eksempel: Nike-logoen (swoosh) er enkel, dynamisk og skråstilt. Den konnoterer bevegelse, fart og fremgang. Svart farge gir styrke og eleganse. Designet er minimalistisk, noe som signaliserer selvtillit og gjenkjennelighet. Den visuelle retorikken appellerer til etos (Nike som autoritet innen sport) og patos (følelsen av å prestere og overvinne hindringer).',
      },
    },
    {
      id: 'mi-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-4-4-ex-3',
        number: '4.4.3',
        type: 'multiple-choice',
        task: 'Hvorfor bruker mange banker og teknologifirmaer blått i sin visuelle profil?',
        options: [
          { id: 'a', text: 'Fordi blått er den billigste fargen å trykke', isCorrect: false },
          { id: 'b', text: 'Fordi blått konnoterer tillit, ro og profesjonalitet', isCorrect: true },
          { id: 'c', text: 'Fordi blått er den mest synlige fargen på skjerm', isCorrect: false },
          { id: 'd', text: 'Fordi det er lovpålagt for finansinstitusjoner', isCorrect: false },
        ],
        solution: 'Blått konnoterer tillit, ro og profesjonalitet. Banker og teknologifirmaer ønsker å fremstå som troverdige og pålitelige, og velger derfor blått bevisst som en del av sin visuelle retorikk.',
      },
    },
    {
      id: 'mi-4-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Bildeutsnitt** (totalt til ultranært) påvirker nærhet og emosjonell forbindelse
- **Kameravinkler** (froske-, fugle- og normalperspektiv) påvirker maktforhold
- **Komposisjon** styrer blikket og skaper balanse eller spenning
- **Farger** skaper umiddelbare følelsesmessige reaksjoner og konnotasjoner
- **Visuell retorikk** bruker alle disse virkemidlene bevisst for å påvirke betrakteren`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-4-4-ex-4',
        number: '4.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tenk deg at du skal lage en plakat for en veldedig organisasjon som jobber for barns rettigheter. Beskriv hvilke visuelle virkemidler du ville valgt (bildeutsnitt, perspektiv, farger, komposisjon) og begrunn valgene dine med begreper fra kapittelet.',
        hints: ['Tenk på hva som skaper empati og handling', 'Vurder bruk av patos i visuell retorikk'],
        solution: 'Forslag: Bildeutsnitt: Nært bilde av et barns ansikt med åpne, ærlige øyne - skaper nærhet og empati. Perspektiv: Normalperspektiv (øyehøyde med barnet) - skaper likeverdighet og respekt, unngår å gjøre barnet sårbart (fugleperspektiv) eller idealisert (froskeperspektiv). Farger: Varme farger (oransje/gult) for håp og optimisme, kombinert med hvitt for renhet og uskyld. Unngår mørke farger som kan virke deprimerende. Komposisjon: Barnets ansikt plassert etter tredjedelsregelen for dynamisk komposisjon. Tekst med tydelig CTA (call to action) i kontrast. Visuell retorikk: Plakaten bruker patos gjennom det nære bildet av barnet for å vekke empati, og etos gjennom organisasjonens logo for troverdighet.',
      },
    },
    {
      id: 'mi-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-4-4-ex-5',
        number: '4.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter hvorfor fargers betydning varierer mellom kulturer. Gi to konkrete eksempler der en farge har ulik konnotasjon i ulike kulturer, og vurder hva dette betyr for internasjonal medieproduksjon.',
        hints: ['Tenk på farger som hvitt, rødt eller grønt', 'Hva må medieprodusentene tenke på?'],
        solution: 'Eksempel 1: Hvitt betyr renhet og bryllup i vestlige kulturer, men sorg og begravelse i mange asiatiske kulturer (Kina, India, Japan). En internasjonal reklame med hvit brudekjole ville fungere annerledes i ulike markeder. Eksempel 2: Rødt betyr fare og stopp i vestlige kulturer, men lykke, velstand og feiring i kinesisk kultur (brukes i bryllup og nyttårsfeiring). En bedrift som bruker rødt i emballasje vil kommunisere ulike ting avhengig av marked. For internasjonal medieproduksjon betyr dette at fargevalg må tilpasses målgruppen. Globale merker som Coca-Cola og McDonalds tilpasser farger og design i ulike markeder. Kulturell kompetanse er avgjørende for effektiv visuell kommunikasjon.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.5: Retorikk i medier
// ============================================================================

export const CHAPTER_MEDIEINFO_1_4_5: TextbookChapter = {
  id: 'medieinfo-1-4-5',
  courseId: 'medieinfo-1',
  chapterNumber: '4.5',
  title: 'Retorikk i medier',
  description: 'Etos, patos og logos i medietekster, og retorisk analyse av medieinnhold. Du lærer hvordan mediene bruker retoriske virkemidler for å overbevise, og hvordan du kan gjennomføre en retorisk analyse.',
  estimatedMinutes: 24,
  competenceGoals: [
    'analysere og vurdere ulike medietekster med utgangspunkt i sjanger, modalitet og retorikk',
  ],
  keyTerms: [
    { term: 'Retorikk', definition: 'Kunsten å overbevise gjennom kommunikasjon. Retorikken ble grunnlagt i antikkens Hellas og er like aktuell i dagens medier. Den handler om hvordan budskap formes for å påvirke mottakerne.' },
    { term: 'Etos', definition: 'Avsenderens troverdighet og karakter. Etos handler om tillit: Vi lar oss lettere overbevise av noen vi oppfatter som troverdige, kompetente og ærlige.' },
    { term: 'Patos', definition: 'Appell til mottakerens følelser. Patos brukes for å vekke engasjement, empati, frykt, glede eller sinne hos publikum. Patos er et kraftig virkemiddel i medier.' },
    { term: 'Logos', definition: 'Appell til fornuften gjennom logiske argumenter, fakta, statistikk og bevis. Logos bygger på saklig argumentasjon og rasjonell overbevisning.' },
    { term: 'Kairos', definition: 'Det rette øyeblikket for kommunikasjon. Kairos handler om timing: Når et budskap fremføres, og i hvilken kontekst, påvirker hvor overbevisende det er.' },
  ],
  content: [
    {
      id: 'mi-4-5-intro',
      type: 'text',
      content: `## Overbevisningens kunst i mediene

Retorikken ble utviklet i antikkens Hellas for over 2400 år siden, men er like aktuell i dag. Mediene omgir oss med budskap som forsøker å overbevise: reklame vil selge, politikere vil ha stemmer, organisasjoner vil ha oppmerksomhet, og influencere vil påvirke. Ved å forstå retorikk kan vi gjennomskue virkemidlene og ta mer bevisste valg.

I dette kapittelet skal du lære:
- Hva retorikk er og hvordan det brukes i medier
- De tre appellformene: etos, patos og logos
- Hva kairos betyr for medieretorikk
- Hvordan du gjennomfører en retorisk analyse av medietekster`,
    },
    {
      id: 'mi-4-5-def-1',
      type: 'definition',
      title: 'Retorikk',
      content: `**Retorikk** er kunsten å overbevise gjennom kommunikasjon. Den greske filosofen **Aristoteles** (384-322 f.Kr.) definerte retorikk som «evnen til å se hvilke muligheter for overbevisning som finnes i enhver situasjon». Han identifiserte tre hovedformer for appell: etos (troverdighet), patos (følelser) og logos (fornuft). I mediesammenheng bruker vi retorikk til å analysere hvordan medietekster forsøker å påvirke oss.`,
    },
    {
      id: 'mi-4-5-text-1',
      type: 'text',
      content: `### Etos - troverdighet og tillit

**Etos** handler om avsenderens troverdighet. Vi lar oss lettere overbevise av noen vi stoler på. I mediene bygges etos på flere måter:

**Kompetanse**
- Eksperter siteres i nyhetsartikler for å gi troverdighet
- Fagfolk brukes som programledere i dokumentarer
- Kilder med relevant erfaring vektlegges

**Karakter og autentisitet**
- Journalister bygger etos gjennom årelang pålitelig dekning
- Influencere bygger etos gjennom ærlighet og personlig stil
- Merkevarers omdømme er en form for etos

**Velvilje overfor mottakeren**
- Medier som viser at de bryr seg om lesernes interesser
- Organisasjoner som demonstrerer at de handler uegennyttig
- Avsendere som viser ydmykhet og lydhørhet

**Etos i sosiale medier:**
I sosiale medier er etos knyttet til følgertall, verifiserte kontoer, samarbeid med kjente merker, og konsistent innhold over tid. Men høyt følgertall er ikke automatisk lik høy etos - troverdighet må bygges gjennom handling.`,
    },
    {
      id: 'mi-4-5-example-1',
      type: 'example',
      title: 'Eksempel: Etos, patos og logos i en valgkampanje',
      problem: 'En politisk valgkampanjevideo viser en politiker som besøker en barnehage, klemmer barn, snakker med foreldre, og deretter legger frem statistikk om barnefattigdom. Analyser bruken av etos, patos og logos.',
      solution: `**Etos (troverdighet):**
Politikeren viser at hun bryr seg ved å besøke barnehagen personlig. Hun fremstår som engasjert, jordnær og tilgjengelig. Samtalene med foreldre viser lydhørhet. Klærne er uformelle men ryddige - signaliserer både folkelig nærhet og profesjonalitet.

**Patos (følelser):**
Bildene av barn vekker sterke følelser - omsorg, beskyttelsesinstinkt, empati. Klemmene mellom politikeren og barna skaper varme. Foreldrenes bekymrede ansikter vekker medfølelse. Musikken er varm men alvorlig.

**Logos (fornuft):**
Statistikken om barnefattigdom gir saklige argumenter for politikerens standpunkt. Tallene viser at problemet er reelt og målbart. Forslag til løsninger presenteres logisk.

**Samspill:** Patos vekker følelsene, logos gir de rasjonelle begrunnelsene, og etos gjør at vi tror på avsenderen. De tre appellformene forsterker hverandre og skaper en helhetlig overbevisende tekst.`,
    },
    {
      id: 'mi-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'mi-4-5-ex-1',
        number: '4.5.1',
        type: 'multiple-choice',
        task: 'Hva er patos i retorisk sammenheng?',
        options: [
          { id: 'a', text: 'Appell til mottakerens fornuft gjennom fakta og logikk', isCorrect: false },
          { id: 'b', text: 'Avsenderens troverdighet og kompetanse', isCorrect: false },
          { id: 'c', text: 'Appell til mottakerens følelser', isCorrect: true },
          { id: 'd', text: 'Timing og kontekst for budskapet', isCorrect: false },
        ],
        solution: 'Patos er appell til mottakerens følelser. I medier brukes patos for å vekke engasjement, empati, frykt, glede eller sinne hos publikum. Det er et av de mest brukte retoriske virkemidlene i reklame og politikk.',
      },
    },
    {
      id: 'mi-4-5-def-2',
      type: 'definition',
      title: 'Kairos',
      content: `**Kairos** betyr det rette øyeblikket for kommunikasjon. Begrepet handler om timing og kontekst: Når et budskap fremføres, og i hvilken situasjon, påvirker hvor overbevisende det er. I mediesammenheng er kairos avgjørende - en reklame for varme klær treffer bedre om høsten, en politisk uttalelse har mest effekt rett etter en krise, og en innsamlingsaksjon fungerer best rett etter en naturkatastrofe.`,
    },
    {
      id: 'mi-4-5-text-2',
      type: 'text',
      content: `### Retorisk analyse av medietekster

For å gjennomføre en retorisk analyse kan du bruke følgende modell:

**1. Den retoriske situasjonen**
- Hvem er avsenderen? (avis, reklame, organisasjon, politiker)
- Hvem er målgruppen? (alder, interesser, verdier)
- Hva er budskapet? (hva vil avsenderen oppnå)
- Hva er konteksten? (tid, sted, medieplattform)

**2. Appellformene**
- Etos: Hvordan bygger avsenderen troverdighet?
- Patos: Hvilke følelser forsøker teksten å vekke?
- Logos: Hvilke fakta og logiske argumenter brukes?
- Kairos: Er timingen og konteksten utnyttet?

**3. Virkemidler**
- Språklige virkemidler: Metaforer, gjentakelser, retoriske spørsmål
- Visuelle virkemidler: Bilder, farger, komposisjon, typografi
- Auditive virkemidler: Musikk, lydeffekter, stemmekvalitet
- Multimodalt samspill: Hvordan jobber virkemidlene sammen?

**4. Vurdering**
- Er teksten overbevisende? Hvorfor / hvorfor ikke?
- Hvilken appellform dominerer?
- Er det etiske problemstillinger (manipulasjon, villedning)?`,
    },
    {
      id: 'mi-4-5-example-2',
      type: 'example',
      title: 'Eksempel: Retorisk analyse av en innsamlingsaksjon',
      content: `**Tekst:** TV-aksjon for SOS Barnebyer. TV-innslaget viser barn i en flyktningleir, en norsk kjendis som besøker leiren, og en oppfordring til å sende penger.

**Den retoriske situasjonen:**
- Avsender: NRK og SOS Barnebyer
- Målgruppe: Hele det norske folket
- Budskap: Gi penger til barn i nød
- Kontekst: Nasjonal innsamlingsaksjon med stor mediedekning (kairos)

**Appellformene:**
- **Etos:** NRK har høy troverdighet som statskanal. SOS Barnebyer er en etablert organisasjon. Kjendisen gir synlighet og personlig engasjement.
- **Patos:** Bilder av barn i nød vekker sterke følelser. Kjendisens synlig berørte reaksjon forsterker empati. Musikken er varm og alvorlig.
- **Logos:** Statistikk om antall barn i nød. Konkrete eksempler på hva pengene brukes til. Informasjon om organisasjonens arbeid.

**Vurdering:** Innslaget bruker primært patos for å motivere til handling, forsterket av etos fra troverdige avsendere. Logos gir rasjonell begrunnelse. Kombinasjonen er svært effektiv. Etisk vurdering: Er det riktig å bruke barns lidelse til å vekke følelser?`,
    },
    {
      id: 'mi-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'mi-4-5-ex-2',
        number: '4.5.2',
        type: 'classic',
        task: 'Velg en medietekst (reklame, politisk tale, kronikk eller liknende) og gjennomfør en retorisk analyse. Bruk modellen fra kapittelet og identifiser bruk av etos, patos og logos.',
        hints: ['Start med den retoriske situasjonen', 'Analyser alle tre appellformene', 'Vurder hvilken som dominerer og om teksten er overbevisende'],
        solution: 'Et godt svar følger modellen: 1) Retorisk situasjon: Avsender, målgruppe, budskap og kontekst. 2) Appellformer: Identifiser konkrete eksempler på etos (hvordan bygges troverdighet), patos (hvilke følelser vekkes) og logos (hvilke fakta og argumenter brukes). 3) Virkemidler: Beskriv språklige, visuelle eller auditive virkemidler. 4) Vurdering: Er teksten overbevisende? Hvilken appellform dominerer? For eksempel: En Greenpeace-kampanje bruker sterkt patos (bilder av forurensning) og etos (organisasjonens omdømme) for å overbevise, mens logos (forskningsdata) underbygger budskapet.',
      },
    },
    {
      id: 'mi-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'mi-4-5-ex-3',
        number: '4.5.3',
        type: 'multiple-choice',
        task: 'Hva betyr kairos i retorisk sammenheng?',
        options: [
          { id: 'a', text: 'At avsenderens utseende påvirker troverdigheten', isCorrect: false },
          { id: 'b', text: 'At budskapet må gjentas mange ganger for å virke', isCorrect: false },
          { id: 'c', text: 'At tidspunkt og kontekst påvirker hvor overbevisende budskapet er', isCorrect: true },
          { id: 'd', text: 'At publikum alltid er enige med avsenderen', isCorrect: false },
        ],
        solution: 'Kairos handler om at tidspunkt og kontekst påvirker hvor overbevisende et budskap er. Det rette budskapet til rett tid i rett sammenheng er mer virkningsfullt enn det samme budskapet til feil tid.',
      },
    },
    {
      id: 'mi-4-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Retorikk** er kunsten å overbevise gjennom kommunikasjon
- **Etos** er appell til troverdighet, **patos** er appell til følelser, **logos** er appell til fornuft
- **Kairos** handler om riktig timing og kontekst for budskapet
- En **retorisk analyse** undersøker situasjon, appellformer, virkemidler og effekt
- Retorisk bevissthet gir bedre forståelse av hvordan medier forsøker å påvirke oss`,
    },
    // --- Samleoppgaver ---
    {
      id: 'mi-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'mi-4-5-ex-4',
        number: '4.5.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign hvordan etos, patos og logos brukes i to ulike medietekster: en reklame og en nyhetsartikkel om samme tema (for eksempel klimaendringer). Hvilke forskjeller finner du, og hva skyldes de?',
        hints: ['Tenk på ulike formål og sjangerkonvensjoner', 'Hvilken appellform dominerer i hver tekst?'],
        solution: 'Reklame (f.eks. for elbil): Patos dominerer - vakre naturbilder, følelsen av å gjøre noe godt. Etos bygges gjennom merkevarens omdømme og eventuelle miljøsertifiseringer. Logos brukes begrenset (kanskje noen utslippstall). Formålet er å selge, og følelser er mer effektivt enn fakta for dette. Nyhetsartikkel: Logos dominerer - vitenskapelige data, ekspertuttalelser, statistikk om temperaturøkning. Etos bygges gjennom journalistiske konvensjoner (kildekritikk, balansert dekning). Patos er mer dempet, men kan finnes i bilder av konsekvenser. Formålet er å informere, og troverdighet krever saklig argumentasjon. Forskjellene skyldes ulike formål (selge vs. informere), sjangerkrav (reklame vs. journalistikk) og målgrupper.',
      },
    },
    {
      id: 'mi-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'mi-4-5-ex-5',
        number: '4.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft i hvilken grad det er etisk forsvarlig å bruke sterke patosappeller i medietekster. Gi eksempler der patos brukes på en positiv måte og eksempler der patos kan være manipulativt.',
        hints: ['Tenk på grensen mellom overbevisning og manipulasjon', 'Vurder ulike mediekontekster'],
        solution: 'Positiv bruk av patos: Innsamlingsaksjoner som vekker empati for mennesker i nød og motiverer til hjelp. Dokumentarer som bruker følelser for å skape bevissthet om viktige samfunnsproblemer. Anti-mobbekampanjer som bruker personlige historier for å skape forståelse. Potensielt manipulativ bruk: Populistisk politikk som bruker frykt for å skape motstand mot innvandrere. Reklame som utnytter barns usikkerhet for å selge produkter. Falske nyheter som bruker sinne og opprørthet for å få delinger. Etisk vurdering: Patos er ikke i seg selv uetisk - følelser er en naturlig del av kommunikasjon. Grensen går ved om følelsene brukes for å fremme noe som er sant og godt for mottakeren, eller om de brukes for å villede, manipulere eller utnytte sårbarhet. Transparens om avsenderens formål er avgjørende.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const MEDIEINFO_1_DEL4_CHAPTERS = [
  CHAPTER_MEDIEINFO_1_4_1,
  CHAPTER_MEDIEINFO_1_4_2,
  CHAPTER_MEDIEINFO_1_4_3,
  CHAPTER_MEDIEINFO_1_4_4,
  CHAPTER_MEDIEINFO_1_4_5,
];
