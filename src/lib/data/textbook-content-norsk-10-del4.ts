/**
 * Tekstbok innhold for Norsk 10. klasse - Del 4 (Kapittel 6.1-6.6)
 *
 * Følger LK20 læreplan for norsk ungdomstrinn.
 * Del 4 dekker retorikk og muntlig kommunikasjon:
 * - Retoriske grunnbegreper (etos, patos, logos)
 * - Argumentasjon og debatt
 * - Presentasjonsteknikk
 * - Samtale og lytting
 * - Historiske taler
 * - Retorikk i sosiale medier
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 6.1: Retorikk — Kunsten å overbevise
// LK20: Bruke retoriske begreper til å analysere og vurdere argumentasjon
//        i muntlige og skriftlige tekster
// ============================================================================

export const CHAPTER_NORSK_10_6_1: TextbookChapter = {
  id: 'norsk-10-6-1',
  courseId: 'norsk-10',
  chapterNumber: '6.1',
  title: 'Retorikk — Kunsten å overbevise',
  description: 'Lær om retorikkens grunnlag, de tre appellformene etos, patos og logos, de retoriske bevismidlene og hvordan du kan analysere overbevisende kommunikasjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke retoriske begreper til å analysere og vurdere argumentasjon i muntlige og skriftlige tekster',
    'gjenkjenne og beskrive retoriske virkemidler i ulike teksttyper',
    'forstå retorikkens historiske bakgrunn og dens relevans i dag',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-6-1-intro',
      type: 'text',
      content: `## Retorikk: Kunsten som styrer verden

Forestill deg at du står i en skoledebatt. Du har forberedt deg grundig. Du vet at argumentene dine er sterke — du har fakta, tall og eksempler. Likevel er det motstanderen som vinner debatten. Hvorfor? Fordi motstanderen fikk publikum til å *føle* noe. Hun brukte stemmen, kroppsspråket og ordvalget på en måte som traff tilhørerne midt i hjertet. Det er retorikk i praksis.

**Retorikk** er kunsten å overbevise. Det er en ferdighet som har blitt studert, praktisert og foredlet i over 2500 år — helt siden de gamle grekerne oppdaget at den som mestrer ordene, mestrer verden. Aristoteles, Platon, Cicero — noen av historiens skarpeste hjerner viet livene sine til å forstå hvordan kommunikasjon virker.

Men retorikk er ikke bare noe som hører hjemme i antikken. Du møter retorikk overalt, hver eneste dag: i reklame, i politiske taler, i YouTube-videoer, i kommentarfelt, i diskusjoner med venner, og til og med i måten læreren din presenterer et nytt tema på. Hver gang noen prøver å overbevise deg om noe, bruker de retorikk — enten bevisst eller ubevisst.

I dette kapittelet skal du lære:
- Hva retorikk er og hvor det kommer fra
- De tre **appellformene**: etos, patos og logos
- Hva den **retoriske situasjonen** betyr
- Hvordan du analyserer tekster og taler med retoriske begreper`,
    },

    // ========== DEFINISJON: RETORIKK ==========
    {
      id: 'norsk-10-6-1-def-1',
      type: 'definition',
      title: 'Retorikk',
      content: `**Retorikk** er læren om talekunst og overbevisende kommunikasjon. Ordet kommer fra det greske *rhetorike*, som betyr «talekunst».

Retorikk handler om **hvordan** du kommuniserer — ikke bare **hva** du sier. To personer kan si det samme innholdet, men den som bruker retorikk bevisst, vil overbevise langt mer effektivt.

**De fem retoriske fasene** (fra antikken):
1. **Inventio** (finne stoff): Hva skal du si? Hvilke argumenter har du?
2. **Dispositio** (ordne stoffet): Hvordan skal du bygge opp talen eller teksten?
3. **Elocutio** (formulere): Hvilke ord og virkemidler skal du bruke?
4. **Memoria** (huske): Hvordan skal du lære innholdet utenat?
5. **Actio** (fremføre): Hvordan skal du bruke stemmen, kroppsspråket og blikket?

Retorikk er ikke det samme som manipulasjon. Målet med god retorikk er å kommunisere klart, overbevisende og ærlig. Men fordi retorikk er kraftfullt, kan det også misbrukes — og nettopp derfor er det viktig å forstå hvordan det fungerer.`,
    },

    // ========== EKSEMPEL: RETORISK SITUASJON ==========
    {
      id: 'norsk-10-6-1-example-1',
      type: 'example',
      title: 'Eksempel: Retorisk situasjon',
      content: `La oss se på et konkret eksempel. Du skal holde en tale i klassen om hvorfor skolen bør ha lengre friminutt.

**Retorisk situasjon:**
- **Avsender (retor):** Du, en 10.-klassering
- **Mottaker (publikum):** Medelevene dine og læreren
- **Budskap:** Lengre friminutt gir bedre konsentrasjon
- **Kontekst:** Klasserommet, en muntlig fremføring
- **Hensikt (kairos):** Du vil overbevise klassen og læreren

**Hvordan tilpasser du deg situasjonen?**

Du vet at medelevene allerede er enige — de vil gjerne ha lengre friminutt. Men læreren trenger overbevisning. Derfor velger du å fokusere på **forskning** (logos) som viser at pauser forbedrer læring. Du bruker også **personlig erfaring** (etos/patos) — du forteller at du selv merker at konsentrasjonen faller etter 45 minutter. Og du avslutter med et **konkret forslag** (dispositio) — ikke «uendelig friminutt», men 5 minutter ekstra per time.

Ved å analysere den retoriske situasjonen før du taler, gjør du kommunikasjonen din mye mer effektiv.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'norsk-10-6-1-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-1-ex-1',
        number: '6.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr ordet «retorikk»?',
        options: [
          {
            id: 'a',
            text: 'Kunsten å skrive vakre dikt',
            isCorrect: false,
            feedback: 'Feil. Diktekunst er poetikk. Retorikk handler om overbevisende kommunikasjon.',
          },
          {
            id: 'b',
            text: 'Læren om talekunst og overbevisende kommunikasjon',
            isCorrect: true,
            feedback: 'Riktig! Retorikk handler om hvordan du kommuniserer overbevisende, både muntlig og skriftlig.',
          },
          {
            id: 'c',
            text: 'En type logisk feilslutning',
            isCorrect: false,
            feedback: 'Feil. Logiske feilslutninger er noe du analyserer innenfor retorikken, men retorikk er mye bredere enn det.',
          },
          {
            id: 'd',
            text: 'En metode for å skrive akademiske tekster',
            isCorrect: false,
            feedback: 'Feil. Retorikk brukes i alle typer kommunikasjon, ikke bare akademisk skriving.',
          },
        ],
        solution: 'Alternativ B er riktig. Retorikk er læren om talekunst og overbevisende kommunikasjon — et felt som har blitt studert i over 2500 år.',
      },
    },

    // ========== ETOS, PATOS, LOGOS ==========
    {
      id: 'norsk-10-6-1-appellformer',
      type: 'text',
      content: `## Etos, patos og logos — de tre appellformene

Aristoteles (384–322 f.Kr.) identifiserte tre måter en taler kan overbevise publikum på. Disse kalles **appellformene** eller **de retoriske bevismidlene**. Alt overbevisende kommunikasjon bygger på en kombinasjon av disse tre.

### Etos — troverdighet

**Etos** handler om avsenderens troverdighet. Hvem er det som snakker? Har vi grunn til å stole på denne personen?

Du lytter mer oppmerksomt til en lege som snakker om helse enn til en tilfeldig person på gata. Legen har **etos** — faglig autoritet og kompetanse. Men etos handler ikke bare om utdanning. Det handler også om å fremstå som **ærlig**, **pålitelig** og **velmenende**.

Du kan bygge etos ved å:
- Vise at du har kunnskap om emnet
- Referere til troverdige kilder
- Innrømme svakheter i egne argumenter (viser ærlighet)
- Ha god fremtoning — se publikum i øynene, snakke tydelig
- Vise at du respekterer dem du snakker til

### Patos — følelser

**Patos** handler om å vekke følelser hos mottakeren. Frykt, glede, medfølelse, sinne, stolthet, håp — følelser driver mennesker til handling langt mer effektivt enn logikk alene.

Tenk på en innsamlingsaksjon for barn i nød. Hva overbeviser deg mest: et statistisk ark som viser at 5,3 millioner barn mangler rent vann? Eller et bilde av ett enkelt barn som ser rett inn i kameraet med tørste øyne? Bildet. Fordi det vekker **patos**.

Du kan bruke patos ved å:
- Fortelle konkrete historier og eksempler
- Bruke billedspråk og metaforer
- Appellere til verdier mottakeren deler (frihet, rettferdighet, trygghet)
- Variere stemmebruk og tempo
- Bruke retoriske spørsmål: «Hva slags samfunn vil vi ha?»

### Logos — logikk og fornuft

**Logos** handler om argumentets logiske styrke. Er resonnementet holdbart? Er bevisene solide?

Logos er grunnmuren. Uten logos faller argumentasjonen sammen som et korthus. Du kan ha all troverdighet og alle følelser i verden — men hvis argumentet ikke henger sammen logisk, vil den kritiske lytteren gjennomskue det.

Du kan styrke logos ved å:
- Bruke fakta, statistikk og forskning
- Bygge argumenter i logisk rekkefølge (premiss → premiss → konklusjon)
- Gi konkrete eksempler som støtter påstanden
- Imøtegå motargumenter
- Unngå logiske feilslutninger

### Samspillet mellom appellformene

De tre appellformene er ikke konkurrenter — de er samarbeidspartnere. Den beste kommunikasjonen bruker alle tre i balanse.

- **Bare etos:** «Stol på meg, jeg er ekspert.» (Autoritært, men lite engasjerende)
- **Bare patos:** «Tenk på barna!» (Følelsesladet, men lite overbevisende for kritiske lyttere)
- **Bare logos:** «Studien viser en korrelasjon på 0,87.» (Korrekt, men kjedelig og lite engasjerende)
- **Etos + patos + logos:** «Som lege har jeg sett hundrevis av pasienter med denne sykdommen [etos]. Forrige uke møtte jeg en 12-åring som ikke kunne gå til skolen fordi behandlingen ikke var tilgjengelig [patos]. Forskning viser at tidlig behandling reduserer symptomene med 70 % [logos]. Vi må handle nå.» **Det** er overbevisende kommunikasjon.`,
    },

    // ========== DEFINISJON: APPELLFORMENE ==========
    {
      id: 'norsk-10-6-1-def-2',
      type: 'definition',
      title: 'De tre appellformene',
      content: `**Etos** (troverdighet): Appell til avsenderens karakter, kompetanse og pålitelighet. Publikum spør seg: «Kan jeg stole på denne personen?»

**Patos** (følelser): Appell til mottakerens følelser. Avsenderen forsøker å vekke emosjonelle reaksjoner — medfølelse, engasjement, frykt, begeistring.

**Logos** (logikk): Appell til fornuften gjennom argumenter, bevis, fakta og logisk resonnement. Publikum spør seg: «Gir dette mening?»

**Huskeregel:**
- **Etos** = Hvem sier det? (Avsenderens troverdighet)
- **Patos** = Hva får det meg til å føle? (Mottakerens følelser)
- **Logos** = Holder argumentet? (Logikkens styrke)

Alle tre appellformene finnes i de fleste overbevisende tekster, men vektingen varierer. En vitenskapelig artikkel lener seg tungt på logos, mens en valgkamptale bruker mye patos.`,
    },

    // ========== EKSEMPEL: APPELLFORMER I PRAKSIS ==========
    {
      id: 'norsk-10-6-1-example-2',
      type: 'example',
      title: 'Eksempel: Appellformer i en skoletale',
      problem: 'Les dette utdraget fra en elevs tale om mobbing, og identifiser bruken av etos, patos og logos.',
      solution: `**Talen:**
«Jeg har selv opplevd mobbing. I tre år på barneskolen ble jeg holdt utenfor. Ingen ville sitte ved siden av meg i kantina. Jeg vet hvordan det føles.» → **Etos** (personlig erfaring gir troverdighet) + **Patos** (vekker medfølelse)

«Ifølge en studie fra NOVA oppgir én av fem norske ungdommer at de har blitt mobbet det siste året. Det betyr at i en klasse på 30 elever, sitter det sannsynligvis seks stykker som vet nøyaktig hva jeg snakker om.» → **Logos** (statistikk og forskning) + **Patos** (gjør statistikken konkret og personlig)

«Vi kan ikke la dette fortsette. Skal vi akseptere at medelevene våre går til skolen med en klump i magen, dag etter dag?» → **Patos** (retorisk spørsmål som vekker følelser og ansvarsfølelse)

«Forskning fra Olweus-programmet viser at skoler med antimobbeprogram reduserer mobbingen med opptil 50 %. Det fungerer — men bare hvis vi alle tar ansvar.» → **Logos** (forskning og fakta) + **Etos** (viser at taleren har satt seg inn i temaet)

**Denne talen er effektiv fordi den kombinerer alle tre appellformene.** Avsenderen har troverdighet (personlig erfaring og kunnskap), argumentene er logisk funderte (forskning og statistikk), og talen vekker sterke følelser (medfølelse, ansvarsfølelse).`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'norsk-10-6-1-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-1-ex-2',
        number: '6.2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken appellform brukes i denne setningen? «Ifølge tall fra SSB har klimagassutslippene i Norge økt med 3 % det siste året.»',
        options: [
          {
            id: 'a',
            text: 'Etos',
            isCorrect: false,
            feedback: 'Feil. Etos handler om avsenderens troverdighet. Her er fokuset på fakta og tall.',
          },
          {
            id: 'b',
            text: 'Patos',
            isCorrect: false,
            feedback: 'Feil. Patos handler om å vekke følelser. Denne setningen presenterer nøktern statistikk.',
          },
          {
            id: 'c',
            text: 'Logos',
            isCorrect: true,
            feedback: 'Riktig! Setningen bruker fakta og statistikk (tall fra SSB) — det er en appell til fornuften og logikken.',
          },
          {
            id: 'd',
            text: 'Kairos',
            isCorrect: false,
            feedback: 'Feil. Kairos handler om det rette tidspunktet for å kommunisere, ikke om innholdet i argumentet.',
          },
        ],
        solution: 'Alternativ C er riktig. Referanse til statistikk fra en offentlig kilde (SSB) er en klassisk logos-appell.',
      },
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'norsk-10-6-1-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-1-ex-3',
        number: '6.3',
        type: 'classic',
        difficulty: 'medium',
        task: `Les disse tre utsagnene og avgjør hvilken appellform som dominerer i hvert utsagn. Begrunn svarene dine.`,
        subTasks: [
          {
            label: 'a',
            task: '«Som sykepleier i 20 år har jeg sett hva kutt i helsebudsjettet gjør med pasientene.»',
            solution: 'Etos. Avsenderen viser til sin lange yrkeserfaring som sykepleier for å bygge troverdighet. «20 år» og «sykepleier» gir faglig autoritet til det som sies videre.',
            multipleChoiceOptions: ['Etos', 'Patos', 'Logos', 'Kairos'],
          },
          {
            label: 'b',
            task: '«Tenk deg at du kommer hjem og finner familien din syk, men sykehuset er stengt fordi det ikke var nok penger igjen.»',
            solution: 'Patos. Setningen bruker et hypotetisk, skremmende scenario som skal vekke frykt og engasjement hos mottakeren. «Tenk deg» inviterer lytteren til å forestille seg en personlig, følelsesladet situasjon.',
            multipleChoiceOptions: ['Patos', 'Etos', 'Logos', 'Kairos'],
          },
          {
            label: 'c',
            task: '«Tall fra Helsedirektoratet viser at ventetiden på behandling har økt med 34 % de siste fem årene.»',
            solution: 'Logos. Setningen bruker konkrete tall og en offentlig kilde (Helsedirektoratet) for å bygge et logisk, fakta-basert argument.',
            multipleChoiceOptions: ['Logos', 'Etos', 'Patos', 'Kairos'],
          },
        ],
        solution: 'a) Etos — yrkeserfaring gir troverdighet. b) Patos — skremmende scenario vekker frykt. c) Logos — tall og statistikk appellerer til fornuften.',
      },
    },

    // ========== RETORISKE VIRKEMIDLER ==========
    {
      id: 'norsk-10-6-1-virkemidler',
      type: 'text',
      content: `## Retoriske virkemidler

Utover de tre appellformene finnes det en rekke **retoriske virkemidler** — språklige teknikker som gjør kommunikasjonen mer slagkraftig, minneverdig og overbevisende. Her er de viktigste:

### Retorisk spørsmål
Et spørsmål som ikke krever svar, men som får tilhøreren til å tenke — og ofte være enig med taleren.
- «Er det virkelig dette vi vil?» (Implisitt svar: Nei.)
- «Hvem vil vel at barna våre skal vokse opp i en usikker verden?» (Implisitt svar: Ingen.)

### Gjentakelse (repetisjon)
Å gjenta et ord, en frase eller en struktur for å forsterke budskapet.
- Martin Luther King: «I have a dream...» (gjentatt mange ganger)
- «Vi gir oss ikke. Vi gir oss aldri. Vi gir oss absolutt aldri.» (trapp-gjentakelse)

### Tretallsregelen (trikolon)
Tre elementer virker sterkere enn to eller fire. Tre er et magisk tall i retorikk.
- «Vi kom, vi så, vi vant.» (Julius Cæsar)
- «Blod, svette og tårer.» (Winston Churchill)

### Kontrast (antitese)
Å sette to motsetninger opp mot hverandre for å forsterke budskapet.
- «Et lite skritt for et menneske, et stort sprang for menneskeheten.» (Neil Armstrong)
- «Spørsmålet er ikke om vi har råd til å gjøre det — spørsmålet er om vi har råd til å la være.»

### Metafor
Å beskrive noe ved å sammenligne det med noe helt annet — uten å bruke «som» eller «lik».
- «Skolen er en fabrikk som produserer arbeidere.»
- «Samfunnet står ved et veiskille.»

### Overdrivelse (hyperbol)
Å overdrive for å gjøre et poeng tydeligere.
- «Alle vet at dette er feil.» (Ikke *alle*, men det høres mer overbevisende ut.)
- «Jeg har sagt det en million ganger.»

### Ironi
Å si det motsatte av det du mener — ofte for å kritisere.
- «Joda, det gikk jo strålende» (når noe gikk helt galt).

### Personlig pronomen (vi-form)
Å bruke «vi» i stedet for «jeg» eller «dere» skaper fellesskap og inkluderer tilhørerne.
- «Vi må stå sammen.» (Mer inkluderende enn: «Dere må gjøre noe.»)`,
    },

    // ========== OPPGAVE 4: RETORISKE VIRKEMIDLER ==========
    {
      id: 'norsk-10-6-1-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-1-ex-4',
        number: '6.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket retorisk virkemiddel brukes her? «Frihet. Likhet. Brorskap.»',
        options: [
          {
            id: 'a',
            text: 'Retorisk spørsmål',
            isCorrect: false,
            feedback: 'Feil. Et retorisk spørsmål er et spørsmål som ikke krever svar. Her er det ingen spørsmål.',
          },
          {
            id: 'b',
            text: 'Tretallsregelen (trikolon)',
            isCorrect: true,
            feedback: 'Riktig! Tre ord, tre begreper — det er et klassisk trikolon. Tre elementer i en opplisting virker kraftfullt og rytmisk.',
          },
          {
            id: 'c',
            text: 'Kontrast (antitese)',
            isCorrect: false,
            feedback: 'Feil. Kontrast handler om motsetninger. Her er de tre ordene sideordnede verdier, ikke motsetninger.',
          },
          {
            id: 'd',
            text: 'Overdrivelse (hyperbol)',
            isCorrect: false,
            feedback: 'Feil. Overdrivelse innebærer å forstørre noe utover det realistiske. Det skjer ikke her.',
          },
        ],
        solution: 'Alternativ B er riktig. «Frihet. Likhet. Brorskap.» er et trikolon — tre ord i rekkefølge som sammen skaper en sterk rytmisk effekt.',
      },
    },

    // ========== OPPGAVE 5 ==========
    {
      id: 'norsk-10-6-1-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-1-ex-5',
        number: '6.5',
        type: 'classic',
        difficulty: 'medium',
        task: `Identifiser de retoriske virkemidlene i følgende setninger og forklar virkningen.`,
        subTasks: [
          {
            label: 'a',
            task: '«Er det virkelig slik vi vil ha det? Er det dette vi vil overlate til barna våre?»',
            solution: 'Retoriske spørsmål (to stykker). Virkning: Spørsmålene inviterer tilhørerne til å reflektere. De implisitte svarene er «nei», og taleren skaper enighet uten å påstå noe direkte. Gjentakelsen av spørsmålsstrukturen forsterker effekten.',
          },
          {
            label: 'b',
            task: '«Et lite steg for denne klassen, men et kjempesprang for skolekulturen.»',
            solution: 'Kontrast (antitese) og en allusjon til Neil Armstrongs berømte sitat. Virkning: Motsetningen mellom «lite steg» og «kjempesprang» forsterker budskapet: En liten innsats kan gi enorme resultater. Allusjonen gir ekstra tyngde.',
          },
        ],
        hints: [
          'Se etter språklige mønster: gjentakelse, spørsmål uten svar, motsetninger',
          'Tenk på hva virkningen er — hva gjør virkemiddelet med lytteren?',
        ],
        solution: 'a) Retoriske spørsmål — skaper refleksjon og implisitt enighet. b) Kontrast og allusjon — forsterker budskapet gjennom motsetning og referanse til noe kjent.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-6-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

Retorikk er kunsten å overbevise — en ferdighet som er like relevant i dag som den var i antikken. Du har lært at:

- **Retorikk** betyr talekunst og overbevisende kommunikasjon, og har blitt studert i over 2500 år
- Den **retoriske situasjonen** inkluderer avsender, mottaker, budskap, kontekst og hensikt
- De tre **appellformene** er **etos** (troverdighet), **patos** (følelser) og **logos** (logikk)
- Effektiv kommunikasjon kombinerer alle tre appellformene
- **Retoriske virkemidler** som gjentakelse, trikolon, kontrast, metafor og retoriske spørsmål gjør kommunikasjonen sterkere
- Den **retoriske femtrinnsmodellen** (inventio, dispositio, elocutio, memoria, actio) er en systematisk måte å forberede kommunikasjon på

Husk: Retorikk er et verktøy. Det kan brukes til å inspirere og opplyse — men også til å manipulere. Derfor er det like viktig å kunne **gjennomskue** retorikk som å bruke den selv.`,
    },

    // --- Samleoppgaver ---

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-6-1-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-1-ex-6',
        number: '6.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Retorisk analyse.

Velg en reklame du har sett nylig (TV, nett, plakat eller sosiale medier). Skriv en retorisk analyse (200–300 ord) der du:

a) Beskriver reklamen kort (hva selges, hva vises, hva sies)
b) Analyserer bruken av etos, patos og logos
c) Identifiserer minst to retoriske virkemidler
d) Vurderer om reklamen er overbevisende — og hvorfor/hvorfor ikke`,
        hints: [
          'Start med å beskrive reklamen objektivt — hva ser du og hører du?',
          'Bruk fagbegrepene: etos, patos, logos, retorisk spørsmål, trikolon osv.',
          'Husk at én setning kan inneholde flere appellformer og virkemidler',
        ],
        solution: 'En god analyse beskriver reklamen konkret, bruker retoriske fagbegreper presist, og vurderer virkningen på mottakeren. Eksempel: En reklame som bruker en kjent person (etos), emosjonelle bilder (patos) og statistikk (logos) kombinerer alle tre appellformene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-6-1-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-1-ex-7',
        number: '6.7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Skriv tre versjoner.

Velg en påstand, for eksempel: «Skolen bør starte klokka 09:00 i stedet for 08:00.»

Skriv tre korte argumentasjoner (50–80 ord hver) der du:
a) Bruker **bare etos** — bygg argumentet på troverdighet og autoritet
b) Bruker **bare patos** — bygg argumentet på følelser og personlige historier
c) Bruker **bare logos** — bygg argumentet på fakta, tall og logisk resonnement

Skriv deretter en fjerde versjon (100–150 ord) som kombinerer alle tre appellformene.`,
        hints: [
          'For etos: Vis til forskning, eksperter eller egen erfaring',
          'For patos: Fortell en historie eller mal et bilde som vekker følelser',
          'For logos: Bruk konkrete tall, statistikk og logiske årsak-virkning-sammenhenger',
        ],
        solution: 'Eksempel på kombinert versjon: «Som søvnforsker vet jeg at tenåringer biologisk sett er mest årvåkne etter kl. 09 (etos). Tenk på alle elevene som sitter i første time med hodet tungt mot pulten, som prøver å holde øynene åpne mens drømmene fortsatt henger igjen (patos). Forskning fra Universitetet i Oxford viser at skoler som utsatte starttiden til 09:00, fikk 15 % bedre resultater på prøver (logos). Vi skylder elevene våre en skoledag som tar hensyn til biologien.»',
        allowsUpload: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Retorikk', definition: 'Læren om talekunst og overbevisende kommunikasjon, studert i over 2500 år' },
    { term: 'Etos', definition: 'Appellform som bygger på avsenderens troverdighet, kompetanse og karakter' },
    { term: 'Patos', definition: 'Appellform som appellerer til mottakerens følelser for å skape engasjement' },
    { term: 'Logos', definition: 'Appellform som bygger på logikk, fakta og fornuftige argumenter' },
    { term: 'Retorisk situasjon', definition: 'Samlebegrepet for avsender, mottaker, budskap, kontekst og hensikt i en kommunikasjonssituasjon' },
    { term: 'Retorisk spørsmål', definition: 'Spørsmål som ikke krever svar, men som leder mottakeren mot en bestemt konklusjon' },
    { term: 'Trikolon', definition: 'Retorisk virkemiddel der tre elementer listes opp for rytmisk og forsterkende effekt' },
    { term: 'Antitese', definition: 'Retorisk virkemiddel der to motsetninger settes opp mot hverandre for å forsterke budskapet' },
    { term: 'Kairos', definition: 'Det rette øyeblikket for å kommunisere et budskap — tidspunktet der talen har størst virkning' },
  ],
};

// ============================================================================
// KAPITTEL 6.2: Argumentasjon og debatt
// LK20: Lytte til, vurdere og bruke argumentasjon i meningsutveksling
//        og debatt om faglige og samfunnsrelaterte emner
// ============================================================================

export const CHAPTER_NORSK_10_6_2: TextbookChapter = {
  id: 'norsk-10-6-2',
  courseId: 'norsk-10',
  chapterNumber: '6.2',
  title: 'Argumentasjon og debatt',
  description: 'Lær hvordan du bygger opp gode argumenter, gjenkjenner svake argumenter og logiske feilslutninger, og deltar i saklige debatter.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lytte til, vurdere og bruke argumentasjon i meningsutveksling og debatt',
    'skille mellom sterke og svake argumenter og gjenkjenne logiske feilslutninger',
    'delta i faglige samtaler og debatter med saklig argumentasjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-6-2-intro',
      type: 'text',
      content: `## Argumentasjon: Kunsten å tenke klart — og snakke klarere

Du argumenterer hele tiden. Når du prøver å overbevise foreldrene dine om å få lov til å være ute lengre. Når du diskuterer med en venn om hvilken film som er best. Når du svarer på en oppgave i norsk eller samfunnsfag. Argumentasjon er en grunnleggende del av hverdagen din — og av demokratiet.

Men det er forskjell på å *mene* noe og å *argumentere* for det. Mange tror at argumentasjon handler om å ha de sterkeste meningene. Det gjør det ikke. Argumentasjon handler om å ha de sterkeste **begrunnelsene**. Den som argumenterer best, er ikke nødvendigvis den som er mest engasjert eller prater mest — det er den som tenker klarest.

I en debatt møtes ulike synspunkter. Målet med en debatt er ikke nødvendigvis å «vinne» — det er å belyse en sak fra flere sider, slik at alle kan danne seg et mer informert standpunkt. I et demokrati er dette helt avgjørende. Vi trenger mennesker som kan argumentere saklig, lytte til motargumenter og endre mening når bevisene tilsier det.

I dette kapittelet skal du lære:
- Hvordan et argument er bygd opp (påstand, begrunnelse, belegg)
- Forskjellen mellom sterke og svake argumenter
- Hva **logiske feilslutninger** er og hvorfor de er farlige
- Hvordan du deltar i en debatt med respekt og slagkraft`,
    },

    // ========== DEFINISJON: ARGUMENT ==========
    {
      id: 'norsk-10-6-2-def-1',
      type: 'definition',
      title: 'Argumentets oppbygging',
      content: `Et **argument** består av tre deler:

**1. Påstand** — det du mener eller hevder
- «Skolen bør ha leksefri tid.»
- «Klimaendringene er den viktigste utfordringen i vår tid.»

**2. Begrunnelse** — hvorfor du mener det
- «...fordi forskning viser at lekser i grunnskolen har liten effekt på læring.»
- «...fordi konsekvensene for natur og samfunn er svært alvorlige.»

**3. Belegg (bevis)** — dokumentasjon som støtter begrunnelsen
- «Ifølge en metastudie av John Hattie (2009) har lekser minimal effekt for elever under 12 år.»
- «FNs klimapanel rapporterer at global temperatur har steget med 1,1°C siden førindustriell tid.»

**Modellen: Påstand + begrunnelse + belegg**
Et argument uten begrunnelse er bare en mening. Et argument uten belegg er bare en påstand. Først når alle tre delene er på plass, har du et sterkt argument.

**Toulmins argumentasjonsmodell** utvider dette med:
- **Ryggdekning**: Generelle prinsipper som støtter begrunnelsen
- **Styrkemarkør**: Ord som «alltid», «ofte», «kanskje» som viser hvor sikker du er
- **Innvending**: Mulige motargumenter og unntak`,
    },

    // ========== EKSEMPEL: OPPBYGGING AV ET ARGUMENT ==========
    {
      id: 'norsk-10-6-2-example-1',
      type: 'example',
      title: 'Eksempel: Et argument steg for steg',
      problem: 'Bygg opp et argument for at skolen bør ha lengre friminutt.',
      solution: `**Steg 1: Påstanden**
«Skolen bør gi elevene minst 20 minutters friminutt etter hver dobbeltime.»

**Steg 2: Begrunnelsen**
«Korte pauser er ikke nok til å gjenopprette konsentrasjonen. Hjernen trenger tid til å hvile, bevege seg og sosialisere for å fungere optimalt i neste undervisningsøkt.»

**Steg 3: Belegget**
«Forskning fra det amerikanske National Institutes of Health viser at elever som har minst 20 minutters fysisk aktivitet mellom undervisningsøkter, presterer 14 % bedre på oppmerksomhetstester. En studie fra Norges idrettshøgskole bekrefter lignende resultater for norske ungdommer.»

**Hele argumentet samlet:**
«Skolen bør gi elevene minst 20 minutters friminutt etter hver dobbeltime. Korte pauser er ikke nok til å gjenopprette konsentrasjonen — hjernen trenger tid til å hvile, bevege seg og sosialisere. Forskning fra National Institutes of Health viser at elever med minst 20 minutters pauseaktivitet presterer 14 % bedre på oppmerksomhetstester.»

**Legg merke til:** Argumentet er konkret (20 minutter, ikke bare «lengre»), begrunnet (forklarer hvorfor) og belagt (viser til forskning).`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'norsk-10-6-2-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-2-ex-1',
        number: '6.8',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er de tre delene i et argument?',
        options: [
          {
            id: 'a',
            text: 'Innledning, hoveddel og konklusjon',
            isCorrect: false,
            feedback: 'Feil. Det er strukturen i en tekst eller en tale, men ikke delene i et argument.',
          },
          {
            id: 'b',
            text: 'Påstand, begrunnelse og belegg',
            isCorrect: true,
            feedback: 'Riktig! Et argument består av en påstand (det du hevder), en begrunnelse (hvorfor) og belegg (bevis som støtter begrunnelsen).',
          },
          {
            id: 'c',
            text: 'Etos, patos og logos',
            isCorrect: false,
            feedback: 'Feil. Etos, patos og logos er appellformer — måter å overbevise på. Argumentets deler er påstand, begrunnelse og belegg.',
          },
          {
            id: 'd',
            text: 'Fakta, mening og følelse',
            isCorrect: false,
            feedback: 'Feil. Fakta kan inngå i et argument, men dette er ikke den korrekte oppbyggingen.',
          },
        ],
        solution: 'Alternativ B er riktig. Et argument består av påstand (det du hevder), begrunnelse (hvorfor du hevder det) og belegg (dokumentasjon som støtter begrunnelsen).',
      },
    },

    // ========== LOGISKE FEILSLUTNINGER ==========
    {
      id: 'norsk-10-6-2-feilslutninger',
      type: 'text',
      content: `## Logiske feilslutninger — når argumenter svikter

En **logisk feilslutning** er et argument som *ser ut som* det er logisk, men som egentlig inneholder en feil i resonnementet. Feilslutninger er farlige fordi de kan være veldig overbevisende — inntil du lærer å gjenkjenne dem.

Her er de vanligste feilslutningene:

### 1. Personangrep (*ad hominem*)
I stedet for å angripe argumentet, angriper du personen som fremmer det.
- «Du kan ikke uttale deg om klimaendringer — du flyr jo til Syden hvert år.»
- Feilen: Personens oppførsel gjør ikke argumentet ugyldig. Klimaforskning er like sann uansett hvem som presenterer den.

### 2. Stråmannsargument
Du forvrenger motstanderens argument til noe han eller hun aldri sa, og angriper den forvrengte versjonen.
- Motstanderen: «Vi bør vurdere å redusere kjøttforbruket for miljøets skyld.»
- Stråmann: «Så du vil altså at alle skal tvinges til å bli veganere?!»
- Feilen: Ingen sa noe om tvang eller veganisme. Argumentet er forvrengt.

### 3. Skråplan (*slippery slope*)
Du hevder at én handling uunngåelig vil føre til en kjede av stadig verre konsekvenser — uten å bevise sammenhengen.
- «Hvis vi tillater mobiltelefoner på skolen, vil elevene slutte å følge med, karakterene vil rase, og hele utdanningssystemet kollapser.»
- Feilen: Hvert steg i kjeden krever bevis. Det er ikke automatisk at mobilbruk fører til systemkollaps.

### 4. Falskt dilemma
Du presenterer saken som om det bare finnes to muligheter — enten/eller — når det finnes flere.
- «Enten er du med oss, eller så er du mot oss.»
- Feilen: Man kan være delvis enig, nøytral, eller ha et helt annet standpunkt.

### 5. Appell til flertallet (*ad populum*)
Du hevder at noe er sant eller riktig fordi mange mener det.
- «De fleste tror på det, så det må jo stemme.»
- Feilen: Flertallets mening er ikke bevis. Historien er full av eksempler der flertallet tok feil.

### 6. Sirkelargument
Konklusjonen gjentar påstanden uten å faktisk bevise noe.
- «Denne boka er bra fordi den er velskrevet.» (Velskrevet og bra betyr omtrent det samme — argumentet beviser ingenting.)

### 7. Appell til autoritet (feilaktig)
Du bruker en autoritetsperson som bevis, men personen har ingen kompetanse på feltet.
- «En kjent fotballspiller sier at dette kosttilskuddet virker, så det må stemme.»
- Feilen: Fotballspilleren er ikke ernæringsekspert. Berømthet betyr ikke kompetanse.`,
    },

    // ========== DEFINISJON: STERK vs SVAK ARGUMENTASJON ==========
    {
      id: 'norsk-10-6-2-def-2',
      type: 'definition',
      title: 'Sterk vs. svak argumentasjon',
      content: `**Sterk argumentasjon** kjennetegnes av:
- Klar og tydelig påstand
- Logisk og relevant begrunnelse
- Pålitelig belegg (forskning, eksperter, statistikk)
- Innrømmelse av nyanser og motargumenter
- Bruk av styrkemarkører som «forskning tyder på», «det er grunn til å tro»

**Svak argumentasjon** kjennetegnes av:
- Vag eller uklar påstand
- Manglende eller irrelevant begrunnelse
- Manglende belegg eller upålitelige kilder
- Logiske feilslutninger (stråmann, personangrep osv.)
- Bruk av absolutte ord uten dekning: «alle vet», «det er bevist at»

**Huskeregel:** Jo sterkere en påstand er, desto sterkere belegg trenger den. «Kanskje regner det i morgen» krever lite belegg. «Regn gjør folk lykkeligere» krever solid forskning.`,
    },

    // ========== OPPGAVE 2: FEILSLUTNINGER ==========
    {
      id: 'norsk-10-6-2-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-2-ex-2',
        number: '6.9',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser hvilken logisk feilslutning som brukes i hvert eksempel.',
        subTasks: [
          {
            label: 'a',
            task: '«Du kan ikke mene at vi bør lese mer — du leser jo aldri selv!»',
            solution: 'Personangrep (ad hominem). I stedet for å vurdere argumentet om lesing, angriper man personen. Om avsenderen leser mye eller lite, endrer ikke argumentets gyldighet.',
            multipleChoiceOptions: ['Personangrep (ad hominem)', 'Stråmannsargument', 'Falskt dilemma', 'Appell til flertallet'],
          },
          {
            label: 'b',
            task: '«Enten forbyr vi all biltrafikk i sentrum, eller så godtar vi at luftforurensningen dreper folk.»',
            solution: 'Falskt dilemma. Saken fremstilles som om det bare er to ekstreme muligheter. I virkeligheten finnes det mange mellomløsninger: lavutslippssoner, kollektivtransport, elbilsatsing med mer.',
            multipleChoiceOptions: ['Falskt dilemma', 'Skråplan (slippery slope)', 'Sirkelargument', 'Personangrep'],
          },
          {
            label: 'c',
            task: '«Alle vennene mine synes det, så det er sikkert riktig.»',
            solution: 'Appell til flertallet (ad populum). At vennene dine er enige, betyr ikke at de har rett. Flertallets mening er ikke et logisk bevis.',
            multipleChoiceOptions: ['Appell til flertallet', 'Appell til autoritet', 'Stråmannsargument', 'Skråplan'],
          },
          {
            label: 'd',
            task: '«Motstanderen mener vi bør bruke mer penger på skole. Altså vil hun bruke opp hele statsbudsjettet og kjøre landet i grøfta!»',
            solution: 'Stråmannsargument. Motstanderens posisjon forvrenger fra «mer penger til skole» til «bruke opp hele statsbudsjettet». Den overdrevne versjonen er lettere å angripe, men den er ikke det motstanderen faktisk sa.',
            multipleChoiceOptions: ['Stråmannsargument', 'Personangrep', 'Falskt dilemma', 'Skråplan'],
          },
        ],
        solution: 'a) Personangrep, b) Falskt dilemma, c) Appell til flertallet, d) Stråmannsargument.',
      },
    },

    // ========== DEBATTENS REGLER ==========
    {
      id: 'norsk-10-6-2-debatt',
      type: 'text',
      content: `## Debatt — regler for saklig meningsutveksling

En **debatt** er en strukturert diskusjon der to eller flere parter argumenterer for ulike standpunkter i en sak. I motsetning til en krangel, har en debatt regler, og målet er å belyse saken — ikke å «knuse» motstanderen.

### Ulike debattformer

**Klassedebatt:** Klassen deles i to grupper som argumenterer for og mot en påstand. En ordstyrer leder debatten.

**Paneldebatt:** Et panel av 3–5 personer diskuterer et tema foran et publikum. Panelet representerer ulike synspunkter.

**Ordskifte:** Friere form der deltakerne tar ordet etter tur. Vanlig i politiske debatter.

**Oxford-debatt:** Formelt format med innlegg, motinnlegg og avstemning. Publikum stemmer før og etter debatten for å se hvem som overbeviste flest.

### Regler for god debatt

**1. Angrip argumentet, ikke personen.** Personangrep er alltid usaklig, uansett hvor fristende det er.

**2. Lytt til motstanderen.** Aktiv lytting er like viktig som å snakke. Du kan ikke imøtegå et argument du ikke har forstått.

**3. Innrøm svakheter.** Å innrømme at motstanderen har et poeng, styrker faktisk din egen troverdighet (etos).

**4. Hold deg til saken.** Unngå avsporinger og sidespor. Ordstyrerens jobb er å holde debatten på sporet.

**5. Bruk belegg.** Påstander uten begrunnelse er tomme. «Jeg mener» er svakere enn «forskning viser».

**6. Respekter taletiden.** Alle skal få komme til orde. Å avbryte andre viser dårlig debattkultur.

### Nyttige debattfraser

- «Jeg er enig i at [motstanderens poeng], men jeg mener likevel at...»
- «La meg utdype: Begrunnelsen for mitt standpunkt er...»
- «Det er et godt poeng, men forskning tyder på at...»
- «Motstanderen hevder at [X], men dette tar ikke hensyn til [Y].»
- «Kan du underbygge den påstanden med en kilde?»`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'norsk-10-6-2-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-2-ex-3',
        number: '6.10',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken debattregel brytes i denne situasjonen? Person A: «Vi bør satse mer på kollektivtransport.» Person B: «Typisk deg å mene det — du som ikke engang har sertifikat!»',
        options: [
          {
            id: 'a',
            text: 'Person B holder seg ikke til saken',
            isCorrect: false,
            feedback: 'Delvis riktig — B avsporer debatten, men det er et mer spesifikt begrep som passer bedre.',
          },
          {
            id: 'b',
            text: 'Person B angriper personen, ikke argumentet',
            isCorrect: true,
            feedback: 'Riktig! Person B bruker et personangrep (ad hominem) i stedet for å vurdere argumentet om kollektivtransport. Om person A har sertifikat eller ikke, er irrelevant for argumentets gyldighet.',
          },
          {
            id: 'c',
            text: 'Person B bruker et stråmannsargument',
            isCorrect: false,
            feedback: 'Feil. Et stråmannsargument ville vært å forvrenge As argument. Her angriper B personen, ikke argumentet.',
          },
          {
            id: 'd',
            text: 'Person B respekterer ikke taletiden',
            isCorrect: false,
            feedback: 'Feil. Det er ingenting i eksempelet som tyder på at B avbryter eller overskrider taletiden.',
          },
        ],
        solution: 'Alternativ B er riktig. Person B begår et personangrep (ad hominem) ved å rette fokus mot person A i stedet for å vurdere argumentet for kollektivtransport.',
      },
    },

    // ========== OPPGAVE 4: BYGG ARGUMENT ==========
    {
      id: 'norsk-10-6-2-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-2-ex-4',
        number: '6.11',
        type: 'classic',
        difficulty: 'medium',
        task: `Bygg opp et komplett argument med påstand, begrunnelse og belegg for én av følgende påstander:

a) «Alle elever bør lære programmering på skolen.»
b) «Skolen bør servere gratis skolemåltid til alle elever.»
c) «Eksamen i 10. klasse bør avskaffes.»

Skriv argumentet i tre tydelige steg og bruk minst én konkret kilde eller eksempel som belegg.`,
        hints: [
          'Velg den påstanden du synes er mest interessant',
          'Begrunnelsen skal forklare HVORFOR — hva er årsaken til at påstanden er riktig?',
          'Belegget skal BEVISE at begrunnelsen stemmer — bruk tall, forskning eller eksempler',
        ],
        solution: 'Eksempel for b): Påstand: Alle elever bør få gratis skolemåltid. Begrunnelse: Et felles måltid sikrer at alle barn får i seg nok næring, uavhengig av familiens økonomi, og forskning viser at god ernæring forbedrer konsentrasjonen. Belegg: En studie fra Folkehelseinstituttet viser at elever som spiser et næringsrikt måltid midt på dagen, presterer bedre på oppmerksomhetstester. Sverige og Finland har hatt gratis skolemåltid i flere tiår med gode resultater.',
        allowsUpload: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-6-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

Argumentasjon og debatt er grunnleggende ferdigheter i et demokratisk samfunn. Du har lært at:

- Et **argument** består av **påstand** (det du hevder), **begrunnelse** (hvorfor) og **belegg** (bevis)
- **Logiske feilslutninger** som personangrep, stråmann, skråplan, falskt dilemma og appell til flertallet svekker argumentasjonen
- En **debatt** er en strukturert meningsutveksling med regler for saklighet og respekt
- **Sterk argumentasjon** er logisk, underbygget og nyansert
- Å innrømme motstanderens poenger styrker din egen troverdighet
- Debattfraser som «Jeg er enig i at..., men...» viser at du lytter aktivt

Husk: Målet med argumentasjon er ikke å vinne — det er å finne sannheten. Den som er villig til å endre mening når bevisene tilsier det, er den sterkeste debattanten av alle.`,
    },

    // --- Samleoppgaver ---

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-6-2-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-2-ex-5',
        number: '6.12',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Feilslutningsjakt.

Les en avisartikkel, et debattinnlegg eller en politisk tale (fra nett, avis eller TV). Skriv en analyse (200–300 ord) der du:

a) Gir en kort oppsummering av teksten/talen (3–4 setninger)
b) Identifiserer minst to logiske feilslutninger og forklarer hvorfor de er feilslutninger
c) Vurderer om argumentasjonen totalt sett er sterk eller svak
d) Foreslår hvordan argumentasjonen kunne vært forbedret`,
        hints: [
          'Debattinnlegg i aviser (f.eks. Aftenposten Si;D) er gode kilder',
          'Bruk fagbegrepene: personangrep, stråmann, falskt dilemma, skråplan osv.',
          'Selv om en tekst inneholder feilslutninger, kan den også ha sterke argumenter',
        ],
        solution: 'En god analyse identifiserer feilslutninger presist, forklarer hvorfor de er problematiske, og vurderer helheten. For eksempel: «Innlegget bruker et stråmannsargument i avsnitt 2, der motstanderens forslag om mer fysisk aktivitet i skolen framstilles som et forslag om å kutte all teori. I avsnitt 4 brukes appell til flertallet: forfatteren hevder at alle foreldre er enige, uten å dokumentere dette.»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-6-2-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-2-ex-6',
        number: '6.13',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Klassedebatt.

Forbered deg til en klassedebatt om denne påstanden: «Karakterer i ungdomsskolen gjør mer skade enn nytte.»

a) Skriv tre sterke argumenter FOR påstanden (med påstand, begrunnelse og belegg)
b) Skriv tre sterke argumenter MOT påstanden (med påstand, begrunnelse og belegg)
c) Skriv ett motargument til hvert av dine egne argumenter

Du vil bli tildelt en side (for eller mot) i selve debatten — men for å debattere godt, må du forstå begge sider.`,
        hints: [
          'Tenk på konsekvensene: Hva skjer med motivasjon, selvbilde, læringsutbytte?',
          'Bruk konkrete eksempler: Finland, Sverige og andre land uten karakterer i barneskolen',
          'Et godt motargument anerkjenner styrken i det opprinnelige argumentet og peker på en svakhet',
        ],
        solution: 'Eksempel FOR: Påstand: Karakterer skaper angst hos elever. Begrunnelse: Karakterpress fører til stresssymptomer og redusert motivasjon. Belegg: Elevundersøkelsen 2023 viser at 40 % av ungdomsskoleelever opplever karakterrelatert stress. Motargument: Karakterene i seg selv er ikke problemet — problemet kan løses med bedre vurderingspraksis og tettere oppfølging.',
        allowsUpload: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Argument', definition: 'En påstand underbygget med begrunnelse og belegg' },
    { term: 'Påstand', definition: 'Det du hevder eller mener i et argument' },
    { term: 'Begrunnelse', definition: 'Forklaringen på hvorfor påstanden er riktig' },
    { term: 'Belegg', definition: 'Konkret dokumentasjon (forskning, statistikk, eksempler) som støtter begrunnelsen' },
    { term: 'Logisk feilslutning', definition: 'Et argument som ser ut som det er logisk, men inneholder en feil i resonnementet' },
    { term: 'Personangrep (ad hominem)', definition: 'Feilslutning der man angriper personen i stedet for argumentet' },
    { term: 'Stråmannsargument', definition: 'Feilslutning der man forvrenger motstanderens argument og angriper den forvrengte versjonen' },
    { term: 'Falskt dilemma', definition: 'Feilslutning der man framstiller saken som om det bare finnes to muligheter' },
    { term: 'Debatt', definition: 'En strukturert diskusjon der ulike parter argumenterer for sine standpunkter etter fastsatte regler' },
  ],
};

// ============================================================================
// KAPITTEL 6.3: Presentasjonsteknikk
// LK20: Planlegge, utforme og holde muntlige presentasjoner med relevant
//        innhold, struktur og tilpasset språkbruk
// ============================================================================

export const CHAPTER_NORSK_10_6_3: TextbookChapter = {
  id: 'norsk-10-6-3',
  courseId: 'norsk-10',
  chapterNumber: '6.3',
  title: 'Presentasjonsteknikk',
  description: 'Lær hvordan du planlegger, strukturerer og holder engasjerende muntlige presentasjoner med bevisst bruk av kroppsspråk, stemme og visuelle hjelpemidler.',
  estimatedMinutes: 55,
  competenceGoals: [
    'planlegge, utforme og holde muntlige presentasjoner med relevant innhold og klar struktur',
    'bruke kroppsspråk, stemmebruk og visuelle hjelpemidler bevisst og effektivt',
    'tilpasse presentasjoner til formål, mottaker og situasjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-6-3-intro',
      type: 'text',
      content: `## Presentasjonsteknikk: Fra nervøs til overbevisende

Du kjenner det sikkert igjen. Hjertet banker. Hendene svetter. Stemmen skjelver litt. Du står foran klassen og skal holde en presentasjon, og alt du ønsker er at gulvet skal åpne seg og sluke deg hel.

Presentasjonsangst er noe av det mest vanlige blant mennesker — faktisk rangerer mange det høyere enn frykt for edderkopper, høyder og til og med døden. Men her er den gode nyheten: **Presentasjonsteknikk er en ferdighet, ikke et talent.** Det betyr at det kan læres, øves på og mestres.

De beste foredragsholderne i verden — Steve Jobs, Brené Brown, Barack Obama — var ikke «naturtalenter». De øvde. De planla. De testet og forbedret. De brukte konkrete teknikker som du også kan lære.

En god presentasjon handler ikke om å vite mest eller ha flest PowerPoint-slides. Det handler om å **kommunisere tydelig**, **engasjere tilhørerne** og **gjøre innholdet levende**. Og det starter med god planlegging.

I dette kapittelet skal du lære:
- Hvordan du **planlegger** en presentasjon fra start til slutt
- Hvordan du bruker **stemme og kroppsspråk** bevisst
- Regler for gode **visuelle hjelpemidler** (og hva du bør unngå)
- Teknikker for å håndtere **nervøsitet**
- Hvordan du engasjerer publikum og holder oppmerksomheten deres`,
    },

    // ========== DEFINISJON: PRESENTASJONSSTRUKTUR ==========
    {
      id: 'norsk-10-6-3-def-1',
      type: 'definition',
      title: 'Presentasjonens struktur',
      content: `En god presentasjon følger en tydelig **tredelt struktur**:

**1. Innledning (ca. 10–15 % av tiden)**
- Fang oppmerksomheten med en **krok**: et spørsmål, en historie, et overraskende faktum eller et sitat
- Presenter temaet og fortell hva du skal snakke om
- Gi tilhørerne en grunn til å lytte: Hvorfor er dette relevant for dem?

**2. Hoveddel (ca. 70–80 % av tiden)**
- Del innholdet i **2–4 hovedpunkter** (ikke flere — tilhørerne klarer ikke å huske mer)
- Bruk overganger mellom punktene: «Nå har jeg snakket om X. La oss gå videre til Y.»
- Støtt hvert punkt med **eksempler**, **historier** eller **data**
- Varier mellom informasjon og engasjement — ikke snakk monotont i 15 minutter

**3. Avslutning (ca. 10–15 % av tiden)**
- Oppsummer de viktigste poengene
- Avslutt med en sterk avslutning: et sitat, en oppfordring til handling, eller tilbake til kroken fra innledningen
- Takk for oppmerksomheten og inviter til spørsmål

**Huskeregel:** «Fortell dem hva du skal si, si det, og fortell dem hva du sa.»`,
    },

    // ========== EKSEMPEL: GOD vs DÅRLIG INNLEDNING ==========
    {
      id: 'norsk-10-6-3-example-1',
      type: 'example',
      title: 'Eksempel: God vs. dårlig innledning',
      problem: 'Sammenlign disse to innledningene til en presentasjon om klimaendringer.',
      solution: `**Dårlig innledning:**
«Hei. Eh, jeg skal snakke om klimaendringer. Det er et viktig tema. Ja. Så... la oss begynne.»

**Hva er galt?** Ingen krok, ingen energi, ingen grunn for tilhørerne til å lytte. «Viktig tema» er en klisje som ikke engasjerer.

---

**God innledning:**
«I 2050 — altså når dere er 40 år — spår forskere at havnivået vil ha steget så mye at deler av Bergen sentrum kan stå under vann. [Pause.] Høres det drøyt ut? I dag skal jeg vise dere hvorfor dette ikke er science fiction — og hva vi faktisk kan gjøre med det.»

**Hva fungerer?**
- Personlig relevans: «Når dere er 40 år» gjør det konkret for tilhørerne
- Overraskende faktum: Bergen under vann er visuelt og sjokkerende
- Pause etter faktumet: Gir tilhørerne tid til å reagere
- Tydelig veikart: «I dag skal jeg vise dere...» forteller hva som kommer
- Håp: «Hva vi faktisk kan gjøre» gir lytteren grunn til å bli

*Merk: Det retoriske grepet her — å bruke et konkret, dramatisk fremtidsscenario — fungerer uavhengig av om det spesifikke eksempelet er vitenskapelig presist. Poenget er teknikken: å gjøre et abstrakt tema personlig og visuelt for tilhørerne.*

En god innledning tar 30–60 sekunder, men den avgjør om tilhørerne velger å lytte — eller sjekke telefonen.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'norsk-10-6-3-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-3-ex-1',
        number: '6.14',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er det viktigste formålet med innledningen i en presentasjon?',
        options: [
          {
            id: 'a',
            text: 'Å presentere all bakgrunnsinformasjon om temaet',
            isCorrect: false,
            feedback: 'Feil. Bakgrunnsinformasjon hører hjemme i hoveddelen. Innledningen skal fange oppmerksomheten.',
          },
          {
            id: 'b',
            text: 'Å fange oppmerksomheten og gi tilhørerne grunn til å lytte',
            isCorrect: true,
            feedback: 'Riktig! Innledningen skal engasjere, orientere og motivere tilhørerne til å følge med videre.',
          },
          {
            id: 'c',
            text: 'Å be om unnskyldning for eventuelle feil i presentasjonen',
            isCorrect: false,
            feedback: 'Feil. Du bør aldri starte med unnskyldninger — det svekker etos og setter en negativ tone.',
          },
          {
            id: 'd',
            text: 'Å lese opp disposisjonen punkt for punkt',
            isCorrect: false,
            feedback: 'Feil. En stikkordsliste er kjedelig. Innledningen skal engasjere, ikke informere om strukturen i detalj.',
          },
        ],
        solution: 'Alternativ B er riktig. Innledningen skal fange oppmerksomheten og motivere tilhørerne til å lytte. Bruk en krok: spørsmål, historie, sjokkerende fakta eller et sitat.',
      },
    },

    // ========== STEMME OG KROPPSSPRÅK ==========
    {
      id: 'norsk-10-6-3-stemme-kropp',
      type: 'text',
      content: `## Stemme og kroppsspråk — det du sier uten ord

Forskning viser at ordene du bruker, utgjør bare en liten del av kommunikasjonen. Stemmen, kroppsspråket og ansiktsuttrykkene dine forteller ofte mye mer enn selve teksten. I en presentasjon er det derfor like viktig **hvordan** du fremfører innholdet som **hva** du sier.

### Stemmebruk

**Volum:** Snakk høyt nok til at alle hører deg — også de bakerst i rommet. Mange snakker for lavt i presentasjoner fordi de er nervøse. Øv deg på å projisere stemmen uten å rope.

**Tempo:** Varier tempoet. Mange snakker altfor fort når de er nervøse. Senk tempoet bevisst, spesielt ved viktige poenger. Når du sier noe viktig, *sakk ned*.

**Pauser:** Pauser er et av de kraftigste verktøyene du har. En pause etter et viktig poeng gir tilhørerne tid til å tenke. En pause før et poeng skaper forventning. De fleste bruker for få pauser, ikke for mange.

**Intonasjon:** Varier tonefall. En monoton stemme er det sikreste middelet for å miste publikums oppmerksomhet. La stemmen stige og synke naturlig. Entusiasme smitter — hvis du høres engasjert ut, blir tilhørerne engasjerte.

### Kroppsspråk

**Blikk-kontakt:** Se på tilhørerne — ikke på gulvet, veggen eller skjermen. Del blikket mellom ulike deler av rommet. Blikk-kontakt skaper tillit og forbindelse.

**Holdning:** Stå rett, med begge bein på gulvet. Åpen kroppsholdning (ikke armene i kors, ikke hendene i lommene) signaliserer selvtillit og åpenhet.

**Bevegelse:** Bruk rommet. Stå ikke fastfrosset på ett sted. Beveg deg rolig og naturlig — gå mot publikum når du vil understreke et poeng, gå tilbake når du gir dem tenketid.

**Gester:** Bruk hendene til å understreke poenger. Pek, tell på fingrene, vis størrelse. Naturlige gester gjør presentasjonen mer levende. Men unngå nervøse bevegelser (fikle med penner, leke med håret).

### Ting du bør unngå

- Starte med «Ehhh...» eller «Okei, så...»
- Si «Beklager, jeg er litt nervøs» (svekker etos)
- Lese rett fra manus eller PowerPoint-slidene
- Stå med ryggen til publikum
- Snakke til skjermen i stedet for til tilhørerne
- Krysse armene eller holde hendene i lommene hele tiden`,
    },

    // ========== DEFINISJON: VISUELLE HJELPEMIDLER ==========
    {
      id: 'norsk-10-6-3-def-2',
      type: 'definition',
      title: 'Visuelle hjelpemidler — regler for gode lysbilder',
      content: `**Visuelle hjelpemidler** (PowerPoint, Google Slides, Keynote, plakater osv.) skal **støtte** presentasjonen — ikke **erstatte** den. Lysbildene er kulissene, ikke skuespilleren.

**Regelen om 6-6-6:**
- Maks **6 linjer** per lysbilde
- Maks **6 ord** per linje
- Maks **6 teksttunge lysbilder** på rad

**Gode lysbilder:**
- Bruker store, tydelige bilder som illustrerer poenget
- Har lite tekst — bare stikkord eller nøkkelsetninger
- Har konsistent design (samme fonter, farger, layout)
- Bruker kontrast: mørk tekst på lys bakgrunn eller omvendt
- Har én idé per lysbilde

**Dårlige lysbilder:**
- Er fulle av tekst som foredragsholderen leser opp
- Har forvirrende animasjoner og overganger
- Bruker klipp-art og klisjébilder
- Har uleselig skrift (for liten, for fancy, dårlig kontrast)
- Har for mye informasjon — lytteren vet ikke hvor de skal se

**Huskeregel:** Hvis tilhørerne kan lese alt på lysbildene dine og forstå presentasjonen uten deg, trenger de ikke deg. Lysbildene skal gi *lyst* til å lytte — ikke gi svarene.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'norsk-10-6-3-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-3-ex-2',
        number: '6.15',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er det BESTE rådet for bruk av PowerPoint-lysbilder i en presentasjon?',
        options: [
          {
            id: 'a',
            text: 'Skriv alt du skal si på lysbildene, slik at du ikke glemmer noe',
            isCorrect: false,
            feedback: 'Feil. Hvis alt står på lysbildene, vil du lese opp teksten — og publikum leser fortere enn du snakker. Det ødelegger kontakten med tilhørerne.',
          },
          {
            id: 'b',
            text: 'Bruk mange animasjoner og lydeffekter for å gjøre det spennende',
            isCorrect: false,
            feedback: 'Feil. Animasjoner og lydeffekter distraherer oftere enn de engasjerer. Innholdet skal være engasjerende — ikke effektene.',
          },
          {
            id: 'c',
            text: 'Bruk lysbildene som støtte med stikkord og bilder, ikke som manus',
            isCorrect: true,
            feedback: 'Riktig! Lysbildene skal støtte deg, ikke erstatte deg. Bruk store bilder, stikkord og nøkkelsetninger — og fortell resten selv.',
          },
          {
            id: 'd',
            text: 'Ha minst 30 lysbilder for en 10-minutters presentasjon',
            isCorrect: false,
            feedback: 'Feil. 30 lysbilder på 10 minutter betyr ett lysbilde hvert 20. sekund — det er altfor raskt og forvirrende.',
          },
        ],
        solution: 'Alternativ C er riktig. Lysbildene er støtte, ikke manus. Bruk stikkord, bilder og nøkkelsetninger — og la deg selv være presentasjonen.',
      },
    },

    // ========== NERVØSITET ==========
    {
      id: 'norsk-10-6-3-nervositet',
      type: 'text',
      content: `## Nervøsitet — din hemmelige superkraft

La oss være ærlige: Nesten alle er nervøse før en presentasjon. Til og med profesjonelle foredragsholdere og skuespillere opplever sommerfugler i magen. Men her er hemmeligheten: **Nervøsitet og begeistring er nesten det samme fysiologisk.** Hjertet banker, adrenalinet stiger, kroppen gjør seg klar. Forskjellen er bare hvordan du tolker signalene.

I stedet for å tenke «Jeg er redd», prøv å tenke «Jeg er klar.» Det høres enkelt ut, men forskning fra Harvard Business School viser at denne omtolkningen faktisk fungerer. Studenter som sa «Jeg er begeistret» før en presentasjon, presterte bedre enn de som prøvde å roe seg ned.

### Konkrete teknikker mot nervøsitet

**Før presentasjonen:**
1. **Forberedelse er det beste medisinet.** Jo bedre du kan stoffet, desto tryggere føler du deg. Øv minst 3 ganger — helst foran noen.
2. **Visualiser suksess.** Se for deg at presentasjonen går bra. Se deg selv snakke rolig, se tilhørerne nikke.
3. **Pust dypt.** Tre dype pust (inn gjennom nesen, ut gjennom munnen) rett før du begynner.
4. **Kom tidlig.** Kjenn rommet. Stå der du skal stå. Test utstyret.

**Under presentasjonen:**
1. **Start sterkt.** Den første setningen bør du kunne utenat — da slipper du å improvisere når nervene er på topp.
2. **Fokuser på budskapet, ikke på deg selv.** Nervøsiteten forsvinner ofte etter de første 30 sekundene.
3. **Se på vennlige ansikter.** Finn noen i publikum som nikker og smiler, og snakk til dem.
4. **Aksepter nervøsiteten.** Den er normal. Den gjør deg faktisk skarpere og mer fokusert.

**Etter presentasjonen:**
1. **Reflekter over hva som gikk bra** — ikke bare hva som gikk galt.
2. **Be om tilbakemelding.** Konkrete tilbakemeldinger hjelper deg å bli bedre neste gang.`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'norsk-10-6-3-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-3-ex-3',
        number: '6.16',
        type: 'classic',
        difficulty: 'medium',
        task: `Nedenfor er tre eksempler på presentasjonsatferd. Vurder om det er god eller dårlig teknikk, og forklar hvorfor.`,
        subTasks: [
          {
            label: 'a',
            task: 'En elev leser hele presentasjonen direkte fra et manus uten å se opp på klassen.',
            solution: 'Dårlig teknikk. Å lese fra manus ødelegger blikk-kontakten med tilhørerne, gjør stemmen monoton og gir inntrykk av at eleven ikke kan stoffet. Bruk stikkord i stedet, og snakk fritt.',
            multipleChoiceOptions: ['Dårlig teknikk', 'God teknikk', 'Nøytral teknikk', 'Akseptabel teknikk'],
          },
          {
            label: 'b',
            task: 'En elev starter presentasjonen med et overraskende spørsmål til klassen og venter på svar.',
            solution: 'God teknikk. Et spørsmål er en effektiv krok som engasjerer tilhørerne fra starten. Å vente på svar viser at eleven er trygg og inkluderer publikum i presentasjonen.',
            multipleChoiceOptions: ['God teknikk', 'Dårlig teknikk', 'Nøytral teknikk', 'Risikabel teknikk'],
          },
          {
            label: 'c',
            task: 'En elev snakker veldig fort gjennom hele presentasjonen uten pauser.',
            solution: 'Dårlig teknikk. Høyt tempo uten pauser gjør det vanskelig for tilhørerne å følge med og prosessere informasjonen. Pauser er viktige for å la poengene synke inn.',
            multipleChoiceOptions: ['Dårlig teknikk', 'God teknikk', 'Akseptabel teknikk', 'Nøytral teknikk'],
          },
        ],
        solution: 'a) Dårlig — manus ødelegger kontakten med publikum. b) God — spørsmål engasjerer og skaper deltakelse. c) Dårlig — for høyt tempo gir dårlig forståelse.',
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'norsk-10-6-3-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-3-ex-4',
        number: '6.17',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv en engasjerende innledning (50–80 ord) til en presentasjon om ETT av disse temaene:

a) Hvorfor vi bør lese mer
b) Kunstig intelligens i hverdagen
c) Mobbing på nett

Innledningen skal inneholde en «krok» (et spørsmål, en overraskende opplysning eller en kort historie) og avslutte med å fortelle hva presentasjonen handler om.`,
        hints: [
          'Start med noe uventet — ikke «Jeg skal snakke om...»',
          'Gjør temaet personlig og relevant for tilhørerne',
          'Avslutt innledningen med en setning som «I dag skal jeg vise dere...»',
        ],
        solution: 'Eksempel (tema a): «Visste dere at mennesker som leser minst 30 minutter om dagen, lever i gjennomsnitt to år lenger enn de som ikke leser? [Pause.] Og det handler ikke bare om helse. Lesing gjør deg smartere, mer empatisk og bedre til å forstå verden rundt deg. I dag skal jeg fortelle dere tre grunner til at dere bør lese mer — og det handler ikke om norsklekser.»',
        allowsUpload: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-6-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

En god presentasjon krever planlegging, øvelse og bevisst bruk av kommunikasjonsverktøy. Du har lært at:

- En presentasjon har tre deler: **innledning** (fang oppmerksomheten), **hoveddel** (2–4 hovedpunkter) og **avslutning** (oppsummer og avslutt sterkt)
- **Innledningen** er avgjørende — bruk en krok for å engasjere tilhørerne fra starten
- **Stemmebruk** (volum, tempo, pauser, intonasjon) er like viktig som innholdet
- **Kroppsspråk** (blikk-kontakt, holdning, bevegelse, gester) kommuniserer trygghet og engasjement
- **Visuelle hjelpemidler** skal støtte presentasjonen, ikke erstatte den — bruk stikkord og bilder, ikke full tekst
- **Nervøsitet** er normalt og kan omtolkes til positiv energi
- Forberedelse og øvelse er det viktigste du kan gjøre for å lykkes

Husk: Den beste presentasjonen er den der du glemmer at det er en presentasjon — fordi du er så engasjert i det du forteller.`,
    },

    // --- Samleoppgaver ---

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-6-3-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-3-ex-5',
        number: '6.18',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Hold en presentasjon.

Forbered og hold en muntlig presentasjon på 3–5 minutter om et selvvalgt tema. Presentasjonen skal:

a) Ha en tydelig innledning med en krok
b) Inneholde 2–3 hovedpunkter i hoveddelen
c) Avslutte med en sterk avslutning
d) Bruke minst to retoriske virkemidler (f.eks. retorisk spørsmål, trikolon, kontrast)
e) Ha visuelle hjelpemidler (3–5 lysbilder) som følger 6-6-6-regelen

Øv presentasjonen minst to ganger før du holder den.`,
        hints: [
          'Velg et tema du brenner for — entusiasme smitter!',
          'Skriv stikkord, ikke fullstendig manus',
          'Øv foran speilet, en venn eller familien',
          'Ta tiden — sørg for at du holder deg innenfor 3–5 minutter',
        ],
        solution: 'Vurderingskriterier: Innledning med krok (engasjerende start), tydelig struktur (innledning-hoveddel-avslutning), god stemmebruk (variasjon i volum og tempo, pauser), blikk-kontakt med tilhørerne, retoriske virkemidler brukt bevisst, visuelle hjelpemidler som støtter (ikke erstatter) presentasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-6-3-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-3-ex-6',
        number: '6.19',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Vurdering av presentasjon.

Observer en medelevs presentasjon og skriv en tilbakemelding (150–200 ord) der du vurderer:

a) Innledningen: Ble du engasjert? Var det en god krok?
b) Strukturen: Var hoveddelen logisk oppbygd med tydelige overganger?
c) Stemme og kroppsspråk: Var volumet godt, tempoet variert, blikk-kontakten til stede?
d) Visuelle hjelpemidler: Støttet lysbildene presentasjonen, eller distraherte de?
e) Gi minst to konkrete forbedringsforslag

Husk: God tilbakemelding starter med det positive.`,
        hints: [
          'Bruk fagbegrepene fra dette kapittelet: krok, tempo, pauser, blikk-kontakt, 6-6-6-regelen',
          'Vær konkret: «I innledningen fungerte spørsmålet ditt godt fordi...»',
          'Forbedringsforslag bør være gjennomførbare: «Du kunne brukt en pause etter hovedpoenget»',
        ],
        solution: 'En god tilbakemelding er konkret, bruker fagbegreper, balanserer det positive med konstruktive forslag, og gir spesifikke, gjennomførbare tips for forbedring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Krok', definition: 'En engasjerende åpning (spørsmål, historie, overraskende faktum) som fanger tilhørernes oppmerksomhet' },
    { term: 'Presentasjonsstruktur', definition: 'Tredelt oppbygging: innledning, hoveddel og avslutning' },
    { term: 'Blikk-kontakt', definition: 'Å se tilhørerne i øynene under presentasjonen for å skape tillit og forbindelse' },
    { term: '6-6-6-regelen', definition: 'Tommelfingerregel for lysbilder: maks 6 linjer, 6 ord per linje, 6 teksttunge slides på rad' },
    { term: 'Stikkord', definition: 'Korte nøkkelord som minner deg på hva du skal si, i stedet for fullstendig manus' },
    { term: 'Projisering', definition: 'Å snakke høyt og tydelig nok til at alle i rommet hører deg, uten å rope' },
    { term: 'Pauser', definition: 'Bevisst stillhet i presentasjonen som gir tilhørerne tid til å tenke og forsterker viktige poenger' },
    { term: 'Disposisjon', definition: 'Oversikt over presentasjonens oppbygging og rekkefølge' },
  ],
};

// ============================================================================
// KAPITTEL 6.4: Samtale og lytting
// LK20: Delta i faglige samtaler og diskusjoner med saklig argumentasjon
//        og aktiv lytting
// ============================================================================

export const CHAPTER_NORSK_10_6_4: TextbookChapter = {
  id: 'norsk-10-6-4',
  courseId: 'norsk-10',
  chapterNumber: '6.4',
  title: 'Samtale og lytting',
  description: 'Lær om samtaletyper, aktiv lytting, hvordan du stiller gode spørsmål og hva som kjennetegner konstruktive faglige samtaler og diskusjoner.',
  estimatedMinutes: 50,
  competenceGoals: [
    'delta i faglige samtaler og diskusjoner med saklig argumentasjon og aktiv lytting',
    'stille utdypende spørsmål og vise respekt for andres synspunkter',
    'reflektere over egen samtaleatferd og utvikle den bevisst',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-6-4-intro',
      type: 'text',
      content: `## Samtale og lytting: Den undervurderte kunsten

Du snakker med mennesker hele dagen. Med venner, familie, lærere, medelever. Du diskuterer, småprater, forklarer, ler. Men har du noen gang stoppet opp og tenkt over **hvordan** du egentlig snakker — og lytter?

De fleste av oss er overraskende dårlige lyttere. Forskning viser at vi i gjennomsnitt husker bare 25–50 % av det vi hører. Det betyr at når læreren snakker i 10 minutter, kan du ha mistet halvparten av innholdet. Og i en samtale med en venn? Du er kanskje mer opptatt av å tenke på hva *du* skal si neste, enn å faktisk lytte til det *de* sier.

God lytting er en ferdighet. Og god samtale handler ikke bare om å snakke godt — det handler like mye om å **lytte aktivt**, **stille gode spørsmål** og **vise ekte interesse** for det den andre sier. I en faglig samtale eller diskusjon er dette enda viktigere: du skal forstå andre synspunkter, bygge videre på andres ideer og komme frem til nye innsikter sammen.

I dette kapittelet skal du lære:
- Forskjellen mellom ulike **samtaletyper** (hverdagssamtale, fagsamtale, diskusjon)
- Hva **aktiv lytting** betyr og hvordan du øver på det
- Hvordan du stiller **gode spørsmål** som driver samtalen fremover
- Regler for **konstruktive faglige samtaler** i klasserommet`,
    },

    // ========== DEFINISJON: SAMTALETYPER ==========
    {
      id: 'norsk-10-6-4-def-1',
      type: 'definition',
      title: 'Samtaletyper',
      content: `Vi skiller mellom ulike typer samtaler etter formål, struktur og formalitet:

**1. Hverdagssamtale (uformell samtale)**
Den vanligste formen. Fri flyt, ingen regler, personlige emner. Du snakker med venner om helgen, med familien ved middagsbordet, med naboen over gjerdet. Formålet er sosialt: kontakt, hygge, tilhørighet.

**2. Fagsamtale (faglig samtale)**
En samtale med et faglig formål. Dere utforsker et tema, deler kunnskap og bygger forståelse. I klasserommet kan dette være en litterær samtale om en tekst, en drøfting av et samfunnsfaglig spørsmål, eller en gjennomgang av et forsøk i naturfag. Fagsamtalen krever aktiv lytting, bruk av fagbegreper og vilje til å gå i dybden.

**3. Diskusjon**
En samtale der ulike meninger møtes. Deltakerne har forskjellige synspunkter og argumenterer for sine standpunkter. En god diskusjon er saklig og respektfull — den søker forståelse, ikke seier. Forskjellen fra debatt: En diskusjon er mer utforskende og åpen; en debatt er mer formell og konkurransepreget.

**4. Intervju**
Én person stiller spørsmål, en annen svarer. Brukes i journalistikk, forskning og jobbsøking. Intervjueren har forberedte spørsmål, men følger opp svarene med nye spørsmål (oppfølgingsspørsmål).

**Felles for alle:** Alle samtaletyper krever **turtaking** — at deltakerne veksler mellom å snakke og lytte, og at ingen dominerer.`,
    },

    // ========== EKSEMPEL: FAGSAMTALE ==========
    {
      id: 'norsk-10-6-4-example-1',
      type: 'example',
      title: 'Eksempel: God vs. dårlig fagsamtale',
      problem: 'Sammenlign disse to eksemplene på fagsamtaler i klasserommet om temaet «ytringsfrihet».',
      solution: `**Dårlig fagsamtale:**
Elev A: «Ytringsfrihet er viktig.»
Elev B: «Ja, det er det.»
Elev C: «Enig.»
[Stillhet.]
Lærer: «Kan dere utdype?»
Elev A: «Nei, det er liksom bare viktig.»

**Hva er galt?** Ingen utdyper, ingen stiller spørsmål, ingen bygger videre. Samtalen er overfladisk og stopper opp.

---

**God fagsamtale:**
Elev A: «Ytringsfrihet er viktig fordi det er grunnlaget for demokratiet. Uten den kan ikke folk kritisere makthaverne.»
Elev B: «Ja, men det er jo grenser, er det ikke? Hva med hatefulle ytringer — bør de også beskyttes?»
Elev C: «Det er et godt spørsmål. I Norge har vi lovforbud mot hatefulle ytringer, men i USA har de mye videre ytringsfrihet. Kanskje det handler om å finne en balanse?»
Elev A: «Hva mener du med balanse? Hvor går grensen mellom å beskytte ytringsfrihet og å beskytte folk mot hatprat?»

**Hva fungerer?** Elevene utdyper, stiller oppfølgingsspørsmål, bygger videre på hverandres poenger og bringer inn nye perspektiver. De bruker fagbegreper og er nysgjerrige — ikke bare enige.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'norsk-10-6-4-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-4-ex-1',
        number: '6.20',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste forskjellen mellom en fagsamtale og en hverdagssamtale?',
        options: [
          {
            id: 'a',
            text: 'Fagsamtalen har et faglig formål og krever bruk av fagbegreper og aktiv lytting',
            isCorrect: true,
            feedback: 'Riktig! Fagsamtalen har et læringsformål: dere utforsker et tema, bruker fagbegreper og bygger forståelse sammen.',
          },
          {
            id: 'b',
            text: 'Hverdagssamtalen er alltid kjedelig, fagsamtalen er alltid interessant',
            isCorrect: false,
            feedback: 'Feil. Begge typer kan være engasjerende. Forskjellen handler om formål og struktur, ikke om interesse.',
          },
          {
            id: 'c',
            text: 'I en fagsamtale snakker bare læreren',
            isCorrect: false,
            feedback: 'Feil. En fagsamtale er nettopp en samtale — alle deltaker bidrar. Læreren kan lede, men elevene skal være aktive.',
          },
          {
            id: 'd',
            text: 'Hverdagssamtalen har strenge regler, fagsamtalen har ingen',
            isCorrect: false,
            feedback: 'Feil. Det er snarere omvendt: fagsamtalen har tydeligere forventninger om saklighet, utdyping og fagbegreper.',
          },
        ],
        solution: 'Alternativ A er riktig. Fagsamtalen skiller seg ved at den har et faglig formål og stiller krav om dybde, fagbegreper og aktiv lytting.',
      },
    },

    // ========== AKTIV LYTTING ==========
    {
      id: 'norsk-10-6-4-lytting',
      type: 'text',
      content: `## Aktiv lytting — å høre med hele kroppen

De fleste tror at lytting er noe passivt — at du bare sitter stille mens noen andre snakker. Men det finnes en enorm forskjell mellom å **høre** og å **lytte**. Å høre er fysisk — øret fanger opp lyd. Å lytte er mentalt — du forstår, tolker og responderer på det som sies.

**Aktiv lytting** betyr at du lytter med full oppmerksomhet, viser at du lytter, og gir respons som beviser at du har forstått. Det er en bevisst ferdighet som krever øvelse.

### Fem teknikker for aktiv lytting

**1. Vis at du lytter med kroppen**
- Nikk
- Hold blikk-kontakt
- Len deg litt fremover
- Unngå å sjekke telefonen eller se ut av vinduet

**2. Ikke avbryt**
La den andre snakke ferdig. Motestå trangen til å fylle pauser med dine egne tanker. Noen ganger trenger den andre bare litt tid til å tenke.

**3. Parafrasér**
Gjenta det den andre sa med dine egne ord for å vise at du har forstått.
- «Så det du sier, er at…?»
- «Hvis jeg forstår deg riktig, mener du at…?»
- «Du tenker altså at…?»

**4. Still oppfølgingsspørsmål**
Vis at du er interessert ved å grave dypere.
- «Kan du si mer om det?»
- «Hva mener du med…?»
- «Hvorfor tror du det er slik?»
- «Hva tenker du skjer hvis…?»

**5. Oppsummer**
Trekk sammen det som er sagt for å sjekke forståelsen.
- «La meg se om jeg har forstått: Du mener at X, fordi Y, og du synes vi burde Z?»

### Hindringer for god lytting

- **Indre dialog:** Du tenker på hva du selv skal si i stedet for å lytte
- **Forhåndsdømming:** Du har allerede bestemt deg for hva den andre mener, før de er ferdige
- **Distraksjoner:** Telefon, bråk, tretthet
- **Avbrytelser:** Du kutter inn midt i setninger fordi du «vet» hva den andre skal si
- **Selektiv lytting:** Du hører bare det du vil høre, og ignorerer resten`,
    },

    // ========== DEFINISJON: GODE SPØRSMÅL ==========
    {
      id: 'norsk-10-6-4-def-2',
      type: 'definition',
      title: 'Lukkede og åpne spørsmål',
      content: `Spørsmål er motoren i en god samtale. Men alle spørsmål er ikke like. Vi skiller mellom **lukkede** og **åpne** spørsmål.

**Lukkede spørsmål** kan besvares med «ja», «nei» eller et kort faktasvar:
- «Likte du boka?» → «Ja.»
- «Hvem skrev den?» → «Ibsen.»
- «Er du enig?» → «Nei.»

Lukkede spørsmål gir korte svar og stopper samtalen. De er nyttige for å avklare fakta, men de driver ikke samtalen fremover.

**Åpne spørsmål** krever utfyllende svar og inviterer til refleksjon:
- «Hva tenker du om boka?»
- «Hvorfor tror du Ibsen valgte å gi Nora den avslutningen?»
- «Hva mener du er den viktigste forskjellen mellom X og Y?»

Åpne spørsmål starter ofte med **hva**, **hvorfor**, **hvordan** eller **på hvilken måte**. De inviterer til lengre svar, dypere tenkning og mer engasjerende samtaler.

**Oppfølgingsspørsmål** er spørsmål som bygger videre på det som nettopp ble sagt:
- «Du nevnte at… Kan du utdype det?»
- «Hvorfor tror du det er slik?»
- «Hva ville skjedd hvis det motsatte var sant?»

I en fagsamtale bør du bruke **flest mulig åpne spørsmål** og følge opp med oppfølgingsspørsmål.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'norsk-10-6-4-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-4-ex-2',
        number: '6.21',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør om de lukkede spørsmålene til åpne spørsmål.',
        subTasks: [
          {
            label: 'a',
            task: '«Likte du novellen?»',
            solution: '«Hva var dine tanker om novellen?» eller «Hva reagerte du mest på i novellen, og hvorfor?» Et åpent spørsmål inviterer til refleksjon og utdyping, i stedet for et enkelt «ja» eller «nei».',
          },
          {
            label: 'b',
            task: '«Er klimaendringer viktig?»',
            solution: '«Hvorfor tror du klimaendringer er et så omdiskutert tema?» eller «På hvilken måte mener du klimaendringer påvirker hverdagen vår?» Spørsmålet inviterer til drøfting i stedet for bekreftelse.',
          },
          {
            label: 'c',
            task: '«Var presentasjonen god?»',
            solution: '«Hva synes du fungerte best i presentasjonen, og hva kunne vært annerledes?» Spørsmålet tvinger mottakeren til å tenke konkret og nyansert, i stedet for å gi en generell vurdering.',
          },
        ],
        hints: [
          'Åpne spørsmål starter gjerne med hva, hvorfor, hvordan eller på hvilken måte',
          'Prøv å formulere spørsmål som krever mer enn ett ord i svar',
        ],
        solution: 'Åpne spørsmål inviterer til lengre, mer gjennomtenkte svar. De starter gjerne med «hva», «hvorfor» eller «hvordan».',
      },
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'norsk-10-6-4-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-4-ex-3',
        number: '6.22',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «å parafrasere» i en samtale?',
        options: [
          {
            id: 'a',
            text: 'Å gjenta den andres ord ordrett',
            isCorrect: false,
            feedback: 'Feil. Å gjenta ordrett er papegøying, ikke parafrasering. Å parafrasere betyr å gjengi med egne ord.',
          },
          {
            id: 'b',
            text: 'Å gjenta det den andre sa med egne ord for å vise at du har forstått',
            isCorrect: true,
            feedback: 'Riktig! Parafrasering viser at du har lyttet og forstått, og gir den andre mulighet til å korrigere eventuelle misforståelser.',
          },
          {
            id: 'c',
            text: 'Å skifte tema i samtalen',
            isCorrect: false,
            feedback: 'Feil. Å skifte tema er det motsatte av å parafrasere — parafrasering handler om å holde fokus på det som nettopp ble sagt.',
          },
          {
            id: 'd',
            text: 'Å kritisere det den andre sa',
            isCorrect: false,
            feedback: 'Feil. Parafrasering er nøytralt og respektfullt — det handler om forståelse, ikke kritikk.',
          },
        ],
        solution: 'Alternativ B er riktig. Parafrasering betyr å gjenta med egne ord: «Så det du sier, er at...?» Det viser aktiv lytting og sikrer at du har forstått riktig.',
      },
    },

    // ========== KONSTRUKTIV SAMTALE ==========
    {
      id: 'norsk-10-6-4-konstruktiv',
      type: 'text',
      content: `## Regler for konstruktive faglige samtaler

I klasserommet er fagsamtalen et viktig læringsverktøy. Når den fungerer, lærer alle mer — fordi dere tenker sammen, utfordrer hverandre og bygger videre på hverandres ideer. Men for at det skal fungere, trenger dere noen spilleregler.

### Syv regler for gode fagsamtaler

**1. Alle bidrar.** En fagsamtale er ikke en monolog. Alle skal komme til orde — også de som er stille.

**2. Lytt aktivt.** Ikke tenk på hva du selv skal si mens andre snakker. Lytt, forstå, og bygg videre.

**3. Bruk fagbegreper.** I norskfaget betyr det å bruke ord som «appellform», «virkemiddel», «argument», «påstand» — ikke bare «bra» og «fint».

**4. Begrunn meningene dine.** «Jeg synes det» er ikke nok. Forklar *hvorfor* du mener det.

**5. Still spørsmål.** Åpne spørsmål og oppfølgingsspørsmål driver samtalen fremover.

**6. Respekter uenighet.** Du trenger ikke være enig — men du skal behandle den andres synspunkt med respekt. Si «Jeg er uenig fordi...», ikke «Det er dumt.»

**7. Bygg videre.** Den beste samtalen skjer når deltakerne bygger på hverandres ideer: «Det du sa, fikk meg til å tenke at...» eller «Jeg er enig i deler av det, men vil legge til at...»

### Nyttige samtalefraser

- «Kan du utdype det?»
- «Hva mener du med...?»
- «Jeg er enig i at X, men jeg tenker også at Y...»
- «Det du sa, minner meg om...»
- «Hva ville skjedd hvis...?»
- «La meg bygge videre på det du sa...»
- «Ser du noen motargumenter?»`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'norsk-10-6-4-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-4-ex-4',
        number: '6.23',
        type: 'classic',
        difficulty: 'medium',
        task: `Øvelse i aktiv lytting og oppfølgingsspørsmål.

Jobb i par. Én person snakker i 2 minutter om et selvvalgt tema (f.eks. en hobby, en film, en drøm for framtiden). Den andre lytter uten å avbryte.

Etterpå skal lytteren:
a) Parafrasere: «Så det du fortalte, var at...?»
b) Stille tre åpne oppfølgingsspørsmål
c) Reflektere: Hva var den vanskeligste delen av å lytte uten å avbryte?

Bytt roller og gjenta.`,
        hints: [
          'Som lytter: Nikk, hold blikk-kontakt og la den andre snakke ferdig',
          'Oppfølgingsspørsmål: «Hvorfor er det viktig for deg?», «Hva liker du mest med...?», «Hvordan startet du med...?»',
          'Refleksjon: Var det fristende å avbryte? Tenkte du på hva du selv ville si?',
        ],
        solution: 'Øvelsen trener aktiv lytting i praksis. Mange opplever at det er overraskende vanskelig å lytte i to minutter uten å avbryte. Refleksjonen etterpå skal synliggjøre egne lyttevaner og hva som kan forbedres.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-6-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

Samtale og lytting er grunnleggende ferdigheter som vi sjelden lærer bevisst — men som gjør en enorm forskjell. Du har lært at:

- Det finnes ulike **samtaletyper**: hverdagssamtale, fagsamtale, diskusjon og intervju
- **Aktiv lytting** betyr å lytte med full oppmerksomhet, vise at du lytter, og gi respons
- De fem teknikkene for aktiv lytting er: vis med kroppen, ikke avbryt, parafrasér, still oppfølgingsspørsmål og oppsummer
- **Åpne spørsmål** (hva, hvorfor, hvordan) driver samtalen fremover, mens lukkede spørsmål stopper den
- **Parafrasering** («Så det du sier, er...?») sikrer forståelse og viser respekt
- Gode fagsamtaler krever at alle bidrar, bruker fagbegreper, begrunner meningene sine og bygger videre på hverandre

Husk: Den beste samtalepartneren er ikke den som snakker mest — det er den som lytter best.`,
    },

    // --- Samleoppgaver ---

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-6-4-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-4-ex-5',
        number: '6.24',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Lyttelogg.

I løpet av én skoledag, legg merke til tre samtaler du er i (med venner, familie, lærere eller medelever). For hver samtale, noter:

a) Hvem snakket du med, og hva var temaet?
b) Var det en hverdagssamtale, fagsamtale eller diskusjon?
c) Vurder din egen lytting: Lyttet du aktivt, eller var du distrahert? Avbrøt du?
d) Hva kunne du gjort annerledes for å lytte bedre?

Skriv en refleksjonstekst (200–300 ord) om hva du oppdaget om dine egne lyttevaner.`,
        hints: [
          'Ikke dømme deg selv — dette er en læringsprosess',
          'Vær ærlig: Mange oppdager at de avbryter mer enn de tror',
          'Tenk på hva du kan gjøre annerledes i morgen',
        ],
        solution: 'En god lyttelogg er ærlig og reflektert. Mange oppdager at de er mer opptatt av å tenke på hva de selv skal si enn av å lytte. Målet er bevisstgjøring: Når du vet hva du gjør, kan du endre det.',
        allowsUpload: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-6-4-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-4-ex-6',
        number: '6.25',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Sokratisk samtale.

I grupper på 3–4 elever: Gjennomfør en fagsamtale om ETT av disse temaene i 10 minutter:

a) «Er det riktig å lyve for å beskytte noen?»
b) «Bør teknologigiganter som Google og Meta reguleres strengere?»
c) «Har alle mennesker et ansvar for å hjelpe fremmede i nød?»

Regler:
- Ingen skal dominere samtalen — alle bidrar
- Still minst to oppfølgingsspørsmål til de andre
- Bruk minst én parafrasering: «Så det du mener, er at...?»
- Begrunn alle meninger — «fordi» er det viktigste ordet

Etter samtalen: Skriv en kort refleksjon (100 ord) om hva som fungerte godt i samtalen og hva dere kunne gjort bedre.`,
        hints: [
          'I en sokratisk samtale er målet å utforske — ikke å vinne',
          'Bruk frasene fra kapittelet: «Kan du utdype det?», «Hva mener du med...?»',
          'Sørg for at alle i gruppen har kommet til orde',
        ],
        solution: 'En vellykket sokratisk samtale kjennetegnes av at deltakerne utforsker temaet fra flere sider, stiller hverandre spørsmål, og utvikler tankene sine gjennom samtalen. Det er ikke viktig at dere blir enige — det er viktig at dere tenker dypere enn da dere startet.',
        allowsUpload: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Aktiv lytting', definition: 'Å lytte med full oppmerksomhet, vise at du lytter, og gi respons som viser forståelse' },
    { term: 'Parafrasering', definition: 'Å gjenta det den andre sa med egne ord for å bekrefte forståelse' },
    { term: 'Åpne spørsmål', definition: 'Spørsmål som krever utfyllende svar og inviterer til refleksjon (hva, hvorfor, hvordan)' },
    { term: 'Lukkede spørsmål', definition: 'Spørsmål som kan besvares med ja, nei eller et kort faktasvar' },
    { term: 'Oppfølgingsspørsmål', definition: 'Spørsmål som bygger videre på det som nettopp ble sagt for å utdype forståelsen' },
    { term: 'Turtaking', definition: 'At samtaledeltakerne veksler mellom å snakke og lytte, slik at alle får komme til orde' },
    { term: 'Fagsamtale', definition: 'En samtale med faglig formål der deltakerne utforsker et tema med fagbegreper og dybde' },
    { term: 'Sokratisk samtale', definition: 'Utforskende samtale der deltakerne stiller spørsmål for å komme dypere inn i et tema' },
  ],
};

// ============================================================================
// KAPITTEL 6.5: Taler som forandret verden
// LK20: Lese og analysere historiske og samtidige tekster og vurdere hvordan
//        de påvirker og blir påvirket av sin kontekst
// ============================================================================

export const CHAPTER_NORSK_10_6_5: TextbookChapter = {
  id: 'norsk-10-6-5',
  courseId: 'norsk-10',
  chapterNumber: '6.5',
  title: 'Taler som forandret verden',
  description: 'Analyser kjente taler fra ulike epoker og kontekster — fra Martin Luther King til Greta Thunberg — og forstå hva som gjør en tale retorisk kraftfull.',
  estimatedMinutes: 60,
  competenceGoals: [
    'lese og analysere historiske og samtidige tekster i lys av sin kontekst',
    'bruke retoriske begreper til å analysere taler og vurdere deres virkning',
    'reflektere over hvordan språk og retorikk kan brukes til å påvirke samfunn og mennesker',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-6-5-intro',
      type: 'text',
      content: `## Taler som forandret verden

Noen taler er mer enn ord. De er vendepunkter i historien — øyeblikk der en enkelt person sto opp og sa noe som forandret alt. Ikke fordi de hadde våpen eller penger, men fordi de hadde **ord**.

«I have a dream.» Fire ord som definerte borgerrettighetsbevegelsen. «We shall fight on the beaches.» En tale som holdt en hel nasjon sammen under krig. «How dare you.» Tre ord fra en tenåring som rystet verdens ledere.

Hva gjør en tale historisk? Hvorfor husker vi noen taler i hundrevis av år, mens andre er glemt før kvelden er omme? Svaret handler om en kombinasjon av **innhold**, **kontekst** og **retorikk**. De beste talene sier noe viktig, i riktig øyeblikk, på riktig måte.

I dette kapittelet skal du studere noen av historiens mest berømte taler. Du skal bruke de retoriske begrepene du har lært — etos, patos, logos, retoriske virkemidler — til å forstå **hvorfor** disse talene virket. Og du skal reflektere over hvordan ord kan forandre verden.

I dette kapittelet skal du lære:
- Analysere historiske taler med retoriske begreper
- Forstå betydningen av **kairos** — det rette øyeblikket
- Se sammenhengen mellom tale, **kontekst** og **virkning**
- Reflektere over ordets makt i samfunnet`,
    },

    // ========== DEFINISJON: KAIROS ==========
    {
      id: 'norsk-10-6-5-def-1',
      type: 'definition',
      title: 'Kairos — det rette øyeblikket',
      content: `**Kairos** er et retorisk begrep som betyr «det rette øyeblikket» — tidspunktet der en tale eller et budskap har størst mulig virkning.

En tale som er strålende i én situasjon, kan falle helt flat i en annen. Innholdet kan være det samme, men **konteksten** gjør hele forskjellen.

**Kairos handler om:**
- **Timing:** Er dette riktig tidspunkt for dette budskapet?
- **Situasjon:** Hva skjer i samfunnet akkurat nå? Hvilke følelser er i spill?
- **Publikum:** Er tilhørerne klare til å høre dette? Er de engasjerte, sinte, redde?
- **Medium:** Er dette budskapet best fremført som tale, skrift, video eller noe annet?

**Eksempler på kairos:**
- Martin Luther Kings «I Have a Dream»-tale ble holdt under marsjen mot Washington i 1963, da 250 000 mennesker var samlet og borgerrettighetsbevegelsen var på sitt sterkeste. Talen traff et kairos-øyeblikk.
- Winston Churchills «We shall fight on the beaches»-tale ble holdt etter evakueringen fra Dunkirk i 1940, da Storbritannia sto alene mot Nazi-Tyskland. Folket trengte håp — og Churchill ga dem det.
- Greta Thunbergs tale til FN i 2019 kom på et tidspunkt der klimabevisstheten var høyere enn noen gang, men handlingen uteble. Frustrasjonen hennes traff et kairos-øyeblikk.

**Huskeregel:** Kairos handler om å si riktig ting, til riktige mennesker, på riktig tidspunkt. En perfekt tale levert i feil øyeblikk, er en bortkastet tale.`,
    },

    // ========== TALE 1: MARTIN LUTHER KING ==========
    {
      id: 'norsk-10-6-5-mlk',
      type: 'text',
      content: `## «I Have a Dream» — Martin Luther King Jr. (1963)

Den 28. august 1963 sto Martin Luther King Jr. foran Lincoln Memorial i Washington D.C. Foran ham strakte et hav av 250 000 mennesker seg utover National Mall. De var kommet for å marsjere for borgerrettigheter — for likhet, frihet og rettferdighet i et USA preget av rasesegregering.

King var siste taler, og folkemengden var sliten etter en lang dag. Men da han begynte å snakke, ble alt stille. Og da han nådde den berømte avslutningen — «I have a dream...» — forandret alt seg.

### Utdrag fra talen

*«I have a dream that one day this nation will rise up and live out the true meaning of its creed: 'We hold these truths to be self-evident, that all men are created equal.'*

*I have a dream that one day on the red hills of Georgia, the sons of former slaves and the sons of former slave owners will be able to sit down together at the table of brotherhood.*

*I have a dream that my four little children will one day live in a nation where they will not be judged by the color of their skin but by the content of their character.*

*I have a dream today!»*

### Retorisk analyse

**Etos:** King var allerede en anerkjent borgerrettighetsleder. Hans rolle som pastor ga ham moralsk autoritet. Han refererte til den amerikanske uavhengighetserklæringen — og knyttet dermed kampen til USAs grunnverdier.

**Patos:** Hele talen er bygd på patos. Kings visjon om en fremtid der barn ikke dømmes etter hudfarge, vekker håp, medfølelse og rettferdighetssinne. Bildet av «four little children» gjør budskapet personlig og gripende.

**Logos:** King viste til den amerikanske uavhengighetserklæringens løfte om at «alle mennesker er skapt like» — og påpekte at dette løftet ikke var innfridd for svarte amerikanere. Argumentet er logisk: Hvis USA mener alvor med sine grunnverdier, må rasesegregeringen opphøre.

**Retoriske virkemidler:**
- **Gjentakelse (anafor):** «I have a dream...» gjentas ni ganger. Det skaper rytme, forventning og emosjonell intensitet.
- **Metafor:** «The table of brotherhood» — brorskap som et fellesmåltid.
- **Alliterasjon:** «Content of their character» — konsonantenes gjentakelse skaper en minneverdig frase.
- **Kontrast:** «Not by the color of their skin but by the content of their character.»
- **Kairos:** Talen ble holdt på det perfekte tidspunktet — under den største borgerrettighetsdemonstrasjonenen i USAs historie.`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'norsk-10-6-5-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-5-ex-1',
        number: '6.26',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilket retorisk virkemiddel er mest fremtredende i Kings «I Have a Dream»-tale?',
        options: [
          {
            id: 'a',
            text: 'Ironi — King sier det motsatte av det han mener',
            isCorrect: false,
            feedback: 'Feil. King bruker ikke ironi. Budskapet hans er direkte og ærlig — han beskriver en drøm han virkelig har.',
          },
          {
            id: 'b',
            text: 'Gjentakelse (anafor) — «I have a dream» gjentas mange ganger',
            isCorrect: true,
            feedback: 'Riktig! Anafor — gjentakelse av en frase i begynnelsen av påfølgende setninger — er det mest fremtredende virkemiddelet. Det skaper rytme, forsterkelse og emosjonell kraft.',
          },
          {
            id: 'c',
            text: 'Overdrivelse (hyperbol) — King overdriver for dramatisk effekt',
            isCorrect: false,
            feedback: 'Feil. King overdriver ikke — han beskriver en konkret drøm om likhet. Visjonen er ambisiøs, men ikke overdrevet.',
          },
          {
            id: 'd',
            text: 'Appell til autoritet — King viser til eksperter',
            isCorrect: false,
            feedback: 'Delvis riktig i at han refererer til den amerikanske grunnloven, men det mest fremtredende virkemiddelet er gjentakelsen.',
          },
        ],
        solution: 'Alternativ B er riktig. Anafor — gjentakelse av «I have a dream» — er talens signaturvirkemiddel, og det som gjør den så minneverdig.',
      },
    },

    // ========== TALE 2: GRETA THUNBERG ==========
    {
      id: 'norsk-10-6-5-greta',
      type: 'text',
      content: `## «How dare you» — Greta Thunberg (2019)

Den 23. september 2019 sto en 16 år gammel svensk jente foran FNs klimatoppmøte i New York. Stemmen skalv av sinne. Øynene var våte. Hun så rett på verdens ledere og sa:

### Utdrag fra talen

*«This is all wrong. I shouldn't be up here. I should be back in school on the other side of the ocean. Yet you all come to us young people for hope. How dare you!*

*You have stolen my dreams and my childhood with your empty words. And yet I'm one of the lucky ones. People are suffering. People are dying. Entire ecosystems are collapsing. We are in the beginning of a mass extinction, and all you can talk about is money and fairy tales of eternal economic growth. How dare you!»*

### Retorisk analyse

**Etos:** Thunberg hadde allerede startet «Skolstrejk för klimatet» og blitt en global symbol. Men hennes etos er uvanlig — den bygger ikke på autoritet eller ekspertise, men på **autentisitet og sårbarhet**. Hun fremstår som en ung person uten makt, og dette styrker hennes troverdighet hos tilhørerne — de opplever henne som autentisk og uten skjulte motiver.

**Patos:** Talen er nesten ren patos. Sinne, frustrasjon, sorg, anklage. «You have stolen my dreams and my childhood.» Ordene treffer fordi de kommer fra en person som tilhørerne oppfatter som direkte berørt. Thunberg bruker sin egen alder som retorisk argument — hun representerer generasjonen som vil arve konsekvensene.

**Logos:** «Entire ecosystems are collapsing. We are in the beginning of a mass extinction.» Thunberg refererer til vitenskapelig konsensus uten å sitere spesifikke studier. Logos er til stede, men underordnet patos.

**Retoriske virkemidler:**
- **Gjentakelse:** «How dare you» gjentas som et hamrende anklage-refreng
- **Kontrast:** «I should be back in school» vs. «yet you all come to us young people for hope» — motsetningen mellom barn og voksne, ansvar og svikt
- **Retorisk spørsmål:** «How dare you?» er et retorisk spørsmål som krever ettertanke, ikke svar
- **Ironi:** «Fairy tales of eternal economic growth» — «eventyr» brukt sarkastisk
- **Kairos:** Talen kom på et tidspunkt med økende klimabevissthet, globale klimastreiker og frustrasjon over manglende handling. Thunbergs sinne representerte en hel generasjons frustrasjon.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'norsk-10-6-5-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-5-ex-2',
        number: '6.27',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign talene til Martin Luther King og Greta Thunberg.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilken appellform dominerer i Kings tale, og hvilken dominerer i Thunbergs tale?',
            solution: 'Kings tale har en sterk blanding av patos og logos — han veksler mellom emosjonelle visjoner og logiske referanser til grunnloven. Thunbergs tale domineres av patos — sinne, frustrasjon og anklage. Hun bruker noe logos, men det er underordnet følelsene.',
          },
          {
            label: 'b',
            task: 'Begge bruker gjentakelse. Hva gjentas i hver tale, og hvilken effekt har det?',
            solution: 'King gjentar «I have a dream» — det skaper håp og visjon, en positiv framtidsfølelse. Thunberg gjentar «How dare you» — det skaper sinne og anklage, en negativ kritikk av nåtiden. Begge bruker gjentakelse for emosjonell kraft, men med motsatt følelsesretning.',
          },
          {
            label: 'c',
            task: 'Hvordan spiller kairos en rolle i begge talene?',
            solution: 'Begge talene ble holdt på det perfekte tidspunktet. King talte under den største borgerrettighetsdemonstrasjon i USAs historie, da øyeblikket krevde en visjon. Thunberg talte under et klimatoppmøte der verdens ledere var samlet men handlet for sakte, og da global klimafrustrasjon var på topp. Begge utnyttet kairos mesterlig.',
          },
        ],
        hints: [
          'Tenk på tone: King er inspirerende og håpefull, Thunberg er sint og anklagende',
          'Begge bruker kontrast — men på ulike måter',
        ],
        solution: 'Taleene viser to ulike retoriske strategier: King inspirerer med drømmer (håp), Thunberg konfronterer med sinne (frustrasjon). Begge er effektive fordi de treffer kairos og bruker retoriske virkemidler bevisst.',
      },
    },

    // ========== FLERE HISTORISKE TALER ==========
    {
      id: 'norsk-10-6-5-flere-taler',
      type: 'text',
      content: `## Flere taler verdt å kjenne

### Winston Churchill: «We shall fight on the beaches» (1940)

Kontekst: Storbritannia hadde nettopp evakuert 338 000 soldater fra Dunkirk i Frankrike. Situasjonen var desperat — Nazi-Tyskland kontrollerte store deler av Europa, og Storbritannia sto nesten alene. Churchill sto opp i Parlamentet og holdt en tale som ga britene styrke til å kjempe videre.

**Nøkkelpassasje:** *«We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender.»*

**Retorisk grep:** Anafor («we shall fight...» x5) + klimaks (opptrapping mot «we shall never surrender»). Talen bygger tempo og intensitet gjennom gjentakelse, inntil den ender i en absolutt konklusjon.

### Nelson Mandela: Tale ved løslatelsen (1990)

Kontekst: Etter 27 år i fengsel ble Nelson Mandela løslatt den 11. februar 1990. Han sto foran en enorm folkemengde i Cape Town og holdt en tale som ikke handlet om hevn — men om forsoning.

**Nøkkelbudskap:** Mandela brukte sin etos — 27 år i fengsel for det han trodde på — til å argumentere for fred og samarbeid, ikke for straff mot undertrykkerne. Hans budskap var: Vi har lidd nok. Nå bygger vi sammen.

**Retorisk styrke:** Etos som grunnlag for alt. Hvem annen enn en mann som har sittet 27 år i fengsel, har troverdighet til å si «la oss tilgi»?

### Malala Yousafzai: Tale til FN (2013)

Kontekst: Malala, da 16 år gammel, talte til FN etter å ha overlevd et attentat av Taliban for sitt engasjement for jenters utdanning. Hun hadde blitt skutt i hodet på vei hjem fra skolen.

**Nøkkelpassasje:** *«One child, one teacher, one book, one pen can change the world.»*

**Retorisk grep:** Trikolon utvides til et kvartett, men den rytmiske enkelheten gjør det minneverdig. Mandela-lignende etos: Personlig lidelse gir moralsk autoritet. Patos: En jente som nesten ble drept for å ville gå på skole — hvem kan argumentere mot det?`,
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'norsk-10-6-5-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-5-ex-3',
        number: '6.28',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva gir Nelson Mandela særlig sterk etos i talen sin etter løslatelsen?',
        options: [
          {
            id: 'a',
            text: 'At han var utdannet advokat',
            isCorrect: false,
            feedback: 'Mandela var utdannet advokat, men det er ikke hovedkilden til hans etos i denne sammenhengen.',
          },
          {
            id: 'b',
            text: 'At han brukte mange vitenskapelige kilder i talen',
            isCorrect: false,
            feedback: 'Feil. Mandelas etos bygger ikke på forskning, men på personlig erfaring og moralsk autoritet.',
          },
          {
            id: 'c',
            text: 'At han satt 27 år i fengsel for sine overbevisninger og likevel talte om forsoning, ikke hevn',
            isCorrect: true,
            feedback: 'Riktig! 27 års fengsling for kampen mot apartheid ga Mandela enorm moralsk autoritet. At han valgte forsoning fremfor hevn, styrket troverdigheten hans enormt.',
          },
          {
            id: 'd',
            text: 'At han snakket veldig høyt og tydelig',
            isCorrect: false,
            feedback: 'Feil. Volum og tydelighet handler om actio (fremføring), ikke om etos (troverdighet).',
          },
        ],
        solution: 'Alternativ C er riktig. Mandelas 27 år i fengsel og hans valg om forsoning fremfor hevn ga ham en etos som ingen annen taler i moderne tid kan matche.',
      },
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'norsk-10-6-5-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-5-ex-4',
        number: '6.29',
        type: 'classic',
        difficulty: 'medium',
        task: `Identifiser de retoriske virkemidlene i disse utdragene fra berømte taler. Forklar virkningen av hvert virkemiddel.`,
        subTasks: [
          {
            label: 'a',
            task: 'Churchill: «We shall fight on the beaches, we shall fight on the landing grounds, we shall fight in the fields and in the streets, we shall fight in the hills; we shall never surrender.»',
            solution: 'Anafor (gjentakelse av «we shall fight»): Skaper en hamrende rytme som bygger intensitet og besluttsomhet. Klimaks: Opptrappingen ender i «we shall never surrender» — den sterkeste og mest absolutte formuleringen. Effekten er en følelse av ustoppelig vilje.',
          },
          {
            label: 'b',
            task: 'Malala: «One child, one teacher, one book, one pen can change the world.»',
            solution: 'Trikolon utvidet til fire elementer (kvartett), med gjentakelse av «one». Virkning: Den rytmiske gjentakelsen av «one» understreker at forandring starter med enkeltmennesker og enkle ting. «Can change the world» er en kraftig kontrast til det enkle — noe lite kan gjøre noe enormt.',
          },
        ],
        hints: [
          'Se etter gjentakelse, oppbygging (klimaks), kontrast og rytme',
          'Tenk på hva virkemiddelet gjør med lytteren — hvilken følelse skaper det?',
        ],
        solution: 'a) Anafor og klimaks — skaper ustoppelig besluttsomhet. b) Gjentakelse og kontrast (lite vs. stort) — understreker at individet kan forandre verden.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-6-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

Taler kan forandre verden — og de beste talene i historien viser oss hvorfor ord har makt. Du har lært at:

- **Kairos** (det rette øyeblikket) er avgjørende — selv den beste talen trenger riktig timing og kontekst
- Martin Luther Kings tale bruker **anafor** («I have a dream»), **metafor** og en kombinasjon av **patos og logos** for å inspirere
- Greta Thunbergs tale bruker **sinne**, **kontrast** og **retoriske spørsmål** for å konfrontere og anklage
- Winston Churchills tale bruker **anafor og klimaks** for å bygge besluttsomhet
- Nelson Mandelas **etos** — 27 år i fengsel — ga hans budskap om forsoning enorm troverdighet
- Malalas tale bruker **enkelhet og gjentakelse** for å vise at forandring starter med individet
- De beste talene kombinerer retoriske virkemidler med **autentisitet** og et budskap som treffer sin tid

Husk: Du trenger ikke være president eller aktivist for å holde en tale som betyr noe. Hver gang du står opp og sier noe du mener, bruker du ordets makt.`,
    },

    // --- Samleoppgaver ---

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-6-5-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-5-ex-5',
        number: '6.30',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Retorisk analyse av en tale.

Velg en av talene fra dette kapittelet (King, Thunberg, Churchill, Mandela eller Malala) og skriv en retorisk analyse (300–400 ord) der du:

a) Beskriver den retoriske situasjonen (avsender, mottaker, kontekst, kairos)
b) Analyserer bruken av etos, patos og logos — hvilken appellform dominerer?
c) Identifiserer og forklarer minst tre retoriske virkemidler
d) Vurderer talens virkning — hvorfor ble den historisk?`,
        hints: [
          'Start med konteksten — hva skjedde i verden da talen ble holdt?',
          'Bruk konkrete eksempler fra talen: sitater, bilder, formuleringer',
          'Avslutt med din egen vurdering: Hva gjør denne talen tidløs?',
        ],
        solution: 'En god analyse knytter retoriske begreper til konkrete eksempler fra talen og vurderer virkningen i lys av konteksten. Eksempel: «Kings bruk av anafor (I have a dream) skaper en hypnotisk rytme som bygger emosjonell intensitet for hvert nye bilde. Konteksten — 250 000 mennesker samlet i Washington — ga talen et kairos-øyeblikk der ordene fikk historisk tyngde.»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-6-5-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-5-ex-6',
        number: '6.31',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Din egen tale.

Skriv og fremfør en kort tale (1–2 minutter) om noe du brenner for. Talen skal:

a) Ha en klar retorisk situasjon: Hvem snakker du til, og hva vil du oppnå?
b) Bruke alle tre appellformene (etos, patos, logos)
c) Inneholde minst tre retoriske virkemidler (gjentakelse, trikolon, kontrast, retorisk spørsmål osv.)
d) Ha en sterk innledning og en sterk avslutning

Etter fremføringen: Skriv en kort refleksjon (100 ord) om hvilke retoriske grep du brukte bevisst.`,
        hints: [
          'Velg et tema du har sterke meninger om — ekthet smitter',
          'Planlegg virkemidlene på forhånd — merk dem i manuset ditt',
          'Øv talen høyt minst tre ganger',
          'Husk pauser — de er ditt kraftigste virkemiddel',
        ],
        solution: 'Vurderingskriterier: Klar retorisk situasjon, bevisst bruk av etos/patos/logos, minst tre retoriske virkemidler, engasjerende innledning og avslutning, god fremføring (blikk-kontakt, variasjon i stemme, pauser).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Kairos', definition: 'Det rette øyeblikket — tidspunktet der et budskap har størst mulig virkning i sin kontekst' },
    { term: 'Anafor', definition: 'Gjentakelse av et ord eller en frase i begynnelsen av påfølgende setninger for rytmisk og forsterkende effekt' },
    { term: 'Klimaks (retorisk)', definition: 'Opptrapping der argumenter eller bilder presenteres i stigende intensitet mot et høydepunkt' },
    { term: 'Kontekst', definition: 'Omstendighetene rundt en tale eller tekst: tid, sted, historisk situasjon og publikum' },
    { term: 'Autentisitet', definition: 'Ekthet og oppriktighet — at taleren mener det han eller hun sier, og at dette er synlig for publikum' },
    { term: 'Allitterasjon', definition: 'Gjentakelse av konsonantlyd i begynnelsen av ord som står nær hverandre (f.eks. «content of their character»)' },
    { term: 'Anafor vs. epifor', definition: 'Anafor er gjentakelse i begynnelsen av setninger, epifor er gjentakelse i slutten av setninger' },
  ],
};

// ============================================================================
// KAPITTEL 6.6: Retorikk i sosiale medier
// LK20: Vurdere og reflektere over retoriske virkemidler og argumentasjon
//        i digitale tekster og medier
// ============================================================================

export const CHAPTER_NORSK_10_6_6: TextbookChapter = {
  id: 'norsk-10-6-6',
  courseId: 'norsk-10',
  chapterNumber: '6.6',
  title: 'Retorikk i sosiale medier',
  description: 'Forstå hvordan retorikk brukes i sosiale medier, fra influencere og reklame til politisk kommunikasjon og desinformasjon — og lær å gjennomskue det.',
  estimatedMinutes: 55,
  competenceGoals: [
    'vurdere og reflektere over retoriske virkemidler og argumentasjon i digitale tekster',
    'analysere hvordan sosiale medier bruker retoriske grep for å påvirke',
    'utvikle kritisk medieforståelse og gjenkjenne desinformasjon og manipulasjon',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-6-6-intro',
      type: 'text',
      content: `## Retorikk i sosiale medier: Overbevisningens nye slagmark

Aristoteles hadde aldri hørt om Instagram. Churchill hadde aldri sett en TikTok. Likevel er retorikken deres like relevant i dag som for 2500 år siden — kanskje mer relevant enn noen gang.

Sosiale medier er den største retoriske arenaen i menneskehetens historie. Milliarder av mennesker produserer og konsumerer overbevisende innhold hver eneste dag. Influencere anbefaler produkter. Politikere sprer budskap. Aktivister mobiliserer. Trollfabrikker manipulerer. Algoritmer bestemmer hva du ser.

Men her er det som gjør sosiale medier spesielt utfordrende: **Retorikken er ofte usynlig.** Når du hører en politisk tale, vet du at noen prøver å overbevise deg. Men når en influencer uformelt nevner et produkt i en «dag i livet mitt»-video, føles det ikke som reklame — selv om det er nøyaktig det. Når en nyhet deles med et emosjonelt bilde og en sjokkerende overskrift, stopper du kanskje ikke opp og tenker: «Vent — prøver noen å manipulere meg?»

I dette kapittelet skal du lære å bruke de retoriske verktøyene du har lært, til å **gjennomskue** overbevisende kommunikasjon i sosiale medier. Det handler ikke om å bli kynisk — det handler om å bli bevisst.

I dette kapittelet skal du lære:
- Hvordan **influencere** bruker etos, patos og logos
- Hva **skjult reklame** er og hvordan du gjenkjenner den
- Hvordan **desinformasjon** og **propaganda** fungerer retorisk
- Hva **algoritmer** gjør med din tilgang til informasjon
- Hvordan du blir en **kritisk mediebruker**`,
    },

    // ========== DEFINISJON: RETORIKK I DIGITALE MEDIER ==========
    {
      id: 'norsk-10-6-6-def-1',
      type: 'definition',
      title: 'Retorikk i sosiale medier',
      content: `**Retorikk i sosiale medier** betyr bruk av overbevisende kommunikasjon i digitale plattformer som Instagram, TikTok, YouTube, Snapchat, X (Twitter), Facebook og andre.

**Kjennetegn ved retorikk i sosiale medier:**

- **Kort format:** Budskapet må overbevise på sekunder, ikke minutter. Overskrifter, bilder og korte videoer dominerer.
- **Visuell dominans:** Bilder og videoer er mer overbevisende enn tekst i sosiale medier. En visuell appell til patos (et følelsesladet bilde) sprer seg raskere enn et logisk argument.
- **Personlig tone:** Avsenderen fremstår ofte som en «venn» — uformelt språk, du-form, personlige historier. Det bygger etos gjennom identifikasjon.
- **Algoritme-styrt:** Du ser ikke alt innhold — algoritmene velger hva du får se basert på hva som holder deg engasjert. Engasjerende innhold er ofte emosjonelt (patos).
- **Skjult avsender:** Det er ikke alltid tydelig hvem som snakker. Er dette redaksjonelt innhold, betalt reklame eller propaganda?
- **Deling som retorisk kraft:** Innhold som deles, får sosial validering. «100 000 har delt dette» fungerer som en appell til flertallet (ad populum).

**Viktig:** Retorikk i sosiale medier er ikke nødvendigvis negativt. Det er et verktøy. Aktivister, journalister og vanlige mennesker bruker sosiale medier til å informere, inspirere og mobilisere. Men fordi retorikken ofte er usynlig, krever det ekstra kritisk bevissthet.`,
    },

    // ========== INFLUENCER-RETORIKK ==========
    {
      id: 'norsk-10-6-6-influencer',
      type: 'text',
      content: `## Influencer-retorikk — vennen som selger deg noe

Influencere er kanskje vår tids mest effektive retorikere. Hvorfor? Fordi de har forstått noe grunnleggende om etos: **Troverdighet handler like mye om relasjon som om kompetanse.**

Du stoler mer på en anbefaling fra en venn enn fra en reklame. Influencere utnytter dette ved å bygge en følelse av **parasosial relasjon** — du føler at du kjenner dem, selv om de ikke aner hvem du er. Når en influencer sier «Jeg elsker dette produktet», føles det som en venns anbefaling — ikke som en reklame.

### Retoriske grep influencere bruker

**1. Personlig etos gjennom identifikasjon**
Influenceren deler personlige historier, viser hverdagslivet, innrømmer feil og svakheter. «Jeg er akkurat som deg.» Dette bygger tillit og gjør anbefalinger mer troverdige.

**2. Patos gjennom livsstil**
Influencere selger ikke bare produkter — de selger en **livsstil**. Bildet av en perfekt frokost med det anbefalte produktet handler ikke om produktet. Det handler om følelsen: «Hvis du kjøper dette, kan livet ditt se slik ut.»

**3. Skjult reklame (sponnet innhold)**
Noen ganger er det vanskelig å skille mellom personlige anbefalinger og betalt reklame. I Norge krever markedsføringsloven at sponnet innhold merkes med «annonse» eller «samarbeid» — men merkingen er ikke alltid tydelig.

**4. Sosialt bevis**
«100 000 har kjøpt dette.» «Utsolgt tre ganger.» «Alle snakker om det.» Dette er appell til flertallet — og det fungerer fordi vi har en tendens til å gjøre det andre gjør.

**5. Begrenset tilbud (kunstig knapphet)**
«Bare 50 igjen!» «Tilbudet varer til midnatt!» Tidsbegrensning skaper hastverk — en form for patos (frykt for å gå glipp av noe, FOMO).

### Hvordan gjennomskue det

- Spør deg selv: **Hvem tjener penger på at jeg tror dette?**
- Se etter merking: Er dette betalt samarbeid?
- Tenk på appellformene: Bruker innlegget mest etos, patos eller logos?
- Sjekk kildene: Finnes det uavhengig dokumentasjon for påstandene?`,
    },

    // ========== OPPGAVE 1 ==========
    {
      id: 'norsk-10-6-6-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-6-ex-1',
        number: '6.32',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En influencer poster et bilde av seg selv med et nytt hudpleieprodukt og skriver: «Omg, dere MÅ prøve dette! Huden min har aldri vært så fin. Swipe opp for rabattkode!» Hvilken retorisk strategi brukes MEST her?',
        options: [
          {
            id: 'a',
            text: 'Logos — influenceren bruker fakta og forskning',
            isCorrect: false,
            feedback: 'Feil. Det finnes ingen fakta, forskning eller logiske argumenter i innlegget. Alt er basert på personlig erfaring og følelser.',
          },
          {
            id: 'b',
            text: 'Etos gjennom parasosial relasjon og patos gjennom begeistring og hastverk',
            isCorrect: true,
            feedback: 'Riktig! Influencerens personlige anbefaling bygger etos (du stoler på «vennen» din). «Omg» og «dere MÅ» skaper patos gjennom begeistring. Rabattkoden med «swipe opp» skaper hastverk (FOMO).',
          },
          {
            id: 'c',
            text: 'Kairos — influenceren velger riktig tidspunkt for innlegget',
            isCorrect: false,
            feedback: 'Kairos kan spille en rolle (f.eks. poste om solkrem midt på sommeren), men det er ikke det mest fremtredende grepet i dette innlegget.',
          },
          {
            id: 'd',
            text: 'Kontrast — influenceren sammenligner produktet med noe dårlig',
            isCorrect: false,
            feedback: 'Feil. Det er ingen tydelig kontrast i innlegget. Det handler om en positiv anbefaling, ikke en sammenligning.',
          },
        ],
        solution: 'Alternativ B er riktig. Innlegget kombinerer personlig etos (parasosial relasjon), patos (begeistring, FOMO) og sosialt press — typiske influencer-strategier.',
      },
    },

    // ========== DESINFORMASJON OG PROPAGANDA ==========
    {
      id: 'norsk-10-6-6-desinformasjon',
      type: 'text',
      content: `## Desinformasjon og propaganda — retorikk som våpen

Retorikk er et kraftig verktøy. I riktige hender kan det inspirere, opplyse og mobilisere. I gale hender kan det manipulere, splitte og ødelegge. **Desinformasjon** og **propaganda** er eksempler på retorikk brukt som våpen.

### Desinformasjon vs. feilinformasjon

**Feilinformasjon** er feil informasjon som spres uten ond hensikt. Noen tror noe som er feil, og deler det videre.

**Desinformasjon** er bevisst falsk eller villedende informasjon som spres for å manipulere, skade eller forvirre. Avsenderen *vet* at det er usant.

**Propaganda** er systematisk spredning av informasjon (sann eller usann) med mål om å påvirke folks holdninger og handlinger — ofte til fordel for en stat, organisasjon eller ideologi.

### Retoriske grep i desinformasjon

**1. Emosjonelle bilder og overskrifter (patos)**
Desinformasjon bruker nesten alltid sterke følelser: sinne, frykt, avsky. Et sjokkerende bilde med en falsk bildetekst sprer seg mye raskere enn en nøktern faktasjekk.

**2. Falsk etos**
Desinformasjon kan fremstå som om den kommer fra en troverdig kilde. Falske nettaviser som ser profesjonelle ut, «eksperter» med falske kvalifikasjoner, eller sitater som aldri ble sagt.

**3. Kirsebærplukking (selektiv logos)**
Å plukke ut enkeltfakta som støtter din påstand, mens du ignorerer all informasjon som taler imot. Det ser logisk ut — men helhetsbildet er fordreid.

**4. Stråmannsargumenter og personangrep**
De samme feilslutningene du lærte om i kapittel 6.2, brukes systematisk i propaganda for å diskreditere motstandere.

**5. «Bare stiller spørsmål»**
En vanlig teknikk: «Jeg sier ikke at det er sant, men er det ikke rart at...?» Ved å stille ledende spørsmål, sår avsenderen tvil uten å påstå noe direkte — og kan derfor ikke anklages for å lyve.

### Hvordan gjennomskue desinformasjon

- **Sjekk kilden:** Hvem publiserte dette? Er det en anerkjent nyhetsredaksjon?
- **Sjekk bildet:** Bruk omvendt bildesøk for å sjekke om bildet er ekte eller tatt ut av sammenheng
- **Sjekk påstanden:** Søk opp påstanden hos faktasjekkere (Faktisk.no, Snopes.com)
- **Sjekk følelsene:** Hvis innholdet gjør deg veldig sint eller redd — stopp opp. Sterke følelser er et signal om at noen prøver å manipulere deg
- **Del ikke videre** med mindre du er sikker på at det er sant`,
    },

    // ========== DEFINISJON: ALGORITMER OG FILTERBOBLER ==========
    {
      id: 'norsk-10-6-6-def-2',
      type: 'definition',
      title: 'Algoritmer, filterbobler og ekkokamre',
      content: `**Algoritme:** Et sett med regler som bestemmer hva du ser i sosiale medier. Algoritmene prioriterer innhold som holder deg engasjert — og følelsesladet innhold engasjerer mer enn nøkternt innhold.

**Filterboble:** Algoritmen viser deg mer av det du allerede liker og er enig i. Over tid ser du et stadig snevrere utvalg av virkeligheten — din «boble».

**Ekkokammer:** Når du bare hører meninger som bekrefter dine egne, forsterkes overbevisningene dine uten motstand. Du tror kanskje at «alle» mener det samme som deg — fordi algoritmen har filtrert bort alle som mener noe annet.

**Hvorfor er dette et retorisk problem?**
- Algoritmen **velger** hvilken retorikk du eksponeres for
- Du ser mer **patos** (emosjonelt innhold) fordi det engasjerer mest
- Motargumenter og nyanser **filtreres bort** — du mister logos
- Din oppfatning av «hva folk mener» forvrids — **appell til flertallet** blir kunstig forsterket

**Huskeregel:** Sosiale medier er ikke et vindu mot verden — det er et speil som viser deg det du allerede tror.`,
    },

    // ========== OPPGAVE 2 ==========
    {
      id: 'norsk-10-6-6-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-6-ex-2',
        number: '6.33',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er en «filterboble» i sammenheng med sosiale medier?',
        options: [
          {
            id: 'a',
            text: 'Et filter du legger på bilder i Instagram',
            isCorrect: false,
            feedback: 'Feil. Filterbobler har ingenting med bildefiltre å gjøre. Det handler om algoritmenes påvirkning på informasjonstilgangen din.',
          },
          {
            id: 'b',
            text: 'En teknisk feil som gjør at du ser feil innhold',
            isCorrect: false,
            feedback: 'Feil. Filterbobler er ikke feil — de er et resultat av bevisst algoritmisk design som prioriterer engasjerende innhold.',
          },
          {
            id: 'c',
            text: 'At algoritmen viser deg mer av det du allerede liker, slik at du ser et stadig snevrere utvalg av virkeligheten',
            isCorrect: true,
            feedback: 'Riktig! Algoritmen forsterker det du allerede er interessert i og filtrerer bort motstridende perspektiver. Over tid lever du i en «boble» av likesinnede meninger.',
          },
          {
            id: 'd',
            text: 'En metode for å blokkere uønsket reklame',
            isCorrect: false,
            feedback: 'Feil. Filterbobler er det motsatte av å blokkere — det handler om at algoritmen velger hva du får se, uten at du vet det.',
          },
        ],
        solution: 'Alternativ C er riktig. En filterboble oppstår når algoritmene viser deg mer av det du allerede er enig i, slik at du gradvis mister tilgang til andre perspektiver.',
      },
    },

    // ========== OPPGAVE 3 ==========
    {
      id: 'norsk-10-6-6-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-6-ex-3',
        number: '6.34',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser de retoriske grepene i hvert eksempel fra sosiale medier.',
        subTasks: [
          {
            label: 'a',
            task: 'Et innlegg med teksten: «DETTE vil media ALDRI fortelle deg! Del før det blir slettet!» over et uskarpt bilde.',
            solution: 'Patos: Språket bruker store bokstaver og utropstegn for å skape sinne og frykt. «Media vil aldri fortelle deg» bygger en oss-mot-dem-mentalitet og antyder en konspirasjon. «Del før det blir slettet» skaper hastverk (FOMO/frykt). Falsk etos: Innlegget later som det har eksklusiv informasjon. Rødt flagg: Mangel på kilde, emosjonelt språk og oppfordring til hurtig deling er typisk for desinformasjon.',
            multipleChoiceOptions: ['Patos + falsk etos + hastverk', 'Logos + saklig argumentasjon', 'Ren faktainformasjon', 'Trikolon + kontrast'],
          },
          {
            label: 'b',
            task: 'En influencer som viser sin «morgenrutine» og tilfeldigvis bruker et bestemt merke med merkelappen «#samarbeid» i liten skrift.',
            solution: 'Etos gjennom parasosial relasjon — videoen føles personlig og autentisk, som om du ser inn i vennens hverdag. Patos gjennom livsstilsappell — morgenrutinen ser perfekt og drømmeaktig ut. Skjult reklame: Selv om #samarbeid er merket, er merkingen så liten at mange overser den. Produktplasseringen er designet for å føles naturlig, ikke som reklame.',
            multipleChoiceOptions: ['Parasosial etos + livsstilspatos + skjult reklame', 'Logos + forskning', 'Kontrast + ironi', 'Appell til autoritet'],
          },
        ],
        hints: [
          'Tenk på appellformene: Bruker innlegget mest etos, patos eller logos?',
          'Spør deg: Hvem tjener på at jeg reagerer på dette? Hvem er den egentlige avsenderen?',
        ],
        solution: 'a) Desinformasjonsmønster: patos (frykt/sinne), falsk etos, hastverk. b) Influencer-strategi: parasosial etos, livsstilspatos, kamuflert reklame.',
      },
    },

    // ========== KRITISK MEDIEBRUK ==========
    {
      id: 'norsk-10-6-6-kritisk',
      type: 'text',
      content: `## Bli en kritisk mediebruker

Alt du har lært i dette kapittelet om retorikk — etos, patos, logos, retoriske virkemidler, feilslutninger — er verktøy du kan bruke til å navigere i den digitale verden. Her er en oppsummering av de viktigste prinsippene:

### Ti regler for kritisk mediebruk

**1. Stopp og tenk.** Før du deler, liker eller reagerer: Stopp. Er dette sant? Hvem publiserte det? Hva er formålet?

**2. Sjekk kilden.** Er dette en anerkjent nyhetsredaksjon, eller et anonymt nettsted? Har avsenderen kompetanse på feltet?

**3. Se etter merking.** Er innlegget merket som annonse, samarbeid eller sponnet innhold? Hvis ikke — burde det vært det?

**4. Vurder appellformene.** Bruker innholdet mest patos (følelser), logos (logikk) eller etos (troverdighet)? Overdreven patos er ofte et advarselstegn.

**5. Se etter feilslutninger.** Personangrep? Stråmenn? Falskt dilemma? Appell til flertallet? Gjenkjenn dem — og avvis dem.

**6. Sjekk bildet.** Er bildet ekte? Brukes det i riktig sammenheng? Bruk omvendt bildesøk.

**7. Sjekk mot flere kilder.** Finnes informasjonen hos andre uavhengige kilder? Hvis bare én kilde rapporterer noe dramatisk, vær skeptisk.

**8. Vær bevisst på algoritmen.** Du ser ikke et nøytralt utvalg av virkeligheten. Søk aktivt opp motstridende synspunkter.

**9. Ikke del i sinne.** Hvis noe gjør deg veldig sint: Vent. Sjekk. Tenk. *Så* del — hvis det viser seg å være sant.

**10. Vær en del av løsningen.** Del god journalistikk. Korriger feilinformasjon høflig. Vis kildekritikk i praksis.`,
    },

    // ========== OPPGAVE 4 ==========
    {
      id: 'norsk-10-6-6-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-6-ex-4',
        number: '6.35',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv en kort tekst (80–120 ord) der du forklarer til en 8.-klassing hva en filterboble er og hvorfor det er viktig å vite om det. Bruk et konkret eksempel.`,
        hints: [
          'Tenk på at leseren er yngre enn deg — bruk enkelt språk',
          'Et godt eksempel: «Hvis du liker fotball-innhold, viser algoritmen deg mer fotball — men kanskje aldri kunst, politikk eller vitenskap»',
          'Forklar hvorfor det er et problem: Du tror kanskje at «alle» liker fotball, men det er bare boblen din',
        ],
        solution: 'Eksempel: «En filterboble er når sosiale medier bare viser deg ting du allerede liker. Si at du følger mange gaming-kontoer. Da viser algoritmen deg mer gaming, men mindre av alt annet — sport, musikk, nyheter. Over tid tror du kanskje at alle er like interessert i gaming som deg. Men det er bare boblen din. Det er viktig å vite om filterbobler fordi de kan gjøre at du går glipp av viktig informasjon og andres perspektiver. Prøv å søke opp ting du vanligvis ikke ser — det sprenger boblen.»',
        allowsUpload: true,
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-6-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

Retorikk i sosiale medier er den mest gjennomgripende formen for overbevisende kommunikasjon i vår tid. Du har lært at:

- Sosiale medier bruker retorikk i **kort format** med **visuell dominans** og **personlig tone**
- **Influencere** bygger etos gjennom parasosiale relasjoner og selger livsstiler gjennom patos
- **Skjult reklame** (sponnet innhold) er pålagt å merkes, men merkingen er ikke alltid tydelig
- **Desinformasjon** bruker emosjonell manipulasjon, falsk etos og kirsebærplukking for å forvirre og splitte
- **Algoritmer** skaper **filterbobler** og **ekkokamre** som begrenser din tilgang til andre perspektiver
- **Kritisk mediebruk** betyr å sjekke kilder, gjenkjenne retoriske grep, og tenke før du deler

Husk: Du er ikke bare en passiv mottaker av innhold i sosiale medier — du er også en avsender. Hver gang du deler, liker eller kommenterer, bruker du retorikk. Bruk den bevisst, ærlig og ansvarlig.

Med dette kapittelet har du fullført temablokken om retorikk og muntlig kommunikasjon. Du har verktøyene: etos, patos, logos, retoriske virkemidler, argumentasjonsanalyse og kritisk medieforståelse. Nå er det opp til deg å bruke dem — i klasserommet, i samtaler, og i den digitale verden.`,
    },

    // --- Samleoppgaver ---

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-6-6-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-6-ex-5',
        number: '6.36',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Retorisk analyse av sosiale medier.

Velg ett innlegg fra sosiale medier (Instagram, TikTok, YouTube eller lignende) som prøver å overbevise deg om noe (et produkt, en mening, en livsstil). Skriv en retorisk analyse (250–350 ord) der du:

a) Beskriver innlegget: Hvem er avsenderen? Hva er budskapet? Hvem er målgruppen?
b) Analyserer bruken av etos, patos og logos
c) Identifiserer minst to retoriske virkemidler eller strategier (f.eks. parasosial relasjon, sosialt bevis, hastverk, skjult reklame)
d) Vurderer: Er innlegget overbevisende? Ærlig? Manipulerende?
e) Reflekterer: Hva ville du gjort annerledes med dette innlegget?`,
        hints: [
          'Ta et skjermbilde av innlegget som dokumentasjon',
          'Bruk fagbegrepene fra dette kapittelet: parasosial relasjon, filterboble, FOMO, kirsebærplukking osv.',
          'Husk at noe kan være overbevisende OG manipulerende på samme tid',
        ],
        solution: 'En god analyse identifiserer retoriske grep presist, bruker fagbegreper korrekt, og vurderer innleggets virkning kritisk. Eksempel: «Influencerens personlige etos bygges gjennom identifikasjon (hun er ung, normal, relaterbar), mens patos brukes gjennom livsstilsbilder. Logos er nesten fraværende — det finnes ingen fakta om produktet. Innlegget er merket med #samarbeid, men merkingen er så diskret at mange overser den.»',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-6-6-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-6-ex-6',
        number: '6.37',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Lage og analysere et innlegg.

Del 1: Lag et fiktivt Instagram-innlegg som bruker retoriske grep for å overbevise folk om å [velg ett]:
a) Lese mer bøker
b) Kutte ned på skjermtid
c) Engasjere seg i lokalsamfunnet

Skriv bildeteksten og beskriv bildet du ville brukt. Bruk bevisst minst to retoriske virkemidler og minst to appellformer.

Del 2: Skriv en kort analyse (100–150 ord) av ditt eget innlegg. Forklar:
- Hvilke retoriske grep du brukte og hvorfor
- Hvilken appellform som dominerer
- Om innlegget ditt er etisk — eller om det krysser grensen til manipulasjon`,
        hints: [
          'Tenk som en influencer: Hva ville engasjere din målgruppe?',
          'Bruk patos (følelser) for å engasjere, logos (fakta) for å overbevise, etos (troverdighet) for å bygge tillit',
          'I analysen: Vær ærlig om dine egne retoriske valg — er de etiske?',
        ],
        solution: 'Eksempel for a): Bildetekst: «Visste du at mennesker som leser 30 min/dag lever 2 år lenger? [logos] Jeg startet utfordringen for en måned siden, og ærlig talt: Det har forandret kveldene mine [etos/patos]. Bli med! Tag en venn som burde lese mer [sosialt bevis/spredning].» Analyse: Innlegget bruker logos (statistikk), etos (personlig erfaring), og patos (fellesskap). Det er etisk fordi påstanden er faktabasert og oppfordringen er positiv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 3 ==========
    {
      id: 'norsk-10-6-6-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-6-6-ex-7',
        number: '6.38',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Retorikkens kraft — avsluttende refleksjon.

Skriv en refleksjonstekst (300–400 ord) der du svarer på dette spørsmålet:

«Er retorikk farlig?»

Bruk eksempler fra hele temablokken (kapittel 6.1–6.6). Trekk inn:
- Minst to historiske eksempler (taler, politikere, aktivister)
- Minst ett eksempel fra sosiale medier
- Retoriske fagbegreper (etos, patos, logos, feilslutninger, virkemidler)

Konkluder med din egen vurdering: Er retorikk et gode eller et onde — eller begge deler?`,
        hints: [
          'Tenk på retorikk som et verktøy — som en kniv: Den kan brukes til å lage mat eller til å skade',
          'Historiske eksempler: King brukte retorikk til rettferdighet, mens propaganda bruker retorikk til manipulasjon',
          'Vis at du kan se saken fra flere sider — det er i seg selv god retorikk!',
        ],
        solution: 'En sterk refleksjonstekst viser at eleven forstår retorikk som et verktøy med både konstruktive og destruktive bruksområder. Eksempel på struktur: Innledning (retorikk som maktverktøy), argumenter for at retorikk er farlig (propaganda, desinformasjon, manipulasjon), argumenter for at retorikk er nødvendig (demokrati, aktivisme, kommunikasjon), konklusjon (retorikk i seg selv er nøytralt — det avgjørende er intensjonen og etikken bak bruken).',
        allowsUpload: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Parasosial relasjon', definition: 'En ensidig relasjon der du føler at du kjenner en mediepesonlighet, selv om de ikke kjenner deg' },
    { term: 'Skjult reklame', definition: 'Betalt innhold som fremstår som personlige anbefalinger uten tydelig merking' },
    { term: 'Desinformasjon', definition: 'Bevisst falsk eller villedende informasjon som spres for å manipulere eller forvirre' },
    { term: 'Feilinformasjon', definition: 'Feil informasjon som spres uten ond hensikt — avsenderen tror det er sant' },
    { term: 'Propaganda', definition: 'Systematisk spredning av informasjon for å påvirke holdninger til fordel for en bestemt gruppe eller ideologi' },
    { term: 'Algoritme', definition: 'Et sett med regler som bestemmer hva du ser i sosiale medier, basert på hva som holder deg engasjert' },
    { term: 'Filterboble', definition: 'Fenomenet der algoritmene viser deg mer av det du allerede liker, og filtrerer bort andre perspektiver' },
    { term: 'Ekkokammer', definition: 'En situasjon der du bare hører meninger som bekrefter dine egne, uten motstridende synspunkter' },
    { term: 'Sosialt bevis', definition: 'Retorisk grep der man viser til at mange andre gjør/mener det samme for å overbevise (appell til flertallet)' },
    { term: 'FOMO', definition: 'Fear Of Missing Out — frykten for å gå glipp av noe, brukt som retorisk hastverk i reklame' },
  ],
};

// ============================================================================
// Eksporter alle kapitler i del 4
// ============================================================================

export const NORSK_10_DEL4_CHAPTERS = [
  CHAPTER_NORSK_10_6_1,
  CHAPTER_NORSK_10_6_2,
  CHAPTER_NORSK_10_6_3,
  CHAPTER_NORSK_10_6_4,
  CHAPTER_NORSK_10_6_5,
  CHAPTER_NORSK_10_6_6,
];
