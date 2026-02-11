/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Entreprenorskap og bedriftsutvikling 1 (VG2) - Del 5
 * Seksjon 5: Okonomi og regnskap
 * Folger LK20 lareplan
 *
 * Delkapitler 5.1 - 5.5
 *
 * Kompetansemaal:
 * - utarbeide budsjett og regnskap for en bedrift og bruke det som styringsverktoy
 * - vurdere lonnsomheten i en forretningside ved hjelp av enkle okonomiske beregninger
 * - gjore rede for prissetting og kalkulasjon
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5.1: Grunnleggende bedriftsokonomi
// ============================================================================

export const CHAPTER_ENTREBED_1_5_1: TextbookChapter = {
  id: 'entrebed-1-5-1',
  courseId: 'entrebed-1',
  chapterNumber: '5.1',
  title: 'Grunnleggende bedriftsokonomi',
  description: 'Inntekter, kostnader, resultat og break-even-analyse for grundere som vil forsta bedriftens okonomi.',
  estimatedMinutes: 25,
  content: [
    {
      id: 'eb-5-1-intro',
      type: 'text',
      content: `# Grunnleggende bedriftsokonomi

For a starte og drive en bedrift ma du forsta de grunnleggende okonomiske begrepene. Uansett om du selger varer eller tjenester, handler bedriftsokonomi om a holde oversikt over pengene som kommer inn og gar ut, og sikre at bedriften gar i pluss.

**Hvorfor er dette viktig for grundere?**
- Du ma vite om forretningsideen din er lonnsom
- Investorer og banker krever okonomisk forstaelse
- Gode beslutninger krever tallgrunnlag
- Du kan unnga vanlige fallgruver som tar livet av nye bedrifter

Mange oppstartsbedrifter feiler ikke fordi ideen er darlig, men fordi grunderen ikke har kontroll pa okonomien. A forsta inntekter, kostnader og resultat er forste steg mot en barekraftig bedrift.`,
    },
    {
      id: 'eb-5-1-def-inntekter',
      type: 'definition',
      title: 'Inntekter',
      content: `**Inntekter** er pengene bedriften tjener gjennom salg av varer eller tjenester.

**Salgsinntekt** beregnes slik:
Salgsinntekt = Pris per enhet x Antall solgte enheter

**Typer inntekter:**
- *Salgsinntekter:* Hovedinntektene fra salg av produkter eller tjenester
- *Andre driftsinntekter:* For eksempel utleieinntekter, provisjoner eller royalties
- *Finansinntekter:* Renteinntekter fra bankinnskudd eller aksjeutbytte

For de fleste grundere er salgsinntektene den viktigste inntektskilden. Det er avgjorende a ha realistiske anslag pa hvor mye du faktisk kan selge.`,
    },
    {
      id: 'eb-5-1-def-kostnader',
      type: 'definition',
      title: 'Faste og variable kostnader',
      content: `**Faste kostnader (FK)** er kostnader som ikke endres med produksjons- eller salgsvolum:
- Husleie
- Forsikringer
- Faste lonninger
- Abonnementer og lisenser
- Avskrivninger pa utstyr

**Variable kostnader (VK)** endres proporsjonalt med produksjonen:
- Ravarer og materialer
- Emballasje
- Fraktkostnader
- Provisjoner til selgere
- Timelonn til produksjonsarbeidere

**Totalkostnad:**
$$\\text{Totalkostnad (TK)} = \\text{Faste kostnader} + \\text{Variable kostnader}$$

**Variable kostnader per enhet (VKE):**
$$\\text{VK totalt} = \\text{VKE} \\times \\text{Antall enheter}$$`,
    },
    {
      id: 'eb-5-1-example-resultat',
      type: 'example',
      title: 'Eksempel: Resultatberegning for en kaffebutikk',
      problem: 'Kari starter en liten kaffebutikk. Hun har folgende tall for forste manad: Solgt 1200 kopper kaffe til 45 kr per stykk. Faste kostnader: 28 000 kr (husleie, forsikring, utstyr). Variable kostnader: 12 kr per kopp (kaffebonner, melk, kopp). Regn ut resultatet for maneden.',
      solution: `**Salgsinntekter:**
$$1200 \\times 45 = 54\\,000 \\text{ kr}$$

**Variable kostnader:**
$$1200 \\times 12 = 14\\,400 \\text{ kr}$$

**Faste kostnader:** 28 000 kr

**Totale kostnader:**
$$14\\,400 + 28\\,000 = 42\\,400 \\text{ kr}$$

**Resultat:**
$$54\\,000 - 42\\,400 = 11\\,600 \\text{ kr}$$

Karis kaffebutikk gikk med 11 600 kr i overskudd forste manad. Dette er et positivt tegn, men hun ma ogsa ta hensyn til at hun skal betale seg selv lonn fra dette overskuddet.`,
    },
    {
      id: 'eb-5-1-text-resultat',
      type: 'text',
      content: `## Resultatberegning

Resultatet viser om bedriften gar med overskudd eller underskudd i en gitt periode. Den enkleste resultatberegningen ser slik ut:

$$\\text{Resultat} = \\text{Salgsinntekter} - \\text{Totale kostnader}$$

Et **positivt resultat** betyr overskudd (bedriften tjener penger).
Et **negativt resultat** betyr underskudd (bedriften taper penger).

**Driftsresultat** er resultatet for den daglige driften for finanskostnader trekkes fra. Dette er det viktigste tallet for a vurdere om selve forretningsmodellen fungerer.

**Arsresultat** er bunnlinjen etter at alle inntekter og kostnader er regnet med, inkludert renter og skatt.`,
    },
    {
      id: 'eb-5-1-def-breakeven',
      type: 'definition',
      title: 'Break-even (nullpunkt)',
      content: `**Break-even** (nullpunktet) er det punktet der inntektene er akkurat like store som kostnadene. Bedriften gar verken med overskudd eller underskudd.

**Formel for break-even i antall enheter:**
$$\\text{Break-even} = \\frac{\\text{Faste kostnader}}{\\text{Pris per enhet} - \\text{Variabel kostnad per enhet}}$$

Nevneren kalles **dekningsbidrag per enhet (DB per enhet)**:
$$\\text{DB per enhet} = \\text{Pris} - \\text{VKE}$$

Dekningsbidraget viser hvor mye hver solgte enhet bidrar til a dekke de faste kostnadene. Nar de faste kostnadene er dekket, blir dekningsbidraget til overskudd.`,
    },
    {
      id: 'eb-5-1-example-breakeven',
      type: 'example',
      title: 'Eksempel: Break-even for Karis kaffebutikk',
      problem: 'Bruk tallene fra Karis kaffebutikk: Pris per kopp = 45 kr, VKE = 12 kr, FK = 28 000 kr per manad. Hvor mange kopper ma hun selge for a ga i null?',
      solution: `**Dekningsbidrag per kopp:**
$$\\text{DB per enhet} = 45 - 12 = 33 \\text{ kr}$$

**Break-even:**
$$\\text{Break-even} = \\frac{28\\,000}{33} = 848.5 \\approx 849 \\text{ kopper}$$

Kari ma selge minst 849 kopper kaffe per manad for a dekke alle kostnadene. Med 1200 kopper solgt har hun god margin over nullpunktet.

**Break-even i kroner:**
$$849 \\times 45 = 38\\,205 \\text{ kr i omsetning}$$

Det betyr at Kari ma omsette for minst ca. 38 200 kr per manad for a unnga underskudd.`,
    },
    {
      id: 'eb-5-1-tip',
      type: 'tip',
      title: 'Dekningsgrad',
      content: `**Dekningsgraden** viser dekningsbidraget som en prosentandel av salgsprisen:

$$\\text{Dekningsgrad} = \\frac{\\text{DB per enhet}}{\\text{Pris per enhet}} \\times 100\\%$$

For Karis kaffebutikk:
$$\\text{DG} = \\frac{33}{45} \\times 100\\% = 73.3\\%$$

En dekningsgrad pa 73,3 % er hoy og betyr at en stor andel av hver krone i omsetning gar til a dekke faste kostnader og eventuelt overskudd. Tjenestebedrifter har gjerne hoyere dekningsgrad enn vareproduserende bedrifter.`,
    },
    {
      id: 'eb-5-1-warning',
      type: 'warning',
      title: 'Vanlige feil i okonomisk planlegging',
      content: `**Fallgruver for grundere:**

1. **For optimistiske salgsprognoser:** Det er fristende a overvurdere hvor mye du vil selge. Vaer realistisk og legg inn en sikkerhetsmargin.

2. **Glemme skjulte kostnader:** Arbeidsgiveravgift, forsikringer, regnskap, revisjon og uforutsette utgifter ma tas med.

3. **Blande privat- og bedriftsokonomi:** Hold bedriftens penger adskilt fra privatokonomien.

4. **Ignorere tidsfaktoren:** Det tar ofte lengre tid enn planlagt for inntektene begynner a komme. Ha nok kapital til a overleve oppstartsfasen.`,
    },
  ],
  exercises: [
    {
      id: 'eb-5-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er faste kostnader?',
      options: [
        { id: 'a', text: 'Kostnader som oker nar produksjonen oker', isCorrect: false },
        { id: 'b', text: 'Kostnader som er uendret uansett produksjonsvolum', isCorrect: true },
        { id: 'c', text: 'Kostnader som bare palopor i oppstartsfasen', isCorrect: false },
        { id: 'd', text: 'Kostnader som alltid er de storste', isCorrect: false },
      ],
      solution: 'Faste kostnader er kostnader som ikke endres nar produksjons- eller salgsvolum endres. Eksempler er husleie, forsikring og faste lonninger.',
    },
    {
      id: 'eb-5-1-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva viser break-even-punktet?',
      options: [
        { id: 'a', text: 'Hvor mye bedriften tjener i ar', isCorrect: false },
        { id: 'b', text: 'Punktet der inntektene er lik kostnadene', isCorrect: true },
        { id: 'c', text: 'Maksimal produksjonskapasitet', isCorrect: false },
        { id: 'd', text: 'Bedriftens totale gjeld', isCorrect: false },
      ],
      solution: 'Break-even (nullpunktet) er der salgsinntektene akkurat dekker totalkostnadene. Bedriften gar verken med overskudd eller underskudd.',
    },
    {
      id: 'eb-5-1-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'En grunder selger handlagde stearinlys. Pris per lys er 89 kr. Variable kostnader per lys er 32 kr (voks, veke, duft, emballasje). Faste kostnader per manad er 15 000 kr (husleie for verksted, nettside, forsikring). a) Regn ut dekningsbidraget per lys. b) Regn ut break-even i antall lys per manad. c) Hvor mye ma grunderen omsette for per manad for a ga i null?',
      solution: `**a) Dekningsbidrag per lys:**
$$\\text{DB} = 89 - 32 = 57 \\text{ kr}$$

**b) Break-even:**
$$\\text{Break-even} = \\frac{15\\,000}{57} = 263.2 \\approx 264 \\text{ lys}$$

**c) Omsetning ved break-even:**
$$264 \\times 89 = 23\\,496 \\text{ kr}$$

Grunderen ma selge minst 264 lys per manad, tilsvarende en omsetning pa ca. 23 500 kr, for a ga i null.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-5-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom faste og variable kostnader. Gi tre eksempler pa hver type for en ungdomsbedrift som selger hjemmelagde smoothier pa skolearrangementer.',
      solution: `Faste kostnader er kostnader som ikke endres med salgsvolum. Variable kostnader oker nar salget oker.

