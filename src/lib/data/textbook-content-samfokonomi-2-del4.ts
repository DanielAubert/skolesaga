/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Samfunnsoekonomi 2 VG3 - DEL 4
 * Seksjon 4: Arbeidsmarked og sysselsetting (kapittel 4.1-4.5)
 *
 * Dekker LK20-kompetansemaal:
 * "analysere hvordan arbeidsmarkedet fungerer og droefte arbeidsmarkedspolitikk"
 * "gjore rede for den norske modellen og droefte utfordringer for arbeidslivet"
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
  description: 'Tilbud og etterspoersel etter arbeidskraft, loennsdannelse og likevekt i arbeidsmarkedet.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere hvordan arbeidsmarkedet fungerer og drofte arbeidsmarkedspolitikk',
  ],
  content: [
    {
      id: 'sf2-4-1-intro',
      type: 'text',
      content: `## Arbeidsmarkedet

Arbeidsmarkedet er markedet der arbeidskraft kjoeps og selges. Arbeidstakere tilbyr sin tid og kompetanse, mens arbeidsgivere etterspoer arbeidskraft for aa produsere varer og tjenester. Prisen i dette markedet er loennen.

**Hvorfor er arbeidsmarkedet viktig?**
- Det bestemmer hvor mange som har jobb og hva de tjener
- Det pavirker inntektsfordeling og levestandard
- Det er sentralt for den makrooekonomiske utviklingen
- Sysselsettingsnivaaet har konsekvenser for offentlige finanser

Arbeidsmarkedet skiller seg fra andre markeder paa flere maater. Arbeidskraft er ikke en vare som kan lagres eller flyttes fritt. Arbeidstakere har rettigheter og forhandlingsmakt gjennom fagforeninger, og loennsdannelsen er ofte institusjonelt regulert.`,
    },
    {
      id: 'sf2-4-1-def-tilbud',
      type: 'definition',
      title: 'Tilbud og etterspoersel etter arbeidskraft',
      content: `**Tilbudet av arbeidskraft** bestemmes av:
- **Befolkningens stoerrelse og alderssammensetning** - antall personer i yrkesaktiv alder
- **Yrkesdeltakelse** - andelen av befolkningen i yrkesaktiv alder som deltar i arbeidsmarkedet
- **Arbeidstid** - hvor mange timer den enkelte oensker aa jobbe
- **Kompetanse** - utdanningsnivaa og ferdigheter
- **Innvandring** - arbeidsinnvandring oeker tilbudet

**Etterspoerselen etter arbeidskraft** bestemmes av:
- **Produksjon og verdiskaping** - bedriftene trenger arbeidskraft for aa produsere
- **Loennskostnader** - hoeyere loenn reduserer etterspoerselen, alt annet likt
- **Produktivitet** - hoey produktivitet oeker verdien av en arbeidstime
- **Teknologi** - kan baade erstatte og skape nye arbeidsplasser
- **Konjunkturer** - etterspoerselen svinger med den oekonomiske aktiviteten

Etterspoerselen etter arbeidskraft er en **avledet etterspoersel** - den avhenger av etterspoerselen etter de varene og tjenestene arbeidstakerne produserer.`,
    },
    {
      id: 'sf2-4-1-example-tilbud',
      type: 'example',
      title: 'Eksempel: Likevekt i arbeidsmarkedet',
      problem: 'I et forenklet arbeidsmarked er tilbudet av arbeidskraft gitt ved W = 100 + 0,1L og etterspoerselen ved W = 500 - 0,1L, der W er loennen (i tusen kroner) og L er antall sysselsatte (i tusen). Finn likevektsloennen og sysselsettingen.',
      solution: `**Loesning:**

**Likevekt:** Tilbud = Etterspoersel
100 + 0,1L = 500 - 0,1L
0,2L = 400
L = 2 000 (tusen sysselsatte)

**Likevektsloenn:**
W = 100 + 0,1 * 2 000 = 100 + 200 = 300 (tusen kroner)

**Tolkning:**
- Likevektsloennen er 300 000 kr
- Sysselsettingen er 2 000 000 personer
- Ved denne loennen er antallet som oensker aa jobbe lik antallet bedriftene oensker aa ansette

**Hva skjer hvis loennen er hoeyere enn likevekt?**
Hvis W = 350: Tilbud = (350 - 100) / 0,1 = 2 500, Etterspoersel = (500 - 350) / 0,1 = 1 500. Det blir et overskudd av arbeidskraft paa 1 000 (tusen), altsaa arbeidsledighet.`,
    },
    {
      id: 'sf2-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-1-ex-1',
        number: '4.1.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva menes med at etterspoerselen etter arbeidskraft er en avledet etterspoersel?',
        multipleChoiceOptions: [
          'At den avhenger av etterspoerselen etter de varene og tjenestene arbeidstakerne produserer',
          'At den alltid foelger tilbudet av arbeidskraft',
          'At den bestemmes av arbeidstakernes utdanningsnivaa',
          'At den er fastsatt av myndighetene',
        ],
        hints: ['Tenk paa hvorfor bedrifter ansetter folk - hva er det egentlig de trenger?'],
        solution: 'Etterspoerselen etter arbeidskraft er avledet fordi bedrifter ikke ansetter folk for arbeidets egen skyld, men fordi de trenger arbeidskraft til aa produsere varer og tjenester som kundene etterspoer. Hvis etterspoerselen etter produktene faller, faller ogsaa behovet for arbeidskraft.',
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
        task: 'Hva skjer i arbeidsmarkedet hvis loennen settes hoeyere enn likevektsloennen?',
        multipleChoiceOptions: [
          'Det oppstaar arbeidsledighet fordi tilbudet av arbeidskraft overstiger etterspoerselen',
          'Alle faar jobb fordi hoeyere loenn tiltrekker flere arbeidstakere',
          'Bedriftene ansetter flere fordi de faar bedre kvalifiserte soekere',
          'Ingenting endres fordi markedet alltid er i likevekt',
        ],
        hints: ['Tenk paa hva som skjer med tilbud og etterspoersel naa prisen er over likevekt'],
        solution: 'Naa loennen er over likevekt, vil flere oenske aa jobbe (hoeyere tilbud), mens bedriftene oensker aa ansette faerre (lavere etterspoersel). Differansen mellom tilbud og etterspoersel gir arbeidsledighet. Dette er et klassisk eksempel paa overskuddstilbud i et marked.',
      },
    },
    {
      id: 'sf2-4-1-loennsdannelse',
      type: 'text',
      content: `## Loennsdannelse

I praksis bestemmes loennen ikke bare av tilbud og etterspoersel i et fritt marked. Loennsdannelsen pavirkes av institusjoner, forhandlinger og politikk.

**Faktorer som pavirker loennen:**

**1. Produktivitet**
Grunnleggende oekonomisk teori sier at loennen paa lang sikt boer gjenspeile arbeidstakernes marginalproduktivitet - altsaa verdien av det de produserer. Hoeyere produktivitet gir grunnlag for hoeyere loenn.

**2. Forhandlinger**
I Norge forhandles loenn mellom arbeidsgiverorganisasjoner og fagforeninger (kollektive forhandlinger). Dette gir arbeidstakerne sterkere forhandlingsmakt enn individuelle forhandlinger.

**3. Minsteloenn og regulering**
Norge har ikke lovfestet minsteloenn, men mange bransjer har allmengjorte tariffavtaler som fungerer som minsteloennsordninger. I andre land er lovfestet minsteloenn vanlig.

**4. Kompetanse og utdanning**
Hoeyere utdanning gir gjennomgaaende hoeyere loenn, fordi utdannet arbeidskraft er knappere og mer produktiv.

**5. Markedsforhold**
I bransjer med knapphet paa arbeidskraft presses loennen opp. I bransjer med overskudd av arbeidskraft holdes loennen nede.`,
    },
    {
      id: 'sf2-4-1-def-loenn',
      type: 'definition',
      title: 'Nominell og reell loenn',
      content: `**Nominell loenn** er loennen malt i kroner - det beloepet du faar utbetalt. Naa vi sier at gjennomsnittsloennen i Norge er ca. 620 000 kr, snakker vi om nominell loenn.

**Reell loenn** er loennen justert for prisstigning (inflasjon). Den forteller oss hva loennen faktisk er verdt i kjoepekraft.

**Beregning:**
Realloennsendring = Nominell loennsendring - Inflasjon

**Eksempel:**
- Nominell loennsvekst: 5 %
- Inflasjon: 3 %
- Realloennsendring: 5 % - 3 % = 2 %

Det betyr at kjoepekraften oekte med 2 %, selv om loennen oekte med 5 %.

**Hvorfor er dette viktig?**
Det er realloennsveksten som bestemmer om arbeidstakerne faktisk faar raad til mer. En nominell loennsokning paa 4 % med 5 % inflasjon betyr en realloennsNEDgang paa 1 %.`,
    },
    {
      id: 'sf2-4-1-example-realloenn',
      type: 'example',
      title: 'Eksempel: Realloennsvekst i Norge',
      problem: 'I 2022 hadde norske arbeidstakere en gjennomsnittlig nominell loennsvekst paa 4,3 %, mens konsumprisindeksen steg med 5,8 %. Beregn realloennsutviklingen og forklar konsekvensene.',
      solution: `**Loesning:**

**Beregning:**
Realloennsendring = 4,3 % - 5,8 % = -1,5 %

**Tolkning:**
Selv om loennen gikk opp med 4,3 % i kroner, falt kjoepekraften med 1,5 %. Arbeidstakerne kunne kjoepde faerre varer og tjenester for loennen sin i 2022 enn i 2021.

**Konsekvenser:**
1. **For husholdningene:** Lavere levestandard - maa kutte i forbruk eller spare mindre
2. **For oekonomien:** Svekket privat forbruk kan dempe den oekonomiske veksten
3. **For loennsforhandlingene:** Arbeidstakerne vil kreve hoeyere loennsokning neste aar for aa ta igjen det tapte
4. **For sentralbanken:** Hoey inflasjon som spiser opp loennsveksten kan foere til renteoekning

**Historisk perspektiv:** Realloennsfall er uvanlig i Norge og skaper ofte politisk uro og sterkere loennkrav i neste forhandlingsrunde.`,
    },
    {
      id: 'sf2-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-1-ex-3',
        number: '4.1.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En arbeidstaker fikk 5,2 % nominell loennsokning i 2023. Inflasjonen var 4,8 %. Beregn realloennsveksten, og forklar hvorfor det er realloennen og ikke nominell loenn som er avgjoerende for kjoepekraften.',
        hints: ['Bruk formelen: Realloennsendring = Nominell loennsvekst - Inflasjon'],
        solution: 'Realloennsendring = 5,2 % - 4,8 % = 0,4 %. Arbeidstakeren fikk en realloennsoekning paa 0,4 %. Det er realloennen som er avgjoerende for kjoepekraften fordi den tar hensyn til at prisene ogsaa stiger. En nominell loennsokning paa 5,2 % hoeresut mye, men hvis prisene steg nesten like mye, er den reelle forbedringen minimal. Kjoepekraften - mengden varer og tjenester du kan kjoepde - avhenger av forholdet mellom loenn og priser.',
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
        task: 'Gjoer rede for minst fire faktorer som bestemmer tilbudet av arbeidskraft i et land. Forklar hvordan en endring i hver faktor pavirker tilbudet.',
        hints: ['Tenk paa demografi, yrkesdeltakelse, arbeidstid og innvandring'],
        solution: 'Fire faktorer: 1) Befolkningens stoerrelse og alderssammensetning - en ung og voksende befolkning gir oekt arbeidstilbud, mens eldrebolgen reduserer det. 2) Yrkesdeltakelse - andelen som deltar i arbeidslivet. Hoeyere yrkesdeltakelse blant kvinner har oekt tilbudet kraftig i Norge. 3) Arbeidstid - oensket arbeidstid per uke. Deltidsarbeid reduserer det effektive tilbudet. 4) Arbeidsinnvandring - innvandring fra EOS-omraadet har oekt tilbudet av arbeidskraft i Norge, spesielt i bygg og anlegg. 5) Utdanningsnivaa - pavirker hva slags arbeidskraft som tilbys. Lengre utdanning forsinker inntreden i arbeidsmarkedet, men oeker kompetansen.',
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
        task: 'Droeft hvordan oekning i minsteloenn kan pavirke arbeidsmarkedet. Bruk tilbuds- og etterspoerselsmodellen for arbeidskraft i analysen.',
        hints: ['Tenk paa minsteloenn som et prisgulv - hva skjer naa prisen settes over likevekt?'],
        solution: 'En minsteloenn som settes over likevektsloennen fungerer som et prisgulv. Etterspoerselen etter arbeidskraft faller (bedrifter vil ansette faerre), mens tilbudet oeker (flere oensker aa jobbe til den hoeyere loennen). Resultatet er et overskudd av arbeidskraft, altsaa arbeidsledighet. Imidlertid er virkeligheten mer nyansert: 1) Hoeyere loenn kan oeke produktiviteten (effektivitetsloennsteori). 2) Hoeyere loenn gir oekt kjoepekraft og etterspoersel etter varer. 3) I markeder med monopsonimakt (en dominerende arbeidsgiver) kan minsteloenn faktisk oeke sysselsettingen. 4) Empirisk forskning viser at moderate oekninger i minsteloenn har liten effekt paa sysselsettingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-4-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering - Arbeidsmarkedet

- **Arbeidsmarkedet** er markedet der arbeidskraft kjoeps og selges, og loennen er prisen
- **Tilbudet** av arbeidskraft avhenger av befolkning, yrkesdeltakelse, arbeidstid og innvandring
- **Etterspoerselen** avhenger av produksjon, loennskostnader, produktivitet og konjunkturer
- Etterspoerselen etter arbeidskraft er en **avledet etterspoersel**
- **Likevekt** oppstaar naa tilbud er lik etterspoersel - loennen som klarerer markedet
- **Loennsdannelsen** pavirkes av produktivitet, forhandlinger, regulering og markedsforhold
- Skillet mellom **nominell loenn** (kroner) og **reell loenn** (kjoepekraft) er avgjoerende`,
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
        task: 'Gjoer rede for hvordan arbeidsmarkedet fungerer ved hjelp av tilbuds- og etterspoerselsmodellen. Forklar hva som bestemmer likevektsloennen, og droeft hvordan endringer i produktivitet, teknologi og innvandring kan forskyve tilbuds- og etterspoerselskurvene.',
        hints: ['Bruk modellen systematisk: identifiser skift i kurvene og forklar konsekvensene for loenn og sysselsetting'],
        solution: 'Arbeidsmarkedet kan analyseres med tilbuds- og etterspoerselsmodellen. Tilbudskurven er stigende (hoeyere loenn gir flere som vil jobbe), etterspoerselskurven er fallende (hoeyere loenn betyr faerre ansettelser). Likevektsloennen finnes der kurvene krysser. Endringer: 1) Oekt produktivitet skifter etterspoerselskurven ut (hver arbeidstime er mer verdifull), noe som gir hoeyere likevektsloenn og hoeyere sysselsetting. 2) Teknologi kan skifte etterspoerselskurven inn (automatisering erstatter arbeidskraft) eller ut (ny teknologi skaper nye jobber). Nettoeffekten avhenger av om teknologien erstatter eller komplementerer arbeidskraft. 3) Innvandring skifter tilbudskurven ut, noe som isolert sett presser loennen ned og oeker sysselsettingen. Men innvandrere oeker ogsaa etterspoerselen etter varer og tjenester, som igjen oeker etterspoerselen etter arbeidskraft.',
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
  description: 'Typer arbeidsledighet (konjunkturell, strukturell, friksjon), maaling av ledighet og NAIRU.',
  estimatedMinutes: 20,
  competenceGoals: [
    'analysere hvordan arbeidsmarkedet fungerer og drofte arbeidsmarkedspolitikk',
  ],
  content: [
    {
      id: 'sf2-4-2-intro',
      type: 'text',
      content: `## Arbeidsledighet

Arbeidsledighet er et av de mest sentrale problemene i samfunnsoekonomi. Naa mennesker som oensker aa jobbe ikke finner arbeid, representerer det baade en personlig belastning og et oekonomisk tap for samfunnet.

**Hvorfor er arbeidsledighet et problem?**
- **For den enkelte:** Tap av inntekt, lavere selvfoelelse, sosial isolasjon, helseproblemer
- **For oekonomien:** Tapte ressurser - produksjon som kunne vaert gjennomfoert
- **For offentlige finanser:** Lavere skatteinntekter og hoeyere utgifter til trygd
- **For samfunnet:** Oekt ulikhet, lavere tillit, politisk uro

**Hvordan maales arbeidsledighet?**
I Norge brukes to maal:
1. **NAV-registrert ledighet:** Antall personer registrert som arbeidssokende hos NAV
2. **AKU-ledighet (SSBs arbeidskraftundersoekelse):** Basert paa utvalgsundersoekelse der folk spoerres om de er uten arbeid, har soekt jobb og er tilgjengelige

AKU-ledigheten er vanligvis hoeyere enn NAV-tallene fordi den fanger opp personer som soeker jobb uten aa registrere seg hos NAV.`,
    },
    {
      id: 'sf2-4-2-def-typer',
      type: 'definition',
      title: 'Typer arbeidsledighet',
      content: `**Friksjonsledighet** (soekeledighet) oppstaar fordi det tar tid aa finne riktig jobb. Arbeidstakere som skifter jobb eller nyutdannede som soeker sin foerste stilling er midlertidig ledige. Friksjonsledighet er normalt og finnes alltid i et dynamisk arbeidsmarked.

**Strukturell ledighet** skyldes et misforhold mellom arbeidstakernes kompetanse og det arbeidsmarkedet etterspoer. Eksempler:
- Arbeidere i nedlagte industrier mangler kompetanse for nye jobber
- Geografisk mismatch - jobbene finnes andre steder enn arbeidssokerne
- Teknologisk endring som gjoer visse yrker overflodige

**Konjunkturell ledighet** (syklisk ledighet) skyldes svingninger i den oekonomiske aktiviteten. Under lavkonjunktur faller etterspoerselen etter varer og tjenester, og bedriftene reduserer arbeidsstokken. Denne ledigheten forsvinner naa oekonomien bedres.

**Sesongledighet** skyldes sesongvariasjoner i noen bransjer, for eksempel byggebransjen om vinteren eller reiselivsnaeringen utenom sesong.`,
    },
    {
      id: 'sf2-4-2-example-typer',
      type: 'example',
      title: 'Eksempel: Klassifisering av arbeidsledighet',
      problem: 'Klassifiser foelgende tilfeller av arbeidsledighet: a) En nyutdannet oekonom bruker tre maaneder paa aa finne jobb. b) En oljearbeider i Stavanger mister jobben under oljeprisfallet i 2014-2016. c) En butikkmedarbeider erstattes av selvbetjeningskasser. d) En snoebroyter er ledig om sommeren.',
      solution: `**Loesning:**

**a) Friksjonsledighet**
Den nyutdannede oeksponomen er midlertidig ledig mens hun soeker etter riktig jobb. Dette er normalt og tidsbegrenset - det tar tid aa matche arbeidssokere med ledige stillinger.

