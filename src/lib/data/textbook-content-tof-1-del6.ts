/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Teknologi og forskningslære 1 VG2
 *
 * Seksjon 6: Energi, materialer og prosjekt (Kapittel 6.1–6.8)
 * Denne filen inneholder kapittel 6.1–6.8.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 6.1: Energiformer og energioverføring
// ============================================================================

export const CHAPTER_TOF_1_6_1: TextbookChapter = {
  id: 'tof-1-6-1',
  courseId: 'tof-1',
  chapterNumber: '6.1',
  title: 'Energiformer og energioverføring',
  description: 'Kinetisk, potensiell, termisk energi og energioverføring.',
  estimatedMinutes: 30,
  competenceGoals: ['forklare energiformer og energioverføring'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-6-1-intro',
      type: 'text',
      content: `## Energiformer og energioverføring

Energi er et av de mest grunnleggende begrepene i naturvitenskap og teknologi. Alt som skjer i naturen og i menneskeskapte systemer involverer energi – fra en ball som ruller nedover en bakke til en mobiltelefon som lades. Uten energi ville ingenting kunne bevege seg, varmes opp eller lyse.

Men hva er egentlig energi? Energi kan defineres som **evnen til å utføre arbeid eller overføre varme**. SI-enheten for energi er **joule** (J), oppkalt etter den britiske fysikeren James Prescott Joule. Energi kan verken skapes eller ødelegges – den kan bare overføres mellom systemer eller omdannes fra én form til en annen.

I dette kapittelet skal vi se nærmere på de viktigste energiformene, forstå hvordan energi overføres mellom systemer, og lære å identifisere energiomforminger i teknologiske systemer.`,
    },

    // --- TEORI: Kinetisk energi ---
    {
      id: 'tof1-6-1-def-kinetisk',
      type: 'definition',
      title: 'Kinetisk energi',
      content: `**Kinetisk energi** er energien et legeme har på grunn av sin bevegelse. Jo raskere et legeme beveger seg, og jo større masse det har, desto mer kinetisk energi har det.

Formelen for kinetisk energi er:

$$E_k = \\frac{1}{2}mv^2$$

der:
- $E_k$ er kinetisk energi målt i joule (J)
- $m$ er massen målt i kilogram (kg)
- $v$ er farten målt i meter per sekund (m/s)

**Merk:** Farten er kvadrert i formelen. Det betyr at dersom farten dobles, firedobles den kinetiske energien. Dette er en viktig grunn til at fart i trafikken er så farlig – en bil som kjører i 100 km/h har fire ganger så mye kinetisk energi som en bil som kjører i 50 km/h.`,
    },
    {
      id: 'tof1-6-1-text-kinetisk',
      type: 'text',
      content: `### Kinetisk energi i praksis

Kinetisk energi finnes overalt rundt oss. Vind er luft i bevegelse og har kinetisk energi som vi kan utnytte i vindturbiner. Rennende vann i elver og fossefall har kinetisk energi som kan brukes til å produsere elektrisitet. Selv molekylene i luften rundt oss har kinetisk energi – dette er det vi opplever som temperatur.

I teknologisammenheng er kinetisk energi viktig når vi skal beregne energibehovet i transportsystemer, dimensjonere bremser eller vurdere konsekvenser av kollisjoner. For eksempel må en elbil ha et batterisystem som kan levere nok energi til å gi bilen den ønskede kinetiske energien.

Enheten joule kan virke liten i hverdagssammenheng. Her er noen eksempler for å gi en følelse av størrelsesorden:

| Situasjon | Kinetisk energi |
|---|---|
| Gående person (70 kg, 5 km/h) | ca. 68 J |
| Sykkel med rytter (80 kg, 20 km/h) | ca. 2 500 J |
| Bil (1 500 kg, 80 km/h) | ca. 370 000 J |
| Tog (400 000 kg, 100 km/h) | ca. 154 000 000 J |`,
    },

    // --- EKSEMPEL: Kinetisk energi ---
    {
      id: 'tof1-6-1-example-kinetisk',
      type: 'example',
      title: 'Eksempel: Kinetisk energi for en bil',
      problem: 'En elbil med masse 1 800 kg kjører i 90 km/h. Beregn den kinetiske energien til bilen.',
      solution: `Vi bruker formelen $E_k = \\frac{1}{2}mv^2$.

**Steg 1:** Gjør om farten til m/s:
$$v = 90 \\text{ km/h} = \\frac{90}{3{,}6} = 25{,}0 \\text{ m/s}$$

**Steg 2:** Sett inn i formelen:
$$E_k = \\frac{1}{2} \\cdot 1800 \\text{ kg} \\cdot (25{,}0 \\text{ m/s})^2$$
$$E_k = \\frac{1}{2} \\cdot 1800 \\cdot 625 = 562\\,500 \\text{ J} \\approx 563 \\text{ kJ}$$

**Svar:** Den kinetiske energien til elbilen er omtrent **563 kJ** (563 000 joule). For å sette dette i perspektiv tilsvarer det den energien som trengs for å løfte ca. 57 tonn én meter opp i luften.`,
    },

    // --- OPPGAVE 1 ---
    {
      id: 'tof1-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En ball med masse 0,5 kg har en fart på 10 m/s. Hva er den kinetiske energien til ballen?',
        options: [
          { id: 'a', text: '5 J', isCorrect: false },
          { id: 'b', text: '25 J', isCorrect: true },
          { id: 'c', text: '50 J', isCorrect: false },
          { id: 'd', text: '100 J', isCorrect: false },
        ],
        solution: 'Vi bruker $E_k = \\frac{1}{2}mv^2 = \\frac{1}{2} \\cdot 0{,}5 \\cdot 10^2 = \\frac{1}{2} \\cdot 0{,}5 \\cdot 100 = 25$ J. Riktig svar er **25 J**.',
        hints: ['Bruk formelen $E_k = \\frac{1}{2}mv^2$ og sett inn $m = 0{,}5$ kg og $v = 10$ m/s.'],
      },
    },

    // --- TEORI: Potensiell energi ---
    {
      id: 'tof1-6-1-def-potensiell',
      type: 'definition',
      title: 'Potensiell energi',
      content: `**Potensiell energi** (tyngdepotensiell energi) er energien et legeme har på grunn av sin posisjon i et tyngdefelt. Jo høyere opp et legeme er, desto mer potensiell energi har det.

Formelen for tyngdepotensiell energi er:

$$E_p = mgh$$

der:
- $E_p$ er potensiell energi målt i joule (J)
- $m$ er massen målt i kilogram (kg)
- $g$ er tyngdeakselerasjonen ($\\approx 9{,}81$ m/s² på jordoverflaten)
- $h$ er høyden over et valgt referansepunkt, målt i meter (m)

**Merk:** Den potensielle energien avhenger av hvilket referansepunkt vi velger. Ofte velger vi bakkenivå som referanse, slik at $h = 0$ på bakken. I vannkraftverk er det høydeforskjellen mellom vannmagasinet og turbinen som bestemmer den potensielle energien.`,
    },

    // --- EKSEMPEL: Potensiell energi ---
    {
      id: 'tof1-6-1-example-potensiell',
      type: 'example',
      title: 'Eksempel: Vannkraftverk',
      problem: 'I et vannkraftverk faller 500 kg vann fra et magasin som ligger 120 m over turbinen. Beregn den potensielle energien til vannet.',
      solution: `Vi bruker formelen $E_p = mgh$.

$$E_p = 500 \\text{ kg} \\cdot 9{,}81 \\text{ m/s}^2 \\cdot 120 \\text{ m}$$
$$E_p = 588\\,600 \\text{ J} \\approx 589 \\text{ kJ}$$

**Svar:** Vannet har en potensiell energi på omtrent **589 kJ**. Denne energien kan omdannes til kinetisk energi når vannet faller, og deretter til elektrisk energi i turbinen og generatoren.`,
    },

    // --- OPPGAVE 2 ---
    {
      id: 'tof1-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En stein med masse 2,0 kg ligger på kanten av en klippe som er 50 m høy. Hva er den potensielle energien til steinen i forhold til bakken? (Bruk $g = 9{,}81$ m/s².)',
        options: [
          { id: 'a', text: '100 J', isCorrect: false },
          { id: 'b', text: '490 J', isCorrect: false },
          { id: 'c', text: '981 J', isCorrect: true },
          { id: 'd', text: '1 962 J', isCorrect: false },
        ],
        solution: '$E_p = mgh = 2{,}0 \\cdot 9{,}81 \\cdot 50 = 981$ J. Riktig svar er **981 J**.',
        hints: ['Sett inn $m = 2{,}0$ kg, $g = 9{,}81$ m/s² og $h = 50$ m i formelen $E_p = mgh$.'],
      },
    },

    // --- TEORI: Termisk energi ---
    {
      id: 'tof1-6-1-def-termisk',
      type: 'definition',
      title: 'Termisk energi',
      content: `**Termisk energi** (varmeenergi) er den samlede kinetiske energien til alle atomene og molekylene i et stoff. Jo høyere temperatur et stoff har, desto raskere beveger partiklene seg, og desto mer termisk energi har stoffet.

Termisk energi avhenger av tre faktorer:
- **Masse:** Mer stoff betyr flere partikler og mer energi
- **Temperatur:** Høyere temperatur betyr raskere partikkelbevegelse
- **Stofftype:** Ulike stoffer har ulik evne til å lagre varme (spesifikk varmekapasitet)

Den termiske energien som overføres når temperaturen endres kan beregnes med:

$$Q = mc\\Delta T$$

der:
- $Q$ er varmeenergien i joule (J)
- $m$ er massen i kilogram (kg)
- $c$ er spesifikk varmekapasitet i J/(kg·K)
- $\\Delta T$ er temperaturendringen i kelvin (K) eller grader Celsius (°C)

Spesifikk varmekapasitet for vann er $c = 4\\,180$ J/(kg·K), noe som betyr at vann kan lagre mye varme – derfor brukes vann i oppvarmingssystemer.`,
    },
    {
      id: 'tof1-6-1-text-termisk',
      type: 'text',
      content: `### Andre energiformer

I tillegg til kinetisk, potensiell og termisk energi finnes det flere viktige energiformer:

- **Elektrisk energi:** Energien som overføres av elektrisk strøm. Denne energiformen er svært nyttig fordi den enkelt kan omformes til andre energiformer – lys, varme, bevegelse og lyd.

- **Kjemisk energi:** Energi som er lagret i kjemiske bindinger mellom atomer. Når bensin forbrenner eller et batteri utlades, frigjøres kjemisk energi. Mat inneholder kjemisk energi som kroppen omdanner til varme og bevegelse.

- **Kjerneenergi:** Energi som er lagret i atomkjernen. Denne energien kan frigjøres gjennom fisjon (spalting av tunge atomkjerner) eller fusjon (sammenslåing av lette atomkjerner). Kjerneenergi er kilden til solens energi.

- **Stråling (elektromagnetisk energi):** Energi som transporteres av elektromagnetiske bølger – synlig lys, infrarød stråling, mikrobølger og røntgenstråling. Solenergi overføres som stråling gjennom verdensrommet.`,
    },

    // --- TEORI: Energioverføring ---
    {
      id: 'tof1-6-1-def-overforing',
      type: 'definition',
      title: 'Energioverføring og energiomforming',
      content: `**Energioverføring** skjer når energi flyttes fra ett system til et annet, for eksempel når varme strømmer fra en varm gjenstand til en kald.

**Energiomforming** skjer når energi endrer form, for eksempel når kinetisk energi omgjøres til elektrisk energi i en generator.

Energi overføres på tre hovedmåter:
1. **Arbeid:** En kraft virker over en strekning ($W = Fs$)
2. **Varmeoverføring:** Energi strømmer fra varmt til kaldt (varmeledning, konveksjon, stråling)
3. **Stråling:** Energi transporteres som elektromagnetiske bølger

**Energikjeder** beskriver hvordan energi omformes gjennom flere ledd. For eksempel i et kullkraftverk:

Kjemisk energi (kull) → Termisk energi (damp) → Kinetisk energi (turbin) → Elektrisk energi (generator)`,
    },

    // --- EKSEMPEL: Energikjede ---
    {
      id: 'tof1-6-1-example-kjede',
      type: 'example',
      title: 'Eksempel: Energikjede for en elbil',
      problem: 'Beskriv energikjeden fra solcellepanel til bevegelse i en elbil som lades med solenergi.',
      solution: `**Energikjeden:**

1. **Stråling** (elektromagnetisk energi fra solen) treffer solcellepanelet
2. **Elektrisk energi** produseres i solcellen (fotoelektrisk effekt)
3. **Kjemisk energi** lagres i elbilens batteri (litiumionbatteri)
4. **Elektrisk energi** sendes fra batteriet til elmotoren
5. **Kinetisk energi** – elmotoren driver hjulene og bilen beveger seg

I hvert ledd i kjeden tapes noe energi som **termisk energi** (varme). Solcellen omdanner bare ca. 20 % av solstrålingen til elektrisitet, og det er energitap i ladeelektronikk, batteri og motor. Likevel er den totale virkningsgraden for elbiler betydelig bedre enn for biler med forbrenningsmotor.`,
    },

    // --- OPPGAVE 3 ---
    {
      id: 'tof1-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken energiomforming skjer i en vindturbin?',
        options: [
          { id: 'a', text: 'Kjemisk energi → elektrisk energi', isCorrect: false },
          { id: 'b', text: 'Kinetisk energi → elektrisk energi', isCorrect: true },
          { id: 'c', text: 'Potensiell energi → kinetisk energi', isCorrect: false },
          { id: 'd', text: 'Termisk energi → mekanisk energi', isCorrect: false },
        ],
        solution: 'I en vindturbin omdannes vindens **kinetiske energi** (bevegelsesenergi i luftmasser) til **elektrisk energi** via en generator. Vinden setter rotorbladene i bevegelse, som driver en generator der mekanisk rotasjonsenergi omdannes til elektrisitet.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-6-1-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Energiformer og energioverføring

| Energiform | Formel | Avhenger av |
|---|---|---|
| Kinetisk energi | $E_k = \\frac{1}{2}mv^2$ | Masse og fart |
| Potensiell energi | $E_p = mgh$ | Masse, tyngdeakselerasjon og høyde |
| Termisk energi | $Q = mc\\Delta T$ | Masse, varmekapasitet og temperaturendring |

**Andre energiformer:** Elektrisk, kjemisk, kjerneenergi, stråling.

**Viktige prinsipper:**
- Energi måles i joule (J) og kan verken skapes eller ødelegges
- Energi kan overføres mellom systemer gjennom arbeid, varme eller stråling
- Energiomforming betyr at energi endrer form (f.eks. kinetisk → elektrisk)
- Energikjeder beskriver energiomforminger gjennom flere ledd`,
    },

    // --- SAMLEOPPGAVE 4 ---
    {
      id: 'tof1-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En sykkel med rytter har en samlet masse på 85 kg og kjører i 25 km/h. Beregn den kinetiske energien. Gjør om farten til m/s først. Forklar deretter hva som skjer med den kinetiske energien når syklisten bremser.',
        hints: ['Husk å dele km/h med 3,6 for å få m/s. Bruk formelen $E_k = \\frac{1}{2}mv^2$.'],
        solution: `**Fart i m/s:**
$$v = \\frac{25}{3{,}6} \\approx 6{,}94 \\text{ m/s}$$

**Kinetisk energi:**
$$E_k = \\frac{1}{2} \\cdot 85 \\cdot 6{,}94^2 = \\frac{1}{2} \\cdot 85 \\cdot 48{,}2 \\approx 2\\,047 \\text{ J} \\approx 2{,}0 \\text{ kJ}$$

Når syklisten bremser, omdannes den kinetiske energien til **termisk energi** (varme) i bremseklossene og felgen. Noe energi omdannes også til lyd. Den kinetiske energien forsvinner ikke – den omformes til andre energiformer.`,
      },
    },

    // --- SAMLEOPPGAVE 5 ---
    {
      id: 'tof1-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en fullstendig energikjede for et vannkraftverk. Start med solenergi som fordamper vann fra havet, og avslutt med lys fra en lampe i et hjem. Beskriv minst fem energiomforminger og forklar hva som skjer i hvert ledd.',
        hints: ['Tenk gjennom hele vannets kretsløp: fordampning, nedbør, magasin, rør, turbin, generator, strømnett, lampe.'],
        solution: `**Energikjede for et vannkraftverk:**

1. **Stråling → termisk energi:** Solstråling varmer opp havoverflaten og fordamper vann
2. **Termisk energi → potensiell energi:** Vanndamp stiger opp i atmosfæren, danner skyer og faller som nedbør i fjellene – vannet har nå potensiell energi i magasinet
3. **Potensiell energi → kinetisk energi:** Vannet strømmer nedover gjennom rør (trykktunnel) fra magasinet til kraftstasjonen
4. **Kinetisk energi → mekanisk rotasjonsenergi:** Vannet treffer turbinbladene og setter turbinen i rotasjon
5. **Mekanisk energi → elektrisk energi:** Generatoren (koblet til turbinen) omdanner rotasjonsenergi til elektrisk energi
6. **Elektrisk energi → stråling (lys) og termisk energi:** Lampen i hjemmet omdanner elektrisk energi til synlig lys og varme

I hvert ledd tapes noe energi som varme. Et vannkraftverk har likevel svært høy virkningsgrad – typisk 85–95 %.`,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.2: Energibevaring og virkningsgrad
// ============================================================================

export const CHAPTER_TOF_1_6_2: TextbookChapter = {
  id: 'tof-1-6-2',
  courseId: 'tof-1',
  chapterNumber: '6.2',
  title: 'Energibevaring og virkningsgrad',
  description: 'Energiloven, energitap og virkningsgrad.',
  estimatedMinutes: 35,
  competenceGoals: ['beregne virkningsgrad'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-6-2-intro',
      type: 'text',
      content: `## Energibevaring og virkningsgrad

Har du noen gang lurt på hvorfor en bil blir varm etter å ha kjørt en stund, eller hvorfor en lyspære varmer? Svaret ligger i **termodynamikkens første lov**, også kalt **energiloven** – en av de mest fundamentale lovene i fysikken.

Energiloven forteller oss at energi aldri forsvinner. Men i praktiske systemer omdannes alltid noe av energien til former vi ikke ønsker – særlig varme. Hvor mye av den tilførte energien som faktisk blir utnyttet til nyttig arbeid, beskriver vi med begrepet **virkningsgrad**.

I dette kapittelet skal du lære å forstå energiloven, identifisere energitap i systemer og beregne virkningsgrad – et sentralt verktøy for å vurdere hvor effektive teknologiske systemer er.`,
    },

    // --- TEORI: Energiloven ---
    {
      id: 'tof1-6-2-def-energiloven',
      type: 'definition',
      title: 'Energiloven (termodynamikkens første lov)',
      content: `**Energiloven** sier at energi verken kan skapes eller ødelegges – bare omformes fra én form til en annen eller overføres mellom systemer.

Matematisk kan dette uttrykkes som:

$$E_{\\text{tilført}} = E_{\\text{nyttig}} + E_{\\text{tap}}$$

der:
- $E_{\\text{tilført}}$ er den totale energien som tilføres systemet
- $E_{\\text{nyttig}}$ er den energien som utnyttes til ønsket formål
- $E_{\\text{tap}}$ er energi som omdannes til uønskede former (hovedsakelig varme)

Energiloven gjelder alltid og overalt. Når vi sier at et system «bruker energi» eller «forbruker energi», mener vi egentlig at energien omdannes – ikke at den forsvinner.

**Eksempel:** Når du lader en mobiltelefon med 10 J elektrisk energi, omdannes kanskje 8 J til kjemisk energi i batteriet og 2 J til varme i laderen og telefonen. Total energi inn (10 J) = total energi ut (8 J + 2 J).`,
    },
    {
      id: 'tof1-6-2-text-energitap',
      type: 'text',
      content: `### Energitap og energikvalitet

Selv om energi aldri forsvinner, er ikke alle energiformer like nyttige. **Termisk energi** (varme) ved lav temperatur er vanskelig å utnytte til nyttig arbeid. Når energi omdannes, ender en del alltid opp som lavtemperatur varmeenergi som spres til omgivelsene – dette kaller vi **energitap** eller **energidegrading**.

Begrepet «energitap» betyr altså ikke at energien forsvinner, men at den omdannes til en form som er vanskelig å utnytte videre. For eksempel:

- I en **glødelampe** omdannes ca. 95 % av den elektriske energien til varme og bare 5 % til lys
- I en **LED-pære** omdannes ca. 60 % til lys og 40 % til varme
- I en **forbrenningsmotor** omdannes ca. 25–35 % av den kjemiske energien til bevegelse – resten blir varme

Energitapet skyldes ofte **friksjon** (der bevegelsesenergi omdannes til varme) og **elektrisk motstand** (der strømmen varmer opp ledningene). I alle reelle systemer er det umulig å unngå energitap helt.`,
    },

    // --- EKSEMPEL: Energitap ---
    {
      id: 'tof1-6-2-example-energitap',
      type: 'example',
      title: 'Eksempel: Energitap i en glødelampe',
      problem: 'En glødelampe tilføres 60 J elektrisk energi per sekund (60 W). Bare 3 J per sekund omdannes til synlig lys. Hvor mye energi går tapt som varme per sekund?',
      solution: `Vi bruker energiloven: $E_{\\text{tilført}} = E_{\\text{nyttig}} + E_{\\text{tap}}$

$$E_{\\text{tap}} = E_{\\text{tilført}} - E_{\\text{nyttig}} = 60 \\text{ J} - 3 \\text{ J} = 57 \\text{ J}$$

**Svar:** 57 J per sekund (57 W) går tapt som varme. Det betyr at hele 95 % av energien omdannes til varme i stedet for lys. Dette er grunnen til at glødelamper er faset ut i Norge til fordel for LED-pærer, som er langt mer energieffektive.`,
    },

    // --- OPPGAVE 1 ---
    {
      id: 'tof1-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En elmotor tilføres 500 J elektrisk energi og leverer 400 J mekanisk energi. Hvor mye energi går tapt som varme?',
        options: [
          { id: 'a', text: '50 J', isCorrect: false },
          { id: 'b', text: '100 J', isCorrect: true },
          { id: 'c', text: '400 J', isCorrect: false },
          { id: 'd', text: '900 J', isCorrect: false },
        ],
        solution: 'Energiloven: $E_{\\text{tap}} = E_{\\text{tilført}} - E_{\\text{nyttig}} = 500 - 400 = 100$ J. Riktig svar er **100 J**.',
      },
    },

    // --- TEORI: Virkningsgrad ---
    {
      id: 'tof1-6-2-def-virkningsgrad',
      type: 'definition',
      title: 'Virkningsgrad',
      content: `**Virkningsgrad** ($\\eta$, den greske bokstaven «eta») er et mål på hvor effektivt et system omdanner tilført energi til nyttig energi.

Formelen for virkningsgrad er:

$$\\eta = \\frac{E_{\\text{nyttig}}}{E_{\\text{tilført}}} \\times 100\\%$$

eller tilsvarende med effekt (energi per tidsenhet):

$$\\eta = \\frac{P_{\\text{nyttig}}}{P_{\\text{tilført}}} \\times 100\\%$$

der:
- $\\eta$ er virkningsgraden i prosent (%)
- $E_{\\text{nyttig}}$ / $P_{\\text{nyttig}}$ er nyttig energi/effekt
- $E_{\\text{tilført}}$ / $P_{\\text{tilført}}$ er tilført energi/effekt

Virkningsgraden er alltid mellom **0 %** og **100 %**. En virkningsgrad på 100 % ville betydd at all tilført energi ble omgjort til nyttig energi – dette er umulig i praksis.`,
    },
    {
      id: 'tof1-6-2-text-virkningsgrad',
      type: 'text',
      content: `### Virkningsgrad for ulike systemer

Her er typiske virkningsgrader for noen vanlige energisystemer:

| System | Virkningsgrad |
|---|---|
| Vannkraftverk | 85–95 % |
| Vindturbin | 35–50 % |
| Solcellepanel | 15–25 % |
| Elmotor | 85–95 % |
| Forbrenningsmotor (bensin) | 25–35 % |
| Forbrenningsmotor (diesel) | 30–45 % |
| LED-lampe | 40–60 % |
| Glødelampe | 3–5 % |
| Kullfyrt kraftverk | 33–40 % |
| Gasskraftverk (kombinert syklus) | 55–62 % |

Legg merke til at **elektromaskiner** (elmotorer, generatorer, vannkraftturbiner) generelt har mye høyere virkningsgrad enn **varme-maskiner** (forbrenningsmotorer, kullkraftverk). Dette er en av grunnene til at elektrifisering av transport og industri er så viktig for å redusere energiforbruk.

### Total virkningsgrad i energikjeder

Når energi omdannes i flere ledd, multipliseres virkningsgradene:

$$\\eta_{\\text{total}} = \\eta_1 \\times \\eta_2 \\times \\eta_3 \\times \\ldots$$

For eksempel, dersom et kullkraftverk har virkningsgrad 38 % og strømnettet har 95 % virkningsgrad, blir total virkningsgrad fra kull til stikkontakt:

$$\\eta_{\\text{total}} = 0{,}38 \\times 0{,}95 = 0{,}361 = 36{,}1\\%$$`,
    },

    // --- EKSEMPEL: Virkningsgrad ---
    {
      id: 'tof1-6-2-example-virkningsgrad',
      type: 'example',
      title: 'Eksempel: Virkningsgrad for en elmotor',
      problem: 'En elmotor tilføres 800 W elektrisk effekt og leverer 680 W mekanisk effekt. Beregn virkningsgraden.',
      solution: `Vi bruker formelen $\\eta = \\frac{P_{\\text{nyttig}}}{P_{\\text{tilført}}} \\times 100\\%$.

$$\\eta = \\frac{680 \\text{ W}}{800 \\text{ W}} \\times 100\\% = 85\\%$$

**Svar:** Virkningsgraden til elmotoren er **85 %**. Det betyr at 85 % av den elektriske energien omdannes til mekanisk bevegelse, mens 15 % (120 W) omdannes til varme i motoren.`,
    },

    // --- OPPGAVE 2 ---
    {
      id: 'tof1-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Et solcellepanel mottar 2 000 W solstråling og produserer 400 W elektrisk effekt. Hva er virkningsgraden?',
        options: [
          { id: 'a', text: '5 %', isCorrect: false },
          { id: 'b', text: '10 %', isCorrect: false },
          { id: 'c', text: '20 %', isCorrect: true },
          { id: 'd', text: '40 %', isCorrect: false },
        ],
        solution: '$\\eta = \\frac{400}{2\\,000} \\times 100\\% = 20\\%$. Riktig svar er **20 %**. Dette er en typisk virkningsgrad for moderne solcellepaneler.',
      },
    },

    // --- OPPGAVE 3 ---
    {
      id: 'tof1-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En bensinmotor har virkningsgrad 30 % og en girkasse har virkningsgrad 90 %. Hva er den totale virkningsgraden fra bensin til hjulene?',
        options: [
          { id: 'a', text: '27 %', isCorrect: true },
          { id: 'b', text: '30 %', isCorrect: false },
          { id: 'c', text: '60 %', isCorrect: false },
          { id: 'd', text: '120 %', isCorrect: false },
        ],
        solution: 'Total virkningsgrad: $\\eta_{\\text{total}} = 0{,}30 \\times 0{,}90 = 0{,}27 = 27\\%$. Riktig svar er **27 %**. Bare litt over en fjerdedel av energien i bensinen ender som bevegelse av bilen.',
        hints: ['Multipliser virkningsgradene i hvert ledd: $\\eta_{\\text{total}} = \\eta_1 \\times \\eta_2$.'],
      },
    },

    // --- TEORI: Joule som enhet ---
    {
      id: 'tof1-6-2-text-joule',
      type: 'text',
      content: `### Energienheter

Joule er SI-enheten for energi, men i praksis brukes flere ulike enheter avhengig av sammenhengen:

| Enhet | Symbol | Sammenheng |
|---|---|---|
| Joule | J | Grunnenhet for energi |
| Kilojoule | kJ | 1 kJ = 1 000 J |
| Megajoule | MJ | 1 MJ = 1 000 000 J |
| Kilowattime | kWh | 1 kWh = 3 600 000 J = 3,6 MJ |
| Kalori | cal | 1 cal = 4,186 J |
| Kilokalori | kcal | 1 kcal = 4 186 J (brukes om mat) |

**Kilowattime (kWh)** er den enheten du er mest kjent med fra strømregningen. En kilowattime er den energien som brukes når en effekt på 1 kW (1 000 W) virker i én time:

$$1 \\text{ kWh} = 1\\,000 \\text{ W} \\times 3\\,600 \\text{ s} = 3\\,600\\,000 \\text{ J} = 3{,}6 \\text{ MJ}$$

**Effekt** er energi per tidsenhet, og måles i watt (W):

$$P = \\frac{E}{t} \\quad \\text{der } 1 \\text{ W} = 1 \\text{ J/s}$$`,
    },

    // --- EKSEMPEL: Energi og effekt ---
    {
      id: 'tof1-6-2-example-energi-effekt',
      type: 'example',
      title: 'Eksempel: Strømforbruk',
      problem: 'En varmtvannsbereder har en effekt på 2 000 W og kjøres i 3 timer. Beregn energiforbruket i kWh og i joule. Dersom strømprisen er 1,50 kr/kWh, hva koster det å varme vannet?',
      solution: `**Energi i kWh:**
$$E = P \\times t = 2{,}0 \\text{ kW} \\times 3 \\text{ h} = 6{,}0 \\text{ kWh}$$

**Energi i joule:**
$$E = 6{,}0 \\text{ kWh} \\times 3{,}6 \\text{ MJ/kWh} = 21{,}6 \\text{ MJ} = 21\\,600\\,000 \\text{ J}$$

**Kostnad:**
$$\\text{Kostnad} = 6{,}0 \\text{ kWh} \\times 1{,}50 \\text{ kr/kWh} = 9{,}00 \\text{ kr}$$

**Svar:** Energiforbruket er **6,0 kWh** (21,6 MJ), og det koster **9,00 kr**.`,
    },

    // --- Oppsummering ---
    {
      id: 'tof1-6-2-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Energibevaring og virkningsgrad

| Begrep | Forklaring |
|---|---|
| **Energiloven** | Energi kan verken skapes eller ødelegges, bare omformes |
| **Energitap** | Energi som omdannes til uønskede former (oftest varme) |
| **Virkningsgrad** | Andel av tilført energi som utnyttes til nyttig arbeid |
| **Effekt** | Energi per tidsenhet, målt i watt (W) |

**Nøkkelformler:**
- Energibevaring: $E_{\\text{tilført}} = E_{\\text{nyttig}} + E_{\\text{tap}}$
- Virkningsgrad: $\\eta = \\frac{E_{\\text{nyttig}}}{E_{\\text{tilført}}} \\times 100\\%$
- Total virkningsgrad: $\\eta_{\\text{total}} = \\eta_1 \\times \\eta_2 \\times \\ldots$
- Effekt: $P = \\frac{E}{t}$
- Energienhet: $1 \\text{ kWh} = 3{,}6 \\text{ MJ}$`,
    },

    // --- SAMLEOPPGAVE 4 ---
    {
      id: 'tof1-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et lite vannkraftverk har en turbin med virkningsgrad 88 % og en generator med virkningsgrad 92 %. Vannet faller fra en høyde på 80 m, og vannføringen er 200 kg/s. Beregn: a) Den potensielle energien per sekund (effekten) fra vannet. b) Den elektriske effekten som kraftverket leverer. c) Den totale virkningsgraden.',
        hints: ['a) Bruk $P = mgh/t = \\dot{m} \\cdot g \\cdot h$ der $\\dot{m} = 200$ kg/s. b) Multipliser med begge virkningsgradene. c) $\\eta_{\\text{total}} = \\eta_{\\text{turbin}} \\times \\eta_{\\text{generator}}$.'],
        solution: `**a) Potensiell energi per sekund (effekt fra vannet):**
$$P_{\\text{vann}} = \\dot{m} \\cdot g \\cdot h = 200 \\cdot 9{,}81 \\cdot 80 = 156\\,960 \\text{ W} \\approx 157 \\text{ kW}$$

**b) Elektrisk effekt:**
$$P_{\\text{el}} = P_{\\text{vann}} \\times \\eta_{\\text{turbin}} \\times \\eta_{\\text{generator}}$$
$$P_{\\text{el}} = 156\\,960 \\times 0{,}88 \\times 0{,}92 = 127\\,100 \\text{ W} \\approx 127 \\text{ kW}$$

**c) Total virkningsgrad:**
$$\\eta_{\\text{total}} = 0{,}88 \\times 0{,}92 = 0{,}810 = 81{,}0\\%$$

Kraftverket leverer ca. 127 kW elektrisk effekt. Resten (ca. 30 kW) omdannes til varme i turbin og generator.`,
      },
    },

    // --- SAMLEOPPGAVE 5 ---
    {
      id: 'tof1-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign energieffektiviteten til en bensinbil og en elbil. Bensinbilen har motor med virkningsgrad 30 %, girkasse 90 %. Elbilen har batteri med virkningsgrad 95 %, elmotor 90 %, og gir 98 %. Beregn total virkningsgrad for begge og diskuter forskjellen.',
        hints: ['Multipliser virkningsgradene i hvert ledd for begge bilene. Sammenlign resultatene og diskuter konsekvensene for energibruk og miljø.'],
        solution: `**Bensinbil – total virkningsgrad:**
$$\\eta_{\\text{bensin}} = 0{,}30 \\times 0{,}90 = 0{,}27 = 27\\%$$

**Elbil – total virkningsgrad:**
$$\\eta_{\\text{elbil}} = 0{,}95 \\times 0{,}90 \\times 0{,}98 = 0{,}837 = 83{,}7\\%$$

**Sammenligning:**
Elbilen har en total virkningsgrad som er mer enn tre ganger høyere enn bensinbilen (83,7 % vs. 27 %). Det betyr at bensinbilen kaster bort nesten tre fjerdedeler av energien i drivstoffet som varme, mens elbilen utnytter over 80 % av batteriets energi til å drive hjulene.

**Diskusjon:**
Selv om elbilen er mye mer energieffektiv i selve bilen, må vi også vurdere virkningsgraden i hele energikjeden – fra kraftverk til hjul. Dersom elektrisiteten kommer fra vannkraft (η ≈ 90 %), er elbilen fortsatt overlegen. Men dersom strømmen kommer fra kullkraft (η ≈ 38 %), reduseres den totale fordelen.`,
      },
    },

    // --- SAMLEOPPGAVE 6 ---
    {
      id: 'tof1-6-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En husholdning bruker i gjennomsnitt 20 000 kWh elektrisitet per år. a) Regn om til megajoule (MJ). b) Beregn gjennomsnittlig effektforbruk i watt. c) Dersom strømprisen er 1,20 kr/kWh, hva koster strømmen per år?',
        hints: ['a) 1 kWh = 3,6 MJ. b) Del total energi på antall sekunder i et år (365 × 24 × 3600). c) Multipliser energi med pris per kWh.'],
        solution: `**a) Omregning til MJ:**
$$E = 20\\,000 \\text{ kWh} \\times 3{,}6 \\text{ MJ/kWh} = 72\\,000 \\text{ MJ}$$

**b) Gjennomsnittlig effekt:**
$$t_{\\text{år}} = 365 \\times 24 = 8\\,760 \\text{ timer}$$
$$P = \\frac{E}{t} = \\frac{20\\,000 \\text{ kWh}}{8\\,760 \\text{ h}} = 2{,}28 \\text{ kW} = 2\\,280 \\text{ W}$$

**c) Årlig strømkostnad:**
$$\\text{Kostnad} = 20\\,000 \\text{ kWh} \\times 1{,}20 \\text{ kr/kWh} = 24\\,000 \\text{ kr}$$

Gjennomsnittlig bruker husholdningen energi tilsvarende ca. 2,3 kW kontinuerlig – omtrent som å ha en varmtvannsbereder og en komfyr på hele tiden.`,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.3: Fornybar og ikke-fornybar energi
// ============================================================================

export const CHAPTER_TOF_1_6_3: TextbookChapter = {
  id: 'tof-1-6-3',
  courseId: 'tof-1',
  chapterNumber: '6.3',
  title: 'Fornybar og ikke-fornybar energi',
  description: 'Solenergi, vindkraft, vannkraft, fossile brennstoffer og kjernekraft.',
  estimatedMinutes: 30,
  competenceGoals: ['sammenligne energikilder'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-6-3-intro',
      type: 'text',
      content: `## Fornybar og ikke-fornybar energi

Verdens energiforsyning er en av de største utfordringene i vår tid. Vi trenger enorme mengder energi til transport, oppvarming, industri og elektrisitet – men måten vi produserer energi på har store konsekvenser for klima og miljø.

Energikilder deles inn i to hovedkategorier: **fornybare** og **ikke-fornybare**. Fornybare energikilder fornyes naturlig i et menneskelig tidsperspektiv, mens ikke-fornybare brukes opp og kan ikke erstattes.

I dette kapittelet skal du lære om de viktigste energikildene, forstå hvordan de fungerer, og vurdere fordeler og ulemper ved hver enkelt. Som fremtidig teknolog er det avgjørende å kunne sammenligne energikilder og forstå hvordan energisystemene henger sammen.`,
    },

    // --- TEORI: Fornybare energikilder ---
    {
      id: 'tof1-6-3-def-fornybar',
      type: 'definition',
      title: 'Fornybare energikilder',
      content: `**Fornybare energikilder** er energikilder som fornyes av naturlige prosesser i et tempo som er like raskt eller raskere enn de brukes. De viktigste fornybare energikildene er:

- **Solenergi** – energi fra solstråling
- **Vindkraft** – energi fra vindens bevegelse
- **Vannkraft** – energi fra vann i bevegelse (elver, fossefall)
- **Bioenergi** – energi fra biologisk materiale (tre, biogass, biodiesel)
- **Geotermisk energi** – varme fra jordens indre
- **Bølge- og tidevannsenergi** – energi fra havets bevegelser

Fornybare energikilder har den store fordelen at de ikke slipper ut klimagasser under drift (med unntak av bioenergi, som regnes som klimanøytralt fordi CO₂-utslippet balanseres av plantenes opptak).`,
    },

    // --- TEORI: Solenergi ---
    {
      id: 'tof1-6-3-text-sol',
      type: 'text',
      content: `### Solenergi

Solen er den ultimate kilden til nesten all energi på jorden. Solstrålingen som treffer jordoverflaten har en effekt på ca. 1 000 W/m² på en klar dag – dette kalles **solkonstanten ved bakken**.

Det finnes to hovedtyper solenergi:

**Solceller (fotovoltaisk):**
- Omdanner sollys direkte til elektrisitet ved hjelp av halvledermaterialer (vanligvis silisium)
- Typisk virkningsgrad: 15–25 % for kommersielle paneler
- Produserer likestrøm (DC) som må omformes til vekselstrøm (AC)
- Levetid: 25–30 år med gradvis redusert ytelse

**Solfangere (solvarme):**
- Utnytter solstråling til å varme opp vann eller luft
- Typisk virkningsgrad: 50–70 % (mye høyere enn solceller)
- Brukes til oppvarming av tappevann og bygninger

**Fordeler:** Ingen utslipp under drift, rikelig ressurs, kan installeres på tak og fasader, lave driftskostnader.

**Ulemper:** Variabel produksjon (avhengig av vær og årstid), krever store arealer for store mengder energi, produksjon av solceller krever energi og sjeldne materialer.`,
    },

    // --- OPPGAVE 1 ---
    {
      id: 'tof1-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er typisk virkningsgrad for et kommersielt solcellepanel?',
        options: [
          { id: 'a', text: '3–5 %', isCorrect: false },
          { id: 'b', text: '15–25 %', isCorrect: true },
          { id: 'c', text: '50–70 %', isCorrect: false },
          { id: 'd', text: '85–95 %', isCorrect: false },
        ],
        solution: 'Riktig svar er **15–25 %**. Moderne kommersielle solceller har typisk 15–25 % virkningsgrad. 50–70 % gjelder for solfangere (solvarme), og 85–95 % er typisk for vannkraftturbiner og elmotorer.',
      },
    },

    // --- TEORI: Vindkraft ---
    {
      id: 'tof1-6-3-text-vind',
      type: 'text',
      content: `### Vindkraft

Vindkraft utnytter vindens kinetiske energi til å produsere elektrisitet. Moderne vindturbiner er imponerende konstruksjoner – de største har rotordiameter over 200 meter og kan produsere mer enn 15 MW.

**Slik fungerer det:**
1. Vinden treffer turbinbladene og setter dem i rotasjon
2. Rotorbladene driver en aksling koblet til en generator (ofte via en girkasse)
3. Generatoren omdanner rotasjonsenergi til elektrisk energi

Effekten som kan hentes fra vinden er proporsjonal med kubben av vindhastigheten:

$$P \\propto v^3$$

Det betyr at dersom vindhastigheten dobles, øker den tilgjengelige effekten med en faktor på $2^3 = 8$. Derfor er plassering av vindturbiner helt avgjørende – selv små forskjeller i vindhastighet gir store utslag i produksjonen.

**Betz' grense** sier at en vindturbin maksimalt kan utnytte 59,3 % av vindens kinetiske energi. I praksis har gode vindturbiner en virkningsgrad på 35–50 %.

**Fordeler:** Ingen utslipp under drift, relativt billig per kWh, kan kombineres med landbruk og fiske (havvind).

**Ulemper:** Variabel produksjon (avhengig av vind), visuell og lydmessig påvirkning, kan true fugler og flaggermus.`,
    },

    // --- TEORI: Vannkraft ---
    {
      id: 'tof1-6-3-text-vann',
      type: 'text',
      content: `### Vannkraft

Norge er spesielt heldig med vannkraft – omtrent 90 % av norsk elektrisitetsproduksjon kommer fra vannkraft. Norges bratte fjell, rikelige nedbør og mange innsjøer gir ideelle forhold.

**Slik fungerer det:**
1. Vann samles i et magasin (dam) på høyt nivå
2. Vannet ledes gjennom tunneler ned til en turbin
3. Vannet driver turbinen, som er koblet til en generator
4. Generatoren produserer elektrisitet

Den potensielle energien i vannet kan beregnes med $E_p = mgh$, der $h$ er fallhøyden. Effekten avhenger av vannføring og fallhøyde:

$$P = \\eta \\cdot \\rho \\cdot g \\cdot Q \\cdot h$$

der $\\rho$ er vannets tetthet (1 000 kg/m³), $Q$ er vannføring (m³/s), $h$ er fallhøyde (m) og $\\eta$ er virkningsgraden.

**Fordeler:** Ingen utslipp under drift, svært høy virkningsgrad (85–95 %), regulerbar produksjon (kan tilpasses etterspørselen), magasiner fungerer som energilager, lang levetid (50–100 år).

**Ulemper:** Store naturinngrep (demninger, neddemming av arealer), påvirker fiskevandring, avhengig av nedbør, de fleste gode lokaliteter i Norge er allerede utbygd.`,
    },

    // --- EKSEMPEL: Vannkraft ---
    {
      id: 'tof1-6-3-example-vann',
      type: 'example',
      title: 'Eksempel: Effekt fra et vannkraftverk',
      problem: 'Et lite vannkraftverk har fallhøyde 150 m og en vannføring på 5,0 m³/s. Virkningsgraden er 90 %. Beregn den elektriske effekten.',
      solution: `Vi bruker formelen $P = \\eta \\cdot \\rho \\cdot g \\cdot Q \\cdot h$.

$$P = 0{,}90 \\times 1\\,000 \\times 9{,}81 \\times 5{,}0 \\times 150$$
$$P = 0{,}90 \\times 7\\,357\\,500 = 6\\,621\\,750 \\text{ W} \\approx 6{,}6 \\text{ MW}$$

**Svar:** Kraftverket leverer ca. **6,6 MW** elektrisk effekt. Dette er nok til å forsyne flere tusen hjem med strøm.`,
    },

    // --- OPPGAVE 2 ---
    {
      id: 'tof1-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor er plasseringen av vindturbiner så viktig for energiproduksjonen?',
        options: [
          { id: 'a', text: 'Fordi vindturbiner bare fungerer i kaldt klima', isCorrect: false },
          { id: 'b', text: 'Fordi effekten øker proporsjonalt med vindhastigheten', isCorrect: false },
          { id: 'c', text: 'Fordi effekten øker med kubben av vindhastigheten, så små vindforskjeller gir store utslag', isCorrect: true },
          { id: 'd', text: 'Fordi vindturbiner kun fungerer over 1 000 moh.', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Effekten fra vind er proporsjonal med $v^3$. Dersom vindhastigheten øker fra 5 til 10 m/s (dobles), øker den tilgjengelige effekten med $2^3 = 8$ ganger. Derfor gir selv små forskjeller i gjennomsnittlig vindhastighet store forskjeller i årlig produksjon.',
      },
    },

    // --- TEORI: Ikke-fornybare energikilder ---
    {
      id: 'tof1-6-3-def-ikkefornybar',
      type: 'definition',
      title: 'Ikke-fornybare energikilder',
      content: `**Ikke-fornybare energikilder** er energikilder som finnes i begrensede mengder på jorden og ikke kan erstattes i et menneskelig tidsperspektiv. De viktigste er:

**Fossile brennstoffer:**
- **Kull** – fast fossilt brennstoff, dannet av planterester over millioner av år
- **Olje (petroleum)** – flytende fossilt brennstoff, dannet av marine organismer
- **Naturgass** – gassformig fossilt brennstoff, hovedsakelig metan (CH₄)

**Kjernebrensel:**
- **Uran** – grunnstoff som brukes i atomkraftverk (fisjon)
- Teoretisk finnes det nok uran til mange hundre år, men det er en begrenset ressurs

Fossile brennstoffer er dannet over millioner av år gjennom omdanning av døde organismer under høyt trykk og temperatur. De inneholder store mengder **kjemisk energi** som frigjøres ved forbrenning. Forbrenning av fossile brensler gir CO₂-utslipp som forsterker drivhuseffekten og bidrar til global oppvarming.`,
    },
    {
      id: 'tof1-6-3-text-fossil',
      type: 'text',
      content: `### Fossile brennstoffer

Fossile brennstoffer har vært grunnlaget for den industrielle revolusjonen og den moderne økonomien. De har høy energitetthet, er relativt lette å transportere og lagre, og kan brukes til mange formål.

**Energitetthet (omtrentlige verdier):**

| Brennstoff | Energitetthet |
|---|---|
| Kull | 24–35 MJ/kg |
| Olje/bensin | 42–47 MJ/kg |
| Naturgass | 48–55 MJ/kg |
| Tre (tørt) | 15–18 MJ/kg |
| Litiumionbatteri | 0,5–1,0 MJ/kg |

**Ulemper med fossile brennstoffer:**
- **Klimagasser:** Forbrenning gir CO₂, som er den viktigste menneskeskapte drivhusgassen
- **Luftforurensning:** Partikler, NOₓ, SO₂ som skader helse og miljø
- **Begrenset ressurs:** Reservene vil ta slutt (olje: estimert 40–60 år, gass: 50–70 år, kull: 100–200 år)
- **Oljeutslipp:** Risiko for miljøkatastrofer ved utvinning og transport

### Kjernekraft

Kjernekraft bruker **fisjon** (spalting) av uran-235 for å produsere varme, som driver en dampturbin koblet til en generator.

**Fordeler:** Ingen CO₂-utslipp under drift, stor og stabil produksjonskapasitet, høy energitetthet ($1$ kg uran ≈ 24 000 MWh).

**Ulemper:** Radioaktivt avfall (må lagres sikkert i tusenvis av år), risiko for alvorlige ulykker (Tsjernobyl, Fukushima), høye byggekostnader, urangruvedrift har miljøkonsekvenser.`,
    },

    // --- EKSEMPEL: Sammenligning ---
    {
      id: 'tof1-6-3-example-sammenlign',
      type: 'example',
      title: 'Eksempel: Sammenligne energikilder',
      problem: 'Sammenlign solenergi, vindkraft og naturgass med hensyn til tilgjengelighet, CO₂-utslipp og pålitelighet.',
      solution: `| Kriterium | Solenergi | Vindkraft | Naturgass |
|---|---|---|---|
| **Tilgjengelighet** | Rikelig, men varierer med breddegrad og årstid | God mange steder, best langs kysten og til havs | Begrenset ressurs, ujevnt fordelt globalt |
| **CO₂-utslipp (drift)** | 0 g/kWh | 0 g/kWh | ca. 400–500 g CO₂/kWh |
| **Pålitelighet** | Variabel (vær, natt) | Variabel (vindstille) | Stabil og regulerbar |
| **Lagringsevne** | Krever batterier | Krever batterier | Kan lagres i tanker |
| **Arealbruk** | Moderat (tak, ørkener) | Stort, men kan deles | Lite (gassturbin) |

**Konklusjon:** Sol og vind er klimavennlige, men variabel produksjon gjør at vi trenger energilagring eller backup-kapasitet. Naturgass kan reguleres, men gir CO₂-utslipp. Et godt energisystem kombinerer flere kilder for å balansere fordeler og ulemper.`,
    },

    // --- OPPGAVE 3 ---
    {
      id: 'tof1-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av følgende er IKKE en fornybar energikilde?',
        options: [
          { id: 'a', text: 'Vindkraft', isCorrect: false },
          { id: 'b', text: 'Naturgass', isCorrect: true },
          { id: 'c', text: 'Solenergi', isCorrect: false },
          { id: 'd', text: 'Vannkraft', isCorrect: false },
        ],
        solution: 'Riktig svar er **naturgass**. Naturgass er et fossilt brennstoff som er dannet over millioner av år og finnes i begrensede mengder. Vindkraft, solenergi og vannkraft er alle fornybare energikilder.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-6-3-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Fornybar og ikke-fornybar energi

**Fornybare energikilder:**

| Kilde | Prinsipp | Typisk virkningsgrad |
|---|---|---|
| Solceller | Sollys → elektrisitet | 15–25 % |
| Solfangere | Sollys → varme | 50–70 % |
| Vindkraft | Vindens kinetiske energi → elektrisitet | 35–50 % |
| Vannkraft | Vannets potensielle energi → elektrisitet | 85–95 % |

**Ikke-fornybare energikilder:** Kull, olje, naturgass (fossile) og uran (kjernekraft).

**Viktige poeng:**
- Fossile brennstoffer har høy energitetthet, men gir CO₂-utslipp
- Kjernekraft gir ingen CO₂ under drift, men radioaktivt avfall er en utfordring
- Fornybare kilder gir ingen utslipp under drift, men variabel produksjon krever energilagring
- Norge er privilegert med store vannkraftressurser
- Vindeffekt er proporsjonal med $v^3$ – plassering er avgjørende`,
    },

    // --- SAMLEOPPGAVE 4 ---
    {
      id: 'tof1-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et solcellepanel med areal 10 m² mottar solstråling med intensitet 800 W/m² og har virkningsgrad 20 %. Beregn: a) Total soleffekt som treffer panelet. b) Elektrisk effekt fra panelet. c) Hvor mye energi (i kWh) panelet produserer på 5 timer med denne innstrålingen.',
        hints: ['a) $P_{\\text{sol}} = \\text{intensitet} \\times \\text{areal}$. b) $P_{\\text{el}} = P_{\\text{sol}} \\times \\eta$. c) $E = P \\times t$ (husk å gjøre om til kWh).'],
        solution: `**a) Total soleffekt:**
$$P_{\\text{sol}} = 800 \\text{ W/m}^2 \\times 10 \\text{ m}^2 = 8\\,000 \\text{ W} = 8{,}0 \\text{ kW}$$

**b) Elektrisk effekt:**
$$P_{\\text{el}} = 8\\,000 \\times 0{,}20 = 1\\,600 \\text{ W} = 1{,}6 \\text{ kW}$$

**c) Energi over 5 timer:**
$$E = P \\times t = 1{,}6 \\text{ kW} \\times 5 \\text{ h} = 8{,}0 \\text{ kWh}$$

