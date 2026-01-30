/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Fysikk 2 VG3 - Del 5
 * Kapittel 8.1–8.4: Eksperimentelt arbeid
 *
 * Dekker LK20-kompetansemål for fysikk 2 (FYS02-02)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Eksperimentell metode og usikkerhet
// ============================================================================

export const CHAPTER_FYSIKK2_8_1: TextbookChapter = {
  id: 'fysikk2-8-1',
  courseId: 'fysikk2',
  chapterNumber: '8.1',
  title: 'Eksperimentell metode og usikkerhet',
  description:
    'Lær om den vitenskapelige metoden, eksperimentdesign, måleusikkerhet, feiltyper, signifikante siffer og usikkerhetspropagering.',
  estimatedMinutes: 90,
  competenceGoals: [
    'planlegge og gjennomføre fysikkforsøk og vurdere usikkerhet i måleresultater',
    'bruke vitenskapelig metode til å formulere hypoteser og teste dem eksperimentelt',
    'beregne og vurdere måleusikkerhet i fysikkeksperimenter',
    'vurdere systematiske og tilfeldige feil i eksperimentelt arbeid',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'fys2-8-1-intro',
      type: 'text',
      content: `# Eksperimentell metode og usikkerhet

Fysikk er en eksperimentell vitenskap. Teorier og modeller må alltid testes mot virkeligheten gjennom eksperimenter og målinger. I dette kapittelet skal vi lære om den vitenskapelige metoden, hvordan vi planlegger gode eksperimenter, og hvordan vi håndterer den usikkerheten som alltid følger med målinger.

## Hvorfor er eksperimentelt arbeid viktig?

Fysikkens historie er full av eksempler der eksperimenter har bekreftet — eller motbevist — teoretiske forutsigelser:

- **Galileo Galilei** viste gjennom eksperimenter at alle legemer faller like raskt (uavhengig av masse) i fravær av luftmotstand.
- **Michelson–Morley-eksperimentet** (1887) viste at lysets hastighet er uavhengig av observatørens bevegelse, noe som la grunnlaget for Einsteins spesielle relativitetsteori.
- **Higgs-bosonet** ble bekreftet eksperimentelt ved CERN i 2012, nesten 50 år etter at det ble teoretisk forutsagt.

I all eksperimentell fysikk er det avgjørende å forstå usikkerhet. Ingen måling er perfekt, og en fysiker som ikke forstår usikkerheten i sine målinger, kan ikke trekke pålitelige konklusjoner.`,
    },

    // --- Vitenskapelig metode ---
    {
      id: 'fys2-8-1-metode',
      type: 'text',
      content: `## Den vitenskapelige metoden

Den vitenskapelige metoden er en systematisk tilnærming til å skaffe ny kunnskap. Den kan beskrives som en syklisk prosess med følgende steg:

1. **Observasjon**: Vi legger merke til et fenomen eller et mønster i naturen.
2. **Problemstilling**: Vi formulerer et konkret spørsmål vi ønsker å besvare.
3. **Hypotese**: Vi setter opp en testbar påstand — en forklaring vi kan undersøke eksperimentelt.
4. **Eksperiment**: Vi designer og gjennomfører forsøk for å teste hypotesen.
5. **Analyse**: Vi bearbeider og tolker resultatene.
6. **Konklusjon**: Vi vurderer om resultatene støtter eller falsifiserer hypotesen.
7. **Kommunikasjon**: Vi deler resultatene med andre forskere gjennom rapporter og artikler.

Prosessen er **syklisk**: Konklusjonen fra ett eksperiment fører ofte til nye observasjoner og nye hypoteser.

### Krav til en god hypotese

En vitenskapelig hypotese må være:

- **Testbar**: Den må kunne undersøkes eksperimentelt.
- **Falsifiserbar**: Det må i prinsippet være mulig å motbevise den.
- **Presis**: Den bør gjøre kvantitative forutsigelser som kan sammenlignes med målte verdier.

For eksempel er «tyngdekraften finnes» ikke en god hypotese (ikke falsifiserbar), mens «fritt fall nær jordoverflaten har akselerasjon $g = 9{,}81 \\, \\text{m/s}^2$» er testbar og falsifiserbar.`,
    },

    // --- Definisjon: Vitenskapelig metode ---
    {
      id: 'fys2-8-1-def-metode',
      type: 'definition',
      title: 'Vitenskapelig metode',
      content: `Den **vitenskapelige metoden** er en systematisk prosess for å tilegne seg kunnskap om naturen. Den bygger på:

- **Empiri**: Kunnskap basert på observasjoner og eksperimenter.
- **Reproduserbarhet**: Andre forskere skal kunne gjenta eksperimentet og få tilsvarende resultater.
- **Falsifiserbarhet**: En vitenskapelig påstand må i prinsippet kunne motbevises gjennom eksperiment.
- **Fagfellevurdering** (peer review): Andre eksperter vurderer arbeidet før det publiseres.`,
    },

    // --- Eksperimentdesign ---
    {
      id: 'fys2-8-1-design',
      type: 'text',
      content: `## Eksperimentdesign

Et godt eksperiment er nøye planlagt slik at vi kan trekke sikre konklusjoner. Nøkkelen er å kontrollere hvilke faktorer (variabler) som endres, og hvilke som holdes konstante.

### Variabler

I ethvert eksperiment skiller vi mellom tre typer variabler:

- **Uavhengig variabel** (påvirkningsvariabel): Den variabelen vi bevisst endrer. Vi velger selv hvilke verdier den skal ha.
- **Avhengig variabel** (responsvariabel): Den variabelen vi måler — den som potensielt påvirkes av den uavhengige variabelen.
- **Kontrollvariabler**: Alle andre faktorer som kan påvirke resultatet. Disse holdes så konstante som mulig.

### Eksempel: Pendeleksperiment

Anta at vi vil undersøke hva som påvirker svingetiden til en pendel.

| Variabel | Rolle | Eksempel |
|---|---|---|
| Pendellengde $L$ | Uavhengig | Vi varierer $L$ fra 0,2 m til 1,5 m |
| Svingetid $T$ | Avhengig | Vi måler $T$ for hver verdi av $L$ |
| Masse, utslag, luftmotstand | Kontroll | Holdes konstant |

### Kontrollgruppe og blindtest

I noen eksperimenter bruker vi en **kontrollgruppe** som ikke utsettes for den uavhengige variabelen. Dette lar oss sammenligne og isolere effekten. I medisinsk forskning brukes også **dobbeltblindtester** der verken forsøksperson eller forsker vet hvem som er i kontrollgruppen.

### Gjentakelser

For å sikre pålitelige resultater bør vi gjenta hver måling flere ganger. Dette lar oss beregne gjennomsnitt og vurdere spredningen i målingene.`,
    },

    // --- Definisjon: Variabler ---
    {
      id: 'fys2-8-1-def-variabler',
      type: 'definition',
      title: 'Variabler i et eksperiment',
      content: `- **Uavhengig variabel**: Variabelen vi bevisst endrer (manipulerer). Også kalt *påvirkningsvariabel* eller *forklaringsvariabel*.
- **Avhengig variabel**: Variabelen vi observerer og måler. Den reagerer på endringer i den uavhengige variabelen. Også kalt *responsvariabel*.
- **Kontrollvariabel**: Faktorer vi holder konstante for å sikre at endringer i den avhengige variabelen skyldes den uavhengige variabelen, og ikke noe annet.`,
    },

    // --- Måleusikkerhet ---
    {
      id: 'fys2-8-1-usikkerhet',
      type: 'text',
      content: `## Måleusikkerhet

Enhver måling har en **usikkerhet** — et mål på hvor sikker vi er på at den målte verdien er riktig. Usikkerheten skyldes begrensninger i måleinstrumentet, forsøkspersonens avlesing og ytre forstyrrelser.

### Absolutt usikkerhet

Den **absolutte usikkerheten** $\\Delta x$ angir intervallet den sanne verdien sannsynligvis ligger innenfor. Resultatet skrives som:

$$x = x_{\\text{målt}} \\pm \\Delta x$$

For eksempel: En lengde målt til $L = 1{,}53 \\pm 0{,}01 \\, \\text{m}$ betyr at den sanne lengden sannsynligvis ligger mellom $1{,}52 \\, \\text{m}$ og $1{,}54 \\, \\text{m}$.

### Relativ usikkerhet

Den **relative usikkerheten** uttrykker usikkerheten som en andel av den målte verdien:

$$\\text{Relativ usikkerhet} = \\frac{\\Delta x}{x}$$

Den oppgis ofte i prosent:

$$\\text{Prosentvis usikkerhet} = \\frac{\\Delta x}{x} \\times 100\\%$$

### Usikkerhet fra måleinstrumenter

En vanlig tommelfingerregel er at usikkerheten til et analogt måleinstrument er **halvparten av den minste skalainndelingen**. For eksempel:

| Instrument | Minste inndeling | Usikkerhet |
|---|---|---|
| Linjal | 1 mm | $\\pm 0{,}5 \\, \\text{mm}$ |
| Gradskive | $1°$ | $\\pm 0{,}5°$ |
| Termometer | $0{,}1°C$ | $\\pm 0{,}05°C$ |

For **digitale instrumenter** er usikkerheten typisk $\\pm 1$ i siste siffer, eventuelt som oppgitt av produsenten.`,
    },

    // --- Formel: Absolutt og relativ usikkerhet ---
    {
      id: 'fys2-8-1-formel-usikkerhet',
      type: 'formula',
      title: 'Absolutt og relativ usikkerhet',
      latex: `\\Delta x \\quad \\text{(absolutt)}, \\qquad \\frac{\\Delta x}{x} \\quad \\text{(relativ)}, \\qquad \\frac{\\Delta x}{x} \\times 100\\% \\quad \\text{(prosentvis)}`,
      description: `Absolutt usikkerhet $\\Delta x$ oppgis i samme enhet som målingen. Relativ usikkerhet er dimensjonsløs og uttrykkes ofte i prosent.`,
    },

    // --- Eksempel: Beregne relativ usikkerhet ---
    {
      id: 'fys2-8-1-eks-relativ',
      type: 'example',
      title: 'Beregne relativ usikkerhet',
      problem: `En elev måler diameteren til en kule med et skyvelære og får $d = 25{,}4 \\pm 0{,}1 \\, \\text{mm}$. Beregn den relative usikkerheten i prosent.`,
      solution: `**Relativ usikkerhet:**

$$\\frac{\\Delta d}{d} = \\frac{0{,}1}{25{,}4} = 0{,}00394$$

**Prosentvis usikkerhet:**

$$\\frac{\\Delta d}{d} \\times 100\\% = 0{,}394\\% \\approx 0{,}4\\%$$

**Svar:** Den relative usikkerheten er ca. $0{,}4\\%$. Dette er en ganske presis måling.`,
    },

    // --- Systematiske vs tilfeldige feil ---
    {
      id: 'fys2-8-1-feiltyper',
      type: 'text',
      content: `## Systematiske og tilfeldige feil

Avvik mellom den målte verdien og den sanne verdien kalles **feil** (error). Det finnes to hovedtyper:

### Systematiske feil

Systematiske feil gir målinger som konsekvent er **for høye** eller **for lave**. De påvirker nøyaktigheten, men ikke nødvendigvis presisjonen. Eksempler:

- En vekt som ikke er nullstilt (viser alltid 2 g for mye)
- Et termometer som er feilkalibrert
- Parallaksefeil ved avlesing av skala fra feil vinkel
- Reaksjonstid ved tidstagning med stoppeklokke (alltid litt for lang tid)
- Luftmotstand som ignoreres i beregninger

Systematiske feil kan ofte oppdages ved å sammenligne med en kjent referanseverdi, eller ved å bruke flere ulike målemetoder.

### Tilfeldige feil

Tilfeldige feil varierer tilfeldig fra måling til måling — noen ganger for høy, andre ganger for lav. De påvirker presisjonen. Eksempler:

- Vibrasjoner i laboratoriet
- Ujevn avlesing av skala
- Elektronisk støy i måleinstrumenter
- Små variasjoner i eksperimentelle betingelser

Tilfeldige feil kan reduseres ved å **gjenta målingen mange ganger** og beregne gjennomsnittet.`,
    },

    // --- Presisjon vs nøyaktighet ---
    {
      id: 'fys2-8-1-presisjon-noyaktighet',
      type: 'text',
      content: `## Presisjon vs nøyaktighet

Disse to begrepene forveksles ofte, men de betyr forskjellige ting:

- **Presisjon** (precision): Hvor godt gjentatte målinger stemmer overens med hverandre. Høy presisjon betyr liten spredning. Presisjon påvirkes av *tilfeldige feil*.
- **Nøyaktighet** (accuracy): Hvor nær den målte verdien er den *sanne* verdien. Høy nøyaktighet betyr lite avvik fra den sanne verdien. Nøyaktighet påvirkes av *systematiske feil*.

### Blink-analogien

Tenk deg en dartskive der sentrum er den sanne verdien:

| | Høy nøyaktighet | Lav nøyaktighet |
|---|---|---|
| **Høy presisjon** | Alle treffene er samlet rundt sentrum | Alle treffene er samlet, men langt fra sentrum |
| **Lav presisjon** | Treffene er spredt, men i snitt rundt sentrum | Treffene er spredt og langt fra sentrum |

Det ideelle er selvsagt **høy presisjon og høy nøyaktighet**.`,
    },

    // --- Definisjon: Presisjon og nøyaktighet ---
    {
      id: 'fys2-8-1-def-presisjon',
      type: 'definition',
      title: 'Presisjon og nøyaktighet',
      content: `**Presisjon** angir graden av samsvar mellom gjentatte målinger av samme størrelse. Påvirkes av tilfeldige feil. Kan forbedres ved å gjenta målinger.

**Nøyaktighet** angir graden av samsvar mellom den målte verdien og den sanne verdien. Påvirkes av systematiske feil. Kan forbedres ved kalibrering og bedre eksperimentdesign.`,
    },

    // --- Signifikante siffer ---
    {
      id: 'fys2-8-1-signifikante',
      type: 'text',
      content: `## Signifikante siffer

Antall **signifikante siffer** i et tall angir hvor mange meningsfulle sifre vi kjenner. Antall signifikante siffer gjenspeiler målingens presisjon.

### Regler for signifikante siffer

1. **Alle siffer unntatt null er signifikante**: $237$ har 3 signifikante siffer.
2. **Nuller mellom andre siffer er signifikante**: $1{,}0045$ har 5 signifikante siffer.
3. **Ledende nuller er IKKE signifikante**: $0{,}0032$ har 2 signifikante siffer.
4. **Etterfølgende nuller ETTER desimalkomma er signifikante**: $2{,}500$ har 4 signifikante siffer.
5. **Etterfølgende nuller UTEN desimalkomma er tvetydige**: $2500$ kan ha 2, 3 eller 4 signifikante siffer. Bruk vitenskapelig notasjon for å unngå tvetydighet: $2{,}50 \\times 10^3$ har 3 signifikante siffer.

### Regler ved regning

- **Addisjon/subtraksjon**: Svaret skal ha like mange desimaler som leddet med færrest desimaler.
- **Multiplikasjon/divisjon**: Svaret skal ha like mange signifikante siffer som faktoren med færrest signifikante siffer.

**Eksempel**: $3{,}14 \\times 2{,}1 = 6{,}594 \\rightarrow 6{,}6$ (2 signifikante siffer, fordi $2{,}1$ har 2).`,
    },

    // --- Note: Huskeregel for signifikante siffer ---
    {
      id: 'fys2-8-1-note-signifikante',
      type: 'note',
      title: 'Huskeregel for signifikante siffer',
      content: `**Addisjon/subtraksjon**: Tell *desimaler*.
**Multiplikasjon/divisjon**: Tell *signifikante siffer*.

Tommelfingerregel: Et beregnet resultat kan aldri være mer presist enn den minst presise inngangsverdien.`,
    },

    // --- Gauss-fordeling og standardavvik ---
    {
      id: 'fys2-8-1-gauss',
      type: 'text',
      content: `## Gauss-fordeling og standardavvik

Når vi gjentar en måling mange ganger, vil de tilfeldige feilene føre til at resultatene sprer seg rundt en sentralverdi. Denne spredningen følger ofte en **normalfordeling** (Gauss-fordeling), en klokkeformet kurve.

### Gjennomsnitt

Gjennomsnittet (middelverdi) av $N$ målinger $x_1, x_2, \\ldots, x_N$ er:

$$\\bar{x} = \\frac{1}{N} \\sum_{i=1}^{N} x_i = \\frac{x_1 + x_2 + \\cdots + x_N}{N}$$

Gjennomsnittet er vårt beste estimat for den sanne verdien.

### Standardavvik

**Standardavviket** $s$ beskriver spredningen i målingene:

$$s = \\sqrt{\\frac{1}{N-1} \\sum_{i=1}^{N} (x_i - \\bar{x})^2}$$

Vi bruker $N-1$ i nevneren (Bessels korreksjon) fordi vi estimerer fra et utvalg, ikke hele populasjonen.

### Standardavvik til gjennomsnittet

Usikkerheten i selve gjennomsnittet er gitt av **standardfeilen** (standardavvik til gjennomsnittet):

$$\\Delta \\bar{x} = \\frac{s}{\\sqrt{N}}$$

Denne minker med $\\sqrt{N}$, så flere målinger gir et mer nøyaktig gjennomsnitt.

### Tolkning av standardavviket

For en normalfordeling gjelder:

- Ca. $68\\%$ av målingene ligger innenfor $\\bar{x} \\pm s$
- Ca. $95\\%$ av målingene ligger innenfor $\\bar{x} \\pm 2s$
- Ca. $99{,}7\\%$ av målingene ligger innenfor $\\bar{x} \\pm 3s$`,
    },

    // --- Formel: Standardavvik ---
    {
      id: 'fys2-8-1-formel-stdavvik',
      type: 'formula',
      title: 'Standardavvik og standardfeil',
      latex: `s = \\sqrt{\\frac{1}{N-1} \\sum_{i=1}^{N} (x_i - \\bar{x})^2}, \\qquad \\Delta \\bar{x} = \\frac{s}{\\sqrt{N}}`,
      description: `$s$ er standardavviket til enkeltmålingene, og $\\Delta \\bar{x}$ er standardfeilen (usikkerheten i gjennomsnittet). $N$ er antall målinger.`,
    },

    // --- Eksempel: Standardavvik ---
    {
      id: 'fys2-8-1-eks-stdavvik',
      type: 'example',
      title: 'Beregne gjennomsnitt og standardavvik',
      problem: `En elev måler svingetiden til en pendel 6 ganger og får følgende verdier (i sekunder):

$1{,}42 \\quad 1{,}38 \\quad 1{,}45 \\quad 1{,}40 \\quad 1{,}43 \\quad 1{,}40$

Beregn gjennomsnitt, standardavvik og usikkerheten i gjennomsnittet.`,
      solution: `**Steg 1: Gjennomsnitt**

$$\\bar{T} = \\frac{1{,}42 + 1{,}38 + 1{,}45 + 1{,}40 + 1{,}43 + 1{,}40}{6} = \\frac{8{,}48}{6} = 1{,}4133 \\, \\text{s}$$

**Steg 2: Avvik fra gjennomsnittet**

| Måling $T_i$ | Avvik $T_i - \\bar{T}$ | $(T_i - \\bar{T})^2$ |
|---|---|---|
| 1,42 | 0,0067 | 0,0000444 |
| 1,38 | −0,0333 | 0,001111 |
| 1,45 | 0,0367 | 0,001344 |
| 1,40 | −0,0133 | 0,000178 |
| 1,43 | 0,0167 | 0,000278 |
| 1,40 | −0,0133 | 0,000178 |

Summen av kvadratavvikene:

$$\\sum (T_i - \\bar{T})^2 = 0{,}003133$$

**Steg 3: Standardavvik**

$$s = \\sqrt{\\frac{0{,}003133}{6-1}} = \\sqrt{0{,}0006267} = 0{,}025 \\, \\text{s}$$

**Steg 4: Standardfeil**

$$\\Delta \\bar{T} = \\frac{s}{\\sqrt{N}} = \\frac{0{,}025}{\\sqrt{6}} = 0{,}010 \\, \\text{s}$$

**Svar:** $T = 1{,}413 \\pm 0{,}010 \\, \\text{s}$

Standardavviket til enkeltmålingene er $0{,}025 \\, \\text{s}$, mens usikkerheten i gjennomsnittet er $0{,}010 \\, \\text{s}$.`,
    },

    // --- Usikkerhetspropagering ---
    {
      id: 'fys2-8-1-propagering',
      type: 'text',
      content: `## Usikkerhetspropagering

Ofte beregner vi en størrelse fra flere målte verdier. Da må vi finne ut hvordan usikkerhetene i inngangsverdiene forplanter seg til usikkerheten i resultatet. Dette kalles **usikkerhetspropagering** (eller feilforplantning).

### Addisjon og subtraksjon

Hvis $z = x + y$ eller $z = x - y$, der $x$ og $y$ har usikkerhetene $\\Delta x$ og $\\Delta y$, er usikkerheten i $z$:

$$\\Delta z = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$$

Vi legger altså sammen usikkerhetene i **kvadratur** (vi bruker Pytagoras).

### Multiplikasjon og divisjon

Hvis $z = x \\cdot y$ eller $z = \\frac{x}{y}$, bruker vi de **relative** usikkerhetene:

$$\\frac{\\Delta z}{z} = \\sqrt{\\left(\\frac{\\Delta x}{x}\\right)^2 + \\left(\\frac{\\Delta y}{y}\\right)^2}$$

### Generell potensformel

Hvis $z = x^n$, der $n$ er en konstant:

$$\\frac{\\Delta z}{z} = |n| \\cdot \\frac{\\Delta x}{x}$$

### Generell formel (for vilkårlige funksjoner)

For en funksjon $z = f(x, y, \\ldots)$ er den generelle formelen:

$$\\Delta z = \\sqrt{\\left(\\frac{\\partial f}{\\partial x} \\Delta x\\right)^2 + \\left(\\frac{\\partial f}{\\partial y} \\Delta y\\right)^2 + \\cdots}$$

Her bruker vi partielle deriverte. Denne formelen omfatter alle spesialtilfellene over.`,
    },

    // --- Formel: Usikkerhetspropagering ---
    {
      id: 'fys2-8-1-formel-propagering',
      type: 'formula',
      title: 'Usikkerhetspropagering',
      latex: `\\text{Addisjon/subtraksjon: } \\Delta z = \\sqrt{(\\Delta x)^2 + (\\Delta y)^2} \\\\[6pt]
\\text{Multiplikasjon/divisjon: } \\frac{\\Delta z}{z} = \\sqrt{\\left(\\frac{\\Delta x}{x}\\right)^2 + \\left(\\frac{\\Delta y}{y}\\right)^2} \\\\[6pt]
\\text{Potens } z = x^n\\text{: } \\frac{\\Delta z}{z} = |n| \\cdot \\frac{\\Delta x}{x}`,
      description: `Disse formlene forutsetter at usikkerhetene i $x$ og $y$ er uavhengige (ukorrelerte). For korrelerte usikkerheter trengs mer avanserte metoder.`,
    },

    // --- Eksempel: Usikkerhetspropagering ---
    {
      id: 'fys2-8-1-eks-propagering',
      type: 'example',
      title: 'Usikkerhetspropagering — beregne tetthet',
      problem: `En sylinder har masse $m = 125{,}3 \\pm 0{,}5 \\, \\text{g}$, radius $r = 1{,}50 \\pm 0{,}02 \\, \\text{cm}$ og høyde $h = 8{,}40 \\pm 0{,}05 \\, \\text{cm}$.

Tettheten er gitt av $\\rho = \\frac{m}{\\pi r^2 h}$.

Beregn tettheten med usikkerhet.`,
      solution: `**Steg 1: Beregn tettheten**

$$V = \\pi r^2 h = \\pi \\cdot (1{,}50)^2 \\cdot 8{,}40 = 59{,}38 \\, \\text{cm}^3$$

$$\\rho = \\frac{m}{V} = \\frac{125{,}3}{59{,}38} = 2{,}110 \\, \\text{g/cm}^3$$

**Steg 2: Beregn relative usikkerheter**

$$\\frac{\\Delta m}{m} = \\frac{0{,}5}{125{,}3} = 0{,}00399$$

Fordi $r$ opptrer som $r^2$, multipliserer vi den relative usikkerheten med 2:

$$\\frac{\\Delta(r^2)}{r^2} = 2 \\cdot \\frac{\\Delta r}{r} = 2 \\cdot \\frac{0{,}02}{1{,}50} = 0{,}02667$$

$$\\frac{\\Delta h}{h} = \\frac{0{,}05}{8{,}40} = 0{,}00595$$

**Steg 3: Kombinert relativ usikkerhet**

Siden $\\rho = \\frac{m}{\\pi r^2 h}$ (multiplikasjon/divisjon):

$$\\frac{\\Delta \\rho}{\\rho} = \\sqrt{\\left(\\frac{\\Delta m}{m}\\right)^2 + \\left(2 \\cdot \\frac{\\Delta r}{r}\\right)^2 + \\left(\\frac{\\Delta h}{h}\\right)^2}$$

$$= \\sqrt{(0{,}00399)^2 + (0{,}02667)^2 + (0{,}00595)^2}$$

$$= \\sqrt{0{,}0000159 + 0{,}000711 + 0{,}0000354} = \\sqrt{0{,}000762} = 0{,}0276$$

**Steg 4: Absolutt usikkerhet**

$$\\Delta \\rho = 0{,}0276 \\times 2{,}110 = 0{,}058 \\, \\text{g/cm}^3$$

**Svar:** $\\rho = 2{,}11 \\pm 0{,}06 \\, \\text{g/cm}^3$

Legg merke til at usikkerheten i radius dominerer — den bidrar mest fordi den opptrer i andre potens.`,
    },

    // --- Warning: Vanlige feil ---
    {
      id: 'fys2-8-1-warning-feil',
      type: 'warning',
      title: 'Vanlige feil ved usikkerhetsberegning',
      content: `- **Legge sammen absolutte usikkerheter direkte** ved multiplikasjon/divisjon. Bruk relative usikkerheter!
- **Glemme at $r^2$ gir dobbel relativ usikkerhet**. Huskeregelen er: potensen $n$ multipliserer den relative usikkerheten.
- **For mange desimaler i usikkerheten**. Usikkerheten bør ha 1–2 signifikante siffer, og resultatet avrundes tilsvarende.
- **Glemme å oppgi usikkerhet i svaret**. Et fysisk resultat uten usikkerhet er ufullstendig!`,
    },

    // --- Eksempel: Addisjon med usikkerhet ---
    {
      id: 'fys2-8-1-eks-addisjon',
      type: 'example',
      title: 'Usikkerhet ved addisjon',
      problem: `To lengder er målt: $L_1 = 32{,}5 \\pm 0{,}3 \\, \\text{cm}$ og $L_2 = 47{,}8 \\pm 0{,}2 \\, \\text{cm}$. Finn totallengden $L = L_1 + L_2$ med usikkerhet.`,
      solution: `**Totalverdi:**

$$L = L_1 + L_2 = 32{,}5 + 47{,}8 = 80{,}3 \\, \\text{cm}$$

**Usikkerhet (addisjon — bruk absolutte usikkerheter):**

$$\\Delta L = \\sqrt{(\\Delta L_1)^2 + (\\Delta L_2)^2} = \\sqrt{(0{,}3)^2 + (0{,}2)^2} = \\sqrt{0{,}09 + 0{,}04} = \\sqrt{0{,}13} = 0{,}36 \\, \\text{cm}$$

**Svar:** $L = 80{,}3 \\pm 0{,}4 \\, \\text{cm}$ (avrundet til 1 signifikant siffer i usikkerheten).`,
    },

    // --- Note: Oppsummering ---
    {
      id: 'fys2-8-1-note-oppsummering',
      type: 'note',
      title: 'Oppsummering av kapittel 8.1',
      content: `**Vitenskapelig metode**: Observasjon → Hypotese → Eksperiment → Analyse → Konklusjon

**Variabler**: Uavhengig (endres), avhengig (måles), kontroll (holdes fast)

**Usikkerhet**: Absolutt ($\\Delta x$) og relativ ($\\Delta x / x$)

**Feiltyper**: Systematiske (påvirker nøyaktighet) vs tilfeldige (påvirker presisjon)

**Standardavvik**: $s = \\sqrt{\\frac{1}{N-1}\\sum(x_i - \\bar{x})^2}$, standardfeil: $\\Delta \\bar{x} = s/\\sqrt{N}$

**Usikkerhetspropagering**: Addisjon/subtraksjon → absolutte, multiplikasjon/divisjon → relative (kvadratursum)`,
    },
  ],

  // --- Oppgaver ---
  exercises: [
    {
      id: 'fys2-8-1-ex1',
      type: 'classic',
      difficulty: 'lett',
      task: `Identifiser uavhengig variabel, avhengig variabel og kontrollvariabler i dette eksperimentet:

«Vi undersøker hvordan temperaturen påvirker motstanden i en kobbertråd. Vi måler motstanden ved ulike temperaturer, og bruker samme tråd gjennom hele forsøket.»`,
      solution: `- **Uavhengig variabel**: Temperatur (den vi bevisst endrer)
- **Avhengig variabel**: Motstand (den vi måler)
- **Kontrollvariabler**: Trådens lengde, tverrsnitt, materiale (kobber) — alle holdes konstant`,
    },
    {
      id: 'fys2-8-1-ex2',
      type: 'classic',
      difficulty: 'lett',
      task: `Avgjør antall signifikante siffer i hvert av disse tallene:

a) $30{,}40$
b) $0{,}00520$
c) $1{,}0 \\times 10^3$
d) $6{,}022 \\times 10^{23}$`,
      solution: `a) $30{,}40$ — **4** signifikante siffer (etterfølgende null etter komma teller)
b) $0{,}00520$ — **3** signifikante siffer (ledende nuller teller ikke, men den siste nullen etter 52 teller)
c) $1{,}0 \\times 10^3$ — **2** signifikante siffer
d) $6{,}022 \\times 10^{23}$ — **4** signifikante siffer`,
    },
    {
      id: 'fys2-8-1-ex3',
      type: 'classic',
      difficulty: 'lett',
      task: `En elev måler lengden av et bord med en linjal (minste inndeling 1 mm) og får $L = 1{,}247 \\, \\text{m}$.

a) Hva er den absolutte usikkerheten?
b) Hva er den relative usikkerheten i prosent?`,
      solution: `a) Usikkerhet = halve minste inndeling = $\\pm 0{,}5 \\, \\text{mm} = \\pm 0{,}0005 \\, \\text{m}$

Altså: $L = 1{,}247 \\pm 0{,}001 \\, \\text{m}$ (avrundet til 1 mm-presisjon)

b) Relativ usikkerhet:
$$\\frac{\\Delta L}{L} = \\frac{0{,}0005}{1{,}247} = 0{,}000401 \\approx 0{,}04\\%$$`,
    },
    {
      id: 'fys2-8-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: `Forklar forskjellen mellom systematiske og tilfeldige feil. Gi to eksempler på hver type som kan oppstå når du måler fallakselerasjonen $g$ ved å slippe en ball fra en bestemt høyde og måle falltiden.`,
      solution: `**Systematiske feil** gir resultater som konsekvent er for høye eller for lave:
1. *Luftmotstand*: Bremser ballen, gir lengre falltid og dermed en for lav verdi av $g$.
2. *Feil i høydemåling*: Hvis vi måler høyden fra gulvet i stedet for ballens sentrum, blir $h$ systematisk litt feil.

**Tilfeldige feil** varierer tilfeldig mellom målingene:
1. *Reaksjonstid*: Når vi starter/stopper stoppeklokken, varierer forsinkelsen fra gang til gang.
2. *Slippøyeblikket*: Ballen slippes ikke fra nøyaktig samme posisjon og på nøyaktig samme måte hver gang.

Systematiske feil kan reduseres med bedre utstyr og metode. Tilfeldige feil kan reduseres ved å gjenta målingen mange ganger.`,
    },
    {
      id: 'fys2-8-1-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: `En elev gjør 8 målinger av svingetiden til en pendel og får (i sekunder):

$2{,}03 \\quad 2{,}07 \\quad 2{,}01 \\quad 2{,}05 \\quad 2{,}04 \\quad 2{,}06 \\quad 2{,}02 \\quad 2{,}04$

a) Beregn gjennomsnittlig svingetid.
b) Beregn standardavviket.
c) Beregn usikkerheten i gjennomsnittet (standardfeilen).
d) Oppgi resultatet med usikkerhet.`,
      solution: `**a) Gjennomsnitt:**

