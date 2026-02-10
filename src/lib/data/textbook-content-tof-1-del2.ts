/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Teknologi og forskningslære 1 VG2
 *
 * Seksjon 2: Data og analyse (Kapittel 2.1–2.7)
 * Denne filen inneholder kapittel 2.1–2.7.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 2.1: Datainnsamlingsmetoder
// ============================================================================

export const CHAPTER_TOF_1_2_1: TextbookChapter = {
  id: 'tof-1-2-1',
  courseId: 'tof-1',
  chapterNumber: '2.1',
  title: 'Datainnsamlingsmetoder',
  description: 'Kvantitative og kvalitative metoder, spørreundersøkelser og intervju.',
  estimatedMinutes: 30,
  competenceGoals: ['velge egnede datainnsamlingsmetoder'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-2-1-intro',
      type: 'text',
      content: `## Datainnsamlingsmetoder

Når vi skal gjennomføre et forskningsprosjekt, er et av de viktigste valgene vi må ta **hvordan vi samler inn data**. Metoden vi velger påvirker hvilke svar vi kan få, hvor pålitelige resultatene blir, og hvilke konklusjoner vi kan trekke.

I dette kapittelet skal vi se på de to hovedtypene datainnsamlingsmetoder – kvantitative og kvalitative – og deretter fordype oss i to av de vanligste teknikkene: spørreundersøkelser og intervju.`,
    },

    // --- BLOKK 1: Kvantitative og kvalitative metoder ---
    {
      id: 'tof1-2-1-def-1',
      type: 'definition',
      title: 'Kvantitative metoder',
      content: `**Kvantitative metoder** er innsamlingsmetoder som gir data i form av tall og målbare størrelser. Resultatene kan analyseres med statistiske verktøy.

Kjennetegn:
- Data uttrykkes som **tall og mengder**
- Egner seg for **store utvalg** av respondenter eller målepunkter
- Gir grunnlag for **statistisk analyse** og generalisering
- Eksempler: spørreundersøkelser med lukkede svar, målinger med instrumenter, telling av hendelser`,
    },
    {
      id: 'tof1-2-1-def-2',
      type: 'definition',
      title: 'Kvalitative metoder',
      content: `**Kvalitative metoder** er innsamlingsmetoder som gir data i form av tekst, beskrivelser og fortellinger. Resultatene analyseres gjennom tolkning og kategorisering.

Kjennetegn:
- Data uttrykkes som **ord, beskrivelser og observasjoner**
- Egner seg for **dybdeforståelse** av fenomener
- Gir innsikt i meninger, opplevelser og sammenhenger
- Eksempler: dybdeintervjuer, observasjonsstudier, tekstanalyse`,
    },
    {
      id: 'tof1-2-1-text-1',
      type: 'text',
      content: `### Når bruker vi hva?

Valg av metode avhenger av hva vi ønsker å finne ut:

| Spørsmål | Egnet metode |
|----------|-------------|
| Hvor mange elever bruker sosiale medier daglig? | Kvantitativ (spørreundersøkelse) |
| Hvordan opplever elever at sosiale medier påvirker hverdagen? | Kvalitativ (intervju) |
| Hva er gjennomsnittstemperaturen i mars? | Kvantitativ (temperaturmåling) |
| Hvorfor velger noen å flytte fra bygda til byen? | Kvalitativ (dybdeintervju) |

Mange forskningsprosjekter kombinerer begge tilnærminger. Dette kalles **metodetriangulering** og kan styrke funnene fordi vi belyser problemstillingen fra flere sider.`,
    },
    {
      id: 'tof1-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Valg av metode',
      problem: 'En forsker vil undersøke fysisk aktivitet blant norske ungdommer. Hvilke metoder kan brukes, og hva er fordelen med å kombinere dem?',
      solution: `**Kvantitativ tilnærming:** Sende ut en spørreundersøkelse til 1000 elever i videregående skole med spørsmål om hvor mange timer per uke de trener, hvilke aktiviteter de driver med, og hvor ofte de er fysisk aktive. Dette gir tall som kan analyseres statistisk.

**Kvalitativ tilnærming:** Gjennomføre dybdeintervjuer med 15–20 ungdommer for å forstå *hvorfor* de er aktive eller inaktive, hva som motiverer dem, og hvilke barrierer de opplever.

**Kombinasjon (metodetriangulering):** Spørreundersøkelsen viser at 40 % trener mindre enn anbefalt. Intervjuene avdekker at mangel på tid, transport til treningssteder og press på skolen er de vanligste grunnene. Kombinasjonen gir både omfang (tall) og dybde (forståelse).`,
    },
    {
      id: 'tof1-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket av følgende er et eksempel på en kvantitativ datainnsamlingsmetode?',
        options: [
          { id: 'a', text: 'Dybdeintervju med fem respondenter', isCorrect: false },
          { id: 'b', text: 'Observasjon av atferd i en skolegård', isCorrect: false },
          { id: 'c', text: 'Spørreundersøkelse med lukkede svar til 500 respondenter', isCorrect: true },
          { id: 'd', text: 'Analyse av dagboknotater', isCorrect: false },
        ],
        solution: 'Riktig svar er C. En spørreundersøkelse med lukkede svar gir talldata som kan analyseres statistisk, og er dermed en kvantitativ metode. De andre alternativene gir tekstbaserte data og er kvalitative metoder.',
      },
    },

    // --- BLOKK 2: Spørreundersøkelser ---
    {
      id: 'tof1-2-1-text-2',
      type: 'text',
      content: `### Spørreundersøkelser

En **spørreundersøkelse** er en strukturert innsamling av data der mange respondenter svarer på de samme spørsmålene. Det er en av de mest brukte kvantitative metodene.

**Utforming av gode spørsmål:**
- Bruk **klart og enkelt språk** – unngå fagsjargong
- Still **ett spørsmål om gangen** – ikke doble spørsmål som «Er du fornøyd med læreren og faget?»
- Unngå **ledende spørsmål** – «Er du ikke enig i at...?» leder respondenten
- Inkluder **nøytrale svaralternativer** – gi mulighet for «vet ikke» eller «verken enig eller uenig»
- Vurder **rekkefølgen** – generelle spørsmål først, sensitive spørsmål til slutt

**Typer svaralternativer:**
- **Likert-skala:** «I hvilken grad er du enig?» (1 = helt uenig, 5 = helt enig)
- **Flervalg:** «Hvilken transport bruker du oftest?» (buss, bil, sykkel, gange)
- **Åpne svar:** «Hva mener du om skolematen?» (gir kvalitative data)
- **Rangering:** «Ranger disse aktivitetene fra mest til minst viktig»`,
    },
    {
      id: 'tof1-2-1-example-2',
      type: 'example',
      title: 'Eksempel: Godt vs. dårlig spørsmål',
      problem: 'Vurder disse to spørsmålene for en spørreundersøkelse om skolemat:\n\nA: «Synes du ikke at skolematen er for dyr og har dårlig kvalitet?»\n\nB: «Hvor fornøyd er du med kvaliteten på skolematen? (1 = svært misfornøyd, 5 = svært fornøyd)»',
      solution: `**Spørsmål A er dårlig** fordi det:
- Er **ledende** – «Synes du ikke at...» antyder at svaret bør være ja
- Er et **dobbeltspørsmål** – det spør om både pris og kvalitet i samme spørsmål
- Har **ingen klare svaralternativer** – vanskelig å analysere svarene

**Spørsmål B er godt** fordi det:
- Er **nøytralt** – leder ikke respondenten i noen retning
- Spør om **én ting** – bare kvaliteten
- Bruker en **Likert-skala** – gir talldata som er lett å analysere statistisk`,
    },
    {
      id: 'tof1-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket av følgende spørsmål bryter med retningslinjene for gode spørreundersøkelser?',
        options: [
          { id: 'a', text: '«Hvor mange timer sover du i gjennomsnitt per natt?»', isCorrect: false },
          { id: 'b', text: '«Er du fornøyd med læreren og undervisningsopplegget?»', isCorrect: true },
          { id: 'c', text: '«I hvilken grad er du enig i at skolen tilbyr nok valgfag? (1–5)»', isCorrect: false },
          { id: 'd', text: '«Hvilken transport bruker du oftest til skolen? (buss/bil/sykkel/gange/annet)»', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Dette er et dobbeltspørsmål fordi det spør om to ting samtidig – tilfredshet med læreren og tilfredshet med undervisningsopplegget. En respondent kan være fornøyd med læreren men misfornøyd med opplegget, og da er det umulig å svare presist.',
      },
    },

    // --- BLOKK 3: Intervju ---
    {
      id: 'tof1-2-1-text-3',
      type: 'text',
      content: `### Intervju som datainnsamlingsmetode

Et **forskningsintervju** er en samtale mellom forsker og informant der målet er å samle inn kvalitative data. Intervjuet gir dypere innsikt enn en spørreundersøkelse, men når færre respondenter.

**Tre typer forskningsintervju:**

**Strukturert intervju:** Alle informanter får nøyaktig de samme spørsmålene i samme rekkefølge. Ligner en muntlig spørreundersøkelse. Gir sammenlignbare data, men lite fleksibilitet.

**Semistrukturert intervju:** Forskeren har en intervjuguide med temaer og nøkkelspørsmål, men kan stille oppfølgingsspørsmål og tilpasse rekkefølgen. Den vanligste formen i kvalitativ forskning.

**Ustrukturert intervju:** Samtalen er åpen og følger informantens fortelling. Brukes for å utforske ukjente temaer, men er vanskelig å analysere og sammenligne.

**Tips for gode intervjuer:**
- Forbered en **intervjuguide** med temaer og spørsmål
- Still **åpne spørsmål** – «Hvordan opplevde du...?» fremfor «Var det bra?»
- Bruk **oppfølgingsspørsmål** – «Kan du utdype det?», «Hva mener du med det?»
- **Lytt aktivt** – ikke avbryt informanten
- Be om **samtykke** til opptak og informer om anonymitet`,
    },
    {
      id: 'tof1-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du skal undersøke hvordan elever i VG2 opplever overgangen fra ungdomsskolen til videregående. Lag en kort intervjuguide med tre åpne spørsmål som kan brukes i et semistrukturert intervju. Forklar også hvorfor du velger intervju fremfor spørreundersøkelse.',
        hints: ['Tenk på hva du ønsker å forstå – opplevelser, følelser og refleksjoner. Åpne spørsmål begynner ofte med «Hvordan», «Hva» eller «Kan du fortelle om».'],
        solution: 'Intervju velges fordi vi ønsker å forstå elevenes *opplevelser* i dybden. Spørreundersøkelse ville gitt oversiktlige tall, men ikke den nyanserte forståelsen av hvordan overgangen oppleves.\n\nEksempel på intervjuguide:\n1. «Kan du fortelle om hvordan du opplevde de første ukene på videregående?»\n2. «Hva var den største forskjellen mellom ungdomsskolen og videregående for deg?»\n3. «Hvordan håndterte du eventuelt utfordringer med å tilpasse deg det nye skolemiljøet?»\n\nSpørsmålene er åpne og inviterer informanten til å fortelle fritt. De dekker ulike aspekter: den umiddelbare opplevelsen, konkrete forskjeller, og mestringsstrategier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-2-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Kvantitative metoder** gir talldata og egner seg for store utvalg og statistisk analyse.
- **Kvalitative metoder** gir tekstdata og egner seg for dybdeforståelse av opplevelser og meninger.
- **Metodetriangulering** – å kombinere kvantitative og kvalitative metoder – styrker forskningens troverdighet.
- **Spørreundersøkelser** er den vanligste kvantitative metoden. Gode spørsmål er klare, nøytrale og stiller bare ett spørsmål om gangen.
- **Intervjuer** gir dypere innsikt. Semistrukturerte intervjuer med åpne spørsmål er den vanligste formen i kvalitativ forskning.
- Valg av metode avhenger av **problemstillingen** – hva du ønsker å finne ut bestemmer hvordan du bør samle data.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof1-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom kvantitative og kvalitative metoder. Gi et eksempel på en problemstilling som best besvares med hver av metodene, og begrunn valget ditt.',
        hints: ['Tenk på hva slags data du trenger – tall eller beskrivelser – og hva du ønsker å finne ut.'],
        solution: 'Kvantitative metoder gir talldata som kan analyseres statistisk. De egner seg når vi vil kartlegge omfang, sammenligne grupper eller finne mønstre i store datasett.\n\nEksempel: «Hvor mange prosent av elever i VG2 bruker mer enn 2 timer daglig på sosiale medier?» – best besvart med spørreundersøkelse til mange elever.\n\nKvalitative metoder gir tekstdata som analyseres gjennom tolkning. De egner seg når vi vil forstå opplevelser, meninger og prosesser i dybden.\n\nEksempel: «Hvordan opplever elever at mobilbruk påvirker konsentrasjonen deres i timene?» – best besvart med dybdeintervju for å forstå nyansene i opplevelsene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof1-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du planlegger et forskningsprosjekt om stress blant videregåendeelever. Beskriv hvordan du ville brukt metodetriangulering til å belyse problemstillingen. Inkluder hvilke kvantitative og kvalitative metoder du ville brukt, og forklar hvordan de utfyller hverandre.',
        hints: ['Tenk på hvilke spørsmål som best besvares med tall, og hvilke som krever dybdeforståelse. Hvordan kan funnene fra den ene metoden berike den andre?'],
        solution: 'Trinn 1 – Kvantitativ spørreundersøkelse: Send ut et spørreskjema til 300 elever med spørsmål om stressnivå (Likert-skala 1–5), stresskilder (flervalg: prøver, lekser, sosialt press, fremtidsbekymring), søvnmengde og fysisk aktivitet. Dette gir et bredt bilde av omfang og mønstre.\n\nTrinn 2 – Kvalitative intervjuer: Gjennomfør semistrukturerte intervjuer med 12–15 elever som rapporterte ulike stressnivåer. Still åpne spørsmål om hvordan de opplever stress, hva som hjelper, og hvordan skolen og omgivelsene påvirker dem.\n\nHvordan de utfyller hverandre: Spørreundersøkelsen kan vise at 65 % opplever mye stress knyttet til prøver. Intervjuene kan avdekke *hvorfor* – for eksempel at usikkerhet rundt vurderingskriterier og frykt for å skuffe foreldrene er viktige faktorer. Kombinasjonen gir både statistisk tyngde og menneskelig dybde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.2: Statistiske mål
// ============================================================================

export const CHAPTER_TOF_1_2_2: TextbookChapter = {
  id: 'tof-1-2-2',
  courseId: 'tof-1',
  chapterNumber: '2.2',
  title: 'Statistiske mål',
  description: 'Gjennomsnitt, median, modus, standardavvik og varians.',
  estimatedMinutes: 35,
  competenceGoals: ['beregne og tolke statistiske mål'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-2-2-intro',
      type: 'text',
      content: `## Statistiske mål

Når vi har samlet inn kvantitative data, trenger vi verktøy for å **oppsummere og beskrive** dem. Statistiske mål hjelper oss med å forstå hva som er typisk i et datasett, hvor stor spredningen er, og hvordan dataene fordeler seg.

I dette kapittelet lærer du om sentralmål (gjennomsnitt, median og modus) og spredningsmål (standardavvik og varians). Disse verktøyene er grunnleggende i all dataanalyse, fra forskningsprosjekter til hverdagslig tolkning av statistikk.`,
    },

    // --- BLOKK 1: Gjennomsnitt ---
    {
      id: 'tof1-2-2-def-1',
      type: 'definition',
      title: 'Gjennomsnitt (aritmetisk middel)',
      content: `**Gjennomsnittet** er summen av alle verdiene delt på antallet verdier. Det er det mest brukte sentralmålet.

**Formel:**

$$\\bar{x} = \\frac{x_1 + x_2 + \\cdots + x_n}{n} = \\frac{\\sum_{i=1}^{n} x_i}{n}$$

der $x_1, x_2, \\ldots, x_n$ er de $n$ observasjonene i datasettet.

**Merk:** Gjennomsnittet er følsomt for **ekstremverdier** (uteliggere). En enkelt svært høy eller lav verdi kan trekke gjennomsnittet kraftig i sin retning.`,
    },
    {
      id: 'tof1-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Beregne gjennomsnitt',
      problem: 'Fem elever fikk følgende poeng på en prøve: 15, 18, 20, 22, 25. Finn gjennomsnittet.',
      solution: `Vi bruker formelen for gjennomsnitt:

$$\\bar{x} = \\frac{15 + 18 + 20 + 22 + 25}{5} = \\frac{100}{5} = 20$$

Gjennomsnittlig poengsum er **20 poeng**.`,
    },
    {
      id: 'tof1-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En gruppe elever målte temperaturen utendørs kl. 12.00 fem dager på rad: 8 °C, 10 °C, 12 °C, 9 °C, 11 °C. Hva er gjennomsnittlig temperatur?',
        options: [
          { id: 'a', text: '9 °C', isCorrect: false },
          { id: 'b', text: '10 °C', isCorrect: true },
          { id: 'c', text: '11 °C', isCorrect: false },
          { id: 'd', text: '12 °C', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Gjennomsnitt = (8 + 10 + 12 + 9 + 11) / 5 = 50 / 5 = 10 °C.',
      },
    },

    // --- BLOKK 2: Median og modus ---
    {
      id: 'tof1-2-2-def-2',
      type: 'definition',
      title: 'Median',
      content: `**Medianen** er den midterste verdien når dataene er sortert i stigende rekkefølge.

- Hvis antall observasjoner $n$ er **odde**, er medianen den midterste verdien (observasjon nr. $\\frac{n+1}{2}$).
- Hvis $n$ er **partall**, er medianen gjennomsnittet av de to midterste verdiene.

**Fordel:** Medianen påvirkes ikke av ekstremverdier, og gir et bedre bilde av «typisk verdi» når datasettet har uteliggere.`,
    },
    {
      id: 'tof1-2-2-def-3',
      type: 'definition',
      title: 'Modus (typetall)',
      content: `**Modus** er den verdien som forekommer **flest ganger** i datasettet.

- Et datasett kan ha **ingen modus** (alle verdier like hyppige), **én modus** (unimodalt), eller **flere modus** (bimodalt, multimodalt).
- Modus er det eneste sentralmålet som kan brukes på **nominale data** (kategorier), for eksempel favorittfarge eller transportmiddel.`,
    },
    {
      id: 'tof1-2-2-example-2',
      type: 'example',
      title: 'Eksempel: Median og modus',
      problem: 'Ni elever rapporterte antall timer trening per uke: 2, 3, 3, 4, 5, 5, 5, 7, 12. Finn medianen og modus.',
      solution: `**Median:** Dataene er allerede sortert. Vi har $n = 9$ (odde tall), så medianen er observasjon nr. $\\frac{9+1}{2} = 5$, altså den 5. verdien.

Verdiene i rekkefølge: 2, 3, 3, 4, **5**, 5, 5, 7, 12

Medianen er **5 timer**.

**Modus:** Vi ser på hvilken verdi som forekommer flest ganger:
- 2 forekommer 1 gang
- 3 forekommer 2 ganger
- 4 forekommer 1 gang
- 5 forekommer **3 ganger** (flest!)
- 7 forekommer 1 gang
- 12 forekommer 1 gang

Modus er **5 timer**.

**Merk:** Gjennomsnittet er $(2+3+3+4+5+5+5+7+12)/9 = 46/9 \\approx 5{,}1$. Her er gjennomsnitt, median og modus ganske like, men uteliggeren 12 trekker gjennomsnittet litt opp.`,
    },
    {
      id: 'tof1-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En bedrift har 10 ansatte med følgende månedslønninger (i tusen kr): 30, 32, 33, 34, 35, 35, 36, 38, 40, 250. Hvilket sentralmål gir det beste bildet av «typisk lønn» i bedriften?',
        options: [
          { id: 'a', text: 'Gjennomsnittet, fordi det bruker alle verdiene', isCorrect: false },
          { id: 'b', text: 'Medianen, fordi den ikke påvirkes av ekstremverdien', isCorrect: true },
          { id: 'c', text: 'Modus, fordi det er den vanligste lønnen', isCorrect: false },
          { id: 'd', text: 'Det spiller ingen rolle hvilket sentralmål vi velger', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Gjennomsnittet blir (30+32+33+34+35+35+36+38+40+250)/10 = 56,3 tusen kr, som er langt høyere enn det de fleste ansatte tjener. Uteliggeren 250 (trolig direktøren) trekker gjennomsnittet opp. Medianen = (35+35)/2 = 35 tusen kr, som er et mye bedre bilde av typisk lønn.',
      },
    },

    // --- BLOKK 3: Standardavvik og varians ---
    {
      id: 'tof1-2-2-text-1',
      type: 'text',
      content: `### Spredningsmål

Sentralmålene forteller oss hva som er typisk i et datasett, men de sier ingenting om hvor **spredt** dataene er. To datasett kan ha samme gjennomsnitt, men svært forskjellig spredning.

Tenk for eksempel på to klasser som begge har gjennomsnittskarakter 4,0:
- Klasse A: 3, 4, 4, 4, 5 – liten spredning
- Klasse B: 1, 2, 4, 6, 7 – stor spredning

For å beskrive spredningen bruker vi **varians** og **standardavvik**.`,
    },
    {
      id: 'tof1-2-2-def-4',
      type: 'definition',
      title: 'Varians og standardavvik',
      content: `**Variansen** $s^2$ måler gjennomsnittlig kvadratavvik fra gjennomsnittet:

$$s^2 = \\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n-1}$$

**Standardavviket** $s$ er kvadratroten av variansen:

$$s = \\sqrt{s^2} = \\sqrt{\\frac{\\sum_{i=1}^{n}(x_i - \\bar{x})^2}{n-1}}$$

- Vi deler på $n-1$ (ikke $n$) når vi regner på et **utvalg** (ikke hele populasjonen). Dette gir et mer nøyaktig estimat.
- Standardavviket har **samme enhet** som dataene (f.eks. cm, kg, °C), mens variansen har kvadrert enhet.
- Et **lavt** standardavvik betyr at verdiene ligger tett rundt gjennomsnittet. Et **høyt** standardavvik betyr stor spredning.`,
    },
    {
      id: 'tof1-2-2-example-3',
      type: 'example',
      title: 'Eksempel: Beregne standardavvik',
      problem: 'Beregn standardavviket for datasettet: 4, 7, 8, 9, 12.',
      solution: `**Steg 1:** Finn gjennomsnittet.
$$\\bar{x} = \\frac{4 + 7 + 8 + 9 + 12}{5} = \\frac{40}{5} = 8$$

**Steg 2:** Finn avviket fra gjennomsnittet for hver verdi, og kvadrer dem.
| $x_i$ | $x_i - \\bar{x}$ | $(x_i - \\bar{x})^2$ |
|-------|-----------------|---------------------|
| 4     | $4 - 8 = -4$    | $16$                |
| 7     | $7 - 8 = -1$    | $1$                 |
| 8     | $8 - 8 = 0$     | $0$                 |
| 9     | $9 - 8 = 1$     | $1$                 |
| 12    | $12 - 8 = 4$    | $16$                |

**Steg 3:** Finn variansen.
$$s^2 = \\frac{16 + 1 + 0 + 1 + 16}{5-1} = \\frac{34}{4} = 8{,}5$$

**Steg 4:** Finn standardavviket.
$$s = \\sqrt{8{,}5} \\approx 2{,}92$$

Standardavviket er ca. **2,9**. Det betyr at verdiene i gjennomsnitt avviker med omtrent 2,9 fra gjennomsnittet.`,
    },
    {
      id: 'tof1-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'To datasett har begge gjennomsnitt lik 50. Datasett A har standardavvik 2, og datasett B har standardavvik 15. Hva kan vi si om datasettene?',
        options: [
          { id: 'a', text: 'Datasett A har verdier som er mer spredt enn datasett B', isCorrect: false },
          { id: 'b', text: 'Datasett B har verdier som er mer spredt enn datasett A', isCorrect: true },
          { id: 'c', text: 'Begge datasettene har lik spredning siden gjennomsnittet er likt', isCorrect: false },
          { id: 'd', text: 'Vi kan ikke si noe om spredningen uten å se alle verdiene', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Standardavviket måler spredningen i datasettet. Datasett B har standardavvik 15, altså mye større spredning enn datasett A med standardavvik 2. I datasett A ligger de fleste verdier tett rundt 50 (f.eks. mellom 46 og 54), mens i datasett B kan verdier variere mye mer (f.eks. mellom 20 og 80).',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-2-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Sentralmål** beskriver hva som er typisk i et datasett:
  - **Gjennomsnitt** = summen delt på antall. Følsomt for uteliggere.
  - **Median** = midterste verdi. Robust mot uteliggere.
  - **Modus** = hyppigste verdi. Kan brukes på kategoriske data.
- **Spredningsmål** beskriver hvor spredt dataene er:
  - **Varians** = gjennomsnittlig kvadratavvik fra gjennomsnittet.
  - **Standardavvik** = kvadratroten av variansen, i samme enhet som dataene.
- Velg sentralmål basert på datatypen og om det finnes uteliggere.
- Oppgi alltid et spredningsmål sammen med sentralmålet for å gi et fullstendig bilde av datasettet.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof1-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En forsker måler lengden på 8 fisk i en innsjø (i cm): 22, 25, 26, 27, 28, 29, 31, 34. Beregn gjennomsnitt, median og standardavvik for datasettet. Vis utregningen.',
        hints: ['Husk at medianen for et partall datasett er gjennomsnittet av de to midterste verdiene. For standardavvik, del på n-1 = 7.'],
        solution: 'Gjennomsnitt: (22+25+26+27+28+29+31+34)/8 = 222/8 = 27,75 cm\n\nMedian: De to midterste verdiene (nr. 4 og 5) er 27 og 28. Median = (27+28)/2 = 27,5 cm\n\nStandardavvik:\nAvvik fra gjennomsnitt: -5,75, -2,75, -1,75, -0,75, 0,25, 1,25, 3,25, 6,25\nKvadratavvik: 33,06, 7,56, 3,06, 0,56, 0,06, 1,56, 10,56, 39,06\nSum kvadratavvik: 95,5\nVarians: 95,5/7 = 13,64\nStandardavvik: sqrt(13,64) = 3,69 cm',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof1-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'To klasser har hatt den samme naturfagsprøven. Klasse A fikk følgende resultater (av 30 poeng): 14, 18, 20, 21, 22, 24, 26, 28. Klasse B fikk: 8, 12, 15, 20, 25, 28, 30, 30. Beregn gjennomsnitt og standardavvik for begge klassene, og drøft hva tallene forteller oss om resultatene i de to klassene.',
        hints: ['Sammenlign både sentraltendensen og spredningen. Hva betyr det i praksis at den ene klassen har større standardavvik?'],
        solution: 'Klasse A:\nGjennomsnitt: (14+18+20+21+22+24+26+28)/8 = 173/8 = 21,6 poeng\nAvvik²: 57,8 + 12,96 + 2,56 + 0,36 + 0,16 + 5,76 + 19,36 + 40,96 = 139,88\nStandardavvik: sqrt(139,88/7) = sqrt(19,98) = 4,5 poeng\n\nKlasse B:\nGjennomsnitt: (8+12+15+20+25+28+30+30)/8 = 168/8 = 21,0 poeng\nAvvik²: 169 + 81 + 36 + 1 + 16 + 49 + 81 + 81 = 514\nStandardavvik: sqrt(514/7) = sqrt(73,4) = 8,6 poeng\n\nDrøfting: Gjennomsnittene er nesten like (21,6 vs 21,0), men standardavvikene er svært forskjellige (4,5 vs 8,6). Klasse A har jevne prestasjoner – de fleste ligger nær gjennomsnittet. Klasse B har stor spredning – noen elever gjør det veldig bra (30 poeng) mens andre sliter (8 poeng). For læreren betyr dette at klasse B kanskje trenger mer differensiert undervisning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof1-2-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'vanskelig',
        task: 'Et datasett inneholder verdiene: 5, 5, 5, 5, 100. Hva er den beste beskrivelsen av forskjellen mellom gjennomsnitt og median i dette tilfellet?',
        options: [
          { id: 'a', text: 'Gjennomsnittet (24) er mye høyere enn medianen (5) fordi uteliggeren 100 trekker gjennomsnittet opp', isCorrect: true },
          { id: 'b', text: 'Medianen (24) er høyere enn gjennomsnittet (5) fordi den tar hensyn til alle verdier', isCorrect: false },
          { id: 'c', text: 'Gjennomsnitt og median er like fordi datasettet er symmetrisk', isCorrect: false },
          { id: 'd', text: 'Gjennomsnittet er 20 og medianen er 52,5', isCorrect: false },
        ],
        solution: 'Riktig svar er A. Gjennomsnitt = (5+5+5+5+100)/5 = 120/5 = 24. Median = den midterste verdien (3. av 5) = 5. Uteliggeren 100 trekker gjennomsnittet kraftig opp til 24, mens medianen forblir på 5, som er mye mer representativt for de fleste verdiene i datasettet.',
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.3: Grafisk fremstilling
// ============================================================================

export const CHAPTER_TOF_1_2_3: TextbookChapter = {
  id: 'tof-1-2-3',
  courseId: 'tof-1',
  chapterNumber: '2.3',
  title: 'Grafisk fremstilling',
  description: 'Histogram, søylediagram, sektordiagram og linjediagram.',
  estimatedMinutes: 30,
  competenceGoals: ['fremstille data grafisk'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-2-3-intro',
      type: 'text',
      content: `## Grafisk fremstilling

Tall og statistikk kan være vanskelige å forstå når de presenteres som rene tall i en tabell. **Grafisk fremstilling** gjør data visuelt tilgjengelige og hjelper oss med å se mønstre, trender og sammenhenger som ellers kan være skjult.

I dette kapittelet skal vi se på fire vanlige diagramtyper – histogram, søylediagram, sektordiagram og linjediagram – og lære når hver type er best egnet.`,
    },

    // --- BLOKK 1: Søylediagram ---
    {
      id: 'tof1-2-3-def-1',
      type: 'definition',
      title: 'Søylediagram',
      content: `Et **søylediagram** bruker rektangulære søyler for å vise verdier for ulike kategorier. Høyden (eller lengden) på hver søyle representerer verdien.

**Kjennetegn:**
- Brukes for **kategoriske data** (f.eks. favorittfag, transportmiddel, land)
- Søylene har **mellomrom** mellom seg for å markere at kategoriene er adskilte
- Kan være **vertikale** (vanligst) eller **horisontale**
- Egner seg godt for **sammenligning** mellom kategorier`,
    },
    {
      id: 'tof1-2-3-text-1',
      type: 'text',
      content: `### Når bruke søylediagram?

Søylediagram er ideelle når du vil sammenligne verdier mellom ulike grupper eller kategorier. Eksempler:
- Antall elever per studieretning
- Gjennomsnittlig karakter i ulike fag
- CO₂-utslipp fra forskjellige land
- Favorittfrukt i en klasse

**Viktige regler for søylediagram:**
- $y$-aksen bør **starte på 0** – ellers kan diagrammet villede ved å overdrive forskjellene
- Søylene bør ha **lik bredde** – varierende bredde kan gi feil inntrykk
- Bruk **tydelige aksetitler** og enheter
- Velg **passende farger** – unngå for mange farger med mindre de har en funksjon`,
    },
    {
      id: 'tof1-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Villedende søylediagram',
      problem: 'En avis viser et søylediagram over salgsresultater der y-aksen starter på 980 i stedet for 0. Firma A har salg på 1000 enheter og firma B har 1020 enheter. Hva er problemet?',
      solution: `**Problemet:** Når $y$-aksen starter på 980, ser forskjellen mellom 1000 og 1020 ut som en enorm forskjell – firma B sin søyle er tilsynelatende mange ganger høyere enn firma A sin.

**I virkeligheten:** Forskjellen er bare 20 enheter av 1000, altså kun 2 %. Med en $y$-akse som starter på 0, ville søylene vært nesten like høye, og den lille forskjellen ville blitt tydelig.

**Lærdom:** Sjekk alltid om $y$-aksen starter på 0 når du ser et søylediagram. Et avkuttet diagram kan brukes bevisst for å overdrive forskjeller og villede leseren.`,
    },
    {
      id: 'tof1-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Du skal vise fordelingen av transportmiddel til skolen blant 200 elever (buss: 80, sykkel: 50, gange: 40, bil: 30). Hvilken diagramtype passer best?',
        options: [
          { id: 'a', text: 'Linjediagram', isCorrect: false },
          { id: 'b', text: 'Histogram', isCorrect: false },
          { id: 'c', text: 'Søylediagram', isCorrect: true },
          { id: 'd', text: 'Punktdiagram (scatterplot)', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Transportmiddel er en kategorisk variabel (buss, sykkel, gange, bil), og søylediagram er best egnet for å sammenligne verdier mellom kategorier. Linjediagram brukes for data over tid, histogram for kontinuerlige data, og punktdiagram for sammenheng mellom to variabler.',
      },
    },

    // --- BLOKK 2: Histogram ---
    {
      id: 'tof1-2-3-def-2',
      type: 'definition',
      title: 'Histogram',
      content: `Et **histogram** viser fordelingen av **kontinuerlige data** ved å gruppere verdier i intervaller (klasser) og bruke søyler for å vise antall observasjoner i hvert intervall.

**Kjennetegn:**
- Brukes for **kontinuerlige (numeriske) data** som høyde, vekt, temperatur, tid
- Søylene har **ingen mellomrom** – de står inntil hverandre fordi dataene er sammenhengende
- $x$-aksen viser **verdiintervaller**, $y$-aksen viser **frekvens** (antall)
- Viser **formen** på datafordelingen (symmetrisk, skjev, bimodal osv.)`,
    },
    {
      id: 'tof1-2-3-note-1',
      type: 'note',
      title: 'Histogram vs. søylediagram',
      content: `Mange forveksler histogram og søylediagram, men de brukes til ulike formål:

| Egenskap | Søylediagram | Histogram |
|----------|-------------|-----------|
| Datatype | Kategorier | Kontinuerlige tall |
| Mellomrom | Ja, mellom søylene | Nei, søylene er inntil hverandre |
| $x$-akse | Kategorinavn | Tallintervaller |
| Formål | Sammenligne kategorier | Vise fordeling |

**Huskeregel:** Søylediagram = kategorier med mellomrom. Histogram = tall uten mellomrom.`,
    },
    {
      id: 'tof1-2-3-example-2',
      type: 'example',
      title: 'Eksempel: Lage et histogram',
      problem: 'Du har målt høyden til 20 elever i en klasse (i cm): 155, 158, 160, 162, 163, 165, 167, 168, 170, 171, 172, 173, 174, 175, 176, 178, 180, 182, 185, 190. Del dataene inn i passende intervaller og beskriv histogrammet.',
      solution: `Vi velger intervaller med bredde 5 cm:

| Intervall (cm) | Antall elever |
|----------------|---------------|
| 155–159        | 2             |
| 160–164        | 3             |
| 165–169        | 3             |
| 170–174        | 5             |
| 175–179        | 3             |
| 180–184        | 2             |
| 185–190        | 2             |

Histogrammet vil ha 7 søyler uten mellomrom. Den høyeste søylen er for intervallet 170–174 cm. Fordelingen er tilnærmet symmetrisk med en liten hale til høyre (noen svært høye elever). Formen minner om en normalfordeling.`,
    },
    {
      id: 'tof1-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den viktigste forskjellen mellom et histogram og et søylediagram?',
        options: [
          { id: 'a', text: 'Histogram bruker farger, søylediagram gjør det ikke', isCorrect: false },
          { id: 'b', text: 'Histogram viser fordeling av kontinuerlige data med søyler uten mellomrom, søylediagram sammenligner kategorier med mellomrom', isCorrect: true },
          { id: 'c', text: 'Søylediagram viser alltid prosent, histogram viser antall', isCorrect: false },
          { id: 'd', text: 'Det er ingen vesentlig forskjell – begrepene brukes om hverandre', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Den viktigste forskjellen er at histogram brukes for kontinuerlige data (tall i intervaller) der søylene er inntil hverandre, mens søylediagram brukes for kategoriske data der søylene har mellomrom for å markere at kategoriene er adskilte.',
      },
    },

    // --- BLOKK 3: Sektordiagram og linjediagram ---
    {
      id: 'tof1-2-3-text-2',
      type: 'text',
      content: `### Sektordiagram (kakediagram)

Et **sektordiagram** viser hvordan en helhet er delt inn i deler. Hver «kakestykke» representerer en andel av totalen.

**Når bruke sektordiagram:**
- Når du vil vise **andeler av en helhet** (f.eks. budsjettfordeling, stemmeandeler)
- Når du har **få kategorier** (maks 5–6)
- Når summene utgjør **100 %**

**Begrensninger:**
- Vanskelig å sammenligne sektorer med lignende størrelse
- Uegnet for mange kategorier – blir uoversiktlig
- 3D-sektordiagram bør unngås – de forvrenger proporsjonene

### Linjediagram

Et **linjediagram** viser utviklingen av en variabel over tid. Datapunktene forbindes med linjer for å vise trender.

**Når bruke linjediagram:**
- Når du vil vise **endring over tid** (tidsserier)
- Når du har **kontinuerlige data** langs $x$-aksen (tid, alder, avstand)
- Eksempler: temperaturutvikling over et år, befolkningsvekst, aksjepriser

**Tips:**
- Bruk jevne tidsintervaller på $x$-aksen
- Marker datapunktene tydelig
- Flere linjer i samme diagram gjør det mulig å sammenligne trender`,
    },
    {
      id: 'tof1-2-3-example-3',
      type: 'example',
      title: 'Eksempel: Velge riktig diagramtype',
      problem: 'For hvert av følgende datasett, velg den mest egnede diagramtypen og begrunn valget:\n\n1. Gjennomsnittlig temperatur i Oslo per måned over et år\n2. Fordelingen av karakterer (1–6) på en eksamen\n3. Hvordan skolens budsjett fordeles på ulike poster',
      solution: `**1. Temperatur per måned – Linjediagram**
Begrunnelse: Vi viser utvikling over tid (12 måneder). Linjen viser trenden tydelig – stigende om våren, toppunkt om sommeren, synkende om høsten.

**2. Karakterfordeling – Søylediagram (eller histogram)**
Begrunnelse: Karakterene 1–6 er diskrete kategorier. Et søylediagram lar oss enkelt sammenligne hvor mange elever som fikk hver karakter. Et histogram kunne også fungere siden tallene er ordnet.

**3. Budsjettfordeling – Sektordiagram**
Begrunnelse: Vi viser deler av en helhet (100 % av budsjettet). Sektordiagram gjør det visuelt tydelig hvilke poster som tar størst andel. Forutsatt at det er 5–6 poster.`,
    },
    {
      id: 'tof1-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Du vil vise hvordan Norges BNP har utviklet seg fra 2010 til 2024. Hvilken diagramtype passer best?',
        options: [
          { id: 'a', text: 'Sektordiagram', isCorrect: false },
          { id: 'b', text: 'Søylediagram', isCorrect: false },
          { id: 'c', text: 'Linjediagram', isCorrect: true },
          { id: 'd', text: 'Histogram', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Linjediagram er best for å vise utvikling over tid (tidsserier). X-aksen viser årene 2010–2024, y-aksen viser BNP, og linjen viser trenden tydelig. Søylediagram kan også brukes, men linjediagram er mer standard for tidsserier og gjør det lettere å se den langsiktige trenden.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-2-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Søylediagram** brukes for å sammenligne verdier mellom kategorier. Søylene har mellomrom.
- **Histogram** viser fordeling av kontinuerlige data i intervaller. Søylene står inntil hverandre.
- **Sektordiagram** viser andeler av en helhet. Best med få kategorier som summerer til 100 %.
- **Linjediagram** viser utvikling over tid. Forbinder datapunkter med linjer for å vise trender.
- Velg diagramtype basert på **datatypen** og **hva du vil kommunisere**.
- Vær kritisk til villedende diagrammer – sjekk om $y$-aksen starter på 0, om proporsjonene er riktige, og om 3D-effekter forvrenger bildet.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof1-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du har samlet inn data om søvnvaner blant 30 elever. Forklar hvilken diagramtype du ville valgt for å vise følgende, og begrunn valget:\n\na) Gjennomsnittlig søvnlengde per ukedag (mandag–søndag)\nb) Fordelingen av søvnlengde (i timer) blant alle elevene\nc) Andelen elever som sover under 7 timer, 7–8 timer og over 8 timer',
        hints: ['Tenk på om dataene er kategoriske, kontinuerlige eller viser endring over tid.'],
        solution: 'a) Linjediagram – vi viser utvikling over en tidsperiode (mandag til søndag). Linjen gjør det lett å se om elevene sover mer i helgene enn på hverdager.\n\nb) Histogram – søvnlengde i timer er en kontinuerlig variabel. Histogrammet viser fordelingen, f.eks. om de fleste sover 7–8 timer, og om det er noen som sover svært lite eller mye.\n\nc) Sektordiagram – vi viser tre deler av en helhet (alle 30 elever). Sektordiagrammet viser tydelig hvilken andel av klassen som er i hver kategori.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof1-2-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn et diagram i en avis, nettavis eller på sosiale medier som du mener er villedende eller kunne vært presentert bedre. Beskriv hva som gjør diagrammet problematisk, og forklar hvordan det burde vært fremstilt for å gi et mer riktig bilde av dataene.',
        hints: ['Se etter avkuttede y-akser, 3D-effekter, manglende akseetiketter, ujevne intervaller eller bruk av feil diagramtype.'],
        solution: 'Svar vil variere. Et godt svar bør:\n\n1. Beskrive det konkrete diagrammet (hva det viser, hvor det er hentet fra).\n\n2. Identifisere minst ett problem, for eksempel:\n- Y-aksen starter ikke på 0, noe som overdriver forskjeller\n- 3D-effekter gjør det vanskelig å lese nøyaktige verdier\n- Feil diagramtype brukes (f.eks. sektordiagram med 20 kategorier)\n- Manglende aksetitler eller enheter\n- Ujevne intervaller langs x-aksen\n\n3. Foreslå en bedre fremstilling med begrunnelse, for eksempel: «Diagrammet burde hatt y-akse fra 0, slik at den reelle forskjellen på 2 % mellom partiene ble tydelig i stedet for å se ut som en enorm forskjell.»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.4: Normalfordeling og usikkerhet
// ============================================================================

export const CHAPTER_TOF_1_2_4: TextbookChapter = {
  id: 'tof-1-2-4',
  courseId: 'tof-1',
  chapterNumber: '2.4',
  title: 'Normalfordeling og usikkerhet',
  description: 'Normalfordelingskurven, konfidensintervall og måleusikkerhet.',
  estimatedMinutes: 35,
  competenceGoals: ['vurdere usikkerhet i målinger'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-2-4-intro',
      type: 'text',
      content: `## Normalfordeling og usikkerhet

I forrige kapittel lærte vi å lage diagrammer for å visualisere data. En av de vanligste formene vi ser i histogrammer med mange observasjoner, er den karakteristiske **bjelleformen** – normalfordelingen. Denne fordelingen er så viktig at den kalles «statistikkens ryggrad».

Vi skal også se på noe som er grunnleggende i all naturvitenskap: **usikkerhet**. Ingen måling er perfekt, og det er avgjørende å forstå og kommunisere hvor usikre resultatene våre er.`,
    },

    // --- BLOKK 1: Normalfordelingen ---
    {
      id: 'tof1-2-4-def-1',
      type: 'definition',
      title: 'Normalfordeling',
      content: `**Normalfordelingen** (Gausskurven) er en symmetrisk, bjelleformet sannsynlighetsfordeling som er bestemt av to parametre:
- **Gjennomsnitt** ($\\mu$) – bestemmer sentrum av kurven
- **Standardavvik** ($\\sigma$) – bestemmer bredden (spredningen) av kurven

Viktige egenskaper:
- Kurven er **symmetrisk** rundt gjennomsnittet
- Gjennomsnittet, medianen og modus er **like**
- Totalarealet under kurven er **1** (100 %)
- De fleste observasjonene ligger **nær gjennomsnittet**, færre ligger langt fra`,
    },
    {
      id: 'tof1-2-4-text-1',
      type: 'text',
      content: `### 68–95–99,7-regelen (empirisk regel)

For normalfordelte data gjelder følgende tommelfingerregel:

- Ca. **68 %** av verdiene ligger innenfor **1 standardavvik** fra gjennomsnittet ($\\mu \\pm 1\\sigma$)
- Ca. **95 %** av verdiene ligger innenfor **2 standardavvik** fra gjennomsnittet ($\\mu \\pm 2\\sigma$)
- Ca. **99,7 %** av verdiene ligger innenfor **3 standardavvik** fra gjennomsnittet ($\\mu \\pm 3\\sigma$)

Denne regelen gjør det mulig å raskt vurdere om en observasjon er typisk eller uvanlig. En verdi som er mer enn 2 standardavvik fra gjennomsnittet, er uvanlig (bare 5 % av verdiene). En verdi mer enn 3 standardavvik fra gjennomsnittet er svært sjelden (bare 0,3 %).

### Eksempler på normalfordeling i virkeligheten

Mange naturfenomener og målinger er tilnærmet normalfordelte:
- **Høyde** hos voksne av samme kjønn og etnisitet
- **Fødselsvekt** hos spedbarn
- **Målefeil** ved gjentatte målinger av samme størrelse
- **IQ-score** i en populasjon (gjennomsnitt 100, standardavvik 15)
- **Blodtrykk** hos friske voksne`,
    },
    {
      id: 'tof1-2-4-example-1',
      type: 'example',
      title: 'Eksempel: 68–95–99,7-regelen',
      problem: 'Høyden til voksne menn i Norge er tilnærmet normalfordelt med gjennomsnitt $\\mu = 180$ cm og standardavvik $\\sigma = 7$ cm. Bruk 68–95–99,7-regelen til å finne hvilke intervaller 68 %, 95 % og 99,7 % av mennene har høyde innenfor.',
      solution: `Vi bruker $\\mu = 180$ og $\\sigma = 7$:

**68 % ligger innenfor $\\mu \\pm 1\\sigma$:**
$180 - 7 = 173$ cm til $180 + 7 = 187$ cm
Altså er ca. 68 % av menn mellom **173 og 187 cm** høye.

**95 % ligger innenfor $\\mu \\pm 2\\sigma$:**
$180 - 14 = 166$ cm til $180 + 14 = 194$ cm
Altså er ca. 95 % av menn mellom **166 og 194 cm** høye.

**99,7 % ligger innenfor $\\mu \\pm 3\\sigma$:**
$180 - 21 = 159$ cm til $180 + 21 = 201$ cm
Altså er ca. 99,7 % av menn mellom **159 og 201 cm** høye.

En mann som er 200 cm er mer enn 2 standardavvik over gjennomsnittet, noe som gjør ham høyere enn ca. 97,5 % av befolkningen.`,
    },
    {
      id: 'tof1-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Resultater på en standardisert test er normalfordelt med gjennomsnitt 500 og standardavvik 100. Ifølge 68–95–99,7-regelen, omtrent hvor stor andel av deltakerne scorer mellom 300 og 700?',
        options: [
          { id: 'a', text: 'Ca. 68 %', isCorrect: false },
          { id: 'b', text: 'Ca. 95 %', isCorrect: true },
          { id: 'c', text: 'Ca. 99,7 %', isCorrect: false },
          { id: 'd', text: 'Ca. 50 %', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Intervallet 300–700 tilsvarer gjennomsnittet ± 2 standardavvik (500 ± 200). Ifølge 68–95–99,7-regelen ligger ca. 95 % av verdiene i en normalfordeling innenfor 2 standardavvik fra gjennomsnittet.',
      },
    },

    // --- BLOKK 2: Måleusikkerhet ---
    {
      id: 'tof1-2-4-def-2',
      type: 'definition',
      title: 'Måleusikkerhet',
      content: `**Måleusikkerhet** angir hvor mye et måleresultat kan avvike fra den sanne verdien. Alle målinger har usikkerhet – ingen måling er perfekt.

**Typer feilkilder:**
- **Systematiske feil:** Feil som gir konsekvent for høye eller for lave verdier. For eksempel en vekt som alltid viser 50 g for mye. Kan ofte korrigeres.
- **Tilfeldige feil:** Feil som varierer tilfeldig fra måling til måling. Skyldes begrensninger i måleutstyr, menneskelig avlesning, miljøfaktorer osv. Kan reduseres ved å ta mange målinger.

**Oppgi usikkerhet:** Et måleresultat bør alltid oppgis med usikkerhet:
$$\\text{resultat} = \\text{verdi} \\pm \\text{usikkerhet}$$
For eksempel: Lengde = $25{,}3 \\pm 0{,}1$ cm`,
    },
    {
      id: 'tof1-2-4-text-2',
      type: 'text',
      content: `### Hvordan redusere usikkerhet

Det finnes flere strategier for å redusere usikkerhet i målinger:

**1. Gjenta målingen:** Ta mange målinger og beregn gjennomsnittet. Tilfeldige feil vil da jevne seg ut. Standardavviket til gjennomsnittet (standardfeilen) avtar med $\\frac{\\sigma}{\\sqrt{n}}$, der $n$ er antall målinger.

**2. Bruk bedre utstyr:** Et digitalt termometer med 0,1 °C presisjon gir lavere usikkerhet enn et analogt med 1 °C presisjon.

**3. Kontroller forholdene:** Mål i stabile omgivelser uten forstyrrende faktorer.

**4. Kalibrer utstyret:** Sjekk utstyret mot en kjent standard for å avdekke systematiske feil.

**5. Bruk riktig teknikk:** Avles rett, unngå parallaksefeil, følg prosedyrer nøyaktig.`,
    },
    {
      id: 'tof1-2-4-example-2',
      type: 'example',
      title: 'Eksempel: Måleusikkerhet i praksis',
      problem: 'En elev måler lengden på et bord med en linjal og får disse fem målingene (i cm): 120,2, 120,4, 119,8, 120,1, 120,5. Beregn gjennomsnitt og standardavvik, og oppgi resultatet med usikkerhet.',
      solution: `**Gjennomsnitt:**
$$\\bar{x} = \\frac{120{,}2 + 120{,}4 + 119{,}8 + 120{,}1 + 120{,}5}{5} = \\frac{601{,}0}{5} = 120{,}2 \\text{ cm}$$

**Standardavvik:**
Avvik: $0{,}0$, $0{,}2$, $-0{,}4$, $-0{,}1$, $0{,}3$
Kvadratavvik: $0$, $0{,}04$, $0{,}16$, $0{,}01$, $0{,}09$
Varians: $\\frac{0{,}30}{4} = 0{,}075$
$s = \\sqrt{0{,}075} \\approx 0{,}27$ cm

**Standardfeil (usikkerhet i gjennomsnittet):**
$$\\text{SE} = \\frac{s}{\\sqrt{n}} = \\frac{0{,}27}{\\sqrt{5}} \\approx 0{,}12 \\text{ cm}$$

**Resultat:** Bordets lengde er $120{,}2 \\pm 0{,}1$ cm (avrundet til én desimal).

De fem målingene spriker litt, men gjennomsnittet gir et godt estimat. Usikkerheten forteller oss at den sanne lengden trolig ligger mellom 120,1 og 120,3 cm.`,
    },
    {
      id: 'tof1-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En vekt viser alltid 30 gram for mye, uansett hva som veies. Hvilken type feil er dette?',
        options: [
          { id: 'a', text: 'Tilfeldig feil som kan reduseres ved flere målinger', isCorrect: false },
          { id: 'b', text: 'Systematisk feil som gir konsekvent for høye verdier', isCorrect: true },
          { id: 'c', text: 'Parallaksefeil ved avlesning av skalaen', isCorrect: false },
          { id: 'd', text: 'Feil som ikke kan korrigeres', isCorrect: false },
        ],
        solution: 'Riktig svar er B. En vekt som alltid viser 30 g for mye er et eksempel på en systematisk feil – feilen er konstant og trekker alle målingene i samme retning. Gjentatte målinger gir ikke bedre resultat (de vil alle vise 30 g for mye). Systematiske feil kan korrigeres når de oppdages – her kan man trekke fra 30 g fra alle avlesninger.',
      },
    },

    // --- BLOKK 3: Konfidensintervall ---
    {
      id: 'tof1-2-4-text-3',
      type: 'text',
      content: `### Konfidensintervall

Et **konfidensintervall** er et intervall som med en angitt sannsynlighet inneholder den sanne verdien av det vi måler. Det er en formell måte å uttrykke usikkerhet på.

**95 % konfidensintervall** betyr at dersom vi gjentar undersøkelsen mange ganger, vil ca. 95 av 100 intervaller inneholde den sanne verdien.

For normalfordelte data med kjent standardavvik beregnes 95 % konfidensintervall slik:

$$\\bar{x} \\pm 1{,}96 \\cdot \\frac{s}{\\sqrt{n}}$$

der $\\bar{x}$ er gjennomsnittet, $s$ er standardavviket og $n$ er antall observasjoner.

**I praksis:** Når du leser at «gjennomsnittstemperaturen var $15{,}3 \\pm 0{,}4$ °C (95 % konfidensintervall)», betyr det at vi med 95 % sikkerhet kan si at den sanne gjennomsnittstemperaturen ligger mellom 14,9 og 15,7 °C.

**Viktig:** Konfidensintervallet blir **smalere** når:
- Vi øker antall observasjoner ($n$ blir større)
- Spredningen i dataene er liten ($s$ er liten)
- Vi aksepterer lavere konfidensnivå (f.eks. 90 % i stedet for 95 %)`,
    },
    {
      id: 'tof1-2-4-example-3',
      type: 'example',
      title: 'Eksempel: Beregne 95 % konfidensintervall',
      problem: 'En forsker måler reaksjonstiden til 25 forsøkspersoner. Gjennomsnittlig reaksjonstid er 320 millisekunder, med standardavvik 40 ms. Beregn et 95 % konfidensintervall for den sanne gjennomsnittlige reaksjonstiden.',
      solution: `Vi har $\\bar{x} = 320$ ms, $s = 40$ ms og $n = 25$.

**Standardfeil:**
$$\\text{SE} = \\frac{s}{\\sqrt{n}} = \\frac{40}{\\sqrt{25}} = \\frac{40}{5} = 8 \\text{ ms}$$

**95 % konfidensintervall:**
$$320 \\pm 1{,}96 \\cdot 8 = 320 \\pm 15{,}7 \\text{ ms}$$

Konfidensintervallet er **(304,3 ms, 335,7 ms)**.

**Tolkning:** Vi er 95 % sikre på at den sanne gjennomsnittlige reaksjonstiden i populasjonen ligger mellom ca. 304 og 336 millisekunder.

Hadde vi hatt 100 forsøkspersoner i stedet for 25, ville standardfeilen blitt $40/\\sqrt{100} = 4$ ms, og konfidensintervallet ville blitt smalere: $320 \\pm 7{,}8$ ms. Flere observasjoner gir altså mer presis kunnskap.`,
    },
    {
      id: 'tof1-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skjer med bredden på et 95 % konfidensintervall dersom vi øker utvalget fra 25 til 100 personer, gitt at standardavviket forblir det samme?',
        options: [
          { id: 'a', text: 'Intervallet blir dobbelt så bredt', isCorrect: false },
          { id: 'b', text: 'Intervallet forblir uendret', isCorrect: false },
          { id: 'c', text: 'Intervallet blir halvparten så bredt', isCorrect: true },
          { id: 'd', text: 'Intervallet blir fire ganger så smalt', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Bredden på konfidensintervallet er proporsjonal med $\\frac{s}{\\sqrt{n}}$. Når $n$ øker fra 25 til 100 (firedobles), øker $\\sqrt{n}$ fra 5 til 10 (dobles). Dermed halveres standardfeilen, og intervallet blir halvparten så bredt. For å halvere bredden igjen, må vi firedoble utvalget ytterligere (til 400).',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-2-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Normalfordelingen** er en symmetrisk, bjelleformet fordeling bestemt av gjennomsnitt ($\\mu$) og standardavvik ($\\sigma$).
- **68–95–99,7-regelen:** Ca. 68 %, 95 % og 99,7 % av verdiene ligger innenfor henholdsvis 1, 2 og 3 standardavvik fra gjennomsnittet.
- **Måleusikkerhet** finnes i alle målinger. Vi skiller mellom systematiske feil (konstante, korrigerbare) og tilfeldige feil (varierende, reduseres ved gjentatte målinger).
- Resultater bør oppgis som $\\text{verdi} \\pm \\text{usikkerhet}$.
- **Konfidensintervall** angir et intervall som med en gitt sannsynlighet inneholder den sanne verdien.
- Usikkerheten reduseres med **flere målinger** ($\\propto \\frac{1}{\\sqrt{n}}$), bedre utstyr og kontrollerte forhold.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof1-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vekten til nyfødte i Norge er tilnærmet normalfordelt med gjennomsnitt 3500 g og standardavvik 500 g.\n\na) Bruk 68–95–99,7-regelen til å finne intervallet som inneholder ca. 95 % av fødselsvektene.\nb) En baby veier 2300 g ved fødsel. Hvor mange standardavvik fra gjennomsnittet er dette? Er vekten uvanlig?',
        hints: ['For b), beregn z-score: z = (x - μ) / σ. En verdi med |z| > 2 regnes som uvanlig.'],
        solution: 'a) 95 % av verdiene ligger innenfor μ ± 2σ = 3500 ± 1000 g, altså mellom 2500 g og 4500 g.\n\nb) z-score = (2300 - 3500) / 500 = -1200 / 500 = -2,4\n\nBabyen veier 2,4 standardavvik under gjennomsnittet. Siden |z| > 2, er dette uvanlig lavt – bare ca. 1 % av nyfødte veier så lite eller mindre. I medisinsk sammenheng ville dette klassifiseres som lav fødselsvekt (under 2500 g) og kreve ekstra oppfølging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof1-2-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En elev gjennomfører et forsøk der hun måler akselerasjonen til en liten vogn i et fysikkforsøk. Hun gjør 10 målinger og får følgende verdier (i m/s²): 9,72, 9,85, 9,78, 9,91, 9,80, 9,84, 9,76, 9,88, 9,82, 9,79.\n\na) Beregn gjennomsnitt og standardavvik.\nb) Beregn et 95 % konfidensintervall for den sanne akselerasjonen.\nc) Den teoretiske verdien er 9,81 m/s². Ligger denne innenfor konfidensintervallet? Hva betyr det?',
        hints: ['Husk formelen for 95 % konfidensintervall: gjennomsnitt ± 1,96 · (s/√n). Sammenlign intervallet med den kjente verdien.'],
        solution: 'a) Gjennomsnitt: (9,72+9,85+9,78+9,91+9,80+9,84+9,76+9,88+9,82+9,79)/10 = 98,15/10 = 9,815 m/s²\n\nFor standardavvik beregner vi summen av kvadratavvik fra gjennomsnittet:\nΣ(xi - x̄)² = 0,009025 + 0,001225 + 0,001225 + 0,009025 + 0,000225 + 0,000625 + 0,003025 + 0,004225 + 0,000025 + 0,000625 = 0,02925\nVarians: 0,02925/9 = 0,00325\nStandardavvik: √0,00325 ≈ 0,057 m/s²\n\nb) Standardfeil: SE = 0,057/√10 = 0,057/3,162 ≈ 0,018 m/s²\n95 % KI: 9,815 ± 1,96 · 0,018 = 9,815 ± 0,035\nKonfidensintervall: (9,780, 9,850) m/s²\n\nc) Den teoretiske verdien 9,81 m/s² ligger innenfor konfidensintervallet (9,780–9,850). Dette betyr at måleresultatet er forenlig med den teoretiske verdien – det er ingen statistisk signifikant forskjell mellom målt og forventet verdi. Forsøket støtter altså den teoretiske verdien.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.5: Korrelasjon og regresjon
// ============================================================================

export const CHAPTER_TOF_1_2_5: TextbookChapter = {
  id: 'tof-1-2-5',
  courseId: 'tof-1',
  chapterNumber: '2.5',
  title: 'Korrelasjon og regresjon',
  description: 'Korrelasjon, regresjonsanalyse og bestemmelseskoeffisient (R²).',
  estimatedMinutes: 35,
  competenceGoals: ['utføre regresjonsanalyse'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-2-5-intro',
      type: 'text',
      content: `## Korrelasjon og regresjon

Så langt har vi sett på hvordan vi beskriver én variabel om gangen – med gjennomsnitt, standardavvik og diagrammer. Men i forskning og dataanalyse er vi ofte interessert i **sammenhengen mellom to variabler**. Er det en sammenheng mellom antall timer man leser og resultatet på en prøve? Henger temperatur og issalg sammen?

I dette kapittelet lærer du å måle og beskrive slike sammenhenger ved hjelp av **korrelasjon** og **regresjon**.`,
    },

    // --- BLOKK 1: Korrelasjon ---
    {
      id: 'tof1-2-5-def-1',
      type: 'definition',
      title: 'Korrelasjon',
      content: `**Korrelasjon** er et statistisk mål på styrken og retningen av den lineære sammenhengen mellom to variabler. Korrelasjonskoeffisienten $r$ (Pearsons $r$) ligger alltid mellom $-1$ og $1$.

**Tolkning av $r$:**
- $r = 1$: Perfekt positiv korrelasjon – når den ene variabelen øker, øker den andre proporsjonalt
- $r = -1$: Perfekt negativ korrelasjon – når den ene øker, synker den andre proporsjonalt
- $r = 0$: Ingen lineær korrelasjon – ingen lineær sammenheng

**Tommelfingerregel for styrke:**
| $|r|$ | Styrke |
|-------|--------|
| 0,0–0,3 | Svak korrelasjon |
| 0,3–0,7 | Moderat korrelasjon |
| 0,7–1,0 | Sterk korrelasjon |

**Viktig:** Korrelasjon betyr **ikke** årsakssammenheng. At to variabler korrelerer, betyr ikke at den ene forårsaker den andre.`,
    },
    {
      id: 'tof1-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Tolke korrelasjon',
      problem: 'En forsker undersøker sammenhengen mellom antall timer studietid per uke og poeng på en eksamen for 8 studenter. Hun beregner $r = 0{,}82$. Hva forteller dette oss?',
      solution: `**Tolkning av $r = 0{,}82$:**

1. **Retning:** $r$ er positiv, så sammenhengen er **positiv** – mer studietid henger sammen med høyere poeng.

2. **Styrke:** $|r| = 0{,}82 > 0{,}7$, så korrelasjonen er **sterk**. Det er en tydelig lineær sammenheng.

3. **Hva vi IKKE kan si:** Vi kan ikke konkludere med at mer studietid *forårsaker* bedre resultater. Det kan finnes andre faktorer (f.eks. motivasjon, forkunnskaper) som påvirker begge variablene. Men sammenhengen er tydelig og i forventet retning.`,
    },
    {
      id: 'tof1-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En studie viser at korrelasjonen mellom iskremforbruk og antall drukningsulykker per måned er $r = 0{,}87$. Hva er den beste tolkningen?',
        options: [
          { id: 'a', text: 'Iskrem forårsaker drukningsulykker', isCorrect: false },
          { id: 'b', text: 'Drukningsulykker fører til økt iskremforbruk', isCorrect: false },
          { id: 'c', text: 'Det er en sterk positiv korrelasjon, men en bakenforliggende variabel (f.eks. varmt vær) kan forklare begge', isCorrect: true },
          { id: 'd', text: 'Korrelasjonen er for svak til å trekke noen konklusjon', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Selv om korrelasjonen er sterk ($r = 0{,}87$), betyr korrelasjon ikke årsakssammenheng. Her er det en **bakenforliggende variabel** (confounding variable) – varmt vær – som fører til at folk både spiser mer iskrem og bader oftere, noe som øker risikoen for drukningsulykker.',
      },
    },

    // --- BLOKK 2: Lineær regresjon ---
    {
      id: 'tof1-2-5-def-2',
      type: 'definition',
      title: 'Lineær regresjon',
      content: `**Lineær regresjon** er en metode for å finne den rette linjen som best beskriver sammenhengen mellom to variabler. Linjen kalles **regresjonslinjen** og skrives:

$$\\hat{y} = ax + b$$

der:
- $\\hat{y}$ er den predikerte verdien av $y$
- $a$ er **stigningstallet** – hvor mye $y$ endres når $x$ øker med 1
- $b$ er **konstantleddet** – verdien av $\\hat{y}$ når $x = 0$
- $x$ er den **forklarende variabelen** (uavhengig variabel)

Regresjonslinjen bestemmes ved **minste kvadraters metode** – den linjen som minimerer summen av de kvadrerte avstandene mellom de faktiske punktene og linjen.`,
    },
    {
      id: 'tof1-2-5-example-2',
      type: 'example',
      title: 'Eksempel: Tolke en regresjonslinje',
      problem: 'En regresjonsanalyse av sammenhengen mellom studietid (timer/uke) og eksamenspoeng (av 100) gir ligningen $\\hat{y} = 3{,}5x + 42$. Tolk stigningstallet og konstantleddet, og prediker poengsummen for en student som studerer 12 timer per uke.',
      solution: `**Tolkning:**
- **Stigningstall $a = 3{,}5$:** For hver ekstra time studietid per uke, øker forventet poengsum med 3,5 poeng.
- **Konstantledd $b = 42$:** En student som studerer 0 timer per uke, forventes å få 42 poeng. (Merk: dette er en matematisk ekstrapolering – i praksis studerer alle noe.)

**Prediksjon for $x = 12$ timer:**
$$\\hat{y} = 3{,}5 \\cdot 12 + 42 = 42 + 42 = 84 \\text{ poeng}$$

En student som studerer 12 timer per uke, kan forventes å oppnå ca. **84 poeng** på eksamen ifølge modellen.

**Advarsel:** Modellen er bare gyldig innenfor det dataområdet den er basert på. Å bruke den for $x = 30$ timer ville gi $\\hat{y} = 147$ poeng, noe som er umulig med maks 100 poeng. Slik **ekstrapolering** er upålitelig.`,
    },
    {
      id: 'tof1-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Regresjonslinjen for sammenhengen mellom alder (år) og lungekapasitet (liter) hos barn er $\\hat{y} = 0{,}25x + 0{,}5$. Hva betyr stigningstallet?',
        options: [
          { id: 'a', text: 'Lungekapasiteten starter på 0,25 liter ved fødsel', isCorrect: false },
          { id: 'b', text: 'For hvert år barnet vokser, øker lungekapasiteten med ca. 0,25 liter', isCorrect: true },
          { id: 'c', text: 'Et barn på 0,5 år har lungekapasitet 0,25 liter', isCorrect: false },
          { id: 'd', text: 'Lungekapasiteten øker med 0,5 liter for hvert halvår', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Stigningstallet $a = 0{,}25$ angir endringen i $y$ (lungekapasitet) når $x$ (alder) øker med 1 enhet (1 år). Altså øker lungekapasiteten med ca. 0,25 liter per år. Konstantleddet $b = 0{,}5$ angir at modellen gir en lungekapasitet på 0,5 liter ved alder 0 (fødsel).',
      },
    },

    // --- BLOKK 3: Bestemmelseskoeffisienten R² ---
    {
      id: 'tof1-2-5-def-3',
      type: 'definition',
      title: 'Bestemmelseskoeffisienten R²',
      content: `**Bestemmelseskoeffisienten** $R^2$ angir hvor stor andel av variasjonen i den avhengige variabelen ($y$) som forklares av regresjonsmodellen. $R^2$ er kvadratet av korrelasjonskoeffisienten: $R^2 = r^2$.

- $R^2 = 1$ (100 %): Modellen forklarer **all** variasjon – alle punkter ligger nøyaktig på linjen.
- $R^2 = 0$ (0 %): Modellen forklarer **ingen** variasjon – $x$ og $y$ har ingen lineær sammenheng.

**Eksempel:** Hvis $r = 0{,}82$, er $R^2 = 0{,}82^2 = 0{,}67$. Det betyr at modellen forklarer 67 % av variasjonen i $y$. De resterende 33 % skyldes andre faktorer eller tilfeldig variasjon.

**Tommelfingerregel:**
- $R^2 > 0{,}7$: God modell
- $R^2 = 0{,}4\text{–}0{,}7$: Moderat modell
- $R^2 < 0{,}4$: Svak modell – andre faktorer spiller stor rolle`,
    },
    {
      id: 'tof1-2-5-example-3',
      type: 'example',
      title: 'Eksempel: Vurdere modellens kvalitet',
      problem: 'En forsker undersøker sammenhengen mellom daglig skjermtid (timer) og søvnkvalitet (skala 1–10). Regresjonsanalysen gir $\\hat{y} = -0{,}6x + 8{,}2$ med $R^2 = 0{,}45$. Tolk resultatene.',
      solution: `**Regresjonslinje:** $\\hat{y} = -0{,}6x + 8{,}2$
- **Stigningstall** $a = -0{,}6$: For hver ekstra time skjermtid synker søvnkvaliteten med 0,6 poeng. Sammenhengen er negativ.
- **Konstantledd** $b = 8{,}2$: Uten skjermtid er forventet søvnkvalitet 8,2 av 10.

**$R^2 = 0{,}45$:** Modellen forklarer **45 %** av variasjonen i søvnkvalitet. Det betyr at skjermtid bidrar til å forklare nesten halvparten av forskjellene i søvnkvalitet.

**De resterende 55 %** skyldes andre faktorer som modellen ikke fanger opp, for eksempel stress, fysisk aktivitet, koffeininntak, soveromsmiljø, søvnvaner med mer.

**Vurdering:** Modellen er moderat ($R^2$ mellom 0,4 og 0,7). Skjermtid er en relevant faktor, men langt fra den eneste forklaringen på søvnkvalitet.`,
    },
    {
      id: 'tof1-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En regresjonsmodell har $R^2 = 0{,}81$. Hva betyr dette?',
        options: [
          { id: 'a', text: 'Korrelasjonskoeffisienten $r$ er 0,81', isCorrect: false },
          { id: 'b', text: 'Modellen forklarer 81 % av variasjonen i den avhengige variabelen', isCorrect: true },
          { id: 'c', text: '81 % av datapunktene ligger nøyaktig på regresjonslinjen', isCorrect: false },
          { id: 'd', text: 'Stigningstallet i regresjonslinjen er 0,81', isCorrect: false },
        ],
        solution: 'Riktig svar er B. $R^2 = 0{,}81$ betyr at regresjonsmodellen forklarer 81 % av variasjonen i den avhengige variabelen. De resterende 19 % skyldes andre faktorer eller tilfeldig variasjon. Merk at $r = \\sqrt{0{,}81} = 0{,}9$, ikke 0,81.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-2-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Korrelasjon** ($r$) måler styrken og retningen av lineær sammenheng mellom to variabler. Verdien ligger mellom $-1$ og $1$.
- **Korrelasjon betyr ikke årsakssammenheng** – bakenforliggende variabler kan forklare tilsynelatende sammenhenger.
- **Lineær regresjon** finner den rette linjen ($\\hat{y} = ax + b$) som best beskriver sammenhengen.
- **Stigningstallet** $a$ forteller hvor mye $y$ endres når $x$ øker med 1.
- **$R^2$** (bestemmelseskoeffisienten) angir hvor stor andel av variasjonen i $y$ som forklares av modellen.
- Vær forsiktig med **ekstrapolering** – å bruke modellen utenfor dataområdet den er basert på er upålitelig.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof1-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En forsker måler sammenhengen mellom gjødslingsmengde (kg per dekar) og avlingsmengde (tonn per dekar) for åtte gårder. Regresjonsanalysen gir $\\hat{y} = 0{,}08x + 2{,}1$ med $r = 0{,}76$.\n\na) Tolk stigningstallet og konstantleddet.\nb) Beregn $R^2$ og vurder modellens kvalitet.\nc) Prediker avlingsmengden for en gård som bruker 50 kg gjødsel per dekar.',
        hints: ['Husk at R² = r². Bruk regresjonslinjen til å sette inn x-verdien for prediksjon.'],
        solution: 'a) Stigningstallet a = 0,08: For hvert ekstra kilo gjødsel per dekar øker forventet avling med 0,08 tonn (80 kg) per dekar. Konstantleddet b = 2,1: Uten gjødsling forventes en avling på 2,1 tonn per dekar.\n\nb) R² = 0,76² = 0,58 (58 %). Modellen forklarer 58 % av variasjonen i avlingsmengde. Det er en moderat modell – gjødsling er en viktig faktor, men andre forhold som nedbør, jordkvalitet og sortsvalg påvirker også avlingen.\n\nc) ŷ = 0,08 · 50 + 2,1 = 4,0 + 2,1 = 6,1 tonn per dekar. En gård som bruker 50 kg gjødsel per dekar kan forventes å produsere ca. 6,1 tonn per dekar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof1-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du leser en avisartikkel med overskriften «Studien beviser: Mer sjokolade gir bedre karakterer!» Artikkelen refererer til en studie som viser en positiv korrelasjon ($r = 0{,}45$) mellom sjokoladeforbruk og skoleresultater.\n\na) Hva er problematisk med avisoverskriften?\nb) Foreslå minst to bakenforliggende variabler som kan forklare sammenhengen.\nc) Hvordan ville du designet en studie for å teste om sjokolade faktisk påvirker skoleprestasjoner?',
        hints: ['Tenk på forskjellen mellom korrelasjon og kausalitet. Hva kan gjøre at noen både spiser mer sjokolade og gjør det bedre på skolen?'],
        solution: 'a) Overskriften er problematisk fordi den bruker ordet «beviser» og antyder en årsakssammenheng. Studien viser bare en korrelasjon, ikke at sjokolade forårsaker bedre karakterer. Korrelasjonen er dessuten moderat (r = 0,45, R² = 0,20), noe som betyr at sjokoladeforbruk bare forklarer 20 % av variasjonen i karakterer.\n\nb) Mulige bakenforliggende variabler:\n- Sosioøkonomisk status: Familier med høyere inntekt kan ha råd til mer sjokolade OG gi barna bedre læringsforhold (rolig lekseplass, privatlærer, bøker).\n- Generelt kosthold: Elever som spiser variert (inkludert sjokolade) har kanskje et generelt bedre kosthold som støtter læring.\n- Trivsel og motivasjon: Elever som trives kan belønne seg selv med sjokolade OG være mer motiverte for skolearbeid.\n\nc) For å teste kausalitet trengs et eksperiment: Tilfeldig dele elever i to grupper – én som får sjokolade daglig og én kontrollgruppe – over en periode, og sammenligne skoleresultatene. Et slikt kontrollert eksperiment kan isolere effekten av sjokolade fra andre faktorer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.6: Regneark og dataverktøy
// ============================================================================

export const CHAPTER_TOF_1_2_6: TextbookChapter = {
  id: 'tof-1-2-6',
  courseId: 'tof-1',
  chapterNumber: '2.6',
  title: 'Regneark og dataverktøy',
  description: 'Bruk av Excel/Google Sheets og Python for dataanalyse.',
  estimatedMinutes: 30,
  competenceGoals: ['bruke digitale verktøy for dataanalyse'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-2-6-intro',
      type: 'text',
      content: `## Regneark og dataverktøy

I de foregående kapitlene har vi beregnet gjennomsnitt, standardavvik og regresjon for hånd. I virkeligheten bruker forskere og analytikere **digitale verktøy** til dette arbeidet. Verktøyene gjør beregningene raskere, mer nøyaktige og muliggjør analyse av store datasett som ville vært umulige å håndtere manuelt.

I dette kapittelet ser vi på to typer verktøy: **regneark** (Excel og Google Sheets) og **programmeringsspråket Python**. Begge brukes mye i forskning, næringsliv og utdanning.`,
    },

    // --- BLOKK 1: Regneark (Excel / Google Sheets) ---
    {
      id: 'tof1-2-6-text-1',
      type: 'text',
      content: `### Regneark: Excel og Google Sheets

Et **regneark** organiserer data i rader og kolonner. Hver celle kan inneholde tall, tekst eller **formler** som utfører beregninger automatisk.

**Viktige funksjoner for dataanalyse:**

| Funksjon | Excel / Google Sheets | Beskrivelse |
|----------|----------------------|-------------|
| Gjennomsnitt | \`=GJENNOMSNITT(A1:A20)\` | Beregner gjennomsnittet av verdiene |
| Median | \`=MEDIAN(A1:A20)\` | Finner medianen |
| Modus | \`=MODUS(A1:A20)\` | Finner den hyppigste verdien |
| Standardavvik | \`=STDAV(A1:A20)\` | Standardavvik for et utvalg |
| Min / Maks | \`=MIN(A1:A20)\` / \`=MAKS(A1:A20)\` | Minste og største verdi |
| Antall | \`=ANTALL(A1:A20)\` | Teller antall celler med tall |
| Korrelasjon | \`=KORRELASJON(A1:A20;B1:B20)\` | Korrelasjonskoeffisient mellom to datasett |

**Tips for gode regneark:**
- Bruk **overskrifter** i første rad for å beskrive kolonnene
- Hold **rådata** urørt i et eget ark – lag beregninger i et annet ark
- Bruk **cellereferanser** i formler, ikke faste tall – da oppdateres beregningene automatisk når data endres
- **Formatér** tall konsekvent (antall desimaler, prosenttegn osv.)`,
    },
    {
      id: 'tof1-2-6-example-1',
      type: 'example',
      title: 'Eksempel: Dataanalyse i regneark',
      problem: 'Du har samlet inn data om antall timer fysisk aktivitet per uke for 10 elever: 2, 5, 3, 8, 4, 6, 1, 7, 5, 4. Beskriv hvordan du ville satt opp et regneark for å analysere disse dataene.',
      solution: `**Oppsett i regnearket:**

**Kolonne A** (overskrift: «Elev»): 1, 2, 3, ..., 10
**Kolonne B** (overskrift: «Timer trening»): 2, 5, 3, 8, 4, 6, 1, 7, 5, 4

**Beregninger i kolonne D:**
- D1: «Gjennomsnitt» → D2: \`=GJENNOMSNITT(B2:B11)\` → gir 4,5
- D3: «Median» → D4: \`=MEDIAN(B2:B11)\` → gir 4,5
- D5: «Standardavvik» → D6: \`=STDAV(B2:B11)\` → gir ca. 2,12
- D7: «Minimum» → D8: \`=MIN(B2:B11)\` → gir 1
- D9: «Maksimum» → D10: \`=MAKS(B2:B11)\` → gir 8

**Diagram:** Marker kolonne B og sett inn et **histogram** eller **søylediagram** for å visualisere fordelingen. Gjennomsnitt og median er like (4,5), noe som tyder på en symmetrisk fordeling.`,
    },
    {
      id: 'tof1-2-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-6-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Du har temperaturmålinger i cellene A1 til A30 i et regneark. Hvilken formel beregner gjennomsnittstemperaturen?',
        options: [
          { id: 'a', text: '=GJENNOMSNITT(A1:A30)', isCorrect: true },
          { id: 'b', text: '=SUMMER(A1:A30)', isCorrect: false },
          { id: 'c', text: '=MEDIAN(A1:A30)', isCorrect: false },
          { id: 'd', text: '=STDAV(A1:A30)', isCorrect: false },
        ],
        solution: 'Riktig svar er A. Funksjonen GJENNOMSNITT beregner det aritmetiske gjennomsnittet av verdiene i det angitte celleområdet. SUMMER gir bare summen uten å dele, MEDIAN gir midtverdien, og STDAV gir standardavviket.',
      },
    },

    // --- BLOKK 2: Diagrammer i regneark ---
    {
      id: 'tof1-2-6-text-2',
      type: 'text',
      content: `### Diagrammer i regneark

Regneark har innebygde verktøy for å lage diagrammer direkte fra data. Slik gjør du det:

**Steg for å lage et diagram i Google Sheets / Excel:**
1. **Marker dataene** du vil visualisere (inkluder overskriftene)
2. Velg **Sett inn → Diagram** (eller tilsvarende meny)
3. Velg **diagramtype** som passer dataene (søylediagram, linjediagram osv.)
4. **Tilpass** diagrammet: legg til aksetitler, juster farger, fjern unødvendig pynt

**Regresjon i regneark:**
For å lage en regresjonslinje i et punktdiagram:
1. Lag et **punktdiagram** (scatter plot) med de to variablene
2. Høyreklikk på datapunktene og velg **Legg til trendlinje**
3. Velg **Lineær** trendlinje
4. Hak av for å **vise ligningen** og **$R^2$-verdien** i diagrammet

Regnearket beregner automatisk regresjonslinjen og viser både ligningen ($y = ax + b$) og $R^2$ i diagrammet.`,
    },
    {
      id: 'tof1-2-6-example-2',
      type: 'example',
      title: 'Eksempel: Trendlinje i regneark',
      problem: 'Du har plottet sammenhengen mellom temperatur (°C) og antall solgte liter brus i en kiosk i et punktdiagram i Google Sheets. Trendlinjen viser ligningen $y = 12{,}3x - 45$ med $R^2 = 0{,}73$. Tolk resultatet.',
      solution: `**Regresjonslinjen** $y = 12{,}3x - 45$:
- **Stigningstall** $a = 12{,}3$: For hver grad temperaturen stiger, selges det i gjennomsnitt 12,3 flere liter brus.
- **Konstantledd** $b = -45$: Matematisk gir modellen negativt salg ved 0 °C, men dette er en ekstrapolering utenfor dataområdet og har ingen praktisk betydning.

**$R^2 = 0{,}73$:** Temperaturen forklarer **73 %** av variasjonen i brusssalget. Det er en god modell – temperatur er den viktigste faktoren, men 27 % av variasjonen skyldes andre forhold (f.eks. ukedag, arrangementer i nærheten, regnvær).

**Konklusjon:** Regnearket har gjort hele regresjonsanalysen automatisk – du trengte bare å lage et punktdiagram og legge til en trendlinje.`,
    },
    {
      id: 'tof1-2-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-6-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den riktige fremgangsmåten for å lage en regresjonslinje i et regneark?',
        options: [
          { id: 'a', text: 'Lag et sektordiagram og velg «Legg til trendlinje»', isCorrect: false },
          { id: 'b', text: 'Lag et punktdiagram (scatter plot) og legg til en lineær trendlinje', isCorrect: true },
          { id: 'c', text: 'Bruk funksjonen GJENNOMSNITT på begge variablene og tegn linjen manuelt', isCorrect: false },
          { id: 'd', text: 'Lag et histogram og beregn stigningstallet fra frekvensene', isCorrect: false },
        ],
        solution: 'Riktig svar er B. For regresjonsanalyse i regneark lager du først et punktdiagram (scatter plot) med de to variablene. Deretter legger du til en lineær trendlinje, og velger å vise ligningen og R²-verdien. Punktdiagrammet er den eneste diagramtypen der trendlinjer gir mening.',
      },
    },

    // --- BLOKK 3: Python for dataanalyse ---
    {
      id: 'tof1-2-6-text-3',
      type: 'text',
      content: `### Python for dataanalyse

**Python** er et programmeringsspråk som er svært populært innen dataanalyse og forskning. Med biblioteker som \`pandas\`, \`numpy\` og \`matplotlib\` kan du analysere og visualisere data effektivt.

**Fordeler med Python fremfor regneark:**
- Håndterer **svært store datasett** (millioner av rader)
- **Reproduserbar analyse** – koden dokumenterer nøyaktig hva du har gjort
- **Automatisering** – kjør samme analyse på nye data automatisk
- Kraftigere **statistiske verktøy** og muligheter for maskinlæring

**Grunnleggende eksempel med Python:**

\`\`\`python
import numpy as np

# Data
data = [2, 5, 3, 8, 4, 6, 1, 7, 5, 4]

# Beregninger
gjennomsnitt = np.mean(data)
median = np.median(data)
standardavvik = np.std(data, ddof=1)  # ddof=1 for utvalg

print(f"Gjennomsnitt: {gjennomsnitt}")
print(f"Median: {median}")
print(f"Standardavvik: {standardavvik:.2f}")
\`\`\`

Dette gir nøyaktig de samme resultatene som regnearket, men i en kode som enkelt kan gjenbrukes og deles.`,
    },
    {
      id: 'tof1-2-6-example-3',
      type: 'example',
      title: 'Eksempel: Regresjon i Python',
      problem: 'Skriv Python-kode som utfører en enkel lineær regresjonsanalyse og lager et plott med regresjonslinje.',
      solution: `\`\`\`python
import numpy as np
import matplotlib.pyplot as plt

# Data: studietid og eksamenspoeng
studietid = [2, 4, 5, 7, 8, 10, 12, 14]
poeng = [45, 55, 52, 68, 72, 78, 84, 90]

# Beregn regresjonslinje
a, b = np.polyfit(studietid, poeng, 1)
r = np.corrcoef(studietid, poeng)[0, 1]

print(f"Regresjonslinje: y = {a:.1f}x + {b:.1f}")
print(f"Korrelasjon r = {r:.2f}")
print(f"R² = {r**2:.2f}")

# Plott
plt.scatter(studietid, poeng, color='blue', label='Datapunkter')
x_linje = np.linspace(0, 16, 100)
y_linje = a * x_linje + b
plt.plot(x_linje, y_linje, color='red', label=f'y = {a:.1f}x + {b:.1f}')
plt.xlabel('Studietid (timer/uke)')
plt.ylabel('Eksamenspoeng')
plt.title('Sammenheng mellom studietid og eksamensresultat')
plt.legend()
plt.grid(True)
plt.show()
\`\`\`

Koden beregner regresjonslinjen, korrelasjon og $R^2$, og lager et scatter-plott med en rød regresjonslinje lagt over datapunktene.`,
    },
    {
      id: 'tof1-2-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-6-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken Python-funksjon brukes til å beregne gjennomsnittet av en tallrekke med NumPy?',
        options: [
          { id: 'a', text: 'np.average(data) eller np.sum(data)', isCorrect: false },
          { id: 'b', text: 'np.median(data)', isCorrect: false },
          { id: 'c', text: 'np.mean(data)', isCorrect: true },
          { id: 'd', text: 'np.std(data)', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Funksjonen `np.mean(data)` beregner det aritmetiske gjennomsnittet. `np.median` gir medianen, `np.std` gir standardavviket, og selv om `np.average` teknisk sett også kan gi gjennomsnitt, er `np.mean` den standard funksjonen for dette formålet.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-2-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Regneark** (Excel, Google Sheets) er brukervennlige verktøy for dataanalyse med innebygde funksjoner for gjennomsnitt, median, standardavvik og korrelasjon.
- Bruk **cellereferanser** i formler slik at beregningene oppdateres automatisk.
- Regneark kan lage **diagrammer og trendlinjer** direkte fra data – inkludert regresjonslinje med $R^2$-verdi.
- **Python** med biblioteker som NumPy og Matplotlib gir kraftigere analysemuligheter, spesielt for store datasett.
- Python-kode er **reproduserbar** – du kan enkelt gjenta analysen eller dele den med andre.
- Velg verktøy basert på behov: regneark for raske analyser og små datasett, Python for komplekse analyser og automatisering.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof1-2-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-6-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Du har følgende data om gjennomsnittstemperatur (°C) og strømforbruk (kWh) per måned for et hus:\n\nTemperatur: -5, -2, 3, 8, 14, 18, 20, 18, 13, 7, 1, -3\nStrømforbruk: 3200, 2900, 2400, 1800, 1200, 900, 800, 950, 1300, 1900, 2500, 3100\n\nBeskriv steg for steg hvordan du ville analysert denne sammenhengen i et regneark. Hvilke funksjoner ville du brukt, og hvilken type diagram ville du laget?',
        hints: ['Tenk på hvilke statistiske mål og diagramtyper som er relevante for å vise sammenhengen mellom to variabler.'],
        solution: 'Steg 1: Legg dataene inn i regnearket med temperatur i kolonne A (A2:A13) og strømforbruk i kolonne B (B2:B13), med overskrifter i rad 1.\n\nSteg 2: Beregn grunnleggende statistikk:\n- =GJENNOMSNITT(A2:A13) for gjennomsnittstemperatur (ca. 7,7 °C)\n- =GJENNOMSNITT(B2:B13) for gjennomsnittlig strømforbruk (ca. 1913 kWh)\n- =KORRELASJON(A2:A13;B2:B13) for korrelasjonskoeffisienten (forventer sterk negativ r, ca. -0,98)\n\nSteg 3: Lag et punktdiagram (scatter plot) med temperatur på x-aksen og strømforbruk på y-aksen.\n\nSteg 4: Legg til en lineær trendlinje med ligningen og R²-verdien vist.\n\nSteg 5: Tolkning: Sterk negativ korrelasjon – høyere temperatur gir lavere strømforbruk (mindre oppvarming). R² vil være høy, noe som viser at temperatur er en god forklaring på variasjon i strømforbruk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof1-2-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-6-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign fordeler og ulemper med regneark (f.eks. Google Sheets) og Python for dataanalyse. I hvilke situasjoner ville du valgt hvert verktøy? Gi konkrete eksempler.',
        hints: ['Tenk på faktorer som brukervennlighet, datamengde, reproduserbarhet, samarbeid og tilgjengelige analysemetoder.'],
        solution: 'Regneark (Google Sheets / Excel):\nFordeler: Brukervennlig, ingen programmeringskunnskap nødvendig, visuelt grensesnitt, enkelt samarbeid i sanntid (Google Sheets), rask å komme i gang med.\nUlemper: Begrensninger ved store datasett (over ca. 100 000 rader), vanskelig å reprodusere analyser nøyaktig, formler kan bli uoversiktlige for komplekse beregninger.\nBest egnet for: Enkel dataanalyse med under 10 000 rader, raske beregninger, presentasjoner til ikke-tekniske mottakere.\n\nPython:\nFordeler: Håndterer millioner av datapunkter, fullstendig reproduserbar (koden dokumenterer alt), kraftige statistiske verktøy, kan automatisere gjentakende oppgaver, støtter maskinlæring.\nUlemper: Krever programmeringskunnskap, brattere læringskurve, krever installasjon av programvare og biblioteker.\nBest egnet for: Store datasett, komplekse analyser, vitenskapelig forskning, automatiserte rapporter, maskinlæring.\n\nEksempler:\n- Analysere en spørreundersøkelse med 50 svar → regneark\n- Analysere trafikkdata med 5 millioner rader → Python\n- Lage et raskt diagram til en presentasjon → regneark\n- Gjenta samme analyse på nye data hver måned → Python (automatisering)',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2.7: Kritisk vurdering av data
// ============================================================================

export const CHAPTER_TOF_1_2_7: TextbookChapter = {
  id: 'tof-1-2-7',
  courseId: 'tof-1',
  chapterNumber: '2.7',
  title: 'Kritisk vurdering av data',
  description: 'Kildekritikk, feilkilder, bias og manipulering av statistikk.',
  estimatedMinutes: 25,
  competenceGoals: ['vurdere data og resultater kritisk'],
  content: [
    // --- Introduksjon ---
    {
      id: 'tof1-2-7-intro',
      type: 'text',
      content: `## Kritisk vurdering av data

I de foregående kapitlene har vi lært å samle inn, analysere og presentere data. Men det er like viktig å kunne **vurdere data kritisk** – både egne og andres. Statistikk kan brukes til å informere og opplyse, men også til å villede og manipulere.

Mark Twain sa det slik: *«Det finnes tre typer løgner: løgner, forbannede løgner og statistikk.»* I dette kapittelet lærer du å gjennomskue dårlig bruk av data og bli en kritisk forbruker av statistikk.`,
    },

    // --- BLOKK 1: Kildekritikk ---
    {
      id: 'tof1-2-7-def-1',
      type: 'definition',
      title: 'Kildekritikk i dataanalyse',
      content: `**Kildekritikk** innebærer å vurdere påliteligheten og gyldigheten av data og statistikk. Når du leser en påstand basert på data, bør du stille følgende spørsmål:

1. **Hvem** har samlet inn dataene? Har de en agenda eller interessekonflikt?
2. **Hvordan** ble dataene samlet inn? Er metoden solid og transparent?
3. **Hvem** er utvalget? Er det representativt for populasjonen?
4. **Hvor stort** er utvalget? Små utvalg gir upålitelige resultater.
5. **Når** ble dataene samlet inn? Er de fortsatt relevante?
6. **Er resultatene publisert** i en fagfellevurdert kilde?

Pålitelige data kjennetegnes av: transparent metode, tilstrekkelig utvalgsstørrelse, representativt utvalg og uavhengig finansiering.`,
    },
    {
      id: 'tof1-2-7-example-1',
      type: 'example',
      title: 'Eksempel: Kildekritikk i praksis',
      problem: 'En tannkremreklame hevder: «9 av 10 tannleger anbefaler Tannkrem X.» Vurder denne påstanden kritisk.',
      solution: `**Kritiske spørsmål:**

1. **Hvem** utførte undersøkelsen? Trolig tannkremprodusentens eget markedsavdeling – de har en klar økonomisk interesse i resultatet.

2. **Hvordan** ble spørsmålet stilt? Kanskje tannlegene ble spurt «Anbefaler du tannkrem med fluor?» og ikke spesifikt om merket. Eller de fikk en liste der de kunne anbefale *flere* merker.

3. **Hvem** ble spurt? Kanskje bare 10 tannleger ble spurt, og de fikk betalt av produsenten. Med et så lite utvalg kan resultatet skyldes tilfeldigheter.

4. **Utvalgsmetode:** Var tannlegene tilfeldig valgt, eller var de håndplukket?

5. **Hva betyr «anbefaler»?** Kanskje de anbefaler tannkremen som «god nok», ikke nødvendigvis som den beste.

**Konklusjon:** Påstanden er villedende. Den gir inntrykk av sterk faglig støtte, men uten å vite detaljene om metoden, er den nesten meningsløs som bevis.`,
    },
    {
      id: 'tof1-2-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-7-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'En nettside som selger kosttilskudd publiserer en studie som viser at produktet deres forbedrer hukommelsen. Hva bør du være mest oppmerksom på?',
        options: [
          { id: 'a', text: 'Om studien brukte avanserte statistiske metoder', isCorrect: false },
          { id: 'b', text: 'Om studien er finansiert av selskapet selv, noe som kan gi interessekonflikt', isCorrect: true },
          { id: 'c', text: 'Om studien er publisert på en flott nettside', isCorrect: false },
          { id: 'd', text: 'Om studien nevner kjente forskere', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Når et selskap finansierer forskning på eget produkt, har de en sterk økonomisk interesse i positive resultater. Dette kan påvirke studiedesign, utvalg og tolkning av data. Uavhengig, fagfellevurdert forskning er langt mer pålitelig enn industri-finansierte studier.',
      },
    },

    // --- BLOKK 2: Bias og feilkilder ---
    {
      id: 'tof1-2-7-def-2',
      type: 'definition',
      title: 'Bias (skjevhet)',
      content: `**Bias** er en systematisk skjevhet som fører til at resultatene avviker fra virkeligheten. Det finnes mange typer bias:

**Utvalgsbias:** Utvalget er ikke representativt for populasjonen. Eksempel: En undersøkelse om treningsvaner der du bare spør folk på treningssenteret – de er allerede en selektert gruppe.

**Bekreftelsebias (confirmation bias):** Forskeren tolker data slik at de støtter hypotesen sin, og overser data som motsier den.

**Overlevelsebias (survivorship bias):** Vi ser bare på «vinnerne» og overser de som falt fra. Eksempel: «Alle vellykkede gründere droppet ut av skolen» – vi ser ikke de tusenvis som droppet ut og mislyktes.

**Responsebias:** Respondenter svarer det de tror er sosialt ønskelig. Eksempel: Folk underrapporterer alkoholforbruk og overrapporterer treningsaktivitet.

**Publiseringsbias:** Studier med positive funn blir publisert, mens studier uten funn «forsvinner i skuffen». Dette gir et skjevt bilde av kunnskapsgrunnlaget.`,
    },
    {
      id: 'tof1-2-7-example-2',
      type: 'example',
      title: 'Eksempel: Overlevelsebias',
      problem: 'Under andre verdenskrig analyserte forskere hvor på flyene det var flest kulehull etter at de kom tilbake fra oppdrag. De foreslo å forsterke disse områdene. Statistikeren Abraham Wald argumenterte for det motsatte. Forklar hvorfor.',
      solution: `**Overlevelsebias i praksis:**

Forskerne så på flyene som **overlevde** og kom tilbake til basen. Kulehullene på disse flyene viste hvor flyene *tålte* å bli truffet – de overlevde tross treffene.

**Walds innsikt:** Områdene *uten* kulehull på de overlevende flyene var nettopp der de flyene som **ikke kom tilbake** sannsynligvis ble truffet. Fly som ble truffet i motor, cockpit eller halefinne styrtet og kom aldri tilbake for å bli undersøkt.

**Løsning:** Forsterk områdene uten kulehull på de returnerte flyene – det er der flyene er mest sårbare.

**Lærdom:** Overlevelsebias oppstår når vi bare analyserer data fra «overlevere» og glemmer å tenke på de som falt fra. I forskning: vi ser bare publiserte studier, ikke de mislykkede. I business: vi hører om suksessfulle startups, ikke de tusenvis som gikk konkurs.`,
    },
    {
      id: 'tof1-2-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-7-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En nettavis publiserer en undersøkelse om politiske holdninger basert på svar fra leserne. 10 000 personer deltok. Hva er det viktigste problemet med denne undersøkelsen?',
        options: [
          { id: 'a', text: 'Utvalget er for lite – 10 000 er ikke nok', isCorrect: false },
          { id: 'b', text: 'Utvalgsbias – leserne av avisen er ikke representative for hele befolkningen', isCorrect: true },
          { id: 'c', text: 'Undersøkelsen burde vært gjort muntlig i stedet for skriftlig', isCorrect: false },
          { id: 'd', text: 'Politiske holdninger kan ikke måles med undersøkelser', isCorrect: false },
        ],
        solution: 'Riktig svar er B. Selv om 10 000 er et stort utvalg, er det et **selvselektert utvalg** – det er bare personer som leser denne avisen og som velger å delta. Leserne av en bestemt avis har ofte lignende politiske holdninger, og de som velger å svare kan ha sterkere meninger enn dem som ikke gidder. Resultatet kan ikke generaliseres til hele befolkningen.',
      },
    },

    // --- BLOKK 3: Manipulering av statistikk ---
    {
      id: 'tof1-2-7-text-1',
      type: 'text',
      content: `### Vanlige måter å villede med statistikk

Statistikk kan presenteres på villedende måter, bevisst eller ubevisst:

**1. Avkuttet $y$-akse:** Starter ikke på 0, noe som overdriver forskjeller (vi så dette i kapittel 2.3).

**2. Kirsebærplukking (cherry-picking):** Velge ut bare de dataene som støtter konklusjonen, og ignorere resten. Eksempel: Vise at kriminaliteten økte *i fjor* uten å nevne at den har sunket de siste 20 årene.

**3. Villedende gjennomsnitt:** Bruke gjennomsnitt i stedet for median når dataene har ekstremverdier. Eksempel: «Gjennomsnittlig inntekt i nabolaget er 2 millioner kr» – men det er fordi én milliardær trekker opp snittet.

**4. Relativ vs. absolutt risiko:** «Ny medisin dobler risikoen for bivirkning!» kan bety at risikoen gikk fra 0,001 % til 0,002 % – en dobling, men fortsatt ubetydelig i absolutte tall.

**5. Korrelasjon som kausalitet:** Påstå at en sammenheng beviser at A forårsaker B, uten å ta hensyn til bakenforliggende variabler.

**6. Manglende kontekst:** Presentere tall uten sammenligningsgrunnlag. «1000 personer rammet av sykdom X» – er det mye eller lite? Av 100 000 eller av 5 millioner?`,
    },
    {
      id: 'tof1-2-7-example-3',
      type: 'example',
      title: 'Eksempel: Kirsebærplukking med data',
      problem: 'En politiker sier: «Arbeidsledigheten har økt med 15 % det siste året – dette viser at politikken har feilet.» Arbeidsledigheten var 3,4 % for et år siden og er nå 3,9 %. Vurder påstanden kritisk.',
      solution: `**Teknisk sett korrekt:** Arbeidsledigheten økte fra 3,4 % til 3,9 %. Økningen på 0,5 prosentpoeng tilsvarer en relativ økning på $\\frac{0{,}5}{3{,}4} \\approx 0{,}147 = 14{,}7 \\% \\approx 15 \\%$. Så «15 % økning» er riktig.

**Men det er villedende fordi:**

1. **Relativ vs. absolutt endring:** 15 % høres dramatisk ut, men i absolutte tall gikk ledigheten fra 3,4 % til 3,9 % – en økning på bare 0,5 prosentpoeng. Begge tallene er fortsatt historisk lave.

2. **Manglende kontekst:** Hva er trenden over tid? Kanskje ledigheten sank fra 8 % til 3,4 % over de foregående 5 årene. En liten økning kan være normal variasjon.

3. **Kirsebærplukking:** Politikeren velger akkurat den tidsperioden som støtter argumentet sitt.

**Lærdom:** Se alltid på den langsiktige trenden og absolutte tall, ikke bare relative endringer.`,
    },
    {
      id: 'tof1-2-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-7-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En overskrift lyder: «Ny studie: Risikoen for hjertesykdom tredobles med bruk av Middel Y!» I studiebeskrivelsen fremgår det at risikoen økte fra 1 av 30 000 til 3 av 30 000. Hva er den beste vurderingen?',
        options: [
          { id: 'a', text: 'Overskriften er korrekt og gir et fullstendig bilde av risikoen', isCorrect: false },
          { id: 'b', text: 'Tredobling er en alvorlig økning som bør tas på største alvor', isCorrect: false },
          { id: 'c', text: 'Overskriften er teknisk korrekt, men villedende fordi den absolutte risikoen fortsatt er svært lav', isCorrect: true },
          { id: 'd', text: 'Overskriften er feil fordi 3 av 30 000 ikke er tre ganger 1 av 30 000', isCorrect: false },
        ],
        solution: 'Riktig svar er C. Risikoen gikk fra 0,0033 % til 0,01 % – teknisk sett en tredobling (relativ risiko). Men den absolutte risikoen er fortsatt svært lav (0,01 %). Overskriften bruker den relative risikoen for å skape frykt, uten å nevne at den absolutte risikoen forblir ubetydelig. En ærlig fremstilling ville oppgitt både relativ og absolutt risikoendring.',
      },
    },

    // --- Oppsummering ---
    {
      id: 'tof1-2-7-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Kildekritikk** er avgjørende: Vurder hvem som står bak, metoden, utvalgets størrelse og representativitet, og om det finnes interessekonflikter.
- **Bias** (systematisk skjevhet) kan oppstå i mange former: utvalgsbias, bekreftelsebias, overlevelsebias, responsebias og publiseringsbias.
- Statistikk kan **villede** gjennom avkuttede akser, kirsebærplukking, villedende gjennomsnitt, forkjøp av relativ over absolutt risiko, og forveksling av korrelasjon med kausalitet.
- Vurder alltid **konteksten** – et tall alene er meningsløst uten sammenligning.
- Spør deg selv: Hvem tjener på at jeg tror dette? Finnes det alternative forklaringer? Er utvalget representativt?
- Kritisk tenkning er en av de viktigste ferdighetene du lærer i teknologi og forskningslære.`,
    },

    // --- Samleoppgaver ---
    {
      id: 'tof1-2-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-7-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En forskningsartikkel konkluderer med at «barn som spiser frokost får bedre karakterer». Studien er basert på data fra 5000 elever.\n\na) Hvilken type bias kan påvirke dette resultatet?\nb) Foreslå en bakenforliggende variabel som kan forklare sammenhengen.\nc) Hvorfor kan vi ikke uten videre konkludere med at frokost forårsaker bedre karakterer?',
        hints: ['Tenk på hva slags familier som sørger for at barna spiser frokost, og hvilke andre faktorer som kan spille inn.'],
        solution: 'a) Responsebias kan spille inn – elever kan overrapportere frokostspising fordi de vet det er «riktig svar». Utvalgsbias kan også forekomme hvis deltakelsen i studien var frivillig.\n\nb) Sosioøkonomisk bakgrunn er en sentral bakenforliggende variabel. Familier med bedre økonomi og mer ressurser har trolig bedre tid og råd til å sørge for frokost, og disse familiene har også ofte mer stabile hjemmeforhold, bedre tilgang til leksehjelp og mer oppfølging av skolearbeid – alt som bidrar til bedre karakterer.\n\nc) Studien viser korrelasjon, ikke kausalitet. Vi kan ikke vite om det er frokosten i seg selv som gir bedre karakterer, eller om begge deler er resultater av en tredje faktor. For å teste kausalitet trengs et kontrollert eksperiment der elever tilfeldig deles i grupper med og uten frokost. Et slikt eksperiment ville ha etiske utfordringer (kan vi nekte barn frokost?).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tof1-2-7-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tof1-2-7-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Finn en nyhetssak eller en reklame som bruker statistikk til å støtte en påstand. Analysér påstanden kritisk ved å:\n\na) Identifisere hvilken statistikk som presenteres og hvordan den brukes.\nb) Vurdere minst to mulige feilkilder eller bias i dataene.\nc) Forklare hvordan statistikken kunne vært presentert på en mer ærlig og fullstendig måte.',
        hints: ['Se etter aviser, reklamer på TV/nett, eller innlegg i sosiale medier. Tenk på de vanlige triksene: avkuttet akse, kirsebærplukking, relativ vs. absolutt risiko, korrelasjon som kausalitet.'],
        solution: 'Svar vil variere. Et godt svar bør:\n\n1. Presentere den konkrete påstanden og kilden den er hentet fra.\n\n2. Identifisere minst to kritiske punkter, for eksempel:\n- Er det utvalgsbias? Hvem ble spurt/undersøkt?\n- Er det kirsebærplukking? Er bare en gunstig tidsperiode valgt?\n- Forveksles korrelasjon med kausalitet?\n- Brukes relativ risiko for å overdrive?\n- Mangler kontekst eller sammenligningsgrunnlag?\n- Er avsenderen partisk (f.eks. industri-finansiert forskning)?\n\n3. Foreslå en mer ærlig fremstilling, for eksempel:\n- Oppgi både relativ og absolutt endring\n- Vise den langsiktige trenden, ikke bare siste år\n- Inkludere konfidensintervall\n- Være åpen om utvalgets begrensninger\n- Skille mellom korrelasjon og årsak i konklusjonen',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for del 2 (kapittel 2.1–2.7)
// ============================================================================

export const TOF_1_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TOF_1_2_1,
  CHAPTER_TOF_1_2_2,
  CHAPTER_TOF_1_2_3,
  CHAPTER_TOF_1_2_4,
  CHAPTER_TOF_1_2_5,
  CHAPTER_TOF_1_2_6,
  CHAPTER_TOF_1_2_7,
];
