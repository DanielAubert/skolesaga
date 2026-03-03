/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 9. klasse - Narrativ versjon Del 6
 *
 * Kapittel 6.1: Statistiske mål
 * Kapittel 6.2: Diagrammer og visualisering
 * Kapittel 6.3: Sannsynlighetsberegning
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1 NARRATIV: Statistiske mål
// ============================================================================

export const CHAPTER_9_6_1_NARRATIV: TextbookChapter = {
  id: '9-6-1-narrativ',
  courseId: '9',
  chapterNumber: '6.1',
  title: 'Statistiske mål',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av statistiske sentralmål og spredningsmål -- gjennomsnitt, median, typetall, variasjonsbredde og kvartiler forklart med hverdagseksempler.',
  estimatedMinutes: 35,
  competenceGoals: [
    'planleggje, gjennomføre og vurdere statistiske undersøkingar og presentere resultata',
  ],
  linkedChapterId: '9-6-1',
  content: [
    {
      id: '9-6-1-n-intro',
      type: 'text',
      content: `## Tall som forteller historier

Tenk deg at du er fotballtrener og vil vite hvordan laget presterer. Du har resultatene fra de siste ti kampene: $2, 0, 3, 1, 1, 0, 4, 1, 2, 1$ mål per kamp. Men hva sier egentlig disse tallene? Er laget bra? Jevnt? Uforutsigbart?

**Statistiske mål** er verktøy som hjelper oss å oppsummere og forstå store mengder data med bare noen få tall. I stedet for å lese gjennom alle resultatene, kan du si: «Vi scorer i gjennomsnitt $1{,}5$ mål per kamp.» Det gir et raskt og nyttig bilde.

Vi deler statistiske mål i to grupper: **sentralmål** (som beskriver hva som er «typisk») og **spredningsmål** (som beskriver hvor mye dataene varierer).`,
    },

    {
      id: '9-6-1-n-section1',
      type: 'text',
      content: `## Sentralmål: Gjennomsnitt, median og typetall

De tre viktigste sentralmålene er **gjennomsnitt**, **median** og **typetall**.

### Gjennomsnitt (middelverdi)

Gjennomsnittet er det de fleste tenker på når de hører «gjennomsnitt». Du summerer alle verdiene og deler på antallet:

$$\\bar{x} = \\frac{x_1 + x_2 + \\ldots + x_n}{n}$$

Med fotballeksempelet: $\\bar{x} = \\frac{2 + 0 + 3 + 1 + 1 + 0 + 4 + 1 + 2 + 1}{10} = \\frac{15}{10} = 1{,}5$ mål.

Gjennomsnittet er lett å beregne og bruker alle dataene. Men det har en svakhet: det påvirkes sterkt av **ekstremverdier**. Hvis laget scorer $15$ mål i en kamp (kanskje mot et veldig svakt lag), hopper gjennomsnittet opp til $\\frac{15 + 15 - 4}{10} = 2{,}6$, selv om de fleste kampene fortsatt har $0$--$3$ mål.

### Median

Medianen er den **midterste verdien** når dataene er sortert. Sortert: $0, 0, 1, 1, 1, 1, 2, 2, 3, 4$. Med et partall observasjoner ($10$ stykker) er medianen gjennomsnittet av de to midterste: $\\frac{1 + 1}{2} = 1$.

Medianen er mer robust mot ekstremverdier. Selv om en kamp har $15$ mål, forblir medianen $1$.

### Typetall (modus)

Typetallet er den verdien som forekommer **oftest**. I vårt datasett forekommer $1$ hele fire ganger, så typetallet er $1$. Et datasett kan ha flere typetall (hvis to verdier forekommer like ofte) eller ingen (hvis alle verdier er unike).`,
    },

    {
      id: '9-6-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-6-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på sentralmål:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-6-1-n-quiz1-q0',
            task: 'Hva er gjennomsnittet av tallene $4, 7, 3, 8, 3$?',
            options: [
              { id: 'a', text: '$3$', isCorrect: false },
              { id: 'b', text: '$5$', isCorrect: true },
              { id: 'c', text: '$4$', isCorrect: false },
              { id: 'd', text: '$7$', isCorrect: false },
            ],
            solution: '$\\bar{x} = \\frac{4 + 7 + 3 + 8 + 3}{5} = \\frac{25}{5} = 5$.',
          },
          {
            id: '9-6-1-n-quiz1-q1',
            task: 'Hva er medianen av tallene $12, 5, 8, 3, 15$?',
            options: [
              { id: 'a', text: '$5$', isCorrect: false },
              { id: 'b', text: '$8$', isCorrect: true },
              { id: 'c', text: '$8{,}6$', isCorrect: false },
              { id: 'd', text: '$12$', isCorrect: false },
            ],
            solution: 'Sortert: $3, 5, 8, 12, 15$. Med $5$ verdier er medianen den midterste, altså den tredje: $8$.',
          },
          {
            id: '9-6-1-n-quiz1-q2',
            task: 'Et datasett har verdiene $2, 5, 5, 7, 8, 8, 8, 9$. Hva er typetallet?',
            options: [
              { id: 'a', text: '$5$', isCorrect: false },
              { id: 'b', text: '$6{,}5$', isCorrect: false },
              { id: 'c', text: '$8$', isCorrect: true },
              { id: 'd', text: '$7$', isCorrect: false },
            ],
            solution: '$8$ forekommer tre ganger, mer enn noen annen verdi. Typetallet er $8$.',
          },
        ],
      },
    },

    {
      id: '9-6-1-n-section2',
      type: 'text',
      content: `## Spredningsmål: Variasjonsbredde og kvartiler

Sentralmål forteller oss hva som er «typisk», men de sier ingenting om hvor mye dataene **varierer**. To klasser kan ha samme gjennomsnittskarakter, men i den ene klassen ligger alle rundt $4$, mens i den andre varierer det fra $1$ til $6$. Spredningsmål fanger opp denne forskjellen.

### Variasjonsbredde

Det enkleste spredningsmålet er **variasjonsbredden** -- forskjellen mellom største og minste verdi:

$$\\text{Variasjonsbredde} = x_{\\text{maks}} - x_{\\text{min}}$$

I fotballeksempelet: $4 - 0 = 4$ mål. Variasjonsbredden er enkel, men sårbar for ekstremverdier -- én uvanlig kamp kan gi et misvisende bilde.

### Kvartiler og IQR

For et mer robust spredningsmål bruker vi **kvartiler**. De deler det sorterte datasettet i fire like deler:
- $Q_1$ (nedre kvartil) -- medianen av den nedre halvdelen
- $Q_2$ -- medianen (deler datasettet i to halvdeler)
- $Q_3$ (øvre kvartil) -- medianen av den øvre halvdelen

**Interkvartilbredden** (IQR) er avstanden mellom $Q_3$ og $Q_1$:

$$\\text{IQR} = Q_3 - Q_1$$

IQR forteller oss hvor stor spredning de midterste $50\\,\\%$ av dataene har. Den påvirkes ikke av ekstremverdier.

La oss bruke fotballtallene: $0, 0, 1, 1, 1, 1, 2, 2, 3, 4$.

Nedre halvdel: $0, 0, 1, 1, 1$ $\\Rightarrow$ $Q_1 = 1$.
Øvre halvdel: $1, 2, 2, 3, 4$ $\\Rightarrow$ $Q_3 = 2$.
IQR $= 2 - 1 = 1$.

Det betyr at mesteparten av kampene har mellom $1$ og $2$ mål.`,
    },

    {
      id: '9-6-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-6-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på spredningsmål:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-6-1-n-quiz2-q0',
            task: 'Datasettet er $3, 5, 7, 9, 11, 13, 15$. Hva er variasjonsbredden?',
            options: [
              { id: 'a', text: '$9$', isCorrect: false },
              { id: 'b', text: '$15$', isCorrect: false },
              { id: 'c', text: '$12$', isCorrect: true },
              { id: 'd', text: '$7$', isCorrect: false },
            ],
            solution: 'Variasjonsbredde $= 15 - 3 = 12$.',
          },
          {
            id: '9-6-1-n-quiz2-q1',
            task: 'For datasettet $2, 4, 6, 8, 10, 12, 14, 16$, hva er $Q_1$?',
            options: [
              { id: 'a', text: '$4$', isCorrect: false },
              { id: 'b', text: '$5$', isCorrect: true },
              { id: 'c', text: '$6$', isCorrect: false },
              { id: 'd', text: '$9$', isCorrect: false },
            ],
            solution: 'Nedre halvdel: $2, 4, 6, 8$. Medianen av disse er $\\frac{4 + 6}{2} = 5$. Altså er $Q_1 = 5$.',
          },
          {
            id: '9-6-1-n-quiz2-q2',
            task: 'Hvilket spredningsmål er minst påvirket av ekstremverdier?',
            options: [
              { id: 'a', text: 'Variasjonsbredden', isCorrect: false },
              { id: 'b', text: 'Gjennomsnittet', isCorrect: false },
              { id: 'c', text: 'Interkvartilbredden (IQR)', isCorrect: true },
              { id: 'd', text: 'Største verdi', isCorrect: false },
            ],
            solution: 'IQR måler spredningen i de midterste $50\\,\\%$ av dataene og påvirkes ikke av ekstreme verdier i topp eller bunn.',
          },
        ],
      },
    },

    {
      id: '9-6-1-n-section3',
      type: 'text',
      content: `## Hvilket mål skal du velge?

Ulike situasjoner krever ulike mål. Her er noen tommelfingerregler:

| Situasjon | Beste sentralmål | Hvorfor |
|-----------|-------------------|---------|
| Symmetriske data uten ekstremverdier | Gjennomsnitt | Bruker all informasjonen |
| Data med ekstremverdier (f.eks. lønn) | Median | Ikke påvirket av de rikeste/fattigste |
| Kategoridata (f.eks. favorittfarge) | Typetall | Eneste mål som fungerer for kategorier |

For eksempel: Hvis ti ansatte i en bedrift tjener $400\\,000$--$500\\,000$ kr, men sjefen tjener $5\\,000\\,000$ kr, er gjennomsnittslønnen misvisende høy. Medianlønnen gir et mye bedre bilde av hva en «typisk» ansatt tjener.

Spredningsmål supplerer sentralmålene. Variasjonsbredden er rask å beregne men sårbar, mens IQR er mer robust og gir et bedre bilde av den «normale» spredningen.`,
    },

    {
      id: '9-6-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-6-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på valg av statistisk mål:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-6-1-n-quiz3-q0',
            task: 'Du vil beskrive «typisk» inntekt i Norge. Hvorfor er medianen bedre enn gjennomsnittet?',
            options: [
              { id: 'a', text: 'Fordi medianen er enklere å beregne', isCorrect: false },
              { id: 'b', text: 'Fordi noen svært høye inntekter drar gjennomsnittet opp', isCorrect: true },
              { id: 'c', text: 'Fordi medianen alltid er lavere', isCorrect: false },
              { id: 'd', text: 'Fordi gjennomsnittet ikke kan beregnes for inntekt', isCorrect: false },
            ],
            solution: 'Inntektsfordelingen har noen svært høye verdier (millionærer, milliardærer) som trekker gjennomsnittet opp. Medianen, som den midterste verdien, gir et bedre bilde av hva en «vanlig» person tjener.',
          },
          {
            id: '9-6-1-n-quiz3-q1',
            task: 'Elevene i en klasse stemmer på favorittfag: Matte, Norsk, Gym, Matte, Gym, Gym, Norsk, Gym. Hvilket sentralmål er mest nyttig?',
            options: [
              { id: 'a', text: 'Gjennomsnitt', isCorrect: false },
              { id: 'b', text: 'Median', isCorrect: false },
              { id: 'c', text: 'Typetall', isCorrect: true },
              { id: 'd', text: 'Variasjonsbredde', isCorrect: false },
            ],
            solution: 'For kategoridata (som fagnavn) er det bare typetallet som gir mening. Du kan ikke beregne gjennomsnitt eller median av «Matte» og «Gym». Typetallet er Gym (forekommer $4$ ganger).',
          },
        ],
      },
    },

    {
      id: '9-6-1-n-summary',
      type: 'text',
      content: `## Oppsummering

**Sentralmål** beskriver hva som er typisk:
- **Gjennomsnitt** ($\\bar{x}$): Summen delt på antall. Bruker alle data, men påvirkes av ekstremverdier.
- **Median**: Den midterste verdien i sorterte data. Robust mot ekstremverdier.
- **Typetall**: Den mest frekvente verdien. Eneste mål som fungerer for kategoridata.

**Spredningsmål** beskriver variasjon:
- **Variasjonsbredde**: $x_{\\text{maks}} - x_{\\text{min}}$. Enkel, men sårbar for ekstremverdier.
- **Kvartiler**: $Q_1$ og $Q_3$ deler datasettet i fire deler.
- **IQR** (interkvartilbredde): $Q_3 - Q_1$. Robust mål for spredning i de midterste $50\\,\\%$.

Velg mål etter kontekst: gjennomsnitt for symmetriske data, median for skjeve data med ekstremverdier, typetall for kategorier.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.2 NARRATIV: Diagrammer og visualisering
// ============================================================================

export const CHAPTER_9_6_2_NARRATIV: TextbookChapter = {
  id: '9-6-2-narrativ',
  courseId: '9',
  chapterNumber: '6.2',
  title: 'Diagrammer og visualisering',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av diagrammer -- stolpediagram, sektordiagram, linjediagram, histogram og boksplott forklart med eksempler fra virkeligheten.',
  estimatedMinutes: 35,
  competenceGoals: [
    'planleggje, gjennomføre og vurdere statistiske undersøkingar og presentere resultata',
  ],
  linkedChapterId: '9-6-2',
  content: [
    {
      id: '9-6-2-n-intro',
      type: 'text',
      content: `## Et bilde sier mer enn tusen tall

Tenk deg at du får et regneark med $500$ tall. Kan du se noen mønstre? Sannsynligvis ikke -- øynene våre er ikke laget for å finne sammenhenger i tallrekker. Men hvis de samme tallene vises som et diagram, ser du med en gang hva som skjer: trender, forskjeller, fordelinger.

**Diagrammer** er statistikkens viktigste kommunikasjonsverktøy. De gjør komplekse data visuelt forståelige. Men ulike diagramtyper passer til ulike situasjoner -- å velge feil diagram er som å bruke en hammer til å skru inn en skrue. Det kan kanskje fungere, men det blir verken pent eller effektivt.`,
    },

    {
      id: '9-6-2-n-section1',
      type: 'text',
      content: `## Stolpediagram og søylediagram

**Stolpediagram** (vertikale søyler) og **søylediagram** (horisontale søyler) er de mest brukte diagramtypene. De viser frekvensen eller verdien av ulike kategorier.

Tenk deg at du har spurt $30$ elever om favorittfag:

| Fag | Antall elever |
|-----|-------|
| Matte | $8$ |
| Norsk | $5$ |
| Gym | $10$ |
| Kunst | $4$ |
| Naturfag | $3$ |

I et stolpediagram får hvert fag en søyle der høyden tilsvarer antall elever. Du ser med en gang at Gym er mest populært og Naturfag minst.

Viktige regler for stolpediagram:
- **Søylene har lik bredde** -- ellers kan du lure leseren
- **$y$-aksen starter på $0$** -- ellers overdrives forskjellene
- **Det er mellomrom mellom søylene** -- dette skiller dem fra histogrammer
- **Kategoriene kan stå i vilkårlig rekkefølge** (men sortert etter størrelse er ofte lettest å lese)

Stolpediagram egner seg best for **kategoridata** -- data som kan deles i grupper (favorittfag, byer, merkevarer).`,
    },

    {
      id: '9-6-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-6-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på stolpediagram:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-6-2-n-quiz1-q0',
            task: 'Hvorfor bør $y$-aksen i et stolpediagram starte på $0$?',
            options: [
              { id: 'a', text: 'Fordi det ser penere ut', isCorrect: false },
              { id: 'b', text: 'Fordi det er en matematisk regel', isCorrect: false },
              { id: 'c', text: 'Fordi ellers kan forskjellene mellom søylene overdrives visuelt', isCorrect: true },
              { id: 'd', text: 'Fordi det sparer plass', isCorrect: false },
            ],
            solution: 'Hvis $y$-aksen for eksempel starter på $40$ i stedet for $0$, vil en søyle på $45$ se dobbelt så høy ut som en på $42$, selv om forskjellen er liten. Dette kan villede leseren.',
          },
          {
            id: '9-6-2-n-quiz1-q1',
            task: 'Når er et stolpediagram et godt valg?',
            options: [
              { id: 'a', text: 'Når du vil vise utvikling over tid', isCorrect: false },
              { id: 'b', text: 'Når du vil sammenligne kategorier', isCorrect: true },
              { id: 'c', text: 'Når du vil vise andeler av en helhet', isCorrect: false },
              { id: 'd', text: 'Når du har kontinuerlige data', isCorrect: false },
            ],
            solution: 'Stolpediagram er best for å sammenligne verdier mellom ulike kategorier (f.eks. favorittfag, salg per region).',
          },
        ],
      },
    },

    {
      id: '9-6-2-n-section2',
      type: 'text',
      content: `## Sektordiagram (kakediagram)

Et **sektordiagram** (også kalt kakediagram) viser hvordan en helhet er delt opp i deler. Hele sirkelen representerer $100\\,\\%$, og hver sektor viser hvor stor andel en kategori utgjør.

For å tegne et sektordiagram må du beregne **vinkelen** for hver sektor. Siden en hel sirkel er $360°$:

$$\\text{Vinkel} = \\frac{\\text{antall i kategorien}}{\\text{totalt antall}} \\cdot 360°$$

Med favorittfag-eksempelet:
- Matte: $\\frac{8}{30} \\cdot 360° = 96°$
- Norsk: $\\frac{5}{30} \\cdot 360° = 60°$
- Gym: $\\frac{10}{30} \\cdot 360° = 120°$
- Kunst: $\\frac{4}{30} \\cdot 360° = 48°$
- Naturfag: $\\frac{3}{30} \\cdot 360° = 36°$

Sektordiagram er gode for å vise **andeler** og **prosentfordelinger**. Men de fungerer dårlig med mange kategorier (mer enn $5$--$6$), og det kan være vanskelig å sammenligne sektorer som er nesten like store. I slike tilfeller er stolpediagram ofte et bedre valg.`,
    },

    {
      id: '9-6-2-n-section3',
      type: 'text',
      content: `## Linjediagram og histogram

### Linjediagram

Et **linjediagram** kobler datapunktene med linjer og er perfekt for å vise **utvikling over tid** (tidsserier). Tenk på temperaturen gjennom et døgn, aksjekurser gjennom et år, eller befolkningsvekst over tiår.

$x$-aksen viser tid, og $y$-aksen viser verdien. Linjen gjør det enkelt å se **trender** (stiger det? synker det? flater det ut?) og **svingninger**.

Tips: Ikke koble punkter med linje hvis $x$-aksen ikke representerer tid eller en sammenhengende skala. Å tegne en linje mellom «Matte» og «Gym» gir ingen mening!

### Histogram

Et **histogram** ser ut som et stolpediagram, men det er en viktig forskjell: det viser fordelingen av **kontinuerlige data** delt inn i **intervaller** (klasser). Søylene har **ingen mellomrom** fordi intervallene er sammenhengende.

For eksempel kan du vise høydefordelingen i en klasse med intervaller som $150$--$155$ cm, $155$--$160$ cm, og så videre. Høyden på søylen viser hvor mange elever som faller i hvert intervall.

For å lage et histogram:
1. Bestem antall intervaller (vanligvis $5$--$10$)
2. Alle intervaller bør ha lik bredde
3. Tell opp frekvensen i hvert intervall
4. Tegn søyler uten mellomrom`,
    },

    {
      id: '9-6-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-6-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på diagramtyper:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-6-2-n-quiz2-q0',
            task: 'Hva er vinkelen i et sektordiagram for en kategori som utgjør $25\\,\\%$?',
            options: [
              { id: 'a', text: '$25°$', isCorrect: false },
              { id: 'b', text: '$90°$', isCorrect: true },
              { id: 'c', text: '$60°$', isCorrect: false },
              { id: 'd', text: '$180°$', isCorrect: false },
            ],
            solution: '$25\\,\\%$ av $360° = 0{,}25 \\cdot 360° = 90°$. En firedel av sirkelen.',
          },
          {
            id: '9-6-2-n-quiz2-q1',
            task: 'Du vil vise hvordan temperaturen endrer seg gjennom en uke. Hvilken diagramtype er best?',
            options: [
              { id: 'a', text: 'Sektordiagram', isCorrect: false },
              { id: 'b', text: 'Stolpediagram', isCorrect: false },
              { id: 'c', text: 'Linjediagram', isCorrect: true },
              { id: 'd', text: 'Histogram', isCorrect: false },
            ],
            solution: 'Linjediagram er best for tidsserier -- data som endrer seg over tid. Linjen viser trender og svingninger tydelig.',
          },
          {
            id: '9-6-2-n-quiz2-q2',
            task: 'Hva er hovedforskjellen mellom et stolpediagram og et histogram?',
            options: [
              { id: 'a', text: 'Stolpediagram bruker farger, histogram gjør det ikke', isCorrect: false },
              { id: 'b', text: 'Stolpediagram viser kategorier (med mellomrom), histogram viser kontinuerlige intervaller (uten mellomrom)', isCorrect: true },
              { id: 'c', text: 'Histogram er alltid vertikalt', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
            ],
            solution: 'Stolpediagram brukes for kategoridata og har mellomrom mellom søylene. Histogram brukes for kontinuerlige data delt i intervaller, og søylene står inntil hverandre.',
          },
        ],
      },
    },

    {
      id: '9-6-2-n-section4',
      type: 'text',
      content: `## Boksplott -- fem tall forteller alt

Et **boksplott** (også kalt «box and whisker») er et elegant diagram som oppsummerer et datasett med bare fem tall: **minimumsverdien**, $Q_1$, **medianen**, $Q_3$ og **maksimumsverdien**.

Slik tegner du et boksplott:
1. Tegn en tallinje
2. Marker $Q_1$ og $Q_3$ og tegn en boks mellom dem
3. Tegn en strek inne i boksen ved medianen
4. Tegn «værhår» (whiskers) fra boksen ut til min og maks

Boksen viser hvor de midterste $50\\,\\%$ av dataene ligger (IQR). Værhårene viser ytterpunktene. Hvis et boksplott er langt til høyre, er dataene generelt høye. Hvis boksen er smal, er dataene lite spredt.

Boksplott er spesielt nyttige for å **sammenligne grupper**. Du kan for eksempel legge boksplott for gutter og jenter ved siden av hverandre og raskt se hvem som scorer høyest, hvem som har mest variasjon, og om det er overlapp.

| Femtallsoppsummering | Verdi |
|---------------------|-------|
| Minimum | $x_{\\text{min}}$ |
| Nedre kvartil | $Q_1$ |
| Median | $Q_2$ |
| Øvre kvartil | $Q_3$ |
| Maksimum | $x_{\\text{maks}}$ |`,
    },

    {
      id: '9-6-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-6-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på boksplott:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-6-2-n-quiz3-q0',
            task: 'I et boksplott, hva representerer bredden på boksen?',
            options: [
              { id: 'a', text: 'Variasjonsbredden', isCorrect: false },
              { id: 'b', text: 'Gjennomsnittet', isCorrect: false },
              { id: 'c', text: 'Interkvartilbredden (IQR)', isCorrect: true },
              { id: 'd', text: 'Medianen', isCorrect: false },
            ],
            solution: 'Boksen strekker seg fra $Q_1$ til $Q_3$, så bredden er $Q_3 - Q_1 =$ IQR. Den viser spredningen i de midterste $50\\,\\%$ av dataene.',
          },
          {
            id: '9-6-2-n-quiz3-q1',
            task: 'Et boksplott har min $= 10$, $Q_1 = 20$, median $= 35$, $Q_3 = 50$, maks $= 80$. Hva er IQR?',
            options: [
              { id: 'a', text: '$70$', isCorrect: false },
              { id: 'b', text: '$30$', isCorrect: true },
              { id: 'c', text: '$35$', isCorrect: false },
              { id: 'd', text: '$15$', isCorrect: false },
            ],
            solution: 'IQR $= Q_3 - Q_1 = 50 - 20 = 30$.',
          },
          {
            id: '9-6-2-n-quiz3-q2',
            task: 'Når er boksplott spesielt nyttige?',
            options: [
              { id: 'a', text: 'Når du vil vise utvikling over tid', isCorrect: false },
              { id: 'b', text: 'Når du vil sammenligne fordelinger mellom grupper', isCorrect: true },
              { id: 'c', text: 'Når du har kategoridata', isCorrect: false },
              { id: 'd', text: 'Når du vil vise andeler av en helhet', isCorrect: false },
            ],
            solution: 'Boksplott er perfekte for å sammenligne fordelinger -- for eksempel resultatene til to klasser, eller lønnsfordelingen i ulike yrker.',
          },
        ],
      },
    },

    {
      id: '9-6-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Velg diagramtype etter hva du vil vise:

| Diagramtype | Best for | Eksempel |
|-------------|----------|----------|
| **Stolpediagram** | Sammenligne kategorier | Favorittfag i klassen |
| **Sektordiagram** | Andeler av en helhet | Fordeling av husholdningsbudsjettet |
| **Linjediagram** | Utvikling over tid | Temperatur gjennom en uke |
| **Histogram** | Fordeling av kontinuerlige data | Høydefordeling i en klasse |
| **Boksplott** | Sammenligne fordelinger | Karakterer i to klasser |

Viktige regler: Start $y$-aksen på $0$ i stolpediagram, bruk mellomrom mellom kategorisøyler men ikke i histogrammer, og vær forsiktig med sektordiagram med mange kategorier. Et boksplott oppsummerer data med fem tall: min, $Q_1$, median, $Q_3$, maks.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.3 NARRATIV: Sannsynlighetsberegning
// ============================================================================

export const CHAPTER_9_6_3_NARRATIV: TextbookChapter = {
  id: '9-6-3-narrativ',
  courseId: '9',
  chapterNumber: '6.3',
  title: 'Sannsynlighetsberegning',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av sannsynlighet -- fra terningkast og myntspill til valgtrær og kombinasjoner, med vekt på å bygge intuisjon for tilfeldighet.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke sannsynlegheit og statistikk i utforsking og argumentasjon',
  ],
  linkedChapterId: '9-6-3',
  content: [
    {
      id: '9-6-3-n-intro',
      type: 'text',
      content: `## Tilfeldighet med regler

Hva er sjansen for at det regner i morgen? For at du vinner i Lotto? For at du kaster en sekser med en terning? Vi lever i en verden full av usikkerhet, men matematikken gir oss verktøy for å **måle** denne usikkerheten.

**Sannsynlighet** er et tall mellom $0$ og $1$ (eller mellom $0\\,\\%$ og $100\\,\\%$) som beskriver hvor sannsynlig en hendelse er. $0$ betyr umulig, $1$ betyr sikkert, og alt imellom er ulike grader av usikkerhet.

La oss utforske reglene for å beregne sannsynligheter -- fra de enkleste terningkastene til mer avanserte kombinasjoner.`,
    },

    {
      id: '9-6-3-n-section1',
      type: 'text',
      content: `## Grunnleggende sannsynlighet

Når alle utfall er like sannsynlige (som med en rettferdig terning eller mynt), kan vi beregne sannsynligheten med en enkel formel:

$$P(A) = \\frac{\\text{antall gunstige utfall}}{\\text{antall mulige utfall}}$$

La oss ta en vanlig terning med $6$ sider. Hvert kast har $6$ mulige utfall: $1, 2, 3, 4, 5, 6$.

- $P(\\text{sekser}) = \\frac{1}{6} \\approx 0{,}167 = 16{,}7\\,\\%$
- $P(\\text{partall}) = \\frac{3}{6} = \\frac{1}{2} = 0{,}5 = 50\\,\\%$ (utfallene $2, 4, 6$)
- $P(\\text{mindre enn 5}) = \\frac{4}{6} = \\frac{2}{3} \\approx 66{,}7\\,\\%$ (utfallene $1, 2, 3, 4$)

**Komplementregelen** sier at sannsynligheten for at noe *ikke* skjer er:

$$P(\\text{ikke } A) = 1 - P(A)$$

Sannsynligheten for å *ikke* kaste en sekser er $1 - \\frac{1}{6} = \\frac{5}{6}$. Denne regelen er veldig nyttig -- noen ganger er det lettere å beregne det motsatte og trekke fra.

Et utfallsrom (ofte kalt $\\Omega$) er mengden av alle mulige utfall. For ett terningkast: $\\Omega = \\{1, 2, 3, 4, 5, 6\\}$. En **hendelse** er en delmengde av utfallsrommet, for eksempel «partall» $= \\{2, 4, 6\\}$.`,
    },

    {
      id: '9-6-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-6-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på grunnleggende sannsynlighet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-6-3-n-quiz1-q0',
            task: 'Du trekker et kort fra en standard kortstokk med $52$ kort. Hva er sannsynligheten for å trekke et ess?',
            options: [
              { id: 'a', text: '$\\frac{1}{52}$', isCorrect: false },
              { id: 'b', text: '$\\frac{4}{52} = \\frac{1}{13}$', isCorrect: true },
              { id: 'c', text: '$\\frac{13}{52} = \\frac{1}{4}$', isCorrect: false },
              { id: 'd', text: '$\\frac{2}{52}$', isCorrect: false },
            ],
            solution: 'Det er $4$ ess i en kortstokk (spar, hjerter, ruter, kløver), og $52$ kort totalt. $P(\\text{ess}) = \\frac{4}{52} = \\frac{1}{13}$.',
          },
          {
            id: '9-6-3-n-quiz1-q1',
            task: 'Sannsynligheten for regn i morgen er $0{,}3$. Hva er sannsynligheten for at det IKKE regner?',
            options: [
              { id: 'a', text: '$0{,}3$', isCorrect: false },
              { id: 'b', text: '$0{,}7$', isCorrect: true },
              { id: 'c', text: '$0{,}03$', isCorrect: false },
              { id: 'd', text: '$1{,}3$', isCorrect: false },
            ],
            solution: 'Komplementregelen: $P(\\text{ikke regn}) = 1 - P(\\text{regn}) = 1 - 0{,}3 = 0{,}7$.',
          },
          {
            id: '9-6-3-n-quiz1-q2',
            task: 'Du kaster en terning. Hva er sannsynligheten for å få et tall større enn $4$?',
            options: [
              { id: 'a', text: '$\\frac{4}{6}$', isCorrect: false },
              { id: 'b', text: '$\\frac{1}{6}$', isCorrect: false },
              { id: 'c', text: '$\\frac{2}{6} = \\frac{1}{3}$', isCorrect: true },
              { id: 'd', text: '$\\frac{3}{6}$', isCorrect: false },
            ],
            solution: 'Tall større enn $4$ er $5$ og $6$ -- det er $2$ gunstige utfall av $6$ mulige. $P = \\frac{2}{6} = \\frac{1}{3}$.',
          },
        ],
      },
    },

    {
      id: '9-6-3-n-section2',
      type: 'text',
      content: `## Sammensatte hendelser og valgtre

Hva skjer når vi gjør flere forsøk? Hvis du kaster en terning to ganger, eller trekker to kort, blir ting mer komplisert. Her bruker vi **valgtre** (også kalt trestruktur) for å holde oversikten.

### Multiplikasjonsregelen

Når to hendelser er **uavhengige** (den ene påvirker ikke den andre), ganger vi sannsynlighetene:

$$P(A \\text{ og } B) = P(A) \\cdot P(B)$$

Du kaster en mynt og en terning. Sannsynligheten for krone OG sekser:

$$P(\\text{krone og sekser}) = \\frac{1}{2} \\cdot \\frac{1}{6} = \\frac{1}{12}$$

### Valgtre

Et valgtre er et diagram der hver forgrening representerer et mulig utfall. Ved to myntkast får vi:

- Første kast: Krone (K) eller Mynt (M)
- Andre kast: Krone (K) eller Mynt (M)

Utfallsrommet er $\\{KK, KM, MK, MM\\}$ -- fire like sannsynlige utfall, hver med sannsynlighet $\\frac{1}{4}$.

Sannsynligheten for nøyaktig en krone av to kast: Utfallene $KM$ og $MK$ gir en krone, så $P = \\frac{2}{4} = \\frac{1}{2}$.

### Addisjonsregelen

Når to hendelser **ikke kan skje samtidig** (disjunkte hendelser), legger vi sammen sannsynlighetene:

$$P(A \\text{ eller } B) = P(A) + P(B)$$

Sannsynligheten for å kaste $1$ eller $6$ med en terning: $\\frac{1}{6} + \\frac{1}{6} = \\frac{2}{6} = \\frac{1}{3}$.`,
    },

    {
      id: '9-6-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-6-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på sammensatte hendelser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-6-3-n-quiz2-q0',
            task: 'Du kaster to terninger. Hva er sannsynligheten for å få sekser på begge?',
            options: [
              { id: 'a', text: '$\\frac{2}{6}$', isCorrect: false },
              { id: 'b', text: '$\\frac{1}{12}$', isCorrect: false },
              { id: 'c', text: '$\\frac{1}{36}$', isCorrect: true },
              { id: 'd', text: '$\\frac{1}{6}$', isCorrect: false },
            ],
            solution: 'Uavhengige hendelser: $P = \\frac{1}{6} \\cdot \\frac{1}{6} = \\frac{1}{36} \\approx 2{,}8\\,\\%$.',
          },
          {
            id: '9-6-3-n-quiz2-q1',
            task: 'En pose inneholder $3$ røde og $5$ blå kuler. Du trekker en kule. Hva er sannsynligheten for rød ELLER blå?',
            options: [
              { id: 'a', text: '$\\frac{3}{8}$', isCorrect: false },
              { id: 'b', text: '$\\frac{5}{8}$', isCorrect: false },
              { id: 'c', text: '$\\frac{15}{64}$', isCorrect: false },
              { id: 'd', text: '$1$', isCorrect: true },
            ],
            solution: '$P(\\text{rød eller blå}) = \\frac{3}{8} + \\frac{5}{8} = \\frac{8}{8} = 1$. Kulen må være enten rød eller blå -- det er sikkert!',
          },
          {
            id: '9-6-3-n-quiz2-q2',
            task: 'Du kaster en mynt tre ganger. Hvor mange mulige utfall finnes?',
            options: [
              { id: 'a', text: '$3$', isCorrect: false },
              { id: 'b', text: '$6$', isCorrect: false },
              { id: 'c', text: '$8$', isCorrect: true },
              { id: 'd', text: '$9$', isCorrect: false },
            ],
            solution: 'Hvert kast har $2$ mulige utfall, og kastene er uavhengige. Totalt: $2 \\cdot 2 \\cdot 2 = 2^3 = 8$ mulige utfall.',
          },
        ],
      },
    },

    {
      id: '9-6-3-n-section3',
      type: 'text',
      content: `## Med og uten tilbakelegging

Noen ganger påvirker det første forsøket det neste. Tenk på en pose med $3$ røde og $2$ blå kuler.

### Med tilbakelegging
Du trekker en kule, noterer fargen, legger kulen tilbake, og trekker igjen. Sannsynlighetene er de samme hver gang:

$$P(\\text{rød, rød}) = \\frac{3}{5} \\cdot \\frac{3}{5} = \\frac{9}{25}$$

### Uten tilbakelegging
Du trekker en kule og legger den IKKE tilbake. Nå endrer sannsynlighetene seg:

$$P(\\text{rød, rød}) = \\frac{3}{5} \\cdot \\frac{2}{4} = \\frac{6}{20} = \\frac{3}{10}$$

Etter at du har tatt ut en rød kule, er det bare $2$ røde igjen av $4$ kuler totalt.

Her er hendelsene **avhengige** -- utfallet av det første trekket påvirker sannsynligheten for det andre. Vi bruker **betinget sannsynlighet**: $P(B | A)$ betyr «sannsynligheten for $B$ gitt at $A$ har skjedd».

$$P(A \\text{ og } B) = P(A) \\cdot P(B | A)$$

Et valgtre er ekstra nyttig i slike situasjoner, fordi du kan skrive de oppdaterte sannsynlighetene langs hver gren.`,
    },

    {
      id: '9-6-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-6-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på tilbakelegging og betinget sannsynlighet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-6-3-n-quiz3-q0',
            task: 'En pose har $4$ grønne og $6$ gule kuler. Du trekker to kuler UTEN tilbakelegging. Hva er $P(\\text{grønn, grønn})$?',
            options: [
              { id: 'a', text: '$\\frac{4}{10} \\cdot \\frac{4}{10} = \\frac{16}{100}$', isCorrect: false },
              { id: 'b', text: '$\\frac{4}{10} \\cdot \\frac{3}{9} = \\frac{12}{90} = \\frac{2}{15}$', isCorrect: true },
              { id: 'c', text: '$\\frac{4}{10} \\cdot \\frac{3}{10} = \\frac{12}{100}$', isCorrect: false },
              { id: 'd', text: '$\\frac{8}{10}$', isCorrect: false },
            ],
            solution: 'Uten tilbakelegging: Første trekk har $\\frac{4}{10}$ sjanse for grønn. Andre trekk (gitt grønn først) har $\\frac{3}{9}$ sjanse for grønn. $P = \\frac{4}{10} \\cdot \\frac{3}{9} = \\frac{12}{90} = \\frac{2}{15}$.',
          },
          {
            id: '9-6-3-n-quiz3-q1',
            task: 'Hva er forskjellen mellom trekking med og uten tilbakelegging?',
            options: [
              { id: 'a', text: 'Med tilbakelegging gir alltid høyere sannsynlighet', isCorrect: false },
              { id: 'b', text: 'Uten tilbakelegging endrer sannsynlighetene seg mellom trekkene', isCorrect: true },
              { id: 'c', text: 'Med tilbakelegging kan man bare trekke en gang', isCorrect: false },
              { id: 'd', text: 'Det er ingen forskjell', isCorrect: false },
            ],
            solution: 'Uten tilbakelegging fjernes den trukne gjenstanden, slik at utfallsrommet endres. Med tilbakelegging er hvert trekk uavhengig av de forrige.',
          },
          {
            id: '9-6-3-n-quiz3-q2',
            task: 'Du trekker to kort fra en kortstokk ($52$ kort) UTEN tilbakelegging. Hva er sannsynligheten for to ess?',
            options: [
              { id: 'a', text: '$\\frac{4}{52} \\cdot \\frac{4}{52}$', isCorrect: false },
              { id: 'b', text: '$\\frac{4}{52} \\cdot \\frac{3}{51}$', isCorrect: true },
              { id: 'c', text: '$\\frac{4}{52} + \\frac{3}{51}$', isCorrect: false },
              { id: 'd', text: '$\\frac{8}{52}$', isCorrect: false },
            ],
            solution: 'Første kort: $\\frac{4}{52}$ sjanse for ess. Etter ett ess er trukket: $\\frac{3}{51}$ sjanse for et nytt ess. $P = \\frac{4}{52} \\cdot \\frac{3}{51} = \\frac{12}{2652} = \\frac{1}{221}$.',
          },
        ],
      },
    },

    {
      id: '9-6-3-n-section4',
      type: 'text',
      content: `## Relativ frekvens og store talls lov

I praksis vet vi ikke alltid den teoretiske sannsynligheten. Hva er sannsynligheten for at et brødskive lander med smørsiden ned? Det finnes ingen formel -- men vi kan **eksperimentere**.

Hvis du slipper brødskiven $100$ ganger og den lander med smørsiden ned $62$ ganger, er den **relative frekvensen**:

$$\\text{Relativ frekvens} = \\frac{62}{100} = 0{,}62 = 62\\,\\%$$

Jo flere forsøk du gjør, jo nærmere vil den relative frekvensen komme den sanne sannsynligheten. Dette er **store talls lov**. Med $10$ kast av en rettferdig mynt kan du godt få $7$ krone ($70\\,\\%$), men med $10\\,000$ kast vil andelen krone ligge svært nær $50\\,\\%$.

Viktig: Store talls lov betyr IKKE at myntene «husker» tidligere kast. Etter $10$ krone på rad er sannsynligheten for krone på neste kast fortsatt $\\frac{1}{2}$. Hvert kast er uavhengig. Troen på at «det er på tide» med mynt etter mange krone kalles **gamblerens feilslutning**.`,
    },

    {
      id: '9-6-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '9-6-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på relativ frekvens og store talls lov:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-6-3-n-quiz4-q0',
            task: 'En elev kaster en terning $60$ ganger og får sekser $12$ ganger. Hva er den relative frekvensen for sekser?',
            options: [
              { id: 'a', text: '$\\frac{1}{6}$', isCorrect: false },
              { id: 'b', text: '$\\frac{1}{5}$', isCorrect: true },
              { id: 'c', text: '$\\frac{12}{100}$', isCorrect: false },
              { id: 'd', text: '$12$', isCorrect: false },
            ],
            solution: 'Relativ frekvens $= \\frac{12}{60} = \\frac{1}{5} = 0{,}2 = 20\\,\\%$. Den teoretiske sannsynligheten er $\\frac{1}{6} \\approx 16{,}7\\,\\%$, men med bare $60$ kast kan det avvike.',
          },
          {
            id: '9-6-3-n-quiz4-q1',
            task: 'Du har kastet krone $8$ ganger på rad med en rettferdig mynt. Hva er sannsynligheten for krone på neste kast?',
            options: [
              { id: 'a', text: 'Lavere enn $\\frac{1}{2}$ -- det er «på tide» med mynt', isCorrect: false },
              { id: 'b', text: 'Høyere enn $\\frac{1}{2}$ -- mynten er «på en streak»', isCorrect: false },
              { id: 'c', text: 'Nøyaktig $\\frac{1}{2}$', isCorrect: true },
              { id: 'd', text: 'Umulig å si', isCorrect: false },
            ],
            solution: 'Hvert myntkast er uavhengig av de forrige. Mynten «husker» ikke tidligere kast. Sannsynligheten er alltid $\\frac{1}{2}$ for en rettferdig mynt.',
          },
        ],
      },
    },

    {
      id: '9-6-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Grunnleggende sannsynlighet** med like sannsynlige utfall:

$$P(A) = \\frac{\\text{gunstige utfall}}{\\text{mulige utfall}}$$

**Komplementregelen**: $P(\\text{ikke } A) = 1 - P(A)$.

**Multiplikasjonsregelen** for uavhengige hendelser: $P(A \\text{ og } B) = P(A) \\cdot P(B)$.

**Addisjonsregelen** for disjunkte hendelser: $P(A \\text{ eller } B) = P(A) + P(B)$.

**Trekking uten tilbakelegging** gir avhengige hendelser: $P(A \\text{ og } B) = P(A) \\cdot P(B|A)$.

**Relativ frekvens** er estimert sannsynlighet basert på eksperimenter. **Store talls lov**: jo flere forsøk, jo nærmere kommer den relative frekvensen den sanne sannsynligheten.

**Valgtre** er et uunnværlig verktøy for å holde oversikten over sammensatte hendelser -- tegn alltid et tre når du er i tvil!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_9_NARRATIV_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_9_6_1_NARRATIV,
  CHAPTER_9_6_2_NARRATIV,
  CHAPTER_9_6_3_NARRATIV,
];
