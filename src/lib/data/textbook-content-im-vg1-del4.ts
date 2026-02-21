/* eslint-disable */
// @ts-nocheck
/**
 * Informasjonsteknologi og medieproduksjon VG1 - Del 4: Grafisk design og bildebehandling
 *
 * Kapittel 4.1-4.6: Grafisk design og bildebehandling
 * Dekker LK20 kompetansemål for design, fargelære, typografi, foto, bildebehandling og vektorgrafikk
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Designprinsipper og komposisjon
// ============================================================================

export const CHAPTER_IM_VG1_4_1: TextbookChapter = {
  id: 'im-vg1-4-1',
  courseId: 'im-vg1',
  chapterNumber: '4.1',
  title: 'Designprinsipper og komposisjon',
  description: 'Lær grunnleggende designprinsipper som balanse, kontrast, nærhet og repetisjon, og hvordan de skaper visuell harmoni.',
  estimatedMinutes: 55,
  competenceGoals: [
    'velge og bruke virkemidler, typografi og layout som passer til ulike budskap og reflektere over effekten disse har på budskapet',
  ],
  content: [
    {
      id: 'im-4-1-intro',
      type: 'text',
      content: `## Designprinsipper og komposisjon

God design er ikke tilfeldig. Bak ethvert vellykket design ligger bevisste valg basert på prinsipper som har blitt utviklet gjennom århundrer med visuell kommunikasjon. Enten du lager en plakat, en nettside eller en logo, er de samme grunnprinsippene relevante.

I dette kapittelet skal du lære:
- De viktigste designprinsippene: balanse, kontrast, nærhet, repetisjon og hierarki
- Hvordan komposisjon styrer blikket til betrakteren
- Hvorfor tomrom er et viktig designelement
- Hvordan du kan analysere og forbedre design ved hjelp av disse prinsippene`,
    },
    {
      id: 'im-4-1-def-1',
      type: 'definition',
      title: 'Designprinsipper',
      content: `**Designprinsipper** er grunnleggende regler og retningslinjer som brukes til å organisere visuelle elementer slik at resultatet blir funksjonelt, estetisk og kommuniserer tydelig. De viktigste prinsippene er balanse, kontrast, nærhet, repetisjon og hierarki.`,
    },
    {
      id: 'im-4-1-text-1',
      type: 'text',
      content: `### Balanse

Balanse handler om hvordan visuelle elementer fordeles i et design. Et balansert design føles stabilt og harmonisk.

**Symmetrisk balanse** oppstår når elementer speiles langs en akse. Dette gir et formelt og rolig uttrykk. Mange logoer og offisielle dokumenter bruker symmetrisk balanse.

**Asymmetrisk balanse** oppnås når ulike elementer veier visuelt likt, selv om de ikke er identiske. Et stort mørkt element på venstre side kan balanseres av flere små elementer på høyre side. Asymmetri skaper dynamikk og spenning.

**Radial balanse** betyr at elementer stråler ut fra et sentralt punkt, som eikene i et hjul. Dette brukes ofte i dekorative mønstre og mandalaer.`,
    },
    {
      id: 'im-4-1-text-2',
      type: 'text',
      content: `### Kontrast

Kontrast er forskjeller mellom elementer som gjør designet interessant og lesbart. Uten kontrast blir et design flatt og kjedelig.

**Typer kontrast:**
- **Størrelseskontrast**: Stor tekst mot liten tekst skaper hierarki
- **Fargekontrast**: Mørk bakgrunn mot lys tekst sikrer lesbarhet
- **Formkontrast**: Runde former mot kantede former skaper visuell spenning
- **Teksturkontrast**: Glatte overflater mot grove overflater gir dybde
- **Vektkontrast**: Tykk skrift mot tynn skrift fremhever viktig innhold

God kontrast er spesielt viktig for tilgjengelighet. Tekst må ha tilstrekkelig kontrast mot bakgrunnen for at alle skal kunne lese den, inkludert personer med nedsatt syn.`,
    },
    {
      id: 'im-4-1-text-3',
      type: 'text',
      content: `### Nærhet og gruppering

Nærhet (proximity) er prinsippet om at elementer som hører sammen, plasseres nær hverandre. Hjernen vår grupperer automatisk ting som er fysisk nærme hverandre.

**Praktisk bruk:**
- Overskrift og brødtekst plasseres tett sammen
- Relaterte knapper grupperes visuelt
- Navigasjonselementer samles i en meny
- Kontaktinformasjon vises som en samlet blokk

Motsatt brukes avstand til å skille elementer som ikke hører sammen. Mellomrom mellom seksjoner på en nettside signaliserer at innholdet handler om ulike temaer.`,
    },
    {
      id: 'im-4-1-text-4',
      type: 'text',
      content: `### Repetisjon og konsistens

Repetisjon skaper sammenheng og profesjonalitet ved å gjenta visuelle elementer gjennom et design.

**Hva kan repeteres:**
- Farger fra en fargepalett
- Skrifttyper og størrelser
- Former og ikoner i samme stil
- Avstandsmønstre og marger
- Grafiske elementer som linjer eller prikker

Repetisjon gjør at brukeren gjenkjenner strukturen og navigerer lettere. En nettside der alle knapper ser like ut, er mer brukervennlig enn en der hver knapp har forskjellig stil.

### Hierarki og tomrom

**Visuelt hierarki** styrer rekkefølgen blikket beveger seg i. Det viktigste elementet bør være mest fremtredende, etterfulgt av nest viktigst, og så videre.

**Tomrom** (whitespace) er den ubrukte plassen i et design. Det er ikke bortkastet plass - det gir elementene rom til å puste, forbedrer lesbarhet og skaper en følelse av eleganse og kvalitet.`,
    },
    {
      id: 'im-4-1-example-1',
      type: 'example',
      title: 'Analyse av en filmplakat',
      content: `La oss analysere en typisk filmplakat med designprinsipper:

**Hierarki**: Filmtittelen er størst og mest synlig. Deretter kommer bildet av hovedskuespillerne. Til slutt finnes mindre tekst med regissør, dato og produksjonsselskap.

**Kontrast**: Tittelen står i hvitt mot en mørk bakgrunn. Store bokstaver kontrasterer med mindre tekst nederst.

**Nærhet**: Skuespillernes navn er plassert nær ansiktene deres. Dato og kreditering er samlet nederst.

**Balanse**: Hovedmotivet er sentrert. Tekstelementer er symmetrisk plassert.

**Repetisjon**: Samme skriftfamilie brukes gjennom hele plakaten, bare i forskjellige størrelser og vekter.`,
    },
    {
      id: 'im-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-4-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilket designprinsipp handler om at elementer som hører sammen, plasseres nær hverandre?',
        options: [
          'Kontrast',
          'Nærhet',
          'Repetisjon',
          'Hierarki',
        ],
        correctAnswer: 1,
        solution: 'Nærhet (proximity) er prinsippet om at relaterte elementer plasseres nær hverandre, slik at hjernen automatisk oppfatter dem som en gruppe.',
      },
    },
    {
      id: 'im-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom symmetrisk og asymmetrisk balanse, og gi et eksempel på hver.',
        solution: 'Symmetrisk balanse speiler elementer langs en akse, noe som gir et formelt og rolig uttrykk (eksempel: en offisiell invitasjon med sentrert tekst). Asymmetrisk balanse bruker ulike elementer som veier visuelt likt uten å være identiske (eksempel: en nettside med et stort bilde til venstre balansert av tekst og knapper til høyre).',
      },
    },
    {
      id: 'im-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-4-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hvorfor er tomrom (whitespace) viktig i design?',
        options: [
          'Det fyller ut plassen som er til overs',
          'Det gir elementer rom til å puste og forbedrer lesbarhet',
          'Det gjør designet billigere å trykke',
          'Det er bare viktig i trykte medier',
        ],
        correctAnswer: 1,
        solution: 'Tomrom gir elementer rom til å puste, forbedrer lesbarheten og skaper en følelse av eleganse og kvalitet. Det er et bevisst designvalg, ikke bortkastet plass.',
      },
    },
    {
      id: 'im-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Du skal lage en plakat for et skolearrangement. Beskriv hvordan du vil bruke minst tre designprinsipper for å gjøre plakaten effektiv.',
        solution: 'Eksempel: 1) Hierarki: Arrangementets navn øverst i stor, tydelig skrift, deretter dato og tid i medium størrelse, og praktisk informasjon i liten skrift. 2) Kontrast: Mørk tekst på lys bakgrunn for lesbarhet, med en kontrastfarge for å fremheve de viktigste detaljene. 3) Nærhet: Dato, tid og sted grupperes sammen. Kontaktinformasjon samles nederst. 4) Repetisjon: Samme fargepalett og skrifttype gjennom hele plakaten.',
      },
    },
    {
      id: 'im-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-4-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er visuelt hierarki?',
        options: [
          'En spesiell type skrift',
          'Rekkefølgen blikket beveger seg i gjennom et design',
          'Et verktøy i bildebehandlingsprogrammer',
          'En måte å organisere filer på datamaskinen',
        ],
        correctAnswer: 1,
        solution: 'Visuelt hierarki styrer rekkefølgen blikket beveger seg i gjennom et design, slik at de viktigste elementene oppfattes først.',
      },
    },
    {
      id: 'im-4-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-4-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Finn en nettside du bruker ofte, og analyser den med hensyn til designprinsippene balanse, kontrast, nærhet og repetisjon. Hva fungerer bra, og hva kunne vært forbedret?',
        solution: 'Analysen bør identifisere konkrete eksempler på hvert prinsipp i nettsiden. Eksempel: Balanse - er menyen og innholdet jevnt fordelt? Kontrast - er teksten lett å lese mot bakgrunnen? Nærhet - er relaterte elementer gruppert logisk? Repetisjon - er knapper og lenker konsistente? Forbedringsforslag bør være konkrete og basert på prinsippene.',
      },
    },
    {
      id: 'im-4-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:
- **Balanse** kan være symmetrisk, asymmetrisk eller radial
- **Kontrast** skaper interesse og sikrer lesbarhet
- **Nærhet** grupperer relaterte elementer visuelt
- **Repetisjon** skaper konsistens og profesjonalitet
- **Hierarki** styrer rekkefølgen blikket beveger seg i
- **Tomrom** er et aktivt designelement som gir pusterom`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Balanse', definition: 'Fordeling av visuelle elementer slik at designet føles stabilt.' },
    { term: 'Kontrast', definition: 'Forskjeller mellom elementer som gjør designet interessant og lesbart.' },
    { term: 'Nærhet', definition: 'Prinsippet om at relaterte elementer plasseres nær hverandre.' },
    { term: 'Repetisjon', definition: 'Gjentakelse av visuelle elementer for å skape sammenheng.' },
    { term: 'Visuelt hierarki', definition: 'Rekkefølgen blikket beveger seg i gjennom et design.' },
    { term: 'Tomrom', definition: 'Ubrukt plass i et design som gir elementer rom og forbedrer lesbarhet.' },
  ],
};

// ============================================================================
// Kapittel 4.2: Fargelære og fargepsykologi
// ============================================================================

export const CHAPTER_IM_VG1_4_2: TextbookChapter = {
  id: 'im-vg1-4-2',
  courseId: 'im-vg1',
  chapterNumber: '4.2',
  title: 'Fargelære og fargepsykologi',
  description: 'Utforsk fargemodeller, fargeharmonier og hvordan farger påvirker kommunikasjon, stemning og brukeropplevelse.',
  estimatedMinutes: 50,
  competenceGoals: [
    'velge og bruke virkemidler, typografi og layout som passer til ulike budskap og reflektere over effekten disse har på budskapet',
  ],
  content: [
    {
      id: 'im-4-2-intro',
      type: 'text',
      content: `## Fargelære og fargepsykologi

Farger er et av de kraftigste virkemidlene i visuell kommunikasjon. De kan vekke følelser, styre oppmerksomhet og kommunisere budskap uten ord. En god designer forstår både tekniske fargemodeller og den psykologiske virkningen farger har på mennesker.

I dette kapittelet skal du lære:
- Fargemodellene RGB, CMYK og HSL
- Fargesirkelen og fargeharmonier
- Hvordan farger påvirker stemning og budskap
- Praktisk bruk av fargepaletter i design`,
    },
    {
      id: 'im-4-2-def-1',
      type: 'definition',
      title: 'Fargemodell',
      content: `En **fargemodell** er et matematisk system for å beskrive og reprodusere farger. Ulike medier bruker ulike fargemodeller: RGB for skjerm, CMYK for trykk og HSL for intuitiv fargevalg.`,
    },
    {
      id: 'im-4-2-text-1',
      type: 'text',
      content: `### RGB - Additivt fargesystem

RGB står for rød, grønn og blå. Dette er et **additivt** fargesystem som brukes på skjermer. Når alle tre fargene blandes med full intensitet, får du hvitt lys. Når ingen farger er aktive, er resultatet svart.

**Verdier**: Hver kanal har verdier fra 0 til 255.
- Rød: rgb(255, 0, 0)
- Grønn: rgb(0, 255, 0)
- Blå: rgb(0, 0, 255)
- Hvit: rgb(255, 255, 255)
- Svart: rgb(0, 0, 0)
- Gul: rgb(255, 255, 0)

RGB brukes i alt som vises på skjerm: nettsider, apper, presentasjoner og digitale bilder.

### CMYK - Subtraktivt fargesystem

CMYK står for cyan, magenta, gul (yellow) og svart (key). Dette er et **subtraktivt** system brukt i trykk. Blekk absorberer lys, så jo flere farger du blander, jo mørkere blir resultatet.

**Verdier**: Hver kanal angis i prosent fra 0% til 100%.

Svart (K) legges til fordi blanding av CMY i praksis ikke gir helt svart, men en mørk brun farge.

### HSL - Intuitiv fargevalg

HSL står for fargetone (hue), metning (saturation) og lyshet (lightness).
- **Hue**: Fargetone angitt i grader (0-360°) på fargesirkelen
- **Saturation**: Metning fra 0% (grå) til 100% (ren farge)
- **Lightness**: Lyshet fra 0% (svart) til 100% (hvit)

HSL er intuitivt fordi du kan velge en farge og deretter justere intensitet og lyshet uavhengig.`,
    },
    {
      id: 'im-4-2-text-2',
      type: 'text',
      content: `### Fargesirkelen og fargeharmonier

Fargesirkelen er et verktøy for å forstå forholdet mellom farger. Den viser primærfargene, sekundærfargene og tertiærfargene i en sirkel.

**Fargeharmonier** er kombinasjoner av farger som fungerer godt sammen:

**Komplementære farger** ligger rett overfor hverandre i fargesirkelen (f.eks. blå og oransje). De skaper sterk kontrast og energi.

**Analoge farger** ligger ved siden av hverandre i fargesirkelen (f.eks. blå, blågrønn og grønn). De gir et harmonisk og rolig uttrykk.

**Triadiske farger** er tre farger med lik avstand i fargesirkelen (f.eks. rød, gul og blå). De gir et levende og balansert uttrykk.

**Splitkomplementære farger** bruker en farge pluss de to fargene ved siden av dens komplementærfarge. Dette gir kontrast med mindre spenning enn rene komplementærfarger.`,
    },
    {
      id: 'im-4-2-text-3',
      type: 'text',
      content: `### Fargepsykologi

Farger påvirker oss psykologisk og har kulturelle assosiasjoner:

**Rød**: Energi, lidenskap, fare, handling. Brukes til salgsskilt og advarsler.
**Blå**: Tillit, ro, profesjonalitet, stabilitet. Mange banker og teknologiselskaper bruker blå.
**Grønn**: Natur, helse, vekst, bærekraft. Populær i helse- og miljøbransjen.
**Gul**: Optimisme, varme, oppmerksomhet. Brukes for å tiltrekke blikket.
**Oransje**: Entusiasme, kreativitet, vennlighet. Brukes i underholdning og mat.
**Lilla**: Luksus, kreativitet, mystikk. Forbindes med premium-produkter.
**Hvit**: Renhet, enkelhet, minimalisme. Gir luft og pusterom.
**Svart**: Eleganse, kraft, sofistikering. Brukes i luksusmerker.

Det er viktig å huske at fargeassosiasjoner varierer mellom kulturer. Hvit symboliserer renhet i vestlige kulturer, men sorg i flere asiatiske kulturer.`,
    },
    {
      id: 'im-4-2-example-1',
      type: 'example',
      title: 'Fargevalg for en kafé-nettside',
      content: `En kafé ønsker en nettside som formidler varme, hygge og kvalitet.

**Fargevalg**: Varm brun som hovedfarge (assosiasjoner til kaffe), kremhvit bakgrunn (renhet og luft), og gylden aksent (luksus og varme).

**Fargeharmoni**: Analoge varme toner (brun, beige, gylden) skaper harmoni og ro.

**Kontrast**: Mørk brun tekst på kremhvit bakgrunn sikrer god lesbarhet. Gylden brukes sparsommelig til knapper og fremhevinger.

**RGB-verdier**: Hovedbrun: rgb(101, 67, 33), Kremhvit: rgb(255, 253, 245), Gylden: rgb(212, 175, 55).`,
    },
    {
      id: 'im-4-2-summary',
      type: 'text',
      content: `## Oppsummering

- Farger beskrives gjennom tre modeller: RGB (skjerm), CMYK (trykk) og HSL (intuitiv beskrivelse).
- Fargesirkelen viser relasjonen mellom primær-, sekundær- og tertiærfarger.
- Komplementære farger ligger overfor hverandre i fargesirkelen og skaper sterk kontrast.
- Fargepsykologi handler om hvordan farger påvirker stemning og kommunikasjon.
- Fargepaletter bør ha god kontrast og balanse for å fungere godt i design.
- Verktøy som Adobe Color og Coolors hjelper med å lage harmoniske fargepaletter.`,
    },
    {
      id: 'im-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-4-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken fargemodell brukes for innhold som skal vises på skjerm?',
        options: [
          'CMYK',
          'RGB',
          'Pantone',
          'HSL er den eneste modellen for skjerm',
        ],
        correctAnswer: 1,
        solution: 'RGB (rød, grønn, blå) er det additive fargesystemet som brukes for skjermvisning. Skjermer blander rødt, grønt og blått lys for å skape alle synlige farger.',
      },
    },
    {
      id: 'im-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom additivt og subtraktivt fargesystem, og gi et eksempel på hvor hvert system brukes.',
        solution: 'Additivt fargesystem (RGB) blander lys - jo flere farger du blander, jo lysere blir det, og alle tre gir hvitt. Brukes på skjermer. Subtraktivt fargesystem (CMYK) blander pigmenter/blekk - jo flere farger du blander, jo mørkere blir det. Brukes i trykk (aviser, plakater, visittkort).',
      },
    },
    {
      id: 'im-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-4-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er komplementære farger?',
        options: [
          'Farger som ligger ved siden av hverandre i fargesirkelen',
          'Farger som ligger rett overfor hverandre i fargesirkelen',
          'Tre farger med lik avstand i fargesirkelen',
          'Farger med samme fargetone men ulik metning',
        ],
        correctAnswer: 1,
        solution: 'Komplementære farger ligger rett overfor hverandre i fargesirkelen, som blå og oransje eller rød og grønn. De skaper sterk kontrast og visuell energi.',
      },
    },
    {
      id: 'im-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Du skal velge farger til en nettside for en miljøorganisasjon. Begrunn fargevalgene dine med utgangspunkt i fargepsykologi og fargeharmoni.',
        solution: 'Hovedfarge: Grønn (assosiasjoner til natur, vekst og bærekraft). Sekundærfarge: Blå (tillit og stabilitet). Aksent: Hvit (renhet og enkelhet). Fargeharmoni: Analoge farger grønn-blågrønn-blå gir et harmonisk uttrykk som forsterker budskapet om natur og miljø. Mørk grønn tekst på lys bakgrunn sikrer lesbarhet.',
      },
    },
    {
      id: 'im-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-4-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva står HSL for?',
        options: [
          'High Speed Link',
          'Hue, Saturation, Lightness',
          'Hex, Spectrum, Level',
          'Hue, Shade, Luminance',
        ],
        correctAnswer: 1,
        solution: 'HSL står for Hue (fargetone), Saturation (metning) og Lightness (lyshet). Det er en intuitiv fargemodell der du velger fargetone og deretter justerer metning og lyshet.',
      },
    },
    {
      id: 'im-4-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-4-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Forklar hvorfor fargeassosiasjoner kan variere mellom kulturer. Gi minst to eksempler.',
        solution: 'Fargeassosiasjoner er kulturelt betinget og læres gjennom oppvekst og tradisjon. Eksempler: 1) Hvit symboliserer renhet og bryllup i vestlige kulturer, men sorg og begravelse i mange asiatiske kulturer. 2) Rød betyr lykke og velstand i kinesisk kultur, mens den forbindes med fare og stopp i vestlige kulturer. 3) Gul kan symbolisere feighet i noen vestlige kulturer, men er en hellig og kongelig farge i Thailand.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'RGB', definition: 'Additivt fargesystem med rød, grønn og blå, brukt for skjermvisning.' },
    { term: 'CMYK', definition: 'Subtraktivt fargesystem med cyan, magenta, gul og svart, brukt for trykk.' },
    { term: 'HSL', definition: 'Fargemodell basert på fargetone, metning og lyshet.' },
    { term: 'Fargesirkelen', definition: 'Visuelt verktøy som viser forholdet mellom farger.' },
    { term: 'Komplementærfarger', definition: 'Farger som ligger rett overfor hverandre i fargesirkelen.' },
    { term: 'Fargepsykologi', definition: 'Studiet av hvordan farger påvirker menneskelig atferd og følelser.' },
  ],
};

// ============================================================================
// Kapittel 4.3: Typografi og skriftdesign
// ============================================================================

export const CHAPTER_IM_VG1_4_3: TextbookChapter = {
  id: 'im-vg1-4-3',
  courseId: 'im-vg1',
  chapterNumber: '4.3',
  title: 'Typografi og skriftdesign',
  description: 'Forstå typografiske prinsipper, skriftkategorier og hvordan riktig skriftvalg styrker et budskap.',
  estimatedMinutes: 50,
  competenceGoals: [
    'velge og bruke virkemidler, typografi og layout som passer til ulike budskap og reflektere over effekten disse har på budskapet',
  ],
  content: [
    {
      id: 'im-4-3-intro',
      type: 'text',
      content: `## Typografi og skriftdesign

Typografi er kunsten å gjøre tekst visuell. Valg av skrifttype, størrelse, linjeavstand og plassering påvirker både lesbarhet og den følelsesmessige opplevelsen av et budskap. God typografi er ofte usynlig - leseren merker det ikke, men dårlig typografi er umiddelbart forstyrrende.

I dette kapittelet skal du lære:
- Forskjellen mellom serif- og sans-serif-skrifter
- Hvordan typografisk hierarki strukturerer informasjon
- Regler for god lesbarhet på skjerm og papir
- Fontparing og lisensforhold`,
    },
    {
      id: 'im-4-3-def-1',
      type: 'definition',
      title: 'Typografi',
      content: `**Typografi** er kunsten og teknikken med å arrangere skrift for å gjøre tekst lesbar, forståelig og visuelt tiltalende. Det omfatter valg av skrifttype, størrelse, linjeavstand, bokstavmellomrom og plassering.`,
    },
    {
      id: 'im-4-3-text-1',
      type: 'text',
      content: `### Skriftkategorier

**Serif-skrifter** har små streker (seriffer) i endene av bokstavene. De oppfattes som tradisjonelle, pålitelige og lesbare i lengre tekster på papir. Eksempler: Times New Roman, Georgia, Garamond.

**Sans-serif-skrifter** mangler seriffene og har et renere, mer moderne uttrykk. De er populære på skjerm fordi de er lettere å lese i lave oppløsninger. Eksempler: Arial, Helvetica, Open Sans, Roboto.

**Skriptskrifter** imiterer håndskrift og gir et personlig, elegant uttrykk. Brukes til invitasjoner, logoer og dekorative elementer. Bør ikke brukes til brødtekst.

**Display-skrifter** er dekorative skrifter designet for oppmerksomhet. De brukes til overskrifter, logoer og plakater, men er vanskelige å lese i lange tekster.

**Monospace-skrifter** har lik bredde for alle tegn. De brukes primært til kode og teknisk dokumentasjon. Eksempler: Courier New, Fira Code.`,
    },
    {
      id: 'im-4-3-text-2',
      type: 'text',
      content: `### Typografisk hierarki

Typografisk hierarki bruker ulike skriftstørrelser og vekter for å vise hva som er viktigst:

**Overskriftsnivåer:**
- **H1**: Hovedoverskrift - størst, tydeligst, brukes bare én gang per side
- **H2**: Delkapittel-overskrift
- **H3**: Underoverskrift
- **Brødtekst**: Vanlig lesestørrelse, 16-18px på skjerm
- **Bildetekst**: Litt mindre enn brødtekst

**Vektvariasjoner:**
- Regular (400) for brødtekst
- Medium (500) eller Semibold (600) for mellomtitler
- Bold (700) for overskrifter og fremhevinger

### Lesbarhet

**Linjeavstand** (line-height) bør være 1,4-1,6 ganger skriftstørrelsen for god lesbarhet.

**Linjelengde** bør være 50-75 tegn per linje. For lange linjer gjør det vanskelig å finne tilbake til neste linje.

**Bokstavmellomrom** (letter-spacing) kan justeres for overskrifter og versaler, men bør normalt stå på standard for brødtekst.`,
    },
    {
      id: 'im-4-3-text-3',
      type: 'text',
      content: `### Fontparing og lisenser

**Fontparing** handler om å kombinere to eller tre skrifttyper som fungerer godt sammen.

**Grunnregler:**
- Kombiner en serif med en sans-serif for kontrast
- Bruk maks to-tre skrifttyper per prosjekt
- Velg skrifter som har tilsvarende x-høyde
- Sørg for at skriftene er visuelt ulike nok til at forskjellen er tydelig

**Vanlige kombinasjoner:**
- Playfair Display (serif) + Source Sans Pro (sans-serif)
- Merriweather (serif) + Open Sans (sans-serif)
- Montserrat (sans-serif) + Lora (serif)

**Lisenser:**
Skrifttyper har lisenser, akkurat som programvare:
- **Åpne skrifter** (Google Fonts, Font Squirrel): Gratis til alle formål
- **Desktop-lisens**: Tillater bruk i trykte materialer
- **Weblisens**: Tillater bruk på nettsider
- **App-lisens**: Tillater bruk i apper
- Alltid sjekk lisensen før du bruker en skrift kommersielt`,
    },
    {
      id: 'im-4-3-example-1',
      type: 'example',
      title: 'Typografi for en blogg',
      content: `En matblogg velger typografi:

**Overskrift (H1)**: Playfair Display Bold, 36px - en serif-skrift som gir et sofistikert og appetittvekkende uttrykk.

**Underoverskrifter (H2)**: Playfair Display Semibold, 24px - samme skriftfamilie for konsistens.

**Brødtekst**: Source Sans Pro Regular, 18px med linjeavstand 1,6 - en sans-serif som er lett å lese på skjerm.

**Bildetekster**: Source Sans Pro Italic, 14px - kursiv skiller bildetekst fra brødtekst.

**Linjelengde**: Maksbredde på innholdsområdet er 680px, som gir ca. 65 tegn per linje - optimalt for lesbarhet.`,
    },
    {
      id: 'im-4-3-summary',
      type: 'text',
      content: `## Oppsummering

- Typografi handler om valg og bruk av skrifttyper for å formidle et budskap effektivt.
- Skrifttyper deles i serif, sans-serif, monospace og dekorative skrifter.
- Typografisk hierarki bruker størrelse, vekt og farge til å lede leserens blikk.
- Lesbarhet på skjerm krever tilstrekkelig skriftstørrelse, linjeavstand og kontrast.
- Fontparing kombinerer to-tre skrifttyper som utfyller hverandre.
- Skriftlisenser regulerer bruken og må alltid sjekkes før bruk i prosjekter.`,
    },
    {
      id: 'im-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-4-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva kjennetegner en sans-serif-skrift?',
        options: [
          'Den har dekorative streker i endene av bokstavene',
          'Den mangler dekorative streker og har et renere uttrykk',
          'Den imiterer håndskrift',
          'Alle tegn har lik bredde',
        ],
        correctAnswer: 1,
        solution: 'Sans-serif betyr "uten seriffer". Disse skriftene mangler de dekorative strekene i endene av bokstavene og har et rent, moderne uttrykk. De er populære på skjerm.',
      },
    },
    {
      id: 'im-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-4-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva typografisk hierarki er, og hvorfor det er viktig for lesbarhet.',
        solution: 'Typografisk hierarki bruker ulike skriftstørrelser, vekter og stiler for å vise hva som er viktigst i en tekst. Det guider leseren gjennom innholdet ved å gjøre overskrifter mest fremtredende, etterfulgt av underoverskrifter og til slutt brødtekst. Uten hierarki ville all tekst sett lik ut, og leseren ville ikke visst hvor de skulle begynne eller hva som var viktigst.',
      },
    },
    {
      id: 'im-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-4-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er anbefalt linjelengde for god lesbarhet?',
        options: [
          '20-30 tegn per linje',
          '50-75 tegn per linje',
          '100-120 tegn per linje',
          'Linjelengde har ingen betydning',
        ],
        correctAnswer: 1,
        solution: '50-75 tegn per linje er anbefalt for god lesbarhet. For korte linjer gir for mange linjeskift, mens for lange linjer gjør det vanskelig å finne tilbake til starten av neste linje.',
      },
    },
    {
      id: 'im-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-4-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hva fontparing er, og nevn to grunnregler for å velge skrifter som fungerer godt sammen.',
        solution: 'Fontparing er å kombinere to eller tre skrifttyper som utfyller hverandre i et design. Grunnregler: 1) Kombiner kontrasterende kategorier, for eksempel en serif med en sans-serif, for å skape visuell variasjon. 2) Begrens antallet skrifttyper til maks to-tre per prosjekt for å bevare et ryddig og konsistent uttrykk.',
      },
    },
    {
      id: 'im-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-4-3-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvilken skriftkategori er best egnet for kode og teknisk dokumentasjon?',
        options: [
          'Serif',
          'Sans-serif',
          'Monospace',
          'Script',
        ],
        correctAnswer: 2,
        solution: 'Monospace-skrifter har lik bredde for alle tegn, noe som gjør kode lettere å lese og justere. Eksempler er Courier New og Fira Code.',
      },
    },
    {
      id: 'im-4-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-4-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'Du skal velge typografi for en skoleoppgave. Beskriv valg av skrifttype for overskrift og brødtekst, skriftstørrelser, linjeavstand og linjelengde. Begrunn valgene dine.',
        solution: 'Eksempel: Overskrift: Montserrat Bold, 28px - sans-serif som er tydelig og moderne. Brødtekst: Lora Regular, 16px - serif-skrift som er behagelig å lese i lange tekster. Linjeavstand: 1,5 (24px) for god lesbarhet. Linjelengde: Maks 70 tegn per linje. Begrunnelse: Kontrasten mellom sans-serif overskrift og serif brødtekst skaper tydelig hierarki. Linjeavstand og linjelengde følger anbefalinger for optimal lesbarhet.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Serif', definition: 'Skriftkategori med dekorative streker i endene av bokstavene.' },
    { term: 'Sans-serif', definition: 'Skriftkategori uten dekorative streker, med et rent uttrykk.' },
    { term: 'Typografisk hierarki', definition: 'Bruk av ulike skriftstørrelser og vekter for å vise informasjonens viktighet.' },
    { term: 'Linjeavstand', definition: 'Avstanden mellom tekstlinjer, anbefalt 1,4-1,6 ganger skriftstørrelsen.' },
    { term: 'Fontparing', definition: 'Å kombinere skrifttyper som fungerer godt sammen i et design.' },
    { term: 'Monospace', definition: 'Skriftkategori der alle tegn har lik bredde, brukt til kode.' },
  ],
};

// ============================================================================
// Kapittel 4.4: Fotografering og bildkomposisjon
// ============================================================================

export const CHAPTER_IM_VG1_4_4: TextbookChapter = {
  id: 'im-vg1-4-4',
  courseId: 'im-vg1',
  chapterNumber: '4.4',
  title: 'Fotografering og bildkomposisjon',
  description: 'Lær fotografiske grunnprinsipper som tredjedelsregelen, lyssetting, perspektiv og komposisjon for digitale medier.',
  estimatedMinutes: 60,
  competenceGoals: [
    'kjenne til og anvende bransjefaglige metoder og relevant utstyr i produksjon',
    'produsere og kommunisere innhold innenfor ulike sjangre tilpasset visuelle og auditive medier',
  ],
  content: [
    {
      id: 'im-4-4-intro',
      type: 'text',
      content: `## Fotografering og bildkomposisjon

Et godt fotografi handler ikke bare om å ha et dyrt kamera - det handler om å se. Komposisjon, lys og perspektiv er verktøy som gjør forskjellen mellom et tilfeldig knips og et bilde som forteller en historie. I dag tar de fleste bilder med mobiltelefonen, og de samme prinsippene gjelder uansett utstyr.

I dette kapittelet skal du lære:
- Tredjedelsregelen og andre komposisjonsregler
- Hvordan lys påvirker stemningen i et bilde
- Ulike perspektiver og vinkler
- Tekniske grunnbegreper som eksponering og dybdeskarphet`,
    },
    {
      id: 'im-4-4-def-1',
      type: 'definition',
      title: 'Komposisjon',
      content: `**Komposisjon** i fotografering handler om hvordan elementer er plassert og arrangert i bildet. God komposisjon styrer betrakterens blikk til det viktigste i bildet og skaper en visuell helhet.`,
    },
    {
      id: 'im-4-4-text-1',
      type: 'text',
      content: `### Tredjedelsregelen

Tredjedelsregelen er den mest kjente komposisjonsregelen. Del bildet med to horisontale og to vertikale linjer, slik at du får et rutenett med ni felter. Plasser motivet langs linjene eller i skjæringspunktene for et mer dynamisk bilde.

**Hvorfor fungerer det?**
Et motiv plassert i sentrum kan virke statisk og kjedelig. Ved å plassere det langs en tredjedel, skapes bevegelse og spenning i bildet.

**Praktiske tips:**
- Plasser horisonten langs den øvre eller nedre tredjedelen, ikke i midten
- La et portrettmotiv se inn i bildet, ikke ut av det
- Bruk gridoverlegget på kameraet eller mobiltelefonen

### Andre komposisjonsregler

**Ledende linjer**: Veier, gjerder, elver eller bygninger som leder blikket inn i bildet og mot motivet.

**Ramme i ramme**: Bruk naturlige rammer som dører, vinduer eller grener for å ramme inn motivet og skape dybde.

**Symmetri**: Bryt gjerne tredjedelsregelen med perfekt symmetri når motivet inviterer til det, som speilbilder i vann.

**Negativt rom**: Gi motivet plass ved å la store deler av bildet være tomt. Det fremhever motivet og gir en følelse av frihet eller ensomhet.`,
    },
    {
      id: 'im-4-4-text-2',
      type: 'text',
      content: `### Lys og eksponering

Lys er fotografiets viktigste element. Ordet fotografi betyr bokstavelig "å skrive med lys".

**Typer lys:**
- **Naturlig lys**: Sol, skyer og dagslys. Gyllen time (rett etter soloppgang og før solnedgang) gir varmt, mykt lys som er ideelt for fotografering.
- **Hardt lys**: Direkte sollys midt på dagen skaper sterke skygger og høy kontrast.
- **Mykt lys**: Overskyet vær eller lys i skyggen gir jevn belysning uten harde skygger.
- **Kunstig lys**: Lamper, blitz og studioutstyr der du kontrollerer lyset selv.

**Eksponering** er mengden lys som treffer kamerasensoren. Den styres av tre faktorer:
- **Blenderåpning** (f-tall): Hvor stor åpningen i objektivet er. Lav f-verdi = mye lys, liten dybdeskarphet.
- **Lukkertid**: Hvor lenge sensoren eksponeres. Lang lukkertid gir bevegelsesuskarphet.
- **ISO**: Sensorens lysfølsomhet. Høy ISO gir mer lys, men også mer støy (korn) i bildet.`,
    },
    {
      id: 'im-4-4-text-3',
      type: 'text',
      content: `### Perspektiv og vinkel

Kameravinkelen påvirker hvordan betrakteren oppfatter motivet:

**Øyehøyde**: Nøytralt perspektiv, slik vi vanligvis ser verden.
**Fugleperspektiv**: Fotografert ovenfra. Gjør motivet lite og sårbart.
**Froskeperspektiv**: Fotografert nedenfra. Gjør motivet stort og mektig.
**Skrått perspektiv** (Dutch angle): Kameraet vippes til siden for å skape uro eller dynamikk.

### Bildeutsnitt

**Totalbilde**: Viser hele scenen med omgivelser. Gir kontekst og oversikt.
**Halvtotalt**: Viser en person fra knærne og opp. Balanse mellom person og omgivelser.
**Halvnært**: Viser en person fra midjen og opp. Vanlig i nyheter og intervjuer.
**Nært**: Viser ansiktet. Fokus på følelser og uttrykk.
**Ultrannært**: Viser en detalj, som øyne eller hender. Intens og intim.`,
    },
    {
      id: 'im-4-4-example-1',
      type: 'example',
      title: 'Fotografere et portrett med mobiltelefon',
      content: `Slik tar du et godt portrett med mobilen:

1. **Lys**: Plasser personen nær et vindu med mykt, naturlig lys fra siden. Unngå direkte sollys og blits.
2. **Komposisjon**: Bruk tredjedelsregelen - plasser øynene langs den øvre tredjedelen.
3. **Bakgrunn**: Velg en rolig bakgrunn uten forstyrrende elementer. En uskarp bakgrunn (portrettmodus) fremhever personen.
4. **Vinkel**: Fotografer i øyehøyde eller litt ovenfra for et flatterende resultat.
5. **Utsnitt**: Halvnært bilde (fra brystet og opp) er en klassisk portrettramme.
6. **Tips**: La personen se litt til siden av kameraet for et naturlig uttrykk.`,
    },
    {
      id: 'im-4-4-summary',
      type: 'text',
      content: `## Oppsummering

- Tredjedelsregelen deler bildet i ni deler og plasserer motivet langs linjene eller i krysningspunktene.
- Lys og eksponering er avgjørende for stemning og kvalitet i et fotografi.
- Dybdeskarphet bestemmer hvor mye av bildet som er i fokus.
- Perspektiv og vinkler påvirker hvordan motivet oppfattes av betrakteren.
- Bildeutsnitt og beskjæring kan forbedre komposisjonen i etterkant.
- God bildkomposisjon er et viktig verktøy i medieproduksjon og digital kommunikasjon.`,
    },
    {
      id: 'im-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-4-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva innebærer tredjedelsregelen?',
        options: [
          'Bildet deles i tre like store horisontale striper',
          'Motivet plasseres langs linjer eller i skjæringspunkter i et 3x3-rutenett',
          'Man bruker tre ulike lyskilder',
          'Man tar tre bilder fra ulike vinkler',
        ],
        correctAnswer: 1,
        solution: 'Tredjedelsregelen innebærer å dele bildet med to horisontale og to vertikale linjer i et 3x3-rutenett, og plassere viktige elementer langs linjene eller i skjæringspunktene.',
      },
    },
    {
      id: 'im-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-4-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom hardt og mykt lys, og gi et eksempel på når hvert er passende å bruke.',
        solution: 'Hardt lys er direkte, retningsbestemt lys (som sol midt på dagen) som skaper sterke skygger og høy kontrast. Det passer til dramatiske bilder og motiver med mye tekstur. Mykt lys er diffust, spredt lys (som overskyet himmel) som gir jevn belysning uten harde skygger. Det passer til portretter og produktfotografering der du ønsker en jevn, flatterende belysning.',
      },
    },
    {
      id: 'im-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-4-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva kalles perspektivet der kameraet er plassert under motivet og peker oppover?',
        options: [
          'Fugleperspektiv',
          'Froskeperspektiv',
          'Dutch angle',
          'Øyehøyde',
        ],
        correctAnswer: 1,
        solution: 'Froskeperspektiv innebærer at kameraet er plassert lavt og peker oppover mot motivet. Dette gjør motivet stort og mektig.',
      },
    },
    {
      id: 'im-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-4-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Forklar hva eksponering er, og beskriv de tre faktorene som styrer den.',
        solution: 'Eksponering er mengden lys som treffer kamerasensoren. Den styres av: 1) Blenderåpning (f-tall) - størrelsen på åpningen i objektivet, der lavt f-tall gir mye lys og liten dybdeskarphet. 2) Lukkertid - hvor lenge sensoren eksponeres for lys, der lang tid gir mer lys men risiko for bevegelsesuskarphet. 3) ISO - sensorens lysfølsomhet, der høy ISO gir mer lys men også mer støy i bildet.',
      },
    },
    {
      id: 'im-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-4-4-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er "gyllen time" i fotografering?',
        options: [
          'Den timen kameraet er på tilbud',
          'Perioden rett etter soloppgang og rett før solnedgang',
          'Perioden midt på dagen med sterkest sollys',
          'Den første timen med kunstig belysning',
        ],
        correctAnswer: 1,
        solution: 'Gyllen time er perioden rett etter soloppgang og rett før solnedgang, da sollyset er varmt, mykt og gir en gyllen tone som er ideell for fotografering.',
      },
    },
    {
      id: 'im-4-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-4-4-ex-6',
        number: '6',
        type: 'classic',
        task: 'Ta et bilde med mobiltelefonen der du bevisst bruker to komposisjonsteknikker. Beskriv hvilke teknikker du brukte, og hvorfor du valgte dem.',
        solution: 'Eksempel: Jeg brukte tredjedelsregelen ved å plassere et tre langs den venstre tredjedelen. I tillegg brukte jeg ledende linjer - en sti som leder blikket fra forgrunnen inn mot treet. Jeg valgte disse teknikkene fordi tredjedelsregelen skaper dynamikk, og de ledende linjene guider blikket til hovedmotivet og skaper dybde i bildet.',
        allowsUpload: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Tredjedelsregelen', definition: 'Komposisjonsregel der motivet plasseres langs et 3x3-rutenett.' },
    { term: 'Eksponering', definition: 'Mengden lys som treffer kamerasensoren, styrt av blender, lukkertid og ISO.' },
    { term: 'Blenderåpning', definition: 'Størrelsen på åpningen i objektivet, angitt med f-tall.' },
    { term: 'Dybdeskarphet', definition: 'Området i bildet som er skarpt, fra nært til fjernt.' },
    { term: 'Gyllen time', definition: 'Perioden rett etter soloppgang og før solnedgang med varmt, mykt lys.' },
    { term: 'Ledende linjer', definition: 'Linjer i bildet som guider betrakterens blikk mot motivet.' },
  ],
};

// ============================================================================
// Kapittel 4.5: Bildebehandling og redigering
// ============================================================================

export const CHAPTER_IM_VG1_4_5: TextbookChapter = {
  id: 'im-vg1-4-5',
  courseId: 'im-vg1',
  chapterNumber: '4.5',
  title: 'Bildebehandling og redigering',
  description: 'Bruk verktøy for bildebehandling til å justere, retusjere og manipulere bilder for profesjonell bruk i ulike medier.',
  estimatedMinutes: 65,
  competenceGoals: [
    'kjenne til og anvende bransjefaglige metoder og relevant utstyr i produksjon',
    'produsere og kommunisere innhold innenfor ulike sjangre tilpasset visuelle og auditive medier',
  ],
  content: [
    {
      id: 'im-4-5-intro',
      type: 'text',
      content: `## Bildebehandling og redigering

Nesten alle bilder som brukes profesjonelt, har vært gjennom en form for redigering. Fra enkel lyskorrigering til avansert retusjering og fotomanipulasjon - bildebehandling er en sentral ferdighet i medieproduksjon. I dette kapittelet lærer du å bruke bildebehandlingsverktøy for å forbedre og tilpasse bilder til ulike formål.

I dette kapittelet skal du lære:
- Grunnleggende bildebehandlingsteknikker
- Lag og masker for ikke-destruktiv redigering
- Fargekorrigering og nivåjustering
- Filformater og bildestørrelser for ulike bruksområder`,
    },
    {
      id: 'im-4-5-def-1',
      type: 'definition',
      title: 'Ikke-destruktiv redigering',
      content: `**Ikke-destruktiv redigering** er en arbeidsmetode der du gjør endringer uten å ødelegge originalbildet. Ved å bruke lag, masker og justeringslag kan du alltid gå tilbake og endre eller fjerne redigeringene.`,
    },
    {
      id: 'im-4-5-text-1',
      type: 'text',
      content: `### Grunnleggende bildebehandling

**Beskjæring** (cropping) fjerner uønskede deler av bildet og forbedrer komposisjonen. Du kan beskjære for å:
- Fjerne forstyrrende elementer langs kanten
- Tilpasse bildet til bestemte proporsjoner (16:9, 4:3, 1:1)
- Forbedre komposisjonen etter tredjedelsregelen

**Rotasjon og utretting** korrigerer skjeve horisonter og vinklede motiver.

**Nivåjustering** (levels) lar deg kontrollere lyse og mørke toner. Histogrammet viser fordelingen av toner fra svart (venstre) til hvitt (høyre). Ved å justere svartpunktet, hvitpunktet og mellomtonene kan du dramatisk forbedre et bilde.

**Kurver** (curves) gir mer presis kontroll over toner enn nivåer. S-kurven er en klassisk justering som øker kontrasten ved å gjøre mørke toner mørkere og lyse toner lysere.`,
    },
    {
      id: 'im-4-5-text-2',
      type: 'text',
      content: `### Lag og masker

**Lag** (layers) er kjernen i profesjonell bildebehandling. Tenk på lag som gjennomsiktige ark stablet oppå hverandre. Hvert lag kan inneholde forskjellige elementer og redigeres uavhengig.

**Lagtyper:**
- **Bildelag**: Inneholder piksler (bildedata)
- **Justeringslag**: Påvirker lagene under uten å endre pikslene
- **Tekstlag**: Inneholder redigerbar tekst
- **Formlag**: Inneholder vektorformer

**Lagmasker** lar deg skjule eller vise deler av et lag. Hvit viser, svart skjuler, og gråtoner gir delvis synlighet. Masker er reversible - du kan alltid male hvitt for å vise igjen.

**Blandingsmodus** (blending modes) bestemmer hvordan et lag blandes med lagene under:
- **Normal**: Standard modus
- **Multiply**: Gjør bildet mørkere
- **Screen**: Gjør bildet lysere
- **Overlay**: Øker kontrasten`,
    },
    {
      id: 'im-4-5-text-3',
      type: 'text',
      content: `### Retusjering og fjerning

**Klonestempel** kopierer piksler fra ett område til et annet. Brukes til å fjerne uønskede objekter ved å male over dem med omgivende tekstur.

**Reparasjonsbørste** analyserer området rundt og fyller inn smartere enn klonestempelet. Ideell for å fjerne flekker og små forstyrrende elementer.

**Innholdsbevart fyll** (content-aware fill) analyserer omgivelsene og fyller automatisk med passende innhold. Effektivt for å fjerne større objekter.

### Filformater og bildestørrelse

**JPEG**: Komprimert format med tap. Liten filstørrelse, men hvert nytt lagring reduserer kvaliteten. Best for fotografier til nett.

**PNG**: Støtter gjennomsiktighet og tapsfri komprimering. Større filer enn JPEG. Best for grafikk, logoer og bilder med tekst.

**WebP**: Moderne format som gir bedre komprimering enn JPEG og PNG. Støttes av alle moderne nettlesere.

**RAW**: Ukomprimert sensordata fra kameraet. Størst fleksibilitet for redigering, men krever konvertering.

**Oppløsning**: Skjerm bruker 72-96 PPI (piksler per tomme), trykk krever 300 DPI (dots per inch).`,
    },
    {
      id: 'im-4-5-example-1',
      type: 'example',
      title: 'Forbedre et undereksponert bilde',
      content: `Et fotografi tatt innendørs ble for mørkt. Slik forbedrer du det:

1. **Åpne i bildebehandlingsprogram** (f.eks. Photopea, GIMP eller Photoshop).
2. **Opprett justeringslag for nivåer**: Dra hvitpunktet til venstre for å lyse opp. Dra mellomtone-markøren til venstre for å løfte midttonene.
3. **Opprett justeringslag for kurver**: Lag en mild S-kurve for å øke kontrasten etter oppjusteringen.
4. **Sjekk farger**: Legg til et justeringslag for fargebalanse hvis oppjusteringen ga en fargestikk.
5. **Beskjær**: Forbedre komposisjonen ved å fjerne mørke kanter.
6. **Eksporter**: Lagre som JPEG med 80% kvalitet for nettbruk, eller PNG hvis bildet inneholder tekst.

Ved å bruke justeringslag kan du justere alle endringene etterpå uten å starte på nytt.`,
    },
    {
      id: 'im-4-5-summary',
      type: 'text',
      content: `## Oppsummering

- Bildebehandling bruker lag og masker for å redigere bilder ikke-destruktivt.
- Fargekorrigering og nivåjustering forbedrer eksponering, kontrast og fargebalanse.
- Retusjering fjerner uønskede elementer og forbedrer detaljer i bildet.
- Filformater har ulike egenskaper: JPEG for foto, PNG for gjennomsiktighet, WebP for web, RAW for maksimal kvalitet.
- Oppløsning og bildestørrelse må tilpasses bruksområdet (web vs. trykk).
- Profesjonell bildebehandling krever forståelse av både teknikk og estetikk.`,
    },
    {
      id: 'im-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-4-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er fordelen med å bruke lag og masker i bildebehandling?',
        options: [
          'Det gjør bildet skarpere',
          'Det muliggjør ikke-destruktiv redigering der du kan gå tilbake og endre',
          'Det komprimerer bildet til mindre filstørrelse',
          'Det legger automatisk til filtre',
        ],
        correctAnswer: 1,
        solution: 'Lag og masker muliggjør ikke-destruktiv redigering. Du kan gjøre endringer uten å ødelegge originalbildet, og alltid gå tilbake og justere eller fjerne redigeringene.',
      },
    },
    {
      id: 'im-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-4-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom JPEG, PNG og WebP, og beskriv når hvert format er best å bruke.',
        solution: 'JPEG: Komprimert med tap, liten filstørrelse, best for fotografier til nett der litt kvalitetstap er akseptabelt. PNG: Tapsfri komprimering, støtter gjennomsiktighet, best for grafikk, logoer og bilder med tekst. WebP: Moderne format med bedre komprimering enn både JPEG og PNG, støtter gjennomsiktighet, best for nettsider der filstørrelse er viktig.',
      },
    },
    {
      id: 'im-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-4-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva gjør en lagmaske i bildebehandling?',
        options: [
          'Den sletter piksler permanent',
          'Den lar deg skjule eller vise deler av et lag uten å slette piksler',
          'Den legger til farge på bildet',
          'Den endrer filformatet',
        ],
        correctAnswer: 1,
        solution: 'En lagmaske lar deg skjule (svart) eller vise (hvitt) deler av et lag uten å slette piksler. Det er reversibelt, noe som gjør det til et viktig verktøy for ikke-destruktiv redigering.',
      },
    },
    {
      id: 'im-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-4-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Et bilde skal brukes på en nettside med rask lastetid. Beskriv hvilke tiltak du gjør for å optimalisere bildestørrelsen uten å miste for mye kvalitet.',
        solution: 'Tiltak: 1) Beskjær bildet til nødvendig størrelse - ikke bruk et 4000px bilde når 800px er nok. 2) Velg riktig format - WebP gir best komprimering for nett, alternativt JPEG for foto. 3) Komprimer bildet - JPEG med 70-80% kvalitet er ofte tilstrekkelig for nett. 4) Bruk riktig oppløsning - 72 PPI er nok for skjermvisning. 5) Vurder responsive bilder med ulike størrelser for mobil og desktop.',
      },
    },
    {
      id: 'im-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-4-5-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom 72 PPI og 300 DPI?',
        options: [
          '72 PPI er for trykk, 300 DPI er for skjerm',
          '72 PPI er standard for skjermvisning, 300 DPI er standard for trykk',
          'De er det samme bare med forskjellige navn',
          '300 DPI gir alltid best kvalitet uansett bruk',
        ],
        correctAnswer: 1,
        solution: '72 PPI (piksler per tomme) er standard oppløsning for skjermvisning. 300 DPI (dots per inch) er standard for trykk og gir skarpere resultat på papir. For nettbruk er 72 PPI tilstrekkelig, mens trykt materiale krever høyere oppløsning.',
      },
    },
    {
      id: 'im-4-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-4-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Beskriv tre etiske problemstillinger knyttet til bildebehandling og fotomanipulasjon. Når er det greit å redigere bilder, og når kan det bli problematisk?',
        solution: '1) Journalistisk manipulasjon: Å endre innholdet i nyhetsbilder er uetisk fordi det villeder publikum. Lys- og kontrastjustering for lesbarhet er akseptabelt. 2) Urealistiske skjønnhetsidealer: Omfattende retusjering av kropp og ansikt i reklame kan skape usunne forventninger, spesielt hos unge. 3) Opphavsrett: Å bruke andres bilder uten tillatelse eller kreditering er etisk og juridisk problematisk. Greit å redigere: Teknisk forbedring, kreativ kunst, personlige bilder. Problematisk: Villeding, urealistiske standarder, misbruk av andres arbeid.',
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Lag', definition: 'Gjennomsiktige ark stablet oppå hverandre i bildebehandling.' },
    { term: 'Lagmaske', definition: 'Verktøy som skjuler eller viser deler av et lag uten å slette piksler.' },
    { term: 'Justeringslag', definition: 'Lag som påvirker lagene under uten å endre de opprinnelige pikslene.' },
    { term: 'PPI', definition: 'Piksler per tomme - mål på oppløsning for skjermvisning.' },
    { term: 'DPI', definition: 'Dots per inch - mål på oppløsning for trykk.' },
    { term: 'RAW', definition: 'Ukomprimert sensordata fra kameraet med størst redigeringsfleksibilitet.' },
  ],
};

// ============================================================================
// Kapittel 4.6: Vektorgrafikk og illustrasjon
// ============================================================================

export const CHAPTER_IM_VG1_4_6: TextbookChapter = {
  id: 'im-vg1-4-6',
  courseId: 'im-vg1',
  chapterNumber: '4.6',
  title: 'Vektorgrafikk og illustrasjon',
  description: 'Lær forskjellen mellom raster- og vektorgrafikk, og bruk vektorverktøy til å lage logoer, ikoner og illustrasjoner.',
  estimatedMinutes: 55,
  competenceGoals: [
    'kjenne til og anvende bransjefaglige metoder og relevant utstyr i produksjon',
    'visualisere og utvikle konsepter og ideer tilpasset ulike plattformer',
  ],
  content: [
    {
      id: 'im-4-6-intro',
      type: 'text',
      content: `## Vektorgrafikk og illustrasjon

Mens fotografier er piksler, er vektorgrafikk matematikk. En vektor defineres av punkter, linjer og kurver som kan skaleres uendelig uten kvalitetstap. Logoer, ikoner og illustrasjoner lages ofte som vektorgrafikk fordi de må fungere i alt fra et lite ikon på en mobilskjerm til en stor plakat på en bygning.

I dette kapittelet skal du lære:
- Forskjellen mellom raster- og vektorgrafikk
- Grunnleggende vektorverktøy som Bezier-kurver og stier
- Prinsipper for logodesign og ikondesign
- SVG-formatet for nett`,
    },
    {
      id: 'im-4-6-def-1',
      type: 'definition',
      title: 'Vektorgrafikk',
      content: `**Vektorgrafikk** er bilder definert av matematiske formler som beskriver punkter, linjer og kurver. I motsetning til rastergrafikk (piksler) kan vektorgrafikk skaleres til enhver størrelse uten tap av kvalitet.`,
    },
    {
      id: 'im-4-6-text-1',
      type: 'text',
      content: `### Raster vs. vektor

**Rastergrafikk (bitmap):**
- Består av et rutenett av piksler
- Hvert piksel har en definert farge
- Blir uskarpt ved oppskalering
- Filformater: JPEG, PNG, GIF, WebP
- Best for: Fotografier og komplekse bilder med mange fargenyanser

**Vektorgrafikk:**
- Består av matematiske formler
- Defineres av ankerpunkter, linjer og kurver
- Kan skaleres uendelig uten kvalitetstap
- Filformater: SVG, AI, EPS, PDF
- Best for: Logoer, ikoner, illustrasjoner, typografi

**Når velge hva?**
Tommelregel: Hvis bildet ble tatt med et kamera, er det raster. Hvis det ble tegnet eller designet, bør det ofte være vektor.`,
    },
    {
      id: 'im-4-6-text-2',
      type: 'text',
      content: `### Bezier-kurver og stier

Grunnlaget for vektorgrafikk er **Bezier-kurver**, oppkalt etter den franske ingeniøren Pierre Bezier.

**Ankerpunkter**: Punkter som definerer formen. Du kan ha hjørnepunkter (skarpe hjørner) eller kurvepunkter (myke kurver).

**Kontrollhåndtak**: Usynlige linjer som strekker seg ut fra ankerpunktene og bestemmer kurvens retning og styrke.

**Stier** er sekvenser av ankerpunkter forbundet med linjer eller kurver:
- **Åpen sti**: Start- og sluttpunkt er ikke forbundet (en linje)
- **Lukket sti**: Start- og sluttpunkt møtes (en form som kan fylles med farge)

**Tips for å jobbe med Bezier-kurver:**
- Bruk så få ankerpunkter som mulig for rene kurver
- Plasser ankerpunkter der kurven endrer retning
- Hold kontrollhåndtakene parallelle for jevne kurver
- Øv mye - Bezier-kurver krever praksis`,
    },
    {
      id: 'im-4-6-text-3',
      type: 'text',
      content: `### Logodesign

En god logo er enkel, gjenkjennelig og fungerer i alle størrelser.

**Prinsipper for logodesign:**
- **Enkelhet**: De mest kjente logoene er enkle (Apple, Nike, IKEA)
- **Skalerbarhet**: Må fungere fra favicon (16px) til storformat
- **Tidløshet**: Unngå trender som gjør logoen utdatert
- **Allsidighet**: Må fungere i farger, svart-hvitt, på mørk og lys bakgrunn
- **Relevans**: Bør kommunisere virksomhetens verdier

### Ikondesign

Ikoner er små, forenklede symboler som kommuniserer en handling eller et konsept.

**Prinsipper:**
- Bruk et konsistent grid (f.eks. 24x24 piksler)
- Hold linjene jevne og optisk justerte
- Test i faktisk bruksstørrelse (ofte 16-32px)
- Sørg for at ikonet er forståelig uten tekst

### SVG-formatet

SVG (Scalable Vector Graphics) er standardformatet for vektorgrafikk på nett.
- **XML-basert**: Kan redigeres med kode
- **Skalerbart**: Skarpt i alle størrelser
- **Liten filstørrelse** for enkel grafikk
- **Interaktivt**: Kan animeres med CSS og JavaScript
- **Tilgjengelig**: Kan inneholde tekst som skjermlesere kan lese`,
    },
    {
      id: 'im-4-6-example-1',
      type: 'example',
      title: 'Lage et enkelt ikon',
      content: `La oss tenke gjennom prosessen for å lage et e-postikon:

1. **Grid**: Start med et 24x24 pikslers rutenett.
2. **Grunnform**: Tegn et rektangel som representerer konvolutten.
3. **Detaljer**: Legg til to diagonale linjer fra øvre hjørner som møtes i midten for å skape "klaffen".
4. **Stiltilpasning**: Velg linjestørrelse (vanligvis 2px) og avrundede eller skarpe hjørner for å matche designsystemet.
5. **Testing**: Sjekk at ikonet er gjenkjennelig i 16px størrelse.
6. **Eksport**: Lagre som SVG for nettbruk.

Det ferdige ikonet bruker bare et rektangel og to linjer - enkelhet er nøkkelen.`,
    },
    {
      id: 'im-4-6-summary',
      type: 'text',
      content: `## Oppsummering

- Rastergrafikk (piksler) egner seg for fotografier, vektorgrafikk (matematiske formler) for logoer og ikoner.
- Vektorfiler kan skaleres uendelig uten kvalitetstap.
- Bezier-kurver og stier er grunnlaget for vektortegning.
- Logodesign krever enkelhet, gjenkjennelighet og funksjon i alle størrelser.
- SVG-formatet brukes for vektorgrafikk på nettsider og kan styles med CSS.
- Illustrator, Inkscape og Figma er vanlige verktøy for vektorarbeid.`,
    },
    {
      id: 'im-4-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'im-4-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hovedforskjellen mellom raster- og vektorgrafikk?',
        options: [
          'Rastergrafikk har bedre farger enn vektorgrafikk',
          'Vektorgrafikk kan skaleres uendelig uten kvalitetstap, rastergrafikk ikke',
          'Rastergrafikk brukes bare på nett, vektorgrafikk bare for trykk',
          'Det er ingen vesentlig forskjell',
        ],
        correctAnswer: 1,
        solution: 'Vektorgrafikk er basert på matematiske formler og kan skaleres til enhver størrelse uten kvalitetstap. Rastergrafikk (piksler) blir uskarp ved oppskalering fordi pikslene forstørres.',
      },
    },
    {
      id: 'im-4-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'im-4-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva Bezier-kurver er, og hvorfor de er viktige i vektorgrafikk.',
        solution: 'Bezier-kurver er matematisk definerte kurver som styres av ankerpunkter og kontrollhåndtak. Ankerpunktene definerer hvor kurven går gjennom, og kontrollhåndtakene bestemmer kurvens form og retning. De er viktige fordi de er grunnlaget for all vektorgrafikk - logoer, skrifttyper, ikoner og illustrasjoner er alle bygd opp av Bezier-kurver.',
      },
    },
    {
      id: 'im-4-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'im-4-6-ex-3',
        number: '3',
        type: 'multiple-choice',
        task: 'Hva er SVG?',
        options: [
          'Et rasterbildeformat som JPEG',
          'Et XML-basert vektorformat for nett som kan skaleres uten kvalitetstap',
          'Et lydformat for streaming',
          'Et programmeringsspråk for 3D-grafikk',
        ],
        correctAnswer: 1,
        solution: 'SVG (Scalable Vector Graphics) er et XML-basert vektorformat som er standard for vektorgrafikk på nett. Det kan skaleres uten kvalitetstap, redigeres med kode, og animeres med CSS/JavaScript.',
      },
    },
    {
      id: 'im-4-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'im-4-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn minst fire prinsipper for god logodesign, og forklar hvorfor hvert prinsipp er viktig.',
        solution: '1) Enkelhet - gjør logoen lett å gjenkjenne og huske, fungerer i små størrelser. 2) Skalerbarhet - logoen må se bra ut fra et lite favicon til en stor plakat, derfor brukes vektorgrafikk. 3) Tidløshet - unngå moter og trender som gjør logoen utdatert etter kort tid. 4) Allsidighet - logoen må fungere i farger, svart-hvitt, på mørk og lys bakgrunn, på ulike materialer. 5) Relevans - logoen bør kommunisere virksomhetens verdier og bransje.',
      },
    },
    {
      id: 'im-4-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'im-4-6-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvilke typer bilder egner seg best som vektorgrafikk?',
        options: [
          'Landskapsfotografier',
          'Portretter',
          'Logoer, ikoner og illustrasjoner',
          'Bilder fra mobilkamera',
        ],
        correctAnswer: 2,
        solution: 'Logoer, ikoner og illustrasjoner egner seg best som vektorgrafikk fordi de er enkle former som må skaleres til ulike størrelser. Fotografier er for komplekse for vektor og lagres som raster.',
      },
    },
    {
      id: 'im-4-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'im-4-6-ex-6',
        number: '6',
        type: 'classic',
        task: 'Skisser en enkel logo for en fiktiv bedrift. Beskriv designvalgene dine med referanse til prinsippene for logodesign og bruk av vektorgrafikk.',
        solution: 'Eksempel: Logo for "Grønn Vekst" (en hageprodusent). Designvalg: Et stilisert blad kombinert med bokstaven G, laget med enkle Bezier-kurver. Enkelhet: Kun to elementer (blad og bokstav). Skalerbarhet: Vektorformat sørger for at den fungerer i alle størrelser. Farge: Grønn for natur, med en mørkere variant for kontrast. Allsidighet: Fungerer også i svart-hvitt. Relevans: Bladet kommuniserer natur og hage.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Vektorgrafikk', definition: 'Bilder definert av matematiske formler som kan skaleres uten kvalitetstap.' },
    { term: 'Rastergrafikk', definition: 'Bilder bestående av piksler i et rutenett.' },
    { term: 'Bezier-kurve', definition: 'Matematisk definert kurve styrt av ankerpunkter og kontrollhåndtak.' },
    { term: 'SVG', definition: 'Scalable Vector Graphics - XML-basert vektorformat for nett.' },
    { term: 'Ankerpunkt', definition: 'Punkt som definerer formen til en vektorsti.' },
    { term: 'Sti', definition: 'Sekvens av ankerpunkter forbundet med linjer eller kurver.' },
  ],
};

// ============================================================================
// Eksport av del 4 kapitler
// ============================================================================

export const IM_VG1_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_IM_VG1_4_1,
  CHAPTER_IM_VG1_4_2,
  CHAPTER_IM_VG1_4_3,
  CHAPTER_IM_VG1_4_4,
  CHAPTER_IM_VG1_4_5,
  CHAPTER_IM_VG1_4_6,
];