**b) Konjunkturell ledighet**
Oljeprisfallet reduserte den oekonomiske aktiviteten i oljesektoren og tilknyttede naeringer. Dette er konjunkturbetinget - ledigheten oekte fordi etterspoerselen falt.

**c) Strukturell ledighet**
Butikkmedarbeideren har blitt erstattet av teknologi. Kompetansen (kasse og kundebehandling) er ikke lenger etterspoert i samme grad. Vedkommende maa omskoleres for aa finne ny jobb.

**d) Sesongledighet**
Snoebroeytingen er sesongavhengig. Arbeidet finnes bare om vinteren, saa ledigheten om sommeren er forutsigbar og gjentagende.`,
    },
    {
      id: 'sf2-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-2-ex-1',
        number: '4.2.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken type arbeidsledighet oppstaar fordi det tar tid aa finne riktig jobb etter endt utdanning?',
        multipleChoiceOptions: [
          'Friksjonsledighet',
          'Strukturell ledighet',
          'Konjunkturell ledighet',
          'Sesongledighet',
        ],
        hints: ['Tenk paa det tidsgapet som alltid finnes mellom aa avslutte noe og starte noe nytt'],
        solution: 'Friksjonsledighet oppstaar fordi det tar tid aa matche arbeidssokere med ledige stillinger. En nyutdannet person som soeker sin foerste jobb er et typisk eksempel. Denne ledigheten er midlertidig, normal og finnes i alle oekonomier.',
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
          'Strukturell ledighet skyldes mismatch mellom kompetanse og etterspoerel, konjunkturell skyldes svikt i samlet etterspoersel',
          'Strukturell ledighet er kortvarig, konjunkturell er langvarig',
          'Strukturell ledighet rammer bare industrien, konjunkturell rammer alle',
          'Det er ingen vesentlig forskjell mellom dem',
        ],
        hints: ['Tenk paa aarsaken: handler det om feil kompetanse eller for lite aktivitet i oekonomien?'],
        solution: 'Strukturell ledighet skyldes et misforhold mellom arbeidstakernes kompetanse, beliggenhet eller kjennetegn og det arbeidsmarkedet etterspoer. Konjunkturell ledighet skyldes generell nedgang i oekonomisk aktivitet. Skillet er viktig fordi de krever ulike politiske tiltak: strukturell ledighet krever omskolering og mobilitet, konjunkturell ledighet krever stimulering av samlet etterspoersel.',
      },
    },
    {
      id: 'sf2-4-2-nairu',
      type: 'text',
      content: `## Naturlig ledighetsrate og NAIRU

