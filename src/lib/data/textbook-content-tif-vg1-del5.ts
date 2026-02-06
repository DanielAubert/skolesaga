/* eslint-disable */
// @ts-nocheck
/**
 * Teknologi- og industrifag VG1 - Del 5: Elektro, hydraulikk og pneumatikk
 *
 * Kapittel 5.1-5.8
 * Dekker LK20 kompetansemål for elektro, hydraulikk og pneumatikk
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ===== KAPITTEL 5.1: Grunnleggende elektrisitet =====
const CHAPTER_5_1: TextbookChapter = {
  id: 'tif-vg1-5-1',
  courseId: 'tif-vg1',
  chapterNumber: '5.1',
  title: 'Grunnleggende elektrisitet',
  description: 'Lær om elektrisk strøm, spenning, motstand og Ohms lov.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-5-1-intro',
      type: 'text',
      content: `# Grunnleggende elektrisitet

Elektrisitet er en grunnleggende energiform som driver det meste av moderne teknologi og industri. I dette kapittelet lærer du om de grunnleggende begrepene som strøm, spenning og motstand, samt hvordan disse henger sammen gjennom Ohms lov.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Forklare hva elektrisk strøm, spenning og motstand er
- Anvende Ohms lov i enkle beregninger
- Forstå forskjellen mellom likestrøm og vekselstrøm
- Kjenne til elektriske grunnenheter og prefikser`,
    },
    {
      id: 'tif-vg1-5-1-strom',
      type: 'text',
      content: `## Elektrisk strøm

**Elektrisk strøm** er bevegelse av elektriske ladninger gjennom en leder. I metalliske ledere er det elektroner som beveger seg. Strøm måles i **ampere (A)**.

### Strømmens retning

Historisk ble strømretningen definert som bevegelse fra pluss til minus (konvensjonell strømretning). I virkeligheten beveger elektronene seg motsatt vei, fra minus til pluss. I praksis bruker vi vanligvis den konvensjonelle strømretningen.

### Likestrøm og vekselstrøm

**Likestrøm (DC)** flyter alltid i samme retning. Batterier og solceller leverer likestrøm.

**Vekselstrøm (AC)** skifter retning periodisk. I Norge har vi 50 Hz vekselstrøm i stikkontaktene, som betyr at strømmen skifter retning 100 ganger per sekund.`,
    },
    {
      id: 'tif-vg1-5-1-ex1',
      type: 'text',
      content: `### Eksempel: Strømstyrke

En lommelykt trekker 0,5 A fra batteriet. I løpet av ett minutt (60 sekunder) har det passert:

**Ladningsmengde = Strøm × Tid**
Q = 0,5 A × 60 s = 30 coulomb

Det betyr at omtrent 1,9 × 10²⁰ elektroner har passert gjennom lommelykten.`,
    },
    {
      id: 'tif-vg1-5-1-spenning',
      type: 'text',
      content: `## Elektrisk spenning

**Elektrisk spenning** er den kraften som driver elektronene gjennom en krets. Spenning måles i **volt (V)**.

Spenning kan sammenlignes med trykk i et vannrør - jo høyere trykk (spenning), desto mer vann (strøm) kan presses gjennom røret.

### Vanlige spenningsnivåer

| Kilde | Spenning |
|-------|----------|
| USB-lader | 5 V |
| Bilbatteri | 12 V |
| Stikkontakt (Norge) | 230 V AC |
| Industri trefase | 400 V AC |
| Høyspentledning | 22 000 - 420 000 V |`,
    },
    {
      id: 'tif-vg1-5-1-motstand',
      type: 'text',
      content: `## Elektrisk motstand

**Elektrisk motstand** beskriver hvor vanskelig det er for strømmen å passere gjennom et materiale. Motstand måles i **ohm (Ω)**.

### Faktorer som påvirker motstanden

- **Materiale**: Kobber leder godt, gummi leder dårlig
- **Lengde**: Lengre leder = høyere motstand
- **Tverrsnitt**: Tykkere leder = lavere motstand
- **Temperatur**: Høyere temperatur gir vanligvis høyere motstand i metaller

### Ledere og isolatorer

**Ledere** har lav motstand og lar strøm passere lett (kobber, aluminium, sølv).

**Isolatorer** har svært høy motstand og stopper strømmen (gummi, plast, glass).`,
    },
    {
      id: 'tif-vg1-5-1-ohm',
      type: 'text',
      content: `## Ohms lov

**Ohms lov** beskriver sammenhengen mellom spenning, strøm og motstand:

**U = R × I**

Der:
- U = spenning (volt)
- R = motstand (ohm)
- I = strøm (ampere)

Formelen kan omformes:
- **I = U / R** (for å finne strøm)
- **R = U / I** (for å finne motstand)`,
    },
    {
      id: 'tif-vg1-5-1-ex2',
      type: 'text',
      content: `### Eksempel: Ohms lov

En motstand på 100 Ω er koblet til en 12 V batterikilde. Hvor stor strøm går gjennom motstanden?

**Løsning:**
I = U / R = 12 V / 100 Ω = 0,12 A = 120 mA

Strømmen gjennom motstanden er 120 milliampere.`,
    },
    {
      id: 'tif-vg1-5-1-effekt',
      type: 'text',
      content: `## Elektrisk effekt

**Elektrisk effekt** forteller hvor mye energi som omsettes per tidsenhet. Effekt måles i **watt (W)**.

**P = U × I**

Der:
- P = effekt (watt)
- U = spenning (volt)
- I = strøm (ampere)

### Eksempel: Effektberegning

En varmeovn trekker 10 A fra en 230 V stikkontakt:
P = 230 V × 10 A = 2300 W = 2,3 kW`,
    },
    {
      id: 'tif-vg1-5-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Elektrisk strøm (I)** er bevegelse av ladninger, måles i ampere (A)
- **Elektrisk spenning (U)** er drivkraften bak strømmen, måles i volt (V)
- **Elektrisk motstand (R)** begrenser strømmen, måles i ohm (Ω)
- **Ohms lov**: U = R × I
- **Elektrisk effekt (P)** = U × I, måles i watt (W)
- **Likestrøm (DC)** flyter i én retning, **vekselstrøm (AC)** skifter retning
- Ledere har lav motstand, isolatorer har høy motstand`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-5-1-oppg1',
      number: '5.1.1',
      type: 'multiple-choice',
      task: 'Hva er enheten for elektrisk motstand?',
      options: [
        { id: 'a', text: 'Ampere (A)', isCorrect: false },
        { id: 'b', text: 'Volt (V)', isCorrect: false },
        { id: 'c', text: 'Ohm (Ω)', isCorrect: true },
        { id: 'd', text: 'Watt (W)', isCorrect: false },
      ],
      solution: 'Elektrisk motstand måles i ohm (Ω), oppkalt etter den tyske fysikeren Georg Simon Ohm.',
    },
    {
      id: 'tif-vg1-5-1-oppg2',
      number: '5.1.2',
      type: 'classic',
      task: 'Forklar forskjellen mellom likestrøm (DC) og vekselstrøm (AC). Gi eksempler på kilder som leverer hver type.',
      solution: 'Likestrøm (DC) flyter alltid i samme retning. Eksempler: batterier, solceller, USB-ladere. Vekselstrøm (AC) skifter retning periodisk. I Norge har vi 50 Hz AC i stikkontaktene. Eksempler: strøm fra stikkontakt, generatorer i kraftverk.',
    },
    {
      id: 'tif-vg1-5-1-oppg3',
      number: '5.1.3',
      type: 'classic',
      task: 'En motstand på 220 Ω er koblet til en 9 V batterikilde. Beregn strømmen gjennom motstanden.',
      solution: 'Bruker Ohms lov: I = U / R = 9 V / 220 Ω = 0,041 A ≈ 41 mA. Strømmen gjennom motstanden er omtrent 41 milliampere.',
    },
    {
      id: 'tif-vg1-5-1-oppg4',
      number: '5.1.4',
      type: 'classic',
      task: 'Det går 2 A gjennom en motstand når spenningen er 24 V. Hva er motstandsverdien?',
      solution: 'Bruker Ohms lov omformet: R = U / I = 24 V / 2 A = 12 Ω. Motstanden er 12 ohm.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-5-1-oppg5',
      number: '5.1.5',
      type: 'classic',
      task: 'En elektrisk varmeovn trekker 8 A fra en 230 V stikkontakt. a) Beregn effekten ovnen bruker. b) Hvor mye energi (i kWh) bruker ovnen på 3 timer?',
      solution: 'a) P = U × I = 230 V × 8 A = 1840 W = 1,84 kW. b) Energi = Effekt × Tid = 1,84 kW × 3 h = 5,52 kWh. Ovnen bruker 5,52 kilowattimer på 3 timer.',
    },
    {
      id: 'tif-vg1-5-1-oppg6',
      number: '5.1.6',
      type: 'classic',
      task: 'Forklar hvorfor elektriske ledninger ofte er laget av kobber og isolert med plast. Bruk begrepene leder, isolator og motstand i forklaringen din.',
      solution: 'Kobber er en utmerket leder med svært lav elektrisk motstand, noe som betyr at strømmen kan passere lett uten store energitap. Kobber er også relativt rimelig og lett å bearbeide. Plast er en god isolator med svært høy motstand, som hindrer strømmen i å "lekke" ut til omgivelsene. Dette beskytter mot kortslutning og elektrisk støt. Kombinasjonen gir sikker og effektiv overføring av elektrisk energi.',
    },
  ],
  keyTerms: [
    'elektrisk strøm',
    'ampere',
    'spenning',
    'volt',
    'motstand',
    'ohm',
    'Ohms lov',
    'likestrøm',
    'vekselstrøm',
    'leder',
    'isolator',
    'effekt',
    'watt',
  ],
  competenceGoals: [
    'bruke fagterminologi for å beskrive og dokumentere arbeidsprosesser',
    'gjøre rede for ulike materialers egenskaper og bruksområder',
  ],
};

// ===== KAPITTEL 5.2: Elektriske kretser =====
const CHAPTER_5_2: TextbookChapter = {
  id: 'tif-vg1-5-2',
  courseId: 'tif-vg1',
  chapterNumber: '5.2',
  title: 'Elektriske kretser',
  description: 'Lær om serie- og parallellkoblinger, kretsdiagrammer og elektriske komponenter.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-5-2-intro',
      type: 'text',
      content: `# Elektriske kretser

En elektrisk krets er en lukket bane der elektrisk strøm kan flyte. I dette kapittelet lærer du om hvordan komponenter kobles sammen i serie og parallell, og hvordan du tegner og leser kretsdiagrammer.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Forklare forskjellen mellom serie- og parallellkobling
- Beregne total motstand i enkle kretser
- Lese og tegne enkle kretsdiagrammer
- Kjenne til vanlige elektriske komponenter og deres symboler`,
    },
    {
      id: 'tif-vg1-5-2-grunnleggende',
      type: 'text',
      content: `## Kretsens grunnleggende elementer

En komplett elektrisk krets må ha:
1. **Spenningskilde** - batterier, nettspenning, generator
2. **Leder** - kabler som fører strømmen
3. **Last** - det som bruker strømmen (lampe, motor, motstand)
4. **Lukket krets** - strømmen må kunne gå i ring

### Kortslutning og brudd

**Kortslutning** oppstår når strømmen får en snarvei uten motstand. Dette gir svært høy strøm som kan skade utstyr og forårsake brann.

**Kretsbrudd** betyr at kretsen er åpen og strømmen ikke kan flyte. En bryter skaper kontrollert kretsbrudd.`,
    },
    {
      id: 'tif-vg1-5-2-serie',
      type: 'text',
      content: `## Seriekobling

I en **seriekobling** er komponentene koblet etter hverandre i én rekke. Strømmen må passere gjennom alle komponenter.

### Egenskaper ved seriekobling

- **Strømmen er lik** gjennom alle komponenter
- **Spenningen deles** mellom komponentene
- **Motstanden summeres**: R_total = R₁ + R₂ + R₃ + ...
- Hvis én komponent svikter, stopper hele kretsen

### Formel for total motstand i serie

**R_total = R₁ + R₂ + R₃ + ...**`,
    },
    {
      id: 'tif-vg1-5-2-ex1',
      type: 'text',
      content: `### Eksempel: Seriekobling

Tre motstander på 100 Ω, 220 Ω og 330 Ω er koblet i serie til en 12 V kilde.

**Total motstand:**
R_total = 100 + 220 + 330 = 650 Ω

**Strøm i kretsen:**
I = U / R = 12 V / 650 Ω = 0,0185 A ≈ 18,5 mA

**Spenning over hver motstand:**
U₁ = R₁ × I = 100 × 0,0185 = 1,85 V
U₂ = R₂ × I = 220 × 0,0185 = 4,07 V
U₃ = R₃ × I = 330 × 0,0185 = 6,08 V

Sum: 1,85 + 4,07 + 6,08 = 12 V ✓`,
    },
    {
      id: 'tif-vg1-5-2-parallell',
      type: 'text',
      content: `## Parallellkobling

I en **parallellkobling** er komponentene koblet ved siden av hverandre. Strømmen deler seg mellom grenene.

### Egenskaper ved parallellkobling

- **Spenningen er lik** over alle komponenter
- **Strømmen deles** mellom grenene
- **Total motstand blir lavere** enn den minste enkeltmotstanden
- Hvis én komponent svikter, fungerer de andre fortsatt

### Formel for total motstand i parallell

**1/R_total = 1/R₁ + 1/R₂ + 1/R₃ + ...**

For to motstander i parallell:
**R_total = (R₁ × R₂) / (R₁ + R₂)**`,
    },
    {
      id: 'tif-vg1-5-2-ex2',
      type: 'text',
      content: `### Eksempel: Parallellkobling

To motstander på 100 Ω og 100 Ω er koblet i parallell.

**Total motstand:**
R_total = (100 × 100) / (100 + 100) = 10000 / 200 = 50 Ω

To like motstander i parallell gir halvparten av én motstands verdi.

For tre motstander på 100 Ω, 200 Ω og 300 Ω i parallell:
1/R_total = 1/100 + 1/200 + 1/300 = 0,01 + 0,005 + 0,00333 = 0,01833
R_total = 1 / 0,01833 ≈ 54,5 Ω`,
    },
    {
      id: 'tif-vg1-5-2-symboler',
      type: 'text',
      content: `## Elektriske symboler

I kretsdiagrammer bruker vi standardiserte symboler:

| Komponent | Symbol | Beskrivelse |
|-----------|--------|-------------|
| Motstand | Sikksakkform | Begrenser strøm |
| Kondensator | To parallelle linjer | Lagrer elektrisk energi |
| Spole/Induktor | Spiral | Lagrer magnetisk energi |
| Diode | Trekant med strek | Slipper strøm én vei |
| LED | Diode med piler | Lyser når strøm går |
| Bryter | Åpen/lukket kontakt | Bryter kretsen |
| Batteri | Lang og kort strek | Spenningskilde |
| Jord | Tre horisontale linjer | Referansepunkt |`,
    },
    {
      id: 'tif-vg1-5-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- En elektrisk krets trenger spenningskilde, leder, last og lukket bane
- **Seriekobling**: Strøm lik, spenning deles, R_total = R₁ + R₂ + ...
- **Parallellkobling**: Spenning lik, strøm deles, 1/R_total = 1/R₁ + 1/R₂ + ...
- Kortslutning er farlig og gir ukontrollert høy strøm
- Kretsdiagrammer bruker standardiserte symboler
- I serie stopper kretsen ved komponentsvikt, i parallell fortsetter resten`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-5-2-oppg1',
      number: '5.2.1',
      type: 'multiple-choice',
      task: 'Hva skjer med total motstand når du kobler motstander i parallell?',
      options: [
        { id: 'a', text: 'Total motstand blir høyere enn den høyeste enkeltmotstanden', isCorrect: false },
        { id: 'b', text: 'Total motstand blir lik summen av motstandene', isCorrect: false },
        { id: 'c', text: 'Total motstand blir lavere enn den laveste enkeltmotstanden', isCorrect: true },
        { id: 'd', text: 'Total motstand forblir uendret', isCorrect: false },
      ],
      solution: 'Ved parallellkobling blir total motstand alltid lavere enn den laveste enkeltmotstanden fordi strømmen får flere veier å gå.',
    },
    {
      id: 'tif-vg1-5-2-oppg2',
      number: '5.2.2',
      type: 'classic',
      task: 'Tre motstander på 47 Ω, 100 Ω og 150 Ω er koblet i serie. Beregn total motstand.',
      solution: 'R_total = R₁ + R₂ + R₃ = 47 + 100 + 150 = 297 Ω. Total motstand er 297 ohm.',
    },
    {
      id: 'tif-vg1-5-2-oppg3',
      number: '5.2.3',
      type: 'classic',
      task: 'To motstander på 470 Ω og 680 Ω er koblet i parallell. Beregn total motstand.',
      solution: 'R_total = (R₁ × R₂) / (R₁ + R₂) = (470 × 680) / (470 + 680) = 319600 / 1150 ≈ 278 Ω. Total motstand er omtrent 278 ohm.',
    },
    {
      id: 'tif-vg1-5-2-oppg4',
      number: '5.2.4',
      type: 'classic',
      task: 'Forklar hvorfor julelys koblet i serie slukker alle hvis én pære går, mens husets rombelysning (parallellkoblet) ikke gjør det.',
      solution: 'I seriekoblingen må strømmen passere gjennom alle pærer. Hvis én pære ryker, brytes kretsen og strømmen stopper - alle pærer slukker. I parallellkoblingen har hver lampe sin egen strømvei fra stikkontakten. Hvis én lampe ryker, påvirkes ikke de andre fordi de har sine egne komplette kretser.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-5-2-oppg5',
      number: '5.2.5',
      type: 'classic',
      task: 'En krets har to motstander på 100 Ω koblet i serie, og denne kombinasjonen er koblet i parallell med en 200 Ω motstand. Beregn total motstand i kretsen.',
      solution: 'Først: Serie-delen: R_serie = 100 + 100 = 200 Ω. Deretter: Parallell med 200 Ω: R_total = (200 × 200) / (200 + 200) = 40000 / 400 = 100 Ω. Total motstand i kretsen er 100 ohm.',
    },
    {
      id: 'tif-vg1-5-2-oppg6',
      number: '5.2.6',
      type: 'classic',
      task: 'Tegn et enkelt kretsdiagram med batteri, bryter og to LED-lamper i parallell. Forklar hvorfor parallellkobling er gunstig for denne kretsen.',
      solution: 'Kretsdiagrammet skal vise: Batteri (lang/kort strek) koblet til bryter, deretter to parallelle grener hver med en LED (diode med piler). Parallellkobling er gunstig fordi: 1) Hver LED får full spenning fra batteriet, 2) Hvis én LED svikter, lyser den andre fortsatt, 3) Lysstyrken blir bedre fordi spenningen ikke deles.',
    },
  ],
  keyTerms: [
    'elektrisk krets',
    'seriekobling',
    'parallellkobling',
    'kortslutning',
    'kretsbrudd',
    'spenningskilde',
    'last',
    'kretsdiagram',
    'elektriske symboler',
  ],
  competenceGoals: [
    'bruke fagterminologi for å beskrive og dokumentere arbeidsprosesser',
    'utføre arbeid i henhold til gjeldende regelverk for helse, miljø og sikkerhet',
  ],
};

// ===== KAPITTEL 5.3: Elektrisk sikkerhet =====
const CHAPTER_5_3: TextbookChapter = {
  id: 'tif-vg1-5-3',
  courseId: 'tif-vg1',
  chapterNumber: '5.3',
  title: 'Elektrisk sikkerhet',
  description: 'Lær om farer ved elektrisitet, verneutstyr, jording og sikkerhetstiltak.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-5-3-intro',
      type: 'text',
      content: `# Elektrisk sikkerhet

Elektrisitet er uunnværlig i moderne industri, men kan være livsfarlig ved feil håndtering. I dette kapittelet lærer du om farene ved elektrisitet, hvordan du beskytter deg selv og andre, og hvilke regler som gjelder for elektrisk arbeid.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Forklare hvordan elektrisk strøm påvirker kroppen
- Beskrive sikkerhetstiltak ved arbeid nær elektriske anlegg
- Kjenne til jordfeilbryter og sikringer
- Forstå forskriftene for hvem som kan utføre elektrisk arbeid`,
    },
    {
      id: 'tif-vg1-5-3-farer',
      type: 'text',
      content: `## Farer ved elektrisitet

### Strøm gjennom kroppen

Menneskets motstand varierer fra ca. 1000 Ω (våt hud) til over 100 000 Ω (tørr hud). Ved 230 V kan strømmen bli:
- Tørr hud: 230 V / 100 000 Ω = 2,3 mA (kjennes knapt)
- Våt hud: 230 V / 1000 Ω = 230 mA (livsfarlig!)

### Strømmens virkning på kroppen

| Strømstyrke | Virkning |
|-------------|----------|
| 1 mA | Svak kribling |
| 5-10 mA | Smertefullt, men kan slippe |
| 10-30 mA | Muskelkrampe, kan ikke slippe |
| 30-75 mA | Pustevansker |
| 75-100 mA | Hjerteflimmer, kan være dødelig |
| > 100 mA | Hjertestans |

**30 mA i bare 0,03 sekunder kan være dødelig!**`,
    },
    {
      id: 'tif-vg1-5-3-jord',
      type: 'text',
      content: `## Jording og jordfeilbryter

### Beskyttelsesjord

**Jording** kobler metallkapslingen på elektrisk utstyr til jord. Ved en feil der spenningen kommer på kapslingen, vil strømmen gå til jord i stedet for gjennom personen som tar på utstyret.

### Jordfeilbryter

En **jordfeilbryter** overvåker at strømmen som går ut er lik strømmen som kommer tilbake. Hvis det er forskjell (strøm lekker til jord), bryter den kretsen på millisekunder.

Jordfeilbrytere utløser typisk ved 30 mA jordlekkasje og beskytter mot:
- Elektrisk sjokk
- Brann fra jordfeil
- Skade på utstyr`,
    },
    {
      id: 'tif-vg1-5-3-sikring',
      type: 'text',
      content: `## Sikringer og automatsikringer

### Sikringens funksjon

Sikringer beskytter mot overbelastning og kortslutning ved å bryte kretsen når strømmen blir for høy.

### Typer sikringer

**Smeltsikring**: Metalltråd som smelter ved for høy strøm. Må byttes etter utløsning.

**Automatsikring**: Elektromagnetisk bryter som kan tilbakestilles. Finnes i de fleste moderne sikringsskap.

### Vanlige sikringsstørrelser i boliger

- 10 A: Lys
- 16 A: Vanlige stikkontakter
- 20-25 A: Komfyr, varmtvannsbereder
- 32-63 A: Hovedsikring`,
    },
    {
      id: 'tif-vg1-5-3-ex1',
      type: 'text',
      content: `### Eksempel: Overbelastning

En sikring på 16 A beskytter en stikkontaktkurs. Du kobler til:
- Støvsuger: 1500 W → I = P/U = 1500/230 = 6,5 A
- Vannkoker: 2000 W → I = 2000/230 = 8,7 A
- Brødrister: 800 W → I = 800/230 = 3,5 A

**Total strøm: 6,5 + 8,7 + 3,5 = 18,7 A**

Dette overskrider sikringens 16 A og den vil løse ut!`,
    },
    {
      id: 'tif-vg1-5-3-regler',
      type: 'text',
      content: `## Regler for elektrisk arbeid

### Forskrift om elektriske lavspenningsanlegg (FEL)

I Norge kreves det **sertifisering** for å utføre elektrisk installasjonsarbeid. Som ufaglært kan du:

**LOV å gjøre selv:**
- Bytte sikringer
- Skifte lyspærer
- Skifte støpsel på ledning
- Koble til apparater i stikkontakt
- Bytte batteri i røykvarsler

**IKKE lov uten sertifikat:**
- Installere nye stikkontakter
- Trekke nye ledninger
- Arbeid i sikringsskap (utover å bytte sikringer)
- Installere elektrisk utstyr fast`,
    },
    {
      id: 'tif-vg1-5-3-tiltak',
      type: 'text',
      content: `## Sikkerhetstiltak ved arbeid

### Fem sikkerhetsregler

1. **Frakoble** - Bryt strømmen
2. **Sikre mot innkobling** - Lås bryteren
3. **Kontrollere spenningsfrihet** - Mål med instrument
4. **Jorde og kortslutte** - Ved høyspent arbeid
5. **Avskjerme** - Dekk til farlige deler

### Verneutstyr

- Isolerte verktøy
- Beskyttelsesbriller
- Isolerende hansker og matter
- Ansiktsvern ved arbeid nær lysbue`,
    },
    {
      id: 'tif-vg1-5-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Strøm over 30 mA gjennom kroppen kan være dødelig
- Våt hud gir mye lavere motstand enn tørr hud
- **Jording** leder feilstrøm trygt til jord
- **Jordfeilbryter** bryter ved 30 mA lekkasjestrøm
- **Sikringer** beskytter mot overbelastning og kortslutning
- Bare sertifiserte elektrikere kan utføre installasjonsarbeid
- Følg alltid de fem sikkerhetsreglene ved elektrisk arbeid`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-5-3-oppg1',
      number: '5.3.1',
      type: 'multiple-choice',
      task: 'Ved hvilken strømstyrke løser en vanlig jordfeilbryter ut?',
      options: [
        { id: 'a', text: '10 mA', isCorrect: false },
        { id: 'b', text: '30 mA', isCorrect: true },
        { id: 'c', text: '100 mA', isCorrect: false },
        { id: 'd', text: '1 A', isCorrect: false },
      ],
      solution: 'Jordfeilbrytere i boliger og industri er vanligvis innstilt på 30 mA. Dette er valgt fordi det er under den dødelige grensen ved kort eksponeringstid.',
    },
    {
      id: 'tif-vg1-5-3-oppg2',
      number: '5.3.2',
      type: 'classic',
      task: 'Forklar hvorfor våt hud gjør elektrisk sjokk mer farlig enn med tørr hud.',
      solution: 'Vann leder strøm godt og reduserer hudens elektriske motstand dramatisk. Tørr hud kan ha motstand på 100 000 Ω eller mer, mens våt hud kan ha motstand ned mot 1000 Ω. Ved 230 V gir dette: Tørr: 230V/100000Ω = 2,3 mA (ufarlig). Våt: 230V/1000Ω = 230 mA (dødelig). Derfor er det ekstra farlig å bruke elektrisk utstyr med våte hender eller nær vann.',
    },
    {
      id: 'tif-vg1-5-3-oppg3',
      number: '5.3.3',
      type: 'classic',
      task: 'Hva er forskjellen mellom en sikring og en jordfeilbryter? Hvilken fare beskytter hver av dem mot?',
      solution: 'Sikring beskytter mot overbelastning og kortslutning ved å bryte kretsen når strømmen blir for høy. Den beskytter primært utstyret og hindrer brann. Jordfeilbryter oppdager ubalanse mellom strøm ut og inn - altså lekkasje til jord. Den beskytter primært mennesker mot elektrisk sjokk ved å bryte kretsen hvis strøm lekker gjennom en person til jord.',
    },
    {
      id: 'tif-vg1-5-3-oppg4',
      number: '5.3.4',
      type: 'classic',
      task: 'Liste opp de fem sikkerhetsreglene som skal følges ved arbeid på elektriske anlegg.',
      solution: '1. Frakoble - Bryt strømmen til det du skal arbeide på. 2. Sikre mot innkobling - Lås bryteren og sett opp skilt. 3. Kontrollere spenningsfrihet - Bruk måleinstument for å sjekke at det ikke er spenning. 4. Jorde og kortslutte - Ved høyspent arbeid for ekstra sikkerhet. 5. Avskjerme - Dekk til andre spenningsførende deler i nærheten.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-5-3-oppg5',
      number: '5.3.5',
      type: 'classic',
      task: 'Du skal koble en kaffetrakter (900 W), mikrobølgeovn (1200 W) og brødrister (750 W) til samme stikkontaktkurs med 16 A sikring. Beregn om dette er mulig, og forklar hva som skjer hvis du prøver.',
      solution: 'Beregning av strøm for hver: Kaffetrakter: 900/230 = 3,9 A. Mikrobølgeovn: 1200/230 = 5,2 A. Brødrister: 750/230 = 3,3 A. Total: 3,9 + 5,2 + 3,3 = 12,4 A. Dette er under 16 A, så det vil fungere. MEN: Hvis du i tillegg kobler til en vannkoker på 2000 W (8,7 A), blir totalen 21,1 A og sikringen vil løse ut for å beskytte ledningen mot overoppheting.',
    },
    {
      id: 'tif-vg1-5-3-oppg6',
      number: '5.3.6',
      type: 'classic',
      task: 'En kollega foreslår å tape over en ødelagt ledning med vanlig tape i stedet for å bytte ledningen. Forklar hvorfor dette er farlig og hva som bør gjøres i stedet.',
      solution: 'Vanlig tape er ikke godkjent som elektrisk isolasjon. Den kan: 1) Smelte ved varme fra strømgjennomgang, 2) Slippe opp over tid og eksponere blanke ledere, 3) Ikke gi tilstrekkelig beskyttelse mot elektrisk sjokk. I stedet bør ledningen enten: a) Byttes helt ut, eller b) Repareres med godkjent elektriker-tape (vulkaniserende tape) av en fagperson, eller c) Leveres til en elektriker for vurdering. Ved tvil om ledningens tilstand, bør den alltid byttes.',
    },
  ],
  keyTerms: [
    'elektrisk sikkerhet',
    'jording',
    'jordfeilbryter',
    'sikring',
    'automatsikring',
    'overbelastning',
    'kortslutning',
    'sikkerhetsregler',
    'FEL',
    'elektrisk sjokk',
  ],
  competenceGoals: [
    'utføre arbeid i henhold til gjeldende regelverk for helse, miljø og sikkerhet',
    'reflektere over hvordan teknologisk utvikling påvirker arbeidsoppgaver og arbeidsprosesser',
  ],
};

// ===== KAPITTEL 5.4: Grunnleggende hydraulikk =====
const CHAPTER_5_4: TextbookChapter = {
  id: 'tif-vg1-5-4',
  courseId: 'tif-vg1',
  chapterNumber: '5.4',
  title: 'Grunnleggende hydraulikk',
  description: 'Lær om hydrauliske systemer, komponenter og Pascals lov.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-5-4-intro',
      type: 'text',
      content: `# Grunnleggende hydraulikk

Hydraulikk bruker væske under trykk for å overføre kraft. Hydrauliske systemer finnes i alt fra bremser i biler til gravemaskiner og industrielle presser. I dette kapittelet lærer du prinsippene bak hydraulikk og hvordan hydrauliske systemer er bygget opp.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Forklare Pascals lov og trykkets egenskaper i væsker
- Beskrive hovedkomponentene i et hydraulisk system
- Beregne kraft og trykk i enkle hydrauliske systemer
- Forstå fordeler og ulemper med hydraulikk`,
    },
    {
      id: 'tif-vg1-5-4-pascal',
      type: 'text',
      content: `## Pascals lov

**Pascals lov** sier at trykk i en innestengt væske forplanter seg likt i alle retninger.

**Trykk = Kraft / Areal**
**p = F / A**

Der:
- p = trykk (pascal, Pa, eller bar)
- F = kraft (newton, N)
- A = areal (kvadratmeter, m²)

### Enheter for trykk

| Enhet | Definisjon | Bruk |
|-------|-----------|------|
| Pascal (Pa) | 1 N/m² | SI-enhet |
| Bar | 100 000 Pa | Industri |
| PSI | Pounds per square inch | USA |
| Atmosfære | 101 325 Pa | Meteorologi |

1 bar ≈ 1 atmosfære ≈ 14,5 PSI`,
    },
    {
      id: 'tif-vg1-5-4-forsterkning',
      type: 'text',
      content: `## Kraftforsterkning

Det geniale med hydraulikk er **kraftforsterkning**. Når trykket er likt overalt, vil en stor sylinder gi mer kraft enn en liten.

**F₁ / A₁ = F₂ / A₂**

Dette betyr:
**F₂ = F₁ × (A₂ / A₁)**

Hvis sylinder 2 har 10 ganger større areal enn sylinder 1, får du 10 ganger større kraft ut!

Men: Væskemengden som må flyttes er også 10 ganger større, så stempelet beveger seg 10 ganger kortere.`,
    },
    {
      id: 'tif-vg1-5-4-ex1',
      type: 'text',
      content: `### Eksempel: Hydraulisk jekk

En hydraulisk jekk har:
- Liten sylinder: diameter 2 cm, areal = π × 1² = 3,14 cm²
- Stor sylinder: diameter 10 cm, areal = π × 5² = 78,5 cm²

Du trykker med 100 N kraft på den lille sylinderen.

**Trykk i systemet:**
p = F / A = 100 N / 0,000314 m² = 318 000 Pa ≈ 3,18 bar

**Kraft på stor sylinder:**
F₂ = p × A₂ = 318 000 × 0,00785 = 2496 N ≈ 2500 N

**Kraftforsterkning:**
2500 / 100 = 25 ganger!

Du løfter 250 kg med 10 kg trykkraft.`,
    },
    {
      id: 'tif-vg1-5-4-komponenter',
      type: 'text',
      content: `## Hydrauliske komponenter

### Tank (reservoar)
Lagrer hydraulikkvæsken og tillater luftbobler å slippe ut og væsken å kjøles.

### Pumpe
Skaper trykk ved å presse væsken inn i systemet. Vanlige typer:
- Tannhjulspumpe
- Stempelpumpe
- Vingepumpe

### Sylinder (aktuator)
Omgjør trykk til lineær bevegelse. Typer:
- Enkeltvirkende (trykk én vei, fjær tilbake)
- Dobbeltvirkende (trykk begge veier)

### Ventiler
Styrer væskestrømmen:
- Retningsventil (styrer retning)
- Trykkventil (begrenser maksimaltrykk)
- Strømventil (regulerer hastighet)`,
    },
    {
      id: 'tif-vg1-5-4-vaske',
      type: 'text',
      content: `## Hydraulikkvæske

Hydraulikkvæsken har flere viktige funksjoner:
- **Overføre kraft** fra pumpe til sylinder
- **Smøre** bevegelige deler
- **Kjøle** systemet
- **Beskytte** mot korrosjon

### Typer væske

- **Mineralolje**: Vanligst, basert på petroleum
- **Syntetisk olje**: Bedre egenskaper, dyrere
- **Vannbasert**: Brannhemmende, for spesielle anvendelser

### Viktige egenskaper

- **Viskositet**: Tykkelse/flyteevne (viktig for smøring)
- **Kokepunkt**: Må være høyt nok
- **Fryse punkt**: Må være lavt nok for miljøet`,
    },
    {
      id: 'tif-vg1-5-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Pascals lov**: Trykk forplanter seg likt i alle retninger i væske
- **Trykk = Kraft / Areal** (p = F / A)
- **Kraftforsterkning**: Større areal gir større kraft ved samme trykk
- Hovedkomponenter: Tank, pumpe, sylinder, ventiler, slanger
- Hydraulikkvæsken overfører kraft, smører, kjøler og beskytter
- Fordeler: Stor kraft, presis kontroll, pålitelig
- Ulemper: Lekkasje, miljø, vedlikehold`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-5-4-oppg1',
      number: '5.4.1',
      type: 'multiple-choice',
      task: 'Hva sier Pascals lov om trykk i en innestengt væske?',
      options: [
        { id: 'a', text: 'Trykket er størst nederst i væsken', isCorrect: false },
        { id: 'b', text: 'Trykket forplanter seg likt i alle retninger', isCorrect: true },
        { id: 'c', text: 'Trykket avtar med avstanden fra pumpen', isCorrect: false },
        { id: 'd', text: 'Trykket er proporsjonalt med temperaturen', isCorrect: false },
      ],
      solution: 'Pascals lov sier at trykk i en innestengt væske forplanter seg likt i alle retninger. Dette er grunnprinsippet bak hydraulisk kraftoverføring.',
    },
    {
      id: 'tif-vg1-5-4-oppg2',
      number: '5.4.2',
      type: 'classic',
      task: 'En hydraulisk sylinder har stempelareal på 50 cm². Hvor stor kraft får du ut hvis trykket er 100 bar?',
      solution: 'Først: Omregn enheter. 100 bar = 100 × 100 000 Pa = 10 000 000 Pa. 50 cm² = 0,005 m². Deretter: F = p × A = 10 000 000 Pa × 0,005 m² = 50 000 N = 50 kN. Sylinderen gir 50 000 newton kraft, tilsvarende løfteevne på ca. 5 tonn.',
    },
    {
      id: 'tif-vg1-5-4-oppg3',
      number: '5.4.3',
      type: 'classic',
      task: 'Forklar hvorfor hydrauliske systemer kan oppnå stor kraftforsterkning, og hva som er "prisen" for denne forsterkningen.',
      solution: 'Kraftforsterkning oppnås fordi trykket er likt i hele systemet. Med en stor sylinder og en liten sylinder vil den store gi mer kraft (F = p × A). "Prisen" er at stempelet i den store sylinderen beveger seg kortere enn i den lille. For å flytte den store sylinderen X meter, må den lille bevege seg X × (A_stor/A_liten) meter. Du får ikke mer energi ut enn du putter inn - bare kraft mot hastighet/bevegelse.',
    },
    {
      id: 'tif-vg1-5-4-oppg4',
      number: '5.4.4',
      type: 'classic',
      task: 'Beskriv funksjonen til de fire hovedkomponentene i et hydraulisk system: tank, pumpe, sylinder og ventiler.',
      solution: 'Tank (reservoar): Lagrer hydraulikkvæsken, lar luftbobler stige opp og ut, og bidrar til kjøling av væsken. Pumpe: Skaper trykk ved å presse væske inn i systemet. Pumpen omgjør mekanisk energi til hydraulisk energi. Sylinder (aktuator): Omgjør hydraulisk energi tilbake til mekanisk bevegelse. Stempelet beveger seg når væske under trykk presses inn. Ventiler: Styrer systemet - retningsventiler bestemmer hvor væsken går, trykkventiler beskytter mot for høyt trykk, strømventiler regulerer hastigheten.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-5-4-oppg5',
      number: '5.4.5',
      type: 'classic',
      task: 'En hydraulisk løfteplattform har en sylinder med diameter 15 cm. Maksimalt trykk i systemet er 150 bar. a) Beregn stempelarealet. b) Beregn maksimal løftekraft. c) Hvor mange kg kan plattformen løfte?',
      solution: 'a) Areal = π × r² = π × (0,075)² = 0,0177 m² ≈ 177 cm². b) 150 bar = 15 000 000 Pa. F = p × A = 15 000 000 × 0,0177 = 265 500 N ≈ 265 kN. c) Masse = Kraft / tyngdeakselerasjon = 265 500 / 9,81 ≈ 27 000 kg = 27 tonn. Plattformen kan løfte omtrent 27 tonn.',
    },
    {
      id: 'tif-vg1-5-4-oppg6',
      number: '5.4.6',
      type: 'classic',
      task: 'En gravemaskin har hydraulikklekkasje fra en slange. Diskuter: a) Hvilke sikkerhetsproblemer kan dette føre til? b) Hvilke miljøproblemer? c) Hva bør operatøren gjøre?',
      solution: 'a) Sikkerhetsproblemer: Redusert kraft og kontroll over gravearmen, risiko for plutselig svikt, væsken kan være varm og under trykk - sprut kan skade hud og øyne. b) Miljøproblemer: Hydraulikkolje er miljøskadelig, forurenser jord og grunnvann, skader planter og dyr, må saneres som farlig avfall. c) Operatøren bør: Stoppe arbeidet umiddelbart, merke lekkasjen, rapportere til verksted, samle opp sølt olje med absorberende materialer, sørge for reparasjon før videre bruk. Fortsett aldri arbeid med lekk hydraulikk!',
    },
  ],
  keyTerms: [
    'hydraulikk',
    'Pascals lov',
    'trykk',
    'kraftforsterkning',
    'hydraulisk sylinder',
    'pumpe',
    'ventil',
    'hydraulikkvæske',
    'bar',
    'aktuator',
  ],
  competenceGoals: [
    'bruke fagterminologi for å beskrive og dokumentere arbeidsprosesser',
    'gjøre rede for ulike materialers egenskaper og bruksområder',
  ],
};

// ===== KAPITTEL 5.5: Hydrauliske systemer i praksis =====
const CHAPTER_5_5: TextbookChapter = {
  id: 'tif-vg1-5-5',
  courseId: 'tif-vg1',
  chapterNumber: '5.5',
  title: 'Hydrauliske systemer i praksis',
  description: 'Lær om oppbygging, drift og vedlikehold av hydrauliske systemer.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-5-5-intro',
      type: 'text',
      content: `# Hydrauliske systemer i praksis

I industrien brukes hydraulikk i alt fra presser og løfteutstyr til mobile maskiner som gravemaskiner og trucker. I dette kapittelet lærer du hvordan komplette hydrauliske systemer er bygget opp, hvordan de opereres trygt, og hvordan de vedlikeholdes.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Lese og forstå enkle hydrauliske skjemaer
- Beskrive typiske bruksområder for hydraulikk
- Utføre enkelt vedlikehold på hydrauliske systemer
- Identifisere vanlige feil og årsaker`,
    },
    {
      id: 'tif-vg1-5-5-skjema',
      type: 'text',
      content: `## Hydrauliske skjemaer

Hydrauliske systemer dokumenteres med standardiserte symboler. Viktige symboler:

| Komponent | Symbol beskrivelse |
|-----------|-------------------|
| Pumpe | Sirkel med trekant (peker ut = pumpe) |
| Motor | Sirkel med trekant (peker inn = motor) |
| Sylinder | Rektangel med stempel |
| Tank | Åpen beholder |
| Filter | Rombe |
| Ventil | Firkant med porter |
| Slange | Linje |

### Lese skjema

Et typisk skjema viser:
1. Energikilde (tank + pumpe)
2. Kontroll (ventiler)
3. Aktuator (sylinder/motor)
4. Returledning til tank`,
    },
    {
      id: 'tif-vg1-5-5-bruk',
      type: 'text',
      content: `## Bruksområder

### Stasjonær industri
- **Presser**: Metallforming, plastinjeksjon
- **Løfteutstyr**: Løftebord, gaffeltrucker
- **Maskiner**: CNC-maskiner, roboter
- **Produksjonslinjer**: Transportører, pallettering

### Mobile maskiner
- **Anleggsmaskiner**: Gravemaskiner, hjullastere, dumper
- **Landbruk**: Traktorer, skurtresker
- **Skogsbruk**: Hogstmaskiner, lassbærere
- **Transport**: Lastebilkraner, tipputstyr

### Kjøretøy
- **Bremser**: Hydrauliske bremsesystemer
- **Styring**: Servostyring
- **Fjæring**: Aktiv hydraulisk fjæring`,
    },
    {
      id: 'tif-vg1-5-5-ex1',
      type: 'text',
      content: `### Eksempel: Gaffeltruck hydraulikk

En elektrisk gaffeltruck har tre hydrauliske funksjoner:
1. **Løft**: Dobbeltvirkende sylinder løfter og senker gaflene
2. **Tilt**: Sylindere vipper masten framover/bakover
3. **Sideforskyvning**: Flytter gaflene sideveis

Systemet drives av en elektrisk motor som driver pumpen. Spaker i førerhuset styrer retningsventiler som sender olje til riktig sylinder.

Sikkerhetsventiler hindrer ukontrollert fall hvis slange ryker - lasten settes trygt ned.`,
    },
    {
      id: 'tif-vg1-5-5-vedlikehold',
      type: 'text',
      content: `## Vedlikehold av hydraulikk

### Daglig sjekk
- Kontroller oljenivå i tank
- Se etter synlige lekkasjer
- Lytt etter unormale lyder
- Sjekk at funksjonene virker normalt

### Periodisk vedlikehold
- **Oljeskift**: Typisk årlig eller etter driftstimer
- **Filterskift**: Ved indikator eller intervall
- **Slangebytte**: Før aldersgrense (typisk 6-10 år)
- **Tetthetskontroll**: Sjekk pakninger og tetninger

### Oljeanalyse
Profesjonell oljeanalyse kan avsløre:
- Slitasje (metallpartikler)
- Forurensning (vann, smuss)
- Degradering (oksidisjon)`,
    },
    {
      id: 'tif-vg1-5-5-feil',
      type: 'text',
      content: `## Vanlige feil og årsaker

### Treg eller svak drift
- For lite olje i tanken
- Slitt pumpe
- Intern lekkasje i sylinder
- Tett filter

### Støy fra systemet
- Luft i oljen (kavitasjon)
- Slitt pumpe eller motor
- Løse koblinger

### Overoppheting
- For lite olje
- Tett kjøler
- For høy belastning
- Feil oljetype

### Lekkasje
- Slitte tetninger
- Skadet slange
- Løse koblinger
- Sprekk i komponent`,
    },
    {
      id: 'tif-vg1-5-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Hydrauliske skjemaer bruker standardiserte symboler
- Hydraulikk brukes i industri, anleggsmaskiner og kjøretøy
- Riktig vedlikehold er kritisk for sikkerhet og levetid
- Daglig: Sjekk nivå, lekkasjer, funksjon
- Periodisk: Oljeskift, filterskift, slangebytte
- Vanlige feil: Lekkasje, luft i olje, slitasje, overoppheting
- Ved mistanke om feil - stopp og undersøk!`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-5-5-oppg1',
      number: '5.5.1',
      type: 'multiple-choice',
      task: 'Hva er hovedgrunnen til å skifte hydraulikkolje regelmessig?',
      options: [
        { id: 'a', text: 'Oljen fordamper over tid', isCorrect: false },
        { id: 'b', text: 'Oljen blir forurenset og mister smøreevne', isCorrect: true },
        { id: 'c', text: 'Oljen endrer farge og ser stygg ut', isCorrect: false },
        { id: 'd', text: 'Oljen tar for stor plass i tanken', isCorrect: false },
      ],
      solution: 'Hydraulikkolje blir forurenset med metallpartikler fra slitasje, vann fra kondens, og smuss fra omgivelsene. Den brytes også ned kjemisk over tid. Dette reduserer smøreevnen og kan skade komponenter.',
    },
    {
      id: 'tif-vg1-5-5-oppg2',
      number: '5.5.2',
      type: 'classic',
      task: 'Beskriv hva du bør sjekke daglig før du bruker en hydraulisk maskin.',
      solution: 'Daglig sjekk før bruk: 1) Kontroller oljenivå i tank - skal være mellom min og maks. 2) Visuell inspeksjon for lekkasjer - se under maskinen og ved slangekoblinger. 3) Lytt etter unormale lyder når maskinen startes. 4) Test alle hydrauliske funksjoner - de skal bevege seg jevnt og med normal hastighet. 5) Sjekk at sikkerhetsventiler og nødstopp fungerer.',
    },
    {
      id: 'tif-vg1-5-5-oppg3',
      number: '5.5.3',
      type: 'classic',
      task: 'En gravemaskin har blitt tregere i bevegelsene de siste ukene. List opp mulige årsaker og hvordan du kan sjekke hver av dem.',
      solution: 'Mulige årsaker: 1) For lite olje - sjekk nivå i tank. 2) Tett filter - sjekk filterindikator eller bytt filter. 3) Intern lekkasje i sylindere - se om sylindrene holder posisjon uten bevegelse. 4) Slitt pumpe - mål trykk og sammenlign med spesifikasjon. 5) Feil oljetype eller gammel olje - sjekk oljekvalitet og når den sist ble skiftet. 6) Luft i systemet - lytt etter kavitasjonslyd og se etter skum i tanken.',
    },
    {
      id: 'tif-vg1-5-5-oppg4',
      number: '5.5.4',
      type: 'classic',
      task: 'Forklar hvorfor det er viktig å bruke riktig type hydraulikkolje i et system.',
      solution: 'Riktig oljetype er kritisk fordi: 1) Viskositet - for tykk olje gir treg respons og kavitasjon, for tynn gir dårlig smøring og intern lekkasje. 2) Temperaturområde - oljen må fungere i driftstemperaturen. 3) Kompatibilitet - feil olje kan angripe tetninger og pakninger. 4) Tilsetningsstoffer - beskytter mot slitasje, korrosjon og skumdannelse. 5) Garanti - feil olje kan ugyldiggjøre maskingaranti. Sjekk alltid produsentens anbefalinger!',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-5-5-oppg5',
      number: '5.5.5',
      type: 'classic',
      task: 'Du oppdager en liten oljeflekk under en hydraulisk løfteplattform. Beskriv steg for steg hva du bør gjøre.',
      solution: 'Steg 1: Stopp bruk av plattformen hvis den ikke allerede er i sikker posisjon. Steg 2: Sikre lasten og senk plattformen til gulvnivå hvis mulig. Steg 3: Lokaliser lekkasjen nøyaktig - sjekk slanger, koblinger, sylinder. Steg 4: Vurder alvorlighetsgrad - drypp vs. rennende. Steg 5: Rapporter til vedlikeholdsansvarlig. Steg 6: Merk maskinen som ute av drift (Lockout/Tagout). Steg 7: Samle opp sølt olje med absorberende materialer. Steg 8: Sørg for at lekkasjen repareres før maskinen tas i bruk igjen.',
    },
    {
      id: 'tif-vg1-5-5-oppg6',
      number: '5.5.6',
      type: 'classic',
      task: 'Lag en enkel vedlikeholdsplan for et hydraulisk system. Inkluder daglige, ukentlige, månedlige og årlige oppgaver.',
      solution: 'Vedlikeholdsplan: DAGLIG: Sjekk oljenivå, se etter lekkasjer, test funksjonene, lytt etter unormale lyder. UKENTLIG: Visuell inspeksjon av slanger og koblinger, rengjør tankområdet, sjekk temperatur under drift. MÅNEDLIG: Kontroller filterindikator, smør bevegelige deler, sjekk festeskruer, dokumenter eventuelle avvik. ÅRLIG: Oljeskift (eller etter produsentens anbefaling), filterskift, komplett inspeksjon av slanger (bytt om nødvendig), kontroll av tetninger, trykktest, profesjonell oljeanalyse. Noter alle vedlikeholdsaktiviteter i maskinens loggbok.',
    },
  ],
  keyTerms: [
    'hydraulisk skjema',
    'hydrauliske symboler',
    'vedlikehold',
    'oljeskift',
    'filterskift',
    'kavitasjon',
    'lekkasje',
    'oljeanalyse',
    'stasjonær hydraulikk',
    'mobil hydraulikk',
  ],
  competenceGoals: [
    'utføre arbeid i henhold til gjeldende regelverk for helse, miljø og sikkerhet',
    'vedlikeholde maskiner og utstyr i henhold til vedlikeholdsplaner',
  ],
};

// ===== KAPITTEL 5.6: Grunnleggende pneumatikk =====
const CHAPTER_5_6: TextbookChapter = {
  id: 'tif-vg1-5-6',
  courseId: 'tif-vg1',
  chapterNumber: '5.6',
  title: 'Grunnleggende pneumatikk',
  description: 'Lær om trykkluft, pneumatiske komponenter og grunnleggende prinsipper.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-5-6-intro',
      type: 'text',
      content: `# Grunnleggende pneumatikk

Pneumatikk bruker komprimert luft for å overføre kraft og bevegelse. Pneumatiske systemer er rene, raske og sikre, og brukes mye i industrien. I dette kapittelet lærer du prinsippene bak pneumatikk og hvordan pneumatiske systemer fungerer.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Forklare hvordan trykkluft produseres og behandles
- Beskrive hovedkomponentene i et pneumatisk system
- Sammenligne pneumatikk og hydraulikk
- Forstå trykkluftens egenskaper og begrensninger`,
    },
    {
      id: 'tif-vg1-5-6-trykkluft',
      type: 'text',
      content: `## Produksjon av trykkluft

### Kompressoren

En **kompressor** suger inn atmosfærisk luft og komprimerer den til høyere trykk. Vanlige typer:

- **Stempelkompressor**: Stempel komprimerer luften. Vanlig i små anlegg.
- **Skruekompressor**: To roterende skruer komprimerer luften. Vanlig i industri.
- **Rotorkompressor**: Roterende lameller. Kompakt og stillegående.

### Trykknivåer

| Anvendelse | Typisk trykk |
|-----------|--------------|
| Håndverktøy | 6-8 bar |
| Industriautomasjon | 4-6 bar |
| Spesialprosesser | Opp til 40 bar |

Atmosfærisk trykk er ca. 1 bar (101,325 kPa).`,
    },
    {
      id: 'tif-vg1-5-6-behandling',
      type: 'text',
      content: `## Luftbehandling

Komprimert luft må behandles før bruk fordi den inneholder forurensninger:

### FRL-enhet (Filter-Regulator-Lubrikator)

1. **Filter**: Fjerner partikler, vann og olje
2. **Regulator**: Justerer trykket til ønsket nivå
3. **Lubrikator** (smører): Tilfører smøreolje for verktøy som trenger det

### Tørking

I tillegg til FRL brukes ofte en **lufttørker** for å fjerne fuktighet:
- **Kjøletørker**: Kjøler luften slik at vann kondenserer
- **Adsorpsjonstørker**: Bruker tørremiddel til å absorbere fukt

Fuktig luft kan forårsake rust, frysing og dårlig funksjon.`,
    },
    {
      id: 'tif-vg1-5-6-komponenter',
      type: 'text',
      content: `## Pneumatiske komponenter

### Sylinder
Omgjør lufttrykk til lineær bevegelse:
- **Enkeltvirkende**: Trykk én vei, fjær tilbake
- **Dobbeltvirkende**: Trykk begge veier

### Ventiler
Styrer luftstrømmen:
- **3/2-ventil**: 3 porter, 2 posisjoner (enkelt på/av)
- **5/2-ventil**: 5 porter, 2 posisjoner (dobbeltvirkende sylinder)
- **5/3-ventil**: 5 porter, 3 posisjoner (midtposisjon)

### Aktuering av ventiler
- Manuell (knapp, spak)
- Mekanisk (rulle, fjær)
- Elektrisk (solenoid)
- Pneumatisk (pilottrykk)`,
    },
    {
      id: 'tif-vg1-5-6-ex1',
      type: 'text',
      content: `### Eksempel: Pneumatisk stempelsylinder

En dobbeltvirkende sylinder med stempeldiameter 50 mm drives med 6 bar trykk.

**Stempelareal:**
A = π × r² = π × (0,025)² = 0,00196 m²

**Kraft:**
F = p × A = 600 000 Pa × 0,00196 m² = 1176 N ≈ 1,2 kN

**Praktisk kraft:**
Friksjon i tetninger reduserer kraften med ca. 10-20%, så reell kraft er ca. 1 kN.

Dette tilsvarer omtrent 100 kg løfteevne - nok til mange industrielle oppgaver!`,
    },
    {
      id: 'tif-vg1-5-6-sammenligning',
      type: 'text',
      content: `## Pneumatikk vs. hydraulikk

| Egenskap | Pneumatikk | Hydraulikk |
|----------|-----------|------------|
| Medium | Luft (komprimerbar) | Olje (ikke komprimerbar) |
| Trykk | 6-10 bar | 100-350 bar |
| Kraft | Moderat | Svært høy |
| Hastighet | Høy | Moderat til lav |
| Presisjon | Lavere | Høy |
| Miljø | Rent, luften slippes ut | Må samles opp, miljøfare |
| Støy | Høyere (luftutslipp) | Lavere |
| Temperatur | Mindre følsom | Mer følsom |
| Brannfare | Ingen | Ja (olje) |
| Kostnad | Lavere | Høyere |`,
    },
    {
      id: 'tif-vg1-5-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Pneumatikk bruker komprimert luft (typisk 6-8 bar)
- Kompressorer: stempel, skrue eller rotor
- **FRL-enhet** behandler luften: Filter, Regulator, Lubrikator
- Sylindere gir lineær bevegelse, ventiler styrer luftstrømmen
- Fordeler: Rent, sikkert, raskt, enkelt
- Ulemper: Lavere kraft, mindre presist, støy fra luftutslipp
- Velg pneumatikk for raske, lette oppgaver i rene miljøer`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-5-6-oppg1',
      number: '5.6.1',
      type: 'multiple-choice',
      task: 'Hva er hovedforskjellen mellom pneumatikk og hydraulikk?',
      options: [
        { id: 'a', text: 'Pneumatikk bruker luft, hydraulikk bruker olje', isCorrect: true },
        { id: 'b', text: 'Pneumatikk bruker høyere trykk enn hydraulikk', isCorrect: false },
        { id: 'c', text: 'Hydraulikk er renere enn pneumatikk', isCorrect: false },
        { id: 'd', text: 'Pneumatikk gir større kraft enn hydraulikk', isCorrect: false },
      ],
      solution: 'Pneumatikk bruker komprimert luft som medium, mens hydraulikk bruker olje. Dette gir forskjellige egenskaper - pneumatikk er renere men gir mindre kraft.',
    },
    {
      id: 'tif-vg1-5-6-oppg2',
      number: '5.6.2',
      type: 'classic',
      task: 'Forklar hva en FRL-enhet gjør og hvorfor den er viktig.',
      solution: 'FRL står for Filter-Regulator-Lubrikator. Filter: Fjerner partikler, vann og oljerester fra luften - beskytter utstyret. Regulator: Justerer trykket fra kompressoren ned til riktig nivå for utstyret. Lubrikator: Tilfører fin smøreolje-tåke for verktøy og utstyr som trenger smøring. FRL-enheten er viktig fordi ren, tørr luft med riktig trykk sikrer lang levetid og pålitelig drift av pneumatisk utstyr.',
    },
    {
      id: 'tif-vg1-5-6-oppg3',
      number: '5.6.3',
      type: 'classic',
      task: 'En pneumatisk sylinder har stempeldiameter 32 mm og arbeider ved 6 bar. Beregn teoretisk kraft.',
      solution: 'Først: Regn om radius: r = 16 mm = 0,016 m. Areal: A = π × r² = π × (0,016)² = 0,000804 m² ≈ 804 mm². Trykk: 6 bar = 600 000 Pa. Kraft: F = p × A = 600 000 × 0,000804 = 482 N ≈ 480 N. Teoretisk kraft er ca. 480 newton. Praktisk kraft vil være ca. 10-20% lavere på grunn av friksjon.',
    },
    {
      id: 'tif-vg1-5-6-oppg4',
      number: '5.6.4',
      type: 'classic',
      task: 'Gi tre eksempler på situasjoner der pneumatikk er bedre egnet enn hydraulikk.',
      solution: '1) Matvareindustri - pneumatikk er renere, og eventuell lekkasje (luft) forurenser ikke produktene. 2) Raske pick-and-place roboter - pneumatikk gir rask, enkel bevegelse for lette gjenstander. 3) Spraymaling og sandblåsing - trenger trykkluft uansett, og pneumatiske ventiler er enkle å betjene. Bonus: Eksplosjonsutsatte miljøer - ingen brannfare fra trykkluft.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-5-6-oppg5',
      number: '5.6.5',
      type: 'classic',
      task: 'Du skal velge mellom pneumatikk og hydraulikk for en presse som skal trykke med 50 000 N kraft. Diskuter fordeler og ulemper med hvert alternativ og gi din anbefaling.',
      solution: 'Hydraulikk anbefales for 50 kN press. Begrunnelse: Pneumatikk: For å oppnå 50 000 N ved 6 bar trenger du sylinder med areal på 0,083 m² (diameter ca. 33 cm) - upraktisk stort. Luftforbruk ville vært enormt. Hydraulikk: Ved 200 bar trenger du bare 250 cm² (diameter ca. 18 cm) - mye mer praktisk. Hydraulikk gir også mer presis kontroll over kraften og posisjonen. Ulemper: Må håndtere oljesøl, dyrere, mer vedlikehold. For kraft over ca. 5-10 kN er hydraulikk nesten alltid beste valg.',
    },
    {
      id: 'tif-vg1-5-6-oppg6',
      number: '5.6.6',
      type: 'classic',
      task: 'En bedrift har problemer med at pneumatiske sylindere fryser om vinteren i et uoppvarmet lager. Forklar årsaken og foreslå løsninger.',
      solution: 'Årsak: Komprimert luft inneholder fuktighet. Når luften ekspanderer i sylinderen, kjøles den ned (adiabatisk kjøling). I kaldt miljø fryser fukten til is og blokkerer ventiler og sylindere. Løsninger: 1) Installer lufttørker (kjøle- eller adsorpsjonstørker) for å fjerne fukt før den når utstyret. 2) Bruk frostvæske-injeksjon i trykkluften (egnet produkt). 3) Isoler eller varm opp luftledninger og kritisk utstyr. 4) Installer vannfeller på lavpunkter i rørsystemet og tøm dem regelmessig. 5) Vurder å flytte kompressor til varmt rom. Best løsning er ofte kombinasjon av lufttørker og vannfeller.',
    },
  ],
  keyTerms: [
    'pneumatikk',
    'kompressor',
    'trykkluft',
    'FRL-enhet',
    'filter',
    'regulator',
    'lubrikator',
    'lufttørker',
    'pneumatisk sylinder',
    'ventil',
  ],
  competenceGoals: [
    'bruke fagterminologi for å beskrive og dokumentere arbeidsprosesser',
    'gjøre rede for ulike materialers egenskaper og bruksområder',
  ],
};

// ===== KAPITTEL 5.7: Pneumatiske systemer i praksis =====
const CHAPTER_5_7: TextbookChapter = {
  id: 'tif-vg1-5-7',
  courseId: 'tif-vg1',
  chapterNumber: '5.7',
  title: 'Pneumatiske systemer i praksis',
  description: 'Lær om oppbygging, styring og feilsøking i pneumatiske systemer.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-5-7-intro',
      type: 'text',
      content: `# Pneumatiske systemer i praksis

Pneumatikk er ryggraden i moderne industriautomasjon. Fra enkle gripere til komplekse produksjonslinjer brukes trykkluft til utallige oppgaver. I dette kapittelet lærer du hvordan pneumatiske systemer bygges opp, styres og feilsøkes.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Lese enkle pneumatiske kretsskjemaer
- Beskrive typiske bruksområder i industrien
- Utføre grunnleggende feilsøking
- Forstå sikkerhetskrav for pneumatisk utstyr`,
    },
    {
      id: 'tif-vg1-5-7-skjema',
      type: 'text',
      content: `## Pneumatiske kretsskjemaer

Pneumatiske systemer dokumenteres med standardiserte symboler (ISO 1219).

### Grunnleggende symboler

| Komponent | Beskrivelse |
|-----------|-------------|
| Kompressor | Sirkel med pil ut |
| Sylinder | Rektangel med stempel |
| 3/2-ventil | Firkant med 3 porter, 2 posisjoner |
| 5/2-ventil | Firkant med 5 porter, 2 posisjoner |
| Lufttank | Rektangel med bunn |
| FRL | Tre symboler i serie |
| Lyddemper | Kryss ved utslipp |

### Lese kretsdiagram

Kretsen leses fra bunn (energikilde) til topp (aktuator). Ventilene tegnes i hvileposisjon.`,
    },
    {
      id: 'tif-vg1-5-7-bruksomrader',
      type: 'text',
      content: `## Industrielle bruksområder

### Håndtering og pakking
- **Gripere**: Holder og flytter produkter
- **Vakuumgriper**: Suger fast glatte gjenstander
- **Løftere**: Assisterer operatører med tunge løft

### Maskiner og prosesser
- **Klemmer og fikstur**: Holder arbeidsstykker fast
- **Stempler og presser**: Setter inn, former eller merker
- **Transportører**: Stopper, sorterer, avleder

### Verktøy
- **Skrutrekkere**: Raske og kraftige
- **Slagverktøy**: Meisler, nagleverktøy
- **Slipemaskiner**: Høy turtall
- **Spraypistol**: Maling og overflatebehandling`,
    },
    {
      id: 'tif-vg1-5-7-ex1',
      type: 'text',
      content: `### Eksempel: Automatisk sorteringssystem

En pakkelinje sorterer produkter etter vekt:

1. **Sensor** registrerer produkt og vekt
2. **PLS** (programmerbar logisk styrer) bestemmer destinasjon
3. **5/2-solenoidventil** aktiveres for riktig arm
4. **Pneumatisk sylinder** skyver produktet av transportbåndet
5. **Produkt** lander i riktig beholder

Systemet kan sortere 60 produkter per minutt med 6 bar trykkluft. Enkelt, pålitelig og rimelig!`,
    },
    {
      id: 'tif-vg1-5-7-feilsoking',
      type: 'text',
      content: `## Feilsøking

### Systematisk tilnærming

1. **Observere**: Hva fungerer ikke? Når sluttet det å virke?
2. **Sjekke energitilførsel**: Er det trykkluft? Riktig trykk?
3. **Sjekke styresignaler**: Kommer signalet fram?
4. **Sjekke komponentene**: Er ventil/sylinder skadet?
5. **Teste og bekrefte**: Fungerer det nå?

### Vanlige feil og årsaker

| Symptom | Mulige årsaker |
|---------|----------------|
| Ingen bevegelse | Mangler trykk, ødelagt ventil |
| Treg bevegelse | Lavt trykk, tilstoppet filter |
| Ujevn bevegelse | Luft i returledning, slitt sylinder |
| Kontinuerlig luftlekkasje | Slitt tetning, løs kobling |
| Sylinder stopper midt i | Friksjon, for lavt trykk |`,
    },
    {
      id: 'tif-vg1-5-7-sikkerhet',
      type: 'text',
      content: `## Sikkerhet med pneumatikk

### Farer

- **Trykk**: Høyt trykk kan skade hud og øyne
- **Støy**: Luftutslipp kan skade hørselen
- **Bevegelige deler**: Sylindere beveger seg raskt
- **Slanger**: Kan piskes rundt hvis de ryker

### Sikkerhetstiltak

- Bruk lyddemper på luftutslipp
- Monter beskyttelsesdeksler over bevegelige deler
- Sikre slanger mot pisking med kjettinger
- Steng hovedtilførsel før vedlikehold
- Luft ut resttrykk før demontering
- Bruk sikkerhetsbriller ved arbeid med trykkluft
- **ALDRI** bruk trykkluft til å blåse støv av klær eller kropp!`,
    },
    {
      id: 'tif-vg1-5-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

- Pneumatiske skjemaer bruker ISO 1219-symboler
- Industriell pneumatikk: Gripere, klemmer, transportører, verktøy
- Feilsøking: Systematisk fra energikilde til aktuator
- Vanlige feil: Manglende trykk, lekkasjer, slitte tetninger
- Sikkerhet: Lyddemper, beskyttelse, utlufting før vedlikehold
- Aldri bruk trykkluft til å blåse på kroppen!`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-5-7-oppg1',
      number: '5.7.1',
      type: 'multiple-choice',
      task: 'Hvorfor bør du ALDRI bruke trykkluft til å blåse støv av klærne?',
      options: [
        { id: 'a', text: 'Det sløser med trykkluft', isCorrect: false },
        { id: 'b', text: 'Luften kan trenge inn i huden og forårsake embolisme', isCorrect: true },
        { id: 'c', text: 'Det lager for mye støy', isCorrect: false },
        { id: 'd', text: 'Klærne kan bli ødelagt', isCorrect: false },
      ],
      solution: 'Trykkluft kan trenge inn i kroppen gjennom små sår eller åpninger og forårsake luftembolisme (luftblære i blodet). Dette kan være dødelig. I tillegg kan partikler blåses inn i øyne og hud.',
    },
    {
      id: 'tif-vg1-5-7-oppg2',
      number: '5.7.2',
      type: 'classic',
      task: 'Beskriv en systematisk fremgangsmåte for feilsøking på en pneumatisk sylinder som ikke beveger seg.',
      solution: '1) Sjekk om det er trykk i systemet - se på manometer. 2) Sjekk om ventilen får styresignal - lytt/føl etter klikk i solenoiden. 3) Aktiver ventilen manuelt (overknapp) - beveger sylinderen seg nå? 4) Sjekk lufttilførselen til ventilen - koble av og kjenn etter luft. 5) Sjekk slangene til sylinderen - er de tilkoblet og hele? 6) Prøv å bevege sylinderen for hånd - sitter den fast? 7) Bytt ut den mistenkelige komponenten og test igjen.',
    },
    {
      id: 'tif-vg1-5-7-oppg3',
      number: '5.7.3',
      type: 'classic',
      task: 'En pneumatisk griper brukes til å plukke opp plastflasker fra et transportbånd. Hvilken type griper ville du valgt - mekanisk klogriper eller vakuumgriper? Begrunn svaret.',
      solution: 'Vakuumgriper anbefales for plastflasker. Begrunnelse: 1) Flasker er lette og glatte - perfekt for vakuum. 2) Sugekoppen tilpasser seg buet overflate. 3) Ingen fare for å klemme og deformere flaskene. 4) Raskere grip og slipp enn mekanisk griper. 5) Enklere design uten bevegelige deler i griperhodet. Forutsetninger: Flaskene må ha glatt overflate uten hull, og de må være tørre. For våte eller porøse flasker kan mekanisk griper være bedre.',
    },
    {
      id: 'tif-vg1-5-7-oppg4',
      number: '5.7.4',
      type: 'classic',
      task: 'Forklar forskjellen mellom en 3/2-ventil og en 5/2-ventil. Når bruker du hvilken?',
      solution: '3/2-ventil har 3 porter og 2 posisjoner. Brukes for: enkeltvirkende sylindre (trykk én vei, fjær tilbake), enkel av/på-styring, pilotventiler. 5/2-ventil har 5 porter og 2 posisjoner. Brukes for: dobbeltvirkende sylindre (trykk begge veier), komplett kontroll av sylinder frem og tilbake. Hovedforskjellen er at 5/2-ventilen kan styre begge sider av en dobbeltvirkende sylinder, mens 3/2-ventilen bare kan styre én side.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-5-7-oppg5',
      number: '5.7.5',
      type: 'classic',
      task: 'Du skal designe et enkelt system der en pneumatisk sylinder skyver produkter ned fra et transportbånd når en operatør trykker på en knapp. Beskriv komponentene du trenger og hvordan de kobles sammen.',
      solution: 'Komponenter: 1) Trykkluftforsyning med FRL-enhet. 2) 3/2-ventil med trykknappstyring (fjær-retur). 3) Enkeltvirkende sylinder med fjærretur. 4) Slanger og koblinger. 5) Lyddemper på luftutslipp. Oppkobling: FRL → 3/2-ventil port 1. Ventil port 2 → sylinder stempelside. Ventil port 3 → lyddemper (utslipp). Når knapp trykkes: Ventil åpner, luft går til sylinder, stempel skyves ut. Når knapp slippes: Fjær returnerer ventil, luft slippes ut, sylinderfjær trekker stempelet tilbake.',
    },
    {
      id: 'tif-vg1-5-7-oppg6',
      number: '5.7.6',
      type: 'classic',
      task: 'En produksjonslinje stopper stadig fordi pneumatiske sylindere beveger seg for sakte. Trykkmåleren viser 4 bar, men systemet er designet for 6 bar. Liste opp mulige årsaker og hvordan du ville undersøkt hver av dem.',
      solution: 'Mulige årsaker og undersøkelse: 1) Kompressor leverer for lite - sjekk kompressors tanktrykk, kanskje den er for liten eller slitt. 2) Lekkasje i rørsystemet - spray såpevann på koblinger og lytt/se etter bobler. 3) For mange forbrukere - sjekk om nye maskiner er tilkoblet uten kapasitetsøkning. 4) Tett filter i FRL - sjekk filterindikator, bytt filter. 5) Feil innstilt regulator - juster til 6 bar. 6) For tynne rør/slanger - beregn rørdimensjon mot luftforbruk. 7) Lang rørlengde med mange bøyer - vurder lokal trykkforsterker eller omlegging av rør.',
    },
  ],
  keyTerms: [
    'pneumatisk skjema',
    'ISO 1219',
    'griper',
    'vakuumgriper',
    'klemme',
    'feilsøking',
    'lyddemper',
    '3/2-ventil',
    '5/2-ventil',
    'solenoidventil',
  ],
  competenceGoals: [
    'utføre arbeid i henhold til gjeldende regelverk for helse, miljø og sikkerhet',
    'vedlikeholde maskiner og utstyr i henhold til vedlikeholdsplaner',
  ],
};

// ===== KAPITTEL 5.8: Elektropneumatikk og styring =====
const CHAPTER_5_8: TextbookChapter = {
  id: 'tif-vg1-5-8',
  courseId: 'tif-vg1',
  chapterNumber: '5.8',
  title: 'Elektropneumatikk og styring',
  description: 'Lær om elektrisk styring av pneumatikk, sensorer og grunnleggende PLS.',
  estimatedMinutes: 45,
  sections: [
    {
      id: 'tif-vg1-5-8-intro',
      type: 'text',
      content: `# Elektropneumatikk og styring

Elektropneumatikk kombinerer elektrisk styring med pneumatisk kraft. Dette gir fleksible, programmerbare systemer som er enkle å integrere i automatiserte produksjonslinjer. I dette kapittelet lærer du om elektrisk styrte ventiler, sensorer og grunnleggende prinsippene bak PLS-styring.

## Læringsmål

Etter dette kapittelet skal du kunne:
- Forklare hvordan solenoidventiler fungerer
- Beskrive vanlige sensorer i automatisering
- Forstå grunnprinsippene i PLS-styring
- Lese enkle elektropneumatiske kretsskjemaer`,
    },
    {
      id: 'tif-vg1-5-8-solenoid',
      type: 'text',
      content: `## Solenoidventiler

En **solenoidventil** er en pneumatisk ventil som styres elektrisk via en elektromagnet (solenoid).

### Virkemåte

1. Elektrisk spenning tilføres solenoiden
2. Magnetfeltet trekker ventilspolen
3. Ventilen skifter posisjon
4. Luft strømmer til/fra sylinderen

### Typer

- **Monostabil**: Fjær-retur når strøm fjernes
- **Bistabil**: Blir i posisjon til motsatt solenoid aktiveres

### Typiske spesifikasjoner

| Parameter | Verdi |
|-----------|-------|
| Spenning | 24 V DC eller 230 V AC |
| Effekt | 2-5 W |
| Responstid | 20-50 ms |
| Porter | 3/2, 5/2, 5/3 |`,
    },
    {
      id: 'tif-vg1-5-8-sensorer',
      type: 'text',
      content: `## Sensorer i automatisering

Sensorer gir informasjon til styresystemet om posisjoner, tilstander og hendelser.

### Sylindersensorer
Detekterer stempelposisjon:
- **Reed-bryter**: Reagerer på magnet i stempelet
- **Hall-sensor**: Elektronisk magnetsensor

### Proksimitetsgivere
Detekterer gjenstander uten kontakt:
- **Induktiv**: Metall
- **Kapasitiv**: Alle materialer
- **Optisk**: Lysstråle brytes/reflekteres

### Andre sensorer
- **Trykkbryter**: Aktiverer ved gitt trykk
- **Strømningsbryter**: Detekterer luftstrøm
- **Temperaturføler**: Overvåker temperatur`,
    },
    {
      id: 'tif-vg1-5-8-pls',
      type: 'text',
      content: `## PLS - Programmerbar logisk styrer

En **PLS** (Programmable Logic Controller) er en industriell datamaskin som styrer maskiner og prosesser.

### Oppbygging

- **Innganger**: Mottar signaler fra sensorer/knapper
- **CPU**: Prosesserer programmet
- **Utganger**: Sender signaler til ventiler/motorer
- **Strømforsyning**: Gir spenning til systemet

### Programmering

PLS programmeres typisk med:
- **Stigediagram (Ladder)**: Ligner elektrisk skjema
- **Funksjonsblokk**: Grafiske blokker
- **Strukturert tekst**: Tekstbasert kode

### Forenklet eksempel (Ladder)

Når sensor A OG sensor B er aktive, aktiver utgang Y1:
\`\`\`
|--[ A ]----[ B ]----( Y1 )--|
\`\`\``,
    },
    {
      id: 'tif-vg1-5-8-ex1',
      type: 'text',
      content: `### Eksempel: Automatisk stemplingsmaskin

En stemplingsmaskin skal:
1. Starte når operatør trykker START
2. Vente til produkt er på plass (sensor)
3. Stempel ned (sylinder)
4. Vente til bunnposisjon (sensor)
5. Stempel opp (sylinder)
6. Vente til toppposisjon (sensor)
7. Gjenta fra steg 2

**PLS-programmet** leser sensorene kontinuerlig og styrer solenoidventilen for sylinderen basert på logikken over.

Sikkerhetsinngang (nødstopp) overvåkes hele tiden og stopper alt ved aktivering.`,
    },
    {
      id: 'tif-vg1-5-8-skjema',
      type: 'text',
      content: `## Elektropneumatiske skjemaer

Et komplett elektropneumatisk system dokumenteres ofte med to skjemaer:

### Pneumatisk skjema
Viser trykkluftens vei:
- Kompressor → FRL → Ventil → Sylinder

### Elektrisk skjema
Viser styrekretsen:
- Strømforsyning → Bryter/sensor → PLS → Solenoid

### Sammenheng
Ventilsymbolet i pneumatikkskjemaet merkes med samme referanse (f.eks. Y1) som solenoidenssymbol i det elektriske skjemaet.`,
    },
    {
      id: 'tif-vg1-5-8-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Solenoidventiler** styres elektrisk, gir rask og presis kontroll
- **Sensorer** gir tilbakemelding: posisjon, tilstedeværelse, trykk
- **PLS** er en industriell datamaskin for automatisk styring
- PLS har innganger (sensorer), CPU (program), utganger (aktuatorer)
- Elektropneumatiske systemer dokumenteres med pneumatisk OG elektrisk skjema
- Sikkerhet ivaretas med nødstoppkretser og sensorovervåking`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-5-8-oppg1',
      number: '5.8.1',
      type: 'multiple-choice',
      task: 'Hva er hovedfordelen med å bruke solenoidventiler i stedet for manuelle ventiler?',
      options: [
        { id: 'a', text: 'De er billigere å kjøpe', isCorrect: false },
        { id: 'b', text: 'De kan fjernstyres og automatiseres', isCorrect: true },
        { id: 'c', text: 'De bruker mindre trykkluft', isCorrect: false },
        { id: 'd', text: 'De trenger ikke strømforsyning', isCorrect: false },
      ],
      solution: 'Solenoidventiler kan styres elektrisk fra en PLS eller annet styresystem, noe som muliggjør automatisering og fjernstyring. Manuell ventiler krever fysisk aktivering.',
    },
    {
      id: 'tif-vg1-5-8-oppg2',
      number: '5.8.2',
      type: 'classic',
      task: 'Forklar forskjellen mellom en induktiv og en kapasitiv proksimitetsgiver. Når bruker du hvilken?',
      solution: 'Induktiv giver: Detekterer kun metallgjenstander. Bruker et oscillerende magnetfelt som påvirkes av metall. Bruk: Posisjonering av metalldeler, tellingav ståldeler, ende-posisjon for stålstempel. Kapasitiv giver: Detekterer alle materialer (metall, plast, tre, væsker). Bruker et elektrisk felt som påvirkes av materialets dielektriske egenskaper. Bruk: Nivåmåling i tank, deteksjon av plastprodukter, materialer som endrer seg. Velg induktiv for metall (mer robust, lengre levetid), kapasitiv for andre materialer.',
    },
    {
      id: 'tif-vg1-5-8-oppg3',
      number: '5.8.3',
      type: 'classic',
      task: 'Beskriv de tre hoveddelene i en PLS og forklar funksjonen til hver.',
      solution: 'Innganger: Mottar signaler fra omverdenen - sensorer, brytere, trykkgivere. Konverterer signalene til digital form som CPU-en kan lese. Eksempler: 24V DC digital inngang, analog 4-20mA. CPU (sentralenhet): Hjernen i PLS-en. Kjører brukerprogrammet kontinuerlig (typisk 10-50 ms syklus). Leser innganger, utfører logikk, oppdaterer utganger. Lagrer programmet og data. Utganger: Sender styresignaler til omverdenen - solenoidventiler, lamper, motorer. Konverterer CPU-ens kommandoer til elektriske signaler. Eksempler: 24V DC releutgang, transistorutgang.',
    },
    {
      id: 'tif-vg1-5-8-oppg4',
      number: '5.8.4',
      type: 'classic',
      task: 'Hvorfor brukes 24 V DC som standard spenning i industristyring i stedet for 230 V AC?',
      solution: '1) Sikkerhet: 24 V er lavspenning og gir sjelden farlig elektrisk støt. 2) Kompatibilitet: De fleste sensorer og PLS-moduler er designet for 24 V DC. 3) Støyimmunitet: DC-signaler er mindre utsatt for elektrisk støy enn AC. 4) Enkel logikk: 0 V = av, 24 V = på - enkelt digitalt signal. 5) Fleksibilitet: Kan kjøres på UPS/batteri ved strømbrudd. 6) Komponentstørrelse: Sensorer og ventiler kan være mer kompakte. 230 V AC brukes fortsatt til kraftige motorer, varme og belysning, men styrekretsen er nesten alltid 24 V DC.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-5-8-oppg5',
      number: '5.8.5',
      type: 'classic',
      task: 'Design et enkelt elektropneumatisk system for en automatisk dør. Døren skal åpne når noen nærmer seg (bevegelsessensor) og lukke etter 5 sekunder. List opp nødvendige komponenter og beskriv virkemåten.',
      solution: 'Komponenter: 1) Bevegelsessensor (infrarød eller mikrobølge). 2) PLS eller tidrelé. 3) 5/2 bistabil solenoidventil (24 V DC). 4) Dobbeltvirkende pneumatisk sylinder. 5) Reed-brytere for ende-posisjoner. 6) FRL-enhet. 7) Trykkluftforsyning. Virkemåte: Person nærmer seg → bevegelsessensor aktiverer → PLS aktiverer "åpne"-solenoid → sylinder skyver døren opp → reed-bryter melder "åpen" → PLS starter 5 sek timer → timer utløper → PLS aktiverer "lukke"-solenoid → sylinder trekker døren ned → reed-bryter melder "lukket" → systemet venter på neste aktivering.',
    },
    {
      id: 'tif-vg1-5-8-oppg6',
      number: '5.8.6',
      type: 'classic',
      task: 'Du skal feilsøke et elektropneumatisk system der sylinderen ikke beveger seg når du trykker på startknappen. Lysdioden på solenoidventilen lyser ikke. Beskriv systematisk feilsøking for å finne feilen.',
      solution: 'Systematisk feilsøking: 1) Sjekk strømforsyning til styrekretsen - er 24 V tilgjengelig? Mål med multimeter. 2) Sjekk startknappen - fungerer den? Mål kontinuitet eller se etter indikatorlampe. 3) Sjekk kablingen fra knapp til PLS - er ledningene hele og tilkoblet? 4) Sjekk PLS-inngang - lyser LED for inngang når du trykker? 5) Sjekk PLS-program - er logikken riktig? Er systemet i auto-modus? 6) Sjekk PLS-utgang - lyser LED for utgang? 7) Sjekk kabling fra PLS til solenoid - er ledningene hele? 8) Sjekk solenoiden direkte - gi den 24 V fra ekstern kilde. Klikker den? 9) Når du finner feilen - reparer, test, dokumenter.',
    },
  ],
  keyTerms: [
    'elektropneumatikk',
    'solenoidventil',
    'PLS',
    'sensor',
    'proksimitets giver',
    'induktiv giver',
    'kapasitiv giver',
    'reed-bryter',
    'stigediagram',
    'inngang',
    'utgang',
  ],
  competenceGoals: [
    'bruke fagterminologi for å beskrive og dokumentere arbeidsprosesser',
    'reflektere over hvordan teknologisk utvikling påvirker arbeidsoppgaver og arbeidsprosesser',
  ],
};

// Eksporter alle kapitler som én samlet array
export const TIF_VG1_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_5_1,
  CHAPTER_5_2,
  CHAPTER_5_3,
  CHAPTER_5_4,
  CHAPTER_5_5,
  CHAPTER_5_6,
  CHAPTER_5_7,
  CHAPTER_5_8,
];
