/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnsøkonomi 1 (VG2 programfag)
 *
 * Seksjon 6: Penger og priser (Kapittel 6.1–6.5)
 * Denne filen inneholder kapittel 6.1–6.5 (komplett).
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 6.1: Penger og pengesystemet
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_6_1: TextbookChapter = {
  id: 'samfokonomi-1-6-1',
  courseId: 'samfokonomi-1',
  chapterNumber: '6.1',
  title: 'Penger og pengesystemet',
  description: 'Pengers funksjoner, pengemengden, sentralbanken og brøkdelsreservebankvesenet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for hvordan prisstigning måles, og drøfte årsaker til og konsekvenser av prisstigning',
    'vurdere finansmarkedenes muligheter og utfordringer for utviklingen av samfunnsøkonomien',
  ],
  content: [
    // --- INTRO ---
    {
      id: 'soe-6-1-intro',
      type: 'text',
      content: `## Penger og pengesystemet

Hva er egentlig penger? De fleste av oss bruker penger hver dag uten å tenke over hva de er. Vi betaler med kort, Vipps eller kontanter, og tar det for gitt at betalingen aksepteres. Men penger er ikke en selvfølge. Gjennom historien har samfunn brukt alt fra skjell og gullmynter til digitale tall på en skjerm.

I dette kapittelet skal vi se nærmere på hva penger er, hvilke funksjoner de fyller, og hvordan det moderne pengesystemet fungerer. Vi skal også forstå sentralbankens rolle og hvordan bankene faktisk skaper nye penger gjennom utlån.`
    },

    // --- BLOKK 1: Hva er penger? ---
    {
      id: 'soe-6-1-def-1',
      type: 'definition',
      title: 'Penger',
      content: `**Penger** er ethvert betalingsmiddel som er allment akseptert i bytte mot varer og tjenester, og som kan brukes til å gjøre opp gjeld.

Penger trenger ikke ha egen bruksverdi. Det avgjørende er at folk har **tillit** til at pengene kan brukes som betaling. I dag har norske kroner verdi fordi staten garanterer for dem, og fordi alle i samfunnet aksepterer dem som betalingsmiddel.`
    },
    {
      id: 'soe-6-1-def-2',
      type: 'definition',
      title: 'Pengers tre funksjoner',
      content: `Penger fyller tre sentrale funksjoner i økonomien:

**1. Betalingsmiddel (byttemiddel)**
Penger gjør det mulig å handle uten å bytte vare mot vare (byttehandel). I stedet for at en baker må finne en skomaker som tilfeldigvis trenger brød, kan bakeren selge brød mot penger og bruke pengene til å kjøpe sko.

**2. Verdioppbevaringsmiddel**
Penger gjør det mulig å lagre kjøpekraft over tid. Du kan tjene penger i dag og bruke dem neste måned. Forutsetningen er at pengene beholder verdien sin – noe som trues av inflasjon.

**3. Måleenhet (regneenhet)**
Penger gir oss en felles målestokk for å sammenligne verdien av ulike varer og tjenester. I stedet for å angi prisen på en bil i antall brød, kan vi angi alle priser i kroner.`
    },
    {
      id: 'soe-6-1-example-1',
      type: 'example',
      title: 'Byttehandel uten penger',
      problem: 'Tenk deg et samfunn uten penger der en bonde har korn og trenger klær, mens en skredder har klær og trenger fisk. Forklar problemet som oppstår og hvordan penger løser det.',
      solution: `**Problemet med byttehandel:**
Byttehandel krever det økonomer kaller **dobbelt sammentreff av behov** – begge parter må ha noe den andre vil ha, til rett tid og i rett mengde. Bonden har korn, men skredderen vil ha fisk, ikke korn. Bonden må først finne en fisker som vil ha korn, bytte til seg fisk, og deretter bytte fisken mot klær.

**Hvordan penger løser problemet:**
Med penger kan bonden selge korn til hvem som helst som vil ha korn, motta penger, og deretter bruke pengene til å kjøpe klær hos skredderen. Penger fjerner kravet om dobbelt sammentreff av behov og gjør handelen langt mer effektiv.

Dette er grunnen til at alle kjente sivilisasjoner har utviklet en form for penger – det er en forutsetning for et spesialisert, arbeidsdelt samfunn.`
    },
    {
      id: 'soe-6-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-6-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av pengers funksjoner gjør det mulig å sammenligne verdien av ulike varer og tjenester?',
        options: [
          { id: 'a', text: 'Betalingsmiddel', isCorrect: false },
          { id: 'b', text: 'Verdioppbevaringsmiddel', isCorrect: false },
          { id: 'c', text: 'Måleenhet (regneenhet)', isCorrect: true },
          { id: 'd', text: 'Investeringsmiddel', isCorrect: false },
        ],
        solution: 'Måleenhet (regneenhet) er funksjonen som gjør det mulig å sammenligne verdien av ulike varer og tjenester ved å angi alle priser i samme enhet, for eksempel norske kroner. Uten denne funksjonen måtte vi hatt en egen bytterelasjon for hvert eneste varepar.'
      }
    },

    // --- BLOKK 2: Pengemengden ---
    {
      id: 'soe-6-1-def-3',
      type: 'definition',
      title: 'Pengemengden',
      content: `**Pengemengden** er den totale mengden penger som er i omløp i økonomien. Vi deler pengemengden i ulike mål:

**M0 (basispengemengden):**
Sedler og mynter i omløp + bankenes innskudd i Norges Bank. Dette er de pengene sentralbanken har direkte kontroll over.

**M1 (smalt pengemål):**
Sedler og mynter i omløp + innskudd på transaksjonskontoer (brukskontoer). Dette er penger som umiddelbart kan brukes til betaling.

**M2 (bredt pengemål):**
M1 + bankinnskudd med bindingstid. Dette inkluderer sparepenger som kan gjøres tilgjengelige relativt raskt.

I Norge er det M2 som oftest brukes som mål på pengemengden. I 2024 utgjorde M2 om lag 2 800 milliarder kroner.`
    },
    {
      id: 'soe-6-1-example-2',
      type: 'example',
      title: 'Kontanter vs. digitale penger',
      problem: 'Bare rundt 2 prosent av pengemengden i Norge er fysiske sedler og mynter. Resten er digitale tall i bankenes datasystemer. Forklar hva dette betyr for pengesystemet.',
      solution: `**Kontantenes rolle i dag:**
Selv om kontanter utgjør en svært liten del av pengemengden, er de det eneste betalingsmiddelet som er direkte utstedt av sentralbanken. Digitale penger på bankkontoer er derimot **fordringer på bankene** – det vil si at banken skylder deg pengene.

**Hva dette betyr:**
- Nesten alle penger i omløp er skapt av private banker gjennom utlån
- Pengene eksisterer som elektroniske tall, ikke fysiske gjenstander
- Systemet hviler på tillit til bankene og til sentralbanken som garantist
- Hvis alle bankkunder samtidig ville ta ut kontanter, ville bankene ikke ha nok (dette kalles en «bank run»)

**Konsekvens:**
Denne strukturen gjør regulering og tilsyn med bankene svært viktig. Innskuddsgarantiordningen (opptil 2 millioner kroner per bank per kunde) er et viktig tillitsbyggende tiltak.`
    },
    {
      id: 'soe-6-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-6-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva inngår i det smale pengemålet M1?',
        options: [
          { id: 'a', text: 'Bare sedler og mynter i omløp', isCorrect: false },
          { id: 'b', text: 'Sedler og mynter i omløp + innskudd på transaksjonskontoer', isCorrect: true },
          { id: 'c', text: 'Alle bankinnskudd, inkludert fastrenteinnskudd og aksjer', isCorrect: false },
          { id: 'd', text: 'Bare bankenes innskudd i Norges Bank', isCorrect: false },
        ],
        solution: 'M1 (det smale pengemålet) omfatter sedler og mynter i omløp pluss innskudd på transaksjonskontoer (brukskontoer). Dette er penger som umiddelbart kan brukes til betaling. Bankinnskudd med bindingstid regnes til M2, mens bankenes innskudd i sentralbanken regnes til M0.'
      }
    },

    // --- BLOKK 3: Sentralbanken og bankvesenet ---
    {
      id: 'soe-6-1-def-4',
      type: 'definition',
      title: 'Sentralbanken',
      content: `**Sentralbanken** (i Norge: **Norges Bank**) er statens bank og bankenes bank. Norges Bank har flere viktige oppgaver:

**1. Utsteder av sedler og mynter**
Norges Bank har enerett til å utstede norske sedler og mynter.

**2. Bankenes bank**
Alle norske banker har konto i Norges Bank og gjør opp betalinger seg imellom via sentralbanken.

**3. Pengepolitikk**
Norges Bank setter styringsrenten (foliorenten) for å påvirke prisutviklingen og den økonomiske aktiviteten.

**4. Finansiell stabilitet**
Norges Bank overvåker det finansielle systemet og kan gripe inn ved kriser, blant annet som «lender of last resort» (siste utvei for lån til banker).

**5. Forvaltning av Statens pensjonsfond utland (Oljefondet)**
Norges Bank Investment Management forvalter verdens største statlige investeringsfond.`
    },
    {
      id: 'soe-6-1-def-5',
      type: 'definition',
      title: 'Brøkdelsreservebankvesenet',
      content: `**Brøkdelsreservebankvesenet** (fractional reserve banking) er systemet der bankene bare holder en **brøkdel** av innskuddene som reserver, og låner ut resten.

**Hvordan det fungerer:**
1. Du setter inn 1 000 kr i banken
2. Banken holder f.eks. 10 % (100 kr) som reserve
3. Banken låner ut 900 kr til en annen kunde
4. Denne kunden bruker pengene, og de havner som innskudd i en annen bank
5. Den nye banken låner igjen ut 90 % av innskuddet

**Pengeskaping:**
Gjennom denne prosessen skaper bankene nye penger. De opprinnelige 1 000 kr kan gjennom gjentatte utlån og innskudd bli til mange tusen kroner i total pengemengde. Denne prosessen kalles **pengemultiplikatoren**.

**Pengemultiplikatoren:**
Hvis reservekravet er *r*, kan den maksimale pengemengden som skapes av et innskudd beregnes som:
$$\\text{Maks pengemengde} = \\frac{\\text{Opprinnelig innskudd}}{r}$$

Med 10 % reservekrav og 1 000 kr i opprinnelig innskudd: $1000 / 0{,}10 = 10\\,000$ kr.`
    },
    {
      id: 'soe-6-1-example-3',
      type: 'example',
      title: 'Pengeskaping i praksis',
      problem: 'Anta at en kunde setter inn 500 000 kr i Bank A, og at reservekravet er 5 %. Vis hvordan pengeskaping fungerer gjennom de tre første rundene med utlån.',
      solution: `**Runde 1 – Bank A:**
- Innskudd: 500 000 kr
- Reserve (5 %): 25 000 kr
- Utlån: 475 000 kr

**Runde 2 – Bank B:**
Låntakeren bruker 475 000 kr, som havner som innskudd i Bank B.
- Innskudd: 475 000 kr
- Reserve (5 %): 23 750 kr
- Utlån: 451 250 kr

**Runde 3 – Bank C:**
- Innskudd: 451 250 kr
- Reserve (5 %): 22 562,50 kr
- Utlån: 428 687,50 kr

**Totalt etter tre runder:**
- Totale innskudd: 500 000 + 475 000 + 451 250 = 1 426 250 kr
- Totale reserver: 25 000 + 23 750 + 22 562,50 = 71 312,50 kr
- Totale utlån: 475 000 + 451 250 + 428 687,50 = 1 354 937,50 kr

**Maksimal pengemengde (etter uendelig mange runder):**
$500\\,000 / 0{,}05 = 10\\,000\\,000$ kr

De opprinnelige 500 000 kronene kan altså teoretisk skape opptil 10 millioner kroner i total pengemengde.`
    },
    {
      id: 'soe-6-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-6-1-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Et innskudd på 200 000 kr plasseres i en bank. Reservekravet er 10 %. Hva er den maksimale totale pengemengden som kan skapes?',
        options: [
          { id: 'a', text: '200 000 kr', isCorrect: false },
          { id: 'b', text: '1 000 000 kr', isCorrect: false },
          { id: 'c', text: '2 000 000 kr', isCorrect: true },
          { id: 'd', text: '20 000 000 kr', isCorrect: false },
        ],
        solution: 'Med pengemultiplikatoren: Maks pengemengde = Innskudd / Reservekrav = 200 000 / 0,10 = 2 000 000 kr. De opprinnelige 200 000 kronene kan altså i teorien skape en total pengemengde på 2 millioner kroner gjennom gjentatte runder med utlån og innskudd i banksystemet.'
      }
    },
    {
      id: 'soe-6-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-6-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor tillit er avgjørende for at moderne penger skal fungere. Hva kan skje dersom folk mister tilliten til pengene eller banksystemet? Bruk gjerne eksempler fra virkeligheten.',
        hints: ['Tenk på hva som skjer under en «bank run», og hva som skjedde i Zimbabwe eller Venezuela.'],
        solution: `**Tillit som grunnlag for pengesystemet:**
Moderne penger (fiatpenger) har ingen egen bruksverdi – de er papir eller digitale tall. Verdien avhenger helt av at folk stoler på at pengene kan brukes som betaling i fremtiden. Denne tilliten hviler på:
- Statens garanti og lovgivning (tvungent betalingsmiddel)
- Sentralbankens pengepolitikk (stabilt prisnivå)
- Innskuddsgarantiordninger (sikrer bankinnskudd)
- Et velfungerende rettssystem

**Hva skjer når tilliten svikter:**
- **Bank run:** Hvis kundene frykter at banken ikke kan betale, vil alle forsøke å ta ut pengene sine samtidig. Fordi banken bare holder en brøkdel som reserve, kan den ikke betale alle. Eksempel: Northern Rock i Storbritannia (2007).
- **Hyperinflasjon:** Hvis folk mister tilliten til at pengene beholder verdien, vil alle forsøke å bruke dem så raskt som mulig, noe som akselererer prisstigningen. Eksempel: Zimbabwe (2008) og Venezuela (2018–).
- **Valutakollaps:** Utenlandske investorer kan trekke seg ut, og valutaen kan falle dramatisk i verdi.`
      }
    },

    // --- Oppsummering ---
    {
      id: 'soe-6-1-summary',
      type: 'text',
      content: `### Oppsummering

- **Penger** er ethvert allment akseptert betalingsmiddel. Moderne penger (fiatpenger) har verdi basert på tillit, ikke egen bruksverdi.
- Penger fyller tre funksjoner: **betalingsmiddel**, **verdioppbevaringsmiddel** og **måleenhet**.
- **Pengemengden** måles i ulike mål: M0 (basispengemengden), M1 (smalt) og M2 (bredt). I Norge er M2 det vanligste målet.
- **Norges Bank** er Norges sentralbank og har ansvar for pengepolitikk, finansiell stabilitet og utstedelse av sedler og mynter.
- Gjennom **brøkdelsreservebankvesenet** skaper bankene nye penger ved å låne ut mesteparten av innskuddene. **Pengemultiplikatoren** viser hvordan et enkelt innskudd kan bli mangedoblet i den totale pengemengden.
- Hele pengesystemet hviler på **tillit** – tillit til pengene, til bankene og til sentralbanken.`
    },

    // --- Samleoppgaver ---
    {
      id: 'soe-6-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-6-1-ex-5',
        number: '5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med at Norges Bank er «bankenes bank»?',
        options: [
          { id: 'a', text: 'Norges Bank eier alle norske banker', isCorrect: false },
          { id: 'b', text: 'Alle norske banker har konto i Norges Bank og gjør opp betalinger seg imellom der', isCorrect: true },
          { id: 'c', text: 'Norges Bank bestemmer alle rentesatser i alle banker', isCorrect: false },
          { id: 'd', text: 'Norges Bank låner alltid ut penger til folk som får avslag i vanlige banker', isCorrect: false },
        ],
        solution: 'At Norges Bank er «bankenes bank» betyr at alle norske banker har konto i Norges Bank. Når du betaler med kort fra en bank til en mottaker i en annen bank, gjøres det endelige oppgjøret mellom bankene via deres kontoer i Norges Bank. Sentralbanken fungerer også som «lender of last resort» – den kan gi nødlån til banker i krise.'
      }
    },
    {
      id: 'soe-6-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-6-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft fordeler og ulemper ved brøkdelsreservebankvesenet. Kunne vi hatt et banksystem der bankene måtte holde 100 % av innskuddene som reserver?',
        hints: ['Tenk på hva som skjer med tilgangen på lån og kreditt dersom bankene ikke kan låne ut innskudd.'],
        solution: `**Fordeler med brøkdelsreservesystemet:**
- Bankene kan formidle kapital fra sparere til investorer, noe som fremmer økonomisk vekst
- Bedrifter og husholdninger får tilgang til lån og kreditt
- Pengemengden kan tilpasses økonomiens behov
- Banksystemet skaper likviditet i økonomien

**Ulemper med brøkdelsreservesystemet:**
- Bankene er sårbare for «bank runs» fordi de ikke har nok reserver til å betale ut alle innskudd samtidig
- Bankene kan ta for stor risiko i jakten på avkastning
- Ukontrollert pengeskaping kan føre til inflasjon og bobler
- Systemet krever omfattende regulering og tilsyn

**100 % reservebankvesen:**
I et slikt system ville bankene fungere som rene oppbevaringssteder for penger. De kunne ikke låne ut innskudd, og all kreditt måtte komme fra sentralbanken eller andre kilder. Fordelen ville være full sikkerhet for innskudd, men ulempen ville være kraftig redusert tilgang på lån og kreditt, noe som trolig ville bremse økonomisk vekst betydelig.`
      }
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.2: Inflasjon og prisstigning
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_6_2: TextbookChapter = {
  id: 'samfokonomi-1-6-2',
  courseId: 'samfokonomi-1',
  chapterNumber: '6.2',
  title: 'Inflasjon og prisstigning',
  description: 'Konsumprisindeksen, årsaker til inflasjon, hyperinflasjon og deflasjon.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for hvordan prisstigning måles, og drøfte årsaker til og konsekvenser av prisstigning',
  ],
  content: [
    // --- INTRO ---
    {
      id: 'soe-6-2-intro',
      type: 'text',
      content: `## Inflasjon og prisstigning

«Alt blir bare dyrere og dyrere.» Det er en vanlig klage, og den er stort sett berettiget: Over tid stiger prisene på de fleste varer og tjenester. Men hvorfor skjer dette? Og er prisstigning alltid negativt?

I dette kapittelet skal vi se på hvordan prisstigning måles, hva som forårsaker inflasjon, og hvilke konsekvenser den har. Vi skal også se på ytterpunktene: hyperinflasjon og deflasjon.`
    },

    // --- BLOKK 1: Måling av prisstigning ---
    {
      id: 'soe-6-2-def-1',
      type: 'definition',
      title: 'Inflasjon',
      content: `**Inflasjon** er en vedvarende økning i det generelle prisnivået i økonomien. Det betyr at prisene på varer og tjenester i gjennomsnitt stiger over tid.

Merk at inflasjon ikke betyr at alle priser stiger. Noen priser kan falle (for eksempel elektronikk), mens andre stiger (for eksempel husleie). Inflasjon handler om det **gjennomsnittlige** prisnivået.

**Inflasjonsrate** er den prosentvise endringen i prisnivået over en bestemt periode, vanligvis ett år:

$$\\text{Inflasjonsrate} = \\frac{\\text{Prisnivå i år} - \\text{Prisnivå i fjor}}{\\text{Prisnivå i fjor}} \\times 100\\%$$`
    },
    {
      id: 'soe-6-2-def-2',
      type: 'definition',
      title: 'Konsumprisindeksen (KPI)',
      content: `**Konsumprisindeksen (KPI)** er det viktigste målet på prisutviklingen i Norge. Den måles av Statistisk sentralbyrå (SSB) og viser prisutviklingen for en «varekurv» som representerer forbruket til en gjennomsnittlig norsk husholdning.

**Hvordan KPI beregnes:**
1. SSB definerer en **varekurv** med rundt 650 varer og tjenester
2. Varene vektes etter hvor stor andel de utgjør av husholdningsbudsjettet (f.eks. bolig ca. 25 %, mat ca. 12 %)
3. Prisene registreres månedlig fra butikker, nettbutikker og leverandører
4. Prisendringen beregnes som et veid gjennomsnitt

**KPI-JAE (justert for avgiftsendringer og energipriser):**
Norges Bank bruker KPI-JAE som operativt mål for pengepolitikken. Denne indeksen fjerner effekten av endringer i avgifter og energipriser, som kan svinge kraftig uten å gjenspeile underliggende pristrend.

**Inflasjonsmålet:** Norges Bank styrer etter et inflasjonsmål på **2 prosent** årlig (KPI-JAE).`
    },
    {
      id: 'soe-6-2-example-1',
      type: 'example',
      title: 'Beregning av realverdi',
      problem: 'I 2010 kostet en kinobillett 95 kr. I 2024 kostet den 155 kr. KPI var 113,3 i 2010 og 141,2 i 2024 (med 2015 = 100). Har kinobilletten blitt dyrere eller billigere i realverdi?',
      solution: `**Steg 1: Beregn den generelle prisstigningen (KPI-endring):**
$$\\frac{141{,}2 - 113{,}3}{113{,}3} \\times 100\\% = 24{,}6\\%$$

**Steg 2: Beregn prisstigningen for kinobilletten:**
$$\\frac{155 - 95}{95} \\times 100\\% = 63{,}2\\%$$

**Steg 3: Sammenlign:**
Kinobilletten har steget 63,2 %, mens det generelle prisnivået har steget 24,6 %. Kinobilletten har dermed blitt **dyrere i realverdi** – den har steget mer enn den generelle prisstigningen.

**Alternativ beregning – realverdi av 95 kr fra 2010 i 2024-kroner:**
$$95 \\times \\frac{141{,}2}{113{,}3} = 118{,}3 \\text{ kr}$$

Kinobilletten «burde» kostet 118,30 kr i 2024 hvis den bare fulgte den generelle prisstigningen, men den koster 155 kr. Den er altså blitt relativt dyrere.`
    },
    {
      id: 'soe-6-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-6-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva måler konsumprisindeksen (KPI)?',
        options: [
          { id: 'a', text: 'Prisutviklingen på boligmarkedet', isCorrect: false },
          { id: 'b', text: 'Prisutviklingen for en representativ varekurv for norske husholdninger', isCorrect: true },
          { id: 'c', text: 'Prisutviklingen på råvarer som olje og gass', isCorrect: false },
          { id: 'd', text: 'Prisutviklingen for bedrifters produksjonskostnader', isCorrect: false },
        ],
        solution: 'KPI måler prisutviklingen for en varekurv med rundt 650 varer og tjenester som representerer forbruket til en gjennomsnittlig norsk husholdning. Varene er vektet etter hvor stor andel de utgjør av budsjettet. SSB oppdaterer vektene årlig for å gjenspeile endringer i forbruksmønsteret.'
      }
    },

    // --- BLOKK 2: Årsaker til inflasjon ---
    {
      id: 'soe-6-2-def-3',
      type: 'definition',
      title: 'Etterspørselsdrevet inflasjon (demand-pull)',
      content: `**Etterspørselsdrevet inflasjon** oppstår når den samlede etterspørselen i økonomien vokser raskere enn produksjonskapasiteten. Når det er flere som vil kjøpe varer og tjenester enn det som produseres, presses prisene opp.

**Årsaker kan være:**
- Sterk lønnsvekst som gir økt kjøpekraft
- Økte offentlige utgifter (ekspansiv finanspolitikk)
- Lav rente som stimulerer forbruk og investeringer
- Sterk vekst i pengemengden
- Økt optimisme blant forbrukere og bedrifter

**Mekanismen:**
Samlet etterspørsel > Samlet tilbud → Prispress oppover

Etterspørselsdrevet inflasjon oppstår typisk i høykonjunkturer, når økonomien er nær eller over kapasitetsgrensen.`
    },
    {
      id: 'soe-6-2-def-4',
      type: 'definition',
      title: 'Kostnadsdrevet inflasjon (cost-push)',
      content: `**Kostnadsdrevet inflasjon** oppstår når bedriftenes produksjonskostnader øker, og kostnadene veltes over på forbrukerne gjennom høyere priser.

**Årsaker kan være:**
- Økte råvarepriser (f.eks. olje, gass, metaller)
- Høyere lønnskostnader (lønn-pris-spiral)
- Svekket valutakurs (dyrere import)
- Økte avgifter (moms, miljøavgifter)
- Forstyrrelser i forsyningskjeder (pandemi, krig)

**Eksempel:** Da Russland invaderte Ukraina i 2022, steg energiprisene kraftig i Europa. Dyrere energi ga økte produksjonskostnader for bedrifter, som igjen ga høyere priser på varer og tjenester.

**Lønn-pris-spiral:**
Kostnadsdrevet inflasjon kan forsterke seg selv: Høyere priser → arbeidstakere krever høyere lønn → høyere lønnskostnader → enda høyere priser → enda høyere lønnskrav osv.`
    },
    {
      id: 'soe-6-2-example-2',
      type: 'example',
      title: 'Inflasjonen i Norge 2021–2023',
      problem: 'I 2021 var inflasjonen i Norge 3,5 %, i 2022 steg den til 5,8 %, og i 2023 var den 5,5 %. Forklar hvilke faktorer som bidro til den høye inflasjonen i denne perioden.',
      solution: `**Flere faktorer virket sammen:**

**Kostnadsdrevet inflasjon:**
- **Energipriser:** Krigen i Ukraina (fra februar 2022) ga kraftig økte gass- og strømpriser i Europa
- **Svekket kronekurs:** Norske kroner svekket seg markant i 2022–2023, noe som gjorde importvarer dyrere
- **Forstyrrelser i forsyningskjeder:** Ettervirkninger av koronapandemien ga mangel på råvarer, halvledere og transportkapasitet
- **Økte matpriser:** Krigen i Ukraina rammet kornproduksjonen og ga høyere matvarepriser globalt

**Etterspørselsdrevet inflasjon:**
- Sterk oppgang etter pandemien («gjenåpningseffekt»)
- Lavt rentenivå (styringsrenten var 0 % til september 2021)
- Høy sparerate under pandemien – oppdemmet etterspørsel ble utløst

**Konklusjon:** Inflasjonen i 2021–2023 var drevet av en kombinasjon av kostnadssjokk (energi, valuta, forsyningskjeder) og etterspørselspress (gjenåpning, lav rente). Norges Bank responderte med å heve styringsrenten kraftig.`
    },
    {
      id: 'soe-6-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-6-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken type inflasjon oppstår når økte råvarepriser fører til at bedriftene setter opp prisene?',
        options: [
          { id: 'a', text: 'Etterspørselsdrevet inflasjon', isCorrect: false },
          { id: 'b', text: 'Kostnadsdrevet inflasjon', isCorrect: true },
          { id: 'c', text: 'Strukturell inflasjon', isCorrect: false },
          { id: 'd', text: 'Importert deflasjon', isCorrect: false },
        ],
        solution: 'Når økte råvarepriser fører til høyere produksjonskostnader som veltes over på forbrukerne, er det kostnadsdrevet inflasjon (cost-push). Bedriftene setter opp prisene for å dekke de økte kostnadene. Etterspørselsdrevet inflasjon oppstår derimot når etterspørselen overstiger tilbudet.'
      }
    },

    // --- BLOKK 3: Konsekvenser, hyperinflasjon og deflasjon ---
    {
      id: 'soe-6-2-text-1',
      type: 'text',
      content: `### Konsekvenser av inflasjon

**For låntakere og sparere:**
- Moderat inflasjon er gunstig for **låntakere** fordi lånets realverdi synker over tid
- Inflasjon er ugunstig for **sparere** dersom renten på sparekontoen er lavere enn inflasjonen (negativ realrente)

**For bedrifter:**
- Usikkerhet om fremtidige priser gjør det vanskelig å planlegge investeringer
- Hyppige prisendringer gir økte «menykostnader» (kostnader ved å endre priser)

**For arbeidstakere:**
- Dersom lønnen ikke øker like raskt som prisene, synker **reallønnen** (kjøpekraften)
- Inflasjon rammer særlig de med faste inntekter (pensjonister, trygdemottakere)

**For samfunnet:**
- Vilkårlig omfordeling av rikdom fra sparere til låntakere
- Redusert tillit til pengene som verdioppbevaringsmiddel
- Økt usikkerhet i økonomien`
    },
    {
      id: 'soe-6-2-def-5',
      type: 'definition',
      title: 'Hyperinflasjon',
      content: `**Hyperinflasjon** er ekstremt høy og ukontrollerbar inflasjon, vanligvis definert som over 50 % prisstigning per måned.

**Kjennetegn:**
- Prisene stiger daglig eller til og med flere ganger om dagen
- Folk forsøker å kvitte seg med penger så raskt som mulig («hot potato»-effekt)
- Pengene mister sin funksjon som verdioppbevaringsmiddel
- Byttehandel og fremmed valuta overtar for den nasjonale valutaen

**Historiske eksempler:**
- **Tyskland 1923:** Priser doblet seg hver 3.–4. dag. En brødskive kostet milliarder av mark.
- **Zimbabwe 2008:** Månedlig inflasjon nådde 79,6 milliarder prosent i november 2008. Sentralbanken trykket 100 billioner dollar-sedler.
- **Venezuela 2018–:** Inflasjon på over 1 000 000 % i 2018.

**Årsak:** Hyperinflasjon skyldes nesten alltid at staten finansierer utgiftene ved å trykke penger i stedet for å skatte inn inntekter.`
    },
    {
      id: 'soe-6-2-def-6',
      type: 'definition',
      title: 'Deflasjon',
      content: `**Deflasjon** er en vedvarende nedgang i det generelle prisnivået – det motsatte av inflasjon.

**Hvorfor deflasjon er problematisk:**
- Forbrukere utsetter kjøp fordi de forventer lavere priser i morgen → redusert etterspørsel
- Bedriftenes inntekter faller, men gjelden er fast → økt reell gjeldsbyrde
- Bedrifter kutter kostnader og sier opp ansatte → økt arbeidsledighet
- Økonomien kan havne i en **deflasjonsspiral**: fallende priser → lavere etterspørsel → lavere produksjon → flere oppsigelser → enda lavere etterspørsel

**Historisk eksempel:** Japan opplevde deflasjon i store deler av perioden 1990–2012 (det «tapte tiåret»), med stagnasjon og lav vekst.

Deflasjon regnes av de fleste økonomer som **mer skadelig** enn moderat inflasjon, fordi det er vanskeligere å bekjempe med pengepolitikk (renten kan ikke settes lavere enn null).`
    },
    {
      id: 'soe-6-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-6-2-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor kan deflasjon føre til en negativ spiral i økonomien?',
        options: [
          { id: 'a', text: 'Fordi lavere priser gjør at bedriftene tjener mer og investerer for mye', isCorrect: false },
          { id: 'b', text: 'Fordi folk utsetter kjøp i påvente av enda lavere priser, noe som reduserer etterspørselen ytterligere', isCorrect: true },
          { id: 'c', text: 'Fordi sentralbanken alltid setter renten til null under deflasjon', isCorrect: false },
          { id: 'd', text: 'Fordi deflasjon fører til at folk tar opp mer gjeld', isCorrect: false },
        ],
        solution: 'Under deflasjon utsetter folk kjøp fordi de forventer at prisene vil falle videre. Dette reduserer etterspørselen, som igjen fører til ytterligere prisfall, lavere produksjon, oppsigelser og enda lavere etterspørsel. Denne selvforsterkende spiralen er svært vanskelig å bryte, fordi sentralbanken ikke kan sette renten under null (den nedre grensen).'
      }
    },

    // --- Oppsummering ---
    {
      id: 'soe-6-2-summary',
      type: 'text',
      content: `### Oppsummering

- **Inflasjon** er en vedvarende økning i det generelle prisnivået, målt ved **konsumprisindeksen (KPI)**.
- KPI måler prisutviklingen for en varekurv med rundt 650 varer og tjenester. Norges Bank bruker **KPI-JAE** (justert for avgifter og energipriser) som operativt mål.
- **Etterspørselsdrevet inflasjon** oppstår når etterspørselen vokser raskere enn tilbudet. **Kostnadsdrevet inflasjon** oppstår når økte produksjonskostnader veltes over på forbrukerne.
- Inflasjon omfordeler rikdom fra sparere til låntakere, reduserer kjøpekraften til folk med faste inntekter, og skaper usikkerhet.
- **Hyperinflasjon** (over 50 % per måned) ødelegger pengenes funksjon og skyldes nesten alltid at staten trykker penger for å finansiere utgifter.
- **Deflasjon** (vedvarende prisnedgang) kan utløse en negativ spiral med utsatt forbruk, synkende produksjon og økende arbeidsledighet.`
    },

    // --- Samleoppgaver ---
    {
      id: 'soe-6-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-6-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En arbeidstaker fikk 3 % lønnsvekst i 2023, mens inflasjonen var 5,5 %. Beregn endringen i reallønnen og forklar hva dette betyr for arbeidstakerens kjøpekraft.',
        hints: ['Reallønnsvekst ≈ nominell lønnsvekst minus inflasjonsrate.'],
        solution: `**Beregning:**
Reallønnsvekst ≈ Nominell lønnsvekst − Inflasjon = 3 % − 5,5 % = −2,5 %

**Tolkning:**
Arbeidstakeren fikk en **reallønnsreduksjon** på ca. 2,5 %. Selv om den nominelle lønnen økte med 3 %, steg prisene med 5,5 %. Det betyr at arbeidstakeren kan kjøpe mindre for lønnen sin enn året før – kjøpekraften er redusert.

Hvis arbeidstakeren tjente 500 000 kr, ble lønnen 515 000 kr. Men for å opprettholde kjøpekraften trengte vedkommende 527 500 kr (500 000 × 1,055). Forskjellen på 12 500 kr representerer tapet i kjøpekraft.`
      }
    },
    {
      id: 'soe-6-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-6-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvorfor de fleste sentralbanker har et inflasjonsmål på rundt 2 % i stedet for 0 %. Hva er fordelene med litt inflasjon sammenlignet med prisstabilitet?',
        hints: ['Tenk på faren for deflasjon, nominelle lønninger og pengepolitisk handlingsrom.'],
        solution: `**Grunner til at 2 % inflasjon foretrekkes fremfor 0 %:**

**1. Buffer mot deflasjon:**
Et inflasjonsmål på 2 % gir en sikkerhetsmargin mot deflasjon. Dersom målet var 0 %, ville selv små negative sjokk kunne dytte økonomien over i deflasjon, som er svært skadelig.

**2. Pengepolitisk handlingsrom:**
Med 2 % inflasjon vil den nominelle renten typisk ligge høyere enn ved 0 % inflasjon. Det gir sentralbanken mer rom til å kutte renten i nedgangstider. Ved 0 % inflasjon vil renten ligge nær null, og sentralbanken mister det viktigste virkemiddelet.

**3. Nominelle lønninger er stive nedover:**
Det er vanskelig å kutte nominelle lønninger. Med 2 % inflasjon kan reallønnen justeres nedover uten at den nominelle lønnen kuttes, noe som letter omstilling i arbeidsmarkedet.

**4. Målefeil i KPI:**
KPI kan overvurdere den faktiske prisstigningen litt fordi den ikke fanger opp kvalitetsforbedringer fullt ut. Et mål på 0 % KPI-inflasjon kunne dermed bety reell deflasjon.

**5. «Smøring» i økonomien:**
Moderat inflasjon kan stimulere forbruk og investering, fordi folk vet at pengene mister verdi over tid og dermed velger å bruke dem.`
      }
    },
    {
      id: 'soe-6-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-6-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den vanligste årsaken til hyperinflasjon?',
        options: [
          { id: 'a', text: 'At sentralbanken setter renten for høyt', isCorrect: false },
          { id: 'b', text: 'At staten finansierer utgiftene ved å trykke penger i stedet for å kreve inn skatt', isCorrect: true },
          { id: 'c', text: 'At utenlandske investorer kjøper for mye av landets statsobligasjoner', isCorrect: false },
          { id: 'd', text: 'At landet eksporterer for mye varer til utlandet', isCorrect: false },
        ],
        solution: 'Hyperinflasjon skyldes nesten alltid at staten finansierer store budsjettunderskudd ved å trykke penger (monetær finansiering). Når pengemengden øker mye raskere enn produksjonen av varer og tjenester, faller pengenes verdi raskt, og prisene stiger ukontrollert. Historiske eksempler som Zimbabwe og Venezuela bekrefter dette mønsteret.'
      }
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.3: Pengepolitikk
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_6_3: TextbookChapter = {
  id: 'samfokonomi-1-6-3',
  courseId: 'samfokonomi-1',
  chapterNumber: '6.3',
  title: 'Pengepolitikk',
  description: 'Norges Banks rentesetting, inflasjonsmål, styringsrenten og transmisjonsmekanismen.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for formålet med pengepolitikk og finanspolitikk og hvordan politikken påvirker økonomien',
  ],
  content: [
    // --- INTRO ---
    {
      id: 'soe-6-3-intro',
      type: 'text',
      content: `## Pengepolitikk

Hvordan kan en sentralbank påvirke hele landets økonomi ved å endre et eneste tall – styringsrenten? Pengepolitikken er et av de viktigste verktøyene for å styre den økonomiske utviklingen, og i Norge er det Norges Bank som har ansvaret.

I dette kapittelet skal vi se på hva pengepolitikk er, hvordan Norges Bank setter renten, og hvordan renteendringer påvirker husholdninger, bedrifter og den samlede økonomien.`
    },

    // --- BLOKK 1: Hva er pengepolitikk? ---
    {
      id: 'soe-6-3-def-1',
      type: 'definition',
      title: 'Pengepolitikk',
      content: `**Pengepolitikk** er sentralbankens bruk av virkemidler for å påvirke prisnivået, produksjonen og sysselsettingen i økonomien. Det viktigste virkemiddelet er **styringsrenten**.

**Pengepolitikkens mandat i Norge:**
Norges Bank skal ifølge sentralbankloven sikre **lav og stabil inflasjon**. Det operative målet er en årlig vekst i konsumprisene (KPI-JAE) på **nær 2 prosent** over tid. I tillegg skal pengepolitikken bidra til stabilitet i produksjon og sysselsetting.

**To typer pengepolitikk:**
- **Kontraktiv (stram) pengepolitikk:** Renten settes opp for å dempe etterspørselen og redusere inflasjonen
- **Ekspansiv (løs) pengepolitikk:** Renten settes ned for å stimulere etterspørselen og øke den økonomiske aktiviteten`
    },
    {
      id: 'soe-6-3-def-2',
      type: 'definition',
      title: 'Styringsrenten',
      content: `**Styringsrenten** (foliorenten) er renten bankene får på sine innskudd i Norges Bank (opp til en viss kvote). Den settes av Norges Banks komité for pengepolitikk og finansiell stabilitet, som møtes åtte ganger i året.

**Hvorfor styringsrenten er viktig:**
Styringsrenten påvirker rentene bankene tilbyr sine kunder. Når Norges Bank endrer styringsrenten, endrer bankene normalt sine innskudds- og utlånsrenter i samme retning.

**Rentebane:**
Norges Bank publiserer en **rentebane** – en prognose for hvordan styringsrenten forventes å utvikle seg de neste årene. Rentebanen gir aktørene i økonomien informasjon om sentralbankens planer og bidrar til forutsigbarhet.

**Historisk utvikling:**
- 2008–2009: Renten kuttet fra 5,75 % til 1,25 % under finanskrisen
- 2020: Renten kuttet til 0 % under koronapandemien
- 2021–2024: Renten hevet gradvis til 4,5 % for å bekjempe høy inflasjon`
    },
    {
      id: 'soe-6-3-example-1',
      type: 'example',
      title: 'Hvorfor hevet Norges Bank renten i 2022–2023?',
      problem: 'Forklar hvorfor Norges Bank hevet styringsrenten kraftig fra 0 % i 2021 til 4,5 % i 2023, og hva sentralbanken ønsket å oppnå.',
      solution: `**Bakgrunn:**
Etter koronapandemien var styringsrenten 0 %. Økonomien hentet seg raskt inn, og flere faktorer ga sterk prisvekst:
- Gjenåpningseffekten ga økt etterspørsel
- Forstyrrelser i forsyningskjeder
- Krigen i Ukraina ga høye energipriser
- Svekket kronekurs ga dyrere import

Inflasjonen steg til 5,8 % i 2022 – langt over inflasjonsmålet på 2 %.

**Norges Banks respons:**
Sentralbanken hevet styringsrenten i raskt tempo for å:
1. **Dempe etterspørselen:** Høyere rente gjør det dyrere å låne og mer lønnsomt å spare, noe som reduserer forbruk og investeringer
2. **Styrke kronekursen:** Høyere rente gjør det mer attraktivt å plassere penger i norske kroner, noe som styrker kronen og gjør importvarer billigere
3. **Forankre inflasjonsforventningene:** Ved å vise at sentralbanken tar inflasjon på alvor, hindres en lønn-pris-spiral

**Avveining:**
Norges Bank måtte balansere mellom å bekjempe inflasjon og risikoen for å bremse økonomien for mye, noe som kunne gi økt arbeidsledighet.`
    },
    {
      id: 'soe-6-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-6-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er Norges Banks operative inflasjonsmål?',
        options: [
          { id: 'a', text: '0 prosent årlig vekst i KPI', isCorrect: false },
          { id: 'b', text: 'Nær 2 prosent årlig vekst i KPI-JAE over tid', isCorrect: true },
          { id: 'c', text: '5 prosent årlig vekst i KPI', isCorrect: false },
          { id: 'd', text: 'Norges Bank har ikke noe bestemt inflasjonsmål', isCorrect: false },
        ],
        solution: 'Norges Banks operative mål for pengepolitikken er en årlig vekst i konsumprisene, justert for avgiftsendringer og energipriser (KPI-JAE), på nær 2 prosent over tid. Målet ble innført i 2001 og erstattet det tidligere fastkursmålet. Målet gir en klar referanse for pengepolitiske beslutninger.'
      }
    },

    // --- BLOKK 2: Transmisjonsmekanismen ---
    {
      id: 'soe-6-3-def-3',
      type: 'definition',
      title: 'Transmisjonsmekanismen',
      content: `**Transmisjonsmekanismen** beskriver hvordan en endring i styringsrenten påvirker resten av økonomien. Virkningen går gjennom flere kanaler:

**1. Rentekanalen:**
Styringsrenten → bankenes utlånsrenter → husholdningers og bedrifters lånekostnader → forbruk og investeringer → etterspørsel → prisnivå

**2. Valutakurskanalen:**
Styringsrenten → renteforskjell mot utlandet → kapitalstrømmer → kronekursen → importpriser og eksportkonkurranseevne → prisnivå

**3. Forventningskanalen:**
Styringsrenten og kommunikasjon fra sentralbanken → aktørenes forventninger til fremtidig inflasjon og rente → lønnskrav, prissetting og investeringsbeslutninger

**4. Formueskanalen:**
Styringsrenten → boligpriser og aksjeverdier → husholdningenes formue og «følt» rikdom → forbruk

**Tidsforsinkelse:**
Det tar typisk **1–3 år** før en renteendring har full virkning på inflasjonen. Pengepolitikken må derfor være **fremoverskuende** – sentralbanken setter renten basert på prognoser for fremtidig utvikling.`
    },
    {
      id: 'soe-6-3-example-2',
      type: 'example',
      title: 'Virkningen av en renteøkning',
      problem: 'Norges Bank hever styringsrenten med 0,25 prosentpoeng. Forklar trinn for trinn hvordan dette påvirker en vanlig norsk husholdning med boliglån.',
      solution: `**Trinn 1: Bankene øker utlånsrenten**
Bankene hever boliglånsrenten, typisk med omtrent det samme som styringsrenten (0,25 prosentpoeng). Banken varsler kundene med seks ukers frist.

**Trinn 2: Økte lånekostnader**
En husholdning med 3 millioner kroner i boliglån får økte månedlige renteutgifter:
$3\\,000\\,000 \\times 0{,}0025 / 12 = 625$ kr per måned ekstra.

**Trinn 3: Redusert forbruk**
Husholdningen har 625 kr mindre å bruke på annet forbruk per måned. De kutter kanskje på restaurantbesøk, klær eller ferier.

**Trinn 4: Lavere boligpriser**
Høyere rente gjør det dyrere å betjene boliglån, noe som reduserer etterspørselen etter boliger og kan dempe boligprisene. Husholdningen føler seg «fattigere».

**Trinn 5: Dempet etterspørsel**
Tusenvis av husholdninger gjør det samme. Samlet etterspørsel i økonomien faller, og prispresset reduseres.

**Totalt:** Renteøkningen virker gjennom rentekanalen (høyere lånekostnader), formueskanalen (lavere boligpriser) og forventningskanalen (folk forventer strammere tider og sparer mer).`
    },
    {
      id: 'soe-6-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-6-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva vil en økning i styringsrenten normalt føre til for kronekursen?',
        options: [
          { id: 'a', text: 'Kronekursen svekkes fordi høyere rente gjør norsk økonomi mindre attraktiv', isCorrect: false },
          { id: 'b', text: 'Kronekursen styrkes fordi høyere rente gjør det mer attraktivt å plassere penger i norske kroner', isCorrect: true },
          { id: 'c', text: 'Kronekursen påvirkes ikke av styringsrenten', isCorrect: false },
          { id: 'd', text: 'Kronekursen svekkes alltid når renten endres, uansett retning', isCorrect: false },
        ],
        solution: 'Høyere styringsrente gjør det mer attraktivt for utenlandske investorer å plassere penger i norske kroner, fordi avkastningen øker. Økt etterspørsel etter norske kroner styrker kronekursen. En sterkere krone gjør importvarer billigere, noe som demper inflasjonen. Dette er valutakurskanalen i transmisjonsmekanismen.'
      }
    },
    {
      id: 'soe-6-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-6-3-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor må pengepolitikken være fremoverskuende?',
        options: [
          { id: 'a', text: 'Fordi Norges Bank bare har lov til å endre renten én gang i året', isCorrect: false },
          { id: 'b', text: 'Fordi det tar 1–3 år før en renteendring har full virkning på inflasjonen', isCorrect: true },
          { id: 'c', text: 'Fordi bankene ikke følger styringsrenten med en gang', isCorrect: false },
          { id: 'd', text: 'Fordi inflasjonen alltid er stabil og forutsigbar', isCorrect: false },
        ],
        solution: 'Det tar typisk 1–3 år før en renteendring har full virkning på inflasjonen og økonomien. Derfor kan ikke Norges Bank bare reagere på dagens situasjon – de må sette renten basert på prognoser for fremtidig utvikling. Hvis de venter til inflasjonen allerede er for høy og da hever renten, vil effekten komme for sent og rentene kan bli satt for høyt.'
      }
    },

    // --- Oppsummering ---
    {
      id: 'soe-6-3-summary',
      type: 'text',
      content: `### Oppsummering

- **Pengepolitikk** er sentralbankens bruk av styringsrenten for å påvirke prisnivå, produksjon og sysselsetting.
- Norges Banks operative mål er **nær 2 prosent årlig inflasjon** (KPI-JAE) over tid.
- **Kontraktiv pengepolitikk** (høyere rente) demper etterspørselen og inflasjonen. **Ekspansiv pengepolitikk** (lavere rente) stimulerer økonomien.
- **Transmisjonsmekanismen** beskriver hvordan renteendringer virker gjennom rentekanalen, valutakurskanalen, forventningskanalen og formueskanalen.
- Det tar **1–3 år** før en renteendring har full effekt, og pengepolitikken må derfor være **fremoverskuende**.
- Norges Bank publiserer en **rentebane** som gir markedet informasjon om forventet renteutvikling.`
    },

    // --- Samleoppgaver ---
    {
      id: 'soe-6-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-6-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med «rentekanalen» og «valutakurskanalen» i transmisjonsmekanismen, og gi et eksempel på hvordan hver av dem påvirker inflasjonen.',
        hints: ['Tenk på hvordan renten påvirker husholdningers forbruk, og hvordan renten påvirker kronekursen og dermed importpriser.'],
        solution: `**Rentekanalen:**
Når Norges Bank hever styringsrenten, øker bankenes utlånsrenter. Husholdninger med boliglån får høyere månedlige utgifter og bruker mindre penger på annet forbruk. Bedrifter finner det dyrere å finansiere investeringer og investerer mindre. Samlet etterspørsel i økonomien faller, og prispresset reduseres.
*Eksempel:* En renteøkning på 1 prosentpoeng kan gi en husholdning med 4 mill. kr i boliglån ca. 3 300 kr ekstra i månedlige renteutgifter, noe som reduserer forbruket.

**Valutakurskanalen:**
Høyere rente gjør det mer attraktivt for utenlandske investorer å plassere penger i norske kroner. Økt etterspørsel etter kroner styrker kronekursen. En sterkere krone gjør importvarer billigere, noe som direkte demper inflasjonen.
*Eksempel:* Hvis kronen styrkes 5 % mot euro, blir importerte varer fra eurolandene 5 % billigere, noe som trekker KPI ned.`
      }
    },
    {
      id: 'soe-6-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-6-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Diskuter dilemmaet Norges Bank står overfor når inflasjonen er høy samtidig som økonomien er i ferd med å bremse opp. Hva bør sentralbanken prioritere, og hva er risikoen uansett valg?',
        hints: ['Dette kalles ofte «stagflasjon». Tenk på hva som skjer med arbeidsledigheten dersom renten heves, og hva som skjer med inflasjonen dersom renten holdes lav.'],
        solution: `**Dilemmaet:**
Når inflasjonen er høy og økonomien bremser (stagflasjon), står Norges Bank overfor et klassisk pengepolitisk dilemma:

**Alternativ 1: Heve renten for å bekjempe inflasjon**
- Fordel: Demper inflasjonen og forankrer inflasjonsforventningene
- Risiko: Forsterker den økonomiske nedgangen, øker arbeidsledigheten, kan utløse resesjon

**Alternativ 2: Senke renten for å stimulere økonomien**
- Fordel: Støtter produksjon og sysselsetting
- Risiko: Inflasjonen kan akselerere ytterligere, pengenes verdi faller, og det kan utvikle seg en lønn-pris-spiral

**I praksis:**
Norges Bank vil typisk veie disse hensynene mot hverandre. Dersom inflasjonsforventningene truer med å bli «avankret» (folk begynner å forvente varig høy inflasjon), vil sentralbanken normalt prioritere å bekjempe inflasjonen – selv om det koster kortsiktig vekst og sysselsetting. Stabil og forutsigbar inflasjon er sett på som en forutsetning for langsiktig økonomisk vekst.`
      }
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.4: Finanspolitikk
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_6_4: TextbookChapter = {
  id: 'samfokonomi-1-6-4',
  courseId: 'samfokonomi-1',
  chapterNumber: '6.4',
  title: 'Finanspolitikk',
  description: 'Statens finanspolitikk, automatiske stabilisatorer, diskresjonær politikk og multiplikatoreffekten.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for formålet med pengepolitikk og finanspolitikk og hvordan politikken påvirker økonomien',
  ],
  content: [
    // --- INTRO ---
    {
      id: 'soe-6-4-intro',
      type: 'text',
      content: `## Finanspolitikk

Mens pengepolitikken styres av Norges Bank, er det Stortinget og regjeringen som styrer **finanspolitikken**. Gjennom statsbudsjettet bestemmer politikerne hvor mye staten skal bruke og hvor mye den skal kreve inn i skatter og avgifter.

Finanspolitikk handler om å bruke statens inntekter og utgifter som verktøy for å påvirke den økonomiske utviklingen. I dette kapittelet skal vi se på hvordan finanspolitikken fungerer, hva automatiske stabilisatorer er, og hvordan den såkalte multiplikatoreffekten virker.`
    },

    // --- BLOKK 1: Hva er finanspolitikk? ---
    {
      id: 'soe-6-4-def-1',
      type: 'definition',
      title: 'Finanspolitikk',
      content: `**Finanspolitikk** er statens bruk av offentlige inntekter (skatter og avgifter) og utgifter (offentlig forbruk, investeringer og overføringer) for å påvirke den økonomiske aktiviteten.

**Ekspansiv finanspolitikk:**
Staten øker utgiftene og/eller reduserer skattene for å stimulere etterspørselen. Brukes typisk i nedgangstider for å motvirke arbeidsledighet og lav vekst.

**Kontraktiv finanspolitikk:**
Staten reduserer utgiftene og/eller øker skattene for å dempe etterspørselen. Brukes typisk i oppgangstider for å hindre overoppheting og høy inflasjon.

**Statsbudsjettet:**
Finanspolitikken bestemmes gjennom det årlige statsbudsjettet, som vedtas av Stortinget. Budsjettet er statens viktigste styringsdokument og viser alle planlagte inntekter og utgifter for det kommende året.`
    },
    {
      id: 'soe-6-4-def-2',
      type: 'definition',
      title: 'Handlingsregelen',
      content: `**Handlingsregelen** er Norges selvpålagte regel for bruk av oljeinntekter. Den sier at staten over tid skal bruke den forventede **realavkastningen** av Statens pensjonsfond utland (Oljefondet), anslått til **3 prosent** av fondets verdi per år.

**Formål:**
- Sikre at oljeformuen kommer også fremtidige generasjoner til gode
- Unngå overoppheting av norsk økonomi ved for stor pengebruk
- Gi en jevn og forutsigbar tilførsel av oljepenger til statsbudsjettet

**Fleksibilitet:**
Handlingsregelen tillater avvik i ekstraordinære situasjoner. Under finanskrisen (2009) og koronapandemien (2020) brukte staten mer enn 3 % for å dempe de økonomiske konsekvensene. I gode tider bør det brukes mindre enn 3 % for å bygge opp igjen buffere.

**Strukturelt oljekorrigert budsjettunderskudd:**
Dette er målet på hvor mye oljepenger som faktisk brukes over statsbudsjettet. Det korrigerer for konjunktureffekter og gir et bilde av den underliggende bruken av oljeinntekter.`
    },
    {
      id: 'soe-6-4-example-1',
      type: 'example',
      title: 'Finanspolitikk under koronapandemien',
      problem: 'Under koronapandemien i 2020 gjennomførte den norske regjeringen kraftige finanspolitiske tiltak. Forklar hvilke tiltak som ble satt inn og hvorfor de var nødvendige.',
      solution: `**Situasjonen:**
Nedstengningen av samfunnet i mars 2020 ga et dramatisk fall i økonomisk aktivitet. Mange bedrifter måtte stenge eller redusere driften kraftig, og arbeidsledigheten steg raskt.

**Finanspolitiske tiltak:**

**1. Økte offentlige utgifter:**
- Lønnskompensasjonsordning for permitterte arbeidstakere
- Kompensasjonsordning for bedrifter med stort omsetningsfall
- Ekstrabevilgninger til helsevesenet
- Støtte til kommunene for å opprettholde tjenestene

**2. Skattelettelser:**
- Redusert arbeidsgiveravgift i en periode
- Utsatte skattefrister for bedrifter
- Midlertidige endringer i avskrivningsregler

**3. Garantier og lån:**
- Statlige lånegarantier til bedrifter gjennom bankene
- Gjenopprettingslån til bedrifter via Innovasjon Norge

**Omfang:**
Staten brukte langt mer enn handlingsregelens 3 % av Oljefondet. Det strukturelle oljekorrigerte underskuddet ble over 400 milliarder kroner i 2020.

**Begrunnelse:**
Uten statlig støtte ville mange levedyktige bedrifter gått konkurs, og arbeidsledigheten kunne blitt svært høy og langvarig. De finanspolitiske tiltakene var nødvendige for å begrense de økonomiske skadevirkningene av pandemien.`
    },
    {
      id: 'soe-6-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-6-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva innebærer ekspansiv finanspolitikk?',
        options: [
          { id: 'a', text: 'Staten øker skattene og reduserer utgiftene for å dempe økonomien', isCorrect: false },
          { id: 'b', text: 'Norges Bank senker renten for å stimulere forbruket', isCorrect: false },
          { id: 'c', text: 'Staten øker utgiftene og/eller reduserer skattene for å stimulere økonomien', isCorrect: true },
          { id: 'd', text: 'Staten privatiserer offentlige tjenester for å øke effektiviteten', isCorrect: false },
        ],
        solution: 'Ekspansiv finanspolitikk innebærer at staten øker sine utgifter og/eller reduserer skatter og avgifter for å tilføre mer penger til økonomien og stimulere den samlede etterspørselen. Dette brukes typisk i nedgangstider. Merk at det er staten (regjering og storting) som styrer finanspolitikken, ikke Norges Bank – det er pengepolitikk.'
      }
    },

    // --- BLOKK 2: Automatiske stabilisatorer ---
    {
      id: 'soe-6-4-def-3',
      type: 'definition',
      title: 'Automatiske stabilisatorer',
      content: `**Automatiske stabilisatorer** er mekanismer i statsbudsjettet som automatisk demper konjunktursvingninger uten at politikerne trenger å fatte nye vedtak.

**Hvordan de virker i nedgangstider:**
- **Skatteinntektene faller automatisk:** Når bedrifter tjener mindre og flere blir arbeidsledige, betales det mindre i inntektsskatt, selskapsskatt og moms. Dette gir husholdninger og bedrifter mer penger å bruke.
- **Utgiftene til trygd og stønader øker automatisk:** Flere mottar dagpenger, sosialhjelp og andre ytelser. Dette sikrer at folk fortsatt har inntekt å bruke.

**Hvordan de virker i oppgangstider:**
- **Skatteinntektene øker automatisk:** Høyere lønn og bedriftsoverskudd gir mer skatt. Progressiv inntektsskatt betyr at økte inntekter skattes hardere.
- **Utgiftene til trygd faller automatisk:** Færre arbeidsledige betyr lavere utgifter til dagpenger og sosialhjelp.

**Fordel:**
Automatiske stabilisatorer virker raskt og uten politiske beslutningsprosesser. De demper svingningene i økonomien uten at Stortinget trenger å vedta nye tiltak.`
    },
    {
      id: 'soe-6-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-6-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er en automatisk stabilisator?',
        options: [
          { id: 'a', text: 'Et politisk vedtak om å øke offentlige utgifter i nedgangstider', isCorrect: false },
          { id: 'b', text: 'En mekanisme i statsbudsjettet som automatisk demper konjunktursvingninger uten nye politiske vedtak', isCorrect: true },
          { id: 'c', text: 'Norges Banks automatiske justering av styringsrenten', isCorrect: false },
          { id: 'd', text: 'En fast regel om at staten alltid skal ha et balansert budsjett', isCorrect: false },
        ],
        solution: 'Automatiske stabilisatorer er innebygde mekanismer i budsjettet som virker stabiliserende uten at politikerne trenger å fatte nye vedtak. Det viktigste eksempelet er at skatteinntektene faller og trygdeutgiftene øker automatisk i nedgangstider, noe som tilfører kjøpekraft til økonomien når den trenger det mest.'
      }
    },

    // --- BLOKK 3: Diskresjonær politikk og multiplikatoren ---
    {
      id: 'soe-6-4-def-4',
      type: 'definition',
      title: 'Diskresjonær finanspolitikk',
      content: `**Diskresjonær finanspolitikk** er aktive, bevisste politiske beslutninger om å endre skatter eller offentlige utgifter for å påvirke økonomien. I motsetning til automatiske stabilisatorer krever dette nye vedtak fra Stortinget.

**Eksempler på diskresjonære tiltak:**
- Øke bevilgninger til veibygging for å skape arbeidsplasser
- Innføre midlertidige skattelettelser for å stimulere forbruket
- Øke antall tiltaksplasser for arbeidsledige
- Fremskynde offentlige investeringer i nedgangstider

**Utfordringer med diskresjonær finanspolitikk:**
- **Beslutningsforsinkelse:** Det tar tid å identifisere problemet, utforme tiltak og få dem vedtatt i Stortinget
- **Gjennomføringsforsinkelse:** Det tar tid å iverksette tiltakene (planlegge, ansette, bygge)
- **Virkningsforsinkelse:** Det tar tid før tiltakene har full effekt i økonomien
- **Politisk risiko:** Politikere kan fristes til å føre ekspansiv politikk også i gode tider for å bli gjenvalgt`
    },
    {
      id: 'soe-6-4-def-5',
      type: 'definition',
      title: 'Multiplikatoreffekten',
      content: `**Multiplikatoreffekten** beskriver hvordan en økning i offentlige utgifter kan gi en samlet effekt på BNP som er større enn den opprinnelige utgiftsøkningen.

**Mekanismen:**
1. Staten bruker 1 milliard kr ekstra på å bygge en vei
2. Byggefirmaene mottar 1 milliard kr og betaler lønn til ansatte
3. De ansatte bruker en del av lønnen på forbruk (f.eks. 80 %, resten spares)
4. Butikker og tjenesteleverandører mottar denne forbruksøkningen og ansatte der bruker igjen 80 %
5. Prosessen fortsetter i mange runder

**Multiplikatoren:**
Hvis folk bruker en andel *c* (konsumtilbøyeligheten) av ekstra inntekt, er multiplikatoren:
$$k = \\frac{1}{1 - c}$$

Med $c = 0{,}8$: $k = 1/(1 - 0{,}8) = 5$

Det betyr at 1 milliard kr i økte offentlige utgifter kan gi opptil 5 milliarder kr i økt BNP.

**I praksis** er multiplikatoren lavere enn denne enkle modellen tilsier, blant annet fordi skatt, import og rentereaksjoner demper effekten. Typiske estimater for norske forhold ligger på 1,0–1,5.`
    },
    {
      id: 'soe-6-4-example-2',
      type: 'example',
      title: 'Multiplikatoren i praksis',
      problem: 'Staten bevilger 500 millioner kr til et nytt sykehusbygg. Anta at konsumtilbøyeligheten er 0,6. Beregn den teoretiske multiplikatoreffekten og den totale virkningen på BNP.',
      solution: `**Beregning av multiplikatoren:**
$$k = \\frac{1}{1 - c} = \\frac{1}{1 - 0{,}6} = \\frac{1}{0{,}4} = 2{,}5$$

**Total virkning på BNP:**
$$\\Delta BNP = k \\times \\Delta G = 2{,}5 \\times 500 = 1\\,250 \\text{ mill. kr}$$

**Runde for runde:**
- Runde 1: Staten bruker 500 mill. kr → byggebransjen mottar 500 mill. kr
- Runde 2: Ansatte i byggebransjen bruker 60 % = 300 mill. kr
- Runde 3: Mottakerne av disse pengene bruker 60 % = 180 mill. kr
- Runde 4: 108 mill. kr
- Runde 5: 64,8 mill. kr
- Osv.

**Sum:** 500 + 300 + 180 + 108 + 64,8 + ... = 1 250 mill. kr

De opprinnelige 500 millionene skaper altså en samlet etterspørselsøkning på 1 250 millioner kroner – 2,5 ganger den opprinnelige bevilgningen.`
    },
    {
      id: 'soe-6-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-6-4-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Konsumtilbøyeligheten i en økonomi er 0,75. Hva er multiplikatoren?',
        options: [
          { id: 'a', text: '0,75', isCorrect: false },
          { id: 'b', text: '2', isCorrect: false },
          { id: 'c', text: '3', isCorrect: false },
          { id: 'd', text: '4', isCorrect: true },
        ],
        solution: 'Multiplikatoren beregnes som k = 1 / (1 − c) = 1 / (1 − 0,75) = 1 / 0,25 = 4. Det betyr at en økning i offentlige utgifter på 1 krone teoretisk kan gi en samlet økning i BNP på 4 kroner, fordi pengene sirkulerer gjennom flere runder med forbruk i økonomien.'
      }
    },

    // --- Oppsummering ---
    {
      id: 'soe-6-4-summary',
      type: 'text',
      content: `### Oppsummering

- **Finanspolitikk** er statens bruk av skatter, avgifter og offentlige utgifter for å påvirke økonomien. Den vedtas gjennom det årlige statsbudsjettet.
- **Ekspansiv finanspolitikk** (økte utgifter/lavere skatter) stimulerer økonomien, mens **kontraktiv finanspolitikk** (reduserte utgifter/høyere skatter) demper den.
- **Handlingsregelen** begrenser bruken av oljeinntekter til 3 % av Oljefondets verdi per år.
- **Automatiske stabilisatorer** (progressiv skatt, dagpenger mv.) demper konjunktursvingninger uten nye politiske vedtak.
- **Diskresjonær finanspolitikk** er aktive politiske tiltak, men utfordres av beslutnings-, gjennomførings- og virkningsforsinkelser.
- **Multiplikatoreffekten** viser at økte offentlige utgifter kan gi en samlet BNP-virkning som er større enn den opprinnelige utgiftsøkningen. Multiplikatoren $k = 1/(1-c)$.`
    },

    // --- Samleoppgaver ---
    {
      id: 'soe-6-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-6-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom automatiske stabilisatorer og diskresjonær finanspolitikk. Gi eksempler på hver type og diskuter fordeler og ulemper.',
        hints: ['Tenk på hastighet, politisk prosess og treffsikkerhet.'],
        solution: `**Automatiske stabilisatorer:**
Mekanismer som virker automatisk uten nye vedtak. Eksempler: progressiv inntektsskatt (skatteinntektene faller automatisk i nedgangstider), dagpenger (utgiftene øker automatisk ved arbeidsledighet).
- *Fordeler:* Virker raskt, ingen politisk forsinkelse, forutsigbare
- *Ulemper:* Kan ikke målrettes mot spesifikke sektorer, kan være for svake ved store sjokk

**Diskresjonær finanspolitikk:**
Aktive vedtak om å endre skatter eller utgifter. Eksempler: krisepakker under koronapandemien, skattelettelser for å stimulere investeringer, økte bevilgninger til infrastruktur.
- *Fordeler:* Kan målrettes mot spesifikke behov, kan tilpasses situasjonens alvor, kan være kraftigere
- *Ulemper:* Tidsforsinket (beslutning, gjennomføring, virkning), politisk motivert, kan være vanskelig å reversere

I praksis virker begge typene sammen. De automatiske stabilisatorene gir en «første forsvarslinje», mens diskresjonær politikk brukes ved ekstraordinære situasjoner.`
      }
    },
    {
      id: 'soe-6-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-6-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om handlingsregelen (3 % av Oljefondet) er en fornuftig begrensning for norsk finanspolitikk. Hva er argumentene for og mot regelen?',
        hints: ['Tenk på hollandsk syke, generasjonsrettferdighet og behovet for fleksibilitet i krisetider.'],
        solution: `**Argumenter FOR handlingsregelen:**

**1. Generasjonsrettferdighet:**
Oljeformuen tilhører alle generasjoner, ikke bare de som lever nå. Handlingsregelen sikrer at formuen bevares slik at også fremtidige generasjoner kan nyte godt av den.

**2. Unngå «hollandsk syke»:**
For stor bruk av oljepenger kan føre til at norsk økonomi overopphetes, at kronekursen styrkes for mye, og at konkurranseutsatt næringsliv svekkes. Handlingsregelen begrenser tilførselen av oljepenger.

**3. Forutsigbarhet:**
Regelen gir en klar ramme for finanspolitikken og reduserer politisk press for å bruke mer penger i gode tider.

**Argumenter MOT handlingsregelen (eller for endring):**

**1. For rigid:**
Regelen kan hindre nødvendige investeringer i infrastruktur, grønn omstilling eller krisehåndtering.

**2. 3 % er vilkårlig:**
Det er ikke gitt at 3 % er det riktige nivået. Noen argumenterer for at vi bør investere mer nå i ting som gir avkastning (utdanning, forskning, infrastruktur).

**3. Klimaomstillingen:**
Norge trenger enorme investeringer for å nå klimamålene. Noen mener handlingsregelen bør åpne for økte grønne investeringer.

**Konklusjon:**
Handlingsregelen har tjent Norge godt ved å sikre en ansvarlig forvaltning av oljeformuen. Fleksibiliteten til å avvike i krisetider er viktig. Hovedutfordringen fremover er å balansere langsiktig sparing med behovet for investeringer i omstilling.`
      }
    },
    {
      id: 'soe-6-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-6-4-ex-6',
        number: '6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva sier handlingsregelen om bruk av oljepenger?',
        options: [
          { id: 'a', text: 'Staten skal bruke alle oljeinntektene hvert år', isCorrect: false },
          { id: 'b', text: 'Staten skal over tid bruke den forventede realavkastningen av Oljefondet, anslått til 3 % per år', isCorrect: true },
          { id: 'c', text: 'Staten kan aldri bruke oljepenger, de skal spares til fremtidige generasjoner', isCorrect: false },
          { id: 'd', text: 'Staten skal bruke 10 % av Oljefondet hvert år', isCorrect: false },
        ],
        solution: 'Handlingsregelen sier at staten over tid skal bruke den forventede realavkastningen av Statens pensjonsfond utland (Oljefondet), anslått til 3 prosent per år. Regelen ble innført i 2001 og sikrer at oljeinntektene fases gradvis inn i økonomien uten å overopphete den, samtidig som fondskapitalen bevares for fremtidige generasjoner.'
      }
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 6.5: Finansmarkeder
// ============================================================================

