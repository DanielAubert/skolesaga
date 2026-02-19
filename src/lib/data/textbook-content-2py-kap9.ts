/**
 * Tekstbok kapitler for 2P-Y (Matematikk for yrkesfag VG2)
 * Seksjon 9: Algebra og likninger
 * Seksjon 10: Utvidet økonomi
 * Seksjon 11: Utvidet statistikk
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 9: ALGEBRA OG LIKNINGER
// ============================================================================

export const CHAPTER_2PY_9_1: TextbookChapter = {
  id: '2py-9-1',
  courseId: '2py',
  chapterNumber: '9.1',
  title: 'Likninger i praksis',
  description: 'Lær hva en likning er og hvordan du løser førstegradslikninger. Bruk likninger til å løse praktiske oppgaver fra yrkeslivet.',
  estimatedMinutes: 50,
  competenceGoals: [
    'løse førstegradslikninger',
    'bruke likninger til å løse praktiske problemer',
  ],
  content: [
    {
      id: '2py-9-1-intro',
      type: 'text',
      content: `## Hva er en likning?

En **likning** er et utsagn om at to uttrykk er like. Den inneholder en **ukjent** (vanligvis kalt $x$) som vi ønsker å finne verdien av.

For eksempel:
- $x + 5 = 12$ (hva pluss 5 gir 12?)
- $3x = 24$ (tre ganger hva gir 24?)
- $2x + 100 = 500$ (to ganger hva, pluss 100, gir 500?)

Likninger brukes overalt i arbeidslivet: beregne materialmengder, finne ukjente priser, fordele kostnader, og mye mer.`,
    },
    {
      id: '2py-9-1-def-1',
      type: 'definition',
      title: 'Likningsvekt-prinsippet',
      content: `En likning fungerer som en **vekt i balanse**. Det som står på venstre side, er like mye som det på høyre side.

For å holde balansen, må du **gjøre det samme på begge sider**:
- Du kan **legge til** samme tall på begge sider
- Du kan **trekke fra** samme tall på begge sider
- Du kan **gange** begge sider med samme tall
- Du kan **dele** begge sider med samme tall (ikke null)

Målet er å få $x$ alene på den ene siden.`,
    },
    {
      id: '2py-9-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Enkel likning',
      problem: `En rørlegger har en fast utkjøringspris pluss timepris. Totalpris for 3 timer arbeid ble 4 350 kr. Timeprisen er 950 kr.

Hva er utkjøringsprisen?`,
      solution: `**Løsning:**

Vi kaller utkjøringsprisen $x$.

Setter opp likningen:
$$x + 3 \\cdot 950 = 4\\,350$$
$$x + 2\\,850 = 4\\,350$$

Trekker fra 2 850 på begge sider:
$$x = 4\\,350 - 2\\,850$$
$$x = 1\\,500$$

Utkjøringsprisen er **1 500 kr**.

**Kontroll:** $1\\,500 + 3 \\cdot 950 = 1\\,500 + 2\\,850 = 4\\,350$ ✓`,
    },
    {
      id: '2py-9-1-text-2',
      type: 'text',
      content: `## Løse førstegradslikninger steg for steg

En **førstegradslikning** har formen $ax + b = c$.

**Fremgangsmåte:**
1. Flytt tallene uten $x$ til den ene siden (bytt fortegn når du flytter)
2. Få $x$ alene ved å dele på tallet foran $x$
3. **Kontroller** alltid svaret ved å sette det inn i den opprinnelige likningen`,
    },
    {
      id: '2py-9-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Likning med x på begge sider',
      problem: `To malerlag gir tilbud på et oppdrag:
- Lag A: 2 500 kr i oppstart + 420 kr per time
- Lag B: 1 000 kr i oppstart + 520 kr per time

Etter hvor mange timer koster de to lagene like mye?`,
      solution: `**Løsning:**

La $x$ være antall timer. Vi setter kostnadene lik hverandre:
$$2\\,500 + 420x = 1\\,000 + 520x$$

Trekker fra $420x$ på begge sider:
$$2\\,500 = 1\\,000 + 100x$$

Trekker fra 1 000 på begge sider:
$$1\\,500 = 100x$$

Deler på 100:
$$x = 15$$

Etter **15 timer** koster de to lagene like mye.

**Kontroll:**
- Lag A: $2\\,500 + 420 \\cdot 15 = 2\\,500 + 6\\,300 = 8\\,800$ kr
- Lag B: $1\\,000 + 520 \\cdot 15 = 1\\,000 + 7\\,800 = 8\\,800$ kr ✓`,
    },
    {
      id: '2py-9-1-tip-1',
      type: 'tip',
      title: 'Prøve i likningen',
      content: `Du kan alltid **kontrollere svaret** ved å sette det inn i den opprinnelige likningen. Hvis begge sider gir samme verdi, er svaret riktig.

Dette kalles å gjøre en **prøve** i likningen, og er lurt å gjøre på prøver og eksamener.`,
    },
    {
      id: '2py-9-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-9-1-ex-1',
        number: '9.1',
        type: 'classic',
        difficulty: 'lett',
        task: `Løs likningene og gjør prøve:

a) $x + 35 = 120$
b) $4x = 340$
c) $2x + 80 = 300$`,
        subTasks: [
          { label: 'a', task: 'Løs $x + 35 = 120$', solution: '$x = 120 - 35 = 85$. Prøve: $85 + 35 = 120$ ✓', answer: 85 },
          { label: 'b', task: 'Løs $4x = 340$', solution: '$x = \\frac{340}{4} = 85$. Prøve: $4 \\cdot 85 = 340$ ✓', answer: 85 },
          { label: 'c', task: 'Løs $2x + 80 = 300$', solution: '$2x = 300 - 80 = 220$, $x = \\frac{220}{2} = 110$. Prøve: $2 \\cdot 110 + 80 = 300$ ✓', answer: 110 },
        ],
        hints: ['Flytt tall uten x til høyre side', 'Del på tallet foran x', 'Sett svaret inn i likningen for å kontrollere'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-9-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-9-1-ex-2',
        number: '9.2',
        type: 'classic',
        difficulty: 'lett',
        task: `En kokk bestiller varer til kjøkkenet. Han kjøper 5 kg kylling og betaler 187,50 kr totalt.

a) Sett opp en likning for å finne kiloprisen $x$.
b) Løs likningen.
c) Kokken trenger 12 kg kylling til en stor bestilling. Hva blir prisen?`,
        subTasks: [
          { label: 'a', task: 'Sett opp likningen', solution: '$5x = 187{,}50$' },
          { label: 'b', task: 'Finn kiloprisen', solution: '$x = \\frac{187{,}50}{5} = 37{,}50$ kr per kg', answer: 37.50 },
          { label: 'c', task: 'Pris for 12 kg', solution: '$12 \\cdot 37{,}50 = 450$ kr', answer: 450 },
        ],
        hints: ['Antall kg ganger kilopris = totalpris', 'Del totalpris på antall kg'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-9-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-9-1-ex-3',
        number: '9.3',
        type: 'classic',
        difficulty: 'medium',
        task: `En bilmekaniker tar 850 kr i oppstart pluss 690 kr per time. Kunden fikk en regning på 3 610 kr.

a) Sett opp en likning for å finne antall timer $x$ mekanikeren brukte.
b) Løs likningen og gjør prøve.
c) Kunden hadde budsjettert med 5 000 kr. Hvor mange timer arbeid har kunden råd til?`,
        subTasks: [
          { label: 'a', task: 'Sett opp likningen', solution: '$690x + 850 = 3\\,610$' },
          { label: 'b', task: 'Løs likningen', solution: '$690x = 3\\,610 - 850 = 2\\,760$, $x = \\frac{2\\,760}{690} = 4$ timer. Prøve: $690 \\cdot 4 + 850 = 2\\,760 + 850 = 3\\,610$ ✓', answer: 4 },
          { label: 'c', task: 'Timer for 5000 kr', solution: '$690x + 850 = 5\\,000$, $690x = 4\\,150$, $x = \\frac{4\\,150}{690} = 6{,}01$. Kunden har råd til 6 timer.', answer: 6 },
        ],
        hints: ['Totalpris = timepris × antall timer + oppstart', 'Trekk fra oppstart først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-9-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-9-1-ex-4',
        number: '9.4',
        type: 'classic',
        difficulty: 'medium',
        task: `To transportselskaper gir tilbud:
- Selskap A: 1 200 kr fast pris + 8,50 kr per km
- Selskap B: 600 kr fast pris + 12 kr per km

a) Sett opp likninger for kostnadene $K_A$ og $K_B$ som funksjon av antall km $x$.
b) Finn antall km der prisen er lik for begge selskap.
c) Hvilket selskap er billigst for en tur på 250 km?
d) Hvilket selskap er billigst for en tur på 100 km?`,
        subTasks: [
          { label: 'a', task: 'Sett opp funksjonene', solution: '$K_A = 8{,}50x + 1\\,200$ og $K_B = 12x + 600$' },
          { label: 'b', task: 'Finn skjæringspunktet', solution: '$8{,}50x + 1\\,200 = 12x + 600$, $600 = 3{,}50x$, $x = \\frac{600}{3{,}50} \\approx 171$ km', answer: 171 },
          { label: 'c', task: '250 km: billigst?', solution: '$K_A = 8{,}50 \\cdot 250 + 1\\,200 = 3\\,325$ kr. $K_B = 12 \\cdot 250 + 600 = 3\\,600$ kr. **Selskap A** er billigst.' },
          { label: 'd', task: '100 km: billigst?', solution: '$K_A = 8{,}50 \\cdot 100 + 1\\,200 = 2\\,050$ kr. $K_B = 12 \\cdot 100 + 600 = 1\\,800$ kr. **Selskap B** er billigst.' },
        ],
        hints: ['Sett de to uttrykkene lik hverandre', 'Under skjæringspunktet er den med lavest fastpris billigst'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.2: FORMLER OG FORMELBRUK
// ============================================================================

export const CHAPTER_2PY_9_2: TextbookChapter = {
  id: '2py-9-2',
  courseId: '2py',
  chapterNumber: '9.2',
  title: 'Formler og formelbruk',
  description: 'Lær å bruke formler, sette inn verdier og omforme formler for å finne ukjente størrelser.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke formler til beregninger',
    'omforme formler for å isolere en ukjent',
  ],
  content: [
    {
      id: '2py-9-2-intro',
      type: 'text',
      content: `## Formler i praksis

En **formel** er en regel som viser sammenhengen mellom flere størrelser. Formler brukes i alle yrker:

- **Bygg og anlegg**: Areal, volum, materialberegning
- **Elektro**: Ohms lov, effektformler
- **Kjøretøy**: Hastighet, bremselengde, drivstofforbruk
- **Økonomi**: Renter, mva, fortjeneste

I stedet for å huske mange formler utenat, er det viktigst å kunne **bruke** dem: sette inn verdier og omforme for å finne den ukjente.`,
    },
    {
      id: '2py-9-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Sette inn verdier',
      problem: `Formelen for hastighet er:

$$v = \\frac{s}{t}$$

der $v$ = hastighet (km/h), $s$ = strekning (km) og $t$ = tid (timer).

En sjåfør kjører 210 km på 2,5 timer. Hva er gjennomsnittshastigheten?`,
      solution: `**Løsning:**

Vi setter inn verdiene i formelen:
$$v = \\frac{s}{t} = \\frac{210}{2{,}5} = 84 \\text{ km/h}$$

Gjennomsnittshastigheten er **84 km/h**.`,
    },
    {
      id: '2py-9-2-text-2',
      type: 'text',
      content: `## Omforme formler

Noen ganger kjenner vi hastigheten og tiden, men vil finne strekningen. Da må vi **omforme** formelen.

Utgangspunkt: $v = \\frac{s}{t}$

Ganger begge sider med $t$:
$$v \\cdot t = s$$

Altså: $s = v \\cdot t$

**Tommelregel:** Omforming av formler følger de samme reglene som for likninger -- gjør det samme på begge sider.`,
    },
    {
      id: '2py-9-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Ohms lov (elektro)',
      problem: `Ohms lov sier at:

$$U = R \\cdot I$$

der $U$ = spenning (volt), $R$ = motstand (ohm) og $I$ = strøm (ampere).

a) En krets har motstand 15 ohm og strøm 3 A. Finn spenningen.
b) En annen krets har spenning 230 V og motstand 46 ohm. Finn strømmen.
c) En tredje krets har spenning 12 V og strøm 0,5 A. Finn motstanden.`,
      solution: `**Løsning:**

a) Sette inn: $U = R \\cdot I = 15 \\cdot 3 = 45$ V

b) Omforme for å finne $I$:
$$I = \\frac{U}{R} = \\frac{230}{46} = 5 \\text{ A}$$

c) Omforme for å finne $R$:
$$R = \\frac{U}{I} = \\frac{12}{0{,}5} = 24 \\text{ ohm}$$`,
    },
    {
      id: '2py-9-2-def-1',
      type: 'definition',
      title: 'Vanlige formler i yrkesfag',
      content: `**Areal av rektangel:** $A = l \\cdot b$ (lengde ganger bredde)

**Volum av boks:** $V = l \\cdot b \\cdot h$ (lengde ganger bredde ganger høyde)

**Hastighet:** $v = \\frac{s}{t}$ (strekning delt på tid)

**Ohms lov:** $U = R \\cdot I$ (spenning = motstand ganger strøm)

**Effekt:** $P = U \\cdot I$ (effekt = spenning ganger strøm)

**Enkel rente:** $R = K \\cdot p \\cdot t$ (rente = kapital ganger rentesats ganger tid)`,
    },
    {
      id: '2py-9-2-example-3',
      type: 'example',
      title: 'Eksempel 3: Omforme arealformel',
      problem: `Et rektangulært rom har areal 24 m² og lengde 6 m. Finn bredden.`,
      solution: `**Løsning:**

Formelen for areal av rektangel: $A = l \\cdot b$

Vi kjenner $A = 24$ og $l = 6$, og vil finne $b$.

Omformer:
$$b = \\frac{A}{l} = \\frac{24}{6} = 4 \\text{ m}$$

Bredden er **4 m**.

**Kontroll:** $6 \\cdot 4 = 24$ m² ✓`,
    },
    {
      id: '2py-9-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-9-2-ex-1',
        number: '9.5',
        type: 'classic',
        difficulty: 'lett',
        task: `Bruk formelen for hastighet: $v = \\frac{s}{t}$.

a) En lastebil kjører 360 km på 4,5 timer. Finn gjennomsnittshastigheten.
b) En budbil kjører i 80 km/h i 1,75 timer. Hvor langt kjører den?
c) En varelevering er 150 km. Sjåføren kjører i snitt 60 km/h. Hvor lang tid tar turen?`,
        subTasks: [
          { label: 'a', task: 'Finn hastigheten', solution: '$v = \\frac{360}{4{,}5} = 80$ km/h', answer: 80 },
          { label: 'b', task: 'Finn strekningen', solution: '$s = v \\cdot t = 80 \\cdot 1{,}75 = 140$ km', answer: 140 },
          { label: 'c', task: 'Finn tiden', solution: '$t = \\frac{s}{v} = \\frac{150}{60} = 2{,}5$ timer', answer: 2.5 },
        ],
        hints: ['Strekning: s = v · t', 'Tid: t = s / v'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-9-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-9-2-ex-2',
        number: '9.6',
        type: 'classic',
        difficulty: 'lett',
        task: `Bruk Ohms lov: $U = R \\cdot I$.

a) Finn spenningen når $R = 22$ ohm og $I = 2$ A.
b) Finn strømmen når $U = 230$ V og $R = 115$ ohm.
c) Finn motstanden når $U = 12$ V og $I = 0{,}3$ A.`,
        subTasks: [
          { label: 'a', task: 'Finn U', solution: '$U = 22 \\cdot 2 = 44$ V', answer: 44 },
          { label: 'b', task: 'Finn I', solution: '$I = \\frac{230}{115} = 2$ A', answer: 2 },
          { label: 'c', task: 'Finn R', solution: '$R = \\frac{12}{0{,}3} = 40$ ohm', answer: 40 },
        ],
        hints: ['I = U / R', 'R = U / I'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-9-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-9-2-ex-3',
        number: '9.7',
        type: 'classic',
        difficulty: 'medium',
        task: `En snekker skal lage en rektangulær terrasse.

a) Terrassen skal ha areal 18 m² og bredde 3 m. Finn lengden. Bruk $A = l \\cdot b$.
b) Terrassen trenger bord med tykkelse 28 mm. Hvor mange bord trengs over bredden 3 m? (Bordbredde: 120 mm, inkluder 5 mm mellomrom.)
c) Volumet av trevirke er $V = l \\cdot b \\cdot h$. Hvert bord er 6 m langt, 0,12 m bredt og 0,028 m tykt. Hvor mange kubikkmeter trevirke per bord?`,
        subTasks: [
          { label: 'a', task: 'Finn lengden', solution: '$l = \\frac{A}{b} = \\frac{18}{3} = 6$ m', answer: 6 },
          { label: 'b', task: 'Antall bord', solution: 'Plass per bord inkl. mellomrom: $120 + 5 = 125$ mm. Antall: $\\frac{3000}{125} = 24$ bord', answer: 24 },
          { label: 'c', task: 'Kubikkmeter per bord', solution: '$V = 6 \\cdot 0{,}12 \\cdot 0{,}028 = 0{,}02016$ m³ $\\approx 0{,}020$ m³', answer: 0.020 },
        ],
        hints: ['Lengde = Areal / Bredde', 'Husk mellomrom mellom bordene', 'Bruk meter som enhet i volumformelen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-9-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-9-2-ex-4',
        number: '9.8',
        type: 'classic',
        difficulty: 'medium',
        task: `Effektformelen i elektro er $P = U \\cdot I$, der $P$ = effekt (watt), $U$ = spenning (volt) og $I$ = strøm (ampere).

a) En varmeovn trekker 8 A på 230 V. Hva er effekten i watt?
b) En komfyr har effekt 7 200 W på 230 V. Hvor stor strøm trekker den?
c) En sikring tåler maks 16 A. Hva er maks effekt på 230 V?
d) Kan du koble varmeovnen og komfyren på samme sikringskurs (16 A)?`,
        subTasks: [
          { label: 'a', task: 'Effekt varmeovn', solution: '$P = 230 \\cdot 8 = 1\\,840$ W', answer: 1840 },
          { label: 'b', task: 'Strøm komfyr', solution: '$I = \\frac{P}{U} = \\frac{7\\,200}{230} \\approx 31{,}3$ A', answer: 31.3 },
          { label: 'c', task: 'Maks effekt', solution: '$P = 230 \\cdot 16 = 3\\,680$ W', answer: 3680 },
          { label: 'd', task: 'Kan begge kobles til 16 A?', solution: 'Total strøm: $8 + 31{,}3 = 39{,}3$ A. Nei, dette er langt over 16 A. Komfyren alene krever egen sikringskurs.' },
        ],
        hints: ['I = P / U', 'Summer strømmene for å sjekke mot sikringen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 9.3: PROPORSJONALITET
// ============================================================================

export const CHAPTER_2PY_9_3: TextbookChapter = {
  id: '2py-9-3',
  courseId: '2py',
  chapterNumber: '9.3',
  title: 'Proporsjonalitet',
  description: 'Forstå rett og omvendt proporsjonalitet, forholdstall og skala i praktiske sammenhenger.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for proporsjonale sammenhenger',
    'bruke forholdstall og skala i praktiske beregninger',
  ],
  content: [
    {
      id: '2py-9-3-intro',
      type: 'text',
      content: `## Proporsjonalitet i praksis

**Proporsjonalitet** handler om sammenhenger der to størrelser endres i et fast forhold til hverandre.

Eksempler fra arbeidslivet:
- Mengde maling og areal som dekkes
- Antall timer og lønn
- Mengde ingredienser i en oppskrift
- Skala på tegninger og kart`,
    },
    {
      id: '2py-9-3-def-1',
      type: 'definition',
      title: 'Rett proporsjonalitet',
      content: `To størrelser er **rett proporsjonale** når den ene øker like mye som den andre.

$$y = k \\cdot x$$

der $k$ er **proporsjonalitetskonstanten** (forholdstallet).

**Kjennetegn:**
- Dobbelt så mye av $x$ gir dobbelt så mye av $y$
- Grafen er en rett linje gjennom origo (0, 0)

**Eksempel:** Hvis 1 liter maling dekker 10 m², dekker 3 liter $3 \\cdot 10 = 30$ m².`,
    },
    {
      id: '2py-9-3-example-1',
      type: 'example',
      title: 'Eksempel 1: Blandingsforhold',
      problem: `En murer blander betong med forholdet 1 del sement : 3 deler sand : 5 deler grus.

a) Hvor mye sand og grus trengs til 20 kg sement?
b) Mureren trenger totalt 450 kg betongblanding. Hvor mye av hver ingrediens trengs?`,
      solution: `**Løsning:**

a) Forholdet er 1 : 3 : 5.
- Sand: $20 \\cdot 3 = 60$ kg
- Grus: $20 \\cdot 5 = 100$ kg

b) Summen av forholdstallene: $1 + 3 + 5 = 9$

Én del: $\\frac{450}{9} = 50$ kg

- Sement: $1 \\cdot 50 = 50$ kg
- Sand: $3 \\cdot 50 = 150$ kg
- Grus: $5 \\cdot 50 = 250$ kg

**Kontroll:** $50 + 150 + 250 = 450$ kg ✓`,
    },
    {
      id: '2py-9-3-def-2',
      type: 'definition',
      title: 'Omvendt proporsjonalitet',
      content: `To størrelser er **omvendt proporsjonale** når den ene øker like mye som den andre minker.

$$y = \\frac{k}{x}$$

**Kjennetegn:**
- Dobbelt så mye av $x$ gir halvparten av $y$
- Produktet $x \\cdot y = k$ er alltid det samme

**Eksempel:** Hvis 2 arbeidere bruker 10 dager på en jobb, bruker 4 arbeidere $\\frac{10}{2} = 5$ dager.`,
    },
    {
      id: '2py-9-3-example-2',
      type: 'example',
      title: 'Eksempel 2: Skala og målestokk',
      problem: `En arkitekt lager en plantegning i målestokk 1 : 50.

a) Et rom er 4,2 m langt i virkeligheten. Hvor langt er det på tegningen?
b) På tegningen er en dør 1,8 cm bred. Hvor bred er døren i virkeligheten?
c) Arealet av stuen er 12 cm² på tegningen. Hva er arealet i virkeligheten?`,
      solution: `**Løsning:**

Målestokk 1 : 50 betyr at 1 cm på tegningen = 50 cm i virkeligheten.

a) Lengde på tegning: $\\frac{4{,}2 \\text{ m}}{50} = \\frac{420 \\text{ cm}}{50} = 8{,}4$ cm

b) Bredde i virkeligheten: $1{,}8 \\cdot 50 = 90$ cm $= 0{,}9$ m

c) For areal må vi gange med $50^2 = 2\\,500$:
$12 \\text{ cm}^2 \\cdot 2\\,500 = 30\\,000 \\text{ cm}^2 = 3 \\text{ m}^2$`,
    },
    {
      id: '2py-9-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-9-3-ex-1',
        number: '9.9',
        type: 'classic',
        difficulty: 'lett',
        task: `En maler bruker 0,8 liter maling per m² vegg.

a) Hvor mye maling trengs til 25 m²?
b) Maleren har 6 liter maling. Hvor mange m² rekker det til?
c) En boks maling inneholder 3 liter og koster 349 kr. Hva blir malingskostnaden for 25 m²?`,
        subTasks: [
          { label: 'a', task: 'Maling for 25 m²', solution: '$25 \\cdot 0{,}8 = 20$ liter', answer: 20 },
          { label: 'b', task: 'Areal for 6 liter', solution: '$\\frac{6}{0{,}8} = 7{,}5$ m²', answer: 7.5 },
          { label: 'c', task: 'Kostnad for 25 m²', solution: 'Trenger 20 liter $= \\frac{20}{3} \\approx 6{,}7$, altså 7 bokser. Kostnad: $7 \\cdot 349 = 2\\,443$ kr', answer: 2443 },
        ],
        hints: ['Mengde maling = forbruk per m² × areal', 'Rund opp til hele bokser'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-9-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-9-3-ex-2',
        number: '9.10',
        type: 'classic',
        difficulty: 'lett',
        task: `En oppskrift på 4 porsjoner pizza bruker:
- 400 g mel
- 2,5 dl vann
- 8 g gjær

a) Hvor mye av hver ingrediens trengs til 10 porsjoner?
b) Hvor mye mel trengs til 6 porsjoner?
c) Kokken har 1 kg mel. Hvor mange porsjoner kan hun lage?`,
        subTasks: [
          { label: 'a', task: '10 porsjoner', solution: 'Faktor: $\\frac{10}{4} = 2{,}5$. Mel: $400 \\cdot 2{,}5 = 1\\,000$ g. Vann: $2{,}5 \\cdot 2{,}5 = 6{,}25$ dl. Gjær: $8 \\cdot 2{,}5 = 20$ g.' },
          { label: 'b', task: 'Mel til 6 porsjoner', solution: '$\\frac{6}{4} \\cdot 400 = 1{,}5 \\cdot 400 = 600$ g', answer: 600 },
          { label: 'c', task: 'Porsjoner av 1 kg mel', solution: '$\\frac{1\\,000}{400} \\cdot 4 = 2{,}5 \\cdot 4 = 10$ porsjoner', answer: 10 },
        ],
        hints: ['Finn forholdet mellom ønsket og oppgitt antall porsjoner', 'Gang alle ingredienser med det samme forholdstallet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-9-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-9-3-ex-3',
        number: '9.11',
        type: 'classic',
        difficulty: 'medium',
        task: `Tre gartnere bruker 6 dager på å anlegge en hage.

a) Hvor mange dager bruker 1 gartner alene?
b) Hvor mange dager bruker 6 gartnere?
c) Oppdragsgiveren vil ha jobben ferdig på 2 dager. Hvor mange gartnere trengs?
d) Er dette rett eller omvendt proporsjonalitet? Begrunn svaret.`,
        subTasks: [
          { label: 'a', task: '1 gartner', solution: '$3 \\cdot 6 = 18$ dager', answer: 18 },
          { label: 'b', task: '6 gartnere', solution: '$\\frac{18}{6} = 3$ dager', answer: 3 },
          { label: 'c', task: 'Ferdig på 2 dager', solution: '$\\frac{18}{2} = 9$ gartnere', answer: 9 },
          { label: 'd', task: 'Rett eller omvendt?', solution: 'Omvendt proporsjonalitet. Flere gartnere gir færre dager. Produktet gartnere × dager = 18 er konstant.' },
        ],
        hints: ['Finn totalt antall dagsverk (gartnere × dager)', 'Omvendt proporsjonalitet: produktet er konstant'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-9-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-9-3-ex-4',
        number: '9.12',
        type: 'classic',
        difficulty: 'medium',
        task: `En plantegning er i målestokk 1 : 100.

a) Stuen er 5,2 cm lang på tegningen. Hvor lang er stuen i virkeligheten?
b) Kjøkkenet er 3,6 m × 2,8 m i virkeligheten. Hva er målene på tegningen?
c) Hva er arealet av kjøkkenet på tegningen (i cm²)?
d) Hva er arealet i virkeligheten (i m²)?`,
        subTasks: [
          { label: 'a', task: 'Stuen i virkeligheten', solution: '$5{,}2 \\cdot 100 = 520$ cm $= 5{,}2$ m', answer: 5.2 },
          { label: 'b', task: 'Kjøkkenet på tegning', solution: '$\\frac{3{,}6 \\text{ m}}{100} = 3{,}6$ cm og $\\frac{2{,}8 \\text{ m}}{100} = 2{,}8$ cm', },
          { label: 'c', task: 'Areal på tegning', solution: '$3{,}6 \\cdot 2{,}8 = 10{,}08$ cm²', answer: 10.08 },
          { label: 'd', task: 'Areal i virkeligheten', solution: '$3{,}6 \\cdot 2{,}8 = 10{,}08$ m²', answer: 10.08 },
        ],
        hints: ['1 : 100 betyr 1 cm på tegning = 100 cm = 1 m i virkeligheten', 'For areal: gang med målestokken i andre potens'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10: UTVIDET ØKONOMI
// ============================================================================

export const CHAPTER_2PY_10_1: TextbookChapter = {
  id: '2py-10-1',
  courseId: '2py',
  chapterNumber: '10.1',
  title: 'Sparing og renters rente',
  description: 'Forstå vekstfaktor, renters rente og sammenlign spareformer.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke vekstfaktor og renters rente',
    'sammenligne spareformer og vurdere lønnsomhet',
  ],
  content: [
    {
      id: '2py-10-1-intro',
      type: 'text',
      content: `## Sparing over tid

Når du sparer penger, får du rente. Neste år får du rente på **både det opprinnelige beløpet og den opptjente renten**. Dette kalles **renters rente** -- pengene vokser raskere og raskere over tid.

For å forstå dette bruker vi **vekstfaktor**.`,
    },
    {
      id: '2py-10-1-def-1',
      type: 'definition',
      title: 'Vekstfaktor',
      content: `**Vekstfaktoren** forteller hva vi ganger med for å gå fra én periode til neste.

- Rente på 3 % → vekstfaktor $1 + 0{,}03 = 1{,}03$
- Rente på 5 % → vekstfaktor $1 + 0{,}05 = 1{,}05$
- Nedgang på 10 % → vekstfaktor $1 - 0{,}10 = 0{,}90$

**Generelt:** Vekstfaktor = $1 + \\frac{p}{100}$ der $p$ er prosenten (positiv for økning, negativ for nedgang).`,
    },
    {
      id: '2py-10-1-formel',
      type: 'formula',
      title: 'Renters rente',
      latex: `K = K_0 \\cdot (1 + r)^n`,
      description: `Der:
- $K$ = Sluttverdi (beløp etter $n$ perioder)
- $K_0$ = Startbeløp
- $r$ = Rentesats per periode (som desimaltall)
- $n$ = Antall perioder`,
    },
    {
      id: '2py-10-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Sparekonto',
      problem: `Marte setter 50 000 kr inn på en sparekonto med 4 % årlig rente.

a) Hvor mye har hun etter 1 år?
b) Hvor mye har hun etter 5 år?
c) Hvor mye av sluttbeløpet er renter?`,
      solution: `**Løsning:**

Vekstfaktor: $1 + 0{,}04 = 1{,}04$

a) Etter 1 år:
$$K = 50\\,000 \\cdot 1{,}04 = 52\\,000 \\text{ kr}$$

b) Etter 5 år:
$$K = 50\\,000 \\cdot 1{,}04^5 = 50\\,000 \\cdot 1{,}2167 = 60\\,833 \\text{ kr}$$

c) Renter: $60\\,833 - 50\\,000 = 10\\,833$ kr

**Til sammenligning:** Med enkel rente (uten rentes rente) hadde hun fått:
$50\\,000 + 50\\,000 \\cdot 0{,}04 \\cdot 5 = 60\\,000$ kr

Renters rente ga henne **833 kr ekstra**.`,
    },
    {
      id: '2py-10-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammenligne spareformer',
      problem: `Erik har 100 000 kr og vurderer to spareformer:
- **Sparekonto:** 3,5 % årlig rente
- **Aksjesparekonto:** Forventet 7 % årlig avkastning

Sammenlign verdien etter 10 år.`,
      solution: `**Løsning:**

**Sparekonto:**
$$K = 100\\,000 \\cdot 1{,}035^{10} = 100\\,000 \\cdot 1{,}4106 = 141\\,060 \\text{ kr}$$

**Aksjesparekonto:**
$$K = 100\\,000 \\cdot 1{,}07^{10} = 100\\,000 \\cdot 1{,}9672 = 196\\,720 \\text{ kr}$$

**Forskjell:** $196\\,720 - 141\\,060 = 55\\,660$ kr

Aksjesparekontoen gir vesentlig mer over 10 år, men har også høyere risiko.`,
    },
    {
      id: '2py-10-1-tip-1',
      type: 'tip',
      title: 'Bruk kalkulator eller regneark',
      content: `For å regne $1{,}04^5$ på kalkulator:

1. Skriv 1,04
2. Trykk $x^y$ (eller ^)
3. Skriv 5
4. Trykk =

I Excel eller Google Sheets: skriv **=50000*1,04^5** i en celle.`,
    },
    {
      id: '2py-10-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-10-1-ex-1',
        number: '10.1',
        type: 'classic',
        difficulty: 'lett',
        task: `Lise setter 30 000 kr inn på en sparekonto med 3 % årlig rente.

a) Hva er vekstfaktoren?
b) Hvor mye har hun etter 1 år?
c) Hvor mye har hun etter 3 år?
d) Hvor mye renter har hun tjent etter 3 år?`,
        subTasks: [
          { label: 'a', task: 'Vekstfaktor', solution: '$1 + 0{,}03 = 1{,}03$', answer: 1.03 },
          { label: 'b', task: 'Etter 1 år', solution: '$30\\,000 \\cdot 1{,}03 = 30\\,900$ kr', answer: 30900 },
          { label: 'c', task: 'Etter 3 år', solution: '$30\\,000 \\cdot 1{,}03^3 = 30\\,000 \\cdot 1{,}0927 = 32\\,781$ kr', answer: 32781 },
          { label: 'd', task: 'Renter etter 3 år', solution: '$32\\,781 - 30\\,000 = 2\\,781$ kr', answer: 2781 },
        ],
        hints: ['Vekstfaktor = 1 + rentesats som desimaltall', 'Bruk formelen K = K₀ · (1 + r)ⁿ'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-10-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-10-1-ex-2',
        number: '10.2',
        type: 'classic',
        difficulty: 'medium',
        task: `Knut har arvet 200 000 kr og vurderer to alternativer:
- **Høyrentekonto:** 4,5 % årlig rente
- **Fondssparing:** Forventet 8 % årlig avkastning

a) Hva blir verdien av høyrentekontoen etter 10 år?
b) Hva blir den forventede verdien av fondet etter 10 år?
c) Hva er forskjellen mellom de to alternativene?
d) Hva er den prosentvise økningen for hvert alternativ over 10 år?`,
        subTasks: [
          { label: 'a', task: 'Høyrentekonto 10 år', solution: '$200\\,000 \\cdot 1{,}045^{10} = 200\\,000 \\cdot 1{,}5530 = 310\\,600$ kr', answer: 310600 },
          { label: 'b', task: 'Fond 10 år', solution: '$200\\,000 \\cdot 1{,}08^{10} = 200\\,000 \\cdot 2{,}1589 = 431\\,785$ kr', answer: 431785 },
          { label: 'c', task: 'Forskjell', solution: '$431\\,785 - 310\\,600 = 121\\,185$ kr', answer: 121185 },
          { label: 'd', task: 'Prosentvis økning', solution: 'Konto: $\\frac{310\\,600 - 200\\,000}{200\\,000} \\cdot 100 = 55{,}3$ %. Fond: $\\frac{431\\,785 - 200\\,000}{200\\,000} \\cdot 100 = 115{,}9$ %.' },
        ],
        hints: ['Bruk formelen K = K₀ · (1 + r)ⁿ for begge', 'Prosentvis økning = (ny - gammel) / gammel · 100'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-10-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-10-1-ex-3',
        number: '10.3',
        type: 'classic',
        difficulty: 'medium',
        task: `Sofie sparer 2 000 kr i måneden. I stedet for renters rente skal vi beregne med enkel tilnærming:

Etter 1 år har hun satt inn $2\\,000 \\cdot 12 = 24\\,000$ kr. Kontoen gir 4 % rente per år.

a) Hvor mye setter hun inn totalt over 3 år?
b) Med en forenklet beregning: Sett innskudd × vekstfaktor i snitt for 3 år. (Bruk gjennomsnittlig innskuddstid = 1,5 år.) Hva blir sluttbeløpet?
c) Hvor mye av sluttbeløpet er renter?
d) Sofie vil ha 100 000 kr. Omtrent hvor mange år tar det? (Prøv deg fram.)`,
        subTasks: [
          { label: 'a', task: 'Totalt innskudd over 3 år', solution: '$2\\,000 \\cdot 12 \\cdot 3 = 72\\,000$ kr', answer: 72000 },
          { label: 'b', task: 'Sluttbeløp', solution: 'Gjennomsnittlig tid pengene står: 1,5 år. Omtrentlig sluttbeløp: $72\\,000 \\cdot 1{,}04^{1{,}5} \\approx 72\\,000 \\cdot 1{,}0604 = 76\\,349$ kr', answer: 76349 },
          { label: 'c', task: 'Renter', solution: '$76\\,349 - 72\\,000 = 4\\,349$ kr', answer: 4349 },
          { label: 'd', task: 'Tid til 100 000 kr', solution: 'Etter 4 år: $96\\,000$ innbetalt, med rente ca. $96\\,000 \\cdot 1{,}04^2 \\approx 103\\,834$ kr. Omtrent **4 år**.' },
        ],
        hints: ['Totalt innskudd = månedlig × 12 × antall år', 'Gjennomsnittlig innskuddstid er halvparten av total tid'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-10-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-10-1-ex-4',
        number: '10.4',
        type: 'classic',
        difficulty: 'medium',
        task: `En bruktbil koster 150 000 kr og synker 12 % i verdi hvert år.

a) Hva er vekstfaktoren for verdinedgangen?
b) Hva er bilens verdi etter 3 år?
c) Etter hvor mange år er bilen verdt under 50 000 kr?
d) Hvor mye har bilen falt i verdi totalt etter 5 år?`,
        subTasks: [
          { label: 'a', task: 'Vekstfaktor', solution: '$1 - 0{,}12 = 0{,}88$', answer: 0.88 },
          { label: 'b', task: 'Verdi etter 3 år', solution: '$150\\,000 \\cdot 0{,}88^3 = 150\\,000 \\cdot 0{,}6815 = 102\\,222$ kr', answer: 102222 },
          { label: 'c', task: 'Under 50 000 kr', solution: '$150\\,000 \\cdot 0{,}88^n < 50\\,000$. Prøv: $n=8$: $150\\,000 \\cdot 0{,}88^8 = 150\\,000 \\cdot 0{,}3596 = 53\\,936$. $n=9$: $150\\,000 \\cdot 0{,}88^9 = 47\\,464$. Etter **9 år**.' },
          { label: 'd', task: 'Verdifall etter 5 år', solution: '$150\\,000 - 150\\,000 \\cdot 0{,}88^5 = 150\\,000 - 150\\,000 \\cdot 0{,}5277 = 150\\,000 - 79\\,161 = 70\\,839$ kr', answer: 70839 },
        ],
        hints: ['Nedgang gir vekstfaktor under 1', 'Prøv ulike verdier av n'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 10.2: VALUTA OG INDEKS
// ============================================================================

export const CHAPTER_2PY_10_2: TextbookChapter = {
  id: '2py-10-2',
  courseId: '2py',
  chapterNumber: '10.2',
  title: 'Valuta og indeks',
  description: 'Forstå valutakurser og konsumprisindeksen. Regn om mellom valutaer og juster for prisstigning.',
  estimatedMinutes: 45,
  competenceGoals: [
    'regne med valutakurser',
    'bruke konsumprisindeksen til å sammenligne priser over tid',
  ],
  content: [
    {
      id: '2py-10-2-intro',
      type: 'text',
      content: `## Valuta

**Valuta** er utenlandsk pengeenhet. Når du handler fra utlandet, reiser eller driver med import/eksport, må du veksle mellom norske kroner og andre valutaer.

**Valutakursen** forteller hvor mye 1 enhet av en utenlandsk valuta koster i norske kroner.

For eksempel: Hvis eurokursen er 11,50, betyr det at 1 euro koster 11,50 kr.`,
    },
    {
      id: '2py-10-2-def-1',
      type: 'definition',
      title: 'Kjøps- og salgskurs',
      content: `Banker og vekslingskontor opererer med to kurser:

- **Kjøpskurs**: Kursen banken bruker når de **kjøper** valuta av deg (du selger, banken kjøper). Denne er **lavere**.
- **Salgskurs**: Kursen banken bruker når de **selger** valuta til deg (du kjøper, banken selger). Denne er **høyere**.

Forskjellen mellom kjøps- og salgskurs kalles **spread** og er bankens fortjeneste.

**Eksempel:**
| Valuta | Kjøpskurs | Salgskurs |
|--------|-----------|-----------|
| EUR | 11,20 | 11,80 |
| USD | 10,50 | 11,10 |
| GBP | 13,30 | 14,00 |`,
    },
    {
      id: '2py-10-2-example-1',
      type: 'example',
      title: 'Eksempel 1: Valutaveksling',
      problem: `Eurokursen er 11,50 kr (midtkurs).

a) Du skal på ferie og veksler 5 000 kr til euro. Hvor mange euro får du?
b) Du har 200 euro igjen etter ferien. Hvor mange kroner får du?
c) En nettbutikk i Tyskland selger en drill til 89 euro. Hva koster den i kroner?`,
      solution: `**Løsning:**

a) Fra NOK til EUR -- vi deler:
$$\\frac{5\\,000}{11{,}50} = 434{,}78 \\text{ euro}$$

b) Fra EUR til NOK -- vi ganger:
$$200 \\cdot 11{,}50 = 2\\,300 \\text{ kr}$$

c) Pris i kroner:
$$89 \\cdot 11{,}50 = 1\\,023{,}50 \\text{ kr}$$`,
    },
    {
      id: '2py-10-2-text-2',
      type: 'text',
      content: `## Konsumprisindeksen (KPI)

**Konsumprisindeksen** måler prisutviklingen på varer og tjenester i Norge. Den forteller hvor mye prisene har steget (eller sunket) over tid.

KPI brukes til å:
- Justere lønninger for prisstigning
- Sammenligne priser fra ulike år
- Beregne **realverdi** (hva pengene faktisk er verdt)

**Basisår:** Et år der KPI settes til 100. Alle andre år måles i forhold til basisåret.`,
    },
    {
      id: '2py-10-2-def-2',
      type: 'definition',
      title: 'Reallønn og nominell lønn',
      content: `**Nominell lønn** er det beløpet du faktisk mottar (tallet på lønnsslippen).

**Reallønn** er hva lønnen din faktisk er verdt, justert for prisstigning.

$$\\text{Reallønn i basisårets kroner} = \\frac{\\text{Nominell lønn}}{\\text{KPI}} \\cdot 100$$

Hvis KPI øker mer enn lønnen din, har du fått **lavere reallønn** -- du kan kjøpe mindre selv om du tjener mer.`,
    },
    {
      id: '2py-10-2-example-2',
      type: 'example',
      title: 'Eksempel 2: Prisjustering med KPI',
      problem: `KPI var 100 i 2015 og 128 i 2025.

a) Hvor mye har prisene steget fra 2015 til 2025?
b) En vare kostet 500 kr i 2015. Hva tilsvarer det i 2025-kroner?
c) En lærling tjente 250 000 kr i 2015 og 305 000 kr i 2025. Har reallønnen økt?`,
      solution: `**Løsning:**

a) Prisstigning: $\\frac{128 - 100}{100} \\cdot 100\\% = 28\\%$

b) Justert pris:
$$500 \\cdot \\frac{128}{100} = 500 \\cdot 1{,}28 = 640 \\text{ kr}$$

c) Reallønn 2025 i 2015-kroner:
$$\\frac{305\\,000}{128} \\cdot 100 = 238\\,281 \\text{ kr}$$

Reallønnen i 2015-kroner er 238 281 kr, som er **lavere** enn 250 000 kr. Lærlingen har fått **lavere kjøpekraft** til tross for høyere nominell lønn.`,
    },
    {
      id: '2py-10-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-10-2-ex-1',
        number: '10.5',
        type: 'classic',
        difficulty: 'lett',
        task: `Dollarkursen er 10,80 kr.

a) Du veksler 3 000 kr til dollar. Hvor mange dollar får du?
b) Du har 150 dollar etter en tur til USA. Hvor mye er det i norske kroner?
c) En verktøypakke koster 79 dollar på en amerikansk nettbutikk. Hva blir prisen i norske kroner?`,
        subTasks: [
          { label: 'a', task: 'NOK til USD', solution: '$\\frac{3\\,000}{10{,}80} = 277{,}78$ dollar', answer: 277.78 },
          { label: 'b', task: 'USD til NOK', solution: '$150 \\cdot 10{,}80 = 1\\,620$ kr', answer: 1620 },
          { label: 'c', task: 'Verktøy i NOK', solution: '$79 \\cdot 10{,}80 = 853{,}20$ kr', answer: 853.20 },
        ],
        hints: ['NOK til valuta: del på kursen', 'Valuta til NOK: gang med kursen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-10-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-10-2-ex-2',
        number: '10.6',
        type: 'classic',
        difficulty: 'lett',
        task: `En bedrift importerer reservedeler fra Tyskland. Salgskursen for euro er 11,80 kr.

a) En leveranse koster 2 400 euro. Hva betaler bedriften i norske kroner?
b) Bedriften har budsjettert 50 000 kr til innkjøp. Hvor mange euro kan de handle for?
c) Frakt koster 180 euro. Hva er total kostnad i norske kroner (varer + frakt)?`,
        subTasks: [
          { label: 'a', task: 'Leveranse i NOK', solution: '$2\\,400 \\cdot 11{,}80 = 28\\,320$ kr', answer: 28320 },
          { label: 'b', task: 'Budsjett i EUR', solution: '$\\frac{50\\,000}{11{,}80} = 4\\,237{,}29$ euro', answer: 4237.29 },
          { label: 'c', task: 'Total kostnad', solution: '$(2\\,400 + 180) \\cdot 11{,}80 = 2\\,580 \\cdot 11{,}80 = 30\\,444$ kr', answer: 30444 },
        ],
        hints: ['Bruk salgskursen når du kjøper euro', 'Summer euro-beløpene før du veksler'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-10-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-10-2-ex-3',
        number: '10.7',
        type: 'classic',
        difficulty: 'medium',
        task: `Her er KPI for noen utvalgte år:

| År   | KPI  |
|------|------|
| 2015 | 100  |
| 2018 | 108  |
| 2020 | 114  |
| 2023 | 126  |
| 2025 | 132  |

a) Hvor mange prosent steg prisene fra 2015 til 2020?
b) En liter melk kostet 16 kr i 2015. Hva tilsvarer det i 2025-priser?
c) En håndverker hadde årslønn 420 000 kr i 2018 og 510 000 kr i 2025. Har reallønnen økt?`,
        subTasks: [
          { label: 'a', task: 'Prisstigning 2015-2020', solution: '$\\frac{114 - 100}{100} \\cdot 100 = 14$ %', answer: 14 },
          { label: 'b', task: 'Melk i 2025-priser', solution: '$16 \\cdot \\frac{132}{100} = 16 \\cdot 1{,}32 = 21{,}12$ kr', answer: 21.12 },
          { label: 'c', task: 'Reallønn økt?', solution: 'Reallønn 2025 i 2018-kroner: $\\frac{510\\,000}{132} \\cdot 108 = 417\\,273$ kr. Reallønnen har **sunket** litt (fra 420 000 til 417 273 i 2018-kroner).' },
        ],
        hints: ['Prisstigning = (ny KPI - gammel KPI) / gammel KPI · 100', 'Juster med forholdet mellom KPI-verdiene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-10-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-10-2-ex-4',
        number: '10.8',
        type: 'classic',
        difficulty: 'medium',
        task: `En snekker bestiller materialer fra Sverige. Valutakursene er:
- Kjøpskurs SEK: 0,98 kr
- Salgskurs SEK: 1,06 kr

a) Snekkeren bestiller materialer for 8 500 SEK. Hva betaler han i norske kroner?
b) Snekkeren selger restvarer for 2 200 SEK tilbake til leverandøren. Hvor mye mottar han i NOK?
c) Hva er bankens fortjeneste (spread) per krone?
d) Hvor mye taper snekkeren totalt på spreaden sammenlignet med midtkursen (1,02)?`,
        subTasks: [
          { label: 'a', task: 'Innkjøp i NOK', solution: '$8\\,500 \\cdot 1{,}06 = 9\\,010$ kr (bruker salgskurs)', answer: 9010 },
          { label: 'b', task: 'Salg i NOK', solution: '$2\\,200 \\cdot 0{,}98 = 2\\,156$ kr (bruker kjøpskurs)', answer: 2156 },
          { label: 'c', task: 'Spread', solution: '$1{,}06 - 0{,}98 = 0{,}08$ kr per svenske krone', answer: 0.08 },
          { label: 'd', task: 'Tap på spread', solution: 'Innkjøp: $(1{,}06 - 1{,}02) \\cdot 8\\,500 = 340$ kr. Salg: $(1{,}02 - 0{,}98) \\cdot 2\\,200 = 88$ kr. Totalt tap: $340 + 88 = 428$ kr', answer: 428 },
        ],
        hints: ['Bruk salgskurs når du kjøper valuta', 'Bruk kjøpskurs når du selger valuta', 'Midtkurs = (kjøp + salg) / 2'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 11: UTVIDET STATISTIKK
// ============================================================================

export const CHAPTER_2PY_11_1: TextbookChapter = {
  id: '2py-11-1',
  courseId: '2py',
  chapterNumber: '11.1',
  title: 'Boksplott og kvartiler',
  description: 'Lær å sortere datasett, finne kvartiler og lage boksplott for å sammenligne data.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beregne kvartiler og lage boksplott',
    'sammenligne datasett ved hjelp av boksplott',
  ],
  content: [
    {
      id: '2py-11-1-intro',
      type: 'text',
      content: `## Boksplott -- et nyttig verktøy

Et **boksplott** (box plot) gir en rask oversikt over et datasett. Det viser:
- Hvor dataene ligger (sentrum)
- Hvor spredt dataene er
- Om det finnes ekstreme verdier

Boksplott er mye brukt i kvalitetskontroll, HMS-rapportering og lønnsstatistikk.`,
    },
    {
      id: '2py-11-1-text-1',
      type: 'text',
      content: `## Steg for steg: Lag et boksplott

**Steg 1:** Sorter datasettet fra minst til størst.

**Steg 2:** Finn **medianen** (midtverdien). Den deler datasettet i to like store halvdeler.

**Steg 3:** Finn **Q1** (nedre kvartil) -- medianen av den nedre halvdelen.

**Steg 4:** Finn **Q3** (øvre kvartil) -- medianen av den øvre halvdelen.

**Steg 5:** Noter **minste verdi** og **største verdi**.

Du har nå en **fempunktsoppsummering**: Min, Q1, Median, Q3, Maks.`,
    },
    {
      id: '2py-11-1-def-1',
      type: 'definition',
      title: 'Kvartiler',
      content: `**Median (Q2):** Verdien som deler det sorterte datasettet i to like store deler. Halvparten av dataene er under og halvparten er over medianen.

**Nedre kvartil (Q1):** Medianen av den nedre halvdelen. 25 % av dataene er under Q1.

**Øvre kvartil (Q3):** Medianen av den øvre halvdelen. 75 % av dataene er under Q3.

**Kvartilbredde (IQR):** Forskjellen mellom Q3 og Q1: $\\text{IQR} = Q3 - Q1$. Kvartilbredden viser spredningen av de midterste 50 % av dataene.`,
    },
    {
      id: '2py-11-1-example-1',
      type: 'example',
      title: 'Eksempel 1: Fempunktsoppsummering',
      problem: `En elektrikersjef registrerer tidsforbruket (i minutter) for 11 like oppdrag:

45, 52, 38, 60, 42, 55, 48, 65, 40, 50, 58

Finn fempunktsoppsummeringen og tegn boksplottet.`,
      solution: `**Løsning:**

**Steg 1: Sorter:**
38, 40, 42, 45, 48, 50, 52, 55, 58, 60, 65

**Steg 2: Median** (11 verdier → midterste er nr. 6):
Median = **50**

**Steg 3: Q1** (median av nedre halvdel: 38, 40, 42, 45, 48):
Q1 = **42**

**Steg 4: Q3** (median av øvre halvdel: 52, 55, 58, 60, 65):
Q3 = **58**

**Fempunktsoppsummering:**
| Mål | Verdi |
|-----|-------|
| Min | 38 |
| Q1 | 42 |
| Median | 50 |
| Q3 | 58 |
| Maks | 65 |

**Kvartilbredde:** $Q3 - Q1 = 58 - 42 = 16$ minutter

Boksplottet tegnes med en boks fra 42 til 58, en strek ved 50 (medianen), og «haler» ut til 38 og 65.`,
    },
    {
      id: '2py-11-1-text-2',
      type: 'text',
      content: `## Uteliggere (outliers)

En **uteligger** er en observasjon som er uvanlig stor eller liten sammenlignet med resten av datasettet.

**Tommelregel for uteliggere:**
En verdi er en uteligger hvis den er:
- Mindre enn $Q1 - 1{,}5 \\cdot \\text{IQR}$
- Større enn $Q3 + 1{,}5 \\cdot \\text{IQR}$

Uteliggere tegnes som separate punkter utenfor boksplottet.`,
    },
    {
      id: '2py-11-1-example-2',
      type: 'example',
      title: 'Eksempel 2: Sammenligne med boksplott',
      problem: `To lag på et lager registrerer antall pakker pakket per time:

**Lag A:** 22, 25, 28, 30, 31, 33, 35, 38
**Lag B:** 18, 24, 26, 29, 30, 32, 34, 42

Sammenlign de to lagene ved hjelp av boksplott.`,
      solution: `**Løsning:**

**Lag A** (allerede sortert, 8 verdier):
- Min = 22
- Q1 = median av (22, 25, 28, 30) = $\\frac{25 + 28}{2} = 26{,}5$
- Median = $\\frac{30 + 31}{2} = 30{,}5$
- Q3 = median av (31, 33, 35, 38) = $\\frac{33 + 35}{2} = 34$
- Maks = 38

**Lag B** (allerede sortert, 8 verdier):
- Min = 18
- Q1 = $\\frac{24 + 26}{2} = 25$
- Median = $\\frac{29 + 30}{2} = 29{,}5$
- Q3 = $\\frac{32 + 34}{2} = 33$
- Maks = 42

**Sammenligning:**
- Lag A har høyere median (30,5 vs 29,5), altså noe bedre i snitt.
- Lag B har større spredning (IQR = 33 - 25 = 8 vs 34 - 26,5 = 7,5).
- Lag B har høyere toppverdi (42), men også lavere bunnverdi (18). Lag B er mer ujevnt.`,
    },
    {
      id: '2py-11-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '2py-11-1-ex-1',
        number: '11.1',
        type: 'classic',
        difficulty: 'lett',
        task: `En frisørsalong registrerer ventetiden (i minutter) for 9 kunder:

5, 12, 8, 3, 15, 7, 10, 6, 20

a) Sorter datasettet.
b) Finn medianen.
c) Finn Q1 og Q3.
d) Finn kvartilbredden (IQR).`,
        subTasks: [
          { label: 'a', task: 'Sorter datasettet', solution: '3, 5, 6, 7, 8, 10, 12, 15, 20' },
          { label: 'b', task: 'Finn medianen', solution: '9 verdier, midterste er nr. 5: Median = **8** minutter', answer: 8 },
          { label: 'c', task: 'Finn Q1 og Q3', solution: 'Q1 = median av (3, 5, 6, 7) = $\\frac{5 + 6}{2} = 5{,}5$. Q3 = median av (10, 12, 15, 20) = $\\frac{12 + 15}{2} = 13{,}5$' },
          { label: 'd', task: 'Kvartilbredde', solution: '$Q3 - Q1 = 13{,}5 - 5{,}5 = 8$ minutter', answer: 8 },
        ],
        hints: ['Sorter fra minst til størst', 'Medianen er den midterste verdien i et sortert datasett', 'Kvartilbredde = Q3 - Q1'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-11-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '2py-11-1-ex-2',
        number: '11.2',
        type: 'classic',
        difficulty: 'lett',
        task: `En bilverksted registrerer antall biler reparert per dag i 10 dager:

6, 8, 5, 7, 9, 4, 8, 7, 6, 10

a) Sorter datasettet og finn fempunktsoppsummeringen (Min, Q1, Median, Q3, Maks).
b) Beregn kvartilbredden.
c) Tegn et boksplott.`,
        subTasks: [
          { label: 'a', task: 'Fempunktsoppsummering', solution: 'Sortert: 4, 5, 6, 6, 7, 7, 8, 8, 9, 10. Min=4, Q1=6, Median=$\\frac{7+7}{2}=7$, Q3=8, Maks=10' },
          { label: 'b', task: 'Kvartilbredde', solution: '$IQR = Q3 - Q1 = 8 - 6 = 2$', answer: 2 },
          { label: 'c', task: 'Tegn boksplott', solution: 'Boks fra 6 til 8, strek ved 7 (median), haler fra 4 til 10.' },
        ],
        hints: ['10 verdier: medianen er gjennomsnittet av nr. 5 og 6', 'Q1 er medianen av de 5 laveste verdiene'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-11-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '2py-11-1-ex-3',
        number: '11.3',
        type: 'classic',
        difficulty: 'medium',
        task: `To avdelinger i en bedrift rapporterer sykefravær (dager per ansatt per år):

**Avdeling A (12 ansatte):** 2, 4, 5, 3, 8, 6, 4, 3, 5, 7, 4, 15
**Avdeling B (12 ansatte):** 3, 3, 4, 5, 5, 6, 6, 7, 7, 8, 9, 10

a) Finn fempunktsoppsummeringen for begge avdelinger.
b) Har avdeling A noen uteliggere? (Bruk regelen Q3 + 1,5 · IQR.)
c) Hvilken avdeling har størst spredning?
d) Hvilken avdeling har lavest typisk sykefravær?`,
        subTasks: [
          { label: 'a', task: 'Fempunktsoppsummeringer', solution: 'Avd. A sortert: 2,3,3,4,4,4,5,5,6,7,8,15. Min=2, Q1=3, Median=$\\frac{4+5}{2}=4{,}5$, Q3=$\\frac{6+7}{2}=6{,}5$, Maks=15. Avd. B sortert: 3,3,4,5,5,6,6,7,7,8,9,10. Min=3, Q1=$\\frac{4+5}{2}=4{,}5$, Median=$\\frac{6+6}{2}=6$, Q3=$\\frac{7+8}{2}=7{,}5$, Maks=10.' },
          { label: 'b', task: 'Uteliggere i A?', solution: '$IQR = 6{,}5 - 3 = 3{,}5$. Grense: $Q3 + 1{,}5 \\cdot 3{,}5 = 6{,}5 + 5{,}25 = 11{,}75$. Verdien 15 > 11,75, så **15 er en uteligger**.' },
          { label: 'c', task: 'Størst spredning?', solution: 'Avd. A: IQR = 3,5 og range = 13. Avd. B: IQR = 3 og range = 7. **Avdeling A** har størst spredning.' },
          { label: 'd', task: 'Lavest typisk sykefravær?', solution: '**Avdeling A** har lavere median (4,5 vs 6), altså lavere typisk sykefravær.' },
        ],
        hints: ['Sorter begge datasett først', 'Uteligger hvis verdi > Q3 + 1,5 · IQR', 'Medianen viser typisk verdi'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: '2py-11-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '2py-11-1-ex-4',
        number: '11.4',
        type: 'classic',
        difficulty: 'medium',
        task: `En produksjonsleder måler tykkelsen (i mm) på 15 metallplater. Spesifikasjonen krever 5,0 mm ± 0,3 mm.

4,7 - 5,1 - 5,0 - 4,8 - 5,2 - 4,9 - 5,0 - 5,3 - 4,6 - 5,1 - 5,0 - 4,9 - 5,2 - 5,0 - 4,8

a) Finn fempunktsoppsummeringen.
b) Beregn kvartilbredden.
c) Hvor mange plater er utenfor spesifikasjonen (under 4,7 eller over 5,3)?
d) Er det noen uteliggere i datasettet?`,
        subTasks: [
          { label: 'a', task: 'Fempunktsoppsummering', solution: 'Sortert: 4,6 4,7 4,8 4,8 4,9 4,9 5,0 5,0 5,0 5,0 5,1 5,1 5,2 5,2 5,3. Min=4,6, Q1=4,8 (median av 4,6-4,9), Median=5,0 (nr.8), Q3=5,1 (median av 5,0-5,3), Maks=5,3' },
          { label: 'b', task: 'Kvartilbredde', solution: '$IQR = 5{,}1 - 4{,}8 = 0{,}3$ mm', answer: 0.3 },
          { label: 'c', task: 'Utenfor spesifikasjon', solution: 'Under 4,7: verdien 4,6 (1 plate). Over 5,3: ingen (5,3 er grensen). **1 plate** er utenfor spesifikasjon.', answer: 1 },
          { label: 'd', task: 'Uteliggere?', solution: 'Nedre grense: $4{,}8 - 1{,}5 \\cdot 0{,}3 = 4{,}8 - 0{,}45 = 4{,}35$. Øvre grense: $5{,}1 + 0{,}45 = 5{,}55$. Alle verdier ligger innenfor, så **ingen uteliggere**.' },
        ],
        hints: ['15 verdier: medianen er nr. 8 i sortert rekkefølge', 'Spesifikasjon: 5,0 ± 0,3 betyr mellom 4,7 og 5,3'],
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

export const PY_KAP9_11_CHAPTERS = [
  CHAPTER_2PY_9_1,
  CHAPTER_2PY_9_2,
  CHAPTER_2PY_9_3,
  CHAPTER_2PY_10_1,
  CHAPTER_2PY_10_2,
  CHAPTER_2PY_11_1,
];