**Faste kostnader for smoothie-UB:**
1. Innkjop av blender (engangsutgift fordelt over aret)
2. Standleie pa skolearrangementer
3. Markedsforingsmateriell (plakater, flyers)

**Variable kostnader for smoothie-UB:**
1. Frukt og gronnsaker per smoothie
2. Engangsbeger og sugeror per stykk
3. Is per porsjon

Forskjellen er at de faste kostnadene lopor uansett om UB-en selger 10 eller 100 smoothier, mens de variable kostnadene oker for hver smoothie som lages.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-5-1-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En ungdomsbedrift selger handlagde mobiltilbehor. De har folgende tall: Salgspris per enhet: 149 kr. Variable kostnader per enhet: 55 kr. Faste kostnader per ar: 24 000 kr. Forventet salg: 500 enheter per ar. a) Regn ut forventet arsresultat. b) Regn ut break-even i antall enheter. c) Regn ut dekningsgraden. d) Hva skjer med resultatet dersom de far en prisreduksjon pa ravarer slik at VKE synker til 40 kr?',
      solution: `**a) Forventet arsresultat:**
Inntekter: $500 \\times 149 = 74\\,500$ kr
Variable kostnader: $500 \\times 55 = 27\\,500$ kr
Faste kostnader: 24 000 kr
Resultat: $74\\,500 - 27\\,500 - 24\\,000 = 23\\,000$ kr

**b) Break-even:**
DB per enhet: $149 - 55 = 94$ kr
Break-even: $\\frac{24\\,000}{94} = 255.3 \\approx 256$ enheter

**c) Dekningsgrad:**
$\\frac{94}{149} \\times 100\\% = 63.1\\%$

**d) Med VKE = 40 kr:**
Nytt DB per enhet: $149 - 40 = 109$ kr
Nye variable kostnader totalt: $500 \\times 40 = 20\\,000$ kr
Nytt resultat: $74\\,500 - 20\\,000 - 24\\,000 = 30\\,500$ kr
Resultatet oker med 7 500 kr (fra 23 000 til 30 500 kr).
Ny break-even: $\\frac{24\\,000}{109} = 220.2 \\approx 221$ enheter (ned fra 256).`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-5-1-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En grunder vurderer to ulike forretningsmodeller for et designbyra: Modell A har lave faste kostnader (kontorhotell, leid utstyr) pa 12 000 kr/mnd, men hoye variable kostnader pa 400 kr per oppdragtime (frilansere). Modell B har hoye faste kostnader pa 35 000 kr/mnd (eget kontor, fast ansatt), men lave variable kostnader pa 80 kr per oppdragtime (materialer). Timepris til kunder er 850 kr. a) Regn ut break-even i antall oppdragstimer per manad for begge modellene. b) Ved hvilket antall timer gir begge modellene samme resultat? c) Hvilken modell vil du anbefale, og hvorfor?',
      solution: `**a) Break-even:**
Modell A: DB per time = $850 - 400 = 450$ kr
Break-even A: $\\frac{12\\,000}{450} = 26.7 \\approx 27$ timer

Modell B: DB per time = $850 - 80 = 770$ kr
Break-even B: $\\frac{35\\,000}{770} = 45.5 \\approx 46$ timer

**b) Likevektspunkt:**
$12\\,000 + 400x = 35\\,000 + 80x$
$320x = 23\\,000$
$x = 71.9 \\approx 72$ timer

Ved 72 timer gir begge modellene omtrent samme resultat.

**c) Anbefaling:**
Modell A er best i oppstartsfasen fordi den har lavere break-even (27 timer vs. 46 timer) og lavere risiko. Modell B er mest lonnsom ved hoy ettersporsel (over 72 timer per manad). En grunderstrategi kan vaere a starte med Modell A og ga over til Modell B nar man har bygget opp en stabil kundebase.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
  keyTerms: [],
};

// ============================================================================
// KAPITTEL 5.2: Budsjett og likviditet
// ============================================================================

export const CHAPTER_ENTREBED_1_5_2: TextbookChapter = {
  id: 'entrebed-1-5-2',
  courseId: 'entrebed-1',
  chapterNumber: '5.2',
  title: 'Budsjett og likviditet',
  description: 'Resultatbudsjett, likviditetsbudsjett og budsjettkontroll som styringsverktoy for grundere.',
  estimatedMinutes: 25,
  content: [
    {
      id: 'eb-5-2-intro',
      type: 'text',
      content: `# Budsjett og likviditet

Et budsjett er en plan for fremtidige inntekter og kostnader. For en grunder er budsjettet et av de viktigste verktoyene for a planlegge og styre bedriftens okonomi. Det tvinger deg til a tenke gjennom alle inntekts- og kostnadspostene for du starter, og gir deg et malestokk a sammenligne den faktiske driften med.

**Hvorfor budsjettere?**
- Gir oversikt over forventet okonomisk utvikling
- Avdekker kapitalbehov i oppstartsfasen
- Er nodvendig for a fa lan eller investorer
- Gjor det mulig a oppdage avvik tidlig
- Hjelper med a ta informerte beslutninger

Mange grundere synes budsjettering er kjedelig, men det er nettopp de som ikke budsjetterer som oftest far okonomiske problemer. Et godt budsjett er som et kart - det viser deg veien og gir deg mulighet til a justere kursen underveis.`,
    },
    {
      id: 'eb-5-2-def-resultatbudsjett',
      type: 'definition',
      title: 'Resultatbudsjett',
      content: `**Resultatbudsjettet** viser forventede inntekter og kostnader for en bestemt periode (vanligvis ett ar). Det gir et bilde av om bedriften forventer overskudd eller underskudd.

**Oppstilling av resultatbudsjett:**

| Post | Belop |
|---|---|
| Salgsinntekter | + |
| - Varekostnad | - |
| = Bruttofortjeneste | |
| - Lonnskostnader | - |
| - Husleie | - |
| - Markedsforing | - |
| - Andre driftskostnader | - |
| = Driftsresultat | |
| - Rentekostnader | - |
| + Renteinntekter | + |
| = Resultat for skatt | |
| - Skatt | - |
| = Arsresultat | |

Budsjettet bor lages maned for manad det forste aret for a fange opp sesongvariasjoner og oppstartskostnader.`,
    },
    {
      id: 'eb-5-2-example-resultatbudsjett',
      type: 'example',
      title: 'Eksempel: Resultatbudsjett for nettbutikk',
      problem: 'Erik starter en nettbutikk for handlagde trasmykker. Lag et forenklet resultatbudsjett for forste ar basert pa folgende anslag: Forventet salg: 600 smykker a 250 kr. Innkjopskostnad per smykke: 80 kr (materialer). Husleie verksted: 4 000 kr/mnd. Nettside og markedsforing: 2 500 kr/mnd. Emballasje og frakt: 35 kr per ordre. Forsikring: 6 000 kr/ar.',
      solution: `**Resultatbudsjett for nettbutikken (forste ar):**

Salgsinntekter: $600 \\times 250 = 150\\,000$ kr

Varekostnad (materialer): $600 \\times 80 = 48\\,000$ kr
Emballasje og frakt: $600 \\times 35 = 21\\,000$ kr

**Bruttofortjeneste:** $150\\,000 - 48\\,000 - 21\\,000 = 81\\,000$ kr

Husleie: $4\\,000 \\times 12 = 48\\,000$ kr
Nettside og markedsforing: $2\\,500 \\times 12 = 30\\,000$ kr
Forsikring: 6 000 kr

**Sum driftskostnader:** $48\\,000 + 30\\,000 + 6\\,000 = 84\\,000$ kr

**Driftsresultat:** $81\\,000 - 84\\,000 = -3\\,000$ kr

Erik gar med 3 000 kr i underskudd forste ar. Han ma enten selge flere smykker, oke prisen, eller redusere kostnadene for a na lonnsomhet.`,
    },
    {
      id: 'eb-5-2-def-likviditet',
      type: 'definition',
      title: 'Likviditet og likviditetsbudsjett',
      content: `**Likviditet** betyr betalingsevne - altsa om bedriften har nok penger pa konto til a betale regningene nar de forfaller. Mange lonnsomme bedrifter har gatt konkurs fordi de gikk tom for kontanter.

**Forskjell mellom resultat og likviditet:**
- Resultatet viser inntekter minus kostnader i en periode
- Likviditeten viser faktisk pengestrom - nar pengene kommer inn og gar ut

**Likviditetsbudsjettet** viser innbetalinger og utbetalinger maned for maned:

| Post | Jan | Feb | Mar | ... |
|---|---|---|---|---|
| Inngaende saldo | + | | | |
| + Innbetalinger fra kunder | + | + | + | |
| + Andre innbetalinger | + | + | + | |
| - Utbetalinger til leverandorer | - | - | - | |
| - Lonn og sosiale kostnader | - | - | - | |
| - Husleie | - | - | - | |
| - Andre utbetalinger | - | - | - | |
| = Utgaende saldo | | | | |

Hvis utgaende saldo blir negativ i en manad, trenger bedriften ekstra finansiering (kassakreditt, lan, eller tilforsel av egenkapital).`,
    },
    {
      id: 'eb-5-2-example-likviditet',
      type: 'example',
      title: 'Eksempel: Likviditetsutfordring',
      problem: 'En grunder selger varer til bedrifter med 30 dagers betalingsfrist. Hun ma betale leverandorene sine innen 14 dager. Forklar hvorfor dette kan skape et likviditetsproblem.',
      solution: `**Problemet:**
Grunderen ma betale sine leverandorer 14 dager etter at hun mottar varene, men far ikke betalt av sine kunder for 30 dager etter at hun selger varene.

**Tidslinje:**
- Dag 0: Mottar varer fra leverandor
- Dag 5: Selger varene til kunde
- Dag 14: Ma betale leverandoren
- Dag 35: Kunden betaler (30 dager etter salg)

Det er et gap pa 21 dager der grunderen har betalt leverandoren, men enna ikke fatt betalt av kunden. Selv om salget er lonnsomt, trenger hun kontanter til a dekke dette gapet.