$$\\bar{T} = \\frac{2{,}03 + 2{,}07 + 2{,}01 + 2{,}05 + 2{,}04 + 2{,}06 + 2{,}02 + 2{,}04}{8} = \\frac{16{,}32}{8} = 2{,}040 \\, \\text{s}$$

**b) Standardavvik:**

Avvikene: $-0{,}01; \\; +0{,}03; \\; -0{,}03; \\; +0{,}01; \\; 0{,}00; \\; +0{,}02; \\; -0{,}02; \\; 0{,}00$

$$\\sum(T_i - \\bar{T})^2 = 0{,}0001 + 0{,}0009 + 0{,}0009 + 0{,}0001 + 0 + 0{,}0004 + 0{,}0004 + 0 = 0{,}0028$$

$$s = \\sqrt{\\frac{0{,}0028}{7}} = \\sqrt{0{,}000400} = 0{,}020 \\, \\text{s}$$

**c) Standardfeil:**

$$\\Delta \\bar{T} = \\frac{s}{\\sqrt{N}} = \\frac{0{,}020}{\\sqrt{8}} = \\frac{0{,}020}{2{,}828} = 0{,}007 \\, \\text{s}$$

**d) Resultat:**

$$T = 2{,}040 \\pm 0{,}007 \\, \\text{s}$$`,
    },
    {
      id: 'fys2-8-1-ex6',
      type: 'classic',
      difficulty: 'medium',
      task: `Et rektangulært blad har sider $a = 15{,}2 \\pm 0{,}1 \\, \\text{cm}$ og $b = 8{,}7 \\pm 0{,}1 \\, \\text{cm}$.

a) Beregn arealet $A = a \\cdot b$ med usikkerhet.
b) Beregn omkretsen $O = 2(a + b)$ med usikkerhet.`,
      solution: `**a) Areal (multiplikasjon — bruk relative usikkerheter):**

$$A = 15{,}2 \\times 8{,}7 = 132{,}24 \\, \\text{cm}^2$$

$$\\frac{\\Delta A}{A} = \\sqrt{\\left(\\frac{0{,}1}{15{,}2}\\right)^2 + \\left(\\frac{0{,}1}{8{,}7}\\right)^2} = \\sqrt{(0{,}00658)^2 + (0{,}01149)^2} = \\sqrt{0{,}0000433 + 0{,}000132} = 0{,}01324$$

$$\\Delta A = 0{,}01324 \\times 132{,}24 = 1{,}75 \\, \\text{cm}^2$$

$$A = 132 \\pm 2 \\, \\text{cm}^2$$

**b) Omkrets (addisjon — bruk absolutte usikkerheter):**

$$O = 2(15{,}2 + 8{,}7) = 2 \\times 23{,}9 = 47{,}8 \\, \\text{cm}$$

Usikkerhet i summen $a + b$:
$$\\Delta(a+b) = \\sqrt{(0{,}1)^2 + (0{,}1)^2} = \\sqrt{0{,}02} = 0{,}14 \\, \\text{cm}$$

Faktor 2 er en eksakt konstant, så:
$$\\Delta O = 2 \\times 0{,}14 = 0{,}28 \\, \\text{cm}$$

$$O = 47{,}8 \\pm 0{,}3 \\, \\text{cm}$$`,
    },
    {
      id: 'fys2-8-1-ex7',
      type: 'classic',
      difficulty: 'medium',
      task: `Fallakselerasjonen beregnes fra formelen $g = \\frac{2h}{t^2}$ der $h = 2{,}000 \\pm 0{,}005 \\, \\text{m}$ og $t = 0{,}639 \\pm 0{,}008 \\, \\text{s}$.

a) Beregn $g$.
b) Beregn usikkerheten $\\Delta g$.
c) Oppgi resultatet med usikkerhet og sammenlign med tabelverdi $g = 9{,}81 \\, \\text{m/s}^2$.`,
      solution: `**a) Beregn $g$:**

$$g = \\frac{2 \\times 2{,}000}{(0{,}639)^2} = \\frac{4{,}000}{0{,}4083} = 9{,}80 \\, \\text{m/s}^2$$

**b) Usikkerhet:**

$g = \\frac{2h}{t^2}$ — her inngår $h$ lineært og $t$ i andre potens.

$$\\frac{\\Delta g}{g} = \\sqrt{\\left(\\frac{\\Delta h}{h}\\right)^2 + \\left(2 \\cdot \\frac{\\Delta t}{t}\\right)^2}$$

$$= \\sqrt{\\left(\\frac{0{,}005}{2{,}000}\\right)^2 + \\left(2 \\cdot \\frac{0{,}008}{0{,}639}\\right)^2}$$

$$= \\sqrt{(0{,}00250)^2 + (0{,}02504)^2} = \\sqrt{6{,}25 \\times 10^{-6} + 6{,}27 \\times 10^{-4}} = \\sqrt{6{,}33 \\times 10^{-4}} = 0{,}0252$$

$$\\Delta g = 0{,}0252 \\times 9{,}80 = 0{,}25 \\, \\text{m/s}^2$$

**c) Resultat:**

$$g = 9{,}80 \\pm 0{,}25 \\, \\text{m/s}^2$$

Tabelverdien $9{,}81 \\, \\text{m/s}^2$ ligger godt innenfor usikkerhetsintervallet $[9{,}55; \\, 10{,}05]$, så resultatet er forenlig med den aksepterte verdien. Usikkerheten domineres av tidsmålingen (merk at $t$ har potens 2).`,
    },
    {
      id: 'fys2-8-1-ex8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Strømmen $I$ gjennom en motstand er gitt ved Ohms lov: $I = \\frac{U}{R}$.

En elev måler $U = 5{,}10 \\pm 0{,}05 \\, \\text{V}$ og $R = 470 \\pm 10 \\, \\Omega$.

a) Beregn strømmen $I$ med usikkerhet.
b) Effekten er $P = U \\cdot I = \\frac{U^2}{R}$. Beregn effekten med usikkerhet.
c) Hvilken måling bidrar mest til usikkerheten i $P$?`,
      solution: `**a) Strøm:**

$$I = \\frac{5{,}10}{470} = 0{,}01085 \\, \\text{A} = 10{,}85 \\, \\text{mA}$$

$$\\frac{\\Delta I}{I} = \\sqrt{\\left(\\frac{0{,}05}{5{,}10}\\right)^2 + \\left(\\frac{10}{470}\\right)^2} = \\sqrt{(0{,}00980)^2 + (0{,}02128)^2} = \\sqrt{9{,}60 \\times 10^{-5} + 4{,}53 \\times 10^{-4}} = 0{,}02342$$

$$\\Delta I = 0{,}02342 \\times 10{,}85 = 0{,}25 \\, \\text{mA}$$

$$I = 10{,}9 \\pm 0{,}3 \\, \\text{mA}$$

**b) Effekt:** $P = U^2 / R$

$$P = \\frac{(5{,}10)^2}{470} = \\frac{26{,}01}{470} = 0{,}05534 \\, \\text{W} = 55{,}3 \\, \\text{mW}$$

$$\\frac{\\Delta P}{P} = \\sqrt{\\left(2 \\cdot \\frac{\\Delta U}{U}\\right)^2 + \\left(\\frac{\\Delta R}{R}\\right)^2} = \\sqrt{(2 \\times 0{,}00980)^2 + (0{,}02128)^2}$$

$$= \\sqrt{(0{,}01961)^2 + (0{,}02128)^2} = \\sqrt{3{,}84 \\times 10^{-4} + 4{,}53 \\times 10^{-4}} = 0{,}02894$$

$$\\Delta P = 0{,}02894 \\times 55{,}3 = 1{,}60 \\, \\text{mW}$$

$$P = 55 \\pm 2 \\, \\text{mW}$$

**c)** Bidragene er: Spenning: $(0{,}01961)^2 = 3{,}84 \\times 10^{-4}$ og motstand: $(0{,}02128)^2 = 4{,}53 \\times 10^{-4}$. Motstanden bidrar noe mer, men begge bidrar vesentlig. Legg merke til at $U$ opptrer i andre potens, som fordobler dens relative bidrag.`,
    },
    {
      id: 'fys2-8-1-ex9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Svingetiden for en matematisk pendel er gitt av $T = 2\\pi\\sqrt{\\frac{L}{g}}$.

a) Vis at den relative usikkerheten i $g$ er: $\\frac{\\Delta g}{g} = \\sqrt{\\left(\\frac{\\Delta L}{L}\\right)^2 + \\left(2\\frac{\\Delta T}{T}\\right)^2}$

b) En elev måler $L = 1{,}200 \\pm 0{,}003 \\, \\text{m}$ og $T = 2{,}198 \\pm 0{,}010 \\, \\text{s}$. Beregn $g$ med usikkerhet.

c) Hvilken forbedring ville ha størst effekt på å redusere usikkerheten: å halvere $\\Delta L$ eller halvere $\\Delta T$?`,
      solution: `**a) Utledning:**

Fra $T = 2\\pi\\sqrt{L/g}$ får vi:

$$T^2 = 4\\pi^2 \\frac{L}{g} \\quad \\Rightarrow \\quad g = \\frac{4\\pi^2 L}{T^2}$$

Her er $g$ proporsjonalt med $L^1$ og $T^{-2}$. Usikkerhetspropagering gir:

