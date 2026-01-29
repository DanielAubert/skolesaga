/**
 * Tekstbok kapitler for 1P - Økonomi (Kapittel 8.3-8.5)
 * Følger LK20 læreplan
 *
 * Innhold:
 * - 8.3: Lønn og skatt
 * - 8.4: MVA og valuta
 * - 8.5: Indeks og kroneverdi
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 8.3: LØNN OG SKATT
// ============================================================================

export const CHAPTER_1P_8_3: TextbookChapter = {
  id: '1p-8-3',
  courseId: '1p',
  chapterNumber: '8.3',
  title: 'Lønn og skatt',
  description:
    'Lær om bruttolønn, nettolønn, skattetrekk, trinnskatt, trygdeavgift og feriepenger.',
  estimatedMinutes: 55,
  competenceGoals: [
    'utforske og diskutere korleis ulike pengespørsmål påverkar privatøkonomi',
  ],
  content: [
    // --- Blokk 1: Intro ---
    {
      id: '1p-8-3-intro',
      type: 'text',
      content: `## Lønn og skatt

Når du begynner å jobbe, vil du oppdage at beløpet du får utbetalt er lavere enn det du egentlig tjener. Det er fordi arbeidsgiveren trekker skatt fra lønnen din før den utbetales. I dette kapittelet skal vi se på hvordan lønn beregnes, hvilke tillegg som finnes, og hvordan skattesystemet fungerer.`,
    },

    // --- Blokk 2: Bruttolønn og nettolønn ---
    {
      id: '1p-8-3-def-brutto-netto',
      type: 'definition',
      title: 'Bruttolønn og nettolønn',
      content: `**Bruttolønn** er den totale lønnen du tjener **før** skatt trekkes fra.

**Nettolønn** er beløpet du faktisk får utbetalt **etter** at skatt er trukket.

$$\\text{Nettolønn} = \\text{Bruttolønn} - \\text{Skattetrekk}$$`,
    },

    // --- Blokk 3: Timelønn, månedslønn, årslønn ---
    {
      id: '1p-8-3-lonntyper',
      type: 'text',
      content: `## Timelønn, månedslønn og årslønn

Det finnes ulike måter å avtale lønn på:

- **Timelønn**: Du får betalt per time du jobber. Vanlig for deltidsjobber og sommerjobber.
- **Månedslønn**: Du får et fast beløp hver måned, uavhengig av antall arbeidsdager. Vanlig for fast ansatte.
- **Årslønn**: Det totale beløpet du tjener i løpet av et kalenderår.

Sammenhengen mellom disse er:

$$\\text{Årslønn} = \\text{Månedslønn} \\times 12$$

For timelønnede med 37{,}5 timers arbeidsuke:

$$\\text{Årslønn} \\approx \\text{Timelønn} \\times 37{,}5 \\times 52$$

der 52 er antall uker i et år (forenklet, før ferie trekkes fra).`,
    },

    // --- Blokk 4: Eksempel timelønn ---
    {
      id: '1p-8-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Fra timelønn til årslønn',
      problem: `Sara jobber som butikkmedarbeider og har en timelønn på 195 kr. Hun jobber 37{,}5 timer per uke.

a) Hva blir månedslønnen hennes (brutto) dersom vi regner med gjennomsnittlig 4{,}33 uker per måned?

b) Hva blir årslønnen?`,
      solution: `**Løsning:**

a) Månedlig arbeidstimer $= 37{,}5 \\times 4{,}33 = 162{,}375$ timer

Månedslønn $= 195 \\times 162{,}375 = 31\\,663$ kr (brutto)

b) Årslønn $= 31\\,663 \\times 12 = 379\\,956$ kr

Alternativt: $195 \\times 37{,}5 \\times 52 = 380\\,250$ kr

(Liten differanse skyldes avrunding i antall uker per måned.)`,
    },

    // --- Blokk 5: Overtidstillegg ---
    {
      id: '1p-8-3-overtid',
      type: 'text',
      content: `## Overtidstillegg

Når du jobber mer enn avtalt arbeidstid (vanligvis mer enn 7{,}5 timer per dag eller 37{,}5 timer per uke), har du krav på overtidstillegg.

De vanligste satsene er:

| Tidspunkt | Tillegg | Du får |
|-----------|---------|--------|
| Hverdager (etter normal tid) | 50 % | 1{,}5 × timelønn |
| Helg og helligdager | 100 % | 2 × timelønn |

$$\\text{Overtidsbetaling (50\\%)} = \\text{Timelønn} \\times 1{,}5$$
$$\\text{Overtidsbetaling (100\\%)} = \\text{Timelønn} \\times 2$$`,
    },

    // --- Blokk 6: Eksempel overtid ---
    {
      id: '1p-8-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Beregne overtidsbetaling',
      problem: `Jonas har en timelønn på 220 kr. En uke jobber han 42 timer, der de ekstra timene er på hverdager (50 % tillegg).

a) Hva er overtidstimelønnen hans?

b) Hva tjener han totalt (brutto) denne uken?`,
      solution: `**Løsning:**

a) Overtidstimelønn $= 220 \\times 1{,}5 = 330$ kr

b) Vanlige timer: $37{,}5$ timer til 220 kr
   Overtidstimer: $42 - 37{,}5 = 4{,}5$ timer til 330 kr

Totallønn $= 37{,}5 \\times 220 + 4{,}5 \\times 330$
$= 8\\,250 + 1\\,485 = 9\\,735$ kr (brutto)`,
    },

    // --- Blokk 7: Oppgave overtid ---
    {
      id: '1p-8-3-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-8-3-ex-1',
        number: '8.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Maria har en timelønn på 240 kr og jobber normalt 37,5 timer per uke. En uke jobber hun 10 ekstra timer: 6 timer på en hverdag (50 % tillegg) og 4 timer på en søndag (100 % tillegg). Hva tjener hun totalt (brutto) denne uken?',
        solution: `Vanlig lønn: $37{,}5 \\times 240 = 9\\,000$ kr

Overtid hverdag: $6 \\times 240 \\times 1{,}5 = 6 \\times 360 = 2\\,160$ kr

Overtid søndag: $4 \\times 240 \\times 2 = 4 \\times 480 = 1\\,920$ kr

Totalt: $9\\,000 + 2\\,160 + 1\\,920 = 13\\,080$ kr`,
        answer: 13080,
        hints: [
          'Beregn vanlig lønn, overtid hverdag og overtid søndag hver for seg',
          'Husk: 50 % tillegg betyr timelønn × 1,5 og 100 % tillegg betyr timelønn × 2',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Blokk 8: Feriepenger ---
    {
      id: '1p-8-3-feriepenger',
      type: 'text',
      content: `## Feriepenger

Alle arbeidstakere i Norge har rett til feriepenger. Feriepengene beregnes som en prosentandel av bruttolønnen du tjente **året før** (opptjeningsåret).

- **Vanlig sats**: $10{,}2\\%$ av feriepengegrunnlaget
- **Over 60 år**: $12{,}0\\%$ av feriepengegrunnlaget (ekstra ferieuke)

Noen arbeidsgivere har tariffavtale med 5 uker ferie, da er satsen $12{,}0\\%$ uansett alder.

$$\\text{Feriepenger} = \\text{Feriepengegrunnlag} \\times \\frac{p}{100}$$

Feriepengegrunnlaget finner du på lønnsslippen i desember, og er summen av all skattepliktig lønn i opptjeningsåret.`,
    },

    // --- Blokk 9: Eksempel feriepenger ---
    {
      id: '1p-8-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Beregne feriepenger',
      problem: `Erik jobbet deltid i fjor og hadde et feriepengegrunnlag på 185 000 kr. Han har vanlig ferieordning (4 uker + 1 dag).

Hvor mye får han utbetalt i feriepenger?`,
      solution: `**Løsning:**

Feriepenger $= 185\\,000 \\times 0{,}102 = 18\\,870$ kr

Erik får utbetalt 18 870 kr i feriepenger (brutto, før skatt).

**Merk:** Feriepenger utbetales vanligvis i juni, og det trekkes normalt ikke skatt av feriepenger (fordi du ikke får vanlig lønn den måneden du har ferie).`,
    },

    // --- Blokk 10: Skattekort og skattetrekk ---
    {
      id: '1p-8-3-skattekort',
      type: 'text',
      content: `## Skattekort og skattetrekk

Alle som jobber i Norge må ha et **skattekort** som forteller arbeidsgiveren hvor mye skatt som skal trekkes fra lønnen din.

Det finnes to typer skattekort:

- **Tabelltrekk**: Skatten beregnes etter en tabell basert på inntekt. Vanligst for fast ansatte.
- **Prosenttrekk**: En fast prosent trekkes av all inntekt. Vanlig for biinntekt eller kortere arbeidsforhold.

Eksempel med prosenttrekk:

$$\\text{Skattetrekk} = \\text{Bruttolønn} \\times \\frac{\\text{trekkprosent}}{100}$$`,
    },

    // --- Blokk 11: Tips om frikort ---
    {
      id: '1p-8-3-tip-frikort',
      type: 'tip',
      title: 'Frikort for unge arbeidstakere',
      content: `Har du lav inntekt (under frikortgrensen, ca. 70 000 kr i 2024), kan du søke om **frikort**. Da slipper du skattetrekk opp til denne grensen. Frikortgrensen justeres årlig av Skatteetaten.`,
    },

    // --- Blokk 12: Trinnskatt ---
    {
      id: '1p-8-3-trinnskatt',
      type: 'text',
      content: `## Trinnskatt

Trinnskatten er en skatt på personinntekt som øker i trinn. Jo mer du tjener, desto høyere skatteprosent betaler du **på den delen av inntekten** som overstiger hvert trinn.

Forenklet oversikt (avrundede tall):

| Trinn | Inntekt fra | Sats |
|-------|------------|------|
| 1 | 208 050 kr | 1{,}7 % |
| 2 | 292 850 kr | 4{,}0 % |
| 3 | 670 000 kr | 13{,}6 % |
| 4 | 937 900 kr | 16{,}6 % |
| 5 | 1 350 000 kr | 17{,}6 % |

**Viktig:** Trinnskatten beregnes **bare** på den delen av inntekten som ligger innenfor hvert trinn, ikke av hele inntekten.`,
    },

    // --- Blokk 13: Trygdeavgift ---
    {
      id: '1p-8-3-trygdeavgift',
      type: 'definition',
      title: 'Trygdeavgift',
      content: `**Trygdeavgift** er en avgift som alle lønnsmottakere betaler av sin personinntekt. Avgiften finansierer folketrygden (sykepenger, pensjon, arbeidsledighetstrygd osv.).

For lønnsmottakere er satsen $7{,}9\\%$ av personinntekten.

$$\\text{Trygdeavgift} = \\text{Personinntekt} \\times 0{,}079$$`,
    },

    // --- Blokk 14: Eksempel enkel skatteberegning ---
    {
      id: '1p-8-3-example-4',
      type: 'example',
      title: 'Eksempel 4: Forenklet skatteberegning',
      problem: `Lise har en årslønn (personinntekt) på 420 000 kr. Vi forenkler og ser kun på trinnskatt og trygdeavgift.

a) Beregn trygdeavgiften.

b) Beregn trinnskatten (bruk tabellen over).

c) Hva blir samlet skatt av trinnskatt og trygdeavgift?`,
      solution: `**Løsning:**

a) Trygdeavgift $= 420\\,000 \\times 0{,}079 = 33\\,180$ kr

b) Trinnskatt:
- Trinn 1 (fra 208 050 til 292 850):
  $(292\\,850 - 208\\,050) \\times 0{,}017 = 84\\,800 \\times 0{,}017 = 1\\,441{,}60$ kr
- Trinn 2 (fra 292 850 til 420 000):
  $(420\\,000 - 292\\,850) \\times 0{,}040 = 127\\,150 \\times 0{,}040 = 5\\,086$ kr

Samlet trinnskatt $= 1\\,441{,}60 + 5\\,086 = 6\\,527{,}60$ kr

c) Samlet skatt $= 33\\,180 + 6\\,527{,}60 = 39\\,707{,}60$ kr

(Merk: I virkeligheten kommer også skatt på alminnelig inntekt (22 %) etter fradrag, men vi forenkler her.)`,
    },

    // --- Blokk 15: Oppgave skatteberegning ---
    {
      id: '1p-8-3-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-8-3-ex-2',
        number: '8.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Petter har en årslønn på 350 000 kr. Beregn (forenklet):

a) Trygdeavgiften (7,9 %).

b) Trinnskatten. Bruk trinn 1: 1,7 % fra 208 050 kr, trinn 2: 4,0 % fra 292 850 kr.

c) Samlet beløp for trinnskatt og trygdeavgift.`,
        subTasks: [
          {
            label: 'a',
            task: 'Beregn trygdeavgiften (7,9 % av 350 000 kr).',
            solution: '$350\\,000 \\times 0{,}079 = 27\\,650$ kr',
            answer: 27650,
          },
          {
            label: 'b',
            task: 'Beregn trinnskatten.',
            solution: `Trinn 1: $(292\\,850 - 208\\,050) \\times 0{,}017 = 84\\,800 \\times 0{,}017 = 1\\,441{,}60$ kr
Trinn 2: $(350\\,000 - 292\\,850) \\times 0{,}040 = 57\\,150 \\times 0{,}040 = 2\\,286$ kr
Samlet trinnskatt: $1\\,441{,}60 + 2\\,286 = 3\\,727{,}60$ kr`,
            answer: 3727.6,
          },
          {
            label: 'c',
            task: 'Samlet beløp for trinnskatt og trygdeavgift.',
            solution: '$27\\,650 + 3\\,727{,}60 = 31\\,377{,}60$ kr',
            answer: 31377.6,
          },
        ],
        solution: `a) 27 650 kr  b) 3 727,60 kr  c) 31 377,60 kr`,
        hints: [
          'Trygdeavgift beregnes av hele inntekten',
          'Trinnskatt beregnes bare på den delen av inntekten som ligger over hvert trinns grense',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Blokk 16: Skattemelding ---
    {
      id: '1p-8-3-skattemelding',
      type: 'text',
      content: `## Skattemeldingen

Hvert år i mars/april mottar du **skattemeldingen** (tidligere kalt selvangivelsen) fra Skatteetaten. Den viser en oversikt over:

- All inntekt du har hatt i løpet av året
- Fradrag du har krav på (for eksempel minstefradrag, renteutgifter, fagforeningskontingent)
- Formue (bankinnskudd, bolig, verdipapirer)
- Beregnet skatt

Du må kontrollere at opplysningene stemmer og eventuelt korrigere dem. Når skatteoppgjøret er klart (vanligvis i juni), finner du ut om du har betalt for mye skatt (**penger tilbake**) eller for lite (**restskatt**).`,
    },

    // --- Blokk 17: Varsel ---
    {
      id: '1p-8-3-warning',
      type: 'warning',
      title: 'Sjekk skattemeldingen',
      content: `Du er selv ansvarlig for at skattemeldingen er korrekt, selv om den er forhåndsutfylt av Skatteetaten. Feil kan føre til at du betaler for mye eller for lite skatt.`,
    },

    // --- Blokk 18: Oppgave nettolønn ---
    {
      id: '1p-8-3-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-8-3-ex-3',
        number: '8.7',
        type: 'classic',
        difficulty: 'lett',
        task: `Kari har en månedslønn på 35 000 kr (brutto). Skattekortet hennes viser et tabelltrekk som tilsvarer ca. 28 % av bruttolønnen.

a) Hvor mye trekkes i skatt hver måned?

b) Hva blir nettolønnen?`,
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mye trekkes i skatt?',
            solution: '$35\\,000 \\times 0{,}28 = 9\\,800$ kr',
            answer: 9800,
          },
          {
            label: 'b',
            task: 'Hva blir nettolønnen?',
            solution: '$35\\,000 - 9\\,800 = 25\\,200$ kr',
            answer: 25200,
          },
        ],
        solution: 'a) 9 800 kr  b) 25 200 kr',
        hints: ['Skattetrekk = Bruttolønn × trekkprosent', 'Nettolønn = Bruttolønn − Skattetrekk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Blokk 19: Oppgave feriepenger ---
    {
      id: '1p-8-3-ex-block-4',
      type: 'exercise',
      exercise: {
        id: '1p-8-3-ex-4',
        number: '8.8',
        type: 'classic',
        difficulty: 'medium',
        task: `Aisha jobbet som vikar på en skole i fjor. Feriepengegrunnlaget hennes var 230 000 kr. Hun har vanlig ferieordning (10,2 %).

a) Hvor mye får hun i feriepenger?

b) Bestemoren til Aisha er 62 år og har et feriepengegrunnlag på 490 000 kr (sats 12,0 %). Hvor mye får bestemoren i feriepenger?`,
        subTasks: [
          {
            label: 'a',
            task: 'Aishas feriepenger (10,2 % av 230 000 kr).',
            solution: '$230\\,000 \\times 0{,}102 = 23\\,460$ kr',
            answer: 23460,
          },
          {
            label: 'b',
            task: 'Bestemorens feriepenger (12,0 % av 490 000 kr).',
            solution: '$490\\,000 \\times 0{,}12 = 58\\,800$ kr',
            answer: 58800,
          },
        ],
        solution: 'a) 23 460 kr  b) 58 800 kr',
        hints: ['Feriepenger = Feriepengegrunnlag × prosentsats'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Blokk 20: Oppsummering ---
    {
      id: '1p-8-3-oppsummering',
      type: 'note',
      content: `**Oppsummering kapittel 8.3:**

- **Bruttolønn** = lønn før skatt; **nettolønn** = lønn etter skatt
- Timelønn, månedslønn og årslønn henger sammen: Årslønn = Månedslønn × 12
- **Overtidstillegg**: 50 % (hverdager) eller 100 % (helg/helligdager)
- **Feriepenger**: 10,2 % (vanlig) eller 12,0 % (over 60 år / tariffavtale)
- **Trinnskatt**: Progressiv skatt som øker trinnvis med inntekten
- **Trygdeavgift**: 7,9 % av personinntekt
- **Skattemelding**: Årlig oversikt du må kontrollere`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.4: MVA OG VALUTA
// ============================================================================

export const CHAPTER_1P_8_4: TextbookChapter = {
  id: '1p-8-4',
  courseId: '1p',
  chapterNumber: '8.4',
  title: 'MVA og valuta',
  description:
    'Lær om merverdiavgift (MVA), de ulike satsene i Norge, og hvordan valutakurser brukes ved kjøp og salg i utlandet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'utforske og diskutere korleis ulike pengespørsmål påverkar privatøkonomi',
  ],
  content: [
    // --- Blokk 1: Intro ---
    {
      id: '1p-8-4-intro',
      type: 'text',
      content: `## Merverdiavgift og valuta

Hver gang du kjøper noe i en butikk, betaler du merverdiavgift (MVA) uten kanskje å tenke over det. Og når du reiser til utlandet eller handler på nett fra utenlandske butikker, må du forholde deg til ulike valutaer. I dette kapittelet lærer du å beregne priser med og uten MVA, og å veksle mellom norske kroner og andre valutaer.`,
    },

    // --- Blokk 2: Definisjon MVA ---
    {
      id: '1p-8-4-def-mva',
      type: 'definition',
      title: 'Merverdiavgift (MVA)',
      content: `**Merverdiavgift** (MVA), også kalt **moms**, er en avgift som legges på prisen ved salg av varer og tjenester. Avgiften betales av forbrukeren og kreves inn av selgeren på vegne av staten.

$$\\text{Pris med MVA} = \\text{Pris uten MVA} \\times \\left(1 + \\frac{\\text{MVA-sats}}{100}\\right)$$`,
    },

    // --- Blokk 3: MVA-satser ---
    {
      id: '1p-8-4-satser',
      type: 'text',
      content: `## MVA-satser i Norge

Norge har fire ulike MVA-satser:

| Sats | Gjelder for | Eksempler |
|------|------------|-----------|
| **25 %** | Alminnelig sats | Klær, elektronikk, møbler, biler |
| **15 %** | Matvarer | Brød, melk, frukt, kjøtt |
| **12 %** | Kultur og transport | Kino, museum, persontransport, hotell |
| **0 %** | Fritak | Helsetjenester, undervisning, bøker, aviser |

Den alminnelige satsen på 25 % brukes for de fleste varer og tjenester. Matvarer har en redusert sats på 15 % for å gjøre mat rimeligere.`,
    },

    // --- Blokk 4: Eksempel pris med MVA ---
    {
      id: '1p-8-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Beregne pris med MVA',
      problem: `En nettbutikk selger en hodetelefon til 640 kr uten MVA (alminnelig sats 25 %).

a) Hva blir prisen med MVA?

b) En matbutikk kjøper inn ost for 48 kr per kg uten MVA. Hva koster osten med MVA (15 %)?`,
      solution: `**Løsning:**

a) Pris med MVA $= 640 \\times 1{,}25 = 800$ kr

b) Pris med MVA $= 48 \\times 1{,}15 = 55{,}20$ kr per kg`,
    },

    // --- Blokk 5: Finne pris uten MVA ---
    {
      id: '1p-8-4-uten-mva',
      type: 'text',
      content: `## Finne pris uten MVA

Prisen du ser i butikken er vanligvis **inkludert** MVA. For å finne prisen **uten** MVA, deler vi på vekstfaktoren:

$$\\text{Pris uten MVA} = \\frac{\\text{Pris med MVA}}{1 + \\frac{\\text{MVA-sats}}{100}}$$

For alminnelig sats (25 %):
$$\\text{Pris uten MVA} = \\frac{\\text{Pris med MVA}}{1{,}25}$$`,
    },

    // --- Blokk 6: Eksempel pris uten MVA ---
    {
      id: '1p-8-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Finne pris uten MVA',
      problem: `En sykkel koster 12 500 kr i butikken (inkl. 25 % MVA).

a) Hva er prisen uten MVA?

b) Hvor mye av prisen er MVA?`,
      solution: `**Løsning:**

a) Pris uten MVA $= \\frac{12\\,500}{1{,}25} = 10\\,000$ kr

b) MVA-beløpet $= 12\\,500 - 10\\,000 = 2\\,500$ kr

Alternativt: MVA-beløp $= 10\\,000 \\times 0{,}25 = 2\\,500$ kr`,
    },

    // --- Blokk 7: Tips MVA-beløp ---
    {
      id: '1p-8-4-tip-mva',
      type: 'tip',
      title: 'Rask formel for MVA-beløpet',
      content: `For å finne MVA-beløpet direkte fra totalprisen (med 25 % MVA), kan du bruke:

$$\\text{MVA-beløp} = \\text{Totalpris} \\times \\frac{25}{125} = \\text{Totalpris} \\times 0{,}2$$

Eksempel: MVA på en vare til 750 kr $= 750 \\times 0{,}2 = 150$ kr`,
    },

    // --- Blokk 8: Oppgave MVA ---
    {
      id: '1p-8-4-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-8-4-ex-1',
        number: '8.9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Regn ut:',
        subTasks: [
          {
            label: 'a',
            task: 'En TV koster 6 400 kr uten MVA. Hva koster den med 25 % MVA?',
            solution: '$6\\,400 \\times 1{,}25 = 8\\,000$ kr',
            answer: 8000,
            multipleChoiceOptions: ['8 000 kr', '7 400 kr', '8 000 kr', '6 425 kr'],
          },
          {
            label: 'b',
            task: 'En kinobillett koster 165 kr inkl. 12 % MVA. Hva er prisen uten MVA?',
            solution: '$\\frac{165}{1{,}12} \\approx 147{,}32$ kr',
            answer: 147.32,
            multipleChoiceOptions: ['147,32 kr', '145,20 kr', '153,00 kr', '185,00 kr'],
          },
          {
            label: 'c',
            task: 'En pose epler koster 39,90 kr inkl. 15 % MVA. Hvor mye er MVA-beløpet?',
            solution: `Pris uten MVA $= \\frac{39{,}90}{1{,}15} \\approx 34{,}70$ kr
MVA-beløp $= 39{,}90 - 34{,}70 = 5{,}20$ kr`,
            answer: 5.2,
            multipleChoiceOptions: ['5,20 kr', '5,99 kr', '6,00 kr', '4,90 kr'],
          },
        ],
        solution: 'a) 8 000 kr  b) 147,32 kr  c) 5,20 kr',
        hints: [
          'For å legge til MVA: gang med (1 + sats/100)',
          'For å finne pris uten MVA: del totalprisen på (1 + sats/100)',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Blokk 9: Valuta ---
    {
      id: '1p-8-4-valuta',
      type: 'text',
      content: `## Valuta og valutakurser

**Valuta** er et lands pengeenhet. Noen eksempler:

| Land | Valuta | Forkortelse |
|------|--------|-------------|
| Norge | Norske kroner | NOK |
| EU-land | Euro | EUR |
| USA | Amerikanske dollar | USD |
| Storbritannia | Britiske pund | GBP |
| Sverige | Svenske kroner | SEK |
| Japan | Japanske yen | JPY |

En **valutakurs** forteller hvor mye 1 enhet av en utenlandsk valuta koster i norske kroner.

For eksempel: Hvis kursen for EUR er 11{,}40, betyr det at 1 euro koster 11{,}40 norske kroner.`,
    },

    // --- Blokk 10: Eksempel valuta ---
    {
      id: '1p-8-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Veksle mellom valutaer',
      problem: `Valutakursen for amerikanske dollar (USD) er 10{,}50 NOK.

a) Marte skal reise til USA og veksler 8 000 NOK til dollar. Hvor mange dollar får hun?

b) Hun kjøper en jakke i New York til 75 USD. Hva koster jakken i norske kroner?`,
      solution: `**Løsning:**

a) Fra NOK til USD: Vi deler på kursen.
$$\\text{Antall USD} = \\frac{8\\,000}{10{,}50} \\approx 761{,}90 \\text{ USD}$$

b) Fra USD til NOK: Vi ganger med kursen.
$$\\text{Pris i NOK} = 75 \\times 10{,}50 = 787{,}50 \\text{ kr}$$`,
    },

    // --- Blokk 11: Kjøps- og salgskurs ---
    {
      id: '1p-8-4-kjop-salg',
      type: 'text',
      content: `## Kjøpskurs og salgskurs

Når du veksler penger i en bank eller vekslingskontor, møter du to kurser:

- **Kjøpskurs** (banken kjøper): Kursen du får når du selger utenlandsk valuta til banken. Denne er **lavere** enn midtkursen.
- **Salgskurs** (banken selger): Kursen du betaler når du kjøper utenlandsk valuta fra banken. Denne er **høyere** enn midtkursen.

Forskjellen mellom kjøps- og salgskurs kalles **spread**, og er bankens fortjeneste.

| | Du vil ... | Du bruker ... |
|--|-----------|--------------|
| Reise ut | Kjøpe utenlandsk valuta | **Salgskurs** (høyere, dyrere for deg) |
| Komme hjem | Selge utenlandsk valuta | **Kjøpskurs** (lavere, du får mindre) |`,
    },

    // --- Blokk 12: Eksempel kjøp/salg ---
    {
      id: '1p-8-4-example-4',
      type: 'example',
      title: 'Eksempel 4: Kjøps- og salgskurs',
      problem: `Banken har disse kursene for euro (EUR):
- Kjøpskurs: 11{,}20 NOK
- Salgskurs: 11{,}60 NOK

a) Henrik skal reise til Spania og vil veksle 15 000 NOK til euro. Hvor mange euro får han?

b) Etter ferien har Henrik 120 euro igjen. Hvor mye NOK får han tilbake?`,
      solution: `**Løsning:**

a) Henrik **kjøper** euro, altså bruker han **salgskursen** (11,60):
$$\\text{Antall EUR} = \\frac{15\\,000}{11{,}60} \\approx 1\\,293{,}10 \\text{ EUR}$$

b) Henrik **selger** euro, altså bruker han **kjøpskursen** (11,20):
$$\\text{Beløp i NOK} = 120 \\times 11{,}20 = 1\\,344 \\text{ kr}$$`,
    },

    // --- Blokk 13: Varsel valutaveksling ---
    {
      id: '1p-8-4-warning-veksling',
      type: 'warning',
      title: 'Ekstra gebyrer ved veksling',
      content: `Mange banker og vekslingskontorer tar i tillegg et gebyr for selve vekslingen. Pass på å inkludere dette når du beregner den reelle kostnaden. Bruk av bankkort i utlandet kan også medføre et valutatillegg på 1-2 %.`,
    },

    // --- Blokk 14: Oppgave valuta ---
    {
      id: '1p-8-4-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-8-4-ex-2',
        number: '8.10',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk følgende valutakurser: 1 GBP = 13,40 NOK, 1 SEK = 1,02 NOK.',
        subTasks: [
          {
            label: 'a',
            task: 'Du veksler 5 000 NOK til britiske pund. Hvor mange pund får du?',
            solution: '$\\frac{5\\,000}{13{,}40} \\approx 373{,}13$ GBP',
            answer: 373.13,
          },
          {
            label: 'b',
            task: 'En genser koster 349 SEK i Stockholm. Hva koster den i NOK?',
            solution: '$349 \\times 1{,}02 = 355{,}98$ kr',
            answer: 355.98,
          },
          {
            label: 'c',
            task: 'Du handler en bok på nett fra England til 24,99 GBP. Hva koster boken i NOK?',
            solution: '$24{,}99 \\times 13{,}40 = 334{,}87$ kr',
            answer: 334.87,
          },
        ],
        solution: 'a) 373,13 GBP  b) 355,98 kr  c) 334,87 kr',
        hints: [
          'Fra NOK til utenlandsk valuta: del på kursen',
          'Fra utenlandsk valuta til NOK: gang med kursen',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Blokk 15: Praktisk netthandel ---
    {
      id: '1p-8-4-netthandel',
      type: 'text',
      content: `## Praktisk: Netthandel fra utlandet

Når du handler på nett fra utlandet, må du ofte betale i utenlandsk valuta. Noen ting å huske på:

- Banken legger vanligvis på et **valutatillegg** (typisk 1-2 %) på kursen når du betaler med kort.
- Ved kjøp fra land utenfor EU/EØS over en viss beløpsgrense, kan det tilkomme **toll** og **importmoms** (25 % MVA).
- Sjekk om prisen som vises inkluderer eller ekskluderer frakt og avgifter.`,
    },

    // --- Blokk 16: Oppgave sammensatt ---
    {
      id: '1p-8-4-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-8-4-ex-3',
        number: '8.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Olivia bestiller et par sko fra en amerikansk nettbutikk. Skoene koster 89,90 USD, og frakten er 15 USD. Valutakursen er 10,80 NOK per USD, og banken legger på 1,5 % valutatillegg.

a) Hva er totalkostnaden i USD?

b) Hva er den effektive valutakursen etter valutatillegget?

c) Hva koster skoene i NOK (inkludert frakt og valutatillegg)?`,
        subTasks: [
          {
            label: 'a',
            task: 'Totalkostnad i USD.',
            solution: '$89{,}90 + 15 = 104{,}90$ USD',
            answer: 104.9,
          },
          {
            label: 'b',
            task: 'Effektiv valutakurs etter 1,5 % tillegg.',
            solution: '$10{,}80 \\times 1{,}015 = 10{,}962$ NOK per USD',
            answer: 10.962,
          },
          {
            label: 'c',
            task: 'Totalkostnad i NOK.',
            solution: '$104{,}90 \\times 10{,}962 \\approx 1\\,149{,}91$ kr',
            answer: 1149.91,
          },
        ],
        solution: 'a) 104,90 USD  b) 10,962 NOK/USD  c) 1 149,91 kr',
        hints: [
          'Legg sammen varepris og frakt for total USD',
          'Valutatillegg: gang kursen med 1,015',
          'Gang total USD med den effektive kursen',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Blokk 17: Oppsummering ---
    {
      id: '1p-8-4-oppsummering',
      type: 'note',
      content: `**Oppsummering kapittel 8.4:**

- **MVA** (merverdiavgift) legges på varer og tjenester: 25 %, 15 %, 12 % eller 0 %
- Pris med MVA $=$ Pris uten MVA $\\times$ $(1 + \\text{sats})$
- Pris uten MVA $=$ Pris med MVA $\\div$ $(1 + \\text{sats})$
- **Valutakurs** forteller prisen på 1 enhet utenlandsk valuta i NOK
- NOK til utenlandsk valuta: **del** på kursen
- Utenlandsk valuta til NOK: **gang** med kursen
- **Kjøpskurs** < midtkurs < **salgskurs** (bankens spread)`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8.5: INDEKS OG KRONEVERDI
// ============================================================================

export const CHAPTER_1P_8_5: TextbookChapter = {
  id: '1p-8-5',
  courseId: '1p',
  chapterNumber: '8.5',
  title: 'Indeks og kroneverdi',
  description:
    'Lær om konsumprisindeksen (KPI), hvordan du sammenligner priser over tid, og hva reallønn betyr.',
  estimatedMinutes: 45,
  competenceGoals: ['bruke indeks til å samanlikne tal over tid'],
  content: [
    // --- Blokk 1: Intro ---
    {
      id: '1p-8-5-intro',
      type: 'text',
      content: `## Indeks og kroneverdi

Har du hørt besteforeldrene dine fortelle om at en liter melk kostet 2 kroner da de var unge? Betyr det at alt var billigere den gangen, eller tjente folk bare mye mindre? For å sammenligne priser og lønninger over tid bruker vi **indeks**. Indeks hjelper oss å forstå om vi egentlig har fått det bedre eller dårligere økonomisk.`,
    },

    // --- Blokk 2: Definisjon indeks ---
    {
      id: '1p-8-5-def-indeks',
      type: 'definition',
      title: 'Indeks',
      content: `En **indeks** er et forholdstall som brukes til å sammenligne størrelser over tid. Vi velger et **basisår** (referanseår) og setter verdien i dette året lik 100.

$$\\text{Indeks} = \\frac{\\text{Verdi i måleåret}}{\\text{Verdi i basisåret}} \\times 100$$

En indeks på 115 betyr at verdien har økt med 15 % sammenlignet med basisåret.
En indeks på 92 betyr at verdien har sunket med 8 % sammenlignet med basisåret.`,
    },

    // --- Blokk 3: Eksempel enkel indeks ---
    {
      id: '1p-8-5-example-1',
      type: 'example',
      title: 'Eksempel 1: Beregne indeks',
      problem: `En kaffekopp kostet 25 kr i 2015 (basisår). I 2024 koster den 38 kr.

a) Beregn prisindeksen for kaffekoppen i 2024.

b) Hvor mange prosent har prisen økt?`,
      solution: `**Løsning:**

a) Indeks $= \\frac{38}{25} \\times 100 = 152$

b) Prisøkning $= 152 - 100 = 52\\%$

Prisen på en kaffekopp har økt med 52 % fra 2015 til 2024.`,
    },

    // --- Blokk 4: KPI ---
    {
      id: '1p-8-5-kpi',
      type: 'text',
      content: `## Konsumprisindeksen (KPI)

**Konsumprisindeksen** (KPI) måler den generelle prisutviklingen på varer og tjenester som norske husholdninger kjøper. KPI beregnes av Statistisk sentralbyrå (SSB) og er basert på en «handlekurv» som gjenspeiler forbruket til en gjennomsnittlig husholdning.

Handlekurven inneholder blant annet:
- Matvarer og drikkevarer
- Klær og sko
- Bolig, strøm og brensel
- Transport
- Kultur og fritid
- Helsetjenester

KPI brukes til å måle **inflasjon** (generell prisstigning).`,
    },

    // --- Blokk 5: Definisjon inflasjon ---
    {
      id: '1p-8-5-def-inflasjon',
      type: 'definition',
      title: 'Inflasjon',
      content: `**Inflasjon** er en vedvarende økning i det generelle prisnivået. Når prisene stiger, får du mindre varer for samme pengebeløp. Norges Banks inflasjonsmål er 2 % per år.

Dersom KPI øker fra 100 til 102 på ett år, har inflasjonen vært 2 %.`,
    },

    // --- Blokk 6: Beregne prisendring med KPI ---
    {
      id: '1p-8-5-prisendring',
      type: 'text',
      content: `## Beregne prisendringer med KPI

Dersom du kjenner KPI i to ulike år, kan du beregne hva en vare ville kostet i et annet år:

$$\\text{Pris i nytt år} = \\text{Pris i gammelt år} \\times \\frac{\\text{KPI nytt år}}{\\text{KPI gammelt år}}$$

Denne formelen lar deg **justere for inflasjon**, slik at du kan sammenligne beløp fra ulike tidsperioder.`,
    },

    // --- Blokk 7: Eksempel KPI ---
    {
      id: '1p-8-5-example-2',
      type: 'example',
      title: 'Eksempel 2: Justere beløp med KPI',
      problem: `KPI (med 1998 = 100):
- KPI i 2005: 113{,}3
- KPI i 2023: 157{,}4

a) En bussbillett kostet 24 kr i 2005. Hva tilsvarer dette i 2023-kroner?

b) Hvor mange prosent har prisene generelt steget fra 2005 til 2023?`,
      solution: `**Løsning:**

a) Pris i 2023-kroner $= 24 \\times \\frac{157{,}4}{113{,}3} \\approx 24 \\times 1{,}389 \\approx 33{,}34$ kr

b) Prisstigning $= \\frac{157{,}4 - 113{,}3}{113{,}3} \\times 100\\% \\approx 38{,}9\\%$

Prisene har steget med ca. 38,9 % fra 2005 til 2023.`,
    },

    // --- Blokk 8: Oppgave KPI ---
    {
      id: '1p-8-5-ex-block-1',
      type: 'exercise',
      exercise: {
        id: '1p-8-5-ex-1',
        number: '8.12',
        type: 'classic',
        difficulty: 'medium',
        task: `Bruk KPI-verdiene (1998 = 100):
- KPI i 2010: 125,7
- KPI i 2023: 157,4

En kilopris på laks var 89 kr i 2010. Hva tilsvarer dette i 2023-kroner?`,
        solution: `Pris i 2023-kroner $= 89 \\times \\frac{157{,}4}{125{,}7} \\approx 89 \\times 1{,}252 \\approx 111{,}43$ kr`,
        answer: 111.43,
        hints: [
          'Bruk formelen: Pris i nytt år = Pris i gammelt år × (KPI nytt år / KPI gammelt år)',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Blokk 9: Reallønn vs. nominell lønn ---
    {
      id: '1p-8-5-reallonn',
      type: 'text',
      content: `## Reallønn og nominell lønn

- **Nominell lønn**: Lønnen din målt i kroner, uten justering for prisstigning.
- **Reallønn**: Lønnen din justert for inflasjon. Reallønnen forteller hva lønnen din faktisk er verdt i kjøpekraft.

$$\\text{Reallønn (i basisårets kroner)} = \\text{Nominell lønn} \\times \\frac{\\text{KPI basisår}}{\\text{KPI nåværende år}}$$

Dersom lønnen din stiger med 4 % mens prisene stiger med 3 %, har reallønnen din økt med omtrent 1 %. Du kan da kjøpe litt mer enn før.`,
    },

    // --- Blokk 10: Eksempel reallønn ---
    {
      id: '1p-8-5-example-3',
      type: 'example',
      title: 'Eksempel 3: Er lønna bedre enn for 10 år siden?',
      problem: `Tore tjente 380 000 kr i 2014. I 2024 tjener han 490 000 kr.

KPI-verdier (1998 = 100):
- KPI 2014: 131{,}3
- KPI 2024: 161{,}0

a) Hva tilsvarer 2014-lønnen i 2024-kroner?

b) Har Tore fått reallønnsøkning?`,
      solution: `**Løsning:**

a) Lønnen fra 2014 i 2024-kroner:
$$380\\,000 \\times \\frac{161{,}0}{131{,}3} \\approx 380\\,000 \\times 1{,}226 \\approx 465\\,916 \\text{ kr}$$

b) Tore tjener 490 000 kr i 2024, mens 2014-lønnen tilsvarer ca. 465 916 kr i 2024-kroner.

Reallønnsøkning $= 490\\,000 - 465\\,916 = 24\\,084$ kr

Ja, Tore har fått en reell lønnsøkning på ca. 24 000 kr (omtrent 5{,}2 %). Lønnen har altså steget mer enn prisene.`,
    },

    // --- Blokk 11: Kroneverdi ---
    {
      id: '1p-8-5-kroneverdi',
      type: 'text',
      content: `## Kroneverdien

**Kroneverdien** beskriver hva du kan kjøpe for et bestemt beløp. Når prisene stiger (inflasjon), synker kroneverdien fordi du får mindre for pengene dine.

Vi kan beregne hva 100 kr fra et tidligere år tilsvarer i dag:

$$\\text{Verdi i dag} = 100 \\times \\frac{\\text{KPI i dag}}{\\text{KPI den gang}}$$

Tilsvarende kan vi finne hva 100 kr i dag ville vært verdt den gang:

$$\\text{Kjøpekraft den gang} = 100 \\times \\frac{\\text{KPI den gang}}{\\text{KPI i dag}}$$`,
    },

    // --- Blokk 12: Eksempel kroneverdi ---
    {
      id: '1p-8-5-example-4',
      type: 'example',
      title: 'Eksempel 4: Kroneverdien over tid',
      problem: `KPI (1998 = 100):
- KPI 2000: 103{,}2
- KPI 2024: 161{,}0

a) Bestefar fikk 100 kr i bursdagsgave i år 2000. Hva tilsvarer dette beløpet i 2024-kroner?

b) Hva er kjøpekraften til 100 kr fra 2024 sammenlignet med kroner i 2000?`,
      solution: `**Løsning:**

a) 100 kr fra 2000 i 2024-kroner:
$$100 \\times \\frac{161{,}0}{103{,}2} \\approx 100 \\times 1{,}560 \\approx 156{,}01 \\text{ kr}$$

Du måtte hatt 156 kr i 2024 for å kjøpe det samme som 100 kr kunne kjøpe i 2000.

b) Kjøpekraft i 2000-kroner:
$$100 \\times \\frac{103{,}2}{161{,}0} \\approx 100 \\times 0{,}641 \\approx 64{,}10 \\text{ kr}$$

100 kr i dag har omtrent samme kjøpekraft som 64 kr hadde i 2000. Kroneverdien har altså sunket betydelig.`,
    },

    // --- Blokk 13: Tips deflatere/inflatere ---
    {
      id: '1p-8-5-tip-deflatere',
      type: 'tip',
      title: 'Deflatere og inflatere',
      content: `Å **inflatere** betyr å regne et gammelt beløp om til dagens verdi (opp i tid).

Å **deflatere** betyr å regne et nåværende beløp tilbake til et tidligere års verdi (ned i tid).

Begge bruker samme formel med KPI, men du bytter hvilken KPI som er i teller og nevner.`,
    },

    // --- Blokk 14: Oppgave reallønn ---
    {
      id: '1p-8-5-ex-block-2',
      type: 'exercise',
      exercise: {
        id: '1p-8-5-ex-2',
        number: '8.13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En sykepleier tjente 340 000 kr i 2012. I 2024 tjener en sykepleier i tilsvarende stilling 455 000 kr.

KPI (1998 = 100):
- KPI 2012: 126,9
- KPI 2024: 161,0

a) Hva tilsvarer 2012-lønnen i 2024-kroner?

b) Hvor stor er den nominelle lønnsøkningen i prosent?

c) Har sykepleieren fått reallønnsøkning? Begrunn svaret.`,
        subTasks: [
          {
            label: 'a',
            task: 'Regn om 340 000 kr fra 2012 til 2024-kroner.',
            solution: `$340\\,000 \\times \\frac{161{,}0}{126{,}9} \\approx 340\\,000 \\times 1{,}269 \\approx 431\\,304$ kr`,
            answer: 431304,
          },
          {
            label: 'b',
            task: 'Nominell lønnsøkning i prosent.',
            solution: `$\\frac{455\\,000 - 340\\,000}{340\\,000} \\times 100\\% = \\frac{115\\,000}{340\\,000} \\times 100\\% \\approx 33{,}8\\%$`,
            answer: 33.8,
          },
          {
            label: 'c',
            task: 'Har sykepleieren fått reallønnsøkning?',
            solution: `Ja. 2012-lønnen tilsvarer ca. 431 304 kr i 2024-kroner, mens den faktiske lønnen i 2024 er 455 000 kr. Reallønnsøkningen er $455\\,000 - 431\\,304 = 23\\,696$ kr, altså ca. 5,5 % reell økning.`,
          },
        ],
        solution: 'a) ca. 431 304 kr  b) ca. 33,8 %  c) Ja, reallønnsøkning på ca. 23 696 kr (5,5 %)',
        hints: [
          'Bruk KPI-forholdet til å justere 2012-lønnen',
          'Nominell økning regnes uten å justere for KPI',
          'Sammenlign den inflasjonsjusterte 2012-lønnen med 2024-lønnen',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Blokk 15: Oppgave kroneverdi ---
    {
      id: '1p-8-5-ex-block-3',
      type: 'exercise',
      exercise: {
        id: '1p-8-5-ex-3',
        number: '8.14',
        type: 'classic',
        difficulty: 'medium',
        task: `KPI (1998 = 100):
- KPI 2005: 113,3
- KPI 2024: 161,0

a) En konsertbillett kostet 350 kr i 2005. Hva tilsvarer det i 2024-kroner?

b) Hva er kjøpekraften til 500 kr i 2024 sammenlignet med 2005-kroner?`,
        subTasks: [
          {
            label: 'a',
            task: 'Konsertbillett fra 2005 i 2024-kroner.',
            solution: `$350 \\times \\frac{161{,}0}{113{,}3} \\approx 350 \\times 1{,}421 \\approx 497{,}35$ kr`,
            answer: 497.35,
          },
          {
            label: 'b',
            task: '500 kr i 2024 uttrykt i 2005-kroner.',
            solution: `$500 \\times \\frac{113{,}3}{161{,}0} \\approx 500 \\times 0{,}704 \\approx 351{,}71$ kr`,
            answer: 351.71,
          },
        ],
        solution: 'a) ca. 497,35 kr  b) ca. 351,71 kr',
        hints: [
          'Inflatere: gang med KPI nytt år / KPI gammelt år',
          'Deflatere: gang med KPI gammelt år / KPI nytt år',
        ],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Blokk 16: Oppsummering ---
    {
      id: '1p-8-5-oppsummering',
      type: 'note',
      content: `**Oppsummering kapittel 8.5:**

- **Indeks** sammenligner verdier over tid med et basisår satt til 100
- **KPI** (konsumprisindeksen) måler generell prisstigning (inflasjon)
- Justere for inflasjon: $\\text{Ny pris} = \\text{Gammel pris} \\times \\frac{\\text{KPI ny}}{\\text{KPI gammel}}$
- **Nominell lønn** = lønn i kroner, **reallønn** = lønn justert for prisstigning
- **Kroneverdien** synker når prisene stiger (inflasjon)
- **Inflatere** = regne gammelt beløp opp til dagens verdi
- **Deflatere** = regne dagens beløp ned til en tidligere verdi`,
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const CHAPTERS_1P_OKONOMI = [CHAPTER_1P_8_3, CHAPTER_1P_8_4, CHAPTER_1P_8_5];