**Losninger:**
- Ha en buffer med kontanter (arbeidskapital)
- Forhandle lengre betalingsfrist med leverandorer
- Tilby rabatt for tidlig betaling fra kunder
- Bruke kassakreditt (overtrekksmulighet) i banken
- Bruke fakturabelaning (selge fakturaer til et finansieringsselskap)`,
    },
    {
      id: 'eb-5-2-text-budsjettkontroll',
      type: 'text',
      content: `## Budsjettkontroll

Budsjettkontroll betyr a sammenligne de faktiske tallene med det som var budsjettert. Dette gjores jevnlig, gjerne maned for manad.

**Steg i budsjettkontroll:**
1. Sett opp faktiske tall ved siden av budsjetterte tall
2. Regn ut avviket (faktisk minus budsjettert)
3. Analyser arsaken til avviket
4. Iverksett tiltak hvis nodvendig

**Typer avvik:**
- **Positivt avvik:** Bedre enn budsjettert (hoyere inntekter eller lavere kostnader)
- **Negativt avvik:** Darligere enn budsjettert (lavere inntekter eller hoyere kostnader)

| Post | Budsjett | Faktisk | Avvik |
|---|---|---|---|
| Salgsinntekter | 50 000 | 42 000 | -8 000 |
| Varekostnad | 20 000 | 18 000 | +2 000 |
| Lonnskostnader | 15 000 | 15 000 | 0 |
| Husleie | 5 000 | 5 000 | 0 |
| Resultat | 10 000 | 4 000 | -6 000 |

I dette eksemplet er inntektene 8 000 kr lavere enn budsjettert. Selv om varekostnaden ogsa var lavere, er det totale avviket negativt. Grunderen ma undersoke hvorfor salget var lavere enn forventet.`,
    },
    {
      id: 'eb-5-2-tip',
      type: 'tip',
      title: 'Tips for grundere: Tommelregler for likviditet',
      content: `**Ha alltid en likviditetsreserve:**
En god tommelregel er a ha minst tre maneders faste kostnader som reserve pa konto. For en ny bedrift er seks maneder enda tryggere.

**Folg opp utestaaende fordringer:**
Send faktura umiddelbart etter levering. Folg opp ubetalte fakturaer raskt. Jo lenger en faktura er ubetalt, jo storre er risikoen for at du aldri far pengene.

**Vaer forsiktig med store investeringer tidlig:**
Det er fristende a investere i dyrt utstyr og flotte lokaler fra starten. Start heller smatt og invester etter hvert som inntektene kommer.

**Bruk regnskapsprogram:**
Selv en liten bedrift bor bruke et enkelt regnskapsprogram (f.eks. Fiken, Tripletex eller Visma). Det gir deg oversikt og gjor budsjettkontroll mye enklere.`,
    },
    {
      id: 'eb-5-2-note',
      type: 'note',
      title: 'Resultat vs. likviditet',
      content: `Det er viktig a forsta at en bedrift kan vaere lonnsom (positivt resultat) men likevel ga tom for penger (darlig likviditet).

**Eksempel:** Du har solgt varer for 100 000 kr med 30 dagers betalingsfrist. I resultatregnskapet har du 100 000 kr i inntekter. Men pa bankkontoen har du 0 kr fordi kundene ikke har betalt enna. Hvis du har regninger som forfaller na, har du et likviditetsproblem til tross for at bedriften er lonnsom.

Derfor er bade resultatbudsjett og likviditetsbudsjett nodvendige styringsverktoy.`,
    },
  ],
  exercises: [
    {
      id: 'eb-5-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva viser et resultatbudsjett?',
      options: [
        { id: 'a', text: 'Hvor mye penger bedriften har pa konto', isCorrect: false },
        { id: 'b', text: 'Forventede inntekter og kostnader for en periode', isCorrect: true },
        { id: 'c', text: 'Bedriftens gjeld til banken', isCorrect: false },
        { id: 'd', text: 'Skatten bedriften ma betale', isCorrect: false },
      ],
      solution: 'Resultatbudsjettet viser forventede inntekter og kostnader for en bestemt periode, og gir et bilde av om bedriften forventer overskudd eller underskudd.',
    },
    {
      id: 'eb-5-2-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr likviditet?',
      options: [
        { id: 'a', text: 'Bedriftens totale formue', isCorrect: false },
        { id: 'b', text: 'Evnen til a betale regninger nar de forfaller', isCorrect: true },
        { id: 'c', text: 'Forskjellen mellom inntekter og kostnader', isCorrect: false },
        { id: 'd', text: 'Verdien av bedriftens eiendeler', isCorrect: false },
      ],
      solution: 'Likviditet betyr betalingsevne - om bedriften har nok kontanter til a betale regningene sine nar de forfaller.',
    },
    {
      id: 'eb-5-2-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar med egne ord forskjellen mellom resultat og likviditet. Gi et eksempel pa en situasjon der en bedrift er lonnsom men har likviditetsproblemer.',
      solution: `Resultat er forskjellen mellom inntekter og kostnader i en periode. Likviditet er om bedriften har nok kontanter pa konto til a betale regninger nar de forfaller.

Eksempel: En handverker utforer et oppdrag til 80 000 kr med 45 dagers betalingsfrist. Materialene kostet 30 000 kr og er allerede betalt. Resultatet er 50 000 kr i overskudd. Men pengene har ikke kommet inn enna, og handverkeren har husleie pa 15 000 kr som forfaller om en uke. Selv om oppdraget er svart lonnsomt, har han et likviditetsproblem fordi pengene ikke er pa konto nar regningen skal betales.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-5-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Lag et forenklet resultatbudsjett for en ungdomsbedrift som selger hjemmelagde energibarer. Bruk folgende tall: Forventet salg: 800 barer a 35 kr. Ingredienser: 12 kr per bar. Emballasje: 3 kr per bar. Markedsforing: 2 000 kr totalt. Registreringsavgift UB: 500 kr.',
      solution: `**Resultatbudsjett for energibar-UB:**

Salgsinntekter: $800 \\times 35 = 28\\,000$ kr

Variable kostnader:
- Ingredienser: $800 \\times 12 = 9\\,600$ kr
- Emballasje: $800 \\times 3 = 2\\,400$ kr
- Sum variable: 12 000 kr

Bruttofortjeneste: $28\\,000 - 12\\,000 = 16\\,000$ kr

Faste kostnader:
- Markedsforing: 2 000 kr
- Registreringsavgift: 500 kr
- Sum faste: 2 500 kr

**Resultat: $16\\,000 - 2\\,500 = 13\\,500$ kr**

UB-en kan forvente et overskudd pa 13 500 kr.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-5-2-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En grunder har folgende budsjett og faktiske tall for januar: Budsjettert salg: 60 000 kr, faktisk salg: 48 000 kr. Budsjettert varekostnad: 24 000 kr, faktisk varekostnad: 20 000 kr. Budsjetterte faste kostnader: 25 000 kr, faktiske faste kostnader: 27 000 kr. a) Sett opp en budsjettkontroll med avvik. b) Regn ut budsjettert og faktisk resultat. c) Analyser avvikene og foresla tiltak.',
      solution: `**a) Budsjettkontroll:**

| Post | Budsjett | Faktisk | Avvik |
|---|---|---|---|
| Salgsinntekter | 60 000 | 48 000 | -12 000 |
| Varekostnad | 24 000 | 20 000 | +4 000 |
| Faste kostnader | 25 000 | 27 000 | -2 000 |
| Resultat | 11 000 | 1 000 | -10 000 |

**b) Resultater:**
Budsjettert resultat: $60\\,000 - 24\\,000 - 25\\,000 = 11\\,000$ kr
Faktisk resultat: $48\\,000 - 20\\,000 - 27\\,000 = 1\\,000$ kr

**c) Analyse:**
Hovedproblemet er at salget var 20 % lavere enn budsjettert (-12 000 kr). Varekostnaden var ogsa lavere, noe som er naturlig nar salget er lavere. De faste kostnadene var 2 000 kr hoyere enn forventet.

Tiltak: Undersok hvorfor salget sviktet (markedsforing, sesong, konkurranse). Vurder om salgsbudsjettet var for optimistisk. Identifiser hva som forarsaker de ekstra faste kostnadene. Juster budsjettet for resten av aret basert pa erfaringen.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-5-2-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En grunder starter en konsulentbedrift i januar. Hun har 50 000 kr pa konto. Faste kostnader er 20 000 kr per manad (betales den 1. hver maned). I januar far hun et oppdrag pa 45 000 kr med 30 dagers betalingsfrist. I februar far hun to oppdrag pa 30 000 kr hver, ogsa med 30 dagers betalingsfrist. Lag et likviditetsbudsjett for januar, februar og mars. Har hun et likviditetsproblem?',
      solution: `**Likviditetsbudsjett:**

**Januar:**
Inngaende saldo: 50 000 kr
+ Innbetalinger: 0 kr (ingen ferdige oppdrag fra for)
- Utbetalinger: 20 000 kr (faste kostnader)
Utgaende saldo: 30 000 kr

**Februar:**
Inngaende saldo: 30 000 kr
+ Innbetalinger: 45 000 kr (januar-oppdrag betales)
- Utbetalinger: 20 000 kr (faste kostnader)
Utgaende saldo: 55 000 kr

**Mars:**
Inngaende saldo: 55 000 kr
+ Innbetalinger: 60 000 kr (to februar-oppdrag betales)
- Utbetalinger: 20 000 kr (faste kostnader)
Utgaende saldo: 95 000 kr

Hun har ikke et likviditetsproblem i denne perioden. Startsaldoen pa 50 000 kr er nok til a dekke de faste kostnadene til innbetalingene begynner a komme. Men hadde hun startet med kun 15 000 kr, ville hun fatt problemer allerede i februar.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
  keyTerms: [],
};

// ============================================================================
// KAPITTEL 5.3: Regnskap for grundere
// ============================================================================

export const CHAPTER_ENTREBED_1_5_3: TextbookChapter = {
  id: 'entrebed-1-5-3',
  courseId: 'entrebed-1',
  chapterNumber: '5.3',
  title: 'Regnskap for grundere',
  description: 'Enkel bokforing, bilag, merverdiavgift (MVA) og skattemelding for oppstartsbedrifter.',
  estimatedMinutes: 25,
  content: [
    {
      id: 'eb-5-3-intro',
      type: 'text',
      content: `# Regnskap for grundere

Regnskap kan virke overveldende for en fersk grunder, men i bunn og grunn handler det om a ha orden pa bedriftens pengestrom. Alle norske bedrifter har plikt til a fore regnskap, og det finnes klare regler for hvordan dette skal gjores.

**Hvorfor er regnskap viktig?**
- Det er lovpalagt for alle bedrifter
- Gir oversikt over bedriftens okonomiske stilling
- Er grunnlaget for skatteberegning og MVA-rapportering
- Nodvendig for a fa lan eller investorer
- Hjelper med a ta gode beslutninger

