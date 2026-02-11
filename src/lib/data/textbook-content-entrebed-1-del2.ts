/* eslint-disable */
// @ts-nocheck
/**
 * Entreprenørskap og bedriftsutvikling 1 (VG2) - Del 2: Idéutvikling og kreativitet
 * Kapittel 2.1-2.5
 *
 * Dekker LK20 kompetansemål:
 * - bruke kreative metoder for å utvikle forretningsideer
 * - analysere muligheter i markedet og vurdere forretningspotensialet
 * - gjennomføre enkle markedsundersøkelser og tolke resultatene
 * - utvikle en idé fra konsept til minimum viable product (MVP)
 * - identifisere og beskrive kundesegmenter og målgrupper
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Kreativitet og idégenerering
// ============================================================================

export const CHAPTER_ENTREBED_1_2_1: TextbookChapter = {
  id: 'entrebed-1-2-1',
  courseId: 'entrebed-1',
  chapterNumber: '2.1',
  title: 'Kreativitet og idégenerering',
  description: 'Lær om kreative teknikker som brainstorming, tankekart og andre metoder for å generere innovative forretningsideer.',
  estimatedMinutes: 22,
  competenceGoals: [
    'bruke kreative metoder for å utvikle forretningsideer',
    'anvende ulike idégenereringsteknikker i praksis',
  ],
  content: [
    {
      id: 'eb-2-1-intro',
      type: 'text',
      content: `## Kreativitet som nøkkel til entreprenørskap

Kreativitet er evnen til å tenke nytt, kombinere kjente elementer på nye måter og se muligheter der andre ser begrensninger. For en entreprenør er kreativitet selve drivkraften bak innovasjon.

I dette kapittelet skal du lære:
- Hva kreativitet er og hvorfor det er viktig for entreprenører
- Ulike kreative teknikker for idégenerering
- Hvordan du kan trene opp kreativiteten din
- Praktiske metoder du kan bruke i gruppearbeid og alene`,
    },
    {
      id: 'eb-2-1-def-1',
      type: 'definition',
      title: 'Kreativitet',
      content: `**Kreativitet** er evnen til å skape noe nytt eller originalt, enten det er en idé, et produkt, en løsning eller en prosess. I entreprenørskap handler kreativitet om å koble udekkede behov med nye løsninger.

**Divergent tenkning:** Å generere mange ulike ideer uten å vurdere dem. Man tenker bredt og åpent.

**Konvergent tenkning:** Å sortere, vurdere og velge blant ideene. Man snevrer inn og fokuserer.

En god idéprosess bruker begge formene: først divergent for å få flest mulig ideer, deretter konvergent for å velge de beste.`,
    },
    {
      id: 'eb-2-1-text-1',
      type: 'text',
      content: `### Brainstorming

Brainstorming er den mest kjente teknikken for idégenerering. Metoden ble utviklet av Alex Osborn på 1940-tallet og bygger på fire grunnregler:

**1. Kvantitet fremfor kvalitet**
Jo flere ideer, desto bedre. Ikke stopp ved den første gode ideen.

**2. Ingen kritikk underveis**
Alle ideer skrives ned uten å bli vurdert. Kritikk dreper kreativiteten og gjør at folk holder tilbake.

**3. Ville ideer er velkomne**
Overdrevne og uvanlige forslag kan føre til gjennombrudd. Det er lettere å temme en vill idé enn å gjøre en kjedelig idé spennende.

**4. Bygg videre på andres ideer**
Kombiner, utvid og forbedre forslag som allerede er lagt frem.

**Praktisk gjennomføring:**
- Samle 4–8 personer
- Definer problemstillingen tydelig
- Sett en tidsbegrensning (15–30 minutter)
- Skriv ned alle ideer på tavle eller post-it-lapper
- Vurder ideene etterpå, aldri underveis`,
    },
    {
      id: 'eb-2-1-def-2',
      type: 'definition',
      title: 'Tankekart (Mind Map)',
      content: `Et **tankekart** er en visuell teknikk for å organisere tanker og ideer rundt et sentralt tema. Du starter med et nøkkelord i midten og tegner grener utover med relaterte begreper, assosiasjoner og underkategorier.

**Fordeler med tankekart:**
- Stimulerer assosiativ tenkning
- Gir visuell oversikt over sammenhenger
- Lett å utvide og bygge videre på
- Kan brukes både individuelt og i grupper

**Slik lager du et tankekart:**
1. Skriv hovedtemaet i midten av et ark
2. Tegn hovedgrener med overordnede kategorier
3. Legg til undergrener med detaljer og assosiasjoner
4. Bruk farger, bilder og symboler for å gjøre det mer engasjerende
5. La grenene vokse fritt – ikke begrens deg`,
    },
    {
      id: 'eb-2-1-text-2',
      type: 'text',
      content: `### SCAMPER-metoden

SCAMPER er en strukturert kreativitetsteknikk som hjelper deg å forbedre eller fornye eksisterende produkter og tjenester. Hvert bokstav representerer en strategi:

| Bokstav | Strategi | Spørsmål |
|---------|----------|----------|
| **S** | Substitute (Erstatte) | Hva kan erstattes med noe annet? |
| **C** | Combine (Kombinere) | Kan vi slå sammen to ideer eller produkter? |
| **A** | Adapt (Tilpasse) | Kan vi tilpasse noe fra en annen bransje? |
| **M** | Modify (Endre) | Kan vi endre størrelse, form, farge eller funksjon? |
| **P** | Put to other use (Ny bruk) | Kan produktet brukes på en helt ny måte? |
| **E** | Eliminate (Fjerne) | Hva kan vi fjerne for å gjøre det enklere? |
| **R** | Reverse (Snu om) | Hva skjer om vi snur rekkefølgen eller rollene? |

**Eksempel:** En tradisjonell kafé analysert med SCAMPER:
- **S:** Erstatt vanlig kaffe med spesialkaffe fra lokale brennerier
- **C:** Kombiner kafé med bokhandel eller arbeidsrom
- **A:** Tilpass sushi-konseptet med «pick and choose»-kaker på samlebånd
- **M:** Endre til selvbetjening via app
- **P:** Bruk kaféen som kurssted på kveldstid
- **E:** Fjern kontanter – kun mobilbetaling
- **R:** La kundene lage sin egen kaffe (barista-opplevelse)`,
    },
    {
      id: 'eb-2-1-text-3',
      type: 'text',
      content: `### Andre kreative teknikker

**Brainwriting (6-3-5-metoden)**
Seks personer skriver ned tre ideer på fem minutter, og sender arket videre. Neste person bygger videre på ideene. Etter seks runder har du 108 ideer. Metoden fungerer godt for introvert grupper.

**Omvendt brainstorming**
I stedet for å spørre «Hvordan kan vi løse problemet?» spør du «Hvordan kan vi gjøre problemet verre?». Svarene snues deretter til løsninger. Teknikken bryter fastlåste tankemønstre.

**Tilfeldig ord-teknikk**
Velg et tilfeldig ord fra en ordbok eller et bilde fra et magasin. Tving frem koblinger mellom det tilfeldige elementet og problemet du jobber med. Uventede assosiasjoner kan utløse nye ideer.

**De seks tenkehattene (Edward de Bono)**
Gruppen diskuterer fra seks ulike perspektiver:
- **Hvit hatt:** Fakta og data
- **Rød hatt:** Følelser og intuisjon
- **Svart hatt:** Kritisk vurdering og risikoer
- **Gul hatt:** Optimisme og fordeler
- **Grønn hatt:** Kreativitet og nye ideer
- **Blå hatt:** Prosess og oppsummering`,
    },
    {
      id: 'eb-2-1-tip-1',
      type: 'tip',
      title: 'Tips for å trene kreativiteten',
      content: `Kreativitet er ikke noe du enten har eller ikke har – det er en ferdighet du kan trene:

- **Vær nysgjerrig:** Spør «hvorfor» og «hva om» ofte
- **Søk nye opplevelser:** Prøv noe du aldri har gjort før
- **Les bredt:** Kunnskap fra ulike felt gir nye koblinger
- **Skriv ned ideene dine:** Ha alltid en notatbok eller app tilgjengelig
- **Godta feil:** Feilsteg er en del av den kreative prosessen
- **Ta pauser:** Hjernen jobber med problemer i bakgrunnen`,
    },
    {
      id: 'eb-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Brainstorming i praksis',
      problem: 'En gruppe elever skal starte ungdomsbedrift og trenger forretningsideer. De bruker brainstorming med tema «problemer ungdom opplever i hverdagen». Hvordan kan prosessen se ut?',
      solution: `**Steg 1: Definere problemstillingen**
«Hvilke hverdagsproblemer opplever ungdom som vi kan løse med et produkt eller en tjeneste?»

**Steg 2: Brainstorming (20 minutter)**
Ideene skrives på post-it-lapper:
- Vanskelig å finne leksehjelp
- Kjedelig matpakke
- Mangler studierom på ettermiddagen
- Stress og søvnproblemer
- Vanskelig å finne brukt sportsutstyr
- Bærekraftige klær er dyrt

**Steg 3: Gruppering**
Ideene sorteres i kategorier: Skole/læring, Mat, Helse, Bærekraft, Fritid

**Steg 4: Utvelgelse**
Gruppen stemmer og velger de tre mest lovende ideene for videre analyse:
1. Plattform for brukt sportsutstyr
2. App for leksehjelp mellom elever
3. Bærekraftig matpakke-abonnement`,
    },
    {
      id: 'eb-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb-2-1-ex-1',
        number: '2.1.1',
        type: 'multiple-choice',
        task: 'Hva er den viktigste regelen under en brainstorming-økt?',
        options: [
          { id: 'a', text: 'Kun de beste ideene skal noteres', isCorrect: false },
          { id: 'b', text: 'Ingen kritikk av ideer underveis', isCorrect: true },
          { id: 'c', text: 'Bare lederen skal komme med forslag', isCorrect: false },
          { id: 'd', text: 'Alle ideer må være realistiske', isCorrect: false },
        ],
        solution: 'Under brainstorming skal alle ideer noteres uten kritikk. Kritikk hemmer kreativiteten og gjør at deltakerne holder tilbake. Vurdering av ideene skjer etterpå.',
      },
    },
    {
      id: 'eb-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb-2-1-ex-2',
        number: '2.1.2',
        type: 'multiple-choice',
        task: 'Hva betyr bokstaven «C» i SCAMPER-metoden?',
        options: [
          { id: 'a', text: 'Create – Skape noe helt nytt', isCorrect: false },
          { id: 'b', text: 'Combine – Kombinere to ideer eller produkter', isCorrect: true },
          { id: 'c', text: 'Cancel – Kansellere en dårlig idé', isCorrect: false },
          { id: 'd', text: 'Compare – Sammenligne med konkurrenter', isCorrect: false },
        ],
        solution: 'C i SCAMPER står for Combine – å slå sammen to eksisterende produkter, tjenester eller ideer for å skape noe nytt. For eksempel er smarttelefonen en kombinasjon av telefon, kamera, musikkspiller og datamaskin.',
      },
    },
    {
      id: 'eb-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb-2-1-ex-3',
        number: '2.1.3',
        type: 'multiple-choice',
        task: 'Hva kjennetegner divergent tenkning?',
        options: [
          { id: 'a', text: 'Man sorterer og vurderer ideer systematisk', isCorrect: false },
          { id: 'b', text: 'Man velger den beste ideen raskt', isCorrect: false },
          { id: 'c', text: 'Man genererer mange ulike ideer uten å vurdere dem', isCorrect: true },
          { id: 'd', text: 'Man kopierer løsninger fra konkurrenter', isCorrect: false },
        ],
        solution: 'Divergent tenkning handler om å tenke bredt og åpent, og generere flest mulig ideer uten å vurdere dem underveis. Det er det motsatte av konvergent tenkning, som handler om å snevre inn og velge.',
      },
    },
    {
      id: 'eb-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb-2-1-ex-4',
        number: '2.1.4',
        type: 'classic',
        task: 'Forklar hva brainwriting (6-3-5-metoden) er, og nevn en fordel denne teknikken har sammenlignet med tradisjonell brainstorming.',
        hints: ['Tenk på hvordan deltakerne bidrar i de to metodene'],
        solution: 'Brainwriting er en kreativitetsteknikk der seks personer skriver ned tre ideer på fem minutter, og sender arket videre til neste person som bygger videre. En fordel er at alle bidrar like mye – også introverte personer som kanskje ikke ville tatt ordet i en vanlig brainstorming. Metoden gir også mange ideer på kort tid (opptil 108 ideer).',
      },
    },

    // --- Samleoppgaver ---
    {
      id: 'eb-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb-2-1-ex-5',
        number: '2.1.5',
        type: 'classic',
        task: 'Velg en av teknikkene du har lært om (brainstorming, tankekart, SCAMPER, brainwriting eller omvendt brainstorming). Bruk teknikken til å generere minst 10 ideer knyttet til temaet «bærekraftig transport for ungdom». Beskriv hvilken teknikk du valgte, hvordan du gjennomførte den, og hvilke ideer du kom frem til.',
        hints: ['Husk at kvantitet er viktigere enn kvalitet i denne fasen'],
        solution: 'Besvarelsen bør inneholde: 1) Valgt teknikk med kort forklaring av hvordan den fungerer. 2) Beskrivelse av gjennomføringen (tid brukt, antall deltakere hvis gruppearbeid). 3) Minst 10 ideer listet opp, fra realistiske til kreative. 4) Kort refleksjon over hvilke ideer som virker mest lovende. Eksempler på ideer: samkjøringsapp for skoleveien, elsykkel-deling, bærekraftig skolebuss-rute, sykkelverksted drevet av elever.',
      },
    },
    {
      id: 'eb-2-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb-2-1-ex-6',
        number: '2.1.6',
        type: 'classic',
        task: 'Bruk SCAMPER-metoden på et produkt du bruker daglig (for eksempel skolesekken, vannflasken eller en app). Gå gjennom alle syv bokstavene og skriv ned minst én idé for hver.',
        solution: 'Eksempel med en skolesekk: S – Erstatte stoffet med resirkulert havplast. C – Kombinere med solcellepanel for lading av mobil. A – Tilpasse ergonomi fra fjellsekker. M – Endre til modulbasert system der du bytter lommer etter behov. P – Bruke sekken som sitteunderlag på utflukter. E – Fjerne unødvendige lommer for å spare vekt. R – Snu designet slik at den kan brukes som sittepute eller ryggsekk.',
      },
    },
    {
      id: 'eb-2-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'eb-2-1-ex-7',
        number: '2.1.7',
        type: 'classic',
        task: 'Lag et tankekart med «Ungdomsbedrift» som sentralt tema. Inkluder minst fire hovedgrener og tre undergrener per hovedgren. Presenter tankekartet for klassen og forklar sammenhengene.',
        solution: 'Tankekartet bør ha minst fire hovedgrener, for eksempel: 1) Produktideer (bærekraft, teknologi, mat, tjenester). 2) Målgruppe (ungdom, foreldre, lokalmiljø). 3) Markedsføring (sosiale medier, plakater, events). 4) Økonomi (budsjett, prising, inntektskilder). Hver hovedgren bør ha tre eller flere undergrener med konkrete eksempler og detaljer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Kreativitet', definition: 'Evnen til å skape noe nytt eller originalt, enten det er en idé, et produkt eller en prosess.' },
    { term: 'Brainstorming', definition: 'Gruppebasert idégenereringsteknikk der alle forslag noteres uten kritikk.' },
    { term: 'Tankekart', definition: 'Visuell teknikk for å organisere tanker og ideer rundt et sentralt tema med grener og undergrener.' },
    { term: 'SCAMPER', definition: 'Strukturert kreativitetsteknikk med syv strategier for å forbedre eksisterende produkter.' },
    { term: 'Divergent tenkning', definition: 'Å generere mange ulike ideer uten å vurdere dem.' },
    { term: 'Konvergent tenkning', definition: 'Å sortere, vurdere og velge blant ideene.' },
  ],
};

// ============================================================================
// Kapittel 2.2: Mulighetsanalyse
// ============================================================================

export const CHAPTER_ENTREBED_1_2_2: TextbookChapter = {
  id: 'entrebed-1-2-2',
  courseId: 'entrebed-1',
  chapterNumber: '2.2',
  title: 'Mulighetsanalyse',
  description: 'Lær å identifisere behov i markedet, oppdage trender og finne hull som kan utnyttes til lønnsomme forretningsideer.',
  estimatedMinutes: 23,
  competenceGoals: [
    'analysere muligheter i markedet og vurdere forretningspotensialet',
    'identifisere kundebehov og trender',
  ],
  content: [
    {
      id: 'eb-2-2-intro',
      type: 'text',
      content: `## Fra idé til mulighet

Ikke alle ideer er gode forretningsmuligheter. En mulighetsanalyse hjelper deg å skille mellom ideer som bare er morsomme å tenke på, og ideer som faktisk kan bli til lønnsomme virksomheter.

I dette kapittelet skal du lære:
- Hva en forretningsmulighet er og hva som skiller den fra en idé
- Hvordan du identifiserer behov, trender og hull i markedet
- Verktøy for å vurdere om en idé har kommersielt potensial
- Å gjennomføre en enkel mulighetsanalyse`,
    },
    {
      id: 'eb-2-2-def-1',
      type: 'definition',
      title: 'Forretningsmulighet',
      content: `En **forretningsmulighet** er en situasjon der det finnes et udekket behov i markedet som kan løses med et produkt eller en tjeneste på en lønnsom måte.

**Tre krav til en god forretningsmulighet:**
1. **Reelt behov:** Noen har et problem som trenger en løsning
2. **Betalingsvilje:** Kundene er villige til å betale for løsningen
3. **Gjennomførbarhet:** Det er mulig å levere løsningen med tilgjengelige ressurser

En idé uten disse tre elementene er bare en idé – ikke en mulighet.`,
    },
    {
      id: 'eb-2-2-text-1',
      type: 'text',
      content: `### Identifisere behov

Forretningsideer oppstår når du finner et behov som ikke er godt nok dekket. Behov kan identifiseres på flere måter:

**Observasjon**
Se hvordan folk bruker produkter og tjenester. Legg merke til frustrasjoner, omveier og workarounds. Når noen sier «Jeg skulle ønske det fantes...», er det et signal.

**Egne erfaringer**
Mange suksessfulle bedrifter er startet fordi gründeren selv opplevde et problem. Airbnb ble startet fordi gründerne ikke hadde råd til hotell under en konferanse.

**Kundeklager**
Klager på eksisterende produkter avslører forbedringsmuligheter. Les anmeldelser på nett, følg med i sosiale medier og lytt til hva folk er misfornøyde med.

**Demografiske endringer**
Befolkningsendringer skaper nye behov. For eksempel: eldrebølgen skaper behov for nye helse- og omsorgstjenester, mens urbanisering øker behovet for smarte transportløsninger.`,
    },
    {
      id: 'eb-2-2-text-2',
      type: 'text',
      content: `### Trender og megatrender

En **trend** er en retning i samfunnsutviklingen som påvirker folks behov og adferd. Å forstå trender gir deg mulighet til å være tidlig ute med nye løsninger.

**Viktige megatrender:**

| Megatrend | Eksempler på muligheter |
|-----------|------------------------|
| Bærekraft og klima | Gjenbruk, reparasjon, grønne produkter |
| Digitalisering | Apper, plattformer, automatisering |
| Helse og velvære | Treningsapper, sunn mat, mental helse |
| Delingsøkonomi | Utleie, bytting, samkjøring |
| Personalisering | Skreddersydde produkter, AI-anbefalinger |

**Lokale trender:**
Det er også viktig å følge med på lokale trender. Hva skjer i ditt nærmiljø? Nye boligfelt, endringer i skolestrukturen, ny infrastruktur – alt dette kan skape forretingsmuligheter.`,
    },
    {
      id: 'eb-2-2-def-2',
      type: 'definition',
      title: 'Hull i markedet',
      content: `Et **hull i markedet** (også kalt markedsgap) er et område der kundenes behov ikke er tilfredsstilt av eksisterende tilbud. Det kan skyldes:

- **Manglende tilbud:** Ingen tilbyr produktet eller tjenesten i dette området
- **Dårlig kvalitet:** Eksisterende tilbud holder ikke god nok kvalitet
- **For høy pris:** Kundene ønsker et rimeligere alternativ
- **Feil målgruppe:** Ingen retter seg mot denne spesifikke kundegruppen
- **Utdatert løsning:** Eksisterende tilbud har ikke fulgt med teknologisk utvikling

For å finne hull i markedet kan du bruke verktøy som SWOT-analyse av konkurrenter, kundereisekartlegging og behovsmatrise.`,
    },
    {
      id: 'eb-2-2-text-3',
      type: 'text',
      content: `### Verktøy for mulighetsanalyse

**Mulighetsmatrisen**
Et enkelt verktøy der du vurderer ideer langs to akser:
- **X-aksen:** Markedspotensial (lite → stort)
- **Y-aksen:** Gjennomførbarhet (vanskelig → enkelt)

Ideer som havner øverst til høyre (stort potensial + enkelt å gjennomføre) er de mest lovende.

**PESTEL-analyse**
Kartlegger faktorer i omgivelsene som påvirker muligheten:
- **P**olitiske faktorer (lover, regler, støtteordninger)
- **E**konomiske faktorer (kjøpekraft, renter, arbeidsledighet)
- **S**osiale faktorer (demografi, holdninger, livsstil)
- **T**eknologiske faktorer (nye teknologier, digitalisering)
- **E**nvironmental/miljø (klima, bærekraft, ressurser)
- **L**egale faktorer (reguleringer, patenter, lisenser)`,
    },
    {
      id: 'eb-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Mulighetsanalyse av en reparasjonstjeneste',
      problem: 'En elev observerer at mange ungdommer kaster ødelagte klær og elektronikk i stedet for å reparere dem. Hvordan kan hun gjennomføre en enkel mulighetsanalyse?',
      solution: `**Behov:** Ungdom har ødelagte ting de vil beholde, men mangler kunnskap og verktøy til å reparere.

**Trend:** Bærekraft og gjenbruk er sterke trender. «Repair cafés» vokser i Europa.

**Hull i markedet:** Det finnes ingen reparasjonstjeneste rettet mot ungdom i nærområdet. Eksisterende tjenester er dyre og rettet mot voksne.

**Vurdering av gjennomførbarhet:**
- Lave oppstartskostnader (verktøy, lokale på skolen)
- Kompetanse kan læres via YouTube og kurs
- Kan starte i det små og skalere

**Betalingsvilje:** Undersøkelse blant medelever viser at 70 % ville betalt 50–150 kr for enkel reparasjon av klær eller elektronikk.

**Konklusjon:** Ideen scorer høyt på både markedspotensial og gjennomførbarhet – den er en god forretningsmulighet.`,
    },
    {
      id: 'eb-2-2-note-1',
      type: 'note',
      title: 'Timing er avgjørende',
      content: `En god idé til feil tid er fortsatt en dårlig forretning. Mange innovasjoner har feilet fordi markedet ikke var klart – og lyktes når noen prøvde igjen senere. Spør deg selv: Hvorfor er dette den rette tiden for denne ideen? Hva har endret seg som gjør det mulig nå?`,
    },
    {
      id: 'eb-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb-2-2-ex-1',
        number: '2.2.1',
        type: 'multiple-choice',
        task: 'Hva skiller en forretningsmulighet fra en vanlig idé?',
        options: [
          { id: 'a', text: 'En forretningsmulighet krever stor kapital', isCorrect: false },
          { id: 'b', text: 'En forretningsmulighet dekker et reelt behov, har betalingsvillige kunder og er gjennomførbar', isCorrect: true },
          { id: 'c', text: 'En forretningsmulighet må være helt unik og aldri prøvd før', isCorrect: false },
          { id: 'd', text: 'En forretningsmulighet er det samme som en idé', isCorrect: false },
        ],
        solution: 'En forretningsmulighet skiller seg fra en vanlig idé ved at den oppfyller tre krav: det finnes et reelt behov, kundene er villige til å betale for løsningen, og det er mulig å gjennomføre med tilgjengelige ressurser.',
      },
    },
    {
      id: 'eb-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb-2-2-ex-2',
        number: '2.2.2',
        type: 'multiple-choice',
        task: 'Hva er et hull i markedet?',
        options: [
          { id: 'a', text: 'Et marked der det allerede er for mange tilbydere', isCorrect: false },
          { id: 'b', text: 'Et område der kundenes behov ikke er tilfredsstilt av eksisterende tilbud', isCorrect: true },
          { id: 'c', text: 'Et marked som er for lite til å være lønnsomt', isCorrect: false },
          { id: 'd', text: 'En feil i konkurrentenes markedsføring', isCorrect: false },
        ],
        solution: 'Et hull i markedet (markedsgap) er et område der kundenes behov ikke er godt nok dekket. Det kan skyldes manglende tilbud, dårlig kvalitet, for høy pris, feil målgruppe eller utdaterte løsninger.',
      },
    },
    {
      id: 'eb-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb-2-2-ex-3',
        number: '2.2.3',
        type: 'multiple-choice',
        task: 'Hva står «S» for i PESTEL-analysen?',
        options: [
          { id: 'a', text: 'Strategiske faktorer', isCorrect: false },
          { id: 'b', text: 'Sosiale faktorer', isCorrect: true },
          { id: 'c', text: 'Salgsrelaterte faktorer', isCorrect: false },
          { id: 'd', text: 'Sikkerhetsfaktorer', isCorrect: false },
        ],
        solution: 'S i PESTEL står for sosiale faktorer – det vil si demografiske endringer, holdninger, livsstil og kulturelle forhold som påvirker markedet og forretningsmulighetene.',
      },
    },
    {
      id: 'eb-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb-2-2-ex-4',
        number: '2.2.4',
        type: 'classic',
        task: 'Velg en av megatrendene fra kapittelet (bærekraft, digitalisering, helse, delingsøkonomi eller personalisering). Beskriv tre konkrete forretningsideer som kan utnytte denne trenden.',
        solution: 'Eksempel med bærekraft: 1) Bytteapp for brukte skolebøker der elever kan selge og kjøpe brukte bøker lokalt. 2) Abonnementstjeneste for reparasjon av klær – kunder sender inn ødelagte plagg og får dem tilbake reparert. 3) Gjenbruksbutikk med fokus på upcycling, der gamle møbler og klær blir redesignet og solgt som unike produkter.',
      },
    },

    // --- Samleoppgaver ---
    {
      id: 'eb-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb-2-2-ex-5',
        number: '2.2.5',
        type: 'classic',
        task: 'Gjennomfør en enkel mulighetsanalyse for en forretningsidé du har. Beskriv: 1) Hvilket behov dekker ideen? 2) Hvilken trend støtter den? 3) Finnes det et hull i markedet? 4) Er kundene villige til å betale? 5) Er ideen gjennomførbar med dine ressurser?',
        hints: ['Bruk mulighetsmatrisen for å vurdere potensial vs. gjennomførbarhet'],
        solution: 'En god mulighetsanalyse inneholder: 1) Tydelig beskrivelse av kundebehovet med konkrete eksempler. 2) Kobling til minst én relevant trend. 3) Analyse av eksisterende tilbud og hva som mangler. 4) Vurdering av betalingsvilje, gjerne basert på uformell research. 5) Realistisk vurdering av hva som kreves av tid, penger og kompetanse.',
        allowsUpload: true,
      },
    },
    {
      id: 'eb-2-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb-2-2-ex-6',
        number: '2.2.6',
        type: 'classic',
        task: 'Gjennomfør en forenklet PESTEL-analyse for en lokal forretningsidé (for eksempel en kafé, en nettbutikk eller en tjeneste for nærområdet). Beskriv minst én relevant faktor for hver av de seks kategoriene.',
        solution: 'Eksempel for en ungdomsdrevet kafé: P – Kommunale tilskudd til ungdomsentreprenørskap. E – Ungdom har begrenset kjøpekraft, men bruker penger på sosiale opplevelser. S – Trend der ungdom ønsker «tredjesteder» utenom skole og hjem. T – Bestillingsapper og mobilbetaling senker terskelen. E – Fokus på bærekraftig emballasje og matsvinn. L – Krav til matservering (Mattilsynet) og aldersgrenser.',
        allowsUpload: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Forretningsmulighet', definition: 'En situasjon der et udekket behov kan løses lønnsomt med et produkt eller en tjeneste.' },
    { term: 'Hull i markedet', definition: 'Et område der kundenes behov ikke er tilfredsstilt av eksisterende tilbud.' },
    { term: 'Megatrend', definition: 'En langvarig retning i samfunnsutviklingen som påvirker behov og adferd over tid.' },
    { term: 'PESTEL-analyse', definition: 'Verktøy som kartlegger politiske, økonomiske, sosiale, teknologiske, miljømessige og legale faktorer.' },
    { term: 'Mulighetsmatrise', definition: 'Verktøy for å vurdere ideer langs aksene markedspotensial og gjennomførbarhet.' },
  ],
};

// ============================================================================
// Kapittel 2.3: Markedsundersøkelser
// ============================================================================

export const CHAPTER_ENTREBED_1_2_3: TextbookChapter = {
  id: 'entrebed-1-2-3',
  courseId: 'entrebed-1',
  chapterNumber: '2.3',
  title: 'Markedsundersøkelser',
  description: 'Lær å gjennomføre markedsundersøkelser med primær- og sekundærdata, spørreundersøkelser og intervjuer for å teste forretningsideer.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjennomføre enkle markedsundersøkelser og tolke resultatene',
    'skille mellom primær- og sekundærdata og velge riktig metode',
  ],
  content: [
    {
      id: 'eb-2-3-intro',
      type: 'text',
      content: `## Hvorfor gjøre markedsundersøkelser?

Du kan ha verdens beste idé, men hvis ingen vil kjøpe produktet ditt, er det ingen forretning. Markedsundersøkelser hjelper deg å teste antakelsene dine før du investerer tid og penger.

I dette kapittelet skal du lære:
- Forskjellen mellom primær- og sekundærdata
- Hvordan du lager gode spørreundersøkelser
- Hvordan du gjennomfører effektive intervjuer
- Hvordan du tolker og presenterer funn fra undersøkelser`,
    },
    {
      id: 'eb-2-3-def-1',
      type: 'definition',
      title: 'Primærdata og sekundærdata',
      content: `**Primærdata** er informasjon du samler inn selv, direkte fra kilden. Du designer undersøkelsen og kontrollerer hva som blir spurt.

Eksempler: Spørreundersøkelser, intervjuer, observasjon, fokusgrupper, eksperimenter.

**Sekundærdata** er informasjon som allerede er samlet inn av andre, for et annet formål. Du bruker eksisterende data til din analyse.

Eksempler: SSB-statistikk, bransjeanalyser, forskningsrapporter, avisartikler, offentlige registre.

| | Primærdata | Sekundærdata |
|---|---|---|
| **Fordeler** | Skreddersydd, aktuelt, relevant | Billig, raskt, stort omfang |
| **Ulemper** | Tidkrevende, kostbart, lite utvalg | Kan være utdatert, ikke tilpasset |
| **Når bruke** | Spesifikke spørsmål om din idé | Bakgrunnsinformasjon og kontekst |`,
    },
    {
      id: 'eb-2-3-text-1',
      type: 'text',
      content: `### Kvantitative og kvalitative metoder

**Kvantitativ metode – tall og statistikk**
Du samler inn målbare data fra mange respondenter for å finne mønstre og generelle tendenser.

- Spørreundersøkelser med lukkede spørsmål
- Statistikk og registerdata
- A/B-testing
- Resultatene presenteres som tall, prosenter og diagrammer

**Kvalitativ metode – dybde og forståelse**
Du samler inn detaljerte beskrivelser fra færre personer for å forstå hvorfor folk tenker og handler som de gjør.

- Intervjuer med åpne spørsmål
- Fokusgrupper
- Observasjon
- Resultatene presenteres som sitater, temaer og mønstre

**I praksis kombinerer du ofte begge:** Start med kvalitative intervjuer for å forstå problemet, og bruk funnene til å lage en kvantitativ spørreundersøkelse som tester om funnene gjelder for et større utvalg.`,
    },
    {
      id: 'eb-2-3-text-2',
      type: 'text',
      content: `### Spørreundersøkelser

En god spørreundersøkelse gir pålitelige data som du kan ta beslutninger basert på. Her er retningslinjer for å lage effektive spørreundersøkelser:

**Struktur:**
1. Start med en kort introduksjon (hvem du er, formål, tidsbruk)
2. Begynn med enkle, ufarlige spørsmål
3. Plasser sensitive spørsmål mot slutten
4. Avslutt med takk og eventuelt kontaktinfo

**Tips for gode spørsmål:**
- Still ett spørsmål om gangen (ikke dobbeltspørsmål)
- Unngå ledende spørsmål («Er du ikke enig i at...?»)
- Bruk klart og enkelt språk
- Inkluder «vet ikke»-alternativ der det er relevant
- Test undersøkelsen på 2–3 personer før du sender den ut

**Svaralternativer:**
- Bruk Likert-skala (1–5 eller «helt uenig» til «helt enig»)
- Ha balanserte alternativer (like mange positive og negative)
- Inkluder «annet»-alternativ med fritekstfelt

**Verktøy:** Google Forms, Microsoft Forms, SurveyMonkey, Mentimeter`,
    },
    {
      id: 'eb-2-3-text-3',
      type: 'text',
      content: `### Intervjuer

Intervjuer gir dypere innsikt enn spørreundersøkelser og er spesielt nyttige tidlig i prosessen, når du vil forstå kundenes behov og opplevelser.

**Forberedelse:**
- Lag en intervjuguide med 5–10 hovedspørsmål
- Planlegg oppfølgingsspørsmål
- Informer om formål, tidsbruk og anonymitet
- Avtal tidspunkt og sted

**Gjennomføring:**
- Lytt mer enn du snakker (80/20-regelen)
- Still åpne spørsmål: «Fortell om...», «Hvordan opplever du...»
- Følg opp interessante svar: «Kan du utdype det?»
- Ikke led respondenten mot ønskede svar
- Ta notater eller spør om tillatelse til å ta opp

**Etter intervjuet:**
- Skriv ut hovedfunn umiddelbart mens du husker
- Se etter mønstre og temaer på tvers av intervjuer
- Bruk direkte sitater for å illustrere funn`,
    },
    {
      id: 'eb-2-3-def-2',
      type: 'definition',
      title: 'Utvalg og representativitet',
      content: `**Utvalg** er gruppen personer som deltar i undersøkelsen din.

**Populasjon** er hele gruppen du ønsker å si noe om (for eksempel «alle elever på VG2 i Oslo»).

**Representativt utvalg** betyr at utvalget gjenspeiler populasjonen – altså at svarene gir et korrekt bilde av hele målgruppen.

**Utfordringer:**
- For lite utvalg gir usikre resultater
- Skjevt utvalg (bare venner, bare én klasse) gir misvisende resultater
- Lav svarprosent kan gjøre resultatene lite representative

**Tommelfingerregel:** For en ungdomsbedrift er 30–50 svar fra målgruppen et godt utgangspunkt for en spørreundersøkelse.`,
    },
    {
      id: 'eb-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Markedsundersøkelse for en matpakke-tjeneste',
      problem: 'En ungdomsbedrift vil tilby ferdiglagde, sunne matpakker til skoleelever. Hvordan kan de undersøke om det er marked for ideen?',
      solution: `**Steg 1: Sekundærdata**
- SSB: Hvor mange VGS-elever er det i kommunen?
- Helsedirektoratet: Statistikk om ungdoms matvaner
- Artikler om matpakketrender og skolekantiner

**Steg 2: Kvalitative intervjuer (5–8 elever)**
Spørsmål: «Hva spiser du til lunsj?», «Hva er det verste med matpakken?», «Hva ville den perfekte lunsjen vært?»

**Steg 3: Kvantitativ spørreundersøkelse (50+ elever)**
- Hvor ofte tar du med matpakke? (Alltid / Ofte / Sjelden / Aldri)
- Hva ville du betalt for en ferdig, sunn matpakke? (Under 30 kr / 30-50 kr / 50-70 kr / Over 70 kr)
- Hvilke allergier eller kostholdsbehov har du?

**Steg 4: Analyse**
Resultatene viser at 60 % sjelden tar med matpakke, og 45 % ville betalt 30–50 kr for en sunn matpakke. Konklusjon: Det finnes et marked, men prisen må holdes under 50 kr.`,
    },
    {
      id: 'eb-2-3-warning-1',
      type: 'warning',
      title: 'Vanlige feil i markedsundersøkelser',
      content: `- **Bekreftelsestendens:** Du stiller spørsmål som bekrefter det du allerede tror
- **Ledende spørsmål:** «Ville du ikke elsket en app som...?»
- **For lite utvalg:** Du spør bare vennene dine
- **Dobbeltspørsmål:** «Liker du sunn og billig mat?» (to spørsmål i ett)
- **Hypotetiske svar:** Folk sier de ville kjøpt, men gjør det ikke i praksis
- **Ignorere negative funn:** Du overser data som motstrider ideen din`,
    },
    {
      id: 'eb-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb-2-3-ex-1',
        number: '2.3.1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom primærdata og sekundærdata?',
        options: [
          { id: 'a', text: 'Primærdata er alltid bedre enn sekundærdata', isCorrect: false },
          { id: 'b', text: 'Primærdata samler du inn selv, sekundærdata er samlet inn av andre', isCorrect: true },
          { id: 'c', text: 'Primærdata er gratis, sekundærdata koster penger', isCorrect: false },
          { id: 'd', text: 'Primærdata er kvantitativ, sekundærdata er kvalitativ', isCorrect: false },
        ],
        solution: 'Primærdata er data du samler inn selv (f.eks. gjennom spørreundersøkelser eller intervjuer), mens sekundærdata er data som allerede er samlet inn av andre (f.eks. SSB-statistikk eller bransjeanalyser). Begge typene har sine styrker og svakheter.',
      },
    },
    {
      id: 'eb-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb-2-3-ex-2',
        number: '2.3.2',
        type: 'multiple-choice',
        task: 'Hvilken av disse er et eksempel på et ledende spørsmål?',
        options: [
          { id: 'a', text: '«Hvor ofte handler du på nett?»', isCorrect: false },
          { id: 'b', text: '«Hva synes du om vår fantastiske nye tjeneste?»', isCorrect: true },
          { id: 'c', text: '«Hvilken betalingsmetode foretrekker du?»', isCorrect: false },
          { id: 'd', text: '«Hva er viktigst for deg når du velger kafé?»', isCorrect: false },
        ],
        solution: 'Spørsmålet «Hva synes du om vår fantastiske nye tjeneste?» er ledende fordi ordet «fantastiske» antyder at tjenesten er god, og påvirker respondenten til å svare positivt. Nøytral formulering: «Hva synes du om den nye tjenesten?»',
      },
    },
    {
      id: 'eb-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb-2-3-ex-3',
        number: '2.3.3',
        type: 'multiple-choice',
        task: 'Hva kjennetegner kvalitativ forskning?',
        options: [
          { id: 'a', text: 'Mange respondenter og statistiske analyser', isCorrect: false },
          { id: 'b', text: 'Lukkede spørsmål med faste svaralternativer', isCorrect: false },
          { id: 'c', text: 'Dybdeintervjuer med åpne spørsmål og fokus på forståelse', isCorrect: true },
          { id: 'd', text: 'Resultatene presenteres alltid som prosenter', isCorrect: false },
        ],
        solution: 'Kvalitativ forskning handler om å forstå «hvorfor» og «hvordan» gjennom dybdeintervjuer, observasjon og fokusgrupper. Man samler inn detaljerte beskrivelser fra færre personer, i motsetning til kvantitativ forskning som handler om tall og statistikk fra mange respondenter.',
      },
    },
    {
      id: 'eb-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb-2-3-ex-4',
        number: '2.3.4',
        type: 'classic',
        task: 'Lag tre eksempler på gode spørsmål til en spørreundersøkelse om ungdoms bruk av strømmetjenester (Netflix, Spotify osv.). Forklar hvorfor spørsmålene er gode.',
        solution: '1) «Hvor mange timer per uke bruker du på strømmetjenester?» – Godt fordi det er konkret, nøytralt og målbart. 2) «Rangér følgende faktorer etter viktighet når du velger strømmetjeneste: pris, innhold, brukervennlighet, tilgjengelighet offline» – Godt fordi det bruker rangering og gir sammenlignbare data. 3) «Hvor fornøyd er du med ditt nåværende strømmeabonnement? (1 = svært misfornøyd, 5 = svært fornøyd)» – Godt fordi det bruker Likert-skala med balanserte alternativer.',
      },
    },

    // --- Samleoppgaver ---
    {
      id: 'eb-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb-2-3-ex-5',
        number: '2.3.5',
        type: 'classic',
        task: 'Lag en komplett spørreundersøkelse med minst 8 spørsmål for å teste en forretningsidé du har. Undersøkelsen skal inneholde en introduksjon, en blanding av lukkede og åpne spørsmål, og en avslutning. Send den til minst 15 personer og presenter resultatene med enkle diagrammer.',
        hints: ['Husk å teste undersøkelsen på 2–3 personer først', 'Bruk Google Forms eller lignende verktøy'],
        solution: 'Besvarelsen bør vise: 1) En tydelig introduksjon med formål. 2) Minst 8 spørsmål med variasjon i spørsmålstype (flervalg, Likert-skala, rangering og åpne spørsmål). 3) Ingen ledende eller doble spørsmål. 4) Resultater fra minst 15 respondenter. 5) Presentasjon med diagrammer (søyle, kake). 6) Kort analyse av hovedfunn og hva de betyr for forretningsideen.',
        allowsUpload: true,
      },
    },
    {
      id: 'eb-2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb-2-3-ex-6',
        number: '2.3.6',
        type: 'classic',
        task: 'Gjennomfør to kvalitative intervjuer med potensielle kunder for en forretningsidé. Lag en intervjuguide med minst 6 spørsmål, gjennomfør intervjuene, og skriv en rapport med hovedfunn. Sammenlign svarene fra de to intervjuene – hva var likt og hva var forskjellig?',
        solution: 'Rapporten bør inneholde: 1) Intervjuguide med tydelige, åpne spørsmål. 2) Kort beskrivelse av intervjuobjektene (alder, bakgrunn, uten å oppgi navn). 3) Hovedfunn fra hvert intervju med direkte sitater. 4) Sammenligning av likheter og forskjeller. 5) Konklusjon: Hva lærte du om kundenes behov som du ikke visste fra før? Hvordan påvirker dette forretningsideen din?',
        allowsUpload: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Primærdata', definition: 'Data du samler inn selv gjennom spørreundersøkelser, intervjuer, observasjon eller eksperimenter.' },
    { term: 'Sekundærdata', definition: 'Data som allerede er samlet inn av andre, for eksempel statistikk fra SSB eller bransjeanalyser.' },
    { term: 'Kvantitativ metode', definition: 'Forskningsmetode som samler inn målbare data fra mange respondenter for å finne mønstre.' },
    { term: 'Kvalitativ metode', definition: 'Forskningsmetode som samler inn detaljerte beskrivelser fra færre personer for å forstå «hvorfor».' },
    { term: 'Representativt utvalg', definition: 'Et utvalg som gjenspeiler hele målgruppen slik at resultatene kan generaliseres.' },
    { term: 'Likert-skala', definition: 'Svarskala fra f.eks. «helt uenig» til «helt enig», typisk med 5 eller 7 punkter.' },
  ],
};

// ============================================================================
// Kapittel 2.4: Fra idé til konsept
// ============================================================================

export const CHAPTER_ENTREBED_1_2_4: TextbookChapter = {
  id: 'entrebed-1-2-4',
  courseId: 'entrebed-1',
  chapterNumber: '2.4',
  title: 'Fra idé til konsept',
  description: 'Lær å velge den beste ideen, utvikle den til et konkret konsept og bygge et minimum viable product (MVP) for å teste markedet.',
  estimatedMinutes: 24,
  competenceGoals: [
    'utvikle en idé fra konsept til minimum viable product (MVP)',
    'bruke systematiske metoder for idéutvelgelse',
  ],
  content: [
    {
      id: 'eb-2-4-intro',
      type: 'text',
      content: `## Fra mange ideer til ett konsept

Etter brainstorming og mulighetsanalyse sitter du kanskje igjen med flere lovende ideer. Nå er det tid for å velge den beste og utvikle den til et konkret konsept som kan testes i markedet.

I dette kapittelet skal du lære:
- Metoder for å velge blant flere ideer
- Hva et konsept er og hvordan du utvikler det
- Hva MVP (minimum viable product) betyr og hvorfor det er viktig
- Hvordan du tester konseptet ditt med ekte kunder`,
    },
    {
      id: 'eb-2-4-def-1',
      type: 'definition',
      title: 'Idéutvelgelse',
      content: `**Idéutvelgelse** er prosessen med å evaluere og rangere flere ideer for å finne den som har størst potensial.

**Kriterier for vurdering:**
- **Kundeverdi:** Hvor godt løser ideen et reelt problem?
- **Markedsstørrelse:** Hvor mange potensielle kunder finnes?
- **Gjennomførbarhet:** Har vi ressursene som trengs?
- **Lønnsomhet:** Kan vi tjene penger på dette?
- **Konkurransefortrinn:** Hva gjør vår løsning bedre enn alternativene?
- **Personlig motivasjon:** Brenner vi for dette?

Det er viktig å bruke objektive kriterier og ikke bare velge den ideen som «føles best». Strukturerte metoder reduserer risikoen for dårlige valg.`,
    },
    {
      id: 'eb-2-4-text-1',
      type: 'text',
      content: `### Metoder for idéutvelgelse

**Vektet poengmatrise**
Lister opp kriterier og gir hver idé poeng (1–5) for hvert kriterium. Kriteriene kan vektes ulikt etter hvor viktige de er.

| Kriterium (vekt) | Idé A | Idé B | Idé C |
|---|---|---|---|
| Kundeverdi (×3) | 4 = 12 | 5 = 15 | 3 = 9 |
| Gjennomførbarhet (×2) | 5 = 10 | 3 = 6 | 4 = 8 |
| Lønnsomhet (×2) | 3 = 6 | 4 = 8 | 5 = 10 |
| Motivasjon (×1) | 5 = 5 | 4 = 4 | 2 = 2 |
| **Totalt** | **33** | **33** | **29** |

Når to ideer scorer likt, kan motivasjon og magefølelse avgjøre.

**Prototypetest**
Lag en enkel prototype av de 2–3 beste ideene og test dem på potensielle kunder. Hvilken idé får mest positiv respons?

**Idéturnering**
Ideene settes opp mot hverandre to og to. Gruppen stemmer på hvilken som er best i hvert par. Vinnerne møter hverandre til du sitter igjen med én.`,
    },
    {
      id: 'eb-2-4-def-2',
      type: 'definition',
      title: 'Konseptutvikling',
      content: `Et **konsept** er en detaljert beskrivelse av hva du skal tilby, til hvem, og hvordan. Det er mer konkret enn en idé, men mindre detaljert enn en full forretningsplan.

**Et godt konsept beskriver:**
1. **Hva:** Hvilket produkt eller tjeneste tilbyr du?
2. **Hvem:** Hvem er målgruppen?
3. **Hvorfor:** Hvilket problem løser du?
4. **Hvordan:** Hvordan skal du levere løsningen?
5. **Verdiforslag:** Hvorfor skal kunden velge deg fremfor alternativene?

**Konseptbeskrivelse** (elevator pitch-format):
«For [målgruppe] som [har dette problemet], tilbyr vi [produkt/tjeneste] som [løser problemet på denne måten]. I motsetning til [konkurrentene] gir vi [unikt verdiforslag].»`,
    },
    {
      id: 'eb-2-4-text-2',
      type: 'text',
      content: `### Minimum Viable Product (MVP)

**MVP** er den enkleste versjonen av produktet ditt som du kan teste med ekte kunder. Målet er å lære mest mulig med minst mulig innsats.

**Hvorfor MVP?**
- Du unngår å bruke lang tid på noe ingen vil ha
- Du får tilbakemeldinger tidlig og kan tilpasse
- Du reduserer risiko og kostnader
- Du lærer hva kundene faktisk verdsetter

**Eksempler på MVP-er:**

| Selskap | MVP | Endelig produkt |
|---------|-----|-----------------|
| Dropbox | En forklaringsvideo | Skylagringstjeneste |
| Zappos | Bestilte sko fra butikker og sendte selv | Nettbutikk for sko |
| Airbnb | Utleie av luftmadrasser i egen leilighet | Global utleieplattform |
| Facebook | Enkelt nettverksside kun for Harvard-studenter | Verdens største sosiale medium |

**Typer MVP-er:**
- **Landing page:** En enkel nettside som beskriver produktet og måler interesse (klikk på «bestill»-knappen)
- **Konseptvideo:** En video som viser hvordan produktet vil fungere
- **Concierge MVP:** Du utfører tjenesten manuelt for de første kundene
- **Wizard of Oz:** Kunden tror løsningen er automatisert, men du gjør det manuelt i bakgrunnen
- **Enkel prototype:** En forenklet versjon med bare kjernefunksjonalitet`,
    },
    {
      id: 'eb-2-4-text-3',
      type: 'text',
      content: `### Bygg – Mål – Lær (Build – Measure – Learn)

Denne syklusen fra **Lean Startup**-metoden er grunnsteinen i moderne konseptutvikling:

**1. Bygg (Build)**
Lag en MVP basert på din viktigste antakelse. Hva er det mest risikable du tror om kundene dine? Bygg det enkleste du kan for å teste denne antakelsen.

**2. Mål (Measure)**
Samle inn data fra ekte kunder. Viktige spørsmål:
- Bruker kunden produktet?
- Kommer kunden tilbake?
- Vil kunden betale?
- Anbefaler kunden det til andre?

**3. Lær (Learn)**
Analyser dataene og trekk konklusjoner:
- Var antakelsen riktig? → Utvid og forbedre
- Var antakelsen feil? → **Pivoter** (endre retning)

**Pivotering** betyr å endre strategi basert på det du har lært, uten å starte helt fra null. For eksempel kan du endre målgruppe, prisstrategi, eller distribusjonskanal.`,
    },
    {
      id: 'eb-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Fra idé til MVP for en ungdomsbedrift',
      problem: 'En gruppe elever har ideen om en app som hjelper ungdom med å finne brukt sportsutstyr lokalt. Hvordan utvikler de ideen fra konsept til MVP?',
      solution: `**Konseptbeskrivelse:**
«For ungdom som driver med idrett og trenger utstyr, tilbyr vi en lokal plattform for kjøp og salg av brukt sportsutstyr. I motsetning til Finn.no fokuserer vi kun på sport, har integrert betalingsløsning og hentepunkter på skoler.»

**Viktigste antakelse å teste:**
«Ungdom vil kjøpe brukt sportsutstyr fra andre ungdommer i nærområdet.»

**MVP: Instagram-konto + Google Forms**
1. Opprett en Instagram-konto: @bruktsporten
2. Lag et Google-skjema der folk kan legge inn utstyr til salg
3. Legg ut bilder av utstyret på Instagram
4. Kjøpere tar kontakt via DM, utveksling skjer på skolen

**Mål:** Antall innsendte produkter, antall henvendelser, antall gjennomførte salg.

**Lær:** Etter 4 uker hadde de 25 produkter, 40 henvendelser og 12 salg. Konklusjon: Interesse finnes. Neste steg: Utvikle en enkel nettside med bedre søkefunksjon.`,
    },
    {
      id: 'eb-2-4-tip-1',
      type: 'tip',
      title: 'Ikke vær redd for å kaste ideer',
      content: `Mange gründere gjør feilen å bli «forelsket» i sin egen idé og ignorere negative tilbakemeldinger. Husk: Målet er å finne en idé som fungerer, ikke å bevise at din opprinnelige idé var riktig. Vær villig til å endre retning basert på det du lærer fra kundene.`,
    },
    {
      id: 'eb-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb-2-4-ex-1',
        number: '2.4.1',
        type: 'multiple-choice',
        task: 'Hva er formålet med en MVP (minimum viable product)?',
        options: [
          { id: 'a', text: 'Å lage det perfekte produktet fra starten', isCorrect: false },
          { id: 'b', text: 'Å teste den viktigste antakelsen med minst mulig innsats', isCorrect: true },
          { id: 'c', text: 'Å spare penger ved å lage et dårlig produkt', isCorrect: false },
          { id: 'd', text: 'Å kopiere konkurrentenes produkt', isCorrect: false },
        ],
        solution: 'En MVP er den enkleste versjonen av produktet som lar deg teste din viktigste antakelse med ekte kunder. Målet er å lære mest mulig med minst mulig innsats, slik at du kan tilpasse produktet før du investerer mye tid og penger.',
      },
    },
    {
      id: 'eb-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb-2-4-ex-2',
        number: '2.4.2',
        type: 'multiple-choice',
        task: 'Hva betyr det å «pivotere» i Lean Startup-metoden?',
        options: [
          { id: 'a', text: 'Å gi opp ideen helt og starte med noe nytt', isCorrect: false },
          { id: 'b', text: 'Å endre strategi basert på det du har lært, uten å starte fra null', isCorrect: true },
          { id: 'c', text: 'Å doble innsatsen på den opprinnelige planen', isCorrect: false },
          { id: 'd', text: 'Å selge bedriften til noen andre', isCorrect: false },
        ],
        solution: 'Pivotering betyr å endre retning basert på tilbakemeldinger og data fra markedet. Du endrer for eksempel målgruppe, prisstrategi eller produktfunksjon, men beholder kjernen av det du har lært. Det er ikke å gi opp, men å tilpasse seg virkeligheten.',
      },
    },
    {
      id: 'eb-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb-2-4-ex-3',
        number: '2.4.3',
        type: 'multiple-choice',
        task: 'Hva er en «Concierge MVP»?',
        options: [
          { id: 'a', text: 'En MVP der du bruker en berømt person til å markedsføre produktet', isCorrect: false },
          { id: 'b', text: 'En MVP der du utfører tjenesten manuelt for de første kundene', isCorrect: true },
          { id: 'c', text: 'En MVP som kun er tilgjengelig for hotellgjester', isCorrect: false },
          { id: 'd', text: 'En MVP som lages av et profesjonelt designbyrå', isCorrect: false },
        ],
        solution: 'En Concierge MVP betyr at du leverer tjenesten manuelt til de første kundene, i stedet for å bygge en automatisert løsning. Dette lar deg teste om kundene vil ha tjenesten, og lære hva de verdsetter, før du investerer i teknologi.',
      },
    },
    {
      id: 'eb-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb-2-4-ex-4',
        number: '2.4.4',
        type: 'classic',
        task: 'Bruk malen for konseptbeskrivelse til å skrive en elevator pitch for en forretningsidé: «For [målgruppe] som [problem], tilbyr vi [løsning] som [fordel]. I motsetning til [konkurrent] gir vi [unikt verdiforslag].»',
        hints: ['Tenk på en idé du har jobbet med tidligere i kapitlene, eller velg en ny'],
        solution: 'Eksempel: «For studenter som sliter med å planlegge sunne måltider, tilbyr vi en ukentlig matplanleggingsapp som genererer handleliste og oppskrifter basert på budsjett og preferanser. I motsetning til generelle oppskriftsapper gir vi tilpassede planer for studentbudsjett med ingredienser tilgjengelig i nærbutikken.»',
      },
    },

    // --- Samleoppgaver ---
    {
      id: 'eb-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb-2-4-ex-5',
        number: '2.4.5',
        type: 'classic',
        task: 'Ta tre forretningsideer (fra brainstorming eller egne ideer) og bruk en vektet poengmatrise med minst fire kriterier for å velge den beste. Begrunn valg av kriterier og vekting, og forklar hvilken idé du velger og hvorfor.',
        solution: 'Besvarelsen bør inneholde: 1) Tre tydelig beskrevne ideer. 2) Minst fire kriterier med begrunnelse for vekting. 3) En utfylt poengmatrise der hver idé er vurdert systematisk. 4) En konklusjon der eleven velger en idé og forklarer hvorfor, inkludert refleksjon over om poengsummen alene er nok til å bestemme.',
        allowsUpload: true,
      },
    },
    {
      id: 'eb-2-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb-2-4-ex-6',
        number: '2.4.6',
        type: 'classic',
        task: 'Design en MVP for en forretningsidé du har. Beskriv: 1) Hva er den viktigste antakelsen du vil teste? 2) Hvilken type MVP velger du og hvorfor? 3) Hvordan vil du måle om antakelsen stemmer? 4) Hva gjør du hvis antakelsen viser seg å være feil?',
        hints: ['Husk at en MVP skal være så enkel som mulig – tenk Instagram-konto, Google Forms eller papirprototype'],
        solution: 'En god besvarelse viser at eleven forstår MVP-konseptet: 1) Tydelig formulert antakelse (f.eks. «Ungdom er villige til å betale 30 kr for reparasjon av klær»). 2) Valgt MVP-type med begrunnelse (f.eks. concierge MVP: reparere klær manuelt på skolen i to uker). 3) Konkrete måleparametere (antall kunder, betalingsvilje, kundetilfredshet). 4) Pivoteringsplan (f.eks. endre målgruppe til voksne, eller endre fra klær til elektronikk).',
        allowsUpload: true,
      },
    },
    {
      id: 'eb-2-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'eb-2-4-ex-7',
        number: '2.4.7',
        type: 'classic',
        task: 'Velg en kjent bedrift (for eksempel Spotify, Vipps, Oda eller en annen du kjenner). Undersøk hva deres opprinnelige MVP var, og beskriv hvordan de gikk fra MVP til det produktet vi kjenner i dag. Hvilke pivoteringer eller endringer har de gjort underveis?',
        solution: 'Eksempel med Vipps: MVP var en enkel betalingsapp mellom privatpersoner i DNB. De testet interessen blant bankens kunder. Produktet ble utvidet med: bedriftsbetaling, netthandel, faktura, forsikring og ID-verifisering. Pivotering: Fra kun person-til-person-betaling til en fullverdig betalingsplattform. Viktig læring: Kundene ønsket enkelhet – derfor ble brukeropplevelsen en kjerneverdi.',
        isInvestigation: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Idéutvelgelse', definition: 'Prosessen med å evaluere og rangere flere ideer for å finne den med størst potensial.' },
    { term: 'Konsept', definition: 'En detaljert beskrivelse av hva du tilbyr, til hvem, og hvordan – mer konkret enn en idé.' },
    { term: 'MVP (Minimum Viable Product)', definition: 'Den enkleste versjonen av et produkt som lar deg teste en antakelse med ekte kunder.' },
    { term: 'Pivotering', definition: 'Å endre strategi eller retning basert på tilbakemeldinger fra markedet.' },
    { term: 'Lean Startup', definition: 'Metode basert på syklusen Bygg–Mål–Lær for rask og iterativ produktutvikling.' },
    { term: 'Verdiforslag', definition: 'Beskrivelse av hvorfor kunden skal velge ditt produkt fremfor alternativene.' },
  ],
};

// ============================================================================
// Kapittel 2.5: Kundesegmentering
// ============================================================================

export const CHAPTER_ENTREBED_1_2_5: TextbookChapter = {
  id: 'entrebed-1-2-5',
  courseId: 'entrebed-1',
  chapterNumber: '2.5',
  title: 'Kundesegmentering',
  description: 'Lær å identifisere og beskrive målgrupper, lage personas og forstå kundens kjøpsreise fra behov til kjøp.',
  estimatedMinutes: 22,
  competenceGoals: [
    'identifisere og beskrive kundesegmenter og målgrupper',
    'forstå kundens kjøpsreise og bruke den i produktutvikling',
  ],
  content: [
    {
      id: 'eb-2-5-intro',
      type: 'text',
      content: `## Hvem er kunden din?

Å prøve å selge til «alle» er en sikker vei til å nå ingen. Vellykkede bedrifter kjenner kundene sine og tilpasser produktet, budskapet og kanalene til spesifikke målgrupper.

I dette kapittelet skal du lære:
- Hva kundesegmentering er og hvorfor det er viktig
- Ulike måter å segmentere et marked på
- Hvordan du lager personas (fiktive kundeprofiler)
- Kundens kjøpsreise fra behov til kjøp og videre`,
    },
    {
      id: 'eb-2-5-def-1',
      type: 'definition',
      title: 'Kundesegmentering',
      content: `**Kundesegmentering** er å dele markedet inn i grupper (segmenter) av kunder med lignende behov, egenskaper eller adferd. Hvert segment får tilpassede produkter, priser og budskap.

**Hvorfor segmentere?**
- Du kan ikke tilfredsstille alle kunders behov med ett og samme produkt
- Ulike kundegrupper har ulike behov og preferanser
- Målrettet kommunikasjon gir bedre resultat enn å snakke til alle
- Begrenset budsjett krever at du prioriterer de mest lønnsomme segmentene

**Krav til et godt segment:**
- **Målbart:** Du kan identifisere og telle kundene
- **Tilgjengelig:** Du kan nå kundene med markedsføring
- **Stort nok:** Segmentet er stort nok til å være lønnsomt
- **Unikt:** Segmentet skiller seg tydelig fra andre segmenter
- **Handlingsbart:** Du kan tilpasse tilbudet til segmentet`,
    },
    {
      id: 'eb-2-5-text-1',
      type: 'text',
      content: `### Segmenteringsvariabler

Du kan segmentere markedet basert på ulike variabler:

**Demografisk segmentering**
Basert på målbare egenskaper ved personene:
- Alder, kjønn, inntekt
- Utdanning, yrke
- Familiesituasjon
- Bosted

**Geografisk segmentering**
Basert på hvor kundene befinner seg:
- Land, region, fylke, kommune
- By vs. bygd
- Klimasone

**Psykografisk segmentering**
Basert på livsstil, verdier og personlighet:
- Interesser og hobbyer
- Verdier og holdninger
- Livsstil (sporty, miljøbevisst, teknologientusiast)
- Personlighetstrekk

**Atferdsmessig segmentering**
Basert på hvordan kundene handler:
- Kjøpsfrekvens (ofte, sjelden, aldri)
- Merkevarelojalitet
- Brukssituasjon (når og hvorfor de kjøper)
- Prisfølsomhet
- Kanal (nettbutikk vs. fysisk butikk)`,
    },
    {
      id: 'eb-2-5-text-2',
      type: 'text',
      content: `### Målgruppevalg

Etter segmentering må du velge hvilke segmenter du vil satse på. Dette kalles **targeting** (målgruppevalg).

**Tre strategier:**

**1. Udifferensiert (massemarketing)**
Du retter deg mot hele markedet med ett tilbud. Fungerer for produkter alle trenger (f.eks. salt, sukker). Sjelden aktuelt for nye bedrifter.

**2. Differensiert**
Du retter deg mot flere segmenter med tilpassede tilbud. Krever mer ressurser, men gir bredere markedsdekning. Eksempel: Nike har ulike produktlinjer for løping, basketball og yoga.

**3. Konsentrert (nisje)**
Du fokuserer på ett spesifikt segment og blir best der. Perfekt for nye og små bedrifter med begrensede ressurser. Eksempel: En ungdomsbedrift som lager veganske proteinkaker kun for treningsentusiaster.

**For en ungdomsbedrift** er konsentrert strategi nesten alltid best. Finn ditt nisjesegment og bli ekspert på deres behov.`,
    },
    {
      id: 'eb-2-5-def-2',
      type: 'definition',
      title: 'Persona',
      content: `En **persona** er en fiktiv, detaljert beskrivelse av en typisk kunde i målgruppen din. Personaen får navn, alder, yrke, interesser, utfordringer og mål.

**Hvorfor lage personas?**
- Gjør målgruppen levende og konkret
- Hjelper deg å ta beslutninger («Ville Mia valgt dette?»)
- Sikrer at hele teamet har samme forståelse av kunden
- Gjør det lettere å lage relevant innhold og markedsføring

**En persona inneholder typisk:**
- Navn, alder og bilde (stockfoto)
- Yrke/utdanning og livssituasjon
- Mål og motivasjoner
- Frustrasjoner og utfordringer
- Medievaner (sosiale medier, nettsteder)
- Et sitat som oppsummerer personens holdning`,
    },
    {
      id: 'eb-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Persona for en treningsapp',
      problem: 'En ungdomsbedrift utvikler en treningsapp for ungdom. Lag en persona for den typiske brukeren.',
      solution: `**Navn:** Mia (17 år)
**Yrke:** VG2-elev, studiespesialisering
**Bosted:** Trondheim

**Mål og motivasjon:**
- Vil komme i bedre form, men vet ikke hvor hun skal begynne
- Liker å trene med venner, men er redd for å gå på treningssenter alene
- Motiveres av fremgang og positive tilbakemeldinger

**Frustrasjoner:**
- Treningsapper er laget for voksne og avanserte brukere
- Dyrt medlemskap på treningssenter
- Vanskelig å finne tid mellom skole og deltidsjobb

**Medievaner:**
- Instagram og TikTok daglig
- Følger fitness-influencere, men føler seg utilstrekkelig
- Bruker Spotify under trening

**Sitat:** «Jeg vil trene, men alt virker så komplisert og skremmende. Jeg trenger noe som er enkelt å starte med.»

**Hva betyr dette for appen?**
- Enkel onboarding uten forkunnskaper
- Sosiale funksjoner (trene med venner)
- Korte økter (15–30 min) som passer i en travel hverdag
- Gratis grunnversjon`,
    },
    {
      id: 'eb-2-5-text-3',
      type: 'text',
      content: `### Kundens kjøpsreise

**Kjøpsreisen** (customer journey) beskriver stegene en kunde går gjennom fra de oppdager et behov til de har kjøpt og brukt produktet. Å forstå denne reisen hjelper deg å møte kunden med riktig budskap til riktig tid.

**De fem fasene:**

**1. Behovserkjennelse**
Kunden innser at de har et problem eller behov. Triggere kan være en opplevelse, en annonse eller en anbefaling.
*Ditt mål:* Gjøre kunden oppmerksom på problemet.

**2. Informasjonssøk**
Kunden søker etter løsninger. De googler, spør venner, leser anmeldelser og sammenligner alternativer.
*Ditt mål:* Være synlig der kunden søker. Ha god informasjon tilgjengelig.

**3. Vurdering av alternativer**
Kunden sammenligner 2–3 løsninger basert på pris, kvalitet, anmeldelser og merke.
*Ditt mål:* Vise hvorfor din løsning er best. Bruke sosiale bevis (anmeldelser, anbefalinger).

**4. Kjøpsbeslutning**
Kunden bestemmer seg og gjennomfører kjøpet. Prosessen skal være enkel og trygg.
*Ditt mål:* Fjerne barrierer. Enkel betaling, tydelig informasjon, returrett.

**5. Etterkjøpsadferd**
Kunden bruker produktet og vurderer om det innfrir forventningene. Fornøyde kunder kommer tilbake og anbefaler til andre.
*Ditt mål:* Følge opp, be om tilbakemelding, løse eventuelle problemer raskt.`,
    },
    {
      id: 'eb-2-5-note-1',
      type: 'note',
      title: 'B2B vs. B2C',
      content: `Kjøpsreisen ser forskjellig ut avhengig av om du selger til privatpersoner (B2C – business to consumer) eller til bedrifter (B2B – business to business).

**B2C:** Ofte kortere kjøpsreise, mer følelsesbasert, én beslutningstaker.
**B2B:** Lengre kjøpsreise, mer rasjonell, flere beslutningstakere, større kjøp.

For en ungdomsbedrift er det viktig å vite om kunden er en privatperson eller en bedrift, fordi det påvirker hele salgs- og markedsføringsprosessen.`,
    },
    {
      id: 'eb-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'eb-2-5-ex-1',
        number: '2.5.1',
        type: 'multiple-choice',
        task: 'Hva er kundesegmentering?',
        options: [
          { id: 'a', text: 'Å selge produktet til alle i markedet', isCorrect: false },
          { id: 'b', text: 'Å dele markedet inn i grupper med lignende behov og egenskaper', isCorrect: true },
          { id: 'c', text: 'Å lage en reklame som treffer alle', isCorrect: false },
          { id: 'd', text: 'Å finne den rikeste kundegruppen', isCorrect: false },
        ],
        solution: 'Kundesegmentering handler om å dele markedet inn i grupper (segmenter) med lignende behov, egenskaper eller adferd. Målet er å tilpasse produktet, prisen og budskapet til hver gruppe for å treffe bedre.',
      },
    },
    {
      id: 'eb-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'eb-2-5-ex-2',
        number: '2.5.2',
        type: 'multiple-choice',
        task: 'Hvilken segmenteringsvariabel handler om kundens livsstil og verdier?',
        options: [
          { id: 'a', text: 'Demografisk segmentering', isCorrect: false },
          { id: 'b', text: 'Geografisk segmentering', isCorrect: false },
          { id: 'c', text: 'Psykografisk segmentering', isCorrect: true },
          { id: 'd', text: 'Atferdsmessig segmentering', isCorrect: false },
        ],
        solution: 'Psykografisk segmentering handler om livsstil, verdier, holdninger og personlighet. Det beskriver hvem kunden er «på innsiden», i motsetning til demografisk segmentering som beskriver ytre kjennetegn som alder og inntekt.',
      },
    },
    {
      id: 'eb-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'eb-2-5-ex-3',
        number: '2.5.3',
        type: 'multiple-choice',
        task: 'Hvilken målgruppestrategi passer best for en ny ungdomsbedrift med begrensede ressurser?',
        options: [
          { id: 'a', text: 'Udifferensiert strategi – rettet mot hele markedet', isCorrect: false },
          { id: 'b', text: 'Differensiert strategi – flere segmenter med ulike tilbud', isCorrect: false },
          { id: 'c', text: 'Konsentrert strategi – fokus på ett spesifikt nisjemarked', isCorrect: true },
          { id: 'd', text: 'Tilfeldig strategi – selge til hvem som helst som vil kjøpe', isCorrect: false },
        ],
        solution: 'En konsentrert (nisje) strategi passer best for nye og små bedrifter. Ved å fokusere på ett segment kan du bruke begrensede ressurser effektivt, bli ekspert på denne kundegruppen og bygge et sterkt omdømme i nisjen.',
      },
    },
    {
      id: 'eb-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'eb-2-5-ex-4',
        number: '2.5.4',
        type: 'classic',
        task: 'Beskriv de fem fasene i kundens kjøpsreise for et selvvalgt produkt. Gi konkrete eksempler på hva kunden gjør i hver fase.',
        hints: ['Velg et produkt du selv har kjøpt nylig, da er det lettere å beskrive reisen'],
        solution: 'Eksempel med trådløse ørepropper: 1) Behovserkjennelse: De gamle hodesettet gikk i stykker. 2) Informasjonssøk: Googler «beste trådløse ørepropper 2025», leser anmeldelser på YouTube og Tek.no. 3) Vurdering: Sammenligner Apple AirPods, Samsung Galaxy Buds og Sony WF-1000XM5 på pris, lydkvalitet og batteritid. 4) Kjøpsbeslutning: Velger Sony pga. best lydkvalitet, bestiller fra Elkjøp med gratis frakt. 5) Etterkjøp: Er fornøyd med lyden, anbefaler dem til en venn, skriver en anmeldelse.',
      },
    },

    // --- Samleoppgaver ---
    {
      id: 'eb-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'eb-2-5-ex-5',
        number: '2.5.5',
        type: 'classic',
        task: 'Lag to detaljerte personas for en forretningsidé du har jobbet med. Personaene skal representere to forskjellige kundesegmenter. Hver persona skal inneholde: navn, alder, yrke, mål, frustrasjoner, medievaner og et typisk sitat. Forklar deretter hvordan du ville tilpasset markedsføringen ulikt for de to personaene.',
        solution: 'En god besvarelse inneholder: 1) To tydelig forskjellige personas med alle elementene (navn, alder, yrke, mål, frustrasjoner, medievaner, sitat). 2) Personaene representerer ulike segmenter (f.eks. en prisbevisst student og en kvalitetsfokusert voksen). 3) Konkret beskrivelse av hvordan budskap, kanal og tone ville vært forskjellig for hver persona. 4) Refleksjon over hvilken persona som er viktigst å prioritere for bedriften.',
        allowsUpload: true,
      },
    },
    {
      id: 'eb-2-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'eb-2-5-ex-6',
        number: '2.5.6',
        type: 'classic',
        task: 'Velg en bedrift du kjenner godt (for eksempel en lokal butikk, en nettbutikk eller en tjenesteleverandør). Identifiser og beskriv minst tre ulike kundesegmenter de betjener. For hvert segment: hvilke segmenteringsvariabler bruker du, hva kjennetegner segmentet, og hvordan tilpasser bedriften tilbudet til dette segmentet?',
        solution: 'Eksempel med XXL Sport: Segment 1 (demografisk + atferdsmessig): Seriøse mosjonister, 25–45 år, kjøper premium utstyr regelmessig – XXL tilbyr merkevarer og ekspertrådgivning. Segment 2 (psykografisk): Familier som er aktive i helgene, prisfølsomme – XXL tilbyr pakketilbud og egne merker. Segment 3 (geografisk + atferdsmessig): Netthandlere som sammenligner priser – XXL har prisgaranti og enkel nettbutikk med gratis retur.',
        isInvestigation: true,
      },
    },
    {
      id: 'eb-2-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'eb-2-5-ex-7',
        number: '2.5.7',
        type: 'classic',
        task: 'Tegn et kundereisekart (customer journey map) for din forretningsidé. Kartet skal vise de fem fasene i kjøpsreisen og for hver fase beskrive: 1) Hva kunden gjør, 2) Hva kunden tenker/føler, 3) Hvilke kontaktpunkter (touchpoints) kunden har med bedriften din, og 4) Hva du kan gjøre for å forbedre opplevelsen.',
        solution: 'Et godt kundereisekart viser alle fem fasene visuelt (gjerne som en tidslinje) med handlinger, tanker, følelser og kontaktpunkter for hver fase. Eksempel: I informasjonssøk-fasen googler kunden, finner din Instagram-profil (kontaktpunkt), tenker «virker dette seriøst?» (følelse: usikkerhet). Forbedring: Ha profesjonelle bilder og kundeomtaler synlig. Kartet bør avsluttes med konkrete tiltak for å forbedre opplevelsen i de fasene der kunden har mest usikkerhet eller friksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Kundesegmentering', definition: 'Å dele markedet inn i grupper med lignende behov, egenskaper eller adferd.' },
    { term: 'Persona', definition: 'Fiktiv, detaljert beskrivelse av en typisk kunde i målgruppen.' },
    { term: 'Targeting', definition: 'Valg av hvilke kundesegmenter bedriften skal satse på.' },
    { term: 'Kjøpsreise', definition: 'Stegene kunden går gjennom fra behovserkjennelse til etterkjøpsadferd.' },
    { term: 'Psykografisk segmentering', definition: 'Segmentering basert på livsstil, verdier, holdninger og personlighet.' },
    { term: 'B2C / B2B', definition: 'Business to consumer (salg til privatpersoner) vs. business to business (salg til bedrifter).' },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const ENTREBED_1_DEL2_CHAPTERS = [
  CHAPTER_ENTREBED_1_2_1,
  CHAPTER_ENTREBED_1_2_2,
  CHAPTER_ENTREBED_1_2_3,
  CHAPTER_ENTREBED_1_2_4,
  CHAPTER_ENTREBED_1_2_5,
];