Oekonomisk teori skiller mellom arbeidsledighet som er uunngaaelig i et velfungerende marked, og ledighet som skyldes manglende etterspoersel.

**Naturlig ledighetsrate**
Den naturlige ledighetsraten er summen av friksjonsledighet og strukturell ledighet. Selv i en oekonomisk oppgangsperiode vil det alltid vaere noe ledighet, fordi folk skifter jobb og fordi det tar tid aa matche arbeidssokere med ledige stillinger.

**NAIRU (Non-Accelerating Inflation Rate of Unemployment)**
NAIRU er det ledighetsnivaaet som er forenlig med stabil inflasjon. Dersom ledigheten faller under NAIRU, vil loennspresset oeke og inflasjonen akselerere. Dersom ledigheten er over NAIRU, er det ledig kapasitet i oekonomien og inflasjonen vil avta.

**NAIRU i Norge:**
NAIRU anslaaes til rundt 3-4 % i Norge. Det betyr at en ledighetsrate paa 3-4 % regnes som forenlig med stabil loenns- og prisvekst.

**Phillipskurven**
Phillipskurven viser den empiriske sammenhengen mellom arbeidsledighet og inflasjon: lav ledighet gir hoey inflasjon, og omvendt. Paa kort sikt maa sentralbanken avveie mellom lav ledighet og lav inflasjon.`,
    },
    {
      id: 'sf2-4-2-def-nairu',
      type: 'definition',
      title: 'NAIRU',
      content: `**NAIRU (Non-Accelerating Inflation Rate of Unemployment)** er det laveste nivaaet arbeidsledigheten kan ligge paa uten at inflasjonen akselererer.

**Mekanismen:**
- Ledighet under NAIRU: Press i arbeidsmarkedet gir hoeyere loennsvekst enn produktivitetsveksten. Bedriftene velter hoeyere loennskostnader over i prisene, og inflasjonen stiger.
- Ledighet over NAIRU: Arbeidstakerne har svak forhandlingsmakt, loennskravene er moderate, og inflasjonen avtar.
- Ledighet lik NAIRU: Loennsveksten er forenlig med inflasjonsmaalet, og inflasjonen er stabil.

**Betydning for politikk:**
- Sentralbanken bruker NAIRU som referansepunkt naa den setter renten
- Hvis ledigheten er over NAIRU, kan ekspansiv politikk oeke sysselsettingen uten aa drive opp inflasjonen
- Hvis ledigheten er under NAIRU, kan innstrammende politikk vaere noedvendig for aa unngaa overoppheting`,
    },
    {
      id: 'sf2-4-2-example-nairu',
      type: 'example',
      title: 'Eksempel: NAIRU og pengepolitikk',
      problem: 'Ledigheten i Norge faller til 2,5 %, mens NAIRU anslaaes til 3,5 %. Hva kan vi forvente at skjer med loennsvekst og inflasjon, og hvordan vil Norges Bank trolig reagere?',
      solution: `**Loesning:**

**Situasjonen:**
Ledigheten (2,5 %) er vesentlig under NAIRU (3,5 %). Arbeidsmarkedet er stramt.

**Forventet utvikling:**
1. **Loennsvekst:** Arbeidstakerne har sterk forhandlingsmakt fordi bedriftene sliter med aa finne arbeidskraft. Loennsveksten oeker utover produktivitetsveksten.
2. **Inflasjon:** Bedriftene velter hoeyere loennskostnader over i prisene. Inflasjonen stiger over maalet paa 2 %.
3. **Forventninger:** Hvis inflasjonen forblir hoey, kan inflasjonforventningene oeke, noe som forsterker loenn-pris-spiralen.

**Norges Banks reaksjon:**
Norges Bank vil trolig oeke styringsrenten for aa:
- Dempe etterspoerselen i oekonomien
- Kjoele ned arbeidsmarkedet
- Bringe inflasjonen tilbake mot maalet paa 2 %

**Dilemma:** Renteoekningene vil ogsaa dempe oekonomisk vekst og kan oeke ledigheten. Sentralbanken maa avveie mellom prisstabilitet og sysselsetting.`,
    },
    {
      id: 'sf2-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-2-ex-3',
        number: '4.2.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva NAIRU er, og gjoer rede for hva som skjer med loennsvekst og inflasjon naa arbeidsledigheten er henholdsvis over og under NAIRU.',
        hints: ['Bruk Phillipskurven som rammeverk og forklar mekanismene bak loenn-pris-dynamikken'],
        solution: 'NAIRU er det ledighetsnivaaet som er forenlig med stabil inflasjon. Naa ledigheten er under NAIRU, er arbeidsmarkedet stramt og arbeidstakerne har sterk forhandlingsmakt. Loennsveksten overstiger produktivitetsveksten, bedriftene oeker prisene for aa dekke hoeyere kostnader, og inflasjonen akselererer. Naa ledigheten er over NAIRU, er det ledig kapasitet i oekonomien, arbeidstakerne har svak forhandlingsmakt, loennsveksten er moderat, og inflasjonen avtar. Ved NAIRU er loennsveksten forenlig med inflasjomaalet, og inflasjonen er stabil.',
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
        task: 'En fabrikk legger ned driften og 200 ansatte mister jobben. Halvparten har kompetanse som er etterspoert i andre bransjer, mens den andre halvparten har spesialisert kompetanse som er vanskelig aa overfoere. Klassifiser ledigheten for begge gruppene, og foreslaa tiltak for aa hjelpe dem tilbake i arbeid.',
        hints: ['Tenk paa forskjellen mellom friksjonsledighet og strukturell ledighet, og hvilke tiltak som passer til hver type'],
        solution: 'De 100 med overfoerbar kompetanse opplever friksjonsledighet - de trenger tid til aa finne ny jobb, men har relevant kompetanse. Tiltak: arbeidsfomidling, jobbsoekekurs, informasjon om ledige stillinger. De 100 med spesialisert kompetanse opplever strukturell ledighet - det er mismatch mellom deres ferdigheter og det markedet etterspoer. Tiltak: omskolering og etterutdanning, loeretilskudd til arbeidsgivere som ansetter dem, flyttestoette hvis jobbene finnes andre steder, prakisplasser i nye bransjer. Strukturell ledighet krever mer inngripende og langsiktige tiltak enn friksjonsledighet.',
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
        task: 'Droeft Phillipskurvens relevans for pengepolitikken. Finnes det en varig avveining mellom arbeidsledighet og inflasjon, eller kun paa kort sikt?',
        hints: ['Skill mellom den kortsiktige Phillipskurven (avveining) og den langsiktige (vertikal ved NAIRU)'],
        solution: 'Phillipskurven antyder en negativ sammenheng mellom ledighet og inflasjon. Paa kort sikt finnes denne avveiningen: ekspansiv politikk kan redusere ledigheten, men driver opp inflasjonen. Paa lang sikt er bildet annerledes. Ifoegle Friedman og Phelps vil oekonomien alltid vende tilbake til den naturlige ledighetsraten (NAIRU). Forsook paa aa holde ledigheten varig under NAIRU foehrer til stadig akselererende inflasjon, fordi inflasjonforventningene justeres oppover. Den langsiktige Phillipskurven er derfor vertikal ved NAIRU. For pengepolitikken betyr dette at sentralbanken kan pavirke realoekonomen paa kort sikt, men paa lang sikt bestemmer strukturelle faktorer ledigheten, og pengepolitikken bestemmer inflasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-4-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering - Arbeidsledighet

- **Arbeidsledighet** er et alvorlig problem for den enkelte, oekonomien og samfunnet
- **Friksjonsledighet** er normal og midlertidig - det tar tid aa finne riktig jobb
- **Strukturell ledighet** skyldes mismatch mellom kompetanse og etterspoersel
- **Konjunkturell ledighet** skyldes nedgang i oekonomisk aktivitet
- **Naturlig ledighetsrate** = friksjonsledighet + strukturell ledighet
- **NAIRU** er ledighetsnivaaet forenlig med stabil inflasjon (ca. 3-4 % i Norge)
- **Phillipskurven** viser avveiningen mellom ledighet og inflasjon paa kort sikt
- Paa lang sikt er Phillipskurven vertikal ved NAIRU`,
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
        task: 'Gjoer rede for de ulike typene arbeidsledighet, og forklar sammenhengen mellom arbeidsledighet og inflasjon ved hjelp av NAIRU-modellen. Droeft hvilke politiske tiltak som egner seg best for aa bekjempe de ulike typene ledighet.',
        hints: ['Strukturer svaret: typer ledighet, NAIRU-mekanismen, og tiltak tilpasset hver type'],
        solution: 'Typene: Friksjonsledighet (soekeledighet), strukturell ledighet (kompetansemismatch), konjunkturell ledighet (ettersporselssvikt) og sesongledighet. NAIRU-modellen: Den naturlige ledighetsraten (NAIRU) er summen av friksjons- og strukturell ledighet. Under NAIRU: stramt arbeidsmarked, hoey loennsvekst, stigende inflasjon. Over NAIRU: ledig kapasitet, moderat loennsvekst, fallende inflasjon. Tiltak: Mot friksjonsledighet: bedre arbeidsfomidling, karriereveiledning og informasjon. Mot strukturell ledighet: omskolering, etterutdanning, regional mobilitet og loeretilskudd. Mot konjunkturell ledighet: ekspansiv finans- og pengepolitikk (oekt offentlig forbruk, lavere rente). Poenget er at ulike typer ledighet krever ulike loesninger - etterspoerselsstimulering hjelper ikke mot strukturell ledighet.',
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