Du trenger ikke vaere regnskapsekspert for a vaere grunder, men du ma forsta de grunnleggende prinsippene. Mange grundere bruker regnskapsprogrammer eller leier inn en regnskapsforer, men det er uansett viktig a forsta hva tallene betyr.`,
    },
    {
      id: 'eb-5-3-def-bokforing',
      type: 'definition',
      title: 'Bokforing og regnskapsprinsipper',
      content: `**Bokforing** er den systematiske registreringen av alle okonomiske hendelser i bedriften. Hver transaksjon ma dokumenteres med et bilag og fores i regnskapet.

**Grunnleggende prinsipper:**
- **Dokumentasjonskravet:** Alle transaksjoner ma ha et bilag (kvittering, faktura, bankutskrift)
- **Dobbel bokforing:** Hver transaksjon registreres pa to kontoer (debet og kredit) - dette gjelder for aksjeselskap (AS)
- **Periodiseringsprinsippet:** Inntekter og kostnader fores i den perioden de tilhorer, ikke nar pengene faktisk mottas eller betales
- **God regnskapsskikk:** Regnskapet ma fores i samsvar med aksepterte normer og standarder

**Forenklet bokforing:**
Enkeltpersonforetak med under 50 000 kr i eiendeler og under 600 000 kr i omsetning kan bruke forenklet bokforing (enkel bokforing). Da registreres kun innbetalinger og utbetalinger uten dobbel bokforing.`,
    },
    {
      id: 'eb-5-3-text-bilag',
      type: 'text',
      content: `## Bilag - dokumentasjon av transaksjoner

Et **bilag** er dokumentasjonen som ligger bak en regnskapspost. Bilag ma oppbevares i minst fem ar.

**Typer bilag:**
- **Utgaende faktura:** Faktura du sender til kunder
- **Inngaende faktura:** Faktura du mottar fra leverandorer
- **Kvitteringer:** For kontantkjop
- **Bankutskrifter:** Dokumenterer innbetalinger og utbetalinger
- **Lonnslipper:** Dokumenterer lonnsutbetalinger
- **Kontraktsdokumenter:** Husleiekontrakter, leasingavtaler

**Krav til en faktura:**
- Selgers navn, adresse og organisasjonsnummer
- Kjopers navn og adresse
- Fakturanummer (fortlopende)
- Fakturadato
- Forfallsdato
- Beskrivelse av varen/tjenesten
- Antall, pris og totalbelop
- MVA-belop spesifisert (hvis MVA-registrert)

**Tips:** Ta bilde av alle kvitteringer med en gang. Papirkvitteringer falmer fort. Bruk gjerne en app som kobler til regnskapsprogrammet.`,
    },
    {
      id: 'eb-5-3-def-mva',
      type: 'definition',
      title: 'Merverdiavgift (MVA)',
      content: `**Merverdiavgift (MVA)** er en avgift pa omsetning av varer og tjenester. MVA er i praksis en forbruksavgift som betales av sluttforbrukeren, men som bedriftene krever inn pa vegne av staten.

**Viktige MVA-satser i Norge:**
- **25 %** - Alminnelig sats (de fleste varer og tjenester)
- **15 %** - Matvarer
- **12 %** - Transport, overnatting, kino, museer
- **0 %** - Fritatt (f.eks. helsetjenester, undervisning, bøker)

**Registrering:**
Bedrifter ma registrere seg i Merverdiavgiftsregisteret nar omsetningen overstiger 50 000 kr i lopet av en 12-manedersperiode. Etter registrering ma bedriften legge MVA pa sine salgsfakturaer.

**Innberetning:**
MVA-meldingen sendes til Skatteetaten annenhver manad (6 ganger i ar). Sma bedrifter kan soke om arlig innberetning.`,
    },
    {
      id: 'eb-5-3-example-mva',
      type: 'example',
      title: 'Eksempel: MVA-beregning',
      problem: 'En grunder som er MVA-registrert selger et produkt for 500 kr eks. MVA (25 %). I samme periode kjoper hun materialer for 200 kr eks. MVA. Hvordan pavirker MVA-en grunderen?',
      solution: `**Utregning:**

**Salg til kunde:**
Pris eks. MVA: 500 kr
MVA 25 %: $500 \\times 0.25 = 125$ kr
Pris inkl. MVA: 625 kr
Grunderen krever inn 125 kr i MVA fra kunden (utgaende MVA).

**Kjop av materialer:**
Pris eks. MVA: 200 kr
MVA 25 %: $200 \\times 0.25 = 50$ kr
Pris inkl. MVA: 250 kr
Grunderen betaler 50 kr i MVA til leverandoren (inngaende MVA).

**MVA-oppgjor:**
$$\\text{MVA a betale} = \\text{Utgaende MVA} - \\text{Inngaende MVA}$$
$$= 125 - 50 = 75 \\text{ kr}$$

Grunderen ma betale 75 kr til staten. De resterende 50 kr av den innkrevde MVA-en har hun allerede betalt til sin leverandor.

**Viktig:** MVA-pengene er ikke grunderens egne penger. De ma settes av pa en egen konto for MVA-oppgjoret.`,
    },
    {
      id: 'eb-5-3-text-skatt',
      type: 'text',
      content: `## Skatt og skattemelding

Alle bedrifter ma betale skatt av overskuddet. Hvilken type skatt avhenger av selskapsformen.

**Enkeltpersonforetak (ENK):**
Overskuddet beskattes som personlig inntekt. Du betaler inntektsskatt og trygdeavgift. Skattesatsen avhenger av storrelsen pa overskuddet og din totale personlige inntekt.

**Aksjeselskap (AS):**
Betaler 22 % selskapsskatt pa overskuddet. Dersom overskudd tas ut som utbytte, betaler eieren i tillegg personlig skatt pa utbyttet.

**Skattemelding:**
Alle bedrifter ma levere skattemelding (tidligere kalt selvangivelse) innen 31. mai hvert ar. Skattemeldingen oppsummerer arsinntektene og arsresultatet, og er grunnlaget for skatteberegningen.

**Forskuddsskatt:**
Selvstendig naeringsdrivende (ENK) betaler forskuddsskatt fire ganger i aret (15. mars, 15. juni, 15. september og 15. desember). Forskuddsskatten beregnes ut fra forventet inntekt.`,
    },
    {
      id: 'eb-5-3-tip',
      type: 'tip',
      title: 'Praktiske tips for regnskap i oppstarten',
      content: `**1. Opprett en egen bedriftskonto:**
Ha alltid en egen bankkonto for bedriften. Bland aldri privat- og bedriftsutgifter pa samme konto.

**2. Bruk et regnskapsprogram:**
Programmer som Fiken, Tripletex eller Visma eAccounting gjor bokforingen enklere og reduserer feil. Mange tilbyr gratis proveperioder.

**3. For regnskap fortlopende:**
Ikke la bilagene hope seg opp. For regnskapet minst en gang i uken - det tar mye kortere tid nar du tar det jevnlig.

**4. Sett av penger til skatt og MVA:**
Overforer ca. 30-40 % av overskuddet til en sparekonto for skatt og MVA. Da far du ingen ubehagelige overraskelser.

**5. Fa hjelp:**
Det kan vaere lurt a bruke en regnskapsforer, i hvert fall i starten. Det koster noe, men kan spare deg for dyre feil.`,
    },
    {
      id: 'eb-5-3-warning',
      type: 'warning',
      title: 'Konsekvenser av darlig regnskapsforing',
      content: `**Darlig regnskapsforing kan fa alvorlige konsekvenser:**

- **Tilleggsavgift fra Skatteetaten:** Manglende eller feil MVA-melding kan gi tilleggsavgift pa opptil 20 % av belopet.
- **Boter og tvangsmulkt:** Forsinket innlevering av skattemelding eller arsregnskap medforer dagboter.
- **Avslag pa lan:** Banker krever oppdatert regnskap for a vurdere lanesoknad.
- **Personlig ansvar:** I et enkeltpersonforetak hefter du personlig for bedriftens gjeld.
- **Straffeansvar:** Bevisst feilaktig regnskap kan medefore straffeansvar.

Kort sagt: Ta regnskapet pa alvor fra dag en.`,
    },
  ],
  exercises: [
    {
      id: 'eb-5-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er et bilag?',
      options: [
        { id: 'a', text: 'Et regnskap for et helt ar', isCorrect: false },
        { id: 'b', text: 'Dokumentasjon som ligger bak en regnskapspost', isCorrect: true },
        { id: 'c', text: 'En type bedriftsforsikring', isCorrect: false },
        { id: 'd', text: 'En rapport til Skatteetaten', isCorrect: false },
      ],
      solution: 'Et bilag er dokumentasjonen (kvittering, faktura, bankutskrift) som ligger bak en transaksjon i regnskapet. Bilag ma oppbevares i minst fem ar.',
    },
    {
      id: 'eb-5-3-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Nar ma en bedrift registrere seg i Merverdiavgiftsregisteret?',
      options: [
        { id: 'a', text: 'Med en gang bedriften opprettes', isCorrect: false },
        { id: 'b', text: 'Nar omsetningen overstiger 50 000 kr i en 12-manedersperiode', isCorrect: true },
        { id: 'c', text: 'Bare dersom bedriften selger matvarer', isCorrect: false },
        { id: 'd', text: 'Aldri, MVA er frivillig', isCorrect: false },
      ],
      solution: 'Bedrifter ma registrere seg i Merverdiavgiftsregisteret nar omsetningen overstiger 50 000 kr i lopet av en 12-manedersperiode.',
    },
    {
      id: 'eb-5-3-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'En MVA-registrert grunder har i en tomaanedersperiode: Salg til kunder: 120 000 kr eks. MVA (25 %). Kjop fra leverandorer: 45 000 kr eks. MVA (25 %). Regn ut utgaende MVA, inngaende MVA og belopet grunderen ma betale til staten.',
      solution: `**Utgaende MVA (fra salg):**
$$120\\,000 \\times 0.25 = 30\\,000 \\text{ kr}$$

**Inngaende MVA (fra kjop):**
$$45\\,000 \\times 0.25 = 11\\,250 \\text{ kr}$$

**MVA a betale til staten:**
$$30\\,000 - 11\\,250 = 18\\,750 \\text{ kr}$$

Grunderen ma betale 18 750 kr i MVA til staten for denne perioden.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-5-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom enkeltpersonforetak (ENK) og aksjeselskap (AS) nar det gjelder regnskap og skatt. Hvilken selskapsform passer best for en student som vil starte en liten nettbutikk ved siden av studiene?',
      solution: `**Forskjeller:**

ENK: Forenklet bokforing mulig (under gitte grenser). Overskudd beskattes som personinntekt. Eieren hefter personlig for all gjeld. Enkelt og rimelig a opprette.

AS: Krever dobbel bokforing og arsregnskap. Betaler 22 % selskapsskatt pa overskudd. Eieren har begrenset ansvar (hefter ikke personlig). Krever minst 30 000 kr i aksjekapital.

**Anbefaling for student:**
ENK passer best fordi det er enkelt a opprette, har lave kostnader, og inntektene kan vaere sma i starten. Studenten kan bruke forenklet bokforing dersom omsetningen er under 600 000 kr og eiendelene under 50 000 kr. Dersom bedriften vokser kan den senere omorganiseres til AS.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-5-3-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En ungdomsbedrift driver et helt skolear. Lag en oversikt over hvilke bilag de ma ta vare pa gjennom aret, og forklar hvorfor hvert bilag er viktig. Inkluder minst seks ulike typer bilag.',
      solution: `**Bilag en ungdomsbedrift ma ta vare pa:**

