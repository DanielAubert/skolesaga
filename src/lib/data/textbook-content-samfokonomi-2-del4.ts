/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnsøkonomi 2 VG3 - DEL 4
 * Seksjon 4: Arbeidsmarked og sysselsetting (kapittel 4.1-4.5)
 *
 * Dekker LK20-kompetansemål:
 * "analysere hvordan arbeidsmarkedet fungerer og drøfte arbeidsmarkedspolitikk"
 * "gjore rede for den norske modellen og drøfte utfordringer for arbeidslivet"
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 4.1: Arbeidsmarkedet
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_4_1: TextbookChapter = {
  id: 'samfokonomi-2-4-1',
  courseId: 'samfokonomi-2',
  chapterNumber: '4.1',
  title: 'Arbeidsmarkedet',
  description: 'Tilbud og etterspørsel etter arbeidskraft, lønnsdannelse og likevekt i arbeidsmarkedet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere hvordan arbeidsmarkedet fungerer og drofte arbeidsmarkedspolitikk',
  ],
  content: [
    {
      id: 'sf2-4-1-intro',
      type: 'text',
      content: `## Arbeidsmarkedet

Arbeidsmarkedet er markedet der arbeidskraft kjøps og selges. Arbeidstakere tilbyr sin tid og kompetanse, mens arbeidsgivere etterspør arbeidskraft for å produsere varer og tjenester. Prisen i dette markedet er lønnen.

**Hvorfor er arbeidsmarkedet viktig?**
- Det bestemmer hvor mange som har jobb og hva de tjener
- Det påvirker inntektsfordeling og levestandard
- Det er sentralt for den makroøkonomiske utviklingen
- Sysselsettingsnivået har konsekvenser for offentlige finanser

Arbeidsmarkedet skiller seg fra andre markeder på flere måter. Arbeidskraft er ikke en vare som kan lagres eller flyttes fritt. Arbeidstakere har rettigheter og forhandlingsmakt gjennom fagforeninger, og lønnsdannelsen er ofte institusjonelt regulert.`,
    },
    {
      id: 'sf2-4-1-def-tilbud',
      type: 'definition',
      title: 'Tilbud og etterspørsel etter arbeidskraft',
      content: `**Tilbudet av arbeidskraft** bestemmes av:
- **Befolkningens størrelse og alderssammensetning** - antall personer i yrkesaktiv alder
- **Yrkesdeltakelse** - andelen av befolkningen i yrkesaktiv alder som deltar i arbeidsmarkedet
- **Arbeidstid** - hvor mange timer den enkelte ønsker å jobbe
- **Kompetanse** - utdanningsnivå og ferdigheter
- **Innvandring** - arbeidsinnvandring øker tilbudet

**Etterspørselen etter arbeidskraft** bestemmes av:
- **Produksjon og verdiskaping** - bedriftene trenger arbeidskraft for å produsere
- **Lønnskostnader** - høyere lønn reduserer etterspørselen, alt annet likt
- **Produktivitet** - høy produktivitet øker verdien av en arbeidstime
- **Teknologi** - kan både erstatte og skape nye arbeidsplasser
- **Konjunkturer** - etterspørselen svinger med den økonomiske aktiviteten

Etterspørselen etter arbeidskraft er en **avledet etterspørsel** - den avhenger av etterspørselen etter de varene og tjenestene arbeidstakerne produserer.`,
    },
    {
      id: 'sf2-4-1-example-tilbud',
      type: 'example',
      title: 'Eksempel: Likevekt i arbeidsmarkedet',
      problem: 'I et forenklet arbeidsmarked er tilbudet av arbeidskraft gitt ved W = 100 + 0,1L og etterspørselen ved W = 500 - 0,1L, der W er lønnen (i tusen kroner) og L er antall sysselsatte (i tusen). Finn likevektslønnen og sysselsettingen.',
      solution: `**Løsning:**

**Likevekt:** Tilbud = Etterspørsel
100 + 0,1L = 500 - 0,1L
0,2L = 400
L = 2 000 (tusen sysselsatte)

**Likevektslønn:**
W = 100 + 0,1 * 2 000 = 100 + 200 = 300 (tusen kroner)

**Tolkning:**
- Likevektslønnen er 300 000 kr
- Sysselsettingen er 2 000 000 personer
- Ved denne lønnen er antallet som ønsker å jobbe lik antallet bedriftene ønsker å ansette

**Hva skjer hvis lønnen er høyere enn likevekt?**
Hvis W = 350: Tilbud = (350 - 100) / 0,1 = 2 500, Etterspørsel = (500 - 350) / 0,1 = 1 500. Det blir et overskudd av arbeidskraft på 1 000 (tusen), altså arbeidsledighet.`,
    },
    {
      id: 'sf2-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-1-ex-1',
        number: '4.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med at etterspørselen etter arbeidskraft er en avledet etterspørsel?',
        multipleChoiceOptions: [
          'At den avhenger av etterspørselen etter de varene og tjenestene arbeidstakerne produserer',
          'At den alltid følger tilbudet av arbeidskraft',
          'At den bestemmes av arbeidstakernes utdanningsnivå',
          'At den er fastsatt av myndighetene',
        ],
        hints: ['Tenk på hvorfor bedrifter ansetter folk - hva er det egentlig de trenger?'],
        solution: 'Etterspørselen etter arbeidskraft er avledet fordi bedrifter ikke ansetter folk for arbeidets egen skyld, men fordi de trenger arbeidskraft til å produsere varer og tjenester som kundene etterspør. Hvis etterspørselen etter produktene faller, faller også behovet for arbeidskraft.',
      },
    },
    {
      id: 'sf2-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-1-ex-2',
        number: '4.1.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skjer i arbeidsmarkedet hvis lønnen settes høyere enn likevektslønnen?',
        multipleChoiceOptions: [
          'Det oppstår arbeidsledighet fordi tilbudet av arbeidskraft overstiger etterspørselen',
          'Alle får jobb fordi høyere lønn tiltrekker flere arbeidstakere',
          'Bedriftene ansetter flere fordi de får bedre kvalifiserte søkere',
          'Ingenting endres fordi markedet alltid er i likevekt',
        ],
        hints: ['Tenk på hva som skjer med tilbud og etterspørsel nå prisen er over likevekt'],
        solution: 'Når lønnen er over likevekt, vil flere ønske å jobbe (høyere tilbud), mens bedriftene ønsker å ansette færre (lavere etterspørsel). Differansen mellom tilbud og etterspørsel gir arbeidsledighet. Dette er et klassisk eksempel på overskuddstilbud i et marked.',
      },
    },
    {
      id: 'sf2-4-1-lønnsdannelse',
      type: 'text',
      content: `## Lønnsdannelse

I praksis bestemmes lønnen ikke bare av tilbud og etterspørsel i et fritt marked. Lønnsdannelsen påvirkes av institusjoner, forhandlinger og politikk.

**Faktører som påvirker lønnen:**

**1. Produktivitet**
Grunnleggende økonomisk teori sier at lønnen på lang sikt bør gjenspeile arbeidstakernes marginalproduktivitet - altså verdien av det de produserer. Høyere produktivitet gir grunnlag for høyere lønn.

**2. Forhandlinger**
I Norge forhandles lønn mellom arbeidsgiverorganisasjoner og fagforeninger (kollektive forhandlinger). Dette gir arbeidstakerne sterkere forhandlingsmakt enn individuelle forhandlinger.

**3. Minstelønn og regulering**
Norge har ikke lovfestet minstelønn, men mange bransjer har allmengjorte tariffavtaler som fungerer som minstelønnsordninger. I andre land er lovfestet minstelønn vanlig.

**4. Kompetanse og utdanning**
Høyere utdanning gir gjennomgående høyere lønn, fordi utdannet arbeidskraft er knappere og mer produktiv.

**5. Markedsforhold**
I bransjer med knapphet på arbeidskraft presses lønnen opp. I bransjer med overskudd av arbeidskraft holdes lønnen nede.`,
    },
    {
      id: 'sf2-4-1-def-lønn',
      type: 'definition',
      title: 'Nominell og reell lønn',
      content: `**Nominell lønn** er lønnen malt i kroner - det beløpet du får utbetalt. Nå vi sier at gjennomsnittslønnen i Norge er ca. 620 000 kr, snakker vi om nominell lønn.

**Reell lønn** er lønnen justert for prisstigning (inflasjon). Den forteller oss hva lønnen faktisk er verdt i kjøpekraft.

**Beregning:**
Reallønnsendring = Nominell lønnsendring - Inflasjon

**Eksempel:**
- Nominell lønnsvekst: 5 %
- Inflasjon: 3 %
- Reallønnsendring: 5 % - 3 % = 2 %

Det betyr at kjøpekraften økte med 2 %, selv om lønnen økte med 5 %.

**Hvorfor er dette viktig?**
Det er reallønnsveksten som bestemmer om arbeidstakerne faktisk får råd til mer. En nominell lønnsokning på 4 % med 5 % inflasjon betyr en reallønnsNEDgang på 1 %.`,
    },
    {
      id: 'sf2-4-1-example-reallønn',
      type: 'example',
      title: 'Eksempel: Reallønnsvekst i Norge',
      problem: 'I 2022 hadde norske arbeidstakere en gjennomsnittlig nominell lønnsvekst på 4,3 %, mens konsumprisindeksen steg med 5,8 %. Beregn reallønnsutviklingen og forklar konsekvensene.',
      solution: `**Løsning:**

**Beregning:**
Reallønnsendring = 4,3 % - 5,8 % = -1,5 %

**Tolkning:**
Selv om lønnen gikk opp med 4,3 % i kroner, falt kjøpekraften med 1,5 %. Arbeidstakerne kunne kjøpte færre varer og tjenester for lønnen sin i 2022 enn i 2021.

**Konsekvenser:**
1. **For husholdningene:** Lavere levestandard - må kutte i forbruk eller spare mindre
2. **For økonomien:** Svekket privat forbruk kan dempe den økonomiske veksten
3. **For lønnsforhandlingene:** Arbeidstakerne vil kreve høyere lønnsokning neste år for å ta igjen det tapte
4. **For sentralbanken:** Høy inflasjon som spiser opp lønnsveksten kan føre til renteøkning

**Historisk perspektiv:** Reallønnsfall er uvanlig i Norge og skaper ofte politisk uro og sterkere lønnkrav i neste forhandlingsrunde.`,
    },
    {
      id: 'sf2-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-1-ex-3',
        number: '4.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En arbeidstaker fikk 5,2 % nominell lønnsokning i 2023. Inflasjonen var 4,8 %. Beregn reallønnsveksten, og forklar hvorfor det er reallønnen og ikke nominell lønn som er avgjørende for kjøpekraften.',
        hints: ['Bruk formelen: Reallønnsendring = Nominell lønnsvekst - Inflasjon'],
        solution: 'Reallønnsendring = 5,2 % - 4,8 % = 0,4 %. Arbeidstakeren fikk en reallønnsøkning på 0,4 %. Det er reallønnen som er avgjørende for kjøpekraften fordi den tar hensyn til at prisene også stiger. En nominell lønnsokning på 5,2 % høresutt mye, men hvis prisene steg nesten like mye, er den reelle forbedringen minimal. Kjøpekraften - mengden varer og tjenester du kan kjøpte - avhenger av forholdet mellom lønn og priser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-1-ex-4',
        number: '4.1.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for minst fire faktører som bestemmer tilbudet av arbeidskraft i et land. Forklar hvordan en endring i hver faktor påvirker tilbudet.',
        hints: ['Tenk på demografi, yrkesdeltakelse, arbeidstid og innvandring'],
        solution: 'Fire faktører: 1) Befolkningens størrelse og alderssammensetning - en ung og voksende befolkning gir økt arbeidstilbud, mens eldrebolgen reduserer det. 2) Yrkesdeltakelse - andelen som deltar i arbeidslivet. Høyere yrkesdeltakelse blant kvinner har økt tilbudet kraftig i Norge. 3) Arbeidstid - ønsket arbeidstid per uke. Deltidsarbeid reduserer det effektive tilbudet. 4) Arbeidsinnvandring - innvandring fra EOS-området har økt tilbudet av arbeidskraft i Norge, spesielt i bygg og anlegg. 5) Utdanningsnivå - påvirker hva slags arbeidskraft som tilbys. Lengre utdanning forsinker inntreden i arbeidsmarkedet, men øker kompetansen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-1-ex-5',
        number: '4.1.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvordan økning i minstelønn kan påvirke arbeidsmarkedet. Bruk tilbuds- og etterspørselsmodellen for arbeidskraft i analysen.',
        hints: ['Tenk på minstelønn som et prisgulv - hva skjer nå prisen settes over likevekt?'],
        solution: 'En minstelønn som settes over likevektslønnen fungerer som et prisgulv. Etterspørselen etter arbeidskraft faller (bedrifter vil ansette færre), mens tilbudet øker (flere ønsker å jobbe til den høyere lønnen). Resultatet er et overskudd av arbeidskraft, altså arbeidsledighet. Imidlertid er virkeligheten mer nyansert: 1) Høyere lønn kan øke produktiviteten (effektivitetslønnsteori). 2) Høyere lønn gir økt kjøpekraft og etterspørsel etter varer. 3) I markeder med monopsonimakt (en dominerende arbeidsgiver) kan minstelønn faktisk øke sysselsettingen. 4) Empirisk forskning viser at moderate økninger i minstelønn har liten effekt på sysselsettingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-4-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering - Arbeidsmarkedet

- **Arbeidsmarkedet** er markedet der arbeidskraft kjøps og selges, og lønnen er prisen
- **Tilbudet** av arbeidskraft avhenger av befolkning, yrkesdeltakelse, arbeidstid og innvandring
- **Etterspørselen** avhenger av produksjon, lønnskostnader, produktivitet og konjunkturer
- Etterspørselen etter arbeidskraft er en **avledet etterspørsel**
- **Likevekt** oppstår nå tilbud er lik etterspørsel - lønnen som klarerer markedet
- **Lønnsdannelsen** påvirkes av produktivitet, forhandlinger, regulering og markedsforhold
- Skillet mellom **nominell lønn** (kroner) og **reell lønn** (kjøpekraft) er avgjørende`,
    },
    {
      id: 'sf2-4-1-ex-6',
      type: 'exercise',
      title: 'Samleoppgave',
      exercise: {
        id: 'sf2-4-1-ex-6',
        number: '4.1.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjør rede for hvordan arbeidsmarkedet fungerer ved hjelp av tilbuds- og etterspørselsmodellen. Forklar hva som bestemmer likevektslønnen, og drøft hvordan endringer i produktivitet, teknologi og innvandring kan forskyve tilbuds- og etterspørselskurvene.',
        hints: ['Bruk modellen systematisk: identifiser skift i kurvene og forklar konsekvensene for lønn og sysselsetting'],
        solution: 'Arbeidsmarkedet kan analyseres med tilbuds- og etterspørselsmodellen. Tilbudskurven er stigende (høyere lønn gir flere som vil jobbe), etterspørselskurven er fallende (høyere lønn betyr færre ansettelser). Likevektslønnen finnes der kurvene krysser. Endringer: 1) Økt produktivitet skifter etterspørselskurven ut (hver arbeidstime er mer verdifull), noe som gir høyere likevektslønn og høyere sysselsetting. 2) Teknologi kan skifte etterspørselskurven inn (automatisering erstatter arbeidskraft) eller ut (ny teknologi skaper nye jobber). Nettoeffekten avhenger av om teknologien erstatter eller komplementerer arbeidskraft. 3) Innvandring skifter tilbudskurven ut, noe som isolert sett presser lønnen ned og øker sysselsettingen. Men innvandrere øker også etterspørselen etter varer og tjenester, som igjen øker etterspørselen etter arbeidskraft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.2: Arbeidsledighet
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_4_2: TextbookChapter = {
  id: 'samfokonomi-2-4-2',
  courseId: 'samfokonomi-2',
  chapterNumber: '4.2',
  title: 'Arbeidsledighet',
  description: 'Typer arbeidsledighet (konjunkturell, strukturell, friksjon), måling av ledighet og NAIRU.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere hvordan arbeidsmarkedet fungerer og drofte arbeidsmarkedspolitikk',
  ],
  content: [
    {
      id: 'sf2-4-2-intro',
      type: 'text',
      content: `## Arbeidsledighet

Arbeidsledighet er et av de mest sentrale problemene i samfunnsøkonomi. Nå mennesker som ønsker å jobbe ikke finner arbeid, representerer det både en personlig belastning og et økonomisk tap for samfunnet.

**Hvorfor er arbeidsledighet et problem?**
- **For den enkelte:** Tap av inntekt, lavere selvfølelse, sosial isolasjon, helseproblemer
- **For økonomien:** Tapte ressurser - produksjon som kunne vært gjennomført
- **For offentlige finanser:** Lavere skatteinntekter og høyere utgifter til trygd
- **For samfunnet:** Økt ulikhet, lavere tillit, politisk uro

**Hvordan måles arbeidsledighet?**
I Norge brukes to mål:
1. **NAV-registrert ledighet:** Antall personer registrert som arbeidssokende hos NAV
2. **AKU-ledighet (SSBs arbeidskraftundersøkelse):** Basert på utvalgsundersøkelse der folk spørres om de er uten arbeid, har søkt jobb og er tilgjengelige

AKU-ledigheten er vanligvis høyere enn NAV-tallene fordi den fanger opp personer som søker jobb uten å registrere seg hos NAV.`,
    },
    {
      id: 'sf2-4-2-def-typer',
      type: 'definition',
      title: 'Typer arbeidsledighet',
      content: `**Friksjonsledighet** (søkeledighet) oppstår fordi det tar tid å finne riktig jobb. Arbeidstakere som skifter jobb eller nyutdannede som søker sin første stilling er midlertidig ledige. Friksjonsledighet er normalt og finnes alltid i et dynamisk arbeidsmarked.

**Strukturell ledighet** skyldes et misforhold mellom arbeidstakernes kompetanse og det arbeidsmarkedet etterspør. Eksempler:
- Arbeidere i nedlagte industrier mangler kompetanse for nye jobber
- Geografisk mismatch - jobbene finnes andre steder enn arbeidssokerne
- Teknologisk endring som gjør visse yrker overflodige

**Konjunkturell ledighet** (syklisk ledighet) skyldes svingninger i den økonomiske aktiviteten. Under lavkonjunktur faller etterspørselen etter varer og tjenester, og bedriftene reduserer arbeidsstokken. Denne ledigheten forsvinner nå økonomien bedres.

**Sesongledighet** skyldes sesongvariasjoner i noen bransjer, for eksempel byggebransjen om vinteren eller reiselivsnæringen utenom sesong.`,
    },
    {
      id: 'sf2-4-2-example-typer',
      type: 'example',
      title: 'Eksempel: Klassifisering av arbeidsledighet',
      problem: 'Klassifiser følgende tilfeller av arbeidsledighet: a) En nyutdannet økonom bruker tre måneder på å finne jobb. b) En oljearbeider i Stavanger mister jobben under oljeprisfallet i 2014-2016. c) En butikkmedarbeider erstattes av selvbetjeningskasser. d) En snøbrøyter er ledig om sommeren.',
      solution: `**Løsning:**

**a) Friksjonsledighet**
Den nyutdannede øksponomen er midlertidig ledig mens hun søker etter riktig jobb. Dette er normalt og tidsbegrenset - det tar tid å matche arbeidssokere med ledige stillinger.