Den norske modellen (ogsaa kalt den nordiske modellen) er betegnelsen paa det saeregnne systemet som kjennetegner arbeidslivet og velferdsstaten i Norge og de andre nordiske landene. Modellen er bygget paa samarbeid mellom tre parter: staten, arbeidsgiverne og arbeidstakerne.

**Kjernen i modellen:**
- Organisert arbeidsliv med sterke fagforeninger og arbeidsgiverorganisasjoner
- Koordinert loennsdannelse gjennom kollektive forhandlinger
- Omfattende velferdsordninger som gir trygghet ved omstilling
- Hoey tillit mellom partene i arbeidslivet
- Stat som aktiv regulerer og megler

**Resultater av den norske modellen:**
- Hoey sysselsetting og lav ledighet
- Relativt smaa loennsforskjeller sammenlignet med andre land
- Hoey produktivitet
- Stor omstillingsevne - arbeidstakere toor aa skifte jobb fordi sikkerhetsnettet er sterkt
- Faa arbeidskonflikter (lav streikefrekvens)`,
    },
    {
      id: 'sf2-4-3-def-trepartssamarbeid',
      type: 'definition',
      title: 'Trepartssamarbeidet',
      content: `**Trepartssamarbeidet** er samarbeidet mellom de tre partene i arbeidslivet:

**1. Staten**
- Setter rammebetingelsene gjennom lover og regler (arbeidsmiljoeloven, ferieloven)
- Opptrer som megler i arbeidskonflikter (Riksmekleren)
- Bruker finanspolitikken til aa pavirke oekonomien og sysselsettingen
- Er selv en stor arbeidsgiver

**2. Arbeidsgiverorganisasjoner**
- **NHO** (Naeringslivets Hovedorganisasjon) - privat sektor
- **KS** (Kommunesektorens organisasjon) - kommunal sektor
- **Spekter** - helse og statlige virksomheter
- **Virke** - handel og tjenester
- Forhandler paa vegne av bedriftene om loenn og arbeidsvilkaar

**3. Arbeidstakerorganisasjoner**
- **LO** (Landsorganisasjonen) - stoerst med ca. 980 000 medlemmer
- **Unio** - akademikerorganisasjon (sykepleiere, laerere)
- **YS** (Yrkesorganisasjonenes Sentralforbund)
- **Akademikerne** - hoeyere utdanning
- Forhandler paa vegne av arbeidstakerne om loenn og arbeidsvilkaar

**Organisasjonsgraden** i Norge er ca. 50 %, noe som er hoeyere enn i de fleste vestlige land, men lavere enn i Sverige og Danmark.`,
    },
    {
      id: 'sf2-4-3-def-frontfag',
      type: 'definition',
      title: 'Frontfagsmodellen',
      content: `**Frontfagsmodellen** er det norske systemet for koordinert loennsdannelse.

**Hovedprinsippet:** Konkurranseutsatte naeringer (industri og eksportbedrifter) forhandler om loenn foerst i hver tariffperiode. Resultatet setter rammen - det saakalt loennstaktet - som de oevrige bransjene forholder seg til.

**Hvorfor industrien gaar foerst:**
- Industrien konkurrerer med utenlandske bedrifter og maa holde kostnadene konkurransedyktige
- Hvis loennsveksten i industrien overstiger produktivitetsveksten, mister norske bedrifter konkurranseevne
- Ved aa la industrien sette takten, sikrer man at loennsveksten er barekraftig for hele oekonomien

**Slik fungerer det i praksis:**
1. LO og NHO forhandler for industrien (det saakalt frontfaget)
2. Resultatet - f.eks. 4,5 % loennsvekst - setter rammen
3. Offentlig sektor og andre private bransjer forhandler deretter, med frontfagsrammen som rettesnor
4. Over tid skal alle grupper ha omtrent lik loennsvekst

**Utfordringer:**
- Noen grupper foeler seg bundet av en ramme de ikke har vaert med paa aa bestemme
- Loennsglidning (lokale tillegg utover den sentrale rammen) kan gi ulik reell loennsvekst
- Offentlig sektor klager over at frontfagsmodellen gir for lav loennsvekst for offentlig ansatte`,
    },
    {
      id: 'sf2-4-3-example-forhandling',
      type: 'example',
      title: 'Eksempel: Et loennsoppgjoer',
      problem: 'I arets loennsoppgjoer krevde LO 5,5 % loennsvekst for industriarbeiderne. NHO mente at bedriftenes oekonomiske situasjon bare tillot 3,5 %. Etter forhandlinger og mekling endte man paa 4,5 %. Forklar prosessen og konsekvensene for resten av arbeidslivet.',
      solution: `**Loesning:**

**Forhandlingsprosessen:**
1. LO og NHO utarbeider krav basert paa prisvekst, produktivitetsvekst og bedriftenes loennsomhet
2. Direkte forhandlinger mellom partene (frist: midt i april)
3. Hvis enighet: ny tariffavtale med 4,5 % ramme
4. Hvis uenighet: Riksmekleren trer inn og forsoeker aa finne loesning
5. Hvis mekling mislykkes: streik eller lockout

**Resultatet 4,5 %:**
- Ligger mellom partenes utgangskrav (kompromiss)
- Inkluderer baade sentrale tillegg og antatt loennsglidning

**Konsekvensene for resten:**
- Kommuneansatte (laerere, sykepleiere) forhandler med KS og forholder seg til 4,5 %-rammen
- Statsansatte forhandler med staten innenfor samme ramme
- Private tjenestenaeringer forhandler med tilsvarende ramme som rettesnor
- Alle grupper forventes aa ende rundt 4,5 % over tid

**Kontrovers:** Sykepleiere og laerere hevder ofte at de systematisk sakker akterut fordi frontfagsrammen ikke tar hensyn til behov for aa rekruttere i offentlig sektor.`,
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
        hints: ['Tenk paa hvem som er involvert i loennsforhandlinger og arbeidslivsregulering'],
        solution: 'Trepartssamarbeidet bestaar av staten (som setter lover og rammer), arbeidsgiverorganisasjonene (NHO, KS m.fl. som representerer bedriftene) og arbeidstakerorganisasjonene (LO, Unio, YS, Akademikerne som representerer de ansatte). Samarbeidet mellom disse tre er grunnpilaren i den norske modellen.',
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
        task: 'Hvorfor er det konkurranseutsatt industri som forhandler foerst i frontfagsmodellen?',
        multipleChoiceOptions: [
          'Fordi industrien konkurrerer internasjonalt og loennsveksten maa vaere forenlig med konkurranseevnen',
          'Fordi industriarbeidere tradisjonelt har vaert best organisert',
          'Fordi industrien har flest ansatte i Norge',
          'Fordi staten bestemmer at industrien skal forhandle foerst',
        ],
        hints: ['Tenk paa hva som skjer med norske eksportbedrifter hvis loennsveksten blir for hoey'],
        solution: 'Konkurranseutsatt industri forhandler foerst fordi disse bedriftene maa konkurrere med utenlandske aktorer. Hvis loennsveksten overstiger produktivitetsveksten, blir norske produkter dyrere og bedriftene taper markedsandeler. Ved aa la industrien sette rammen sikrer man at loennsveksten i hele oekonomien er baekraftig og ikke undergraver norsk konkurranseevne.',
      },
    },
    {
      id: 'sf2-4-3-sampress',
      type: 'text',
      content: `## Sammenpresset loennsstruktur

En viktig konsekvens av den norske modellen er en relativt **sammenpresset loennsstruktur** - forskjellene mellom hoeyeste og laveste loenn er mindre enn i mange andre land.

**Mekanismene:**
1. **Solidarisk loennspolitikk:** Fagbevegelsen har historisk prioritert aa lofte bunnloennene
2. **Sentrale forhandlinger:** Felles ramme for alle begrenser spredningen
3. **Allmengjoeoring av tariffavtaler:** Minsteloennsbestemmelser gjelder alle i bransjen, ogsaa uorganiserte
4. **Progressive skatter:** Reduserer inntektsforskjellene ytterligere etter skatt

**Fordeler med sammenpresset loennsstruktur:**
- Lavere ulikhet og stoerre sosial sammenhold
- Bedrifter med lav produktivitet presses ut (rydder ut uloennsom virksomhet)
- Arbeidstakere med lav loenn faar bedre levestandard
- Stoerre tillit i samfunnet

**Ulemper:**
- Vanskelig aa rekruttere til stillinger som krever lang utdanning (laerere, sykepleiere)
- Mindre insentiv til aa ta risiko eller investere i ekstra utdanning
- Kan foere til mangel paa arbeidskraft i visse sektorer
- Hoeytkvalifiserte kan flytte til land med stoerre loennsforskjeller`,
    },
    {
      id: 'sf2-4-3-example-sammenpresset',
      type: 'example',
      title: 'Eksempel: Loennsforskjeller i Norge vs. USA',
      problem: 'I Norge tjener en leder i privat sektor i gjennomsnitt ca. 3 ganger mer enn en rengjoeringshjelp. I USA er dette forholdet ca. 10 ganger. Forklar hvorfor forskjellen er saa stor, og droeft konsekvensene.',
      solution: `**Loesning:**

**Arsaker til forskjellen:**
1. **Norge:** Sentrale loennsforhandlinger og solidarisk loennspolitikk presser bunnloennene opp og toppene ned. Fagforeninger har sterk forhandlingsmakt for lavtloennede.
2. **USA:** Desentralisert loennsfastsettelse, svake fagforeninger (organisasjonsgrad ca. 10 %), ingen lovfestet minsteloenn paa nasjonalt nivaa av betydning, og stoerre aksept for store loennsforskjeller.

