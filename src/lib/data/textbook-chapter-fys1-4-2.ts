/**
 * Fysikk 1 - Kapittel 4.2: Potensiell energi og energibevaring
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_4_2: TextbookChapter = {
  id: 'fys1-4-2',
  courseId: 'fys1',
  chapterNumber: '4.2',
  title: 'Potensiell energi og energibevaring',
  description: 'Lær om gravitasjonell og elastisk potensiell energi, mekanisk energibevaring, og konservative krefter.',
  estimatedMinutes: 60,
  competenceGoals: [
    'definere og beregne gravitasjonell potensiell energi',
    'definere og beregne elastisk potensiell energi',
    'anvende prinsippet om mekanisk energibevaring',
    'skille mellom konservative og ikke-konservative krefter',
  ],
  content: [
    {
      id: 'fys1-4-2-intro',
      type: 'text',
      content: `# Potensiell energi og energibevaring

Tenk deg en stein på toppen av et fjell. Selv om steinen ligger stille, har den potensiell til å utføre arbeid hvis den faller ned. Denne energien kaller vi **potensiell energi**.

**Nøkkelspørsmål:**
- Hva er potensiell energi?
- Hvordan endres energi mellom forskjellige former?
- Når bevares den totale mekaniske energien?

I dette kapittelet skal vi se på to typer potensiell energi:
1. **Gravitasjonell potensiell energi** (på grunn av høyde)
2. **Elastisk potensiell energi** (på grunn av sammentrykning/strekking)`,
    },
    {
      id: 'fys1-4-2-gravitasjonell',
      type: 'text',
      content: `# Gravitasjonell potensiell energi

Når du løfter et objekt, utfører du arbeid mot tyngdekraften. Dette arbeidet lagres som **gravitasjonell potensiell energi**.`,
    },
    {
      id: 'fys1-4-2-def-gravitasjonell',
      type: 'definition',
      title: 'Gravitasjonell potensiell energi',
      content: 'Den gravitasjonelle potensielle energien $E_p$ til et objekt med masse $m$ på høyde $h$ over et referansenivå er:\n\n$$E_p = mgh$$\n\nder $g = 9.81$ m/s² er tyngdeakselerasjonen.\n\n**Enhet:** Joule (J)\n\n**Viktig:** Referansenivået (hvor $h = 0$) kan velges fritt. Kun **endringer** i potensiell energi har fysisk betydning.',
    },
    {
      id: 'fys1-4-2-gravitasjonell-forklaring',
      type: 'text',
      content: `## Forståelse av formelen

### Utledning

Når vi løfter et objekt med masse $m$ en høyde $h$ med konstant hastighet, må vi utøve en kraft lik tyngdekraften:

$$F = mg$$

Arbeidet vi utfører er:

$$W = F \\cdot h = mgh$$

Dette arbeidet lagres som potensiell energi:

$$E_p = mgh$$

### Referansenivå

Potensiell energi måles alltid **i forhold til et valgt referansenivå**. Du kan velge referansenivået fritt:

**Eksempel:** En bok på et bord 1 m over gulvet.

- Hvis gulvet er referansenivå: $E_p = mg \\cdot 1$ m
- Hvis bordet er referansenivå: $E_p = 0$ J
- Hvis kjellergulvet (1 m under gulvet) er referansenivå: $E_p = mg \\cdot 2$ m

**Viktig:** Det som betyr noe fysisk er **endringer** i potensiell energi, ikke den absolutte verdien.

### Endring i potensiell energi

Når et objekt endrer høyde fra $h_1$ til $h_2$:

$$\\Delta E_p = E_{p,2} - E_{p,1} = mgh_2 - mgh_1 = mg(h_2 - h_1) = mg\\Delta h$$

Denne endringen er uavhengig av valg av referansenivå!`,
    },
    {
      id: 'fys1-4-2-ex-1',
      type: 'example',
      title: 'Eksempel: Beregning av potensiell energi',
      problem: 'En stein med masse 2.0 kg ligger på toppen av en klippe 50 m over havet. Beregn steinens potensielle energi hvis:\na) Havoverflaten er referansenivå\nb) Bunnen av klippen er referansenivå\nc) Steinens endring i potensiell energi hvis den faller 20 m',
      solution: `**Gitt:**
- Masse: $m = 2.0$ kg
- Høyde over havet: $h = 50$ m
- $g = 9.81$ m/s²

**a) Havoverflaten som referanse:**

$$E_p = mgh = 2.0 \\cdot 9.81 \\cdot 50 = 981 \\text{ J}$$

**Svar a):** 981 J

**b) Bunnen av klippen som referanse:**

$$E_p = mgh = 2.0 \\cdot 9.81 \\cdot 0 = 0 \\text{ J}$$

**Svar b):** 0 J

**c) Endring i potensiell energi ved fall 20 m:**

Uavhengig av referansenivå:

$$\\Delta E_p = mg\\Delta h = 2.0 \\cdot 9.81 \\cdot (-20) = -392.4 \\text{ J}$$

(Negativ fordi høyden synker)

**Svar c):** -392 J (eller: Energien synker med 392 J)

**Tolkning:** Den absolutte verdien av potensiell energi avhenger av referansenivået, men **endringen** er alltid den samme!`,
    },
    {
      id: 'fys1-4-2-elastisk',
      type: 'text',
      content: `# Elastisk potensiell energi

Når du strekker eller komprimerer en fjær, utfører du arbeid. Dette arbeidet lagres som **elastisk potensiell energi** i fjæren.

## Hookes lov

For en ideal fjær er kraften proporsjonal med utstrekningen:

$$F = kx$$

der:
- $F$ er kraften som strekker/komprimerer fjæren (N)
- $k$ er fjærkonstanten (N/m) - et mål på hvor "stiv" fjæren er
- $x$ er utstrekningen fra likevektslengden (m)`,
    },
    {
      id: 'fys1-4-2-def-elastisk',
      type: 'definition',
      title: 'Elastisk potensiell energi',
      content: `Den elastiske potensielle energien $E_p$ i en fjær med fjærkonstant $k$ som er strukket/komprimert en distanse $x$ fra likevektslengden er:

$$E_p = \\frac{1}{2}kx^2$$

**Enhet:** Joule (J)

**Kjennetegn:**
- Avhenger kvadratisk av utstrekningen
- Alltid positiv (samme for strekk og kompresjon)
- Null når fjæren er i likevekt ($x = 0$)`,
    },
    {
      id: 'fys1-4-2-elastisk-forklaring',
      type: 'text',
      content: `## Utledning av formelen

Når vi strekker en fjær fra $x = 0$ til $x = x_0$, varierer kraften fra 0 til $kx_0$.

**Gjennomsnittskraft:**

$$F_{gjennomsnitt} = \\frac{0 + kx_0}{2} = \\frac{kx_0}{2}$$

**Arbeid utført:**

$$W = F_{gjennomsnitt} \\cdot x_0 = \\frac{kx_0}{2} \\cdot x_0 = \\frac{1}{2}kx_0^2$$

Dette arbeidet lagres som elastisk potensiell energi.

## Fjærkonstanten

**Fjærkonstanten $k$** måler hvor stiv fjæren er:

- **Stor $k$:** Stiv fjær (vanskelig å strekke)
- **Liten $k$:** Myk fjær (lett å strekke)

**Enhet:** N/m (Newton per meter)

**Eksempler:**
- Bildempere: $k \\approx 20\\,000$ N/m
- Vanlig spiralfjær: $k \\approx 100$ N/m
- Myk fjær: $k \\approx 10$ N/m`,
    },
    {
      id: 'fys1-4-2-ex-2',
      type: 'example',
      title: 'Eksempel: Elastisk potensiell energi',
      problem: 'En fjær med fjærkonstant 200 N/m komprimeres 15 cm.\na) Hvor stor kraft må til for å holde fjæren komprimert?\nb) Hvor stor er den elastiske potensielle energien?',
      solution: `**Gitt:**
- Fjærkonstant: $k = 200$ N/m
- Kompresjon: $x = 15$ cm = 0.15 m

**a) Kraft for å holde fjæren komprimert:**

Fra Hookes lov:

$$F = kx = 200 \\cdot 0.15 = 30 \\text{ N}$$

**Svar a):** 30 N

**b) Elastisk potensiell energi:**

$$E_p = \\frac{1}{2}kx^2 = \\frac{1}{2} \\cdot 200 \\cdot (0.15)^2$$

$$E_p = 100 \\cdot 0.0225 = 2.25 \\text{ J}$$

**Svar b):** 2.25 J

**Tolkning:** Hvis fjæren slippes, vil denne energien overføres til kinetisk energi.`,
    },
    {
      id: 'fys1-4-2-mekanisk-energi',
      type: 'text',
      content: `# Mekanisk energi og energibevaring

**Mekanisk energi** er summen av kinetisk og potensiell energi:

$$E_{mek} = E_k + E_p$$

**Spørsmål:** Hva skjer med den mekaniske energien når objekter beveger seg?`,
    },
    {
      id: 'fys1-4-2-def-energibevaring',
      type: 'theorem',
      title: 'Prinsippet om mekanisk energibevaring',
      content: `Hvis bare konservative krefter virker på et system, er den totale mekaniske energien konstant:

$$E_{mek} = E_k + E_p = \\text{konstant}$$

eller

$$E_{k,1} + E_{p,1} = E_{k,2} + E_{p,2}$$

**Dette betyr:**
- Kinetisk energi kan omdannes til potensiell energi
- Potensiell energi kan omdannes til kinetisk energi
- Den totale mengden mekanisk energi forblir uendret`,
    },
    {
      id: 'fys1-4-2-energibevaring-forklaring',
      type: 'text',
      content: `## Forståelse av energibevaring

### Konservative krefter

En kraft er **konservativ** hvis arbeidet den utfører kun avhenger av start- og sluttposisjon, ikke av veien mellom dem.

**Eksempler på konservative krefter:**
- Gravitasjonskraft (tyngdekraft)
- Fjærkraft
- Elektrisk kraft (kommer i Fysikk 2)

**Egenskap:** For konservative krefter kan vi definere en potensiell energi.

### Ikke-konservative krefter

En kraft er **ikke-konservativ** hvis arbeidet avhenger av veien.

**Eksempler på ikke-konservative krefter:**
- Friksjon
- Luftmotstand
- Normal kraft (utfører vanligvis null arbeid)

**Egenskap:** Ikke-konservative krefter omdanner mekanisk energi til andre former (varme, lyd, deformasjon).

### Energibevaring med friksjon

Hvis friksjon er til stede, synker den mekaniske energien:

$$E_{mek,2} = E_{mek,1} - W_{friksjon}$$

eller

$$E_{k,2} + E_{p,2} = E_{k,1} + E_{p,1} - W_{friksjon}$$

Energien forsvinner ikke - den omdannes til varme!

### Total energibevaring

Den totale energien i universet er alltid bevart:

$$E_{total} = E_{mek} + E_{varme} + E_{lyd} + \\cdots = \\text{konstant}$$

Dette er **termodynamikkens første lov** (energibevaringsloven).`,
    },
    {
      id: 'fys1-4-2-ex-3',
      type: 'example',
      title: 'Eksempel: Fallende stein (mekanisk energibevaring)',
      problem: 'En stein med masse 0.50 kg slippes fra ro på en høyde av 20 m. Finn steinens fart rett før den treffer bakken. Ignorer luftmotstand.',
      solution: `**Gitt:**
- Masse: $m = 0.50$ kg
- Starthøyde: $h_1 = 20$ m
- Startfart: $v_1 = 0$ m/s
- Slutthøyde: $h_2 = 0$ m
- Ingen friksjon
- $g = 9.81$ m/s²

**Søkt:** Sluttfart $v_2$

**Løsning:**

Vi bruker mekanisk energibevaring:

$$E_{mek,1} = E_{mek,2}$$

$$E_{k,1} + E_{p,1} = E_{k,2} + E_{p,2}$$

**Situasjon 1 (topp):**
- $E_{k,1} = \\frac{1}{2}mv_1^2 = 0$ (i ro)
- $E_{p,1} = mgh_1 = 0.50 \\cdot 9.81 \\cdot 20 = 98.1$ J

**Situasjon 2 (bunn):**
- $E_{k,2} = \\frac{1}{2}mv_2^2$
- $E_{p,2} = mgh_2 = 0$ (referansenivå)

**Energibevaring:**

$$0 + 98.1 = \\frac{1}{2}mv_2^2 + 0$$

$$98.1 = \\frac{1}{2} \\cdot 0.50 \\cdot v_2^2$$

$$98.1 = 0.25 v_2^2$$

$$v_2^2 = \\frac{98.1}{0.25} = 392.4$$

$$v_2 = \\sqrt{392.4} = 19.8 \\text{ m/s}$$

**Svar:** Farten rett før bakken er 19.8 m/s (≈ 20 m/s).

**Alternativ metode (kinematikk):**

$$v^2 = v_0^2 + 2gh = 0 + 2 \\cdot 9.81 \\cdot 20 = 392.4$$
$$v = 19.8$$ m/s ✓

**Tolkning:** All potensiell energi (98.1 J) omdannes til kinetisk energi (98.1 J).`,
    },
    {
      id: 'fys1-4-2-ex-4',
      type: 'example',
      title: 'Eksempel: Pendel (energiomdanning)',
      problem: 'En pendel med masse 0.20 kg slippes fra ro i en høyde 0.50 m over det laveste punktet. Finn:\na) Pendulens fart i det laveste punktet\nb) Høyden når farten er 2.0 m/s',
      solution: `**Gitt:**
- Masse: $m = 0.20$ kg
- Starthøyde: $h_1 = 0.50$ m (over laveste punkt)
- Startfart: $v_1 = 0$ m/s
- $g = 9.81$ m/s²

**a) Fart i laveste punkt:**

**Situasjon 1 (start, høyt):**
- $E_{k,1} = 0$
- $E_{p,1} = mgh_1 = 0.20 \\cdot 9.81 \\cdot 0.50 = 0.981$ J

**Situasjon 2 (laveste punkt):**
- $E_{k,2} = \\frac{1}{2}mv_2^2$
- $E_{p,2} = 0$ (referansenivå)

**Energibevaring:**

$$E_{k,1} + E_{p,1} = E_{k,2} + E_{p,2}$$

$$0 + 0.981 = \\frac{1}{2} \\cdot 0.20 \\cdot v_2^2 + 0$$

$$0.981 = 0.10 v_2^2$$

$$v_2^2 = 9.81$$

$$v_2 = 3.13 \\text{ m/s}$$

**Svar a):** 3.1 m/s

**b) Høyde når farten er 2.0 m/s:**

**Situasjon 3 (underveis):**
- $E_{k,3} = \\frac{1}{2}mv_3^2 = \\frac{1}{2} \\cdot 0.20 \\cdot 2.0^2 = 0.40$ J
- $E_{p,3} = mgh_3 = 0.20 \\cdot 9.81 \\cdot h_3$

**Energibevaring:**

$$E_{k,1} + E_{p,1} = E_{k,3} + E_{p,3}$$

$$0 + 0.981 = 0.40 + 0.20 \\cdot 9.81 \\cdot h_3$$

$$0.981 = 0.40 + 1.962 h_3$$

$$0.581 = 1.962 h_3$$

$$h_3 = \\frac{0.581}{1.962} = 0.296 \\text{ m}$$

**Svar b):** 0.30 m

**Tolkning:** I en pendel skjer kontinuerlig omdanning mellom kinetisk og potensiell energi. Den totale mekaniske energien (0.981 J) forblir konstant.`,
    },
    {
      id: 'fys1-4-2-ex-5',
      type: 'example',
      title: 'Eksempel: Fjær og gravitasjon',
      problem: 'En kloss med masse 2.0 kg plasseres på en vertikal fjær med fjærkonstant 500 N/m. Klossen slippes fra ro når fjæren er ukomprimert. Hvor langt komprimeres fjæren før klossen stopper?',
      solution: `**Gitt:**
- Masse: $m = 2.0$ kg
- Fjærkonstant: $k = 500$ N/m
- Startfart: $v_1 = 0$ m/s
- Sluttfart: $v_2 = 0$ m/s
- $g = 9.81$ m/s²

**Søkt:** Maksimal kompresjon $x$

**Løsning:**

La referansenivået for gravitasjonell potensiell energi være der fjæren er maksimalt komprimert.

**Situasjon 1 (start, fjær ukomprimert):**
- $E_{k,1} = 0$ (i ro)
- $E_{p,grav,1} = mgx$ (høyde $x$ over referanse)
- $E_{p,elastisk,1} = 0$ (fjær ukomprimert)

**Situasjon 2 (bunn, fjær komprimert $x$):**
- $E_{k,2} = 0$ (stopper)
- $E_{p,grav,2} = 0$ (referansenivå)
- $E_{p,elastisk,2} = \\frac{1}{2}kx^2$

**Energibevaring:**

$$E_{k,1} + E_{p,grav,1} + E_{p,elastisk,1} = E_{k,2} + E_{p,grav,2} + E_{p,elastisk,2}$$

$$0 + mgx + 0 = 0 + 0 + \\frac{1}{2}kx^2$$

$$mgx = \\frac{1}{2}kx^2$$

Del med $x$ (siden $x \\neq 0$):

$$mg = \\frac{1}{2}kx$$

$$x = \\frac{2mg}{k} = \\frac{2 \\cdot 2.0 \\cdot 9.81}{500} = \\frac{39.24}{500} = 0.078 \\text{ m} = 7.8 \\text{ cm}$$

**Svar:** Fjæren komprimeres 7.8 cm.

**Tolkning:** Gravitasjonell potensiell energi omdannes til elastisk potensiell energi.`,
    },
    {
      id: 'fys1-4-2-med-friksjon',
      type: 'text',
      content: `# Energibevaring med friksjon

Når friksjon er til stede, omdannes mekanisk energi til varme. Den mekaniske energien synker.

**Modifisert energiligning:**

$$E_{mek,slutt} = E_{mek,start} - W_{friksjon}$$

eller

$$E_{k,slutt} + E_{p,slutt} = E_{k,start} + E_{p,start} - |W_{friksjon}|$$

**Viktig:** $W_{friksjon}$ er alltid negativ (mot bevegelsen), så vi trekker fra beløpet.`,
    },
    {
      id: 'fys1-4-2-ex-6',
      type: 'example',
      title: 'Eksempel: Sklie med friksjon',
      problem: 'En kjelke med masse 10 kg sklir ned en bakke med høyde 5.0 m. Friksjonen utfører -200 J arbeid. Finn kjelkens fart ved bunnen av bakken hvis den starter fra ro.',
      solution: `**Gitt:**
- Masse: $m = 10$ kg
- Høydeendring: $\\Delta h = 5.0$ m
- Arbeid fra friksjon: $W_f = -200$ J
- Startfart: $v_1 = 0$ m/s
- $g = 9.81$ m/s²

**Søkt:** Sluttfart $v_2$

**Løsning:**

**Situasjon 1 (topp):**
- $E_{k,1} = 0$
- $E_{p,1} = mgh = 10 \\cdot 9.81 \\cdot 5.0 = 490.5$ J

**Situasjon 2 (bunn):**
- $E_{k,2} = \\frac{1}{2}mv_2^2$
- $E_{p,2} = 0$

**Energiligning med friksjon:**

$$E_{k,2} + E_{p,2} = E_{k,1} + E_{p,1} + W_f$$

$$\\frac{1}{2}mv_2^2 + 0 = 0 + 490.5 - 200$$

$$\\frac{1}{2} \\cdot 10 \\cdot v_2^2 = 290.5$$

$$5v_2^2 = 290.5$$

$$v_2^2 = 58.1$$

$$v_2 = 7.62 \\text{ m/s}$$

**Svar:** Sluttfarten er 7.6 m/s.

**Uten friksjon:**

$$\\frac{1}{2}mv_2^2 = 490.5$$
$$v_2 = 9.91$$ m/s

**Tolkning:** Friksjonen "spiser" 200 J av de 490.5 J potensielle energien. Kun 290.5 J omdannes til kinetisk energi.`,
    },
    {
      id: 'fys1-4-2-oppsummering',
      type: 'note',
      title: 'Oppsummering',
      content: `**Gravitasjonell potensiell energi:**
- $E_p = mgh$
- Avhenger av høyde over referansenivå
- Kun endringer har fysisk betydning

**Elastisk potensiell energi:**
- $E_p = \\frac{1}{2}kx^2$
- Lagret i fjærer ved strekk/kompresjon
- Alltid positiv

**Mekanisk energibevaring:**
- $E_{mek} = E_k + E_p = \\text{konstant}$ (uten friksjon)
- Gjelder kun med konservative krefter
- Kontinuerlig omdanning mellom $E_k$ og $E_p$

**Med friksjon:**
- $E_{mek,slutt} = E_{mek,start} - W_{friksjon}$
- Mekanisk energi omdannes til varme

**Konservative krefter:**
- Gravitasjonskraft, fjærkraft
- Arbeid uavhengig av vei
- Kan definere potensiell energi

**Ikke-konservative krefter:**
- Friksjon, luftmotstand
- Arbeid avhenger av vei
- Omdanner mekanisk energi til varme`,
    },
  ],
  exercises: [
    {
      id: 'fys1-4-2-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Beregn den potensielle energien til en bok med masse 1.5 kg som ligger på et bord 0.80 m over gulvet. Bruk gulvet som referansenivå.',
      solution: `**Gitt:**
- Masse: $m = 1.5$ kg
- Høyde: $h = 0.80$ m
- $g = 9.81$ m/s²

**Løsning:**

$$E_p = mgh = 1.5 \\cdot 9.81 \\cdot 0.80 = 11.77 \\text{ J}$$

**Svar:** 12 J`,
      hints: ['Bruk $E_p = mgh$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-2-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'En fjær med fjærkonstant 150 N/m strekkes 20 cm. Beregn den elastiske potensielle energien.',
      solution: `**Gitt:**
- Fjærkonstant: $k = 150$ N/m
- Strekk: $x = 20$ cm = 0.20 m

**Løsning:**

$$E_p = \\frac{1}{2}kx^2 = \\frac{1}{2} \\cdot 150 \\cdot (0.20)^2$$

$$E_p = 75 \\cdot 0.04 = 3.0 \\text{ J}$$

**Svar:** 3.0 J`,
      hints: ['Bruk $E_p = \\frac{1}{2}kx^2$', 'Husk å konvertere cm til m'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-2-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'En ball med masse 0.40 kg slippes fra en høyde på 10 m. Finn ballens fart rett før den treffer bakken. Ignorer luftmotstand.',
      solution: `**Gitt:**
- Masse: $m = 0.40$ kg
- Høyde: $h = 10$ m
- $g = 9.81$ m/s²

**Løsning:**

Bruker energibevaring:

$$E_{p,start} = E_{k,slutt}$$

$$mgh = \\frac{1}{2}mv^2$$

Massen kansellerer:

$$gh = \\frac{1}{2}v^2$$

$$v^2 = 2gh = 2 \\cdot 9.81 \\cdot 10 = 196.2$$

$$v = \\sqrt{196.2} = 14.0 \\text{ m/s}$$

**Svar:** 14 m/s`,
      hints: ['Potensiell energi omdannes til kinetisk energi', 'Massen kansellerer'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-2-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'En person med masse 60 kg sklir ned en 8.0 m lang rutsjebane. Høydeforskjellen er 3.0 m. Personen starter fra ro og har farten 5.0 m/s ved bunnen. Hvor mye arbeid utfører friksjonen?',
      solution: `**Gitt:**
- Masse: $m = 60$ kg
- Høydeforskjell: $\\Delta h = 3.0$ m
- Startfart: $v_1 = 0$ m/s
- Sluttfart: $v_2 = 5.0$ m/s
- $g = 9.81$ m/s²

**Løsning:**

**Energi ved start:**
$$E_{mek,1} = E_{k,1} + E_{p,1} = 0 + mgh = 60 \\cdot 9.81 \\cdot 3.0 = 1765.8 \\text{ J}$$

**Energi ved slutt:**
$$E_{mek,2} = E_{k,2} + E_{p,2} = \\frac{1}{2}mv_2^2 + 0 = \\frac{1}{2} \\cdot 60 \\cdot 5.0^2 = 750 \\text{ J}$$

**Arbeid fra friksjon:**
$$W_f = E_{mek,2} - E_{mek,1} = 750 - 1765.8 = -1015.8 \\text{ J}$$

**Svar:** Friksjonen utfører -1016 J arbeid (eller: Friksjonen fjerner 1016 J energi).

**Tolkning:** Av de 1766 J potensielle energien omdannes 750 J til kinetisk energi, mens 1016 J omdannes til varme.`,
      hints: ['Beregn mekanisk energi før og etter', 'Differansen er arbeid fra friksjon'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-2-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'En pendel med lengde 1.5 m svinger. I det laveste punktet er farten 4.0 m/s. Hvor høyt stiger pendelen?',
      solution: `**Gitt:**
- Fart i laveste punkt: $v = 4.0$ m/s
- $g = 9.81$ m/s²

**Søkt:** Høyde $h$ over laveste punkt

**Løsning:**

I laveste punkt: Kun kinetisk energi
I høyeste punkt: Kun potensiell energi

Energibevaring:

$$E_{k,bunn} = E_{p,topp}$$

$$\\frac{1}{2}mv^2 = mgh$$

Massen kansellerer:

$$\\frac{1}{2}v^2 = gh$$

$$h = \\frac{v^2}{2g} = \\frac{4.0^2}{2 \\cdot 9.81} = \\frac{16}{19.62} = 0.82 \\text{ m}$$

**Svar:** Pendelen stiger 0.82 m over laveste punkt.`,
      hints: ['I høyeste punkt er farten null', 'All kinetisk energi omdannes til potensiell energi'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-2-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'En fjær med fjærkonstant 400 N/m komprimeres 25 cm. En kule med masse 0.10 kg plasseres mot fjæren og slippes. Finn kulens fart når fjæren er tilbake i likevektsposisjon.',
      solution: `**Gitt:**
- Fjærkonstant: $k = 400$ N/m
- Kompresjon: $x = 25$ cm = 0.25 m
- Masse: $m = 0.10$ kg

**Løsning:**

**Start (fjær komprimert):**
$$E_{p,elastisk} = \\frac{1}{2}kx^2 = \\frac{1}{2} \\cdot 400 \\cdot (0.25)^2 = 200 \\cdot 0.0625 = 12.5 \\text{ J}$$
$$E_k = 0$$

**Slutt (fjær i likevekt):**
$$E_{p,elastisk} = 0$$
$$E_k = \\frac{1}{2}mv^2$$

**Energibevaring:**

$$\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2$$

$$kx^2 = mv^2$$

$$v^2 = \\frac{kx^2}{m} = \\frac{400 \\cdot (0.25)^2}{0.10} = \\frac{400 \\cdot 0.0625}{0.10} = \\frac{25}{0.10} = 250$$

$$v = \\sqrt{250} = 15.8 \\text{ m/s}$$

**Svar:** Kulens fart er 15.8 m/s (≈ 16 m/s).`,
      hints: ['Elastisk potensiell energi omdannes til kinetisk energi', 'Fjæren er i likevekt når $x = 0$'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-2-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'medium',
      task: 'En rutsjebane har en høydeforskjell på 12 m. En vogn med masse 300 kg starter fra ro øverst og har farten 10 m/s ved bunnen. Hvor mye energi er tapt til friksjon og luftmotstand?',
      solution: `**Gitt:**
- Masse: $m = 300$ kg
- Høydeforskjell: $h = 12$ m
- Startfart: $v_1 = 0$ m/s
- Sluttfart: $v_2 = 10$ m/s
- $g = 9.81$ m/s²

**Løsning:**

**Energi ved start:**
$$E_{start} = mgh = 300 \\cdot 9.81 \\cdot 12 = 35\\,316 \\text{ J}$$

**Energi ved slutt:**
$$E_{slutt} = \\frac{1}{2}mv_2^2 = \\frac{1}{2} \\cdot 300 \\cdot 10^2 = 150 \\cdot 100 = 15\\,000 \\text{ J}$$

**Energi tapt:**
$$E_{tapt} = E_{start} - E_{slutt} = 35\\,316 - 15\\,000 = 20\\,316 \\text{ J}$$

**Svar:** 20 kJ (20 316 J) er tapt til friksjon og luftmotstand.

**Tolkning:** Av de 35.3 kJ potensielle energien omdannes 15 kJ til kinetisk energi (42%), mens 20.3 kJ (58%) omdannes til varme.`,
      hints: ['Finn potensiell energi ved start', 'Finn kinetisk energi ved slutt', 'Differansen er tapt energi'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-2-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En kule med masse 0.50 kg kastes vertikalt oppover med starthastighet 15 m/s fra bakkenivå.\na) Hvor høyt stiger kulen?\nb) Hvor stor er farten når kulen er på høyde 5.0 m på vei opp?\nc) Hvor stor er farten når kulen er på høyde 5.0 m på vei ned?',
      solution: `**Gitt:**
- Masse: $m = 0.50$ kg
- Startfart: $v_0 = 15$ m/s
- $g = 9.81$ m/s²

**a) Maksimal høyde:**

I høyeste punkt: $v = 0$

Energibevaring:

$$E_{k,start} = E_{p,maks}$$

$$\\frac{1}{2}mv_0^2 = mgh_{maks}$$

$$h_{maks} = \\frac{v_0^2}{2g} = \\frac{15^2}{2 \\cdot 9.81} = \\frac{225}{19.62} = 11.47 \\text{ m}$$

**Svar a):** 11.5 m

**b) Fart på vei opp ved 5.0 m:**

$$\\frac{1}{2}mv_0^2 = \\frac{1}{2}mv^2 + mgh$$

$$\\frac{1}{2}v_0^2 = \\frac{1}{2}v^2 + gh$$

$$v^2 = v_0^2 - 2gh = 15^2 - 2 \\cdot 9.81 \\cdot 5.0 = 225 - 98.1 = 126.9$$

$$v = \\sqrt{126.9} = 11.3 \\text{ m/s}$$

**Svar b):** 11.3 m/s

**c) Fart på vei ned ved 5.0 m:**

Energibevaring er uavhengig av retningen. Samme beregning:

$$v = 11.3 \\text{ m/s}$$

**Svar c):** 11.3 m/s

**Tolkning:** Farten er den samme på vei opp og på vei ned ved samme høyde (hvis vi ignorerer luftmotstand). Kun retningen er forskjellig.`,
      hints: ['I høyeste punkt er farten null', 'Bruk energibevaring for alle deler'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-2-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En loddrett fjær med fjærkonstant 800 N/m er festet i gulvet. En kule med masse 2.0 kg slippes fra en høyde på 0.50 m over den ukomprimerte fjæren. Hvor langt komprimeres fjæren maksimalt?',
      solution: `**Gitt:**
- Fjærkonstant: $k = 800$ N/m
- Masse: $m = 2.0$ kg
- Fallhøyde: $h = 0.50$ m
- $g = 9.81$ m/s²

**Søkt:** Maksimal kompresjon $x$

**Løsning:**

La referansenivået være der fjæren er maksimalt komprimert.

**Start (høyde $h + x$ over referanse):**
- $E_{k,start} = 0$ (slippes fra ro)
- $E_{p,grav,start} = mg(h + x)$
- $E_{p,elastisk,start} = 0$ (fjær ukomprimert)

**Slutt (referansenivå):**
- $E_{k,slutt} = 0$ (stopper)
- $E_{p,grav,slutt} = 0$
- $E_{p,elastisk,slutt} = \\frac{1}{2}kx^2$

**Energibevaring:**

$$mg(h + x) = \\frac{1}{2}kx^2$$

$$mgh + mgx = \\frac{1}{2}kx^2$$

$$\\frac{1}{2}kx^2 - mgx - mgh = 0$$

Dette er en andregradsligning i $x$:

$$\\frac{k}{2}x^2 - mgx - mgh = 0$$

$$400x^2 - (2.0 \\cdot 9.81)x - (2.0 \\cdot 9.81 \\cdot 0.50) = 0$$

$$400x^2 - 19.62x - 9.81 = 0$$

Bruker abc-formelen:

$$x = \\frac{19.62 \\pm \\sqrt{19.62^2 + 4 \\cdot 400 \\cdot 9.81}}{2 \\cdot 400}$$

$$x = \\frac{19.62 \\pm \\sqrt{385.0 + 15\\,696}}{800}$$

$$x = \\frac{19.62 \\pm \\sqrt{16\\,081}}{800}$$

$$x = \\frac{19.62 \\pm 126.85}{800}$$

Vi velger den positive løsningen:

$$x = \\frac{19.62 + 126.85}{800} = \\frac{146.47}{800} = 0.183 \\text{ m} = 18.3 \\text{ cm}$$

**Svar:** Fjæren komprimeres 18.3 cm.

**Tolkning:** Både gravitasjonell potensiell energi (fra fallhøyden og kompresjonen) omdannes til elastisk potensiell energi i fjæren.`,
      hints: ['Kulen faller både høyden $h$ og kompresjonen $x$', 'Total gravitasjonell energi: $mg(h+x)$', 'Dette gir en andregradsligning'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-2-ex-10',
      number: '10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En berg-og-dal-bane har et første topp på høyde 25 m og et andre topp på høyde 20 m. En vogn med masse 400 kg starter fra ro på første topp. Ignorer friksjon.\na) Finn farten i laveste punkt (høyde 0 m) mellom toppene.\nb) Finn farten på andre topp.\nc) Hvis friksjonen faktisk utfører -30 kJ arbeid mellom første og andre topp, hva blir da farten på andre topp?',
      solution: `**Gitt:**
- Masse: $m = 400$ kg
- Første topp: $h_1 = 25$ m
- Andre topp: $h_2 = 20$ m
- $g = 9.81$ m/s²

**a) Fart i laveste punkt (uten friksjon):**

Energibevaring:

$$E_{p,1} = E_{k,bunn}$$

$$mgh_1 = \\frac{1}{2}mv_{bunn}^2$$

$$v_{bunn}^2 = 2gh_1 = 2 \\cdot 9.81 \\cdot 25 = 490.5$$

$$v_{bunn} = \\sqrt{490.5} = 22.1 \\text{ m/s}$$

**Svar a):** 22.1 m/s

**b) Fart på andre topp (uten friksjon):**

$$mgh_1 = \\frac{1}{2}mv_2^2 + mgh_2$$

$$gh_1 = \\frac{1}{2}v_2^2 + gh_2$$

$$v_2^2 = 2g(h_1 - h_2) = 2 \\cdot 9.81 \\cdot (25 - 20) = 2 \\cdot 9.81 \\cdot 5 = 98.1$$

$$v_2 = \\sqrt{98.1} = 9.90 \\text{ m/s}$$

**Svar b):** 9.9 m/s

**c) Fart på andre topp (med friksjon):**

$$E_{k,2} + E_{p,2} = E_{p,1} + W_f$$

$$\\frac{1}{2}mv_2^2 + mgh_2 = mgh_1 - 30\\,000$$

$$\\frac{1}{2} \\cdot 400 \\cdot v_2^2 + 400 \\cdot 9.81 \\cdot 20 = 400 \\cdot 9.81 \\cdot 25 - 30\\,000$$

$$200v_2^2 + 78\\,480 = 98\\,100 - 30\\,000$$

$$200v_2^2 = 68\\,100 - 78\\,480 = -10\\,380$$

Dette gir $v_2^2 < 0$, som er umulig!

**Konklusjon:** Vognen når ikke andre topp. Den stopper før den kommer dit.

**La oss finne hvor høyt vognen kommer:**

$$E_{k,maks} + E_{p,maks} = E_{p,1} + W_f$$

$$0 + mgh_{maks} = mgh_1 - 30\\,000$$

$$400 \\cdot 9.81 \\cdot h_{maks} = 98\\,100 - 30\\,000 = 68\\,100$$

$$h_{maks} = \\frac{68\\,100}{400 \\cdot 9.81} = 17.3 \\text{ m}$$

**Svar c):** Vognen når ikke andre topp (20 m). Den stopper ved høyde 17.3 m.`,
      hints: ['Del a og b: Bruk energibevaring uten friksjon', 'Del c: Trekk fra friksjonsarbeid'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-2-ex-11',
      number: '11',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En person med masse 70 kg hopper i en strikk fra en bro 50 m over en elv. Strikken oppfører seg som en fjær med fjærkonstant 100 N/m og er 30 m lang når den er ustrekt. Hvor langt under broen kommer personen før strikken stopper vedkommende?',
      solution: `**Gitt:**
- Masse: $m = 70$ kg
- Brohøyde: $h_{bro} = 50$ m (over elven)
- Ustrekket strikklengde: $L_0 = 30$ m
- Fjærkonstant: $k = 100$ N/m
- $g = 9.81$ m/s²

**Søkt:** Maksimal fallhøyde $h$ under broen

**Løsning:**

La $x$ være strekket i strikken. Total fallhøyde: $h = L_0 + x = 30 + x$

**Start (på broen):**
- $E_{k,start} = 0$
- $E_{p,grav,start} = mgh = mg(30 + x)$ (over laveste punkt)
- $E_{p,elastisk,start} = 0$

**Slutt (laveste punkt):**
- $E_{k,slutt} = 0$
- $E_{p,grav,slutt} = 0$ (referanse)
- $E_{p,elastisk,slutt} = \\frac{1}{2}kx^2$

**Energibevaring:**

$$mg(30 + x) = \\frac{1}{2}kx^2$$

$$30mg + mgx = \\frac{1}{2}kx^2$$

$$\\frac{1}{2}kx^2 - mgx - 30mg = 0$$

$$50x^2 - (70 \\cdot 9.81)x - 30 \\cdot 70 \\cdot 9.81 = 0$$

$$50x^2 - 686.7x - 20\\,601 = 0$$

$$x^2 - 13.734x - 412.02 = 0$$

Abc-formel:

$$x = \\frac{13.734 \\pm \\sqrt{13.734^2 + 4 \\cdot 412.02}}{2}$$

$$x = \\frac{13.734 \\pm \\sqrt{188.62 + 1648.08}}{2}$$

$$x = \\frac{13.734 \\pm \\sqrt{1836.7}}{2}$$

$$x = \\frac{13.734 \\pm 42.86}{2}$$

Positiv løsning:

$$x = \\frac{13.734 + 42.86}{2} = \\frac{56.59}{2} = 28.3 \\text{ m}$$

**Total fallhøyde:**

$$h = L_0 + x = 30 + 28.3 = 58.3 \\text{ m}$$

**Svar:** Personen faller 58.3 m under broen.

**Sjekk:** Er dette trygt?
Broen er 50 m over elven, så personen kommer $58.3 - 50 = 8.3$ m under bro-nivået, eller bare $50 - 58.3 = -8.3$ m, dvs. 8.3 m **over** elven. Dette er trygt (så vidt)!`,
      hints: ['Personen faller først 30 m (ustrekket strikk), deretter strekkes strikken $x$ meter', 'Total fall: $30 + x$', 'Gravitasjonell energi omdannes til elastisk energi'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-4-2-ex-12',
      number: '12',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar hvorfor det er viktig å skille mellom konservative og ikke-konservative krefter når vi anvender energibevaring. Gi eksempler.',
      solution: `**Konservative vs. ikke-konservative krefter:**

**KONSERVATIVE KREFTER:**

**Definisjon:** En kraft er konservativ hvis arbeidet den utfører kun avhenger av start- og sluttposisjon, ikke av veien mellom dem.

**Eksempler:**
- **Gravitasjonskraft (tyngdekraft)**
- **Fjærkraft**
- **Elektrisk kraft** (Coulomb-kraft)

**Egenskaper:**

1. **Kan definere potensiell energi:**
   - Gravitasjonskraft → Gravitasjonell potensiell energi $E_p = mgh$
   - Fjærkraft → Elastisk potensiell energi $E_p = \\frac{1}{2}kx^2$

2. **Arbeid i lukket løkke er null:**
   - Hvis du beveger et objekt i en lukket bane tilbake til startpunktet, er totalt arbeid null.
   - Eksempel: Løft en bok opp, så ned igjen → totalt arbeid = 0

3. **Mekanisk energi bevares:**
   - $E_{mek} = E_k + E_p = \\text{konstant}$
   - Kontinuerlig omdanning mellom $E_k$ og $E_p$

**Eksempel:** En pendel

- I høyeste punkt: Kun $E_p$ (fart = 0)
- I laveste punkt: Kun $E_k$ (høyde = 0)
- Kontinuerlig omdanning, total energi konstant
- Pendelen svinger evig (uten friksjon)

---

**IKKE-KONSERVATIVE KREFTER:**

**Definisjon:** En kraft er ikke-konservativ hvis arbeidet den utfører avhenger av veien.

**Eksempler:**
- **Friksjon**
- **Luftmotstand**
- **Indre friksjon i materialer**
- **Normal kraft** (utfører vanligvis null arbeid, men ikke konservativ)

**Egenskaper:**

1. **Kan ikke definere potensiell energi:**
   - Arbeidet avhenger av veien, ikke bare start/slutt

2. **Arbeid i lukket løkke er ikke null:**
   - Hvis du skyver en kasse i en sirkel med friksjon, har du utført arbeid selv om kassen er tilbake der den startet.

3. **Mekanisk energi bevares IKKE:**
   - $E_{mek,slutt} < E_{mek,start}$
   - Mekanisk energi omdannes til **varme**, **lyd**, **deformasjon**

**Eksempel:** En bil som bremser

- Kinetisk energi → Varme (i bremsene)
- Energien "forsvinner" fra det mekaniske systemet
- Total energi bevart (inkludert varme), men mekanisk energi synker

---

**HVORFOR ER SKILLET VIKTIG?**

**1. Når vi kan bruke energibevaring:**

**Med bare konservative krefter:**
- Kan bruke $E_{k,1} + E_{p,1} = E_{k,2} + E_{p,2}$
- Enkelt! Trenger ikke bekymre oss om krefter eller akselerasjon.

**Med ikke-konservative krefter:**
- MÅ inkludere arbeid fra disse kreftene:
  $$E_{k,2} + E_{p,2} = E_{k,1} + E_{p,1} + W_{ikke-konservativ}$$
- Mer komplisert, må beregne arbeid fra friksjon osv.

**2. Forklare energitap:**

**Eksempel:** Hvorfor stopper en pendel?
- Hvis bare gravitasjonskraft (konservativ): Pendelen svinger evig
- I virkeligheten: Luftmotstand (ikke-konservativ) → energi omdannes til varme → pendelen stopper

**3. Design av systemer:**

**Eksempel:** Rutsjebane
- **Konservative krefter:** Høyde → Fart (lett å beregne)
- **Ikke-konservative krefter:** Friksjon → Varme (må minimeres for høy fart)

---

**PRAKTISKE EKSEMPLER:**

**Eksempel 1: Løpe opp en trapp vs. ta heisen**

Begge tar deg samme høyde (samme $\\Delta E_p$).

**Trapp:**
- Musklene utfører arbeid mot gravitasjon
- $W_{muskler} = \\Delta E_p$ (pluss litt til indre friksjon)

**Heis:**
- Motor utfører arbeid mot gravitasjon
- $W_{motor} = \\Delta E_p$ (pluss litt til friksjon/varme)

Samme energi trengs (i teorien), men veien er annerledes. Sluttresultatet er det samme (samme høyde, samme $E_p$).

**Dette er fordi gravitasjonskraft er konservativ.**

**Eksempel 2: Skyve en kasse over gulv**

**Glatt gulv (ingen friksjon):**
- Du gir kassen en dytt → kinetisk energi
- Kassen sklir evig med konstant fart
- $E_k$ konstant

**Ru gulv (med friksjon):**
- Du gir kassen en dytt → kinetisk energi
- Friksjon → $E_k$ synker → varme
- Kassen stopper til slutt

**Forskjellen:** Friksjon (ikke-konservativ) omdanner mekanisk energi til varme.

---

**OPPSUMMERING:**

**Konservative krefter:**
- Mekanisk energi bevares
- Kan definere potensiell energi
- Lett å analysere med energibevaring

**Ikke-konservative krefter:**
- Mekanisk energi synker
- Energi omdannes til varme/lyd
- Må inkludere arbeid fra disse kreftene

**Praktisk betydning:**
- I idealiserte problemer: Ignorer friksjon → bruk mekanisk energibevaring
- I virkeligheten: Må alltid ta hensyn til friksjon og energitap`,
      hints: ['Tenk på hva som skjer med energi', 'Konservative: Energi bevares', 'Ikke-konservative: Energi omdannes til varme'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
