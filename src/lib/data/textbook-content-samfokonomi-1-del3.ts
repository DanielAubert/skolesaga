/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnsøkonomi 1 (VG2 programfag) - Del 3
 * Seksjon 3: Nasjonaløkonomi (3.1–3.5)
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 3.1: Bruttonasjonalprodukt (BNP)
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_3_1: TextbookChapter = {
  id: 'samfokonomi-1-3-1',
  courseId: 'samfokonomi-1',
  chapterNumber: '3.1',
  title: 'Bruttonasjonalprodukt (BNP)',
  description: 'Hva er BNP, hvordan måles det, og hva er forskjellen mellom nominelt og reelt BNP?',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte årsaker til økonomisk vekst og reflektere over bruttonasjonalproduktet som mål for verdiskaping',
  ],
  content: [
    {
      id: 'soe-3-1-intro',
      type: 'text',
      content: `# Bruttonasjonalprodukt (BNP)

Hvordan vet vi om det går bra eller dårlig med økonomien i et land? En av de viktigste målestørrelsene er **bruttonasjonalprodukt** (BNP). BNP er et mål på den samlede verdiskapingen i et land i løpet av en bestemt periode, vanligvis ett år.

Når politikere diskuterer «økonomisk vekst», er det som regel vekst i BNP de snakker om. Når vi sammenligner land, bruker vi gjerne BNP per innbygger. Og når økonomer prøver å forstå konjunktursvingninger, er BNP det sentrale målet.

I dette kapittelet skal vi se på hva BNP egentlig er, hvordan det måles, og hva forskjellen mellom nominelt og reelt BNP innebærer.`,
    },
    {
      id: 'soe-3-1-def-1',
      type: 'definition',
      title: 'Bruttonasjonalprodukt (BNP)',
      content: `**Bruttonasjonalprodukt (BNP)** er den samlede markedsverdien av alle ferdige varer og tjenester som produseres innenfor et lands grenser i en gitt periode.

Nøkkelord i definisjonen:
- **Markedsverdi:** Vi bruker priser for å veie sammen ulike varer og tjenester
- **Ferdige varer og tjenester:** Vi teller bare sluttprodukter, ikke mellomprodukter (for å unngå dobbelttelling)
- **Innenfor et lands grenser:** Det er produksjon i Norge som teller, uavhengig av hvem som eier bedriften
- **I en gitt periode:** BNP måles over tid, vanligvis ett år eller ett kvartal`,
    },
    {
      id: 'soe-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Unngå dobbelttelling',
      problem: 'En bonde selger hvete til en møller for 5 kr. Mølleren lager mel og selger det til en baker for 12 kr. Bakeren lager brød og selger det til en forbruker for 25 kr. Hva er bidraget til BNP?',
      solution: `**Løsning:**

BNP teller bare verdien av det ferdige produktet (brødet) for å unngå dobbelttelling.

- Bonden selger hvete: 5 kr
- Mølleren selger mel: 12 kr
- Bakeren selger brød: 25 kr

Hvis vi la sammen alle salgene, ville vi fått 5 + 12 + 25 = 42 kr. Men da teller vi hveten tre ganger og melet to ganger.

**Riktig BNP-bidrag = 25 kr** (verdien av sluttproduktet)

Alternativt kan vi summere verdiskapingen (bearbeidingsverdien) i hvert ledd:
- Bonden: 5 kr
- Mølleren: 12 - 5 = 7 kr
- Bakeren: 25 - 12 = 13 kr
- **Sum verdiskaping = 5 + 7 + 13 = 25 kr**

Begge metodene gir samme svar.`,
    },
    {
      id: 'soe-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-3-1-ex-1',
        number: '3.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er bruttonasjonalprodukt (BNP)?',
        multipleChoiceOptions: [
          'Den samlede markedsverdien av alle ferdige varer og tjenester produsert innenfor et lands grenser i en gitt periode',
          'Den samlede verdien av alt som selges i et land',
          'Verdien av all eksport minus import',
          'Summen av alle bedrifters omsetning i et land',
        ],
        hints: ['Tenk på hvilke ord som er viktige i definisjonen: markedsverdi, ferdige varer, innenfor et lands grenser, gitt periode'],
        solution: 'BNP er den samlede markedsverdien av alle ferdige varer og tjenester produsert innenfor et lands grenser i en gitt periode. Vi teller bare sluttprodukter for å unngå dobbelttelling, og vi måler produksjon innenfor grensene (ikke eierskap).',
      },
    },
    {
      id: 'soe-3-1-def-2',
      type: 'definition',
      title: 'Tre metoder for å måle BNP',
      content: `Det finnes tre likeverdige metoder for å beregne BNP, og alle skal gi samme resultat:

**1. Produksjonsmetoden (verdiskapingsmetoden):**
Summerer bearbeidingsverdien (verdiskapingen) i alle produksjonsledd i alle næringer. Bearbeidingsverdi = Produksjonsverdi minus vareinnsats.

**2. Utgiftsmetoden (anvendelsesmetoden):**
Summerer alle utgifter til ferdige varer og tjenester: Konsum (C) + Investering (I) + Offentlige utgifter (G) + Nettoeksport (NX).

**3. Inntektsmetoden:**
Summerer alle inntekter opptjent i produksjonen: Lønn + Driftsresultat + Avgifter minus subsidier.

Alle tre metodene gir det samme BNP, fordi det som produseres (produksjonsmetoden) enten brukes til konsum, investering eller eksport (utgiftsmetoden), og verdiskapingen fordeles som inntekt til arbeidstakere og kapitaleiere (inntektsmetoden).`,
    },
    {
      id: 'soe-3-1-example-2',
      type: 'example',
      title: 'Eksempel: Utgiftsmetoden',
      problem: 'Et lite land har følgende tall for ett år (i milliarder kr): Privat konsum: 200, Bruttoinvesteringer: 80, Offentlig konsum: 120, Eksport: 150, Import: 130. Beregn BNP med utgiftsmetoden.',
      solution: `**Løsning:**

Utgiftsmetoden: BNP = C + I + G + NX

der NX = Eksport - Import (nettoeksport)

**BNP = 200 + 80 + 120 + (150 - 130)**
**BNP = 200 + 80 + 120 + 20**
**BNP = 420 milliarder kr**

Forklaring av komponentene:
- C (privat konsum) = 200 mrd. kr: Husholdningers forbruk
- I (bruttoinvesteringer) = 80 mrd. kr: Bedrifters kjøp av maskiner, utstyr, bygninger
- G (offentlig konsum) = 120 mrd. kr: Statens utgifter til varer og tjenester
- NX (nettoeksport) = 150 - 130 = 20 mrd. kr: Handelsoverskudd`,
    },
    {
      id: 'soe-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-3-1-ex-2',
        number: '3.1.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et land har følgende tall for ett år (i milliarder kr): Privat konsum: 500, Bruttoinvesteringer: 200, Offentlig konsum: 300, Eksport: 350, Import: 400. Beregn BNP med utgiftsmetoden. Har landet et handelsoverskudd eller handelsunderskudd?',
        hints: [
          'BNP = C + I + G + (Eksport - Import)',
          'Handelsoverskudd betyr at eksport er større enn import',
        ],
        solution: 'BNP = C + I + G + NX = 500 + 200 + 300 + (350 - 400) = 500 + 200 + 300 + (-50) = 950 milliarder kr. Landet har et handelsunderskudd på 50 milliarder kr fordi importen (400) er høyere enn eksporten (350). Nettoeksporten er negativ (-50), noe som trekker BNP ned.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-3-1-def-3',
      type: 'definition',
      title: 'Nominelt og reelt BNP',
      content: `**Nominelt BNP** måler verdien av varer og tjenester i løpende priser (årets priser). Nominelt BNP kan stige både fordi vi produserer mer og fordi prisene øker (inflasjon).

**Reelt BNP** måler verdien av varer og tjenester i faste priser (basisårets priser). Reelt BNP justerer for prisstigning og viser derfor den faktiske endringen i produksjonsvolum.

**BNP-deflator** er forholdet mellom nominelt og reelt BNP:

$$\\text{BNP-deflator} = \\frac{\\text{Nominelt BNP}}{\\text{Reelt BNP}} \\times 100$$

$$\\text{Reelt BNP} = \\frac{\\text{Nominelt BNP}}{\\text{BNP-deflator}} \\times 100$$

**Hvorfor er dette viktig?** Hvis nominelt BNP stiger 5 % og prisene stiger 3 %, er den reelle veksten bare 2 %. Det er den reelle veksten som viser om vi faktisk produserer mer.`,
    },
    {
      id: 'soe-3-1-example-3',
      type: 'example',
      title: 'Eksempel: Nominelt vs. reelt BNP',
      problem: 'Et land produserer bare ett produkt: fisk. I år 1 produseres 100 tonn til 50 kr per kg. I år 2 produseres 110 tonn til 55 kr per kg. Beregn nominelt og reelt BNP for begge år (med år 1 som basisår).',
      solution: `**Løsning:**

**År 1:**
- Nominelt BNP = 100 000 kg × 50 kr = 5 000 000 kr
- Reelt BNP (basisår) = 5 000 000 kr

**År 2:**
- Nominelt BNP = 110 000 kg × 55 kr = 6 050 000 kr
- Reelt BNP = 110 000 kg × 50 kr (basisårets pris) = 5 500 000 kr

**Vekstrater:**
- Nominell vekst = (6 050 000 - 5 000 000) / 5 000 000 = 21 %
- Reell vekst = (5 500 000 - 5 000 000) / 5 000 000 = 10 %

Forskjellen (ca. 11 prosentpoeng) skyldes prisstigning. Den reelle veksten på 10 % viser at produksjonen faktisk økte med 10 % (fra 100 til 110 tonn).`,
    },
    {
      id: 'soe-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-3-1-ex-3',
        number: '3.1.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Et lands nominelle BNP øker fra 3 000 milliarder kr til 3 300 milliarder kr på ett år. Prisnivået stiger med 5 % i samme periode. Hva er den omtrentlige reelle BNP-veksten?',
        multipleChoiceOptions: [
          'Omtrent 5 %',
          'Omtrent 10 %',
          'Omtrent 15 %',
          'Omtrent 0 %',
        ],
        hints: ['Nominell vekst = reell vekst + prisvekst (omtrent)'],
        solution: 'Nominell vekst = (3300 - 3000) / 3000 = 10 %. Prisvekst = 5 %. Reell vekst ≈ Nominell vekst - Prisvekst = 10 % - 5 % = 5 %. (Eksakt: 3300/1,05 = 3142,9 mrd. → reell vekst = (3142,9 - 3000)/3000 = 4,76 %. Tilnærmingen gir ca. 5 %.)',
      },
    },
    {
      id: 'soe-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-3-1-ex-4',
        number: '3.1.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvorfor bruker økonomer reelt BNP i stedet for nominelt BNP når de skal måle økonomisk vekst?',
        multipleChoiceOptions: [
          'Fordi reelt BNP korrigerer for prisstigning og viser den faktiske endringen i produksjon',
          'Fordi nominelt BNP alltid er lavere enn reelt BNP',
          'Fordi reelt BNP er enklere å beregne',
          'Fordi nominelt BNP bare inkluderer offentlig sektor',
        ],
        hints: ['Tenk på hva som kan få nominelt BNP til å stige uten at produksjonen faktisk øker'],
        solution: 'Reelt BNP fjerner effekten av prisstigning (inflasjon) og viser derfor den faktiske endringen i produksjonsvolum. Nominelt BNP kan stige selv om produksjonen er uendret, bare fordi prisene øker. For å vite om vi faktisk produserer mer, må vi se på reelt BNP.',
      },
    },
    {
      id: 'soe-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-3-1-ex-5',
        number: '3.1.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar de tre metodene for å måle BNP (produksjonsmetoden, utgiftsmetoden og inntektsmetoden). Gi et kort eksempel som viser hvorfor alle tre gir samme resultat.',
        hints: [
          'Tenk på en enkel økonomi med bare én bedrift',
          'Alt som produseres blir enten brukt eller investert, og all verdiskaping havner som inntekt til noen',
        ],
        solution: 'Produksjonsmetoden summerer verdiskapingen i alle ledd. Utgiftsmetoden summerer alle utgifter til ferdige varer (C + I + G + NX). Inntektsmetoden summerer alle inntekter (lønn + overskudd + avgifter). Eksempel: En baker produserer brød for 1 million kr (produksjonsmetoden). Brødet selges til forbrukere for 1 million kr (utgiftsmetoden). Inntektene fordeles som 600 000 kr i lønn og 400 000 kr i overskudd (inntektsmetoden). Alle tre: 1 million kr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-3-1-ex-6',
        number: '3.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Norges BNP i 2023 var ca. 4 500 milliarder kr. Omtrent halvparten kom fra Fastlands-Norge, resten fra petroleumssektoren. Drøft hvorfor SSB publiserer BNP for Fastlands-Norge i tillegg til samlet BNP. Hva ville skjedd med BNP-utviklingen hvis oljeprisen falt kraftig?',
        hints: [
          'Petroleumssektoren er svært konjunkturfølsom og påvirkes av internasjonale oljepriser',
          'BNP Fastlands-Norge gir et bedre bilde av den underliggende økonomiske aktiviteten',
        ],
        solution: 'SSB publiserer BNP Fastlands-Norge fordi petroleumssektoren er svært volatil og domineres av internasjonale oljepriser som Norge ikke kontrollerer. Fastlands-BNP gir et bedre bilde av den underliggende økonomiske aktiviteten og den innenlandske etterspørselen. Hvis oljeprisen falt kraftig, ville samlet BNP falle dramatisk, men det ville i seg selv ikke bety at norsk økonomi ellers var i krise. Politikere og Norges Bank bruker derfor Fastlands-BNP som styringsgrunnlag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-3-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- **BNP** er den samlede markedsverdien av alle ferdige varer og tjenester produsert innenfor et lands grenser i en gitt periode.
- BNP kan måles med tre metoder: **produksjonsmetoden**, **utgiftsmetoden** (C + I + G + NX) og **inntektsmetoden**. Alle gir samme resultat.
- **Nominelt BNP** måles i løpende priser og kan stige på grunn av inflasjon.
- **Reelt BNP** måles i faste priser og viser den faktiske endringen i produksjonsvolum.
- For å unngå dobbelttelling teller vi bare ferdige varer eller summerer bearbeidingsverdien i hvert ledd.
- I Norge skiller vi mellom samlet BNP og **Fastlands-BNP** for å få et bedre bilde av den underliggende økonomien.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2: Realligningen
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_3_2: TextbookChapter = {
  id: 'samfokonomi-1-3-2',
  courseId: 'samfokonomi-1',
  chapterNumber: '3.2',
  title: 'Realligningen',
  description: 'Forstå realligningen (Y = C + I + G + NX), hva de ulike komponentene betyr, og hvordan likevekt oppstår.',
  estimatedMinutes: 22,
  competenceGoals: [
    'bruke realligningen til å analysere sammenhengen mellom tilgang på og bruk av varer og tjenester i en økonomi',
  ],
  content: [
    {
      id: 'soe-3-2-intro',
      type: 'text',
      content: `# Realligningen

Realligningen er kanskje den viktigste sammenhengen i makroøkonomi. Den viser hvordan alt som produseres i et land (tilgangen) må brukes til noe (anvendelsen). Det finnes ikke noe «svart hull» i økonomien der varer og tjenester bare forsvinner.

Realligningen bygger bro mellom produksjonssiden og etterspørselssiden i økonomien. Ved å forstå denne sammenhengen kan vi analysere hvordan endringer i én del av økonomien påvirker helheten.`,
    },
    {
      id: 'soe-3-2-def-1',
      type: 'definition',
      title: 'Realligningen',
      content: `**Realligningen** viser sammenhengen mellom tilgang og bruk av varer og tjenester i en økonomi:

$$Y + M = C + I + G + X$$

eller skrevet som:

$$Y = C + I + G + (X - M) = C + I + G + NX$$

**Venstre side (tilgangen):** Alt som er tilgjengelig
- **Y** = BNP (innenlands produksjon)
- **M** = Import (varer fra utlandet)

**Høyre side (anvendelsen):** Hva det brukes til
- **C** = Privat konsum (husholdningers forbruk)
- **I** = Bruttoinvesteringer (bedrifters investering i realkapital)
- **G** = Offentlig konsum (statens utgifter til varer og tjenester)
- **X** = Eksport (varer solgt til utlandet)

**NX = X - M** er nettoeksport (handelsbalansen).`,
    },
    {
      id: 'soe-3-2-note-1',
      type: 'note',
      title: 'Hvorfor er realligningen alltid i likevekt?',
      content: `Realligningen er egentlig en **identitet** - den gjelder alltid per definisjon. Alt som produseres pluss alt som importeres, må enten konsumeres, investeres eller eksporteres.

Hvis en bedrift produserer varer som ikke selges, regnes de som lagerinvestering (en del av I). Dermed er ligningen alltid oppfylt.

Dette betyr ikke at økonomien er «i balanse» i den forstand at alle er fornøyde. Realligningen er en bokføringsidentitet, ikke en likevektsbetingelse.`,
    },
    {
      id: 'soe-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-3-2-ex-1',
        number: '3.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'I realligningen Y = C + I + G + NX, hva står C for?',
        multipleChoiceOptions: [
          'Privat konsum (husholdningers forbruk)',
          'Offentlig konsum (statens utgifter)',
          'Kapital (bedrifters maskiner)',
          'Valutakurs (kronens verdi)',
        ],
        hints: ['C står for det engelske ordet «consumption»'],
        solution: 'C står for privat konsum, altså husholdningers forbruk av varer og tjenester. Dette er den største komponenten i BNP i de fleste land, typisk 50–60 % av BNP.',
      },
    },
    {
      id: 'soe-3-2-def-2',
      type: 'definition',
      title: 'Komponentene i realligningen',
      content: `**Privat konsum (C)** er husholdningers kjøp av varer og tjenester. Det inkluderer mat, klær, transport, boligtjenester og underholdning. I Norge utgjør privat konsum omtrent 50 % av BNP.

**Bruttoinvesteringer (I)** er bedrifters kjøp av maskiner, utstyr og bygninger, samt boliginvesteringer og lagerendringer. Bruttoinvesteringer er viktige fordi de øker produksjonskapasiteten.

**Offentlig konsum (G)** er det offentliges kjøp av varer og tjenester, som helse, utdanning, forsvar og infrastruktur. Overføringer (trygder, stønader) er IKKE med i G fordi de ikke er kjøp av varer/tjenester.

**Nettoeksport (NX = X - M):** Eksport øker etterspørselen etter innenlandsk produksjon. Import gjør det mulig å bruke mer enn vi produserer selv, men «lekker» etterspørsel til utlandet.`,
    },
    {
      id: 'soe-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Hvordan påvirker økt offentlig pengebruk økonomien?',
      problem: 'Staten bestemmer seg for å bruke 10 milliarder kr mer på veibygging (økt G). Forklar virkningen på realligningen.',
      solution: `**Løsning:**

Realligningen: Y = C + I + G + NX

Når G øker med 10 mrd. kr, øker høyre side av ligningen. For at ligningen fortsatt skal holde, må venstre side (Y) også øke.

**Direkte virkning:**
- G øker med 10 mrd. kr
- Etterspørselen etter norske varer og tjenester øker
- Produksjonen (Y) øker for å møte etterspørselen

**Indirekte virkninger:**
- Arbeidere i veibygging får inntekt → øker sitt konsum (C stiger)
- Økt etterspørsel kan føre til at bedrifter investerer mer (I stiger)
- Noe av økt etterspørsel kan lekke til import (M stiger → NX faller)

Den totale virkningen på Y avhenger av styrken på disse ringvirkningene, som vi kaller **multiplikatoreffekten**.`,
    },
    {
      id: 'soe-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-3-2-ex-2',
        number: '3.2.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'En økonomi har følgende tall (i mrd. kr): Y = 3 000, C = 1 500, I = 600, G = 800, X = 500. Bruk realligningen til å beregne import (M). Har landet et handelsoverskudd eller handelsunderskudd?',
        hints: [
          'Sett inn i Y + M = C + I + G + X og løs for M',
          'Handelsbalansen er X - M',
        ],
        solution: 'Y + M = C + I + G + X → 3000 + M = 1500 + 600 + 800 + 500 → 3000 + M = 3400 → M = 400 mrd. kr. Nettoeksport NX = X - M = 500 - 400 = 100 mrd. kr. Landet har et handelsoverskudd på 100 mrd. kr fordi eksporten overstiger importen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-3-2-def-3',
      type: 'definition',
      title: 'Multiplikatoreffekten',
      content: `**Multiplikatoreffekten** beskriver hvordan en initial endring i etterspørselen (for eksempel økt G) forplanter seg gjennom økonomien og gir en større total endring i BNP.

Når staten bruker 1 krone ekstra, får noen denne kronen som inntekt. De bruker en del av denne inntekten (si 80 øre), som igjen blir inntekt for noen andre, som bruker 80 % av det igjen, osv.

$$\\text{Multiplikator} = \\frac{1}{1 - c}$$

der $c$ er **marginal konsumtilbøyelighet** (andelen av en ekstra krone i inntekt som brukes til konsum).

Hvis c = 0,8: Multiplikator = 1/(1-0,8) = 1/0,2 = 5

Det betyr at 1 mrd. kr i økt G kan gi opptil 5 mrd. kr økning i BNP (i en lukket økonomi uten skatter og import).`,
    },
    {
      id: 'soe-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-3-2-ex-3',
        number: '3.2.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'I en enkel modell er marginal konsumtilbøyelighet c = 0,75. Hva er multiplikatoren?',
        multipleChoiceOptions: [
          '4',
          '3',
          '0,75',
          '1,33',
        ],
        hints: ['Multiplikator = 1 / (1 - c)'],
        solution: 'Multiplikator = 1 / (1 - c) = 1 / (1 - 0,75) = 1 / 0,25 = 4. Det betyr at en økning i offentlige utgifter på 1 mrd. kr kan gi opptil 4 mrd. kr økning i BNP gjennom ringvirkninger.',
      },
    },
    {
      id: 'soe-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-3-2-ex-4',
        number: '3.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bruk realligningen til å analysere hva som skjer i en økonomi der husholdningene plutselig blir pessimistiske og reduserer sitt konsum (C faller). Hvilke andre komponenter i realligningen kan endres, og hva skjer med Y?',
        hints: [
          'Når C faller, faller etterspørselen etter varer og tjenester',
          'Tenk på hva som skjer med bedriftenes investeringer, import og statens rolle',
        ],
        solution: 'Når C faller, reduseres samlet etterspørsel. Bedriftene selger mindre og reduserer produksjonen (Y faller). Lavere produksjon gir lavere inntekter, som ytterligere reduserer C (multiplikatoreffekt nedover). Bedriftene kan også redusere investeringene (I faller). Importen (M) faller typisk fordi husholdningene kjøper færre varer. Staten kan motvirke nedgangen ved å øke G (motkonjunkturpolitikk). Nedgangen kan bli selvforsterkende hvis pessimismen sprer seg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-3-2-ex-5',
        number: '3.2.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken komponent i realligningen inkluderer IKKE overføringer som trygd og barnetrygd?',
        multipleChoiceOptions: [
          'G (offentlig konsum) - overføringer er ikke kjøp av varer/tjenester',
          'C (privat konsum) - overføringer telles ikke som forbruk',
          'I (investeringer) - overføringer er ikke investeringer',
          'NX (nettoeksport) - overføringer handler ikke om handel',
        ],
        hints: ['G måler det offentliges direkte kjøp av varer og tjenester'],
        solution: 'G (offentlig konsum) inkluderer bare det offentliges direkte kjøp av varer og tjenester (helsetjenester, utdanning, forsvar osv.). Overføringer som trygd, barnetrygd og stønader er pengeoverføringer til husholdninger og regnes ikke med i G. Når mottakerne bruker pengene, registreres det derimot som privat konsum (C).',
      },
    },
    {
      id: 'soe-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-3-2-ex-6',
        number: '3.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Norge har tradisjonelt hatt handelsoverskudd (positiv NX), i stor grad på grunn av oljeeksport. Drøft ved hjelp av realligningen hva som kan skje med norsk økonomi dersom oljeeksporten faller bort.',
        hints: [
          'Tenk på hva som skjer med X, NX og dermed Y',
          'Hva kan staten gjøre for å kompensere? Hva med oljefondet?',
        ],
        solution: 'Hvis oljeeksporten faller bort, synker X kraftig. NX kan bli negativ (handelsunderskudd). For at Y skal opprettholdes, må andre komponenter øke: Staten kan bruke mer fra oljefondet (økt G), eller C og I kan øke. Alternativt kan annen eksport bygges opp. Import kan reduseres gjennom lavere kronekurs (gjør import dyrere og annen eksport billigere). Realligningen viser at et bortfall av eksportinntekter krever tilpasning i andre deler av økonomien.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-3-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- **Realligningen** Y = C + I + G + NX viser sammenhengen mellom tilgang og bruk av varer og tjenester.
- Ligningen er en **identitet** som alltid holder, fordi alt som produseres pluss import må brukes til konsum, investering eller eksport.
- **C** (privat konsum) er den største komponenten, **I** (investeringer) øker kapasiteten, **G** (offentlig konsum) er statens direkte kjøp, og **NX** er handelsbalansen.
- **Multiplikatoreffekten** gjør at en initial endring i etterspørselen forsterkes gjennom ringvirkninger.
- Realligningen er et kraftig verktøy for å analysere hvordan endringer i én del av økonomien påvirker helheten.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.3: Økonomisk vekst
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_3_3: TextbookChapter = {
  id: 'samfokonomi-1-3-3',
  courseId: 'samfokonomi-1',
  chapterNumber: '3.3',
  title: 'Økonomisk vekst',
  description: 'Hva driver økonomisk vekst? Produktivitet, teknologi, humankapital og Solow-modellens grunnprinsipper.',
  estimatedMinutes: 22,
  competenceGoals: [
    'drøfte årsaker til økonomisk vekst og reflektere over bruttonasjonalproduktet som mål for verdiskaping',
  ],
  content: [
    {
      id: 'soe-3-3-intro',
      type: 'text',
      content: `# Økonomisk vekst

For to hundre år siden levde de fleste mennesker i dyp fattigdom. I dag har milliarder av mennesker tilgang til mat, helsetjenester, utdanning og teknologi som selv konger ikke kunne drømme om. Hva har skjedd?

Svaret er **økonomisk vekst** - en vedvarende økning i et lands produksjonskapasitet. Selv små forskjeller i veksttakt gir enorme utslag over tid. Et land som vokser 2 % per år, dobler sitt BNP på 35 år. Et land som vokser 1 %, bruker 70 år på det samme.

I dette kapittelet ser vi på hva som driver økonomisk vekst, og hvorfor noen land er rikere enn andre.`,
    },
    {
      id: 'soe-3-3-def-1',
      type: 'definition',
      title: 'Økonomisk vekst',
      content: `**Økonomisk vekst** er en vedvarende økning i et lands reelle BNP over tid. Vi skiller mellom:

**Absolutt vekst:** Økning i samlet reelt BNP. Kan skyldes at befolkningen vokser.

**Vekst per innbygger:** Økning i reelt BNP per innbygger. Gir et bedre bilde av om levestandarden faktisk bedres.

$$\\text{Vekstrate} = \\frac{\\text{BNP}_t - \\text{BNP}_{t-1}}{\\text{BNP}_{t-1}} \\times 100\\%$$

**«Regelen om 70»:** For å finne omtrentlig doblingstid, del 70 på vekstraten.

Eksempel: Med 2 % årlig vekst dobles BNP på ca. 70/2 = 35 år.`,
    },
    {
      id: 'soe-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Vekstens kraft over tid',
      problem: 'Land A og Land B har begge BNP per innbygger på 100 000 kr i dag. Land A vokser 1 % per år, land B vokser 3 % per år. Hva er BNP per innbygger i hvert land etter 50 år?',
      solution: `**Løsning:**

Vi bruker formelen for rentes rente: $\\text{BNP}_{t} = \\text{BNP}_0 \\times (1 + r)^t$

**Land A** (1 % vekst):
BNP = 100 000 × (1,01)^50 = 100 000 × 1,645 ≈ **164 500 kr**

**Land B** (3 % vekst):
BNP = 100 000 × (1,03)^50 = 100 000 × 4,384 ≈ **438 400 kr**

**Forskjellen:** Etter 50 år er Land B nesten 2,7 ganger rikere enn Land A, selv om forskjellen i veksttakt bare er 2 prosentpoeng.

Dette viser at selv små forskjeller i vekstrate gir enorme konsekvenser over tid. Det er derfor økonomer er så opptatt av hva som bestemmer veksttakten.`,
    },
    {
      id: 'soe-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-3-3-ex-1',
        number: '3.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Et land har en årlig økonomisk vekst på 3,5 %. Omtrent hvor lang tid tar det å doble BNP? (Bruk «regelen om 70».)',
        multipleChoiceOptions: [
          'Ca. 20 år',
          'Ca. 35 år',
          'Ca. 10 år',
          'Ca. 50 år',
        ],
        hints: ['Doblingstid ≈ 70 / vekstrate'],
        solution: 'Doblingstid ≈ 70 / 3,5 = 20 år. Med 3,5 % årlig vekst vil landets BNP doble seg på omtrent 20 år. Denne regelen gir et raskt estimat og er nyttig for å forstå kraften i sammensatt vekst.',
      },
    },
    {
      id: 'soe-3-3-def-2',
      type: 'definition',
      title: 'Drivkrefter bak økonomisk vekst',
      content: `De viktigste drivkreftene for økonomisk vekst er:

**1. Økt arbeidsinnsats:**
Flere arbeidstakere eller lengre arbeidstid øker produksjonen. Men dette gir ikke nødvendigvis høyere BNP per innbygger.

**2. Kapitalakkumulasjon:**
Flere og bedre maskiner, bygninger og infrastruktur gjør arbeiderne mer produktive. Men kapitalens bidrag har avtagende marginalavkastning.

**3. Teknologisk fremgang:**
Nye oppfinnelser, bedre metoder og innovasjon gjør at vi kan produsere mer med de samme ressursene. Teknologisk fremgang er den viktigste kilden til langsiktig vekst.

**4. Humankapital:**
Utdanning, kunnskap og ferdigheter gjør arbeidskraften mer produktiv. Investering i humankapital er like viktig som investering i fysisk kapital.

**5. Institusjoner:**
Rettsstat, eiendomsrett, demokrati og lav korrupsjon skaper rammebetingelser for vekst.`,
    },
    {
      id: 'soe-3-3-example-2',
      type: 'example',
      title: 'Eksempel: Produktivitetsvekst i Norge',
      problem: 'Hva har vært de viktigste kildene til økonomisk vekst i Norge de siste 50 årene?',
      solution: `**Norges veksthistorie:**

**1970–1990:** Oljesektoren vokste kraftig og ga Norge enorme eksportinntekter. Samtidig ble kvinners yrkesdeltakelse mye høyere (økt arbeidsinnsats).

**1990–2010:** Produktivitetsvekst drevet av ny teknologi (IKT-revolusjon), høyere utdanningsnivå og effektivisering av næringslivet. Oljefondet ble opprettet (1990) og ga trygghet for fremtiden.

**2010–i dag:** Lavere produktivitetsvekst, som i de fleste rike land. Omstilling bort fra olje, digitalisering og grønn teknologi som nye vekstdrivere.

**Nøkkelfaktorer:**
- Rike naturressurser (olje, gass, vannkraft)
- Høyt utdanningsnivå
- Sterke institusjoner og lav korrupsjon
- Relativt lik inntektsfordeling (bred deltakelse)
- Åpen økonomi med frihandel`,
    },
    {
      id: 'soe-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-3-3-ex-2',
        number: '3.3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken faktor anses som den viktigste kilden til langsiktig økonomisk vekst?',
        multipleChoiceOptions: [
          'Teknologisk fremgang og innovasjon',
          'Økt arbeidstid',
          'Større naturressurser',
          'Høyere skatter',
        ],
        hints: ['Tenk på hva som gjør at vi kan produsere mer med de samme innsatsfaktorene'],
        solution: 'Teknologisk fremgang er den viktigste kilden til langsiktig vekst. Arbeidsinnsats kan ikke øke ubegrenset, og kapitalakkumulasjon har avtagende marginalavkastning. Men teknologisk fremgang (nye oppfinnelser, bedre produksjonsmetoder) gjør at vi stadig kan produsere mer med samme mengde arbeidskraft og kapital.',
      },
    },
    {
      id: 'soe-3-3-def-3',
      type: 'definition',
      title: 'Solow-modellen (grunnprinsipper)',
      content: `**Solow-modellen** (etter økonomen Robert Solow, nobelprisvinner 1987) er den mest kjente modellen for økonomisk vekst. Hovedideer:

**1. Produksjonsfunksjonen:**
$$Y = A \\cdot f(K, L)$$
der Y = produksjon, A = teknologinivå, K = kapital, L = arbeidskraft.

**2. Avtagende marginalavkastning på kapital:**
Jo mer kapital du allerede har, desto mindre ekstra produksjon gir en ekstra maskin. Et fattig land har mer å hente på investering enn et rikt land.

**3. Steady state:**
Uten teknologisk fremgang vil en økonomi til slutt nå en likevekt (steady state) der BNP per innbygger slutter å vokse, fordi avskrivninger spiser opp nye investeringer.

**4. Teknologisk fremgang (A):**
Bare teknologisk fremgang kan gi vedvarende vekst i BNP per innbygger på lang sikt.

**Implikasjon:** Fattige land «burde» vokse raskere enn rike land (konvergenshypotesen), fordi avkastningen på kapital er høyere der.`,
    },
    {
      id: 'soe-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-3-3-ex-3',
        number: '3.3.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Ifølge Solow-modellen, hva er den eneste kilden til vedvarende vekst i BNP per innbygger på lang sikt?',
        multipleChoiceOptions: [
          'Teknologisk fremgang',
          'Økte investeringer i kapital',
          'Befolkningsvekst',
          'Økt sparing',
        ],
        hints: ['Husk at kapitalakkumulasjon har avtagende marginalavkastning'],
        solution: 'I Solow-modellen gir økte investeringer midlertidig vekst, men på grunn av avtagende marginalavkastning og avskrivninger når økonomien til slutt steady state. Bare teknologisk fremgang (A i produksjonsfunksjonen) kan gi vedvarende vekst i BNP per innbygger, fordi teknologi gjør alle innsatsfaktorene mer produktive uten å møte avtagende avkastning.',
      },
    },
    {
      id: 'soe-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-3-3-ex-4',
        number: '3.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar begrepet «humankapital» og diskuter hvorfor investering i utdanning kan være minst like viktig for økonomisk vekst som investering i maskiner og utstyr.',
        hints: [
          'Humankapital er kunnskap og ferdigheter arbeidsstyrken har',
          'Tenk på hvordan utdannede arbeidere påvirker produktivitet og innovasjon',
        ],
        solution: 'Humankapital er arbeidsstyrkens samlede kunnskaper, ferdigheter og kompetanse, som øker gjennom utdanning og erfaring. Investering i utdanning er viktig for vekst fordi: (1) Utdannede arbeidere er mer produktive. (2) Høyere kompetanse gjør det mulig å bruke avansert teknologi. (3) Humankapital driver innovasjon og teknologisk fremgang. (4) I motsetning til maskiner som slites ned, kan kunnskap spres uten at den taper verdi. Empirisk forskning viser at land med høyere utdanningsnivå har høyere BNP per innbygger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-3-3-ex-5',
        number: '3.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Konvergenshypotesen sier at fattige land bør vokse raskere enn rike land. Stemmer dette i praksis? Drøft med eksempler.',
        hints: [
          'Sammenlign land som Sør-Korea og Kina (som har konvergert) med land i Afrika (som ofte ikke har det)',
          'Tenk på hva som kan hindre konvergens: institusjoner, korrupsjon, konflikter',
        ],
        solution: 'Konvergenshypotesen holder for noen land, men ikke alle. Sør-Korea, Singapore, Taiwan og Kina har vist sterk konvergens og nærmet seg rike lands BNP-nivå gjennom massive investeringer, eksportorientert industri og satsing på utdanning. Mange afrikanske land har derimot ikke konvergert, til tross for lavt startpunkt. Årsaker til manglende konvergens inkluderer: svake institusjoner, korrupsjon, politisk ustabilitet, konflikter, mangelfull eiendomsrett og lite åpenhet for handel. Solow-modellen forutsetter at landene har like institusjoner, noe som sjelden stemmer i praksis.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-3-3-ex-6',
        number: '3.3.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «avtagende marginalavkastning på kapital»?',
        multipleChoiceOptions: [
          'Jo mer kapital man allerede har, desto mindre ekstra produksjon gir en ekstra enhet kapital',
          'Kapital mister verdi over tid på grunn av slitasje',
          'At det alltid lønner seg å investere mer i kapital',
          'At arbeidskraft er viktigere enn kapital',
        ],
        hints: ['Tenk på en bonde: Den første traktoren gir stor gevinst, den tiende traktoren gir liten ekstra nytte'],
        solution: 'Avtagende marginalavkastning betyr at den ekstra produksjonen man får av én ekstra enhet kapital, blir mindre jo mer kapital man allerede har. Den første datamaskinen på et kontor gir stor produktivitetsgevinst, mens den tjuende gir lite ekstra. Dette er et sentralt prinsipp i Solow-modellen og forklarer hvorfor ren kapitalakkumulasjon alene ikke kan gi vedvarende vekst.',
      },
    },
    {
      id: 'soe-3-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'soe-3-3-ex-7',
        number: '3.3.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvordan gode institusjoner (rettsstat, eiendomsrett, lav korrupsjon) påvirker økonomisk vekst. Bruk gjerne eksempler fra ulike land.',
        hints: [
          'Ville du investert i en bedrift i et land uten rettsvern eller med høy korrupsjon?',
          'Sammenlign f.eks. Nord-Korea og Sør-Korea, som har lik kultur men ulike institusjoner',
        ],
        solution: 'Gode institusjoner fremmer vekst ved å: (1) Beskytte eiendomsretten, slik at folk tør å investere og innovere. (2) Sørge for rettssikkerhet og forutsigbarhet for næringslivet. (3) Redusere korrupsjon, slik at ressurser brukes effektivt. (4) Skape stabile politiske rammer for langsiktig planlegging. Eksempler: Nord-Korea vs. Sør-Korea hadde likt utgangspunkt i 1950, men helt ulik utvikling pga. institusjoner. Botswana i Afrika har hatt god vekst takket være relativt gode institusjoner. Mange oljerike land (Venezuela, Nigeria) har svak vekst pga. dårlige institusjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-3-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- **Økonomisk vekst** er økning i reelt BNP over tid. Selv små forskjeller i veksttakt gir store utslag over tid.
- De viktigste drivkreftene er **arbeidsinnsats**, **kapitalakkumulasjon**, **teknologisk fremgang**, **humankapital** og **institusjoner**.
- **Solow-modellen** viser at kapitalakkumulasjon har avtagende marginalavkastning, og at bare teknologisk fremgang gir vedvarende vekst i BNP per innbygger.
- **Konvergenshypotesen** sier at fattige land bør vokse raskere enn rike, men dette forutsetter gode institusjoner.
- **Regelen om 70:** Doblingstid ≈ 70 / vekstrate (i prosent).
- Gode institusjoner (rettsstat, eiendomsrett, lav korrupsjon) er en forutsetning for varig økonomisk vekst.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.4: BNP som velstandsmål
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_3_4: TextbookChapter = {
  id: 'samfokonomi-1-3-4',
  courseId: 'samfokonomi-1',
  chapterNumber: '3.4',
  title: 'BNP som velstandsmål',
  description: 'Begrensninger ved BNP, alternative mål som HDI og grønt BNP, og debatten om velferd utover BNP.',
  estimatedMinutes: 20,
  competenceGoals: [
    'drøfte årsaker til økonomisk vekst og reflektere over bruttonasjonalproduktet som mål for verdiskaping',
  ],
  content: [
    {
      id: 'soe-3-4-intro',
      type: 'text',
      content: `# BNP som velstandsmål

BNP er det mest brukte målet på et lands økonomiske prestasjon. Men er høyere BNP det samme som høyere velferd? Gjør mer produksjon oss faktisk lykkeligere og sunnere?

Denne debatten har pågått lenge blant økonomer. Allerede i 1968 sa Robert F. Kennedy: «BNP måler alt, unntatt det som gjør livet verdt å leve.»

I dette kapittelet ser vi kritisk på BNP som velstandsmål, utforsker hva BNP fanger opp og hva det ikke fanger opp, og diskuterer alternative mål.`,
    },
    {
      id: 'soe-3-4-def-1',
      type: 'definition',
      title: 'BNPs styrker som mål',
      content: `**Hva BNP fanger opp:**

- **Materiell levestandard:** Mer produksjon betyr som regel flere varer og tjenester tilgjengelig for befolkningen.
- **Standardisert og sammenlignbart:** BNP beregnes på samme måte i alle land (FNs nasjonalregnskapsstandarder), noe som muliggjør sammenligninger.
- **Korrelerert med andre goder:** Land med høyere BNP per innbygger har gjennomgående høyere levealder, lavere barnedødelighet, bedre utdanning og mer frihet.
- **Tilgjengelig og regelmessig:** BNP publiseres hvert kvartal og gir en rask puls på økonomiens tilstand.

BNP er derfor et nyttig verktøy, men det har viktige begrensninger.`,
    },
    {
      id: 'soe-3-4-def-2',
      type: 'definition',
      title: 'BNPs begrensninger',
      content: `**Hva BNP IKKE fanger opp:**

**1. Inntektsfordeling:**
Et land kan ha høyt BNP per innbygger, men stor ulikhet. Gjennomsnittet skjuler hvordan verdiene fordeles.

**2. Svart økonomi og hjemmearbeid:**
Ubetalt husarbeid, frivillig arbeid og svart arbeid telles ikke med. Hvis en forelder går fra å være hjemmeværende til å bruke barnehage, stiger BNP - men barna passes uansett.

**3. Miljøødeleggelser:**
BNP teller ikke kostnadene ved forurensning, klimaendringer eller tap av natur. Tvert imot: Opprydding etter en oljeulykke øker BNP.

**4. Fritid og livskvalitet:**
Mer arbeidstid kan øke BNP, men reduserer fritiden. BNP sier ingenting om stress, helse eller lykke.

**5. Kvalitetsforbedringer:**
En smarttelefon i dag er mye bedre enn én for ti år siden, men dette fanges dårlig opp i prisstatistikken.

**6. Bærekraft:**
BNP skiller ikke mellom bærekraftig og ikke-bærekraftig produksjon. Overforbruk av naturressurser kan øke BNP i dag, men redusere velferden i fremtiden.`,
    },
    {
      id: 'soe-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Paradokser med BNP',
      problem: 'Gi tre eksempler på hendelser som øker BNP, men som neppe øker velferden.',
      solution: `**Tre paradokser med BNP:**

**1. Bilulykker:**
En bilulykke øker BNP gjennom reparasjonskostnader, sykehusbehandling og forsikringsarbeid. Men ingen blir lykkeligere av en bilulykke.

**2. Naturkatastrofer:**
Gjenoppbygging etter en flom eller et jordskjelv øker BNP. Men landet er i beste fall tilbake der det startet.

**3. Forurensning og opprydding:**
En fabrikk som forurenser øker BNP med sin produksjon. Når staten betaler for opprydding, øker BNP enda mer. Resultatet er at forurensning «lønner seg» i BNP-termer.

Disse paradoksene viser at BNP måler aktivitet, ikke velferd. Noe av aktiviteten er «defensiv» - den reparerer skade i stedet for å skape noe nytt.`,
    },
    {
      id: 'soe-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-3-4-ex-1',
        number: '3.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse aktivitetene fanges IKKE opp av BNP?',
        multipleChoiceOptions: [
          'Ubetalt husarbeid og frivillig arbeid',
          'Kjøp av mat i butikken',
          'Betaling for en frisørtime',
          'Offentlige helsetjenester',
        ],
        hints: ['BNP måler markedstransaksjoner - hva telles ikke?'],
        solution: 'Ubetalt husarbeid og frivillig arbeid fanges ikke opp i BNP fordi det ikke skjer gjennom markedet. Det betyr at en forelder som passer sine egne barn bidrar null til BNP, mens den samme omsorgstjenesten kjøpt i en barnehage telles med. Dette er en viktig begrensning ved BNP.',
      },
    },
    {
      id: 'soe-3-4-def-3',
      type: 'definition',
      title: 'Human Development Index (HDI)',
      content: `**Human Development Index (HDI)** er et alternativt velstandsmål utviklet av FN (UNDP). HDI kombinerer tre dimensjoner:

**1. Helse:** Forventet levealder ved fødsel.

**2. Utdanning:** Gjennomsnittlig antall skoleår og forventet antall skoleår.

**3. Levestandard:** BNP per innbygger (justert for kjøpekraft).

HDI gir en verdi mellom 0 og 1, der 1 er best.

**Fordeler med HDI:**
- Fanger opp mer enn bare materiell velstand
- Inkluderer helse og utdanning som viktige velferdskomponenter
- Enkel å forstå og sammenligne

**Begrensninger:**
- Inkluderer fortsatt BNP som én av tre komponenter
- Fanger ikke opp inntektsfordeling, miljø eller frihet
- Veier komponentene likt, noe som er et verdivalg`,
    },
    {
      id: 'soe-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-3-4-ex-2',
        number: '3.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilke tre dimensjoner måler Human Development Index (HDI)?',
        multipleChoiceOptions: [
          'Helse (levealder), utdanning (skolegang) og levestandard (BNP per innbygger)',
          'BNP, arbeidsledighet og inflasjon',
          'Frihet, likhet og bærekraft',
          'Konsum, investering og eksport',
        ],
        hints: ['HDI er utviklet av FN og kombinerer tre ulike velferdskomponenter'],
        solution: 'HDI måler helse (forventet levealder), utdanning (gjennomsnittlig og forventet skolegang) og levestandard (BNP per innbygger i kjøpekraftsparitet). Ved å kombinere disse tre dimensjonene gir HDI et bredere bilde av menneskelig utvikling enn BNP alene.',
      },
    },
    {
      id: 'soe-3-4-def-4',
      type: 'definition',
      title: 'Grønt BNP og bærekraftig utvikling',
      content: `**Grønt BNP** (eller miljøjustert BNP) er et forsøk på å justere BNP for miljøkostnader:

$$\\text{Grønt BNP} = \\text{BNP} - \\text{Miljøkostnader} - \\text{Naturressurstap}$$

Ideén er å trekke fra verdien av forurensning, klimautslipp, tap av biologisk mangfold og utarming av naturressurser.

**Utfordringer:**
- Vanskelig å sette prislapp på natur og forurensning
- Ikke internasjonalt standardisert
- Politisk kontroversielt

**Nordhaus-Stiglitz-debatten:**
William Nordhaus (miljøøkonomi) og Joseph Stiglitz (ledet FN-kommisjonen om velstandsmåling) representerer to tilnærminger:
- **Nordhaus:** Vi bør forbedre BNP-målingen, blant annet ved å inkludere miljøkostnader
- **Stiglitz:** Vi bør bruke et bredere sett av indikatorer som dekker livskvalitet, ulikhet, bærekraft og subjektiv velvære - ikke bare justere BNP`,
    },
    {
      id: 'soe-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-3-4-ex-3',
        number: '3.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva «grønt BNP» er, og diskuter hvorfor det er vanskelig å beregne i praksis.',
        hints: [
          'Grønt BNP = BNP minus miljøkostnader og naturressurstap',
          'Tenk på problemer med å sette pris på natur',
        ],
        solution: 'Grønt BNP er BNP justert for miljøkostnader og tap av naturressurser. I teorien trekker vi fra verdien av forurensning, klimautslipp og naturtap. I praksis er det vanskelig fordi: (1) Hvordan setter vi pris på et utryddet dyreart? (2) Miljøskader kan være langsiktige og usikre. (3) Ulike land verdsetter miljø ulikt. (4) Data om miljøtilstand er ofte mangelfulle. Til tross for vanskelighetene arbeider FN og OECD med å utvikle slike mål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-3-4-ex-4',
        number: '3.4.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Qatar har et av verdens høyeste BNP per innbygger, men scorer lavere enn Norge på HDI. Forklar hvorfor det kan være forskjell mellom BNP per innbygger og HDI-rangering for et land.',
        hints: [
          'Tenk på hva HDI måler i tillegg til BNP',
          'Er høyt BNP nok for god helse og utdanning?',
        ],
        solution: 'Qatar har svært høyt BNP per innbygger på grunn av olje- og gassinntekter, men scorer lavere på HDI fordi: (1) Utdanningsnivået er lavere enn i Norge, med færre gjennomsnittlige skoleår. (2) Helsetilstanden er god, men forventet levealder er noe lavere. (3) HDI fanger opp at velstand handler om mer enn penger. (4) BNP per innbygger skjuler ulikhet - gjestearbeidere utgjør en stor del av befolkningen og har lavere levestandard. Norge scorer høyt på alle tre HDI-dimensjonene, noe som viser at bred velferdspolitikk gir resultater utover ren økonomisk vekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-3-4-ex-5',
        number: '3.4.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av disse hendelsene ville øke BNP, men trolig ikke øke velferden i et land?',
        multipleChoiceOptions: [
          'Økt forurensning fra fabrikker som krever kostbar opprydding',
          'Økt investering i nye skoler og sykehus',
          'Teknologisk innovasjon som gjør produksjonen mer effektiv',
          'Økt handel med utlandet som gir billigere varer',
        ],
        hints: ['Tenk på aktiviteter som er «reparasjon» av skade fremfor ekte verdiskaping'],
        solution: 'Økt forurensning som krever opprydding øker BNP (gjennom produksjonen som forurenser OG gjennom oppryddingskostnadene), men velferden øker neppe. Miljøet forverres, og oppryddingen bare forsøker å gjenopprette status quo. De andre alternativene representerer aktiviteter som kan gi reelle velferdsgevinster.',
      },
    },
    {
      id: 'soe-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-3-4-ex-6',
        number: '3.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft påstanden: «Vi bør slutte å bruke BNP og heller bruke et bredt sett av indikatorer for å måle et lands velstand.» Argumenter for og imot.',
        hints: [
          'For: BNP fanger ikke opp miljø, fordeling, helse, frihet',
          'Imot: BNP er enkelt, standardisert og muliggjør sammenligninger',
        ],
        solution: 'FOR å erstatte BNP: BNP ignorerer miljøkostnader, inntektsfordeling, helse og subjektiv livskvalitet. Et bredere indikatorset (HDI, bærekraftsmål, ulikhetsmål) gir et mer helhetlig bilde av velferd. IMOT å erstatte BNP: BNP er enkelt, standardisert og muliggjør presise sammenligninger over tid og mellom land. Med mange indikatorer blir det uklart hva man skal prioritere. BNP korrelerer sterkt med andre goder (levealder, utdanning). KONKLUSJON: De fleste økonomer mener vi bør beholde BNP som ett av flere mål, supplert med indikatorer for miljø, fordeling og livskvalitet - ikke erstatte det helt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-3-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- BNP er nyttig som mål på materiell produksjon, men har viktige **begrensninger**: det fanger ikke opp inntektsfordeling, ubetalt arbeid, miljøkostnader, fritid eller livskvalitet.
- **HDI** (Human Development Index) kombinerer helse, utdanning og levestandard og gir et bredere bilde av menneskelig utvikling.
- **Grønt BNP** forsøker å justere for miljøkostnader, men er vanskelig å beregne.
- Stiglitz-kommisjonen anbefaler å supplere BNP med et bredt sett av indikatorer for livskvalitet, ulikhet og bærekraft.
- Paradokser viser at aktiviteter som bilulykker og forurensning øker BNP uten å øke velferden.
- De fleste økonomer mener BNP bør beholdes som ett av flere mål, ikke erstattes helt.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.5: Nasjonalregnskapet
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_3_5: TextbookChapter = {
  id: 'samfokonomi-1-3-5',
  courseId: 'samfokonomi-1',
  chapterNumber: '3.5',
  title: 'Nasjonalregnskapet',
  description: 'Hvordan fungerer nasjonalregnskapet? Bearbeidingsverdi, BNP per innbygger og kjøpekraftsparitet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'bruke realligningen til å analysere sammenhengen mellom tilgang på og bruk av varer og tjenester i en økonomi',
    'drøfte årsaker til økonomisk vekst og reflektere over bruttonasjonalproduktet som mål for verdiskaping',
  ],
  content: [
    {
      id: 'soe-3-5-intro',
      type: 'text',
      content: `# Nasjonalregnskapet

Hvordan holder man oversikt over all økonomisk aktivitet i et helt land? Svaret er **nasjonalregnskapet** - et omfattende bokføringssystem som registrerer alt som produseres, fordeles og brukes i økonomien.

I Norge er det Statistisk sentralbyrå (SSB) som utarbeider nasjonalregnskapet. Det publiseres hvert kvartal og er grunnlaget for BNP-beregningene vi har lært om. Nasjonalregnskapet følger internasjonale standarder (FNs SNA - System of National Accounts) slik at tallene er sammenlignbare mellom land.

I dette kapittelet ser vi nærmere på hvordan nasjonalregnskapet er bygget opp, hva bearbeidingsverdi er, og hvordan vi kan sammenligne velstand mellom land.`,
    },
    {
      id: 'soe-3-5-def-1',
      type: 'definition',
      title: 'Nasjonalregnskapet',
      content: `**Nasjonalregnskapet** er et helhetlig og systematisk regnskap for all økonomisk aktivitet i et land. Det gir en samlet oversikt over:

- **Produksjon:** Hva som produseres og i hvilke næringer
- **Inntekter:** Hvem som tjener hva (lønn, overskudd, skatter)
- **Bruk:** Hva produksjonen brukes til (konsum, investering, eksport)
- **Formue:** Landets samlede realkapital og finansielle eiendeler

Nasjonalregnskapet bygger på data fra skattemeldinger, bedriftsregnskap, tollstatistikk, forbruksundersøkelser og mange andre kilder.

I Norge utarbeides det av **Statistisk sentralbyrå (SSB)** og publiseres kvartalsvis og årlig.`,
    },
    {
      id: 'soe-3-5-def-2',
      type: 'definition',
      title: 'Bearbeidingsverdi (verdiskaping)',
      content: `**Bearbeidingsverdi** (også kalt verdiskaping eller bruttoprodukt) er verdien en bedrift eller næring tilfører i produksjonsprosessen:

$$\\text{Bearbeidingsverdi} = \\text{Produksjonsverdi} - \\text{Vareinnsats}$$

- **Produksjonsverdi:** Verdien av det som produseres (omsetning)
- **Vareinnsats:** Verdien av innkjøpte råvarer, halvfabrikata og tjenester brukt i produksjonen

**Eksempel:** En møbelsnekker kjøper trevirke for 2 000 kr og lager et bord som selges for 8 000 kr. Bearbeidingsverdien er 8 000 - 2 000 = 6 000 kr. Denne verdiskapingen fordeles som lønn til snekkeren, overskudd til bedriften og avgifter til staten.

**Sammenhengen med BNP:**
$$\\text{BNP} = \\sum \\text{Bearbeidingsverdi i alle næringer} + \\text{Netto produktskatter}$$`,
    },
    {
      id: 'soe-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Bearbeidingsverdi i verdikjeden',
      problem: 'En fisker fanger fisk og selger den til en foredlingsbedrift for 50 kr per kg. Foredlingsbedriften lager røkelaks og selger til en butikk for 120 kr per kg. Butikken selger til forbruker for 180 kr per kg. Beregn bearbeidingsverdien i hvert ledd.',
      solution: `**Løsning:**

**Ledd 1 - Fisker:**
- Produksjonsverdi: 50 kr/kg
- Vareinnsats: 0 kr (vi forenkler)
- **Bearbeidingsverdi = 50 kr/kg**

**Ledd 2 - Foredlingsbedrift:**
- Produksjonsverdi: 120 kr/kg
- Vareinnsats: 50 kr/kg (fisken de kjøpte)
- **Bearbeidingsverdi = 120 - 50 = 70 kr/kg**

**Ledd 3 - Butikk:**
- Produksjonsverdi: 180 kr/kg
- Vareinnsats: 120 kr/kg (røkelaksen de kjøpte)
- **Bearbeidingsverdi = 180 - 120 = 60 kr/kg**

**Sum bearbeidingsverdi = 50 + 70 + 60 = 180 kr/kg**

Dette er nøyaktig lik prisen forbrukeren betaler. BNP-bidraget er 180 kr, enten vi teller sluttproduktet eller summerer bearbeidingsverdiene.`,
    },
    {
      id: 'soe-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-3-5-ex-1',
        number: '3.5.1',
        type: 'classic',
        difficulty: 'medium',
        task: 'En bilprodusent kjøper deler for 150 000 kr og bygger en bil som selges for 350 000 kr. Beregn bearbeidingsverdien. Hva dekker denne bearbeidingsverdien (hva brukes den til)?',
        hints: [
          'Bearbeidingsverdi = Produksjonsverdi - Vareinnsats',
          'Bearbeidingsverdien fordeles som lønn, overskudd og avgifter',
        ],
        solution: 'Bearbeidingsverdi = 350 000 - 150 000 = 200 000 kr. Denne verdiskapingen fordeles som: (1) Lønn til arbeiderne som bygde bilen. (2) Driftsoverskudd (overskudd) til bedriften/eierne. (3) Avgifter til staten minus eventuelle subsidier. Summen av lønn + overskudd + netto avgifter = 200 000 kr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-3-5-def-3',
      type: 'definition',
      title: 'BNP per innbygger',
      content: `**BNP per innbygger** (BNP per capita) er BNP delt på antall innbyggere:

$$\\text{BNP per innbygger} = \\frac{\\text{BNP}}{\\text{Antall innbyggere}}$$

BNP per innbygger brukes for å sammenligne levestandard mellom land med ulik befolkningsstørrelse.

**Eksempler (omtrentlige tall):**
- Norge: ca. 850 000 kr per innbygger (blant verdens høyeste)
- USA: ca. 750 000 kr per innbygger
- Kina: ca. 130 000 kr per innbygger
- India: ca. 25 000 kr per innbygger

**Begrensninger:**
- Sier ingenting om fordelingen innad i landet
- Påvirkes av valutakurser ved sammenligning
- Fanger ikke opp uformell økonomi i fattige land`,
    },
    {
      id: 'soe-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-3-5-ex-2',
        number: '3.5.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Land X har et BNP på 500 milliarder kr og 5 millioner innbyggere. Land Y har et BNP på 1 000 milliarder kr og 20 millioner innbyggere. Hvilket land har høyest BNP per innbygger?',
        multipleChoiceOptions: [
          'Land X (100 000 kr per innbygger)',
          'Land Y (50 000 kr per innbygger)',
          'Begge har likt BNP per innbygger',
          'Det er umulig å si uten mer informasjon',
        ],
        hints: ['BNP per innbygger = BNP / antall innbyggere'],
        solution: 'Land X: 500 mrd. / 5 mill. = 100 000 kr per innbygger. Land Y: 1 000 mrd. / 20 mill. = 50 000 kr per innbygger. Selv om Land Y har dobbelt så stort samlet BNP, har Land X dobbelt så høyt BNP per innbygger. Det viser at det er BNP per innbygger, ikke samlet BNP, som best reflekterer materiell levestandard.',
      },
    },
    {
      id: 'soe-3-5-def-4',
      type: 'definition',
      title: 'Kjøpekraftsparitet (PPP)',
      content: `**Kjøpekraftsparitet (PPP - Purchasing Power Parity)** er en metode for å justere BNP-sammenligninger for prisforskjeller mellom land.

**Problemet:** Hvis vi bare omregner BNP med valutakurser, tar vi ikke hensyn til at prisene er forskjellige i ulike land. En hårklipp koster kanskje 500 kr i Norge og 50 kr i India.

**Løsningen:** PPP justerer ved å sammenligne hva en «representativ varekurv» koster i ulike land.

**Eksempel:**
- Norges BNP per innbygger i valutakurs: ca. 850 000 kr (blant verdens høyeste)
- Norges BNP per innbygger i PPP: ca. 600 000 kr (fortsatt høyt, men forskjellen til andre rike land minsker)

**Hvorfor forskjellen?** Priser i Norge er blant verdens høyeste (spesielt tjenester). En nordmann med 850 000 kr kan ikke kjøpe like mye som tallene tilsier sammenlignet med land der prisene er lavere.

PPP gir et mer realistisk bilde av faktisk kjøpekraft og levestandard.`,
    },
    {
      id: 'soe-3-5-example-2',
      type: 'example',
      title: 'Eksempel: Big Mac-indeksen',
      problem: 'The Economist publiserer «Big Mac-indeksen» som en enkel PPP-sammenligning. En Big Mac koster 75 kr i Norge og 5,50 dollar i USA. Valutakursen er 10,50 kr per dollar. Er norske kroner overvurdert eller undervurdert ifølge Big Mac-indeksen?',
      solution: `**Løsning:**

**Steg 1:** Beregn «Big Mac-kursen» (PPP-kursen for en Big Mac):
Big Mac-kurs = Norsk pris / Amerikansk pris = 75 kr / 5,50 dollar = **13,64 kr per dollar**

**Steg 2:** Sammenlign med markedskursen:
Markedskurs = 10,50 kr per dollar
Big Mac-kurs = 13,64 kr per dollar

**Steg 3:** Vurdering:
Ifølge Big Mac-indeksen «burde» en dollar koste 13,64 kr, men den koster bare 10,50 kr i markedet.

Det betyr at norske kroner er **overvurdert** med:
(13,64 - 10,50) / 13,64 × 100 = ca. 23 %

**Tolkning:** Ting er dyrere i Norge enn i USA. En nordmann som reiser til USA får mer for pengene enn hjemme. BNP per innbygger i valutakurs overvurderer norsk kjøpekraft sammenlignet med PPP.`,
    },
    {
      id: 'soe-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-3-5-ex-3',
        number: '3.5.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor er det mer rettferdig å sammenligne BNP per innbygger mellom land ved hjelp av kjøpekraftsparitet (PPP) enn med vanlige valutakurser?',
        multipleChoiceOptions: [
          'Fordi PPP justerer for at prisene er ulike i ulike land, slik at vi får et bedre bilde av faktisk kjøpekraft',
          'Fordi PPP alltid gir høyere tall enn valutakurser',
          'Fordi valutakurser endrer seg hele tiden',
          'Fordi PPP inkluderer svart økonomi',
        ],
        hints: ['Tenk på at en hårklipp koster mye mer i Oslo enn i Bangkok'],
        solution: 'PPP justerer for prisforskjeller mellom land. Valutakurser påvirkes av handel, kapitalstrømmer og spekulasjon, og reflekterer ikke nødvendigvis forskjeller i kjøpekraft. Et land med høye priser (som Norge) får overvurdert sin faktiske levestandard med valutakurser, mens et land med lave priser (som India) får undervurdert sin. PPP gir et mer realistisk bilde av hva innbyggerne faktisk kan kjøpe for inntekten sin.',
      },
    },
    {
      id: 'soe-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-3-5-ex-4',
        number: '3.5.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Norges BNP per innbygger er blant verdens høyeste målt i valutakurs, men «bare» nummer 10-15 målt i PPP. Forklar hvorfor denne forskjellen oppstår.',
        hints: [
          'Tenk på prisnivået i Norge sammenlignet med andre land',
          'Er norske tjenester (frisør, restaurant, taxi) billige eller dyre?',
        ],
        solution: 'Norge har blant verdens høyeste prisnivåer, særlig for tjenester. En norsk lønn på 500 000 kr «ser» høy ut i valutakurs, men en del av denne lønnen spises opp av høye priser. Når vi justerer for PPP, tar vi hensyn til at en hårklipp, en restaurant eller en taxitur koster mye mer i Norge enn i de fleste andre land. Dermed faller Norge noen plasser på rangeringen. Likevel: selv i PPP-termer er Norge blant verdens rikeste land.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-3-5-ex-5',
        number: '3.5.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er bearbeidingsverdi?',
        multipleChoiceOptions: [
          'Verdien en bedrift tilfører i produksjonsprosessen, beregnet som produksjonsverdi minus vareinnsats',
          'Den totale omsetningen til en bedrift',
          'Verdien av alle råvarer som brukes i produksjonen',
          'Bedriftens overskudd etter skatt',
        ],
        hints: ['Bearbeidingsverdi handler om hva bedriften LEGGER TIL av verdi'],
        solution: 'Bearbeidingsverdi er verdien en bedrift tilfører i produksjonen, beregnet som produksjonsverdi (omsetning) minus vareinnsats (kostnad for innkjøpte råvarer og tjenester). Det er dette som utgjør bedriftens verdiskaping og som fordeles som lønn, overskudd og avgifter.',
      },
    },
    {
      id: 'soe-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-3-5-ex-6',
        number: '3.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I verdikjeden for en ullgenser kjøper en bonde fôr for 10 kr, sauer gir ull som selges for 50 kr, et spinneri lager garn for 90 kr, en strikkefabrikk lager genseren for 250 kr, og butikken selger genseren for 500 kr. Beregn bearbeidingsverdien i hvert ledd, og vis at summen av bearbeidingsverdiene er lik sluttprisen.',
        hints: [
          'Bearbeidingsverdi = Produksjonsverdi - Vareinnsats',
          'Hvert ledds vareinnsats er forrige ledds produksjonsverdi',
        ],
        solution: 'Bonde: 50 - 10 = 40 kr. Spinneri: 90 - 50 = 40 kr. Strikkefabrikk: 250 - 90 = 160 kr. Butikk: 500 - 250 = 250 kr. Vi tar også med fôrleverandøren: 10 - 0 = 10 kr. Sum: 10 + 40 + 40 + 160 + 250 = 500 kr. Summen av bearbeidingsverdiene (500 kr) er nøyaktig lik sluttprisen forbrukeren betaler. Dette er prinsippet bak produksjonsmetoden for BNP-beregning: vi unngår dobbelttelling ved å bare telle verdiskapingen i hvert ledd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-3-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'soe-3-5-ex-7',
        number: '3.5.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kina har verdens nest største BNP (samlet), men ligger mye lavere rangert på BNP per innbygger. Samtidig har Kinas BNP per innbygger i PPP økt dramatisk de siste 30 årene. Forklar hva disse ulike BNP-målene forteller oss om Kinas økonomi.',
        hints: [
          'Tenk på forskjellen mellom samlet BNP og BNP per innbygger (befolkningsstørrelse)',
          'PPP justerer for prisnivå - Kina har lave priser',
        ],
        solution: 'Kinas store samlede BNP skyldes den enorme befolkningen (ca. 1,4 milliarder). Når vi deler på innbyggertallet, er BNP per innbygger mye lavere enn i rike land. PPP-justering gir et høyere tall for Kina enn valutakurs fordi prisnivået i Kina er lavt - en kineser kan kjøpe mye for sin inntekt lokalt. Den kraftige økningen i BNP per innbygger PPP over 30 år (fra ca. 1 000 til over 20 000 dollar) reflekterer Kinas enorme økonomiske vekst og hundrevis av millioner løftet ut av fattigdom. Samlet BNP viser at Kina er en økonomisk stormakt; BNP per innbygger viser at det fortsatt er et mellominntektsland; PPP viser at kjøpekraften er bedre enn valutakursen tilsier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'soe-3-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- **Nasjonalregnskapet** er et helhetlig system for å registrere all økonomisk aktivitet, utarbeidet av SSB etter internasjonale standarder.
- **Bearbeidingsverdi** = Produksjonsverdi - Vareinnsats. Summen av bearbeidingsverdiene i alle ledd er lik verdien av sluttproduktet.
- **BNP per innbygger** gir et bedre bilde av levestandard enn samlet BNP, men skjuler fordelingen.
- **Kjøpekraftsparitet (PPP)** justerer for prisforskjeller mellom land og gir et mer realistisk bilde av faktisk kjøpekraft.
- Norge har høyere BNP per innbygger i valutakurs enn i PPP fordi prisnivået er høyt.
- Ulike BNP-mål (samlet, per innbygger, PPP) gir ulike perspektiver, og alle har sin nytte.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// SAMLING: Del 3 kapitler
// ============================================================================

export const SAMFOKONOMI_1_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFOKONOMI_1_3_1, CHAPTER_SAMFOKONOMI_1_3_2, CHAPTER_SAMFOKONOMI_1_3_3,
  CHAPTER_SAMFOKONOMI_1_3_4, CHAPTER_SAMFOKONOMI_1_3_5,
];
