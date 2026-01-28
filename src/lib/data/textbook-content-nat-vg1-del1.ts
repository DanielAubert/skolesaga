/**
 * Tekstbok innhold for Naturfag VG1 DEL 1
 * Seksjon 1: Naturvitenskapens tenkemåte (1.1-1.5)
 * Seksjon 2: Bølger, stråling og radioaktivitet (2.1-2.7)
 *
 * Dekker LK20 kompetansemål for NAT01-04.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// SEKSJON 1: Naturvitenskapens tenkemåte
// ============================================================================

export const CHAPTER_NAT_VG1_1_1: TextbookChapter = {
  id: 'nat-vg1-1-1',
  courseId: 'nat-vg1',
  chapterNumber: '1.1',
  title: 'Den naturvitenskapelige metoden',
  description: 'Lær om hvordan naturvitenskapen bygger kunnskap gjennom observasjoner, hypoteser, eksperimenter og konklusjoner.',
  estimatedMinutes: 60,
  competenceGoals: ['utforske en selvvalgt naturfaglig problemstilling, presentere funn og argumentere for valg av metoder'],
  content: [
    {
      id: 'nat-vg1-1-1-intro',
      type: 'text',
      content: `## Hva er naturvitenskap?

Naturvitenskap handler om å forstå naturen gjennom systematiske undersøkelser. I motsetning til synsing eller tro, bygger naturvitenskapen på observasjoner og eksperimenter som kan gjentas og etterprøves av andre.

**Den naturvitenskapelige metoden** er en systematisk fremgangsmåte som sikrer at kunnskapen vi bygger er pålitelig og etterprøvbar.

**Stegene i metoden:**
1. **Observasjon** - Registrere noe i naturen
2. **Problemstilling** - Formulere et spørsmål
3. **Hypotese** - Foreslå en testbar forklaring
4. **Eksperiment** - Teste hypotesen systematisk
5. **Dataanalyse** - Tolke resultatene
6. **Konklusjon** - Vurdere om hypotesen støttes`,
    },
    {
      id: 'nat-vg1-1-1-def-1',
      type: 'definition',
      title: 'Variabler i eksperimenter',
      content: `**Uavhengig variabel:** Det vi endrer med vilje (det vi tester effekten av)

**Avhengig variabel:** Det vi måler (resultatet)

**Kontrollvariabler:** Alt annet som holdes konstant for å sikre en rettferdig test

**Eksempel - teste lyseffekt på plantevekst:**
- Uavhengig variabel: Mengde lys
- Avhengig variabel: Plantens høyde
- Kontrollvariabler: Vannmengde, temperatur, jordtype`,
    },
    {
      id: 'nat-vg1-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Undersøkelse av løsningshastighet',
      problem: 'Hvordan påvirker vanntemperaturen hvor raskt sukker løser seg?',
      solution: `**Hypotese:** Sukker løser seg raskere i varmere vann.

**Eksperiment:**
- 3 glass med 200 mL vann (5°C, 20°C, 40°C)
- 3 like store sukkerbiter
- Mål tid til sukkeret er oppløst
- Gjenta 3 ganger

**Resultater:**
| Temperatur | Gj.snitt tid |
|------------|--------------|
| 5°C        | 288 s        |
| 20°C       | 148 s        |
| 40°C       | 61 s         |

**Konklusjon:** Resultatene støtter hypotesen. Sukker løser seg nesten 5 ganger raskere ved 40°C enn ved 5°C.`,
    },
    {
      id: 'nat-vg1-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Identifiser variablene i dette eksperimentet: "En elev undersøker om plantevekst påvirkes av musikk. Hun dyrker to like planter, den ene med klassisk musikk, den andre i stillhet, og måler høyden etter 4 uker."',
        subTasks: [
          { label: 'a', task: 'Hva er den uavhengige variabelen?', solution: 'Musikk (med/uten klassisk musikk)' },
          { label: 'b', task: 'Hva er den avhengige variabelen?', solution: 'Plantens høyde' },
          { label: 'c', task: 'Nevn minst tre kontrollvariabler', solution: 'Lys, vann, temperatur, jordtype, plantetype, pottstørrelse' },
        ],
        solution: 'Uavhengig: musikk, Avhengig: høyde, Kontroll: lys, vann, temperatur m.m.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Du observerer at brødskiver mugner raskere i kjøkkenskapet enn i kjøleskapet. Formuler en problemstilling og en testbar hypotese basert på denne observasjonen.',
        hints: ['Tenk på hva som er forskjellig mellom de to stedene', 'Formuler hypotesen som en påstand som kan testes'],
        solution: 'Problemstilling: "Hvordan påvirker temperatur veksthastigheten til muggsopp?" Hypotese: "Muggsopp vokser raskere ved høyere temperatur."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_1_2: TextbookChapter = {
  id: 'nat-vg1-1-2',
  courseId: 'nat-vg1',
  chapterNumber: '1.2',
  title: 'Hypoteser, modeller og teorier',
  description: 'Forstå forskjellen mellom hypoteser, modeller og teorier, og hvordan de utvikles i naturvitenskapen.',
  estimatedMinutes: 50,
  competenceGoals: ['drøfte hvordan utvikling av naturvitenskapelige hypoteser, modeller og teorier bidrar til at vi kan forstå og forklare verden'],
  content: [
    {
      id: 'nat-vg1-1-2-intro',
      type: 'text',
      content: `## Fra hypotese til teori

Naturvitenskapelig kunnskap utvikles gradvis gjennom testing og revisjon.

**Hypotese → Modell → Teori**

Dette er ikke en enkel lineær prosess, men en dynamisk utvikling der ideer testes, forkastes eller styrkes over tid.`,
    },
    {
      id: 'nat-vg1-1-2-def-1',
      type: 'definition',
      title: 'Hypotese, modell og teori',
      content: `**Hypotese:**
En testbar påstand eller forklaring på et fenomen. Kan støttes eller forkastes gjennom eksperimenter.
*Eksempel:* "Planter vokser bedre med mer lys."

**Modell:**
En forenklet representasjon av virkeligheten som hjelper oss å forstå komplekse fenomener.
*Eksempel:* Bohrs atommodell, klimamodeller, næringskjedemodeller.

**Teori:**
En veletablert forklaring som er støttet av mange uavhengige observasjoner og eksperimenter.
*Eksempel:* Evolusjonsteori, relativitetsteori, celleteorien.

**NB:** I dagligtalen betyr "teori" ofte bare en idé, men i naturvitenskapen er en teori den sterkeste formen for vitenskapelig kunnskap.`,
    },
    {
      id: 'nat-vg1-1-2-def-2',
      type: 'definition',
      title: 'Modellers styrker og begrensninger',
      content: `**Hvorfor bruker vi modeller?**
- Forenkler komplekse fenomener
- Gjør det mulig å teste ideer
- Hjelper oss å forutsi hendelser
- Visualiserer det vi ikke kan se direkte

**Begrensninger:**
- Modeller er forenklinger - de utelater detaljer
- Kan gi feil resultater hvis forutsetningene ikke stemmer
- Må oppdateres når vi får ny kunnskap

**Eksempel - Bohrs atommodell:**
- Styrke: Forklarer hvorfor atomer sender ut bestemte farger lys
- Begrensning: Fungerer ikke godt for atomer med mange elektroner`,
    },
    {
      id: 'nat-vg1-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Klassifiser følgende som hypotese, modell eller teori:',
        subTasks: [
          { label: 'a', task: 'Klimamodeller som brukes til å forutsi temperaturøkning', solution: 'Modell', multipleChoiceOptions: ['Hypotese', 'Modell', 'Teori'] },
          { label: 'b', task: 'Darwins evolusjonsteori', solution: 'Teori', multipleChoiceOptions: ['Hypotese', 'Modell', 'Teori'] },
          { label: 'c', task: '"Bakterier i jorda kan bryte ned plast"', solution: 'Hypotese', multipleChoiceOptions: ['Hypotese', 'Modell', 'Teori'] },
          { label: 'd', task: 'Periodesystemet', solution: 'Modell', multipleChoiceOptions: ['Hypotese', 'Modell', 'Teori'] },
        ],
        solution: 'a) Modell, b) Teori, c) Hypotese, d) Modell',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_1_3: TextbookChapter = {
  id: 'nat-vg1-1-3',
  courseId: 'nat-vg1',
  chapterNumber: '1.3',
  title: 'Vitenskapelig kommunikasjon',
  description: 'Lær å presentere naturfaglige funn og argumentere for valg av metoder.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske en selvvalgt naturfaglig problemstilling, presentere funn og argumentere for valg av metoder'],
  content: [
    {
      id: 'nat-vg1-1-3-intro',
      type: 'text',
      content: `## Hvorfor er kommunikasjon viktig?

Vitenskapelig kunnskap har liten verdi hvis den ikke deles. Forskere må kunne:
- Beskrive hva de har gjort så andre kan gjenta det
- Presentere resultater tydelig
- Argumentere for sine konklusjoner
- Kritisk vurdere andres arbeid`,
    },
    {
      id: 'nat-vg1-1-3-def-1',
      type: 'definition',
      title: 'Strukturen i en vitenskapelig rapport',
      content: `**IMRaD-strukturen:**

**I - Introduksjon**
- Bakgrunn og relevans
- Problemstilling
- Hypotese

**M - Metode**
- Utstyr og materialer
- Fremgangsmåte (detaljert nok til å gjenta)
- Variabler

**R - Resultater**
- Presentasjon av data (tabeller, grafer)
- Ingen tolkning ennå

**a - Analyse/Diskusjon**
- Tolkning av resultater
- Sammenligning med hypotesen
- Feilkilder og usikkerheter
- Forslag til forbedringer

**D - Konklusjon**
- Svar på problemstillingen
- Kort og tydelig`,
    },
    {
      id: 'nat-vg1-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'En rapport inneholder følgende avsnitt. Plasser dem i riktig rekkefølge (IMRaD):\n\nA: "Vi brukte 3 planter av samme art, plantet i like potter med samme jord..."\nB: "Planter som fikk mest lys vokste i gjennomsnitt 4 cm mer enn kontrollgruppen..."\nC: "Resultatene støtter hypotesen om at lys påvirker vekst..."\nD: "Tidligere forskning har vist at lys er viktig for fotosyntese..."',
        solution: 'Riktig rekkefølge: D (Introduksjon), A (Metode), B (Resultater), C (Diskusjon/Konklusjon)',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_1_4: TextbookChapter = {
  id: 'nat-vg1-1-4',
  courseId: 'nat-vg1',
  chapterNumber: '1.4',
  title: 'Risikovurdering og HMS',
  description: 'Lær om sikkerhet i laboratoriet, risikovurdering og forsvarlig håndtering av avfall.',
  estimatedMinutes: 40,
  competenceGoals: ['risikovurdere egne forsøk og håndtere avfallet fra disse på en forsvarlig måte'],
  content: [
    {
      id: 'nat-vg1-1-4-intro',
      type: 'text',
      content: `## Sikkerhet i naturfag

Laboratoriearbeid innebærer potensielle farer. God HMS (helse, miljø og sikkerhet) er grunnleggende.

**Grunnregler:**
- Bruk alltid verneutstyr når påkrevd
- Les sikkerhetsdatablad før du bruker kjemikalier
- Vit hvor nødutstyr befinner seg
- Aldri smak eller lukt direkte på kjemikalier
- Rydd alltid opp etter deg`,
    },
    {
      id: 'nat-vg1-1-4-def-1',
      type: 'definition',
      title: 'Faresymboler',
      content: `**GHS-faresymboler (røde ruter):**

⚠️ **Brannfarlig** - Kan antennes lett
⚠️ **Etsende** - Kan skade hud/øyne
⚠️ **Giftig** - Farlig ved svelging/innånding
⚠️ **Helsefare** - Kan forårsake alvorlig sykdom
⚠️ **Miljøfare** - Skadelig for vannmiljø
⚠️ **Oksiderende** - Kan forårsake/forsterke brann
⚠️ **Gass under trykk** - Kan eksplodere ved oppvarming
⚠️ **Irriterende** - Kan irritere hud/øyne`,
    },
    {
      id: 'nat-vg1-1-4-def-2',
      type: 'definition',
      title: 'Risikovurdering',
      content: `**Før hvert forsøk, vurder:**

1. **Identifiser farene**
   - Hvilke kjemikalier brukes?
   - Brukes varme eller elektrisitet?
   - Er det fare for knusing, kutt?

2. **Vurder risiko**
   - Hvor sannsynlig er det at noe går galt?
   - Hvor alvorlig er konsekvensene?

3. **Planlegg tiltak**
   - Hvilket verneutstyr trengs?
   - Hvordan forebygge uhell?
   - Hva gjør vi hvis noe skjer?

4. **Avfallshåndtering**
   - Hvordan skal restavfall håndteres?
   - Kan det skylles i vasken eller må det spesialhåndteres?`,
    },
    {
      id: 'nat-vg1-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Lag en risikovurdering for følgende forsøk: "Undersøke pH i ulike husholdningsprodukter (eddik, såpe, sitronjuice, oppvaskmiddel) med pH-papir"',
        subTasks: [
          { label: 'a', task: 'Identifiser minst to potensielle farer', solution: 'Søl av væsker, irritasjon ved kontakt med øyne, allergiske reaksjoner' },
          { label: 'b', task: 'Foreslå verneutstyr', solution: 'Vernebriller, evt. hansker' },
          { label: 'c', task: 'Hvordan skal avfallet håndteres?', solution: 'Husholdningsprodukter i små mengder kan skylles i vask med mye vann' },
        ],
        solution: 'En god risikovurdering identifiserer farer, foreslår forebygging og planlegger avfallshåndtering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_1_5: TextbookChapter = {
  id: 'nat-vg1-1-5',
  courseId: 'nat-vg1',
  chapterNumber: '1.5',
  title: 'Programmering og modellering',
  description: 'Bruk programmering til å modellere og utforske naturfaglige fenomener.',
  estimatedMinutes: 55,
  competenceGoals: ['vurdere og lage programmer som modellerer naturfaglige fenomener'],
  content: [
    {
      id: 'nat-vg1-1-5-intro',
      type: 'text',
      content: `## Programmering i naturfag

Programmering er et kraftig verktøy for å modellere og simulere naturfaglige fenomener. Med kode kan vi:
- Beregne og visualisere data
- Simulere prosesser over tid
- Teste "hva hvis"-scenarier
- Automatisere gjentakende beregninger`,
    },
    {
      id: 'nat-vg1-1-5-def-1',
      type: 'definition',
      title: 'Grunnleggende Python',
      content: `**Variabler og beregninger:**
\`\`\`python
# Beregne fart
avstand = 100  # meter
tid = 10       # sekunder
fart = avstand / tid
print(f"Farten er {fart} m/s")
\`\`\`

**Løkker for gjentakelser:**
\`\`\`python
# Simulere befolkningsvekst
befolkning = 1000
vekstrate = 0.02  # 2% årlig vekst

for år in range(10):
    befolkning = befolkning * (1 + vekstrate)
    print(f"År {år+1}: {befolkning:.0f}")
\`\`\``,
    },
    {
      id: 'nat-vg1-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Modellere radioaktiv nedbrytning',
      problem: 'Lag et program som simulerer radioaktiv nedbrytning med halveringstid på 10 år.',
      solution: `\`\`\`python
import matplotlib.pyplot as plt

# Startbetingelser
mengde = 1000  # startmengde
halveringstid = 10  # år
tid = 0
tider = [tid]
mengder = [mengde]

# Simuler i 50 år
while tid < 50:
    tid += 1
    # Formel: N = N0 * 0.5^(t/halveringstid)
    mengde = 1000 * (0.5 ** (tid/halveringstid))
    tider.append(tid)
    mengder.append(mengde)

# Plot resultatet
plt.plot(tider, mengder)
plt.xlabel('Tid (år)')
plt.ylabel('Mengde')
plt.title('Radioaktiv nedbrytning')
plt.grid(True)
plt.show()
\`\`\`

Programmet viser hvordan mengden reduseres til halvparten hver 10. år.`,
    },
    {
      id: 'nat-vg1-1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-1-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Modifiser programmet for radioaktiv nedbrytning til å vise hvor mye som er igjen etter 5 halveringstider. Skriv også ut resultatet.',
        hints: ['5 halveringstider = 50 år', 'Etter hver halveringstid er halvparten igjen'],
        solution: 'Etter 5 halveringstider (50 år) er 1000 * 0.5^5 = 31.25 enheter igjen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// SEKSJON 2: Bølger, stråling og radioaktivitet
// ============================================================================

export const CHAPTER_NAT_VG1_2_1: TextbookChapter = {
  id: 'nat-vg1-2-1',
  courseId: 'nat-vg1',
  chapterNumber: '2.1',
  title: 'Bølger og bølgefenomener',
  description: 'Utforsk grunnleggende bølgeegenskaper som bølgelengde, frekvens og amplitude.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske og beskrive noen sentrale bølgefenomener'],
  content: [
    {
      id: 'nat-vg1-2-1-intro',
      type: 'text',
      content: `## Hva er en bølge?

En bølge er en forstyrrelse som forplanter seg gjennom et medium eller gjennom rommet. Bølger overfører energi uten å flytte materie permanent.

**To hovedtyper:**
- **Tverrbølger:** Svingningene er vinkelrett på bevegelsesretningen (f.eks. lys, bølger på vann)
- **Lengdebølger:** Svingningene er parallelle med bevegelsesretningen (f.eks. lyd)`,
    },
    {
      id: 'nat-vg1-2-1-def-1',
      type: 'definition',
      title: 'Bølgeegenskaper',
      content: `**Bølgelengde (λ):** Avstanden mellom to bølgetopper (måles i meter)

**Frekvens (f):** Antall svingninger per sekund (måles i Hz)

**Amplitude:** Høyden på bølgen fra likevekt til topp

**Bølgehastighet (v):** Hvor raskt bølgen beveger seg

**Sammenhengen:**
$$v = f \\cdot \\lambda$$

Bølgehastighet = frekvens × bølgelengde`,
    },
    {
      id: 'nat-vg1-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Beregne bølgelengde',
      problem: 'En radiosender sender på frekvensen 100 MHz. Hva er bølgelengden når radiobølger beveger seg med lysets hastighet (3·10⁸ m/s)?',
      solution: `**Gitt:**
- f = 100 MHz = 100 · 10⁶ Hz = 1 · 10⁸ Hz
- v = 3 · 10⁸ m/s

**Løsning:**
$$\\lambda = \\frac{v}{f} = \\frac{3 \\cdot 10^8}{1 \\cdot 10^8} = 3 \\text{ m}$$

**Svar:** Bølgelengden er 3 meter.`,
    },
    {
      id: 'nat-vg1-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Lyd beveger seg med 340 m/s i luft. Beregn bølgelengden til en tone på 440 Hz (kammertone A).',
        hints: ['Bruk formelen v = f · λ', 'Løs for λ'],
        solution: 'λ = v/f = 340/440 = 0,77 m (ca. 77 cm)',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_2_2: TextbookChapter = {
  id: 'nat-vg1-2-2',
  courseId: 'nat-vg1',
  chapterNumber: '2.2',
  title: 'Lydbølger og akustikk',
  description: 'Lær om lyd som bølgefenomen, lydhastighet og akustiske fenomener.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske og beskrive noen sentrale bølgefenomener'],
  content: [
    {
      id: 'nat-vg1-2-2-intro',
      type: 'text',
      content: `## Lyd - trykkbølger i luft

Lyd er mekaniske lengdebølger som forplanter seg gjennom et medium (gass, væske eller fast stoff). Lyd kan ikke forplante seg i vakuum.

**Hvordan oppstår lyd?**
Et objekt vibrerer og setter luftmolekylene i bevegelse. Disse støter mot nabomolekylene, og slik sprer lyden seg som områder med høyt og lavt trykk.`,
    },
    {
      id: 'nat-vg1-2-2-def-1',
      type: 'definition',
      title: 'Lydegenskaper',
      content: `**Tonehøyde:** Bestemmes av frekvensen
- Høy frekvens = høy tone
- Lav frekvens = dyp tone
- Mennesker hører 20 Hz - 20 000 Hz

**Styrke (lydnivå):** Bestemmes av amplituden
- Måles i desibel (dB)
- 0 dB = høreterskelen
- 130 dB = smerteterskelen

**Klangfarge:** Bestemmes av overtonene
- Gjør at vi kan skille instrumenter fra hverandre`,
    },
    {
      id: 'nat-vg1-2-2-def-2',
      type: 'definition',
      title: 'Lydhastighet',
      content: `Lydhastigheten avhenger av mediet:

| Medium | Hastighet |
|--------|-----------|
| Luft (20°C) | 343 m/s |
| Vann | 1480 m/s |
| Stål | 5960 m/s |

**Hvorfor?**
- I faste stoffer er molekylene tettere pakket
- Vibrasjoner overføres raskere
- Temperaturen påvirker også (varmere = raskere)`,
    },
    {
      id: 'nat-vg1-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Du ser et lyn og hører tordenen 3 sekunder senere. Hvor langt unna var lynet? (Lydhastighet i luft: 343 m/s)',
        hints: ['Lyset kommer nesten umiddelbart', 'Avstanden = hastighet × tid'],
        solution: 'Avstand = 343 m/s × 3 s = 1029 m ≈ 1 km',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_2_3: TextbookChapter = {
  id: 'nat-vg1-2-3',
  courseId: 'nat-vg1',
  chapterNumber: '2.3',
  title: 'Det elektromagnetiske spekteret',
  description: 'Utforsk de ulike typene elektromagnetisk stråling fra radiobølger til gammastråling.',
  estimatedMinutes: 55,
  competenceGoals: ['utforske og beskrive elektromagnetisk og ioniserende stråling, og vurdere informasjon om stråling og helseeffekter'],
  content: [
    {
      id: 'nat-vg1-2-3-intro',
      type: 'text',
      content: `## Elektromagnetisk stråling

Elektromagnetisk (EM) stråling er bølger av elektriske og magnetiske felt som beveger seg med lysets hastighet. Ulikt lyd trenger de ikke noe medium.

**Alle typer EM-stråling:**
- Har samme hastighet i vakuum (c = 3·10⁸ m/s)
- Skiller seg i frekvens og bølgelengde
- Høyere frekvens = kortere bølgelengde = mer energi`,
    },
    {
      id: 'nat-vg1-2-3-def-1',
      type: 'definition',
      title: 'Det elektromagnetiske spekteret',
      content: `**Fra lav til høy energi:**

| Type | Bølgelengde | Bruksområde |
|------|-------------|-------------|
| Radiobølger | km - cm | Radio, TV, mobil |
| Mikrobølger | cm - mm | WiFi, mikrobølgeovn, radar |
| Infrarød | mm - 700 nm | Varme, fjernkontroll |
| Synlig lys | 700-400 nm | Syn (rød-fiolett) |
| Ultrafiolett | 400-10 nm | Solbrenthet, desinfeksjon |
| Røntgen | 10-0.01 nm | Medisinsk bildetaking |
| Gammastråling | < 0.01 nm | Kreftbehandling |`,
    },
    {
      id: 'nat-vg1-2-3-def-2',
      type: 'definition',
      title: 'Synlig lys',
      content: `Det synlige spekteret (400-700 nm):

**Fargene:**
- Rødt: ~700 nm (lavest energi)
- Oransje: ~620 nm
- Gult: ~580 nm
- Grønt: ~530 nm
- Blått: ~470 nm
- Fiolett: ~400 nm (høyest energi)

**Hvitt lys** er en blanding av alle synlige bølgelengder.

**Svart** er fravær av lys.`,
    },
    {
      id: 'nat-vg1-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Ranger følgende fra lavest til høyest energi: røntgen, synlig lys, mikrobølger, UV-stråling, radiobølger',
        solution: 'Radiobølger < mikrobølger < synlig lys < UV-stråling < røntgen',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_2_4: TextbookChapter = {
  id: 'nat-vg1-2-4',
  courseId: 'nat-vg1',
  chapterNumber: '2.4',
  title: 'Radioaktivitet og kjerneforandringer',
  description: 'Lær om radioaktiv stråling, kjerneforandringer og de tre strålingstypene alfa, beta og gamma.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske og beskrive elektromagnetisk og ioniserende stråling, og vurdere informasjon om stråling og helseeffekter'],
  content: [
    {
      id: 'nat-vg1-2-4-intro',
      type: 'text',
      content: `## Radioaktivitet

Noen atomkjerner er ustabile og sender ut stråling for å bli mer stabile. Denne prosessen kalles **radioaktiv nedbryting** eller **radioaktivitet**.

**Hvorfor er noen kjerner ustabile?**
- For mange nøytroner i forhold til protoner
- For stor kjerne (tunge grunnstoffer)
- Kjernen har for mye energi

**Kjerneforandringer:**
Når en ustabil kjerne sender ut stråling, forandres kjernen - den kan bli et helt annet grunnstoff!`,
    },
    {
      id: 'nat-vg1-2-4-def-1',
      type: 'definition',
      title: 'Typer radioaktiv stråling',
      content: `**Alfastråling (α):**
- Heliumkjerner (2 protoner + 2 nøytroner)
- Atomnummeret synker med 2, massetallet med 4
- Stoppes av papir/hud
- Farlig ved innånding/svelging

**Betastråling (β):**
- Et nøytron omdannes til et proton + et elektron
- Atomnummeret øker med 1, massetallet er uendret
- Stoppes av aluminiumsfolie/tynn plast
- Kan trenge inn i huden

**Gammastråling (γ):**
- Høyenergetisk elektromagnetisk stråling
- Kjernen kvitter seg med overskuddsenergi
- Atomnummer og massetall uendret
- Krever bly eller tykk betong for skjerming`,
    },
    {
      id: 'nat-vg1-2-4-def-2',
      type: 'definition',
      title: 'Kjerneforandringer og isotoper',
      content: `**Isotoper:** Varianter av et grunnstoff med ulikt antall nøytroner.
- Karbon-12: 6 protoner + 6 nøytroner (stabil)
- Karbon-14: 6 protoner + 8 nøytroner (radioaktiv)

**Eksempler på kjerneforandringer:**

**Alfanedbryting av uran-238:**
²³⁸U → ²³⁴Th + ⁴He (alfapartikkel)
Uran-238 blir til thorium-234.

**Betanedbryting av karbon-14:**
¹⁴C → ¹⁴N + e⁻ (betapartikkel)
Karbon-14 blir til nitrogen-14.

**Nedbryting i kjeder:**
Mange radioaktive isotoper brytes ned gjennom flere trinn (nedbrytinskjeder) før de når en stabil isotop.`,
    },
    {
      id: 'nat-vg1-2-4-def-3',
      type: 'definition',
      title: 'Sammenligning av strålingstypene',
      content: `| Egenskap | Alfa (α) | Beta (β) | Gamma (γ) |
|----------|----------|----------|-----------|
| Partikkel | ²He-kjerne | Elektron | Foton |
| Ladning | +2 | −1 | 0 |
| Masse | Stor | Liten | Ingen |
| Rekkevidde i luft | Noen cm | Noen m | Svært lang |
| Stoppes av | Papir/hud | Aluminium | Bly/betong |
| Ioniseringsevne | Høy | Middels | Lav |
| Fare | Innvendig | Hud/innvendig | Gjennomtrengning |`,
    },
    {
      id: 'nat-vg1-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva som skjer med atomnummeret og massetallet ved alfanedbryting og betanedbryting.',
        hints: ['En alfapartikkel har 2 protoner og 2 nøytroner', 'Ved betanedbryting omdannes et nøytron til et proton'],
        solution: 'Ved alfanedbryting mister kjernen 2 protoner og 2 nøytroner, så atomnummeret synker med 2 og massetallet synker med 4. Ved betanedbryting omdannes et nøytron til et proton og et elektron (som sendes ut), så atomnummeret øker med 1 mens massetallet er uendret.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Radon-222 (atomnummer 86) sender ut en alfapartikkel. Hvilket grunnstoff dannes, og hva er massetallet?',
        solution: 'Atomnummer: 86 − 2 = 84 (polonium). Massetall: 222 − 4 = 218. Det dannes polonium-218.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_2_5: TextbookChapter = {
  id: 'nat-vg1-2-5',
  courseId: 'nat-vg1',
  chapterNumber: '2.5',
  title: 'Halveringstid og stråledoser',
  description: 'Forstå halveringstid, beregn reststoff og lær om stråledoser og måleenheter.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske og beskrive elektromagnetisk og ioniserende stråling, og vurdere informasjon om stråling og helseeffekter'],
  content: [
    {
      id: 'nat-vg1-2-5-intro',
      type: 'text',
      content: `## Halveringstid

Radioaktive stoffer brytes ned over tid. **Halveringstid** (t½) er tiden det tar før halvparten av atomene i et radioaktivt stoff har brutt ned.

**Viktig:** Halveringstiden er konstant for hver isotop og kan ikke påvirkes av temperatur, trykk eller kjemiske reaksjoner.`,
    },
    {
      id: 'nat-vg1-2-5-def-1',
      type: 'definition',
      title: 'Halveringstid og beregninger',
      content: `**Formel:**
$$N = N_0 \\cdot \\left(\\frac{1}{2}\\right)^{t/t_{1/2}}$$

Der:
- N₀ = startmengde
- N = gjenstående mengde
- t = tid som har gått
- t½ = halveringstid

**Eksempler på halveringstider:**
| Isotop | Halveringstid | Bruksområde |
|--------|---------------|-------------|
| Radon-222 | 3,8 dager | Naturlig gass i grunnen |
| Jod-131 | 8 dager | Kreftbehandling |
| Cesium-137 | 30 år | Kjernekraftulykker |
| Karbon-14 | 5730 år | Datering av organisk materiale |
| Uran-238 | 4,5 mrd. år | Datering av bergarter |`,
    },
    {
      id: 'nat-vg1-2-5-def-2',
      type: 'definition',
      title: 'Stråledoser og måleenheter',
      content: `**Aktivitet - Becquerel (Bq):**
Antall nedbrytninger per sekund. 1 Bq = 1 nedbryting/s.

**Absorbert dose - Gray (Gy):**
Energi absorbert per kg vev. 1 Gy = 1 J/kg.

**Ekvivalent dose - Sievert (Sv):**
Tar hensyn til stråletype og biologisk virkning.
- Gammastråling: 1 Gy = 1 Sv
- Alfastråling: 1 Gy = 20 Sv (20× mer skadelig!)

**Typiske doser:**
| Kilde | Dose |
|-------|------|
| Røntgen av brystet | 0,1 mSv |
| Flytur Oslo–New York | 0,05 mSv |
| Årlig bakgrunnsstråling (Norge) | ca. 3 mSv |
| CT-skanning | 5–10 mSv |
| Akutt strålesyke | > 1000 mSv |`,
    },
    {
      id: 'nat-vg1-2-5-def-3',
      type: 'definition',
      title: 'Dateringsmetoder',
      content: `**Karbondatering (C-14-metoden):**
Levende organismer tar opp karbon-14 fra atmosfæren. Når organismen dør, slutter opptaket, og C-14 brytes ned med halveringstid 5730 år.

Ved å måle hvor mye C-14 som er igjen, kan vi beregne alderen på organisk materiale opptil ca. 50 000 år.

**Eksempel:** Et bein har 25% av opprinnelig C-14.
- 100% → 50% (1 halveringstid) → 25% (2 halveringstider)
- Alder: 2 × 5730 = 11 460 år

**Bergartsdatering:**
For eldre materialer brukes isotoper med lenger halveringstid, f.eks. uran-bly-metoden (milliarder av år).`,
    },
    {
      id: 'nat-vg1-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Beregning med halveringstid',
      problem: 'Et sykehus har 200 mg jod-131 (t½ = 8 dager). Hvor mye er igjen etter 32 dager?',
      solution: `**Løsning:**

Antall halveringstider: 32 / 8 = 4

Gjenstående mengde:
200 mg → 100 mg → 50 mg → 25 mg → 12,5 mg

Eller med formel:
N = 200 · (1/2)⁴ = 200 · 1/16 = **12,5 mg**

Etter 32 dager er det bare 12,5 mg igjen av de opprinnelige 200 mg.`,
    },
    {
      id: 'nat-vg1-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Cesium-137 har halveringstid på 30 år. Etter Tsjernobyl-ulykken i 1986 ble store områder forurenset. Hvor stor andel av det opprinnelige cesium-137 er igjen i 2046?',
        hints: ['Beregn antall halveringstider fra 1986 til 2046', 'Bruk formelen N = N₀ · (1/2)^n'],
        solution: 'Fra 1986 til 2046 er det 60 år = 2 halveringstider. Gjenstående andel: (1/2)² = 1/4 = 25%. Altså er 25% av det opprinnelige cesium-137 igjen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Et arkeologisk funn inneholder 12,5% av den opprinnelige mengden karbon-14. Halveringstiden for C-14 er 5730 år. Hvor gammelt er funnet?',
        hints: ['Hvor mange halveringstider trengs for å komme fra 100% til 12,5%?', '100% → 50% → 25% → 12,5%'],
        solution: '100% → 50% → 25% → 12,5% = 3 halveringstider. Alder: 3 × 5730 = 17 190 år.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_2_6: TextbookChapter = {
  id: 'nat-vg1-2-6',
  courseId: 'nat-vg1',
  chapterNumber: '2.6',
  title: 'Stråling, helse og strålevern',
  description: 'Vurder helseeffekter av ulike typer stråling og lær om strålevern og beskyttelsestiltak.',
  estimatedMinutes: 45,
  competenceGoals: ['utforske og beskrive elektromagnetisk og ioniserende stråling, og vurdere informasjon om stråling og helseeffekter'],
  content: [
    {
      id: 'nat-vg1-2-6-intro',
      type: 'text',
      content: `## Stråling og kroppen

Ulike typer stråling påvirker kroppen forskjellig. Det er viktig å kunne vurdere reell risiko basert på vitenskap, ikke frykt.

**Hvordan skader ioniserende stråling?**
- Bryter kjemiske bindinger i celler
- Kan skade DNA og føre til mutasjoner
- Høye doser dreper celler direkte
- Lave doser kan øke kreftrisiko over tid`,
    },
    {
      id: 'nat-vg1-2-7-def-1',
      type: 'definition',
      title: 'Strålevern og ALARA',
      content: `**ALARA-prinsippet:** As Low As Reasonably Achievable – hold stråledosen så lav som praktisk mulig.

**Tre prinsipper for strålevern:**

**1. Tid:** Reduser tiden du er eksponert
**2. Avstand:** Øk avstanden til kilden (dosen synker med kvadratet av avstanden)
**3. Skjerming:** Bruk materialer som stopper strålingen (bly, betong)

**Radon i boliger:**
- Radon er en naturlig radioaktiv gass fra grunnen
- Nest største årsak til lungekreft etter røyking
- Ca. 300 lungekrefttilfeller årlig i Norge
- Tiltak: Måle radon, ventilere, tette sprekker i grunnmur`,
    },
    {
      id: 'nat-vg1-2-7-def-2',
      type: 'definition',
      title: 'UV-stråling og helse',
      content: `**UV-stråling fra solen:**

**UV-A (315–400 nm):**
- Trenger dypest i huden
- Aldring, rynker
- Bidrar til hudkreft

**UV-B (280–315 nm):**
- Forårsaker solbrenthet
- Viktig for vitamin D-produksjon
- Hovedårsak til hudkreft

**Beskyttelse:**
- Solkrem (SPF)
- Klær og solbriller
- Unngå sol midt på dagen
- Vær ekstra forsiktig på fjellet og ved vann`,
    },
    {
      id: 'nat-vg1-2-6-def-3',
      type: 'definition',
      title: 'Medisinsk bruk av stråling',
      content: `**Røntgen:** Diagnostisering av beinbrudd og sykdommer
**CT-skanning:** Detaljerte tverrsnittsbilder
**MR:** Bruker magnetfelt, ikke ioniserende stråling
**PET-skanning:** Radioaktive markører viser metabolsk aktivitet
**Strålebehandling:** Målrettet gammastråling dreper kreftceller

**Nytte vs. risiko:**
Medisinsk stråling brukes fordi nytten (korrekt diagnose/behandling) er større enn risikoen ved den lave stråledosen.`,
    },
    {
      id: 'nat-vg1-2-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Vurder disse påstandene – er de korrekte eller myter?',
        subTasks: [
          { label: 'a', task: '"Mobilstråling forårsaker kreft"', solution: 'Ikke bevist – mobilstråling er ikke-ioniserende og har ikke nok energi til å skade DNA direkte. Omfattende forskning har ikke funnet sammenheng.' },
          { label: 'b', task: '"Radon i boliger er den nest største årsaken til lungekreft etter røyking"', solution: 'Korrekt – radon er en radioaktiv gass som kan hope seg opp i boliger og forårsake lungekreft.' },
          { label: 'c', task: '"All stråling er farlig"', solution: 'Myte – synlig lys og infrarød stråling er ufarlig ved normale nivåer. Mengde og type stråling avgjør risikoen.' },
        ],
        solution: 'Det er viktig å basere seg på vitenskapelig dokumentasjon, ikke frykt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_2_7: TextbookChapter = {
  id: 'nat-vg1-2-7',
  courseId: 'nat-vg1',
  chapterNumber: '2.7',
  title: 'Trådløs kommunikasjon',
  description: 'Forstå hovedprinsippene for trådløs kommunikasjon og anvendelser.',
  estimatedMinutes: 50,
  competenceGoals: ['forklare hovedprinsippene for trådløs kommunikasjon og gi eksempler på hva slik teknologi brukes til'],
  content: [
    {
      id: 'nat-vg1-2-7-intro',
      type: 'text',
      content: `## Trådløs kommunikasjon

Trådløs kommunikasjon bruker elektromagnetiske bølger til å overføre informasjon uten fysiske kabler.

**Grunnprinsipp:**
1. Informasjon (lyd, tekst, video) konverteres til digitale signaler
2. Signalene moduleres på en bærebølge
3. Bølgene sendes ut via antenne
4. Mottaker dekoder signalene tilbake til informasjon`,
    },
    {
      id: 'nat-vg1-2-7-def-1',
      type: 'definition',
      title: 'Teknologier og frekvenser',
      content: `**Mobilnett:**
- 4G/LTE: 700-2600 MHz
- 5G: 700 MHz - 26 GHz
- Bruker basestasjoner (master)

**WiFi:**
- 2,4 GHz og 5 GHz
- Rekkevidde: 50-100 m

**Bluetooth:**
- 2,4 GHz
- Kort rekkevidde: 10-100 m
- Lavt strømforbruk

**GPS:**
- Mottar signaler fra satellitter
- Bruker tidsforsinkelse til å beregne posisjon`,
    },
    {
      id: 'nat-vg1-2-7-def-2',
      type: 'definition',
      title: 'Hvordan 5G fungerer',
      content: `**5G-teknologi:**

**Fordeler:**
- Mye høyere hastighet (opptil 10 Gbit/s)
- Lavere forsinkelse (latency)
- Flere enheter samtidig

**Utfordringer:**
- Høyere frekvenser gir kortere rekkevidde
- Krever flere basestasjoner
- Dårligere gjennomtrengning av vegger

**Anvendelser:**
- Streaming i høy kvalitet
- Selvkjørende biler
- Fjernstyrt kirurgi
- Internet of Things (IoT)`,
    },
    {
      id: 'nat-vg1-2-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-2-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvorfor 5G-nett som bruker høye frekvenser (millimeterbølger) krever flere basestasjoner enn 4G.',
        hints: ['Tenk på sammenhengen mellom frekvens og rekkevidde', 'Hva skjer når bølger møter hindringer?'],
        solution: 'Høyere frekvenser (kortere bølgelengder) absorberes lettere av bygninger, trær og regn. De har også kortere rekkevidde i fri luft. Derfor må basestasjonene stå tettere for å gi god dekning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// Export alle kapitler fra del 1
export const NAT_VG1_CHAPTERS_DEL1 = [
  CHAPTER_NAT_VG1_1_1,
  CHAPTER_NAT_VG1_1_2,
  CHAPTER_NAT_VG1_1_3,
  CHAPTER_NAT_VG1_1_4,
  CHAPTER_NAT_VG1_1_5,
  CHAPTER_NAT_VG1_2_1,
  CHAPTER_NAT_VG1_2_2,
  CHAPTER_NAT_VG1_2_3,
  CHAPTER_NAT_VG1_2_4,
  CHAPTER_NAT_VG1_2_5,
  CHAPTER_NAT_VG1_2_6,
  CHAPTER_NAT_VG1_2_7,
];