1. **Kvitteringer for innkjop av materialer:** Dokumenterer varekostnaden. Viktig for a beregne fortjeneste og for regnskapet.

2. **Salgskvitteringer/kasserapporter:** Dokumenterer all omsetning. Viktig for a vise inntektene i arsrapporten.

3. **Bankutskrifter:** Viser alle inn- og utbetalinger. Brukes til avstemming mot regnskapet.

4. **Kvitteringer for aksjesalg:** Dokumenterer egenkapitalen UB-en har fatt inn. Viktig for generalforsamlingen.

5. **Kvitteringer for markedsforing:** Trykking av flyers, betaling for standplass osv. Dokumenterer markedsforingskostnader.

6. **Kontrakter og avtaler:** Sponsoravtaler, samarbeidsavtaler med leverandorer. Viktig for a dokumentere forpliktelser.

7. **Lonnsbilag:** Dersom UB-en betaler lonn eller honorar. Dokumenterer personalkostnader.

8. **Registreringsbevis:** Bevis pa registrering i Ungt Entreprenorskap. Dokumenterer at UB-en er formelt etablert.

Alle bilag ma nummereres fortlopende og oppbevares systematisk. Det gjor arsrapporten og avslutningen av UB-en mye enklere.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-5-3-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En grunder driver et lite ENK med folgende tall for aret: Salgsinntekter: 480 000 kr. Varekostnader: 180 000 kr. Lonnskostnader (egen lonn): 0 kr (tar ut overskudd). Driftskostnader: 120 000 kr. Rentekostnader: 5 000 kr. a) Beregn arsresultat (overskudd). b) Grunderen har ogsa hatt 200 000 kr i inngaende MVA-pliktig kjop og 480 000 kr i utgaende MVA-pliktig salg (alt 25 %). Regn ut total MVA a betale for aret. c) Forklar hvorfor grunderen bor sette av penger til bade skatt og MVA lopende gjennom aret.',
      solution: `**a) Arsresultat:**
Salgsinntekter: 480 000 kr
- Varekostnader: 180 000 kr
- Driftskostnader: 120 000 kr
- Rentekostnader: 5 000 kr
= Arsresultat: $480\\,000 - 180\\,000 - 120\\,000 - 5\\,000 = 175\\,000$ kr

**b) MVA-beregning for aret:**
Utgaende MVA: $480\\,000 \\times 0.25 = 120\\,000$ kr
Inngaende MVA: $200\\,000 \\times 0.25 = 50\\,000$ kr
(Merk: Inngaende MVA beregnes pa MVA-pliktige kjop, som er 200 000 kr av de totale kostnadene.)
MVA a betale: $120\\,000 - 50\\,000 = 70\\,000$ kr

**c) Hvorfor sette av penger lopende:**
Bade skatt og MVA forfaller pa bestemte tidspunkt. MVA betales annenhver manad, forskuddsskatt betales kvartalsvis. Dersom grunderen bruker alle pengene som kommer inn, risikerer han a ikke ha nok til a betale nar skatten og MVA-en forfaller. Ved a sette av ca. 30-40 % av inntektene lopende (f.eks. pa en egen hoyrentekonto) sikrer grunderen at pengene er der nar de trengs. Dette er en av de vanligste fallgruvene for nye grundere.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
  keyTerms: [],
};

// ============================================================================
// KAPITTEL 5.4: Prissetting
// ============================================================================

export const CHAPTER_ENTREBED_1_5_4: TextbookChapter = {
  id: 'entrebed-1-5-4',
  courseId: 'entrebed-1',
  chapterNumber: '5.4',
  title: 'Prissetting',
  description: 'Kostnadsbasert, verdibasert, konkurransebasert og psykologisk prissetting for grundere.',
  estimatedMinutes: 22,
  content: [
    {
      id: 'eb-5-4-intro',
      type: 'text',
      content: `# Prissetting

A sette riktig pris er en av de viktigste beslutningene en grunder tar. Prisen pavirker ikke bare lonnsomheten, men ogsa hvordan kundene oppfatter produktet ditt. For hoy pris og du selger for lite. For lav pris og du tjener for lite - eller signaliserer lav kvalitet.

**Prisen ma dekke tre ting:**
1. Kostnadene ved a produsere og levere produktet
2. En fortjeneste som gjor bedriften levedyktig
3. Verdien kunden opplever a fa

Det finnes flere ulike metoder for prissetting, og de fleste grundere bor kombinere flere tilnaerminger for a finne den optimale prisen.

**Fire hovedtilnaerminger:**
- Kostnadsbasert prissetting
- Verdibasert prissetting
- Konkurransebasert prissetting
- Psykologisk prissetting`,
    },
    {
      id: 'eb-5-4-def-kostnadsbasert',
      type: 'definition',
      title: 'Kostnadsbasert prissetting',
      content: `**Kostnadsbasert prissetting** betyr at du tar utgangspunkt i kostnadene og legger pa et paslag (fortjenestemargin).

**Formelen:**
$$\\text{Salgspris} = \\text{Selvkost per enhet} + \\text{Fortjenestepaslag}$$

Der selvkost per enhet er summen av alle kostnader (bade faste og variable) fordelt pa antall enheter.

**Alternativ med prosentpaslag:**
$$\\text{Salgspris} = \\text{Selvkost per enhet} \\times (1 + \\text{paslagsprosent})$$

**Fordeler:**
- Enkel a beregne
- Sikrer at kostnadene dekkes
- Forutsigbar fortjeneste

**Ulemper:**
- Tar ikke hensyn til hva kundene er villige til a betale
- Tar ikke hensyn til konkurrentenes priser
- Kan gi for hoy eller for lav pris`,
    },
    {
      id: 'eb-5-4-example-kostnadsbasert',
      type: 'example',
      title: 'Eksempel: Kostnadsbasert prissetting',
      problem: 'En grunder lager handlagde skinnskjerf. Variable kostnader per skjerf: 180 kr (skinn, trad, spenner). Faste kostnader per manad: 8 000 kr. Forventet produksjon: 40 skjerf per manad. Onsket fortjenestepaslag: 50 %. Hva bor salgsprisen vaere?',
      solution: `**Selvkost per skjerf:**
Variable kostnader: 180 kr
Faste kostnader per enhet: $\\frac{8\\,000}{40} = 200$ kr
Selvkost per enhet: $180 + 200 = 380$ kr

**Salgspris med 50 % paslag:**
$$380 \\times 1.50 = 570 \\text{ kr}$$

**Kontroll:**
Totalinntekt ved 40 skjerf: $570 \\times 40 = 22\\,800$ kr
Totalkostnad: $8\\,000 + (180 \\times 40) = 15\\,200$ kr
Fortjeneste: $22\\,800 - 15\\,200 = 7\\,600$ kr
Fortjenestemargin: $\\frac{7\\,600}{22\\,800} \\times 100\\% = 33.3\\%$

Merk: Et paslag pa 50 % pa selvkost gir en fortjenestemargin pa 33,3 % av salgsprisen (ikke 50 % av salgsprisen).`,
    },
    {
      id: 'eb-5-4-def-verdibasert',
      type: 'definition',
      title: 'Verdibasert prissetting',
      content: `**Verdibasert prissetting** tar utgangspunkt i den verdien kunden opplever, ikke i hva produktet koster a lage. Prisen settes basert pa kundens betalingsvillighet.

**Fremgangsmate:**
1. Forsta hvilken verdi produktet gir kunden (tidsbesparelse, status, nytte, glede)
2. Undersok kundens betalingsvillighet (sporreundersokelser, tester, samtaler)
3. Sett prisen basert pa opplevd verdi, ikke kostnad

**Eksempler:**
- En fotograf tar 5 000 kr for bryllupsfotografering. Kostnaden (tid, utstyr) er kanskje 1 500 kr, men kundene verdsetter unike minner hoyt.
- En konsulent tar 2 000 kr per time fordi raadet hun gir kan spare kunden hundretusenvis av kroner.
- Apple setter hoye priser fordi kundene opplever hoy verdi (design, status, okosystem).

**Fordeler:**
- Kan gi mye hoyere fortjeneste enn kostnadsbasert prising
- Tvinger deg til a tenke pa kundens perspektiv
- Premierer innovasjon og kvalitet

**Ulemper:**
- Vanskelig a beregne kundens betalingsvillighet noyaktig
- Krever god markedskunnskap
- Ma rettferdiggjore prisen med reell verdi`,
    },
    {
      id: 'eb-5-4-text-konkurransebasert',
      type: 'text',
      content: `## Konkurransebasert prissetting

**Konkurransebasert prissetting** betyr at du setter prisen i forhold til konkurrentenes priser. Du kan vaelge a legge deg over, pa, eller under konkurrentenes nivaa.

**Tre strategier:**

**1. Under konkurrentene (lavprisstrategi):**
Du setter lavere priser for a tiltrekke prissensitive kunder. Fungerer best nar du har lavere kostnader enn konkurrentene. Risiko: priskrig der alle taper.

**2. Pa nivaa med konkurrentene (prismatching):**
Du folger markedsprisen og konkurrerer pa andre faktorer som kvalitet, service eller beliggenhet. Vanlig i modne markeder.

**3. Over konkurrentene (premiumstrategi):**
Du setter hoyere priser og posisjonerer deg som et kvalitets- eller premiumalternativ. Krever at du kan rettferdiggjore den hoyere prisen med bedre kvalitet, design eller service.

**Viktig:** Konkurransebasert prissetting krever at du kjenner markedet godt. Gjor grundig research pa konkurrentenes priser, og forsta hvorfor de priser som de gjor.`,
    },
    {
      id: 'eb-5-4-def-psykologisk',
      type: 'definition',
      title: 'Psykologisk prissetting',
      content: `**Psykologisk prissetting** bruker kunnskap om menneskers oppfatning av priser for a pavirke kjopsbeslutninger.

**Vanlige teknikker:**

**Oddtallsprising:** Priser som ender pa 9 oppfattes som betydelig lavere.
- 199 kr oppfattes som naermere 100 kr enn 200 kr
- 999 kr oppfattes som mye billigere enn 1 000 kr

**Ankerprising:** Vis en hoyere pris forst, sa virker den faktiske prisen lavere.
- "Var 799 kr - Na kun 499 kr!"
- Vis det dyreste alternativet forst