$$\\frac{\\Delta g}{g} = \\sqrt{\\left(1 \\cdot \\frac{\\Delta L}{L}\\right)^2 + \\left(|-2| \\cdot \\frac{\\Delta T}{T}\\right)^2} = \\sqrt{\\left(\\frac{\\Delta L}{L}\\right)^2 + \\left(2\\frac{\\Delta T}{T}\\right)^2} \\quad \\square$$

**b) Beregn $g$:**

$$g = \\frac{4\\pi^2 \\times 1{,}200}{(2{,}198)^2} = \\frac{47{,}37}{4{,}831} = 9{,}806 \\, \\text{m/s}^2$$

Relative usikkerheter:
$$\\frac{\\Delta L}{L} = \\frac{0{,}003}{1{,}200} = 0{,}00250$$

$$2 \\cdot \\frac{\\Delta T}{T} = 2 \\cdot \\frac{0{,}010}{2{,}198} = 0{,}00910$$

$$\\frac{\\Delta g}{g} = \\sqrt{(0{,}00250)^2 + (0{,}00910)^2} = \\sqrt{6{,}25 \\times 10^{-6} + 8{,}28 \\times 10^{-5}} = \\sqrt{8{,}91 \\times 10^{-5}} = 0{,}00944$$

$$\\Delta g = 0{,}00944 \\times 9{,}806 = 0{,}093 \\, \\text{m/s}^2$$

$$g = 9{,}81 \\pm 0{,}09 \\, \\text{m/s}^2$$

**c)** Bidraget fra $T$: $(0{,}00910)^2 = 8{,}28 \\times 10^{-5}$ dominerer over bidraget fra $L$: $(0{,}00250)^2 = 6{,}25 \\times 10^{-6}$.

Å halvere $\\Delta T$ ville redusere $T$-bidraget til $(0{,}00455)^2 = 2{,}07 \\times 10^{-5}$, noe som gir:
$$\\frac{\\Delta g}{g} = \\sqrt{6{,}25 \\times 10^{-6} + 2{,}07 \\times 10^{-5}} = 0{,}0052$$

Å halvere $\\Delta L$ ville gi: $\\frac{\\Delta g}{g} = \\sqrt{1{,}56 \\times 10^{-6} + 8{,}28 \\times 10^{-5}} = 0{,}0092$.

**Å halvere $\\Delta T$ har klart størst effekt** fordi tidsmålingen dominerer usikkerheten (pga. faktoren 2).`,
    },
    {
      id: 'fys2-8-1-ex10',
      type: 'classic',
      difficulty: 'lett',
      task: `Forklar med egne ord forskjellen mellom presisjon og nøyaktighet. Gi et eksempel fra hverdagen der noe kan være presist men ikke nøyaktig.`,
      solution: `**Presisjon** handler om at gjentatte målinger gir tilnærmet samme resultat — liten spredning.

**Nøyaktighet** handler om at resultatet ligger nær den sanne verdien.

**Hverdagseksempel:** En klokke som alltid går 5 minutter for fort. Den viser konsekvent samme tid hvis du ser på den gjentatte ganger (høy presisjon), men den viser aldri riktig tid (lav nøyaktighet). Dette er en systematisk feil.`,
    },
    {
      id: 'fys2-8-1-ex11',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `En elev skal bestemme den spesifikke varmekapasiteten til en metallklump ved å varme den opp og legge den i kaldt vann. Energibevarelse gir:

$$c_{\\text{metall}} = \\frac{m_{\\text{vann}} \\cdot c_{\\text{vann}} \\cdot \\Delta T_{\\text{vann}}}{m_{\\text{metall}} \\cdot \\Delta T_{\\text{metall}}}$$

Målte verdier:
- $m_{\\text{vann}} = 200{,}0 \\pm 0{,}5 \\, \\text{g}$
- $m_{\\text{metall}} = 50{,}2 \\pm 0{,}3 \\, \\text{g}$
- $\\Delta T_{\\text{vann}} = 4{,}2 \\pm 0{,}3 \\, °\\text{C}$
- $\\Delta T_{\\text{metall}} = 75{,}0 \\pm 1{,}0 \\, °\\text{C}$
- $c_{\\text{vann}} = 4{,}186 \\, \\text{J/(g·°C)}$ (tabellverdi, eksakt)

a) Beregn $c_{\\text{metall}}$.
b) Beregn usikkerheten $\\Delta c_{\\text{metall}}$.
c) Vurder om resultatet stemmer med tabellverdi for aluminium ($c = 0{,}897 \\, \\text{J/(g·°C)}$).`,
      solution: `**a) Beregning:**

$$c_{\\text{metall}} = \\frac{200{,}0 \\times 4{,}186 \\times 4{,}2}{50{,}2 \\times 75{,}0} = \\frac{3516{,}2}{3765{,}0} = 0{,}934 \\, \\text{J/(g·°C)}$$

**b) Usikkerhet:**

Relative usikkerheter:
- $\\frac{\\Delta m_{\\text{vann}}}{m_{\\text{vann}}} = \\frac{0{,}5}{200{,}0} = 0{,}00250$
- $\\frac{\\Delta m_{\\text{metall}}}{m_{\\text{metall}}} = \\frac{0{,}3}{50{,}2} = 0{,}00598$
- $\\frac{\\Delta(\\Delta T_{\\text{vann}})}{\\Delta T_{\\text{vann}}} = \\frac{0{,}3}{4{,}2} = 0{,}0714$
- $\\frac{\\Delta(\\Delta T_{\\text{metall}})}{\\Delta T_{\\text{metall}}} = \\frac{1{,}0}{75{,}0} = 0{,}0133$

Kombinert:
$$\\frac{\\Delta c}{c} = \\sqrt{(0{,}00250)^2 + (0{,}00598)^2 + (0{,}0714)^2 + (0{,}0133)^2}$$
$$= \\sqrt{6{,}25 \\times 10^{-6} + 3{,}58 \\times 10^{-5} + 5{,}10 \\times 10^{-3} + 1{,}78 \\times 10^{-4}} = \\sqrt{5{,}32 \\times 10^{-3}} = 0{,}0729$$

$$\\Delta c = 0{,}0729 \\times 0{,}934 = 0{,}068 \\, \\text{J/(g·°C)}$$

$$c_{\\text{metall}} = 0{,}93 \\pm 0{,}07 \\, \\text{J/(g·°C)}$$

**c)** Tabelverdien for aluminium er $0{,}897 \\, \\text{J/(g·°C)}$. Intervallet $[0{,}86; \\, 1{,}00]$ inneholder denne verdien, så resultatet er forenlig med aluminium. Usikkerheten domineres av $\\Delta T_{\\text{vann}}$ (den lille temperaturstigningen er vanskelig å måle nøyaktig).`,
    },
    {
      id: 'fys2-8-1-ex12',
      type: 'classic',
      difficulty: 'medium',
      task: `Utfør følgende beregninger med riktig antall signifikante siffer:

a) $3{,}456 + 12{,}1$
b) $2{,}50 \\times 3{,}2$
c) $\\frac{6{,}674 \\times 10^{-11} \\times 5{,}97 \\times 10^{24}}{(6{,}371 \\times 10^6)^2}$`,
      solution: `**a) Addisjon (tell desimaler):**
$3{,}456 + 12{,}1 = 15{,}556 \\rightarrow 15{,}6$ (1 desimal, styrt av $12{,}1$)

**b) Multiplikasjon (tell signifikante siffer):**
$2{,}50 \\times 3{,}2 = 8{,}00 \\rightarrow 8{,}0$ (2 signifikante siffer, styrt av $3{,}2$)

**c) Multiplikasjon/divisjon:**
Telleren: $6{,}674 \\times 10^{-11} \\times 5{,}97 \\times 10^{24} = 3{,}984 \\times 10^{14}$

Nevneren: $(6{,}371 \\times 10^6)^2 = 4{,}059 \\times 10^{13}$

$$\\frac{3{,}984 \\times 10^{14}}{4{,}059 \\times 10^{13}} = 9{,}815 \\rightarrow 9{,}82$$

Svaret har 3 signifikante siffer (styrt av $5{,}97$, som har færrest). Merk: dette er tyngdeakselerasjonen $g$!`,
    },
  ],
};


// ============================================================================
// Kapittel 8.2: Dataanalyse og feilkilder
// ============================================================================

export const CHAPTER_FYSIKK2_8_2: TextbookChapter = {
  id: 'fysikk2-8-2',
  courseId: 'fysikk2',
  chapterNumber: '8.2',
  title: 'Dataanalyse og feilkilder',
  description:
    'Lær om bearbeiding av måledata, grafisk framstilling, lineær regresjon, linearisering og identifisering av feilkilder.',
  estimatedMinutes: 90,
  prerequisites: ['fysikk2-8-1'],
  competenceGoals: [
    'bearbeide og framstille måledata i tabeller og grafer',
    'bruke regresjon til å finne sammenhenger mellom fysiske størrelser',
    'linearisere ikke-lineære sammenhenger og tolke log-plot',
    'identifisere og vurdere feilkilder i eksperimentelt arbeid',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'fys2-8-2-intro',
      type: 'text',
      content: `# Dataanalyse og feilkilder

Etter at vi har gjennomført et eksperiment og samlet inn data, begynner det virkelige arbeidet: å **analysere** dataene for å trekke meningsfulle konklusjoner. I dette kapittelet lærer vi hvordan vi bearbeider, visualiserer og tolker måledata — og hvordan vi identifiserer og vurderer feilkilder.

## Oversikt over dataanalyseprosessen

1. **Organisere** dataene i tabeller
2. **Beregne** gjennomsnitt, standardavvik og usikkerhet
3. **Framstille** dataene grafisk
4. **Tilpasse** en matematisk modell (f.eks. lineær regresjon)
5. **Vurdere** hvor godt modellen passer (R²)
6. **Identifisere** feilkilder og outliers
7. **Konkludere** basert på analysen`,
    },

    // --- Bearbeiding av måledata ---
    {
      id: 'fys2-8-2-bearbeiding',
      type: 'text',
      content: `## Bearbeiding av måledata

### Organisering i tabell

Alle måledata bør organiseres i en ryddig tabell med:

- **Kolonne for uavhengig variabel** (f.eks. lengde, spenning)
- **Kolonne(r) for avhengig variabel** (f.eks. svingetid, strøm)
- **Gjentatte målinger** i separate kolonner
- **Gjennomsnittsverdier** beregnet fra gjentakelsene
- **Enheter** tydelig angitt i kolonneoverskriften
- **Usikkerhet** angitt for hver størrelse

### Eksempel: Pendelforsøk

| $L$ (m) $\\pm 0{,}002$ | $T_1$ (s) | $T_2$ (s) | $T_3$ (s) | $\\bar{T}$ (s) | $s_T$ (s) |
|---|---|---|---|---|---|
| 0,400 | 1,27 | 1,26 | 1,28 | 1,270 | 0,010 |
| 0,600 | 1,55 | 1,56 | 1,54 | 1,550 | 0,010 |
| 0,800 | 1,79 | 1,80 | 1,81 | 1,800 | 0,010 |
| 1,000 | 2,01 | 2,00 | 2,02 | 2,010 | 0,010 |
| 1,200 | 2,20 | 2,19 | 2,21 | 2,200 | 0,010 |
| 1,400 | 2,37 | 2,38 | 2,36 | 2,370 | 0,010 |

Her har vi tre gjentakelser for hver pendellengde, og vi beregner gjennomsnitt og standardavvik for svingetiden.`,
    },

    // --- Grafisk framstilling ---
    {
      id: 'fys2-8-2-grafer',
      type: 'text',
      content: `## Grafisk framstilling

En god graf er et av de viktigste verktøyene i dataanalyse. Den gjør det mulig å oppdage mønster, trender og avvik som ikke er åpenbare fra tallene alene.

### Krav til en god graf

1. **Tittel**: Beskriv hva grafen viser (f.eks. «Svingetid som funksjon av pendellengde»).
2. **Aksetitler**: Begge akser skal ha navn og enhet (f.eks. $L$ (m), $T$ (s)).
3. **Skala**: Velg passende skala slik at datapunktene fyller mest mulig av grafområdet. Start ikke nødvendigvis på null.
4. **Datapunkter**: Bruk tydelige symboler (f.eks. fylte sirkler).
5. **Feilstaver** (error bars): Vis usikkerheten for hvert datapunkt.
6. **Tilpasset kurve/linje**: Tegn den best tilpassede kurven gjennom datapunktene.
7. **Aksevalg**: Sett den uavhengige variabelen langs x-aksen og den avhengige langs y-aksen.

### Feilstaver (error bars)

Feilstaver er vertikale (og eventuelt horisontale) streker gjennom hvert datapunkt som viser usikkerhetsintervallet. De gir et visuelt bilde av målingens presisjon.

- **Vertikale feilstaver**: Usikkerhet i y-verdien ($\\Delta y$)
- **Horisontale feilstaver**: Usikkerhet i x-verdien ($\\Delta x$)

En god tilpasning bør gå gjennom (eller nær) de fleste feilstavene.`,
    },

    // --- Note: Tips for gode grafer ---
    {
      id: 'fys2-8-2-note-graf',
      type: 'note',
      title: 'Tips for gode grafer',
      content: `- Bruk **millimeterpapir** ved håndtegning, eller et digitalt verktøy (Excel, GeoGebra, Python/matplotlib).
- **Ikke koble punktene** med rette linjer (det er ikke en kurvetilpasning).
- Datapunktene skal **ikke** ligge på selve aksene med mindre de naturlig hører hjemme der.
- Bruk **rutenett** for lettere avlesing.
- Ved flere datasett i samme graf: Bruk forskjellige symboler/farger og en **tegnforklaring** (legend).`,
    },

    // --- Lineær regresjon ---
    {
      id: 'fys2-8-2-regresjon',
      type: 'text',
      content: `## Lineær regresjon

Lineær regresjon er en metode for å finne den beste rette linjen gjennom et sett med datapunkter. Den rette linjen har formen:

$$y = ax + b$$

der $a$ er stigningstallet og $b$ er konstantleddet (y-skjæringspunktet).

### Minste kvadraters metode

Den vanligste metoden er **minste kvadraters metode** (least squares). Den finner verdiene av $a$ og $b$ som minimerer summen av de kvadrerte avstandene mellom datapunktene og linjen:

$$S = \\sum_{i=1}^{N} (y_i - (ax_i + b))^2$$

Formlene for den beste tilpasningen er:

$$a = \\frac{N\\sum x_i y_i - \\sum x_i \\sum y_i}{N\\sum x_i^2 - (\\sum x_i)^2}$$

$$b = \\frac{\\sum y_i - a \\sum x_i}{N} = \\bar{y} - a\\bar{x}$$

I praksis bruker vi digitale verktøy (kalkulator, Excel, GeoGebra, Python) til å utføre regresjonen.

### Usikkerhet i regresjonsparametrene

De digitale verktøyene gir også usikkerheter i $a$ og $b$. Disse forteller oss hvor godt bestemt stigningstallet og konstantleddet er.`,
    },

    // --- Formel: Lineær regresjon ---
    {
      id: 'fys2-8-2-formel-regresjon',
      type: 'formula',
      title: 'Lineær regresjon (minste kvadraters metode)',
      latex: `y = ax + b, \\quad a = \\frac{N\\sum x_i y_i - \\sum x_i \\sum y_i}{N\\sum x_i^2 - (\\sum x_i)^2}, \\quad b = \\bar{y} - a\\bar{x}`,
      description: `$a$ er stigningstallet og $b$ er konstantleddet. Metoden minimerer summen av kvadrerte residualer $S = \\sum(y_i - ax_i - b)^2$.`,
    },

    // --- R²-verdi ---
    {
      id: 'fys2-8-2-r-squared',
      type: 'text',
      content: `## R²-verdien (bestemmelseskoeffisienten)

**R²-verdien** (R-squared) er et tall mellom 0 og 1 som angir hvor godt den tilpassede modellen forklarer variasjonen i dataene.

$$R^2 = 1 - \\frac{\\sum (y_i - \\hat{y}_i)^2}{\\sum (y_i - \\bar{y})^2}$$

der $\\hat{y}_i = ax_i + b$ er de forutsagte verdiene og $\\bar{y}$ er gjennomsnittet av $y$-verdiene.

### Tolkning

| $R^2$ | Kvalitet |
|---|---|
| $R^2 > 0{,}99$ | Utmerket tilpasning |
| $0{,}95 < R^2 < 0{,}99$ | God tilpasning |
| $0{,}90 < R^2 < 0{,}95$ | Akseptabel tilpasning |
| $R^2 < 0{,}90$ | Svak tilpasning — vurder om modellen passer |

**OBS:** En høy $R^2$-verdi betyr ikke nødvendigvis at den lineære modellen er riktig. Sjekk alltid residualene (avvikene) visuelt.`,
    },

    // --- Definisjon: R² ---
    {
      id: 'fys2-8-2-def-r2',
      type: 'definition',
      title: 'R² — bestemmelseskoeffisienten',
      content: `$R^2$ (R-squared) angir andelen av variasjonen i den avhengige variabelen som forklares av modellen. $R^2 = 1$ betyr perfekt tilpasning, $R^2 = 0$ betyr at modellen ikke forklarer noe.

For en lineær modell er $R^2 = r^2$ der $r$ er korrelasjonskoeffisienten (Pearsons $r$).`,
    },

    // --- Eksempel: Lineær regresjon ---
    {
      id: 'fys2-8-2-eks-regresjon',
      type: 'example',
      title: 'Lineær regresjon — Ohms lov',
      problem: `En elev måler strømmen gjennom en motstand ved ulike spenninger:

| $U$ (V) | 1,0 | 2,0 | 3,0 | 4,0 | 5,0 | 6,0 |
|---|---|---|---|---|---|---|
| $I$ (mA) | 2,1 | 4,3 | 6,2 | 8,5 | 10,1 | 12,4 |

Utfør lineær regresjon med $I$ som funksjon av $U$ og finn motstandsverdien.`,
      solution: `Vi tilpasser $I = aU + b$ der $a = 1/R$ ifølge Ohms lov.

**Beregning (med digitalt verktøy):**

$$\\sum U_i = 21{,}0, \\quad \\sum I_i = 43{,}6, \\quad \\sum U_i I_i = 183{,}7, \\quad \\sum U_i^2 = 91{,}0$$

$$a = \\frac{6 \\times 183{,}7 - 21{,}0 \\times 43{,}6}{6 \\times 91{,}0 - (21{,}0)^2} = \\frac{1102{,}2 - 915{,}6}{546 - 441} = \\frac{186{,}6}{105} = 1{,}777 \\, \\text{mA/V}$$

$$b = \\frac{43{,}6 - 1{,}777 \\times 21{,}0}{6} = \\frac{43{,}6 - 37{,}32}{6} = \\frac{6{,}28}{6} = 1{,}047 \\approx 0{,}14 \\, \\text{mA}$$

$$R^2 = 0{,}9993$$

**Motstand:**

$$R = \\frac{1}{a} = \\frac{1}{1{,}777 \\times 10^{-3}} = 563 \\, \\Omega$$

**Tolkning:** $R^2 \\approx 0{,}999$ viser utmerket lineær sammenheng, som bekrefter Ohms lov. Konstantleddet $b \\approx 0{,}14 \\, \\text{mA}$ er nær null, noe som tyder på at det ikke er systematisk offset. Motstandsverdien er ca. $560 \\, \\Omega$.`,
    },

    // --- Linearisering ---
    {
      id: 'fys2-8-2-linearisering',
      type: 'text',
      content: `## Linearisering

Mange fysiske sammenhenger er **ikke-lineære**. For å kunne bruke lineær regresjon, kan vi **linearisere** sammenhengen ved å transformere variablene.

### Potenssammenheng: $y = ax^n$

Tar vi logaritmen på begge sider:

$$\\ln y = \\ln a + n \\ln x$$

Dette er en lineær sammenheng mellom $\\ln y$ og $\\ln x$:

- **Plot**: $\\ln y$ mot $\\ln x$ (log–log-plot)
- **Stigningstall**: $n$ (eksponenten)
- **y-skjæring**: $\\ln a$, altså $a = e^{\\text{skjæring}}$

### Eksponentiell sammenheng: $y = ae^{bx}$

Tar vi den naturlige logaritmen:

$$\\ln y = \\ln a + bx$$

Lineær sammenheng mellom $\\ln y$ og $x$:

- **Plot**: $\\ln y$ mot $x$ (semilogaritmisk plot)
- **Stigningstall**: $b$
- **y-skjæring**: $\\ln a$, altså $a = e^{\\text{skjæring}}$

### Eksponentiell sammenheng med base 10: $y = a \\cdot 10^{cx}$

$$\\log y = \\log a + cx$$

Her bruker vi $\\log_{10}$ og plotter $\\log y$ mot $x$.

### Invers sammenheng: $y = \\frac{a}{x} + b$

Plot $y$ mot $\\frac{1}{x}$, og tilpass en rett linje.

### Eksempel: Pendelen

Svingetiden er $T = 2\\pi\\sqrt{L/g}$, altså $T \\propto L^{1/2}$.