**b) Konjunkturell ledighet**
Oljeprisfallet reduserte den økonomiske aktiviteten i oljesektoren og tilknyttede næringer. Dette er konjunkturbetinget - ledigheten økte fordi etterspørselen falt.

**c) Strukturell ledighet**
Butikkmedarbeideren har blitt erstattet av teknologi. Kompetansen (kasse og kundebehandling) er ikke lenger etterspørt i samme grad. Vedkommende må omskoleres for å finne ny jobb.

**d) Sesongledighet**
Snøbrøytingen er sesongavhengig. Arbeidet finnes bare om vinteren, så ledigheten om sommeren er forutsigbar og gjentagende.`,
    },
    {
      id: 'sf2-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-2-ex-1',
        number: '4.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken type arbeidsledighet oppstår fordi det tar tid å finne riktig jobb etter endt utdanning?',
        multipleChoiceOptions: [
          'Friksjonsledighet',
          'Strukturell ledighet',
          'Konjunkturell ledighet',
          'Sesongledighet',
        ],
        hints: ['Tenk på det tidsgapet som alltid finnes mellom å avslutte noe og starte noe nytt'],
        solution: 'Friksjonsledighet oppstår fordi det tar tid å matche arbeidssokere med ledige stillinger. En nyutdannet person som søker sin første jobb er et typisk eksempel. Denne ledigheten er midlertidig, normal og finnes i alle økonomier.',
      },
    },
    {
      id: 'sf2-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-2-ex-2',
        number: '4.2.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva skiller strukturell ledighet fra konjunkturell ledighet?',
        multipleChoiceOptions: [
          'Strukturell ledighet skyldes mismatch mellom kompetanse og etterspørel, konjunkturell skyldes svikt i samlet etterspørsel',
          'Strukturell ledighet er kortvarig, konjunkturell er langvarig',
          'Strukturell ledighet rammer bare industrien, konjunkturell rammer alle',
          'Det er ingen vesentlig forskjell mellom dem',
        ],
        hints: ['Tenk på årsaken: handler det om feil kompetanse eller for lite aktivitet i økonomien?'],
        solution: 'Strukturell ledighet skyldes et misforhold mellom arbeidstakernes kompetanse, beliggenhet eller kjennetegn og det arbeidsmarkedet etterspør. Konjunkturell ledighet skyldes generell nedgang i økonomisk aktivitet. Skillet er viktig fordi de krever ulike politiske tiltak: strukturell ledighet krever omskolering og mobilitet, konjunkturell ledighet krever stimulering av samlet etterspørsel.',
      },
    },
    {
      id: 'sf2-4-2-nairu',
      type: 'text',
      content: `## Naturlig ledighetsrate og NAIRU