**Prisforankring med tre valg:** Tilby tre prisnivaaer der det midterste er det du vil selge mest av.
- Basis: 99 kr (for billig)
- Standard: 199 kr (det folk velger)
- Premium: 399 kr (far Standard til a virke rimelig)

**Gratis-effekten:** Ordet "gratis" har uforholdsmessig stor effekt.
- "Kjop 2, fa 1 gratis" selger bedre enn "33 % rabatt pa alle"
- "Gratis frakt" kan vaere viktigere enn et priskutt

**Prestisjprising:** Runde tall kan signalisere kvalitet.
- 1 000 kr (premium) vs. 999 kr (kupp)
- Luksusmerker bruker ofte runde tall`,
    },
    {
      id: 'eb-5-4-example-psykologisk',
      type: 'example',
      title: 'Eksempel: Prissetting i praksis',
      problem: 'En ungdomsbedrift skal selge hjemmelagde energibarer. Kostnadene er 12 kr per bar. Konkurrentene selger lignende barer for 29-35 kr. Hvordan bor de tenke rundt prissettingen?',
      solution: `**Kostnadsbasert analyse:**
Med 12 kr i kostnad og 100 % paslag blir prisen 24 kr. Men dette er lavere enn konkurrentene, noe som kan signalisere lav kvalitet.

**Konkurransebasert analyse:**
Konkurrentene ligger pa 29-35 kr. UB-en bor vurdere hvor de vil posisjonere seg i dette spennet.

**Verdibasert vurdering:**
Handlagde barer med naturlige ingredienser kan oppleves som mer verdifulle enn industriproduserte. Kunder pa skolearrangementer er ofte villige til a betale litt ekstra for noe unikt og lokalt.

**Psykologisk prissetting:**
- 29 kr: Under de fleste konkurrenter, oddtallsprising, oppfattes som under 30 kr
- 35 kr: Pa nivaa med konkurrenter, signaliserer likeverdig kvalitet
- 39 kr: Over konkurrenter, oddtallsprising, signaliserer premium

**Anbefaling:**
Pris: 35 kr (pa nivaa med konkurrenter, rundt tall som signaliserer kvalitet).
Alternativt 39 kr dersom de vektlegger "handlaget" og "naturlige ingredienser" som premiumegenskaper.
Fortjeneste ved 35 kr: $35 - 12 = 23$ kr per bar (66 % margin).`,
    },
    {
      id: 'eb-5-4-tip',
      type: 'tip',
      title: 'Kombinasjon av prismetoder',
      content: `De fleste vellykkede bedrifter bruker en kombinasjon av prismetoder:

1. **Start med kostnadene:** Beregn minimumsprisen (selvkost). Aldri selg under selvkost med mindre det er en bevisst strategi for markedsandeler.

2. **Sjekk konkurrentene:** Kartlegg prisnivaet i markedet. Forsta hvorfor konkurrentene priser som de gjor.

3. **Vurder verdien:** Spor potensielle kunder hva de er villige til a betale. Test ulike priser.

4. **Bruk psykologi:** Tilpass den endelige prisen med psykologiske teknikker.

**Eksempel pa prosessen:**
Selvkost: 120 kr -> Minimum
Konkurrenter: 250-350 kr -> Ramme
Kundens betalingsvillighet: Opptil 300 kr -> Tak
Psykologisk tilpasning: 299 kr -> Endelig pris`,
    },
    {
      id: 'eb-5-4-note',
      type: 'note',
      title: 'Pris og posisjonering henger sammen',
      content: `Prisen er et av de sterkeste signalene om hva produktet ditt er. Tenk over dette:

- Et glass vin til 89 kr pa en restaurant oppfattes som "billig vin"
- Samme vinen til 189 kr oppfattes som "god vin"
- Og til 389 kr som "eksklusiv vin"

Prisen skaper forventninger. Dersom du posisjonerer deg som et kvalitetsprodukt, ma prisen gjenspeile dette. En lav pris pa et premiumprodukt forvirrer kundene og undergraver posisjoneringen.`,
    },
  ],
  exercises: [
    {
      id: 'eb-5-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er kostnadsbasert prissetting?',
      options: [
        { id: 'a', text: 'A sette prisen basert pa hva konkurrentene tar', isCorrect: false },
        { id: 'b', text: 'A ta utgangspunkt i kostnadene og legge pa et fortjenestepaslag', isCorrect: true },
        { id: 'c', text: 'A bruke psykologiske teknikker for a pavirke kjopere', isCorrect: false },
        { id: 'd', text: 'A sette prisen basert pa kundens opplevde verdi', isCorrect: false },
      ],
      solution: 'Kostnadsbasert prissetting tar utgangspunkt i hva det koster a produsere og levere produktet, og legger pa et fortjenestepaslag for a beregne salgsprisen.',
    },
    {
      id: 'eb-5-4-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvorfor fungerer oddtallsprising (f.eks. 199 kr i stedet for 200 kr)?',
      options: [
        { id: 'a', text: 'Fordi kunder tror produktet er pa tilbud', isCorrect: false },
        { id: 'b', text: 'Fordi hjernen oppfatter prisen som naermere det lavere runde tallet', isCorrect: true },
        { id: 'c', text: 'Fordi det er billigere for bedriften', isCorrect: false },
        { id: 'd', text: 'Fordi det er et lovkrav', isCorrect: false },
      ],
      solution: 'Oddtallsprising fungerer fordi hjernen var tenderer til a fokusere pa det forste sifferet. 199 kr oppfattes som naermere 100 kr enn 200 kr, selv om forskjellen bare er 1 krone.',
    },
    {
      id: 'eb-5-4-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'En grunder lager handlagde lerskaler. Variable kostnader per skaal: 65 kr. Faste kostnader per manad: 6 000 kr. Forventet produksjon: 50 skaaler per manad. a) Regn ut selvkost per skaal. b) Hva blir salgsprisen med 60 % paslag? c) Konkurrentene selger lignende skaaler for 250-300 kr. Vurder om den beregnede prisen er fornuftig.',
      solution: `**a) Selvkost per skaal:**
Variable kostnader: 65 kr
Faste kostnader per enhet: $\\frac{6\\,000}{50} = 120$ kr
Selvkost: $65 + 120 = 185$ kr

**b) Salgspris med 60 % paslag:**
$$185 \\times 1.60 = 296 \\text{ kr}$$

**c) Vurdering:**
Prisen pa 296 kr ligger midt i konkurrentenes prisomrade (250-300 kr). Dette er et godt utgangspunkt. Grunderen kan vurdere a runde opp til 299 kr (psykologisk prissetting med oddtall). Dersom skalene har saerlige kvaliteter (unikt design, lokale materialer), kan prisen settes hoyere. Dersom konkurransen er hard, kan 249 kr vaere aktuelt for a ligge i nedre sjikt.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-5-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva verdibasert prissetting er, og gi et eksempel pa et produkt eller en tjeneste der verdibasert prissetting gir mye hoyere pris enn kostnadsbasert prissetting. Begrunn hvorfor.',
      solution: `Verdibasert prissetting setter prisen basert pa den verdien kunden opplever, ikke pa hva produktet koster a lage.

**Eksempel: Personlig treningstime**
Kostnad for treneren: Ca. 150-200 kr per time (tid, lokale, forsikring).
Pris til kunden: 600-1200 kr per time.

Kunden betaler ikke for trenerens tid alene, men for:
- Ekspertkunnskap og tilpasset program
- Motivasjon og ansvarliggjoring
- Raskere resultater enn pa egenhand
- Skadeforebygging
- Helsemessig gevinst pa lang sikt

Verdien for kunden (bedre helse, spart tid, motivasjon) er mye storre enn kostnaden for treneren. Derfor kan verdibasert prissetting gi en pris som er 3-6 ganger hoyere enn kostnadsbasert prissetting.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-5-4-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En ungdomsbedrift skal lansere et nytt produkt: en handlaget mobilholder i tre. De har beregnet selvkost til 45 kr per enhet. Lignende produkter i butikk koster 79-149 kr. Lag et forslag til prisstrategi som kombinerer kostnadsbasert, konkurransebasert og psykologisk prissetting. Begrunn valgene dine.',
      solution: `**Kostnadsbasert utgangspunkt:**
Selvkost: 45 kr. Minimumspris med rimelig fortjeneste: $45 \\times 1.5 = 67.50$ kr (50 % paslag).

**Konkurransebasert vurdering:**
Markedspris: 79-149 kr. UB-en bor legge seg i dette spennet for a vaere konkurransedyktig. Handlaget i tre kan rettferdiggjore hoyere pris enn masseprodusert plast.

**Verdibasert vurdering:**
Handlaget + unikt design + miljobevisst (tre) + stotte lokal UB = hoyere opplevd verdi enn masseproduserte alternativer.

**Psykologisk tilpasning:**
Bruk oddtallsprising og posisjoner som premium.

**Anbefalt prisstrategi:**
- **Standardmodell: 99 kr** - Oddtallsprising, under 100 kr-grensen, midt i konkurrentfeltet
- **Premiummodell (med gravering): 149 kr** - For de som vil ha noe ekstra, topprisen i markedet
- **Pakketilbud (2 stk): 179 kr** - Oppmuntrer til mersalg, oppfattes som god deal