$$T^2 = \\frac{4\\pi^2}{g} \\cdot L$$

Plot $T^2$ mot $L$: stigningstallet gir $a = 4\\pi^2/g$, og dermed $g = 4\\pi^2/a$.`,
    },

    // --- Definisjon: Linearisering ---
    {
      id: 'fys2-8-2-def-linearisering',
      type: 'definition',
      title: 'Linearisering',
      content: `**Linearisering** er teknikken der vi transformerer en ikke-lineær sammenheng til en lineær form $Y = aX + b$ ved å innføre nye variabler (f.eks. $Y = \\ln y$, $X = \\ln x$).

| Sammenheng | Plot | Stigningstall | Skjæring |
|---|---|---|---|
| $y = ax^n$ | $\\ln y$ mot $\\ln x$ | $n$ | $\\ln a$ |
| $y = ae^{bx}$ | $\\ln y$ mot $x$ | $b$ | $\\ln a$ |
| $y = a/x + b$ | $y$ mot $1/x$ | $a$ | $b$ |
| $T = 2\\pi\\sqrt{L/g}$ | $T^2$ mot $L$ | $4\\pi^2/g$ | $0$ |`,
    },

    // --- Eksempel: Linearisering ---
    {
      id: 'fys2-8-2-eks-linearisering',
      type: 'example',
      title: 'Linearisering av pendelforsøk',
      problem: `Bruk dataene fra pendelforsøket til å bestemme $g$:

| $L$ (m) | 0,400 | 0,600 | 0,800 | 1,000 | 1,200 | 1,400 |
|---|---|---|---|---|---|---|
| $\\bar{T}$ (s) | 1,270 | 1,550 | 1,800 | 2,010 | 2,200 | 2,370 |

Lineariser sammenhengen ved å plotte $T^2$ mot $L$.`,
      solution: `**Steg 1: Beregn $T^2$**

| $L$ (m) | $T^2$ (s²) |
|---|---|
| 0,400 | 1,613 |
| 0,600 | 2,403 |
| 0,800 | 3,240 |
| 1,000 | 4,040 |
| 1,200 | 4,840 |
| 1,400 | 5,617 |

**Steg 2: Lineær regresjon av $T^2$ mot $L$**

Vi tilpasser $T^2 = aL + b$ og får (med digitalt verktøy):

$$a = 4{,}007 \\, \\text{s}^2/\\text{m}, \\quad b = -0{,}002 \\, \\text{s}^2, \\quad R^2 = 0{,}9999$$

**Steg 3: Beregn $g$**

Fra $T^2 = \\frac{4\\pi^2}{g}L$ har vi $a = \\frac{4\\pi^2}{g}$:

$$g = \\frac{4\\pi^2}{a} = \\frac{4\\pi^2}{4{,}007} = \\frac{39{,}48}{4{,}007} = 9{,}85 \\, \\text{m/s}^2$$

**Tolkning:** $R^2 = 0{,}9999$ viser en utmerket lineær sammenheng mellom $T^2$ og $L$, som bekrefter at $T \\propto \\sqrt{L}$. Verdien $g = 9{,}85 \\, \\text{m/s}^2$ er nær tabellverdien $9{,}81 \\, \\text{m/s}^2$. Konstantleddet $b \\approx 0$ tyder på at det ikke er systematisk feil.`,
    },

    // --- Feilkilder ---
    {
      id: 'fys2-8-2-feilkilder',
      type: 'text',
      content: `## Identifisering av feilkilder

En viktig del av dataanalysen er å **identifisere** og **vurdere** mulige feilkilder. Vi skiller mellom systematiske og tilfeldige feil (se kapittel 8.1), og i tillegg ser vi etter outliers og vurderer reproduserbarhet.

### Vanlige feilkilder i fysikkforsøk

**Systematiske feil:**
- Feilkalibrert instrument (f.eks. vekt som ikke er nullstilt)
- Parallaksefeil ved avlesing
- Friksjon eller luftmotstand som ikke er tatt med i modellen
- Reaksjonstid ved manuell tidtaking
- Temperaturendringer som påvirker utstyret
- Spenningsfall i ledninger som ikke er medregnet

**Tilfeldige feil:**
- Vibrasjoner i laboratoriet
- Variasjoner i startbetingelser (f.eks. utslippspunkt)
- Elektronisk støy
- Avlesingsusikkerhet

### Hvordan identifisere systematiske feil

1. **Sammenlign med tabellverdi**: Hvis resultatet konsekvent avviker fra en kjent verdi, kan det tyde på en systematisk feil.
2. **Bruk ulike metoder**: Mål den samme størrelsen med forskjellig utstyr eller teknikk.
3. **Se etter mønster i residualene**: Hvis residualene (avvikene fra tilpasset linje) viser et systematisk mønster, tyder det på at modellen er feil eller at det er en systematisk feil.`,
    },

    // --- Outliers ---
    {
      id: 'fys2-8-2-outliers',
      type: 'text',
      content: `## Outliers (uteliggere)

En **outlier** er et datapunkt som avviker markant fra de andre målingene. Outliers kan skyldes:

- Feil i avlesing eller registrering
- Uventet forstyrrelse under målingen
- Feil i utstyret
- Et genuint fysisk fenomen

### Håndtering av outliers

1. **Identifiser**: Et datapunkt som ligger mer enn $2s$ eller $3s$ fra gjennomsnittet, kan vurderes som en mulig outlier.
2. **Undersøk årsaken**: Prøv å finne ut hva som forårsaket avviket. Var det en kjent forstyrrelse?
3. **Dokumenter**: Hvis du fjerner en outlier, **må** du begrunne hvorfor i rapporten. Fjern aldri datapunkter bare fordi de «ser feil ut».
4. **Gjennomfør regresjonen med og uten**: Vis at konklusjonen holder uansett.

### Statistisk test for outliers

En enkel test er **Chauvenet-kriteriet**: Hvis sannsynligheten for å observere et avvik like stort (eller større) er mindre enn $1/(2N)$, der $N$ er antall målinger, kan punktet forkastes.`,
    },

    // --- Reproduserbarhet ---
    {
      id: 'fys2-8-2-reproduserbarhet',
      type: 'text',
      content: `## Reproduserbarhet

Et av grunnprinsippene i vitenskap er at resultater skal kunne **reproduseres** av andre forskere. Vi skiller mellom to begreper:

- **Repeterbarhet** (repeatability): Samme person, samme utstyr, kort tid mellom forsøkene — gir tilsvarende resultat.
- **Reproduserbarhet** (reproducibility): Andre forskere, annet utstyr, annet sted — gir tilsvarende resultat.

### Hva er «tilsvarende resultat»?

To resultater er **forenlige** (compatible) hvis usikkerhetsintervallene overlapper. Mer presist: Hvis $|x_1 - x_2| \\leq 2\\sqrt{\\Delta x_1^2 + \\Delta x_2^2}$, er resultatene forenlige innenfor omtrent $95\\%$ konfidensintervall.

### Betydning for rapportering

God reproduserbarhet krever at du dokumenterer:
- Eksperimentoppsettet i detalj
- Alle måleinstrumenter med presisjon
- Omgivelsesforhold (temperatur, lufttrykk, etc.)
- Databehandlingsmetoder
- Eventuelt kildekode brukt i analysen`,
    },

    // --- Warning ---
    {
      id: 'fys2-8-2-warning',
      type: 'warning',
      title: 'Vanlige feil i dataanalyse',
      content: `- **Koble datapunktene med rette linjer** i stedet for å tegne en best-tilpasset kurve.
- **Tvinge linjen gjennom origo** når det ikke er fysisk grunn til det.
- **Ignorere outliers** uten å undersøke årsaken.
- **Fjerne datapunkter** som ikke passer modellen uten god begrunnelse.
- **Bruke for mange desimaler** i resultater fra regresjon.
- **Glemme feilstaver** i grafen.
- **Overtolke $R^2$**: En høy $R^2$ betyr ikke at den fysiske modellen er riktig — det betyr bare at dataene passer en rett linje.`,
    },

    // --- Eksempel: Linearisering med log-plot ---
    {
      id: 'fys2-8-2-eks-logplot',
      type: 'example',
      title: 'Linearisering med log–log-plot',
      problem: `En elev undersøker sammenhengen mellom perioden $T$ og lengden $L$ for en pendel. Dataene er:

| $L$ (m) | 0,25 | 0,50 | 0,75 | 1,00 | 1,50 | 2,00 |
|---|---|---|---|---|---|---|
| $T$ (s) | 1,00 | 1,42 | 1,74 | 2,01 | 2,46 | 2,84 |

Bruk et log–log-plot for å bekrefte at $T \\propto L^n$ og finn eksponenten $n$.`,
      solution: `**Steg 1: Beregn $\\ln L$ og $\\ln T$**

| $L$ | $\\ln L$ | $T$ | $\\ln T$ |
|---|---|---|---|
| 0,25 | −1,386 | 1,00 | 0,000 |
| 0,50 | −0,693 | 1,42 | 0,351 |
| 0,75 | −0,288 | 1,74 | 0,554 |
| 1,00 | 0,000 | 2,01 | 0,698 |
| 1,50 | 0,405 | 2,46 | 0,900 |
| 2,00 | 0,693 | 2,84 | 1,044 |

**Steg 2: Lineær regresjon av $\\ln T$ mot $\\ln L$**

Tilpasser $\\ln T = n \\cdot \\ln L + \\ln a$:

$$n = 0{,}501, \\quad \\ln a = 0{,}695, \\quad R^2 = 0{,}9998$$

**Steg 3: Tolkning**

$$n \\approx 0{,}50 = \\frac{1}{2}$$

Dette bekrefter at $T \\propto L^{1/2}$, altså $T \\propto \\sqrt{L}$, som stemmer med pendelformelen $T = 2\\pi\\sqrt{L/g}$.

Fra $\\ln a = 0{,}695$ får vi $a = e^{0{,}695} = 2{,}004 \\approx 2\\pi/\\sqrt{g}$, som gir $g = (2\\pi/a)^2 = 9{,}83 \\, \\text{m/s}^2$.`,
    },

    // --- Eksempel: Eksponentiell linearisering ---
    {
      id: 'fys2-8-2-eks-eksponentiell',
      type: 'example',
      title: 'Linearisering av eksponentiell funksjon — radioaktivt henfall',
      problem: `Aktiviteten til en radioaktiv kilde ble målt over tid:

| $t$ (min) | 0 | 10 | 20 | 30 | 40 | 50 | 60 |
|---|---|---|---|---|---|---|---|
| $A$ (Bq) | 800 | 570 | 400 | 290 | 200 | 145 | 100 |

Vis at sammenhengen er eksponentiell og finn halveringstiden.`,
      solution: `**Steg 1: Beregn $\\ln A$**

| $t$ (min) | $A$ (Bq) | $\\ln A$ |
|---|---|---|
| 0 | 800 | 6,685 |
| 10 | 570 | 6,346 |
| 20 | 400 | 5,991 |
| 30 | 290 | 5,670 |
| 40 | 200 | 5,298 |
| 50 | 145 | 4,977 |
| 60 | 100 | 4,605 |

**Steg 2: Lineær regresjon av $\\ln A$ mot $t$**

$$\\ln A = bt + \\ln A_0$$

Regresjon gir:
$$b = -0{,}0346 \\, \\text{min}^{-1}, \\quad \\ln A_0 = 6{,}685, \\quad R^2 = 0{,}9998$$

**Steg 3: Halveringstid**

For eksponentiell: $A = A_0 e^{bt}$, der $b = -\\lambda$ (henfallskonstanten).

$$\\lambda = 0{,}0346 \\, \\text{min}^{-1}$$

$$t_{1/2} = \\frac{\\ln 2}{\\lambda} = \\frac{0{,}693}{0{,}0346} = 20{,}0 \\, \\text{min}$$

**Tolkning:** Den høye $R^2$-verdien bekrefter at henfallet er eksponentielt. Halveringstiden er ca. 20 minutter.`,
    },

    // --- Note: Oppsummering ---
    {
      id: 'fys2-8-2-note-oppsummering',
      type: 'note',
      title: 'Oppsummering av kapittel 8.2',
      content: `**Databearbeiding**: Organiser i tabell med gjennomsnitt, standardavvik og enheter.

**Grafisk framstilling**: Tittel, akser med enhet, feilstaver, best-tilpasset kurve.

**Lineær regresjon**: $y = ax + b$, minste kvadraters metode, $R^2$-verdi.

**Linearisering**:
- $y = ax^n$ → plot $\\ln y$ mot $\\ln x$ (stigningstall = $n$)
- $y = ae^{bx}$ → plot $\\ln y$ mot $x$ (stigningstall = $b$)

**Feilkilder**: Identifiser systematiske og tilfeldige feil, håndter outliers med begrunnelse, vurder reproduserbarhet.`,
    },
  ],

  // --- Oppgaver ---
  exercises: [
    {
      id: 'fys2-8-2-ex1',
      type: 'classic',
      difficulty: 'lett',
      task: `Hva er forskjellen mellom å koble datapunkter med rette linjer og å tegne en best-tilpasset kurve gjennom datapunktene? Hvorfor er det siste å foretrekke?`,
      solution: `Å **koble datapunkter** tegner rette linjer mellom hvert punkt, noe som impliserer at den underliggende sammenhengen har skarpe knekkpunkter. Dette gir et misvisende bilde.

En **best-tilpasset kurve** er en jevn linje som representerer den antatte matematiske sammenhengen og minimerer avvikene fra alle datapunktene samlet. Den tar hensyn til at individuelle målinger har usikkerhet, og gir derfor et mer riktig bilde av den fysiske sammenhengen.`,
    },
    {
      id: 'fys2-8-2-ex2',
      type: 'classic',
      difficulty: 'lett',
      task: `En lineær regresjon gir $R^2 = 0{,}87$. Hva forteller dette deg om tilpasningen? Hva kan du gjøre for å forbedre analysen?`,
      solution: `$R^2 = 0{,}87$ betyr at modellen forklarer $87\\%$ av variasjonen i dataene. Dette er en **ganske svak tilpasning** for fysiske data, der vi normalt forventer $R^2 > 0{,}95$.

For å forbedre analysen kan du:
1. **Sjekk for outliers** som trekker ned $R^2$.
2. **Vurder om en lineær modell er riktig** — kanskje sammenhengen er kvadratisk, eksponentiell, etc.
3. **Se på residualplottet** — hvis residualene viser et mønster, er den lineære modellen feil.
4. **Gjennomfør flere målinger** for å redusere tilfeldige feil.
5. **Identifiser systematiske feil** som kan forstyrre sammenhengen.`,
    },
    {
      id: 'fys2-8-2-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: `En elev undersøker sammenhengen mellom kraft $F$ og akselerasjon $a$ for en vogn med kjent masse $m = 0{,}500 \\, \\text{kg}$:

| $F$ (N) | 0,50 | 1,00 | 1,50 | 2,00 | 2,50 | 3,00 |
|---|---|---|---|---|---|---|
| $a$ (m/s²) | 0,92 | 1,88 | 2,95 | 3,90 | 4,78 | 5,85 |

a) Utfør lineær regresjon av $a$ mot $F$.
b) Hva forventer du for stigningstallet ifølge Newtons 2. lov?
c) Sammenlign den målte og forventede verdien.`,
      solution: `**a) Lineær regresjon** av $a = kF + c$:

$$\\sum F = 10{,}50, \\quad \\sum a = 20{,}28, \\quad \\sum Fa = 42{,}255, \\quad \\sum F^2 = 22{,}75$$

$$k = \\frac{6 \\times 42{,}255 - 10{,}50 \\times 20{,}28}{6 \\times 22{,}75 - (10{,}50)^2} = \\frac{253{,}53 - 212{,}94}{136{,}50 - 110{,}25} = \\frac{40{,}59}{26{,}25} = 1{,}946 \\, \\text{(m/s²)/N}$$

$$c = \\frac{20{,}28 - 1{,}946 \\times 10{,}50}{6} = \\frac{20{,}28 - 20{,}43}{6} = -0{,}025 \\, \\text{m/s}^2 \\approx 0$$

$R^2 \\approx 0{,}999$

**b)** Newtons 2. lov: $F = ma$, altså $a = F/m$. Forventet stigningstall:

$$k_{\\text{forventet}} = \\frac{1}{m} = \\frac{1}{0{,}500} = 2{,}000 \\, \\text{(m/s²)/N}$$

**c)** Målt $k = 1{,}946$ vs forventet $k = 2{,}000$. Avviket er $(2{,}000 - 1{,}946)/2{,}000 = 2{,}7\\%$. Det lave stigningstallet kan skyldes friksjon (systematisk feil) som motvirker akselerasjonen noe.`,
    },
    {
      id: 'fys2-8-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: `Forklar hvordan du ville linearisert sammenhengen $v = v_0 e^{-bt}$ (hastigheten til et objekt med luftmotstand). Hvilke variabler plotter du, og hva representerer stigningstallet og skjæringspunktet?`,
      solution: `**Linearisering:**

Ta den naturlige logaritmen av begge sider:

$$\\ln v = \\ln v_0 + (-b)t = -bt + \\ln v_0$$

**Plot:** $\\ln v$ (y-akse) mot $t$ (x-akse)

Hvis sammenhengen stemmer, vil dette gi en **rett linje** med:
- **Stigningstall**: $-b$ (den negative dempningskonstanten)
- **y-skjæring**: $\\ln v_0$ (logaritmen av starthastigheten, $v_0 = e^{\\text{skjæring}}$)

En høy $R^2$-verdi vil bekrefte at den eksponentielle modellen passer dataene.`,
    },
    {
      id: 'fys2-8-2-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: `Følgende data viser intensiteten $I$ av lys som funksjon av avstanden $r$ fra en punktlyskilde:

| $r$ (m) | 0,50 | 0,75 | 1,00 | 1,25 | 1,50 | 2,00 |
|---|---|---|---|---|---|---|
| $I$ (W/m²) | 400 | 178 | 100 | 64 | 44 | 25 |

a) Vis at sammenhengen er $I \\propto r^{-2}$ ved å bruke et log–log-plot.
b) Bestem konstanten i $I = k/r^2$.`,
      solution: `**a) Log–log-plot:**

| $\\ln r$ | $\\ln I$ |
|---|---|
| −0,693 | 5,991 |
| −0,288 | 5,182 |
| 0,000 | 4,605 |
| 0,223 | 4,159 |
| 0,405 | 3,784 |
| 0,693 | 3,219 |

Lineær regresjon av $\\ln I$ mot $\\ln r$:

$$\\ln I = n \\cdot \\ln r + \\ln k$$

Resultat: $n = -2{,}00$, $\\ln k = 4{,}605$, $R^2 = 1{,}000$.

Eksponenten $n = -2{,}00$ bekrefter at $I \\propto r^{-2}$ (invers kvadratlov).

**b) Konstant:**

$$\\ln k = 4{,}605 \\quad \\Rightarrow \\quad k = e^{4{,}605} = 100 \\, \\text{W}$$

Altså $I = \\frac{100}{r^2}$ W/m². Konstanten representerer lyskildens effekt delt på $4\\pi$ (for en isotropisk kilde): $P = 4\\pi k = 4\\pi \\times 100 \\approx 1257 \\, \\text{W}$.`,
    },
    {
      id: 'fys2-8-2-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `En elev får følgende data for spenningen $U$ over en kondensator som lades opp gjennom en motstand:

| $t$ (s) | 0 | 2 | 4 | 6 | 8 | 10 | 15 | 20 |
|---|---|---|---|---|---|---|---|---|
| $U$ (V) | 0 | 2,53 | 4,32 | 5,62 | 6,55 | 7,23 | 8,41 | 9,04 |

Spenningen ved opplading er $U(t) = U_0(1 - e^{-t/\\tau})$ der $U_0$ er batterispenningen og $\\tau = RC$ er tidskonstanten.

a) Lineariser sammenhengen.
b) Bestem $U_0$ og $\\tau$.`,
      solution: `**a) Linearisering:**

Fra $U = U_0(1 - e^{-t/\\tau})$ får vi:

$$U_0 - U = U_0 e^{-t/\\tau}$$

$$\\ln(U_0 - U) = \\ln U_0 - \\frac{t}{\\tau}$$

Vi trenger å kjenne $U_0$. Fra dataene ser vi at $U$ nærmer seg ca. $9{,}5 \\, \\text{V}$. Vi prøver $U_0 = 9{,}50 \\, \\text{V}$ (kan justeres iterativt).

| $t$ (s) | $U_0 - U$ | $\\ln(U_0 - U)$ |
|---|---|---|
| 0 | 9,50 | 2,251 |
| 2 | 6,97 | 1,942 |
| 4 | 5,18 | 1,645 |
| 6 | 3,88 | 1,355 |
| 8 | 2,95 | 1,082 |
| 10 | 2,27 | 0,820 |
| 15 | 1,09 | 0,086 |
| 20 | 0,46 | −0,777 |

**b) Lineær regresjon av $\\ln(U_0 - U)$ mot $t$:**