**Konsekvenser i Norge:**
- Lavere ulikhet og hoeyere levestandard for de lavest loennede
- Sterkere sosialt sikkerhetsnett gjor modellen baerekraftig
- Kan vaere vanskeligere aa tiltrekke og beholde topp-talent i naeringslivet

**Konsekvenser i USA:**
- Stoerre insentiver for individuell prestasjon og entreprenoerskap
- Hoeyere ulikhet og mer fattigdom
- Sterkere tiltrekkingskraft paa hoeytkvalifisert arbeidskraft globalt

**Konklusjon:** Begge modellene har fordeler og ulemper. Den norske modellens sammenpressede loennsstruktur gir lavere ulikhet, men kan skape utfordringer med rekruttering til visse yrker.`,
    },
    {
      id: 'sf2-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-3-ex-3',
        number: '4.3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med frontfagsmodellen, og gjoer rede for hvorfor den er viktig for norsk oekonomis konkurranseevne.',
        hints: ['Start med hvem som forhandler foerst, og forklar logikken bak'],
        solution: 'Frontfagsmodellen betyr at konkurranseutsatte naeringer (industri) forhandler om loenn foerst, og resultatet setter rammen for resten av arbeidslivet. Den er viktig for konkurranseevnen fordi: 1) Industriens loennsvekst maa vaere forenlig med produktivitetsveksten for aa opprettholde konkurranseevne mot utlandet. 2) Naa resten av oekonomien foelger denne rammen, unngaar man at loennsveksten i skjermede naeringer trekker opp kostnadsnivaaet for hele oekonomien. 3) Modellen sikrer koordinert loennsdannelse som hindrer loenn-pris-spiraler. 4) Uten denne koordineringen kunne enkeltbransjer med sterk forhandlingsmakt presse opp loenningene slik at det skader eksportsektoren.',
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
        task: 'Gjoer rede for hva som menes med sammenpresset loennsstruktur, og droeft fordeler og ulemper med dette for norsk oekonomien.',
        hints: ['Tenk paa konsekvenser for ulikhet, rekruttering og produktivitet'],
        solution: 'Sammenpresset loennsstruktur betyr at forskjellen mellom hoeyeste og laveste loenn er relativt liten. Den skyldes sentrale forhandlinger, solidarisk loennspolitikk og allmengjoeoring av tariffavtaler. Fordeler: 1) Lavere ulikhet gir stoerre sosial sammenhold og tillit. 2) Bedrifter med lav produktivitet presses ut, noe som oeker gjennomsnittlig produktivitet. 3) Hoeyere levestandard for de lavest loennede. Ulemper: 1) Vanskelig aa rekruttere til yrker som krever lang utdanning men har moderate loenninger (laerere, sykepleiere). 2) Mindre insentiver for aa ta ekstra utdanning eller risiko. 3) Hoeytkvalifiserte kan velge aa jobbe i land med stoerre loennsforskjeller.',
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
        task: 'Den norske modellen har gitt gode resultater historisk. Droeft om modellen er robust nok til aa haandtere fremtidens utfordringer som globalisering, gig-oekonomi og synkende organisasjonsgrad.',
        hints: ['Vurder hva som truer modellens grunnpilarer og hva som kan styrke den'],
        solution: 'Trusler mot modellen: 1) Synkende organisasjonsgrad undergraver fagforeningenes forhandlingsmakt og legitimitet. 2) Gig-oekonomien skaper arbeidstakere utenfor det organiserte arbeidslivet (frilansere, plattformarbeidere). 3) Globalisering og arbeidsinnvandring kan presse loenningene i noen bransjer. 4) Individualisering gjor kollektive loesninger mindre attraktive for unge. Modellens styrker: 1) Hoey tillit gjor omstilling lettere. 2) Det sterke sikkerhetsnettet gir trygghet til aa akseptere endring. 3) Trepartssamarbeidet har vist evne til aa tilpasse seg (pensjonsreform, IA-avtalen). 4) Koordinert loennsdannelse er fortsatt viktig for aa unngaa overoppheting. Konklusjon: Modellen kan overleve, men krever tilpasning, blant annet organisering av nye grupper, regulering av plattformoekonomien og opprettholdelse av organisasjonsgraden.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-4-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering - Den norske modellen

- **Den norske modellen** bygger paa trepartssamarbeid mellom stat, arbeidsgivere og arbeidstakere
- **Trepartssamarbeidet** sikrer koordinering, forutsigbarhet og tillit i arbeidslivet
- **Frontfagsmodellen** lar konkurranseutsatt industri sette loennsrammen for hele oekonomien
- **Organisasjonsgraden** i Norge er ca. 50 %, men synkende
- Modellen gir en **sammenpresset loennsstruktur** med smaa loennsforskjeller
- **Resultater:** Hoey sysselsetting, lav ledighet, hoey produktivitet og stor omstillingsevne
- **Utfordringer:** Synkende organisasjonsgrad, gig-oekonomi og rekrutteringsproblemer i offentlig sektor`,
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
        task: 'Gjoer rede for hovedtrekkene ved den norske modellen. Forklar hvordan trepartssamarbeidet og frontfagsmodellen bidrar til koordinert loennsdannelse, og droeft om modellen er baerekraftig i fremtiden.',
        hints: ['Dekk alle tre pilarene, forklar frontfagsmekanismen, og vurder trusler og styrker'],
        solution: 'Den norske modellen bygger paa tre pilarer: 1) Organisert arbeidsliv med sterke parter paa begge sider (LO/NHO m.fl.). 2) Koordinert loennsdannelse gjennom frontfagsmodellen - industrien forhandler foerst og setter rammen for aa sikre konkurranseevne. 3) Omfattende velferdsstat som gir trygghet ved omstilling. Trepartssamarbeidet fungerer ved at staten setter rammebetingelser, arbeidsgivere og arbeidstakere forhandler innenfor disse rammene, og Riksmekleren griper inn ved uenighet. Frontfagsmodellen sikrer at loennsveksten er forenlig med produktivitetsveksten i konkurranseutsatte naeringer, noe som forhindrer tap av internasjonal konkurranseevne. Baerekraft: Modellen trues av synkende organisasjonsgrad, fremvekst av gig-oekonomi og globaliseringen. Men den har ogsaa store styrker: hoey tillit, omstillingsevne og evne til reformer. Modellens fremtid avhenger av om nye grupper organiseres og om institusjonene tilpasses nye arbeidsformer.',
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

Arbeidsmarkedspolitikk er de tiltakene staten gjennomfoerer for aa pavirke arbeidsmarkedet - foerst og fremst for aa bekjempe arbeidsledighet og sikre hoey sysselsetting. Vi skiller mellom aktiv og passiv arbeidsmarkedspolitikk.

**Maalene for arbeidsmarkedspolitikken:**
- Hoey sysselsetting og lav ledighet
- God matching mellom arbeidssokere og ledige stillinger
- Inkludering av grupper som staar utenfor arbeidslivet
- Kompetanseutvikling som svarer til arbeidsmarkedets behov
- Trygghet for arbeidstakere ved omstilling

Norge bruker betydelige ressurser paa arbeidsmarkedspolitikk, og NAV (Arbeids- og velferdsetaten) er den sentrale aktoren i gjennomfoeringen.`,
    },
    {
      id: 'sf2-4-4-def-aktiv-passiv',
      type: 'definition',
      title: 'Aktiv og passiv arbeidsmarkedspolitikk',
      content: `**Passiv arbeidsmarkedspolitikk** omfatter inntektssikring til de som er uten arbeid:
- **Dagpenger:** Inntektssikring for arbeidsledige (ca. 62,4 % av tidligere inntekt i inntil 2 aar)
- **Arbeidsavklaringspenger (AAP):** For personer med nedsatt arbeidsevne under avklaring
- **Ufoeretrygd:** Varig ytelse for de som ikke kan jobbe pga. helse
- **Sykepenger:** Full loenn under sykdom i inntil 1 aar

**Aktiv arbeidsmarkedspolitikk** omfatter tiltak som skal hjelpe folk tilbake i arbeid:
- **Arbeidsmarkedstiltak:** Kurs, opplaering, praksisplasser og loennstilskudd
- **Arbeidsfomidling:** NAVs kobling av arbeidssokere og arbeidsgivere
- **Kvalifiseringsprogrammer:** Opplaering og aktivitet for de lengst fra arbeidsmarkedet
- **Karriereveiledning:** Raadgivning om utdanning og yrkesvalg
- **Loeretilskudd:** Tilskudd til arbeidsgivere som ansetter fra utsatte grupper
- **Varig tilrettelagt arbeid (VTA):** Arbeidsplasser for de som ikke kan jobbe i det ordinaere arbeidsmarkedet

**Hovedforskjellen:** Passiv politikk gir penger til ledige, aktiv politikk gir dem verktoy til aa komme tilbake i jobb.`,
    },
    {
      id: 'sf2-4-4-example-nav',
      type: 'example',
      title: 'Eksempel: NAV som arbeidsmarkedsverktoy',
      problem: 'Erik (45 aar) mister jobben i en nedleggelse av en treforedlingsfabrikk. Han har jobbet paa fabrikken i 20 aar og har fagbrev som prosessoperatoer. Beskriv hvordan NAV kan hjelpe Erik tilbake i arbeid.',
      solution: `**Loesning:**

**Trinn 1: Inntektssikring (passiv politikk)**
Erik registrerer seg som arbeidsledig hos NAV og faar dagpenger (ca. 62,4 % av tidligere inntekt, maks ca. 6G). Dette gir oekonomisk trygghet mens han soeker ny jobb.

**Trinn 2: Kartlegging**
NAV-veilederen kartlegger Eriks kompetanse, erfaring og oensker. Hans prosessoperatoerutdanning kan vaere relevant i andre industrier.

**Trinn 3: Aktive tiltak**
- **Jobbsoekekurs:** Hjelp til CV, soeknader og intervjutrening
- **Omskolering:** Kurs i ny teknologi eller relaterte fagfelt
- **Arbeidspraksis:** Utplassering i en bedrift for aa faa erfaring i ny bransje
- **Loeretilskudd:** NAV kan gi tilskudd til en arbeidsgiver som ansetter Erik i en opplaeringsperiode

