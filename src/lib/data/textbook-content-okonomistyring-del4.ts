/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Økonomistyring (VG2) - Del 4
 * Seksjon 4: Kalkyler og prissetting
 * Følger LK20 læreplan (NOK02-03)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ========================================================================================
// KAPITTEL 4.1: Faste og variable kostnader
// ========================================================================================

const CHAPTER_OKONOMISTYRING_4_1: TextbookChapter = {
  id: 'oks-4-1',
  title: 'Faste og variable kostnader',
  subject: 'okonomistyring',
  level: 'vg2',
  section: 4,
  estimatedMinutes: 20,
  content: [
    {
      type: 'text',
      id: 'oks-4-1-intro',
      content: `For å kunne drive en bedrift lønnsomt må man forstå hvordan kostnadene oppfører seg når produksjonen endres. Noen kostnader er faste uansett hvor mye man produserer, mens andre kostnader øker proporsjonalt med produksjonen. Dette skillet er grunnleggende i all økonomistyring.`
    },
    {
      type: 'text',
      id: 'oks-4-1-faste',
      content: `**Faste kostnader** er kostnader som ikke endres når produksjonen eller omsetningen endres. Disse kostnadene må betales uansett om bedriften produserer mye eller lite. Eksempler på faste kostnader er:

- Husleie for lokaler
- Forsikringer
- Årlig lisens for programvare
- Faste lønninger til administrasjon
- Avskrivninger på maskiner og utstyr
- Rentekostnader på lån`
    },
    {
      type: 'example',
      id: 'oks-4-1-eks-fast',
      content: `**Eksempel: Faste kostnader**

Et bakeri betaler 25 000 kr i månedlig husleie. Denne kostnaden er den samme enten de baker 1000 brød eller 5000 brød i måneden. Husleien er derfor en fast kostnad.

Bakeriet har også en fast lønn til daglig leder på 45 000 kr per måned. Dette er også en fast kostnad, siden lønnen ikke endres med produksjonsmengden.

Totalt har bakeriet faste kostnader på 70 000 kr per måned.`
    },
    {
      type: 'text',
      id: 'oks-4-1-variable',
      content: `**Variable kostnader** er kostnader som endres proporsjonalt med produksjonen eller omsetningen. Jo mer bedriften produserer, desto høyere blir de variable kostnadene. Eksempler på variable kostnader er:

- Råvarer og materialer
- Emballasje
- Strøm til produksjonsmaskiner
- Provisjonslønn til selgere
- Fraktkostnader
- Timelønn til produksjonsarbeidere`
    },
    {
      type: 'example',
      id: 'oks-4-1-eks-variabel',
      content: `**Eksempel: Variable kostnader**

Bakeriet fra forrige eksempel bruker følgende råvarer per brød:
- Mel, gjær, salt: 8 kr
- Emballasje: 2 kr
- Strøm til ovn: 1 kr

Variable kostnader per brød: $8 + 2 + 1 = 11$ kr

Hvis bakeriet baker 3000 brød i måneden blir de variable kostnadene:
$$3000 \\text{ brød} \\times 11 \\text{ kr/brød} = 33\\,000 \\text{ kr}$$

Hvis de baker 5000 brød blir de variable kostnadene:
$$5000 \\text{ brød} \\times 11 \\text{ kr/brød} = 55\\,000 \\text{ kr}$$`
    },
    {
      type: 'text',
      id: 'oks-4-1-totalkostnad',
      content: `**Totalkostnad** er summen av faste og variable kostnader:

$$\\text{Totalkostnad} = \\text{Faste kostnader} + \\text{Variable kostnader}$$

Variable kostnader kan også uttrykkes som variable kostnader per enhet multiplisert med antall enheter:

$$\\text{Totalkostnad} = \\text{FK} + (\\text{VK per enhet} \\times \\text{Antall enheter})$$`
    },
    {
      type: 'example',
      id: 'oks-4-1-eks-totalkostnad',
      content: `**Eksempel: Totalkostnad**

Bakeriet har:
- Faste kostnader: 70 000 kr per måned
- Variable kostnader: 11 kr per brød

Hvis de baker 4000 brød i måneden blir totalkostnaden:
$$\\text{TK} = 70\\,000 + (11 \\times 4000) = 70\\,000 + 44\\,000 = 114\\,000 \\text{ kr}$$

Gjennomsnittlig kostnad per brød:
$$\\frac{114\\,000}{4000} = 28.50 \\text{ kr per brød}$$

Hvis de øker produksjonen til 6000 brød:
$$\\text{TK} = 70\\,000 + (11 \\times 6000) = 70\\,000 + 66\\,000 = 136\\,000 \\text{ kr}$$

Gjennomsnittlig kostnad per brød:
$$\\frac{136\\,000}{6000} = 22.67 \\text{ kr per brød}$$

Legg merke til at gjennomsnittskostnaden per brød synker når produksjonen øker, fordi de faste kostnadene fordeles på flere enheter.`
    },
    {
      type: 'text',
      id: 'oks-4-1-blandede',
      content: `**Blandede kostnader** er kostnader som har både en fast og en variabel del. For eksempel kan en strømregning ha et fast månedsbeløp pluss en variabel del basert på forbruk. Ved kalkyler må slike kostnader deles opp i en fast og en variabel del.`
    },
    {
      type: 'example',
      id: 'oks-4-1-eks-blandet',
      content: `**Eksempel: Blandet kostnad**

Et produksjonsselskap har en strømavtale med fast månedspris på 3000 kr pluss 0.80 kr per kWh.

I januar brukte de 8000 kWh. Strømkostnaden blir da:
$$\\text{Strømkostnad} = 3000 + (0.80 \\times 8000) = 3000 + 6400 = 9400 \\text{ kr}$$

Ved kalkyler deler vi dette opp i:
- Fast del: 3000 kr
- Variabel del: 6400 kr`
    },
  ],
  exercises: [
    {
      type: 'multiple-choice',
      id: 'oks-4-1-mc-1',
      question: 'Hvilket av følgende er en fast kostnad?',
      options: [
        'Råvarer til produksjon',
        'Årlig forsikringspremie',
        'Emballasje',
        'Provisjonslønn til selgere'
      ],
      correctAnswer: 1,
      explanation: 'Årlig forsikringspremie er en fast kostnad fordi den må betales uansett produksjonsnivå. De andre alternativene er variable kostnader som endres med produksjonen.'
    },
    {
      type: 'classic',
      id: 'oks-4-1-kl-1',
      question: 'En bedrift har faste kostnader på 180 000 kr per måned og variable kostnader på 45 kr per enhet. Regn ut totalkostnaden hvis de produserer 5000 enheter.',
      solution: `**Gitt:**
- FK = 180 000 kr
- VK per enhet = 45 kr
- Antall enheter = 5000

**Løsning:**
$$\\text{TK} = \\text{FK} + (\\text{VK per enhet} \\times \\text{Antall})$$
$$\\text{TK} = 180\\,000 + (45 \\times 5000)$$
$$\\text{TK} = 180\\,000 + 225\\,000 = 405\\,000 \\text{ kr}$$

**Svar:** Totalkostnaden er 405 000 kr.`
    },
    {
      type: 'classic',
      id: 'oks-4-1-kl-2',
      question: 'En restaurant har faste kostnader på 95 000 kr per måned. Variable kostnader per måltid er 65 kr. I mars serverte de 2400 måltider. a) Regn ut totalkostnaden. b) Regn ut gjennomsnittlig kostnad per måltid.',
      solution: `**Gitt:**
- FK = 95 000 kr
- VK per måltid = 65 kr
- Antall måltider = 2400

**a) Totalkostnad:**
$$\\text{TK} = 95\\,000 + (65 \\times 2400) = 95\\,000 + 156\\,000 = 251\\,000 \\text{ kr}$$

**b) Gjennomsnittlig kostnad per måltid:**
$$\\frac{251\\,000}{2400} = 104.58 \\text{ kr per måltid}$$

**Svar:**
a) Totalkostnaden er 251 000 kr
b) Gjennomsnittlig kostnad er 104.58 kr per måltid`
    },
    {
      type: 'classic',
      id: 'oks-4-1-kl-3',
      question: 'En bedrift har en blandet kostnad hvor de betaler 4500 kr fast per måned pluss 12 kr per produsert enhet. I oktober produserte de 3200 enheter. Hvor stor er denne kostnaden totalt, og hvor stor er henholdsvis den faste og variable delen?',
      solution: `**Gitt:**
- Fast del: 4500 kr
- Variabel del: 12 kr per enhet
- Antall enheter: 3200

**Løsning:**
Fast del = 4500 kr

Variabel del:
$$12 \\times 3200 = 38\\,400 \\text{ kr}$$

Total kostnad:
$$4500 + 38\\,400 = 42\\,900 \\text{ kr}$$

**Svar:**
- Fast del: 4500 kr
- Variabel del: 38 400 kr
- Total kostnad: 42 900 kr`
    },
    // --- Samleoppgaver ---
    {
      type: 'classic',
      id: 'oks-4-1-kl-4',
      question: 'Et møbelfirma har følgende kostnader per måned: Husleie 45 000 kr, faste lønninger 220 000 kr, forsikringer 8000 kr, trevirke 180 kr per stol, lakk og lim 35 kr per stol, provisjon til selgere 50 kr per solgt stol. I mai produserte og solgte de 850 stoler. a) Klassifiser kostnadene som faste eller variable. b) Regn ut totale faste kostnader. c) Regn ut variable kostnader per stol. d) Regn ut totalkostnaden for mai.',
      solution: `**a) Klassifisering:**
Faste kostnader: Husleie (45 000 kr), faste lønninger (220 000 kr), forsikringer (8000 kr)
Variable kostnader: Trevirke (180 kr/stol), lakk og lim (35 kr/stol), provisjon (50 kr/stol)

**b) Totale faste kostnader:**
$$\\text{FK} = 45\\,000 + 220\\,000 + 8000 = 273\\,000 \\text{ kr}$$

**c) Variable kostnader per stol:**
$$\\text{VK per stol} = 180 + 35 + 50 = 265 \\text{ kr}$$

**d) Totalkostnad for mai:**
$$\\text{TK} = 273\\,000 + (265 \\times 850)$$
$$\\text{TK} = 273\\,000 + 225\\,250 = 498\\,250 \\text{ kr}$$

**Svar:**
a) Se klassifisering over
b) Faste kostnader: 273 000 kr
c) Variable kostnader: 265 kr per stol
d) Totalkostnad: 498 250 kr`
    },
    {
      type: 'classic',
      id: 'oks-4-1-kl-5',
      question: 'En bedrift ønsker å sammenligne to produksjonsnivåer. De har faste kostnader på 320 000 kr per måned og variable kostnader på 78 kr per enhet. Regn ut totalkostnad og gjennomsnittskostnad per enhet for: a) 6000 enheter, b) 10 000 enheter. c) Forklar hvorfor gjennomsnittskostnaden endres.',
      solution: `**Gitt:**
- FK = 320 000 kr
- VK per enhet = 78 kr

**a) 6000 enheter:**
$$\\text{TK} = 320\\,000 + (78 \\times 6000) = 320\\,000 + 468\\,000 = 788\\,000 \\text{ kr}$$
$$\\text{Gj.snitt per enhet} = \\frac{788\\,000}{6000} = 131.33 \\text{ kr}$$

**b) 10 000 enheter:**
$$\\text{TK} = 320\\,000 + (78 \\times 10\\,000) = 320\\,000 + 780\\,000 = 1\\,100\\,000 \\text{ kr}$$
$$\\text{Gj.snitt per enhet} = \\frac{1\\,100\\,000}{10\\,000} = 110.00 \\text{ kr}$$

**c) Forklaring:**
Gjennomsnittskostnaden per enhet synker fra 131.33 kr til 110.00 kr når produksjonen øker. Dette skjer fordi de faste kostnadene (320 000 kr) fordeles på flere enheter. De variable kostnadene per enhet (78 kr) forblir uendret, men den faste kostnaden per enhet synker fra 53.33 kr til 32.00 kr.

**Svar:**
a) TK = 788 000 kr, gj.snitt = 131.33 kr
b) TK = 1 100 000 kr, gj.snitt = 110.00 kr
c) Se forklaring over`
    },
  ],
};