$$\\ln(U_0 - U) = -\\frac{t}{\\tau} + \\ln U_0$$

Resultat: stigningstall $= -0{,}152 \\, \\text{s}^{-1}$, skjæring $= 2{,}25$, $R^2 = 0{,}9998$.

$$\\tau = \\frac{1}{0{,}152} = 6{,}58 \\, \\text{s}$$

$$U_0 = e^{2{,}25} = 9{,}49 \\, \\text{V} \\approx 9{,}5 \\, \\text{V}$$

**Svar:** Batterispenningen er $U_0 \\approx 9{,}5 \\, \\text{V}$ og tidskonstanten er $\\tau \\approx 6{,}6 \\, \\text{s}$.`,
    },
    {
      id: 'fys2-8-2-ex7',
      type: 'classic',
      difficulty: 'lett',
      task: `Nevn minst fire krav til en god grafisk framstilling av eksperimentelle data.`,
      solution: `En god graf skal ha:

1. **Beskrivende tittel** som forteller hva som er plottet
2. **Aksetitler med enheter** (f.eks. «Svingetid $T$ (s)» langs y-aksen)
3. **Passende skala** som utnytter grafområdet godt
4. **Tydelige datapunkter** med synlige symboler
5. **Feilstaver** (error bars) som viser usikkerheten
6. **Best-tilpasset kurve** (ikke punkt-til-punkt-linjer)

I tillegg er det en fordel med rutenett, tegnforklaring (ved flere datasett), og at uavhengig variabel er på x-aksen.`,
    },
    {
      id: 'fys2-8-2-ex8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `En elev har data fra et eksperiment der kraften $F$ på en fjær ble målt som funksjon av fjærforlengelsen $x$:

| $x$ (cm) | 1,0 | 2,0 | 3,0 | 4,0 | 5,0 | 6,0 | 7,0 | 8,0 |
|---|---|---|---|---|---|---|---|---|
| $F$ (N) | 0,49 | 1,02 | 1,48 | 2,05 | 2,51 | 2,98 | 3,42 | 5,10 |

a) Plot dataene og utfør lineær regresjon.
b) Identifiser eventuelle outliers.
c) Utfør regresjonen på nytt uten outlieren og sammenlign $R^2$-verdiene.
d) Bestem fjærkonstanten $k$.`,
      solution: `**a) Lineær regresjon (alle data):**

Tilpasser $F = kx + b$ der $x$ er i meter:

Med alle 8 datapunkter: $k = 5{,}80 \\, \\text{N/m}$, $b = -0{,}25 \\, \\text{N}$, $R^2 = 0{,}985$.

**b) Outlier:**

Det siste punktet ($x = 8{,}0 \\, \\text{cm}$, $F = 5{,}10 \\, \\text{N}$) avviker markant. Forventet verdi ved $x = 0{,}08 \\, \\text{m}$: ca. $0{,}08 \\times 5{,}0 \\approx 4{,}0 \\, \\text{N}$, men målt $5{,}10 \\, \\text{N}$. Dette kan tyde på at fjæren har passert sin elastiske grense (Hookes lov gjelder ikke lenger) eller at det er en avlesningsfeil.

**c) Regresjon uten siste punkt (7 punkter):**

$k = 5{,}01 \\, \\text{N/m}$, $b = -0{,}03 \\, \\text{N}$, $R^2 = 0{,}9998$.

$R^2$ har økt fra $0{,}985$ til $0{,}9998$, noe som bekrefter at det siste punktet er en outlier.

**d) Fjærkonstant:**

$$k = 5{,}01 \\, \\text{N/m} \\approx 5{,}0 \\, \\text{N/m}$$

Konstantleddet $b \\approx 0$ bekrefter at Hookes lov ($F = kx$) gjelder for $x \\leq 7 \\, \\text{cm}$.`,
    },
    {
      id: 'fys2-8-2-ex9',
      type: 'classic',
      difficulty: 'medium',
      task: `Forklar hva «reproduserbarhet» betyr i vitenskapelig sammenheng. Hvorfor er det viktig, og hva kreves for å sikre det?`,
      solution: `**Reproduserbarhet** betyr at andre forskere, med annet utstyr og på et annet sted, skal kunne gjennomføre det samme eksperimentet og få resultater som er **forenlige** (innenfor usikkerhetsmarginene) med de opprinnelige resultatene.

**Hvorfor viktig:**
- Det er en grunnpilar i den vitenskapelige metoden
- Resultater som ikke kan reproduseres, regnes ikke som pålitelige
- Det beskytter mot tilfeldige feil og svindel

**Krav for å sikre reproduserbarhet:**
- Detaljert beskrivelse av eksperimentoppsett og utstyr
- Oppgi alle måleinstrumenter med modell og presisjon
- Dokumentere omgivelsesforhold (temperatur, luftfuktighet, etc.)
- Beskrive databehandlingsmetoder eksplisitt
- Dele rå data og eventuell programkode
- Oppgi usikkerheter slik at sammenligning er mulig`,
    },
    {
      id: 'fys2-8-2-ex10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Du har data som du mistenker følger sammenhengen $y = ax^n$. Forklar steg for steg hvordan du bruker et log–log-plot for å:
a) Bekrefte formen på sammenhengen
b) Bestemme verdiene av $a$ og $n$
c) Vurdere kvaliteten på tilpasningen

Bruk følgende eksempeldata: kraften $F$ (i N) som funksjon av hastigheten $v$ (i m/s) for luftmotstand.

| $v$ (m/s) | 5 | 10 | 15 | 20 | 25 | 30 |
|---|---|---|---|---|---|---|
| $F$ (N) | 0,38 | 1,52 | 3,40 | 6,10 | 9,50 | 13,7 |`,
      solution: `**a) Bekrefte formen:**

Tar $\\ln$ av $y = ax^n$:
$$\\ln F = n \\ln v + \\ln a$$

Beregn $\\ln v$ og $\\ln F$:

| $\\ln v$ | $\\ln F$ |
|---|---|
| 1,609 | −0,968 |
| 2,303 | 0,419 |
| 2,708 | 1,224 |
| 2,996 | 1,808 |
| 3,219 | 2,251 |
| 3,401 | 2,617 |

Plotter $\\ln F$ mot $\\ln v$. Hvis punktene ligger tilnærmet på en rett linje, er potensmodellen bekreftet.

**b) Bestemme $a$ og $n$:**

Lineær regresjon av $\\ln F$ mot $\\ln v$:

$n = 2{,}001$ (stigningstall), $\\ln a = -4{,}19$ (skjæring), $R^2 = 0{,}9999$.

$$n \\approx 2{,}0 \\quad \\Rightarrow \\quad F \\propto v^2$$

$$a = e^{-4{,}19} = 0{,}0152$$

Altså $F = 0{,}015 \\, v^2$ (luftmotstand er proporsjonal med $v^2$).

**c) Kvalitetsvurdering:**

$R^2 = 0{,}9999$ viser en utmerket tilpasning. Punktene i log–log-plottet ligger svært nær en rett linje. $n = 2{,}00$ bekrefter den teoretiske forventningen $F \\propto v^2$ (kjent fra aerodynamikk).`,
    },
  ],
};


// ============================================================================
// Kapittel 8.3: Moderne fysikkforskning
// ============================================================================

export const CHAPTER_FYSIKK2_8_3: TextbookChapter = {
  id: 'fysikk2-8-3',
  courseId: 'fysikk2',
  chapterNumber: '8.3',
  title: 'Moderne fysikkforskning',
  description:
    'En oversikt over moderne fysikkforskning: partikkelfysikk, Standardmodellen, CERN, astrofysikk, gravitasjonsbølger og fremtidens fysikk.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for aktuelle tema innen fysikkforskning og teknologi',
    'beskrive Standardmodellen for partikkelfysikk og dens eksperimentelle grunnlag',
    'gjøre rede for moderne astrofysiske oppdagelser og kosmologiske modeller',
    'vurdere norske bidrag til internasjonal fysikkforskning',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'fys2-8-3-intro',
      type: 'text',
      content: `# Moderne fysikkforskning

Fysikken er i stadig utvikling. Selv om grunnleggende lover som Newtons mekanikk, Maxwells elektromagnetisme og Einsteins relativitetsteori har stått seg i over hundre år, fortsetter fysikere over hele verden å utforske nye grenser — fra de minste subatomære partiklene til hele universet.

I dette kapittelet gir vi en oversikt over noen av de mest spennende forskningsområdene i moderne fysikk, og hvordan de henger sammen med det du har lært i dette kurset.`,
    },

    // --- Partikkelfysikk ---
    {
      id: 'fys2-8-3-partikkelfysikk',
      type: 'text',
      content: `## Partikkelfysikk og Standardmodellen

Partikkelfysikk handler om de mest fundamentale byggesteinene i naturen og kreftene mellom dem. Gjennom det 20. århundret oppdaget fysikere at atomet ikke er udelelig, men har en rik indre struktur.

### De fundamentale partiklene

Standardmodellen, som ble utviklet gjennom 1960- og 1970-tallet, klassifiserer alle kjente elementærpartikler i tre grupper:

**1. Kvarker** (6 stykker)

Kvarker er byggesteinene i protoner og nøytroner. De finnes i tre «generasjoner»:

| Generasjon | Kvark (ladning $+\\frac{2}{3}$) | Kvark (ladning $-\\frac{1}{3}$) |
|---|---|---|
| 1. | Opp ($u$) | Ned ($d$) |
| 2. | Sjarm ($c$) | Sær ($s$) |
| 3. | Topp ($t$) | Bunn ($b$) |

Et proton består av to opp-kvarker og én ned-kvark ($uud$), mens et nøytron består av én opp-kvark og to ned-kvarker ($udd$).

**2. Leptoner** (6 stykker)

Leptoner er partikler som ikke påvirkes av den sterke kjernekraften:

| Generasjon | Ladet lepton | Nøytrino |
|---|---|---|
| 1. | Elektron ($e^-$) | Elektronnøytrino ($\\nu_e$) |
| 2. | Myon ($\\mu^-$) | Myonnøytrino ($\\nu_\\mu$) |
| 3. | Tauon ($\\tau^-$) | Tauonnøytrino ($\\nu_\\tau$) |

**3. Kraftbærere (bosoner)**

De fundamentale kreftene overføres av bosoner:

| Kraft | Boson | Rekkevidde |
|---|---|---|
| Elektromagnetisk | Foton ($\\gamma$) | Uendelig |
| Svak kjernekraft | $W^+$, $W^-$, $Z^0$ | $\\sim 10^{-18}$ m |
| Sterk kjernekraft | Gluon ($g$) | $\\sim 10^{-15}$ m |
| Gravitasjon | Graviton (?) | Uendelig |

Gravitonet er hypotetisk og er ikke inkludert i Standardmodellen.`,
    },

    // --- Higgs-bosonet ---
    {
      id: 'fys2-8-3-higgs',
      type: 'text',
      content: `## Higgs-bosonet

**Higgs-bosonet** ble teoretisk forutsagt i 1964 av Peter Higgs og flere andre fysikere. Det er knyttet til **Higgs-feltet**, et felt som gjennomstrømmer hele universet og gir masse til de fundamentale partiklene.

### Hvorfor er Higgs-feltet viktig?

Uten Higgs-feltet ville alle partikler vært masseløse og beveget seg med lysets hastighet. Higgs-mekanismen forklarer hvorfor $W$- og $Z$-bosonene har masse (og dermed kort rekkevidde for den svake kraften), mens fotonet forblir masseløst (uendelig rekkevidde for elektromagnetismen).

### Oppdagelsen ved CERN (2012)

Den 4. juli 2012 annonserte ATLAS- og CMS-eksperimentene ved CERN at de hadde funnet en ny partikkel med masse ca. $125 \\, \\text{GeV/c}^2$, forenlig med Higgs-bosonet. I 2013 fikk Peter Higgs og François Englert Nobelprisen i fysikk for denne teoretiske forutsigelsen.

Oppdagelsen krevde:
- **Large Hadron Collider (LHC)**: Verdens kraftigste partikkelakselerator
- **Milliarder av kollisjoner**: Higgs-bosonet produseres ekstremt sjelden
- **Avansert dataanalyse**: Enorme mengder data ble analysert for å finne signalet
- **Statistisk signifikans**: Kravet var minst «$5\\sigma$» — mindre enn 1 av 3,5 millioner sjanse for at signalet er tilfeldig`,
    },

    // --- Definisjon: Standardmodellen ---
    {
      id: 'fys2-8-3-def-standardmodell',
      type: 'definition',
      title: 'Standardmodellen',
      content: `**Standardmodellen** for partikkelfysikk er den teoretiske rammen som beskriver alle kjente elementærpartikler og tre av de fire fundamentale naturkreftene (elektromagnetisk, svak og sterk — men ikke gravitasjon).

Den inkluderer:
- **6 kvarker** i tre generasjoner
- **6 leptoner** i tre generasjoner
- **4 typer kraftbærere** (foton, W/Z-bosoner, gluon)
- **Higgs-bosonet** som gir masse via Higgs-mekanismen

Standardmodellen er en av de mest presist testede teoriene i vitenskapen, men den er ufullstendig — den forklarer ikke gravitasjon, mørk materie, mørk energi eller hvorfor det er mer materie enn antimaterie i universet.`,
    },

    // --- CERN og LHC ---
    {
      id: 'fys2-8-3-cern',
      type: 'text',
      content: `## CERN og Large Hadron Collider

**CERN** (Conseil Européen pour la Recherche Nucléaire) er verdens største partikkelfysikklaboratorium. Det ligger ved Genève på grensen mellom Sveits og Frankrike, og ble grunnlagt i 1954. Norge er et av medlemslandene.

### Large Hadron Collider (LHC)

LHC er verdens kraftigste partikkelakselerator — en sirkelformet tunnel med omkrets 27 km, beliggende ca. 100 m under bakken. Her akselereres protoner til nesten lyshastighet ($99{,}9999991\\%$ av $c$) og kollideres frontalt.

**Nøkkeltall for LHC:**
- **Energi**: Opptil $13{,}6 \\, \\text{TeV}$ (teraelektronvolt) ved kollisjoner
- **Temperatur i magneter**: $1{,}9 \\, \\text{K}$ ($-271{,}3 \\, °\\text{C}$) — kaldere enn det ytre rom
- **Magnetfelt**: Ca. $8{,}3 \\, \\text{T}$ fra supraledende magneter
- **Kollisjonsrate**: Ca. $600$ millioner kollisjoner per sekund
- **Datamengde**: Ca. $1 \\, \\text{PB}$ (petabyte) per sekund, som filtreres ned til ca. $1 \\, \\text{GB/s}$

### De store eksperimentene

LHC har fire hoveddetektorer:
- **ATLAS**: Generell detektor for et bredt spekter av fysikk
- **CMS**: En annen generell detektor (uavhengig krysssjekk av ATLAS)
- **ALICE**: Studerer kvarker og gluoner i kvark-gluon-plasma
- **LHCb**: Studerer asymmetrien mellom materie og antimaterie

### Deteksjonsteknikker

Partiklene som produseres i kollisjonene lever ofte bare brøkdeler av et sekund. De identifiseres gjennom sine henfallsprodukter ved hjelp av lag med ulike detektorer:

1. **Spordetektorer**: Registrerer banen til ladede partikler i et magnetfelt
2. **Kalorimetere**: Måler energien til partiklene ved å stoppe dem
3. **Myondetektorer**: Ytterste lag, fanger opp myoner som trenger gjennom alt annet
4. **Nøytrinoer**: Oppdages indirekte som «manglende energi»`,
    },

    // --- Astrofysikk ---
    {
      id: 'fys2-8-3-astrofysikk',
      type: 'text',
      content: `## Astrofysikk og kosmologi

Astrofysikk bruker fysikkens lover til å forstå universet — fra planeter og stjerner til galakser og hele kosmos. Moderne kosmologi har gjort fantastiske fremskritt de siste tiårene.

### Big Bang-kosmologien

Den rådende modellen for universets opprinnelse er **Big Bang-teorien**: Universet startet for ca. $13{,}8$ milliarder år siden fra en ekstremt varm og tett tilstand og har ekspandert siden.

**Observasjonelt bevis:**
1. **Hubbles lov**: Galakser fjerner seg fra oss med hastighet proporsjonal med avstanden ($v = H_0 d$), noe som viser at universet ekspanderer.
2. **Kosmisk bakgrunnsstråling** (CMB): Stråling med temperatur $2{,}725 \\, \\text{K}$ som fyller universet, et «etterglødt» fra Big Bang.
3. **Grunnstoffsammensetning**: Mengdene av hydrogen, helium og litium i universet stemmer med forutsigelsene fra Big Bang-nukleosyntese.

### Mørk materie

Observasjoner viser at galakser roterer raskere enn de burde basert på den synlige massen. Det tyder på at det finnes en usynlig form for materie — **mørk materie** — som utgjør ca. $27\\%$ av universets totale energi/masse. Vi vet ikke hva den består av, men den merkes gjennom gravitasjon.

**Bevis for mørk materie:**
- Galakserotasjonskurver
- Gravitasjonslinser
- Strukturen i den kosmiske bakgrunnsstrålingen
- Klyngedynamikk

### Mørk energi

I 1998 oppdaget to uavhengige forskergrupper at universets ekspansjon **akselererer**. Denne oppdagelsen (Nobelprisen 2011) tyder på en mystisk «mørk energi» som utgjør ca. $68\\%$ av universets totale energiinnhold.

**Universets energibudsjett:**
- Ca. $68\\%$ mørk energi
- Ca. $27\\%$ mørk materie
- Ca. $5\\%$ vanlig materie (det vi kan se)

Vi forstår altså bare ca. $5\\%$ av universets innhold!`,
    },

    // --- Gravitasjonsbølger ---
    {
      id: 'fys2-8-3-gravitasjon',
      type: 'text',
      content: `## Gravitasjonsbølger

Einstein forutsatte i 1916 at akselererte masser skaper **krusninger i rom-tiden** — gravitasjonsbølger — som brer seg med lyshastigheten. I nesten 100 år var disse umulige å observere.

### Oppdagelsen (2015)

Den 14. september 2015 observerte **LIGO** (Laser Interferometer Gravitational-Wave Observatory) for første gang gravitasjonsbølger fra to svarte hull som kolliderte ca. 1,3 milliarder lysår unna. Oppdagelsen ga Nobelprisen i fysikk i 2017.

### Hvordan LIGO fungerer

LIGO er et gigantisk **Michelson-interferometer** med armer på 4 km. En laserstråle splittes i to, sendes langs de to armene, reflekteres av speil, og rekombineres. Gravitasjonsbølger endrer lengden på armene med en ufattelig liten mengde — ca. $10^{-18} \\, \\text{m}$ (tusenedelen av en protondiameter!).

**Nøkkeltall:**
- **Armerlengde**: 4 km
- **Følsomhet**: $\\Delta L \\sim 10^{-18} \\, \\text{m}$
- **LIGO**: To detektorer i USA (Louisiana og Washington)
- **Virgo**: Europeisk detektor i Italia med 3 km armer
- **KAGRA**: Japansk detektor

### Hva kan vi lære?

Gravitasjonsbølgeastronomi gir oss et nytt «vindu» til universet:
- Kolliderende svarte hull og nøytronstjerner
- Informasjon om den sterke gravitasjonen
- Test av generell relativitetsteori
- Kosmologiske avstander (uavhengig av lysbaserte metoder)

I 2017 ble gravitasjonsbølger fra to kolliderende nøytronstjerner observert både av LIGO/Virgo og av teleskoper i hele det elektromagnetiske spekteret — «multi-messenger»-astronomi var født.`,
    },

    // --- Note: Norsk bidrag ---
    {
      id: 'fys2-8-3-note-norge',
      type: 'note',
      title: 'Norske bidrag til fysikkforskning',
      content: `Norge har en lang tradisjon innen fysikkforskning:

- **Kristian Birkeland** (1867–1917): Pioner innen nordlysforskning, forklarte nordlyset som ladede partikler fra solen.
- **CERN-deltakelse**: Norge er medlem av CERN, og norske forskere deltar i ATLAS-eksperimentet.
- **Universitetet i Oslo**: Har sterke forskergrupper innen partikkelfysikk, kjernefysikk og astrofysikk.
- **NTNU**: Bidrar til eksperimentell og teoretisk fysikk.
- **Andøya Space**: Norges romhavn for forskning med raketter og ballonger.
- **EISCAT**: Radar i Tromsø som studerer den øvre atmosfæren og nordlyset.
- **IceCube**: Norske forskere bidrar til nøytrinoteleskopet ved Sydpolen.
- **Norsk Romsenter**: Koordinerer Norges deltakelse i europeisk romvirksomhet (ESA).`,
    },

    // --- Fremtidens fysikk ---
    {
      id: 'fys2-8-3-fremtid',
      type: 'text',
      content: `## Fremtidens fysikk

Det er mange ubesvarte spørsmål i fysikken. Her er noen av de store utfordringene:

### De store ubesvarte spørsmålene

1. **Hva er mørk materie?** Kandidater inkluderer WIMP-er (Weakly Interacting Massive Particles) og aksioner.
2. **Hva er mørk energi?** Er det en kosmologisk konstant, eller et dynamisk felt?
3. **Hvordan forene kvantemekanikk og gravitasjon?** Kandidatteorier inkluderer strengteori og løkkekvantegraviatasjon.
4. **Hvorfor er det mer materie enn antimaterie?** Kalt baryonasymmetriproblemet.
5. **Hva skjer inni et svart hull?** Singulariteten bryter sammen i generell relativitetsteori.

### Strengteori

**Strengteori** postulerer at de fundamentale byggesteinene ikke er punktpartikler, men bittesmå vibrerende «strenger» med lengde ca. $10^{-35} \\, \\text{m}$ (Planck-lengden). Ulike vibrasjonsmoder gir opphav til ulike partikler. Strengteori krever ekstra romlige dimensjoner (10 eller 11 totalt) som er «sammenrullet» og for små til å observere direkte.

### Kvantedatamaskiner

Kvanteteknologi utnytter kvantemekaniske fenomener som superposisjon og sammenfiltring (entanglement) til å bygge helt nye typer datamaskiner som kan løse visse problemer eksponentielt raskere enn vanlige datamaskiner.

### Fremtidige eksperimenter

- **FCC** (Future Circular Collider): Foreslått oppfølger til LHC med 91 km omkrets
- **LISA**: Gravitasjonsbølgedetektor i rommet (planlagt oppskytning ca. 2035)
- **Mørk materie-detektorer**: Flere eksperimenter jakter på direkte observasjon av mørk materie
- **Nøytrinoobservatorier**: Studerer nøytrinoer for å forstå deres masse og natur`,
    },

    // --- Definisjon: Sammenheng mellom kursets temaer ---
    {
      id: 'fys2-8-3-def-sammenheng',
      type: 'definition',
      title: 'Sammenheng med kursets temaer',
      content: `Mange emner i moderne fysikk bygger direkte på det du har lært i Fysikk 2:

| Kurstema | Moderne forskning |
|---|---|
| **Mekanikk** | Gravitasjonsbølger, himmelmekanikk |
| **Elektromagnetisme** | Akseleratorfysikk, deteksjonsteknikk |
| **Kvantefysikk** | Partikkelfysikk, kvanteteknologi |
| **Atomfysikk** | Spektroskopi, laserfysikk |
| **Kjernefysikk** | Fusjonsforskning, medisinsk fysikk |
| **Relativitetsteori** | Kosmologi, svarte hull, GPS-korreksjon |`,
    },

    // --- Eksempel: Energi ved CERN ---
    {
      id: 'fys2-8-3-eks-cern',
      type: 'example',
      title: 'Energi og masse ved LHC',
      problem: `Ved LHC kolliderer to protoner med total kollisjonsenergi $E = 13{,}6 \\, \\text{TeV}$. Higgs-bosonet har masse $m_H = 125 \\, \\text{GeV/c}^2$.

a) Konverter Higgs-bosonets masse til kg.
b) Hvor mange ganger tyngre er Higgs-bosonet enn protonet ($m_p = 0{,}938 \\, \\text{GeV/c}^2$)?
c) Hvorfor trengs det kollisjoner med $13{,}6 \\, \\text{TeV}$ for å produsere en partikkel på $125 \\, \\text{GeV}$?`,
      solution: `**a) Massekonvertering:**

$$m_H = 125 \\, \\text{GeV/c}^2 = \\frac{125 \\times 10^9 \\times 1{,}602 \\times 10^{-19} \\, \\text{J}}{(3{,}00 \\times 10^8 \\, \\text{m/s})^2}$$

$$= \\frac{2{,}003 \\times 10^{-8}}{9{,}00 \\times 10^{16}} = 2{,}23 \\times 10^{-25} \\, \\text{kg}$$

**b) Masseforhold:**

$$\\frac{m_H}{m_p} = \\frac{125}{0{,}938} \\approx 133$$

Higgs-bosonet er ca. 133 ganger tyngre enn protonet.

**c) Hvorfor så mye energi?**

Selv om Higgs-bosonet «bare» trenger $125 \\, \\text{GeV}$, er det flere grunner til at mye høyere energi trengs:
- Ikke all kollisjonsenergi går til å produsere Higgs: Protonene er sammensatte partikler, og det er kvarkene/gluonene inne i protonet som kolliderer — de bærer bare en brøkdel av protonets energi.
- Bevaring av bevegelsesmengde krever at andre partikler også produseres.
- Higgs-produksjon er en svært sjelden prosess — høyere energi øker sannsynligheten.`,
    },

    // --- Eksempel: Gravitasjonsbølger ---
    {
      id: 'fys2-8-3-eks-grav',
      type: 'example',
      title: 'LIGO og gravitasjonsbølger',
      problem: `LIGO kan detektere endringer i armlengden på $\\Delta L = 10^{-18} \\, \\text{m}$. Armene er $L = 4{,}0 \\, \\text{km}$ lange.

a) Hva er den relative endringen $\\Delta L / L$?
b) Sammenlign $\\Delta L$ med diameteren til et proton ($d_p \\approx 1{,}0 \\times 10^{-15} \\, \\text{m}$).
c) Sammenlign $\\Delta L / L$ med å måle avstanden til nærmeste stjerne (Proxima Centauri, $4{,}24$ lysår) med nøyaktighet lik tykkelsen av et menneskehår ($0{,}1 \\, \\text{mm}$).`,
      solution: `**a) Relativ endring:**

$$\\frac{\\Delta L}{L} = \\frac{10^{-18}}{4{,}0 \\times 10^3} = 2{,}5 \\times 10^{-22}$$

**b) Sammenligning med proton:**

$$\\frac{\\Delta L}{d_p} = \\frac{10^{-18}}{10^{-15}} = \\frac{1}{1000}$$

LIGO måler endringer som er **tusen ganger mindre enn diameteren til et proton**!

**c) Sammenligning med Proxima Centauri:**

Avstand: $d = 4{,}24 \\, \\text{lysår} = 4{,}24 \\times 9{,}461 \\times 10^{15} \\, \\text{m} = 4{,}01 \\times 10^{16} \\, \\text{m}$

Hår: $0{,}1 \\, \\text{mm} = 10^{-4} \\, \\text{m}$

$$\\frac{\\text{hår}}{d} = \\frac{10^{-4}}{4{,}01 \\times 10^{16}} = 2{,}5 \\times 10^{-21}$$

LIGOs relative presisjon ($2{,}5 \\times 10^{-22}$) er ca. **10 ganger bedre** enn dette. Det tilsvarer å måle avstanden til nærmeste stjerne med presisjon på en tiendedels hårsbredd.`,
    },

    // --- Note: Oppsummering ---
    {
      id: 'fys2-8-3-note-oppsummering',
      type: 'note',
      title: 'Oppsummering av kapittel 8.3',
      content: `**Standardmodellen**: 6 kvarker, 6 leptoner, kraftbærere (foton, W/Z, gluon) + Higgs-bosonet.

**CERN/LHC**: Verdens kraftigste partikkelakselerator, 27 km omkrets, oppdaget Higgs-bosonet i 2012.

**Astrofysikk**: Big Bang-kosmologi, mørk materie ($27\\%$), mørk energi ($68\\%$), kosmisk bakgrunnsstråling.

**Gravitasjonsbølger**: Forutsagt av Einstein (1916), observert av LIGO (2015), Nobelpris 2017.

**Fremtiden**: Strengteori, kvantegravitasjon, kvantedatamaskiner, FCC, LISA.`,
    },
  ],

  // --- Oppgaver ---
  exercises: [
    {
      id: 'fys2-8-3-ex1',
      type: 'classic',
      difficulty: 'lett',
      task: `Nevn de tre gruppene av fundamentale partikler i Standardmodellen og gi minst to eksempler fra hver gruppe.`,
      solution: `1. **Kvarker**: Opp-kvark ($u$), ned-kvark ($d$), sjarm-kvark ($c$), sær-kvark ($s$), topp-kvark ($t$), bunn-kvark ($b$)

2. **Leptoner**: Elektron ($e^-$), elektronnøytrino ($\\nu_e$), myon ($\\mu^-$), myonnøytrino ($\\nu_\\mu$), tauon ($\\tau^-$), tauonnøytrino ($\\nu_\\tau$)

3. **Bosoner (kraftbærere)**: Foton ($\\gamma$), W-boson ($W^\\pm$), Z-boson ($Z^0$), gluon ($g$), Higgs-boson ($H$)`,
    },
    {
      id: 'fys2-8-3-ex2',
      type: 'classic',
      difficulty: 'lett',
      task: `Hva er de fire fundamentale naturkreftene? Ranger dem fra sterkest til svakest, og oppgi kraftbæreren for hver.`,
      solution: `Fra sterkest til svakest:

1. **Sterk kjernekraft**: Holder kvarker sammen i protoner/nøytroner, og protoner/nøytroner sammen i kjernen. Kraftbærer: **gluon** ($g$). Relativ styrke: $1$.

2. **Elektromagnetisk kraft**: Virker mellom ladede partikler. Kraftbærer: **foton** ($\\gamma$). Relativ styrke: $\\sim 10^{-2}$.

3. **Svak kjernekraft**: Ansvarlig for radioaktivt betahenfall. Kraftbærere: **$W^+$, $W^-$, $Z^0$**. Relativ styrke: $\\sim 10^{-6}$.

4. **Gravitasjonskraften**: Virker mellom alle masser. Hypotetisk kraftbærer: **graviton**. Relativ styrke: $\\sim 10^{-39}$.`,
    },
    {
      id: 'fys2-8-3-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: `Et proton består av kvarkene $uud$. Et nøytron består av $udd$.

a) Beregn ladningen til protonet fra kvarkenes ladninger ($u: +\\frac{2}{3}e$, $d: -\\frac{1}{3}e$).
b) Beregn ladningen til nøytronet.
c) Forklar hvorfor det er umulig å observere en fri kvark (kvark confinement).`,
      solution: `**a) Proton ($uud$):**