Økonomisk teori skiller mellom arbeidsledighet som er uunngåelig i et velfungerende marked, og ledighet som skyldes manglende etterspørsel.

**Naturlig ledighetsrate**
Den naturlige ledighetsraten er summen av friksjonsledighet og strukturell ledighet. Selv i en økonomisk oppgangsperiode vil det alltid være noe ledighet, fordi folk skifter jobb og fordi det tar tid å matche arbeidssokere med ledige stillinger.

**NAIRU (Non-Accelerating Inflation Rate of Unemployment)**
NAIRU er det ledighetsnivået som er forenlig med stabil inflasjon. Dersom ledigheten faller under NAIRU, vil lønnspresset øke og inflasjonen akselerere. Dersom ledigheten er over NAIRU, er det ledig kapasitet i økonomien og inflasjonen vil avta.

**NAIRU i Norge:**
NAIRU anslåes til rundt 3-4 % i Norge. Det betyr at en ledighetsrate på 3-4 % regnes som forenlig med stabil lønns- og prisvekst.

**Phillipskurven**
Phillipskurven viser den empiriske sammenhengen mellom arbeidsledighet og inflasjon: lav ledighet gir høy inflasjon, og omvendt. På kort sikt må sentralbanken avveie mellom lav ledighet og lav inflasjon.`,
    },
    {
      id: 'sf2-4-2-def-nairu',
      type: 'definition',
      title: 'NAIRU',
      content: `**NAIRU (Non-Accelerating Inflation Rate of Unemployment)** er det laveste nivået arbeidsledigheten kan ligge på uten at inflasjonen akselererer.

**Mekanismen:**
- Ledighet under NAIRU: Press i arbeidsmarkedet gir høyere lønnsvekst enn produktivitetsveksten. Bedriftene velter høyere lønnskostnader over i prisene, og inflasjonen stiger.
- Ledighet over NAIRU: Arbeidstakerne har svak forhandlingsmakt, lønnskravene er moderate, og inflasjonen avtar.
- Ledighet lik NAIRU: Lønnsveksten er forenlig med inflasjonsmålet, og inflasjonen er stabil.

**Betydning for politikk:**
- Sentralbanken bruker NAIRU som referansepunkt nå den setter renten
- Hvis ledigheten er over NAIRU, kan ekspansiv politikk øke sysselsettingen uten å drive opp inflasjonen
- Hvis ledigheten er under NAIRU, kan innstrammende politikk være nødvendig for å unngå overoppheting`,
    },
    {
      id: 'sf2-4-2-example-nairu',
      type: 'example',
      title: 'Eksempel: NAIRU og pengepolitikk',
      problem: 'Ledigheten i Norge faller til 2,5 %, mens NAIRU anslåes til 3,5 %. Hva kan vi forvente at skjer med lønnsvekst og inflasjon, og hvordan vil Norges Bank trolig reagere?',
      solution: `**Løsning:**

**Situasjonen:**
Ledigheten (2,5 %) er vesentlig under NAIRU (3,5 %). Arbeidsmarkedet er stramt.

**Forventet utvikling:**
1. **Lønnsvekst:** Arbeidstakerne har sterk forhandlingsmakt fordi bedriftene sliter med å finne arbeidskraft. Lønnsveksten øker utover produktivitetsveksten.
2. **Inflasjon:** Bedriftene velter høyere lønnskostnader over i prisene. Inflasjonen stiger over målet på 2 %.
3. **Forventninger:** Hvis inflasjonen forblir høy, kan inflasjonforventningene øke, noe som forsterker lønn-pris-spiralen.

**Norges Banks reaksjon:**
Norges Bank vil trolig øke styringsrenten for å:
- Dempe etterspørselen i økonomien
- Kjøle ned arbeidsmarkedet
- Bringe inflasjonen tilbake mot målet på 2 %

