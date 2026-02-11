/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnsøkonomi 1 VG2
 *
 * Seksjon 2: Markeder og prisdannelse (Kapittel 2.1–2.5)
 * Denne filen inneholder kapittel 2.1–2.5 (komplett).
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 2.1: Etterspørsel
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_2_1: TextbookChapter = {
  id: 'samfokonomi-1-2-1',
  courseId: 'samfokonomi-1',
  chapterNumber: '2.1',
  title: 'Etterspørsel',
  description: 'Etterspørselskurven, etterspørselsloven, inntekts- og substitusjonseffekten, og forskjellen mellom skift og bevegelser langs kurven.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for ulike markedsformer og bruke disse til å analysere ulike markeder'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'soe-2-1-intro',
      type: 'text',
      content: `## Etterspørsel

Når du går i butikken for å handle, tar du valg hele tiden: Skal du kjøpe den dyre osten eller den billige? Trenger du virkelig en ny genser, eller kan du vente til salget? Disse valgene – som millioner av forbrukere tar hver dag – utgjør til sammen det vi kaller **etterspørsel**.

Etterspørsel er en av de mest grunnleggende byggesteinene i samfunnsøkonomien. For å forstå hvordan priser dannes, hvorfor noen varer er dyre mens andre er billige, og hvordan markeder fungerer, må vi først forstå hva som bestemmer etterspørselen etter en vare eller tjeneste.`
    },

    // --- BLOKK 1: Etterspørselsbegrepet ---
    {
      id: 'soe-2-1-def-1',
      type: 'definition',
      title: 'Etterspørsel',
      content: `**Etterspørsel** er den mengden av en vare eller tjeneste som forbrukerne er villige til og i stand til å kjøpe ved ulike priser, i en gitt tidsperiode, alt annet likt (*ceteris paribus*).

Det er viktig å skille mellom:
- **Etterspurt kvantum** – den konkrete mengden forbrukerne ønsker å kjøpe ved én bestemt pris
- **Etterspørsel** – hele sammenhengen mellom pris og etterspurt kvantum (hele kurven)`
    },
    {
      id: 'soe-2-1-text-1',
      type: 'text',
      content: `### Etterspørselsloven

Etterspørselsloven beskriver en av de mest robuste sammenhengene i økonomien:

> Når prisen på en vare stiger, vil etterspurt kvantum synke – og omvendt – alt annet likt.

Denne sammenhengen gir oss en **fallende etterspørselskurve**. Plottet i et diagram med pris på den vertikale aksen og kvantum på den horisontale aksen, heller kurven nedover fra venstre mot høyre.

Hvorfor fungerer det slik? Det er to hovedforklaringer:

1. **Substitusjonseffekten**: Når prisen på en vare stiger, blir alternative varer relativt billigere. Forbrukerne vil da erstatte den dyrere varen med billigere alternativer.
2. **Inntektseffekten**: Når prisen stiger, reduseres forbrukerens reelle kjøpekraft. De har «råd til mindre», og vil derfor kjøpe færre enheter.`
    },
    {
      id: 'soe-2-1-example-1',
      type: 'example',
      title: 'Substitusjons- og inntektseffekten i praksis',
      problem: 'Prisen på Pepsi øker fra 20 kr til 35 kr per flaske. Forklar hvordan dette påvirker etterspørselen etter Pepsi ved hjelp av substitusjonseffekten og inntektseffekten.',
      solution: `**Substitusjonseffekten:** Når Pepsi blir dyrere, blir alternative drikker som Coca-Cola, brus fra lavprismerker eller vann relativt billigere. Forbrukerne vil derfor bytte til disse alternativene, og etterspurt kvantum av Pepsi synker.

**Inntektseffekten:** Prisøkningen betyr at forbrukernes penger rekker til færre enheter. En person som brukte 100 kr på Pepsi i uken, fikk tidligere 5 flasker, men får nå bare ca. 3 flasker. Den reelle kjøpekraften har falt, noe som også bidrar til lavere etterspurt kvantum.

Begge effektene trekker i samme retning: etterspurt kvantum av Pepsi faller når prisen stiger – i tråd med etterspørselsloven.`
    },
    {
      id: 'soe-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-2-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva sier etterspørselsloven?',
        options: [
          { id: 'a', text: 'Når prisen stiger, øker etterspurt kvantum', isCorrect: false },
          { id: 'b', text: 'Når prisen stiger, synker etterspurt kvantum – alt annet likt', isCorrect: true },
          { id: 'c', text: 'Etterspørselen er alltid konstant uavhengig av pris', isCorrect: false },
          { id: 'd', text: 'Prisen bestemmes av tilbudet alene', isCorrect: false }
        ],
        solution: 'Etterspørselsloven sier at det er en negativ sammenheng mellom pris og etterspurt kvantum: når prisen stiger, synker etterspurt kvantum, og omvendt – alt annet likt (ceteris paribus). Dette gir en fallende etterspørselskurve.'
      }
    },

    // --- BLOKK 2: Etterspørselskurven ---
    {
      id: 'soe-2-1-text-2',
      type: 'text',
      content: `### Etterspørselskurven

Etterspørselskurven viser grafisk sammenhengen mellom prisen på en vare og mengden forbrukerne ønsker å kjøpe. I et standard markedsdiagram:

- **Vertikal akse (y):** Pris (P)
- **Horisontal akse (x):** Kvantum / mengde (Q)
- **Kurven:** Heller nedover fra venstre mot høyre

Bak kurven ligger en **etterspørselsplan** – en tabell som viser etterspurt kvantum ved ulike priser. For eksempel:

| Pris (kr) | Etterspurt kvantum (stk) |
|-----------|--------------------------|
| 50        | 100                      |
| 40        | 200                      |
| 30        | 300                      |
| 20        | 400                      |
| 10        | 500                      |

Tabellen viser tydelig: jo lavere pris, jo høyere etterspurt kvantum.`
    },
    {
      id: 'soe-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-2-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvordan heller etterspørselskurven i et standard markedsdiagram?',
        options: [
          { id: 'a', text: 'Oppover fra venstre mot høyre (stigende)', isCorrect: false },
          { id: 'b', text: 'Nedover fra venstre mot høyre (fallende)', isCorrect: true },
          { id: 'c', text: 'Den er horisontal (flat)', isCorrect: false },
          { id: 'd', text: 'Den er vertikal (loddrett)', isCorrect: false }
        ],
        solution: 'Etterspørselskurven heller nedover fra venstre mot høyre. Det betyr at ved lave priser er etterspurt kvantum høyt, og ved høye priser er etterspurt kvantum lavt. Denne fallende formen følger direkte av etterspørselsloven.'
      }
    },

    // --- BLOKK 3: Skift versus bevegelse ---
    {
      id: 'soe-2-1-def-2',
      type: 'definition',
      title: 'Skift i etterspørselen vs. bevegelse langs kurven',
      content: `**Bevegelse langs etterspørselskurven** skjer når prisen på selve varen endres. Forbrukerne beveger seg langs den eksisterende kurven til et nytt punkt.

**Skift i etterspørselskurven** skjer når andre faktorer enn prisen endres, slik at hele kurven flytter seg til høyre (økt etterspørsel) eller venstre (redusert etterspørsel).

Viktige faktorer som kan skifte etterspørselskurven:
- **Inntekt** – høyere inntekt gir normalt økt etterspørsel (for normale goder)
- **Prisen på relaterte varer** – substitutter og komplementære goder
- **Preferanser og smak** – trender, mote, reklame
- **Befolkningsstørrelse** – flere mennesker gir større samlet etterspørsel
- **Forventninger** – forventninger om fremtidige prisendringer`
    },
    {
      id: 'soe-2-1-example-2',
      type: 'example',
      title: 'Skift versus bevegelse',
      problem: 'I marked A synker prisen på sykler fra 8 000 kr til 5 000 kr, og antall solgte sykler øker. I marked B kommer en ny rapport som viser at sykling er bra for helsen, og antall solgte sykler øker – uten at prisen endres. Forklar forskjellen.',
      solution: `**Marked A – bevegelse langs kurven:**
Prisendringen (fra 8 000 til 5 000 kr) fører til en bevegelse langs den eksisterende etterspørselskurven. Vi beveger oss nedover langs kurven til et punkt med lavere pris og høyere kvantum. Selve kurven har ikke flyttet seg.

**Marked B – skift i kurven:**
Helserapporten endrer forbrukernes preferanser – flere ønsker å sykle. Dette er en endring i en annen faktor enn prisen, og fører til at hele etterspørselskurven skifter til høyre. Ved samme pris som før, ønsker nå flere forbrukere å kjøpe sykler.

**Hovedregelen:** Prisendring på selve varen = bevegelse langs kurven. Alt annet = skift i kurven.`
    },
    {
      id: 'soe-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-2-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av disse hendelsene fører til et skift i etterspørselskurven (ikke bare en bevegelse langs kurven)?',
        options: [
          { id: 'a', text: 'Prisen på pizzaen øker fra 120 kr til 150 kr', isCorrect: false },
          { id: 'b', text: 'En ny pizzarestaurant åpner og tilbyr halv pris', isCorrect: false },
          { id: 'c', text: 'Gjennomsnittsinntekten i befolkningen øker med 10 %', isCorrect: true },
          { id: 'd', text: 'En pizzeria setter ned prisen for å tiltrekke flere kunder', isCorrect: false }
        ],
        solution: 'En økning i gjennomsnittsinntekten er en endring i en annen faktor enn prisen på selve varen. Når inntekten øker, øker etterspørselen etter de fleste varer (normale goder), og hele etterspørselskurven skifter til høyre. Alternativ a og d er prisendringer som gir bevegelse langs kurven. Alternativ b handler om prisen på en relatert vare, men formuleringen beskriver en prisendring på den tilbudte varen.'
      }
    },
    {
      id: 'soe-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-2-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom substitusjonseffekten og inntektseffekten. Bruk et selvvalgt eksempel der prisen på en vare stiger, og vis hvordan begge effektene påvirker etterspurt kvantum.',
        hints: ['Substitusjonseffekten handler om at du bytter til billigere alternativer. Inntektseffekten handler om at du har råd til mindre.'],
        solution: `**Substitusjonseffekten** betyr at når en vare blir dyrere, ser forbrukeren etter billigere alternativer. Den relative prisen mellom varer endres.

**Inntektseffekten** betyr at når en vare blir dyrere, får forbrukeren lavere reell kjøpekraft – pengene rekker til mindre.

**Eksempel:** Prisen på norske jordbær øker kraftig pga. dårlig avling.

- *Substitusjonseffekten:* Forbrukerne bytter til importerte jordbær, bringebær eller andre bær som er relativt billigere.
- *Inntektseffekten:* Forbrukerne som fortsatt ønsker norske jordbær, har råd til færre kurver fordi pengene ikke strekker til like langt.

Begge effektene fører til at etterspurt kvantum av norske jordbær faller, i tråd med etterspørselsloven.`
      }
    },

    // --- BLOKK 4: Normale goder og mindreverdige goder ---
    {
      id: 'soe-2-1-text-3',
      type: 'text',
      content: `### Normale goder og mindreverdige goder

Hvordan etterspørselen reagerer på inntektsendringer, avhenger av hva slags gode vi ser på:

- **Normale goder:** Etterspørselen øker når inntekten øker. Eksempler: restaurantbesøk, merkeklær, reiser. De fleste varer er normale goder.
- **Mindreverdige (inferiøre) goder:** Etterspørselen synker når inntekten øker. Eksempler: billig ferdigmat, busskort (fordi man bytter til bil).

Skillet er viktig for å forstå etterspørselsskift: En inntektsøkning skifter etterspørselskurven til høyre for normale goder, men til venstre for mindreverdige goder.

Vi skiller også mellom **substitutter** og **komplementære goder**:

- **Substitutter** er varer som kan erstatte hverandre (Pepsi og Coca-Cola). Stiger prisen på den ene, øker etterspørselen etter den andre.
- **Komplementære goder** er varer som brukes sammen (printer og blekkpatroner). Stiger prisen på den ene, synker etterspørselen etter den andre.`
    },
    {
      id: 'soe-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-2-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Inntekten i befolkningen øker. Etterspørselen etter billig ferdigmat synker. Hva slags gode er billig ferdigmat?',
        options: [
          { id: 'a', text: 'Et normalt gode', isCorrect: false },
          { id: 'b', text: 'Et luksusgoode', isCorrect: false },
          { id: 'c', text: 'Et mindverdig (inferiørt) gode', isCorrect: true },
          { id: 'd', text: 'Et komplementært gode', isCorrect: false }
        ],
        solution: 'Et mindverdig (inferiørt) gode er et gode der etterspørselen synker når inntekten øker. Når folk tjener mer, erstatter de billig ferdigmat med bedre alternativer som ferskvarer eller restaurantmat. Etterspørselskurven skifter til venstre ved inntektsøkning.'
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'soe-2-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Etterspørsel** er den mengden av en vare forbrukerne er villige til og i stand til å kjøpe ved ulike priser.
- **Etterspørselsloven**: Når prisen stiger, synker etterspurt kvantum – og omvendt (ceteris paribus).
- Den fallende etterspørselskurven forklares av **substitusjonseffekten** (forbrukerne bytter til billigere alternativer) og **inntektseffekten** (forbrukernes reelle kjøpekraft reduseres).
- **Bevegelse langs kurven** skjer ved prisendring på selve varen. **Skift i kurven** skjer når andre faktorer endres (inntekt, preferanser, priser på relaterte varer osv.).
- **Normale goder** har økt etterspørsel ved økt inntekt. **Mindreverdige goder** har redusert etterspørsel ved økt inntekt.
- **Substitutter** erstatter hverandre, mens **komplementære goder** brukes sammen.`
    },

    // --- Samleoppgaver ---
    {
      id: 'soe-2-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-2-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gi et eksempel på to varer som er substitutter og to varer som er komplementære goder. Forklar hva som skjer med etterspørselen etter den ene varen dersom prisen på den andre stiger.',
        hints: ['Substitutter: prisøkning på den ene øker etterspørselen etter den andre. Komplementære goder: prisøkning på den ene reduserer etterspørselen etter den andre.'],
        solution: `**Substitutter – eksempel: Smør og margarin**
Dersom prisen på smør stiger, vil forbrukerne se etter billigere alternativer. Margarin kan erstatte smør i mange bruksområder, og etterspørselen etter margarin øker. Etterspørselskurven for margarin skifter til høyre.

**Komplementære goder – eksempel: Bil og bensin**
Dersom prisen på bensin stiger kraftig, blir det dyrere å kjøre bil. Etterspørselen etter biler (særlig bensindrevne) vil da synke, fordi drivstoffkostnaden gjør bilbruk mindre attraktivt. Etterspørselskurven for biler skifter til venstre.`
      }
    },
    {
      id: 'soe-2-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'soe-2-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Analyser følgende scenario: Regjeringen øker avgiften på sukkerholdig brus med 50 %. Forklar ved hjelp av etterspørselsteori hvordan dette påvirker etterspørselen etter (a) sukkerholdig brus, (b) sukkerfri brus, og (c) sjokolade. Bruk begrepene bevegelse langs kurven, skift, substitutter og komplementære goder.',
        hints: ['Tenk på hva som skjer med prisen på varen selv vs. relaterte varer.'],
        solution: `**(a) Sukkerholdig brus:** Avgiftsøkningen gjør sukkerholdig brus dyrere. Dette er en prisøkning på selve varen, og gir en **bevegelse oppover langs etterspørselskurven** for sukkerholdig brus. Etterspurt kvantum faller.

**(b) Sukkerfri brus:** Sukkerfri brus er en **substitutt** for sukkerholdig brus. Når sukkerholdig brus blir dyrere, bytter mange forbrukere til sukkerfri brus. Etterspørselskurven for sukkerfri brus **skifter til høyre** – etterspørselen øker ved alle prisnivåer.

**(c) Sjokolade:** Her er sammenhengen mer usikker. Dersom sjokolade og brus er **komplementære goder** (f.eks. mange kjøper begge som «kosekveld-pakke»), kan lavere brusforbruk føre til at etterspørselen etter sjokolade faller litt – etterspørselskurven skifter til venstre. Men dersom sjokolade i stedet fungerer som en substitutt for brus (søtsuget tilfredsstilles på en annen måte), kan etterspørselen etter sjokolade øke.`
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.2: Tilbud
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_2_2: TextbookChapter = {
  id: 'samfokonomi-1-2-2',
  courseId: 'samfokonomi-1',
  chapterNumber: '2.2',
  title: 'Tilbud',
  description: 'Tilbudskurven, tilbudsloven, grensekostnad, produsentenes atferd, og faktorer som skifter tilbudskurven.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for ulike markedsformer og bruke disse til å analysere ulike markeder'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'soe-2-2-intro',
      type: 'text',
      content: `## Tilbud

Mens etterspørselen handler om forbrukernes side av markedet, handler **tilbudet** om produsentenes side. Hvor mye av en vare er bedriftene villige til å produsere og selge? Og hva bestemmer dette?

Svaret ligger i kostnader, priser og lønnsomhet. Bedrifter produserer for å tjene penger, og de tilpasser produksjonen etter hva som er lønnsomt. I dette kapittelet ser vi på tilbudssiden av markedet – den andre halvdelen av puslespillet som avgjør priser og mengder.`
    },

    // --- BLOKK 1: Tilbudsbegrepet ---
    {
      id: 'soe-2-2-def-1',
      type: 'definition',
      title: 'Tilbud',
      content: `**Tilbud** er den mengden av en vare eller tjeneste som produsentene er villige til og i stand til å selge ved ulike priser, i en gitt tidsperiode, alt annet likt.

Tilsvarende etterspørselen skiller vi mellom:
- **Tilbudt kvantum** – den konkrete mengden produsentene ønsker å selge ved én bestemt pris
- **Tilbud** – hele sammenhengen mellom pris og tilbudt kvantum (hele kurven)`
    },
    {
      id: 'soe-2-2-text-1',
      type: 'text',
      content: `### Tilbudsloven

Tilbudsloven beskriver sammenhengen mellom pris og tilbudt kvantum:

> Når prisen på en vare stiger, vil tilbudt kvantum øke – og omvendt – alt annet likt.

Dette gir oss en **stigende tilbudskurve**. I et standard markedsdiagram heller kurven oppover fra venstre mot høyre.

Logikken er enkel: Når prisen er høy, er det mer lønnsomt å produsere, og bedriftene vil ønske å selge mer. Nye bedrifter kan også komme inn i markedet fordi det nå er lønnsomt. Når prisen er lav, er lønnsomheten dårlig, og noen bedrifter kutter produksjonen eller legger ned.`
    },
    {
      id: 'soe-2-2-example-1',
      type: 'example',
      title: 'Tilbudsloven for jordbærbønder',
      problem: 'En jordbærbonde vurderer hvor mange kasser jordbær hun skal produsere neste sesong. Forklar hvorfor hun vil produsere mer dersom markedsprisen stiger fra 40 kr til 70 kr per kurv.',
      solution: `Ved 40 kr per kurv er lønnsomheten begrenset. Bonden dekker kanskje akkurat kostnadene for de mest produktive jordene, men det lønner seg ikke å dyrke på de mindre fruktbare områdene.

Ved 70 kr per kurv øker lønnsomheten betydelig. Nå vil bonden:
1. Bruke mer arbeidskraft og gjødsel for å øke avlingen på eksisterende jord
2. Ta i bruk mindre produktive jordstykker som ikke var lønnsomme ved 40 kr
3. Kanskje investere i drivhus for å forlenge sesongen

Resultatet: Tilbudt kvantum øker fra f.eks. 500 til 900 kurver – i tråd med tilbudsloven.`
    },
    {
      id: 'soe-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-2-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva sier tilbudsloven?',
        options: [
          { id: 'a', text: 'Når prisen stiger, synker tilbudt kvantum', isCorrect: false },
          { id: 'b', text: 'Når prisen stiger, øker tilbudt kvantum – alt annet likt', isCorrect: true },
          { id: 'c', text: 'Tilbudet er alltid konstant uavhengig av pris', isCorrect: false },
          { id: 'd', text: 'Bedrifter produserer like mye uansett markedspris', isCorrect: false }
        ],
        solution: 'Tilbudsloven sier at det er en positiv sammenheng mellom pris og tilbudt kvantum: når prisen stiger, øker tilbudt kvantum, og omvendt – alt annet likt. Høyere pris gjør det mer lønnsomt å produsere, og bedriftene tilbyr mer.'
      }
    },

    // --- BLOKK 2: Grensekostnad ---
    {
      id: 'soe-2-2-def-2',
      type: 'definition',
      title: 'Grensekostnad (marginalkostnad)',
      content: `**Grensekostnad** (også kalt marginalkostnad) er kostnaden ved å produsere én ekstra enhet av en vare.

Matematisk: $MC = \\frac{\\Delta TC}{\\Delta Q}$

der $MC$ er grensekostnad, $\\Delta TC$ er endring i totalkostnad, og $\\Delta Q$ er endring i kvantum.

Grensekostnaden er normalt **stigende** – det blir gradvis dyrere å produsere hver ekstra enhet. Årsaken er **avtakende meravkastning**: etter hvert som man bruker stadig mer av en variabel innsatsfaktor (f.eks. arbeidskraft) sammen med faste innsatsfaktorer (f.eks. fabrikklokale), synker produktiviteten per ekstra enhet.`
    },
    {
      id: 'soe-2-2-text-2',
      type: 'text',
      content: `### Grensekostnad og tilbudskurven

Det er en nær sammenheng mellom grensekostnaden og tilbudskurven. En profittmaksimerende bedrift produserer opp til det punktet der **prisen er lik grensekostnaden** ($P = MC$).

- Dersom prisen er høyere enn grensekostnaden for neste enhet, lønner det seg å produsere den.
- Dersom prisen er lavere enn grensekostnaden for neste enhet, er det ulønnsomt å produsere den.

Tilbudskurven for en bedrift er derfor i praksis den **stigende delen av grensekostnadskurven** (over et visst minimumspunkt). Når prisen i markedet stiger, er bedriften villig til å produsere flere enheter – fordi grensekostnaden for de ekstra enhetene fortsatt er lavere enn prisen.`
    },
    {
      id: 'soe-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-2-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En bedrift har en grensekostnad på 80 kr for den 101. enheten. Markedsprisen er 75 kr. Hva bør bedriften gjøre?',
        options: [
          { id: 'a', text: 'Produsere den 101. enheten – den er lønnsom', isCorrect: false },
          { id: 'b', text: 'Ikke produsere den 101. enheten – grensekostnaden overstiger prisen', isCorrect: true },
          { id: 'c', text: 'Legge ned hele produksjonen', isCorrect: false },
          { id: 'd', text: 'Øke prisen til over 80 kr', isCorrect: false }
        ],
        solution: 'Bedriften bør ikke produsere den 101. enheten. Grensekostnaden (80 kr) er høyere enn markedsprisen (75 kr), noe som betyr at bedriften taper 5 kr på den enheten. Bedriften bør produsere opp til det punktet der pris = grensekostnad, og ikke lenger.'
      }
    },

    // --- BLOKK 3: Skift i tilbud ---
    {
      id: 'soe-2-2-text-3',
      type: 'text',
      content: `### Skift i tilbudskurven

Akkurat som for etterspørselen gjelder det at:
- **Prisendring** på selve varen gir **bevegelse langs tilbudskurven**
- **Andre faktorer** gir **skift i tilbudskurven**

Faktorer som kan skifte tilbudskurven:

| Faktor | Effekt ved økning | Skift |
|--------|-------------------|-------|
| **Innsatsfaktorpriser** (råvarer, lønn) | Dyrere å produsere → lavere tilbud | Venstre |
| **Teknologi** (ny, bedre teknologi) | Billigere å produsere → økt tilbud | Høyre |
| **Antall produsenter** | Flere produsenter → økt tilbud | Høyre |
| **Avgifter** | Øker kostnadene → lavere tilbud | Venstre |
| **Subsidier** | Senker kostnadene → økt tilbud | Høyre |
| **Forventninger** (om fremtidige priser) | Produsentene tilpasser seg | Varierer |

Et **skift til høyre** betyr at produsentene tilbyr mer ved enhver pris. Et **skift til venstre** betyr at de tilbyr mindre.`
    },
    {
      id: 'soe-2-2-example-2',
      type: 'example',
      title: 'Teknologisk fremskritt og tilbudet',
      problem: 'En fiskeoppdrettsbedrift investerer i ny automatisert fôringsteknologi som halverer arbeidskostnadene. Forklar hvordan dette påvirker tilbudskurven.',
      solution: `Den nye teknologien senker bedriftens produksjonskostnader. Grensekostnaden for hver enhet fisk faller, fordi det kreves mindre arbeidskraft per enhet.

**Konsekvens:** Ved enhver markedspris kan bedriften nå produsere mer med fortjeneste enn før. Tilbudskurven **skifter til høyre**. Bedriften kan:
- Produsere samme mengde til lavere kostnad (og høyere fortjeneste)
- Produsere mer til samme kostnad som før
- Eller en kombinasjon av begge

Merk: dette er et skift, ikke en bevegelse langs kurven, fordi endringen skyldes teknologi – ikke en prisendring på fisken.`
    },
    {
      id: 'soe-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-2-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Prisen på stål (en viktig innsatsfaktor) øker kraftig. Hva skjer med tilbudskurven for biler?',
        options: [
          { id: 'a', text: 'Tilbudskurven skifter til høyre', isCorrect: false },
          { id: 'b', text: 'Tilbudskurven skifter til venstre', isCorrect: true },
          { id: 'c', text: 'Det skjer bare en bevegelse langs kurven', isCorrect: false },
          { id: 'd', text: 'Tilbudskurven påvirkes ikke', isCorrect: false }
        ],
        solution: 'Stål er en innsatsfaktor i bilproduksjon. Når stålprisen øker, stiger produksjonskostnadene (grensekostnaden) for bil-produsentene. Ved enhver markedspris for biler er det nå dyrere å produsere, og produsentene tilbyr færre enheter. Tilbudskurven skifter til venstre.'
      }
    },
    {
      id: 'soe-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-2-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva grensekostnad (marginalkostnad) er. Hvorfor er grensekostnaden vanligvis stigende, og hva har dette å si for formen på tilbudskurven?',
        hints: ['Tenk på avtakende meravkastning – hva skjer når du bruker stadig mer arbeidskraft i en fabrikk med begrenset plass?'],
        solution: `**Grensekostnad** er kostnaden ved å produsere én ekstra enhet av en vare. Den beregnes som endring i totalkostnad delt på endring i produksjonsmengde.

**Stigende grensekostnad:** Grensekostnaden er vanligvis stigende på grunn av **avtakende meravkastning**. Etter hvert som en bedrift produserer stadig mer, må den ta i bruk mindre produktive ressurser, betale overtid, eller oppleve trengsel i lokalene. Eksempel: De første arbeiderne i en fabrikk er svært produktive, men den 50. arbeideren bidrar mindre fordi maskiner og plass er opptatt.

**Sammenhengen med tilbudskurven:** Fordi grensekostnaden er stigende, krever bedriften en høyere pris for å produsere flere enheter. Dette er grunnen til at tilbudskurven er stigende – jo høyere prisen er, jo flere enheter er det lønnsomt å produsere.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'soe-2-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Tilbud** er den mengden produsentene er villige til å selge ved ulike priser.
- **Tilbudsloven**: Når prisen stiger, øker tilbudt kvantum – og omvendt (ceteris paribus).
- **Grensekostnad** (marginalkostnad) er kostnaden ved å produsere én ekstra enhet. Bedriften produserer der $P = MC$.
- Tilbudskurven er stigende fordi grensekostnaden er stigende (avtakende meravkastning).
- **Bevegelse langs kurven** skjer ved prisendring. **Skift i kurven** skjer ved endring i innsatsfaktorpriser, teknologi, antall produsenter, avgifter eller subsidier.
- Lavere produksjonskostnader (ny teknologi, subsidier) skifter kurven til **høyre**. Høyere kostnader (dyrere råvarer, nye avgifter) skifter kurven til **venstre**.`
    },

    // --- Samleoppgaver ---
    {
      id: 'soe-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-2-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar om følgende hendelser gir en bevegelse langs tilbudskurven eller et skift i tilbudskurven for norsk laks. Begrunn svaret. (a) Prisen på laks i markedet stiger. (b) Staten innfører en ny miljøavgift på oppdrettsanlegg. (c) En ny vaksine gjør at færre laks dør av sykdom.',
        hints: ['Er det prisen på selve varen som endres, eller er det andre faktorer?'],
        solution: `**(a) Prisen på laks stiger** – dette er en prisendring på selve varen, og gir en **bevegelse langs tilbudskurven** (oppover mot høyre). Tilbudt kvantum øker.

**(b) Ny miljøavgift** – avgiften øker produksjonskostnadene. Dette er en endring i en annen faktor enn prisen, og gir et **skift i tilbudskurven til venstre**. Ved enhver pris tilbys det nå mindre laks.

**(c) Ny vaksine** – vaksinen reduserer svinn og senker effektive produksjonskostnader per enhet. Dette er en teknologisk forbedring som gir et **skift i tilbudskurven til høyre**. Produsentene kan tilby mer laks ved enhver pris.`
      }
    },
    {
      id: 'soe-2-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-2-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av følgende faktorer vil skifte tilbudskurven til høyre?',
        options: [
          { id: 'a', text: 'Høyere lønnskostnader for arbeiderne', isCorrect: false },
          { id: 'b', text: 'En ny avgift på produksjonen', isCorrect: false },
          { id: 'c', text: 'Innføring av ny teknologi som senker kostnadene', isCorrect: true },
          { id: 'd', text: 'Økte priser på råvarer', isCorrect: false }
        ],
        solution: 'Ny teknologi som senker produksjonskostnadene gjør at bedriftene kan tilby mer ved enhver pris. Tilbudskurven skifter til høyre. De andre alternativene (høyere lønn, nye avgifter, dyrere råvarer) øker alle kostnadene og vil skifte kurven til venstre.'
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.3: Markedslikevekt
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_2_3: TextbookChapter = {
  id: 'samfokonomi-1-2-3',
  courseId: 'samfokonomi-1',
  chapterNumber: '2.3',
  title: 'Markedslikevekt',
  description: 'Likevektspris og likevektskvantum, overskuddstilbud og overskuddsetterspørsel, og prisens rolle som justeringsmekanisme.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for ulike markedsformer og bruke disse til å analysere ulike markeder'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'soe-2-3-intro',
      type: 'text',
      content: `## Markedslikevekt

Vi har nå sett på etterspørsel og tilbud hver for seg. Når vi setter disse sammen i ett diagram, oppstår noe fascinerende: markedet finner sin egen balanse. Prisen justerer seg automatisk til et punkt der den mengden forbrukerne vil kjøpe, er nøyaktig lik den mengden produsentene vil selge.

Dette balansepunktet – **markedslikevekten** – er et av de viktigste konseptene i samfunnsøkonomien. Det forklarer hvordan priser dannes i frie markeder uten at noen sentral myndighet bestemmer dem.`
    },

    // --- BLOKK 1: Likevektsbegrepet ---
    {
      id: 'soe-2-3-def-1',
      type: 'definition',
      title: 'Markedslikevekt',
      content: `**Markedslikevekt** er situasjonen der etterspurt kvantum er lik tilbudt kvantum. I likevekten:

- **Likevektsprisen** ($P^*$): Den prisen der etterspurt kvantum = tilbudt kvantum
- **Likevektskvantumet** ($Q^*$): Den mengden som omsettes i likevekten

Grafisk er likevekten punktet der **etterspørselskurven krysser tilbudskurven**. Ved denne prisen er det ingen overskuddstilbud eller overskuddsetterspørsel – markedet «klarerer».`
    },
    {
      id: 'soe-2-3-example-1',
      type: 'example',
      title: 'Finne markedslikevekten',
      problem: 'I markedet for epler er etterspørselen gitt ved $Q_d = 1000 - 20P$ og tilbudet ved $Q_s = -200 + 40P$, der $P$ er prisen i kroner og $Q$ er antall kilo. Finn likevektspris og likevektskvantum.',
      solution: `I likevekten er etterspurt kvantum lik tilbudt kvantum:

$Q_d = Q_s$

$1000 - 20P = -200 + 40P$

$1000 + 200 = 40P + 20P$

$1200 = 60P$

$P^* = 20 \\text{ kr}$

Vi setter $P^* = 20$ inn i en av ligningene for å finne $Q^*$:

$Q^* = 1000 - 20 \\cdot 20 = 1000 - 400 = 600 \\text{ kilo}$

**Kontroll:** $Q_s = -200 + 40 \\cdot 20 = -200 + 800 = 600$ ✓

**Likevektsprisen er 20 kr per kilo, og likevektskvantumet er 600 kilo.**`
    },
    {
      id: 'soe-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-2-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner markedslikevekten?',
        options: [
          { id: 'a', text: 'Prisen er så høy som mulig', isCorrect: false },
          { id: 'b', text: 'Etterspurt kvantum er lik tilbudt kvantum', isCorrect: true },
          { id: 'c', text: 'Alle forbrukere får kjøpt alt de ønsker uansett pris', isCorrect: false },
          { id: 'd', text: 'Produsentene bestemmer prisen alene', isCorrect: false }
        ],
        solution: 'Markedslikevekten kjennetegnes ved at etterspurt kvantum er lik tilbudt kvantum. Det er det punktet der etterspørselskurven krysser tilbudskurven. Markedet klarerer – det er verken overskudd eller mangel på varen.'
      }
    },

    // --- BLOKK 2: Ulikevekt ---
    {
      id: 'soe-2-3-def-2',
      type: 'definition',
      title: 'Overskuddstilbud og overskuddsetterspørsel',
      content: `Når markedet ikke er i likevekt, oppstår enten:

**Overskuddstilbud (overproduksjon):** Tilbudt kvantum > etterspurt kvantum. Prisen er for høy – det produseres mer enn forbrukerne ønsker å kjøpe. Varer hoper seg opp.

**Overskuddsetterspørsel (mangel/knapphet):** Etterspurt kvantum > tilbudt kvantum. Prisen er for lav – forbrukerne ønsker å kjøpe mer enn det som produseres. Køer og ventelister oppstår.`
    },
    {
      id: 'soe-2-3-text-1',
      type: 'text',
      content: `### Prisens rolle som justeringsmekanisme

Markedet har en innebygd mekanisme for å bevege seg mot likevekten:

**Ved overskuddstilbud (pris over likevekt):**
1. Varene selger ikke – lagre fylles opp
2. Selgerne setter ned prisen for å bli kvitt varene
3. Lavere pris øker etterspurt kvantum og reduserer tilbudt kvantum
4. Prosessen fortsetter til likevekten er nådd

**Ved overskuddsetterspørsel (pris under likevekt):**
1. Det er ikke nok varer til alle som vil kjøpe
2. Kjøperne byr opp prisen / selgerne øker prisen
3. Høyere pris reduserer etterspurt kvantum og øker tilbudt kvantum
4. Prosessen fortsetter til likevekten er nådd

Denne selvjusterende mekanismen kalles ofte «den usynlige hånd» – et begrep fra Adam Smith. Ingen enkeltperson styrer prisen, men markedet finner likevel balanse gjennom prismekanismen.`
    },
    {
      id: 'soe-2-3-example-2',
      type: 'example',
      title: 'Overskuddstilbud i praksis',
      problem: 'En elektronikkjede har kjøpt inn 5 000 enheter av en ny mobil til 8 000 kr per stk. Ved denne prisen er det bare 2 000 kunder som ønsker å kjøpe. Forklar hva som skjer.',
      solution: `**Situasjonen:** Ved prisen 8 000 kr er tilbudt kvantum (5 000) mye høyere enn etterspurt kvantum (2 000). Det er et overskuddstilbud på 3 000 enheter.

**Justeringsprosessen:**
1. Mobilene blir liggende på lager – kjeden binder kapital og betaler lagerkostnader.
2. Kjeden setter ned prisen, for eksempel til 6 500 kr.
3. Prisreduksjonen øker etterspurt kvantum (kanskje til 3 500 enheter).
4. Dersom det fortsatt er overskudd, senkes prisen ytterligere.
5. Prosessen fortsetter til prisen har falt til et nivå der etterspurt kvantum = tilbudt kvantum.

I praksis ser vi dette som «salg» og «tilbudskampanjer» – butikkenes måte å kvitte seg med overskuddslagre på.`
    },
    {
      id: 'soe-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-2-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Prisen i et marked er lavere enn likevektsprisen. Hva vil skje?',
        options: [
          { id: 'a', text: 'Det oppstår overskuddstilbud, og prisen presses nedover', isCorrect: false },
          { id: 'b', text: 'Det oppstår overskuddsetterspørsel, og prisen presses oppover', isCorrect: true },
          { id: 'c', text: 'Markedet forblir i denne situasjonen permanent', isCorrect: false },
          { id: 'd', text: 'Tilbudet øker og etterspørselen synker', isCorrect: false }
        ],
        solution: 'Når prisen er lavere enn likevektsprisen, ønsker forbrukerne å kjøpe mer enn det produsentene tilbyr. Det oppstår overskuddsetterspørsel (mangel). Forbrukerne konkurrerer om de knappe varene og byr opp prisen. Prisen presses oppover mot likevekten.'
      }
    },

    // --- BLOKK 3: Endringer i likevekten ---
    {
      id: 'soe-2-3-text-2',
      type: 'text',
      content: `### Endringer i likevekten

Likevektspris og likevektskvantum endres når etterspørsels- eller tilbudskurven skifter:

| Endring | Effekt på likevektspris | Effekt på likevektskvantum |
|---------|------------------------|-----------------------------|
| Etterspørselen øker (skift høyre) | Stiger | Øker |
| Etterspørselen synker (skift venstre) | Faller | Synker |
| Tilbudet øker (skift høyre) | Faller | Øker |
| Tilbudet synker (skift venstre) | Stiger | Synker |

Dersom **begge** kurver skifter samtidig, blir resultatet mer usikkert og avhenger av størrelsen på skiftene.`
    },
    {
      id: 'soe-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-2-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Tilbudet av avokado reduseres kraftig pga. dårlig avling i de viktigste produsentlandene. Hva skjer med likevektspris og likevektskvantum?',
        options: [
          { id: 'a', text: 'Prisen faller, kvantumet øker', isCorrect: false },
          { id: 'b', text: 'Prisen stiger, kvantumet synker', isCorrect: true },
          { id: 'c', text: 'Prisen faller, kvantumet synker', isCorrect: false },
          { id: 'd', text: 'Prisen stiger, kvantumet øker', isCorrect: false }
        ],
        solution: 'Dårlig avling reduserer tilbudet – tilbudskurven skifter til venstre. I den nye likevekten er prisen høyere og kvantumet lavere enn før. Forbrukerne betaler mer for avokado, men det omsettes færre avokadoer.'
      }
    },
    {
      id: 'soe-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-2-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'I markedet for elektriske sparkesykler er etterspørselen $Q_d = 800 - 10P$ og tilbudet $Q_s = -100 + 15P$. (a) Finn likevektspris og likevektskvantum. (b) Hva skjer hvis myndighetene fastsetter prisen til 30 kr? Er det overskuddstilbud eller overskuddsetterspørsel, og hvor stort er overskuddet?',
        hints: ['Sett $Q_d = Q_s$ for å finne likevekten. For del (b), regn ut $Q_d$ og $Q_s$ ved $P = 30$.'],
        solution: `**(a) Likevekt:**
$Q_d = Q_s$
$800 - 10P = -100 + 15P$
$900 = 25P$
$P^* = 36$ kr
$Q^* = 800 - 10 \\cdot 36 = 800 - 360 = 440$ enheter

**(b) Pris = 30 kr:**
$Q_d = 800 - 10 \\cdot 30 = 800 - 300 = 500$ enheter
$Q_s = -100 + 15 \\cdot 30 = -100 + 450 = 350$ enheter

Etterspurt kvantum (500) er større enn tilbudt kvantum (350). Det oppstår **overskuddsetterspørsel** (mangel) på $500 - 350 = 150$ enheter. Prisen 30 kr er under likevektsprisen, og det er ikke nok sparkesykler til alle som ønsker å kjøpe.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'soe-2-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Markedslikevekt** oppstår der etterspørselskurven krysser tilbudskurven ($Q_d = Q_s$).
- **Likevektsprisen** ($P^*$) klarerer markedet – ingen overskudd og ingen mangel.
- **Overskuddstilbud** oppstår når prisen er over likevekt (for mye produsert) – prisen presses ned.
- **Overskuddsetterspørsel** oppstår når prisen er under likevekt (for lite tilgjengelig) – prisen presses opp.
- Markedet justerer seg automatisk mot likevekten gjennom **prismekanismen** (Adam Smiths «usynlige hånd»).
- Skift i etterspørsel eller tilbud gir ny likevektspris og nytt likevektskvantum.`
    },

    // --- Samleoppgaver ---
    {
      id: 'soe-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-2-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En ny vitenskapelig studie viser at kaffe har store helsefordeler. Samtidig rammer en storm de viktigste kaffeproduserende regionene og ødelegger deler av avlingen. Analyser hva som skjer med likevektsprisen og likevektskvantumet for kaffe. Hvilken retning er tydelig, og hva er usikkert?',
        hints: ['Helserapporten påvirker etterspørselen. Stormen påvirker tilbudet. Tenk på begge skiftene samtidig.'],
        solution: `**Etterspørselen:** Helserapporten gjør kaffe mer attraktivt – preferansene endres. Etterspørselskurven skifter til **høyre** (økt etterspørsel).

**Tilbudet:** Stormen ødelegger avlingen og reduserer tilbudet av kafferåvarer. Tilbudskurven skifter til **venstre** (redusert tilbud).

**Effekt på likevektsprisen:** Økt etterspørsel presser prisen opp. Redusert tilbud presser også prisen opp. Begge effektene trekker i samme retning: **Likevektsprisen stiger helt sikkert.**

**Effekt på likevektskvantumet:** Økt etterspørsel trekker kvantumet opp, mens redusert tilbud trekker kvantumet ned. Effektene trekker i **motsatt retning**. Om kvantumet øker, synker eller forblir uendret, avhenger av hvilken effekt som er størst. **Kvantumet er usikkert.**`
      }
    },
    {
      id: 'soe-2-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-2-3-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kalles situasjonen der prisen er så høy at det produseres mer enn forbrukerne ønsker å kjøpe?',
        options: [
          { id: 'a', text: 'Overskuddsetterspørsel', isCorrect: false },
          { id: 'b', text: 'Markedslikevekt', isCorrect: false },
          { id: 'c', text: 'Overskuddstilbud', isCorrect: true },
          { id: 'd', text: 'Priselastisitet', isCorrect: false }
        ],
        solution: 'Når prisen er for høy (over likevekt), er tilbudt kvantum høyere enn etterspurt kvantum. Denne situasjonen kalles overskuddstilbud (eller overproduksjon). Varene hoper seg opp, og markedskreftene vil presse prisen nedover mot likevekten.'
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.4: Priselastisitet
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_2_4: TextbookChapter = {
  id: 'samfokonomi-1-2-4',
  courseId: 'samfokonomi-1',
  chapterNumber: '2.4',
  title: 'Priselastisitet',
  description: 'Etterspørselens priselastisitet, elastisk versus uelastisk etterspørsel, krysspriselastisitet og inntektselastisitet.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for ulike markedsformer og bruke disse til å analysere ulike markeder'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'soe-2-4-intro',
      type: 'text',
      content: `## Priselastisitet

Vi vet fra etterspørselsloven at etterspurt kvantum synker når prisen stiger. Men **hvor mye** synker det? Reagerer forbrukerne kraftig på en prisøkning, eller merker de det knapt?

Svaret varierer enormt fra vare til vare. En liten prisøkning på flyreiser kan føre til at mange kunder velger bort reisen, mens den samme prosentvise prisøkningen på insulin knapt påvirker etterspørselen. Begrepet som fanger denne forskjellen, er **priselastisitet** – et mål på hvor følsom etterspørselen er for prisendringer.`
    },

    // --- BLOKK 1: Etterspørselens priselastisitet ---
    {
      id: 'soe-2-4-def-1',
      type: 'definition',
      title: 'Etterspørselens priselastisitet',
      content: `**Etterspørselens priselastisitet** ($E_p$) måler hvor mange prosent etterspurt kvantum endres når prisen endres med én prosent:

$$E_p = \\frac{\\text{Prosentvis endring i etterspurt kvantum}}{\\text{Prosentvis endring i pris}} = \\frac{\\%\\Delta Q_d}{\\%\\Delta P}$$

Siden etterspurt kvantum og pris normalt beveger seg i motsatt retning (etterspørselsloven), vil $E_p$ normalt være et **negativt tall**. Ofte bruker vi absoluttverdien $|E_p|$ for enkelhet.

- $|E_p| > 1$: **Elastisk** etterspørsel – kvantum reagerer sterkt på prisendringer
- $|E_p| = 1$: **Enhetselastisk** etterspørsel
- $|E_p| < 1$: **Uelastisk** etterspørsel – kvantum reagerer svakt på prisendringer`
    },
    {
      id: 'soe-2-4-example-1',
      type: 'example',
      title: 'Beregning av priselastisitet',
      problem: 'Prisen på kinobesøk øker fra 150 kr til 180 kr. Antall solgte billetter faller fra 10 000 til 8 000 per uke. Beregn etterspørselens priselastisitet.',
      solution: `**Prosentvis endring i kvantum:**
$\\%\\Delta Q = \\frac{8000 - 10000}{10000} \\times 100 = -20\\%$

**Prosentvis endring i pris:**
$\\%\\Delta P = \\frac{180 - 150}{150} \\times 100 = 20\\%$

**Priselastisitet:**
$E_p = \\frac{-20\\%}{20\\%} = -1{,}0$

$|E_p| = 1{,}0$ → Enhetselastisk etterspørsel.

Etterspørselen faller prosentvis like mye som prisen stiger. I dette tilfellet faller billettinntektene ikke, fordi den prosentvise prisøkningen akkurat oppveies av det prosentvise fallet i antall billetter.`
    },
    {
      id: 'soe-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-2-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr det at etterspørselen etter en vare er «uelastisk»?',
        options: [
          { id: 'a', text: 'Etterspurt kvantum reagerer sterkt på prisendringer ($|E_p| > 1$)', isCorrect: false },
          { id: 'b', text: 'Etterspurt kvantum reagerer svakt på prisendringer ($|E_p| < 1$)', isCorrect: true },
          { id: 'c', text: 'Etterspørselen er alltid null uansett pris', isCorrect: false },
          { id: 'd', text: 'Prisen endres aldri', isCorrect: false }
        ],
        solution: 'Uelastisk etterspørsel betyr at etterspurt kvantum reagerer relativt lite på prisendringer. Absoluttverdien av priselastisiteten er mindre enn 1 ($|E_p| < 1$). Selv om prisen stiger en del, faller etterspurt kvantum bare litt. Typiske eksempler er nødvendighetsgoder som brød, medisiner og drivstoff.'
      }
    },

    // --- BLOKK 2: Hva bestemmer elastisiteten? ---
    {
      id: 'soe-2-4-text-1',
      type: 'text',
      content: `### Faktorer som påvirker priselastisiteten

Hva avgjør om etterspørselen etter en vare er elastisk eller uelastisk? Flere faktorer spiller inn:

1. **Tilgjengelighet av substitutter:** Jo flere substitutter en vare har, jo mer elastisk er etterspørselen. Hvis du kan bytte til noe annet, gjør du det når prisen stiger.

2. **Nødvendighet versus luksusvare:** Nødvendighetsgoder (mat, medisin) har uelastisk etterspørsel – du trenger dem uansett. Luksusvarer (ferie, dyre restauranter) har elastisk etterspørsel.

3. **Andel av inntekten:** Varer som utgjør en stor andel av budsjettet (bolig, bil) har mer elastisk etterspørsel enn småting (fyrstikker, tannpirkere).

4. **Tidshorisont:** Etterspørselen er mer elastisk på lang sikt enn på kort sikt, fordi forbrukerne har bedre mulighet til å tilpasse seg over tid.

5. **Avgrensning av markedet:** Jo smalere markedet er definert, jo mer elastisk er etterspørselen. Etterspørselen etter «mat» er uelastisk, men etterspørselen etter «en bestemt type ost» er svært elastisk.`
    },
    {
      id: 'soe-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-2-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av disse varene vil trolig ha den mest uelastiske etterspørselen?',
        options: [
          { id: 'a', text: 'En bestemt merkevare av sjokolade', isCorrect: false },
          { id: 'b', text: 'Charterreiser til Syden', isCorrect: false },
          { id: 'c', text: 'Reseptbelagte hjertemedisiner', isCorrect: true },
          { id: 'd', text: 'Kinobesøk på fredagskveld', isCorrect: false }
        ],
        solution: 'Reseptbelagte hjertemedisiner har svært uelastisk etterspørsel fordi: (1) de er nødvendige for å overleve, (2) det finnes få eller ingen substitutter, og (3) pasientene har liten mulighet til å kutte forbruket. Sjokolade har mange substitutter, charterreiser er luksusvarer, og kino har mange alternativer – alle disse har mer elastisk etterspørsel.'
      }
    },

    // --- BLOKK 3: Elastisitet og totalinntekt ---
    {
      id: 'soe-2-4-text-2',
      type: 'text',
      content: `### Priselastisitet og totalinntekt

Priselastisiteten har direkte betydning for bedriftens inntekter. Totalinntekten er $TR = P \\times Q$.

| Elastisitet | Prisøkning | Prisreduksjon |
|-------------|-----------|---------------|
| **Elastisk** ($|E_p| > 1$) | Totalinntekt **synker** (kvantumsfall dominerer) | Totalinntekt **stiger** |
| **Enhetselastisk** ($|E_p| = 1$) | Totalinntekt **uendret** | Totalinntekt **uendret** |
| **Uelastisk** ($|E_p| < 1$) | Totalinntekt **stiger** (prisøkning dominerer) | Totalinntekt **synker** |

**Praktisk betydning:** En bedrift med uelastisk etterspørsel kan øke prisen og tjene mer – fordi kundene ikke forlater varen. En bedrift med elastisk etterspørsel vil tape inntekter ved prisøkning, fordi for mange kunder forsvinner.`
    },
    {
      id: 'soe-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-2-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En bedrift har elastisk etterspørsel ($|E_p| = 1{,}8$) og øker prisen med 10 %. Hva skjer med totalinntekten?',
        options: [
          { id: 'a', text: 'Totalinntekten stiger fordi prisen er høyere', isCorrect: false },
          { id: 'b', text: 'Totalinntekten er uendret', isCorrect: false },
          { id: 'c', text: 'Totalinntekten synker fordi mange kunder forsvinner', isCorrect: true },
          { id: 'd', text: 'Totalinntekten dobles', isCorrect: false }
        ],
        solution: 'Med elastisk etterspørsel ($|E_p| = 1{,}8$) vil en prisøkning på 10 % føre til et fall i etterspurt kvantum på ca. 18 %. Prosentvis faller kvantumet mer enn prisen stiger. Totalinntekten ($P \\times Q$) synker fordi tapet av kunder mer enn oppveier den høyere prisen per enhet.'
      }
    },

    // --- BLOKK 4: Krysspris- og inntektselastisitet ---
    {
      id: 'soe-2-4-def-2',
      type: 'definition',
      title: 'Krysspriselastisitet og inntektselastisitet',
      content: `**Krysspriselastisitet** ($E_{xy}$) måler hvordan etterspørselen etter vare X påvirkes av prisendring på vare Y:

$$E_{xy} = \\frac{\\%\\Delta Q_x}{\\%\\Delta P_y}$$

- $E_{xy} > 0$: Varene er **substitutter** (prisøkning på Y øker etterspørselen etter X)
- $E_{xy} < 0$: Varene er **komplementære** (prisøkning på Y reduserer etterspørselen etter X)

**Inntektselastisitet** ($E_m$) måler hvordan etterspørselen reagerer på inntektsendringer:

$$E_m = \\frac{\\%\\Delta Q}{\\%\\Delta m}$$

- $E_m > 0$: **Normalt gode** (økt inntekt gir økt etterspørsel)
- $E_m < 0$: **Mindverdig gode** (økt inntekt gir redusert etterspørsel)
- $E_m > 1$: **Luksusgode** (etterspørselen øker prosentvis mer enn inntekten)`
    },
    {
      id: 'soe-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-2-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Krysspriselastisiteten mellom Coca-Cola og Pepsi er $E_{xy} = +1{,}3$. Hva betyr dette?',
        options: [
          { id: 'a', text: 'De er komplementære goder', isCorrect: false },
          { id: 'b', text: 'De er substitutter – prisøkning på Pepsi øker etterspørselen etter Coca-Cola', isCorrect: true },
          { id: 'c', text: 'De er uavhengige av hverandre', isCorrect: false },
          { id: 'd', text: 'Coca-Cola er et mindverdig gode', isCorrect: false }
        ],
        solution: 'En positiv krysspriselastisitet ($E_{xy} > 0$) betyr at varene er substitutter. Når prisen på Pepsi stiger med 1 %, øker etterspørselen etter Coca-Cola med 1,3 %. Forbrukerne bytter fra Pepsi til Coca-Cola – noe som er naturlig, siden de er lignende produkter som kan erstatte hverandre.'
      }
    },
    {
      id: 'soe-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-2-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Prisen på strøm øker fra 1,00 kr til 1,50 kr per kWh. Forbruket faller fra 1 200 kWh til 1 080 kWh per måned i en gjennomsnittshusholdning. (a) Beregn etterspørselens priselastisitet. (b) Er etterspørselen elastisk eller uelastisk? (c) Forklar hvorfor resultatet er rimelig.',
        hints: ['Husk: $E_p = \\frac{\\%\\Delta Q}{\\%\\Delta P}$. Beregn prosentvis endring i kvantum og pris først.'],
        solution: `**(a) Beregning:**
Prosentvis endring i kvantum: $\\frac{1080 - 1200}{1200} \\times 100 = -10\\%$
Prosentvis endring i pris: $\\frac{1{,}50 - 1{,}00}{1{,}00} \\times 100 = 50\\%$
$E_p = \\frac{-10\\%}{50\\%} = -0{,}2$

**(b)** $|E_p| = 0{,}2 < 1$ → Etterspørselen er **uelastisk**.

**(c)** Resultatet er rimelig fordi strøm er et nødvendighetsgode med få kortsiktige substitutter. Husholdninger trenger strøm til oppvarming, matlaging og belysning, og kan ikke kutte dramatisk selv om prisen stiger kraftig. På lengre sikt kan folk investere i varmepumper eller etterisolere – da ville elastisiteten vært høyere.`
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'soe-2-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Etterspørselens priselastisitet** ($E_p$) måler hvor følsom etterspørselen er for prisendringer.
- **Elastisk** ($|E_p| > 1$): Kvantum reagerer mye. **Uelastisk** ($|E_p| < 1$): Kvantum reagerer lite.
- Viktige faktorer: tilgjengelige substitutter, nødvendighet vs. luksus, andel av inntekt, tidshorisont, og markedsdefinisjon.
- **Elastisitet og inntekt**: Ved elastisk etterspørsel fører prisøkning til lavere totalinntekt. Ved uelastisk etterspørsel fører prisøkning til høyere totalinntekt.
- **Krysspriselastisitet**: Positiv = substitutter, negativ = komplementære goder.
- **Inntektselastisitet**: Positiv = normalt gode, negativ = mindverdig gode, over 1 = luksusgode.`
    },

    // --- Samleoppgaver ---
    {
      id: 'soe-2-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-2-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Myndighetene vurderer å øke avgiften på tobakk for å redusere røyking. Forskning viser at priselastisiteten for sigaretter er ca. $-0{,}4$. (a) Er etterspørselen elastisk eller uelastisk? (b) Hvis prisen øker med 25 %, hvor mange prosent faller forbruket? (c) Drøft om avgiftsøkning alene er et effektivt virkemiddel for å redusere røyking.',
        hints: ['Bruk elastisitetsformelen: $\\%\\Delta Q = E_p \\times \\%\\Delta P$'],
        solution: `**(a)** $|E_p| = 0{,}4 < 1$ → Etterspørselen er **uelastisk**. Røykere reagerer relativt lite på prisøkninger.

**(b)** $\\%\\Delta Q = E_p \\times \\%\\Delta P = -0{,}4 \\times 25\\% = -10\\%$
Forbruket faller med ca. **10 %**.

**(c) Drøfting:**
Avgiftsøkning har en viss effekt (10 % reduksjon er ikke ubetydelig), men effekten er begrenset fordi etterspørselen er uelastisk. Sigaretter er avhengighetsskapende, og mange røykere fortsetter å røyke tross høyere pris.

Avgiftsøkning rammer også ulikt: røykere med lav inntekt rammes hardest. Noen kan gå over til billigere tobakksprodukter eller ulovlige kanaler.

For å oppnå større reduksjon bør avgiftsøkning kombineres med andre tiltak: røykekampanjer, forbud mot røyking på offentlige steder, aldersgrenser, og tilgang til røykeavvenningsprogrammer. Elastisiteten er også høyere blant unge, noe som taler for at avgifter er mer effektive for å hindre rekruttering av nye røykere.`
      }
    },
    {
      id: 'soe-2-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'soe-2-4-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Inntektselastisiteten for restaurantbesøk er $E_m = 1{,}6$. Hva slags gode er restaurantbesøk?',
        options: [
          { id: 'a', text: 'Et mindverdig gode', isCorrect: false },
          { id: 'b', text: 'Et nødvendighetsgode', isCorrect: false },
          { id: 'c', text: 'Et luksusgode', isCorrect: true },
          { id: 'd', text: 'Et komplementært gode', isCorrect: false }
        ],
        solution: 'Inntektselastisiteten er positiv og større enn 1 ($E_m = 1{,}6 > 1$), noe som betyr at restaurantbesøk er et luksusgode. Når inntekten øker med 1 %, øker etterspørselen etter restaurantbesøk med 1,6 %. Etterspørselen øker prosentvis raskere enn inntekten – folk bruker en stadig større andel av inntekten på restauranter når de blir rikere.'
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.5: Markedsinngrep
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_2_5: TextbookChapter = {
  id: 'samfokonomi-1-2-5',
  courseId: 'samfokonomi-1',
  chapterNumber: '2.5',
  title: 'Markedsinngrep',
  description: 'Prisgulv, pristak, avgifter og subsidier – og hvordan markedsinngrep skaper effektivitetstap (dødvektstap).',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for ulike markedsformer og bruke disse til å analysere ulike markeder'
  ],
  content: [
    // --- INTRO ---
    {
      id: 'soe-2-5-intro',
      type: 'text',
      content: `## Markedsinngrep

Vi har sett at frie markeder finner likevektsprisen av seg selv. Men hva skjer når myndighetene griper inn? Regjeringer setter prisgrenser på boliger, innfører avgifter på tobakk og sukker, gir subsidier til landbruket og vedtar minstelønninger.

Slike **markedsinngrep** har til hensikt å oppnå bestemte mål – som å beskytte forbrukere, redusere helseskadelig forbruk eller støtte næringer. Men inngrepene har også uønskede bivirkninger. I dette kapittelet analyserer vi de viktigste typene markedsinngrep og deres konsekvenser.`
    },

    // --- BLOKK 1: Pristak ---
    {
      id: 'soe-2-5-def-1',
      type: 'definition',
      title: 'Pristak (maksimalpris)',
      content: `Et **pristak** (maksimalpris) er en lovfestet øvre grense for prisen på en vare eller tjeneste. Prisen kan ikke lovlig settes høyere enn pristaket.

For at et pristak skal ha noen virkning, må det settes **under likevektsprisen**. Hvis pristaket er over likevektsprisen, har det ingen effekt – markedet vil uansett lande på den lavere likevektsprisen.

**Konsekvens av et bindende pristak:**
- Prisen holdes kunstig lav
- Etterspurt kvantum øker (lav pris)
- Tilbudt kvantum synker (lav pris gjør det ulønnsomt å produsere)
- Resultatet: **overskuddsetterspørsel** (mangel/knapphet)`
    },
    {
      id: 'soe-2-5-example-1',
      type: 'example',
      title: 'Husleieregulering som pristak',
      problem: 'En storby innfører husleietak på 8 000 kr/mnd for toromsboliger. Likevektsleien i markedet er 12 000 kr/mnd. Forklar konsekvensene.',
      solution: `**Pristaket (8 000 kr) er under likevektsprisen (12 000 kr) – det er bindende.**

**Konsekvenser:**
1. **Overskuddsetterspørsel:** Ved 8 000 kr ønsker flere å leie enn ved 12 000 kr. Samtidig vil færre utleiere tilby boliger, fordi lønnsomheten er lav. Det oppstår boligmangel.

2. **Ventelister og køer:** Mange ønsker å leie, men det finnes ikke nok tilgjengelige boliger. Det oppstår lange ventelister.

3. **Svart marked:** Noen leietakere kan tilby «nøkkelpenger» eller betale ekstra under bordet for å sikre seg en bolig. Dette omgår pristaket.

4. **Redusert vedlikehold:** Utleiere har lavere inntekter og mindre insentiv til å vedlikeholde boligene.

5. **Redusert nybygging:** Nye utleieboliger bygges ikke fordi avkastningen er for lav.

**Paradokset:** Et virkemiddel ment å hjelpe leietakere kan på sikt gjøre boligsituasjonen verre – færre tilgjengelige boliger og dårligere kvalitet.`
    },
    {
      id: 'soe-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-2-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Et pristak har kun virkning dersom det settes ...',
        options: [
          { id: 'a', text: 'Over likevektsprisen', isCorrect: false },
          { id: 'b', text: 'Under likevektsprisen', isCorrect: true },
          { id: 'c', text: 'Nøyaktig lik likevektsprisen', isCorrect: false },
          { id: 'd', text: 'Høyere enn produsentenes grensekostnad', isCorrect: false }
        ],
        solution: 'Et pristak (maksimalpris) har kun virkning dersom det settes under likevektsprisen – da er det bindende. Markedet «vil» opp til likevektsprisen, men pristaket hindrer det. Resultatet er overskuddsetterspørsel (mangel). Settes pristaket over likevekten, har det ingen effekt, fordi markedet allerede lander lavere.'
      }
    },

    // --- BLOKK 2: Prisgulv ---
    {
      id: 'soe-2-5-def-2',
      type: 'definition',
      title: 'Prisgulv (minimumspris)',
      content: `Et **prisgulv** (minimumspris) er en lovfestet nedre grense for prisen. Prisen kan ikke lovlig settes lavere enn prisgulvet.

For at et prisgulv skal ha virkning, må det settes **over likevektsprisen**. Hvis prisgulvet er under likevektsprisen, har det ingen effekt.

**Konsekvens av et bindende prisgulv:**
- Prisen holdes kunstig høy
- Tilbudt kvantum øker (høy pris lokker produsenter)
- Etterspurt kvantum synker (høy pris skremmer kunder)
- Resultatet: **overskuddstilbud** (overproduksjon)

Det vanligste eksempelet er **minstelønn** – en minimumspris på arbeidskraft.`
    },
    {
      id: 'soe-2-5-example-2',
      type: 'example',
      title: 'Minstelønn som prisgulv',
      problem: 'Myndighetene innfører en minstelønn på 200 kr/time. Likevektslønnen i markedet for ufaglærte er 160 kr/time. Analyser konsekvensene.',
      solution: `**Prisgulvet (200 kr) er over likevektsprisen (160 kr) – det er bindende.**

Minstelønnen kan analyseres som et prisgulv i arbeidsmarkedet der:
- «Prisen» er timelønnen
- «Tilbudt kvantum» er antall arbeidstimer folk ønsker å jobbe
- «Etterspurt kvantum» er antall arbeidstimer bedriftene ønsker å kjøpe

**Konsekvenser:**
1. **Overskuddstilbud av arbeidskraft = arbeidsledighet:** Ved 200 kr/time ønsker flere å jobbe, men bedriftene etterspør færre arbeidstimer. Det oppstår ufrivillig arbeidsledighet.

2. **Noen vinner:** De som beholder jobben, tjener mer (200 kr i stedet for 160 kr).

3. **Noen taper:** De som mister jobben (eller ikke får jobb), taper hele inntekten.

4. **Bedriftseffekter:** Bedriftene kan automatisere, kutte stillinger, eller øke prisene til kundene.

**Debatten:** Økonomer er uenige om hvor store de negative sysselsettingseffektene er. Nyere forskning tyder på at moderate minstelønninger har relativt beskjedne effekter på sysselsettingen.`
    },
    {
      id: 'soe-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-2-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Myndighetene innfører en minimumspris på melk over likevektsprisen. Hva blir konsekvensen?',
        options: [
          { id: 'a', text: 'Mangel på melk – forbrukerne får ikke kjøpt nok', isCorrect: false },
          { id: 'b', text: 'Overproduksjon av melk – bøndene produserer mer enn det selges', isCorrect: true },
          { id: 'c', text: 'Ingen effekt – markedet tilpasser seg uansett', isCorrect: false },
          { id: 'd', text: 'Prisen faller til under minimumsgrensen', isCorrect: false }
        ],
        solution: 'Når minimumsprisen er over likevektsprisen, er den bindende. Bøndene produserer mer melk fordi den høye prisen gjør produksjonen mer lønnsom (tilbudt kvantum øker). Men forbrukerne kjøper mindre fordi prisen er høy (etterspurt kvantum synker). Resultatet er overskuddstilbud – mer melk enn det som selges. I EU har dette historisk ført til «melkesjøer» og «smørberg».'
      }
    },

    // --- BLOKK 3: Avgifter ---
    {
      id: 'soe-2-5-text-1',
      type: 'text',
      content: `### Avgifter

En **avgift** (skatt) på en vare legger en ekstra kostnad på enten kjøpere eller selgere. Uansett hvem som formelt betaler avgiften, deles den reelle byrden mellom kjøper og selger – dette kalles **avgiftsinsidens**.

**Hvordan en avgift påvirker markedet:**
1. Avgiften legges til kostnaden – tilbudskurven skifter oppover med avgiftsbeløpet
2. Ny likevekt med høyere pris for kjøperen og lavere pris (etter avgift) for selgeren
3. Omsatt kvantum faller
4. Staten får avgiftsinntekter = avgift per enhet × omsatt kvantum

**Hvem bærer byrden?** Byrden fordeles avhengig av priselastisiteten:
- Den siden med **mest uelastisk** etterspørsel/tilbud bærer størstedelen av avgiften
- Hvis etterspørselen er uelastisk (f.eks. bensin), betaler forbrukerne det meste
- Hvis tilbudet er uelastisk, bærer produsentene det meste`
    },
    {
      id: 'soe-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-2-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Staten innfører en avgift på 5 kr per liter brus. Hvem bærer mesteparten av avgiften dersom etterspørselen etter brus er svært uelastisk?',
        options: [
          { id: 'a', text: 'Produsentene bærer mesteparten', isCorrect: false },
          { id: 'b', text: 'Forbrukerne bærer mesteparten', isCorrect: true },
          { id: 'c', text: 'Avgiften deles alltid 50/50', isCorrect: false },
          { id: 'd', text: 'Staten bærer avgiften selv', isCorrect: false }
        ],
        solution: 'Når etterspørselen er svært uelastisk, reagerer forbrukerne lite på prisøkninger – de fortsetter å kjøpe nesten like mye. Produsentene kan derfor velte mesteparten av avgiften over på forbrukerne gjennom høyere priser. Tommelregelen: den mest prisufølsomme (uelastiske) siden av markedet bærer størstedelen av avgiften.'
      }
    },

    // --- BLOKK 4: Subsidier ---
    {
      id: 'soe-2-5-text-2',
      type: 'text',
      content: `### Subsidier

En **subsidie** er det motsatte av en avgift – staten betaler en del av kostnaden for å gjøre en vare eller tjeneste billigere.

**Hvordan en subsidie påvirker markedet:**
1. Subsidien reduserer produsentenes kostnader – tilbudskurven skifter nedover/høyre
2. Ny likevekt med lavere pris for kjøperen og høyere pris (inkludert subsidien) for selgeren
3. Omsatt kvantum øker
4. Staten betaler = subsidie per enhet × omsatt kvantum

**Eksempler på subsidier i Norge:**
- Tilskudd til norsk landbruk (for å opprettholde matproduksjon)
- Elbilsubsidier (for å stimulere til grønnere transport)
- Støtte til kollektivtransport (for å holde billettprisene nede)
- Stipend og studiestøtte (subsidie av utdanning)`
    },
    {
      id: 'soe-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-2-5-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste forskjellen mellom en avgift og en subsidie?',
        options: [
          { id: 'a', text: 'En avgift gjelder bare for luksusvarer, en subsidie bare for nødvendigheter', isCorrect: false },
          { id: 'b', text: 'En avgift øker prisen og reduserer omsatt kvantum, en subsidie senker prisen og øker omsatt kvantum', isCorrect: true },
          { id: 'c', text: 'En avgift vedtas av kommunen, en subsidie vedtas av staten', isCorrect: false },
          { id: 'd', text: 'Avgifter og subsidier har identisk effekt', isCorrect: false }
        ],
        solution: 'En avgift legger en ekstra kostnad på markedet: prisen for kjøperne stiger, nettoinntekten for selgerne faller, og omsatt kvantum synker. En subsidie gjør det motsatte: den dekker en del av kostnaden slik at prisen for kjøperne synker, nettoinntekten for selgerne stiger, og omsatt kvantum øker.'
      }
    },

    // --- BLOKK 5: Dødvektstap ---
    {
      id: 'soe-2-5-def-3',
      type: 'definition',
      title: 'Dødvektstap (effektivitetstap)',
      content: `**Dødvektstap** (dødvekt, DWL – *deadweight loss*) er det samfunnsøkonomiske effektivitetstapet som oppstår når markedet ikke er i likevekt.

Dødvektstap oppstår fordi markedsinngrep (pristak, prisgulv, avgifter) fører til at noen handler som ville vært gunstige for både kjøper og selger, **ikke gjennomføres**. Det er transaksjoner der kjøperens betalingsvilje er høyere enn selgerens kostnad, men som hindres av inngrepet.

Grafisk fremstilles dødvektstapet som en **trekant** mellom tilbuds- og etterspørselskurven, mellom likevektskvantumet og det faktiske kvantumet etter inngrepet.

Dødvektstapet viser at markedsinngrep har en samfunnsøkonomisk kostnad – selv om de kan være ønsket av andre grunner (fordeling, helse, miljø).`
    },
    {
      id: 'soe-2-5-example-3',
      type: 'example',
      title: 'Dødvektstap ved avgift',
      problem: 'Staten legger en avgift på 10 kr per enhet i et marked. Før avgiften var likevektsprisen 50 kr og likevektskvantumet 200 enheter. Etter avgiften er prisen for kjøperne 57 kr, prisen for selgerne 47 kr, og omsatt kvantum faller til 160 enheter. Forklar dødvektstapet.',
      solution: `**Før avgiften:** 200 enheter omsettes til 50 kr. Alle bytter der kjøperen er villig til å betale mer enn selgerens kostnad, gjennomføres.

**Etter avgiften:** Kun 160 enheter omsettes. Avgiften skaper en kile mellom kjøpers pris (57 kr) og selgers pris (47 kr).

**Dødvektstapet:** De 40 enhetene som ikke lenger omsettes (enhet 161–200), representerer handler der kjøperen var villig til å betale mer enn selgerens kostnad. For eksempel kunne enhet 170 vært solgt der kjøperen ville betalt 53 kr og selgerens kostnad var 49 kr – begge ville tjent på handelen. Men avgiften på 10 kr gjør at det ikke lønner seg å gjennomføre handelen (53 kr − 49 kr = 4 kr < 10 kr avgift).

Disse tapte gjensidig gunstige transaksjonene er **dødvektstapet**. Det er en ren samfunnsøkonomisk kostnad – et tap som verken staten, kjøperne eller selgerne nyter godt av.`
    },
    {
      id: 'soe-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-2-5-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er dødvektstap?',
        options: [
          { id: 'a', text: 'Statens tap av avgiftsinntekter', isCorrect: false },
          { id: 'b', text: 'Produsentenes tap av fortjeneste', isCorrect: false },
          { id: 'c', text: 'Det samfunnsøkonomiske effektivitetstapet fra gjensidig gunstige handler som ikke gjennomføres', isCorrect: true },
          { id: 'd', text: 'Forbrukernes tap av kjøpekraft', isCorrect: false }
        ],
        solution: 'Dødvektstap er det samfunnsøkonomiske effektivitetstapet som oppstår når markedsinngrep (avgifter, prisreguleringer) hindrer transaksjoner som ville vært gunstige for både kjøper og selger. Det er et nettotap for samfunnet – verken staten, kjøperne eller selgerne får glede av dette tapet.'
      }
    },

    // --- OPPSUMMERING ---
    {
      id: 'soe-2-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Pristak** (maksimalpris) settes under likevekt og fører til **overskuddsetterspørsel** (mangel). Eksempel: husleieregulering.
- **Prisgulv** (minimumspris) settes over likevekt og fører til **overskuddstilbud** (overproduksjon). Eksempel: minstelønn.
- **Avgifter** øker prisen for kjøperne, senker nettoinntekten for selgerne, og reduserer omsatt kvantum. Byrden faller mest på den uelastiske siden.
- **Subsidier** senker prisen for kjøperne, øker nettoinntekten for selgerne, og øker omsatt kvantum.
- **Dødvektstap** er det samfunnsøkonomiske effektivitetstapet fra markedsinngrep – gjensidig gunstige handler som ikke gjennomføres.
- Markedsinngrep kan likevel forsvares dersom gevinstene (bedre fordeling, helse, miljø) overstiger effektivitetstapet.`
    },

    // --- Samleoppgaver ---
    {
      id: 'soe-2-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-2-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft fordeler og ulemper ved husleieregulering (pristak på boligleie). Bruk samfunnsøkonomisk analyse med begreper som overskuddsetterspørsel, dødvektstap og effektivitet. Konkluder med en vurdering av om husleieregulering er god politikk.',
        hints: ['Tenk på kortsiktige vs. langsiktige effekter, og hvem som vinner og taper.'],
        solution: `**Fordeler:**
- Leietakere med kontrakt betaler lavere husleie – det beskytter sårbare grupper mot høye boligkostnader.
- Stabilitet: Leietakere slipper stadige leieøkninger og kan planlegge økonomien.

**Ulemper:**
- **Overskuddsetterspørsel:** Flere ønsker å leie enn det finnes boliger. Det oppstår boligmangel, køer og ventelister.
- **Svart marked:** Nøkkelpenger og ulovlige tilleggsavgifter.
- **Redusert vedlikehold:** Lavere leieinntekter gir utleiere mindre insentiv til vedlikehold. Boligkvaliteten synker.
- **Redusert nybygging:** Utviklere bygger færre utleieboliger fordi avkastningen er for lav.
- **Dødvektstap:** Noen som er villige til å betale markedspris og bønder som ville bygget boliger, finner ikke hverandre.
- **Feilallokering:** Folk som ikke lenger trenger stor bolig beholdsitter billige leiekontrakter, mens barnefamilier ikke finner noe.

**Konklusjon:** Husleieregulering gir kortsiktige fordeler for noen leietakere, men har betydelige langsiktige kostnader i form av boligmangel, dårligere kvalitet og dødvektstap. De fleste økonomer anbefaler heller målrettede bostøtteordninger som ikke forstyrrer markedsmekanismen.`
      }
    },
    {
      id: 'soe-2-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'soe-2-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar kort forskjellen mellom pristak og prisgulv. Gi et eksempel på hvert, og beskriv hvilken type ulikevekt (overskuddstilbud eller overskuddsetterspørsel) som oppstår i hvert tilfelle.',
        hints: ['Pristak = maksimalpris (under likevekt). Prisgulv = minimumspris (over likevekt).'],
        solution: `**Pristak (maksimalpris):** En øvre grense for prisen, satt under likevektsprisen.
- *Eksempel:* Husleieregulering – myndighetene setter en maksimal husleie.
- *Konsekvens:* **Overskuddsetterspørsel** (mangel). Flere ønsker å leie enn det finnes boliger.

**Prisgulv (minimumspris):** En nedre grense for prisen, satt over likevektsprisen.
- *Eksempel:* Minstelønn – myndighetene setter en minimumspris på arbeidskraft.
- *Konsekvens:* **Overskuddstilbud** (overproduksjon/arbeidsledighet). Flere ønsker å jobbe enn det finnes jobber.

**Hovedforskjellen:** Pristak holder prisen kunstig lav (skaper mangel), mens prisgulv holder prisen kunstig høy (skaper overskudd).`
      }
    },
    {
      id: 'soe-2-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'soe-2-5-ex-8',
        number: '8',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Staten ønsker å redusere forbruket av et helseskadelig produkt. Hvilken av følgende tiltak vil være mest effektivt dersom etterspørselen er elastisk?',
        options: [
          { id: 'a', text: 'Innføre en avgift – fordi elastisk etterspørsel betyr at forbrukerne reagerer kraftig på prisøkninger', isCorrect: true },
          { id: 'b', text: 'Innføre en subsidie til produsenter av alternativene', isCorrect: false },
          { id: 'c', text: 'Sette et prisgulv under likevektsprisen', isCorrect: false },
          { id: 'd', text: 'Fjerne alle reguleringer i markedet', isCorrect: false }
        ],
        solution: 'Når etterspørselen er elastisk, reagerer forbrukerne sterkt på prisendringer. En avgift som øker prisen vil da føre til en stor reduksjon i etterspurt kvantum – nettopp det staten ønsker. Alternativ b (subsidie av alternativer) kan også ha effekt, men er et indirekte tiltak. Alternativ c og d reduserer ikke forbruket av det helseskadelige produktet.'
      }
    }
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for del 2 (kapittel 2.1–2.5)
// ============================================================================

export const SAMFOKONOMI_1_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFOKONOMI_1_2_1,
  CHAPTER_SAMFOKONOMI_1_2_2,
  CHAPTER_SAMFOKONOMI_1_2_3,
  CHAPTER_SAMFOKONOMI_1_2_4,
  CHAPTER_SAMFOKONOMI_1_2_5,
];
