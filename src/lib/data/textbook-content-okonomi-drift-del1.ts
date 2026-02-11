/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Økonomi og driftsledelse VG3
 *
 * Seksjon 1: Driftsøkonomi og lønnsomhet (Kapittel 1.1-1.5)
 *
 * Dekker LK20 kompetansemål for programfaget Økonomi og driftsledelse.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.1: Kostnadstyper
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_1_1: TextbookChapter = {
  id: 'okonomi-drift-1-1',
  courseId: 'okonomi-drift',
  chapterNumber: '1.1',
  title: 'Kostnadstyper',
  description: 'Lær om faste og variable kostnader, direkte og indirekte kostnader, og hvordan enhetskostnader beregnes.',
  estimatedMinutes: 20,
  competenceGoals: ['gjere greie for og bruke ulike kalkulasjonsmetodar'],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'od-1-1-intro',
      type: 'text',
      content: `## Hvorfor er kostnadsforståelse viktig?

For enhver bedrift er det avgjørende å forstå hvilke kostnader som oppstår i forbindelse med produksjon og salg av varer og tjenester. Uten god oversikt over kostnadene kan bedriften verken sette riktige priser, vurdere lønnsomheten til ulike produkter eller ta gode beslutninger om fremtiden.

I dette kapittelet skal vi se på de viktigste måtene å klassifisere kostnader på. Vi skiller mellom faste og variable kostnader, og mellom direkte og indirekte kostnader. Til slutt ser vi på hvordan vi beregner enhetskostnader, altså kostnaden per produsert enhet.`,
    },

    // ========== FASTE OG VARIABLE KOSTNADER ==========
    {
      id: 'od-1-1-text-fast-var',
      type: 'text',
      content: `## Faste og variable kostnader

Den mest grunnleggende inndelingen av kostnader handler om hvordan de endrer seg med produksjonsvolumet. Noen kostnader er de samme uansett hvor mye bedriften produserer, mens andre kostnader øker i takt med produksjonen.`,
    },
    {
      id: 'od-1-1-def-faste',
      type: 'definition',
      title: 'Faste kostnader (FK)',
      content: `**Faste kostnader** er kostnader som ikke endrer seg med produksjonsvolumet på kort sikt. De påløper uavhengig av om bedriften produserer mye, lite eller ingenting.

Eksempler:
- Husleie for lokaler
- Forsikringer
- Lønninger til administrasjonen
- Avskrivninger på maskiner og utstyr
- Renter på lån

Faste kostnader kalles også **kapasitetskostnader** fordi de er knyttet til bedriftens kapasitet.`,
    },
    {
      id: 'od-1-1-def-variable',
      type: 'definition',
      title: 'Variable kostnader (VK)',
      content: `**Variable kostnader** er kostnader som endrer seg i takt med produksjonsvolumet. Jo flere enheter bedriften produserer, desto høyere blir de variable kostnadene.

Eksempler:
- Råvarer og materialer
- Direkte lønn (akkordlønn, timelønn til produksjonsarbeidere)
- Emballasje
- Energi brukt direkte i produksjonen
- Provisjon til selgere

Dersom de variable kostnadene øker proporsjonalt med volumet, kalles de **proporsjonale kostnader**.

Den totale kostnaden for bedriften er:

$$TK = FK + VK$$`,
    },
    {
      id: 'od-1-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Faste og variable kostnader',
      problem: `En møbelfabrikk har følgende kostnader per måned:
- Husleie: 50 000 kr
- Forsikring: 10 000 kr
- Trevirke: 800 kr per stol
- Lim og skruer: 50 kr per stol
- Administrasjonslønn: 80 000 kr
- Akkordlønn snekker: 200 kr per stol

Identifiser faste og variable kostnader, og beregn totalkostnadene dersom fabrikken produserer 200 stoler.`,
      solution: `**Faste kostnader (FK):**
- Husleie: 50 000 kr
- Forsikring: 10 000 kr
- Administrasjonslønn: 80 000 kr
- **Sum FK = 140 000 kr**

**Variable kostnader per stol:**
- Trevirke: 800 kr
- Lim og skruer: 50 kr
- Akkordlønn: 200 kr
- **VK per enhet = 1 050 kr**

**Ved 200 stoler:**
- Variable kostnader totalt: 200 $\\times$ 1 050 = 210 000 kr
- **Totale kostnader = FK + VK = 140 000 + 210 000 = 350 000 kr**`,
    },

    // ========== DIREKTE OG INDIREKTE KOSTNADER ==========
    {
      id: 'od-1-1-text-dir-indir',
      type: 'text',
      content: `## Direkte og indirekte kostnader

En annen viktig inndeling handler om hvorvidt kostnadene kan knyttes direkte til et bestemt produkt eller en bestemt avdeling. Denne inndelingen er spesielt viktig når bedriften skal beregne hva det koster å produsere hvert enkelt produkt.

Merk at de to inndelingene (fast/variabel og direkte/indirekte) er uavhengige av hverandre. En kostnad kan for eksempel være variabel og indirekte (strøm til oppvarming av fabrikken) eller fast og direkte (avskrivning på en maskin som bare brukes til ett produkt).`,
    },
    {
      id: 'od-1-1-def-direkte',
      type: 'definition',
      title: 'Direkte kostnader',
      content: `**Direkte kostnader** er kostnader som kan henføres direkte til et bestemt produkt, en bestemt ordre eller en bestemt avdeling.

De viktigste direkte kostnadene er:
- **Direkte materialer** - råvarer som inngår direkte i produktet
- **Direkte lønn** - arbeidstid som kan knyttes direkte til produksjon av et bestemt produkt

Direkte kostnader er som regel variable, men det finnes unntak.`,
    },
    {
      id: 'od-1-1-def-indirekte',
      type: 'definition',
      title: 'Indirekte kostnader',
      content: `**Indirekte kostnader** er kostnader som ikke kan henføres direkte til et bestemt produkt. De er felles for flere produkter eller hele virksomheten.

Eksempler:
- Husleie for fabrikklokaler
- Strøm til oppvarming og belysning
- Lønn til ledelse og administrasjon
- Vedlikehold av maskiner
- Kontorrekvisita

Indirekte kostnader kalles også **felleskostnader** og må fordeles på produktene ved hjelp av fordelingsnøkler.`,
    },
    {
      id: 'od-1-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Direkte og indirekte kostnader',
      problem: `Et bakeri produserer både rundstykker og grovbrød. Klassifiser følgende kostnader som direkte eller indirekte:

a) Mel brukt i rundstykkedeigen
b) Husleie for bakeriet
c) Lønn til bakeren som baker rundstykker
d) Strøm til ovnene
e) Gjær brukt i grovbrødsdeigen
f) Lønn til regnskapsfører`,
      solution: `**Direkte kostnader:**
- a) Mel til rundstykker - direkte material (kan knyttes til produktet)
- c) Lønn til baker av rundstykker - direkte lønn (kan knyttes til produktet)
- e) Gjær til grovbrød - direkte material (kan knyttes til produktet)

**Indirekte kostnader:**
- b) Husleie - felleskostnad for hele bakeriet
- d) Strøm til ovnene - brukes til begge produkter (vanskelig å fordele nøyaktig)
- f) Lønn til regnskapsfører - administrasjonskostnad som er felles`,
    },

    // ========== ENHETSKOSTNADER ==========
    {
      id: 'od-1-1-text-enhet',
      type: 'text',
      content: `## Enhetskostnader

Enhetskostnader viser hva det koster å produsere en enhet av et produkt. Denne informasjonen er viktig blant annet for prissetting. Vi skiller mellom variable enhetskostnader, faste enhetskostnader og totale enhetskostnader.

Det er viktig å merke seg at mens de variable enhetskostnadene normalt er konstante (like mye materialer per enhet), så synker de faste enhetskostnadene når produksjonen øker. Dette skyldes at de faste kostnadene fordeles på flere enheter - dette er grunnlaget for **stordriftsfordeler**.`,
    },
    {
      id: 'od-1-1-def-enhetskost',
      type: 'definition',
      title: 'Enhetskostnader',
      content: `**Enhetskostnader** er kostnaden per produsert enhet.

$$\\text{Variabel enhetskostnad (VEK)} = \\frac{\\text{Totale variable kostnader}}{\\text{Antall enheter}}$$

$$\\text{Fast enhetskostnad (FEK)} = \\frac{\\text{Totale faste kostnader}}{\\text{Antall enheter}}$$

$$\\text{Total enhetskostnad (TEK)} = \\text{VEK} + \\text{FEK}$$

Merk: VEK er normalt konstant, mens FEK synker med økt produksjon.`,
    },
    {
      id: 'od-1-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Enhetskostnader ved ulikt volum',
      problem: `En bedrift har faste kostnader på 600 000 kr per år og variable kostnader på 150 kr per enhet. Beregn total enhetskostnad ved produksjon av:
a) 2 000 enheter
b) 6 000 enheter
c) 12 000 enheter`,
      solution: `VEK = 150 kr (konstant uansett volum)

**a) 2 000 enheter:**
- FEK = 600 000 / 2 000 = 300 kr
- TEK = 150 + 300 = **450 kr per enhet**

**b) 6 000 enheter:**
- FEK = 600 000 / 6 000 = 100 kr
- TEK = 150 + 100 = **250 kr per enhet**

**c) 12 000 enheter:**
- FEK = 600 000 / 12 000 = 50 kr
- TEK = 150 + 50 = **200 kr per enhet**

Vi ser at enhetskostnaden synker betydelig med økt produksjon. Dette er stordriftsfordelen - de faste kostnadene fordeles på stadig flere enheter.`,
    },
  ],
  exercises: [
    {
      id: 'od-1-1-ex-1',
      number: '1.1.1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken av følgende er et eksempel på en fast kostnad?',
      options: [
        { id: 'a', text: 'Råvarer til produksjon', isCorrect: false, feedback: 'Råvarer er en variabel kostnad som øker med produksjonsvolumet.' },
        { id: 'b', text: 'Husleie for fabrikklokaler', isCorrect: true },
        { id: 'c', text: 'Emballasje per produkt', isCorrect: false, feedback: 'Emballasje er en variabel kostnad som påløper per enhet.' },
        { id: 'd', text: 'Provisjon til selgere', isCorrect: false, feedback: 'Provisjon varierer med salget og er en variabel kostnad.' },
      ],
      solution: 'Husleie er en fast kostnad fordi den er den samme uansett produksjonsvolum. Bedriften betaler like mye i husleie enten den produserer 10 eller 10 000 enheter.',
    },
    {
      id: 'od-1-1-ex-2',
      number: '1.1.2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En bedrift har faste kostnader på 400 000 kr og variable kostnader på 200 kr per enhet. Hva blir total enhetskostnad ved produksjon av 2 000 enheter?',
      options: [
        { id: 'a', text: '200 kr', isCorrect: false, feedback: 'Dette er bare den variable enhetskostnaden. Du har glemt de faste kostnadene.' },
        { id: 'b', text: '300 kr', isCorrect: false, feedback: 'Sjekk utregningen av fast enhetskostnad: 400 000 / 2 000 = 200 kr.' },
        { id: 'c', text: '400 kr', isCorrect: true },
        { id: 'd', text: '600 kr', isCorrect: false, feedback: 'Du har regnet feil. FEK = 400 000 / 2 000 = 200, og TEK = 200 + 200 = 400.' },
      ],
      solution: 'FEK = 400 000 / 2 000 = 200 kr. VEK = 200 kr. TEK = VEK + FEK = 200 + 200 = 400 kr per enhet.',
    },
    {
      id: 'od-1-1-ex-3',
      number: '1.1.3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Forklar forskjellen mellom faste og variable kostnader. Gi to eksempler på hver.',
      solution: 'Faste kostnader er kostnader som ikke endrer seg med produksjonsvolumet, for eksempel husleie og forsikring. Variable kostnader øker i takt med produksjonen, for eksempel råvarer og akkordlønn. Faste kostnader påløper selv om bedriften ikke produserer noe, mens variable kostnader bare oppstår ved produksjon.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'od-1-1-ex-4',
      number: '1.1.4',
      type: 'classic',
      difficulty: 'medium',
      task: 'En sjokoladefabrikk har følgende kostnader per måned: husleie 60 000 kr, forsikring 15 000 kr, kakao 40 kr per plate, sukker 10 kr per plate, emballasje 5 kr per plate, administrasjonslønn 90 000 kr, akkordlønn 15 kr per plate. Beregn totale faste kostnader, variable kostnader per plate, og totalkostnaden ved produksjon av 5 000 plater.',
      solution: 'Faste kostnader: 60 000 + 15 000 + 90 000 = 165 000 kr. Variable kostnader per plate: 40 + 10 + 5 + 15 = 70 kr. Ved 5 000 plater: VK = 5 000 x 70 = 350 000 kr. Totalkostnad = 165 000 + 350 000 = 515 000 kr. Enhetskostnad = 515 000 / 5 000 = 103 kr per plate.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'od-1-1-ex-5',
      number: '1.1.5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom direkte og indirekte kostnader. Hvorfor er denne inndelingen viktig for kalkulasjon?',
      solution: 'Direkte kostnader kan henføres direkte til et bestemt produkt (f.eks. råvarer og direkte lønn), mens indirekte kostnader er felleskostnader som ikke kan knyttes direkte til ett produkt (f.eks. husleie og administrasjon). Inndelingen er viktig fordi direkte kostnader enkelt kan beregnes per produkt, mens indirekte kostnader må fordeles ved hjelp av tilleggssatser eller fordelingsnøkler. Feil fordeling kan gi feil bilde av hva hvert produkt egentlig koster.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'od-1-1-ex-6',
      number: '1.1.6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En bedrift produserer 3 000 enheter med totale kostnader på 900 000 kr, hvorav 450 000 kr er faste. Bedriften vurderer å øke produksjonen til 5 000 enheter. Beregn total enhetskostnad ved begge volumer og forklar hvorfor enhetskostnaden endrer seg.',
      solution: 'Ved 3 000 enheter: VK totalt = 900 000 - 450 000 = 450 000 kr. VEK = 450 000 / 3 000 = 150 kr. FEK = 450 000 / 3 000 = 150 kr. TEK = 300 kr. Ved 5 000 enheter: VK totalt = 5 000 x 150 = 750 000 kr. FEK = 450 000 / 5 000 = 90 kr. TEK = 150 + 90 = 240 kr. Enhetskostnaden synker fra 300 kr til 240 kr fordi de faste kostnadene fordeles på flere enheter. VEK er konstant, men FEK synker fra 150 til 90 kr. Dette er stordriftsfordelen.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};

// ============================================================================
// KAPITTEL 1.2: Selvkostkalkulasjon
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_1_2: TextbookChapter = {
  id: 'okonomi-drift-1-2',
  courseId: 'okonomi-drift',
  chapterNumber: '1.2',
  title: 'Selvkostkalkulasjon',
  description: 'Lær om selvkostmetoden med materialkost, tilleggssatser og fullstendig kalkyleoppsett.',
  estimatedMinutes: 20,
  competenceGoals: ['gjere greie for og bruke ulike kalkulasjonsmetodar'],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'od-1-2-intro',
      type: 'text',
      content: `## Selvkostmetoden

Selvkostmetoden er den mest tradisjonelle kalkulasjonsmetoden i norsk næringsliv. Metoden bygger på at alle kostnader i bedriften skal fordeles på produktene - både de direkte og de indirekte kostnadene. Målet er å finne produktets **selvkost**, som er den totale kostnaden for å produsere og selge en enhet.

Selvkostmetoden er spesielt nyttig når bedriften skal sette priser som dekker alle kostnadene, og når den vil vite hva det egentlig koster å lage et produkt. Metoden kalles også **fullkostnadskalkulasjon** fordi den tar med alle kostnader.`,
    },
    {
      id: 'od-1-2-def-selvkost',
      type: 'definition',
      title: 'Selvkost',
      content: `**Selvkost** er summen av alle kostnader knyttet til produksjon og salg av en enhet, inkludert en forholdsmessig andel av bedriftens indirekte kostnader.

Selvkost = Direkte materialer + Direkte lønn + Indirekte kostnader (fordelt)

Utfordringen med selvkostkalkylen er at de indirekte kostnadene må fordeles på produktene ved hjelp av tilleggssatser, og denne fordelingen vil alltid innebære et element av skjønn.`,
    },

    // ========== KALKYLEOPPSETT ==========
    {
      id: 'od-1-2-text-oppsett',
      type: 'text',
      content: `## Kalkyleoppsett for selvkostmetoden

Selvkostkalkulasjonen følger et standardisert oppsett der vi bygger opp kostnadene lag for lag. De indirekte kostnadene fordeles ved hjelp av **tilleggssatser** som beregnes som en prosentandel av de direkte kostnadene.`,
    },
    {
      id: 'od-1-2-def-oppsett',
      type: 'definition',
      title: 'Selvkostkalkulasjonen - standardoppsett',
      content: `| Post | |
|---|---|
| Direkte materialer | xxx |
| + Materialadministrasjon (% av dir. mat.) | xxx |
| = **Materialkost** | xxx |
| Direkte lønn | xxx |
| + Indirekte kostnader, tilvirkning (% av dir. lønn) | xxx |
| = **Tilvirkningskost** | xxx |
| + Indirekte kostnader, salg og admin. (% av tilv.kost) | xxx |
| = **Selvkost** | xxx |
| + Fortjeneste (% av selvkost) | xxx |
| = **Salgspris ekskl. mva.** | xxx |`,
    },

    // ========== TILLEGGSSATSER ==========
    {
      id: 'od-1-2-text-tillegg',
      type: 'text',
      content: `## Tilleggssatser

Tilleggssatsene brukes til å fordele de indirekte kostnadene på produktene. Satsene beregnes normalt ut fra fjorårets regnskap eller budsjettet for inneværende år.`,
    },
    {
      id: 'od-1-2-def-tillegg',
      type: 'definition',
      title: 'Beregning av tilleggssatser',
      content: `**Materialadministrasjonstillegg (MAT):**
$$\\text{MAT} = \\frac{\\text{Indirekte materialkostnader}}{\\text{Direkte materialer}} \\times 100\\%$$

**Tilvirkningstillegg (TT):**
$$\\text{TT} = \\frac{\\text{Indirekte tilvirkningskostnader}}{\\text{Direkte lønn}} \\times 100\\%$$

**Salgs- og administrasjonstillegg (SAT):**
$$\\text{SAT} = \\frac{\\text{Salgs- og adm.kostnader}}{\\text{Tilvirkningskost}} \\times 100\\%$$

Disse satsene er normalt basert på budsjetterte tall og beregnes for en hel periode.`,
    },
    {
      id: 'od-1-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Beregne tilleggssatser',
      problem: `Fra fjorårets regnskap henter vi følgende tall:
- Direkte materialer: 2 000 000 kr
- Indirekte materialkostnader: 200 000 kr
- Direkte lønn: 1 500 000 kr
- Indirekte tilvirkningskostnader: 750 000 kr
- Salgs- og adm.kostnader: 670 000 kr

Beregn tilleggssatsene.`,
      solution: `**Materialadministrasjonstillegg:**
MAT = 200 000 / 2 000 000 $\\times$ 100 % = **10 %**

**Tilvirkningskost** (trenger vi for SAT):
Materialkost = 2 000 000 + 200 000 = 2 200 000
Tilvirkningskost = 2 200 000 + 1 500 000 + 750 000 = 4 450 000

**Tilvirkningstillegg:**
TT = 750 000 / 1 500 000 $\\times$ 100 % = **50 %**

**Salgs- og administrasjonstillegg:**
SAT = 670 000 / 4 450 000 $\\times$ 100 % = **15 %**`,
    },
    {
      id: 'od-1-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Fullstendig selvkostkalkulasjon',
      problem: `En bedrift produserer produkt X med følgende data per enhet:
- Direkte materialer: 500 kr
- Direkte lønn: 300 kr

Tilleggssatser: MAT = 10 %, TT = 50 %, SAT = 15 %, fortjeneste = 20 %.

Sett opp en fullstendig selvkostkalkulasjon og finn salgsprisen.`,
      solution: `| Post | Beregning | Beløp |
|---|---|---|
| Direkte materialer | | 500 kr |
| + Materialadm. (10 % av 500) | | 50 kr |
| = **Materialkost** | | **550 kr** |
| Direkte lønn | | 300 kr |
| + Ind. tilvirkning (50 % av 300) | | 150 kr |
| = **Tilvirkningskost** | 550 + 300 + 150 | **1 000 kr** |
| + Salg og adm. (15 % av 1 000) | | 150 kr |
| = **Selvkost** | | **1 150 kr** |
| + Fortjeneste (20 % av 1 150) | | 230 kr |
| = **Salgspris ekskl. mva.** | | **1 380 kr** |`,
    },
    {
      id: 'od-1-2-tip-1',
      type: 'tip',
      content: `**Husk rekkefølgen i kalkulasjonsoppsettet:**

1. Start alltid med direkte materialer
2. Legg til materialadministrasjon for å finne materialkost
3. Legg til direkte lønn og tilvirkningstillegg for å finne tilvirkningskost
4. Legg til salg og administrasjon for å finne selvkost
5. Legg til fortjeneste for å finne salgspris

Tilleggssatsene beregnes alltid som prosent av en bestemt basis (dir. mat., dir. lønn, eller tilv.kost).`,
    },
  ],
  exercises: [
    {
      id: 'od-1-2-ex-1',
      number: '1.2.1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er selvkost?',
      options: [
        { id: 'a', text: 'Summen av direkte materialer og direkte lønn', isCorrect: false, feedback: 'Dette er bare de direkte kostnadene. Selvkost inkluderer også indirekte kostnader.' },
        { id: 'b', text: 'Summen av alle kostnader knyttet til produksjon og salg av en enhet', isCorrect: true },
        { id: 'c', text: 'Bare de variable kostnadene per enhet', isCorrect: false, feedback: 'Selvkost inkluderer alle kostnader, også faste indirekte kostnader.' },
        { id: 'd', text: 'Salgsprisen minus fortjeneste og mva.', isCorrect: false, feedback: 'Selv om dette kan brukes til å beregne selvkost baklengs, er det ikke definisjonen.' },
      ],
      solution: 'Selvkost er summen av alle kostnader knyttet til produksjon og salg av en enhet. Det inkluderer direkte materialer, direkte lønn, og en forholdsmessig andel av alle indirekte kostnader (materialadministrasjon, tilvirkning, salg og administrasjon).',
    },
    {
      id: 'od-1-2-ex-2',
      number: '1.2.2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Direkte materialer er 600 kr, MAT er 10 %, direkte lønn er 400 kr, og TT er 50 %. Hva er tilvirkningskostnaden?',
      options: [
        { id: 'a', text: '1 000 kr', isCorrect: false, feedback: 'Du har bare lagt sammen direkte materialer og direkte lønn uten tillegg.' },
        { id: 'b', text: '1 060 kr', isCorrect: false, feedback: 'Du har lagt til MAT men glemt tilvirkningstillegget.' },
        { id: 'c', text: '1 260 kr', isCorrect: true },
        { id: 'd', text: '1 460 kr', isCorrect: false, feedback: 'Du har beregnet tilvirkningstillegget feil. TT beregnes av direkte lønn, ikke av materialkost.' },
      ],
      solution: 'Materialkost = 600 + 60 (10 % av 600) = 660 kr. Tilvirkningstillegg = 50 % av 400 = 200 kr. Tilvirkningskost = 660 + 400 + 200 = 1 260 kr.',
    },
    {
      id: 'od-1-2-ex-3',
      number: '1.2.3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Forklar hva tilleggssatser er og hvorfor de brukes i selvkostkalkulasjonen.',
      solution: 'Tilleggssatser er prosenttillegg som brukes til å fordele indirekte kostnader på produktene. De beregnes ved å dele de indirekte kostnadene på en relevant basis (direkte materialer, direkte lønn eller tilvirkningskost). De brukes fordi indirekte kostnader ikke kan henføres direkte til enkeltprodukter, men likevel må inkluderes i kalkulasjonen for å finne produktets fulle kostnad.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'od-1-2-ex-4',
      number: '1.2.4',
      type: 'classic',
      difficulty: 'medium',
      task: 'En bedrift har direkte materialer 800 kr, direkte lønn 500 kr, MAT 12 %, TT 60 %, SAT 10 %, og fortjeneste 25 %. Sett opp en fullstendig selvkostkalkulasjon og finn salgsprisen.',
      solution: 'Direkte materialer: 800. MAT: 12 % av 800 = 96. Materialkost: 896. Direkte lønn: 500. Tilvirkningstillegg: 60 % av 500 = 300. Tilvirkningskost: 896 + 500 + 300 = 1 696. SAT: 10 % av 1 696 = 169,60. Selvkost: 1 696 + 169,60 = 1 865,60. Fortjeneste: 25 % av 1 865,60 = 466,40. Salgspris ekskl. mva.: 1 865,60 + 466,40 = 2 332 kr.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'od-1-2-ex-5',
      number: '1.2.5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Fra regnskapet til en bedrift: direkte materialer 3 000 000 kr, indirekte materialkostnader 360 000 kr, direkte lønn 2 000 000 kr, indirekte tilvirkningskostnader 1 000 000 kr, salgs- og adm.kostnader 890 000 kr. Beregn alle tre tilleggssatsene.',
      solution: 'MAT = 360 000 / 3 000 000 x 100 = 12 %. Materialkost = 3 000 000 + 360 000 = 3 360 000. Tilvirkningskost = 3 360 000 + 2 000 000 + 1 000 000 = 6 360 000. TT = 1 000 000 / 2 000 000 x 100 = 50 %. SAT = 890 000 / 6 360 000 x 100 = 14 %.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'od-1-2-ex-6',
      number: '1.2.6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En bedrift har to produkter, A og B. Produkt A bruker 1 200 kr i direkte materialer og 800 kr i direkte lønn. Produkt B bruker 700 kr i direkte materialer og 1 100 kr i direkte lønn. Tilleggssatsene er MAT 8 %, TT 45 %, SAT 12 %. Sett opp selvkostkalkulasjon for begge produkter og kommenter forskjellene.',
      solution: 'Produkt A: Dir. mat. 1 200 + MAT 96 = Matkost 1 296. Dir. lønn 800 + TT 360 = Tilv.kost 1 296 + 800 + 360 = 2 456. SAT 12 % av 2 456 = 294,72. Selvkost A = 2 750,72 kr. Produkt B: Dir. mat. 700 + MAT 56 = Matkost 756. Dir. lønn 1 100 + TT 495 = Tilv.kost 756 + 1 100 + 495 = 2 351. SAT 12 % av 2 351 = 282,12. Selvkost B = 2 633,12 kr. Produkt A har høyere materialkost, mens produkt B har høyere lønnskost og dermed høyere tilvirkningstillegg. Totalt blir selvkost for A noe høyere enn for B.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};

// ============================================================================
// KAPITTEL 1.3: Bidragskalkulasjon
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_1_3: TextbookChapter = {
  id: 'okonomi-drift-1-3',
  courseId: 'okonomi-drift',
  chapterNumber: '1.3',
  title: 'Bidragskalkulasjon',
  description: 'Lær om bidragsmetoden med dekningsbidrag, dekningsgrad og nullpunktsanalyse.',
  estimatedMinutes: 20,
  competenceGoals: ['gjere greie for og bruke ulike kalkulasjonsmetodar'],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'od-1-3-intro',
      type: 'text',
      content: `## Bidragsmetoden - et alternativ til selvkost

Mens selvkostmetoden fordeler alle kostnader på produktene, tar bidragsmetoden en annen tilnærming. Her ser vi bare på de variable kostnadene per produkt og beregner hvor mye hvert produkt **bidrar** til å dekke de faste kostnadene og gi fortjeneste.

Bidragsmetoden er spesielt nyttig for kortsiktige beslutninger, for eksempel om bedriften bør ta imot en ekstraordre, eller hvilket produkt man bør satse på ved begrenset kapasitet.`,
    },
    {
      id: 'od-1-3-def-db',
      type: 'definition',
      title: 'Dekningsbidrag (DB)',
      content: `**Dekningsbidrag** er differansen mellom salgsinntekt og variable kostnader. Det viser hvor mye produktet bidrar til å dekke de faste kostnadene og gi fortjeneste.

$$\\text{Dekningsbidrag per enhet (DB)} = \\text{Salgspris} - \\text{Variable kostnader per enhet}$$

$$\\text{Totalt dekningsbidrag (TDB)} = \\text{Totale salgsinntekter} - \\text{Totale variable kostnader}$$

$$\\text{Resultat} = \\text{TDB} - \\text{Faste kostnader}$$

Så lenge DB per enhet er positivt, bidrar hvert solgte produkt til å dekke de faste kostnadene.`,
    },
    {
      id: 'od-1-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Dekningsbidrag',
      problem: `En bedrift selger et produkt for 500 kr per enhet. Variable kostnader er 300 kr per enhet. Faste kostnader er 400 000 kr per år. Bedriften selger 3 000 enheter.

Beregn dekningsbidrag per enhet, totalt dekningsbidrag og resultatet.`,
      solution: `**Dekningsbidrag per enhet:**
DB = 500 - 300 = **200 kr**

**Totalt dekningsbidrag:**
TDB = 3 000 $\\times$ 200 = **600 000 kr**

**Resultat:**
Resultat = TDB - FK = 600 000 - 400 000 = **200 000 kr (overskudd)**`,
    },

    // ========== DEKNINGSGRAD ==========
    {
      id: 'od-1-3-text-dg',
      type: 'text',
      content: `## Dekningsgrad

Dekningsgraden forteller oss hvor stor andel av salgsinntekten som er dekningsbidrag. Den uttrykkes i prosent og er et nyttig nøkkeltall for å sammenligne lønnsomheten til ulike produkter.`,
    },
    {
      id: 'od-1-3-def-dg',
      type: 'definition',
      title: 'Dekningsgrad (DG)',
      content: `**Dekningsgrad** er dekningsbidraget uttrykt som prosent av salgsinntekten.

$$\\text{DG} = \\frac{\\text{DB per enhet}}{\\text{Salgspris per enhet}} \\times 100\\%$$

En høy dekningsgrad betyr at en stor andel av salgsinntekten bidrar til å dekke faste kostnader og fortjeneste. En dekningsgrad på 40 % betyr at for hver krone i salg går 40 øre til dekning.`,
    },
    {
      id: 'od-1-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Dekningsgrad',
      problem: `Beregn dekningsgraden for følgende produkter:
- Produkt A: Salgspris 800 kr, variable kostnader 480 kr
- Produkt B: Salgspris 1 200 kr, variable kostnader 900 kr

Hvilket produkt har best dekningsgrad?`,
      solution: `**Produkt A:**
DB = 800 - 480 = 320 kr
DG = 320 / 800 $\\times$ 100 % = **40 %**

**Produkt B:**
DB = 1 200 - 900 = 300 kr
DG = 300 / 1 200 $\\times$ 100 % = **25 %**

Produkt A har best dekningsgrad (40 % mot 25 %). Selv om produkt B har høyere salgspris, er en større andel av prisen bundet opp i variable kostnader. For hver krone i salg gir produkt A 40 øre til dekning, mot bare 25 øre for produkt B.`,
    },

    // ========== NULLPUNKTSANALYSE ==========
    {
      id: 'od-1-3-text-null',
      type: 'text',
      content: `## Nullpunktsanalyse

Nullpunktet (break-even) er det produksjons- og salgsvolumet der bedriften verken tjener eller taper penger. Ved nullpunktet er det totale dekningsbidraget akkurat stort nok til å dekke de faste kostnadene.

For ledelsen er det viktig å vite hvor mye som må selges for å gå i null, og hvor stor **sikkerhetsmargin** bedriften har - altså avstanden mellom faktisk salg og nullpunktet.`,
    },
    {
      id: 'od-1-3-def-null',
      type: 'definition',
      title: 'Nullpunkt (break-even)',
      content: `**Nullpunktet** er det volumet der resultat = 0, altså der totalt dekningsbidrag = faste kostnader.

**I antall enheter:**
$$\\text{Nullpunkt (enheter)} = \\frac{\\text{Faste kostnader}}{\\text{DB per enhet}}$$

**I salgskroner:**
$$\\text{Nullpunkt (kr)} = \\frac{\\text{Faste kostnader}}{\\text{Dekningsgrad (som desimaltall)}}$$

**Sikkerhetsmargin:**
$$\\text{SM} = \\frac{\\text{Faktisk salg} - \\text{Nullpunktsalg}}{\\text{Faktisk salg}} \\times 100\\%$$

Under nullpunktet går bedriften med underskudd. Over nullpunktet tjener bedriften penger.`,
    },
    {
      id: 'od-1-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Nullpunktsanalyse',
      problem: `En bedrift har salgspris 400 kr per enhet, variable kostnader 240 kr per enhet og faste kostnader 320 000 kr per år.

a) Beregn nullpunktet i antall enheter
b) Beregn nullpunktet i salgskroner
c) Hva blir resultatet ved salg av 2 500 enheter?`,
      solution: `**a) Nullpunkt i enheter:**
DB per enhet = 400 - 240 = 160 kr
Nullpunkt = 320 000 / 160 = **2 000 enheter**

**b) Nullpunkt i salgskroner:**
DG = 160 / 400 = 0,40 = 40 %
Nullpunkt = 320 000 / 0,40 = **800 000 kr**

Kontroll: 2 000 enheter $\\times$ 400 kr = 800 000 kr

**c) Resultat ved 2 500 enheter:**
TDB = 2 500 $\\times$ 160 = 400 000 kr
Resultat = 400 000 - 320 000 = **80 000 kr (overskudd)**

Bedriften selger 500 enheter over nullpunktet. Sikkerhetsmarginen er 500 / 2 500 = 20 %.`,
    },
  ],
  exercises: [
    {
      id: 'od-1-3-ex-1',
      number: '1.3.1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er dekningsbidrag per enhet?',
      options: [
        { id: 'a', text: 'Salgspris minus alle kostnader per enhet', isCorrect: false, feedback: 'Det du beskriver er resultat per enhet (fortjeneste). DB trekker bare fra variable kostnader.' },
        { id: 'b', text: 'Salgspris minus variable kostnader per enhet', isCorrect: true },
        { id: 'c', text: 'Variable kostnader minus faste kostnader', isCorrect: false, feedback: 'Dekningsbidrag beregnes ut fra salgspris, ikke som differanse mellom kostnadstyper.' },
        { id: 'd', text: 'Salgspris minus faste kostnader per enhet', isCorrect: false, feedback: 'DB handler om variable kostnader, ikke faste. Faste kostnader trekkes fra totalt DB for å finne resultat.' },
      ],
      solution: 'Dekningsbidrag per enhet er salgspris minus variable kostnader per enhet. Det viser hvor mye hvert solgte produkt bidrar til å dekke de faste kostnadene og gi fortjeneste.',
    },
    {
      id: 'od-1-3-ex-2',
      number: '1.3.2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En bedrift har salgspris 600 kr, variable kostnader 360 kr og faste kostnader 480 000 kr. Hva er nullpunktet i antall enheter?',
      options: [
        { id: 'a', text: '800 enheter', isCorrect: false, feedback: 'DB = 600 - 360 = 240. Nullpunkt = 480 000 / 240 = 2 000.' },
        { id: 'b', text: '1 333 enheter', isCorrect: false, feedback: 'Du har delt faste kostnader på variable kostnader per enhet i stedet for dekningsbidraget.' },
        { id: 'c', text: '2 000 enheter', isCorrect: true },
        { id: 'd', text: '2 400 enheter', isCorrect: false, feedback: 'Sjekk utregningen. DB = 600 - 360 = 240. Nullpunkt = 480 000 / 240 = 2 000.' },
      ],
      solution: 'DB per enhet = 600 - 360 = 240 kr. Nullpunkt = FK / DB = 480 000 / 240 = 2 000 enheter. Ved salg av 2 000 enheter er TDB = 2 000 x 240 = 480 000 kr, som akkurat dekker de faste kostnadene.',
    },
    {
      id: 'od-1-3-ex-3',
      number: '1.3.3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Forklar forskjellen mellom selvkostmetoden og bidragsmetoden. Når er bidragsmetoden mest nyttig?',
      solution: 'Selvkostmetoden fordeler alle kostnader (faste og variable) på produktene, mens bidragsmetoden bare beregner variable kostnader per produkt og ser på bidraget til dekning av faste kostnader. Bidragsmetoden er mest nyttig ved kortsiktige beslutninger, for eksempel om en ekstraordre bør aksepteres, ved valg av produktmiks, og ved nullpunktsanalyser. Selvkostmetoden passer bedre for langsiktig prissetting der alle kostnader skal dekkes.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'od-1-3-ex-4',
      number: '1.3.4',
      type: 'classic',
      difficulty: 'medium',
      task: 'En butikk selger et produkt for 250 kr. Variable kostnader er 150 kr per enhet og faste kostnader er 200 000 kr per år. Beregn dekningsbidrag, dekningsgrad, nullpunkt i enheter og i kroner, og resultatet ved salg av 2 500 enheter.',
      solution: 'DB = 250 - 150 = 100 kr per enhet. DG = 100 / 250 x 100 = 40 %. Nullpunkt i enheter = 200 000 / 100 = 2 000 enheter. Nullpunkt i kroner = 200 000 / 0,40 = 500 000 kr. Ved 2 500 enheter: TDB = 2 500 x 100 = 250 000 kr. Resultat = 250 000 - 200 000 = 50 000 kr overskudd. Sikkerhetsmarginen er 500 enheter (20 %).',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'od-1-3-ex-5',
      number: '1.3.5',
      type: 'classic',
      difficulty: 'medium',
      task: 'En bedrift produserer to produkter. Produkt X: salgspris 300 kr, VK 180 kr. Produkt Y: salgspris 500 kr, VK 350 kr. Faste kostnader er 360 000 kr. Bedriften selger 2 000 av X og 1 000 av Y. Beregn DB og DG for hvert produkt, totalt DB og resultatet.',
      solution: 'Produkt X: DB = 300 - 180 = 120 kr, DG = 120/300 = 40 %. Produkt Y: DB = 500 - 350 = 150 kr, DG = 150/500 = 30 %. Totalt DB: X: 2 000 x 120 = 240 000 kr. Y: 1 000 x 150 = 150 000 kr. Samlet TDB = 240 000 + 150 000 = 390 000 kr. Resultat = 390 000 - 360 000 = 30 000 kr overskudd. Produkt X har best dekningsgrad (40 % mot 30 %), men produkt Y gir høyere DB per enhet.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'od-1-3-ex-6',
      number: '1.3.6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En bedrift har faste kostnader på 600 000 kr. De vurderer to ulike produktstrategier. Strategi A: salgspris 400 kr, VK 200 kr. Strategi B: salgspris 300 kr, VK 120 kr. Beregn nullpunktet for hver strategi. Hvilken strategi gir lavest risiko? Hvilken gir best resultat ved salg av 4 000 enheter?',
      solution: 'Strategi A: DB = 400 - 200 = 200 kr. DG = 50 %. Nullpunkt = 600 000 / 200 = 3 000 enheter. Strategi B: DB = 300 - 120 = 180 kr. DG = 60 %. Nullpunkt = 600 000 / 180 = 3 333 enheter. Strategi A har lavest nullpunkt (3 000 mot 3 333), altså lavest risiko. Ved 4 000 enheter: A: TDB = 4 000 x 200 = 800 000, resultat = 200 000 kr. B: TDB = 4 000 x 180 = 720 000, resultat = 120 000 kr. Strategi A gir best resultat ved 4 000 enheter. Selv om B har høyere dekningsgrad, gir A høyere DB per enhet og dermed bedre resultat.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};

// ============================================================================
// KAPITTEL 1.4: Prissetting
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_1_4: TextbookChapter = {
  id: 'okonomi-drift-1-4',
  courseId: 'okonomi-drift',
  chapterNumber: '1.4',
  title: 'Prissetting',
  description: 'Lær om kostnadsbasert, markedsbasert og verdibasert prissetting.',
  estimatedMinutes: 20,
  competenceGoals: ['drøfte ulike prisstrategiar og tilpassing til marknaden'],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'od-1-4-intro',
      type: 'text',
      content: `## Hvordan sette riktig pris?

Prissetting er en av de viktigste beslutningene en bedrift tar. Prisen påvirker direkte hvor mye bedriften selger, og dermed inntektene og lønnsomheten. En for høy pris kan føre til at kundene velger konkurrentene, mens en for lav pris kan bety at bedriften ikke dekker kostnadene sine.

Det finnes tre hovedtilnærminger til prissetting:
1. **Kostnadsbasert prissetting** - ta utgangspunkt i hva produktet koster
2. **Markedsbasert prissetting** - ta utgangspunkt i hva markedet er villig til å betale
3. **Verdibasert prissetting** - ta utgangspunkt i verdien produktet skaper for kunden`,
    },

    // ========== KOSTNADSBASERT ==========
    {
      id: 'od-1-4-def-kostbasert',
      type: 'definition',
      title: 'Kostnadsbasert prissetting',
      content: `**Kostnadsbasert prissetting** (cost-plus pricing) innebærer at bedriften beregner hva produktet koster og legger til en ønsket fortjenestemargin.

$$\\text{Salgspris} = \\text{Selvkost} \\times (1 + \\text{fortjenesteprosent})$$

**Fordeler:** Enkel å beregne, sikrer at kostnadene dekkes.
**Ulemper:** Tar ikke hensyn til konkurranse eller hva kundene er villige til å betale.`,
    },
    {
      id: 'od-1-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Kostnadsbasert prissetting',
      problem: `En bedrift har beregnet selvkost til 800 kr per enhet. De ønsker 25 % fortjeneste.

a) Hva blir salgsprisen ekskl. mva.?
b) Hva blir salgsprisen inkl. 25 % mva.?`,
      solution: `**a) Salgspris ekskl. mva.:**
Salgspris = 800 $\\times$ 1,25 = **1 000 kr**

**b) Salgspris inkl. mva.:**
Salgspris inkl. mva. = 1 000 $\\times$ 1,25 = **1 250 kr**`,
    },

    // ========== MARKEDSBASERT ==========
    {
      id: 'od-1-4-def-markedsbasert',
      type: 'definition',
      title: 'Markedsbasert prissetting',
      content: `**Markedsbasert prissetting** tar utgangspunkt i markedet og konkurrentenes priser. Bedriften tilpasser sin pris til det nivået markedet aksepterer.

Vanlige strategier:
- **Prislederstrategi** - sette prisen lavere enn konkurrentene for å ta markedsandeler
- **Prisfølgerstrategi** - følge markedslederen og sette tilsvarende pris
- **Premium-prising** - sette prisen høyere for å signalisere høy kvalitet

**Fordeler:** Tar hensyn til konkurransesituasjonen.
**Ulemper:** Kan føre til priskrig dersom alle forsøker å underby hverandre. Risiko for at prisen ikke dekker kostnadene.`,
    },
    {
      id: 'od-1-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Markedsbasert prissetting',
      problem: `Tre konkurrenter selger lignende produkter til henholdsvis 450 kr, 480 kr og 520 kr. Din bedrift har en selvkost på 350 kr.

a) Hva bør prisen være med en prisfølgerstrategi?
b) Hva blir fortjenesten per enhet dersom du setter pris lik gjennomsnittlig markedspris?
c) Hva er laveste pris du kan sette og fortsatt dekke selvkost?`,
      solution: `**a) Prisfølgerstrategi:**
Gjennomsnittlig markedspris = (450 + 480 + 520) / 3 = **483 kr**
En prisfølgerstrategi tilsier en pris rundt 480-490 kr.

**b) Fortjeneste ved gjennomsnittspris:**
Fortjeneste = 483 - 350 = **133 kr per enhet**
Fortjenestemargin = 133 / 350 $\\times$ 100 % = 38 %

**c) Laveste pris:**
Laveste pris for å dekke selvkost = **350 kr**
Men dette gir null fortjeneste og er ikke bærekraftig over tid.`,
    },

    // ========== VERDIBASERT ==========
    {
      id: 'od-1-4-def-verdibasert',
      type: 'definition',
      title: 'Verdibasert prissetting',
      content: `**Verdibasert prissetting** tar utgangspunkt i den verdien produktet skaper for kunden, uavhengig av hva det koster å produsere.

Kunden vurderer verdien ut fra:
- Hvor mye nytte produktet gir
- Hvilke problemer det løser
- Hva alternativene koster
- Emosjonelle faktorer (merkevare, status, tilhørighet)

**Fordeler:** Kan gi høy fortjeneste dersom verdien for kunden er stor.
**Ulemper:** Vanskelig å måle kundens opplevde verdi nøyaktig.`,
    },
    {
      id: 'od-1-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Verdibasert prissetting',
      problem: `Et IT-selskap utvikler en programvare som sparer bedriftskunder 500 000 kr per år i effektivisering. Utviklingskostnaden er 200 kr per lisens per år.

Vurder prissetting basert på de tre tilnærmingene:
- Kostnadsbasert med 100 % påslag
- Markedspris for tilsvarende programvare: 50 000 kr per år
- Verdibasert med 20 % av besparelsen`,
      solution: `**Kostnadsbasert:** 200 $\\times$ 2 = **400 kr per år**
Altfor lavt - utnytter ikke verdien som skapes.

**Markedsbasert:** Ca. **50 000 kr per år**
Rimelig, men tar kanskje ikke hensyn til at denne løsningen er bedre enn konkurrentenes.

**Verdibasert:** 20 % av 500 000 = **100 000 kr per år**
Kunden sparer fortsatt 400 000 kr per år, og prisen reflekterer den reelle verdien.

I dette tilfellet gir verdibasert prissetting den høyeste prisen, men kunden får fortsatt stor verdi. Kostnadsbasert prissetting ville gitt en altfor lav pris som ikke reflekterer produktets verdi.`,
    },
    {
      id: 'od-1-4-tip-1',
      type: 'tip',
      content: `**I praksis kombinerer bedrifter ofte flere tilnærminger:**

- Selvkost gir et **gulv** - prisen kan ikke ligge under dette på sikt
- Markedspris gir et **referansepunkt** - hva kundene forventer
- Opplevd verdi gir et **tak** - maksimalt hva kundene vil betale

Den optimale prisen ligger et sted mellom gulvet og taket, avhengig av konkurransesituasjonen og posisjoneringen bedriften ønsker.`,
    },
  ],
  exercises: [
    {
      id: 'od-1-4-ex-1',
      number: '1.4.1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken prissettingsmetode tar utgangspunkt i hva produktet koster å produsere?',
      options: [
        { id: 'a', text: 'Markedsbasert prissetting', isCorrect: false, feedback: 'Markedsbasert prissetting tar utgangspunkt i konkurrentenes priser og markedets betalingsvilje.' },
        { id: 'b', text: 'Verdibasert prissetting', isCorrect: false, feedback: 'Verdibasert prissetting tar utgangspunkt i verdien produktet skaper for kunden.' },
        { id: 'c', text: 'Kostnadsbasert prissetting', isCorrect: true },
        { id: 'd', text: 'Dynamisk prissetting', isCorrect: false, feedback: 'Dynamisk prissetting justerer prisen basert på etterspørsel i sanntid.' },
      ],
      solution: 'Kostnadsbasert prissetting (cost-plus pricing) tar utgangspunkt i selvkost og legger til en fortjenestemargin. Det er den enkleste metoden, men den tar ikke hensyn til markedet eller kundens opplevde verdi.',
    },
    {
      id: 'od-1-4-ex-2',
      number: '1.4.2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En bedrift har selvkost 500 kr og ønsker 30 % fortjeneste. Hva blir salgsprisen ekskl. mva.?',
      options: [
        { id: 'a', text: '530 kr', isCorrect: false, feedback: '30 % av 500 er 150, ikke 30.' },
        { id: 'b', text: '600 kr', isCorrect: false, feedback: '30 % av 500 er 150, ikke 100.' },
        { id: 'c', text: '650 kr', isCorrect: true },
        { id: 'd', text: '750 kr', isCorrect: false, feedback: '30 % av 500 er 150, ikke 250.' },
      ],
      solution: 'Fortjeneste = 30 % av 500 = 150 kr. Salgspris = 500 + 150 = 650 kr. Alternativt: 500 x 1,30 = 650 kr.',
    },
    {
      id: 'od-1-4-ex-3',
      number: '1.4.3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Beskriv de tre hovedtilnærmingene til prissetting og gi ett eksempel der hver tilnærming passer best.',
      solution: 'Kostnadsbasert prissetting: Beregner selvkost og legger til fortjeneste. Passer best for prosjektarbeid og skreddersydde produkter der kostnadene er kjente. Markedsbasert prissetting: Setter pris basert på konkurrentene. Passer best i markeder med mange like produkter, f.eks. dagligvarer. Verdibasert prissetting: Setter pris ut fra verdien for kunden. Passer best for unike produkter som skaper stor verdi, f.eks. spesialisert programvare eller luksusvarer.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'od-1-4-ex-4',
      number: '1.4.4',
      type: 'classic',
      difficulty: 'medium',
      task: 'En bedrift har selvkost 1 200 kr. Konkurrentenes priser er 1 500 kr, 1 600 kr og 1 800 kr. Bedriften vil ha minst 20 % fortjenestemargin. Hva bør prisen være? Vurder ut fra både kostnads- og markedsperspektiv.',
      solution: 'Kostnadsbasert minimumspris: 1 200 x 1,20 = 1 440 kr (20 % margin). Gjennomsnittlig markedspris: (1 500 + 1 600 + 1 800) / 3 = 1 633 kr. Anbefalt pris: 1 500-1 600 kr. Dette gir en fortjeneste på 300-400 kr (25-33 % margin), som er over kravet på 20 %. Prisen er konkurransedyktig i markedet og gir god lønnsomhet.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'od-1-4-ex-5',
      number: '1.4.5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva som menes med priselastisitet og hvorfor det er relevant for prissetting. Gi eksempler på produkter med høy og lav priselastisitet.',
      solution: 'Priselastisitet viser hvor mye etterspørselen endrer seg når prisen endres. Høy priselastisitet betyr at kundene er prisfølsomme, og at en prisøkning fører til stort fall i salget. Lav priselastisitet betyr at etterspørselen er relativt stabil selv ved prisendringer. Høy elastisitet: flyreiser, restaurantbesøk, merkeklær. Lav elastisitet: medisiner, drivstoff, basismatvarer. Priselastisitet er viktig for prissetting fordi det avgjør om en prisøkning vil gi høyere eller lavere totalinntekt.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'od-1-4-ex-6',
      number: '1.4.6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Et konsulentfirma har utviklet en effektiviseringsløsning som sparer kunder 800 000 kr i året. Selvkost for å levere løsningen er 120 000 kr per kunde. Markedspris for tilsvarende tjenester er 250 000 kr. Beregn prisen med alle tre metoder (kostnadsbasert med 40 % påslag, markedsbasert, verdibasert med 25 % av besparelsen) og argumenter for hvilken pris du anbefaler.',
      solution: 'Kostnadsbasert: 120 000 x 1,40 = 168 000 kr. Markedsbasert: ca. 250 000 kr. Verdibasert: 25 % av 800 000 = 200 000 kr. Anbefaling: En pris rundt 200 000-250 000 kr. Kostnadsbasert gir for lav pris som ikke reflekterer verdien. Verdibasert (200 000 kr) er rimelig fordi kunden fortsatt sparer 600 000 kr. Markedsprisen (250 000 kr) kan brukes dersom løsningen er minst like god som konkurrentenes. Den optimale prisen avhenger av hvor mye bedre løsningen er enn konkurrentenes.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};

// ============================================================================
// KAPITTEL 1.5: Lønnsomhetsanalyse
// ============================================================================

export const CHAPTER_OKONOMI_DRIFT_1_5: TextbookChapter = {
  id: 'okonomi-drift-1-5',
  courseId: 'okonomi-drift',
  chapterNumber: '1.5',
  title: 'Lønnsomhetsanalyse',
  description: 'Lær om resultatgrad, kapitalrentabilitet og andre nøkkeltall for å vurdere bedriftens lønnsomhet.',
  estimatedMinutes: 20,
  competenceGoals: ['analysere og vurdere lønnsemd i verksemder'],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'od-1-5-intro',
      type: 'text',
      content: `## Lønnsomhetsanalyse - er bedriften lønnsom?

Lønnsomhet handler om evnen til å skape overskudd. En bedrift er lønnsom dersom inntektene er større enn kostnadene over tid. Men et positivt resultat alene sier ikke nok. Vi trenger nøkkeltall som gjør det mulig å sammenligne lønnsomheten over tid og mellom bedrifter.

I dette kapittelet ser vi på de viktigste nøkkeltallene for lønnsomhet: resultatgrad, totalkapitalrentabilitet, egenkapitalrentabilitet og DuPont-modellen som viser sammenhengen mellom dem.`,
    },

    // ========== RESULTATGRAD ==========
    {
      id: 'od-1-5-def-resultatgrad',
      type: 'definition',
      title: 'Resultatgrad',
      content: `**Resultatgrad** viser hvor stor andel av driftsinntektene som blir igjen som driftsresultat.

$$\\text{Resultatgrad} = \\frac{\\text{Driftsresultat}}{\\text{Driftsinntekter}} \\times 100\\%$$

Resultatgraden forteller oss hvor mange øre bedriften tjener per krone i omsetning. En resultatgrad på 10 % betyr at bedriften sitter igjen med 10 øre i driftsresultat for hver krone den omsetter for.

**Tommelfingerregel:** Resultatgrad over 10 % regnes som bra for de fleste bransjer.`,
    },
    {
      id: 'od-1-5-example-1',
      type: 'example',
      title: 'Eksempel 1: Resultatgrad',
      problem: `En bedrift har følgende tall fra årsregnskapet:
- Driftsinntekter: 8 000 000 kr
- Driftskostnader: 7 040 000 kr

Beregn resultatgraden og vurder den.`,
      solution: `Driftsresultat = 8 000 000 - 7 040 000 = 960 000 kr

$$\\text{Resultatgrad} = \\frac{960\\,000}{8\\,000\\,000} \\times 100\\% = 12\\%$$

**Vurdering:** En resultatgrad på 12 % er bra. Bedriften sitter igjen med 12 øre i driftsresultat for hver krone den omsetter for. Dette ligger over tommelfingerregelen på 10 %.`,
    },

    // ========== TOTALKAPITALRENTABILITET ==========
    {
      id: 'od-1-5-def-tkr',
      type: 'definition',
      title: 'Totalkapitalrentabilitet (TKR)',
      content: `**Totalkapitalrentabilitet** viser avkastningen på all kapital som er investert i bedriften, uavhengig av om den er finansiert med egenkapital eller gjeld.

$$\\text{TKR} = \\frac{\\text{Driftsresultat} + \\text{Finansinntekter}}{\\text{Gjennomsnittlig totalkapital}} \\times 100\\%$$

Gjennomsnittlig totalkapital = (Totalkapital primo + Totalkapital ultimo) / 2

TKR viser hvor godt bedriften utnytter kapitalen sin. Den bør være høyere enn renten bedriften betaler på lån.

**Tommelfingerregel:** TKR bør ligge over gjennomsnittlig lånerente, gjerne over 10-15 %.`,
    },
    {
      id: 'od-1-5-example-2',
      type: 'example',
      title: 'Eksempel 2: Totalkapitalrentabilitet',
      problem: `Fra regnskapet:
- Driftsresultat: 960 000 kr
- Finansinntekter: 40 000 kr
- Totalkapital 01.01: 5 000 000 kr
- Totalkapital 31.12: 5 400 000 kr

Beregn totalkapitalrentabiliteten.`,
      solution: `Gjennomsnittlig totalkapital = (5 000 000 + 5 400 000) / 2 = 5 200 000 kr

$$\\text{TKR} = \\frac{960\\,000 + 40\\,000}{5\\,200\\,000} \\times 100\\% = \\frac{1\\,000\\,000}{5\\,200\\,000} \\times 100\\% = 19{,}2\\%$$

**Vurdering:** En TKR på 19,2 % er svært bra. Bedriften genererer nesten 20 øre i avkastning for hver investerte krone. Dersom bedriftens gjennomsnittlige lånerente er f.eks. 5 %, betyr det at kapitalen gir langt bedre avkastning enn kostnaden ved å ha den.`,
    },

    // ========== EGENKAPITALRENTABILITET ==========
    {
      id: 'od-1-5-def-ekr',
      type: 'definition',
      title: 'Egenkapitalrentabilitet (EKR)',
      content: `**Egenkapitalrentabilitet** viser avkastningen på eiernes investerte kapital.

$$\\text{EKR} = \\frac{\\text{Ordinært resultat etter skatt}}{\\text{Gjennomsnittlig egenkapital}} \\times 100\\%$$

EKR er det mest relevante nøkkeltallet for eierne, fordi det viser hvor mye avkastning de får på pengene sine.

**Tommelfingerregel:** EKR bør være høyere enn risikofri rente pluss en risikopremie. Minimum 10-15 % for de fleste bransjer.`,
    },
    {
      id: 'od-1-5-example-3',
      type: 'example',
      title: 'Eksempel 3: Egenkapitalrentabilitet og DuPont-modellen',
      problem: `Fra regnskapet:
- Driftsinntekter: 8 000 000 kr
- Driftsresultat: 960 000 kr
- Ordinært resultat etter skatt: 640 000 kr
- Gjennomsnittlig totalkapital: 5 200 000 kr
- Gjennomsnittlig egenkapital: 2 200 000 kr

Beregn EKR og vis sammenhengen med DuPont-modellen.`,
      solution: `**Egenkapitalrentabilitet:**
$$\\text{EKR} = \\frac{640\\,000}{2\\,200\\,000} \\times 100\\% = 29{,}1\\%$$

En EKR på 29,1 % er svært bra. Eierne får nesten 30 % avkastning på sin investerte kapital.

**DuPont-modellen** viser sammenhengen mellom nøkkeltallene:

$$\\text{TKR} = \\text{Resultatgrad} \\times \\text{Kapitalens omløpshastighet}$$

Resultatgrad = 960 000 / 8 000 000 = 12 %
Kapitalens omløpshastighet = 8 000 000 / 5 200 000 = 1,54

TKR = 12 % $\\times$ 1,54 = **18,5 %**

Dette betyr at bedriften kan forbedre TKR enten ved å øke resultatgraden (bedre marginer) eller ved å øke omløpshastigheten (selge mer per investerte krone).`,
    },

    // ========== SAMMENHENG ==========
    {
      id: 'od-1-5-text-sammenheng',
      type: 'text',
      content: `## Sammenheng mellom nøkkeltallene

De ulike nøkkeltallene belyser forskjellige sider av bedriftens lønnsomhet:

| Nøkkeltall | Hva det viser | Hvem er interessert |
|---|---|---|
| Resultatgrad | Lønnsomhet per omsetningskrone | Ledelsen |
| TKR | Avkastning på all investert kapital | Banker og kreditorer |
| EKR | Avkastning for eierne | Eiere og investorer |

For en fullstendig lønnsomhetsanalyse bør man se på alle nøkkeltallene samlet og sammenligne med tidligere år og bransjetall.`,
    },
    {
      id: 'od-1-5-tip-1',
      type: 'tip',
      content: `**Noen bransjer har typisk høy resultatgrad og lav omløpshastighet** (f.eks. luksusvarer, legemidler), mens **andre har lav resultatgrad og høy omløpshastighet** (f.eks. dagligvarer, lavpriskjeder). Begge strategier kan gi god totalkapitalrentabilitet.

Sammenlign derfor alltid nøkkeltall med bedrifter i samme bransje for å få et rettvisende bilde.`,
    },
  ],
  exercises: [
    {
      id: 'od-1-5-ex-1',
      number: '1.5.1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva viser resultatgraden?',
      options: [
        { id: 'a', text: 'Avkastning på eiernes kapital', isCorrect: false, feedback: 'Det er egenkapitalrentabiliteten som viser avkastning på egenkapitalen.' },
        { id: 'b', text: 'Hvor stor andel av omsetningen som blir driftsresultat', isCorrect: true },
        { id: 'c', text: 'Hvor raskt bedriften selger varene sine', isCorrect: false, feedback: 'Det du beskriver er kapitalens omløpshastighet eller varelagerets omløpshastighet.' },
        { id: 'd', text: 'Forholdet mellom gjeld og egenkapital', isCorrect: false, feedback: 'Det du beskriver er gjeldsgrad, som er et soliditetsnøkkeltall.' },
      ],
      solution: 'Resultatgraden viser hvor stor andel av driftsinntektene som blir igjen som driftsresultat. En resultatgrad på 12 % betyr at bedriften tjener 12 øre per omsatt krone etter at driftskostnadene er trukket fra.',
    },
    {
      id: 'od-1-5-ex-2',
      number: '1.5.2',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En bedrift har driftsresultat 500 000 kr, finansinntekter 20 000 kr og gjennomsnittlig totalkapital 4 000 000 kr. Hva er totalkapitalrentabiliteten?',
      options: [
        { id: 'a', text: '12,5 %', isCorrect: false, feedback: 'Husk at TKR beregnes av driftsresultat pluss finansinntekter, ikke bare driftsresultat.' },
        { id: 'b', text: '13,0 %', isCorrect: true },
        { id: 'c', text: '13,5 %', isCorrect: false, feedback: 'Sjekk utregningen: (500 000 + 20 000) / 4 000 000 = 13,0 %.' },
        { id: 'd', text: '15,0 %', isCorrect: false, feedback: 'Sjekk utregningen: (500 000 + 20 000) / 4 000 000 = 13,0 %.' },
      ],
      solution: 'TKR = (Driftsresultat + Finansinntekter) / Gjennomsnittlig totalkapital x 100 = (500 000 + 20 000) / 4 000 000 x 100 = 520 000 / 4 000 000 x 100 = 13,0 %.',
    },
    {
      id: 'od-1-5-ex-3',
      number: '1.5.3',
      type: 'classic',
      difficulty: 'lett',
      task: 'Forklar forskjellen mellom totalkapitalrentabilitet og egenkapitalrentabilitet. Hvem er mest interessert i hvert av nøkkeltallene, og hvorfor?',
      solution: 'TKR viser avkastningen på all kapital i bedriften (egenkapital + gjeld), mens EKR viser avkastningen kun på eiernes kapital. Banker og kreditorer er mest opptatt av TKR fordi den viser om bedriften klarer å forrente all kapitalen, inkludert lånene. Eiere og investorer er mest opptatt av EKR fordi den viser avkastningen de faktisk oppnår. EKR kan være høyere enn TKR dersom bedriften har mye gjeld og TKR er høyere enn lånerenten (gearingseffekten).',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'od-1-5-ex-4',
      number: '1.5.4',
      type: 'classic',
      difficulty: 'medium',
      task: 'En bedrift har driftsinntekter 12 000 000 kr, driftskostnader 10 200 000 kr, finansinntekter 60 000 kr, gjennomsnittlig totalkapital 6 500 000 kr. Beregn resultatgrad og totalkapitalrentabilitet, og vurder tallene.',
      solution: 'Driftsresultat = 12 000 000 - 10 200 000 = 1 800 000 kr. Resultatgrad = 1 800 000 / 12 000 000 x 100 = 15 %. TKR = (1 800 000 + 60 000) / 6 500 000 x 100 = 1 860 000 / 6 500 000 x 100 = 28,6 %. Vurdering: Resultatgrad 15 % er bra (over 10 %). TKR 28,6 % er svært bra. Bedriften utnytter kapitalen effektivt og har gode marginer.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'od-1-5-ex-5',
      number: '1.5.5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'To bedrifter i samme bransje har følgende tall: Bedrift A: Driftsinntekter 20 mill., driftsresultat 2 mill., totalkapital 10 mill. Bedrift B: Driftsinntekter 15 mill., driftsresultat 2,25 mill., totalkapital 12 mill. Beregn resultatgrad og TKR for begge. Hvilken bedrift er mest lønnsom?',
      solution: 'Bedrift A: Resultatgrad = 2/20 x 100 = 10 %. TKR = 2/10 x 100 = 20 %. Kapitalens omløpshastighet = 20/10 = 2,0. Bedrift B: Resultatgrad = 2,25/15 x 100 = 15 %. TKR = 2,25/12 x 100 = 18,75 %. Kapitalens omløpshastighet = 15/12 = 1,25. Bedrift B har bedre resultatgrad (15 % vs. 10 %), men bedrift A har bedre TKR (20 % vs. 18,75 %). A kompenserer lavere marginer med høyere omløpshastighet. Svaret avhenger av perspektiv: for investorer er TKR viktigst (A er best), mens resultatgraden viser at B har bedre kostnadskontroll.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'od-1-5-ex-6',
      number: '1.5.6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar DuPont-modellen og vis hvordan en bedrift kan forbedre totalkapitalrentabiliteten. Gi konkrete eksempler på tiltak for å øke henholdsvis resultatgraden og kapitalens omløpshastighet.',
      solution: 'DuPont-modellen: TKR = Resultatgrad x Kapitalens omløpshastighet. Resultatgrad = Driftsresultat / Driftsinntekter. Omløpshastighet = Driftsinntekter / Totalkapital. For å øke resultatgraden: redusere kostnader (effektivisere produksjon, forhandle bedre innkjøpspriser, redusere svinn), øke prisene (verdibasert prissetting, produktdifferensiering). For å øke omløpshastigheten: redusere varelager (bedre logistikk, just-in-time), redusere kundefordringer (bedre innkrevingsrutiner), selge unødvendige eiendeler, øke salget med samme kapitalbase. En lavpriskjede har typisk lav resultatgrad men høy omløpshastighet, mens en luksusbedrift har høy resultatgrad men lavere omløpshastighet.',
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};

// ============================================================================
// Eksporter alle kapitler i seksjon 1
// ============================================================================

export const OKONOMI_DRIFT_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_OKONOMI_DRIFT_1_1,
  CHAPTER_OKONOMI_DRIFT_1_2,
  CHAPTER_OKONOMI_DRIFT_1_3,
  CHAPTER_OKONOMI_DRIFT_1_4,
  CHAPTER_OKONOMI_DRIFT_1_5,
];