**Dilemma:** Renteøkningene vil også dempe økonomisk vekst og kan øke ledigheten. Sentralbanken må avveie mellom prisstabilitet og sysselsetting.`,
    },
    {
      id: 'sf2-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-2-ex-3',
        number: '4.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva NAIRU er, og gjør rede for hva som skjer med lønnsvekst og inflasjon nå arbeidsledigheten er henholdsvis over og under NAIRU.',
        hints: ['Bruk Phillipskurven som rammeverk og forklar mekanismene bak lønn-pris-dynamikken'],
        solution: 'NAIRU er det ledighetsnivået som er forenlig med stabil inflasjon. Nå ledigheten er under NAIRU, er arbeidsmarkedet stramt og arbeidstakerne har sterk forhandlingsmakt. Lønnsveksten overstiger produktivitetsveksten, bedriftene øker prisene for å dekke høyere kostnader, og inflasjonen akselererer. Nå ledigheten er over NAIRU, er det ledig kapasitet i økonomien, arbeidstakerne har svak forhandlingsmakt, lønnsveksten er moderat, og inflasjonen avtar. Ved NAIRU er lønnsveksten forenlig med inflasjomålet, og inflasjonen er stabil.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-2-ex-4',
        number: '4.2.4',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En fabrikk legger ned driften og 200 ansatte mister jobben. Halvparten har kompetanse som er etterspørt i andre bransjer, mens den andre halvparten har spesialisert kompetanse som er vanskelig å overføre. Klassifiser ledigheten for begge gruppene, og foreslå tiltak for å hjelpe dem tilbake i arbeid.',
        hints: ['Tenk på forskjellen mellom friksjonsledighet og strukturell ledighet, og hvilke tiltak som passer til hver type'],
        solution: 'De 100 med overførbar kompetanse opplever friksjonsledighet - de trenger tid til å finne ny jobb, men har relevant kompetanse. Tiltak: arbeidsfomidling, jobbsøkekurs, informasjon om ledige stillinger. De 100 med spesialisert kompetanse opplever strukturell ledighet - det er mismatch mellom deres ferdigheter og det markedet etterspør. Tiltak: omskolering og etterutdanning, løretilskudd til arbeidsgivere som ansetter dem, flyttestøtte hvis jobbene finnes andre steder, prakisplasser i nye bransjer. Strukturell ledighet krever mer inngripende og langsiktige tiltak enn friksjonsledighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-2-ex-5',
        number: '4.2.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft Phillipskurvens relevans for pengepolitikken. Finnes det en varig avveining mellom arbeidsledighet og inflasjon, eller kun på kort sikt?',
        hints: ['Skill mellom den kortsiktige Phillipskurven (avveining) og den langsiktige (vertikal ved NAIRU)'],
        solution: 'Phillipskurven antyder en negativ sammenheng mellom ledighet og inflasjon. På kort sikt finnes denne avveiningen: ekspansiv politikk kan redusere ledigheten, men driver opp inflasjonen. På lang sikt er bildet annerledes. Ifølge Friedman og Phelps vil økonomien alltid vende tilbake til den naturlige ledighetsraten (NAIRU). Forsook på å holde ledigheten varig under NAIRU fører til stadig akselererende inflasjon, fordi inflasjonforventningene justeres oppover. Den langsiktige Phillipskurven er derfor vertikal ved NAIRU. For pengepolitikken betyr dette at sentralbanken kan påvirke realøkonomen på kort sikt, men på lang sikt bestemmer strukturelle faktører ledigheten, og pengepolitikken bestemmer inflasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-4-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering - Arbeidsledighet

- **Arbeidsledighet** er et alvorlig problem for den enkelte, økonomien og samfunnet
- **Friksjonsledighet** er normal og midlertidig - det tar tid å finne riktig jobb
- **Strukturell ledighet** skyldes mismatch mellom kompetanse og etterspørsel
- **Konjunkturell ledighet** skyldes nedgang i økonomisk aktivitet
- **Naturlig ledighetsrate** = friksjonsledighet + strukturell ledighet
- **NAIRU** er ledighetsnivået forenlig med stabil inflasjon (ca. 3-4 % i Norge)
- **Phillipskurven** viser avveiningen mellom ledighet og inflasjon på kort sikt
- På lang sikt er Phillipskurven vertikal ved NAIRU`,
    },
    {
      id: 'sf2-4-2-ex-6',
      type: 'exercise',
      title: 'Samleoppgave',
      exercise: {
        id: 'sf2-4-2-ex-6',
        number: '4.2.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjør rede for de ulike typene arbeidsledighet, og forklar sammenhengen mellom arbeidsledighet og inflasjon ved hjelp av NAIRU-modellen. Drøft hvilke politiske tiltak som egner seg best for å bekjempe de ulike typene ledighet.',
        hints: ['Strukturer svaret: typer ledighet, NAIRU-mekanismen, og tiltak tilpasset hver type'],
        solution: 'Typene: Friksjonsledighet (søkeledighet), strukturell ledighet (kompetansemismatch), konjunkturell ledighet (etterspørselssvikt) og sesongledighet. NAIRU-modellen: Den naturlige ledighetsraten (NAIRU) er summen av friksjons- og strukturell ledighet. Under NAIRU: stramt arbeidsmarked, høy lønnsvekst, stigende inflasjon. Over NAIRU: ledig kapasitet, moderat lønnsvekst, fallende inflasjon. Tiltak: Mot friksjonsledighet: bedre arbeidsfomidling, karriereveiledning og informasjon. Mot strukturell ledighet: omskolering, etterutdanning, regional mobilitet og løretilskudd. Mot konjunkturell ledighet: ekspansiv finans- og pengepolitikk (økt offentlig forbruk, lavere rente). Poenget er at ulike typer ledighet krever ulike løsninger - etterspørselsstimulering hjelper ikke mot strukturell ledighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.3: Den norske modellen
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_4_3: TextbookChapter = {
  id: 'samfokonomi-2-4-3',
  courseId: 'samfokonomi-2',
  chapterNumber: '4.3',
  title: 'Den norske modellen',
  description: 'Trepartssamarbeidet, frontfagsmodellen, kollektive forhandlinger og det organiserte arbeidslivet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjore rede for den norske modellen og drofte utfordringer for arbeidslivet',
  ],
  content: [
    {
      id: 'sf2-4-3-intro',
      type: 'text',
      content: `## Den norske modellen

Den norske modellen (også kalt den nordiske modellen) er betegnelsen på det saeregnne systemet som kjennetegner arbeidslivet og velferdsstaten i Norge og de andre nordiske landene. Modellen er bygget på samarbeid mellom tre parter: staten, arbeidsgiverne og arbeidstakerne.

**Kjernen i modellen:**
- Organisert arbeidsliv med sterke fagforeninger og arbeidsgiverorganisasjoner
- Koordinert lønnsdannelse gjennom kollektive forhandlinger
- Omfattende velferdsordninger som gir trygghet ved omstilling
- Høy tillit mellom partene i arbeidslivet
- Stat som aktiv regulerer og megler

**Resultater av den norske modellen:**
- Høy sysselsetting og lav ledighet
- Relativt små lønnsforskjeller sammenlignet med andre land
- Høy produktivitet
- Stor omstillingsevne - arbeidstakere toor å skifte jobb fordi sikkerhetsnettet er sterkt
- Få arbeidskonflikter (lav streikefrekvens)`,
    },
    {
      id: 'sf2-4-3-def-trepartssamarbeid',
      type: 'definition',
      title: 'Trepartssamarbeidet',
      content: `**Trepartssamarbeidet** er samarbeidet mellom de tre partene i arbeidslivet:

**1. Staten**
- Setter rammebetingelsene gjennom lover og regler (arbeidsmiljøloven, ferieloven)
- Opptrer som megler i arbeidskonflikter (Riksmekleren)
- Bruker finanspolitikken til å påvirke økonomien og sysselsettingen
- Er selv en stor arbeidsgiver

**2. Arbeidsgiverorganisasjoner**
- **NHO** (Naeringslivets Hovedorganisasjon) - privat sektor
- **KS** (Kommunesektorens organisasjon) - kommunal sektor
- **Spekter** - helse og statlige virksomheter
- **Virke** - handel og tjenester
- Forhandler på vegne av bedriftene om lønn og arbeidsvilkår

**3. Arbeidstakerorganisasjoner**
- **LO** (Landsorganisasjonen) - størst med ca. 980 000 medlemmer
- **Unio** - akademikerorganisasjon (sykepleiere, lærere)
- **YS** (Yrkesorganisasjonenes Sentralforbund)
- **Akademikerne** - høyere utdanning
- Forhandler på vegne av arbeidstakerne om lønn og arbeidsvilkår

**Organisasjonsgraden** i Norge er ca. 50 %, noe som er høyere enn i de fleste vestlige land, men lavere enn i Sverige og Danmark.`,
    },
    {
      id: 'sf2-4-3-def-frontfag',
      type: 'definition',
      title: 'Frontfagsmodellen',
      content: `**Frontfagsmodellen** er det norske systemet for koordinert lønnsdannelse.

**Hovedprinsippet:** Konkurranseutsatte næringer (industri og eksportbedrifter) forhandler om lønn først i hver tariffperiode. Resultatet setter rammen - det såkalt lønnstaktet - som de øvrige bransjene forholder seg til.

**Hvorfor industrien går først:**
- Industrien konkurrerer med utenlandske bedrifter og må holde kostnadene konkurransedyktige
- Hvis lønnsveksten i industrien overstiger produktivitetsveksten, mister norske bedrifter konkurranseevne
- Ved å la industrien sette takten, sikrer man at lønnsveksten er barekraftig for hele økonomien

**Slik fungerer det i praksis:**
1. LO og NHO forhandler for industrien (det såkalt frontfaget)
2. Resultatet - f.eks. 4,5 % lønnsvekst - setter rammen
3. Offentlig sektor og andre private bransjer forhandler deretter, med frontfagsrammen som rettesnor
4. Over tid skal alle grupper ha omtrent lik lønnsvekst

**Utfordringer:**
- Noen grupper føler seg bundet av en ramme de ikke har vært med på å bestemme
- Lønnsglidning (lokale tillegg utover den sentrale rammen) kan gi ulik reell lønnsvekst
- Offentlig sektor klager over at frontfagsmodellen gir for lav lønnsvekst for offentlig ansatte`,
    },
    {
      id: 'sf2-4-3-example-forhandling',
      type: 'example',
      title: 'Eksempel: Et lønnsoppgjør',
      problem: 'I arets lønnsoppgjør krevde LO 5,5 % lønnsvekst for industriarbeiderne. NHO mente at bedriftenes økonomiske situasjon bare tillot 3,5 %. Etter forhandlinger og mekling endte man på 4,5 %. Forklar prosessen og konsekvensene for resten av arbeidslivet.',
      solution: `**Løsning:**

**Forhandlingsprosessen:**
1. LO og NHO utarbeider krav basert på prisvekst, produktivitetsvekst og bedriftenes lønnsomhet
2. Direkte forhandlinger mellom partene (frist: midt i april)
3. Hvis enighet: ny tariffavtale med 4,5 % ramme
4. Hvis uenighet: Riksmekleren trer inn og forsøker å finne løsning
5. Hvis mekling mislykkes: streik eller lockout

**Resultatet 4,5 %:**
- Ligger mellom partenes utgangskrav (kompromiss)
- Inkluderer både sentrale tillegg og antatt lønnsglidning

**Konsekvensene for resten:**
- Kommuneansatte (lærere, sykepleiere) forhandler med KS og forholder seg til 4,5 %-rammen
- Statsansatte forhandler med staten innenfor samme ramme
- Private tjenestenæringer forhandler med tilsvarende ramme som rettesnor
- Alle grupper forventes å ende rundt 4,5 % over tid

**Kontrovers:** Sykepleiere og lærere hevder ofte at de systematisk sakker akterut fordi frontfagsrammen ikke tar hensyn til behov for å rekruttere i offentlig sektor.`,
    },
    {
      id: 'sf2-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-3-ex-1',
        number: '4.3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvem er de tre partene i trepartssamarbeidet?',
        multipleChoiceOptions: [
          'Staten, arbeidsgiverorganisasjonene og arbeidstakerorganisasjonene',
          'Storting, regjering og domstolene',
          'Kommunene, fylkene og staten',
          'NHO, Norges Bank og NAV',
        ],
        hints: ['Tenk på hvem som er involvert i lønnsforhandlinger og arbeidslivsregulering'],
        solution: 'Trepartssamarbeidet består av staten (som setter lover og rammer), arbeidsgiverorganisasjonene (NHO, KS m.fl. som representerer bedriftene) og arbeidstakerorganisasjonene (LO, Unio, YS, Akademikerne som representerer de ansatte). Samarbeidet mellom disse tre er grunnpilaren i den norske modellen.',
      },
    },
    {
      id: 'sf2-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-3-ex-2',
        number: '4.3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvorfor er det konkurranseutsatt industri som forhandler først i frontfagsmodellen?',
        multipleChoiceOptions: [
          'Fordi industrien konkurrerer internasjonalt og lønnsveksten må være forenlig med konkurranseevnen',
          'Fordi industriarbeidere tradisjonelt har vært best organisert',
          'Fordi industrien har flest ansatte i Norge',
          'Fordi staten bestemmer at industrien skal forhandle først',
        ],
        hints: ['Tenk på hva som skjer med norske eksportbedrifter hvis lønnsveksten blir for høy'],
        solution: 'Konkurranseutsatt industri forhandler først fordi disse bedriftene må konkurrere med utenlandske aktører. Hvis lønnsveksten overstiger produktivitetsveksten, blir norske produkter dyrere og bedriftene taper markedsandeler. Ved å la industrien sette rammen sikrer man at lønnsveksten i hele økonomien er baekraftig og ikke undergraver norsk konkurranseevne.',
      },
    },
    {
      id: 'sf2-4-3-sampress',
      type: 'text',
      content: `## Sammenpresset lønnsstruktur

En viktig konsekvens av den norske modellen er en relativt **sammenpresset lønnsstruktur** - forskjellene mellom høyeste og laveste lønn er mindre enn i mange andre land.

**Mekanismene:**
1. **Solidarisk lønnspolitikk:** Fagbevegelsen har historisk prioritert å lofte bunnlønnene
2. **Sentrale forhandlinger:** Felles ramme for alle begrenser spredningen
3. **Allmenngjøring av tariffavtaler:** Minstelønnsbestemmelser gjelder alle i bransjen, også uorganiserte
4. **Progressive skatter:** Reduserer inntektsforskjellene ytterligere etter skatt

**Fordeler med sammenpresset lønnsstruktur:**
- Lavere ulikhet og større sosial sammenhold
- Bedrifter med lav produktivitet presses ut (rydder ut ulønnsom virksomhet)
- Arbeidstakere med lav lønn får bedre levestandard
- Større tillit i samfunnet

**Ulemper:**
- Vanskelig å rekruttere til stillinger som krever lang utdanning (lærere, sykepleiere)
- Mindre insentiv til å ta risiko eller investere i ekstra utdanning
- Kan føre til mangel på arbeidskraft i visse sektorer
- Høytkvalifiserte kan flytte til land med større lønnsforskjeller`,
    },
    {
      id: 'sf2-4-3-example-sammenpresset',
      type: 'example',
      title: 'Eksempel: Lønnsforskjeller i Norge vs. USA',
      problem: 'I Norge tjener en leder i privat sektor i gjennomsnitt ca. 3 ganger mer enn en rengjøringshjelp. I USA er dette forholdet ca. 10 ganger. Forklar hvorfor forskjellen er så stor, og drøft konsekvensene.',
      solution: `**Løsning:**

**Arsaker til forskjellen:**
1. **Norge:** Sentrale lønnsforhandlinger og solidarisk lønnspolitikk presser bunnlønnene opp og toppene ned. Fagforeninger har sterk forhandlingsmakt for lavtlønnede.
2. **USA:** Desentralisert lønnsfastsettelse, svake fagforeninger (organisasjonsgrad ca. 10 %), ingen lovfestet minstelønn på nasjonalt nivå av betydning, og større aksept for store lønnsforskjeller.

**Konsekvenser i Norge:**
- Lavere ulikhet og høyere levestandard for de lavest lønnede
- Sterkere sosialt sikkerhetsnett gjor modellen bærekraftig
- Kan være vanskeligere å tiltrekke og beholde topp-talent i næringslivet

**Konsekvenser i USA:**
- Større insentiver for individuell prestasjon og entreprenørskap
- Høyere ulikhet og mer fattigdom
- Sterkere tiltrekkingskraft på høytkvalifisert arbeidskraft globalt

**Konklusjon:** Begge modellene har fordeler og ulemper. Den norske modellens sammenpressede lønnsstruktur gir lavere ulikhet, men kan skape utfordringer med rekruttering til visse yrker.`,
    },
    {
      id: 'sf2-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-3-ex-3',
        number: '4.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med frontfagsmodellen, og gjør rede for hvorfor den er viktig for norsk økonomis konkurranseevne.',
        hints: ['Start med hvem som forhandler først, og forklar logikken bak'],
        solution: 'Frontfagsmodellen betyr at konkurranseutsatte næringer (industri) forhandler om lønn først, og resultatet setter rammen for resten av arbeidslivet. Den er viktig for konkurranseevnen fordi: 1) Industriens lønnsvekst må være forenlig med produktivitetsveksten for å opprettholde konkurranseevne mot utlandet. 2) Nå resten av økonomien følger denne rammen, unngår man at lønnsveksten i skjermede næringer trekker opp kostnadsnivået for hele økonomien. 3) Modellen sikrer koordinert lønnsdannelse som hindrer lønn-pris-spiraler. 4) Uten denne koordineringen kunne enkeltbransjer med sterk forhandlingsmakt presse opp lønningene slik at det skader eksportsektoren.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-3-ex-4',
        number: '4.3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for hva som menes med sammenpresset lønnsstruktur, og drøft fordeler og ulemper med dette for norsk økonomien.',
        hints: ['Tenk på konsekvenser for ulikhet, rekruttering og produktivitet'],
        solution: 'Sammenpresset lønnsstruktur betyr at forskjellen mellom høyeste og laveste lønn er relativt liten. Den skyldes sentrale forhandlinger, solidarisk lønnspolitikk og allmenngjøring av tariffavtaler. Fordeler: 1) Lavere ulikhet gir større sosial sammenhold og tillit. 2) Bedrifter med lav produktivitet presses ut, noe som øker gjennomsnittlig produktivitet. 3) Høyere levestandard for de lavest lønnede. Ulemper: 1) Vanskelig å rekruttere til yrker som krever lang utdanning men har moderate lønninger (lærere, sykepleiere). 2) Mindre insentiver for å ta ekstra utdanning eller risiko. 3) Høytkvalifiserte kan velge å jobbe i land med større lønnsforskjeller.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-4-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-3-ex-5',
        number: '4.3.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Den norske modellen har gitt gode resultater historisk. Drøft om modellen er robust nok til å håndtere fremtidens utfordringer som globalisering, gig-økonomi og synkende organisasjonsgrad.',
        hints: ['Vurder hva som truer modellens grunnpilarer og hva som kan styrke den'],
        solution: 'Trusler mot modellen: 1) Synkende organisasjonsgrad undergraver fagforeningenes forhandlingsmakt og legitimitet. 2) Gig-økonomien skaper arbeidstakere utenfor det organiserte arbeidslivet (frilansere, plattformarbeidere). 3) Globalisering og arbeidsinnvandring kan presse lønningene i noen bransjer. 4) Individualisering gjor kollektive løsninger mindre attraktive for unge. Modellens styrker: 1) Høy tillit gjor omstilling lettere. 2) Det sterke sikkerhetsnettet gir trygghet til å akseptere endring. 3) Trepartssamarbeidet har vist evne til å tilpasse seg (pensjonsreform, IA-avtalen). 4) Koordinert lønnsdannelse er fortsatt viktig for å unngå overoppheting. Konklusjon: Modellen kan overleve, men krever tilpasning, blant annet organisering av nye grupper, regulering av plattformøkonomien og opprettholdelse av organisasjonsgraden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-4-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering - Den norske modellen

- **Den norske modellen** bygger på trepartssamarbeid mellom stat, arbeidsgivere og arbeidstakere
- **Trepartssamarbeidet** sikrer koordinering, forutsigbarhet og tillit i arbeidslivet
- **Frontfagsmodellen** lar konkurranseutsatt industri sette lønnsrammen for hele økonomien
- **Organisasjonsgraden** i Norge er ca. 50 %, men synkende
- Modellen gir en **sammenpresset lønnsstruktur** med små lønnsforskjeller
- **Resultater:** Høy sysselsetting, lav ledighet, høy produktivitet og stor omstillingsevne
- **Utfordringer:** Synkende organisasjonsgrad, gig-økonomi og rekrutteringsproblemer i offentlig sektor`,
    },
    {
      id: 'sf2-4-3-ex-6',
      type: 'exercise',
      title: 'Samleoppgave',
      exercise: {
        id: 'sf2-4-3-ex-6',
        number: '4.3.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjør rede for hovedtrekkene ved den norske modellen. Forklar hvordan trepartssamarbeidet og frontfagsmodellen bidrar til koordinert lønnsdannelse, og drøft om modellen er bærekraftig i fremtiden.',
        hints: ['Dekk alle tre pilarene, forklar frontfagsmekanismen, og vurder trusler og styrker'],
        solution: 'Den norske modellen bygger på tre pilarer: 1) Organisert arbeidsliv med sterke parter på begge sider (LO/NHO m.fl.). 2) Koordinert lønnsdannelse gjennom frontfagsmodellen - industrien forhandler først og setter rammen for å sikre konkurranseevne. 3) Omfattende velferdsstat som gir trygghet ved omstilling. Trepartssamarbeidet fungerer ved at staten setter rammebetingelser, arbeidsgivere og arbeidstakere forhandler innenfor disse rammene, og Riksmekleren griper inn ved uenighet. Frontfagsmodellen sikrer at lønnsveksten er forenlig med produktivitetsveksten i konkurranseutsatte næringer, noe som forhindrer tap av internasjonal konkurranseevne. Bærekraft: Modellen trues av synkende organisasjonsgrad, fremvekst av gig-økonomi og globaliseringen. Men den har også store styrker: høy tillit, omstillingsevne og evne til reformer. Modellens fremtid avhenger av om nye grupper organiseres og om institusjonene tilpasses nye arbeidsformer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.4: Arbeidsmarkedspolitikk
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_4_4: TextbookChapter = {
  id: 'samfokonomi-2-4-4',
  courseId: 'samfokonomi-2',
  chapterNumber: '4.4',
  title: 'Arbeidsmarkedspolitikk',
  description: 'Aktiv og passiv arbeidsmarkedspolitikk, NAVs rolle og kompetansepolitikk.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere hvordan arbeidsmarkedet fungerer og drofte arbeidsmarkedspolitikk',
  ],
  content: [
    {
      id: 'sf2-4-4-intro',
      type: 'text',
      content: `## Arbeidsmarkedspolitikk

Arbeidsmarkedspolitikk er de tiltakene staten gjennomfører for å påvirke arbeidsmarkedet - først og fremst for å bekjempe arbeidsledighet og sikre høy sysselsetting. Vi skiller mellom aktiv og passiv arbeidsmarkedspolitikk.

**Målene for arbeidsmarkedspolitikken:**
- Høy sysselsetting og lav ledighet
- God matching mellom arbeidssokere og ledige stillinger
- Inkludering av grupper som står utenfor arbeidslivet
- Kompetanseutvikling som svarer til arbeidsmarkedets behov
- Trygghet for arbeidstakere ved omstilling

Norge bruker betydelige ressurser på arbeidsmarkedspolitikk, og NAV (Arbeids- og velferdsetaten) er den sentrale aktoren i gjennomføringen.`,
    },
    {
      id: 'sf2-4-4-def-aktiv-passiv',
      type: 'definition',
      title: 'Aktiv og passiv arbeidsmarkedspolitikk',
      content: `**Passiv arbeidsmarkedspolitikk** omfatter inntektssikring til de som er uten arbeid:
- **Dagpenger:** Inntektssikring for arbeidsledige (ca. 62,4 % av tidligere inntekt i inntil 2 år)
- **Arbeidsavklaringspenger (AAP):** For personer med nedsatt arbeidsevne under avklaring
- **Uføretrygd:** Varig ytelse for de som ikke kan jobbe pga. helse
- **Sykepenger:** Full lønn under sykdom i inntil 1 år

**Aktiv arbeidsmarkedspolitikk** omfatter tiltak som skal hjelpe folk tilbake i arbeid:
- **Arbeidsmarkedstiltak:** Kurs, opplæring, praksisplasser og lønnstilskudd
- **Arbeidsfomidling:** NAVs kobling av arbeidssokere og arbeidsgivere
- **Kvalifiseringsprogrammer:** Opplæring og aktivitet for de lengst fra arbeidsmarkedet
- **Karriereveiledning:** Rådgivning om utdanning og yrkesvalg
- **Løretilskudd:** Tilskudd til arbeidsgivere som ansetter fra utsatte grupper
- **Varig tilrettelagt arbeid (VTA):** Arbeidsplasser for de som ikke kan jobbe i det ordinære arbeidsmarkedet

**Hovedforskjellen:** Passiv politikk gir penger til ledige, aktiv politikk gir dem verktoy til å komme tilbake i jobb.`,
    },
    {
      id: 'sf2-4-4-example-nav',
      type: 'example',
      title: 'Eksempel: NAV som arbeidsmarkedsverktoy',
      problem: 'Erik (45 år) mister jobben i en nedleggelse av en treforedlingsfabrikk. Han har jobbet på fabrikken i 20 år og har fagbrev som prosessoperatør. Beskriv hvordan NAV kan hjelpe Erik tilbake i arbeid.',
      solution: `**Løsning:**

**Trinn 1: Inntektssikring (passiv politikk)**
Erik registrerer seg som arbeidsledig hos NAV og får dagpenger (ca. 62,4 % av tidligere inntekt, maks ca. 6G). Dette gir økonomisk trygghet mens han søker ny jobb.

**Trinn 2: Kartlegging**
NAV-veilederen kartlegger Eriks kompetanse, erfaring og ønsker. Hans prosessoperatørutdanning kan være relevant i andre industrier.

**Trinn 3: Aktive tiltak**
- **Jobbsøkekurs:** Hjelp til CV, søknader og intervjutrening
- **Omskolering:** Kurs i ny teknologi eller relaterte fagfelt
- **Arbeidspraksis:** Utplassering i en bedrift for å få erfaring i ny bransje
- **Løretilskudd:** NAV kan gi tilskudd til en arbeidsgiver som ansetter Erik i en opplæringsperiode

**Trinn 4: Oppfølging**
NAV følger opp med regelmessige samtaler og justerer tiltakene etter behov.

**Resultat:** Med riktig kombinasjon av inntektssikring og aktive tiltak kan Erik finne ny jobb innen et år - for eksempel i prosessindustri, energisektoren eller teknisk vedlikehold.`,
    },
    {
      id: 'sf2-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-4-ex-1',
        number: '4.4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedforskjellen mellom aktiv og passiv arbeidsmarkedspolitikk?',
        multipleChoiceOptions: [
          'Passiv politikk gir inntektssikring, aktiv politikk gir tiltak for å komme tilbake i jobb',
          'Aktiv politikk koster mer enn passiv politikk',
          'Passiv politikk brukes i nedgangstider, aktiv politikk i oppgangstider',
          'Det er ingen vesentlig forskjell mellom dem',
        ],
        hints: ['Tenk på forskjellen mellom å gi folk penger og å gi dem verktoy'],
        solution: 'Passiv arbeidsmarkedspolitikk handler om inntektssikring (dagpenger, sykepenger, uføretrygd) - det gir folk penger mens de er uten arbeid. Aktiv arbeidsmarkedspolitikk handler om tiltak som hjelper folk tilbake i jobb (kurs, omskolering, arbeidspraksis, lønnstilskudd). Begge deler er nødvendige: passiv politikk gir trygghet, aktiv politikk gir muligheter.',
      },
    },
    {
      id: 'sf2-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-4-ex-2',
        number: '4.4.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket av følgende er et eksempel på aktiv arbeidsmarkedspolitikk?',
        multipleChoiceOptions: [
          'NAV tilbyr omskolering og arbeidspraksis til en arbeidsledig person',
          'En arbeidsledig person mottar dagpenger',
          'En syk person mottar sykepenger fra NAV',
          'En pensjonist mottar alderspensjon',
        ],
        hints: ['Aktiv politikk handler om tiltak som hjelper folk tilbake i arbeid, ikke bare inntektssikring'],
        solution: 'Omskolering og arbeidspraksis er aktive arbeidsmarkedstiltak fordi de gir arbeidssokeren ny kompetanse og erfaring som øker sjansen for å få jobb. Dagpenger, sykepenger og alderspensjon er passive tiltak som gir inntektssikring uten å direkte øke arbeidsevnen.',
      },
    },
    {
      id: 'sf2-4-4-kompetanse',
      type: 'text',
      content: `## Kompetansepolitikk

Kompetansepolitikk er den delen av arbeidsmarkedspolitikken som handler om utdanning, opplæring og livslang læring. I en økonomi som stadig endrer seg, er kompetanseutvikling avgjørende for å holde folk i arbeid.

**Kompetanseutfordringer i Norge:**
- Rask teknologisk endring gjor at kompetanse foreldres raskere enn for
- Mange voksne mangler grunnleggende ferdigheter (lesing, regning, digitale ferdigheter)
- Overgangen til grønn økonomi krever ny kompetanse
- Eldreboolgen øker behovet for helsepersonell
- Innvandrere trenger norskopplæring og godkjenning av utenlandsk utdanning

**Viktige kompetansepolitiske tiltak:**
1. **Kompetansepluss:** Tilskudd til opplæring i grunnleggende ferdigheter i arbeidslivet
2. **Fagskole og yrkesfag:** Styrking av praktisk og yrketrettet utdanning
3. **Etter- og videreutdanning:** Tilrettelegging for at voksne kan oppdatere kompetansen sin
4. **Integreringsprogrammet:** Norskopplæring og kvalifisering for innvandrere
5. **Bransjeprogram:** Skreddersydde opplæringsprogrammer for bransjer i omstilling

**Trepartssamarbeid om kompetanse:**
Partene i arbeidslivet samarbeider om kompetansepolitikk gjennom Kompetansepolitisk råd og bransjeprogram. Staten finansierer, arbeidsgiverne gir tid og tilgang, og fagforeningene sikrer at behovene til de ansatte ivaretas.`,
    },
    {
      id: 'sf2-4-4-def-arbeidslinje',
      type: 'definition',
      title: 'Arbeidslinjen',
      content: `**Arbeidslinjen** er det overordnede prinsippet i norsk arbeids- og velferdspolitikk: det skal alltid lonne seg å jobbe framfor å motta trygd.

**Hovedprinsipper:**
- Arbeid er førstevalget for alle som kan jobbe
- Velferdsytelser skal utformes slik at de stimulerer til arbeid, ikke passivitet
- Aktivitetskrav: Mottakere av ytelser skal være aktive (søke jobb, ta kurs, delta i tiltak)
- Graderte ytelser: Mulighet for å kombinere arbeid og trygd

**Virkemidler for å støtte arbeidslinjen:**
- **Aktivitetsplikt:** Sosialhjelpmottakere under 30 år må delta i aktivitet
- **Gradert sykemelding:** Delvis arbeid under sykdom nå mulig
- **Løretilskudd:** Gjor det billigere for arbeidsgivere å ansette fra utsatte grupper
- **Kvalifiseringsprogrammet:** Intensiv oppfølging for de lengst fra arbeidsmarkedet

**Kritikk av arbeidslinjen:**
- Kan oppleves som press på syke og uføre
- Aktivitetskrav kan være urimelige for de med alvorlige helseproblemer
- Noen mener den er for lite fleksibel og tar ikke hensyn til individuelle behov
- Risiko for at folk ender i midlertidige, usikre jobber i stedet for varig arbeid`,
    },
    {
      id: 'sf2-4-4-example-kompetanse',
      type: 'example',
      title: 'Eksempel: Kompetansepolitikk i praksis',
      problem: 'En industribedrift skal automatisere store deler av produksjonen. 50 ansatte risikerer å miste jobben med mindre de får ny kompetanse. Beskriv hvordan arbeidsmarkedspolitikken kan bidra til omstillingen.',
      solution: `**Løsning:**

**Før nedbemanningen (forebyggende tiltak):**
1. **Bransjeprogram:** Bedriften kan søke om stotte til opplæring gjennom bransjeprogrammer for industrien
2. **Kompetansekartlegging:** Identifisere hva de ansatte kan fra før og hva de trenger å lære
3. **Internt omskoleringsløp:** Bedriften kan trene ansatte til nye roller (programmering, vedlikehold av roboter, kvalitetskontroll)

**Samarbeid med NAV:**
4. **Bedriftsintern opplæring (BIO):** NAV kan gi tilskudd til opplæring av ansatte som ellers ville blitt overflodige
5. **Karriereveiledning:** NAV kan hjelpe de ansatte med å vurdere muligheter

**Hvis noen likevel må gå:**
6. **Dagpenger:** Inntektssikring under jobbsøk
7. **Arbeidsmarkedskurs:** Kurs i programmering, automasjon eller andre relevante fag
8. **Praksisplasser:** Utplassering i bedrifter som trenger ny kompetanse

**Resultat:** Med tidlig innsats og samarbeid mellom bedrift, fagforening og NAV kan mange av de 50 ansatte få ny kompetanse og beholde jobben eller finne nye jobber raskt.`,
    },
    {
      id: 'sf2-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-4-ex-3',
        number: '4.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med arbeidslinjen i norsk velferdspolitikk, og drøft fordeler og ulemper med dette prinsippet.',
        hints: ['Arbeidslinjen handler om at det skal lonne seg å jobbe - tenk på både motivasjon og mulige uheldige sider'],
        solution: 'Arbeidslinjen betyr at arbeid alltid skal være førstevalget og at det skal lonne seg å jobbe framfor å motta trygd. Fordeler: 1) Øker yrkesdeltakelsen og reduserer avhengighet av offentlige ytelser. 2) Arbeid gir meining, sosial tilhørighet og bedre helse for den enkelte. 3) Høyere sysselsetting gir høyere skatteinntekter og lavere trygdeutgifter. Ulemper: 1) Kan oppleves som press på syke og uføre som ikke kan jobbe. 2) Aktivitetskrav kan være urimelige for de med alvorlige helseproblemer. 3) Kan tvinge folk inn i lavtlønnede, usikre jobber. 4) Tar ikke alltid hensyn til at noen trenger lengre tid på å bli friske.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-4-ex-4',
        number: '4.4.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for tre ulike arbeidsmarkedstiltak NAV kan tilby, og forklar hvilken type arbeidsledighet hvert tiltak er best egnet til å bekjempe.',
        hints: ['Koble hvert tiltak til friksjonsledighet, strukturell ledighet eller konjunkturell ledighet'],
        solution: '1) Jobbsøkekurs og arbeidsfomidling: Best egnet mot friksjonsledighet - hjelper arbeidssokere med å finne ledige stillinger raskere og presentere seg bedre for arbeidsgivere. 2) Omskolering og etterutdanning: Best egnet mot strukturell ledighet - gir ny kompetanse til arbeidstakere som har ferdigheter markedet ikke lenger etterspør. 3) Lønnstilskudd: Kan brukes mot både strukturell og konjunkturell ledighet - gjor det billigere for arbeidsgivere å ansette, noe som øker etterspørselen etter arbeidskraft. Generelt gjelder det at arbeidsmarkedstiltak er mest effektive mot friksjons- og strukturell ledighet, mens konjunkturell ledighet primaert bekjempes med makroøkonomisk politikk (rente, finanspolitikk).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-4-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-4-ex-5',
        number: '4.4.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft om generøse dagpengeordninger øker eller reduserer arbeidsledigheten. Trekk inn argumenter fra både tilhengere og motstandere av høy inntektssikring.',
        hints: ['Tenk på balansen mellom trygghet (som gir bedre matching) og moralsk hasard (som kan redusere søkeinnsats)'],
        solution: 'Argumenter for at generøse dagpenger reduserer ledigheten: 1) Gir arbeidssokere tid til å finne en jobb som matcher kompetansen, noe som gir bedre og mer varige ansettelser. 2) Gir trygghet som gjor folk villige til å ta risiko og skifte jobb, noe som øker mobiliteten. 3) Fungerer som automatisk stabilisator i nedgangstider ved å opprettholde kjøpekraften. Argumenter for at generøse dagpenger øker ledigheten: 1) Moralsk hasard - høy kompensasjon reduserer insentivet til å søke jobb aktivt. 2) Reservasjonslønnen øker - ledige avslår jobbtilbud de ellers ville akseptert. 3) Lengre ledighetsperioder svekker kompetanse og tilknytning til arbeidslivet. Forskningen viser at moderat generøse ordninger med aktivitetskrav gir best resultat - trygghet kombinert med insentiver til å søke aktivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-4-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering - Arbeidsmarkedspolitikk

- **Passiv arbeidsmarkedspolitikk** gir inntektssikring (dagpenger, sykepenger, uføretrygd)
- **Aktiv arbeidsmarkedspolitikk** gir tiltak for å komme i jobb (kurs, omskolering, praksisplasser)
- **NAV** er den sentrale aktoren som gjennomfører arbeidsmarkedspolitikken
- **Arbeidslinjen** er prinsippet om at det alltid skal lonne seg å jobbe
- **Kompetansepolitikk** sikrer at arbeidsstyrken har riktig kompetanse for fremtidens behov
- **Trepartssamarbeid** om kompetanse involverer stat, arbeidsgivere og fagforeninger
- Ulike typer ledighet krever ulike tiltak: friksjon trenger matching, strukturell trenger omskolering, konjunkturell trenger makropolitikk`,
    },
    {
      id: 'sf2-4-4-ex-6',
      type: 'exercise',
      title: 'Samleoppgave',
      exercise: {
        id: 'sf2-4-4-ex-6',
        number: '4.4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjør rede for forskjellen mellom aktiv og passiv arbeidsmarkedspolitikk. Forklar NAVs rolle i gjennomføringen, og drøft hvordan arbeidsmarkedspolitikken kan tilpasses for å møte utfordringene med grønn omstilling og teknologisk endring.',
        hints: ['Dekk både tradisjonell arbeidsmarkedspolitikk og nye behov knyttet til omstilling og kompetanse'],
        solution: 'Passiv politikk (dagpenger, trygd) gir økonomisk trygghet, mens aktiv politikk (kurs, omskolering, praksis) hjelper folk tilbake i arbeid. NAV administrerer begge deler: behandler soknader om ytelser, tilbyr arbeidsmarkedstiltak, kobler arbeidssokere med arbeidsgivere og gir karriereveiledning. For grønn omstilling og teknologisk endring må politikken tilpasses: 1) Større satsing på omskolering til grønne næringer (havvind, hydrogen, batteriteknologi). 2) Kompetanseprogrammer i digitalisering og AI for arbeidstakere i utsatte bransjer. 3) Forebyggende tiltak før nedbemanninger (bedriftsintern opplæring). 4) Styrket samarbeid mellom næringslivet og utdanningsinstitusjonene for å sikre at utdanningen matcher fremtidens behov. 5) Livslang læring må bli normen - alle må oppdatere kompetansen gjennom hele karrieren.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4.5: Fremtidens arbeidsliv
// ============================================================================

export const CHAPTER_SAMFOKONOMI_2_4_5: TextbookChapter = {
  id: 'samfokonomi-2-4-5',
  courseId: 'samfokonomi-2',
  chapterNumber: '4.5',
  title: 'Fremtidens arbeidsliv',
  description: 'Automatisering, kunstig intelligens, grønn omstilling, gig-økonomi og nye arbeidsformer.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjore rede for den norske modellen og drofte utfordringer for arbeidslivet',
    'analysere hvordan arbeidsmarkedet fungerer og drofte arbeidsmarkedspolitikk',
  ],
  content: [
    {
      id: 'sf2-4-5-intro',
      type: 'text',
      content: `## Fremtidens arbeidsliv

Arbeidslivet er i rask endring. Teknologisk utvikling, klimaomstilling og nye arbeidsformer utfordrer både arbeidstakere, arbeidsgivere og det politiske systemet. For å forstå fremtidens arbeidsmarked må vi analysere de viktigste drivkreftene.

**Fire store endringstrender:**
1. **Automatisering og kunstig intelligens** - maskiner og AI overtar stadig flere oppgaver
2. **Grønn omstilling** - overgangen til en lavutslippsoøkonomi endrer næringstrukturen
3. **Gig-økonomien** - nye arbeidsformer utfordrer det tradisjonelle arbeidsforholdet
4. **Demografiske endringer** - eldrebolgen og innvandring endrer sammensetningen av arbeidsstyrken

Disse trendene virker sammen og forsterker hverandre. La oss se narmere på hver av dem.`,
    },
    {
      id: 'sf2-4-5-def-automatisering',
      type: 'definition',
      title: 'Automatisering og kunstig intelligens',
      content: `**Automatisering** betyr at maskiner, roboter eller dataprogrammer overtar oppgaver som tidligere ble utført av mennesker.

**Kunstig intelligens (AI)** er dataprogrammer som kan utføre oppgaver som normalt krever menneskelig intelligens: gjenkjenne monstre, ta beslutninger, oversette språk og generere tekst.

**Hvilke jobber er mest utsatt?**
- Rutinepreget arbeid (fabrikk, lager, kasse)
- Databehandling og enkel analyse
- Deler av kundeservice og administrasjon
- Enkel tekstproduksjon og oversettelse

**Hvilke jobber er minst utsatt?**
- Kreativt og innovativt arbeid
- Komplekse sosiale interaksjoner (terapi, ledelse, undervisning)
- Håndverk som krever fysisk tilpasningsevne
- Strategisk tenkning og kompleks problemløsning

**Teknologisk arbeidsledighet** oppstår nå automatisering fjerner jobber raskere enn nye jobber skapes. Historisk har ny teknologi skapt flere jobber enn den har fjernet, men overgansperiodene kan være smertefulle.`,
    },
    {
      id: 'sf2-4-5-example-ai',
      type: 'example',
      title: 'Eksempel: AI i arbeidslivet',
      problem: 'Et stort regnskapsfirma innfører AI-verktoy som kan utføre 80 % av den rutinemessige regnskapsføringen automatisk. Analyser konsekvensene for de ansatte og diskuter hvordan firmaet og myndighetene bør respondere.',
      solution: `**Løsning:**

**Konsekvenser for de ansatte:**
1. **Direkte truet:** Regnskapsførere som primaert gjor rutinearbeid (bokføring, avstemming, mva-rapportering) risikerer å bli overflodige
2. **Nye muligheter:** De som kan kombinere regnskapskompetanse med AI-verktoy blir mer verdifulle
3. **Endrede roller:** Fra manuelt arbeid til rådgivning, analyse og kvalitetskontroll

**Firmaets respons:**
- Tilby omskolering: Lære ansatte å bruke AI-vertoyene og fokusere på rådgivning
- Gradvis innføring: Gi ansatte tid til å tilpasse seg
- Nye tjenester: Bruke frigjort kapasitet til å tilby mer avanserte tjenester

**Myndighetenes respons:**
- Styrke kompetansepolitikken: Tilby kurs i digital kompetanse og AI
- Tilpasse utdanningene: Oppdatere regnskapsutdanningen til å inkludere AI
- Inntektssikring: Dagpenger og omskolering for de som mister jobben
- Regulering: Sikre at AI brukes forsvarlig og at arbeidstakerrettigheter ivaretas

**Historisk perspektiv:** Tilsvarende omstillinger har skjedd før - f.eks. da datamaskiner erstattet manuelle regneoperasjoner. Resultatet var flere, mer interessante jobber, men overgangen krevde omstilling.`,
    },
    {
      id: 'sf2-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-5-ex-1',
        number: '4.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke typer jobber er mest utsatt for å bli erstattet av automatisering og kunstig intelligens?',
        multipleChoiceOptions: [
          'Rutinepreget arbeid og enkel databehandling',
          'Kreativt arbeid og ledelse',
          'Håndverk som krever tilpasningsevne',
          'Kompleks rådgivning og terapi',
        ],
        hints: ['Tenk på hvilke oppgaver en maskin eller et dataprogram kan gjøre bedre enn et menneske'],
        solution: 'Rutinepreget arbeid og enkel databehandling er mest utsatt fordi disse oppgavene følger faste monstre som maskiner og AI kan lære å utføre effektivt. Jobber som krever kreativitet, kompleks sosial interaksjon eller fysisk tilpasningsevne er vanskeligere å automatisere.',
      },
    },
    {
      id: 'sf2-4-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-5-ex-2',
        number: '4.5.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva viser historiske erfaringer om forholdet mellom teknologisk utvikling og sysselsetting?',
        multipleChoiceOptions: [
          'Ny teknologi har historisk skapt flere jobber enn den har fjernet, men overgangene kan være smertefulle',
          'Teknologisk utvikling har alltid økt arbeidsledigheten permanent',
          'Teknologi har ingen effekt på sysselsettingen',
          'Kun høyutdannede tjener på teknologisk utvikling',
        ],
        hints: ['Tenk på tidligere teknologiske revolusjoner: industrialiseringen, datamaskinen, internett'],
        solution: 'Historisk har teknologiske revolusjoner skapt flere jobber enn de har fjernet - men overgansperiodene har vært smertefulle for de som ble rammet. Industrialiseringen fjernet håndverksyrker men skapte fabrikjobber. Datamaskinen fjernet manuelle kontorjobber men skapte IT-sektoren. Nokkelen er at nye teknologier skaper helt nye bransjer og yrker som ikke fantes før.',
      },
    },
    {
      id: 'sf2-4-5-grønn',
      type: 'text',
      content: `## Grønn omstilling og arbeidsmarkedet

Den grønne omstillingen - overgangen fra fossil til fornybar energi og bærekraftig produksjon - vil forandre arbeidsmarkedet fundamentalt.

**Jobber som forsvinner:**
- Oljeutvinning og -raffinering (gradvis nedbygging)
- Kulldrift og fossil energiproduksjon
- Noe fossildrevet transport

**Jobber som vokser:**
- Fornybar energi (havvind, sol, hydrogen)
- Energieffektivisering og grønn bygg
- Sirkulaerøkonomi (gjenbruk, reparasjon, resirkulering)
- Batteriteknologi og elbilproduksjon
- Klimarådgivning og bærekraftsrapportering
- Karbonfangst og -lagring (CCS)

**Kompetansegapet:**
Mange av jobbene i den grønne økonomien krever annen kompetanse enn de fossile jobbene. En oljeingeniør har mye overførbar kompetanse til havvind, men en oljearbeider på plattform trenger kanskje betydelig omskolering.

**Rettferdig omstilling (just transition):**
Begrepet «rettferdig omstilling» betyr at kostnadene ved den grønne omstillingen skal fordeles rettferdig. De som mister jobbene sine i fossile næringer, skal få hjelp til å finne nye jobber, ikke baere byrdene alene. Dette krever aktiv arbeidsmarkedspolitikk og kompetansetiltak.`,
    },
    {
      id: 'sf2-4-5-def-gig',
      type: 'definition',
      title: 'Gig-økonomien',
      content: `**Gig-økonomien** (plattformøkonomien) er en arbeidsform der folk utfører enkeltstående oppdrag (gigs) formidlet gjennom digitale plattformer, i stedet for å være fast ansatt.

**Eksempler:**
- **Uber og Bolt:** Transporttjenester
- **Foodora og Wolt:** Matleveranser
- **Upwork og Fiverr:** Frilanstjenester (design, programmering, skriving)
- **Airbnb:** Utleie av bolig

**Kjennetegn:**
- Oppdragstakerne er ofte klassifisert som selvstendige, ikke ansatte
- Fleksibel arbeidstid og ingen fast arbeidssted
- Betaling per oppdrag, ikke fast lønn
- Plattformen kobler oppdragsgiver og oppdragstaker

**Utfordringer for arbeidsretten:**
- **Arbeidstakerrettigheter:** Gig-arbeidere har ofte ikke krav på sykepenger, feriepenger, pensjon eller stillingsvern
- **Sosial dumping:** Effektiv timelønn kan være langt under tariff
- **Organisering:** Vanskelig å organisere seg i fagforeninger
- **Klassifisering:** Er gig-arbeidere ansatte eller selvstendige? Rettssaker om dette pågår i mange land

**Regulering i Norge:**
Regjeringen har tydeliggjort at mange gig-arbeidere reelt sett er arbeidstakere og skal ha de rettighetene dette innebarer. Arbeidsmiljøloven er skjerpet for å hindre omgåelse av arbeidsgiveransvaret.`,
    },
    {
      id: 'sf2-4-5-example-gig',
      type: 'example',
      title: 'Eksempel: Gig-økonomi og den norske modellen',
      problem: 'En matleveringsplattform opererer i Norge med 500 sykkelbuder som er klassifisert som selvstendige oppdragstakere. De har ingen fast lønn, ingen sykepenger og ingen feriepenger. Analyser situasjonen i lys av den norske modellen og arbeidsretten.',
      solution: `**Løsning:**

**Problemet:**
- Budene utfører arbeid som styres av plattformen (ruter, tidsfrister, priser)
- De baerer uniformer og bruker plattformens merke
- De har begrenset mulighet til å avslå oppdrag uten konsekvenser
- Likevel får de ingen arbeidsrettigheter

**Vurdering etter norsk arbeidsrett:**
Ifølge arbeidsmiljøloven er det realiteten i forholdet, ikke kontrakten, som avgjør om noen er arbeidstaker. Momenter som taler for at budene er arbeidstakere:
1. Plattformen bestemmer pris og betingelser
2. Budene bruker plattformens utstyr og merkevare
3. Det er et underordningsforhold
4. Budene kan ikke skaffe seg inntekt fra flere plattformer samtidig

**Konsekvenser hvis de er arbeidstakere:**
- Rett til minstelønn (allmengjort tariffavtale)
- Sykepenger, feriepenger og pensjon
- Stillingsvern og oppsigelsesvern
- Rett til å organisere seg

**Utfordring for den norske modellen:**
Gig-økonomien utfordrer grunnlaget for modellen fordi den skaper en gruppe arbeidstakere utenfor det organiserte arbeidslivet, uten de rettighetene og den tryggheten som er baerebjelken i den norske modellen.`,
    },
    {
      id: 'sf2-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-5-ex-3',
        number: '4.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med gig-økonomien, og drøft hvordan denne arbeidsformen utfordrer den norske arbeidslivsmodellen.',
        hints: ['Tenk på arbeidstakerrettigheter, fagorganisering og trygghetsordninger'],
        solution: 'Gig-økonomien er en arbeidsform der folk utfører enkeltstående oppdrag formidlet gjennom digitale plattformer (Uber, Foodora, Upwork). Utfordringene for den norske modellen: 1) Gig-arbeidere klassifiseres ofte som selvstendige og får ikke arbeidstakerrettigheter (sykepenger, feriepenger, pensjon, stillingsvern). 2) Det er vanskelig å organisere seg i fagforeninger, noe som undergraver trepartssamarbeidet. 3) Lønningene kan være langt under tariff, noe som skaper sosial dumping. 4) Arbeidsgivers ansvar pulveriseres nå plattformen ikke anser seg som arbeidsgiver. Den norske modellen er bygget på at arbeidstakere er fast ansatte med rettigheter - gig-økonomien utfordrer denne grunntanken.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-4-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-5-ex-4',
        number: '4.5.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for hva som menes med rettferdig omstilling (just transition) i forbindelse med den grønne omstillingen. Gi eksempler på tiltak som kan sikre rettferdig omstilling i Norge.',
        hints: ['Tenk på hvem som baerer kostnadene ved omstillingen og hvordan staten kan hjelpe'],
        solution: 'Rettferdig omstilling betyr at kostnadene ved overgangen fra fossil til grønn økonomi fordeles rettferdig, slik at de som mister jobben i fossile næringer får hjelp til å finne nye jobber. Tiltak for Norge: 1) Omskolering av oljearbeidere til havvind, hydrogen og karbonfangst - mye kompetanse er overførbar. 2) Regional næringsutvikling i områder som er avhengige av petroleum (Stavanger, Hammerfest). 3) Støtte til bedrifter som omstiller fra fossil til grønn virksomhet. 4) Dagpenger og inntektssikring under omstillingsperioden. 5) Investeringer i forskning og utvikling av grønn teknologi for å skape nye arbeidsplasser. 6) Trepartssamarbeid om omstillingsavtaler mellom bedrift, fagforening og myndigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-4-5-fremtid',
      type: 'text',
      content: `## Nye kompetansebehov og livslang læring

Fremtidens arbeidsliv stiller nye krav til kompetanse. Evnen til å lære hele livet - ikke bare gjennom formell utdanning - blir stadig viktigere.

**Kompetanser som blir viktigere:**
- **Digital kompetanse:** Forståe og bruke digitale verktoy og AI
- **Læringsevne:** Evnen til å tilegne seg ny kunnskap raskt
- **Tverrfaglighet:** Kombinere innsikt fra ulike fagfelt
- **Kreativitet og innovasjon:** Skape nye løsninger og ideer
- **Samarbeidsevne:** Jobbe effektivt i team, ofte på tvers av land og kulturer
- **Kritisk tenkning:** Vurdere informasjon, analysere data og ta gode beslutninger

**Fra utdanning til livslang læring:**
Tradisjonelt tok man utdanning først og jobbet deretter. I fremtiden vil utdanning og arbeid være mer integrert:
- Mikrokurs og sertifiseringer underveis i karrieren
- Bransjeprogram og bedriftsintern opplæring
- Nettbasert læring og fleksible studiemodeller
- Etter- og videreutdanning ved universiteter og fagskoler

**Myndighetenes rolle:**
- Finansiere livslang læring gjennom Lånekassen og kompetansefond
- Sikre at utdanningssystemet er fleksibelt nok for voksne
- Samarbeide med næringlivet om å identifisere fremtidige kompetansebehov
- Lage insentiver for bedrifter som investerer i ansattes kompetanse`,
    },
    {
      id: 'sf2-4-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-5-ex-5',
        number: '4.5.5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvordan automatisering og kunstig intelligens kan påvirke lønnsforskjeller i Norge. Kan det tenkes at AI forsterker ulikheten mellom høytkvalifiserte og lavtkvalifiserte arbeidstakere?',
        hints: ['Tenk på polarisering av arbeidsmarkedet: høytkvalifiserte vinner, mellomsjiktet taper, lavtkvalifiserte tjenestejobber består'],
        solution: 'Automatisering og AI kan forsterke lønnsulikheten gjennom arbeidsmarkedspolarisering. Høytkvalifiserte arbeidstakere (som bruker AI som verktoy) øker produktiviteten og får høyere lønn. Mellomsjiktet (kontor, administrasjon, enkel analyse) er mest utsatt for automatisering og kan forsvinne. Lavtkvalifiserte tjenestejobber (omsorg, renhold, manuelt arbeid) er vanskeligere å automatisere og består, men lønnen forblir lav. Resultatet kan bli en todelt arbeidsmarked: høylønnsjobber og lavlønnsjobber, med få jobber i mellom. For Norge kan dette utfordre den sammenpressede lønnsstrukturen og den norske modellen. Mulige mottiltak: Satsing på utdanning og omskolering, styrking av fagorganisering i nye sektorer, og skattepolitikk som motvirker økt ulikhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-4-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering - Fremtidens arbeidsliv

- **Automatisering og AI** erstatter rutinearbeid, men skaper også nye jobber og yrker
- **Grønn omstilling** fjerner fossile jobber og skaper grønne jobber - **rettferdig omstilling** sikrer at kostnadene fordeles rettferdig
- **Gig-økonomien** utfordrer den norske modellen ved å skape arbeidstakere uten rettigheter
- **Arbeidsmarkedspolarisering** kan øke ulikheten: høy- og lavlønnsjobber vokser, mellomsjiktet krymper
- **Livslang læring** blir avgjørende - evnen til å lære nye ferdigheter gjennom hele karrieren
- Nye kompetansebehov: digital kompetanse, kreativitet, kritisk tenkning og samarbeidsevne
- Den norske modellen må tilpasses for å håndtere disse endringene`,
    },
    {
      id: 'sf2-4-5-ex-6',
      type: 'exercise',
      title: 'Samleoppgave',
      exercise: {
        id: 'sf2-4-5-ex-6',
        number: '4.5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg to av de fire store endringstreendene (automatisering/AI, grønn omstilling, gig-økonomien, demografiske endringer) og analyser hvordan de påvirker det norske arbeidsmarkedet. Drøft hvilke tiltak myndighetene, arbeidsgiverne og fagforeningene bør iverksette for å sikre høy sysselsetting og et trygt arbeidsliv i fremtiden.',
        hints: ['Vis sammenhengene mellom trendene og koble tiltakene til den norske modellens rammeverk'],
        solution: 'Eksempel med automatisering/AI og grønn omstilling: Automatisering truer rutinepreget arbeid i industri og tjenester, mens grønn omstilling krever nedbygging av petroleumssektoren og oppbygging av grønne næringer. Sammen skaper de et massivt behov for omskolering og ny kompetanse. Myndighetene bør: 1) Investere i utdanning og livslang læring, særlig digital kompetanse og grønne fag. 2) Styrke NAVs kapasitet til omskolering og arbeidsmarkedstiltak. 3) Sikre rettferdig omstilling med regional støtte til petroleumsavhengige områder. Arbeidsgiverne bør: 1) Investere i ansattes kompetanseutvikling. 2) Samarbeide med utdanningsinstitusjonene om relevante utdanninger. 3) Tilpasse organisasjonen til nye teknologier gradvis. Fagforeningene bør: 1) Organisere nye grupper (gig-arbeidere, frilansere). 2) Forhandle om rett til kompetanseutvikling i tariffavtalene. 3) Sikre at omstillingen skjer på en måte som ivaretar arbeidstakernes rettigheter. Samlet må trepartssamarbeidet tilpasses for å møte fremtidens utfordringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler i seksjon 4
// ============================================================================

export const SAMFOKONOMI_2_DEL4_CHAPTERS: TextbookChapter[] = [
  CHAPTER_SAMFOKONOMI_2_4_1, CHAPTER_SAMFOKONOMI_2_4_2, CHAPTER_SAMFOKONOMI_2_4_3,
  CHAPTER_SAMFOKONOMI_2_4_4, CHAPTER_SAMFOKONOMI_2_4_5,
];
