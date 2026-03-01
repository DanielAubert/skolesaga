/* eslint-disable */
// @ts-nocheck
/**
 * Matematikk 10. klasse - Narrativ versjon Del 12
 * Kapittel 12.1–12.3: Eksamensforberedelse og problemlosning
 *
 * Denne versjonen er skrevet som sammenhengende tekst som er behagelig
 * a lese og lytte til, med quiz-sporsmal for selvtest.
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 12.1 NARRATIV: Eksamensformat og strategier
// ============================================================================

export const CHAPTER_10_12_1_NARRATIV: TextbookChapter = {
  id: '10-12-1-narrativ',
  courseId: '10',
  chapterNumber: '12.1',
  title: 'Eksamensformat og strategier',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hva som moter deg pa eksamensdagen, hvordan du disponerer tiden, og strategiene som skiller de beste fra resten.',
  estimatedMinutes: 30,
  competenceGoals: [
    'bruke funksjonar i modellering og argumentere for framgangsma tar og resultat',
  ],
  linkedChapterId: '10-12-1',
  content: [
    // --- INTRO ---
    {
      id: '10-12-1-n-intro',
      type: 'text',
      content: `## Eksamensdagen -- hva venter deg?

Forestill deg dette: Det er en tirsdag morgen i mai. Du har spist frokost, pakket sekken og kommet til skolen i god tid. I klasserommet er det stille. Pa pulten foran deg ligger et hvitt hefte -- eksamen i matematikk for 10. klasse. Du snur det om, leser forste oppgave, og tenker: "Denne kan jeg!"

Eksamen trenger ikke vare skummelt. Med riktig forberedelse og gode strategier kan du gjore det mye bedre enn du kanskje tror. I dette kapittelet skal vi ga gjennom alt du trenger a vite: hvordan eksamen er bygd opp, hva sensor ser etter, og de smarteste triksene for a maksimere poengene dine.`,
    },

    // --- EKSAMENSFORMAT ---
    {
      id: '10-12-1-n-section1',
      type: 'text',
      content: `## Slik er eksamen bygd opp

Eksamen i matematikk for 10. trinn er en **skriftlig eksamen** som varer i **5 timer**. Den er delt i to deler:

**Del 1 -- Uten hjelpemidler** (ca. 1,5--2 timer): Her har du ingen hjelpemidler overhodet -- ingen kalkulator, ingen formelsamling, ingen digitale verktoy. Oppgavene tester om du kan grunnleggende matematikk uten stotte: hoderegning, algebra, enkel geometri, brok, prosent og statistikk. Du leverer inn Del 1 for du far Del 2. Denne delen utgjor ca. **40--50 %** av totalkarakteren.

**Del 2 -- Med hjelpemidler** (ca. 3--3,5 timer): Her kan du bruke **alle hjelpemidler** du vil: kalkulator, GeoGebra, regneark, formelsamling og egne notater. Oppgavene er mer sammensatte og krever lengre utregninger. Typiske oppgaver handler om funksjoner, modellering, praktiske problemer og statistikkanalyse. Denne delen utgjor ca. **50--60 %** av totalkarakteren.

Oppgavene har ulik vekt. Noen gir 1--2 poeng, mens andre gir 4--6 poeng. De tyngre oppgavene krever at du viser mer arbeid og argumenterer for losningen din.

## Hva betyr "vis utregning"?

Nar eksamen ber deg **"vise utregning"** eller **"grunngi svaret"**, betyr det at du ma:

1. **Skrive opp formelen** du bruker
2. **Sette inn tallene** i formelen
3. **Vise mellomregninger** -- ikke bare skriv svaret
4. **Skrive et tydelig svar** med riktig enhet

La oss ta et eksempel. Areal av en trekant med grunnlinje $g = 8$ cm og hoyde $h = 5$ cm:

$$A = \\frac{g \\cdot h}{2} = \\frac{8 \\cdot 5}{2} = \\frac{40}{2} = 20 \\text{ cm}^2$$

**Svar:** Arealet av trekanten er $20 \\text{ cm}^2$.

Hvis du bare hadde skrevet "$A = 20$" uten formel, mellomregning og enhet, ville du mistet poeng -- selv om svaret er riktig!`,
    },

    // --- QUIZ 1 ---
    {
      id: '10-12-1-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-12-1-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa eksamensformat:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-12-1-n-quiz1-q0',
            task: 'Hva er riktig om Del 1 av matematikkeksamen i 10. klasse?',
            options: [
              { id: 'a', text: 'Du kan bruke kalkulator, men ikke GeoGebra', isCorrect: false },
              { id: 'b', text: 'Du kan bruke formelsamling, men ikke kalkulator', isCorrect: false },
              { id: 'c', text: 'Du kan ikke bruke noen hjelpemidler', isCorrect: true },
              { id: 'd', text: 'Du kan bruke egne notater', isCorrect: false },
            ],
            solution: 'Del 1 er helt uten hjelpemidler -- hverken kalkulator, GeoGebra, formelsamling eller egne notater er tillatt.',
          },
          {
            id: '10-12-1-n-quiz1-q1',
            task: 'Hvor lang tid varer eksamen totalt?',
            options: [
              { id: 'a', text: '3 timer', isCorrect: false },
              { id: 'b', text: '4 timer', isCorrect: false },
              { id: 'c', text: '5 timer', isCorrect: true },
              { id: 'd', text: '6 timer', isCorrect: false },
            ],
            solution: 'Eksamen i matematikk for 10. trinn varer i 5 timer totalt: ca. 1,5--2 timer for Del 1 og ca. 3--3,5 timer for Del 2.',
          },
          {
            id: '10-12-1-n-quiz1-q2',
            task: 'Hva ma du gjore nar oppgaven sier "vis utregning"?',
            options: [
              { id: 'a', text: 'Bare skrive svaret med enhet', isCorrect: false },
              { id: 'b', text: 'Vise formel, innsetting, mellomregning og svar med enhet', isCorrect: true },
              { id: 'c', text: 'Tegne en figur', isCorrect: false },
              { id: 'd', text: 'Forklare med ord, uten tall', isCorrect: false },
            ],
            solution: '"Vis utregning" betyr at du ma skrive opp formelen, sette inn tallene, vise mellomregninger, og skrive et tydelig svar med riktig enhet.',
          },
        ],
        solution: '',
      },
    },

    // --- VANLIGE FEIL OG STRATEGIER ---
    {
      id: '10-12-1-n-section2',
      type: 'text',
      content: `## De vanligste feilene -- og hvordan du unnga r dem

Sensor ser de samme feilene igjen og igjen. Her er de viktigste a passe pa:

**1. Manglende mellomregning.** Selv om du regner riktig i hodet, *ma* du skrive det ned. Uten mellomregning kan du miste halvparten av poengene. Tenk pa det slik: sensor kan ikke lese tankene dine.

**2. Glemmer enheter.** Er svaret 42 cm, 42 kr, 42 grader eller 42 kg? Skriv alltid enheten!

**3. Leser oppgaven for raskt.** Mange elever svarer pa noe annet enn det oppgaven spor om. Les oppgaven **minst to ganger** for du begynner.

**4. Gir opp for tidlig.** Selv om du ikke klarer hele oppgaven, kan du ofte fa **delpoeng**. Skriv ned det du vet -- en formel, et oppsett, en delregning. Alt teller!

**5. Feil med negative tall og fortegn.** Husk: $(-3) \\cdot (-4) = 12$ (minus ganger minus er pluss), $(-3) \\cdot 4 = -12$ (minus ganger pluss er minus), og $-3 - (-4) = -3 + 4 = 1$ (minus minus blir pluss).

**6. Feil brokregning.** $\\frac{1}{3} + \\frac{1}{4} \\neq \\frac{2}{7}$! Du trenger fellesnevner: $\\frac{1}{3} + \\frac{1}{4} = \\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$.

## Strategier for a maksimere poengene

**Start med det du kan.** Bla gjennom hele eksamen forst. Los de enkleste oppgavene forst -- det gir deg selvtillit og sikrer poeng tidlig.

**Hopp over og kom tilbake.** Bruker du mer enn 10--15 minutter pa en oppgave uten fremgang? Marker den og ga videre. Kom tilbake senere med friske oyne.

**Del opp store oppgaver.** Mange oppgaver har deloppgaver (a, b, c, d). Du kan ofte lose b) selv om du ikke klarte a). Prov alltid!

**Sjekk svaret ditt.** Sett svaret tilbake i oppgaven og se om det gir mening. For eksempel: Du loste $2x + 6 = 14$ og fikk $x = 4$. Sjekk: $2 \\cdot 4 + 6 = 8 + 6 = 14$. Stemmer!

**Estimer for du regner.** Gjor et raskt overslag. Hvis du beregner arealet av et rom til $4\\,500 \\text{ m}^2$ i stedet for $45 \\text{ m}^2$, bor alarmklokkene ringe!`,
    },

    // --- QUIZ 2 ---
    {
      id: '10-12-1-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-12-1-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa eksamensstrategier:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-12-1-n-quiz2-q0',
            task: 'Hvordan kan du enklest sjekke om losningen $x = 7$ er riktig for likningen $3x - 9 = 12$?',
            options: [
              { id: 'a', text: 'Lose likningen en gang til med en annen metode', isCorrect: false },
              { id: 'b', text: 'Sette $x = 7$ inn i likningen og se om begge sider blir like', isCorrect: true },
              { id: 'c', text: 'Tegne grafen i GeoGebra', isCorrect: false },
              { id: 'd', text: 'Sporr lareren', isCorrect: false },
            ],
            solution: 'Sjekk ved innsetting: $3 \\cdot 7 - 9 = 21 - 9 = 12$. Venstre side = hoyre side. Svaret er riktig!',
          },
          {
            id: '10-12-1-n-quiz2-q1',
            task: 'En butikk har 25 % rabatt pa en jakke til 1 200 kr. Medlemmer far 10 % ekstra rabatt pa den allerede reduserte prisen. Hva blir prisen for et medlem?',
            options: [
              { id: 'a', text: '780 kr (35 % rabatt av 1 200)', isCorrect: false },
              { id: 'b', text: '810 kr', isCorrect: true },
              { id: 'c', text: '900 kr', isCorrect: false },
              { id: 'd', text: '840 kr', isCorrect: false },
            ],
            solution: 'Forst: $1\\,200 \\cdot 0{,}75 = 900$ kr. Sa: $900 \\cdot 0{,}90 = 810$ kr. OBS: 25 % + 10 % er IKKE 35 % totalt, fordi den ekstra rabatten beregnes av den allerede reduserte prisen.',
          },
          {
            id: '10-12-1-n-quiz2-q2',
            task: 'Hva bor du gjore hvis du star fast pa en oppgave i mer enn 10 minutter?',
            options: [
              { id: 'a', text: 'Fortsette til du far det til', isCorrect: false },
              { id: 'b', text: 'Gi opp og la oppgaven sta blank', isCorrect: false },
              { id: 'c', text: 'Markere oppgaven, ga videre, og komme tilbake senere', isCorrect: true },
              { id: 'd', text: 'Sporr sidemannen om hjelp', isCorrect: false },
            ],
            solution: 'Det er bedre a fa poeng pa mange oppgaver enn a bruke all tid pa en. Marker oppgaven og kom tilbake med friske oyne etter at du har lost de andre.',
          },
          {
            id: '10-12-1-n-quiz2-q3',
            task: 'Hva er $\\frac{1}{3} + \\frac{1}{4}$?',
            options: [
              { id: 'a', text: '$\\frac{2}{7}$', isCorrect: false },
              { id: 'b', text: '$\\frac{7}{12}$', isCorrect: true },
              { id: 'c', text: '$\\frac{1}{7}$', isCorrect: false },
              { id: 'd', text: '$\\frac{4}{12}$', isCorrect: false },
            ],
            solution: 'Vi trenger fellesnevner 12: $\\frac{1}{3} + \\frac{1}{4} = \\frac{4}{12} + \\frac{3}{12} = \\frac{7}{12}$. Man kan IKKE bare legge sammen tellere og nevnere!',
          },
        ],
        solution: '',
      },
    },

    // --- HANDTERING AV NERVER ---
    {
      id: '10-12-1-n-section3',
      type: 'text',
      content: `## Haandtere eksamensnervoene

Det er helt normalt a vare nervos for eksamen. Litt spenning kan faktisk vare bra -- det skjerper konsentrasjonen. Men for mye nervositet kan lamme deg. Her er noen strategier:

**For eksamen:** Forbered deg godt -- trygghet kommer av a kunne stoffet. Sov nok natten for (minst 8 timer). Spis en god frokost med langsomme karbohydrater som grovbrod eller havregrot. Kom tidlig til skolen -- stress av a komme for sent gjor alt verre.

**Under eksamen:** Start med oppgavene du kan -- det gir selvtillit. Pust dypt hvis du kjenner panikk (inn gjennom nesen, ut gjennom munnen). Husk at du ikke trenger 100 % for a gjore det bra. Ta korte pauser -- strekk deg, drikk vann, pust.

**Viktig a huske:** Eksamen tester det du *kan* -- ikke det du ikke kan. Sensor **vil** gi deg poeng -- vis det du vet! En darlig oppgave odelegger ikke eksamen. Det viktigste er god forberedelse, som gir trygghet, som gir bedre prestasjon.

Her er en anbefalt tidsplan for eksamensdagen:

**Del 1 (1,5--2 timer):** Les gjennom alle oppgavene (10 min), los oppgavene du kan forst (45--60 min), ga tilbake til vanskelige oppgaver (20--30 min), sjekk svarene dine (10--15 min).

**Del 2 (3--3,5 timer):** Les gjennom alle oppgavene (10 min), los oppgavene i rekkefolgje (120--150 min), ga tilbake til uloste oppgaver (20--30 min), sjekk alle svar og utregninger (15--20 min).

**Gyllne regel:** Ikke bruk mer enn 10--15 minutter pa en enkelt oppgave. Det er bedre a fa poeng pa mange oppgaver enn full score pa en.`,
    },

    // --- OPPSUMMERING ---
    {
      id: '10-12-1-n-summary',
      type: 'text',
      content: `## Oppsummering

Her er det viktigste a ta med seg om eksamen:

- **Format:** Del 1 er uten hjelpemidler (ca. 40--50 % av karakteren), Del 2 er med alle hjelpemidler (ca. 50--60 %). Total tid: 5 timer.
- **Vis utregning** betyr: formel, innsetting av tall, mellomregning og svar med enhet.
- **Vanlige feil a unnga:** Manglende mellomregning, glemte enheter, feil med negative tall og brok, a lese oppgaven for raskt, og a gi opp for tidlig.
- **Strategier:** Start med oppgavene du kan. Hopp over vanskelige oppgaver og kom tilbake. Del opp store oppgaver. Sjekk svar ved innsetting. Gjor overslag for a kontrollere rimelighet. Aldri la en oppgave sta helt blank -- skriv det du vet, for delpoeng teller!
- **Haandter nerver** med god forberedelse, nok sovn, en god frokost, og dype pust nar det trengs.

God forberedelse gir trygghet, og trygghet gir bedre prestasjon. Lykke til!`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 12.2 NARRATIV: Del 1 -- Oppgaver uten hjelpemidler
// ============================================================================

export const CHAPTER_10_12_2_NARRATIV: TextbookChapter = {
  id: '10-12-2-narrativ',
  courseId: '10',
  chapterNumber: '12.2',
  title: 'Del 1 -- Oppgaver uten hjelpemidler',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om alle formlene du ma kunne utenat, hoderegningstriks og typiske Del 1-oppgaver -- fra brok og prosent til Pytagoras og funksjoner.',
  estimatedMinutes: 40,
  competenceGoals: [
    'bruke funksjonar i modellering og argumentere for framgangsma tar og resultat',
  ],
  linkedChapterId: '10-12-2',
  content: [
    // --- INTRO ---
    {
      id: '10-12-2-n-intro',
      type: 'text',
      content: `## Del 1 -- du og matematikken, alene

Pa Del 1 av eksamen er det bare du og matematikken. Ingen kalkulator, ingen formelsamling, ingen digitale verktoy. Det betyr at du ma ha de viktigste formlene og regnereglene i hodet. Det hores kanskje skremmende ut, men med litt oving blir det naturlig.

La oss ga gjennom formlene du ma kunne utenat, og sa skal vi ove pa typiske oppgaver fra alle emnene som kan dukke opp pa Del 1.`,
    },

    // --- FORMLER OG HODEREGNING ---
    {
      id: '10-12-2-n-section1',
      type: 'text',
      content: `## Formlene du ma kunne utenat

**Areal:**
- Rektangel: $A = l \\cdot b$
- Trekant: $A = \\frac{g \\cdot h}{2}$
- Sirkel: $A = \\pi r^2$

**Omkrets:**
- Rektangel: $O = 2l + 2b$
- Sirkel: $O = 2\\pi r$

**Volum:**
- Prisme: $V = G \\cdot h$ (grunnflate ganger hoyde)
- Sylinder: $V = \\pi r^2 h$

**Pytagoras' setning:** $a^2 + b^2 = c^2$ (der $c$ er hypotenusen i en rettvinklet trekant)

**Prosent:** $\\text{ny verdi} = \\text{gammel verdi} \\cdot \\text{vekstfaktor}$

**Lineaere funksjoner:** $y = ax + b$ der $a$ er stigningstall og $b$ er konstantledd

**Stigningstall:** $a = \\frac{y_2 - y_1}{x_2 - x_1}$

**Gjennomsnitt:** $\\bar{x} = \\frac{\\text{sum av alle verdier}}{\\text{antall verdier}}$

## Hoderegningstriks

Hoderegning handler om smarte snarveier:

- **Dele opp:** $48 \\cdot 25 = 48 \\cdot 100 / 4 = 4\\,800 / 4 = 1\\,200$
- **Bruke 10-ere:** $37 + 58 = 37 + 60 - 2 = 95$
- **Doble og halvere:** $16 \\cdot 35 = 8 \\cdot 70 = 560$

Disse triksene kan spare deg verdifull tid pa eksamen. La oss na ove pa typiske oppgaver!`,
    },

    // --- QUIZ 1: TALL OG BROK ---
    {
      id: '10-12-2-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-12-2-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa tall og brokregning:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-12-2-n-quiz1-q0',
            task: 'Hva er $\\frac{2}{3} + \\frac{3}{4}$?',
            options: [
              { id: 'a', text: '$\\frac{5}{7}$', isCorrect: false },
              { id: 'b', text: '$\\frac{17}{12}$', isCorrect: true },
              { id: 'c', text: '$\\frac{5}{12}$', isCorrect: false },
              { id: 'd', text: '$\\frac{6}{12}$', isCorrect: false },
            ],
            solution: 'Fellesnevner er 12: $\\frac{2}{3} + \\frac{3}{4} = \\frac{8}{12} + \\frac{9}{12} = \\frac{17}{12} = 1\\frac{5}{12}$.',
          },
          {
            id: '10-12-2-n-quiz1-q1',
            task: 'Hva er $(-5) \\cdot 3 + (-2)^3$?',
            options: [
              { id: 'a', text: '$-23$', isCorrect: true },
              { id: 'b', text: '$-7$', isCorrect: false },
              { id: 'c', text: '$23$', isCorrect: false },
              { id: 'd', text: '$-9$', isCorrect: false },
            ],
            solution: '$(-5) \\cdot 3 = -15$. $(-2)^3 = (-2) \\cdot (-2) \\cdot (-2) = -8$. $-15 + (-8) = -15 - 8 = -23$.',
          },
          {
            id: '10-12-2-n-quiz1-q2',
            task: 'Hva er $\\frac{3}{5} \\cdot \\frac{10}{9}$?',
            options: [
              { id: 'a', text: '$\\frac{13}{14}$', isCorrect: false },
              { id: 'b', text: '$\\frac{30}{45}$', isCorrect: false },
              { id: 'c', text: '$\\frac{2}{3}$', isCorrect: true },
              { id: 'd', text: '$\\frac{1}{3}$', isCorrect: false },
            ],
            solution: '$\\frac{3}{5} \\cdot \\frac{10}{9} = \\frac{30}{45} = \\frac{2}{3}$ (forkorter med 15).',
          },
          {
            id: '10-12-2-n-quiz1-q3',
            task: 'Skriv $0{,}035$ som brok.',
            options: [
              { id: 'a', text: '$\\frac{35}{100}$', isCorrect: false },
              { id: 'b', text: '$\\frac{7}{200}$', isCorrect: true },
              { id: 'c', text: '$\\frac{35}{10000}$', isCorrect: false },
              { id: 'd', text: '$\\frac{7}{100}$', isCorrect: false },
            ],
            solution: '$0{,}035 = \\frac{35}{1000} = \\frac{7}{200}$ (forkorter med 5).',
          },
        ],
        solution: '',
      },
    },

    // --- PROSENT OG ALGEBRA ---
    {
      id: '10-12-2-n-section2',
      type: 'text',
      content: `## Prosent -- vekstfaktor er nøkkelen

Prosentregning er noe av det viktigste pa eksamen. Nøkkelen er a tenke i **vekstfaktorer**:

- Okning pa 15 %: vekstfaktor $= 1 + 0{,}15 = 1{,}15$
- Reduksjon pa 20 %: vekstfaktor $= 1 - 0{,}20 = 0{,}80$

**Eksempel 1:** En vare kostet 400 kr. Prisen okes med 15 %. Ny pris $= 400 \\cdot 1{,}15 = 460$ kr.

**Eksempel 2:** En vare koster na 630 kr etter en prisokning pa 5 %. Hva var den opprinnelige prisen? Opprinnelig pris $= \\frac{630}{1{,}05} = 600$ kr.

**Eksempel 3:** En pris gikk fra 250 kr til 200 kr. Prosentvis endring: $\\frac{250 - 200}{250} \\cdot 100\\% = \\frac{50}{250} \\cdot 100\\% = 20\\%$ reduksjon.

## Algebra -- los likninger steg for steg

Ligninger loser du ved a isolere $x$. Husk a gjore det samme pa begge sider:

$4x - 7 = 2x + 9$ gir $4x - 2x = 9 + 7$, altsa $2x = 16$, sa $x = 8$.

$\\frac{x}{3} + 2 = 5$ gir $\\frac{x}{3} = 3$, sa $x = 9$.

For **ulikheter** loser du som en likning, men husk: fortegnet snur hvis du deler med et negativt tall! $3x + 4 > 19$ gir $3x > 15$, sa $x > 5$.

Og for algebra med bokstaver -- husk a samle like ledd: $3a + 2b - a + 5b = 2a + 7b$, og bruk parentesregelen: $2(3x - 4) + 5x = 6x - 8 + 5x = 11x - 8$.

For potenser: $\\frac{x^5}{x^2} = x^{5-2} = x^3$ (nar vi deler potenser med lik grunntall, trekker vi fra eksponentene).

Og standardform: $0{,}00042 = 4{,}2 \\cdot 10^{-4}$ (flytt kommaet til du har et tall mellom 1 og 10, og tell antall plasser).`,
    },

    // --- QUIZ 2: PROSENT OG ALGEBRA ---
    {
      id: '10-12-2-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-12-2-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa prosent og algebra:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-12-2-n-quiz2-q0',
            task: 'En vare koster na 630 kr etter en prisokning pa 5 %. Hva var den opprinnelige prisen?',
            options: [
              { id: 'a', text: '598,50 kr', isCorrect: false },
              { id: 'b', text: '600 kr', isCorrect: true },
              { id: 'c', text: '661,50 kr', isCorrect: false },
              { id: 'd', text: '625 kr', isCorrect: false },
            ],
            solution: 'Opprinnelig pris $= \\frac{630}{1{,}05} = 600$ kr. Vi deler pa vekstfaktoren for a finne tilbake til opprinnelig pris.',
          },
          {
            id: '10-12-2-n-quiz2-q1',
            task: 'Los likningen $4x - 7 = 2x + 9$.',
            options: [
              { id: 'a', text: '$x = 2$', isCorrect: false },
              { id: 'b', text: '$x = 4$', isCorrect: false },
              { id: 'c', text: '$x = 8$', isCorrect: true },
              { id: 'd', text: '$x = 16$', isCorrect: false },
            ],
            solution: '$4x - 2x = 9 + 7$. $2x = 16$. $x = 8$. Sjekk: $4 \\cdot 8 - 7 = 25$, $2 \\cdot 8 + 9 = 25$. Stemmer!',
          },
          {
            id: '10-12-2-n-quiz2-q2',
            task: 'Forenkle $2(3x - 4) + 5x$.',
            options: [
              { id: 'a', text: '$11x + 8$', isCorrect: false },
              { id: 'b', text: '$11x - 8$', isCorrect: true },
              { id: 'c', text: '$6x - 8$', isCorrect: false },
              { id: 'd', text: '$11x - 4$', isCorrect: false },
            ],
            solution: '$2(3x - 4) + 5x = 6x - 8 + 5x = 11x - 8$.',
          },
          {
            id: '10-12-2-n-quiz2-q3',
            task: 'Skriv $0{,}00042$ i standardform.',
            options: [
              { id: 'a', text: '$42 \\cdot 10^{-5}$', isCorrect: false },
              { id: 'b', text: '$4{,}2 \\cdot 10^{-3}$', isCorrect: false },
              { id: 'c', text: '$4{,}2 \\cdot 10^{-4}$', isCorrect: true },
              { id: 'd', text: '$0{,}42 \\cdot 10^{-3}$', isCorrect: false },
            ],
            solution: '$0{,}00042 = 4{,}2 \\cdot 10^{-4}$. I standardform skal tallet foran vare mellom 1 og 10.',
          },
        ],
        solution: '',
      },
    },

    // --- GEOMETRI, FUNKSJONER, STATISTIKK ---
    {
      id: '10-12-2-n-section3',
      type: 'text',
      content: `## Geometri -- Pytagoras og figurer

**Pytagoras' setning** er et must pa Del 1. I en rettvinklet trekant med kateter $a$ og $b$ og hypotenus $c$ gjelder: $a^2 + b^2 = c^2$.

Huskeregel: $6$-$8$-$10$ er en pytagoreisk trippel! $6^2 + 8^2 = 36 + 64 = 100 = 10^2$.

Vinkelsummen i en trekant er alltid $180°$. Sa hvis to vinkler er $55°$ og $70°$, er den tredje $180° - 55° - 70° = 55°$.

For sirkler med radius $r = 5$ cm: $A = \\pi r^2 = 3{,}14 \\cdot 25 = 78{,}5 \\text{ cm}^2$ (bruk $\\pi \\approx 3{,}14$ pa Del 1).

## Lineaere funksjoner

For a finne funksjonsuttrykket $f(x) = ax + b$ nar du kjenner to punkter, for eksempel $(1, 3)$ og $(3, 7)$:

1. Finn stigningstallet: $a = \\frac{7 - 3}{3 - 1} = \\frac{4}{2} = 2$
2. Sett inn et punkt: $3 = 2 \\cdot 1 + b$, sa $b = 1$
3. Funksjonsuttrykket er $f(x) = 2x + 1$

For a finne nar $f(x) = 15$: $2x + 1 = 15$, $2x = 14$, $x = 7$.

## Statistikk og sannsynlighet

For et datasett som $2, 0, 1, 3, 2, 4, 1, 2, 0, 5$:

- **Gjennomsnitt:** $\\frac{2+0+1+3+2+4+1+2+0+5}{10} = \\frac{20}{10} = 2{,}0$
- **Median:** Sortert: $0, 0, 1, 1, 2, 2, 2, 3, 4, 5$. Med 10 tall: $\\frac{2 + 2}{2} = 2{,}0$
- **Typetall:** $2$ (forekommer 3 ganger)
- **Variasjonsbredde:** $5 - 0 = 5$

For sannsynlighet med kuler: Hvis det er 4 rode, 3 bla og 5 gronne kuler (12 totalt), er $P(\\text{rod}) = \\frac{4}{12} = \\frac{1}{3}$ og $P(\\text{ikke gronn}) = \\frac{7}{12}$. Ved to trekk uten tilbakelegging: $P(\\text{to rode}) = \\frac{4}{12} \\cdot \\frac{3}{11} = \\frac{12}{132} = \\frac{1}{11}$.

For proporsjonal sammenheng: Hvis Marie tjener 120 kr for 3 timers barnevakt, tjener hun $40$ kr/time, og formelen er $L = 40t$. Sammenhengen er proporsjonal fordi grafen er en rett linje gjennom origo.`,
    },

    // --- QUIZ 3: GEOMETRI, FUNKSJONER, STATISTIKK ---
    {
      id: '10-12-2-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-12-2-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa geometri, funksjoner og statistikk:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-12-2-n-quiz3-q0',
            task: 'En rettvinklet trekant har kateter $a = 6$ cm og $b = 8$ cm. Hva er hypotenusen $c$?',
            options: [
              { id: 'a', text: '$14$ cm', isCorrect: false },
              { id: 'b', text: '$\\sqrt{48}$ cm', isCorrect: false },
              { id: 'c', text: '$10$ cm', isCorrect: true },
              { id: 'd', text: '$7$ cm', isCorrect: false },
            ],
            solution: '$c^2 = 6^2 + 8^2 = 36 + 64 = 100$. $c = \\sqrt{100} = 10$ cm. (6-8-10 er en pytagoreisk trippel!)',
          },
          {
            id: '10-12-2-n-quiz3-q1',
            task: 'En rett linje gar gjennom $(1, 3)$ og $(3, 7)$. Hva er stigningstallet?',
            options: [
              { id: 'a', text: '$4$', isCorrect: false },
              { id: 'b', text: '$2$', isCorrect: true },
              { id: 'c', text: '$1$', isCorrect: false },
              { id: 'd', text: '$3$', isCorrect: false },
            ],
            solution: '$a = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{7 - 3}{3 - 1} = \\frac{4}{2} = 2$.',
          },
          {
            id: '10-12-2-n-quiz3-q2',
            task: 'Hva er medianen av tallene $0, 0, 1, 1, 2, 2, 2, 3, 4, 5$?',
            options: [
              { id: 'a', text: '$2{,}0$', isCorrect: true },
              { id: 'b', text: '$1{,}5$', isCorrect: false },
              { id: 'c', text: '$2{,}5$', isCorrect: false },
              { id: 'd', text: '$1$', isCorrect: false },
            ],
            solution: 'Med 10 tall er medianen gjennomsnittet av verdi nr. 5 og 6: $\\frac{2 + 2}{2} = 2{,}0$.',
          },
          {
            id: '10-12-2-n-quiz3-q3',
            task: 'I en pose er det 4 rode, 3 bla og 5 gronne kuler. Du trekker to rode kuler etter hverandre uten tilbakelegging. Hva er sannsynligheten?',
            options: [
              { id: 'a', text: '$\\frac{1}{9}$', isCorrect: false },
              { id: 'b', text: '$\\frac{16}{144}$', isCorrect: false },
              { id: 'c', text: '$\\frac{1}{11}$', isCorrect: true },
              { id: 'd', text: '$\\frac{4}{12}$', isCorrect: false },
            ],
            solution: '$P = \\frac{4}{12} \\cdot \\frac{3}{11} = \\frac{12}{132} = \\frac{1}{11}$. Etter forste rode kule er det 3 rode igjen av 11 totalt.',
          },
        ],
        solution: '',
      },
    },

    // --- OPPSUMMERING ---
    {
      id: '10-12-2-n-summary',
      type: 'text',
      content: `## Oppsummering

Pa Del 1 er det formlene, hoderegningen og den logiske tenkningen som gjelder. Her er en sjekkliste:

**Formler a kunne utenat:** Areal av rektangel ($l \\cdot b$), trekant ($\\frac{g \\cdot h}{2}$) og sirkel ($\\pi r^2$). Pytagoras ($a^2 + b^2 = c^2$). Stigningstall ($\\frac{y_2 - y_1}{x_2 - x_1}$). Gjennomsnitt ($\\frac{\\text{sum}}{\\text{antall}}$).

**Sjekkliste for Del 1:**
- Vis alltid mellomregning
- Skriv enheter pa alle svar
- Sjekk svar ved innsetting
- Gjor overslag for a kontrollere rimelighet
- Bruk minst 10 minutter til slutt pa a sjekke alt
- Husk fellesnevner ved brokaddisjon!
- Pass pa fortegn ved negative tall
- Ved ulikheter: fortegnet snur nar du deler med negativt tall`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 12.3 NARRATIV: Del 2 -- Oppgaver med hjelpemidler
// ============================================================================

export const CHAPTER_10_12_3_NARRATIV: TextbookChapter = {
  id: '10-12-3-narrativ',
  courseId: '10',
  chapterNumber: '12.3',
  title: 'Del 2 -- Oppgaver med hjelpemidler',
  subtitle: 'Narrativ versjon',
  description: 'En fortelling om hvordan du bruker kalkulator, GeoGebra og regneark smart pa Del 2 -- med okonomi, funksjoner, statistikk og modellering.',
  estimatedMinutes: 45,
  competenceGoals: [
    'bruke funksjonar i modellering og argumentere for framgangsma tar og resultat',
    'modellere situasjonar knytte til reelle datasett, presentere resultata og argumentere for at modellane er gyldige',
  ],
  linkedChapterId: '10-12-3',
  content: [
    // --- INTRO ---
    {
      id: '10-12-3-n-intro',
      type: 'text',
      content: `## Del 2 -- alle verktoy tilgjengelige

Na har du levert inn Del 1 og far et nytt hefte -- Del 2. Du trekker frem kalkulatoren, apner GeoGebra pa datamaskinen, og legger formelsamlingen klar. Her kan du bruke **alle hjelpemidler** du vil, og oppgavene er mer omfattende og praktisk rettet.

Men selv med hjelpemidler ma du **vise fremgangsmaten din**. "Jeg fant svaret med GeoGebra" gir ikke full score. Du ma forklare HVA du gjorde og HVORFOR. Sensor kan ikke se hva du trykket pa kalkulatoren -- skriv det ned!

La oss ga gjennom de viktigste typene oppgaver som dukker opp pa Del 2, og oye pa hvordan du bruker hjelpemidlene smart.`,
    },

    // --- OKONOMI OG MODELLERING ---
    {
      id: '10-12-3-n-section1',
      type: 'text',
      content: `## Praktisk matematikk -- okonomi i hverdagen

Del 2-oppgaver handler ofte om virkelige situasjoner. La oss se pa et typisk eksempel: en bedrift som produserer og selger handlagde lys.

Kostnaden for a produsere $x$ lys er gitt ved $K(x) = 2000 + 35x$. Her er $2000$ de **faste kostnadene** -- kostnader bedriften har uansett hvor mange lys de produserer (for eksempel leie av lokale). Og $35$ er den **variable kostnaden** per lys -- kostnaden for materialer og arbeid for hvert enkelt lys.

Hvert lys selges for 85 kr, sa inntekten er $I(x) = 85x$.

**Break-even** er punktet der inntekt er lik kostnad -- bedriften hverken tjener eller taper penger. Vi finner det ved a sette $K(x) = I(x)$:

$$2000 + 35x = 85x$$
$$2000 = 50x$$
$$x = 40$$

Bedriften ma selge 40 lys for a ga i null. Ved det punktet er bade kostnad og inntekt $3\\,400$ kr.

**Overskuddet** er $O(x) = I(x) - K(x) = 85x - (2000 + 35x) = 50x - 2000$.

Ved salg av 100 lys: $O(100) = 50 \\cdot 100 - 2000 = 3\\,000$ kr.

For a ha et overskudd pa minst $5\\,000$ kr: $50x - 2000 \\geq 5000$, altsa $x \\geq 140$ lys.

I GeoGebra kan du tegne begge grafene og bruke "Skaering mellom to objekter" for a finne noyaktig hvor de krysser. Husk a beskrive hva du gjor: "Jeg tegner $K(x) = 2000 + 35x$ og $I(x) = 85x$ i GeoGebra og finner skaerings- punktet $(40, 3400)$."`,
    },

    // --- QUIZ 1 ---
    {
      id: '10-12-3-n-quiz1',
      type: 'exercise',
      exercise: {
        id: '10-12-3-n-quiz1',
        number: 'Quiz 1',
        type: 'multiple-choice',
        task: 'Test deg selv pa okonomi og modellering:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-12-3-n-quiz1-q0',
            task: 'I funksjonen $K(x) = 2000 + 35x$, hva representerer tallet 2000?',
            options: [
              { id: 'a', text: 'Variable kostnader per enhet', isCorrect: false },
              { id: 'b', text: 'Salgsprisen per enhet', isCorrect: false },
              { id: 'c', text: 'Faste kostnader som ikke avhenger av produksjonsmengden', isCorrect: true },
              { id: 'd', text: 'Overskuddet ved 100 enheter', isCorrect: false },
            ],
            solution: '$2000$ er de faste kostnadene -- kostnader bedriften har uansett hvor mange enheter de produserer, for eksempel leie og utstyr.',
          },
          {
            id: '10-12-3-n-quiz1-q1',
            task: 'Hva betyr "break-even" i okonomi?',
            options: [
              { id: 'a', text: 'Punktet der overskuddet er storst', isCorrect: false },
              { id: 'b', text: 'Punktet der bedriften gar konkurs', isCorrect: false },
              { id: 'c', text: 'Punktet der inntekt er lik kostnad', isCorrect: true },
              { id: 'd', text: 'Punktet der prisen er lavest', isCorrect: false },
            ],
            solution: 'Break-even er punktet der inntekt og kostnad er like. Bedriften hverken tjener eller taper penger.',
          },
          {
            id: '10-12-3-n-quiz1-q2',
            task: 'Et treningssenter tilbyr: Abb. 1: 200 kr/mnd + 50 kr per okt. Abb. 2: 90 kr per okt. Ved hvor mange okter koster de like mye?',
            options: [
              { id: 'a', text: '4 okter', isCorrect: false },
              { id: 'b', text: '5 okter', isCorrect: true },
              { id: 'c', text: '6 okter', isCorrect: false },
              { id: 'd', text: '10 okter', isCorrect: false },
            ],
            solution: '$200 + 50x = 90x$ gir $200 = 40x$, altsa $x = 5$. Ved 5 okter koster begge 450 kr.',
          },
        ],
        solution: '',
      },
    },

    // --- FUNKSJONER OG GRAFISK LOSNING ---
    {
      id: '10-12-3-n-section2',
      type: 'text',
      content: `## Funksjoner og grafisk losning

Pa Del 2 far du ofte oppgaver der du skal tegne grafer og finne skaerings- punkter. GeoGebra er ditt beste verktoy her!

**Lineaere funksjoner** ($y = ax + b$): Sett opp funksjonsuttrykkene, tegn grafene i GeoGebra, og finn skaerings- punktet. Beskriv alltid hva skaerings- punktet betyr i konteksten av oppgaven.

**Andregradsfunksjoner** er ogsa vanlige. La oss se pa et klassisk eksempel: en ball kastes rett opp i luften, og hoyden etter $t$ sekunder er gitt ved:

$$h(t) = -5t^2 + 20t + 1{,}5$$

Her er $1{,}5$ starthoyden -- ballen kastes fra 1,5 meters hoyde. Tallet $-5$ kommer fra tyngdekraften ($\\frac{1}{2}g \\approx 5$).

**Toppunktet** finner vi ved $t = \\frac{-b}{2a} = \\frac{-20}{2 \\cdot (-5)} = 2$ sekunder. Hoyden er da: $h(2) = -5 \\cdot 4 + 20 \\cdot 2 + 1{,}5 = -20 + 40 + 1{,}5 = 21{,}5$ m.

**Nar treffer ballen bakken?** Vi loser $h(t) = 0$: $-5t^2 + 20t + 1{,}5 = 0$. Med abc-formelen eller GeoGebra finner vi $t \\approx 4{,}1$ sekunder.

**Hvor lenge er ballen over 15 m?** Vi loser $h(t) = 15$ og finner to tidspunkt: $t_1 \\approx 0{,}86$ s og $t_2 \\approx 3{,}14$ s. Ballen er over 15 m i ca. $3{,}14 - 0{,}86 = 2{,}28$ sekunder.

I GeoGebra skriver du inn $f(x) = -5x^2 + 20x + 1.5$ og bruker verktoyene "Ekstremalpunkt" og "Nullpunkt" for a finne svarene grafisk. Husk a forklare hva du gjor!`,
    },

    // --- STATISTIKK OG SANNSYNLIGHET ---
    {
      id: '10-12-3-n-section3',
      type: 'text',
      content: `## Statistikk med regneark

Statistikkoppgaver er perfekte for regneark. La oss si at du har temperaturer malt klokken 12.00 i en by de forste 14 dagene i mars:

$2, 4, 3, 1, -2, -3, 0, 2, 5, 6, 4, 3, 7, 8$

I regneark kan du bruke formler som =GJENNOMSNITT(), =MEDIAN() og =MAKS() - MINN() for variasjonsbredde. Du finner: gjennomsnitt $\\approx 2{,}86$ °C, median $= 3{,}0$ °C.

Nar du lager diagrammer, beskriv alltid **trenden**: Her ser vi at temperaturen faller fra dag 1--7 (fra 2 °C ned til -3 °C), men stiger jevnt fra dag 7--14 (fra 0 °C opp til 8 °C). Det er et tydelig vendepunkt rundt dag 6--7 -- overgangen fra vinter til var!

## Sannsynlighet med tabeller

Pa Del 2 kan sannsynlighetsoppgavene vare mer avanserte, ofte med krysstabell. For eksempel: I en klasse med 30 elever driver 10 gutter og 7 jenter med idrett, 3 gutter og 5 jenter med musikk, og 4 gutter og 1 jente med gaming.

- $P(\\text{idrett}) = \\frac{17}{30}$
- $P(\\text{jente og musikk}) = \\frac{5}{30} = \\frac{1}{6}$
- **Betinget sannsynlighet**: $P(\\text{gaming} | \\text{gutt}) = \\frac{4}{17}$ (av de 17 guttene driver 4 med gaming)

For a sjekke om hendelser er uavhengige: Er $P(\\text{idrett} | \\text{gutt}) = P(\\text{idrett})$? Vi far $\\frac{10}{17} \\approx 0{,}588$ mot $\\frac{17}{30} \\approx 0{,}567$. De er ikke helt like, sa det er en viss sammenheng mellom kjonn og aktivitetsvalg.`,
    },

    // --- QUIZ 2 ---
    {
      id: '10-12-3-n-quiz2',
      type: 'exercise',
      exercise: {
        id: '10-12-3-n-quiz2',
        number: 'Quiz 2',
        type: 'multiple-choice',
        task: 'Test deg selv pa funksjoner, statistikk og sannsynlighet:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-12-3-n-quiz2-q0',
            task: 'En ball kastes opp med $h(t) = -5t^2 + 20t + 1{,}5$. Hva er den maksimale hoyden?',
            options: [
              { id: 'a', text: '$20$ m', isCorrect: false },
              { id: 'b', text: '$1{,}5$ m', isCorrect: false },
              { id: 'c', text: '$21{,}5$ m', isCorrect: true },
              { id: 'd', text: '$25$ m', isCorrect: false },
            ],
            solution: 'Toppunktet er ved $t = \\frac{-20}{2 \\cdot (-5)} = 2$. $h(2) = -5 \\cdot 4 + 40 + 1{,}5 = 21{,}5$ m.',
          },
          {
            id: '10-12-3-n-quiz2-q1',
            task: 'Hva betyr det at $P(\\text{gaming} | \\text{gutt}) = \\frac{4}{17}$?',
            options: [
              { id: 'a', text: '4 av 17 elever totalt driver med gaming', isCorrect: false },
              { id: 'b', text: 'Gitt at eleven er gutt, er sannsynligheten $\\frac{4}{17}$ for at han driver med gaming', isCorrect: true },
              { id: 'c', text: '4 av 17 jenter driver med gaming', isCorrect: false },
              { id: 'd', text: 'Sannsynligheten for a vaere gutt og drive med gaming', isCorrect: false },
            ],
            solution: 'Betinget sannsynlighet: Gitt at vi allerede vet at eleven er gutt (17 gutter totalt), er sjansen for gaming $\\frac{4}{17}$.',
          },
          {
            id: '10-12-3-n-quiz2-q2',
            task: 'Hva er toppunktet for en andregradsfunksjon $ax^2 + bx + c$ nar $a < 0$?',
            options: [
              { id: 'a', text: 'Det laveste punktet pa grafen', isCorrect: false },
              { id: 'b', text: 'Det hoyeste punktet pa grafen, ved $x = -\\frac{b}{2a}$', isCorrect: true },
              { id: 'c', text: 'Skjaeringspunktet med $y$-aksen', isCorrect: false },
              { id: 'd', text: 'Nullpunktet', isCorrect: false },
            ],
            solution: 'Nar $a < 0$ apner parabelen nedover, sa toppunktet er det hoyeste punktet. Det ligger ved $x = -\\frac{b}{2a}$.',
          },
        ],
        solution: '',
      },
    },

    // --- SAMMENSATTE OPPGAVER ---
    {
      id: '10-12-3-n-section4',
      type: 'text',
      content: `## Sammensatte praktiske oppgaver

De tyngste oppgavene pa Del 2 kombinerer flere emner. La oss se pa to eksempler som ligner eksamensoppgaver.

**Eksempel 1: Sykkelvei.** En kommune skal bygge en 2,4 km lang sykkelvei (3 m bred) med et 20 cm tykt gruslag (180 kr/m$^3$), et 8 cm tykt asfaltlag (950 kr/m$^3$) og oppmerking pa begge sider (45 kr per lopemeter).

Forst ma vi omgjore enheter: $2{,}4$ km $= 2\\,400$ m og $20$ cm $= 0{,}20$ m.

Grusvolumet: $2\\,400 \\cdot 3 \\cdot 0{,}20 = 1\\,440 \\text{ m}^3$. Asfaltvolumet: $2\\,400 \\cdot 3 \\cdot 0{,}08 = 576 \\text{ m}^3$.

Totalkostnad: Grus $1\\,440 \\cdot 180 = 259\\,200$ kr, asfalt $576 \\cdot 950 = 547\\,200$ kr, oppmerking $2\\,400 \\cdot 2 \\cdot 45 = 216\\,000$ kr. Totalt: $1\\,022\\,400$ kr. Med et budsjett pa 1 million kr er overskridelsen $\\frac{22\\,400}{1\\,000\\,000} \\cdot 100\\% = 2{,}24\\%$.

**Eksempel 2: Solcellepaneler.** En skole med tak pa $40 \\times 25$ m vurderer solcellepaneler (1,7 m $\\times$ 1,0 m, 280 kWh/ar, 4 200 kr per panel). Med 1 m fra kanten og 0,5 m mellom panelene: langs lengden $\\lfloor \\frac{38}{2{,}2} \\rfloor = 17$, langs bredden $\\lfloor \\frac{23}{1{,}5} \\rfloor = 15$, totalt $17 \\cdot 15 = 255$ paneler.

Produksjon: $255 \\cdot 280 = 71\\,400$ kWh/ar, som dekker $\\frac{71\\,400}{95\\,000} \\cdot 100\\% \\approx 75\\%$ av skolens forbruk. Arlig sparing: $71\\,400 \\cdot 1{,}85 = 132\\,090$ kr. Installasjon: $255 \\cdot 4\\,200 = 1\\,071\\,000$ kr. Inntjeningstid: $\\frac{1\\,071\\,000}{132\\,090} \\approx 8{,}1$ ar.

Over 25 ars levetid sparer skolen $132\\,090 \\cdot 25 - 1\\,071\\,000 \\approx 2{,}23$ millioner kroner netto.

Legg merke til hvordan disse oppgavene kombinerer enhetomregning, arealberegning, prosent, okonomi og praktisk argumentasjon. Pa eksamen ma du vise hver delregning tydelig -- det er der poengene ligger!`,
    },

    // --- QUIZ 3 ---
    {
      id: '10-12-3-n-quiz3',
      type: 'exercise',
      exercise: {
        id: '10-12-3-n-quiz3',
        number: 'Quiz 3',
        type: 'multiple-choice',
        task: 'Test deg selv pa sammensatte oppgaver:',
        options: [
          { id: 'a', text: 'placeholder', isCorrect: true },
        ],
        questions: [
          {
            id: '10-12-3-n-quiz3-q0',
            task: 'En sykkelvei er 2,4 km lang og 3 m bred. Gruslaget er 20 cm tykt. Hva er volumet av grusen?',
            options: [
              { id: 'a', text: '$144 \\text{ m}^3$', isCorrect: false },
              { id: 'b', text: '$14\\,400 \\text{ m}^3$', isCorrect: false },
              { id: 'c', text: '$1\\,440 \\text{ m}^3$', isCorrect: true },
              { id: 'd', text: '$720 \\text{ m}^3$', isCorrect: false },
            ],
            solution: 'Forst omgjor: $2{,}4$ km $= 2\\,400$ m og $20$ cm $= 0{,}20$ m. Volum $= 2\\,400 \\cdot 3 \\cdot 0{,}20 = 1\\,440 \\text{ m}^3$.',
          },
          {
            id: '10-12-3-n-quiz3-q1',
            task: 'Solcellepaneler produserer 71 400 kWh/ar. Skolen bruker 95 000 kWh/ar. Hvor stor prosentandel dekkes?',
            options: [
              { id: 'a', text: 'Ca. 65 %', isCorrect: false },
              { id: 'b', text: 'Ca. 75 %', isCorrect: true },
              { id: 'c', text: 'Ca. 85 %', isCorrect: false },
              { id: 'd', text: 'Ca. 50 %', isCorrect: false },
            ],
            solution: '$\\frac{71\\,400}{95\\,000} \\cdot 100\\% = 75{,}2\\%$.',
          },
          {
            id: '10-12-3-n-quiz3-q2',
            task: 'En installasjon koster 1 071 000 kr og sparer 132 090 kr per ar. Etter hvor mange ar har den tjent seg inn?',
            options: [
              { id: 'a', text: 'Ca. 6 ar', isCorrect: false },
              { id: 'b', text: 'Ca. 8 ar', isCorrect: true },
              { id: 'c', text: 'Ca. 10 ar', isCorrect: false },
              { id: 'd', text: 'Ca. 12 ar', isCorrect: false },
            ],
            solution: '$\\frac{1\\,071\\,000}{132\\,090} \\approx 8{,}1$ ar.',
          },
          {
            id: '10-12-3-n-quiz3-q3',
            task: 'Nar oppgaven sier "bruk GeoGebra", hva ma du fortsatt gjore i besvarelsen?',
            options: [
              { id: 'a', text: 'Bare skrive "Fant svaret med GeoGebra"', isCorrect: false },
              { id: 'b', text: 'Ingenting ekstra -- GeoGebra-utskriften er nok', isCorrect: false },
              { id: 'c', text: 'Forklare hva du gjorde, hvilke funksjoner du plottet, og hva resultatet betyr', isCorrect: true },
              { id: 'd', text: 'Lose oppgaven for hand i tillegg', isCorrect: false },
            ],
            solution: 'Du ma alltid forklare fremgangsmaten: Hvilke funksjoner du skrev inn, hvilke verktoy du brukte (f.eks. "Skaering mellom to objekter"), og hva resultatet betyr i konteksten.',
          },
        ],
        solution: '',
      },
    },

    // --- OPPSUMMERING ---
    {
      id: '10-12-3-n-summary',
      type: 'text',
      content: `## Oppsummering

Pa Del 2 har du alle verktoyene tilgjengelig -- men det er hvordan du bruker dem som teller:

- **Kalkulator:** Dobbeltsjekk utregninger, men skriv ned mellomregning. Sensor kan ikke se hva du trykket!
- **GeoGebra:** Tegn grafer, finn skaerings- punkter og ekstremalpunkter. Beskriv alltid hva du gjor.
- **Regneark:** Perfekt for statistikk og tabeller. Bruk formler og beskriv dem.
- **Formelsamling:** Sla opp formler du er usikker pa.

**Typiske Del 2-oppgaver:** Praktiske problemer med okonomi og hverdagsmatematikk, funksjoner og grafisk losning, statistikkanalyse, geometri med sammensatte figurer, modellering med lineaere og kvadratiske funksjoner, og likningssett med to ukjente.

**Det aller viktigste:** Vis alltid fremgangsmaten. Skriv enheter og svar i setning. Sjekk rimeligheten av svaret. Del opp store oppgaver og los det du kan -- delpoeng er gull verdt!

**Lykke til pa eksamen!** Med god forberedelse og smarte strategier kan du oppna det beste resultatet ditt.`,
    },
  ],
  exercises: [],
};

// Eksporter alle narrative kapitler i seksjon 12
export const MATEMATIKK_10_NARRATIV_DEL12_CHAPTERS: TextbookChapter[] = [
  CHAPTER_10_12_1_NARRATIV,
  CHAPTER_10_12_2_NARRATIV,
  CHAPTER_10_12_3_NARRATIV,
];