Panelet produserer 8,0 kWh på 5 timer. Til sammenligning bruker et norsk hjem gjennomsnittlig ca. 55 kWh per dag.`,
      },
    },

    // --- SAMLEOPPGAVE 5 ---
    {
      id: 'tof1-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter fordeler og ulemper ved å erstatte Norges gasseksport med havvind. Ta hensyn til økonomi, klima, teknologi, arbeidsplasser og energisikkerhet. Skriv minst fem argumenter for og fem imot.',
        hints: ['Tenk på Norges inntekter fra gasseksport, arbeidsplasser i oljeindustrien, kompetanseoverføring, variabel produksjon, subsidier, klimamål og internasjonale avtaler.'],
        solution: `**Argumenter for å erstatte gass med havvind:**
1. **Klima:** Havvind gir ingen CO₂-utslipp under drift, noe som bidrar til å nå Parisavtalens mål
2. **Langsiktig økonomi:** Olje- og gassinntektene vil falle uansett når verden elektrifiseres – havvind kan gi nye inntekter
3. **Kompetanseoverføring:** Norsk offshorekompetanse fra oljeindustrien kan brukes direkte i havvindsektoren
4. **Energieksport:** Norge kan eksportere ren elektrisitet i stedet for gass, og bidra til europeisk energisikkerhet
5. **Nye arbeidsplasser:** Havvind kan skape tusenvis av jobber i bygging, drift og vedlikehold

