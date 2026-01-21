/**
 * Fysikk 1 - Kapittel 3.4: Sirkelbevegelse og sentripetalkraft
 */

import type { TextbookChapter } from '@/lib/types/textbook';

export const CHAPTER_FYS1_3_4: TextbookChapter = {
  id: 'fys1-3-4',
  courseId: 'fys1',
  chapterNumber: '3.4',
  title: 'Sirkelbevegelse og sentripetalkraft',
  description: 'Lær om sentripetalakselerasjon, sentripetalkraft, vinkelfrekvens og periode. Eksempler inkluderer karusell, svinger og planetbaner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare sentripetalakselerasjon og sentripetalkraft',
    'beregne sentripetalkraft i ulike situasjoner',
    'bruke sammenhenger mellom vinkelfrekvens, periode og fart',
    'analysere krefter i sirkelbevegelse (horisontalt og vertikalt)',
  ],
  content: [
    {
      id: 'fys1-3-4-intro',
      type: 'text',
      content: `# Sirkelbevegelse og sentripetalkraft

**Sirkelbevegelse** er bevegelse langs en sirkulær bane. Selv om farten kan være konstant, er hastigheten (vektor) ikke konstant fordi retningen endres kontinuerlig.

**Viktige konsepter:**
- Sentripetalakselerasjon: Akselerasjon mot sentrum
- Sentripetalkraft: Kraft mot sentrum som gir sirkelbevegelse
- Vinkelfrekvens og periode

**Eksempler:**
- Planet som kretser rundt sola
- Bil i rundkjøring
- Stein i slynge
- Satellitt i bane
- Berg-og-dal-bane`,
    },
    {
      id: 'fys1-3-4-kinematikk',
      type: 'text',
      content: `# Kinematikk for uniform sirkelbevegelse

**Uniform sirkelbevegelse:** Bevegelse i sirkel med konstant fart.

## Grunnleggende størrelser

**Radius:** $r$ [m]
- Avstand fra sentrum til objektet

**Fart:** $v$ [m/s]
- Farten langs banen (konstant ved uniform sirkelbevegelse)

**Periode:** $T$ [s]
- Tid for én full omdreining

**Frekvens:** $f$ [Hz = 1/s]
- Antall omdreininger per sekund

**Vinkelfrekvens:** $\\omega$ [rad/s]
- Vinkel per tid

## Sammenhenger

**Fart og radius:**

Omk rets: $C = 2\\pi r$

Tid for én omdreining: $T$

$$v = \\frac{C}{T} = \\frac{2\\pi r}{T}$$

**Periode og frekvens:**
$$f = \\frac{1}{T}$$

**Vinkelfrekvens:**

En full omdreining = $2\\pi$ radianer

$$\\omega = \\frac{2\\pi}{T} = 2\\pi f$$

**Fart og vinkelfrekvens:**
$$v = \\omega r$$

**Oppsummering av formler:**

$$v = \\frac{2\\pi r}{T} = 2\\pi r f = \\omega r$$

$$\\omega = \\frac{2\\pi}{T} = 2\\pi f = \\frac{v}{r}$$

$$T = \\frac{2\\pi r}{v} = \\frac{2\\pi}{\\omega} = \\frac{1}{f}$$

## Hastighetsvektoren

**Størrelse:** $|\\vec{v}| = v$ (konstant)

**Retning:** Tangent til sirkelen (vinkelrett på radius)

**Endring:** Retningen endres kontinuerlig, selv om størrelsen er konstant

**Viktig:** Selv om farten er konstant, er hastigheten (vektor) ikke konstant!`,
    },
    {
      id: 'fys1-3-4-akselerasjon',
      type: 'text',
      content: `# Sentripetalakselerasjon

Siden hastigheten (vektor) endres, må det være en akselerasjon.

## Definisjon

**Sentripetalakselerasjon** ($a_s$ eller $a_c$): Akselerasjon mot sentrum av sirkelen.

**Formel:**
$$a_s = \\frac{v^2}{r}$$

hvor:
- $a_s$ = sentripetalakselerasjon [m/s²]
- $v$ = fart [m/s]
- $r$ = radius [m]

**Alternative formler:**

Med $v = \\omega r$:
$$a_s = \\frac{(\\omega r)^2}{r} = \\omega^2 r$$

Med $\\omega = \\frac{2\\pi}{T}$:
$$a_s = \\omega^2 r = \\left(\\frac{2\\pi}{T}\\right)^2 r = \\frac{4\\pi^2 r}{T^2}$$

## Retning

**Alltid mot sentrum av sirkelen**

**Viktig:** Ikke langs bevegelsen (tangentiell), men vinkelrett på bevegelsen, mot sentrum.

## Hvorfor akselerasjon?

**Feil tankegang:** "Farten er konstant, så akselerasjon = 0"

**Riktig forståelse:** Akselerasjon er endring i hastighet (vektor), ikke bare endring i fart.

**Endring i hastighet:**
- Selv om farten $|\\vec{v}|$ er konstant
- Retningen til $\\vec{v}$ endres kontinuerlig
- $\\vec{a} = \\frac{d\\vec{v}}{dt} \\neq 0$

## Herledning (geometrisk)

**Betrakt to tett liggende punkter på sirkelen:**

**Hastighet ved punkt 1:** $\\vec{v}_1$ (tangent til sirkel)
**Hastighet ved punkt 2:** $\\vec{v}_2$ (tangent til sirkel)

Begge har størrelse $v$, men ulike retninger.

**Endring i hastighet:** $\\Delta \\vec{v} = \\vec{v}_2 - \\vec{v}_1$

Geometrisk analyse viser:
- $\\Delta \\vec{v}$ peker mot sentrum
- $|\\Delta \\vec{v}| \\approx v \\Delta \\theta$ (for liten $\\Delta \\theta$)

**Tid:** $\\Delta t = \\frac{r \\Delta \\theta}{v}$

**Akselerasjon:**
$$a = \\frac{|\\Delta \\vec{v}|}{\\Delta t} = \\frac{v \\Delta \\theta}{r \\Delta \\theta / v} = \\frac{v^2}{r}$$

## Sentripetal vs. tangentiell akselerasjon

**Sentripetal akselerasjon ($a_s$):**
- Mot sentrum
- Endrer retning (ikke fart)
- Eksisterer ved uniform sirkelbevegelse

**Tangentiell akselerasjon ($a_t$):**
- Langs banen (tangent til sirkel)
- Endrer fart (ikke retning)
- Null ved uniform sirkelbevegelse
- Ikke-null hvis farten øker/reduseres

**Total akselerasjon (ikke-uniform sirkelbevegelse):**
$$\\vec{a} = \\vec{a}_s + \\vec{a}_t$$
$$|\\vec{a}| = \\sqrt{a_s^2 + a_t^2}$$

I dette kapittelet fokuserer vi på uniform sirkelbevegelse: $a_t = 0$.`,
    },
    {
      id: 'fys1-3-4-def-akselerasjon',
      type: 'definition',
      title: 'Sentripetalakselerasjon',
      content: 'Sentripetalakselerasjon er akselerasjonen mot sentrum av en sirkulær bane: $a_s = \\frac{v^2}{r} = \\omega^2 r$. Den skyldes endring i retning (ikke størrelse) av hastigheten.',
    },
    {
      id: 'fys1-3-4-kraft',
      type: 'text',
      content: `# Sentripetalkraft

Fra Newtons 2. lov: Hvis det er akselerasjon, må det være en kraft.

## Definisjon

**Sentripetalkraft** ($F_s$): Den resulterende kraften mot sentrum som gir sirkelbevegelse.

**Newtons 2. lov:**
$$F_s = ma_s = m\\frac{v^2}{r}$$

hvor:
- $F_s$ = sentripetalkraft [N]
- $m$ = masse [kg]
- $v$ = fart [m/s]
- $r$ = radius [m]

**Alternative formler:**
$$F_s = m\\omega^2 r = m\\frac{4\\pi^2 r}{T^2}$$

## Retning

**Alltid mot sentrum av sirkelen**

## Viktig misforståelse

**Feil:** "Sentripetalkraft er en ny type kraft"

**Riktig:** Sentripetalkraft er den resulterende kraften mot sentrum. Den kommer fra fysiske krefter:

**Eksempler:**

**1. Planet rundt Sola:**
- Sentripetalkraft = Gravitasjonskraft
- $F_s = F_G$

**2. Bil i rundkjøring:**
- Sentripetalkraft = Friksjon fra vei
- $F_s = f$

**3. Stein i slynge:**
- Sentripetalkraft = Snorkraft
- $F_s = T$

**4. Berg-og-dal-bane (nederst):**
- Sentripetalkraft = Normalkraft - Tyngdekraft
- $F_s = N - G$

**5. Satellitt i bane:**
- Sentripetalkraft = Gravitasjonskraft
- $F_s = F_G$

## Hva skjer hvis sentripetalkraft fjernes?

**Feil:** "Objektet flyr utover fra sentrum"

**Riktig:** Objektet fortsetter i rett linje tangent til sirkelen (Newtons 1. lov)

**Eksempel:** Stein i slynge
- Mens snor holder: Sirkelbevegelse
- Snor slippes: Stein flyr i rett linje tangent til sirkel (ikke radielt utover!)

## Sentrifugalkraft (fiktiv kraft)

**Sentrifugalkraft:** "Kraft utover fra sentrum"

**Status:** Fiktiv kraft (ikke reell)

**Når oppleves den?**
- I roterende referansesystem
- Du føler deg dyttet utover i bil som svinger

**Forklaring:**
- Fra inertielt referansesystem: Ingen kraft utover
- Din kropp "ønsker" å fortsette rett frem (Newtons 1. lov)
- Bil svinger inn, du fortsetter rett (føles som dytt utover)
- Reell kraft: Friksjon fra sete (innover!)

**I dette kurset:** Vi bruker inertielle referansesystemer og ignorerer sentrifugalkraft.`,
    },
    {
      id: 'fys1-3-4-def-kraft',
      type: 'definition',
      title: 'Sentripetalkraft',
      content: 'Sentripetalkraft er den resulterende kraften mot sentrum som gir sirkelbevegelse: $F_s = m\\frac{v^2}{r} = m\\omega^2 r$. Den kommer fra fysiske krefter som gravitasjon, friksjon, snorkraft, etc.',
    },
    {
      id: 'fys1-3-4-horisontal',
      type: 'text',
      content: `# Horisontal sirkelbevegelse

**Eksempler:**
- Bil i flat rundkjøring
- Skøyteløper i kurve
- Satellitt i bane

## Eksempel 1: Bil i rundkjøring

**Situasjon:** Bil kjører i flat rundkjøring med radius $r$ og fart $v$.

**Krefter:**
- Tyngdekraft: $G = mg$ (nedover)
- Normalkraft: $N$ (oppover)
- Friksjon: $f$ (mot sentrum, horisontal)

**Vertikal likevekt:**
$$N = G = mg$$

**Horisontal (mot sentrum):**

Sentripetalkraft kommer fra friksjon:
$$f = F_s = m\\frac{v^2}{r}$$

**Maksimal fart før bilen sklir:**

Maksimal friksjon: $f_{\\text{maks}} = \\mu_s N = \\mu_s mg$

$$\\mu_s mg = m\\frac{v_{\\text{maks}}^2}{r}$$

$$v_{\\text{maks}} = \\sqrt{\\mu_s gr}$$

**Viktig:** Maksimal fart avhenger av:
- Friksjonskoeffisient ($\\mu_s$): Høyere → høyere $v_{\\text{maks}}$
- Radius ($r$): Større → høyere $v_{\\text{maks}}$
- Ikke masse! (forsvinner)

## Eksempel 2: Skrått kurve (banked curve)

**Situasjon:** Vei eller skøytebane som heller innover i kurven med vinkel $\\theta$.

**Fordel:** Normalkraften får komponent mot sentrum → mindre friksjon nødvendig

**Optimal vinkel (ingen friksjon nødvendig):**
$$\\tan \\theta = \\frac{v^2}{rg}$$

**Forklaring:**
- Normalkraft vinkelrett på skråning
- Komponent av N mot sentrum: $N \\sin \\theta$
- Denne gir sentripetalkraft
- Optimalt: $N \\sin \\theta = m\\frac{v^2}{r}$ og $N \\cos \\theta = mg$
- Deling: $\\tan \\theta = \\frac{v^2}{rg}$

## Eksempel 3: Satellitt i bane

**Situasjon:** Satellitt kretser rundt Jorden med radius $r$ (fra Jordens sentrum).

**Sentripetalkraft = Gravitasjonskraft:**
$$F_G = F_s$$
$$\\frac{GM_J m}{r^2} = m\\frac{v^2}{r}$$
$$\\frac{GM_J}{r} = v^2$$
$$v = \\sqrt{\\frac{GM_J}{r}}$$

**Viktig:** Farten avhenger kun av radius, ikke massen til satellitten!

**Periode:**
$$T = \\frac{2\\pi r}{v} = 2\\pi r \\sqrt{\\frac{r}{GM_J}} = 2\\pi \\sqrt{\\frac{r^3}{GM_J}}$$

Dette er **Keplers 3. lov:** $T^2 \\propto r^3$

**Geostasjonær bane:**
- $T = 24$ timer
- Satellitt står stille over ett punkt på Jorden
- $r \\approx 42\\,000$ km fra Jordens sentrum`,
    },
    {
      id: 'fys1-3-4-vertikal',
      type: 'text',
      content: `# Vertikal sirkelbevegelse

**Eksempler:**
- Berg-og-dal-bane (looping)
- Stein i vertikal slynge
- Pendel

**Utfordring:** Tyngdekraften er alltid nedover, men sentripetalkraft må være mot sentrum.

## Analyse av vertikal sirkel

**Viktige punkter:**
- **Nederst i sirkelen:** Sentripetalkraft oppover
- **Øverst i sirkelen:** Sentripetalkraft nedover
- **Sideveis:** Sentripetalkraft horisontalt

**Krefter:**
1. Tyngdekraft: $G = mg$ (alltid nedover)
2. Kontaktkraft (normalkraft eller snorkraft): $N$ eller $T$ (mot sentrum hvis tau, bort fra sentrum hvis sportvang)

## Nederst i sirkelen

**Krefter (positiv: oppover):**
- Normalkraft eller snorkraft: $N$ eller $T$ (oppover)
- Tyngdekraft: $G = mg$ (nedover)

**Sentripetalkraft (oppover mot sentrum):**
$$F_s = N - G = m\\frac{v^2}{r}$$

$$N = G + m\\frac{v^2}{r} = mg + m\\frac{v^2}{r} = m\\left(g + \\frac{v^2}{r}\\right)$$

**Viktig:** $N > G$ (normalkraft større enn tyngdekraft)

**Følelse:** Du føler deg tyngre (større normalkraft)

## Øverst i sirkelen

**To scenarioer:**

### Scenario A: Sportvang (berg-og-dal-bane)

**Krefter (positiv: nedover mot sentrum):**
- Tyngdekraft: $G = mg$ (nedover)
- Normalkraft: $N$ (nedover, fra sporet)

**Sentripetalkraft (nedover mot sentrum):**
$$F_s = G + N = m\\frac{v^2}{r}$$

$$N = m\\frac{v^2}{r} - mg = m\\left(\\frac{v^2}{r} - g\\right)$$

**Minimum fart for at $N \\geq 0$:**
$$\\frac{v_{\\text{min}}^2}{r} = g$$
$$v_{\\text{min}} = \\sqrt{gr}$$

Hvis $v < v_{\\text{min}}$: Vognen faller ned fra sporet (N kan ikke være negativ).

### Scenario B: Snor (stein i slynge)

**Krefter (positiv: nedover mot sentrum):**
- Tyngdekraft: $G = mg$ (nedover)
- Snorkraft: $T$ (nedover, mot sentrum)

**Sentripetalkraft:**
$$F_s = G + T = m\\frac{v^2}{r}$$

$$T = m\\frac{v^2}{r} - mg = m\\left(\\frac{v^2}{r} - g\\right)$$

**Minimum fart for at $T \\geq 0$:**
$$v_{\\text{min}} = \\sqrt{gr}$$

Hvis $v < v_{\\text{min}}$: Snoren slakker (T kan ikke være negativ, kun trekk).

## Sideveis (90° fra laveste punkt)

**Krefter:**
- Tyngdekraft: $G = mg$ (nedover, vinkelrett på radius)
- Normalkraft eller snorkraft: $N$ eller $T$ (horisontalt, mot sentrum)

**Sentripetalkraft (mot sentrum):**
$$F_s = N = m\\frac{v^2}{r}$$

**Tangentiell (langs bevegelse):**
$$F_t = -mg$$ (nedover komponent gir retardasjon hvis går oppover)

## Energi i vertikal sirkel

**Mekanisk energi bevares (ingen friksjon):**

**Nederst:**
$$E_{\\text{ned}} = \\frac{1}{2}mv_{\\text{ned}}^2 + 0$$

**Øverst (høyde = $2r$):**
$$E_{\\text{opp}} = \\frac{1}{2}mv_{\\text{opp}}^2 + mg(2r)$$

**Bevaring:**
$$\\frac{1}{2}mv_{\\text{ned}}^2 = \\frac{1}{2}mv_{\\text{opp}}^2 + 2mgr$$

$$v_{\\text{opp}}^2 = v_{\\text{ned}}^2 - 4gr$$

**Minimum fart nederst for å komme rundt:**

Øverst: $v_{\\text{opp,min}} = \\sqrt{gr}$

Nederst:
$$v_{\\text{ned,min}}^2 = v_{\\text{opp,min}}^2 + 4gr = gr + 4gr = 5gr$$
$$v_{\\text{ned,min}} = \\sqrt{5gr}$$`,
    },
    {
      id: 'fys1-3-4-ex-bil',
      type: 'example',
      title: 'Eksempel: Bil i rundkjøring',
      problem: 'En bil kjører i en flat rundkjøring med radius 40 m. Friksjonskoeffisienten mellom dekk og vei er $\\mu_s = 0.70$.\n\na) Hva er maksimal fart før bilen begynner å skli utover?\n\nb) Hvis bilen kjører med 50 km/t, hva er sentripetalkraften? Masse: 1200 kg.',
      solution: `**Gitt:**
- Radius: $r = 40$ m
- Friksjonskoeffisient: $\\mu_s = 0.70$
- Masse (del b): $m = 1200$ kg
- $g = 9.8$ m/s²

**a) Maksimal fart**

**Krefter:**
- Sentripetalkraft kommer fra friksjon

**Maksimal friksjon:**
$$f_{\\text{maks}} = \\mu_s N = \\mu_s mg$$

**Sentripetalkraft ved maksimal fart:**
$$F_s = m\\frac{v_{\\text{maks}}^2}{r}$$

**Sett lik:**
$$\\mu_s mg = m\\frac{v_{\\text{maks}}^2}{r}$$

$$v_{\\text{maks}}^2 = \\mu_s gr$$

$$v_{\\text{maks}} = \\sqrt{\\mu_s gr}$$

$$v_{\\text{maks}} = \\sqrt{0.70 \\cdot 9.8 \\cdot 40}$$

$$v_{\\text{maks}} = \\sqrt{274.4} = 16.6 \\text{ m/s}$$

$$v_{\\text{maks}} = 16.6 \\text{ m/s} = 59.7 \\text{ km/t}$$

**Svar:** $v_{\\text{maks}} = 16.6$ m/s ≈ 60 km/t

**b) Sentripetalkraft ved 50 km/t**

**Fart:**
$$v = 50 \\text{ km/t} = \\frac{50}{3.6} = 13.9 \\text{ m/s}$$

**Sentripetalkraft:**
$$F_s = m\\frac{v^2}{r}$$

$$F_s = 1200 \\cdot \\frac{(13.9)^2}{40}$$

$$F_s = 1200 \\cdot \\frac{193.2}{40} = 1200 \\cdot 4.83 = 5796 \\text{ N}$$

**Svar:** $F_s = 5800$ N = 5.8 kN

**Sjekk:** Er dette mindre enn maksimal friksjon?

$$f_{\\text{maks}} = \\mu_s mg = 0.70 \\cdot 1200 \\cdot 9.8 = 8232 \\text{ N}$$

Ja, $5796$ N < $8232$ N → Bilen sklir ikke ✓`,
    },
    {
      id: 'fys1-3-4-ex-looping',
      type: 'example',
      title: 'Eksempel: Berg-og-dal-bane looping',
      problem: 'En berg-og-dal-bane har en looping med radius 8.0 m. Vognen har masse 300 kg.\n\na) Hva er minimum fart øverst i loopen for at vognen ikke faller ned?\n\nb) Hva er minimum fart nederst i loopen for at vognen skal komme rundt?\n\nc) Hva er normalkraften nederst hvis vognen har denne minimum farten?',
      solution: `**Gitt:**
- Radius: $r = 8.0$ m
- Masse: $m = 300$ kg
- $g = 9.8$ m/s²

**a) Minimum fart øverst**

**Krefter øverst (positiv: ned mot sentrum):**
- Tyngdekraft: $G = mg$ (ned)
- Normalkraft: $N$ (ned)

**Sentripetalkraft:**
$$G + N = m\\frac{v^2}{r}$$

**Minimum: $N = 0$ (akkurat mister kontakt)**

$$mg = m\\frac{v_{\\text{min}}^2}{r}$$

$$v_{\\text{min}} = \\sqrt{gr}$$

$$v_{\\text{min}} = \\sqrt{9.8 \\cdot 8.0} = \\sqrt{78.4} = 8.85 \\text{ m/s}$$

**Svar:** $v_{\\text{opp,min}} = 8.9$ m/s = 32 km/t

**b) Minimum fart nederst**

**Energibevaring fra nederst til øverst:**

$$E_{\\text{ned}} = E_{\\text{opp}}$$

$$\\frac{1}{2}mv_{\\text{ned}}^2 + 0 = \\frac{1}{2}mv_{\\text{opp}}^2 + mg(2r)$$

$$v_{\\text{ned}}^2 = v_{\\text{opp}}^2 + 4gr$$

**Med $v_{\\text{opp}} = \\sqrt{gr}$:**

$$v_{\\text{ned}}^2 = gr + 4gr = 5gr$$

$$v_{\\text{ned}} = \\sqrt{5gr}$$

$$v_{\\text{ned}} = \\sqrt{5 \\cdot 9.8 \\cdot 8.0} = \\sqrt{392} = 19.8 \\text{ m/s}$$

**Svar:** $v_{\\text{ned,min}} = 19.8$ m/s ≈ 71 km/t

**c) Normalkraft nederst**

**Krefter nederst (positiv: opp mot sentrum):**
- Normalkraft: $N$ (opp)
- Tyngdekraft: $G = mg$ (ned)

**Sentripetalkraft:**
$$N - G = m\\frac{v_{\\text{ned}}^2}{r}$$

$$N = mg + m\\frac{v_{\\text{ned}}^2}{r}$$

$$N = m\\left(g + \\frac{v_{\\text{ned}}^2}{r}\\right)$$

**Med $v_{\\text{ned}}^2 = 5gr$:**

$$N = m\\left(g + \\frac{5gr}{r}\\right) = m(g + 5g) = 6mg$$

$$N = 6 \\cdot 300 \\cdot 9.8 = 17\\,640 \\text{ N}$$

**Svar:** $N = 17.6$ kN

**Tolkning:**
- Normalkraft er 6 ganger tyngdekraften!
- Passasjerene føler "6g" - meget ubehagelig
- Dette er hvorfor ekte berg-og-dal-baner har mindre looper`,
    },
  ],
  exercises: [
    {
      id: 'fys1-3-4-ex-1',
      number: '1',
      type: 'classic',
      difficulty: 'lett',
      task: 'En bil kjører i en rundkjøring med fart 15 m/s og radius 30 m. Beregn sentripetalakselerasjonen.',
      solution: `**Gitt:**
- Fart: $v = 15$ m/s
- Radius: $r = 30$ m

**Formel:**
$$a_s = \\frac{v^2}{r}$$

$$a_s = \\frac{15^2}{30} = \\frac{225}{30} = 7.5 \\text{ m/s}^2$$

**Svar:** $a_s = 7.5$ m/s²

**Tolkning:** Akselerasjon mot sentrum er ca. 75% av tyngdeakselerasjon.`,
      hints: ['Bruk formel: a_s = v²/r'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-4-ex-2',
      number: '2',
      type: 'classic',
      difficulty: 'lett',
      task: 'En karusell har radius 5.0 m og roterer med periode 8.0 s. Beregn:\n\na) Farten til en person på kanten\n\nb) Sentripetalakselerasjonen',
      solution: `**Gitt:**
- Radius: $r = 5.0$ m
- Periode: $T = 8.0$ s

**a) Fart**

$$v = \\frac{2\\pi r}{T}$$

$$v = \\frac{2\\pi \\cdot 5.0}{8.0} = \\frac{31.4}{8.0} = 3.93 \\text{ m/s}$$

**Svar:** $v = 3.9$ m/s = 14 km/t

**b) Sentripetalakselerasjon**

$$a_s = \\frac{v^2}{r}$$

$$a_s = \\frac{(3.93)^2}{5.0} = \\frac{15.4}{5.0} = 3.08 \\text{ m/s}^2$$

**Alternativ (direkte fra T):**

$$a_s = \\frac{4\\pi^2 r}{T^2} = \\frac{4\\pi^2 \\cdot 5.0}{8.0^2} = 3.08 \\text{ m/s}^2$$

**Svar:** $a_s = 3.1$ m/s²`,
      hints: ['Del a: v = 2πr/T', 'Del b: a_s = v²/r'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-4-ex-3',
      number: '3',
      type: 'classic',
      difficulty: 'medium',
      task: 'En bil med masse 1000 kg kjører i en rundkjøring med radius 25 m og fart 12 m/s. Beregn sentripetalkraften.',
      solution: `**Gitt:**
- Masse: $m = 1000$ kg
- Radius: $r = 25$ m
- Fart: $v = 12$ m/s

**Formel:**
$$F_s = m\\frac{v^2}{r}$$

$$F_s = 1000 \\cdot \\frac{12^2}{25} = 1000 \\cdot \\frac{144}{25} = 1000 \\cdot 5.76 = 5760 \\text{ N}$$

**Svar:** $F_s = 5760$ N = 5.8 kN

**Tolkning:**
- Denne kraften kommer fra friksjon mellom dekk og vei
- Friksjon mot sentrum hindrer bilen i å gli utover`,
      hints: ['Bruk F_s = mv²/r'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-4-ex-4',
      number: '4',
      type: 'classic',
      difficulty: 'medium',
      task: 'En stein med masse 0.50 kg svinges i horisontal sirkel med radius 1.2 m. Snorkraften er 30 N. Beregn farten.',
      solution: `**Gitt:**
- Masse: $m = 0.50$ kg
- Radius: $r = 1.2$ m
- Snorkraft: $T = 30$ N

**Sentripetalkraft = Snorkraft:**
$$T = m\\frac{v^2}{r}$$

$$v^2 = \\frac{Tr}{m}$$

$$v = \\sqrt{\\frac{Tr}{m}}$$

$$v = \\sqrt{\\frac{30 \\cdot 1.2}{0.50}} = \\sqrt{72} = 8.49 \\text{ m/s}$$

**Svar:** $v = 8.5$ m/s = 31 km/t`,
      hints: ['Sentripetalkraft = snorkraft', 'T = mv²/r, løs for v'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-4-ex-5',
      number: '5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor en bil kan kjøre raskere i en stor rundkjøring enn i en liten rundkjøring uten å skli.',
      solution: `**Maksimal fart i rundkjøring:**

$$v_{\\text{maks}} = \\sqrt{\\mu_s gr}$$

**Sammenheng:**
- Maksimal fart er proporsjonal med $\\sqrt{r}$
- Større radius → høyere maksimal fart

**Forklaring:**

**Sentripetalkraft nødvendig:**
$$F_s = m\\frac{v^2}{r}$$

For høyere fart ved samme radius → større sentripetalkraft nødvendig.

For samme fart ved større radius → mindre sentripetalkraft nødvendig.

**Maksimal tilgjengelig sentripetalkraft:**

Kommer fra friksjon:
$$F_{s,\\text{maks}} = \\mu_s mg$$

**Betingelse for ikke å skli:**
$$m\\frac{v^2}{r} \\leq \\mu_s mg$$

$$v \\leq \\sqrt{\\mu_s gr}$$

**Konklusjon:**

Større radius ($r$) → større $\\sqrt{r}$ → høyere $v_{\\text{maks}}$

**Intuitiv forståelse:**

**Liten radius:**
- Skarp sving
- Retningen endres raskt
- Stor sentripetalakselerasjon nødvendig
- Friksjon kan ikke gi nok kraft ved høy fart

**Stor radius:**
- Slak kurve
- Retningen endres sakte
- Liten sentripetalakselerasjon nødvendig
- Friksjon rekker ved høyere fart

**Eksempel:**

$\\mu_s = 0.80$, $g = 9.8$ m/s²

**Liten rundkjøring:** $r = 10$ m
$$v_{\\text{maks}} = \\sqrt{0.80 \\cdot 9.8 \\cdot 10} = 8.9 \\text{ m/s} = 32 \\text{ km/t}$$

**Stor rundkjøring:** $r = 40$ m
$$v_{\\text{maks}} = \\sqrt{0.80 \\cdot 9.8 \\cdot 40} = 17.7 \\text{ m/s} = 64 \\text{ km/t}$$

Dobbel radius → $\\sqrt{2}$ ganger høyere fart.`,
      hints: ['v_maks = √(μ_s gr)', 'Større r → større v_maks', 'Sammenlign sentripetalkraft nødvendig vs tilgjengelig'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-4-ex-6',
      number: '6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En person med masse 70 kg står på kanten av en karusell med radius 6.0 m. Karusellen roterer med periode 10 s. Beregn:\n\na) Sentripetalkraften\n\nb) Friksjonskoeffisienten som kreves for at personen ikke sklir utover',
      solution: `**Gitt:**
- Masse: $m = 70$ kg
- Radius: $r = 6.0$ m
- Periode: $T = 10$ s
- $g = 9.8$ m/s²

**a) Sentripetalkraft**

**Fart:**
$$v = \\frac{2\\pi r}{T} = \\frac{2\\pi \\cdot 6.0}{10} = 3.77 \\text{ m/s}$$

**Sentripetalkraft:**
$$F_s = m\\frac{v^2}{r}$$

$$F_s = 70 \\cdot \\frac{(3.77)^2}{6.0} = 70 \\cdot 2.37 = 165.9 \\text{ N}$$

**Alternativ (direkte):**
$$F_s = m\\frac{4\\pi^2 r}{T^2} = 70 \\cdot \\frac{4\\pi^2 \\cdot 6.0}{10^2} = 165.9 \\text{ N}$$

**Svar:** $F_s = 166$ N

**b) Friksjonskoeffisient nødvendig**

**Sentripetalkraft kommer fra friksjon:**
$$f = \\mu N$$

**Normalkraft (vertikal likevekt):**
$$N = mg = 70 \\cdot 9.8 = 686 \\text{ N}$$

**For å ikke skli:**
$$f \\geq F_s$$
$$\\mu N \\geq F_s$$
$$\\mu \\geq \\frac{F_s}{N}$$

$$\\mu \\geq \\frac{165.9}{686} = 0.242$$

**Svar:** $\\mu_s \\geq 0.24$

**Tolkning:**
- Ganske lav friksjonskoeffisient nødvendig (typisk sko på gulv: 0.4-0.8)
- De fleste kan stå på karusell ved denne farten`,
      hints: ['Del a: F_s = m·4π²r/T²', 'Del b: Friksjon gir sentripetalkraft', 'μ = F_s/N'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-4-ex-7',
      number: '7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En bil kjører over toppen av en bakke som har form som en sirkel med radius 50 m. Ved hvilken fart mister bilen kontakt med bakken?',
      solution: `**Gitt:**
- Radius: $r = 50$ m
- $g = 9.8$ m/s²

**Situasjon:** Topp av sirkulær bakke

**Krefter (positiv: ned mot sentrum):**
- Tyngdekraft: $G = mg$ (ned)
- Normalkraft: $N$ (ned, fra bakken)

**Sentripetalkraft:**
$$G + N = m\\frac{v^2}{r}$$

$$N = m\\frac{v^2}{r} - mg = m\\left(\\frac{v^2}{r} - g\\right)$$

**Bilen mister kontakt når $N = 0$:**

$$m\\frac{v^2}{r} = mg$$

$$v = \\sqrt{gr}$$

$$v = \\sqrt{9.8 \\cdot 50} = \\sqrt{490} = 22.1 \\text{ m/s}$$

$$v = 22.1 \\text{ m/s} = 79.7 \\text{ km/t}$$

**Svar:** $v = 22$ m/s ≈ 80 km/t

**Tolkning:**
- Ved denne farten er tyngdekraften alene nok til å gi sentripetalkraft
- Ingen normalkraft nødvendig
- Bilen "svever" over bakken (fritt fall i en kurvet bane)
- Ved høyere fart ville bilen "fly" av bakken`,
      hints: ['Topp av bakke: lik looping øverst', 'N = m(v²/r - g)', 'Mister kontakt: N = 0'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
    {
      id: 'fys1-3-4-ex-8',
      number: '8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Månen kretser rundt Jorden med radius 384 000 km og periode 27.3 dager. Beregn Jordens masse. Bruk $G = 6.67 \\times 10^{-11}$ N·m²/kg².',
      solution: `**Gitt:**
- Radius: $r = 384\\,000$ km = $3.84 \\times 10^8$ m
- Periode: $T = 27.3$ dager = $27.3 \\times 24 \\times 3600 = 2.36 \\times 10^6$ s
- Gravitasjonskonstant: $G = 6.67 \\times 10^{-11}$ N·m²/kg²

**Sentripetalkraft = Gravitasjonskraft:**

$$m_{\\text{Måne}}\\frac{v^2}{r} = \\frac{Gm_{\\text{Jord}}m_{\\text{Måne}}}{r^2}$$

$$\\frac{v^2}{r} = \\frac{Gm_{\\text{Jord}}}{r^2}$$

$$v^2 = \\frac{Gm_{\\text{Jord}}}{r}$$

**Fart fra periode:**
$$v = \\frac{2\\pi r}{T}$$

**Sett inn:**
$$\\left(\\frac{2\\pi r}{T}\\right)^2 = \\frac{Gm_{\\text{Jord}}}{r}$$

$$\\frac{4\\pi^2 r^2}{T^2} = \\frac{Gm_{\\text{Jord}}}{r}$$

$$m_{\\text{Jord}} = \\frac{4\\pi^2 r^3}{GT^2}$$

**Beregn:**

$$m_{\\text{Jord}} = \\frac{4\\pi^2 \\cdot (3.84 \\times 10^8)^3}{6.67 \\times 10^{-11} \\cdot (2.36 \\times 10^6)^2}$$

**Teller:**
$$4\\pi^2 \\cdot (3.84 \\times 10^8)^3 = 39.48 \\cdot 5.66 \\times 10^{25} = 2.23 \\times 10^{27}$$

**Nevner:**
$$6.67 \\times 10^{-11} \\cdot (2.36 \\times 10^6)^2 = 6.67 \\times 10^{-11} \\cdot 5.57 \\times 10^{12} = 3.71 \\times 10^2$$

$$m_{\\text{Jord}} = \\frac{2.23 \\times 10^{27}}{3.71 \\times 10^2} = 6.01 \\times 10^{24} \\text{ kg}$$

**Svar:** $m_{\\text{Jord}} = 6.0 \\times 10^{24}$ kg

**Faktisk verdi:** $5.97 \\times 10^{24}$ kg (meget nær!)

**Dette er Keplers 3. lov brukt til å finne masse:**
$$T^2 = \\frac{4\\pi^2}{Gm_{\\text{Jord}}} r^3$$`,
      hints: ['Sentripetalkraft = gravitasjonskraft', 'Bruk v = 2πr/T', 'Løs for m_Jord'],
      allowsUpload: true,
      allowsCanvasDrawing: true,
    },
  ],
};
