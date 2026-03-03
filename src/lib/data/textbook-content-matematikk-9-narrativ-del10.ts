/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 9. klasse - Narrativ versjon Del 10
 *
 * Kapittel 10.1: Spredningsmål i praksis
 * Kapittel 10.2: Kritisk vurdering av statistikk fra medier
 * Kapittel 10.3: Data, manipulering og synspunkter
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 10.1 NARRATIV: Spredningsmål i praksis
// ============================================================================

export const CHAPTER_9_10_1_NARRATIV: TextbookChapter = {
  id: '9-10-1-narrativ',
  courseId: '9',
  chapterNumber: '10.1',
  title: 'Spredningsmål i praksis',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av spredningsmål -- kvartiler, interkvartilbredde og boksplott -- der vi utforsker hvorfor gjennomsnittet alene ikke forteller hele historien.',
  estimatedMinutes: 35,
  competenceGoals: [
    'bruke sentralmål og spreiingsmål til å analysere og samanlikne datasett',
  ],
  linkedChapterId: '9-10-1',
  content: [
    {
      id: '9-10-1-n-intro',
      type: 'text',
      content: `## Gjennomsnittet lyver (nesten)

Tenk deg to fotballag. Begge har gjennomsnittlig $1{,}5$ mål per kamp i sesongen. Men det ene laget scorer konsekvent $1$ eller $2$ mål hver kamp, mens det andre laget veksler mellom $0$ og $6$ mål. De har likt gjennomsnitt, men opplevelsen av å se kampene er vilt forskjellig!

Det er dette **spredningsmål** handler om. Mens **sentralmål** (gjennomsnitt, median, typetall) forteller oss hvor «midten» av dataene ligger, forteller spredningsmål oss hvor **spredt** dataene er rundt midten. Er verdiene samlet tett sammen, eller er de vidt spredt?

I dette kapittelet lærer vi om tre viktige verktøy:
- **Kvartiler** -- som deler dataene i fire like store deler
- **Interkvartilbredde (IQR)** -- som måler spredningen til de midterste 50 %
- **Boksplott** -- som gir en visuell oversikt over hele fordelingen`,
    },

    {
      id: '9-10-1-n-section1',
      type: 'text',
      content: `## Kvartiler -- å dele dataene i fire

Tenk deg at du sorterer alle elevene i klassen etter høyde, fra kortest til høyest. **Medianen** deler gruppen i to halvdeler. Men vi kan dele videre: medianen av den nedre halvdelen gir **første kvartil** ($Q_1$), og medianen av den øvre halvdelen gir **tredje kvartil** ($Q_3$).

Nå har vi fire grupper:
- De 25 % laveste verdiene (under $Q_1$)
- De neste 25 % (mellom $Q_1$ og medianen)
- De neste 25 % (mellom medianen og $Q_3$)
- De 25 % høyeste verdiene (over $Q_3$)

**Slik finner du kvartilene:**
1. Sorter dataene fra minst til størst.
2. Finn medianen ($Q_2$) -- den deler datasettet i to halvdeler.
3. Finn medianen av den nedre halvdelen ($Q_1$).
4. Finn medianen av den øvre halvdelen ($Q_3$).

Viktig: Hvis medianen er ett av datapunktene (odde antall verdier), tas den **ikke** med i noen av halvdelene.

Et eksempel: Resultatene til $11$ elever på en prøve (allerede sortert): $7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18$. Medianen ($Q_2$) er verdi nummer $6$: $Q_2 = 12$. Nedre halvdel er $7, 8, 9, 10, 11$ med median $Q_1 = 9$. Øvre halvdel er $13, 14, 15, 16, 18$ med median $Q_3 = 15$.`,
    },

    {
      id: '9-10-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-10-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på kvartiler:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-10-1-n-quiz1-q0',
            task: 'Resultatene til $9$ elever (sortert): $14, 18, 20, 22, 24, 25, 27, 28, 30$. Hva er $Q_1$?',
            options: [
              { id: 'a', text: '$18$', isCorrect: false },
              { id: 'b', text: '$19$', isCorrect: true },
              { id: 'c', text: '$20$', isCorrect: false },
              { id: 'd', text: '$22$', isCorrect: false },
            ],
            solution: 'Medianen er verdi $5$: $Q_2 = 24$. Nedre halvdel: $14, 18, 20, 22$. $Q_1 = \\frac{18 + 20}{2} = 19$.',
          },
          {
            id: '9-10-1-n-quiz1-q1',
            task: 'Et datasett har $Q_1 = 12$ og $Q_3 = 28$. Hva er IQR?',
            options: [
              { id: 'a', text: '$40$', isCorrect: false },
              { id: 'b', text: '$20$', isCorrect: false },
              { id: 'c', text: '$16$', isCorrect: true },
              { id: 'd', text: '$14$', isCorrect: false },
            ],
            solution: '$\\text{IQR} = Q_3 - Q_1 = 28 - 12 = 16$. IQR måler spredningen til de midterste $50\\%$ av dataene.',
          },
          {
            id: '9-10-1-n-quiz1-q2',
            task: 'Hva forteller IQR oss?',
            options: [
              { id: 'a', text: 'Forskjellen mellom største og minste verdi', isCorrect: false },
              { id: 'b', text: 'Gjennomsnittet av dataene', isCorrect: false },
              { id: 'c', text: 'Spredningen til de midterste $50\\%$ av dataene', isCorrect: true },
              { id: 'd', text: 'Antall datapunkter', isCorrect: false },
            ],
            solution: 'IQR $= Q_3 - Q_1$ måler spredningen til de midterste $50\\%$ av dataene. Det er et robust spredningsmål som ikke påvirkes av ekstremverdier.',
          },
        ],
      },
    },

    {
      id: '9-10-1-n-section2',
      type: 'text',
      content: `## Boksplott og uteliggere

Et **boksplott** er en grafisk fremstilling som viser fem nøkkeltall -- den såkalte **femtallsoversikten**: minimum, $Q_1$, median ($Q_2$), $Q_3$ og maksimum.

Selve «boksen» strekker seg fra $Q_1$ til $Q_3$, med en linje i midten for medianen. «Whiskers» (streker) strekker seg ut til minimum og maksimum. Boksplott er fantastiske for å sammenligne to datasett visuelt -- du kan med ett blikk se hvilken gruppe som har størst spredning og om en gruppe har et høyere sentralpunkt.

Men hva med verdier som er veldig langt unna resten? De kalles **uteliggere**, og de markeres som enkeltpunkter utenfor whiskers. En verdi er en uteligger hvis den ligger mer enn $1{,}5 \\cdot \\text{IQR}$ utenfor $Q_1$ eller $Q_3$:

- Nedre grense: $Q_1 - 1{,}5 \\cdot \\text{IQR}$
- Øvre grense: $Q_3 + 1{,}5 \\cdot \\text{IQR}$

Verdier utenfor disse grensene er uteliggere. Whiskers strekker seg da bare til den siste verdien som *ikke* er en uteligger.

Et eksempel: Antall sjokoladebiter $13$ elever spiste i en uke: $2, 3, 5, 6, 7, 7, 8, 9, 10, 11, 12, 14, 25$. Her er $Q_1 = 5{,}5$, $Q_2 = 8$, $Q_3 = 11{,}5$ og $\\text{IQR} = 6$. Den øvre grensen er $11{,}5 + 9 = 20{,}5$. Verdien $25$ er over denne grensen og er altså en **uteligger** -- kanskje noen hadde en veldig god (eller dårlig?) sjokoladeuke!`,
    },

    {
      id: '9-10-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-10-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på boksplott og uteliggere:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-10-1-n-quiz2-q0',
            task: 'Leksetimer for $12$ elever: $3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 12, 20$. Er $20$ en uteligger?',
            options: [
              { id: 'a', text: 'Ja, $20$ er over den øvre grensen', isCorrect: true },
              { id: 'b', text: 'Nei, $20$ er innenfor grensene', isCorrect: false },
              { id: 'c', text: 'Vi kan ikke avgjøre det uten mer informasjon', isCorrect: false },
              { id: 'd', text: 'Ja, men bare hvis gjennomsnittet er under $10$', isCorrect: false },
            ],
            solution: '$Q_1 = 5{,}5$, $Q_3 = 10{,}5$, $\\text{IQR} = 5$. Øvre grense: $10{,}5 + 7{,}5 = 18$. Verdien $20 > 18$, så $20$ er en uteligger.',
          },
          {
            id: '9-10-1-n-quiz2-q1',
            task: 'To grupper har begge median $15$. Gruppe A har $\\text{IQR} = 6$ og Gruppe B har $\\text{IQR} = 14$. Hva kan vi si?',
            options: [
              { id: 'a', text: 'Gruppe A har høyere gjennomsnitt', isCorrect: false },
              { id: 'b', text: 'Gruppe B har mye større spredning i resultatene', isCorrect: true },
              { id: 'c', text: 'Gruppene er helt like', isCorrect: false },
              { id: 'd', text: 'Gruppe B har lavere resultater', isCorrect: false },
            ],
            solution: 'Selv om begge har same median, er spredningen i Gruppe B ($\\text{IQR} = 14$) mer enn dobbelt så stor som i Gruppe A ($\\text{IQR} = 6$). Det er mye større forskjeller mellom elevene i Gruppe B.',
          },
          {
            id: '9-10-1-n-quiz2-q2',
            task: 'Hvorfor er IQR et bedre spredningsmål enn variasjonsbredden (maks $-$ min) når det finnes uteliggere?',
            options: [
              { id: 'a', text: 'Fordi IQR alltid er større', isCorrect: false },
              { id: 'b', text: 'Fordi IQR er lettere å beregne', isCorrect: false },
              { id: 'c', text: 'Fordi IQR ikke påvirkes av ekstremverdier', isCorrect: true },
              { id: 'd', text: 'Fordi IQR bruker alle datapunktene', isCorrect: false },
            ],
            solution: 'IQR måler bare spredningen til de midterste $50\\%$ og ignorerer de mest ekstreme verdiene. Variasjonsbredden kan bli veldig stor på grunn av én eneste uteligger, og gir da et misvisende bilde.',
          },
        ],
      },
    },

    {
      id: '9-10-1-n-section3',
      type: 'text',
      content: `## Standardavvik -- den gjennomsnittlige avstanden fra gjennomsnittet

Mens IQR bare ser på de midterste $50\\%$, finnes det et spredningsmål som tar hensyn til **alle** datapunktene: **standardavviket**. Det måler den gjennomsnittlige avstanden fra gjennomsnittet.

Formelen ser litt skremmende ut, men ideen er enkel:

$$s = \\sqrt{\\frac{\\sum_{i=1}^{n} (x_i - \\bar{x})^2}{n - 1}}$$

Steg for steg:
1. Finn gjennomsnittet $\\bar{x}$.
2. For hvert datapunkt: finn avviket fra gjennomsnittet ($x_i - \\bar{x}$).
3. Kvadrer hvert avvik (for å unngå at positive og negative avvik nuller hverandre ut).
4. Finn gjennomsnittet av de kvadrerte avvikene (del på $n - 1$).
5. Ta kvadratroten.

Et eksempel: Fem venner har $12, 15, 18, 20, 25$ apper. Gjennomsnittet er $\\bar{x} = 18$. Kvadrerte avvik: $36 + 9 + 0 + 4 + 49 = 98$. Standardavvik: $s = \\sqrt{\\frac{98}{4}} = \\sqrt{24{,}5} \\approx 4{,}95$. Verdiene avviker altså i gjennomsnitt ca. $5$ apper fra gjennomsnittet.

En viktig ting: standardavviket er **følsomt for uteliggere**, akkurat som gjennomsnittet. Én ekstremt høy eller lav verdi kan blåse opp standardavviket dramatisk. Derfor er median og IQR ofte bedre valg for skjeve datasett.`,
    },

    {
      id: '9-10-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-10-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på standardavvik:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-10-1-n-quiz3-q0',
            task: 'Datasettet $4, 7, 8, 10, 11$ har gjennomsnitt $8$. Hva er standardavviket?',
            options: [
              { id: 'a', text: '$s \\approx 2{,}74$', isCorrect: true },
              { id: 'b', text: '$s \\approx 7{,}50$', isCorrect: false },
              { id: 'c', text: '$s \\approx 1{,}87$', isCorrect: false },
              { id: 'd', text: '$s \\approx 6{,}00$', isCorrect: false },
            ],
            solution: 'Kvadrerte avvik: $16 + 1 + 0 + 4 + 9 = 30$. $s = \\sqrt{\\frac{30}{4}} = \\sqrt{7{,}5} \\approx 2{,}74$.',
          },
          {
            id: '9-10-1-n-quiz3-q1',
            task: 'Fravær for $10$ elever: $1, 2, 3, 3, 4, 5, 6, 8, 10, 35$. Gjennomsnitt er $7{,}7$ og standardavvik ca. $10{,}0$. Uten uteliggeren $35$ er gjennomsnitt $4{,}7$ og standardavvik ca. $2{,}9$. Hva forteller dette?',
            options: [
              { id: 'a', text: 'Uteliggere har liten påvirkning på statistikken', isCorrect: false },
              { id: 'b', text: 'Én uteligger kan påvirke gjennomsnitt og standardavvik dramatisk', isCorrect: true },
              { id: 'c', text: 'Standardavviket er alltid ca. $10$', isCorrect: false },
              { id: 'd', text: 'Medianen påvirkes like mye som gjennomsnittet', isCorrect: false },
            ],
            solution: 'Uteliggeren $35$ drar gjennomsnittet fra $4{,}7$ til $7{,}7$ (over $60\\%$ økning) og tredobler standardavviket fra ca. $2{,}9$ til ca. $10{,}0$. Én enkelt verdi endrer hele bildet!',
          },
        ],
      },
    },

    {
      id: '9-10-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Sentralmål alene forteller ikke hele historien -- vi trenger spredningsmål for å forstå hvor spredt dataene er.

| Begrep | Hva det måler | Robust mot uteliggere? |
|--------|---------------|----------------------|
| Variasjonsbredde (maks $-$ min) | Total spredning | Nei |
| IQR ($Q_3 - Q_1$) | Spredning for midterste $50\\%$ | Ja |
| Standardavvik ($s$) | Gjennomsnittlig avvik fra gjennomsnittet | Nei |

- **Kvartiler** deler dataene i fire like store deler: $Q_1$ (25 %), $Q_2$ = median (50 %), $Q_3$ (75 %)
- **Boksplott** viser femtallsoversikten visuelt og markerer uteliggere
- **Uteliggere** er verdier mer enn $1{,}5 \\cdot \\text{IQR}$ fra $Q_1$ eller $Q_3$
- Velg IQR/median for skjeve data med uteliggere, og standardavvik/gjennomsnitt for symmetriske data`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.2 NARRATIV: Kritisk vurdering av statistikk fra medier
// ============================================================================

export const CHAPTER_9_10_2_NARRATIV: TextbookChapter = {
  id: '9-10-2-narrativ',
  courseId: '9',
  chapterNumber: '10.2',
  title: 'Kritisk vurdering av statistikk fra medier',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av hvordan statistikk kan villede oss -- fra avkortede akser og cherry-picking til forveksling av korrelasjon og kausalitet.',
  estimatedMinutes: 30,
  competenceGoals: [
    'vurdere og drøfte om statistiske framstillingar i media og samfunn er relevante og pålitelege',
  ],
  linkedChapterId: '9-10-2',
  content: [
    {
      id: '9-10-2-n-intro',
      type: 'text',
      content: `## Tall som villeder

«Statistikk kan bevise hva som helst -- inkludert det motsatte.» Dette litt sarkastiske ordtaket har et snev av sannhet. Vi møter statistikk overalt -- i nyhetene, i reklame, i politiske debatter, i sosiale medier. Tall og diagrammer kan virke overbevisende og objektive. Men de kan også villede oss, bevisst eller ubevisst.

Målet med dette kapittelet er ikke at du skal slutte å stole på tall. Tvert imot -- målet er at du skal bli en **kritisk leser** som stiller de rette spørsmålene. Vi skal se på fire vanlige feller:

1. **Villedende diagrammer** -- når grafikken overdriver eller skjuler forskjeller
2. **Cherry-picking** -- når man bare viser data som passer
3. **Korrelasjon vs. kausalitet** -- når man forveksler sammenheng med årsak
4. **Skjulte variabler** -- når en tredje faktor forklarer en tilsynelatende sammenheng`,
    },

    {
      id: '9-10-2-n-section1',
      type: 'text',
      content: `## Villedende diagrammer -- når øynene lurer oss

Det vanligste trikset er den **avkortede y-aksen**. Tenk deg et søylediagram over skoleresultater: Kommune A har $4{,}2$ og Kommune B har $4{,}5$. Hvis y-aksen starter på $0$, ser søylene nesten like høye ut -- forskjellen er jo bare $0{,}3$ poeng ($7\\%$). Men hvis y-aksen starter på $4{,}0$, ser søylen for Kommune B plutselig ut til å være nesten **dobbelt så høy** som for Kommune A!

Andre triks inkluderer:
- **3D-effekter** som gjør det vanskelig å lese nøyaktige verdier
- **Ikonstørrelser** som skalerer i to dimensjoner (areal) i stedet for én (høyde), slik at forskjellen overdramatiseres
- **Manglende kontekst** -- absolutte tall uten befolkningsstørrelse, eller prosenter uten å oppgi basistallet

Det betyr ikke at en avkortet akse alltid er «juks». Noen ganger er det nødvendig for å vise detaljer i data som ellers ville se ut som en flat linje. Men det bør alltid markeres tydelig, for eksempel med en sikk-sakk-linje nederst.

**Tommelfingerregel:** Se alltid på **tallene**, ikke bare figuren. Spør deg selv: «Hvor stor er den faktiske forskjellen i prosent?»`,
    },

    {
      id: '9-10-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-10-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på villedende diagrammer:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-10-2-n-quiz1-q0',
            task: 'Et treningssenter viser et søylediagram over medlemstall: $500$ (2023), $520$ (2024), $545$ (2025). Y-aksen starter på $480$. Hva er den reelle økningen?',
            options: [
              { id: 'a', text: 'Over $100\\%$ -- antallet er mer enn doblet', isCorrect: false },
              { id: 'b', text: 'Ca. $9\\%$ over to år', isCorrect: true },
              { id: 'c', text: 'Ca. $50\\%$ over to år', isCorrect: false },
              { id: 'd', text: 'Nøyaktig $45\\%$', isCorrect: false },
            ],
            solution: 'Økningen er fra $500$ til $545$, altså $45$ medlemmer eller $\\frac{45}{500} = 9\\%$ over to år. Diagrammet med avkortet akse overdramatiserer dette kraftig.',
          },
          {
            id: '9-10-2-n-quiz1-q1',
            task: 'Hvordan kan du enklest avsløre et villedende diagram?',
            options: [
              { id: 'a', text: 'Se om diagrammet er i farger', isCorrect: false },
              { id: 'b', text: 'Sjekk om y-aksen starter på $0$ og se på de faktiske tallverdiene', isCorrect: true },
              { id: 'c', text: 'Tell antall søyler', isCorrect: false },
              { id: 'd', text: 'Se om diagrammet har tittel', isCorrect: false },
            ],
            solution: 'Det viktigste er å sjekke om aksene starter på $0$ og å se på de faktiske tallene. Da kan du beregne den reelle forskjellen i prosent og sammenligne med det visuelle inntrykket.',
          },
        ],
      },
    },

    {
      id: '9-10-2-n-section2',
      type: 'text',
      content: `## Cherry-picking -- å plukke rosinen i pølsa

**Cherry-picking** betyr å velge ut bare de dataene som støtter det man vil vise, og ignorere resten. Det er som om du bare poster de fineste feriebildene og gir inntrykk av at hele ferien var perfekt.

Her er et klassisk eksempel: En politiker sier «Kriminaliteten har økt med $20\\%$ de siste to årene!» Tallene stemmer -- det gikk fra $1000$ til $1200$ lovbrudd. Men ser vi på de siste $10$ årene, har kriminaliteten faktisk **sunket** fra $1800$ til $1200$ -- en nedgang på $33\\%$. Politikeren har plukket ut akkurat den korte perioden som viser oppgang i en ellers lang nedadgående trend.

Et annet eksempel: Aksjespekulanter som viser kursutviklingen bare de siste tre dagene (oppgang), når aksjen har falt $30\\%$ det siste året.

**Hvordan avsløre cherry-picking:**
- Spør: «Hva viser hele tidsperioden?»
- Spør: «Er det andre data som er utelatt?»
- Se etter om start- og sluttpunkt i en tidsserie er valgt strategisk
- Vær spesielt skeptisk til korte tidsutsnitt som brukes til å trekke store konklusjoner`,
    },

    {
      id: '9-10-2-n-section3',
      type: 'text',
      content: `## Korrelasjon vs. kausalitet -- den store feilslutningen

To ting **korrelerer** (samvarierer) når de har en tendens til å endre seg sammen. Men korrelasjon betyr **ikke** at den ene *forårsaker* den andre. Dette er kanskje den vanligste feilslutningen i statistikk.

Klassisk eksempel: Iskremssalg og drukningsulykker korrelerer positivt -- begge øker om sommeren. Betyr det at iskrem forårsaker drukning? Selvfølgelig ikke! Den **skjulte variabelen** er **varmt vær** -- folk spiser mer iskrem OG bader mer når det er varmt.

Når to ting $A$ og $B$ korrelerer, er det tre mulige forklaringer:
1. $A$ forårsaker $B$ (kausalitet)
2. $B$ forårsaker $A$ (omvendt kausalitet)
3. En **skjult variabel** $C$ forårsaker begge deler

Noen ganger er det bare ren tilfeldighet -- en **tullkorrelasjon**. Antall filmer Nicolas Cage spiller i per år korrelerer med antall drukningsulykker i svømmebasseng. Ingen årsakssammenheng -- bare tilfeldige tallserier som tilfeldigvis beveger seg i takt.

For å **bevise** kausalitet trenger man et **kontrollert eksperiment**: tilfeldig dele i to grupper, endre bare én faktor, og se om det gir forskjellig resultat. Røyking og lungekreft er kausalitet, bekreftet gjennom årtier med forskning.`,
    },

    {
      id: '9-10-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-10-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på korrelasjon og kausalitet:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-10-2-n-quiz2-q0',
            task: '«Jo flere brannbiler som rykker ut, desto større er brannskadene.» Hva er den riktige tolkningen?',
            options: [
              { id: 'a', text: 'Brannbiler forårsaker brannskader', isCorrect: false },
              { id: 'b', text: 'Korrelasjon -- den skjulte variabelen er brannens størrelse', isCorrect: true },
              { id: 'c', text: 'Brannskader forårsaker brannbiler', isCorrect: false },
              { id: 'd', text: 'Tullkorrelasjon uten sammenheng', isCorrect: false },
            ],
            solution: 'Brannbilene forårsaker ikke skadene. Den skjulte variabelen er brannens størrelse: store branner gir både mer skade OG krever flere brannbiler.',
          },
          {
            id: '9-10-2-n-quiz2-q1',
            task: '«Land med høyere sjokoladeforbruk har flere nobelprisvinnere.» Hva er den mest sannsynlige forklaringen?',
            options: [
              { id: 'a', text: 'Sjokolade gjør deg smartere (kausalitet)', isCorrect: false },
              { id: 'b', text: 'Nobelprisvinnere spiser mye sjokolade (omvendt kausalitet)', isCorrect: false },
              { id: 'c', text: 'Den skjulte variabelen er BNP per innbygger -- rike land har både mer sjokolade og bedre forskning', isCorrect: true },
              { id: 'd', text: 'Det er ren tilfeldighet', isCorrect: false },
            ],
            solution: 'Rike land har både høyere sjokoladeforbruk og bedre forskningsinstitusjoner. BNP per innbygger er den skjulte variabelen som driver begge deler.',
          },
          {
            id: '9-10-2-n-quiz2-q2',
            task: 'En avis skriver: «Elever som drikker energidrikk daglig har $30\\%$ lavere karakterer.» Betyr dette at energidrikk gjør deg dummere?',
            options: [
              { id: 'a', text: 'Ja, tallene er klare', isCorrect: false },
              { id: 'b', text: 'Nei, det viser korrelasjon, ikke kausalitet -- det kan finnes skjulte variabler som søvnmønster og motivasjon', isCorrect: true },
              { id: 'c', text: 'Ja, hvis undersøkelsen har mer enn $100$ deltakere', isCorrect: false },
              { id: 'd', text: 'Nei, fordi energidrikk er sunt', isCorrect: false },
            ],
            solution: 'Undersøkelsen viser korrelasjon, ikke kausalitet. Skjulte variabler som søvnmønster, generell livsstil og motivasjon kan forklare sammenhengen. For å bevise kausalitet ville man trenge et kontrollert eksperiment.',
          },
        ],
      },
    },

    {
      id: '9-10-2-n-section4',
      type: 'text',
      content: `## Fire spørsmål du alltid bør stille

Neste gang du ser statistikk i media, still deg selv disse spørsmålene:

**1. Hvem presenterer tallene?** Har avsenderen en agenda? En reklame, et politisk parti eller en interesseorganisasjon kan velge å presentere data på en måte som støtter deres sak.

**2. Er diagrammet ærlig?** Starter y-aksen på null? Er skalaen riktig? Overdramatiserer 3D-effekter eller ikonstørrelser forskjellene?

**3. Hvor mye data er vist?** Er det cherry-picking? Dekker tidsperioden hele bildet? Er alle relevante grupper tatt med, eller er noen utelatt?

**4. Er det korrelasjon eller kausalitet?** Bare fordi to ting henger sammen, betyr det ikke at den ene forårsaker den andre. Finnes det skjulte variabler?

Også nyttig: Hvor stort er utvalget? Hvem er spurt? Er feilmarginen oppgitt? Et meiningsmåling med $50$ personer er mye mindre pålitelig enn en med $5000$.`,
    },

    {
      id: '9-10-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-10-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på kritisk tenkning:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-10-2-n-quiz3-q0',
            task: 'En kommune har gjennomsnittsinntekt $650\\,000$ kr og medianinntekt $480\\,000$ kr. Hva forteller dette om inntektsfordelingen?',
            options: [
              { id: 'a', text: 'Inntektene er jevnt fordelt', isCorrect: false },
              { id: 'b', text: 'Fordelingen er høyreskjev -- noen få tjener veldig mye og drar gjennomsnittet opp', isCorrect: true },
              { id: 'c', text: 'Medianen er feil beregnet', isCorrect: false },
              { id: 'd', text: 'De fleste tjener over $650\\,000$ kr', isCorrect: false },
            ],
            solution: 'Når gjennomsnittet er mye høyere enn medianen, er fordelingen høyreskjev. Noen få med svært høy inntekt drar gjennomsnittet opp, mens medianen viser at halvparten tjener under $480\\,000$ kr.',
          },
          {
            id: '9-10-2-n-quiz3-q1',
            task: 'Hvilken politiker gir et mest ærlig bilde av økonomien i kommunen fra forrige spørsmål?',
            options: [
              { id: 'a', text: 'Den som bruker gjennomsnittet: «Innbyggerne tjener i snitt $650\\,000$ kr!»', isCorrect: false },
              { id: 'b', text: 'Den som bruker medianen: «Halvparten tjener under $480\\,000$ kr!»', isCorrect: false },
              { id: 'c', text: 'Den som oppgir begge tallene og forklarer forskjellen', isCorrect: true },
              { id: 'd', text: 'Ingen av dem -- man bør bruke typetallet', isCorrect: false },
            ],
            solution: 'Det mest ærlige er å oppgi både gjennomsnitt og median, og forklare at forskjellen skyldes at noen få har svært høy inntekt. Valg av kun ett sentralmål gir et ufullstendig bilde.',
          },
        ],
      },
    },

    {
      id: '9-10-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Statistikk er et kraftig verktøy, men det kan villede hvis vi ikke er kritiske:

- **Villedende diagrammer**: Avkortet y-akse, 3D-effekter og manipulert skala kan overdrive eller skjule forskjeller. Se alltid på de faktiske tallene.
- **Cherry-picking**: Å velge ut bare data som passer, gir et skjevt bilde. Se alltid på den langsiktige trenden og spør hva som er utelatt.
- **Korrelasjon vs. kausalitet**: At to ting samvarierer betyr ikke at den ene forårsaker den andre. Se etter skjulte variabler.
- **Valg av sentralmål**: Gjennomsnitt og median kan gi svært forskjellig inntrykk av samme data.

Fire kritiske spørsmål: **Hvem?** (avsender og agenda), **Hvordan?** (metode og utvalg), **Hva vises -- og hva skjules?** (cherry-picking), **Hvorfor?** (formål med presentasjonen).`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10.3 NARRATIV: Data, manipulering og synspunkter
// ============================================================================

export const CHAPTER_9_10_3_NARRATIV: TextbookChapter = {
  id: '9-10-3-narrativ',
  courseId: '9',
  chapterNumber: '10.3',
  title: 'Data, manipulering og synspunkter',
  subtitle: 'Narrativ versjon',
  description: 'En fortellende gjennomgang av hvordan data kan brukes til å støtte ulike synspunkter, teknikker for datamanipulering, og etikk i en datadrevet verden.',
  estimatedMinutes: 35,
  competenceGoals: [
    'vurdere og drøfte om statistiske framstillingar i media og samfunn er relevante og pålitelege',
    'bruke data til å stille spørsmål, beskrive forklaringar og presentere funn',
  ],
  linkedChapterId: '9-10-3',
  content: [
    {
      id: '9-10-3-n-intro',
      type: 'text',
      content: `## Samme tall, forskjellig historie

Tenk deg at en skole har fått disse resultatene på nasjonale prøver i lesing de siste fem årene: $48, 51, 50, 49, 52$ -- mens det nasjonale snittet er $50$ hvert år. Nå kan rektoren si: «Fantastisk utvikling! Fra $48$ til $52$ -- vi ligger over snittet!» Men en bekymret forelder kan si: «Resultatene svinger opp og ned -- skolen har ingen stabil forbedring!»

Begge bruker **nøyaktig de same tallene**. Begge sier teknisk sett sannheten. Men de gir helt forskjellig inntrykk fordi de **rammer inn** tallene på ulike måter. Dette kalles **framing**, og det er et av de viktigste verktøyene for å forstå hvordan data brukes -- og misbrukes -- i hverdagen.

I dette kapittelet utforsker vi tre temaer:
- Hvordan framing lar oss fortelle ulike historier med same data
- Hvordan data kan manipuleres gjennom spørsmålsformulering, prosenttriks og selektivt utvalg
- Hvordan vi bør tenke etisk om innsamling og bruk av data`,
    },

    {
      id: '9-10-3-n-section1',
      type: 'text',
      content: `## Framing -- kunsten å ramme inn tall

**Framing** handler om hvordan vi presenterer informasjon for å påvirke hvordan den oppfattes. Her er noen eksempler der de same tallene gir ulikt inntrykk:

- «$9$ av $10$ anbefaler dette produktet» vs. «$10\\%$ er misfornøyd»
- «Arbeidsledigheten økte fra $3{,}0\\%$ til $3{,}3\\%$» vs. «Antall arbeidsledige økte med $10\\%$»
- «Vi har kuttet utslipp med $15\\%$ siden $2005$» vs. «Utslippene er fortsatt $85\\%$ av $2005$-nivået»

Legg merke til at den relative endringen (fra $3{,}0$ til $3{,}3$ er $10\\%$ økning) kan høres mye mer dramatisk ut enn den absolutte endringen ($0{,}3$ prosentpoeng). Politikere og journalister kan velge den framingen som passer deres narrative.

Et annet klassisk eksempel: «$30\\%$ av elevene fikk under karakteren $4$ på matteeksamen.» En positiv framing: «Hele $70\\%$ fikk $4$ eller bedre -- et flott resultat!» En negativ framing: «Nesten en tredjedel når ikke et tilfredsstillende nivå i matematikk.» Begge er sant. Men inntrykket er vilt forskjellig.

Framing er ikke nødvendigvis uærlig -- men det er viktig å gjenkjenne det når det brukes for å påvirke oss.`,
    },

    {
      id: '9-10-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '9-10-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv på framing:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-10-3-n-quiz1-q0',
            task: 'En skjorte koster $800$ kr. Prisen økes med $25\\%$, deretter settes ned med $25\\%$. Hva er prisen nå?',
            options: [
              { id: 'a', text: '$800$ kr -- tilbake til start', isCorrect: false },
              { id: 'b', text: '$750$ kr', isCorrect: true },
              { id: 'c', text: '$850$ kr', isCorrect: false },
              { id: 'd', text: '$700$ kr', isCorrect: false },
            ],
            solution: 'Etter $25\\%$ økning: $800 \\cdot 1{,}25 = 1000$ kr. Etter $25\\%$ rabatt: $1000 \\cdot 0{,}75 = 750$ kr. Prosenten er den same, men beregningsgrunnlaget er forskjellig! Økningen er $200$ kr, men rabatten er $250$ kr.',
          },
          {
            id: '9-10-3-n-quiz1-q1',
            task: 'En nettbutikk øker prisene med $40\\%$ og reklamerer deretter med «$40\\%$ rabatt!» En jakke kostet opprinnelig $1000$ kr. Hva er den reelle rabatten fra originalprisen?',
            options: [
              { id: 'a', text: '$0\\%$ -- prisen er tilbake til start', isCorrect: false },
              { id: 'b', text: '$40\\%$', isCorrect: false },
              { id: 'c', text: '$16\\%$', isCorrect: true },
              { id: 'd', text: '$20\\%$', isCorrect: false },
            ],
            solution: 'Ny pris: $1000 \\cdot 1{,}4 = 1400$. Etter rabatt: $1400 \\cdot 0{,}6 = 840$ kr. Reell rabatt: $\\frac{1000 - 840}{1000} = 16\\%$. Trikset er at prosenten beregnes fra ulike utgangspunkt.',
          },
          {
            id: '9-10-3-n-quiz1-q2',
            task: 'Arbeidsledigheten øker fra $3{,}0\\%$ til $3{,}3\\%$. Hva er den relative økningen?',
            options: [
              { id: 'a', text: '$0{,}3\\%$', isCorrect: false },
              { id: 'b', text: '$3{,}3\\%$', isCorrect: false },
              { id: 'c', text: '$10\\%$', isCorrect: true },
              { id: 'd', text: '$30\\%$', isCorrect: false },
            ],
            solution: 'Absolutt endring: $0{,}3$ prosentpoeng. Relativ endring: $\\frac{0{,}3}{3{,}0} = 0{,}1 = 10\\%$. Ledigheten har økt med $10\\%$ relativt sett, men bare $0{,}3$ prosentpoeng absolutt.',
          },
        ],
      },
    },

    {
      id: '9-10-3-n-section2',
      type: 'text',
      content: `## Datamanipulering -- bevisst og ubevisst

Utover framing finnes det mer aktive former for datamanipulering. Noen er bevisste (juks), andre er ubevisste (dårlig metode):

**Selektivt utvalg:** Spør du folk i en sportsbutikk om de trener regelmessig, vil du nok få en høy ja-prosent. Men det sier ingenting om befolkningen generelt. For at en undersøkelse skal være pålitelig, må utvalget være **representativt**.

**Ledende spørsmål:** «Synes du ikke også at skolematen bør bli bedre?» gir andre svar enn «Hva synes du om kvaliteten på skolematen?» Det første antyder at svaret bør være «ja». Det andre er nøytralt.

**Endring av definisjon:** Hvis et land endrer definisjonen av «arbeidsledig» slik at færre telles, synker arbeidsledigheten -- ikke fordi flere har fått jobb, men fordi regnereglene er endret.

**Prosenttriks:** «Prisen økte $50\\%$ og ble deretter satt ned $50\\%$» -- da er den faktisk lavere enn originalen! $100 \\cdot 1{,}5 = 150$, og $150 \\cdot 0{,}5 = 75$. Prosent beregnes alltid fra det **nåværende** utgangspunktet, ikke det opprinnelige.

Å gjenkjenne disse mønstrene gjør deg til en smartere medieforbruker.`,
    },

    {
      id: '9-10-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '9-10-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv på datamanipulering:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-10-3-n-quiz2-q0',
            task: 'Hva er problemet med spørsmålet: «Støtter du miljøvennlig energi, eller foretrekker du å ødelegge naturen?»',
            options: [
              { id: 'a', text: 'Spørsmålet er for kort', isCorrect: false },
              { id: 'b', text: 'Det er en falsk dikotomi med ekstremt ledende formulering', isCorrect: true },
              { id: 'c', text: 'Det handler ikke om statistikk', isCorrect: false },
              { id: 'd', text: 'Det mangler svaralternativer', isCorrect: false },
            ],
            solution: 'Spørsmålet er ekstremt ledende og polariserende. Ingen vil velge å «ødelegge naturen». Det er en falsk dikotomi som tvinger svaret i én retning. Et nøytralt spørsmål ville presentere begge sider saklig.',
          },
          {
            id: '9-10-3-n-quiz2-q1',
            task: 'Et politisk parti sier: «Vi har skapt $50\\,000$ nye arbeidsplasser!» Hva er det viktigste du bør spørre om?',
            options: [
              { id: 'a', text: 'Hvilke byer jobbene er i', isCorrect: false },
              { id: 'b', text: 'Om det også ble nedlagt arbeidsplasser i same periode (nettotall)', isCorrect: true },
              { id: 'c', text: 'Om jobbene er i offentlig eller privat sektor', isCorrect: false },
              { id: 'd', text: 'Hvor mange som søkte på jobbene', isCorrect: false },
            ],
            solution: 'Det viktigste er nettoeffekten. Ble det opprettet $50\\,000$ men nedlagt $45\\,000$, er nettoeffekten bare $5000$. Brutto- og nettotall kan gi svært forskjellig bilde.',
          },
          {
            id: '9-10-3-n-quiz2-q2',
            task: 'Hva er problemet med svaralternativene «1-2 timer / 2-3 timer / 3-4 timer / mer enn 4 timer»?',
            options: [
              { id: 'a', text: 'Det er for mange alternativer', isCorrect: false },
              { id: 'b', text: 'Kategoriene overlapper, og det mangler et alternativ for under $1$ time', isCorrect: true },
              { id: 'c', text: 'Tallene er for lave', isCorrect: false },
              { id: 'd', text: 'Alternativene burde vært i prosent', isCorrect: false },
            ],
            solution: 'Hvis du bruker nøyaktig $2$ timer, passer du i både «1-2» og «2-3». Overlappende kategorier gjør dataene upålitelige. Dessuten mangler det alternativ for «under 1 time» og «0 timer».',
          },
        ],
      },
    },

    {
      id: '9-10-3-n-section3',
      type: 'text',
      content: `## Etikk i en datadrevet verden

Med store datamengder kommer stort ansvar. Teknologiselskaper samler inn enorme mengder data om oss: hva vi søker etter, hva vi klikker på, hvor vi befinner oss, hvem vi kommuniserer med. Disse dataene kan brukes til **nyttige** ting (personlige anbefalinger, trafikkoptimalisering) -- men også til **problematiske** ting (manipulerende reklame, diskriminering, overvåking).

Her er noen viktige etiske prinsipper for databruk:

**Samtykke og transparens:** Folk bør vite hvilke data som samles inn og hva de brukes til. De bør kunne si nei. I Norge har vi personopplysningsloven (basert på EUs GDPR) som beskytter folks data.

**Formålsbegrensning:** Data som samles inn for forskning bør ikke selges til reklame uten nytt samtykke.

**Minimering:** Bare samle inn data som faktisk trengs -- ikke «alt for sikkerhets skyld».

**Rettferdighet:** Algoritmer kan forsterke urettferdighet. Hvis en algoritme trenes på historiske data der visse grupper ble diskriminert, kan den videreføre diskrimineringen.

Når du selv bruker data -- for eksempel i et skoleprosjekt -- bør du presentere dem **ærlig og ansvarlig**: ikke cherry-picke, bruk nøytrale spørsmål, vis hele bildet, og skill tydelig mellom korrelasjon og kausalitet.`,
    },

    {
      id: '9-10-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '9-10-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv på etikk og kildekritikk:',
        options: [{ id: 'a', text: 'placeholder', isCorrect: true }],
        questions: [
          {
            id: '9-10-3-n-quiz3-q0',
            task: '«En studie viser at elever som bruker nettbrett lærer $20\\%$ mer.» Hva bør du sjekke først?',
            options: [
              { id: 'a', text: 'Om nettbrettet er dyrt', isCorrect: false },
              { id: 'b', text: 'Hvem som finansierte studien og om det var et kontrollert eksperiment', isCorrect: true },
              { id: 'c', text: 'Om studien er publisert på sosiale medier', isCorrect: false },
              { id: 'd', text: 'Hvilken farge nettbrettene hadde', isCorrect: false },
            ],
            solution: 'Det viktigste er hvem som står bak (en nettbrettprodusent har egeninteresse) og om studien er et kontrollert eksperiment (kausalitet) eller bare en observasjonsstudie (korrelasjon). Kanskje de mest motiverte elevene valgte nettbrett.',
          },
          {
            id: '9-10-3-n-quiz3-q1',
            task: 'Hvilket av disse er det beste eksempelet på etisk databruk?',
            options: [
              { id: 'a', text: 'En app som samler GPS-data uten å fortelle brukerne', isCorrect: false },
              { id: 'b', text: 'Et firma som selger helsedata til forsikringsselskaper', isCorrect: false },
              { id: 'c', text: 'SSB som publiserer anonym statistikk for forskning med tydelig metode', isCorrect: true },
              { id: 'd', text: 'En nettbutikk som viser ulike priser basert på brukerens inntekt', isCorrect: false },
            ],
            solution: 'SSBs tilnærming følger gode etiske prinsipper: dataene er anonymisert, metoden er transparent, og formålet er klart definert. De andre eksemplene bryter med samtykke, formålsbegrensning eller rettferdighet.',
          },
          {
            id: '9-10-3-n-quiz3-q2',
            task: 'Hvorfor er det viktig å teste flere hypoteser når man analyserer data, i stedet for bare den man tror er riktig?',
            options: [
              { id: 'a', text: 'Fordi det gir flere sider med tekst i rapporten', isCorrect: false },
              { id: 'b', text: 'Fordi den første hypotesen alltid er feil', isCorrect: false },
              { id: 'c', text: 'Fordi vi kan ha confirmation bias, og årsakene kan være sammensatte', isCorrect: true },
              { id: 'd', text: 'Fordi læreren krever det', isCorrect: false },
            ],
            solution: 'Confirmation bias gjør at vi ser det vi forventer å finne. Å teste flere hypoteser beskytter mot dette. Dessuten kan årsakene være sammensatte -- det kan være flere faktorer som virker sammen.',
          },
        ],
      },
    },

    {
      id: '9-10-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Data er et kraftig verktøy som kan brukes til å informere -- eller villede:

**Framing:** Same tall kan gi helt forskjellig inntrykk avhengig av hvordan de presenteres. Vær oppmerksom på ordvalg, prosentbruk og hva som fremheves.

**Datamanipulering:** Selektivt utvalg, ledende spørsmål, endring av definisjoner og prosenttriks er vanlige teknikker. Gjenkjenn dem!

**Prosenttriks:** Prosentøkning og prosentreduksjon med same prosent gir **ikke** tilbake det opprinnelige beløpet, fordi beregningsgrunnlaget endres.

**Kildekritikk-sjekkliste:**
1. **HVEM?** -- Hvem står bak, og hva er deres interesse?
2. **HVORDAN?** -- Metode, utvalgsstørrelse, representativitet
3. **HVA?** -- Hva vises, og hva er utelatt?
4. **HVORFOR?** -- Hva er formålet med å presentere disse tallene?

**Etikk:** Samtykke, transparens, formålsbegrensning, minimering og rettferdighet er nøkkelprinsipper for ansvarlig databruk.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport
// ============================================================================

export const MATEMATIKK_9_NARRATIV_DEL10_CHAPTERS: TextbookChapter[] = [
  CHAPTER_9_10_1_NARRATIV,
  CHAPTER_9_10_2_NARRATIV,
  CHAPTER_9_10_3_NARRATIV,
];
