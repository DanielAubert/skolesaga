/**
 * Fysikk 1 - Kapittel 6.5: Kjernefysikk og stjerneutvikling
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_6_5: TextbookChapter = {
  id: 'fys1-6-5',
  courseId: 'fys1',
  chapterNumber: '6.5',
  title: 'Kjernefysikk og stjerneutvikling',
  description: 'Lær om atomkjernen, bindingsenergi, kjernefusjon og -fisjon, samt hvordan grunnstoff dannes i stjerner.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare atomkjernens oppbygging',
    'beregne bindingsenergi per nukleon',
    'forklare kjernefusjon og -fisjon',
    'beskrive stjerneutvikling og nukleosyntes',
  ],
  content: [
    {
      id: 'fys1-6-5-intro',
      type: 'text',
      content: `# Kjernefysikk og stjerneutvikling

Atomkjernen inneholder enorme mengder energi. Denne energien driver stjerner, kan brukes i kraftverk, og skapte alle grunnstoff vi kjenner.

## Atomkjernens oppbygging

**Atomkjernen** består av:
- **Protoner** (positiv ladning, $q = +e$)
- **Nøytroner** (ingen ladning, $q = 0$)

Samlebetegnelse: **nukleoner**

**Notasjon:**

$$^A_Z X$$

hvor:
- $X$ = grunnstoffe-symbol (f.eks. H, He, C, U)
- $Z$ = atomnummer (antall protoner)
- $A$ = massetall (antall nukleoner = protoner + nøytroner)
- $N$ = nøytrontall = $A - Z$

**Eksempler:**
- $^1_1$H: Hydrogen (1 proton)
- $^4_2$He: Helium (2 protoner, 2 nøytroner)
- $^{12}_6$C: Karbon-12 (6 protoner, 6 nøytroner)
- $^{235}_{92}$U: Uran-235 (92 protoner, 143 nøytroner)

## Isotoper

**Isotoper** er atomer av samme grunnstoff (samme $Z$) med forskjellig antall nøytroner (forskjellig $N$).

**Eksempel - hydrogen:**
- $^1_1$H: Protium (1 proton, 0 nøytroner) - 99.98%
- $^2_1$H: Deuterium (1 proton, 1 nøytron) - 0.02%
- $^3_1$H: Tritium (1 proton, 2 nøytroner) - radioaktiv, sjelden

**Eksempel - karbon:**
- $^{12}_6$C: Karbon-12 (6 protoner, 6 nøytroner) - 98.9%
- $^{13}_6$C: Karbon-13 (6 protoner, 7 nøytroner) - 1.1%
- $^{14}_6$C: Karbon-14 (6 protoner, 8 nøytroner) - radioaktiv, brukes til datering

## Masser

**Proton:** $m_p = 1.6726 \\times 10^{-27}$ kg $\\approx 1$ u

**Nøytron:** $m_n = 1.6749 \\times 10^{-27}$ kg $\\approx 1$ u

**Elektron:** $m_e = 9.1094 \\times 10^{-31}$ kg $\\approx 0.0005$ u

**Atomær masseenhet (u):**

$$1 \\text{ u} = 1.6605 \\times 10^{-27} \\text{ kg}$$

Definert som $\\frac{1}{12}$ av massen til $^{12}$C.`,
    },
    {
      id: 'fys1-6-5-def-kjerne',
      type: 'definition',
      title: 'Atomkjerne',
      content: 'Atomkjernen består av $Z$ protoner og $N$ nøytroner. Massetall: $A = Z + N$. Notasjon: $^A_Z X$. Isotoper har samme $Z$, forskjellig $N$.',
    },
    {
      id: 'fys1-6-5-binding',
      type: 'text',
      content: `# Bindingsenergi

## Massedefekt

Hvis vi måler massen til en atomkjerne, finner vi at den er **mindre** enn summen av massen til de enkelte nukleonene!

**Massedefekt:**

$$\\Delta m = (Zm_p + Nm_n) - m_{\\text{kjerne}}$$

**Eksempel - helium ($^4_2$He):**

Teoretisk masse (2 protoner + 2 nøytroner):

$$m_{\\text{teoretisk}} = 2 \\times 1.6726 + 2 \\times 1.6749 = 6.6950 \\times 10^{-27} \\text{ kg}$$

Faktisk masse:

$$m_{\\text{faktisk}} = 6.6447 \\times 10^{-27} \\text{ kg}$$

**Massedefekt:**

$$\\Delta m = 6.6950 - 6.6447 = 0.0503 \\times 10^{-27} \\text{ kg}$$

**Hvor ble massen av?**

## Bindingsenergi

Ifølge Einsteins relativitetsteori er masse og energi ekvivalente:

$$E = mc^2$$

Den "manglende" massen ble til **bindingsenergi** - energien som holder kjernen sammen.

**Bindingsenergi:**

$$E_b = \\Delta m c^2$$

**Eksempel - helium:**

$$E_b = 0.0503 \\times 10^{-27} \\times (3.00 \\times 10^8)^2 = 4.53 \\times 10^{-12} \\text{ J}$$

Konverter til MeV (1 MeV = $1.602 \\times 10^{-13}$ J):

$$E_b = \\frac{4.53 \\times 10^{-12}}{1.602 \\times 10^{-13}} = 28.3 \\text{ MeV}$$

**Praktisk formel:**

$$E_b \\text{ (MeV)} = \\Delta m \\text{ (u)} \\times 931.5$$

## Bindingsenergi per nukleon

**Bindingsenergi per nukleon:**

$$\\frac{E_b}{A}$$

Dette er et mål på hvor **sterkt bundet** kjernen er.

**Eksempel - helium:**

$$\\frac{E_b}{A} = \\frac{28.3}{4} = 7.1 \\text{ MeV/nukleon}$$

## Bindingsenergikurven

Bindingsenergi per nukleon som funksjon av massetall $A$:

**Observasjoner:**
1. **Lave $A$:** Lav bindingsenergi (lett å dele opp)
2. **$A \\approx 60$ (jern):** Maksimal bindingsenergi (~8.8 MeV/nukleon) - **mest stabil**
3. **Høye $A$:** Litt lavere bindingsenergi (kan dele seg - fisjon)

**Betydning:**
- **Fusjon** av lette kjerner (H → He) **frigjør energi** (høyere bindingsenergi)
- **Fisjon** av tunge kjerner (U → Ba + Kr) **frigjør energi** (høyere bindingsenergi)
- Jern ($^{56}$Fe) er det mest stabile grunnstoffet`,
    },
    {
      id: 'fys1-6-5-def-binding',
      type: 'definition',
      title: 'Bindingsenergi',
      content: 'Bindingsenergi: $E_b = \\Delta m c^2 = (Zm_p + Nm_n - m_{\\text{kjerne}}) c^2$. Praktisk: $E_b$ (MeV) = $\\Delta m$ (u) × 931.5. Bindingsenergi per nukleon: $\\frac{E_b}{A}$.',
    },
    {
      id: 'fys1-6-5-ex-binding',
      type: 'example',
      title: 'Eksempel: Bindingsenergi',
      problem: 'Deuterium ($^2_1$H) har masse 2.0141 u. Beregn bindingsenergi per nukleon. ($m_p = 1.0073$ u, $m_n = 1.0087$ u)',
      solution: `**Gitt:**
- $m_{\\text{faktisk}} = 2.0141$ u
- $m_p = 1.0073$ u
- $m_n = 1.0087$ u
- $A = 2$ (1 proton, 1 nøytron)

**Massedefekt:**

$$\\Delta m = m_p + m_n - m_{\\text{faktisk}}$$

$$\\Delta m = 1.0073 + 1.0087 - 2.0141 = 0.0019 \\text{ u}$$

**Bindingsenergi:**

$$E_b = \\Delta m \\times 931.5 = 0.0019 \\times 931.5 = 1.77 \\text{ MeV}$$

**Bindingsenergi per nukleon:**

$$\\frac{E_b}{A} = \\frac{1.77}{2} = 0.89 \\text{ MeV/nukleon}$$

**Svar:** 0.89 MeV/nukleon (lavt - deuterium er lett bundet).`,
    },
    {
      id: 'fys1-6-5-fusjon',
      type: 'text',
      content: `# Kjernefusjon

**Kjernefusjon:** To lette kjerner smelter sammen til en tyngre kjerne.

## Fusjon i Solen

**Proton-proton-kjeden:**

**Steg 1:**

$$^1_1\\text{H} + ^1_1\\text{H} \\to ^2_1\\text{H} + e^+ + \\nu_e$$

(positron og nøytrino sendes ut)

**Steg 2:**

$$^2_1\\text{H} + ^1_1\\text{H} \\to ^3_2\\text{He} + \\gamma$$

(gammastråling sendes ut)

**Steg 3:**

$$^3_2\\text{He} + ^3_2\\text{He} \\to ^4_2\\text{He} + 2 \\times ^1_1\\text{H}$$

**Netto-reaksjon:**

$$4 \\times ^1_1\\text{H} \\to ^4_2\\text{He} + 2e^+ + 2\\nu_e + \\text{energi}$$

**Energi frigjort:** 26.7 MeV per heliumkjerne

## Betingelser for fusjon

**Problema:**
- Protoner har positiv ladning
- Frastøter hverandre (Coulomb-kraft)
- Må komme meget nær for at **sterk kjernekraft** skal virke

**Løsning:**
- **Høy temperatur** (10-15 millioner K i Solens kjerne)
- Høy fart → overvinne Coulomb-barriere
- **Høyt trykk** (250 milliarder atmosfærer)

**Solen:**
- Fusjonerer 600 millioner tonn hydrogen per sekund
- Produserer 4 × 10²⁶ W
- Har fusjonert i 4.6 milliarder år
- Har hydrogen for 5 milliarder år til

## Fusjon på Jorden

**Utfordring:** Oppnå høy nok temperatur og trykk

**Metoder:**
- **Magnetisk inneslutning:** Plasma holdes inne med magnetfelt (Tokamak, ITER)
- **Treghetsfusjon:** Laser komprimerer pellet med deuterium-tritium

**Fordeler:**
- Nesten ubegrenset "drivstoff" (deuterium fra sjøvann)
- Ingen klimagasser
- Lite radioaktivt avfall

**Ulemper:**
- Meget vanskelig teknisk
- Har ennå ikke oppnådd netto energiproduksjon (Q > 1)

**Gjennombrudd 2022:** National Ignition Facility (NIF) i USA oppnådde for første gang Q > 1 (energi ut > energi inn)!`,
    },
    {
      id: 'fys1-6-5-fisjon',
      type: 'text',
      content: `# Kjernespalting (fisjon)

**Kjernespalting (fisjon):** En tung kjerne deler seg i to lettere kjerner.

## Fisjon av uran-235

**Reaksjon:**

$$^{235}_{92}\\text{U} + ^1_0n \\to ^{141}_{56}\\text{Ba} + ^{92}_{36}\\text{Kr} + 3 \\times ^1_0n + \\text{energi}$$

**Energi frigjort:** ~200 MeV per fisjon

**Viktig:** 3 nøytroner frigjøres → **kjedereaksjon**

## Kjedereaksjon

**1. Ett nøytron** treffer $^{235}$U
**2. Fisjon** → frigjør 3 nøytroner
**3. 3 nøytroner** treffer 3 andre $^{235}$U-kjerner
**4. 9 nøytroner** frigjøres
**5. Osv.**

**Kritisk masse:** Minimum masse for selvopprettholdt kjedereaksjon

**Typer:**
- **Ukontrollert:** Atombombe (eksponentiell vekst)
- **Kontrollert:** Kjernekraftverk (stabil reaksjon)

## Kjernekraftverk

**Kontroll:**
- **Kontrollstaver:** Absorberer nøytroner (kadmium, bor)
- Senker inn → færre nøytroner → lavere effekt
- Trekker ut → flere nøytroner → høyere effekt

**Moderator:**
- Bremser nøytroner (tungt vann, grafitt)
- Langsomme nøytroner har høyere sannsynlighet for fisjon

**Kjøling:**
- Vann fjerner varme fra reaktor
- Damp driver turbiner → elektrisitet

**Fordeler:**
- Ingen klimagasser
- Høy energitetthet (1 kg uran = millioner kg kull)
- Pålitelig baseload-kraft

**Ulemper:**
- Radioaktivt avfall (lagring i 100 000 år)
- Risiko for ulykker (Tsjernobyl, Fukushima)
- Dyrt å bygge
- Atomvåpenspredning

## Talleksempel

**1 kg uran-235:**

Antall atomer:

$$N = \\frac{1000 \\text{ g}}{235 \\text{ g/mol}} \\times 6.022 \\times 10^{23} = 2.56 \\times 10^{24}$$

Energi per fisjon: 200 MeV = $3.2 \\times 10^{-11}$ J

Total energi:

$$E = 2.56 \\times 10^{24} \\times 3.2 \\times 10^{-11} = 8.2 \\times 10^{13} \\text{ J}$$

Sammenlign med kull (30 MJ/kg):

$$\\frac{8.2 \\times 10^{13}}{3 \\times 10^7} \\approx 2.7 \\times 10^6 \\text{ kg}$$

**1 kg uran = 2.7 millioner kg kull!**`,
    },
    {
      id: 'fys1-6-5-stjerner',
      type: 'text',
      content: `# Stjerneutvikling og nukleosyntes

**Nukleosyntes:** Dannelse av grunnstoff

**"Vi er laget av stjernestøv"** - Carl Sagan

Alle grunnstoff tyngre enn helium er dannet i stjerner!

## Big Bang (13.8 milliarder år siden)

**De første 3 minuttene:**
- Universet ekspanderer og kjølner
- Protoner og nøytroner dannes
- **Big Bang-nukleosyntes:**
  - ~75% hydrogen ($^1$H)
  - ~25% helium ($^4$He)
  - Spor av deuterium ($^2$H), litium ($^7$Li)

**Alt annet dannes i stjerner!**

## Stjernens livssyklus

**1. Protostjerne**
- Gravitasjonskollaps av gass-sky
- Temperatur og trykk øker
- Fusjon starter når $T \\approx 10^7$ K

**2. Hovedsekvens (som Solen, 90% av livet)**
- Fusjonerer hydrogen til helium (proton-proton eller CNO-syklus)
- Stabil: Gravitasjon balanserer fusjonsstrykk
- Solen: 10 milliarder år totalt (5 milliarder gjenstår)

**3. Rød kjempe**
- Hydrogen brukt opp i kjernen
- Kjerne kollapser, temperatur øker
- **Heliumbrenning:** $3 \\times ^4$He → $^{12}$C (trippel-alfa)
- Ytre lag ekspanderer → rød kjempe
- Fusjonerer også: $^{12}$C + $^4$He → $^{16}$O

**4A. Lav masse (< 8 solmasser) → Hvit dverg**
- Fusjon stopper ved karbon/oksygen
- Ytre lag kastes ut → **planetarisk tåke**
- Kjerne kollapser til **hvit dverg** (Jord-størrelse, meget tett)
- Kjøler langsomt

**4B. Høy masse (> 8 solmasser) → Supernova**

**a) Avansert fusjon:**
- $^{12}$C → $^{16}$O → $^{20}$Ne → $^{24}$Mg → $^{28}$Si → ... → $^{56}$Fe
- Kjernen har lag som en løk (Fe i sentrum)

**b) Jern-kjerne:**
- Jern har høyest bindingsenergi
- **Ingen fusjon av jern frigjør energi**
- Fusjon stopper
- Gravitasjonskollaps (1 sekund!)

**c) Supernova:**
- Kjerne kollapser → nøytronstjerne eller svart hull
- Sjokk-bølge kaster ut ytre lag
- **Lysstyrke:** Lyser som en hel galakse i noen uker!

**d) Grunnstoffdannelse:**
- **s-prosess:** Langsom nøytroninnfanging (under røde kjempe-fasen)
  - Grunnstoff opp til $^{209}$Bi
- **r-prosess:** Rask nøytroninnfanging (under supernova)
  - Tyngre grunnstoff: uran, gull, platina
- **Spredning:** Grunnstoff spres ut i rommet

**e) Neste generasjon:**
- Grunnstoff fra supernova danner nye stjerner
- Solen er 3. generasjon ("Befolkning I")
- Inneholder grunnstoff fra tidligere supernovaer

## Opprinnelsen til grunnstoff

- **Hydrogen, helium:** Big Bang
- **Karbon, oksygen, nitrogen:** Røde kjemper (trippel-alfa, CNO)
- **Silisium, magnesium, jern:** Massive stjerner
- **Gull, uran, platina:** Supernovaer, nøytronstjerne-kollisjoner

**Konklusjon:** Alle atomer i kroppen din (bortsett fra hydrogen) ble dannet i en stjerne!`,
    },
    {
      id: 'fys1-6-5-note-gull',
      type: 'note',
      title: 'Hvor kommer gull fra?',
      content: `I 2017 observerte LIGO gravitasjonsbølger fra en kollisjon mellom to nøytronstjerner.

Kollisjonen produserte:
- **Gravitasjonsbølger** (oppdaget for første gang fra nøytronstjerner)
- **Gammastråling**
- **Gull, platina, og andre tunge grunnstoff**

Estimat: Kollisjonen produserte 10 Jord-masser av gull!

**Hver gullring du ser ble dannet i en nøytronstjerne-kollisjon for milliarder av år siden.**`,
    },
  ],
  exercises: [
    {
      id: 'fys1-6-5-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hvor mange protoner og nøytroner er det i $^{14}_6$C (karbon-14)?',
      solution: `**Gitt:**
- $^{14}_6$C
- $Z = 6$ (atomnummer)
- $A = 14$ (massetall)

**Løsning:**

Antall protoner: $Z = 6$

Antall nøytroner: $N = A - Z = 14 - 6 = 8$

**Svar:** 6 protoner, 8 nøytroner.`,
      hints: ['$Z$ = protoner', '$N = A - Z$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-5-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'Hva er energien tilsvarende en masse på 1.0 u? Bruk $E = mc^2$ og $c = 3.00 \\times 10^8$ m/s.',
      solution: `**Gitt:**
- $m = 1.0$ u $= 1.6605 \\times 10^{-27}$ kg
- $c = 3.00 \\times 10^8$ m/s

**Løsning:**

$$E = mc^2 = 1.6605 \\times 10^{-27} \\times (3.00 \\times 10^8)^2$$

$$E = 1.6605 \\times 10^{-27} \\times 9.00 \\times 10^{16} = 1.49 \\times 10^{-10} \\text{ J}$$

Konverter til MeV (1 MeV = $1.602 \\times 10^{-13}$ J):

$$E = \\frac{1.49 \\times 10^{-10}}{1.602 \\times 10^{-13}} = 931.5 \\text{ MeV}$$

**Svar:** 931.5 MeV (viktig tall å huske!).`,
      hints: ['Bruk $E = mc^2$', '1 u = $1.6605 \\times 10^{-27}$ kg'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-5-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'lett',
      task: 'En fusjonreaksjon frigjør 17.6 MeV. Hvor mange joule er dette?',
      solution: `**Gitt:**
- $E = 17.6$ MeV
- 1 eV = $1.602 \\times 10^{-19}$ J

**Løsning:**

$$E = 17.6 \\times 10^6 \\times 1.602 \\times 10^{-19}$$

$$E = 2.82 \\times 10^{-12} \\text{ J}$$

**Svar:** $2.82 \\times 10^{-12}$ J.`,
      hints: ['1 MeV = $10^6$ eV', 'Bruk 1 eV = $1.602 \\times 10^{-19}$ J'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-5-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Tritium ($^3_1$H) har masse 3.0161 u. Beregn bindingsenergi per nukleon. ($m_p = 1.0073$ u, $m_n = 1.0087$ u)',
      solution: `**Gitt:**
- $^3_1$H: 1 proton, 2 nøytroner
- $m_{\\text{faktisk}} = 3.0161$ u
- $m_p = 1.0073$ u, $m_n = 1.0087$ u

**Massedefekt:**

$$\\Delta m = m_p + 2m_n - m_{\\text{faktisk}}$$

$$\\Delta m = 1.0073 + 2 \\times 1.0087 - 3.0161$$

$$\\Delta m = 1.0073 + 2.0174 - 3.0161 = 0.0086 \\text{ u}$$

**Bindingsenergi:**

$$E_b = 0.0086 \\times 931.5 = 8.01 \\text{ MeV}$$

**Bindingsenergi per nukleon:**

$$\\frac{E_b}{A} = \\frac{8.01}{3} = 2.67 \\text{ MeV/nukleon}$$

**Svar:** 2.67 MeV/nukleon.`,
      hints: ['Massedefekt: teoretisk - faktisk', 'Bruk 931.5 MeV/u', 'Del på $A$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-5-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Deuterium-tritium-fusjon: $^2_1$H + $^3_1$H → $^4_2$He + $^1_0$n. Beregn energien frigjort. (Masser: D = 2.0141 u, T = 3.0161 u, He = 4.0026 u, n = 1.0087 u)',
      solution: `**Gitt:**
- $m_D = 2.0141$ u
- $m_T = 3.0161$ u
- $m_{\\text{He}} = 4.0026$ u
- $m_n = 1.0087$ u

**Løsning:**

Masse før:

$$m_{\\text{før}} = m_D + m_T = 2.0141 + 3.0161 = 5.0302 \\text{ u}$$

Masse etter:

$$m_{\\text{etter}} = m_{\\text{He}} + m_n = 4.0026 + 1.0087 = 5.0113 \\text{ u}$$

**Massedefekt:**

$$\\Delta m = m_{\\text{før}} - m_{\\text{etter}} = 5.0302 - 5.0113 = 0.0189 \\text{ u}$$

**Energi frigjort:**

$$E = \\Delta m \\times 931.5 = 0.0189 \\times 931.5 = 17.6 \\text{ MeV}$$

**Svar:** 17.6 MeV frigjøres.`,
      hints: ['Masse før - masse etter', 'Bruk $E = \\Delta m \\times 931.5$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-5-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hvor mange fisjoner av $^{235}$U (200 MeV per fisjon) kreves for å produsere samme energi som forbrenning av 1.0 kg kull (30 MJ)?',
      solution: `**Gitt:**
- Energi per fisjon: 200 MeV
- Kull: 30 MJ = $3.0 \\times 10^7$ J

**Energi per fisjon (J):**

$$E_{\\text{fisjon}} = 200 \\times 10^6 \\times 1.602 \\times 10^{-19} = 3.2 \\times 10^{-11} \\text{ J}$$

**Antall fisjoner:**

$$N = \\frac{3.0 \\times 10^7}{3.2 \\times 10^{-11}} = 9.4 \\times 10^{17}$$

**Masse uran:**

Antall atomer i 1 mol $^{235}$U: $6.022 \\times 10^{23}$

$$m = \\frac{N}{6.022 \\times 10^{23}} \\times 235 \\text{ g} = \\frac{9.4 \\times 10^{17}}{6.022 \\times 10^{23}} \\times 235$$

$$m = 3.7 \\times 10^{-4} \\text{ g} = 0.37 \\text{ mg}$$

**Svar:** $9.4 \\times 10^{17}$ fisjoner, tilsvarende 0.37 mg uran.`,
      hints: ['Konverter MeV til J', 'Del total energi på energi per fisjon'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-5-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'medium',
      task: 'Solen fusjonerer 600 millioner tonn hydrogen per sekund og produserer $4 \\times 10^{26}$ W. a) Hvor mye masse konverteres til energi per sekund? b) Hvor stor andel av hydrogenet blir til energi?',
      solution: `**Gitt:**
- Hydrogenmasse: $m_H = 6 \\times 10^8$ tonn = $6 \\times 10^{11}$ kg
- Effekt: $P = 4 \\times 10^{26}$ W
- $c = 3.00 \\times 10^8$ m/s

**a) Masse til energi:**

$$E = Pt = 4 \\times 10^{26} \\text{ J/s} \\times 1 \\text{ s} = 4 \\times 10^{26} \\text{ J}$$

$$E = \\Delta m c^2$$

$$\\Delta m = \\frac{E}{c^2} = \\frac{4 \\times 10^{26}}{(3.00 \\times 10^8)^2} = \\frac{4 \\times 10^{26}}{9 \\times 10^{16}}$$

$$\\Delta m = 4.4 \\times 10^9 \\text{ kg}$$

**b) Andel:**

$$\\text{Andel} = \\frac{\\Delta m}{m_H} = \\frac{4.4 \\times 10^9}{6 \\times 10^{11}} = 0.0073 = 0.73\\%$$

**Svar:**
a) 4.4 millioner tonn masse blir til energi per sekund
b) 0.73% av hydrogenet`,
      hints: ['Bruk $E = mc^2$', 'Andel = $\\frac{\\Delta m}{m_H}$'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-5-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'I en ukontrollert kjedereaksjon dobles antall fisjoner hver generasjon. Hvis vi starter med 1 fisjon, hvor mange generasjoner tar det før vi har 1 milliard fisjoner?',
      solution: `**Gitt:**
- Starter: 1 fisjon
- Dobles hver generasjon
- Mål: $10^9$ fisjoner

**Løsning:**

Etter $n$ generasjoner:

$$N = 2^n$$

Vi søker $n$ slik at:

$$2^n = 10^9$$

$$n = \\log_2(10^9) = \\frac{\\ln(10^9)}{\\ln(2)} = \\frac{9 \\ln(10)}{\\ln(2)}$$

$$n = \\frac{9 \\times 2.303}{0.693} = 29.9 \\approx 30$$

**Svar:** 30 generasjoner.

**Kommentar:** Hvis hver generasjon tar $10^{-8}$ s (10 nanosekunder), tar dette $3 \\times 10^{-7}$ s = 0.3 mikrosekunder! Dette viser hvor raskt en atombombe eksploderer.`,
      hints: ['Bruk $N = 2^n$', 'Løs med logaritme'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-5-ex-9',
      number: '9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Beregn bindingsenergi per nukleon for helium-4 ($^4_2$He, masse 4.0026 u). Sammenlign med hydrogen ($E_b/A = 0$, kun 1 nukleon). ($m_p = 1.0073$ u, $m_n = 1.0087$ u)',
      solution: `**Gitt:**
- $^4_2$He: 2 protoner, 2 nøytroner
- $m_{\\text{faktisk}} = 4.0026$ u

**Massedefekt:**

$$\\Delta m = 2m_p + 2m_n - m_{\\text{faktisk}}$$

$$\\Delta m = 2 \\times 1.0073 + 2 \\times 1.0087 - 4.0026$$

$$\\Delta m = 2.0146 + 2.0174 - 4.0026 = 0.0294 \\text{ u}$$

**Bindingsenergi:**

$$E_b = 0.0294 \\times 931.5 = 27.4 \\text{ MeV}$$

**Bindingsenergi per nukleon:**

$$\\frac{E_b}{A} = \\frac{27.4}{4} = 6.85 \\text{ MeV/nukleon}$$

**Sammenligning:**
- Hydrogen: 0 MeV/nukleon (kun 1 nukleon, ingen binding)
- Helium: 6.85 MeV/nukleon

**Tolkning:** Helium er meget stabilt. Fusjon av 4 hydrogen til 1 helium frigjør $4 \\times 6.85 = 27.4$ MeV.

**Svar:** 6.85 MeV/nukleon.`,
      hints: ['2 protoner + 2 nøytroner', 'Massedefekt, deretter $E_b$', 'Del på 4'],
      allowsUpload: true,
    },
    {
      id: 'fys1-6-5-ex-10',
      number: '10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Trippel-alfa-prosessen i røde kjemper: $3 \\times ^4_2$He → $^{12}_6$C. Beregn energien frigjort. (Masser: He = 4.0026 u, C = 12.0000 u)',
      solution: `**Gitt:**
- $m_{\\text{He}} = 4.0026$ u
- $m_C = 12.0000$ u

**Masse før:**

$$m_{\\text{før}} = 3 \\times m_{\\text{He}} = 3 \\times 4.0026 = 12.0078 \\text{ u}$$

**Masse etter:**

$$m_{\\text{etter}} = m_C = 12.0000 \\text{ u}$$

**Massedefekt:**

$$\\Delta m = 12.0078 - 12.0000 = 0.0078 \\text{ u}$$

**Energi frigjort:**

$$E = 0.0078 \\times 931.5 = 7.27 \\text{ MeV}$$

**Svar:** 7.27 MeV frigjøres.

**Kommentar:** Dette er hvordan karbon (grunnlaget for alt liv) dannes i røde kjemper!`,
      hints: ['Masse før = 3 × masse He', 'Massedefekt = før - etter', 'Bruk 931.5 MeV/u'],
      allowsUpload: true,
    },
  ],
};