// ========================================================================================
// KAPITTEL 4.2: Selvkostkalkylen
// ========================================================================================

const CHAPTER_OKONOMISTYRING_4_2: TextbookChapter = {
  id: 'oks-4-2',
  title: 'Selvkostkalkylen',
  subject: 'okonomistyring',
  level: 'vg2',
  section: 4,
  estimatedMinutes: 25,
  content: [
    {
      type: 'text',
      id: 'oks-4-2-intro',
      content: `Selvkostkalkylen er en metode for å beregne hva det koster å produsere en enhet av et produkt. Denne kalkylen inkluderer både direkte og indirekte kostnader, og gir dermed full kostdekning for produktet. Selvkostkalkylen brukes blant annet til prissetting og lønnsomhetsanalyser.`
    },
    {
      type: 'text',
      id: 'oks-4-2-direkte',
      content: `**Direkte kostnader** er kostnader som kan knyttes direkte til et bestemt produkt eller en bestemt produksjonsordre. Disse kostnadene varierer med produksjonen og er lette å måle. Eksempler på direkte kostnader:

**Direkte materialkostnader:**
- Råvarer som går direkte inn i produktet
- Emballasje
- Komponenter og deler

**Direkte lønnskostnader:**
- Lønn til produksjonsarbeidere som jobber direkte med produktet
- Timelønn, akkordlønn
- Sosiale kostnader (arbeidsgiveravgift) på disse lønnene`
    },
    {
      type: 'text',
      id: 'oks-4-2-indirekte',
      content: `**Indirekte kostnader** er kostnader som ikke kan knyttes direkte til et bestemt produkt, men som likevel er nødvendige for produksjonen. Disse må fordeles på produktene ved hjelp av fordelingsnøkler. Eksempler på indirekte kostnader:

**Indirekte materialkostnader:**
- Smøreolje til maskiner
- Rengjøringsmidler
- Verktøy og utstyr

**Indirekte lønnskostnader:**
- Lønn til formenn og vaktmestere
- Lønn til vedlikeholdspersonell
- Administrasjonslønn

**Andre indirekte kostnader:**
- Husleie for produksjonslokaler
- Strøm og oppvarming
- Forsikringer
- Avskrivninger på maskiner`
    },
    {
      type: 'example',
      id: 'oks-4-2-eks-klassifisering',
      content: `**Eksempel: Klassifisering av kostnader**

Et møbelfirma som produserer stoler har følgende kostnader:
- Trevirke til stolene: **Direkte materialkostnad**
- Lønn til snekker som bygger stolene: **Direkte lønnskostnad**
- Lim og skruer: **Indirekte materialkostnad** (brukes til mange produkter)
- Lønn til lagerarbeider: **Indirekte lønnskostnad**
- Husleie for verkstedet: **Indirekte kostnad**
- Strøm til maskiner: **Indirekte kostnad**`
    },
    {
      type: 'text',
      id: 'oks-4-2-fordelingsnokkel',
      content: `**Fordelingsnøkler** brukes til å fordele indirekte kostnader på produktene. Vanlige fordelingsnøkler er:

- **Direkte materialkostnader** - brukes ofte for indirekte materialkostnader
- **Direkte lønnskostnader** - brukes ofte for indirekte lønnskostnader
- **Direkte kostnader totalt** - brukes for andre indirekte kostnader
- **Maskintimer** - kan brukes i maskinintensive bedrifter
- **Produserte enheter** - kan brukes hvis produktene er like

Tillegget beregnes som en prosent:
$$\\text{Tilleggsprosent} = \\frac{\\text{Indirekte kostnader}}{\\text{Fordelingsnøkkel}} \\times 100\\%$$`
    },
    {
      type: 'example',
      id: 'oks-4-2-eks-fordelingsnokkel',
      content: `**Eksempel: Fordelingsnøkkel**

Et produksjonsselskap har:
- Totale direkte lønnskostnader: 2 400 000 kr per år
- Totale indirekte lønnskostnader: 720 000 kr per år

Tilleggsprosent for indirekte lønn:
$$\\frac{720\\,000}{2\\,400\\,000} \\times 100\\% = 30\\%$$

Dette betyr at for hver krone i direkte lønn, må vi legge til 30 øre i indirekte lønn.

Hvis et produkt har direkte lønnskostnader på 150 kr, blir indirekte lønnskostnader:
$$150 \\times \\frac{30}{100} = 45 \\text{ kr}$$`
    },
    {
      type: 'text',
      id: 'oks-4-2-selvkost',
      content: `**Selvkost per enhet** beregnes ved å summere alle direkte og indirekte kostnader:

$$\\text{Selvkost} = \\text{DM} + \\text{DL} + \\text{IM} + \\text{IL} + \\text{Andre IK}$$

Hvor:
- DM = Direkte materialkostnader
- DL = Direkte lønnskostnader
- IM = Indirekte materialkostnader
- IL = Indirekte lønnskostnader
- Andre IK = Andre indirekte kostnader

Selvkosten representerer den totale kostnaden for å produsere én enhet av produktet.`
    },
    {
      type: 'example',
      id: 'oks-4-2-eks-selvkost',
      content: `**Eksempel: Selvkostkalkyle**

Et møbelfirma skal beregne selvkost for en stol. De har følgende tall for én stol:

**Direkte kostnader:**
- Direkte materialkostnader: 280 kr
- Direkte lønnskostnader: 220 kr

**Tilleggsprosenter:**
- Indirekte materialkostnader: 15% av DM
- Indirekte lønnskostnader: 40% av DL
- Andre indirekte kostnader: 25% av (DM + DL)

**Kalkyle:**

Direkte materialkostnader: 280 kr
Indirekte materialkostnader: $280 \\times 0.15 = 42$ kr

Direkte lønnskostnader: 220 kr
Indirekte lønnskostnader: $220 \\times 0.40 = 88$ kr

Andre indirekte kostnader: $(280 + 220) \\times 0.25 = 125$ kr

**Selvkost per stol:**
$$280 + 42 + 220 + 88 + 125 = 755 \\text{ kr}$$`
    },
    {
      type: 'text',
      id: 'oks-4-2-selvkostkalkyle-tabell',
      content: `**Oppsett av selvkostkalkyle**

En selvkostkalkyle presenteres ofte i tabellform:

| Kostnadstype | Beløp |
|--------------|-------|
| Direkte materialkostnader | xxx kr |
| + Indirekte materialkostnader | xxx kr |
| **= Totale materialkostnader** | **xxx kr** |
| Direkte lønnskostnader | xxx kr |
| + Indirekte lønnskostnader | xxx kr |
| **= Totale lønnskostnader** | **xxx kr** |
| + Andre indirekte kostnader | xxx kr |
| **= Selvkost per enhet** | **xxx kr** |`
    },
    {
      type: 'example',
      id: 'oks-4-2-eks-fullstendig',
      content: `**Eksempel: Fullstendig selvkostkalkyle**

En bedrift produserer 5000 enheter per år. Totale kostnader:
- Direkte materialkostnader: 600 000 kr
- Direkte lønnskostnader: 800 000 kr
- Indirekte materialkostnader: 90 000 kr
- Indirekte lønnskostnader: 280 000 kr
- Andre indirekte kostnader: 350 000 kr

**Selvkost per enhet:**

| Kostnadstype | Beløp per enhet |
|--------------|-----------------|
| Direkte materialkostnader | 600 000 / 5000 = 120 kr |
| + Indirekte materialkostnader | 90 000 / 5000 = 18 kr |
| **= Totale materialkostnader** | **138 kr** |
| Direkte lønnskostnader | 800 000 / 5000 = 160 kr |
| + Indirekte lønnskostnader | 280 000 / 5000 = 56 kr |
| **= Totale lønnskostnader** | **216 kr** |
| + Andre indirekte kostnader | 350 000 / 5000 = 70 kr |
| **= Selvkost per enhet** | **424 kr** |`
    },
  ],
  exercises: [
    {
      type: 'multiple-choice',
      id: 'oks-4-2-mc-1',
      question: 'Hvilket av følgende er en direkte kostnad?',
      options: [
        'Lønn til daglig leder',
        'Råvarer som går inn i produktet',
        'Husleie for fabrikkbygning',
        'Smøreolje til maskiner'
      ],
      correctAnswer: 1,
      explanation: 'Råvarer som går direkte inn i produktet er en direkte materialkostnad. De andre alternativene er indirekte kostnader.'
    },
    {
      type: 'classic',
      id: 'oks-4-2-kl-1',
      question: 'En bedrift har totale indirekte lønnskostnader på 540 000 kr per år og totale direkte lønnskostnader på 1 800 000 kr per år. Regn ut tilleggsprosenten for indirekte lønn.',
      solution: `**Gitt:**
- Indirekte lønnskostnader: 540 000 kr
- Direkte lønnskostnader: 1 800 000 kr

**Løsning:**
$$\\text{Tilleggsprosent} = \\frac{540\\,000}{1\\,800\\,000} \\times 100\\% = 30\\%$$

**Svar:** Tilleggsprosenten for indirekte lønn er 30%.`
    },
    {
      type: 'classic',
      id: 'oks-4-2-kl-2',
      question: 'Et produkt har direkte materialkostnader på 185 kr og direkte lønnskostnader på 240 kr. Bedriften bruker følgende tillegg: IM = 12% av DM, IL = 35% av DL. Regn ut totale materialkostnader og totale lønnskostnader.',
      solution: `**Gitt:**
- DM = 185 kr
- DL = 240 kr
- IM = 12% av DM
- IL = 35% av DL

**Løsning:**

Indirekte materialkostnader:
$$\\text{IM} = 185 \\times 0.12 = 22.20 \\text{ kr}$$

Totale materialkostnader:
$$185 + 22.20 = 207.20 \\text{ kr}$$

Indirekte lønnskostnader:
$$\\text{IL} = 240 \\times 0.35 = 84 \\text{ kr}$$

Totale lønnskostnader:
$$240 + 84 = 324 \\text{ kr}$$

**Svar:**
- Totale materialkostnader: 207.20 kr
- Totale lønnskostnader: 324 kr`
    },
    {
      type: 'classic',
      id: 'oks-4-2-kl-3',
      question: 'En bedrift produserer 8000 enheter per år. Totale kostnader er: Direkte materialkostnader 960 000 kr, direkte lønnskostnader 1 280 000 kr, indirekte materialkostnader 115 200 kr, indirekte lønnskostnader 448 000 kr, andre indirekte kostnader 560 000 kr. Regn ut selvkost per enhet.',
      solution: `**Gitt:**
- Antall enheter: 8000
- DM totalt: 960 000 kr
- DL totalt: 1 280 000 kr
- IM totalt: 115 200 kr
- IL totalt: 448 000 kr
- Andre IK totalt: 560 000 kr

**Løsning:**

Totale kostnader:
$$960\\,000 + 1\\,280\\,000 + 115\\,200 + 448\\,000 + 560\\,000 = 3\\,363\\,200 \\text{ kr}$$

Selvkost per enhet:
$$\\frac{3\\,363\\,200}{8000} = 420.40 \\text{ kr}$$

**Alternativ løsning (kostnader per enhet):**
- DM: 960 000 / 8000 = 120 kr
- IM: 115 200 / 8000 = 14.40 kr
- DL: 1 280 000 / 8000 = 160 kr
- IL: 448 000 / 8000 = 56 kr
- Andre IK: 560 000 / 8000 = 70 kr
- Selvkost: 120 + 14.40 + 160 + 56 + 70 = 420.40 kr

**Svar:** Selvkost per enhet er 420.40 kr.`
    },
    {
      type: 'classic',
      id: 'oks-4-2-kl-4',
      question: 'Lag en fullstendig selvkostkalkyle for ett produkt med følgende opplysninger: DM = 340 kr, DL = 280 kr. Tillegg: IM = 18% av DM, IL = 45% av DL, Andre IK = 30% av (DM + DL). Presenter svaret i tabellform.',
      solution: `**Gitt:**
- DM = 340 kr
- DL = 280 kr
- IM = 18% av DM
- IL = 45% av DL
- Andre IK = 30% av (DM + DL)

**Beregninger:**
- IM = 340 × 0.18 = 61.20 kr
- IL = 280 × 0.45 = 126 kr
- Andre IK = (340 + 280) × 0.30 = 186 kr

**Selvkostkalkyle:**

| Kostnadstype | Beløp |
|--------------|-------|
| Direkte materialkostnader | 340.00 kr |
| + Indirekte materialkostnader | 61.20 kr |
| **= Totale materialkostnader** | **401.20 kr** |
| Direkte lønnskostnader | 280.00 kr |
| + Indirekte lønnskostnader | 126.00 kr |
| **= Totale lønnskostnader** | **406.00 kr** |
| + Andre indirekte kostnader | 186.00 kr |
| **= Selvkost per enhet** | **993.20 kr** |`
    },
    // --- Samleoppgaver ---
    {
      type: 'classic',
      id: 'oks-4-2-kl-5',
      question: 'En møbelfabrikk produserer 3000 bord per år. Totale årskostnader: DM 1 350 000 kr, DL 1 800 000 kr, IM 162 000 kr, IL 630 000 kr, Andre IK 750 000 kr. a) Regn ut selvkost per bord. b) Regn ut tilleggsprosent for IM basert på DM. c) Regn ut tilleggsprosent for IL basert på DL. d) Hvis de øker produksjonen til 4000 bord uten at de faste kostnadene øker, vil selvkost per bord øke eller synke? Forklar.',
      solution: `**a) Selvkost per bord:**

Totale kostnader:
$$1\\,350\\,000 + 1\\,800\\,000 + 162\\,000 + 630\\,000 + 750\\,000 = 4\\,692\\,000 \\text{ kr}$$

Selvkost per bord:
$$\\frac{4\\,692\\,000}{3000} = 1564 \\text{ kr}$$

**b) Tilleggsprosent IM:**
$$\\frac{162\\,000}{1\\,350\\,000} \\times 100\\% = 12\\%$$

**c) Tilleggsprosent IL:**
$$\\frac{630\\,000}{1\\,800\\,000} \\times 100\\% = 35\\%$$

**d) Effekt av økt produksjon:**
Selvkost per bord vil **synke**. Når produksjonen øker fra 3000 til 4000 bord uten at faste kostnader øker, fordeles de faste kostnadene på flere enheter. De indirekte kostnadene (162 000 + 630 000 + 750 000 = 1 542 000 kr) inneholder mange faste kostnader som husleie, avskrivninger og administrasjonslønninger. Disse vil bli fordelt på flere bord, noe som reduserer gjennomsnittskostnaden per bord.

**Svar:**
a) 1564 kr per bord
b) 12%
c) 35%
d) Selvkost synker, se forklaring over`
    },
    {
      type: 'classic',
      id: 'oks-4-2-kl-6',
      question: 'En bedrift produserer to produkter, A og B. Totale direkte materialkostnader er 2 400 000 kr (A: 1 600 000 kr, B: 800 000 kr). Totale indirekte materialkostnader er 288 000 kr som fordeles basert på DM. Bedriften produserer 8000 enheter av A og 4000 enheter av B. a) Regn ut tilleggsprosenten for IM. b) Regn ut IM per enhet for produkt A. c) Regn ut IM per enhet for produkt B.',
      solution: `**Gitt:**
- Totalt DM: 2 400 000 kr (A: 1 600 000 kr, B: 800 000 kr)
- Totalt IM: 288 000 kr
- Antall A: 8000 enheter
- Antall B: 4000 enheter

**a) Tilleggsprosent IM:**
$$\\frac{288\\,000}{2\\,400\\,000} \\times 100\\% = 12\\%$$

**b) IM per enhet for produkt A:**

DM per enhet A:
$$\\frac{1\\,600\\,000}{8000} = 200 \\text{ kr}$$

IM per enhet A:
$$200 \\times 0.12 = 24 \\text{ kr}$$

**Alternativt:**
Totalt IM for A: $1\\,600\\,000 \\times 0.12 = 192\\,000$ kr
IM per enhet: $\\frac{192\\,000}{8000} = 24$ kr

**c) IM per enhet for produkt B:**

DM per enhet B:
$$\\frac{800\\,000}{4000} = 200 \\text{ kr}$$

IM per enhet B:
$$200 \\times 0.12 = 24 \\text{ kr}$$

**Alternativt:**
Totalt IM for B: $800\\,000 \\times 0.12 = 96\\,000$ kr
IM per enhet: $\\frac{96\\,000}{4000} = 24$ kr

**Svar:**
a) 12%
b) 24 kr per enhet
c) 24 kr per enhet`
    },
  ],
};