$$Q_p = \\frac{2}{3}e + \\frac{2}{3}e + \\left(-\\frac{1}{3}e\\right) = \\frac{2+2-1}{3}e = \\frac{3}{3}e = +e \\checkmark$$

**b) Nøytron ($udd$):**

$$Q_n = \\frac{2}{3}e + \\left(-\\frac{1}{3}e\\right) + \\left(-\\frac{1}{3}e\\right) = \\frac{2-1-1}{3}e = 0 \\checkmark$$

**c) Kvark confinement:** Den sterke kraften mellom kvarker (mediert av gluoner) har den unike egenskapen at den **øker med avstanden**. Hvis man prøver å trekke to kvarker fra hverandre, blir energien i gluonfeltet så stor at det spontant dannes nye kvark-antikvark-par fra vakuumet. Resultatet er at kvarker alltid opptrer i grupper — enten tre kvarker (baryoner, f.eks. proton) eller en kvark og en antikvark (mesoner). En fri kvark er aldri observert.`,
    },
    {
      id: 'fys2-8-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: `Nevn tre uavhengige observasjoner som støtter Big Bang-teorien. Forklar kort hva hver observasjon viser.`,
      solution: `1. **Hubbles lov (universets ekspansjon)**: Edwin Hubble oppdaget at galakser fjerner seg fra oss med hastighet proporsjonal med avstanden ($v = H_0 d$). Rødforskyvningen av fjerne galakser viser at universet ekspanderer — og at det derfor var mindre og tettere i fortiden.

2. **Kosmisk bakgrunnsstråling (CMB)**: Stråling med temperatur $2{,}725 \\, \\text{K}$ fyller hele universet. Den stammer fra ca. $380\\,000$ år etter Big Bang, da universet ble gjennomsiktig for lys. Forutsagt av Gamow (1948), oppdaget av Penzias og Wilson (1965, Nobelpris).

3. **Grunnstoffsammensetning** (Big Bang-nukleosyntese): I de første minuttene etter Big Bang ble hydrogen ($\\sim 75\\%$), helium ($\\sim 25\\%$) og spormengder av litium og deuterium dannet. De observerte mengdene stemmer nøyaktig med beregningene.`,
    },
    {
      id: 'fys2-8-3-ex5',
      type: 'classic',
      difficulty: 'lett',
      task: `Hva er mørk materie og mørk energi? Omtrent hvor stor andel av universets totale energiinnhold utgjør de?`,
      solution: `**Mørk materie** er en hypotetisk form for materie som ikke sender ut, absorberer eller reflekterer lys, men som påvirker vanlig materie gjennom gravitasjon. Den forklarer bl.a. galaksers rotasjonskurver og gravitasjonslinseeffekter. Den utgjør ca. **$27\\%$** av universets energiinnhold.

**Mørk energi** er en mystisk kraft eller egenskap ved rommet som driver den akselererende ekspansjonen av universet. Den ble oppdaget i 1998 gjennom observasjoner av fjerne supernovaer. Den utgjør ca. **$68\\%$** av universets energiinnhold.

Sammen utgjør de ca. $95\\%$ — vanlig materie (alt vi kan se og måle direkte) utgjør bare ca. **$5\\%$**.`,
    },
    {
      id: 'fys2-8-3-ex6',
      type: 'classic',
      difficulty: 'medium',
      task: `LIGO detekterer gravitasjonsbølger ved å måle lengdeendringer $\\Delta L = 10^{-18} \\, \\text{m}$ i armer med lengde $L = 4{,}0 \\, \\text{km}$.

a) Hva er den relative presisjonen $\\Delta L / L$?
b) Et hydrogenatom har radius $r_H \\approx 5{,}3 \\times 10^{-11} \\, \\text{m}$. Hvor mange ganger større er dette enn $\\Delta L$?
c) Hvorfor har LIGO to detektorer (i Louisiana og Washington)?`,
      solution: `**a)** $$\\frac{\\Delta L}{L} = \\frac{10^{-18}}{4{,}0 \\times 10^3} = 2{,}5 \\times 10^{-22}$$

**b)** $$\\frac{r_H}{\\Delta L} = \\frac{5{,}3 \\times 10^{-11}}{10^{-18}} = 5{,}3 \\times 10^7$$

Et hydrogenatom er ca. $53$ millioner ganger større enn det LIGO kan detektere!

**c)** To grunner:
1. **Støyreduksjon**: Lokale vibrasjoner (trafikk, jordskjelv, etc.) påvirker bare én detektor. Et ekte gravitasjonsbølgesignal vil dukke opp i **begge** detektorene med en liten tidsforskjell (opptil 10 ms pga. lyshastigheten).
2. **Retningsbestemmelse**: Tidsforskjellen mellom de to detektorene gir informasjon om hvilken retning gravitasjonsbølgen kom fra. Med flere detektorer (Virgo, KAGRA) kan posisjonen bestemmes enda bedre.`,
    },
    {
      id: 'fys2-8-3-ex7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Ved CERN-eksperimentet ble Higgs-bosonet bekreftet med «$5\\sigma$ signifikans». Forklar hva dette betyr statistisk, og beregn sannsynligheten for at signalet er tilfeldig (bruk at $P(5\\sigma) \\approx 2{,}87 \\times 10^{-7}$).`,
      solution: `**Hva betyr $5\\sigma$?**

$\\sigma$ (sigma) refererer til standardavviket i en normalfordeling. Et $5\\sigma$-resultat betyr at det observerte signalet avviker minst $5$ standardavvik fra det som forventes dersom hypotesen om «ingen ny partikkel» (nullhypotesen) stemmer.

**Sannsynlighet:**

$$P(5\\sigma) \\approx 2{,}87 \\times 10^{-7} \\approx 1 : 3{,}5 \\text{ millioner}$$

Det er altså mindre enn 1 av 3,5 millioner sjanse for at signalet skyldes en tilfeldig statistisk fluktuasjon.

**Hvorfor $5\\sigma$?**

Fysikere bruker $5\\sigma$ som standard for å «oppdage» en ny partikkel (mens $3\\sigma$ kalles «bevis» og $2\\sigma$ kalles «indikasjon»). Den strenge grensen er nødvendig fordi:
- Det gjøres enormt mange analyser, som øker sjansen for falske signaler
- Historisk har $3\\sigma$-signaler ofte forsvunnet med mer data
- Konsekvensene av en feil oppdagelse er store for feltet`,
    },
    {
      id: 'fys2-8-3-ex8',
      type: 'classic',
      difficulty: 'medium',
      task: `Standardmodellen kan ikke forklare alt. Nevn minst tre fenomener eller spørsmål som Standardmodellen IKKE kan forklare.`,
      solution: `Standardmodellen forklarer ikke:

1. **Gravitasjon**: Standardmodellen inkluderer ikke gravitasjonskraften. Det finnes ingen kvanteteori for gravitasjon som er forenlig med generell relativitetsteori.

2. **Mørk materie**: Ingen av partiklene i Standardmodellen har egenskapene som trengs for å forklare mørk materie.

3. **Mørk energi**: Standardmodellen har ingen forklaring på den akselererende ekspansjonen av universet.

4. **Materie-antimaterie-asymmetri**: Standardmodellen forutsier nesten like mye materie og antimaterie, men universet består nesten utelukkende av materie.

5. **Nøytrinomasse**: Standardmodellen forutsier opprinnelig masseløse nøytrinoer, men nøytrinooscillasjoner viser at de har (svært liten) masse.

6. **Hierarkiproblemet**: Hvorfor er gravitasjonskraften så mye svakere enn de andre kreftene?`,
    },
    {
      id: 'fys2-8-3-ex9',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Kosmisk bakgrunnsstråling (CMB) har temperatur $T = 2{,}725 \\, \\text{K}$.

a) Bruk Wiens forskyvningslov ($\\lambda_{\\text{maks}} = \\frac{b}{T}$ der $b = 2{,}898 \\times 10^{-3} \\, \\text{m·K}$) til å finne bølgelengden der CMB-strålingen er sterkest.
b) Hvilket område av det elektromagnetiske spekteret tilhører denne bølgelengden?
c) CMB ble sendt ut da universet hadde temperatur ca. $3000 \\, \\text{K}$. Med hvilken faktor har universet ekspandert siden den gang? (Hint: Bølgelengden skalerer med universets størrelse.)`,
      solution: `**a) Wiens lov:**

$$\\lambda_{\\text{maks}} = \\frac{b}{T} = \\frac{2{,}898 \\times 10^{-3}}{2{,}725} = 1{,}064 \\times 10^{-3} \\, \\text{m} = 1{,}06 \\, \\text{mm}$$

**b)** Bølgelengden $1{,}06 \\, \\text{mm}$ tilhører **mikrobølge**-området av det elektromagnetiske spekteret (derav navnet «kosmisk mikrobølgebakgrunn»). Det ligger i grenseområdet mellom infrarødt og mikrobølger.

**c) Ekspansjonsfaktor:**

Bølgelengden skalerer proporsjonalt med universets størrelse $a$. Temperaturen er omvendt proporsjonal med bølgelengden ($T \\propto 1/\\lambda$), altså:

$$\\frac{a_{\\text{nå}}}{a_{\\text{da}}} = \\frac{T_{\\text{da}}}{T_{\\text{nå}}} = \\frac{3000}{2{,}725} \\approx 1100$$

Universet har ekspandert med en faktor ca. **1100** siden CMB ble sendt ut (ca. 380 000 år etter Big Bang). Dette kalles også rødforskyvningen $z \\approx 1100$.`,
    },
    {
      id: 'fys2-8-3-ex10',
      type: 'classic',
      difficulty: 'lett',
      task: `Forklar kort hva Higgs-feltet er og hvorfor det er viktig for partikkelfysikk.`,
      solution: `**Higgs-feltet** er et felt som gjennomstrømmer hele universet, på samme måte som et elektromagnetisk felt. Alle fundamentale partikler vekselvirker med dette feltet, og det er denne vekselvirkningen som gir dem masse.

**Hvorfor viktig:**
- Uten Higgs-feltet ville alle partikler vært masseløse og beveget seg med lyshastighet.
- Det forklarer hvorfor $W$- og $Z$-bosonene har stor masse (og den svake kraften dermed har kort rekkevidde), mens fotonet er masseløst (elektromagnetismen har uendelig rekkevidde).
- **Higgs-bosonet** er en kvantisert eksitasjon av dette feltet — en «krusning» i feltet. Det ble bekreftet eksperimentelt ved CERN i 2012, noe som var en triumf for Standardmodellen.`,
    },
  ],
};


// ============================================================================
// Kapittel 8.4: Prosjektarbeid i fysikk
// ============================================================================

export const CHAPTER_FYSIKK2_8_4: TextbookChapter = {
  id: 'fysikk2-8-4',
  courseId: 'fysikk2',
  chapterNumber: '8.4',
  title: 'Prosjektarbeid i fysikk',
  description:
    'Lær om prosjektplanlegging, rapportskriving (IMRaD), kildebruk, presentasjonsteknikk og forskningsetikk for fysikkprosjekter.',
  estimatedMinutes: 80,
  prerequisites: ['fysikk2-8-1', 'fysikk2-8-2'],
  competenceGoals: [
    'planlegge, gjennomføre, vurdere og presentere et eksperimentelt eller teoretisk fysikkprosjekt',
    'skrive en vitenskapelig rapport med IMRaD-struktur',
    'bruke kilder kritisk og referere korrekt',
    'formidle fysikkfaglig innhold muntlig og skriftlig',
    'drøfte etiske problemstillinger knyttet til fysikkforskning og teknologi',
  ],
  content: [
    // --- Introduksjon ---
    {
      id: 'fys2-8-4-intro',
      type: 'text',
      content: `# Prosjektarbeid i fysikk

