/**
 * Fysikk 1 - Kapittel 6.1: Elektrisk ladning og felt
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_6_1: TextbookChapter = {
  id: 'fys1-6-1',
  courseId: 'fys1',
  chapterNumber: '6.1',
  title: 'Elektrisk ladning og felt',
  description: 'Lær om elektrisk ladning, Coulombs lov, elektriske felt og potensial.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare hva elektrisk ladning er',
    'bruke Coulombs lov til å beregne krefter mellom ladninger',
    'forklare og beregne elektriske felt',
    'forklare elektrisk potensial og spenning',
  ],
  content: [
    {
      id: 'fys1-6-1-intro',
      type: 'text',
      content: `# Elektrisk ladning og felt

**Elektrisitet** er en av de viktigste kreftene i naturen. Den holder atomer sammen, gir oss lys og kraft, og gjør det mulig for nerveceller å kommunisere.

## Hva er elektrisk ladning?

**Elektrisk ladning** er en grunnleggende egenskap ved materie. Den kommer i to typer:

**1. Positiv ladning (+)**
- Bæres av protoner i atomkjernen
- Protoner kan ikke bevege seg fritt (sitter fast i kjernen)

**2. Negativ ladning (−)**
- Bæres av elektroner rundt atomkjernen
- Elektroner kan bevege seg fritt (spesielt i metaller)

**Grunnleggende fakta:**
- Ladning måles i **coulomb** (C)
- Elementærladningen: $e = 1.602 \\times 10^{-19}$ C
- Elektron: $q_e = -e = -1.602 \\times 10^{-19}$ C
- Proton: $q_p = +e = +1.602 \\times 10^{-19}$ C
- All ladning er et multiplum av elementærladningen

**Ladningsbevarelse:**
- Ladning kan ikke skapes eller ødelegges
- Total ladning i et lukket system er konstant
- Eksempel: Når du gnir en ballong mot håret, får ballongen negativ ladning (elektroner overføres), mens håret får positiv ladning (mister elektroner). Total ladning er fortsatt null.`,
    },
    {
      id: 'fys1-6-1-def-ladning',
      type: 'definition',
      title: 'Elektrisk ladning',
      content: 'Elektrisk ladning er en grunnleggende egenskap ved materie som kan være positiv eller negativ. Ladning måles i coulomb (C). Elementærladningen er $e = 1.602 \\times 10^{-19}$ C.',
    },
    {
      id: 'fys1-6-1-kraft',
      type: 'text',
      content: `# Elektriske krefter

**Likes frastøter, ulikes tiltrekker:**
- To positive ladninger frastøter hverandre
- To negative ladninger frastøter hverandre
- En positiv og en negativ ladning tiltrekker hverandre

## Coulombs lov

Den franske fysikeren **Charles-Augustin de Coulomb** (1736-1806) oppdaget i 1785 loven som beskriver kraften mellom to elektriske ladninger.

**Coulombs lov:**

$$F = k \\frac{|q_1 q_2|}{r^2}$$

hvor:
- $F$ = elektrisk kraft (N)
- $k$ = Coulombs konstant = $8.99 \\times 10^9$ N·m²/C²
- $q_1, q_2$ = ladningene (C)
- $r$ = avstanden mellom ladningene (m)

**Retning:**
- Kraften virker langs linjen mellom ladningene
- **Tiltrekning:** Hvis ladningene har motsatt fortegn ($q_1 q_2 < 0$)
- **Frastøting:** Hvis ladningene har likt fortegn ($q_1 q_2 > 0$)

**Viktige egenskaper:**
- Kraften avtar med kvadratet av avstanden (dobbel avstand → ¼ kraft)
- Kraften øker proporsjonalt med produktet av ladningene
- Kraften virker på begge ladninger (Newtons 3. lov)

**Sammenligning med gravitasjon:**

Coulombs lov ligner på Newtons gravitasjonslov:

$$F_{\\text{grav}} = G \\frac{m_1 m_2}{r^2}$$

**Likheter:**
- Begge avtar med $\\frac{1}{r^2}$
- Begge virker på avstand (ingen kontakt nødvendig)

**Forskjeller:**
- Gravitasjon er alltid tiltrekkende
- Elektrisk kraft kan være tiltrekkende eller frastøtende
- Elektrisk kraft er mye sterkere enn gravitasjon`,
    },
    {
      id: 'fys1-6-1-ex-coulomb',
      type: 'example',
      title: 'Eksempel: Kraft mellom to ladninger',
      problem: 'To ladninger på $q_1 = 5.0 \\times 10^{-6}$ C og $q_2 = -3.0 \\times 10^{-6}$ C er plassert 2.0 m fra hverandre. Beregn den elektriske kraften mellom dem.',
      solution: `**Gitt:**
- $q_1 = 5.0 \\times 10^{-6}$ C (positiv)
- $q_2 = -3.0 \\times 10^{-6}$ C (negativ)
- $r = 2.0$ m
- $k = 8.99 \\times 10^9$ N·m²/C²

**Søkt:** $F$

**Løsning:**

Bruker Coulombs lov:

$$F = k \\frac{|q_1 q_2|}{r^2}$$

Setter inn verdier:

$$F = 8.99 \\times 10^9 \\cdot \\frac{|5.0 \\times 10^{-6} \\cdot (-3.0 \\times 10^{-6})|}{(2.0)^2}$$

$$F = 8.99 \\times 10^9 \\cdot \\frac{15.0 \\times 10^{-12}}{4.0}$$

$$F = 8.99 \\times 10^9 \\cdot 3.75 \\times 10^{-12}$$

$$F = 3.37 \\times 10^{-2} \\text{ N} = 0.034 \\text{ N}$$

**Retning:** Siden ladningene har motsatt fortegn, tiltrekker de hverandre.

**Svar:** Kraften er 0.034 N, og den er tiltrekkende.`,
    },
    {
      id: 'fys1-6-1-felt',
      type: 'text',
      content: `# Elektrisk felt

Når en ladning plasseres i rommet, påvirker den andre ladninger rundt seg. Vi sier at ladningen skaper et **elektrisk felt**.

## Definisjon av elektrisk felt

**Elektrisk felt** er kraften per enhet ladning:

$$\\vec{E} = \\frac{\\vec{F}}{q}$$

hvor:
- $\\vec{E}$ = elektrisk felt (N/C eller V/m)
- $\\vec{F}$ = kraft på testladning (N)
- $q$ = testladning (C)

**Retning:**
- Elektrisk felt peker i retningen som en positiv testladning ville blitt påvirket
- **Fra positive ladninger** (radierer utover)
- **Mot negative ladninger** (radierer innover)

## Elektrisk felt fra en punktladning

Elektrisk felt fra en punktladning $Q$ på avstand $r$:

$$E = k \\frac{|Q|}{r^2}$$

**Viktig:** Feltets styrke avtar med kvadratet av avstanden.

## Feltlinjer

Vi visualiserer elektriske felt med **feltlinjer**:

**Egenskaper:**
- Starter på positive ladninger
- Ender på negative ladninger
- Peker i feltets retning
- Tetthet av linjer indikerer feltstyrke

**Eksempler:**

**1. Positiv ladning:**
- Feltlinjer radierer utover i alle retninger
- Feltet er sterkest nær ladningen

**2. Negativ ladning:**
- Feltlinjer radierer innover i alle retninger
- Feltet er sterkest nær ladningen

**3. To motsatte ladninger (dipol):**
- Feltlinjer går fra positiv til negativ
- Buede linjer

**4. Parallelle plater:**
- Uniformt felt mellom platene
- Parallelle, jevnt fordelte feltlinjer`,
    },
    {
      id: 'fys1-6-1-def-felt',
      type: 'definition',
      title: 'Elektrisk felt',
      content: 'Elektrisk felt er kraften per enhet ladning: $\\vec{E} = \\frac{\\vec{F}}{q}$. Felt fra punktladning: $E = k \\frac{|Q|}{r^2}$. Måles i N/C eller V/m.',
    },
    {
      id: 'fys1-6-1-potensial',
      type: 'text',
      content: `# Elektrisk potensial og spenning

## Elektrisk potensial

**Elektrisk potensial** er potensiell energi per enhet ladning:

$$V = \\frac{E_{\\text{pot}}}{q}$$

hvor:
- $V$ = elektrisk potensial (volt, V)
- $E_{\\text{pot}}$ = elektrisk potensiell energi (J)
- $q$ = ladning (C)

**Elektrisk potensial fra en punktladning:**

$$V = k \\frac{Q}{r}$$

**Viktig:** Potensial er en skalar (ingen retning), mens felt er en vektor (har retning).

## Spenning

**Spenning** (eller **potensialdifferanse**) er forskjellen i potensial mellom to punkter:

$$U = V_A - V_B = \\Delta V$$

**Tolkning:**
- Spenning er "trykket" som driver ladninger
- Høyt potensial → lavt potensial
- Positive ladninger beveger seg fra høyt til lavt potensial
- Negative ladninger beveger seg fra lavt til høyt potensial

**Sammenheng mellom felt og spenning:**

For uniformt felt:

$$E = \\frac{U}{d}$$

hvor $d$ = avstanden mellom punktene.

## Elektronvolt (eV)

**Elektronvolt** er en praktisk energienhet i atomfysikk:

**Definisjon:** Kinetisk energi et elektron får når det akselereres gjennom en spenning på 1 volt.

$$1 \\text{ eV} = 1.602 \\times 10^{-19} \\text{ J}$$

**Eksempel:** Et elektron i et TV-rør akselereres gjennom 20 000 V:

$$E = eU = (1.602 \\times 10^{-19}) \\cdot 20000 = 3.2 \\times 10^{-15} \\text{ J} = 20 \\text{ keV}$$`,
    },
    {
      id: 'fys1-6-1-def-spenning',
      type: 'definition',
      title: 'Spenning',
      content: 'Spenning er forskjellen i elektrisk potensial mellom to punkter: $U = \\Delta V$. Måles i volt (V). For uniformt felt: $E = \\frac{U}{d}$.',
    },
    {
      id: 'fys1-6-1-ex-felt',
      type: 'example',
      title: 'Eksempel: Elektrisk felt og kraft',
      problem: 'Et uniformt elektrisk felt på 500 N/C peker vertikalt oppover. En liten kule med masse 0.10 g og ladning $q = -2.0 \\times 10^{-6}$ C plasseres i feltet. a) Hva er den elektriske kraften på kulen? b) Hva er netto kraft på kulen?',
      solution: `**Gitt:**
- $E = 500$ N/C (oppover)
- $m = 0.10$ g $= 1.0 \\times 10^{-4}$ kg
- $q = -2.0 \\times 10^{-6}$ C
- $g = 9.81$ m/s²

**a) Elektrisk kraft:**

$$F_{\\text{el}} = |q| E = 2.0 \\times 10^{-6} \\cdot 500 = 1.0 \\times 10^{-3} \\text{ N}$$

**Retning:** Siden ladningen er negativ, virker kraften **nedover** (motsatt av feltet).

**b) Gravitasjonskraft:**

$$F_g = mg = 1.0 \\times 10^{-4} \\cdot 9.81 = 9.81 \\times 10^{-4} \\text{ N}$$

**Retning:** Nedover.

**Netto kraft:**

Begge kreftene virker nedover:

$$F_{\\text{netto}} = F_{\\text{el}} + F_g = 1.0 \\times 10^{-3} + 9.81 \\times 10^{-4} = 1.98 \\times 10^{-3} \\text{ N}$$

**Retning:** Nedover.

**Svar:**
a) Elektrisk kraft er 1.0 mN nedover.
b) Netto kraft er 1.98 mN nedover.`,
    },
    {
      id: 'fys1-6-1-historisk',
      type: 'note',
      title: 'Historisk: Benjamin Franklin',
      content: `**Benjamin Franklin** (1706-1790) var en av de tidlige pionerene innen elektrisitet. Hans berømte drageeksperiment i 1752 viste at lyn er elektrisk. Han introduserte også konvensjonen om positiv og negativ ladning.

Interessant nok valgte han feil: Han mente at **strøm** flyter fra positiv til negativ. I virkeligheten beveger elektroner seg fra negativ til positiv. Men konvensjonen holdt seg, og vi bruker fortsatt "strømretning" som går fra + til −.`,
    },
  ],
  exercises: [
    {
      id: 'fys1-6-1-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hvor mange elektroner må fjernes fra et nøytralt objekt for at det skal få en ladning på $+1.0$ µC?',
      solution: `**Gitt:**
- Total ladning: $Q = +1.0 \\times 10^{-6}$ C
- Elementærladning: $e = 1.602 \\times 10^{-19}$ C

**Søkt:** Antall elektroner $n$

**Løsning:**

Hvert elektron som fjernes gir en positiv ladning på $+e$:

$$Q = n e$$

$$n = \\frac{Q}{e} = \\frac{1.0 \\times 10^{-6}}{1.602 \\times 10^{-19}}$$

$$n = 6.24 \\times 10^{12}$$

**Svar:** Omtrent $6.2 \\times 10^{12}$ elektroner må fjernes.`,
      hints: ['Bruk $Q = ne$', 'Elementærladning: $e = 1.602 \\times 10^{-19}$ C'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-1-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'To ladninger på $q_1 = +4.0$ nC og $q_2 = +6.0$ nC er plassert 3.0 cm fra hverandre. Beregn kraften mellom dem.',
      solution: `**Gitt:**
- $q_1 = 4.0 \\times 10^{-9}$ C
- $q_2 = 6.0 \\times 10^{-9}$ C
- $r = 0.030$ m
- $k = 8.99 \\times 10^9$ N·m²/C²

**Søkt:** $F$

**Løsning:**

$$F = k \\frac{|q_1 q_2|}{r^2} = 8.99 \\times 10^9 \\cdot \\frac{4.0 \\times 10^{-9} \\cdot 6.0 \\times 10^{-9}}{(0.030)^2}$$

$$F = 8.99 \\times 10^9 \\cdot \\frac{24 \\times 10^{-18}}{9.0 \\times 10^{-4}}$$

$$F = 8.99 \\times 10^9 \\cdot 2.67 \\times 10^{-14} = 2.4 \\times 10^{-4} \\text{ N}$$

**Retning:** Frastøtende (begge positive).

**Svar:** $F = 2.4 \\times 10^{-4}$ N, frastøtende.`,
      hints: ['Coulombs lov: $F = k\\frac{|q_1 q_2|}{r^2}$', 'Husk å konvertere cm til m'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-1-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'En punktladning på $Q = +5.0$ µC skaper et elektrisk felt. Hva er feltstyrken på 10 cm avstand fra ladningen?',
      solution: `**Gitt:**
- $Q = 5.0 \\times 10^{-6}$ C
- $r = 0.10$ m
- $k = 8.99 \\times 10^9$ N·m²/C²

**Søkt:** $E$

**Løsning:**

$$E = k \\frac{|Q|}{r^2} = 8.99 \\times 10^9 \\cdot \\frac{5.0 \\times 10^{-6}}{(0.10)^2}$$

$$E = 8.99 \\times 10^9 \\cdot \\frac{5.0 \\times 10^{-6}}{0.01}$$

$$E = 8.99 \\times 10^9 \\cdot 5.0 \\times 10^{-4} = 4.5 \\times 10^6 \\text{ N/C}$$

**Svar:** $E = 4.5$ MN/C (eller 4.5 MV/m).`,
      hints: ['Bruk $E = k\\frac{|Q|}{r^2}$', 'Husk å konvertere cm til m'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-1-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Et elektron er i et uniformt elektrisk felt på 2000 N/C. a) Hva er kraften på elektronet? b) Hva er akselerasjonen?',
      solution: `**Gitt:**
- $E = 2000$ N/C
- $q_e = -1.602 \\times 10^{-19}$ C
- $m_e = 9.109 \\times 10^{-31}$ kg

**a) Kraft:**

$$F = |q| E = 1.602 \\times 10^{-19} \\cdot 2000 = 3.2 \\times 10^{-16} \\text{ N}$$

**b) Akselerasjon:**

$$a = \\frac{F}{m} = \\frac{3.2 \\times 10^{-16}}{9.109 \\times 10^{-31}} = 3.5 \\times 10^{14} \\text{ m/s}^2$$

**Svar:**
a) $F = 3.2 \\times 10^{-16}$ N
b) $a = 3.5 \\times 10^{14}$ m/s² (enormt stor!)`,
      hints: ['Bruk $F = qE$', 'Bruk Newtons 2. lov: $F = ma$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-1-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'To parallelle plater har en spenning på 500 V og er 2.0 cm fra hverandre. a) Hva er det elektriske feltet mellom platene? b) Hva er kraften på et proton mellom platene?',
      solution: `**Gitt:**
- $U = 500$ V
- $d = 0.020$ m
- $q_p = 1.602 \\times 10^{-19}$ C

**a) Elektrisk felt:**

$$E = \\frac{U}{d} = \\frac{500}{0.020} = 25000 \\text{ N/C} = 25 \\text{ kN/C}$$

**b) Kraft på proton:**

$$F = q E = 1.602 \\times 10^{-19} \\cdot 25000 = 4.0 \\times 10^{-15} \\text{ N}$$

**Svar:**
a) $E = 25$ kN/C
b) $F = 4.0$ fN`,
      hints: ['For uniformt felt: $E = \\frac{U}{d}$', 'Bruk $F = qE$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-1-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'En ladning på $q = -3.0$ nC befinner seg i et punkt hvor det elektriske potensialet er 400 V. Hva er den potensielle energien til ladningen?',
      solution: `**Gitt:**
- $q = -3.0 \\times 10^{-9}$ C
- $V = 400$ V

**Søkt:** $E_{\\text{pot}}$

**Løsning:**

$$E_{\\text{pot}} = qV = (-3.0 \\times 10^{-9}) \\cdot 400 = -1.2 \\times 10^{-6} \\text{ J}$$

$$E_{\\text{pot}} = -1.2 \\text{ µJ}$$

**Tolkning:** Negativ energi betyr at ladningen er i et lavt energinivå (bundet).

**Svar:** $E_{\\text{pot}} = -1.2$ µJ`,
      hints: ['Bruk $E_{\\text{pot}} = qV$', 'Husk fortegn på ladningen'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-1-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'medium',
      task: 'Tre ladninger er plassert i en linje: $q_1 = +2.0$ µC ved $x = 0$, $q_2 = -4.0$ µC ved $x = 3.0$ cm, og $q_3 = +1.0$ µC ved $x = 6.0$ cm. Beregn netto kraften på $q_2$.',
      solution: `**Gitt:**
- $q_1 = +2.0 \\times 10^{-6}$ C, $x_1 = 0$
- $q_2 = -4.0 \\times 10^{-6}$ C, $x_2 = 0.03$ m
- $q_3 = +1.0 \\times 10^{-6}$ C, $x_3 = 0.06$ m

**Kraft fra $q_1$ på $q_2$:**

$$r_{12} = 0.03 \\text{ m}$$

$$F_{12} = k \\frac{|q_1 q_2|}{r_{12}^2} = 8.99 \\times 10^9 \\cdot \\frac{2.0 \\times 10^{-6} \\cdot 4.0 \\times 10^{-6}}{(0.03)^2}$$

$$F_{12} = 8.99 \\times 10^9 \\cdot \\frac{8.0 \\times 10^{-12}}{9.0 \\times 10^{-4}} = 79.9 \\text{ N}$$

**Retning:** Tiltrekkende, mot venstre (negativ x-retning).

**Kraft fra $q_3$ på $q_2$:**

$$r_{32} = 0.03 \\text{ m}$$

$$F_{32} = k \\frac{|q_3 q_2|}{r_{32}^2} = 8.99 \\times 10^9 \\cdot \\frac{1.0 \\times 10^{-6} \\cdot 4.0 \\times 10^{-6}}{(0.03)^2}$$

$$F_{32} = 8.99 \\times 10^9 \\cdot \\frac{4.0 \\times 10^{-12}}{9.0 \\times 10^{-4}} = 40.0 \\text{ N}$$

**Retning:** Tiltrekkende, mot høyre (positiv x-retning).

**Netto kraft:**

$$F_{\\text{netto}} = -79.9 + 40.0 = -39.9 \\text{ N}$$

**Svar:** $F = 40$ N mot venstre.`,
      hints: ['Beregn kraft fra hver ladning separat', 'Husk retning (tegn)', 'Summer vektorielt'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-1-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Et elektron akselereres fra ro gjennom en spenning på 5000 V. Hva er sluttfarten til elektronet?',
      solution: `**Gitt:**
- $U = 5000$ V
- $m_e = 9.109 \\times 10^{-31}$ kg
- $e = 1.602 \\times 10^{-19}$ C
- $v_0 = 0$

**Søkt:** $v$

**Løsning:**

Energi fra feltet:

$$E = eU = 1.602 \\times 10^{-19} \\cdot 5000 = 8.01 \\times 10^{-16} \\text{ J}$$

Kinetisk energi:

$$E_k = \\frac{1}{2} m v^2$$

Setter lik:

$$\\frac{1}{2} m v^2 = eU$$

$$v = \\sqrt{\\frac{2eU}{m}} = \\sqrt{\\frac{2 \\cdot 1.602 \\times 10^{-19} \\cdot 5000}{9.109 \\times 10^{-31}}}$$

$$v = \\sqrt{\\frac{1.602 \\times 10^{-15}}{9.109 \\times 10^{-31}}} = \\sqrt{1.758 \\times 10^{15}}$$

$$v = 4.19 \\times 10^7 \\text{ m/s} \\approx 42 \\text{ Mm/s}$$

**Svar:** $v \\approx 4.2 \\times 10^7$ m/s (ca. 14% av lysets hastighet!)`,
      hints: ['Energibevarelse: $eU = \\frac{1}{2}mv^2$', 'Løs for $v$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-1-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'To like ladninger på $q$ hver er plassert på en avstand $r$. De frastøter hverandre med en kraft $F$. Hvis avstanden mellom dem økes til $3r$, hva blir den nye kraften?',
      solution: `**Gitt:**
- Opprinnelig avstand: $r$
- Opprinnelig kraft: $F = k\\frac{q^2}{r^2}$
- Ny avstand: $r' = 3r$

**Søkt:** $F'$

**Løsning:**

Ny kraft:

$$F' = k \\frac{q^2}{(3r)^2} = k \\frac{q^2}{9r^2} = \\frac{1}{9} \\cdot k \\frac{q^2}{r^2} = \\frac{F}{9}$$

**Svar:** Den nye kraften blir $\\frac{F}{9}$ (en niendedel av den opprinnelige kraften).`,
      hints: ['Coulombs lov: $F \\propto \\frac{1}{r^2}$', 'Sammenlign gammelt og nytt uttrykk'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-1-ex-10',
      number: '10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Et hydrogenatom består av et proton og et elektron på avstand $r = 5.3 \\times 10^{-11}$ m (Bohrs radius). a) Beregn den elektriske kraften mellom dem. b) sammenlign med gravitasjonskraften. ($G = 6.67 \\times 10^{-11}$ N·m²/kg², $m_p = 1.673 \\times 10^{-27}$ kg, $m_e = 9.109 \\times 10^{-31}$ kg)',
      solution: `**Gitt:**
- $r = 5.3 \\times 10^{-11}$ m
- $e = 1.602 \\times 10^{-19}$ C
- $k = 8.99 \\times 10^9$ N·m²/C²

**a) Elektrisk kraft:**

$$F_e = k \\frac{e^2}{r^2} = 8.99 \\times 10^9 \\cdot \\frac{(1.602 \\times 10^{-19})^2}{(5.3 \\times 10^{-11})^2}$$

$$F_e = 8.99 \\times 10^9 \\cdot \\frac{2.566 \\times 10^{-38}}{2.809 \\times 10^{-21}}$$

$$F_e = 8.2 \\times 10^{-8} \\text{ N}$$

**b) Gravitasjonskraft:**

$$F_g = G \\frac{m_p m_e}{r^2} = 6.67 \\times 10^{-11} \\cdot \\frac{1.673 \\times 10^{-27} \\cdot 9.109 \\times 10^{-31}}{(5.3 \\times 10^{-11})^2}$$

$$F_g = 6.67 \\times 10^{-11} \\cdot \\frac{1.524 \\times 10^{-57}}{2.809 \\times 10^{-21}}$$

$$F_g = 3.6 \\times 10^{-47} \\text{ N}$$

**Sammenligning:**

$$\\frac{F_e}{F_g} = \\frac{8.2 \\times 10^{-8}}{3.6 \\times 10^{-47}} \\approx 2.3 \\times 10^{39}$$

**Svar:**
a) Elektrisk kraft: $F_e = 8.2 \\times 10^{-8}$ N
b) Elektrisk kraft er ca. $10^{39}$ ganger større enn gravitasjonskraften!`,
      hints: ['Bruk Coulombs lov og gravitasjonsloven', 'Del for å finne forholdet'],
      allowsUpload: true,
    },
  ],
};