// ========================================================================================
// KAPITTEL 4.3: Bidragskalkylen
// ========================================================================================

const CHAPTER_OKONOMISTYRING_4_3: TextbookChapter = {
  id: 'oks-4-3',
  title: 'Bidragskalkylen',
  subject: 'okonomistyring',
  level: 'vg2',
  section: 4,
  estimatedMinutes: 25,
  content: [
    {
      type: 'text',
      id: 'oks-4-3-intro',
      content: `Bidragskalkylen er en forenklet kalkyle som bare tar hensyn til variable kostnader. Den viser hvor mye hvert solgte produkt bidrar til å dekke faste kostnader og gi overskudd. Bidragskalkylen er spesielt nyttig for kortsiktige beslutninger og lønnsomhetsanalyser.`
    },
    {
      type: 'text',
      id: 'oks-4-3-dekningsbidrag',
      content: `**Dekningsbidrag (DB)** er differansen mellom salgsinntekt og variable kostnader:

$$\\text{Dekningsbidrag} = \\text{Salgsinntekt} - \\text{Variable kostnader}$$

Dekningsbidraget viser hvor mye hver solgte enhet bidrar til å dekke de faste kostnadene. Når alle faste kostnader er dekket, blir resten av dekningsbidraget til overskudd (resultat).

**Dekningsbidrag per enhet:**
$$\\text{DB per enhet} = \\text{Salgspris} - \\text{VK per enhet}$$`
    },
    {
      type: 'example',
      id: 'oks-4-3-eks-db',
      content: `**Eksempel: Dekningsbidrag per enhet**

En bedrift selger et produkt for 450 kr. Variable kostnader per enhet er 280 kr.

Dekningsbidrag per enhet:
$$\\text{DB} = 450 - 280 = 170 \\text{ kr}$$

Dette betyr at hver solgte enhet bidrar med 170 kr til å dekke faste kostnader og gi overskudd.

Hvis bedriften selger 1000 enheter, blir totalt dekningsbidrag:
$$1000 \\times 170 = 170\\,000 \\text{ kr}$$`
    },
    {
      type: 'text',
      id: 'oks-4-3-resultat',
      content: `**Resultat** beregnes ved å trekke faste kostnader fra totalt dekningsbidrag:

$$\\text{Resultat} = \\text{Totalt DB} - \\text{Faste kostnader}$$

Eller mer detaljert:
$$\\text{Resultat} = \\text{Salgsinntekt} - \\text{Variable kostnader} - \\text{Faste kostnader}$$

Hvis resultatet er positivt, har bedriften overskudd. Hvis det er negativt, har bedriften underskudd.`
    },
    {
      type: 'example',
      id: 'oks-4-3-eks-resultat',
      content: `**Eksempel: Resultatberegning**

En bedrift har:
- Salgspris: 450 kr per enhet
- Variable kostnader: 280 kr per enhet
- Faste kostnader: 120 000 kr per måned
- Solgt antall: 1000 enheter

**Beregning:**

Salgsinntekt:
$$1000 \\times 450 = 450\\,000 \\text{ kr}$$

Variable kostnader:
$$1000 \\times 280 = 280\\,000 \\text{ kr}$$

Dekningsbidrag:
$$450\\,000 - 280\\,000 = 170\\,000 \\text{ kr}$$

Resultat:
$$170\\,000 - 120\\,000 = 50\\,000 \\text{ kr overskudd}$$`
    },
    {
      type: 'text',
      id: 'oks-4-3-dekningsgrad',
      content: `**Dekningsgrad** viser hvor stor andel av salgsinntekten som er dekningsbidrag:

$$\\text{Dekningsgrad} = \\frac{\\text{Dekningsbidrag}}{\\text{Salgsinntekt}} \\times 100\\%$$

Dekningsgraden kan beregnes både per enhet og totalt. En høy dekningsgrad betyr at en stor del av salgsinntekten er tilgjengelig for å dekke faste kostnader og gi overskudd.`
    },
    {
      type: 'example',
      id: 'oks-4-3-eks-dekningsgrad',
      content: `**Eksempel: Dekningsgrad**

Fra forrige eksempel:
- Salgspris: 450 kr
- Variable kostnader: 280 kr
- Dekningsbidrag: 170 kr

**Dekningsgrad per enhet:**
$$\\frac{170}{450} \\times 100\\% = 37.8\\%$$

Dette betyr at 37.8% av salgsprisen er dekningsbidrag.

**Dekningsgrad totalt** (1000 enheter):
$$\\frac{170\\,000}{450\\,000} \\times 100\\% = 37.8\\%$$

Dekningsgraden er den samme per enhet og totalt når alle enheter har samme pris og variable kostnader.`
    },
    {
      type: 'text',
      id: 'oks-4-3-bidragskalkyle',
      content: `**Oppsett av bidragskalkyle**

En bidragskalkyle presenteres ofte slik:

| Post | Beløp |
|------|-------|
| Salgsinntekt | xxx kr |
| - Variable kostnader | xxx kr |
| **= Dekningsbidrag** | **xxx kr** |
| - Faste kostnader | xxx kr |
| **= Resultat** | **xxx kr** |

Dette oppsettet viser tydelig hvordan man kommer fra salgsinntekt til resultat.`
    },
    {
      type: 'example',
      id: 'oks-4-3-eks-fullstendig',
      content: `**Eksempel: Fullstendig bidragskalkyle**

En restaurant har følgende tall for en måned:
- Antall gjester: 1200
- Gjennomsnittspris per gjest: 385 kr
- Variable kostnader per gjest: 165 kr
- Faste kostnader: 185 000 kr

**Bidragskalkyle:**

| Post | Beløp |
|------|-------|
| Salgsinntekt | 1200 × 385 = 462 000 kr |
| - Variable kostnader | 1200 × 165 = 198 000 kr |
| **= Dekningsbidrag** | **264 000 kr** |
| - Faste kostnader | 185 000 kr |
| **= Resultat** | **79 000 kr** |

**Dekningsbidrag per gjest:**
$$385 - 165 = 220 \\text{ kr}$$

**Dekningsgrad:**
$$\\frac{264\\,000}{462\\,000} \\times 100\\% = 57.1\\%$$`
    },
    {
      type: 'text',
      id: 'oks-4-3-anvendelse',
      content: `**Anvendelse av bidragskalkylen**

Bidragskalkylen brukes til:

1. **Kortsiktige prisbeslutninger**: Så lenge prisen er høyere enn variable kostnader, gir salget et positivt bidrag.

2. **Produktmiks**: Sammenligne lønnsomheten til ulike produkter ved å se på dekningsbidrag per enhet.

3. **Spesialordrer**: Vurdere om man skal akseptere en ordre til lavere pris enn normalt.

4. **Nedleggelse**: Vurdere om man skal legge ned en produktlinje eller avdeling.

5. **Kapasitetsutnyttelse**: Beregne hvor mye man må selge for å gå i null (nullpunktanalyse).

**Viktig:** Bidragskalkylen egner seg best for kortsiktige beslutninger. På lang sikt må alle kostnader dekkes, ikke bare de variable.`
    },
    {
      type: 'example',
      id: 'oks-4-3-eks-spesialordre',
      content: `**Eksempel: Spesialordre**

En bedrift har ledig kapasitet og får en forespørsel om å produsere 500 enheter til 320 kr per enhet. Normal salgspris er 450 kr, og variable kostnader er 280 kr per enhet.

**Analyse:**

Dekningsbidrag ved normalordre:
$$450 - 280 = 170 \\text{ kr per enhet}$$

Dekningsbidrag ved spesialordre:
$$320 - 280 = 40 \\text{ kr per enhet}$$

Totalt dekningsbidrag fra spesialordre:
$$500 \\times 40 = 20\\,000 \\text{ kr}$$

**Konklusjon:** Selv om prisen (320 kr) er lavere enn normalpris (450 kr), gir ordren et positivt dekningsbidrag på 40 kr per enhet. Siden bedriften har ledig kapasitet og ikke får ekstra faste kostnader, bør ordren aksepteres. Den gir 20 000 kr ekstra til dekning av faste kostnader og overskudd.`
    },
  ],
  exercises: [
    {
      type: 'multiple-choice',
      id: 'oks-4-3-mc-1',
      question: 'Hva er dekningsbidrag?',
      options: [
        'Salgsinntekt minus totale kostnader',
        'Salgsinntekt minus variable kostnader',
        'Salgsinntekt minus faste kostnader',
        'Variable kostnader minus faste kostnader'
      ],
      correctAnswer: 1,
      explanation: 'Dekningsbidrag er salgsinntekt minus variable kostnader. Det viser hvor mye som er tilgjengelig for å dekke faste kostnader og gi overskudd.'
    },
    {
      type: 'classic',
      id: 'oks-4-3-kl-1',
      question: 'Et produkt selges for 580 kr. Variable kostnader er 340 kr per enhet. Regn ut dekningsbidrag per enhet og dekningsgrad.',
      solution: `**Gitt:**
- Salgspris: 580 kr
- VK per enhet: 340 kr

**Dekningsbidrag per enhet:**
$$\\text{DB} = 580 - 340 = 240 \\text{ kr}$$

**Dekningsgrad:**
$$\\frac{240}{580} \\times 100\\% = 41.4\\%$$

**Svar:**
- Dekningsbidrag: 240 kr per enhet
- Dekningsgrad: 41.4%`
    },
    {
      type: 'classic',
      id: 'oks-4-3-kl-2',
      question: 'En bedrift selger 2500 enheter til 395 kr per enhet. Variable kostnader er 245 kr per enhet, og faste kostnader er 280 000 kr. Regn ut totalt dekningsbidrag og resultat.',
      solution: `**Gitt:**
- Antall: 2500 enheter
- Salgspris: 395 kr
- VK per enhet: 245 kr
- FK: 280 000 kr

**Løsning:**

Dekningsbidrag per enhet:
$$395 - 245 = 150 \\text{ kr}$$

Totalt dekningsbidrag:
$$2500 \\times 150 = 375\\,000 \\text{ kr}$$

Resultat:
$$375\\,000 - 280\\,000 = 95\\,000 \\text{ kr overskudd}$$

**Svar:**
- Totalt dekningsbidrag: 375 000 kr
- Resultat: 95 000 kr overskudd`
    },
    {
      type: 'classic',
      id: 'oks-4-3-kl-3',
      question: 'Lag en fullstendig bidragskalkyle med følgende data: Solgt antall 1800 enheter, salgspris 520 kr, variable kostnader 315 kr per enhet, faste kostnader 285 000 kr. Beregn også dekningsgrad.',
      solution: `**Gitt:**
- Antall: 1800 enheter
- Salgspris: 520 kr
- VK per enhet: 315 kr
- FK: 285 000 kr

**Bidragskalkyle:**

| Post | Beløp |
|------|-------|
| Salgsinntekt | 1800 × 520 = 936 000 kr |
| - Variable kostnader | 1800 × 315 = 567 000 kr |
| **= Dekningsbidrag** | **369 000 kr** |
| - Faste kostnader | 285 000 kr |
| **= Resultat** | **84 000 kr** |

**Dekningsgrad:**
$$\\frac{369\\,000}{936\\,000} \\times 100\\% = 39.4\\%$$

**Svar:** Se bidragskalkyle over. Resultat er 84 000 kr overskudd, dekningsgrad er 39.4%.`
    },
    {
      type: 'classic',
      id: 'oks-4-3-kl-4',
      question: 'En bedrift har ledig kapasitet og får en spesialordre på 800 enheter til 380 kr per enhet. Normal salgspris er 550 kr, og variable kostnader er 330 kr per enhet. Bedriften får ingen ekstra faste kostnader av ordren. Bør bedriften akseptere ordren? Begrunn svaret med beregninger.',
      solution: `**Gitt:**
- Spesialordre: 800 enheter à 380 kr
- Normal salgspris: 550 kr
- VK per enhet: 330 kr
- Ingen ekstra faste kostnader

**Analyse:**

Dekningsbidrag ved normalordre:
$$550 - 330 = 220 \\text{ kr per enhet}$$

Dekningsbidrag ved spesialordre:
$$380 - 330 = 50 \\text{ kr per enhet}$$

Totalt dekningsbidrag fra spesialordre:
$$800 \\times 50 = 40\\,000 \\text{ kr}$$

**Konklusjon:**
Bedriften **bør akseptere ordren**. Selv om prisen (380 kr) er lavere enn normalpris (550 kr), gir ordren et positivt dekningsbidrag på 50 kr per enhet. Siden bedriften har ledig kapasitet og ikke får ekstra faste kostnader, vil ordren bidra med 40 000 kr ekstra til dekning av faste kostnader og overskudd.

Viktig forutsetning: Ordren må ikke påvirke salget til normalpris negativt.

**Svar:** Ja, bedriften bør akseptere ordren. Se beregninger og begrunnelse over.`
    },
    // --- Samleoppgaver ---
    {
      type: 'classic',
      id: 'oks-4-3-kl-5',
      question: 'En restaurant har følgende tall for oktober: 2800 gjester, gjennomsnittspris 425 kr per gjest, variable kostnader 185 kr per gjest (mat og drikke), faste kostnader 510 000 kr (lønn, husleie, avskrivninger). a) Lag en fullstendig bidragskalkyle. b) Regn ut dekningsbidrag per gjest. c) Regn ut dekningsgrad. d) Hvor mange gjester må restauranten ha for å gå i null? (Nullpunkt = DB totalt = FK)',
      solution: `**a) Bidragskalkyle:**

| Post | Beløp |
|------|-------|
| Salgsinntekt | 2800 × 425 = 1 190 000 kr |
| - Variable kostnader | 2800 × 185 = 518 000 kr |
| **= Dekningsbidrag** | **672 000 kr** |
| - Faste kostnader | 510 000 kr |
| **= Resultat** | **162 000 kr** |

**b) Dekningsbidrag per gjest:**
$$425 - 185 = 240 \\text{ kr}$$

**c) Dekningsgrad:**
$$\\frac{672\\,000}{1\\,190\\,000} \\times 100\\% = 56.5\\%$$

**d) Nullpunkt (antall gjester):**

Ved nullpunkt er totalt DB = FK:
$$\\text{Antall gjester} \\times \\text{DB per gjest} = \\text{FK}$$
$$\\text{Antall gjester} = \\frac{510\\,000}{240} = 2125 \\text{ gjester}$$

**Svar:**
a) Se bidragskalkyle over
b) 240 kr per gjest
c) 56.5%
d) 2125 gjester`
    },
    {
      type: 'classic',
      id: 'oks-4-3-kl-6',
      question: 'En bedrift produserer to produkter. Produkt X: salgspris 680 kr, VK 420 kr. Produkt Y: salgspris 950 kr, VK 640 kr. Bedriften har begrenset kapasitet og kan bare produsere 1000 enheter totalt. a) Regn ut DB per enhet for begge produkter. b) Regn ut dekningsgrad for begge produkter. c) Hvilket produkt bør prioriteres hvis målet er å maksimere totalt dekningsbidrag? d) Hvis bedriften produserer 600 enheter av det mest lønnsomme produktet og 400 av det andre, hva blir totalt dekningsbidrag?',
      solution: `**a) DB per enhet:**

Produkt X:
$$\\text{DB}_X = 680 - 420 = 260 \\text{ kr}$$

Produkt Y:
$$\\text{DB}_Y = 950 - 640 = 310 \\text{ kr}$$

**b) Dekningsgrad:**

Produkt X:
$$\\frac{260}{680} \\times 100\\% = 38.2\\%$$

Produkt Y:
$$\\frac{310}{950} \\times 100\\% = 32.6\\%$$

**c) Prioritering:**
**Produkt Y bør prioriteres** fordi det har høyest dekningsbidrag per enhet (310 kr mot 260 kr). Selv om produkt X har høyere dekningsgrad, er det absolutte dekningsbidraget per enhet som er avgjørende når kapasiteten er begrenset og målt i antall enheter.

**d) Totalt DB ved miks (600Y + 400X):**
$$\\text{DB totalt} = (600 \\times 310) + (400 \\times 260)$$
$$= 186\\,000 + 104\\,000 = 290\\,000 \\text{ kr}$$

**Svar:**
a) Produkt X: 260 kr, Produkt Y: 310 kr
b) Produkt X: 38.2%, Produkt Y: 32.6%
c) Produkt Y (høyest DB per enhet)
d) 290 000 kr`
    },
  ],
};

