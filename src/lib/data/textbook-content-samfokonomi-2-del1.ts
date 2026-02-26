/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Makroøkonomisk tenkning
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_1_1: TextbookChapter = {
  id: 'samfokonomi-2-1-1',
  courseId: 'samfokonomi-2',
  chapterNumber: '1.1',
  title: 'Makroøkonomisk tenkning',
  description: 'Introduksjon til makroøkonomiske begreper som BNP, konjunkturer og forskjellen mellom makro- og mikroøkonomi.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjore rede for sentrale makroøkonomiske begreper og sammenhenger',
    'analysere konjunkturutvikling ved hjelp av makroøkonomiske modeller',
  ],
  content: [
    {
      id: 'sf2-1-1-intro',
      type: 'text',
      content: `# Makroøkonomisk tenkning

Makroøkonomi handler om økonomien som helhet. Mens mikroøkonomi studerer enkeltbedrifter og forbrukere, ser makroøkonomi på det store bildet: samlet produksjon, sysselsetting, prisnivå og økonomisk vekst i et land.

## Makro vs. mikro

**Mikroøkonomi** analyserer beslutninger til enkeltaktører: Hva bestemmer prisen på et produkt? Hvordan velger en bedrift sin produksjonsmengde? **Makroøkonomi** ser derimot på aggregerte størrelserden samlede summen av alle beslutninger som tas i økonomien.

Noen sentrale makroøkonomiske spørsmål:
- Hva bestemmer den samlede produksjonen i et land?
- Hvorfor oppstår arbeidsledighet?
- Hva forårsaker inflasjon?
- Hvilke virkemidler har myndighetene for å påvirke økonomien?`,
    },
    {
      id: 'sf2-1-1-def-1',
      type: 'definition',
      title: 'Bruttonasjonalprodukt (BNP)',
      content: `**Bruttonasjonalprodukt (BNP)** er den samlede verdien av alle varer og tjenester som produseres i et land i løpet av en bestemt periode (vanligvis ett år).

BNP kan måles på tre måter:
- **Produksjonsmetoden**: Summen av verdiskapingen i alle næringsgrener
- **Inntektsmetoden**: Summen av alle inntekter (lønn, overskudd, renter)
- **Utgiftsmetoden**: $BNP = C + I + G + (X - M)$ der $C$ = privat konsum, $I$ = investering, $G$ = offentlig konsum, $X$ = eksport, $M$ = import`,
    },
    {
      id: 'sf2-1-1-text-2',
      type: 'text',
      content: `## Nominelt og reelt BNP

Når vi sammenligner BNP over tid, må vi skille mellom nominelt og reelt BNP. **Nominelt BNP** er målt i løpende priser, mens **reelt BNP** er justert for prisstigning. Reelt BNP gir et bedre bilde av faktisk produksjonsendring.

$$\\text{Reelt BNP} = \\frac{\\text{Nominelt BNP}}{\\text{Prisindeks}} \\times 100$$

BNP per innbygger brukes ofte som mål på levestandard, men har sine begrensninger. Det fanger ikke opp ulikhet, fritid, miljøforhold eller uformell økonomi.`,
    },
    {
      id: 'sf2-1-1-def-2',
      type: 'definition',
      title: 'Konjunkturer',
      content: `**Konjunkturer** er svingninger i den økonomiske aktiviteten rundt en langsiktig veksttrend. En konjunktursyklus har fire faser:

1. **Oppgang (ekspansjon)**: Stigende BNP, fallende ledighet
2. **Høykonjunktur**: Økonomien er på sitt høyeste, press i arbeidsmarkedet
3. **Nedgang (kontraksjon)**: Fallende BNP, stigende ledighet
4. **Lavkonjunktur**: Økonomien er på sitt laveste, høy ledighet

**Produksjonsgapet** er forskjellen mellom faktisk BNP og potensiell BNP (trendnivået).`,
    },
    {
      id: 'sf2-1-1-example-1',
      type: 'example',
      title: 'Produksjonsgapet i Norge',
      problem: 'I et gitt år er Norges reelle BNP 3500 milliarder kroner, mens potensiell BNP er estimert til 3400 milliarder kroner. Beregn produksjonsgapet og forklar hva det betyr.',
      solution: `**Løsning:**

Produksjonsgapet beregnes slik:

$$\\text{Produksjonsgap} = \\text{Faktisk BNP} - \\text{Potensiell BNP} = 3500 - 3400 = 100 \\text{ mrd. kr}$$

I prosent: $\\frac{100}{3400} \\times 100 \\approx 2{,}9\\%$

Et positivt produksjonsgap betyr at økonomien produserer **over** sitt langsiktige potensial. Dette indikerer høykonjunktur med press i arbeidsmarkedet, fare for lønns- og prisvekst, og kan tyde på at økonomien er overopphetet.`,
    },
    {
      id: 'sf2-1-1-text-3',
      type: 'text',
      content: `## Makroøkonomisk politikk

Myndighetene bruker to hovedverktoy for å påvirke økonomien:

**Finanspolitikk** (statsbudsjettet):
- Offentlige utgifter og skatter
- Styres av regjering og Storting
- Ekspansiv finanspolitikk: økte utgifter eller lavere skatt
- Kontraktiv finanspolitikk: reduserte utgifter eller høyere skatt

**Pengepolitikk** (sentralbanken):
- Styringsrenten og pengemengden
- Styres av Norges Bank
- Ekspansiv pengepolitikk: lav rente stimulerer låneopptak og forbruk
- Kontraktiv pengepolitikk: høy rente demper aktiviteten

I Norge har Norges Bank et inflasjonsmål på 2 prosent årlig.`,
    },
    {
      id: 'sf2-1-1-example-2',
      type: 'example',
      title: 'Finanspolitikk i praksis',
      problem: 'Forklar hvorfor myndighetene typisk fører ekspansiv finanspolitikk i lavkonjunkturer.',
      solution: `**Løsning:**

I en lavkonjunktur er det høy arbeidsledighet og lav etterspørsel, altså fallende BNP. Myndighetene kan da:

1. **Øke offentlige utgifter**: Bygge veier, sykehus eller skoler, noe som skaper arbeidsplasser direkte og øker etterspørselen
2. **Senke skatter**: Gir husholdninger mer å bruke, som stimulerer privat konsum
3. **Øke overforinger**: Høyere dagpenger eller andre stønnader øker kjøpekraften til de med lavest inntekt

Målet er å fylle produksjonsgapet og bringe økonomien tilbake til potensiell produksjon. I en åpen økonomi som Norge må man også ta hensyn til at deler av etterspørselen lekker ut gjennom import.`,
    },
    {
      id: 'sf2-1-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av følgende er den korrekte formelen for BNP målt med utgiftsmetoden?',
        options: [
          { id: 'a', text: '$BNP = C + I + G + (X - M)$', isCorrect: true },
          { id: 'b', text: '$BNP = C + I - G + (X - M)$', isCorrect: false },
          { id: 'c', text: '$BNP = C + I + G + X + M$', isCorrect: false },
          { id: 'd', text: '$BNP = C \\cdot I \\cdot G \\cdot (X - M)$', isCorrect: false },
        ],
        solution: 'BNP med utgiftsmetoden er summen av privat konsum (C), bruttoinvesteringer (I), offentlig konsum (G) og nettoeksport (X - M).',
      },
    },
    {
      id: 'sf2-1-1-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner en høykonjunktur?',
        options: [
          { id: 'a', text: 'Positivt produksjonsgap, lav ledighet og press i arbeidsmarkedet', isCorrect: true },
          { id: 'b', text: 'Negativt produksjonsgap og høy arbeidsledighet', isCorrect: false },
          { id: 'c', text: 'Stabilt BNP uten vekst', isCorrect: false },
          { id: 'd', text: 'Fallende eksport og stigende import', isCorrect: false },
        ],
        solution: 'I en høykonjunktur produserer økonomien over sitt potensial. Det betyr positivt produksjonsgap, lav arbeidsledighet og ofte press på lønninger og priser.',
      },
    },
    {
      id: 'sf2-1-1-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom nominelt og reelt BNP. Hvorfor er reelt BNP et bedre mål på økonomisk utvikling over tid?',
        hints: ['Tenk på hva som skjer med BNP-tallet når prisene stiger, selv om produksjonen er uendret.'],
        solution: 'Nominelt BNP måles i løpende priser og påvirkes av både produksjonsendringer og prisendringer. Reelt BNP er justert for inflasjon ved hjelp av en prisindeks, slik at det bare reflekterer endringer i faktisk produksjon. Reelt BNP er bedre fordi det viser om vi faktisk produserer mer, ikke bare at prisene har steget.',
      },
    },
    {
      id: 'sf2-1-1-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et land har nominelt BNP på 5000 milliarder kroner i år 2. Prisindeksen er 125 (med basisår = 100). Beregn reelt BNP.',
        hints: ['Bruk formelen: Reelt BNP = (Nominelt BNP / Prisindeks) ganger 100'],
        solution: 'Reelt BNP = (5000 / 125) ganger 100 = 4000 milliarder kroner. Prisøkningen fra basisåret gjor at den reelle verdiskapingen er lavere enn det nominelle tallet tilsier.',
      },
    },
    {
      id: 'sf2-1-1-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft styrker og svakheter ved BNP som mål på velstand og levestandard i et land. Gi minst tre argumenter for og tre argumenter mot.',
        hints: [
          'Tenk på hva BNP fanger opp og hva det ikke fanger opp.',
          'Vurder ulikhet, miljø, fritid og uformell økonomi.',
        ],
        solution: 'Styrker: (1) Gir et objektivt og sammenlignbart mål på økonomisk aktivitet, (2) korrelerer med mange andre velstandsindikatorer som helse og utdanning, (3) er enkelt å beregne og sammenligne mellom land. Svakheter: (1) Fanger ikke opp inntektsfordeling og ulikhet, (2) inkluderer ikke verdien av fritid eller ubetalt arbeid, (3) tar ikke hensyn til miljøforringelse eller bruk av naturressurser, (4) fanger ikke opp uformell økonomi eller svart arbeid.',
      },
    },
    {
      id: 'sf2-1-1-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Norge befinner seg i en lavkonjunktur med stigende arbeidsledighet og negativt produksjonsgap. Forklar hvilke finanspolitiske og pengepolitiske tiltak myndighetene kan sette inn, og drøft mulige konsekvenser av disse tiltakene.',
        hints: [
          'Skill mellom finanspolitikk (statsbudsjettet) og pengepolitikk (Norges Bank).',
          'Tenk på både kortsiktige og langsiktige virkninger.',
        ],
        solution: 'Finanspolitiske tiltak: Øke offentlige utgifter (infrastruktur, offentlige tjenester) og/eller senke skatter for å stimulere etterspørselen. Pengepolitiske tiltak: Norges Bank kan senke styringsrenten for å stimulere låneopptak og investeringer. Konsekvenser: På kort sikt øker etterspørselen og ledigheten faller. På lengre sikt kan ekspansiv politikk føre til inflasjonspress, høyere statsgjeld og svekkelse av konkurranseevnen. Handlingsregelen begrenser bruken av oljepenger i finanspolitikken.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.2: Keynesiansk modell
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_1_2: TextbookChapter = {
  id: 'samfokonomi-2-1-2',
  courseId: 'samfokonomi-2',
  chapterNumber: '1.2',
  title: 'Keynesiansk modell',
  description: 'Keynes sin teori om samlet etterspørsel, multiplikatoreffekten og statens rolle i å stabilisere økonomien.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjore rede for keynesiansk økonomisk teori',
    'beregne og tolke multiplikatoreffekter',
  ],
  content: [
    {
      id: 'sf2-1-2-intro',
      type: 'text',
      content: `# Keynesiansk modell

John Maynard Keynes revolusjonerte økonomisk tenkning på 1930-tallet med sin bok *The General Theory of Employment, Interest and Money*. Hans hovedbudskap var at markedet ikke alltid regulerer seg selv, og at økonomien kan bli værende i likevekt med høy arbeidsledighet.

## Bakgrunn: Den store depresjonen

Klassisk økonomisk teori hevdet at markedet alltid ville vende tilbake til full sysselsetting. Men under depresjonen i 1930-årene falt produksjonen dramatisk og arbeidsledigheten forble høy i mange år. Keynes argumenterte for at:

- **Etterspørselen styrer produksjonen** på kort sikt
- Lønninger og priser er **stive nedover** og tilpasser seg ikke raskt nok
- Staten må gripe inn med **aktiv finanspolitikk** for å stabilisere økonomien`,
    },
    {
      id: 'sf2-1-2-def-1',
      type: 'definition',
      title: 'Samlet etterspørsel (AD)',
      content: `**Samlet etterspørsel** (Aggregate Demand, AD) er den totale etterspørselen etter varer og tjenester i økonomien:

$$AD = C + I + G + (X - M)$$

der:
- $C$ = privat konsum (avhenger av disponibel inntekt)
- $I$ = bruttoinvesteringer
- $G$ = offentlig konsum og investeringer
- $X - M$ = nettoeksport

I den keynesianske modellen antar vi at **tilbudet tilpasser seg etterspørselen** på kort sikt, så lenge det er ledig kapasitet i økonomien.`,
    },
    {
      id: 'sf2-1-2-text-2',
      type: 'text',
      content: `## Konsumfunksjonen

Keynes foreslo at privat konsum avhenger av disponibel inntekt:

$$C = c_0 + c_1 \\cdot Y_d$$

der:
- $c_0$ = autonomt konsum (konsum uavhengig av inntekt)
- $c_1$ = marginal konsumtilbøyelighet ($0 < c_1 < 1$)
- $Y_d$ = disponibel inntekt (inntekt etter skatt)

Den marginale konsumtilbøyeligheten $c_1$ forteller hvor stor andel av en ekstra krone i inntekt som går til konsum. Hvis $c_1 = 0{,}8$, brukes 80 øre av hver ekstra krone på konsum, mens 20 øre spares.`,
    },
    {
      id: 'sf2-1-2-def-2',
      type: 'definition',
      title: 'Multiplikatoreffekten',
      content: `**Multiplikatoreffekten** beskriver hvordan en initial endring i etterspørsel forsterkes gjennom økonomien. Når staten øker sine utgifter med 1 milliard kroner, øker BNP med mer enn 1 milliard.

**Multiplikatoren** i en enkel modell uten skatt og import:

$$m = \\frac{1}{1 - c_1}$$

Med skattesats $t$ og importandel $z$:

$$m = \\frac{1}{1 - c_1(1 - t) + z}$$

Jo høyere den marginale konsumtilbøyeligheten, jo større er multiplikatoren.`,
    },
    {
      id: 'sf2-1-2-example-1',
      type: 'example',
      title: 'Beregning av multiplikatoren',
      problem: 'I en økonomi er marginal konsumtilbøyelighet $c_1 = 0{,}8$, skattesatsen $t = 0{,}25$ og importandelen $z = 0{,}1$. Beregn multiplikatoren og finn virkningen på BNP av en økning i offentlige utgifter på 10 milliarder kroner.',
      solution: `**Løsning:**

Multiplikatoren:
$$m = \\frac{1}{1 - c_1(1 - t) + z} = \\frac{1}{1 - 0{,}8(1 - 0{,}25) + 0{,}1}$$

$$= \\frac{1}{1 - 0{,}8 \\cdot 0{,}75 + 0{,}1} = \\frac{1}{1 - 0{,}6 + 0{,}1} = \\frac{1}{0{,}5} = 2$$

Virkning på BNP:
$$\\Delta Y = m \\cdot \\Delta G = 2 \\cdot 10 = 20 \\text{ mrd. kr}$$

En økning i offentlige utgifter på 10 milliarder kroner gir altså en BNP-økning på 20 milliarder kroner. Mekanismen er at økte offentlige utgifter gir høyere inntekter, som øker konsumet, som igjen gir høyere inntekter osv.`,
    },
    {
      id: 'sf2-1-2-text-3',
      type: 'text',
      content: `## Multiplikatorkjeden

La oss følge en økning i offentlige utgifter på 100 gjennom økonomien (med $c_1 = 0{,}8$ og uten skatt/import):

| Runde | Etterspørselsøkning | Akkumulert |
|-------|----------------------|------------|
| 1 | 100 | 100 |
| 2 | 80 | 180 |
| 3 | 64 | 244 |
| 4 | 51,2 | 295,2 |
| ... | ... | ... |
| Totalt | 500 | 500 |

Multiplikatoren er $\\frac{1}{1 - 0{,}8} = 5$, så total virkning er $100 \\cdot 5 = 500$.

## Begrensninger ved keynesiansk modell

- Antar ledige ressurser (fungerer best i lavkonjunktur)
- Forenklet modell uten rente- og valutakurseffekter
- Ignorerer tilbudssiden av økonomien
- Tidsforsinkelser (lags) i virkeligheten
- I en åpen økonomi lekker mye etterspørsel ut gjennom import`,
    },
    {
      id: 'sf2-1-2-example-2',
      type: 'example',
      title: 'Spareparadokset',
      problem: 'Forklar Keynes sitt spareparadoks: Hvorfor kan økt sparing på individnivå føre til lavere sparing på samfunnsnivå?',
      solution: `**Løsning:**

På individnivå virker det fornuftig å spare mer i usikre tider. Men i keynesiansk teori:

1. Når alle sparer mer, faller konsumet ($C$ går ned)
2. Lavere konsum betyr lavere etterspørsel
3. Bedrifter selger mindre og kutter produksjonen
4. Lavere produksjon fører til oppsigelser
5. Høyere ledighet gir lavere inntekter
6. Lavere inntekter kan bety at total sparing faktisk faller

Dette er et eksempel på **sammensetningsfeilslutning**: Det som er rasjonelt for den enkelte, er ikke nødvendigvis bra for fellesskapet. Keynes brukte dette som argument for statlig motkonjunkturpolitikk.`,
    },
    {
      id: 'sf2-1-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er multiplikatoren når marginal konsumtilbøyelighet $c_1 = 0{,}75$ i en lukket økonomi uten skatt?',
        options: [
          { id: 'a', text: '4', isCorrect: true },
          { id: 'b', text: '3', isCorrect: false },
          { id: 'c', text: '0,75', isCorrect: false },
          { id: 'd', text: '1,33', isCorrect: false },
        ],
        solution: 'Multiplikatoren i en enkel modell: $m = \\frac{1}{1 - c_1} = \\frac{1}{1 - 0{,}75} = \\frac{1}{0{,}25} = 4$.',
      },
    },
    {
      id: 'sf2-1-2-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Ifølge keynesiansk teori, hva styrer produksjonen på kort sikt når det er ledig kapasitet?',
        options: [
          { id: 'a', text: 'Samlet etterspørsel', isCorrect: true },
          { id: 'b', text: 'Samlet tilbud', isCorrect: false },
          { id: 'c', text: 'Pengemengden alene', isCorrect: false },
          { id: 'd', text: 'Teknologisk utvikling', isCorrect: false },
        ],
        solution: 'I keynesiansk teori antar man at etterspørselen bestemmer produksjonen på kort sikt, så lenge det er ledig kapasitet. Bedrifter produserer det markedet etterspør.',
      },
    },
    {
      id: 'sf2-1-2-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Konsumfunksjonen i en økonomi er $C = 200 + 0{,}7 \\cdot Y_d$. Forklar hva tallene 200 og 0,7 betyr økonomisk.',
        hints: ['Tenk på hva som skjer med konsumet når inntekten er null, og når inntekten øker med 100 kroner.'],
        solution: 'Tallet 200 er det autonome konsumet (c0), altså konsum som finner sted selv uten inntekt (for eksempel finansiert av sparing eller lån). Tallet 0,7 er den marginale konsumtilbøyeligheten (c1), som betyr at for hver ekstra krone i disponibel inntekt, øker konsumet med 70 øre. De resterende 30 øre spares.',
      },
    },
    {
      id: 'sf2-1-2-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'I en økonomi er $c_1 = 0{,}6$, $t = 0{,}3$ og $z = 0{,}15$. Beregn multiplikatoren og finn effekten på BNP av en skattelette som øker disponibel inntekt med 5 milliarder kroner.',
        hints: [
          'Bruk formelen for multiplikatoren med skatt og import.',
          'Husk at skattelette virker gjennom konsumleddet.',
        ],
        solution: 'Multiplikatoren: m = 1 / (1 - 0,6(1 - 0,3) + 0,15) = 1 / (1 - 0,42 + 0,15) = 1 / 0,73 = ca. 1,37. Virkning på BNP: delta Y = 1,37 ganger 5 = ca. 6,85 milliarder kroner. Merk at skattelette har svakere multiplikatoreffekt enn direkte offentlige utgifter fordi noe av skatteletten spares.',
      },
    },
    {
      id: 'sf2-1-2-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar spareparadokset med utgangspunkt i den keynesianske modellen. Bruk multiplikatoreffekten til å vise hvordan økt sparing på individnivå kan føre til lavere total inntekt.',
        hints: [
          'Tenk på hva som skjer med konsumfunksjonen når sparingen øker.',
          'Hva skjer med multiplikatorkjeden når c1 synker?',
        ],
        solution: 'Når husholdningene øker sparingen, synker den marginale konsumtilbøyeligheten c1. Lavere c1 gir lavere multiplikator og dermed lavere samlet etterspørsel. Eksempel: Hvis c1 faller fra 0,8 til 0,6, faller multiplikatoren fra 5 til 2,5. Lavere etterspørsel gir lavere produksjon og inntekt, og ved lavere inntekt kan den totale sparingen faktisk bli lavere enn før. Det som er rasjonelt for den enkelte (spare mer i usikre tider) kan være skadelig for økonomien som helhet.',
      },
    },
    {
      id: 'sf2-1-2-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft styrker og svakheter ved den keynesianske modellen. I hvilke situasjoner fungerer modellen best, og når kommer den til kort?',
        hints: [
          'Tenk på forutsetningene i modellen: ledige ressurser, stive priser, lukket/åpen økonomi.',
          'Sammenlign med situasjoner med full kapasitetsutnyttelse.',
        ],
        solution: 'Styrker: Modellen forklarer godt hvordan økonomien kan havne i lavkonjunktur og hvordan aktiv finanspolitikk kan motvirke dette. Den viser multiplikatoreffekter og sammensetningsfeilslutninger. Svakheter: Modellen antar ledige ressurser og stive priser, og fungerer dårlig når økonomien er nær full kapasitet. Den ignorerer tilbudssiden, rente- og valutakurseffekter, forventninger og tidsforsinkelser. I en åpen økonomi som Norge reduseres multiplikatoreffekten av høy importandel. Modellen passer best for å analysere kortsiktige svingninger i en økonomi med ledig kapasitet.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.3: AD-AS-modellen
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_1_3: TextbookChapter = {
  id: 'samfokonomi-2-1-3',
  courseId: 'samfokonomi-2',
  chapterNumber: '1.3',
  title: 'AD-AS-modellen',
  description: 'Aggregert etterspørsel og aggregert tilbud, makroøkonomisk likevekt og hvordan sjokk påvirker økonomien.',
  estimatedMinutes: 20,
  competenceGoals: [
    'bruke AD-AS-modellen til å analysere makroøkonomiske sammenhenger',
    'forklare hvordan tilbuds- og etterspørselsjokk påvirker produksjon og prisnivå',
  ],
  content: [
    {
      id: 'sf2-1-3-intro',
      type: 'text',
      content: `# AD-AS-modellen

AD-AS-modellen (Aggregate Demand - Aggregate Supply) er et sentralt verktoy i makroøkonomi. Den viser sammenhengen mellom prisnivået og samlet produksjon, og hvordan økonomien finner sin likevekt.

## Hvorfor trenger vi AD-AS?

Den keynesianske modellen i forrige kapittel antok at prisnivået var konstant. I virkeligheten endrer prisene seg, og vi trenger en modell som inkluderer både etterspørsels- og tilbudssiden. AD-AS-modellen gjor nettopp dette.

I diagrammet har vi:
- **Horisontal akse**: Reelt BNP ($Y$)
- **Vertikal akse**: Prisnivå ($P$)`,
    },
    {
      id: 'sf2-1-3-def-1',
      type: 'definition',
      title: 'Aggregert etterspørsel (AD)',
      content: `**AD-kurven** viser sammenhengen mellom prisnivået og samlet etterspørsel etter varer og tjenester. AD-kurven heller nedover fordi:

1. **Formueseffekten**: Høyere prisnivå reduserer realverdien av formue, som senker konsumet
2. **Renteeffekten**: Høyere prisnivå øker etterspørsel etter penger, som driver renten opp og reduserer investeringer
3. **Valutakurseffekten**: Høyere rente styrker valutaen, som gjor eksport dyrere og reduserer nettoeksport

AD-kurven skifter utover ved ekspansiv finans- eller pengepolitikk, og innover ved kontraktiv politikk.`,
    },
    {
      id: 'sf2-1-3-def-2',
      type: 'definition',
      title: 'Aggregert tilbud (AS)',
      content: `**AS-kurven** viser sammenhengen mellom prisnivået og samlet produksjon. Vi skiller mellom:

**Kortsiktig AS (SRAS)**: Stigende kurve fordi:
- Noen priser og lønninger er stive på kort sikt
- Høyere prisnivå gir høyere profittmarginer
- Bedrifter øker produksjonen når prisene stiger

**Langsiktig AS (LRAS)**: Vertikal linje ved potensiell produksjon fordi:
- På lang sikt tilpasses alle priser og lønninger
- Produksjonen bestemmes av realfaktører (arbeidskraft, kapital, teknologi)
- Potensiell produksjon er uavhengig av prisnivået`,
    },
    {
      id: 'sf2-1-3-text-2',
      type: 'text',
      content: `## Makroøkonomisk likevekt

Likevekt i AD-AS-modellen oppstår der AD-kurven krysser AS-kurven. I krysningspunktet er:
- Samlet etterspørsel lik samlet tilbud
- Prisnivået og produksjonen bestemt simultant

### Kortsiktig vs. langsiktig likevekt

**Kortsiktig likevekt**: Der AD krysser SRAS. Produksjonen kan være over eller under potensiell produksjon.

**Langsiktig likevekt**: Der AD krysser både SRAS og LRAS. Produksjonen er lik potensiell produksjon, og det er ingen tendens til endring.

Når kortsiktig likevekt avviker fra langsiktig likevekt, vil lønns- og pristilpasninger gradvis føre økonomien tilbake.`,
    },
    {
      id: 'sf2-1-3-example-1',
      type: 'example',
      title: 'Etterspørselsjokk',
      problem: 'Vis med AD-AS-modellen hva som skjer når regjeringen øker offentlige utgifter betydelig (positivt etterspørselsjokk). Analyser både kortsiktige og langsiktige virkninger.',
      solution: `**Løsning:**

**Kortsiktig virkning:**
1. AD-kurven skifter utover (til høyre)
2. Ny kortsiktig likevekt: høyere produksjon ($Y > Y^*$) og høyere prisnivå
3. Positivt produksjonsgap oppstår
4. Arbeidsledigheten faller under det naturlige nivået

**Langsiktig tilpasning:**
1. Høyere etterspørsel etter arbeidskraft presser lønnene opp
2. Høyere lønnskostnader skifter SRAS-kurven oppover (til venstre)
3. Produksjonen faller tilbake mot potensiell produksjon
4. Prisnivået stiger ytterligere

**Sluttresultat**: På lang sikt er produksjonen tilbake på potensiell produksjon, men prisnivået er permanent høyere. Den ekspansive finanspolitikken har kun prisvirkninger på lang sikt.`,
    },
    {
      id: 'sf2-1-3-text-3',
      type: 'text',
      content: `## Tilbudssjokk

Et **negativt tilbudssjokk** (f.eks. oljeprissjokk, pandemi, krig) skifter SRAS-kurven oppover:
- Produksjonen faller og prisnivået stiger
- Denne kombinasjonen kalles **stagflasjon**
- Myndighetene står overfor et dilemma: stimulere etterspørselen (øker inflasjonen) eller bekjempe inflasjon (forverrer nedgangen)

Et **positivt tilbudssjokk** (f.eks. teknologisk gjennombrudd, fallende energipriser):
- SRAS skifter nedover
- Produksjonen øker og prisnivået faller
- Dette er den ideelle situasjonen for en økonomi

## Politikkimplikasjoner

AD-AS-modellen viser at:
- **Etterspørselspolitikk** kan påvirke produksjonen på kort sikt, men bare prisnivået på lang sikt
- **Tilbudspolitikk** (utdanning, infrastruktur, innovasjon) kan øke potensiell produksjon permanent
- Valg av politikk avhenger av typen sjokk og tidshorisonten`,
    },
    {
      id: 'sf2-1-3-example-2',
      type: 'example',
      title: 'Stagflasjon',
      problem: 'Forklar med AD-AS-modellen hvorfor OPEC-landenes oljeprisøkning på 1970-tallet skapte stagflasjon i vestlige økonomier.',
      solution: `**Løsning:**

1. **Sjokket**: OPEC firedoblet oljeprisen i 1973. Olje var en viktig innsatsfaktor i nesten all produksjon.

2. **Virkning i AD-AS-modellen**:
   - Høyere oljepris økte produksjonskostnadene for bedrifter
   - SRAS-kurven skiftet oppover (til venstre)
   - Ny likevekt: Lavere produksjon ($Y < Y^*$) OG høyere prisnivå

3. **Stagflasjon**: Kombinasjonen av stagnasjon (lav vekst, høy ledighet) og inflasjon (stigende priser). Dette var et problem som den keynesianske modellen hadde vanskelig for å forklare.

4. **Politikkdilemma**:
   - Ekspansiv politikk ville øke etterspørselen og redusere ledigheten, men også forsterke inflasjonen
   - Kontraktiv politikk ville dempe inflasjonen, men forverret resesjonen
   - Mange land valgte å stimulere økonomien, noe som førte til langvarig høy inflasjon`,
    },
    {
      id: 'sf2-1-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvorfor heller AD-kurven nedover?',
        options: [
          { id: 'a', text: 'På grunn av formueseffekten, renteeffekten og valutakurseffekten', isCorrect: true },
          { id: 'b', text: 'Fordi høyere priser alltid betyr lavere kvalitet', isCorrect: false },
          { id: 'c', text: 'Fordi staten alltid senker skattene når prisene stiger', isCorrect: false },
          { id: 'd', text: 'Fordi tilbudet alltid øker når prisene stiger', isCorrect: false },
        ],
        solution: 'AD-kurven heller nedover på grunn av tre effekter: Formueseffekten (høyere priser reduserer real formue), renteeffekten (høyere priser driver renten opp) og valutakurseffekten (høyere rente styrker valutaen og svekker nettoeksporten).',
      },
    },
    {
      id: 'sf2-1-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kjennetegner stagflasjon?',
        options: [
          { id: 'a', text: 'Kombinasjonen av høy inflasjon og lav økonomisk vekst (eller resesjon)', isCorrect: true },
          { id: 'b', text: 'Høy økonomisk vekst og lav inflasjon', isCorrect: false },
          { id: 'c', text: 'Lav inflasjon og lav arbeidsledighet', isCorrect: false },
          { id: 'd', text: 'Deflasjon og høy økonomisk vekst', isCorrect: false },
        ],
        solution: 'Stagflasjon er kombinasjonen av stagnasjon (lav eller negativ vekst, høy ledighet) og inflasjon (stigende priser). Det oppstår typisk ved negative tilbudssjokk, som oljeprissjokk.',
      },
    },
    {
      id: 'sf2-1-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom kortsiktig og langsiktig aggregert tilbud (SRAS vs. LRAS). Hvorfor er LRAS vertikal?',
        hints: ['Tenk på hva som er stivt på kort sikt og fleksibelt på lang sikt.'],
        solution: 'SRAS stiger fordi noen priser og lønninger er stive på kort sikt. Når prisnivået stiger, øker profittmarginene og bedrifter produserer mer. LRAS er vertikal fordi alle priser og lønninger er fullt fleksible på lang sikt. Produksjonen bestemmes da kun av realfaktører som arbeidskraft, kapitalbeholdning og teknologi, uavhengig av prisnivået. LRAS representerer potensiell produksjon.',
      },
    },
    {
      id: 'sf2-1-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk AD-AS-modellen til å analysere virkningen av en rentenedsettelse fra Norges Bank. Beskriv hva som skjer på kort og lang sikt.',
        hints: [
          'Lavere rente påvirker først etterspørselen.',
          'Tenk på hva som skjer med investeringer, konsum og valutakurs.',
        ],
        solution: 'Kort sikt: Lavere rente stimulerer investeringer og konsum, og svekker kronekursen (som øker nettoeksporten). AD-kurven skifter utover. Ny kortsiktig likevekt har høyere produksjon og noe høyere prisnivå. Lang sikt: Økt etterspørsel presser lønninger og kostnader opp. SRAS skifter oppover. Produksjonen vender tilbake til potensiell produksjon, men prisnivået er permanent høyere. Pengepolitikk er noytralt på lang sikt.',
      },
    },
    {
      id: 'sf2-1-3-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En økonomi rammes av et negativt tilbudssjokk (f.eks. en global energikrise). Analyser med AD-AS-modellen hvilke politikkalternativer myndighetene har, og drøft fordeler og ulemper ved hvert alternativ.',
        hints: [
          'Et negativt tilbudssjokk skifter SRAS oppover.',
          'Myndighetene kan velge mellom å gjore ingenting, stimulere etterspørselen eller stramme inn.',
        ],
        solution: 'Ved negativt tilbudssjokk skifter SRAS oppover: produksjonen faller og prisene stiger (stagflasjon). Alternativ 1: Ekspansiv politikk (skift AD utover) stabiliserer produksjonen, men forsterker inflasjonen. Alternativ 2: Kontraktiv politikk (skift AD innover) demper inflasjonen, men forverrer resesjonen. Alternativ 3: Ingenting - la økonomien tilpasse seg selv. Lønninger faller gradvis, SRAS skifter tilbake. Valget avhenger av hva myndighetene prioriterer: sysselsetting eller prisstabilitet.',
      },
    },
    {
      id: 'sf2-1-3-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign den keynesianske modellen fra kapittel 1.2 med AD-AS-modellen. Hvilke fordeler gir AD-AS-modellen? Gi eksempler på fenomener som AD-AS kan forklare, men som den enkle keynesianske modellen ikke kan.',
        hints: [
          'Tenk på prisnivåets rolle i de to modellene.',
          'Vurder begrensningene i den keynesianske modellen.',
        ],
        solution: 'Den keynesianske modellen antar fast prisnivå og fokuserer på etterspørselen. AD-AS-modellen inkluderer både tilbuds- og etterspørselssiden og lar prisnivået variere. Fordeler med AD-AS: (1) Kan analysere inflasjon og prisendringer, (2) kan forklare stagflasjon (tilbudssjokk), (3) skiller mellom kortsiktige og langsiktige virkninger, (4) viser at etterspørselspolitikk kun påvirker prisnivået på lang sikt. Fenomener AD-AS kan forklare men ikke Keynes: stagflasjon, langsiktig nøytralitet av pengemengden, og tilbudssjokk.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.4: IS-LM-modellen
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_1_4: TextbookChapter = {
  id: 'samfokonomi-2-1-4',
  courseId: 'samfokonomi-2',
  chapterNumber: '1.4',
  title: 'IS-LM-modellen',
  description: 'IS-kurven (investering-sparing) og LM-kurven (likviditet-pengemengde), samspill mellom finans- og pengepolitikk.',
  estimatedMinutes: 20,
  competenceGoals: [
    'bruke IS-LM-modellen til å analysere virkningen av finans- og pengepolitikk',
    'forklare samspillet mellom vare- og pengemarkedet',
  ],
  content: [
    {
      id: 'sf2-1-4-intro',
      type: 'text',
      content: `# IS-LM-modellen

IS-LM-modellen ble utviklet av John Hicks i 1937 som en formalisering av Keynes sine ideer. Modellen viser hvordan varemarkedet og pengemarkedet bestemmer renten og produksjonen simultant.

## To markeder, to kurver

Modellen består av to kurver i et diagram med:
- **Horisontal akse**: Reelt BNP ($Y$)
- **Vertikal akse**: Realrente ($r$)

**IS-kurven** representerer likevekt i varemarkedet (investering = sparing).
**LM-kurven** representerer likevekt i pengemarkedet (likviditetsetterspørsel = pengemengde).

Der de to kurvene krysser, er både varemarkedet og pengemarkedet i likevekt simultant.`,
    },
    {
      id: 'sf2-1-4-def-1',
      type: 'definition',
      title: 'IS-kurven',
      content: `**IS-kurven** (Investment-Saving) viser alle kombinasjoner av rente ($r$) og produksjon ($Y$) som gir likevekt i varemarkedet.

IS-kurven heller **nedover** fordi:
- Høyere rente reduserer investeringer og rentesensitivt konsum
- Lavere investeringer og konsum gir lavere samlet etterspørsel
- Lavere etterspørsel gir lavere likevektsproduksjon

**IS-kurven skifter utover** ved:
- Økning i offentlige utgifter ($G$)
- Skattelettelser
- Økt eksport eller økt forbrukertillit`,
    },
    {
      id: 'sf2-1-4-def-2',
      type: 'definition',
      title: 'LM-kurven',
      content: `**LM-kurven** (Liquidity-Money) viser alle kombinasjoner av rente ($r$) og produksjon ($Y$) som gir likevekt i pengemarkedet.

LM-kurven heller **oppover** fordi:
- Høyere produksjon øker transaksjonsetterspørsel etter penger
- For å opprettholde likevekt i pengemarkedet må renten stige
- Høyere rente reduserer spekulativ etterspørsel etter penger

**LM-kurven skifter nedover** ved:
- Økning i pengemengden (ekspansiv pengepolitikk)
- Reduksjon i etterspørsel etter penger

I moderne pengepolitikk, der sentralbanken setter renten direkte, kan LM-kurven betraktes som en horisontal linje ved den fastsatte renten.`,
    },
    {
      id: 'sf2-1-4-text-2',
      type: 'text',
      content: `## IS-LM-likevekt

Likevekten i IS-LM-modellen bestemmer både renten og produksjonen simultant. I krysningspunktet:
- Varemarkedet er i likevekt (planlagt etterspørsel = produksjon)
- Pengemarkedet er i likevekt (etterspørsel etter penger = tilbudt pengemengde)

### Tilpasning til likevekt

Hvis økonomien er utenfor likevekt, virker markedsmekanismene:
- **Utenfor IS-kurven**: Ulikevekt i varemarkedet fører til lagerjusteringer
- **Utenfor LM-kurven**: Ulikevekt i pengemarkedet fører til rentejusteringer
- Rentejusteringer skjer typisk raskere enn produksjonsjusteringer`,
    },
    {
      id: 'sf2-1-4-example-1',
      type: 'example',
      title: 'Ekspansiv finanspolitikk i IS-LM',
      problem: 'Vis med IS-LM-modellen hva som skjer når regjeringen øker offentlige utgifter. Sammenlign effekten med den enkle keynesianske multiplikatoren.',
      solution: `**Løsning:**

1. **IS-kurven skifter utover**: Økte offentlige utgifter øker samlet etterspørsel ved ethvert rentenivå.

2. **Ny likevekt**: Høyere produksjon ($Y$) OG høyere rente ($r$).

3. **Fortreningseffekten (crowding out)**: Høyere produksjon øker etterspørsel etter penger, som presser renten opp. Høyere rente reduserer private investeringer. Dermed fortrenger offentlige utgifter noe av den private investeringen.

4. **Sammenligning med keynesiansk multiplikator**: I den enkle keynesianske modellen (uten pengemarkeder) er multiplikatoreffekten større fordi man ignorerer renteokningen. IS-LM viser at den reelle BNP-okningen er mindre enn hva den enkle multiplikatoren tilsier, nettopp på grunn av fortreningseffekten.`,
    },
    {
      id: 'sf2-1-4-text-3',
      type: 'text',
      content: `## Finanspolitikk vs. pengepolitikk

### Finanspolitikk i IS-LM
- Skifter IS-kurven
- Ekspansiv: IS skifter høyre (økte utgifter/skattelette)
- Gir høyere $Y$ og høyere $r$
- Delvis fortrenging av private investeringer

### Pengepolitikk i IS-LM
- Skifter LM-kurven
- Ekspansiv: LM skifter nedover (høyere pengemengde/lavere rente)
- Gir høyere $Y$ og lavere $r$
- Stimulerer private investeringer

### Kombinasjon av politikk
Myndighetene kan kombinere finans- og pengepolitikk:
- Ekspansiv finanspolitikk + ekspansiv pengepolitikk = sterk BNP-økning
- Ekspansiv finanspolitikk + kontraktiv pengepolitikk = høyere rente, usikker BNP-effekt
- Denne kombinasjonen kalles noen ganger "policy mix"`,
    },
    {
      id: 'sf2-1-4-example-2',
      type: 'example',
      title: 'Likviditetsfellen',
      problem: 'Forklar hva en likviditetsfelle er, og hvorfor den gjor pengepolitikk ineffektiv.',
      solution: `**Løsning:**

**Likviditetsfellen** oppstår når renten er så lav (nær null) at:

1. Folk er likegyldige mellom å holde penger og obligasjoner (begge gir nær null avkastning)
2. LM-kurven blir tilnærmet horisontal
3. Økning i pengemengden absorberes bare som økte kassebeholdninger
4. Renten kan ikke falle ytterligere

**Konsekvenser:**
- Pengepolitikk blir ineffektiv: Mer penger i omløp endrer ikke renten
- Finanspolitikk er ekstra effektiv: IS-skiftet gir full multiplikatoreffekt uten fortreningseffekt
- Japan på 1990-2000-tallet og mange vestlige land etter finanskrisen 2008 opplevde dette

**Losningen**: Ukonvensjonell pengepolitikk (kvantitative lettelser), ekspansiv finanspolitikk, eller negativrenter.`,
    },
    {
      id: 'sf2-1-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvorfor heller IS-kurven nedover i IS-LM-diagrammet?',
        options: [
          { id: 'a', text: 'Fordi høyere rente reduserer investeringer og dermed produksjonen', isCorrect: true },
          { id: 'b', text: 'Fordi høyere produksjon øker etterspørsel etter penger', isCorrect: false },
          { id: 'c', text: 'Fordi sentralbanken senker renten når produksjonen stiger', isCorrect: false },
          { id: 'd', text: 'Fordi det er inflasjon når produksjonen stiger', isCorrect: false },
        ],
        solution: 'IS-kurven heller nedover fordi høyere rente gjor det dyrere å låne og investere. Lavere investeringer reduserer samlet etterspørsel, som gir lavere likevektsproduksjon. Altså: høyere rente gir lavere Y langs IS-kurven.',
      },
    },
    {
      id: 'sf2-1-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skjer med IS-LM-likevekten når sentralbanken senker renten (ekspansiv pengepolitikk)?',
        options: [
          { id: 'a', text: 'LM skifter nedover, produksjonen øker og renten faller', isCorrect: true },
          { id: 'b', text: 'IS skifter utover, produksjonen øker og renten stiger', isCorrect: false },
          { id: 'c', text: 'Både IS og LM skifter utover', isCorrect: false },
          { id: 'd', text: 'LM skifter oppover, produksjonen faller', isCorrect: false },
        ],
        solution: 'Ekspansiv pengepolitikk (økt pengemengde eller lavere styringsrente) skifter LM-kurven nedover. I ny likevekt er renten lavere og produksjonen høyere. Lavere rente stimulerer investeringer og konsum.',
      },
    },
    {
      id: 'sf2-1-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva fortreningseffekten (crowding out) er i IS-LM-modellen, og hvorfor den oppstår ved ekspansiv finanspolitikk.',
        hints: ['Følg virkningskjeden fra økte offentlige utgifter til høyere rente og lavere private investeringer.'],
        solution: 'Fortreningseffekten oppstår når økte offentlige utgifter øker produksjonen, som øker etterspørsel etter penger, som presser renten opp. Høyere rente gjor det dyrere for bedrifter å investere og for husholdninger å låne. Dermed fortrenger offentlige utgifter en del private investeringer. Effekten av finanspolitikk på BNP blir derfor mindre enn hva den enkle keynesianske multiplikatoren tilsier.',
      },
    },
    {
      id: 'sf2-1-4-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor pengepolitikk er ineffektiv i en likviditetsfelle, mens finanspolitikk er spesielt effektiv.',
        hints: [
          'Tenk på hva som skjer med LM-kurven når renten allerede er nær null.',
          'Vurder om fortreningseffekten er til stede i en likviditetsfelle.',
        ],
        solution: 'I en likviditetsfelle er renten nær null og LM-kurven er tilnærmet horisontal. Økning i pengemengden absorberes som økte kassebeholdninger uten at renten faller, så pengepolitikk har ingen effekt. Finanspolitikk er derimot spesielt effektiv fordi IS-kurven skifter utover uten at renten stiger (LM er flat). Det betyr ingen fortreningseffekt, og den fulle keynesianske multiplikatoren slår inn.',
      },
    },
    {
      id: 'sf2-1-4-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Regjeringen vil øke BNP uten å endre rentenivået. Forklar med IS-LM-modellen hvilken kombinasjon av finans- og pengepolitikk som kan oppnå dette.',
        hints: [
          'Finanspolitikk skifter IS og gir høyere rente. Pengepolitikk skifter LM og gir lavere rente.',
          'Kan man kombinere de to slik at renteeffektene oppveier hverandre?',
        ],
        solution: 'For å øke BNP uten renteendring trenger man samtidig ekspansiv finanspolitikk (IS skifter utover, gir høyere Y og høyere r) og ekspansiv pengepolitikk (LM skifter nedover, gir høyere Y og lavere r). Når begge gjennomføres samtidig, øker produksjonen kraftig, mens renteeffektene oppveier hverandre. Denne strategien eliminerer også fortreningseffekten, så både offentlige og private investeringer kan øke.',
      },
    },
    {
      id: 'sf2-1-4-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign IS-LM-modellen med AD-AS-modellen. Hvilke spørsmål er IS-LM best egnet til å besvare, og hvilke er AD-AS bedre på? Drøft også begrensninger ved IS-LM-modellen.',
        hints: [
          'Tenk på hva som er endogent (bestemt i modellen) i de to modellene.',
          'Hva skjer med prisnivået i IS-LM?',
        ],
        solution: 'IS-LM er best til å analysere samspillet mellom finans- og pengepolitikk og hvordan renten og produksjonen bestemmes simultant. Den viser fortreningseffekten og likviditetsfellen. AD-AS er bedre til å analysere prisnivåendringer, inflasjon, stagflasjon og langsiktige tilpasninger. Begrensninger ved IS-LM: (1) Antar fast prisnivå, (2) skiller ikke mellom kort og lang sikt, (3) forutsetter at sentralbanken styrer pengemengden (moderne sentralbanker styrer renten), (4) ignorerer forventninger og internasjonale kapitalstrømmer.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.5: Økonomisk vekst
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_1_5: TextbookChapter = {
  id: 'samfokonomi-2-1-5',
  courseId: 'samfokonomi-2',
  chapterNumber: '1.5',
  title: 'Økonomisk vekst',
  description: 'Solow-modellen, vekstfaktører, humankapital og hva som bestemmer langsiktig økonomisk vekst.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjore rede for teorier om økonomisk vekst',
    'analysere faktører som påvirker langsiktig vekst, inkludert humankapital og teknologi',
  ],
  content: [
    {
      id: 'sf2-1-5-intro',
      type: 'text',
      content: `# Økonomisk vekst

Mens de foregående kapitlene handlet om kortsiktige svingninger (konjunkturer), ser vi nå på det mest fundamentale spørsmålet i makroøkonomi: **Hva bestemmer langsiktig økonomisk vekst?**

## Hvorfor er vekst viktig?

Selv små forskjeller i veksttakt gir enorme utslag over tid. Med 2 prosent årlig vekst dobles BNP per innbygger på 35 år. Med 1 prosent tar det 70 år. Denne rentes-rente-effekten forklarer hvorfor noen land er rike og andre fattige.

## Vekstfaktører

Økonomisk vekst bestemmes av:
- **Fysisk kapital**: Maskiner, bygninger, infrastruktur
- **Arbeidskraft**: Antall arbeidstagere og arbeidstimer
- **Humankapital**: Utdanning, kompetanse og erfaring
- **Teknologi**: Innovasjon, forskning og utvikling
- **Institusjoner**: Rettsstat, eiendomsrett, korrupsjonsnivå`,
    },
    {
      id: 'sf2-1-5-def-1',
      type: 'definition',
      title: 'Solow-modellen',
      content: `**Solow-modellen** (Robert Solow, 1956) er den mest kjente modellen for økonomisk vekst. Hovedresultatene er:

**Produksjonsfunksjon**: $Y = A \\cdot f(K, L)$
der $Y$ = produksjon, $A$ = teknologinivå (total faktorproduktivitet), $K$ = kapital, $L$ = arbeidskraft.

**Sentrale innsikter**:
1. **Avtagende grensenytte av kapital**: Ekstra kapital gir stadig mindre ekstra produksjon
2. **Stabil likevekt (steady state)**: Økonomien konvergerer mot et stabilt kapitalnivå per arbeider
3. **Bare teknologisk fremgang driver varig vekst**: Kapitalakkumulasjon alene gir ikke varig vekst på grunn av avtagende grensenytte
4. **Konvergens**: Fattigere land vokser raskere enn rike (betinget konvergens)`,
    },
    {
      id: 'sf2-1-5-text-2',
      type: 'text',
      content: `## Steady state i Solow-modellen

I Solow-modellen konvergerer økonomien mot en **steady state** der kapital per arbeider er konstant. I steady state:

- Investeringene er akkurat store nok til å erstatte slitasje (depresiering)
- $s \\cdot f(k) = (\\delta + n) \\cdot k$

der:
- $s$ = spareraten
- $k$ = kapital per arbeider ($K/L$)
- $\\delta$ = depresieringsrate
- $n$ = befolkningsvekst

### Veien til steady state

Hvis $k$ er under steady state, er investeringene større enn depresiering pluss befolkningsvekst, og $k$ øker. Hvis $k$ er over steady state, er investeringene mindre enn behovet, og $k$ synker. Økonomien konvergerer alltid mot steady state.

### Effekten av høyere sparerate

En permanent økning i spareraten gir:
- **Midlertidig** økt veksttakt (mens økonomien beveger seg mot ny steady state)
- **Permanent** høyere nivå på BNP per innbygger
- Men **ikke** permanent høyere veksttakt`,
    },
    {
      id: 'sf2-1-5-def-2',
      type: 'definition',
      title: 'Humankapital',
      content: `**Humankapital** er den økonomiske verdien av arbeidernes kunnskaper, ferdigheter og erfaring. I motsetning til fysisk kapital er humankapital knyttet til enkeltpersoner.

Humankapital øker gjennom:
- **Formell utdanning**: Grunnskole, videregående, høyere utdanning
- **Opplæring på arbeidsplassen**: Kurs, internopplæring, mentoring
- **Læring gjennom praksis**: Erfaring og kompetanse opparbeidet over tid
- **Helse**: Bedre helse gir mer produktive arbeidere

I utvidede vekstmodeller inkluderes humankapital ($H$):
$$Y = A \\cdot f(K, H, L)$$

Investeringer i humankapital har typisk høy avkastning, særlig i utviklingsland.`,
    },
    {
      id: 'sf2-1-5-example-1',
      type: 'example',
      title: 'Vekstmiraklene i Øst-Asia',
      problem: 'Sør-Korea hadde i 1960 et BNP per innbygger på linje med mange afrikanske land. I dag er det blant verdens rikeste land. Forklar dette vekstmirakelet med utgangspunkt i vekstteorien.',
      solution: `**Løsning:**

Sør-Koreas vekstmirakel kan forklares med flere faktører fra vekstteorien:

1. **Høy sparerate og investering**: Spareraten lå på 30-40 prosent av BNP, langt over de fleste land. Ifølge Solow gir dette høyere steady state.

2. **Massiv investering i humankapital**: Fra 1960 til 2000 økte andelen med høyere utdanning dramatisk. Dette økte produktiviteten i arbeidsstyrken.

3. **Teknologisk fremgang**: Korea gikk fra imitasjon til innovasjon. Selskaper som Samsung og Hyundai ble teknologiledere.

4. **Gode institusjoner**: Sterk stat som beskyttet eiendomsrett, satset på eksportrettet industripolitikk og investerte i utdanning.

5. **Konvergenseffekten**: Som et fattig land var Korea langt under sin potensielle steady state, noe som ga rask kapitalakkumulasjon og høy vekst.

Koreas eksempel viser at Solow-modellens faktører (kapital, humankapital, teknologi, institusjoner) alle spilte en rolle.`,
    },
    {
      id: 'sf2-1-5-text-3',
      type: 'text',
      content: `## Teknologisk fremgang og endogen vekst

I Solow-modellen er teknologisk fremgang **eksogen** - den faller fra himmelen. **Endogen vekstteori** (Paul Romer, 1990) forsøker å forklare hva som driver innovasjon:

### Sentrale ideer
- **Kunnskap som innsatsfaktor**: Kunnskap har økende skalautbytte (ikke avtagende grensenytte)
- **Kunnskapsspredning**: Innovasjon i en bedrift har positive ringvirkninger for andre
- **Forskning og utvikling (FoU)**: Bevisste investeringer i ny kunnskap driver veksten
- **Humankapital**: Utdannede arbeidere er mer innovative

### Implikasjoner for politikk
Endogen vekstteori antyder at myndighetene kan påvirke vekstraten gjennom:
- Støtte til forskning og utvikling
- Investering i utdanning og helse
- Beskyttelse av immaterielle rettigheter (patenter)
- Åpenhet for internasjonal handel og kunnskapsutveksling

## Vekst og bærekraft

Økonomisk vekst målt i BNP tar ikke hensyn til miljø. Moderne økonomisk tenkning vektlegger **grønn vekst** og **bærekraftig utvikling**, der man søker vekst som ikke går på bekostning av fremtidige generasjoners muligheter.`,
    },
    {
      id: 'sf2-1-5-example-2',
      type: 'example',
      title: 'Spareraten og steady state',
      problem: 'To land, A og B, er identiske bortsett fra spareraten. Land A har sparerate $s_A = 0{,}2$ og land B har $s_B = 0{,}4$. Forklar med Solow-modellen hva forskjellen betyr for de to landene på kort og lang sikt.',
      solution: `**Løsning:**

**Steady state**: Land B har høyere sparerate og vil derfor konvergere mot en høyere steady-state kapital per arbeider. Det betyr høyere BNP per innbygger i likevekt.

**Kort sikt**: Hvis begge land starter fra lav kapital, vil land B vokse raskere fordi det investerer en større andel av produksjonen.

**Lang sikt**: Begge land når sine respektive steady states. I steady state vokser begge med samme rate (bestemt av teknologisk fremgang). Men land B har permanent høyere BNP per innbygger.

**Viktig poeng**: Høyere sparerate gir høyere **nivå** på BNP per innbygger, men ikke høyere **veksttakt** på lang sikt. Bare teknologisk fremgang kan drive varig vekst.

**Trade-off**: Høyere sparing betyr lavere konsum i dag for høyere konsum i fremtiden. Den optimale spareraten (den gylne regel) balanserer dagens og fremtidens konsum.`,
    },
    {
      id: 'sf2-1-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'I Solow-modellen, hva er den eneste kilden til varig økonomisk vekst per innbygger?',
        options: [
          { id: 'a', text: 'Teknologisk fremgang', isCorrect: true },
          { id: 'b', text: 'Høyere sparerate', isCorrect: false },
          { id: 'c', text: 'Befolkningsvekst', isCorrect: false },
          { id: 'd', text: 'Mer fysisk kapital', isCorrect: false },
        ],
        solution: 'I Solow-modellen gir kapitalakkumulasjon avtagende grensenytte, så mer kapital alene gir ikke varig vekst. Bare teknologisk fremgang (total faktorproduktivitet, A) kan drive varig vekst i BNP per innbygger.',
      },
    },
    {
      id: 'sf2-1-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med betinget konvergens i vekstteorien?',
        options: [
          { id: 'a', text: 'Land med like fundamentale forhold konvergerer mot samme inntektsnivå, så fattigere land vokser raskest', isCorrect: true },
          { id: 'b', text: 'Alle land i verden konvergerer automatisk mot samme BNP', isCorrect: false },
          { id: 'c', text: 'Rike land vokser alltid raskere enn fattige land', isCorrect: false },
          { id: 'd', text: 'Konvergens bare skjer når landene handler med hverandre', isCorrect: false },
        ],
        solution: 'Betinget konvergens betyr at land med like fundamentale forhold (sparerate, utdanning, institusjoner) konvergerer mot samme steady state. Fattigere land som er lenger unna sin steady state vokser da raskere. Ubetinget konvergens (at alle land konvergerer uavhengig av forutsetninger) støttes ikke av data.',
      },
    },
    {
      id: 'sf2-1-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med steady state i Solow-modellen og hva som skjer når et land øker sin sparerate permanent.',
        hints: ['Tegn en graf med investering og depresiering som funksjoner av kapital per arbeider.'],
        solution: 'Steady state er den langsiktige likevekten der kapital per arbeider er konstant. Nye investeringer er akkurat nok til å erstatte slitasje og utvidet befolkning. Når spareraten øker, stiger investeringskurven. På kort sikt er investeringene større enn behovet, så kapital per arbeider øker. Økonomien vokser midlertidig raskere til den når en ny, høyere steady state. I den nye steady state er BNP per innbygger høyere, men veksttakten er tilbake på normalt nivå.',
      },
    },
    {
      id: 'sf2-1-5-ex-block-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar tre måter humankapital bidrar til økonomisk vekst, og gi konkrete eksempler for hvert punkt.',
        hints: [
          'Tenk på direkte produktivitetseffekter, innovasjon og spredningseffekter.',
        ],
        solution: '(1) Økt arbeidsproduktivitet: Utdannede arbeidere produserer mer per time. Eksempel: En ingeniør kan bruke avansert utstyr mer effektivt. (2) Innovasjon: Høyere utdanning øker evnen til forskning og utvikling. Eksempel: Forskere ved universiteter og i næringslivet utvikler nye produkter og prosesser. (3) Teknologiadopsjon: Humankapital gjor det lettere å ta i bruk ny teknologi utviklet andre steder. Eksempel: IT-kyndige arbeidere kan raskt implementere nye digitale løsninger i bedriften.',
      },
    },
    {
      id: 'sf2-1-5-ex-block-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign Solow-modellen med endogen vekstteori. Hva er den viktigste forskjellen i synet på teknologisk fremgang, og hvilke politikkimplikasjoner følger av hver teori?',
        hints: [
          'I Solow er teknologi eksogen. I endogen vekstteori er den et resultat av bevisste valg.',
          'Tenk på hva myndighetene kan gjore for å påvirke veksten i de to modellene.',
        ],
        solution: 'I Solow-modellen er teknologisk fremgang eksogen, noe som betyr at myndighetene ikke kan påvirke den langsiktige vekstraten. Politikk kan bare påvirke inntektsnivået (gjennom sparerate, utdanning). I endogen vekstteori er innovasjon et resultat av bevisste investeringer i FoU og humankapital. Myndighetene kan dermed påvirke vekstraten permanent gjennom støtte til forskning, utdanning, patentbeskyttelse og kunnskapsspredning. Implikasjon: Endogen vekstteori gir større rolle for aktiv nærings- og utdanningspolitikk.',
      },
    },
    {
      id: 'sf2-1-5-ex-block-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvordan Norge kan opprettholde økonomisk vekst når olje- og gassinntektene avtar. Bruk vekstteori til å analysere hvilke faktører som er viktigst for norsk økonomisk vekst fremover.',
        hints: [
          'Bruk Solow-modellens vekstfaktører som rammeverk.',
          'Tenk på Norges komparative fortrinn og utfordringer.',
        ],
        solution: 'Med utgangspunkt i vekstteorien: (1) Humankapital: Norge har allerede høy utdanning, men må fortsette å investere i kompetanse tilpasset fremtidens næringsliv (digitalisering, grønn teknologi). (2) Teknologi og innovasjon: Satse på FoU i nye næringer som kan erstatte olje (havvind, havbruk, IT). Endogen vekstteori tilsier at økt FoU gir varig vekst. (3) Institusjoner: Opprettholde gode institusjoner, lav korrupsjon og effektiv offentlig sektor. (4) Kapital: Bruke oljefondet strategisk til å investere i produktiv kapasitet. (5) Internasjonal handel: Utnytte komparative fortrinn og delta i globale verdikjeder. Hovedutfordringen er å erstatte oljeinntektene med verdiskaping basert på kunnskap og innovasjon.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Samle alle kapitler
// ============================================================================

export const SAMFOKONOMI_2_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFOKONOMI_2_1_1,
  CHAPTER_SAMFOKONOMI_2_1_2,
  CHAPTER_SAMFOKONOMI_2_1_3,
  CHAPTER_SAMFOKONOMI_2_1_4,
  CHAPTER_SAMFOKONOMI_2_1_5,
];