Et av de viktigste kompetansemålene i fysikk 2 er å planlegge og gjennomføre et selvstendig prosjektarbeid. Dette gir deg erfaring med hele forskningsprosessen — fra idé til ferdig rapport og presentasjon.

I dette kapittelet går vi gjennom alle stegene i et fysikkprosjekt, med praktiske tips og maler som hjelper deg å lage et godt prosjekt.

## Typer prosjekter

Det finnes to hovedtyper fysikkprosjekter:

1. **Eksperimentelt prosjekt**: Du gjennomfører egne eksperimenter, samler inn data, analyserer dem og trekker konklusjoner.
2. **Teoretisk prosjekt**: Du fordyper deg i et teoretisk tema, gjør beregninger eller simuleringer, og presenterer funnene.

Mange prosjekter kombinerer begge deler: et eksperiment motivert av teori, der resultatene sammenlignes med teoretiske forutsigelser.`,
    },

    // --- Prosjektplanlegging ---
    {
      id: 'fys2-8-4-planlegging',
      type: 'text',
      content: `## Prosjektplanlegging

### Steg 1: Velge tema

Velg et tema som:
- **Interesserer deg**: Motivasjon er avgjørende for et godt prosjekt.
- **Er gjennomførbart**: Vurder tilgjengelig utstyr, tid og kompetanse.
- **Har en klar fysisk sammenheng**: Prosjektet skal demonstrere fysiske prinsipper.
- **Gir mulighet for målinger og analyse**: Det bør være noe konkret å undersøke.

### Steg 2: Formulere problemstilling

En god problemstilling er:
- **Avgrenset**: Ikke for bred — «Hva er fysikk?» er umulig å besvare. «Hvordan avhenger svingetiden av pendellengden?» er konkret.
- **Testbar**: Det må være mulig å besvare spørsmålet gjennom eksperiment eller beregning.
- **Presis**: Bruk fysiske størrelser og angi hva som skal måles.

**Gode eksempler:**
- «Hvordan påvirker vindens hastighet luftmotstanden på en sykkel?»
- «Følger avkjølingen av en kopp kaffe Newtons avkjølingslov?»
- «Hva er den kritiske vinkelen for totalrefleksjon i glass?»

**Dårlige eksempler:**
- «Noe om elektrisitet» (for vagt)
- «Bevise at Einstein hadde rett» (for ambisiøst)

### Steg 3: Lage en tidsplan

En realistisk tidsplan er viktig. Typisk fordeling for et 4-ukers prosjekt:

| Uke | Aktivitet |
|---|---|
| 1 | Valg av tema, litteratursøk, planlegging |
| 2 | Gjennomføring av eksperiment / beregninger |
| 3 | Dataanalyse, skriving av rapport |
| 4 | Ferdigstilling, presentasjonsforberedelse |

Start tidlig med skrivingen — ikke vent til alt er ferdig med eksperimentet!`,
    },

    // --- Litteratursøk ---
    {
      id: 'fys2-8-4-litteratur',
      type: 'text',
      content: `## Litteratursøk og kildebruk

### Hvor finne kilder

- **Lærebøker**: Fysikk 2-boken og universitetslærebøker gir grunnlaget.
- **Vitenskapelige artikler**: Tilgjengelig via Google Scholar, arXiv.org eller biblioteket.
- **Store norske leksikon** (snl.no): God kilde for bakgrunnsinformasjon.
- **Fysikkorganisasjoner**: CERN, NASA, ESA har gode populærvitenskapelige sider.
- **Wikipedia**: Kan brukes som **utgangspunkt**, men sjekk alltid de oppgitte kildene.

### Kildekritikk

Vurder alltid kildene dine:

- **Hvem** har skrevet teksten? Er det en ekspert, en student, en journalist?
- **Når** ble den publisert? Er informasjonen oppdatert?
- **Hvor** er den publisert? Et fagfellevurdert tidsskrift er mer pålitelig enn en blogg.
- **Hva** er formålet? Er teksten objektiv eller har den en agenda?

### Kildehierarki (fra mest til minst pålitelig)

1. Fagfellevurderte vitenskapelige artikler
2. Anerkjente lærebøker og oppslagsverk
3. Rapporter fra forskningsinstitusjoner
4. Populærvitenskapelige artikler og bøker
5. Nyhetsartikler
6. Blogger og sosiale medier`,
    },

    // --- Note: Plagiering ---
    {
      id: 'fys2-8-4-note-plagiering',
      type: 'warning',
      title: 'Plagiering',
      content: `**Plagiering** er å presentere andres arbeid som ditt eget — det er juks og kan få alvorlige konsekvenser.

- **Sitér alltid** når du bruker andres ord eller idéer.
- **Parafrasering** (omskriving med egne ord) må også ha kildehenvisning.
- **Bilder og figurer** fra andre kilder må ha tydelig referanse.
- **Bruk anførselstegn** ved direkte sitater.
- **KI-generert tekst** bør opplyses om — sjekk skolens regler.

Alle referanser skal samles i en referanseliste bakerst i rapporten.`,
    },

    // --- IMRaD-struktur ---
    {
      id: 'fys2-8-4-imrad',
      type: 'text',
      content: `## Rapportskriving: IMRaD-strukturen

Den internasjonale standarden for vitenskapelige rapporter er **IMRaD**-strukturen:

- **I** = Introduksjon
- **M** = Metode
- **R** = Resultater
- **a** = og (and)
- **D** = Diskusjon

### Komplett rapportstruktur

1. **Tittelside**: Tittel, navn, dato, skole, fag
2. **Sammendrag** (abstract): Kort oppsummering (100–200 ord) av hele rapporten
3. **Introduksjon**: Bakgrunn, teori, problemstilling, hypotese
4. **Metode**: Utstyr, fremgangsmåte, eksperimentoppsett
5. **Resultater**: Data, tabeller, grafer — uten tolkning
6. **Diskusjon**: Tolkning av resultater, feilkilder, sammenligning med teori
7. **Konklusjon**: Svar på problemstillingen
8. **Referanseliste**: Alle kilder brukt i rapporten`,
    },

    // --- Definisjon: IMRaD ---
    {
      id: 'fys2-8-4-def-imrad',
      type: 'definition',
      title: 'IMRaD-strukturen',
      content: `**IMRaD** er den internasjonale standarden for oppbygging av vitenskapelige artikler og rapporter.

- **Introduksjon**: Hva er problemet? Hvorfor er det viktig? Hva er kjent fra før? Hva er hypotesen?
- **Metode**: Hvordan ble forsøket gjennomført? Detaljert nok til at andre kan gjenta det.
- **Resultater**: Hva ble målt/observert? Presentert som data, tabeller og figurer — uten tolkning.
- **Diskusjon**: Hva betyr resultatene? Stemmer de med hypotesen og teori? Hva er feilkildene? Hva kan forbedres?`,
    },

    // --- Detaljert beskrivelse av hver del ---
    {
      id: 'fys2-8-4-rapport-detalj',
      type: 'text',
      content: `## Detaljert guide til hver rapportdel

### 1. Introduksjon

Introduksjonen setter scenen for arbeidet ditt. Den bør inneholde:

- **Bakgrunn**: Hvorfor er dette temaet interessant og relevant?
- **Teori**: De fysiske lovene og formlene du bruker (med referanser).
- **Tidligere arbeid**: Hva er allerede kjent om dette temaet?
- **Problemstilling**: Det konkrete spørsmålet du vil besvare.
- **Hypotese**: Din forutsigelse av hva du forventer å finne.

**Tips:** Gå fra det generelle til det spesifikke. Start bredt (f.eks. «Svingninger er et grunnleggende fenomen i fysikken...») og avgrens gradvis til din konkrete problemstilling.

### 2. Metode

Metoden skal være så detaljert at en annen elev kan gjenta forsøket ditt. Inkluder:

- **Utstyr**: Liste over alt utstyr med spesifikasjoner (f.eks. «Digital stoppeklokke, oppløsning 0,01 s»).
- **Oppstilling**: Skisse eller foto av eksperimentoppsettet.
- **Fremgangsmåte**: Steg-for-steg-beskrivelse av hva du gjorde.
- **Variabler**: Identifiser uavhengig, avhengig og kontrollvariabler.
- **Målinger**: Hvor mange gjentakelser? Hvilke verdier ble brukt?

**Tips:** Skriv i fortid og passiv form: «Svingetiden ble målt med en digital stoppeklokke.»

### 3. Resultater

Her presenterer du rå data og bearbeidede resultater — **uten tolkning**:

- **Tabeller** med rådata, gjennomsnitt, standardavvik, usikkerheter.
- **Grafer** med tittel, aksetitler, enheter, feilstaver og regresjonslinjer.
- **Beregninger**: Vis viktige mellomregninger og usikkerhetspropagering.

**Tips:** Nummerér figurer og tabeller (Figur 1, Tabell 1) og referer til dem i teksten.

### 4. Diskusjon

Diskusjonen er den viktigste delen — her viser du at du **forstår** det du har gjort:

- **Tolkning**: Hva betyr resultatene? Stemmer de med hypotesen?
- **Sammenligning**: Sammenlign med teoretiske verdier og/eller tabellverdier.
- **Feilkilder**: Identifiser systematiske og tilfeldige feil. Vurder hvilke som er viktigst.
- **Forbedringer**: Hva kunne du gjort annerledes for å få bedre resultater?
- **Videre arbeid**: Hva ville vært interessant å undersøke videre?

**Tips:** Vær ærlig! Innrøm svakheter — det viser modenhet. Å få et «feil» resultat er ikke nødvendigvis dårlig, så lenge du kan forklare hvorfor.

### 5. Konklusjon

Kort og konsist svar på problemstillingen:
- Ble hypotesen støttet eller falsifisert?
- Oppgi hovedresultatet med usikkerhet.
- 3–5 setninger er vanligvis nok.`,
    },

    // --- Eksempel: Rapportmal ---
    {
      id: 'fys2-8-4-eks-rapportmal',
      type: 'example',
      title: 'Eksempel på rapportstruktur',
      problem: `Skriv en disposisjon for en rapport om å bestemme tyngdeakselerasjonen $g$ med en pendel.`,
      solution: `**Tittel:** Bestemmelse av tyngdeakselerasjonen $g$ ved hjelp av en matematisk pendel

**Sammendrag:**
«I dette forsøket ble tyngdeakselerasjonen bestemt ved å måle svingetiden til en pendel med varierende lengde. Ved å plotte $T^2$ mot $L$ og utføre lineær regresjon ble $g = 9{,}81 \\pm 0{,}09 \\, \\text{m/s}^2$ bestemt, i god overensstemmelse med tabellverdien.»

**Introduksjon:**
- Bakgrunn: Tyngdekraften er en av de fire fundamentale naturkreftene.
- Teori: Pendelformelen $T = 2\\pi\\sqrt{L/g}$, utledning/referanse.
- Problemstilling: «Hva er verdien av $g$ målt med en matematisk pendel?»
- Hypotese: «Vi forventer $g \\approx 9{,}81 \\, \\text{m/s}^2$.»

**Metode:**
- Utstyr: Stativ, snor, kule, meterstokk ($\\pm 0{,}001 \\, \\text{m}$), digital stoppeklokke ($\\pm 0{,}01 \\, \\text{s}$).
- Fremgangsmåte: Målte $T$ for $L = 0{,}4; \\, 0{,}6; \\ldots; \\, 1{,}4 \\, \\text{m}$. 10 svingninger per måling, 3 gjentakelser.
- Variabler: Uavhengig: $L$. Avhengig: $T$. Kontroll: masse, utslag ($< 10°$).

**Resultater:**
- Tabell med $L$, $T$-målinger, gjennomsnitt, standardavvik.
- Graf: $T^2$ mot $L$ med feilstaver og regresjonslinje.
- Regresjonsresultat: $a = 4{,}007 \\, \\text{s}^2/\\text{m}$, $R^2 = 0{,}9999$.
- Beregning: $g = 4\\pi^2/a = 9{,}85 \\, \\text{m/s}^2$.

**Diskusjon:**
- Resultatet $g = 9{,}81 \\pm 0{,}09 \\, \\text{m/s}^2$ er forenlig med tabellverdien.
- Feilkilder: Luftmotstand, trådens masse, vinkelutslag > 10°, reaksjonstid.
- Tidsmålingen dominerer usikkerheten.
- Forbedring: Bruke lysport for tidsmåling, lengre pendel.

**Konklusjon:**
«Tyngdeakselerasjonen ble bestemt til $g = 9{,}81 \\pm 0{,}09 \\, \\text{m/s}^2$, noe som er forenlig med tabellverdien $9{,}81 \\, \\text{m/s}^2$. Hypotesen ble bekreftet.»

**Referanser:**
[1] Lærebok i fysikk 2, Cappelen Damm, 2022.
[2] NIST Reference on Constants, Units, and Uncertainty.`,
    },

    // --- Referanser ---
    {
      id: 'fys2-8-4-referanser',
      type: 'text',
      content: `## Referanser og kildehenvisning

### Referansestiler

De vanligste referansestilene er:

**APA-stilen** (mest brukt i naturfag i norsk skole):
- I teksten: (Etternavn, årstall) eller Etternavn (årstall)
- I referanselisten: Etternavn, F. (årstall). *Tittel*. Utgiver.

**Vancouver-stilen** (vanlig i medisin og naturvitenskap):
- I teksten: nummererte referanser [1], [2], osv.
- I referanselisten: nummerert liste i den rekkefølgen de dukker opp.

### Eksempler (APA)

**Bok:**
Young, H. D. & Freedman, R. A. (2020). *University Physics with Modern Physics* (15. utg.). Pearson.

**Nettside:**
CERN. (2024). The Higgs boson. Hentet fra https://home.cern/science/physics/higgs-boson

**Vitenskapelig artikkel:**
Aad, G. et al. (ATLAS Collaboration). (2012). Observation of a new particle in the search for the Standard Model Higgs boson. *Physics Letters B*, 716(1), 1–29.

### Praktiske tips

- Før referanselisten **underveis** — ikke vent til slutten.
- Bruk gjerne digitale verktøy som Zotero eller Mendeley.
- **Alle** kilder du bruker i teksten skal stå i referanselisten, og omvendt.`,
    },

    // --- Presentasjonsteknikk ---
    {
      id: 'fys2-8-4-presentasjon',
      type: 'text',
      content: `## Presentasjonsteknikk

De fleste fysikkprosjekter avsluttes med en muntlig presentasjon. Her er tips for en god framføring.

### Poster vs muntlig presentasjon

**Poster:**
- Visuelt sammendrag av prosjektet på ett stort ark/plakat
- Inkluderer: Tittel, problemstilling, metode (med bilder), nøkkelresultater (1–2 grafer), konklusjon
- Fordeler: Visuelt tiltalende, kan leses i eget tempo
- Tips: Bruk stor skrift, lite tekst, mange figurer

**Muntlig presentasjon:**
- Typisk 10–15 minutter + spørsmål
- Bruk lysbilder (PowerPoint/Keynote/Google Slides)
- Strukturer etter IMRaD

### Tips for gode lysbilder

- **Maksimalt 5–7 linjer tekst** per lysbilde
- **Én ide per lysbilde**
- **Store, tydelige figurer** og grafer
- **Mørk tekst på lys bakgrunn** (best lesbart)
- Nummerér figurene slik at du lett kan referere til dem
- Unngå å lese teksten fra lysbildene — snakk fritt

### Tips for god framføring

- **Øv på forhånd** — helst foran noen
- **Hold kontakt med publikum** — se på dem, ikke på skjermen
- **Snakk tydelig og rolig** — nervøsitet gjør at mange snakker for fort
- **Forklar figurene** — «her ser vi at...» er alltid en god start
- **Vær forberedt på spørsmål** — tenk gjennom svakheter og feilkilder
- **Hold tiden** — tren med stoppeklokke`,
    },

    // --- Vitenskapelig kommunikasjon ---
    {
      id: 'fys2-8-4-kommunikasjon',
      type: 'text',
      content: `## Vitenskapelig kommunikasjon

Å kommunisere vitenskapelige resultater klart og presist er en viktig ferdighet — både for forskere og for samfunnet.

### Prinsipp: Klarhet og ærlighet

- **Presenter resultatene slik de er** — ikke pynt på dataene.
- **Oppgi alltid usikkerhet** — et resultat uten usikkerhet er ufullstendig.
- **Skille mellom fakta og tolkning** — resultater er fakta, diskusjon er tolkning.
- **Bruk korrekt fagterminologi** — men forklar begreper ved behov.

### Språklige tips for rapportskriving

| Gjør | Ikke gjør |
|---|---|
| «Temperaturen ble målt til $23{,}5 \\pm 0{,}3 \\, °\\text{C}$» | «Temperaturen var omtrent 23 grader» |
| «Resultatet avviker $2{,}3\\%$ fra tabellverdien» | «Resultatet er ganske nær» |
| «Feilkilder inkluderer friksjon og luftmotstand» | «Det ble sikkert noen feil» |
| «Grafen viser en lineær sammenheng med $R^2 = 0{,}998$» | «Grafen ser rett ut» |

### Populærvitenskapelig formidling

Forskere har også et ansvar for å formidle resultatene til allmennheten. Tips:
- Bruk analogier og hverdagseksempler
- Unngå unødvendig sjargong
- Fremhev hvorfor det er viktig
- Vær ærlig om usikkerhet og begrensninger`,
    },

    // --- Etikk i forskning ---
    {
      id: 'fys2-8-4-etikk',
      type: 'text',
      content: `## Etikk i forskning

Vitenskapelig forskning innebærer et stort ansvar. Forskningsetikk handler om de moralske retningslinjene som styrer forskningspraksis.

### Grunnleggende prinsipper

1. **Ærlighet**: Ikke fabriker, forfalsk eller manipuler data. Rapporter det du faktisk observerte.
2. **Åpenhet**: Del metoder, data og resultater slik at andre kan etterprøve dem.
3. **Ansvarlig kildebruk**: Gi korrekt kreditt til andres arbeid. Ikke plagier.
4. **Objektivitet**: Prøv å unngå at forutinntatte meninger (bias) påvirker tolkningene.
5. **Ansvar**: Vurder konsekvensene av forskningen din for samfunn og miljø.

### Eksempler på etiske dilemmaer i fysikk

- **Atombomben**: Kjernefysikkforskning gjorde det mulig å utvikle masseødeleggelsesvåpen. Mange fysikere, inkludert Robert Oppenheimer, slet med de etiske implikasjonene.
- **Overvåkingsteknologi**: Fysikk brukt i overvåking (droner, sensorer) reiser personvernspørsmål.
- **Energiproduksjon**: Kjernekraft gir mye energi med lite CO₂, men medfører risiko for ulykker og atomavfall.
- **Kunstig intelligens**: Fysikk og matematikk er grunnlaget for KI-systemer som kan misbrukes.
- **Ressursbruk i forskning**: Store eksperimenter (LHC, ITER) koster milliarder — er det verdt det?

### Norske retningslinjer

I Norge gir **De nasjonale forskningsetiske komiteene** (NESH, NENT, NEM) retningslinjer for god forskningspraksis. De viktigste prinsippene er **redelighet**, **grundighet** og **åpenhet**.`,
    },

    // --- Prosjektidéer ---
    {
      id: 'fys2-8-4-ideer',
      type: 'text',
      content: `## Forslag til prosjekttemaer

Her er noen idéer til fysikkprosjekter, organisert etter emne:

### Mekanikk
- Bestemme $g$ med ulike metoder (pendel, fritt fall, skråplan) og sammenligne
- Studere energibevaring i ulike kollisjoner (elastisk vs uelastisk)
- Modellere luftmotstand med kaffefilter eller badmintonball
- Bygge og optimalisere en katapult (prosjektilbevegelse)

### Elektromagnetisme
- Kartlegge magnetfeltet rundt en leder eller spole
- Studere Ohms lov for ulike materialer (metaller, halvledere, elektrolytter)
- Bygge en enkel elektromotor og måle effektiviteten
- Undersøke induktans og Faradays lov med en spole og magnet

### Bølger og lys
- Måle lysets hastighet med en mikrobølgeovn og sjokolade
- Undersøke interferens og diffraksjon med en laser og spalter
- Bestemme bølgelengden til ulike laserfarger med et diffraksjonsgitter
- Studere resonans i stående bølger (Kundt-rør eller Chladni-figurer)