**Argumenter mot:**
1. **Økonomi:** Gasseksport gir over 300 milliarder kr/år i inntekter – havvind kan ikke erstatte dette raskt
2. **Pålitelighet:** Vind er variabel, mens gass kan leveres stabilt etter behov
3. **Kostnader:** Havvind krever store investeringer og subsidiering i oppstartsfasen
4. **Naturinngrep:** Havvindparker kan påvirke marine økosystemer og fiskeriet
5. **Teknologi:** Lagringsløsninger for variabel vindkraft er ennå ikke tilstrekkelige i stor skala

En balansert overgang der gass gradvis fases ned og havvind bygges opp, er trolig den mest realistiske veien.`,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.4: Materialteknologi
// ============================================================================

export const CHAPTER_TOF_1_6_4: TextbookChapter = {
  id: 'tof-1-6-4',
  courseId: 'tof-1',
  chapterNumber: '6.4',
  title: 'Materialteknologi',
  description: 'Metaller, polymerer, keramikk og kompositter – egenskaper og bruksområder.',
  estimatedMinutes: 30,
  competenceGoals: ['beskrive materialers egenskaper'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-6-4-intro',
      type: 'text',
      content: `## Materialteknologi

Valg av materiale er en av de viktigste avgjørelsene en ingeniør eller teknolog tar. Et materiale som er perfekt til én oppgave, kan være helt feil til en annen. En bro trenger materialer som tåler store krefter over lang tid, en mobiltelefon trenger lette og slitesterke materialer, og en romrakett trenger materialer som tåler ekstremt høye temperaturer.

**Materialteknologi** er fagfeltet som handler om materialers egenskaper, oppbygning og bruksområder. I dette kapittelet skal vi se på de fire hovedgruppene av materialer – metaller, polymerer, keramikk og kompositter – og lære å velge riktig materiale til ulike formål.

For å velge riktig materiale trenger vi å forstå noen grunnleggende materialegenskaper: styrke, hardhet, stivhet, duktilitet, tetthet, korrosjonsbestandighet og termisk ledningsevne.`,
    },

    // --- TEORI: Materialegenskaper ---
    {
      id: 'tof1-6-4-def-egenskaper',
      type: 'definition',
      title: 'Viktige materialegenskaper',
      content: `Materialers egenskaper bestemmer hva de kan brukes til. Her er de viktigste:

