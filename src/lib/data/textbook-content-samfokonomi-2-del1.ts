/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Makrooekonomisk tenkning
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_1_1: TextbookChapter = {
  id: 'samfokonomi-2-1-1',
  courseId: 'samfokonomi-2',
  chapterNumber: '1.1',
  title: 'Makrooekonomisk tenkning',
  description: 'Introduksjon til makrooekonomiske begreper som BNP, konjunkturer og forskjellen mellom makro- og mikrooekonomi.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjore rede for sentrale makrooekonomiske begreper og sammenhenger',
    'analysere konjunkturutvikling ved hjelp av makrooekonomiske modeller',
  ],
  content: [
    {
      id: 'sf2-1-1-intro',
      type: 'text',
      content: `# Makrooekonomisk tenkning

Makrooekonomi handler om oekonomien som helhet. Mens mikrooekonomi studerer enkeltbedrifter og forbrukere, ser makrooekonomi paa det store bildet: samlet produksjon, sysselsetting, prisnivaa og oekonomisk vekst i et land.

## Makro vs. mikro

**Mikrooekonomi** analyserer beslutninger til enkeltaktorer: Hva bestemmer prisen paa et produkt? Hvordan velger en bedrift sin produksjonsmengde? **Makrooekonomi** ser derimot paa aggregerte stoerrelserden samlede summen av alle beslutninger som tas i oekonomien.

Noen sentrale makrooekonomiske spoersmaal:
- Hva bestemmer den samlede produksjonen i et land?
- Hvorfor oppstaar arbeidsledighet?
- Hva foraarsaker inflasjon?
- Hvilke virkemidler har myndighetene for aa pavirke oekonomien?`,
    },
    {
      id: 'sf2-1-1-def-1',
      type: 'definition',
      title: 'Bruttonasjonalprodukt (BNP)',
      content: `**Bruttonasjonalprodukt (BNP)** er den samlede verdien av alle varer og tjenester som produseres i et land i loepet av en bestemt periode (vanligvis ett aar).

BNP kan maales paa tre maater:
- **Produksjonsmetoden**: Summen av verdiskapingen i alle naeringsgrener
- **Inntektsmetoden**: Summen av alle inntekter (loenn, overskudd, renter)
- **Utgiftsmetoden**: $BNP = C + I + G + (X - M)$ der $C$ = privat konsum, $I$ = investering, $G$ = offentlig konsum, $X$ = eksport, $M$ = import`,
    },
    {
      id: 'sf2-1-1-text-2',
      type: 'text',
      content: `## Nominelt og reelt BNP

Naar vi sammenligner BNP over tid, maa vi skille mellom nominelt og reelt BNP. **Nominelt BNP** er maalt i loepende priser, mens **reelt BNP** er justert for prisstigning. Reelt BNP gir et bedre bilde av faktisk produksjonsendring.

$$\\text{Reelt BNP} = \\frac{\\text{Nominelt BNP}}{\\text{Prisindeks}} \\times 100$$

BNP per innbygger brukes ofte som maal paa levestandard, men har sine begrensninger. Det fanger ikke opp ulikhet, fritid, miljoeforhold eller uformell oekonomi.`,
    },
    {
      id: 'sf2-1-1-def-2',
      type: 'definition',
      title: 'Konjunkturer',
      content: `**Konjunkturer** er svingninger i den oekonomiske aktiviteten rundt en langsiktig veksttrend. En konjunktursyklus har fire faser:

1. **Oppgang (ekspansjon)**: Stigende BNP, fallende ledighet
2. **Hoeykonjunktur**: Oekonomien er paa sitt hoeyeste, press i arbeidsmarkedet
3. **Nedgang (kontraksjon)**: Fallende BNP, stigende ledighet
4. **Lavkonjunktur**: Oekonomien er paa sitt laveste, hoey ledighet

**Produksjonsgapet** er forskjellen mellom faktisk BNP og potensiell BNP (trendnivaaet).`,
    },
    {
      id: 'sf2-1-1-example-1',
      type: 'example',
      title: 'Produksjonsgapet i Norge',
      problem: 'I et gitt aar er Norges reelle BNP 3500 milliarder kroner, mens potensiell BNP er estimert til 3400 milliarder kroner. Beregn produksjonsgapet og forklar hva det betyr.',
      solution: `**Loesning:**

Produksjonsgapet beregnes slik:

$$\\text{Produksjonsgap} = \\text{Faktisk BNP} - \\text{Potensiell BNP} = 3500 - 3400 = 100 \\text{ mrd. kr}$$

I prosent: $\\frac{100}{3400} \\times 100 \\approx 2{,}9\\%$

Et positivt produksjonsgap betyr at oekonomien produserer **over** sitt langsiktige potensial. Dette indikerer hoeykonjunktur med press i arbeidsmarkedet, fare for loenns- og prisvekst, og kan tyde paa at oekonomien er overopphetet.`,
    },
    {
      id: 'sf2-1-1-text-3',
      type: 'text',
      content: `## Makrooekonomisk politikk

Myndighetene bruker to hovedverktoy for aa pavirke oekonomien:

**Finanspolitikk** (statsbudsjettet):
- Offentlige utgifter og skatter
- Styres av regjering og Storting
- Ekspansiv finanspolitikk: oekte utgifter eller lavere skatt
- Kontraktiv finanspolitikk: reduserte utgifter eller hoeyere skatt

**Pengepolitikk** (sentralbanken):
- Styringsrenten og pengemengden
- Styres av Norges Bank
- Ekspansiv pengepolitikk: lav rente stimulerer laaneopptak og forbruk
- Kontraktiv pengepolitikk: hoey rente demper aktiviteten

I Norge har Norges Bank et inflasjonsmaal paa 2 prosent aarlig.`,
    },
    {
      id: 'sf2-1-1-example-2',
      type: 'example',
      title: 'Finanspolitikk i praksis',
      problem: 'Forklar hvorfor myndighetene typisk foerer ekspansiv finanspolitikk i lavkonjunkturer.',
      solution: `**Loesning:**

I en lavkonjunktur er det hoey arbeidsledighet og lav etterspoersel, altsaa fallende BNP. Myndighetene kan da:

1. **Oeke offentlige utgifter**: Bygge veier, sykehus eller skoler, noe som skaper arbeidsplasser direkte og oeker ettersporselen
2. **Senke skatter**: Gir husholdninger mer aa bruke, som stimulerer privat konsum
3. **Oeke overforinger**: Hoeyere dagpenger eller andre stoennader oeker kjoepekraften til de med lavest inntekt

Maalet er aa fylle produksjonsgapet og bringe oekonomien tilbake til potensiell produksjon. I en aapen oekonomi som Norge maa man ogsaa ta hensyn til at deler av ettersporselen lekker ut gjennom import.`,
    },
    {
      id: 'sf2-1-1-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av foelgende er den korrekte formelen for BNP maalt med utgiftsmetoden?',
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
        task: 'Hva kjennetegner en hoeykonjunktur?',
        options: [
          { id: 'a', text: 'Positivt produksjonsgap, lav ledighet og press i arbeidsmarkedet', isCorrect: true },
          { id: 'b', text: 'Negativt produksjonsgap og hoey arbeidsledighet', isCorrect: false },
          { id: 'c', text: 'Stabilt BNP uten vekst', isCorrect: false },
          { id: 'd', text: 'Fallende eksport og stigende import', isCorrect: false },
        ],
        solution: 'I en hoeykonjunktur produserer oekonomien over sitt potensial. Det betyr positivt produksjonsgap, lav arbeidsledighet og ofte press paa loenninger og priser.',
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
        task: 'Forklar forskjellen mellom nominelt og reelt BNP. Hvorfor er reelt BNP et bedre maal paa oekonomisk utvikling over tid?',
        hints: ['Tenk paa hva som skjer med BNP-tallet naar prisene stiger, selv om produksjonen er uendret.'],
        solution: 'Nominelt BNP maales i loepende priser og pavirkes av baade produksjonsendringer og prisendringer. Reelt BNP er justert for inflasjon ved hjelp av en prisindeks, slik at det bare reflekterer endringer i faktisk produksjon. Reelt BNP er bedre fordi det viser om vi faktisk produserer mer, ikke bare at prisene har steget.',
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
        task: 'Et land har nominelt BNP paa 5000 milliarder kroner i aar 2. Prisindeksen er 125 (med basisaar = 100). Beregn reelt BNP.',
        hints: ['Bruk formelen: Reelt BNP = (Nominelt BNP / Prisindeks) ganger 100'],
        solution: 'Reelt BNP = (5000 / 125) ganger 100 = 4000 milliarder kroner. Prisoekningen fra basisaaret gjor at den reelle verdiskapingen er lavere enn det nominelle tallet tilsier.',
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
        task: 'Droeft styrker og svakheter ved BNP som maal paa velstand og levestandard i et land. Gi minst tre argumenter for og tre argumenter mot.',
        hints: [
          'Tenk paa hva BNP fanger opp og hva det ikke fanger opp.',
          'Vurder ulikhet, miljoe, fritid og uformell oekonomi.',
        ],
        solution: 'Styrker: (1) Gir et objektivt og sammenlignbart maal paa oekonomisk aktivitet, (2) korrelerer med mange andre velstandsindikatorer som helse og utdanning, (3) er enkelt aa beregne og sammenligne mellom land. Svakheter: (1) Fanger ikke opp inntektsfordeling og ulikhet, (2) inkluderer ikke verdien av fritid eller ubetalt arbeid, (3) tar ikke hensyn til miljoeforringelse eller bruk av naturressurser, (4) fanger ikke opp uformell oekonomi eller svart arbeid.',
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
        task: 'Norge befinner seg i en lavkonjunktur med stigende arbeidsledighet og negativt produksjonsgap. Forklar hvilke finanspolitiske og pengepolitiske tiltak myndighetene kan sette inn, og droeft mulige konsekvenser av disse tiltakene.',
        hints: [
          'Skill mellom finanspolitikk (statsbudsjettet) og pengepolitikk (Norges Bank).',
          'Tenk paa baade kortsiktige og langsiktige virkninger.',
        ],
        solution: 'Finanspolitiske tiltak: Oeke offentlige utgifter (infrastruktur, offentlige tjenester) og/eller senke skatter for aa stimulere ettersporselen. Pengepolitiske tiltak: Norges Bank kan senke styringsrenten for aa stimulere laaneopptak og investeringer. Konsekvenser: Paa kort sikt oeker ettersporselen og ledigheten faller. Paa lengre sikt kan ekspansiv politikk foere til inflasjonspress, hoeyere statsgjeld og svekkelse av konkurranseevnen. Handlingsregelen begrenser bruken av oljepenger i finanspolitikken.',
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
  description: 'Keynes sin teori om samlet ettersporsel, multiplikatoreffekten og statens rolle i aa stabilisere oekonomien.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjore rede for keynesiansk oekonomisk teori',
    'beregne og tolke multiplikatoreffekter',
  ],
  content: [
    {
      id: 'sf2-1-2-intro',
      type: 'text',
      content: `# Keynesiansk modell

John Maynard Keynes revolusjonerte oekonomisk tenkning paa 1930-tallet med sin bok *The General Theory of Employment, Interest and Money*. Hans hovedbudskap var at markedet ikke alltid regulerer seg selv, og at oekonomien kan bli vaerende i likevekt med hoey arbeidsledighet.

## Bakgrunn: Den store depresjonen

Klassisk oekonomisk teori hevdet at markedet alltid ville vende tilbake til full sysselsetting. Men under depresjonen i 1930-aarene falt produksjonen dramatisk og arbeidsledigheten forble hoey i mange aar. Keynes argumenterte for at:

- **Ettersporselen styrer produksjonen** paa kort sikt
- Loenninger og priser er **stive nedover** og tilpasser seg ikke raskt nok
- Staten maa gripe inn med **aktiv finanspolitikk** for aa stabilisere oekonomien`,
    },
    {
      id: 'sf2-1-2-def-1',
      type: 'definition',
      title: 'Samlet ettersporsel (AD)',
      content: `**Samlet ettersporsel** (Aggregate Demand, AD) er den totale ettersporselen etter varer og tjenester i oekonomien:

$$AD = C + I + G + (X - M)$$

der:
- $C$ = privat konsum (avhenger av disponibel inntekt)
- $I$ = bruttoinvesteringer
- $G$ = offentlig konsum og investeringer
- $X - M$ = nettoeksport

I den keynesianske modellen antar vi at **tilbudet tilpasser seg ettersporselen** paa kort sikt, saa lenge det er ledig kapasitet i oekonomien.`,
    },
    {
      id: 'sf2-1-2-text-2',
      type: 'text',
      content: `## Konsumfunksjonen

Keynes foreslo at privat konsum avhenger av disponibel inntekt:

$$C = c_0 + c_1 \\cdot Y_d$$

der:
- $c_0$ = autonomt konsum (konsum uavhengig av inntekt)
- $c_1$ = marginal konsumtilboyelighet ($0 < c_1 < 1$)
- $Y_d$ = disponibel inntekt (inntekt etter skatt)

Den marginale konsumtilboyeligheten $c_1$ forteller hvor stor andel av en ekstra krone i inntekt som gaar til konsum. Hvis $c_1 = 0{,}8$, brukes 80 oere av hver ekstra krone paa konsum, mens 20 oere spares.`,
    },
    {
      id: 'sf2-1-2-def-2',
      type: 'definition',
      title: 'Multiplikatoreffekten',
      content: `**Multiplikatoreffekten** beskriver hvordan en initial endring i ettersporsel forsterkes gjennom oekonomien. Naar staten oeker sine utgifter med 1 milliard kroner, oeker BNP med mer enn 1 milliard.

**Multiplikatoren** i en enkel modell uten skatt og import:

$$m = \\frac{1}{1 - c_1}$$

Med skattesats $t$ og importandel $z$:

$$m = \\frac{1}{1 - c_1(1 - t) + z}$$

Jo hoeyere den marginale konsumtilboyeligheten, jo stoerre er multiplikatoren.`,
    },
    {
      id: 'sf2-1-2-example-1',
      type: 'example',
      title: 'Beregning av multiplikatoren',
      problem: 'I en oekonomi er marginal konsumtilboyelighet $c_1 = 0{,}8$, skattesatsen $t = 0{,}25$ og importandelen $z = 0{,}1$. Beregn multiplikatoren og finn virkningen paa BNP av en oekning i offentlige utgifter paa 10 milliarder kroner.',
      solution: `**Loesning:**

Multiplikatoren:
$$m = \\frac{1}{1 - c_1(1 - t) + z} = \\frac{1}{1 - 0{,}8(1 - 0{,}25) + 0{,}1}$$

$$= \\frac{1}{1 - 0{,}8 \\cdot 0{,}75 + 0{,}1} = \\frac{1}{1 - 0{,}6 + 0{,}1} = \\frac{1}{0{,}5} = 2$$

Virkning paa BNP:
$$\\Delta Y = m \\cdot \\Delta G = 2 \\cdot 10 = 20 \\text{ mrd. kr}$$

En oekning i offentlige utgifter paa 10 milliarder kroner gir altsaa en BNP-oekning paa 20 milliarder kroner. Mekanismen er at oekte offentlige utgifter gir hoeyere inntekter, som oeker konsumet, som igjen gir hoeyere inntekter osv.`,
    },
    {
      id: 'sf2-1-2-text-3',
      type: 'text',
      content: `## Multiplikatorkjeden

La oss foelge en oekning i offentlige utgifter paa 100 gjennom oekonomien (med $c_1 = 0{,}8$ og uten skatt/import):

| Runde | Ettersporselsoekning | Akkumulert |
|-------|----------------------|------------|
| 1 | 100 | 100 |
| 2 | 80 | 180 |
| 3 | 64 | 244 |
| 4 | 51,2 | 295,2 |
| ... | ... | ... |
| Totalt | 500 | 500 |

Multiplikatoren er $\\frac{1}{1 - 0{,}8} = 5$, saa total virkning er $100 \\cdot 5 = 500$.

## Begrensninger ved keynesiansk modell

- Antar ledige ressurser (fungerer best i lavkonjunktur)
- Forenklet modell uten rente- og valutakurseffekter
- Ignorerer tilbudssiden av oekonomien
- Tidsforsinkelser (lags) i virkeligheten
- I en aapen oekonomi lekker mye ettersporsel ut gjennom import`,
    },
    {
      id: 'sf2-1-2-example-2',
      type: 'example',
      title: 'Spareparadokset',
      problem: 'Forklar Keynes sitt spareparadoks: Hvorfor kan oekt sparing paa individnivaa foere til lavere sparing paa samfunnsnivaa?',
      solution: `**Loesning:**

Paa individnivaa virker det fornuftig aa spare mer i usikre tider. Men i keynesiansk teori:

1. Naar alle sparer mer, faller konsumet ($C$ gaar ned)
2. Lavere konsum betyr lavere ettersporsel
3. Bedrifter selger mindre og kutter produksjonen
4. Lavere produksjon foerer til oppsigelser
5. Hoeyere ledighet gir lavere inntekter
6. Lavere inntekter kan bety at total sparing faktisk faller

Dette er et eksempel paa **sammensetningsfeilslutning**: Det som er rasjonelt for den enkelte, er ikke noedvendigvis bra for fellesskapet. Keynes brukte dette som argument for statlig motkonjunkturpolitikk.`,
    },
    {
      id: 'sf2-1-2-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er multiplikatoren naar marginal konsumtilboyelighet $c_1 = 0{,}75$ i en lukket oekonomi uten skatt?',
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
        task: 'Ifoelge keynesiansk teori, hva styrer produksjonen paa kort sikt naar det er ledig kapasitet?',
        options: [
          { id: 'a', text: 'Samlet ettersporsel', isCorrect: true },
          { id: 'b', text: 'Samlet tilbud', isCorrect: false },
          { id: 'c', text: 'Pengemengden alene', isCorrect: false },
          { id: 'd', text: 'Teknologisk utvikling', isCorrect: false },
        ],
        solution: 'I keynesiansk teori antar man at ettersporselen bestemmer produksjonen paa kort sikt, saa lenge det er ledig kapasitet. Bedrifter produserer det markedet etterspoer.',
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
        task: 'Konsumfunksjonen i en oekonomi er $C = 200 + 0{,}7 \\cdot Y_d$. Forklar hva tallene 200 og 0,7 betyr oekonomisk.',
        hints: ['Tenk paa hva som skjer med konsumet naar inntekten er null, og naar inntekten oeker med 100 kroner.'],
        solution: 'Tallet 200 er det autonome konsumet (c0), altsaa konsum som finner sted selv uten inntekt (for eksempel finansiert av sparing eller laan). Tallet 0,7 er den marginale konsumtilboyeligheten (c1), som betyr at for hver ekstra krone i disponibel inntekt, oeker konsumet med 70 oere. De resterende 30 oere spares.',
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
        task: 'I en oekonomi er $c_1 = 0{,}6$, $t = 0{,}3$ og $z = 0{,}15$. Beregn multiplikatoren og finn effekten paa BNP av en skattelette som oeker disponibel inntekt med 5 milliarder kroner.',
        hints: [
          'Bruk formelen for multiplikatoren med skatt og import.',
          'Husk at skattelette virker gjennom konsumleddet.',
        ],
        solution: 'Multiplikatoren: m = 1 / (1 - 0,6(1 - 0,3) + 0,15) = 1 / (1 - 0,42 + 0,15) = 1 / 0,73 = ca. 1,37. Virkning paa BNP: delta Y = 1,37 ganger 5 = ca. 6,85 milliarder kroner. Merk at skattelette har svakere multiplikatoreffekt enn direkte offentlige utgifter fordi noe av skatteletten spares.',
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
        task: 'Forklar spareparadokset med utgangspunkt i den keynesianske modellen. Bruk multiplikatoreffekten til aa vise hvordan oekt sparing paa individnivaa kan foere til lavere total inntekt.',
        hints: [
          'Tenk paa hva som skjer med konsumfunksjonen naar sparingen oeker.',
          'Hva skjer med multiplikatorkjeden naar c1 synker?',
        ],
        solution: 'Naar husholdningene oeker sparingen, synker den marginale konsumtilboyeligheten c1. Lavere c1 gir lavere multiplikator og dermed lavere samlet ettersporsel. Eksempel: Hvis c1 faller fra 0,8 til 0,6, faller multiplikatoren fra 5 til 2,5. Lavere ettersporsel gir lavere produksjon og inntekt, og ved lavere inntekt kan den totale sparingen faktisk bli lavere enn foer. Det som er rasjonelt for den enkelte (spare mer i usikre tider) kan vaere skadelig for oekonomien som helhet.',
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
        task: 'Droeft styrker og svakheter ved den keynesianske modellen. I hvilke situasjoner fungerer modellen best, og naar kommer den til kort?',
        hints: [
          'Tenk paa forutsetningene i modellen: ledige ressurser, stive priser, lukket/aapen oekonomi.',
          'Sammenlign med situasjoner med full kapasitetsutnyttelse.',
        ],
        solution: 'Styrker: Modellen forklarer godt hvordan oekonomien kan havne i lavkonjunktur og hvordan aktiv finanspolitikk kan motvirke dette. Den viser multiplikatoreffekter og sammensetningsfeilslutninger. Svakheter: Modellen antar ledige ressurser og stive priser, og fungerer daarlig naar oekonomien er naer full kapasitet. Den ignorerer tilbudssiden, rente- og valutakurseffekter, forventninger og tidsforsinkelser. I en aapen oekonomi som Norge reduseres multiplikatoreffekten av hoey importandel. Modellen passer best for aa analysere kortsiktige svingninger i en oekonomi med ledig kapasitet.',
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
  description: 'Aggregert ettersporsel og aggregert tilbud, makrooekonomisk likevekt og hvordan sjokk pavirker oekonomien.',
  estimatedMinutes: 20,
  competenceGoals: [
    'bruke AD-AS-modellen til aa analysere makrooekonomiske sammenhenger',
    'forklare hvordan tilbuds- og etterspoerselsjokk pavirker produksjon og prisnivaa',
  ],
  content: [
    {
      id: 'sf2-1-3-intro',
      type: 'text',
      content: `# AD-AS-modellen

AD-AS-modellen (Aggregate Demand - Aggregate Supply) er et sentralt verktoy i makrooekonomi. Den viser sammenhengen mellom prisnivaaet og samlet produksjon, og hvordan oekonomien finner sin likevekt.

## Hvorfor trenger vi AD-AS?

Den keynesianske modellen i forrige kapittel antok at prisnivaaet var konstant. I virkeligheten endrer prisene seg, og vi trenger en modell som inkluderer baade etterspoersels- og tilbudssiden. AD-AS-modellen gjor nettopp dette.

I diagrammet har vi:
- **Horisontal akse**: Reelt BNP ($Y$)
- **Vertikal akse**: Prisnivaa ($P$)`,
    },
    {
      id: 'sf2-1-3-def-1',
      type: 'definition',
      title: 'Aggregert ettersporsel (AD)',
      content: `**AD-kurven** viser sammenhengen mellom prisnivaaet og samlet ettersporsel etter varer og tjenester. AD-kurven heller nedover fordi:

1. **Formueseffekten**: Hoeyere prisnivaa reduserer realverdien av formue, som senker konsumet
2. **Renteeffekten**: Hoeyere prisnivaa oeker ettersporsel etter penger, som driver renten opp og reduserer investeringer
3. **Valutakurseffekten**: Hoeyere rente styrker valutaen, som gjor eksport dyrere og reduserer nettoeksport

AD-kurven skifter utover ved ekspansiv finans- eller pengepolitikk, og innover ved kontraktiv politikk.`,
    },
    {
      id: 'sf2-1-3-def-2',
      type: 'definition',
      title: 'Aggregert tilbud (AS)',
      content: `**AS-kurven** viser sammenhengen mellom prisnivaaet og samlet produksjon. Vi skiller mellom:

**Kortsiktig AS (SRAS)**: Stigende kurve fordi:
- Noen priser og loenninger er stive paa kort sikt
- Hoeyere prisnivaa gir hoeyere profittmarginer
- Bedrifter oeker produksjonen naar prisene stiger

**Langsiktig AS (LRAS)**: Vertikal linje ved potensiell produksjon fordi:
- Paa lang sikt tilpasses alle priser og loenninger
- Produksjonen bestemmes av realfaktorer (arbeidskraft, kapital, teknologi)
- Potensiell produksjon er uavhengig av prisnivaaet`,
    },
    {
      id: 'sf2-1-3-text-2',
      type: 'text',
      content: `## Makrooekonomisk likevekt

Likevekt i AD-AS-modellen oppstaar der AD-kurven krysser AS-kurven. I krysningspunktet er:
- Samlet ettersporsel lik samlet tilbud
- Prisnivaaet og produksjonen bestemt simultant

### Kortsiktig vs. langsiktig likevekt

**Kortsiktig likevekt**: Der AD krysser SRAS. Produksjonen kan vaere over eller under potensiell produksjon.

**Langsiktig likevekt**: Der AD krysser baade SRAS og LRAS. Produksjonen er lik potensiell produksjon, og det er ingen tendens til endring.

Naar kortsiktig likevekt avviker fra langsiktig likevekt, vil loenns- og pristilpasninger gradvis foere oekonomien tilbake.`,
    },
    {
      id: 'sf2-1-3-example-1',
      type: 'example',
      title: 'Etterspoerselsjokk',
      problem: 'Vis med AD-AS-modellen hva som skjer naar regjeringen oeker offentlige utgifter betydelig (positivt etterspoerselsjokk). Analyser baade kortsiktige og langsiktige virkninger.',
      solution: `**Loesning:**

**Kortsiktig virkning:**
1. AD-kurven skifter utover (til hoeyre)
2. Ny kortsiktig likevekt: hoeyere produksjon ($Y > Y^*$) og hoeyere prisnivaa
3. Positivt produksjonsgap oppstaar
4. Arbeidsledigheten faller under det naturlige nivaaet

**Langsiktig tilpasning:**
1. Hoeyere ettersporsel etter arbeidskraft presser loennene opp
2. Hoeyere loennskostnader skifter SRAS-kurven oppover (til venstre)
3. Produksjonen faller tilbake mot potensiell produksjon
4. Prisnivaaet stiger ytterligere

**Sluttresultat**: Paa lang sikt er produksjonen tilbake paa potensiell produksjon, men prisnivaaet er permanent hoeyere. Den ekspansive finanspolitikken har kun prisvirkninger paa lang sikt.`,
    },
    {
      id: 'sf2-1-3-text-3',
      type: 'text',
      content: `## Tilbudssjokk

Et **negativt tilbudssjokk** (f.eks. oljeprissjokk, pandemi, krig) skifter SRAS-kurven oppover:
- Produksjonen faller og prisnivaaet stiger
- Denne kombinasjonen kalles **stagflasjon**
- Myndighetene staar overfor et dilemma: stimulere ettersporselen (oeker inflasjonen) eller bekjempe inflasjon (forverrer nedgangen)

Et **positivt tilbudssjokk** (f.eks. teknologisk gjennombrudd, fallende energipriser):
- SRAS skifter nedover
- Produksjonen oeker og prisnivaaet faller
- Dette er den ideelle situasjonen for en oekonomi

## Politikkimplikasjoner

AD-AS-modellen viser at:
- **Etterspoerselspolitikk** kan pavirke produksjonen paa kort sikt, men bare prisnivaaet paa lang sikt
- **Tilbudspolitikk** (utdanning, infrastruktur, innovasjon) kan oeke potensiell produksjon permanent
- Valg av politikk avhenger av typen sjokk og tidshorisonten`,
    },
    {
      id: 'sf2-1-3-example-2',
      type: 'example',
      title: 'Stagflasjon',
      problem: 'Forklar med AD-AS-modellen hvorfor OPEC-landenes oljeprisoekning paa 1970-tallet skapte stagflasjon i vestlige oekonomier.',
      solution: `**Loesning:**

1. **Sjokket**: OPEC firedoblet oljeprisen i 1973. Olje var en viktig innsatsfaktor i nesten all produksjon.

2. **Virkning i AD-AS-modellen**:
   - Hoeyere oljepris oekte produksjonskostnadene for bedrifter
   - SRAS-kurven skiftet oppover (til venstre)
   - Ny likevekt: Lavere produksjon ($Y < Y^*$) OG hoeyere prisnivaa

3. **Stagflasjon**: Kombinasjonen av stagnasjon (lav vekst, hoey ledighet) og inflasjon (stigende priser). Dette var et problem som den keynesianske modellen hadde vanskelig for aa forklare.

4. **Politikkdilemma**:
   - Ekspansiv politikk ville oeke ettersporselen og redusere ledigheten, men ogsaa forsterke inflasjonen
   - Kontraktiv politikk ville dempe inflasjonen, men forverret resesjonen
   - Mange land valgte aa stimulere oekonomien, noe som foerte til langvarig hoey inflasjon`,
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
          { id: 'a', text: 'Paa grunn av formueseffekten, renteeffekten og valutakurseffekten', isCorrect: true },
          { id: 'b', text: 'Fordi hoeyere priser alltid betyr lavere kvalitet', isCorrect: false },
          { id: 'c', text: 'Fordi staten alltid senker skattene naar prisene stiger', isCorrect: false },
          { id: 'd', text: 'Fordi tilbudet alltid oeker naar prisene stiger', isCorrect: false },
        ],
        solution: 'AD-kurven heller nedover paa grunn av tre effekter: Formueseffekten (hoeyere priser reduserer real formue), renteeffekten (hoeyere priser driver renten opp) og valutakurseffekten (hoeyere rente styrker valutaen og svekker nettoeksporten).',
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
          { id: 'a', text: 'Kombinasjonen av hoey inflasjon og lav oekonomisk vekst (eller resesjon)', isCorrect: true },
          { id: 'b', text: 'Hoey oekonomisk vekst og lav inflasjon', isCorrect: false },
          { id: 'c', text: 'Lav inflasjon og lav arbeidsledighet', isCorrect: false },
          { id: 'd', text: 'Deflasjon og hoey oekonomisk vekst', isCorrect: false },
        ],
        solution: 'Stagflasjon er kombinasjonen av stagnasjon (lav eller negativ vekst, hoey ledighet) og inflasjon (stigende priser). Det oppstaar typisk ved negative tilbudssjokk, som oljeprissjokk.',
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
        hints: ['Tenk paa hva som er stivt paa kort sikt og fleksibelt paa lang sikt.'],
        solution: 'SRAS stiger fordi noen priser og loenninger er stive paa kort sikt. Naar prisnivaaet stiger, oeker profittmarginene og bedrifter produserer mer. LRAS er vertikal fordi alle priser og loenninger er fullt fleksible paa lang sikt. Produksjonen bestemmes da kun av realfaktorer som arbeidskraft, kapitalbeholdning og teknologi, uavhengig av prisnivaaet. LRAS representerer potensiell produksjon.',
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
        task: 'Bruk AD-AS-modellen til aa analysere virkningen av en rentenedsettelse fra Norges Bank. Beskriv hva som skjer paa kort og lang sikt.',
        hints: [
          'Lavere rente pavirker foerst ettersporselen.',
          'Tenk paa hva som skjer med investeringer, konsum og valutakurs.',
        ],
        solution: 'Kort sikt: Lavere rente stimulerer investeringer og konsum, og svekker kronekursen (som oeker nettoeksporten). AD-kurven skifter utover. Ny kortsiktig likevekt har hoeyere produksjon og noe hoeyere prisnivaa. Lang sikt: Oekt ettersporsel presser loenninger og kostnader opp. SRAS skifter oppover. Produksjonen vender tilbake til potensiell produksjon, men prisnivaaet er permanent hoeyere. Pengepolitikk er noytralt paa lang sikt.',
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
        task: 'En oekonomi rammes av et negativt tilbudssjokk (f.eks. en global energikrise). Analyser med AD-AS-modellen hvilke politikkalternativer myndighetene har, og droeft fordeler og ulemper ved hvert alternativ.',
        hints: [
          'Et negativt tilbudssjokk skifter SRAS oppover.',
          'Myndighetene kan velge mellom aa gjore ingenting, stimulere ettersporselen eller stramme inn.',
        ],
        solution: 'Ved negativt tilbudssjokk skifter SRAS oppover: produksjonen faller og prisene stiger (stagflasjon). Alternativ 1: Ekspansiv politikk (skift AD utover) stabiliserer produksjonen, men forsterker inflasjonen. Alternativ 2: Kontraktiv politikk (skift AD innover) demper inflasjonen, men forverrer resesjonen. Alternativ 3: Ingenting - la oekonomien tilpasse seg selv. Loenninger faller gradvis, SRAS skifter tilbake. Valget avhenger av hva myndighetene prioriterer: sysselsetting eller prisstabilitet.',
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
        task: 'Sammenlign den keynesianske modellen fra kapittel 1.2 med AD-AS-modellen. Hvilke fordeler gir AD-AS-modellen? Gi eksempler paa fenomener som AD-AS kan forklare, men som den enkle keynesianske modellen ikke kan.',
        hints: [
          'Tenk paa prisnivaaets rolle i de to modellene.',
          'Vurder begrensningene i den keynesianske modellen.',
        ],
        solution: 'Den keynesianske modellen antar fast prisnivaa og fokuserer paa ettersporselen. AD-AS-modellen inkluderer baade tilbuds- og etterspoerselssiden og lar prisnivaaet variere. Fordeler med AD-AS: (1) Kan analysere inflasjon og prisendringer, (2) kan forklare stagflasjon (tilbudssjokk), (3) skiller mellom kortsiktige og langsiktige virkninger, (4) viser at etterspoerselspolitikk kun pavirker prisnivaaet paa lang sikt. Fenomener AD-AS kan forklare men ikke Keynes: stagflasjon, langsiktig noeytralitet av pengemengden, og tilbudssjokk.',
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
    'bruke IS-LM-modellen til aa analysere virkningen av finans- og pengepolitikk',
    'forklare samspillet mellom vare- og pengemarkedet',
  ],
  content: [
    {
      id: 'sf2-1-4-intro',
      type: 'text',
      content: `# IS-LM-modellen

IS-LM-modellen ble utviklet av John Hicks i 1937 som en formalisering av Keynes sine ideer. Modellen viser hvordan varemarkedet og pengemarkedet bestemmer renten og produksjonen simultant.

## To markeder, to kurver

Modellen bestaar av to kurver i et diagram med:
- **Horisontal akse**: Reelt BNP ($Y$)
- **Vertikal akse**: Realrente ($r$)

**IS-kurven** representerer likevekt i varemarkedet (investering = sparing).
**LM-kurven** representerer likevekt i pengemarkedet (likviditetsettersporsel = pengemengde).

Der de to kurvene krysser, er baade varemarkedet og pengemarkedet i likevekt simultant.`,
    },
    {
      id: 'sf2-1-4-def-1',
      type: 'definition',
      title: 'IS-kurven',
      content: `**IS-kurven** (Investment-Saving) viser alle kombinasjoner av rente ($r$) og produksjon ($Y$) som gir likevekt i varemarkedet.

IS-kurven heller **nedover** fordi:
- Hoeyere rente reduserer investeringer og rentesensitivt konsum
- Lavere investeringer og konsum gir lavere samlet ettersporsel
- Lavere ettersporsel gir lavere likevektsproduksjon

**IS-kurven skifter utover** ved:
- Oekning i offentlige utgifter ($G$)
- Skattelettelser
- Oekt eksport eller oekt forbrukertillit`,
    },
    {
      id: 'sf2-1-4-def-2',
      type: 'definition',
      title: 'LM-kurven',
      content: `**LM-kurven** (Liquidity-Money) viser alle kombinasjoner av rente ($r$) og produksjon ($Y$) som gir likevekt i pengemarkedet.

LM-kurven heller **oppover** fordi:
- Hoeyere produksjon oeker transaksjonsettersporsel etter penger
- For aa opprettholde likevekt i pengemarkedet maa renten stige
- Hoeyere rente reduserer spekulativ ettersporsel etter penger

**LM-kurven skifter nedover** ved:
- Oekning i pengemengden (ekspansiv pengepolitikk)
- Reduksjon i ettersporsel etter penger

I moderne pengepolitikk, der sentralbanken setter renten direkte, kan LM-kurven betraktes som en horisontal linje ved den fastsatte renten.`,
    },
    {
      id: 'sf2-1-4-text-2',
      type: 'text',
      content: `## IS-LM-likevekt

Likevekten i IS-LM-modellen bestemmer baade renten og produksjonen simultant. I krysningspunktet:
- Varemarkedet er i likevekt (planlagt ettersporsel = produksjon)
- Pengemarkedet er i likevekt (ettersporsel etter penger = tilbudt pengemengde)

### Tilpasning til likevekt

Hvis oekonomien er utenfor likevekt, virker markedsmekanismene:
- **Utenfor IS-kurven**: Ulikevekt i varemarkedet foerer til lagerjusteringer
- **Utenfor LM-kurven**: Ulikevekt i pengemarkedet foerer til rentejusteringer
- Rentejusteringer skjer typisk raskere enn produksjonsjusteringer`,
    },
    {
      id: 'sf2-1-4-example-1',
      type: 'example',
      title: 'Ekspansiv finanspolitikk i IS-LM',
      problem: 'Vis med IS-LM-modellen hva som skjer naar regjeringen oeker offentlige utgifter. Sammenlign effekten med den enkle keynesianske multiplikatoren.',
      solution: `**Loesning:**

1. **IS-kurven skifter utover**: Oekte offentlige utgifter oeker samlet ettersporsel ved ethvert rentenivaa.

2. **Ny likevekt**: Hoeyere produksjon ($Y$) OG hoeyere rente ($r$).

3. **Fortreningseffekten (crowding out)**: Hoeyere produksjon oeker ettersporsel etter penger, som presser renten opp. Hoeyere rente reduserer private investeringer. Dermed fortrenger offentlige utgifter noe av den private investeringen.

4. **Sammenligning med keynesiansk multiplikator**: I den enkle keynesianske modellen (uten pengemarkeder) er multiplikatoreffekten stoerre fordi man ignorerer renteokningen. IS-LM viser at den reelle BNP-okningen er mindre enn hva den enkle multiplikatoren tilsier, nettopp paa grunn av fortreningseffekten.`,
    },
    {
      id: 'sf2-1-4-text-3',
      type: 'text',
      content: `## Finanspolitikk vs. pengepolitikk

### Finanspolitikk i IS-LM
- Skifter IS-kurven
- Ekspansiv: IS skifter hoeyre (oekte utgifter/skattelette)
- Gir hoeyere $Y$ og hoeyere $r$
- Delvis fortrenging av private investeringer

### Pengepolitikk i IS-LM
- Skifter LM-kurven
- Ekspansiv: LM skifter nedover (hoeyere pengemengde/lavere rente)
- Gir hoeyere $Y$ og lavere $r$
- Stimulerer private investeringer

### Kombinasjon av politikk
Myndighetene kan kombinere finans- og pengepolitikk:
- Ekspansiv finanspolitikk + ekspansiv pengepolitikk = sterk BNP-oekning
- Ekspansiv finanspolitikk + kontraktiv pengepolitikk = hoeyere rente, usikker BNP-effekt
- Denne kombinasjonen kalles noen ganger "policy mix"`,
    },
    {
      id: 'sf2-1-4-example-2',
      type: 'example',
      title: 'Likviditetsfellen',
      problem: 'Forklar hva en likviditetsfelle er, og hvorfor den gjor pengepolitikk ineffektiv.',
      solution: `**Loesning:**

**Likviditetsfellen** oppstaar naar renten er saa lav (naer null) at:

1. Folk er likegyldige mellom aa holde penger og obligasjoner (begge gir naer null avkastning)
2. LM-kurven blir tilnaermet horisontal
3. Oekning i pengemengden absorberes bare som oekte kassebeholdninger
4. Renten kan ikke falle ytterligere

**Konsekvenser:**
- Pengepolitikk blir ineffektiv: Mer penger i omloep endrer ikke renten
- Finanspolitikk er ekstra effektiv: IS-skiftet gir full multiplikatoreffekt uten fortreningseffekt
- Japan paa 1990-2000-tallet og mange vestlige land etter finanskrisen 2008 opplevde dette

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
          { id: 'a', text: 'Fordi hoeyere rente reduserer investeringer og dermed produksjonen', isCorrect: true },
          { id: 'b', text: 'Fordi hoeyere produksjon oeker ettersporsel etter penger', isCorrect: false },
          { id: 'c', text: 'Fordi sentralbanken senker renten naar produksjonen stiger', isCorrect: false },
          { id: 'd', text: 'Fordi det er inflasjon naar produksjonen stiger', isCorrect: false },
        ],
        solution: 'IS-kurven heller nedover fordi hoeyere rente gjor det dyrere aa laane og investere. Lavere investeringer reduserer samlet ettersporsel, som gir lavere likevektsproduksjon. Altsaa: hoeyere rente gir lavere Y langs IS-kurven.',
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
        task: 'Hva skjer med IS-LM-likevekten naar sentralbanken senker renten (ekspansiv pengepolitikk)?',
        options: [
          { id: 'a', text: 'LM skifter nedover, produksjonen oeker og renten faller', isCorrect: true },
          { id: 'b', text: 'IS skifter utover, produksjonen oeker og renten stiger', isCorrect: false },
          { id: 'c', text: 'Baade IS og LM skifter utover', isCorrect: false },
          { id: 'd', text: 'LM skifter oppover, produksjonen faller', isCorrect: false },
        ],
        solution: 'Ekspansiv pengepolitikk (oekt pengemengde eller lavere styringsrente) skifter LM-kurven nedover. I ny likevekt er renten lavere og produksjonen hoeyere. Lavere rente stimulerer investeringer og konsum.',
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
        task: 'Forklar hva fortreningseffekten (crowding out) er i IS-LM-modellen, og hvorfor den oppstaar ved ekspansiv finanspolitikk.',
        hints: ['Foelg virkningskjeden fra oekte offentlige utgifter til hoeyere rente og lavere private investeringer.'],
        solution: 'Fortreningseffekten oppstaar naar oekte offentlige utgifter oeker produksjonen, som oeker ettersporsel etter penger, som presser renten opp. Hoeyere rente gjor det dyrere for bedrifter aa investere og for husholdninger aa laane. Dermed fortrenger offentlige utgifter en del private investeringer. Effekten av finanspolitikk paa BNP blir derfor mindre enn hva den enkle keynesianske multiplikatoren tilsier.',
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
          'Tenk paa hva som skjer med LM-kurven naar renten allerede er naer null.',
          'Vurder om fortreningseffekten er til stede i en likviditetsfelle.',
        ],
        solution: 'I en likviditetsfelle er renten naer null og LM-kurven er tilnaermet horisontal. Oekning i pengemengden absorberes som oekte kassebeholdninger uten at renten faller, saa pengepolitikk har ingen effekt. Finanspolitikk er derimot spesielt effektiv fordi IS-kurven skifter utover uten at renten stiger (LM er flat). Det betyr ingen fortreningseffekt, og den fulle keynesianske multiplikatoren slaar inn.',
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
        task: 'Regjeringen vil oeke BNP uten aa endre rentenivaaet. Forklar med IS-LM-modellen hvilken kombinasjon av finans- og pengepolitikk som kan oppnaa dette.',
        hints: [
          'Finanspolitikk skifter IS og gir hoeyere rente. Pengepolitikk skifter LM og gir lavere rente.',
          'Kan man kombinere de to slik at renteeffektene oppveier hverandre?',
        ],
        solution: 'For aa oeke BNP uten renteendring trenger man samtidig ekspansiv finanspolitikk (IS skifter utover, gir hoeyere Y og hoeyere r) og ekspansiv pengepolitikk (LM skifter nedover, gir hoeyere Y og lavere r). Naar begge gjennomfoeres samtidig, oeker produksjonen kraftig, mens renteeffektene oppveier hverandre. Denne strategien eliminerer ogsaa fortreningseffekten, saa baade offentlige og private investeringer kan oeke.',
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
        task: 'Sammenlign IS-LM-modellen med AD-AS-modellen. Hvilke spoersmaal er IS-LM best egnet til aa besvare, og hvilke er AD-AS bedre paa? Droeft ogsaa begrensninger ved IS-LM-modellen.',
        hints: [
          'Tenk paa hva som er endogent (bestemt i modellen) i de to modellene.',
          'Hva skjer med prisnivaaet i IS-LM?',
        ],
        solution: 'IS-LM er best til aa analysere samspillet mellom finans- og pengepolitikk og hvordan renten og produksjonen bestemmes simultant. Den viser fortreningseffekten og likviditetsfellen. AD-AS er bedre til aa analysere prisnivaaendringer, inflasjon, stagflasjon og langsiktige tilpasninger. Begrensninger ved IS-LM: (1) Antar fast prisnivaa, (2) skiller ikke mellom kort og lang sikt, (3) forutsetter at sentralbanken styrer pengemengden (moderne sentralbanker styrer renten), (4) ignorerer forventninger og internasjonale kapitalstroemmer.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 1.5: Oekonomisk vekst
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_1_5: TextbookChapter = {
  id: 'samfokonomi-2-1-5',
  courseId: 'samfokonomi-2',
  chapterNumber: '1.5',
  title: 'Oekonomisk vekst',
  description: 'Solow-modellen, vekstfaktorer, humankapital og hva som bestemmer langsiktig oekonomisk vekst.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjore rede for teorier om oekonomisk vekst',
    'analysere faktorer som pavirker langsiktig vekst, inkludert humankapital og teknologi',
  ],
  content: [
    {
      id: 'sf2-1-5-intro',
      type: 'text',
      content: `# Oekonomisk vekst

Mens de foregaaende kapitlene handlet om kortsiktige svingninger (konjunkturer), ser vi naa paa det mest fundamentale spoersmalet i makrooekonomi: **Hva bestemmer langsiktig oekonomisk vekst?**

## Hvorfor er vekst viktig?

Selv smaa forskjeller i veksttakt gir enorme utslag over tid. Med 2 prosent aarlig vekst dobles BNP per innbygger paa 35 aar. Med 1 prosent tar det 70 aar. Denne rentes-rente-effekten forklarer hvorfor noen land er rike og andre fattige.

## Vekstfaktorer

Oekonomisk vekst bestemmes av:
- **Fysisk kapital**: Maskiner, bygninger, infrastruktur
- **Arbeidskraft**: Antall arbeidstagere og arbeidstimer
- **Humankapital**: Utdanning, kompetanse og erfaring
- **Teknologi**: Innovasjon, forskning og utvikling
- **Institusjoner**: Rettsstat, eiendomsrett, korrupsjonsnivaa`,
    },
    {
      id: 'sf2-1-5-def-1',
      type: 'definition',
      title: 'Solow-modellen',
      content: `**Solow-modellen** (Robert Solow, 1956) er den mest kjente modellen for oekonomisk vekst. Hovedresultatene er:

**Produksjonsfunksjon**: $Y = A \\cdot f(K, L)$
der $Y$ = produksjon, $A$ = teknologinivaa (total faktorproduktivitet), $K$ = kapital, $L$ = arbeidskraft.

**Sentrale innsikter**:
1. **Avtagende grensenytte av kapital**: Ekstra kapital gir stadig mindre ekstra produksjon
2. **Stabil likevekt (steady state)**: Oekonomien konvergerer mot et stabilt kapitalnivaa per arbeider
3. **Bare teknologisk fremgang driver varig vekst**: Kapitalakkumulasjon alene gir ikke varig vekst paa grunn av avtagende grensenytte
4. **Konvergens**: Fattigere land vokser raskere enn rike (betinget konvergens)`,
    },
    {
      id: 'sf2-1-5-text-2',
      type: 'text',
      content: `## Steady state i Solow-modellen

I Solow-modellen konvergerer oekonomien mot en **steady state** der kapital per arbeider er konstant. I steady state:

- Investeringene er akkurat store nok til aa erstatte slitasje (depresiering)
- $s \\cdot f(k) = (\\delta + n) \\cdot k$

der:
- $s$ = spareraten
- $k$ = kapital per arbeider ($K/L$)
- $\\delta$ = depresieringsrate
- $n$ = befolkningsvekst

### Veien til steady state

Hvis $k$ er under steady state, er investeringene stoerre enn depresiering pluss befolkningsvekst, og $k$ oeker. Hvis $k$ er over steady state, er investeringene mindre enn behovet, og $k$ synker. Oekonomien konvergerer alltid mot steady state.

### Effekten av hoeyere sparerate

En permanent oekning i spareraten gir:
- **Midlertidig** oekt veksttakt (mens oekonomien beveger seg mot ny steady state)
- **Permanent** hoeyere nivaa paa BNP per innbygger
- Men **ikke** permanent hoeyere veksttakt`,
    },
    {
      id: 'sf2-1-5-def-2',
      type: 'definition',
      title: 'Humankapital',
      content: `**Humankapital** er den oekonomiske verdien av arbeidernes kunnskaper, ferdigheter og erfaring. I motsetning til fysisk kapital er humankapital knyttet til enkeltpersoner.

Humankapital oeker gjennom:
- **Formell utdanning**: Grunnskole, videregaaende, hoeyere utdanning
- **Opplaering paa arbeidsplassen**: Kurs, internopplaering, mentoring
- **Laering gjennom praksis**: Erfaring og kompetanse opparbeidet over tid
- **Helse**: Bedre helse gir mer produktive arbeidere

I utvidede vekstmodeller inkluderes humankapital ($H$):
$$Y = A \\cdot f(K, H, L)$$

Investeringer i humankapital har typisk hoey avkastning, saerlig i utviklingsland.`,
    },
    {
      id: 'sf2-1-5-example-1',
      type: 'example',
      title: 'Vekstmiraklene i Oest-Asia',
      problem: 'Soer-Korea hadde i 1960 et BNP per innbygger paa linje med mange afrikanske land. I dag er det blant verdens rikeste land. Forklar dette vekstmirakelet med utgangspunkt i vekstteorien.',
      solution: `**Loesning:**

Soer-Koreas vekstmirakel kan forklares med flere faktorer fra vekstteorien:

1. **Hoey sparerate og investering**: Spareraten laa paa 30-40 prosent av BNP, langt over de fleste land. Ifoelge Solow gir dette hoeyere steady state.

2. **Massiv investering i humankapital**: Fra 1960 til 2000 oekte andelen med hoeyere utdanning dramatisk. Dette oekte produktiviteten i arbeidsstyrken.

3. **Teknologisk fremgang**: Korea gikk fra imitasjon til innovasjon. Selskaper som Samsung og Hyundai ble teknologiledere.

4. **Gode institusjoner**: Sterk stat som beskyttet eiendomsrett, satset paa eksportrettet industripolitikk og investerte i utdanning.

5. **Konvergenseffekten**: Som et fattig land var Korea langt under sin potensielle steady state, noe som ga rask kapitalakkumulasjon og hoey vekst.

Koreas eksempel viser at Solow-modellens faktorer (kapital, humankapital, teknologi, institusjoner) alle spilte en rolle.`,
    },
    {
      id: 'sf2-1-5-text-3',
      type: 'text',
      content: `## Teknologisk fremgang og endogen vekst

I Solow-modellen er teknologisk fremgang **eksogen** - den faller fra himmelen. **Endogen vekstteori** (Paul Romer, 1990) forsoeker aa forklare hva som driver innovasjon:

### Sentrale ideer
- **Kunnskap som innsatsfaktor**: Kunnskap har oekende skalautbytte (ikke avtagende grensenytte)
- **Kunnskapsspredning**: Innovasjon i en bedrift har positive ringvirkninger for andre
- **Forskning og utvikling (FoU)**: Bevisste investeringer i ny kunnskap driver veksten
- **Humankapital**: Utdannede arbeidere er mer innovative

### Implikasjoner for politikk
Endogen vekstteori antyder at myndighetene kan pavirke vekstraten gjennom:
- Stoette til forskning og utvikling
- Investering i utdanning og helse
- Beskyttelse av immaterielle rettigheter (patenter)
- Aapenhet for internasjonal handel og kunnskapsutveksling

## Vekst og baerekraft

Oekonomisk vekst maalt i BNP tar ikke hensyn til miljoe. Moderne oekonomisk tenkning vektlegger **groen vekst** og **baerekraftig utvikling**, der man soeker vekst som ikke gaar paa bekostning av fremtidige generasjoners muligheter.`,
    },
    {
      id: 'sf2-1-5-example-2',
      type: 'example',
      title: 'Spareraten og steady state',
      problem: 'To land, A og B, er identiske bortsett fra spareraten. Land A har sparerate $s_A = 0{,}2$ og land B har $s_B = 0{,}4$. Forklar med Solow-modellen hva forskjellen betyr for de to landene paa kort og lang sikt.',
      solution: `**Loesning:**

**Steady state**: Land B har hoeyere sparerate og vil derfor konvergere mot en hoeyere steady-state kapital per arbeider. Det betyr hoeyere BNP per innbygger i likevekt.

**Kort sikt**: Hvis begge land starter fra lav kapital, vil land B vokse raskere fordi det investerer en stoerre andel av produksjonen.

**Lang sikt**: Begge land naar sine respektive steady states. I steady state vokser begge med samme rate (bestemt av teknologisk fremgang). Men land B har permanent hoeyere BNP per innbygger.

**Viktig poeng**: Hoeyere sparerate gir hoeyere **nivaa** paa BNP per innbygger, men ikke hoeyere **veksttakt** paa lang sikt. Bare teknologisk fremgang kan drive varig vekst.

**Trade-off**: Hoeyere sparing betyr lavere konsum i dag for hoeyere konsum i fremtiden. Den optimale spareraten (den gylne regel) balanserer dagens og fremtidens konsum.`,
    },
    {
      id: 'sf2-1-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-1-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'I Solow-modellen, hva er den eneste kilden til varig oekonomisk vekst per innbygger?',
        options: [
          { id: 'a', text: 'Teknologisk fremgang', isCorrect: true },
          { id: 'b', text: 'Hoeyere sparerate', isCorrect: false },
          { id: 'c', text: 'Befolkningsvekst', isCorrect: false },
          { id: 'd', text: 'Mer fysisk kapital', isCorrect: false },
        ],
        solution: 'I Solow-modellen gir kapitalakkumulasjon avtagende grensenytte, saa mer kapital alene gir ikke varig vekst. Bare teknologisk fremgang (total faktorproduktivitet, A) kan drive varig vekst i BNP per innbygger.',
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
          { id: 'a', text: 'Land med like fundamentale forhold konvergerer mot samme inntektsnivaa, saa fattigere land vokser raskest', isCorrect: true },
          { id: 'b', text: 'Alle land i verden konvergerer automatisk mot samme BNP', isCorrect: false },
          { id: 'c', text: 'Rike land vokser alltid raskere enn fattige land', isCorrect: false },
          { id: 'd', text: 'Konvergens bare skjer naar landene handler med hverandre', isCorrect: false },
        ],
        solution: 'Betinget konvergens betyr at land med like fundamentale forhold (sparerate, utdanning, institusjoner) konvergerer mot samme steady state. Fattigere land som er lenger unna sin steady state vokser da raskere. Ubetinget konvergens (at alle land konvergerer uavhengig av forutsetninger) stoettes ikke av data.',
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
        task: 'Forklar hva som menes med steady state i Solow-modellen og hva som skjer naar et land oeker sin sparerate permanent.',
        hints: ['Tegn en graf med investering og depresiering som funksjoner av kapital per arbeider.'],
        solution: 'Steady state er den langsiktige likevekten der kapital per arbeider er konstant. Nye investeringer er akkurat nok til aa erstatte slitasje og utvidet befolkning. Naar spareraten oeker, stiger investeringskurven. Paa kort sikt er investeringene stoerre enn behovet, saa kapital per arbeider oeker. Oekonomien vokser midlertidig raskere til den naar en ny, hoeyere steady state. I den nye steady state er BNP per innbygger hoeyere, men veksttakten er tilbake paa normalt nivaa.',
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
        task: 'Forklar tre maater humankapital bidrar til oekonomisk vekst, og gi konkrete eksempler for hvert punkt.',
        hints: [
          'Tenk paa direkte produktivitetseffekter, innovasjon og spredningseffekter.',
        ],
        solution: '(1) Oekt arbeidsproduktivitet: Utdannede arbeidere produserer mer per time. Eksempel: En ingenioer kan bruke avansert utstyr mer effektivt. (2) Innovasjon: Hoeyere utdanning oeker evnen til forskning og utvikling. Eksempel: Forskere ved universiteter og i naeringslivet utvikler nye produkter og prosesser. (3) Teknologiadopsjon: Humankapital gjor det lettere aa ta i bruk ny teknologi utviklet andre steder. Eksempel: IT-kyndige arbeidere kan raskt implementere nye digitale loesninger i bedriften.',
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
        task: 'Sammenlign Solow-modellen med endogen vekstteori. Hva er den viktigste forskjellen i synet paa teknologisk fremgang, og hvilke politikkimplikasjoner foelger av hver teori?',
        hints: [
          'I Solow er teknologi eksogen. I endogen vekstteori er den et resultat av bevisste valg.',
          'Tenk paa hva myndighetene kan gjore for aa pavirke veksten i de to modellene.',
        ],
        solution: 'I Solow-modellen er teknologisk fremgang eksogen, noe som betyr at myndighetene ikke kan pavirke den langsiktige vekstraten. Politikk kan bare pavirke inntektsnivaaet (gjennom sparerate, utdanning). I endogen vekstteori er innovasjon et resultat av bevisste investeringer i FoU og humankapital. Myndighetene kan dermed pavirke vekstraten permanent gjennom stoette til forskning, utdanning, patentbeskyttelse og kunnskapsspredning. Implikasjon: Endogen vekstteori gir stoerre rolle for aktiv naerings- og utdanningspolitikk.',
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
        task: 'Droeft hvordan Norge kan opprettholde oekonomisk vekst naar olje- og gassinntektene avtar. Bruk vekstteori til aa analysere hvilke faktorer som er viktigst for norsk oekonomisk vekst fremover.',
        hints: [
          'Bruk Solow-modellens vekstfaktorer som rammeverk.',
          'Tenk paa Norges komparative fortrinn og utfordringer.',
        ],
        solution: 'Med utgangspunkt i vekstteorien: (1) Humankapital: Norge har allerede hoey utdanning, men maa fortsette aa investere i kompetanse tilpasset fremtidens naeringsliv (digitalisering, groen teknologi). (2) Teknologi og innovasjon: Satse paa FoU i nye naeringer som kan erstatte olje (havvind, havbruk, IT). Endogen vekstteori tilsier at oekt FoU gir varig vekst. (3) Institusjoner: Opprettholde gode institusjoner, lav korrupsjon og effektiv offentlig sektor. (4) Kapital: Bruke oljefondet strategisk til aa investere i produktiv kapasitet. (5) Internasjonal handel: Utnytte komparative fortrinn og delta i globale verdikjeder. Hovedutfordringen er aa erstatte oljeinntektene med verdiskaping basert paa kunnskap og innovasjon.',
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
