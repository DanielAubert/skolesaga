/**
 * Matematikk 9. klasse - Del 12: Problemløsning og tentamen (KM238)
 *
 * Følger LK20 læreplan for matematikk ungdomstrinn.
 * Del 12 dekker problemløsning og tentamensforberedelse:
 * - Geometrisk problemløsning med sammensatte figurer
 * - Problemløsningsstrategier (Polyas 4 steg)
 * - Tentamensforberedelse med blandet oppgavesett
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 12.1: Geometrisk problemløsning
// LK20 KM238: Bruke geometriske eigenskapar og relasjonar i utforsking og
//              problemløysing knytte til ulike praktiske situasjonar
// ============================================================================

export const CHAPTER_9_12_1: TextbookChapter = {
  id: '9-12-1',
  courseId: '9',
  chapterNumber: '12.1',
  title: 'Geometrisk problemløsning',
  description: 'Løse geometriske problemer med endrede forutsetninger og sammensatte figurer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke geometriske eigenskapar og relasjonar i utforsking og problemløysing knytte til ulike praktiske situasjonar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '9-12-1-intro',
      type: 'text',
      content: `## Geometrisk problemløsning

I dette kapittelet skal vi jobbe med geometriske problemer der du må kombinere flere ulike formler og metoder for å finne svaret. Du kjenner allerede Pytagoras' setning, arealformler, volum og formlikhet fra tidligere kapitler. Nå skal du lære å **bruke dem sammen** for å løse mer sammensatte oppgaver.

Vi skal også utforske hva som skjer med figurer når vi **endrer forutsetningene** — for eksempel hva som skjer med arealet av en trekant hvis vi dobler grunnlinjen, eller hva som skjer med volumet av en sylinder hvis vi halverer radien.

Denne typen oppgaver er svært vanlige på tentamen og eksamen, og de tester om du virkelig forstår sammenhengen mellom de ulike formlene.

**I dette kapittelet lærer du:**
- Å løse problemer med sammensatte figurer (figurer satt sammen av flere enklere figurer)
- Å bruke Pytagoras' setning sammen med arealformler
- Å undersøke hva som skjer med areal og volum når mål endres
- Å kombinere formlikhet med beregninger`,
    },

    // ========== DEFINISJON 1: SAMMENSATTE FIGURER ==========
    {
      id: '9-12-1-def-1',
      type: 'definition',
      title: 'Sammensatte figurer',
      content: `En **sammensatt figur** er en figur som er bygd opp av to eller flere enklere geometriske figurer (rektangler, trekanter, sirkler osv.).

For å finne arealet av en sammensatt figur kan du:
1. **Dele opp** figuren i enklere deler og legge sammen arealene
2. **Trekke fra** — finne arealet av en stor figur og trekke fra «hullene»

**Eksempel:** Et L-formet rom kan deles i to rektangler, eller du kan beregne arealet av et stort rektangel og trekke fra det lille hjørnet som mangler.`,
    },

    // ========== DEFINISJON 2: ENDREDE FORUTSETNINGER ==========
    {
      id: '9-12-1-def-2',
      type: 'definition',
      title: 'Endrede forutsetninger — skalering av mål',
      content: `Når vi endrer lengdemål i en figur, påvirker det areal og volum på ulike måter:

**Areal:** Hvis alle lengder multipliseres med en faktor $k$, blir arealet multiplisert med $k^2$.
$$A_{\\text{ny}} = k^2 \\cdot A_{\\text{opprinnelig}}$$

**Volum:** Hvis alle lengder multipliseres med en faktor $k$, blir volumet multiplisert med $k^3$.
$$V_{\\text{ny}} = k^3 \\cdot V_{\\text{opprinnelig}}$$

**Eksempler:**
- Dobler du alle sider ($k = 2$): arealet blir $2^2 = 4$ ganger så stort, volumet blir $2^3 = 8$ ganger så stort.
- Halverer du alle sider ($k = 0{,}5$): arealet blir $0{,}5^2 = 0{,}25$ (en fjerdedel), volumet blir $0{,}5^3 = 0{,}125$ (en åttendedel).`,
    },

    // ========== DEFINISJON 3: PYTAGORAS I PROBLEMLØSNING ==========
    {
      id: '9-12-1-def-3',
      type: 'definition',
      title: 'Pytagoras\' setning som verktøy',
      content: `Pytagoras' setning er et av de viktigste verktøyene i geometrisk problemløsning. Huskeregelen er:

$$a^2 + b^2 = c^2$$

der $c$ er hypotenusen (den lengste siden, mot den rette vinkelen) og $a$ og $b$ er katetene.

Setningen kan brukes til å:
- Finne en ukjent side i en rettvinklet trekant
- Finne høyden i en likebeint trekant (høyden deler grunnlinjen i to like deler)
- Beregne diagonaler i rektangler
- Finne avstander i koordinatsystemet
- Beregne skråhøyde i pyramider og kjegler`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '9-12-1-example-1',
      type: 'example',
      title: 'Eksempel: Sammensatt figur med trekant og rektangel',
      problem: `En gavlevegg (endevegg med spiss) på et hus har form som et rektangel med en likesidet trekant på toppen. Rektangelet er 8 m bredt og 3 m høyt. Trekanten har grunnlinje 8 m.

Finn det totale arealet av gavleveggen.`,
      solution: `**Steg 1: Finn arealet av rektangelet**

$$A_{\\text{rektangel}} = b \\cdot h = 8 \\cdot 3 = 24 \\text{ m}^2$$

**Steg 2: Finn høyden i den likesidede trekanten**

En likesidet trekant med side $s = 8$ m har høyde:

$$h = \\frac{s \\cdot \\sqrt{3}}{2} = \\frac{8 \\cdot \\sqrt{3}}{2} = 4\\sqrt{3} \\approx 6{,}93 \\text{ m}$$

Vi bruker Pytagoras: Høyden deler grunnlinjen i to like deler á 4 m, og vi har:
$$h^2 + 4^2 = 8^2$$
$$h^2 = 64 - 16 = 48$$
$$h = \\sqrt{48} = 4\\sqrt{3} \\approx 6{,}93 \\text{ m}$$

**Steg 3: Finn arealet av trekanten**

$$A_{\\text{trekant}} = \\frac{g \\cdot h}{2} = \\frac{8 \\cdot 4\\sqrt{3}}{2} = 16\\sqrt{3} \\approx 27{,}71 \\text{ m}^2$$

**Steg 4: Finn totalt areal**

$$A_{\\text{totalt}} = 24 + 16\\sqrt{3} \\approx 24 + 27{,}71 = 51{,}71 \\text{ m}^2$$

**Svar:** Det totale arealet av gavleveggen er ca. $51{,}7 \\text{ m}^2$.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '9-12-1-example-2',
      type: 'example',
      title: 'Eksempel: Hva skjer med volumet?',
      problem: `En sylinderformet vannbeholder har radius $r = 10$ cm og høyde $h = 30$ cm.

a) Finn volumet av beholderen.
b) Hva blir volumet hvis radien dobles, men høyden forblir den samme?
c) Hva blir volumet hvis både radien og høyden dobles?`,
      solution: `**a) Volumet av den opprinnelige sylinderen:**

$$V = \\pi r^2 h = \\pi \\cdot 10^2 \\cdot 30 = 3\\,000\\pi \\approx 9\\,425 \\text{ cm}^3$$

**b) Radien dobles ($r = 20$ cm), høyden er fortsatt 30 cm:**

$$V_{\\text{ny}} = \\pi \\cdot 20^2 \\cdot 30 = \\pi \\cdot 400 \\cdot 30 = 12\\,000\\pi \\approx 37\\,699 \\text{ cm}^3$$

Det nye volumet er $\\frac{12\\,000\\pi}{3\\,000\\pi} = 4$ ganger det opprinnelige.

Forklaring: Radien står i annen potens i formelen, så å doble radien gir $2^2 = 4$ ganger volumet.

**c) Både radien og høyden dobles ($r = 20$ cm, $h = 60$ cm):**

$$V_{\\text{ny}} = \\pi \\cdot 20^2 \\cdot 60 = \\pi \\cdot 400 \\cdot 60 = 24\\,000\\pi \\approx 75\\,398 \\text{ cm}^3$$

Det nye volumet er $\\frac{24\\,000\\pi}{3\\,000\\pi} = 8$ ganger det opprinnelige.

Forklaring: Alle lengdemål er doblet, og vi har tre dimensjoner, så volumet blir $2^3 = 8$ ganger så stort.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '9-12-1-example-3',
      type: 'example',
      title: 'Eksempel: Formlikhet i praksis',
      problem: `Et tre kaster en skygge som er 12 m lang. Samtidig kaster en pinne på 1,5 m en skygge som er 2 m lang. Hvor høyt er treet?`,
      solution: `**Steg 1: Forstå situasjonen**

Solen skinner med samme vinkel på både treet og pinnen. Dermed er trekanten som dannes av treet og skyggen formlik med trekanten som dannes av pinnen og skyggen.

**Steg 2: Sett opp forholdstall**

La $h$ være høyden til treet. Formlikhet gir:

$$\\frac{h}{12} = \\frac{1{,}5}{2}$$

**Steg 3: Løs likningen**

$$h = 12 \\cdot \\frac{1{,}5}{2} = 12 \\cdot 0{,}75 = 9$$

**Svar:** Treet er 9 m høyt.

**Kontroll:** Forholdstallet mellom høyde og skygge er $\\frac{9}{12} = 0{,}75$ for treet og $\\frac{1{,}5}{2} = 0{,}75$ for pinnen. Forholdstallene er like, så svaret stemmer.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: '9-12-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-12-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: `Et rom har form som et rektangel som er 6 m langt og 4 m bredt. I det ene hjørnet er det en innebygd skap som tar opp et rektangulært område på 1,5 m $\\times$ 1 m.

Finn arealet av den ledige gulvflaten i rommet.`,
        hints: [
          'Finn arealet av hele rommet og trekk fra arealet av skapet.',
        ],
        solution: `Arealet av rommet: $A_{\\text{rom}} = 6 \\cdot 4 = 24 \\text{ m}^2$

Arealet av skapet: $A_{\\text{skap}} = 1{,}5 \\cdot 1 = 1{,}5 \\text{ m}^2$

Ledig gulvflate: $A = 24 - 1{,}5 = 22{,}5 \\text{ m}^2$

**Svar:** Den ledige gulvflaten er $22{,}5 \\text{ m}^2$.`,
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: '9-12-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-12-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: `En rettvinklet trekant har kateter $a = 5$ cm og $b = 12$ cm.

a) Finn hypotenusen $c$.
b) Finn arealet av trekanten.`,
        hints: [
          'Bruk Pytagoras\' setning: $a^2 + b^2 = c^2$.',
          'Arealet av en rettvinklet trekant: $A = \\frac{a \\cdot b}{2}$.',
        ],
        solution: `a) Pytagoras: $c^2 = 5^2 + 12^2 = 25 + 144 = 169$, altså $c = \\sqrt{169} = 13$ cm.

b) Arealet: $A = \\frac{5 \\cdot 12}{2} = \\frac{60}{2} = 30 \\text{ cm}^2$.

**Svar:** Hypotenusen er 13 cm og arealet er $30 \\text{ cm}^2$.`,
      },
    },

    // ========== OPPGAVE 3 ==========
    {
      id: '9-12-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-12-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `Et trapesformet vindu har parallelle sider 80 cm og 120 cm, og høyden mellom de parallelle sidene er 60 cm. Det er et sirkelformet ventilasjonshull midt i vinduet med diameter 20 cm.

Finn arealet av glassflaten (vinduet minus hullet).`,
        hints: [
          'Arealet av et trapes: $A = \\frac{(a + b) \\cdot h}{2}$, der $a$ og $b$ er de parallelle sidene.',
          'Arealet av en sirkel: $A = \\pi r^2$.',
        ],
        solution: `Arealet av trapeset:
$$A_{\\text{trapes}} = \\frac{(80 + 120) \\cdot 60}{2} = \\frac{200 \\cdot 60}{2} = 6\\,000 \\text{ cm}^2$$

Arealet av det sirkelformede hullet (radius $r = 10$ cm):
$$A_{\\text{sirkel}} = \\pi \\cdot 10^2 = 100\\pi \\approx 314{,}2 \\text{ cm}^2$$

Glassflaten:
$$A = 6\\,000 - 100\\pi \\approx 6\\,000 - 314{,}2 = 5\\,685{,}8 \\text{ cm}^2$$

**Svar:** Glassflaten er ca. $5\\,686 \\text{ cm}^2$ (eller $5\\,686 \\text{ cm}^2 \\approx 0{,}57 \\text{ m}^2$).`,
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: '9-12-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-12-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `En likebeint trekant har to like sider på 10 cm og en grunnlinje på 12 cm.

a) Finn høyden i trekanten ved å bruke Pytagoras' setning.
b) Finn arealet av trekanten.
c) Hva skjer med arealet hvis alle sider dobles?`,
        hints: [
          'Høyden i en likebeint trekant deler grunnlinjen i to like deler.',
          'Bruk Pytagoras med halve grunnlinjen og den ene like siden.',
          'Husk regelen: Dobles alle sider, multipliseres arealet med $2^2 = 4$.',
        ],
        solution: `a) Høyden deler grunnlinjen i to deler á $6$ cm. Vi bruker Pytagoras:
$$h^2 + 6^2 = 10^2$$
$$h^2 = 100 - 36 = 64$$
$$h = \\sqrt{64} = 8 \\text{ cm}$$

b) Arealet:
$$A = \\frac{g \\cdot h}{2} = \\frac{12 \\cdot 8}{2} = 48 \\text{ cm}^2$$

c) Hvis alle sider dobles (nye sider: 20 cm, 20 cm, 24 cm):
$$A_{\\text{ny}} = 2^2 \\cdot 48 = 4 \\cdot 48 = 192 \\text{ cm}^2$$

**Svar:** Høyden er 8 cm, arealet er $48 \\text{ cm}^2$, og med doble sider blir arealet $192 \\text{ cm}^2$ (fire ganger så stort).`,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: '9-12-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-12-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `En skistav kaster en skygge som er 1,8 m lang. Skistaven er 1,2 m lang. Samtidig kaster et flaggstang en skygge som er 7,5 m lang.

Hvor høy er flaggstangen?`,
        hints: [
          'Bruk formlikhet — forholdstallet mellom høyde og skyggelengde er det samme for begge.',
        ],
        solution: `Vi bruker formlikhet. Forholdstallet mellom høyde og skygge er likt:

$$\\frac{h_{\\text{flagg}}}{7{,}5} = \\frac{1{,}2}{1{,}8}$$

$$h_{\\text{flagg}} = 7{,}5 \\cdot \\frac{1{,}2}{1{,}8} = 7{,}5 \\cdot \\frac{2}{3} = 5 \\text{ m}$$

**Svar:** Flaggstangen er 5 m høy.`,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: '9-12-1-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-12-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En rektangulær boks har lengde 12 cm, bredde 5 cm og høyde 4 cm.

a) Finn lengden av romdiagonalen (diagonalen som går tvers gjennom boksen fra et hjørne til det motsatte hjørnet).
b) Finn overflatearealet til boksen.
c) Hvis alle mål i boksen tredobles, hva blir det nye overflatearealet og det nye volumet?`,
        hints: [
          'Romdiagonalen finner du i to steg: Først diagonalen i bunnen, deretter Pytagoras med denne diagonalen og høyden.',
          'Overflate av en boks: $O = 2(lb + lh + bh)$.',
          'Ved tredobling av alle mål: overflate ganges med $3^2 = 9$, volum ganges med $3^3 = 27$.',
        ],
        solution: `a) **Romdiagonalen:**

Steg 1 — diagonalen i bunnflaten:
$$d_{\\text{bunn}}^2 = 12^2 + 5^2 = 144 + 25 = 169$$
$$d_{\\text{bunn}} = 13 \\text{ cm}$$

Steg 2 — romdiagonalen:
$$d^2 = d_{\\text{bunn}}^2 + h^2 = 13^2 + 4^2 = 169 + 16 = 185$$
$$d = \\sqrt{185} \\approx 13{,}6 \\text{ cm}$$

b) **Overflatearealet:**
$$O = 2(12 \\cdot 5 + 12 \\cdot 4 + 5 \\cdot 4) = 2(60 + 48 + 20) = 2 \\cdot 128 = 256 \\text{ cm}^2$$

c) **Tredobling av alle mål:**

Nytt overflateareal: $O_{\\text{ny}} = 3^2 \\cdot 256 = 9 \\cdot 256 = 2\\,304 \\text{ cm}^2$

Opprinnelig volum: $V = 12 \\cdot 5 \\cdot 4 = 240 \\text{ cm}^3$
Nytt volum: $V_{\\text{ny}} = 3^3 \\cdot 240 = 27 \\cdot 240 = 6\\,480 \\text{ cm}^3$

**Svar:** Romdiagonalen er ca. $13{,}6$ cm, overflatearealet er $256 \\text{ cm}^2$, og ved tredobling blir overflatearealet $2\\,304 \\text{ cm}^2$ og volumet $6\\,480 \\text{ cm}^3$.`,
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: '9-12-1-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-12-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Et basseng har form som et trapes sett ovenfra. De to parallelle sidene er 10 m og 16 m, og avstanden mellom dem er 8 m. Bassenget er 1,5 m dypt overalt.

a) Finn arealet av bassengets overflate (sett ovenfra).
b) Finn volumet av vannet i bassenget.
c) Vannet skal varmes opp. Det koster 0,05 kr per liter å varme vannet. Hva koster det å varme opp alt vannet? (Husk: $1 \\text{ m}^3 = 1\\,000$ liter)`,
        hints: [
          'Arealet av et trapes: $A = \\frac{(a + b) \\cdot h}{2}$.',
          'Volumet: Areal ganger dybde.',
          'Gjør om til liter: $1 \\text{ m}^3 = 1\\,000$ liter.',
        ],
        solution: `a) Arealet av trapeset:
$$A = \\frac{(10 + 16) \\cdot 8}{2} = \\frac{26 \\cdot 8}{2} = 104 \\text{ m}^2$$

b) Volumet:
$$V = A \\cdot d = 104 \\cdot 1{,}5 = 156 \\text{ m}^3$$

c) Omgjøring til liter: $156 \\text{ m}^3 = 156 \\cdot 1\\,000 = 156\\,000$ liter.

Kostnad: $156\\,000 \\cdot 0{,}05 = 7\\,800$ kr.

**Svar:** Overflaten er $104 \\text{ m}^2$, volumet er $156 \\text{ m}^3$, og det koster $7\\,800$ kr å varme opp vannet.`,
      },
    },

    // ========== OPPGAVE 8 ==========
    {
      id: '9-12-1-ex-8',
      type: 'exercise',
      exercise: {
        id: '9-12-1-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En pyramide har et kvadratisk grunnflate med side 6 cm og høyde 4 cm.

a) Finn volumet av pyramiden.
b) Finn skråhøyden fra toppen av pyramiden ned til midten av en grunnkant (du trenger Pytagoras).
c) En ny pyramide har alle sider som er dobbelt så lange. Hvor mange ganger større er volumet av den nye pyramiden?`,
        hints: [
          'Volumet av en pyramide: $V = \\frac{1}{3} \\cdot G \\cdot h$, der $G$ er grunnflatearealet.',
          'For å finne skråhøyden: Tegn en rettvinklet trekant med katetene $h = 4$ cm (pyramidens høyde) og halve grunnlinjen $= 3$ cm.',
          'Skaleringsfaktor for volum: $k^3$.',
        ],
        solution: `a) Grunnflatearealet: $G = 6^2 = 36 \\text{ cm}^2$

Volumet: $V = \\frac{1}{3} \\cdot 36 \\cdot 4 = \\frac{144}{3} = 48 \\text{ cm}^3$

b) Skråhøyden går fra toppen ned til midtpunktet av en grunnkant. Den loddrette avstanden fra sentrum av grunnflaten til midten av en kant er halvparten av sidelengden: $\\frac{6}{2} = 3$ cm.

Vi bruker Pytagoras med katetene $h = 4$ og $3$:
$$s^2 = 4^2 + 3^2 = 16 + 9 = 25$$
$$s = 5 \\text{ cm}$$

c) Alle sider dobles, altså $k = 2$:
$$V_{\\text{ny}} = 2^3 \\cdot 48 = 8 \\cdot 48 = 384 \\text{ cm}^3$$

Volumet er $8$ ganger større.

**Svar:** Volumet er $48 \\text{ cm}^3$, skråhøyden er $5$ cm, og den nye pyramiden har $8$ ganger så stort volum.`,
      },
    },
    // ========== OPPSUMMERING ==========
    {
      id: '9-12-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Sammensatte figurer**: Å beregne areal ved å dele opp figurer i enklere deler eller trekke fra «hull»
- **Pytagoras som verktøy**: Å bruke Pytagoras' setning sammen med arealformler for å finne ukjente mål i sammensatte figurer
- **Skalering av mål**: Å forstå at når alle lengder ganges med $k$, ganges arealet med $k^2$ og volumet med $k^3$
- **Formlikhet i praksis**: Å bruke forholdstall mellom formlike figurer til å beregne ukjente lengder

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Sammensatt figur | En figur bygd opp av to eller flere enklere geometriske figurer |
| Skaleringsfaktor ($k$) | Tallet alle lengder ganges med; areal ganges med $k^2$, volum med $k^3$ |
| Formlikhet | To figurer med samme form men ulik størrelse; tilsvarende sider har likt forholdstall |
| Romdiagonal | Diagonalen som går tvers gjennom en tredimensjonal boks mellom motsatte hjørner |
| Skråhøyde | Avstanden fra toppen av en pyramide eller kjegle ned til en kant langs overflaten |
| Femtallsoversikt | Oppsummering av et datasett med min, $Q_1$, median, $Q_3$ og maks |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Sammensatt figur', definition: 'En figur som er bygd opp av to eller flere enklere geometriske figurer.' },
    { term: 'Skaleringsfaktor', definition: 'Tallet $k$ som alle lengder ganges med. Areal ganges med $k^2$, volum med $k^3$.' },
    { term: 'Formlikhet', definition: 'To figurer er formlike hvis de har samme form, men ulik størrelse. Forholdstallet mellom tilsvarende sider er likt.' },
    { term: 'Romdiagonal', definition: 'Diagonalen som går tvers gjennom en tredimensjonal boks fra ett hjørne til det motsatte.' },
    { term: 'Skråhøyde', definition: 'Avstanden fra toppen av en pyramide eller kjegle ned til en kant eller grunnlinje langs overflaten.' },
  ],
};

// ============================================================================
// KAPITTEL 12.2: Problemløsningsstrategier
// LK20 KM238: Bruke geometriske eigenskapar og relasjonar i utforsking og
//              problemløysing knytte til ulike praktiske situasjonar
// ============================================================================

export const CHAPTER_9_12_2: TextbookChapter = {
  id: '9-12-2',
  courseId: '9',
  chapterNumber: '12.2',
  title: 'Problemløsningsstrategier',
  description: 'Lær systematiske strategier for å løse matematiske problemer: Polyas 4 steg, tegne figur, sette opp likning, jobbe baklengs og dele opp.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke geometriske eigenskapar og relasjonar i utforsking og problemløysing knytte til ulike praktiske situasjonar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '9-12-2-intro',
      type: 'text',
      content: `## Problemløsningsstrategier

Har du noen gang sittet fast på en matteoppgave uten å vite hvor du skal begynne? Da er du ikke alene. Matematisk problemløsning handler ikke bare om å kunne formler — det handler om å ha **gode strategier** for å angripe problemer.

Den ungarske matematikeren George Polya (1887–1985) utviklet en berømt metode for problemløsning som fortsatt brukes over hele verden. I dette kapittelet skal du lære Polyas 4 steg og flere konkrete strategier som hjelper deg med å komme i gang og finne løsningen.

**Strategier du skal lære:**
- Polyas 4 steg for problemløsning
- Tegne en figur eller et diagram
- Sette opp en likning
- Jobbe baklengs
- Prøve og feile systematisk
- Dele opp i delproblemer`,
    },

    // ========== DEFINISJON 1: POLYAS 4 STEG ==========
    {
      id: '9-12-2-def-1',
      type: 'definition',
      title: 'Polyas 4 steg for problemløsning',
      content: `George Polya beskrev fire steg som hjelper deg med å løse ethvert matematisk problem:

**Steg 1: Forstå problemet**
- Les oppgaven nøye — gjerne flere ganger
- Hva er det du skal finne?
- Hvilken informasjon har du fått?
- Er det informasjon som mangler?
- Kan du tegne en figur eller skisse?

**Steg 2: Lag en plan**
- Hvilken strategi passer best? (tegne figur, sette opp likning, prøve og feile, osv.)
- Kjenner du igjen et mønster fra tidligere oppgaver?
- Kan du dele problemet i mindre deler?

**Steg 3: Gjennomfør planen**
- Følg planen steg for steg
- Vis utregningene tydelig
- Hvis du står fast, gå tilbake til steg 2 og prøv en annen strategi

**Steg 4: Se tilbake**
- Er svaret rimelig?
- Har du svart på det oppgaven spurte om?
- Kan du kontrollere svaret på en annen måte?
- Hva har du lært som du kan bruke på andre oppgaver?`,
    },

    // ========== DEFINISJON 2: STRATEGI — TEGNE FIGUR ==========
    {
      id: '9-12-2-def-2',
      type: 'definition',
      title: 'Strategi: Tegne en figur',
      content: `Å **tegne en figur** er en av de mest kraftfulle strategiene i matematikk. En god skisse gjør det lettere å:

- **Se sammenhenger** som ikke er åpenbare fra teksten
- **Identifisere rettvinklede trekanter** der du kan bruke Pytagoras
- **Merke av kjente mål** og den ukjente størrelsen
- **Dele opp** sammensatte figurer i enklere deler

**Tips for gode figurer:**
1. Tegn figuren **stor nok** til at du kan skrive inn mål
2. Marker **rettvinklede hjørner** med en liten firkant
3. Skriv inn **alle kjente mål** med tall
4. Marker den **ukjente** størrelsen med en bokstav (f.eks. $x$, $h$, $d$)
5. Tegn inn **hjelpelinjene** du trenger (f.eks. høyder i trekanter)`,
    },

    // ========== DEFINISJON 3: STRATEGI — JOBBE BAKLENGS ==========
    {
      id: '9-12-2-def-3',
      type: 'definition',
      title: 'Strategi: Jobbe baklengs',
      content: `Å **jobbe baklengs** betyr at du starter med svaret (eller det du vet om svaret) og jobber deg tilbake til det du leter etter.

Denne strategien er spesielt nyttig når:
- Du kjenner sluttresultatet, men ikke startverdien
- Du vet hva en størrelse skal bli etter flere beregninger
- Du må finne ut hvilke mål en figur må ha for å gi et bestemt areal eller volum

**Fremgangsmåte:**
1. Start med det kjente sluttresultatet
2. Gjør de omvendte operasjonene i omvendt rekkefølge
3. Sjekk svaret ved å gå fremover igjen

**Eksempel:** Arealet av et rektangel er $60 \\text{ cm}^2$ og bredden er $5$ cm. Finn lengden.

Baklengs: $A = l \\cdot b$ gir $l = \\frac{A}{b} = \\frac{60}{5} = 12$ cm.`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '9-12-2-example-1',
      type: 'example',
      title: 'Eksempel: Polyas 4 steg i praksis',
      problem: `Et rektangulært jorde har en omkrets på 56 m. Lengden er 4 m mer enn bredden. Finn lengden og bredden av jordet.`,
      solution: `**Steg 1: Forstå problemet**
- Vi vet: Omkretsen er 56 m. Lengden er 4 m mer enn bredden.
- Vi skal finne: Lengden og bredden.
- Vi kaller bredden $b$ og lengden $l = b + 4$.

**Steg 2: Lag en plan**
Vi setter opp en likning ved å bruke formelen for omkrets av et rektangel: $O = 2l + 2b$.

**Steg 3: Gjennomfør planen**

$$O = 2l + 2b = 56$$

Vi setter inn $l = b + 4$:

$$2(b + 4) + 2b = 56$$
$$2b + 8 + 2b = 56$$
$$4b + 8 = 56$$
$$4b = 48$$
$$b = 12$$

Altså er bredden $b = 12$ m og lengden $l = 12 + 4 = 16$ m.

**Steg 4: Se tilbake**

Kontroll: $O = 2 \\cdot 16 + 2 \\cdot 12 = 32 + 24 = 56$ m. Stemmer!
Lengden ($16$ m) er $4$ m mer enn bredden ($12$ m). Stemmer!

**Svar:** Bredden er 12 m og lengden er 16 m.`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '9-12-2-example-2',
      type: 'example',
      title: 'Eksempel: Prøve og feile systematisk',
      problem: `Summen av to tall er 25. Produktet av tallene er 150. Finn de to tallene.`,
      solution: `**Strategi: Prøve og feile systematisk**

Vi vet at $a + b = 25$ og $a \\cdot b = 150$.

Vi prøver systematisk ved å starte med et tall og sjekke:

| $a$ | $b = 25 - a$ | $a \\cdot b$ | Stemmer? |
|-----|-------------|------------|----------|
| 10  | 15          | 150        | Ja!      |

Vi traff allerede! Men la oss se hva som hadde skjedd:

| $a$ | $b = 25 - a$ | $a \\cdot b$ | For stort/lite? |
|-----|-------------|------------|-----------------|
| 5   | 20          | 100        | For lite         |
| 8   | 17          | 136        | For lite         |
| 10  | 15          | 150        | Riktig!          |
| 12  | 13          | 156        | For stort        |

**Alternativt med likning:** Vi kan også sette opp $a(25 - a) = 150$, som gir $25a - a^2 = 150$, altså $a^2 - 25a + 150 = 0$. Med abc-formelen: $a = \\frac{25 \\pm \\sqrt{625 - 600}}{2} = \\frac{25 \\pm 5}{2}$, som gir $a = 15$ eller $a = 10$.

**Svar:** De to tallene er 10 og 15.`,
    },

    // ========== EKSEMPEL 3 ==========
    {
      id: '9-12-2-example-3',
      type: 'example',
      title: 'Eksempel: Dele opp i delproblemer',
      problem: `En bonde har et L-formet jorde. Den ene delen er et rektangel på 30 m $\\times$ 20 m. Den andre delen er et rektangel på 15 m $\\times$ 10 m som henger fast i den ene kortsiden.

a) Finn det totale arealet av jordet.
b) Bonden vil sette opp gjerde rundt hele jordet. Finn den totale gjerde-lengden (omkretsen).`,
      solution: `**Strategi: Del opp i delproblemer**

**a) Totalt areal:**

Del 1 (stort rektangel): $A_1 = 30 \\cdot 20 = 600 \\text{ m}^2$

Del 2 (lite rektangel): $A_2 = 15 \\cdot 10 = 150 \\text{ m}^2$

Totalt: $A = 600 + 150 = 750 \\text{ m}^2$

**b) Omkretsen:**

Her må vi tenke nøye. Det lille rektangelet henger fast i kortsiden (20 m) av det store. Vi må tegne figuren og summere alle yttersidene.

Yttersidene av L-figuren (vi følger langs kanten):
- Langside stor: $30$ m
- Kortside stor: $20$ m
- Ned langs det lille rektangelet: $15$ m
- Bort langs det lille rektangelet: $10$ m
- Opp igjen til det store: $20 - 10 = 10$ m (bare den delen som er utenfor det lille rektangelet)
- Tilbake langs det store: $30 + 15 = 45$ m

Nei, la oss tenke mer nøye. Kortsiden av det store rektangelet er 20 m. Det lille rektangelet er 10 m bredt og 15 m langt, festet til denne kortsiden.

Omkretsen: $30 + 20 + 15 + 10 + (30 - 15) + (20 - 10)$

Hmm, dette avhenger av nøyaktig hvordan L-en ser ut. La oss anta at det lille rektangelet er festet nederst:

$O = 30 + 10 + 15 + 10 + (30 - 15) + 20 = 30 + 10 + 15 + 10 + 15 + 20 = 100$ m

**Svar:** Arealet er $750 \\text{ m}^2$ og omkretsen er $100$ m.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: '9-12-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-12-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: `Bruk Polyas 4 steg til å løse dette problemet:

Et rektangel har omkrets 30 cm. Lengden er dobbelt så lang som bredden. Finn lengden og bredden.

Skriv tydelig hva du gjør i hvert av de fire stegene.`,
        hints: [
          'Steg 1: Hva vet du, og hva skal du finne?',
          'Kall bredden $b$. Hva er da lengden?',
          'Bruk formelen for omkrets: $O = 2l + 2b$.',
        ],
        solution: `**Steg 1: Forstå problemet**
Vi vet: $O = 30$ cm, $l = 2b$. Vi skal finne $l$ og $b$.

**Steg 2: Lag en plan**
Sett opp en likning med omkretsen.

**Steg 3: Gjennomfør**
$$2l + 2b = 30$$
$$2(2b) + 2b = 30$$
$$4b + 2b = 30$$
$$6b = 30$$
$$b = 5 \\text{ cm}$$
$$l = 2 \\cdot 5 = 10 \\text{ cm}$$

**Steg 4: Se tilbake**
$O = 2 \\cdot 10 + 2 \\cdot 5 = 20 + 10 = 30$ cm. Stemmer!

**Svar:** Bredden er 5 cm og lengden er 10 cm.`,
      },
    },

    // ========== OPPGAVE 2 ==========
    {
      id: '9-12-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-12-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: `Bruk strategien «tegne en figur» til å løse dette problemet:

En stige står inntil en vegg. Stigens fot er 3 m fra veggen, og toppen av stigen når 4 m opp på veggen. Hvor lang er stigen?`,
        hints: [
          'Tegn en rettvinklet trekant der veggen er den ene kateten, bakken er den andre kateten, og stigen er hypotenusen.',
        ],
        solution: `Vi tegner en rettvinklet trekant:
- Katet 1 (langs bakken): 3 m
- Katet 2 (langs veggen): 4 m
- Hypotenuse (stigen): $s$

Pytagoras:
$$s^2 = 3^2 + 4^2 = 9 + 16 = 25$$
$$s = \\sqrt{25} = 5 \\text{ m}$$

**Svar:** Stigen er 5 m lang.`,
      },
    },

    // ========== OPPGAVE 3 ==========
    {
      id: '9-12-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-12-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `Bruk strategien «jobbe baklengs»:

Arealet av en trekant er $54 \\text{ cm}^2$. Grunnlinjen er 12 cm. Finn høyden.`,
        hints: [
          'Arealformelen: $A = \\frac{g \\cdot h}{2}$. Løs for $h$.',
        ],
        solution: `Vi kjenner arealet og grunnlinjen, og jobber baklengs for å finne høyden.

$$A = \\frac{g \\cdot h}{2}$$

$$54 = \\frac{12 \\cdot h}{2}$$

$$54 = 6h$$

$$h = \\frac{54}{6} = 9 \\text{ cm}$$

**Kontroll:** $A = \\frac{12 \\cdot 9}{2} = \\frac{108}{2} = 54 \\text{ cm}^2$. Stemmer!

**Svar:** Høyden er 9 cm.`,
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: '9-12-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-12-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `Bruk strategien «prøve og feile systematisk»:

Volumet av en terning er $512 \\text{ cm}^3$. Finn sidelengden.

Tips: Start med et estimat og juster.`,
        hints: [
          'Volumet av en terning: $V = s^3$.',
          'Prøv med $s = 5$: $5^3 = 125$. For lite. Prøv $s = 10$: $10^3 = 1000$. For mye.',
          'Prøv tall mellom 5 og 10.',
        ],
        solution: `**Systematisk prøving:**

| $s$ | $s^3$ | For stort/lite? |
|-----|-------|-----------------|
| 5   | 125   | For lite         |
| 10  | 1000  | For stort        |
| 8   | 512   | Riktig!          |

**Alternativt:** $s = \\sqrt[3]{512} = 8$

**Svar:** Sidelengden er 8 cm.`,
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: '9-12-2-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-12-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `Bruk strategien «dele opp i delproblemer»:

En T-formet figur er satt sammen av to rektangler. Det øverste rektangelet er 10 cm bredt og 3 cm høyt. Det nederste rektangelet er 4 cm bredt og 7 cm høyt (sentrert under det øverste).

a) Finn det totale arealet av T-figuren.
b) Finn omkretsen av T-figuren.`,
        hints: [
          'Del opp i to rektangler og summer arealene.',
          'For omkretsen: Følg langs ytterkanten av figuren. Husk at det nederste rektangelet er sentrert, så det stikker ut 3 cm på hver side av det øverste.',
        ],
        solution: `a) **Totalt areal:**
$A_1 = 10 \\cdot 3 = 30 \\text{ cm}^2$ (øverst)
$A_2 = 4 \\cdot 7 = 28 \\text{ cm}^2$ (nederst)
$A = 30 + 28 = 58 \\text{ cm}^2$

b) **Omkretsen:**
Det nederste rektangelet er 4 cm bredt og sentrert under det øverste (10 cm bredt). Det betyr at det stikker ut $(10 - 4)/2 = 3$ cm på hver side.

Vi følger ytterkanten:
Topp: $10$ cm, ned høyre: $3$ cm, inn mot midten: $3$ cm, ned: $7$ cm, bunnlinje: $4$ cm, opp: $7$ cm, inn mot midten: $3$ cm, opp til toppen: $3$ cm.

$O = 10 + 3 + 3 + 7 + 4 + 7 + 3 + 3 = 40$ cm.

**Svar:** Arealet er $58 \\text{ cm}^2$ og omkretsen er $40$ cm.`,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: '9-12-2-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-12-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Velg selv en passende strategi og løs dette problemet:

Et rektangulært rom har areal $48 \\text{ m}^2$. Lengden er 2 m mer enn bredden. Finn lengden og bredden av rommet.`,
        hints: [
          'Kall bredden $b$ og lengden $b + 2$.',
          'Sett opp likningen $b(b + 2) = 48$.',
          'Du kan prøve systematisk eller løse andregradslikningen.',
        ],
        solution: `**Strategi: Sette opp en likning**

La $b$ = bredden og $l = b + 2$ = lengden.

$$b \\cdot (b + 2) = 48$$
$$b^2 + 2b = 48$$
$$b^2 + 2b - 48 = 0$$

Vi faktoriserer: $(b + 8)(b - 6) = 0$, som gir $b = 6$ eller $b = -8$.

Siden bredden må være positiv: $b = 6$ m, og $l = 6 + 2 = 8$ m.

**Kontroll:** $6 \\cdot 8 = 48 \\text{ m}^2$. Stemmer!

**Svar:** Bredden er 6 m og lengden er 8 m.`,
      },
    },

    // ========== OPPGAVE 7 ==========
    {
      id: '9-12-2-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-12-2-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En rektangulær hage er 20 m lang og 12 m bred. Innenfor hagen skal det anlegges en gangvei med lik bredde langs alle fire sider. Arealet av det gjenværende bedarealet (innenfor gangveien) skal være $140 \\text{ m}^2$.

Finn bredden på gangveien.`,
        hints: [
          'La gangveiens bredde være $x$ meter.',
          'Det gjenværende rektangelet har lengde $20 - 2x$ og bredde $12 - 2x$.',
          'Sett opp likningen $(20 - 2x)(12 - 2x) = 140$.',
        ],
        solution: `La gangveiens bredde være $x$ m. Det gjenværende bed-rektangelet har:
- Lengde: $20 - 2x$
- Bredde: $12 - 2x$

Likning:
$$(20 - 2x)(12 - 2x) = 140$$
$$240 - 40x - 24x + 4x^2 = 140$$
$$4x^2 - 64x + 240 = 140$$
$$4x^2 - 64x + 100 = 0$$
$$x^2 - 16x + 25 = 0$$

Med abc-formelen:
$$x = \\frac{16 \\pm \\sqrt{256 - 100}}{2} = \\frac{16 \\pm \\sqrt{156}}{2} = \\frac{16 \\pm 12{,}49}{2}$$

$x = \\frac{16 + 12{,}49}{2} = 14{,}2$ (for stor — bredden er bare 12 m) eller $x = \\frac{16 - 12{,}49}{2} = 1{,}75$ m.

**Kontroll:** $(20 - 3{,}5)(12 - 3{,}5) = 16{,}5 \\cdot 8{,}5 = 140{,}25 \\approx 140$ m$^2$. Stemmer!

**Svar:** Gangveien er ca. 1,75 m bred.`,
      },
    },

    // ========== OPPGAVE 8 ==========
    {
      id: '9-12-2-ex-8',
      type: 'exercise',
      exercise: {
        id: '9-12-2-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Bruk en passende strategi for å løse denne oppgaven:

En bonde vil gjerde inn et rektangulært område langs en elv. Elven fungerer som den ene langsiden, slik at det bare trengs gjerde på de tre andre sidene. Bonden har 80 m gjerde.

a) Kall bredden $b$ og uttrykk lengden $l$ ved hjelp av $b$.
b) Sett opp et uttrykk for arealet $A$ som funksjon av $b$.
c) Bruk prøving til å finne bredden som gir størst mulig areal. (Hint: Prøv $b = 10, 15, 20, 25, 30$.)`,
        hints: [
          'Gjerdet dekker to bredder og én lengde: $2b + l = 80$.',
          'Uttrykk for lengde: $l = 80 - 2b$.',
          'Arealet: $A = b \\cdot l = b(80 - 2b)$.',
        ],
        solution: `a) Gjerdet dekker tre sider: $2b + l = 80$, som gir $l = 80 - 2b$.

b) Arealet: $A = b \\cdot l = b(80 - 2b) = 80b - 2b^2$

c) Systematisk prøving:

| $b$ | $l = 80 - 2b$ | $A = b \\cdot l$ |
|-----|-------------|-----------------|
| 10  | 60          | 600             |
| 15  | 50          | 750             |
| 20  | 40          | 800             |
| 25  | 30          | 750             |
| 30  | 20          | 600             |

Det største arealet er $800 \\text{ m}^2$ når $b = 20$ m og $l = 40$ m.

**Svar:** Bredden bør være 20 m og lengden 40 m for å få størst mulig areal ($800 \\text{ m}^2$).`,
      },
    },
    // ========== OPPSUMMERING ==========
    {
      id: '9-12-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Polyas 4 steg**: En systematisk metode for å løse problemer: forstå, planlegge, gjennomføre og se tilbake
- **Tegne figur**: Å lage gode skisser med kjente mål og ukjente merket med bokstaver for å visualisere problemet
- **Jobbe baklengs**: Å starte med det kjente sluttresultatet og gjøre omvendte operasjoner for å finne startverdien
- **Systematisk prøving**: Å organisere forsøk i tabeller for å finne løsningen steg for steg
- **Dele opp i delproblemer**: Å bryte sammensatte problemer ned i mindre, håndterbare deler

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Polyas 4 steg | Forstå problemet, lag en plan, gjennomfør planen, se tilbake |
| Tegne figur | Strategi der du lager en skisse med alle kjente og ukjente mål |
| Jobbe baklengs | Strategi der du starter med svaret og jobber deg tilbake til utgangspunktet |
| Systematisk prøving | Å prøve verdier på en organisert måte, gjerne i en tabell |
| Delproblem | Et mindre problem som du løser som en del av et større problem |
| Kontrollregning | Å sjekke svaret ved å sette det tilbake i oppgaven |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Polyas 4 steg', definition: 'En systematisk metode for problemløsning: 1) Forstå problemet, 2) Lag en plan, 3) Gjennomfør planen, 4) Se tilbake.' },
    { term: 'Systematisk prøving', definition: 'Å prøve verdier på en organisert måte (gjerne i en tabell) for å finne svaret.' },
    { term: 'Jobbe baklengs', definition: 'Å starte med det du vet om svaret og jobbe deg tilbake til utgangspunktet.' },
    { term: 'Delproblem', definition: 'Et mindre problem som du løser som en del av et større problem.' },
  ],
};

// ============================================================================
// KAPITTEL 12.3: Tentamensforberedelse
// LK20 KM238: Bruke geometriske eigenskapar og relasjonar i utforsking og
//              problemløysing knytte til ulike praktiske situasjonar
// ============================================================================

export const CHAPTER_9_12_3: TextbookChapter = {
  id: '9-12-3',
  courseId: '9',
  chapterNumber: '12.3',
  title: 'Tentamensforberedelse',
  description: 'Forbered deg til tentamen med tips, strategier og et blandet oppgavesett som dekker hele pensum.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke geometriske eigenskapar og relasjonar i utforsking og problemløysing knytte til ulike praktiske situasjonar',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '9-12-3-intro',
      type: 'text',
      content: `## Tentamensforberedelse

Tentamen er en viktig prøve som tester det du har lært i matematikk dette skoleåret. Mange elever synes tentamen er stressende, men med god forberedelse og riktige strategier kan du vise hva du kan.

I dette kapittelet får du:
- **Oversikt over typiske tentamensoppgaver** for 9. klasse
- **Strategier** for tentamensdagen
- **Blandet oppgavesett** som dekker de viktigste emnene

Oppgavesettet dekker de emnene som oftest dukker opp på tentamen i 9. klasse: tallregning, algebra, geometri, statistikk og sannsynlighet. Bruk det som trening — prøv å løse oppgavene uten å se på løsningen først!`,
    },

    // ========== DEFINISJON 1: TENTAMENSFORMAT ==========
    {
      id: '9-12-3-def-1',
      type: 'definition',
      title: 'Tentamensformat i 9. klasse',
      content: `Tentamen i matematikk for 9. klasse er vanligvis delt i to deler:

**Del 1: Uten hjelpemidler**
- Ingen kalkulator, formelsamling eller digitale verktøy
- Tester grunnleggende ferdigheter: hoderegning, brøk, prosent, enkel algebra, geometriformler
- Varighet: ca. 1–1,5 time

**Del 2: Med hjelpemidler**
- Du kan bruke kalkulator og formelsamling
- Mer sammensatte oppgaver: tekstoppgaver, geometri, statistikk, problemløsning
- Varighet: ca. 2–2,5 timer

**Poeng og vurdering:**
- Oppgavene har ulik poengverdi (typisk 1–5 poeng per oppgave)
- Du vurderes på: riktig svar, fremgangsmåte, mellomregning og begrunnelse
- Delpoeng gis selv om sluttsvaret er feil — vis alltid fremgangsmåten din!`,
    },

    // ========== DEFINISJON 2: EKSAMENSSTRATEGIER ==========
    {
      id: '9-12-3-def-2',
      type: 'definition',
      title: 'Strategier for tentamensdagen',
      content: `**Før tentamen:**
- Repeter de viktigste formlene (areal, volum, Pytagoras, prosent)
- Løs gamle tentamensoppgaver under tidspress
- Sov godt natten før — en uthvilt hjerne presterer mye bedre

**Under tentamen (Del 1 — uten hjelpemidler):**
1. Les gjennom alle oppgavene først (2–3 minutter)
2. Løs de oppgavene du er sikker på først
3. Marker oppgaver du er usikker på og kom tilbake til dem
4. Vis alltid mellomregning — skriv formelen, sett inn tall, regn ut
5. Skriv tydelig svar med enhet

**Under tentamen (Del 2 — med hjelpemidler):**
1. Les oppgaveteksten nøye — gjerne to ganger
2. Tegn figur der det er naturlig
3. Bruk kalkulatoren smart, men vis likevel mellomregning
4. Sjekk at svaret er rimelig (overslag)
5. Bruk de siste 10 minuttene til å sjekke alle svar`,
    },

    // ========== DEFINISJON 3: VANLIGE EMNER ==========
    {
      id: '9-12-3-def-3',
      type: 'definition',
      title: 'Vanlige tentamensemner i 9. klasse',
      content: `Her er emnene som oftest dukker opp på tentamen i 9. klasse:

**Tallregning og algebra:**
- Brøkregning (addisjon, subtraksjon, multiplikasjon, divisjon)
- Prosentregning (finne prosenten, finne det hele, prosentvis endring)
- Potenser og kvadratrøtter
- Løse likninger (også med parenteser og brøk)

**Geometri:**
- Areal av trekant, rektangel, parallellogram, trapes, sirkel
- Omkrets av ulike figurer
- Pytagoras' setning
- Volum av prisme, sylinder
- Formlikhet

**Statistikk og sannsynlighet:**
- Gjennomsnitt, median, typetall
- Lese og tolke diagrammer
- Enkel sannsynlighetsregning

**Funksjoner:**
- Lineære funksjoner ($y = ax + b$)
- Lese av og tolke grafer
- Proporsjonale og omvendt proporsjonale størrelser`,
    },

    // ========== EKSEMPEL 1 ==========
    {
      id: '9-12-3-example-1',
      type: 'example',
      title: 'Eksempel: Typisk Del 1-oppgave (uten hjelpemidler)',
      problem: `Regn ut uten kalkulator:

a) $\\frac{2}{3} + \\frac{3}{4}$

b) $15 \\% \\text{ av } 240$

c) Løs likningen $3x - 7 = 14$`,
      solution: `**a)** Vi trenger fellesnevner. Minste felles nevner for 3 og 4 er 12.

$$\\frac{2}{3} + \\frac{3}{4} = \\frac{8}{12} + \\frac{9}{12} = \\frac{17}{12} = 1\\frac{5}{12}$$

**b)** $15 \\%$ av $240$:

$$0{,}15 \\cdot 240 = 36$$

Alternativt: $10 \\% = 24$ og $5 \\% = 12$, altså $15 \\% = 24 + 12 = 36$.

**c)** Løs likningen:
$$3x - 7 = 14$$
$$3x = 14 + 7 = 21$$
$$x = \\frac{21}{3} = 7$$

**Kontroll:** $3 \\cdot 7 - 7 = 21 - 7 = 14$. Stemmer!`,
    },

    // ========== EKSEMPEL 2 ==========
    {
      id: '9-12-3-example-2',
      type: 'example',
      title: 'Eksempel: Typisk Del 2-oppgave (med hjelpemidler)',
      problem: `En familie skal kjøpe nytt teppe til stuen. Stuen er 5,4 m lang og 3,8 m bred. Teppet koster 289 kr per kvadratmeter.

a) Finn arealet av stuen.
b) Hva koster teppet?
c) Familien har budsjettert 6 000 kr. Har de råd?`,
      solution: `**a)** Arealet:
$$A = 5{,}4 \\cdot 3{,}8 = 20{,}52 \\text{ m}^2$$

**b)** Kostnaden:
$$\\text{Kostnad} = 20{,}52 \\cdot 289 = 5\\,930{,}28 \\text{ kr}$$

**c)** Familien har budsjettert 6 000 kr. Teppet koster 5 930,28 kr.

$6\\,000 - 5\\,930{,}28 = 69{,}72$ kr til overs.

**Svar:** Ja, familien har råd. De har 69,72 kr til gode.

**Rimelighetskontroll:** Arealet er ca. $5 \\cdot 4 = 20 \\text{ m}^2$. Pris ca. $20 \\cdot 300 = 6\\,000$ kr. Stemmer omtrent med det nøyaktige svaret.`,
    },

    // ========== BLANDET OPPGAVESETT ==========
    {
      id: '9-12-3-overskrift-oppgaver',
      type: 'text',
      title: 'Blandet oppgavesett — Test deg selv!',
      content: `## Blandet tentamensøving

Oppgavene under dekker de viktigste emnene fra 9. klasse. Prøv å løse dem selv før du ser på løsningen. Oppgavene er sortert etter vanskelighetsgrad.

**Tips:** Bruk Polyas 4 steg på hver oppgave:
1. Forstå problemet (les nøye)
2. Lag en plan (hvilken strategi?)
3. Gjennomfør (vis mellomregning)
4. Se tilbake (sjekk svaret)`,
    },

    // ========== OPPGAVE 1: Brøk ==========
    {
      id: '9-12-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '9-12-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: `Regn ut:

a) $\\frac{5}{6} - \\frac{1}{4}$

b) $\\frac{3}{5} \\cdot \\frac{10}{9}$

c) $\\frac{7}{8} \\div \\frac{1}{4}$`,
        hints: [
          'a) Finn fellesnevner for 6 og 4.',
          'b) Gang teller med teller og nevner med nevner.',
          'c) Å dele med en brøk er det samme som å gange med den omvendte brøken.',
        ],
        solution: `a) Fellesnevner 12:
$$\\frac{5}{6} - \\frac{1}{4} = \\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$$

b) Gang teller med teller og nevner med nevner:
$$\\frac{3}{5} \\cdot \\frac{10}{9} = \\frac{30}{45} = \\frac{2}{3}$$

c) Del med brøk = gang med omvendt brøk:
$$\\frac{7}{8} \\div \\frac{1}{4} = \\frac{7}{8} \\cdot \\frac{4}{1} = \\frac{28}{8} = \\frac{7}{2} = 3\\frac{1}{2}$$`,
      },
    },

    // ========== OPPGAVE 2: Prosent ==========
    {
      id: '9-12-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '9-12-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: `En jakke kostet opprinnelig 800 kr. Nå er den satt ned med 30 %.

a) Hvor mye er rabatten i kroner?
b) Hva er den nye prisen?`,
        hints: [
          '$30 \\%$ av $800 = 0{,}30 \\cdot 800$.',
        ],
        solution: `a) Rabatten: $0{,}30 \\cdot 800 = 240$ kr.

b) Ny pris: $800 - 240 = 560$ kr.

Alternativt: $800 \\cdot 0{,}70 = 560$ kr (du betaler 70 % av opprinnelig pris).

**Svar:** Rabatten er 240 kr og den nye prisen er 560 kr.`,
      },
    },

    // ========== OPPGAVE 3: Likninger ==========
    {
      id: '9-12-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '9-12-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'lett',
        task: `Løs likningene:

a) $2x + 5 = 19$

b) $4(x - 3) = 20$

c) $\\frac{x}{3} + 2 = 7$`,
        hints: [
          'a) Trekk fra 5 på begge sider, deretter del med 2.',
          'b) Multipliser ut parentesen eller del begge sider med 4 først.',
          'c) Trekk fra 2 på begge sider, deretter gang med 3.',
        ],
        solution: `a)
$$2x + 5 = 19$$
$$2x = 14$$
$$x = 7$$

b)
$$4(x - 3) = 20$$
$$x - 3 = 5$$
$$x = 8$$

c)
$$\\frac{x}{3} + 2 = 7$$
$$\\frac{x}{3} = 5$$
$$x = 15$$

**Kontroll:** a) $2 \\cdot 7 + 5 = 19$. b) $4(8-3) = 4 \\cdot 5 = 20$. c) $\\frac{15}{3} + 2 = 5 + 2 = 7$. Alt stemmer!`,
      },
    },

    // ========== OPPGAVE 4: Pytagoras ==========
    {
      id: '9-12-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '9-12-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `En rettvinklet trekant har kateter $a = 6$ cm og hypotenuse $c = 10$ cm.

a) Finn den andre kateten $b$.
b) Finn arealet av trekanten.`,
        hints: [
          'Pytagoras: $a^2 + b^2 = c^2$, altså $b^2 = c^2 - a^2$.',
        ],
        solution: `a) Pytagoras:
$$b^2 = c^2 - a^2 = 10^2 - 6^2 = 100 - 36 = 64$$
$$b = \\sqrt{64} = 8 \\text{ cm}$$

b) Arealet (katetene er grunnlinje og høyde):
$$A = \\frac{a \\cdot b}{2} = \\frac{6 \\cdot 8}{2} = 24 \\text{ cm}^2$$

**Svar:** Den andre kateten er 8 cm og arealet er $24 \\text{ cm}^2$.`,
      },
    },

    // ========== OPPGAVE 5: Statistikk ==========
    {
      id: '9-12-3-ex-5',
      type: 'exercise',
      exercise: {
        id: '9-12-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `I en klasse fikk 20 elever følgende resultater på en prøve (maks 10 poeng):

$3, 5, 7, 8, 4, 6, 9, 5, 7, 6, 8, 5, 3, 7, 6, 9, 4, 6, 7, 5$

a) Finn gjennomsnittet.
b) Finn medianen.
c) Finn typetallet.`,
        hints: [
          'Gjennomsnitt: Summer alle verdiene og del på antallet.',
          'Median: Sorter verdiene og finn den midterste (eller gjennomsnittet av de to midterste).',
          'Typetall: Det tallet som forekommer flest ganger.',
        ],
        solution: `a) **Gjennomsnitt:**
Sum $= 3 + 5 + 7 + 8 + 4 + 6 + 9 + 5 + 7 + 6 + 8 + 5 + 3 + 7 + 6 + 9 + 4 + 6 + 7 + 5 = 120$

$$\\text{Gjennomsnitt} = \\frac{120}{20} = 6{,}0$$

b) **Median:**
Sortert: $3, 3, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 9, 9$

Med 20 verdier er medianen gjennomsnittet av verdi nr. 10 og 11: $\\frac{6 + 6}{2} = 6$

c) **Typetall:**
Frekvenser: 3 (2), 4 (2), 5 (4), 6 (4), 7 (4), 8 (2), 9 (2)

Tallene 5, 6 og 7 forekommer alle 4 ganger. Typetallene er 5, 6 og 7.

**Svar:** Gjennomsnitt $= 6{,}0$, median $= 6$, typetall $= 5, 6$ og $7$.`,
      },
    },

    // ========== OPPGAVE 6: Volum ==========
    {
      id: '9-12-3-ex-6',
      type: 'exercise',
      exercise: {
        id: '9-12-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: `En sylinderformet vannflaske har indre diameter 7 cm og indre høyde 20 cm.

a) Finn volumet av flasken i $\\text{cm}^3$.
b) Gjør om svaret til liter. (Husk: $1$ liter $= 1\\,000 \\text{ cm}^3$)
c) Er dette en vanlig størrelse for en vannflaske?`,
        hints: [
          'Radius er halvparten av diameteren: $r = 3{,}5$ cm.',
          'Volum av sylinder: $V = \\pi r^2 h$.',
        ],
        solution: `a) Radius: $r = \\frac{7}{2} = 3{,}5$ cm

Volum:
$$V = \\pi r^2 h = \\pi \\cdot 3{,}5^2 \\cdot 20 = \\pi \\cdot 12{,}25 \\cdot 20 = 245\\pi \\approx 769{,}7 \\text{ cm}^3$$

b) Omgjøring: $\\frac{769{,}7}{1\\,000} \\approx 0{,}77$ liter $= 770$ ml.

c) Ja, dette er en vanlig størrelse. Mange vannflasker er 0,5 l eller 0,75 l, så 0,77 l er i det øvre sjiktet av normale vannflaskestørrelser.

**Svar:** Volumet er ca. $770 \\text{ cm}^3$ eller $0{,}77$ liter.`,
      },
    },

    // ========== OPPGAVE 7: Sannsynlighet ==========
    {
      id: '9-12-3-ex-7',
      type: 'exercise',
      exercise: {
        id: '9-12-3-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: `I en pose ligger det 5 røde kuler, 3 blå kuler og 2 grønne kuler. Du trekker tilfeldig én kule.

a) Hva er sannsynligheten for å trekke en rød kule?
b) Hva er sannsynligheten for å trekke en kule som IKKE er grønn?
c) Du trekker to kuler uten å legge tilbake den første. Hva er sannsynligheten for å trekke to røde kuler?`,
        hints: [
          'Totalt antall kuler: $5 + 3 + 2 = 10$.',
          'Sannsynlighet: $P = \\frac{\\text{gunstige utfall}}{\\text{mulige utfall}}$.',
          'c) Etter første trekk er det færre kuler igjen i posen.',
        ],
        solution: `Totalt: $5 + 3 + 2 = 10$ kuler.

a) $P(\\text{rød}) = \\frac{5}{10} = \\frac{1}{2} = 0{,}5 = 50 \\%$

b) Kuler som ikke er grønne: $5 + 3 = 8$ stykker.
$P(\\text{ikke grønn}) = \\frac{8}{10} = \\frac{4}{5} = 0{,}8 = 80 \\%$

c) Første trekk: $P(\\text{rød}_1) = \\frac{5}{10} = \\frac{1}{2}$

Etter å ha trukket én rød: 4 røde igjen av 9 kuler totalt.
Andre trekk: $P(\\text{rød}_2 | \\text{rød}_1) = \\frac{4}{9}$

Samlet: $P(\\text{to røde}) = \\frac{5}{10} \\cdot \\frac{4}{9} = \\frac{20}{90} = \\frac{2}{9} \\approx 0{,}222 \\approx 22{,}2 \\%$

**Svar:** a) 50 %, b) 80 %, c) ca. 22,2 %.`,
      },
    },

    // ========== OPPGAVE 8: Lineær funksjon ==========
    {
      id: '9-12-3-ex-8',
      type: 'exercise',
      exercise: {
        id: '9-12-3-ex-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: `En taxitur koster 50 kr i oppstartsgebyr pluss 12 kr per kilometer.

a) Sett opp en formel for kostnaden $K$ som funksjon av antall kilometer $x$.
b) Hva koster en tur på 8 km?
c) Du betalte 194 kr for en tur. Hvor langt kjørte du?`,
        hints: [
          'a) $K = \\text{startgebyr} + \\text{pris per km} \\cdot x$.',
          'c) Sett $K = 194$ og løs for $x$.',
        ],
        solution: `a) $K(x) = 50 + 12x$

b) $K(8) = 50 + 12 \\cdot 8 = 50 + 96 = 146$ kr.

c) $194 = 50 + 12x$
$12x = 194 - 50 = 144$
$x = \\frac{144}{12} = 12$ km

**Kontroll:** $K(12) = 50 + 12 \\cdot 12 = 50 + 144 = 194$ kr. Stemmer!

**Svar:** a) $K(x) = 50 + 12x$, b) 146 kr, c) 12 km.`,
      },
    },

    // ========== OPPGAVE 9: Sammensatt geometri ==========
    {
      id: '9-12-3-ex-9',
      type: 'exercise',
      exercise: {
        id: '9-12-3-ex-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En idrettsbane har form som et rektangel med en halvsirkel i hver ende. Rektangelet er 100 m langt og 60 m bredt (bredden er diameteren til halvsirklene).

a) Finn det totale arealet av banen.
b) Finn den totale omkretsen (løpebanen).
c) En løper springer 4 runder. Hvor langt løper hun totalt?`,
        hints: [
          'To halvsirkler utgjør én hel sirkel med diameter 60 m.',
          'Radius: $r = 30$ m.',
          'Omkretsen består av to langsider (100 m hver) og to halvsirkler (som tilsammen er én hel sirkelomkrets).',
        ],
        solution: `Radius til halvsirklene: $r = \\frac{60}{2} = 30$ m.

a) **Totalt areal:**
Rektangel: $A_r = 100 \\cdot 60 = 6\\,000 \\text{ m}^2$
To halvsirkler = én sirkel: $A_s = \\pi \\cdot 30^2 = 900\\pi \\approx 2\\,827 \\text{ m}^2$
Totalt: $A = 6\\,000 + 900\\pi \\approx 8\\,827 \\text{ m}^2$

b) **Omkretsen:**
To langsider: $2 \\cdot 100 = 200$ m
To halvsirkler = én sirkelomkrets: $2\\pi \\cdot 30 = 60\\pi \\approx 188{,}5$ m
Totalt: $O = 200 + 60\\pi \\approx 388{,}5$ m

c) **4 runder:**
$4 \\cdot 388{,}5 = 1\\,554$ m $\\approx 1{,}55$ km.

**Svar:** Arealet er ca. $8\\,827 \\text{ m}^2$, omkretsen er ca. $388{,}5$ m, og 4 runder er ca. $1\\,554$ m.`,
      },
    },

    // ========== OPPGAVE 10: Problemløsning ==========
    {
      id: '9-12-3-ex-10',
      type: 'exercise',
      exercise: {
        id: '9-12-3-ex-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En klasse med 30 elever hadde en innsamlingsaksjon. Gjennomsnittet av beløpene de samlet inn var 145 kr. De 18 jentene samlet inn i gjennomsnitt 160 kr.

a) Hvor mye samlet hele klassen inn totalt?
b) Hvor mye samlet jentene inn totalt?
c) Hva var gjennomsnittet for guttene?`,
        hints: [
          'Totalt beløp = gjennomsnitt ganger antall.',
          'Antall gutter: $30 - 18 = 12$.',
          'Guttenes totale beløp = totalt beløp minus jentenes beløp.',
        ],
        solution: `a) Totalt: $30 \\cdot 145 = 4\\,350$ kr.

b) Jentene totalt: $18 \\cdot 160 = 2\\,880$ kr.

c) Guttene totalt: $4\\,350 - 2\\,880 = 1\\,470$ kr.
Antall gutter: $30 - 18 = 12$.
Gjennomsnitt for guttene: $\\frac{1\\,470}{12} = 122{,}5$ kr.

**Kontroll:** $\\frac{18 \\cdot 160 + 12 \\cdot 122{,}5}{30} = \\frac{2\\,880 + 1\\,470}{30} = \\frac{4\\,350}{30} = 145$ kr. Stemmer!

**Svar:** Klassen samlet inn totalt 4 350 kr, jentene 2 880 kr, og guttenes gjennomsnitt var 122,50 kr.`,
      },
    },

    // ========== AVSLUTTENDE TIPS ==========
    {
      id: '9-12-3-avslutning',
      type: 'tip',
      title: 'Avsluttende tips til tentamen',
      content: `**Husk disse gylne reglene:**

1. **Les oppgaven to ganger** før du begynner å regne.
2. **Vis alltid mellomregning** — formel, innsetting, utregning, svar med enhet.
3. **Sjekk svaret** — er det rimelig? Sett gjerne svaret tilbake i oppgaven.
4. **Gi aldri opp** — selv om du ikke finner hele svaret, kan du få delpoeng for oppsett og delregninger.
5. **Pass på enhetene** — cm, m, kr, kg, liter. Skriv alltid enheten!
6. **Tegn figurer** — det hjelper deg å forstå oppgaven og viser sensor at du tenker.
7. **Bruk tiden smart** — ikke bruk for lang tid på én oppgave. Kom tilbake til den senere.

**Lykke til med tentamen! Du klarer dette!**`,
    },
    // ========== OPPSUMMERING ==========
    {
      id: '9-12-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Tentamensformat**: At tentamen er delt i Del 1 (uten hjelpemidler) og Del 2 (med hjelpemidler), og at mellomregning gir delpoeng
- **Eksamensstrategier**: Å lese oppgaven nøye, løse de letteste oppgavene først, vise mellomregning og sjekke at svaret er rimelig
- **Vanlige feil å unngå**: Å glemme enheter, ikke vise mellomregning, bruke for lang tid på én oppgave og ikke kontrollere svaret
- **Blandet øving**: Å trene på oppgaver som dekker brøk, prosent, algebra, geometri, statistikk og sannsynlighet

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Tentamen | Prøve delt i Del 1 (uten hjelpemidler) og Del 2 (med hjelpemidler) |
| Mellomregning | Stegene mellom formelen og det endelige svaret — viktig for delpoeng |
| Overslag | Raskt, omtrentlig regnestykke for å sjekke om svaret er rimelig |
| Kontrollregning | Å sette svaret tilbake i oppgaven for å sjekke at det stemmer |
| Tidsstyring | Å fordele tiden riktig slik at du rekker alle oppgavene |
| Delpoeng | Poeng du får for riktig oppsett og mellomregning selv om sluttsvaret er feil |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Tentamen', definition: 'En viktig prøve som tester det du har lært i løpet av en periode. Ofte delt i Del 1 (uten hjelpemidler) og Del 2 (med hjelpemidler).' },
    { term: 'Mellomregning', definition: 'Stegene du viser mellom formelen og det endelige svaret. Viktig for å få full poenguttelling.' },
    { term: 'Overslag', definition: 'Et raskt, omtrentlig regnestykke for å sjekke om svaret er rimelig.' },
    { term: 'Fellesnevner', definition: 'En felles nevner for to eller flere brøker, brukt ved addisjon og subtraksjon av brøker.' },
    { term: 'Gjennomsnitt', definition: 'Summen av alle verdier delt på antall verdier.' },
    { term: 'Median', definition: 'Den midterste verdien når tallene er sortert i stigende rekkefølge.' },
  ],
};

// ============================================================================
// Eksporter alle kapitler i del 12
// ============================================================================

export const MATEMATIKK_9_DEL12_CHAPTERS = [
  CHAPTER_9_12_1,
  CHAPTER_9_12_2,
  CHAPTER_9_12_3,
];
