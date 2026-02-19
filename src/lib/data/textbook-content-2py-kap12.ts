/**
 * Tekstbok kapitler for 2P-Y (Matematikk for yrkesfag VG2)
 * Seksjon 6.3: Kostnads- og prisberegninger
 * Seksjon 7.3: Enhetskonvertering i praksis
 * Seksjon 9.4: Ulikheter i praksis
 * Seksjon 12.1: Brøk, desimal og prosent
 * Seksjon 12.2: Forholdstall og blandinger
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 6.3: KOSTNADS- OG PRISBEREGNINGER
// ============================================================================

export const CHAPTER_2PY_6_3: TextbookChapter = {
  id: '2py-6-3',
  courseId: '2py',
  chapterNumber: '6.3',
  title: 'Kostnads- og prisberegninger',
  description: 'Lær om kostnadskalkyle, variable og faste kostnader, dekningsbidrag, påslag og timepris i yrkesfag.',
  estimatedMinutes: 55,
  competenceGoals: [
    'skille mellom variable og faste kostnader',
    'beregne dekningsbidrag og påslag',
    'sette opp en kostnadskalkyle og beregne timepris',
  ],
  content: [
    {
      id: '2py-6-3-intro',
      type: 'text',
      content: `## Kostnader i arbeidslivet

Alle bedrifter har **kostnader** som må dekkes for at bedriften skal gå med overskudd. For å sette riktige priser, må du forstå de ulike kostnadsTypene og vite hvordan du regner ut hva en vare eller tjeneste skal koste.

I yrkesfag er dette helt sentralt: En elektriker, rørlegger eller frisør må vite hva det koster å drive virksomheten for å sette riktig timepris. En kokk må vite råvarekostnadene for å prise menyrettene.`,
    },
    {
      id: '2py-6-3-def-1',
      type: 'definition',
      title: 'Variable og faste kostnader',
      content: `**Variable kostnader** endrer seg med produksjonen eller aktiviteten:
- Råvarer og materialer
- Strøm til produksjonsmaskiner
- Emballasje

**Faste kostnader** er de samme uansett aktivitetsnivå:
- Husleie
- Forsikring
- Lønn til fast ansatte
- Avskrivninger på utstyr

**Totale kostnader** = faste kostnader + variable kostnader`,
    },
    {
      id: '2py-6-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Kostnadskalkyle for en frisørsalong',
      problem: `En frisørsalong har følgende månedskostnader:
- Husleie: 12 000 kr
- Forsikring: 1 500 kr
- Lønn (to ansatte): 60 000 kr
- Produkter og materialer per klipp: 45 kr
- Salongen utfører 320 klipp per måned

Hva er de totale kostnadene per måned?`,
      solution: `**Løsning:**

Faste kostnader per måned:
$$12\\,000 + 1\\,500 + 60\\,000 = 73\\,500 \\text{ kr}$$

Variable kostnader per måned:
$$45 \\cdot 320 = 14\\,400 \\text{ kr}$$

Totale kostnader:
$$73\\,500 + 14\\,400 = 87\\,900 \\text{ kr}$$

De totale kostnadene er **87 900 kr per måned**.`,
    },
    {
      id: '2py-6-3-def-2',
      type: 'definition',
      title: 'Dekningsbidrag og påslag',
      content: `**Dekningsbidrag (DB)** er det som blir igjen til å dekke faste kostnader og gi fortjeneste etter at variable kostnader er trukket fra:

$$\\text{Dekningsbidrag} = \\text{Salgspris} - \\text{Variable kostnader}$$

**Påslag** er det beløpet vi legger på innkjøpsprisen for å dekke kostnader og fortjeneste:

$$\\text{Salgspris} = \\text{Innkjøpspris} + \\text{Påslag}$$

Påslaget oppgis ofte i prosent:
$$\\text{Påslag i \\%} = \\frac{\\text{Påslag}}{\\text{Innkjøpspris}} \\cdot 100\\,\\%$$`,
    },
    {
      id: '2py-6-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Påslag og dekningsbidrag',
      problem: `En byggmester kjøper materialer til 4 800 kr og legger på 65 % påslag.

a) Hva blir salgsprisen?
b) Hva er dekningsbidraget?`,
      solution: `**Løsning:**

a) Påslag:
$$4\\,800 \\cdot 0{,}65 = 3\\,120 \\text{ kr}$$

Salgspris:
$$4\\,800 + 3\\,120 = 7\\,920 \\text{ kr}$$

b) Dekningsbidrag = Salgspris $-$ Variable kostnader:
$$7\\,920 - 4\\,800 = 3\\,120 \\text{ kr}$$

Salgsprisen er **7 920 kr** og dekningsbidraget er **3 120 kr**.`,
    },
    {
      id: '2py-6-3-text-2',
      type: 'text',
      content: `## Timepris

Mange håndverkere og tjenesteytere tar betalt per time. Timeprisen må dekke alle kostnadene pluss gi fortjeneste.

**Beregning av timepris:**
$$\\text{Timepris} = \\frac{\\text{Totale kostnader} + \\text{Ønsket fortjeneste}}{\\text{Antall fakturerbare timer}}$$

**Merk:** Ikke alle arbeidstimer kan faktureres. Tid til administrasjon, kurs, kjøring, og lignende er ikke fakturerbar.`,
    },
    {
      id: '2py-6-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Beregne timepris',
      problem: `En selvstendig snekker har disse årskostnadene:
- Lønn til seg selv: 480 000 kr
- Husleie verksted: 60 000 kr
- Verktøy og materialer: 35 000 kr
- Forsikring og bil: 85 000 kr
- Ønsket fortjeneste: 100 000 kr

Han jobber 1 800 timer i året, men kan bare fakturere 1 400 av dem.

Hva bør timeprisen være (ekskl. mva)?`,
      solution: `**Løsning:**

Totale kostnader:
$$480\\,000 + 60\\,000 + 35\\,000 + 85\\,000 = 660\\,000 \\text{ kr}$$

Totalt å dekke (kostnader + fortjeneste):
$$660\\,000 + 100\\,000 = 760\\,000 \\text{ kr}$$

Timepris:
$$\\frac{760\\,000}{1\\,400} \\approx 543 \\text{ kr}$$

Timeprisen bør være ca. **543 kr ekskl. mva**.`,
    },
    {
      id: '2py-6-3-tip-1',
      type: 'tip',
      title: 'Husk mva',
      content: `Prisene vi beregner er ofte **eksklusive merverdiavgift (mva)**. For de fleste tjenester er mva-satsen 25 %.

Pris inkl. mva = Pris ekskl. mva $\\cdot$ 1,25

For eksempel: 543 kr $\\cdot$ 1,25 = 678,75 kr inkl. mva.`,
    },
    {
      id: '2py-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-6-3-ex-1',
        number: '6.9',
        type: 'classic',
        difficulty: 'lett',
        task: `En maler kjøper inn maling for 2 400 kr til et oppdrag. Han legger på 50 % påslag.

a) Hva er påslaget i kroner?
b) Hva blir salgsprisen for malingen?
c) Hva er dekningsbidraget?`,
        subTasks: [
          { label: 'a', task: 'Beregn påslaget i kroner', solution: '$2\\,400 \\cdot 0{,}50 = 1\\,200$ kr', answer: 1200 },
          { label: 'b', task: 'Beregn salgsprisen', solution: '$2\\,400 + 1\\,200 = 3\\,600$ kr', answer: 3600 },
          { label: 'c', task: 'Beregn dekningsbidraget', solution: 'DB $= 3\\,600 - 2\\,400 = 1\\,200$ kr. Dekningsbidraget er lik påslaget.', answer: 1200 },
        ],
        hints: ['Påslag = innkjøpspris × prosentsats', 'Salgspris = innkjøpspris + påslag'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-6-3-ex-2',
        number: '6.10',
        type: 'classic',
        difficulty: 'lett',
        task: `En bilverksted har disse månedlige kostnadene:
- Husleie: 15 000 kr
- Forsikring: 2 000 kr
- Lønn (en ansatt): 35 000 kr
- Deler og materialer per oppdrag: i snitt 800 kr
- Verkstedet gjør 45 oppdrag per måned.

a) Hva er de faste kostnadene per måned?
b) Hva er de variable kostnadene per måned?
c) Hva er de totale kostnadene per måned?`,
        subTasks: [
          { label: 'a', task: 'Faste kostnader', solution: '$15\\,000 + 2\\,000 + 35\\,000 = 52\\,000$ kr', answer: 52000 },
          { label: 'b', task: 'Variable kostnader', solution: '$800 \\cdot 45 = 36\\,000$ kr', answer: 36000 },
          { label: 'c', task: 'Totale kostnader', solution: '$52\\,000 + 36\\,000 = 88\\,000$ kr', answer: 88000 },
        ],
        hints: ['Faste kostnader er uavhengig av antall oppdrag', 'Variable kostnader = kostnad per oppdrag × antall oppdrag'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-6-3-ex-3',
        number: '6.11',
        type: 'classic',
        difficulty: 'medium',
        task: `En selvstendig elektriker har følgende årskostnader:
- Egen lønn: 520 000 kr
- Bil og drivstoff: 95 000 kr
- Verktøy og utstyr: 40 000 kr
- Forsikring: 25 000 kr
- Ønsket fortjeneste: 80 000 kr

Hun jobber 1 750 timer i året, men kan fakturere 1 200 av dem.

a) Hva er de totale kostnadene per år?
b) Hva bør timeprisen være (ekskl. mva)?
c) Hva blir timeprisen inkl. 25 % mva?
d) En kunde får et oppdrag som tar 6 timer. Hva blir regningen inkl. mva?`,
        subTasks: [
          { label: 'a', task: 'Totale kostnader', solution: '$520\\,000 + 95\\,000 + 40\\,000 + 25\\,000 = 680\\,000$ kr', answer: 680000 },
          { label: 'b', task: 'Timepris ekskl. mva', solution: '$\\frac{680\\,000 + 80\\,000}{1\\,200} = \\frac{760\\,000}{1\\,200} \\approx 633$ kr', answer: 633 },
          { label: 'c', task: 'Timepris inkl. mva', solution: '$633 \\cdot 1{,}25 \\approx 791$ kr', answer: 791 },
          { label: 'd', task: 'Regning for 6 timer', solution: '$791 \\cdot 6 = 4\\,746$ kr inkl. mva', answer: 4746 },
        ],
        hints: ['Totalt å dekke = kostnader + fortjeneste', 'Del på fakturerbare timer', 'Mva: gang med 1,25'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-6-3-ex-4',
        number: '6.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En restaurant lager en rett som koster 68 kr i råvarer. Restauranten bruker et påslag på 300 % for å dekke lønnskostnader, faste kostnader og fortjeneste.

a) Hva blir salgsprisen ekskl. mva?
b) Mva på mat er 15 %. Hva blir prisen inkl. mva?
c) Restauranten serverer 80 porsjoner av denne retten per uke. Hva er det ukentlige dekningsbidraget for denne retten?
d) De faste kostnadene knyttet til denne retten er 8 000 kr per uke. Hva er ukentlig fortjeneste fra denne retten?`,
        subTasks: [
          { label: 'a', task: 'Salgspris ekskl. mva', solution: 'Påslag: $68 \\cdot 3{,}00 = 204$ kr. Salgspris: $68 + 204 = 272$ kr', answer: 272 },
          { label: 'b', task: 'Pris inkl. mva', solution: '$272 \\cdot 1{,}15 = 312{,}80$ kr', answer: 312.80 },
          { label: 'c', task: 'Ukentlig dekningsbidrag', solution: 'DB per porsjon: $272 - 68 = 204$ kr. Ukentlig: $204 \\cdot 80 = 16\\,320$ kr', answer: 16320 },
          { label: 'd', task: 'Ukentlig fortjeneste', solution: 'Fortjeneste $= 16\\,320 - 8\\,000 = 8\\,320$ kr per uke', answer: 8320 },
        ],
        hints: ['300 % påslag betyr at påslaget er 3 ganger innkjøpsprisen', 'Mat har redusert mva-sats (15 %)', 'Fortjeneste = dekningsbidrag − faste kostnader'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 7.3: ENHETSKONVERTERING I PRAKSIS
// ============================================================================

export const CHAPTER_2PY_7_3: TextbookChapter = {
  id: '2py-7-3',
  courseId: '2py',
  chapterNumber: '7.3',
  title: 'Enhetskonvertering i praksis',
  description: 'Lær å konvertere mellom metriske og imperiale enheter, bruke tetthet, og jobbe med temperaturskalaer for internasjonalt arbeid.',
  estimatedMinutes: 50,
  competenceGoals: [
    'konvertere mellom metriske enheter',
    'konvertere mellom metriske og imperiale enheter',
    'bruke tetthet i praktiske beregninger',
    'konvertere mellom temperaturskalaer',
  ],
  content: [
    {
      id: '2py-7-3-intro',
      type: 'text',
      content: `## Hvorfor enhetskonvertering?

I mange yrker møter du ulike måleenheter. En mekaniker kan jobbe med deler målt i tommer. En kokk kan følge amerikanske oppskrifter med cups og ounces. En håndverker som jobber med importerte materialer, må ofte konvertere mellom metriske og imperiale enheter.

Å kunne konvertere mellom enheter er en **praktisk hverdagsferdighet** i arbeidslivet.`,
    },
    {
      id: '2py-7-3-def-1',
      type: 'definition',
      title: 'Metriske enheter (SI-systemet)',
      content: `Det metriske systemet bygger på tierpotenser:

**Lengde:**
- 1 km = 1 000 m
- 1 m = 100 cm = 1 000 mm

**Vekt:**
- 1 tonn = 1 000 kg
- 1 kg = 1 000 g

**Volum:**
- 1 m³ = 1 000 liter
- 1 liter = 10 dl = 100 cl = 1 000 ml

**Areal:**
- 1 m² = 10 000 cm²
- 1 km² = 1 000 000 m²`,
    },
    {
      id: '2py-7-3-def-2',
      type: 'definition',
      title: 'Imperiale enheter',
      content: `Det imperiale systemet brukes i USA, Storbritannia og noen andre land:

**Lengde:**
- 1 tomme (inch) = 2,54 cm
- 1 fot (foot) = 30,48 cm = 12 tommer
- 1 yard = 91,44 cm = 3 fot
- 1 mile = 1,609 km

**Vekt:**
- 1 ounce (oz) = 28,35 g
- 1 pound (lb) = 453,6 g = 16 oz

**Volum:**
- 1 gallon (US) = 3,785 liter
- 1 cup = 2,37 dl`,
    },
    {
      id: '2py-7-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Konvertering av lengde',
      problem: `En snekker bestiller skruer fra USA. Skruene er 3/4 tomme lange. Hvor mange millimeter er det?`,
      solution: `**Løsning:**

1 tomme = 2,54 cm = 25,4 mm

$$\\frac{3}{4} \\text{ tomme} = 0{,}75 \\cdot 25{,}4 \\text{ mm} = 19{,}05 \\text{ mm}$$

Skruene er **19,05 mm** lange.`,
    },
    {
      id: '2py-7-3-text-2',
      type: 'text',
      content: `## Tetthet

**Tetthet** beskriver forholdet mellom masse og volum. Tetthet brukes blant annet i bygg, industri og matfag.

$$\\text{Tetthet} = \\frac{\\text{Masse}}{\\text{Volum}} \\quad \\text{(enhet: kg/m³ eller g/cm³)}$$

Noen vanlige tettheter:
| Materiale | Tetthet |
|-----------|---------|
| Vann | 1 000 kg/m³ |
| Betong | 2 300 kg/m³ |
| Stål | 7 800 kg/m³ |
| Tre (furu) | 500 kg/m³ |
| Aluminium | 2 700 kg/m³ |`,
    },
    {
      id: '2py-7-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Bruke tetthet',
      problem: `En betongarbeider skal støpe et gulv som er 5 m langt, 4 m bredt og 10 cm tykt. Betong har tetthet 2 300 kg/m³.

Hvor mange kg betong trengs?`,
      solution: `**Løsning:**

Først finner vi volumet (husk å konvertere 10 cm til 0,1 m):
$$V = 5 \\cdot 4 \\cdot 0{,}1 = 2 \\text{ m}^3$$

Deretter bruker vi tetthetsformelen:
$$\\text{Masse} = \\text{Tetthet} \\cdot \\text{Volum} = 2\\,300 \\cdot 2 = 4\\,600 \\text{ kg}$$

Det trengs **4 600 kg** betong, altså 4,6 tonn.`,
    },
    {
      id: '2py-7-3-def-3',
      type: 'definition',
      title: 'Temperaturskalaer',
      content: `Det finnes tre vanlige temperaturskalaer:

**Celsius (°C):** Brukes i Norge og det meste av verden.
**Fahrenheit (°F):** Brukes i USA.
**Kelvin (K):** Brukes i vitenskapen.

**Omregningsformler:**
$$°F = °C \\cdot 1{,}8 + 32$$
$$°C = \\frac{°F - 32}{1{,}8}$$
$$K = °C + 273{,}15$$`,
    },
    {
      id: '2py-7-3-example-3',
      type: 'example',
      title: 'Eksempel 3: Temperaturkonvertering',
      problem: `En kokk leser en amerikansk oppskrift som sier at kyllingen skal stekes på 375 °F. Hva er dette i Celsius?`,
      solution: `**Løsning:**

$$°C = \\frac{°F - 32}{1{,}8} = \\frac{375 - 32}{1{,}8} = \\frac{343}{1{,}8} \\approx 190{,}6$$

Kyllingen skal stekes på ca. **190 °C**.`,
    },
    {
      id: '2py-7-3-tip-1',
      type: 'tip',
      title: 'Tommelfingerregler',
      content: `For rask overslag i hodet:
- **Tommer til cm:** Gang med 2,5
- **Pounds til kg:** Del på 2,2
- **Miles til km:** Gang med 1,6
- **Fahrenheit til Celsius:** Trekk fra 30, del på 2 (gir ca.-verdi)

For eksempel: 100 °F $\\approx$ (100 − 30) / 2 = 35 °C (nøyaktig: 37,8 °C).`,
    },
    {
      id: '2py-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-7-3-ex-1',
        number: '7.9',
        type: 'classic',
        difficulty: 'lett',
        task: `Konverter følgende mål:

a) 5 tommer til cm
b) 150 pounds (lb) til kg
c) 3 miles til km`,
        subTasks: [
          { label: 'a', task: 'Konverter 5 tommer til cm', solution: '$5 \\cdot 2{,}54 = 12{,}70$ cm', answer: 12.70 },
          { label: 'b', task: 'Konverter 150 lb til kg', solution: '$150 \\cdot 453{,}6 \\text{ g} = 68\\,040 \\text{ g} = 68{,}04$ kg', answer: 68.04 },
          { label: 'c', task: 'Konverter 3 miles til km', solution: '$3 \\cdot 1{,}609 = 4{,}827$ km $\\approx 4{,}83$ km', answer: 4.83 },
        ],
        hints: ['1 tomme = 2,54 cm', '1 lb = 453,6 g', '1 mile = 1,609 km'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-7-3-ex-2',
        number: '7.10',
        type: 'classic',
        difficulty: 'lett',
        task: `Konverter temperaturene:

a) 200 °C til Fahrenheit
b) 68 °F til Celsius
c) 25 °C til Kelvin`,
        subTasks: [
          { label: 'a', task: 'Konverter 200 °C til °F', solution: '$200 \\cdot 1{,}8 + 32 = 360 + 32 = 392$ °F', answer: 392 },
          { label: 'b', task: 'Konverter 68 °F til °C', solution: '$\\frac{68 - 32}{1{,}8} = \\frac{36}{1{,}8} = 20$ °C', answer: 20 },
          { label: 'c', task: 'Konverter 25 °C til K', solution: '$25 + 273{,}15 = 298{,}15$ K', answer: 298.15 },
        ],
        hints: ['°F = °C · 1,8 + 32', '°C = (°F − 32) / 1,8', 'K = °C + 273,15'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-7-3-ex-3',
        number: '7.11',
        type: 'classic',
        difficulty: 'medium',
        task: `En sveiser skal lage en stålplate som er 120 cm lang, 60 cm bred og 5 mm tykk. Stål har tetthet 7 800 kg/m³.

a) Regn om dimensjonene til meter.
b) Beregn volumet av stålplaten i m³.
c) Beregn massen av stålplaten i kg.
d) Stålprisen er 18 kr per kg. Hva koster materialet?`,
        subTasks: [
          { label: 'a', task: 'Regn om til meter', solution: '$120$ cm $= 1{,}20$ m, $60$ cm $= 0{,}60$ m, $5$ mm $= 0{,}005$ m' },
          { label: 'b', task: 'Beregn volumet', solution: '$V = 1{,}20 \\cdot 0{,}60 \\cdot 0{,}005 = 0{,}0036$ m³', answer: 0.0036 },
          { label: 'c', task: 'Beregn massen', solution: '$m = 7\\,800 \\cdot 0{,}0036 = 28{,}08$ kg', answer: 28.08 },
          { label: 'd', task: 'Beregn materialkostnaden', solution: '$28{,}08 \\cdot 18 = 505{,}44$ kr', answer: 505.44 },
        ],
        hints: ['1 cm = 0,01 m og 1 mm = 0,001 m', 'Masse = tetthet × volum'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-7-3-ex-4',
        number: '7.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En norsk kokk skal lage en amerikansk oppskrift. Oppskriften sier:

- 2 cups melk
- 1,5 lb kjøttdeig
- Stek på 350 °F i 45 minutter

a) Hvor mange desiliter er 2 cups?
b) Hvor mange gram er 1,5 lb kjøttdeig?
c) Hva er 350 °F i Celsius?
d) Kokken vil doble oppskriften. Hvor mange liter melk og hvor mange kg kjøttdeig trenger han da?`,
        subTasks: [
          { label: 'a', task: 'Konverter 2 cups til dl', solution: '$2 \\cdot 2{,}37 = 4{,}74$ dl', answer: 4.74 },
          { label: 'b', task: 'Konverter 1,5 lb til gram', solution: '$1{,}5 \\cdot 453{,}6 = 680{,}4$ g', answer: 680.4 },
          { label: 'c', task: 'Konverter 350 °F til °C', solution: '$\\frac{350 - 32}{1{,}8} = \\frac{318}{1{,}8} \\approx 176{,}7$ °C $\\approx 175$ °C', answer: 177 },
          { label: 'd', task: 'Doble oppskriften', solution: 'Melk: $4{,}74 \\cdot 2 = 9{,}48$ dl $\\approx 0{,}95$ liter. Kjøttdeig: $680{,}4 \\cdot 2 = 1\\,360{,}8$ g $\\approx 1{,}36$ kg.' },
        ],
        hints: ['1 cup = 2,37 dl', '1 lb = 453,6 g', 'Bruk formelen °C = (°F − 32) / 1,8'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.4: ULIKHETER I PRAKSIS
// ============================================================================

export const CHAPTER_2PY_9_4: TextbookChapter = {
  id: '2py-9-4',
  courseId: '2py',
  chapterNumber: '9.4',
  title: 'Ulikheter i praksis',
  description: 'Lær å løse lineære ulikheter, tolke dem grafisk, og bruke grenser og begrensninger fra yrkeslivet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'løse lineære ulikheter',
    'vise løsningsmengden på en tallinje',
    'bruke ulikheter til å løse praktiske problemer med begrensninger',
  ],
  content: [
    {
      id: '2py-9-4-intro',
      type: 'text',
      content: `## Ulikheter i arbeidslivet

I likninger finner vi en nøyaktig verdi. Men i mange situasjoner er det ikke én bestemt verdi som gjelder, men en **grense** eller et **område**.

- «Bilen tåler **maks** 500 kg last» → Last $\\leq$ 500 kg
- «Temperaturen må være **minst** 60 °C» → $T \\geq 60$
- «Budsjettet er **under** 50 000 kr» → Kostnad $< 50\\,000$

Slike utsagn uttrykkes matematisk med **ulikheter**.`,
    },
    {
      id: '2py-9-4-def-1',
      type: 'definition',
      title: 'Ulikhetstegn',
      content: `Vi bruker fire ulikhetstegn:

| Symbol | Betydning |
|--------|-----------|
| $<$ | mindre enn (strengt) |
| $>$ | større enn (strengt) |
| $\\leq$ | mindre enn eller lik |
| $\\geq$ | større enn eller lik |

En **ulikhet** er et utsagn med et ulikhetstegn i stedet for likhetstegn.`,
    },
    {
      id: '2py-9-4-text-2',
      type: 'text',
      content: `## Løse lineære ulikheter

Vi løser ulikheter på **nesten** samme måte som likninger:
1. Vi kan legge til eller trekke fra samme tall på begge sider.
2. Vi kan gange eller dele med et **positivt** tall uten å endre ulikhetstegnet.
3. **OBS!** Når vi ganger eller deler med et **negativt** tall, må vi **snu ulikhetstegnet**.`,
    },
    {
      id: '2py-9-4-warning-1',
      type: 'warning',
      title: 'Viktig regel',
      content: `Når du ganger eller deler begge sider av en ulikhet med et **negativt tall**, må du **snu ulikhetstegnet**!

For eksempel:
$$-2x > 6$$
Del med $-2$ (negativt tall, snu tegnet):
$$x < -3$$`,
    },
    {
      id: '2py-9-4-example-1',
      type: 'example',
      title: 'Eksempel 1: Enkel ulikhet',
      problem: `En heis tåler maks 800 kg. Heisen veier 200 kg selv. Hvor mye last kan den ta?`,
      solution: `**Løsning:**

La $x$ være lasten i kg. Total vekt må være høyst 800 kg:
$$200 + x \\leq 800$$

Trekker fra 200:
$$x \\leq 600$$

Heisen kan ta **maks 600 kg** last.

På talllinjen viser vi dette som alle verdier fra 0 til 600 (med fylte endepunkter).`,
    },
    {
      id: '2py-9-4-example-2',
      type: 'example',
      title: 'Eksempel 2: Ulikhet med budsjett',
      problem: `En tømrer har et materialbudsjett på 25 000 kr. Han har allerede brukt 8 400 kr. Han trenger planker som koster 350 kr per stk.

Hvor mange planker kan han kjøpe?`,
      solution: `**Løsning:**

La $x$ være antall planker. Totalkosten må holde seg innenfor budsjettet:
$$8\\,400 + 350x \\leq 25\\,000$$

Trekker fra 8 400:
$$350x \\leq 16\\,600$$

Deler på 350:
$$x \\leq 47{,}4$$

Siden han kun kan kjøpe hele planker, kan han kjøpe **maks 47 planker**.`,
    },
    {
      id: '2py-9-4-text-3',
      type: 'text',
      content: `## Grafisk løsning

En ulikhet kan vises grafisk:

- **På talllinjen:** Marker området der løsningen gjelder. Bruk fylt prikk (●) for $\\leq$ og $\\geq$, åpen prikk (○) for $<$ og $>$.
- **I koordinatsystemet:** Tegn linjen og skyggelegg området som oppfyller ulikheten.

For eksempel vises $x \\leq 47$ på talllinjen som en pil mot venstre fra 47, med fylt prikk i 47.`,
    },
    {
      id: '2py-9-4-example-3',
      type: 'example',
      title: 'Eksempel 3: Ulikhet med negativt tall',
      problem: `Temperaturen i et fryselager skal være under $-18$ °C. En termostat justerer temperaturen med $-2$ °C per knappetrykk fra starttemperatur $-10$ °C.

Etter $x$ knappetrykk er temperaturen $-10 - 2x$. Hvor mange knappetrykk trengs for at temperaturen skal komme under $-18$ °C?`,
      solution: `**Løsning:**

Temperaturen etter $x$ trykk: $-10 - 2x$

Kravet er at temperaturen skal være under $-18$ °C:
$$-10 - 2x < -18$$

Legger til 10 på begge sider:
$$-2x < -8$$

Deler på $-2$ (**snur tegnet**):
$$x > 4$$

Det trengs **mer enn 4 knappetrykk**, altså minst 5 trykk.

**Kontroll:** Etter 5 trykk: $-10 - 2 \\cdot 5 = -20$ °C. Ja, $-20 < -18$ ✓`,
    },
    {
      id: '2py-9-4-tip-1',
      type: 'tip',
      title: 'Kontroller svaret',
      content: `Du kan kontrollere en ulikhet ved å sette inn en verdi fra løsningsmengden og sjekke at den opprinnelige ulikheten stemmer. Prøv gjerne også en verdi som **ikke** er i løsningsmengden for å bekrefte at den ikke oppfyller ulikheten.`,
    },
    {
      id: '2py-9-4-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-9-4-ex-1',
        number: '9.13',
        type: 'classic',
        difficulty: 'lett',
        task: `Løs ulikhetene:

a) $x + 12 > 30$
b) $3x \\leq 45$
c) $2x - 8 \\geq 20$`,
        subTasks: [
          { label: 'a', task: 'Løs $x + 12 > 30$', solution: '$x > 30 - 12$, altså $x > 18$' },
          { label: 'b', task: 'Løs $3x \\leq 45$', solution: '$x \\leq \\frac{45}{3} = 15$', answer: 15 },
          { label: 'c', task: 'Løs $2x - 8 \\geq 20$', solution: '$2x \\geq 28$, $x \\geq 14$', answer: 14 },
        ],
        hints: ['Behandle ulikheter som likninger, men husk tegnet', 'Flytt tall uten x til den andre siden'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-9-4-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-9-4-ex-2',
        number: '9.14',
        type: 'classic',
        difficulty: 'lett',
        task: `Løs ulikhetene (husk å snu tegnet ved divisjon med negativt tall):

a) $-x > 5$
b) $-4x \\leq 24$
c) $10 - 3x < 1$`,
        subTasks: [
          { label: 'a', task: 'Løs $-x > 5$', solution: 'Ganger med $-1$ og snur tegnet: $x < -5$' },
          { label: 'b', task: 'Løs $-4x \\leq 24$', solution: 'Deler på $-4$ og snur tegnet: $x \\geq -6$', answer: -6 },
          { label: 'c', task: 'Løs $10 - 3x < 1$', solution: '$-3x < 1 - 10 = -9$. Deler på $-3$ og snur: $x > 3$', answer: 3 },
        ],
        hints: ['Husk: gange/dele med negativt tall → snu ulikhetstegnet', 'Flytt ledd med x til én side først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-9-4-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-9-4-ex-3',
        number: '9.15',
        type: 'classic',
        difficulty: 'medium',
        task: `En lastebil har maks lastekapasitet 3 500 kg. Sjåføren har allerede lastet 1 200 kg med utstyr. Han skal laste paller som veier 280 kg per stk.

a) Sett opp en ulikhet for antall paller $x$ han kan laste.
b) Løs ulikheten.
c) Hvor mange hele paller kan han ta med?
d) Hvor mye ledig kapasitet er det da igjen?`,
        subTasks: [
          { label: 'a', task: 'Sett opp ulikheten', solution: '$1\\,200 + 280x \\leq 3\\,500$' },
          { label: 'b', task: 'Løs ulikheten', solution: '$280x \\leq 2\\,300$, $x \\leq 8{,}21$' },
          { label: 'c', task: 'Antall hele paller', solution: 'Han kan ta med **8 paller** (må runde ned).', answer: 8 },
          { label: 'd', task: 'Ledig kapasitet', solution: 'Last: $1\\,200 + 280 \\cdot 8 = 1\\,200 + 2\\,240 = 3\\,440$ kg. Ledig: $3\\,500 - 3\\,440 = 60$ kg.', answer: 60 },
        ],
        hints: ['Total last = allerede lastet + nye paller', 'Rund alltid ned når du ikke kan dele paller'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-9-4-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-9-4-ex-4',
        number: '9.16',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En elektriker tilbyr to prismodeller:
- **Modell A:** Fast pris 1 800 kr + 480 kr per time
- **Modell B:** Ingen fast pris, men 720 kr per time

a) Sett opp uttrykk for kostnad med modell A og modell B som funksjon av antall timer $x$.
b) For hvor mange timer er modell A billigere enn modell B? Sett opp og løs ulikheten.
c) Vis løsningen på en tallinje.
d) En kunde trenger 6 timer arbeid. Hvilken modell bør kunden velge, og hvor mye sparer kunden?`,
        subTasks: [
          { label: 'a', task: 'Sett opp uttrykkene', solution: 'Modell A: $K_A = 1\\,800 + 480x$. Modell B: $K_B = 720x$.' },
          { label: 'b', task: 'Finn når A er billigere', solution: '$1\\,800 + 480x < 720x$. $1\\,800 < 240x$. $x > 7{,}5$. Modell A er billigere når oppdraget varer **mer enn 7,5 timer**.' },
          { label: 'c', task: 'Vis på tallinje', solution: 'Åpen prikk ved $x = 7{,}5$, pil mot høyre. For $x > 7{,}5$ er modell A billigst.' },
          { label: 'd', task: '6 timer: hvilket valg?', solution: '$K_A = 1\\,800 + 480 \\cdot 6 = 4\\,680$ kr. $K_B = 720 \\cdot 6 = 4\\,320$ kr. Modell B er billigst. Sparer $4\\,680 - 4\\,320 = 360$ kr.', answer: 360 },
        ],
        hints: ['Sett A < B for å finne når A er billigere', 'Samle x-ledd på én side', '6 < 7,5, så svaret i b) gjelder ikke her'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 12.1: BRØK, DESIMAL OG PROSENT
// ============================================================================

export const CHAPTER_2PY_12_1: TextbookChapter = {
  id: '2py-12-1',
  courseId: '2py',
  chapterNumber: '12.1',
  title: 'Brøk, desimal og prosent',
  description: 'Lær brøkregning, konvertering mellom brøk, desimal og prosent, og bruk dette i oppskrifter og rabattberegninger.',
  estimatedMinutes: 50,
  competenceGoals: [
    'regne med brøk (addisjon, subtraksjon, multiplikasjon, divisjon)',
    'konvertere mellom brøk, desimaltall og prosent',
    'bruke brøk og prosent i praktiske situasjoner',
  ],
  content: [
    {
      id: '2py-12-1-intro',
      type: 'text',
      content: `## Brøk, desimal og prosent i hverdagen

Brøk, desimaltall og prosent er tre måter å uttrykke det samme på: en **del av en helhet**.

- En kokk bruker $\\frac{3}{4}$ liter melk
- En snekker måler 0,75 m
- En butikk gir 75 % rabatt

Alle tre uttrykker den **samme verdien** — bare skrevet på ulike måter. I arbeidslivet må du kunne veksle mellom dem.`,
    },
    {
      id: '2py-12-1-def-1',
      type: 'definition',
      title: 'Brøk, desimal og prosent',
      content: `En **brøk** $\\frac{a}{b}$ betyr «$a$ deler av $b$».

**Omregning:**

| Fra → Til | Metode |
|-----------|--------|
| Brøk → Desimal | Del teller på nevner: $\\frac{3}{4} = 3 \\div 4 = 0{,}75$ |
| Desimal → Prosent | Gang med 100: $0{,}75 \\cdot 100 = 75\\,\\%$ |
| Prosent → Desimal | Del på 100: $75\\,\\% = 0{,}75$ |
| Prosent → Brøk | Skriv over 100 og forkort: $75\\,\\% = \\frac{75}{100} = \\frac{3}{4}$ |
| Desimal → Brøk | $0{,}75 = \\frac{75}{100} = \\frac{3}{4}$ |`,
    },
    {
      id: '2py-12-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Konvertering',
      problem: `Skriv som brøk, desimaltall og prosent: $\\frac{2}{5}$`,
      solution: `**Løsning:**

**Brøk:** $\\frac{2}{5}$

**Desimal:** $\\frac{2}{5} = 2 \\div 5 = 0{,}4$

**Prosent:** $0{,}4 \\cdot 100 = 40\\,\\%$

Altså: $\\frac{2}{5} = 0{,}4 = 40\\,\\%$`,
    },
    {
      id: '2py-12-1-text-2',
      type: 'text',
      content: `## Brøkregning

**Addisjon og subtraksjon** krever **felles nevner**:
$$\\frac{a}{c} + \\frac{b}{c} = \\frac{a + b}{c}$$

Hvis nevnerne er ulike, må du utvide til fellesnevner:
$$\\frac{1}{3} + \\frac{1}{4} = \\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$$

**Multiplikasjon** — gang teller med teller, nevner med nevner:
$$\\frac{a}{b} \\cdot \\frac{c}{d} = \\frac{a \\cdot c}{b \\cdot d}$$

**Divisjon** — gang med den omvendte brøken:
$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\cdot \\frac{d}{c}$$`,
    },
    {
      id: '2py-12-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Brøk i oppskrift',
      problem: `En oppskrift for 4 porsjoner krever $\\frac{3}{4}$ liter melk. Du skal lage 6 porsjoner.

Hvor mye melk trenger du?`,
      solution: `**Løsning:**

Melk per porsjon:
$$\\frac{3/4}{4} = \\frac{3}{4} \\cdot \\frac{1}{4} = \\frac{3}{16} \\text{ liter}$$

For 6 porsjoner:
$$6 \\cdot \\frac{3}{16} = \\frac{18}{16} = \\frac{9}{8} = 1\\frac{1}{8} \\text{ liter}$$

Du trenger $1\\frac{1}{8}$ liter, altså **1,125 liter** melk.`,
    },
    {
      id: '2py-12-1-text-3',
      type: 'text',
      content: `## Prosent i rabatter og påslag

Prosent brukes mye i prisberegninger:

**Rabatt:**
$$\\text{Ny pris} = \\text{Opprinnelig pris} \\cdot (1 - \\text{rabattprosent som desimal})$$

For eksempel: 20 % rabatt på 500 kr:
$$500 \\cdot (1 - 0{,}20) = 500 \\cdot 0{,}80 = 400 \\text{ kr}$$

**Påslag/prisøkning:**
$$\\text{Ny pris} = \\text{Opprinnelig pris} \\cdot (1 + \\text{prosent som desimal})$$`,
    },
    {
      id: '2py-12-1-example-3',
      type: 'example',
      title: 'Eksempel 3: Rabatt på materialer',
      problem: `En byggvarehandel gir 15 % rabatt på bestillinger over 10 000 kr. En snekker bestiller materialer til 14 800 kr.

a) Hva er rabatten i kroner?
b) Hva blir prisen etter rabatt?`,
      solution: `**Løsning:**

a) Rabatt:
$$14\\,800 \\cdot 0{,}15 = 2\\,220 \\text{ kr}$$

b) Pris etter rabatt:
$$14\\,800 - 2\\,220 = 12\\,580 \\text{ kr}$$

Eller direkte: $14\\,800 \\cdot 0{,}85 = 12\\,580$ kr.`,
    },
    {
      id: '2py-12-1-tip-1',
      type: 'tip',
      title: 'Vekselfaktor',
      content: `Bruk **vekselfaktoren** for raskere utregning:
- 15 % rabatt → gang med $1 - 0{,}15 = 0{,}85$
- 25 % påslag → gang med $1 + 0{,}25 = 1{,}25$

Dette er raskere enn å beregne rabatten/påslaget først og deretter trekke fra eller legge til.`,
    },
    {
      id: '2py-12-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-12-1-ex-1',
        number: '12.1',
        type: 'classic',
        difficulty: 'lett',
        task: `Skriv som desimaltall og prosent:

a) $\\frac{1}{4}$
b) $\\frac{3}{5}$
c) $\\frac{7}{8}$`,
        subTasks: [
          { label: 'a', task: 'Konverter $\\frac{1}{4}$', solution: '$\\frac{1}{4} = 0{,}25 = 25\\,\\%$', answer: 0.25 },
          { label: 'b', task: 'Konverter $\\frac{3}{5}$', solution: '$\\frac{3}{5} = 0{,}6 = 60\\,\\%$', answer: 0.6 },
          { label: 'c', task: 'Konverter $\\frac{7}{8}$', solution: '$\\frac{7}{8} = 0{,}875 = 87{,}5\\,\\%$', answer: 0.875 },
        ],
        hints: ['Del telleren på nevneren for å få desimaltall', 'Gang desimaltallet med 100 for å få prosent'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-12-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-12-1-ex-2',
        number: '12.2',
        type: 'classic',
        difficulty: 'lett',
        task: `Regn ut:

a) $\\frac{2}{3} + \\frac{1}{6}$
b) $\\frac{5}{8} - \\frac{1}{4}$
c) $\\frac{3}{4} \\cdot \\frac{2}{5}$`,
        subTasks: [
          { label: 'a', task: 'Regn ut $\\frac{2}{3} + \\frac{1}{6}$', solution: '$\\frac{4}{6} + \\frac{1}{6} = \\frac{5}{6}$', answer: '5/6' },
          { label: 'b', task: 'Regn ut $\\frac{5}{8} - \\frac{1}{4}$', solution: '$\\frac{5}{8} - \\frac{2}{8} = \\frac{3}{8}$', answer: '3/8' },
          { label: 'c', task: 'Regn ut $\\frac{3}{4} \\cdot \\frac{2}{5}$', solution: '$\\frac{3 \\cdot 2}{4 \\cdot 5} = \\frac{6}{20} = \\frac{3}{10}$', answer: '3/10' },
        ],
        hints: ['Finn fellesnevner for addisjon/subtraksjon', 'Ved multiplikasjon: teller ganger teller, nevner ganger nevner'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-12-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-12-1-ex-3',
        number: '12.3',
        type: 'classic',
        difficulty: 'medium',
        task: `En oppskrift for 8 boller krever:
- $\\frac{1}{2}$ liter melk
- $\\frac{3}{4}$ kg mel
- $\\frac{1}{8}$ kg smør

Du skal lage 20 boller.

a) Hvor mye melk trenger du? Svar i liter.
b) Hvor mange gram mel trenger du?
c) Hvor mange gram smør trenger du?`,
        subTasks: [
          { label: 'a', task: 'Melk for 20 boller', solution: '$\\frac{20}{8} \\cdot \\frac{1}{2} = \\frac{20}{16} = 1{,}25$ liter', answer: 1.25 },
          { label: 'b', task: 'Mel for 20 boller i gram', solution: '$\\frac{20}{8} \\cdot \\frac{3}{4} = \\frac{60}{32} = 1{,}875$ kg $= 1\\,875$ g', answer: 1875 },
          { label: 'c', task: 'Smør for 20 boller i gram', solution: '$\\frac{20}{8} \\cdot \\frac{1}{8} = \\frac{20}{64} = 0{,}3125$ kg $= 312{,}5$ g', answer: 312.5 },
        ],
        hints: ['Faktor: 20/8 = 2,5 ganger oppskriften', 'Gang mengdene med denne faktoren'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-12-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-12-1-ex-4',
        number: '12.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En nettbutikk har et tilbud: «25 % rabatt på alle varer, og deretter 10 % ekstra rabatt for medlemmer.»

a) En jakke koster opprinnelig 1 200 kr. Hva koster den etter 25 % rabatt?
b) Hva koster jakken etter ytterligere 10 % medlemsrabatt?
c) Hvor mange prosent har kunden spart totalt sammenlignet med opprinnelig pris?
d) Er det det samme som 35 % rabatt? Begrunn svaret.`,
        subTasks: [
          { label: 'a', task: 'Pris etter 25 % rabatt', solution: '$1\\,200 \\cdot 0{,}75 = 900$ kr', answer: 900 },
          { label: 'b', task: 'Pris etter 10 % ekstra', solution: '$900 \\cdot 0{,}90 = 810$ kr', answer: 810 },
          { label: 'c', task: 'Total besparelse i prosent', solution: 'Spart: $1\\,200 - 810 = 390$ kr. Prosent: $\\frac{390}{1\\,200} \\cdot 100\\,\\% = 32{,}5\\,\\%$', answer: 32.5 },
          { label: 'd', task: 'Er det det samme som 35 %?', solution: 'Nei, 35 % rabatt gir $1\\,200 \\cdot 0{,}65 = 780$ kr. Sukessiv rabatt gir $0{,}75 \\cdot 0{,}90 = 0{,}675$, altså 32,5 % — ikke 35 %.' },
        ],
        hints: ['Bruk vekselfaktor for hver rabatt', 'Suksessive rabatter ganges, ikke adderes', 'Total vekselfaktor: 0,75 · 0,90'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 12.2: FORHOLDSTALL OG BLANDINGER
// ============================================================================

export const CHAPTER_2PY_12_2: TextbookChapter = {
  id: '2py-12-2',
  courseId: '2py',
  chapterNumber: '12.2',
  title: 'Forholdstall og blandinger',
  description: 'Lær om forholdstall, blandingsforhold og hvordan dette brukes i betongblanding, malingblanding og andre yrkessammenhenger.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå og bruke forholdstall',
    'beregne mengder ut fra blandingsforhold',
    'løse praktiske oppgaver med forholdstall fra bygg, industri og matfag',
  ],
  content: [
    {
      id: '2py-12-2-intro',
      type: 'text',
      content: `## Forholdstall i praksis

Et **forholdstall** beskriver sammenhengen mellom to eller flere størrelser. Forholdstall brukes overalt i arbeidslivet:

- **Betongblanding:** Sement, sand og grus i forholdet 1 : 2 : 3
- **Maling:** Maling og tynner blandes 4 : 1
- **Mat:** Eddik og olje til vinaigrette i forholdet 1 : 3
- **Bygg:** Skala og målestokk i tegninger

Forholdstallet **1 : 2 : 3** betyr at for hver del sement, bruker du 2 deler sand og 3 deler grus.`,
    },
    {
      id: '2py-12-2-def-1',
      type: 'definition',
      title: 'Forholdstall',
      content: `Et **forholdstall** $a : b$ uttrykker at mengdene har forholdet $a$ til $b$.

Forholdet kan **forlenges** og **forkortes** som brøker:
$$2 : 3 = 4 : 6 = 6 : 9$$

**Andel av totalen:**
Hvis forholdet er $a : b$, er totalen $a + b$ deler.
- Andel av første: $\\frac{a}{a + b}$
- Andel av andre: $\\frac{b}{a + b}$

For eksempel: Forholdet 2 : 3 betyr totalt 5 deler.
- Første utgjør $\\frac{2}{5} = 40\\,\\%$
- Andre utgjør $\\frac{3}{5} = 60\\,\\%$`,
    },
    {
      id: '2py-12-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Blandingsforhold for betong',
      problem: `Betong blandes i forholdet sement : sand : grus = 1 : 2 : 4. Du trenger totalt 350 kg betong.

Hvor mye av hver komponent trenger du?`,
      solution: `**Løsning:**

Totalt antall deler: $1 + 2 + 4 = 7$ deler.

Vekt per del: $\\frac{350}{7} = 50$ kg.

- Sement: $1 \\cdot 50 = 50$ kg
- Sand: $2 \\cdot 50 = 100$ kg
- Grus: $4 \\cdot 50 = 200$ kg

**Kontroll:** $50 + 100 + 200 = 350$ kg ✓`,
    },
    {
      id: '2py-12-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Malingblanding',
      problem: `En maler skal blande maling og tynner i forholdet 5 : 1. Han trenger totalt 12 liter ferdigblandet maling.

a) Hvor mange liter maling trengs?
b) Hvor mange liter tynner trengs?`,
      solution: `**Løsning:**

Totalt antall deler: $5 + 1 = 6$ deler.

Liter per del: $\\frac{12}{6} = 2$ liter.

a) Maling: $5 \\cdot 2 = 10$ liter.

b) Tynner: $1 \\cdot 2 = 2$ liter.

**Kontroll:** $10 + 2 = 12$ liter ✓`,
    },
    {
      id: '2py-12-2-text-2',
      type: 'text',
      content: `## Forholdstall og skalering

Når du kjenner mengden av én komponent og skal finne de andre, bruker du **skalering**:

1. Finn hvor mye én del tilsvarer.
2. Gang med antall deler for hver komponent.

**Eksempel:** Forholdet er 2 : 5 og du har 300 g av den første komponenten.
- Én del = $\\frac{300}{2} = 150$ g
- Andre komponent: $5 \\cdot 150 = 750$ g`,
    },
    {
      id: '2py-12-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Skalering av oppskrift',
      problem: `En saus har forholdet smør : mel : melk = 1 : 1 : 10.
Kokken har 40 g smør. Hvor mye mel og melk trenger han?`,
      solution: `**Løsning:**

Smør tilsvarer 1 del, og vi har 40 g.

Én del = 40 g.

- Mel: $1 \\cdot 40 = 40$ g
- Melk: $10 \\cdot 40 = 400$ g (eller 4 dl)

Kokken trenger **40 g mel** og **400 g melk**.`,
    },
    {
      id: '2py-12-2-tip-1',
      type: 'tip',
      title: 'Kontroll av blandinger',
      content: `Sjekk alltid at delene summerer til totalen:

Hvis forholdet er $1 : 2 : 4$ og totalen er 350 kg:
$$50 + 100 + 200 = 350 \\text{ ✓}$$

Sjekk også at forholdene stemmer:
$$\\frac{100}{50} = 2 \\text{ ✓}, \\quad \\frac{200}{50} = 4 \\text{ ✓}$$`,
    },
    {
      id: '2py-12-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-12-2-ex-1',
        number: '12.5',
        type: 'classic',
        difficulty: 'lett',
        task: `Mørtel blandes i forholdet sement : sand = 1 : 4. Du trenger 25 kg mørtel totalt.

a) Hvor mange deler er det totalt?
b) Hvor mye veier én del?
c) Hvor mye sement og sand trenger du?`,
        subTasks: [
          { label: 'a', task: 'Antall deler totalt', solution: '$1 + 4 = 5$ deler', answer: 5 },
          { label: 'b', task: 'Vekt per del', solution: '$\\frac{25}{5} = 5$ kg', answer: 5 },
          { label: 'c', task: 'Mengder', solution: 'Sement: $1 \\cdot 5 = 5$ kg. Sand: $4 \\cdot 5 = 20$ kg. Kontroll: $5 + 20 = 25$ ✓' },
        ],
        hints: ['Summer delene for å finne totalt antall deler', 'Del totalmengden på antall deler'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-12-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-12-2-ex-2',
        number: '12.6',
        type: 'classic',
        difficulty: 'lett',
        task: `En maler blander to farger i forholdet hvit : blå = 3 : 1. Han har 2 liter blå maling.

a) Hvor mange liter tilsvarer én del?
b) Hvor mange liter hvit maling trenger han?
c) Hvor mange liter ferdig maling får han totalt?`,
        subTasks: [
          { label: 'a', task: 'Liter per del', solution: 'Blå = 1 del = 2 liter. Én del = 2 liter.', answer: 2 },
          { label: 'b', task: 'Hvit maling', solution: '$3 \\cdot 2 = 6$ liter hvit', answer: 6 },
          { label: 'c', task: 'Totalt', solution: '$6 + 2 = 8$ liter totalt', answer: 8 },
        ],
        hints: ['Du vet at blå = 1 del = 2 liter', 'Gang antall deler med literne per del'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-12-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-12-2-ex-3',
        number: '12.7',
        type: 'classic',
        difficulty: 'medium',
        task: `En betongblanding har forholdet sement : sand : grus = 1 : 3 : 5.

a) Hvor mange deler er det totalt?
b) Et prosjekt krever 450 kg betong. Hvor mye av hver komponent trengs?
c) Sement koster 2,80 kr per kg, sand 0,50 kr per kg og grus 0,40 kr per kg. Hva koster materialene totalt?
d) Arbeideren har allerede 30 kg sement. Hvor mye sand og grus bør han bruke til dette?`,
        subTasks: [
          { label: 'a', task: 'Antall deler', solution: '$1 + 3 + 5 = 9$ deler', answer: 9 },
          { label: 'b', task: 'Mengder for 450 kg', solution: 'Per del: $\\frac{450}{9} = 50$ kg. Sement: $50$ kg. Sand: $150$ kg. Grus: $250$ kg.', answer: 50 },
          { label: 'c', task: 'Totalkostnad', solution: '$50 \\cdot 2{,}80 + 150 \\cdot 0{,}50 + 250 \\cdot 0{,}40 = 140 + 75 + 100 = 315$ kr', answer: 315 },
          { label: 'd', task: 'Sand og grus til 30 kg sement', solution: '30 kg sement = 30 deler. Sand: $3 \\cdot 30 = 90$ kg. Grus: $5 \\cdot 30 = 150$ kg.' },
        ],
        hints: ['Del totalmengden på antall deler', 'Kostnad = mengde × pris per kg', 'Én del = 30 kg når du har 30 kg sement'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-12-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-12-2-ex-4',
        number: '12.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En bartender lager en drink med juice, sprit og soda i forholdet 3 : 1 : 2. Han lager 48 glass der hvert glass er 3 dl.

a) Hvor mange liter drink lager han totalt?
b) Hvor mange liter av juice, sprit og soda trenger han?
c) Juice koster 25 kr per liter, sprit 280 kr per liter, og soda 12 kr per liter. Hva koster råvarene totalt?
d) Hva blir råvarekostnaden per glass? Hvis han selger hvert glass for 95 kr, hva er dekningsbidraget per glass?`,
        subTasks: [
          { label: 'a', task: 'Total mengde', solution: '$48 \\cdot 3$ dl $= 144$ dl $= 14{,}4$ liter', answer: 14.4 },
          { label: 'b', task: 'Mengder per komponent', solution: 'Totalt $3 + 1 + 2 = 6$ deler. Per del: $\\frac{14{,}4}{6} = 2{,}4$ L. Juice: $3 \\cdot 2{,}4 = 7{,}2$ L. Sprit: $1 \\cdot 2{,}4 = 2{,}4$ L. Soda: $2 \\cdot 2{,}4 = 4{,}8$ L.' },
          { label: 'c', task: 'Totalkostnad', solution: '$7{,}2 \\cdot 25 + 2{,}4 \\cdot 280 + 4{,}8 \\cdot 12 = 180 + 672 + 57{,}60 = 909{,}60$ kr', answer: 909.60 },
          { label: 'd', task: 'Kostnad og DB per glass', solution: 'Per glass: $\\frac{909{,}60}{48} = 18{,}95$ kr. DB: $95 - 18{,}95 = 76{,}05$ kr per glass.', answer: 76.05 },
        ],
        hints: ['Regn ut total mengde i liter først', 'Fordel totalen etter forholdstallet', 'Dekningsbidrag = salgspris − variabel kostnad'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const PY_KAP12_CHAPTERS = [CHAPTER_2PY_6_3, CHAPTER_2PY_7_3, CHAPTER_2PY_9_4, CHAPTER_2PY_12_1, CHAPTER_2PY_12_2];
