/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Teknologi og forskningslære 1 VG2
 *
 * Seksjon 4: Elektronikk og kretser (Kapittel 4.1–4.8)
 * Denne filen inneholder kapittel 4.1–4.8.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 4.1: Grunnleggende elektrisitet
// ============================================================================

export const CHAPTER_TOF_1_4_1: TextbookChapter = {
  id: 'tof-1-4-1',
  courseId: 'tof-1',
  chapterNumber: '4.1',
  title: 'Grunnleggende elektrisitet',
  description: 'Spenning, strøm, motstand og elektrisk ladning.',
  estimatedMinutes: 30,
  competenceGoals: ['forklare grunnleggende elektriske størrelser'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-4-1-intro',
      type: 'text',
      content: `## Grunnleggende elektrisitet

Elektrisitet er grunnlaget for all moderne teknologi. Fra mobiltelefonen i lomma di til industrielle roboter – alt er avhengig av elektrisk energi og elektroniske kretser. For å forstå hvordan elektronikk fungerer, må vi først forstå de grunnleggende elektriske størrelsene: **ladning**, **strøm**, **spenning** og **motstand**.

I dette kapittelet skal du lære hva disse størrelsene betyr fysisk, hvordan de henger sammen, og hvordan vi måler dem. Denne kunnskapen danner grunnlaget for resten av seksjonen om elektronikk og kretser.`,
    },

    // --- TEORI: Elektrisk ladning ---
    {
      id: 'tof1-4-1-def-ladning',
      type: 'definition',
      title: 'Elektrisk ladning',
      content: `**Elektrisk ladning** er en grunnleggende fysisk egenskap ved materie. Ladning finnes i to typer: **positiv** og **negativ**.

- **Protoner** har positiv ladning: $+e$
- **Elektroner** har negativ ladning: $-e$
- **Nøytroner** har ingen ladning

Elementærladningen er $e = 1{,}6 \\cdot 10^{-19}$ C (coulomb).

**Ladningsbevaring:** Ladning kan verken skapes eller ødelegges – den totale ladningen i et lukket system er konstant.

**Like ladninger frastøter hverandre**, mens **ulike ladninger tiltrekker hverandre**.`,
    },
    {
      id: 'tof1-4-1-text-ladning',
      type: 'text',
      content: `### Hva er en coulomb?

Enheten for ladning er **coulomb** (C), oppkalt etter den franske fysikeren Charles-Augustin de Coulomb. Én coulomb er en svært stor mengde ladning – den tilsvarer ladningen til omtrent $6{,}24 \\cdot 10^{18}$ elektroner (over 6 milliarder milliarder elektroner!).

I hverdagen møter vi ofte ladningsmengder i størrelsesorden mikrocoulomb ($\\mu$C) eller nanocoulomb (nC), for eksempel i statisk elektrisitet. Men i elektriske kretser snakker vi gjerne om hele coulomb – fordi enormt mange elektroner er i bevegelse samtidig.`,
    },

    // --- EKSEMPEL: Ladning ---
    {
      id: 'tof1-4-1-example-ladning',
      type: 'example',
      title: 'Eksempel: Antall elektroner',
      problem: 'Hvor mange elektroner utgjør en ladning på $Q = 2{,}0$ C?',
      solution: `Vi bruker sammenhengen mellom total ladning og antall elektroner:

$$Q = n \\cdot e$$

der $n$ er antall elektroner og $e = 1{,}6 \\cdot 10^{-19}$ C.

Løser for $n$:

$$n = \\frac{Q}{e} = \\frac{2{,}0}{1{,}6 \\cdot 10^{-19}} = 1{,}25 \\cdot 10^{19}$$

**Svar:** En ladning på 2,0 C tilsvarer $1{,}25 \\cdot 10^{19}$ elektroner – det er 12,5 milliarder milliarder elektroner!`,
    },

    // --- OPPGAVE 1 ---
    {
      id: 'tof1-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er enheten for elektrisk ladning?',
        options: [
          { id: 'a', text: 'Ampere (A)', isCorrect: false },
          { id: 'b', text: 'Volt (V)', isCorrect: false },
          { id: 'c', text: 'Coulomb (C)', isCorrect: true },
          { id: 'd', text: 'Ohm (Ω)', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Coulomb (C) er enheten for elektrisk ladning. Ampere er enheten for strøm, volt for spenning, og ohm for motstand.',
      },
    },

    // --- TEORI: Elektrisk strøm ---
    {
      id: 'tof1-4-1-def-strom',
      type: 'definition',
      title: 'Elektrisk strøm',
      content: `**Elektrisk strøm** ($I$) er mengden ladning som passerer gjennom et tverrsnitt av en leder per tidsenhet.

$$I = \\frac{Q}{t}$$

der:
- $I$ = strøm (ampere, A)
- $Q$ = ladning (coulomb, C)
- $t$ = tid (sekunder, s)

**1 ampere = 1 coulomb per sekund** (1 A = 1 C/s).

Strømretningen er definert som retningen **positive ladninger** ville bevege seg, altså fra pluss til minus. I virkeligheten er det elektronene (negative) som beveger seg – fra minus til pluss. Denne konvensjonen kalles **konvensjonell strømretning**.`,
    },
    {
      id: 'tof1-4-1-text-strom',
      type: 'text',
      content: `### Strøm i praksis

En typisk lommelykt bruker rundt 0,3 A, en mobiltelefon-lader leverer 1–2 A, og en elektrisk ovn kan trekke 10 A eller mer. Strøm over 30 mA (milliampere) gjennom kroppen kan være livsfarlig.

**Analogien med vannstrøm:** Man kan tenke på elektrisk strøm som vannstrøm i et rør. Mengden vann som passerer per sekund tilsvarer antall coulomb per sekund (ampere). Jo mer vann som flyter, desto sterkere er «strømmen».

For å måle strøm bruker vi et **amperemeter**, som kobles i **serie** (i rekke) med kretsen, slik at all strømmen flyter gjennom måleinstrumentet.`,
    },

    // --- EKSEMPEL: Strøm ---
    {
      id: 'tof1-4-1-example-strom',
      type: 'example',
      title: 'Eksempel: Beregning av strøm',
      problem: 'En ladning på $Q = 15$ C passerer gjennom en ledning i løpet av $t = 5{,}0$ s. Hva er strømmen i ledningen?',
      solution: `Vi bruker definisjonen av strøm:

$$I = \\frac{Q}{t} = \\frac{15}{5{,}0} = 3{,}0 \\text{ A}$$

**Svar:** Strømmen i ledningen er 3,0 A.`,
    },

    // --- TEORI: Spenning ---
    {
      id: 'tof1-4-1-def-spenning',
      type: 'definition',
      title: 'Elektrisk spenning',
      content: `**Elektrisk spenning** ($U$) er arbeidet som utføres per ladningsenhet når ladning flyttes mellom to punkter.

$$U = \\frac{W}{Q}$$

der:
- $U$ = spenning (volt, V)
- $W$ = arbeid/energi (joule, J)
- $Q$ = ladning (coulomb, C)

**1 volt = 1 joule per coulomb** (1 V = 1 J/C).

Spenning er alltid en **forskjell** mellom to punkter – vi snakker om spenningen **over** en komponent eller **mellom** to punkter. Det er spenningen som «driver» strømmen gjennom kretsen.`,
    },
    {
      id: 'tof1-4-1-text-spenning',
      type: 'text',
      content: `### Spenning i praksis

Et vanlig AA-batteri har spenning 1,5 V, et bilbatteri 12 V, og stikkontakten hjemme leverer 230 V vekselstrøm. Høyspenningslinjer kan ha spenninger på 300 000 V eller mer.

**Vannanalogien:** Spenning kan sammenlignes med **vanntrykk** eller **høydeforskjell**. Et vannfall med stor høydeforskjell har mye potensiell energi – tilsvarende gir en høy spenning mye «driv» til strømmen. Uten høydeforskjell (spenning) er det ingen vannstrøm (strøm).

For å måle spenning bruker vi et **voltmeter**, som kobles i **parallell** over den komponenten vi vil måle spenningen over.`,
    },

    // --- OPPGAVE 2 ---
    {
      id: 'tof1-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva beskriver elektrisk spenning?',
        options: [
          { id: 'a', text: 'Mengden ladning som passerer per sekund', isCorrect: false },
          { id: 'b', text: 'Hvor mye motstand en komponent har', isCorrect: false },
          { id: 'c', text: 'Arbeid utført per ladningsenhet mellom to punkter', isCorrect: true },
          { id: 'd', text: 'Antall elektroner i en leder', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Elektrisk spenning ($U = W/Q$) er arbeidet som utføres per ladningsenhet. Alternativ A beskriver strøm, B beskriver motstand, og D beskriver ladningsmengde.',
      },
    },

    // --- TEORI: Motstand ---
    {
      id: 'tof1-4-1-def-motstand',
      type: 'definition',
      title: 'Elektrisk motstand',
      content: `**Elektrisk motstand** ($R$) er et mål på hvor mye en komponent bremser strømmen.

$$R = \\frac{U}{I}$$

der:
- $R$ = motstand (ohm, Ω)
- $U$ = spenning (volt, V)
- $I$ = strøm (ampere, A)

**1 ohm = 1 volt per ampere** (1 Ω = 1 V/A).

Motstand avhenger av materialets **egenskaper** og **geometri**:
$$R = \\rho \\cdot \\frac{L}{A}$$

der $\\rho$ er materialets resistivitet (Ω·m), $L$ er lengden (m) og $A$ er tverrsnittsarealet (m²).

**God leder:** Lav resistivitet (f.eks. kobber: $\\rho = 1{,}7 \\cdot 10^{-8}$ Ω·m)
**Isolator:** Høy resistivitet (f.eks. glass: $\\rho \\approx 10^{12}$ Ω·m)`,
    },
    {
      id: 'tof1-4-1-text-motstand',
      type: 'text',
      content: `### Motstand i praksis

Motstanden i en kobbertråd er svært liten, noen hundredeler av en ohm. En glødelampe har motstand på 200–500 Ω, mens en isolator som glass kan ha motstand på mange milliarder ohm.

**Vannanalogien:** Motstand er som en **forsnevring** i vannrøret. En trang åpning bremser vannstrømmen akkurat som høy motstand bremser den elektriske strømmen. Tykke, korte ledere har lav motstand (brede rør), mens tynne, lange ledere har høy motstand (smale rør).

Motstand omdanner elektrisk energi til **varme**. Det er dette prinsippet som brukes i varmeovner, komfyrplater og glødelamper.`,
    },

    // --- EKSEMPEL: Motstand ---
    {
      id: 'tof1-4-1-example-motstand',
      type: 'example',
      title: 'Eksempel: Beregning av motstand i en kobbertråd',
      problem: 'En kobbertråd har lengde $L = 10$ m og tverrsnittsareal $A = 1{,}0$ mm² $= 1{,}0 \\cdot 10^{-6}$ m². Resistiviteten til kobber er $\\rho = 1{,}7 \\cdot 10^{-8}$ Ω·m. Beregn motstanden.',
      solution: `Vi bruker formelen for motstand:

$$R = \\rho \\cdot \\frac{L}{A} = 1{,}7 \\cdot 10^{-8} \\cdot \\frac{10}{1{,}0 \\cdot 10^{-6}}$$

$$R = 1{,}7 \\cdot 10^{-8} \\cdot 1{,}0 \\cdot 10^{7} = 0{,}17 \\text{ Ω}$$

**Svar:** Kobbertråden har en motstand på 0,17 Ω. Dette er svært lite, noe som gjør kobber til et godt ledningsmateriale.`,
    },

    // --- OPPGAVE 3 ---
    {
      id: 'tof1-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En ladning på $Q = 0{,}50$ C passerer gjennom en leder på $t = 2{,}0$ s, og spenningen over lederen er $U = 6{,}0$ V. Beregn: a) strømmen gjennom lederen, og b) motstanden i lederen.',
        hints: ['Bruk $I = Q/t$ for å finne strømmen, og deretter $R = U/I$ for å finne motstanden.'],
        solution: 'a) $I = Q/t = 0{,}50 / 2{,}0 = 0{,}25$ A\n\nb) $R = U/I = 6{,}0 / 0{,}25 = 24$ Ω\n\nStrømmen er 0,25 A og motstanden er 24 Ω.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- NOTE: Vannanalogien oppsummert ---
    {
      id: 'tof1-4-1-note-analogi',
      type: 'note',
      title: 'Vannanalogien oppsummert',
      content: `Vannanalogien er et nyttig hjelpemiddel for å forstå elektrisitet:

| Elektrisk størrelse | Vannanalogiis |
|---|---|
| **Spenning** ($U$) | Vanntrykk / høydeforskjell |
| **Strøm** ($I$) | Vannmengde per sekund |
| **Motstand** ($R$) | Forsnevring i røret |
| **Batteri** | Vannpumpe / reservoar |

Husk at analogien har sine begrensninger – vann lekker og går tapt, mens ladning alltid er bevart i en krets.`,
    },

    // --- OPPGAVE 4 ---
    {
      id: 'tof1-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvordan kobler vi et amperemeter i en krets for å måle strømmen?',
        options: [
          { id: 'a', text: 'I parallell over komponenten', isCorrect: false },
          { id: 'b', text: 'I serie med komponenten', isCorrect: true },
          { id: 'c', text: 'Utenfor kretsen', isCorrect: false },
          { id: 'd', text: 'Koblet til jord', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Et amperemeter kobles i serie (i rekke) med kretsen slik at all strømmen flyter gjennom det. Et voltmeter kobles derimot i parallell for å måle spenning.',
      },
    },

    // --- OPPSUMMERING ---
    {
      id: 'tof1-4-1-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Grunnleggende elektrisitet

Vi har lært om fire grunnleggende elektriske størrelser:

| Størrelse | Symbol | Enhet | Formel |
|---|---|---|---|
| Ladning | $Q$ | Coulomb (C) | $Q = n \\cdot e$ |
| Strøm | $I$ | Ampere (A) | $I = Q / t$ |
| Spenning | $U$ | Volt (V) | $U = W / Q$ |
| Motstand | $R$ | Ohm (Ω) | $R = U / I$ |

**Viktige sammenhenger:**
- Strøm er ladning i bevegelse
- Spenning er drivkraften som får ladningen til å bevege seg
- Motstand bremser strømmen og omdanner elektrisk energi til varme
- Ladning er alltid bevart i en lukket krets

Disse fire størrelsene er fundamentet som alt videre i elektronikk bygger på.`,
    },

    // --- SAMLEOPPGAVE 5 ---
    {
      id: 'tof1-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom strøm, spenning og motstand ved hjelp av vannanalogien. Bruk analogien til å forklare hva som skjer med strømmen dersom spenningen øker mens motstanden holdes konstant.',
        hints: ['Tenk på spenning som vanntrykk, strøm som vannmengde per sekund, og motstand som en forsnevring i røret. Hva skjer med vannstrømmen dersom trykket økes?'],
        solution: 'Spenning tilsvarer vanntrykk – det er drivkraften som «skyver» ladningene gjennom kretsen. Strøm tilsvarer mengden vann som flyter per sekund – det er mengden ladning i bevegelse. Motstand tilsvarer en forsnevring i røret – det bremser strømmen.\n\nDersom spenningen (trykket) øker mens motstanden (forsnevringen) holdes konstant, vil strømmen (vannmengden per sekund) øke proporsjonalt. Dette følger av $I = U/R$ – dobler vi spenningen, dobles også strømmen. Det er akkurat som at høyere trykk gir mer vanngjennomstrømning gjennom det samme røret.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.2: Ohms lov og effekt
// ============================================================================

export const CHAPTER_TOF_1_4_2: TextbookChapter = {
  id: 'tof-1-4-2',
  courseId: 'tof-1',
  chapterNumber: '4.2',
  title: 'Ohms lov og effekt',
  description: 'Ohms lov, elektrisk effekt og energi i kretser.',
  estimatedMinutes: 35,
  prerequisites: ['tof-1-4-1'],
  competenceGoals: ['beregne spenning, strøm og motstand'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-4-2-intro',
      type: 'text',
      content: `## Ohms lov og effekt

I forrige kapittel lærte du om de grunnleggende elektriske størrelsene. Nå skal vi se på den viktigste sammenhengen mellom dem: **Ohms lov**. Denne loven er selve grunnfjellet i all kretsanalyse, og den lar oss beregne ukjente verdier når vi kjenner to av de tre størrelsene spenning, strøm og motstand.

Vi skal også lære om **elektrisk effekt** – hvor raskt elektrisk energi omdannes – og **energi** i kretser. Disse begrepene er helt sentrale for å forstå alt fra strømregningen hjemme til dimensjonering av elektroniske kretser.`,
    },

    // --- TEORI: Ohms lov ---
    {
      id: 'tof1-4-2-def-ohm',
      type: 'definition',
      title: 'Ohms lov',
      content: `**Ohms lov** beskriver sammenhengen mellom spenning, strøm og motstand i en leder:

$$U = R \\cdot I$$

der:
- $U$ = spenning (V)
- $R$ = motstand (Ω)
- $I$ = strøm (A)

Loven kan omformes til å finne alle tre størrelser:
- $U = R \\cdot I$ (finn spenning)
- $I = \\frac{U}{R}$ (finn strøm)
- $R = \\frac{U}{I}$ (finn motstand)

Loven er oppkalt etter den tyske fysikeren **Georg Simon Ohm** (1789–1854), som publiserte den i 1827.`,
    },
    {
      id: 'tof1-4-2-note-ohm',
      type: 'note',
      title: 'Ohms lov gjelder for ohmske materialer',
      content: `Ohms lov gjelder strengt tatt bare for **ohmske materialer** – materialer der motstanden er konstant uavhengig av spenning og strøm. Metaller ved konstant temperatur er gode eksempler.

For noen komponenter, som **glødelamper** (motstanden øker med temperaturen) og **dioder** (slipper strøm bare én vei), er forholdet mellom spenning og strøm **ikke-lineært**, og Ohms lov gjelder ikke direkte.`,
    },

    // --- EKSEMPEL 1: Ohms lov ---
    {
      id: 'tof1-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Bruk av Ohms lov',
      problem: 'En motstand på $R = 100$ Ω er koblet til et batteri med spenning $U = 9{,}0$ V. Beregn strømmen gjennom motstanden.',
      solution: `Vi bruker Ohms lov løst for strøm:

$$I = \\frac{U}{R} = \\frac{9{,}0}{100} = 0{,}090 \\text{ A} = 90 \\text{ mA}$$

**Svar:** Strømmen gjennom motstanden er 90 mA (milliampere).`,
    },

    // --- OPPGAVE 1 ---
    {
      id: 'tof1-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva sier Ohms lov?',
        options: [
          { id: 'a', text: '$U = R \\cdot I$ – spenningen over en motstand er lik motstanden ganger strømmen', isCorrect: true },
          { id: 'b', text: '$P = U \\cdot I$ – effekten er lik spenningen ganger strømmen', isCorrect: false },
          { id: 'c', text: '$Q = I \\cdot t$ – ladningen er lik strømmen ganger tiden', isCorrect: false },
          { id: 'd', text: '$W = U \\cdot Q$ – arbeidet er lik spenningen ganger ladningen', isCorrect: false },
        ],
        solution: 'Riktig svar er A. Ohms lov sier $U = R \\cdot I$. De andre formlene er også korrekte fysiske sammenhenger, men de beskriver henholdsvis effekt (B), ladning (C) og arbeid (D) – ikke Ohms lov.',
      },
    },

    // --- EKSEMPEL 2: Finn motstand ---
    {
      id: 'tof1-4-2-example-2',
      type: 'example',
      title: 'Eksempel: Finne ukjent motstand',
      problem: 'Et voltmeter viser $U = 12$ V over en komponent, og et amperemeter viser at strømmen er $I = 0{,}40$ A. Hva er motstanden i komponenten?',
      solution: `Vi bruker Ohms lov løst for motstand:

$$R = \\frac{U}{I} = \\frac{12}{0{,}40} = 30 \\text{ Ω}$$

**Svar:** Motstanden i komponenten er 30 Ω.`,
    },

    // --- OPPGAVE 2 ---
    {
      id: 'tof1-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'En LED-lampe har en motstand på $R = 150$ Ω og trekker en strøm på $I = 20$ mA. Beregn spenningen over LED-lampen.',
        hints: ['Husk å gjøre om milliampere til ampere: 20 mA = 0,020 A. Bruk deretter $U = R \\cdot I$.'],
        solution: 'Vi gjør om til SI-enheter: $I = 20$ mA $= 0{,}020$ A.\n\n$U = R \\cdot I = 150 \\cdot 0{,}020 = 3{,}0$ V\n\nSpenningen over LED-lampen er 3,0 V.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- TEORI: Elektrisk effekt ---
    {
      id: 'tof1-4-2-def-effekt',
      type: 'definition',
      title: 'Elektrisk effekt',
      content: `**Elektrisk effekt** ($P$) er hastigheten energi omdannes med – altså energi per tidsenhet.

$$P = U \\cdot I$$

der:
- $P$ = effekt (watt, W)
- $U$ = spenning (V)
- $I$ = strøm (A)

**1 watt = 1 joule per sekund** (1 W = 1 J/s).

Ved å kombinere med Ohms lov kan vi utlede alternative formler:

$$P = U \\cdot I = R \\cdot I^2 = \\frac{U^2}{R}$$

Disse tre uttrykkene for effekt er likeverdige og velges ut fra hvilke størrelser man kjenner.`,
    },
    {
      id: 'tof1-4-2-text-effekt',
      type: 'text',
      content: `### Effekt i praksis

Effekt forteller oss hvor raskt energi brukes. Noen typiske verdier:

| Apparat | Effekt |
|---|---|
| Mobiltelefon-lader | 5–20 W |
| LED-lyspære | 5–15 W |
| Bærbar PC | 30–65 W |
| Glødelampe (gammel) | 40–100 W |
| Elektrisk ovn | 1000–2000 W |
| Komfyrplate | 1500–2500 W |

Enheten **kilowatt** (kW) brukes for større effekter: $1 \\text{ kW} = 1000 \\text{ W}$.`,
    },

    // --- EKSEMPEL 3: Effekt ---
    {
      id: 'tof1-4-2-example-3',
      type: 'example',
      title: 'Eksempel: Beregning av effekt',
      problem: 'En varmeovn er koblet til stikkontakten ($U = 230$ V) og trekker en strøm på $I = 8{,}7$ A. Beregn effekten til ovnen.',
      solution: `Vi bruker effektformelen:

$$P = U \\cdot I = 230 \\cdot 8{,}7 = 2001 \\text{ W} \\approx 2{,}0 \\text{ kW}$$

**Svar:** Varmeovnen har en effekt på omtrent 2,0 kW (2000 W). Dette er typisk for en panelovn.`,
    },

    // --- OPPGAVE 3 ---
    {
      id: 'tof1-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En komponent har motstand $R = 50$ Ω, og strømmen gjennom den er $I = 2{,}0$ A. Hva er effekten?',
        options: [
          { id: 'a', text: '25 W', isCorrect: false },
          { id: 'b', text: '100 W', isCorrect: false },
          { id: 'c', text: '200 W', isCorrect: true },
          { id: 'd', text: '500 W', isCorrect: false },
        ],
        solution: 'Riktig svar er C. $P = R \\cdot I^2 = 50 \\cdot 2{,}0^2 = 50 \\cdot 4{,}0 = 200$ W.',
      },
    },

    // --- TEORI: Elektrisk energi ---
    {
      id: 'tof1-4-2-def-energi',
      type: 'definition',
      title: 'Elektrisk energi',
      content: `**Elektrisk energi** ($W$) er den totale energimengden som omdannes over en tidsperiode.

$$W = P \\cdot t = U \\cdot I \\cdot t$$

der:
- $W$ = energi (joule, J)
- $P$ = effekt (watt, W)
- $t$ = tid (sekunder, s)

I hverdagen brukes enheten **kilowattime** (kWh):

$$1 \\text{ kWh} = 1000 \\text{ W} \\cdot 3600 \\text{ s} = 3{,}6 \\cdot 10^6 \\text{ J} = 3{,}6 \\text{ MJ}$$

Det er kWh som brukes på strømregningen. Prisen er typisk 0,5–2,0 kr per kWh i Norge.`,
    },

    // --- EKSEMPEL 4: Energi og strømregning ---
    {
      id: 'tof1-4-2-example-4',
      type: 'example',
      title: 'Eksempel: Strømkostnad',
      problem: 'En varmeovn med effekt $P = 2{,}0$ kW står på i 8 timer. Strømprisen er 1,50 kr/kWh. Hva koster det?',
      solution: `Først beregner vi energiforbruket:

$$W = P \\cdot t = 2{,}0 \\text{ kW} \\cdot 8 \\text{ h} = 16 \\text{ kWh}$$

Deretter beregner vi kostnaden:

$$\\text{Kostnad} = W \\cdot \\text{pris} = 16 \\text{ kWh} \\cdot 1{,}50 \\text{ kr/kWh} = 24 \\text{ kr}$$

**Svar:** Det koster 24 kr å ha ovnen på i 8 timer.`,
    },

    // --- OPPGAVE 4 ---
    {
      id: 'tof1-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En PC-skjerm har effekt $P = 30$ W og står på 10 timer per dag i 30 dager. Strømprisen er 1,20 kr/kWh. a) Beregn det totale energiforbruket i kWh. b) Beregn strømkostnaden for en måned.',
        hints: ['Regn først ut total tid i timer: $10 \\cdot 30 = 300$ timer. Bruk deretter $W = P \\cdot t$ og husk å gjøre om watt til kilowatt.'],
        solution: 'a) Total tid: $t = 10 \\cdot 30 = 300$ timer. $P = 30$ W $= 0{,}030$ kW.\n$W = P \\cdot t = 0{,}030 \\cdot 300 = 9{,}0$ kWh.\n\nb) Kostnad $= 9{,}0 \\cdot 1{,}20 = 10{,}80$ kr.\n\nSkjermen bruker 9,0 kWh og koster 10,80 kr per måned.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- OPPSUMMERING ---
    {
      id: 'tof1-4-2-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Ohms lov og effekt

**Ohms lov:**

$$U = R \\cdot I \\qquad I = \\frac{U}{R} \\qquad R = \\frac{U}{I}$$

**Effektformler:**

$$P = U \\cdot I = R \\cdot I^2 = \\frac{U^2}{R}$$

**Energi:**

$$W = P \\cdot t = U \\cdot I \\cdot t$$

| Størrelse | Symbol | Enhet | Vanlig formel |
|---|---|---|---|
| Spenning | $U$ | Volt (V) | $U = R \\cdot I$ |
| Strøm | $I$ | Ampere (A) | $I = U / R$ |
| Motstand | $R$ | Ohm (Ω) | $R = U / I$ |
| Effekt | $P$ | Watt (W) | $P = U \\cdot I$ |
| Energi | $W$ | Joule (J) / kWh | $W = P \\cdot t$ |

Disse formlene er de viktigste verktøyene i all kretsanalyse. Øv på å bruke dem til du kan dem utenat!`,
    },

    // --- SAMLEOPPGAVE 5 ---
    {
      id: 'tof1-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et element i en brødrister har motstand $R = 26{,}5$ Ω og er koblet til stikkontakten ($U = 230$ V). a) Beregn strømmen gjennom elementet. b) Beregn effekten til brødristeren. c) Hvor mye energi (i kJ) bruker brødristeren dersom den er på i 3 minutter?',
        hints: ['a) Bruk $I = U/R$. b) Bruk $P = U \\cdot I$ eller $P = U^2/R$. c) Husk at 3 minutter = 180 sekunder, og bruk $W = P \\cdot t$.'],
        solution: 'a) $I = U/R = 230/26{,}5 = 8{,}68$ A $\\approx 8{,}7$ A\n\nb) $P = U \\cdot I = 230 \\cdot 8{,}68 = 1996$ W $\\approx 2{,}0$ kW\n\nc) $t = 3$ min $= 180$ s\n$W = P \\cdot t = 1996 \\cdot 180 = 359\\,280$ J $\\approx 360$ kJ\n\nBrødristeren trekker 8,7 A, har effekt 2,0 kW og bruker 360 kJ på 3 minutter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- SAMLEOPPGAVE 6 ---
    {
      id: 'tof1-4-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En husstand bruker gjennomsnittlig 5000 kWh elektrisk energi per år. a) Hva er gjennomsnittlig effektforbruk i watt? b) Hvor mye strøm trekker husstanden gjennomsnittlig fra nettet (230 V)? c) Hva koster strømmen per år dersom prisen er 1,50 kr/kWh?',
        hints: ['a) 1 år = 365 dager × 24 timer = 8760 timer. Gjennomsnittlig effekt er energi delt på tid.'],
        solution: 'a) 1 år = 8760 timer. $P = W/t = 5000/8760 = 0{,}571$ kW $= 571$ W.\n\nb) $I = P/U = 571/230 = 2{,}48$ A $\\approx 2{,}5$ A.\n\nc) Kostnad $= 5000 \\cdot 1{,}50 = 7\\,500$ kr per år.\n\nHusstanden bruker i gjennomsnitt 571 W og trekker 2,5 A. Årlig strømkostnad er 7500 kr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.3: Serie- og parallellkoblinger
// ============================================================================

export const CHAPTER_TOF_1_4_3: TextbookChapter = {
  id: 'tof-1-4-3',
  courseId: 'tof-1',
  chapterNumber: '4.3',
  title: 'Serie- og parallellkoblinger',
  description: 'Analyse av serie- og parallellkoblede kretser.',
  estimatedMinutes: 35,
  prerequisites: ['tof-1-4-2'],
  competenceGoals: ['analysere serie- og parallellkoblinger'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-4-3-intro',
      type: 'text',
      content: `## Serie- og parallellkoblinger

I virkelige kretser er det sjelden bare én komponent. Vanligvis er flere komponenter koblet sammen, og det finnes to grunnleggende måter å gjøre dette på: **seriekobling** og **parallellkobling**.

Forståelsen av disse koblingene er helt avgjørende for å kunne analysere og bygge elektroniske kretser. I dette kapittelet skal du lære reglene for strøm, spenning og motstand i begge typer koblinger, og øve på å beregne disse størrelsene i sammensatte kretser.`,
    },

    // --- TEORI: Seriekobling ---
    {
      id: 'tof1-4-3-def-serie',
      type: 'definition',
      title: 'Seriekobling',
      content: `I en **seriekobling** er komponentene koblet etter hverandre, slik at strømmen må passere gjennom alle komponentene i tur og orden. Det finnes bare **én vei** for strømmen.

**Regler for seriekobling:**

1. **Strømmen er lik** overalt i kretsen:
$$I_{\\text{total}} = I_1 = I_2 = I_3 = \\ldots$$

2. **Spenningen fordeles** over komponentene:
$$U_{\\text{total}} = U_1 + U_2 + U_3 + \\ldots$$

3. **Totalmotstanden er summen** av enkeltmotstandene:
$$R_{\\text{total}} = R_1 + R_2 + R_3 + \\ldots$$`,
    },
    {
      id: 'tof1-4-3-text-serie',
      type: 'text',
      content: `### Forståelse av seriekobling

Tenk på en seriekobling som en **vannslange med flere forsnevringer etter hverandre**. Vannet (strømmen) flyter gjennom alle forsnevringene i tur og orden, og den totale motstanden er summen av alle forsnevringene. Trykket (spenningen) fordeles over hver forsnevring proporsjonalt med størrelsen.

**Praktisk eksempel:** Gamle julelyskjeder var serieforbundet – gikk én pære, slukket alle!

**Viktig:** I en seriekobling er det alltid strømmen som er lik overalt. Spenningen fordeles proporsjonalt med motstanden: komponenter med høy motstand får en større andel av spenningen.

Spenningsfordelingen følger av Ohms lov:
$$U_1 = R_1 \\cdot I, \\quad U_2 = R_2 \\cdot I, \\quad \\ldots$$

Siden strømmen $I$ er lik, får den komponenten med størst $R$ den høyeste spenningen.`,
    },

    // --- EKSEMPEL 1: Seriekobling ---
    {
      id: 'tof1-4-3-example-serie',
      type: 'example',
      title: 'Eksempel: Seriekrets med to motstander',
      problem: 'To motstander, $R_1 = 100$ Ω og $R_2 = 200$ Ω, er koblet i serie med et 9,0 V batteri. Beregn: a) totalmotstanden, b) strømmen i kretsen, c) spenningen over hver motstand.',
      solution: `**a) Totalmotstanden:**
$$R_{\\text{total}} = R_1 + R_2 = 100 + 200 = 300 \\text{ Ω}$$

**b) Strømmen i kretsen:**
$$I = \\frac{U}{R_{\\text{total}}} = \\frac{9{,}0}{300} = 0{,}030 \\text{ A} = 30 \\text{ mA}$$

**c) Spenningen over hver motstand:**
$$U_1 = R_1 \\cdot I = 100 \\cdot 0{,}030 = 3{,}0 \\text{ V}$$
$$U_2 = R_2 \\cdot I = 200 \\cdot 0{,}030 = 6{,}0 \\text{ V}$$

**Kontroll:** $U_1 + U_2 = 3{,}0 + 6{,}0 = 9{,}0$ V ✓ (lik batterispenningen)

Legg merke til at $R_2$ er dobbelt så stor som $R_1$, og den får også dobbelt så mye spenning.`,
    },

    // --- OPPGAVE 1 ---
    {
      id: 'tof1-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Tre motstander på $R_1 = 10$ Ω, $R_2 = 20$ Ω og $R_3 = 30$ Ω er koblet i serie. Hva er totalmotstanden?',
        options: [
          { id: 'a', text: '5,5 Ω', isCorrect: false },
          { id: 'b', text: '20 Ω', isCorrect: false },
          { id: 'c', text: '60 Ω', isCorrect: true },
          { id: 'd', text: '600 Ω', isCorrect: false },
        ],
        solution: 'Riktig svar er C. I seriekobling summeres motstandene: $R_{\\text{total}} = 10 + 20 + 30 = 60$ Ω.',
      },
    },

    // --- TEORI: Parallellkobling ---
    {
      id: 'tof1-4-3-def-parallell',
      type: 'definition',
      title: 'Parallellkobling',
      content: `I en **parallellkobling** er komponentene koblet side om side, slik at strømmen kan fordele seg mellom flere veier. Alle komponentene har **samme spenning** over seg.

**Regler for parallellkobling:**

1. **Spenningen er lik** over alle grener:
$$U_{\\text{total}} = U_1 = U_2 = U_3 = \\ldots$$

2. **Strømmen fordeles** mellom grenene:
$$I_{\\text{total}} = I_1 + I_2 + I_3 + \\ldots$$

3. **Totalmotstanden** beregnes slik:
$$\\frac{1}{R_{\\text{total}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3} + \\ldots$$

For **to motstander** i parallell finnes en forenklet formel:
$$R_{\\text{total}} = \\frac{R_1 \\cdot R_2}{R_1 + R_2}$$`,
    },
    {
      id: 'tof1-4-3-text-parallell',
      type: 'text',
      content: `### Forståelse av parallellkobling

Tenk på en parallellkobling som **flere rør som går parallelt** mellom to punkter. Vannet (strømmen) kan fordele seg mellom rørene. Flere parallelle rør gir større total gjennomstrømning, altså **lavere motstand**.

**Viktig prinsipp:** Totalmotstanden i en parallellkobling er alltid **mindre** enn den minste enkeltmotstanden! Det er fordi strømmen har flere veier å gå.

**Praktisk eksempel:** Stikkontaktene hjemme er parallellkoblet. Dermed får alle apparater 230 V uansett hvor mange som er koblet til. Og hvis én pære går, lyser de andre fortsatt.

Strømfordelingen følger av Ohms lov:
$$I_1 = \\frac{U}{R_1}, \\quad I_2 = \\frac{U}{R_2}, \\quad \\ldots$$

Siden spenningen $U$ er lik, trekker den grenen med **lavest** motstand mest strøm.`,
    },

    // --- EKSEMPEL 2: Parallellkobling ---
    {
      id: 'tof1-4-3-example-parallell',
      type: 'example',
      title: 'Eksempel: Parallellkrets med to motstander',
      problem: 'To motstander, $R_1 = 100$ Ω og $R_2 = 200$ Ω, er koblet i parallell med et 12 V batteri. Beregn: a) totalmotstanden, b) totalstrømmen fra batteriet, c) strømmen gjennom hver motstand.',
      solution: `**a) Totalmotstanden (to motstander i parallell):**
$$R_{\\text{total}} = \\frac{R_1 \\cdot R_2}{R_1 + R_2} = \\frac{100 \\cdot 200}{100 + 200} = \\frac{20\\,000}{300} = 66{,}7 \\text{ Ω}$$

Merk: $R_{\\text{total}} = 66{,}7$ Ω < $R_1 = 100$ Ω (alltid mindre enn den minste).

**b) Totalstrømmen:**
$$I_{\\text{total}} = \\frac{U}{R_{\\text{total}}} = \\frac{12}{66{,}7} = 0{,}180 \\text{ A} = 180 \\text{ mA}$$

**c) Strømmen gjennom hver motstand:**
$$I_1 = \\frac{U}{R_1} = \\frac{12}{100} = 0{,}120 \\text{ A} = 120 \\text{ mA}$$
$$I_2 = \\frac{U}{R_2} = \\frac{12}{200} = 0{,}060 \\text{ A} = 60 \\text{ mA}$$

**Kontroll:** $I_1 + I_2 = 120 + 60 = 180$ mA ✓ (lik totalstrømmen)

$R_1$ har lavere motstand og trekker dobbelt så mye strøm som $R_2$.`,
    },

    // --- OPPGAVE 2 ---
    {
      id: 'tof1-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'To motstander på 60 Ω og 120 Ω er koblet i parallell. Hva er totalmotstanden?',
        options: [
          { id: 'a', text: '180 Ω', isCorrect: false },
          { id: 'b', text: '90 Ω', isCorrect: false },
          { id: 'c', text: '40 Ω', isCorrect: true },
          { id: 'd', text: '30 Ω', isCorrect: false },
        ],
        solution: 'Riktig svar er C. $R_{\\text{total}} = \\frac{60 \\cdot 120}{60 + 120} = \\frac{7200}{180} = 40$ Ω. Merk at dette er mindre enn den minste motstanden (60 Ω).',
      },
    },

    // --- TEORI: Sammenligning ---
    {
      id: 'tof1-4-3-text-sammenligning',
      type: 'text',
      content: `### Sammenligning av serie- og parallellkobling

| Egenskap | Seriekobling | Parallellkobling |
|---|---|---|
| **Strøm** | Lik overalt | Fordeles mellom grenene |
| **Spenning** | Fordeles over komponentene | Lik over alle grener |
| **Totalresistans** | $R_{\\text{tot}} = R_1 + R_2 + \\ldots$ | $\\frac{1}{R_{\\text{tot}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\ldots$ |
| **Totalresistans vs. enkeltresistanser** | Alltid **større** enn den største | Alltid **mindre** enn den minste |
| **Feilkonsekvens** | Én komponent feiler → hele kretsen stopper | Én komponent feiler → andre virker |

De fleste praktiske kretser inneholder en kombinasjon av serie- og parallellkoblinger.`,
    },

    // --- EKSEMPEL 3: Kombinert krets ---
    {
      id: 'tof1-4-3-example-kombi',
      type: 'example',
      title: 'Eksempel: Kombinert krets',
      problem: '$R_1 = 100$ Ω er koblet i serie med en parallellkobling av $R_2 = 200$ Ω og $R_3 = 200$ Ω. Batterispenningen er $U = 12$ V. Beregn totalmotstanden og strømmen fra batteriet.',
      solution: `**Steg 1: Finn motstanden til parallellkoblingen**

$R_2$ og $R_3$ er i parallell:
$$R_{23} = \\frac{R_2 \\cdot R_3}{R_2 + R_3} = \\frac{200 \\cdot 200}{200 + 200} = \\frac{40\\,000}{400} = 100 \\text{ Ω}$$

**Steg 2: Finn totalmotstanden**

$R_1$ er i serie med $R_{23}$:
$$R_{\\text{total}} = R_1 + R_{23} = 100 + 100 = 200 \\text{ Ω}$$

**Steg 3: Finn strømmen**
$$I = \\frac{U}{R_{\\text{total}}} = \\frac{12}{200} = 0{,}060 \\text{ A} = 60 \\text{ mA}$$

**Svar:** Totalmotstanden er 200 Ω og strømmen fra batteriet er 60 mA.`,
    },

    // --- OPPGAVE 3 ---
    {
      id: 'tof1-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tre motstander $R_1 = 100$ Ω, $R_2 = 150$ Ω og $R_3 = 300$ Ω er koblet i parallell. a) Beregn totalmotstanden. b) Dersom spenningen er 12 V, beregn totalstrømmen og strømmen gjennom hver motstand.',
        hints: ['a) Bruk $1/R_{\\text{total}} = 1/R_1 + 1/R_2 + 1/R_3$. b) Bruk Ohms lov for å finne strømmen i hver gren.'],
        solution: 'a) $\\frac{1}{R_{\\text{total}}} = \\frac{1}{100} + \\frac{1}{150} + \\frac{1}{300} = \\frac{6+4+2}{600} = \\frac{12}{600}$\n\n$R_{\\text{total}} = \\frac{600}{12} = 50$ Ω.\n\nb) $I_{\\text{total}} = U/R_{\\text{total}} = 12/50 = 0{,}24$ A = 240 mA.\n$I_1 = 12/100 = 0{,}12$ A = 120 mA.\n$I_2 = 12/150 = 0{,}080$ A = 80 mA.\n$I_3 = 12/300 = 0{,}040$ A = 40 mA.\nKontroll: $120 + 80 + 40 = 240$ mA ✓',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- WARNING: Vanlig feil ---
    {
      id: 'tof1-4-3-warning-feil',
      type: 'warning',
      title: 'Vanlig feil',
      content: `Mange elever gjør feilen å **summere motstander i parallell** direkte ($R_1 + R_2$). Husk:

- **Serie:** Summer motstandene direkte
- **Parallell:** Bruk den inverse formelen $\\frac{1}{R_{\\text{total}}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\ldots$

En god kontroll er at totalmotstanden i parallell alltid skal være **mindre** enn den minste enkeltmotstanden.`,
    },

    // --- OPPSUMMERING ---
    {
      id: 'tof1-4-3-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Serie- og parallellkoblinger

**Seriekobling:**
- Strøm lik overalt: $I_{\\text{tot}} = I_1 = I_2$
- Spenning fordeles: $U_{\\text{tot}} = U_1 + U_2$
- Totalresistans øker: $R_{\\text{tot}} = R_1 + R_2$

**Parallellkobling:**
- Spenning lik overalt: $U_{\\text{tot}} = U_1 = U_2$
- Strøm fordeles: $I_{\\text{tot}} = I_1 + I_2$
- Totalresistans synker: $\\frac{1}{R_{\\text{tot}}} = \\frac{1}{R_1} + \\frac{1}{R_2}$

**Kombinerte kretser:** Løs innenfra og ut – beregn først parallellkoblingene, sett resultatet inn i serieberegningen.`,
    },

    // --- SAMLEOPPGAVE 4 ---
    {
      id: 'tof1-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: '$R_1 = 50$ Ω er koblet i serie med en parallellkobling av $R_2 = 100$ Ω og $R_3 = 100$ Ω. Batterispenningen er $U = 9{,}0$ V. a) Beregn totalmotstanden. b) Beregn strømmen fra batteriet. c) Beregn spenningen over $R_1$ og over parallellkoblingen. d) Beregn effekten levert av batteriet.',
        hints: ['a) Finn først motstanden i parallellkoblingen, legg deretter til $R_1$. b) Bruk Ohms lov. c) Bruk $U = R \\cdot I$ for hver del. d) Bruk $P = U \\cdot I$.'],
        solution: 'a) Parallellkobling: $R_{23} = \\frac{100 \\cdot 100}{100+100} = 50$ Ω. Totalresistans: $R_{\\text{tot}} = 50 + 50 = 100$ Ω.\n\nb) $I = U/R_{\\text{tot}} = 9{,}0/100 = 0{,}090$ A = 90 mA.\n\nc) $U_1 = R_1 \\cdot I = 50 \\cdot 0{,}090 = 4{,}5$ V. $U_{23} = R_{23} \\cdot I = 50 \\cdot 0{,}090 = 4{,}5$ V. Kontroll: $4{,}5 + 4{,}5 = 9{,}0$ V ✓\n\nd) $P = U \\cdot I = 9{,}0 \\cdot 0{,}090 = 0{,}81$ W = 810 mW.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- SAMLEOPPGAVE 5 ---
    {
      id: 'tof1-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du har fire motstander med verdi 100 Ω hver. Forklar hvordan du kan koble dem for å få: a) totalresistans 400 Ω, b) totalresistans 25 Ω, c) totalresistans 100 Ω (hint: bruk en kombinasjon).',
        hints: ['a) Tenk serie. b) Tenk parallell. c) Tenk på å koble to par i serie, der hvert par er to i parallell – eller omvendt.'],
        solution: 'a) **400 Ω – alle i serie:** $R_{\\text{tot}} = 100 + 100 + 100 + 100 = 400$ Ω.\n\nb) **25 Ω – alle i parallell:** $\\frac{1}{R_{\\text{tot}}} = \\frac{1}{100} + \\frac{1}{100} + \\frac{1}{100} + \\frac{1}{100} = \\frac{4}{100}$, $R_{\\text{tot}} = 25$ Ω.\n\nc) **100 Ω – to parallelle par i serie:** Parallellkoble to og to: $R_{12} = \\frac{100 \\cdot 100}{200} = 50$ Ω og $R_{34} = 50$ Ω. I serie: $R_{\\text{tot}} = 50 + 50 = 100$ Ω.\n\nAlternativt: to seriepar i parallell: $(100+100)$ i parallell med $(100+100)$ = $\\frac{200 \\cdot 200}{400} = 100$ Ω. ✓',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- SAMLEOPPGAVE 6 ---
    {
      id: 'tof1-4-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-3-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skjer med totalstrømmen fra batteriet dersom du kobler enda en motstand i parallell med de eksisterende?',
        options: [
          { id: 'a', text: 'Totalstrømmen synker fordi det er mer motstand', isCorrect: false },
          { id: 'b', text: 'Totalstrømmen øker fordi totalmotstanden synker', isCorrect: true },
          { id: 'c', text: 'Totalstrømmen er uendret fordi spenningen er den samme', isCorrect: false },
          { id: 'd', text: 'Det avhenger av verdien på den nye motstanden', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Å legge til en motstand i parallell gir strømmen en ekstra vei å gå. Totalmotstanden synker, og siden $I = U/R_{\\text{tot}}$ og spenningen er konstant, øker totalstrømmen. Alternativ D er feil fordi dette alltid skjer, uansett verdien på den nye motstanden.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.4: Elektroniske komponenter
// ============================================================================

export const CHAPTER_TOF_1_4_4: TextbookChapter = {
  id: 'tof-1-4-4',
  courseId: 'tof-1',
  chapterNumber: '4.4',
  title: 'Elektroniske komponenter',
  description: 'Resistorer, kondensatorer, dioder og transistorer.',
  estimatedMinutes: 30,
  prerequisites: ['tof-1-4-3'],
  competenceGoals: ['forklare funksjonen til elektroniske komponenter'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-4-4-intro',
      type: 'text',
      content: `## Elektroniske komponenter

Nå som du har lært om grunnleggende elektrisitet, Ohms lov og kretskoblinger, er det på tide å bli kjent med de viktigste **elektroniske komponentene**. I dette kapittelet skal du lære hva resistorer, kondensatorer, dioder og transistorer er, hvordan de fungerer, og hva de brukes til.

Disse komponentene er byggesteinene i all elektronikk – fra enkle lommelykter til avanserte datamaskiner. Ved å kombinere dem på ulike måter kan vi lage kretser som utfører et uendelig antall funksjoner.`,
    },

    // --- TEORI: Resistorer ---
    {
      id: 'tof1-4-4-def-resistor',
      type: 'definition',
      title: 'Resistor',
      content: `En **resistor** (motstand) er en komponent som har en bestemt, kontrollert motstand. Den begrenser strømmen i en krets.

**Kretssymbol:** En rektangulær boks eller sikk-sakk-linje.

**Fargekode:** Motstander merkes med fargestriper som angir motstandsverdien:
- Stripe 1: Første siffer
- Stripe 2: Andre siffer
- Stripe 3: Multiplikator (antall nuller)
- Stripe 4: Toleranse

| Farge | Verdi | Toleranse |
|---|---|---|
| Sort | 0 | – |
| Brun | 1 | ±1 % |
| Rød | 2 | ±2 % |
| Oransje | 3 | – |
| Gul | 4 | – |
| Grønn | 5 | ±0,5 % |
| Blå | 6 | – |
| Lilla | 7 | – |
| Grå | 8 | – |
| Hvit | 9 | – |
| Gull | – | ±5 % |
| Sølv | – | ±10 % |`,
    },
    {
      id: 'tof1-4-4-text-resistor',
      type: 'text',
      content: `### Bruksområder for resistorer

Resistorer brukes til mange formål i elektronikk:

- **Strømbegrensning:** Beskytte komponenter mot for mye strøm (f.eks. en LED)
- **Spenningsdeling:** Fordele spenningen mellom punkter i en krets
- **Tidskretser:** Sammen med kondensatorer i RC-kretser
- **Pull-up/pull-down:** Sikre et definert signalnivå i digitale kretser

**Effekttålegrense (wattrating):** Enhver resistor har en maksimal effekt den kan tåle uten å overopphetes. Vanlige verdier er 0,25 W, 0,5 W og 1 W. Overskrides grensen, kan motstanden bli ødelagt eller ta fyr.`,
    },

    // --- EKSEMPEL: Resistor for LED ---
    {
      id: 'tof1-4-4-example-led-resistor',
      type: 'example',
      title: 'Eksempel: Beregning av forresistans for LED',
      problem: 'En rød LED har en spenning på $U_{\\text{LED}} = 2{,}0$ V og tåler maksimalt $I = 20$ mA. Du vil koble LED-en til et 9,0 V batteri. Beregn verdien på forresistansen som trengs.',
      solution: `**Spenningen over motstanden:**

LED-en og motstanden er i serie, så spenningen fordeles:
$$U_R = U_{\\text{batteri}} - U_{\\text{LED}} = 9{,}0 - 2{,}0 = 7{,}0 \\text{ V}$$

**Nødvendig motstand:**

Vi bruker Ohms lov med $I = 20$ mA $= 0{,}020$ A:
$$R = \\frac{U_R}{I} = \\frac{7{,}0}{0{,}020} = 350 \\text{ Ω}$$

I praksis velger vi nærmeste standardverdi, som er **360 Ω** eller **390 Ω** (da blir strømmen litt lavere enn 20 mA, som er trygt).

**Sjekk effekten:**
$$P = U_R \\cdot I = 7{,}0 \\cdot 0{,}020 = 0{,}14 \\text{ W}$$

En standard 0,25 W motstand er tilstrekkelig.`,
    },

    // --- OPPGAVE 1 ---
    {
      id: 'tof1-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En motstand har fargekodestripene: rød, lilla, brun, gull. Hva er motstandsverdien?',
        options: [
          { id: 'a', text: '27 Ω ± 5 %', isCorrect: false },
          { id: 'b', text: '270 Ω ± 5 %', isCorrect: true },
          { id: 'c', text: '2700 Ω ± 5 %', isCorrect: false },
          { id: 'd', text: '2,7 Ω ± 5 %', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Rød = 2, Lilla = 7, Brun = ×10 (1 null), Gull = ±5 %. Altså 27 × 10 = 270 Ω ± 5 %.',
      },
    },

    // --- TEORI: Kondensatorer ---
    {
      id: 'tof1-4-4-def-kondensator',
      type: 'definition',
      title: 'Kondensator',
      content: `En **kondensator** er en komponent som kan lagre elektrisk ladning og energi. Den består av to ledende plater adskilt av et isolerende materiale (dielektrikum).

**Kapasitans** ($C$) er et mål på hvor mye ladning kondensatoren kan lagre per volt:

$$C = \\frac{Q}{U}$$

der:
- $C$ = kapasitans (farad, F)
- $Q$ = lagret ladning (C)
- $U$ = spenning over kondensatoren (V)

**1 farad = 1 coulomb per volt.** Farad er en svært stor enhet – i praksis bruker vi:
- Mikrofarad: $1 \\text{ µF} = 10^{-6}$ F
- Nanofarad: $1 \\text{ nF} = 10^{-9}$ F
- Pikofarad: $1 \\text{ pF} = 10^{-12}$ F`,
    },
    {
      id: 'tof1-4-4-text-kondensator',
      type: 'text',
      content: `### Lading og utlading

Når en kondensator kobles til en spenningskilde, flyter det strøm inn i kondensatoren. Ladning samler seg opp på platene, og spenningen over kondensatoren øker gradvis til den er lik kildespenningen. Da stopper strømmen.

Når spenningskilden fjernes og kondensatoren kobles til en krets, leverer den ladningen tilbake – den **utlades**. Utladingsstrømmen avtar eksponentielt.

**Tidskonstanten** $\\tau = R \\cdot C$ (tau) forteller hvor lang tid det tar å lade/utlade kondensatoren:
- Etter $1\\tau$: 63 % ladet (eller 37 % igjen ved utlading)
- Etter $3\\tau$: 95 % ladet
- Etter $5\\tau$: >99 % ladet (regnes som fullt ladet)

**Lagret energi:**
$$W = \\frac{1}{2} C U^2$$

### Bruksområder

- **Filtrering:** Glatte ut spenningsvariasjoner (f.eks. i strømforsyninger)
- **Tidskretser:** Styre tidsintervaller (f.eks. blinkende LED)
- **Kobling:** Slippe gjennom vekselspenning men blokkere likespenning
- **Energilagring:** Lagre energi for kortvarig bruk (f.eks. kamerablink)`,
    },

    // --- EKSEMPEL: Kondensator ---
    {
      id: 'tof1-4-4-example-kondensator',
      type: 'example',
      title: 'Eksempel: Ladning og energi i en kondensator',
      problem: 'En kondensator med kapasitans $C = 100$ µF lades opp til $U = 12$ V. a) Hvor mye ladning lagres? b) Hvor mye energi lagres?',
      solution: `Vi gjør om til SI-enheter: $C = 100$ µF $= 100 \\cdot 10^{-6}$ F $= 1{,}0 \\cdot 10^{-4}$ F.

**a) Lagret ladning:**
$$Q = C \\cdot U = 1{,}0 \\cdot 10^{-4} \\cdot 12 = 1{,}2 \\cdot 10^{-3} \\text{ C} = 1{,}2 \\text{ mC}$$

**b) Lagret energi:**
$$W = \\frac{1}{2} C U^2 = \\frac{1}{2} \\cdot 1{,}0 \\cdot 10^{-4} \\cdot 12^2 = \\frac{1}{2} \\cdot 1{,}0 \\cdot 10^{-4} \\cdot 144 = 7{,}2 \\cdot 10^{-3} \\text{ J} = 7{,}2 \\text{ mJ}$$

**Svar:** Kondensatoren lagrer 1,2 mC ladning og 7,2 mJ energi.`,
    },

    // --- OPPGAVE 2 ---
    {
      id: 'tof1-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'En RC-krets har $R = 10$ kΩ og $C = 47$ µF. a) Beregn tidskonstanten $\\tau$. b) Hvor lang tid tar det før kondensatoren er tilnærmet fullt ladet ($5\\tau$)?',
        hints: ['Husk å gjøre om til SI-enheter: kΩ til Ω og µF til F. Tidskonstanten er $\\tau = R \\cdot C$.'],
        solution: 'a) $R = 10$ kΩ $= 10\\,000$ Ω, $C = 47$ µF $= 47 \\cdot 10^{-6}$ F.\n$\\tau = R \\cdot C = 10\\,000 \\cdot 47 \\cdot 10^{-6} = 0{,}47$ s.\n\nb) $5\\tau = 5 \\cdot 0{,}47 = 2{,}35$ s $\\approx 2{,}4$ s.\n\nKondensatoren er tilnærmet fullt ladet etter ca. 2,4 sekunder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- TEORI: Dioder ---
    {
      id: 'tof1-4-4-def-diode',
      type: 'definition',
      title: 'Diode',
      content: `En **diode** er en halvlederkomponent som slipper strøm gjennom i bare **én retning**.

**Oppbygging:** En diode er laget av to typer halvledermateriale – **p-type** (overskudd av positive ladningsbærere) og **n-type** (overskudd av negative ladningsbærere) – som danner en **pn-overgang**.

**Virkemåte:**
- **Foroverretning** (anode positiv, katode negativ): Strømmen flyter fritt etter at spenningen overstiger **terskelverdi** (ca. 0,6–0,7 V for silisium).
- **Sperreretning** (anode negativ, katode positiv): Ingen strøm flyter (dioden blokkerer).

**LED (lysdiode):** En spesiell type diode som sender ut lys når strøm passerer i foroverretning. Fargene avhenger av materialet:
- Rød LED: $U \\approx 1{,}8$–2,0 V
- Grønn LED: $U \\approx 2{,}0$–2,2 V
- Blå/hvit LED: $U \\approx 3{,}0$–3,5 V`,
    },
    {
      id: 'tof1-4-4-text-diode',
      type: 'text',
      content: `### Bruksområder for dioder

- **Likeretting:** Omforme vekselstrøm (AC) til likestrøm (DC) i strømforsyninger
- **Beskyttelse:** Hindre at strøm flyter feil vei og ødelegger komponenter
- **LED-belysning:** Energieffektiv lysproduksjon
- **Signaldeteksjon:** I radioer og kommunikasjonsutstyr

### Viktig om LED-er

En LED **må alltid** ha en **forresistans** i serie! Uten motstand vil strømmen bli for stor, og LED-en brenner gjennom øyeblikkelig. Vi beregnet et eksempel på dette tidligere i kapittelet.

LED-er er **polariserte** – de må kobles riktig vei. Det lange beinet er **anode** (+) og det korte er **katode** (−).`,
    },

    // --- OPPGAVE 3 ---
    {
      id: 'tof1-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedfunksjonen til en diode?',
        options: [
          { id: 'a', text: 'Lagre elektrisk energi', isCorrect: false },
          { id: 'b', text: 'Forsterke elektriske signaler', isCorrect: false },
          { id: 'c', text: 'Slippe strøm gjennom i bare én retning', isCorrect: true },
          { id: 'd', text: 'Begrense strømmen til en bestemt verdi', isCorrect: false },
        ],
        solution: 'Riktig svar er C. En diode slipper strøm i foroverretning og blokkerer i sperreretning. Alternativ A beskriver en kondensator, B en transistor/forsterker, og D en resistor/strømbegrenser.',
      },
    },

    // --- TEORI: Transistorer ---
    {
      id: 'tof1-4-4-def-transistor',
      type: 'definition',
      title: 'Transistor',
      content: `En **transistor** er en halvlederkomponent med tre terminaler som kan brukes til å **forsterke** og **svitsje** elektriske signaler.

**Terminaler:**
- **Basis (B):** Styresignal
- **Kollektor (C):** Strøm inn (for NPN)
- **Emitter (E):** Strøm ut (for NPN)

**Virkemåte (NPN-transistor):**
- En liten strøm inn i basis ($I_B$) styrer en mye større strøm mellom kollektor og emitter ($I_C$).
- **Forsterkning:** $I_C = \\beta \\cdot I_B$, der $\\beta$ (beta) er strømforsterkningen, typisk 100–300.
- **Som bryter:** Basis-strøm = 0 → transistoren er AV (ingen strøm). Basis-strøm > 0 → transistoren er PÅ (strøm flyter).`,
    },
    {
      id: 'tof1-4-4-text-transistor',
      type: 'text',
      content: `### Transistoren – moderne teknologis fundament

Transistoren, oppfunnet i 1947 av Bardeen, Brattain og Shockley ved Bell Labs, er kanskje den viktigste oppfinnelsen i det 20. århundre. Praktisk talt all moderne elektronikk er bygd av transistorer:

- En moderne datamaskinprosessor inneholder **milliarder** av transistorer
- Transistorer brukes som **forsterkere** i høyttalere, mikrofoner og radioer
- Som **brytere** utgjør de grunnlaget for all digital logikk (0 og 1)

### To hovedtyper

**Bipolar transistor (BJT):** Styres av strøm i basis. Brukes mye i analoge kretser.

**Felteffekttransistor (FET/MOSFET):** Styres av spenning på gate. Dominerer i digitale kretser og integrerte kretser fordi de bruker svært lite effekt. Nesten alle transistorer i moderne prosessorer er MOSFET-er.

### Transistoren som bryter

I mange ToF-prosjekter brukes transistoren som en elektronisk bryter. Et lite signal (f.eks. fra en mikrokontroller) styrer en stor last (f.eks. en motor eller mange LED-er) via transistoren. Mikrokontrolleren kan bare levere noen få milliampere, men transistoren kan styre ampere-nivå strømmer.`,
    },

    // --- EKSEMPEL: Transistor som bryter ---
    {
      id: 'tof1-4-4-example-transistor',
      type: 'example',
      title: 'Eksempel: Transistor som bryter for motor',
      problem: 'En NPN-transistor med strømforsterkning $\\beta = 200$ skal brukes til å drive en liten DC-motor som trekker $I_C = 200$ mA. Beregn den nødvendige basisstrømmen.',
      solution: `Vi bruker forholdet mellom kollektor- og basisstrøm:

$$I_C = \\beta \\cdot I_B$$

Løser for basisstrømmen:

$$I_B = \\frac{I_C}{\\beta} = \\frac{200 \\text{ mA}}{200} = 1{,}0 \\text{ mA}$$

**Svar:** En basisstrøm på bare 1,0 mA er nok til å styre 200 mA gjennom motoren. Dette er godt innenfor det en mikrokontroller (f.eks. Arduino) kan levere.

I praksis legger vi til en **basisresistor** for å begrense basisstrømmen. Dersom mikrokontrolleren gir 5 V og transistorens $U_{BE} \\approx 0{,}7$ V:

$$R_B = \\frac{U_{\\text{ut}} - U_{BE}}{I_B} = \\frac{5{,}0 - 0{,}7}{0{,}001} = 4300 \\text{ Ω} \\approx 4{,}3 \\text{ kΩ}$$`,
    },

    // --- OPPGAVE 4 ---
    {
      id: 'tof1-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skjer når det ikke flyter strøm inn i basis på en NPN-transistor?',
        options: [
          { id: 'a', text: 'Det flyter maksimal strøm mellom kollektor og emitter', isCorrect: false },
          { id: 'b', text: 'Transistoren forsterker signalet uansett', isCorrect: false },
          { id: 'c', text: 'Det flyter ingen strøm mellom kollektor og emitter – transistoren er AV', isCorrect: true },
          { id: 'd', text: 'Transistoren fungerer som en kondensator', isCorrect: false },
        ],
        solution: 'Riktig svar er C. En NPN-transistor krever basisstrøm for å lede. Uten basisstrøm er transistoren «av» – ingen strøm flyter mellom kollektor og emitter. Dette er grunnlaget for å bruke transistorer som elektroniske brytere.',
      },
    },

    // --- NOTE: Komponentoversikt ---
    {
      id: 'tof1-4-4-note-oversikt',
      type: 'note',
      title: 'Oversikt over de fire komponenttypene',
      content: `| Komponent | Funksjon | Analogi |
|---|---|---|
| **Resistor** | Begrenser strøm | Forsnevring i vannrør |
| **Kondensator** | Lagrer ladning/energi | Vannbeholder/tank |
| **Diode** | Slipper strøm én vei | Enveisventil |
| **Transistor** | Forsterker/svitsjer | Vannkran styrt av håndtak |

Alle fire komponentene er grunnleggende byggesteiner som kombineres for å lage komplekse kretser.`,
    },

    // --- OPPSUMMERING ---
    {
      id: 'tof1-4-4-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Elektroniske komponenter

**Resistor:**
- Kontrollert motstand, begrenser strøm
- Fargekode for avlesning av verdi
- Effekttålegrense må overholdes

**Kondensator:**
- Lagrer ladning og energi: $C = Q/U$, $W = \\frac{1}{2}CU^2$
- Tidskonstant: $\\tau = RC$
- Brukes i filtrering, tidskretser og energilagring

**Diode:**
- Slipper strøm i bare én retning
- LED: Diode som lyser, krever forresistans
- Terskelverdi ca. 0,6–0,7 V (silisium)

**Transistor:**
- Forsterker og svitsjer
- NPN: Liten basisstrøm styrer stor kollektorstrøm ($I_C = \\beta \\cdot I_B$)
- Grunnlaget for all digital og analog elektronikk

Disse komponentene danner fundamentet for alt vi skal bygge videre i denne seksjonen.`,
    },

    // --- SAMLEOPPGAVE 5 ---
    {
      id: 'tof1-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal lage en enkel krets med en Arduino (5 V utgang), en grønn LED ($U_{\\text{LED}} = 2{,}1$ V, maks $I = 20$ mA) og en forresistans. a) Tegn et enkelt koblingsskjema (serie: Arduino → resistor → LED → jord). b) Beregn nødvendig motstandsverdi. c) Velg en passende standardverdi (vanlige verdier: 100 Ω, 150 Ω, 180 Ω, 220 Ω, 270 Ω, 330 Ω). d) Beregn den faktiske strømmen med standardverdien.',
        hints: ['Spenningen over motstanden er $U_R = 5{,}0 - 2{,}1 = 2{,}9$ V. Bruk Ohms lov for å finne motstanden. Velg en standardverdi som er litt høyere enn beregnet (for å gi litt lavere strøm enn maks).'],
        solution: 'a) Kretsen kobles i serie: Arduino 5 V → Resistor → Anode(+) LED → Katode(−) LED → GND.\n\nb) $U_R = 5{,}0 - 2{,}1 = 2{,}9$ V.\n$R = U_R / I = 2{,}9 / 0{,}020 = 145$ Ω.\n\nc) Vi velger **150 Ω** (litt over beregnet verdi, gir litt lavere strøm – tryggere for LED-en).\n\nd) $I = U_R / R = 2{,}9 / 150 = 0{,}0193$ A $\\approx 19{,}3$ mA.\nDette er like under maksgrensen på 20 mA – perfekt!',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.5: Mikrokontrollere og Arduino
// ============================================================================

export const CHAPTER_TOF_1_4_5: TextbookChapter = {
  id: 'tof-1-4-5',
  courseId: 'tof-1',
  chapterNumber: '4.5',
  title: 'Mikrokontrollere og Arduino',
  description: 'Arduino-plattformen, oppbygning og grunnleggende bruk.',
  estimatedMinutes: 35,
  prerequisites: ['tof-1-4-4'],
  competenceGoals: ['sette opp og bruke Arduino'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-4-5-intro',
      type: 'text',
      content: `## Mikrokontrollere og Arduino

Hittil har vi jobbet med passive og aktive elektroniske komponenter, men vi har styrt kretsene manuelt – med brytere, potensiometre og faste koblinger. Nå skal vi ta det store steget: å bruke en **mikrokontroller** til å styre elektronikken med **programkode**.

En mikrokontroller er en liten datamaskin på én eneste brikke. Den kan lese signaler fra sensorer, ta beslutninger basert på programmet vi skriver, og styre aktuatorer som lys, motorer og høyttalere. Den mest populære plattformen for læring og prototyping er **Arduino**.

I dette kapittelet lærer du hva en mikrokontroller er, hvordan Arduino-plattformen er bygd opp, og hvordan du skriver og laster opp ditt første program.`,
    },

    // --- TEORI: Hva er en mikrokontroller? ---
    {
      id: 'tof1-4-5-def-mikrokontroller',
      type: 'definition',
      title: 'Mikrokontroller',
      content: `En **mikrokontroller** (forkortet MCU – Microcontroller Unit) er en liten, integrert datamaskin på én enkelt brikke. Den inneholder:

- **Prosessor (CPU):** Utfører instruksjoner fra programmet
- **Flash-minne:** Lagrer programmet (beholdes når strømmen er av)
- **RAM:** Midlertidig arbeidsminne for data under kjøring
- **I/O-pinner:** Digitale og analoge inn- og utganger for kommunikasjon med omverdenen
- **Klokke:** Styrer hastigheten på prosessoren (typisk 8–16 MHz for Arduino)

Til forskjell fra en vanlig datamaskin er en mikrokontroller designet for å kjøre **ett enkelt program** i en uendelig løkke, og den har svært begrenset minne og prosessorkraft – men den er billig, liten og energieffektiv.`,
    },
    {
      id: 'tof1-4-5-text-mikrokontroller',
      type: 'text',
      content: `### Mikrokontrollere i hverdagen

Du er omgitt av mikrokontrollere uten å tenke over det. De finnes i:

- **Hvitevarer:** Vaskemaskin, oppvaskmaskin, mikrobølgeovn
- **Transport:** Bilens motorstyring, ABS-bremser, airbag
- **Underholdning:** Fjernkontroller, spillkontrollere, LED-strips
- **Helse:** Digitale termometre, blodtrykksmålere, insulinpumper
- **Hjemmeautomatisering:** Smarte lyspærer, termostat, dørlåser

En moderne bil kan inneholde over **100 mikrokontrollere** som samarbeider!`,
    },

    // --- TEORI: Arduino-plattformen ---
    {
      id: 'tof1-4-5-def-arduino',
      type: 'definition',
      title: 'Arduino',
      content: `**Arduino** er en åpen kildekode-plattform for elektronikk og programmering. Plattformen består av:

1. **Maskinvare:** Et utviklingskort med en mikrokontroller (vanligvis ATmega328P), USB-tilkobling, spenningsregulator og tilgjengelige pinner.
2. **Programvare (IDE):** Et gratis utviklingsmiljø der du skriver kode, kompilerer og laster opp til kortet via USB.
3. **Programmeringsspråk:** Basert på C/C++ med forenklede funksjoner for å styre maskinvaren.

Det mest brukte kortet for nybegynnere er **Arduino Uno**, som har:
- 14 digitale I/O-pinner (hvorav 6 støtter PWM)
- 6 analoge innganger (A0–A5)
- 5 V driftsspenning
- USB-tilkobling for programmering og strømforsyning
- 32 KB flash-minne for programmet`,
    },

    // --- EKSEMPEL: Oppbygningen av Arduino Uno ---
    {
      id: 'tof1-4-5-example-oppbygging',
      type: 'example',
      title: 'Eksempel: Oppbygningen av Arduino Uno',
      problem: 'Beskriv de viktigste delene på et Arduino Uno-kort og hva de brukes til.',
      solution: `Et Arduino Uno-kort har følgende hoveddeler:

**Strøm og tilkobling:**
- **USB-port:** Kobles til PC for programmering og kan gi 5 V strøm
- **Ekstern strøminngang (barrel jack):** 7–12 V DC for frittstående drift
- **5 V og 3.3 V utganger:** Gir regulert spenning til eksterne komponenter
- **GND-pinner:** Jordtilkobling (referansepunkt for spenning)

**Digitale pinner (0–13):**
- Kan settes som **INPUT** (lese) eller **OUTPUT** (skrive)
- Opererer med to nivåer: **HIGH** (5 V) og **LOW** (0 V)
- Pinne 0 og 1 brukes også til seriell kommunikasjon (TX/RX)
- Pinne merket med **~** (3, 5, 6, 9, 10, 11) støtter PWM-utgang

**Analoge pinner (A0–A5):**
- Leser **analoge spenninger** fra 0 til 5 V
- Konverterer til digitalverdi mellom 0 og 1023 (10-bits oppløsning)
- Kan også brukes som digitale pinner ved behov

**Mikrokontrolleren (ATmega328P):**
- Selve «hjernen» – kjører programmet ditt
- 16 MHz klokkefrekvens, 32 KB flash, 2 KB RAM`,
    },

    // --- OPPGAVE 1 ---
    {
      id: 'tof1-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva inneholder IKKE en mikrokontroller?',
        options: [
          { id: 'a', text: 'Prosessor (CPU)', isCorrect: false },
          { id: 'b', text: 'Flash-minne for programmet', isCorrect: false },
          { id: 'c', text: 'Grafikkort for 3D-grafikk', isCorrect: true },
          { id: 'd', text: 'I/O-pinner for tilkobling', isCorrect: false },
        ],
        solution: 'Riktig svar er C. En mikrokontroller inneholder prosessor, flash-minne, RAM og I/O-pinner, men den har ikke et dedikert grafikkort. Mikrokontrollere er designet for enkel styring og har svært begrenset regnekraft sammenlignet med en vanlig datamaskin.',
      },
    },

    // --- TEORI: Digitale pinner ---
    {
      id: 'tof1-4-5-def-digital',
      type: 'definition',
      title: 'Digitale pinner',
      content: `**Digitale pinner** på Arduino kan ha to tilstander:

- **HIGH** = 5 V (logisk 1)
- **LOW** = 0 V (logisk 0)

Pinnene kan konfigureres som:
- **OUTPUT:** Arduino sender et signal ut (f.eks. tenne en LED)
- **INPUT:** Arduino leser et signal inn (f.eks. lese en knapp)
- **INPUT_PULLUP:** Som INPUT, men med en innebygd pull-up-motstand som holder pinnen HIGH når ingenting er tilkoblet

Funksjoner for digitale pinner:
- \`pinMode(pin, mode)\` – Setter pinnen som INPUT, OUTPUT eller INPUT_PULLUP
- \`digitalWrite(pin, value)\` – Skriver HIGH eller LOW til en utgangs-pinne
- \`digitalRead(pin)\` – Leser tilstanden (HIGH eller LOW) fra en inngangs-pinne`,
    },

    // --- TEORI: Analoge pinner ---
    {
      id: 'tof1-4-5-def-analog',
      type: 'definition',
      title: 'Analoge pinner',
      content: `**Analoge innganger** (A0–A5) bruker en **analog-til-digital-omformer (ADC)** for å lese spenninger mellom 0 V og 5 V.

ADC-en har **10-bits oppløsning**, som betyr:
- 0 V → verdien 0
- 5 V → verdien 1023
- Oppløsning: $\\frac{5{,}0 \\text{ V}}{1024} \\approx 4{,}9 \\text{ mV}$ per steg

Funksjon:
- \`analogRead(pin)\` – Returnerer en heltallsverdi fra 0 til 1023

**Eksempel:** Hvis en sensor gir 2,5 V, leser Arduino:
$$\\text{verdi} = \\frac{2{,}5}{5{,}0} \\times 1023 \\approx 512$$

**Merk:** Arduino Uno har ikke en ekte analog *utgang*. Funksjonen \`analogWrite()\` bruker i stedet **PWM** (pulsbreddemodulasjon) på de digitale pinnene merket med ~.`,
    },

    // --- EKSEMPEL: Blink-programmet ---
    {
      id: 'tof1-4-5-example-blink',
      type: 'example',
      title: 'Eksempel: Blink – ditt første Arduino-program',
      problem: 'Skriv et program som blinker den innebygde LED-en (pinne 13) på Arduino-kortet: 1 sekund på, 1 sekund av.',
      solution: `Her er det klassiske «Blink»-programmet som alle Arduino-nybegynnere starter med:

\`\`\`cpp
// Blink – Ditt første Arduino-program
// Blinker den innebygde LED-en på pinne 13

void setup() {
  // setup() kjøres én gang ved oppstart
  pinMode(13, OUTPUT);  // Sett pinne 13 som utgang
}

void loop() {
  // loop() kjøres om og om igjen, i det uendelige
  digitalWrite(13, HIGH);  // Tenn LED-en (5 V)
  delay(1000);             // Vent 1000 ms = 1 sekund
  digitalWrite(13, LOW);   // Slukk LED-en (0 V)
  delay(1000);             // Vent 1 sekund
}
\`\`\`

**Forklaring av programstrukturen:**
- \`setup()\`: Kjøres **én gang** ved oppstart. Her initialiserer vi pinner og innstillinger.
- \`loop()\`: Kjøres **i en uendelig løkke** etter setup(). Her legger vi hoveddelen av programmet.
- \`pinMode(13, OUTPUT)\`: Konfigurerer pinne 13 som utgang.
- \`digitalWrite(13, HIGH)\`: Setter pinne 13 til 5 V (LED lyser).
- \`delay(1000)\`: Pauser programmet i 1000 millisekunder (1 sekund).

Resultatet: LED-en blinker med 0,5 Hz – én gang per 2 sekunder.`,
    },

    // --- OPPGAVE 2 ---
    {
      id: 'tof1-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'I et Arduino-program kjøres `setup()`-funksjonen:',
        options: [
          { id: 'a', text: 'Mange ganger i sekundet, i en løkke', isCorrect: false },
          { id: 'b', text: 'Bare én gang, helt i starten', isCorrect: true },
          { id: 'c', text: 'Når en knapp trykkes', isCorrect: false },
          { id: 'd', text: 'Aldri – den er valgfri', isCorrect: false },
        ],
        solution: 'Riktig svar er B. `setup()` kjøres bare én gang ved oppstart (eller etter reset). Det er `loop()` som kjøres om og om igjen i en uendelig løkke. `setup()` brukes til å initialisere pinner, seriell kommunikasjon og andre innstillinger.',
      },
    },

    // --- EKSEMPEL: Knapp og LED ---
    {
      id: 'tof1-4-5-example-knapp',
      type: 'example',
      title: 'Eksempel: Styre LED med knapp',
      problem: 'Skriv et program som leser en trykkknapp koblet til pinne 2 (med innebygd pull-up-motstand) og tenner LED-en på pinne 13 når knappen er trykket ned.',
      solution: `\`\`\`cpp
// Knapp-styrt LED
// Knapp på pinne 2 (INPUT_PULLUP), LED på pinne 13

void setup() {
  pinMode(13, OUTPUT);          // LED som utgang
  pinMode(2, INPUT_PULLUP);     // Knapp med innebygd pull-up
}

void loop() {
  int knappStatus = digitalRead(2);  // Les knappen

  if (knappStatus == LOW) {
    // LOW betyr at knappen er trykket (pull-up inverterer logikken)
    digitalWrite(13, HIGH);     // Tenn LED
  } else {
    digitalWrite(13, LOW);      // Slukk LED
  }
}
\`\`\`

**Viktige detaljer:**
- Med \`INPUT_PULLUP\` er pinnen HIGH (5 V) når knappen **ikke** er trykket.
- Når knappen trykkes, kobles pinnen til GND, og den blir LOW (0 V).
- Derfor er logikken **invertert**: \`LOW\` = knappen er trykket.

**Kobling:**
- Knapp: Én side til pinne 2, andre side til GND
- Ingen ekstern motstand nødvendig (den innebygde pull-up-motstanden tar seg av det)`,
    },

    // --- OPPGAVE 3 ---
    {
      id: 'tof1-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Arduino Uno har 6 analoge innganger med 10-bits oppløsning. Hvor mange ulike verdier kan `analogRead()` returnere?',
        options: [
          { id: 'a', text: '10', isCorrect: false },
          { id: 'b', text: '256', isCorrect: false },
          { id: 'c', text: '1024', isCorrect: true },
          { id: 'd', text: '4096', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Med 10-bits oppløsning får vi $2^{10} = 1024$ mulige verdier, fra 0 til 1023. Hvert steg tilsvarer ca. $5{,}0 / 1024 \\approx 4{,}9$ mV. Alternativ B (256) ville vært 8-bits, og D (4096) ville vært 12-bits.',
      },
    },

    // --- TEORI: Seriell kommunikasjon ---
    {
      id: 'tof1-4-5-text-seriell',
      type: 'text',
      content: `### Seriell kommunikasjon – se hva Arduino-en «tenker»

En viktig funksjon for feilsøking og datalogging er **seriell kommunikasjon**. Arduino kan sende tekst og tall til PC-en via USB-kabelen, som du kan lese i **Serial Monitor** i Arduino IDE.

\`\`\`cpp
void setup() {
  Serial.begin(9600);     // Start seriell kommunikasjon med 9600 baud
  Serial.println("Arduino klar!");
}

void loop() {
  int sensorVerdi = analogRead(A0);  // Les analog sensor
  Serial.print("Sensorverdi: ");
  Serial.println(sensorVerdi);       // Skriv verdien til PC
  delay(500);                         // Vent 0,5 sekunder
}
\`\`\`

- \`Serial.begin(9600)\`: Starter kommunikasjonen med en hastighet på 9600 baud (bits per sekund).
- \`Serial.print()\`: Skriver tekst uten linjeskift etter.
- \`Serial.println()\`: Skriver tekst med linjeskift etter.

Seriell Monitor er uvurderlig for å forstå hva programmet gjør, og for å lese sensordata i sanntid.`,
    },

    // --- NOTE: Tips for Arduino-bruk ---
    {
      id: 'tof1-4-5-note-tips',
      type: 'note',
      title: 'Tips for sikker Arduino-bruk',
      content: `**Viktige regler for å unngå skade:**

1. **Bruk alltid forresistans med LED-er** – kobler du en LED direkte til 5 V uten motstand, kan du ødelegge LED-en og Arduino-pinnen.
2. **Ikke trekk mer enn 20 mA fra én pinne** – total maks for alle pinner er 200 mA.
3. **Koble aldri spenning over 5 V til en pinne** – dette kan ødelegge mikrokontrolleren.
4. **Koble fra strøm før du endrer koblinger** – spesielt med motorer og reléer.
5. **Bruk breadboard** – det gjør det enkelt å eksperimentere uten å lodde.
6. **Sjekk koblingene nøye** – en kortslutning kan ødelegge kortet permanent.`,
    },

    // --- OPPSUMMERING ---
    {
      id: 'tof1-4-5-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Mikrokontrollere og Arduino

**Mikrokontroller:**
- Liten datamaskin på én brikke (CPU, minne, I/O)
- Kjører ett program i en uendelig løkke
- Finnes overalt i moderne teknologi

**Arduino-plattformen:**
- Åpen kildekode maskinvare og programvare
- Arduino Uno: 14 digitale pinner, 6 analoge innganger, 5 V, USB
- Programmeres i C/C++ via Arduino IDE

**Programstruktur:**
- \`setup()\` kjøres én gang ved start
- \`loop()\` kjøres i uendelig løkke
- \`pinMode()\`, \`digitalWrite()\`, \`digitalRead()\`, \`analogRead()\`

**Digitale pinner:** HIGH (5 V) eller LOW (0 V) – to tilstander
**Analoge innganger:** 0–1023 (10-bits ADC) – måler spenning 0–5 V
**Seriell kommunikasjon:** Send data til PC for feilsøking og datalogging

I neste kapittel skal vi koble sensorer til Arduino-en og begynne å måle den virkelige verden!`,
    },

    // --- SAMLEOPPGAVE 4 ---
    {
      id: 'tof1-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du vil lage et «trafikklys» med tre LED-er (rød på pinne 8, gul på pinne 9, grønn på pinne 10). Skriv et Arduino-program som gjennomfører en trafikklys-syklus: grønt i 5 sekunder → gult i 2 sekunder → rødt i 5 sekunder → rødt og gult sammen i 1 sekund → grønt igjen (og så videre i loop).',
        hints: ['Bruk `digitalWrite()` og `delay()`. Husk at du må slukke de andre LED-ene før du tenner neste farge.'],
        solution: `\`\`\`cpp
void setup() {
  pinMode(8, OUTPUT);   // Rød LED
  pinMode(9, OUTPUT);   // Gul LED
  pinMode(10, OUTPUT);  // Grønn LED
}

void loop() {
  // Grønt lys (5 sek)
  digitalWrite(8, LOW);
  digitalWrite(9, LOW);
  digitalWrite(10, HIGH);
  delay(5000);

  // Gult lys (2 sek)
  digitalWrite(10, LOW);
  digitalWrite(9, HIGH);
  delay(2000);

  // Rødt lys (5 sek)
  digitalWrite(9, LOW);
  digitalWrite(8, HIGH);
  delay(5000);

  // Rødt + gult (1 sek)
  digitalWrite(9, HIGH);
  delay(1000);
}
\`\`\`

Programmet slår av og på LED-ene i riktig rekkefølge. Etter at \`loop()\` er ferdig, starter den på nytt fra toppen – grønt lys igjen. Syklusen er: grønn (5 s) → gul (2 s) → rød (5 s) → rød+gul (1 s) → (start fra toppen).`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- SAMLEOPPGAVE 5 ---
    {
      id: 'tof1-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar med egne ord forskjellen mellom digitale og analoge pinner på Arduino. Gi et eksempel på en komponent du ville koblet til hver type pinne, og forklar hvorfor.',
        hints: ['Tenk på hva slags signal de forskjellige pinnene håndterer: to tilstander versus mange nivåer.'],
        solution: `**Digitale pinner** håndterer signaler med **to tilstander**: HIGH (5 V) eller LOW (0 V). De passer til komponenter som bare trenger å være av/på:
- En **trykkknapp** (inngang): Enten er den trykket (LOW med pull-up) eller ikke (HIGH).
- En **LED** (utgang): Enten lyser den eller er slukket.

**Analoge innganger** kan lese **mange nivåer** (0–1023) av spenning fra 0 til 5 V. De passer til sensorer med gradvis varierende verdier:
- Et **potensiometer** gir en spenning som varierer fra 0 til 5 V avhengig av posisjonen.
- En **temperatursensor** (f.eks. TMP36) gir en spenning som tilsvarer temperaturen.

Kort sagt: **Digital** = av/på, **analog** = gradvis verdi.`,
        allowsUpload: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.6: Sensorer og målinger
// ============================================================================

export const CHAPTER_TOF_1_4_6: TextbookChapter = {
  id: 'tof-1-4-6',
  courseId: 'tof-1',
  chapterNumber: '4.6',
  title: 'Sensorer og målinger',
  description: 'Temperatursensorer, lyssensorer, avstandssensorer og analoge signaler.',
  estimatedMinutes: 30,
  prerequisites: ['tof-1-4-5'],
  competenceGoals: ['koble til og lese av sensorer'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-4-6-intro',
      type: 'text',
      content: `## Sensorer og målinger

En mikrokontroller alene kan ikke gjøre noe nyttig – den trenger **inndata fra omverdenen**. Det er her sensorer kommer inn. En sensor er en komponent som registrerer en fysisk størrelse (temperatur, lys, avstand, trykk, fuktighet) og omdanner den til et **elektrisk signal** som mikrokontrolleren kan lese.

I dette kapittelet skal du lære om noen av de vanligste sensorene brukt med Arduino: temperatursensor, lyssensor, avstandssensor og potensiometer. Du lærer hvordan de kobles til, hvordan du leser av verdiene, og hvordan du konverterer rå sensordata til meningsfulle fysiske verdier.`,
    },

    // --- TEORI: Hva er en sensor? ---
    {
      id: 'tof1-4-6-def-sensor',
      type: 'definition',
      title: 'Sensor',
      content: `En **sensor** (også kalt **giver** eller **transducer**) er en komponent som konverterer en **fysisk størrelse** til et **elektrisk signal**.

Sensorer kan deles i to hovedtyper ut fra signaltypen:

**Analoge sensorer:**
- Gir en **kontinuerlig spenning** proporsjonal med den fysiske størrelsen
- Leses med \`analogRead()\` (0–1023)
- Eksempler: TMP36 (temperatur), LDR (lys), potensiometer

**Digitale sensorer:**
- Gir data som **digitale verdier** via en kommunikasjonsprotokoll
- Bruker egne biblioteker for avlesning
- Eksempler: DHT11 (temperatur + fuktighet), DS18B20 (temperatur), HC-SR04 (avstand)

**Sensorens overføringsfunksjon** beskriver sammenhengen mellom den fysiske størrelsen og det elektriske signalet, for eksempel: «TMP36 gir 10 mV per °C med en offset på 500 mV.»`,
    },

    // --- EKSEMPEL: Temperatursensor TMP36 ---
    {
      id: 'tof1-4-6-example-tmp36',
      type: 'example',
      title: 'Eksempel: Temperaturmåling med TMP36',
      problem: 'Koble en TMP36 temperatursensor til Arduino og skriv et program som måler og viser temperaturen. TMP36 gir en spenning der $T = (U - 0{,}5) \\times 100$ °C.',
      solution: `**Kobling:**
- TMP36 har tre bein: **Vcc** (5 V), **Vout** (signal), **GND**
- Koble Vcc til 5 V, GND til GND, og Vout til **A0**

**Programkode:**

\`\`\`cpp
// Temperaturmåling med TMP36
// Vout tilkoblet analog pinne A0

void setup() {
  Serial.begin(9600);
  Serial.println("Temperaturmåling med TMP36");
}

void loop() {
  int raVerdi = analogRead(A0);        // Les analog verdi (0-1023)

  // Konverter til spenning
  float spenning = raVerdi * (5.0 / 1024.0);

  // Konverter til temperatur (TMP36-formel)
  float temperatur = (spenning - 0.5) * 100.0;

  Serial.print("Rå verdi: ");
  Serial.print(raVerdi);
  Serial.print("  Spenning: ");
  Serial.print(spenning, 2);
  Serial.print(" V  Temperatur: ");
  Serial.print(temperatur, 1);
  Serial.println(" °C");

  delay(1000);  // Mål hvert sekund
}
\`\`\`

**Forklaring av konverteringen:**
1. \`analogRead(A0)\` gir en verdi 0–1023.
2. Multipliser med $5{,}0 / 1024$ for å få spenningen i volt.
3. TMP36-formelen: $T = (U - 0{,}5) \\times 100$ gir temperaturen i °C.

Ved romtemperatur (ca. 22 °C) vil TMP36 gi ca. 0,72 V, som gir \`analogRead\` ≈ 147.`,
    },

    // --- OPPGAVE 1 ---
    {
      id: 'tof1-4-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En TMP36-sensor gir en spenning på 0,75 V. Hva er temperaturen?',
        options: [
          { id: 'a', text: '7,5 °C', isCorrect: false },
          { id: 'b', text: '15 °C', isCorrect: false },
          { id: 'c', text: '25 °C', isCorrect: true },
          { id: 'd', text: '75 °C', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Vi bruker formelen $T = (U - 0{,}5) \\times 100 = (0{,}75 - 0{,}5) \\times 100 = 0{,}25 \\times 100 = 25$ °C.',
      },
    },

    // --- TEORI: Lyssensor (LDR) ---
    {
      id: 'tof1-4-6-def-ldr',
      type: 'definition',
      title: 'Lyssensor – LDR (Light Dependent Resistor)',
      content: `En **LDR** (lysavhengig motstand) er en sensor der **motstanden endres med lysintensiteten**:

- **Mye lys:** Lav motstand (typisk noen hundre ohm)
- **Mørke:** Høy motstand (typisk flere hundre kilohm)

For å lese en LDR med Arduino lager vi en **spenningsdeler** med en fast motstand:

\`\`\`
5V --- [LDR] --- A0 --- [10 kΩ] --- GND
\`\`\`

Spenningen på A0 avhenger av forholdet mellom LDR-motstanden og den faste motstanden:
$$U_{A0} = 5{,}0 \\times \\frac{R_{\\text{fast}}}{R_{\\text{LDR}} + R_{\\text{fast}}}$$

**Mer lys → lavere $R_{\\text{LDR}}$ → høyere $U_{A0}$ → høyere \`analogRead\`-verdi.**`,
    },
    {
      id: 'tof1-4-6-text-ldr',
      type: 'text',
      content: `### Bruksområder for lyssensorer

Lyssensorer brukes i mange hverdagslige anvendelser:

- **Gatelys:** Tennes automatisk når det blir mørkt
- **Smarttelefoner:** Justerer skjermlysstyrken etter omgivelsene
- **Solcellesystemer:** Sporer solens posisjon for optimal vinkel
- **Sikkerhetssystemer:** Lysbom som registrerer når noe bryter lysstrålen
- **Veksthus:** Styrer kunstig belysning basert på naturlig lys

Med Arduino kan vi enkelt lage slike systemer selv!`,
    },

    // --- EKSEMPEL: LDR-program ---
    {
      id: 'tof1-4-6-example-ldr',
      type: 'example',
      title: 'Eksempel: Automatisk nattlys med LDR',
      problem: 'Skriv et program som leser en LDR koblet til A0 og tenner en LED på pinne 9 når det er mørkt (lav analogverdi).',
      solution: `\`\`\`cpp
// Automatisk nattlys med LDR og LED
// LDR med spenningsdeler på A0, LED på pinne 9

const int LDR_PIN = A0;
const int LED_PIN = 9;
const int MORK_GRENSE = 300;  // Juster etter forholdene

void setup() {
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  int lysVerdi = analogRead(LDR_PIN);

  Serial.print("Lysverdi: ");
  Serial.println(lysVerdi);

  if (lysVerdi < MORK_GRENSE) {
    // Det er mørkt – tenn LED
    digitalWrite(LED_PIN, HIGH);
    Serial.println("Mørkt → LED PÅ");
  } else {
    // Det er lyst – slukk LED
    digitalWrite(LED_PIN, LOW);
    Serial.println("Lyst → LED AV");
  }

  delay(500);
}
\`\`\`

**Forklaring:**
- \`analogRead(A0)\` gir en verdi fra 0 (helt mørkt) til ~1000 (sterkt lys), avhengig av spenningsdeleren.
- Vi sammenligner med en **terskelverdi** (\`MORK_GRENSE\`) og slår på LED-en når verdien er under terskelen.
- Terskelverdien 300 er et utgangspunkt – den må **kalibreres** for de faktiske lysforholdene i rommet.`,
    },

    // --- OPPGAVE 2 ---
    {
      id: 'tof1-4-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-6-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'I en spenningsdeler med en LDR og en 10 kΩ motstand: hva skjer med spenningen som Arduino leser på analoginngangen når det blir lysere?',
        options: [
          { id: 'a', text: 'Spenningen øker fordi LDR-motstanden øker', isCorrect: false },
          { id: 'b', text: 'Spenningen synker fordi LDR-motstanden synker', isCorrect: false },
          { id: 'c', text: 'Spenningen øker fordi LDR-motstanden synker', isCorrect: true },
          { id: 'd', text: 'Spenningen er uendret fordi totalspenningen er 5 V', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Når det blir lysere, synker motstanden i LDR-en. I spenningsdeleren $U_{A0} = 5{,}0 \\times R_{\\text{fast}} / (R_{\\text{LDR}} + R_{\\text{fast}})$ betyr lavere $R_{\\text{LDR}}$ at nevneren blir mindre, og dermed blir $U_{A0}$ høyere.',
      },
    },

    // --- TEORI: Avstandssensor HC-SR04 ---
    {
      id: 'tof1-4-6-def-ultralyd',
      type: 'definition',
      title: 'Ultralydsensor – HC-SR04',
      content: `**HC-SR04** er en populær avstandssensor som bruker **ultralyd** til å måle avstand:

**Virkemåte:**
1. Sensoren sender ut en kort ultralydbølge (40 kHz)
2. Bølgen treffer en gjenstand og reflekteres tilbake
3. Sensoren måler **tiden** det tar før ekkoet kommer tilbake
4. Avstanden beregnes fra tiden og lydhastigheten

**Formelen:**
$$d = \\frac{v \\cdot t}{2}$$

der $v = 343$ m/s (lydhastighet i luft ved 20 °C) og $t$ er tiden for tur-retur.

Vi deler på 2 fordi lyden reiser frem **og** tilbake.

**Tilkobling:**
- **VCC** → 5 V
- **Trig** → Digital pinne (f.eks. pinne 7) – sender triggersignal
- **Echo** → Digital pinne (f.eks. pinne 6) – mottar ekko
- **GND** → GND

**Måleområde:** 2 cm – 400 cm`,
    },

    // --- EKSEMPEL: Avstandsmåling ---
    {
      id: 'tof1-4-6-example-avstand',
      type: 'example',
      title: 'Eksempel: Avstandsmåling med HC-SR04',
      problem: 'Skriv et Arduino-program som måler avstand med en HC-SR04-sensor og skriver resultatet til Serial Monitor.',
      solution: `\`\`\`cpp
// Avstandsmåling med HC-SR04
// Trig på pinne 7, Echo på pinne 6

const int TRIG_PIN = 7;
const int ECHO_PIN = 6;

void setup() {
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);
  Serial.begin(9600);
  Serial.println("Avstandsmåling med HC-SR04");
}

void loop() {
  // Send en 10 µs puls på Trig
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);
  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  // Mål varigheten av Echo-pulsen (i mikrosekunder)
  long varighet = pulseIn(ECHO_PIN, HIGH);

  // Beregn avstand i cm
  // Lydhastighet ≈ 343 m/s = 0,0343 cm/µs
  // Avstand = (tid × hastighet) / 2
  float avstand = varighet * 0.0343 / 2.0;

  Serial.print("Avstand: ");
  Serial.print(avstand, 1);
  Serial.println(" cm");

  delay(200);
}
\`\`\`

**Forklaring:**
1. Vi sender en kort puls (10 µs) på Trig-pinnen for å starte målingen.
2. \`pulseIn(ECHO_PIN, HIGH)\` måler hvor lenge Echo-pinnen er HIGH – dette er tur-retur-tiden i mikrosekunder.
3. Vi konverterer med $d = t \\times 0{,}0343 / 2$ for å få avstanden i cm.

**Eksempel:** Hvis objektet er 20 cm unna: $t = 2 \\times 20 / 0{,}0343 \\approx 1166$ µs. Programmet beregner: $1166 \\times 0{,}0343 / 2 \\approx 20{,}0$ cm.`,
    },

    // --- OPPGAVE 3 ---
    {
      id: 'tof1-4-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-6-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En HC-SR04-sensor måler at ultralydbølgen bruker 1160 µs (tur-retur). Lydhastigheten er 343 m/s. Hva er avstanden til objektet?',
        options: [
          { id: 'a', text: 'Ca. 10 cm', isCorrect: false },
          { id: 'b', text: 'Ca. 20 cm', isCorrect: true },
          { id: 'c', text: 'Ca. 40 cm', isCorrect: false },
          { id: 'd', text: 'Ca. 200 cm', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Avstanden er $d = v \\cdot t / 2 = 343 \\cdot (1160 \\times 10^{-6}) / 2 = 343 \\cdot 0{,}00116 / 2 \\approx 0{,}199$ m $\\approx 20$ cm. Vi deler på 2 fordi lyden reiser frem og tilbake.',
      },
    },

    // --- TEORI: Analog-til-digital-konvertering ---
    {
      id: 'tof1-4-6-text-adc',
      type: 'text',
      content: `### Analog-til-digital-konvertering og presisjon

Når vi leser analoge sensorer med Arduino, foregår en **analog-til-digital-konvertering (ADC)**. Det er viktig å forstå begrensningene:

**Oppløsning:**
Arduino Uno har 10-bits ADC som gir $2^{10} = 1024$ steg mellom 0 V og 5 V. Hvert steg tilsvarer:
$$\\Delta U = \\frac{5{,}0 \\text{ V}}{1024} \\approx 4{,}9 \\text{ mV}$$

**For TMP36:** Sensoren gir 10 mV/°C, men ADC-ens oppløsning er ca. 4,9 mV. Det betyr at den minste temperaturendringen vi kan registrere er omtrent $0{,}49$ °C – altså ca. en halv grad.

**Støy og midling:** Analoge avlesninger kan variere noen steg på grunn av elektrisk støy. For mer stabile avlesninger kan vi ta **gjennomsnittet av flere målinger**:

\`\`\`cpp
int lesStabil(int pin, int antall) {
  long sum = 0;
  for (int i = 0; i < antall; i++) {
    sum += analogRead(pin);
    delay(10);
  }
  return sum / antall;
}
\`\`\`

Å ta gjennomsnittet av f.eks. 10 målinger gir vesentlig mer stabile resultater.`,
    },

    // --- NOTE: Vanlige sensorer ---
    {
      id: 'tof1-4-6-note-sensorer',
      type: 'note',
      title: 'Oversikt over vanlige Arduino-sensorer',
      content: `| Sensor | Måler | Type | Tilkobling |
|---|---|---|---|
| **TMP36** | Temperatur | Analog | A0–A5 |
| **LDR** | Lys | Analog (spenningsdeler) | A0–A5 |
| **HC-SR04** | Avstand | Digital (puls) | Digitale pinner |
| **DHT11** | Temp. + fuktighet | Digital (protokoll) | Digital pinne |
| **Potensiometer** | Posisjon/vinkel | Analog | A0–A5 |
| **Piezo** | Vibrasjon/trykk | Analog | A0–A5 |
| **IR-sensor** | Nærhet/fjernkontroll | Digital | Digital pinne |
| **Jordfuktighet** | Vanninnhold i jord | Analog | A0–A5 |`,
    },

    // --- OPPSUMMERING ---
    {
      id: 'tof1-4-6-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Sensorer og målinger

**Sensorer** konverterer fysiske størrelser til elektriske signaler:
- **Analoge sensorer** (TMP36, LDR, potensiometer) gir varierende spenning → \`analogRead()\`
- **Digitale sensorer** (HC-SR04, DHT11) kommuniserer med egne protokoller

**Temperatursensor (TMP36):**
- Gir 10 mV/°C med 500 mV offset
- Formel: $T = (U - 0{,}5) \\times 100$ °C

**Lyssensor (LDR):**
- Motstanden endres med lysintensiteten
- Kobles i spenningsdeler med fast motstand
- Mer lys → lavere motstand → høyere \`analogRead\`-verdi

**Avstandssensor (HC-SR04):**
- Bruker ultralyd (lydbølger) til å måle avstand
- $d = v \\cdot t / 2$ der $v = 343$ m/s
- Rekkevidde 2–400 cm

**ADC-begrensninger:**
- 10-bits oppløsning: 4,9 mV per steg
- Midling av flere målinger reduserer støy

I neste kapittel skal vi se på **aktuatorer** – komponentene som lar Arduino-en påvirke den fysiske verden!`,
    },

    // --- SAMLEOPPGAVE 4 ---
    {
      id: 'tof1-4-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du bygger en enkel værstasjon med Arduino. Du har en TMP36 temperatursensor (koblet til A0) og en LDR med 10 kΩ motstand (koblet til A1). Skriv et program som leser begge sensorene hvert 2. sekund og skriver resultatene til Serial Monitor i formatet: «Temperatur: XX.X °C  |  Lysverdi: XXX».',
        hints: ['Bruk `analogRead()` for begge sensorer. Husk TMP36-formelen: $T = (U - 0{,}5) \\times 100$. For LDR holder det å skrive råverdien (0–1023).'],
        solution: `\`\`\`cpp
// Enkel værstasjon – temperatur og lys

void setup() {
  Serial.begin(9600);
  Serial.println("Værstasjon startet!");
  Serial.println("-------------------");
}

void loop() {
  // Les temperatursensor (TMP36 på A0)
  int tempRa = analogRead(A0);
  float spenning = tempRa * (5.0 / 1024.0);
  float temperatur = (spenning - 0.5) * 100.0;

  // Les lyssensor (LDR på A1)
  int lysVerdi = analogRead(A1);

  // Skriv ut resultatene
  Serial.print("Temperatur: ");
  Serial.print(temperatur, 1);
  Serial.print(" °C  |  Lysverdi: ");
  Serial.println(lysVerdi);

  delay(2000);  // Vent 2 sekunder
}
\`\`\`

Programmet bruker \`analogRead()\` til å lese begge sensorene. TMP36-verdien konverteres til temperatur via formelen, mens LDR-verdien skrives ut som rå analogverdi (0–1023). Utskriften oppdateres hvert 2. sekund.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- SAMLEOPPGAVE 5 ---
    {
      id: 'tof1-4-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Arduino-ens ADC har 10-bits oppløsning (0–1023) og referansespenning 5,0 V. a) Beregn spenningen per ADC-steg. b) TMP36 gir 10 mV per °C. Hva er den minste temperaturendringen Arduino kan registrere? c) Forklar én metode for å forbedre presisjonen uten å bytte maskinvare.',
        hints: ['a) Del referansespenningen på antall steg. b) Sammenlikn ADC-steget med sensorens følsomhet. c) Tenk på midling (gjennomsnitt).'],
        solution: `**a) Spenning per ADC-steg:**
$$\\Delta U = \\frac{5{,}0 \\text{ V}}{1024} \\approx 4{,}88 \\text{ mV}$$

**b) Minste registrerbare temperaturendring:**
TMP36 gir 10 mV/°C. Siden Arduino-en bare kan skille mellom trinn på 4,88 mV:
$$\\Delta T = \\frac{4{,}88 \\text{ mV}}{10 \\text{ mV/°C}} \\approx 0{,}49 \\text{ °C}$$

Arduino kan altså registrere temperaturendringer ned til ca. **0,5 °C**.

**c) Metode for å forbedre presisjonen:**
**Oversampling med midling:** Ved å ta gjennomsnittet av mange målinger (f.eks. 64 avlesninger) kan vi effektivt øke oppløsningen. Tilfeldig støy gjør at avlesningene varierer rundt den «sanne» verdien, og ved midling midler vi bort støyen. Med 64 avlesninger kan vi oppnå ca. 13-bits effektiv oppløsning. Alternativt kan man bruke Arduinos innebygde 1,1 V referansespenning (\`analogReference(INTERNAL)\`) for å øke oppløsningen for lave spenninger.`,
        allowsUpload: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.7: Aktuatorer og styring
// ============================================================================

export const CHAPTER_TOF_1_4_7: TextbookChapter = {
  id: 'tof-1-4-7',
  courseId: 'tof-1',
  chapterNumber: '4.7',
  title: 'Aktuatorer og styring',
  description: 'Motorer, servoer, reléer og styring av fysiske enheter.',
  estimatedMinutes: 30,
  prerequisites: ['tof-1-4-6'],
  competenceGoals: ['styre aktuatorer med mikrokontroller'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-4-7-intro',
      type: 'text',
      content: `## Aktuatorer og styring

I forrige kapittel lærte du å lese **sensorer** – å hente informasjon inn til mikrokontrolleren. Nå skal vi se på den andre siden: **aktuatorer** – komponenter som lar mikrokontrolleren **påvirke den fysiske verden**.

En aktuator er det motsatte av en sensor: den omdanner et elektrisk signal til en fysisk handling. LED-en du allerede har brukt er en enkel aktuator (lys), men i dette kapittelet utforsker vi mer kraftfulle aktuatorer: **motorer**, **servoer** og **reléer**. Vi lærer også om **PWM** – en teknikk som lar Arduino-en styre hastighet og intensitet gradvis.`,
    },

    // --- TEORI: Hva er en aktuator? ---
    {
      id: 'tof1-4-7-def-aktuator',
      type: 'definition',
      title: 'Aktuator',
      content: `En **aktuator** er en komponent som konverterer et **elektrisk signal** til en **fysisk handling**.

Vanlige aktuatorer i elektronikkprosjekter:

| Aktuator | Fysisk handling | Eksempel |
|---|---|---|
| **LED** | Lys | Statusindikator, belysning |
| **DC-motor** | Rotasjon (kontinuerlig) | Vifte, hjul på robot |
| **Servomotor** | Rotasjon (presis vinkel) | Robotarm, styring |
| **Stepper-motor** | Rotasjon (steg for steg) | 3D-printer, CNC |
| **Relé** | Svitsj for høy spenning | Styre 230 V-apparater |
| **Buzzer** | Lyd | Alarm, melodi |
| **Solenoid** | Lineær bevegelse | Dørlås, ventil |

**Viktig:** De fleste aktuatorer trekker mer strøm enn Arduino kan levere fra sine pinner (maks 20 mA per pinne). Vi trenger derfor ofte **driverkretser** – transistorer, motordrivere eller reléer – for å koble Arduino til større aktuatorer.`,
    },

    // --- TEORI: PWM (pulsbreddemodulasjon) ---
    {
      id: 'tof1-4-7-def-pwm',
      type: 'definition',
      title: 'PWM – Pulsbreddemodulasjon',
      content: `**PWM (Pulse Width Modulation)** er en teknikk der Arduino svitsjer en digital pinne raskt mellom HIGH og LOW for å simulere en analog utgang.

**Nøkkelbegreper:**
- **Duty cycle:** Andelen av tiden signalet er HIGH (i prosent)
  - 0 % = alltid LOW (0 V effektivt)
  - 50 % = halvparten HIGH, halvparten LOW (≈ 2,5 V effektivt)
  - 100 % = alltid HIGH (5 V effektivt)
- **Frekvens:** Arduino-ens PWM-frekvens er ca. 490 Hz (pinnene 3, 9, 10, 11) eller 980 Hz (pinnene 5, 6)

**I Arduino brukes \`analogWrite(pin, verdi)\`:**
- \`verdi\` er mellom 0 og 255 (8-bit)
- 0 = 0 % duty cycle (av)
- 127 = ca. 50 % duty cycle
- 255 = 100 % duty cycle (full effekt)

**Bare pinnene merket med ~ (3, 5, 6, 9, 10, 11)** støtter PWM!`,
    },

    // --- EKSEMPEL: LED-dimming med PWM ---
    {
      id: 'tof1-4-7-example-pwm-led',
      type: 'example',
      title: 'Eksempel: Gradvis dimming av LED med PWM',
      problem: 'Skriv et program som gradvis øker og senker lysstyrken til en LED koblet til pinne 9 (PWM-pinne), slik at den «puster» – langsomt lyser opp og fader ut.',
      solution: `\`\`\`cpp
// «Pustende» LED med PWM
// LED med forresistans på pinne 9

const int LED_PIN = 9;

void setup() {
  pinMode(LED_PIN, OUTPUT);
}

void loop() {
  // Øk lysstyrken gradvis (0 → 255)
  for (int lysstyrke = 0; lysstyrke <= 255; lysstyrke++) {
    analogWrite(LED_PIN, lysstyrke);
    delay(10);  // 10 ms mellom hvert steg
  }

  // Senk lysstyrken gradvis (255 → 0)
  for (int lysstyrke = 255; lysstyrke >= 0; lysstyrke--) {
    analogWrite(LED_PIN, lysstyrke);
    delay(10);
  }
}
\`\`\`

**Forklaring:**
- \`analogWrite(9, 0)\` = LED av (0 % duty cycle)
- \`analogWrite(9, 127)\` = halv lysstyrke (ca. 50 %)
- \`analogWrite(9, 255)\` = full lysstyrke (100 %)

Hvert steg tar 10 ms. Med 256 steg opp og 256 steg ned tar én syklus ca. $512 \\times 10$ ms $= 5{,}12$ sekunder.

PWM-signalet svitsjer så raskt (490 Hz) at øyet oppfatter det som en jevn, dimmbar lysstyrke – ikke blinking.`,
    },

    // --- OPPGAVE 1 ---
    {
      id: 'tof1-4-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva gjør `analogWrite(9, 127)` på en Arduino?',
        options: [
          { id: 'a', text: 'Leser en analog spenning på pinne 9', isCorrect: false },
          { id: 'b', text: 'Setter pinne 9 til nøyaktig 2,5 V', isCorrect: false },
          { id: 'c', text: 'Sender et PWM-signal med ca. 50 % duty cycle på pinne 9', isCorrect: true },
          { id: 'd', text: 'Kobler en 127 Ω motstand inn på pinne 9', isCorrect: false },
        ],
        solution: 'Riktig svar er C. `analogWrite()` lager et PWM-signal. Verdien 127 (av 255) tilsvarer ca. 50 % duty cycle. Pinnen svitsjer raskt mellom 0 V og 5 V, men den gjennomsnittlige effekten tilsvarer omtrent 2,5 V. Alternativ B er feil fordi Arduino ikke har en ekte analog utgang – den bruker PWM.',
      },
    },

    // --- TEORI: Servomotor ---
    {
      id: 'tof1-4-7-def-servo',
      type: 'definition',
      title: 'Servomotor',
      content: `En **servomotor** (servo) er en motor som kan dreie til en **spesifikk vinkel** (vanligvis 0°–180°) og holde seg der.

**Oppbygning:**
- DC-motor med gir (for dreiemoment)
- Potensiometer (for posisjonsmåling)
- Styrekrets (sammenligner ønsket og faktisk posisjon)

**Styring fra Arduino:**
- Bruker \`Servo\`-biblioteket (inkludert i Arduino IDE)
- Signal: PWM-puls med varierende bredde (typisk 1–2 ms)
- \`servo.write(vinkel)\` – dreier til angitt vinkel (0–180)
- \`servo.attach(pin)\` – kobler servoen til en pinne

**Kobling:**
- **Rød ledning:** 5 V (strøm)
- **Brun/svart ledning:** GND
- **Oransje/gul ledning:** Signal (digital pinne)

**Viktig:** Servoer kan trekke mye strøm (opptil 500 mA). Ved bruk av flere servoer bør du bruke en **ekstern strømforsyning** i stedet for Arduinos 5 V-pinne.`,
    },

    // --- EKSEMPEL: Servo ---
    {
      id: 'tof1-4-7-example-servo',
      type: 'example',
      title: 'Eksempel: Styre en servomotor med potensiometer',
      problem: 'Skriv et program som bruker et potensiometer (på A0) til å styre vinkelen på en servomotor (på pinne 9). Når du dreier potensiometeret, skal servoen følge etter.',
      solution: `\`\`\`cpp
// Servo styrt av potensiometer
// Potensiometer på A0, servo på pinne 9

#include <Servo.h>

Servo minServo;

void setup() {
  minServo.attach(9);     // Koble servo til pinne 9
  Serial.begin(9600);
}

void loop() {
  int potVerdi = analogRead(A0);         // Les potensiometer (0-1023)
  int vinkel = map(potVerdi, 0, 1023, 0, 180);  // Konverter til vinkel

  minServo.write(vinkel);                // Drei servoen
  Serial.print("Vinkel: ");
  Serial.println(vinkel);

  delay(20);  // Kort pause for stabil drift
}
\`\`\`

**Forklaring:**
- \`analogRead(A0)\` gir en verdi 0–1023 fra potensiometeret.
- \`map(potVerdi, 0, 1023, 0, 180)\` konverterer lineært fra området 0–1023 til 0–180.
- \`minServo.write(vinkel)\` dreier servoen til den beregnede vinkelen.
- \`map()\`-funksjonen er svært nyttig for å konvertere mellom ulike verdiområder.`,
    },

    // --- OPPGAVE 2 ---
    {
      id: 'tof1-4-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-7-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor bør du bruke en ekstern strømforsyning når du kobler flere servoer til Arduino?',
        options: [
          { id: 'a', text: 'Fordi servoer trenger 12 V som Arduino ikke kan levere', isCorrect: false },
          { id: 'b', text: 'Fordi servoer trekker mer strøm enn Arduino kan levere via USB/regulator', isCorrect: true },
          { id: 'c', text: 'Fordi servoer ødelegger Arduino-en uten ekstern strøm', isCorrect: false },
          { id: 'd', text: 'Fordi servoer bare fungerer med batteridrift', isCorrect: false },
        ],
        solution: 'Riktig svar er B. En enkelt servo kan trekke opptil 500 mA, og flere servoer sammen kan lett overstige hva Arduino kan levere via USB (typisk 500 mA totalt). For mange servoer eller motorer bør du bruke en ekstern 5 V strømforsyning koblet direkte til servoene, med felles GND med Arduino.',
      },
    },

    // --- TEORI: Relé ---
    {
      id: 'tof1-4-7-def-rele',
      type: 'definition',
      title: 'Relé',
      content: `Et **relé** er en elektromekanisk bryter som lar et laveffekts styresignal (f.eks. 5 V fra Arduino) kontrollere en **høyeffekts krets** (f.eks. 230 V lysarmatur eller 12 V motor).

**Virkemåte:**
1. Arduino sender et signal (HIGH/LOW) til relémodulen
2. En elektromagnet i reléet tiltrekker en mekanisk bryter
3. Bryteren kobler eller bryter den eksterne kretsen

**Typisk relémodul for Arduino:**
- **Styrespenning:** 5 V (fra Arduino)
- **Svitsjkapasitet:** 10 A ved 250 V AC eller 30 V DC
- **Inngangspinner:** VCC, GND, IN (styresignal)
- **Utgangsterminaler:** COM (felles), NO (normalt åpen), NC (normalt lukket)

**NO (Normally Open):** Kretsen er **brutt** når reléet er av. Arduino slår den PÅ.
**NC (Normally Closed):** Kretsen er **sluttet** når reléet er av. Arduino slår den AV.

**ADVARSEL:** Arbeid med nettspenning (230 V) er **livsfarlig**. Bare kvalifiserte personer bør koble til nettspenning!`,
    },
    {
      id: 'tof1-4-7-text-rele',
      type: 'text',
      content: `### Bruksområder for reléer

Reléer brukes når Arduino skal styre enheter som krever mer strøm eller høyere spenning enn hva Arduino selv kan levere:

- **Belysning:** Styre rombelysning basert på bevegelsessensor
- **Varmeelement:** Slå på/av en varmeovn basert på temperatursensor
- **Vannpumpe:** Styre vanning av planter basert på jordfuktighet
- **Ventilasjon:** Styre en vifte basert på CO₂-nivå eller temperatur
- **Dørlås:** Åpne en elektrisk lås når riktig kode tastes inn

Relémoduler for Arduino er billige og enkle å bruke. Mange relémoduler har en innebygd LED som viser om reléet er aktivert, og en optokobler for å beskytte Arduino mot spenningstopper.`,
    },

    // --- EKSEMPEL: DC-motor med transistor ---
    {
      id: 'tof1-4-7-example-motor',
      type: 'example',
      title: 'Eksempel: Styre DC-motor med transistor og PWM',
      problem: 'En liten DC-motor trekker 150 mA ved 5 V – for mye for en Arduino-pinne (maks 20 mA). Vis hvordan du bruker en NPN-transistor som driver, og skriv et program som styrer motorhastigheten med PWM.',
      solution: `**Kobling:**
\`\`\`
Arduino pinne 9 --- [1 kΩ] --- Basis (B)
                                Kollektor (C) --- Motor --- 5 V
                                Emitter (E) --- GND
\`\`\`
Legg til en **frittgående diode** (flyback diode) parallelt over motoren for å beskytte mot spenningstopper når motoren slås av.

**Programkode:**

\`\`\`cpp
// Motorhastighet styrt med PWM via transistor
// Motor driver-transistor på pinne 9 (PWM)

const int MOTOR_PIN = 9;

void setup() {
  pinMode(MOTOR_PIN, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  // Stopp
  Serial.println("Motor: STOPP");
  analogWrite(MOTOR_PIN, 0);
  delay(2000);

  // Sakte (25 % hastighet)
  Serial.println("Motor: SAKTE (25%)");
  analogWrite(MOTOR_PIN, 64);
  delay(3000);

  // Medium (50 % hastighet)
  Serial.println("Motor: MEDIUM (50%)");
  analogWrite(MOTOR_PIN, 127);
  delay(3000);

  // Full fart (100 %)
  Serial.println("Motor: FULL FART (100%)");
  analogWrite(MOTOR_PIN, 255);
  delay(3000);
}
\`\`\`

**Forklaring:**
- Arduino sender et PWM-signal til basisen av transistoren via en 1 kΩ motstand.
- Transistoren fungerer som en «variabel bryter» som slipper gjennom strøm proporsjonal med PWM-signalet.
- \`analogWrite(MOTOR_PIN, 64)\` gir ca. 25 % hastighet, 127 gir ca. 50 %, osv.
- **Flyback-dioden** er kritisk: Når en motor slås av, genererer den en spenningstopp som kan ødelegge transistoren.`,
    },

    // --- OPPGAVE 3 ---
    {
      id: 'tof1-4-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-7-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er forskjellen mellom en vanlig DC-motor og en servomotor?',
        options: [
          { id: 'a', text: 'DC-motor roterer til en bestemt vinkel; servo roterer kontinuerlig', isCorrect: false },
          { id: 'b', text: 'DC-motor roterer kontinuerlig; servo dreier til en bestemt vinkel og holder seg der', isCorrect: true },
          { id: 'c', text: 'De er identiske, bare med ulike navn', isCorrect: false },
          { id: 'd', text: 'DC-motor bruker vekselstrøm; servo bruker likestrøm', isCorrect: false },
        ],
        solution: 'Riktig svar er B. En vanlig DC-motor roterer kontinuerlig så lenge den har strøm (bra for hjul, vifter). En servomotor har innebygd posisjonsregulering og dreier til en bestemt vinkel (0-180 grader) og holder seg der (bra for robotarmer, styremekanismer).',
      },
    },

    // --- NOTE: Sikkerhet ---
    {
      id: 'tof1-4-7-note-sikkerhet',
      type: 'note',
      title: 'Sikkerhet med aktuatorer',
      content: `**Viktige sikkerhetsregler:**

1. **Strømbegrensning:** Koble aldri en motor direkte til en Arduino-pinne. Bruk alltid en transistor, motordriver eller relé som mellomledd.
2. **Flyback-diode:** Bruk alltid en diode parallelt over motorer og spoler (reléer) for å fange opp spenningstopper.
3. **Ekstern strømforsyning:** Motorer og servoer bør ha egen strømforsyning med felles GND med Arduino.
4. **Nettspenning:** Arbeid **ALDRI** med 230 V uten godkjent utstyr og veiledning av fagperson.
5. **Mekanisk sikkerhet:** Motorer og servoer kan klemme og skade. Hold fingrene unna bevegelige deler.
6. **Varmeutvikling:** Motordrivere og transistorer kan bli varme. Sørg for tilstrekkelig kjøling.`,
    },

    // --- OPPSUMMERING ---
    {
      id: 'tof1-4-7-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Aktuatorer og styring

**Aktuatorer** omdanner elektriske signaler til fysiske handlinger:
- **LED:** Lys (enkleste aktuator)
- **DC-motor:** Kontinuerlig rotasjon (vifte, hjul)
- **Servomotor:** Presis vinkel 0–180° (robotarm, styremekanisme)
- **Relé:** Bryter for høy spenning/strøm (230 V apparater)

**PWM (Pulsbreddemodulasjon):**
- Simulerer analog utgang på digitale pinner
- \`analogWrite(pin, 0–255)\` styrer duty cycle
- Bare pinner merket ~ støtter PWM (3, 5, 6, 9, 10, 11)

**Driverkretser:**
- Arduino-pinner tåler maks 20 mA
- Transistorer, motordrivere og reléer kobler Arduino til kraftige aktuatorer
- Flyback-diode beskytter mot spenningstopper fra motorer og spoler

**Sensor + mikrokontroller + aktuator** danner grunnlaget for alle styringssystemer: les omgivelsene, ta beslutninger, utfør handlinger.

I neste kapittel samler vi alt i et komplett prosjekt!`,
    },

    // --- SAMLEOPPGAVE 4 ---
    {
      id: 'tof1-4-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du vil bygge en automatisk vifte som slår seg på når temperaturen overstiger 25 °C. Du har en TMP36-sensor (på A0), en DC-motor koblet via transistor (på pinne 9), og en LED for statusvisning (på pinne 13). Skriv et Arduino-program som: a) Leser temperaturen hvert sekund. b) Slår på motoren og tenner LED-en når temperaturen er over 25 °C. c) Slår av motoren og slukker LED-en når temperaturen er 25 °C eller lavere. d) Skriver temperaturen og viftestatus til Serial Monitor.',
        hints: ['Kombiner koden fra temperatursensor-eksempelet med digital utgang for motor og LED. Husk å konvertere analog avlesning til temperatur først.'],
        solution: `\`\`\`cpp
// Automatisk vifte med temperaturstyring
// TMP36 på A0, motor via transistor på pinne 9, LED på pinne 13

const int TEMP_PIN = A0;
const int MOTOR_PIN = 9;
const int LED_PIN = 13;
const float TEMP_GRENSE = 25.0;

void setup() {
  pinMode(MOTOR_PIN, OUTPUT);
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(9600);
  Serial.println("Automatisk vifte startet!");
}

void loop() {
  // Les temperatur
  int raVerdi = analogRead(TEMP_PIN);
  float spenning = raVerdi * (5.0 / 1024.0);
  float temperatur = (spenning - 0.5) * 100.0;

  Serial.print("Temp: ");
  Serial.print(temperatur, 1);
  Serial.print(" °C  Vifte: ");

  if (temperatur > TEMP_GRENSE) {
    digitalWrite(MOTOR_PIN, HIGH);
    digitalWrite(LED_PIN, HIGH);
    Serial.println("PÅ");
  } else {
    digitalWrite(MOTOR_PIN, LOW);
    digitalWrite(LED_PIN, LOW);
    Serial.println("AV");
  }

  delay(1000);
}
\`\`\`

Programmet leser TMP36-sensoren, konverterer til temperatur, og styrer motoren og LED-en basert på terskelverdien 25 °C. Alt logges til Serial Monitor for overvåking.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- SAMLEOPPGAVE 5 ---
    {
      id: 'tof1-4-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar med egne ord hva PWM er og hvordan det fungerer. Inkluder: a) Hva duty cycle betyr. b) Hvorfor PWM kan brukes til å dimme en LED, selv om signalet bare er 0 V eller 5 V. c) Hva `analogWrite(9, 191)` gjør – beregn duty cycle i prosent og gjennomsnittlig spenning.',
        hints: ['Duty cycle er andelen av tiden signalet er HIGH. Det menneskelige øyet oppfatter gjennomsnittlig lysstyrke.'],
        solution: `**PWM (Pulsbreddemodulasjon)** er en teknikk der Arduino raskt veksler en digital pinne mellom HIGH (5 V) og LOW (0 V). Ved å justere forholdet mellom tiden pinnen er HIGH og LOW, kan vi styre gjennomsnittlig effekt.

**a) Duty cycle** er andelen av tiden signalet er HIGH, uttrykt i prosent. 0 % = alltid LOW, 50 % = like lenge HIGH og LOW, 100 % = alltid HIGH.

**b) LED og PWM:** Selv om signalet bare er 0 V eller 5 V, svitsjer det med ca. 490 Hz – altfor raskt for øyet å registrere. Øyet oppfatter **gjennomsnittlig lysstyrke**. Med 50 % duty cycle oppfattes LED-en som halvparten så lys som ved 100 %.

**c) \`analogWrite(9, 191)\`:**
- Duty cycle: $\\frac{191}{255} \\times 100\\% \\approx 74{,}9\\%$
- Gjennomsnittlig spenning: $\\frac{191}{255} \\times 5{,}0 \\text{ V} \\approx 3{,}75 \\text{ V}$
- LED-en lyser med ca. 75 % av full lysstyrke.`,
        allowsUpload: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.8: Prosjektarbeid med elektronikk
// ============================================================================

export const CHAPTER_TOF_1_4_8: TextbookChapter = {
  id: 'tof-1-4-8',
  courseId: 'tof-1',
  chapterNumber: '4.8',
  title: 'Prosjektarbeid med elektronikk',
  description: 'Planlegging, bygging og dokumentasjon av elektronikkprosjekter.',
  estimatedMinutes: 30,
  prerequisites: ['tof-1-4-7'],
  competenceGoals: ['gjennomføre et elektronikkprosjekt'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-4-8-intro',
      type: 'text',
      content: `## Prosjektarbeid med elektronikk

I de foregående kapitlene har du lært om grunnleggende elektrisitet, Ohms lov, koblinger, komponenter, mikrokontrollere, sensorer og aktuatorer. Nå er det tid for å **sette alt sammen** i et prosjekt.

Prosjektarbeid er en sentral del av teknologi og forskningslære. Det handler ikke bare om å bygge noe som fungerer – det handler like mye om å **planlegge systematisk**, **dokumentere prosessen** og **reflektere over resultatet**. I dette kapittelet lærer du en strukturert tilnærming til elektronikkprosjekter, fra idé til ferdig produkt.`,
    },

    // --- TEORI: Prosjektfaser ---
    {
      id: 'tof1-4-8-def-faser',
      type: 'definition',
      title: 'Prosjektfasene',
      content: `Et elektronikkprosjekt følger typisk **fem faser**:

**1. Idé og kravspesifikasjon**
- Hva skal prosjektet gjøre?
- Hvilke sensorer og aktuatorer trengs?
- Hvilke begrensninger finnes (budsjett, tid, tilgjengelig utstyr)?

**2. Design og planlegging**
- Lag et **blokkdiagram** som viser systemets hoveddeler
- Tegn et **koblingsskjema** med alle komponenter
- Skriv **pseudokode** for programmet (logikken i klartekst)

**3. Prototyping og bygging**
- Bygg kretsen på **breadboard** (loddefri montering)
- Skriv og test programkoden **trinnvis** (én funksjon om gangen)
- Test og feilsøk underveis

**4. Testing og forbedring**
- Test at alle funksjoner fungerer som planlagt
- Mål ytelse og presisjon
- Gjør forbedringer basert på testresultatene

**5. Dokumentasjon og presentasjon**
- Skriv en prosjektrapport
- Dokumenter koblingsskjema, kode og resultater
- Reflekter over hva som fungerte og hva du ville gjort annerledes`,
    },

    // --- TEORI: Blokkdiagram ---
    {
      id: 'tof1-4-8-text-blokk',
      type: 'text',
      content: `### Blokkdiagram – den store oversikten

Et **blokkdiagram** er en forenklet tegning som viser hoveddelene i prosjektet og hvordan de henger sammen. Det gir deg oversikt før du går inn i detaljene.

**Eksempel – automatisk plantevanner:**

\`\`\`
[Jordfuktighets-  ] ──→ [Arduino Uno] ──→ [Vannpumpe   ]
[   sensor (A0)   ]     [            ]     [(via relé)  ]
                         [            ]
[LCD-display      ] ←── [            ] ──→ [LED (status)]
[(I2C: SDA, SCL)  ]     [            ]     [(pinne 13)  ]
\`\`\`

Blokkdiagrammet viser at:
- **Inngang:** Jordfuktighetssensor sender data til Arduino
- **Prosessering:** Arduino leser sensoren og tar beslutninger
- **Utgang:** Vannpumpe (via relé), LED og LCD-display

Start alltid med blokkdiagrammet – det hjelper deg å forstå helheten og identifisere hvilke komponenter du trenger.`,
    },

    // --- EKSEMPEL: Planlegge et prosjekt ---
    {
      id: 'tof1-4-8-example-plan',
      type: 'example',
      title: 'Eksempel: Planlegge et «smart romovervåker»-prosjekt',
      problem: 'Du vil lage et system som måler temperatur og lysnivå i et rom, viser verdiene på Serial Monitor, og aktiverer en alarm (buzzer) hvis temperaturen overstiger 30 °C. Lag en kravspesifikasjon og et blokkdiagram.',
      solution: `**Kravspesifikasjon:**

| Krav | Beskrivelse |
|---|---|
| **K1** | Måle temperatur med TMP36-sensor |
| **K2** | Måle lysnivå med LDR |
| **K3** | Vise temperatur og lysverdi på Serial Monitor hvert 2. sekund |
| **K4** | Aktivere buzzer når temperatur > 30 °C |
| **K5** | LED-indikator: grønn = OK, rød = alarm |

**Komponentliste:**
- Arduino Uno
- TMP36 temperatursensor
- LDR + 10 kΩ motstand
- Piezo-buzzer
- Grønn LED + 220 Ω motstand
- Rød LED + 220 Ω motstand
- Breadboard og ledninger

**Blokkdiagram:**

\`\`\`
[TMP36 (A0)]  ──→  [Arduino Uno]  ──→  [Buzzer (pinne 8)    ]
[LDR   (A1)]  ──→  [            ]  ──→  [Grønn LED (pinne 10)]
                    [            ]  ──→  [Rød LED (pinne 11)  ]
                    [            ]  ──→  [Serial Monitor (USB) ]
\`\`\`

**Pseudokode:**
1. Les temperatur fra TMP36
2. Les lysverdi fra LDR
3. Skriv verdiene til Serial Monitor
4. Hvis temperatur > 30: slå på buzzer og rød LED, slukk grønn LED
5. Ellers: slukk buzzer og rød LED, tenn grønn LED
6. Vent 2 sekunder
7. Gjenta fra steg 1`,
    },

    // --- OPPGAVE 1 ---
    {
      id: 'tof1-4-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-8-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken rekkefølge bør fasene i et elektronikkprosjekt følge?',
        options: [
          { id: 'a', text: 'Bygging → Design → Testing → Idé → Dokumentasjon', isCorrect: false },
          { id: 'b', text: 'Idé → Design → Prototyping → Testing → Dokumentasjon', isCorrect: true },
          { id: 'c', text: 'Dokumentasjon → Idé → Bygging → Design → Testing', isCorrect: false },
          { id: 'd', text: 'Design → Bygging → Idé → Dokumentasjon → Testing', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Den logiske rekkefølgen er: Først ha en **idé** og definere krav, deretter **designe** løsningen, bygge en **prototype**, **teste** og forbedre, og til slutt **dokumentere** arbeidet. Å starte med bygging uten plan fører ofte til unødvendig feilsøking og omarbeid.',
      },
    },

    // --- TEORI: Feilsøking ---
    {
      id: 'tof1-4-8-def-feilsok',
      type: 'definition',
      title: 'Systematisk feilsøking',
      content: `**Feilsøking (debugging)** er en av de viktigste ferdighetene i elektronikkprosjekter. Når noe ikke fungerer, bør du jobbe **systematisk**:

**Trinn 1: Isoler problemet**
- Er det et maskinvareproblem (kobling) eller et programvareproblem (kode)?
- Test med et kjent, enkelt program (f.eks. Blink) for å sjekke at Arduino fungerer

**Trinn 2: Del og hersk**
- Test hver komponent for seg, ikke alt på en gang
- Bruk \`Serial.println()\` for å skrive ut verdier og se hva programmet gjør

**Trinn 3: Sjekk de vanligste feilene**
- **Løse ledninger** på breadboard
- **Feil pinne** i koden vs. koblingen
- **Manglende GND-forbindelse** (alle komponenter må dele felles jord)
- **Manglende forresistans** for LED-er
- **Feil retning** på dioder, LED-er, transistorer
- **Syntaksfeil** i koden (manglende semikolon, feil parenteser)

**Trinn 4: Dokumenter og lær**
- Skriv ned hva feilen var og hvordan du løste den
- Neste gang sparer du tid ved å kjenne igjen feilen`,
    },
    {
      id: 'tof1-4-8-text-feilsok',
      type: 'text',
      content: `### Serial.println() – ditt viktigste feilsøkingsverktøy

Det kraftigste verktøyet for feilsøking av Arduino-programmer er \`Serial.println()\`. Ved å skrive ut verdier, tilstander og meldinger til Serial Monitor kan du «se» hva programmet gjør innvendig.

**Gode feilsøkingspraksiser:**

\`\`\`cpp
void loop() {
  int sensorVerdi = analogRead(A0);
  Serial.print("Sensor A0 = ");
  Serial.println(sensorVerdi);  // Se om sensoren leses riktig

  float temperatur = (sensorVerdi * 5.0 / 1024.0 - 0.5) * 100.0;
  Serial.print("Beregnet temp = ");
  Serial.println(temperatur);   // Se om konverteringen er riktig

  if (temperatur > 25.0) {
    Serial.println("→ OVER grense, motor PÅ");
    digitalWrite(9, HIGH);
  } else {
    Serial.println("→ Under grense, motor AV");
    digitalWrite(9, LOW);
  }

  delay(1000);
}
\`\`\`

Med slike utskrifter kan du raskt se om sensoren gir fornuftige verdier, om beregningen er riktig, og om programflyten følger logikken du forventet.`,
    },

    // --- EKSEMPEL: Komplett prosjekt ---
    {
      id: 'tof1-4-8-example-prosjekt',
      type: 'example',
      title: 'Eksempel: Komplett prosjekt – smart romovervåker',
      problem: 'Skriv den komplette Arduino-koden for «smart romovervåker»-prosjektet: TMP36 (A0), LDR (A1), buzzer (pinne 8), grønn LED (pinne 10), rød LED (pinne 11). Alarm ved temperatur over 30 °C.',
      solution: `\`\`\`cpp
// Smart romovervåker
// TMP36 på A0, LDR på A1
// Buzzer på pinne 8, grønn LED pinne 10, rød LED pinne 11

const int TEMP_PIN = A0;
const int LYS_PIN = A1;
const int BUZZER_PIN = 8;
const int GRONN_LED = 10;
const int ROD_LED = 11;
const float ALARM_TEMP = 30.0;

void setup() {
  pinMode(BUZZER_PIN, OUTPUT);
  pinMode(GRONN_LED, OUTPUT);
  pinMode(ROD_LED, OUTPUT);
  Serial.begin(9600);
  Serial.println("=== Smart Romovervåker ===");
  Serial.println("Alarm ved temperatur over 30 °C");
  Serial.println("");
}

void loop() {
  // --- Les sensorer ---
  int tempRa = analogRead(TEMP_PIN);
  float spenning = tempRa * (5.0 / 1024.0);
  float temperatur = (spenning - 0.5) * 100.0;

  int lysVerdi = analogRead(LYS_PIN);

  // --- Vis på Serial Monitor ---
  Serial.print("Temp: ");
  Serial.print(temperatur, 1);
  Serial.print(" °C  |  Lys: ");
  Serial.print(lysVerdi);

  // --- Kontroller aktuatorer ---
  if (temperatur > ALARM_TEMP) {
    // ALARM – for varmt!
    digitalWrite(BUZZER_PIN, HIGH);
    digitalWrite(ROD_LED, HIGH);
    digitalWrite(GRONN_LED, LOW);
    Serial.println("  |  ALARM!");
  } else {
    // Alt OK
    digitalWrite(BUZZER_PIN, LOW);
    digitalWrite(ROD_LED, LOW);
    digitalWrite(GRONN_LED, HIGH);
    Serial.println("  |  OK");
  }

  delay(2000);  // Oppdater hvert 2. sekund
}
\`\`\`

**Koden følger mønsteret:** Les sensorer → Behandle data → Styr aktuatorer → Vis status. Dette er et grunnleggende mønster som brukes i de aller fleste styringssystemer, fra enkle hobbyprosjekter til industrielle kontrollsystemer.`,
    },

    // --- OPPGAVE 2 ---
    {
      id: 'tof1-4-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-8-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av disse er den beste fremgangsmåten for å feilsøke en Arduino-krets som ikke fungerer?',
        options: [
          { id: 'a', text: 'Bytte alle komponentene med nye', isCorrect: false },
          { id: 'b', text: 'Starte med et enkelt program (f.eks. Blink) og legge til én komponent om gangen', isCorrect: true },
          { id: 'c', text: 'Skrive all koden på nytt fra bunnen av', isCorrect: false },
          { id: 'd', text: 'Spørre noen andre om å fikse det', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Systematisk feilsøking med «del og hersk»-metoden er mest effektivt. Start med å verifisere at Arduino-en fungerer (f.eks. Blink-programmet), og legg så til én komponent om gangen. Slik isolerer du feilen. Å bytte alle komponenter er bortkastet tid hvis feilen er i koden eller koblingen.',
      },
    },

    // --- TEORI: Dokumentasjon ---
    {
      id: 'tof1-4-8-def-dokumentasjon',
      type: 'definition',
      title: 'Prosjektdokumentasjon',
      content: `God **dokumentasjon** er like viktig som selve prosjektet. En prosjektrapport bør inneholde:

**1. Innledning**
- Hva er prosjektets mål?
- Hvilken problemstilling løser det?

**2. Kravspesifikasjon**
- Hva skal prosjektet gjøre? (funksjonskrav)
- Hvilke begrensninger finnes? (tid, budsjett, utstyr)

**3. Design**
- Blokkdiagram (overordnet systemvisning)
- Koblingsskjema (detaljert kretsskjema)
- Pseudokode eller flytdiagram for programmet

**4. Gjennomføring**
- Steg-for-steg beskrivelse av byggeprosessen
- Bilder/tegninger av prototypen
- Komplett programkode med kommentarer

**5. Testing og resultater**
- Hva ble testet? Hvordan?
- Fungerer prosjektet som planlagt?
- Målinger og data (tabeller, grafer)

**6. Drøfting og refleksjon**
- Hva fungerte bra?
- Hva ville du gjort annerledes?
- Hva lærte du?
- Mulige forbedringer`,
    },
    {
      id: 'tof1-4-8-text-tips-rapport',
      type: 'text',
      content: `### Tips for god prosjektrapport

**Bilder og skjermbilder:**
- Ta bilder av prototypen underveis (ikke bare ferdig)
- Inkluder skjermbilder fra Serial Monitor som viser at systemet fungerer
- Fotografer koblingene på breadboardet

**Kodekommentarer:**
Koden i rapporten skal ha gode kommentarer som forklarer *hvorfor*, ikke bare *hva*:

\`\`\`cpp
// Dårlig kommentar:
int x = analogRead(A0);  // Les A0

// God kommentar:
int tempRa = analogRead(A0);  // Les TMP36-sensor (gir 10 mV/°C)
\`\`\`

**Bruk tabeller for testresultater:**

| Test | Forventet resultat | Faktisk resultat | Status |
|---|---|---|---|
| Temp < 30 °C | Grønn LED, ingen lyd | Grønn LED, ingen lyd | OK |
| Temp > 30 °C | Rød LED, buzzer | Rød LED, buzzer | OK |
| Sensor frakoblet | Vis feilmelding | Viser 0 °C | Må forbedres |

**Ærlighet:**
Skriv ærlig om det som *ikke* fungerte. Det viser at du forstår prosjektet og har lært av prosessen. Ingen forventer et perfekt resultat – det er prosessen og refleksjonen som teller.`,
    },

    // --- NOTE: Prosjektideer ---
    {
      id: 'tof1-4-8-note-ideer',
      type: 'note',
      title: 'Prosjektideer for elektronikk med Arduino',
      content: `Her er noen prosjektideer med varierende vanskelighetsgrad:

**Nybegynner:**
- Trafikklys med tre LED-er og tidsbasert styring
- Nattlys som tennes automatisk når det blir mørkt
- Terningkaster med 7 LED-er og en trykkknapp

**Middels:**
- Automatisk plantevanner med jordfuktighetssensor og pumpe
- Digitalt termometer med LCD-display
- Parkeringsassistent med ultralydsensor, LED-er og buzzer

**Avansert:**
- Værstasjon med temperatur, fuktighet, lys og datalogging
- Linjefølgende robot med IR-sensorer og motorer
- Smarthusstyrings: lys, vifte og alarm via sensorer

Velg et prosjekt som **interesserer deg** og som **matcher kunnskapsnivået** ditt. Start enkelt, og bygg på etter hvert!`,
    },

    // --- OPPSUMMERING ---
    {
      id: 'tof1-4-8-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Prosjektarbeid med elektronikk

**De fem prosjektfasene:**
1. **Idé og kravspesifikasjon** – definer hva prosjektet skal gjøre
2. **Design og planlegging** – blokkdiagram, koblingsskjema, pseudokode
3. **Prototyping og bygging** – breadboard, trinnvis utvikling
4. **Testing og forbedring** – systematisk testing, iterativ forbedring
5. **Dokumentasjon og presentasjon** – rapport, refleksjon

**Feilsøking:**
- Isoler problemet: maskinvare eller programvare?
- Del og hersk: test én komponent om gangen
- Bruk \`Serial.println()\` for å «se» hva programmet gjør
- Sjekk vanlige feil: løse ledninger, feil pinne, manglende GND

**Dokumentasjon:**
- Innledning, kravspek, design, gjennomføring, testing, drøfting
- Bilder, koblingsskjema og kommentert kode
- Ærlig refleksjon over hva som fungerte og hva som kan forbedres

**Det viktigste mønsteret i alle styringssystemer:**
Les sensorer → Behandle data → Styr aktuatorer → Gjenta

Gratulerer – du har nå det teoretiske grunnlaget for å planlegge, bygge og dokumentere dine egne elektronikkprosjekter med Arduino!`,
    },

    // --- SAMLEOPPGAVE 3 ---
    {
      id: 'tof1-4-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-8-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Velg ett av prosjektene nedenfor og lag en komplett prosjektplan: a) Automatisk nattlys, b) Parkeringsassistent med ultralydsensor, c) Temperaturalarm. Planen skal inneholde: 1) Kravspesifikasjon (minst 4 krav), 2) Komponentliste, 3) Blokkdiagram, 4) Pseudokode for programmet.',
        hints: ['Bruk tabeller for kravspesifikasjonen. Tenk på hvilke sensorer og aktuatorer du trenger. Pseudokode er programlogikken skrevet i vanlig tekst, steg for steg.'],
        solution: `**Eksempel – Parkeringsassistent:**

**Kravspesifikasjon:**

| Krav | Beskrivelse |
|---|---|
| K1 | Mål avstand med HC-SR04-sensor |
| K2 | Grønn LED når avstand > 50 cm |
| K3 | Gul LED når avstand 20–50 cm |
| K4 | Rød LED + buzzer når avstand < 20 cm |
| K5 | Oppdater avlesning 5 ganger per sekund |

**Komponentliste:**
- Arduino Uno, HC-SR04 ultralydsensor, Grønn LED + 220 Ω, Gul LED + 220 Ω, Rød LED + 220 Ω, Piezo-buzzer, Breadboard, Ledninger

**Blokkdiagram:**
HC-SR04 (Trig: pinne 7, Echo: pinne 6) → Arduino → Grønn LED (pinne 10), Gul LED (pinne 11), Rød LED (pinne 12), Buzzer (pinne 8), Serial Monitor (USB)

**Pseudokode:**
1. Initialiser pinner og Serial
2. Send ultralydbølge via Trig
3. Mål tid med pulseIn() på Echo
4. Beregn avstand i cm
5. Hvis avstand > 50: tenn grønn LED, slukk gul og rød, buzzer av
6. Hvis avstand 20–50: tenn gul LED, slukk grønn og rød, buzzer av
7. Hvis avstand < 20: tenn rød LED, slukk grønn og gul, buzzer på
8. Skriv avstand til Serial Monitor
9. Vent 200 ms, gjenta fra steg 2`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- SAMLEOPPGAVE 4 ---
    {
      id: 'tof1-4-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-4-8-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Skriv en komplett prosjektrapport for romovervåker-prosjektet fra eksempelet i dette kapittelet. Inkluder: a) Innledning med prosjektmål, b) Kravspesifikasjon i tabellform, c) Blokkdiagram, d) Koblingsliste (hvilke pinner brukes til hva), e) Den komplette koden med kommentarer, f) En testplan med minst 3 tester og forventede resultater, g) Refleksjon: minst to ting du ville forbedret.',
        hints: ['Se eksemplene i kapittelet for inspirasjon. Koden kan kopieres fra eksempelet, men legg til flere og bedre kommentarer. Tenk på edge cases i testplanen (hva skjer ved akkurat 30 °C?).'],
        solution: `Se eksemplene i kapittelet for veiledning. Hovedpunktene:

**a) Innledning:** Prosjektets mål er å bygge et overvåkningssystem som måler temperatur og lys, og varsler ved for høy temperatur.

**b) Kravspek:** K1: Mål temperatur med TMP36, K2: Mål lys med LDR, K3: Vis data på Serial Monitor hvert 2. sek, K4: Alarm (buzzer + rød LED) ved temp > 30 °C, K5: Grønn LED ved normal temperatur.

**c) Blokkdiagram:** TMP36 (A0) og LDR (A1) som innganger, Arduino i midten, buzzer (pinne 8), grønn LED (pinne 10) og rød LED (pinne 11) som utganger.

**d) Koblingsliste:** A0=TMP36, A1=LDR+10kΩ, D8=buzzer, D10=grønn LED+220Ω, D11=rød LED+220Ω.

**e) Kode:** Se eksempelet med utfyllende kommentarer som forklarer *hvorfor* hver del gjør det den gjør.

**f) Testplan:**
| Test | Forventet | Faktisk |
|---|---|---|
| Normal temp (22 °C) | Grønn LED, ingen buzzer | – |
| Varm temp (>30 °C) | Rød LED, buzzer på | – |
| Grenseverdi (30 °C) | Grønn LED (≤30 er OK) | – |

**g) Forbedringer:** 1) Legge til LCD-display i stedet for kun Serial Monitor. 2) Legge til hysterese (f.eks. alarm på ved 30 °C, av ved 28 °C) for å unngå raske av/på-vekslinger nær grenseverdien.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for del 4 (kapittel 4.1–4.8)
// ============================================================================

export const TOF_1_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TOF_1_4_1,
  CHAPTER_TOF_1_4_2,
  CHAPTER_TOF_1_4_3,
  CHAPTER_TOF_1_4_4,
  CHAPTER_TOF_1_4_5,
  CHAPTER_TOF_1_4_6,
  CHAPTER_TOF_1_4_7,
  CHAPTER_TOF_1_4_8,
];