Begrunnelse: 99 kr gir $99 - 45 = 54$ kr i fortjeneste (55 % margin), noe som er solid. Prisen er konkurransedyktig og det handlagde preget rettferdiggjor a ligge i ovre sjikt av markedet.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-5-4-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En grunder tilbyr webutviklingstjenester. Hun kan lage en nettside pa ca. 15 timer. Timekostnaden hennes (lonn, kontor, programvare, forsikring) er ca. 350 kr. Konkurrenter tar mellom 15 000 og 50 000 kr for en enkel bedriftsnettside. a) Hva blir kostnadsbasert pris med 100 % paslag? b) Forklar hvorfor verdibasert prissetting sannsynligvis gir en mye hoyere pris. c) Foresla en prisstrategi og begrunn den.',
      solution: `**a) Kostnadsbasert pris:**
Kostnad: $15 \\times 350 = 5\\,250$ kr
Med 100 % paslag: $5\\,250 \\times 2 = 10\\,500$ kr

**b) Verdibasert prissetting:**
En profesjonell nettside gir bedriftskunden enorm verdi:
- Synlighet og troverdighet overfor potensielle kunder
- Mulig omsetningsgevinst pa hundretusenvis av kroner
- Tidsbesparelse sammenlignet med a lage selv
- Profesjonelt forsteinntrykk
- Tilgjengelighet 24/7

For en bedrift som far bare ett ekstra oppdrag i maneden pa grunn av nettsiden, kan det bety 10 000-50 000 kr i ekstra inntekter. Da er 25 000-35 000 kr for nettsiden en god investering.

**c) Anbefalt prisstrategi:**
Sett prisen til 22 000-28 000 kr. Dette er i midten av konkurrentfeltet, godt over kostnadsbasert pris, og rettferdiggjort av verdien kunden far. For a bygge portefolje i starten kan hun tilby en "lanseringspris" pa 18 000 kr til de forste 5 kundene, og deretter oke til normal pris. Bruk psykologisk prissetting: 24 900 kr (under 25 000-grensen).`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-5-4-ex7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Analyser prissettingen til en selvvalgt bedrift eller et produkt du kjenner til. Identifiser hvilke prismetoder (kostnadsbasert, verdibasert, konkurransebasert, psykologisk) du tror bedriften bruker, og forklar hvorfor du tror de har valgt denne tilnaermingen.',
      solution: `Eksempel-analyse: Starbucks

**Kostnadsbasert:** Kostnaden for en kopp kaffe (bonner, melk, kopp, lokk) er ca. 10-15 kr. Starbucks selger den for 55-75 kr. Ren kostnadsbasert prissetting kan ikke forklare denne prisen.

**Verdibasert:** Starbucks selger mer enn kaffe. De selger en opplevelse: et behagelig sted a sitte, wifi, status (koppen med navnet ditt), konsistens (samme smak overalt i verden). Kundene betaler for opplevelsen, ikke bare drikken.

**Konkurransebasert:** Starbucks priser seg over vanlige kafeer (30-45 kr) og dagligvarekjeder, men pa nivaa med andre spesialkafeer. De posisjonerer seg som premium, men tilgjengelig.

**Psykologisk:** Bruker prisstige (hoy pris = hoy kvalitet). Ulike storrelser (Tall, Grande, Venti) der den mellomste er mest populaer (prisforankring). Belonningsprogram som gjor at kunder foler de far noe gratis.

**Konklusjon:** Starbucks bruker primaert verdibasert prissetting, men kombinerer det med psykologiske teknikker og konkurransebasert posisjonering.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
  keyTerms: [],
};

// ============================================================================
// KAPITTEL 5.5: Lonnsomhetsanalyse
// ============================================================================

export const CHAPTER_ENTREBED_1_5_5: TextbookChapter = {
  id: 'entrebed-1-5-5',
  courseId: 'entrebed-1',
  chapterNumber: '5.5',
  title: 'Lonnsomhetsanalyse',
  description: 'Nokkeltall, dekningsbidrag og fortjenesteberegning for a vurdere om en forretningside er lonnsom.',
  estimatedMinutes: 23,
  content: [
    {
      id: 'eb-5-5-intro',
      type: 'text',
      content: `# Lonnsomhetsanalyse

En lonnsomhetsanalyse er en systematisk vurdering av om bedriften tjener nok penger til a overleve og vokse. For grundere er dette spesielt viktig fordi det avgjor om forretningsideen er levedyktig pa sikt.

**Sentrale sporsmal i en lonnsomhetsanalyse:**
- Tjener bedriften nok pa hvert salg?
- Dekker inntektene alle kostnadene?
- Hvordan utvikler lonnsomheten seg over tid?
- Hvilke produkter eller tjenester er mest lonnsomme?
- Hvor mye ma vi selge for a na lonnsomhet?

Lonnsomhet handler ikke bare om a ha positivt resultat. Det handler ogsa om a ha god nok avkastning pa investert kapital og tid. En bedrift som gar med 10 000 kr i overskudd etter at grunderen har jobbet 2000 timer, er teknisk sett lonnsom, men ikke en god forretning.`,
    },
    {
      id: 'eb-5-5-def-dekningsbidrag',
      type: 'definition',
      title: 'Dekningsbidrag',
      content: `**Dekningsbidrag (DB)** er salgsinntekter minus variable kostnader. Det viser hvor mye som er igjen til a dekke faste kostnader og gi overskudd.

**Dekningsbidrag totalt:**
$$\\text{DB totalt} = \\text{Salgsinntekter} - \\text{Variable kostnader totalt}$$

**Dekningsbidrag per enhet:**
$$\\text{DB per enhet} = \\text{Pris per enhet} - \\text{Variabel kostnad per enhet}$$

**Dekningsgrad (DG):**
$$\\text{DG} = \\frac{\\text{DB per enhet}}{\\text{Pris per enhet}} \\times 100\\%$$

**Tolkning:**
- Dekningsbidraget ma vaere storre enn de faste kostnadene for at bedriften skal ga med overskudd
- Jo hoyere dekningsgrad, desto mer av hvert salg gar til a dekke faste kostnader og overskudd
- Tjenestebedrifter har ofte hoyere dekningsgrad enn vareproduserende bedrifter`,
    },
    {
      id: 'eb-5-5-example-db',
      type: 'example',
      title: 'Eksempel: Dekningsbidrag for to produkter',
      problem: 'En grunder selger to produkter. Produkt A: pris 200 kr, VKE 80 kr, solgt 300 stk. Produkt B: pris 350 kr, VKE 210 kr, solgt 150 stk. Faste kostnader: 30 000 kr per manad. Hvilket produkt er mest lonnsomt?',
      solution: `**Produkt A:**
DB per enhet: $200 - 80 = 120$ kr
DG: $\\frac{120}{200} \\times 100\\% = 60\\%$
DB totalt: $120 \\times 300 = 36\\,000$ kr

**Produkt B:**
DB per enhet: $350 - 210 = 140$ kr
DG: $\\frac{140}{350} \\times 100\\% = 40\\%$
DB totalt: $140 \\times 150 = 21\\,000$ kr

**Samlet resultat:**
Totalt DB: $36\\,000 + 21\\,000 = 57\\,000$ kr
Faste kostnader: 30 000 kr
Resultat: $57\\,000 - 30\\,000 = 27\\,000$ kr

**Analyse:**
Produkt A har hoyere dekningsgrad (60 % vs. 40 %) og bidrar mest til resultatet (36 000 kr vs. 21 000 kr). Selv om Produkt B har hoyere DB per enhet (140 kr vs. 120 kr), selges det faerre enheter. Grunderen bor satse pa a oke salget av Produkt A, som er det mest lonnsomme produktet.`,
    },
    {
      id: 'eb-5-5-text-nokkeltall',
      type: 'text',
      content: `## Nokkeltall for lonnsomhet

Nokkeltall gjor det enklere a vurdere bedriftens okonomiske helse og sammenligne med andre bedrifter.

**1. Bruttofortjeneste:**
$$\\text{Bruttofortjeneste} = \\text{Salgsinntekter} - \\text{Varekostnad}$$

Viser hvor mye som er igjen etter at direkte varekostnader er trukket fra.

**2. Resultatmargin (overskuddsgrad):**
$$\\text{Resultatmargin} = \\frac{\\text{Driftsresultat}}{\\text{Salgsinntekter}} \\times 100\\%$$

Viser hvor stor andel av omsetningen som blir til driftsresultat. En resultatmargin pa 10 % betyr at bedriften sitter igjen med 10 kr for hver 100 kr i omsetning.

**3. Fortjeneste per enhet:**
$$\\text{Fortjeneste per enhet} = \\text{Salgspris} - \\text{Selvkost per enhet}$$

Viser det faktiske overskuddet per solgte enhet etter at alle kostnader er fordelt.

**4. Totalkapitalrentabilitet:**
$$\\text{Totalkapitalrentabilitet} = \\frac{\\text{Driftsresultat}}{\\text{Total kapital}} \\times 100\\%$$

Viser avkastningen pa all investert kapital. Bor vaere hoyere enn bankrenten for at det skal lonne seg a drive bedriften.`,
    },
    {
      id: 'eb-5-5-example-nokkeltall',
      type: 'example',
      title: 'Eksempel: Nokkeltall for en smabedrift',
      problem: 'En bedrift har folgende arstall: Salgsinntekter: 1 200 000 kr. Varekostnad: 480 000 kr. Andre driftskostnader: 540 000 kr. Totalkapital: 600 000 kr. Beregn sentrale nokkeltall.',
      solution: `**Bruttofortjeneste:**
$$1\\,200\\,000 - 480\\,000 = 720\\,000 \\text{ kr}$$

**Bruttoprofittmargin:**
$$\\frac{720\\,000}{1\\,200\\,000} \\times 100\\% = 60\\%$$

**Driftsresultat:**
$$720\\,000 - 540\\,000 = 180\\,000 \\text{ kr}$$

**Resultatmargin:**
$$\\frac{180\\,000}{1\\,200\\,000} \\times 100\\% = 15\\%$$

**Totalkapitalrentabilitet:**
$$\\frac{180\\,000}{600\\,000} \\times 100\\% = 30\\%$$

**Tolkning:**
- Bruttofortjenesten pa 60 % viser god margin pa varene
- Resultatmarginen pa 15 % er solid for en smabedrift
- Totalkapitalrentabiliteten pa 30 % er hoyt og viser at den investerte kapitalen gir god avkastning
- Bedriften er klart lonnsom og har sunn okonomi`,
    },
    {
      id: 'eb-5-5-text-analyse',
      type: 'text',
      content: `## Hvordan gjennomfore en lonnsomhetsanalyse

En grundig lonnsomhetsanalyse for grundere folger disse stegene:

**Steg 1: Kartlegg inntektene**
- Beregn totale salgsinntekter
- Fordel pa produkter/tjenester dersom du har flere

**Steg 2: Kartlegg kostnadene**
- Identifiser alle variable kostnader
- Identifiser alle faste kostnader
- Fordel kostnader pa produkter dersom relevant

**Steg 3: Beregn dekningsbidrag**
- Regn ut DB per enhet og totalt for hvert produkt
- Regn ut dekningsgrad

**Steg 4: Beregn resultat**
- Trekk faste kostnader fra totalt dekningsbidrag
- Beregn resultatmargin

**Steg 5: Vurder lonnsomheten**
- Er resultatet positivt?
- Er resultatmarginen akseptabel for bransjen?
- Gir bedriften bedre avkastning enn alternativ plassering av kapitalen?

**Steg 6: Identifiser forbedringsmuligheter**
- Kan prisen okes?
- Kan variable kostnader reduseres?
- Kan faste kostnader kuttes?
- Kan salgsvolum okes?`,
    },
    {
      id: 'eb-5-5-tip',
      type: 'tip',
      title: 'Folsomhetsanalyse',
      content: `En **folsomhetsanalyse** viser hvordan resultatet endres nar du justerer enkeltfaktorer. Dette er nyttig for a vurdere risiko.

**Eksempel:**
Utgangspunkt: Pris 200 kr, VKE 80 kr, FK 30 000 kr, salg 400 enheter = resultat 18 000 kr.

| Endring | Nytt resultat | Endring |
|---|---|---|
| Pris oker 10 % til 220 kr | 26 000 kr | +8 000 kr |
| Pris synker 10 % til 180 kr | 10 000 kr | -8 000 kr |
| Salg oker 20 % til 480 stk | 27 600 kr | +9 600 kr |
| Salg synker 20 % til 320 stk | 8 400 kr | -9 600 kr |
| VKE oker 15 % til 92 kr | 13 200 kr | -4 800 kr |

