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
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-12-1-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-12-1-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-12-1-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Beregn areal av sammensatte figurer.',
            subTasks: [
              { label: 'a', task: 'Et L-formet rom kan sees som et stort rektangel på $8 \\times 6$ m minus et lite rektangel på $3 \\times 2$ m. Finn arealet.', solution: '$A = 8 \\cdot 6 - 3 \\cdot 2 = 48 - 6 = 42 \\text{ m}^2$' },
              { label: 'b', task: 'Et T-formet skilt består av et horisontalt rektangel ($10 \\times 2$ cm) og et vertikalt rektangel ($2 \\times 8$ cm). Finn totalarealet.', solution: '$A = 10 \\cdot 2 + 2 \\cdot 8 = 20 + 16 = 36 \\text{ cm}^2$' },
              { label: 'c', task: 'En figur er et kvadrat med side $6$ cm der det er kuttet ut en halvsirkel med diameter $6$ cm fra en side. Finn arealet.', solution: '$A = 6^2 - \\frac{\\pi \\cdot 3^2}{2} = 36 - \\frac{9\\pi}{2} \\approx 36 - 14{,}14 = 21{,}86 \\text{ cm}^2$' },
              { label: 'd', task: 'Et rektangel er $12$ cm langt og $5$ cm bredt. En trekant med grunnlinje $12$ cm og høyde $4$ cm er plassert på toppen. Finn totalarealet.', solution: '$A = 12 \\cdot 5 + \\frac{12 \\cdot 4}{2} = 60 + 24 = 84 \\text{ cm}^2$' },
              { label: 'e', task: 'Et sirkelformet basseng har radius $5$ m. I midten er det en sirkelformet fontene med radius $1$ m. Finn arealet av vannflaten.', solution: '$A = \\pi \\cdot 5^2 - \\pi \\cdot 1^2 = 25\\pi - \\pi = 24\\pi \\approx 75{,}4 \\text{ m}^2$' },
              { label: 'f', task: 'Et trapesformet vindu har parallelle sider $60$ cm og $40$ cm, med høyde $50$ cm. Finn arealet.', solution: '$A = \\frac{(60 + 40) \\cdot 50}{2} = \\frac{100 \\cdot 50}{2} = 2500 \\text{ cm}^2$' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Del opp figuren i enklere deler, eller trekk fra områder som mangler.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-12-1-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-12-1-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Bruk Pytagoras\' setning i geometrisk problemløsning.',
            subTasks: [
              { label: 'a', task: 'En rettvinklet trekant har kateter $a = 6$ cm og $b = 8$ cm. Finn hypotenusen $c$.', solution: '$c = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$ cm' },
              { label: 'b', task: 'En stige er $5$ m lang og lener mot en vegg. Foten av stigen er $3$ m fra veggen. Hvor høyt opp på veggen når stigen?', solution: '$h = \\sqrt{5^2 - 3^2} = \\sqrt{25 - 9} = \\sqrt{16} = 4$ m' },
              { label: 'c', task: 'Finn diagonalen i et rektangel med sider $9$ cm og $12$ cm.', solution: '$d = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15$ cm' },
              { label: 'd', task: 'En likebeint trekant har to like sider på $13$ cm og grunnlinje $10$ cm. Finn høyden.', solution: 'Høyden deler grunnlinjen i to deler á $5$ cm. $h = \\sqrt{13^2 - 5^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$ cm' },
              { label: 'e', task: 'Finn arealet av den likebeinte trekanten fra d).', solution: '$A = \\frac{g \\cdot h}{2} = \\frac{10 \\cdot 12}{2} = 60 \\text{ cm}^2$' },
              { label: 'f', task: 'Et kvadrat har diagonal $10$ cm. Finn sidelengden.', solution: 'Diagonalen i et kvadrat med side $s$: $d = s\\sqrt{2}$. Altså $s = \\frac{10}{\\sqrt{2}} = \\frac{10\\sqrt{2}}{2} = 5\\sqrt{2} \\approx 7{,}07$ cm' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['$a^2 + b^2 = c^2$ der $c$ er hypotenusen. Høyden i en likebeint trekant halverer grunnlinjen.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-12-1-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-12-1-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Forstå skalering av areal og volum.',
            subTasks: [
              { label: 'a', task: 'Et kvadrat har side $4$ cm. Alle sider dobles. Hvor mange ganger større er det nye arealet?', solution: 'Skaleringsfaktor $k = 2$. Nytt areal: $k^2 = 4$ ganger det opprinnelige. ($A_{\\text{ny}} = 8^2 = 64$, $A_{\\text{gml}} = 4^2 = 16$, $\\frac{64}{16} = 4$)' },
              { label: 'b', task: 'En kube har side $3$ cm. Alle sider tredobles. Hvor mange ganger større er det nye volumet?', solution: '$k = 3$. Nytt volum: $k^3 = 27$ ganger. ($V_{\\text{ny}} = 9^3 = 729$, $V_{\\text{gml}} = 3^3 = 27$, $\\frac{729}{27} = 27$)' },
              { label: 'c', task: 'En sirkel har radius $r = 5$ cm. Hva skjer med arealet hvis radien halveres?', solution: '$k = 0{,}5$. Nytt areal: $k^2 = 0{,}25$ ganger det opprinnelige, altså en fjerdedel. ($A_{\\text{ny}} = \\pi \\cdot 2{,}5^2 = 6{,}25\\pi$, $A_{\\text{gml}} = 25\\pi$)' },
              { label: 'd', task: 'En sylinder har radius $r$ og høyde $h$. Bare radien dobles (høyden forblir lik). Hvor mange ganger større blir volumet?', solution: '$V = \\pi r^2 h$. Nytt: $V_{\\text{ny}} = \\pi (2r)^2 h = 4\\pi r^2 h = 4V$. Volumet blir $4$ ganger så stort.' },
              { label: 'e', task: 'En modell av en bygning er laget i skala $1:50$. Hvis modellen har et gulvareal på $200 \\text{ cm}^2$, hva er det virkelige gulvarealet?', solution: '$k = 50$. Virkelig areal: $200 \\cdot 50^2 = 200 \\cdot 2500 = 500\\,000 \\text{ cm}^2 = 50 \\text{ m}^2$' },
              { label: 'f', task: 'Modellen fra e) har et volum på $3000 \\text{ cm}^3$. Hva er det virkelige volumet?', solution: '$V_{\\text{virkelig}} = 3000 \\cdot 50^3 = 3000 \\cdot 125\\,000 = 375\\,000\\,000 \\text{ cm}^3 = 375 \\text{ m}^3$' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Areal skalerer med $k^2$ og volum med $k^3$ når alle lengder ganges med $k$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-12-1-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-12-1-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Bruk formlikhet til å finne ukjente lengder.',
            subTasks: [
              { label: 'a', task: 'To trekanter er formlike. Den lille har sider $3, \\; 4, \\; 5$ cm. Den store har lengste side $15$ cm. Finn de to andre sidene.', solution: 'Skaleringsfaktor: $k = \\frac{15}{5} = 3$. Sider: $3 \\cdot 3 = 9$ cm og $4 \\cdot 3 = 12$ cm.' },
              { label: 'b', task: 'Et flagg er $6$ m langt og $4$ m høyt. En miniatyr av flagget er $15$ cm lang. Hvor høy er miniatyren?', solution: '$\\frac{\\text{høyde}}{15} = \\frac{4}{6}$. Høyde $= 15 \\cdot \\frac{4}{6} = 15 \\cdot \\frac{2}{3} = 10$ cm' },
              { label: 'c', task: 'En person på $1{,}70$ m kaster en skygge på $2{,}5$ m. Samtidig kaster en lyktestolpe en skygge på $7{,}5$ m. Hvor høy er lyktestolpen?', solution: '$\\frac{h}{7{,}5} = \\frac{1{,}70}{2{,}5}$. $h = 7{,}5 \\cdot \\frac{1{,}70}{2{,}5} = 7{,}5 \\cdot 0{,}68 = 5{,}1$ m' },
              { label: 'd', task: 'Et kart har målestokk $1:25\\,000$. To byer er $8$ cm fra hverandre på kartet. Hva er den virkelige avstanden?', solution: '$8 \\cdot 25\\,000 = 200\\,000$ cm $= 2\\,000$ m $= 2$ km' },
              { label: 'e', task: 'To formlike rektangler har areal $12 \\text{ cm}^2$ og $48 \\text{ cm}^2$. Hva er forholdet mellom sidene?', solution: '$\\frac{A_2}{A_1} = \\frac{48}{12} = 4 = k^2$. Altså $k = \\sqrt{4} = 2$. Sidene i det store rektangelet er dobbelt så lange.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Formlike figurer har like forholdstall mellom tilsvarende sider.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-12-1-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-12-1-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Beregn volum og overflate av sammensatte figurer.',
            subTasks: [
              { label: 'a', task: 'En iskrem-kjegle har radius $r = 3$ cm og høyde $h = 10$ cm. Finn volumet. ($V_{\\text{kjegle}} = \\frac{1}{3} \\pi r^2 h$)', solution: '$V = \\frac{1}{3} \\pi \\cdot 3^2 \\cdot 10 = \\frac{90\\pi}{3} = 30\\pi \\approx 94{,}2 \\text{ cm}^3$' },
              { label: 'b', task: 'Oppå kjeglen fra a) er det en iskule (halvkule) med radius $3$ cm. Finn volumet av halvkulen. ($V_{\\text{kule}} = \\frac{4}{3}\\pi r^3$)', solution: '$V_{\\text{halvkule}} = \\frac{1}{2} \\cdot \\frac{4}{3} \\pi \\cdot 3^3 = \\frac{2}{3} \\pi \\cdot 27 = 18\\pi \\approx 56{,}5 \\text{ cm}^3$' },
              { label: 'c', task: 'Finn det totale volumet av iskrem (kjegle + halvkule) fra a) og b).', solution: '$V_{\\text{total}} = 30\\pi + 18\\pi = 48\\pi \\approx 150{,}8 \\text{ cm}^3$' },
              { label: 'd', task: 'En blyant kan modelleres som en sylinder ($r = 0{,}4$ cm, $h = 17$ cm) med en kjegle i toppen ($r = 0{,}4$ cm, $h = 1$ cm). Finn totalvolumet.', solution: '$V_{\\text{syl}} = \\pi \\cdot 0{,}4^2 \\cdot 17 = 2{,}72\\pi$. $V_{\\text{kjegle}} = \\frac{1}{3} \\pi \\cdot 0{,}4^2 \\cdot 1 = \\frac{0{,}16\\pi}{3}$. $V_{\\text{total}} = 2{,}72\\pi + 0{,}053\\pi \\approx 2{,}773\\pi \\approx 8{,}71 \\text{ cm}^3$' },
              { label: 'e', task: 'Finn skråhøyden til kjeglen i oppgave a) med Pytagoras.', solution: '$s = \\sqrt{r^2 + h^2} = \\sqrt{3^2 + 10^2} = \\sqrt{9 + 100} = \\sqrt{109} \\approx 10{,}44$ cm' },
              { label: 'f', task: 'Hvis alle mål i iskremen fra a)-c) dobles, hvor mange ganger større blir det totale volumet?', solution: '$k = 2$, så volumet blir $k^3 = 8$ ganger større: $8 \\cdot 48\\pi = 384\\pi \\approx 1206 \\text{ cm}^3$' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Del figuren i kjente former (sylinder, kjegle, kule) og legg sammen volumene.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-12-1-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-12-1-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Sammensatt geometrisk problem med flere steg.',
            subTasks: [
              { label: 'a', task: 'Et telt har form som en kjegle med diameter $4$ m og skråhøyde $3$ m. Finn høyden av teltet.', solution: 'Radius $r = 2$ m, skråhøyde $s = 3$ m. $h = \\sqrt{s^2 - r^2} = \\sqrt{9 - 4} = \\sqrt{5} \\approx 2{,}24$ m' },
              { label: 'b', task: 'Finn volumet av teltet.', solution: '$V = \\frac{1}{3} \\pi r^2 h = \\frac{1}{3} \\pi \\cdot 4 \\cdot \\sqrt{5} = \\frac{4\\sqrt{5}\\pi}{3} \\approx 9{,}37 \\text{ m}^3$' },
              { label: 'c', task: 'Teltet skal lages av stoff. Finn arealet av den skrå overflaten (mantelen) av kjeglen. ($M = \\pi r s$)', solution: '$M = \\pi \\cdot 2 \\cdot 3 = 6\\pi \\approx 18{,}85 \\text{ m}^2$' },
              { label: 'd', task: 'Produsenten vil lage et nytt telt som er $1{,}5$ ganger så stort i alle mål. Finn volumet av det nye teltet.', solution: '$V_{\\text{ny}} = 1{,}5^3 \\cdot V_{\\text{gml}} = 3{,}375 \\cdot 9{,}37 \\approx 31{,}6 \\text{ m}^3$' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Bruk Pytagoras for å finne høyden fra skråhøyde og radius. Husk at volum skalerer med $k^3$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
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
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-12-2-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-12-2-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-12-2-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Bruk Polyas 4 steg til å løse enkle problemer.',
            subTasks: [
              { label: 'a', task: 'Steg 1 (forstå): Du har $24$ m gjerde og skal lage et rektangulært innhegning. Hva vet du, og hva skal du finne?', solution: 'Vet: omkretsen er $24$ m ($2l + 2b = 24$, altså $l + b = 12$). Skal finne: dimensjonene som gir størst areal.' },
              { label: 'b', task: 'Steg 2 (plan): Skriv opp arealet $A$ uttrykt med bare $l$ (bruk at $b = 12 - l$).', solution: '$A = l \\cdot b = l \\cdot (12 - l) = 12l - l^2$' },
              { label: 'c', task: 'Steg 3 (gjennomfør): Prøv systematisk med $l = 1, 2, 3, \\ldots, 6$ og lag en tabell.', solution: '$l = 1: A = 11$, $l = 2: A = 20$, $l = 3: A = 27$, $l = 4: A = 32$, $l = 5: A = 35$, $l = 6: A = 36$. Størst areal ved $l = 6$, $b = 6$ (kvadrat).' },
              { label: 'd', task: 'Steg 4 (se tilbake): Kontroller at $l = b = 6$ gir omkrets $24$ m og beregn arealet.', solution: 'Omkrets: $2 \\cdot 6 + 2 \\cdot 6 = 24$ m. Areal: $6 \\cdot 6 = 36 \\text{ m}^2$. Stemmer.' },
              { label: 'e', task: 'Forklar med egne ord hvert av Polyas 4 steg.', solution: '1) Forstå: Les oppgaven nøye, identifiser hva du vet og hva du skal finne. 2) Plan: Velg en strategi (formel, tegning, tabell). 3) Gjennomfør: Utfør planen systematisk. 4) Se tilbake: Kontroller svaret og vurder om det er rimelig.' },
              { label: 'f', task: 'Ville et rektangel med $l = 7$ og $b = 5$ gitt et større areal? Begrunn.', solution: 'Nei: $A = 7 \\cdot 5 = 35 < 36$. Kvadratet ($6 \\times 6$) gir alltid størst areal for en gitt omkrets.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Polyas 4 steg: 1) Forstå problemet, 2) Lag en plan, 3) Gjennomfør planen, 4) Se tilbake.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-12-2-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-12-2-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Sett opp likninger for å løse tekstoppgaver.',
            subTasks: [
              { label: 'a', task: 'Summen av to tall er $50$ og det ene tallet er $3$ ganger det andre. Sett opp en likning og finn tallene.', solution: 'La $x$ være det minste. $x + 3x = 50 \\Rightarrow 4x = 50 \\Rightarrow x = 12{,}5$. Tallene er $12{,}5$ og $37{,}5$.' },
              { label: 'b', task: 'En rektangulær hage har omkrets $40$ m. Lengden er $4$ m mer enn bredden. Finn dimensjonene.', solution: 'La bredden $= b$. Lengden $= b + 4$. $2(b + b + 4) = 40 \\Rightarrow 2(2b + 4) = 40 \\Rightarrow 2b + 4 = 20 \\Rightarrow b = 8$. Bredde: $8$ m, lengde: $12$ m.' },
              { label: 'c', task: 'Kontroller svaret i b): stemmer omkretsen?', solution: '$2 \\cdot 8 + 2 \\cdot 12 = 16 + 24 = 40$ m. Stemmer.' },
              { label: 'd', task: 'En bussbillett koster $x$ kr. En barnebillett koster halvparten. En familie med $2$ voksne og $3$ barn betaler $350$ kr. Finn prisen for en voksenbillett.', solution: '$2x + 3 \\cdot \\frac{x}{2} = 350 \\Rightarrow 2x + 1{,}5x = 350 \\Rightarrow 3{,}5x = 350 \\Rightarrow x = 100$ kr.' },
              { label: 'e', task: 'Tre venner deler en regning. Den ene betaler dobbelt så mye som hver av de to andre. Totalt er regningen $800$ kr. Hvor mye betaler hver?', solution: 'La hver av de to betale $x$. Den tredje betaler $2x$. $x + x + 2x = 800 \\Rightarrow 4x = 800 \\Rightarrow x = 200$. To betaler $200$ kr hver, én betaler $400$ kr.' },
              { label: 'f', task: 'Kontroller svaret i e): er summen riktig?', solution: '$200 + 200 + 400 = 800$ kr. Stemmer.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['La den ukjente være $x$, oversett teksten til en likning, og løs.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-12-2-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-12-2-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Bruk strategien «jobbe baklengs».',
            subTasks: [
              { label: 'a', task: 'Etter at Lise brukte $\\frac{1}{3}$ av pengene sine, hadde hun $200$ kr igjen. Hvor mye hadde hun fra starten?', solution: 'Hun har $\\frac{2}{3}$ igjen: $\\frac{2}{3} \\cdot x = 200 \\Rightarrow x = 200 \\cdot \\frac{3}{2} = 300$ kr.' },
              { label: 'b', task: 'Et tall ble ganget med $4$ og deretter lagt til $7$. Resultatet ble $35$. Hva var det opprinnelige tallet?', solution: 'Baklengs: $(35 - 7) \\div 4 = 28 \\div 4 = 7$. Kontroll: $7 \\cdot 4 + 7 = 35$. Stemmer.' },
              { label: 'c', task: 'En pris ble først økt med $20\\%$ og deretter redusert med $10\\%$. Sluttsummen er $540$ kr. Hva var den opprinnelige prisen?', solution: 'Baklengs: Før $10\\%$ rabatt: $\\frac{540}{0{,}9} = 600$. Før $20\\%$ økning: $\\frac{600}{1{,}2} = 500$ kr.' },
              { label: 'd', task: 'Kontroller svaret i c): $500$ kr $+ 20\\%$ $- 10\\%$ = ?', solution: '$500 \\cdot 1{,}2 = 600$. $600 \\cdot 0{,}9 = 540$ kr. Stemmer.' },
              { label: 'e', task: 'Et tall ble delt på $3$, deretter ble det lagt til $8$, og til slutt ganget med $2$. Resultatet er $26$. Finn tallet.', solution: 'Baklengs: $26 \\div 2 = 13$. $13 - 8 = 5$. $5 \\cdot 3 = 15$. Kontroll: $\\frac{15}{3} + 8 = 5 + 8 = 13$, $13 \\cdot 2 = 26$. Stemmer.' },
              { label: 'f', task: 'Forklar med egne ord når strategien «jobbe baklengs» er nyttig.', solution: 'Det er nyttig når du kjenner sluttresultatet og skal finne startverdien. Du gjør operasjonene i omvendt rekkefølge med de inverse operasjonene (legge til → trekke fra, gange → dele, osv.).' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Start med svaret og gjør operasjonene i omvendt rekkefølge. Husk å bruke inverse operasjoner.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-12-2-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-12-2-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Løs problemer med systematisk prøving.',
            subTasks: [
              { label: 'a', task: 'Finn to tall der summen er $20$ og produktet er $96$.', solution: 'Prøver: $8 \\cdot 12 = 96$ og $8 + 12 = 20$. Svar: $8$ og $12$.' },
              { label: 'b', task: 'Et rektangel har areal $72 \\text{ cm}^2$ og omkrets $34$ cm. Finn sidelengdene.', solution: '$l \\cdot b = 72$ og $2l + 2b = 34$, altså $l + b = 17$. Prøver: $l = 8, b = 9$: $8 \\cdot 9 = 72$ og $8 + 9 = 17$. Svar: $8$ cm og $9$ cm.' },
              { label: 'c', task: 'Finn tre påfølgende heltall der summen er $99$.', solution: 'La tallene være $n-1, n, n+1$. Summen: $3n = 99 \\Rightarrow n = 33$. Tallene er $32, 33, 34$.' },
              { label: 'd', task: 'En skoleklasse kjøper $x$ bøker til $45$ kr stykket og $y$ penner til $15$ kr stykket. Totalt bruker de $600$ kr og kjøper $20$ ting. Finn $x$ og $y$.', solution: '$45x + 15y = 600$ og $x + y = 20$. Fra likning 2: $y = 20 - x$. Innsatt: $45x + 15(20 - x) = 600 \\Rightarrow 45x + 300 - 15x = 600 \\Rightarrow 30x = 300 \\Rightarrow x = 10$. $y = 10$.' },
              { label: 'e', task: 'Kontroller svaret i d).', solution: '$10 \\cdot 45 + 10 \\cdot 15 = 450 + 150 = 600$ kr og $10 + 10 = 20$ ting. Stemmer.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Systematisk prøving: lag en tabell og prøv verdier på en ordnet måte. Alternativt kan du sette opp likninger.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-12-2-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-12-2-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Del opp sammensatte problemer i delproblemer.',
            subTasks: [
              { label: 'a', task: 'Et rom er $5$ m langt, $4$ m bredt og $2{,}5$ m høyt. Rommet har $2$ vinduer ($1{,}2 \\times 1{,}0$ m hver) og $1$ dør ($2{,}0 \\times 0{,}9$ m). Finn arealet av veggene (uten vinduer og dør).', solution: 'Total veggflate: $2(5 \\cdot 2{,}5) + 2(4 \\cdot 2{,}5) = 25 + 20 = 45 \\text{ m}^2$. Vinduer: $2 \\cdot 1{,}2 \\cdot 1{,}0 = 2{,}4 \\text{ m}^2$. Dør: $2{,}0 \\cdot 0{,}9 = 1{,}8 \\text{ m}^2$. Netto: $45 - 2{,}4 - 1{,}8 = 40{,}8 \\text{ m}^2$' },
              { label: 'b', task: '$1$ liter maling dekker $8 \\text{ m}^2$ og rommet skal males med $2$ strøk. Hvor mange liter maling trengs?', solution: '$\\frac{40{,}8 \\cdot 2}{8} = \\frac{81{,}6}{8} = 10{,}2$ liter. Du trenger $11$ liter (runder opp).' },
              { label: 'c', task: 'Malingen selges i $3$-liters bokser til $189$ kr og $1$-liters bokser til $79$ kr. Hva er billigst for $11$ liter?', solution: '$3$ store + $2$ små: $3 \\cdot 189 + 2 \\cdot 79 = 567 + 158 = 725$ kr (gir $11$ L). $4$ store: $4 \\cdot 189 = 756$ kr (gir $12$ L). Billigst: $3$ store + $2$ små = $725$ kr.' },
              { label: 'd', task: 'Identifiser delproblemene du løste i a)-c).', solution: '1) Beregn veggarealet. 2) Trekk fra vinduer og dør. 3) Beregn mengde maling med strøk. 4) Finn billigste innkjøp.' },
              { label: 'e', task: 'Hva ville totalkostnaden vært hvis rommet bare trengte $1$ strøk?', solution: 'Trengs $\\frac{40{,}8}{8} = 5{,}1$ liter, altså $6$ liter. $2$ store: $2 \\cdot 189 = 378$ kr (gir $6$ L). Alternativt $1$ stor + $3$ små: $189 + 237 = 426$ kr. Billigst: $2$ store = $378$ kr.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Bryt problemet ned: finn først totalflaten, trekk fra hull, beregn mengde, finn pris.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-12-2-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-12-2-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Sammensatt problemløsning med flere strategier.',
            subTasks: [
              { label: 'a', task: 'En bonde har $120$ m gjerde og vil lage to like store rektangulære innhegninger side om side (de deler en felles vegg). Sett opp uttrykket for totalarealet $A$ av begge innhegningene uttrykt med bare bredden $b$.', solution: 'La bredden (felles retning) $= b$ og lengden (to like, delt av fellesvegg) $= l$. Gjerde: $3b + 2l = 120 \\Rightarrow l = \\frac{120 - 3b}{2}$. Totalt areal: $A = 2 \\cdot l \\cdot b = 2b \\cdot \\frac{120 - 3b}{2} = b(120 - 3b) = 120b - 3b^2$' },
              { label: 'b', task: 'Bruk systematisk prøving (tabell) med $b = 10, 15, 20, 25$ for å finne omtrent hvilken $b$ som gir størst areal.', solution: '$b = 10: A = 900$, $b = 15: A = 1125$, $b = 20: A = 1200$, $b = 25: A = 1125$. Størst areal ved $b = 20$.' },
              { label: 'c', task: 'Finn det nøyaktige svaret. Hva er $l$ og hva er totalarealet?', solution: '$b = 20$ m, $l = \\frac{120 - 60}{2} = 30$ m. $A = 2 \\cdot 30 \\cdot 20 = 1200 \\text{ m}^2$.' },
              { label: 'd', task: 'Kontroller at gjerdelengden stemmer.', solution: '$3 \\cdot 20 + 2 \\cdot 30 = 60 + 60 = 120$ m. Stemmer.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Tegn en figur med to rektangler som deler en vegg. Tell opp antall gjerdeseksjoner: 3 bredder og 2 lengder.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
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
    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '9-12-3-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '9-12-3-rep-1',
          type: 'exercise',
          exercise: {
            id: '9-12-3-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Tallregning og brøk (tentamenstype Del 1).',
            subTasks: [
              { label: 'a', task: 'Regn ut $\\frac{2}{3} + \\frac{3}{4}$.', solution: '$\\frac{2}{3} + \\frac{3}{4} = \\frac{8}{12} + \\frac{9}{12} = \\frac{17}{12} = 1\\frac{5}{12}$' },
              { label: 'b', task: 'Regn ut $\\frac{5}{6} \\cdot \\frac{3}{10}$.', solution: '$\\frac{5}{6} \\cdot \\frac{3}{10} = \\frac{15}{60} = \\frac{1}{4}$' },
              { label: 'c', task: 'Regn ut $\\frac{7}{8} \\div \\frac{1}{4}$.', solution: '$\\frac{7}{8} \\div \\frac{1}{4} = \\frac{7}{8} \\cdot \\frac{4}{1} = \\frac{28}{8} = \\frac{7}{2} = 3{,}5$' },
              { label: 'd', task: 'Regn ut $(-3) \\cdot (-5) + (-2) \\cdot 4$.', solution: '$(-3)(-5) + (-2)(4) = 15 + (-8) = 7$' },
              { label: 'e', task: 'Skriv $0{,}375$ som brøk og forkort.', solution: '$0{,}375 = \\frac{375}{1000} = \\frac{3}{8}$' },
              { label: 'f', task: 'Regn ut $2^3 \\cdot 3^2 - 4^2$.', solution: '$8 \\cdot 9 - 16 = 72 - 16 = 56$' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Fellesnevner for brøkaddisjon. Husk regnerekkefølgen: potens, multiplikasjon/divisjon, addisjon/subtraksjon.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-12-3-rep-2',
          type: 'exercise',
          exercise: {
            id: '9-12-3-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Prosent og prosentregning (tentamenstype Del 1).',
            subTasks: [
              { label: 'a', task: 'Finn $15\\%$ av $840$.', solution: '$0{,}15 \\cdot 840 = 126$' },
              { label: 'b', task: 'En vare kostet $600$ kr og er nå nedsatt med $30\\%$. Hva er salgsprisen?', solution: '$600 \\cdot 0{,}70 = 420$ kr' },
              { label: 'c', task: 'En vare kostet $500$ kr og selges nå for $425$ kr. Hvor mange prosent er rabatten?', solution: '$\\frac{500 - 425}{500} \\cdot 100\\% = \\frac{75}{500} \\cdot 100\\% = 15\\%$' },
              { label: 'd', task: 'Hva er vekstfaktoren ved $8\\%$ økning?', solution: '$1 + \\frac{8}{100} = 1{,}08$' },
              { label: 'e', task: 'Et beløp øker fra $2000$ kr til $2300$ kr. Finn den prosentvise økningen.', solution: '$\\frac{2300 - 2000}{2000} \\cdot 100\\% = \\frac{300}{2000} \\cdot 100\\% = 15\\%$' },
              { label: 'f', task: 'Et lån på $100\\,000$ kr har $5\\%$ rente per år. Hva er lånet verdt etter $2$ år (uten avdrag)?', solution: '$100\\,000 \\cdot 1{,}05^2 = 100\\,000 \\cdot 1{,}1025 = 110\\,250$ kr' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Prosentandel: del på 100 og gang med beløpet. Vekstfaktor: $1 + \\frac{p}{100}$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-12-3-rep-3',
          type: 'exercise',
          exercise: {
            id: '9-12-3-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Algebra og likninger (tentamenstype Del 1).',
            subTasks: [
              { label: 'a', task: 'Løs likningen $3x + 7 = 22$.', solution: '$3x = 22 - 7 = 15 \\Rightarrow x = 5$' },
              { label: 'b', task: 'Løs likningen $2(x - 4) = 3x + 1$.', solution: '$2x - 8 = 3x + 1 \\Rightarrow -8 - 1 = 3x - 2x \\Rightarrow x = -9$' },
              { label: 'c', task: 'Forenkle uttrykket $3(2a + 4) - 2(a - 3)$.', solution: '$6a + 12 - 2a + 6 = 4a + 18$' },
              { label: 'd', task: 'Løs ulikheten $5x - 3 > 2x + 9$.', solution: '$3x > 12 \\Rightarrow x > 4$' },
              { label: 'e', task: 'Skriv som potens: $\\frac{a^5 \\cdot a^3}{a^2}$.', solution: '$\\frac{a^{5+3}}{a^2} = \\frac{a^8}{a^2} = a^{8-2} = a^6$' },
              { label: 'f', task: 'Faktoriser $6x^2 + 9x$.', solution: '$3x(2x + 3)$' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Flytt leddene med $x$ til én side og tallene til den andre. Husk å bytte fortegn når du flytter over likhetstegnet.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-12-3-rep-4',
          type: 'exercise',
          exercise: {
            id: '9-12-3-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Geometri (tentamenstype Del 2).',
            subTasks: [
              { label: 'a', task: 'Finn arealet av en trekant med grunnlinje $12$ cm og høyde $7$ cm.', solution: '$A = \\frac{12 \\cdot 7}{2} = 42 \\text{ cm}^2$' },
              { label: 'b', task: 'En sirkel har diameter $10$ cm. Finn omkretsen.', solution: '$O = \\pi d = 10\\pi \\approx 31{,}4$ cm' },
              { label: 'c', task: 'Finn volumet av en sylinder med radius $4$ cm og høyde $15$ cm.', solution: '$V = \\pi r^2 h = \\pi \\cdot 16 \\cdot 15 = 240\\pi \\approx 754 \\text{ cm}^3$' },
              { label: 'd', task: 'En rettvinklet trekant har kateter $5$ cm og $12$ cm. Finn hypotenusen.', solution: '$c = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$ cm' },
              { label: 'e', task: 'En kube har volum $216 \\text{ cm}^3$. Finn sidelengden og overflatearealet.', solution: '$s = \\sqrt[3]{216} = 6$ cm. Overflate: $6 \\cdot 6^2 = 216 \\text{ cm}^2$.' },
              { label: 'f', task: 'Alle mål i kuben fra e) tredobles. Hva blir det nye volumet?', solution: '$V_{\\text{ny}} = 3^3 \\cdot 216 = 27 \\cdot 216 = 5832 \\text{ cm}^3$' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Bruk formelsamlingen på Del 2. Vis mellomregning for å sikre delpoeng.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-12-3-rep-5',
          type: 'exercise',
          exercise: {
            id: '9-12-3-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Statistikk og sannsynlighet (tentamenstype Del 2).',
            subTasks: [
              { label: 'a', task: 'Datasett: $4, \\; 7, \\; 2, \\; 9, \\; 3, \\; 7, \\; 5$. Finn gjennomsnittet.', solution: '$\\bar{x} = \\frac{4 + 7 + 2 + 9 + 3 + 7 + 5}{7} = \\frac{37}{7} \\approx 5{,}29$' },
              { label: 'b', task: 'Finn medianen i datasettet fra a).', solution: 'Sortert: $2, 3, 4, 5, 7, 7, 9$. Median (verdi 4): $5$.' },
              { label: 'c', task: 'Finn typetallet i datasettet fra a).', solution: '$7$ (forekommer $2$ ganger, alle andre forekommer $1$ gang).' },
              { label: 'd', task: 'Du kaster en terning $2$ ganger. Hva er sannsynligheten for å få summen $10$ eller mer?', solution: 'Gunstige utfall: $(4,6), (5,5), (5,6), (6,4), (6,5), (6,6)$ = $6$ utfall. $P = \\frac{6}{36} = \\frac{1}{6} \\approx 0{,}167$' },
              { label: 'e', task: 'En pose har $4$ røde og $6$ blå kuler. Du trekker $1$ kule. Hva er sannsynligheten for rød?', solution: '$P(\\text{rød}) = \\frac{4}{10} = \\frac{2}{5} = 0{,}4$' },
              { label: 'f', task: 'Du trekker $2$ kuler uten tilbakelegging fra posen i e). Hva er sannsynligheten for at begge er blå?', solution: '$P = \\frac{6}{10} \\cdot \\frac{5}{9} = \\frac{30}{90} = \\frac{1}{3} \\approx 0{,}333$' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Sorter dataene for å finne medianen. Ved trekking uten tilbakelegging endres nevneren for hvert trekk.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '9-12-3-rep-6',
          type: 'exercise',
          exercise: {
            id: '9-12-3-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Sammensatt tekstoppgave (tentamenstype Del 2).',
            subTasks: [
              { label: 'a', task: 'En familie planlegger å bygge et sirkelformet svømmebasseng med radius $3$ m omgitt av en $1$ m bred flislagt gang rundt hele bassenget. Finn arealet av vannflaten.', solution: '$A_{\\text{vann}} = \\pi \\cdot 3^2 = 9\\pi \\approx 28{,}3 \\text{ m}^2$' },
              { label: 'b', task: 'Finn arealet av flisene (gangarealet rundt bassenget).', solution: '$A_{\\text{total}} = \\pi \\cdot 4^2 = 16\\pi$. $A_{\\text{flis}} = 16\\pi - 9\\pi = 7\\pi \\approx 22{,}0 \\text{ m}^2$' },
              { label: 'c', task: 'Bassenget er $1{,}5$ m dypt. Beregn volumet av vann i liter. ($1 \\text{ m}^3 = 1000$ liter.)', solution: '$V = \\pi \\cdot 3^2 \\cdot 1{,}5 = 13{,}5\\pi \\approx 42{,}41 \\text{ m}^3 = 42\\,410$ liter.' },
              { label: 'd', task: 'Flisene koster $350$ kr per $\\text{m}^2$ inkludert legging. Hva blir totalkostnaden for flislegging? Avrund opp til nærmeste hele $\\text{m}^2$.', solution: '$7\\pi \\approx 22{,}0 \\text{ m}^2$. Runder opp til $22 \\text{ m}^2$. Kostnad: $22 \\cdot 350 = 7\\,700$ kr.' },
            ],
            solution: 'Se deloppgavene.',
            hideInlineSolution: true,
            hints: ['Del oppgaven i steg: finn arealer, beregn volum, konverter enheter, finn pris. Vis all mellomregning for å sikre delpoeng.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
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
