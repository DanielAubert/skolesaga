/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Regnskap og revisjon (VG3) - Del 6: Årsregnskap
 *
 * Kapittel 6.1–6.5
 *
 * LK20-kompetansemål:
 * - utarbeide årsregnskap med resultatregnskap, balanse, noter og kontantstrømoppstilling
 * - vurdere krav til årsberetning og noteopplysninger etter regnskapsloven
 * - gjennomføre årsavslutning med periodiseringer, avsetninger og skatteberegning
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1: Årsregnskapets bestanddeler
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_6_1: TextbookChapter = {
  id: 'regnskap-revisjon-6-1',
  courseId: 'regnskap-revisjon',
  chapterNumber: '6.1',
  title: 'Årsregnskapets bestanddeler',
  description: 'En oversikt over de obligatoriske delene av et årsregnskap: resultatregnskap, balanse, kontantstrømoppstilling, noter og årsberetning. Du lærer hva hver del viser og hvordan de henger sammen.',
  estimatedMinutes: 22,
  competenceGoals: ['utarbeide årsregnskap med resultatregnskap, balanse, noter og kontantstrømoppstilling'],
  keyTerms: [
    { term: 'Årsregnskap', definition: 'Den samlede økonomiske rapporteringen en virksomhet er pålagt å utarbeide for hvert regnskapsår, bestående av resultatregnskap, balanse, kontantstrømoppstilling og noter' },
    { term: 'Resultatregnskap', definition: 'Oppstilling som viser virksomhetens inntekter og kostnader i en periode, og dermed årets overskudd eller underskudd' },
    { term: 'Balanse', definition: 'Oppstilling som viser virksomhetens eiendeler, gjeld og egenkapital på et bestemt tidspunkt' },
    { term: 'Kontantstrømoppstilling', definition: 'Oppstilling som viser inn- og utbetalinger i perioden, fordelt på drift, investering og finansiering' },
    { term: 'Noter', definition: 'Tilleggsopplysninger som utdyper og forklarer tallene i resultatregnskapet og balansen' },
    { term: 'Årsberetning', definition: 'Styrets rapport om virksomhetens utvikling, resultat, stilling og fremtidsutsikter' },
  ],
  content: [
    {
      id: 'rr-6-1-intro',
      type: 'text',
      content: `## Hva er et årsregnskap?

Alle regnskapspliktige virksomheter i Norge skal utarbeide et årsregnskap for hvert regnskapsår. Årsregnskapet er det viktigste dokumentet for å kommunisere virksomhetens økonomiske stilling til eiere, kreditorer, ansatte og offentlige myndigheter. Det er regulert av regnskapsloven og god regnskapsskikk.

I dette kapittelet skal du lære:
- Hvilke deler et årsregnskap består av
- Hva resultatregnskapet, balansen, kontantstrømoppstillingen og notene viser
- Hvordan delene henger sammen
- Hvem som har plikt til å utarbeide årsregnskap`,
    },
    {
      id: 'rr-6-1-def-1',
      type: 'definition',
      title: 'Årsregnskap',
      content: `Et **årsregnskap** er den samlede økonomiske rapporteringen som en regnskapspliktig virksomhet skal utarbeide for hvert regnskapsår. Etter regnskapsloven § 3-2 skal årsregnskapet inneholde: **resultatregnskap**, **balanse**, **kontantstrømoppstilling** (for store foretak) og **noter**. I tillegg skal styret utarbeide en **årsberetning** (for foretak over visse terskelverdier).`,
    },
    {
      id: 'rr-6-1-text-1',
      type: 'text',
      content: `### Oversikt over bestanddelene

| Bestanddel | Hva den viser | Tidsaspekt |
|------------|--------------|------------|
| Resultatregnskap | Inntekter, kostnader og resultat | Perioden (1.1.–31.12.) |
| Balanse | Eiendeler, gjeld og egenkapital | Tidspunkt (31.12.) |
| Kontantstrømoppstilling | Inn- og utbetalinger | Perioden (1.1.–31.12.) |
| Noter | Tilleggsopplysninger og spesifikasjoner | Varierer |
| Årsberetning | Styrets vurdering og fremtidsutsikter | Perioden og fremover |

**Resultatregnskapet** svarer på spørsmålet: *Hvor mye tjente eller tapte virksomheten i år?*

**Balansen** svarer på: *Hva eier virksomheten, og hvordan er det finansiert?*

**Kontantstrømoppstillingen** svarer på: *Hvor kom pengene fra, og hvor gikk de?*

**Notene** svarer på: *Hva ligger bak tallene?*`,
    },
    {
      id: 'rr-6-1-text-2',
      type: 'text',
      content: `### Resultatregnskapet

Resultatregnskapet viser virksomhetens inntekter og kostnader for regnskapsåret. Oppstillingen følger regnskapsloven § 6-1 (artsinndelt) eller § 6-1a (funksjonsinndelt).

**Artsinndelt resultatregnskap (forenklet):**

| Post | Beløp |
|------|-------|
| Salgsinntekter | 5 000 000 |
| Varekostnad | -2 000 000 |
| Lønnskostnader | -1 500 000 |
| Avskrivninger | -300 000 |
| Andre driftskostnader | -600 000 |
| **Driftsresultat** | **600 000** |
| Finansinntekter | 50 000 |
| Finanskostnader | -150 000 |
| **Ordinært resultat før skatt** | **500 000** |
| Skattekostnad | -110 000 |
| **Årsresultat** | **390 000** |

Resultatregnskapet viser altså veien fra salgsinntekter til årsresultatet, post for post.`,
    },
    {
      id: 'rr-6-1-text-3',
      type: 'text',
      content: `### Balansen

Balansen viser virksomhetens finansielle stilling på balansedagen (normalt 31. desember). Den er delt i to sider som alltid skal stemme:

**Eiendeler = Egenkapital + Gjeld**

| **Eiendeler** | | **Egenkapital og gjeld** | |
|---|---|---|---|
| Anleggsmidler | 2 000 000 | Egenkapital | 1 500 000 |
| Omløpsmidler | 1 800 000 | Langsiktig gjeld | 1 200 000 |
| | | Kortsiktig gjeld | 1 100 000 |
| **Sum eiendeler** | **3 800 000** | **Sum EK og gjeld** | **3 800 000** |

Balansen gir et øyeblikksbilde av hva virksomheten eier og skylder. Den viser også hvor mye av virksomhetens verdier som er finansiert med egenkapital versus gjeld.`,
    },
    {
      id: 'rr-6-1-note-1',
      type: 'note',
      title: 'Sammenhengen mellom resultat og balanse',
      content: `Årsresultatet fra resultatregnskapet påvirker egenkapitalen i balansen. Et overskudd øker egenkapitalen, mens et underskudd reduserer den. Dersom overskuddet deles ut som utbytte, reduseres egenkapitalen tilsvarende. Denne koblingen sikrer at de to oppstillingene alltid henger sammen.`,
    },
    {
      id: 'rr-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Sammenhengen mellom resultat og balanse',
      problem: 'Nordfjord Regnskap AS har egenkapital på 1 200 000 kr per 1. januar. Årsresultatet er 390 000 kr, og generalforsamlingen vedtar et utbytte på 150 000 kr. Hva er egenkapitalen per 31. desember?',
      solution: `**Beregning:**

| Post | Beløp |
|------|-------|
| Egenkapital 1. januar | 1 200 000 |
| + Årsresultat | 390 000 |
| - Utbytte | -150 000 |
| **Egenkapital 31. desember** | **1 440 000** |

Årsresultatet tillegges egenkapitalen, og utbytte trekkes fra. Den gjenværende egenkapitalen på 1 440 000 kr vises i balansen ved årsslutt.`,
    },
    {
      id: 'rr-6-1-text-4',
      type: 'text',
      content: `### Hvem skal utarbeide årsregnskap?

Regnskapsplikten følger av regnskapsloven § 1-2. Følgende er alltid regnskapspliktige:
- Aksjeselskaper (AS) og allmennaksjeselskaper (ASA)
- Ansvarlige selskaper med omsetning over 5 millioner kr
- Stiftelser
- Samvirkeforetak med omsetning over 2 millioner kr

**Små foretak** kan benytte forenklede regler (regnskapsloven kap. 8) og trenger blant annet ikke kontantstrømoppstilling eller årsberetning. **Store foretak** må følge alle kravene fullt ut.

Terskelverdiene for «stort foretak» (regnskapsloven § 1-5):
- Salgsinntekter over 70 millioner kr
- Balansesum over 35 millioner kr
- Gjennomsnittlig antall ansatte over 50 årsverk
- Foretak som oppfyller to av tre kriterier regnes som store`,
    },
    {
      id: 'rr-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rr-6-1-ex-1',
        number: '6.1.1',
        type: 'multiple-choice',
        task: 'Hvilke deler er obligatoriske i et årsregnskap for store foretak etter regnskapsloven?',
        options: [
          { id: 'a', text: 'Bare resultatregnskap og balanse', isCorrect: false },
          { id: 'b', text: 'Resultatregnskap, balanse, kontantstrømoppstilling og noter', isCorrect: true },
          { id: 'c', text: 'Resultatregnskap, balanse og årsberetning', isCorrect: false },
          { id: 'd', text: 'Bare resultatregnskap, noter og årsberetning', isCorrect: false },
        ],
        solution: 'Etter regnskapsloven § 3-2 skal årsregnskapet for store foretak inneholde resultatregnskap, balanse, kontantstrømoppstilling og noter. Årsberetningen er et eget dokument som skal utarbeides i tillegg, men er formelt sett ikke en del av selve årsregnskapet.',
      },
    },
    {
      id: 'rr-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rr-6-1-ex-2',
        number: '6.1.2',
        type: 'classic',
        task: 'Forklar med egne ord hva resultatregnskapet og balansen viser, og hvordan de henger sammen. Bruk et konkret eksempel.',
        hints: ['Tenk på forskjellen mellom en periodeoppstilling og et øyeblikksbilde.'],
        solution: 'Resultatregnskapet viser inntekter og kostnader i løpet av en periode (vanligvis ett år), og ender opp med årsresultatet. Det er som en film av den økonomiske aktiviteten. Balansen viser hva virksomheten eier (eiendeler) og skylder (gjeld) på et bestemt tidspunkt, samt egenkapitalen. Det er som et fotografi. Sammenhengen: Årsresultatet fra resultatregnskapet overføres til egenkapitalen i balansen. Eksempel: Hvis en bedrift har egenkapital 500 000 kr og går med 100 000 kr i overskudd, øker egenkapitalen i balansen til 600 000 kr (forutsatt at intet utbytte deles ut).',
      },
    },
    {
      id: 'rr-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rr-6-1-ex-3',
        number: '6.1.3',
        type: 'multiple-choice',
        task: 'Et aksjeselskap har salgsinntekter på 40 millioner kr, balansesum på 25 millioner kr og 30 ansatte. Er dette et stort foretak etter regnskapsloven?',
        options: [
          { id: 'a', text: 'Ja, fordi det er et aksjeselskap', isCorrect: false },
          { id: 'b', text: 'Ja, fordi det oppfyller to av tre terskelverdier', isCorrect: false },
          { id: 'c', text: 'Nei, fordi det bare oppfyller én av tre terskelverdier', isCorrect: true },
          { id: 'd', text: 'Nei, fordi det ikke er børsnotert', isCorrect: false },
        ],
        solution: 'Terskelverdiene for stort foretak er: salgsinntekter over 70 mill. (ikke oppfylt), balansesum over 35 mill. (ikke oppfylt), over 50 ansatte (ikke oppfylt). Selskapet oppfyller ingen av kriteriene, og er derfor et lite foretak. Det må oppfylle minst to av tre for å regnes som stort.',
      },
    },
    {
      id: 'rr-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rr-6-1-ex-4',
        number: '6.1.4',
        type: 'classic',
        task: 'Berg Handel AS har egenkapital 800 000 kr per 1. januar. Årsresultatet er 220 000 kr, og det vedtas utbytte på 100 000 kr. Beregn egenkapitalen per 31. desember og forklar sammenhengen med resultatregnskapet.',
        solution: 'Egenkapital 1. januar: 800 000. Pluss årsresultat: +220 000. Minus utbytte: -100 000. Egenkapital 31. desember: 920 000 kr. Sammenhengen er at overskuddet (årsresultatet) fra resultatregnskapet tillegges egenkapitalen i balansen. Utbytte representerer verdier som tas ut av virksomheten og reduserer dermed egenkapitalen.',
      },
    },
    {
      id: 'rr-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rr-6-1-ex-5',
        number: '6.1.5',
        type: 'classic',
        task: 'Drøft hvorfor regnskapsloven krever at årsregnskapet skal bestå av flere deler (resultat, balanse, kontantstrøm, noter) i stedet for bare én oppstilling. Hvilken informasjon gir de ulike delene som de andre ikke kan gi?',
        hints: ['Tenk på ulike brukeres informasjonsbehov.'],
        solution: 'Hver del gir unik informasjon: Resultatregnskapet viser lønnsomhet over tid, men sier lite om likviditet. Balansen viser finansiell stilling, men ikke hvordan den ble oppnådd. Kontantstrømoppstillingen viser pengestrømmene, som kan avvike vesentlig fra resultat (f.eks. ved store investeringer eller kundefordringer). Notene utdyper og forklarer poster som ellers bare er enkeltlinjer. En bank som vurderer lån vil se på kontantstrøm og balanse, mens en investor kanskje er mest opptatt av resultat og fremtidsutsikter i årsberetningen. Samlet gir delene et helhetlig bilde som ingen enkelt oppstilling kan gi alene.',
      },
    },
    {
      id: 'rr-6-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Årsregnskapet** er den samlede økonomiske rapporteringen for et regnskapsår
- Det består av **resultatregnskap**, **balanse**, **kontantstrømoppstilling** og **noter**
- **Årsberetningen** utarbeides i tillegg for foretak over visse terskelverdier
- Resultatregnskapet viser periodens inntekter, kostnader og resultat
- Balansen viser eiendeler, gjeld og egenkapital på et tidspunkt
- Årsresultatet kobler resultatregnskapet til egenkapitalen i balansen

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Årsregnskap | Samlet økonomisk rapportering for regnskapsåret |
| Resultatregnskap | Viser inntekter, kostnader og resultat for perioden |
| Balanse | Viser eiendeler, gjeld og egenkapital på et tidspunkt |
| Kontantstrømoppstilling | Viser inn- og utbetalinger i perioden |
| Noter | Tilleggsopplysninger som utdyper tallene |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.2: Årsberetning
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_6_2: TextbookChapter = {
  id: 'regnskap-revisjon-6-2',
  courseId: 'regnskap-revisjon',
  chapterNumber: '6.2',
  title: 'Årsberetning',
  description: 'Kravene til årsberetningens innhold etter regnskapsloven, herunder redegjørelse for fortsatt drift, arbeidsmiljø, likestilling, ytre miljø og fremtidig utvikling.',
  estimatedMinutes: 20,
  competenceGoals: ['vurdere krav til årsberetning og noteopplysninger etter regnskapsloven'],
  keyTerms: [
    { term: 'Årsberetning', definition: 'Styrets skriftlige rapport om virksomhetens utvikling, resultat, finansielle stilling og fremtidsutsikter' },
    { term: 'Fortsatt drift', definition: 'Forutsetningen om at virksomheten vil videreføre driften i overskuelig fremtid, normalt minst 12 måneder frem' },
    { term: 'Arbeidsmiljø', definition: 'De fysiske og psykososiale forholdene på arbeidsplassen som styret skal redegjøre for i årsberetningen' },
    { term: 'Risiko', definition: 'Forhold som kan påvirke virksomhetens fremtidige resultat, stilling eller utvikling i negativ retning' },
    { term: 'Disponering av årsresultat', definition: 'Styrets forslag til hvordan overskudd eller underskudd skal fordeles, f.eks. til utbytte eller overføring til egenkapital' },
  ],
  content: [
    {
      id: 'rr-6-2-intro',
      type: 'text',
      content: `## Styrets rapport til eierne

Årsberetningen er styrets egen rapport om virksomheten. Mens årsregnskapet viser tallene, gir årsberetningen styrets vurderinger, forklaringer og fremtidsperspektiver. Den er et viktig supplement til tallene og gir brukerne kontekst for å forstå virksomhetens situasjon.

I dette kapittelet skal du lære:
- Hvilke foretak som skal utarbeide årsberetning
- Hva årsberetningen skal inneholde
- Kravene til redegjørelse om fortsatt drift
- Kravene til informasjon om arbeidsmiljø og ytre miljø
- Hvordan styret skal vurdere risiko og fremtidsutsikter`,
    },
    {
      id: 'rr-6-2-def-1',
      type: 'definition',
      title: 'Årsberetning',
      content: `**Årsberetningen** er styrets skriftlige redegjørelse for virksomhetens utvikling, resultat og finansielle stilling. Kravene følger av regnskapsloven § 3-3 og § 3-3a. Alle aksjeselskaper som ikke er definert som «små foretak» etter regnskapsloven § 1-6, skal utarbeide årsberetning. Små foretak kan velge å ikke utarbeide årsberetning.`,
    },
    {
      id: 'rr-6-2-text-1',
      type: 'text',
      content: `### Innholdskrav i årsberetningen

Regnskapsloven § 3-3a stiller krav om at årsberetningen minst skal inneholde:

**1. Virksomhetens art og beliggenhet**
- Beskrivelse av hva virksomheten driver med
- Hvor den holder til

**2. Fortsatt drift**
- Bekreftelse av at forutsetningen om fortsatt drift er lagt til grunn
- Dersom det er tvil om fortsatt drift, skal dette opplyses og begrunnes

**3. Utviklingsaktiviteter**
- Forsknings- og utviklingsarbeid (FoU)
- Planer for fremtiden

**4. Resultat og stilling**
- Kommentarer til årsregnskapet
- Forklaring av vesentlige poster og endringer

**5. Arbeidsmiljø**
- Sykefravær og skader
- Tiltak for å bedre arbeidsmiljøet
- Likestilling og mangfold

**6. Ytre miljø**
- Påvirkning på det ytre miljøet
- Tiltak for å redusere miljøbelastningen

**7. Disponering av årsresultat**
- Styrets forslag til fordeling av overskudd eller dekning av underskudd`,
    },
    {
      id: 'rr-6-2-warning-1',
      type: 'warning',
      title: 'Fortsatt drift-forutsetningen',
      content: `Dersom det er **tvil om fortsatt drift**, skal styret gi en klar redegjørelse i årsberetningen. Dette er et av de viktigste kravene. Hvis styret legger ned-drift til grunn, skal årsregnskapet utarbeides etter andre prinsipper (virkelig verdi). En revisor som mener det er vesentlig usikkerhet knyttet til fortsatt drift, vil normalt ta et forbehold i revisjonsberetningen.`,
    },
    {
      id: 'rr-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Utdrag fra årsberetning',
      problem: 'Vis et forenklet eksempel på hvordan en årsberetning for et mellomstort aksjeselskap kan se ut.',
      solution: `**Årsberetning for Fjordservice AS 2024**

*Virksomhetens art og beliggenhet:*
Fjordservice AS driver med rengjøringstjenester for næringsbygg i Bergen og omegn. Selskapet har hovedkontor i Bergen sentrum.

*Fortsatt drift:*
Styret bekrefter at forutsetningen om fortsatt drift er til stede. Selskapet har god likviditet og en sunn egenkapitalandel på 38 %.

*Resultat:*
Driftsinntektene var 12,3 mill. kr (11,8 mill. kr i fjor). Årsresultatet ble 890 000 kr, en økning fra 720 000 kr i fjor. Styret er tilfreds med utviklingen.

*Arbeidsmiljø:*
Selskapet hadde 24 ansatte ved årsslutt. Sykefraværet var 5,2 %, ned fra 6,1 % i fjor. Det er ikke rapportert arbeidsulykker. Selskapet arbeider aktivt med HMS.

*Likestilling:*
Av 24 ansatte er 15 kvinner og 9 menn. Styret består av 2 kvinner og 3 menn.

*Ytre miljø:*
Virksomheten forurenser ikke det ytre miljø utover det som er normalt for bransjen. Selskapet har gått over til miljøsertifiserte rengjøringsmidler.

*Disponering av årsresultat:*
Styret foreslår at årsresultatet på 890 000 kr disponeres med 400 000 kr i utbytte og 490 000 kr overført til annen egenkapital.`,
    },
    {
      id: 'rr-6-2-text-2',
      type: 'text',
      content: `### Risikovurdering i årsberetningen

Styret skal redegjøre for vesentlige risikoforhold som kan påvirke virksomheten. Dette omfatter:

**Markedsrisiko:**
- Endringer i etterspørsel eller prispress
- Nye konkurrenter eller endret konkurransesituasjon

**Kredittrisiko:**
- Risiko for tap på kundefordringer
- Konsentrasjon av kundeporteføljen

**Likviditetsrisiko:**
- Evne til å betale løpende forpliktelser
- Tilgang til finansiering

**Operasjonell risiko:**
- Avhengighet av nøkkelpersoner
- Teknologisk utvikling
- Regulatoriske endringer

For store foretak er kravene mer omfattende, og det skal gis en balansert analyse av virksomhetens utvikling og stilling, med nøkkeltall der det er hensiktsmessig.`,
    },
    {
      id: 'rr-6-2-tip-1',
      type: 'tip',
      title: 'Årsberetning og revisjon',
      content: `Revisor kontrollerer at årsberetningen er konsistent med årsregnskapet og at den oppfyller lovens krav. Revisor uttaler seg om årsberetningen i revisjonsberetningen. Dersom styret for eksempel skriver at selskapet har «god økonomi» mens regnskapet viser underskudd og svak likviditet, vil revisor påpeke denne inkonsistensen.`,
    },
    {
      id: 'rr-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rr-6-2-ex-1',
        number: '6.2.1',
        type: 'multiple-choice',
        task: 'Hvilke foretak er pålagt å utarbeide årsberetning?',
        options: [
          { id: 'a', text: 'Alle aksjeselskaper uansett størrelse', isCorrect: false },
          { id: 'b', text: 'Aksjeselskaper som ikke er definert som små foretak', isCorrect: true },
          { id: 'c', text: 'Bare børsnoterte selskaper', isCorrect: false },
          { id: 'd', text: 'Bare selskaper med over 100 ansatte', isCorrect: false },
        ],
        solution: 'Etter regnskapsloven skal aksjeselskaper som ikke er «små foretak» utarbeide årsberetning. Små foretak (definert etter terskelverdier i regnskapsloven § 1-6) kan velge å unnlate dette. Børsnoterte selskaper har ytterligere krav utover det regnskapsloven krever.',
      },
    },
    {
      id: 'rr-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rr-6-2-ex-2',
        number: '6.2.2',
        type: 'classic',
        task: 'Forklar hvorfor kravet om å redegjøre for fortsatt drift er et av de viktigste kravene i årsberetningen. Hva er konsekvensen dersom forutsetningen ikke er oppfylt?',
        hints: ['Tenk på hva som skjer med verdsettelsen av eiendeler dersom virksomheten ikke skal videreføres.'],
        solution: 'Fortsatt drift-forutsetningen er grunnleggende fordi hele regnskapet bygger på den. Når vi forutsetter fortsatt drift, verdsettes eiendeler til anskaffelseskost med fradrag for avskrivninger. Dersom forutsetningen ikke er oppfylt, må eiendelene vurderes til virkelig verdi (salgsverdi), som ofte er vesentlig lavere. En maskin som brukes i produksjon kan ha en bokført verdi på 2 mill. kr, men en salgsverdi på bare 500 000 kr. Uten fortsatt drift-bekreftelse vil brukerne av regnskapet (kreditorer, leverandører, ansatte) miste tillit, og det kan utløse oppsigelse av lån, krav om sikkerhet eller tap av kontrakter.',
      },
    },
    {
      id: 'rr-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rr-6-2-ex-3',
        number: '6.2.3',
        type: 'multiple-choice',
        task: 'Hva skal styret uttale seg om vedrørende arbeidsmiljøet i årsberetningen?',
        options: [
          { id: 'a', text: 'Bare antall ansatte', isCorrect: false },
          { id: 'b', text: 'Sykefravær, skader, likestilling og tiltak for å bedre arbeidsmiljøet', isCorrect: true },
          { id: 'c', text: 'Bare HMS-rutiner og sikkerhetsprosedyrer', isCorrect: false },
          { id: 'd', text: 'Bare lønnsnivå og pensjon', isCorrect: false },
        ],
        solution: 'Regnskapsloven krever opplysninger om arbeidsmiljø, sykefravær, skader og ulykker, samt tiltak som er iverksatt eller planlagt for å forbedre arbeidsmiljøet. I tillegg skal det redegjøres for den faktiske tilstanden når det gjelder likestilling og mangfold, og hvilke tiltak som er truffet.',
      },
    },
    {
      id: 'rr-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rr-6-2-ex-4',
        number: '6.2.4',
        type: 'classic',
        task: 'Et aksjeselskap har et årsresultat på 650 000 kr. Styret foreslår 300 000 kr i utbytte. Skriv avsnittet om disponering av årsresultat slik det ville stått i årsberetningen.',
        solution: 'Disponering av årsresultat: Styret foreslår at årsresultatet på kr 650 000 disponeres slik: Avsatt til utbytte kr 300 000. Overført til annen egenkapital kr 350 000. Sum disponert kr 650 000.',
      },
    },
    {
      id: 'rr-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rr-6-2-ex-5',
        number: '6.2.5',
        type: 'classic',
        task: 'Drøft hvilke risikoforhold et rengjøringsfirma med 30 ansatte og 5 store kunder bør redegjøre for i årsberetningen. Vurder markedsrisiko, kredittrisiko og operasjonell risiko.',
        hints: ['Tenk på hva som skjer hvis én av de fem store kundene sier opp kontrakten.'],
        solution: 'Markedsrisiko: Bransjen er preget av sterk konkurranse og prispress. Tap av én av fem store kunder vil ha vesentlig effekt på omsetningen (ca. 20 % reduksjon). Selskapet bør diversifisere kundeporteføljen. Kredittrisiko: Med få, store kunder er kredittrisikoen konsentrert. Betalingsproblemer hos en stor kunde kan gi likviditetsutfordringer. Operasjonell risiko: Virksomheten er avhengig av tilgang på arbeidskraft, noe som kan være utfordrende i et stramt arbeidsmarked. Høyt sykefravær kan gjøre det vanskelig å levere tjenestene. Avhengighet av nøkkelpersoner i ledelsen er også en risiko. Regulatorisk risiko: Endringer i arbeidsmiljøloven, tariffavtaler eller krav til offentlige anskaffelser kan påvirke driften.',
      },
    },
    {
      id: 'rr-6-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'rr-6-2-ex-6',
        number: '6.2.6',
        type: 'multiple-choice',
        task: 'Revisor kontrollerer årsberetningen. Hva uttaler revisor seg om?',
        options: [
          { id: 'a', text: 'Om styrets vurderinger er korrekte', isCorrect: false },
          { id: 'b', text: 'Om årsberetningen er konsistent med regnskapet og oppfyller lovens krav', isCorrect: true },
          { id: 'c', text: 'Om virksomheten har en god fremtid', isCorrect: false },
          { id: 'd', text: 'Revisor uttaler seg ikke om årsberetningen', isCorrect: false },
        ],
        solution: 'Revisor sjekker at årsberetningen er konsistent med årsregnskapet (at tallene stemmer overens) og at den oppfyller lovens formelle krav til innhold. Revisor vurderer ikke om styrets fremtidsvurderinger er riktige, men kontrollerer at de er rimelige sett i lys av regnskapets tall.',
      },
    },
    {
      id: 'rr-6-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Årsberetningen** er styrets skriftlige rapport om virksomheten
- Den er pålagt for aksjeselskaper som ikke er små foretak
- Innholdet skal dekke virksomhetens art, fortsatt drift, resultat, arbeidsmiljø, ytre miljø og disponering av årsresultat
- **Fortsatt drift-forutsetningen** er et sentralt krav som påvirker hele regnskapet
- Styret skal vurdere og redegjøre for vesentlige **risikoforhold**
- Revisor kontrollerer at årsberetningen er konsistent med regnskapet

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Årsberetning | Styrets rapport om virksomhetens utvikling og stilling |
| Fortsatt drift | Forutsetning om at virksomheten videreføres i overskuelig fremtid |
| Disponering | Hvordan årsresultatet fordeles mellom utbytte og egenkapital |
| Risikovurdering | Styrets redegjørelse for forhold som kan påvirke virksomheten negativt |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.3: Noter
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_6_3: TextbookChapter = {
  id: 'regnskap-revisjon-6-3',
  courseId: 'regnskap-revisjon',
  chapterNumber: '6.3',
  title: 'Noter',
  description: 'Notekravene i regnskapsloven: regnskapsprinsipper, spesifikasjoner av regnskapsposter og tilleggsopplysninger som er nødvendige for å bedømme regnskapet.',
  estimatedMinutes: 22,
  competenceGoals: ['vurdere krav til årsberetning og noteopplysninger etter regnskapsloven'],
  keyTerms: [
    { term: 'Noter', definition: 'Obligatoriske tilleggsopplysninger som utdyper og forklarer tallene i resultatregnskapet og balansen' },
    { term: 'Regnskapsprinsipper', definition: 'De prinsipper og metoder som virksomheten har valgt for innregning, måling og presentasjon av poster i regnskapet' },
    { term: 'Spesifikasjon', definition: 'Detaljert oppdeling av en samlepost i regnskapet, f.eks. varige driftsmidler fordelt på type' },
    { term: 'Tilleggsopplysninger', definition: 'Opplysninger som ikke fremgår direkte av regnskapsoppstillingene, men som er nødvendige for å bedømme regnskapet' },
    { term: 'Prinsippnote', definition: 'Note som beskriver hvilke regnskapsprinsipper som er anvendt, f.eks. avskrivningsmetoder og vurdering av varelager' },
  ],
  content: [
    {
      id: 'rr-6-3-intro',
      type: 'text',
      content: `## Tallene bak tallene

Resultatregnskapet og balansen viser samletall i en komprimert form. Notene gir leseren mulighet til å se hva som ligger bak disse tallene. Uten noter ville det vært vanskelig å vurdere kvaliteten på regnskapet og forstå virksomhetens reelle situasjon.

I dette kapittelet skal du lære:
- Hva noter er og hvorfor de er nødvendige
- Hvilke noter som er obligatoriske
- Hva en prinsippnote inneholder
- Hvilke spesifikasjoner og tilleggsopplysninger som kreves
- Forskjellen på notekrav for små og store foretak`,
    },
    {
      id: 'rr-6-3-def-1',
      type: 'definition',
      title: 'Noter til regnskapet',
      content: `**Noter** er obligatoriske tilleggsopplysninger til resultatregnskapet og balansen. De skal gi informasjon som er nødvendig for å bedømme virksomhetens stilling og resultat, og som ikke fremgår av regnskapsoppstillingene alene. Notekravene følger av regnskapsloven kapittel 7.`,
    },
    {
      id: 'rr-6-3-text-1',
      type: 'text',
      content: `### Viktige notekrav etter regnskapsloven

Regnskapsloven kapittel 7 stiller en rekke krav til noter. De viktigste er:

**Note om regnskapsprinsipper (§ 7-2):**
- Hvilke prinsipper som er anvendt for inntektsføring
- Avskrivningsmetoder og -satser
- Vurdering av varelager
- Behandling av valuta
- Eventuelle endringer i prinsipper

**Note om ansatte og ytelser (§ 7-30, 7-31, 7-31b):**
- Antall ansatte (årsverk)
- Lønnskostnader, inkl. pensjon og arbeidsgiveravgift
- Godtgjørelse til daglig leder og styre
- Godtgjørelse til revisor

**Note om varige driftsmidler (§ 7-13):**
- Anskaffelseskost, tilgang og avgang
- Årets avskrivninger
- Akkumulerte avskrivninger
- Bokført verdi ved årsslutt

**Note om gjeld og sikkerhetsstillelser (§ 7-18, 7-19):**
- Langsiktig gjeld, herunder forfallstid
- Pantstillelser og garantier
- Kassekredittlimit og trekk`,
    },
    {
      id: 'rr-6-3-example-1',
      type: 'example',
      title: 'Eksempel: Prinsippnote',
      problem: 'Vis et eksempel på en prinsippnote for et mellomstort aksjeselskap.',
      solution: `**Note 1 – Regnskapsprinsipper**

Årsregnskapet er satt opp i samsvar med regnskapsloven og god regnskapsskikk for mellomstore foretak.

*Inntektsføring:* Inntekter fra salg av varer inntektsføres ved levering. Tjenesteinntekter inntektsføres i takt med utførelsen.

*Varige driftsmidler:* Varige driftsmidler balanseføres til anskaffelseskost fratrukket akkumulerte avskrivninger. Avskrivninger beregnes lineært over forventet økonomisk levetid:
- Maskiner og inventar: 5–10 år
- Transportmidler: 5 år
- IT-utstyr: 3–5 år

*Varelager:* Varer vurderes til laveste av anskaffelseskost (FIFO) og virkelig verdi.

*Kundefordringer:* Kundefordringer vurderes til pålydende fratrukket forventet tap.

*Valuta:* Pengeposter i utenlandsk valuta omregnes til balansedagens kurs.`,
    },
    {
      id: 'rr-6-3-example-2',
      type: 'example',
      title: 'Eksempel: Note om varige driftsmidler',
      problem: 'Vis en note for varige driftsmidler for et selskap med maskiner og transportmidler.',
      solution: `**Note 3 – Varige driftsmidler**

| | Maskiner | Transport | Sum |
|---|---|---|---|
| Anskaffelseskost 01.01. | 1 800 000 | 600 000 | 2 400 000 |
| Tilgang | 400 000 | 0 | 400 000 |
| Avgang | -200 000 | 0 | -200 000 |
| Anskaffelseskost 31.12. | 2 000 000 | 600 000 | 2 600 000 |
| Akk. avskrivninger 01.01. | -720 000 | -240 000 | -960 000 |
| Årets avskrivninger | -200 000 | -120 000 | -320 000 |
| Akk. avskr. avgang | 200 000 | 0 | 200 000 |
| Akk. avskrivninger 31.12. | -720 000 | -360 000 | -1 080 000 |
| **Bokført verdi 31.12.** | **1 280 000** | **240 000** | **1 520 000** |
| Avskrivningssats | 10 % lineært | 20 % lineært | |
| Økonomisk levetid | 10 år | 5 år | |`,
    },
    {
      id: 'rr-6-3-text-2',
      type: 'text',
      content: `### Notekrav for små foretak

Små foretak har forenklede notekrav etter regnskapsloven § 7-35 til § 7-45. De viktigste notene for små foretak er:

1. **Regnskapsprinsipper** – hvilke forenklingsregler som er brukt
2. **Antall ansatte** – gjennomsnittlig antall årsverk
3. **Ytelser til ledende personer** – lønn, pensjon og andre ytelser til daglig leder og styret
4. **Revisjonshonorar** – fordelt på lovpålagt revisjon, andre attestasjonstjenester, skatterådgivning og andre tjenester
5. **Varige driftsmidler** – anskaffelseskost, avskrivninger og bokført verdi
6. **Pantstillelser og garantier** – bokført verdi av eiendeler stilt som sikkerhet
7. **Mellomværende med nærstående** – lån og fordringer mot eiere, styremedlemmer osv.

Selv om kravene er enklere, må notene gi tilstrekkelig informasjon til at regnskapet kan forstås.`,
    },
    {
      id: 'rr-6-3-note-1',
      type: 'note',
      title: 'Vesentlighetsprinsippet i noter',
      content: `Notekravene styres av vesentlighetsprinsippet. Det betyr at opplysninger som er uvesentlige for å bedømme regnskapet, kan utelates. Likevel er det bedre å gi for mye informasjon enn for lite. Revisor vil vurdere om notene gir tilstrekkelig informasjon for at regnskapet gir et rettvisende bilde.`,
    },
    {
      id: 'rr-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rr-6-3-ex-1',
        number: '6.3.1',
        type: 'multiple-choice',
        task: 'Hva er hovedformålet med noter til regnskapet?',
        options: [
          { id: 'a', text: 'Å erstatte resultatregnskapet og balansen', isCorrect: false },
          { id: 'b', text: 'Å gi tilleggsopplysninger som er nødvendige for å bedømme regnskapet', isCorrect: true },
          { id: 'c', text: 'Å gi styrets vurdering av fremtidsutsikter', isCorrect: false },
          { id: 'd', text: 'Å vise skatteberegningen', isCorrect: false },
        ],
        solution: 'Notene gir tilleggsopplysninger som utdyper og forklarer tallene i resultatregnskapet og balansen. De er nødvendige for at brukerne skal kunne bedømme virksomhetens stilling og resultat. Styrets fremtidsvurderinger hører til årsberetningen, ikke notene.',
      },
    },
    {
      id: 'rr-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rr-6-3-ex-2',
        number: '6.3.2',
        type: 'classic',
        task: 'En virksomhet har varelager balanseført til 1 200 000 kr. Forklar hvilken informasjon en prinsippnote bør gi om varelager, og hvorfor denne informasjonen er viktig for regnskapsbrukerne.',
        hints: ['Tenk på hvilke vurderingsmetoder som finnes for varelager, og hvordan valg av metode påvirker verdien.'],
        solution: 'Prinsippnoten bør opplyse om: 1) Vurderingsmetode: at varelager vurderes til laveste av anskaffelseskost og virkelig verdi (laveste verdis prinsipp). 2) Kostformel: om FIFO, veid gjennomsnitt eller tilvirkningskost brukes. 3) Hva som inngår i anskaffelseskost (innkjøpspris, frakt, toll). 4) Eventuell nedskrivning for ukurans. Dette er viktig fordi ulike metoder gir ulik verdi. FIFO i en periode med stigende priser gir høyere varelagerverdi enn veid gjennomsnitt. Uten denne informasjonen kan ikke brukerne sammenligne med andre selskaper eller vurdere kvaliteten på verdsettelsen.',
      },
    },
    {
      id: 'rr-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rr-6-3-ex-3',
        number: '6.3.3',
        type: 'multiple-choice',
        task: 'Hvilken av følgende noter er IKKE obligatorisk for små foretak?',
        options: [
          { id: 'a', text: 'Note om antall ansatte', isCorrect: false },
          { id: 'b', text: 'Note om ytelser til daglig leder', isCorrect: false },
          { id: 'c', text: 'Fullstendig kontantstrømnote', isCorrect: true },
          { id: 'd', text: 'Note om pantstillelser', isCorrect: false },
        ],
        solution: 'Små foretak har forenklede notekrav og er fritatt fra kontantstrømoppstilling (og dermed kontantstrømnote). De skal likevel gi noter om ansatte, ytelser til ledende personer, varige driftsmidler og pantstillelser. Kravene er samlet i regnskapsloven §§ 7-35 til 7-45.',
      },
    },
    {
      id: 'rr-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rr-6-3-ex-4',
        number: '6.3.4',
        type: 'classic',
        task: 'Utarbeid en forenklet note for varige driftsmidler basert på følgende opplysninger: Maskiner hadde anskaffelseskost 500 000 kr per 1.1., det ble kjøpt nye maskiner for 150 000 kr, årets avskrivninger er 65 000 kr, og akkumulerte avskrivninger per 1.1. var 200 000 kr.',
        solution: 'Note – Varige driftsmidler (Maskiner): Anskaffelseskost 01.01.: 500 000. Tilgang i året: 150 000. Anskaffelseskost 31.12.: 650 000. Akkumulerte avskrivninger 01.01.: -200 000. Årets avskrivninger: -65 000. Akkumulerte avskrivninger 31.12.: -265 000. Bokført verdi 31.12.: 385 000. Avskrivningsmetode: Lineær. Økonomisk levetid: 10 år.',
      },
    },
    {
      id: 'rr-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rr-6-3-ex-5',
        number: '6.3.5',
        type: 'classic',
        task: 'Drøft hvorfor revisor er opptatt av at notene gir tilstrekkelig informasjon. Hva kan konsekvensen være dersom vesentlige opplysninger mangler?',
        solution: 'Revisor skal bekrefte at regnskapet gir et rettvisende bilde. Notene er en integrert del av regnskapet, og manglende opplysninger kan bety at regnskapet ikke er fullstendig. Konsekvenser: 1) Revisor kan kreve at manglende noter utarbeides. 2) Dersom selskapet nekter, kan revisor ta forbehold eller gi negativ konklusjon i revisjonsberetningen. 3) Et regnskap uten tilstrekkelige noter kan gi feil beslutningsgrunnlag for kreditorer og investorer. 4) Manglende noter om f.eks. pantstillelser kan skjule vesentlig risiko. 5) Regnskapsbrukere kan ikke sammenligne med andre selskaper uten prinsippnote.',
      },
    },
    {
      id: 'rr-6-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'rr-6-3-ex-6',
        number: '6.3.6',
        type: 'multiple-choice',
        task: 'Hva skal noten om revisjonshonorar inneholde?',
        options: [
          { id: 'a', text: 'Bare totalbeløpet for revisjon', isCorrect: false },
          { id: 'b', text: 'Honorar fordelt på lovpålagt revisjon, andre attestasjonstjenester, skatterådgivning og andre tjenester', isCorrect: true },
          { id: 'c', text: 'Bare revisorens timehonorar', isCorrect: false },
          { id: 'd', text: 'Antall timer revisor har brukt', isCorrect: false },
        ],
        solution: 'Noten om revisjonshonorar skal vise totalt honorar til revisor fordelt på fire kategorier: lovpålagt revisjon, andre attestasjonstjenester, skatterådgivning og andre tjenester utover revisjon. Beløpene oppgis eksklusiv mva. Denne fordelingen gir brukerne informasjon om revisors uavhengighet.',
      },
    },
    {
      id: 'rr-6-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Noter** er tilleggsopplysninger som utdyper tallene i regnskapet
- **Prinsippnoten** beskriver valgte regnskapsprinsipper og metoder
- Viktige noter inkluderer varige driftsmidler, ansatte, gjeld og pantstillelser
- **Små foretak** har forenklede notekrav
- **Vesentlighetsprinsippet** styrer omfanget av noteinformasjonen
- Revisor kontrollerer at notene er tilstrekkelige

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Prinsippnote | Beskrivelse av valgte regnskapsprinsipper og metoder |
| Spesifikasjon | Detaljert oppdeling av en samlepost i regnskapet |
| Tilleggsopplysninger | Informasjon utover det som fremgår av oppstillingene |
| Vesentlighet | Informasjon er vesentlig dersom utelatelse kan påvirke brukernes beslutninger |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.4: Kontantstrømoppstilling
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_6_4: TextbookChapter = {
  id: 'regnskap-revisjon-6-4',
  courseId: 'regnskap-revisjon',
  chapterNumber: '6.4',
  title: 'Kontantstrømoppstilling',
  description: 'Kontantstrømoppstillingens oppbygning med direkte og indirekte metode, og fordelingen av pengestrømmene på drift, investering og finansiering.',
  estimatedMinutes: 24,
  competenceGoals: ['utarbeide årsregnskap med resultatregnskap, balanse, noter og kontantstrømoppstilling'],
  keyTerms: [
    { term: 'Kontantstrømoppstilling', definition: 'Oppstilling som viser virksomhetens inn- og utbetalinger i perioden, og forklarer endringen i kontantbeholdningen' },
    { term: 'Driftsaktiviteter', definition: 'Kontantstrømmer fra den ordinære virksomheten, som innbetalinger fra kunder og utbetalinger til leverandører og ansatte' },
    { term: 'Investeringsaktiviteter', definition: 'Kontantstrømmer knyttet til kjøp og salg av anleggsmidler og langsiktige investeringer' },
    { term: 'Finansieringsaktiviteter', definition: 'Kontantstrømmer knyttet til opptak og nedbetaling av lån, samt utbytte og kapitalinnskudd' },
    { term: 'Direkte metode', definition: 'Metode der kontantstrøm fra drift beregnes ut fra faktiske inn- og utbetalinger' },
    { term: 'Indirekte metode', definition: 'Metode der kontantstrøm fra drift beregnes ved å justere årsresultatet for poster som ikke medfører inn- eller utbetalinger' },
  ],
  content: [
    {
      id: 'rr-6-4-intro',
      type: 'text',
      content: `## Hvor ble pengene av?

Et selskap kan vise overskudd i resultatregnskapet og likevel ha dårlig likviditet. Kontantstrømoppstillingen forklarer hvorfor, ved å vise de faktiske pengestrømmene i perioden. Den svarer på spørsmålet: *Hvor kom pengene fra, og hvor gikk de?*

I dette kapittelet skal du lære:
- Hva en kontantstrømoppstilling viser
- De tre hovedkategoriene: drift, investering og finansiering
- Forskjellen mellom direkte og indirekte metode
- Hvordan utarbeide en kontantstrømoppstilling`,
    },
    {
      id: 'rr-6-4-def-1',
      type: 'definition',
      title: 'Kontantstrømoppstilling',
      content: `En **kontantstrømoppstilling** viser virksomhetens inn- og utbetalinger i regnskapsperioden, og forklarer dermed endringen i kontanter og bankinnskudd. Oppstillingen er delt i tre kategorier: **driftsaktiviteter** (den ordinære virksomheten), **investeringsaktiviteter** (kjøp og salg av anleggsmidler) og **finansieringsaktiviteter** (lån, utbytte og kapitalendringer). Summen av de tre kategoriene forklarer netto endring i kontantbeholdningen.`,
    },
    {
      id: 'rr-6-4-text-1',
      type: 'text',
      content: `### De tre kategoriene

| Kategori | Eksempler på innbetalinger | Eksempler på utbetalinger |
|----------|--------------------------|--------------------------|
| **Drift** | Innbetalinger fra kunder | Utbetalinger til leverandører, lønn, skatt |
| **Investering** | Salg av anleggsmidler, aksjer | Kjøp av maskiner, eiendom, aksjer |
| **Finansiering** | Opptak av lån, emisjon | Nedbetaling av lån, utbytte |

**Hovedprinsippet:**
- Kontantstrøm fra drift viser om den daglige virksomheten genererer penger
- Kontantstrøm fra investering viser om selskapet investerer eller selger eiendeler
- Kontantstrøm fra finansiering viser hvordan selskapet finansierer seg

Et sunt selskap har normalt positiv kontantstrøm fra drift, negativ fra investering (fordi det investerer) og varierende fra finansiering.`,
    },
    {
      id: 'rr-6-4-text-2',
      type: 'text',
      content: `### Direkte metode

Den direkte metoden viser de faktiske inn- og utbetalingene. Den er enklest å forstå:

**Kontantstrøm fra driftsaktiviteter (direkte metode):**

| Post | Beløp |
|------|-------|
| Innbetalinger fra kunder | 4 800 000 |
| Utbetalinger til leverandører | -1 900 000 |
| Utbetalinger til ansatte | -1 500 000 |
| Utbetalinger av skatt | -100 000 |
| Andre driftsutbetalinger | -500 000 |
| **Netto kontantstrøm fra drift** | **800 000** |

Den direkte metoden tar utgangspunkt i bankbevegelsene og viser hva som faktisk ble innbetalt og utbetalt. Norsk regnskapsstandard anbefaler den direkte metoden.`,
    },
    {
      id: 'rr-6-4-text-3',
      type: 'text',
      content: `### Indirekte metode

Den indirekte metoden tar utgangspunkt i årsresultatet og justerer for poster som ikke medfører inn- eller utbetalinger:

**Kontantstrøm fra driftsaktiviteter (indirekte metode):**

| Post | Beløp |
|------|-------|
| Årsresultat | 390 000 |
| + Avskrivninger | 300 000 |
| + Tap ved salg av anleggsmidler | 50 000 |
| - Økning i kundefordringer | -200 000 |
| + Økning i leverandørgjeld | 160 000 |
| - Økning i varelager | -100 000 |
| + Betalbar skatt (endring) | 200 000 |
| **Netto kontantstrøm fra drift** | **800 000** |

**Vanlige justeringer:**
- **Avskrivninger legges til** fordi de er en kostnad som ikke medfører utbetaling
- **Økning i kundefordringer trekkes fra** fordi inntekten er bokført men ikke innbetalt
- **Økning i leverandørgjeld legges til** fordi kostnaden er bokført men ikke utbetalt
- **Økning i varelager trekkes fra** fordi det er brukt penger på varer som ikke er solgt`,
    },
    {
      id: 'rr-6-4-example-1',
      type: 'example',
      title: 'Eksempel: Komplett kontantstrømoppstilling',
      problem: 'Utarbeid en kontantstrømoppstilling for Vestfjord AS basert på følgende: Netto kontantstrøm fra drift 800 000 kr, kjøp av maskiner -400 000 kr, salg av bil 50 000 kr, opptak av lån 500 000 kr, nedbetaling av lån -300 000 kr, utbetalt utbytte -150 000 kr. Kontantbeholdning 1.1. var 200 000 kr.',
      solution: `**Kontantstrømoppstilling for Vestfjord AS:**

| | Beløp |
|---|---|
| **Kontantstrøm fra driftsaktiviteter** | **800 000** |
| | |
| **Kontantstrøm fra investeringsaktiviteter:** | |
| Kjøp av maskiner | -400 000 |
| Salg av transportmiddel | 50 000 |
| **Netto kontantstrøm fra investering** | **-350 000** |
| | |
| **Kontantstrøm fra finansieringsaktiviteter:** | |
| Opptak av langsiktig lån | 500 000 |
| Nedbetaling av langsiktig lån | -300 000 |
| Utbetalt utbytte | -150 000 |
| **Netto kontantstrøm fra finansiering** | **50 000** |
| | |
| **Netto endring i kontanter** | **500 000** |
| Kontantbeholdning 01.01. | 200 000 |
| **Kontantbeholdning 31.12.** | **700 000** |

Selskapet har god kontantstrøm fra drift (800 000), investerer i ny maskin (-400 000) og har netto positiv kontantendring på 500 000 kr.`,
    },
    {
      id: 'rr-6-4-warning-1',
      type: 'warning',
      title: 'Resultat er ikke det samme som kontantstrøm',
      content: `Et vanlig misforståelse er at overskudd betyr at selskapet har penger på konto. Et selskap kan gå med overskudd og likevel ha likviditetsproblemer dersom kundene betaler sent, det er gjort store investeringer eller det er gitt store lån. Omvendt kan et selskap med underskudd ha positiv kontantstrøm dersom det selger eiendeler. Kontantstrømoppstillingen er derfor et uunnværlig supplement til resultatregnskapet.`,
    },
    {
      id: 'rr-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rr-6-4-ex-1',
        number: '6.4.1',
        type: 'multiple-choice',
        task: 'Hvilke tre kategorier er kontantstrømoppstillingen delt inn i?',
        options: [
          { id: 'a', text: 'Inntekter, kostnader og resultat', isCorrect: false },
          { id: 'b', text: 'Drift, investering og finansiering', isCorrect: true },
          { id: 'c', text: 'Eiendeler, gjeld og egenkapital', isCorrect: false },
          { id: 'd', text: 'Kortsiktig, mellomlang og langsiktig', isCorrect: false },
        ],
        solution: 'Kontantstrømoppstillingen deler pengestrømmene inn i tre kategorier: driftsaktiviteter (daglig drift), investeringsaktiviteter (kjøp/salg av anleggsmidler) og finansieringsaktiviteter (lån, utbytte, kapitalendringer).',
      },
    },
    {
      id: 'rr-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rr-6-4-ex-2',
        number: '6.4.2',
        type: 'classic',
        task: 'Forklar hvorfor avskrivninger legges til årsresultatet ved bruk av den indirekte metoden for å beregne kontantstrøm fra drift.',
        hints: ['Tenk på om avskrivninger innebærer en faktisk utbetaling.'],
        solution: 'Avskrivninger er en kostnad i resultatregnskapet som reduserer årsresultatet, men medfører ingen utbetaling. Utbetalingen skjedde da eiendelen ble kjøpt, og den posten vises under investeringsaktiviteter. Når vi starter med årsresultatet og skal finne kontantstrøm fra drift, må vi derfor legge tilbake avskrivningene for å unngå at de teller dobbelt (som driftskostnad og investering).',
      },
    },
    {
      id: 'rr-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rr-6-4-ex-3',
        number: '6.4.3',
        type: 'multiple-choice',
        task: 'Et selskap har årsresultat 200 000 kr, avskrivninger 100 000 kr, økning i kundefordringer 50 000 kr og reduksjon i leverandørgjeld 30 000 kr. Hva er kontantstrøm fra drift (indirekte metode)?',
        options: [
          { id: 'a', text: '220 000 kr', isCorrect: true },
          { id: 'b', text: '320 000 kr', isCorrect: false },
          { id: 'c', text: '180 000 kr', isCorrect: false },
          { id: 'd', text: '280 000 kr', isCorrect: false },
        ],
        solution: 'Årsresultat 200 000 + avskrivninger 100 000 - økning i kundefordringer 50 000 - reduksjon i leverandørgjeld 30 000 = 220 000 kr. Økning i kundefordringer trekkes fra (inntekt bokført men ikke innbetalt), og reduksjon i leverandørgjeld trekkes fra (mer er utbetalt enn bokført som kostnad).',
      },
    },
    {
      id: 'rr-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rr-6-4-ex-4',
        number: '6.4.4',
        type: 'classic',
        task: 'Utarbeid en kontantstrømoppstilling basert på følgende: Netto kontantstrøm fra drift 450 000 kr. Kjøp av varebil -350 000 kr. Opptak av lån 300 000 kr. Avdrag på lån -200 000 kr. Utbetalt utbytte -100 000 kr. Kontantbeholdning 01.01. er 150 000 kr.',
        solution: 'Kontantstrøm fra driftsaktiviteter: 450 000. Kontantstrøm fra investeringsaktiviteter: Kjøp av varebil -350 000. Netto investering: -350 000. Kontantstrøm fra finansieringsaktiviteter: Opptak av lån 300 000, avdrag på lån -200 000, utbetalt utbytte -100 000. Netto finansiering: 0. Netto endring i kontanter: 450 000 - 350 000 + 0 = 100 000. Kontantbeholdning 01.01.: 150 000. Kontantbeholdning 31.12.: 250 000.',
      },
    },
    {
      id: 'rr-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rr-6-4-ex-5',
        number: '6.4.5',
        type: 'classic',
        task: 'Et selskap har årsresultat på 500 000 kr men kontantbeholdningen har gått ned med 200 000 kr i løpet av året. Gi tre mulige forklaringer på at resultat og kontantstrøm kan avvike så mye.',
        hints: ['Tenk på investeringer, endringer i arbeidskapital og finansiering.'],
        solution: 'Mulige forklaringer: 1) Store investeringer: Selskapet kan ha kjøpt maskiner eller eiendom som gir store utbetalinger under investeringsaktiviteter uten at det påvirker årsresultatet (bare avskrivningene gjør det). 2) Økning i kundefordringer: Mye av omsetningen kan være fakturert men ikke innbetalt ved årsslutt, noe som gir høyere resultat enn kontantstrøm. 3) Store utbyttebetalinger eller avdrag: Selskapet kan ha betalt stort utbytte eller ekstraordinære avdrag på lån. 4) Økning i varelager: Oppbygging av varelager krever utbetaling men påvirker ikke resultatet før varene selges. 5) Forskuddsbetaling av leverandører: Betaling av leverandørgjeld fra forrige år gir utbetaling uten tilsvarende kostnad i år.',
      },
    },
    {
      id: 'rr-6-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'rr-6-4-ex-6',
        number: '6.4.6',
        type: 'multiple-choice',
        task: 'Hvilken metode anbefaler Norsk regnskapsstandard for kontantstrøm fra driftsaktiviteter?',
        options: [
          { id: 'a', text: 'Den indirekte metoden', isCorrect: false },
          { id: 'b', text: 'Den direkte metoden', isCorrect: true },
          { id: 'c', text: 'Begge metodene er like anbefalte', isCorrect: false },
          { id: 'd', text: 'Ingen av dem – det er valgfritt', isCorrect: false },
        ],
        solution: 'Norsk regnskapsstandard NRS (F) Kontantstrømoppstilling anbefaler den direkte metoden, der faktiske inn- og utbetalinger vises. Denne metoden er enklere å forstå og gir mer nyttig informasjon. I praksis bruker likevel mange den indirekte metoden fordi den er enklere å utarbeide basert på regnskapstall.',
      },
    },
    {
      id: 'rr-6-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kontantstrømoppstillingen** viser inn- og utbetalinger og forklarer endringen i kontantbeholdningen
- De tre kategoriene er **drift**, **investering** og **finansiering**
- **Direkte metode** viser faktiske inn- og utbetalinger
- **Indirekte metode** justerer årsresultatet for ikke-kontante poster
- Resultat og kontantstrøm kan avvike vesentlig
- Et sunt selskap har normalt positiv kontantstrøm fra drift

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Driftsaktiviteter | Pengestrømmer fra den ordinære virksomheten |
| Investeringsaktiviteter | Pengestrømmer fra kjøp/salg av anleggsmidler |
| Finansieringsaktiviteter | Pengestrømmer fra lån, utbytte og kapitalendringer |
| Direkte metode | Viser faktiske inn- og utbetalinger |
| Indirekte metode | Justerer årsresultatet for ikke-kontante poster |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.5: Årsavslutning i praksis
// ============================================================================

export const CHAPTER_REGNSKAP_REVISJON_6_5: TextbookChapter = {
  id: 'regnskap-revisjon-6-5',
  courseId: 'regnskap-revisjon',
  chapterNumber: '6.5',
  title: 'Årsavslutning i praksis',
  description: 'Den praktiske gjennomføringen av årsavslutningen: periodiseringer, avsetninger, skatteberegning, avslutningsposter og overgang til nytt regnskapsår.',
  estimatedMinutes: 24,
  competenceGoals: ['gjennomføre årsavslutning med periodiseringer, avsetninger og skatteberegning'],
  keyTerms: [
    { term: 'Årsavslutning', definition: 'Prosessen med å avslutte regnskapsåret, inkludert periodiseringer, avsetninger og skatteberegning, slik at regnskapet viser et rettvisende bilde' },
    { term: 'Periodisering', definition: 'Å henføre inntekter og kostnader til den perioden de tilhører, uavhengig av betalingstidspunktet' },
    { term: 'Avsetning', definition: 'Forpliktelse av usikkert beløp eller tidspunkt, f.eks. avsetning for garantiforpliktelser eller tap på fordringer' },
    { term: 'Skatteberegning', definition: 'Beregning av årets skattekostnad basert på skattemessig resultat, som kan avvike fra regnskapsmessig resultat' },
    { term: 'Avslutningsposter', definition: 'Posteringer som gjøres ved årsslutt for å korrigere og fullføre regnskapet, som avskrivninger, nedskrivninger og periodiseringer' },
    { term: 'Forskuddsbetalt kostnad', definition: 'Kostnad som er betalt men som helt eller delvis tilhører neste regnskapsperiode, balanseføres som eiendel' },
  ],
  content: [
    {
      id: 'rr-6-5-intro',
      type: 'text',
      content: `## Fra daglig bokføring til ferdig årsregnskap

Gjennom året bokfører virksomheten løpende transaksjoner. Ved årsslutt må regnskapet korrigeres og fullføres slik at det viser et rettvisende bilde av virksomhetens resultat og stilling. Denne prosessen kalles årsavslutning og er en av de viktigste oppgavene for regnskapsfører og revisor.

I dette kapittelet skal du lære:
- Hva periodiseringer er og hvorfor de er nødvendige
- Hvilke avsetninger som skal gjøres
- Hvordan skatteberegningen gjøres
- Oversikt over vanlige avslutningsposter
- Rekkefølgen i årsavslutningsprosessen`,
    },
    {
      id: 'rr-6-5-def-1',
      type: 'definition',
      title: 'Periodisering',
      content: `**Periodisering** betyr å henføre inntekter og kostnader til den perioden de tilhører, uavhengig av når betalingen skjer. Periodiseringsprinsippet er et grunnleggende regnskapsprinsipp. Eksempel: Forsikringspremie betalt i november for perioden november–oktober neste år. Bare 2 av 12 måneder tilhører regnskapsåret, så 10/12 av premien balanseføres som forskuddsbetalt kostnad.`,
    },
    {
      id: 'rr-6-5-text-1',
      type: 'text',
      content: `### Vanlige periodiseringer ved årsavslutning

**Forskuddsbetalte kostnader (eiendel):**
- Forsikringspremier som dekker inn i neste år
- Husleie betalt forskudd
- Forskuddsbetalte abonnementer

**Påløpte kostnader (gjeld):**
- Feriepenger (opptjent men ikke utbetalt)
- Påløpte renter på lån
- Strøm, telefon osv. for desember (faktura kommer i januar)

**Opptjente, ikke fakturerte inntekter (eiendel):**
- Utført arbeid som ikke er fakturert per 31.12.
- Opptjente renter på bankinnskudd

**Forskuddsfakturerte inntekter (gjeld):**
- Mottatt betaling for tjenester som skal leveres neste år
- Abonnementsinntekter som dekker inn i neste periode`,
    },
    {
      id: 'rr-6-5-example-1',
      type: 'example',
      title: 'Eksempel: Periodisering av forsikring',
      problem: 'Bergen Regnskap AS betaler forsikringspremie 60 000 kr den 1. oktober for perioden 01.10.–30.09. neste år. Hvordan periodiseres dette ved årsslutt?',
      solution: `**Analyse:**
- Total premie: 60 000 kr for 12 måneder = 5 000 kr/mnd
- Tilhører dette regnskapsåret: oktober, november, desember = 3 måneder = 15 000 kr
- Tilhører neste regnskapsår: januar–september = 9 måneder = 45 000 kr

**Bokføring ved betaling 01.10.:**
Debet 6300 Forsikring 60 000
Kredit 1920 Bankinnskudd 60 000

**Periodisering 31.12.:**
Debet 1710 Forskuddsbetalte kostnader 45 000
Kredit 6300 Forsikring 45 000

**Resultat:**
- Forsikringskostnad i resultatregnskapet: 15 000 kr (3 måneder)
- Forskuddsbetalt kostnad i balansen: 45 000 kr (eiendel)

I neste regnskapsår reverseres periodiseringsposten, slik at kostnaden belastes riktig år.`,
    },
    {
      id: 'rr-6-5-text-2',
      type: 'text',
      content: `### Avsetninger ved årsavslutning

I tillegg til periodiseringer må det gjøres avsetninger for forpliktelser:

**Tap på kundefordringer:**
- Vurder alle utestående fordringer individuelt
- Avsett for fordringer som trolig ikke blir betalt
- Eventuelt avsett et generelt tapsbeløp basert på historisk tapserfaring

**Garantiforpliktelser:**
- Beregn forventet kostnad for garantiarbeid
- Basert på erfaringstall og omsetning

**Feriepenger:**
- Opptjente feriepenger for ansatte (normalt 12 % av feriepengegrunnlaget)
- Inkludert arbeidsgiveravgift av feriepengene

**Avskrivninger:**
- Lineære avskrivninger på varige driftsmidler
- Basert på forventet økonomisk levetid

**Nedskrivninger:**
- Vurder om eiendeler har fått varig lavere verdi
- Nedskriv til virkelig verdi dersom denne er vesentlig lavere enn bokført verdi`,
    },
    {
      id: 'rr-6-5-text-3',
      type: 'text',
      content: `### Skatteberegning

Skatteberegningen er en sentral del av årsavslutningen. Skattekostnaden baseres på det **skattemessige resultatet**, som kan avvike fra det regnskapsmessige resultatet.

**Vanlige årsaker til avvik:**
| Regnskapsmessig | Skattemessig |
|----------------|-------------|
| Lineære avskrivninger | Saldoavskrivninger |
| Nedskrivning av goodwill | Ikke fradragsberettiget |
| Avsetning for tap | Fradrag først ved konstatert tap |
| Gevinst ved salg | Kan utsettes (betinget skattefritak) |

**Forenklet skatteberegning:**

| Post | Beløp |
|------|-------|
| Regnskapsmessig resultat før skatt | 500 000 |
| + Ikke-fradragsberettigede kostnader | 30 000 |
| - Skattemessige meravskrivninger | -50 000 |
| **Skattemessig resultat** | **480 000** |
| Skatt 22 % | 105 600 |

Differansen mellom regnskapsmessig og skattemessig resultat gir grunnlag for **utsatt skatt** eller **utsatt skattefordel** i balansen.`,
    },
    {
      id: 'rr-6-5-example-2',
      type: 'example',
      title: 'Eksempel: Sjekkliste for årsavslutning',
      problem: 'Vis en typisk rekkefølge for gjennomføring av årsavslutningen i et mellomstort aksjeselskap.',
      solution: `**Sjekkliste for årsavslutning:**

**1. Avstemming og kontroll:**
- Avstem bankkonto mot kontoutskrift
- Avstem kundefordringer mot aldersfordelt saldoliste
- Avstem leverandørgjeld mot leverandørspesifikasjon
- Kontroller og oppdater anleggsregisteret

**2. Periodiseringer:**
- Periodiser forskuddsbetalte kostnader (forsikring, husleie)
- Avsett for påløpte, ikke-betalte kostnader (strøm, renter)
- Periodiser forskuddsinnbetalte inntekter
- Bokfør opptjente, ikke-fakturerte inntekter

**3. Avsetninger:**
- Beregn og bokfør avskrivninger
- Vurder nedskrivningsbehov
- Avsett for tap på kundefordringer
- Beregn og bokfør feriepenger og arbeidsgiveravgift

**4. Varelager:**
- Gjennomfør varetelling
- Vurder ukurans og nedskrivningsbehov
- Bokfør beholdningsendring

**5. Skatteberegning:**
- Beregn skattemessig resultat
- Beregn betalbar skatt
- Beregn endring i utsatt skatt/skattefordel

**6. Disponering:**
- Styret foreslår utbytte
- Overfør resterende resultat til egenkapital`,
    },
    {
      id: 'rr-6-5-tip-1',
      type: 'tip',
      title: 'Reversering av periodiseringsposter',
      content: `De fleste periodiseringsposter reverseres i starten av nytt regnskapsår. Dette kalles tilbakeføring eller reversering. For eksempel reverseres forskuddsbetalt forsikring ved å kreditere 1710-kontoen og debitere 6300-kontoen. Slik belastes kostnaden automatisk riktig i det nye året. Mange regnskapsprogrammer gjør dette automatisk.`,
    },
    {
      id: 'rr-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'rr-6-5-ex-1',
        number: '6.5.1',
        type: 'multiple-choice',
        task: 'Hva betyr periodisering i regnskapssammenheng?',
        options: [
          { id: 'a', text: 'Å betale regninger til riktig tid', isCorrect: false },
          { id: 'b', text: 'Å henføre inntekter og kostnader til den perioden de tilhører, uavhengig av betalingstidspunktet', isCorrect: true },
          { id: 'c', text: 'Å fordele kostnadene likt på alle måneder', isCorrect: false },
          { id: 'd', text: 'Å rapportere regnskap kvartalsvis', isCorrect: false },
        ],
        solution: 'Periodisering betyr å henføre inntekter og kostnader til den perioden de økonomisk tilhører, uavhengig av når betalingen skjer. Dette sikrer at resultatregnskapet viser det korrekte resultatet for perioden. En kostnad som er betalt i desember men gjelder januar neste år, skal ikke belaste årets resultat.',
      },
    },
    {
      id: 'rr-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'rr-6-5-ex-2',
        number: '6.5.2',
        type: 'classic',
        task: 'Et selskap betaler husleie 30 000 kr per måned. Den 15. desember betales husleie for januar neste år. Hvordan skal dette periodiseres ved årsslutt? Vis bilagstekst og bokføring.',
        hints: ['Tenk på hvilken periode kostnaden tilhører.'],
        solution: 'Husleien på 30 000 kr for januar neste år er betalt i desember, men tilhører neste regnskapsår. Bokføring ved betaling 15.12.: Debet 6300 Husleie 30 000, kredit 1920 Bankinnskudd 30 000. Periodisering 31.12.: Debet 1710 Forskuddsbetalte kostnader 30 000, kredit 6300 Husleie 30 000. Resultat: Husleiekostnaden for desember er korrekt, og den forskuddsbetalte januarleien vises som eiendel i balansen.',
      },
    },
    {
      id: 'rr-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'rr-6-5-ex-3',
        number: '6.5.3',
        type: 'multiple-choice',
        task: 'Hvorfor avviker skattemessig resultat ofte fra regnskapsmessig resultat?',
        options: [
          { id: 'a', text: 'Fordi skattemyndighetene bruker andre tall enn selskapet', isCorrect: false },
          { id: 'b', text: 'Fordi skattereglene har andre avskrivningssatser og fradragsregler enn regnskapsloven', isCorrect: true },
          { id: 'c', text: 'Fordi selskapet kan velge fritt hvilket resultat det oppgir til Skatteetaten', isCorrect: false },
          { id: 'd', text: 'Fordi regnskapet alltid viser høyere resultat enn skatteoppgaven', isCorrect: false },
        ],
        solution: 'Skattemessig resultat avviker fra regnskapsmessig fordi skattereglene har egne regler for avskrivninger (saldoavskrivning vs. lineær), tidspunkt for fradrag (konstatert tap vs. avsetning), og noen kostnader er ikke fradragsberettiget skattemessig (f.eks. representasjon). Avviket kan gå begge veier.',
      },
    },
    {
      id: 'rr-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'rr-6-5-ex-4',
        number: '6.5.4',
        type: 'classic',
        task: 'Et selskap har regnskapsmessig resultat før skatt på 800 000 kr. Ikke-fradragsberettigede representasjonskostnader utgjør 20 000 kr. Skattemessige avskrivninger er 50 000 kr høyere enn regnskapsmessige. Beregn skattemessig resultat og skattekostnad (22 %).',
        solution: 'Skattemessig resultat: Regnskapsmessig resultat 800 000 + ikke-fradragsberettigede kostnader 20 000 - skattemessige meravskrivninger 50 000 = 770 000 kr. Skattekostnad: 770 000 x 22 % = 169 400 kr. Differansen mellom regnskapsmessig (800 000) og skattemessig (770 000) resultat er 30 000 kr, som gir grunnlag for utsatt skatt på 6 600 kr (30 000 x 22 %).',
      },
    },
    {
      id: 'rr-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'rr-6-5-ex-5',
        number: '6.5.5',
        type: 'classic',
        task: 'Sett opp en sjekkliste for årsavslutningen til en liten handelsbedrift med varelager, kundefordringer, et banklån og tre ansatte. Nevn minst åtte poster som må kontrolleres eller bokføres.',
        hints: ['Tenk gjennom hele balansen, fra eiendeler til gjeld.'],
        solution: '1) Avstem bankkonto mot kontoutskrift. 2) Gjennomfør varetelling og bokfør beholdningsendring. 3) Vurder varelager for ukurans og eventuell nedskrivning. 4) Gå gjennom kundefordringer og avsett for mulige tap. 5) Bokfør avskrivninger på varige driftsmidler. 6) Periodiser forskuddsbetalte kostnader (forsikring, husleie). 7) Avsett for påløpte kostnader (strøm, telefon for desember). 8) Beregn og avsett feriepenger og arbeidsgiveravgift av feriepenger. 9) Avsett for påløpte renter på banklånet. 10) Beregn skattemessig resultat og betalbar skatt. 11) Kontroller mva-oppgaver og avstem mva-konto.',
      },
    },
    {
      id: 'rr-6-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'rr-6-5-ex-6',
        number: '6.5.6',
        type: 'multiple-choice',
        task: 'Strømregningen for desember på 8 000 kr kommer først i januar. Hva gjøres ved årsavslutningen?',
        options: [
          { id: 'a', text: 'Ingenting, kostnaden bokføres i januar', isCorrect: false },
          { id: 'b', text: 'Kostnaden periodiseres: debiteres strømkostnad, krediteres påløpte kostnader', isCorrect: true },
          { id: 'c', text: 'Beløpet trekkes fra strømkostnaden for november', isCorrect: false },
          { id: 'd', text: 'Kostnaden estimeres og bokføres som forskuddsbetalt', isCorrect: false },
        ],
        solution: 'Strømkostnaden for desember tilhører regnskapsåret selv om fakturaen kommer i januar. Ved årsavslutningen gjøres en periodisering: debet strømkostnad (6340) 8 000, kredit påløpte kostnader (2960) 8 000. Slik belastes kostnaden riktig regnskapsår, og forpliktelsen vises i balansen.',
      },
    },
    {
      id: 'rr-6-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'rr-6-5-ex-7',
        number: '6.5.7',
        type: 'classic',
        task: 'Drøft hvilke konsekvenser det kan få dersom et selskap unnlater å gjøre periodiseringer ved årsavslutning. Vurder effekten på resultat, balanse og skatteberegning.',
        solution: 'Uten periodiseringer blir regnskapet feil på flere måter: 1) Resultatregnskapet viser feil resultat – kostnader som tilhører perioden men ikke er bokført, mangler, og kostnader som tilhører neste år er med. Resultatet kan bli både for høyt og for lavt. 2) Balansen viser feil stilling – forskuddsbetalte kostnader mangler som eiendel, og påløpte kostnader mangler som gjeld. Egenkapitalen blir dermed feil. 3) Skatteberegningen påvirkes fordi feil resultat gir feil skattegrunnlag. Selskapet kan betale for mye eller for lite skatt. 4) Brudd på regnskapsloven og god regnskapsskikk, noe revisor vil påpeke. 5) Regnskapsbrukere (bank, investorer) får feil beslutningsgrunnlag, som kan føre til feilvurderinger av kredittverdighet og lønnsomhet.',
      },
    },
    {
      id: 'rr-6-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Årsavslutning** er prosessen med å korrigere og fullføre regnskapet ved årsslutt
- **Periodiseringer** sikrer at inntekter og kostnader henføres til riktig periode
- **Avsetninger** gjøres for forpliktelser som tap på fordringer, garantier og feriepenger
- **Skatteberegningen** baseres på skattemessig resultat, som kan avvike fra regnskapsmessig
- Årsavslutningen følger en systematisk rekkefølge fra avstemming til disponering
- Riktig årsavslutning er avgjørende for et rettvisende regnskap

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Periodisering | Henføre inntekter og kostnader til riktig periode |
| Forskuddsbetalt kostnad | Betalt, men tilhører neste periode (eiendel) |
| Påløpt kostnad | Tilhører perioden, men ikke betalt (gjeld) |
| Avsetning | Forpliktelse av usikkert beløp eller tidspunkt |
| Skattemessig resultat | Grunnlaget for beregning av selskapsskatt |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const REGNSKAP_REVISJON_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_REGNSKAP_REVISJON_6_1,
  CHAPTER_REGNSKAP_REVISJON_6_2,
  CHAPTER_REGNSKAP_REVISJON_6_3,
  CHAPTER_REGNSKAP_REVISJON_6_4,
  CHAPTER_REGNSKAP_REVISJON_6_5,
];