Vi ser at resultatet er mest folsomt for endringer i salgsvolum, deretter pris, og minst folsomt for kostnadsendringer. Dette hjelper grunderen med a prioritere innsatsen.`,
    },
    {
      id: 'eb-5-5-warning',
      type: 'warning',
      title: 'Fallgruver i lonnsomhetsanalyse',
      content: `**Vanlige feil grundere gjor:**

1. **Glemmer grunderens egen lonn:** Mange grundere beregner overskudd uten a ta med sin egen lonn som kostnad. En bedrift som "gar i pluss" med 150 000 kr er ikke lonnsom dersom grunderen har jobbet fulltid uten lonn.

2. **Ignorerer alternativkostnaden:** Pengene og tiden du investerer i bedriften kunne vaert brukt pa noe annet. Sammenlign avkastningen med alternative investeringer.

3. **Undervurderer oppstartsfasen:** De fleste bedrifter gar med underskudd i oppstarten. Planlegg for minst 6-12 maneder for break-even.

4. **Fokuserer bare pa omsetning:** Hoy omsetning betyr ikke automatisk hoy lonnsomhet. En bedrift med 2 millioner i omsetning og 3 % margin tjener mindre enn en med 500 000 kr og 20 % margin.`,
    },
    {
      id: 'eb-5-5-note',
      type: 'note',
      title: 'Lonnsomhet over tid',
      content: `Lonnsomheten bor folges over tid, ikke bare maalees pa ett tidspunkt. Typisk utvikler lonnsomheten seg i faser:

**Oppstartsfasen (0-12 mnd):** Ofte negativt resultat. Hoy investering, lave inntekter. Normal og forventet.

**Vekstfasen (1-3 ar):** Inntektene oker, men kostnadene folger gjerne etter (nye ansatte, storre lokaler). Resultatet svinger.

**Stabiliseringsfasen (3-5 ar):** Inntektene stabiliserer seg, kostnadene er under kontroll. Konsistent lonnsomhet.

**Modningsfasen (5+ ar):** Stabil lonnsomhet, men vekst avtar. Trenger fornyelse for a opprettholde lonnsomheten.

Et godt budsjett og jevnlig lonnsomhetsanalyse gjor at du oppdager trender og kan justere kursen i tide.`,
    },
  ],
  exercises: [
    {
      id: 'eb-5-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva viser dekningsbidraget?',
      options: [
        { id: 'a', text: 'Bedriftens totale inntekter', isCorrect: false },
        { id: 'b', text: 'Salgsinntekter minus variable kostnader', isCorrect: true },
        { id: 'c', text: 'Bedriftens totale gjeld', isCorrect: false },
        { id: 'd', text: 'Fortjeneste etter skatt', isCorrect: false },
      ],
      solution: 'Dekningsbidraget er salgsinntekter minus variable kostnader. Det viser hvor mye som er igjen til a dekke de faste kostnadene og gi overskudd.',
    },
    {
      id: 'eb-5-5-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr en resultatmargin pa 15 %?',
      options: [
        { id: 'a', text: 'Bedriften har 15 % sjanse for a lykkes', isCorrect: false },
        { id: 'b', text: '15 kr av hver 100 kr i omsetning blir til driftsresultat', isCorrect: true },
        { id: 'c', text: 'Kostnadene er 15 % av inntektene', isCorrect: false },
        { id: 'd', text: 'Bedriften vokser med 15 % per ar', isCorrect: false },
      ],
      solution: 'En resultatmargin pa 15 % betyr at bedriften sitter igjen med 15 kr i driftsresultat for hver 100 kr i omsetning. Resten (85 kr) gar til a dekke kostnader.',
    },
    {
      id: 'eb-5-5-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: 'En grunder selger to typer produkter. Produkt X: Pris 150 kr, VKE 60 kr, solgt 200 stk per manad. Produkt Y: Pris 85 kr, VKE 25 kr, solgt 500 stk per manad. a) Regn ut dekningsbidrag per enhet og dekningsgrad for begge produktene. b) Regn ut totalt dekningsbidrag. c) Hvis faste kostnader er 45 000 kr, hva er manedlig resultat?',
      solution: `**a) Dekningsbidrag:**
Produkt X: DB = $150 - 60 = 90$ kr. DG = $\\frac{90}{150} \\times 100\\% = 60\\%$
Produkt Y: DB = $85 - 25 = 60$ kr. DG = $\\frac{60}{85} \\times 100\\% = 70.6\\%$

**b) Totalt dekningsbidrag:**
Produkt X: $90 \\times 200 = 18\\,000$ kr
Produkt Y: $60 \\times 500 = 30\\,000$ kr
Totalt DB: $18\\,000 + 30\\,000 = 48\\,000$ kr

**c) Manedlig resultat:**
$$48\\,000 - 45\\,000 = 3\\,000 \\text{ kr}$$

Selv om Produkt Y har lavere pris og lavere DB per enhet, har det hoyere dekningsgrad (70.6 %) og bidrar mest til resultatet pa grunn av hoyt salgsvolum.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-5-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva en folsomhetsanalyse er og hvorfor den er nyttig for grundere. Gi et eksempel pa hvordan en 10 % okning i pris pavirker resultatet annerledes enn en 10 % okning i salgsvolum.',
      solution: `En folsomhetsanalyse undersker hvordan endringer i enkeltfaktorer pavirker resultatet. Den er nyttig fordi den viser hvilke faktorer som har storst effekt pa lonnsomheten, og hjelper grunderen med a forstaa risikoen i forretningsplanen.

**Eksempel:**
Utgangspunkt: Pris 100 kr, VKE 40 kr, FK 20 000 kr, salg 500 stk.
Resultat: $(100 - 40) \\times 500 - 20\\,000 = 30\\,000 - 20\\,000 = 10\\,000$ kr

**10 % prisokning (pris = 110 kr):**
Resultat: $(110 - 40) \\times 500 - 20\\,000 = 35\\,000 - 20\\,000 = 15\\,000$ kr
Endring: +5 000 kr (+50 %)

**10 % volum-okning (salg = 550 stk):**
Resultat: $(100 - 40) \\times 550 - 20\\,000 = 33\\,000 - 20\\,000 = 13\\,000$ kr
Endring: +3 000 kr (+30 %)

Prisokningen gir storre effekt pa resultatet fordi hele prisokningen gar rett til bunnlinjen, mens okt volum ogsa medforer okte variable kostnader.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-5-5-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En ungdomsbedrift har drevet i 8 maneder og har folgende tall: Total omsetning: 62 000 kr. Totale variable kostnader: 23 000 kr. Totale faste kostnader: 8 500 kr. Investert kapital: 5 000 kr. Antall arbeidstimer (alle medlemmer): 400 timer. a) Regn ut totalt dekningsbidrag, resultat, dekningsgrad og resultatmargin. b) Regn ut "timelonn" for UB-medlemmene. c) Vurder om UB-en er lonnsom og foresla forbedringer.',
      solution: `**a) Nokkeltall:**
Dekningsbidrag: $62\\,000 - 23\\,000 = 39\\,000$ kr
Resultat: $39\\,000 - 8\\,500 = 30\\,500$ kr
Dekningsgrad: $\\frac{39\\,000}{62\\,000} \\times 100\\% = 62.9\\%$
Resultatmargin: $\\frac{30\\,500}{62\\,000} \\times 100\\% = 49.2\\%$

**b) Timelonn:**
$\\frac{30\\,500}{400} = 76.25$ kr per time

**c) Vurdering:**
Positivt: Dekningsgraden pa 62.9 % er god. Resultatmarginen pa 49.2 % er svart hoy. UB-en har tjent tilbake den investerte kapitalen flere ganger.

Forbedringsmuligheter:
- Timelonnen pa 76.25 kr er under gjennomsnittlig timelonn. For a oke den kan UB-en oke prisen eller effektivisere arbeidet.
- Variable kostnader utgjor 37.1 % av omsetningen. Vurder om innkjopskostnader kan reduseres (storre innkjop, billigere leverandor).
- Faste kostnader er lave (13.7 % av omsetningen), som er bra for en UB.
- Fokuser pa a oke salgsvolum i gjenvaerende maneder for a oke total fortjeneste.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'eb-5-5-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En grunder vurderer a starte et cateringfirma. Hun har laget folgende anslag for forste ar: Forventet antall oppdrag: 120. Gjennomsnittlig pris per oppdrag: 8 500 kr. Variable kostnader per oppdrag: 3 800 kr (ravarer, engangsutstyr, transport). Faste kostnader per ar: 380 000 kr (lonn til seg selv: 300 000 kr, husleie: 48 000 kr, forsikring: 12 000 kr, diverse: 20 000 kr). Gjennomfor en lonnsomhetsanalyse med dekningsbidrag, break-even, resultat, resultatmargin og vurdering av om dette er en god forretningside.',
      solution: `**Inntekter:**
$120 \\times 8\\,500 = 1\\,020\\,000$ kr

**Variable kostnader:**
$120 \\times 3\\,800 = 456\\,000$ kr

**Dekningsbidrag:**
Totalt DB: $1\\,020\\,000 - 456\\,000 = 564\\,000$ kr
DB per oppdrag: $8\\,500 - 3\\,800 = 4\\,700$ kr
Dekningsgrad: $\\frac{4\\,700}{8\\,500} \\times 100\\% = 55.3\\%$

**Break-even:**
$\\frac{380\\,000}{4\\,700} = 80.9 \\approx 81$ oppdrag

**Resultat:**
$564\\,000 - 380\\,000 = 184\\,000$ kr

**Resultatmargin:**
$\\frac{184\\,000}{1\\,020\\,000} \\times 100\\% = 18.0\\%$

**Vurdering:**
Forretningsideen ser lonnsom ut. Med 120 oppdrag er hun godt over break-even (81 oppdrag), noe som gir en sikkerhetsmargin pa 39 oppdrag (32 %). Resultatmarginen pa 18 % er god for en tjenesteytende bedrift.

Grunderen har allerede tatt med lonn til seg selv (300 000 kr), og overskuddet pa 184 000 kr er reell fortjeneste utover lonnen. Dersom hun legger dette til lonnen, gir bedriften en totaluttelling pa 484 000 kr.

Risikovurdering: Dersom hun bare far 81 oppdrag (33 % faerre enn forventet), gar hun i null. Det er viktig a ha en realistisk plan for a skaffe 120 oppdrag, og a ha likviditet til a overleve de forste manedene.`,
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
  keyTerms: [],
};

// ============================================================================
// Eksport: Alle kapitler i Del 5
// ============================================================================

export const ENTREBED_1_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_ENTREBED_1_5_1,
  CHAPTER_ENTREBED_1_5_2,
  CHAPTER_ENTREBED_1_5_3,
  CHAPTER_ENTREBED_1_5_4,
  CHAPTER_ENTREBED_1_5_5,
];
