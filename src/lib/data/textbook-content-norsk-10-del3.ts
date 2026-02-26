/**
 * Tekstbok innhold for Norsk 10. klasse - Del 3 (Kapittel 5.1-5.2)
 *
 * Følger LK20 læreplan for norsk ungdomstrinn.
 * Del 3 dekker sammensatte tekster (multimodalitet) og kreativ skriving
 * (novelleskriving, litterære virkemidler, karakterutvikling).
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 5.1: Sammensatte tekster
// LK20: Lese, analysere og tolke sammensatte tekster og vurdere hvordan
//        ulike modaliteter spiller sammen
// ============================================================================

export const CHAPTER_NORSK_10_5_1: TextbookChapter = {
  id: 'norsk-10-5-1',
  courseId: 'norsk-10',
  chapterNumber: '5.1',
  title: 'Sammensatte tekster',
  description: 'Lær om multimodalitet, hvordan tekst, bilde, lyd og video spiller sammen, og hvordan du analyserer reklame, film og nettsider som sammensatte tekster.',
  estimatedMinutes: 75,
  competenceGoals: [
    'lese og analysere sammensatte tekster og vurdere hvordan ulike modaliteter spiller sammen',
    'bruke fagspråk til å beskrive samspillet mellom ulike uttrykksmåter i sammensatte tekster',
    'lage og vurdere sammensatte tekster med bevisst bruk av ulike modaliteter',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-5-1-intro',
      type: 'text',
      content: `## Sammensatte tekster: Mer enn bare ord

Tenk deg at du ser en reklame for en ny mobiltelefon. Du ser et flott bilde av telefonen svevende i luften, med mørk bakgrunn og gyllent lys. Under bildet står det: «Fremtiden i dine hender.» En rolig, dyp stemme leser teksten mens episk musikk spiller i bakgrunnen.

Nå fjerner du bildet. Bare teksten igjen: «Fremtiden i dine hender.» Virker det like overbevisende? Neppe. Fjerner du musikken også, forsvinner følelsen helt. Det er fordi denne reklamen er en **sammensatt tekst** — den bruker flere uttrykksmåter samtidig for å påvirke deg.

Du omgir deg med sammensatte tekster hele tiden, uten å tenke over det. Nettsider, Instagram-innlegg, filmtrailere, nyhetssendinger, plakater, dataspill, musikkvideoer — alle disse kombinerer ulike måter å kommunisere på. Tekst, bilde, lyd, farger, layout, bevegelse. Hver del tilfører noe, og sammen skaper de en helhet som er sterkere enn delene hver for seg.

I dette kapittelet skal du lære å:
- Forstå hva **multimodalitet** betyr og hvorfor det er viktig
- Gjenkjenne og beskrive ulike **modaliteter** (uttrykksmåter)
- Analysere hvordan modalitetene **spiller sammen** i en tekst
- Vurdere sammensatte tekster kritisk — fra reklame til film til nettsider`,
    },

    // ========== DEFINISJON: SAMMENSATTE TEKSTER ==========
    {
      id: 'norsk-10-5-1-def-1',
      type: 'definition',
      title: 'Sammensatte tekster og multimodalitet',
      content: `En **sammensatt tekst** (også kalt **multimodal tekst**) er en tekst som bruker to eller flere **modaliteter** (uttrykksmåter) for å kommunisere et budskap.

**Modalitet** betyr «uttrykksmåte» — altså en måte å formidle mening på. De viktigste modalitetene er:

- **Verbalspråk (tekst):** Skrevne ord, overskrifter, brødtekst, undertekster
- **Bilde:** Fotografier, illustrasjoner, tegninger, ikoner, logoer
- **Lyd:** Musikk, lydeffekter, stemmer, stillhet
- **Bevegelse:** Video, animasjon, overganger, scrolleeffekter
- **Farger:** Fargevalg som skaper stemning og assosiasjoner
- **Layout/design:** Hvordan elementene er plassert på siden eller skjermen
- **Typografi:** Skrifttype, skriftstørrelse, fet/kursiv — kommuniserer i seg selv

**Viktig:** Begrepet «tekst» i norskfaget betyr ikke bare skrevne ord. Alt som kommuniserer et budskap, er en «tekst» — også en film, et bilde eller en nettside.

**Multimodalitet** betyr at flere modaliteter brukes sammen. Nesten alle tekster vi møter i dag, er multimodale.`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE MODALITETER ==========
    {
      id: 'norsk-10-5-1-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-1-ex-1',
        number: '5.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr begrepet «modalitet» i sammenheng med sammensatte tekster?',
        options: [
          {
            id: 'a',
            text: 'En sjanger innen skjønnlitteratur',
            isCorrect: false,
            feedback: 'Feil. Modalitet har ingenting med sjanger å gjøre. Det handler om uttrykksmåter.',
          },
          {
            id: 'b',
            text: 'En uttrykksmåte som brukes for å formidle mening, for eksempel tekst, bilde eller lyd',
            isCorrect: true,
            feedback: 'Riktig! En modalitet er en uttrykksmåte. Sammensatte tekster kombinerer flere modaliteter.',
          },
          {
            id: 'c',
            text: 'Den følelsesmessige stemningen i en tekst',
            isCorrect: false,
            feedback: 'Feil. Det du beskriver, ligner mer på «tone» eller «stemning». Modalitet betyr uttrykksmåte.',
          },
          {
            id: 'd',
            text: 'Et synonym for «retorikk»',
            isCorrect: false,
            feedback: 'Feil. Retorikk handler om overtalelseskunst. Modalitet handler om hvilke uttrykksmåter som brukes.',
          },
        ],
        solution: 'Alternativ B er riktig. En modalitet er en uttrykksmåte — tekst, bilde, lyd, farge, layout osv.',
      },
    },

    // ========== SAMSPILL MELLOM MODALITETER ==========
    {
      id: 'norsk-10-5-1-samspill',
      type: 'text',
      content: `## Samspillet mellom modaliteter

Det viktigste med sammensatte tekster er ikke de enkelte modalitetene alene, men **samspillet** mellom dem. Hvordan jobber tekst, bilde og lyd sammen? Forsterker de hverandre, eller sier de noe helt forskjellig?

### Tre typer samspill

**1. Forsterkning (redundans)**
Modalitetene sier det samme. Bildet viser akkurat det teksten beskriver. Lyden understreker stemningen.
- *Eksempel:* En nyhetsartikkel om flom har overskriften «Ødeleggende flom» og et bilde av oversvømmede hus. Tekst og bilde forsterker hverandre.

**2. Utfylling (komplementaritet)**
Modalitetene tilfører ulik informasjon. Sammen gir de et mer komplett bilde enn noen av dem kunne gitt alene.
- *Eksempel:* En matoppskrift har en tekst med ingredienser og fremgangsmåte, og et bilde av det ferdige resultatet. Teksten forteller hva du skal gjøre, bildet viser hva du skal oppnå.

**3. Motsetning (kontrast)**
Modalitetene sier noe forskjellig — kanskje til og med det motsatte. Dette brukes ofte for å skape ironi, humor eller ubehag.
- *Eksempel:* En reklame for et forsikringsselskap viser en lykkelig familie på stranden, mens teksten lyder: «Du vet aldri hva morgendagen bringer.» Bildet er trygt, teksten er truende. Kontrasten skaper uro — og du begynner å tenke på forsikring.

### Forankring og avløsning

To klassiske begreper fra den franske tegnforskeren Roland Barthes:

**Forankring:** Teksten «forankrer» bildet — altså forklarer hva vi skal se i bildet. Uten teksten kunne bildet blitt tolket på mange måter.
- *Eksempel:* Et bilde av en person som gråter. Er det glede eller sorg? Overskriften «Vant Nobelprisen» forankrer bildet: Det er gledestårer.

**Avløsning:** Tekst og bilde sier noe forskjellig, men utfyller hverandre. Begge er nødvendige for å forstå helheten.
- *Eksempel:* Tegneserier bruker avløsning. Bildet viser handlingen, snakkeboblene gir dialogen. Du trenger begge for å forstå historien.`,
    },

    // ========== DEFINISJON: FORANKRING OG AVLØSNING ==========
    {
      id: 'norsk-10-5-1-def-2',
      type: 'definition',
      title: 'Forankring og avløsning',
      content: `**Forankring** er når en modalitet (oftest teksten) styrer hvordan vi tolker en annen modalitet (oftest bildet). Teksten «låser» meningen og reduserer tvetydighet.

- Bildetekster i aviser er et vanlig eksempel: Bildet alene kan tolkes på mange måter, men bildeteksten forteller oss hva vi skal se.

**Avløsning** er når modalitetene tilfører forskjellig informasjon som til sammen danner en helhet. Ingen av modalitetene gir full mening alene — du trenger begge.

- Tegneserier og filmer med undertekster er typiske eksempler. Bildet viser noe, teksten sier noe annet, og til sammen forteller de historien.

**Huskeregel:**
- Forankring = teksten **forklarer** bildet
- Avløsning = teksten og bildet **utfyller** hverandre`,
    },

    // ========== OPPGAVE 2: CLASSIC SAMSPILL ==========
    {
      id: 'norsk-10-5-1-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-1-ex-2',
        number: '5.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Bestem hvilken type samspill som beskrives i hvert eksempel.',
        subTasks: [
          {
            label: 'a',
            task: 'En plakat med bilde av et smilende barn og teksten «Gi en gave — gi en fremtid» for en veldedighetsorganisasjon.',
            solution: 'Forsterkning (redundans). Bildet av det smilende barnet og teksten formidler det samme budskapet: Hjelpen gir resultater.',
            multipleChoiceOptions: ['Forsterkning (redundans)', 'Utfylling (komplementaritet)', 'Motsetning (kontrast)', 'Avløsning'],
          },
          {
            label: 'b',
            task: 'En tegneserierute der bildet viser en mann som smiler, mens snakkeboblen sier: «Jeg er helt ødelagt.»',
            solution: 'Motsetning (kontrast). Bildet viser glede, teksten forteller om smerte. Kontrasten skaper ironi eller ubehag — vi forstår at mannen skjuler sine virkelige følelser.',
            multipleChoiceOptions: ['Motsetning (kontrast)', 'Forsterkning (redundans)', 'Forankring', 'Utfylling (komplementaritet)'],
          },
          {
            label: 'c',
            task: 'Et nyhetsbilde av en demonstrasjon, med bildeteksten: «Tusenvis samlet seg utenfor Stortinget i protest mot klimapolitikken.»',
            solution: 'Forankring. Bildet alene kunne vært en hvilken som helst folkemengde. Bildeteksten forankrer bildet ved å fortelle oss hvor det er, hva som skjer, og hvorfor.',
            multipleChoiceOptions: ['Forankring', 'Avløsning', 'Forsterkning (redundans)', 'Motsetning (kontrast)'],
          },
        ],
        solution: 'a) Forsterkning, b) Motsetning (kontrast), c) Forankring.',
      },
    },

    // ========== REKLAMEANALYSE ==========
    {
      id: 'norsk-10-5-1-reklame',
      type: 'text',
      content: `## Analyse av reklame som sammensatt tekst

Reklame er kanskje den mest gjennomtenkte formen for sammensatte tekster. Hvert element — bilde, tekst, farge, musikk, layout — er nøye planlagt for å påvirke deg. Reklamefolk bruker millioner av kroner på å finne akkurat den kombinasjonen av modaliteter som får deg til å føle noe, ønske noe, kjøpe noe.

### Slik analyserer du en reklame

**1. Beskriv det du ser og hører**
Start med å identifisere alle modalitetene. Hva viser bildet? Hva sier teksten? Hvilke farger dominerer? Er det musikk eller lyd?

**2. Hvem er målgruppen?**
Hvem er reklamen laget for? Tenåringer? Foreldre? Eldre? Hvordan kan du se det? Ofte røper farger, språk, musikk og modeller hvem avsenderen prøver å nå.

**3. Hva er budskapet?**
Hva vil reklamen at du skal tenke, føle eller gjøre? Ofte er det ikke bare «kjøp dette produktet», men en følelse: frihet, trygghet, tilhørighet, status.

**4. Hvordan spiller modalitetene sammen?**
Hvordan jobber de ulike uttrykksmåtene sammen for å skape budskapet? Bruker reklamen forsterkning, utfylling eller kontrast? Hva tilfører bildet som teksten ikke sier?

**5. Hvilke virkemidler brukes?**
Se etter retoriske grep:
- **Appell til følelser (patos):** Bruker reklamen frykt, glede, nostalgi, beundring?
- **Appell til fornuft (logos):** Finnes det tall, fakta, argumenter?
- **Appell til autoritet (etos):** Bruker reklamen kjendiser, eksperter eller troverdige stemmer?
- **Fargesymbolikk:** Grønt = natur/miljø, rødt = energi/fare, blått = tillit/ro
- **Komposisjon:** Hva er i sentrum? Hva ser du først? Hvilken retning føres blikket?`,
    },

    // ========== EKSEMPEL: REKLAMEANALYSE ==========
    {
      id: 'norsk-10-5-1-ex-reklame',
      type: 'example',
      title: 'Eksempel: Analyse av en bilreklame',
      problem: `Tenk deg en reklame for en elbil:
- **Bilde:** En sleek, sølvfarget bil kjører langs en kystveig med fjord og fjell i bakgrunnen. Solen skinner, og veien er tom. Naturen er grønn og uberørt.
- **Tekst:** «Null utslipp. Full frihet.»
- **Farger:** Dominert av grønt, blått og sølv.
- **Musikk (i TV-versjon):** Rolig pianomelodi med fuglekvitter i bakgrunnen.

Analyser denne reklamen som en sammensatt tekst. Hvilke modaliteter brukes? Hvordan spiller de sammen? Hvem er målgruppen? Hva er budskapet?`,
      solution: `**Modaliteter i bruk:**
- Verbalspråk (slagordet)
- Bilde (bildet av bilen i naturen)
- Farge (grønt, blått, sølv)
- Lyd (piano og fugler i TV-versjonen)
- Layout (tom vei, ren komposisjon)

**Samspill mellom modalitetene:**
Alle modalitetene jobber sammen i **forsterkning**. Bildet viser ren, uberørt natur. Teksten «Null utslipp» bekrefter budskapet. Fargene grønt og blått forsterker assosiasjoner til natur og renhet. Sølvfargen gir bilen et moderne, teknologisk preg. Musikken (rolig piano, fuglekvitter) understreker følelsen av harmoni med naturen.

**Målgruppe:**
Miljøbevisste, relativt velstående voksne som ønsker å ta grønne valg uten å gi avkall på komfort og status. Den tomme veien appellerer til frihetsfølelsen.

**Budskap:**
Du kan ha god samvittighet OG et flott liv. Bilen lar deg nyte naturen uten å ødelegge den. Slagordet «Null utslipp. Full frihet» skaper en kontrast mellom «null» og «full» som gir en følelse av at du slipper begrensninger.

**Retoriske grep:**
- **Patos:** Følelsen av frihet og harmoni med naturen
- **Logos:** «Null utslipp» er et fakta-argument
- **Etos:** Det profesjonelle uttrykket gir troverdighet

**Kritisk kommentar:**
Reklamen utelater at elbilproduksjon også har miljøkostnader (batteri, gruvedrift). Den tomme veien er urealistisk — og den «frie» kjøreturen koster penger. Reklamen selger en drøm, ikke hele sannheten.`,
    },

    // ========== OPPGAVE 3: REKLAMEANALYSE ==========
    {
      id: 'norsk-10-5-1-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-1-ex-3',
        number: '5.3',
        type: 'classic',
        difficulty: 'medium',
        task: `Finn en reklame du møter i hverdagen — det kan være en plakat, en annonse på nett, en reklamefilm eller et sponset innlegg på sosiale medier. Analyser den som en sammensatt tekst.

Skriv en analyse (150–200 ord) der du svarer på:
a) Hvilke modaliteter brukes?
b) Hvordan spiller modalitetene sammen? (forsterkning, utfylling eller kontrast?)
c) Hvem er målgruppen, og hvordan kan du se det?
d) Hva er det egentlige budskapet — utover «kjøp dette»?`,
        hints: [
          'Velg en reklame du synes er spennende eller provoserende — det er lettere å analysere noe du reagerer på',
          'Husk å bruke fagbegreper: modalitet, forsterkning, utfylling, kontrast, forankring, patos, logos, etos',
          'Vær kritisk: Hva utelater reklamen? Hva vil de du IKKE skal tenke på?',
        ],
        solution: 'En god analyse identifiserer modalitetene, beskriver samspillet mellom dem med fagbegreper, definerer målgruppen med begrunnelse, og avdekker det underliggende budskapet — gjerne med et kritisk blikk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== DEFINISJON: KOMPOSISJON OG LAYOUT ==========
    {
      id: 'norsk-10-5-1-def-3',
      type: 'definition',
      title: 'Komposisjon og layout',
      content: `**Komposisjon** handler om hvordan elementer er plassert i et bilde eller på en side. Plasseringen påvirker hva vi legger merke til først, og hvordan vi leser teksten.

**Viktige komposisjonsprinsipper:**

- **Leseretning:** I vestlige kulturer leser vi fra venstre mot høyre og fra toppen og ned. Det som står øverst til venstre, får mest oppmerksomhet.
- **Blikkfang:** Det største eller mest fargerike elementet tiltrekker seg blikket først.
- **Sentrum vs. periferi:** Det som er i sentrum, oppfattes som viktigst.
- **Tomrom (whitespace):** Tomme områder rundt et element gjør at det skiller seg ut og virker viktigere.
- **Hierarki:** Størrelsesforskjeller forteller hva som er viktigst. Store overskrifter > liten brødtekst.

**Layout** er den overordnede organiseringen av en side eller et skjermbilde — hvordan tekst, bilder, menyer og annet innhold er ordnet i forhold til hverandre.

**Eksempler på layout-valg med mening:**
- En nettavis med store bilder øverst signaliserer «se her!» — sensasjon og oppmerksomhet
- En luksusmerkevares nettside med mye tomrom signaliserer eksklusivitet og kvalitet
- Et informasjonstett nettsted med mange kolonner signaliserer seriøsitet og grundighet`,
    },

    // ========== OPPGAVE 4: MULTIPLE CHOICE KOMPOSISJON ==========
    {
      id: 'norsk-10-5-1-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-1-ex-4',
        number: '5.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En nettside for en luksusklokke bruker svart bakgrunn, stor produktbilde midt på siden, minimal tekst og mye tomrom. Hva signaliserer dette layout-valget?',
        options: [
          {
            id: 'a',
            text: 'At nettsiden er uferdig og mangler innhold',
            isCorrect: false,
            feedback: 'Feil. Mye tomrom er et bevisst designvalg, ikke en mangel.',
          },
          {
            id: 'b',
            text: 'At produktet er billig og lett tilgjengelig',
            isCorrect: false,
            feedback: 'Feil. Minimalistisk design med mye tomrom signaliserer det motsatte av billig.',
          },
          {
            id: 'c',
            text: 'Eksklusivitet, kvalitet og at produktet fortjener all oppmerksomheten',
            isCorrect: true,
            feedback: 'Riktig! Mye tomrom, minimalt med tekst og et sentralt produktbilde signaliserer eksklusivitet — produktet «snakker for seg selv».',
          },
          {
            id: 'd',
            text: 'At avsenderen ikke har råd til mer innhold',
            isCorrect: false,
            feedback: 'Feil. Luksusmerkevarer bruker bevisst tomrom som et designgrep. Det er dyrere å lage et minimalistisk design enn å fylle siden med innhold.',
          },
        ],
        solution: 'Alternativ C er riktig. Minimalistisk design med mye tomrom signaliserer eksklusivitet og kvalitet.',
      },
    },

    // ========== FILM SOM SAMMENSATT TEKST ==========
    {
      id: 'norsk-10-5-1-film',
      type: 'text',
      content: `## Film som sammensatt tekst

Film er den ultimate sammensatte teksten. Den kombinerer nesten alle modalitetene: bilde, lyd, musikk, dialog, bevegelse, farger, lyssetting, kameravinkler, klipping — og alt spiller sammen for å skape mening og følelser.

### Filmspråk — modaliteter i film

**Kameravinkler:**
- **Fugleperspektiv** (kameraet ser ned): Gjør personen liten, sårbar, avmektig
- **Froskeperspektiv** (kameraet ser opp): Gjør personen stor, mektig, truende
- **Normalperspektiv** (i øyehøyde): Nøytralt, vi er «på linje» med personen
- **Nærbilder:** Viser følelser, skaper intimitet
- **Totale bilder:** Viser omgivelsene, skaper avstand

**Klipping:**
- **Rask klipping:** Skaper spenning, kaos, fart
- **Lang, ubrutt scene:** Skaper ro, intensitet, realisme
- **Kryssklipping:** Viser to handlinger som foregår samtidig — bygger spenning

**Lyssetting:**
- **Sterkt lys:** Åpenhet, trygghet, glede
- **Mørkt, skyggelagt:** Fare, hemmeligheter, uro
- **Motlys (silhuett):** Mystikk, anonymitet

**Musikk og lyd:**
- Musikk styrer følelsene våre mer enn vi tror. En scene kan oppleves som romantisk, skummel eller trist avhengig av musikken — selv om bildet er det samme.
- **Diegetisk lyd:** Lyd som finnes i filmens verden (radio, trafikk, samtaler)
- **Ikke-diegetisk lyd:** Lyd som bare publikum hører (filmmusikk, fortellerstemme)

**Farger og fargepaletter:**
- Mange filmer bruker bevisste fargepaletter. Kalde blåtoner kan signalisere ensomhet, varme gultoner kan skape nostalgi, og høy kontrast mellom farger kan signalisere konflikt.`,
    },

    // ========== DEFINISJON: DIEGETISK OG IKKE-DIEGETISK LYD ==========
    {
      id: 'norsk-10-5-1-def-4',
      type: 'definition',
      title: 'Diegetisk og ikke-diegetisk lyd',
      content: `**Diegetisk lyd** er lyd som har en kilde innenfor filmens verden — altså lyd som karakterene selv kan høre.

Eksempler: Samtaler, trafikk, en radio som spiller i bakgrunnen, fotsteg, dørsmell, regn.

**Ikke-diegetisk lyd** er lyd som legges til for publikum, men som karakterene IKKE kan høre.

Eksempler: Filmmusikk (soundtrack), fortellerstemme (voice-over), lydeffekter som dramatiserer handlingen.

**Hvorfor er dette viktig?**
Skillet mellom diegetisk og ikke-diegetisk lyd hjelper oss å forstå hvordan filmskaperne manipulerer opplevelsen vår. Neste gang du ser en skummel scene, legg merke til musikken: Du blir redd av musikken vel så mye som av det du ser. Det er ikke-diegetisk lyd som jobber i bakgrunnen.

**Interessant tilfelle:** Noen ganger leker filmskapere med grensen. En karakter hører plutselig den «dramatiske» musikken og ser forvirret ut — da har den ikke-diegetiske lyden blitt diegetisk. Dette er et humoristisk grep som bryter den fjerde veggen.`,
    },

    // ========== OPPGAVE 5: MULTIPLE CHOICE FILMSPRÅK ==========
    {
      id: 'norsk-10-5-1-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-1-ex-5',
        number: '5.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'I en film ser vi en person filmet nedenfra (froskeperspektiv), med mørk bakgrunn og dramatisk musikk. Hva prøver filmskaperen å formidle?',
        options: [
          {
            id: 'a',
            text: 'At personen er redd og sårbar',
            isCorrect: false,
            feedback: 'Feil. Froskeperspektiv gjør personen stor og mektig. En redd og sårbar person ville blitt vist med fugleperspektiv (ovenfra).',
          },
          {
            id: 'b',
            text: 'At personen er mektig, truende eller overlegen',
            isCorrect: true,
            feedback: 'Riktig! Froskeperspektiv gjør at vi «ser opp på» personen, noe som skaper en følelse av makt og autoritet. Den mørke bakgrunnen og dramatiske musikken forsterker dette.',
          },
          {
            id: 'c',
            text: 'At scenen er humoristisk og lettsint',
            isCorrect: false,
            feedback: 'Feil. Mørk bakgrunn og dramatisk musikk signaliserer alvor, ikke humor.',
          },
          {
            id: 'd',
            text: 'At kameramannen var uerfaren',
            isCorrect: false,
            feedback: 'Feil. Froskeperspektiv er et bevisst filmteknisk grep, ikke en feil.',
          },
        ],
        solution: 'Alternativ B er riktig. Froskeperspektiv + mørk bakgrunn + dramatisk musikk = makt og trussel.',
      },
    },

    // ========== EKSEMPEL: FILMANALYSE ==========
    {
      id: 'norsk-10-5-1-ex-film',
      type: 'example',
      title: 'Eksempel: Analyse av en åpningsscene',
      problem: `Tenk deg åpningsscenen i en ungdomsfilm:

Vi ser en tom skolegang i fugleperspektiv. Lyset er kaldt og blåaktig. Det er stille, bortsett fra summingen fra lysrørene (diegetisk lyd). Så hører vi en forsiktig, melankolsk gitarmelodi (ikke-diegetisk lyd). Kameraet beveger seg sakte nedover gangen, nærmer seg en lukket dør. En ensom ryggsekk står utenfor. Tekst på skjermen: «Mandag morgen. 07:43.»

Analyser denne scenen. Hvilke modaliteter brukes, og hva kommuniserer de?`,
      solution: `**Modaliteter:**

1. **Bilde:** Tom skolegang, lukket dør, ensom ryggsekk
2. **Kameravinkel:** Fugleperspektiv — gjør gangen stor og personen (ryggsekken) liten
3. **Lys:** Kaldt, blåaktig — signaliserer kulde, fremmedgjøring, uro
4. **Diegetisk lyd:** Summing fra lysrør — understreker tomheten og stillheten
5. **Ikke-diegetisk lyd:** Melankolsk gitar — styrer følelsen mot tristhet og ensomhet
6. **Bevegelse:** Sakte kamerabevegelse — skaper en drømmende, nesten ubehagelig ro
7. **Tekst:** «Mandag morgen. 07:43.» — forankrer tid og sted, skaper gjenkjennelse

**Samspill:**
Alle modalitetene jobber sammen for å skape en følelse av **ensomhet og uro**. Den tomme gangen, det kalde lyset, den melankolske musikken og den ensomme ryggsekken forsterker hverandre (redundans). Teksten forankrer scenen i tid og sted vi kjenner igjen.

**Tolkning:**
Scenen forteller oss at noen er alene og at noe er galt, uten at vi har sett et eneste menneske. Filmskaperen bruker modalitetene til å skape stemning og forventning — vi forstår at vi skal følge noen som har det vanskelig, og vi er nysgjerrige på hvem.

**Filmteknisk grep:** Ryggsekken er et symbol — den representerer et fravær. Noen burde vært her, men er det ikke. Kameraets sakte bevegelse mot den lukkede døren bygger spenning.`,
    },

    // ========== OPPGAVE 6: FILMANALYSE ==========
    {
      id: 'norsk-10-5-1-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-1-ex-6',
        number: '5.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Velg en scene fra en film eller serie du kjenner godt. Analyser scenen som sammensatt tekst.

Skriv en analyse (200–300 ord) der du:
a) Beskriver kort hva som skjer i scenen
b) Identifiserer minst fire ulike modaliteter (kameravinkel, lys, lyd, musikk, farger, klipping osv.)
c) Forklarer hvordan modalitetene spiller sammen
d) Diskuterer hva scenen kommuniserer og hvilke følelser den vekker`,
        hints: [
          'Velg en scene du husker godt og som gjør inntrykk',
          'Bruk fagbegreper: fugleperspektiv, froskeperspektiv, diegetisk/ikke-diegetisk lyd, forsterkning, kontrast',
          'Tenk over hva som hadde endret seg hvis du fjernet én modalitet — f.eks. musikken',
        ],
        solution: 'En god filmanalyse identifiserer flere modaliteter, bruker fagbegreper, forklarer samspillet, og kobler det til den overordnede stemningen og budskapet i scenen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== NETTSIDER SOM SAMMENSATTE TEKSTER ==========
    {
      id: 'norsk-10-5-1-nettsider',
      type: 'text',
      content: `## Nettsider som sammensatte tekster

Nettsider er blant de mest komplekse sammensatte tekstene vi møter. De kombinerer tekst, bilder, video, lyd, farger, layout, lenker, animasjoner og interaktivitet — og alt er designet for å påvirke deg.

### Hva gjør nettsider spesielle?

**Interaktivitet:** I motsetning til en reklame eller en film, kan du **klikke, scrolle, søke og velge** hva du vil se. Denne interaktiviteten er en modalitet i seg selv — den påvirker hvordan du opplever innholdet.

**Ikke-lineær struktur:** En bok leser du fra side 1 til slutten. En nettside kan du navigere i mange retninger. Hyperlenker, menyer og søkefelt lar deg lage din egen vei gjennom teksten.

**Dynamisk innhold:** Nettsider endrer seg. En nettavis oppdateres hele tiden, algoritmer viser deg tilpasset innhold, og reklame skifter basert på hvem du er.

### Analysere en nettside

Når du analyserer en nettside, bør du stille disse spørsmålene:

1. **Hvem er avsenderen?** Hvem har laget nettsiden, og hva er formålet?
2. **Layout og hierarki:** Hva ser du først? Hva er størst? Hva er gjemt bort?
3. **Farger og design:** Hvilke farger dominerer? Hva signaliserer de?
4. **Bilder og video:** Hva viser bildene? Hvem er avbildet? Hvordan er de fremstilt?
5. **Tekst og språk:** Hvordan er språket — formelt, uformelt, overtalende, nøytralt?
6. **Interaktivitet:** Hva kan du klikke på? Hva vil avsenderen at du skal gjøre?
7. **Annonser og skjult påvirkning:** Er det reklame? Er det tydelig merket?

### Eksempler på bevisst nettside-design

- **Nettbutikker:** «Kun 2 igjen på lager!» — presser deg til å handle raskt. Store «KJØP NÅ»-knapper i kontrastfarge. Kundeanmeldelser skaper tillit.
- **Nyhetsmedier:** Dramatiske overskrifter og store bilder for å fange oppmerksomheten. «Klikk her for å lese mer» — genererer klikk og annonseinntekter.
- **Sosiale medier:** Endeløs scrolling, varsler, «likes» — designet for å holde deg på plattformen så lenge som mulig.`,
    },

    // ========== OPPGAVE 7: NETTSIDE-ANALYSE ==========
    {
      id: 'norsk-10-5-1-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-1-ex-7',
        number: '5.7',
        type: 'classic',
        difficulty: 'medium',
        task: `Velg en nettside du bruker ofte (det kan være en nettbutikk, en nettavis, et sosialt medium eller et nettsted for underholdning). Analyser den som sammensatt tekst.

Svar på:
a) Hvem er avsenderen, og hva er formålet med nettsiden?
b) Beskriv layouten: Hva ser du først? Hvordan er siden organisert?
c) Hvilke modaliteter brukes? (tekst, bilder, video, farger, animasjon, lyd?)
d) Finn minst ett eksempel på at nettsiden prøver å påvirke atferden din (f.eks. «kjøp nå», endeløs scrolling, varsler)`,
        hints: [
          'Se nettsiden med «nye øyne» — som om du analyserer den for første gang',
          'Legg spesielt merke til fargene, knappene og hva som er størst',
          'Husk: Nesten alt på en nettside er bevisst valgt av noen',
        ],
        solution: 'En god analyse viser at du forstår at nettsider er nøye designet for å påvirke brukerens atferd, og at du kan bruke fagbegreper til å beskrive hvordan.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== OPPGAVE 8: MULTIPLE CHOICE NETTSIDER ==========
    {
      id: 'norsk-10-5-1-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-1-ex-8',
        number: '5.8',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'En nettbutikk viser teksten «Kun 1 igjen på lager!» i rødt under et produkt, sammen med en stor grønn «Legg i handlekurv»-knapp. Hvilken påvirkningsteknikk brukes her?',
        options: [
          {
            id: 'a',
            text: 'Avsenderen gir nøytral informasjon om lagerstatus',
            isCorrect: false,
            feedback: 'Feil. Selv om informasjonen kan være sann, er den røde fargen og plasseringen bevisst valgt for å skape press.',
          },
          {
            id: 'b',
            text: 'Avsenderen bruker knapphetsprinsippet — frykten for å gå glipp av noe presser deg til å handle raskt',
            isCorrect: true,
            feedback: 'Riktig! «Kun 1 igjen» spiller på frykten for å gå glipp av noe (FOMO). Den røde fargen forsterker urgensen, og den grønne knappen gjør handlingen (å kjøpe) lett og tiltalende.',
          },
          {
            id: 'c',
            text: 'Avsenderen bruker forankring for å styre tolkningen av bildet',
            isCorrect: false,
            feedback: 'Feil. Forankring handler om tekst–bilde-samspill, ikke om salgsteknikk.',
          },
          {
            id: 'd',
            text: 'Den grønne knappen er tilfeldig valgt for å matche nettsidedesignet',
            isCorrect: false,
            feedback: 'Feil. Grønne knapper er bevisst valgt fordi grønt signaliserer «gå», «ja», «trygt». Ingenting er tilfeldig i nettbutikkdesign.',
          },
        ],
        solution: 'Alternativ B er riktig. Nettbutikker bruker knapphetsprinsippet og fargesymbolikk bevisst for å presse deg til å kjøpe.',
      },
    },

    // ========== TIP: VERKTØYKASSE ==========
    {
      id: 'norsk-10-5-1-tip-verktoy',
      type: 'tip',
      title: 'Verktøykasse for analyse av sammensatte tekster',
      content: `Når du skal analysere en sammensatt tekst, kan du bruke denne sjekklisten:

**Steg 1: Identifiser modalitetene**
Hvilke uttrykksmåter brukes? (tekst, bilde, lyd, farge, layout, bevegelse, typografi)

**Steg 2: Beskriv hver modalitet**
Hva sier/viser/spiller hver modalitet for seg?

**Steg 3: Analyser samspillet**
Hvordan jobber modalitetene sammen? (forsterkning, utfylling, kontrast, forankring, avløsning)

**Steg 4: Identifiser avsender og målgruppe**
Hvem har laget teksten? For hvem? Med hvilket formål?

**Steg 5: Tolk budskapet**
Hva er det overordnede budskapet? Hva vil avsenderen at du skal tenke, føle eller gjøre?

**Steg 6: Vær kritisk**
Hva utelates? Hvilke valg er gjort — og hvorfor? Prøver teksten å manipulere deg?`,
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-5-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelbegreper
- **Sammensatt tekst (multimodal tekst):** En tekst som bruker to eller flere modaliteter
- **Modalitet:** En uttrykksmåte — tekst, bilde, lyd, farge, layout, bevegelse, typografi
- **Forsterkning (redundans):** Modalitetene sier det samme og forsterker hverandre
- **Utfylling (komplementaritet):** Modalitetene tilfører ulik informasjon som utfyller hverandre
- **Motsetning (kontrast):** Modalitetene sier noe forskjellig, f.eks. for å skape ironi
- **Forankring:** Teksten styrer tolkningen av bildet
- **Avløsning:** Tekst og bilde tilfører forskjellig informasjon som til sammen danner en helhet
- **Diegetisk lyd:** Lyd med en kilde i filmens verden (karakterene kan høre den)
- **Ikke-diegetisk lyd:** Lyd lagt til for publikum (filmmusikk, fortellerstemme)
- **Komposisjon:** Hvordan elementer er plassert i et bilde eller på en side

### Viktige sammenhenger
- Nesten alle tekster vi møter i dag, er sammensatte/multimodale
- Det viktigste er ikke de enkelte modalitetene, men **samspillet** mellom dem
- Reklame, film og nettsider bruker alle bevisst samspill mellom modaliteter for å påvirke oss
- Å forstå sammensatte tekster handler om å bli en **kritisk leser** som gjennomskuer virkemidlene`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-5-1-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-1-ex-9',
        number: '5.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Lag din egen sammensatte tekst.

Velg ett av alternativene:

**Alternativ 1: Reklameplakat**
Lag en reklame for et oppdiktet produkt. Bruk minst tre modaliteter (tekst, bilde/tegning, farger, layout). Skriv en kort analyse (100 ord) der du forklarer dine bevisste valg.

**Alternativ 2: Filmscene-manus**
Skriv et kort manus (10–15 linjer) for en filmscene. Beskriv ikke bare dialogen, men også kameravinkler, lyssetting, lyd og musikk. Forklar i en kort tekst (100 ord) hvordan modalitetene spiller sammen.`,
        hints: [
          'Tenk på målgruppen din: Hvem lager du teksten for?',
          'Vær bevisst på ALLE valgene dine — farger, plassering, ordvalg',
          'Den beste oppgaven er den der du kan forklare HVORFOR du valgte akkurat disse modalitetene',
        ],
        solution: 'En god besvarelse viser bevisste valg i bruk av flere modaliteter, og analysen viser at du forstår samspillet mellom dem og kan begrunne valgene dine med fagbegreper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-5-1-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-1-ex-10',
        number: '5.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Sammenlign to tekster.

Finn to versjoner av «samme» tekst i forskjellige medier — for eksempel:
- En nyhetsartikkel og et nyhetsinlegg på Instagram om samme sak
- En bokside og filmversjonen av samme scene
- En produktbeskrivelse i en nettbutikk og en reklamefilm for samme produkt

Skriv en sammenligningsanalyse (250–350 ord) der du:
a) Beskriver hvilke modaliteter hver tekst bruker
b) Sammenligner hvordan de formidler budskapet forskjellig
c) Diskuterer hva som er styrken og svakheten til hver versjon
d) Bruker fagbegreper fra kapittelet (modalitet, forsterkning, utfylling, kontrast, forankring)`,
        hints: [
          'Det letteste er å velge to tekster du kjenner godt',
          'Lag gjerne en tabell for å sammenligne modalitetene',
          'Husk at ulike medier har ulike styrker — en film kan vise følelser gjennom skuespill, en tekst kan gå i dybden med tanker',
        ],
        solution: 'En god sammenligningsanalyse identifiserer modalitetene i begge tekstene, bruker fagbegreper presist, og reflekterer over hvordan mediet påvirker budskapet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 5.2: Kreativ skriving
// LK20: Skrive kreative tekster med bevisst bruk av virkemidler,
//        eksperimentere med skriving og utforske egne uttrykksformer
// ============================================================================

export const CHAPTER_NORSK_10_5_2: TextbookChapter = {
  id: 'norsk-10-5-2',
  courseId: 'norsk-10',
  chapterNumber: '5.2',
  title: 'Kreativ skriving',
  description: 'Lær å skrive gode noveller med litterære virkemidler, spenningskurve, karakterutvikling og «show don\'t tell»-teknikken. Bli en bedre forfatter gjennom skriveverksted.',
  estimatedMinutes: 80,
  competenceGoals: [
    'skrive kreative tekster med bevisst bruk av språklige virkemidler',
    'eksperimentere med ulike skriveformer og utforske egne uttrykksformer',
    'gi og ta imot tilbakemeldinger på tekster og bearbeide egne tekster',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-5-2-intro',
      type: 'text',
      content: `## Kreativ skriving: Skriv historier som lever

Har du noen gang lest en bok du ikke klarte å legge fra deg? Der du brant etter å vite hva som skjedde videre, der du **følte** noe for karakterene, der du glemte at du satt og leste fordi du var midt i historien?

Det er magi. Men det er ikke tilfeldig magi. Gode forfattere bruker bestemte teknikker for å skape den virkningen — og i dette kapittelet skal du lære mange av dem.

Kreativ skriving handler ikke om å ha «talent». Det handler om **håndverk**. Akkurat som en snekker lærer å bruke hammer og sag, kan du lære å bruke språklige virkemidler, spenningskurve, karakterutvikling og andre teknikker til å bygge en god tekst. Og akkurat som snekkeren blir bedre av å øve, blir du en bedre forfatter av å skrive.

I dette kapittelet skal du:
- Lære de viktigste **litterære virkemidlene** og hvordan du bruker dem
- Forstå **spenningskurven** og hvordan du bygger opp en novelle
- Lære å skape **levende karakterer** som leseren bryr seg om
- Mestre den gylne regelen «**show, don't tell**»
- Skrive din egen novelle i et praktisk skriveverksted`,
    },

    // ========== DEFINISJON: LITTERÆRE VIRKEMIDLER ==========
    {
      id: 'norsk-10-5-2-def-1',
      type: 'definition',
      title: 'Litterære virkemidler',
      content: `**Litterære virkemidler** er teknikker forfattere bruker bevisst for å skape bestemte effekter hos leseren. Virkemidlene gjør teksten mer levende, stemningsfull og engasjerende.

**Språklige bilder — gjør det abstrakte konkret:**
- **Metafor:** En sammenligning uten «som». Tingene «er» noe annet. *«Livet er en berg-og-dal-bane.»*
- **Sammenligning (simile):** En sammenligning med «som» eller «liksom». *«Han raste som en storm.»*
- **Besjeling (personifikasjon):** Å gi menneskelige egenskaper til noe som ikke er menneske. *«Vinden hvisket hemmeligheter.»*
- **Symbol:** Et konkret objekt som representerer noe abstrakt. *En lukket dør kan symbolisere utestengelse.*
- **Allegori:** En hel fortelling som fungerer som et bilde på noe annet. *Dyrehistorier som egentlig handler om mennesker.*

**Lydlige virkemidler:**
- **Alliterasjon:** Gjentakelse av samme bokstavlyd i begynnelsen av ord. *«Sakte, stille snek skyggen seg nærmere.»*
- **Onomatopoetikon:** Lydmalende ord. *«Vannet plasket», «greinene knakte.»*

**Strukturelle virkemidler:**
- **Gjentakelse:** Å gjenta ord, setninger eller motiver for å forsterke budskapet.
- **Kontrast:** Å stille motsetninger opp mot hverandre. *Lys/mørke, stillhet/kaos, trygghet/fare.*
- **Frempek:** Hint om noe som skal skje senere. *«Hadde jeg bare visst hva som ventet meg.»*
- **Tilbakeblikk:** Avbrudd i handlingen der vi ser tilbake på noe som har skjedd.
- **In medias res:** Å starte midt i handlingen, uten innledning.`,
    },

    // ========== OPPGAVE 1: MULTIPLE CHOICE VIRKEMIDLER ==========
    {
      id: 'norsk-10-5-2-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-2-ex-1',
        number: '5.11',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken setning inneholder en besjeling (personifikasjon)?',
        options: [
          {
            id: 'a',
            text: '«Han var sterk som en okse.»',
            isCorrect: false,
            feedback: 'Feil. Dette er en sammenligning (simile) fordi den bruker «som».',
          },
          {
            id: 'b',
            text: '«Mørket svelget byen.»',
            isCorrect: true,
            feedback: 'Riktig! Mørket (som ikke er levende) får en menneskelig/dyrisk egenskap — å svelge. Det er besjeling.',
          },
          {
            id: 'c',
            text: '«Livet er et sjakkspill.»',
            isCorrect: false,
            feedback: 'Feil. Dette er en metafor fordi livet «er» noe annet uten bruk av «som».',
          },
          {
            id: 'd',
            text: '«Hadde hun bare visst hva som ventet.»',
            isCorrect: false,
            feedback: 'Feil. Dette er et frempek — et hint om noe som skal skje senere.',
          },
        ],
        solution: 'Alternativ B er riktig. «Mørket svelget byen» er besjeling fordi mørket får en menneskelig handling.',
      },
    },

    // ========== OPPGAVE 2: IDENTIFISER VIRKEMIDLER ==========
    {
      id: 'norsk-10-5-2-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-2-ex-2',
        number: '5.12',
        type: 'classic',
        difficulty: 'medium',
        task: 'Identifiser virkemiddelet i hver setning og forklar virkningen.',
        subTasks: [
          {
            label: 'a',
            task: '«Sakte, stille snek skyggen seg nærmere.»',
            solution: 'Alliterasjon (gjentakelse av s-lyden). Virkning: S-lydene skaper en hviskelyd som etterligner det stille, snikende — vi kan nesten «høre» bevegelsen.',
            multipleChoiceOptions: ['Alliterasjon', 'Metafor', 'Kontrast', 'Frempek'],
          },
          {
            label: 'b',
            task: '«Hjertet hennes var en isklump.»',
            solution: 'Metafor. Virkning: Hjertet sammenlignes direkte med en isklump (uten «som»). Vi forstår at hun er følelseskald, avvisende eller nummen. Det konkrete bildet (isklump) gjør den abstrakte følelsen (kulde/likegyldighet) levende og gripbar.',
            multipleChoiceOptions: ['Metafor', 'Sammenligning', 'Besjeling', 'Symbol'],
          },
          {
            label: 'c',
            task: '«Alt var stille. Så eksploderte verden.»',
            solution: 'Kontrast. Virkning: Motsetningen mellom stillheten og eksplosjonen forsterker begge — stillheten blir dypere, og bruddet blir mer dramatisk. Kontrasten skaper overraskelse og spenning.',
            multipleChoiceOptions: ['Kontrast', 'Frempek', 'Gjentakelse', 'Alliterasjon'],
          },
          {
            label: 'd',
            task: '«Trærne bukket seg i vinden, som om de hilste på noen som ikke var der.»',
            solution: 'Besjeling. Virkning: Trærne får menneskelige handlinger (bukke, hilse). Det skaper en uhyggelig, drømmende stemning — som om naturen er levende og vi er gjester i dens verden.',
            multipleChoiceOptions: ['Besjeling', 'Metafor', 'Sammenligning', 'Allegori'],
          },
        ],
        solution: 'a) Alliterasjon, b) Metafor, c) Kontrast, d) Besjeling.',
      },
    },

    // ========== SPENNINGSKURVEN ==========
    {
      id: 'norsk-10-5-2-spenningskurve',
      type: 'text',
      content: `## Spenningskurven — novellens ryggrad

Alle gode historier har en struktur. Det betyr ikke at de er forutsigbare — det betyr at forfatteren forstår hvordan spenning bygges opp og utløses. Den klassiske strukturen kalles **spenningskurven** (eller dramaturgisk kurve).

### De fem delene

**1. Innledning (eksposisjon)**
Her presenteres settingen, hovedpersonen og utgangssituasjonen. Leseren skal forstå **hvem**, **hvor** og **når**. Men vær forsiktig — ikke bruk for lang tid her. Den beste innledningen gir akkurat nok informasjon til at leseren er orientert, og går videre.

*Tips:* Start gjerne **in medias res** — midt i handlingen. Du kan fylle inn bakgrunn etterpå.

**2. Opptrapping (stigende handling)**
Noe skjer som setter handlingen i gang. Et problem oppstår, en konflikt bygger seg opp, spenningen stiger. Hovedpersonen møter utfordringer, og innsatsen øker. Hvert nye hinder gjør situasjonen mer intens.

*Tips:* Opptrappingen bør ha **flere steg**. Ikke bare ett problem — men problem på problem, som gjør situasjonen verre og verre.

**3. Klimaks (vendepunkt)**
Det mest intense øyeblikket i historien. Alt bygger opp mot dette. Her avgjøres konflikten — enten til det bedre eller det verre. Klimaks bør føles uunngåelig, men ikke forutsigbar.

*Tips:* Klimaks trenger ikke være en dramatisk eksplosjon. Det kan være et stille øyeblikk av erkjennelse — en indre oppdagelse som forandrer alt.

**4. Nedtrapping (fallende handling)**
Etter klimaks roes handlingen ned. Konsekvensene av vendepunktet vises. Leseren puster ut (men ikke for mye — det skal fortsatt være interessant).

**5. Avslutning (løsning)**
Historien avsluttes. Konflikten er løst (eller bevisst uløst). Hovedpersonen har endret seg — eller ikke. Noveller har ofte en **åpen slutt** som lar leseren tenke videre.

*Tips:* De beste sluttene er overraskende, men logiske. Leseren tenker: «Det visste jeg ikke — men egentlig gir det perfekt mening.»`,
    },

    // ========== DEFINISJON: NOVELLE ==========
    {
      id: 'norsk-10-5-2-def-2',
      type: 'definition',
      title: 'Novellen som sjanger',
      content: `En **novelle** er en kort fortelling i prosa med bestemte kjennetegn som skiller den fra romanen og kortprosa.

**Kjennetegn på novellen:**
- **Kort:** Vanligvis noen få sider til noen titalls sider
- **Få personer:** Fokuserer på én eller noen få karakterer
- **Begrenset tid og sted:** Handlingen strekker seg over en kort periode, gjerne på ett sted
- **Én handling:** Følger én hovdhandlingstråd uten komplekse sideplott
- **Vendepunkt:** Inneholder gjerne et tydelig vendepunkt som endrer retningen
- **Åpen slutt:** Noveller ender ofte uten at alt er forklart — leseren må tolke selv

**Forskjell fra romanen:**
Romanen er lang, har mange karakterer, flere handlingstråder og utforsker et tema over tid. Novellen er som et fotografi — den fanger **ett øyeblikk** eller én kjede av hendelser.

**Forskjell fra kortprosa/flash fiction:**
Kortprosa er enda kortere enn novellen (noen ganger bare noen få setninger). Kortprosa har ofte ikke en tradisjonell spenningskurve.

**Novellens styrke:** Fordi den er kort, må hvert ord telle. Det er ingen plass til fyllstoff. Alt i en god novelle tjener et formål.`,
    },

    // ========== EKSEMPEL: SPENNINGSKURVE ==========
    {
      id: 'norsk-10-5-2-ex-spenning',
      type: 'example',
      title: 'Eksempel: Spenningskurve i en novelle',
      problem: `Les denne korte novellen og identifiser de fem delene av spenningskurven.

---

**«Sekundet»**

Sara holdt pusten. Vannet var kaldt, men hun lot seg synke.

Det hadde begynt med en melding. «Vi må snakke,» skrev Emilie. Tre ord. Det var alt som skulle til for at dagen gikk i stykker. Sara og Emilie hadde vært bestevenner siden barneskolen. Syv år. Syv år med hemmeligheter, latter og løfter om å aldri svikte hverandre.

Men Sara hadde sviktet. Hun visste det. Festen forrige helg, der hun hadde sagt noe om Emilie til Tobias. Noe hun aldri skulle ha sagt. Og Tobias hadde fortalt det videre, fordi Tobias fortalte alltid videre.

Sara dukket opp av vannet, pustende. Badelaget trente som vanlig. Treneren ropte tider fra bassengkanten. Men Sara hørte ingenting. Alt hun hørte var Emilies stemme i hodet: «Vi må snakke.»

Etter treningen sto Emilie ved utgangen. Armene i kors. Sara kjente magen knyte seg. Hun åpnet munnen for å si noe — en unnskyldning, en forklaring, hva som helst.

Men det var Emilie som snakket først.

«Jeg vet hva du sa. Og jeg er sint. Men …» Emilie stoppet. Så gjorde hun noe Sara ikke hadde ventet. Hun gråt. Ikke av sinne. Av skuffelse. «Jeg trodde vi var bedre enn det.»

Sara svelget. «Det er vi,» hvisket hun. «Jeg var dum. Og jeg er lei meg. Virkelig.»

Stillhet. Sekunder som føltes som timer.

Så nikket Emilie. Sakte. «Okay. Men det tar tid.»

Sara nikket tilbake. Det var nok. For nå.

---`,
      solution: `**1. Innledning:**
«Sara holdt pusten. Vannet var kaldt.» — Vi kastes rett inn i handlingen (in medias res). Vi forstår at Sara er i et svømmebasseng, men stemningen antyder at noe er galt.

**2. Opptrapping:**
Tilbakeblikket forklarer konflikten: Meldingen fra Emilie, festen, det Sara sa, ryktet som spredte seg. Spenningen stiger mens Sara er på trening og ikke klarer å konsentrere seg. Kulminerer når Emilie står ved utgangen etterpå — det fysiske møtet nærmer seg.

**3. Klimaks (vendepunkt):**
Emilie gråter. «Jeg trodde vi var bedre enn det.» Dette er vendepunktet fordi Emilie ikke reagerer med sinne (som Sara forventet), men med skuffelse. Det er et stille klimaks — og desto mer virkningsfullt.

**4. Nedtrapping:**
Sara innrømmer feilen og sier unnskyld. Dialogen er kort og ærlig.

**5. Avslutning:**
«Okay. Men det tar tid.» En åpen slutt. Vi vet ikke om vennskapet overlever — bare at Emilie gir Sara en sjanse. Siste setning — «Det var nok. For nå.» — antyder at Sara vet det ikke er over, men at det er en begynnelse.

**Virkemidler:** In medias res, tilbakeblikk, kontrast (ytre aktivitet i svømmehallen vs. indre uro), gjentakelse av tid-motivet («sekunder som føltes som timer», novellens tittel), åpen slutt.`,
    },

    // ========== OPPGAVE 3: SPENNINGSKURVE ==========
    {
      id: 'norsk-10-5-2-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-2-ex-3',
        number: '5.13',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva kjennetegner klimaks i en novelle?',
        options: [
          {
            id: 'a',
            text: 'Det er den roligste delen av historien, der leseren puster ut',
            isCorrect: false,
            feedback: 'Feil. Det du beskriver, ligner mer på nedtrappingen. Klimaks er det mest intense øyeblikket.',
          },
          {
            id: 'b',
            text: 'Det er åpningen av historien, der vi møter hovedpersonen for første gang',
            isCorrect: false,
            feedback: 'Feil. Det er innledningen (eksposisjonen). Klimaks kommer etter opptrappingen.',
          },
          {
            id: 'c',
            text: 'Det er det mest intense øyeblikket der konflikten avgjøres eller vendepunktet inntreffer',
            isCorrect: true,
            feedback: 'Riktig! Klimaks er historiens høydepunkt — det mest spennende, overraskende eller følelsesladde øyeblikket.',
          },
          {
            id: 'd',
            text: 'Det er alltid en voldshandling eller eksplosjon',
            isCorrect: false,
            feedback: 'Feil. Klimaks kan være stille og indre — for eksempel en erkjennelse eller et stille valg. Det trenger ikke være fysisk dramatisk.',
          },
        ],
        solution: 'Alternativ C er riktig. Klimaks er det mest intense øyeblikket i historien, men det trenger ikke være en voldshandling.',
      },
    },

    // ========== SHOW DON'T TELL ==========
    {
      id: 'norsk-10-5-2-show-dont-tell',
      type: 'text',
      content: `## «Show, don't tell» — vis, ikke fortell

Denne regelen er kanskje det viktigste du kan lære som forfatter. «Show, don't tell» betyr at du skal **vise** leseren hva som skjer gjennom konkrete detaljer, handlinger og sanseinntrykk — i stedet for å **fortelle** det direkte.

### Forskjellen

**Tell (fortelle):**
«Lars var nervøs.»

**Show (vise):**
«Lars tørket hendene mot buksa. Igjen. Pulsen hamret i tinningen, og han merket at foten vippet ukontrollert under bordet. Han prøvde å smile, men leppene ville ikke helt samarbeide.»

Ser du forskjellen? I den første setningen **forteller** forfatteren deg at Lars er nervøs. I den andre **viser** forfatteren nervøsiteten gjennom kropp, bevegelse og detaljer — og du **føler** den.

### Hvorfor «show» er bedre

1. **Det er mer levende.** Konkrete detaljer skaper bilder i leserens hode. Abstrakte ord gjør ikke det.
2. **Det aktiverer leseren.** Når du viser, må leseren selv tolke hva som skjer. Det gjør leseren engasjert.
3. **Det bygger tillit.** Når du viser detaljer, tror leseren mer på det som skjer. «Hun var sint» er bare en påstand. «Hun kastet tallerkenen i gulvet» er et bevis.
4. **Det skaper sanseopplevelse.** Gode forfattere aktiverer alle sansene: syn, hørsel, lukt, smak, følelse.

### Slik gjør du det i praksis

**Steg 1:** Skriv først det du vil fortelle. «Han var redd.»

**Steg 2:** Spør deg selv: Hvordan SER redsel ut? Hva GJØR en redd person? Hva FØLER de i kroppen?

**Steg 3:** Skriv det du ser for deg. «Hendene skalv. Han presset ryggen mot veggen og holdt pusten, som om det å puste ville avsløre ham.»

### Når det er greit å «tell»

«Show, don't tell» er en guideline, ikke en absolutt lov. Noen ganger er det bedre å fortelle:
- For å **hoppe over tid**: «Tre uker gikk.» Du trenger ikke vise alle tre ukene.
- For å **gi bakgrunnsinformasjon**: «De hadde kjent hverandre siden barneskolen.»
- For å **variere tempo**: Hvis du «viser» absolutt alt, blir teksten treg. Noen ganger må du fortelle for å holde farten oppe.

Kunsten er å vite **når** du skal vise og når du skal fortelle. Vis de viktige øyeblikkene. Fortell det som bare er overgang.`,
    },

    // ========== DEFINISJON: SHOW DON'T TELL ==========
    {
      id: 'norsk-10-5-2-def-3',
      type: 'definition',
      title: '«Show, don\'t tell» — vis, ikke fortell',
      content: `**«Show, don't tell»** er et skrivegrep der forfatteren viser leserens hva som skjer gjennom konkrete detaljer, handlinger, dialog og sanseinntrykk — i stedet for å fortelle det direkte med forklarende ord.

**Tell:** «Hun var lei seg.»
**Show:** «Hun stirret ut av vinduet. Regnet rant nedover glasset, og hun fulgte en dråpe med fingeren. Kaffekoppen foran henne var kald.»

**Teknikkene for å «show»:**
- **Kroppslige reaksjoner:** Beskriv hva kroppen gjør (skjelving, svette, rødming)
- **Handlinger:** Vis hva personen GJØR, ikke bare hva de føler
- **Dialog:** La karakterene snakke — stemmen avslører personligheten
- **Sansedetaljer:** Beskriv hva personen ser, hører, lukter, smaker, føler
- **Miljøbeskrivelse:** La omgivelsene speile stemningen

**Huskeregel:** Hvis du kan erstatte et adjektiv (nervøs, sint, glad) med en scene der leseren selv forstår følelsen — gjør det.`,
    },

    // ========== OPPGAVE 4: SHOW DON'T TELL ==========
    {
      id: 'norsk-10-5-2-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-2-ex-4',
        number: '5.14',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv om disse «tell»-setningene til «show»-avsnitt. Bruk sansedetaljer, kroppslige reaksjoner og handlinger.',
        subTasks: [
          {
            label: 'a',
            task: '«Det var en varm sommerdag.»',
            solution: 'Eksempel: «Asfalten simmret i varmen, og luften dirret over taket på den parkerte bilen. Sara presset den kalde vannflasken mot pannen og lukket øynene. Selv gresset i parken var blitt brunt.»',
          },
          {
            label: 'b',
            task: '«Faren hennes var sint.»',
            solution: 'Eksempel: «Faren satte glasset ned i bordet med et smell. Kjevene var stramme, og øynene smalnet. Han pustet tungt gjennom nesen, og da han endelig snakket, var stemmen så lav at den nesten ikke hørtes. Men den var iskald.»',
          },
          {
            label: 'c',
            task: '«Hun følte seg ensom.»',
            solution: 'Eksempel: «Meldingsappen viste null nye meldinger. Som i går. Hun scrollet gjennom kontaktlisten, stoppet ved et par navn, men la telefonen fra seg igjen. Stua var stille bortsett fra summing fra kjøleskapet. Hun trakk teppet tettere rundt seg og stirret på TV-skjermen uten å se hva som ble vist.»',
          },
        ],
        hints: [
          'Bruk alle sansene: Hva ser, hører, lukter, kjenner personen?',
          'Tenk på kroppen: Hva gjør en sint/ensom/varm person fysisk?',
          'Bruk konkrete detaljer fremfor vage beskrivelser',
        ],
        solution: 'Gode «show»-avsnitt bruker konkrete sansedetaljer, kroppslige reaksjoner og handlinger for å formidle en følelse eller tilstand uten å navngi den direkte.',
      },
    },

    // ========== KARAKTERUTVIKLING ==========
    {
      id: 'norsk-10-5-2-karakterer',
      type: 'text',
      content: `## Karakterutvikling — skap personer som lever

Gode historier handler om **mennesker**. Selv om du skriver om romvesener, dyr eller roboter, er det de menneskelige følelsene og dilemmaene som gjør historien engasjerende. Leseren må **bry seg** om karakterene dine. Og for at leseren skal bry seg, må karakterene føles ekte.

### Hva gjør en karakter levende?

**1. Indre konflikt**
De mest interessante karakterene har en indre konflikt — de slites mellom to ting. Kanskje vil de både stå opp for seg selv og unngå konfrontasjon. Kanskje elsker de noen, men er redde for å si det.

*Eksempel:* Sara i novellen «Sekundet» slites mellom ønsket om å fikse ting og frykten for Emilies reaksjon. Denne indre spenningen driver handlingen.

**2. Ønsker og hindringer**
Hver karakter bør ville noe — og møte hindringer. Det trenger ikke være noe stort. Å ville si unnskyld, å ville passe inn, å ville forstå noe — alt kan drive en historie.

**3. Spesifikke detaljer**
Generelle beskrivelser gjør karakterer flate. Spesifikke detaljer gjør dem levende.

- **Flatt:** «Hun var en vanlig jente.»
- **Levende:** «Hun hadde alltid en bok i den ene jakkelommen og en halvspist sjokolade i den andre. Hun lo aldri høyt, bare smilte med hele ansiktet.»

**4. Stemme**
Hver karakter bør snakke og tenke på sin måte. En fjortenåring snakker ikke som en professor. En nervøs person snakker ikke som en selvsikker person. Tenk over:
- Bruker karakteren lange eller korte setninger?
- Bruker de slang? Fagbegreper? Gammeldagse uttrykk?
- Avbryter de seg selv? Nøler de? Snakker de fort?

**5. Endring (karakterbue)**
I en god novelle bør hovedpersonen **endres** gjennom historien. De lærer noe, innser noe, mister noe, eller tar et valg. Denne endringen kalles **karakterbue**.

*Eksempel:* Sara i «Sekundet» starter med angst og unngåelse. Gjennom historien endres hun: Hun innrømmer feilen sin, sier unnskyld, og aksepterer at det tar tid å reparere tilliten. Hun går fra passivitet til handling.`,
    },

    // ========== DEFINISJON: KARAKTERBUE ==========
    {
      id: 'norsk-10-5-2-def-4',
      type: 'definition',
      title: 'Karakterbue (character arc)',
      content: `En **karakterbue** er utviklingen en karakter gjennomgår i løpet av en fortelling — fra hvem de er i begynnelsen til hvem de er i slutten.

**Tre typer karakterbue:**

1. **Positiv karakterbue:** Karakteren vokser, lærer og blir «bedre» — modigere, klokere, mer empatisk. De overvinner en svakhet eller feiltakelse.
   - *Eksempel:* En sjenert person som lærer å stå opp for seg selv.

2. **Negativ karakterbue:** Karakteren endres til det verre — de mister noe, feiler, eller gjør et dårlig valg de ikke kan angre.
   - *Eksempel:* En idealistisk person som blir bitter og kynisk.

3. **Flat karakterbue:** Karakteren endres ikke selv, men endrer verden rundt seg. De holder fast på sine verdier til tross for motstand.
   - *Eksempel:* En rettferdig person som står imot press og inspirerer andre.

**I novellen** er karakterbuen gjerne **liten, men betydningsfull**. Fordi novellen er kort, trenger ikke endringen være dramatisk. Én ny innsikt, ett stille valg, én endret holdning — det kan være nok.

**Tips:** Spør deg selv: Hva vet/forstår/føler hovedpersonen i slutten som de IKKE visste/forsto/følte i begynnelsen?`,
    },

    // ========== OPPGAVE 5: MULTIPLE CHOICE KARAKTERER ==========
    {
      id: 'norsk-10-5-2-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-2-ex-5',
        number: '5.15',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er en «karakterbue» i en novelle?',
        options: [
          {
            id: 'a',
            text: 'En detaljert fysisk beskrivelse av hvordan karakteren ser ut',
            isCorrect: false,
            feedback: 'Feil. Fysisk beskrivelse er viktig, men det er ikke en karakterbue. Karakterbuen handler om endring over tid.',
          },
          {
            id: 'b',
            text: 'Utviklingen en karakter gjennomgår fra begynnelsen til slutten av historien',
            isCorrect: true,
            feedback: 'Riktig! En karakterbue er forandringen en karakter gjennomgår — hva de lærer, innser eller hvordan de endres.',
          },
          {
            id: 'c',
            text: 'Spenningskurven i en novelle, fra innledning til klimaks',
            isCorrect: false,
            feedback: 'Feil. Det du beskriver, er den dramaturgiske kurven, ikke karakterbuen. Karakterbuen handler spesifikt om personens utvikling.',
          },
          {
            id: 'd',
            text: 'Den ytre konflikten mellom to karakterer',
            isCorrect: false,
            feedback: 'Feil. Ytre konflikt er viktig for handlingen, men karakterbuen handler om indre utvikling og endring.',
          },
        ],
        solution: 'Alternativ B er riktig. Karakterbuen er karakterens utvikling gjennom historien.',
      },
    },

    // ========== OPPGAVE 6: KARAKTER-ØVELSE ==========
    {
      id: 'norsk-10-5-2-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-2-ex-6',
        number: '5.16',
        type: 'classic',
        difficulty: 'medium',
        task: `Skap en hovedperson for en novelle. Skriv en kort «karakterprofil» (100–150 ord) der du svarer på:

a) Hvem er personen? (navn, alder, en viktig ytre detalj)
b) Hva vil personen? (et ønske eller mål)
c) Hva er hindringen? (noe som står i veien for ønsket)
d) Hva er den indre konflikten? (en følelse eller egenskap som gjør det vanskeligere)
e) Skriv tre setninger i personens «stemme» — slik de ville tenkt eller snakket`,
        hints: [
          'Basér karakteren på noe du kjenner til — det trenger ikke være deg selv, men en følelse du kjenner',
          'Unngå «perfekte» karakterer. De mest interessante karakterene har feil og svakheter',
          'De tre setningene i personens «stemme» bør avslør personligheten — er de sarkastiske? Forsiktige? Selvsikre?',
        ],
        solution: 'En god karakterprofil har spesifikke detaljer (ikke generelle), en tydelig indre konflikt, og en stemme som skiller seg fra din egen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== EKSEMPEL: SHOW DON'T TELL I PRAKSIS ==========
    {
      id: 'norsk-10-5-2-ex-show-tell',
      type: 'example',
      title: 'Eksempel: Fra «tell» til «show» i en novelle-åpning',
      problem: `Se på disse to versjonene av samme åpning. Hva er forskjellen, og hvorfor er versjon 2 bedre?

**Versjon 1 (tell):**
«Emil var en stille gutt som ikke hadde mange venner. Han var ny på skolen og syntes det var vanskelig å bli kjent med folk. Kantinen var det verste stedet fordi alle andre satt sammen, og han satt alene.»

**Versjon 2 (show):**
«Emil balanserte brettet med begge hender mens han navigerte mellom bordradene. Latter og stemmer fylte kantinen som en vegg av lyd. Han passet på å ikke se noen i øynene — det var lettere å finne et ledig bord da. Der borte, ved vinduet. Tomt. Han satte seg ned, dro fram telefonen og lot som om han leste noe viktig. Brettet med pasta sto urørt.»`,
      solution: `**Forskjellen:**

Versjon 1 **forteller** oss alt direkte: Emil er stille, har ikke mange venner, er ny, synes det er vanskelig. Det er informativt, men flatt. Vi blir fortalt hva vi skal synes, i stedet for å oppleve det.

Versjon 2 **viser** den samme informasjonen gjennom handlinger og detaljer:
- «Balanserte brettet med begge hender» — han er usikker, forsiktig
- «Latter og stemmer fylte kantinen som en vegg av lyd» — han føler seg utenfor, overvektet av sosial energi
- «Passet på å ikke se noen i øynene» — unngåelsesatferd, sjenanse
- «Lot som om han leste noe viktig» — han later som han er opptatt for å skjule at han er alene
- «Brettet med pasta sto urørt» — han har mistet appetitten; følelsene påvirker kroppen

**Hvorfor versjon 2 er bedre:**
- Vi **opplever** Emils ensomhet i stedet for å bli fortalt om den
- Detaljene gjør scenen konkret og visuell — vi kan se for oss kantinen
- Vi tolker selv at Emil er ensom — det gjør sterkere inntrykk enn å bli fortalt det
- Detaljen med den urørte maten er et «show»-virkemiddel: Den antyder noe uten å si det direkte`,
    },

    // ========== SYNSVINKEL ==========
    {
      id: 'norsk-10-5-2-synsvinkel',
      type: 'text',
      content: `## Synsvinkel — hvem forteller historien?

Synsvinkelen avgjør hvem som ser og opplever det som skjer i novellen. Valget av synsvinkel påvirker alt: hva leseren vet, hva som holdes skjult, og hvor nær vi kommer hovedpersonen.

### Tredjepersonforteller (begrenset)

*«Hun så ut av vinduet. Regnet hadde ikke stoppet på tre dager.»*

Fortelleren står utenfor, men følger **én** persons tanker og opplevelser. Vi ser verden gjennom denne personens øyne, men det er en «usynlig» forteller som beskriver. Dette er den vanligste synsvinkelen i noveller.

**Fordeler:** Nærhet til hovedpersonen, men med distanse nok til å beskrive omgivelsene objektivt.

### Førstepersonforteller (jeg-forteller)

*«Jeg så ut av vinduet. Regnet hadde ikke stoppet på tre dager, og jeg lurte på om det noen gang ville gi seg.»*

Hovedpersonen forteller selv. Alt er filtrert gjennom «jeg». Vi kommer svært nær, men vi kan bare vite det «jeg» vet og opplever.

**Fordeler:** Sterk nærhet og identifikasjon. Leseren opplever historien innenfra.

**Utfordringer:** Begrenset synsvinkel — vi kan ikke vite hva andre karakterer tenker. Og: fortelleren kan være **upålitelig** — vi vet ikke om «jeg» forteller sannheten.

### Allvitende forteller

*«Hun så ut av vinduet. Regnet hadde ikke stoppet på tre dager. I rommet ved siden av satt broren hennes og tenkte på det samme, men av helt andre grunner.»*

Fortelleren vet alt om alle — tankene, følelsene, fortiden og fremtiden til alle karakterene.

**Fordeler:** Full oversikt, kan hoppe mellom perspektiver.

**Utfordringer:** Mindre intimitet med én karakter. Sjelden brukt i korte noveller.

### Tips for novellen din

For en kort novelle anbefales **tredjeperson begrenset** eller **førsteperson**. Begge gir nok nærhet til at leseren bryr seg, og begrenset synsvinkel skaper naturlig spenning fordi leseren bare vet det hovedpersonen vet.`,
    },

    // ========== OPPGAVE 7: SYNSVINKEL ==========
    {
      id: 'norsk-10-5-2-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-2-ex-7',
        number: '5.17',
        type: 'classic',
        difficulty: 'medium',
        task: `Skriv den samme scenen tre ganger — med tre ulike synsvinkler.

**Scenen:** En elev oppdager at noen har skrevet noe stygt om dem på sosiale medier.

a) Skriv scenen med **førsteperson** (jeg-forteller) — 3-5 setninger
b) Skriv scenen med **tredjeperson begrenset** — 3-5 setninger
c) Skriv scenen med **allvitende forteller** (som også vet hva den som skrev innlegget tenker) — 3-5 setninger

Forklar kort: Hvordan endrer synsvinkelen opplevelsen av scenen?`,
        hints: [
          'Jeg-forteller: Bruk «jeg», «meg», «min». Alt er subjektivt.',
          'Tredjeperson begrenset: Bruk «han/hun», men følg bare én persons tanker.',
          'Allvitende: Bruk «han/hun», men vis hva BEGGE parter tenker.',
        ],
        solution: 'Førsteperson gir mest nærhet og følelse. Tredjeperson begrenset gir balanse mellom nærhet og oversikt. Allvitende gir full oversikt, men kan redusere spenningen fordi vi vet for mye.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SKRIVEVERKSTED ==========
    {
      id: 'norsk-10-5-2-skriveverksted',
      type: 'text',
      content: `## Skriveverksted — steg for steg til din novelle

Nå har du alle verktøyene. Det er på tide å bruke dem. I denne delen skal du skrive din egen novelle — steg for steg. Ikke stress. Gode tekster skrives ikke i første utkast — de skrives i **omskrivningen**.

### Steg 1: Finn ideen

Start med en av disse:
- En **følelse** du vil utforske (ensomhet, sjalusi, moralsk dilemma, overveldelse)
- Et **øyeblikk** du husker eller forestiller deg (en avskjed, en konfrontasjon, en oppdagelse)
- Et **«hva om»**-spørsmål (Hva om du fant en hemmelig melding? Hva om du måtte velge mellom to venner?)

### Steg 2: Planlegg strukturen

Skisser spenningskurven:
1. **Innledning:** Hvem er hovedpersonen, og hva er situasjonen?
2. **Opptrapping:** Hva utløser konflikten? Hva gjør situasjonen verre?
3. **Klimaks:** Hva er vendepunktet?
4. **Nedtrapping og avslutning:** Hvordan avsluttes historien?

### Steg 3: Skriv det første utkastet

Bare skriv. Ikke sensurer deg selv. Ikke stopp opp for å finpusse formuleringer. Få historien ned på papiret (eller skjermen). Kvaliteten kommer i neste steg.

### Steg 4: Revidér

Les gjennom utkastet og still disse spørsmålene:
- **Viser jeg nok?** Finn steder der du «forteller» og skriv dem om til «show».
- **Er karakteren levende?** Har hovedpersonen spesifikke detaljer, en stemme, en indre konflikt?
- **Er spenningskurven tydelig?** Bygger handlingen seg opp mot et klimaks?
- **Er alle avsnitt nødvendige?** Kutt det som ikke driver historien fremover.
- **Er slutten sterk?** En god slutt gir leseren noe å tenke på.

### Steg 5: Få tilbakemelding

La noen andre lese teksten din — en medelev, en venn, en familiemedlem. Be om ærlig tilbakemelding: Hva var mest engasjerende? Hva var forvirrende? Hvor mistet de interessen?

### Steg 6: Skriv om (igjen)

Bruk tilbakemeldingene og skriv en ny versjon. De fleste profesjonelle forfattere skriver 3–10 utkast av en tekst. Omskriving er ikke et tegn på at du er dårlig — det er et tegn på at du er en **ekte forfatter**.`,
    },

    // ========== OPPGAVE 8: NOVELLESKRIVING ==========
    {
      id: 'norsk-10-5-2-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-2-ex-8',
        number: '5.18',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriv en novelle på 400–600 ord.

**Krav:**
- Novellen skal ha en tydelig spenningskurve med klimaks
- Bruk minst tre ulike virkemidler (f.eks. metafor, kontrast, besjeling, frempek, alliterasjon)
- Bruk «show, don't tell» i minst to avsnitt
- Hovedpersonen skal gjennomgå en endring (karakterbue)
- Novellen skal ha en åpen eller overraskende slutt

**Du velger selv tema og handling. Her er noen forslag:**
- En person som må ta et vanskelig valg
- Et møte som forandrer noe
- En hemmelighet som kommer frem
- En vanlig dag som plutselig blir uvanlig`,
        hints: [
          'Planlegg spenningskurven FØR du begynner å skrive',
          'Start gjerne in medias res — midt i handlingen',
          'Les teksten din høyt for deg selv. Hvis noe «låter» feil, er det det sannsynligvis',
          'Husk: Hvert ord skal tjene et formål. Kutt det som er overflødig',
        ],
        solution: 'En god novelle har en tydelig struktur, levende karakterer, bevisst bruk av virkemidler, og en slutt som gjør inntrykk. Den viktigste testen: Får leseren lyst til å lese videre?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== WARNING: VANLIGE FEIL ==========
    {
      id: 'norsk-10-5-2-warning-feil',
      type: 'warning',
      title: 'Vanlige feil i novelleskriving',
      content: `**1. For lang innledning**
Mange bruker halve novellen på å beskrive hvem hovedpersonen er, hva de ser ut som, og hvor de bor. Start heller midt i handlingen og fyll inn detaljer underveis.

**2. «Tell» i stedet for «show»**
«Hun var trist og sint.» Vis det! La henne gjøre noe, si noe, reagere fysisk.

**3. For mange karakterer**
En novelle er kort. To til tre personer er som regel nok. Flere gjør det vanskelig å gå i dybden.

**4. Urealistisk dialog**
Tenåringer sier ikke «Kjære venn, jeg er svært bekymret over situasjonen.» La karakterene snakke slik virkelige mennesker gjør — med pauser, avbrytelser, ufullstendige setninger.

**5. Avslutning med «det var bare en drøm»**
Denne slutten undergraver hele historien. Leseren føler seg lurt, ikke overrasket.

**6. Alt for tydelig «moral»**
La leseren trekke sine egne konklusjoner. Ikke avslutt med «Og da lærte hun at man alltid skal være ærlig.» Vis det i stedet gjennom handlingen.`,
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-5-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelbegreper
- **Litterære virkemidler:** Teknikker som metafor, sammenligning, besjeling, kontrast, gjentakelse, frempek, alliterasjon, symbol
- **Spenningskurve:** Innledning → opptrapping → klimaks → nedtrapping → avslutning
- **Novelle:** Kort fortelling med få personer, begrenset tid/sted, vendepunkt og ofte åpen slutt
- **«Show, don't tell»:** Vis gjennom handlinger, detaljer og sanseinntrykk — ikke fortell med adjektiver
- **Karakterbue:** Utviklingen en karakter gjennomgår i historien
- **Indre konflikt:** En karakter som slites mellom to ønsker, verdier eller følelser
- **Synsvinkel:** Førsteperson (jeg), tredjeperson begrenset, allvitende forteller
- **In medias res:** Å starte midt i handlingen

### Viktige sammenhenger
- Gode historier er håndverk — du kan lære teknikkene og bli bedre gjennom øvelse
- Virkemidlene er verktøy: Det viktigste er ikke å bruke mange, men å bruke de riktige på riktig sted
- Omskriving er en naturlig del av prosessen — førsteutkastet er bare begynnelsen
- «Show, don't tell» handler om å stole på leseren: Gi dem detaljene, og la dem trekke konklusjonene selv`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-5-2-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-2-ex-9',
        number: '5.19',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Selvevaluering av novellen din.

Gå tilbake til novellen du skrev i oppgave 5.18. Les den på nytt med et kritisk blikk. Skriv en kort refleksjonstekst (150–200 ord) der du:

a) Identifiserer hvilke virkemidler du brukte, og forklarer virkningen av dem
b) Peker på et sted i teksten der du bruker «show, don't tell» — og forklarer hvorfor det er effektivt
c) Beskriver karakterbuen til hovedpersonen din
d) Identifiserer den svakeste delen av novellen og forklarer hvordan du ville forbedret den`,
        hints: [
          'Vær ærlig med deg selv — det er slik du lærer',
          'Bruk fagbegrepene fra kapittelet: metafor, kontrast, karakterbue, spenningskurve osv.',
          'Å vite hva som er svakt i teksten din er et tegn på at du forstår håndverket',
        ],
        solution: 'En god selvevaluering viser at du kan identifisere egne valg og begrunne dem med fagbegreper, og at du har innsikt i hva som fungerer og hva som kan forbedres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-5-2-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-2-ex-10',
        number: '5.20',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Tverrfaglig oppgave — koble kapittel 5.1 og 5.2.

Du har nå lært om sammensatte tekster (5.1) og kreativ skriving (5.2). I denne oppgaven skal du kombinere begge:

**Lag et manus for en kort film (2–3 minutter) basert på novellen din.**

Manuset skal inneholde:
a) En scenebeskrivelse for hver scene (hva ser vi? lyssetting, farger, sted)
b) Dialog mellom karakterene
c) Anvisninger for kameravinkler (nærbilde, totalt, fugleperspektiv osv.)
d) Beskrivelse av lyd og musikk (diegetisk og ikke-diegetisk)
e) En kort analyse (100 ord) av hvordan du bruker ulike modaliteter til å forsterke budskapet fra novellen

Bruk fagbegreper fra begge kapitlene.`,
        hints: [
          'Tenk på hva filmen kan VISE som novellen bare kan FORTELLE — og omvendt',
          'Ikke prøv å filme hele novellen. Velg de viktigste scenene.',
          'Musikk og lyd er kraftige verktøy for å formidle følelser som er vanskelige å vise med bilde alene',
        ],
        solution: 'Et godt filmmanus viser at du forstår samspillet mellom modaliteter (fra 5.1) og kan bruke narrative teknikker som spenningskurve, karakterbue og «show, don\'t tell» (fra 5.2) i et nytt medium.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 3 ==========
    {
      id: 'norsk-10-5-2-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-5-2-ex-11',
        number: '5.21',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Responsgruppe.

Bytt novelle med en medelev. Les medelevens novelle og skriv en tilbakemelding (150–200 ord) der du:

a) Beskriver hva du synes fungerer best i novellen (vær konkret — pek på bestemte setninger eller avsnitt)
b) Identifiserer minst to virkemidler og vurderer om de er effektive
c) Vurderer om «show, don't tell» brukes godt — finn et eksempel
d) Gir ett konkret forbedringsforslag — ikke bare «skriv bedre», men et spesifikt tips

Husk: God tilbakemelding er ærlig, men respektfull. Start med det positive.`,
        hints: [
          'Les novellen to ganger: Én gang for opplevelsen, én gang for analysen',
          'Pek alltid på konkrete steder i teksten — «I tredje avsnitt der du skriver at…»',
          'En god tilbakemelding hjelper forfatteren å se sin egen tekst med nye øyne',
        ],
        solution: 'En god tilbakemelding er konkret, bruker fagbegreper, balanserer det positive med konstruktive forslag, og hjelper medeleven å forbedre teksten sin.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler i del 3
// ============================================================================

export const NORSK_10_DEL3_CHAPTERS = [
  CHAPTER_NORSK_10_5_1,
  CHAPTER_NORSK_10_5_2,
];
