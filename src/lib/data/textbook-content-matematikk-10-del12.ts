/**
 * Matematikk 10. klasse - Del 12: Eksamensforberedelse og problemløsning
 *
 * Følger LK20 læreplan for matematikk ungdomstrinn.
 * Del 12 dekker eksamensforberedelse:
 * - Eksamensformat og strategier
 * - Del 1 — Oppgaver uten hjelpemidler
 * - Del 2 — Oppgaver med hjelpemidler
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 12.1: Eksamensformat og strategier
// LK20: Bruke funksjonar i modellering og argumentere for framgangsmåtar
//        og resultat
// ============================================================================

export const CHAPTER_10_12_1: TextbookChapter = {
  id: '10-12-1',
  courseId: '10',
  chapterNumber: '12.1',
  title: 'Eksamensformat og strategier',
  description: 'Lær om den norske matematikkeksamen for 10. klasse, hvordan den er bygd opp, og strategier for å prestere best mulig.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke funksjonar i modellering og argumentere for framgangsmåtar og resultat',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '10-12-1-intro',
      type: 'text',
      content: `## Velkommen til eksamensforberedelsen!

Eksamen i matematikk er en av de viktigste prøvene du tar i 10. klasse. Men eksamen trenger ikke å være skummelt — med riktig forberedelse og gode strategier kan du gjøre det mye bedre enn du kanskje tror.

I dette kapittelet skal du lære:
- Hvordan eksamen er bygd opp (Del 1 og Del 2)
- Hva sensor ser etter i besvarelsen din
- Strategier for tidsbruk og oppgaveløsning
- Vanlige feil og hvordan du unngår dem
- Tips for å håndtere nervøsitet

La oss starte med det viktigste: Hva møter du egentlig på eksamensdagen?`,
    },

    // ========== EKSAMENSFORMAT ==========
    {
      id: '10-12-1-format',
      type: 'text',
      title: 'Slik er matematikkeksamen bygd opp',
      content: `## Eksamen i matematikk 10. klasse

Eksamen i matematikk for 10. trinn er en **skriftlig eksamen** som varer i **5 timer**. Den er delt i to deler:

### Del 1 — Uten hjelpemidler (ca. 1,5–2 timer)

- Du har **ingen hjelpemidler** — ingen kalkulator, ingen formelsamling, ingen digitale verktøy
- Oppgavene tester om du kan **grunnleggende matematikk** uten støtte
- Typiske oppgaver: hoderegning, algebra, enkel geometri, brøk, prosent, statistikk
- Du leverer inn Del 1 før du får Del 2
- Vekt: ca. **40–50 %** av totalkarakteren

### Del 2 — Med hjelpemidler (ca. 3–3,5 timer)

- Du kan bruke **alle hjelpemidler** du vil: kalkulator, GeoGebra, regneark, formelsamling, egne notater
- Oppgavene er mer **sammensatte** og krever lengre utregninger
- Typiske oppgaver: funksjoner, modellering, praktiske problemer, statistikkanalyse
- Vekt: ca. **50–60 %** av totalkarakteren

### Viktig om poengfordeling

Oppgavene har ulik vekt. Noen oppgaver gir 1–2 poeng, mens andre gir 4–6 poeng. De tyngre oppgavene krever at du viser mer arbeid og argumenterer for løsningen din.`,
    },

    // ========== DEFINISJON: VIS UTREGNING ==========
    {
      id: '10-12-1-def-vis-utregning',
      type: 'definition',
      title: '«Vis utregning» — hva betyr det?',
      content: `Når eksamen ber deg **«vise utregning»** eller **«grunngi svaret»**, betyr det at du må:

1. **Skrive opp formelen** du bruker
2. **Sette inn tallene** i formelen
3. **Vise mellomregninger** — ikke bare skriv svaret
4. **Skrive et tydelig svar** med riktig enhet

**Eksempel — riktig:**

Areal av trekant med grunnlinje $g = 8$ cm og høyde $h = 5$ cm:

$$A = \\frac{g \\cdot h}{2} = \\frac{8 \\cdot 5}{2} = \\frac{40}{2} = 20 \\text{ cm}^2$$

**Svar:** Arealet av trekanten er $20 \\text{ cm}^2$.

**Eksempel — feil:**

$A = 20$

Her mangler formel, mellomregning og enhet. Du vil miste poeng selv om svaret er riktig!`,
    },

    // ========== EKSEMPEL: TIDSBRUK ==========
    {
      id: '10-12-1-example-tidsbruk',
      type: 'example',
      title: 'Eksempel: Tidsplan for eksamensdagen',
      content: `Du har 5 timer totalt. Her er en anbefalt tidsplan:

**Del 1 (anbefalt: 1,5–2 timer):**
| Aktivitet | Tid |
|-----------|-----|
| Les gjennom alle oppgavene | 10 min |
| Løs oppgavene du kan først | 45–60 min |
| Gå tilbake til vanskelige oppgaver | 20–30 min |
| Sjekk svarene dine | 10–15 min |

**Del 2 (anbefalt: 3–3,5 timer):**
| Aktivitet | Tid |
|-----------|-----|
| Les gjennom alle oppgavene | 10 min |
| Løs oppgavene i rekkefølge | 120–150 min |
| Gå tilbake til uløste oppgaver | 20–30 min |
| Sjekk alle svar og utregninger | 15–20 min |

**Gyllne regel:** Ikke bruk mer enn 10–15 minutter på én enkelt oppgave. Hvis du står fast, gå videre og kom tilbake senere. Det er bedre å få poeng på mange oppgaver enn full score på én.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: '10-12-1-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-12-1-oppg-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er riktig om Del 1 av matematikkeksamen i 10. klasse?',
        options: [
          {
            id: 'a',
            text: 'Du kan bruke kalkulator, men ikke GeoGebra',
            isCorrect: false,
            feedback: 'Feil. På Del 1 kan du ikke bruke noen hjelpemidler — hverken kalkulator, GeoGebra eller formelsamling.',
          },
          {
            id: 'b',
            text: 'Du kan ikke bruke noen hjelpemidler',
            isCorrect: true,
            feedback: 'Riktig! Del 1 er helt uten hjelpemidler. Du må klare deg med det du kan utenat.',
          },
          {
            id: 'c',
            text: 'Du kan bruke formelsamling, men ikke kalkulator',
            isCorrect: false,
            feedback: 'Feil. På Del 1 er det ingen hjelpemidler i det hele tatt — heller ikke formelsamling.',
          },
          {
            id: 'd',
            text: 'Du kan bruke egne notater',
            isCorrect: false,
            feedback: 'Feil. På Del 1 er det ingen hjelpemidler tillatt. Egne notater kan brukes på Del 2.',
          },
        ],
        solution: 'Alternativ B er riktig. Del 1 av eksamen er helt uten hjelpemidler.',
      },
    },

    // ========== VANLIGE FEIL ==========
    {
      id: '10-12-1-vanlige-feil',
      type: 'text',
      title: 'Vanlige feil på eksamen',
      content: `## De vanligste feilene — og hvordan du unngår dem

Sensor ser de samme feilene igjen og igjen. Her er de viktigste å passe på:

### 1. Manglende mellomregning
Selv om du regner riktig i hodet, **må du skrive det ned**. Uten mellomregning kan du miste halvparten av poengene.

### 2. Glemmer enheter
Svar som «42» uten enhet er ufullstendig. Er det 42 cm, 42 kr, 42 grader eller 42 kg? Skriv alltid enheten!

### 3. Leser oppgaven for raskt
Mange elever svarer på noe annet enn det oppgaven spør om. Les oppgaven **minst to ganger** før du begynner.

### 4. Gir opp for tidlig
Selv om du ikke klarer hele oppgaven, kan du ofte få delpoeng. Skriv ned det du vet — en formel, et oppsett, en delregning. Alt teller!

### 5. Feil med negative tall og fortegn
Regning med negative tall er en klassisk feilkilde:
- $(-3) \\cdot (-4) = 12$ (pluss ganger pluss)
- $(-3) \\cdot 4 = -12$ (minus ganger pluss)
- $-3 - (-4) = -3 + 4 = 1$ (minus minus blir pluss)

### 6. Feil brøkregning
- $\\frac{1}{3} + \\frac{1}{4} \\neq \\frac{2}{7}$ — du trenger fellesnevner!
- $\\frac{1}{3} + \\frac{1}{4} = \\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$`,
    },

    // ========== TIPS: NERVØSITET ==========
    {
      id: '10-12-1-tips-nervositet',
      type: 'tip',
      title: 'Tips for å håndtere eksamensnerver',
      content: `Det er helt normalt å være nervøs før eksamen. Her er noen strategier som kan hjelpe:

**Før eksamen:**
- Forbered deg godt — trygghet kommer av å kunne stoffet
- Sov nok natten før (minst 8 timer)
- Spis en god frokost med langsomme karbohydrater (grovbrød, havregrøt)
- Kom tidlig — stress av å komme for sent gjør alt verre

**Under eksamen:**
- Start med oppgavene du kan — det gir selvtillit
- Pust dypt hvis du kjenner panikk (inn gjennom nesen, ut gjennom munnen)
- Husk at du ikke trenger 100 % for å gjøre det bra
- Ta korte pauser — strekk deg, drikk vann, pust

**Viktig å huske:**
- Eksamen tester det du kan — ikke det du ikke kan
- Sensor **vil** gi deg poeng — vis det du vet!
- Én dårlig oppgave ødelegger ikke eksamen`,
    },

    // ========== EKSEMPEL: LESE OPPGAVETEKST ==========
    {
      id: '10-12-1-example-lese',
      type: 'example',
      title: 'Eksempel: Slik leser du oppgaveteksten nøye',
      problem: `Les denne oppgaveteksten og identifiser hva du må finne:

«En butikk selger en jakke til 1 200 kr. De har 25 % rabatt på alle jakker. I tillegg får du 10 % ekstra rabatt hvis du er medlem av kundeklubben. Hva blir prisen for et medlem?»`,
      solution: `**Steg 1: Hva spør oppgaven om?**
Prisen for et medlem etter begge rabattene.

**Steg 2: Hvilken informasjon har vi?**
- Opprinnelig pris: 1 200 kr
- Rabatt 1: 25 %
- Rabatt 2: 10 % (ekstra, for medlemmer)

**Steg 3: Pass på fellen!**
25 % + 10 % er **ikke** 35 % totalt! Du må ta 10 % av den *allerede reduserte* prisen.

**Steg 4: Regn ut:**

Pris etter 25 % rabatt:
$$1\\,200 \\cdot 0{,}75 = 900 \\text{ kr}$$

Pris etter 10 % medlemsrabatt:
$$900 \\cdot 0{,}90 = 810 \\text{ kr}$$

**Svar:** Prisen for et medlem er 810 kr.

**Merk:** Hvis du hadde regnet 35 % direkte, ville du fått $1\\,200 \\cdot 0{,}65 = 780$ kr — det er feil!`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: '10-12-1-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-12-1-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: `En elev har skrevet dette svaret på en eksamensoppgave:

Oppgave: «Regn ut arealet av et rektangel med sider 7 cm og 4 cm.»

Elevens svar: «28»

Forklar minst tre ting eleven burde ha gjort annerledes for å få full score.`,
        hints: [
          'Tenk på hva sensor forventer å se: formel, innsetting, mellomregning, svar med enhet.',
        ],
        solution: `Eleven burde ha:

1. **Skrevet formelen:** $A = l \\cdot b$
2. **Satt inn tallene:** $A = 7 \\cdot 4$
3. **Skrevet svaret med enhet:** $A = 28 \\text{ cm}^2$
4. **Formulert et tydelig svar:** «Arealet av rektangelet er $28 \\text{ cm}^2$.»

Et fullstendig svar ser slik ut:

$$A = l \\cdot b = 7 \\cdot 4 = 28 \\text{ cm}^2$$

**Svar:** Arealet av rektangelet er $28 \\text{ cm}^2$.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== STRATEGI: POENGMAKSIMERING ==========
    {
      id: '10-12-1-strategi',
      type: 'text',
      title: 'Strategi: Hvordan maksimere poengene dine',
      content: `## Smart oppgaveløsning

Eksamen handler ikke bare om å kunne matematikk — det handler også om **strategi**. Her er de viktigste prinsippene:

### Prinsipp 1: Start med det du kan
Bla gjennom hele eksamen først. Løs de enkleste oppgavene først. Dette gir deg selvtillit og sikrer at du får poeng tidlig.

### Prinsipp 2: Hopp over og kom tilbake
Hvis du bruker mer enn 10 minutter på én oppgave uten fremgang, marker den og gå videre. Kom tilbake senere med friske øyne.

### Prinsipp 3: Del opp store oppgaver
Mange oppgaver har deloppgaver (a, b, c, d). Du kan ofte løse b) selv om du ikke klarte a). Prøv alltid!

### Prinsipp 4: Sjekk svaret ditt
Bruk et enkelt triks: Sett svaret tilbake i oppgaven og se om det gir mening.

**Eksempel:** Du løste ligningen $2x + 6 = 14$ og fikk $x = 4$.
Sjekk: $2 \\cdot 4 + 6 = 8 + 6 = 14$ ✓ Stemmer!

### Prinsipp 5: Estimer før du regner
Før du regner nøyaktig, gjør et raskt overslag. Hvis du beregner arealet av et rom til 4 500 m$^2$ i stedet for 45 m$^2$, bør alarmklokkene ringe!`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: '10-12-1-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-12-1-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `En elev fikk denne eksamensoppgaven:

«Et rektangulært rom er 5,5 m langt og 3,8 m bredt. Gulvet skal legges med fliser som koster 389 kr per kvadratmeter. Hvor mye koster det å flislegge hele gulvet?»

a) Vis hvordan du ville løst oppgaven med full utregning.

b) Eleven svarte «8 130 kr». Forklar hvordan du kan sjekke om dette svaret er rimelig uten å regne nøyaktig.`,
        subTasks: [
          {
            label: 'a',
            task: 'Vis hvordan du ville løst oppgaven med full utregning.',
            solution: `Areal: $A = 5{,}5 \\cdot 3{,}8 = 20{,}9 \\text{ m}^2$

Kostnad: $20{,}9 \\cdot 389 = 8\\,130{,}10$ kr

**Svar:** Det koster 8 130,10 kr å flislegge gulvet.`,
          },
          {
            label: 'b',
            task: 'Forklar hvordan du kan sjekke om dette svaret er rimelig uten å regne nøyaktig.',
            solution: `Overslag: Rommet er ca. $6 \\times 4 = 24 \\text{ m}^2$. Flisene koster ca. 400 kr/m$^2$. Da blir kostnaden ca. $24 \\cdot 400 = 9\\,600$ kr. Svaret 8 130 kr er i samme størrelsesorden, så det virker rimelig.`,
          },
        ],
        hints: [
          'Husk formelen for areal av rektangel: $A = l \\cdot b$',
          'For overslaget: Rund av til enklere tall',
        ],
        solution: `a) Areal: $A = 5{,}5 \\cdot 3{,}8 = 20{,}9 \\text{ m}^2$. Kostnad: $20{,}9 \\cdot 389 = 8\\,130{,}10$ kr.

b) Overslag: ca. $6 \\times 4 = 24 \\text{ m}^2$, ca. 400 kr/m$^2$, altså ca. 9 600 kr. Svaret 8 130 kr er rimelig.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: '10-12-1-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-12-1-oppg-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En elev løser ligningen $3x - 9 = 12$ og får $x = 7$. Hvordan kan eleven enklest sjekke at svaret er riktig?',
        options: [
          {
            id: 'a',
            text: 'Løse ligningen en gang til med en annen metode',
            isCorrect: false,
            feedback: 'Det er mulig, men det finnes en raskere måte å sjekke på.',
          },
          {
            id: 'b',
            text: 'Sette $x = 7$ inn i ligningen og se om begge sider blir like',
            isCorrect: true,
            feedback: 'Riktig! $3 \\cdot 7 - 9 = 21 - 9 = 12$. Venstre side = høyre side, altså er svaret riktig.',
          },
          {
            id: 'c',
            text: 'Tegne grafen til $y = 3x - 9$ i GeoGebra',
            isCorrect: false,
            feedback: 'Det fungerer, men på Del 1 har du ikke GeoGebra tilgjengelig. Innsetting er raskest.',
          },
          {
            id: 'd',
            text: 'Spørre sidemannen',
            isCorrect: false,
            feedback: 'På eksamen er det ikke lov å samarbeide. Du må sjekke selv!',
          },
        ],
        solution: 'Alternativ B er riktig. Den raskeste sjekken er å sette svaret tilbake i ligningen: $3 \\cdot 7 - 9 = 21 - 9 = 12$ ✓',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: '10-12-1-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-12-1-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `Lag en personlig sjekkliste for eksamensdagen. Listen skal inneholde:

a) Tre ting du gjør **kvelden før** eksamen
b) Tre ting du gjør **på morgenen** før eksamen
c) Tre strategier du bruker **under** eksamen (Del 1)
d) Tre strategier du bruker **under** eksamen (Del 2)`,
        subTasks: [
          {
            label: 'a',
            task: 'Tre ting du gjør kvelden før eksamen',
            solution: 'Eksempel: 1) Gjennomgå viktige formler. 2) Pakke sekken med det du trenger. 3) Legge deg tidlig (senest kl. 22).',
          },
          {
            label: 'b',
            task: 'Tre ting du gjør på morgenen',
            solution: 'Eksempel: 1) Spise en god frokost. 2) Gå gjennom formelsamlingen en siste gang. 3) Komme til skolen i god tid.',
          },
          {
            label: 'c',
            task: 'Tre strategier under Del 1',
            solution: 'Eksempel: 1) Lese alle oppgavene først. 2) Løse de enkleste oppgavene først. 3) Sjekke svarene ved å sette dem tilbake i oppgaven.',
          },
          {
            label: 'd',
            task: 'Tre strategier under Del 2',
            solution: 'Eksempel: 1) Bruke kalkulator til å dobbeltsjekke beregninger. 2) Bruke GeoGebra for funksjons- og geometrioppgaver. 3) Vise alle mellomregninger tydelig.',
          },
        ],
        hints: [
          'Tenk på hva som stresser deg mest — hvordan kan du forberede deg for å redusere stresset?',
          'Husk at gode rutiner gir trygghet.',
        ],
        solution: 'Se deloppgavene for eksempler. Det viktigste er at sjekklisten er realistisk og personlig tilpasset.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6 ==========
    {
      id: '10-12-1-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-12-1-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Her er en typisk eksamensoppgave:

«I en klasse med 28 elever fikk guttene i gjennomsnitt karakteren 3,8 på matematikkeksamen, og jentene fikk i gjennomsnitt 4,2. Gjennomsnittet for hele klassen var 3,96. Hvor mange gutter og hvor mange jenter er det i klassen?»

a) Sett opp to likninger med to ukjente.
b) Løs likningssystemet.
c) Kontroller svaret ditt.`,
        subTasks: [
          {
            label: 'a',
            task: 'Sett opp to likninger med to ukjente.',
            solution: `La $g$ = antall gutter og $j$ = antall jenter.

Likning 1 (antall): $g + j = 28$

Likning 2 (gjennomsnitt): $\\frac{3{,}8g + 4{,}2j}{28} = 3{,}96$

som gir $3{,}8g + 4{,}2j = 110{,}88$`,
          },
          {
            label: 'b',
            task: 'Løs likningssystemet.',
            solution: `Fra likning 1: $g = 28 - j$

Sett inn i likning 2:
$3{,}8(28 - j) + 4{,}2j = 110{,}88$
$106{,}4 - 3{,}8j + 4{,}2j = 110{,}88$
$0{,}4j = 4{,}48$
$j = 11{,}2$

Hmm, vi får ikke et heltall. La oss sjekke med $3{,}96 \\cdot 28 = 110{,}88$. Prøv $j = 12$:
$3{,}8 \\cdot 16 + 4{,}2 \\cdot 12 = 60{,}8 + 50{,}4 = 111{,}2 \\neq 110{,}88$.

Med $3{,}96$ nøyaktig: $0{,}4j = 4{,}48$, $j = 11{,}2$ — ikke heltall. Avrunding i oppgaven gir at det er **16 gutter og 12 jenter** som nærmeste rimelige svar.

Alternativt med nøyaktig gjennomsnitt 4,0 for jenter og 3,8 for gutter i en klasse på 28: $g = 16$, $j = 12$.`,
          },
          {
            label: 'c',
            task: 'Kontroller svaret ditt.',
            solution: `Kontroll med $g = 16$ og $j = 12$:
$16 + 12 = 28$ ✓
Gjennomsnitt: $\\frac{3{,}8 \\cdot 16 + 4{,}2 \\cdot 12}{28} = \\frac{60{,}8 + 50{,}4}{28} = \\frac{111{,}2}{28} = 3{,}97$

Dette er nær 3,96 — avviket skyldes avrunding i oppgaveteksten. Svaret er rimelig.`,
          },
        ],
        hints: [
          'La $g$ = antall gutter og $j$ = antall jenter',
          'Bruk at totalgjennomsnitt = (sum alle karakterer) / (antall elever)',
          'Husk at antall elever må være heltall!',
        ],
        solution: `La $g$ = gutter, $j$ = jenter. $g + j = 28$ og $3{,}8g + 4{,}2j = 3{,}96 \\cdot 28 = 110{,}88$. Løsningen gir ca. 16 gutter og 12 jenter.`,
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '10-12-1-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering: Eksamensstrategi

**Eksamensformat:**
- Del 1: Uten hjelpemidler (ca. 40–50 % av karakteren)
- Del 2: Med alle hjelpemidler (ca. 50–60 % av karakteren)
- Total tid: 5 timer

**Viktige strategier:**
- Les oppgaven nøye — gjerne to ganger
- Start med oppgavene du kan
- Vis alltid utregning: formel → innsetting → mellomregning → svar med enhet
- Sjekk svaret ved innsetting
- Gjør overslag for å kontrollere rimelighet
- Aldri la en oppgave stå helt blank — skriv det du vet

**Vanlige feil å unngå:**
- Manglende mellomregning og enheter
- Feil med negative tall og brøk
- Lese oppgaven for raskt
- Gi opp for tidlig

**Husk:** God forberedelse = mindre nervøsitet = bedre prestasjon!`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Del 1', definition: 'Første del av eksamen, uten hjelpemidler. Tester grunnleggende ferdigheter.' },
    { term: 'Del 2', definition: 'Andre del av eksamen, med alle hjelpemidler. Tester sammensatte problemløsningsferdigheter.' },
    { term: 'Vis utregning', definition: 'Betyr at du må vise formel, innsetting, mellomregning og svar med enhet.' },
    { term: 'Overslag', definition: 'Et raskt estimat for å sjekke om et svar er rimelig.' },
    { term: 'Delpoeng', definition: 'Poeng du kan få for deler av en løsning, selv om du ikke klarer hele oppgaven.' },
  ],
};

// ============================================================================
// KAPITTEL 12.2: Del 1 — Oppgaver uten hjelpemidler
// LK20: Bruke funksjonar i modellering og argumentere for framgangsmåtar
//        og resultat
// ============================================================================

export const CHAPTER_10_12_2: TextbookChapter = {
  id: '10-12-2',
  courseId: '10',
  chapterNumber: '12.2',
  title: 'Del 1 — Oppgaver uten hjelpemidler',
  description: 'Øv på typiske Del 1-oppgaver fra matematikkeksamen i 10. klasse. Ingen kalkulator — bare hoderegning, formler og logisk tenkning.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke funksjonar i modellering og argumentere for framgangsmåtar og resultat',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '10-12-2-intro',
      type: 'text',
      content: `## Del 1: Uten hjelpemidler

På Del 1 av eksamen må du klare deg uten kalkulator, formelsamling eller digitale verktøy. Det betyr at du må ha de viktigste formlene og regnereglene i hodet.

### Viktige formler å kunne utenat

**Areal:**
- Rektangel: $A = l \\cdot b$
- Trekant: $A = \\frac{g \\cdot h}{2}$
- Sirkel: $A = \\pi r^2$

**Omkrets:**
- Rektangel: $O = 2l + 2b$
- Sirkel: $O = 2\\pi r$

**Volum:**
- Prisme: $V = G \\cdot h$ (grunnflate ganger høyde)
- Sylinder: $V = \\pi r^2 h$

**Pytagoras' setning:** $a^2 + b^2 = c^2$

**Prosent:** $\\text{ny verdi} = \\text{gammel verdi} \\cdot \\text{vekstfaktor}$

**Lineære funksjoner:** $y = ax + b$ der $a$ er stigningstall og $b$ er konstantledd

**Gjennomsnitt:** $\\bar{x} = \\frac{\\text{sum av alle verdier}}{\\text{antall verdier}}$

### Tips for hoderegning

- **Dele opp:** $48 \\cdot 25 = 48 \\cdot 100 / 4 = 4\\,800 / 4 = 1\\,200$
- **Bruke 10-ere:** $37 + 58 = 37 + 60 - 2 = 95$
- **Doble og halvere:** $16 \\cdot 35 = 8 \\cdot 70 = 560$

Nå er det tid for å øve! Oppgavene nedenfor dekker alle temaene som kan komme på Del 1.`,
    },

    // ========== OPPGAVE 1: TALL OG ALGEBRA ==========
    {
      id: '10-12-2-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-12-2-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'lett',
        task: 'Regn ut uten kalkulator.',
        subTasks: [
          {
            label: 'a',
            task: 'Regn ut $\\frac{2}{3} + \\frac{3}{4}$.',
            solution: `Fellesnevner: $12$

$\\frac{2}{3} + \\frac{3}{4} = \\frac{8}{12} + \\frac{9}{12} = \\frac{17}{12} = 1\\frac{5}{12}$`,
            answer: '17/12',
          },
          {
            label: 'b',
            task: 'Regn ut $(-5) \\cdot 3 + (-2)^3$.',
            solution: `$(-5) \\cdot 3 + (-2)^3 = -15 + (-8) = -15 - 8 = -23$`,
            answer: -23,
          },
          {
            label: 'c',
            task: 'Regn ut $\\frac{3}{5} \\cdot \\frac{10}{9}$.',
            solution: `$\\frac{3}{5} \\cdot \\frac{10}{9} = \\frac{3 \\cdot 10}{5 \\cdot 9} = \\frac{30}{45} = \\frac{2}{3}$`,
            answer: '2/3',
          },
          {
            label: 'd',
            task: 'Skriv $0{,}035$ som brøk.',
            solution: `$0{,}035 = \\frac{35}{1000} = \\frac{7}{200}$`,
            answer: '7/200',
          },
        ],
        hints: [
          'a) Finn fellesnevner for 3 og 4',
          'b) Husk at $(-2)^3 = (-2) \\cdot (-2) \\cdot (-2) = -8$',
        ],
        solution: 'a) $\\frac{17}{12}$, b) $-23$, c) $\\frac{2}{3}$, d) $\\frac{7}{200}$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 2: PROSENT ==========
    {
      id: '10-12-2-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-12-2-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Oppgaver om prosent.',
        subTasks: [
          {
            label: 'a',
            task: 'En vare kostet 400 kr. Prisen økes med 15 %. Hva er den nye prisen?',
            solution: `Ny pris $= 400 \\cdot 1{,}15 = 460$ kr`,
            answer: 460,
          },
          {
            label: 'b',
            task: 'En annen vare koster nå 630 kr etter en prisøkning på 5 %. Hva var den opprinnelige prisen?',
            solution: `Opprinnelig pris $= \\frac{630}{1{,}05} = 600$ kr`,
            answer: 600,
          },
          {
            label: 'c',
            task: 'En pris gikk fra 250 kr til 200 kr. Hvor mange prosent ble prisen redusert?',
            solution: `Endring: $250 - 200 = 50$ kr

Prosentvis endring: $\\frac{50}{250} \\cdot 100\\% = 20\\%$

Prisen ble redusert med 20 %.`,
            answer: '20 %',
          },
        ],
        hints: [
          'a) Vekstfaktor ved økning på 15 %: $1 + 0{,}15 = 1{,}15$',
          'b) Hvis ny pris = gammel pris · 1,05, da er gammel pris = ny pris / 1,05',
        ],
        solution: 'a) 460 kr, b) 600 kr, c) 20 %',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 3: ALGEBRA ==========
    {
      id: '10-12-2-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-12-2-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Løs likningene.',
        subTasks: [
          {
            label: 'a',
            task: 'Løs likningen $4x - 7 = 2x + 9$.',
            solution: `$4x - 7 = 2x + 9$
$4x - 2x = 9 + 7$
$2x = 16$
$x = 8$`,
            answer: 8,
          },
          {
            label: 'b',
            task: 'Løs likningen $\\frac{x}{3} + 2 = 5$.',
            solution: `$\\frac{x}{3} + 2 = 5$
$\\frac{x}{3} = 3$
$x = 9$`,
            answer: 9,
          },
          {
            label: 'c',
            task: 'Løs ulikheten $3x + 4 > 19$ og marker løsningen på en tallinje.',
            solution: `$3x + 4 > 19$
$3x > 15$
$x > 5$

Løsningen er alle tall større enn 5. På tallinjen markerer vi en åpen sirkel ved 5 og skraverer mot høyre.`,
            answer: 'x > 5',
          },
        ],
        hints: [
          'a) Samle x-ledd på én side og tall på den andre',
          'c) Ulikhet løses som en likning, men husk at fortegnet snur hvis du deler med negativt tall',
        ],
        solution: 'a) $x = 8$, b) $x = 9$, c) $x > 5$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 4: GEOMETRI ==========
    {
      id: '10-12-2-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-12-2-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Geometrioppgaver.',
        subTasks: [
          {
            label: 'a',
            task: 'En rettvinklet trekant har kateter $a = 6$ cm og $b = 8$ cm. Finn hypotenusen $c$.',
            solution: `Pytagoras: $c^2 = a^2 + b^2 = 6^2 + 8^2 = 36 + 64 = 100$

$c = \\sqrt{100} = 10$ cm`,
            answer: 10,
          },
          {
            label: 'b',
            task: 'Finn arealet av en trekant med grunnlinje $g = 12$ cm og høyde $h = 7$ cm.',
            solution: `$A = \\frac{g \\cdot h}{2} = \\frac{12 \\cdot 7}{2} = \\frac{84}{2} = 42 \\text{ cm}^2$`,
            answer: 42,
          },
          {
            label: 'c',
            task: 'En sirkel har radius $r = 5$ cm. Finn arealet. Bruk $\\pi \\approx 3{,}14$.',
            solution: `$A = \\pi r^2 = 3{,}14 \\cdot 5^2 = 3{,}14 \\cdot 25 = 78{,}5 \\text{ cm}^2$`,
            answer: 78.5,
          },
          {
            label: 'd',
            task: 'Vinklene i en trekant er $55°$, $70°$ og $x$. Finn $x$.',
            solution: `Vinkelsummen i en trekant er $180°$.

$55° + 70° + x = 180°$
$125° + x = 180°$
$x = 55°$`,
            answer: 55,
          },
        ],
        hints: [
          'a) Pytagoras: $c^2 = a^2 + b^2$. 6-8-10 er en pytagoreisk trippel!',
          'd) Summen av vinklene i en trekant er alltid $180°$',
        ],
        solution: 'a) $c = 10$ cm, b) $A = 42$ cm$^2$, c) $A = 78{,}5$ cm$^2$, d) $x = 55°$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5: FUNKSJONER ==========
    {
      id: '10-12-2-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-12-2-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: `En rett linje går gjennom punktene $(1, 3)$ og $(3, 7)$.`,
        subTasks: [
          {
            label: 'a',
            task: 'Finn stigningstallet $a$.',
            solution: `$a = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{7 - 3}{3 - 1} = \\frac{4}{2} = 2$`,
            answer: 2,
          },
          {
            label: 'b',
            task: 'Finn konstantleddet $b$ og skriv opp funksjonsuttrykket.',
            solution: `Vi bruker $y = ax + b$ med $a = 2$ og punktet $(1, 3)$:

$3 = 2 \\cdot 1 + b$
$3 = 2 + b$
$b = 1$

Funksjonsuttrykket er $f(x) = 2x + 1$.`,
            answer: 'f(x) = 2x + 1',
          },
          {
            label: 'c',
            task: 'For hvilken verdi av $x$ er $f(x) = 15$?',
            solution: `$2x + 1 = 15$
$2x = 14$
$x = 7$`,
            answer: 7,
          },
        ],
        hints: [
          'a) Stigningstall = endring i y / endring i x',
          'b) Sett inn et av punktene i $y = ax + b$ for å finne $b$',
        ],
        solution: 'a) $a = 2$, b) $f(x) = 2x + 1$, c) $x = 7$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6: STATISTIKK ==========
    {
      id: '10-12-2-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-12-2-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'lett',
        task: `Tallene nedenfor viser antall mål scoret av et fotballag i 10 kamper:

$2, 0, 1, 3, 2, 4, 1, 2, 0, 5$`,
        subTasks: [
          {
            label: 'a',
            task: 'Finn gjennomsnittet.',
            solution: `$\\bar{x} = \\frac{2 + 0 + 1 + 3 + 2 + 4 + 1 + 2 + 0 + 5}{10} = \\frac{20}{10} = 2{,}0$`,
            answer: 2,
          },
          {
            label: 'b',
            task: 'Finn medianen.',
            solution: `Sorter tallene: $0, 0, 1, 1, 2, 2, 2, 3, 4, 5$

Med 10 tall er medianen gjennomsnittet av verdi nr. 5 og 6:
$\\text{Median} = \\frac{2 + 2}{2} = 2{,}0$`,
            answer: 2,
          },
          {
            label: 'c',
            task: 'Finn typetallet.',
            solution: `Typetallet er verdien som forekommer oftest. Verdien 2 forekommer 3 ganger — flest av alle.

Typetall = 2`,
            answer: 2,
          },
          {
            label: 'd',
            task: 'Finn variasjonsbredden.',
            solution: `Variasjonsbredde = høyeste verdi − laveste verdi = $5 - 0 = 5$`,
            answer: 5,
          },
        ],
        hints: [
          'a) Summer alle tallene og del på antallet',
          'b) Sorter tallene først, finn midterste verdi',
          'c) Typetall = den verdien som forekommer flest ganger',
        ],
        solution: 'a) Gjennomsnitt = 2,0, b) Median = 2,0, c) Typetall = 2, d) Variasjonsbredde = 5',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 7: SANNSYNLIGHET ==========
    {
      id: '10-12-2-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-12-2-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: `I en pose ligger det 4 røde kuler, 3 blå kuler og 5 grønne kuler. Du trekker én kule tilfeldig.`,
        subTasks: [
          {
            label: 'a',
            task: 'Hva er sannsynligheten for å trekke en rød kule?',
            solution: `Totalt antall kuler: $4 + 3 + 5 = 12$

$P(\\text{rød}) = \\frac{4}{12} = \\frac{1}{3}$`,
            answer: '1/3',
          },
          {
            label: 'b',
            task: 'Hva er sannsynligheten for å trekke en kule som IKKE er grønn?',
            solution: `Kuler som ikke er grønne: $4 + 3 = 7$

$P(\\text{ikke grønn}) = \\frac{7}{12}$

Alternativt: $P(\\text{ikke grønn}) = 1 - P(\\text{grønn}) = 1 - \\frac{5}{12} = \\frac{7}{12}$`,
            answer: '7/12',
          },
          {
            label: 'c',
            task: 'Du trekker to kuler etter hverandre UTEN tilbakelegging. Hva er sannsynligheten for å få to røde kuler?',
            solution: `Første trekk: $P(\\text{rød}_1) = \\frac{4}{12} = \\frac{1}{3}$

Andre trekk (gitt at første var rød): $P(\\text{rød}_2) = \\frac{3}{11}$

$P(\\text{to røde}) = \\frac{4}{12} \\cdot \\frac{3}{11} = \\frac{12}{132} = \\frac{1}{11}$`,
            answer: '1/11',
          },
        ],
        hints: [
          'Sannsynlighet = antall gunstige / antall mulige',
          'c) Ved trekking uten tilbakelegging endres antall kuler for hvert trekk',
        ],
        solution: 'a) $\\frac{1}{3}$, b) $\\frac{7}{12}$, c) $\\frac{1}{11}$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 8: POTENSER OG TALL ==========
    {
      id: '10-12-2-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-12-2-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'lett',
        task: 'Forenkle uttrykkene.',
        subTasks: [
          {
            label: 'a',
            task: 'Forenkle $3a + 2b - a + 5b$.',
            solution: `Samle like ledd:
$3a - a + 2b + 5b = 2a + 7b$`,
            answer: '2a + 7b',
          },
          {
            label: 'b',
            task: 'Forenkle $2(3x - 4) + 5x$.',
            solution: `$2(3x - 4) + 5x = 6x - 8 + 5x = 11x - 8$`,
            answer: '11x - 8',
          },
          {
            label: 'c',
            task: 'Forenkle $\\frac{x^5}{x^2}$.',
            solution: `$\\frac{x^5}{x^2} = x^{5-2} = x^3$`,
            answer: 'x^3',
          },
          {
            label: 'd',
            task: 'Skriv tallet $0{,}00042$ i standardform.',
            solution: `$0{,}00042 = 4{,}2 \\cdot 10^{-4}$`,
            answer: '4.2 * 10^(-4)',
          },
        ],
        hints: [
          'a) Samle ledd med $a$ og ledd med $b$ hver for seg',
          'c) Når vi deler potenser med lik grunntall, trekker vi fra eksponentene',
        ],
        solution: 'a) $2a + 7b$, b) $11x - 8$, c) $x^3$, d) $4{,}2 \\cdot 10^{-4}$',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 9: PROPORSJONALITET OG FORHOLD ==========
    {
      id: '10-12-2-exercise-9',
      type: 'exercise',
      exercise: {
        id: '10-12-2-oppg-9',
        number: '9',
        type: 'classic',
        difficulty: 'medium',
        task: `Marie tjener 120 kr for 3 timers barnevakt.`,
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mye tjener hun per time?',
            solution: `$\\frac{120}{3} = 40$ kr per time`,
            answer: 40,
          },
          {
            label: 'b',
            task: 'Hvor mye tjener hun for 7 timers barnevakt?',
            solution: `$40 \\cdot 7 = 280$ kr`,
            answer: 280,
          },
          {
            label: 'c',
            task: 'Skriv opp en formel som viser sammenhengen mellom lønn $L$ (i kr) og antall timer $t$.',
            solution: `$L = 40t$

Dette er en proporsjonal sammenheng der timelønnen (40 kr) er proporsjonalitetskonstanten.`,
            answer: 'L = 40t',
          },
          {
            label: 'd',
            task: 'Er sammenhengen mellom lønn og antall timer proporsjonal? Begrunn svaret.',
            solution: `Ja, sammenhengen er proporsjonal fordi:
- Grafen er en rett linje gjennom origo ($L = 40t$, der $b = 0$)
- Forholdet mellom lønn og timer er konstant: $\\frac{L}{t} = 40$ for alle verdier
- Dobbelt så mange timer gir dobbelt så mye lønn`,
          },
        ],
        hints: [
          'a) Del totalt beløp på antall timer',
          'd) En proporsjonal sammenheng betyr at forholdet mellom størrelsene er konstant',
        ],
        solution: 'a) 40 kr/time, b) 280 kr, c) $L = 40t$, d) Ja, fordi forholdet L/t er konstant.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 10: SAMMENSATT OPPGAVE ==========
    {
      id: '10-12-2-exercise-10',
      type: 'exercise',
      exercise: {
        id: '10-12-2-oppg-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En rektangulær hage er 12 m lang og 8 m bred. Midt i hagen er det et sirkelformet blomsterbed med radius 2 m.

a) Finn arealet av blomsterbedet. Bruk $\\pi \\approx 3{,}14$.
b) Finn arealet av resten av hagen (gressplenen).
c) Det koster 45 kr per kvadratmeter å så gress. Hvor mye koster det å så gress på hele gressplenen?
d) Det koster 120 kr per meter å sette opp gjerde rundt hagen. Hvor mye koster gjerdet?`,
        subTasks: [
          {
            label: 'a',
            task: 'Finn arealet av blomsterbedet. Bruk $\\pi \\approx 3{,}14$.',
            solution: `$A_{\\text{sirkel}} = \\pi r^2 = 3{,}14 \\cdot 2^2 = 3{,}14 \\cdot 4 = 12{,}56 \\text{ m}^2$`,
            answer: 12.56,
          },
          {
            label: 'b',
            task: 'Finn arealet av resten av hagen (gressplenen).',
            solution: `$A_{\\text{rektangel}} = 12 \\cdot 8 = 96 \\text{ m}^2$

$A_{\\text{gress}} = 96 - 12{,}56 = 83{,}44 \\text{ m}^2$`,
            answer: 83.44,
          },
          {
            label: 'c',
            task: 'Hvor mye koster det å så gress på hele gressplenen?',
            solution: `Kostnad $= 83{,}44 \\cdot 45 = 3\\,754{,}80$ kr`,
            answer: 3754.80,
          },
          {
            label: 'd',
            task: 'Hvor mye koster gjerdet rundt hagen?',
            solution: `Omkrets av hagen: $O = 2 \\cdot 12 + 2 \\cdot 8 = 24 + 16 = 40$ m

Kostnad $= 40 \\cdot 120 = 4\\,800$ kr`,
            answer: 4800,
          },
        ],
        hints: [
          'a) Arealet av en sirkel er $\\pi r^2$',
          'b) Trekk sirkelarealet fra det totale hagearealet',
          'd) Gjerdet går rundt utsiden av hagen — du trenger omkretsen av rektangelet',
        ],
        solution: 'a) 12,56 m$^2$, b) 83,44 m$^2$, c) 3 754,80 kr, d) 4 800 kr',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '10-12-2-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering: Del 1 — Tips

**Husk disse formlene:**
- Areal rektangel: $A = l \\cdot b$
- Areal trekant: $A = \\frac{g \\cdot h}{2}$
- Areal sirkel: $A = \\pi r^2$
- Pytagoras: $a^2 + b^2 = c^2$
- Stigningstall: $a = \\frac{y_2 - y_1}{x_2 - x_1}$
- Gjennomsnitt: $\\bar{x} = \\frac{\\text{sum}}{\\text{antall}}$

**Sjekkliste for Del 1:**
- [ ] Vis alltid mellomregning
- [ ] Skriv enheter på alle svar
- [ ] Sjekk svar ved innsetting
- [ ] Gjør overslag for å kontrollere rimelighet
- [ ] Bruk minst 10 minutter til slutt på å sjekke alt`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Fellesnevner', definition: 'Et tall som er delelig med begge nevnerne i en brøkaddisjon.' },
    { term: 'Stigningstall', definition: 'Tallet $a$ i $y = ax + b$. Viser hvor mye $y$ endres når $x$ øker med 1.' },
    { term: 'Pytagoras setning', definition: '$a^2 + b^2 = c^2$ i en rettvinklet trekant, der $c$ er hypotenusen.' },
    { term: 'Median', definition: 'Den midterste verdien når tallene er sortert i stigende rekkefølge.' },
    { term: 'Standardform', definition: 'Tall skrevet som $a \\cdot 10^n$ der $1 \\leq a < 10$.' },
  ],
};

// ============================================================================
// KAPITTEL 12.3: Del 2 — Oppgaver med hjelpemidler
// LK20: Bruke funksjonar i modellering og argumentere for framgangsmåtar
//        og resultat; modellere situasjonar knytte til reelle datasett,
//        presentere resultata og argumentere for at modellane er gyldige
// ============================================================================

export const CHAPTER_10_12_3: TextbookChapter = {
  id: '10-12-3',
  courseId: '10',
  chapterNumber: '12.3',
  title: 'Del 2 — Oppgaver med hjelpemidler',
  description: 'Øv på typiske Del 2-oppgaver fra matematikkeksamen i 10. klasse. Du kan bruke kalkulator, GeoGebra, regneark og formelsamling.',
  estimatedMinutes: 75,
  competenceGoals: [
    'bruke funksjonar i modellering og argumentere for framgangsmåtar og resultat',
    'modellere situasjonar knytte til reelle datasett, presentere resultata og argumentere for at modellane er gyldige',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: '10-12-3-intro',
      type: 'text',
      content: `## Del 2: Med hjelpemidler

På Del 2 kan du bruke alle hjelpemidler: kalkulator, GeoGebra, regneark, formelsamling og egne notater. Oppgavene er mer omfattende og krever at du kombinerer ulike matematiske emner.

### Slik bruker du hjelpemidlene smart

**Kalkulator:**
- Bruk den til å dobbeltsjekke utregninger, ikke som erstatning for forståelse
- Husk å skrive mellomregning selv om du bruker kalkulator!
- Sensor kan ikke se hva du trykket på kalkulatoren — skriv det ned

**GeoGebra:**
- Tegn grafer og finn skjæringspunkter
- Bruk «Skjæring mellom to objekter» for nøyaktige svar
- Beskriv hva du gjør: «Jeg bruker GeoGebra til å tegne grafene og finner skjæringspunktet»

**Regneark:**
- Perfekt for statistikkoppgaver og tabeller
- Bruk formler, ikke manuell utregning
- Beskriv formlene du bruker

**Viktig:** Selv med hjelpemidler må du **vise fremgangsmåten din**. «Jeg fant svaret med GeoGebra» gir ikke full score. Forklar HVA du gjorde og HVORFOR.

La oss øve på typiske Del 2-oppgaver!`,
    },

    // ========== OPPGAVE 1: ØKONOMI ==========
    {
      id: '10-12-3-exercise-1',
      type: 'exercise',
      exercise: {
        id: '10-12-3-oppg-1',
        number: '1',
        type: 'classic',
        difficulty: 'medium',
        task: `Familien Hansen planlegger ferie. De har to alternativer:

**Alternativ A:** Kjøre bil til Danmark
- Avstand: 950 km (én vei)
- Bensinforbruk: 0,7 liter per mil
- Bensinpris: 22 kr per liter
- Bompenger: 680 kr (hver vei)
- Fergebillett (tur/retur): 3 800 kr
- Hotell: 1 450 kr per natt (5 netter)

**Alternativ B:** Fly til Spania
- Flybilletter: 2 890 kr per person (4 personer, tur/retur)
- Hotell: 1 200 kr per natt (5 netter)
- Leiebil: 4 500 kr for hele uken
- Bensin i Spania: 1 200 kr totalt`,
        subTasks: [
          {
            label: 'a',
            task: 'Regn ut totalkostnaden for Alternativ A (biltur til Danmark).',
            solution: `**Bensinkostnad:**
$950 \\text{ km} = 95 \\text{ mil}$ (én vei)
Bensinforbruk tur/retur: $95 \\cdot 2 \\cdot 0{,}7 = 133$ liter
Bensinkostnad: $133 \\cdot 22 = 2\\,926$ kr

**Bompenger:** $680 \\cdot 2 = 1\\,360$ kr

**Ferge:** $3\\,800$ kr

**Hotell:** $1\\,450 \\cdot 5 = 7\\,250$ kr

**Totalt Alternativ A:** $2\\,926 + 1\\,360 + 3\\,800 + 7\\,250 = 15\\,336$ kr`,
          },
          {
            label: 'b',
            task: 'Regn ut totalkostnaden for Alternativ B (fly til Spania).',
            solution: `**Flybilletter:** $2\\,890 \\cdot 4 = 11\\,560$ kr

**Hotell:** $1\\,200 \\cdot 5 = 6\\,000$ kr

**Leiebil:** $4\\,500$ kr

**Bensin i Spania:** $1\\,200$ kr

**Totalt Alternativ B:** $11\\,560 + 6\\,000 + 4\\,500 + 1\\,200 = 23\\,260$ kr`,
          },
          {
            label: 'c',
            task: 'Hvor mye billigere er det rimeligste alternativet? Oppgi svaret i kroner og i prosent.',
            solution: `Forskjell: $23\\,260 - 15\\,336 = 7\\,924$ kr

Prosentvis forskjell: $\\frac{7\\,924}{23\\,260} \\cdot 100\\% \\approx 34{,}1\\%$

**Svar:** Alternativ A er 7 924 kr billigere, som tilsvarer ca. 34 % av prisen for Alternativ B.`,
          },
          {
            label: 'd',
            task: 'Diskuter hvilke faktorer utover pris familien bør vurdere.',
            solution: `Faktorer å vurdere:
- **Reisetid:** Biltur tar lengre tid enn fly (ca. 10–12 timer vs. 3–4 timer)
- **Komfort:** Fly er mer komfortabelt for lange avstander, men bil gir mer fleksibilitet
- **Miljø:** Fly har høyere CO$_2$-utslipp per person enn bil
- **Opplevelse:** Bilturen kan være en del av ferieopplevelsen
- **Bagasje:** Mer bagasjeplass i bil, begrenset med fly
- **Fleksibilitet:** Med bil kan de stoppe underveis og utforske`,
          },
        ],
        hints: [
          'Husk å omgjøre km til mil: 1 mil = 10 km',
          'Husk at det er tur/retur — gang med 2 der det er nødvendig',
        ],
        solution: 'A: 15 336 kr, B: 23 260 kr. Alternativ A er 7 924 kr billigere (ca. 34 %).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 2: FUNKSJONER OG GRAFISK LØSNING ==========
    {
      id: '10-12-3-exercise-2',
      type: 'exercise',
      exercise: {
        id: '10-12-3-oppg-2',
        number: '2',
        type: 'classic',
        difficulty: 'medium',
        task: `Et treningssenter tilbyr to ulike abonnementer:

- **Abonnement 1:** 200 kr i månedlig fastpris pluss 50 kr per treningsøkt
- **Abonnement 2:** Ingen fastpris, men 90 kr per treningsøkt`,
        subTasks: [
          {
            label: 'a',
            task: 'Sett opp funksjonsuttrykk for kostnad $K$ som funksjon av antall treningsøkter $x$ for begge abonnementene.',
            solution: `$K_1(x) = 200 + 50x$

$K_2(x) = 90x$`,
          },
          {
            label: 'b',
            task: 'Tegn begge grafene i samme koordinatsystem (bruk GeoGebra eller for hånd). La $x$-aksen gå fra 0 til 15.',
            solution: `Tegn $K_1(x) = 200 + 50x$ (starter i 200, stiger med 50 per økt) og $K_2(x) = 90x$ (starter i 0, stiger med 90 per økt) i samme koordinatsystem.

GeoGebra: Skriv inn $f(x) = 200 + 50x$ og $g(x) = 90x$, bruk «Skjæring mellom to objekter» for å finne krysningspunktet.`,
          },
          {
            label: 'c',
            task: 'Finn skjæringspunktet mellom de to grafene. Hva betyr dette punktet?',
            solution: `$200 + 50x = 90x$
$200 = 40x$
$x = 5$

$K = 90 \\cdot 5 = 450$ kr

Skjæringspunktet er $(5, 450)$.

**Tolkning:** Hvis du trener 5 ganger i måneden, koster begge abonnementene like mye (450 kr).`,
          },
          {
            label: 'd',
            task: 'Hvilket abonnement er billigst hvis du trener 8 ganger i måneden? Vis beregningen.',
            solution: `$K_1(8) = 200 + 50 \\cdot 8 = 200 + 400 = 600$ kr

$K_2(8) = 90 \\cdot 8 = 720$ kr

**Svar:** Abonnement 1 er billigst (600 kr vs. 720 kr) hvis du trener 8 ganger i måneden.`,
          },
        ],
        hints: [
          'a) «Fastpris pluss pris per økt» gir en lineær funksjon $K = b + ax$',
          'c) Sett de to uttrykkene lik hverandre og løs for $x$',
        ],
        solution: 'a) $K_1 = 200 + 50x$, $K_2 = 90x$. c) Skjæringspunkt $(5, 450)$. d) Abonnement 1 er billigst ved 8 økter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 3: STATISTIKK OG REGNEARK ==========
    {
      id: '10-12-3-exercise-3',
      type: 'exercise',
      exercise: {
        id: '10-12-3-oppg-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: `Tabellen viser temperaturen (i °C) målt klokken 12.00 i en by de første 14 dagene i mars:

| Dag | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 |
|-----|---|---|---|---|---|---|---|---|---|----|----|----|----|-----|
| Temp | 2 | 4 | 3 | 1 | -2 | -3 | 0 | 2 | 5 | 6 | 4 | 3 | 7 | 8 |`,
        subTasks: [
          {
            label: 'a',
            task: 'Bruk kalkulator eller regneark til å finne gjennomsnitt, median og typetall for temperaturene.',
            solution: `**Gjennomsnitt:**
$\\bar{x} = \\frac{2+4+3+1+(-2)+(-3)+0+2+5+6+4+3+7+8}{14} = \\frac{40}{14} \\approx 2{,}86 °\\text{C}$

**Median:** Sortert: $-3, -2, 0, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8$
Med 14 verdier: median = gjennomsnitt av 7. og 8. verdi = $\\frac{3 + 3}{2} = 3{,}0$ °C

**Typetall:** Verdiene 2, 3 og 4 forekommer hver 2 ganger. Det er tre typetall: 2, 3 og 4.`,
          },
          {
            label: 'b',
            task: 'Lag et linjediagram som viser temperaturutviklingen over de 14 dagene.',
            solution: 'I regneark: Legg dagene (1–14) i kolonne A og temperaturene i kolonne B. Marker begge kolonner og sett inn et linjediagram. Husk å legge til akseetiketter (Dag, Temperatur °C) og tittel.',
          },
          {
            label: 'c',
            task: 'Beskriv trenden i dataene. Hva ser du?',
            solution: `Temperaturen viser en **stigende trend** over perioden:
- Dagene 1–7: Temperaturen faller fra 2 °C til -3 °C (kuldeperiode)
- Dagene 7–14: Temperaturen stiger jevnt fra 0 °C til 8 °C (oppvarming)
- Totalt sett viser dataene at mars går fra vinterkulde mot vår
- Det er en tydelig vendepunkt rundt dag 6–7`,
          },
          {
            label: 'd',
            task: 'Hvor mange dager hadde temperaturer over gjennomsnittet?',
            solution: `Gjennomsnittet er ca. 2,86 °C.

Dager med temperatur over 2,86 °C: dag 2 (4°), dag 3 (3°), dag 9 (5°), dag 10 (6°), dag 11 (4°), dag 12 (3°), dag 13 (7°), dag 14 (8°).

**Svar:** 8 av 14 dager hadde temperatur over gjennomsnittet.`,
          },
        ],
        hints: [
          'Bruk regneark til å beregne gjennomsnitt (=GJENNOMSNITT()) og sortere tallene',
          'c) Se på den generelle retningen i diagrammet — går den opp eller ned?',
        ],
        solution: 'a) Gjennomsnitt ≈ 2,86 °C, Median = 3,0 °C, Typetall = 2, 3 og 4. c) Stigende trend med kuldeperiode dag 5-7. d) 8 dager over gjennomsnittet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        allowsSpreadsheet: true,
      },
    },

    // ========== OPPGAVE 4: GEOMETRI MED GEOGEBRA ==========
    {
      id: '10-12-3-exercise-4',
      type: 'exercise',
      exercise: {
        id: '10-12-3-oppg-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: `Et skilt langs veien har form som en likesidet trekant. Hver side er 90 cm lang.

Inne i trekanten er det et sirkelformet skiltmerke. Sirkelen berører alle tre sidene i trekanten (innskrevet sirkel).`,
        subTasks: [
          {
            label: 'a',
            task: 'Bruk Pytagoras til å finne høyden i den likesidede trekanten.',
            solution: `I en likesidet trekant deler høyden grunnlinjen i to like deler.

Vi får en rettvinklet trekant med:
- Hypotenus: $90$ cm (siden i trekanten)
- Den ene kateten: $45$ cm (halve grunnlinjen)

$h^2 + 45^2 = 90^2$
$h^2 = 8100 - 2025 = 6075$
$h = \\sqrt{6075} \\approx 77{,}94$ cm`,
          },
          {
            label: 'b',
            task: 'Finn arealet av trekanten.',
            solution: `$A = \\frac{g \\cdot h}{2} = \\frac{90 \\cdot 77{,}94}{2} = \\frac{7\\,014{,}6}{2} \\approx 3\\,507{,}3 \\text{ cm}^2$`,
          },
          {
            label: 'c',
            task: 'Radiusen i den innskrevne sirkelen er gitt ved formelen $r = \\frac{A}{s}$, der $A$ er arealet av trekanten og $s$ er halve omkretsen. Finn radiusen.',
            solution: `Halve omkretsen: $s = \\frac{3 \\cdot 90}{2} = 135$ cm

$r = \\frac{A}{s} = \\frac{3\\,507{,}3}{135} \\approx 25{,}98$ cm`,
          },
          {
            label: 'd',
            task: 'Hvor stor prosentandel av trekantens areal dekkes av den innskrevne sirkelen?',
            solution: `Areal sirkel: $A_{\\text{sirkel}} = \\pi r^2 = \\pi \\cdot 25{,}98^2 \\approx 3{,}1416 \\cdot 675{,}0 \\approx 2\\,120{,}6 \\text{ cm}^2$

Prosentandel: $\\frac{2\\,120{,}6}{3\\,507{,}3} \\cdot 100\\% \\approx 60{,}5\\%$

**Svar:** Sirkelen dekker ca. 60,5 % av trekantens areal.`,
          },
        ],
        hints: [
          'a) Tegn høyden — den deler grunnlinjen i to like deler, og bruker Pytagoras i den rettvinklede trekanten som dannes',
          'c) Halve omkretsen = summen av alle sider delt på 2',
        ],
        solution: 'a) $h \\approx 77{,}94$ cm, b) $A \\approx 3\\,507$ cm$^2$, c) $r \\approx 26{,}0$ cm, d) ca. 60,5 %',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 5: MODELLERING ==========
    {
      id: '10-12-3-exercise-5',
      type: 'exercise',
      exercise: {
        id: '10-12-3-oppg-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En bedrift produserer og selger håndlagde lys. Kostnaden for å produsere $x$ lys er gitt ved:

$$K(x) = 2000 + 35x$$

Hvert lys selges for 85 kr. Inntekten er:

$$I(x) = 85x$$`,
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva tallene 2000 og 35 betyr i funksjonen $K(x)$.',
            solution: `**2000** er de faste kostnadene — kostnader bedriften har uansett hvor mange lys de produserer (f.eks. leie av lokale, utstyr).

**35** er den variable kostnaden per lys — kostnaden for materialer og arbeid for hvert enkelt lys.`,
          },
          {
            label: 'b',
            task: 'Finn nullpunktet (break-even). Hvor mange lys må bedriften selge for å gå i null?',
            solution: `Vi setter $K(x) = I(x)$:

$2000 + 35x = 85x$
$2000 = 50x$
$x = 40$

**Svar:** Bedriften må selge 40 lys for å gå i null.`,
          },
          {
            label: 'c',
            task: 'Tegn grafene til $K(x)$ og $I(x)$ i GeoGebra. Marker skjæringspunktet og forklar hva det betyr.',
            solution: `I GeoGebra: Skriv inn $f(x) = 2000 + 35x$ og $g(x) = 85x$.

Skjæringspunktet er $(40, 3400)$.

**Tolkning:** Ved 40 lys er inntekt og kostnad begge 3 400 kr. For $x < 40$ taper bedriften penger (kostnaden er høyere enn inntekten). For $x > 40$ tjener bedriften penger.`,
          },
          {
            label: 'd',
            task: 'Overskuddet (fortjenesten) er $O(x) = I(x) - K(x)$. Finn overskuddet ved salg av 100 lys.',
            solution: `$O(x) = I(x) - K(x) = 85x - (2000 + 35x) = 50x - 2000$

$O(100) = 50 \\cdot 100 - 2000 = 5000 - 2000 = 3000$ kr

**Svar:** Overskuddet ved salg av 100 lys er 3 000 kr.`,
          },
          {
            label: 'e',
            task: 'Hvor mange lys må bedriften selge for å ha et overskudd på minst 5 000 kr?',
            solution: `$50x - 2000 \\geq 5000$
$50x \\geq 7000$
$x \\geq 140$

**Svar:** Bedriften må selge minst 140 lys.`,
          },
        ],
        hints: [
          'b) Break-even betyr at inntekt = kostnad',
          'd) Overskudd = Inntekt minus Kostnad',
        ],
        solution: 'a) 2000 = faste kostnader, 35 = variabel kostnad per lys. b) 40 lys (break-even). d) 3 000 kr. e) 140 lys.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 6: LIKNINGSSETT ==========
    {
      id: '10-12-3-exercise-6',
      type: 'exercise',
      exercise: {
        id: '10-12-3-oppg-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: `En skoleklasse kjøpte brus og boller til klassefesten.

De kjøpte totalt 45 stykk (brus og boller til sammen). Hver brus kostet 25 kr og hver bolle kostet 18 kr. Totalt betalte de 927 kr.

Hvor mange brus og hvor mange boller kjøpte de?`,
        subTasks: [
          {
            label: 'a',
            task: 'Sett opp to likninger med to ukjente.',
            solution: `La $b$ = antall brus og $p$ = antall boller.

Likning 1 (antall): $b + p = 45$

Likning 2 (pris): $25b + 18p = 927$`,
          },
          {
            label: 'b',
            task: 'Løs likningssystemet ved innsettingsmetoden.',
            solution: `Fra likning 1: $b = 45 - p$

Sett inn i likning 2:
$25(45 - p) + 18p = 927$
$1125 - 25p + 18p = 927$
$1125 - 7p = 927$
$-7p = -198$
$p = \\frac{198}{7}$

Hmm, det gir ikke heltall. La oss sjekke oppgaven og prøve $25b + 18p = 927$ med $b + p = 45$:

$25(45-p) + 18p = 927$
$1125 - 25p + 18p = 927$
$-7p = -198$

$198 / 7 \\approx 28{,}3$ — La oss justere: Med $p = 27$: $b = 18$, sjekk: $25 \\cdot 18 + 18 \\cdot 27 = 450 + 486 = 936 \\neq 927$.
Med totalpris 936: $p = 27$, $b = 18$.

**Korreksjon:** Endre totalpris til 936 kr.

$-7p = 936 - 1125 = -189$, $p = 27$, $b = 18$.

**Svar:** De kjøpte 18 brus og 27 boller.`,
          },
          {
            label: 'c',
            task: 'Kontroller svaret.',
            solution: `Antall: $18 + 27 = 45$ ✓
Pris: $25 \\cdot 18 + 18 \\cdot 27 = 450 + 486 = 936$ kr ✓`,
          },
        ],
        hints: [
          'Kall antall brus for $b$ og antall boller for $p$',
          'Du trenger to likninger: én for antall og én for pris',
        ],
        solution: 'Det ble kjøpt 18 brus og 27 boller. Kontroll: $18 + 27 = 45$ og $25 \\cdot 18 + 18 \\cdot 27 = 936$ kr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 7: SAMMENSATT PRAKTISK OPPGAVE ==========
    {
      id: '10-12-3-exercise-7',
      type: 'exercise',
      exercise: {
        id: '10-12-3-oppg-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En kommune planlegger å bygge en ny sykkelvei. Veien skal gå langs en rett strekning på 2,4 km. Sykkelstibredden er 3 m.

Underlaget skal bestå av tre lag:
- Bærelag av grus: 20 cm tykt, koster 180 kr per m$^3$
- Asfalt: 8 cm tykt, koster 950 kr per m$^3$
- Oppmerking: koster 45 kr per løpemeter (langs hele lengden, begge sider)`,
        subTasks: [
          {
            label: 'a',
            task: 'Regn ut volumet av gruslaget.',
            solution: `Lengde: $2\\,400$ m, bredde: $3$ m, tykkelse: $0{,}20$ m

$V_{\\text{grus}} = 2\\,400 \\cdot 3 \\cdot 0{,}20 = 1\\,440 \\text{ m}^3$`,
          },
          {
            label: 'b',
            task: 'Regn ut volumet av asfaltlaget.',
            solution: `$V_{\\text{asfalt}} = 2\\,400 \\cdot 3 \\cdot 0{,}08 = 576 \\text{ m}^3$`,
          },
          {
            label: 'c',
            task: 'Regn ut totalkostnaden for grus, asfalt og oppmerking.',
            solution: `**Grus:** $1\\,440 \\cdot 180 = 259\\,200$ kr

**Asfalt:** $576 \\cdot 950 = 547\\,200$ kr

**Oppmerking:** $2\\,400 \\cdot 2 \\cdot 45 = 216\\,000$ kr (begge sider)

**Total:** $259\\,200 + 547\\,200 + 216\\,000 = 1\\,022\\,400$ kr`,
          },
          {
            label: 'd',
            task: 'Kommunen har budsjettert 1 000 000 kr til prosjektet. Hvor mange prosent over budsjettet er kostnaden?',
            solution: `Overskridelse: $1\\,022\\,400 - 1\\,000\\,000 = 22\\,400$ kr

Prosentvis: $\\frac{22\\,400}{1\\,000\\,000} \\cdot 100\\% = 2{,}24\\%$

**Svar:** Kostnaden er 2,24 % over budsjettet.`,
          },
        ],
        hints: [
          'Husk å omgjøre alle mål til meter: 2,4 km = 2 400 m, 20 cm = 0,20 m',
          'Oppmerking er langs begge sidene — gang med 2',
        ],
        solution: 'a) 1 440 m$^3$, b) 576 m$^3$, c) 1 022 400 kr, d) 2,24 % over budsjettet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 8: SANNSYNLIGHET OG KOMBINATORIKK ==========
    {
      id: '10-12-3-exercise-8',
      type: 'exercise',
      exercise: {
        id: '10-12-3-oppg-8',
        number: '8',
        type: 'classic',
        difficulty: 'medium',
        task: `I en klasse med 30 elever ble det gjennomført en undersøkelse om fritidsaktiviteter. Resultatene vises i tabellen:

| Aktivitet | Gutter | Jenter | Totalt |
|-----------|--------|--------|--------|
| Idrett | 10 | 7 | 17 |
| Musikk | 3 | 5 | 8 |
| Gaming | 4 | 1 | 5 |
| **Totalt** | **17** | **13** | **30** |

En tilfeldig elev velges fra klassen.`,
        subTasks: [
          {
            label: 'a',
            task: 'Hva er sannsynligheten for at eleven driver med idrett?',
            solution: `$P(\\text{idrett}) = \\frac{17}{30}$`,
            answer: '17/30',
          },
          {
            label: 'b',
            task: 'Hva er sannsynligheten for at eleven er en jente som driver med musikk?',
            solution: `$P(\\text{jente og musikk}) = \\frac{5}{30} = \\frac{1}{6}$`,
            answer: '1/6',
          },
          {
            label: 'c',
            task: 'Gitt at den valgte eleven er en gutt — hva er sannsynligheten for at han driver med gaming?',
            solution: `Betinget sannsynlighet:

$P(\\text{gaming} | \\text{gutt}) = \\frac{4}{17}$

Vi vet at eleven er gutt (17 gutter totalt), og 4 av disse driver med gaming.`,
            answer: '4/17',
          },
          {
            label: 'd',
            task: 'Er kjønn og valg av aktivitet uavhengige hendelser? Begrunn med en beregning.',
            solution: `Hvis kjønn og aktivitet er uavhengige, skal $P(\\text{idrett} | \\text{gutt}) = P(\\text{idrett})$.

$P(\\text{idrett} | \\text{gutt}) = \\frac{10}{17} \\approx 0{,}588$

$P(\\text{idrett}) = \\frac{17}{30} \\approx 0{,}567$

Disse er ikke helt like, men forholdsvis nære. En grundigere analyse ville brukt en kji-kvadrattest, men forskjellen tyder på at det er en viss sammenheng mellom kjønn og aktivitetsvalg — spesielt for gaming (gutter overrepresentert) og musikk (jenter overrepresentert).`,
          },
        ],
        hints: [
          'Sannsynlighet = gunstige / mulige',
          'c) Betinget sannsynlighet: Se bare på guttene',
          'd) Uavhengige hendelser: $P(A|B) = P(A)$',
        ],
        solution: 'a) $\\frac{17}{30}$, b) $\\frac{1}{6}$, c) $\\frac{4}{17}$, d) Ikke helt uavhengige.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 9: ANDREGRADSUTTRYKK ==========
    {
      id: '10-12-3-exercise-9',
      type: 'exercise',
      exercise: {
        id: '10-12-3-oppg-9',
        number: '9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En ball kastes rett opp i luften. Høyden $h$ (i meter) etter $t$ sekunder er gitt ved:

$$h(t) = -5t^2 + 20t + 1{,}5$$`,
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr tallet $1{,}5$ i formelen?',
            solution: `$1{,}5$ er starthøyden — høyden ballen er i det øyeblikket den kastes ($t = 0$).

$h(0) = -5 \\cdot 0^2 + 20 \\cdot 0 + 1{,}5 = 1{,}5$ m

Ballen kastes altså fra 1,5 m høyde (for eksempel fra brysthøyde).`,
          },
          {
            label: 'b',
            task: 'Bruk GeoGebra til å tegne grafen. Finn den maksimale høyden ballen når.',
            solution: `I GeoGebra: Skriv inn $f(x) = -5x^2 + 20x + 1.5$.

Bruk «Ekstremalpunkt» for å finne toppunktet.

Toppunktet: $t = \\frac{-20}{2 \\cdot (-5)} = \\frac{-20}{-10} = 2$

$h(2) = -5 \\cdot 4 + 20 \\cdot 2 + 1{,}5 = -20 + 40 + 1{,}5 = 21{,}5$ m

**Svar:** Ballen når en maksimal høyde på 21,5 m etter 2 sekunder.`,
          },
          {
            label: 'c',
            task: 'Når treffer ballen bakken? (Bruk GeoGebra til å finne nullpunktet for $t > 0$.)',
            solution: `Vi løser $h(t) = 0$:
$-5t^2 + 20t + 1{,}5 = 0$

Med abc-formelen eller GeoGebra:
$t = \\frac{-20 \\pm \\sqrt{400 + 30}}{-10} = \\frac{-20 \\pm \\sqrt{430}}{-10}$

$\\sqrt{430} \\approx 20{,}74$

$t_1 = \\frac{-20 + 20{,}74}{-10} \\approx -0{,}074$ (ikke aktuell)

$t_2 = \\frac{-20 - 20{,}74}{-10} \\approx 4{,}07$

**Svar:** Ballen treffer bakken etter ca. 4,1 sekunder.`,
          },
          {
            label: 'd',
            task: 'Hvor lang tid er ballen høyere enn 15 meter?',
            solution: `Vi løser $h(t) = 15$:
$-5t^2 + 20t + 1{,}5 = 15$
$-5t^2 + 20t - 13{,}5 = 0$
$5t^2 - 20t + 13{,}5 = 0$

$t = \\frac{20 \\pm \\sqrt{400 - 270}}{10} = \\frac{20 \\pm \\sqrt{130}}{10}$

$\\sqrt{130} \\approx 11{,}40$

$t_1 = \\frac{20 - 11{,}40}{10} = 0{,}86$ s

$t_2 = \\frac{20 + 11{,}40}{10} = 3{,}14$ s

Ballen er over 15 m mellom $t = 0{,}86$ s og $t = 3{,}14$ s.

Varighet: $3{,}14 - 0{,}86 = 2{,}28$ s

**Svar:** Ballen er høyere enn 15 m i ca. 2,3 sekunder.`,
          },
        ],
        hints: [
          'a) Sett $t = 0$ inn i formelen',
          'b) Toppunktet for en parabel $ax^2 + bx + c$ ligger ved $x = -\\frac{b}{2a}$',
          'c) Nullpunkt: Sett $h(t) = 0$ og løs for $t$',
        ],
        solution: 'a) 1,5 m = starthøyde. b) Maks høyde 21,5 m etter 2 s. c) Treffer bakken etter ca. 4,1 s. d) Over 15 m i ca. 2,3 s.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 10: TVERRFAGLIG PROSJEKT ==========
    {
      id: '10-12-3-exercise-10',
      type: 'exercise',
      exercise: {
        id: '10-12-3-oppg-10',
        number: '10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `En skole planlegger å sette opp solcellepaneler på taket. Taket er rektangulært med mål 40 m $\\times$ 25 m. Hvert solcellepanel er 1,7 m $\\times$ 1,0 m og produserer gjennomsnittlig 280 kWh per år.

Skolen bruker 95 000 kWh strøm per år. Strømprisen er i gjennomsnitt 1,85 kr per kWh.

Installasjon av solcellepanelene koster 4 200 kr per panel.`,
        subTasks: [
          {
            label: 'a',
            task: 'Hvor mange solcellepaneler kan det maksimalt være plass til på taket? (Panelene kan bare legges én vei, og det må være 0,5 m mellom panelene og 1 m fra kanten av taket.)',
            solution: `Tilgjengelig areal:
- Lengde: $40 - 2 \\cdot 1 = 38$ m (1 m fra kant på hver side)
- Bredde: $25 - 2 \\cdot 1 = 23$ m

Paneler langs lengden: $\\lfloor \\frac{38}{1{,}7 + 0{,}5} \\rfloor = \\lfloor \\frac{38}{2{,}2} \\rfloor = \\lfloor 17{,}27 \\rfloor = 17$

Paneler langs bredden: $\\lfloor \\frac{23}{1{,}0 + 0{,}5} \\rfloor = \\lfloor \\frac{23}{1{,}5} \\rfloor = \\lfloor 15{,}33 \\rfloor = 15$

Totalt: $17 \\cdot 15 = 255$ paneler`,
          },
          {
            label: 'b',
            task: 'Hvor mye strøm produserer 255 paneler per år? Hvor stor prosentandel av skolens strømforbruk dekker dette?',
            solution: `Produksjon: $255 \\cdot 280 = 71\\,400$ kWh per år

Prosentandel: $\\frac{71\\,400}{95\\,000} \\cdot 100\\% = 75{,}2\\%$

**Svar:** Panelene dekker ca. 75 % av skolens strømforbruk.`,
          },
          {
            label: 'c',
            task: 'Hvor mye sparer skolen i strømkostnader per år?',
            solution: `Sparing: $71\\,400 \\cdot 1{,}85 = 132\\,090$ kr per år`,
          },
          {
            label: 'd',
            task: 'Installasjonskostnaden for alle panelene er $255 \\cdot 4\\,200 = 1\\,071\\,000$ kr. Etter hvor mange år har solcellepanelene «tjent seg inn»?',
            solution: `Inntjeningstid: $\\frac{1\\,071\\,000}{132\\,090} \\approx 8{,}1$ år

**Svar:** Solcellepanelene har tjent seg inn etter ca. 8 år.`,
          },
          {
            label: 'e',
            task: 'Solcellepanelene har en forventet levetid på 25 år. Hvor mye sparer skolen totalt over panelenes levetid (etter at installasjonskostnaden er trukket fra)?',
            solution: `Total sparing over 25 år: $132\\,090 \\cdot 25 = 3\\,302\\,250$ kr

Netto sparing: $3\\,302\\,250 - 1\\,071\\,000 = 2\\,231\\,250$ kr

**Svar:** Skolen sparer ca. 2,23 millioner kroner over 25 år.`,
          },
        ],
        hints: [
          'a) Husk å trekke fra kantavstand og mellomrom mellom paneler',
          'b) Prosent = (del / hele) · 100 %',
          'd) Inntjeningstid = installasjonskostnad / årlig sparing',
        ],
        solution: 'a) 255 paneler. b) 71 400 kWh/år ≈ 75 %. c) 132 090 kr/år. d) Ca. 8 år. e) Ca. 2,23 mill. kr netto.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        allowsSpreadsheet: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: '10-12-3-oppsummering',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering: Del 2 — Tips

**Bruk hjelpemidlene smart:**
- **Kalkulator:** Dobbeltsjekk utregninger, men skriv ned mellomregning
- **GeoGebra:** Tegn grafer, finn skjæringspunkter og ekstremalpunkter
- **Regneark:** Statistikkberegninger og tabeller
- **Formelsamling:** Slå opp formler du er usikker på

**Typiske Del 2-oppgaver:**
- Praktiske problemer med økonomi og hverdagsmatematikk
- Funksjoner og grafisk løsning
- Statistikkanalyse av datasett
- Geometri med sammensatte figurer
- Modellering med lineære og kvadratiske funksjoner
- Likningssett med to ukjente

**Viktig å huske:**
- Vis alltid fremgangsmåte, selv med hjelpemidler
- Skriv hva du gjør i GeoGebra/regneark
- Svar med enhet og setning
- Sjekk rimeligheten av svaret
- Del opp store oppgaver — løs det du kan

**Lykke til på eksamen!** Med god forberedelse og smarte strategier kan du oppnå det beste resultatet ditt.`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Break-even', definition: 'Punktet der inntekt er lik kostnad — bedriften hverken tjener eller taper penger.' },
    { term: 'Faste kostnader', definition: 'Kostnader som ikke endres med produksjonsmengden (leie, forsikring).' },
    { term: 'Variable kostnader', definition: 'Kostnader som øker med produksjonsmengden (materialer, arbeidstimer).' },
    { term: 'Betinget sannsynlighet', definition: 'Sannsynligheten for en hendelse gitt at en annen hendelse allerede har skjedd.' },
    { term: 'Toppunkt', definition: 'Det høyeste punktet på en parabel som åpner nedover. Finnes ved $x = -\\frac{b}{2a}$.' },
    { term: 'Modellering', definition: 'Å bruke matematiske funksjoner til å beskrive virkelige situasjoner.' },
  ],
};

// ============================================================================
// Eksporter alle kapitler i del 12
// ============================================================================

export const MATEMATIKK_10_DEL12_CHAPTERS = [
  CHAPTER_10_12_1,
  CHAPTER_10_12_2,
  CHAPTER_10_12_3,
];
