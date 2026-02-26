/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnsøkonomi 2 (VG3 programfag) - Del 3
 * Seksjon 3: Internasjonal handel og valuta (3.1-3.5)
 * Følger LK20 læreplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 3.1: Komparativ fordel
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_3_1: TextbookChapter = {
  id: 'samfokonomi-2-3-1',
  courseId: 'samfokonomi-2',
  chapterNumber: '3.1',
  title: 'Komparativ fordel',
  description: 'Ricardos teori om komparative fortrinn, spesialisering og bytteforhold i internasjonal handel.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for teorier om internasjonal handel og drøfte virkninger av handelspolitikk',
  ],
  content: [
    {
      id: 'sf2-3-1-intro',
      type: 'text',
      content: `# Komparativ fordel

Hvorfor handler land med hverandre? Det enkleste svaret er at noen land er bedre til å produsere visse varer enn andre. Men den britiske økonomen **David Ricardo** viste i 1817 noe overraskende: selv om et land er bedre enn alle andre til å produsere absolutt alt, vil det likevel lønne seg å spesialisere seg og handle.

Dette prinsippet kalles **komparativ fordel** og er en av de mest grunnleggende ideene i økonomisk teori. Det forklarer hvorfor internasjonal handel kan være fordelaktig for alle parter, og hvorfor spesialisering øker den samlede verdiskapingen i verden.

I dette kapittelet skal vi se på forskjellen mellom absolutt og komparativ fordel, hvordan spesialisering fungerer, og hva bytteforholdet betyr for handelen mellom land.`,
    },
    {
      id: 'sf2-3-1-def-1',
      type: 'definition',
      title: 'Absolutt fordel',
      content: `**Absolutt fordel** betyr at et land kan produsere en vare med færre ressurser (lavere kostnad) enn et annet land.

**Eksempel:** Norge har absolutt fordel i oljeproduksjon sammenlignet med Danmark, fordi Norge har større oljeressurser og kan utvinne olje billigere per fat.

Absolutt fordel er lett å forstå, men det er **ikke** det som bestemmer hvem som bør produsere hva i internasjonal handel. Det er komparativ fordel som er avgjørende.`,
    },
    {
      id: 'sf2-3-1-def-2',
      type: 'definition',
      title: 'Komparativ fordel',
      content: `**Komparativ fordel** betyr at et land kan produsere en vare til lavere **alternativkostnad** enn et annet land.

Alternativkostnaden er hva man må gi opp av andre varer for å produsere en ekstra enhet av den aktuelle varen.

Et land har komparativ fordel i den varen der det har lavest alternativkostnad - selv om det ikke har absolutt fordel i noen varer.

**Ricardos hovedinnsikt:** Handel er lønnsomt så lenge landene har ulike alternativkostnader. Det betyr at selv et land som er dårligere enn alle andre til å produsere alt, likevel har komparativ fordel i noe.`,
    },
    {
      id: 'sf2-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Ricardos vin og klede',
      problem: 'Portugal kan produsere 1 enhet vin med 80 arbeidstimer og 1 enhet klede med 90 arbeidstimer. England kan produsere 1 enhet vin med 120 arbeidstimer og 1 enhet klede med 100 arbeidstimer. Hvem har absolutt fordel i hva? Hvem har komparativ fordel i hva?',
      solution: `**Løsning:**

**Absolutt fordel:**
Portugal bruker færre arbeidstimer på både vin (80 < 120) og klede (90 < 100). Portugal har absolutt fordel i begge varer.

**Alternativkostnad:**
- Portugal: 1 vin koster 80/90 = 0,89 enheter klede. 1 klede koster 90/80 = 1,13 enheter vin.
- England: 1 vin koster 120/100 = 1,20 enheter klede. 1 klede koster 100/120 = 0,83 enheter vin.

**Komparativ fordel:**
- Portugal har lavest alternativkostnad for vin (0,89 < 1,20), så Portugal har komparativ fordel i vin.
- England har lavest alternativkostnad for klede (0,83 < 1,13), så England har komparativ fordel i klede.

**Konklusjon:** Selv om Portugal er best i alt, lønner det seg at Portugal spesialiserer seg i vin og England i klede. Begge land tjener på å handle med hverandre.`,
    },
    {
      id: 'sf2-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-1-ex-1',
        number: '3.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med at et land har komparativ fordel i produksjon av en vare?',
        multipleChoiceOptions: [
          'At landet kan produsere varen til lavere alternativkostnad enn andre land',
          'At landet kan produsere varen billigere enn alle andre land',
          'At landet har mest erfaring med å produsere varen',
          'At landet eksporterer mest av denne varen',
        ],
        hints: ['Tenk på hva alternativkostnad betyr - hva må man gi opp?'],
        solution: 'Komparativ fordel betyr at et land kan produsere en vare til lavere alternativkostnad enn andre land. Alternativkostnaden er hva man må gi opp av andre varer. Det er ikke det samme som absolutt fordel, som handler om å produsere billigst. Et land kan ha komparativ fordel selv om det ikke er billigst i noe.',
      },
    },
    {
      id: 'sf2-3-1-text-2',
      type: 'text',
      title: 'Spesialisering og gevinster fra handel',
      content: `## Spesialisering og gevinster fra handel

Når hvert land spesialiserer seg i den varen der det har komparativ fordel, øker den samlede produksjonen i verden. Deretter kan landene bytte varer seg imellom, og begge ender opp med mer enn de hadde uten handel.

**Hvorfor fungerer det?**

Når et land flytter ressurser fra produksjon der det har høy alternativkostnad til produksjon der det har lav alternativkostnad, brukes ressursene mer effektivt. Den totale verdiskapingen øker, og denne gevinsten kan fordeles mellom handelspartnerne.

**Forutsetninger i Ricardos modell:**
- To land og to varer
- Arbeidskraft er den eneste innsatsfaktoren
- Arbeidskraft kan flyttes fritt mellom næringer innenfor et land, men ikke mellom land
- Ingen transportkostnader
- Ingen handelshindringer

I virkeligheten er verden mer komplisert, men grunnprinsippet holder: land tjener på å spesialisere seg og handle.`,
    },
    {
      id: 'sf2-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-1-ex-2',
        number: '3.1.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Land A kan produsere 10 biler eller 20 tonn korn per dag. Land B kan produsere 4 biler eller 12 tonn korn per dag. Hvem har komparativ fordel i bilproduksjon?',
        multipleChoiceOptions: [
          'Land A, fordi alternativkostnaden for en bil er 2 tonn korn mot Land Bs 3 tonn korn',
          'Land B, fordi de er et mindre land',
          'Land A, fordi de produserer flest biler',
          'Begge har lik komparativ fordel',
        ],
        hints: [
          'Beregn alternativkostnaden for en bil i hvert land: hva må de gi opp av korn?',
          'Land A: 1 bil = 20/10 = 2 tonn korn. Land B: 1 bil = 12/4 = 3 tonn korn',
        ],
        solution: 'Land A: alternativkostnad for 1 bil = 20/10 = 2 tonn korn. Land B: alternativkostnad for 1 bil = 12/4 = 3 tonn korn. Land A har lavest alternativkostnad for biler (2 < 3), så Land A har komparativ fordel i bilproduksjon. Land B har da komparativ fordel i korn (alternativkostnad: 4/12 = 0,33 biler mot Land As 10/20 = 0,5 biler).',
      },
    },
    {
      id: 'sf2-3-1-def-3',
      type: 'definition',
      title: 'Bytteforholdet (Terms of Trade)',
      content: `**Bytteforholdet** (terms of trade) er prisen på et lands eksportvarer i forhold til prisen på importvarene:

$$\\text{Bytteforhold} = \\frac{\\text{Prisindeks for eksportvarer}}{\\text{Prisindeks for importvarer}} \\times 100$$

- Bytteforhold > 100: Eksportprisene har steget mer enn importprisene (gunstig utvikling)
- Bytteforhold < 100: Importprisene har steget mer enn eksportprisene (ugunstig utvikling)

**For at handel skal være lønnsom for begge parter**, må bytteforholdet ligge mellom de to landenes alternativkostnader.

**Norges bytteforhold** er sterkt påvirket av oljeprisen. Når oljeprisen stiger, forbedres Norges bytteforhold fordi vi får mer importvarer for samme mengde eksportert olje.`,
    },
    {
      id: 'sf2-3-1-example-2',
      type: 'example',
      title: 'Eksempel: Bytteforhold mellom to land',
      problem: 'Land A har alternativkostnad 2 korn per bil. Land B har alternativkostnad 3 korn per bil. Hvilket bytteforhold (pris i korn per bil) må gjelde for at begge land skal tjene på handel?',
      solution: `**Løsning:**

For at begge land skal tjene på handel, må bytteforholdet ligge mellom de to landenes alternativkostnader:

- Land A gir opp 2 korn per bil (sin alternativkostnad)
- Land B gir opp 3 korn per bil (sin alternativkostnad)

**Bytteforholdet må ligge mellom 2 og 3 korn per bil.**

Hvis prisen er f.eks. 2,5 korn per bil:
- Land A (bilprodusenten) får 2,5 korn for en bil det koster 2 korn å lage. Gevinst: 0,5 korn per bil.
- Land B (kornprodusenten) betaler 2,5 korn for en bil det ville kostet 3 korn å lage selv. Gevinst: 0,5 korn per bil.

Begge land tjener på handelen!

Hvis bytteforholdet var under 2, ville Land A tape. Hvis det var over 3, ville Land B tape.`,
    },
    {
      id: 'sf2-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-1-ex-3',
        number: '3.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sverige kan produsere 8 biler eller 40 tonn trevirke per dag. Finland kan produsere 6 biler eller 24 tonn trevirke per dag. Beregn alternativkostnaden for biler og trevirke i hvert land, og forklar hvem som bør spesialisere seg i hva.',
        hints: [
          'Alternativkostnad for 1 bil i Sverige = 40/8 = 5 tonn trevirke',
          'Alternativkostnad for 1 bil i Finland = 24/6 = 4 tonn trevirke',
        ],
        solution: 'Sverige: 1 bil = 40/8 = 5 tonn trevirke. 1 tonn trevirke = 8/40 = 0,2 biler. Finland: 1 bil = 24/6 = 4 tonn trevirke. 1 tonn trevirke = 6/24 = 0,25 biler. Finland har lavest alternativkostnad for biler (4 < 5), så Finland bør spesialisere seg i biler. Sverige har lavest alternativkostnad for trevirke (0,2 < 0,25), så Sverige bør spesialisere seg i trevirke. Ved spesialisering og handel kan begge land få mer av begge varer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-1-ex-4',
        number: '3.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar med egne ord forskjellen mellom absolutt fordel og komparativ fordel. Gi et dagligdags eksempel (ikke mellom land) som illustrerer komparativ fordel.',
        hints: [
          'Tenk på en lege som også er veldig flink til å skrive på tastatur',
          'Selv om legen er bedre enn sekretæren i begge oppgaver, lønner det seg å delegere',
        ],
        solution: 'Absolutt fordel betyr at noen kan gjøre noe billigere eller raskere enn andre. Komparativ fordel betyr at noen har lavere alternativkostnad. Eksempel: En lege kan både behandle pasienter (tjener 2000 kr/time) og skrive journaler (gjør det dobbelt så raskt som en sekretær). Likevel lønner det seg at legen konsentrerer seg om pasientbehandling og ansetter en sekretær. Legens alternativkostnad for å skrive journaler er 2000 kr/time i tapte pasientinntekter. Sekretærens alternativkostnad er mye lavere. Legen har absolutt fordel i begge oppgaver, men komparativ fordel i pasientbehandling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-1-ex-5',
        number: '3.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Ricardos modell bygger på forenklede forutsetninger. Nevn tre viktige begrensninger ved modellen, og forklar hvorfor handel likevel kan være fordelaktig i den virkelige verden.',
        hints: [
          'Tenk på transportkostnader, arbeidsledighet ved omstilling og forskjeller i teknologi',
          'Hva skjer med arbeiderne som mister jobben når et land spesialiserer seg?',
        ],
        solution: 'Tre begrensninger: (1) Modellen antar ingen transportkostnader, men i virkeligheten koster det å frakte varer mellom land. (2) Modellen antar at arbeidskraft fritt kan flyttes mellom næringer, men i praksis kan omstilling ta tid og skape arbeidsledighet. (3) Modellen har bare to land og to varer, mens virkeligheten har mange land og tusenvis av varer. Likevel er handel fordelaktig fordi: (a) Spesialisering gir stordriftsfordeler og teknologisk utvikling. (b) Forbrukerne får tilgang til flere og billigere varer. (c) Konkurranse fra utlandet tvinger bedrifter til å bli mer effektive. Empirisk forskning viser at åpne økonomier vokser raskere enn lukkede.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-1-ex-6',
        number: '3.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Norges olje- og gasseksport utgjør en stor del av landets eksportinntekter. Forklar ved hjelp av teorien om komparativ fordel hvorfor Norge har spesialisert seg i olje og gass. Drøft om denne spesialiseringen er bærekraftig på lang sikt.',
        hints: [
          'Norge har rike naturressurser som gir lav alternativkostnad i olje/gass',
          'Tenk på hva som skjer når oljen tar slutt eller verden går over til fornybar energi',
        ],
        solution: 'Norge har komparativ fordel i olje og gass fordi landet har store petroleumsressurser som gir lav alternativkostnad sammenlignet med andre varer. Det er mer lønnsomt for Norge å utvinne olje og importere andre varer enn å produsere alt selv. På lang sikt er spesialiseringen utfordrende fordi: (1) Olje og gass er ikke-fornybare ressurser som vil ta slutt. (2) Klimapolitikk og overgangen til fornybar energi reduserer etterspørselen. (3) For sterk avhengighet av en sektor gjør økonomien sårbar (hollandsk syke). Oljefondet er Norges forsikring mot disse risikoene, men Norge må også utvikle nye næringer med komparative fortrinn, som havbruk, maritim teknologi og fornybar energi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-3-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- **Absolutt fordel** betyr å produsere en vare med færre ressurser enn et annet land.
- **Komparativ fordel** betyr å produsere en vare til lavere alternativkostnad. Dette er det avgjørende prinsippet for handel.
- Ricardo viste at selv om et land er best i alt, lønner det seg å spesialisere seg der alternativkostnaden er lavest.
- **Spesialisering** øker den samlede produksjonen, og begge land kan få mer gjennom handel.
- **Bytteforholdet** må ligge mellom de to landenes alternativkostnader for at begge skal tjene på handelen.
- Modellen har begrensninger (forenklede forutsetninger), men grunnprinsippet er empirisk godt dokumentert.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2: Handelspolitikk
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_3_2: TextbookChapter = {
  id: 'samfokonomi-2-3-2',
  courseId: 'samfokonomi-2',
  chapterNumber: '3.2',
  title: 'Handelspolitikk',
  description: 'Frihandel, toll, kvoter, subsidier og WTOs rolle i internasjonal handelspolitikk.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for teorier om internasjonal handel og drøfte virkninger av handelspolitikk',
  ],
  content: [
    {
      id: 'sf2-3-2-intro',
      type: 'text',
      content: `# Handelspolitikk

Selv om teorien om komparativ fordel viser at frihandel er fordelaktig, velger mange land å begrense handelen. De innfører toll, kvoter og andre handelshindringer for å beskytte sine egne næringer.

Hvorfor gjør de det? Og hva er konsekvensene?

**Handelspolitikk** handler om hvordan stater regulerer handelen med andre land. Det finnes et spekter fra fullstendig frihandel til streng proteksjonisme. I praksis ligger de fleste land et sted imellom.

I dette kapittelet ser vi på argumenter for og mot frihandel, ulike typer handelshindringer og deres virkninger, og rollen til Verdens handelsorganisasjon (WTO).`,
    },
    {
      id: 'sf2-3-2-def-1',
      type: 'definition',
      title: 'Frihandel og proteksjonisme',
      content: `**Frihandel** innebærer at varer og tjenester kan krysse landegrenser uten restriksjoner som toll, kvoter eller andre handelshindringer.

**Proteksjonisme** er en handelspolitikk der staten beskytter innenlandske produsenter mot utenlandsk konkurranse gjennom handelshindringer.

**Argumenter for frihandel:**
- Økt effektivitet gjennom spesialisering og komparativ fordel
- Lavere priser og større utvalg for forbrukerne
- Stordriftsfordeler når bedrifter selger til et større marked
- Økt konkurranse som driver innovasjon

**Argumenter for proteksjonisme:**
- Beskytte unge næringer som trenger tid til å bli konkurransedyktige (oppfostringsargumentet)
- Bevare arbeidsplasser i utsatte næringer
- Nasjonal sikkerhet (f.eks. matproduksjon, forsvar)
- Beskytte mot dumping (salg til under produksjonskostnad)`,
    },
    {
      id: 'sf2-3-2-def-2',
      type: 'definition',
      title: 'Toll (tariff)',
      content: `**Toll** er en avgift som legges på importerte varer. Det er den vanligste formen for handelshindring.

**Virkninger av toll:**
1. **Prisen stiger** for forbrukerne (importvaren blir dyrere)
2. **Innenlandsk produksjon øker** fordi lokale produsenter nå kan konkurrere bedre
3. **Importen synker** fordi den utenlandske varen er blitt dyrere
4. **Staten får inntekter** fra tollavgiften
5. **Samfunnsøkonomisk tap** oppstår fordi noe handel som ville vært lønnsom ikke lenger skjer

$$\\text{Forbrukertap} > \\text{Produsentgevinst} + \\text{Tollinntekt}$$

Det betyr at toll gir et netto velferdstap for samfunnet som helhet, selv om noen grupper (produsenter og staten) tjener på det.`,
    },
    {
      id: 'sf2-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Virkning av toll på ost',
      problem: 'Norge importerer ost til en verdensmarkedspris på 50 kr/kg. Regjeringen innfører en toll på 30 kr/kg. Forklar hva som skjer med prisen, norsk osteproduksjon og importen.',
      solution: `**Løsning:**

**Før toll:**
- Pris til forbruker: 50 kr/kg (verdensmarkedspris)
- Norsk produksjon er liten fordi det er billigere å importere

**Etter toll (30 kr/kg):**
- Importpris stiger til 50 + 30 = 80 kr/kg
- Norske produsenter kan nå selge ost til opptil 80 kr/kg og fortsatt være konkurransedyktige
- Norsk osteproduksjon øker (flere norske bønder finner det lønnsomt å produsere ost)
- Importen synker (noen forbrukere kjøper norsk ost i stedet, noen reduserer forbruket)

**Hvem vinner og taper?**
- **Vinnere:** Norske osteprodusenter (høyere pris og større salg), Staten (tollinntekter)
- **Tapere:** Norske forbrukere (betaler 80 i stedet for 50 kr/kg)
- **Netto:** Samfunnet taper totalt sett, fordi forbrukertapet er større enn produsentgevinsten pluss tollinntekten.`,
    },
    {
      id: 'sf2-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-2-ex-1',
        number: '3.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste virkningen av importtoll for forbrukerne?',
        multipleChoiceOptions: [
          'Prisene på importerte varer stiger, og forbrukerne får færre valgmuligheter',
          'Prisene på importerte varer synker fordi staten subsidierer',
          'Kvaliteten på varene forbedres',
          'Forbrukerne får tilgang til flere utenlandske varer',
        ],
        hints: ['Tenk på hva toll gjør med prisen på importvarer'],
        solution: 'Toll gjør importerte varer dyrere for forbrukerne. Når prisen stiger, kjøper forbrukerne mindre av importvaren. Noen bytter til dyrere innenlandske alternativer, mens andre reduserer forbruket. Resultatet er høyere priser og færre valgmuligheter for forbrukerne.',
      },
    },
    {
      id: 'sf2-3-2-def-3',
      type: 'definition',
      title: 'Kvoter og andre handelshindringer',
      content: `**Importkvote** er en øvre grense for hvor mye av en vare som kan importeres i en gitt periode.

**Virkninger av kvoter:**
- Begrenser tilbudet av importvarer direkte
- Driver opp prisen på den importerte varen (knapphet)
- Gir ikke staten inntekter (i motsetning til toll)
- Gevinsten går til de som får tildelt importlisenser

**Andre handelshindringer:**
- **Subsidier til innenlandsk produksjon:** Staten støtter lokale produsenter, som da kan selge billigere
- **Tekniske handelshindringer:** Krav til standarder, merking og godkjenning som kan være vanskelige for utenlandske produsenter å oppfylle
- **Sanitære og fytosanitære tiltak (SPS):** Krav til mattrygghet og dyrehelse
- **Dumping-toll:** Ekstra toll på varer som selges under produksjonskostnad
- **Valutamanipulasjon:** Holde egen valuta kunstig lav for å gjøre eksporten billigere`,
    },
    {
      id: 'sf2-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-2-ex-2',
        number: '3.2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er en viktig forskjell mellom toll og importkvoter?',
        multipleChoiceOptions: [
          'Toll gir staten inntekter, mens kvoter gir gevinsten til de som får importlisenser',
          'Toll øker prisen, men kvoter gjør det ikke',
          'Kvoter gir staten større inntekter enn toll',
          'Toll påvirker bare eksport, mens kvoter påvirker import',
        ],
        hints: ['Tenk på hvem som får pengene når prisen stiger'],
        solution: 'Både toll og kvoter øker prisen og reduserer importen. Men med toll går prisforskjellen til staten som tollinntekt. Med kvoter går gevinsten (den høyere prisen) til importørene som har fått lisens til å importere innenfor kvoten. Kvoter kan derfor være mindre gunstige for samfunnet fordi staten går glipp av inntektene.',
      },
    },
    {
      id: 'sf2-3-2-def-4',
      type: 'definition',
      title: 'Verdens handelsorganisasjon (WTO)',
      content: `**WTO (World Trade Organization)** ble opprettet i 1995 som etterfølgeren til GATT (General Agreement on Tariffs and Trade). WTO har 164 medlemsland.

**WTOs hovedoppgaver:**
1. **Forhandlinger:** Lede forhandlinger om reduksjon av handelshindringer
2. **Regelverk:** Administrere et regelverk for internasjonal handel
3. **Tvisteløsning:** Løse handelskonflikter mellom medlemsland
4. **Overvåking:** Overvåke medlemslandenes handelspolitikk

**Grunnprinsipper:**
- **Bestevilkårsprinsippet (MFN):** Handelsfordeler gitt til ett land må gis til alle WTO-medlemmer
- **Nasjonal behandling:** Importerte varer skal ikke diskrimineres i forhold til innenlandske varer
- **Gradvis liberalisering:** Tollsatser og andre hindringer skal reduseres over tid

**Utfordringer:** WTO har slitt med å fullføre Doha-runden (startet 2001), blant annet på grunn av uenighet mellom rike og fattige land om landbrukssubsidier.`,
    },
    {
      id: 'sf2-3-2-example-2',
      type: 'example',
      title: 'Eksempel: Norsk landbrukspolitikk og toll',
      problem: 'Norge har noen av verdens høyeste tollsatser på landbruksvarer. Tolltariffen på ost kan være over 200 %. Forklar hvorfor Norge velger å ha slik beskyttelse, og hva konsekvensene er.',
      solution: `**Løsning:**

**Hvorfor Norge beskytter landbruket:**
1. **Matvaresikkerhet:** Norge ønsker å opprettholde egen matproduksjon for krisesituasjoner
2. **Distriktspolitikk:** Landbruket gir arbeidsplasser og holder bygdene i hevd
3. **Kulturlandskap:** Beiting og jordbruk vedlikeholder norsk kulturlandskap
4. **Politisk støtte:** Sterke bondeorganisasjoner har tradisjonelt stor politisk innflytelse

**Konsekvenser:**
- Norske forbrukere betaler mye høyere matvarepriser enn i nabolandene
- Norske bønder er beskyttet mot konkurranse og har dermed mindre insentiv til effektivisering
- Norge får problemer i WTO-forhandlinger fordi andre land kritiserer tollmurene
- Subsidier og toll koster staten og forbrukerne milliarder årlig

**Avveining:** Samfunnet betaler en høy pris for å opprettholde norsk landbruk, men mange mener de ikke-økonomiske verdiene (matvaresikkerhet, distriktsbosetting, kulturlandskap) rettferdiggjør kostnadene.`,
    },
    {
      id: 'sf2-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-2-ex-3',
        number: '3.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva oppfostringsargumentet for proteksjonisme går ut på. Gi et eksempel, og drøft om argumentet er overbevisende.',
        hints: [
          'Oppfostringsargumentet handler om unge næringer som trenger tid til å vokse',
          'Tenk på om midlertidig beskyttelse faktisk fører til at næringen blir konkurransedyktig',
        ],
        solution: 'Oppfostringsargumentet (infant industry argument) sier at nye næringer i et land kan trenge midlertidig beskyttelse mot utenlandsk konkurranse for å få tid til å vokse, oppnå stordriftsfordeler og bli konkurransedyktige. Eksempel: Sør-Korea beskyttet sin bilindustri på 1960-70-tallet, og i dag er Hyundai og Kia globalt konkurransedyktige. Argumentet er delvis overbevisende fordi det finnes suksesshistorier, men det har svakheter: (1) Det er vanskelig å velge riktige næringer å beskytte. (2) Midlertidig beskyttelse har en tendens til å bli permanent. (3) Beskyttede bedrifter kan bli avhengige av støtte i stedet for å bli effektive.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-2-ex-4',
        number: '3.2.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva WTOs bestevilkårsprinsipp (MFN) betyr i praksis. Hvorfor er dette prinsippet viktig for internasjonal handel?',
        hints: [
          'MFN = Most Favoured Nation: alle skal behandles likt',
          'Tenk på hva som ville skjedd uten dette prinsippet',
        ],
        solution: 'Bestevilkårsprinsippet (Most Favoured Nation) betyr at dersom et WTO-land gir en handelsfordel til ett land (f.eks. lavere toll), må det gi den samme fordelen til alle andre WTO-medlemmer. I praksis: Hvis Norge senker tollen på elektronikk fra Japan, må Norge også senke tollen på elektronikk fra alle andre WTO-land. Prinsippet er viktig fordi det: (1) Forhindrer diskriminering mellom handelspartnere. (2) Gjør handelssystemet mer forutsigbart. (3) Sikrer at små land får de samme fordelene som store land. Unntak finnes for regionale handelsavtaler (som EU og EOS) og for utviklingsland (preferanseordninger).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-2-ex-5',
        number: '3.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om frihandel alltid er fordelaktig. Bruk både økonomiske og ikke-økonomiske argumenter i svaret ditt.',
        hints: [
          'Økonomiske fordeler: effektivitet, lavere priser, innovasjon',
          'Mulige ulemper: arbeidsledighet i utsatte næringer, miljøhensyn, avhengighet',
        ],
        solution: 'Frihandel er fordelaktig for samfunnet totalt sett gjennom lavere priser, større utvalg og mer effektiv ressursbruk. Men det er ikke alltid fordelaktig for alle grupper: (1) Arbeidere i næringer som taper konkurransen kan miste jobben. (2) Utviklingsland kan bli låst inne i eksport av råvarer uten å utvikle egen industri. (3) Miljøet kan lide hvis land konkurrerer om å ha lavest miljøregulering (race to the bottom). (4) Kulturelle verdier og lokal matproduksjon kan gå tapt. (5) Stor avhengighet av import kan være sårbart i kriser (som Covid-19 viste). Konklusjon: Frihandel er generelt fordelaktig, men må kombineres med god fordelingspolitikk, miljøregulering og beredskap. De fleste økonomer mener at løsningen på frihandelens ulemper er bedre omstillingspolitikk, ikke mer proteksjonisme.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-2-ex-6',
        number: '3.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'I 2018-2019 innførte USA og Kina gjensidig straffetoll på hundrevis av varer. Forklar hva en handelskrig er, og analyser hvem som taper på en slik konflikt.',
        hints: [
          'En handelskrig er når land gjensidig øker toll og handelshindringer',
          'Tenk på virkningene for forbrukere, bedrifter og verdensøkonomien',
        ],
        solution: 'En handelskrig oppstår når land gjensidig innfører straffetoll og andre handelshindringer mot hverandres varer. I handelskrigen mellom USA og Kina innførte begge toll på hundrevis av milliarder dollar i varer. Taperne er: (1) Forbrukere i begge land som betaler høyere priser. (2) Bedrifter som er avhengige av importerte innsatsvarer (f.eks. amerikanske bønder som mistet det kinesiske markedet). (3) Tredjeland som rammes av lavere global handel og usikkerhet. (4) Verdensøkonomien som helhet, fordi redusert handel gir lavere effektivitet. Forskning viser at amerikanske forbrukere bar det meste av kostnadene ved USAs toll, mens kinesiske eksportører også tapte markedsandeler. Handelskrigen illustrerer at proteksjonisme sjelden gir de resultatene politikerne lover.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-3-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- **Frihandel** gir lavere priser, større utvalg og mer effektiv ressursbruk, men kan ha ulemper for bestemte grupper.
- **Toll** gjør importvarer dyrere, beskytter innenlandsk produksjon, men gir et netto samfunnsøkonomisk tap.
- **Kvoter** begrenser importmengden direkte og gir gevinst til lisensholdere, ikke staten.
- Andre handelshindringer inkluderer subsidier, tekniske krav og dumping-toll.
- **WTO** arbeider for frihandel gjennom forhandlinger, regelverk og tvisteløsning, men står overfor store utfordringer.
- Handelspolitikk innebærer alltid en avveining mellom økonomisk effektivitet og andre målsetninger som sysselsetting, sikkerhet og miljø.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.3: Handelsavtaler og EU/EØS
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_3_3: TextbookChapter = {
  id: 'samfokonomi-2-3-3',
  courseId: 'samfokonomi-2',
  chapterNumber: '3.3',
  title: 'Handelsavtaler og EU/EØS',
  description: 'EØS-avtalen, EFTA, bilaterale handelsavtaler og Norges tilknytning til det europeiske markedet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for teorier om internasjonal handel og drøfte virkninger av handelspolitikk',
    'analysere Norges rolle i internasjonal økonomi',
  ],
  content: [
    {
      id: 'sf2-3-3-intro',
      type: 'text',
      content: `# Handelsavtaler og EU/EØS

Mens WTO arbeider for global frihandel, har mange land valgt å gå raskere frem gjennom regionale og bilaterale handelsavtaler. Den viktigste av disse for Norge er **EØS-avtalen**, som gir tilgang til EUs indre marked.

Norge er ikke medlem av EU, men gjennom EØS-avtalen er vi tettere knyttet til det europeiske markedet enn de fleste land utenfor EU. Omtrent 60-70 % av Norges handel er med EU-land.

I dette kapittelet ser vi på ulike former for handelsavtaler, EØS-avtalens innhold og betydning, og Norges handelspolitiske posisjon.`,
    },
    {
      id: 'sf2-3-3-def-1',
      type: 'definition',
      title: 'Former for økonomisk integrasjon',
      content: `Det finnes ulike grader av økonomisk integrasjon mellom land, fra løst samarbeid til full union:

**1. Frihandelsavtale:**
Partene fjerner toll og kvoter seg imellom, men beholder egen handelspolitikk overfor tredjeland. Eksempel: EFTA.

**2. Tollunion:**
Felles frihandel mellom medlemmene og felles ytre toll mot tredjeland. Eksempel: EUs tollunion.

**3. Det indre marked (felles marked):**
Fri bevegelse av varer, tjenester, kapital og arbeidskraft. Eksempel: EUs indre marked (som Norge deltar i gjennom EØS).

**4. Økonomisk union:**
Felles marked pluss harmonisering av økonomisk politikk. Eksempel: EU.

**5. Monetær union:**
Økonomisk union med felles valuta. Eksempel: Eurosonen.

Jo høyere grad av integrasjon, jo større er de potensielle handelsgevinstene, men også jo mer nasjonal suverenitet avgis.`,
    },
    {
      id: 'sf2-3-3-def-2',
      type: 'definition',
      title: 'EØS-avtalen',
      content: `**EØS-avtalen** (Det europeiske økonomiske samarbeidsområde) ble inngått i 1992 og trådte i kraft i 1994. Den knytter EFTA-landene Norge, Island og Liechtenstein til EUs indre marked.

**Hva EØS-avtalen gir:**
- **Fri bevegelse av varer:** Norske bedrifter kan selge varer i hele EU/EØS uten toll og kvoter (men landbruk og fisk er i hovedsak unntatt)
- **Fri bevegelse av tjenester:** Norske selskaper kan tilby tjenester i EU, og omvendt
- **Fri bevegelse av kapital:** Frie kapitalstrømmer mellom Norge og EU
- **Fri bevegelse av personer:** Nordmenn kan bo og arbeide i EU-land, og EU-borgere i Norge

**Hva EØS-avtalen IKKE dekker:**
- Landbrukspolitikk (Norge har egen landbrukstoll)
- Fiskeripolitikk (Norge har kontroll over egne fiskeressurser)
- Utenriks- og sikkerhetspolitikk
- Justis- og innvandringspolitikk (delvis)
- Skattepolitikk

**Demokratisk utfordring:** Norge må i praksis overta EU-regelverk uten stemmerett i EUs beslutningsorganer.`,
    },
    {
      id: 'sf2-3-3-example-1',
      type: 'example',
      title: 'Eksempel: EØS-avtalens betydning for norsk næringsliv',
      problem: 'Forklar hvordan EØS-avtalen påvirker en norsk industribedrift som eksporterer aluminium til Europa.',
      solution: `**Løsning:**

**Uten EØS-avtalen:**
- Norsk aluminium ville møtt EUs ytre toll (som kan være flere prosent)
- Bedriften måtte gjennom EUs tollprosedyrer og dokumentasjonskrav
- Kostnaden ved å eksportere ville være høyere, og bedriften ville være mindre konkurransedyktig

**Med EØS-avtalen:**
- Norsk aluminium handles tollfritt i hele EU/EØS-området
- Felles produktstandarder betyr at varen godkjennes i alle EU-land uten ekstra testing
- Bedriften kan rekruttere arbeidskraft fra hele Europa
- Kapital kan flyttes fritt for investeringer

**Konkret eksempel:** Hydro, Norges største aluminiumprodusent, eksporterer mesteparten av sin produksjon til EU. Uten EØS-avtalen ville Hydro møtt tollbarrierer som ville gjort norsk aluminium dyrere enn konkurrenter innenfor EU. EØS-avtalen er dermed avgjørende for norsk aluminiumsindustris konkurranseevne.`,
    },
    {
      id: 'sf2-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-3-ex-1',
        number: '3.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke fire friheter er kjernen i EØS-avtalen?',
        multipleChoiceOptions: [
          'Fri bevegelse av varer, tjenester, kapital og personer',
          'Fri bevegelse av varer, penger, informasjon og teknologi',
          'Fri handel, felles valuta, felles forsvar og felles skattepolitikk',
          'Fri eksport, fri import, felles toll og felles regelverk',
        ],
        hints: ['De fire frihetene handler om hva som kan bevege seg fritt over grensene'],
        solution: 'EØS-avtalens fire friheter er fri bevegelse av varer, tjenester, kapital og personer. Dette betyr at norske varer kan selges i EU uten toll, norske selskaper kan tilby tjenester i EU, kapital kan investeres fritt, og nordmenn kan bo og jobbe i EU-land (og omvendt). Landbruk og fisk er delvis unntatt.',
      },
    },
    {
      id: 'sf2-3-3-text-2',
      type: 'text',
      title: 'EFTA og Norges handelsavtaler',
      content: `## EFTA og Norges handelsavtaler

**EFTA** (European Free Trade Association) ble grunnlagt i 1960 og består i dag av Norge, Sveits, Island og Liechtenstein. EFTA er en frihandelsorganisasjon, ikke en tollunion som EU.

**EFTAs handelsavtaler:**
EFTA forhandler handelsavtaler med land utenfor EU på vegne av sine medlemmer. EFTA har over 30 frihandelsavtaler med mer enn 40 land, blant annet:
- Canada, Sør-Korea, Singapore, Tyrkia, Chile, Mexico
- Kina, India og Japan er blant landene det forhandles med

**Norges handelsnettverk:**
Gjennom EØS-avtalen og EFTAs frihandelsavtaler har Norge tilgang til de fleste store markedene i verden. I tillegg har Norge noen bilaterale avtaler.

**Handelsstruktur:**
- Ca. 60-70 % av norsk handel er med EU/EØS-land
- Storbritannia (etter Brexit) har en egen handelsavtale med Norge
- Olje og gass utgjør en stor del av norsk eksport, og handles globalt uavhengig av handelsavtaler`,
    },
    {
      id: 'sf2-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-3-ex-2',
        number: '3.3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er forskjellen mellom EFTA (som Norge er medlem av) og EUs tollunion?',
        multipleChoiceOptions: [
          'EFTA er en frihandelsavtale der medlemmene beholder egen handelspolitikk, mens EUs tollunion har felles ytre toll',
          'EFTA har felles valuta, mens EU ikke har det',
          'EFTA inkluderer alle EU-land, mens tollunionen bare gjelder noen',
          'Det er ingen vesentlig forskjell mellom EFTA og EUs tollunion',
        ],
        hints: ['Tenk på om medlemmene kan ha ulike tollsatser overfor tredjeland'],
        solution: 'I EFTA har hvert medlemsland sin egen handelspolitikk overfor land utenfor EFTA. Norge kan for eksempel ha andre tollsatser mot Kina enn Sveits. I EUs tollunion har alle medlemmer identisk ytre toll - de kan ikke sette egne tollsatser. Denne forskjellen er viktig fordi den gir EFTA-landene mer fleksibilitet, men betyr også at EFTAs indre marked er mindre integrert enn EUs.',
      },
    },
    {
      id: 'sf2-3-3-def-3',
      type: 'definition',
      title: 'Handelsvridning og handelsavtaler',
      content: `Regionale handelsavtaler kan skape både **handelsgevinster** og **handelsvridning**:

**Handelsskaping (trade creation):**
Når en handelsavtale gjør det billigere å importere fra et partnerland, og dette erstatter dyrere innenlandsk produksjon, oppstår det en gevinst. Ressursene brukes mer effektivt.

**Handelsvridning (trade diversion):**
Når en handelsavtale gjør at import flyttes fra et billig tredjeland (som må betale toll) til et dyrere partnerland (som er tollfritt), oppstår et tap. Handelen vris bort fra den mest effektive produsenten.

**Eksempel:** Hvis Norge gjennom EØS importerer ost fra Frankrike (tollfritt) i stedet for billigere ost fra New Zealand (som må betale toll), er det handelsvridning. Norske forbrukere betaler mer enn nødvendig.

For at en handelsavtale skal være netto fordelaktig, må handelskapingen være større enn handelsvridningen.`,
    },
    {
      id: 'sf2-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-3-ex-3',
        number: '3.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom handelsskaping og handelsvridning med et selvvalgt eksempel. Når er en regional handelsavtale fordelaktig for et land?',
        hints: [
          'Handelsskaping: handel erstatter dyr innenlandsk produksjon med billigere import fra partner',
          'Handelsvridning: handel flyttes fra billig tredjeland til dyrere partnerland',
        ],
        solution: 'Handelsskaping: Når Norge gjennom EØS kan importere svenske maskiner tollfritt og dette erstatter dyrere norskproduserte maskiner, oppstår en gevinst. Ressursene i Norge kan brukes til noe vi er bedre på. Handelsvridning: Hvis Norge kjøper dyrere EU-varer i stedet for billigere varer fra Kina fordi EU-varene er tollfrie, er det et tap. En regional handelsavtale er fordelaktig når handelskapingen er større enn handelsvridningen. I Norges tilfelle er EØS-avtalen trolig klart netto fordelaktig fordi EU/EØS-landene er effektive produsenter av de fleste industrivarer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-3-ex-4',
        number: '3.3.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'EØS-avtalen omtales ofte som et demokratisk underskudd for Norge. Forklar hva dette betyr, og drøft om fordelene ved EØS-avtalen oppveier denne ulempen.',
        hints: [
          'Norge overtar EU-regelverk uten stemmerett i EUs beslutningsorganer',
          'Tenk på både økonomiske fordeler og demokratiske kostnader',
        ],
        solution: 'Det demokratiske underskuddet betyr at Norge må innføre EU-regelverk (direktiver og forordninger) uten å ha stemmerett i EU-parlamentet eller Rådet. Norge kan påvirke gjennom høring og innspill, men har ikke formell beslutningsmakt. Fordeler som oppveier: (1) Tilgang til et marked med over 450 millioner forbrukere. (2) Tollfri handel med Norges viktigste handelspartnere. (3) Forutsigbare og harmoniserte regler for næringslivet. (4) Fri bevegelse av arbeidskraft. Ulemper: (1) Tap av suverenitet i regelverksutforming. (2) Norske særinteresser kan bli overkjørt. (3) Legitimitetsproblem når borgerne ikke kan påvirke reglene gjennom valg. De fleste økonomer mener de økonomiske fordelene er betydelige, men demokratispørsmålet er et politisk verdivalg som ikke kan avgjøres av økonomi alene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-3-ex-5',
        number: '3.3.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Storbritannia forlot EU i 2020 (Brexit). Forklar kort hvilke handelspolitiske konsekvenser dette har hatt for Storbritannia, og hvorfor mange økonomer advarte mot Brexit.',
        hints: [
          'Storbritannia mistet tollfri tilgang til EUs indre marked for mange varer',
          'Tenk på økte handelskostnader, tollprosedyrer og usikkerhet for bedrifter',
        ],
        solution: 'Etter Brexit mistet Storbritannia full tilgang til EUs indre marked. Selv med en handelsavtale har det oppstått: (1) Tollprosedyrer og grensekontroll som forsinker handel og øker kostnader. (2) Bortfall av fri bevegelse av arbeidskraft, noe som har skapt mangel i flere sektorer. (3) Tap av passporting-rettigheter for finanstjenester. (4) Usikkerhet for bedrifter som har redusert investeringer. Økonomer advarte fordi: Storbritannia hadde nesten halvparten av sin handel med EU. Å gjeninnføre handelsbarrierer mot din største handelspartner er økonomisk kostbart. Studier viser at Brexit har redusert britisk BNP med anslagsvis 2-5 % sammenlignet med et scenario uten Brexit.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-3-ex-6',
        number: '3.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Norge har valgt å stå utenfor EU men innenfor EØS. Drøft fordeler og ulemper ved denne posisjonen sammenlignet med fullt EU-medlemskap.',
        hints: [
          'Fordeler: Bevarer kontroll over fiskeri, landbruk og oljefond',
          'Ulemper: Mindre innflytelse på regler vi likevel må følge',
        ],
        solution: 'Fordeler ved EØS fremfor EU-medlemskap: (1) Norge beholder kontrollen over fiskeressursene, som er svært verdifulle. (2) Egen landbrukspolitikk med høyt tollvern. (3) Norge slipper å bidra til EUs landbruksstøtte (CAP). (4) Oljefondet forvaltes uavhengig av EU. (5) Utenriks- og sikkerhetspolitisk selvstendighet. Ulemper: (1) Ingen stemmerett i EU-beslutninger vi må følge. (2) Begrenset innflytelse på regler for det indre markedet. (3) Usikkerhet: EØS-avtalen kan i teorien sies opp. (4) Norge står utenfor EUs handelsavtaler med tredjeland og må forhandle egne. (5) EØS-avgiften er betydelig. Norges løsning er et kompromiss som gir stor markedstilgang men begrenset politisk innflytelse. Om dette er optimalt avhenger av hvilke verdier man vektlegger høyest.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-3-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- Økonomisk integrasjon har ulike grader: frihandelsavtale, tollunion, indre marked, økonomisk union og monetær union.
- **EØS-avtalen** gir Norge tilgang til EUs indre marked med fire friheter (varer, tjenester, kapital, personer), men uten stemmerett i EUs organer.
- **EFTA** forhandler handelsavtaler med tredjeland på vegne av medlemmene.
- Handelsavtaler kan gi både **handelsskaping** (gevinst) og **handelsvridning** (tap).
- Norges handelspolitiske posisjon (utenfor EU, innenfor EØS) er et kompromiss med både fordeler og ulemper.
- Ca. 60-70 % av norsk handel er med EU/EØS-området, noe som understreker avtalens betydning.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.4: Valutakurser og valutamarkeder
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_3_4: TextbookChapter = {
  id: 'samfokonomi-2-3-4',
  courseId: 'samfokonomi-2',
  chapterNumber: '3.4',
  title: 'Valutakurser og valutamarkeder',
  description: 'Flytende og faste valutakurser, tilbud og etterspørsel i valutamarkedet, og hva som påvirker kronekursen.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere hvordan valutakurser påvirker økonomien og drøfte ulike valutakurssystemer',
  ],
  content: [
    {
      id: 'sf2-3-4-intro',
      type: 'text',
      content: `# Valutakurser og valutamarkeder

Når et norsk selskap kjøper maskiner fra Tyskland, må det betale i euro. Når en japansk turist besøker Norge, må hun veksle yen til norske kroner. Slike transaksjoner skjer i **valutamarkedet**, som er verdens største finansmarked med en daglig omsetning på over 7 billioner amerikanske dollar.

**Valutakursen** er prisen på en valuta uttrykt i en annen valuta. For Norge er det spesielt viktig hva kronen er verdt i forhold til euro og dollar, siden mesteparten av vår handel skjer i disse valutaene.

I dette kapittelet ser vi på hvordan valutakurser bestemmes, forskjellen mellom flytende og faste kursregimer, og hva som påvirker den norske kronekursen.`,
    },
    {
      id: 'sf2-3-4-def-1',
      type: 'definition',
      title: 'Valutakurs',
      content: `**Valutakursen** er prisen på en valuta uttrykt i en annen valuta.

Det finnes to måter å uttrykke valutakursen på:

**Direkte notering (europeisk):**
Hvor mange enheter av hjemmevalutaen trengs for å kjøpe en enhet utenlandsk valuta.
Eksempel: 1 EUR = 11,50 NOK (det koster 11,50 kroner å kjøpe 1 euro)

**Indirekte notering:**
Hvor mange enheter utenlandsk valuta får man for en enhet hjemmevaluta.
Eksempel: 1 NOK = 0,087 EUR

I Norge bruker vi vanligvis direkte notering.

**Appresiering (styrking):** Kronen stiger i verdi - man trenger færre kroner for å kjøpe en euro.
**Depresiering (svekkelse):** Kronen faller i verdi - man trenger flere kroner for å kjøpe en euro.

Merk: Når kursen (i direkte notering) går ned, betyr det at kronen har **styrket** seg.`,
    },
    {
      id: 'sf2-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Styrking og svekkelse av kronen',
      problem: 'Eurokursen endrer seg fra 11,00 NOK/EUR til 12,00 NOK/EUR. Har kronen styrket seg eller svekket seg? Hva betyr dette for en norsk bedrift som importerer varer fra EU?',
      solution: `**Løsning:**

Kursen har gått **opp** fra 11,00 til 12,00 NOK/EUR. Det betyr at det nå koster mer kroner å kjøpe en euro.

**Kronen har svekket seg (depresiert).**

**Konsekvenser for en norsk importør:**
- En maskin som koster 10 000 EUR kostet før: 10 000 x 11,00 = 110 000 NOK
- Nå koster den: 10 000 x 12,00 = 120 000 NOK
- Importøren må betale 10 000 NOK mer for samme maskin

**Men for en norsk eksportør er det motsatt:**
- En norsk eksportør som selger laks for 10 000 EUR får nå 120 000 NOK i stedet for 110 000 NOK
- Svakere krone er bra for eksportører, men dårlig for importører

**Huskeregel:** Svak krone = dyr import, konkurransedyktig eksport. Sterk krone = billig import, dyr eksport.`,
    },
    {
      id: 'sf2-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-4-ex-1',
        number: '3.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Dollarkursen går fra 10,50 NOK/USD til 9,80 NOK/USD. Hva har skjedd med den norske kronen?',
        multipleChoiceOptions: [
          'Kronen har styrket seg (appresiert) - det koster nå færre kroner per dollar',
          'Kronen har svekket seg (depresiert) - det koster nå flere kroner per dollar',
          'Kronen er uendret',
          'Det er umulig å si uten mer informasjon',
        ],
        hints: ['Når kursen i NOK per dollar går ned, trenger du færre kroner for å kjøpe en dollar'],
        solution: 'Når dollarkursen synker fra 10,50 til 9,80 NOK/USD, betyr det at du trenger færre kroner for å kjøpe en dollar. Kronen har styrket seg (appresiert). En sterkere krone gjør import billigere og eksport dyrere.',
      },
    },
    {
      id: 'sf2-3-4-def-2',
      type: 'definition',
      title: 'Flytende og faste valutakurser',
      content: `**Flytende valutakurs:**
Valutakursen bestemmes av tilbud og etterspørsel i valutamarkedet uten at sentralbanken griper inn. De fleste store økonomier (USA, EU, Japan, Storbritannia, Norge) har flytende kurs.

**Fordeler:** Automatisk justering ved økonomiske sjokk, pengepolitisk selvstendighet.
**Ulemper:** Kurssvingninger skaper usikkerhet for bedrifter.

**Fast valutakurs:**
Sentralbanken binder kursen til en annen valuta (eller en kurv av valutaer) og intervenerer i valutamarkedet for å holde kursen stabil.

**Fordeler:** Forutsigbarhet for handel og investering.
**Ulemper:** Krever store valutareserver, tap av pengepolitisk selvstendighet.

**Flytende kurs med inflasjonsmåling (Norges system):**
Norges Bank styrer pengepolitikken etter et inflasjonsmål på rundt 2 %. Valutakursen flyter fritt, men Norges Bank kan i teorien intervenere i ekstraordinære situasjoner. I praksis har Norges Bank ikke intervenert i valutamarkedet på mange år.`,
    },
    {
      id: 'sf2-3-4-text-2',
      type: 'text',
      title: 'Tilbud og etterspørsel i valutamarkedet',
      content: `## Tilbud og etterspørsel i valutamarkedet

Valutakursen i et flytende kursregime bestemmes av tilbud og etterspørsel:

**Etterspørsel etter norske kroner (NOK) øker når:**
- Utlendinger kjøper norske varer (eksport)
- Utenlandske investorer vil investere i Norge
- Utenlandske turister besøker Norge
- Spekulanter tror kronen vil styrke seg

**Tilbudet av norske kroner øker når:**
- Nordmenn kjøper utenlandske varer (import)
- Norske investorer investerer i utlandet
- Nordmenn reiser til utlandet
- Spekulanter tror kronen vil svekke seg

**Hva driver kronekursen i praksis?**
- **Oljeprisen:** Høyere oljepris styrker kronen fordi Norges eksportinntekter øker
- **Rentedifferansen:** Høyere norsk rente relativt til utlandet tiltrekker kapital og styrker kronen
- **Risikovilje:** I urolige tider flykter investorer til trygge havner (USD, CHF), og små valutaer som NOK svekkes
- **Handelsbalansen:** Overskudd på handelsbalansen styrker kronen over tid
- **Økonomiske utsikter:** Gode utsikter for norsk økonomi styrker kronen`,
    },
    {
      id: 'sf2-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-4-ex-2',
        number: '3.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Oljeprisen stiger kraftig. Hva forventer vi at skjer med den norske kronekursen?',
        multipleChoiceOptions: [
          'Kronen styrker seg fordi økte eksportinntekter øker etterspørselen etter kroner',
          'Kronen svekker seg fordi norsk import blir dyrere',
          'Kronen påvirkes ikke av oljeprisen',
          'Kronen styrker seg fordi nordmenn reiser mer til utlandet',
        ],
        hints: ['Tenk på hva som skjer med etterspørselen etter norske kroner når oljeeksporten gir mer penger'],
        solution: 'Når oljeprisen stiger, øker Norges eksportinntekter. Utenlandske kjøpere må veksle mer valuta til norske kroner for å betale for oljen. Etterspørselen etter NOK øker, og kronen styrker seg (appresiert). Empirisk er det en klar sammenheng mellom oljeprisen og kronekursen, selv om andre faktører også spiller inn.',
      },
    },
    {
      id: 'sf2-3-4-def-3',
      type: 'definition',
      title: 'Valutarisiko og kurssikring',
      content: `**Valutarisiko** er risikoen for tap på grunn av endringer i valutakursen.

**Hvem er utsatt?**
- Eksportører som selger i utenlandsk valuta
- Importører som kjøper i utenlandsk valuta
- Investorer med plasseringer i utlandet
- Bedrifter med gjeld i utenlandsk valuta

**Kurssikring (hedging):**
Bedrifter kan beskytte seg mot valutarisiko gjennom finansielle instrumenter:

- **Terminkontrakt:** Avtale om å kjøpe eller selge valuta til en fastsatt kurs på et fremtidig tidspunkt
- **Valutaopsjon:** Rett (men ikke plikt) til å kjøpe eller selge valuta til en fastsatt kurs
- **Naturlig sikring:** Matche inntekter og kostnader i samme valuta

**Eksempel:** En norsk lakseeksportør som vet at han får 1 million euro om 3 måneder, kan inngå en terminkontrakt som sikrer kursen. Da vet han nøyaktig hvor mange kroner han får, uavhengig av hva kursen er om 3 måneder.`,
    },
    {
      id: 'sf2-3-4-example-2',
      type: 'example',
      title: 'Eksempel: Kronekursen under koronapandemien',
      problem: 'I mars 2020 svekket den norske kronen seg dramatisk - fra ca. 10 NOK/EUR til nesten 13 NOK/EUR på få uker. Forklar hvorfor dette skjedde.',
      solution: `**Løsning:**

Kronens dramatiske fall i mars 2020 skyldtes flere samtidige faktører:

**1. Oljeprisfall:**
Oljeprisen stupte fra ca. 60 til under 20 dollar per fat. Siden Norge er en oljeeksportør, svekket dette etterspørselen etter kroner.

**2. Flukt til trygge havner:**
Investorer solgte risikable aktiva og små valutaer (som NOK) og kjøpte dollar og sveitserfranc.

**3. Generell markedspanikk:**
Covid-19 skapte enorm usikkerhet om verdensøkonomien. Små, åpne økonomier som Norge ble hardt rammet av kapitalflukt.

**4. Rentekutt:**
Norges Bank kuttet renten, noe som reduserte rentedifferansen mot utlandet og gjorde norske kroner mindre attraktive for investorer.

**Konsekvens:** Den svake kronen gjorde import dyrere for norske forbrukere, men hjalp norske eksportører (utenom olje) fordi deres varer ble billigere i utlandet. Kronen hentet seg inn utover 2020-2021.`,
    },
    {
      id: 'sf2-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-4-ex-3',
        number: '3.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor et land med flytende valutakurs har større pengepolitisk selvstendighet enn et land med fast valutakurs.',
        hints: [
          'Med fast kurs må sentralbanken bruke renten til å forsvare kursen',
          'Med flytende kurs kan sentralbanken bruke renten til å styre inflasjonen',
        ],
        solution: 'Med fast valutakurs må sentralbanken hele tiden intervenere for å holde kursen stabil. Hvis kapitalen strømmer ut av landet, må sentralbanken heve renten for å gjøre valutaen attraktiv, selv om økonomien trenger lavere rente. Med flytende kurs kan sentralbanken sette renten ut fra innenlandske behov (inflasjon og sysselsetting), fordi valutakursen tar seg av ytre ubalanser automatisk. For eksempel: Under en resesjon kan et land med flytende kurs senke renten for å stimulere økonomien, mens kurssvekkelsen som følger automatisk gjør eksporten mer konkurransedyktig. Et land med fast kurs kan ikke gjøre dette uten å risikere et valutaangrep.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-4-ex-4',
        number: '3.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En norsk bedrift skal importere maskiner fra Japan til en verdi av 50 millioner yen om 6 måneder. Nåværende kurs er 0,08 NOK/JPY. Forklar hvorfor bedriften har valutarisiko, og hvordan den kan sikre seg med en terminkontrakt.',
        hints: [
          'Hva skjer hvis kronen svekkes mot yen i løpet av 6 måneder?',
          'En terminkontrakt låser kursen i dag for en fremtidig transaksjon',
        ],
        solution: 'Bedriften må betale 50 mill. JPY om 6 måneder. Med dagens kurs (0,08 NOK/JPY) koster det 50 000 000 x 0,08 = 4 000 000 NOK. Risiko: Hvis kronen svekkes til f.eks. 0,09 NOK/JPY, koster det 4 500 000 NOK - en merkostnad på 500 000 NOK. Med en terminkontrakt: Bedriften avtaler i dag med banken å kjøpe 50 mill. JPY om 6 måneder til en fastsatt kurs (f.eks. 0,081 NOK/JPY). Da vet bedriften nøyaktig at den må betale 4 050 000 NOK, uansett hva markedskursen er om 6 måneder. Terminkursen er litt høyere enn spotkursen (prisen på sikkerhet), men bedriften eliminerer valutarisikoen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-4-ex-5',
        number: '3.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft fordeler og ulemper ved den norske kronens tendens til å svekke seg i krisetider. Er det bra eller dårlig for norsk økonomi at kronen er en syklisk valuta?',
        hints: [
          'Svak krone i krisetider gjør eksport billigere og import dyrere',
          'Tenk på både eksportnæring og importavhengige forbrukere',
        ],
        solution: 'Fordeler ved at kronen svekkes i kriser: (1) Norsk eksportindustri (utenom olje) får en automatisk konkurransefordel når kronen svekkes - varene blir billigere for utenlandske kjøpere. (2) Det fungerer som en automatisk stabilisator som demper nedgangen i norsk økonomi. (3) Turisme til Norge blir billigere for utlendinger. Ulemper: (1) Import blir dyrere, noe som rammer forbrukere og bedrifter som er avhengige av importerte innsatsvarer. (2) Økt importert inflasjon kan tvinge Norges Bank til å holde renten høyere enn ønsket. (3) Usikkerhet rundt kronekursen kan redusere utenlandske investeringer i Norge. Totalt sett anses det ofte som en fordel at valutakursen fungerer som støtdemper, men det krever at økonomien er fleksibel nok til å utnytte mulighetene en svak krone gir.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-4-ex-6',
        number: '3.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Kina har i lang tid blitt kritisert for å holde sin valuta (yuan/renminbi) kunstig svak. Forklar hvordan et land kan manipulere valutakursen, og hvorfor dette er kontroversielt.',
        hints: [
          'Sentralbanken kan kjøpe utenlandsk valuta for å svekke egen valuta',
          'Tenk på hvem som tjener og taper på en kunstig svak valuta',
        ],
        solution: 'Et land kan holde valutaen kunstig svak ved at sentralbanken kjøper store mengder utenlandsk valuta (f.eks. amerikanske dollar) og selger egen valuta. Dette øker tilbudet av egen valuta og holder kursen lav. Kina har bygget opp enorme valutareserver på denne måten. Kontroversielt fordi: (1) En svak valuta gjør landets eksport kunstig billig, noe som gir det en urettferdig konkurransefordel. (2) Det fungerer som en skjult subsidie av eksportindustrien. (3) Andre land mister arbeidsplasser når de ikke kan konkurrere mot kunstig billige kinesiske varer. (4) Det bidrar til globale ubalanser. USA har gjentatte ganger truet med mottiltak. WTO-regelverket forbyr ikke direkte valutamanipulasjon, men IMF overvåker det. I senere år har Kina gradvis latt valutaen styrke seg noe.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-3-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- **Valutakursen** er prisen på en valuta uttrykt i en annen. Appresiering betyr styrking, depresiering betyr svekkelse.
- **Flytende valutakurs** bestemmes av tilbud og etterspørsel. **Fast valutakurs** opprettholdes av sentralbanken.
- Norges kronekurs påvirkes spesielt av oljeprisen, rentedifferansen og global risikovilje.
- Svak krone er bra for eksportører men dårlig for importører og forbrukere.
- **Valutarisiko** kan sikres med terminkontrakter, opsjoner eller naturlig sikring.
- Norge har flytende kurs med inflasjonsmåling, som gir pengepolitisk selvstendighet.
- Kronekursens tendens til å svekke seg i krisetider fungerer som en automatisk stabilisator.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.5: Betalingsbalansen
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_3_5: TextbookChapter = {
  id: 'samfokonomi-2-3-5',
  courseId: 'samfokonomi-2',
  chapterNumber: '3.5',
  title: 'Betalingsbalansen',
  description: 'Driftsbalansen, kapitalbalansen, Norges betalingsbalanse og oljefondets rolle.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere Norges rolle i internasjonal økonomi',
    'gjøre rede for sentrale begreper i utenriksøkonomien',
  ],
  content: [
    {
      id: 'sf2-3-5-intro',
      type: 'text',
      content: `# Betalingsbalansen

Alle økonomiske transaksjoner mellom et land og resten av verden registreres i **betalingsbalansen**. Den gir et helhetlig bilde av landets økonomiske forbindelser med utlandet: hva vi eksporterer og importerer, hvor mye vi tjener på investeringer i utlandet, og hvordan kapital strømmer inn og ut.

For Norge er betalingsbalansen spesielt interessant fordi olje- og gasseksporten gir enorme overskudd på driftsbalansen. Disse overskuddene investeres gjennom **Statens pensjonsfond utland** (oljefondet) i utenlandske verdipapirer.

I dette kapittelet ser vi på betalingsbalansens oppbygning, hva driftsbalansen og kapitalbalansen viser, og hvordan Norges unike posisjon som oljeeksportør gjenspeiles i tallene.`,
    },
    {
      id: 'sf2-3-5-def-1',
      type: 'definition',
      title: 'Betalingsbalansen',
      content: `**Betalingsbalansen** er en systematisk oppstilling av alle økonomiske transaksjoner mellom innlendinger og utlendinger i en gitt periode (vanligvis ett år).

Betalingsbalansen består av tre hoveddeler:

**1. Driftsbalansen (løpende poster):**
- Varehandel (eksport og import av varer)
- Tjenestehandel (eksport og import av tjenester)
- Lønn og formuesinntekter (renter, utbytte, lønn opptjent i utlandet)
- Løpende overføringer (bistand, kontingenter til internasjonale organisasjoner)

**2. Kapitalbalansen (finansielle poster):**
- Direkte investeringer (kjøp av bedrifter, fabrikker i utlandet)
- Porteføljeinvesteringer (kjøp av aksjer og obligasjoner)
- Andre finansielle transaksjoner (lån, bankinnskudd)
- Endring i valutareserver

**3. Feil og utelatelser:**
En restpost som gjør at balansen går i null.

**Grunnprinsipp:** Betalingsbalansen går alltid i null: Driftsbalanse + Kapitalbalanse + Feil og utelatelser = 0`,
    },
    {
      id: 'sf2-3-5-def-2',
      type: 'definition',
      title: 'Driftsbalansen',
      content: `**Driftsbalansen** viser nettoresultatet av alle løpende transaksjoner med utlandet:

$$\\text{Driftsbalanse} = \\text{Eksport} - \\text{Import} + \\text{Netto inntekter fra utlandet} - \\text{Netto overføringer}$$

**Overskudd på driftsbalansen** betyr at landet tjener mer på utlandet enn det bruker. Overskuddet må plasseres i utlandet (gjennom kapitalbalansen).

**Underskudd på driftsbalansen** betyr at landet bruker mer enn det tjener. Underskuddet må finansieres gjennom lån eller salg av eiendeler til utlandet.

**Norges driftsbalanse:**
Norge har hatt store overskudd på driftsbalansen i mange år, primært på grunn av olje- og gasseksporten. Overskuddene har typisk vært 10-15 % av BNP, blant de høyeste i verden.

**Handelsbalansen** er en delkomponent av driftsbalansen og viser bare forskjellen mellom vare- og tjenesteeksport og -import.`,
    },
    {
      id: 'sf2-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Norges driftsbalanse',
      problem: 'Norge eksporterer varer og tjenester for 1 800 milliarder kr, importerer for 1 200 milliarder kr, har netto formuesinntekter fra utlandet på 200 milliarder kr, og netto overføringer på 50 milliarder kr. Beregn driftsbalansen.',
      solution: `**Løsning:**

**Driftsbalanse = (Eksport - Import) + Netto formuesinntekter - Netto overføringer**

**Driftsbalanse = (1 800 - 1 200) + 200 - 50**
**Driftsbalanse = 600 + 200 - 50**
**Driftsbalanse = 750 milliarder kr (overskudd)**

**Forklaring av komponentene:**
- **Handelsoverskudd: 600 mrd. kr** - Norge eksporterer mye mer enn det importerer, hovedsakelig på grunn av olje og gass
- **Netto formuesinntekter: 200 mrd. kr** - Norge tjener mer på sine investeringer i utlandet (oljefondet!) enn utlendinger tjener på sine investeringer i Norge
- **Netto overføringer: 50 mrd. kr** - Norge gir mer i bistand og kontingenter enn det mottar

**Hva skjer med overskuddet?**
De 750 milliardene må plasseres i utlandet - hovedsakelig gjennom oljefondets investeringer. Dette vises som en tilsvarende post på kapitalbalansen.`,
    },
    {
      id: 'sf2-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-5-ex-1',
        number: '3.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr det når et land har overskudd på driftsbalansen?',
        multipleChoiceOptions: [
          'Landet tjener mer på transaksjoner med utlandet enn det bruker, og bygger opp fordringer på utlandet',
          'Landet importerer mer enn det eksporterer',
          'Landet har høy inflasjon',
          'Landet har lav arbeidsledighet',
        ],
        hints: ['Tenk på hva som skjer med pengene når et land eksporterer mer enn det importerer'],
        solution: 'Overskudd på driftsbalansen betyr at landet har større inntekter enn utgifter i sine løpende transaksjoner med utlandet. Overskuddet må plasseres et sted, og det skjer gjennom kapitalbalansen - typisk som investeringer i utlandet. For Norge betyr det at oljeinntektene som ikke brukes hjemme investeres i utenlandske aksjer og obligasjoner gjennom oljefondet.',
      },
    },
    {
      id: 'sf2-3-5-def-3',
      type: 'definition',
      title: 'Kapitalbalansen',
      content: `**Kapitalbalansen** (også kalt den finansielle balansen) registrerer alle finansielle transaksjoner mellom et land og utlandet:

**Komponenter:**
1. **Direkte investeringer:** Kjøp eller etablering av bedrifter i utlandet (og utlendingers kjøp i hjemlandet)
2. **Porteføljeinvesteringer:** Kjøp og salg av aksjer og obligasjoner
3. **Andre investeringer:** Bankinnskudd, lån, handelskreditter
4. **Endring i valutareserver:** Endringer i sentralbankens beholdning av utenlandsk valuta

**Sammenhengen med driftsbalansen:**
$$\\text{Driftsbalanse} + \\text{Kapitalbalanse} = 0$$

(Når vi inkluderer feil og utelatelser)

Dette betyr:
- Et land med **driftsoverskudd** har et tilsvarende **underskudd på kapitalbalansen** (netto kapitalutgang - landet investerer i utlandet)
- Et land med **driftsunderskudd** har et tilsvarende **overskudd på kapitalbalansen** (netto kapitalinngang - landet låner fra utlandet)

**Norge:** Det store driftsoverskuddet motsvares av enorme kapitalutganger, primært gjennom oljefondets investeringer i utlandet.`,
    },
    {
      id: 'sf2-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-5-ex-2',
        number: '3.5.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Et land har et driftsoverskudd på 500 milliarder kr. Hva kan vi si om kapitalbalansen?',
        multipleChoiceOptions: [
          'Kapitalbalansen viser et underskudd på omtrent 500 milliarder kr (netto kapitalutgang)',
          'Kapitalbalansen viser også et overskudd på 500 milliarder kr',
          'Kapitalbalansen er upåvirket av driftsbalansen',
          'Kapitalbalansen kan være hva som helst',
        ],
        hints: ['Betalingsbalansen går alltid i null: Driftsbalanse + Kapitalbalanse = 0'],
        solution: 'Betalingsbalansen går alltid i null. Dersom driftsbalansen viser et overskudd på 500 milliarder kr, må kapitalbalansen vise et underskudd på omtrent 500 milliarder kr (justert for feil og utelatelser). Det betyr at landet netto eksporterer kapital - det investerer mer i utlandet enn utlendinger investerer i hjemlandet. For Norge er dette nettopp det som skjer: oljeinntektene plasseres i utlandet gjennom oljefondet.',
      },
    },
    {
      id: 'sf2-3-5-text-2',
      type: 'text',
      title: 'Statens pensjonsfond utland (oljefondet)',
      content: `## Statens pensjonsfond utland (oljefondet)

Statens pensjonsfond utland (SPU), populært kalt **oljefondet**, er verdens største statlige investeringsfond. Det ble opprettet i 1990 og hadde ved inngangen til 2025 en verdi på over 18 000 milliarder kroner.

**Hvorfor et oljefond?**
Norges petroleumsinntekter er midlertidige - oljen vil en dag ta slutt. Ved å spare oljeinntektene i et fond og bare bruke avkastningen, kan formuen vare evig. Fondet omgjør en ikke-fornybar ressurs (olje) til en fornybar formue (finansiell avkastning).

**Handlingsregelen:**
Staten skal over tid bruke omtrent 3 % av fondets verdi hvert år (tilsvarende forventet realavkastning). Dette sikrer at fondet ikke tappes, og at formuen kommer fremtidige generasjoner til gode.

**Fondet i betalingsbalansen:**
Når staten mottar oljeinntekter i utenlandsk valuta, veksler den ikke pengene til kroner. I stedet investeres de direkte i utenlandske aksjer (ca. 70 %), obligasjoner (ca. 25 %) og eiendom (ca. 5 %). Dette er hovedårsaken til Norges store underskudd på kapitalbalansen.

**Oljefondets betydning:**
- Demper hollandsk syke ved å holde oljepenger ute av norsk økonomi
- Gir stabil inntekt til statsbudsjettet gjennom handlingsregelen
- Sprer risiko ved å investere globalt
- Sikrer fremtidige generasjoners velferd`,
    },
    {
      id: 'sf2-3-5-example-2',
      type: 'example',
      title: 'Eksempel: Hollandsk syke',
      problem: 'Forklar hva hollandsk syke er, og hvordan oljefondet beskytter Norge mot dette fenomenet.',
      solution: `**Løsning:**

**Hollandsk syke** er et økonomisk fenomen oppkalt etter Nederland, som oppdaget store gassfelt på 1960-tallet.

**Hva skjedde i Nederland?**
1. Store gassinntekter strømmet inn i økonomien
2. Etterspørselen økte, og lønningene steg
3. Den nederlandske gylden styrket seg kraftig
4. Tradisjonell eksportindustri ble ukonkurransedyktig (dyre lønninger + sterk valuta)
5. Da gassen tok slutt, var industrien borte

**Hvordan oljefondet beskytter Norge:**
1. **Oljeinntektene investeres i utlandet**, ikke i norsk økonomi. Dette demper etterspørselspresset.
2. **Handlingsregelen** begrenser bruken av oljepenger over statsbudsjettet til ca. 3 % av fondet.
3. **Valutavirkningen dempes** fordi oljepengene ikke veksles til kroner men investeres direkte i utenlandsk valuta.
4. **Gradvis innfasing** gjør at økonomien har tid til å tilpasse seg.

Uten oljefondet ville den norske kronen vært mye sterkere, og norsk industri utenom olje ville hatt store problemer med å konkurrere internasjonalt.`,
    },
    {
      id: 'sf2-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-5-ex-3',
        number: '3.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Et land har følgende tall (i milliarder kr): Vareeksport: 900, Vareimport: 700, Tjenesteeksport: 300, Tjenesteimport: 250, Netto formuesinntekter: 100, Netto overføringer: 30. Beregn handelsbalansen og driftsbalansen.',
        hints: [
          'Handelsbalanse = (Vareeksport + Tjenesteeksport) - (Vareimport + Tjenesteimport)',
          'Driftsbalanse = Handelsbalanse + Netto formuesinntekter - Netto overføringer',
        ],
        solution: 'Handelsbalanse = (900 + 300) - (700 + 250) = 1200 - 950 = 250 milliarder kr (overskudd). Driftsbalanse = 250 + 100 - 30 = 320 milliarder kr (overskudd). Landet har et handelsoverskudd på 250 mrd. kr (eksporterer mer enn det importerer) og et enda større driftsoverskudd på 320 mrd. kr fordi netto formuesinntekter fra utlandet er positive (100 mrd. kr). Driftsoverskuddet på 320 mrd. kr vil motsvares av netto kapitalutgang på omtrent samme beløp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-5-ex-4',
        number: '3.5.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar sammenhengen mellom driftsbalansen og kapitalbalansen. Hvorfor må de alltid gå i null samlet?',
        hints: [
          'Tenk på det som et dobbelt bokholderprinsipp: hver transaksjon har to sider',
          'Hvis du kjøper noe fra utlandet, må du også betale - pengene strømmer den andre veien',
        ],
        solution: 'Betalingsbalansen er bygget på dobbelt bokholderprinsipp: enhver transaksjon registreres to ganger - en gang på driftssiden og en gang på kapitalsiden. Når Norge eksporterer olje (driftsinntekt), mottar vi betaling i utenlandsk valuta som investeres i utlandet (kapitalutgang). Driftsoverskudd = netto kapitalutgang. Logikken er: Hvis du tjener mer enn du bruker, må du spare resten et sted. For et land betyr det at driftsoverskuddet plasseres som investeringer i utlandet. Omvendt: et land med driftsunderskudd må finansiere det ved å låne fra eller selge eiendeler til utlandet (kapitalinngang).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-5-ex-5',
        number: '3.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hva handlingsregelen er, og drøft hvorfor det er viktig at Norge ikke bruker mer enn forventet realavkastning av oljefondet.',
        hints: [
          'Handlingsregelen sier at vi skal bruke ca. 3 % av fondets verdi årlig',
          'Tenk på hva som ville skje med økonomien og fondet hvis vi brukte mer',
        ],
        solution: 'Handlingsregelen sier at staten over tid skal bruke omtrent 3 % av oljefondets verdi over statsbudsjettet. Dette tilsvarer forventet realavkastning, slik at fondets kjøpekraft bevares over tid. Viktig fordi: (1) Dersom vi bruker mer enn avkastningen, spiser vi av kapitalen og fondet vil krympe. (2) For mye oljepengebruk gir overoppheting: høyere inflasjon, høyere lønninger og sterkere krone som skader konkurranseutsatt næring. (3) Fremtidige generasjoner har rett på sin del av oljeformuen. (4) Fondet gir en buffer mot økonomiske sjokk (som under finanskrisen og koronapandemien). (5) Forutsigbar bruk gjør det lettere å planlegge statsbudsjettet. Handlingsregelen er dermed både et rettferdighetsprinsipp (mellom generasjoner) og et stabiliseringsinstrument for økonomien.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'sf2-3-5-ex-6',
        number: '3.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'USA har hatt vedvarende underskudd på driftsbalansen i flere tiår, mens land som Kina og Tyskland har hatt store overskudd. Forklar hva som forårsaker slike vedvarende ubalanser, og drøft om de er problematiske for verdensøkonomien.',
        hints: [
          'USAs underskudd finansieres av kapitalinngang - utlendinger kjøper amerikanske verdipapirer',
          'Tenk på konsekvensene av at noen land stadig låner mens andre stadig sparer',
        ],
        solution: 'USAs driftsunderskudd skyldes at landet importerer mer enn det eksporterer og konsumerer mer enn det produserer. Dette finansieres ved at utlendinger (spesielt Kina og Japan) kjøper amerikanske statsobligasjoner og andre verdipapirer. Kina og Tysklands overskudd skyldes høy sparing, konkurransedyktig eksportindustri og (for Kinas del) en tidligere undervurdert valuta. Problematisk fordi: (1) USA bygger opp stadig større gjeld til utlandet. (2) Underskuddslandet er avhengig av at utlendinger fortsetter å låne det penger. (3) Plutselige endringer i kapitalstrømmene kan utløse finanskriser. (4) Overskuddslandenes avhengighet av eksport gjør dem sårbare for nedgang i etterspørselen. (5) Ubalansene kan føre til politiske spenninger og handelskonflikter. IMF overvåker disse ubalansene og oppfordrer til justering, men det er politisk vanskelig både å redusere forbruk (for USA) og øke forbruk (for Kina/Tyskland).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-3-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering

- **Betalingsbalansen** registrerer alle økonomiske transaksjoner mellom et land og utlandet, og går alltid i null.
- **Driftsbalansen** viser nettoresultatet av handel, inntekter og overføringer. Norge har store driftsoverskudd på grunn av olje- og gasseksport.
- **Kapitalbalansen** viser finansielle strømmer. Norges driftsoverskudd motsvares av kapitalutgang gjennom oljefondets investeringer.
- **Statens pensjonsfond utland** (oljefondet) er verdens største statlige fond og beskytter Norge mot hollandsk syke.
- **Handlingsregelen** begrenser bruken av oljepenger til ca. 3 % av fondets verdi årlig, noe som sikrer bærekraftig forvaltning og generasjonsrettferdighet.
- Vedvarende ubalanser i betalingsbalansen mellom land kan skape spenninger i verdensøkonomien.`,
    },
  ],
  exercises: [],
};

// ============================================================================
// SAMLING: Del 3 kapitler
// ============================================================================

export const SAMFOKONOMI_2_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFOKONOMI_2_3_1, CHAPTER_SAMFOKONOMI_2_3_2, CHAPTER_SAMFOKONOMI_2_3_3,
  CHAPTER_SAMFOKONOMI_2_3_4, CHAPTER_SAMFOKONOMI_2_3_5,
];
