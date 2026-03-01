/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 10. klasse - Narrativ versjon Del 10
 * Kapittel 10.1–10.2: Kongruens og formlikhet
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 10.1 NARRATIV: Kongruens og kongruenssetningene
// ============================================================================

export const CHAPTER_10_10_1_NARRATIV: TextbookChapter = {
  id: '10-10-1-narrativ',
  courseId: '10',
  chapterNumber: '10.1',
  title: 'Kongruens og kongruenssetningene',
  subtitle: 'Narrativ versjon',
  description: 'Ei forteljing om figurar som er heilt like -- korleis du beviser at to trekantar er identiske, og kvifor det er viktigare enn du trur.',
  estimatedMinutes: 35,
  competenceGoals: [
    'utforske, beskrive og argumentere for eigenskapar ved to- og tredimensjonale figurar',
  ],
  linkedChapterId: '10-10-1',
  content: [
    {
      id: '10-10-1-n-intro',
      type: 'text',
      content: `## Perfekt like

Har du nokon gong prova to nyklar i same las og funne ut at dei passar perfekt? Eller lagt merke til at to puslespelbrikker dekkjer kvarandre heilt? Dann har du allereie forstått ideen bak kongruens utan å vite det.

I matematikken seier vi at to figurar er **kongruente** dersom dei har nøyaktig same form og same storleik. Tenk deg at du klipper ut ein trekant i papir. Uansett korleis du snur eller vender papirbiten -- du kan rotere han, spegle han, flytte han -- er trekanten kongruent med den opphavlege. Forma og storleiken er den same.

I dette kapittelet skal du lære kva kongruens betyr presist, korleis du skriv det med matematisk notasjon, og -- viktigast av alt -- korleis du beviser at to trekantar er kongruente utan å måle alt. For det finst snarveiar: fire elegante setningar som gjer jobben mykje enklare.`,
    },
    {
      id: '10-10-1-n-section1',
      type: 'text',
      content: `## Kongruente figurar -- same form, same storleik

Når vi skriv $\\triangle ABC \\cong \\triangle DEF$, les vi det som "trekant ABC er kongruent med trekant DEF". Men rekkjefølgja på bokstavane er ikkje tilfeldig! Ho fortel oss kva som svarar til kva:

- $A$ svarar til $D$ (korresponderande hjørne)
- $B$ svarar til $E$
- $C$ svarar til $F$

Det betyr at alle korresponderande sider er like lange: $AB = DE$, $BC = EF$, $AC = DF$. Og alle korresponderande vinklar er like store: $\\angle A = \\angle D$, $\\angle B = \\angle E$, $\\angle C = \\angle F$.

La oss ta eit doeme. Trekant ABC har sidene $AB = 5$ cm, $BC = 7$ cm og $AC = 6$ cm. Trekant DEF har sidene $DE = 5$ cm, $EF = 7$ cm og $DF = 6$ cm. Sidan $AB = DE$, $BC = EF$ og $AC = DF$, er trekantane kongruente: $\\triangle ABC \\cong \\triangle DEF$.

Merk at kongruens ikkje er det same som likskap. Likskap handlar om tal og uttrykk (vi skriv $=$), medan kongruens handlar om geometriske figurar (vi skriv $\\cong$). Og ein kongruent figur kan vere spegla eller rotert -- det viktige er at forma og storleiken er identisk.`,
    },
    {
      id: '10-10-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-10-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg sjølv på kongruens:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-10-1-n-quiz1-q0',
            task: 'Kva betyr det at to figurar er kongruente?',
            options: [
              { id: 'a', text: 'Dei har same form, men kan ha ulik storleik', isCorrect: false },
              { id: 'b', text: 'Dei har nøyaktig same form og same storleik', isCorrect: true },
              { id: 'c', text: 'Dei har same areal', isCorrect: false },
              { id: 'd', text: 'Dei har same vinklar, men sidene kan vere ulike', isCorrect: false },
            ],
            solution: 'Kongruente figurar har nøyaktig same form og same storleik. Alle korresponderande sider er like lange og alle vinklar er like store.',
          },
          {
            id: '10-10-1-n-quiz1-q1',
            task: 'Viss $\\triangle PQR \\cong \\triangle UST$, kva hjørne svarar $Q$ til?',
            options: [
              { id: 'a', text: '$U$', isCorrect: false },
              { id: 'b', text: '$S$', isCorrect: true },
              { id: 'c', text: '$T$', isCorrect: false },
              { id: 'd', text: 'Ingen av dei', isCorrect: false },
            ],
            solution: 'Rekkjefolgja fortel oss: $P \\leftrightarrow U$, $Q \\leftrightarrow S$, $R \\leftrightarrow T$.',
          },
          {
            id: '10-10-1-n-quiz1-q2',
            task: 'Kan ein kongruent figur vere spegla i forhold til den andre?',
            options: [
              { id: 'a', text: 'Nei, dei må vere i nøyaktig same posisjon', isCorrect: false },
              { id: 'b', text: 'Nei, spegla figurar er aldri kongruente', isCorrect: false },
              { id: 'c', text: 'Ja, kongruens handlar om form og storleik, ikkje orientering', isCorrect: true },
              { id: 'd', text: 'Berre dersom figurane er trekantar', isCorrect: false },
            ],
            solution: 'Ein kongruent figur kan vere spegla, rotert eller flytta. Det viktige er at forma og storleiken er den same.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-10-1-n-section2',
      type: 'text',
      content: `## Dei fire kongruenssetningane -- snarveiar til bevis

A sjekke alle tre sider og alle tre vinklar kvar gong ville vore tungvint. Heldigvis finst det snarveiar. Dei fire kongruenssetningane fortel oss at vi berre treng å kjenne tre rette opplysningar for å fastslaa at to trekantar er kongruente.

**SSS -- side, side, side:** Dersom alle tre sidene i ein trekant er like lange som alle tre sidene i ein annan trekant, er trekantane kongruente. Tenk deg ein firkant ABCD der diagonalen BD deler han i to trekantar. Viss $AB = CB = 5$ cm og $AD = CD = 7$ cm, og BD er felles side, så har vi tre par like sider: $AB = CB$, $AD = CD$ og $BD = BD$. Etter SSS-setningen er $\\triangle ABD \\cong \\triangle CBD$.

**SVS -- side, vinkel, side:** Dersom to sider og vinkelen *mellom* dei er like i begge trekantane, er dei kongruente. Det er viktig at vinkelen ligg mellom dei to sidene (den "inneslutta" vinkelen). Til doemes: Viss $AB = DE = 6$ cm, $\\angle A = \\angle D = 50°$ og $AC = DF = 9$ cm, der vinklane ligg mellom dei to sidene, gir SVS-setningen at $\\triangle ABC \\cong \\triangle DEF$.

**VSV -- vinkel, side, vinkel (ogs kalla ASA):** Dersom to vinklar og sida mellom dei er like, er trekantane kongruente. Til doemes: $\\angle A = \\angle D = 40°$, $AB = DE = 7$ cm og $\\angle B = \\angle E = 65°$ gir kongruens etter VSV-setningen. Den tredje vinkelen følgjer automatisk sidan vinkelsummen i ein trekant alltid er $180°$: $\\angle C = 180° - 40° - 65° = 75°$.

**AAS -- vinkel, vinkel, side (ikkje mellom):** Dersom to vinklar og ei side som *ikkje* ligg mellom dei er like, er trekantane også kongruente. Dette følgjer av at den tredje vinkelen er bestemt når du kjenner to vinklar.

Ein viktig advarsel: **SSV (side, side, vinkel) er IKKJE ein gyldig kongruenssetning** generelt. Viss vinkelen ikkje ligg mellom sidene, kan det finnast to ulike trekantar med same opplysningar.`,
    },
    {
      id: '10-10-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-10-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg sjølv på kongruenssetningane:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-10-1-n-quiz2-q0',
            task: 'Du veit at to trekantar har sidene 4 cm, 6 cm og 5 cm, og den andre har sidene 4 cm, 6 cm og 5 cm. Kva kongruenssetning brukar du?',
            options: [
              { id: 'a', text: 'SVS', isCorrect: false },
              { id: 'b', text: 'SSS', isCorrect: true },
              { id: 'c', text: 'VSV', isCorrect: false },
              { id: 'd', text: 'Ikkje nok informasjon', isCorrect: false },
            ],
            solution: 'Alle tre par av korresponderande sider er like. Det er SSS-setningen.',
          },
          {
            id: '10-10-1-n-quiz2-q1',
            task: 'Trekant GHI og JKL har $GH = JK = 7$ cm, $\\angle G = \\angle J = 48°$ og $HI = KL = 5$ cm. Vinkelen G ligg IKKJE mellom sidene GH og HI. Er trekantane kongruente?',
            options: [
              { id: 'a', text: 'Ja, etter SVS-setningen', isCorrect: false },
              { id: 'b', text: 'Ja, etter SSS-setningen', isCorrect: false },
              { id: 'c', text: 'Ikkje nok informasjon -- SSV er ikkje ein gyldig kongruenssetning', isCorrect: true },
              { id: 'd', text: 'Ja, etter VSV-setningen', isCorrect: false },
            ],
            solution: 'Vinkelen ligg ikkje mellom dei to sidene. Dette er SSV, som ikkje er ein gyldig kongruenssetning generelt.',
          },
          {
            id: '10-10-1-n-quiz2-q2',
            task: 'To trekantar har $\\angle K = \\angle P = 55°$, $KL = PQ = 9$ cm og $\\angle L = \\angle Q = 70°$. Kva er den tredje vinkelen?',
            options: [
              { id: 'a', text: '$45°$', isCorrect: false },
              { id: 'b', text: '$65°$', isCorrect: false },
              { id: 'c', text: '$55°$', isCorrect: true },
              { id: 'd', text: '$75°$', isCorrect: false },
            ],
            solution: 'Vinkelsummen i ein trekant er $180°$. Den tredje vinkelen: $180° - 55° - 70° = 55°$.',
          },
          {
            id: '10-10-1-n-quiz2-q3',
            task: 'Trekant STU og VWX har $ST = VW = 3$ cm, $\\angle T = \\angle W = 90°$ og $TU = WX = 4$ cm. Kva kongruenssetning gjeld?',
            options: [
              { id: 'a', text: 'SSS', isCorrect: false },
              { id: 'b', text: 'VSV', isCorrect: false },
              { id: 'c', text: 'Ikkje nok informasjon', isCorrect: false },
              { id: 'd', text: 'SVS', isCorrect: true },
            ],
            solution: 'To sider og vinkelen mellom dei (vinkelen ved T og W ligg mellom sidene ST/TU og VW/WX): SVS-setningen.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-10-1-n-section3',
      type: 'text',
      content: `## Korleis byggje eit kongruensbevis

Når du skal vise at to trekantar er kongruente, følgjer du ein fast framgangsmate:

1. Skriv opp kva du veit om sidene og vinklane i begge trekantane.
2. Sjaa etter **felles sider** -- viss trekantane deler ei side, er den felles sida automatisk lik seg sjølv.
3. Sjaa etter **toppvinklar** -- når to linjer kryssar kvarandre, er vinklane rett overfor kvarandre (toppvinklane) alltid like store.
4. Vel den kongruenssetningen som passar.

Tenk deg at to linjestykke AB og CD kryssar kvarandre i punktet M, og at M er midtpunktet på begge linjestykkja. Altså er $AM = MB$ og $CM = MD$. Vi vil vise at $\\triangle AMC \\cong \\triangle BMD$.

Vi skriv opp kva vi veit: $AM = MB$ (M er midtpunktet på AB), $CM = MD$ (M er midtpunktet på CD), og $\\angle AMC = \\angle BMD$ (toppvinklar er like store). Vi har to sider og vinkelen mellom dei -- det er SVS-setningen. Altså er $\\triangle AMC \\cong \\triangle BMD$.

Kongruens har også praktisk nytte. Tomrarar brukar det når dei lagar takstolar med to kongruente trekantar for å fa symmetrisk tak. I industrien må alle delar vere kongruente for å passe saman -- kvar skrue, kvar mutter, kvar komponent. Og når du brukar passar og linjal til å konstruere geometriske figurar, brukar du eigentleg kongruenssetningane. SSS-setningen er grunnen til at du kan konstruere ein trekant når du kjenner alle tre sidene.`,
    },
    {
      id: '10-10-1-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-10-1-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg sjølv på kongruensbevis:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-10-1-n-quiz3-q0',
            task: 'To linjestykke kryssar kvarandre i M. Vinklane rett overfor kvarandre i kryssingspunktet er alltid ...',
            options: [
              { id: 'a', text: '... rette vinklar (90 grader)', isCorrect: false },
              { id: 'b', text: '... like store (toppvinklar)', isCorrect: true },
              { id: 'c', text: '... supplementære (summen er 180 grader)', isCorrect: false },
              { id: 'd', text: '... ulike', isCorrect: false },
            ],
            solution: 'Toppvinklar -- vinklar rett overfor kvarandre når to linjer kryssar -- er alltid like store.',
          },
          {
            id: '10-10-1-n-quiz3-q1',
            task: 'I eit parallellogram ABCD er moståande sider like lange ($AB = CD$, $BC = DA$). Diagonalen AC deler det i to trekantar. Kva kongruenssetning viser at $\\triangle ABC \\cong \\triangle CDA$?',
            options: [
              { id: 'a', text: 'SVS', isCorrect: false },
              { id: 'b', text: 'VSV', isCorrect: false },
              { id: 'c', text: 'SSS', isCorrect: true },
              { id: 'd', text: 'AAS', isCorrect: false },
            ],
            solution: '$AB = CD$, $BC = DA$ (moståande sider), og $AC = CA$ (felles side). Tre par like sider: SSS-setningen.',
          },
          {
            id: '10-10-1-n-quiz3-q2',
            task: 'Kvifor er SSV (side, side, vinkel) generelt IKKJE ein gyldig kongruenssetning?',
            options: [
              { id: 'a', text: 'Fordi vi treng minst fire opplysningar', isCorrect: false },
              { id: 'b', text: 'Fordi det kan finnast to ulike trekantar med same to sider og ein vinkel som ikkje ligg mellom dei', isCorrect: true },
              { id: 'c', text: 'Fordi vinklar ikkje tel i kongruensbevis', isCorrect: false },
              { id: 'd', text: 'Fordi SSV er det same som SVS', isCorrect: false },
            ],
            solution: 'Når vinkelen ikkje ligg mellom dei to sidene, kan det finnast to ulike trekantar som oppfyller krava. Difor er SSV ikkje gyldig generelt.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-10-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Kongruente figurar har nøyaktig same form og storleik. Når vi skriv $\\triangle ABC \\cong \\triangle DEF$, fortel rekkjefølgja på bokstavane oss kva hjørne, sider og vinklar som svarar til kvarandre.

Dei fire kongruenssetningane for trekantar er: **SSS** (tre par like sider), **SVS** (to par like sider og vinkelen mellom), **VSV** (to par like vinklar og sida mellom) og **AAS** (to par like vinklar og ei side som ikkje ligg mellom). SSV er generelt ikkje gyldig.

I kongruensbevis er det nyttig å sjaa etter felles sider (same side i begge trekantane) og toppvinklar (alltid like store når to linjer kryssar). Kongruens er viktig både i rein matematikk og i praktiske samanhengar som bygg, industri og konstruksjonar.`,
    },
  ],
  exercises: [],
};


// ============================================================================
// Kapittel 10.2 NARRATIV: Formlike figurar og målestokk
// ============================================================================

export const CHAPTER_10_10_2_NARRATIV: TextbookChapter = {
  id: '10-10-2-narrativ',
  courseId: '10',
  chapterNumber: '10.2',
  title: 'Formlike figurer og målestokk',
  subtitle: 'Narrativ versjon',
  description: 'Ei forteljing om figurar som har same form men ulik storleik -- frå skyggemåling av høge tre til kart, arkitektteiningar og modelltog.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske, beskrive og argumentere for eigenskapar ved to- og tredimensjonale figurar',
  ],
  linkedChapterId: '10-10-2',
  content: [
    {
      id: '10-10-2-n-intro',
      type: 'text',
      content: `## Same form, ulik storleik

Tenk deg at du forstørrar eit bilete på datamaskinen. Det ser likt ut -- same motiv, same proposjonar -- men det er blitt større. Alle avstandar i biletet har aukt med same faktor, og alle vinklane er dei same. Dette er formlikskap i praksis.

Medan kongruens krev at figurane har same form *og* same storleik, krev formlikskap berre at dei har same *form*. Storleiken kan vere ulik. Du kan tenke på det slik: kongruens er eit spesialtilfelle av formlikskap -- der forstørrelsesfaktoren er nøyaktig 1.

I dette kapittelet skal vi utforske formlike figurar, lære korleis du finn ukjende sider, måle høgda på tre ved hjelp av skyggar, og forstaa korleis målestokk fungerer i kart og arkitektteiningar.`,
    },
    {
      id: '10-10-2-n-section1',
      type: 'text',
      content: `## Formlike figurar og forstørrelsesfaktoren

To figurar er **formlike** dersom dei har nøyaktig same form. Det betyr to ting: alle korresponderande vinklar er like store, og alle korresponderande sider har det same forholdstalt.

Vi skriv $\\triangle ABC \\sim \\triangle DEF$ og les det som "trekant ABC er formlik trekant DEF". **Forstoerrelsesfaktoren** (eller skaleringsfaktoren) $k$ er forholdstalt mellom korresponderande sider:

$$k = \\frac{DE}{AB} = \\frac{EF}{BC} = \\frac{DF}{AC}$$

Viss $k > 1$, er den andre figuren større (forstørring). Viss $k < 1$, er den andre figuren mindre (forminsking). Og viss $k = 1$, er figurane kongruente.

La oss ta eit doeme. Trekant ABC har sidene 3, 4 og 5 cm. Trekant DEF har sidene 6, 8 og 10 cm. Vi sjekkar: $6/3 = 2$, $8/4 = 2$, $10/5 = 2$. Alle forholdstall er like ($= 2$), så trekantane er formlike med forstørrelsesfaktor $k = 2$. Trekant DEF er dobbelt så stor som ABC.

Forresten -- begge desse trekantane er rettvinkla! $3^2 + 4^2 = 9 + 16 = 25 = 5^2$ (Pytagoras). Og $6^2 + 8^2 = 36 + 64 = 100 = 10^2$. Alle rettvinkla trekantar med same vinkelforhold er formlike.`,
    },
    {
      id: '10-10-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-10-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg sjølv på formlikskap:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-10-2-n-quiz1-q0',
            task: 'Trekant ABC har sidene 5, 12, 13 og trekant DEF har sidene 10, 24, 26. Kva er forstørrelsesfaktoren?',
            options: [
              { id: 'a', text: '$k = 3$', isCorrect: false },
              { id: 'b', text: '$k = 2$', isCorrect: true },
              { id: 'c', text: '$k = 0{,}5$', isCorrect: false },
              { id: 'd', text: 'Trekantane er ikkje formlike', isCorrect: false },
            ],
            solution: '$10/5 = 2$, $24/12 = 2$, $26/13 = 2$. Alle forholdstall er $2$, så $k = 2$.',
          },
          {
            id: '10-10-2-n-quiz1-q1',
            task: 'Kva er samanhengen mellom kongruens og formlikskap?',
            options: [
              { id: 'a', text: 'Dei er to heilt ulike omgrep utan samanheng', isCorrect: false },
              { id: 'b', text: 'Kongruens er eit spesialtilfelle av formlikskap med $k = 1$', isCorrect: true },
              { id: 'c', text: 'Formlikskap er eit spesialtilfelle av kongruens', isCorrect: false },
              { id: 'd', text: 'Alle formlike figurar er også kongruente', isCorrect: false },
            ],
            solution: 'Kongruente figurar har same form og same storleik ($k = 1$). Formlike figurar har same form men kan ha ulik storleik. Kongruens er altså eit spesialtilfelle av formlikskap.',
          },
          {
            id: '10-10-2-n-quiz1-q2',
            task: 'Trekant MNO har vinklane $30°$, $60°$, $90°$ og trekant PQR har vinklane $45°$, $45°$, $90°$. Er dei formlike?',
            options: [
              { id: 'a', text: 'Ja, begge er rettvinkla', isCorrect: false },
              { id: 'b', text: 'Ja, dei har ein felles vinkel på 90 grader', isCorrect: false },
              { id: 'c', text: 'Nei, dei har ulike vinkelforhold', isCorrect: true },
              { id: 'd', text: 'Vi kan ikkje avgjere det utan sidelengder', isCorrect: false },
            ],
            solution: 'Sjølv om begge er rettvinkla, er dei andre vinklane ulike ($30°/60°$ mot $45°/45°$). Dei er ikkje formlike.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-10-2-n-section2',
      type: 'text',
      content: `## Formlikheitskriteria -- snarveiar til formlikskap

Akkurat som for kongruens finst det snarveiar for formlikskap. Du treng ikkje sjekke alle sider og vinklar kvar gong.

**AA-kriteriet (vinkel-vinkel):** Dersom to vinklar i den eine trekanten er like store som to vinklar i den andre, er trekantane formlike. (Den tredje vinkelen er automatisk lik, sidan vinkelsummen er $180°$.) Dette er det enklaste kriteriet og det mest brukte.

**SSS-kriteriet (for formlikskap):** Dersom alle tre par av korresponderande sider har det same forholdstalt, er trekantane formlike.

**SVS-kriteriet (for formlikskap):** Dersom to par av korresponderande sider har det same forholdstalt og vinkelen mellom dei er lik, er trekantane formlike.

Ikkje forveksle desse med kongruenssetningane! For kongruens krev vi at sidene er *like lange*. For formlikskap krev vi at sidene har *same forholdstall*. Og for formlikskap treng vi berre to like vinklar (AA), medan kongruens alltid krev informasjon om minst ei side.

Her er eit doeme med AA-kriteriet: Trekant ABC har $\\angle A = 35°$ og $\\angle B = 90°$, så $\\angle C = 55°$. Trekant DEF har $\\angle D = 35°$ og $\\angle F = 55°$, så $\\angle E = 90°$. To par vinklar er like ($35°$ og $90°$), så etter AA-kriteriet er $\\triangle ABC \\sim \\triangle DEF$.

Ein viktig bruksområde er å finne ukjende sider. Viss $\\triangle ADE \\sim \\triangle ABC$ med $AD = 4$ cm, $DB = 6$ cm og $DE = 5$ cm (der DE er parallell med BC), finn vi forstørrelsesfaktoren $k = AB/AD = (4+6)/4 = 2{,}5$. Dermed er $BC = DE \\cdot k = 5 \\cdot 2{,}5 = 12{,}5$ cm.`,
    },
    {
      id: '10-10-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-10-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg sjølv på formlikheitskriteria:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-10-2-n-quiz2-q0',
            task: 'Kva er det enklaste kriteriet for å vise at to trekantar er formlike?',
            options: [
              { id: 'a', text: 'SSS for formlikskap', isCorrect: false },
              { id: 'b', text: 'SVS for formlikskap', isCorrect: false },
              { id: 'c', text: 'AA-kriteriet -- berre to par like vinklar', isCorrect: true },
              { id: 'd', text: 'Du må alltid sjekke alle sider og vinklar', isCorrect: false },
            ],
            solution: 'AA-kriteriet er det enklaste: berre to par like vinklar er nok til å fastslaa formlikskap.',
          },
          {
            id: '10-10-2-n-quiz2-q1',
            task: 'Ei linje DE er trekt parallelt med BC i trekant ABC. $AD = 6$ cm, $DB = 9$ cm og $DE = 8$ cm. Kor lang er BC?',
            options: [
              { id: 'a', text: '$12$ cm', isCorrect: false },
              { id: 'b', text: '$18$ cm', isCorrect: false },
              { id: 'c', text: '$20$ cm', isCorrect: true },
              { id: 'd', text: '$15$ cm', isCorrect: false },
            ],
            solution: '$AB = 6 + 9 = 15$ cm. Forstoerrelsesfaktor: $k = 15/6 = 2{,}5$. $BC = 8 \\cdot 2{,}5 = 20$ cm.',
          },
          {
            id: '10-10-2-n-quiz2-q2',
            task: 'Trekant GHI har sider 3, 4, 6 og trekant JKL har sider 6, 8, 12. Er dei formlike?',
            options: [
              { id: 'a', text: 'Nei, sidene er ikkje like', isCorrect: false },
              { id: 'b', text: 'Ja, etter SSS-kriteriet for formlikskap med $k = 2$', isCorrect: true },
              { id: 'c', text: 'Nei, forholdsala er ulike', isCorrect: false },
              { id: 'd', text: 'Vi treng meir informasjon', isCorrect: false },
            ],
            solution: '$6/3 = 2$, $8/4 = 2$, $12/6 = 2$. Alle forholdstall er like ($k = 2$), så trekantane er formlike.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-10-2-n-section3',
      type: 'text',
      content: `## Skyggar, spegel og høgdemåling

Ein av dei mest elegante bruksområda for formlikskap er å måle høgda på ting som er for høge til å måle direkte -- som tre, bygningar og flaggstenger.

**Skygge-metoden:** Når sola skin, kastar alle gjenstandar skygge. Solstralane er tilnærma parallelle, så du og eit tre dannar to formlike rettvinkla trekantar med bakken. Du er 1,70 m høg og skyggen din er 2,00 m lang. Treets skygge er 14,00 m lang. Vi set opp forholdstalt:

$$\\frac{h}{1{,}70} = \\frac{14{,}00}{2{,}00}$$

$$h = 1{,}70 \\cdot 7 = 11{,}9 \\text{ m}$$

Treet er 11,9 meter høgt! Vi brukte AA-kriteriet: begge trekantane har ein rett vinkel mot bakken og same vinkel fra solstralane.

**Spegel-metoden:** Legg eit spegel på bakken 8,0 m fra foten av ein bygning. Gå bakover til du ser toppen av bygningen i spegelen -- du står 2,0 m fra spegelen og augene dine er 1,65 m over bakken. Lysrefleksjonen dannar to formlike trekantar. Forstoerrelsesfaktoren er $8{,}0/2{,}0 = 4$, så $h = 1{,}65 \\cdot 4 = 6{,}6$ m.

Desse metodane er ikkje berre teori. Dei har blitt brukte i tusenvis av ar. Den greske matematikaren Thales brukte skygge-metoden til å måle høgda på pyramidane i Egypt for over 2 500 ar sidan!`,
    },
    {
      id: '10-10-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-10-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg sjølv på høgdemåling:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-10-2-n-quiz3-q0',
            task: 'Du er 1,70 m høg og skyggen din er 2,00 m lang. Eit tre har skygge på 14,00 m. Kor høgt er treet?',
            options: [
              { id: 'a', text: '$9{,}8$ m', isCorrect: false },
              { id: 'b', text: '$11{,}9$ m', isCorrect: true },
              { id: 'c', text: '$14{,}0$ m', isCorrect: false },
              { id: 'd', text: '$7{,}0$ m', isCorrect: false },
            ],
            solution: '$h/1{,}70 = 14{,}00/2{,}00 = 7$. $h = 1{,}70 \\cdot 7 = 11{,}9$ m.',
          },
          {
            id: '10-10-2-n-quiz3-q1',
            task: 'Kva formlikheitskriterium gjer at skyggemetoden fungerer?',
            options: [
              { id: 'a', text: 'SSS-kriteriet', isCorrect: false },
              { id: 'b', text: 'SVS-kriteriet', isCorrect: false },
              { id: 'c', text: 'AA-kriteriet -- begge trekantane har ein rett vinkel og same solvinkel', isCorrect: true },
              { id: 'd', text: 'Ingen -- det er tilfeldig at det fungerer', isCorrect: false },
            ],
            solution: 'Begge trekantane har ein rett vinkel (mot bakken) og same vinkel fra solstralane (parallelle stralar). To like vinklar: AA-kriteriet.',
          },
          {
            id: '10-10-2-n-quiz3-q2',
            task: 'Eit spegel ligg 8,0 m fra ein bygning. Du står 2,0 m fra spegelen og augene dine er 1,65 m over bakken. Kor høg er bygningen?',
            options: [
              { id: 'a', text: '$3{,}3$ m', isCorrect: false },
              { id: 'b', text: '$8{,}25$ m', isCorrect: false },
              { id: 'c', text: '$6{,}6$ m', isCorrect: true },
              { id: 'd', text: '$13{,}2$ m', isCorrect: false },
            ],
            solution: 'Forstoerrelsesfaktor: $k = 8{,}0/2{,}0 = 4$. Hoegde: $h = 1{,}65 \\cdot 4 = 6{,}6$ m.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-10-2-n-section4',
      type: 'text',
      content: `## Målestokk -- når verda krympar

**Målestokk** er forholdet mellom ein avstand på eit kart, ei teikning eller ein modell og den verkelege avstanden. Målestokk $1 : 50\\,000$ betyr at 1 cm på kartet tilsvarar 50 000 cm -- altså 500 meter -- i verkelegheita.

For å finne verkeleg avstand gongar du kartavstanden med nevnaren i malestokken. På eit kart med $1 : 50\\,000$ tilsvarar 7,4 cm kartavstand $7{,}4 \\cdot 50\\,000 = 370\\,000$ cm $= 3{,}7$ km.

For å finne kartavstand deler du den verkelege avstanden på nevnaren. Viss den verkelege avstanden er 1,5 km $= 150\\,000$ cm på eit kart med $1 : 25\\,000$, blir kartavstanden $150\\,000 / 25\\,000 = 6{,}0$ cm.

Arkitektar brukar målestokk dagleg. I målestokk $1 : 100$ er 1 cm på teikninga 1 meter i verkelegheita. Viss stova er teikna som 4,5 cm gonger 6,0 cm, er ho i verkelegheita 4,5 m gonger 6,0 m -- eit areal på 27,0 kvadratmeter.

Men her kjem noko viktig: **areal skalerer med $k^2$, og volum med $k^3$**. Viss forstørrelsesfaktoren er $k$, blir alle lengder gonga med $k$, alle areal gonga med $k^2$ og alle volum gonga med $k^3$. Ein modell i målestokk $1:10$ har verkeleg areal som er $10^2 = 100$ gonger større, og verkeleg volum som er $10^3 = 1\\,000$ gonger større.

Til doemes: Ei skulptur er 30 cm høg med volum 2 700 cm$^3$. Ein formlik kopi er 50 cm høg. Forstoerrelsesfaktoren er $k = 50/30 = 5/3$. Volumet av kopien er $(5/3)^3 \\cdot 2\\,700 = (125/27) \\cdot 2\\,700 = 12\\,500$ cm$^3$.`,
    },
    {
      id: '10-10-2-n-quiz4',
      type: 'exercise',
      exercise: {
        id: '10-10-2-n-quiz4',
        number: 'Quiz 4',
        type: 'multiple-choice',
        task: 'Test deg sjølv på målestokk:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-10-2-n-quiz4-q0',
            task: 'På eit kart med målestokk $1 : 25\\,000$ måler du 12 cm mellom hytta og vatnet. Kva er den verkelege avstanden?',
            options: [
              { id: 'a', text: '300 m', isCorrect: false },
              { id: 'b', text: '3 000 m', isCorrect: true },
              { id: 'c', text: '30 000 m', isCorrect: false },
              { id: 'd', text: '1 200 m', isCorrect: false },
            ],
            solution: '$12 \\cdot 25\\,000 = 300\\,000$ cm $= 3\\,000$ m.',
          },
          {
            id: '10-10-2-n-quiz4-q1',
            task: 'I ein planteikning med målestokk $1 : 50$ er eit vindauge teikna med areal $1{,}44$ cm$^2$. Kva er det verkelege arealet?',
            options: [
              { id: 'a', text: '$72$ cm$^2$', isCorrect: false },
              { id: 'b', text: '$720$ cm$^2$', isCorrect: false },
              { id: 'c', text: '$3\\,600$ cm$^2$', isCorrect: true },
              { id: 'd', text: '$36\\,000$ cm$^2$', isCorrect: false },
            ],
            solution: 'Areal skalerer med $k^2$. Verkeleg areal: $1{,}44 \\cdot 50^2 = 1{,}44 \\cdot 2\\,500 = 3\\,600$ cm$^2$.',
          },
          {
            id: '10-10-2-n-quiz4-q2',
            task: 'To formlike sylinderar har høgder 12 cm og 18 cm. Den minste har volum 339,6 cm$^3$. Kva er volumet av den største?',
            options: [
              { id: 'a', text: 'Ca. 509 cm$^3$', isCorrect: false },
              { id: 'b', text: 'Ca. 764 cm$^3$', isCorrect: false },
              { id: 'c', text: 'Ca. 1 146 cm$^3$', isCorrect: true },
              { id: 'd', text: 'Ca. 1 529 cm$^3$', isCorrect: false },
            ],
            solution: '$k = 18/12 = 1{,}5$. Volum: $V = 1{,}5^3 \\cdot 339{,}6 = 3{,}375 \\cdot 339{,}6 \\approx 1\\,146$ cm$^3$.',
          },
          {
            id: '10-10-2-n-quiz4-q3',
            task: 'Viss forstørrelsesfaktoren er $k$, korleis skalerer areal og volum?',
            options: [
              { id: 'a', text: 'Begge skalerer med $k$', isCorrect: false },
              { id: 'b', text: 'Areal med $k^2$, volum med $k^3$', isCorrect: true },
              { id: 'c', text: 'Areal med $k^3$, volum med $k^2$', isCorrect: false },
              { id: 'd', text: 'Begge skalerer med $k^2$', isCorrect: false },
            ],
            solution: 'Lengder gongar med $k$. Areal er eit produkt av to lengder, så det gongar med $k^2$. Volum er eit produkt av tre lengder, så det gongar med $k^3$.',
          },
        ],
        solution: '',
      },
    },
    {
      id: '10-10-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Formlike figurar har same form men kan ha ulik storleik. Alle korresponderande vinklar er like store, og alle korresponderande sider har same forholdstall -- forstørrelsesfaktoren $k$.

Formlikheitskriteria for trekantar er: **AA** (to par like vinklar), **SSS** (alle sidepar har same forholdstall) og **SVS** (to sidepar med same forholdstall og lik vinkel mellom). Av desse er AA-kriteriet det mest brukte.

Formlikskap har mange praktiske bruksområde. Skyggemetoden og spegelmetoden let oss måle høgder indirekte. Målestokk brukar vi i kart ($1 : 50\\,000$), arkitektteiningar ($1 : 100$) og modellar. Og hugs den viktige regelen for skalering: lengder skalerer med $k$, areal med $k^2$ og volum med $k^3$.`,
    },
  ],
  exercises: [],
};


// Eksporter alle narrative kapitler i seksjon 10
export const MATEMATIKK_10_NARRATIV_DEL10_CHAPTERS: TextbookChapter[] = [
  CHAPTER_10_10_1_NARRATIV,
  CHAPTER_10_10_2_NARRATIV,
];