- **Styrke:** Evnen til å tåle belastning uten å gå i stykker. Måles som spenning (kraft per areal) i pascal (Pa) eller megapascal (MPa). $\\sigma = \\frac{F}{A}$

- **Stivhet (E-modul):** Motstand mot elastisk deformasjon. Et stivt materiale bøyer seg lite under belastning. Stål har svært høy E-modul, mens gummi har lav.

- **Hardhet:** Motstand mot riper og inntrykk. Diamant er det hardeste naturlige materialet.

- **Duktilitet:** Evnen til å tøyes og formes uten å sprekke. Duktile materialer (f.eks. kobber, aluminium) kan trekkes til tråder. Det motsatte er **sprøtt** (f.eks. glass, keramikk).

- **Tetthet:** Masse per volum ($\\rho = \\frac{m}{V}$). Viktig når vekt er avgjørende, som i fly og romfart.

- **Korrosjonsbestandighet:** Evnen til å motstå kjemisk nedbrytning (rust, oksidasjon).

- **Termisk ledningsevne:** Evnen til å lede varme. Metaller leder varme godt, mens plast og keramikk isolerer.`,
    },
    {
      id: 'tof1-6-4-text-egenskaper-utdypning',
      type: 'text',
      content: `### Spenning og tøyning

Når vi tester materialers styrke, bruker vi begrepene **spenning** og **tøyning**.

**Spenning** er kraften fordelt over tverrsnittsarealet:
$$\\sigma = \\frac{F}{A}$$
der $\\sigma$ er spenning i Pa (N/m²), $F$ er kraft i newton (N), og $A$ er areal i m².

**Tøyning** er den relative forlengelsen:
$$\\varepsilon = \\frac{\\Delta L}{L_0}$$
der $\\varepsilon$ er tøyning (dimensjonsløs), $\\Delta L$ er forlengelsen, og $L_0$ er opprinnelig lengde.

**Hookes lov** gjelder for elastisk deformasjon:
$$\\sigma = E \\cdot \\varepsilon$$
der $E$ er elastisitetsmodulen (E-modul, Youngs modul) i pascal.

Når materialet belastes over **flytegrensen**, deformeres det permanent (plastisk deformasjon). Ved enda høyere belastning bryter materialet – dette skjer ved **bruddgrensen**.`,
    },

    // --- EKSEMPEL: Spenning ---
    {
      id: 'tof1-6-4-example-spenning',
      type: 'example',
      title: 'Eksempel: Beregning av spenning',
      problem: 'En ståltråd med tverrsnitt 2,0 mm² belastes med en kraft på 500 N. Beregn spenningen i tråden. Stål har en flytegrense på ca. 250 MPa. Vil tråden tåle belastningen?',
      solution: `**Gjør om arealet til m²:**
$$A = 2{,}0 \\text{ mm}^2 = 2{,}0 \\times 10^{-6} \\text{ m}^2$$

**Beregn spenningen:**
$$\\sigma = \\frac{F}{A} = \\frac{500 \\text{ N}}{2{,}0 \\times 10^{-6} \\text{ m}^2} = 250 \\times 10^6 \\text{ Pa} = 250 \\text{ MPa}$$

**Vurdering:** Spenningen er 250 MPa, som er **lik flytegrensen** for stål. Tråden er på grensen til å deformeres permanent. I praksis bør vi bruke en **sikkerhetsfaktor** (typisk 2–3 ganger), noe som betyr at vi trenger en tykkere tråd eller et sterkere stål for å ha tilstrekkelig sikkerhet.`,
    },

    // --- OPPGAVE 1 ---
    {
      id: 'tof1-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Et materiale som kan tøyes mye uten å sprekke, kalles:',
        options: [
          { id: 'a', text: 'Sprøtt', isCorrect: false },
          { id: 'b', text: 'Duktilt', isCorrect: true },
          { id: 'c', text: 'Hardt', isCorrect: false },
          { id: 'd', text: 'Stivt', isCorrect: false },
        ],
        solution: 'Riktig svar er **duktilt**. Et duktilt materiale kan tøyes og formes uten å sprekke. Eksempler er kobber og aluminium. Det motsatte er sprøtt – et sprøtt materiale (f.eks. glass) sprekker uten vesentlig deformasjon.',
      },
    },

    // --- TEORI: Metaller ---
    {
      id: 'tof1-6-4-def-metaller',
      type: 'definition',
      title: 'Metaller',
      content: `**Metaller** er den mest brukte materialgruppen i konstruksjoner og teknologi. De kjennetegnes av **metallbinding**, der atomene deler elektroner i en «elektronsky» – dette gir metallene deres spesielle egenskaper.

**Generelle egenskaper for metaller:**
- God elektrisk og termisk ledningsevne
- Duktile – kan formes ved valsing, smiing og trekking
- Reflekterende overflate (metallglans)
- Relativt høy styrke og stivhet
- Kan legeres (blandes med andre metaller) for å forbedre egenskaper

**Vanlige metaller og legeringer:**

| Metall/legering | Tetthet (kg/m³) | E-modul (GPa) | Bruksområder |
|---|---|---|---|
| Stål (Fe + C) | 7 850 | 200 | Konstruksjoner, biler, verktøy |
| Aluminium (Al) | 2 700 | 70 | Fly, drikkebokser, fasader |
| Kobber (Cu) | 8 960 | 120 | Elektriske ledninger, rør |
| Titan (Ti) | 4 510 | 115 | Romfart, implantater, sykkelrammer |
| Rustfritt stål | 8 000 | 200 | Kjøkkenutstyr, medisinsk utstyr |

**Legering** betyr å blande et metall med ett eller flere andre grunnstoffer for å forbedre egenskapene. Stål er for eksempel en legering av jern og karbon. Rustfritt stål inneholder i tillegg krom (minst 10,5 %) som gir korrosjonsbeskyttelse.`,
    },

    // --- TEORI: Polymerer ---
    {
      id: 'tof1-6-4-text-polymerer',
      type: 'text',
      content: `### Polymerer (plast)

**Polymerer** er materialer bygd opp av svært lange kjedemolekyler (makromolekyler). De fleste polymerer vi bruker i dag er syntetiske – fremstilt fra petroleum – men det finnes også naturlige polymerer som cellulose, ull og silke.

**Generelle egenskaper for polymerer:**
- Lav tetthet (0,9–2,0 g/cm³) – mye lettere enn metaller
- God korrosjonsbestandighet – ruster ikke
- Elektrisk og termisk isolerende
- Lett å forme og produsere i store mengder
- Varierende styrke – fra fleksibel plastpose til hard hjelm

**Tre hovedtyper polymerer:**

| Type | Egenskaper | Eksempler | Bruksområder |
|---|---|---|---|
| **Termoplast** | Mykes ved oppvarming, kan resirkuleres | Polyetylen (PE), PET, PVC, nylon | Emballasje, flasker, rør, klær |
| **Herdeplast** | Beholder formen ved oppvarming, kan ikke smeltes om | Epoksy, polyester, bakelitt | Kompositter, lim, overflatebehandling |
| **Elastomer** | Stor elastisitet, tøyes og vender tilbake | Gummi, silikon, neopren | Dekk, tetninger, slanger |

**Miljøutfordring:** De fleste syntetiske polymerer brytes svært sakte ned i naturen. Plast i havet og mikroplast er store miljøproblemer. Resirkulering og utvikling av biobaserte og nedbrytbare polymerer er viktige tiltak.`,
    },

    // --- OPPGAVE 2 ---
    {
      id: 'tof1-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken type polymer kan smeltes om og resirkuleres?',
        options: [
          { id: 'a', text: 'Herdeplast', isCorrect: false },
          { id: 'b', text: 'Elastomer', isCorrect: false },
          { id: 'c', text: 'Termoplast', isCorrect: true },
          { id: 'd', text: 'Alle polymerer kan resirkuleres', isCorrect: false },
        ],
        solution: 'Riktig svar er **termoplast**. Termoplaster kan smeltes og formes om gjentatte ganger fordi kjedene bare holdes sammen av svake krefter. Herdeplaster har permanente kryssbindinger og kan ikke smeltes om. Elastomerer har også kryssbindinger, men færre enn herdeplaster.',
      },
    },

    // --- TEORI: Keramikk ---
    {
      id: 'tof1-6-4-text-keramikk',
      type: 'text',
      content: `### Keramikk

**Keramiske materialer** er uorganiske, ikke-metalliske materialer som vanligvis fremstilles ved høytemperaturbehandling (sintring). De kjennetegnes av sterke ioniske og kovalente bindinger mellom atomene.

**Generelle egenskaper for keramikk:**
- Svært hard og slitesterk
- Tåler høye temperaturer (opptil 2 000 °C og mer)
- Sprøtt – brister uten varsel ved overbelastning
- God elektrisk og termisk isolasjon (de fleste typer)
- God korrosjonsbestandighet
- Relativt lav tetthet

**Vanlige keramiske materialer:**

| Materiale | Egenskaper | Bruksområder |
|---|---|---|
| Porselen | Hardt, glatt, elektrisk isolerende | Servise, isolatorer, tannkroner |
| Glass | Gjennomsiktig, sprøtt, kjemisk bestandig | Vinduer, optikk, emballasje |
| Betong | Sterk i trykk, svak i strekk | Bygninger, broer, fundamenter |
| Aluminiumoksid (Al₂O₃) | Ekstremt hardt, varmebestandig | Slipemidler, proteser, elektronikk |
| Silisiumkarbid (SiC) | Svært hardt, høy termisk ledningsevne | Bremseskiver, ovner, halvledere |

**Merk:** Betong er egentlig en blanding (kompositt) av sement, vann, sand og stein, men det keramiske bindemiddelet (sementen) gir den sine grunnleggende egenskaper. Betong er svært sterk i **trykk** (40–80 MPa), men svak i **strekk** – derfor armeres betong med stål.`,
    },

    // --- TEORI: Kompositter ---
    {
      id: 'tof1-6-4-def-kompositter',
      type: 'definition',
      title: 'Komposittmaterialer',
      content: `Et **komposittmateriale** er et materiale som er satt sammen av to eller flere ulike materialer for å oppnå egenskaper som ingen av materialene har alene.

En kompositt består av:
- **Matrise (bindelag):** Materialet som omslutter og holder fibrene sammen (f.eks. epoksy, polyester)
- **Forsterkning:** Materialet som gir styrke og stivhet (f.eks. fibre av glass, karbon, aramid)

**Vanlige kompositter:**

| Kompositt | Matrise | Forsterkning | Bruksområder |
|---|---|---|---|
| Glassfiber (GFK) | Polyester/epoksy | Glassfiber | Båter, tanker, vindturbinblader |
| Karbonfiber (CFK) | Epoksy | Karbonfiber | Fly, sykkelrammer, Formel 1 |
| Armert betong | Betong | Stålstenger | Broer, bygninger |
| Kryssfiner | Lim | Tresjikt i ulike retninger | Bygningsplater, møbler |

**Fordeler med kompositter:**
- Kan skreddersys for spesifikke behov
- Svært høy styrke-til-vekt-ratio (spesielt karbonfiber)
- Korrosjonsbestandige (de fleste)

**Ulemper:**
- Ofte dyrere enn enkeltmaterialer
- Vanskelige å resirkulere
- Kan være sprøe ved slagbelastning
- Krever spesialisert produksjonsutstyr`,
    },

    // --- EKSEMPEL: Materialvalg ---
    {
      id: 'tof1-6-4-example-materialvalg',
      type: 'example',
      title: 'Eksempel: Materialvalg for en sykkelramme',
      problem: 'Hvilke materialer kan brukes til en sykkelramme, og hva er fordeler og ulemper ved hvert alternativ?',
      solution: `**Stål:**
- Styrke: Høy (500–1 000 MPa)
- Vekt: Relativt tung (ramme ca. 2,5–4 kg)
- Fordeler: Billig, lett å reparere og sveise, god komfort (fjærer litt)
- Ulemper: Tung, kan ruste uten overflatebehandling

**Aluminium:**
- Styrke: Middels (200–600 MPa), men lettere enn stål
- Vekt: Lett (ramme ca. 1,5–2,5 kg)
- Fordeler: Lett, ruster ikke, rimelig pris
- Ulemper: Stivere enn stål (hardere sykkeltur), kan ikke repareres like enkelt

**Karbonfiber (kompositt):**
- Styrke: Svært høy, kan skreddersys
- Vekt: Svært lett (ramme ca. 0,7–1,5 kg)
- Fordeler: Ekstremt lett, kan optimalisere stivhet og komfort i ulike retninger
- Ulemper: Dyr, kan sprekke ved slag, vanskelig å reparere, krever spesialisert produksjon

**Titan:**
- Styrke: Høy (800–1 000 MPa)
- Vekt: Mellom stål og aluminium (ramme ca. 1,5–2,0 kg)
- Fordeler: Svært korrosjonsbestandig, god komfort, holdbar
- Ulemper: Svært dyrt, vanskelig å bearbeide

**Konklusjon:** For en hverdagssykkel er aluminium ofte det beste kompromisset. For konkurransesykling velges karbonfiber. For langvarig bruk uten vedlikehold er titan ideelt.`,
    },

    // --- OPPGAVE 3 ---
    {
      id: 'tof1-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor armeres betong med stål?',
        options: [
          { id: 'a', text: 'Fordi betong er for lett uten stål', isCorrect: false },
          { id: 'b', text: 'Fordi betong er svak i strekk, og stål tar opp strekkreftene', isCorrect: true },
          { id: 'c', text: 'Fordi stål gjør betongen lettere å forme', isCorrect: false },
          { id: 'd', text: 'Fordi stål beskytter betongen mot vann', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Betong har svært god trykkstyrke (40–80 MPa), men er svak i strekk (bare 2–5 MPa). Stål har god strekkstyrke, så armering med stål tar opp strekkreftene som betongen ikke tåler. Sammen danner de en kompositt som er sterk i både trykk og strekk.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-6-4-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `### Oppsummering – Materialteknologi

| Materialgruppe | Kjennetegn | Eksempler |
|---|---|---|
| **Metaller** | Duktile, leder varme/strøm, sterke | Stål, aluminium, kobber, titan |
| **Polymerer** | Lette, isolerende, formbare | PE, PET, nylon, gummi |
| **Keramikk** | Harde, sprøe, varmebestandige | Porselen, glass, betong |
| **Kompositter** | Kombinerer egenskaper, skreddersys | Karbonfiber, glassfiber, armert betong |

**Viktige materialegenskaper:**
- Styrke ($\\sigma = F/A$), stivhet (E-modul), hardhet, duktilitet
- Tetthet ($\\rho = m/V$), korrosjonsbestandighet, termisk ledningsevne

**Viktige prinsipper:**
- Materialvalg avhenger av bruksområde og kravspesifikasjon
- Legeringer forbedrer metallenes egenskaper
- Kompositter kombinerer styrken til ulike materialer
- Bærekraft og resirkulerbarhet er viktige faktorer ved materialvalg`,
    },

    // --- SAMLEOPPGAVE 4 ---
    {
      id: 'tof1-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En aluminiumsstang med tverrsnitt 50 mm² belastes med en strekkraft på 10 000 N. E-modulen til aluminium er 70 GPa. Beregn: a) Spenningen i stangen. b) Tøyningen (anta elastisk deformasjon). c) Hvor mye en stang på 2,0 m forlenges.',
        hints: ['a) $\\sigma = F/A$ (husk å gjøre om mm² til m²). b) $\\varepsilon = \\sigma / E$. c) $\\Delta L = \\varepsilon \\cdot L_0$.'],
        solution: `**a) Spenning:**
$$A = 50 \\text{ mm}^2 = 50 \\times 10^{-6} \\text{ m}^2$$
$$\\sigma = \\frac{F}{A} = \\frac{10\\,000}{50 \\times 10^{-6}} = 200 \\times 10^6 \\text{ Pa} = 200 \\text{ MPa}$$

**b) Tøyning:**
$$\\varepsilon = \\frac{\\sigma}{E} = \\frac{200 \\times 10^6}{70 \\times 10^9} = 2{,}86 \\times 10^{-3} \\approx 0{,}00286$$

**c) Forlengelse:**
$$\\Delta L = \\varepsilon \\cdot L_0 = 0{,}00286 \\times 2{,}0 = 0{,}00571 \\text{ m} \\approx 5{,}7 \\text{ mm}$$

Stangen forlenges ca. 5,7 mm under denne belastningen.`,
      },
    },

    // --- SAMLEOPPGAVE 5 ---
    {
      id: 'tof1-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du skal designe en bærekraftig vannflaske. Vurder minst tre ulike materialer (f.eks. glass, plast, aluminium, stål) og sammenlign dem med hensyn til: vekt, holdbarhet, miljøpåvirkning, resirkulerbarhet, pris og brukervennlighet. Gi en begrunnet anbefaling av det beste materialet.',
        hints: ['Tenk på hele livsløpet: produksjon, bruk og avfallshåndtering. Vurder også hvor mange ganger flasken gjenbrukes før den kasseres.'],
        solution: `**Sammenligning:**

| Egenskap | Glass | PET-plast | Aluminium | Rustfritt stål |
|---|---|---|---|---|
| **Vekt** | Tung (400–500 g) | Svært lett (30–50 g) | Lett (100–150 g) | Middels (200–350 g) |
| **Holdbarhet** | Sprøtt, knuses | Lett å deformere | God | Svært god |
| **Miljø (produksjon)** | Energikrevende | Petroleumsbasert | Energikrevende | Energikrevende |
| **Resirkulerbarhet** | 100 % uendelig | Begrenset, kvalitet synker | 100 % uendelig | 100 % uendelig |
| **Pris** | Middels | Svært billig | Middels | Høy |
| **Smak/kjemi** | Inert, ingen smak | Kan avgi stoffer | Inert med belegg | Inert |

**Anbefaling:** For en **bærekraftig gjenbruksflaske** er **rustfritt stål** det beste valget:
- Svært holdbar – varer i mange år uten å bli ødelagt
- Inert – tilfører ikke smak eller kjemikalier til vannet
- 100 % resirkulerbar uten kvalitetstap
- Isolerer godt (dobbeltvegg-modeller holder vannet kaldt/varmt)
- Miljøavtrykket fra produksjonen tjenes raskt inn gjennom lang levetid

Aluminium er et godt alternativ for de som prioriterer lav vekt. Engangs PET-flasker bør unngås til fordel for gjenbruksløsninger.`,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.5: Nanoteknologi og nye materialer
// ============================================================================

export const CHAPTER_TOF_1_6_5: TextbookChapter = {
  id: 'tof-1-6-5',
  courseId: 'tof-1',
  chapterNumber: '6.5',
  title: 'Nanoteknologi og nye materialer',
  description: 'Nanoskala, nanomaterialer og fremtidens materialer.',
  estimatedMinutes: 25,
  competenceGoals: ['beskrive nanoteknologiens muligheter'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-6-5-intro',
      type: 'text',
      content: `## Nanoteknologi og nye materialer

