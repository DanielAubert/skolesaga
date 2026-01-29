/**
 * Tekstbok kapitler for 1T - Seksjon 8: Modellering og regresjon
 *
 * Innhold:
 * 8.1 Modellering med funksjoner
 * 8.2 Potensfunksjoner
 * 8.3 Lineær regresjon
 * 8.4 Ikke-lineær regresjon
 * 8.5 Modellvurdering og praktisk bruk
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1 – Modellering med funksjoner
// ============================================================================

export const CHAPTER_1T_8_1_MODELLERING: TextbookChapter = {
  id: '1t-8-1',
  courseId: '1t',
  chapterNumber: '8.1',
  title: 'Modellering med funksjoner',
  description: 'Bruke matematiske funksjoner til å beskrive og forutsi virkelige fenomener.',
  estimatedMinutes: 45,
  competenceGoals: [
    'modellere situasjonar, drøfte, presentere og forklare resultata og argumentere for om modellane er gyldige',
    'identifisere variable storleikar, sette opp formlar og utforske desse ved hjelp av digitale verktoey',
  ],
  content: [
    {
      id: '1t-8-1-intro',
      type: 'text',
      content: `## Hva er matematisk modellering?

I mange fag og yrker ønsker vi å beskrive virkeligheten med matematikk. En **matematisk modell** er en forenklet representasjon av en virkelig situasjon, uttrykt gjennom matematiske uttrykk, formler eller funksjoner.

For eksempel kan vi modellere:
- Hvordan temperaturen i en kopp kaffe synker over tid (eksponentiell modell)
- Hvordan en balls bane gjennom luften ser ut (kvadratisk modell)
- Hvordan prisen på en vare avhenger av tilbud og etterspørsel (lineær modell)

En modell er alltid en **forenkling**. Vi velger ut de viktigste faktorene og ser bort fra mindre viktige detaljer. En modell for en balls bane ignorerer for eksempel ofte luftmotstand.`,
    },
    {
      id: '1t-8-1-def-1',
      type: 'definition',
      title: 'Matematisk modell',
      content: `En **matematisk modell** er en matematisk beskrivelse av en virkelig situasjon. Modellen bruker variabler, funksjoner og likninger til å beskrive sammenhenger mellom størrelser i virkeligheten.

En modell er alltid en forenkling, og vi må alltid vurdere om modellen gir fornuftige resultater innenfor det området vi bruker den.`,
    },
    {
      id: '1t-8-1-prosess',
      type: 'text',
      content: `## Modelleringsprosessen

Matematisk modellering følger typisk disse stegene:

1. **Observere** – Studer situasjonen og samle inn data
2. **Identifisere variabler** – Hva er de viktige størrelsene? Hva er uavhengig og avhengig variabel?
3. **Sette opp en modell** – Velg en funksjonstype og bestem parametrene
4. **Teste modellen** – Sammenlign modellens verdier med observerte data
5. **Vurdere** – Er modellen god nok? Kan den forbedres? Hvor gjelder den?

Denne prosessen er ofte **iterativ** – vi går tilbake og justerer modellen dersom den ikke passer godt nok.`,
    },
    {
      id: '1t-8-1-note-1',
      type: 'note',
      content: `Å velge riktig funksjonstype er nøkkelen til god modellering. Tenk over:
- **Lineær funksjon** $f(x) = ax + b$: Jevn økning eller reduksjon
- **Kvadratisk funksjon** $f(x) = ax^2 + bx + c$: Vekst som øker eller avtar, har toppunkt/bunnpunkt
- **Eksponentiell funksjon** $f(x) = a \\cdot b^x$: Prosentvis vekst eller nedgang
- **Potensfunksjon** $f(x) = a \\cdot x^b$: Sammenhenger der den ene størrelsen er en potens av den andre`,
    },
    {
      id: '1t-8-1-example-1',
      type: 'example',
      title: 'Eksempel 1 – Lineær modell',
      problem: `En taxitur koster 50 kr i startpris pluss 12 kr per kilometer. Sett opp en modell for prisen $P$ som funksjon av antall kjørte kilometer $x$. Hva koster en tur på 15 km?`,
      solution: `Vi identifiserer variablene:
- $x$: antall kjørte kilometer (uavhengig variabel)
- $P(x)$: prisen i kroner (avhengig variabel)

Prisen øker jevnt med 12 kr per km, så dette er en lineær sammenheng:

$$P(x) = 12x + 50$$

For en tur på 15 km:

$$P(15) = 12 \\cdot 15 + 50 = 180 + 50 = 230$$

En tur på 15 km koster 230 kr.

**Gyldighetsområde:** Modellen gjelder for $x \\geq 0$. I praksis er det gjerne en maksimal kjørelengde og modellen tar ikke hensyn til eventuelle tillegg for ventetid.`,
    },
    {
      id: '1t-8-1-example-2',
      type: 'example',
      title: 'Eksempel 2 – Kvadratisk modell',
      problem: `En bonde har 80 meter gjerde og vil lage et rektangulært innhegnet område langs en elv (elven utgjør den ene langsiden, så gjerdet brukes bare på tre sider). Sett opp en modell for arealet $A$ som funksjon av bredden $x$, og finn bredden som gir størst areal.`,
      solution: `La $x$ være bredden (de to kortsidene) og $l$ være lengden (den ene langsiden med gjerde).

Gjerdeforbruket gir oss sammenhengen:

$$2x + l = 80 \\implies l = 80 - 2x$$

Arealet blir:

$$A(x) = x \\cdot l = x(80 - 2x) = 80x - 2x^2$$

Dette er en andregradsfunksjon med $a = -2 < 0$, så den har et toppunkt. Vi finner toppunktet:

$$x = -\\frac{b}{2a} = -\\frac{80}{2 \\cdot (-2)} = \\frac{80}{4} = 20$$

Med $x = 20$ får vi $l = 80 - 2 \\cdot 20 = 40$ og:

$$A(20) = 20 \\cdot 40 = 800 \\text{ m}^2$$

**Gyldighetsområde:** $0 < x < 40$ (bredden må være positiv, og lengden $80 - 2x$ må også være positiv).`,
    },
    {
      id: '1t-8-1-def-2',
      type: 'definition',
      title: 'Interpolering og ekstrapolering',
      content: `**Interpolering** betyr å bruke modellen til å anslå verdier *mellom* kjente datapunkter. Interpolering er som regel pålitelig.

**Ekstrapolering** betyr å bruke modellen til å anslå verdier *utenfor* området der vi har data. Ekstrapolering er mer usikkert fordi vi ikke vet om modellen gjelder der.`,
    },
    {
      id: '1t-8-1-example-3',
      type: 'example',
      title: 'Eksempel 3 – Eksponentiell modell og ekstrapolering',
      problem: `En by hadde 25 000 innbyggere i 2010 og har hatt en årlig befolkningsvekst på 2,5 %. Sett opp en modell for befolkningen $B(t)$ der $t$ er antall år etter 2010. Bruk modellen til å anslå befolkningen i 2020 og i 2050. Kommenter påliteligheten av anslagene.`,
      solution: `Prosentvis vekst gir en eksponentiell modell. Vekstfaktoren er $1 + 0{,}025 = 1{,}025$.

$$B(t) = 25\\,000 \\cdot 1{,}025^t$$

**År 2020** ($t = 10$):

$$B(10) = 25\\,000 \\cdot 1{,}025^{10} \\approx 25\\,000 \\cdot 1{,}2801 \\approx 32\\,003$$

**År 2050** ($t = 40$):

$$B(40) = 25\\,000 \\cdot 1{,}025^{40} \\approx 25\\,000 \\cdot 2{,}6851 \\approx 67\\,126$$

**Vurdering:** Anslaget for 2020 er interpolering (eller nær-ekstrapolering) og ganske pålitelig dersom vekstraten har holdt seg stabil. Anslaget for 2050 er langt frem i tid (ekstrapolering), og det er svært usikkert. Vekstraten kan endre seg grunnet politikk, migrasjon eller andre faktorer.`,
    },
    {
      id: '1t-8-1-tip-1',
      type: 'tip',
      content: `Når du modellerer, still deg alltid disse spørsmålene:
- Gir modellen fornuftige verdier for ekstreme input (svært store eller små $x$)?
- Er det noen naturlige begrensninger? (Antall personer kan ikke være negativt, temperatur har en nedre grense, osv.)
- Hva skjer dersom vi bruker modellen langt utenfor datapunktene?`,
    },
    {
      id: '1t-8-1-geogebra-1',
      type: 'geogebra',
      title: 'Utforsk modellering',
      description: 'Prøv å endre parametrene i modellene og se hvordan grafene endres. Sammenlign lineær, kvadratisk og eksponentiell vekst.',
      appType: 'graphing',
      commands: [
        'f(x) = 12x + 50',
        'g(x) = 80x - 2x^2',
        'h(x) = 25000 * 1.025^x',
      ],
    },
    // Øvelser 8.1
    {
      id: '1t-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: '1t-8-1-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Et mobilabonnement koster 99 kr i måneden pluss 0,50 kr per sendt SMS. Sett opp en modell $K(x)$ for den månedlige kostnaden som funksjon av antall sendte SMS $x$. Hva blir kostnaden dersom du sender 120 SMS på en måned?',
        solution: `$K(x) = 0{,}50x + 99$

For $x = 120$:

$K(120) = 0{,}50 \\cdot 120 + 99 = 60 + 99 = 159$ kr.`,
        hints: ['Hva er den faste kostnaden? Hva er den variable kostnaden per SMS?'],
      },
    },
    {
      id: '1t-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: '1t-8-1-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'En stein kastes opp fra bakken med en startfart på $20$ m/s. Høyden (i meter) etter $t$ sekunder kan modelleres med $h(t) = 20t - 4{,}9t^2$.',
        subTasks: [
          { label: 'a', task: 'Hvor høyt er steinen etter 1 sekund?', solution: '$h(1) = 20 \\cdot 1 - 4{,}9 \\cdot 1^2 = 20 - 4{,}9 = 15{,}1$ m' },
          { label: 'b', task: 'Når er steinen på sitt høyeste punkt, og hvor høyt er det?', solution: 'Toppunktet er ved $t = -\\frac{20}{2 \\cdot (-4{,}9)} = \\frac{20}{9{,}8} \\approx 2{,}04$ s. Høyden: $h(2{,}04) \\approx 20 \\cdot 2{,}04 - 4{,}9 \\cdot 2{,}04^2 \\approx 40{,}8 - 20{,}4 \\approx 20{,}4$ m.' },
          { label: 'c', task: 'Når treffer steinen bakken igjen?', solution: '$h(t) = 0 \\implies 20t - 4{,}9t^2 = 0 \\implies t(20 - 4{,}9t) = 0$. Løsninger: $t = 0$ (start) og $t = \\frac{20}{4{,}9} \\approx 4{,}08$ s.' },
          { label: 'd', task: 'Hva er gyldighetsområdet for modellen?', solution: 'Modellen gjelder for $0 \\leq t \\leq \\frac{20}{4{,}9} \\approx 4{,}08$ s, altså fra steinen kastes til den treffer bakken. Utenfor dette intervallet gir modellen negative høyder, som ikke er fysisk meningsfullt.' },
        ],
        solution: 'Se deloppgavene.',
        hints: ['Bruk formelen for toppunkt: $t = -\\frac{b}{2a}$'],
      },
    },
    {
      id: '1t-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: '1t-8-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En kaffekopp har en temperatur på $90$ °C når den settes på bordet. Romtemperaturen er $20$ °C. Etter 5 minutter er temperaturen sunket til $70$ °C. Temperaturen kan modelleres med $T(t) = 20 + 70 \\cdot b^t$, der $t$ er tid i minutter.',
        subTasks: [
          { label: 'a', task: 'Vis at $T(0) = 90$ °C.', solution: '$T(0) = 20 + 70 \\cdot b^0 = 20 + 70 = 90$ °C. ✓' },
          { label: 'b', task: 'Bruk opplysningen om at $T(5) = 70$ °C til å bestemme $b$.', solution: '$70 = 20 + 70 \\cdot b^5 \\implies 50 = 70 \\cdot b^5 \\implies b^5 = \\frac{50}{70} = \\frac{5}{7} \\implies b = \\left(\\frac{5}{7}\\right)^{1/5} \\approx 0{,}935$' },
          { label: 'c', task: 'Hva er temperaturen etter 15 minutter?', solution: '$T(15) = 20 + 70 \\cdot 0{,}935^{15} \\approx 20 + 70 \\cdot 0{,}364 \\approx 20 + 25{,}5 \\approx 45{,}5$ °C' },
          { label: 'd', task: 'Hva skjer med temperaturen når $t \\to \\infty$? Er dette realistisk?', solution: 'Når $t \\to \\infty$, går $b^t \\to 0$ (fordi $0 < b < 1$), og $T(t) \\to 20$ °C. Ja, det er realistisk – kaffen vil nærme seg romtemperaturen.' },
        ],
        solution: 'Se deloppgavene.',
        hints: ['Sett inn verdiene du kjenner og løs for $b$'],
      },
    },
    {
      id: '1t-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: '1t-8-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En nettbutikk selger et produkt for $p$ kroner per stykk. Erfaringsmessig selger de $1200 - 4p$ produkter per måned (for $0 \\leq p \\leq 300$). Produksjonskostnaden per enhet er 80 kr, og faste kostnader er 15 000 kr per måned.',
        subTasks: [
          { label: 'a', task: 'Sett opp en modell for inntekten $I(p)$ og kostnadene $K(p)$.', solution: 'Antall solgte: $n(p) = 1200 - 4p$. Inntekt: $I(p) = p \\cdot (1200 - 4p) = 1200p - 4p^2$. Kostnader: $K(p) = 80 \\cdot (1200 - 4p) + 15\\,000 = 96\\,000 - 320p + 15\\,000 = 111\\,000 - 320p$.' },
          { label: 'b', task: 'Sett opp en modell for overskuddet $O(p)$ og finn prisen som gir størst overskudd.', solution: '$O(p) = I(p) - K(p) = 1200p - 4p^2 - 111\\,000 + 320p = -4p^2 + 1520p - 111\\,000$. Toppunkt: $p = -\\frac{1520}{2 \\cdot (-4)} = \\frac{1520}{8} = 190$ kr.' },
          { label: 'c', task: 'Hva er det maksimale overskuddet?', solution: '$O(190) = -4 \\cdot 190^2 + 1520 \\cdot 190 - 111\\,000 = -144\\,400 + 288\\,800 - 111\\,000 = 33\\,400$ kr per måned.' },
        ],
        solution: 'Se deloppgavene.',
        hints: ['Inntekt = pris × antall solgte', 'Overskudd = Inntekt − Kostnader'],
      },
    },
    {
      id: '1t-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: '1t-8-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tabellen viser antall registrerte elbiler i Norge (i tusen) ved utvalgte år:\n\n| År   | 2015 | 2017 | 2019 | 2021 |\n|------|------|------|------|------|\n| Antall (tusen) | 70 | 140 | 260 | 450 |\n\nLa $t$ være antall år etter 2015.',
        subTasks: [
          { label: 'a', task: 'Prøv å tilpasse en lineær modell $f(t) = at + b$. Bruk punktene $(0, 70)$ og $(6, 450)$ til å bestemme $a$ og $b$.', solution: '$a = \\frac{450 - 70}{6 - 0} = \\frac{380}{6} \\approx 63{,}3$. $b = 70$. Modell: $f(t) = 63{,}3t + 70$.' },
          { label: 'b', task: 'Prøv å tilpasse en eksponentiell modell $g(t) = 70 \\cdot b^t$. Bruk punktet $(6, 450)$ til å bestemme $b$.', solution: '$450 = 70 \\cdot b^6 \\implies b^6 = \\frac{450}{70} \\approx 6{,}429 \\implies b = 6{,}429^{1/6} \\approx 1{,}364$. Modell: $g(t) = 70 \\cdot 1{,}364^t$.' },
          { label: 'c', task: 'Hvilken modell passer best med de andre datapunktene? Sjekk for $t = 2$ (2017) og $t = 4$ (2019).', solution: 'For $t = 2$: $f(2) = 63{,}3 \\cdot 2 + 70 = 196{,}6$ (virkelig: 140). $g(2) = 70 \\cdot 1{,}364^2 \\approx 70 \\cdot 1{,}861 \\approx 130$. For $t = 4$: $f(4) = 63{,}3 \\cdot 4 + 70 = 323{,}2$ (virkelig: 260). $g(4) = 70 \\cdot 1{,}364^4 \\approx 70 \\cdot 3{,}462 \\approx 242$. Den eksponentielle modellen gir verdier som ligger nærmere de virkelige tallene.' },
          { label: 'd', task: 'Diskuter begrensningene til begge modellene. Kan noen av dem brukes til å forutsi antallet i 2030?', solution: 'Begge modellene er forenklinger. Den lineære modellen overestimerer i midten av perioden. Den eksponentielle modellen kan gi urealistisk høye tall for lang ekstrapolering (f.eks. $g(15) \\approx 70 \\cdot 1{,}364^{15} \\approx 5\\,600$ tusen, altså 5,6 millioner – mer enn Norges befolkning). Verken lineær eller eksponentiell modell kan brukes ukritisk til 2030; markedet vil sannsynligvis mettes.' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.2 – Potensfunksjoner
// ============================================================================

export const CHAPTER_1T_8_2_POTENSFUNKSJONER: TextbookChapter = {
  id: '1t-8-2',
  courseId: '1t',
  chapterNumber: '8.2',
  title: 'Potensfunksjoner',
  description: 'Utforske potensfunksjoner og deres egenskaper, og bruke dem til modellering.',
  estimatedMinutes: 40,
  competenceGoals: [
    'utforske og beskrive eigenskapane ved potensfunksjonar og bruke dei til modellering',
    'modellere situasjonar, drøfte, presentere og forklare resultata og argumentere for om modellane er gyldige',
  ],
  content: [
    {
      id: '1t-8-2-intro',
      type: 'text',
      content: `## Potensfunksjoner

Vi har tidligere arbeidet med funksjoner som $f(x) = x^2$ og $f(x) = x^3$. Disse er spesialtilfeller av en større klasse funksjoner kalt **potensfunksjoner**.

En potensfunksjon har den generelle formen $f(x) = a \\cdot x^b$, der $a$ og $b$ er konstanter. Det som kjennetegner en potensfunksjon er at den uavhengige variabelen $x$ står i grunntallet, mens eksponenten $b$ er en konstant.

Merk forskjellen fra eksponentialfunksjoner $g(x) = a \\cdot b^x$, der $x$ står i eksponenten.`,
    },
    {
      id: '1t-8-2-def-1',
      type: 'definition',
      title: 'Potensfunksjon',
      content: `En **potensfunksjon** er en funksjon på formen

$$f(x) = a \\cdot x^b$$

der $a \\neq 0$ og $b$ er en konstant.

- $a$ kalles **koeffisienten**
- $b$ kalles **eksponenten** (potensen)`,
    },
    {
      id: '1t-8-2-egenskaper',
      type: 'text',
      content: `## Egenskaper basert på eksponenten $b$

Formen på grafen til $f(x) = a \\cdot x^b$ avhenger av verdien til $b$ (vi antar $a > 0$ og $x > 0$):

**Når $b > 1$:** Funksjonen er **voksende og konveks** (buet oppover). Jo større $b$, desto brattere vokser funksjonen for store $x$-verdier. Eksempler: $x^2$, $x^3$.

**Når $0 < b < 1$:** Funksjonen er **voksende og konkav** (buet nedover). Funksjonen vokser stadig saktere. Eksempler: $\\sqrt{x} = x^{1/2}$, $x^{1/3}$.

**Når $b < 0$:** Funksjonen er **avtagende**. Når $x$ øker, nærmer $f(x)$ seg null. Eksempler: $\\frac{1}{x} = x^{-1}$, $\\frac{1}{x^2} = x^{-2}$.

**Når $b = 1$:** Vi får den lineære funksjonen $f(x) = ax$.

**Når $b = 0$:** Vi får den konstante funksjonen $f(x) = a$.`,
    },
    {
      id: '1t-8-2-note-1',
      type: 'note',
      content: `Alle potensfunksjoner med $a > 0$ og heltallseksponent går gjennom punktet $(1, a)$, fordi $f(1) = a \\cdot 1^b = a$ uansett hva $b$ er. Punktet $(0, 0)$ er med i grafen dersom $b > 0$.`,
    },
    {
      id: '1t-8-2-geogebra-1',
      type: 'geogebra',
      title: 'Utforsk potensfunksjoner',
      description: 'Bruk glidebryterne for å endre $a$ og $b$, og observer hvordan grafen endrer form. Sammenlign med eksponentialfunksjonen $g(x) = 2^x$.',
      appType: 'graphing',
      commands: [
        'a = Slider(-5, 5, 0.1)',
        'b = Slider(-3, 3, 0.1)',
        'f(x) = a * x^b',
        'g(x) = 2^x',
      ],
    },
    {
      id: '1t-8-2-example-1',
      type: 'example',
      title: 'Eksempel 1 – Kjenne igjen potensfunksjoner',
      problem: `Avgjør hvilke av følgende som er potensfunksjoner:

a) $f(x) = 3x^4$
b) $g(x) = 2^x$
c) $h(x) = \\frac{5}{x^2}$
d) $k(x) = 7\\sqrt[3]{x}$
e) $m(x) = x^2 + 3$`,
      solution: `a) $f(x) = 3x^4$ – **Ja**, potensfunksjon med $a = 3$ og $b = 4$.

b) $g(x) = 2^x$ – **Nei**, dette er en eksponentialfunksjon ($x$ er i eksponenten).

c) $h(x) = \\frac{5}{x^2} = 5x^{-2}$ – **Ja**, potensfunksjon med $a = 5$ og $b = -2$.

d) $k(x) = 7\\sqrt[3]{x} = 7x^{1/3}$ – **Ja**, potensfunksjon med $a = 7$ og $b = \\frac{1}{3}$.

e) $m(x) = x^2 + 3$ – **Nei**, dette er et andregradspolynom, ikke en ren potensfunksjon (på grunn av leddet $+3$).`,
    },
    {
      id: '1t-8-2-example-2',
      type: 'example',
      title: 'Eksempel 2 – Fritt fall',
      problem: `Når en gjenstand faller fritt (uten luftmotstand), er fallstrekningen gitt ved $s(t) = \\frac{1}{2} g t^2$, der $g \\approx 9{,}81$ m/s² er tyngdeakselerasjonen og $t$ er tiden i sekunder. Beregn fallstrekningen etter 1, 2, 3 og 4 sekunder.`,
      solution: `Vi bruker $s(t) = \\frac{1}{2} \\cdot 9{,}81 \\cdot t^2 = 4{,}905 \\cdot t^2$.

$$s(1) = 4{,}905 \\cdot 1^2 = 4{,}9 \\text{ m}$$

$$s(2) = 4{,}905 \\cdot 2^2 = 4{,}905 \\cdot 4 = 19{,}6 \\text{ m}$$

$$s(3) = 4{,}905 \\cdot 3^2 = 4{,}905 \\cdot 9 = 44{,}1 \\text{ m}$$

$$s(4) = 4{,}905 \\cdot 4^2 = 4{,}905 \\cdot 16 = 78{,}5 \\text{ m}$$

Vi ser at strekningen øker stadig raskere – typisk for en potensfunksjon med $b = 2 > 1$.`,
    },
    {
      id: '1t-8-2-example-3',
      type: 'example',
      title: 'Eksempel 3 – Keplers tredje lov',
      problem: `Keplers tredje lov sier at omløpstiden $T$ (i år) for en planet rundt sola er relatert til gjennomsnittsavstanden $r$ (i AU) ved $T = r^{3/2}$. Beregn omløpstiden for Mars, som har en gjennomsnittsavstand på $1{,}52$ AU.`,
      solution: `Vi setter inn $r = 1{,}52$ i Keplers lov:

$$T = r^{3/2} = 1{,}52^{3/2}$$

Vi beregner dette trinn for trinn:

$$1{,}52^{3/2} = (1{,}52^3)^{1/2} = \\sqrt{1{,}52^3}$$

$$1{,}52^3 = 1{,}52 \\cdot 1{,}52 \\cdot 1{,}52 = 3{,}512$$

$$T = \\sqrt{3{,}512} \\approx 1{,}87 \\text{ år}$$

Mars bruker altså cirka 1,87 år (ca. 687 dager) på å gå rundt sola. Den faktiske verdien er 1,88 år, så modellen stemmer svært godt.

Dette er en potensfunksjon med $a = 1$ og $b = \\frac{3}{2}$.`,
    },
    {
      id: '1t-8-2-tip-1',
      type: 'tip',
      content: `**Potensfunksjon vs. eksponentialfunksjon – hvordan skille dem?**

- I en **potensfunksjon** $f(x) = a \\cdot x^b$ vokser funksjonen «polynomaktig». For store $x$ vil en eksponentialfunksjon alltid vokse raskere.
- I en **eksponentialfunksjon** $g(x) = a \\cdot b^x$ (med $b > 1$) vokser funksjonen prosentvis – dobler seg med jevne mellomrom.

Tommelfingerregel: Dersom noe vokser med en fast prosent, bruk eksponentialfunksjon. Dersom noe vokser proporsjonalt med en potens av størrelsen, bruk potensfunksjon.`,
    },
    // Øvelser 8.2
    {
      id: '1t-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: '1t-8-2-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Skriv følgende uttrykk som potensfunksjoner på formen $f(x) = a \\cdot x^b$ og oppgi verdiene av $a$ og $b$.',
        subTasks: [
          { label: 'a', task: '$f(x) = \\frac{6}{x^3}$', solution: '$f(x) = 6x^{-3}$, altså $a = 6$ og $b = -3$.' },
          { label: 'b', task: '$f(x) = 4\\sqrt{x}$', solution: '$f(x) = 4x^{1/2}$, altså $a = 4$ og $b = \\frac{1}{2}$.' },
          { label: 'c', task: '$f(x) = \\frac{2}{\\sqrt[4]{x}}$', solution: '$f(x) = 2x^{-1/4}$, altså $a = 2$ og $b = -\\frac{1}{4}$.' },
          { label: 'd', task: '$f(x) = \\frac{3x^5}{x^2}$', solution: '$f(x) = 3x^3$, altså $a = 3$ og $b = 3$.' },
        ],
        solution: 'Se deloppgavene.',
        hints: ['Bruk potensreglene: $\\frac{1}{x^n} = x^{-n}$ og $\\sqrt[n]{x} = x^{1/n}$'],
      },
    },
    {
      id: '1t-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: '1t-8-2-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Arealet av en sirkel er gitt ved $A(r) = \\pi r^2$.',
        subTasks: [
          { label: 'a', task: 'Vis at dette er en potensfunksjon og oppgi $a$ og $b$.', solution: '$A(r) = \\pi \\cdot r^2$ er en potensfunksjon med $a = \\pi \\approx 3{,}14$ og $b = 2$.' },
          { label: 'b', task: 'Hva skjer med arealet dersom vi dobler radius?', solution: '$A(2r) = \\pi(2r)^2 = \\pi \\cdot 4r^2 = 4 \\cdot \\pi r^2 = 4A(r)$. Arealet firedobles.' },
          { label: 'c', task: 'Hva skjer med arealet dersom vi tredobler radius?', solution: '$A(3r) = \\pi(3r)^2 = 9\\pi r^2 = 9A(r)$. Arealet nidobles.' },
          { label: 'd', task: 'Formuler en generell regel: Dersom radius ganges med $k$, hva skjer med arealet?', solution: '$A(kr) = \\pi(kr)^2 = k^2 \\pi r^2 = k^2 \\cdot A(r)$. Arealet ganges med $k^2$. Dette gjelder generelt for potensfunksjoner med eksponent $b$: verdien ganges med $k^b$.' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: '1t-8-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tabellen viser sammenhengen mellom sidelengden $s$ (i cm) og volumet $V$ (i cm³) for en kube:\n\n| $s$ | 1 | 2 | 3 | 4 | 5 |\n|-----|---|---|---|---|---|\n| $V$ | 1 | 8 | 27 | 64 | 125 |',
        subTasks: [
          { label: 'a', task: 'Vis at sammenhengen er en potensfunksjon $V(s) = s^b$ og bestem $b$.', solution: 'Vi sjekker: $1^3 = 1$, $2^3 = 8$, $3^3 = 27$, $4^3 = 64$, $5^3 = 125$. Altså er $V(s) = s^3$, en potensfunksjon med $a = 1$ og $b = 3$.' },
          { label: 'b', task: 'Bruk modellen til å beregne volumet for $s = 7{,}5$ cm.', solution: '$V(7{,}5) = 7{,}5^3 = 421{,}875$ cm³.' },
          { label: 'c', task: 'Hvilken sidelengde gir et volum på 1000 cm³?', solution: '$s^3 = 1000 \\implies s = \\sqrt[3]{1000} = 10$ cm.' },
        ],
        solution: 'Se deloppgavene.',
        hints: ['Hva er formelen for volumet av en kube?'],
      },
    },
    {
      id: '1t-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: '1t-8-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Pendellengden $L$ (i meter) og svingetiden $T$ (i sekunder) for en pendel er relatert ved formelen $T = 2\\pi\\sqrt{\\frac{L}{g}}$, der $g = 9{,}81$ m/s².',
        subTasks: [
          { label: 'a', task: 'Vis at $T$ kan skrives som en potensfunksjon av $L$, og bestem $a$ og $b$.', solution: '$T = 2\\pi\\sqrt{\\frac{L}{g}} = 2\\pi \\cdot \\frac{1}{\\sqrt{g}} \\cdot L^{1/2} = \\frac{2\\pi}{\\sqrt{9{,}81}} \\cdot L^{1/2} \\approx 2{,}006 \\cdot L^{1/2}$. Dette er en potensfunksjon med $a \\approx 2{,}006$ og $b = \\frac{1}{2}$.' },
          { label: 'b', task: 'Beregn svingetiden for en pendel som er 1 meter lang.', solution: '$T = 2{,}006 \\cdot 1^{1/2} = 2{,}006$ s. En pendel på 1 meter har altså en svingetid på cirka 2 sekunder.' },
          { label: 'c', task: 'Hvor lang må pendelen være for å ha en svingetid på nøyaktig 1 sekund?', solution: '$1 = 2{,}006 \\cdot L^{1/2} \\implies L^{1/2} = \\frac{1}{2{,}006} \\approx 0{,}4985 \\implies L \\approx 0{,}4985^2 \\approx 0{,}2485$ m, altså omtrent 24,9 cm.' },
        ],
        solution: 'Se deloppgavene.',
        hints: ['Skriv $\\sqrt{\\frac{L}{g}}$ som $\\frac{1}{\\sqrt{g}} \\cdot L^{1/2}$'],
      },
    },
    {
      id: '1t-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: '1t-8-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Grafen til en potensfunksjon $f(x) = a \\cdot x^b$ går gjennom punktene $(2, 12)$ og $(5, 75)$. Bestem $a$ og $b$.',
        solution: `Vi setter opp to likninger:

$12 = a \\cdot 2^b \\quad$ (1)
$75 = a \\cdot 5^b \\quad$ (2)

Vi deler likning (2) på likning (1):

$$\\frac{75}{12} = \\frac{a \\cdot 5^b}{a \\cdot 2^b} = \\left(\\frac{5}{2}\\right)^b$$

$$6{,}25 = 2{,}5^b$$

Vi bruker logaritmer:

$$b = \\frac{\\ln 6{,}25}{\\ln 2{,}5} = \\frac{\\ln 6{,}25}{\\ln 2{,}5} = \\frac{1{,}8326}{0{,}9163} = 2$$

Fra likning (1): $12 = a \\cdot 2^2 = 4a \\implies a = 3$.

Funksjonen er $f(x) = 3x^2$.

**Kontroll:** $f(5) = 3 \\cdot 25 = 75$ ✓`,
        hints: ['Del den ene likningen på den andre for å eliminere $a$', 'Bruk logaritmer for å løse for $b$'],
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.3 – Lineær regresjon
// ============================================================================

export const CHAPTER_1T_8_3_LINEAER_REGRESJON: TextbookChapter = {
  id: '1t-8-3',
  courseId: '1t',
  chapterNumber: '8.3',
  title: 'Lineær regresjon',
  description: 'Bruke lineær regresjon til å tilpasse en rett linje til datapunkter og tolke resultatene.',
  estimatedMinutes: 40,
  competenceGoals: [
    'modellere situasjonar, drøfte, presentere og forklare resultata og argumentere for om modellane er gyldige',
    'bruke digitale verktoey i utforsking og problemløysing',
  ],
  content: [
    {
      id: '1t-8-3-intro',
      type: 'text',
      content: `## Fra datapunkter til modell

I mange situasjoner har vi et sett med målte datapunkter, og vi ønsker å finne en matematisk funksjon som beskriver sammenhengen mellom variablene. Denne prosessen kalles **regresjon**.

Det første steget er å lage et **spredningsdiagram** (også kalt punktdiagram). Vi plotter datapunktene i et koordinatsystem for å se om det er en synlig trend:
- Ser punktene ut til å ligge langs en rett linje? → Lineær regresjon
- Buet oppover eller nedover? → Polynomregresjon
- Eksponentiell vekst? → Eksponentialregresjon`,
    },
    {
      id: '1t-8-3-def-1',
      type: 'definition',
      title: 'Lineær regresjon',
      content: `**Lineær regresjon** er en metode for å finne den rette linjen $y = ax + b$ som passer best til et sett med datapunkter $(x_1, y_1), (x_2, y_2), \\ldots, (x_n, y_n)$.

Linjen kalles **regresjonslinjen**, og den bestemmes slik at summen av de kvadrerte vertikale avstandene fra datapunktene til linjen er minst mulig.`,
    },
    {
      id: '1t-8-3-mkm',
      type: 'text',
      content: `## Minste kvadraters metode

Den mest brukte metoden for å finne regresjonslinjen er **minste kvadraters metode** (MKM). Ideen er enkel:

For hvert datapunkt $(x_i, y_i)$ beregner vi avviket (residualet) fra linjen:

$$e_i = y_i - (ax_i + b)$$

Vi ønsker å **minimere summen av kvadrerte avvik**:

$$S = \\sum_{i=1}^{n} e_i^2 = \\sum_{i=1}^{n} (y_i - ax_i - b)^2$$

Vi kvadrerer avvikene slik at positive og negative avvik ikke opphever hverandre, og slik at store avvik straffes ekstra hardt.

Du trenger ikke å utføre disse beregningene for hånd – digitale verktøy som GeoGebra gjør det for deg. Det viktige er å forstå prinsippet bak.`,
    },
    {
      id: '1t-8-3-note-1',
      type: 'note',
      content: `**Residual** betyr avvik. Residualet for et datapunkt er den vertikale avstanden mellom datapunktet og regresjonslinjen. Dersom residualene er jevnt fordelt rundt null og ikke viser noe mønster, tyder det på at en lineær modell passer godt.`,
    },
    {
      id: '1t-8-3-geogebra-1',
      type: 'geogebra',
      title: 'Lineær regresjon i GeoGebra',
      description: 'Skriv inn datapunktene som en liste og bruk RegLin-kommandoen for å finne regresjonslinjen. Prøv å legge til, flytte eller fjerne punkter og se hvordan linjen endres.',
      appType: 'graphing',
      commands: [
        'liste = {(1, 2.1), (2, 3.8), (3, 6.2), (4, 7.9), (5, 10.1)}',
        'RegLin(liste)',
      ],
    },
    {
      id: '1t-8-3-example-1',
      type: 'example',
      title: 'Eksempel 1 – Temperatur og issalg',
      problem: `En iskremkiosk har registrert daglig temperatur og antall solgte is i en uke:

| Temperatur (°C) | 15 | 18 | 21 | 24 | 27 | 30 | 33 |
|---|---|---|---|---|---|---|---|
| Antall is | 48 | 56 | 70 | 82 | 95 | 112 | 120 |

Bruk GeoGebra til å finne regresjonslinjen. Tolk stigningstallet og konstantleddet.`,
      solution: `I GeoGebra skriver vi:

\`liste = {(15, 48), (18, 56), (21, 70), (24, 82), (27, 95), (30, 112), (33, 120)}\`
\`RegLin(liste)\`

GeoGebra gir oss (tilnærmet):

$$y = 4{,}1x - 15{,}4$$

**Tolkning:**
- **Stigningstallet** $a \\approx 4{,}1$: For hver grad temperaturen øker, selges det i gjennomsnitt 4,1 flere is.
- **Konstantleddet** $b \\approx -15{,}4$: Modellen gir $-15{,}4$ is ved 0 °C. Dette er ikke fysisk meningsfullt (man kan ikke selge negativt antall is), men det viser at modellen ikke bør brukes for lave temperaturer.

Modellen passer best i intervallet $15 \\leq x \\leq 33$ (der vi har data).`,
    },
    {
      id: '1t-8-3-korrelasjon',
      type: 'text',
      content: `## Korrelasjon

**Korrelasjon** måler styrken og retningen på den lineære sammenhengen mellom to variabler. Korrelasjonskoeffisienten $r$ er et tall mellom $-1$ og $1$:

- $r = 1$: Perfekt positiv korrelasjon (alle punkter på en linje med positiv stigning)
- $r = -1$: Perfekt negativ korrelasjon (alle punkter på en linje med negativ stigning)
- $r = 0$: Ingen lineær korrelasjon
- $|r| > 0{,}8$: Sterk korrelasjon
- $0{,}5 < |r| < 0{,}8$: Moderat korrelasjon
- $|r| < 0{,}5$: Svak korrelasjon

I GeoGebra kan du finne $r$ med kommandoen \`Kor(liste)\` eller \`CorrelationCoefficient(listX, listY)\`.`,
    },
    {
      id: '1t-8-3-def-2',
      type: 'definition',
      title: 'Korrelasjon og kausalitet',
      content: `**Korrelasjon** betyr at to variabler har en statistisk sammenheng – de endrer seg sammen.

**Kausalitet** betyr at endring i den ene variabelen *forårsaker* endring i den andre.

**Korrelasjon betyr IKKE kausalitet.** To variabler kan korrelere uten at den ene forårsaker den andre. Det kan finnes en tredje variabel (en **konfunderende variabel**) som påvirker begge.

Eksempel: Det er sterk korrelasjon mellom issalg og antall drukningsulykker. Det betyr ikke at is forårsaker drukningsulykker – begge påvirkes av en tredje variabel: varmt vær.`,
    },
    {
      id: '1t-8-3-example-2',
      type: 'example',
      title: 'Eksempel 2 – Korrelasjon og prediksjon',
      problem: `Tabellen viser sammenhengen mellom antall timer brukt på lekser per uke ($x$) og poengsum på en prøve ($y$) for 8 elever:

| Timer ($x$) | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 10 |
|---|---|---|---|---|---|---|---|---|
| Poeng ($y$) | 35 | 42 | 50 | 58 | 62 | 70 | 75 | 88 |

a) Finn regresjonslinjen.
b) Finn korrelasjonskoeffisienten og vurder styrken.
c) Bruk modellen til å anslå poengsummen for en elev som bruker 9 timer.`,
      solution: `a) I GeoGebra: \`RegLin({(2,35),(3,42),(4,50),(5,58),(6,62),(7,70),(8,75),(10,88)})\`

Resultat: $y \\approx 6{,}5x + 21{,}5$

b) Korrelasjonskoeffisienten: $r \\approx 0{,}997$

Siden $|r| > 0{,}8$ har vi en **sterk positiv korrelasjon**. Den lineære modellen passer svært godt til dataene.

c) For $x = 9$:
$$y = 6{,}5 \\cdot 9 + 21{,}5 = 58{,}5 + 21{,}5 = 80$$

Modellen anslår omtrent 80 poeng. Siden $x = 9$ ligger mellom datapunktene $x = 8$ og $x = 10$, er dette interpolering og anslaget er ganske pålitelig.

**Merk:** Selv om korrelasjonen er sterk, kan vi ikke konkludere med at det *bare* er leksetimer som bestemmer poengsummen. Andre faktorer som forkunnskaper, læringsstil og konsentrasjon spiller også inn.`,
    },
    {
      id: '1t-8-3-tip-1',
      type: 'tip',
      content: `**Steg for lineær regresjon i GeoGebra:**

1. Opprett en liste med datapunkter: \`liste = {(x₁, y₁), (x₂, y₂), ...}\`
2. Finn regresjonslinjen: \`RegLin(liste)\`
3. Finn korrelasjonskoeffisienten: Bruk \`Kor(xListe, yListe)\` (eller beregn fra GeoGebras regresjonsverktøy)
4. Vurder om modellen passer: Se på $r$-verdien og residualene`,
    },
    // Øvelser 8.3
    {
      id: '1t-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: '1t-8-3-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forklar med egne ord hva disse begrepene betyr:\n\na) Regresjonslinje\nb) Residual\nc) Korrelasjon\nd) Hvorfor er det viktig å skille mellom korrelasjon og kausalitet?',
        solution: `a) En regresjonslinje er den rette linjen som passer best til et sett med datapunkter, i den forstand at summen av de kvadrerte avvikene er minst mulig.

b) Et residual er den vertikale avstanden mellom et datapunkt og regresjonslinjen. Det viser hvor mye modellen «bommer» på det aktuelle punktet.

c) Korrelasjon er et mål på hvor sterk den lineære sammenhengen mellom to variabler er, uttrykt ved korrelasjonskoeffisienten $r$ som ligger mellom $-1$ og $1$.

d) Korrelasjon betyr bare at to variabler endrer seg sammen. Kausalitet betyr at den ene *forårsaker* endringen. Uten å skille disse kan man trekke feilaktige konklusjoner, for eksempel at issalg forårsaker drukning.`,
        hints: ['Tenk på hva ordet «residual» betyr – det er det som «er igjen» etter at modellen har forklart det den kan.'],
      },
    },
    {
      id: '1t-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: '1t-8-3-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tabellen viser sammenhengen mellom alder ($x$, i måneder) og høyde ($y$, i cm) for et barn:\n\n| Alder (mnd) | 0 | 3 | 6 | 9 | 12 | 18 | 24 |\n|---|---|---|---|---|---|---|---|\n| Høyde (cm) | 50 | 58 | 65 | 70 | 75 | 82 | 87 |',
        subTasks: [
          { label: 'a', task: 'Bruk GeoGebra til å finne regresjonslinjen og korrelasjonskoeffisienten.', solution: 'I GeoGebra: `RegLin({(0,50),(3,58),(6,65),(9,70),(12,75),(18,82),(24,87)})`. Resultat: $y \\approx 1{,}52x + 52{,}1$, $r \\approx 0{,}996$.' },
          { label: 'b', task: 'Tolk stigningstallet i konteksten.', solution: 'Stigningstallet $a \\approx 1{,}52$ betyr at barnet vokser i gjennomsnitt omtrent 1,5 cm per måned i denne perioden.' },
          { label: 'c', task: 'Bruk modellen til å anslå høyden ved 15 måneder. Er dette interpolering eller ekstrapolering?', solution: '$y = 1{,}52 \\cdot 15 + 52{,}1 = 22{,}8 + 52{,}1 = 74{,}9$ cm. Dette er interpolering (15 ligger mellom 12 og 18).' },
          { label: 'd', task: 'Hva gir modellen ved 10 års alder (120 måneder)? Er dette rimelig?', solution: '$y = 1{,}52 \\cdot 120 + 52{,}1 = 182{,}4 + 52{,}1 = 234{,}5$ cm. Dette er klart urealistisk – barn vokser ikke lineært over så lang tid. Veksthastigheten avtar betraktelig etter de første leveårene. Dette illustrerer farene ved ekstrapolering.' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: '1t-8-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En forsker undersøker sammenhengen mellom gjennomsnittlig dagtemperatur ($x$, i °C) og strømforbruk til oppvarming ($y$, i kWh) for et hus over 10 vinterdager:\n\n| Temp (°C) | -10 | -7 | -4 | -1 | 0 | 2 | 5 | 7 | 10 | 12 |\n|---|---|---|---|---|---|---|---|---|---|---|\n| kWh | 85 | 78 | 68 | 60 | 55 | 48 | 38 | 30 | 22 | 15 |',
        subTasks: [
          { label: 'a', task: 'Finn regresjonslinjen og korrelasjonskoeffisienten med GeoGebra.', solution: 'I GeoGebra: `RegLin({(-10,85),(-7,78),(-4,68),(-1,60),(0,55),(2,48),(5,38),(7,30),(10,22),(12,15)})`. Resultat: $y \\approx -3{,}15x + 53{,}4$, $r \\approx -0{,}999$.' },
          { label: 'b', task: 'Hva forteller stigningstallet oss? Hva forteller den negative korrelasjonen?', solution: 'Stigningstallet $a \\approx -3{,}15$ betyr at for hver grad temperaturen øker, synker strømforbruket med ca. 3,15 kWh. Den negative korrelasjonen ($r \\approx -1$) viser en svært sterk negativ lineær sammenheng: jo varmere det er, desto mindre strøm brukes.' },
          { label: 'c', task: 'Ved hvilken temperatur forutsier modellen at strømforbruket er null?', solution: '$0 = -3{,}15x + 53{,}4 \\implies x = \\frac{53{,}4}{3{,}15} \\approx 16{,}95$ °C. Modellen forutsier null oppvarmingsforbruk ved ca. 17 °C, noe som er rimelig – ved denne temperaturen trenger man knapt oppvarming.' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: '1t-8-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En elev påstår: «Jeg har funnet at det er sterk positiv korrelasjon ($r = 0{,}92$) mellom antall brannstasjoner i en by og antall kriminalitetssaker. Altså fører flere brannstasjoner til mer kriminalitet.» Forklar hva som er galt med denne konklusjonen, og foreslå en bedre forklaring.',
        solution: `Eleven forveksler korrelasjon med kausalitet. Den sterke korrelasjonen betyr at de to variablene endrer seg sammen, men det betyr ikke at den ene forårsaker den andre.

En bedre forklaring er at begge variablene påvirkes av en tredje variabel: **byens størrelse** (konfunderende variabel). Større byer har:
- Flere brannstasjoner (fordi det er flere bygninger å beskytte)
- Flere kriminalitetssaker (fordi det er flere mennesker)

Korrelasjonen reflekterer altså byens størrelse, ikke en årsakssammenheng mellom brannstasjoner og kriminalitet.

For å undersøke om det er en faktisk sammenheng, burde man kontrollere for befolkningsstørrelse, for eksempel ved å se på antall kriminalitetssaker *per innbygger* mot antall brannstasjoner *per innbygger*.`,
        hints: ['Tenk på hva slags byer som har mange brannstasjoner. Hvilke andre egenskaper har slike byer?'],
      },
    },
    {
      id: '1t-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: '1t-8-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tabellen viser gjennomsnittlig levealder ($y$, i år) og BNP per innbygger ($x$, i tusen dollar) for 8 land:\n\n| BNP (tusen $) | 2 | 5 | 10 | 20 | 30 | 40 | 50 | 60 |\n|---|---|---|---|---|---|---|---|---|\n| Levealder (år) | 55 | 62 | 70 | 76 | 79 | 80 | 81 | 82 |',
        subTasks: [
          { label: 'a', task: 'Lag et spredningsdiagram (for hånd eller i GeoGebra) og beskriv hva du ser.', solution: 'Spredningsdiagrammet viser at levealderen øker raskt for lave BNP-verdier, men flater ut for høye BNP-verdier. Sammenhengen ser ikke lineær ut – den er buet (konkav).' },
          { label: 'b', task: 'Finn likevel regresjonslinjen og korrelasjonskoeffisienten. Passer en lineær modell godt?', solution: 'Regresjonslinje: $y \\approx 0{,}41x + 62{,}9$, $r \\approx 0{,}90$. $r$-verdien er høy, men spredningsdiagrammet viser et buet mønster. En lineær modell fanger ikke opp at veksten flater ut. En logaritmisk eller potensmodell ville passet bedre.' },
          { label: 'c', task: 'Diskuter om det er rimelig å si at høyere BNP *forårsaker* høyere levealder.', solution: 'Det er en korrelasjon, men kausaliteten er sammensatt. Høyere BNP er assosiert med bedre helsetjenester, bedre ernæring og renere vann, som alle bidrar til høyere levealder. Men sammenhengen er ikke direkte: et land kan ha høy BNP og likevel lav levealder (f.eks. ved stor ulikhet). Det er mange konfunderende variabler (utdanningsnivå, politisk stabilitet, fordeling av rikdom).' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.4 – Ikke-lineær regresjon
// ============================================================================

export const CHAPTER_1T_8_4_IKKELINEAER_REGRESJON: TextbookChapter = {
  id: '1t-8-4',
  courseId: '1t',
  chapterNumber: '8.4',
  title: 'Ikke-lineær regresjon',
  description: 'Tilpasse polynomfunksjoner, eksponentialfunksjoner og potensfunksjoner til datasett.',
  estimatedMinutes: 40,
  competenceGoals: [
    'modellere situasjonar, drøfte, presentere og forklare resultata og argumentere for om modellane er gyldige',
    'bruke digitale verktoey i utforsking og problemløysing',
    'utforske og beskrive eigenskapane ved potensfunksjonar og bruke dei til modellering',
  ],
  content: [
    {
      id: '1t-8-4-intro',
      type: 'text',
      content: `## Når den rette linjen ikke passer

I forrige kapittel lærte vi om lineær regresjon. Men mange virkelige sammenhenger er ikke lineære. Dersom vi plotter datapunktene og de danner et buet mønster, eller dersom residualene fra den lineære modellen viser et systematisk mønster (f.eks. først negative, så positive, så negative igjen), bør vi prøve en ikke-lineær modell.

De vanligste alternativene er:
- **Polynomregresjon**: Tilpasse et andregrads- eller tredjegradspolynom
- **Eksponentialregresjon**: Tilpasse en eksponentialfunksjon $y = a \\cdot b^x$
- **Potensregresjon**: Tilpasse en potensfunksjon $y = a \\cdot x^b$`,
    },
    {
      id: '1t-8-4-def-1',
      type: 'definition',
      title: 'Residualanalyse',
      content: `Et **residual** er forskjellen mellom en observert verdi og den verdien modellen gir:

$$e_i = y_i - \\hat{y}_i$$

der $\\hat{y}_i$ er modellens predikerte verdi for $x_i$.

Dersom residualene viser et **tilfeldig mønster** rundt null, passer modellen godt. Dersom residualene viser et **systematisk mønster** (f.eks. buet), bør vi velge en annen modelltype.`,
    },
    {
      id: '1t-8-4-poly',
      type: 'text',
      content: `## Polynomregresjon

Dersom datapunktene ser ut til å følge en parabel (U-form eller omvendt U), kan vi prøve en **andregradsmodell**:

$$y = ax^2 + bx + c$$

Dersom kurven har et S-formet mønster eller to vendepunkter, kan vi prøve en **tredjegradsmodell**:

$$y = ax^3 + bx^2 + cx + d$$

I GeoGebra bruker vi kommandoen \`RegPoly(liste, grad)\`:
- \`RegPoly(liste, 2)\` for andregradstilpasning
- \`RegPoly(liste, 3)\` for tredjegradstilpasning`,
    },
    {
      id: '1t-8-4-example-1',
      type: 'example',
      title: 'Eksempel 1 – Polynomregresjon',
      problem: `En forsker måler hastigheten til et kjemisk reaksjon ($y$, i mol/s) ved ulike temperaturer ($x$, i °C):

| Temp (°C) | 10 | 20 | 30 | 40 | 50 | 60 | 70 |
|---|---|---|---|---|---|---|---|
| Hastighet | 0,5 | 1,8 | 4,0 | 7,2 | 11,5 | 17,0 | 24,0 |

Tilpass en andregradsfunksjon og vurder om den passer godt.`,
      solution: `I GeoGebra:

\`liste = {(10, 0.5), (20, 1.8), (30, 4.0), (40, 7.2), (50, 11.5), (60, 17.0), (70, 24.0)}\`
\`RegPoly(liste, 2)\`

Resultat: $y \\approx 0{,}0037x^2 - 0{,}016x + 0{,}33$

Vi sjekker med $r^2$ (forklaringsgrad). GeoGebra gir $r^2 \\approx 0{,}999$, som betyr at modellen forklarer 99,9 % av variasjonen i dataene. Modellen passer svært godt.

Vi kan sammenligne med en lineær modell: $y \\approx 0{,}38x - 4{,}0$ med $r^2 \\approx 0{,}98$. Den lineære modellen er ikke dårlig, men andregradsfunksjonen fanger opp den svake krumningen i dataene bedre.`,
    },
    {
      id: '1t-8-4-exp',
      type: 'text',
      content: `## Eksponentialregresjon

Dersom dataene viser eksponentiell vekst eller nedgang (verdiene dobles eller halveres over jevne intervaller), tilpasser vi en funksjon på formen:

$$y = a \\cdot b^x$$

I GeoGebra bruker vi kommandoen \`RegExp(liste)\`.

Eksponentialregresjon er spesielt nyttig for:
- Befolkningsvekst
- Radioaktivt henfall
- Bakterievekst
- Rentes rente`,
    },
    {
      id: '1t-8-4-example-2',
      type: 'example',
      title: 'Eksempel 2 – Eksponentialregresjon',
      problem: `Tabellen viser antall bakterier i en petriskål etter $t$ timer:

| Timer ($t$) | 0 | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|
| Bakterier | 100 | 150 | 230 | 340 | 510 | 760 | 1140 |

Tilpass en eksponentialfunksjon og beregn doblingstiden.`,
      solution: `I GeoGebra:

\`liste = {(0, 100), (1, 150), (2, 230), (3, 340), (4, 510), (5, 760), (6, 1140)}\`
\`RegExp(liste)\`

Resultat: $y \\approx 100 \\cdot 1{,}50^t$

**Tolkning:** Startverdien er omtrent 100 bakterier, og bestanden øker med 50 % per time (vekstfaktor 1,50).

**Doblingstid:** Vi løser $1{,}50^t = 2$:

$$t = \\frac{\\ln 2}{\\ln 1{,}50} = \\frac{0{,}693}{0{,}405} \\approx 1{,}71 \\text{ timer}$$

Bakteriebestanden dobles omtrent hver 1 time og 43 minutter.`,
    },
    {
      id: '1t-8-4-pot',
      type: 'text',
      content: `## Potensregresjon

Dersom sammenhengen mellom $x$ og $y$ best beskrives med en potensfunksjon $y = a \\cdot x^b$, bruker vi **potensregresjon**.

I GeoGebra bruker vi kommandoen \`RegPot(liste)\`.

Potensregresjon er nyttig for:
- Fysiske lover (Keplers lov, fritt fall)
- Areal og volum som funksjon av lengdemål
- Biologiske skaleringslover (f.eks. kroppsmasse vs. metabolisme)`,
    },
    {
      id: '1t-8-4-example-3',
      type: 'example',
      title: 'Eksempel 3 – Potensregresjon',
      problem: `Tabellen viser sammenhengen mellom kroppsmassen $m$ (i kg) og hjertefrekvensen $f$ (slag per minutt) for ulike pattedyr:

| Dyr | Mus | Kanin | Katt | Hund | Menneske | Hest | Elefant |
|---|---|---|---|---|---|---|---|
| Masse (kg) | 0,03 | 2 | 4 | 20 | 70 | 500 | 5000 |
| Hjertefrekvens | 600 | 200 | 150 | 100 | 70 | 35 | 25 |

Tilpass en potensfunksjon $f = a \\cdot m^b$ og tolk eksponenten.`,
      solution: `I GeoGebra:

\`liste = {(0.03, 600), (2, 200), (4, 150), (20, 100), (70, 70), (500, 35), (5000, 25)}\`
\`RegPot(liste)\`

Resultat: $f \\approx 220 \\cdot m^{-0{,}25}$

**Tolkning av eksponenten:** $b \\approx -0{,}25 = -\\frac{1}{4}$.

Hjertefrekvensen avtar som fjederoten av kroppsmassen. Dobler vi massen, endres hjertefrekvensen med en faktor $2^{-0{,}25} \\approx 0{,}84$, altså en reduksjon på ca. 16 %.

Denne sammenhengen er kjent som **Kleibers lov** (i en utvidet form) og gjelder overraskende godt for svært mange pattedyr.`,
    },
    {
      id: '1t-8-4-modellvalg',
      type: 'text',
      content: `## Modellvalg: Hvilken modell passer best?

For å velge mellom ulike modeller kan vi bruke:

1. **$r^2$-verdien** (forklaringsgraden): Denne angir hvor stor andel av variasjonen i dataene som forklares av modellen. $r^2 = 1$ betyr perfekt tilpasning. Vi velger modellen med høyest $r^2$.

2. **Visuell vurdering**: Plott dataene og regresjonslinjen i et spredningsdiagram. Ser modellen ut til å fange opp mønsteret i dataene?

3. **Residualanalyse**: Plott residualene. Dersom de viser et tilfeldig mønster, passer modellen godt.

4. **Faglig kunnskap**: Vet vi noe om den underliggende mekanismen? Fysiske lover foretrekkes fremfor rent statistiske tilpasninger.`,
    },
    {
      id: '1t-8-4-note-1',
      type: 'note',
      content: `**Pass opp for overtilpasning!** Med nok parametre kan vi alltid tilpasse dataene perfekt (et $n$-te grads polynom går alltid gjennom $n+1$ punkter). Men en slik modell fanger gjerne opp tilfeldig støy og gir dårlige forutsigelser for nye data. Velg den enkleste modellen som gir en god tilpasning.`,
    },
    {
      id: '1t-8-4-geogebra-1',
      type: 'geogebra',
      title: 'Sammenlign regresjonstyper',
      description: 'Skriv inn et datasett og sammenlign lineær, kvadratisk, eksponentiell og potensregresjon. Hvilken modell passer best?',
      appType: 'graphing',
      commands: [
        'liste = {(1, 2), (2, 5), (3, 10), (4, 18), (5, 30), (6, 45)}',
        'RegLin(liste)',
        'RegPoly(liste, 2)',
        'RegExp(liste)',
      ],
    },
    // Øvelser 8.4
    {
      id: '1t-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: '1t-8-4-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'For hvert av de følgende datasettene, avgjør (uten å gjøre regresjon) hvilken modelltype som trolig passer best: lineær, kvadratisk, eksponentiell eller potens.\n\na) Antall solgte biler i en by over 10 år, der salget øker med omtrent 500 biler hvert år\nb) Antall bananfluer i et glass, der bestanden dobles hver tredje dag\nc) Bremselengde som funksjon av fart\nd) Pendelens svingetid som funksjon av lengden',
        solution: `a) **Lineær modell** – jevn økning med et fast antall per år.

b) **Eksponentiell modell** – dobling med jevne mellomrom er typisk eksponentiell vekst.

c) **Kvadratisk modell** – bremselengden er proporsjonal med farten i andre potens (kinetisk energi $\\propto v^2$).

d) **Potensmodell** – svingetiden er proporsjonal med $\\sqrt{L} = L^{1/2}$, en potensfunksjon.`,
        hints: ['Tenk på om veksten er jevn (lineær), prosentvis (eksponentiell), eller følger en potenslov.'],
      },
    },
    {
      id: '1t-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: '1t-8-4-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tabellen viser nedkjøling av en metallbit i vann. Temperaturen $T$ (i °C over romtemperatur) er målt ved ulike tidspunkter $t$ (i minutter):\n\n| $t$ (min) | 0 | 2 | 4 | 6 | 8 | 10 | 12 |\n|---|---|---|---|---|---|---|---|\n| $T$ (°C) | 80 | 58 | 42 | 30 | 22 | 16 | 11 |',
        subTasks: [
          { label: 'a', task: 'Bruk GeoGebra til å tilpasse en eksponentialfunksjon $T = a \\cdot b^t$.', solution: '`RegExp({(0,80),(2,58),(4,42),(6,30),(8,22),(10,16),(12,11)})`. Resultat: $T \\approx 80 \\cdot 0{,}85^t$.' },
          { label: 'b', task: 'Hva er halveringstiden? (Når er temperaturen halvert?)', solution: '$0{,}85^t = 0{,}5 \\implies t = \\frac{\\ln 0{,}5}{\\ln 0{,}85} = \\frac{-0{,}693}{-0{,}163} \\approx 4{,}3$ minutter.' },
          { label: 'c', task: 'Sammenlign med en lineær modell. Hvilken passer best?', solution: 'Lineær modell: $T \\approx -5{,}6t + 73{,}7$ med $r^2 \\approx 0{,}97$. Eksponentialmodell: $r^2 \\approx 0{,}999$. Eksponentialmodellen passer klart bedre, noe som stemmer med fysikken (Newtons avkjølingslov).' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: '1t-8-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Tabellen viser bremsestrekninger ($d$, i meter) for en bil ved ulike hastigheter ($v$, i km/h):\n\n| $v$ (km/h) | 30 | 50 | 70 | 90 | 110 | 130 |\n|---|---|---|---|---|---|---|\n| $d$ (m) | 5 | 13 | 25 | 42 | 62 | 87 |',
        subTasks: [
          { label: 'a', task: 'Bruk GeoGebra til å tilpasse en potensfunksjon $d = a \\cdot v^b$.', solution: '`RegPot({(30,5),(50,13),(70,25),(90,42),(110,62),(130,87)})`. Resultat: $d \\approx 0{,}005 \\cdot v^{2{,}01}$.' },
          { label: 'b', task: 'Hva forteller eksponenten oss om sammenhengen?', solution: 'Eksponenten $b \\approx 2$ betyr at bremsestrekningen er tilnærmet proporsjonal med kvadratet av hastigheten. Dobler vi farten, firedobles bremsestrekningen. Dette stemmer med fysikken: $d \\propto v^2$ (kinetisk energi).' },
          { label: 'c', task: 'Estimer bremsestrekningen ved 100 km/h.', solution: '$d = 0{,}005 \\cdot 100^{2{,}01} \\approx 0{,}005 \\cdot 10\\,471 \\approx 52$ m.' },
        ],
        solution: 'Se deloppgavene.',
        hints: ['Fysisk vet vi at kinetisk energi er $E_k = \\frac{1}{2}mv^2$, og bremsestrekningen er proporsjonal med kinetisk energi.'],
      },
    },
    {
      id: '1t-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: '1t-8-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Tabellen viser verdien av et kunstskatter ($y$, i tusen kroner) ved ulike tidspunkter ($t$, i år etter kjøp):\n\n| $t$ (år) | 0 | 2 | 5 | 8 | 10 | 15 | 20 |\n|---|---|---|---|---|---|---|---|\n| $y$ (tusen kr) | 50 | 58 | 72 | 90 | 105 | 150 | 210 |',
        subTasks: [
          { label: 'a', task: 'Tilpass en lineær modell, en eksponentiell modell og en andregradsfunksjon. Finn $r^2$ for hver.', solution: 'Lineær: $y \\approx 7{,}8t + 47$ med $r^2 \\approx 0{,}99$. Eksponentiell: $y \\approx 50 \\cdot 1{,}074^t$ med $r^2 \\approx 0{,}998$. Andregradsfunksjon: $y \\approx 0{,}18t^2 + 4{,}2t + 50$ med $r^2 \\approx 0{,}999$.' },
          { label: 'b', task: 'Hvilken modell passer best? Begrunn svaret.', solution: 'Alle tre modellene har høy $r^2$. Andregradsfunksjonen har høyest $r^2$, men eksponentialmodellen er faglig mer fornuftig – verdistigning i prosent er vanligere enn polynomvekst for investeringer. Den eksponentielle modellen gir 7,4 % årlig verdistigning, som er en enkel og tolkbar modell.' },
          { label: 'c', task: 'Bruk den eksponentielle modellen til å anslå verdien etter 30 år. Er anslaget pålitelig?', solution: '$y = 50 \\cdot 1{,}074^{30} \\approx 50 \\cdot 8{,}54 \\approx 427$ tusen kr. Anslaget er ekstrapolering (godt utenfor dataområdet) og dermed usikkert. Kunstmarkedet kan endre seg, og en jevn årlig vekstrate over 30 år er en sterk antagelse.' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: '1t-8-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En forsker samler data om CO₂-konsentrasjonen i atmosfæren (i ppm) fra 1960 til 2020:\n\n| År | 1960 | 1970 | 1980 | 1990 | 2000 | 2010 | 2020 |\n|---|---|---|---|---|---|---|---|\n| CO₂ (ppm) | 317 | 326 | 339 | 354 | 369 | 390 | 414 |\n\nLa $t$ være antall år etter 1960.',
        subTasks: [
          { label: 'a', task: 'Tilpass en lineær modell og en andregradsfunksjon.', solution: 'Lineær: $y \\approx 1{,}59t + 314{,}3$ med $r^2 \\approx 0{,}996$. Andregradsfunksjon: $y \\approx 0{,}011t^2 + 0{,}92t + 316$ med $r^2 \\approx 0{,}9998$.' },
          { label: 'b', task: 'Sammenlign modellene visuelt og med $r^2$. Hvilken passer best?', solution: 'Begge har svært høy $r^2$, men andregradsfunksjonen fanger opp at CO₂-økningen akselererer over tid. Residualene fra den lineære modellen viser et systematisk mønster, mens andregradsfunksjonen gir mer tilfeldige residualer.' },
          { label: 'c', task: 'Prøv også en eksponentiell modell. Sammenlign med andregradsfunksjonen.', solution: 'Eksponentiell: $y \\approx 315 \\cdot 1{,}0044^t$ med $r^2 \\approx 0{,}998$. Denne gir omtrent 0,44 % årlig økning. Begge modellene passer godt, men den eksponentielle vokser raskere for stor $t$. Andregradsfunksjonen er trolig en bedre modell på kort sikt, mens den eksponentielle kan gi en bedre langtidsprediksjon dersom veksten er prosentvis.' },
          { label: 'd', task: 'Diskuter hvilke konsekvenser modellvalget har for forutsigelser av CO₂-nivået i 2050.', solution: 'Lineær modell ($t = 90$): $y \\approx 1{,}59 \\cdot 90 + 314 \\approx 457$ ppm. Andregradsfunksjon: $y \\approx 0{,}011 \\cdot 90^2 + 0{,}92 \\cdot 90 + 316 \\approx 488$ ppm. Eksponentiell: $y \\approx 315 \\cdot 1{,}0044^{90} \\approx 468$ ppm. Forskjellene er betydelige. Modellvalget påvirker altså klimaprognosene direkte, noe som viser hvor viktig det er med grundig modellering.' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8.5 – Modellvurdering og praktisk bruk
// ============================================================================

export const CHAPTER_1T_8_5_MODELLVURDERING: TextbookChapter = {
  id: '1t-8-5',
  courseId: '1t',
  chapterNumber: '8.5',
  title: 'Modellvurdering og praktisk bruk',
  description: 'Kritisk vurdere matematiske modeller, forstå deres begrensninger, og bruke dem ansvarlig.',
  estimatedMinutes: 35,
  competenceGoals: [
    'modellere situasjonar, drøfte, presentere og forklare resultata og argumentere for om modellane er gyldige',
    'utforske og beskrive eigenskapane ved potensfunksjonar og bruke dei til modellering',
    'bruke digitale verktoey i utforsking og problemløysing',
  ],
  content: [
    {
      id: '1t-8-5-intro',
      type: 'text',
      content: `## Sammenligne modeller

I de forrige kapitlene har vi lært ulike regresjonsmetoder og funksjonstyper. I praksis må vi ofte velge mellom flere mulige modeller for det samme datasettet. Hvordan vet vi hvilken modell som er «best»?

Det finnes ikke alltid ett entydig svar. En god modell skal:
1. Passe godt til kjente data (høy $r^2$-verdi)
2. Gi fornuftige forutsigelser (spesielt ved interpolering)
3. Være basert på faglig kunnskap (forstå mekanismen bak)
4. Være enkel nok (ikke unødvendig kompleks)

Punkt 4 kalles **parsimonitetsprinsippet** (Ockhams barberkniv): Alt annet likt, foretrekk den enkleste modellen.`,
    },
    {
      id: '1t-8-5-def-1',
      type: 'definition',
      title: 'Forklaringsgrad ($r^2$)',
      content: `**Forklaringsgraden** $r^2$ (r-kvadrat) angir hvor stor andel av variasjonen i dataene som forklares av modellen.

- $r^2 = 1$ (eller 100 %): Modellen forklarer all variasjon – perfekt tilpasning
- $r^2 = 0$ (eller 0 %): Modellen forklarer ingen variasjon
- Typisk ønsker vi $r^2 > 0{,}9$ for en god modell

For lineær regresjon er $r^2$ kvadratet av korrelasjonskoeffisienten: $r^2 = (\\text{Kor})^2$.

**NB:** Høy $r^2$ betyr ikke nødvendigvis at modellen er riktig – den kan overtilpasses.`,
    },
    {
      id: '1t-8-5-interpolering',
      type: 'text',
      content: `## Interpolering vs. ekstrapolering: pålitelighet

**Interpolering** – anslå verdier mellom kjente datapunkter – er generelt pålitelig dersom modellen passer godt til dataene. Vi beveger oss innenfor det området der modellen har blitt «trent».

**Ekstrapolering** – anslå verdier utenfor dataområdet – er langt mer risikabelt. Jo lenger vi ekstrapolerer, desto mer usikkert blir resultatet. Ulike modeller kan gi svært forskjellige forutsigelser ved ekstrapolering, selv om de passer like godt til kjente data.

**Huskeregel:** Bruk modellen forsiktig utenfor dataområdet, og vær alltid klar over at forutsigelser langt frem i tid eller utenfor kjente forhold er usikre.`,
    },
    {
      id: '1t-8-5-example-1',
      type: 'example',
      title: 'Eksempel 1 – Sammenligning av modeller',
      problem: `Tabellen viser gjennomsnittlig strømforbruk per husstand ($y$, i kWh per år) i Norge ved ulike år:

| År | 2000 | 2004 | 2008 | 2012 | 2016 | 2020 |
|---|---|---|---|---|---|---|
| kWh | 21 500 | 20 800 | 20 200 | 19 500 | 19 000 | 18 200 |

La $t$ være antall år etter 2000. Tilpass lineær og eksponentiell modell, og vurder hvilken som er best.`,
      solution: `**Lineær modell:**
$y = -162t + 21\\,470$ med $r^2 = 0{,}997$

**Eksponentiell modell:**
$y = 21\\,500 \\cdot 0{,}9917^t$ med $r^2 = 0{,}998$

Begge modellene passer svært godt. Den lineære modellen sier at forbruket synker med 162 kWh per år. Den eksponentielle sier at forbruket synker med ca. 0,83 % per år.

**Vurdering:**
- For kort tids ekstrapolering gir begge lignende resultater.
- Den lineære modellen gir negativt forbruk rundt $t = 132$ (år 2132), noe som er umulig.
- Den eksponentielle modellen nærmer seg null, men blir aldri negativ, som er mer realistisk.
- Faglig sett er prosentvis nedgang (energieffektivisering) mer naturlig enn konstant nedgang.

Den eksponentielle modellen er trolig best for lengre fremskrivninger, men begge modellene er usikre langt frem i tid.`,
    },
    {
      id: '1t-8-5-begrensninger',
      type: 'text',
      content: `## Begrensninger ved modeller

Alle matematiske modeller har begrensninger. Noen viktige å være klar over:

**1. Gyldighetsområde:** Modellen gjelder bare innenfor et visst område av $x$-verdier. Utenfor dette kan den gi meningsløse resultater (f.eks. negativ befolkning).

**2. Forenklinger:** Modellen ser bort fra faktorer som kan være viktige. En modell for fritt fall ignorerer luftmotstand, en modell for befolkningsvekst ignorerer kriger og epidemier.

**3. Tidsbegrensning:** En modell som passer godt nå, trenger ikke passe i fremtiden. Trender kan endre seg.

**4. Datatilpasning ≠ forståelse:** En modell med høy $r^2$ betyr ikke at vi forstår mekanismen. Modellen beskriver mønsteret, men forklarer det ikke nødvendigvis.`,
    },
    {
      id: '1t-8-5-example-2',
      type: 'example',
      title: 'Eksempel 2 – Helhetlig analyse',
      problem: `En dyreparksavdeling har registrert antall gjester per år ($y$, i tusen) de siste årene:

| År etter oppstart ($t$) | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| Gjester (tusen) | 15 | 28 | 52 | 80 | 95 | 103 | 108 | 110 |

Analyser datasettet med ulike modeller og gi en anbefaling.`,
      solution: `**Steg 1: Visuell vurdering**
Dataene viser rask vekst i begynnelsen som flater ut. Dette tyder på en S-kurve eller en logaritmisk/rotfunksjonsmodell.

**Steg 2: Prøv ulike modeller i GeoGebra**

Lineær: $y \\approx 14{,}0t + 9{,}5$, $r^2 \\approx 0{,}90$
Andregradsfunksjon: $y \\approx -2{,}4t^2 + 35{,}5t - 17{,}5$, $r^2 \\approx 0{,}99$
Potensmodell: $y \\approx 17{,}8 \\cdot t^{0{,}92}$, $r^2 \\approx 0{,}95$

**Steg 3: Vurdering**
- Den lineære modellen fanger ikke opp utflatningen og gir $r^2 = 0{,}90$.
- Andregradsfunksjonen passer best med $r^2 = 0{,}99$, men den snur nedover og forutsier at besøkstallet synker etter noen år – noe som kanskje ikke er realistisk.
- Potensmodellen med $b < 1$ gir avtagende vekst uten å snur nedover, som er mer realistisk.

**Anbefaling:** For interpolering og kort tids ekstrapolering er andregradsfunksjonen best. For lengre fremskrivninger er potensmodellen eller en logaritmisk modell ($y = a \\cdot \\ln(t) + b$) mer fornuftig, fordi disse ikke forutsier nedgang.

Vi ser at andregradsfunksjonens toppunkt er ved $t \\approx \\frac{35{,}5}{2 \\cdot 2{,}4} \\approx 7{,}4$, og modellen forutsier nedgang etter dette. Dersom vi forventer at besøkstallet stabiliserer seg (men ikke synker), trenger vi en annen modelltype.`,
    },
    {
      id: '1t-8-5-kritisk',
      type: 'text',
      content: `## Kritisk vurdering av modeller i media og forskning

Matematiske modeller brukes mye i media, forskning og politikk. Det er viktig å stille kritiske spørsmål:

- **Hvilke data er modellen basert på?** Er dataene pålitelige og representative?
- **Hvilken funksjonstype er valgt, og hvorfor?** Er det faglig grunnlag for valget?
- **Er det interpolering eller ekstrapolering?** Forutsigelser langt utenfor dataene er usikre.
- **Hvilke forenklinger er gjort?** Alle modeller forenkler virkeligheten.
- **Hvem har laget modellen, og med hvilket formål?** Kan det være skjevheter?

Et klassisk eksempel: Under pandemien ble det presentert mange modeller for smittespredning. Ulike modeller ga svært forskjellige forutsigelser, avhengig av antagelser om smitterate, tiltak og befolkningsadferd. Modellene var nyttige for å forstå mulige scenarier, men forutsigelsene var usikre.`,
    },
    {
      id: '1t-8-5-tip-1',
      type: 'tip',
      content: `**Sjekkliste for modellvurdering:**
1. Passer modellen til kjente data? (Sjekk $r^2$ og residualer)
2. Er modelltypen faglig begrunnet?
3. Gir modellen fornuftige verdier for ekstrempunkter?
4. Er det interpolering eller ekstrapolering?
5. Hvilke forenklinger er gjort?
6. Er den enkleste tilstrekkelige modellen valgt?`,
    },
    {
      id: '1t-8-5-geogebra-1',
      type: 'geogebra',
      title: 'Modellvurdering i praksis',
      description: 'Skriv inn et datasett og tilpass ulike modeller. Sammenlign $r^2$-verdiene og vurder visuelt hvilken modell som passer best.',
      appType: 'graphing',
      commands: [
        'liste = {(1, 15), (2, 28), (3, 52), (4, 80), (5, 95), (6, 103), (7, 108), (8, 110)}',
        'RegLin(liste)',
        'RegPoly(liste, 2)',
        'RegPot(liste)',
      ],
    },
    // Øvelser 8.5
    {
      id: '1t-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: '1t-8-5-ex-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Avgjør om følgende utsagn er interpolering eller ekstrapolering:\n\na) Vi har temperaturdata fra kl. 08:00 til 16:00 og anslår temperaturen kl. 12:00.\nb) Vi har salgsdata for 2018–2023 og anslår salget i 2025.\nc) Vi har data for inntekt og utdanningsnivå for personer med 8–20 års utdanning, og anslår inntekten for en person med 15 års utdanning.\nd) Vi har data for en balls posisjon i de første 3 sekundene, og beregner posisjonen etter 10 sekunder.',
        solution: `a) **Interpolering** – kl. 12:00 ligger mellom 08:00 og 16:00.
b) **Ekstrapolering** – 2025 ligger utenfor dataperioden (etter 2023).
c) **Interpolering** – 15 år ligger mellom 8 og 20 år.
d) **Ekstrapolering** – 10 sekunder ligger langt utenfor de første 3 sekundene.`,
      },
    },
    {
      id: '1t-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: '1t-8-5-ex-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bedrift har registrert omsetning ($y$, i millioner kr) over 6 år:\n\n| År ($t$) | 1 | 2 | 3 | 4 | 5 | 6 |\n|---|---|---|---|---|---|---|\n| Omsetning | 2,1 | 2,5 | 3,0 | 3,6 | 4,3 | 5,2 |',
        subTasks: [
          { label: 'a', task: 'Tilpass en lineær og en eksponentiell modell i GeoGebra.', solution: 'Lineær: $y \\approx 0{,}59t + 1{,}37$ med $r^2 \\approx 0{,}996$. Eksponentiell: $y \\approx 1{,}73 \\cdot 1{,}19^t$ med $r^2 \\approx 0{,}999$.' },
          { label: 'b', task: 'Sammenlign forutsigelsene for år 10 og år 20.', solution: 'År 10: Lineær: $y = 0{,}59 \\cdot 10 + 1{,}37 = 7{,}27$ mill. Eksponentiell: $y = 1{,}73 \\cdot 1{,}19^{10} \\approx 9{,}56$ mill. År 20: Lineær: $y = 0{,}59 \\cdot 20 + 1{,}37 = 13{,}2$ mill. Eksponentiell: $y = 1{,}73 \\cdot 1{,}19^{20} \\approx 52{,}8$ mill. Modellene gir svært forskjellige forutsigelser ved ekstrapolering, spesielt for år 20.' },
          { label: 'c', task: 'Hvilken modell ville du anbefale, og hvorfor?', solution: 'Begge modellene passer godt til dataene. For korte fremskrivninger gir de lignende resultater. For lengre tid avhenger det av om bedriftens vekst er absolutt (lineær) eller prosentvis (eksponentiell). Prosentvis vekst er vanligere for bedrifter i en vekstfase, men den eksponentielle modellen gir urealistisk høye tall over lang tid (ingen bedrift vokser 19 % årlig i 20 år). En S-formet modell ville vært bedre for langtidsforutsigelser.' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: '1t-8-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som er feil eller problematisk med følgende påstander:\n\na) «Modellen vår har $r^2 = 0{,}99$, så den er garantert riktig.»\nb) «Vi fant et tiendegradspolynom som går gjennom alle 10 datapunktene, så det er den beste modellen.»\nc) «Det er sterk korrelasjon mellom skoforbruk og inntekt, altså tjener man mer penger av å kjøpe flere sko.»',
        solution: `a) Høy $r^2$ betyr at modellen passer godt til *disse* dataene, men garanterer ikke at modellen er riktig. Den kan være overtilpasset, og den gjelder bare innenfor dataområdet. Andre modeller kan ha like høy $r^2$.

b) Et tiendegradspolynom med 10 punkter er en overtilpasning – polynomet går gjennom alle punkter men svinger vilt mellom dem. Det gir dårlige forutsigelser og fanger opp tilfeldig støy i stedet for den underliggende trenden. En enklere modell er nesten alltid bedre.

c) Dette forveksler korrelasjon med kausalitet. En konfunderende variabel (f.eks. generelt forbruksnivå, som henger sammen med inntekt) kan forklare sammenhengen. Det er inntekten som påvirker skoforbruket, ikke omvendt.`,
      },
    },
    {
      id: '1t-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: '1t-8-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En kommune har registrert årlig vannforbruk ($y$, i millioner liter) og befolkningstall ($x$, i tusen innbyggere) over 8 år:\n\n| Innbyggere (tusen) | 12 | 14 | 16 | 19 | 22 | 25 | 28 | 32 |\n|---|---|---|---|---|---|---|---|---|\n| Vannforbruk (mill. liter) | 1,8 | 2,3 | 2,9 | 3,8 | 4,8 | 5,9 | 7,2 | 9,0 |',
        subTasks: [
          { label: 'a', task: 'Tilpass lineær, eksponentiell og potensmodell i GeoGebra.', solution: 'Lineær: $y \\approx 0{,}36x - 2{,}6$ med $r^2 \\approx 0{,}99$. Eksponentiell: $y \\approx 0{,}59 \\cdot 1{,}052^x$ med $r^2 \\approx 0{,}997$. Potensmodell: $y \\approx 0{,}0065 \\cdot x^{1{,}65}$ med $r^2 \\approx 0{,}9995$.' },
          { label: 'b', task: 'Forutsi vannforbruket ved 40 000 innbyggere med hver modell.', solution: 'Lineær: $y = 0{,}36 \\cdot 40 - 2{,}6 = 11{,}8$ mill. liter. Eksponentiell: $y = 0{,}59 \\cdot 1{,}052^{40} \\approx 4{,}5$ mill. liter. Potensmodell: $y = 0{,}0065 \\cdot 40^{1{,}65} \\approx 13{,}3$ mill. liter. De tre modellene gir vidt forskjellige anslag.' },
          { label: 'c', task: 'Hvilken modell er mest fornuftig fra et faglig synspunkt? Begrunn svaret.', solution: 'Potensmodellen med $b \\approx 1{,}65$ er trolig mest fornuftig. Den sier at vannforbruket vokser raskere enn lineært med befolkningen, men ikke eksponentielt. Eksponentiell vekst er urealistisk for vannforbruk – det ville bety at forbruket per person øker eksponentielt. Potensmodellen kan forklares med at infrastruktur (lekkasjer, fellesarealer) vokser mer enn proporsjonalt med befolkningen. Den lineære modellen er akseptabel på kort sikt, men gir negativt forbruk for små befolkninger.' },
          { label: 'd', task: 'Diskuter begrensningene ved den valgte modellen.', solution: 'Potensmodellen antar en fast sammenheng mellom befolkningstall og vannforbruk. I virkeligheten kan vannforbruk per person endre seg over tid (nye sparetiltak, klimaendringer, nye industrier). Modellen tar heller ikke hensyn til kapasitetsbegrensninger i vannanlegg. Ved svært store befolkninger kan modellen gi urealistisk høye verdier. Modellen er best egnet for moderat ekstrapolering.' },
        ],
        solution: 'Se deloppgavene.',
      },
    },
    {
      id: '1t-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: '1t-8-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I en avisartikkel står det: «Forskning viser at land med høyere sjokoladeforbruk per innbygger har flere nobelprisvinnere per million innbyggere. Korrelasjonen er sterk ($r = 0{,}79$). Sjokolade gjør deg smartere!»\n\na) Hva er galt med denne konklusjonen?\nb) Foreslå minst to mulige konfunderende variabler.\nc) Beskriv hvordan du ville undersøkt om det faktisk er en kausal sammenheng.',
        solution: `a) Artikkelen forveksler korrelasjon med kausalitet. At to variabler korrelerer betyr ikke at den ene forårsaker den andre. En korrelasjon mellom sjokoladeforbruk og nobelprisvinnere betyr ikke at sjokolade fører til nobelpriser.

b) Mulige konfunderende variabler:
- **BNP per innbygger / velstand**: Rike land har råd til både sjokolade og forskningsinstitusjoner.
- **Utdanningsnivå**: Land med høy utdanning har både høyere levestandard (og dermed sjokoladeforbruk) og flere forskere.
- **Klima**: Kaldere land (Nord-Europa) har tradisjonelt høyt sjokoladeforbruk og sterke forskningstradisjoner.
- **Befolkningsstørrelse**: Små, rike land kan ha «mange» nobelprisvinnere per innbygger.

c) For å undersøke kausalitet kunne man:
- Gjennomføre et kontrollert eksperiment (gi en gruppe mer sjokolade over tid og måle kognitive prestasjoner)
- Kontrollere for konfunderende variabler (se på sammenhengen etter å ha justert for BNP, utdanning osv.)
- Undersøke mekanismen: Er det noen biologisk forklaring for at sjokolade skulle påvirke intellektuell kapasitet?
- Se på individnivådata i stedet for landnivådata (unngå «økologisk feilslutning»)`,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler i seksjonen
// ============================================================================

export const CHAPTERS_1T_MODELLERING: TextbookChapter[] = [
  CHAPTER_1T_8_1_MODELLERING,
  CHAPTER_1T_8_2_POTENSFUNKSJONER,
  CHAPTER_1T_8_3_LINEAER_REGRESJON,
  CHAPTER_1T_8_4_IKKELINEAER_REGRESJON,
  CHAPTER_1T_8_5_MODELLVURDERING,
];
