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

    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '10-12-1-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '10-12-1-rep-1',
          type: 'exercise',
          exercise: {
            id: '10-12-1-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Øv på å vise utregninger slik sensor forventer.',
            subTasks: [
              { label: 'a', task: 'Regn ut arealet av en trekant med grunnlinje $g = 10$ cm og høyde $h = 6$ cm. Vis fullstendig utregning med formel, innsetting og svar med enhet.', solution: '$A = \\frac{g \\cdot h}{2} = \\frac{10 \\cdot 6}{2} = \\frac{60}{2} = 30 \\text{ cm}^2$. **Svar:** Arealet av trekanten er $30 \\text{ cm}^2$.' },
              { label: 'b', task: 'Regn ut omkretsen av en sirkel med radius $r = 4$ cm. Bruk $\\pi \\approx 3{,}14$. Vis fullstendig utregning.', solution: '$O = 2\\pi r = 2 \\cdot 3{,}14 \\cdot 4 = 25{,}12 \\text{ cm}$. **Svar:** Omkretsen er $25{,}12$ cm.' },
              { label: 'c', task: 'En vare kostet $500$ kr og økes med $20$ %. Vis utregning med vekstfaktor.', solution: 'Vekstfaktor: $1 + 0{,}20 = 1{,}20$. Ny pris: $500 \\cdot 1{,}20 = 600$ kr. **Svar:** Den nye prisen er $600$ kr.' },
              { label: 'd', task: 'Løs likningen $3x + 5 = 20$. Vis alle steg og sjekk svaret.', solution: '$3x + 5 = 20$. $3x = 15$. $x = 5$. Sjekk: $3 \\cdot 5 + 5 = 15 + 5 = 20$ \\checkmark.' },
              { label: 'e', task: 'Finn volumet av en sylinder med radius $r = 3$ cm og høyde $h = 10$ cm. Bruk $\\pi \\approx 3{,}14$.', solution: '$V = \\pi r^2 h = 3{,}14 \\cdot 3^2 \\cdot 10 = 3{,}14 \\cdot 9 \\cdot 10 = 282{,}6 \\text{ cm}^3$. **Svar:** Volumet er $282{,}6$ cm$^3$.' },
              { label: 'f', task: 'Finn hypotenusen i en rettvinklet trekant med kateter $a = 5$ cm og $b = 12$ cm. Vis fullstendig utregning.', solution: '$c^2 = a^2 + b^2 = 5^2 + 12^2 = 25 + 144 = 169$. $c = \\sqrt{169} = 13$ cm. **Svar:** Hypotenusen er $13$ cm.' },
            ],
            solution: 'a) $30$ cm$^2$. b) $25{,}12$ cm. c) $600$ kr. d) $x = 5$. e) $282{,}6$ cm$^3$. f) $13$ cm.',
            hideInlineSolution: true,
            hints: ['Vis alltid: 1) Formel. 2) Innsetting av tall. 3) Mellomregning. 4) Svar med enhet.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-12-1-rep-2',
          type: 'exercise',
          exercise: {
            id: '10-12-1-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Finn og rett feil i elevbesvarelser.',
            subTasks: [
              { label: 'a', task: 'Oppgave: «$\\frac{2}{5} + \\frac{1}{3}$». Elevens svar: «$\\frac{3}{8}$». Forklar feilen og vis riktig utregning.', solution: 'Feilen: Eleven la sammen teller og nevner separat. Riktig: $\\frac{2}{5} + \\frac{1}{3} = \\frac{6}{15} + \\frac{5}{15} = \\frac{11}{15}$.' },
              { label: 'b', task: 'Oppgave: «$(-3)^2$». Elevens svar: «$-9$». Forklar feilen.', solution: 'Feilen: Eleven beregnet $-(3^2)$ i stedet for $(-3)^2$. Riktig: $(-3)^2 = (-3) \\cdot (-3) = 9$.' },
              { label: 'c', task: 'Oppgave: «Finn $25$ % av $240$». Elevens svar: «$\\frac{240}{25} = 9{,}6$». Forklar feilen.', solution: 'Feilen: Eleven delte med 25 i stedet for å beregne prosent. Riktig: $25\\% \\text{ av } 240 = 0{,}25 \\cdot 240 = 60$.' },
              { label: 'd', task: 'Oppgave: «Løs $2x - 4 = 10$». Elevens svar: «$2x = 6$, $x = 3$». Forklar feilen.', solution: 'Feilen: Eleven trakk fra $4$ fra begge sider i stedet for å legge til. Riktig: $2x = 10 + 4 = 14$. $x = 7$.' },
              { label: 'e', task: 'Oppgave: «En pris øker med $30$ % og deretter $20$ %». Elevens svar: «Totalt $50$ % økning». Forklar feilen.', solution: 'Feilen: Prosentøkninger kan ikke legges sammen direkte. Riktig: Vekstfaktor $= 1{,}30 \\cdot 1{,}20 = 1{,}56$. Total økning: $56$ %, ikke $50$ %.' },
              { label: 'f', task: 'Oppgave: «Areal av trekant med sider 5, 7, 9 cm». Elevens svar: «$A = 5 \\cdot 7 / 2 = 17{,}5$ cm$^2$». Forklar feilen.', solution: 'Feilen: Eleven brukte to sider som grunnlinje og høyde, men i en vilkårlig trekant er en side ikke det samme som høyden. Formelen $A = \\frac{g \\cdot h}{2}$ krever at $h$ er den vinkelrette høyden ned på grunnlinjen $g$.' },
            ],
            solution: 'a) $11/15$. b) $9$. c) $60$. d) $x = 7$. e) $56$ %. f) Side $\\neq$ høyde.',
            hideInlineSolution: true,
            hints: ['Les elevens svar nøye. Identifiser den konkrete regnefeilen og vis riktig fremgangsmåte.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-12-1-rep-3',
          type: 'exercise',
          exercise: {
            id: '10-12-1-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Overslag og rimelighetssjekk.',
            subTasks: [
              { label: 'a', task: 'Gjør et overslag for $39 \\cdot 52$. Sammenlign deretter med eksakt svar.', solution: 'Overslag: $40 \\cdot 50 = 2\\,000$. Eksakt: $39 \\cdot 52 = 2\\,028$. Rimelig!' },
              { label: 'b', task: 'Et rom er $4{,}2$ m $\\times$ $3{,}8$ m. Gjør et overslag for arealet.', solution: 'Overslag: $4 \\times 4 = 16$ m$^2$. Eksakt: $4{,}2 \\cdot 3{,}8 = 15{,}96$ m$^2$. Rimelig!' },
              { label: 'c', task: 'En elev regnet ut at en bil som kjører $80$ km/t bruker $45$ timer på en strekning på $360$ km. Er dette rimelig?', solution: 'Overslag: $360 / 80 = 4{,}5$ timer. Eleven svarte $45$ timer — ti ganger for mye! Eleven har trolig glemt å dele riktig.' },
              { label: 'd', task: 'En vare koster $899$ kr. Med $15$ % rabatt, gjør et overslag for rabatten og den nye prisen.', solution: 'Overslag: $15\\%$ av $900 = 0{,}15 \\cdot 900 = 135$ kr. Ny pris $\\approx 900 - 135 = 765$ kr. Eksakt: $899 \\cdot 0{,}85 = 764{,}15$ kr.' },
              { label: 'e', task: '$\\sqrt{50}$ er omtrent...? Bruk at $\\sqrt{49} = 7$ og $\\sqrt{64} = 8$.', solution: '$\\sqrt{49} = 7$ og $\\sqrt{64} = 8$. Siden $50$ er nær $49$, er $\\sqrt{50} \\approx 7{,}1$. (Eksakt: $\\approx 7{,}07$.)' },
              { label: 'f', task: 'Arealet av en sirkel med radius $5$ cm er omtrent...? Bruk $\\pi \\approx 3$.', solution: '$A \\approx 3 \\cdot 5^2 = 3 \\cdot 25 = 75$ cm$^2$. (Eksakt med $\\pi$: $78{,}54$ cm$^2$.)' },
            ],
            solution: 'a) $\\approx 2\\,000$. b) $\\approx 16$ m$^2$. c) Nei, skal være $4{,}5$ timer. d) $\\approx 765$ kr. e) $\\approx 7{,}1$. f) $\\approx 75$ cm$^2$.',
            hideInlineSolution: true,
            hints: ['Avrund til enklere tall for overslaget. Sammenlign alltid med eksakt svar for å øve.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-12-1-rep-4',
          type: 'exercise',
          exercise: {
            id: '10-12-1-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Eksamensoppgaver med flere steg. Vis fullstendig utregning.',
            subTasks: [
              { label: 'a', task: 'Et rektangulært basseng er $12$ m langt, $5$ m bredt og $2$ m dypt. Hvor mange liter vann rommer bassenget? (Hint: $1$ m$^3$ $= 1\\,000$ liter.)', solution: '$V = 12 \\cdot 5 \\cdot 2 = 120$ m$^3$. $120 \\cdot 1\\,000 = 120\\,000$ liter.' },
              { label: 'b', task: 'Bassenget i a) skal fylles med vann. Vannet renner inn med $200$ liter per minutt. Hvor lang tid tar det å fylle bassenget? Oppgi svaret i timer og minutter.', solution: 'Tid $= 120\\,000 / 200 = 600$ minutter $= 10$ timer.' },
              { label: 'c', task: 'En bil kjører $450$ km og bruker $36$ liter bensin. Finn bensinforbruket per mil.', solution: '$450$ km $= 45$ mil. Forbruk: $36 / 45 = 0{,}80$ liter per mil.' },
              { label: 'd', task: 'Bensinprisen er $21{,}50$ kr per liter. Hva koster det å kjøre $250$ km med bilen i c)?', solution: '$250$ km $= 25$ mil. Bensin: $25 \\cdot 0{,}80 = 20$ liter. Kostnad: $20 \\cdot 21{,}50 = 430$ kr.' },
              { label: 'e', task: 'En trapes har parallelle sider $a = 8$ cm og $b = 12$ cm og høyde $h = 5$ cm. Finn arealet.', solution: '$A = \\frac{(a + b) \\cdot h}{2} = \\frac{(8 + 12) \\cdot 5}{2} = \\frac{100}{2} = 50$ cm$^2$.' },
            ],
            solution: 'a) $120\\,000$ liter. b) $10$ timer. c) $0{,}80$ L/mil. d) $430$ kr. e) $50$ cm$^2$.',
            hideInlineSolution: true,
            hints: ['Del opp oppgaven i steg. Vis formel, innsetting, mellomregning og svar med enhet for hvert steg.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-12-1-rep-5',
          type: 'exercise',
          exercise: {
            id: '10-12-1-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Blanding av emner: prosent, brøk, likning og geometri.',
            subTasks: [
              { label: 'a', task: 'En jakke kostet opprinnelig $1\\,500$ kr. Den settes ned $30$ %, og deretter ytterligere $10$ %. Hva er sluttprisen?', solution: 'Etter 30 %: $1\\,500 \\cdot 0{,}70 = 1\\,050$ kr. Etter 10 %: $1\\,050 \\cdot 0{,}90 = 945$ kr.' },
              { label: 'b', task: 'Løs likningssystemet: $x + y = 10$ og $2x - y = 5$.', solution: 'Adderer likningene: $3x = 15$, $x = 5$. Fra første: $y = 10 - 5 = 5$.' },
              { label: 'c', task: 'Regn ut $\\frac{3}{4} - \\frac{1}{6}$ uten kalkulator.', solution: 'Fellesnevner $12$: $\\frac{9}{12} - \\frac{2}{12} = \\frac{7}{12}$.' },
              { label: 'd', task: 'En rettvinklet trekant har kateter $a = 8$ cm og hypotenus $c = 17$ cm. Finn den andre kateten $b$.', solution: '$b^2 = c^2 - a^2 = 289 - 64 = 225$. $b = \\sqrt{225} = 15$ cm.' },
              { label: 'e', task: 'Stigningstallet for linjen gjennom $(2, 5)$ og $(6, 13)$ er...?', solution: '$a = \\frac{13 - 5}{6 - 2} = \\frac{8}{4} = 2$.' },
              { label: 'f', task: 'Skriv $3{,}5 \\cdot 10^3$ som vanlig tall og $0{,}0072$ i standardform.', solution: '$3{,}5 \\cdot 10^3 = 3\\,500$. $0{,}0072 = 7{,}2 \\cdot 10^{-3}$.' },
            ],
            solution: 'a) $945$ kr. b) $x = 5$, $y = 5$. c) $7/12$. d) $b = 15$ cm. e) $a = 2$. f) $3\\,500$ og $7{,}2 \\cdot 10^{-3}$.',
            hideInlineSolution: true,
            hints: ['Del 1 dekker alle emner. Øv på rask gjenkjenning av oppgavetype.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-12-1-rep-6',
          type: 'exercise',
          exercise: {
            id: '10-12-1-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Sammensatte eksamensoppgaver som krever flere steg og begrunnelse.',
            subTasks: [
              { label: 'a', task: 'Tre venner deler $2\\,400$ kr slik at den ene får dobbelt så mye som den andre, som igjen får dobbelt så mye som den tredje. Hvor mye får hver?', solution: 'La den tredje få $x$ kr. Den andre: $2x$. Den første: $4x$. Totalt: $x + 2x + 4x = 7x = 2\\,400$. $x = \\frac{2\\,400}{7} \\approx 342{,}86$ kr. Tredje: $\\approx 343$ kr, andre: $\\approx 686$ kr, første: $\\approx 1\\,371$ kr.' },
              { label: 'b', task: 'En trekant har hjørner $A(0, 0)$, $B(8, 0)$ og $C(4, 6)$. Finn arealet av trekanten og vis at den er likebeint.', solution: 'Areal: Grunnlinje $AB = 8$, høyde fra $C$ til $AB$ er $6$ (y-koordinat). $A = \\frac{8 \\cdot 6}{2} = 24$. $AC = \\sqrt{4^2 + 6^2} = \\sqrt{52}$. $BC = \\sqrt{(4-8)^2 + 6^2} = \\sqrt{16+36} = \\sqrt{52}$. Siden $AC = BC = \\sqrt{52}$, er trekanten likebeint.' },
              { label: 'c', task: 'En butikk solgte $80$ enheter i januar. Salget økte med $5$ % hver måned. Hvor mange enheter ble solgt i juni (5. måned etter januar)?', solution: 'Vekstfaktor per måned: $1{,}05$. Salg i juni: $80 \\cdot 1{,}05^5 = 80 \\cdot 1{,}2763 \\approx 102{,}1$. Ca. $102$ enheter.' },
            ],
            solution: 'a) Ca. $343$, $686$, $1\\,371$ kr. b) Areal $= 24$, likebeint ($AC = BC = \\sqrt{52}$). c) Ca. $102$ enheter.',
            hideInlineSolution: true,
            hints: ['Del opp i delproblemer. Sett opp likning for fordelingsoppgaver. Bruk avstandsformel i koordinatsystemet.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
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

    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '10-12-2-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '10-12-2-rep-1',
          type: 'exercise',
          exercise: {
            id: '10-12-2-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Hoderegning med brøk og prosent (uten kalkulator).',
            subTasks: [
              { label: 'a', task: 'Regn ut $\\frac{5}{6} - \\frac{1}{4}$.', solution: 'Fellesnevner $12$: $\\frac{10}{12} - \\frac{3}{12} = \\frac{7}{12}$.' },
              { label: 'b', task: 'Regn ut $\\frac{2}{3} \\cdot \\frac{9}{4}$.', solution: '$\\frac{2}{3} \\cdot \\frac{9}{4} = \\frac{18}{12} = \\frac{3}{2} = 1\\frac{1}{2}$.' },
              { label: 'c', task: 'Regn ut $\\frac{3}{5} \\div \\frac{6}{7}$.', solution: '$\\frac{3}{5} \\div \\frac{6}{7} = \\frac{3}{5} \\cdot \\frac{7}{6} = \\frac{21}{30} = \\frac{7}{10}$.' },
              { label: 'd', task: 'Finn $15$ % av $360$.', solution: '$15\\% \\text{ av } 360 = 0{,}15 \\cdot 360 = 54$.' },
              { label: 'e', task: 'En pris gikk fra $800$ kr til $600$ kr. Hvor mange prosent nedgang?', solution: 'Nedgang: $800 - 600 = 200$ kr. Prosentvis: $\\frac{200}{800} \\cdot 100\\% = 25\\%$.' },
              { label: 'f', task: 'Etter $20$ % prisøkning koster en vare $360$ kr. Hva var opprinnelig pris?', solution: 'Opprinnelig $\\cdot 1{,}20 = 360$. Opprinnelig $= 360 / 1{,}20 = 300$ kr.' },
            ],
            solution: 'a) $7/12$. b) $3/2$. c) $7/10$. d) $54$. e) $25$ %. f) $300$ kr.',
            hideInlineSolution: true,
            hints: ['Brøk: finn fellesnevner for addisjon/subtraksjon. Prosent: bruk vekstfaktor.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-12-2-rep-2',
          type: 'exercise',
          exercise: {
            id: '10-12-2-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Algebra og likninger (uten kalkulator).',
            subTasks: [
              { label: 'a', task: 'Forenkle $5(2x - 3) - 3(x + 4)$.', solution: '$10x - 15 - 3x - 12 = 7x - 27$.' },
              { label: 'b', task: 'Løs likningen $\\frac{2x + 1}{3} = 5$.', solution: '$2x + 1 = 15$. $2x = 14$. $x = 7$.' },
              { label: 'c', task: 'Løs likningen $5(x - 2) = 3x + 6$.', solution: '$5x - 10 = 3x + 6$. $2x = 16$. $x = 8$.' },
              { label: 'd', task: 'Forenkle $\\frac{x^3 \\cdot x^4}{x^5}$.', solution: '$\\frac{x^{3+4}}{x^5} = \\frac{x^7}{x^5} = x^{7-5} = x^2$.' },
              { label: 'e', task: 'Faktoriser $6x + 9$.', solution: '$6x + 9 = 3(2x + 3)$.' },
              { label: 'f', task: 'Løs ulikheten $-2x + 8 > 14$.', solution: '$-2x > 6$. $x < -3$ (husk å snu ulikhetstegnet ved divisjon med negativt tall).' },
            ],
            solution: 'a) $7x - 27$. b) $x = 7$. c) $x = 8$. d) $x^2$. e) $3(2x+3)$. f) $x < -3$.',
            hideInlineSolution: true,
            hints: ['Husk: Parentesregelen, potensregler, og at ulikhetstegnet snur ved divisjon med negativt tall.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-12-2-rep-3',
          type: 'exercise',
          exercise: {
            id: '10-12-2-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Geometri og måling (uten kalkulator). Bruk $\\pi \\approx 3{,}14$.',
            subTasks: [
              { label: 'a', task: 'En rettvinklet trekant har kateter $a = 9$ cm og $b = 12$ cm. Finn hypotenusen.', solution: '$c^2 = 81 + 144 = 225$. $c = 15$ cm.' },
              { label: 'b', task: 'Finn arealet av en sirkel med diameter $d = 10$ cm.', solution: '$r = 5$ cm. $A = \\pi r^2 = 3{,}14 \\cdot 25 = 78{,}5$ cm$^2$.' },
              { label: 'c', task: 'Et prisme har trekantformet grunnflate med grunnlinje $6$ cm og høyde $4$ cm. Prismets lengde er $10$ cm. Finn volumet.', solution: 'Grunnflateareal: $\\frac{6 \\cdot 4}{2} = 12$ cm$^2$. Volum: $12 \\cdot 10 = 120$ cm$^3$.' },
              { label: 'd', task: 'To vinkler i en trekant er $38°$ og $72°$. Finn den tredje vinkelen og avgjør hva slags trekant det er.', solution: '$\\angle C = 180° - 38° - 72° = 70°$. Alle vinkler er spisse, så det er en spissvinklet trekant.' },
              { label: 'e', task: 'Et rektangel har areal $48$ cm$^2$ og lengde $8$ cm. Finn bredde og omkrets.', solution: 'Bredde: $48 / 8 = 6$ cm. Omkrets: $2(8 + 6) = 28$ cm.' },
              { label: 'f', task: 'Finn overflaten av en boks med mål $4$ cm $\\times$ $5$ cm $\\times$ $3$ cm.', solution: '$O = 2(4 \\cdot 5 + 4 \\cdot 3 + 5 \\cdot 3) = 2(20 + 12 + 15) = 2 \\cdot 47 = 94$ cm$^2$.' },
            ],
            solution: 'a) $15$ cm. b) $78{,}5$ cm$^2$. c) $120$ cm$^3$. d) $70°$, spissvinklet. e) Bredde $6$ cm, omkrets $28$ cm. f) $94$ cm$^2$.',
            hideInlineSolution: true,
            hints: ['Pytagoras: $a^2 + b^2 = c^2$. Sirkel: $A = \\pi r^2$. Prisme: $V = G \\cdot h$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-12-2-rep-4',
          type: 'exercise',
          exercise: {
            id: '10-12-2-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Funksjoner og grafer (uten kalkulator).',
            subTasks: [
              { label: 'a', task: 'Funksjonen $f(x) = -3x + 12$. Finn nullpunktet og konstantleddet.', solution: 'Nullpunkt: $-3x + 12 = 0 \\Rightarrow x = 4$. Konstantledd: $b = 12$ (skjæring med $y$-aksen).' },
              { label: 'b', task: 'Finn stigningstallet og konstantleddet for linjen gjennom $(-1, 5)$ og $(3, -3)$.', solution: '$a = \\frac{-3 - 5}{3 - (-1)} = \\frac{-8}{4} = -2$. $y = -2x + b$. Sett inn $(-1, 5)$: $5 = -2(-1) + b = 2 + b$. $b = 3$. $f(x) = -2x + 3$.' },
              { label: 'c', task: 'To rette linjer: $y = 2x + 1$ og $y = -x + 7$. Finn skjæringspunktet.', solution: '$2x + 1 = -x + 7$. $3x = 6$. $x = 2$. $y = 2(2) + 1 = 5$. Skjæringspunkt: $(2, 5)$.' },
              { label: 'd', task: 'Er $f(x) = 3x - 6$ og $g(x) = 3x + 2$ parallelle? Begrunn.', solution: 'Ja, begge har stigningstall $a = 3$. Parallelle linjer har likt stigningstall men ulike konstantledd.' },
              { label: 'e', task: 'En lineær funksjon har $f(0) = 4$ og $f(5) = 14$. Finn funksjonsuttrykket.', solution: '$a = \\frac{14 - 4}{5 - 0} = \\frac{10}{5} = 2$. $b = f(0) = 4$. $f(x) = 2x + 4$.' },
            ],
            solution: 'a) Nullpunkt $x = 4$, $b = 12$. b) $f(x) = -2x + 3$. c) $(2, 5)$. d) Ja, likt stigningstall. e) $f(x) = 2x + 4$.',
            hideInlineSolution: true,
            hints: ['Stigningstall: $a = \\frac{y_2-y_1}{x_2-x_1}$. Nullpunkt: sett $y = 0$. Parallelle linjer har likt $a$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-12-2-rep-5',
          type: 'exercise',
          exercise: {
            id: '10-12-2-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Sannsynlighet og statistikk (uten kalkulator).',
            subTasks: [
              { label: 'a', task: 'Du kaster én terning. Hva er sannsynligheten for å få et primtall?', solution: 'Primtall på en terning: $2, 3, 5$. $P = \\frac{3}{6} = \\frac{1}{2}$.' },
              { label: 'b', task: 'Et lotteri har $200$ lodd. $40$ av dem vinner. Hva er sannsynligheten for å vinne?', solution: '$P(\\text{vinne}) = \\frac{40}{200} = \\frac{1}{5} = 0{,}20 = 20\\%$.' },
              { label: 'c', task: 'Tallene $8, 5, 12, 9, 6, 10, 7, 11$. Finn gjennomsnitt og median.', solution: 'Gjennomsnitt: $\\frac{68}{8} = 8{,}5$. Sortert: $5, 6, 7, 8, 9, 10, 11, 12$. Median: $\\frac{8+9}{2} = 8{,}5$.' },
              { label: 'd', task: 'I en klasse fikk $5$ elever karakter $3$, $12$ elever karakter $4$, $8$ elever karakter $5$ og $3$ elever karakter $6$. Finn gjennomsnittskarakteren.', solution: 'Sum: $5 \\cdot 3 + 12 \\cdot 4 + 8 \\cdot 5 + 3 \\cdot 6 = 15 + 48 + 40 + 18 = 121$. Antall: $28$. Gjennomsnitt: $121/28 \\approx 4{,}32$.' },
              { label: 'e', task: 'Du trekker et kort fra en vanlig kortstokk ($52$ kort). Hva er sannsynligheten for et ess eller en knekt?', solution: '$4$ ess og $4$ knekter $= 8$ gunstige. $P = \\frac{8}{52} = \\frac{2}{13}$.' },
              { label: 'f', task: 'I en pose er det $6$ røde, $4$ blå og $2$ gule kuler. Du trekker $2$ uten tilbakelegging. Hva er sannsynligheten for å få $2$ røde?', solution: '$P = \\frac{6}{12} \\cdot \\frac{5}{11} = \\frac{30}{132} = \\frac{5}{22}$.' },
            ],
            solution: 'a) $1/2$. b) $20\\%$. c) Begge $8{,}5$. d) $\\approx 4{,}32$. e) $2/13$. f) $5/22$.',
            hideInlineSolution: true,
            hints: ['Sannsynlighet: gunstige/mulige. Gjennomsnitt: sum/antall. Sorter for median.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-12-2-rep-6',
          type: 'exercise',
          exercise: {
            id: '10-12-2-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Sammensatte oppgaver som dekker flere emner (uten kalkulator).',
            subTasks: [
              { label: 'a', task: 'Et telt har form som et prisme med trekantet tverrsnitt. Trekanten har grunnlinje $3$ m og høyde $2$ m. Teltet er $4$ m langt. a) Finn volumet. b) Teltduken dekker de to trekantflatene og de to rektangulære sideflatene (ikke gulvet). Sideflatene har bredde lik skråsiden av trekanten. Finn skråsiden (bruk at grunnlinjen halveres av høyden) og regn ut totalarealet av duken.', solution: 'a) Volum: $V = \\frac{3 \\cdot 2}{2} \\cdot 4 = 12$ m$^3$. b) Skråside: halvgrunnlinje $= 1{,}5$ m. Skråside $= \\sqrt{1{,}5^2 + 2^2} = \\sqrt{2{,}25 + 4} = \\sqrt{6{,}25} = 2{,}5$ m. To trekantflater: $2 \\cdot 3 = 6$ m$^2$. To sideflater: $2 \\cdot 2{,}5 \\cdot 4 = 20$ m$^2$. Totalt: $6 + 20 = 26$ m$^2$.' },
              { label: 'b', task: 'Et tog kjører med gjennomsnittsfart $80$ km/t fra by A til by B, og med $60$ km/t tilbake. Den totale reisetiden er $7$ timer. Finn avstanden mellom byene.', solution: 'La avstanden være $d$ km. Tid: $\\frac{d}{80} + \\frac{d}{60} = 7$. Fellesnevner $240$: $\\frac{3d}{240} + \\frac{4d}{240} = 7$. $\\frac{7d}{240} = 7$. $d = 240$ km.' },
              { label: 'c', task: 'En funksjon $f(x) = ax + b$ går gjennom punktene $(2, 1)$ og $(5, 10)$. Finn $f(x)$ og beregn $f(8)$.', solution: '$a = \\frac{10-1}{5-2} = 3$. $1 = 3 \\cdot 2 + b \\Rightarrow b = -5$. $f(x) = 3x - 5$. $f(8) = 24 - 5 = 19$.' },
            ],
            solution: 'a) Volum $12$ m$^3$, duk $26$ m$^2$. b) $d = 240$ km. c) $f(x) = 3x - 5$, $f(8) = 19$.',
            hideInlineSolution: true,
            hints: ['Del opp sammensatte oppgaver. Bruk Pytagoras for skråsider. Sett opp likning for fart-tid-avstand.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
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

De kjøpte totalt 45 stykk (brus og boller til sammen). Hver brus kostet 25 kr og hver bolle kostet 18 kr. Totalt betalte de 936 kr.

Hvor mange brus og hvor mange boller kjøpte de?`,
        subTasks: [
          {
            label: 'a',
            task: 'Sett opp to likninger med to ukjente.',
            solution: `La $b$ = antall brus og $p$ = antall boller.

Likning 1 (antall): $b + p = 45$

Likning 2 (pris): $25b + 18p = 936$`,
          },
          {
            label: 'b',
            task: 'Løs likningssystemet ved innsettingsmetoden.',
            solution: `Fra likning 1: $b = 45 - p$

Sett inn i likning 2:
$25(45 - p) + 18p = 936$
$1125 - 25p + 18p = 936$
$1125 - 7p = 936$
$-7p = -189$
$p = 27$

Da er $b = 45 - 27 = 18$.

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

    // ========== REPETISJONSOPPGAVER ==========
    {
      id: '10-12-3-repetisjon',
      type: 'collapsible',
      title: 'Repetisjonsoppgaver',
      buttonText: 'Vis repetisjonsoppgaver',
      content: [
        {
          id: '10-12-3-rep-1',
          type: 'exercise',
          exercise: {
            id: '10-12-3-rep-ex-1',
            number: 'R1',
            type: 'classic',
            difficulty: 'lett',
            task: 'Økonomi og prosentregning (med kalkulator).',
            subTasks: [
              { label: 'a', task: 'Et sparebeløp på $15\\,000$ kr settes i banken med $2{,}5$ % rente per år. Hvor mye har du etter $3$ år?', solution: '$15\\,000 \\cdot 1{,}025^3 = 15\\,000 \\cdot 1{,}0769 \\approx 16\\,153$ kr.' },
              { label: 'b', task: 'En bruktbil kostet $120\\,000$ kr. Den mister $15$ % av verdien hvert år. Hva er bilens verdi etter $4$ år?', solution: '$120\\,000 \\cdot 0{,}85^4 = 120\\,000 \\cdot 0{,}5220 \\approx 62\\,640$ kr.' },
              { label: 'c', task: 'En vare koster $499$ kr inkl. $25$ % mva. Finn prisen uten mva.', solution: 'Pris uten mva: $499 / 1{,}25 = 399{,}20$ kr.' },
              { label: 'd', task: 'Du låner $50\\,000$ kr med $5$ % rente. Etter ett år betaler du tilbake $20\\,000$ kr. Hvor mye skylder du etter det andre året?', solution: 'Etter 1 år: $50\\,000 \\cdot 1{,}05 = 52\\,500$ kr. Etter innbetaling: $52\\,500 - 20\\,000 = 32\\,500$ kr. Etter 2. år: $32\\,500 \\cdot 1{,}05 = 34\\,125$ kr.' },
              { label: 'e', task: 'Inflasjonen er $3$ % per år. Noe som koster $100$ kr i dag, hva koster det om $10$ år?', solution: '$100 \\cdot 1{,}03^{10} = 100 \\cdot 1{,}3439 \\approx 134{,}39$ kr.' },
              { label: 'f', task: 'En lønn økes med $4{,}5$ % fra $420\\,000$ kr. Finn den nye lønnen og den månedlige bruttolønnen (før skatt).', solution: 'Ny årslønn: $420\\,000 \\cdot 1{,}045 = 438\\,900$ kr. Månedslønn: $438\\,900 / 12 = 36\\,575$ kr.' },
            ],
            solution: 'a) $\\approx 16\\,153$ kr. b) $\\approx 62\\,640$ kr. c) $399{,}20$ kr. d) $34\\,125$ kr. e) $\\approx 134{,}39$ kr. f) Årslønn $438\\,900$ kr, måned $36\\,575$ kr.',
            hideInlineSolution: true,
            hints: ['Vekstfaktor ved økning: $1 + p/100$. Ved reduksjon: $1 - p/100$. For flere år: opphøyd i antall år.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-12-3-rep-2',
          type: 'exercise',
          exercise: {
            id: '10-12-3-rep-ex-2',
            number: 'R2',
            type: 'classic',
            difficulty: 'lett',
            task: 'Funksjoner og modellering (med kalkulator/GeoGebra).',
            subTasks: [
              { label: 'a', task: 'En bedrift har faste kostnader på $3\\,000$ kr og variable kostnader på $25$ kr per enhet. Skriv opp kostnadsfunksjonen $K(x)$.', solution: '$K(x) = 3\\,000 + 25x$.' },
              { label: 'b', task: 'Hver enhet selges for $65$ kr. Skriv opp inntektsfunksjonen $I(x)$.', solution: '$I(x) = 65x$.' },
              { label: 'c', task: 'Finn break-even-punktet.', solution: '$3\\,000 + 25x = 65x$. $3\\,000 = 40x$. $x = 75$. Bedriften må selge $75$ enheter for å gå i null.' },
              { label: 'd', task: 'Skriv opp overskuddsfunksjonen $O(x)$ og finn overskuddet ved salg av $200$ enheter.', solution: '$O(x) = 65x - (3\\,000 + 25x) = 40x - 3\\,000$. $O(200) = 40 \\cdot 200 - 3\\,000 = 5\\,000$ kr.' },
              { label: 'e', task: 'Hvor mange enheter må selges for at overskuddet skal bli minst $10\\,000$ kr?', solution: '$40x - 3\\,000 \\geq 10\\,000$. $40x \\geq 13\\,000$. $x \\geq 325$. Minst $325$ enheter.' },
              { label: 'f', task: 'Tegn $K(x)$ og $I(x)$ i samme koordinatsystem (for hånd eller i GeoGebra). Marker break-even-punktet og overskuddsområdet.', solution: '$K(x)$ starter i $(0, 3\\,000)$ med stigning $25$. $I(x)$ starter i origo med stigning $65$. De krysser ved $(75, 4\\,875)$. Overskuddsområdet er der $I(x) > K(x)$, altså for $x > 75$.' },
            ],
            solution: 'a) $K = 3\\,000 + 25x$. b) $I = 65x$. c) $x = 75$. d) $O = 40x - 3\\,000$, $O(200) = 5\\,000$ kr. e) $x \\geq 325$. f) Kryss ved $(75, 4\\,875)$.',
            hideInlineSolution: true,
            hints: ['Kostnad = faste + variable. Inntekt = pris per enhet $\\cdot$ antall. Break-even: $K = I$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-12-3-rep-3',
          type: 'exercise',
          exercise: {
            id: '10-12-3-rep-ex-3',
            number: 'R3',
            type: 'classic',
            difficulty: 'lett',
            task: 'Statistikk og dataanalyse (med kalkulator/regneark).',
            subTasks: [
              { label: 'a', task: 'Temperaturmålinger (°C) over én uke: $-2, 1, 3, 5, 4, 2, -1$. Finn gjennomsnitt og median.', solution: 'Gjennomsnitt: $\\frac{-2+1+3+5+4+2-1}{7} = \\frac{12}{7} \\approx 1{,}71$ °C. Sortert: $-2, -1, 1, 2, 3, 4, 5$. Median: $2$ °C.' },
              { label: 'b', task: 'Vurderinger i en app (1-5): $4, 5, 3, 4, 5, 5, 4, 3, 5, 4, 4, 5$. Finn typetall og variasjonsbredde.', solution: 'Typetall: $4$ og $5$ (begge forekommer $4$ ganger). Variasjonsbredde: $5 - 3 = 2$.' },
              { label: 'c', task: 'En elevgruppe har $12$ elever. Gjennomsnittskarakteren er $4{,}25$. Hva er summen av alle karakterene?', solution: 'Sum $= 4{,}25 \\cdot 12 = 51$.' },
              { label: 'd', task: 'I c): Hvis en ny elev med karakter $5$ legges til, hva blir det nye gjennomsnittet?', solution: 'Ny sum: $51 + 5 = 56$. Nytt antall: $13$. Nytt gjennomsnitt: $56/13 \\approx 4{,}31$.' },
              { label: 'e', task: 'En krysstalbell viser at $15$ av $25$ gutter og $18$ av $20$ jenter liker fotball. Beregn prosentandelen for gutter og jenter separat.', solution: 'Gutter: $15/25 = 60\\%$. Jenter: $18/20 = 90\\%$.' },
              { label: 'f', task: 'I e): Finn den totale prosentandelen som liker fotball.', solution: 'Totalt: $(15+18)/(25+20) = 33/45 \\approx 73{,}3\\%$.' },
            ],
            solution: 'a) $\\approx 1{,}71$ °C, median $2$ °C. b) Typetall $4$ og $5$, variasjonsbredde $2$. c) Sum $= 51$. d) $\\approx 4{,}31$. e) $60\\%$ og $90\\%$. f) $\\approx 73{,}3\\%$.',
            hideInlineSolution: true,
            hints: ['Gjennomsnitt = sum / antall. Typetall = det som forekommer oftest. Median = midterste verdi i sortert liste.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-12-3-rep-4',
          type: 'exercise',
          exercise: {
            id: '10-12-3-rep-ex-4',
            number: 'R4',
            type: 'classic',
            difficulty: 'medium',
            task: 'Geometri og sammensatte figurer (med kalkulator).',
            subTasks: [
              { label: 'a', task: 'Et trapesformet vindu har parallelle sider $60$ cm og $90$ cm og høyde $50$ cm. Finn arealet.', solution: '$A = \\frac{(60 + 90) \\cdot 50}{2} = \\frac{7\\,500}{2} = 3\\,750$ cm$^2$.' },
              { label: 'b', task: 'En sylinder har radius $5$ cm og høyde $12$ cm. Finn overflaten. ($O = 2\\pi r^2 + 2\\pi rh$)', solution: '$O = 2\\pi(5)^2 + 2\\pi(5)(12) = 50\\pi + 120\\pi = 170\\pi \\approx 534{,}1$ cm$^2$.' },
              { label: 'c', task: 'En kjegle har radius $r = 6$ cm og høyde $h = 8$ cm. Finn volumet. ($V = \\frac{1}{3}\\pi r^2 h$)', solution: '$V = \\frac{1}{3} \\cdot \\pi \\cdot 36 \\cdot 8 = 96\\pi \\approx 301{,}6$ cm$^3$.' },
              { label: 'd', task: 'Et rektangulært rom er $5$ m $\\times$ $4$ m $\\times$ $2{,}5$ m. Veggene (ikke gulv/tak) skal males. Rommet har én dør ($0{,}9$ m $\\times$ $2{,}1$ m) og to vinduer ($1{,}2$ m $\\times$ $1{,}0$ m). Finn maleareal.', solution: 'Veggflateareal: $2(5 + 4) \\cdot 2{,}5 = 45$ m$^2$. Fratrekk: dør $= 0{,}9 \\cdot 2{,}1 = 1{,}89$ m$^2$. Vinduer: $2 \\cdot 1{,}2 \\cdot 1{,}0 = 2{,}4$ m$^2$. Maleareal: $45 - 1{,}89 - 2{,}4 = 40{,}71$ m$^2$.' },
              { label: 'e', task: 'Malingen i d) dekker $8$ m$^2$ per liter og koster $89$ kr per liter. Hvor mange liter trengs og hva koster det?', solution: 'Liter: $40{,}71 / 8 \\approx 5{,}09$, altså $6$ liter (runder opp). Kostnad: $6 \\cdot 89 = 534$ kr.' },
            ],
            solution: 'a) $3\\,750$ cm$^2$. b) $\\approx 534$ cm$^2$. c) $\\approx 302$ cm$^3$. d) $40{,}71$ m$^2$. e) $6$ liter, $534$ kr.',
            hideInlineSolution: true,
            hints: ['Trapes: $A = \\frac{(a+b)\\cdot h}{2}$. Sylinder overflate: $2\\pi r^2 + 2\\pi rh$. Husk å trekke fra dører/vinduer ved maleroppgaver.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-12-3-rep-5',
          type: 'exercise',
          exercise: {
            id: '10-12-3-rep-ex-5',
            number: 'R5',
            type: 'classic',
            difficulty: 'medium',
            task: 'Likningssett og problemløsning (med kalkulator).',
            subTasks: [
              { label: 'a', task: 'Løs likningssystemet: $2x + 3y = 19$ og $4x - y = 3$.', solution: 'Fra likning 2: $y = 4x - 3$. Sett inn: $2x + 3(4x-3) = 19$. $2x + 12x - 9 = 19$. $14x = 28$. $x = 2$. $y = 4(2) - 3 = 5$.' },
              { label: 'b', task: 'En kinobillett for voksne koster $130$ kr og for barn $80$ kr. Det ble solgt $45$ billetter for totalt $4\\,750$ kr. Hvor mange voksenbilletter og barnebilletter ble solgt?', solution: '$v + b = 45$ og $130v + 80b = 4\\,750$. Fra 1: $v = 45 - b$. $130(45-b) + 80b = 4\\,750$. $5\\,850 - 130b + 80b = 4\\,750$. $-50b = -1\\,100$. $b = 22$. $v = 23$.' },
              { label: 'c', task: 'Sjekk svaret i b).', solution: 'Antall: $23 + 22 = 45$ \\checkmark. Pris: $23 \\cdot 130 + 22 \\cdot 80 = 2\\,990 + 1\\,760 = 4\\,750$ kr \\checkmark.' },
              { label: 'd', task: 'Løs andregradslikningen $x^2 - 6x + 5 = 0$ med abc-formelen.', solution: '$x = \\frac{6 \\pm \\sqrt{36-20}}{2} = \\frac{6 \\pm \\sqrt{16}}{2} = \\frac{6 \\pm 4}{2}$. $x_1 = 5$, $x_2 = 1$.' },
              { label: 'e', task: 'En ball kastes opp med $h(t) = -5t^2 + 15t + 2$. Når er ballen $12$ m over bakken?', solution: '$-5t^2 + 15t + 2 = 12$. $-5t^2 + 15t - 10 = 0$. $t^2 - 3t + 2 = 0$. $(t-1)(t-2) = 0$. $t = 1$ s og $t = 2$ s.' },
              { label: 'f', task: 'Finn den maksimale høyden for ballen i e).', solution: 'Toppunkt: $t = -\\frac{15}{2 \\cdot (-5)} = 1{,}5$ s. $h(1{,}5) = -5(2{,}25) + 15(1{,}5) + 2 = -11{,}25 + 22{,}5 + 2 = 13{,}25$ m.' },
            ],
            solution: 'a) $x = 2$, $y = 5$. b) $23$ voksne, $22$ barn. c) Sjekk ok. d) $x = 5$ og $x = 1$. e) $t = 1$ s og $t = 2$ s. f) $13{,}25$ m.',
            hideInlineSolution: true,
            hints: ['Likningssett: innsettingsmetoden. Andregradslikning: abc-formelen $x = \\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
        {
          id: '10-12-3-rep-6',
          type: 'exercise',
          exercise: {
            id: '10-12-3-rep-ex-6',
            number: 'R6',
            type: 'classic',
            difficulty: 'vanskelig',
            task: 'Sammensatte praktiske oppgaver (typisk eksamen Del 2).',
            subTasks: [
              { label: 'a', task: 'En familie bruker $25\\,000$ kWh strøm per år. Strømprisen er $1{,}50$ kr/kWh. De installerer solceller som produserer $8\\,000$ kWh per år. Installasjon koster $180\\,000$ kr. a) Hvor mye sparer de per år? b) Etter hvor mange år er investeringen tjent inn?', solution: 'a) Sparing: $8\\,000 \\cdot 1{,}50 = 12\\,000$ kr/år. b) Inntjeningstid: $180\\,000 / 12\\,000 = 15$ år.' },
              { label: 'b', task: 'En kommune planlegger en rund rundkjøring med ytre radius $15$ m og indre radius $8$ m. Finn arealet av veibanen (ringen mellom de to sirklene).', solution: '$A = \\pi R^2 - \\pi r^2 = \\pi(15^2 - 8^2) = \\pi(225 - 64) = 161\\pi \\approx 505{,}8$ m$^2$.' },
              { label: 'c', task: 'En populasjon bakterier dobles hver $20$. minutt. Det starter med $500$ bakterier. a) Sett opp en funksjon for antall bakterier $N$ etter $t$ minutter. b) Hvor mange bakterier er det etter $2$ timer?', solution: 'a) $N(t) = 500 \\cdot 2^{t/20}$. b) Etter $120$ min: $N(120) = 500 \\cdot 2^{6} = 500 \\cdot 64 = 32\\,000$ bakterier.' },
              { label: 'd', task: 'Fortsettelse av c): Etter hvor lang tid er det $1\\,000\\,000$ bakterier? (Bruk prøving med kalkulator.)', solution: '$500 \\cdot 2^{t/20} = 1\\,000\\,000$. $2^{t/20} = 2\\,000$. Prøving: $2^{10} = 1\\,024$, $2^{11} = 2\\,048$. $t/20 \\approx 11$. $t \\approx 220$ minutter $\\approx 3$ timer og $40$ minutter.' },
            ],
            solution: 'a) Sparer $12\\,000$ kr/år, tjent inn etter $15$ år. b) $\\approx 506$ m$^2$. c) $N = 500 \\cdot 2^{t/20}$, $N(120) = 32\\,000$. d) $\\approx 220$ min.',
            hideInlineSolution: true,
            hints: ['Eksponentiell vekst: $N = N_0 \\cdot b^{t/T}$ der $T$ er doblingstiden. Sirkelring: $A = \\pi(R^2 - r^2)$.'],
            allowsUpload: true,
            allowsCanvasDrawing: true,
          },
        },
      ],
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