Tenk deg at du kunne bygge materialer atom for atom, og dermed skreddersy egenskapene nøyaktig slik du ønsker. Dette er ikke lenger science fiction – det er kjernen i **nanoteknologi**.

Nanoteknologi handler om å forstå, kontrollere og utnytte materialer på **nanoskalaen** – altså i størrelsesordenen 1–100 nanometer (nm). Én nanometer er en milliondels millimeter, eller omtrent 100 000 ganger tynnere enn et menneskehår.

På denne skalaen oppfører materialer seg annerledes enn vi er vant til. Gull, som normalt er gyllen og kjemisk stabilt, kan bli rødt eller blått som nanopartikler – og plutselig fungere som en katalysator. Karbon, som vi kjenner som blyantgrafitt, kan danne rør som er sterkere enn stål.

I dette kapittelet skal du lære om nanoskalaen, viktige nanomaterialer som grafén og karbonnanorør, og hvordan nanoteknologi kan revolusjonere alt fra medisin til energi.`,
    },

    // --- TEORI: Nanoskalaen ---
    {
      id: 'tof1-6-5-def-nanoskala',
      type: 'definition',
      title: 'Nanoskalaen',
      content: `**Nanoskalaen** omfatter strukturer med dimensjoner mellom 1 og 100 nanometer (nm).

- 1 nm = $10^{-9}$ m = 0,000 000 001 m
- Et vannmolekyl er ca. 0,3 nm i diameter
- DNA-dobbeltheliks er ca. 2 nm bred
- Et virus er typisk 20–300 nm
- Et rødt blodlegeme er ca. 7 000 nm (7 μm)

**Hvorfor er nanoskalaen spesiell?**

På nanoskalaen dominerer **overflateeffekter** over volumeffekter. Når et materiale deles i stadig mindre biter, øker forholdet mellom overflateareal og volum dramatisk. En kube med 1 cm sider har et overflateareal på 6 cm². Deler vi den i nanopartikler med 10 nm sider, får vi et samlet overflateareal på ca. 600 m² – altså 10 millioner ganger mer overflate fra samme mengde materiale.

Denne enorme overflaten betyr at **kvantemekaniske effekter** og **overflatekjemi** blir dominerende, noe som gir nanomaterialer helt andre egenskaper enn det samme materialet i større skala.`,
    },
    {
      id: 'tof1-6-5-text-nanoskala-egenskaper',
      type: 'text',
      content: `### Endrede egenskaper på nanoskalaen

Når materialer krympes til nanostørrelse, endres flere egenskaper fundamentalt:

**Optiske egenskaper:** Gullnanopartikler absorberer lys ved andre bølgelengder enn vanlig gull. Avhengig av størrelsen kan de fremstå røde, lilla eller blå. Dette skyldes **overflateplasmoner** – kollektive svingninger av elektroner på partikkelens overflate.

**Mekaniske egenskaper:** Nanomaterialer kan være mye sterkere enn samme materiale i bulk. Karbonnanorør har en strekkstyrke som er over 100 ganger større enn stål, men veier bare en sjettedel.

**Kjemiske egenskaper:** Den enorme overflaten gjør nanomaterialer til svært effektive katalysatorer. Gullnanopartikler kan katalysere kjemiske reaksjoner, selv om vanlig gull er kjemisk inert.

**Elektriske egenskaper:** Halvledende nanopartikler (kvanteprikker) endrer sine elektroniske egenskaper med størrelsen. Ved å justere størrelsen kan vi «tune» fargen på lyset de sender ut.

**Termiske egenskaper:** Varmeledningsevnen kan endres dramatisk. Grafén leder varme bedre enn noe annet kjent materiale.`,
    },

    // --- EKSEMPEL: Overflate-til-volum ---
    {
      id: 'tof1-6-5-example-overflate',
      type: 'example',
      title: 'Eksempel: Overflate-til-volum-forholdet',
      problem: 'En gullkube har sider på 1 cm. Beregn overflatearealet. Dersom den samme gullmengden deles i kuber med sider på 10 nm, hvor mange kuber får vi, og hva blir det totale overflatearealet?',
      solution: `**Overflate av stor kube:**
$$A = 6 \\cdot s^2 = 6 \\cdot (0{,}01)^2 = 6 \\cdot 10^{-4} \\text{ m}^2 = 6 \\text{ cm}^2$$

**Volum av stor kube:**
$$V_{\\text{stor}} = (0{,}01)^3 = 10^{-6} \\text{ m}^3$$

**Volum av én nanokube:**
$$V_{\\text{nano}} = (10 \\cdot 10^{-9})^3 = 10^{-24} \\text{ m}^3$$

**Antall nanokuber:**
$$n = \\frac{V_{\\text{stor}}}{V_{\\text{nano}}} = \\frac{10^{-6}}{10^{-24}} = 10^{18} \\text{ (en trillion kuber)}$$

**Totalt overflateareal:**
$$A_{\\text{total}} = n \\cdot 6 \\cdot s_{\\text{nano}}^2 = 10^{18} \\cdot 6 \\cdot (10^{-8})^2 = 10^{18} \\cdot 6 \\cdot 10^{-16} = 600 \\text{ m}^2$$

**Svar:** Overflatearealet øker fra 6 cm² til 600 m² – en økning på 10 millioner ganger! Denne enorme overflaten er nøkkelen til nanomaterialers unike egenskaper.`,
    },

    // --- OPPGAVE 1 ---
    {
      id: 'tof1-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er størrelsen på nanoskalaen?',
        options: [
          { id: 'a', text: '1–100 millimeter', isCorrect: false },
          { id: 'b', text: '1–100 mikrometer', isCorrect: false },
          { id: 'c', text: '1–100 nanometer', isCorrect: true },
          { id: 'd', text: '1–100 pikometer', isCorrect: false },
        ],
        solution: 'Nanoskalaen defineres som strukturer med dimensjoner mellom 1 og 100 nanometer (nm). 1 nm = $10^{-9}$ m. Riktig svar er **1–100 nanometer**.',
      },
    },

    // --- TEORI: Grafén ---
    {
      id: 'tof1-6-5-def-grafen',
      type: 'definition',
      title: 'Grafén',
      content: `**Grafén** er et todimensjonalt materiale som består av karbonatomer arrangert i et heksagonalt (bikube-formet) mønster – altså ett enkelt atomlag tykt.

Grafén ble isolert for første gang i 2004 av Andre Geim og Konstantin Novoselov ved University of Manchester. De brukte simpelthen tape for å skalle av lag etter lag fra grafitt helt til de hadde et enkelt lag. For denne oppdagelsen fikk de Nobelprisen i fysikk i 2010.

**Grafénets egenskaper er oppsiktsvekkende:**

| Egenskap | Grafén | Sammenlignet med |
|---|---|---|
| **Strekkstyrke** | 130 GPa | 200× sterkere enn stål |
| **Varmeledningsevne** | 5 000 W/(m·K) | 10× bedre enn kobber |
| **Elektronmobilitet** | 200 000 cm²/(V·s) | 140× bedre enn silisium |
| **Tykkelse** | 0,34 nm | Ett atom tykt |
| **Tetthet** | 0,77 mg/m² | Nesten vektløst |

Grafén er altså det sterkeste materialet som er målt, den beste varme- og strømlederen, og samtidig nesten gjennomsiktig og fleksibelt.`,
    },
    {
      id: 'tof1-6-5-text-grafen-bruk',
      type: 'text',
      content: `### Bruksområder for grafén

Grafénets unike kombinasjon av egenskaper gjør det relevant for en rekke teknologiske anvendelser:

**Elektronikk:** Grafén kan brukes i ultrarask elektronikk fordi elektronene beveger seg nesten uten motstand. Fremtidige prosessorer kan bli raskere og mer energieffektive. Fleksible, bøybare skjermer basert på grafén er allerede demonstrert.

**Energilagring:** Grafénbaserte superkondensatorer kan lades på sekunder og har mye lengre levetid enn tradisjonelle batterier. Grafén kan også forbedre kapasiteten i litiumionbatterier.

**Komposittmaterialer:** Selv en liten mengde grafén tilsatt i plast eller metaller kan øke styrken dramatisk. Grafénforsterket plast brukes allerede i noen sportsprodukter.

**Vannrensing:** Grafénmembraner kan filtrere salt fra sjøvann og fjerne forurensninger – med mye lavere energiforbruk enn tradisjonelle metoder.

**Medisin:** Grafénoksid kan brukes til målrettet levering av legemidler i kroppen og som sensormateriale for å oppdage sykdommer på et tidlig stadium.

En utfordring er at det fortsatt er vanskelig å produsere grafén av høy kvalitet i store mengder til en rimelig pris. Forskningen jobber intensivt med å løse dette.`,
    },

    // --- EKSEMPEL: Grafén-styrke ---
    {
      id: 'tof1-6-5-example-grafen',
      type: 'example',
      title: 'Eksempel: Grafénets styrke',
      problem: 'Grafén har en strekkstyrke på 130 GPa, mens konstruksjonsstål typisk har 400 MPa. Hvor mange ganger sterkere er grafén enn stål?',
      solution: `**Omregning til samme enhet:**
$$130 \\text{ GPa} = 130\\,000 \\text{ MPa}$$

**Forholdet:**
$$\\frac{130\\,000 \\text{ MPa}}{400 \\text{ MPa}} = 325$$

**Svar:** Grafén er ca. **325 ganger sterkere** enn konstruksjonsstål (strekkstyrke). Likevel er grafén ekstremt lett – ett lag er bare 0,34 nm tykt. Denne kombinasjonen av styrke og lav vekt gjør grafén til et drømmemateriale for ingeniører.

*Merk: I praksis oppnår man ikke denne styrken i store strukturer fordi grafén inneholder defekter og er vanskelig å produsere i store, sammenhengende flak.*`,
    },

    // --- TEORI: Karbonnanorør ---
    {
      id: 'tof1-6-5-def-nanorør',
      type: 'definition',
      title: 'Karbonnanorør',
      content: `**Karbonnanorør** (CNT – Carbon Nanotubes) kan tenkes på som et grafénark som er rullet opp til et rør. Rørene har en diameter på typisk 1–50 nm og kan være opptil flere millimeter lange.

Det finnes to hovedtyper:

- **Enkeltvegget karbonnanorør (SWCNT):** Består av ett enkelt lag karbon rullet til et rør. Diameter typisk 1–2 nm.
- **Flervegget karbonnanorør (MWCNT):** Består av flere konsentriske rør inni hverandre, som russiske dukker. Diameter typisk 5–50 nm.

**Egenskaper:**
- Strekkstyrke: opptil 63 GPa (over 100× sterkere enn stål)
- E-modul: ca. 1 000 GPa (5× stiffer enn stål)
- Strømtetthet: 1 000× høyere enn kobber
- Termisk ledningsevne: ca. 3 500 W/(m·K)
- Kan være enten metalliske eller halvledende, avhengig av hvordan grafénlaget er rullet

Karbonnanorør brukes allerede i komposittmaterialer for sykkelrammer, tennisracketer og romfartsindustrien, samt som tilsetning i batterier og elektronikk.`,
    },

    // --- OPPGAVE 2 ---
    {
      id: 'tof1-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er hovedgrunnen til at nanomaterialer har andre egenskaper enn det samme materialet i større skala?',
        options: [
          { id: 'a', text: 'Atomene endrer masse på nanoskalaen', isCorrect: false },
          { id: 'b', text: 'Gravitasjonskraften blir sterkere for små partikler', isCorrect: false },
          { id: 'c', text: 'Overflate-til-volum-forholdet øker dramatisk, og overflateeffekter dominerer', isCorrect: true },
          { id: 'd', text: 'Nanomaterialer er alltid laget av andre grunnstoffer enn bulk-materialer', isCorrect: false },
        ],
        solution: 'Når materialer krympes til nanostørrelse, øker overflate-til-volum-forholdet dramatisk. Overflateatomene oppfører seg annerledes enn atomene inne i materialet, og kvantemekaniske effekter blir viktigere. Riktig svar er **C**.',
      },
    },

    // --- TEORI: Fremtidens nanomaterialer ---
    {
      id: 'tof1-6-5-text-fremtid',
      type: 'text',
      content: `### Fremtidens nanomaterialer og utfordringer

Nanoteknologien utvikler seg raskt, og flere spennende materialer er under utvikling:

**Kvanteprikker** er halvledende nanopartikler (2–10 nm) som sender ut lys med en farge som avhenger av størrelsen. De brukes allerede i QLED-TV-er og forskes på for bruk i solceller og medisinsk avbildning.

**Aerogeler** er ekstremt lette materialer (opptil 99,8 % luft) med fantastiske isoleringsegenskaper. Silika-aerogel kalles «frossen røyk» og brukes blant annet av NASA som varmeisolasjon på romsonder.

**Selvhelende materialer** inneholder mikrokapsler med reparasjonsmidler som frigjøres når materialet skades. Forskning pågår for å lage maling, betong og plast som «leges» av seg selv.

**Etiske og miljømessige utfordringer:**
Nanoteknologi reiser også viktige spørsmål. Nanopartikler kan potensielt trenge inn i celler og organer på måter større partikler ikke kan. Helseeffektene av langvarig eksponering for nanomaterialer er ikke fullt kartlagt. Det er også bekymring for hva som skjer når nanomaterialer havner i naturen.