export const CHAPTER_SAMFOKONOMI_1_6_5: TextbookChapter = {
  id: 'samfokonomi-1-6-5',
  courseId: 'samfokonomi-1',
  chapterNumber: '6.5',
  title: 'Finansmarkeder',
  description: 'Aksjemarkedet, obligasjonsmarkedet, banksektoren, finanskriser og regulering.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere finansmarkedenes muligheter og utfordringer for utviklingen av samfunnsøkonomien',
  ],
  content: [
    // --- INTRO ---
    {
      id: 'soe-6-5-intro',
      type: 'text',
      content: `## Finansmarkeder

Finansmarkedene er «blodomløpet» i en moderne økonomi. De formidler kapital fra de som har penger å plassere (sparere) til de som trenger kapital (bedrifter, staten, husholdninger). Uten velfungerende finansmarkeder ville det vært vanskelig for bedrifter å finansiere investeringer, for staten å finansiere infrastruktur og for husholdninger å kjøpe bolig.

Men finansmarkedene kan også være en kilde til ustabilitet. Finanskrisen i 2008 viste hvordan problemer i finanssektoren kan ramme hele verdensøkonomien. I dette kapittelet skal vi se på de viktigste finansmarkedene, hvordan de fungerer, og hvorfor regulering er nødvendig.`
    },

    // --- BLOKK 1: Aksjemarkedet ---
    {
      id: 'soe-6-5-def-1',
      type: 'definition',
      title: 'Aksjemarkedet',
      content: `**Aksjemarkedet** er markedsplassen der eierandeler (aksjer) i bedrifter kjøpes og selges. Når du kjøper en aksje, blir du medeier i selskapet.

**Hvordan det fungerer:**
- Et selskap utsteder aksjer for å hente inn kapital til investeringer (**emisjon**)
- Aksjene handles deretter mellom investorer på en **børs** (i Norge: Oslo Børs / Euronext Oslo)
- Aksjekursen bestemmes av tilbud og etterspørsel
- Investorer kan tjene penger på **kursgevinst** (selge dyrere enn kjøpsprisen) og **utbytte** (andel av selskapets overskudd)

**Viktige begreper:**
- **Børsnotert selskap:** Et selskap hvis aksjer er tatt opp til handel på en regulert børs
- **Indeks:** Et mål på den samlede kursutviklingen. Oslo Børs Hovedindeks (OSEBX) viser utviklingen for de mest omsatte aksjene på Oslo Børs
- **Markedsverdi (market cap):** Aksjekursen multiplisert med antall utestående aksjer

**Samfunnsøkonomisk rolle:**
Aksjemarkedet gjør det mulig for bedrifter å hente inn egenkapital fra mange investorer, og gir investorer mulighet til å spre risikoen.`
    },
    {
      id: 'soe-6-5-example-1',
      type: 'example',
      title: 'Hvorfor svinger aksjekurser?',
      problem: 'Et teknologiselskap legger frem kvartalsresultater som viser høyere inntekter enn forventet, men aksjekursen faller likevel. Forklar hvorfor dette kan skje.',
      solution: `**Forklaring:**
Aksjekurser gjenspeiler ikke bare nåværende resultater, men også **forventninger** om fremtiden. Kursen kan falle til tross for gode resultater av flere grunner:

**1. Resultatene var bra, men ikke bra nok:**
Markedet hadde kanskje enda høyere forventninger. Dersom analytikere hadde forventet 20 % inntektsvekst og selskapet leverte 15 %, er det «skuffende» selv om det er bra.

**2. Svake fremtidsutsikter:**
Selskapet kan ha lagt frem svakere prognoser for neste kvartal, noe som tyder på at veksten er i ferd med å avta.

**3. Markedssentiment:**
Generell pessimisme i markedet (for eksempel bekymring for resesjon) kan trekke kurser ned uavhengig av enkeltresultater.

**4. «Buy the rumour, sell the news»:**
Mange investorer hadde allerede kjøpt aksjen i forkant og solgte da nyhetene kom, noe som presset kursen ned.

**Lærdommen:**
Aksjekurser reflekterer markedets samlede forventninger og kan oppføre seg kontraintuitivt på kort sikt. Det er forventningsendringer, ikke absolutte tall, som driver kursbevegelser.`
    },
    {
      id: 'soe-6-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'soe-6-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste samfunnsøkonomiske funksjonen til aksjemarkedet?',
        options: [
          { id: 'a', text: 'Å gjøre det mulig for folk å bli rike på spekulasjon', isCorrect: false },
          { id: 'b', text: 'Å formidle kapital fra sparere til bedrifter som trenger finansiering til investeringer', isCorrect: true },
          { id: 'c', text: 'Å gi staten kontroll over bedriftene i økonomien', isCorrect: false },
          { id: 'd', text: 'Å sikre at alle bedrifter har lik tilgang til kapital', isCorrect: false },
        ],
        solution: 'Aksjemarkedets viktigste samfunnsøkonomiske funksjon er å formidle kapital fra sparere (investorer) til bedrifter som trenger finansiering for å investere, vokse og skape arbeidsplasser. Bedrifter kan hente inn egenkapital ved å utstede aksjer, og investorer kan plassere sparepengene sine i produktiv virksomhet.'
      }
    },

    // --- BLOKK 2: Obligasjonsmarkedet og banksektoren ---
    {
      id: 'soe-6-5-def-2',
      type: 'definition',
      title: 'Obligasjonsmarkedet',
      content: `**Obligasjoner** er gjeldsbrev der utsteder låner penger fra investorer og forplikter seg til å betale renter og tilbakebetale lånet ved forfall.

**Hvordan det fungerer:**
- En utsteder (stat, kommune, bedrift) trenger å låne penger
- Utstederen selger obligasjoner til investorer
- Investoren mottar faste rentebetalinger (**kupongrente**) i løpetiden
- Ved forfall får investoren tilbake det opprinnelige lånebeløpet (**pålydende**)

**Typer obligasjoner:**
- **Statsobligasjoner:** Utstedt av staten, regnes som svært sikre
- **Kommuneobligasjoner:** Utstedt av kommuner
- **Foretaksobligasjoner:** Utstedt av bedrifter, høyere risiko og høyere rente
- **Høyrenteobligasjoner (high yield):** Utstedt av selskaper med lavere kredittverdighet, betydelig høyere rente

**Sammenhengen mellom rente og kurs:**
Obligasjonskurser og renter beveger seg i **motsatt retning**. Når markedsrenten stiger, faller kursen på eksisterende obligasjoner (fordi de gir lavere rente enn nye obligasjoner).`
    },
    {
      id: 'soe-6-5-def-3',
      type: 'definition',
      title: 'Banksektoren',
      content: `**Bankene** er de viktigste finansielle mellomleddene i økonomien. De samler inn innskudd fra sparere og låner ut pengene til husholdninger og bedrifter.

**Bankenes hovedfunksjoner:**
- **Formidling:** Kobler sparere med låntakere
- **Risikofordeling:** Sprer risikoen ved å låne ut til mange ulike kunder
- **Løpetidstransformasjon:** Tar imot kortsiktige innskudd og gir langsiktige lån
- **Betalingsformidling:** Sørger for at betalinger mellom kunder går smidig

**Bankenes inntektsmodell:**
Bankene tjener hovedsakelig penger på **rentemarginen** – forskjellen mellom renten de betaler på innskudd og renten de tar på utlån. I tillegg tjener de på gebyrer og provisjoner.

**Regulering:**
Banker er strengt regulert fordi problemer i banksektoren kan ramme hele økonomien. Viktige reguleringer inkluderer:
- **Kapitalkrav (Basel III):** Bankene må ha tilstrekkelig egenkapital i forhold til utlånene
- **Likviditetskrav:** Bankene må ha nok likvide midler til å møte kortsiktige forpliktelser
- **Innskuddsgaranti:** Innskudd opptil 2 millioner kroner per bank per kunde er garantert av Bankenes sikringsfond`
    },
    {
      id: 'soe-6-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'soe-6-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skjer med kursen på en eksisterende obligasjon med fast kupongrente når markedsrenten stiger?',
        options: [
          { id: 'a', text: 'Kursen stiger fordi høyere rente gjør obligasjoner mer attraktive', isCorrect: false },
          { id: 'b', text: 'Kursen faller fordi nye obligasjoner gir høyere rente, og den gamle blir mindre attraktiv', isCorrect: true },
          { id: 'c', text: 'Kursen forblir uendret fordi kupongrenten er fast', isCorrect: false },
          { id: 'd', text: 'Obligasjonen forfaller umiddelbart', isCorrect: false },
        ],
        solution: 'Når markedsrenten stiger, kan investorer få høyere rente på nye obligasjoner. Dermed blir eksisterende obligasjoner med lavere kupongrente mindre attraktive, og kursen deres faller. Kursfallet kompenserer slik at avkastningen på den gamle obligasjonen tilsvarer markedsrenten. Denne sammenhengen er grunnleggende i obligasjonsmarkedet.'
      }
    },

    // --- BLOKK 3: Finanskriser og regulering ---
    {
      id: 'soe-6-5-text-1',
      type: 'text',
      content: `### Finanskriser

Finanskriser oppstår når det finansielle systemet svikter og ikke lenger kan fylle sin rolle som kapitalformidler. Kriser kan utløses av mange faktorer, men har ofte felles trekk:

**Typisk krisemønster:**
1. **Oppgangsfasen:** Optimisme, lett tilgang på kreditt, stigende aktivapriser (boliger, aksjer)
2. **Boblefasen:** Prisene stiger langt over fundamentalverdi, spekulasjon og overdreven risikotaking
3. **Vendepunktet:** Et sjokk eller en korreksjon utløser fall i aktivaprisene
4. **Krisefasen:** Panikk, «bank runs», kredittørke, bedriftskonkurser og økende arbeidsledighet
5. **Gjenopprettingsfasen:** Myndigheter griper inn, tilliten gjenoppbygges gradvis`
    },
    {
      id: 'soe-6-5-example-2',
      type: 'example',
      title: 'Finanskrisen 2008',
      problem: 'Forklar kort hva som forårsaket den globale finanskrisen i 2008 og hvilke konsekvenser den fikk.',
      solution: `**Årsaker:**

**1. Subprime-lån i USA:**
Amerikanske banker ga boliglån til kunder med svak betalingsevne (subprime). Lånene ble pakket sammen og solgt videre som kompliserte verdipapirer (CDO-er) til investorer verden over.

**2. Boligboble:**
Boligprisene i USA steg kraftig, delvis drevet av de lempelige utlånsvilkårene. Folk tok opp lån basert på forventning om videre prisstigning.

**3. Boblen sprakk:**
Da boligprisene begynte å falle i 2007, kunne mange låntakere ikke betjene lånene. Verdipapirene basert på boliglån falt kraftig i verdi.

**4. Smitteeffekt:**
Banker og finansinstitusjoner verden over som hadde investert i disse verdipapirene led store tap. Tilliten mellom bankene forsvant, og interbankmarkedet frøs.

**Konsekvenser:**
- Investeringsbanken Lehman Brothers gikk konkurs i september 2008
- Global resesjon med kraftig fall i BNP
- Massiv arbeidsledighet i mange land
- Statlige redningspakker til banker
- Strengere regulering av finanssektoren (Basel III)
- I Norge: Moderat nedgang, men Oljefondet tapte midlertidig ca. 600 milliarder kroner`
    },
    {
      id: 'soe-6-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'soe-6-5-ex-3',
        number: '3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva var en sentral årsak til finanskrisen i 2008?',
        options: [
          { id: 'a', text: 'Sentralbankene i Europa satte renten for høyt', isCorrect: false },
          { id: 'b', text: 'Amerikanske banker ga for mange boliglån til kunder med svak betalingsevne, og risikoen ble spredd gjennom kompliserte verdipapirer', isCorrect: true },
          { id: 'c', text: 'Oljeprisen steg for raskt og skapte global inflasjon', isCorrect: false },
          { id: 'd', text: 'Kina devaluerte valutaen sin og utkonkurrerte vestlige bedrifter', isCorrect: false },
        ],
        solution: 'En sentral årsak til finanskrisen i 2008 var at amerikanske banker ga boliglån til kunder med svak betalingsevne (subprime-lån). Lånene ble pakket sammen i kompliserte verdipapirer (CDO-er) og solgt til investorer globalt. Da boligprisene falt, ble disse verdipapirene nærmest verdiløse, og banker verden over led store tap.'
      }
    },
    {
      id: 'soe-6-5-def-4',
      type: 'definition',
      title: 'Finansmarkedsregulering',
      content: `**Finansmarkedsregulering** er regler og tilsyn som myndighetene pålegger aktørene i finansmarkedene for å sikre stabilitet, beskytte forbrukere og forhindre kriser.

**Viktige reguleringselementer i Norge:**

**1. Finanstilsynet:**
Overvåker banker, forsikringsselskaper, verdipapirforetak og andre finansinstitusjoner. Kan gi og trekke tilbake konsesjoner.

**2. Kapitalkrav (Basel III/IV):**
Bankene må ha tilstrekkelig egenkapital til å tåle tap. Jo mer risikofylte utlån, jo mer egenkapital kreves. Norske banker har blant de strengeste kapitalkravene i Europa.

**3. Boliglånsforskriften:**
Regulerer bankenes boliglånspraksis. Krav om blant annet:
- Maksimalt 85 % belåningsgrad (max 60 % for sekundærbolig i Oslo)
- Kunden må tåle en renteøkning på minst 3 prosentpoeng
- Maksimal gjeldsgrad: 5 ganger brutto årsinntekt

**4. Innskuddsgarantiordningen:**
Sikrer bankinnskudd opptil 2 millioner kr per bank per kunde.

**5. Krav til god forretningsskikk:**
Verdipapirforetak må opptre ærlig og profesjonelt, og gi kunder riktig informasjon om risiko.`
    },
    {
      id: 'soe-6-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'soe-6-5-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er formålet med innskuddsgarantiordningen?',
        options: [
          { id: 'a', text: 'Å garantere at bankene alltid gir kundene høy rente', isCorrect: false },
          { id: 'b', text: 'Å sikre at kundene får tilbake innskuddene sine (opptil 2 millioner kr) dersom banken går konkurs', isCorrect: true },
          { id: 'c', text: 'Å hindre at folk tar ut for mye penger fra kontoen sin', isCorrect: false },
          { id: 'd', text: 'Å garantere at staten dekker alle bankenes tap', isCorrect: false },
        ],
        solution: 'Innskuddsgarantiordningen sikrer at bankkunder får tilbake innskuddene sine (opptil 2 millioner kroner per bank per kunde) dersom banken skulle gå konkurs. Ordningen administreres av Bankenes sikringsfond og er et viktig tiltak for å opprettholde tilliten til banksystemet og forhindre «bank runs».'
      }
    },

    // --- Oppsummering ---
    {
      id: 'soe-6-5-summary',
      type: 'text',
      content: `### Oppsummering

- **Finansmarkedene** formidler kapital fra sparere til de som trenger finansiering, og er avgjørende for en velfungerende økonomi.
- **Aksjemarkedet** gjør det mulig for bedrifter å hente egenkapital og for investorer å ta del i verdiskapingen. Aksjekurser gjenspeiler forventninger om fremtidig inntjening.
- **Obligasjonsmarkedet** gir stater og bedrifter mulighet til å låne penger fra investorer. Obligasjonskurser og renter beveger seg i motsatt retning.
- **Bankene** er de viktigste finansielle mellomleddene og tjener på rentemarginen. De er strengt regulert gjennom kapitalkrav, likviditetskrav og innskuddsgaranti.
- **Finanskriser** følger ofte et mønster med oppgang, boble, vendepunkt og krise. Finanskrisen i 2008 viste hvordan problemer i finanssektoren kan ramme hele verdensøkonomien.
- **Regulering** (Finanstilsynet, Basel III, boliglånsforskriften, innskuddsgaranti) er nødvendig for å sikre stabilitet og beskytte forbrukere.`
    },

    // --- Samleoppgaver ---
    {
      id: 'soe-6-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'soe-6-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva boliglånsforskriften er, og drøft hvorfor myndighetene mener det er nødvendig å regulere bankenes utlånspraksis for boliglån.',
        hints: ['Tenk på erfaringene fra finanskrisen i 2008, og hva som kan skje dersom husholdningene tar opp for mye gjeld.'],
        solution: `**Hva boliglånsforskriften er:**
Boliglånsforskriften er en forskrift fra Finansdepartementet som setter grenser for bankenes utlånspraksis ved boliglån. De viktigste kravene er:
- Maksimal belåningsgrad på 85 % av boligens verdi (60 % for sekundærbolig i Oslo)
- Kunden må tåle en renteøkning på minst 3 prosentpoeng
- Samlet gjeld kan ikke overstige 5 ganger brutto årsinntekt

**Hvorfor regulering er nødvendig:**

**1. Beskytte husholdningene:**
Uten regulering kan folk ta opp mer gjeld enn de tåler. Ved renteøkning eller inntektstap kan de miste boligen.

**2. Finansiell stabilitet:**
Høy husholdningsgjeld er en risiko for hele økonomien. Dersom mange husholdninger samtidig får problemer med å betjene gjelden, kan det utløse en boligpriskrise som sprer seg til banksektoren.

**3. Lærdom fra 2008:**
Finanskrisen viste at lempelige utlånsvilkår kan bygge opp bobler som til slutt sprekker med alvorlige konsekvenser.

**4. Begrense boligprisveksten:**
Lett tilgang på kreditt driver boligprisene opp, noe som gjør det vanskeligere for førstegangskjøpere å komme inn i boligmarkedet.`
      }
    },
    {
      id: 'soe-6-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'soe-6-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft finansmarkedenes rolle for samfunnsøkonomien. Hvilke muligheter gir finansmarkedene, og hvilke utfordringer og risikoer er knyttet til dem?',
        hints: ['Tenk på kapitalallokering, risikospredning, spekulasjon og systemrisiko.'],
        solution: `**Muligheter (finansmarkedenes positive rolle):**

**1. Effektiv kapitalallokering:**
Finansmarkedene sørger for at kapital flyter dit den gir størst avkastning. Bedrifter med gode ideer kan hente finansiering fra investorer, noe som fremmer innovasjon og vekst.

**2. Risikospredning:**
Gjennom diversifisering (investering i mange ulike aktiva) kan investorer redusere risikoen. Forsikring og derivater gjør det mulig å overføre risiko til de som er best i stand til å bære den.

**3. Likviditet:**
Finansmarkedene gir investorer mulighet til å kjøpe og selge aktiva raskt, noe som gjør det lettere å plassere sparepenger.

**4. Prisinformasjon:**
Markedspriser gir viktig informasjon om verdsetting av bedrifter, risiko og forventninger – noe som hjelper beslutningstakere.

**Utfordringer og risikoer:**

**1. Spekulasjon og bobler:**
Overdreven spekulasjon kan drive priser bort fra fundamentalverdi og skape bobler som til slutt sprekker.

**2. Systemrisiko:**
Finansinstitusjoner er tett sammenkoblet. Problemer i én bank kan smitte til hele systemet (dominoeffekt), som i 2008.

**3. Ulikhet:**
De som har kapital å investere, tjener på finansmarkedene, mens de uten sparemidler ikke får del i avkastningen. Dette kan forsterke økonomiske forskjeller.

**4. Kortsiktighet:**
Finansmarkedenes fokus på kvartalstall kan presse bedrifter til kortsiktige beslutninger på bekostning av langsiktig verdiskaping.

**Konklusjon:**
Finansmarkedene er uunnværlige for en moderne økonomi, men krever robust regulering og tilsyn for å minimere risikoene og sikre at de fungerer til samfunnets beste.`
      }
    },
    {
      id: 'soe-6-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'soe-6-5-ex-7',
        number: '7',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva menes med «systemrisiko» i finansmarkedene?',
        options: [
          { id: 'a', text: 'Risikoen for at datasystemene til bankene svikter', isCorrect: false },
          { id: 'b', text: 'Risikoen for at problemer i én finansinstitusjon kan spre seg og true stabiliteten i hele det finansielle systemet', isCorrect: true },
          { id: 'c', text: 'Risikoen for at staten går konkurs', isCorrect: false },
          { id: 'd', text: 'Risikoen for at enkeltinvestorer taper penger på aksjemarkedet', isCorrect: false },
        ],
        solution: 'Systemrisiko handler om at finansinstitusjoner er tett sammenkoblet gjennom gjensidige lån, derivater og felles eksponeringer. Problemer i én stor institusjon kan spre seg som en dominoeffekt til andre, og i verste fall true stabiliteten i hele det finansielle systemet. Finanskrisen i 2008 er et tydelig eksempel. Det er nettopp for å begrense systemrisikoen at bankene pålegges strenge kapital- og likviditetskrav.'
      }
    },
  ],
  exercises: [],
};

// ============================================================================
// Samlet eksport for del 6 (kapittel 6.1–6.5)
// ============================================================================

export const SAMFOKONOMI_1_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFOKONOMI_1_6_1, CHAPTER_SAMFOKONOMI_1_6_2, CHAPTER_SAMFOKONOMI_1_6_3,
  CHAPTER_SAMFOKONOMI_1_6_4, CHAPTER_SAMFOKONOMI_1_6_5,
];