// ========================================================================================
// KAPITTEL 4.4: Prissetting i handelsbedrifter
// ========================================================================================

const CHAPTER_OKONOMISTYRING_4_4: TextbookChapter = {
  id: 'oks-4-4',
  title: 'Prissetting i handelsbedrifter',
  subject: 'okonomistyring',
  level: 'vg2',
  section: 4,
  estimatedMinutes: 20,
  content: [
    {
      type: 'text',
      id: 'oks-4-4-intro',
      content: `Handelsbedrifter kjøper varer fra leverandører og selger dem videre til kunder. For å kunne drive lønnsomt må handelsbedriften sette en salgspris som dekker innkjøpsprisen, alle kostnader og gir overskudd. I dette kapittelet ser vi på hvordan priser beregnes i handelsbedrifter.`
    },
    {
      type: 'text',
      id: 'oks-4-4-avanse',
      content: `**Avanse** er forskjellen mellom salgspris og innkjøpspris:

$$\\text{Avanse} = \\text{Salgspris} - \\text{Innkjøpspris}$$

Avansen skal dekke alle kostnader butikken har (husleie, lønn, strøm, etc.) og gi overskudd. Avansen kalles også bruttofortjeneste eller påslag.

**Viktig:** Innkjøpsprisen er det butikken faktisk betaler leverandøren, inkludert eventuelle fraktkostnader.`
    },
    {
      type: 'example',
      id: 'oks-4-4-eks-avanse',
      content: `**Eksempel: Avanse**

En klesbutikk kjøper en genser for 280 kr og selger den for 699 kr.

Avanse:
$$\\text{Avanse} = 699 - 280 = 419 \\text{ kr}$$

Denne avansen på 419 kr skal dekke butikkens kostnader og gi overskudd.`
    },
    {
      type: 'text',
      id: 'oks-4-4-paslag',
      content: `**Påslagsprosent** viser hvor mange prosent man legger på innkjøpsprisen for å få salgsprisen (ekskl. mva):

$$\\text{Påslagsprosent} = \\frac{\\text{Avanse}}{\\text{Innkjøpspris}} \\times 100\\%$$

Påslagsprosenten varierer mellom bransjer. Dagligvarer har ofte lavere påslagsprosent (20-40%) enn klesbutikker eller møbelforretninger (50-150%).

**Beregning av salgspris:**
$$\\text{Salgspris ekskl. mva} = \\text{Innkjøpspris} \\times (1 + \\frac{\\text{Påslagsprosent}}{100})$$`
    },
    {
      type: 'example',
      id: 'oks-4-4-eks-paslag',
      content: `**Eksempel: Påslagsprosent**

Fra forrige eksempel:
- Innkjøpspris: 280 kr
- Avanse: 419 kr

Påslagsprosent:
$$\\frac{419}{280} \\times 100\\% = 149.6\\%$$

Dette betyr at butikken legger på nesten 150% av innkjøpsprisen.

**Alternativ beregning:**
Hvis vi vet at påslagsprosenten er 150%, kan vi regne ut salgsprisen:
$$\\text{Salgspris} = 280 \\times (1 + \\frac{150}{100}) = 280 \\times 2.50 = 700 \\text{ kr}$$`
    },
    {
      type: 'text',
      id: 'oks-4-4-mva',
      content: `**Merverdiavgift (mva)** er en avgift som legges på de fleste varer og tjenester i Norge. Den vanligste mva-satsen er 25%.

Når kunder handler i butikken, betaler de salgsprisen **inkludert mva**. Butikken må betale denne mva-en videre til staten.

**Beregning av mva:**
$$\\text{Mva-beløp} = \\text{Salgspris ekskl. mva} \\times \\frac{25}{100}$$

**Salgspris inkludert mva:**
$$\\text{Salgspris inkl. mva} = \\text{Salgspris ekskl. mva} \\times 1.25$$

**Beregning fra pris inkl. mva til ekskl. mva:**
$$\\text{Salgspris ekskl. mva} = \\frac{\\text{Salgspris inkl. mva}}{1.25}$$`
    },
    {
      type: 'example',
      id: 'oks-4-4-eks-mva',
      content: `**Eksempel: Merverdiavgift**

En butikk har en salgspris på 800 kr ekskl. mva.

Mva-beløp:
$$800 \\times 0.25 = 200 \\text{ kr}$$

Salgspris inkl. mva:
$$800 + 200 = 1000 \\text{ kr}$$

Eller direkte:
$$800 \\times 1.25 = 1000 \\text{ kr}$$

**Motsatt vei:**
Hvis prislappen viser 1000 kr (inkl. mva), hva er prisen ekskl. mva?
$$\\frac{1000}{1.25} = 800 \\text{ kr ekskl. mva}$$

Mva-beløpet er:
$$1000 - 800 = 200 \\text{ kr}$$`
    },
    {
      type: 'text',
      id: 'oks-4-4-fullstendig',
      content: `**Fullstendig priskalkyle**

En fullstendig priskalkyle i en handelsbedrift går fra innkjøpspris til salgspris inkl. mva:

1. **Innkjøpspris** (det butikken betaler leverandøren)
2. + **Avanse** (påslag)
3. = **Salgspris ekskl. mva**
4. + **Mva** (25%)
5. = **Salgspris inkl. mva** (det kunden betaler)`
    },
    {
      type: 'example',
      id: 'oks-4-4-eks-fullstendig',
      content: `**Eksempel: Fullstendig priskalkyle**

En elektronikkbutikk kjøper en hodetelefon for 640 kr. De bruker en påslagsprosent på 75%.

**Kalkyle:**

Innkjøpspris: 640 kr

Avanse:
$$640 \\times \\frac{75}{100} = 480 \\text{ kr}$$

Salgspris ekskl. mva:
$$640 + 480 = 1120 \\text{ kr}$$

Mva (25%):
$$1120 \\times 0.25 = 280 \\text{ kr}$$

Salgspris inkl. mva:
$$1120 + 280 = 1400 \\text{ kr}$$

**Eller direkte:**
$$\\text{Salgspris ekskl. mva} = 640 \\times 1.75 = 1120 \\text{ kr}$$
$$\\text{Salgspris inkl. mva} = 1120 \\times 1.25 = 1400 \\text{ kr}$$`
    },
    {
      type: 'example',
      id: 'oks-4-4-eks-baklengs',
      content: `**Eksempel: Baklengs beregning**

En kunde betaler 1875 kr for en vare (inkl. mva). Butikken bruker 60% påslag. Hva var innkjøpsprisen?

**Løsning:**

Først finner vi salgspris ekskl. mva:
$$\\frac{1875}{1.25} = 1500 \\text{ kr ekskl. mva}$$

Salgspris ekskl. mva er innkjøpspris + 60% påslag:
$$\\text{Salgspris} = \\text{Innkjøpspris} \\times 1.60$$
$$1500 = \\text{Innkjøpspris} \\times 1.60$$
$$\\text{Innkjøpspris} = \\frac{1500}{1.60} = 937.50 \\text{ kr}$$

**Kontroll:**
Innkjøpspris: 937.50 kr
Påslag (60%): $937.50 \\times 0.60 = 562.50$ kr
Salgspris ekskl. mva: $937.50 + 562.50 = 1500$ kr
Salgspris inkl. mva: $1500 \\times 1.25 = 1875$ kr ✓`
    },
    {
      type: 'text',
      id: 'oks-4-4-avanseprosent',
      content: `**Avanseprosent vs. påslagsprosent**

Det er viktig å skille mellom avanseprosent og påslagsprosent:

**Påslagsprosent** beregnes i forhold til innkjøpspris:
$$\\text{Påslagsprosent} = \\frac{\\text{Avanse}}{\\text{Innkjøpspris}} \\times 100\\%$$

**Avanseprosent** beregnes i forhold til salgspris:
$$\\text{Avanseprosent} = \\frac{\\text{Avanse}}{\\text{Salgspris}} \\times 100\\%$$

Avanseprosenten vil alltid være lavere enn påslagsprosenten (fordi salgsprisen er høyere enn innkjøpsprisen).`
    },
    {
      type: 'example',
      id: 'oks-4-4-eks-sammenligning',
      content: `**Eksempel: Påslagsprosent vs. avanseprosent**

En vare har:
- Innkjøpspris: 400 kr
- Salgspris ekskl. mva: 700 kr
- Avanse: 300 kr

**Påslagsprosent:**
$$\\frac{300}{400} \\times 100\\% = 75\\%$$

**Avanseprosent:**
$$\\frac{300}{700} \\times 100\\% = 42.9\\%$$

Selv om avansen er den samme (300 kr), gir dette 75% påslag men bare 42.9% avanse.`
    },
  ],
  exercises: [
    {
      type: 'multiple-choice',
      id: 'oks-4-4-mc-1',
      question: 'Hva er avanse?',
      options: [
        'Innkjøpsprisen uten mva',
        'Forskjellen mellom salgspris og innkjøpspris',
        'Mva-beløpet',
        'Påslagsprosenten'
      ],
      correctAnswer: 1,
      explanation: 'Avanse er forskjellen mellom salgspris og innkjøpspris. Den skal dekke butikkens kostnader og gi overskudd.'
    },
    {
      type: 'classic',
      id: 'oks-4-4-kl-1',
      question: 'En butikk kjøper en vare for 320 kr og selger den for 800 kr ekskl. mva. Regn ut avansen og påslagsprosenten.',
      solution: `**Gitt:**
- Innkjøpspris: 320 kr
- Salgspris ekskl. mva: 800 kr

**Avanse:**
$$\\text{Avanse} = 800 - 320 = 480 \\text{ kr}$$

**Påslagsprosent:**
$$\\frac{480}{320} \\times 100\\% = 150\\%$$

**Svar:**
- Avanse: 480 kr
- Påslagsprosent: 150%`
    },
    {
      type: 'classic',
      id: 'oks-4-4-kl-2',
      question: 'En vare koster 960 kr ekskl. mva. Regn ut mva-beløpet og prisen inkludert mva.',
      solution: `**Gitt:**
- Salgspris ekskl. mva: 960 kr
- Mva-sats: 25%

**Mva-beløp:**
$$960 \\times 0.25 = 240 \\text{ kr}$$

**Salgspris inkl. mva:**
$$960 + 240 = 1200 \\text{ kr}$$

**Eller direkte:**
$$960 \\times 1.25 = 1200 \\text{ kr}$$

**Svar:**
- Mva-beløp: 240 kr
- Salgspris inkl. mva: 1200 kr`
    },
    {
      type: 'classic',
      id: 'oks-4-4-kl-3',
      question: 'En butikk kjøper en vare for 560 kr. De bruker 80% påslag. Regn ut salgsprisen ekskl. mva og salgsprisen inkl. mva.',
      solution: `**Gitt:**
- Innkjøpspris: 560 kr
- Påslagsprosent: 80%

**Salgspris ekskl. mva:**
$$560 \\times (1 + \\frac{80}{100}) = 560 \\times 1.80 = 1008 \\text{ kr}$$

**Alternativt:**
Avanse: $560 \\times 0.80 = 448$ kr
Salgspris: $560 + 448 = 1008$ kr

**Salgspris inkl. mva:**
$$1008 \\times 1.25 = 1260 \\text{ kr}$$

**Svar:**
- Salgspris ekskl. mva: 1008 kr
- Salgspris inkl. mva: 1260 kr`
    },
    {
      type: 'classic',
      id: 'oks-4-4-kl-4',
      question: 'En kunde betaler 2500 kr for en vare (inkl. mva). a) Hva er prisen ekskl. mva? b) Hva er mva-beløpet?',
      solution: `**Gitt:**
- Salgspris inkl. mva: 2500 kr

**a) Pris ekskl. mva:**
$$\\frac{2500}{1.25} = 2000 \\text{ kr}$$

**b) Mva-beløp:**
$$2500 - 2000 = 500 \\text{ kr}$$

**Alternativt:**
$$2000 \\times 0.25 = 500 \\text{ kr}$$

**Svar:**
a) 2000 kr ekskl. mva
b) 500 kr i mva`
    },
    // --- Samleoppgaver ---
    {
      type: 'classic',
      id: 'oks-4-4-kl-5',
      question: 'En bokhandel kjøper en bok for 180 kr. De bruker 65% påslag. a) Regn ut avansen. b) Regn ut salgspris ekskl. mva. c) Regn ut salgspris inkl. mva. d) Regn ut avanseprosenten (i forhold til salgspris).',
      solution: `**Gitt:**
- Innkjøpspris: 180 kr
- Påslagsprosent: 65%

**a) Avanse:**
$$180 \\times \\frac{65}{100} = 117 \\text{ kr}$$

**b) Salgspris ekskl. mva:**
$$180 + 117 = 297 \\text{ kr}$$

Eller direkte: $180 \\times 1.65 = 297$ kr

**c) Salgspris inkl. mva:**
$$297 \\times 1.25 = 371.25 \\text{ kr}$$

**d) Avanseprosent:**
$$\\frac{117}{297} \\times 100\\% = 39.4\\%$$

**Svar:**
a) Avanse: 117 kr
b) Salgspris ekskl. mva: 297 kr
c) Salgspris inkl. mva: 371.25 kr
d) Avanseprosent: 39.4%`
    },
    {
      type: 'classic',
      id: 'oks-4-4-kl-6',
      question: 'En kunde betaler 3125 kr for et møbel (inkl. mva). Butikken bruker 125% påslag. a) Regn ut salgspris ekskl. mva. b) Regn ut innkjøpsprisen. c) Regn ut avansen. d) Kontroller svaret ved å regne frem til 3125 kr fra innkjøpsprisen.',
      solution: `**Gitt:**
- Salgspris inkl. mva: 3125 kr
- Påslagsprosent: 125%

**a) Salgspris ekskl. mva:**
$$\\frac{3125}{1.25} = 2500 \\text{ kr}$$

**b) Innkjøpspris:**
Salgspris ekskl. mva = Innkjøpspris × 2.25 (100% + 125%)
$$2500 = \\text{Innkjøpspris} \\times 2.25$$
$$\\text{Innkjøpspris} = \\frac{2500}{2.25} = 1111.11 \\text{ kr}$$

**c) Avanse:**
$$2500 - 1111.11 = 1388.89 \\text{ kr}$$

Eller: $1111.11 \\times 1.25 = 1388.89$ kr

**d) Kontroll:**
Innkjøpspris: 1111.11 kr
Påslag (125%): $1111.11 \\times 1.25 = 1388.89$ kr
Salgspris ekskl. mva: $1111.11 + 1388.89 = 2500$ kr
Salgspris inkl. mva: $2500 \\times 1.25 = 3125$ kr ✓

**Svar:**
a) 2500 kr
b) 1111.11 kr
c) 1388.89 kr
d) Se kontroll over`
    },
  ],
};

