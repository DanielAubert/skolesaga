/**
 * Tekstbok kapitler for 2P-Y (Matematikk for yrkesfag VG2)
 * Praktisk matematikk med yrkesfaglige eksempler
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: ØKONOMI I HVERDAGEN
// ============================================================================

export const CHAPTER_2PY_1_1: TextbookChapter = {
  id: '2py-1-1',
  courseId: '2py',
  chapterNumber: '1.1',
  title: 'Privatøkonomi og budsjett',
  description: 'Lær å sette opp budsjett, holde oversikt over inntekter og utgifter, og planlegge din egen økonomi.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og gjøre rede for egen økonomi',
    'sette opp og bruke budsjett',
  ],
  content: [
    {
      id: '2py-1-1-intro',
      type: 'text',
      content: `## Hva er privatøkonomi?

Privatøkonomi handler om hvordan du styrer pengene dine. Det inkluderer:
- **Inntekter**: Penger du får inn (lønn, stipend, støtte)
- **Utgifter**: Penger du bruker (mat, husleie, transport, fritid)
- **Sparing**: Penger du setter til side for fremtiden

God privatøkonomi betyr at du har kontroll på pengebruken din og unngår å bruke mer enn du tjener.`,
    },
    {
      id: '2py-1-1-budsjett-def',
      type: 'definition',
      title: 'Budsjett',
      content: `Et **budsjett** er en plan for hvordan du vil bruke pengene dine i en bestemt periode (vanligvis en måned).

**Budsjettbalanse** = Inntekter - Utgifter

- Hvis resultatet er positivt: Du har penger til overs (overskudd)
- Hvis resultatet er negativt: Du bruker mer enn du tjener (underskudd)`,
    },
    {
      id: '2py-1-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Månedsbudsjett for lærling',
      problem: `Jonas er lærling som elektriker. Han har følgende månedlige inntekter og utgifter:

**Inntekter:**
- Lærlinglønn (netto): 18 500 kr

**Faste utgifter:**
- Husleie: 6 500 kr
- Strøm og internett: 800 kr
- Mobilabonnement: 399 kr
- Forsikringer: 450 kr
- Busskort: 750 kr

**Variable utgifter:**
- Mat: 4 000 kr
- Klær og sko: 500 kr
- Fritid og underholdning: 1 500 kr

a) Sett opp budsjettet og finn budsjettbalansen.
b) Hvor mye kan Jonas spare hver måned?`,
      solution: `**Løsning:**

a) **Budsjett for Jonas:**

| Post | Beløp |
|------|-------|
| **Inntekter** | |
| Lærlinglønn | 18 500 kr |
| **Sum inntekter** | **18 500 kr** |
| | |
| **Faste utgifter** | |
| Husleie | 6 500 kr |
| Strøm og internett | 800 kr |
| Mobilabonnement | 399 kr |
| Forsikringer | 450 kr |
| Busskort | 750 kr |
| **Sum faste utgifter** | **8 899 kr** |
| | |
| **Variable utgifter** | |
| Mat | 4 000 kr |
| Klær og sko | 500 kr |
| Fritid | 1 500 kr |
| **Sum variable utgifter** | **6 000 kr** |
| | |
| **Sum utgifter** | **14 899 kr** |

**Budsjettbalanse** = 18 500 kr - 14 899 kr = **3 601 kr**

b) Jonas kan spare **3 601 kr** hver måned hvis han holder seg til budsjettet.`,
    },
    {
      id: '2py-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-1-1-ex-1',
        number: '1.1',
        type: 'classic',
        difficulty: 'lett',
        task: `Maria er lærling som frisør. Hun har følgende månedlige økonomi:

**Inntekter:**
- Lærlinglønn (netto): 16 800 kr

**Utgifter:**
- Husleie (deler leilighet): 5 000 kr
- Strøm: 400 kr
- Mobil: 349 kr
- Streaming-tjenester: 199 kr
- Mat: 3 500 kr
- Transport: 600 kr
- Fritid: 2 000 kr
- Klær: 800 kr

a) Regn ut summen av alle utgiftene.
b) Finn budsjettbalansen.
c) Hvor stor prosentandel av inntekten går til husleie?`,
        subTasks: [
          { label: 'a', task: 'Regn ut summen av alle utgiftene.', solution: '$5000 + 400 + 349 + 199 + 3500 + 600 + 2000 + 800 = 12\\,848$ kr', answer: 12848 },
          { label: 'b', task: 'Finn budsjettbalansen.', solution: '$16\\,800 - 12\\,848 = 3\\,952$ kr', answer: 3952 },
          { label: 'c', task: 'Hvor stor prosentandel av inntekten går til husleie?', solution: '$\\frac{5000}{16800} \\cdot 100\\% \\approx 29{,}8\\%$', answer: 29.8 },
        ],
        hints: ['Summer alle utgiftene først', 'Budsjettbalanse = Inntekter - Utgifter', 'Prosentandel = (Del/Helhet) · 100%'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-1-1-text-2',
      type: 'text',
      content: `## Inntekter og skatt

Når du jobber, får du **bruttolønn** fra arbeidsgiveren. Men du må betale **skatt** til staten, så det du faktisk får utbetalt er **nettolønn**.

$$\\text{Nettolønn} = \\text{Bruttolønn} - \\text{Skatt}$$

Skatten beregnes ut fra en **skatteprosent** (trekk­prosent) som varierer avhengig av hvor mye du tjener.`,
    },
    {
      id: '2py-1-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Beregne nettolønn',
      problem: `Kristian jobber deltid på byggeplass ved siden av skolen. Han har en timelønn på 185 kr og jobber 60 timer i måneden. Trekkprosenten hans er 25 %.

a) Hva er bruttolønnen hans per måned?
b) Hvor mye trekkes i skatt?
c) Hva er nettolønnen?`,
      solution: `**Løsning:**

a) **Bruttolønn:**
$$\\text{Bruttolønn} = 185 \\text{ kr} \\cdot 60 = 11\\,100 \\text{ kr}$$

b) **Skattetrekk:**
$$\\text{Skatt} = 11\\,100 \\text{ kr} \\cdot 0{,}25 = 2\\,775 \\text{ kr}$$

c) **Nettolønn:**
$$\\text{Nettolønn} = 11\\,100 - 2\\,775 = 8\\,325 \\text{ kr}$$`,
    },
    {
      id: '2py-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-1-1-ex-2',
        number: '1.2',
        type: 'classic',
        difficulty: 'lett',
        task: `Emma jobber som servitør i helgene. Hun tjener 195 kr per time og jobbet 48 timer forrige måned. Hun fikk også 2 400 kr i tips. Trekkprosenten hennes er 22 %.

a) Hva er den totale bruttoinntekten (lønn + tips)?
b) Hvor mye trekkes i skatt?
c) Hva blir nettoinntekten?`,
        subTasks: [
          { label: 'a', task: 'Total bruttoinntekt', solution: '$195 \\cdot 48 + 2400 = 9360 + 2400 = 11\\,760$ kr', answer: 11760 },
          { label: 'b', task: 'Skattetrekk', solution: '$11\\,760 \\cdot 0{,}22 = 2\\,587{,}20$ kr', answer: 2587.20 },
          { label: 'c', task: 'Nettoinntekt', solution: '$11\\,760 - 2\\,587{,}20 = 9\\,172{,}80$ kr', answer: 9172.80 },
        ],
        hints: ['Husk å legge til tipsen i bruttoinntekten', 'Skattetrekk = Brutto · Trekkprosent'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-1-1-ex-3',
        number: '1.3',
        type: 'classic',
        difficulty: 'medium',
        task: `Andreas har nettolønn på 22 000 kr per måned. Han vil sette opp et budsjett der han følger "50/30/20-regelen":
- 50 % til nødvendige utgifter (husleie, mat, transport)
- 30 % til ønsker (fritid, klær, underholdning)
- 20 % til sparing og nedbetaling av gjeld

a) Hvor mye kan han bruke på nødvendige utgifter?
b) Hvor mye kan han bruke på ønsker?
c) Hvor mye bør han spare hver måned?
d) Hvis husleien er 8 000 kr, hvor mye har han igjen til mat og transport?`,
        subTasks: [
          { label: 'a', task: 'Nødvendige utgifter (50%)', solution: '$22\\,000 \\cdot 0{,}50 = 11\\,000$ kr', answer: 11000 },
          { label: 'b', task: 'Ønsker (30%)', solution: '$22\\,000 \\cdot 0{,}30 = 6\\,600$ kr', answer: 6600 },
          { label: 'c', task: 'Sparing (20%)', solution: '$22\\,000 \\cdot 0{,}20 = 4\\,400$ kr', answer: 4400 },
          { label: 'd', task: 'Igjen til mat og transport', solution: '$11\\,000 - 8\\,000 = 3\\,000$ kr', answer: 3000 },
        ],
        hints: ['Bruk desimaltall for prosentene: 50% = 0,50'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-1-1-ex-4',
        number: '1.4',
        type: 'classic',
        difficulty: 'medium',
        task: `En snekker har fast månedslønn på 42 000 kr brutto. I tillegg får han overtidsbetaling:
- 50 % tillegg for arbeid mellom kl. 17-21 på hverdager
- 100 % tillegg for arbeid på lørdager

Timelønnen hans er 262,50 kr (basert på 160 timer per måned).

Denne måneden jobbet han:
- 8 timer overtid på kveldstid (17-21)
- 6 timer på en lørdag

Trekkprosenten er 34 %.

a) Beregn overtidsbetalingen for kveldstimene.
b) Beregn overtidsbetalingen for lørdagstimene.
c) Hva blir total bruttolønn denne måneden?
d) Hva blir nettolønnen?`,
        subTasks: [
          { label: 'a', task: 'Overtid kveld', solution: '$262{,}50 \\cdot 1{,}5 \\cdot 8 = 3\\,150$ kr', answer: 3150 },
          { label: 'b', task: 'Overtid lørdag', solution: '$262{,}50 \\cdot 2 \\cdot 6 = 3\\,150$ kr', answer: 3150 },
          { label: 'c', task: 'Total bruttolønn', solution: '$42\\,000 + 3\\,150 + 3\\,150 = 48\\,300$ kr', answer: 48300 },
          { label: 'd', task: 'Nettolønn', solution: '$48\\,300 \\cdot (1 - 0{,}34) = 48\\,300 \\cdot 0{,}66 = 31\\,878$ kr', answer: 31878 },
        ],
        hints: ['50% tillegg betyr at du ganger med 1,5', '100% tillegg betyr at du ganger med 2'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_2PY_1_2: TextbookChapter = {
  id: '2py-1-2',
  courseId: '2py',
  chapterNumber: '1.2',
  title: 'Lån og renter',
  description: 'Forstå hvordan lån fungerer, beregn renter og nedbetalingsplaner.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beregne renter på lån og sparing',
    'forstå forskjellen på nominell og effektiv rente',
  ],
  content: [
    {
      id: '2py-1-2-intro',
      type: 'text',
      content: `## Hva er rente?

**Rente** er prisen du betaler for å låne penger, eller gevinsten du får for å spare penger.

- Når du **låner** penger, må du betale rente til banken
- Når du **sparer** penger, får du rente fra banken

Renten oppgis vanligvis som en **prosent per år** (årlig rente).`,
    },
    {
      id: '2py-1-2-formel',
      type: 'formula',
      title: 'Renteformel',
      latex: `R = K \\cdot p \\cdot t`,
      description: `Der:
- $R$ = Rentekostnad (i kroner)
- $K$ = Kapital / Lånebeløp (i kroner)
- $p$ = Rentesats (som desimaltall, f.eks. 5% = 0,05)
- $t$ = Tid (i år)`,
    },
    {
      id: '2py-1-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Enkel renteberegning',
      problem: `Marie låner 50 000 kr til å kjøpe bruktbil. Lånet har 6 % årlig rente.

a) Hvor mye betaler hun i rente det første året?
b) Hvis hun beholder lånet i 3 år med samme beløp, hvor mye betaler hun totalt i renter?`,
      solution: `**Løsning:**

a) Rente første år:
$$R = K \\cdot p = 50\\,000 \\cdot 0{,}06 = 3\\,000 \\text{ kr}$$

b) Renter over 3 år (enkel rente):
$$R = K \\cdot p \\cdot t = 50\\,000 \\cdot 0{,}06 \\cdot 3 = 9\\,000 \\text{ kr}$$

Marie betaler **3 000 kr** i rente det første året og totalt **9 000 kr** hvis hun beholder hele lånet i 3 år.`,
    },
    {
      id: '2py-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-1-2-ex-1',
        number: '1.5',
        type: 'classic',
        difficulty: 'lett',
        task: `Thomas låner 30 000 kr til kjøp av verktøy og utstyr. Lånet har 7,5 % årlig rente.

a) Hvor mye betaler han i rente det første året?
b) Hvor mye betaler han totalt i rente over 2 år?
c) Hva blir totalbeløpet han må betale tilbake etter 2 år?`,
        subTasks: [
          { label: 'a', task: 'Rente første år', solution: '$30\\,000 \\cdot 0{,}075 = 2\\,250$ kr', answer: 2250 },
          { label: 'b', task: 'Total rente over 2 år', solution: '$30\\,000 \\cdot 0{,}075 \\cdot 2 = 4\\,500$ kr', answer: 4500 },
          { label: 'c', task: 'Totalbeløp', solution: '$30\\,000 + 4\\,500 = 34\\,500$ kr', answer: 34500 },
        ],
        hints: ['Husk å gjøre om prosent til desimaltall: 7,5% = 0,075'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-1-2-text-2',
      type: 'text',
      content: `## Månedlig nedbetaling (annuitetslån)

De fleste lån betales ned månedlig med faste beløp som inkluderer både **renter** og **avdrag**.

- **Avdrag**: Den delen som reduserer selve lånet
- **Renter**: Kostnaden for å ha lånet

Ved et **annuitetslån** er terminbeløpet (månedlig betaling) likt gjennom hele låneperioden.`,
    },
    {
      id: '2py-1-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Billån med månedlig nedbetaling',
      problem: `Lisa kjøper en bruktbil for 120 000 kr. Hun får billån med følgende vilkår:
- Lånebeløp: 120 000 kr
- Årlig rente: 8 %
- Nedbetalingstid: 5 år
- Månedlig terminbeløp: 2 433 kr

a) Hvor mye betaler Lisa totalt over 5 år?
b) Hvor mye betaler hun i renter totalt?
c) Hva blir den første månedens rentekostnad?`,
      solution: `**Løsning:**

a) Totalt betalt over 5 år:
$$\\text{Totalt} = 2\\,433 \\text{ kr} \\cdot 12 \\cdot 5 = 2\\,433 \\cdot 60 = 145\\,980 \\text{ kr}$$

b) Totale rentekostnader:
$$\\text{Renter} = 145\\,980 - 120\\,000 = 25\\,980 \\text{ kr}$$

c) Første måneds rentekostnad:
Månedlig rente = Årlig rente / 12 = 8% / 12 = 0,667% = 0,00667

$$\\text{Rente måned 1} = 120\\,000 \\cdot 0{,}00667 = 800 \\text{ kr}$$`,
    },
    {
      id: '2py-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-1-2-ex-2',
        number: '1.6',
        type: 'classic',
        difficulty: 'medium',
        task: `Erik tar opp forbrukslån på 80 000 kr for å pusse opp leiligheten.
- Årlig rente: 12 %
- Nedbetalingstid: 4 år
- Månedlig terminbeløp: 2 107 kr

a) Hvor mange måneder varer lånet?
b) Hvor mye betaler Erik totalt?
c) Hvor mye betaler han i renter?
d) Hva er rentekostnaden den første måneden?`,
        subTasks: [
          { label: 'a', task: 'Antall måneder', solution: '$4 \\cdot 12 = 48$ måneder', answer: 48 },
          { label: 'b', task: 'Totalt betalt', solution: '$2\\,107 \\cdot 48 = 101\\,136$ kr', answer: 101136 },
          { label: 'c', task: 'Totale renter', solution: '$101\\,136 - 80\\,000 = 21\\,136$ kr', answer: 21136 },
          { label: 'd', task: 'Rente første måned', solution: '$80\\,000 \\cdot \\frac{0{,}12}{12} = 80\\,000 \\cdot 0{,}01 = 800$ kr', answer: 800 },
        ],
        hints: ['Månedlig rente = Årlig rente / 12'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-1-2-text-3',
      type: 'text',
      content: `## Nominell vs. effektiv rente

- **Nominell rente**: Grunnrenten som oppgis for lånet
- **Effektiv rente**: Den faktiske årlige kostnaden, inkludert gebyrer og rentesrente

Effektiv rente er alltid høyere enn nominell rente og gir et mer realistisk bilde av lånekostnaden.`,
    },
    {
      id: '2py-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-1-2-ex-3',
        number: '1.7',
        type: 'classic',
        difficulty: 'medium',
        task: `Sammenlign to lånetilbud for et billån på 150 000 kr over 5 år:

**Tilbud A:**
- Nominell rente: 6,9 %
- Effektiv rente: 7,8 %
- Månedlig terminbeløp: 2 965 kr
- Etableringsgebyr: 3 000 kr

**Tilbud B:**
- Nominell rente: 7,5 %
- Effektiv rente: 7,9 %
- Månedlig terminbeløp: 3 004 kr
- Etableringsgebyr: 0 kr

a) Hva er totalkostnaden for tilbud A (terminbeløp × antall måneder + gebyr)?
b) Hva er totalkostnaden for tilbud B?
c) Hvilket tilbud er billigst?
d) Hvorfor er effektiv rente på tilbud A lavere enn B, selv om nominell rente er lavere?`,
        subTasks: [
          { label: 'a', task: 'Totalkostnad A', solution: '$2\\,965 \\cdot 60 + 3\\,000 = 177\\,900 + 3\\,000 = 180\\,900$ kr', answer: 180900 },
          { label: 'b', task: 'Totalkostnad B', solution: '$3\\,004 \\cdot 60 = 180\\,240$ kr', answer: 180240 },
          { label: 'c', task: 'Billigste tilbud', solution: 'Tilbud B er billigst (180 240 kr < 180 900 kr)' },
          { label: 'd', task: 'Forklaring', solution: 'Etableringsgebyret i tilbud A gjør at effektiv rente blir høyere enn nominell rente antyder' },
        ],
        hints: ['Husk å legge til etableringsgebyret', 'Effektiv rente inkluderer alle kostnader'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-1-2-ex-4',
        number: '1.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Kari skal kjøpe motorsykkel til 95 000 kr. Hun har 20 000 kr i egenkapital og må låne resten.

Lånevilkår:
- Lånebeløp: 75 000 kr
- Årlig rente: 9,5 %
- Nedbetalingstid: 3 år
- Månedlig terminbeløp: 2 401 kr

a) Beregn totalt betalt over låneperioden.
b) Beregn totale rentekostnader.
c) Hva blir den totale kostnaden for motorsykkelen (egenkapital + lån + renter)?
d) Den første måneden er renten 594 kr. Hvor mye av terminbeløpet går til avdrag?`,
        subTasks: [
          { label: 'a', task: 'Totalt betalt', solution: '$2\\,401 \\cdot 36 = 86\\,436$ kr', answer: 86436 },
          { label: 'b', task: 'Totale renter', solution: '$86\\,436 - 75\\,000 = 11\\,436$ kr', answer: 11436 },
          { label: 'c', task: 'Total kostnad', solution: '$20\\,000 + 86\\,436 = 106\\,436$ kr', answer: 106436 },
          { label: 'd', task: 'Avdrag første måned', solution: '$2\\,401 - 594 = 1\\,807$ kr', answer: 1807 },
        ],
        hints: ['Terminbeløp = Rente + Avdrag'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_2PY_1_3: TextbookChapter = {
  id: '2py-1-3',
  courseId: '2py',
  chapterNumber: '1.3',
  title: 'Skatt og avgifter',
  description: 'Lær om det norske skattesystemet, beregning av skatt, og vanlige avgifter.',
  estimatedMinutes: 45,
  competenceGoals: [
    'forstå grunnleggende skatteberegning',
    'beregne merverdiavgift (mva)',
  ],
  content: [
    {
      id: '2py-1-3-intro',
      type: 'text',
      content: `## Skattesystemet

Skatt er penger vi betaler til stat og kommune for å finansiere fellesgoder som:
- Skoler og utdanning
- Helsetjenester
- Veier og infrastruktur
- Politi og forsvar

De viktigste skattene er:
- **Inntektsskatt**: Skatt på lønn og andre inntekter
- **Merverdiavgift (mva)**: Skatt på varer og tjenester
- **Formuesskatt**: Skatt på verdier du eier`,
    },
    {
      id: '2py-1-3-def-mva',
      type: 'definition',
      title: 'Merverdiavgift (mva)',
      content: `**Merverdiavgift** er en avgift som legges på prisen når du kjøper varer og tjenester.

I Norge har vi tre mva-satser:
- **25 %**: Generell sats (de fleste varer og tjenester)
- **15 %**: Mat og drikke
- **12 %**: Persontransport, kino, hotell

**Pris inkl. mva** = Pris ekskl. mva × (1 + mva-sats)
**Pris ekskl. mva** = Pris inkl. mva ÷ (1 + mva-sats)`,
    },
    {
      id: '2py-1-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Beregne mva',
      problem: `En elektriker kjøper materialer til en jobb:
- Kabler og ledninger: 2 400 kr ekskl. mva
- Sikringsskap: 3 800 kr ekskl. mva
- Verktøy: 1 200 kr ekskl. mva

Alle varene har 25 % mva.

a) Hva er totalprisen ekskl. mva?
b) Hvor mye er mva-beløpet?
c) Hva er totalprisen inkl. mva?`,
      solution: `**Løsning:**

a) Totalpris ekskl. mva:
$$2\\,400 + 3\\,800 + 1\\,200 = 7\\,400 \\text{ kr}$$

b) Mva-beløp:
$$7\\,400 \\cdot 0{,}25 = 1\\,850 \\text{ kr}$$

c) Totalpris inkl. mva:
$$7\\,400 + 1\\,850 = 9\\,250 \\text{ kr}$$

Eller: $7\\,400 \\cdot 1{,}25 = 9\\,250$ kr`,
    },
    {
      id: '2py-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-1-3-ex-1',
        number: '1.9',
        type: 'classic',
        difficulty: 'lett',
        task: `En rørlegger kjøper følgende til et bad-prosjekt:
- Rør og koblinger: 4 500 kr ekskl. mva
- Servant: 2 800 kr ekskl. mva
- Toalett: 3 200 kr ekskl. mva
- Arbeidshansker: 150 kr ekskl. mva

Alt har 25 % mva.

a) Hva er totalsummen ekskl. mva?
b) Beregn mva-beløpet.
c) Hva blir totalprisen inkl. mva?`,
        subTasks: [
          { label: 'a', task: 'Sum ekskl. mva', solution: '$4\\,500 + 2\\,800 + 3\\,200 + 150 = 10\\,650$ kr', answer: 10650 },
          { label: 'b', task: 'Mva-beløp', solution: '$10\\,650 \\cdot 0{,}25 = 2\\,662{,}50$ kr', answer: 2662.50 },
          { label: 'c', task: 'Totalpris inkl. mva', solution: '$10\\,650 + 2\\,662{,}50 = 13\\,312{,}50$ kr', answer: 13312.50 },
        ],
        hints: ['Summer alle beløpene først', 'Mva = Sum × 0,25'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-1-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Finne pris uten mva',
      problem: `En bensinstasjon selger diesel for 21,90 kr per liter inkl. mva (25 %).

a) Hva er prisen ekskl. mva?
b) Hvor mye av prisen er mva?`,
      solution: `**Løsning:**

a) Pris ekskl. mva:
$$\\text{Pris ekskl.} = \\frac{21{,}90}{1{,}25} = 17{,}52 \\text{ kr}$$

b) Mva-beløp:
$$21{,}90 - 17{,}52 = 4{,}38 \\text{ kr}$$

Eller: $17{,}52 \\cdot 0{,}25 = 4{,}38$ kr`,
    },
    {
      id: '2py-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-1-3-ex-2',
        number: '1.10',
        type: 'classic',
        difficulty: 'medium',
        task: `En håndverker sender faktura til en kunde på 28 750 kr inkl. mva (25 %).

a) Hva er beløpet ekskl. mva?
b) Hvor mye er mva-beløpet?
c) Håndverkeren må betale 23 000 kr av beløpet ekskl. mva til materialekostnader. Hvor mye har han igjen til lønn og fortjeneste?`,
        subTasks: [
          { label: 'a', task: 'Beløp ekskl. mva', solution: '$\\frac{28\\,750}{1{,}25} = 23\\,000$ kr', answer: 23000 },
          { label: 'b', task: 'Mva-beløp', solution: '$28\\,750 - 23\\,000 = 5\\,750$ kr', answer: 5750 },
          { label: 'c', task: 'Igjen til lønn', solution: '$23\\,000 - 23\\,000 = 0$ kr (all omsetning gikk til materialer)', answer: 0 },
        ],
        hints: ['Del på 1,25 for å finne pris uten mva'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-1-3-text-2',
      type: 'text',
      content: `## Ulike mva-satser

Når du handler mat på butikken, er mva-satsen bare 15 %. Dette gjør at maten blir relativt billigere.

**Eksempel på priskalkyle for restaurant:**
- Råvarer (mat) har 15 % mva når restauranten kjøper inn
- Serveringen har 25 % mva når kunden betaler`,
    },
    {
      id: '2py-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-1-3-ex-3',
        number: '1.11',
        type: 'classic',
        difficulty: 'medium',
        task: `En familie handler på matbutikken og kjøper:
- Matvarer for 850 kr ekskl. mva (15 % mva)
- Husholdningsartikler for 320 kr ekskl. mva (25 % mva)

a) Beregn mva på matvarene.
b) Beregn mva på husholdningsartiklene.
c) Hva blir totalprisen inkl. mva?`,
        subTasks: [
          { label: 'a', task: 'Mva matvarer', solution: '$850 \\cdot 0{,}15 = 127{,}50$ kr', answer: 127.50 },
          { label: 'b', task: 'Mva husholdning', solution: '$320 \\cdot 0{,}25 = 80$ kr', answer: 80 },
          { label: 'c', task: 'Totalpris inkl. mva', solution: '$(850 + 127{,}50) + (320 + 80) = 977{,}50 + 400 = 1\\,377{,}50$ kr', answer: 1377.50 },
        ],
        hints: ['Bruk riktig mva-sats for hver kategori'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-1-3-ex-4',
        number: '1.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En kafé kjøper inn råvarer og selger mat og drikke:

**Innkjøp (ekskl. mva):**
- Kaffe og te: 2 400 kr (15 % mva)
- Bakervarer: 3 600 kr (15 % mva)
- Emballasje og servietter: 800 kr (25 % mva)

**Salg (inkl. mva, 25 % mva på alt salg i kafé):**
- Dagens omsetning: 18 750 kr

a) Beregn total innkjøpspris inkl. mva.
b) Beregn omsetning ekskl. mva.
c) Hvor mye mva skal kaféen betale til staten? (Mva på salg minus mva på innkjøp)`,
        subTasks: [
          { label: 'a', task: 'Innkjøp inkl. mva', solution: '$(2400 + 3600) \\cdot 1{,}15 + 800 \\cdot 1{,}25 = 6\\,900 + 1\\,000 = 7\\,900$ kr', answer: 7900 },
          { label: 'b', task: 'Omsetning ekskl. mva', solution: '$\\frac{18\\,750}{1{,}25} = 15\\,000$ kr', answer: 15000 },
          { label: 'c', task: 'Mva til staten', solution: 'Mva salg: $18\\,750 - 15\\,000 = 3\\,750$ kr. Mva innkjøp: $6\\,000 \\cdot 0{,}15 + 800 \\cdot 0{,}25 = 900 + 200 = 1\\,100$ kr. Til staten: $3\\,750 - 1\\,100 = 2\\,650$ kr', answer: 2650 },
        ],
        hints: ['Kaféen får fradrag for mva på innkjøp', 'Netto mva = Utgående mva - Inngående mva'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: FUNKSJONER OG GRAFER
// ============================================================================

export const CHAPTER_2PY_2_1: TextbookChapter = {
  id: '2py-2-1',
  courseId: '2py',
  chapterNumber: '2.1',
  title: 'Lineære sammenhenger',
  description: 'Forstå og bruke lineære funksjoner i praktiske situasjoner fra arbeidslivet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå sammenhengen mellom lineære funksjoner og rette linjer',
    'tolke og bruke stigningstall og konstantledd',
  ],
  content: [
    {
      id: '2py-2-1-intro',
      type: 'text',
      content: `## Hva er en lineær funksjon?

En **lineær funksjon** beskriver en rett linje og har formen:

$$f(x) = ax + b$$

Der:
- $a$ = **stigningstallet** (hvor bratt linjen er)
- $b$ = **konstantleddet** (hvor linjen krysser y-aksen)

Lineære funksjoner er nyttige for å beskrive sammenhenger der noe øker eller minker jevnt.`,
    },
    {
      id: '2py-2-1-def',
      type: 'definition',
      title: 'Stigningstall',
      content: `**Stigningstallet** $a$ forteller hvor mye $y$-verdien endrer seg når $x$ øker med 1.

$$a = \\frac{\\Delta y}{\\Delta x} = \\frac{y_2 - y_1}{x_2 - x_1}$$

- Hvis $a > 0$: Linjen stiger (går oppover mot høyre)
- Hvis $a < 0$: Linjen synker (går nedover mot høyre)
- Hvis $a = 0$: Linjen er vannrett`,
    },
    {
      id: '2py-2-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Timelønn og inntekt',
      problem: `En mekaniker tjener 285 kr per time.

a) Sett opp en funksjon $f(x)$ som gir inntekten når han jobber $x$ timer.
b) Hva er stigningstallet, og hva betyr det?
c) Hvor mye tjener han på en 8-timers arbeidsdag?
d) Tegn grafen for $x$ fra 0 til 10.`,
      solution: `**Løsning:**

a) Funksjonen blir:
$$f(x) = 285x$$

b) Stigningstallet er $a = 285$. Det betyr at inntekten øker med **285 kr for hver time** han jobber.

c) Inntekt for 8 timer:
$$f(8) = 285 \\cdot 8 = 2\\,280 \\text{ kr}$$

d) Grafen er en rett linje som starter i origo (0, 0) og stiger med 285 kr per time.`,
    },
    {
      id: '2py-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-2-1-ex-1',
        number: '2.1',
        type: 'classic',
        difficulty: 'lett',
        task: `En tømrer har en timepris på 520 kr ekskl. mva for arbeid.

a) Sett opp en funksjon $P(t)$ som gir prisen for $t$ timer arbeid.
b) Hva koster det hvis tømreren jobber i 6 timer?
c) Hvor mange timer har tømreren jobbet hvis regningen er på 3 900 kr?`,
        subTasks: [
          { label: 'a', task: 'Sett opp funksjonen', solution: '$P(t) = 520t$' },
          { label: 'b', task: 'Pris for 6 timer', solution: '$P(6) = 520 \\cdot 6 = 3\\,120$ kr', answer: 3120 },
          { label: 'c', task: 'Timer for 3900 kr', solution: '$520t = 3\\,900 \\Rightarrow t = \\frac{3\\,900}{520} = 7{,}5$ timer', answer: 7.5 },
        ],
        hints: ['Pris = Timepris × Antall timer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-2-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Strømforbruk',
      problem: `En bedrift har fast nettleie på 450 kr per måned pluss 1,20 kr per kWh strømforbruk.

a) Sett opp en funksjon $K(x)$ som gir månedlig strømkostnad når forbruket er $x$ kWh.
b) Hva er stigningstallet og konstantleddet, og hva betyr de?
c) Hva blir strømregningen hvis forbruket er 1 800 kWh?`,
      solution: `**Løsning:**

a) Funksjonen blir:
$$K(x) = 1{,}20x + 450$$

b)
- Stigningstallet $a = 1{,}20$ betyr at kostnaden øker med **1,20 kr per kWh**
- Konstantleddet $b = 450$ er den **faste nettleien** som betales uansett forbruk

c) Strømregning for 1 800 kWh:
$$K(1800) = 1{,}20 \\cdot 1800 + 450 = 2\\,160 + 450 = 2\\,610 \\text{ kr}$$`,
    },
    {
      id: '2py-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-2-1-ex-2',
        number: '2.2',
        type: 'classic',
        difficulty: 'medium',
        task: `Et taxiselskap tar 60 kr i oppstartspris pluss 18 kr per km.

a) Sett opp en funksjon $P(x)$ for prisen når turen er $x$ km.
b) Hva koster en tur på 15 km?
c) Hvor lang var turen hvis prisen ble 276 kr?
d) Tegn grafen for $x$ fra 0 til 20 km.`,
        subTasks: [
          { label: 'a', task: 'Funksjonen', solution: '$P(x) = 18x + 60$' },
          { label: 'b', task: 'Pris for 15 km', solution: '$P(15) = 18 \\cdot 15 + 60 = 270 + 60 = 330$ kr', answer: 330 },
          { label: 'c', task: 'Avstand for 276 kr', solution: '$18x + 60 = 276 \\Rightarrow 18x = 216 \\Rightarrow x = 12$ km', answer: 12 },
          { label: 'd', task: 'Tegn grafen', solution: 'Rett linje fra (0, 60) med stigning 18' },
        ],
        hints: ['Pris = Pris per km × Antall km + Oppstartspris'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-2-1-ex-3',
        number: '2.3',
        type: 'classic',
        difficulty: 'medium',
        task: `En elektriker tar 850 kr i utkjøring pluss 495 kr per time.

a) Sett opp funksjonen for totalpris.
b) Hvor mye koster det hvis elektrikeren jobber i 3,5 timer?
c) Kunden fikk en regning på 2 830 kr. Hvor lenge jobbet elektrikeren?
d) Hva blir prisen inkl. 25 % mva for 4 timers arbeid?`,
        subTasks: [
          { label: 'a', task: 'Funksjonen', solution: '$P(t) = 495t + 850$' },
          { label: 'b', task: 'Pris for 3,5 timer', solution: '$P(3{,}5) = 495 \\cdot 3{,}5 + 850 = 1\\,732{,}50 + 850 = 2\\,582{,}50$ kr', answer: 2582.50 },
          { label: 'c', task: 'Timer for 2830 kr', solution: '$495t + 850 = 2\\,830 \\Rightarrow 495t = 1\\,980 \\Rightarrow t = 4$ timer', answer: 4 },
          { label: 'd', task: 'Pris inkl. mva for 4 timer', solution: '$P(4) = 495 \\cdot 4 + 850 = 2\\,830$ kr ekskl. mva. Inkl. mva: $2\\,830 \\cdot 1{,}25 = 3\\,537{,}50$ kr', answer: 3537.50 },
        ],
        hints: ['Sett opp likningen og løs for t', 'Gang med 1,25 for å legge til 25% mva'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-2-1-ex-4',
        number: '2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En malermeister gir tilbud på å male et hus. Han estimerer følgende:
- Materialkostnad: 8 500 kr
- Arbeidstimer: 32 timer à 485 kr/time
- Stillasleie: 3 200 kr

a) Sett opp funksjonen for totalkostnaden $K(t)$ der $t$ er antall arbeidstimer.
b) Hva blir totalprisen med 32 timer?
c) Malerarbeidet tok 38 timer pga. dårlig vær. Hva ble merkostnaden?
d) Hva er den totale prisen inkl. 25 % mva for 38 timer?`,
        subTasks: [
          { label: 'a', task: 'Funksjonen', solution: '$K(t) = 485t + 8\\,500 + 3\\,200 = 485t + 11\\,700$' },
          { label: 'b', task: 'Pris for 32 timer', solution: '$K(32) = 485 \\cdot 32 + 11\\,700 = 15\\,520 + 11\\,700 = 27\\,220$ kr', answer: 27220 },
          { label: 'c', task: 'Merkostnad for 6 ekstra timer', solution: '$485 \\cdot 6 = 2\\,910$ kr', answer: 2910 },
          { label: 'd', task: 'Totalpris inkl. mva', solution: '$K(38) = 485 \\cdot 38 + 11\\,700 = 18\\,430 + 11\\,700 = 30\\,130$ kr. Inkl. mva: $30\\,130 \\cdot 1{,}25 = 37\\,662{,}50$ kr', answer: 37662.50 },
        ],
        hints: ['Faste kostnader er konstantleddet', 'Materialer og stillasleie er faste kostnader'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_2PY_2_2: TextbookChapter = {
  id: '2py-2-2',
  courseId: '2py',
  chapterNumber: '2.2',
  title: 'Prosentvis endring',
  description: 'Beregn prosentvis økning og nedgang, og bruk vekstfaktor i praktiske situasjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beregne prosentvis endring',
    'bruke vekstfaktor',
  ],
  content: [
    {
      id: '2py-2-2-intro',
      type: 'text',
      content: `## Prosentregning i praksis

Prosent brukes overalt i arbeidslivet:
- Prisøkninger og rabatter
- Lønnsoppgjør
- Renter på lån og sparing
- Materialsvinn og toleranser

**Prosentvis endring** forteller hvor mye noe har økt eller minket i forhold til utgangspunktet.`,
    },
    {
      id: '2py-2-2-formel',
      type: 'formula',
      title: 'Prosentvis endring',
      latex: `\\text{Prosentvis endring} = \\frac{\\text{Ny verdi} - \\text{Gammel verdi}}{\\text{Gammel verdi}} \\cdot 100\\%`,
      description: 'Positiv endring = økning, Negativ endring = nedgang',
    },
    {
      id: '2py-2-2-def',
      type: 'definition',
      title: 'Vekstfaktor',
      content: `**Vekstfaktor** er tallet vi ganger med for å gå fra gammel til ny verdi.

- **Økning på $p$ %**: Vekstfaktor = $1 + \\frac{p}{100}$
- **Nedgang på $p$ %**: Vekstfaktor = $1 - \\frac{p}{100}$

**Eksempler:**
- 15 % økning → vekstfaktor 1,15
- 20 % nedgang → vekstfaktor 0,80
- 8 % økning → vekstfaktor 1,08`,
    },
    {
      id: '2py-2-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Prisøkning',
      problem: `Prisen på byggmaterialer øker med 12 % fra 2024 til 2025.

a) Hvis en pakke gipsplater kostet 450 kr i 2024, hva koster den i 2025?
b) En leveranse kostet 28 000 kr i 2025. Hva kostet den i 2024?`,
      solution: `**Løsning:**

a) Vekstfaktor for 12 % økning: $1 + 0{,}12 = 1{,}12$

Ny pris: $450 \\cdot 1{,}12 = 504$ kr

b) Vi må dele på vekstfaktoren for å finne gammel pris:

Gammel pris: $\\frac{28\\,000}{1{,}12} = 25\\,000$ kr`,
    },
    {
      id: '2py-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-2-2-ex-1',
        number: '2.5',
        type: 'classic',
        difficulty: 'lett',
        task: `En bil som kostet 280 000 kr ny, har falt 18 % i verdi etter ett år.

a) Hva er vekstfaktoren for verdinedgangen?
b) Hva er bilens verdi etter ett år?
c) Hvor mye har bilen falt i verdi (i kroner)?`,
        subTasks: [
          { label: 'a', task: 'Vekstfaktor', solution: '$1 - 0{,}18 = 0{,}82$', answer: 0.82 },
          { label: 'b', task: 'Verdi etter ett år', solution: '$280\\,000 \\cdot 0{,}82 = 229\\,600$ kr', answer: 229600 },
          { label: 'c', task: 'Verdifall i kr', solution: '$280\\,000 - 229\\,600 = 50\\,400$ kr', answer: 50400 },
        ],
        hints: ['Nedgang gir vekstfaktor under 1'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-2-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Gjentatt prosentvis endring',
      problem: `En lærling får 5 % lønnsøkning hvert år. Startlønnen er 320 000 kr per år.

a) Hva er lønnen etter 1 år?
b) Hva er lønnen etter 3 år?
c) Sett opp en formel for lønnen etter $n$ år.`,
      solution: `**Løsning:**

Vekstfaktor: $1{,}05$

a) Etter 1 år:
$$320\\,000 \\cdot 1{,}05 = 336\\,000 \\text{ kr}$$

b) Etter 3 år:
$$320\\,000 \\cdot 1{,}05^3 = 320\\,000 \\cdot 1{,}157625 = 370\\,440 \\text{ kr}$$

c) Formel for lønn etter $n$ år:
$$L(n) = 320\\,000 \\cdot 1{,}05^n$$`,
    },
    {
      id: '2py-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-2-2-ex-2',
        number: '2.6',
        type: 'classic',
        difficulty: 'medium',
        task: `En maskin koster 180 000 kr og synker 15 % i verdi hvert år (avskrivning).

a) Hva er vekstfaktoren?
b) Hva er maskinens verdi etter 1 år?
c) Hva er maskinens verdi etter 4 år?
d) Sett opp en formel for verdien $V(n)$ etter $n$ år.`,
        subTasks: [
          { label: 'a', task: 'Vekstfaktor', solution: '$1 - 0{,}15 = 0{,}85$', answer: 0.85 },
          { label: 'b', task: 'Verdi etter 1 år', solution: '$180\\,000 \\cdot 0{,}85 = 153\\,000$ kr', answer: 153000 },
          { label: 'c', task: 'Verdi etter 4 år', solution: '$180\\,000 \\cdot 0{,}85^4 = 180\\,000 \\cdot 0{,}52200625 \\approx 93\\,961$ kr', answer: 93961 },
          { label: 'd', task: 'Formel', solution: '$V(n) = 180\\,000 \\cdot 0{,}85^n$' },
        ],
        hints: ['Ved gjentatt endring ganger vi vekstfaktoren med seg selv n ganger'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-2-2-ex-3',
        number: '2.7',
        type: 'classic',
        difficulty: 'medium',
        task: `En vare hadde prisøkning på 8 % fra 2023 til 2024, og deretter 6 % fra 2024 til 2025.

a) Hvis varen kostet 500 kr i 2023, hva koster den i 2025?
b) Hva er den totale prosentvise økningen fra 2023 til 2025?
c) Hvorfor er ikke svaret 14 %?`,
        subTasks: [
          { label: 'a', task: 'Pris i 2025', solution: '$500 \\cdot 1{,}08 \\cdot 1{,}06 = 500 \\cdot 1{,}1448 = 572{,}40$ kr', answer: 572.40 },
          { label: 'b', task: 'Total prosentvis økning', solution: '$\\frac{572{,}40 - 500}{500} \\cdot 100\\% = 14{,}48\\%$', answer: 14.48 },
          { label: 'c', task: 'Forklaring', solution: 'Fordi andre økning (6 %) beregnes på den allerede økte prisen, ikke originalpris. $1{,}08 \\cdot 1{,}06 = 1{,}1448$, ikke 1,14.' },
        ],
        hints: ['Gang vekstfaktorene sammen', 'Rente-på-rente-effekt'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-2-2-ex-4',
        number: '2.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En butikk setter ned prisen på en vare med 25 %. Etter salget øker de prisen tilbake med 25 %.

a) Hvis originalprisen var 800 kr, hva blir prisen etter nedsettelsen?
b) Hva blir prisen etter at de øker med 25 %?
c) Er varen tilbake på originalpris? Forklar.
d) Hvor mye måtte de ha økt prisen (i prosent) for å komme tilbake til originalpris?`,
        subTasks: [
          { label: 'a', task: 'Pris etter 25% nedgang', solution: '$800 \\cdot 0{,}75 = 600$ kr', answer: 600 },
          { label: 'b', task: 'Pris etter 25% økning', solution: '$600 \\cdot 1{,}25 = 750$ kr', answer: 750 },
          { label: 'c', task: 'Tilbake til originalpris?', solution: 'Nei, prisen er 750 kr, ikke 800 kr. Det er fordi 25 % av 600 kr (150 kr) er mindre enn 25 % av 800 kr (200 kr).' },
          { label: 'd', task: 'Nødvendig økning', solution: '$\\frac{800 - 600}{600} \\cdot 100\\% = \\frac{200}{600} \\cdot 100\\% = 33{,}33\\%$', answer: 33.33 },
        ],
        hints: ['25 % nedgang fra 800 er ikke det samme som 25 % økning fra 600'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_2PY_2_3: TextbookChapter = {
  id: '2py-2-3',
  courseId: '2py',
  chapterNumber: '2.3',
  title: 'Praktisk modellering',
  description: 'Bruk funksjoner og grafer til å modellere og analysere situasjoner fra arbeidslivet.',
  estimatedMinutes: 45,
  competenceGoals: [
    'lage enkle matematiske modeller',
    'tolke grafer og funksjoner i praktiske sammenhenger',
  ],
  content: [
    {
      id: '2py-2-3-intro',
      type: 'text',
      content: `## Matematisk modellering

**Modellering** handler om å bruke matematikk til å beskrive virkeligheten.

En **matematisk modell** kan være:
- En formel som beregner kostnader
- En graf som viser utvikling over tid
- En likning som beskriver en sammenheng

Modeller forenkler virkeligheten, men hjelper oss å forstå og ta beslutninger.`,
    },
    {
      id: '2py-2-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Break-even analyse',
      problem: `En snekker starter egen bedrift. Han har følgende kostnader og inntekter:

**Faste kostnader per måned:**
- Verkstedleie: 8 000 kr
- Forsikringer: 2 500 kr
- Verktøy og vedlikehold: 1 500 kr

**Variable kostnader og inntekter per time arbeid:**
- Materialkostnad i snitt: 150 kr/time
- Timepris til kunde: 580 kr/time

a) Sett opp kostnadsfunksjon $K(t)$ og inntektsfunksjon $I(t)$ der $t$ er antall fakturerte timer.
b) Hvor mange timer må han fakturere for å gå i null (break-even)?
c) Hva blir fortjenesten hvis han fakturerer 50 timer i måneden?`,
      solution: `**Løsning:**

a) **Kostnadsfunksjon:**
Faste kostnader: $8\\,000 + 2\\,500 + 1\\,500 = 12\\,000$ kr
Variable kostnader: $150t$ kr
$$K(t) = 150t + 12\\,000$$

**Inntektsfunksjon:**
$$I(t) = 580t$$

b) **Break-even** (der $I(t) = K(t)$):
$$580t = 150t + 12\\,000$$
$$430t = 12\\,000$$
$$t = \\frac{12\\,000}{430} \\approx 27{,}9 \\text{ timer}$$

Han må fakturere minst **28 timer** for å gå i null.

c) **Fortjeneste ved 50 timer:**
$$\\text{Fortjeneste} = I(50) - K(50) = 580 \\cdot 50 - (150 \\cdot 50 + 12\\,000)$$
$$= 29\\,000 - 19\\,500 = 9\\,500 \\text{ kr}$$`,
    },
    {
      id: '2py-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-2-3-ex-1',
        number: '2.9',
        type: 'classic',
        difficulty: 'medium',
        task: `En frisør driver egen salong med følgende økonomi:

**Faste månedskostnader:**
- Husleie: 12 000 kr
- Strøm og internett: 1 800 kr
- Forsikring: 1 200 kr

**Per kunde:**
- Produktkostnad: 45 kr
- Inntekt per klipp: 450 kr

a) Sett opp kostnadsfunksjon $K(x)$ og inntektsfunksjon $I(x)$ der $x$ er antall kunder.
b) Hvor mange kunder trengs for break-even?
c) Hva blir månedlig fortjeneste ved 80 kunder?`,
        subTasks: [
          { label: 'a', task: 'Sett opp funksjonene', solution: '$K(x) = 45x + 15\\,000$ og $I(x) = 450x$' },
          { label: 'b', task: 'Break-even', solution: '$450x = 45x + 15\\,000 \\Rightarrow 405x = 15\\,000 \\Rightarrow x \\approx 37$ kunder', answer: 37 },
          { label: 'c', task: 'Fortjeneste ved 80 kunder', solution: '$450 \\cdot 80 - (45 \\cdot 80 + 15\\,000) = 36\\,000 - 18\\,600 = 17\\,400$ kr', answer: 17400 },
        ],
        hints: ['Faste kostnader = Husleie + Strøm + Forsikring'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-2-3-ex-2',
        number: '2.10',
        type: 'classic',
        difficulty: 'medium',
        task: `En bedrift vurderer å kjøpe versus leie en varebil.

**Kjøp:**
- Pris: 420 000 kr
- Årlige kostnader (forsikring, service): 25 000 kr
- Drivstoff og slitasje: 3,50 kr/km

**Leasing:**
- Månedlig leie: 7 500 kr (inkl. service og forsikring)
- Drivstoff: 3,50 kr/km

Bedriften kjører ca. 25 000 km per år.

a) Sett opp årlig kostnadsfunksjon for kjøp $K_k(x)$ der $x$ er antall km.
b) Sett opp årlig kostnadsfunksjon for leasing $K_l(x)$.
c) Hva blir årskostnaden for hver løsning ved 25 000 km?
d) Etter hvor mange år er kjøp billigere enn leasing? (Ignorer verdifall på bilen)`,
        subTasks: [
          { label: 'a', task: 'Kjøpskostnad per år', solution: '$K_k(x) = 3{,}50x + 25\\,000$ (pluss avskrivning på bilen)' },
          { label: 'b', task: 'Leasingkostnad per år', solution: '$K_l(x) = 3{,}50x + 90\\,000$ (7500 × 12 = 90 000)' },
          { label: 'c', task: 'Årskostnad 25 000 km', solution: 'Kjøp: $3{,}50 \\cdot 25\\,000 + 25\\,000 = 112\\,500$ kr. Leasing: $3{,}50 \\cdot 25\\,000 + 90\\,000 = 177\\,500$ kr', answer: '112500 vs 177500' },
          { label: 'd', task: 'Når er kjøp billigere?', solution: 'Årlig besparelse ved kjøp: $177\\,500 - 112\\,500 = 65\\,000$ kr. Kjøpspris / besparelse: $420\\,000 / 65\\,000 \\approx 6{,}5$ år', answer: 6.5 },
        ],
        hints: ['Husk at leasingkostnaden er månedlig, gang med 12 for årlig'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-2-3-ex-3',
        number: '2.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En verksted tilbyr tre ulike serviceavtaler for bedrifters maskiner:

**Avtale A: Betaling per oppdrag**
- Utkjøring: 950 kr
- Timepris: 890 kr

**Avtale B: Månedlig grunnpakke**
- Fast månedspris: 4 500 kr
- Timepris: 650 kr
- Utkjøring inkludert

**Avtale C: Fullservice**
- Fast månedspris: 12 000 kr
- Alt inkludert (opptil 15 timer/måned)

En bedrift anslår at de trenger ca. 8 timer service per måned.

a) Sett opp kostnadsfunksjoner for de tre avtalene som funksjon av timer $t$.
b) Hva koster hver avtale ved 8 timer per måned?
c) Ved hvor mange timer blir avtale B billigere enn A?
d) Ved hvor mange timer blir avtale C billigere enn B?`,
        subTasks: [
          { label: 'a', task: 'Kostnadsfunksjoner', solution: '$K_A(t) = 890t + 950$, $K_B(t) = 650t + 4500$, $K_C(t) = 12000$ (for $t \\leq 15$)' },
          { label: 'b', task: 'Kostnad ved 8 timer', solution: 'A: $890 \\cdot 8 + 950 = 8\\,070$ kr. B: $650 \\cdot 8 + 4500 = 9\\,700$ kr. C: $12\\,000$ kr' },
          { label: 'c', task: 'B billigere enn A', solution: '$650t + 4500 < 890t + 950 \\Rightarrow 3550 < 240t \\Rightarrow t > 14{,}8$ timer', answer: 15 },
          { label: 'd', task: 'C billigere enn B', solution: '$12000 < 650t + 4500 \\Rightarrow 7500 < 650t \\Rightarrow t > 11{,}5$ timer', answer: 12 },
        ],
        hints: ['Sett opp ulikheter og løs for t'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: GEOMETRI OG BEREGNINGER
// ============================================================================

export const CHAPTER_2PY_3_1: TextbookChapter = {
  id: '2py-3-1',
  courseId: '2py',
  chapterNumber: '3.1',
  title: 'Areal og omkrets',
  description: 'Beregn areal og omkrets for ulike figurer i praktiske sammenhenger.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beregne areal og omkrets av plane figurer',
    'løse praktiske oppgaver med sammensatte figurer',
  ],
  content: [
    {
      id: '2py-3-1-intro',
      type: 'text',
      content: `## Areal og omkrets i yrkeslivet

Beregning av areal og omkrets er grunnleggende i mange yrker:
- **Bygg og anlegg**: Beregne materialbehov, flislegging, maling
- **Helse og omsorg**: Beregne sårstørrelse, medisindosering etter kroppsoverflate
- **Service og samferdsel**: Beregne lastekapasitet, parkeringsplasser

La oss repetere de viktigste formlene og bruke dem i praktiske situasjoner.`,
    },
    {
      id: '2py-3-1-formler',
      type: 'formula',
      title: 'Arealformler',
      content: `**Rektangel:** $A = l \\cdot b$ (lengde × bredde)

**Kvadrat:** $A = s^2$ (side × side)

**Trekant:** $A = \\frac{g \\cdot h}{2}$ (grunnlinje × høyde ÷ 2)

**Sirkel:** $A = \\pi r^2$ (pi × radius²)

**Trapes:** $A = \\frac{(a + b) \\cdot h}{2}$ (sum av parallelle sider × høyde ÷ 2)`,
    },
    {
      id: '2py-3-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Maling av vegg',
      problem: `En maler skal male en vegg som er 4,5 m bred og 2,8 m høy. Veggen har et vindu på 1,2 m × 1,0 m og en dør på 0,9 m × 2,1 m.

a) Beregn arealet som skal males.
b) Malingen dekker 10 m² per liter. Hvor mange liter trengs for to strøk?
c) En boks maling på 3 liter koster 489 kr. Hvor mye koster malingen?`,
      solution: `**Løsning:**

a) **Veggflate:**
$$A_{vegg} = 4{,}5 \\cdot 2{,}8 = 12{,}6 \\text{ m}^2$$

**Vindu:**
$$A_{vindu} = 1{,}2 \\cdot 1{,}0 = 1{,}2 \\text{ m}^2$$

**Dør:**
$$A_{dør} = 0{,}9 \\cdot 2{,}1 = 1{,}89 \\text{ m}^2$$

**Areal som males:**
$$A = 12{,}6 - 1{,}2 - 1{,}89 = 9{,}51 \\text{ m}^2$$

b) **Malingbehov:**
For ett strøk: $\\frac{9{,}51}{10} = 0{,}951$ liter
For to strøk: $0{,}951 \\cdot 2 = 1{,}902$ liter ≈ **2 liter**

c) **Kostnad:**
Med en 3-liters boks har vi nok. Kostnad: **489 kr**`,
    },
    {
      id: '2py-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-3-1-ex-1',
        number: '3.1',
        type: 'classic',
        difficulty: 'lett',
        task: `Et rom skal legges med laminatgulv. Rommet er 5,2 m langt og 3,8 m bredt.

a) Beregn gulvarealet.
b) Laminaten selges i pakker som dekker 2,4 m². Hvor mange pakker trengs? (Legg til 10 % for svinn)
c) Hver pakke koster 349 kr. Hva blir totalkostnaden?`,
        subTasks: [
          { label: 'a', task: 'Gulvareal', solution: '$5{,}2 \\cdot 3{,}8 = 19{,}76$ m²', answer: 19.76 },
          { label: 'b', task: 'Antall pakker', solution: 'Med svinn: $19{,}76 \\cdot 1{,}10 = 21{,}74$ m². Pakker: $\\frac{21{,}74}{2{,}4} = 9{,}06$, altså 10 pakker', answer: 10 },
          { label: 'c', task: 'Totalkostnad', solution: '$10 \\cdot 349 = 3\\,490$ kr', answer: 3490 },
        ],
        hints: ['Rund alltid opp antall pakker'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-3-1-ex-2',
        number: '3.2',
        type: 'classic',
        difficulty: 'medium',
        task: `En flislegger skal legge fliser på et bad. Gulvet er 2,4 m × 2,0 m. Veggene er 2,4 m høye, og det skal legges fliser opp til 2,0 m høyde på alle fire vegger.

a) Beregn gulvarealet.
b) Beregn veggarealet som skal flislegges (fire vegger, hver 2,0 m høy).
c) Det er en dør på 0,8 m × 2,0 m som ikke skal flislegges. Hva blir totalt flisareal?
d) Flisene koster 589 kr/m². Hva blir materialkostnaden?`,
        subTasks: [
          { label: 'a', task: 'Gulvareal', solution: '$2{,}4 \\cdot 2{,}0 = 4{,}8$ m²', answer: 4.8 },
          { label: 'b', task: 'Veggareal', solution: 'To vegger à $2{,}4 \\cdot 2{,}0 = 4{,}8$ m². To vegger à $2{,}0 \\cdot 2{,}0 = 4{,}0$ m². Totalt: $2 \\cdot 4{,}8 + 2 \\cdot 4{,}0 = 17{,}6$ m²', answer: 17.6 },
          { label: 'c', task: 'Totalt flisareal', solution: 'Vegger minus dør: $17{,}6 - 0{,}8 \\cdot 2{,}0 = 17{,}6 - 1{,}6 = 16{,}0$ m². Med gulv: $4{,}8 + 16{,}0 = 20{,}8$ m²', answer: 20.8 },
          { label: 'd', task: 'Materialkostnad', solution: '$20{,}8 \\cdot 589 = 12\\,251{,}20$ kr', answer: 12251.20 },
        ],
        hints: ['Husk at badet har fire vegger'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-3-1-ex-3',
        number: '3.3',
        type: 'classic',
        difficulty: 'medium',
        task: `En sirkulær hage med diameter 8 m skal få nytt gress. Rundt hagen skal det legges kantstein.

a) Beregn arealet av hagen.
b) Beregn omkretsen (for kantstein).
c) Gressfrø koster 45 kr per kg, og det trengs 30 g per m². Hva koster gressfrøene?
d) Kantstein koster 89 kr per løpemeter. Hva koster kantsteinen?`,
        subTasks: [
          { label: 'a', task: 'Areal', solution: 'Radius $r = 4$ m. $A = \\pi \\cdot 4^2 = 16\\pi \\approx 50{,}27$ m²', answer: 50.27 },
          { label: 'b', task: 'Omkrets', solution: '$O = 2\\pi r = 2\\pi \\cdot 4 = 8\\pi \\approx 25{,}13$ m', answer: 25.13 },
          { label: 'c', task: 'Kostnad gressfrø', solution: 'Mengde: $50{,}27 \\cdot 0{,}030 = 1{,}51$ kg. Kostnad: $1{,}51 \\cdot 45 \\approx 68$ kr', answer: 68 },
          { label: 'd', task: 'Kostnad kantstein', solution: '$25{,}13 \\cdot 89 \\approx 2\\,237$ kr', answer: 2237 },
        ],
        hints: ['Diameter = 2 × radius', 'Husk å omregne gram til kg'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-3-1-ex-4',
        number: '3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En tømrer skal bygge en terrasse med form som et rektangel (6 m × 4 m) med et halvsirkelformet utstikk på den ene kortsiden (diameter 4 m).

a) Tegn en skisse av terrassen.
b) Beregn det totale arealet.
c) Terrassebordene koster 185 kr/m². Hva koster bordene? (Legg til 15 % for svinn)
d) Beregn omkretsen av terrassen (for rekkverk). Rekkverket koster 450 kr/m. Hva koster rekkverket?`,
        subTasks: [
          { label: 'a', task: 'Tegn skisse', solution: 'Rektangel 6×4 m med halvsirkel (r=2 m) på ene kortsiden' },
          { label: 'b', task: 'Totalt areal', solution: 'Rektangel: $6 \\cdot 4 = 24$ m². Halvsirkel: $\\frac{\\pi \\cdot 2^2}{2} = 2\\pi \\approx 6{,}28$ m². Totalt: $24 + 6{,}28 = 30{,}28$ m²', answer: 30.28 },
          { label: 'c', task: 'Kostnad bord', solution: 'Med svinn: $30{,}28 \\cdot 1{,}15 = 34{,}82$ m². Kostnad: $34{,}82 \\cdot 185 = 6\\,442$ kr', answer: 6442 },
          { label: 'd', task: 'Rekkverk', solution: 'Omkrets: $6 + 4 + 6 + \\pi \\cdot 2 = 16 + 6{,}28 = 22{,}28$ m. Kostnad: $22{,}28 \\cdot 450 = 10\\,026$ kr', answer: 10026 },
        ],
        hints: ['Halvsirkel har areal = (pi × r²)/2', 'Halvsirkelen erstatter en kortside av rektangelet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_2PY_3_2: TextbookChapter = {
  id: '2py-3-2',
  courseId: '2py',
  chapterNumber: '3.2',
  title: 'Volum og overflate',
  description: 'Beregn volum og overflate for tredimensjonale figurer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beregne volum av prismer, sylindre og andre romfigurer',
    'beregne overflate av romfigurer',
  ],
  content: [
    {
      id: '2py-3-2-intro',
      type: 'text',
      content: `## Volum og overflate

**Volum** er mengden plass en tredimensjonal figur opptar. Måles i kubikkenheter (m³, cm³, liter).

**Overflate** er det totale arealet av alle flatene på en figur. Måles i kvadratenheter (m², cm²).

Praktiske eksempler:
- **Volum**: Hvor mye betong trengs? Hvor mange liter maling? Lastekapasitet.
- **Overflate**: Hvor mye maling til en tank? Hvor mye isolasjon til et rør?`,
    },
    {
      id: '2py-3-2-formler',
      type: 'formula',
      title: 'Volumformler',
      content: `**Prisme (rektangulær):** $V = l \\cdot b \\cdot h$

**Sylinder:** $V = \\pi r^2 h$

**Kjegle:** $V = \\frac{1}{3} \\pi r^2 h$

**Kule:** $V = \\frac{4}{3} \\pi r^3$

**Pyramide:** $V = \\frac{1}{3} G \\cdot h$ (G = grunnflate)`,
    },
    {
      id: '2py-3-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Betongstøping',
      problem: `En entreprenør skal støpe et fundament som er 8 m langt, 0,6 m bredt og 0,3 m høyt.

a) Beregn volumet av fundamentet i m³.
b) Betong koster 1 850 kr/m³ levert. Hva koster betongen?
c) Det anbefales å bestille 10 % ekstra for svinn. Hva blir total betongkostnad?`,
      solution: `**Løsning:**

a) **Volum:**
$$V = l \\cdot b \\cdot h = 8 \\cdot 0{,}6 \\cdot 0{,}3 = 1{,}44 \\text{ m}^3$$

b) **Betongkostnad:**
$$1{,}44 \\cdot 1\\,850 = 2\\,664 \\text{ kr}$$

c) **Med 10 % ekstra:**
$$1{,}44 \\cdot 1{,}10 = 1{,}584 \\text{ m}^3$$
$$1{,}584 \\cdot 1\\,850 = 2\\,930{,}40 \\text{ kr}$$`,
    },
    {
      id: '2py-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-3-2-ex-1',
        number: '3.5',
        type: 'classic',
        difficulty: 'lett',
        task: `En vanntank har form som en sylinder med radius 1,2 m og høyde 2,5 m.

a) Beregn volumet i m³.
b) Regn om til liter (1 m³ = 1000 liter).
c) Hvor lang tid tar det å fylle tanken hvis vannslangen gir 25 liter per minutt?`,
        subTasks: [
          { label: 'a', task: 'Volum i m³', solution: '$V = \\pi \\cdot 1{,}2^2 \\cdot 2{,}5 = \\pi \\cdot 1{,}44 \\cdot 2{,}5 = 3{,}6\\pi \\approx 11{,}31$ m³', answer: 11.31 },
          { label: 'b', task: 'Volum i liter', solution: '$11{,}31 \\cdot 1000 = 11\\,310$ liter', answer: 11310 },
          { label: 'c', task: 'Fylletid', solution: '$\\frac{11\\,310}{25} = 452{,}4$ minutter $\\approx$ 7 timer 32 min', answer: 452 },
        ],
        hints: ['Sylindervolum = pi × r² × h'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-3-2-ex-2',
        number: '3.6',
        type: 'classic',
        difficulty: 'medium',
        task: `En oljetank har form som en liggende sylinder med diameter 2 m og lengde 4 m.

a) Beregn volumet i m³.
b) Regn om til liter.
c) Overflaten skal males med rustbeskyttelse. Beregn overflatearealet (inkl. begge endeflatene).
d) Malingen dekker 8 m² per liter og koster 245 kr/liter. Hva koster malingen for to strøk?`,
        subTasks: [
          { label: 'a', task: 'Volum i m³', solution: '$V = \\pi \\cdot 1^2 \\cdot 4 = 4\\pi \\approx 12{,}57$ m³', answer: 12.57 },
          { label: 'b', task: 'Volum i liter', solution: '$12{,}57 \\cdot 1000 = 12\\,570$ liter', answer: 12570 },
          { label: 'c', task: 'Overflate', solution: 'Buet flate: $2\\pi \\cdot 1 \\cdot 4 = 8\\pi$ m². Endeflater: $2 \\cdot \\pi \\cdot 1^2 = 2\\pi$ m². Totalt: $10\\pi \\approx 31{,}42$ m²', answer: 31.42 },
          { label: 'd', task: 'Malingskostnad', solution: 'To strøk: $31{,}42 \\cdot 2 = 62{,}84$ m². Liter: $\\frac{62{,}84}{8} = 7{,}86$, altså 8 liter. Kostnad: $8 \\cdot 245 = 1\\,960$ kr', answer: 1960 },
        ],
        hints: ['Diameter = 2 × radius', 'Sylinderoverflate = 2πr² + 2πrh'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-3-2-ex-3',
        number: '3.7',
        type: 'classic',
        difficulty: 'medium',
        task: `Et lagerrom har dimensjonene 12 m × 8 m × 3,5 m (lengde × bredde × høyde).

a) Beregn volumet av rommet.
b) Hvor mange paller med dimensjoner 1,2 m × 0,8 m × 1,5 m (L × B × H) kan stables i rommet? (Forutsett at pallene kan stables to i høyden)
c) Veggene og taket skal isoleres. Beregn arealet som skal isoleres (ikke gulvet).`,
        subTasks: [
          { label: 'a', task: 'Volum', solution: '$12 \\cdot 8 \\cdot 3{,}5 = 336$ m³', answer: 336 },
          { label: 'b', task: 'Antall paller', solution: 'Paller i lengden: $\\frac{12}{1{,}2} = 10$. I bredden: $\\frac{8}{0{,}8} = 10$. I høyden: 2 (stabling). Totalt: $10 \\cdot 10 \\cdot 2 = 200$ paller', answer: 200 },
          { label: 'c', task: 'Isolasjonsareal', solution: 'Tak: $12 \\cdot 8 = 96$ m². Langvegger: $2 \\cdot 12 \\cdot 3{,}5 = 84$ m². Kortvegger: $2 \\cdot 8 \\cdot 3{,}5 = 56$ m². Totalt: $96 + 84 + 56 = 236$ m²', answer: 236 },
        ],
        hints: ['Sjekk hvor mange paller som får plass i hver retning'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-3-2-ex-4',
        number: '3.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En ishall har tak som er formet som en halvsylinder oppå et rektangulært grunnplan.
- Grunnplan: 60 m × 30 m
- Høyde på rette vegger: 4 m
- Halvsylinderen har radius 15 m (bredden av hallen)

a) Beregn volumet av den rektangulære delen.
b) Beregn volumet av halvsylinderen.
c) Beregn totalt volum.
d) Hallen skal varmes opp. Hvor mange kW trengs hvis det kreves 15 W per m³?`,
        subTasks: [
          { label: 'a', task: 'Rektangulær del', solution: '$V_1 = 60 \\cdot 30 \\cdot 4 = 7\\,200$ m³', answer: 7200 },
          { label: 'b', task: 'Halvsylinder', solution: '$V_2 = \\frac{1}{2} \\cdot \\pi \\cdot 15^2 \\cdot 60 = \\frac{1}{2} \\cdot \\pi \\cdot 225 \\cdot 60 = 6750\\pi \\approx 21\\,206$ m³', answer: 21206 },
          { label: 'c', task: 'Totalt volum', solution: '$V = 7\\,200 + 21\\,206 = 28\\,406$ m³', answer: 28406 },
          { label: 'd', task: 'Varmebehov', solution: '$28\\,406 \\cdot 15 = 426\\,090$ W = 426 kW', answer: 426 },
        ],
        hints: ['Halvsylinder har volum = (1/2) × pi × r² × lengde'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_2PY_3_3: TextbookChapter = {
  id: '2py-3-3',
  courseId: '2py',
  chapterNumber: '3.3',
  title: 'Pytagoras og trigonometri',
  description: 'Bruk Pytagoras setning og enkel trigonometri til praktiske målinger og beregninger.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke Pytagoras setning til beregninger',
    'bruke sinus, cosinus og tangens i rettvinklede trekanter',
  ],
  content: [
    {
      id: '2py-3-3-intro',
      type: 'text',
      content: `## Pytagoras setning

I en rettvinklet trekant gjelder:

$$a^2 + b^2 = c^2$$

Der $c$ er hypotenusen (lengste side, motstående den rette vinkelen) og $a$ og $b$ er katetene.

Dette brukes til å finne ukjente lengder i rettvinklede trekanter.`,
    },
    {
      id: '2py-3-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Stige mot vegg',
      problem: `En stige på 6 m lener mot en vegg. Foten av stigen står 2 m fra veggen.

a) Hvor høyt opp på veggen rekker stigen?
b) Hva er vinkelen mellom stigen og bakken?`,
      solution: `**Løsning:**

a) Bruker Pytagoras:
$$a^2 + b^2 = c^2$$
$$2^2 + h^2 = 6^2$$
$$4 + h^2 = 36$$
$$h^2 = 32$$
$$h = \\sqrt{32} \\approx 5{,}66 \\text{ m}$$

b) Bruker cosinus:
$$\\cos(v) = \\frac{\\text{hosliggende}}{\\text{hypotenus}} = \\frac{2}{6} = 0{,}333$$
$$v = \\cos^{-1}(0{,}333) \\approx 70{,}5°$$`,
    },
    {
      id: '2py-3-3-trig-def',
      type: 'definition',
      title: 'Trigonometriske forhold',
      content: `I en rettvinklet trekant med vinkel $v$:

$$\\sin(v) = \\frac{\\text{motstående katet}}{\\text{hypotenus}}$$

$$\\cos(v) = \\frac{\\text{hosliggende katet}}{\\text{hypotenus}}$$

$$\\tan(v) = \\frac{\\text{motstående katet}}{\\text{hosliggende katet}}$$

**Huskeregel:** SOH-CAH-TOA
- **S**in = **O**pposite / **H**ypotenuse
- **C**os = **A**djacent / **H**ypotenuse
- **T**an = **O**pposite / **A**djacent`,
    },
    {
      id: '2py-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-3-3-ex-1',
        number: '3.9',
        type: 'classic',
        difficulty: 'lett',
        task: `En tømrer skal bygge et skråtak. Taket har en spennvidde på 8 m og takvinkel på 30°.

a) Hvor høy blir mønet (høyeste punkt) over ytterveggen?
b) Hvor langt blir takflaten fra ytterkant til møne?`,
        subTasks: [
          { label: 'a', task: 'Mønehøyde', solution: 'Halv spennvidde: 4 m. $\\tan(30°) = \\frac{h}{4}$, så $h = 4 \\cdot \\tan(30°) = 4 \\cdot 0{,}577 \\approx 2{,}31$ m', answer: 2.31 },
          { label: 'b', task: 'Takflate', solution: '$\\cos(30°) = \\frac{4}{\\text{takflate}}$, så takflate $= \\frac{4}{\\cos(30°)} = \\frac{4}{0{,}866} \\approx 4{,}62$ m', answer: 4.62 },
        ],
        hints: ['Tegn trekanten med halv spennvidde som grunnlinje', 'Bruk tan for å finne høyden'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-3-3-ex-2',
        number: '3.10',
        type: 'classic',
        difficulty: 'medium',
        task: `En elektriker skal trekke kabel diagonalt gjennom et rom. Rommet er 4,5 m langt og 3,2 m bredt.

a) Hvor lang må kabelen være for å gå diagonalt langs gulvet?
b) Hvis kabelen også skal gå opp til taket (2,8 m høyt) i motsatt hjørne, hvor lang blir den totalt?`,
        subTasks: [
          { label: 'a', task: 'Diagonal langs gulv', solution: '$d = \\sqrt{4{,}5^2 + 3{,}2^2} = \\sqrt{20{,}25 + 10{,}24} = \\sqrt{30{,}49} \\approx 5{,}52$ m', answer: 5.52 },
          { label: 'b', task: 'Romdiagonal', solution: '$D = \\sqrt{4{,}5^2 + 3{,}2^2 + 2{,}8^2} = \\sqrt{20{,}25 + 10{,}24 + 7{,}84} = \\sqrt{38{,}33} \\approx 6{,}19$ m', answer: 6.19 },
        ],
        hints: ['Bruk Pytagoras to ganger, eller romdiagonal-formelen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-3-3-ex-3',
        number: '3.11',
        type: 'classic',
        difficulty: 'medium',
        task: `En rampe for rullestol skal ha maksimalt 8 % stigning (8 cm høyde per 100 cm lengde).

a) Hva er vinkelen til en rampe med 8 % stigning?
b) Hvis rampen skal nå opp til en høyde på 60 cm, hvor lang må den horisontale lengden være?
c) Hvor lang blir selve rampen (skrålengden)?`,
        subTasks: [
          { label: 'a', task: 'Vinkel', solution: '$\\tan(v) = \\frac{8}{100} = 0{,}08$, så $v = \\tan^{-1}(0{,}08) \\approx 4{,}6°$', answer: 4.6 },
          { label: 'b', task: 'Horisontal lengde', solution: '$\\frac{60}{\\text{lengde}} = 0{,}08$, så lengde $= \\frac{60}{0{,}08} = 750$ cm = 7,5 m', answer: 7.5 },
          { label: 'c', task: 'Skrålengde', solution: '$L = \\sqrt{750^2 + 60^2} = \\sqrt{562500 + 3600} = \\sqrt{566100} \\approx 752{,}4$ cm ≈ 7,52 m', answer: 7.52 },
        ],
        hints: ['8 % stigning = 8/100 = 0,08'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-3-3-ex-4',
        number: '3.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En kranfører skal løfte en last opp til 5. etasje. Kranen står 12 m fra bygningen. Høyden til 5. etasje er 16 m over bakken.

a) Hvor langt må kranens utligger rekke (minimum)?
b) Hvilken vinkel har utliggeren med horisontalplanet?
c) Hvis kranen må stå 18 m fra bygningen (pga. trær), hvor lang må utliggeren være da?
d) Hva blir vinkelen i dette tilfellet?`,
        subTasks: [
          { label: 'a', task: 'Utliggerlengde (12 m)', solution: '$L = \\sqrt{12^2 + 16^2} = \\sqrt{144 + 256} = \\sqrt{400} = 20$ m', answer: 20 },
          { label: 'b', task: 'Vinkel (12 m)', solution: '$\\tan(v) = \\frac{16}{12} = 1{,}333$, så $v = \\tan^{-1}(1{,}333) \\approx 53{,}1°$', answer: 53.1 },
          { label: 'c', task: 'Utliggerlengde (18 m)', solution: '$L = \\sqrt{18^2 + 16^2} = \\sqrt{324 + 256} = \\sqrt{580} \\approx 24{,}1$ m', answer: 24.1 },
          { label: 'd', task: 'Vinkel (18 m)', solution: '$\\tan(v) = \\frac{16}{18} = 0{,}889$, så $v = \\tan^{-1}(0{,}889) \\approx 41{,}6°$', answer: 41.6 },
        ],
        hints: ['Tegn trekanten med avstand langs bakken og høyde'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: STATISTIKK
// ============================================================================

export const CHAPTER_2PY_4_1: TextbookChapter = {
  id: '2py-4-1',
  courseId: '2py',
  chapterNumber: '4.1',
  title: 'Innsamling og presentasjon av data',
  description: 'Lær å samle inn, organisere og presentere data fra yrkesrelevante situasjoner.',
  estimatedMinutes: 45,
  competenceGoals: [
    'samle inn og organisere data',
    'presentere data i tabeller og diagrammer',
  ],
  content: [
    {
      id: '2py-4-1-intro',
      type: 'text',
      content: `## Statistikk i arbeidslivet

Statistikk brukes i alle yrker for å:
- Analysere salg og kundedata
- Overvåke kvalitet i produksjon
- Følge opp HMS-statistikk
- Planlegge ressursbruk

**Datainnsamling** er første steg. Data kan samles ved:
- Spørreundersøkelser
- Målinger og registreringer
- Observasjoner
- Eksisterende databaser`,
    },
    {
      id: '2py-4-1-def',
      type: 'definition',
      title: 'Grunnleggende begreper',
      content: `**Populasjon**: Hele gruppen vi ønsker å si noe om
**Utvalg**: En del av populasjonen som undersøkes
**Observasjon**: Én enkelt måling eller registrering
**Datasett**: Samlingen av alle observasjoner
**Variabel**: Det som måles eller registreres`,
    },
    {
      id: '2py-4-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Kvalitetskontroll',
      problem: `En fabrikk produserer bolter. Kvalitetskontrollen måler diameteren på 20 bolter fra en produksjonsserie:

12,02 - 12,00 - 11,98 - 12,01 - 12,03 - 11,99 - 12,00 - 12,02 - 11,97 - 12,01
12,00 - 12,04 - 11,98 - 12,00 - 12,01 - 11,99 - 12,02 - 12,00 - 12,03 - 11,98

Spesifikasjonen krever diameter mellom 11,95 og 12,05 mm.

a) Lag en frekvenstabell med klassene 11,95-11,97, 11,98-12,00, 12,01-12,03, 12,04-12,06.
b) Hvor mange bolter er innenfor spesifikasjonen?
c) Tegn et søylediagram.`,
      solution: `**Løsning:**

a) **Frekvenstabell:**

| Klasse | Frekvens |
|--------|----------|
| 11,95-11,97 | 1 |
| 11,98-12,00 | 10 |
| 12,01-12,03 | 8 |
| 12,04-12,06 | 1 |
| **Totalt** | **20** |

b) Alle 20 bolter er innenfor spesifikasjonen (11,95-12,05 mm).

c) Søylediagrammet viser at de fleste boltene ligger i midten av toleranseområdet.`,
    },
    {
      id: '2py-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-4-1-ex-1',
        number: '4.1',
        type: 'classic',
        difficulty: 'lett',
        task: `En bilverksted registrerer ventetiden (i minutter) for 15 kunder:
25, 18, 32, 15, 28, 22, 19, 35, 24, 20, 27, 16, 30, 23, 21

a) Lag en frekvenstabell med klassene 15-19, 20-24, 25-29, 30-34, 35-39.
b) Hvilken klasse har høyest frekvens?
c) Hvor stor andel av kundene ventet mer enn 24 minutter?`,
        subTasks: [
          { label: 'a', task: 'Frekvenstabell', solution: '15-19: 4, 20-24: 5, 25-29: 3, 30-34: 2, 35-39: 1' },
          { label: 'b', task: 'Høyest frekvens', solution: 'Klassen 20-24 med 5 observasjoner' },
          { label: 'c', task: 'Andel over 24 min', solution: '$\\frac{3 + 2 + 1}{15} = \\frac{6}{15} = 0{,}40 = 40\\%$', answer: 40 },
        ],
        hints: ['Tell hvor mange som faller i hver klasse'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-4-1-ex-2',
        number: '4.2',
        type: 'classic',
        difficulty: 'medium',
        task: `En frisørsalong registrerer antall kunder per dag i to uker:

Uke 1: 18, 22, 25, 28, 32, 15
Uke 2: 20, 24, 23, 30, 35, 18

a) Beregn gjennomsnittlig antall kunder per dag for hver uke.
b) Hvilken uke hadde flest kunder totalt?
c) Lag et linjediagram som viser utviklingen gjennom begge ukene.`,
        subTasks: [
          { label: 'a', task: 'Gjennomsnitt per uke', solution: 'Uke 1: $\\frac{18+22+25+28+32+15}{6} = \\frac{140}{6} = 23{,}3$. Uke 2: $\\frac{20+24+23+30+35+18}{6} = \\frac{150}{6} = 25{,}0$' },
          { label: 'b', task: 'Flest kunder totalt', solution: 'Uke 2: 150 kunder mot uke 1: 140 kunder', answer: 2 },
          { label: 'c', task: 'Linjediagram', solution: 'Tegn x-akse med dager (1-12), y-akse med antall kunder' },
        ],
        hints: ['Gjennomsnitt = Sum / Antall'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-4-1-ex-3',
        number: '4.3',
        type: 'classic',
        difficulty: 'medium',
        task: `En byggeplass fører statistikk over årsakene til forsinkelser i et prosjekt:

| Årsak | Antall dager |
|-------|--------------|
| Værforhold | 12 |
| Materialmangel | 8 |
| Sykefravær | 5 |
| Utstyrsfeil | 3 |
| Annet | 2 |

a) Beregn prosentandelen for hver årsak.
b) Lag et kakediagram med prosenter.
c) Hvilke to årsaker utgjør til sammen mer enn halvparten av forsinkelsene?`,
        subTasks: [
          { label: 'a', task: 'Prosentandeler', solution: 'Totalt: 30 dager. Vær: 40%, Material: 26,7%, Sykefravær: 16,7%, Utstyr: 10%, Annet: 6,7%' },
          { label: 'b', task: 'Kakediagram', solution: 'Tegn sirkel delt i sektorer tilsvarende prosentene' },
          { label: 'c', task: 'Over 50%', solution: 'Værforhold (40%) + Materialmangel (26,7%) = 66,7%' },
        ],
        hints: ['Prosent = (Del/Helhet) × 100'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_2PY_4_2: TextbookChapter = {
  id: '2py-4-2',
  courseId: '2py',
  chapterNumber: '4.2',
  title: 'Sentralmål og spredningsmål',
  description: 'Beregn og tolk gjennomsnitt, median, typetall og variasjonsbredde.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beregne sentralmål: gjennomsnitt, median og typetall',
    'beregne og tolke spredningsmål',
  ],
  content: [
    {
      id: '2py-4-2-intro',
      type: 'text',
      content: `## Sentralmål

**Sentralmål** beskriver hvor dataene samler seg - hva som er "typisk" eller "sentralt".

De tre vanligste sentralmålene er:
- **Gjennomsnitt** (middeltall)
- **Median** (midtverdien)
- **Typetall** (modus - hyppigste verdi)`,
    },
    {
      id: '2py-4-2-def',
      type: 'definition',
      title: 'Sentralmål',
      content: `**Gjennomsnitt:** Sum av alle verdier delt på antall verdier
$$\\bar{x} = \\frac{x_1 + x_2 + ... + x_n}{n}$$

**Median:** Den midterste verdien når data er sortert
- Odde antall: Midterste verdi
- Like antall: Gjennomsnittet av de to midterste

**Typetall:** Verdien som forekommer oftest`,
    },
    {
      id: '2py-4-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Lønn i en bedrift',
      problem: `En liten bedrift har følgende månedslønninger (i tusen kroner):
35, 38, 42, 45, 45, 48, 52, 85

a) Beregn gjennomsnittet.
b) Finn medianen.
c) Finn typetallet.
d) Hvilket sentralmål er mest representativt? Forklar.`,
      solution: `**Løsning:**

a) **Gjennomsnitt:**
$$\\bar{x} = \\frac{35 + 38 + 42 + 45 + 45 + 48 + 52 + 85}{8} = \\frac{390}{8} = 48{,}75 \\text{ tusen}$$

b) **Median:**
Sortert: 35, 38, 42, **45, 45**, 48, 52, 85
Midterste verdier: 45 og 45
$$\\text{Median} = \\frac{45 + 45}{2} = 45 \\text{ tusen}$$

c) **Typetall:**
45 forekommer 2 ganger (oftest). Typetall = **45 tusen**

d) **Mest representativt:**
Medianen (45 000 kr) er mest representativ fordi gjennomsnittet dras opp av den ene høye lønnen (85 000 kr). 6 av 8 ansatte tjener under gjennomsnittet.`,
    },
    {
      id: '2py-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-4-2-ex-1',
        number: '4.4',
        type: 'classic',
        difficulty: 'lett',
        task: `En elektriker måler spenningen i 10 stikkontakter:
229, 231, 230, 228, 232, 230, 229, 231, 230, 228 (volt)

a) Beregn gjennomsnittet.
b) Finn medianen.
c) Finn typetallet.
d) Er målingene innenfor normen (230 V ± 10 %)?`,
        subTasks: [
          { label: 'a', task: 'Gjennomsnitt', solution: '$\\frac{229+231+230+228+232+230+229+231+230+228}{10} = \\frac{2298}{10} = 229{,}8$ V', answer: 229.8 },
          { label: 'b', task: 'Median', solution: 'Sortert: 228,228,229,229,230,230,230,231,231,232. Median = $\\frac{230+230}{2} = 230$ V', answer: 230 },
          { label: 'c', task: 'Typetall', solution: '230 V (forekommer 3 ganger)', answer: 230 },
          { label: 'd', task: 'Innenfor norm?', solution: 'Ja, alle er mellom 207 V og 253 V (230 ± 23 V)' },
        ],
        hints: ['Sorter verdiene først for å finne median'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-4-2-spread',
      type: 'text',
      content: `## Spredningsmål

**Spredningsmål** forteller hvor spredt dataene er - hvor mye variasjon det er.

**Variasjonsbredde** = Største verdi - Minste verdi

Dette er det enkleste spredningsmålet, men påvirkes sterkt av ekstremverdier.`,
    },
    {
      id: '2py-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-4-2-ex-2',
        number: '4.5',
        type: 'classic',
        difficulty: 'medium',
        task: `To bilmekanikere logger tidsbruken (i minutter) på oljeskift:

Mekaniker A: 22, 25, 23, 24, 26, 22, 25, 24, 23, 26
Mekaniker B: 18, 30, 21, 28, 22, 29, 20, 27, 23, 32

a) Beregn gjennomsnittet for begge.
b) Beregn variasjonsbredden for begge.
c) Hvem er mest konsistent? Forklar.`,
        subTasks: [
          { label: 'a', task: 'Gjennomsnitt', solution: 'A: $\\frac{240}{10} = 24$ min. B: $\\frac{250}{10} = 25$ min', answer: '24, 25' },
          { label: 'b', task: 'Variasjonsbredde', solution: 'A: $26 - 22 = 4$ min. B: $32 - 18 = 14$ min', answer: '4, 14' },
          { label: 'c', task: 'Mest konsistent', solution: 'Mekaniker A er mest konsistent (minst spredning: 4 min mot 14 min)' },
        ],
        hints: ['Konsistens = liten variasjon'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-4-2-ex-3',
        number: '4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En restaurant serverer lunsj mellom kl. 11 og 14. De registrerer antall gjester per halvtime:

| Tid | Man | Tir | Ons | Tor | Fre |
|-----|-----|-----|-----|-----|-----|
| 11:00-11:30 | 8 | 5 | 7 | 6 | 12 |
| 11:30-12:00 | 15 | 12 | 14 | 13 | 22 |
| 12:00-12:30 | 28 | 25 | 30 | 27 | 35 |
| 12:30-13:00 | 32 | 28 | 31 | 30 | 38 |
| 13:00-13:30 | 18 | 15 | 17 | 16 | 25 |
| 13:30-14:00 | 10 | 8 | 9 | 8 | 15 |

a) Beregn gjennomsnittlig antall gjester per dag.
b) Hvilken dag har flest gjester?
c) Hvilken halvtime er travlest i gjennomsnitt?
d) Beregn variasjonsbredden for den travleste halvtimen.`,
        subTasks: [
          { label: 'a', task: 'Gjennomsnitt per dag', solution: 'Man: 111, Tir: 93, Ons: 108, Tor: 100, Fre: 147. Snitt: $\\frac{559}{5} = 111{,}8$ gjester/dag', answer: 111.8 },
          { label: 'b', task: 'Flest gjester', solution: 'Fredag med 147 gjester', answer: 'Fredag' },
          { label: 'c', task: 'Travleste halvtime', solution: '12:30-13:00 med snitt $(32+28+31+30+38)/5 = 31{,}8$ gjester' },
          { label: 'd', task: 'Variasjonsbredde', solution: '$38 - 28 = 10$ gjester', answer: 10 },
        ],
        hints: ['Summer hver kolonne for dagstotaler'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5: SANNSYNLIGHET
// ============================================================================

export const CHAPTER_2PY_5_1: TextbookChapter = {
  id: '2py-5-1',
  courseId: '2py',
  chapterNumber: '5.1',
  title: 'Sannsynlighet i praksis',
  description: 'Forstå og beregne sannsynligheter i yrkesrelevante situasjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå grunnleggende sannsynlighetsbegreper',
    'beregne sannsynligheter for enkle hendelser',
  ],
  content: [
    {
      id: '2py-5-1-intro',
      type: 'text',
      content: `## Sannsynlighet

**Sannsynlighet** beskriver hvor trolig det er at noe skjer. Den måles på en skala fra 0 til 1 (eller 0 % til 100 %):

- 0 = Umulig
- 0,5 = Like sannsynlig som usannsynlig
- 1 = Helt sikkert

Sannsynlighet brukes i mange yrker:
- Kvalitetskontroll og feilrate
- Forsikring og risiko
- HMS og ulykkesforebygging
- Vedlikeholdsplanlegging`,
    },
    {
      id: '2py-5-1-def',
      type: 'definition',
      title: 'Sannsynlighet',
      content: `**Klassisk sannsynlighet** (når alle utfall er like sannsynlige):
$$P(A) = \\frac{\\text{Antall gunstige utfall}}{\\text{Antall mulige utfall}}$$

**Relativ frekvens** (basert på observasjoner):
$$P(A) \\approx \\frac{\\text{Antall ganger A skjer}}{\\text{Totalt antall forsøk}}$$`,
    },
    {
      id: '2py-5-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Kvalitetskontroll',
      problem: `En fabrikk produserer skruer. Kvalitetskontrollen viser at 3 av 100 skruer i gjennomsnitt har feil.

a) Hva er sannsynligheten for at en tilfeldig valgt skrue har feil?
b) Hva er sannsynligheten for at skruen er uten feil?
c) Hvis du plukker 500 skruer, hvor mange kan du forvente har feil?`,
      solution: `**Løsning:**

a) Sannsynlighet for feil:
$$P(\\text{feil}) = \\frac{3}{100} = 0{,}03 = 3\\%$$

b) Sannsynlighet for uten feil:
$$P(\\text{ok}) = 1 - 0{,}03 = 0{,}97 = 97\\%$$

c) Forventet antall med feil:
$$500 \\cdot 0{,}03 = 15 \\text{ skruer}$$`,
    },
    {
      id: '2py-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-5-1-ex-1',
        number: '5.1',
        type: 'classic',
        difficulty: 'lett',
        task: `Et bilverksted har registrert at 8 av 50 biler som kommer til EU-kontroll, får anmerkninger.

a) Hva er sannsynligheten for at en tilfeldig bil får anmerkninger?
b) Hva er sannsynligheten for at bilen passerer uten anmerkninger?
c) Hvis det kommer 200 biler denne måneden, hvor mange kan forventes å få anmerkninger?`,
        subTasks: [
          { label: 'a', task: 'P(anmerkning)', solution: '$P = \\frac{8}{50} = 0{,}16 = 16\\%$', answer: 0.16 },
          { label: 'b', task: 'P(passerer)', solution: '$P = 1 - 0{,}16 = 0{,}84 = 84\\%$', answer: 0.84 },
          { label: 'c', task: 'Forventet antall', solution: '$200 \\cdot 0{,}16 = 32$ biler', answer: 32 },
        ],
        hints: ['P(ikke A) = 1 - P(A)'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-5-1-ex-2',
        number: '5.2',
        type: 'classic',
        difficulty: 'medium',
        task: `En bedrift har følgende statistikk over sykefravær:
- Mandag: 12 % sannsynlighet for sykefravær
- Tirsdag-torsdag: 6 % sannsynlighet
- Fredag: 10 % sannsynlighet

Bedriften har 25 ansatte.

a) Hvor mange kan forventes å være syke en mandag?
b) Hvor mange kan forventes å være syke en onsdag?
c) Hva er gjennomsnittlig forventet sykefravær per dag i en uke?`,
        subTasks: [
          { label: 'a', task: 'Forventet mandag', solution: '$25 \\cdot 0{,}12 = 3$ ansatte', answer: 3 },
          { label: 'b', task: 'Forventet onsdag', solution: '$25 \\cdot 0{,}06 = 1{,}5$ ansatte', answer: 1.5 },
          { label: 'c', task: 'Gjennomsnitt per dag', solution: '$\\frac{3 + 1{,}5 + 1{,}5 + 1{,}5 + 2{,}5}{5} = \\frac{10}{5} = 2$ ansatte/dag', answer: 2 },
        ],
        hints: ['Fredag: 25 × 0,10 = 2,5'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-5-1-ex-3',
        number: '5.3',
        type: 'classic',
        difficulty: 'medium',
        task: `En elektriker har erfaring med at 95 % av alle strømbrytere fungerer feilfritt i minst 10 år.

a) Hva er sannsynligheten for at en bryter får feil før 10 år?
b) I en bygning monteres 40 brytere. Hvor mange kan forventes å få feil innen 10 år?
c) Hva er sannsynligheten for at ALLE 40 brytere fungerer i 10 år? (Bruk: P(alle ok) = 0,95^40)`,
        subTasks: [
          { label: 'a', task: 'P(feil før 10 år)', solution: '$1 - 0{,}95 = 0{,}05 = 5\\%$', answer: 0.05 },
          { label: 'b', task: 'Forventet antall feil', solution: '$40 \\cdot 0{,}05 = 2$ brytere', answer: 2 },
          { label: 'c', task: 'P(alle ok)', solution: '$0{,}95^{40} = 0{,}129 \\approx 13\\%$', answer: 0.13 },
        ],
        hints: ['Når hendelser er uavhengige, ganger vi sannsynlighetene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_2PY_5_2: TextbookChapter = {
  id: '2py-5-2',
  courseId: '2py',
  chapterNumber: '5.2',
  title: 'Risiko og usikkerhet',
  description: 'Vurder risiko og usikkerhet i yrkesrelevante situasjoner, inkludert HMS.',
  estimatedMinutes: 45,
  competenceGoals: [
    'vurdere risiko matematisk',
    'bruke sannsynlighet i risikovurderinger',
  ],
  content: [
    {
      id: '2py-5-2-intro',
      type: 'text',
      content: `## Risiko i arbeidslivet

**Risiko** er en kombinasjon av sannsynligheten for at noe uønsket skjer, og konsekvensene hvis det skjer.

$$\\text{Risiko} = \\text{Sannsynlighet} \\times \\text{Konsekvens}$$

I HMS-arbeid brukes ofte en risikomatrise for å vurdere og prioritere tiltak.`,
    },
    {
      id: '2py-5-2-def',
      type: 'definition',
      title: 'Risikomatrise',
      content: `En risikomatrise kombinerer sannsynlighet og konsekvens:

**Sannsynlighet (1-5):**
1. Svært lite sannsynlig
2. Lite sannsynlig
3. Sannsynlig
4. Meget sannsynlig
5. Svært sannsynlig

**Konsekvens (1-5):**
1. Ubetydelig
2. Liten
3. Moderat
4. Alvorlig
5. Svært alvorlig

**Risikotall** = Sannsynlighet × Konsekvens (1-25)`,
    },
    {
      id: '2py-5-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Risikovurdering på byggeplass',
      problem: `En byggeplass har identifisert følgende risikoer:

| Risiko | Sannsynlighet | Konsekvens |
|--------|---------------|------------|
| Fall fra stillas | 2 | 5 |
| Kuttskade fra verktøy | 4 | 2 |
| Hørselsskade fra støy | 3 | 3 |

a) Beregn risikotallet for hver risiko.
b) Ranger risikoene fra høyest til lavest.
c) Hvilke tiltak bør prioriteres?`,
      solution: `**Løsning:**

a) **Risikotall:**
- Fall fra stillas: $2 \\times 5 = 10$
- Kuttskade: $4 \\times 2 = 8$
- Hørselsskade: $3 \\times 3 = 9$

b) **Rangering:**
1. Fall fra stillas (10)
2. Hørselsskade (9)
3. Kuttskade (8)

c) **Prioritering:**
Fall fra stillas bør prioriteres høyest fordi det har høyest risikotall OG mest alvorlig konsekvens.`,
    },
    {
      id: '2py-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-5-2-ex-1',
        number: '5.4',
        type: 'classic',
        difficulty: 'medium',
        task: `En bedrift vurderer følgende risikoer:

| Risiko | Sannsynlighet | Konsekvens |
|--------|---------------|------------|
| Brann i lager | 1 | 5 |
| Strømbrudd | 3 | 3 |
| Dataangrep | 2 | 4 |
| Vannlekkasje | 4 | 2 |

a) Beregn risikotallet for hver risiko.
b) Hvilken risiko har høyest risikotall?
c) Bedriften setter grense ved risikotall 8. Hvilke risikoer krever tiltak?`,
        subTasks: [
          { label: 'a', task: 'Risikotall', solution: 'Brann: 5, Strømbrudd: 9, Dataangrep: 8, Vannlekkasje: 8' },
          { label: 'b', task: 'Høyest risikotall', solution: 'Strømbrudd med 9' },
          { label: 'c', task: 'Krever tiltak (≥8)', solution: 'Strømbrudd (9), Dataangrep (8), Vannlekkasje (8)' },
        ],
        hints: ['Risikotall = Sannsynlighet × Konsekvens'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-5-2-ex-2',
        number: '5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En forsikringsselskap beregner premie basert på risiko.

For bilulykker:
- Sannsynlighet for ulykke per år: 4 %
- Gjennomsnittlig skadekostnad: 85 000 kr

For boligbrann:
- Sannsynlighet per år: 0,3 %
- Gjennomsnittlig skadekostnad: 1 200 000 kr

a) Beregn forventet årlig skadekostnad for bil.
b) Beregn forventet årlig skadekostnad for bolig.
c) Hvis forsikringsselskapet legger til 30 % for administrasjon og fortjeneste, hva blir årspremien for hver?`,
        subTasks: [
          { label: 'a', task: 'Forventet bilskade', solution: '$0{,}04 \\cdot 85\\,000 = 3\\,400$ kr', answer: 3400 },
          { label: 'b', task: 'Forventet brann', solution: '$0{,}003 \\cdot 1\\,200\\,000 = 3\\,600$ kr', answer: 3600 },
          { label: 'c', task: 'Årspremier', solution: 'Bil: $3\\,400 \\cdot 1{,}30 = 4\\,420$ kr. Bolig: $3\\,600 \\cdot 1{,}30 = 4\\,680$ kr' },
        ],
        hints: ['Forventet kostnad = Sannsynlighet × Skadekostnad'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6: YRKESFAGLIGE BEREGNINGER
// ============================================================================

export const CHAPTER_2PY_6_1: TextbookChapter = {
  id: '2py-6-1',
  courseId: '2py',
  chapterNumber: '6.1',
  title: 'Materialberegninger',
  description: 'Beregn materialbehov, svinn og kostnader for ulike yrkesfaglige prosjekter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beregne materialbehov for praktiske oppgaver',
    'ta hensyn til svinn og kapp',
  ],
  content: [
    {
      id: '2py-6-1-intro',
      type: 'text',
      content: `## Materialberegninger i praksis

I de fleste yrker må du beregne hvor mye materiale som trengs til en jobb:
- **Bygg**: Trelast, betong, fliser, isolasjon
- **Elektro**: Kabel, rør, komponenter
- **Rør**: Rør, koblinger, isolasjon
- **Maling**: Maling, lakk, grunning

Det er viktig å legge til **svinn** - materiale som går tapt ved kapping, feil, og spill.`,
    },
    {
      id: '2py-6-1-tip',
      type: 'tip',
      title: 'Vanlige svinnprosenter',
      content: `- Trevirke: 10-15 %
- Fliser: 10-15 %
- Betong: 5-10 %
- Kabel: 5-10 %
- Maling: 10 % (inkl. søl)
- Tapet: 15-20 %`,
    },
    {
      id: '2py-6-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Terrassebord',
      problem: `En tømrer skal legge terrasse på 24 m². Terrassebordene er 28 mm × 120 mm og kommer i 4,2 m lengder.

a) Hvor mange løpemeter bord trengs? (Bordbredde = 120 mm = 0,12 m)
b) Hvor mange bord á 4,2 m trengs hvis terrassen er 4,8 m lang?
c) Legg til 12 % for svinn og kapp. Hvor mange bord må bestilles?
d) Bordene koster 89 kr per meter. Hva blir materialkostnaden?`,
      solution: `**Løsning:**

a) **Løpemeter bord:**
$$\\text{Løpemeter} = \\frac{\\text{Areal}}{\\text{Bordbredde}} = \\frac{24}{0{,}12} = 200 \\text{ lm}$$

b) **Antall bord:**
Terrassen er 4,8 m lang, så hvert bord gir 4,2 m nyttelengde.
Vi trenger bord i bredden: $\\frac{24 \\text{ m}^2}{4{,}8 \\text{ m}} = 5 \\text{ m}$ bredde
Antall bord: $\\frac{5 \\text{ m}}{0{,}12 \\text{ m}} \\approx 42$ bord

c) **Med 12 % svinn:**
$$42 \\cdot 1{,}12 = 47 \\text{ bord}$$

d) **Materialkostnad:**
$$47 \\cdot 4{,}2 \\cdot 89 = 17\\,573{,}40 \\text{ kr}$$`,
    },
    {
      id: '2py-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-6-1-ex-1',
        number: '6.1',
        type: 'classic',
        difficulty: 'medium',
        task: `En murer skal legge gulvfliser i en gang som er 8 m lang og 1,2 m bred. Flisene er 30 cm × 30 cm.

a) Beregn antall fliser som trengs (teoretisk).
b) Legg til 12 % for svinn og kapp. Hvor mange fliser må kjøpes?
c) Flisene selges i esker med 10 fliser. Hvor mange esker trengs?
d) Hver eske koster 245 kr. Hva blir fliskostnaden?`,
        subTasks: [
          { label: 'a', task: 'Teoretisk antall', solution: 'Areal: $8 \\cdot 1{,}2 = 9{,}6$ m². Per flis: $0{,}3 \\cdot 0{,}3 = 0{,}09$ m². Antall: $\\frac{9{,}6}{0{,}09} \\approx 107$ fliser', answer: 107 },
          { label: 'b', task: 'Med svinn', solution: '$107 \\cdot 1{,}12 \\approx 120$ fliser', answer: 120 },
          { label: 'c', task: 'Antall esker', solution: '$\\frac{120}{10} = 12$ esker', answer: 12 },
          { label: 'd', task: 'Kostnad', solution: '$12 \\cdot 245 = 2\\,940$ kr', answer: 2940 },
        ],
        hints: ['Gjør om cm til m før du regner'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-6-1-ex-2',
        number: '6.2',
        type: 'classic',
        difficulty: 'medium',
        task: `En elektriker skal trekke kabel i et hus. Behovet er:
- Stue til kjøkken: 12 m
- Kjøkken til bad: 8 m
- Bad til soverom: 6 m
- Soverom til gang: 5 m
- Gang til sikringskap: 4 m

a) Beregn total kabellengde.
b) Legg til 8 % for kapping og marginer.
c) Kabelen selges i 50 m ruller à 485 kr. Hvor mange ruller trengs?
d) Hva blir totalkostnaden?`,
        subTasks: [
          { label: 'a', task: 'Total lengde', solution: '$12 + 8 + 6 + 5 + 4 = 35$ m', answer: 35 },
          { label: 'b', task: 'Med 8% svinn', solution: '$35 \\cdot 1{,}08 = 37{,}8$ m', answer: 37.8 },
          { label: 'c', task: 'Antall ruller', solution: '$\\frac{37{,}8}{50} = 0{,}76$, altså 1 rull', answer: 1 },
          { label: 'd', task: 'Totalkostnad', solution: '$1 \\cdot 485 = 485$ kr', answer: 485 },
        ],
        hints: ['Rund alltid opp antall ruller'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-6-1-ex-3',
        number: '6.3',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En rørlegger skal legge rør til en hytte. Prosjektet krever:

| Type rør | Lengde | Pris per meter | Svinn |
|----------|--------|----------------|-------|
| Kobberrør 15 mm | 28 m | 125 kr | 8 % |
| Kobberrør 22 mm | 12 m | 185 kr | 8 % |
| Avløpsrør 110 mm | 18 m | 89 kr | 10 % |
| Avløpsrør 75 mm | 8 m | 65 kr | 10 % |

a) Beregn total meterpris for hvert rør (med svinn).
b) Beregn materialkostnaden for hvert rør.
c) Hva blir total rørkostnad?`,
        subTasks: [
          { label: 'a', task: 'Meter med svinn', solution: 'Kobber 15: $28 \\cdot 1{,}08 = 30{,}24$ m. Kobber 22: $12 \\cdot 1{,}08 = 12{,}96$ m. Avløp 110: $18 \\cdot 1{,}10 = 19{,}8$ m. Avløp 75: $8 \\cdot 1{,}10 = 8{,}8$ m' },
          { label: 'b', task: 'Kostnader', solution: 'Kobber 15: $30{,}24 \\cdot 125 = 3\\,780$ kr. Kobber 22: $12{,}96 \\cdot 185 = 2\\,398$ kr. Avløp 110: $19{,}8 \\cdot 89 = 1\\,762$ kr. Avløp 75: $8{,}8 \\cdot 65 = 572$ kr' },
          { label: 'c', task: 'Total kostnad', solution: '$3\\,780 + 2\\,398 + 1\\,762 + 572 = 8\\,512$ kr', answer: 8512 },
        ],
        hints: ['Regn ut lengde med svinn først, deretter gang med pris'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_2PY_6_2: TextbookChapter = {
  id: '2py-6-2',
  courseId: '2py',
  chapterNumber: '6.2',
  title: 'Tidsberegninger og produktivitet',
  description: 'Beregn tidsbruk, produktivitet og effektivitet i arbeidsoppgaver.',
  estimatedMinutes: 45,
  competenceGoals: [
    'beregne tidsbruk for arbeidsoppgaver',
    'vurdere produktivitet og effektivitet',
  ],
  content: [
    {
      id: '2py-6-2-intro',
      type: 'text',
      content: `## Tidsberegninger

God tidsplanlegging er viktig i alle yrker. Du må kunne:
- Estimere hvor lang tid en jobb tar
- Beregne akkordlønn basert på produksjon
- Planlegge prosjekter med flere oppgaver
- Vurdere effektivitet og produktivitet`,
    },
    {
      id: '2py-6-2-def',
      type: 'definition',
      title: 'Produktivitet',
      content: `**Produktivitet** = Produksjon per tidsenhet

$$\\text{Produktivitet} = \\frac{\\text{Antall enheter}}{\\text{Tid}}$$

**Eksempler:**
- Fliser lagt per time
- Meter kabel trukket per dag
- Kunder betjent per time`,
    },
    {
      id: '2py-6-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Akkordarbeid',
      problem: `En maler får akkord på 85 kr per m² for maling av vegger (to strøk).

Hun maler i gjennomsnitt 12 m² per time.

a) Hva tjener hun per time?
b) Hvor lang tid bruker hun på et rom med 45 m² veggflate?
c) Hva tjener hun på dette rommet?
d) Sammenlign med timelønn på 280 kr. Hva lønner seg?`,
      solution: `**Løsning:**

a) **Timefortjeneste:**
$$12 \\text{ m}^2 \\cdot 85 \\text{ kr} = 1\\,020 \\text{ kr/time}$$

b) **Tid for rommet:**
$$\\frac{45 \\text{ m}^2}{12 \\text{ m}^2/\\text{time}} = 3{,}75 \\text{ timer}$$

c) **Fortjeneste for rommet:**
$$45 \\cdot 85 = 3\\,825 \\text{ kr}$$

d) **Sammenligning:**
Timelønn: $3{,}75 \\cdot 280 = 1\\,050$ kr
Akkord gir **3 825 kr**, altså mye bedre enn timelønn.`,
    },
    {
      id: '2py-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-6-2-ex-1',
        number: '6.4',
        type: 'classic',
        difficulty: 'medium',
        task: `En snekker bygger et gjerde. Han setter opp 8 meter gjerde per time.

a) Hvor lang tid tar det å bygge et gjerde på 56 meter?
b) Hvis han jobber 7,5 timer per dag, hvor mange dager tar jobben?
c) Han får 425 kr per meter gjerde. Hva blir total akkordlønn?
d) Sammenlign med fastpris på 22 000 kr for jobben. Hva er best?`,
        subTasks: [
          { label: 'a', task: 'Tid for 56 m', solution: '$\\frac{56}{8} = 7$ timer', answer: 7 },
          { label: 'b', task: 'Antall dager', solution: '$\\frac{7}{7{,}5} = 0{,}93$, altså 1 dag', answer: 1 },
          { label: 'c', task: 'Akkordlønn', solution: '$56 \\cdot 425 = 23\\,800$ kr', answer: 23800 },
          { label: 'd', task: 'Beste alternativ', solution: 'Akkord (23 800 kr) er bedre enn fastpris (22 000 kr)' },
        ],
        hints: ['Tid = Lengde / Produktivitet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-6-2-ex-2',
        number: '6.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et byggefirma planlegger å bygge en garasje. Tidsestimater:

| Oppgave | Timer | Arbeidere |
|---------|-------|-----------|
| Grunnarbeid | 16 | 2 |
| Støping | 8 | 3 |
| Reising av vegger | 24 | 2 |
| Tak | 20 | 2 |
| Elektriker | 12 | 1 |
| Finish | 16 | 1 |

a) Beregn totalt antall arbeidstimer (timer × arbeidere).
b) Timeprisen er 485 kr. Hva blir arbeidskostnaden?
c) Hvis to arbeidere kan jobbe samtidig på de fleste oppgavene, hvor mange dager tar prosjektet? (8 t/dag)
d) Legg til 15 % for uforutsette hendelser. Ny tidsramme?`,
        subTasks: [
          { label: 'a', task: 'Totale arbeidstimer', solution: '$16 \\cdot 2 + 8 \\cdot 3 + 24 \\cdot 2 + 20 \\cdot 2 + 12 \\cdot 1 + 16 \\cdot 1 = 32 + 24 + 48 + 40 + 12 + 16 = 172$ timer', answer: 172 },
          { label: 'b', task: 'Arbeidskostnad', solution: '$172 \\cdot 485 = 83\\,420$ kr', answer: 83420 },
          { label: 'c', task: 'Antall dager', solution: 'Total tid: $16 + 8 + 24 + 20 + 12 + 16 = 96$ timer. Dager: $\\frac{96}{8} = 12$ dager', answer: 12 },
          { label: 'd', task: 'Med 15% buffer', solution: '$12 \\cdot 1{,}15 = 13{,}8 \\approx 14$ dager', answer: 14 },
        ],
        hints: ['Arbeidstimer = Timer × Antall arbeidere'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7: MÅLING OG ENHETER
// ============================================================================

export const CHAPTER_2PY_7_1: TextbookChapter = {
  id: '2py-7-1',
  courseId: '2py',
  chapterNumber: '7.1',
  title: 'Enhetsomregning',
  description: 'Regn om mellom ulike enheter for lengde, areal, volum og masse.',
  estimatedMinutes: 45,
  competenceGoals: [
    'omregne mellom ulike måleenheter',
    'velge riktig enhet for ulike situasjoner',
  ],
  content: [
    {
      id: '2py-7-1-intro',
      type: 'text',
      content: `## Måleenheter

I arbeidslivet må du kunne jobbe med ulike enheter:
- Lengde: mm, cm, m, km
- Areal: mm², cm², m², hektar, km²
- Volum: ml, cl, dl, liter, m³
- Masse: mg, g, kg, tonn
- Tid: sekunder, minutter, timer, dager`,
    },
    {
      id: '2py-7-1-table',
      type: 'text',
      content: `## Omregningstabell

**Lengde:**
- 1 m = 100 cm = 1000 mm
- 1 km = 1000 m

**Areal:**
- 1 m² = 10 000 cm² = 1 000 000 mm²
- 1 hektar = 10 000 m²

**Volum:**
- 1 liter = 10 dl = 100 cl = 1000 ml
- 1 m³ = 1000 liter

**Masse:**
- 1 kg = 1000 g
- 1 tonn = 1000 kg`,
    },
    {
      id: '2py-7-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Enhetsomregning',
      problem: `a) Regn om 3,5 m til cm og mm.
b) Regn om 4 500 cm² til m².
c) Regn om 2,8 m³ til liter.
d) Regn om 1 250 kg til tonn.`,
      solution: `**Løsning:**

a) $3{,}5 \\text{ m} = 3{,}5 \\cdot 100 = 350 \\text{ cm} = 3500 \\text{ mm}$

b) $4\\,500 \\text{ cm}^2 = \\frac{4\\,500}{10\\,000} = 0{,}45 \\text{ m}^2$

c) $2{,}8 \\text{ m}^3 = 2{,}8 \\cdot 1000 = 2\\,800 \\text{ liter}$

d) $1\\,250 \\text{ kg} = \\frac{1\\,250}{1\\,000} = 1{,}25 \\text{ tonn}$`,
    },
    {
      id: '2py-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-7-1-ex-1',
        number: '7.1',
        type: 'classic',
        difficulty: 'lett',
        task: `Regn om:
a) 2,4 m til cm
b) 850 mm til m
c) 3,2 km til m
d) 15 600 m til km`,
        subTasks: [
          { label: 'a', task: '2,4 m til cm', solution: '$2{,}4 \\cdot 100 = 240$ cm', answer: 240 },
          { label: 'b', task: '850 mm til m', solution: '$\\frac{850}{1000} = 0{,}85$ m', answer: 0.85 },
          { label: 'c', task: '3,2 km til m', solution: '$3{,}2 \\cdot 1000 = 3\\,200$ m', answer: 3200 },
          { label: 'd', task: '15 600 m til km', solution: '$\\frac{15\\,600}{1000} = 15{,}6$ km', answer: 15.6 },
        ],
        hints: ['Fra større til mindre enhet: gang. Fra mindre til større: del.'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-7-1-ex-2',
        number: '7.2',
        type: 'classic',
        difficulty: 'medium',
        task: `En betongarbeider skal støpe et gulv på 45 m².

a) Regn om arealet til cm².
b) Gulvet skal være 12 cm tykt. Beregn volumet i m³.
c) Regn om volumet til liter.
d) Betong veier 2 400 kg/m³. Hvor mange tonn betong trengs?`,
        subTasks: [
          { label: 'a', task: 'Areal i cm²', solution: '$45 \\cdot 10\\,000 = 450\\,000$ cm²', answer: 450000 },
          { label: 'b', task: 'Volum i m³', solution: '$45 \\cdot 0{,}12 = 5{,}4$ m³', answer: 5.4 },
          { label: 'c', task: 'Volum i liter', solution: '$5{,}4 \\cdot 1000 = 5\\,400$ liter', answer: 5400 },
          { label: 'd', task: 'Masse i tonn', solution: '$5{,}4 \\cdot 2400 = 12\\,960$ kg $= 12{,}96$ tonn', answer: 12.96 },
        ],
        hints: ['Husk å gjøre om 12 cm til 0,12 m'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-7-1-ex-3',
        number: '7.3',
        type: 'classic',
        difficulty: 'medium',
        task: `En tank rommer 8 500 liter vann.

a) Regn om til m³.
b) Regn om til dl.
c) Vann veier 1 kg per liter. Hvor mye veier vannet i tonn?
d) Hvis tanken tappes med 25 liter per minutt, hvor lang tid tar det å tømme den?`,
        subTasks: [
          { label: 'a', task: 'Volum i m³', solution: '$\\frac{8500}{1000} = 8{,}5$ m³', answer: 8.5 },
          { label: 'b', task: 'Volum i dl', solution: '$8500 \\cdot 10 = 85\\,000$ dl', answer: 85000 },
          { label: 'c', task: 'Masse i tonn', solution: '$8500$ kg $= 8{,}5$ tonn', answer: 8.5 },
          { label: 'd', task: 'Tømmetid', solution: '$\\frac{8500}{25} = 340$ minutter $= 5$ timer 40 min', answer: 340 },
        ],
        hints: ['1 liter vann = 1 kg'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_2PY_7_2: TextbookChapter = {
  id: '2py-7-2',
  courseId: '2py',
  chapterNumber: '7.2',
  title: 'Måleverktøy og nøyaktighet',
  description: 'Bruk måleverktøy riktig og forstå begrepene nøyaktighet og toleranse.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke måleverktøy med riktig nøyaktighet',
    'forstå toleranser og avvik',
  ],
  content: [
    {
      id: '2py-7-2-intro',
      type: 'text',
      content: `## Nøyaktighet i måling

Alle målinger har en viss usikkerhet. Viktige begreper:

- **Nøyaktighet**: Hvor nær målingen er den sanne verdien
- **Presisjon**: Hvor repeterbare målingene er
- **Toleranse**: Tillatt avvik fra ønsket mål
- **Avlesningsfeil**: Feil ved avlesning av måleverktøy`,
    },
    {
      id: '2py-7-2-def',
      type: 'definition',
      title: 'Toleranse',
      content: `**Toleranse** angir hvor mye et mål kan avvike fra spesifikasjonen.

Eksempel: En bolt med diameter 12 mm ± 0,1 mm
- Nominelt mål: 12 mm
- Øvre toleransegrense: 12,1 mm
- Nedre toleransegrense: 11,9 mm
- Toleranseområde: 0,2 mm`,
    },
    {
      id: '2py-7-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Toleransekontroll',
      problem: `En maskin produserer aksler med nominell diameter 25,00 mm. Toleransen er ± 0,05 mm.

Følgende aksler er målt:
24,96 - 25,02 - 25,04 - 24,94 - 25,06 - 25,01 - 24,98 - 25,03 mm

a) Hva er toleranseområdet?
b) Hvor mange aksler er innenfor toleransen?
c) Hvor stor andel er godkjent?`,
      solution: `**Løsning:**

a) **Toleranseområde:**
- Nedre grense: $25{,}00 - 0{,}05 = 24{,}95$ mm
- Øvre grense: $25{,}00 + 0{,}05 = 25{,}05$ mm

b) **Aksler innenfor toleransen:**
Sjekker hver: 24,96 ✓, 25,02 ✓, 25,04 ✓, 24,94 ✗, 25,06 ✗, 25,01 ✓, 24,98 ✓, 25,03 ✓

**6 av 8** aksler er innenfor.

c) **Andel godkjent:**
$$\\frac{6}{8} = 0{,}75 = 75\\%$$`,
    },
    {
      id: '2py-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-7-2-ex-1',
        number: '7.4',
        type: 'classic',
        difficulty: 'medium',
        task: `En tømrer skal kappe lister med lengde 1200 mm ± 2 mm.

Han kapper 10 lister og måler:
1198, 1201, 1203, 1199, 1202, 1197, 1200, 1201, 1204, 1199 mm

a) Hva er toleranseområdet?
b) Hvor mange lister er innenfor toleransen?
c) Beregn gjennomsnittet av målingene.
d) Beregn avviket fra nominell lengde for gjennomsnittet.`,
        subTasks: [
          { label: 'a', task: 'Toleranseområde', solution: '1198 mm til 1202 mm' },
          { label: 'b', task: 'Innenfor toleranse', solution: '1198✓, 1201✓, 1203✗, 1199✓, 1202✓, 1197✗, 1200✓, 1201✓, 1204✗, 1199✓ = 7 lister', answer: 7 },
          { label: 'c', task: 'Gjennomsnitt', solution: '$\\frac{12004}{10} = 1200{,}4$ mm', answer: 1200.4 },
          { label: 'd', task: 'Avvik fra nominell', solution: '$1200{,}4 - 1200 = 0{,}4$ mm', answer: 0.4 },
        ],
        hints: ['Sjekk om hver måling er mellom 1198 og 1202'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-7-2-ex-2',
        number: '7.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En fabrikk produserer rør med ytre diameter 50,0 mm ± 0,3 mm og indre diameter 46,0 mm ± 0,2 mm.

a) Hva er teoretisk veggtykkelse?
b) Hva er minste tillatte veggtykkelse?
c) Hva er største tillatte veggtykkelse?
d) Et rør måles til ytre Ø 50,2 mm og indre Ø 45,9 mm. Er det godkjent?`,
        subTasks: [
          { label: 'a', task: 'Teoretisk veggtykkelse', solution: '$\\frac{50{,}0 - 46{,}0}{2} = 2{,}0$ mm', answer: 2.0 },
          { label: 'b', task: 'Minste veggtykkelse', solution: 'Minste ytre (49,7) - største indre (46,2): $\\frac{49{,}7 - 46{,}2}{2} = 1{,}75$ mm', answer: 1.75 },
          { label: 'c', task: 'Største veggtykkelse', solution: 'Største ytre (50,3) - minste indre (45,8): $\\frac{50{,}3 - 45{,}8}{2} = 2{,}25$ mm', answer: 2.25 },
          { label: 'd', task: 'Godkjent?', solution: 'Ytre: 50,2 ✓ (49,7-50,3). Indre: 45,9 ✓ (45,8-46,2). Ja, godkjent.' },
        ],
        hints: ['Veggtykkelse = (Ytre Ø - Indre Ø) / 2'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 8: PROBLEMLØSNING I PRAKSIS
// ============================================================================

export const CHAPTER_2PY_8_1: TextbookChapter = {
  id: '2py-8-1',
  courseId: '2py',
  chapterNumber: '8.1',
  title: 'Problemløsningsstrategier',
  description: 'Lær systematiske metoder for å løse praktiske problemer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke systematiske problemløsningsstrategier',
    'løse sammensatte praktiske problemer',
  ],
  content: [
    {
      id: '2py-8-1-intro',
      type: 'text',
      content: `## Problemløsning steg for steg

Når du møter et praktisk problem, bruk denne fremgangsmåten:

1. **Forstå problemet**: Hva er gitt? Hva skal du finne?
2. **Lag en plan**: Hvilke formler og metoder kan brukes?
3. **Gjennomfør planen**: Regn ut steg for steg
4. **Se tilbake**: Er svaret rimelig? Har du svart på spørsmålet?`,
    },
    {
      id: '2py-8-1-tip',
      type: 'tip',
      title: 'Nyttige strategier',
      content: `- **Tegn en figur**: Visualiser problemet
- **Del opp problemet**: Løs én del om gangen
- **Gjør overslag først**: Sjekk at svaret er rimelig
- **Bruk enheter**: Pass på at enhetene stemmer
- **Kontroller svaret**: Sett inn svaret og sjekk`,
    },
    {
      id: '2py-8-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Sammensatt prosjekt',
      problem: `En snekker skal bygge en bod med følgende spesifikasjoner:
- Grunnflate: 3 m × 4 m
- Vegghøyde: 2,4 m
- Tak med 15° helning

Materialbehov:
- Vegger: 22 mm kledning til 285 kr/m²
- Tak: Takplater til 189 kr/m²
- Gulv: Terrassebord til 345 kr/m²

Beregn total materialkostnad. Legg til 12 % for svinn.`,
      solution: `**Løsning:**

**Steg 1: Beregn veggarealet**
Omkrets: $2 \\cdot 3 + 2 \\cdot 4 = 14$ m
Veggareal: $14 \\cdot 2{,}4 = 33{,}6$ m²

**Steg 2: Beregn takarealet**
Takvinkelen gir lengre takflate.
Takbredde = $\\frac{3/2}{\\cos(15°)} = \\frac{1{,}5}{0{,}966} = 1{,}55$ m per side
Takareal = $2 \\cdot 1{,}55 \\cdot 4 = 12{,}4$ m²

**Steg 3: Beregn gulvarealet**
Gulv: $3 \\cdot 4 = 12$ m²

**Steg 4: Beregn kostnader**
- Vegger: $33{,}6 \\cdot 285 = 9\\,576$ kr
- Tak: $12{,}4 \\cdot 189 = 2\\,344$ kr
- Gulv: $12 \\cdot 345 = 4\\,140$ kr
- Sum: $9\\,576 + 2\\,344 + 4\\,140 = 16\\,060$ kr

**Steg 5: Legg til svinn**
$16\\,060 \\cdot 1{,}12 = 17\\,987$ kr

**Total materialkostnad: ca. 18 000 kr**`,
    },
    {
      id: '2py-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-8-1-ex-1',
        number: '8.1',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En elektriker skal installere lys i et verksted.

**Gitt:**
- Verksted: 12 m × 8 m
- Takhøyde: 4 m
- Anbefalt lysstyrke: 500 lux
- LED-panel: 4000 lumen, 40 W, 1250 kr/stk
- Kabel: 85 kr/m, ca. 3 m per panel
- Arbeidstid: 1,5 timer per panel, 495 kr/time

**Formel:** Antall panel = (Areal × Lux) / (Lumen per panel × 0,8)

a) Beregn antall panel som trengs.
b) Beregn materialkostnad (panel + kabel).
c) Beregn arbeidskostnad.
d) Hva blir totalkostnad inkl. 25 % mva?`,
        subTasks: [
          { label: 'a', task: 'Antall panel', solution: '$\\frac{96 \\cdot 500}{4000 \\cdot 0{,}8} = \\frac{48000}{3200} = 15$ panel', answer: 15 },
          { label: 'b', task: 'Materialkostnad', solution: 'Panel: $15 \\cdot 1250 = 18\\,750$ kr. Kabel: $15 \\cdot 3 \\cdot 85 = 3\\,825$ kr. Sum: $22\\,575$ kr', answer: 22575 },
          { label: 'c', task: 'Arbeidskostnad', solution: '$15 \\cdot 1{,}5 \\cdot 495 = 11\\,137{,}50$ kr', answer: 11137.50 },
          { label: 'd', task: 'Totalkost inkl. mva', solution: '$(22\\,575 + 11\\,137{,}50) \\cdot 1{,}25 = 33\\,712{,}50 \\cdot 1{,}25 = 42\\,141$ kr', answer: 42141 },
        ],
        hints: ['0,8 er utnyttelsesfaktor for lyset'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-8-1-ex-2',
        number: '8.2',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En rørlegger skal installere gulvvarme i et bad.

**Gitt:**
- Bad: 2,5 m × 3,2 m
- Varmerør legges med 10 cm mellomrom
- Rør: 28 kr/m
- Isolasjonsplater: 145 kr/m²
- Arbeidstid: 6 timer
- Timepris: 520 kr

a) Beregn gulvarealet.
b) Beregn omtrentlig rørlengde (areal / mellomrom + litt ekstra).
c) Beregn materialkostnad (rør + isolasjon).
d) Beregn totalkostnad ekskl. mva.`,
        subTasks: [
          { label: 'a', task: 'Gulvareal', solution: '$2{,}5 \\cdot 3{,}2 = 8$ m²', answer: 8 },
          { label: 'b', task: 'Rørlengde', solution: '$\\frac{8}{0{,}1} + 5 = 80 + 5 = 85$ m (med margin)', answer: 85 },
          { label: 'c', task: 'Materialkostnad', solution: 'Rør: $85 \\cdot 28 = 2\\,380$ kr. Isolasjon: $8 \\cdot 145 = 1\\,160$ kr. Sum: $3\\,540$ kr', answer: 3540 },
          { label: 'd', task: 'Totalkostnad ekskl. mva', solution: 'Arbeid: $6 \\cdot 520 = 3\\,120$ kr. Totalt: $3\\,540 + 3\\,120 = 6\\,660$ kr', answer: 6660 },
        ],
        hints: ['Rørlengde ≈ Areal / Mellomrom'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_2PY_8_2: TextbookChapter = {
  id: '2py-8-2',
  courseId: '2py',
  chapterNumber: '8.2',
  title: 'Digitale verktøy',
  description: 'Bruk regneark og kalkulatorer effektivt til praktiske beregninger.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke digitale verktøy til beregninger',
    'lage enkle regneark for gjentatte beregninger',
  ],
  content: [
    {
      id: '2py-8-2-intro',
      type: 'text',
      content: `## Digitale verktøy i arbeidslivet

Digitale verktøy gjør beregninger raskere og mer nøyaktige:

- **Regneark** (Excel, Google Sheets): For tabeller, formler, diagrammer
- **Kalkulatorer**: For raske beregninger
- **Bransjeprogrammer**: Spesialiserte verktøy for ulike yrker
- **Nettbaserte kalkulatorer**: For f.eks. låneberegning, mva-beregning`,
    },
    {
      id: '2py-8-2-text-2',
      type: 'text',
      content: `## Regneark - grunnleggende

I regneark kan du:
- Skrive inn tall og tekst i celler
- Bruke formler som starter med = (f.eks. =A1+B1)
- Kopiere formler til mange celler
- Lage diagrammer

**Vanlige funksjoner:**
- \`=SUM(A1:A10)\` - Summer cellene A1 til A10
- \`=GJENNOMSNITT(A1:A10)\` - Finn gjennomsnittet
- \`=MAKS(A1:A10)\` - Finn største verdi
- \`=MIN(A1:A10)\` - Finn minste verdi`,
    },
    {
      id: '2py-8-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Materialberegning i regneark',
      problem: `Sett opp et regneark for materialberegning:

| A | B | C | D |
|---|---|---|---|
| **Materiale** | **Mengde** | **Pris/enhet** | **Sum** |
| Gipsplater | 12 | 185 | =B2*C2 |
| Skruer (pk) | 3 | 89 | =B3*C3 |
| Sparkel (kg) | 5 | 125 | =B4*C4 |
| | | **Totalt:** | =SUM(D2:D4) |
| | | **Mva 25%:** | =D5*0,25 |
| | | **Inkl. mva:** | =D5+D6 |

Beregn totalkostnaden.`,
      solution: `**Løsning:**

| Materiale | Mengde | Pris/enhet | Sum |
|-----------|--------|------------|-----|
| Gipsplater | 12 | 185 | 2 220 |
| Skruer (pk) | 3 | 89 | 267 |
| Sparkel (kg) | 5 | 125 | 625 |
| | | **Totalt:** | **3 112** |
| | | **Mva 25%:** | **778** |
| | | **Inkl. mva:** | **3 890** |`,
    },
    {
      id: '2py-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-8-2-ex-1',
        number: '8.3',
        type: 'classic',
        difficulty: 'medium',
        task: `Lag et regneark for timeregistrering:

| Dag | Timer | Timepris | Dagslønn |
|-----|-------|----------|----------|
| Mandag | 8 | 285 | ? |
| Tirsdag | 7,5 | 285 | ? |
| Onsdag | 8 | 285 | ? |
| Torsdag | 6 | 285 | ? |
| Fredag | 8,5 | 285 | ? |
| | **Sum timer:** | | **Sum lønn:** |

a) Beregn dagslønnen for hver dag.
b) Beregn sum timer for uken.
c) Beregn ukeslønn før skatt.
d) Hvis skattetrekket er 28 %, hva blir nettolønnen?`,
        subTasks: [
          { label: 'a', task: 'Dagslønner', solution: 'Man: 2280, Tir: 2137,50, Ons: 2280, Tor: 1710, Fre: 2422,50' },
          { label: 'b', task: 'Sum timer', solution: '$8 + 7{,}5 + 8 + 6 + 8{,}5 = 38$ timer', answer: 38 },
          { label: 'c', task: 'Ukeslønn brutto', solution: '$38 \\cdot 285 = 10\\,830$ kr', answer: 10830 },
          { label: 'd', task: 'Nettolønn', solution: '$10\\,830 \\cdot (1 - 0{,}28) = 10\\,830 \\cdot 0{,}72 = 7\\,798$ kr', answer: 7798 },
        ],
        hints: ['Dagslønn = Timer × Timepris'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-8-2-ex-2',
        number: '8.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Bruk kalkulator eller regneark til å løse:

En bil koster 320 000 kr. Den finansieres med:
- Egenkapital: 50 000 kr
- Lån: 270 000 kr
- Rente: 6,5 % per år
- Nedbetalingstid: 5 år
- Månedlig terminbeløp: 5 283 kr

a) Beregn totalt betalt over 5 år (terminbeløp × antall måneder).
b) Beregn totale rentekostnader.
c) Hva er den totale kostnaden for bilen (egenkapital + terminbeløp)?
d) Hvis bilen er verdt 140 000 kr etter 5 år, hva har det kostet å eie bilen?`,
        subTasks: [
          { label: 'a', task: 'Totalt betalt på lån', solution: '$5\\,283 \\cdot 60 = 316\\,980$ kr', answer: 316980 },
          { label: 'b', task: 'Totale renter', solution: '$316\\,980 - 270\\,000 = 46\\,980$ kr', answer: 46980 },
          { label: 'c', task: 'Total kostnad', solution: '$50\\,000 + 316\\,980 = 366\\,980$ kr', answer: 366980 },
          { label: 'd', task: 'Eierkostnad', solution: '$366\\,980 - 140\\,000 = 226\\,980$ kr', answer: 226980 },
        ],
        hints: ['5 år = 60 måneder'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// Eksporter alle kapitler som et objekt
export const CHAPTERS_2PY: Record<string, TextbookChapter> = {
  '2py-1-1': CHAPTER_2PY_1_1,
  '2py-1-2': CHAPTER_2PY_1_2,
  '2py-1-3': CHAPTER_2PY_1_3,
  '2py-2-1': CHAPTER_2PY_2_1,
  '2py-2-2': CHAPTER_2PY_2_2,
  '2py-2-3': CHAPTER_2PY_2_3,
  '2py-3-1': CHAPTER_2PY_3_1,
  '2py-3-2': CHAPTER_2PY_3_2,
  '2py-3-3': CHAPTER_2PY_3_3,
  '2py-4-1': CHAPTER_2PY_4_1,
  '2py-4-2': CHAPTER_2PY_4_2,
  '2py-5-1': CHAPTER_2PY_5_1,
  '2py-5-2': CHAPTER_2PY_5_2,
  '2py-6-1': CHAPTER_2PY_6_1,
  '2py-6-2': CHAPTER_2PY_6_2,
  '2py-7-1': CHAPTER_2PY_7_1,
  '2py-7-2': CHAPTER_2PY_7_2,
  '2py-8-1': CHAPTER_2PY_8_1,
  '2py-8-2': CHAPTER_2PY_8_2,
};