Føre-var-prinsippet brukes derfor aktivt i regulering av nanomaterialer. EU krever merking av produkter som inneholder nanomaterialer, og arbeidsmiljøregler for håndtering av nanopartikler er innført.`,
    },

    // --- OPPSUMMERING ---
    {
      id: 'tof1-6-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Nanoskalaen** (1–100 nm) gir materialer unike egenskaper fordi overflateeffekter dominerer
- **Overflate-til-volum-forholdet** øker dramatisk for nanopartikler, noe som endrer optiske, mekaniske, kjemiske og elektriske egenskaper
- **Grafén** er et enkelt atomlag av karbon – verdens sterkeste, tynneste og best ledende materiale
- **Karbonnanorør** er opprullet grafén med ekstrem styrke og unike elektriske egenskaper
- **Kvanteprikker** er halvledende nanopartikler med størrelsesavhengige optiske egenskaper
- Nanoteknologi gir enorme muligheter innen elektronikk, energi, medisin og materialer
- Det finnes viktige etiske og miljømessige utfordringer knyttet til nanomaterialer`,
    },

    // --- SAMLEOPPGAVE 3 ---
    {
      id: 'tof1-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Grafén og karbonnanorør er begge laget av rent karbon. Forklar sammenhengen mellom dem, og beskriv minst to egenskaper de har til felles og én viktig forskjell.',
        hints: ['Tenk på grafén som et flatt ark og karbonnanorør som et opprullet ark. Begge har heksagonal karbonstruktur.'],
        solution: `**Sammenheng:** Karbonnanorør kan beskrives som grafénark som er rullet opp til sylindriske rør. Begge materialene består utelukkende av karbonatomer i et heksagonalt gittermønster med sp²-hybridiserte bindinger.

**Felles egenskaper:**
1. **Ekstrem styrke:** Begge er blant de sterkeste materialene som er kjent. Grafén har en strekkstyrke på 130 GPa, karbonnanorør opptil 63 GPa.
2. **Svært god elektrisk ledningsevne:** Begge leder strøm godt fordi de delokaliserte elektronene i det konjugerte π-systemet beveger seg fritt.

**Viktig forskjell:** Grafén er **todimensjonalt** (et flatt lag), mens karbonnanorør er **endimensjonale** (rørformede). Dette betyr at grafén leder strøm og varme i planet, mens karbonnanorør primært leder langs rørets lengderetning. I tillegg kan karbonnanorør være enten metalliske eller halvledende avhengig av rullevinkelen (kiraliteten), mens grafén alltid er en halvmetall.`,
      },
    },

    // --- SAMLEOPPGAVE 4 ---
    {
      id: 'tof1-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter muligheter og utfordringer ved bruk av nanoteknologi i medisin. Gi minst to eksempler på medisinske bruksområder og to potensielle risikoer.',
        hints: ['Tenk på nanopartiklers evne til å trenge inn i celler, målrettet levering av medisiner, og utfordringer med toksisitet og langtidseffekter.'],
        solution: `**Muligheter i medisin:**

1. **Målrettet medisinlevering:** Nanopartikler kan lastes med legemidler og utstyres med overflatemolekyler som gjenkjenner kreftceller. Medisinen leveres direkte til svulsten, noe som gir høyere dose der det trengs og færre bivirkninger i resten av kroppen. Eksempel: liposomale nanopartikler brukes allerede i kreftbehandling.

2. **Diagnostikk og avbildning:** Kvanteprikker og magnetiske nanopartikler kan brukes som kontrastmidler i MR og fluorescensavbildning. De gir skarpere bilder og kan oppdage sykdommer på et tidligere stadium enn tradisjonelle metoder.

**Potensielle risikoer:**

1. **Ukjent langtidstoksisitet:** Nanopartikler kan krysse biologiske barrierer (som blod-hjerne-barrieren) som større partikler ikke kan passere. Vi vet ennå ikke nok om hva som skjer når nanopartikler akkumuleres i organer over lang tid.

2. **Miljøpåvirkning:** Nanopartikler som slippes ut i naturen kan tas opp av organismer i næringskjeden. Effektene av dette er dårlig kartlagt, og det er usikkert om nanopartiklene brytes ned eller akkumuleres.

En ansvarlig utvikling av nanomedisin krever grundig testing, føre-var-tilnærming og tydelig regulering.`,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.6: Energi i Norge
// ============================================================================

export const CHAPTER_TOF_1_6_6: TextbookChapter = {
  id: 'tof-1-6-6',
  courseId: 'tof-1',
  chapterNumber: '6.6',
  title: 'Energi i Norge',
  description: 'Norsk energiproduksjon, kraftsystemet og energipolitikk.',
  estimatedMinutes: 30,
  competenceGoals: ['analysere Norges energisituasjon'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-6-6-intro',
      type: 'text',
      content: `## Energi i Norge

Norge har en helt spesiell posisjon i verdens energilandskap. Vi er blant verdens største eksportører av olje og gass, og samtidig har vi en av verdens reneste strømproduksjoner, basert nesten utelukkende på fornybar vannkraft. Denne doble rollen – som fossil energieksportør og fornybar strømprodusent – er sentral i norsk politikk og samfunnsdebatt.

I 2023 produserte Norge ca. 154 TWh elektrisitet, hvorav **vannkraft** sto for om lag 89 %, **vindkraft** for ca. 10 %, og **termisk kraft** for resten. Samtidig produserte norsk sokkel olje og gass tilsvarende over 2 000 TWh energi – mer enn ti ganger Norges eget strømforbruk.

I dette kapittelet skal du lære om Norges energiproduksjon, forstå hvordan kraftsystemet er bygget opp, og kunne analysere sentrale spørsmål i norsk energipolitikk.`,
    },

    // --- TEORI: Vannkraft ---
    {
      id: 'tof1-6-6-def-vannkraft',
      type: 'definition',
      title: 'Vannkraft i Norge',
      content: `**Vannkraft** er hjørnesteinen i Norges strømforsyning. Norge har ca. 1 750 vannkraftverk som til sammen har en installert effekt på ca. 33 000 MW.

**Hvordan fungerer et vannkraftverk?**

1. Vann samles i et **magasin** (reservoar) i fjellet
2. Vannet ledes gjennom en **trykksjakt** (tunnel/rør) nedover
3. Vannet treffer en **turbin** som roterer
4. Turbinen driver en **generator** som produserer elektrisitet
5. Vannet ledes tilbake til elven nedenfor kraftverket

**Energiomformingen:**
$$E_{\\text{potensiell}} \\rightarrow E_{\\text{kinetisk}} \\rightarrow E_{\\text{mekanisk (rotasjon)}} \\rightarrow E_{\\text{elektrisk}}$$

**Norges fordeler for vannkraft:**
- Mye nedbør (vest- og fjellstrøk)
- Bratte fjell gir stor fallhøyde
- Naturlige innsjøer og daler fungerer som magasiner
- Lang tradisjon og godt utbygd infrastruktur

Vannkraftens virkningsgrad er svært høy – typisk **85–95 %** – langt bedre enn fossile kraftverk (35–60 %).`,
    },
    {
      id: 'tof1-6-6-text-vannkraft-utdypning',
      type: 'text',
      content: `### Regulerbar og uregulerbar vannkraft

Et viktig skille i vannkraft er mellom **regulerbare** og **uregulerbare** kraftverk.

**Regulerbare vannkraftverk** har store magasiner som kan lagre vann over uker, måneder eller år. Disse kan tilpasse produksjonen til etterspørselen – produsere mer når prisene er høye og spare vann når prisene er lave. Norge har verdens sjette største magasinkapasitet.

**Uregulerbare elvekraftverk** produserer strøm basert på vannføringen i elven. De har lite eller ingen magasinkapasitet og produserer mest på våren og sommeren under snøsmeltingen.

**Pumpekraftverk** er en spesiell type som kan pumpe vann tilbake opp i magasinet når strømprisen er lav, og slippe det ned igjen når prisen er høy. De fungerer altså som store «batterier». Pumpekraftverket Saurdal i Suldal er Nordens største med en kapasitet på 320 MW.

Norges evne til å regulere vannkraften gjør oss til en viktig «balansekraft» for land med mye uregulert vindkraft, som Danmark og Tyskland. Via utenlandskabler kan Norge importere billig vindkraft og eksportere regulerbar vannkraft.`,
    },

    // --- EKSEMPEL: Vannkraftberegning ---
    {
      id: 'tof1-6-6-example-vannkraft',
      type: 'example',
      title: 'Eksempel: Energi i et vannkraftverk',
      problem: 'Et vannkraftverk har et magasin med en fallhøyde på 500 m. Hvor mye potensiell energi har 1 m³ vann (masse = 1 000 kg) i magasinet? Hva er den elektriske energien dersom virkningsgraden er 90 %?',
      solution: `**Potensiell energi:**
$$E_p = mgh = 1\\,000 \\cdot 9{,}81 \\cdot 500 = 4\\,905\\,000 \\text{ J} \\approx 4{,}9 \\text{ MJ}$$

**Elektrisk energi med virkningsgrad:**
$$E_{\\text{el}} = \\eta \\cdot E_p = 0{,}90 \\cdot 4{,}9 = 4{,}4 \\text{ MJ}$$

**Omregning til kWh:**
$$E_{\\text{el}} = \\frac{4{,}4 \\cdot 10^6}{3{,}6 \\cdot 10^6} \\approx 1{,}2 \\text{ kWh}$$

**Svar:** 1 m³ vann som faller 500 m gir ca. 4,9 MJ potensiell energi. Med 90 % virkningsgrad produseres ca. 4,4 MJ = 1,2 kWh elektrisitet. Det tilsvarer omtrent nok strøm til å kjøre en vaskemaskin i én time.`,
    },

    // --- OPPGAVE 1 ---
    {
      id: 'tof1-6-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Omtrent hvor stor andel av Norges strømproduksjon kommer fra vannkraft?',
        options: [
          { id: 'a', text: 'Ca. 50 %', isCorrect: false },
          { id: 'b', text: 'Ca. 70 %', isCorrect: false },
          { id: 'c', text: 'Ca. 89 %', isCorrect: true },
          { id: 'd', text: 'Ca. 99 %', isCorrect: false },
        ],
        solution: 'I 2023 sto vannkraft for omtrent 89 % av norsk strømproduksjon. Vindkraft sto for ca. 10 %, og resten kom fra termisk kraft. Riktig svar er **ca. 89 %**.',
      },
    },

    // --- TEORI: Olje og gass ---
    {
      id: 'tof1-6-6-def-olje-gass',
      type: 'definition',
      title: 'Olje og gass i Norge',
      content: `**Norsk petroleumsvirksomhet** startet med funnet av Ekofisk-feltet i 1969. Siden da har olje og gass vært Norges viktigste eksportvare og inntektskilde.

**Nøkkeltall (2023):**
- Norge er Europas største gassleverandør (ca. 30 % av EUs gassforbruk)
- Verdens sjuende største oljeeksportør
- Petroleumsinntektene utgjør ca. 25 % av statens inntekter
- Oljefondet (Statens pensjonsfond utland) er verdens største statlige fond, ca. 16 000 mrd. kr

**Petroleumsvirksomheten skaper et klimaparadoks:**
Norge produserer ren strøm hjemme, men eksporterer fossil energi som genererer store CO₂-utslipp i andre land. Utslippene fra norskprodusert olje og gass i utlandet er omtrent ti ganger høyere enn Norges samlede innenlandsutslipp.

**Handlingsregelen:** Norge sparer størstedelen av oljeinntektene i Oljefondet og bruker kun den forventede realavkastningen (ca. 3 % per år) over statsbudsjettet. Denne regelen sikrer at oljeformuen også kommer fremtidige generasjoner til gode.`,
    },
    {
      id: 'tof1-6-6-text-kraftsystem',
      type: 'text',
      content: `### Det norske kraftsystemet

Det norske kraftsystemet er et komplekst nettverk som forbinder produsenter, forbrukere og utenlandsforbindelser.

**Kraftnettet** deles i tre nivåer:
- **Sentralnettet** (420/300 kV): Hovedveinettet for strøm, driftet av Statnett. Transporterer strøm over lange avstander.
- **Regionalnettet** (132/66 kV): Forbinder sentralnettet med lokale forbrukere og mindre produsenter.
- **Distribusjonsnettet** (22/11 kV og 230/400 V): Leverer strøm til husholdninger og næringsliv.

**Utenlandskabler:**
Norge har kabler til Sverige, Danmark, Nederland, Tyskland og Storbritannia. Disse gjør det mulig å:
- Eksportere overskuddskraft når magasinene er fulle
- Importere strøm i tørre år med lite vann
- Balansere uregulert vindkraft i nabolandene

**Nord Pool:** Den nordiske kraftbørsen der strøm handles. Strømprisen settes time for time basert på tilbud (produksjon) og etterspørsel (forbruk). Norge er delt i fem prisområder (NO1–NO5) fordi overføringskapasiteten mellom landsdelene er begrenset.

Strømprisen påvirkes av mange faktorer: nedbør, temperatur, vindforhold, gasspriser i Europa, og kapasiteten på utenlandskablene.`,
    },

    // --- EKSEMPEL: Strømpris ---
    {
      id: 'tof1-6-6-example-strompris',
      type: 'example',
      title: 'Eksempel: Strømforbruk og kostnad',
      problem: 'En husholdning bruker 20 000 kWh strøm per år. Strømprisen er 1,50 kr/kWh (inkludert nettleie og avgifter). Hva koster strømmen per år? Hvis familien reduserer forbruket med 15 %, hvor mye sparer de?',
      solution: `**Årlig strømkostnad:**
$$\\text{Kostnad} = 20\\,000 \\cdot 1{,}50 = 30\\,000 \\text{ kr}$$

**Besparelse ved 15 % reduksjon:**
$$\\text{Spart forbruk} = 20\\,000 \\cdot 0{,}15 = 3\\,000 \\text{ kWh}$$
$$\\text{Besparelse} = 3\\,000 \\cdot 1{,}50 = 4\\,500 \\text{ kr}$$

**Svar:** Strømmen koster 30 000 kr per år. Ved å redusere forbruket med 15 % sparer familien 4 500 kr. Tiltak som lavere innetemperatur, LED-belysning, og smart styring av varmtvann kan gi betydelige besparelser.`,
    },

    // --- OPPGAVE 2 ---
    {
      id: 'tof1-6-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-6-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er hovedfunksjonen til et pumpekraftverk?',
        options: [
          { id: 'a', text: 'Å pumpe opp grunnvann for drikkevannsforsyning', isCorrect: false },
          { id: 'b', text: 'Å lagre energi ved å pumpe vann tilbake til magasinet og produsere strøm ved å slippe det ned igjen', isCorrect: true },
          { id: 'c', text: 'Å pumpe sjøvann for avsalting og rensing', isCorrect: false },
          { id: 'd', text: 'Å pumpe olje opp fra havbunnen', isCorrect: false },
        ],
        solution: 'Et pumpekraftverk fungerer som et stort «batteri». Når strømprisen er lav, pumpes vann opp i magasinet (energilagring). Når prisen er høy, slippes vannet ned gjennom turbiner for å produsere strøm. Riktig svar er **B**.',
      },
    },

    // --- TEORI: Energipolitikk ---
    {
      id: 'tof1-6-6-text-energipolitikk',
      type: 'text',
      content: `### Norsk energipolitikk og det grønne skiftet

Norsk energipolitikk balanserer mellom tre hensyn: **forsyningssikkerhet**, **klimaforpliktelser** og **verdiskaping**.

**Klimamål:** Norge har forpliktet seg til å kutte klimagassutslippene med minst 55 % innen 2030 sammenlignet med 1990-nivå, og å bli et lavutslippssamfunn innen 2050.

**Elektrifisering** er en nøkkelstrategi. Ved å erstatte fossil energibruk med elektrisitet fra fornybare kilder kan utslippene kuttes. Eksempler:
- Elektrifisering av biler (Norge er verdensledende på elbiler)
- Elektrifisering av ferger og skip
- Elektrifisering av offshoreinstallasjoner (erstatte gassturbiner med strøm fra land)
- Elektriske varmepumper i stedet for oljefyring

**Havvind** er et satsingsområde. Norge har åpnet to havvindområder: Sørlige Nordsjø II og Utsira Nord. Målet er 30 GW havvindkapasitet innen 2040 – nok til å doble norsk strømproduksjon.

**Hydrogen** utforskes som energibærer for tungtransport, industri og energilagring. Grønt hydrogen (produsert med fornybar strøm) kan bli en viktig norsk eksportvare.

**Kontroversielle spørsmål:**
- Bør Norge slutte å lete etter ny olje og gass?
- Skal utenlandskabler utvides, selv om det kan gi høyere strømpriser i Norge?
- Hvordan balansere vindkraftutbygging mot naturvern?
- Bør Norge satse på kjernekraft?`,
    },

    // --- OPPSUMMERING ---
    {
      id: 'tof1-6-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Norges strømproduksjon domineres av **vannkraft** (ca. 89 %), med økende bidrag fra **vindkraft** (ca. 10 %)
- Regulerbar vannkraft gir Norge en unik evne til å tilpasse produksjonen og balansere andre lands uregulerte fornybare kraft
- Norge er Europas største **gassleverandør** og en stor oljeeksportør, med inntektene forvaltet gjennom **Oljefondet**
- Kraftsystemet har tre nivåer og er koblet til utlandet via kabler – strømprisen settes på **Nord Pool**
- Norsk energipolitikk satser på **elektrifisering**, **havvind** og **hydrogen** for å nå klimamålene
- Det finnes viktige politiske dilemmaer knyttet til olje, utenlandskabler, vindkraft og naturvern`,
    },

    // --- SAMLEOPPGAVE 3 ---
    {
      id: 'tof1-6-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-6-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva «klimaparadokset» i norsk energipolitikk innebærer. Diskuter argumenter for og mot at Norge skal fortsette å produsere olje og gass.',
        hints: ['Tenk på at Norge har ren strøm hjemme, men eksporterer fossil energi. Vurder økonomiske, klimamessige og globale perspektiver.'],
        solution: `**Klimaparadokset:**
Norge produserer nesten all sin elektrisitet fra fornybar vannkraft og har relativt lave innenlandske klimagassutslipp. Samtidig er Norge en av verdens største eksportører av olje og gass – fossil energi som genererer enorme CO₂-utslipp når den forbrennes i andre land. Utslippene fra norskprodusert fossil energi i utlandet er ca. ti ganger høyere enn Norges innenlandsutslipp.

**Argumenter for fortsatt produksjon:**
- Olje og gass gir enorme inntekter som finansierer velferdsstaten
- Verden trenger energi – hvis Norge slutter, overtar andre produsenter (muligens med høyere utslipp per enhet)
- Norsk gassproduksjon kan erstatte kull i Europa, noe som halverer utslippene
- Kompetansen fra olje og gass brukes i utviklingen av havvind og karbonfangst

**Argumenter mot:**
- Paris-avtalen krever at mesteparten av kjente fossile reserver blir liggende
- Norge bør gå foran som foregangsland i klimapolitikken
- Risiko for «stranded assets» dersom verden lykkes med energiomstillingen
- Petroleumsvirksomheten binder opp kompetanse og kapital som kunne brukes på fornybar energi`,
      },
    },

    // --- SAMLEOPPGAVE 4 ---
    {
      id: 'tof1-6-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et vannkraftverk har et magasin på 500 millioner m³ vann og en fallhøyde på 300 m. Beregn den totale potensielle energien i magasinet i TWh. Anta en virkningsgrad på 88 %.',
        hints: ['Bruk $E_p = mgh$ og at 1 m³ vann = 1 000 kg. Husk at 1 TWh = $3{,}6 \\cdot 10^{15}$ J.'],
        solution: `**Total masse:**
$$m = 500 \\cdot 10^6 \\cdot 1\\,000 = 5 \\cdot 10^{11} \\text{ kg}$$

**Potensiell energi:**
$$E_p = mgh = 5 \\cdot 10^{11} \\cdot 9{,}81 \\cdot 300 = 1{,}47 \\cdot 10^{15} \\text{ J}$$

**Elektrisk energi med virkningsgrad:**
$$E_{\\text{el}} = 0{,}88 \\cdot 1{,}47 \\cdot 10^{15} = 1{,}30 \\cdot 10^{15} \\text{ J}$$

**Omregning til TWh:**
$$E_{\\text{el}} = \\frac{1{,}30 \\cdot 10^{15}}{3{,}6 \\cdot 10^{15}} \\approx 0{,}36 \\text{ TWh}$$

**Svar:** Magasinet inneholder ca. 0,36 TWh elektrisk energi. Til sammenligning bruker Norge ca. 140 TWh strøm per år, så dette magasinet alene dekker ca. 1 dag av Norges strømforbruk.`,
      },
    },

    // --- SAMLEOPPGAVE 5 ---
    {
      id: 'tof1-6-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft fordeler og ulemper ved å bygge ut havvind i stor skala i Norge. Vurder teknologiske, økonomiske og miljømessige aspekter. Sammenlign med videre utbygging av vannkraft.',
        hints: ['Tenk på at Norge allerede har mye vannkraft. Vurder kostnader, naturinngrep, regulerbarhet, arealbehov og eksportmuligheter.'],
        solution: `**Fordeler med havvind:**
- Enormt potensial – Norges havområder har plass til svært mange turbiner
- Gir mer fornybar strøm til elektrifisering og eksport
- Bygger på norsk offshore-kompetanse fra olje og gass
- Skaper nye arbeidsplasser og eksportinntekter
- Havvind produserer mest om vinteren, når strømbehovet er størst

**Ulemper med havvind:**
- Svært kostbart – krever store subsidier i oppstartsfasen
- Ikke regulerbar (produserer bare når det blåser)
- Kan påvirke sjøfugl, fisk og marint miljø
- Krever nye kraftlinjer for å føre strømmen til land
- Visuell påvirkning av kystlandskapet (bunnfast) eller konflikter med fiskeri (flytende)

**Sammenlignet med vannkraft:**
Vannkraft er billigere, regulerbar og velprøvd – men mesteparten av potensialet er allerede utbygd, og videre utbygging innebærer naturinngrep i vernede vassdrag. Havvind gir et nytt, stort tilskudd til kraftbalansen uten å berøre vassdragsnatur.

**Konklusjon:** En kombinasjon av regulerbar vannkraft og uregulert havvind er trolig optimal – vannkraften kan balansere havvindens variabilitet.`,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.7: Livsløpsanalyse (LCA)
// ============================================================================

export const CHAPTER_TOF_1_6_7: TextbookChapter = {
  id: 'tof-1-6-7',
  courseId: 'tof-1',
  chapterNumber: '6.7',
  title: 'Livsløpsanalyse (LCA)',
  description: 'Miljøpåvirkning fra vugge til grav, karbonavtrykk og bærekraft.',
  estimatedMinutes: 25,
  competenceGoals: ['gjennomføre en forenklet livsløpsanalyse'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-6-7-intro',
      type: 'text',
      content: `## Livsløpsanalyse (LCA)

Er en elbil virkelig mer miljøvennlig enn en bensinbil? Er det bedre for miljøet å kjøpe en ny, energieffektiv vaskemaskin eller å bruke den gamle litt til? Svarene er ikke alltid opplagte, fordi miljøpåvirkningen av et produkt handler om mye mer enn bare bruken.

**Livsløpsanalyse** (LCA – Life Cycle Assessment) er en vitenskapelig metode for å vurdere den totale miljøpåvirkningen av et produkt eller en tjeneste gjennom hele livsløpet – «fra vugge til grav». Det betyr at vi ser på alt fra utvinning av råmaterialer, via produksjon, transport, bruk og vedlikehold, til avfallshåndtering eller resirkulering.

LCA er et viktig verktøy for teknologer, ingeniører og beslutningstakere som vil ta kunnskapsbaserte valg for en mer bærekraftig fremtid. I dette kapittelet skal du lære prinsippene bak LCA, forstå karbonavtrykk, og gjennomføre en forenklet livsløpsanalyse.`,
    },

    // --- TEORI: Fasene i LCA ---
    {
      id: 'tof1-6-7-def-faser',
      type: 'definition',
      title: 'Fasene i en livsløpsanalyse',
      content: `En livsløpsanalyse følger den internasjonale standarden **ISO 14040/14044** og gjennomføres i fire hovedfaser:

**1. Mål og omfang (Goal and scope):**
Hva skal analyseres, og hvor detaljert? Her defineres:
- Produktet eller tjenesten som studeres
- **Funksjonell enhet**: hva produktet gjør (f.eks. «transportere én person 1 km»)
- **Systemgrenser**: hvilke livsfaser og prosesser som inkluderes
- Hvilke miljøpåvirkningskategorier som vurderes

**2. Livsløpsinventar (Life Cycle Inventory – LCI):**
Kartlegge alle inn- og utstrømmer av materialer og energi i hele livsløpet: råvarer inn, utslipp ut, energiforbruk, avfall, osv.

**3. Livsløpsvurdering (Life Cycle Impact Assessment – LCIA):**
Beregne miljøpåvirkningen fra dataene i inventaret. Eksempler på kategorier:
- Klimagassutslipp (CO₂-ekvivalenter)
- Forsuring (SO₂-ekvivalenter)
- Eutrofiering (overgjødsling)
- Ressursutarming

**4. Tolkning (Interpretation):**
Analysere resultatene, identifisere de viktigste bidragene til miljøpåvirkningen, og gi anbefalinger.`,
    },
    {
      id: 'tof1-6-7-text-systemgrenser',
      type: 'text',
      content: `### Systemgrenser og livsløpsfaser

Systemgrensene bestemmer hvilke deler av produktets livsløp som inkluderes i analysen. En fullstendig «vugge til grav»-analyse dekker:

**Råvareutvinning:**
Utvinning av alle nødvendige materialer fra naturen. For en mobiltelefon betyr dette gruvedrift for å hente ut sjeldne jordarter, kobber, litium, aluminium og mange andre metaller fra forskjellige land.

**Produksjon og bearbeiding:**
Omforming av råvarer til materialer og komponenter. For mobiltelefonen inkluderer dette smelting av metaller, produksjon av halvledere, montering av kretskort og sluttmontering.

**Transport og distribusjon:**
Frakt av materialer og ferdige produkter mellom fabrikker og til sluttbruker. En typisk mobiltelefon kan ha komponenter fra over 30 land.

**Bruksfase:**
Energiforbruk og vedlikehold under bruk. For en mobiltelefon er dette primært strømmen til lading.

**Avhending / resirkulering:**
Avfallshåndtering etter endt levetid. Kan mobiltelefonen resirkuleres? Hvor mye av materialene kan gjenvinnes?

Noen analyser bruker «vugge til port» (utelater bruk og avhending) eller «vugge til vugge» (forutsetter full resirkulering tilbake til nye produkter).`,
    },

    // --- EKSEMPEL: Enkel LCA ---
    {
      id: 'tof1-6-7-example-plastpose',
      type: 'example',
      title: 'Eksempel: Forenklet LCA – plastpose vs. bomullspose',
      problem: 'En vanlig plastpose har et klimaavtrykk på ca. 1,6 kg CO₂-ekvivalenter per stykk. En bomullsnett har et klimaavtrykk på ca. 150 kg CO₂-ekvivalenter å produsere. Hvor mange ganger må bomullsnettet gjenbrukes for å bli mer klimavennlig enn å bruke en ny plastpose hver gang?',
      solution: `**Beregning:**

Hver gang vi bruker bomullsnettet, unngår vi å bruke én plastpose med avtrykk 1,6 kg CO₂e.

$$\\text{Antall ganger} = \\frac{\\text{Avtrykk bomullsnett}}{\\text{Avtrykk plastpose}} = \\frac{150}{1{,}6} \\approx 94 \\text{ ganger}$$

**Svar:** Bomullsnettet må gjenbrukes minst **94 ganger** for å ha lavere klimaavtrykk enn å bruke nye plastposer. Dersom du handler to ganger i uken, tar det nesten et år.

**Viktig innsikt:** Dette viser at det «grønne» valget ikke alltid er åpenbart. Bomullsproduksjon krever mye vann, energi og jordbruksareal. LCA hjelper oss å ta faktabaserte beslutninger i stedet for å stole på intuisjon.

*Merk: Analysen er forenklet. En fullstendig LCA ville også vurdere vannforbruk, arealbruk, forsøpling og andre miljøkategorier – ikke bare klimagassutslipp.*`,
    },

    // --- OPPGAVE 1 ---
    {
      id: 'tof1-6-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «vugge til grav» i en livsløpsanalyse?',
        options: [
          { id: 'a', text: 'Analysen dekker bare produksjonsfasen', isCorrect: false },
          { id: 'b', text: 'Analysen dekker hele livsløpet fra råvareutvinning til avhending', isCorrect: true },
          { id: 'c', text: 'Analysen dekker bare bruksfasen og avhending', isCorrect: false },
          { id: 'd', text: 'Analysen sammenligner to produkters levetid', isCorrect: false },
        ],
        solution: '«Vugge til grav» betyr at analysen dekker hele produktets livsløp: fra utvinning av råvarer (vuggen), gjennom produksjon, transport, bruk og vedlikehold, til endelig avhending eller resirkulering (graven). Riktig svar er **B**.',
      },
    },

    // --- TEORI: Karbonavtrykk ---
    {
      id: 'tof1-6-7-def-karbonavtrykk',
      type: 'definition',
      title: 'Karbonavtrykk',
      content: `**Karbonavtrykk** (carbon footprint) er den totale mengden klimagasser som slippes ut gjennom et produkts, en tjenestes eller en aktivitets livsløp, målt i **kg CO₂-ekvivalenter** (CO₂e).

CO₂-ekvivalenter gjør det mulig å sammenligne ulike klimagasser ved å omregne dem til den mengden CO₂ som ville gitt samme oppvarmingseffekt over 100 år:
- 1 kg CO₂ = 1 kg CO₂e
- 1 kg metan (CH₄) = 28 kg CO₂e
- 1 kg lystgass (N₂O) = 265 kg CO₂e

**Eksempler på karbonavtrykk:**

| Aktivitet / produkt | Karbonavtrykk |
|---|---|
| 1 kg norsk storfekjøtt | ca. 25 kg CO₂e |
| 1 kg norske tomater (drivhus) | ca. 3 kg CO₂e |
| Fly Oslo–Trondheim (tur/retur, per person) | ca. 150 kg CO₂e |
| Tog Oslo–Trondheim (tur/retur, per person) | ca. 5 kg CO₂e |
| 1 år med smarttelefon | ca. 70 kg CO₂e |
| Gjennomsnittlig nordmann per år | ca. 8,4 tonn CO₂e |

**Merk:** Det globale gjennomsnittet er ca. 4,7 tonn CO₂e per person per år, og for å nå 1,5-gradersmålet bør det ned mot ca. 2,5 tonn innen 2030.`,
    },
    {
      id: 'tof1-6-7-text-baerekraft',
      type: 'text',
      content: `### Bærekraft og sirkulær økonomi

LCA er et sentralt verktøy i arbeidet mot en mer **bærekraftig** og **sirkulær** økonomi.

**Lineær økonomi** (dagens modell): Hent ut → Produser → Bruk → Kast. Denne modellen fører til ressursutarming og avfallsproblemer.

**Sirkulær økonomi** (fremtidens modell): Designet for at materialer og produkter holdes i bruk så lenge som mulig gjennom:
- **Reduser**: Bruk mindre materialer og energi i produksjonen
- **Gjenbruk**: Bruk produktet igjen i sin opprinnelige form
- **Reparer**: Fiks produktet i stedet for å kjøpe nytt
- **Resirkuler**: Materialgjenvinning til nye produkter

LCA kan brukes til å identifisere hvor i livsløpet de største miljøpåvirkningene oppstår, slik at vi kan rette innsatsen dit den gir mest effekt. For eksempel:
- For **klær** er det ofte vasking (bruksfasen) som har størst miljøpåvirkning
- For **elektronikk** er det produksjonsfasen med gruvedrift og halvlederproduksjon
- For **biler** er det drivstoff/energi i bruksfasen (for fossilbiler) eller produksjon av batteri (for elbiler)

Kunnskap om LCA hjelper både forbrukere og bedrifter til å ta bedre valg for miljøet.`,
    },

    // --- EKSEMPEL: Elbil vs. fossilbil ---
    {
      id: 'tof1-6-7-example-elbil',
      type: 'example',
      title: 'Eksempel: LCA for elbil vs. dieselbil',
      problem: 'En elbil har ca. 12 tonn CO₂e i produksjonsutslipp (inkl. batteri), mens en dieselbil har ca. 7 tonn. Elbilen bruker 0,15 kWh/km med norsk strøm (17 g CO₂e/kWh). Dieselbilen slipper ut 120 g CO₂e/km. Etter hvor mange kilometer har elbilen lavere totalt klimaavtrykk?',
      solution: `**Utslipp per km i bruksfasen:**

Elbil: $0{,}15 \\cdot 17 = 2{,}6$ g CO₂e/km

Dieselbil: $120$ g CO₂e/km

**Forskjell i produksjonsutslipp:**
$$\\Delta_{\\text{prod}} = 12\\,000 - 7\\,000 = 5\\,000 \\text{ kg CO₂e}$$

**Forskjell i bruksutslipp per km:**
$$\\Delta_{\\text{bruk}} = 120 - 2{,}6 = 117{,}4 \\text{ g/km} = 0{,}1174 \\text{ kg/km}$$

**Break-even punkt:**
$$\\text{km} = \\frac{\\Delta_{\\text{prod}}}{\\Delta_{\\text{bruk}}} = \\frac{5\\,000}{0{,}1174} \\approx 42\\,600 \\text{ km}$$

**Svar:** Etter ca. **42 600 km** har elbilen tjent inn den ekstra miljøkostnaden fra batteriproduksjonen. Med gjennomsnittlig norsk kjørelengde (ca. 12 000 km/år) tar det ca. 3,5 år. Resten av bilens levetid er ren klimagevinst.

*Med europeisk strømmiks (ca. 250 g CO₂e/kWh) blir break-even ca. 60 000 km.*`,
    },

    // --- OPPGAVE 2 ---
    {
      id: 'tof1-6-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-7-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken enhet brukes for å måle karbonavtrykk?',
        options: [
          { id: 'a', text: 'Joule (J)', isCorrect: false },
          { id: 'b', text: 'Kilowattimer (kWh)', isCorrect: false },
          { id: 'c', text: 'Kg CO₂-ekvivalenter (CO₂e)', isCorrect: true },
          { id: 'd', text: 'Pascal (Pa)', isCorrect: false },
        ],
        solution: 'Karbonavtrykk måles i **kg CO₂-ekvivalenter** (CO₂e). Denne enheten gjør det mulig å sammenligne ulike klimagassers oppvarmingseffekt ved å omregne dem til den tilsvarende mengden CO₂. Riktig svar er **C**.',
      },
    },

    // --- OPPSUMMERING ---
    {
      id: 'tof1-6-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Livsløpsanalyse (LCA)** vurderer den totale miljøpåvirkningen av et produkt fra «vugge til grav»
- LCA følger fire faser: mål og omfang, livsløpsinventar, livsløpsvurdering og tolkning
- **Systemgrensene** bestemmer hvilke livsfaser som inkluderes i analysen
- **Karbonavtrykk** måler totale klimagassutslipp i kg CO₂-ekvivalenter
- Det «grønne» valget er ikke alltid opplagt – LCA gir faktabasert grunnlag for beslutninger
- **Sirkulær økonomi** bygger på prinsippene reduser, gjenbruk, reparer og resirkuler
- LCA identifiserer hvor i livsløpet de største miljøpåvirkningene oppstår, slik at tiltak kan rettes dit de gir mest effekt`,
    },

    // --- SAMLEOPPGAVE 3 ---
    {
      id: 'tof1-6-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-7-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjennomfør en forenklet livsløpsanalyse av en t-skjorte i bomull. Beskriv de viktigste miljøpåvirkningene i hver livsfase: råvareutvinning, produksjon, transport, bruk og avhending.',
        hints: ['Tenk på vann- og energiforbruk i dyrking av bomull, kjemikalier i farging, transport fra Asia, vasking og tørking over mange år, og hva som skjer når t-skjorten kastes.'],
        solution: `**Forenklet LCA for en bomulls-t-skjorte:**

**1. Råvareutvinning (bomullsdyrking):**
- Bomull krever store mengder vann (ca. 2 700 liter per t-skjorte)
- Bruk av pesticider og kunstgjødsel (miljø- og helsekonsekvenser)
- Arealbruk som konkurrerer med matproduksjon
- Utslipp fra landbruksmaskiner og gjødsel (N₂O)

**2. Produksjon (spinning, veving, farging, søm):**
- Energikrevende prosesser, ofte med kullkraft i asiatiske fabrikker
- Kjemikalier i blekeming og farging (tungmetaller, formaldehyd)
- Vannforurensning fra ubehandlet avløpsvann
- Arbeidsforhold i lavkostland

**3. Transport:**
- Frakt med skip fra Asia til Europa (lavt utslipp per kg, men lange avstander)
- Lastebiltransport til butikk
- Ca. 2–5 kg CO₂e for transport

**4. Bruksfase:**
- Vasking: varmt vann, vaskemiddel, strøm – den STØRSTE miljøpåvirkningen over livsløpet
- Tørketrommel bruker mye energi
- Stryking
- Over 200 vask i levetiden kan gi 70–80 % av totalt energiforbruk

**5. Avhending:**
- Deponi: langsom nedbrytning, metanutslipp
- Forbrenning: energigjenvinning, men CO₂-utslipp
- Resirkulering: begrenset kvalitet i gjenvunne fibre
- Gjenbruk (second hand): best for miljøet`,
      },
    },

    // --- SAMLEOPPGAVE 4 ---
    {
      id: 'tof1-6-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En skole vurderer å bytte ut 500 halogenpærer (42 W) med LED-pærer (6 W). Halogenpærene har en levetid på 2 000 timer, LED-pærene 25 000 timer. Pærene brukes 2 000 timer per år. Strømprisen er 1,50 kr/kWh. Produksjonsutslippet for en halogenpære er 1,5 kg CO₂e og for en LED-pære 3,0 kg CO₂e. Gjør en forenklet LCA over 10 år: Sammenlign totalt strømforbruk, totale kostnader og totalt klimagassutslipp.',
        hints: ['Beregn antall pærer som trengs over 10 år. En halogenpære varer 1 år (2 000 timer/2 000 t), en LED-pære varer 12,5 år. Beregn strømforbruk, kostnad og utslipp separat.'],
        solution: `**Antall pærer over 10 år:**
- Halogen: 2 000 t levetid, 2 000 t/år → 1 pære/år → 10 pærer per armatur
  Totalt: $500 \\cdot 10 = 5\\,000$ halogenpærer
- LED: 25 000 t levetid, 2 000 t/år → holder 12,5 år → 1 pære per armatur
  Totalt: $500 \\cdot 1 = 500$ LED-pærer

**Strømforbruk over 10 år:**
- Halogen: $500 \\cdot 42 \\text{ W} \\cdot 2\\,000 \\text{ t/år} \\cdot 10 \\text{ år} = 420\\,000 \\text{ kWh}$
- LED: $500 \\cdot 6 \\text{ W} \\cdot 2\\,000 \\text{ t/år} \\cdot 10 \\text{ år} = 60\\,000 \\text{ kWh}$
- **Besparelse: 360 000 kWh** (86 % reduksjon)

**Strømkostnader over 10 år:**
- Halogen: $420\\,000 \\cdot 1{,}50 = 630\\,000$ kr
- LED: $60\\,000 \\cdot 1{,}50 = 90\\,000$ kr
- **Besparelse: 540 000 kr**

**Produksjonsutslipp:**
- Halogen: $5\\,000 \\cdot 1{,}5 = 7\\,500$ kg CO₂e
- LED: $500 \\cdot 3{,}0 = 1\\,500$ kg CO₂e

**Totalt klimaavtrykk** (med norsk strøm, ca. 17 g CO₂e/kWh):
- Halogen: $7\\,500 + 420\\,000 \\cdot 0{,}017 = 7\\,500 + 7\\,140 = 14\\,640$ kg CO₂e
- LED: $1\\,500 + 60\\,000 \\cdot 0{,}017 = 1\\,500 + 1\\,020 = 2\\,520$ kg CO₂e
- **Besparelse: ca. 12 100 kg CO₂e** (83 % reduksjon)

**Konklusjon:** LED er klart bedre på alle områder – selv om produksjonsutslippet per pære er dobbelt så høyt, oppveies dette mange ganger av lavere strømforbruk og lengre levetid.`,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.8: Tverrfaglig prosjekt
// ============================================================================

export const CHAPTER_TOF_1_6_8: TextbookChapter = {
  id: 'tof-1-6-8',
  courseId: 'tof-1',
  chapterNumber: '6.8',
  title: 'Tverrfaglig prosjekt',
  description: 'Planlegging og gjennomføring av et teknologiprosjekt med forskningsmetode.',
  estimatedMinutes: 30,
  competenceGoals: ['gjennomføre et tverrfaglig teknologiprosjekt'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-6-8-intro',
      type: 'text',
      content: `## Tverrfaglig prosjekt

I teknologi og forskningslære handler det ikke bare om å lære teori – det handler om å **anvende** kunnskapen til å løse reelle problemer. Et tverrfaglig prosjekt gir deg muligheten til å kombinere kunnskap fra flere fagområder, bruke vitenskapelig metode og utvikle ferdigheter som samarbeid, problemløsning og kommunikasjon.

I dette kapittelet skal du lære å planlegge og gjennomføre et teknologiprosjekt fra start til slutt. Du vil arbeide systematisk med problemformulering, informasjonsinnhenting, datainnsamling, analyse og presentasjon – akkurat slik forskere og ingeniører jobber i den virkelige verden.

Et godt prosjekt starter med et godt spørsmål. Kanskje du lurer på hvor mye energi skolen bruker og hvordan det kan reduseres? Eller kanskje du vil undersøke hvilke materialer som er best egnet for en bestemt konstruksjon? Uansett tema er den systematiske tilnærmingen den samme.`,
    },

    // --- TEORI: Prosjektplanlegging ---
    {
      id: 'tof1-6-8-def-prosjektfaser',
      type: 'definition',
      title: 'Fasene i et teknologiprosjekt',
      content: `Et teknologiprosjekt gjennomføres typisk i fem faser:

**1. Definisjon og problemformulering:**
- Velg et tema som interesserer deg og som er gjennomførbart
- Formuler en tydelig **problemstilling** eller **forskningsspørsmål**
- Avgrens prosjektet: Hva skal undersøkes? Hva er utenfor prosjektets rammer?

**2. Planlegging:**
- Lag en **fremdriftsplan** med milepæler og frister
- Fordel oppgaver i gruppen (dersom gruppearbeid)
- Identifiser nødvendige ressurser: utstyr, materialer, tilgang til informasjon
- Vurder etiske hensyn og sikkerhet

**3. Gjennomføring:**
- Samle inn data gjennom forsøk, målinger, observasjoner eller litteraturstudie
- Dokumenter alt underveis i en **prosjektlogg**
- Vær systematisk og nøyaktig

**4. Analyse og tolkning:**
- Bearbeid dataene: tabeller, grafer, beregninger
- Analyser resultatene: Hva viser dataene? Samsvarer de med hypotesen?
- Vurder feilkilder og usikkerhet

**5. Presentasjon og formidling:**
- Skriv en **prosjektrapport** med standard vitenskapelig struktur
- Lag en **presentasjon** for klassen
- Reflekter over hva du har lært og hva som kunne vært gjort bedre`,
    },
    {
      id: 'tof1-6-8-text-problemformulering',
      type: 'text',
      content: `### Å formulere en god problemstilling

Problemstillingen er prosjektets viktigste setning. En god problemstilling er:

**Spesifikk:** Ikke «Hva er fornybar energi?» (for vagt), men «Hvor mye av skolens energiforbruk kan dekkes av solceller på taket?»

**Forskbar:** Du må kunne samle data som gir svar. «Er atomkraft farlig?» er et meningsspørsmål. «Hvor mye radioaktivt avfall produserer et kjernekraftverk per TWh sammenlignet med et gasskraftverk?» kan undersøkes med data.

**Avgrenset:** Du har begrenset tid. Fokuser på noe du faktisk kan undersøke grundig i stedet for å forsøke å dekke alt.

**Relevant:** Problemstillingen bør ha en kobling til pensum og gjerne til samfunnsaktuelle spørsmål.

**Eksempler på gode problemstillinger i ToF:**
- «Hvordan påvirker vindretning og hastighet effekten til en vindturbin?» (forsøk med modellturbin)
- «Hva er karbonavtrykket til skolematen vår, og hvordan kan det reduseres?» (LCA-prosjekt)
- «Hvilke materialer er best egnet til en bærekraftig mobiltelefondeksel?» (materialteknologi)
- «Hvor effektiv er skolens varmepumpe, og hva er besparelsene sammenlignet med direktevarme?» (energianalyse)`,
    },

    // --- EKSEMPEL: Prosjektplan ---
    {
      id: 'tof1-6-8-example-prosjektplan',
      type: 'example',
      title: 'Eksempel: Prosjektplan – Energiforbruk på skolen',
      problem: 'Lag en prosjektplan for å undersøke problemstillingen: «Hvor mye av skolens årlige strømforbruk kan dekkes av solcellepaneler på skoletaket?»',
      solution: `**1. Problemstilling:**
«Hvor mye av skolens årlige strømforbruk kan dekkes av solcellepaneler på skoletaket?»

**2. Bakgrunn og avgrensning:**
- Undersøke skolens strømforbruk (kWh/år)
- Beregne tilgjengelig takareal for solceller
- Estimere solcelleproduksjon basert på solinnstråling på stedet
- Avgrensning: Ser ikke på kostnader eller bygningstekniske forhold

**3. Metode:**
- Innhente strømforbruksdata fra skoleadministrasjonen
- Måle/beregne tilgjengelig takareal (flatt, sørvendt, skyggetfritt)
- Bruke PVGIS (EUs solcelledatabase) for å estimere årlig produksjon per m²
- Beregne dekningsgrad: (solcelleproduksjon / strømforbruk) × 100 %

**4. Fremdriftsplan:**
| Uke | Aktivitet |
|---|---|
| 1 | Problemformulering, rollefordeling, planlegging |
| 2 | Innhente strømdata, måle takareal |
| 3 | Beregne solcellproduksjon med PVGIS |
| 4 | Analyse og sammenstilling av resultater |
| 5 | Skrive rapport og lage presentasjon |
| 6 | Fremføring for klassen |

**5. Utstyr og ressurser:**
- Målebånd eller tegninger av taket
- Tilgang til PVGIS nettside
- Skolens strømfakturaer
- Regneark (Excel/Google Sheets)`,
    },

    // --- OPPGAVE 1 ---
    {
      id: 'tof1-6-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-8-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den første fasen i et teknologiprosjekt?',
        options: [
          { id: 'a', text: 'Datainnsamling', isCorrect: false },
          { id: 'b', text: 'Presentasjon', isCorrect: false },
          { id: 'c', text: 'Definisjon og problemformulering', isCorrect: true },
          { id: 'd', text: 'Analyse og tolkning', isCorrect: false },
        ],
        solution: 'Den første fasen er **definisjon og problemformulering**. Man må vite hva man skal undersøke og formulere en tydelig problemstilling før man kan planlegge og gjennomføre prosjektet. Riktig svar er **C**.',
      },
    },

    // --- TEORI: Forskningsmetode ---
    {
      id: 'tof1-6-8-def-forskningsmetode',
      type: 'definition',
      title: 'Vitenskapelig metode',
      content: `Den **vitenskapelige metoden** er en systematisk tilnærming til å undersøke fenomener og tilegne seg ny kunnskap. Metoden sikrer at resultatene er pålitelige og etterprøvbare.

**Stegene i vitenskapelig metode:**

1. **Observasjon:** Legg merke til et fenomen eller et problem
2. **Spørsmål:** Formuler et presist forskningsspørsmål
3. **Hypotese:** Lag en begrunnet antakelse om svaret (kan testes)
4. **Eksperiment/undersøkelse:** Design og gjennomfør en systematisk undersøkelse
5. **Datainnsamling:** Samle inn data på en nøyaktig og reproduserbar måte
6. **Analyse:** Bearbeid og analyser dataene
7. **Konklusjon:** Vurder om dataene støtter eller motstrider hypotesen
8. **Kommunikasjon:** Del resultatene slik at andre kan vurdere og etterprøve dem

**Viktige prinsipper:**
- **Reproduserbarhet:** Andre skal kunne gjenta forsøket og få samme resultat
- **Objektivitet:** Dataene skal tale for seg – ikke la forutinntatthet påvirke tolkningen
- **Kontrollerte variabler:** Endre bare én variabel om gangen for å kunne fastslå årsakssammenhenger
- **Falsifiserbarhet:** En hypotese må kunne motbevises for å være vitenskapelig`,
    },
    {
      id: 'tof1-6-8-text-datainnsamling',
      type: 'text',
      content: `### Datainnsamling og analyse

**Kvantitative data** er målbare tall og størrelser: temperatur, energiforbruk, styrke, vekt. Disse kan analyseres med matematiske og statistiske metoder.

**Kvalitative data** er beskrivelser, observasjoner og vurderinger: «materialet var sprøtt», «overflaten var ru». Disse gir dybdeforståelse, men er vanskeligere å sammenligne objektivt.

**Tips for god datainnsamling:**
- Gjennomfør gjentatte målinger for å øke påliteligheten
- Bruk kalibrerte instrumenter
- Dokumenter betingelsene (temperatur, tidspunkt, utstyr)
- Registrer også uventede observasjoner

**Presentasjon av data:**
- **Tabeller** gir oversikt over rådata og beregnede verdier
- **Grafer** visualiserer trender og sammenhenger (linjediagram for endring over tid, stolpediagram for sammenligning, sektordiagram for andeler)
- **Usikkerhet** bør angis: absolutt usikkerhet ($\\pm$-verdier) eller relativ usikkerhet (prosent)

**Feilkilder:**
Alle målinger har feilkilder. Det er viktig å identifisere og diskutere disse:
- **Systematiske feil:** Gir konsistent avvik i én retning (f.eks. et instrument som alltid viser litt for høyt)
- **Tilfeldige feil:** Variasjoner som oppstår tilfeldig fra måling til måling (kan reduseres ved gjentatte målinger)
- **Grove feil:** Feil som skyldes klare tabber (avlesningsfeil, regnefeil) – bør lukes ut`,
    },

    // --- EKSEMPEL: Rapportstruktur ---
    {
      id: 'tof1-6-8-example-rapport',
      type: 'example',
      title: 'Eksempel: Struktur for prosjektrapport',
      problem: 'Beskriv den anbefalte strukturen for en prosjektrapport i Teknologi og forskningslære.',
      solution: `**Anbefalt rapportstruktur:**

**1. Forside:**
Tittel, navn, klasse, dato, skolens navn

**2. Sammendrag:**
Kort oppsummering av hele prosjektet (problemstilling, metode, viktigste resultater og konklusjon) – skrives sist, men plasseres først. Ca. 100–200 ord.

**3. Innledning:**
- Bakgrunn: Hvorfor er dette temaet interessant/viktig?
- Problemstilling: Hva skal undersøkes?
- Hypotese (dersom relevant): Hva forventer du å finne?
- Avgrensning: Hva er utenfor prosjektets rammer?

**4. Teori:**
Relevant bakgrunnsteori som leseren trenger for å forstå prosjektet. Bruk kilder og referer korrekt.

**5. Metode:**
Detaljert beskrivelse av hvordan undersøkelsen ble gjennomført. Så detaljert at noen andre kan gjenta forsøket.

**6. Resultater:**
Presentasjon av data i tabeller og grafer. Ingen tolkning her – bare hva du fant.

**7. Diskusjon:**
- Tolkning av resultatene: Hva betyr tallene?
- Sammenligning med hypotesen og teori
- Feilkilder og usikkerhet
- Forslag til forbedringer ved et eventuelt nytt forsøk

**8. Konklusjon:**
Kort og tydelig svar på problemstillingen, basert på resultatene.

**9. Kildeliste:**
Alle kilder i APA 7-format.`,
    },

    // --- OPPGAVE 2 ---
    {
      id: 'tof1-6-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-8-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva betyr «reproduserbarhet» i vitenskapelig metode?',
        options: [
          { id: 'a', text: 'At forsøket gir det resultatet forskeren ønsker', isCorrect: false },
          { id: 'b', text: 'At forsøket bruker reproduserte (kopierte) materialer', isCorrect: false },
          { id: 'c', text: 'At andre forskere kan gjenta forsøket og få tilsvarende resultater', isCorrect: true },
          { id: 'd', text: 'At forsøket gjennomføres med dyrt og avansert utstyr', isCorrect: false },
        ],
        solution: '**Reproduserbarhet** betyr at forsøket er så godt dokumentert at andre forskere kan gjenta det under samme betingelser og oppnå tilsvarende resultater. Dette er et grunnleggende kvalitetskrav i vitenskap. Riktig svar er **C**.',
      },
    },

    // --- TEORI: Tverrfaglighet og presentasjon ---
    {
      id: 'tof1-6-8-text-tverrfaglig',
      type: 'text',
      content: `### Tverrfaglighet i praksis

Et tverrfaglig prosjekt kombinerer kunnskap og metoder fra flere fagområder. I Teknologi og forskningslære er tverrfaglighet naturlig – teknologiske problemstillinger berører nesten alltid flere fag.

**Eksempler på tverrfaglig kobling:**

| ToF-tema | Kobles med | Hvordan |
|---|---|---|
| Energi og klima | Geografi, naturfag | Klimasystemer, energiressurser |
| Materialteknologi | Kjemi | Atomstruktur, bindinger, polymerer |
| Livsløpsanalyse | Samfunnsfag, økonomi | Bærekraft, forbruksmønstre |
| Nanoteknologi | Biologi, fysikk | Cellebiologi, kvantemekanikk |
| Prosjektarbeid | Norsk, engelsk | Rapportskriving, kildebruk |

**Å holde en god presentasjon:**
- **Struktur:** Innledning (fang oppmerksomheten) → hoveddel → konklusjon
- **Visuelt:** Bruk bilder, grafer og demonstrasjoner – ikke bare tekst
- **Engasjement:** Still spørsmål til publikum, bruk eksempler fra hverdagen
- **Tidsbruk:** Øv på å holde deg innenfor tidsrammen
- **Spørsmål:** Forbered deg på spørsmål ved å tenke gjennom svakheter i prosjektet

**Kildekritikk og referering:**
I et prosjekt bruker du andres arbeid som grunnlag. Det er viktig å:
- Vurdere kildenes pålitelighet (hvem har skrevet det? Er det fagfellevurdert?)
- Referere korrekt (APA 7-format brukes vanligvis)
- Skille tydelig mellom egne resultater og informasjon fra kilder
- Aldri presentere andres arbeid som ditt eget (plagiat)`,
    },

    // --- OPPSUMMERING ---
    {
      id: 'tof1-6-8-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Et teknologiprosjekt gjennomføres i fem faser: definisjon, planlegging, gjennomføring, analyse og presentasjon
- En god **problemstilling** er spesifikk, forskbar, avgrenset og relevant
- **Vitenskapelig metode** sikrer at resultatene er pålitelige og etterprøvbare
- Viktige prinsipper er **reproduserbarhet**, **objektivitet** og **kontrollerte variabler**
- Data kan være **kvantitative** (tall) eller **kvalitative** (beskrivelser) og bør presenteres i tabeller og grafer
- **Feilkilder** (systematiske, tilfeldige, grove) må identifiseres og diskuteres
- **Tverrfaglighet** betyr å kombinere kunnskap fra flere fag for å belyse en problemstilling
- En prosjektrapport følger en standardisert vitenskapelig struktur
- God **kildekritikk** og korrekt **referering** er avgjørende`,
    },

    // --- SAMLEOPPGAVE 3 ---
    {
      id: 'tof1-6-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-8-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Formuler en problemstilling for et tverrfaglig prosjekt som kombinerer energi og materialteknologi. Beskriv kort hvilken metode du ville brukt for å undersøke problemstillingen, og hvilke data du ville samlet inn.',
        hints: ['Tenk på et praktisk problem der valg av materiale påvirker energieffektiviteten. For eksempel isolasjonsmaterialer, solcellematerialer, eller materialer i vindturbiner.'],
        solution: `**Eksempel på problemstilling:**
«Hvilket isolasjonsmateriale gir lavest varmetap og minst miljøpåvirkning for en typisk norsk bolig?»

**Metode:**
1. **Litteraturstudie:** Kartlegge aktuelle isolasjonsmaterialer (mineralull, EPS, cellulose, trefiber, aerogel) og deres termiske egenskaper (varmeledningsevne, λ-verdi)
2. **Beregning:** Bruke U-verdi-formelen til å beregne varmetap gjennom en vegg med ulike isolasjonsmaterialer ved norske forhold (ΔT = ca. 40 °C om vinteren)
3. **Forenklet LCA:** Sammenligne miljøpåvirkning for hvert materiale (produksjonsutslipp, levetid, resirkulerbarhet)
4. **Sammenstilling:** Lage en tabell som rangerer materialene etter termisk ytelse OG miljøpåvirkning

**Data som samles inn:**
- Varmeledningsevne (λ, W/(m·K)) for hvert materiale
- Tetthet og tykkelse for å oppnå samme U-verdi
- Produksjonsutslipp (kg CO₂e per m²)
- Levetid og resirkulerbarhet
- Pris per m²

**Tverrfaglig kobling:** Prosjektet kombinerer fysikk (varmelære), materialteknologi (egenskaper) og miljøanalyse (LCA).`,
      },
    },

    // --- SAMLEOPPGAVE 4 ---
    {
      id: 'tof1-6-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-6-8-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du skal gjennomføre et forsøk der du måler virkningsgraden til en liten elektrisk motor. Beskriv: (a) hvordan du setter opp forsøket, (b) hvilke målinger du gjennomfører, (c) hvordan du beregner virkningsgraden, (d) hvilke feilkilder som kan påvirke resultatet, og (e) hvordan du presenterer resultatene.',
        hints: ['Tilført energi = elektrisk effekt × tid. Nyttig energi = arbeid utført (f.eks. løfte en vekt en bestemt høyde). Virkningsgrad = nyttig energi / tilført energi.'],
        solution: `**(a) Forsøksoppsett:**
En liten elektrisk motor kobles til en strømforsyning med kjent spenning og strøm. En tråd vikles rundt motorens aksel, med en liten vekt (f.eks. 100 g) festet i enden. Når motoren kjøres, heiser den vekten opp en bestemt høyde.

**(b) Målinger:**
- Spenning over motoren: $U$ (volt) – målt med voltmeter
- Strøm gjennom motoren: $I$ (ampere) – målt med amperemeter
- Tid for å heise vekten: $t$ (sekunder) – målt med stoppeklokke
- Høyde vekten løftes: $h$ (meter) – målt med linjal
- Masse på vekten: $m$ (kg) – målt med vekt
- Gjenta minst 5 ganger for pålitelighet

**(c) Beregning av virkningsgrad:**
Tilført elektrisk energi:
$$E_{\\text{tilført}} = U \\cdot I \\cdot t$$

Nyttig mekanisk energi (potensiell energi):
$$E_{\\text{nyttig}} = m \\cdot g \\cdot h$$

Virkningsgrad:
$$\\eta = \\frac{E_{\\text{nyttig}}}{E_{\\text{tilført}}} = \\frac{m \\cdot g \\cdot h}{U \\cdot I \\cdot t} \\cdot 100\\%$$

**(d) Feilkilder:**
- *Systematiske:* Friksjon i motoren og snoren (noe energi blir varme), luftmotstand på vekten, unøyaktige instrumenter
- *Tilfeldige:* Variasjon i reaksjonstid ved start/stopp, ustabil strømforsyning, ulik opptrekking av tråden
- *Grove:* Feil avlesning av instrumenter, vekten berører noe underveis

**(e) Presentasjon:**
- Tabell med alle måleverdier (5+ forsøk) og beregnet virkningsgrad for hvert forsøk
- Gjennomsnittlig virkningsgrad med standardavvik
- Stolpediagram som viser spredningen mellom forsøkene
- Diskusjon av feilkilder og forslag til forbedringer (f.eks. bruke lettere tråd, bedre instrumenter, flere gjentakelser)`,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for del 6 (kapittel 6.1–6.8)
// ============================================================================

export const TOF_1_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TOF_1_6_1,
  CHAPTER_TOF_1_6_2,
  CHAPTER_TOF_1_6_3,
  CHAPTER_TOF_1_6_4,
  CHAPTER_TOF_1_6_5,
  CHAPTER_TOF_1_6_6,
  CHAPTER_TOF_1_6_7,
  CHAPTER_TOF_1_6_8,
];
