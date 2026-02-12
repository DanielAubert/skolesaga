/* eslint-disable */
// @ts-nocheck
/**
 * Informasjonsteknologi og medieproduksjon VG1 - Del 5: Video- og lydproduksjon
 *
 * Kapittel 5.1-5.7: Video- og lydproduksjon
 * Dekker LK20 kompetansemål for videoproduksjon, kamerateknikk, redigering, lyd, animasjon og podcast
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Innføring i videoproduksjon
// ============================================================================

export const CHAPTER_IM_VG1_5_1: TextbookChapter = {
  id: 'im-vg1-5-1',
  courseId: 'im-vg1',
  chapterNumber: '5.1',
  title: 'Innføring i videoproduksjon',
  description: 'Bli kjent med videoproduksjonens faser fra idé til ferdig produkt, inkludert preproduksjon, opptak og postproduksjon.',
  estimatedMinutes: 50,
  competenceGoals: [
    'kjenne til og anvende bransjefaglige metoder og relevant utstyr i produksjon',
    'bruke teknikker for idéutvikling, kreativitet og historiefortelling i produksjon',
  ],
  content: [
    {
      id: 'im-5-1-intro',
      type: 'text',
      content: `## Innføring i videoproduksjon

Video er et av de kraftigste mediene for kommunikasjon. Fra YouTube-videoer til spillefilmer, fra reklame til dokumentarer - videoproduksjon er overalt. Å forstå produksjonsprosessen er avgjørende for å skape profesjonelt innhold, uansett om du filmer med en mobiltelefon eller et filmkamera.

I dette kapittelet skal du lære:
- De tre fasene i videoproduksjon: preproduksjon, produksjon og postproduksjon
- Hvordan skrive manus og lage storyboard
- Vanlige videosjangre og formater
- Roller og ansvarsfordeling i et produksjonsteam`,
    },
    {
      id: 'im-5-1-def-1',
      type: 'definition',
      title: 'Videoproduksjon',
      content: `**Videoproduksjon** er den samlede prosessen med å skape videoinnhold, fra den første ideen til det ferdige produktet er distribuert. Prosessen deles tradisjonelt inn i tre hovedfaser: preproduksjon, produksjon og postproduksjon.`,
    },
    {
      id: 'im-5-1-text-1',
      type: 'text',
      content: `### De tre produksjonsfasene

**1. Preproduksjon** er alt som skjer før kameraet begynner å rulle:
- **Idéutvikling**: Hva er budskapet? Hvem er målgruppen?
- **Manus**: Skriftlig plan for handlingen, dialoger og scener
- **Storyboard**: Visuell plan med tegninger av hvert bilde
- **Produksjonsplan**: Tidsplan, lokasjoner, utstyr og bemanning
- **Rekvisitter og kostymer**: Alt som trengs foran kameraet
- **Casting**: Valg av skuespillere eller intervjuobjekter

**2. Produksjon** er selve opptaksfasen:
- Filming av scener ifølge produksjonsplanen
- Lydopptak på sett
- Regissøren styrer kreative valg
- Fotograf styrer kamera og lys

**3. Postproduksjon** er arbeidet etter opptak:
- Klipping og redigering av råmateriale
- Fargekorrigering og grading
- Lydmiksing og musikklegging
- Titler, grafikk og effekter
- Eksport og distribusjon`,
    },
    {
      id: 'im-5-1-text-2',
      type: 'text',
      content: `### Manus og storyboard

**Manus** er det skriftlige grunnlaget for en videoproduksjon. Det beskriver:
- Scener med setting og tid
- Dialog og voiceover
- Handlingsbeskrivelser
- Kamerainstruksjoner (for mer detaljerte manus)

Et enkelt manusformat for korte videoer kan se slik ut:

SCENE 1 - INNVENDIG - KLASSEROM - DAG
En elev sitter foran en PC. Læreren kommer bort.
LÆRER: Hvordan går det med prosjektet?
ELEV: Jeg har akkurat begynt å redigere videoen.

**Storyboard** er en visuell plan der du tegner opp hvert bilde eller scene. Det trenger ikke være vakre tegninger - enkle strekfigurer er nok. Poenget er å planlegge:
- Bildeutsnitt og komposisjon
- Kamerabevegelser
- Overganger mellom scener
- Timing og varighet`,
    },
    {
      id: 'im-5-1-text-3',
      type: 'text',
      content: `### Sjangre og formater

**Dokumentar**: Forteller virkelige historier. Bruker intervjuer, arkivmateriale og observasjon.
**Reportasje**: Kortere journalistisk format som rapporterer om hendelser eller fenomener.
**Reklamefilm**: Kort, slagkraftig innhold som promoterer et produkt eller en tjeneste.
**Musikkvideo**: Visuell tolkning av en sang med kreativt uttrykk.
**Opplæringsvideo (tutorial)**: Viser steg-for-steg hvordan noe gjøres.
**Vlog**: Personlig videoformat der innholdsskaperen snakker direkte til kameraet.
**Kortfilm**: Fiksjonelt fortellende format, vanligvis under 30 minutter.

### Roller i produksjonsteamet

- **Produsent**: Ansvarlig for økonomi, planlegging og gjennomføring
- **Regissør**: Kreativ leder som styrer den kunstneriske visjonen
- **Fotograf/kameraoperatør**: Ansvarlig for kamera og bildekvalitet
- **Lydtekniker**: Ansvarlig for lydopptak under filming
- **Klipper/redigerer**: Setter sammen råmaterialet i postproduksjon
- **Manusforfattere**: Skriver manus og dialog`,
    },
    {
      id: 'im-5-1-example-1',
      type: 'example',
      title: 'Planlegge en kort opplæringsvideo',
      content: `La oss planlegge en 3-minutters opplæringsvideo om "Slik bruker du skolens 3D-printer":

**Preproduksjon:**
- Målgruppe: Elever som aldri har brukt 3D-printeren
- Manus: Innledning (15 sek), 5 steg demonstrert (2 min), oppsummering (45 sek)
- Storyboard: Tegn opp hvert steg med bildeutsnitt
- Utstyr: Mobiltelefon på stativ, godt lys, ekstern mikrofon

**Produksjon:**
- Film hvert steg separat for enkel redigering
- Bruk nærbilder av skjermen og hendene under demonstrasjon
- Ta opp ekstra klipp (B-roll) av 3D-printeren i aksjon

**Postproduksjon:**
- Klipp sammen i logisk rekkefølge
- Legg på voiceover eller tekstplakater
- Legg til baklengslyd
- Eksporter i 1080p for YouTube`,
    },
    {
      id: 'im-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-5-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken av de tre produksjonsfasene inkluderer klipping, fargekorrigering og lydmiksing?',
        options: [
          'Preproduksjon',
          'Produksjon',
          'Postproduksjon',
          'Distribusjon',
        ],
        correctAnswer: 2,
        solution: 'Postproduksjon er fasen etter opptak der klipping, fargekorrigering, lydmiksing, titler og eksport gjøres.',
      },
    },
    {
      id: 'im-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-5-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva et storyboard er, og hvorfor det er nyttig i videoproduksjon.',
        solution: 'Et storyboard er en visuell plan med tegninger av hvert bilde eller scene i en videoproduksjon. Det er nyttig fordi: 1) Det hjelper teamet å se den ferdige videoen før opptak starter. 2) Det planlegger bildeutsnitt, kameravinkler og overganger. 3) Det sparer tid på settet fordi alle vet hva som skal filmes. 4) Det avdekker problemer i historiefortellingen tidlig i prosessen.',
      },
    },
    {
      id: 'im-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-5-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er preproduksjon?',
        options: [
          'Selve filmingen av videoinnhold',
          'Redigering og klipping av video',
          'Planlegging og forberedelse før opptak, inkludert manus og storyboard',
          'Publisering av ferdig video',
        ],
        correctAnswer: 2,
        solution: 'Preproduksjon er alt planleggingsarbeidet som gjøres før kameraet begynner å rulle, inkludert idéutvikling, manusskriving, storyboard, produksjonsplan og casting.',
      },
    },
    {
      id: 'im-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-5-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv et kort manus (3-4 scener) for en 1-minutts informasjonsvideo om et valgfritt emne på skolen din.',
        solution: 'Eksempel - "Kantina vår": SCENE 1 - INNVENDIG - KANTINE - DAG: Oversiktsbilde av kantina. VOICEOVER: "Velkommen til kantina på Storhaug videregående." SCENE 2 - NÆRT - MATDISK: Kameraet panorerer over mattilbudet. VOICEOVER: "Her finner du alt fra salater til varme retter." SCENE 3 - HALVNÆRT - KASSEOMRÅDET: Elev betaler med kort. VOICEOVER: "Du betaler enkelt med elevkortet." SCENE 4 - TOTALT - SITTEOMRÅDET: Elever sitter og spiser. VOICEOVER: "Et sted for mat, venner og en god pause i hverdagen."',
      },
    },
    {
      id: 'im-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-5-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvem har det kreative hovedansvaret og styrer den kunstneriske visjonen i en videoproduksjon?',
        options: [
          'Produsenten',
          'Fotografen',
          'Regissøren',
          'Klipperen',
        ],
        correctAnswer: 2,
        solution: 'Regissøren er den kreative lederen som styrer den kunstneriske visjonen for produksjonen, inkludert skuespillerprestasjoner, kameravinkler og den overordnede fortellingen.',
      },
    },
    {
      id: 'im-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-5-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Planlegg preproduksjonen for en kort video (2-3 minutter) der du presenterer et hobbyprosjekt eller en interesse. Beskriv målgruppe, budskap, innhold, utstyr og en enkel produksjonsplan.',
        solution: 'Eksempel: Video om "Slik bygger jeg et terrarium." Målgruppe: Unge planteinteresserte. Budskap: Det er enkelt og gøy å lage eget terrarium. Innhold: Intro med ferdig resultat, materialer, steg-for-steg-bygging, tips og avslutning. Utstyr: Mobiltelefon på stativ, skrivebordslampe som lyskilde, ekstern mikrofon. Produksjonsplan: Dag 1 - Samle materialer og sette opp. Dag 2 - Filme steg-for-steg. Dag 3 - Redigere og legge på musikk.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Preproduksjon', definition: 'Planleggingsfasen før opptak, inkludert manus, storyboard og logistikk.' },
    { term: 'Postproduksjon', definition: 'Arbeidet etter opptak, inkludert klipping, fargekorrigering og lydmiksing.' },
    { term: 'Storyboard', definition: 'Visuell plan med tegninger av hvert bilde i en produksjon.' },
    { term: 'Manus', definition: 'Skriftlig plan som beskriver scener, dialog og handlinger.' },
    { term: 'B-roll', definition: 'Tilleggsopptak som brukes til å illustrere og berike hovedopptakene.' },
    { term: 'Voiceover', definition: 'Stemme som forteller over bilder uten å vises i bildet.' },
  ],
};

// ============================================================================
// Kapittel 5.2: Kamerateknikk og filming
// ============================================================================

export const CHAPTER_IM_VG1_5_2: TextbookChapter = {
  id: 'im-vg1-5-2',
  courseId: 'im-vg1',
  chapterNumber: '5.2',
  title: 'Kamerateknikk og filming',
  description: 'Lær om kamerainnstillinger, bildeutsnitt, kamerabevegelser og praktisk filming med ulike typer kamera.',
  estimatedMinutes: 60,
  competenceGoals: [
    'kjenne til og anvende bransjefaglige metoder og relevant utstyr i produksjon',
    'planlegge og gjennomføre sanntidsproduksjoner',
  ],
  content: [
    {
      id: 'im-5-2-intro',
      type: 'text',
      content: `## Kamerateknikk og filming

Kameraet er fotografens og filmmakerens viktigste verktøy. Å forstå kamerateknikk handler ikke bare om å trykke på opptaksknappen - det handler om å ta bevisste valg som støtter historien du forteller. Hvert bildeutsnitt, hver kamerabevegelse og hver lysinnstilling påvirker hvordan seeren opplever innholdet.

I dette kapittelet skal du lære:
- Kamerainnstillinger for video (oppløsning, bildefrekvens, hvitbalanse)
- Bildeutsnitt og kameravinkler
- Kamerabevegelser og deres fortellermessige effekt
- Praktiske tips for filming med mobil og kamera`,
    },
    {
      id: 'im-5-2-text-1',
      type: 'text',
      content: `### Kamerainnstillinger

**Oppløsning** bestemmer bildets skarphet:
- **1080p (Full HD)**: 1920x1080 piksler. Standard for de fleste produksjoner.
- **4K (Ultra HD)**: 3840x2160 piksler. Høyere detaljer, men krever mer lagringsplass og prosessorkraft.

**Bildefrekvens (FPS)** er antall bilder per sekund:
- **24 fps**: Filmstandard. Gir en "filmisk" følelse.
- **25 fps**: Europeisk TV-standard (PAL).
- **30 fps**: Vanlig for nettinnhold.
- **60 fps**: Jevn bevegelse, populært for sport og gaming. Kan brukes til slow motion ved avspilling i 30 fps.

**Hvitbalanse** sørger for at hvite farger ser hvite ut uavhengig av lyskilde. Ulike lyskilder har ulik fargetemperatur:
- Dagslys: ca. 5600K (blålig)
- Overskyet: ca. 6500K
- Glødelampe: ca. 3200K (gulaktig)
- Fluorescerende: ca. 4000K (grønnlig)`,
    },
    {
      id: 'im-5-2-text-2',
      type: 'text',
      content: `### Bildeutsnitt for video

**Totalbilde (VT)**: Viser hele scenen. Brukes til å etablere lokasjon og gi oversikt.
**Halvtotalt (HT)**: Viser personen fra knærne og opp. Gir kontekst om omgivelsene.
**Halvnært (HN)**: Fra midjen og opp. Standard for intervjuer og dialog.
**Nært (N)**: Ansiktet fyller mesteparten av bildet. Viser følelser og reaksjoner.
**Ultranært (UN)**: Ekstrem nærhet - øyne, hender, detaljer. Intenst og intimt.

**180-graders regelen**: I en samtale mellom to personer holder du kameraet på samme side av en tenkt linje mellom dem. Bryter du denne regelen, virker det som personene plutselig har byttet plass, noe som forvirrer seeren.

**Luft over hodet (headroom)**: La det være litt plass mellom toppen av hodet og billedrammen. For mye luft virker rart, for lite føles trangt.

**Blikk-rom (noseroom)**: Når en person ser til siden, gi dem ekstra plass i retningen de ser.`,
    },
    {
      id: 'im-5-2-text-3',
      type: 'text',
      content: `### Kamerabevegelser

**Pan (panorering)**: Kameraet roterer horisontalt, fra venstre til høyre eller omvendt. Brukes til å vise omgivelser eller følge en bevegelse.

**Tilt**: Kameraet roterer vertikalt, opp eller ned. Brukes til å avsløre en bygning fra bakken og opp, eller for å følge en person som reiser seg.

**Dolly**: Kameraet beveger seg fremover eller bakover. Dolly inn skaper intensitet, dolly ut gir avstand.

**Truck**: Kameraet beveger seg sideveis. Brukes til å følge en person som går.

**Zoom**: Objektivet endrer brennvidde. Gir illusjon av bevegelse, men uten den dybdefølelsen en fysisk dolly gir. Unngå overdreven bruk av zoom.

**Håndholdt**: Gir et urolig, dokumentarisk uttrykk. Kan brukes bevisst for realisme eller uro.

**Stativ**: Gir stabile, profesjonelle bilder. Anbefales for de fleste situasjoner.

**Gimbal**: Elektronisk stabilisering for myke, flytende bevegelser mens du går eller løper.`,
    },
    {
      id: 'im-5-2-example-1',
      type: 'example',
      title: 'Filme en dialog mellom to personer',
      content: `For en scene der to venner snakker sammen:

1. **Etablerende bilde**: Start med et totalbilde som viser begge personene og omgivelsene.
2. **Over-skulder-bilde (OTS)**: Film over skulderen til person A mens person B snakker. Bytt vinkel for svar.
3. **Nærbilder**: Klipp inn nærbilder av ansiktene for å vise reaksjoner og følelser.
4. **180-graders regelen**: Hold kameraet på samme side av den tenkte linjen mellom personene.
5. **Blikk-rom**: Gi plass i den retningen personen ser, mot samtalepartneren.
6. **Lyd**: Bruk en ekstern mikrofon nær personene for tydelig dialog.

Ved å bruke ulike bildeutsnitt og vinkler skaper du dynamikk i en ellers statisk scene.`,
    },
    {
      id: 'im-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-5-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er standard bildefrekvens for film?',
        options: [
          '30 fps',
          '60 fps',
          '24 fps',
          '120 fps',
        ],
        correctAnswer: 2,
        solution: '24 fps er den tradisjonelle bildefrekvensen for film og gir den karakteristiske "filmiske" følelsen som vi assosierer med kinofilm.',
      },
    },
    {
      id: 'im-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-5-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva 180-graders regelen er, og hvorfor den er viktig i videoproduksjon.',
        solution: '180-graders regelen sier at kameraet bør holdes på samme side av en tenkt linje mellom to personer i en dialog. Denne regelen er viktig fordi den bevarer den romlige orienteringen for seeren - person A er alltid til venstre, person B er alltid til høyre. Bryter man regelen, ser det ut som personene plutselig har byttet plass, noe som skaper forvirring.',
      },
    },
    {
      id: 'im-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-5-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom en dolly-bevegelse og en zoom?',
        options: [
          'Det er ingen forskjell',
          'Dolly beveger kameraet fysisk, zoom endrer brennvidden optisk',
          'Zoom beveger kameraet, dolly endrer brennvidden',
          'Dolly brukes bare innendørs',
        ],
        correctAnswer: 1,
        solution: 'En dolly-bevegelse innebærer at kameraet fysisk flyttes fremover eller bakover, noe som gir naturlig dybdefølelse. Zoom endrer brennvidden i objektivet uten å flytte kameraet, og gir en flatere, mindre naturlig effekt.',
      },
    },
    {
      id: 'im-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-5-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv tre ulike kamerabevegelser, og forklar den fortellermessige effekten av hver.',
        solution: '1) Pan (panorering): Kameraet roterer horisontalt. Effekt: Avslører omgivelser gradvis, følger en bevegelse i bildet, skaper romfølelse. 2) Tilt: Kameraet roterer vertikalt. Effekt: Tilt opp avslører noe stort og imponerende (en bygning, et fjell), tilt ned kan avsløre noe på bakken. 3) Dolly inn: Kameraet beveger seg mot motivet. Effekt: Skaper intensitet, trekker seeren inn i scenen, fokuserer oppmerksomheten.',
      },
    },
    {
      id: 'im-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-5-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva gjør hvitbalanse?',
        options: [
          'Justerer volumet på lyden',
          'Sørger for at hvite farger ser hvite ut uavhengig av lyskilde',
          'Bestemmer oppløsningen på videoen',
          'Styrer bildefrekvensen',
        ],
        correctAnswer: 1,
        solution: 'Hvitbalanse kompenserer for ulike lyskilders fargetemperatur slik at hvite farger ser hvite ut. Uten riktig hvitbalanse kan bildet få en gulaktig tone (glødelamper) eller blåaktig tone (dagslys).',
      },
    },
    {
      id: 'im-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-5-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Film en kort sekvens (30 sekunder) med mobiltelefonen der du bruker minst tre ulike bildeutsnitt. Beskriv hvilke utsnitt du brukte og hvorfor.',
        solution: 'Eksempel: Sekvens av å lage en kopp te. 1) Totalbilde av kjøkkenet - etablerer scenen og gir kontekst. 2) Halvnært av personen som fyller vann - viser handlingen tydelig. 3) Nært av tekoppen med dampende vann - skaper stemning og detalj. Variasjon i bildeutsnitt gjør sekvensen visuelt interessant og forteller historien tydeligere enn om alt var filmet med samme utsnitt.',
        allowsUpload: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'FPS', definition: 'Frames per second - antall bilder per sekund i en video.' },
    { term: 'Pan', definition: 'Kamerabevegelse der kameraet roterer horisontalt.' },
    { term: 'Dolly', definition: 'Kamerabevegelse der kameraet flyttes fysisk fremover eller bakover.' },
    { term: '180-graders regelen', definition: 'Regel som sier at kameraet bør holdes på samme side i en dialog.' },
    { term: 'Hvitbalanse', definition: 'Innstilling som kompenserer for lyskildens fargetemperatur.' },
    { term: 'Gimbal', definition: 'Elektronisk stabilisering for myke kamerabevegelser.' },
  ],
};

// ============================================================================
// Kapittel 5.3: Videoredigering og klipping
// ============================================================================

export const CHAPTER_IM_VG1_5_3: TextbookChapter = {
  id: 'im-vg1-5-3',
  courseId: 'im-vg1',
  chapterNumber: '5.3',
  title: 'Videoredigering og klipping',
  description: 'Utforsk videoredigeringsverktøy og lær teknikker for klipping, overganger, fargegrading og eksport av video.',
  estimatedMinutes: 65,
  competenceGoals: [
    'kjenne til og anvende bransjefaglige metoder og relevant utstyr i produksjon',
    'produsere og kommunisere innhold innenfor ulike sjangre tilpasset visuelle og auditive medier',
  ],
  content: [
    {
      id: 'im-5-3-intro',
      type: 'text',
      content: `## Videoredigering og klipping

Redigering er der videoen virkelig tar form. Det er i redigeringsrommet at råmaterialet blir en fortelling. En god klipper kan gjøre en middelmådig opptak til en engasjerende video, og en dårlig klipper kan ødelegge fantastisk materiale. Redigering handler like mye om hva du velger bort som hva du beholder.

I dette kapittelet skal du lære:
- Grunnleggende klippeteknikker og tidslinjearbeid
- Overganger og når de bør brukes
- Fargekorrigering og fargegrading
- Eksportinnstillinger for ulike plattformer`,
    },
    {
      id: 'im-5-3-text-1',
      type: 'text',
      content: `### Tidslinjen og grunnleggende klipping

**Tidslinjen** (timeline) er arbeidsflaten i et videoredigeringsprogram. Den viser klippene kronologisk fra venstre til høyre, med separate spor for video og lyd.

**Grunnleggende klippeteknikker:**

**Rett kutt** (hard cut): Direkte overgang fra ett klipp til det neste. Den vanligste og mest effektive klippetypen. Brukes i 90% av klippene.

**J-kutt**: Lyden fra neste klipp starter før bildet skifter. Gir en myk overgang der seeren hører noe nytt mens de fortsatt ser forrige bilde.

**L-kutt**: Lyden fra forrige klipp fortsetter etter at bildet har skiftet. Binder scener sammen naturlig.

**Klipperytme**: Korte klipp skaper intensitet og fart. Lange klipp skaper ro og lar scenen puste. Veksle mellom korte og lange klipp for å kontrollere flyten.

**Klippepunkter**: Klipp på handling - når en person begynner å bevege seg, åpne en dør eller snu seg. Det maskerer kuttet og gjør overgangen usynlig.`,
    },
    {
      id: 'im-5-3-text-2',
      type: 'text',
      content: `### Overganger

**Når bruke overganger:**
Overganger mellom klipp bør brukes med omtanke. De signaliserer noe til seeren.

**Oppløsning (dissolve)**: Ett bilde tones over i det neste. Signaliserer tidens gang eller en myk overgang mellom relaterte scener.

**Fade til svart**: Bildet tones til svart. Signaliserer en avslutning, en pause eller et sterkt sceneskifte.

**Fade fra svart**: Bildet tones opp fra svart. Brukes til åpning og etter en pause.

**Wipe**: Ett bilde skyves bort av det neste. Sjelden brukt i seriøse produksjoner, men populært i YouTube-innhold.

**Tommelregel**: Bruk rette kutt som standard. Overganger bør ha en grunn - de er ikke dekorasjon, men fortellermessige verktøy.

### Fargekorrigering og grading

**Fargekorrigering** fikser tekniske problemer: feil hvitbalanse, over- eller undereksponering, inkonsistent farge mellom klipp.

**Fargegrading** er kreativ fargebehandling som setter stemningen. En blålig tone kan gi en kald, melankolsk følelse. Varme oransjetoner kan gi en nostalgisk sommerfeeling.`,
    },
    {
      id: 'im-5-3-text-3',
      type: 'text',
      content: `### Titler og tekst

**Tittelkort**: Tekst på ensfarget eller grafisk bakgrunn. Brukes til åpningstitler og mellomtitler.
**Lower thirds**: Tekst i nedre del av skjermen som identifiserer en person eller et sted.
**Undertekster**: Oversettelse eller transkribering av dialog.

Tekst i video bør:
- Være stor nok til å leses på mobil
- Ha tilstrekkelig kontrast mot bakgrunnen
- Stå lenge nok til at seeren rekker å lese
- Bruke en enkel, lesbar skrifttype

### Eksportinnstillinger

**For YouTube og sosiale medier:**
- Format: MP4 (H.264 eller H.265 kodek)
- Oppløsning: 1920x1080 (Full HD) eller 3840x2160 (4K)
- Bildefrekvens: 24-30 fps
- Bitrate: 10-20 Mbps for 1080p

**For Instagram/TikTok:**
- Vertikalt format: 1080x1920 (9:16)
- Varighet: Tilpasset plattformens krav

**For kvalitetsarkivering:**
- ProRes eller DNxHR for høyeste kvalitet
- Større filstørrelser, men ingen kvalitetstap`,
    },
    {
      id: 'im-5-3-example-1',
      type: 'example',
      title: 'Redigere en intervjuvideo',
      content: `Slik redigerer du et 10-minutters intervju ned til 3 minutter:

1. **Se gjennom alt materialet** og noter tidskoder for de beste svarene.
2. **Velg de sterkeste bitene** som forteller historien klart og konsist.
3. **Bruk J- og L-kutt** mellom svar for myke overganger.
4. **Legg inn B-roll** over klippepunktene for å maskere kutt der du fjerner deler av et svar.
5. **Fargekorrigering**: Juster hvitbalanse og eksponering for konsistent utseende.
6. **Lower third**: Legg til navn og tittel på intervjuobjektet.
7. **Lydmiksing**: Balanser intervjulyden, eventuell bakgrunnsmusikk legges lavt under.
8. **Eksporter**: MP4, 1080p, H.264 for YouTube.`,
    },
    {
      id: 'im-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-5-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er en J-kutt?',
        options: [
          'Et kutt der bildet hopper bakover i tid',
          'Et kutt der lyden fra neste klipp starter før bildet skifter',
          'Et kutt der bildet og lyden skifter samtidig',
          'Et kutt med en spesiell overgangseffekt',
        ],
        correctAnswer: 1,
        solution: 'En J-kutt er en klippeteknikk der lyden fra det neste klippet starter før bildet skifter. Navnet kommer fra at det ser ut som bokstaven J på tidslinjen, der lydsporet strekker seg lenger tilbake enn videosporet.',
      },
    },
    {
      id: 'im-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-5-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom fargekorrigering og fargegrading.',
        solution: 'Fargekorrigering er en teknisk prosess der du fikser problemer som feil hvitbalanse, over- eller undereksponering, og inkonsistent farge mellom klipp. Målet er å gjøre bildet "riktig". Fargegrading er en kreativ prosess der du bevisst endrer fargene for å sette stemning og stil, for eksempel blåtoner for kald stemning eller varme oransjetoner for nostalgi. Korrigering gjøres alltid først, grading kommer etterpå.',
      },
    },
    {
      id: 'im-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-5-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilket format og oppløsning er best for YouTube-video?',
        options: [
          'AVI, 720x480',
          'MP4 (H.264), 1920x1080',
          'MOV, 640x480',
          'GIF, 800x600',
        ],
        correctAnswer: 1,
        solution: 'MP4 med H.264-kodek i 1920x1080 (Full HD) er standard for YouTube. Det gir god kvalitet med rimelig filstørrelse og er kompatibelt med alle plattformer.',
      },
    },
    {
      id: 'im-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-5-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv hvilke overganger du ville brukt i en kort dokumentar om en skoledag, og begrunn valgene.',
        solution: 'Rett kutt for de fleste overgangene mellom klipp innad i scener (f.eks. mellom ulike vinkler i klasserommet) fordi det er den mest naturlige og minst forstyrrende overgangen. Fade til svart mellom hovedsekvensene (morgen, friminutt, ettermiddag) for å signalisere tidens gang og gi seeren en pause. Oppløsning (dissolve) mellom noen B-roll-klipp for en drømmende stemning i rolige øyeblikk. Fade fra svart ved åpningen for en rolig start.',
      },
    },
    {
      id: 'im-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-5-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva signaliserer vanligvis en "fade til svart" i videoredigering?',
        options: [
          'En teknisk feil',
          'En avslutning, pause eller sterkt sceneskifte',
          'At videoen er i slow motion',
          'At lyden skal økes',
        ],
        correctAnswer: 1,
        solution: 'Fade til svart signaliserer vanligvis en avslutning (som slutten av en scene eller hele videoen), en pause i fortellingen, eller et sterkt sceneskifte der tid eller sted endres betydelig.',
      },
    },
    {
      id: 'im-5-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-5-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hva menes med klipperytme, og hvordan påvirker den seerens opplevelse? Gi eksempler på situasjoner der du ville brukt rask og langsom klipperytme.',
        solution: 'Klipperytme er tempoet i redigeringen - hvor lange klippene er og hvor hyppig det klippes. Raske klipp (korte klipp, hyppige kutt) skaper intensitet, energi og spenning - egnet for actionsekvenser, musikkvideoer og montasjer. Langsomme klipp (lange klipp, sjeldne kutt) skaper ro, ettertanke og intimitet - egnet for stemningsfulle scener, portretter og naturbilder. En god redigerer varierer rytmen for å kontrollere seerens emosjonelle opplevelse gjennom videoen.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Tidslinje', definition: 'Arbeidsflaten i et redigeringsprogram der klipp ordnes kronologisk.' },
    { term: 'J-kutt', definition: 'Klippeteknikk der lyden fra neste klipp starter før bildet skifter.' },
    { term: 'L-kutt', definition: 'Klippeteknikk der lyden fra forrige klipp fortsetter etter bildeskiftet.' },
    { term: 'Lower third', definition: 'Tekst i nedre del av skjermen som identifiserer person eller sted.' },
    { term: 'Fargegrading', definition: 'Kreativ fargebehandling som setter stemning og visuell stil.' },
    { term: 'Bitrate', definition: 'Datamengde per sekund i en videofil, målt i Mbps.' },
  ],
};

// ============================================================================
// Kapittel 5.4: Lydopptak og mikrofonteknikk
// ============================================================================

export const CHAPTER_IM_VG1_5_4: TextbookChapter = {
  id: 'im-vg1-5-4',
  courseId: 'im-vg1',
  chapterNumber: '5.4',
  title: 'Lydopptak og mikrofonteknikk',
  description: 'Forstå lydopptakets grunnprinsipper, ulike mikrofontyper og teknikker for å oppnå god lydkvalitet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'kjenne til og anvende bransjefaglige metoder og relevant utstyr i produksjon',
  ],
  content: [
    {
      id: 'im-5-4-intro',
      type: 'text',
      content: `## Lydopptak og mikrofonteknikk

God lyd er viktigere enn godt bilde. Seere tolererer middels bildekvalitet, men dårlig lyd gjør at de skrur av med en gang. I profesjonell medieproduksjon brukes det mye tid og ressurser på å sikre god lydkvalitet. Å forstå mikrofoner, opptaksmiljø og grunnleggende akustikk er avgjørende.

I dette kapittelet skal du lære:
- Ulike mikrofontyper og deres bruksområder
- Grunnleggende akustikk og opptaksmiljø
- Lydnivåer og hvordan unngå peaking
- Praktiske teknikker for lydopptak`,
    },
    {
      id: 'im-5-4-def-1',
      type: 'definition',
      title: 'Mikrofon',
      content: `En **mikrofon** er en transduser som konverterer lydtrykk (akustisk energi) til elektriske signaler. Ulike mikrofontyper har ulike opptaksmønstre, følsomhet og egenskaper som gjør dem egnet for forskjellige situasjoner.`,
    },
    {
      id: 'im-5-4-text-1',
      type: 'text',
      content: `### Mikrofontyper

**Dynamisk mikrofon:**
- Robust og tåler høye lydnivåer
- Krever ikke strømtilførsel
- Mindre følsom, fanger hovedsakelig nær lyd
- Perfekt for: Konserter, intervjuer i støyende omgivelser, vokal i studio
- Eksempler: Shure SM58, Rode PodMic

**Kondensatormikrofon:**
- Mer følsom og detaljert lydgjengivelse
- Krever fantomstrøm (48V) eller batteri
- Fanger mer av rommet og omgivelsene
- Perfekt for: Studioopptak, voiceover, podcast
- Eksempler: Rode NT1, Audio-Technica AT2020

**Myggemikrofon (lavalier):**
- Liten mikrofon som festes på klær nær munnen
- Trådløs eller kablet
- Perfekt for: Intervjuer, presentasjoner, vlogging
- Gir konsistent lydnivå uavhengig av hodebevegelser

**Retningsbestemt mikrofon (shotgun):**
- Smal opptaksvinkel, fanger lyd fra én retning
- Monteres ofte på kamera eller bom
- Perfekt for: Filming, dokumentar, utendørs opptak
- Eksempler: Rode NTG5, Sennheiser MKE 600`,
    },
    {
      id: 'im-5-4-text-2',
      type: 'text',
      content: `### Opptaksmønstre (polaritetsmønster)

**Nyre (cardioid)**: Fanger lyd hovedsakelig forfra. Avviser lyd bakfra. Mest brukte mønsteret for de fleste formål.

**Supernyre**: Smalere opptaksvinkel enn nyre. Fanger litt lyd bakfra. Brukes når du trenger mer isolasjon.

**Kule (omnidirectional)**: Fanger lyd fra alle retninger likt. Brukes for å fange omgivelseslyd eller med myggemikrofoner.

**Åttetall (figure-8)**: Fanger lyd forfra og bakfra, avviser fra sidene. Brukes for intervjuer der to personer deler én mikrofon.

### Lydnivåer og peaking

**Lydnivåer** måles i desibel (dB). I digital lyd er 0 dB det absolutte maksimum.

**Anbefalt opptaksnivå**: -12 dB til -6 dB for taleopptak. Dette gir nok headroom for uventede høye lyder.

**Peaking** (clipping) oppstår når signalet overskrider 0 dB. Resultatet er forvrengt lyd som ikke kan repareres. Det er alltid bedre å ta opp for lavt enn for høyt.`,
    },
    {
      id: 'im-5-4-text-3',
      type: 'text',
      content: `### Opptaksmiljø og akustikk

**Romklang** (reverb) oppstår når lyd reflekteres mellom harde overflater. Et lite rom med harde vegger gir mye romklang. Et stort rom med bløte overflater gir lite.

**Slik reduserer du uønsket romklang:**
- Ta opp i et rom med myke materialer (teppe, gardiner, polstring)
- Bruk akustiske paneler eller tepper på veggene
- Plasser mikrofonen nært kilden
- Unngå store, tomme rom med harde overflater

**Bakgrunnsstøy** er uønsket lyd:
- Ventilasjonsanlegg, trafikk, byggestøy
- Elektronisk brum fra dårlig kabling
- Datamaskinvifter og harddisker
- Skru av alt som kan lage lyd før du tar opp

**Utendørs opptak:**
- Bruk vindbeskyttelse (vindskjerm/"deadcat") på mikrofonen
- Unngå opptak i sterk vind
- Vær oppmerksom på bakgrunnsstøy fra trafikk og fugler`,
    },
    {
      id: 'im-5-4-example-1',
      type: 'example',
      title: 'Sette opp for podcastopptak',
      content: `For å ta opp en podcast med to deltakere:

1. **Velg rom**: Et lite rom med bløte møbler, teppe og gardiner for minimal romklang.
2. **Mikrofoner**: To kondensatormikrofoner med nyremønster, plassert 15-20 cm fra munnen.
3. **Pop-filter**: Monter et pop-filter foran hver mikrofon for å dempe plosiver (p- og b-lyder).
4. **Lydkort**: Koble mikrofonene til et USB-lydkort med fantomstrøm.
5. **Nivåjustering**: Sett nivået til ca. -12 dB ved normal talevolumstyring. Test med begge deltakerne.
6. **Monitoring**: Bruk hodetelefoner for å høre opptaket i sanntid.
7. **Bakgrunnsstøy**: Skru av ventilasjon, mobiltelefoner og datamaskinvifter.
8. **Ta opp**: Start opptaket i redigeringsprogrammet, klapp én gang for synkronisering.`,
    },
    {
      id: 'im-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-5-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken mikrofontype er mest robust og egner seg best for konserter og støyende omgivelser?',
        options: [
          'Kondensatormikrofon',
          'Dynamisk mikrofon',
          'Myggemikrofon',
          'USB-mikrofon',
        ],
        correctAnswer: 1,
        solution: 'Dynamiske mikrofoner er mest robuste og tåler høye lydnivåer uten forvrengning. De er mindre følsomme enn kondensatormikrofoner, noe som gjør at de fanger mindre bakgrunnsstøy i støyende omgivelser.',
      },
    },
    {
      id: 'im-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-5-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva peaking (clipping) er, og hvordan du unngår det under opptak.',
        solution: 'Peaking (clipping) oppstår når lydsignalet overskrider 0 dB, det digitale maksimumsnivået. Resultatet er forvrengt lyd som ikke kan repareres i etterarbeidet. For å unngå det: 1) Still inn opptaksnivået til -12 til -6 dB ved normal talestyrke. 2) Gi nok headroom for plutselige høye lyder (latter, rop). 3) Bruk hodetelefoner for å overvåke opptaket i sanntid. 4) Det er alltid bedre å ta opp litt for lavt - du kan forsterke i etterarbeid, men forvrengning kan ikke fikses.',
      },
    },
    {
      id: 'im-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-5-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er et nyremønster (cardioid)?',
        options: [
          'En mikrofon som fanger lyd fra alle retninger',
          'En mikrofon som fanger lyd hovedsakelig forfra og avviser lyd bakfra',
          'En mikrofon som bare fanger lyd fra sidene',
          'En type hodetelefon',
        ],
        correctAnswer: 1,
        solution: 'Et nyremønster (cardioid) fanger lyd hovedsakelig forfra og avviser lyd bakfra. Det er det mest brukte opptaksmønsteret og passer for de fleste situasjoner fordi det isolerer lydkilden fra bakgrunnsstøy.',
      },
    },
    {
      id: 'im-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-5-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Du skal ta opp et intervju utendørs i en park. Beskriv hvilke utfordringer du kan møte og hvilke tiltak du gjør for å sikre god lydkvalitet.',
        solution: 'Utfordringer: 1) Vind som lager støy i mikrofonen - tiltak: bruk vindbeskyttelse/deadcat. 2) Bakgrunnsstøy fra trafikk, fugler, folk - tiltak: finn et skjermet sted, bruk retningsbestemt mikrofon (shotgun). 3) Vanskelig å kontrollere lydnivåer - tiltak: bruk hodetelefoner for monitoring, juster nivå med god margin. 4) Ekko fra bygninger - tiltak: unngå å stå nær store flate overflater. 5) Mangel på strøm - tiltak: bruk batteridrevet opptaker, ta med ekstra batterier.',
      },
    },
    {
      id: 'im-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-5-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er den viktigste grunnen til å bruke et pop-filter foran en mikrofon?',
        options: [
          'Det forsterker lyden',
          'Det demper plosiver (P- og B-lyder) som skaper vindstøt',
          'Det beskytter mikrofonen mot støv',
          'Det endrer mikrofonens opptaksmønster',
        ],
        correctAnswer: 1,
        solution: 'Et pop-filter demper plosiver - eksplosive konsonanter som P og B som sender kraftige luftstøt mot mikrofonen. Uten pop-filter lager disse en forstyrrende dunkende lyd i opptaket.',
      },
    },
    {
      id: 'im-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-5-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Sammenlign dynamisk mikrofon og kondensatormikrofon. Beskriv egenskaper, fordeler og ulemper ved hver type, og gi eksempler på situasjoner der hver type er best egnet.',
        solution: 'Dynamisk mikrofon: Robust, tåler høye lydnivåer, krever ikke strøm, mindre følsom. Fordeler: Holdbar, rimelig, fanger lite bakgrunnsstøy. Ulemper: Mindre detaljer, krever nærhet til lydkilde. Best for: Konserter, intervjuer i støy, utendørs bruk. Kondensatormikrofon: Følsom, detaljert, krever fantomstrøm (48V). Fordeler: Fanger fine detaljer og nyanser, bred frekvensrespons. Ulemper: Sårbar for fukt og støt, fanger mye bakgrunnsstøy, dyrere. Best for: Studioopptak, podcast, voiceover, akustiske instrumenter.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Dynamisk mikrofon', definition: 'Robust mikrofon som tåler høye lydnivåer uten strømtilførsel.' },
    { term: 'Kondensatormikrofon', definition: 'Følsom mikrofon med detaljert lydgjengivelse, krever fantomstrøm.' },
    { term: 'Nyremønster', definition: 'Opptaksmønster som fanger lyd forfra og avviser lyd bakfra.' },
    { term: 'Peaking', definition: 'Forvrengning som oppstår når lydsignalet overskrider 0 dB.' },
    { term: 'Pop-filter', definition: 'Skjerm som demper plosive lyder (P, B) foran mikrofonen.' },
    { term: 'Fantomstrøm', definition: '48V strøm som kreves av kondensatormikrofoner.' },
  ],
};

// ============================================================================
// Kapittel 5.5: Lydredigering og miksing
// ============================================================================

export const CHAPTER_IM_VG1_5_5: TextbookChapter = {
  id: 'im-vg1-5-5',
  courseId: 'im-vg1',
  chapterNumber: '5.5',
  title: 'Lydredigering og miksing',
  description: 'Lær å redigere lydopptak, legge til effekter, mikse flere lydspor og klargjøre lyd for ulike plattformer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'kjenne til og anvende bransjefaglige metoder og relevant utstyr i produksjon',
    'produsere og kommunisere innhold innenfor ulike sjangre tilpasset visuelle og auditive medier',
  ],
  content: [
    {
      id: 'im-5-5-intro',
      type: 'text',
      content: `## Lydredigering og miksing

Lydredigering er prosessen med å bearbeide lydopptak til et polert, profesjonelt resultat. Enten du redigerer dialog for en video, miksing for en podcast eller lydeffekter for en animasjon, er de grunnleggende teknikkene de samme. God lydredigering er usynlig - lytteren legger ikke merke til den, men dårlig lyd er umiddelbart forstyrrende.

I dette kapittelet skal du lære:
- Grunnleggende lydredigeringsteknikker
- Bruk av equalizer, kompressor og andre effekter
- Miksing av flere lydspor
- Lydformater og eksport for ulike plattformer`,
    },
    {
      id: 'im-5-5-text-1',
      type: 'text',
      content: `### Grunnleggende lydredigering

**Klipping og trimming**: Fjern uønskede deler som pauser, feil og støy. Klipp i nullkrysninger (der bølgeformen krysser nulllinjen) for å unngå klikklyder.

**Fading**: Bruk fade-in og fade-out i begynnelsen og slutten av klipp for myke overganger. Krysstoninger (crossfade) mellom klipp jevner ut overgangene.

**Støyfjerning**: Moderne verktøy kan analysere en støyprøve og fjerne bakgrunnsstøy automatisk. Velg en stille del av opptaket som referanse, og la programmet fjerne tilsvarende frekvenser.

**Normalisering**: Justerer det samlede lydnivået slik at det høyeste punktet treffer et bestemt nivå (f.eks. -1 dB). Nyttig for å gjøre opptak konsistent i volum.

**De-essing**: Reduserer skarpe S-lyder som kan være ubehagelige, spesielt med kondensatormikrofoner.`,
    },
    {
      id: 'im-5-5-text-2',
      type: 'text',
      content: `### Effekter

**Equalizer (EQ)** justerer volumet på bestemte frekvensområder:
- **Lavt register (bass)**: 20-250 Hz - Dybde og fylde
- **Mellomregister**: 250 Hz - 4 kHz - Kropp og tydelighet i tale
- **Høyt register (diskant)**: 4-20 kHz - Luft og detalj
- **High-pass filter**: Fjerner alle frekvenser under et gitt punkt (f.eks. 80 Hz) for å eliminere brom og rumling

**Kompressor** jevner ut dynamikken ved å redusere forskjellen mellom lave og høye lydnivåer:
- Gjør lave deler høyere og høye deler lavere
- Gir en jevnere, mer profesjonell lyd
- Viktig for tale i podcast og video
- Innstillinger: Terskel (threshold), ratio, attack, release

**Reverb** legger til romklang. Kan brukes kreativt, men bør brukes sparsommelig for tale.

**De-esser** er en spesialisert kompressor som bare virker på S-lyder (vanligvis 5-8 kHz).`,
    },
    {
      id: 'im-5-5-text-3',
      type: 'text',
      content: `### Miksing

Miksing er å balansere flere lydspor slik at de fungerer sammen som en helhet.

**Grunnleggende mikseprinsipp:**
1. Start med det viktigste sporet (dialog/vokal) og sett nivået
2. Legg til bakgrunnsmusikk og juster til den ligger under dialogen
3. Legg til lydeffekter og atmosfære
4. Sørg for at ingenting maskerer viktig dialog

**Panorering** plasserer lyd i stereofeltet - venstre, høyre eller i midten. Dialog holdes vanligvis i midten, mens musikk og effekter kan panoreres for å skape bredde.

### Lydformater

**WAV**: Ukomprimert, høy kvalitet, store filer. Standard for produksjon og arkivering.
**MP3**: Komprimert med tap, liten filstørrelse. Standard for distribusjon.
**AAC**: Bedre kvalitet enn MP3 ved samme bitrate. Brukt av Apple og YouTube.
**FLAC**: Tapsfri komprimering, mindre enn WAV men like god kvalitet.
**OGG Vorbis**: Åpen kildekode-alternativ til MP3.

**Anbefalt eksport**: WAV (48 kHz, 24-bit) for arkiv, MP3 320 kbps eller AAC for distribusjon.`,
    },
    {
      id: 'im-5-5-example-1',
      type: 'example',
      title: 'Mikse en podcastepisode',
      content: `Slik mikser du en podcast med to stemmer og intro-musikk:

1. **Importer** alle lydklipp til separate spor: Stemme 1, Stemme 2, Intro-musikk.
2. **EQ på stemmene**: High-pass filter på 80 Hz for å fjerne rumling. Boost rundt 3 kHz for tydelighet.
3. **Kompressor på stemmene**: Terskel -18 dB, ratio 3:1, for jevnere nivå.
4. **Nivåjustering**: Sett begge stemmene til ca. -12 dB topp.
5. **Intro-musikk**: Fade inn, spill i 10 sekunder, fade ned under introen, fade ut når samtalen starter.
6. **Panorering**: Stemme 1 svakt til venstre, Stemme 2 svakt til høyre, musikk i midten.
7. **Normalisering**: Normaliser den ferdige miksen til -1 dB.
8. **Eksporter**: MP3 med 192 kbps for podcastplattformer.`,
    },
    {
      id: 'im-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-5-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva gjør en kompressor i lydredigering?',
        options: [
          'Gjør filen mindre',
          'Jevner ut dynamikken ved å redusere forskjellen mellom lave og høye nivåer',
          'Legger til ekko og romklang',
          'Fjerner bakgrunnsstøy',
        ],
        correctAnswer: 1,
        solution: 'En kompressor jevner ut dynamikken i et lydopptak ved å redusere volumet på høye deler og dermed minske forskjellen mellom lave og høye nivåer. Dette gir en jevnere, mer profesjonell lyd.',
      },
    },
    {
      id: 'im-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-5-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva en equalizer (EQ) gjør, og gi et praktisk eksempel på hvordan du ville brukt den for å forbedre et taleopptak.',
        solution: 'En equalizer justerer volumet på bestemte frekvensområder i lyden. Praktisk eksempel for taleopptak: 1) High-pass filter på 80 Hz for å fjerne rumling, brom og lavfrekvent støy som ikke er en del av stemmen. 2) Reduser rundt 300-500 Hz hvis stemmen høres "boksete" ut. 3) Øk litt rundt 3-5 kHz for å gjøre stemmen tydeligere og mer forståelig. 4) Øk svakt rundt 10 kHz for litt mer "luft" og klarhet.',
      },
    },
    {
      id: 'im-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-5-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvilket lydformat er best for arkivering av høykvalitetsopptak?',
        options: [
          'MP3 128 kbps',
          'WAV 48 kHz 24-bit',
          'OGG Vorbis',
          'AAC 64 kbps',
        ],
        correctAnswer: 1,
        solution: 'WAV i 48 kHz og 24-bit er standard for arkivering fordi det er ukomprimert og bevarer full lydkvalitet uten tap. MP3 og andre komprimerte formater fjerner data permanent.',
      },
    },
    {
      id: 'im-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-5-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hva panorering er i lydmiksing, og beskriv hvordan du ville plassert ulike elementer i stereofeltet for en videoproduksjon.',
        solution: 'Panorering plasserer lyd i stereofeltet mellom venstre og høyre kanal. For en videoproduksjon: Dialog plasseres i midten (sentrum) fordi det er viktigst og bør være tydelig. Bakgrunnsmusikk panoreres bredt (litt til begge sider) for å skape bredde uten å konkurrere med dialogen. Lydeffekter panoreres for å matche bildet - en bil som kjører fra venstre til høyre panoreres tilsvarende. Atmosfære-lyder (fuglesang, trafikk) panoreres bredt for å skape en romlig opplevelse.',
      },
    },
    {
      id: 'im-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-5-5-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvorfor bør du klippe lyd i nullkrysninger?',
        options: [
          'For å spare filstørrelse',
          'For å unngå klikklyder ved klippepunktet',
          'For at lyden skal bli høyere',
          'Det er ikke viktig hvor du klipper',
        ],
        correctAnswer: 1,
        solution: 'Å klippe i nullkrysninger (der bølgeformen krysser nulllinjen) forhindrer klikklyder som oppstår når bølgeformen plutselig hopper fra et nivå til et annet ved klippepunktet.',
      },
    },
    {
      id: 'im-5-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-5-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv prosessen for å fjerne bakgrunnsstøy fra et lydopptak. Hva er viktig å huske på, og hva kan gå galt?',
        solution: 'Prosess: 1) Finn en stille del av opptaket der bare bakgrunnsstøyen høres (ingen tale). 2) Velg denne delen som referanse for støyprofilen. 3) La programmet analysere frekvensene i støyen. 4) Kjør støyfjerningen på hele opptaket. Viktig: Bruk moderat innstilling - for aggressiv støyfjerning kan skape artefakter som høres ut som "under vann" eller "robotstemme". Det er bedre å fjerne litt for lite enn for mye. Ting som kan gå galt: Talefrekvenser kan bli fjernet sammen med støyen, opptaket kan miste naturlighet, artefakter kan gjøre resultatet verre enn originalen.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Equalizer', definition: 'Verktøy som justerer volumet på bestemte frekvensområder.' },
    { term: 'Kompressor', definition: 'Verktøy som jevner ut dynamikken mellom lave og høye lydnivåer.' },
    { term: 'Normalisering', definition: 'Justering av lydnivået slik at toppen treffer et bestemt nivå.' },
    { term: 'Panorering', definition: 'Plassering av lyd i stereofeltet mellom venstre og høyre.' },
    { term: 'High-pass filter', definition: 'Filter som fjerner frekvenser under et gitt punkt.' },
    { term: 'WAV', definition: 'Ukomprimert lydformat med full kvalitet, brukt til produksjon og arkivering.' },
  ],
};

// ============================================================================
// Kapittel 5.6: Animasjon og motion graphics
// ============================================================================

export const CHAPTER_IM_VG1_5_6: TextbookChapter = {
  id: 'im-vg1-5-6',
  courseId: 'im-vg1',
  chapterNumber: '5.6',
  title: 'Animasjon og motion graphics',
  description: 'Utforsk animasjonsprinsipper og lær å lage bevegelig grafikk for video, nettsider og sosiale medier.',
  estimatedMinutes: 65,
  competenceGoals: [
    'produsere og kommunisere innhold innenfor ulike sjangre tilpasset visuelle og auditive medier',
    'utforske og beskrive hvordan teknologi kan formidle nye uttrykk og gi nye opplevelser',
  ],
  content: [
    {
      id: 'im-5-6-intro',
      type: 'text',
      content: `## Animasjon og motion graphics

Animasjon gir liv til statiske elementer. Fra klassisk tegnefilm til moderne motion graphics i reklamefilmer og på nettsider - bevegelig grafikk fanger oppmerksomhet og formidler informasjon effektivt. I en verden full av visuelt innhold er animasjon et kraftig verktøy for å skille seg ut.

I dette kapittelet skal du lære:
- Grunnleggende animasjonsprinsipper
- Keyframes og tidslinje i animasjon
- Motion graphics for video og nett
- Eksport for ulike plattformer`,
    },
    {
      id: 'im-5-6-def-1',
      type: 'definition',
      title: 'Motion graphics',
      content: `**Motion graphics** er grafisk design i bevegelse. Det kombinerer designelementer som tekst, former, ikoner og illustrasjoner med animasjon for å formidle budskap, forklare konsepter eller skape visuell identitet.`,
    },
    {
      id: 'im-5-6-text-1',
      type: 'text',
      content: `### Grunnleggende animasjonsprinsipper

Disney-animatørene utviklet 12 prinsipper for animasjon som fortsatt er relevante i dag. Her er de viktigste:

**Squash og stretch**: Objekter deformeres under bevegelse. En ball flater ut når den treffer bakken og strekkes når den spretter opp. Dette gir en følelse av vekt og fleksibilitet.

**Anticipation (forberedelse)**: En bevegelse forberedes med en motsatt bevegelse. En person bøyer knærne før et hopp. En knapp krymper litt før den forstørres ved klikk.

**Ease in og ease out**: Bevegelser starter sakte, akselererer, og bremser ned igjen. Ingenting i den virkelige verden starter eller stopper brått.

**Follow through og overlapping action**: Når et objekt stopper, fortsetter deler av det å bevege seg. Håret følger etter hodebevegelsen. En jakke svinger etter kroppen.

**Timing**: Antall bilder mellom start og slutt bestemmer hastigheten og stemningen. Rask timing = lett og kvikt. Langsom timing = tungt og alvorlig.`,
    },
    {
      id: 'im-5-6-text-2',
      type: 'text',
      content: `### Keyframes og tidslinje

**Keyframes** er nøkkelbilder som definerer start- og sluttposisjonene for en animasjon. Datamaskinen beregner automatisk mellombildene (interpolering).

**Eksempel**: For å animere en sirkel som beveger seg over skjermen:
- Keyframe 1 (sekund 0): Sirkel i venstre kant
- Keyframe 2 (sekund 1): Sirkel i høyre kant
- Datamaskinen beregner alle bildene mellom

**Interpolering** bestemmer hvordan bevegelsen mellom keyframes ser ut:
- **Lineær**: Jevn hastighet gjennom hele bevegelsen (mekanisk)
- **Ease in**: Starter sakte og akselererer
- **Ease out**: Starter raskt og bremser ned
- **Ease in/out**: Starter sakte, akselererer, og bremser ned igjen (mest naturlig)

**Tidslinje**: Animasjonens tidslinje viser alle keyframes kronologisk. Du kan justere timing, legge til nye keyframes og endre interpolering direkte i tidslinjen.

### Animerbare egenskaper
- **Posisjon**: Flytte elementer over skjermen
- **Skalering**: Forstørre eller forminske
- **Rotasjon**: Dreie rundt en akse
- **Gjennomsiktighet**: Fade inn eller ut
- **Farge**: Endre farge over tid`,
    },
    {
      id: 'im-5-6-text-3',
      type: 'text',
      content: `### Motion graphics i praksis

**Tittelsekvenser**: Animerte titler og credits i filmer og videoer. Klassiske eksempler: James Bond-åpninger, Netflix-serier.

**Infografikk i bevegelse**: Statistikk, diagrammer og data animeres for å gjøre tørr informasjon engasjerende.

**Logoanimasjon**: Firmaets logo animeres for bruk i videoer, nettsider og sosiale medier.

**UI-animasjon**: Knapper, menyer og overganger i apper og nettsider. Gir tilbakemelding og forbedrer brukeropplevelsen.

**Forklaringsvideoer**: Konsepter forklares med animert grafikk og voiceover. Populært for produktpresentasjoner og opplæring.

### Verktøy for animasjon

- **Adobe After Effects**: Industristandarder for motion graphics og visuell effekt
- **Canva**: Enkel animasjon av presentasjoner og sosiale medier-innhold
- **CSS-animasjoner**: Animasjon direkte i nettleseren med kode
- **Lottie**: Lett animasjonsformat for nett og apper
- **Blender**: Gratis 3D-animasjonsverktøy`,
    },
    {
      id: 'im-5-6-example-1',
      type: 'example',
      title: 'Animere en enkel logoavsloring',
      content: `Slik planlegger du en enkel logoanimasjon (2-3 sekunder):

1. **Sekund 0-0.5**: Logoen er usynlig (gjennomsiktighet 0%). En enkel form (sirkel eller linje) animeres inn fra venstre.
2. **Sekund 0.5-1.0**: Formen transformeres til logoens omriss. Bruk ease-out for en naturlig bremsing.
3. **Sekund 1.0-1.5**: Logoens farge fyller formen. Fade inn med en liten forsinkelse.
4. **Sekund 1.5-2.0**: Firmanavnet skrives inn under logoen med en skrivemaskineffekt.
5. **Sekund 2.0-2.5**: Alt holdes stille. Logoen er ferdig avslørt.

**Viktig**: Bruk ease in/out på alle bevegelser for naturlig flyt. Hold det enkelt - mindre er mer i logoanimasjon.`,
    },
    {
      id: 'im-5-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-5-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er keyframes i animasjon?',
        options: [
          'Rammer rundt bildet',
          'Nøkkelbilder som definerer start- og sluttposisjon for en animasjon',
          'Snarveier på tastaturet',
          'Bildekvalitetsinnstillinger',
        ],
        correctAnswer: 1,
        solution: 'Keyframes er nøkkelbilder som definerer tilstanden til et element på bestemte tidspunkter. Datamaskinen beregner automatisk mellombildene (interpolering) for å skape en jevn overgang.',
      },
    },
    {
      id: 'im-5-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-5-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar prinsippet "ease in og ease out" og hvorfor det gjør animasjoner mer naturlige.',
        solution: 'Ease in og ease out betyr at bevegelser starter sakte (ease in), akselererer til full fart, og bremser ned igjen til slutt (ease out). Det gjør animasjoner mer naturlige fordi ingenting i den virkelige verden starter eller stopper brått - alt har akselerasjon og retardasjon. Uten easing ser bevegelser mekaniske og unaturlige ut, som om de drives av en maskin. Med easing føles det som om bevegelsen har fysisk vekt og treghet.',
      },
    },
    {
      id: 'im-5-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-5-6-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er motion graphics?',
        options: [
          'Stillbilder i høy oppløsning',
          'Grafisk design i bevegelse som kombinerer tekst, former og animasjon',
          'Dataspillgrafikk',
          'Trykt reklamemateriell',
        ],
        correctAnswer: 1,
        solution: 'Motion graphics er grafisk design i bevegelse. Det kombinerer designelementer som tekst, former, ikoner og illustrasjoner med animasjon for å formidle budskap på en engasjerende måte.',
      },
    },
    {
      id: 'im-5-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-5-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Beskriv to av Disneys animasjonsprinsipper og forklar hvordan de brukes i moderne motion graphics.',
        solution: 'Eksempel: 1) Anticipation (forberedelse): I klassisk animasjon bøyer en figur knærne før den hopper. I moderne UI-design krymper en knapp litt (preparation) før den forstørres ved klikk - dette gir brukeren en visuell tilbakemelding som føles naturlig. 2) Squash og stretch: I klassisk animasjon deformeres en ball ved sprett. I motion graphics kan et tekstelement "squashe" ned ved ankomst og deretter sprette tilbake til normal form, noe som gir det personlighet og energi.',
      },
    },
    {
      id: 'im-5-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-5-6-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er interpolering i animasjon?',
        options: [
          'Å legge til lyd på animasjonen',
          'Automatisk beregning av mellombilder mellom keyframes',
          'Å eksportere animasjonen i ulike formater',
          'Å justere fargebalansen',
        ],
        correctAnswer: 1,
        solution: 'Interpolering er den automatiske beregningen av mellombilder mellom to keyframes. Animatøren definerer start- og slutttilstand, og datamaskinen beregner alle bildene mellom for å skape en jevn overgang.',
      },
    },
    {
      id: 'im-5-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-5-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Planlegg en kort animert sekvens (5-10 sekunder) for et fag du har på skolen. Beskriv hva som animeres, hvilke keyframes som trengs, og hvilken interpolering du ville brukt.',
        solution: 'Eksempel: Animert intro for norskfaget. Sekund 0-1: En bok glir inn fra venstre (posisjon-keyframes, ease out). Sekund 1-2: Boken åpner seg (rotasjon-keyframe med ease in/out). Sekund 2-3: Bokstaver flyter ut av boken og former ordet "Norsk" (posisjon og gjennomsiktighet-keyframes, ease out). Sekund 3-4: Fargen fylles inn i teksten (farge-keyframe, lineær). Sekund 4-5: Alt holdes stille. Ease in/out brukes på de fleste bevegelsene for naturlig flyt, lineær kun der jevn fart er ønsket.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Keyframe', definition: 'Nøkkelbilde som definerer tilstanden til et element på et bestemt tidspunkt.' },
    { term: 'Interpolering', definition: 'Automatisk beregning av mellombilder mellom keyframes.' },
    { term: 'Ease in/out', definition: 'Bevegelse som starter sakte, akselererer og bremser ned for naturlig flyt.' },
    { term: 'Squash og stretch', definition: 'Animasjonsprinsipp der objekter deformeres under bevegelse.' },
    { term: 'Anticipation', definition: 'Forberedende bevegelse som signaliserer en kommende handling.' },
    { term: 'Motion graphics', definition: 'Grafisk design i bevegelse - tekst, former og ikoner kombinert med animasjon.' },
  ],
};

// ============================================================================
// Kapittel 5.7: Podcast og strømmeproduksjon
// ============================================================================

export const CHAPTER_IM_VG1_5_7: TextbookChapter = {
  id: 'im-vg1-5-7',
  courseId: 'im-vg1',
  chapterNumber: '5.7',
  title: 'Podcast og strømmeproduksjon',
  description: 'Planlegg, produser og publiser podcaster og direktestrømminger med fokus på innhold, teknikk og distribusjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'planlegge og gjennomføre sanntidsproduksjoner',
    'produsere og kommunisere innhold innenfor ulike sjangre tilpasset visuelle og auditive medier',
  ],
  content: [
    {
      id: 'im-5-7-intro',
      type: 'text',
      content: `## Podcast og strømmeproduksjon

Podcast har eksplodert de siste årene og er blitt et av de mest populære medieformatene. Samtidig har direktestrømming (streaming) blitt en viktig del av medielandskapet gjennom plattformer som Twitch, YouTube Live og Instagram Live. Begge formatene gir mulighet til å nå publikum direkte med relativt enkelt utstyr.

I dette kapittelet skal du lære:
- Planlegging og konseptutvikling for podcast
- Teknisk oppsett for innspilling og redigering
- Grunnleggende direktestrømming
- Publisering og distribusjon på podcastplattformer`,
    },
    {
      id: 'im-5-7-text-1',
      type: 'text',
      content: `### Podcastplanlegging

**Konseptutvikling:**
- **Nisje**: Hva handler podcasten om? Vær spesifikk. "En podcast om bøker" er bredt. "En podcast om norsk ungdomslitteratur" er en tydeligere nisje.
- **Format**: Soloshow, samtale med fast medhvert, intervjubasert, paneldebatt, fortellende (narrativ)?
- **Lengde**: 15-30 minutter for korte formater, 45-90 minutter for dypere samtaler.
- **Frekvens**: Ukentlig, annenhver uke eller månedlig. Konsistens er viktigere enn hyppighet.
- **Målgruppe**: Hvem hører på? Alder, interesser, behov?

**Episodeplanlegging:**
- Lag en disposisjon med hovedtemaer og spørsmål
- Forbered en kort intro og outro
- Ha noen ekstra spørsmål eller temaer i reserve
- Tidsanslå hvert segment

**Podcastnavn og visuell identitet:**
- Velg et kort, beskrivende og søkbart navn
- Design en tydelig forsidebilde (cover art) i 3000x3000 piksler
- Bruk konsistente farger og typografi`,
    },
    {
      id: 'im-5-7-text-2',
      type: 'text',
      content: `### Innspilling og redigering

**Utstyr for podcast:**
- Mikrofon: Dynamisk mikrofon (f.eks. Rode PodMic) eller USB-kondensator (f.eks. Blue Yeti)
- Hodetelefoner: Lukket type for å unngå lydlekkasje
- Lydkort: USB-lydkort hvis du bruker XLR-mikrofon
- Pop-filter: For å dempe plosiver
- Akustisk behandling: Tepper, gardiner eller portabelt akustisk skjold

**Redigeringsprogrammer:**
- **Audacity**: Gratis, åpen kildekode, godt for nybegynnere
- **GarageBand**: Gratis for Mac, brukervennlig
- **Reaper**: Rimelig, profesjonelt, mange funksjoner
- **Adobe Audition**: Profesjonelt, del av Creative Cloud

**Redigeringstips:**
- Fjern lange pauser og åpenbare feil
- Behold naturlige pauser og reaksjoner
- Legg til intro- og outromusikk
- Normaliser lydnivået til -16 LUFS (standard for podcast)
- Eksporter som MP3 128-192 kbps (mono) eller 256 kbps (stereo)`,
    },
    {
      id: 'im-5-7-text-3',
      type: 'text',
      content: `### Direktestrømming

**Hva er direktestrømming?**
Sending av video og lyd i sanntid til et publikum over internett. Innholdet vises live mens det produseres.

**Plattformer**: YouTube Live, Twitch, Instagram Live, Facebook Live, TikTok Live.

**Teknisk oppsett:**
- **Programvare**: OBS Studio (gratis), Streamlabs, vMix
- **Kamera**: Webkamera, mobilkamera eller dedikert kamera
- **Mikrofon**: USB-mikrofon eller XLR med lydkort
- **Internettforbindelse**: Minimum 5 Mbps opplastingshastighet for 720p

**Viktige elementer:**
- Scener og overlegg (overlay) med grafiske elementer
- Chat-interaksjon med publikum i sanntid
- God belysning og ryddig bakgrunn

### Publisering og distribusjon

**RSS-feed** er grunnlaget for podcastdistribusjon. Den inneholder metadata og lenker til lydfiler.

**Hosting**: Podcastfiler lagres hos en hostingtjeneste (Spotify for Podcasters, Buzzsprout, Podbean) som genererer RSS-feeden.

**Distribusjon**: RSS-feeden sendes til plattformer som Spotify, Apple Podcasts, Google Podcasts og Pocket Casts.

**Markedsføring**: Del episoder på sosiale medier, lag korte videoklipp, samarbeid med andre podcastere.`,
    },
    {
      id: 'im-5-7-example-1',
      type: 'example',
      title: 'Starte en skolepodcast',
      content: `Slik planlegger du en podcast for skolen:

**Konsept**: "Skolepulsen" - en ukentlig podcast om livet på skolen, med intervjuer, debatter og tips.
**Format**: To faste verter + gjest hver episode.
**Lengde**: 20 minutter per episode.
**Frekvens**: Ukentlig, publisert hver fredag.

**Teknisk oppsett**: To USB-mikrofoner koblet til én PC. Opptak i Audacity. Redigering med intro/outro-musikk.

**Episodestruktur**:
1. Intro med musikk (30 sek)
2. "Ukas tema" - vertene diskuterer (5 min)
3. Intervju med gjest (10 min)
4. "Tips og triks" - kort, nyttig segment (3 min)
5. Outro med musikk og neste episode (1.5 min)

**Publisering**: Last opp til Spotify for Podcasters, del lenke på skolens Instagram.`,
    },
    {
      id: 'im-5-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-5-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er en RSS-feed i podcastsammenheng?',
        options: [
          'Et lydformat for podcast',
          'En datastrøm som inneholder metadata og lenker til lydfiler for distribusjon',
          'Et redigeringsprogram',
          'En type mikrofon',
        ],
        correctAnswer: 1,
        solution: 'En RSS-feed er en strukturert datafil som inneholder metadata (tittel, beskrivelse, forsidebilde) og lenker til lydfiler for hver episode. Den er grunnlaget for podcastdistribusjon og lar plattformer som Spotify og Apple Podcasts hente nye episoder automatisk.',
      },
    },
    {
      id: 'im-5-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-5-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Utvikle et konsept for en podcast. Beskriv tema, målgruppe, format, varighet og publiseringsfrekvens.',
        solution: 'Eksempel: "TechTeen" - en podcast om teknologi for ungdom. Tema: Nye apper, gadgets, spillanmeldelser og teknologitrender. Målgruppe: 15-19 år. Format: To faste verter + ukas nyheter + anmeldelse + lytterspørsmål. Varighet: 25 minutter per episode. Frekvens: Annenhver uke. Begrunnelse: Kort nok til å lytte i en buss-tur, spesifikk nok til å bygge et publikum, og annenhver uke gir nok tid til å produsere kvalitet.',
      },
    },
    {
      id: 'im-5-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-5-7-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er minimum opplastingshastighet anbefalt for direktestrømming i 720p?',
        options: [
          '1 Mbps',
          '5 Mbps',
          '50 Mbps',
          '100 Mbps',
        ],
        correctAnswer: 1,
        solution: 'Minimum 5 Mbps opplastingshastighet anbefales for stabil direktestrømming i 720p. For 1080p bør du ha minst 10 Mbps. Ustabil internettforbindelse gir hakking og dårlig seeropplevelse.',
      },
    },
    {
      id: 'im-5-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-5-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign podcast og direktestrømming som medieformater. Hva er fordeler og ulemper med hvert format?',
        solution: 'Podcast: Fordeler - kan lyttes når som helst, grundig redigert innhold, lav teknisk terskel, kan lyttes under andre aktiviteter. Ulemper - ingen direkte interaksjon med publikum, krever redigering, tar tid å bygge publikum. Direktestrømming: Fordeler - sanntids interaksjon med publikum via chat, autentisk og ufiltrert innhold, bygger fellesskap. Ulemper - krever stabil internettforbindelse, teknisk mer krevende, feil kan ikke redigeres bort, krever fast tidspunkt, publiktall avhenger av tidspunkt.',
      },
    },
    {
      id: 'im-5-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-5-7-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvilket program er gratis og mye brukt for direktestrømming?',
        options: [
          'Adobe Premiere Pro',
          'Final Cut Pro',
          'OBS Studio',
          'Logic Pro',
        ],
        correctAnswer: 2,
        solution: 'OBS Studio (Open Broadcaster Software) er gratis, åpen kildekode og det mest brukte programmet for direktestrømming. Det støtter scener, overlegg, flere kilder og kan strømme til de fleste plattformer.',
      },
    },
    {
      id: 'im-5-7-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-5-7-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en detaljert plan for en podcastepisode på 15-20 minutter. Inkluder tidsinndeling, innhold for hvert segment, og beskriv det tekniske oppsettet du trenger.',
        solution: 'Eksempel - Episode av "Skolepulsen" om skolevalget: 0:00-0:30 Intro med musikk og velkomst. 0:30-3:00 Presentasjon av tema: Hva handler skolevalget om? 3:00-10:00 Intervju med elevrådskandidat: Motivasjon, saker, visjoner. 10:00-14:00 Debattsegment: Vertene diskuterer de viktigste sakene. 14:00-16:00 Oppsummering og oppfordring til å stemme. 16:00-17:00 Outro med musikk. Teknisk oppsett: To USB-mikrofoner (vertene) + én myggemikrofon (gjest), opptak i Audacity, pop-filter, innspilling i lite rom med teppe og gardiner, eksport som MP3 192 kbps.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Podcast', definition: 'Lydinnhold distribuert som episoder via RSS-feed til podcastplattformer.' },
    { term: 'RSS-feed', definition: 'Datafil med metadata og lenker til lydfiler som muliggjør podcastdistribusjon.' },
    { term: 'Direktestrømming', definition: 'Sending av video og lyd i sanntid til publikum over internett.' },
    { term: 'OBS Studio', definition: 'Gratis programvare for direktestrømming og opptak.' },
    { term: 'LUFS', definition: 'Loudness Units Full Scale - mål for opplevd lydstyrke, standard for podcast er -16 LUFS.' },
    { term: 'Cover art', definition: 'Forsidebilde for en podcast, anbefalt 3000x3000 piksler.' },
  ],
};

// ============================================================================
// Eksport av del 5 kapitler
// ============================================================================

export const IM_VG1_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IM_VG1_5_1,
  CHAPTER_IM_VG1_5_2,
  CHAPTER_IM_VG1_5_3,
  CHAPTER_IM_VG1_5_4,
  CHAPTER_IM_VG1_5_5,
  CHAPTER_IM_VG1_5_6,
  CHAPTER_IM_VG1_5_7,
];