**Trinn 4: Oppfoelging**
NAV foelger opp med regelmessige samtaler og justerer tiltakene etter behov.

**Resultat:** Med riktig kombinasjon av inntektssikring og aktive tiltak kan Erik finne ny jobb innen et aar - for eksempel i prosessindustri, energisektoren eller teknisk vedlikehold.`,
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
          'Passiv politikk gir inntektssikring, aktiv politikk gir tiltak for aa komme tilbake i jobb',
          'Aktiv politikk koster mer enn passiv politikk',
          'Passiv politikk brukes i nedgangstider, aktiv politikk i oppgangstider',
          'Det er ingen vesentlig forskjell mellom dem',
        ],
        hints: ['Tenk paa forskjellen mellom aa gi folk penger og aa gi dem verktoy'],
        solution: 'Passiv arbeidsmarkedspolitikk handler om inntektssikring (dagpenger, sykepenger, ufoeretrygd) - det gir folk penger mens de er uten arbeid. Aktiv arbeidsmarkedspolitikk handler om tiltak som hjelper folk tilbake i jobb (kurs, omskolering, arbeidspraksis, loennstilskudd). Begge deler er noedvendige: passiv politikk gir trygghet, aktiv politikk gir muligheter.',
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
        task: 'Hvilket av foelgende er et eksempel paa aktiv arbeidsmarkedspolitikk?',
        multipleChoiceOptions: [
          'NAV tilbyr omskolering og arbeidspraksis til en arbeidsledig person',
          'En arbeidsledig person mottar dagpenger',
          'En syk person mottar sykepenger fra NAV',
          'En pensjonist mottar alderspensjon',
        ],
        hints: ['Aktiv politikk handler om tiltak som hjelper folk tilbake i arbeid, ikke bare inntektssikring'],
        solution: 'Omskolering og arbeidspraksis er aktive arbeidsmarkedstiltak fordi de gir arbeidssokeren ny kompetanse og erfaring som oeker sjansen for aa faa jobb. Dagpenger, sykepenger og alderspensjon er passive tiltak som gir inntektssikring uten aa direkte oeke arbeidsevnen.',
      },
    },
    {
      id: 'sf2-4-4-kompetanse',
      type: 'text',
      content: `## Kompetansepolitikk

Kompetansepolitikk er den delen av arbeidsmarkedspolitikken som handler om utdanning, opplaering og livslang laering. I en oekonomi som stadig endrer seg, er kompetanseutvikling avgjoerende for aa holde folk i arbeid.

**Kompetanseutfordringer i Norge:**
- Rask teknologisk endring gjor at kompetanse foreldres raskere enn for
- Mange voksne mangler grunnleggende ferdigheter (lesing, regning, digitale ferdigheter)
- Overgangen til groenn oekonomi krever ny kompetanse
- Eldreboolgen oeker behovet for helsepersonell
- Innvandrere trenger norskopplaering og godkjenning av utenlandsk utdanning

**Viktige kompetansepolitiske tiltak:**
1. **Kompetansepluss:** Tilskudd til opplaering i grunnleggende ferdigheter i arbeidslivet
2. **Fagskole og yrkesfag:** Styrking av praktisk og yrketrettet utdanning
3. **Etter- og videreutdanning:** Tilrettelegging for at voksne kan oppdatere kompetansen sin
4. **Integreringsprogrammet:** Norskopplaering og kvalifisering for innvandrere
5. **Bransjeprogram:** Skreddersydde opplaeringsprogrammer for bransjer i omstilling

**Trepartssamarbeid om kompetanse:**
Partene i arbeidslivet samarbeider om kompetansepolitikk gjennom Kompetansepolitisk raad og bransjeprogram. Staten finansierer, arbeidsgiverne gir tid og tilgang, og fagforeningene sikrer at behovene til de ansatte ivaretas.`,
    },
    {
      id: 'sf2-4-4-def-arbeidslinje',
      type: 'definition',
      title: 'Arbeidslinjen',
      content: `**Arbeidslinjen** er det overordnede prinsippet i norsk arbeids- og velferdspolitikk: det skal alltid lonne seg aa jobbe framfor aa motta trygd.

**Hovedprinsipper:**
- Arbeid er foerstevalget for alle som kan jobbe
- Velferdsytelser skal utformes slik at de stimulerer til arbeid, ikke passivitet
- Aktivitetskrav: Mottakere av ytelser skal vaere aktive (soeke jobb, ta kurs, delta i tiltak)
- Graderte ytelser: Mulighet for aa kombinere arbeid og trygd

**Virkemidler for aa stoette arbeidslinjen:**
- **Aktivitetsplikt:** Sosialhjelpmottakere under 30 aar maa delta i aktivitet
- **Gradert sykemelding:** Delvis arbeid under sykdom naa mulig
- **Loeretilskudd:** Gjor det billigere for arbeidsgivere aa ansette fra utsatte grupper
- **Kvalifiseringsprogrammet:** Intensiv oppfoelging for de lengst fra arbeidsmarkedet

**Kritikk av arbeidslinjen:**
- Kan oppleves som press paa syke og ufoere
- Aktivitetskrav kan vaere urimelige for de med alvorlige helseproblemer
- Noen mener den er for lite fleksibel og tar ikke hensyn til individuelle behov
- Risiko for at folk ender i midlertidige, usikre jobber i stedet for varig arbeid`,
    },
    {
      id: 'sf2-4-4-example-kompetanse',
      type: 'example',
      title: 'Eksempel: Kompetansepolitikk i praksis',
      problem: 'En industribedrift skal automatisere store deler av produksjonen. 50 ansatte risikerer aa miste jobben med mindre de faar ny kompetanse. Beskriv hvordan arbeidsmarkedspolitikken kan bidra til omstillingen.',
      solution: `**Loesning:**

**Foer nedbemanningen (forebyggende tiltak):**
1. **Bransjeprogram:** Bedriften kan soeke om stotte til opplaering gjennom bransjeprogrammer for industrien
2. **Kompetansekartlegging:** Identifisere hva de ansatte kan fra foer og hva de trenger aa laere
3. **Internt omskoleringsloep:** Bedriften kan trene ansatte til nye roller (programmering, vedlikehold av roboter, kvalitetskontroll)

**Samarbeid med NAV:**
4. **Bedriftsintern opplaering (BIO):** NAV kan gi tilskudd til opplaering av ansatte som ellers ville blitt overflodige
5. **Karriereveiledning:** NAV kan hjelpe de ansatte med aa vurdere muligheter

**Hvis noen likevel maa gaa:**
6. **Dagpenger:** Inntektssikring under jobbsoek
7. **Arbeidsmarkedskurs:** Kurs i programmering, automasjon eller andre relevante fag
8. **Praksisplasser:** Utplassering i bedrifter som trenger ny kompetanse