### Kjernefysikk og stråling
- Måle bakgrunnsstråling med en Geiger-teller
- Verifisere den inverse kvadratloven for stråling
- Undersøke absorpsjon av stråling i ulike materialer

### Termodynamikk
- Newtons avkjølingslov: Modellere avkjøling av varm væske
- Bestemme den spesifikke varmekapasiteten til ulike materialer
- Studere varmeledning i ulike metaller

### Moderne fysikk
- Fotoelektrisk effekt: Bestemme Plancks konstant
- Studere spektrallinjer med et spektroskop
- Simulere radioaktivt henfall med terninger eller programkode`,
    },

    // --- Note: Sjekkliste ---
    {
      id: 'fys2-8-4-note-sjekkliste',
      type: 'note',
      title: 'Sjekkliste for fysikkprosjektet',
      content: `Bruk denne sjekklisten før innlevering:

**Rapport:**
- [ ] Tittelside med tittel, navn, dato, skole, fag
- [ ] Sammendrag (100–200 ord)
- [ ] Introduksjon med bakgrunn, teori, problemstilling og hypotese
- [ ] Metode med utstyr, oppstilling og fremgangsmåte
- [ ] Resultater med tabeller og grafer (med feilstaver)
- [ ] Diskusjon med tolkning, feilkilder og forbedringer
- [ ] Konklusjon som besvarer problemstillingen
- [ ] Referanseliste i konsistent stil
- [ ] Usikkerhet oppgitt i alle resultater
- [ ] Alle figurer og tabeller har nummer og tittel
- [ ] Rettskriving og fagterminologi er korrekt

**Presentasjon:**
- [ ] Tydelig struktur (IMRaD)
- [ ] Lysbilder med lite tekst, store figurer
- [ ] Øvd på framføringen
- [ ] Forberedt på spørsmål
- [ ] Holder tidsbegrensningen`,
    },

    // --- Eksempel: Prosjektskisse ---
    {
      id: 'fys2-8-4-eks-prosjektskisse',
      type: 'example',
      title: 'Prosjektskisse — Newtons avkjølingslov',
      problem: `Lag en prosjektskisse for et eksperiment som undersøker om avkjølingen av en kopp vann følger Newtons avkjølingslov.`,
      solution: `**Tittel:** Newtons avkjølingslov — eksperimentell verifisering

**Problemstilling:** Følger avkjølingen av varmt vann i en kopp Newtons avkjølingslov $\\frac{dT}{dt} = -k(T - T_{\\text{omg}})$?

**Hypotese:** Temperaturen vil avta eksponentielt: $T(t) = T_{\\text{omg}} + (T_0 - T_{\\text{omg}}) e^{-kt}$, der $k$ er en konstant som avhenger av koppen og omgivelsene.

**Utstyr:**
- Kokeplate, kjele, keramikkkopp
- Digitalt termometer ($\\pm 0{,}1 \\, °\\text{C}$)
- Stoppeklokke
- Romtermometer

**Metode:**
1. Kok vann. Hell i koppen. Mål starttemperaturen $T_0$.
2. Mål temperaturen hvert minutt i 60 minutter.
3. Mål romtemperaturen $T_{\\text{omg}}$ (kontrollvariabel).
4. Gjenta 3 ganger.

**Analyse:**
- Plot $T(t)$ mot $t$.
- Lineariser: Plot $\\ln(T - T_{\\text{omg}})$ mot $t$.
- Utfør lineær regresjon. Stigningstallet gir $-k$.
- Vurder $R^2$ for å avgjøre om modellen passer.

**Tidsplan:**
Uke 1: Teori og planlegging. Uke 2: Eksperiment (3 gjentakelser). Uke 3: Analyse og rapportskriving. Uke 4: Ferdigstilling og presentasjon.`,
    },

    // --- Warning: Vanlige feil ---
    {
      id: 'fys2-8-4-warning',
      type: 'warning',
      title: 'Vanlige feil i prosjektarbeid',
      content: `- **Velger for stort tema**: Avgrenset og konkret er bedre enn bredt og overfladisk.
- **Starter for sent**: Begynn med litteratursøk og planlegging umiddelbart.
- **Manglende usikkerhet**: Alle målte og beregnede verdier skal ha usikkerhet.
- **Svak diskusjon**: Diskusjonen er den viktigste delen. Vurder feilkilder konkret — ikke bare «det ble noen feil».
- **Manglende referanser**: Alt som ikke er din egen observasjon eller allmenngyldig kunnskap, trenger referanse.
- **Kopierer tekst**: Parafrasér og bruk egne ord. Sitér direkte kun ved behov.
- **Presenterer bare resultater uten tolkning**: Grafer og tall er ikke nok — forklar hva de betyr!`,
    },

    // --- Note: Oppsummering ---
    {
      id: 'fys2-8-4-note-oppsummering',
      type: 'note',
      title: 'Oppsummering av kapittel 8.4',
      content: `**Prosjektplanlegging**: Velg avgrenset tema → formuler testbar problemstilling → lag tidsplan.

**Litteratursøk**: Bruk pålitelige kilder (lærebøker, fagfellevurderte artikler), vurder kildens troverdighet.

**IMRaD-strukturen**: Introduksjon, Metode, Resultater og Diskusjon — standard for vitenskapelig rapportering.

**Referanser**: Bruk konsistent referansestil (APA eller Vancouver), referer alle kilder.

**Presentasjon**: Strukturer etter IMRaD, bruk lite tekst og store figurer, øv på framføringen.

**Forskningsetikk**: Ærlighet, åpenhet, ansvarlig kildebruk, vurder konsekvenser.`,
    },
  ],

  // --- Oppgaver ---
  exercises: [
    {
      id: 'fys2-8-4-ex1',
      type: 'classic',
      difficulty: 'lett',
      task: `Hva står bokstavene i IMRaD for? Beskriv kort innholdet i hver del.`,
      solution: `**I** = **Introduksjon**: Bakgrunn, teori, problemstilling og hypotese. Setter scenen for prosjektet.

**M** = **Metode**: Utstyr, eksperimentoppsett og fremgangsmåte. Detaljert nok til at andre kan gjenta forsøket.

**R** = **Resultater**: Presentasjon av data i tabeller og grafer. Ingen tolkning — bare fakta.

**a** = «og» (and)

**D** = **Diskusjon**: Tolkning av resultater, sammenligning med teori, vurdering av feilkilder, forslag til forbedring.`,
    },
    {
      id: 'fys2-8-4-ex2',
      type: 'classic',
      difficulty: 'lett',
      task: `Vurder følgende problemstillinger. Hvilke er gode, og hvilke bør forbedres?

a) «Hva er elektrisitet?»
b) «Hvordan avhenger motstanden i en kobbertråd av trådens lengde?»
c) «Bevise at Newtons lover er riktige»
d) «Hva er sammenhengen mellom frekvensen og bølgelengden til stående bølger i en streng?»`,
      solution: `**a) «Hva er elektrisitet?»** — **Dårlig**. For bred og vag. Kan ikke besvares med et enkelt eksperiment. Forbedring: «Hvordan varierer strømmen gjennom en lyspære med spenningen?»

**b) «Hvordan avhenger motstanden i en kobbertråd av trådens lengde?»** — **God**. Avgrenset, testbar, angir konkrete fysiske størrelser.

**c) «Bevise at Newtons lover er riktige»** — **Dårlig**. For ambisiøst og upresist. Vi kan ikke «bevise» lover — vi kan teste dem. Forbedring: «Undersøke om akselerasjonen til en vogn er proporsonal med den påtrykte kraften, i samsvar med Newtons 2. lov.»

**d) «Hva er sammenhengen mellom frekvensen og bølgelengden til stående bølger i en streng?»** — **God**. Testbar, presis, gir målbare størrelser.`,
    },
    {
      id: 'fys2-8-4-ex3',
      type: 'classic',
      difficulty: 'medium',
      task: `Du skal skrive metodedelen av en rapport om et pendeleksperiment. Skriv en kort metodetekst som inkluderer: utstyr, variabler, fremgangsmåte og gjentakelser.`,
      solution: `**Metode**

**Utstyr:** Laboratoriestativ, syntetisk snor (uelastisk), stålkule ($m = 50{,}0 \\pm 0{,}1 \\, \\text{g}$), meterstokk ($\\pm 0{,}001 \\, \\text{m}$), digital stoppeklokke ($\\pm 0{,}01 \\, \\text{s}$), gradskive.

**Variabler:**
- Uavhengig: Pendellengde $L$ ($0{,}40$–$1{,}40 \\, \\text{m}$ i steg på $0{,}20 \\, \\text{m}$)
- Avhengig: Svingetid $T$
- Kontrollvariabler: Masse (samme kule), utslag ($< 10°$), luftmotstand (minimert ved liten kule)

**Fremgangsmåte:**
Pendellengden ble målt fra opphengningspunktet til kulens sentrum med meterstokken. For hver verdi av $L$ ble pendelen gitt et utslag på ca. $5°$ (kontrollert med gradskive). Tiden for 10 fulle svingninger ble målt med stoppeklokken, og svingetiden ble beregnet som $T = t_{10}/10$. Målingen ble gjentatt 3 ganger for hver pendellengde for å beregne gjennomsnitt og standardavvik.`,
    },
    {
      id: 'fys2-8-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: `Ranger følgende kilder fra mest til minst pålitelig for et fysikkprosjekt, og begrunn rangeringen:

a) En fagfellevurdert artikkel i Physical Review Letters
b) En Wikipedia-artikkel om kvantefysikk
c) Et innlegg på et fysikkforum (Reddit)
d) Fysikk 2-læreboken
e) En populærvitenskapelig artikkel i Illustrert Vitenskap`,
      solution: `**Rangering (mest → minst pålitelig):**

1. **(a) Fagfellevurdert artikkel i Physical Review Letters** — Mest pålitelig. Skrevet av eksperter, gjennomgått av andre eksperter. Primærkilde.

2. **(d) Fysikk 2-læreboken** — Høyt pålitelig. Skrevet av fagpersoner, kvalitetskontrollert. Sekundærkilde som sammenfatter forskning.

3. **(e) Populærvitenskapelig artikkel i Illustrert Vitenskap** — Middels pålitelig. Skrevet av journalister, kan forenkle eller feiltolke. God for bakgrunn, men bør kryssjekkes.

4. **(b) Wikipedia-artikkel** — Variabel pålitelighet. Kan redigeres av hvem som helst, men gode artikler har referanser til primærkilder. Bruk Wikipedia som utgangspunkt, men alltid sjekk de oppgitte referansene.

5. **(c) Innlegg på fysikkforum (Reddit)** — Lavest pålitelig. Anonyme innlegg uten kvalitetskontroll. Kan inneholde feil. Bør aldri brukes som eneste kilde.`,
    },
    {
      id: 'fys2-8-4-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: `Et eksperiment gir $g = 10{,}2 \\, \\text{m/s}^2$, mens tabellverdien er $9{,}81 \\, \\text{m/s}^2$.

a) Beregn det prosentvise avviket.
b) Foreslå tre mulige feilkilder som kan forklare at verdien er for høy.
c) Er dette nødvendigvis et «dårlig» resultat? Begrunn svaret.`,
      solution: `**a) Prosentvis avvik:**

$$\\frac{|10{,}2 - 9{,}81|}{9{,}81} \\times 100\\% = \\frac{0{,}39}{9{,}81} \\times 100\\% = 4{,}0\\%$$

**b) Mulige feilkilder (for høy $g$):**

Siden $g = 2h/t^2$, gir for høy $g$ at:
1. **Høyden $h$ er målt for høy**: F.eks. målt fra toppen av stativet i stedet for slippunktet for ballen.
2. **Tiden $t$ er målt for kort**: Reaksjonstid kan gjøre at stoppeklokken startes for sent (etter at ballen allerede har begynt å falle).
3. **Tilleggsakselerasjon**: Ballen kan ha blitt dyttet nedover i stedet for bare sluppet, noe som gir en initial fart.

**c)** Det er ikke nødvendigvis et «dårlig» resultat — det avhenger av usikkerheten. Hvis usikkerheten er $\\Delta g = 0{,}5 \\, \\text{m/s}^2$, så er intervallet $[9{,}7; \\, 10{,}7]$ som inkluderer tabellverdien, og resultatet er forenlig. Men med usikkerhet $\\Delta g = 0{,}1 \\, \\text{m/s}^2$ ville avviket vært signifikant, og vi bør lete etter systematiske feil. Det viktigste er at feilkildene er grundig diskutert.`,
    },
    {
      id: 'fys2-8-4-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Du har gjennomført et eksperiment og fått resultater som IKKE stemmer med hypotesen din. Diskuter:

a) Er dette et «mislykket» eksperiment?
b) Hva bør du skrive i diskusjonen?
c) Hva bør du IKKE gjøre med dataene?`,
      solution: `**a) Er det mislykket?**

Nei! Et eksperiment der resultatene ikke stemmer med hypotesen er **ikke mislykket** — det er informativt. Vitenskap handler om å teste hypoteser, og å falsifisere en hypotese er et like gyldig resultat som å bekrefte den. Mange viktige oppdagelser har kommet fra «uventede» resultater.

**b) Hva skrive i diskusjonen:**

- Presenter resultatene ærlig og objektivt.
- Vurder mulige forklaringer: Er det systematiske feil? Er modellen feil? Er det fysiske mekanismer du ikke har tatt hensyn til?
- Diskuter om avviket er statistisk signifikant (sammenlign med usikkerheten).
- Foreslå videre undersøkelser for å avklare årsaken.
- Konkluder at hypotesen ikke ble støttet, og reflekter over hva dette betyr.

**c) Hva du IKKE bør gjøre:**

- **Aldri fabrikere eller endre data** for å matche hypotesen.
- **Aldri fjerne uønskede datapunkter** uten god, dokumentert begrunnelse.
- **Aldri endre hypotesen** i etterkant for å matche resultatene (det kalles «HARKing» — Hypothesizing After Results are Known).
- **Aldri ignorere avviket** — diskuter det grundig.`,
    },
    {
      id: 'fys2-8-4-ex7',
      type: 'classic',
      difficulty: 'lett',
      task: `Gi tre tips for en god muntlig presentasjon av et fysikkprosjekt.`,
      solution: `1. **Øv på framføringen** — gjerne foran noen andre. Kjenn innholdet godt nok til å snakke fritt uten å lese fra lysbildene. Time presentasjonen for å holde tidsbegrensningen.

2. **Bruk tydelige figurer og grafer** — et bilde sier mer enn tusen ord. Forklar hva aksene viser, pek på viktige trekk, og kommenter resultatene muntlig.

3. **Strukturer presentasjonen logisk** — følg IMRaD-strukturen. Start med problemstillingen (hva ville du undersøke?), vis kort metoden, presenter nøkkelresultatene, og avslutt med konklusjonen og hva du lærte.`,
    },
    {
      id: 'fys2-8-4-ex8',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Drøft etiske problemstillinger knyttet til fysikkforskning. Bruk minst to konkrete eksempler og diskuter hvordan forskere bør håndtere slike dilemmaer.`,
      solution: `**Eksempel 1: Kjernefysikk og atomvåpen**

Oppdagelsen av fisjon i 1938 førte til utviklingen av atomvåpen gjennom Manhattan-prosjektet (1942–1945). Mange av fysikerne som bidro — inkludert Niels Bohr, Enrico Fermi og Robert Oppenheimer — slet med de etiske implikasjonene. Etter Hiroshima og Nagasaki argumenterte mange for internasjonal kontroll av kjernefysisk teknologi.

*Håndtering:* Forskere bør reflektere over mulig misbruk av forskningen sin. Internasjonale avtaler (Ikkespredningsavtalen) og etiske retningslinjer bidrar, men det er også et personlig ansvar å vurdere konsekvensene.

**Eksempel 2: Kunstig intelligens og overvåking**

Fysikk og matematikk er grunnlaget for ansiktsgjenkjenning, droner og andre overvåkingsteknologier. Disse kan brukes til sikkerhet, men også til masseovervåking og undertrykkelse.

*Håndtering:* Forskere bør delta i den offentlige debatten om bruk av teknologien. Etiske komiteer bør vurdere forskningsprosjekter, og det bør finnes klare retningslinjer for bruk og misbruk.

**Generelle prinsipper:**
- Forskning skal ikke skade mennesker eller miljø uten veldig god grunn
- Åpenhet og transparens motvirker misbruk
- Forskere har et ansvar som strekker seg utover laboratoriet
- Etiske dilemmaer har sjelden enkle svar — de krever kontinuerlig diskusjon`,
    },
    {
      id: 'fys2-8-4-ex9',
      type: 'classic',
      difficulty: 'medium',
      task: `Skriv referansene nedenfor i korrekt APA-format:

a) En bok av Hugh D. Young og Roger A. Freedman, tittel «University Physics with Modern Physics», 15. utgave, utgitt av Pearson i 2020.
b) En nettside fra CERN med tittel «The Higgs boson», hentet fra https://home.cern/science/physics/higgs-boson, lest i 2024.
c) En artikkel i tidsskriftet «Nature» av Albert Einstein, tittel «On the Electrodynamics of Moving Bodies», publisert i 1905, volum 17, sider 891–921.`,
      solution: `**a)** Young, H. D. & Freedman, R. A. (2020). *University Physics with Modern Physics* (15. utg.). Pearson.

**b)** CERN. (2024). *The Higgs boson*. Hentet fra https://home.cern/science/physics/higgs-boson

**c)** Einstein, A. (1905). On the electrodynamics of moving bodies. *Nature*, *17*, 891–921.

**Merknader:**
- Boktitler og tidsskriftnavn settes i *kursiv*.
- Etternavn, deretter initialer.
- Årstall i parentes.
- Utgavenummer angis i parentes etter tittelen for bøker.
- For tidsskriftartikler: volum i kursiv, sidetall etter komma.

(Merk: Det opprinnelige Einstein-papiret ble publisert i Annalen der Physik, ikke Nature — dette er et øvingseksempel.)`,
    },
    {
      id: 'fys2-8-4-ex10',
      type: 'classic',
      difficulty: 'vanskelig',
      task: `Velg ett av prosjekttemaene fra listen i dette kapittelet og skriv en fullstendig prosjektskisse som inkluderer:

a) Problemstilling og hypotese
b) Utstyr og variabler
c) Kort metodebeskrivelse
d) Plan for dataanalyse (inkludert eventuell linearisering)
e) Mulige feilkilder`,
      solution: `**Prosjektforslag: Bestemme lysets hastighet med mikrobølgeovn**

**a) Problemstilling og hypotese:**
Problemstilling: «Kan vi bestemme lysets hastighet ved å observere stående bølger i en mikrobølgeovn?»
Hypotese: «Vi forventer å få en verdi nær $c = 3{,}00 \\times 10^8 \\, \\text{m/s}$.»

**b) Utstyr og variabler:**
- Mikrobølgeovn (frekvens $f$ oppgitt på typeskiltet, typisk $2{,}450 \\, \\text{GHz}$)
- Sjokoladeplate (fjernet dreieskive slik at stående bølger gir smeltede flekker)
- Linjal ($\\pm 0{,}5 \\, \\text{mm}$)
- Uavhengig: Frekvensen $f$ (kjent fra typeskiltet)
- Avhengig: Avstanden $d$ mellom smeltede flekker (halv bølgelengde)
- Kontroll: Mikrobølgeovnens innstillinger

**c) Metode:**
Fjern dreieskiven. Legg sjokoladeplaten inn i ovnen. Kjør ovnen i 20–30 sekunder (til synlige smeltede flekker). Mål avstanden $d$ mellom sentrum av naboflekkene med linjal. Gjenta 5 ganger med nye sjokoladeplater. Bølgelengden: $\\lambda = 2d$. Lyshastigheten: $c = f \\cdot \\lambda$.

**d) Dataanalyse:**
Beregn $\\lambda = 2d$ for hver måling. Beregn gjennomsnitt og standardavvik. Beregn $c = f \\cdot \\lambda$ med usikkerhetspropagering: $\\Delta c / c = \\sqrt{(\\Delta f/f)^2 + (\\Delta \\lambda/\\lambda)^2}$.

**e) Mulige feilkilder:**
- Systematisk: Sjokoladen smelter noe ujevnt, vanskelig å bestemme nøyaktig sentrum
- Tilfeldig: Variasjon i avstandsmåling mellom forsøk
- Ukjent nøyaktighet i oppgitt frekvens (typisk $\\pm 50 \\, \\text{MHz}$)
- Ovnen kan ha refleksjonsmønstre som avviker fra ideelle stående bølger`,
    },
  ],
};


// ============================================================================
// Eksport av alle kapitler i Del 5
// ============================================================================

export const FYSIKK2_CHAPTERS_DEL5: Record<string, TextbookChapter> = {
  'fysikk2-8-1': CHAPTER_FYSIKK2_8_1,
  'fysikk2-8-2': CHAPTER_FYSIKK2_8_2,
  'fysikk2-8-3': CHAPTER_FYSIKK2_8_3,
  'fysikk2-8-4': CHAPTER_FYSIKK2_8_4,
};