// ========================================================================================
// KAPITTEL 4.5: Nullpunktanalyse
// ========================================================================================

const CHAPTER_OKONOMISTYRING_4_5: TextbookChapter = {
  id: 'oks-4-5',
  title: 'Nullpunktanalyse',
  subject: 'okonomistyring',
  level: 'vg2',
  section: 4,
  estimatedMinutes: 25,
  content: [
    {
      type: 'text',
      id: 'oks-4-5-intro',
      content: `Nullpunktanalyse brukes for å finne ut hvor mye en bedrift må selge for å gå i null, det vil si for å dekke alle kostnader uten å få overskudd eller underskudd. Dette er viktig informasjon for planlegging og lønnsomhetsvurderinger.`
    },
    {
      type: 'text',
      id: 'oks-4-5-nullpunkt',
      content: `**Nullpunkt** er det punktet der bedriften verken har overskudd eller underskudd:

$$\\text{Ved nullpunkt: Totalt dekningsbidrag} = \\text{Faste kostnader}$$

Eller:
$$\\text{Salgsinntekt} = \\text{Variable kostnader} + \\text{Faste kostnader}$$

Ved nullpunkt er resultatet = 0 kr.`
    },
    {
      type: 'text',
      id: 'oks-4-5-nullpunkt-antall',
      content: `**Nullpunkt i antall enheter**

For å finne hvor mange enheter bedriften må selge for å gå i null, bruker vi:

$$\\text{Nullpunkt (enheter)} = \\frac{\\text{Faste kostnader}}{\\text{Dekningsbidrag per enhet}}$$

Dette gir antall enheter som må selges for at totalt dekningsbidrag skal være lik faste kostnader.`
    },
    {
      type: 'example',
      id: 'oks-4-5-eks-antall',
      content: `**Eksempel: Nullpunkt i antall enheter**

En bedrift har:
- Faste kostnader: 240 000 kr per måned
- Salgspris per enhet: 450 kr
- Variable kostnader per enhet: 270 kr

Dekningsbidrag per enhet:
$$450 - 270 = 180 \\text{ kr}$$

Nullpunkt:
$$\\frac{240\\,000}{180} = 1333.33 \\approx 1334 \\text{ enheter}$$

Bedriften må selge minst 1334 enheter for å gå i null.

**Kontroll:**
Salgsinntekt: $1334 \\times 450 = 600\\,300$ kr
Variable kostnader: $1334 \\times 270 = 360\\,180$ kr
Dekningsbidrag: $600\\,300 - 360\\,180 = 240\\,120$ kr
Resultat: $240\\,120 - 240\\,000 = 120$ kr ≈ 0 kr`
    },
    {
      type: 'text',
      id: 'oks-4-5-nullpunkt-omsetning',
      content: `**Nullpunkt i omsetning (kroner)**

For å finne omsetningen (salgsinntekten) ved nullpunkt, bruker vi:

$$\\text{Nullpunktomsetning} = \\frac{\\text{Faste kostnader}}{\\text{Dekningsgrad}}$$

Eller:
$$\\text{Nullpunktomsetning} = \\text{Nullpunkt (enheter)} \\times \\text{Salgspris}$$

Dekningsgrad:
$$\\text{Dekningsgrad} = \\frac{\\text{DB per enhet}}{\\text{Salgspris}}$$`
    },
    {
      type: 'example',
      id: 'oks-4-5-eks-omsetning',
      content: `**Eksempel: Nullpunktomsetning**

Fra forrige eksempel:
- Faste kostnader: 240 000 kr
- DB per enhet: 180 kr
- Salgspris: 450 kr
- Nullpunkt: 1334 enheter

**Metode 1: Via dekningsgrad**
Dekningsgrad:
$$\\frac{180}{450} = 0.40 = 40\\%$$

Nullpunktomsetning:
$$\\frac{240\\,000}{0.40} = 600\\,000 \\text{ kr}$$

**Metode 2: Via antall enheter**
$$1334 \\times 450 = 600\\,300 \\text{ kr}$$

(Små forskjeller skyldes avrunding)

Bedriften må ha en omsetning på ca. 600 000 kr for å gå i null.`
    },
    {
      type: 'text',
      id: 'oks-4-5-sikkerhetsmargin',
      content: `**Sikkerhetsmargin** viser hvor mye omsetningen kan synke før bedriften går i underskudd:

$$\\text{Sikkerhetsmargin (kr)} = \\text{Faktisk omsetning} - \\text{Nullpunktomsetning}$$

$$\\text{Sikkerhetsmargin (\\%)} = \\frac{\\text{Faktisk omsetning} - \\text{Nullpunktomsetning}}{\\text{Faktisk omsetning}} \\times 100\\%$$

En høy sikkerhetsmargin betyr at bedriften har god "buffer" før den går i underskudd.`
    },
    {
      type: 'example',
      id: 'oks-4-5-eks-sikkerhetsmargin',
      content: `**Eksempel: Sikkerhetsmargin**

Fra forrige eksempel har bedriften:
- Nullpunktomsetning: 600 000 kr
- Faktisk omsetning: 900 000 kr (2000 enheter × 450 kr)

**Sikkerhetsmargin i kroner:**
$$900\\,000 - 600\\,000 = 300\\,000 \\text{ kr}$$

**Sikkerhetsmargin i prosent:**
$$\\frac{300\\,000}{900\\,000} \\times 100\\% = 33.3\\%$$

Dette betyr at omsetningen kan synke med 33.3% (eller 300 000 kr) før bedriften går i null.

**Faktisk resultat:**
Salgsinntekt: 900 000 kr
Variable kostnader: $2000 \\times 270 = 540\\,000$ kr
Dekningsbidrag: $900\\,000 - 540\\,000 = 360\\,000$ kr
Resultat: $360\\,000 - 240\\,000 = 120\\,000$ kr overskudd`
    },
    {
      type: 'text',
      id: 'oks-4-5-onsket-resultat',
      content: `**Ønsket resultat**

Hvis bedriften har et mål om et bestemt overskudd, kan vi beregne nødvendig salg:

$$\\text{Nødvendig salg (enheter)} = \\frac{\\text{Faste kostnader} + \\text{Ønsket resultat}}{\\text{DB per enhet}}$$

$$\\text{Nødvendig omsetning} = \\frac{\\text{Faste kostnader} + \\text{Ønsket resultat}}{\\text{Dekningsgrad}}$$`
    },
    {
      type: 'example',
      id: 'oks-4-5-eks-onsket',
      content: `**Eksempel: Ønsket resultat**

Bedriften fra tidligere eksempler ønsker et overskudd på 180 000 kr per måned.
- Faste kostnader: 240 000 kr
- DB per enhet: 180 kr
- Salgspris: 450 kr
- Dekningsgrad: 40%

**Nødvendig antall enheter:**
$$\\frac{240\\,000 + 180\\,000}{180} = \\frac{420\\,000}{180} = 2333.33 \\approx 2334 \\text{ enheter}$$

**Nødvendig omsetning:**
$$\\frac{240\\,000 + 180\\,000}{0.40} = \\frac{420\\,000}{0.40} = 1\\,050\\,000 \\text{ kr}$$

Eller: $2334 \\times 450 = 1\\,050\\,300$ kr

**Kontroll:**
Salgsinntekt: 1 050 000 kr
Variable kostnader: $1\\,050\\,000 \\times 0.60 = 630\\,000$ kr
Dekningsbidrag: $1\\,050\\,000 - 630\\,000 = 420\\,000$ kr
Resultat: $420\\,000 - 240\\,000 = 180\\,000$ kr ✓`
    },
    {
      type: 'text',
      id: 'oks-4-5-graf',
      content: `**Grafisk fremstilling**

Nullpunktanalyse kan illustreres grafisk med totalkostnad og totalinntekt:

- **X-aksen**: Antall enheter solgt
- **Y-aksen**: Beløp i kroner
- **Fast kostnadslinje**: Vannrett linje ved FK
- **Totalkostnadslinje**: Starter ved FK, øker med VK per enhet
- **Totalinntektslinje**: Starter i 0, øker med salgspris per enhet
- **Nullpunkt**: Der totalinntekt = totalkostnad (linjene krysser)

Over nullpunktet har bedriften overskudd, under nullpunktet har den underskudd.`
    },
    {
      type: 'example',
      id: 'oks-4-5-eks-endring',
      content: `**Eksempel: Endring i kostnader**

Bedriften fra tidligere eksempler vurderer å flytte til et billigere lokale:
- Nye faste kostnader: 180 000 kr (reduksjon på 60 000 kr)
- DB per enhet: 180 kr (uendret)

Nytt nullpunkt:
$$\\frac{180\\,000}{180} = 1000 \\text{ enheter}$$

Gammelt nullpunkt var 1334 enheter.

**Effekt:**
Ved å redusere faste kostnader med 60 000 kr, synker nullpunktet med 334 enheter. Bedriften kan nå gå i null ved lavere salg, noe som reduserer risikoen.

**Ved faktisk salg på 2000 enheter:**

Gammelt resultat: 120 000 kr (fra tidligere)

Nytt resultat:
$$\\text{DB} - \\text{FK} = (2000 \\times 180) - 180\\,000 = 360\\,000 - 180\\,000 = 180\\,000 \\text{ kr}$$

Resultatet øker med 60 000 kr (samme beløp som reduksjonen i faste kostnader).`
    },
  ],
  exercises: [
    {
      type: 'multiple-choice',
      id: 'oks-4-5-mc-1',
      question: 'Hva er nullpunkt?',
      options: [
        'Punktet der bedriften har maksimalt overskudd',
        'Punktet der bedriften verken har overskudd eller underskudd',
        'Punktet der variable kostnader er lik faste kostnader',
        'Punktet der dekningsbidrag er lik null'
      ],
      correctAnswer: 1,
      explanation: 'Nullpunkt er punktet der bedriften verken har overskudd eller underskudd. Ved nullpunkt er totalt dekningsbidrag lik faste kostnader, og resultatet er 0 kr.'
    },
    {
      type: 'classic',
      id: 'oks-4-5-kl-1',
      question: 'En bedrift har faste kostnader på 160 000 kr per måned. Dekningsbidrag per enhet er 200 kr. Regn ut nullpunkt i antall enheter.',
      solution: `**Gitt:**
- FK = 160 000 kr
- DB per enhet = 200 kr

**Nullpunkt:**
$$\\frac{160\\,000}{200} = 800 \\text{ enheter}$$

**Svar:** Bedriften må selge 800 enheter for å gå i null.`
    },
    {
      type: 'classic',
      id: 'oks-4-5-kl-2',
      question: 'En bedrift har faste kostnader på 300 000 kr, salgspris 550 kr per enhet, og variable kostnader 330 kr per enhet. a) Regn ut dekningsbidrag per enhet. b) Regn ut nullpunkt i antall enheter. c) Regn ut nullpunktomsetning.',
      solution: `**Gitt:**
- FK = 300 000 kr
- Salgspris = 550 kr
- VK per enhet = 330 kr

**a) Dekningsbidrag per enhet:**
$$550 - 330 = 220 \\text{ kr}$$

**b) Nullpunkt i antall enheter:**
$$\\frac{300\\,000}{220} = 1363.64 \\approx 1364 \\text{ enheter}$$

**c) Nullpunktomsetning:**
$$1364 \\times 550 = 750\\,200 \\text{ kr}$$

**Alternativt via dekningsgrad:**
Dekningsgrad: $\\frac{220}{550} = 0.40 = 40\\%$
$$\\frac{300\\,000}{0.40} = 750\\,000 \\text{ kr}$$

**Svar:**
a) 220 kr per enhet
b) 1364 enheter
c) 750 200 kr`
    },
    {
      type: 'classic',
      id: 'oks-4-5-kl-3',
      question: 'En restaurant har faste kostnader på 420 000 kr per måned, gjennomsnittspris per gjest 380 kr, og variable kostnader per gjest 165 kr. I oktober hadde de 2400 gjester. a) Regn ut nullpunkt i antall gjester. b) Regn ut sikkerhetsmargin i antall gjester. c) Regn ut sikkerhetsmargin i prosent.',
      solution: `**Gitt:**
- FK = 420 000 kr
- Salgspris = 380 kr
- VK per gjest = 165 kr
- Faktisk antall gjester = 2400

**a) Nullpunkt:**
DB per gjest: $380 - 165 = 215$ kr
$$\\frac{420\\,000}{215} = 1953.49 \\approx 1954 \\text{ gjester}$$

**b) Sikkerhetsmargin (antall gjester):**
$$2400 - 1954 = 446 \\text{ gjester}$$

**c) Sikkerhetsmargin (prosent):**
$$\\frac{446}{2400} \\times 100\\% = 18.6\\%$$

**Svar:**
a) 1954 gjester
b) 446 gjester
c) 18.6%`
    },
    {
      type: 'classic',
      id: 'oks-4-5-kl-4',
      question: 'En bedrift har faste kostnader på 240 000 kr, salgspris 600 kr, variable kostnader 360 kr, og ønsker et overskudd på 120 000 kr per måned. a) Regn ut DB per enhet. b) Hvor mange enheter må de selge for å nå målet? c) Hva må omsetningen være?',
      solution: `**Gitt:**
- FK = 240 000 kr
- Salgspris = 600 kr
- VK = 360 kr
- Ønsket resultat = 120 000 kr

**a) DB per enhet:**
$$600 - 360 = 240 \\text{ kr}$$

**b) Nødvendig antall enheter:**
$$\\frac{240\\,000 + 120\\,000}{240} = \\frac{360\\,000}{240} = 1500 \\text{ enheter}$$

**c) Nødvendig omsetning:**
$$1500 \\times 600 = 900\\,000 \\text{ kr}$$

**Kontroll:**
Salgsinntekt: 900 000 kr
Variable kostnader: $1500 \\times 360 = 540\\,000$ kr
Dekningsbidrag: $900\\,000 - 540\\,000 = 360\\,000$ kr
Resultat: $360\\,000 - 240\\,000 = 120\\,000$ kr ✓

**Svar:**
a) 240 kr per enhet
b) 1500 enheter
c) 900 000 kr`
    },
    // --- Samleoppgaver ---
    {
      type: 'classic',
      id: 'oks-4-5-kl-5',
      question: 'En bedrift har følgende tall: FK 480 000 kr per år, salgspris 850 kr, VK 510 kr. a) Regn ut nullpunkt i enheter og i omsetning. b) Bedriften solgte 1800 enheter i fjor. Regn ut resultat og sikkerhetsmargin i prosent. c) Bedriften vurderer å redusere faste kostnader til 360 000 kr. Hva blir nytt nullpunkt? d) Hvor mye øker resultatet hvis de selger 1800 enheter med de nye faste kostnadene?',
      solution: `**Gitt:**
- FK = 480 000 kr
- Salgspris = 850 kr
- VK = 510 kr

**a) Nullpunkt:**
DB per enhet: $850 - 510 = 340$ kr

Nullpunkt (enheter):
$$\\frac{480\\,000}{340} = 1411.76 \\approx 1412 \\text{ enheter}$$

Nullpunktomsetning:
$$1412 \\times 850 = 1\\,200\\,200 \\text{ kr}$$

**b) Resultat ved 1800 enheter:**
Salgsinntekt: $1800 \\times 850 = 1\\,530\\,000$ kr
Variable kostnader: $1800 \\times 510 = 918\\,000$ kr
Dekningsbidrag: $1\\,530\\,000 - 918\\,000 = 612\\,000$ kr
Resultat: $612\\,000 - 480\\,000 = 132\\,000$ kr

Sikkerhetsmargin:
$$\\frac{1\\,530\\,000 - 1\\,200\\,200}{1\\,530\\,000} \\times 100\\% = 21.6\\%$$

**c) Nytt nullpunkt (FK = 360 000 kr):**
$$\\frac{360\\,000}{340} = 1058.82 \\approx 1059 \\text{ enheter}$$

**d) Nytt resultat ved 1800 enheter:**
Dekningsbidrag: 612 000 kr (uendret)
Nytt resultat: $612\\,000 - 360\\,000 = 252\\,000$ kr

Økning: $252\\,000 - 132\\,000 = 120\\,000$ kr

(Resultatet øker med samme beløp som reduksjonen i FK)

**Svar:**
a) 1412 enheter, 1 200 200 kr
b) Resultat: 132 000 kr, sikkerhetsmargin: 21.6%
c) 1059 enheter
d) 120 000 kr økning`
    },
    {
      type: 'classic',
      id: 'oks-4-5-kl-6',
      question: 'En kafé har FK 280 000 kr per måned, gjennomsnittspris 95 kr per kunde, VK 38 kr per kunde. a) Regn ut nullpunkt og dekningsgrad. b) I mai hadde de 6500 kunder. Regn ut resultat og sikkerhetsmargin. c) De vurderer å øke prisene til 105 kr. Hva blir nytt nullpunkt? d) Hva blir nytt resultat ved 6500 kunder hvis de øker prisen? e) Hvis kundene reduseres med 10% på grunn av prisøkningen, lønner det seg da å øke prisen?',
      solution: `**a) Opprinnelig situasjon:**
DB per kunde: $95 - 38 = 57$ kr

Nullpunkt:
$$\\frac{280\\,000}{57} = 4912.28 \\approx 4913 \\text{ kunder}$$

Dekningsgrad:
$$\\frac{57}{95} \\times 100\\% = 60\\%$$

**b) Resultat ved 6500 kunder:**
Dekningsbidrag: $6500 \\times 57 = 370\\,500$ kr
Resultat: $370\\,500 - 280\\,000 = 90\\,500$ kr

Nullpunktomsetning: $4913 \\times 95 = 466\\,735$ kr
Faktisk omsetning: $6500 \\times 95 = 617\\,500$ kr
Sikkerhetsmargin: $\\frac{617\\,500 - 466\\,735}{617\\,500} \\times 100\\% = 24.4\\%$

**c) Nytt nullpunkt (pris = 105 kr):**
Nytt DB: $105 - 38 = 67$ kr
$$\\frac{280\\,000}{67} = 4179.10 \\approx 4180 \\text{ kunder}$$

**d) Nytt resultat ved 6500 kunder:**
Dekningsbidrag: $6500 \\times 67 = 435\\,500$ kr
Resultat: $435\\,500 - 280\\,000 = 155\\,500$ kr

**e) Resultat ved 10% færre kunder (5850):**
Dekningsbidrag: $5850 \\times 67 = 391\\,950$ kr
Resultat: $391\\,950 - 280\\,000 = 111\\,950$ kr

**Konklusjon:**
Selv med 10% færre kunder (5850) gir den nye prisen et resultat på 111 950 kr, som er bedre enn opprinnelige 90 500 kr. Prisøkningen lønner seg.

**Svar:**
a) Nullpunkt: 4913 kunder, dekningsgrad: 60%
b) Resultat: 90 500 kr, sikkerhetsmargin: 24.4%
c) 4180 kunder
d) 155 500 kr
e) Ja, det lønner seg. Resultat blir 111 950 kr, som er 21 450 kr bedre enn opprinnelig.`
    },
  ],
};

// ========================================================================================
// EKSPORT
// ========================================================================================

export const OKONOMISTYRING_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_OKONOMISTYRING_4_1,
  CHAPTER_OKONOMISTYRING_4_2,
  CHAPTER_OKONOMISTYRING_4_3,
  CHAPTER_OKONOMISTYRING_4_4,
  CHAPTER_OKONOMISTYRING_4_5,
];