**Resultat:** Med tidlig innsats og samarbeid mellom bedrift, fagforening og NAV kan mange av de 50 ansatte faa ny kompetanse og beholde jobben eller finne nye jobber raskt.`,
    },
    {
      id: 'sf2-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-4-ex-3',
        number: '4.4.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med arbeidslinjen i norsk velferdspolitikk, og droeft fordeler og ulemper med dette prinsippet.',
        hints: ['Arbeidslinjen handler om at det skal lonne seg aa jobbe - tenk paa baade motivasjon og mulige uheldige sider'],
        solution: 'Arbeidslinjen betyr at arbeid alltid skal vaere foerstevalget og at det skal lonne seg aa jobbe framfor aa motta trygd. Fordeler: 1) Oeker yrkesdeltakelsen og reduserer avhengighet av offentlige ytelser. 2) Arbeid gir meining, sosial tilhoerighet og bedre helse for den enkelte. 3) Hoeyere sysselsetting gir hoeyere skatteinntekter og lavere trygdeutgifter. Ulemper: 1) Kan oppleves som press paa syke og ufoere som ikke kan jobbe. 2) Aktivitetskrav kan vaere urimelige for de med alvorlige helseproblemer. 3) Kan tvinge folk inn i lavtloennede, usikre jobber. 4) Tar ikke alltid hensyn til at noen trenger lengre tid paa aa bli friske.',
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
        task: 'Gjoer rede for tre ulike arbeidsmarkedstiltak NAV kan tilby, og forklar hvilken type arbeidsledighet hvert tiltak er best egnet til aa bekjempe.',
        hints: ['Koble hvert tiltak til friksjonsledighet, strukturell ledighet eller konjunkturell ledighet'],
        solution: '1) Jobbsoekekurs og arbeidsfomidling: Best egnet mot friksjonsledighet - hjelper arbeidssokere med aa finne ledige stillinger raskere og presentere seg bedre for arbeidsgivere. 2) Omskolering og etterutdanning: Best egnet mot strukturell ledighet - gir ny kompetanse til arbeidstakere som har ferdigheter markedet ikke lenger etterspoer. 3) Loennstilskudd: Kan brukes mot baade strukturell og konjunkturell ledighet - gjor det billigere for arbeidsgivere aa ansette, noe som oeker etterspoerselen etter arbeidskraft. Generelt gjelder det at arbeidsmarkedstiltak er mest effektive mot friksjons- og strukturell ledighet, mens konjunkturell ledighet primaert bekjempes med makrooekonomisk politikk (rente, finanspolitikk).',
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
        task: 'Droeft om generoese dagpengeordninger oeker eller reduserer arbeidsledigheten. Trekk inn argumenter fra baade tilhengere og motstandere av hoey inntektssikring.',
        hints: ['Tenk paa balansen mellom trygghet (som gir bedre matching) og moralsk hasard (som kan redusere soekeinnsats)'],
        solution: 'Argumenter for at generoese dagpenger reduserer ledigheten: 1) Gir arbeidssokere tid til aa finne en jobb som matcher kompetansen, noe som gir bedre og mer varige ansettelser. 2) Gir trygghet som gjor folk villige til aa ta risiko og skifte jobb, noe som oeker mobiliteten. 3) Fungerer som automatisk stabilisator i nedgangstider ved aa opprettholde kjoepekraften. Argumenter for at generoese dagpenger oeker ledigheten: 1) Moralsk hasard - hoey kompensasjon reduserer insentivet til aa soeke jobb aktivt. 2) Reservasjonsloennen oeker - ledige avslaar jobbtilbud de ellers ville akseptert. 3) Lengre ledighetsperioder svekker kompetanse og tilknytning til arbeidslivet. Forskningen viser at moderat generoese ordninger med aktivitetskrav gir best resultat - trygghet kombinert med insentiver til aa soeke aktivt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-4-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering - Arbeidsmarkedspolitikk

- **Passiv arbeidsmarkedspolitikk** gir inntektssikring (dagpenger, sykepenger, ufoeretrygd)
- **Aktiv arbeidsmarkedspolitikk** gir tiltak for aa komme i jobb (kurs, omskolering, praksisplasser)
- **NAV** er den sentrale aktoren som gjennomfoerer arbeidsmarkedspolitikken
- **Arbeidslinjen** er prinsippet om at det alltid skal lonne seg aa jobbe
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
        task: 'Gjoer rede for forskjellen mellom aktiv og passiv arbeidsmarkedspolitikk. Forklar NAVs rolle i gjennomfoeringen, og droeft hvordan arbeidsmarkedspolitikken kan tilpasses for aa moete utfordringene med groenn omstilling og teknologisk endring.',
        hints: ['Dekk baade tradisjonell arbeidsmarkedspolitikk og nye behov knyttet til omstilling og kompetanse'],
        solution: 'Passiv politikk (dagpenger, trygd) gir oekonomisk trygghet, mens aktiv politikk (kurs, omskolering, praksis) hjelper folk tilbake i arbeid. NAV administrerer begge deler: behandler soknader om ytelser, tilbyr arbeidsmarkedstiltak, kobler arbeidssokere med arbeidsgivere og gir karriereveiledning. For groenn omstilling og teknologisk endring maa politikken tilpasses: 1) Stoerre satsing paa omskolering til groenne naeringer (havvind, hydrogen, batteriteknologi). 2) Kompetanseprogrammer i digitalisering og AI for arbeidstakere i utsatte bransjer. 3) Forebyggende tiltak foer nedbemanninger (bedriftsintern opplaering). 4) Styrket samarbeid mellom naeringslivet og utdanningsinstitusjonene for aa sikre at utdanningen matcher fremtidens behov. 5) Livslang laering maa bli normen - alle maa oppdatere kompetansen gjennom hele karrieren.',
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
  description: 'Automatisering, kunstig intelligens, groenn omstilling, gig-oekonomi og nye arbeidsformer.',
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

Arbeidslivet er i rask endring. Teknologisk utvikling, klimaomstilling og nye arbeidsformer utfordrer baade arbeidstakere, arbeidsgivere og det politiske systemet. For aa forstaa fremtidens arbeidsmarked maa vi analysere de viktigste drivkreftene.

**Fire store endringstrender:**
1. **Automatisering og kunstig intelligens** - maskiner og AI overtar stadig flere oppgaver
2. **Groenn omstilling** - overgangen til en lavutslippsooekonomi endrer naeringstrukturen
3. **Gig-oekonomien** - nye arbeidsformer utfordrer det tradisjonelle arbeidsforholdet
4. **Demografiske endringer** - eldrebolgen og innvandring endrer sammensetningen av arbeidsstyrken

Disse trendene virker sammen og forsterker hverandre. La oss se narmere paa hver av dem.`,
    },
    {
      id: 'sf2-4-5-def-automatisering',
      type: 'definition',
      title: 'Automatisering og kunstig intelligens',
      content: `**Automatisering** betyr at maskiner, roboter eller dataprogrammer overtar oppgaver som tidligere ble utfoert av mennesker.

**Kunstig intelligens (AI)** er dataprogrammer som kan utfoere oppgaver som normalt krever menneskelig intelligens: gjenkjenne monstre, ta beslutninger, oversette spraak og generere tekst.

**Hvilke jobber er mest utsatt?**
- Rutinepreget arbeid (fabrikk, lager, kasse)
- Databehandling og enkel analyse
- Deler av kundeservice og administrasjon
- Enkel tekstproduksjon og oversettelse

**Hvilke jobber er minst utsatt?**
- Kreativt og innovativt arbeid
- Komplekse sosiale interaksjoner (terapi, ledelse, undervisning)
- Haandverk som krever fysisk tilpasningsevne
- Strategisk tenkning og kompleks problemloesning

**Teknologisk arbeidsledighet** oppstaar naa automatisering fjerner jobber raskere enn nye jobber skapes. Historisk har ny teknologi skapt flere jobber enn den har fjernet, men overgansperiodene kan vaere smertefulle.`,
    },
    {
      id: 'sf2-4-5-example-ai',
      type: 'example',
      title: 'Eksempel: AI i arbeidslivet',
      problem: 'Et stort regnskapsfirma innfoerer AI-verktoy som kan utfoere 80 % av den rutinemessige regnskapsfooeringen automatisk. Analyser konsekvensene for de ansatte og diskuter hvordan firmaet og myndighetene boer respondere.',
      solution: `**Loesning:**

**Konsekvenser for de ansatte:**
1. **Direkte truet:** Regnskapsfoerere som primaert gjor rutinearbeid (bokfoering, avstemming, mva-rapportering) risikerer aa bli overflodige
2. **Nye muligheter:** De som kan kombinere regnskapskompetanse med AI-verktoy blir mer verdifulle
3. **Endrede roller:** Fra manuelt arbeid til raadgivning, analyse og kvalitetskontroll

**Firmaets respons:**
- Tilby omskolering: Laere ansatte aa bruke AI-vertoyene og fokusere paa raadgivning
- Gradvis innfoering: Gi ansatte tid til aa tilpasse seg
- Nye tjenester: Bruke frigjort kapasitet til aa tilby mer avanserte tjenester

**Myndighetenes respons:**
- Styrke kompetansepolitikken: Tilby kurs i digital kompetanse og AI
- Tilpasse utdanningene: Oppdatere regnskapsutdanningen til aa inkludere AI
- Inntektssikring: Dagpenger og omskolering for de som mister jobben
- Regulering: Sikre at AI brukes forsvarlig og at arbeidstakerrettigheter ivaretas

**Historisk perspektiv:** Tilsvarende omstillinger har skjedd foer - f.eks. da datamaskiner erstattet manuelle regneoperasjoner. Resultatet var flere, mer interessante jobber, men overgangen krevde omstilling.`,
    },
    {
      id: 'sf2-4-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-5-ex-1',
        number: '4.5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilke typer jobber er mest utsatt for aa bli erstattet av automatisering og kunstig intelligens?',
        multipleChoiceOptions: [
          'Rutinepreget arbeid og enkel databehandling',
          'Kreativt arbeid og ledelse',
          'Haandverk som krever tilpasningsevne',
          'Kompleks raadgivning og terapi',
        ],
        hints: ['Tenk paa hvilke oppgaver en maskin eller et dataprogram kan gjoere bedre enn et menneske'],
        solution: 'Rutinepreget arbeid og enkel databehandling er mest utsatt fordi disse oppgavene foelger faste monstre som maskiner og AI kan laere aa utfoere effektivt. Jobber som krever kreativitet, kompleks sosial interaksjon eller fysisk tilpasningsevne er vanskeligere aa automatisere.',
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
          'Ny teknologi har historisk skapt flere jobber enn den har fjernet, men overgangene kan vaere smertefulle',
          'Teknologisk utvikling har alltid oekt arbeidsledigheten permanent',
          'Teknologi har ingen effekt paa sysselsettingen',
          'Kun hoeyutdannede tjener paa teknologisk utvikling',
        ],
        hints: ['Tenk paa tidligere teknologiske revolusjoner: industrialiseringen, datamaskinen, internett'],
        solution: 'Historisk har teknologiske revolusjoner skapt flere jobber enn de har fjernet - men overgansperiodene har vaert smertefulle for de som ble rammet. Industrialiseringen fjernet haandverksyrker men skapte fabrikjobber. Datamaskinen fjernet manuelle kontorjobber men skapte IT-sektoren. Nokkelen er at nye teknologier skaper helt nye bransjer og yrker som ikke fantes foer.',
      },
    },
    {
      id: 'sf2-4-5-groenn',
      type: 'text',
      content: `## Groenn omstilling og arbeidsmarkedet

Den groenne omstillingen - overgangen fra fossil til fornybar energi og baerekraftig produksjon - vil forandre arbeidsmarkedet fundamentalt.

**Jobber som forsvinner:**
- Oljeutvinning og -raffinering (gradvis nedbygging)
- Kulldrift og fossil energiproduksjon
- Noe fossildrevet transport

**Jobber som vokser:**
- Fornybar energi (havvind, sol, hydrogen)
- Energieffektivisering og groenn bygg
- Sirkulaeroekonomi (gjenbruk, reparasjon, resirkulering)
- Batteriteknologi og elbilproduksjon
- Klimaraadgivning og baerekraftsrapportering
- Karbonfangst og -lagring (CCS)

**Kompetansegapet:**
Mange av jobbene i den groenne oekonomien krever annen kompetanse enn de fossile jobbene. En oljeingenioer har mye overfoerbar kompetanse til havvind, men en oljearbeider paa plattform trenger kanskje betydelig omskolering.

**Rettferdig omstilling (just transition):**
Begrepet «rettferdig omstilling» betyr at kostnadene ved den groenne omstillingen skal fordeles rettferdig. De som mister jobbene sine i fossile naeringer, skal faa hjelp til aa finne nye jobber, ikke baere byrdene alene. Dette krever aktiv arbeidsmarkedspolitikk og kompetansetiltak.`,
    },
    {
      id: 'sf2-4-5-def-gig',
      type: 'definition',
      title: 'Gig-oekonomien',
      content: `**Gig-oekonomien** (plattformoekonomien) er en arbeidsform der folk utfoerer enkeltstaaende oppdrag (gigs) formidlet gjennom digitale plattformer, i stedet for aa vaere fast ansatt.

**Eksempler:**
- **Uber og Bolt:** Transporttjenester
- **Foodora og Wolt:** Matleveranser
- **Upwork og Fiverr:** Frilanstjenester (design, programmering, skriving)
- **Airbnb:** Utleie av bolig

**Kjennetegn:**
- Oppdragstakerne er ofte klassifisert som selvstendige, ikke ansatte
- Fleksibel arbeidstid og ingen fast arbeidssted
- Betaling per oppdrag, ikke fast loenn
- Plattformen kobler oppdragsgiver og oppdragstaker

**Utfordringer for arbeidsretten:**
- **Arbeidstakerrettigheter:** Gig-arbeidere har ofte ikke krav paa sykepenger, feriepenger, pensjon eller stillingsvern
- **Sosial dumping:** Effektiv timeloenn kan vaere langt under tariff
- **Organisering:** Vanskelig aa organisere seg i fagforeninger
- **Klassifisering:** Er gig-arbeidere ansatte eller selvstendige? Rettssaker om dette paagaar i mange land

**Regulering i Norge:**
Regjeringen har tydeliggjort at mange gig-arbeidere reelt sett er arbeidstakere og skal ha de rettighetene dette innebarer. Arbeidsmiljoeloven er skjerpet for aa hindre omgaaelse av arbeidsgiveransvaret.`,
    },
    {
      id: 'sf2-4-5-example-gig',
      type: 'example',
      title: 'Eksempel: Gig-oekonomi og den norske modellen',
      problem: 'En matleveringsplattform opererer i Norge med 500 sykkelbuder som er klassifisert som selvstendige oppdragstakere. De har ingen fast loenn, ingen sykepenger og ingen feriepenger. Analyser situasjonen i lys av den norske modellen og arbeidsretten.',
      solution: `**Loesning:**

**Problemet:**
- Budene utfoerer arbeid som styres av plattformen (ruter, tidsfrister, priser)
- De baerer uniformer og bruker plattformens merke
- De har begrenset mulighet til aa avslaa oppdrag uten konsekvenser
- Likevel faar de ingen arbeidsrettigheter

**Vurdering etter norsk arbeidsrett:**
Ifoegle arbeidsmiljoeloven er det realiteten i forholdet, ikke kontrakten, som avgjoer om noen er arbeidstaker. Momenter som taler for at budene er arbeidstakere:
1. Plattformen bestemmer pris og betingelser
2. Budene bruker plattformens utstyr og merkevare
3. Det er et underordningsforhold
4. Budene kan ikke skaffe seg inntekt fra flere plattformer samtidig

**Konsekvenser hvis de er arbeidstakere:**
- Rett til minsteloenn (allmengjort tariffavtale)
- Sykepenger, feriepenger og pensjon
- Stillingsvern og oppsigelsesvern
- Rett til aa organisere seg

**Utfordring for den norske modellen:**
Gig-oekonomien utfordrer grunnlaget for modellen fordi den skaper en gruppe arbeidstakere utenfor det organiserte arbeidslivet, uten de rettighetene og den tryggheten som er baerebjelken i den norske modellen.`,
    },
    {
      id: 'sf2-4-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'sf2-4-5-ex-3',
        number: '4.5.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med gig-oekonomien, og droeft hvordan denne arbeidsformen utfordrer den norske arbeidslivsmodellen.',
        hints: ['Tenk paa arbeidstakerrettigheter, fagorganisering og trygghetsordninger'],
        solution: 'Gig-oekonomien er en arbeidsform der folk utfoerer enkeltstaaende oppdrag formidlet gjennom digitale plattformer (Uber, Foodora, Upwork). Utfordringene for den norske modellen: 1) Gig-arbeidere klassifiseres ofte som selvstendige og faar ikke arbeidstakerrettigheter (sykepenger, feriepenger, pensjon, stillingsvern). 2) Det er vanskelig aa organisere seg i fagforeninger, noe som undergraver trepartssamarbeidet. 3) Loenningene kan vaere langt under tariff, noe som skaper sosial dumping. 4) Arbeidsgivers ansvar pulveriseres naa plattformen ikke anser seg som arbeidsgiver. Den norske modellen er bygget paa at arbeidstakere er fast ansatte med rettigheter - gig-oekonomien utfordrer denne grunntanken.',
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
        task: 'Gjoer rede for hva som menes med rettferdig omstilling (just transition) i forbindelse med den groenne omstillingen. Gi eksempler paa tiltak som kan sikre rettferdig omstilling i Norge.',
        hints: ['Tenk paa hvem som baerer kostnadene ved omstillingen og hvordan staten kan hjelpe'],
        solution: 'Rettferdig omstilling betyr at kostnadene ved overgangen fra fossil til groenn oekonomi fordeles rettferdig, slik at de som mister jobben i fossile naeringer faar hjelp til aa finne nye jobber. Tiltak for Norge: 1) Omskolering av oljearbeidere til havvind, hydrogen og karbonfangst - mye kompetanse er overfoerbar. 2) Regional naeringsutvikling i omraader som er avhengige av petroleum (Stavanger, Hammerfest). 3) Stoette til bedrifter som omstiller fra fossil til groenn virksomhet. 4) Dagpenger og inntektssikring under omstillingsperioden. 5) Investeringer i forskning og utvikling av groenn teknologi for aa skape nye arbeidsplasser. 6) Trepartssamarbeid om omstillingsavtaler mellom bedrift, fagforening og myndigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-4-5-fremtid',
      type: 'text',
      content: `## Nye kompetansebehov og livslang laering

Fremtidens arbeidsliv stiller nye krav til kompetanse. Evnen til aa laere hele livet - ikke bare gjennom formell utdanning - blir stadig viktigere.

**Kompetanser som blir viktigere:**
- **Digital kompetanse:** Forstaae og bruke digitale verktoy og AI
- **Laeringsevne:** Evnen til aa tilegne seg ny kunnskap raskt
- **Tverrfaglighet:** Kombinere innsikt fra ulike fagfelt
- **Kreativitet og innovasjon:** Skape nye loesninger og ideer
- **Samarbeidsevne:** Jobbe effektivt i team, ofte paa tvers av land og kulturer
- **Kritisk tenkning:** Vurdere informasjon, analysere data og ta gode beslutninger

**Fra utdanning til livslang laering:**
Tradisjonelt tok man utdanning foerst og jobbet deretter. I fremtiden vil utdanning og arbeid vaere mer integrert:
- Mikrokurs og sertifiseringer underveis i karrieren
- Bransjeprogram og bedriftsintern opplaering
- Nettbasert laering og fleksible studiemoedeller
- Etter- og videreutdanning ved universiteter og fagskoler

**Myndighetenes rolle:**
- Finansiere livslang laering gjennom Laanekassen og kompetansefond
- Sikre at utdanningssystemet er fleksibelt nok for voksne
- Samarbeide med naeringlivet om aa identifisere fremtidige kompetansebehov
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
        task: 'Droeft hvordan automatisering og kunstig intelligens kan pavirke loennsforskjeller i Norge. Kan det tenkes at AI forsterker ulikheten mellom hoeytkvalifiserte og lavtkvalifiserte arbeidstakere?',
        hints: ['Tenk paa polarisering av arbeidsmarkedet: hoeytkvalifiserte vinner, mellomsjiktet taper, lavtkvalifiserte tjenestejobber bestaar'],
        solution: 'Automatisering og AI kan forsterke loennsulikheten gjennom arbeidsmarkedspolarisering. Hoeytkvalifiserte arbeidstakere (som bruker AI som verktoy) oeker produktiviteten og faar hoeyere loenn. Mellomsjiktet (kontor, administrasjon, enkel analyse) er mest utsatt for automatisering og kan forsvinne. Lavtkvalifiserte tjenestejobber (omsorg, renhold, manuelt arbeid) er vanskeligere aa automatisere og bestaar, men loennen forblir lav. Resultatet kan bli en todelt arbeidsmarked: hoeyloennsjobber og lavloennsjobber, med faa jobber i mellom. For Norge kan dette utfordre den sammenpressede loennsstrukturen og den norske modellen. Mulige mottiltak: Satsing paa utdanning og omskolering, styrking av fagorganisering i nye sektorer, og skattepolitikk som motvirker oekt ulikhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'sf2-4-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `## Oppsummering - Fremtidens arbeidsliv

- **Automatisering og AI** erstatter rutinearbeid, men skaper ogsaa nye jobber og yrker
- **Groenn omstilling** fjerner fossile jobber og skaper groenne jobber - **rettferdig omstilling** sikrer at kostnadene fordeles rettferdig
- **Gig-oekonomien** utfordrer den norske modellen ved aa skape arbeidstakere uten rettigheter
- **Arbeidsmarkedspolarisering** kan oeke ulikheten: hoey- og lavloennsjobber vokser, mellomsjiktet krymper
- **Livslang laering** blir avgjoerende - evnen til aa laere nye ferdigheter gjennom hele karrieren
- Nye kompetansebehov: digital kompetanse, kreativitet, kritisk tenkning og samarbeidsevne
- Den norske modellen maa tilpasses for aa haandtere disse endringene`,
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
        task: 'Velg to av de fire store endringstreendene (automatisering/AI, groenn omstilling, gig-oekonomien, demografiske endringer) og analyser hvordan de paavirker det norske arbeidsmarkedet. Droeft hvilke tiltak myndighetene, arbeidsgiverne og fagforeningene boer iverksette for aa sikre hoey sysselsetting og et trygt arbeidsliv i fremtiden.',
        hints: ['Vis sammenhengene mellom trendene og koble tiltakene til den norske modellens rammeverk'],
        solution: 'Eksempel med automatisering/AI og groenn omstilling: Automatisering truer rutinepreget arbeid i industri og tjenester, mens groenn omstilling krever nedbygging av petroleumssektoren og oppbygging av groenne naeringer. Sammen skaper de et massivt behov for omskolering og ny kompetanse. Myndighetene boer: 1) Investere i utdanning og livslang laering, saerlig digital kompetanse og groenne fag. 2) Styrke NAVs kapasitet til omskolering og arbeidsmarkedstiltak. 3) Sikre rettferdig omstilling med regional stoette til petroleumsavhengige omraader. Arbeidsgiverne boer: 1) Investere i ansattes kompetanseutvikling. 2) Samarbeide med utdanningsinstitusjonene om relevante utdanninger. 3) Tilpasse organisasjonen til nye teknologier gradvis. Fagforeningene boer: 1) Organisere nye grupper (gig-arbeidere, frilansere). 2) Forhandle om rett til kompetanseutvikling i tariffavtalene. 3) Sikre at omstillingen skjer paa en maate som ivaretar arbeidstakernes rettigheter. Samlet maa trepartssamarbeidet tilpasses for aa moete fremtidens utfordringer.',
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
