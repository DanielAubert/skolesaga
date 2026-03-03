/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 8. klasse - Narrativ versjon Del 6
 *
 * Kapittel 5.1: Sentralmål
 * Kapittel 5.2: Diagrammer og tabeller
 * Kapittel 5.3: Sannsynlighet - introduksjon
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1 NARRATIV: Sentralmål
// ============================================================================

export const CHAPTER_8_5_1_NARRATIV: TextbookChapter = {
  id: '8-5-1-narrativ',
  courseId: '8',
  chapterNumber: '5.1',
  title: 'Sentralmål',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av sentralmål -- gjennomsnitt, median og typetall forklart med eksempler fra skole, idrett og hverdagsliv.',
  estimatedMinutes: 30,
  competenceGoals: [
    'bruke sentralmål og spreiingsmål til å analysere og samanlikne datasett',
  ],
  linkedChapterId: '8-5-1',
  content: [
    {
      id: '8-5-1-n-intro',
      type: 'text',
      content: `## Hva er «normalt»?

Tenk deg at noen sier: «En gjennomsnittlig norsk 13-åring er omtrent $165$ cm høy.» Hva betyr det egentlig? Det betyr ikke at alle 13-åringer er nøyaktig $165$ cm. Noen er $155$ cm, andre er $175$ cm. Men hvis vi tar alle høydene og finner et «typisk» tall, havner vi rundt $165$ cm.

I matematikken kaller vi slike «typiske tall» for **sentralmål**. De er verktøy som hjelper oss å oppsummere mange tall med bare ett enkelt tall. I stedet for å liste opp høydene til $200$ elever, kan vi si: «Gjennomsnittshøyden er $165$ cm.» Det gir et raskt og nyttig bilde.

Men her er trikset: det finnes *flere* måter å finne et «typisk tall» på, og de gir ikke alltid samme svar. De tre viktigste sentralmålene er **gjennomsnitt**, **median** og **typetall**. La oss se på dem én etter én.`,
    },

    {
      id: '8-5-1-n-section1',
      type: 'text',
      content: `## Gjennomsnitt -- summen delt på antall

**Gjennomsnitt** (eller **middelverdi**) er det de fleste tenker på når de hører ordet «gjennomsnitt». Du regner det ut slik:

$$\\bar{x} = \\frac{\\text{summen av alle verdiene}}{\\text{antall verdier}}$$

Symbolet $\\bar{x}$ (leses «x strek») betyr gjennomsnitt.

**Eksempel**: Fem venner sammenlikner ukepengene sine: $50, 60, 50, 80, 60$ kr.

$$\\bar{x} = \\frac{50 + 60 + 50 + 80 + 60}{5} = \\frac{300}{5} = 60 \\text{ kr}$$

Gjennomsnittet er $60$ kr. Det betyr at hvis alle hadde fått like mye, ville hver person fått $60$ kr.

Gjennomsnittet er lett å forstå og lett å beregne. Men det har en svakhet: det **påvirkes sterkt av ekstremverdier**. Tenk deg at en sjette venn dukker opp med $500$ kr i ukepengar:

$$\\bar{x} = \\frac{50 + 60 + 50 + 80 + 60 + 500}{6} = \\frac{800}{6} \\approx 133 \\text{ kr}$$

Plutselig er gjennomsnittet $133$ kr, men de fleste får bare $50$--$80$ kr! Én enkelt høy verdi har dratt hele gjennomsnittet opp. Det gir et misvisende bilde.`,
    },

    {
      id: '8-5-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-5-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på gjennomsnitt:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-5-1-n-quiz1-q0',
            task: 'Hva er gjennomsnittet av tallene $3, 7, 5, 9, 6$?',
            options: [
              { id: 'a', text: '$5$', isCorrect: false },
              { id: 'b', text: '$6$', isCorrect: true },
              { id: 'c', text: '$7$', isCorrect: false },
              { id: 'd', text: '$30$', isCorrect: false },
            ],
            solution: '$\\bar{x} = \\frac{3 + 7 + 5 + 9 + 6}{5} = \\frac{30}{5} = 6$.',
          },
          {
            id: '8-5-1-n-quiz1-q1',
            task: 'Emma har fått disse resultatene på fem prøver: $4, 5, 3, 5, 4$. Hvilket snitt trenger hun på den sjette prøven for å få et gjennomsnitt på $5$?',
            options: [
              { id: 'a', text: '$5$', isCorrect: false },
              { id: 'b', text: '$6$', isCorrect: false },
              { id: 'c', text: '$9$', isCorrect: true },
              { id: 'd', text: '$7$', isCorrect: false },
            ],
            solution: 'For å få gjennomsnitt $5$ av $6$ prøver trenger hun sum $= 5 \\cdot 6 = 30$. Hun har allerede $4 + 5 + 3 + 5 + 4 = 21$. Mangler $30 - 21 = 9$.',
          },
          {
            id: '8-5-1-n-quiz1-q2',
            task: 'Hvorfor kan gjennomsnittet være misvisende?',
            options: [
              { id: 'a', text: 'Fordi det er vanskelig å beregne', isCorrect: false },
              { id: 'b', text: 'Fordi det alltid er for høyt', isCorrect: false },
              { id: 'c', text: 'Fordi ekstremverdier (veldig høye eller lave tall) påvirker det sterkt', isCorrect: true },
              { id: 'd', text: 'Fordi det bare fungerer med partall', isCorrect: false },
            ],
            solution: 'Gjennomsnittet trekkes mot ekstremverdier. Én enkelt veldig høy eller lav verdi kan gi et snitttall som ikke representerer det «typiske» godt.',
          },
        ],
      },
    },

    {
      id: '8-5-1-n-section2',
      type: 'text',
      content: `## Median -- den midterste verdien

**Medianen** er den midterste verdien når alle tallene er sortert fra minst til størst. Halvparten av verdiene er under medianen, og halvparten er over.

**Slik finner du medianen**:
1. **Sorter** tallene fra minst til størst
2. Finn den **midterste** verdien:
   - Hvis det er et **oddetall** verdier: medianen er den midterste
   - Hvis det er et **partall** verdier: medianen er gjennomsnittet av de to midterste

**Eksempel med oddetall**: Poeng på en prøve: $5, 2, 8, 4, 6$.
Sortert: $2, 4, 5, 6, 8$. Medianen er $5$ (den tredje av fem verdier).

**Eksempel med partall**: Antall mål i seks kamper: $1, 0, 3, 2, 1, 4$.
Sortert: $0, 1, 1, 2, 3, 4$. De to midterste er $1$ og $2$. Medianen er $\\frac{1 + 2}{2} = 1{,}5$.

Den store fordelen med medianen er at den **ikke påvirkes av ekstremverdier**. La oss gå tilbake til ukepengar-eksempelet: $50, 50, 60, 60, 80, 500$ kr. Medianen er $\\frac{60 + 60}{2} = 60$ kr -- mye mer representativt enn gjennomsnittet på $133$ kr!

Medianen er spesielt nyttig for data som er **skjevt fordelt**, for eksempel inntekt, boligpriser eller ventetider.`,
    },

    {
      id: '8-5-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-5-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på median:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-5-1-n-quiz2-q0',
            task: 'Hva er medianen av tallene $12, 3, 7, 9, 1$?',
            options: [
              { id: 'a', text: '$3$', isCorrect: false },
              { id: 'b', text: '$7$', isCorrect: true },
              { id: 'c', text: '$6{,}4$', isCorrect: false },
              { id: 'd', text: '$9$', isCorrect: false },
            ],
            solution: 'Sortert: $1, 3, 7, 9, 12$. Med $5$ verdier er medianen den tredje: $7$.',
          },
          {
            id: '8-5-1-n-quiz2-q1',
            task: 'Hva er medianen av tallene $4, 8, 2, 6$?',
            options: [
              { id: 'a', text: '$4$', isCorrect: false },
              { id: 'b', text: '$5$', isCorrect: true },
              { id: 'c', text: '$6$', isCorrect: false },
              { id: 'd', text: '$7$', isCorrect: false },
            ],
            solution: 'Sortert: $2, 4, 6, 8$. Med $4$ verdier er medianen gjennomsnittet av de to midterste: $\\frac{4 + 6}{2} = 5$.',
          },
          {
            id: '8-5-1-n-quiz2-q2',
            task: 'Når er medianen et bedre sentralmål enn gjennomsnittet?',
            options: [
              { id: 'a', text: 'Når alle verdiene er like', isCorrect: false },
              { id: 'b', text: 'Når det er få verdier', isCorrect: false },
              { id: 'c', text: 'Når datasettet har ekstremverdier som trekker gjennomsnittet opp eller ned', isCorrect: true },
              { id: 'd', text: 'Når du bare har to verdier', isCorrect: false },
            ],
            solution: 'Medianen påvirkes ikke av ekstremverdier. Når noen få høye eller lave verdier forstyrrer gjennomsnittet, gir medianen et bedre bilde av hva som er «typisk».',
          },
        ],
      },
    },

    {
      id: '8-5-1-n-section3',
      type: 'text',
      content: `## Typetall -- den vanligste verdien

**Typetallet** (også kalt **modus**) er den verdien som forekommer **flest ganger** i datasettet. Det er det enkleste sentralmålet å finne -- bare tell!

**Eksempel**: Skostørrelse i en klasse: $38, 39, 40, 39, 41, 39, 38, 40, 42, 39$.

La oss telle:
- $38$: forekommer $2$ ganger
- $39$: forekommer $4$ ganger
- $40$: forekommer $2$ ganger
- $41$: forekommer $1$ gang
- $42$: forekommer $1$ gang

Typetallet er $39$ fordi det forekommer oftest ($4$ ganger).

**Spesielle tilfeller**:
- Et datasett kan ha **flere typetall** hvis to eller flere verdier forekommer like mange ganger. For eksempel i $\\{1, 1, 2, 2, 3\\}$ er både $1$ og $2$ typetall.
- Et datasett har **ingen typetall** hvis alle verdier forekommer like mange ganger. For eksempel har $\\{1, 2, 3, 4, 5\\}$ ingen typetall.

**Når bruker vi typetallet?** Typetallet er spesielt nyttig for **kategoridata** -- data som ikke er tall. Tenk på favorittfarge: rød, blå, grønn, blå, blå, rød. Her gir det ingen mening å beregne gjennomsnitt eller median, men typetallet er «blå» (den vanligste fargen).

Det brukes også når du vil vite hva som er **mest populært** eller **mest vanlig**: den vanligste skostørrelsen, den mest solgte boken, den mest spilte sangen.`,
    },

    {
      id: '8-5-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-5-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på typetall:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-5-1-n-quiz3-q0',
            task: 'Hva er typetallet i datasettet $5, 3, 7, 3, 8, 5, 3, 9$?',
            options: [
              { id: 'a', text: '$5$', isCorrect: false },
              { id: 'b', text: '$3$', isCorrect: true },
              { id: 'c', text: '$5{,}375$', isCorrect: false },
              { id: 'd', text: '$7$', isCorrect: false },
            ],
            solution: '$3$ forekommer $3$ ganger, $5$ forekommer $2$ ganger, resten $1$ gang. Typetallet er $3$.',
          },
          {
            id: '8-5-1-n-quiz3-q1',
            task: 'En klasse stemmer på favorittidrett: fotball, håndball, fotball, svømming, fotball, håndball, håndball. Hva er typetallet?',
            options: [
              { id: 'a', text: 'Svømming', isCorrect: false },
              { id: 'b', text: 'Fotball og håndball (begge forekommer $3$ ganger)', isCorrect: true },
              { id: 'c', text: 'Bare håndball', isCorrect: false },
              { id: 'd', text: 'Det finnes ikke typetall her', isCorrect: false },
            ],
            solution: 'Fotball forekommer $3$ ganger og håndball $3$ ganger. Begge er typetall -- datasettet er **bimodalt** (har to typetall).',
          },
          {
            id: '8-5-1-n-quiz3-q2',
            task: 'Hvorfor kan vi ikke beregne gjennomsnitt av favorittfarger?',
            options: [
              { id: 'a', text: 'Fordi farger er for vanskelige', isCorrect: false },
              { id: 'b', text: 'Fordi farger er kategoridata -- vi kan ikke legge sammen og dele «rød» og «blå»', isCorrect: true },
              { id: 'c', text: 'Fordi det er for mange farger', isCorrect: false },
              { id: 'd', text: 'Fordi farger ikke har medianer', isCorrect: false },
            ],
            solution: 'Gjennomsnitt og median krever tall vi kan sortere og regne med. Kategoridata (som farger, idrett, navn) kan bare telles -- da er typetallet det eneste sentralmålet som gir mening.',
          },
        ],
      },
    },

    {
      id: '8-5-1-n-section4',
      type: 'text',
      content: `## Når bruker du hva?

Alle tre sentralmålene har sine styrker. Her er en oversikt over når du bør bruke hvert:

| Sentralmål | Når bruker du det? | Eksempel |
|------------|-------------------|----------|
| **Gjennomsnitt** | Når dataene er jevnt fordelt uten store avvik | Karakterer på en prøve der alle scorer mellom $3$ og $6$ |
| **Median** | Når det finnes ekstremverdier eller skjev fordeling | Inntekt (noen få tjener veldig mye), boligpriser |
| **Typetall** | Når du har kategoridata, eller vil vite det vanligste | Favorittfag, mest solgte skostørrelse |

**Et viktig poeng**: Du kan beregne alle tre for samme datasett! De gir ulik informasjon:

- Gjennomsnittet forteller den «matematiske midten»
- Medianen forteller «den midterste personen»
- Typetallet forteller «det mest vanlige»

**Eksempel**: Lønninger i en liten bedrift (i tusen kr): $35, 38, 40, 42, 45, 300$.

- Gjennomsnitt: $\\frac{35 + 38 + 40 + 42 + 45 + 300}{6} = \\frac{500}{6} \\approx 83$ tusen kr
- Median: $\\frac{40 + 42}{2} = 41$ tusen kr
- Typetall: finnes ikke (alle verdier er unike)

Gjennomsnittet ($83$ tusen) er misvisende fordi sjefens lønn ($300$ tusen) trekker det opp. Medianen ($41$ tusen) gir et mye bedre bilde av hva en «vanlig» ansatt tjener.`,
    },

    {
      id: '8-5-1-n-summary',
      type: 'text',
      content: `## Oppsummering

**Sentralmål** er tall som beskriver hva som er «typisk» i et datasett.

**Gjennomsnitt** ($\\bar{x}$): Summen av alle verdier delt på antall verdier.
$$\\bar{x} = \\frac{x_1 + x_2 + \\ldots + x_n}{n}$$
Bruker alle dataene, men påvirkes av ekstremverdier.

**Median**: Den midterste verdien når dataene er sortert. Med partall verdier tar du gjennomsnittet av de to midterste. Robust mot ekstremverdier.

**Typetall** (modus): Den verdien som forekommer oftest. Det eneste sentralmålet som fungerer for kategoridata.

Velg riktig sentralmål etter situasjonen:
- Jevnt fordelte data uten ekstremverdier $\\rightarrow$ gjennomsnitt
- Data med ekstremverdier eller skjev fordeling $\\rightarrow$ median
- Kategoridata eller «mest vanlig» $\\rightarrow$ typetall`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.2 NARRATIV: Diagrammer og tabeller
// ============================================================================

export const CHAPTER_8_5_2_NARRATIV: TextbookChapter = {
  id: '8-5-2-narrativ',
  courseId: '8',
  chapterNumber: '5.2',
  title: 'Diagrammer og tabeller',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av diagrammer og tabeller -- stolpediagram, sektordiagram, linjediagram og frekvenstabeller forklart med eksempler fra undersøkelser og dagligliv.',
  estimatedMinutes: 35,
  competenceGoals: [
    'planleggje og gjennomføre statistiske undersøkingar og presentere resultat',
  ],
  linkedChapterId: '8-5-2',
  content: [
    {
      id: '8-5-2-n-intro',
      type: 'text',
      content: `## Fra tall til bilder

Forestill deg at du har spurt alle $150$ elevene på skolen om favorittfaget deres, og du sitter med en lang liste med svar. Hvordan skal du presentere resultatene slik at alle skjønner det med en gang?

Svaret er **diagrammer** og **tabeller**. De gjør tall visuelt forståelige. En tabell organiserer tallene ryddig, og et diagram gjør mønstre og forskjeller synlige med et blikk.

Å velge riktig type diagram er en viktig ferdighet. Feil diagram kan forvirre eller til og med villede. Riktig diagram kan formidle et budskap på sekunder. La oss se på de vanligste verktøyene.`,
    },

    {
      id: '8-5-2-n-section1',
      type: 'text',
      content: `## Frekvenstabeller

Før du lager et diagram, bør du organisere dataene i en **frekvenstabell**. Den viser hvor mange ganger hver verdi eller kategori forekommer.

**Eksempel**: Du har spurt $20$ elever om antall søsken:
$1, 0, 2, 1, 3, 1, 0, 1, 2, 1, 0, 1, 2, 4, 1, 0, 1, 2, 1, 3$

| Antall søsken | Frekvens (antall elever) |
|---------------|-------------------------|
| $0$ | $4$ |
| $1$ | $9$ |
| $2$ | $4$ |
| $3$ | $2$ |
| $4$ | $1$ |
| **Sum** | **$20$** |

Nå ser vi med en gang at de fleste elevene har $1$ søsken (typetallet), og at $4$ søsken er sjeldent.

**Relativ frekvens** er frekvensen uttrykt som andel eller prosent av totalen:

$$\\text{Relativ frekvens} = \\frac{\\text{frekvens}}{\\text{totalt antall}}$$

For «$1$ søsken»: $\\frac{9}{20} = 0{,}45 = 45\\,\\%$. Nesten halvparten av elevene har nøyaktig ett søsken!

Relativ frekvens er nyttig når du vil sammenligne grupper av ulik størrelse. Hvis en annen skole med $500$ elever også har $45\\,\\%$ med ett søsken, kan du sammenligne direkte.`,
    },

    {
      id: '8-5-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-5-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på frekvenstabeller:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-5-2-n-quiz1-q0',
            task: 'I en undersøkelse svarer $12$ av $40$ elever at de foretrekker fotball. Hva er den relative frekvensen?',
            options: [
              { id: 'a', text: '$12\\,\\%$', isCorrect: false },
              { id: 'b', text: '$30\\,\\%$', isCorrect: true },
              { id: 'c', text: '$40\\,\\%$', isCorrect: false },
              { id: 'd', text: '$3{,}3\\,\\%$', isCorrect: false },
            ],
            solution: 'Relativ frekvens $= \\frac{12}{40} = 0{,}30 = 30\\,\\%$.',
          },
          {
            id: '8-5-2-n-quiz1-q1',
            task: 'En frekvenstabell viser at verdien $5$ forekommer $7$ ganger, verdien $6$ forekommer $3$ ganger, og verdien $7$ forekommer $5$ ganger. Hvor mange observasjoner er det totalt?',
            options: [
              { id: 'a', text: '$3$', isCorrect: false },
              { id: 'b', text: '$18$', isCorrect: false },
              { id: 'c', text: '$15$', isCorrect: true },
              { id: 'd', text: '$21$', isCorrect: false },
            ],
            solution: 'Totalt antall $= 7 + 3 + 5 = 15$ observasjoner.',
          },
          {
            id: '8-5-2-n-quiz1-q2',
            task: 'Hvorfor er relativ frekvens nyttig?',
            options: [
              { id: 'a', text: 'Fordi den alltid er større enn frekvensen', isCorrect: false },
              { id: 'b', text: 'Fordi den lar oss sammenligne grupper av ulik størrelse', isCorrect: true },
              { id: 'c', text: 'Fordi den er lettere å beregne', isCorrect: false },
              { id: 'd', text: 'Fordi den erstatter medianen', isCorrect: false },
            ],
            solution: 'Relativ frekvens (prosent) gjør det mulig å sammenligne data fra grupper med forskjellig antall observasjoner.',
          },
        ],
      },
    },

    {
      id: '8-5-2-n-section2',
      type: 'text',
      content: `## Stolpediagram

**Stolpediagram** er det vanligste diagrammet for å vise frekvenser. Hver kategori eller verdi får en søyle, og høyden på søylen tilsvarer frekvensen.

**Slik lager du et stolpediagram**:
1. Tegn to akser: kategori på $x$-aksen, frekvens på $y$-aksen
2. Lag en søyle for hver kategori
3. Søylene skal ha **lik bredde**
4. Det skal være **mellomrom** mellom søylene
5. $y$-aksen skal starte på **$0$**

Hvorfor starte på $0$? Fordi ellers kan forskjellene overdrives visuelt. Tenk deg at to verdier er $50$ og $55$. Hvis $y$-aksen starter på $48$, ser den ene søylen ut til å være nesten tre ganger så høy som den andre -- selv om forskjellen er liten.

**Stolpediagram er best for**:
- Kategorier (favorittfag, favorittidrett)
- Diskrete tallverdier (antall søsken, terningkast)
- Sammenligning mellom grupper

Du kan også lage **doble stolpediagram** der du har to søylepar per kategori -- for eksempel gutter og jenter side om side. Dette gjør sammenligninger mellom grupper veldig tydelige.`,
    },

    {
      id: '8-5-2-n-section3',
      type: 'text',
      content: `## Sektordiagram (kakediagram)

Et **sektordiagram** viser hvordan en helhet er fordelt i deler. Hele sirkelen er $100\\,\\%$, og hvert «kakestykke» (sektor) representerer en kategori.

For å tegne et sektordiagram beregner du **vinkelen** for hver sektor:

$$\\text{Vinkel} = \\frac{\\text{frekvens}}{\\text{totalt antall}} \\cdot 360°$$

**Eksempel**: $20$ elever er spurt om favorittfrukt: eple ($8$), banan ($5$), appelsin ($4$), drue ($3$).

- Eple: $\\frac{8}{20} \\cdot 360° = 144°$
- Banan: $\\frac{5}{20} \\cdot 360° = 90°$
- Appelsin: $\\frac{4}{20} \\cdot 360° = 72°$
- Drue: $\\frac{3}{20} \\cdot 360° = 54°$

Sjekk: $144° + 90° + 72° + 54° = 360°$ -- stemmer!

**Sektordiagram er best for**:
- Å vise andeler og prosentfordelinger
- Maks $5$--$6$ kategorier (flere gjør diagrammet uoversiktlig)
- Når du vil framheve at delene utgjør en helhet

**Ikke bruk sektordiagram når**:
- Du har mange kategorier
- Du vil sammenligne nøyaktige verdier (stolpediagram er bedre)
- Kategoriene har nesten lik størrelse (vanskelig å se forskjell)`,
    },

    {
      id: '8-5-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-5-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på stolpediagram og sektordiagram:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-5-2-n-quiz2-q0',
            task: 'Hvorfor bør $y$-aksen i et stolpediagram starte på $0$?',
            options: [
              { id: 'a', text: 'Fordi det er en matematisk regel', isCorrect: false },
              { id: 'b', text: 'Fordi det sparer plass', isCorrect: false },
              { id: 'c', text: 'For å unngå at forskjellene mellom søylene overdrives visuelt', isCorrect: true },
              { id: 'd', text: 'Fordi negative verdier ikke finnes', isCorrect: false },
            ],
            solution: 'Når $y$-aksen ikke starter på $0$, kan små forskjeller se mye større ut enn de er. Det kan villede leseren.',
          },
          {
            id: '8-5-2-n-quiz2-q1',
            task: 'I et sektordiagram utgjør en kategori $25\\,\\%$ av totalen. Hvor stor vinkel har sektoren?',
            options: [
              { id: 'a', text: '$25°$', isCorrect: false },
              { id: 'b', text: '$90°$', isCorrect: true },
              { id: 'c', text: '$50°$', isCorrect: false },
              { id: 'd', text: '$180°$', isCorrect: false },
            ],
            solution: '$25\\,\\%$ av $360° = 0{,}25 \\cdot 360° = 90°$. En kvart sirkel.',
          },
          {
            id: '8-5-2-n-quiz2-q2',
            task: 'Du vil sammenligne favorittfag mellom gutter og jenter. Hvilken diagramtype er best?',
            options: [
              { id: 'a', text: 'Sektordiagram', isCorrect: false },
              { id: 'b', text: 'Dobbelt stolpediagram', isCorrect: true },
              { id: 'c', text: 'Linjediagram', isCorrect: false },
              { id: 'd', text: 'Tabell', isCorrect: false },
            ],
            solution: 'Et dobbelt stolpediagram lar deg plassere søylene for gutter og jenter ved siden av hverandre for hver kategori, slik at sammenligningen blir visuelt tydelig.',
          },
        ],
      },
    },

    {
      id: '8-5-2-n-section4',
      type: 'text',
      content: `## Linjediagram

Et **linjediagram** brukes for å vise hvordan noe **endrer seg over tid**. Datapunktene kobles med linjer, slik at trender og svingninger blir tydelige.

**Eksempel**: Temperaturen på en vinterdag:

| Klokkeslett | $06{:}00$ | $09{:}00$ | $12{:}00$ | $15{:}00$ | $18{:}00$ | $21{:}00$ |
|-------------|---------|---------|---------|---------|---------|---------|
| Temperatur ($°$C) | $-5$ | $-2$ | $3$ | $2$ | $-1$ | $-4$ |

I linjediagrammet ser du at temperaturen stiger gjennom formiddagen, når toppen rundt kl. $12$, og synker igjen. Trenden er tydelig!

**Linjediagram er best for**:
- Data som endrer seg over tid (tidsserier)
- Å vise trender, økning, nedgang eller svingninger
- Å sammenligne utviklingen for flere grupper (bruk flere linjer med ulike farger)

**Ikke bruk linjediagram når**:
- $x$-aksen viser kategorier uten naturlig rekkefølge (det gir ingen mening å tegne en linje mellom «matte» og «norsk»)
- Du vil vise frekvenser av enkeltverdier (bruk stolpediagram)

### Tips for gode diagrammer

Uansett type, bør et godt diagram ha:
- **Tittel** som forteller hva diagrammet viser
- **Akseetiketter** (hva måler $x$- og $y$-aksen?)
- **Enheter** (cm, kr, antall elever)
- **Lesbar skala** på aksene`,
    },

    {
      id: '8-5-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-5-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på linjediagram og valg av diagramtype:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-5-2-n-quiz3-q0',
            task: 'Når er linjediagram det beste valget?',
            options: [
              { id: 'a', text: 'Når du vil vise andeler av en helhet', isCorrect: false },
              { id: 'b', text: 'Når du vil sammenligne kategorier', isCorrect: false },
              { id: 'c', text: 'Når du vil vise utvikling over tid', isCorrect: true },
              { id: 'd', text: 'Når du har kategoridata', isCorrect: false },
            ],
            solution: 'Linjediagram er perfekte for tidsserier -- data som endrer seg over tid, for eksempel temperatur, folketall eller aksjekurser.',
          },
          {
            id: '8-5-2-n-quiz3-q1',
            task: 'Du vil vise hvordan budsjettet ditt er fordelt på mat, klær, transport og fritid. Hvilken diagramtype velger du?',
            options: [
              { id: 'a', text: 'Linjediagram', isCorrect: false },
              { id: 'b', text: 'Sektordiagram', isCorrect: true },
              { id: 'c', text: 'Stolpediagram', isCorrect: false },
              { id: 'd', text: 'Frekvenstabell', isCorrect: false },
            ],
            solution: 'Et sektordiagram viser andeler av en helhet -- perfekt for å vise hvordan budsjettet er fordelt på ulike poster.',
          },
          {
            id: '8-5-2-n-quiz3-q2',
            task: 'Hva bør et godt diagram alltid ha?',
            options: [
              { id: 'a', text: 'Farger og dekorasjoner', isCorrect: false },
              { id: 'b', text: 'Tittel, akseetiketter og enheter', isCorrect: true },
              { id: 'c', text: 'Minst $10$ datapunkter', isCorrect: false },
              { id: 'd', text: 'Både stolper og linjer', isCorrect: false },
            ],
            solution: 'Et godt diagram trenger tittel (hva det viser), akseetiketter (hva aksene måler) og enheter (cm, kr, osv.) for å være forståelig.',
          },
        ],
      },
    },

    {
      id: '8-5-2-n-summary',
      type: 'text',
      content: `## Oppsummering

**Frekvenstabell** organiserer data ved å telle hvor mange ganger hver verdi forekommer. **Relativ frekvens** er andelen uttrykt som prosent: $\\frac{\\text{frekvens}}{\\text{totalt antall}} \\cdot 100\\,\\%$.

| Diagramtype | Best for | Eksempel |
|-------------|----------|----------|
| **Stolpediagram** | Sammenligne kategorier | Favorittfag i klassen |
| **Sektordiagram** | Andeler av en helhet | Fordeling av lommepenger |
| **Linjediagram** | Utvikling over tid | Temperatur gjennom dagen |

**Viktige regler**:
- $y$-aksen skal starte på $0$ i stolpediagram
- Søylene skal ha lik bredde med mellomrom
- Sektordiagram fungerer best med få kategorier ($5$--$6$)
- Linjediagram brukes bare når $x$-aksen har naturlig rekkefølge (oftest tid)
- Alle diagram bør ha tittel, akseetiketter og enheter`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.3 NARRATIV: Sannsynlighet - introduksjon
// ============================================================================

export const CHAPTER_8_5_3_NARRATIV: TextbookChapter = {
  id: '8-5-3-narrativ',
  courseId: '8',
  chapterNumber: '5.3',
  title: 'Sannsynlighet -- introduksjon',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av grunnleggende sannsynlighet -- terningkast, myntkast, gunstige og mulige utfall, og hvordan vi setter tall på usikkerhet.',
  estimatedMinutes: 30,
  competenceGoals: [
    'bruke programmering til å utforske sannsyn',
  ],
  linkedChapterId: '8-5-3',
  content: [
    {
      id: '8-5-3-n-intro',
      type: 'text',
      content: `## Kan vi måle usikkerhet?

Livet er fullt av ting vi ikke vet sikkert. Vil det regne i morgen? Kommer du til å kaste en sekser? Vinner laget ditt neste kamp? Vi snakker ofte om sjanse og flaks, men visste du at matematikken har presise verktøy for å *måle* usikkerhet?

**Sannsynlighet** er et tall som forteller oss hvor sannsynlig noe er. Det er et tall mellom $0$ og $1$:
- $0$ betyr **umulig** (det kan aldri skje)
- $1$ betyr **sikkert** (det vil alltid skje)
- Alt mellom $0$ og $1$ er ulike grader av usikkerhet

Vi kan også uttrykke sannsynlighet som **prosent** mellom $0\\,\\%$ og $100\\,\\%$.

For eksempel: Sannsynligheten for å få krone med en rettferdig mynt er $\\frac{1}{2} = 0{,}5 = 50\\,\\%$. Det betyr ikke at annethvert kast gir krone -- men over mange kast vil omtrent halvparten være krone.`,
    },

    {
      id: '8-5-3-n-section1',
      type: 'text',
      content: `## Utfall og utfallsrom

Når vi gjør et forsøk (for eksempel kaster en terning), kaller vi de mulige resultatene for **utfall**. Mengden av alle mulige utfall kalles **utfallsrommet**.

**Eksempel 1: Terningkast**
Utfallsrommet er $\\{1, 2, 3, 4, 5, 6\\}$ -- seks mulige utfall.

**Eksempel 2: Myntkast**
Utfallsrommet er $\\{\\text{krone, mynt}\\}$ -- to mulige utfall.

**Eksempel 3: Trekke et kort fra en kortstokk**
Utfallsrommet har $52$ mulige utfall (alle kortene).

En **hendelse** er noe vi er interessert i -- for eksempel «kaste en sekser» eller «trekke et hjerterkort». En hendelse er en delmengde av utfallsrommet.

Hendelsen «kaste et partall» med en terning består av utfallene $\\{2, 4, 6\\}$ -- tre av seks mulige utfall. Hendelsen «kaste et tall større enn $4$» består av $\\{5, 6\\}$ -- to av seks mulige utfall.`,
    },

    {
      id: '8-5-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '8-5-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på utfall og utfallsrom:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-5-3-n-quiz1-q0',
            task: 'Hva er utfallsrommet når du kaster en vanlig terning?',
            options: [
              { id: 'a', text: '$\\{1, 2, 3, 4, 5\\}$', isCorrect: false },
              { id: 'b', text: '$\\{1, 2, 3, 4, 5, 6\\}$', isCorrect: true },
              { id: 'c', text: '$\\{1, 6\\}$', isCorrect: false },
              { id: 'd', text: '$\\{\\text{partall, oddetall}\\}$', isCorrect: false },
            ],
            solution: 'Utfallsrommet er alle mulige utfall: $\\{1, 2, 3, 4, 5, 6\\}$. Det er $6$ mulige utfall.',
          },
          {
            id: '8-5-3-n-quiz1-q1',
            task: 'Hendelsen «kaste et tall mindre enn $3$» med en terning. Hvilke utfall hører til denne hendelsen?',
            options: [
              { id: 'a', text: '$\\{1, 2, 3\\}$', isCorrect: false },
              { id: 'b', text: '$\\{1, 2\\}$', isCorrect: true },
              { id: 'c', text: '$\\{3, 4, 5, 6\\}$', isCorrect: false },
              { id: 'd', text: '$\\{1\\}$', isCorrect: false },
            ],
            solution: 'Tall mindre enn $3$ er $1$ og $2$. Hendelsen består av utfallene $\\{1, 2\\}$.',
          },
          {
            id: '8-5-3-n-quiz1-q2',
            task: 'Sannsynligheten for en hendelse er $0$. Hva betyr det?',
            options: [
              { id: 'a', text: 'Hendelsen er veldig usannsynlig', isCorrect: false },
              { id: 'b', text: 'Hendelsen er umulig', isCorrect: true },
              { id: 'c', text: 'Hendelsen skjer sjelden', isCorrect: false },
              { id: 'd', text: 'Vi vet ikke om hendelsen skjer', isCorrect: false },
            ],
            solution: '$P = 0$ betyr at hendelsen er umulig. For eksempel er sannsynligheten for å kaste $7$ med en vanlig terning lik $0$.',
          },
        ],
      },
    },

    {
      id: '8-5-3-n-section2',
      type: 'text',
      content: `## Beregne sannsynlighet

Når alle utfall er **like sannsynlige** (som med en rettferdig terning eller mynt), kan vi beregne sannsynligheten med denne formelen:

$$P(\\text{hendelse}) = \\frac{\\text{antall gunstige utfall}}{\\text{antall mulige utfall}}$$

$P$ står for «probability» (sannsynlighet på engelsk). «Gunstige utfall» er de utfallene som gjør at hendelsen inntreffer.

**Eksempel 1**: Sannsynligheten for å kaste en sekser med en terning:
$$P(\\text{sekser}) = \\frac{1}{6} \\approx 0{,}167 = 16{,}7\\,\\%$$

Det er $1$ gunstig utfall (sekser) av $6$ mulige.

**Eksempel 2**: Sannsynligheten for å kaste et partall:
$$P(\\text{partall}) = \\frac{3}{6} = \\frac{1}{2} = 0{,}5 = 50\\,\\%$$

Det er $3$ gunstige utfall ($2, 4, 6$) av $6$ mulige.

**Eksempel 3**: En pose inneholder $4$ røde, $3$ blå og $2$ grønne kuler ($9$ totalt). Sannsynligheten for å trekke en rød kule:
$$P(\\text{rød}) = \\frac{4}{9} \\approx 0{,}44 = 44\\,\\%$$

**Viktig**: Formelen gjelder bare når alle utfall er like sannsynlige! En skjev terning eller en lastet mynt har ikke like sannsynlige utfall.`,
    },

    {
      id: '8-5-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '8-5-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på å beregne sannsynlighet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-5-3-n-quiz2-q0',
            task: 'Du kaster en terning. Hva er sannsynligheten for å få et tall større enn $4$?',
            options: [
              { id: 'a', text: '$\\frac{4}{6}$', isCorrect: false },
              { id: 'b', text: '$\\frac{1}{6}$', isCorrect: false },
              { id: 'c', text: '$\\frac{2}{6} = \\frac{1}{3}$', isCorrect: true },
              { id: 'd', text: '$\\frac{3}{6}$', isCorrect: false },
            ],
            solution: 'Tall større enn $4$ er $5$ og $6$ -- det er $2$ gunstige utfall av $6$ mulige. $P = \\frac{2}{6} = \\frac{1}{3}$.',
          },
          {
            id: '8-5-3-n-quiz2-q1',
            task: 'En pose har $5$ røde og $3$ blå kuler. Hva er sannsynligheten for å trekke en blå kule?',
            options: [
              { id: 'a', text: '$\\frac{3}{5}$', isCorrect: false },
              { id: 'b', text: '$\\frac{5}{8}$', isCorrect: false },
              { id: 'c', text: '$\\frac{3}{8}$', isCorrect: true },
              { id: 'd', text: '$\\frac{1}{3}$', isCorrect: false },
            ],
            solution: 'Det er $3$ blå kuler av totalt $5 + 3 = 8$ kuler. $P(\\text{blå}) = \\frac{3}{8}$.',
          },
          {
            id: '8-5-3-n-quiz2-q2',
            task: 'Du trekker et kort fra en standard kortstokk med $52$ kort. Hva er sannsynligheten for å trekke et hjerterkort?',
            options: [
              { id: 'a', text: '$\\frac{1}{52}$', isCorrect: false },
              { id: 'b', text: '$\\frac{13}{52} = \\frac{1}{4}$', isCorrect: true },
              { id: 'c', text: '$\\frac{4}{52}$', isCorrect: false },
              { id: 'd', text: '$\\frac{26}{52}$', isCorrect: false },
            ],
            solution: 'Det er $13$ hjerterkort i en kortstokk med $52$ kort. $P(\\text{hjerter}) = \\frac{13}{52} = \\frac{1}{4} = 25\\,\\%$.',
          },
        ],
      },
    },

    {
      id: '8-5-3-n-section3',
      type: 'text',
      content: `## Komplementærhendelsen

Noen ganger er det lettere å beregne sannsynligheten for at noe **ikke** skjer. **Komplementærhendelsen** til en hendelse $A$ er det motsatte -- alt som ikke er $A$.

$$P(\\text{ikke } A) = 1 - P(A)$$

**Eksempel 1**: Sannsynligheten for å *ikke* kaste en sekser:
$$P(\\text{ikke sekser}) = 1 - P(\\text{sekser}) = 1 - \\frac{1}{6} = \\frac{5}{6}$$

**Eksempel 2**: I en bolle med $10$ frukter er $3$ epler. Sannsynligheten for å trekke noe annet enn et eple:
$$P(\\text{ikke eple}) = 1 - \\frac{3}{10} = \\frac{7}{10}$$

Komplementregelen er spesielt nyttig når det er mange gunstige utfall for det du *ikke* vil beregne. I stedet for å telle alle de gunstige utfallene for en komplisert hendelse, kan du noen ganger enklere beregne det motsatte og trekke fra.

Legg merke til at $P(A) + P(\\text{ikke } A) = 1$ alltid. Det betyr at sannsynligheten for at noe skjer pluss sannsynligheten for at det ikke skjer, alltid summerer til $1$ ($100\\,\\%$). Det gir mening -- enten skjer det, eller så skjer det ikke!`,
    },

    {
      id: '8-5-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '8-5-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på komplementærhendelser:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-5-3-n-quiz3-q0',
            task: 'Sannsynligheten for regn i morgen er $0{,}3$. Hva er sannsynligheten for at det *ikke* regner?',
            options: [
              { id: 'a', text: '$0{,}3$', isCorrect: false },
              { id: 'b', text: '$0{,}7$', isCorrect: true },
              { id: 'c', text: '$0{,}03$', isCorrect: false },
              { id: 'd', text: '$1{,}3$', isCorrect: false },
            ],
            solution: '$P(\\text{ikke regn}) = 1 - P(\\text{regn}) = 1 - 0{,}3 = 0{,}7 = 70\\,\\%$.',
          },
          {
            id: '8-5-3-n-quiz3-q1',
            task: 'Du kaster en terning. Hva er sannsynligheten for å få et tall som IKKE er $1$?',
            options: [
              { id: 'a', text: '$\\frac{1}{6}$', isCorrect: false },
              { id: 'b', text: '$\\frac{5}{6}$', isCorrect: true },
              { id: 'c', text: '$\\frac{4}{6}$', isCorrect: false },
              { id: 'd', text: '$\\frac{6}{6}$', isCorrect: false },
            ],
            solution: '$P(\\text{ikke 1}) = 1 - P(1) = 1 - \\frac{1}{6} = \\frac{5}{6}$.',
          },
          {
            id: '8-5-3-n-quiz3-q2',
            task: 'Hva er alltid sant om $P(A) + P(\\text{ikke } A)$?',
            options: [
              { id: 'a', text: 'Det er alltid større enn $1$', isCorrect: false },
              { id: 'b', text: 'Det er alltid lik $0$', isCorrect: false },
              { id: 'c', text: 'Det er alltid lik $1$', isCorrect: true },
              { id: 'd', text: 'Det avhenger av hendelsen', isCorrect: false },
            ],
            solution: 'Enten skjer hendelsen eller så gjør den det ikke. Disse to mulighetene dekker alt, så de summerer alltid til $1$ ($100\\,\\%$).',
          },
        ],
      },
    },

    {
      id: '8-5-3-n-section4',
      type: 'text',
      content: `## Eksperiment og relativ frekvens

Noen ganger vet vi ikke den teoretiske sannsynligheten. Hva er sannsynligheten for at en brødskive lander med smørsiden ned? For at du treffer blink i dart? Her finnes det ingen formel -- men vi kan **eksperimentere**.

Hvis du gjør et forsøk mange ganger, kan du **estimere** sannsynligheten ved hjelp av **relativ frekvens**:

$$\\text{Relativ frekvens} = \\frac{\\text{antall ganger hendelsen inntreffer}}{\\text{totalt antall forsøk}}$$

**Eksempel**: Du kaster en mynt $50$ ganger og får krone $28$ ganger.

$$\\text{Relativ frekvens for krone} = \\frac{28}{50} = 0{,}56 = 56\\,\\%$$

Det er litt mer enn $50\\,\\%$, men det er normalt med så få forsøk. Jo flere ganger du kaster, jo nærmere vil den relative frekvensen komme den sanne sannsynligheten ($50\\,\\%$). Med $1000$ kast ville du sannsynligvis fått et resultat nærmere $50\\,\\%$.

Dette prinsippet kalles **de store talls lov**: med mange forsøk nærmer den relative frekvensen seg den sanne sannsynligheten.

Du kan også bruke programmering for å simulere mange forsøk raskt! En datamaskin kan «kaste en terning» tusenvis av ganger på under et sekund og beregne den relative frekvensen.`,
    },

    {
      id: '8-5-3-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '8-5-3-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg selv på relativ frekvens:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '8-5-3-n-quiz4-q0',
            task: 'Du kaster en terning $60$ ganger og får sekser $8$ ganger. Hva er den relative frekvensen for sekser?',
            options: [
              { id: 'a', text: '$\\frac{1}{6}$', isCorrect: false },
              { id: 'b', text: '$\\frac{8}{60} \\approx 13{,}3\\,\\%$', isCorrect: true },
              { id: 'c', text: '$8\\,\\%$', isCorrect: false },
              { id: 'd', text: '$\\frac{60}{8} = 7{,}5$', isCorrect: false },
            ],
            solution: 'Relativ frekvens $= \\frac{8}{60} = \\frac{2}{15} \\approx 0{,}133 = 13{,}3\\,\\%$. Den teoretiske sannsynligheten er $\\frac{1}{6} \\approx 16{,}7\\,\\%$, så avviket er normalt med bare $60$ forsøk.',
          },
          {
            id: '8-5-3-n-quiz4-q1',
            task: 'Hva skjer med den relative frekvensen når vi gjør flere og flere forsøk?',
            options: [
              { id: 'a', text: 'Den blir alltid nøyaktig lik den sanne sannsynligheten', isCorrect: false },
              { id: 'b', text: 'Den nærmer seg den sanne sannsynligheten', isCorrect: true },
              { id: 'c', text: 'Den øker alltid', isCorrect: false },
              { id: 'd', text: 'Den svinger mer og mer', isCorrect: false },
            ],
            solution: 'De store talls lov sier at den relative frekvensen nærmer seg den sanne sannsynligheten når antall forsøk øker. Med få forsøk kan den avvike mye, men med mange forsøk stabiliserer den seg.',
          },
        ],
      },
    },

    {
      id: '8-5-3-n-summary',
      type: 'text',
      content: `## Oppsummering

**Sannsynlighet** er et tall mellom $0$ (umulig) og $1$ (sikkert) som beskriver hvor sannsynlig en hendelse er.

**Utfallsrommet** er mengden av alle mulige utfall. En **hendelse** er en delmengde av utfallsrommet.

Når alle utfall er like sannsynlige:
$$P(\\text{hendelse}) = \\frac{\\text{antall gunstige utfall}}{\\text{antall mulige utfall}}$$

**Komplementregelen**:
$$P(\\text{ikke } A) = 1 - P(A)$$

**Relativ frekvens** estimerer sannsynligheten basert på eksperimenter:
$$\\text{Relativ frekvens} = \\frac{\\text{antall ganger hendelsen inntreffer}}{\\text{totalt antall forsøk}}$$

**De store talls lov**: Jo flere forsøk du gjør, jo nærmere kommer den relative frekvensen den sanne sannsynligheten.

Sannsynlighet gir oss et presist språk for å snakke om usikkerhet -- fra terningkast til værmeldinger!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_8_NARRATIV_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_8_5_1_NARRATIV,
  CHAPTER_8_5_2_NARRATIV,
  CHAPTER_8_5_3_NARRATIV,
];
