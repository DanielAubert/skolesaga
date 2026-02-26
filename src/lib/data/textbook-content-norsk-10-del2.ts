/**
 * Tekstbok innhold for Norsk 10. klasse - Del 2 (Kapittel 3.1-4.2)
 *
 * Følger LK20 læreplan for norsk ungdomstrinn.
 * Del 2 dekker språkhistorie, bokmål/nynorsk, mediekritikk
 * og digitalt personvern/ytringsfrihet.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 3.1: Språkhistorie og språkutvikling
// LK20: Gjøre rede for språkhistoriske hovedlinjer og reflektere over
//        hvordan språk endrer seg over tid
// ============================================================================

export const CHAPTER_NORSK_10_3_1: TextbookChapter = {
  id: 'norsk-10-3-1',
  courseId: 'norsk-10',
  chapterNumber: '3.1',
  title: 'Språkhistorie og språkutvikling',
  description: 'Lær om det norske språkets reise fra norrønt til moderne norsk, gjennom dansketiden, språkstrid og språkendring i vår egen tid.',
  estimatedMinutes: 75,
  competenceGoals: [
    'gjøre rede for noen sentrale forskjeller mellom norrønt og moderne norsk',
    'forklare viktige hendelser i norsk språkhistorie',
    'reflektere over hvordan språk endrer seg over tid og hva som påvirker språkendring',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-3-1-intro',
      type: 'text',
      content: `## Språkhistorie: Hvordan ble norsk til norsk?

Visste du at vikingene snakket et språk du nesten kan forstå — hvis du konsentrerer deg? Eller at norsk i flere hundre år egentlig var dansk? Og at ordene «sjekke», «kul» og «basically» er like nye innvandrere i det norske språket som TikTok er i livet ditt?

Språk er ikke noe fast og uforanderlig. Språk er levende. Det fødes nye ord hver dag, gamle ord dør ut, og grammatikken forandrer seg sakte, men sikkert. Tenk på det: Besteforeldrene dine snakker annerledes enn deg. Og oldeforeldrene dine snakket enda mer annerledes.

I dette kapittelet skal du følge det norske språket på en lang reise — fra vikingenes norrønt, gjennom 400 år med dansk styre, via den store språkstriden på 1800-tallet, og helt frem til dagens debatter om engelske låneord og «kebabnorsk». Underveis skal du forstå **hvorfor** norsk er som det er i dag.`,
    },

    // ========== DEFINISJON: SPRÅKHISTORIE ==========
    {
      id: 'norsk-10-3-1-def-1',
      type: 'definition',
      title: 'Språkhistorie og språkendring',
      content: `**Språkhistorie** er studiet av hvordan et språk har utviklet seg over tid — fra de eldste kildene vi har, og helt frem til i dag.

**Språkendring** skjer hele tiden og på alle nivåer:
- **Ordforrådet** endrer seg: Nye ord kommer inn, gamle faller bort
- **Uttalen** endrer seg: Lyder forsvinner eller erstattes
- **Grammatikken** endrer seg: Bøyningsformer forenkles over tid
- **Skrivemåten** endrer seg: Rettskrivingsreformer endrer hvordan vi skriver

**Hva driver språkendring?**
- Kontakt med andre språk (lånord)
- Politiske hendelser (union, selvstendighet, krig)
- Teknologi og nye fenomener som trenger nye ord
- Sosiale endringer (urbanisering, globalisering)
- Bevisste språkpolitiske valg (rettskrivingsreformer)

**Viktig innsikt:** Ingen «eier» språket. Språk tilhører alle som bruker det, og endring er naturlig — ikke et tegn på forfall.`,
    },

    // ========== NORRØNT SPRÅK ==========
    {
      id: 'norsk-10-3-1-norront',
      type: 'text',
      content: `## Norrønt — vikingenes språk (ca. 700–1350)

### Hva var norrønt?
Norrønt var det felles språket som ble snakket i Skandinavia i vikingtiden og middelalderen. Folk i Norge, Island, Danmark og Sverige kunne forstå hverandre ganske godt — det var egentlig ett språk med ulike dialekter.

Norrønt ble skrevet med **runer** (det eldre og yngre futharken) og senere med det **latinske alfabetet** etter kristningen av Norge rundt år 1000.

### Kjennetegn på norrønt
- **Rikt bøyningssystem:** Substantiv hadde fire kasus (nominativ, akkusativ, dativ, genitiv)
- **Tre grammatiske kjønn:** Hankjønn, hunkjønn, intetkjønn (som i moderne norsk)
- **Verb med mange former:** Sterkere bøyning enn i dag
- **Ordstilling:** Friere ordstilling enn i moderne norsk
- **Bokstaver vi ikke har:** þ (th-lyd), ð (stemt th-lyd), ǫ (åpen o-lyd)

### Eksempler på norrønt vs. moderne norsk

| Norrønt | Moderne norsk | Betydning |
|---------|---------------|-----------|
| hús | hus | hus |
| maðr | mann | mann |
| kona | kone | kone/kvinne |
| vatn | vann | vann |
| eyja | øy | øy |
| hǫnd | hånd | hånd |
| dagr | dag | dag |

### Den norrøne litteraturen
Norrønt har en av de rikeste middelalder-litteraturene i Europa:
- **Sagaene:** Fortellinger om vikingkonger, islandske ætter og helter
- **Eddadiktene:** Myter om Odin, Tor, Frøya og ragnarok
- **Skaldekvad:** Kunstferdig poesi med avansert form
- **Lovtekster:** Gulatingsloven og Frostatingsloven — noen av de eldste lovene i Norden

Snorre Sturlason (1179–1241) er den mest kjente norrøne forfatteren. Han skrev **Heimskringla** (norgeshistorien) og **Snorre-Edda** (mytologien).`,
    },

    // ========== EKSEMPEL: NORRØNT TEKSTUTDRAG ==========
    {
      id: 'norsk-10-3-1-ex-1',
      type: 'example',
      title: 'Eksempel: Les et norrønt tekstutdrag',
      problem: `Les dette utdraget fra Håvamål (Eddadiktet om Odins visdomsord):

**Norrønt:**
«Deyr fé, deyja frændr, deyr sjálfr it sama. En orðstírr deyr aldregi hveim er sér góðan getr.»

**Moderne norsk oversettelse:**
«Fe (rikdom) dør, frender (slektninger) dør, du dør selv på samme vis. Men ordets ry (godt rykte) dør aldri for den som vinner seg et godt.»

Oppgave: Sammenlign det norrøne sitatet med den moderne oversettelsen. Hvilke ord kan du kjenne igjen? Hva er forskjellig?`,
      solution: `**Ord du kan kjenne igjen:**
- «fé» → «fe» (rikdom, buskap) — nesten likt
- «frændr» → «frender» (slektninger) — vi ser at «æ» har blitt «e»
- «sjálfr» → «selv» — lyden er gjenkjennelig
- «orðstírr» → «ordets ry/omdømme» — «orð» er tydelig «ord»
- «góðan» → «godt» — stammen «goð/god» er den samme

**Forskjeller:**
- Norrønt har mer kompleks bøyning: «hveim er sér góðan getr» krever kasus
- Ordstillingen er annerledes
- Norrønt bruker bokstaver vi ikke har (á, é, ó)
- Setningsstrukturen er mer poetisk komprimert

**Konklusjon:** Selv om norrønt ser fremmed ut, er mange ord gjenkjennelige. Moderne norsk har forenklet bøyningen kraftig, men ordstammene er ofte bevart.`,
    },

    // ========== OPPGAVE 1: NORRØNT ==========
    {
      id: 'norsk-10-3-1-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-1-ex-1',
        number: '3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket av disse alternativene beskriver norrønt språk riktig?',
        options: [
          {
            id: 'a',
            text: 'Norrønt hadde et enklere bøyningssystem enn moderne norsk',
            isCorrect: false,
            feedback: 'Feil. Norrønt hadde et mye mer komplekst bøyningssystem med fire kasus, mot ingen kasus i moderne norsk.',
          },
          {
            id: 'b',
            text: 'Norrønt var et felles skandinavisk språk som ble skrevet med runer og senere latinsk skrift',
            isCorrect: true,
            feedback: 'Riktig! Norrønt ble brukt i hele Skandinavia og ble først skrevet med runer, deretter med det latinske alfabetet.',
          },
          {
            id: 'c',
            text: 'Norrønt ble bare snakket i Norge og hadde ingen skriftlig tradisjon',
            isCorrect: false,
            feedback: 'Feil. Norrønt ble snakket i hele Skandinavia og hadde en rik skriftlig tradisjon med sagaer, eddadikt og lover.',
          },
          {
            id: 'd',
            text: 'Norrønt er så forskjellig fra moderne norsk at ingen ord er gjenkjennelige',
            isCorrect: false,
            feedback: 'Feil. Mange norrøne ord er gjenkjennelige, for eksempel «hús» (hus), «dagr» (dag) og «vatn» (vann).',
          },
        ],
        solution: 'Alternativ B er riktig. Norrønt var et felles skandinavisk språk med en rik skriftlig tradisjon.',
      },
    },

    // ========== OPPGAVE 2: GJENKJENN NORRØNE ORD ==========
    {
      id: 'norsk-10-3-1-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-1-ex-2',
        number: '3.2',
        type: 'classic',
        difficulty: 'lett',
        task: 'Koble det norrøne ordet til det moderne norske ordet.',
        subTasks: [
          {
            label: 'a',
            task: 'eyja',
            solution: 'øy',
            multipleChoiceOptions: ['øy', 'egg', 'øye', 'elv'],
          },
          {
            label: 'b',
            task: 'hǫnd',
            solution: 'hånd',
            multipleChoiceOptions: ['hånd', 'hund', 'horn', 'honn'],
          },
          {
            label: 'c',
            task: 'maðr',
            solution: 'mann',
            multipleChoiceOptions: ['mann', 'mor', 'makt', 'mat'],
          },
          {
            label: 'd',
            task: 'vatn',
            solution: 'vann',
            multipleChoiceOptions: ['vann', 'vind', 'vei', 'vin'],
          },
        ],
        solution: 'a) øy, b) hånd, c) mann, d) vann',
      },
    },

    // ========== DANSKETIDEN ==========
    {
      id: 'norsk-10-3-1-dansketiden',
      type: 'text',
      content: `## Dansketiden — da norsk ble dansk (1380–1814)

### Hva skjedde?
I 1380 gikk Norge inn i en union med Danmark som varte i over 400 år. Danmark var den dominerende parten, og gradvis ble dansk det offisielle skriftspråket i Norge. Norsk ble ikke forbudt — folk snakket fortsatt sine norske dialekter hjemme — men alt skriftlig ble dansk.

### Konsekvenser for språket
- **Skriftspråket ble dansk:** Lover, bøker, aviser og brev ble skrevet på dansk
- **Norsk overlevde muntlig:** Dialektene levde videre i bygd og by
- **Kirken brukte dansk:** Bibelen og salmene var på dansk
- **Eliten snakket «dannet dagligtale»:** Overklassen i byene snakket dansk med norsk uttale
- **Norrøn skriftkultur forsvant:** Norge mistet sin skriftlige tradisjon

### «Dannet dagligtale» — et språk i mellomposisjon
Det oppsto et interessant fenomen: Norske byborgere og embetsmenn leste og skrev dansk, men snakket det med **norsk uttale og norske ord**. Denne blandingen — dansk skrift uttalt på norsk vis — ble grunnlaget for det vi i dag kaller bokmål.

### Viktige årstall
- **1380:** Norge inn i union med Danmark
- **1536:** Reformasjonen — dansk Bibel innføres i norske kirker
- **1739:** Allmenn skoleplikt — undervisningen foregår på dansk
- **1814:** Norge løsriver seg fra Danmark — men beholder det danske skriftspråket`,
    },

    // ========== DEFINISJON: SPRÅKLIG OVERHERREDØMME ==========
    {
      id: 'norsk-10-3-1-def-2',
      type: 'definition',
      title: 'Språklig overherredømme (språkimperialisme)',
      content: `**Språklig overherredømme** oppstår når ett språk dominerer over et annet, ofte som følge av politisk makt. Det dominerende språket brukes i skrift, utdanning og offentlig liv, mens det lokale språket presses ned til muntlig bruk.

**I Norge under dansketiden:**
- Dansk var prestisjespråket — det signaliserte utdanning og status
- Norske dialekter ble sett ned på som «bondespråk»
- Folk som ville «opp og frem» måtte beherske dansk
- Norrøn skriftkultur gikk tapt

**Paralleller i dag:**
- Engelsk presser ut lokale språk i mange land
- Samisk i Norge var lenge undertrykt av norsk (fornorskingspolitikken)
- Små språk dør ut med alarmerende fart — ca. ett språk annenhver uke globalt

**Refleksjon:** Er det forskjell på at et språk endrer seg naturlig og at det presses ut av et annet? Hva mister et folk når de mister språket sitt?`,
    },

    // ========== OPPGAVE 3: DANSKETIDEN ==========
    {
      id: 'norsk-10-3-1-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-1-ex-3',
        number: '3.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva var den viktigste konsekvensen av dansketiden for det norske språket?',
        options: [
          {
            id: 'a',
            text: 'Alle nordmenn sluttet å snakke norsk og gikk over til dansk',
            isCorrect: false,
            feedback: 'Feil. Folk fortsatte å snakke norske dialekter muntlig — det var skriftspråket som ble dansk.',
          },
          {
            id: 'b',
            text: 'Norge mistet sitt eget skriftspråk, men dialektene overlevde',
            isCorrect: true,
            feedback: 'Riktig! Den norrøne skrifttradisjonen gikk tapt, men det muntlige norske språket levde videre i dialektene.',
          },
          {
            id: 'c',
            text: 'Det norske språket ble helt uforandret gjennom hele perioden',
            isCorrect: false,
            feedback: 'Feil. Selv om dialektene overlevde, tok norsk opp mange danske ord og uttrykk.',
          },
          {
            id: 'd',
            text: 'Danmark forbød folk å snakke norsk, og språket døde nesten ut',
            isCorrect: false,
            feedback: 'Feil. Norsk ble ikke forbudt — det var skriftspråket som ble fortrengt, ikke talespråket.',
          },
        ],
        solution: 'Alternativ B er riktig. Norge mistet sin skrifttradisjon, men de norske dialektene levde videre muntlig.',
      },
    },

    // ========== SPRÅKSTRIDEN ==========
    {
      id: 'norsk-10-3-1-sprakstrid',
      type: 'text',
      content: `## Språkstriden på 1800-tallet — kampen om norsk identitet

### Bakgrunnen
Da Norge ble selvstendig fra Danmark i 1814, sto landet overfor et merkelig problem: Vi hadde fått vår egen grunnlov, vår egen regjering — men vi hadde ikke vårt eget skriftspråk. Det vi skrev, var i praksis dansk.

To løsninger ble foreslått, og de skapte en debatt som har vart i over 200 år.

### Løsning 1: Knud Knudsens vei — fornorske det danske
**Knud Knudsen** (1812–1895) mente at det enkleste var å ta det eksisterende skriftspråket (dansk) og gradvis gjøre det mer norsk. Man skulle erstatte danske former med norske:
- «bög» → «bok»
- «vej» → «vei»
- «hus*et*» → «hus*a*»

Tanken var pragmatisk: Folk var vant til å lese og skrive dansk. Hvorfor starte fra bunnen av når man kunne forandre det litt etter litt?

### Løsning 2: Ivar Aasens vei — bygge nytt fra dialektene
**Ivar Aasen** (1813–1896) mente at det eneste riktige var å bygge et helt nytt skriftspråk basert på de norske dialektene. Han reiste rundt i hele Norge, kartla dialektene vitenskapelig, og skapte **landsmål** — det vi i dag kaller nynorsk.

Aasen var en bondegutt fra Sunnmøre som lærte seg språk på egen hånd. Han mente at det danske skriftspråket var et fremmedspråk for vanlige nordmenn, og at et ekte norsk skriftspråk måtte bygge på det språket folk faktisk snakket.

### To skriftspråk — Norges unike løsning
Resultatet av denne striden var at Norge endte opp med to offisielle skriftspråk:
- **Riksmål/bokmål:** Basert på Knudsens fornorsking av dansk
- **Landsmål/nynorsk:** Basert på Aasens dialektsamling

Norge er et av svært få land i verden med to offisielle skriftspråk av *samme* språk. Dette er et direkte resultat av dansketiden og språkstriden som fulgte.`,
    },

    // ========== DEFINISJON: SPRÅKSTRID ==========
    {
      id: 'norsk-10-3-1-def-3',
      type: 'definition',
      title: 'Språkstriden',
      content: `**Språkstriden** er den langvarige debatten om hva som skal være Norges skriftspråk. Den begynte for alvor etter 1814 og pågår i mildere former den dag i dag.

**De to hovedposisjonene:**

| | Knud Knudsens linje | Ivar Aasens linje |
|---|---|---|
| **Metode** | Fornorske det danske | Bygge nytt fra dialektene |
| **Resultat** | Riksmål → bokmål | Landsmål → nynorsk |
| **Argument** | Praktisk, folk er vant til det | Ekte norsk, demokratisk |
| **Sosial base** | Byfolk, overklassen | Bondebefolkningen, bygdene |
| **Kritikk** | «Det er jo fremdeles dansk» | «Kunstig, ingen snakker slik» |

**Viktige begreper:**
- **Riksmål:** Det opprinnelige navnet på det danske-baserte skriftspråket, privat norm
- **Bokmål:** Det offisielle navnet fra 1929, statlig norm
- **Landsmål:** Aasens opprinnelige navn på det dialektbaserte skriftspråket
- **Nynorsk:** Offisielt navn fra 1929
- **Samnorsk:** Et mislykket forsøk på å smelte bokmål og nynorsk sammen til ett språk`,
    },

    // ========== EKSEMPEL: SAMMENLIGNING AV TEKSTER ==========
    {
      id: 'norsk-10-3-1-ex-2',
      type: 'example',
      title: 'Eksempel: Fra dansk til moderne bokmål',
      problem: `Se hvordan språket har endret seg fra dansk til moderne bokmål gjennom tre perioder:

**Dansk (1800):**
«Alle Mennesker ere fødte frie og lige i Værdighed og Rettigheder. De ere begavede med Fornuft og Samvittighed, og de bør handle imod hverandre i en Broderskabets Aand.»

**Riksmål (ca. 1907):**
«Alle mennesker er født frie og like i verdighet og rettigheter. De er utstyrt med fornuft og samvittighet, og de bør handle mot hverandre i en broderskaps ånd.»

**Moderne bokmål (2020):**
«Alle mennesker er født frie og like i verdighet og rettigheter. De er utstyrt med fornuft og samvittighet og bør handle mot hverandre i brorskapets ånd.»

Hva har endret seg fra dansk til moderne bokmål?`,
      solution: `**Endringer fra dansk til riksmål/bokmål:**

1. **Store bokstaver:** Dansk brukte stor forbokstav i alle substantiv (som tysk fremdeles gjør). Norsk gikk bort fra dette.
   - «Mennesker» → «mennesker», «Fornuft» → «fornuft»

2. **Rettskrivning:** Mange skrivemåter ble fornorsket:
   - «ere» → «er» (forenklet bøyning)
   - «Værdighed» → «verdighet» (æ → e)
   - «Broderskab» → «broderskap/brorskap» (b → p i endelse)

3. **Ordformer:** Noen ord ble erstattet med norske:
   - «begavede» → «utstyrt»
   - «imod» → «mot»

4. **Fra riksmål til moderne bokmål:** Små endringer i ordvalg og tegnsetting, men ellers svært likt — det viser at de store endringene skjedde tidlig.

**Konklusjon:** Overgangen fra dansk til bokmål var gradvis. De største endringene handlet om rettskrivning (store bokstaver, vokaler) og forenkling av bøyningsformer.`,
    },

    // ========== OPPGAVE 4: SPRÅKSTRIDEN ==========
    {
      id: 'norsk-10-3-1-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-1-ex-4',
        number: '3.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom Knud Knudsens og Ivar Aasens tilnærming til det norske språkproblemet.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva var Knudsens løsning, og hva ble resultatet?',
            solution: 'Knudsen ville fornorske det danske skriftspråket gradvis ved å erstatte danske former med norske. Resultatet ble riksmål, som senere fikk det offisielle navnet bokmål.',
          },
          {
            label: 'b',
            task: 'Hva var Aasens løsning, og hva ble resultatet?',
            solution: 'Aasen ville bygge et helt nytt skriftspråk basert på de norske dialektene. Han reiste rundt og kartla dialektene vitenskapelig og skapte landsmål, som senere fikk navnet nynorsk.',
          },
          {
            label: 'c',
            task: 'Hvilken tilnærming synes du er best? Begrunn svaret ditt med minst to argumenter.',
            solution: 'Her finnes ikke ett riktig svar. Argumenter for Knudsen: Praktisk, bygger på noe folk allerede kan, smidig overgang. Argumenter for Aasen: Mer autentisk norsk, demokratisk (bygger på folkespråket), markerer uavhengighet fra Danmark.',
          },
        ],
        hints: ['Tenk på både praktiske og prinsipielle argumenter', 'Hva betyr det å ha et «ekte» nasjonalspråk?'],
        solution: 'Knudsen ville fornorske dansken (→ bokmål), Aasen ville bygge nytt fra dialektene (→ nynorsk). Begge hadde gode argumenter.',
        allowsUpload: true,
      },
    },

    // ========== SPRÅKENDRING I MODERNE TID ==========
    {
      id: 'norsk-10-3-1-moderne',
      type: 'text',
      content: `## Språkendring i moderne tid

### Rettskrivningsreformene
Gjennom 1900-tallet gjennomførte Norge en rekke rettskrivningsreformer for å fornorske bokmål og modernisere nynorsk:

**1907-reformen:** Første store fornorsking av riksmål
- «efter» → «etter», «sne» → «snø», «sprog» → «språk»

**1917-reformen:** Radikale endringer, mange valgfrie former
- Innførte a-endelser i bokmål: «sola» (ved siden av «solen»)
- Forsøk på å nærme bokmål og nynorsk til hverandre

**1938-reformen:** Den mest kontroversielle — «samnorsk-politikken»
- Enda mer folkelig bokmål ble påtvunget
- Førte til «foreldreaksjonen» der foreldre rettet barnas skolebøker

**1959 og 2005:** Gradvis tilbakegang for de mest radikale formene

**2012:** Ny bokmålsrettskrivning — mange radikale former fjernet, tydeligere norm

### Engelskpåvirkning
Det mest synlige trekket ved moderne språkendring er innflytelsen fra **engelsk**:
- **Direkte lån:** «date», «cool», «fake», «cringe», «random»
- **Oversettelseslån:** «å ta for gitt» (fra «to take for granted»)
- **Domenetap:** Noen fagfelt bruker nesten bare engelsk (IT, populærkultur)

### Nye språktrekk blant unge
Ungdomsspråket er alltid i front av språkendring:
- **Flerkulturellt ungdomsspråk:** «Wolla», «habibi», «jansen» — ord fra arabisk, tyrkisk og andre språk
- **Engelsk innblanding:** «That's literally so basic»
- **Forkortelser fra nettet:** «lol», «tbh», «ngl»
- **Pragmatiske partikler:** «liksom», «bare», «typ» brukt på nye måter`,
    },

    // ========== DEFINISJON: DOMENETAP ==========
    {
      id: 'norsk-10-3-1-def-4',
      type: 'definition',
      title: 'Domenetap',
      content: `**Domenetap** betyr at et språk mister bruksområder (domener) til et annet språk. Det er det som skjer når et helt fagfelt eller en arena «går over» til et annet språk.

**Eksempler på domenetap i norsk:**
- **Akademia:** Mye forskning publiseres bare på engelsk
- **Næringsliv:** Mange norske bedrifter bruker engelsk som konsernspråk
- **Teknologi:** Fagbegreper innen IT er nesten utelukkende engelske
- **Populærkultur:** Musikk, film, serier og spill er dominert av engelsk

**Hvorfor er domenetap et problem?**
- Hvis norsk ikke brukes innen f.eks. forskning, utvikles det heller ikke fagspråk på norsk
- Over tid kan norsk bli et «kjøkkenspråk» — et språk man bare bruker hjemme
- Det skaper et skille mellom de som behersker engelsk og de som ikke gjør det

**Mottiltak:**
- Språkrådet lager norske avløserord (f.eks. «nettbrett» for «tablet»)
- Universitetene oppfordres til å publisere på norsk
- Lov om språk (2021) slår fast at norsk er hovedspråket i Norge`,
    },

    // ========== OPPGAVE 5: LÅNORD ==========
    {
      id: 'norsk-10-3-1-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-1-ex-5',
        number: '3.5',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr «domenetap» i språksammenheng?',
        options: [
          {
            id: 'a',
            text: 'At et land mister territorium til et naboland',
            isCorrect: false,
            feedback: 'Feil. Domenetap handler ikke om geografi, men om språk. Et «domene» her betyr et bruksområde for språket.',
          },
          {
            id: 'b',
            text: 'At et språk mister bruksområder til et annet språk',
            isCorrect: true,
            feedback: 'Riktig! Domenetap betyr at norsk mister bruksområder til f.eks. engelsk — som innen forskning, næringsliv eller teknologi.',
          },
          {
            id: 'c',
            text: 'At ungdom bruker for mange slangord',
            isCorrect: false,
            feedback: 'Feil. Slang er en naturlig del av språkutviklingen og er ikke det samme som domenetap.',
          },
          {
            id: 'd',
            text: 'At nynorsk brukes mindre enn bokmål',
            isCorrect: false,
            feedback: 'Feil. Selv om nynorsk har færre brukere, er domenetap et begrep som handler om forholdet mellom norsk og engelsk.',
          },
        ],
        solution: 'Alternativ B er riktig. Domenetap betyr at et språk mister bruksområder til et annet.',
      },
    },

    // ========== OPPGAVE 6: SPRÅKENDRING I PRAKSIS ==========
    {
      id: 'norsk-10-3-1-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-1-ex-6',
        number: '3.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Undersøk språkendring i din egen hverdag.',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv ned fem engelske ord eller uttrykk du bruker daglig. Finnes det norske alternativer?',
            solution: 'Eksempler: «cool» (kult), «chill» (slappe av), «random» (tilfeldig), «cringe» (flaut/pinlig), «binge-watche» (se mange episoder). For noen ord finnes gode norske alternativer, for andre ikke.',
          },
          {
            label: 'b',
            task: 'Snakker du annerledes enn besteforeldrene dine? Gi tre konkrete eksempler på forskjeller.',
            solution: 'Mulige forskjeller: Mer engelske låneord, mer bruk av «liksom»/«bare» som fyllord, annen uttale av visse ord, mer uformell stil, bruk av ord fra andre språk (arabisk, tyrkisk).',
          },
          {
            label: 'c',
            task: 'Synes du det er et problem at norsk tar opp mange engelske ord? Begrunn svaret ditt.',
            solution: 'Her finnes ikke ett riktig svar. Argumenter for at det er et problem: domenetap, norsk fagspråk utvikles ikke, skaper skiller. Argumenter mot: Naturlig utvikling, norsk har alltid tatt opp lånord, beriker språket.',
          },
        ],
        hints: ['Tenk på hva du sier i løpet av en dag — hvor mange engelske ord bruker du?'],
        solution: 'Oppgaven handler om å reflektere over språkendring i egen hverdag og ta stilling til engelskpåvirkning.',
        allowsUpload: true,
      },
    },

    // ========== EKSEMPEL: TIDSLINJE ==========
    {
      id: 'norsk-10-3-1-ex-3',
      type: 'example',
      title: 'Eksempel: Tidslinje over norsk språkhistorie',
      problem: 'Sett de viktigste hendelsene i norsk språkhistorie på en tidslinje og forklar sammenhengen mellom dem.',
      solution: `**Tidslinje:**

**ca. 200–700:** Urnordisk → felles nordisk språk skrevet med runer

**ca. 700–1350:** Norrønt → vikingtidens og middelalderens språk. Rik litteratur (sagaer, edda). Høydepunkt for norsk skriftkultur.

**1380:** Union med Danmark → norsk skriftkultur begynner å forsvinne

**1536:** Reformasjonen → dansk Bibel i norske kirker. Dansk festner grepet.

**1814:** Norsk selvstendighet → Men skriftspråket er fortsatt dansk. Hva gjør vi?

**1850-tallet:** Knud Knudsen begynner fornorsking av dansk. Ivar Aasen skaper landsmål.

**1885:** Likestillingsvedtaket → Landsmål og riksmål er likestilte offisielle skriftspråk.

**1907–2012:** Rettskrivningsreformer fornorsker bokmål og moderniserer nynorsk gradvis.

**2021:** Lov om språk → Norsk er offisielt hovedspråket i Norge. Bokmål og nynorsk er likestilte.

**Sammenhengen:** Hele norsk språkhistorie kan forstås som en kamp mellom ytre påvirkning (dansk, engelsk) og indre bevaringskrefter (dialekter, språkpolitikk).`,
    },

    // ========== OPPGAVE 7: TIDSLINJE ==========
    {
      id: 'norsk-10-3-1-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-1-ex-7',
        number: '3.7',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Sett hendelsene i riktig kronologisk rekkefølge:\n\n1. Ivar Aasen skaper landsmål\n2. Norge går inn i union med Danmark\n3. Norrøn tid med sagalitteratur\n4. Norges selvstendighet fra Danmark',
        options: [
          {
            id: 'a',
            text: '3 → 2 → 4 → 1',
            isCorrect: true,
            feedback: 'Riktig! Norrønt (ca. 700–1350) → Union med Danmark (1380) → Selvstendighet (1814) → Aasens landsmål (1850-tallet).',
          },
          {
            id: 'b',
            text: '2 → 3 → 1 → 4',
            isCorrect: false,
            feedback: 'Feil. Norrøn tid kom før dansketiden, ikke etter.',
          },
          {
            id: 'c',
            text: '3 → 4 → 2 → 1',
            isCorrect: false,
            feedback: 'Feil. Norge ble selvstendig etter dansketiden, ikke før.',
          },
          {
            id: 'd',
            text: '1 → 3 → 2 → 4',
            isCorrect: false,
            feedback: 'Feil. Aasen levde på 1800-tallet, lenge etter norrøn tid.',
          },
        ],
        solution: 'Riktig rekkefølge: Norrønt → Dansketiden → Selvstendighet → Aasens landsmål.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-3-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelbegreper
- **Norrønt:** Felles skandinavisk språk i vikingtid og middelalder, med rikt bøyningssystem og rik litteratur
- **Dansketiden (1380–1814):** Norsk mistet sitt skriftspråk; dansk ble det offisielle språket
- **Dannet dagligtale:** Dansk skrift uttalt med norsk uttale — forløperen til bokmål
- **Språkstriden:** Debatten om hva som skal være Norges skriftspråk
- **Knud Knudsen:** Ville fornorske dansken gradvis (→ bokmål)
- **Ivar Aasen:** Ville bygge nytt skriftspråk fra dialektene (→ nynorsk)
- **Domenetap:** Når et språk mister bruksområder til et annet
- **Språkendring:** En naturlig prosess som drives av kontakt, politikk, teknologi og sosiale endringer

### Viktige sammenhenger
- Bokmål og nynorsk er begge resultater av dansketiden — to ulike svar på det samme problemet
- Språkendring er naturlig, men kan akselereres av politisk makt (dansketiden) eller teknologi (engelskpåvirkning)
- Debatten om språk handler alltid om mer enn bare ord — den handler om identitet, makt og tilhørighet`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-3-1-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-1-ex-8',
        number: '3.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Drøftingsoppgave: Språk og identitet.

Skriv en tekst (250–350 ord) der du drøfter følgende påstand:

«Et folk som mister språket sitt, mister identiteten sin.»

Du skal:
a) Forklare hva påstanden betyr
b) Bruke eksempler fra norsk språkhistorie (dansketiden, språkstriden)
c) Trekke inn moderne eksempler (samisk, engelskpåvirkning)
d) Ta stilling til påstanden — er du enig eller uenig? Begrunn.`,
        hints: [
          'Start med å definere hva du mener med «identitet» og «språk»',
          'Bruk konkrete eksempler — ikke bare skriv generelt',
          'En god drøfting ser saken fra flere sider',
        ],
        solution: 'En god drøfting forklarer påstanden, bruker historiske og moderne eksempler, viser evne til å se saken fra flere sider, og tar en begrunnet stilling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-3-1-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-1-ex-9',
        number: '3.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Samleoppgave: Fra norrønt til i dag.

Lag en presentasjon (skriftlig eller muntlig) der du forklarer norsk språkhistorie fra norrønt til i dag. Du skal dekke:

a) Norrønt — hva kjennetegnet språket og litteraturen?
b) Dansketiden — hva skjedde med norsk, og hvorfor?
c) Språkstriden — hva var de to løsningene, og hva ble resultatet?
d) Moderne tid — hvordan endrer norsk seg i dag?

Bruk minst tre konkrete eksempler og forklar sammenhengen mellom periodene.`,
        hints: [
          'Bruk tidslinjen som rammeverk',
          'Forklar årsak og virkning: Hvorfor førte den ene perioden til den neste?',
          'Prøv å trekke linjer fra fortiden til i dag',
        ],
        solution: 'En god presentasjon dekker alle fire periodene, bruker konkrete eksempler, og viser at du forstår sammenhengen mellom dem.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3.2: Bokmål og nynorsk
// LK20: Reflektere over språksituasjonen i Norge og forholdet mellom
//        bokmål og nynorsk
// ============================================================================

export const CHAPTER_NORSK_10_3_2: TextbookChapter = {
  id: 'norsk-10-3-2',
  courseId: 'norsk-10',
  chapterNumber: '3.2',
  title: 'Bokmål og nynorsk',
  description: 'Lær om forskjellene mellom bokmål og nynorsk, sidemålsopplæring, språkpolitikk, Ivar Aasens prosjekt og rettskrivingshistorie.',
  estimatedMinutes: 70,
  competenceGoals: [
    'gjøre rede for forskjeller mellom bokmål og nynorsk',
    'reflektere over sin egen språklige bakgrunn og språksituasjonen i Norge',
    'skrive tekster på hovedmål og sidemål med god struktur og korrekt språk',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-3-2-intro',
      type: 'text',
      content: `## Bokmål og nynorsk: To språk — én nasjon

«Ugh, sidemål.» La oss være ærlige: Mange elever sukker når de hører ordet «nynorsk». Men før du sukker, tenk på dette: Norge er et av veldig få land i verden som har to offisielle skriftspråk. Det er faktisk ganske fascinerende — og det forteller en viktig historie om hvem vi er som folk.

I forrige kapittel lærte du *hvorfor* vi fikk to skriftspråk. I dette kapittelet skal du lære mer om *hvordan* de to språkene fungerer, hva som skiller dem, hvem som bruker dem, og hvorfor vi fortsatt har dem begge.

Du skal også møte Ivar Aasen nærmere — bondegutten som ble Norges viktigste språkforsker — og forstå den politiske kampen som har formet norsk språkpolitikk helt frem til i dag.

Og ja: Du skal bli bedre i sidemål. Men forhåpentligvis skal du også forstå *hvorfor* du lærer det.`,
    },

    // ========== DEFINISJON: BOKMÅL OG NYNORSK ==========
    {
      id: 'norsk-10-3-2-def-1',
      type: 'definition',
      title: 'Bokmål og nynorsk — hva er forskjellen?',
      content: `**Bokmål** og **nynorsk** er to likestilte offisielle skriftspråk i Norge. De er ikke to forskjellige språk, men to skriftnormer for det samme språket — norsk.

**Bokmål:**
- Har røtter i dansk skriftspråk, gradvis fornorsket
- Brukes av ca. 85–87 % av befolkningen som hovedmål
- Dominerer i byene, på Østlandet, i Trøndelag og Nord-Norge
- Har både konservative og radikale former (f.eks. «solen» og «sola»)

**Nynorsk:**
- Basert på Ivar Aasens dialektsamling
- Brukes av ca. 13–15 % av befolkningen som hovedmål
- Sterkest på Vestlandet, i fjordbygdene og dalstrøkene
- Ligger nærmere mange norske dialekter enn bokmål gjør

**Viktige forskjeller i praksis:**

| Bokmål | Nynorsk | Kommentar |
|--------|---------|-----------|
| jeg | eg | Personlig pronomen |
| ikke | ikkje | Nektingsord |
| hva | kva | Spørreord |
| noe/noen | noko/nokon | Ubestemt pronomen |
| språk**et** | språk**et** | Intetkjønn — likt! |
| gut**en** | gut**en** | Hankjønn — likt! |
| sol**a** / sol**en** | sol**a** | Hunkjønn — bokmål har valgfrihet |
| å kaste**r** | å kast**ar** | Presens av svake verb |
| har kaste**t** | har kast**a** | Perfektum av svake verb |

**Husk:** Forskjellene er systematiske — når du lærer mønstrene, er nynorsk ikke så vanskelig!`,
    },

    // ========== OPPGAVE 1: GJENKJENN SPRÅK ==========
    {
      id: 'norsk-10-3-2-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-2-ex-1',
        number: '3.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse setningene er skrevet på nynorsk?',
        options: [
          {
            id: 'a',
            text: '«Jeg liker ikke å skrive på sidemålet mitt.»',
            isCorrect: false,
            feedback: 'Feil. «Jeg» og «ikke» er bokmålsformer. På nynorsk ville det vært «eg» og «ikkje».',
          },
          {
            id: 'b',
            text: '«Eg likar ikkje å skrive på sidemålet mitt.»',
            isCorrect: true,
            feedback: 'Riktig! «Eg», «likar» og «ikkje» er nynorskformer.',
          },
          {
            id: 'c',
            text: '«Jag gillar inte att skriva på mitt andra språk.»',
            isCorrect: false,
            feedback: 'Feil. Dette er svensk, ikke nynorsk!',
          },
          {
            id: 'd',
            text: '«Jeg liker ikke at skrive på mit sidemål.»',
            isCorrect: false,
            feedback: 'Feil. «At skrive» og «mit» er danske former. Dette er hverken bokmål eller nynorsk.',
          },
        ],
        solution: 'Alternativ B er riktig. Typiske nynorskformer: «eg» (jeg), «likar» (liker), «ikkje» (ikke).',
      },
    },

    // ========== IVAR AASEN ==========
    {
      id: 'norsk-10-3-2-aasen',
      type: 'text',
      content: `## Ivar Aasen — bondegutten som skapte et språk

### Hvem var Ivar Aasen?
Ivar Aasen ble født i 1813 på en liten gård i Ørsta på Sunnmøre. Han vokste opp i fattige kår og fikk aldri formell utdanning utover folkeskolen. Men Aasen hadde en usedvanlig evne til å lære språk — han lærte seg latin, gresk, fransk og tysk på egen hånd.

### Den store reisen
I 1842 begynte Aasen sin store livsoppgave: å reise rundt i Norge og samle inn dialekter. Han besøkte bygder fra Vestlandet til Trøndelag, fra fjordene til fjelldalene. Han noterte ned ord, bøyningsformer, uttale og grammatikk med vitenskapelig presisjon.

Resultatet var banebrytende:
- **Det norske Folkesprogs Grammatik** (1848) — den første grammatikken for norsk folkespråk
- **Ordbog over det norske Folkesprog** (1850) — den første ordboken
- **Prøver af Landsmaalet i Norge** (1853) — eksempler på det nye skriftspråket
- **Norsk Grammatik** (1864) — oppdatert og utvidet grammatikk

### Aasens metode
Aasen valgte ikke én dialekt som «den beste». I stedet sammenlignet han alle dialektene og fant det som var **felles** for dem. Han ville finne «grunnskjelettet» i norsk — de formene som gikk igjen i flest mulig dialekter. Der det var variasjon, valgte han ofte de formene som lå nærmest norrønt.

### Aasens betydning
Uansett hva du mener om nynorsk, er Aasens innsats imponerende:
- Han var en fattig bondegutt som ble en av Europas fremste språkforskere
- Han viste at norske dialekter ikke var «dårlig dansk», men et eget språk med egen grammatikk
- Han ga vanlige nordmenn et skriftspråk som lå nærmere deres eget talespråk
- Hans arbeid inspirerte lignende prosjekter i andre land`,
    },

    // ========== DEFINISJON: HOVEDMÅL OG SIDEMÅL ==========
    {
      id: 'norsk-10-3-2-def-2',
      type: 'definition',
      title: 'Hovedmål og sidemål',
      content: `**Hovedmål** er det skriftspråket (bokmål eller nynorsk) du bruker som ditt primære skriftspråk i skolen. Det er det du skriver mest på, og det er dette du får hovedkarakteren din i.

**Sidemål** er det andre skriftspråket. Alle norske elever må lære å skrive på begge målformene.

**Hvorfor sidemål?**
- Norge har to likestilte offisielle skriftspråk — alle borgere bør kunne lese og forstå begge
- Det gir deg bedre forståelse av norsk språk generelt
- Det er lovpålagt: Opplæringsloven krever at elever skal ha opplæring i begge målformer
- Det trener deg i å tilpasse språket ditt til ulike normer

**Hvem bestemmer hva som er hovedmål?**
- I grunnskolen bestemmer kommunen (nynorsk- eller bokmålskommune)
- I videregående velger eleven selv
- Foreldrene kan søke om fritak, men det innvilges sjelden

**Karakterer:**
- Du får én karakter i norsk hovedmål (skriftlig)
- Du får én karakter i norsk sidemål (skriftlig)
- Du får én karakter i norsk muntlig
- Alle tre teller på vitnemålet

**Tips for sidemål:** Tenk på det som å lære en dialekt — ikke et fremmedspråk. Forskjellene er systematiske og lærbare!`,
    },

    // ========== OPPGAVE 2: AASEN ==========
    {
      id: 'norsk-10-3-2-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-2-ex-2',
        number: '3.2',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva var Ivar Aasens metode for å skape landsmål (nynorsk)?',
        options: [
          {
            id: 'a',
            text: 'Han valgte dialekten fra Sunnmøre som grunnlag fordi det var hans egen',
            isCorrect: false,
            feedback: 'Feil. Aasen valgte ikke én dialekt, men sammenlignet mange dialekter for å finne det som var felles.',
          },
          {
            id: 'b',
            text: 'Han sammenlignet dialektene fra hele Norge og fant de fellestrekkene som gikk igjen i flest mulig',
            isCorrect: true,
            feedback: 'Riktig! Aasen ville finne «grunnskjelettet» i norsk ved å sammenholde dialektene vitenskapelig.',
          },
          {
            id: 'c',
            text: 'Han oversatte norrønt direkte til moderne norsk',
            isCorrect: false,
            feedback: 'Feil. Aasen baserte seg på levende dialekter, ikke på norrønt. Men han valgte ofte former som lå nær norrønt der dialektene varierte.',
          },
          {
            id: 'd',
            text: 'Han tok dansk og byttet ut alle danske ord med norske',
            isCorrect: false,
            feedback: 'Feil. Det var Knud Knudsens metode (som førte til bokmål). Aasen bygde nytt fra bunnen av.',
          },
        ],
        solution: 'Alternativ B er riktig. Aasen sammenlignet dialektene vitenskapelig for å finne det felles grunnlaget.',
      },
    },

    // ========== SPRÅKPOLITIKK ==========
    {
      id: 'norsk-10-3-2-politikk',
      type: 'text',
      content: `## Språkpolitikk — kampen som fortsetter

### Språkpolitikk i praksis
Språkpolitikk handler om de bevisste valgene et samfunn tar om språk: Hvilke språk er offisielle? Hvordan skal de skrives? Hvem bestemmer? I Norge er språkpolitikken uvanlig aktiv.

### Viktige språkpolitiske vedtak
- **1885: Likestillingsvedtaket** — Stortinget bestemmer at landsmål og riksmål er likestilte som offisielle skriftspråk
- **1929: Navnebytte** — Riksmål skifter navn til «bokmål», landsmål til «nynorsk»
- **1930–60-tallet: Samnorskpolitikken** — Forsøk på å smelte bokmål og nynorsk sammen. Mislyktes.
- **2002: Språkrådet** opprettes for å overvåke og utvikle norsk språk
- **2021: Språkloven** — Slår fast at norsk er Norges hovedspråk, og at bokmål og nynorsk er likestilte

### Målloven (nå: Språkloven)
Språkloven stiller krav til offentlige organer:
- Statlige institusjoner skal bruke minst 25 % av hvert skriftspråk
- Alle offentlige skjemaer skal finnes på begge målformer
- Kommuner har vedtatt målform som bestemmer skriftspråket i skolen
- NRK skal bruke minst 25 % nynorsk

### Nynorskens stilling i dag
Nynorsk har en utfordret posisjon:
- Ca. 13 % har nynorsk som hovedmål (synkende fra ca. 30 % i 1950)
- Mange elever bytter fra nynorsk til bokmål i videregående
- Nynorsk dominerer fortsatt i kjerneområdene (Sogn og Fjordane, deler av Hordaland, Møre og Romsdal)
- Nynorsk har en sterk posisjon i litteratur, media (NRK) og offentlig forvaltning

### Hvorfor bevare to skriftspråk?
Argumenter **for** å bevare nynorsk:
- Demokratisk: Alle skal kunne skrive nær sitt eget talespråk
- Kulturarv: Nynorsk representerer en viktig del av norsk identitet
- Språklig mangfold: Beriker norsk kultur og litteratur
- Rettighet: Lovfestet rett til å bruke sitt eget skriftspråk

Argumenter **mot** (som noen fremfører):
- Upraktisk: Dyrt og tungvint med to skriftspråk
- Unødvendig: Bokmål «klarer seg alene»
- Tvang: Mange misliker obligatorisk sidemålsundervisning`,
    },

    // ========== DEFINISJON: SPRÅKRÅDET ==========
    {
      id: 'norsk-10-3-2-def-3',
      type: 'definition',
      title: 'Språkrådet og språknormering',
      content: `**Språkrådet** er Norges offisielle organ for språknormering og språkrøkt. Det ble opprettet i 2002 og ligger under Kulturdepartementet.

**Språkrådets oppgaver:**
- Fastsette rettskrivningsnormen for bokmål og nynorsk
- Gi råd om språkbruk til offentlige og private aktører
- Arbeide mot domenetap til engelsk
- Lage norske avløserord for engelske termer
- Overvåke bruken av bokmål og nynorsk i det offentlige

**Språknormering** betyr å bestemme hva som er «riktig» skrivemåte. I norsk finnes det et uvanlig stort rom for **valgfrihet** — du kan velge mellom ulike former innenfor normen.

**Eksempler på valgfrihet i bokmål:**
- «sola» eller «solen» (begge er lov)
- «boka» eller «boken» (begge er lov)
- «filmen» (bare denne formen — «filma» er ikke lov)

**Eksempler på avløserord Språkrådet har foreslått:**
- «nettbrett» for «tablet»
- «strømme» for «streame»
- «dele» for «share»
- «påvirker» for «influencer»

Noen avløserord slår gjennom (nettbrett), andre ikke (de fleste sier fortsatt «streame»).`,
    },

    // ========== EKSEMPEL: OVERSETT TIL NYNORSK ==========
    {
      id: 'norsk-10-3-2-ex-1',
      type: 'example',
      title: 'Eksempel: Oversett fra bokmål til nynorsk',
      problem: `Oversett denne teksten fra bokmål til nynorsk:

**Bokmål:**
«Jeg har alltid likt å lese bøker. Når jeg leser, glemmer jeg alt annet. Forrige uke leste jeg en bok som handlet om en jente som ikke visste hva hun ville bli. Det var en morsom og spennende historie.»`,
      solution: `**Nynorsk:**
«Eg har alltid likt å lese bøker. Når eg les, gløymer eg alt anna. Førre veke las eg ei bok som handla om ei jente som ikkje visste kva ho ville bli. Det var ei morosam og spennande historie.»

**Forklaring av endringene:**

| Bokmål | Nynorsk | Regel |
|--------|---------|-------|
| jeg | eg | Personlig pronomen |
| leser | les | Presens av sterkt verb |
| glemmer | gløymer | Annet ordvalg + annen vokal |
| annet | anna | Ubestemt pronomen, intetkjønn |
| forrige uke | førre veke | Andre ordformer |
| leste | las | Preteritum av sterkt verb |
| en bok | ei bok | Bok er hunkjønn på nynorsk |
| en jente | ei jente | Jente er hunkjønn |
| ikke | ikkje | Nektingsord |
| hva | kva | Spørreord |
| hun | ho | Personlig pronomen (hunkjønn) |
| morsom | morosam | Adjektivform |
| spennende | spennande | Adjektivform |

**Tips:** Legg merke til at nynorsk bruker hunkjønnsformen «ei» der bokmål kan velge mellom «en» og «ei». I nynorsk er det obligatorisk med tre kjønn.`,
    },

    // ========== OPPGAVE 3: OVERSETT ==========
    {
      id: 'norsk-10-3-2-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-2-ex-3',
        number: '3.3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Oversett setningene fra bokmål til nynorsk. Bruk tabellen i eksempelet over som hjelp.',
        subTasks: [
          {
            label: 'a',
            task: '«Jeg vet ikke hva jeg skal gjøre i morgen.»',
            solution: '«Eg veit ikkje kva eg skal gjere i morgon.»',
          },
          {
            label: 'b',
            task: '«Hun leste en bok om historien til Norge.»',
            solution: '«Ho las ei bok om historia til Noreg.»',
          },
          {
            label: 'c',
            task: '«De spiste middag og snakket om ferien sin.»',
            solution: '«Dei åt middag og snakka om ferien sin.»',
          },
        ],
        hints: [
          'Husk: jeg → eg, ikke → ikkje, hva → kva, hun → ho',
          'Nynorsk har obligatorisk hunkjønn: en bok → ei bok',
        ],
        solution: 'a) «Eg veit ikkje kva eg skal gjere i morgon.» b) «Ho las ei bok om historia til Noreg.» c) «Dei åt middag og snakka om ferien sin.»',
        allowsUpload: true,
      },
    },

    // ========== RETTSKRIVINGSHISTORIE ==========
    {
      id: 'norsk-10-3-2-rettskriving',
      type: 'text',
      content: `## Rettskrivingshistorie — de viktigste reformene

### Hvorfor har norsk hatt så mange rettskrivingsreformer?
De fleste land gjennomfører rettskrivingsreformer svært sjelden. Norge er et unntak — vi har hatt store reformer i 1907, 1917, 1938, 1959, 2005 og 2012. Grunnen er enkel: Vi har hatt et pågående prosjekt med å fornorske bokmål og modernisere nynorsk.

### De viktigste reformene for bokmål

**1907-reformen — den første fornorskingen:**
Erstatter mange danske skrivemåter med norske:
- Harde konsonanter: «gade» → «gate», «brug» → «bruk»
- «efter» → «etter», «sne» → «snø», «sprog» → «språk»

**1917-reformen — mer folkelig:**
Valgfrie folkelige former innføres:
- a-endelser i hunkjønn: «sola» (ved siden av «solen»)
- Diftonger: «stein» (ved siden av «sten»)

**1938-reformen — samnorskens toppunkt:**
De mest radikale formene ble obligatoriske:
- «boka» ble obligatorisk (ikke «boken» for visse ord)
- Stor protest — «foreldreaksjonen» rettet barnas skolebøker

**2012-reformen — opprydding:**
Fjernet mange radikale former og skapte en tydeligere norm:
- Fjernet former som nesten ingen brukte
- Beholdt valgfrihet der det er reell variasjon
- Resultatet er det bokmålet du skriver i dag

### For nynorsk
Nynorsk har også gjennomgått flere reformer, med den siste store i 2012:
- Fjernet arkaiske (gammeldagse) former
- Moderniserte rettskrivingen
- Gjorde normen mer i tråd med faktisk bruk`,
    },

    // ========== OPPGAVE 4: RETTSKRIVINGSREFORMER ==========
    {
      id: 'norsk-10-3-2-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-2-ex-4',
        number: '3.4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva var «samnorsk-politikken»?',
        options: [
          {
            id: 'a',
            text: 'Et forsøk på å gjøre norsk og svensk til ett språk',
            isCorrect: false,
            feedback: 'Feil. Samnorsk handlet om forholdet mellom bokmål og nynorsk, ikke norsk og svensk.',
          },
          {
            id: 'b',
            text: 'Et forsøk på å smelte bokmål og nynorsk sammen til ett felles skriftspråk',
            isCorrect: true,
            feedback: 'Riktig! Tanken var å nærme de to skriftspråkene til hverandre gradvis, slik at de til slutt ble ett. Prosjektet ble oppgitt på 1960–70-tallet.',
          },
          {
            id: 'c',
            text: 'Et forslag om å fjerne nynorsk som offisielt språk',
            isCorrect: false,
            feedback: 'Feil. Samnorsk ville bevare elementer fra begge — ikke fjerne nynorsk.',
          },
          {
            id: 'd',
            text: 'En reform som innførte bokmål som eneste skriftspråk i skolen',
            isCorrect: false,
            feedback: 'Feil. Samnorsk var aldri ment å fjerne nynorsk, men å smelte de to sammen over tid.',
          },
        ],
        solution: 'Alternativ B er riktig. Samnorsk var et forsøk på å forene bokmål og nynorsk til ett skriftspråk.',
      },
    },

    // ========== DEFINISJON: VALGFRIHET ==========
    {
      id: 'norsk-10-3-2-def-4',
      type: 'definition',
      title: 'Valgfrihet i norsk rettskrivning',
      content: `**Valgfrihet** betyr at det finnes flere godkjente skrivemåter av samme ord. Norsk har uvanlig mye valgfrihet sammenlignet med andre språk.

**Eksempler på valgfrihet i bokmål:**
- «boka» eller «boken» (begge er korrekt)
- «sola» eller «solen» (begge er korrekt)
- «jenta» eller «jenten» (begge er korrekt)
- «mjølk» eller «melk» (begge er korrekt)
- «etter hvert» eller «etterhvert» (begge er korrekt)

**Viktig:** Ikke alt er valgfritt!
- «gutten» er riktig — «gutta» er IKKE riktig i bestemt form entall
- «filmen» er riktig — «filma» er IKKE riktig i bestemt form entall
- Du må lære hvilke ord som har valgfrihet, og hvilke som ikke har det

**Hvorfor valgfrihet?**
Valgfriheten skyldes at norsk har mange dialekter, og at rettskrivningen forsøker å gi rom for variasjon. Men den gjør det også vanskeligere å vite hva som er «riktig» — noe mange elever opplever som frustrerende.

**Tips:** Velg én linje og vær konsekvent. Ikke bland «sola» og «boken» i samme tekst — velg enten a-endelser eller en-endelser for hunkjønnsord.`,
    },

    // ========== OPPGAVE 5: VALGFRIHET ==========
    {
      id: 'norsk-10-3-2-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-2-ex-5',
        number: '3.5',
        type: 'classic',
        difficulty: 'lett',
        task: 'Hvilke av disse formene er korrekte i bokmål? Svar «korrekt» eller «feil» for hver.',
        subTasks: [
          {
            label: 'a',
            task: '«sola» (bestemt form entall av «sol»)',
            solution: 'Korrekt. «Sola» er en godkjent bokmålsform (a-ending i hunkjønn).',
            multipleChoiceOptions: ['Korrekt', 'Feil'],
          },
          {
            label: 'b',
            task: '«gutta» (bestemt form entall av «gutt»)',
            solution: 'Feil. «Gutta» er flertallsform. Bestemt form entall er «gutten».',
            multipleChoiceOptions: ['Feil', 'Korrekt'],
          },
          {
            label: 'c',
            task: '«mjølk»',
            solution: 'Korrekt. Både «mjølk» og «melk» er godkjente bokmålsformer.',
            multipleChoiceOptions: ['Korrekt', 'Feil'],
          },
          {
            label: 'd',
            task: '«dom» (som pronomen for «de/dem»)',
            solution: 'Feil. «Dom» er ikke godkjent i bokmål. Du må bruke «de» (subjekt) og «dem» (objekt).',
            multipleChoiceOptions: ['Feil', 'Korrekt'],
          },
        ],
        solution: 'a) Korrekt, b) Feil, c) Korrekt, d) Feil.',
      },
    },

    // ========== EKSEMPEL: SPRÅKLIG VARIASJON ==========
    {
      id: 'norsk-10-3-2-ex-2',
      type: 'example',
      title: 'Eksempel: Samme tekst — tre varianter',
      problem: `Se på denne teksten skrevet i tre ulike varianter:

**Konservativt bokmål:**
«Piken tok boken fra hytten og begynte å lese. Solen skinte, og hun tenkte på fremtiden.»

**Radikalt bokmål:**
«Jenta tok boka fra hylla og begynte å lese. Sola skinte, og hun tenkte på framtida.»

**Nynorsk:**
«Jenta tok boka frå hylla og byrja å lese. Sola skein, og ho tenkte på framtida.»

Hva er forskjellene, og hva forteller de oss?`,
      solution: `**Analyse av forskjellene:**

**Konservativt vs. radikalt bokmål:**
- «piken» → «jenta» (radikalt bruker folkelig form)
- «boken» → «boka» (a-ending i hunkjønn)
- «hytten» → «hylla» (a-ending + annet ord)
- «solen» → «sola» (a-ending)
- «fremtiden» → «framtida» (norsk vokal + a-ending)

**Radikalt bokmål vs. nynorsk:**
- «fra» → «frå» (nynorsk har «frå»)
- «begynte» → «byrja» (annet verb)
- «skinte» → «skein» (sterk bøyning)
- «hun» → «ho» (nynorsk pronomen)

**Hva forteller dette oss?**
- Radikalt bokmål ligger mye nærmere nynorsk enn konservativt bokmål
- Forskjellen mellom de to skriftspråkene er egentlig ganske liten
- Valgfriheten i bokmål gjør at du kan velge en stil som ligger nær nynorsk — eller langt fra
- Alle tre varianter er korrekt norsk!`,
    },

    // ========== OPPGAVE 6: REFLEKSJON ==========
    {
      id: 'norsk-10-3-2-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-2-ex-6',
        number: '3.6',
        type: 'classic',
        difficulty: 'medium',
        task: 'Refleksjonsoppgave: Din egen språklige bakgrunn.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvilket skriftspråk er ditt hovedmål? Ligger det nær dialekten du snakker? Forklar.',
            solution: 'Svar varierer. Poenget er å reflektere over forholdet mellom eget talespråk og skriftspråk, og om det er samsvar eller avstand.',
          },
          {
            label: 'b',
            task: 'Finn tre ord eller uttrykk fra din dialekt som ikke finnes i skriftspråket ditt. Hva betyr de?',
            solution: 'Svar varierer. Eksempler kan være lokale ord for dagligdagse ting, spesielle uttrykk, eller dialektformer som ikke er med i rettskrivningen.',
          },
          {
            label: 'c',
            task: 'Synes du det er viktig at Norge har to skriftspråk? Skriv tre argumenter for eller mot.',
            solution: 'Her finnes ikke ett riktig svar. Poenget er å kunne argumentere saklig for sitt standpunkt, med konkrete argumenter — ikke bare «det er dumt» eller «det er bra».',
          },
        ],
        hints: ['Tenk på ditt eget forhold til språk — når bruker du dialekt, og når skriver du bokmål/nynorsk?'],
        solution: 'Oppgaven handler om å reflektere over egen språklig bakgrunn og ta begrunnet stilling til språkpolitiske spørsmål.',
        allowsUpload: true,
      },
    },

    // ========== OPPGAVE 7: NYNORSK I PRAKSIS ==========
    {
      id: 'norsk-10-3-2-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-2-ex-7',
        number: '3.7',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken påstand om nynorsk er riktig?',
        options: [
          {
            id: 'a',
            text: 'Nynorsk er et gammelt språk som ingen snakker lenger',
            isCorrect: false,
            feedback: 'Feil. Ca. 600 000 nordmenn har nynorsk som hovedmål, og det er et levende, moderne skriftspråk.',
          },
          {
            id: 'b',
            text: 'Nynorsk er basert på norske dialekter og er et likestilt offisielt skriftspråk',
            isCorrect: true,
            feedback: 'Riktig! Nynorsk ble skapt av Ivar Aasen basert på norske dialekter, og er likestilt med bokmål i loven.',
          },
          {
            id: 'c',
            text: 'Nynorsk brukes bare på Vestlandet og har ingen offisiell status',
            isCorrect: false,
            feedback: 'Feil. Nynorsk har full offisiell status og brukes i hele landet, selv om det er sterkest på Vestlandet.',
          },
          {
            id: 'd',
            text: 'Nynorsk og bokmål er to helt forskjellige språk, som norsk og svensk',
            isCorrect: false,
            feedback: 'Feil. Bokmål og nynorsk er to skriftnormer for samme språk — norsk. Forskjellene er mye mindre enn mellom norsk og svensk.',
          },
        ],
        solution: 'Alternativ B er riktig. Nynorsk er et likestilt offisielt skriftspråk basert på norske dialekter.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-3-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelbegreper
- **Bokmål:** Skriftspråk med røtter i dansk, gradvis fornorsket. Brukes av ca. 87 % som hovedmål.
- **Nynorsk:** Skriftspråk basert på norske dialekter, skapt av Ivar Aasen. Brukes av ca. 13 % som hovedmål.
- **Hovedmål/sidemål:** Alle norske elever lærer å skrive på begge målformer.
- **Ivar Aasen:** Bondegutt fra Sunnmøre som kartla dialektene og skapte landsmål (nynorsk).
- **Språkrådet:** Norges offisielle organ for språknormering.
- **Samnorsk:** Mislykket forsøk på å smelte bokmål og nynorsk til ett språk.
- **Valgfrihet:** Norsk rettskrivning tillater flere skrivemåter av mange ord.
- **Rettskrivingsreformer:** Norge har hatt mange reformer for å fornorske bokmål og modernisere nynorsk.

### Viktige sammenhenger
- Bokmål og nynorsk er to svar på det samme problemet: Hva gjør vi etter dansketiden?
- Språkpolitikk handler om mer enn språk — det handler om identitet, demokrati og makt
- Valgfriheten i norsk gjenspeiler det store dialektmangfoldet i landet
- Forskjellene mellom bokmål og nynorsk er systematiske og lærbare`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-3-2-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-2-ex-8',
        number: '3.8',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Drøftingsoppgave: Bør sidemålsundervisningen avskaffes?

Skriv en argumenterende tekst (250–350 ord) der du drøfter følgende:

«Sidemålsundervisningen bør avskaffes. Det er bortkastet tid å lære elever et skriftspråk de aldri kommer til å bruke.»

Du skal:
a) Presentere argumenter FOR å beholde sidemålsundervisningen
b) Presentere argumenter MOT sidemålsundervisningen
c) Ta stilling og begrunne ditt eget syn
d) Vise at du forstår den historiske bakgrunnen for språksituasjonen i Norge`,
        hints: [
          'Husk å bruke fagbegreper: hovedmål, sidemål, språkpolitikk, likestilling',
          'En god drøfting tar begge sider seriøst, selv om du har en klar mening',
          'Bruk det du har lært om norsk språkhistorie som bakgrunn',
        ],
        solution: 'En god drøfting viser evne til å se saken fra flere sider, bruker fagbegreper og historisk kunnskap, og tar en begrunnet stilling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-3-2-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-3-2-ex-9',
        number: '3.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Skriveoppgave: Oversett og reflekter.

a) Skriv en kort tekst (100–150 ord) på bokmål om hva du har lært i dette kapittelet.

b) Oversett teksten din til nynorsk.

c) Skriv en kort refleksjon (50–100 ord): Hva var vanskeligst å oversette? Hva overrasket deg?`,
        hints: [
          'Bruk oversettelsestabellene fra kapittelet som hjelp',
          'Vær konsekvent — velg én stil og hold deg til den',
          'Husk de viktigste forskjellene: eg/ikkje/kva/ho/a-endelser',
        ],
        solution: 'Poenget er å praktisere nynorsk og reflektere over forskjellene mellom de to målformene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.1: Mediekritikk
// LK20: Vurdere og kritisk reflektere over medietekster, reklame og
//        algoritmestyrt innhold
// ============================================================================

export const CHAPTER_NORSK_10_4_1: TextbookChapter = {
  id: 'norsk-10-4-1',
  courseId: 'norsk-10',
  chapterNumber: '4.1',
  title: 'Mediekritikk',
  description: 'Lær å analysere medietekster kritisk, gjennomskue clickbait og algoritmestyrt innhold, forstå reklame og presseetikk.',
  estimatedMinutes: 75,
  competenceGoals: [
    'vurdere og kritisk reflektere over medietekster og reklame',
    'analysere hvordan algoritmer påvirker informasjonsflyten',
    'kjenne til presseetiske regler og medienes samfunnsrolle',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-4-1-intro',
      type: 'text',
      content: `## Mediekritikk: Hvordan gjennomskue det du ser og leser

Du våkner om morgenen og sjekker telefonen. Instagram viser deg bilder av folk med perfekte liv. TikTok serverer deg videoer som treffer akkurat det du er interessert i. En nyhetsvarsling popper opp med en dramatisk overskrift. En venn har delt en «vitenskapelig» artikkel som virker for god til å være sann.

Uten at du tenker over det, har du allerede blitt utsatt for algoritmer, reklame, vinkling og kanskje falsk informasjon — alt før frokost.

Vi lever i en mediert verden. Det meste av det du vet om verden utenfor din egen hverdag, vet du gjennom medier. Og medier er ikke nøytrale speil — de velger, vinkler, kutter og former informasjonen. Noen ganger med de beste intensjoner. Andre ganger for å tjene penger. Og noen ganger for å manipulere deg.

I dette kapittelet skal du lære å **gjennomskue** det du ser og leser. Du skal bli en kritisk mediebruker — en som ikke bare konsumerer, men **analyserer**.`,
    },

    // ========== DEFINISJON: MEDIEANALYSE ==========
    {
      id: 'norsk-10-4-1-def-1',
      type: 'definition',
      title: 'Medieanalyse — å lese medietekster kritisk',
      content: `**Medieanalyse** er en systematisk undersøkelse av en medietekst — enten det er en nyhetsartikkel, en reklame, en YouTube-video, et Instagram-innlegg eller en podcast.

**Spørsmål du bør stille til enhver medietekst:**

**1. Avsender:** Hvem har laget dette? Hva er deres motiv?
- Er det en journalist, en bedrift, en privatperson, en organisasjon?
- Vil de informere, selge, underholde, påvirke eller manipulere?

**2. Budskap:** Hva er hovedbudskapet? Hva prøver teksten å overbevise deg om?
- Hva sies direkte? Hva antydes?
- Er det fakta, meninger, eller en blanding?

**3. Målgruppe:** Hvem er teksten laget for?
- Alder, kjønn, interesser, politisk ståsted?
- Hvordan kan du se hvem målgruppen er?

**4. Virkemidler:** Hvilke teknikker brukes?
- Bilder, musikk, farger, ordvalg, layout
- Appell til følelser (patos), logikk (logos) eller troverdighet (etos)

**5. Kontekst:** Når og hvor ble teksten publisert?
- Hva skjedde i samfunnet på det tidspunktet?
- Hvordan påvirker publiseringskanalen teksten?

**Husk:** Alle medietekster er konstruerte — noen har valgt hva som skal med og hva som skal utelates.`,
    },

    // ========== OPPGAVE 1: MEDIEANALYSE ==========
    {
      id: 'norsk-10-4-1-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-1-ex-1',
        number: '4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Når du analyserer en medietekst, hva er det FØRSTE du bør spørre deg?',
        options: [
          {
            id: 'a',
            text: 'Er teksten morsom?',
            isCorrect: false,
            feedback: 'Feil. Om teksten er underholdende er ikke det viktigste spørsmålet i en medieanalyse.',
          },
          {
            id: 'b',
            text: 'Hvem har laget dette, og hva er motivet deres?',
            isCorrect: true,
            feedback: 'Riktig! Avsenderen og motivet er det viktigste utgangspunktet. En reklame har et helt annet motiv enn en nyhetsartikkel.',
          },
          {
            id: 'c',
            text: 'Hvor mange likes har teksten fått?',
            isCorrect: false,
            feedback: 'Feil. Popularitet sier ingenting om kvaliteten eller troverdigheten til en medietekst.',
          },
          {
            id: 'd',
            text: 'Er teksten lang eller kort?',
            isCorrect: false,
            feedback: 'Feil. Lengden på en tekst sier lite om innholdet eller troverdigheten.',
          },
        ],
        solution: 'Alternativ B er riktig. Avsender og motiv er alltid det viktigste utgangspunktet for medieanalyse.',
      },
    },

    // ========== CLICKBAIT OG ALGORITMER ==========
    {
      id: 'norsk-10-4-1-clickbait',
      type: 'text',
      content: `## Clickbait og algoritmer — kampen om oppmerksomheten din

### Hva er clickbait?
**Clickbait** er overskrifter og innhold som er designet for å få deg til å klikke — ofte ved å overdrive, skape nysgjerrighet eller spille på følelser, uten at innholdet lever opp til løftet.

### Eksempler på clickbait-teknikker
- **Mystifisering:** «Du vil ikke tro hva som skjedde da hun åpnet døren...»
- **Overdrivelse:** «SJOKKERENDE funn: Denne matvaren er FARLIG!»
- **Følelsesappell:** «Denne gutten ble mobbet. Det han gjorde etterpå fikk alle til å gråte.»
- **Ufullstendig informasjon:** «Én ting alle vellykkede mennesker gjør om morgenen»
- **Nummererte lister:** «7 ting du gjør feil når du sover»

### Hvorfor fungerer clickbait?
Clickbait utnytter psykologiske mekanismer:
- **Nysgjerrighetsgapet:** Hjernen din *hater* ufullstendig informasjon og vil lukke gapet
- **Frykt:** Vi klikker på ting som kan være farlige for oss
- **Sosial bekreftelse:** «Alle gjør dette» — vi vil passe inn
- **FOMO (Fear Of Missing Out):** Vi er redde for å gå glipp av noe viktig

### Algoritmenes rolle
Algoritmer er de usynlige «reglene» som bestemmer hva du ser i sosiale medier og søkemotorer. De er designet for å holde deg på plattformen så lenge som mulig.

**Hvordan fungerer algoritmer?**
1. De analyserer hva du har klikket på, likt og delt tidligere
2. De viser deg mer av det samme — innhold som ligner det du allerede liker
3. De prioriterer innhold som skaper sterke reaksjoner (sinne, begeistring, sjokk)
4. De filtrerer bort innhold som algoritmen tror du ikke er interessert i

### Filterbobler og ekkokamre
Resultatet er at du havner i en **filterboble** — du ser bare informasjon som bekrefter det du allerede tror. Hvis du følger folk med samme meninger som deg, forsterkes disse meningene. Motstemmer filtreres bort. Dette kalles et **ekkokammer**.

**Konsekvenser:**
- Du får et skjevt bilde av virkeligheten
- Politisk polarisering øker — folk lever i «ulike virkeligheter»
- Falsk informasjon spres lettere innenfor lukkede grupper
- Det blir vanskeligere å forstå folk som er uenige med deg`,
    },

    // ========== DEFINISJON: FILTERBOBLE ==========
    {
      id: 'norsk-10-4-1-def-2',
      type: 'definition',
      title: 'Filterboble og ekkokammer',
      content: `**Filterboble** er et begrep innført av Eli Pariser i 2011. Det beskriver fenomenet der algoritmer skaper en «boble» rundt deg av informasjon som passer dine eksisterende interesser og meninger.

**Hvordan oppstår en filterboble?**
- Google viser deg søkeresultater basert på din tidligere søkehistorikk
- Facebook/Instagram viser deg innlegg fra folk du interagerer mest med
- TikTok bygger en «For You»-side basert på hva du har sett ferdig og likt
- YouTube anbefaler videoer som ligner det du allerede har sett

**Ekkokammer** er et relatert begrep: Et miljø der du bare hører meninger som bekrefter dine egne. Sosiale medier kan forsterke dette, men ekkokamre finnes også i den fysiske verden — f.eks. vennegrupper der alle mener det samme.

**Eksempel:** To ungdommer søker på «klima» i Google. Den ene har lest mye om klimakrisen, den andre har sett mange videoer som er skeptiske til klimaforskning. De kan få vidt forskjellige søkeresultater — og begge tror de ser «sannheten».

**Hva kan du gjøre?**
- Oppsøk bevisst kilder du er uenig med
- Varier mediebruken din — ikke bare sosiale medier
- Vær bevisst på at algoritmen «vil» holde deg engasjert, ikke informert
- Bruk inkognitomodus for å se hva andre ser`,
    },

    // ========== OPPGAVE 2: CLICKBAIT ==========
    {
      id: 'norsk-10-4-1-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-1-ex-2',
        number: '4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser disse overskriftene. Hvilke er clickbait, og hvilke er seriøse nyheter? Begrunn.',
        subTasks: [
          {
            label: 'a',
            task: '«SJOKKERENDE: Lærere avslører den ene tingen som ødelegger elevene»',
            solution: 'Clickbait. Kjennetegn: Store bokstaver (SJOKKERENDE), mystifisering («den ene tingen»), overdrivelse («ødelegger»). Overskriften gir ikke konkret informasjon.',
          },
          {
            label: 'b',
            task: '«SSB: Ungdomsarbeidsledigheten steg med 1,2 prosentpoeng i tredje kvartal»',
            solution: 'Seriøs nyhetsoverskrift. Kjennetegn: Navngitt kilde (SSB), konkrete tall (1,2 prosentpoeng), saklig språk, spesifikt tidsrom.',
          },
          {
            label: 'c',
            task: '«Du vil IKKE tro hva denne 15-åringen fant i skogen»',
            solution: 'Clickbait. Kjennetegn: Direkte henvendelse («du»), mystifisering, store bokstaver (IKKE), mangler konkret informasjon. Utnytter nysgjerrighetsgapet.',
          },
        ],
        hints: ['Se etter disse tegnene: overdrivelse, mystifisering, store bokstaver, manglende konkret informasjon'],
        solution: 'Overskrift A og C er clickbait, B er en seriøs nyhetsoverskrift.',
      },
    },

    // ========== OPPGAVE 3: ALGORITMER ==========
    {
      id: 'norsk-10-4-1-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-1-ex-3',
        number: '4.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er en «filterboble»?',
        options: [
          {
            id: 'a',
            text: 'Et filter du setter på bilder i sosiale medier',
            isCorrect: false,
            feedback: 'Feil. Filterboble har ingenting med bildefiltre å gjøre — det handler om hvilken informasjon du ser.',
          },
          {
            id: 'b',
            text: 'En boble av informasjon som bekrefter det du allerede tror, skapt av algoritmer',
            isCorrect: true,
            feedback: 'Riktig! Algoritmer viser deg mer av det du liker, og du ender opp i en «boble» der du bare ser informasjon som bekrefter dine eksisterende meninger.',
          },
          {
            id: 'c',
            text: 'Et program som blokkerer reklame på internett',
            isCorrect: false,
            feedback: 'Feil. Det du tenker på er en annonseblokker. En filterboble handler om informasjonsfiltrering.',
          },
          {
            id: 'd',
            text: 'En type kryptering som beskytter personvernet ditt',
            isCorrect: false,
            feedback: 'Feil. Filterbobler handler om hvilken informasjon du ser, ikke om personvern.',
          },
        ],
        solution: 'Alternativ B er riktig. En filterboble er en boble av bekreftende informasjon skapt av algoritmer.',
      },
    },

    // ========== REKLAME OG SKJULT PÅVIRKNING ==========
    {
      id: 'norsk-10-4-1-reklame',
      type: 'text',
      content: `## Reklame og skjult påvirkning

### Tradisjonell reklame vs. moderne reklame
Tradisjonell reklame er lett å gjenkjenne: en TV-reklame, en annonse i avisen, en plakat på bussen. Du *vet* at det er reklame, og du kan velge å ignorere den.

Moderne reklame er vanskeligere å oppdage:
- **Sponset innhold:** Artikler som ser ut som nyheter, men er betalt av en bedrift
- **Influencer-markedsføring:** Når en influencer anbefaler et produkt — er det en ekte anbefaling eller betalt reklame?
- **Produktplassering:** Merkevarer som dukker opp «naturlig» i filmer, serier og YouTube-videoer
- **Native advertising:** Reklame designet for å se ut som redaksjonelt innhold

### Reklamens virkemidler
Reklame bruker mange av de samme virkemidlene som vi kjenner fra retorikk:

**Etos — troverdighet:**
- «8 av 10 tannleger anbefaler...» (appell til ekspertise)
- Kjente personer fronter produktet
- Vitenskapelig design: Grafer, statistikk, hvite frakker

**Patos — følelser:**
- Søte barn, fine landskap, glad musikk
- Frykt: «Beskytt familien din med...»
- Drømmen: «Lev ditt beste liv med...»
- Tilhørighet: «Alle de kule bruker...»

**Logos — logikk:**
- Sammenligning: «50 % billigere enn konkurrenten»
- Fakta: Ingredienslister, tekniske spesifikasjoner
- Problemløsning: «Har du dette problemet? Vi har løsningen!»

### Merking av reklame
I Norge er det lovpålagt å merke reklame. Markedsføringsloven krever at all reklame skal være tydelig merket, også i sosiale medier. Influencere må bruke «annonse» eller «samarbeid» når de promoterer produkter de får betalt for.`,
    },

    // ========== EKSEMPEL: ANALYSE AV REKLAME ==========
    {
      id: 'norsk-10-4-1-ex-1',
      type: 'example',
      title: 'Eksempel: Analyse av en Instagram-reklame',
      problem: `Se for deg dette Instagram-innlegget fra en influencer med 500 000 følgere:

**Bilde:** Influenceren sitter i en solnedgang med et glass grønn smoothie.
**Tekst:** «Omg denne smoothien har literally endret livet mitt!! Jeg har så mye mer energi og sover så mye bedre. Dere MÅ prøve @SuperGreenJuice — bruk koden MINRABATT for 20 % avslag! #samarbeid»

Analyser dette innlegget som en medietekst.`,
      solution: `**Medieanalyse:**

**Avsender:** En influencer som er betalt for å promotere produktet. Merket med #samarbeid, altså reklame.

**Budskap:** At denne smoothien gir deg mer energi og bedre søvn. Det underliggende budskapet er: «Kjøp dette produktet og du kan bli som meg.»

**Målgruppe:** Unge mennesker (mest kvinner) som følger influencere, er interessert i helse og livsstil.

**Virkemidler:**
- **Patos:** Bildet av solnedgangen skaper en drømmeaktig stemning
- **Etos:** Influencerens personlige anbefaling gir troverdighet (parasosial relasjon)
- **Overdrivelse:** «Endret livet mitt» er en sterk påstand for en smoothie
- **Handleoppfordring:** Rabattkode skaper hastverk
- **Uformelt språk:** «Omg», «literally», «dere MÅ» — skaper nærhet og tillit

**Kritiske spørsmål:**
- Er påstandene dokumentert? Har smoothien vitenskapelig bevist effekt?
- Ville influenceren anbefalt dette uten betaling?
- Er merkingen tydelig nok?`,
    },

    // ========== OPPGAVE 4: REKLAME ==========
    {
      id: 'norsk-10-4-1-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-1-ex-4',
        number: '4.4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Analyser moderne reklame i din egen hverdag.',
        subTasks: [
          {
            label: 'a',
            task: 'Finn et eksempel på reklame i sosiale medier (sponset innlegg, influencer-anbefaling o.l.). Beskriv kort hva det er.',
            solution: 'Svar varierer. Eleven bør kunne identifisere et konkret eksempel fra sin egen mediehverdag.',
          },
          {
            label: 'b',
            task: 'Analyser reklamen: Hvem er avsenderen? Hva er budskapet? Hvilke virkemidler brukes? Hvem er målgruppen?',
            solution: 'En god analyse identifiserer avsender, budskap, virkemidler (patos/etos/logos) og målgruppe.',
          },
          {
            label: 'c',
            task: 'Er det tydelig merket som reklame? Burde det vært tydeligere? Begrunn.',
            solution: 'Eleven bør vise kjennskap til merkeplikten og reflektere over om merkingen er tilstrekkelig.',
          },
        ],
        hints: ['Bruk medieanalysemodellen: Avsender, budskap, målgruppe, virkemidler, kontekst'],
        solution: 'En god analyse bruker medieanalysemodellen systematisk og viser kritisk bevissthet.',
        allowsUpload: true,
      },
    },

    // ========== PRESSEETIKK ==========
    {
      id: 'norsk-10-4-1-presseetikk',
      type: 'text',
      content: `## Presseetikk — medienes ansvar

### Hva er presseetikk?
Pressen (journalister, redaktører, medieselskaper) har en enorm makt: De bestemmer hva som blir nyheter, hvordan saker vinkles, og hvem som får slippe til med sin versjon. Med denne makten følger et stort ansvar.

**Presseetikk** er reglene og prinsippene som styrer hvordan journalister og medier skal opptre. I Norge er det viktigste dokumentet **Vær Varsom-plakaten**.

### Vær Varsom-plakaten (et utvalg viktige punkter)

**1. Samfunnsrollen:**
- Pressen skal verne om ytringsfrihet og trykkefrihet
- Pressen har rett til å informere, avdekke kritikkverdige forhold og overvåke makthavere

**2. Integritet:**
- Redaktøren og journalisten skal ikke la seg påvirke av utenforstående
- Redaksjonelt innhold og reklame skal holdes tydelig adskilt

**3. Kildebruk:**
- Vær kritisk til kildene — sjekk fakta
- Den som utsettes for sterke beskyldninger, skal få uttale seg (tilsvar)

**4. Publiseringsregler:**
- Vis hensyn til ofre og pårørende
- Vær varsom med bruk av navn og bilde
- Barn skal ha et spesielt vern

### PFU — Pressens Faglige Utvalg
PFU er klageorganet der du kan klage hvis du mener en medietekst bryter med Vær Varsom-plakaten. PFU kan gi en avis eller et nettsted en **fellelse** — en offentlig «dom» som sier at mediet har brutt de etiske reglene.`,
    },

    // ========== DEFINISJON: VÆR VARSOM-PLAKATEN ==========
    {
      id: 'norsk-10-4-1-def-3',
      type: 'definition',
      title: 'Vær Varsom-plakaten',
      content: `**Vær Varsom-plakaten** er det viktigste etiske regelverket for norske medier. Den er utarbeidet av Norsk Presseforbund og gjelder for alle norske medier.

**Fire hovedområder:**
1. **Pressens samfunnsrolle** — ytringsfrihet, vaktbikkjefunksjon, informasjonsplikt
2. **Integritet og troverdighet** — uavhengighet fra eiere, annonsører og maktpersoner
3. **Journalistisk atferd og kildebruk** — kildekritikk, faktasjekk, tilsvarsrett
4. **Publiseringsregler** — hensyn til ofre, barn, privatliv

**Selvjustis vs. lovregulering:**
I Norge regulerer pressen seg selv — det er ingen statlig sensur. Man mener at en fri presse er så viktig for demokratiet at staten ikke bør kontrollere den. PFU er bransjeorganets eget klageorgan.

**Kritikk av selvjustis:**
- Noen mener PFU er for mild — en fellelse har ingen juridiske konsekvenser
- Andre mener mediene er for snille med hverandre
- Tilhengerne mener alternativet (statlig regulering) er verre for demokratiet`,
    },

    // ========== OPPGAVE 5: PRESSEETIKK ==========
    {
      id: 'norsk-10-4-1-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-1-ex-5',
        number: '4.5',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hvilken av disse situasjonene er mest sannsynlig et brudd på Vær Varsom-plakaten?',
        options: [
          {
            id: 'a',
            text: 'En avis publiserer fullt navn og bilde av en 14-åring som er mistenkt for butikktyveri',
            isCorrect: true,
            feedback: 'Riktig! Vær Varsom-plakaten sier at barn skal ha et spesielt vern, og at man skal være varsom med navn og bilde — spesielt for mindreårige.',
          },
          {
            id: 'b',
            text: 'En journalist skriver en kritisk artikkel om statsministerens politikk',
            isCorrect: false,
            feedback: 'Feil. Å kritisere makthavere er en del av pressens samfunnsrolle.',
          },
          {
            id: 'c',
            text: 'En avis lar en politiker uttale seg om beskyldninger rettet mot ham',
            isCorrect: false,
            feedback: 'Feil. Tilsvarsrett er i tråd med Vær Varsom-plakaten.',
          },
          {
            id: 'd',
            text: 'En journalist sjekker påstandene i en pressemelding før publisering',
            isCorrect: false,
            feedback: 'Feil. Faktasjekk er god presseskikk.',
          },
        ],
        solution: 'Alternativ A er riktig. Å publisere navn og bilde av en mindreårig mistenkt bryter trolig med Vær Varsom-plakaten.',
      },
    },

    // ========== OPPGAVE 6: PRESSEETISK DILEMMA ==========
    {
      id: 'norsk-10-4-1-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-1-ex-6',
        number: '4.6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Presseetisk dilemma.

En journalist har fått vite at rektor på en videregående skole har brukt skolens penger til private reiser. Rektoren nekter å kommentere saken.`,
        subTasks: [
          {
            label: 'a',
            task: 'Hvilke hensyn taler for å publisere saken raskt? Hvilke taler mot?',
            solution: 'For: Offentlighetens rett til å vite, vaktbikkjefunksjon, misbruk av offentlige midler. Mot: Rektoren er ikke dømt, bør få uttale seg (tilsvarsrett), kan skade uopprettelig.',
          },
          {
            label: 'b',
            task: 'Er det etisk forsvarlig å bruke skjult kamera her? Begrunn med referanse til Vær Varsom-plakaten.',
            solution: 'Skjult kamera kan bare brukes når det er eneste måte å avsløre forhold av vesentlig samfunnsmessig betydning. VVP sier man skal bruke åpne metoder så langt det er mulig.',
          },
          {
            label: 'c',
            task: 'Hva ville du gjort som journalist? Begrunn valget ditt.',
            solution: 'Her finnes ikke ett riktig svar. En god besvarelse veier hensyn mot hverandre og tar en begrunnet beslutning med referanse til presseetiske prinsipper.',
          },
        ],
        hints: [
          'Tenk på tilsvarsretten — den som angripes, skal få forsvare seg',
          'Vurder alvorlighetsgraden',
        ],
        solution: 'En god besvarelse veier hensynet til offentligheten mot hensynet til den omtalte, og begrunner valget med presseetiske prinsipper.',
        allowsUpload: true,
      },
    },

    // ========== EKSEMPEL: VINKLING ==========
    {
      id: 'norsk-10-4-1-ex-2',
      type: 'example',
      title: 'Eksempel: Samme hendelse — ulik vinkling',
      problem: `Regjeringen har bestemt at alle elever skal ha én time ekstra gym per uke. Se på disse tre overskriftene:

**Avis A (VG):** «Elever raser: — Vi har for mye å gjøre allerede!»
**Avis B (Aftenposten):** «Regjering innfører ekstra gymtime i skolen»
**Avis C (Dagbladet):** «Eksperter jubler: Mer trening kan redde ungdomshelsen»

Alle tre handler om samme hendelse. Hva er forskjellen?`,
      solution: `**Analyse av vinkling:**

**Avis A (VG):** Vinkler på konflikten — elevenes motstand. Bruker «raser» (sterkt ord) og sitat for å dramatisere. **Patos-appell.**

**Avis B (Aftenposten):** Vinkler nøytralt og informativt. Beskriver hva som har skjedd uten å ta stilling. **Logos-appell.**

**Avis C (Dagbladet):** Vinkler positivt med fokus på helsegevinst. «Jubler» og «redde» er positive, sterke ord. **Etos-appell** (eksperter som autoritet).

**Hva forteller dette oss?**
- Samme hendelse kan presenteres helt forskjellig avhengig av vinkling
- Valg av kilder påvirker budskapet: elever vs. eksperter
- Ordvalg farger oppfatningen: «raser» vs. «innfører» vs. «jubler»
- Ingen av overskriftene er usanne, men de gir svært ulike inntrykk`,
    },

    // ========== OPPGAVE 7: VINKLING ==========
    {
      id: 'norsk-10-4-1-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-1-ex-7',
        number: '4.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Skriv tre ulike overskrifter til denne hendelsen: «Kommunen vedtar å stenge mobiltelefoner i skoletiden.»',
        subTasks: [
          {
            label: 'a',
            task: 'Skriv en overskrift som vinkler negativt (mot vedtaket).',
            solution: 'Eksempel: «Elever nektes mobil: — Føler vi blir behandlet som barn!»',
          },
          {
            label: 'b',
            task: 'Skriv en overskrift som vinkler positivt (for vedtaket).',
            solution: 'Eksempel: «Forsker: Mobilforbud kan gi bedre karakterer»',
          },
          {
            label: 'c',
            task: 'Skriv en nøytral, saklig overskrift.',
            solution: 'Eksempel: «Kommunestyret vedtok mobilforbud i skoletiden med 25 mot 12 stemmer»',
          },
        ],
        hints: ['Tenk på ordvalg — «forbud» er negativt ladet, «tiltak» er nøytralt'],
        solution: 'Poenget er å vise at samme hendelse kan vinkles helt forskjellig gjennom ordvalg, kildevalg og fokus.',
        allowsUpload: true,
      },
    },

    // ========== OPPGAVE 8: FILTERBOBLE ==========
    {
      id: 'norsk-10-4-1-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-1-ex-8',
        number: '4.8',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva bør du gjøre for å unngå å havne i en filterboble?',
        options: [
          {
            id: 'a',
            text: 'Slutte helt å bruke sosiale medier',
            isCorrect: false,
            feedback: 'Det er en mulighet, men ikke nødvendig. Det viktigste er å være bevisst og aktivt oppsøke ulike perspektiver.',
          },
          {
            id: 'b',
            text: 'Bare lese artikler som har mange likes',
            isCorrect: false,
            feedback: 'Feil. Popularitet er ikke et tegn på troverdighet.',
          },
          {
            id: 'c',
            text: 'Bevisst oppsøke ulike kilder og perspektiver, også de du er uenig med',
            isCorrect: true,
            feedback: 'Riktig! Variert kildebruk og bevisst eksponering for ulike perspektiver er den beste motgiften mot filterbobler.',
          },
          {
            id: 'd',
            text: 'Stole på at algoritmen vet hva som er best for deg',
            isCorrect: false,
            feedback: 'Feil. Algoritmens mål er å holde deg engasjert, ikke å informere deg.',
          },
        ],
        solution: 'Alternativ C er riktig. Variert kildebruk er den beste motgiften mot filterbobler.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-4-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelbegreper
- **Medieanalyse:** Systematisk undersøkelse av medietekster (avsender, budskap, målgruppe, virkemidler, kontekst)
- **Clickbait:** Overskrifter designet for å lokke klikk gjennom overdrivelse og følelsesappell
- **Algoritmer:** Automatiske regler som styrer hva du ser i sosiale medier og søkemotorer
- **Filterboble:** En informasjonsboble der du bare ser innhold som bekrefter det du allerede tror
- **Ekkokammer:** Et miljø der du bare hører meninger som stemmer med dine egne
- **Vær Varsom-plakaten:** Pressens etiske regelverk i Norge
- **PFU:** Pressens Faglige Utvalg — klageorgan for brudd på presseetikken
- **Vinkling:** Hvordan en medietekst velger perspektiv, kilder og ordvalg

### Viktige sammenhenger
- Alle medietekster er konstruerte — noen har valgt hva som skal med
- Algoritmer er designet for engasjement, ikke for opplysning
- Presseetikk handler om balansen mellom ytringsfrihet og ansvar
- Du kan velge å være en kritisk mediebruker`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-4-1-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-1-ex-9',
        number: '4.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Drøftingsoppgave: Algoritmer og demokrati.

Skriv en argumenterende tekst (250–350 ord) der du drøfter:

«Algoritmestyrt innhold i sosiale medier er en trussel mot demokratiet.»

Du skal:
a) Forklare hvordan algoritmer fungerer og hva filterbobler er
b) Argumentere for at dette kan true demokratiet
c) Argumentere mot — finnes det fordeler med algoritmer?
d) Ta stilling og begrunne ditt syn`,
        hints: [
          'Bruk fagbegrepene: algoritme, filterboble, ekkokammer, polarisering',
          'Tenk på hva demokrati krever: informerte borgere, fri debatt, felles virkelighetsforståelse',
        ],
        solution: 'En god drøfting forklarer mekanismene, viser konsekvenser for demokratiet, nyanserer med motargumenter, og tar begrunnet stilling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-4-1-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-1-ex-10',
        number: '4.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Medieanalyse-prosjekt.

Velg én av følgende oppgaver:

**Alternativ 1:** Sammenlign hvordan to ulike aviser dekker den samme nyhetssaken. Bruk medieanalysemodellen og forklar forskjellene i vinkling.

**Alternativ 2:** Gjør et «algoritmeksperiment»: Søk på det samme temaet i inkognitomodus og i din vanlige profil. Sammenlign resultatene.

Skriv en rapport (300–400 ord) om det du finner.`,
        hints: [
          'Dokumenter funnene dine — ta skjermbilder eller noter nøyaktig hva du ser',
          'Bruk fagbegrepene fra kapittelet',
        ],
        solution: 'En god rapport dokumenterer funnene systematisk, bruker fagbegreper, og reflekterer over hva funnene betyr.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4.2: Digitalt personvern og ytringsfrihet
// LK20: Reflektere over etiske problemstillinger knyttet til digitale medier,
//        ytringsfrihet og personvern
// ============================================================================

export const CHAPTER_NORSK_10_4_2: TextbookChapter = {
  id: 'norsk-10-4-2',
  courseId: 'norsk-10',
  chapterNumber: '4.2',
  title: 'Digitalt personvern og ytringsfrihet',
  description: 'Lær om ytringsfrihet og dens grenser, digitalt personvern, GDPR, hatprat, nettvett og digitalt medborgerskap.',
  estimatedMinutes: 70,
  competenceGoals: [
    'reflektere over etiske problemstillinger knyttet til digitale medier',
    'forstå forholdet mellom ytringsfrihet og ansvar',
    'kjenne til personvernlovgivning og kunne ivareta eget og andres personvern',
  ],
  content: [
    // ========== INTRODUKSJON ==========
    {
      id: 'norsk-10-4-2-intro',
      type: 'text',
      content: `## Digitalt personvern og ytringsfrihet: Dine rettigheter — og ditt ansvar

Tenk deg dette: Du legger ut et bilde av deg selv og vennene dine på en fest. Morsomt der og da. Men så deler noen det videre uten å spørre. Det havner på en side du ikke kontrollerer. Om ti år, når du søker jobb, dukker bildet opp i et Google-søk.

Eller dette: En klassekamerat skriver noe stygt om en lærer på sosiale medier. Hundrevis ler og deler. Men er det lov? Er det greit? Og hvor går grensen mellom ytringsfrihet og det som kan ødelegge for andre?

Velkommen til det digitale landskapets vanskeligste spørsmål. I dette kapittelet skal du lære om to rettigheter som noen ganger kolliderer med hverandre: **ytringsfriheten** (retten til å si det du mener) og **personvernet** (retten til å kontrollere informasjon om deg selv).

Du skal også lære om GDPR, hatprat, nettvett og hva det betyr å være en god **digital medborger** — altså en ansvarlig deltaker i det digitale samfunnet.`,
    },

    // ========== DEFINISJON: YTRINGSFRIHET ==========
    {
      id: 'norsk-10-4-2-def-1',
      type: 'definition',
      title: 'Ytringsfrihet',
      content: `**Ytringsfrihet** er retten til å uttrykke sine meninger fritt — i tale, skrift, bilder og andre uttrykksformer. Den er en av de mest grunnleggende menneskerettighetene.

**Hvor er ytringsfriheten beskyttet?**
- **Grunnloven § 100:** «Ytringsfrihet bør finne sted.» Norges viktigste bestemmelse om ytringsfrihet.
- **Den europeiske menneskerettighetskonvensjonen (EMK) art. 10:** Retten til ytringsfrihet i Europa.
- **FNs menneskerettighetserklæring art. 19:** Global beskyttelse av ytringsfrihet.

**Hvorfor er ytringsfrihet viktig?**
- **Demokrati:** Et demokrati krever at folk kan ytre seg fritt om politikk og samfunn
- **Sannhetssøking:** Gjennom fri debatt kan vi finne frem til sannheten
- **Maktbalanse:** Ytringsfrihet gjør det mulig å kritisere makthavere
- **Personlig utvikling:** Mennesker trenger å kunne uttrykke seg for å utvikle seg

**Viktig: Ytringsfrihet er ikke ubegrenset!**
Ytringsfriheten har grenser. Du har rett til å si det du mener, men du har **ikke** rett til å:
- **Oppfordre til vold** mot enkeltpersoner eller grupper
- **True** andre mennesker
- **Fremsette hatytringer** rettet mot grupper basert på etnisitet, religion, seksuell orientering osv.
- **Ærekrenke** — fremsette usanne påstander som skader andres omdømme
- **Bryte taushetsplikten** — dele konfidensiell informasjon du er betrodd

Grensene for ytringsfrihet er noe samfunnet stadig diskuterer. Hva som regnes som «hatytring» vs. «ubehagelig, men lovlig ytring» er ikke alltid opplagt.`,
    },

    // ========== OPPGAVE 1: YTRINGSFRIHET ==========
    {
      id: 'norsk-10-4-2-ex-1-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-2-ex-1',
        number: '4.1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse ytringene er IKKE beskyttet av ytringsfriheten?',
        options: [
          {
            id: 'a',
            text: 'En avis publiserer en artikkel som kritiserer regjeringens politikk',
            isCorrect: false,
            feedback: 'Feil. Politisk kritikk er kjernen av ytringsfriheten — det er nettopp dette den skal beskytte.',
          },
          {
            id: 'b',
            text: 'En person skriver et debattinnlegg med kontroversielle, men lovlige meninger',
            isCorrect: false,
            feedback: 'Feil. Kontroversielle meninger er beskyttet av ytringsfriheten, selv om mange er uenige.',
          },
          {
            id: 'c',
            text: 'En person sender drapstrusler til en politiker på sosiale medier',
            isCorrect: true,
            feedback: 'Riktig! Trusler er straffbart og ikke beskyttet av ytringsfriheten. Ytringsfrihet gir deg ikke rett til å true andre.',
          },
          {
            id: 'd',
            text: 'En elev holder en tale på skolen der hun er uenig med rektors beslutning',
            isCorrect: false,
            feedback: 'Feil. Å uttrykke uenighet er en del av ytringsfriheten.',
          },
        ],
        solution: 'Alternativ C er riktig. Trusler er straffbare og ikke beskyttet av ytringsfriheten.',
      },
    },

    // ========== HATPRAT ==========
    {
      id: 'norsk-10-4-2-hatprat',
      type: 'text',
      content: `## Ytringsfrihet vs. hatprat — hvor går grensen?

### Hva er hatprat?
**Hatprat** (eller hatytringer) er ytringer som angriper en person eller gruppe basert på kjennetegn som etnisitet, religion, kjønn, seksuell orientering, funksjonsevne eller lignende.

### Ulike nivåer av hatprat
Ikke all hatprat er ulovlig. Det er et spekter:

**Ubehagelige, men lovlige ytringer:**
- «Jeg synes innvandringspolitikken er for liberal» — politisk ytring, lovlig
- «Jeg liker ikke den religionen» — meningsytring, lovlig
- Kritikk av grupper eller ideologier — som regel lovlig

**Gråsonen:**
- Nedsettende generaliseringer om grupper
- Fordommer fremstilt som «humor»
- Ytringer som skaper fiendtlighet, men ikke direkte oppfordrer til vold

**Ulovlig hatprat (straffeloven § 185):**
- Ytringer som **truer** eller **forhåner** noen på grunn av hudfarge, etnisitet, religion, seksuell orientering, funksjonsevne
- Ytringer som fremmer hat mot grupper
- Oppfordringer til vold eller diskriminering

### Hatprat på nett
Internett har gjort hatprat til et større problem:
- **Anonymitet:** Folk sier ting de aldri ville sagt ansikt til ansikt
- **Spredning:** Hatytringer kan nå tusenvis av mennesker på sekunder
- **Permanens:** Det du skriver på nett kan bli der for alltid
- **Gruppedynamikk:** Hets kan eskalere raskt i kommentarfelt og grupper
- **Konsekvenser for ofrene:** Forskning viser at netthat fører til angst, depresjon og selvensur

### Hva er forskjellen på ytringsfrihet og hatprat?
- **Ytringsfrihet:** Du har rett til å mene det du vil og si det du mener
- **Hatprat:** Men du har ikke rett til å krenke, true eller oppfordre til vold mot grupper
- **Gråsonen:** Mange ytringer er ubehagelige, men lovlige. Lovens grense er ikke det samme som den moralske grensen.`,
    },

    // ========== DEFINISJON: STRAFFELOVEN § 185 ==========
    {
      id: 'norsk-10-4-2-def-2',
      type: 'definition',
      title: 'Straffeloven § 185 — hatytringer',
      content: `**Straffeloven § 185** er Norges viktigste lovbestemmelse mot hatytringer. Den forbyr ytringer som **truer** eller **forhåner** noen, eller som fremmer **hat, forfølgelse eller ringeakt** overfor noen, på grunn av:

- Hudfarge eller nasjonale eller etniske opprinnelse
- Religion eller livssyn
- Seksuell orientering
- Kjønnsidentitet eller kjønnsuttrykk
- Nedsatt funksjonsevne

**Straffen:** Bot eller fengsel inntil 3 år.

**Viktige presiseringer:**
- Bestemmelsen rammer ytringer i det offentlige rom (inkludert sosiale medier)
- Det kreves at ytringen er fremsatt **overfor** noen, eller at den er **offentlig**
- Politisk debatt om innvandring, religion o.l. er som regel lovlig — det er angrep på **personer og grupper** som er straffbart
- Konteksten er viktig: Det som er akseptabelt i en faglig debatt, kan være straffbart som gaterop

**Eksempler fra rettspraksis:**
- En person ble dømt for å skrive «fandens svarte avkom, reis tilbake til Somalia» på Facebook
- En annen ble dømt for gjentatte hatefulle kommentarer mot samer på nett
- Rene meningsytringer om politikk (f.eks. «jeg er mot innvandring») er IKKE straffbare`,
    },

    // ========== OPPGAVE 2: HATPRAT VS. YTRINGSFRIHET ==========
    {
      id: 'norsk-10-4-2-ex-2-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-2-ex-2',
        number: '4.2',
        type: 'classic',
        difficulty: 'medium',
        task: 'Vurder hver ytring: Er den beskyttet av ytringsfriheten, i gråsonen, eller ulovlig hatprat? Begrunn.',
        subTasks: [
          {
            label: 'a',
            task: '«Regjeringens innvandringspolitikk er en katastrofe for Norge.»',
            solution: 'Beskyttet av ytringsfriheten. Dette er en politisk meningsytring som kritiserer en politikk, ikke en gruppe mennesker.',
          },
          {
            label: 'b',
            task: '«Alle [folkegruppe] er kriminelle og bør kastes ut av landet.»',
            solution: 'Sannsynligvis ulovlig hatprat. Ytringen generaliserer negativt om en hel folkegruppe basert på etnisitet og fremmer hat. Kan rammes av § 185.',
          },
          {
            label: 'c',
            task: '«Jeg synes den religionen har problematiske holdninger til kvinner.»',
            solution: 'Gråsonen, men trolig lovlig. Religions- og kulturkritikk er beskyttet av ytringsfriheten. Det er forskjell på å kritisere en religion og å angripe troende som gruppe.',
          },
          {
            label: 'd',
            task: '«Jeg skal drepe deg, din [skjellsord basert på etnisitet].»',
            solution: 'Klart ulovlig. Dette er en trussel kombinert med hatytring — straffbart både som trussel og etter § 185.',
          },
        ],
        hints: ['Spør deg: Kritiserer ytringen en politikk/ide, eller angriper den en gruppe mennesker?'],
        solution: 'a) Lovlig (politisk ytring), b) Sannsynligvis ulovlig (hatprat), c) Gråsone, trolig lovlig (religionskritikk), d) Klart ulovlig (trussel + hatprat).',
      },
    },

    // ========== OPPGAVE 3: DILEMMA ==========
    {
      id: 'norsk-10-4-2-ex-3-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-2-ex-3',
        number: '4.3',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er den viktigste forskjellen mellom lovlig politisk ytring og ulovlig hatprat?',
        options: [
          {
            id: 'a',
            text: 'Hatprat er ytringer du er uenig i, politiske ytringer er ytringer du er enig i',
            isCorrect: false,
            feedback: 'Feil. Hatprat defineres ikke av om du er enig eller uenig, men av innholdet i ytringen og hvem den rettes mot.',
          },
          {
            id: 'b',
            text: 'Politiske ytringer kritiserer ideer og politikk, hatprat angriper mennesker basert på hvem de er',
            isCorrect: true,
            feedback: 'Riktig! Den avgjørende forskjellen er om ytringen retter seg mot ideer/politikk (lovlig) eller mot mennesker basert på gruppetilhørighet (kan være ulovlig).',
          },
          {
            id: 'c',
            text: 'Hatprat er alltid skriftlig, politiske ytringer er alltid muntlige',
            isCorrect: false,
            feedback: 'Feil. Hatprat kan være både skriftlig og muntlig, det samme gjelder politiske ytringer.',
          },
          {
            id: 'd',
            text: 'Det er ingen forskjell — all kritikk er lovlig i et demokrati',
            isCorrect: false,
            feedback: 'Feil. Demokrati krever ytringsfrihet, men ytringsfriheten har grenser. Trusler og hatytringer er ikke beskyttet.',
          },
        ],
        solution: 'Alternativ B er riktig. Politiske ytringer kritiserer ideer, hatprat angriper mennesker basert på gruppetilhørighet.',
      },
    },

    // ========== PERSONVERN ==========
    {
      id: 'norsk-10-4-2-personvern',
      type: 'text',
      content: `## Digitalt personvern — din rett til å kontrollere dine egne data

### Hva er personvern?
**Personvern** er retten til å bestemme over informasjon om deg selv — hvem som vet hva om deg, og hva de gjør med den informasjonen.

I den digitale verden er personvern blitt en av de viktigste rettighetene — og en av de mest truede.

### Hva vet internett om deg?
Mer enn du tror. Hver gang du bruker internett, legger du igjen digitale spor:
- **Søkehistorikk:** Alt du har søkt etter i Google
- **Posisjonsdata:** Hvor du har vært, med GPS-nøyaktighet
- **Kjøpshistorikk:** Alt du har kjøpt på nett
- **Sosiale medier:** Alt du har likt, delt, kommentert og sendt i DM
- **Biometriske data:** Ansiktsgjenkjenning, fingeravtrykk (Face ID, Touch ID)
- **Nettlesingshistorikk:** Alle nettsider du har besøkt
- **Apper:** Mange apper samler data om deg i bakgrunnen

### Hvem samler inn dataene dine?
- **Teknologiselskaper:** Google, Meta (Facebook/Instagram), Apple, TikTok, Snapchat
- **Annonsører:** Kjøper data for å målrette reklame mot deg
- **Databrokers:** Selskaper som handler med persondata
- **Myndigheter:** Kan be om data i forbindelse med etterforskning
- **Hackere:** Kan stjele data gjennom datainnbrudd

### Hvorfor bør du bry deg?
- Dataene dine kan brukes til å **manipulere** deg (målrettet reklame, politisk påvirkning)
- Personlig informasjon kan **misbrukes** (identitetstyveri, utpressing)
- Du mister **kontroll** over din egen historie (bilder, meldinger, søk)
- Overvåking kan ha en **nedkjølende effekt** — du sensurerer deg selv hvis du vet du blir overvåket`,
    },

    // ========== DEFINISJON: GDPR ==========
    {
      id: 'norsk-10-4-2-def-3',
      type: 'definition',
      title: 'GDPR — personvernforordningen',
      content: `**GDPR** (General Data Protection Regulation) er EUs personvernforordning, som også gjelder i Norge gjennom EØS-avtalen. Den trådte i kraft i 2018 og er den strengeste personvernloven i verden.

**Dine rettigheter under GDPR:**

1. **Rett til informasjon:** Du har rett til å vite hvilke data som samles inn om deg og hvorfor.

2. **Rett til innsyn:** Du kan be et selskap om å gi deg alle data de har om deg.

3. **Rett til retting:** Hvis dataene er feil, kan du kreve at de rettes.

4. **Rett til sletting («retten til å bli glemt»):** Du kan be om at dataene dine slettes.

5. **Rett til å protestere:** Du kan nekte at dataene dine brukes til direkte markedsføring.

6. **Rett til dataportabilitet:** Du kan be om å få dataene dine utlevert i et lesbart format.

**Viktige prinsipper i GDPR:**
- **Samtykke:** Selskaper trenger ditt samtykke for å samle inn data (derfor alle «godta cookies»-meldingene)
- **Formålsbegrensning:** Data kan bare brukes til det formålet de ble samlet inn for
- **Dataminimering:** Selskaper skal ikke samle inn mer data enn nødvendig
- **Aldersgrense:** Barn under 13 år (i Norge) trenger foreldrenes samtykke for å bruke sosiale medier

**Datatilsynet** er det norske organet som håndhever GDPR. De kan gi bøter til selskaper som bryter loven — i alvorlige tilfeller opptil 4 % av selskapets globale omsetning.`,
    },

    // ========== EKSEMPEL: PERSONVERNSCENARIO ==========
    {
      id: 'norsk-10-4-2-ex-1',
      type: 'example',
      title: 'Eksempel: Et personverndilemma',
      problem: `Scenario:

Sara (15) tar en morsom video av venninnen Mia på en fest. I videoen gjør Mia noe litt flaut, men morsomt. Sara legger videoen ut på TikTok uten å spørre Mia først. Videoen går viralt — 50 000 visninger på to dager. Mia synes det er pinlig og ber Sara slette den. Sara sier: «Relax, det er jo bare morsomt. Jeg har ytringsfrihet.»

Hvem har rett? Analyser situasjonen med utgangspunkt i personvern, samtykke og ytringsfrihet.`,
      solution: `**Analyse:**

**Personvern:** Mia har rett til å bestemme over bilder og videoer av seg selv. Å dele en video av noen uten samtykke er et brudd på personvernet — spesielt når innholdet kan oppfattes som flaut eller krenkende.

**Samtykke:** Sara har ikke fått samtykke til å dele videoen. Under GDPR og norsk personvernlov trenger du som regel samtykke for å publisere bilder eller video av andre, spesielt av mindreårige.

**Ytringsfrihet:** Sara har ytringsfrihet, men den gir henne ikke rett til å krenke andres personvern. Ytringsfriheten beskytter først og fremst politiske ytringer og samfunnsdebatt — ikke retten til å dele andres pinlige øyeblikk.

**Konklusjon:**
- **Mia har rett.** Videoen bør slettes.
- Sara bør ha spurt om lov før publisering.
- «Det er jo bare morsomt» er ikke et gyldig argument — det er Mia som bestemmer om hun synes det er morsomt.
- Selv om innholdet ikke er ulovlig, er det etisk problematisk.
- I verste fall kan Sara bli holdt juridisk ansvarlig for brudd på personvernlovgivningen.

**Lærdom:** Tenk deg alltid om før du deler bilder eller video av andre. Spør deg: «Ville jeg likt det hvis noen delte dette av meg?»`,
    },

    // ========== OPPGAVE 4: PERSONVERN ==========
    {
      id: 'norsk-10-4-2-ex-4-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-2-ex-4',
        number: '4.4',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva gir GDPR deg rett til?',
        options: [
          {
            id: 'a',
            text: 'Rett til å slette andres innlegg på sosiale medier',
            isCorrect: false,
            feedback: 'Feil. GDPR gir deg rett til å kontrollere dine egne data, ikke andres innhold generelt.',
          },
          {
            id: 'b',
            text: 'Rett til å vite hvilke data selskaper har om deg, og be om at de slettes',
            isCorrect: true,
            feedback: 'Riktig! GDPR gir deg rett til innsyn (se hva de har) og sletting (be om at det fjernes).',
          },
          {
            id: 'c',
            text: 'Rett til å bruke internett helt anonymt uten at noen kan spore deg',
            isCorrect: false,
            feedback: 'Feil. GDPR gir deg ikke full anonymitet, men kontroll over hvordan dataene dine brukes.',
          },
          {
            id: 'd',
            text: 'Rett til å publisere hva du vil uten konsekvenser',
            isCorrect: false,
            feedback: 'Feil. GDPR handler om personvern, ikke om ytringsfrihet. Du har fortsatt ansvar for det du publiserer.',
          },
        ],
        solution: 'Alternativ B er riktig. GDPR gir deg rett til innsyn i og sletting av dine personlige data.',
      },
    },

    // ========== OPPGAVE 5: DIGITALE SPOR ==========
    {
      id: 'norsk-10-4-2-ex-5-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-2-ex-5',
        number: '4.5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Reflekter over dine egne digitale spor.',
        subTasks: [
          {
            label: 'a',
            task: 'Lag en liste over alle appene og tjenestene du bruker daglig. Hva slags data tror du de samler inn?',
            solution: 'Svar varierer. Typiske apper: Instagram (bilder, likes, meldinger, posisjon), Snapchat (bilder, posisjon, kontakter), Google (søk, posisjon, e-post), TikTok (videovisninger, interesser).',
          },
          {
            label: 'b',
            task: 'Prøv å laste ned dataene dine fra én tjeneste (f.eks. Google Takeout, Instagram «Last ned data»). Hva finner du? Ble du overrasket?',
            solution: 'Svar varierer. De fleste blir overrasket over mengden data: Posisjonshistorikk, søkehistorikk, alle meldinger, alle bilder som er lastet opp — alt er lagret.',
          },
          {
            label: 'c',
            task: 'Hva kunne du gjort for å beskytte personvernet ditt bedre? Skriv tre konkrete tiltak.',
            solution: 'Eksempler: Gå gjennom personverninnstillinger, slå av posisjonstjenester for apper som ikke trenger det, bruke sterke passord, tenke seg om før du deler, lese vilkårene.',
          },
        ],
        hints: ['Du trenger ikke faktisk laste ned data — men tenk gjennom hva som finnes der ute om deg'],
        solution: 'Oppgaven handler om å bli bevisst sine egne digitale spor og ta konkrete grep for bedre personvern.',
        allowsUpload: true,
      },
    },

    // ========== NETTVETT OG DIGITALT MEDBORGERSKAP ==========
    {
      id: 'norsk-10-4-2-nettvett',
      type: 'text',
      content: `## Nettvett og digitalt medborgerskap

### Hva er nettvett?
**Nettvett** handler om å oppføre seg klokt og ansvarlig på internett — både for å beskytte deg selv og for å behandle andre med respekt.

### Nettvett-regler for deg
**Beskytt deg selv:**
- Bruk sterke, unike passord for hver tjeneste
- Vær kritisk til hvem du deler personlig informasjon med
- Tenk deg om før du publiserer — det du legger ut, kan bli der for alltid
- Ikke del andres bilder eller informasjon uten samtykke
- Vær obs på phishing (falske e-poster og meldinger som vil lure deg)

**Behandle andre med respekt:**
- Skriv ingenting du ikke ville sagt ansikt til ansikt
- Ikke del andres hemmeligheter, bilder eller privat informasjon
- Tenk på at det sitter et ekte menneske bak hver skjerm
- Stå opp mot nettmobbing — ikke vær en passiv tilskuer
- Husk at «humor» på andres bekostning kan være vondt

### Digitalt medborgerskap
**Digitalt medborgerskap** handler om å være en ansvarlig og aktiv deltaker i det digitale samfunnet. Det betyr at du:

- **Kjenner rettighetene dine:** Ytringsfrihet, personvern, rett til informasjon
- **Tar ansvar:** For det du publiserer og deler
- **Deltar konstruktivt:** I debatter og samtaler på nett
- **Er kritisk:** Til informasjonen du møter
- **Viser empati:** Overfor andre brukere
- **Forstår konsekvenser:** Av digitale handlinger

### Nettmobbing
Nettmobbing er gjentatt negativ atferd mot en person via digitale kanaler. Det kan ta mange former:
- Stygge kommentarer og meldinger
- Utestenging fra grupper
- Deling av pinlige bilder eller informasjon
- Falske profiler laget for å håne noen
- «Doxxing» — publisering av noens personlige informasjon

Nettmobbing kan ha alvorlige konsekvenser — forskning viser at det kan føre til angst, depresjon, skolevegring og i verste fall selvmord. Alle har et ansvar for å si ifra.`,
    },

    // ========== DEFINISJON: DIGITALT MEDBORGERSKAP ==========
    {
      id: 'norsk-10-4-2-def-4',
      type: 'definition',
      title: 'Digitalt medborgerskap',
      content: `**Digitalt medborgerskap** er evnen til å delta aktivt, ansvarlig og kritisk i det digitale samfunnet. Begrepet bygger på tanken om at internett er et felles rom — et digitalt samfunn — der vi alle er borgere med rettigheter og plikter.

**Ni elementer av digitalt medborgerskap:**

1. **Digital tilgang:** Alle bør ha tilgang til digitale verktøy og internett
2. **Digital handel:** Forstå netthandel, abonnementer og digitale kontrakter
3. **Digital kommunikasjon:** Kommunisere respektfullt og effektivt i digitale kanaler
4. **Digital kompetanse:** Kunne bruke digitale verktøy og forstå hvordan de fungerer
5. **Digital etikette («netikette»):** Oppføre seg høflig og hensynsfullt på nett
6. **Digital lov:** Kjenne til lovene som gjelder på internett (GDPR, § 185, opphavsrett)
7. **Digital rettighet og ansvar:** Kjenne sine rettigheter og ta ansvar for sine handlinger
8. **Digital helse:** Ta vare på sin fysiske og mentale helse i møte med digitale medier
9. **Digital sikkerhet:** Beskytte seg selv og sine data

**Hvorfor er digitalt medborgerskap viktig?**
- Internett er blitt en sentral del av demokratiet — mye politisk debatt foregår på nett
- Uten ansvarlige «digitale borgere» kan nettet bli et sted preget av hat, løgn og manipulasjon
- Skolen har ansvar for å utdanne digitale medborgere (LK20)`,
    },

    // ========== OPPGAVE 6: NETTVETT ==========
    {
      id: 'norsk-10-4-2-ex-6-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-2-ex-6',
        number: '4.6',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken av disse handlingene viser DÅRLIG nettvett?',
        options: [
          {
            id: 'a',
            text: 'Du bruker et sterkt, unikt passord for hver tjeneste',
            isCorrect: false,
            feedback: 'Feil. Å bruke sterke, unike passord er godt nettvett.',
          },
          {
            id: 'b',
            text: 'Du deler et flaut bilde av en venn uten å spørre, fordi du synes det er morsomt',
            isCorrect: true,
            feedback: 'Riktig! Å dele bilder av andre uten samtykke er dårlig nettvett — det bryter med personvernet og kan være vondt for den det gjelder.',
          },
          {
            id: 'c',
            text: 'Du sjekker personverninnstillingene dine jevnlig',
            isCorrect: false,
            feedback: 'Feil. Å sjekke personverninnstillinger er godt nettvett.',
          },
          {
            id: 'd',
            text: 'Du tenker deg om før du publiserer noe kontroversielt',
            isCorrect: false,
            feedback: 'Feil. Å tenke seg om før man publiserer er godt nettvett.',
          },
        ],
        solution: 'Alternativ B er riktig. Å dele bilder av andre uten samtykke er dårlig nettvett og kan bryte personvernloven.',
      },
    },

    // ========== EKSEMPEL: DIGITAL DEBATT ==========
    {
      id: 'norsk-10-4-2-ex-2',
      type: 'example',
      title: 'Eksempel: Konstruktiv vs. destruktiv nettdebatt',
      problem: `Se på disse to kommentarene under en nyhetsartikkel om innvandring:

**Kommentar A:**
«Alle innvandrere er kriminelle og bør kastes ut! Norge for nordmenn!! 🤬»

**Kommentar B:**
«Jeg mener innvandringspolitikken bør strammes inn. Integreringen fungerer ikke godt nok, og det skaper utfordringer for både innvandrere og samfunnet. Vi trenger bedre systemer for språkopplæring og arbeidstilknytning.»

Begge er kritiske til innvandring. Hva er forskjellen?`,
      solution: `**Analyse:**

**Kommentar A:**
- Generaliserer om en hel gruppe («alle innvandrere»)
- Bruker nedsettende språk
- Kan rammes av straffeloven § 185 (hatytring)
- Bidrar ikke til konstruktiv debatt
- Appellerer til frykt og sinne (patos)

**Kommentar B:**
- Kritiserer politikken, ikke mennesker
- Bruker saklig og respektfullt språk
- Foreslår konkrete løsninger
- Bidrar til konstruktiv debatt
- Appellerer til logikk og fornuft (logos)

**Forskjellen:**
- Kommentar A angriper **mennesker** basert på gruppetilhørighet
- Kommentar B kritiserer **systemer og politikk** og foreslår forbedringer
- Begge uttrykker skepsis til innvandring, men på helt forskjellige måter
- Kommentar B er et eksempel på godt digitalt medborgerskap — man kan være uenig og kritisk uten å være hatsk

**Lærdom:** Du kan ha sterke meninger og uttrykke dem. Men måten du gjør det på, avgjør om du bidrar til demokratiet eller undergraver det.`,
    },

    // ========== OPPGAVE 7: SCENARIO ==========
    {
      id: 'norsk-10-4-2-ex-7-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-2-ex-7',
        number: '4.7',
        type: 'classic',
        difficulty: 'medium',
        task: 'Digitale dilemmaer — hva ville du gjort?',
        subTasks: [
          {
            label: 'a',
            task: 'Du ser at en klassekamerat blir mobbet i en gruppesamtale. Ingen sier noe. Hva gjør du?',
            solution: 'Godt svar: Si ifra i gruppen, ta kontakt med den som mobbes privat, melde fra til en voksen. Viktig: Å være en passiv tilskuer gjør deg medansvarlig. Digitalt medborgerskap krever at man handler.',
          },
          {
            label: 'b',
            task: 'En venn ber deg dele passordet ditt til en strømmetjeneste. Er det greit?',
            solution: 'Det er et brudd på brukervilkårene og en sikkerhetsrisiko. Godt nettvett: Ikke del passord. Bruk heller familieabonnement. Passord er personlige.',
          },
          {
            label: 'c',
            task: 'Du oppdager at et nettsted har samlet inn data om deg uten at du har samtykket. Hva kan du gjøre?',
            solution: 'Du kan: 1) Bruke GDPR-retten til innsyn og sletting, 2) Klage til Datatilsynet, 3) Blokkere cookies og sporing, 4) Kreve at dataene slettes. Selskapet kan få bot for brudd på GDPR.',
          },
        ],
        hints: ['Tenk på personvern, nettvett og medborgerskap — hva er det rette å gjøre?'],
        solution: 'Oppgaven handler om å anvende kunnskap om nettvett, personvern og digitalt medborgerskap i konkrete situasjoner.',
        allowsUpload: true,
      },
    },

    // ========== OPPGAVE 8: YTRINGSFRIHET OG PERSONVERN ==========
    {
      id: 'norsk-10-4-2-ex-8-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-2-ex-8',
        number: '4.8',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Når kolliderer ytringsfrihet og personvern?',
        options: [
          {
            id: 'a',
            text: 'Når du ytrer en politisk mening i et debattinnlegg',
            isCorrect: false,
            feedback: 'Feil. Politiske meningsytringer kolliderer sjelden med personvern — de handler om ideer, ikke om enkeltpersoners privatliv.',
          },
          {
            id: 'b',
            text: 'Når en journalist avslører korrupsjon hos en offentlig person',
            isCorrect: false,
            feedback: 'Delvis riktig — det er en spenning her, men offentlige personer har svakere personvern i kraft av sin rolle. Pressens vaktbikkjefunksjon veier tungt.',
          },
          {
            id: 'c',
            text: 'Når noen publiserer private bilder eller sensitiv informasjon om en annen person uten samtykke',
            isCorrect: true,
            feedback: 'Riktig! Her kolliderer din «ytring» (bildet/informasjonen) med den andre personens rett til personvern. Personvernet veier som regel tyngst i slike tilfeller.',
          },
          {
            id: 'd',
            text: 'De kolliderer aldri — ytringsfrihet og personvern er alltid i harmoni',
            isCorrect: false,
            feedback: 'Feil. Ytringsfrihet og personvern kan absolutt komme i konflikt med hverandre — det er en av de viktigste spenningene i moderne samfunn.',
          },
        ],
        solution: 'Alternativ C er riktig. Ytringsfrihet og personvern kolliderer typisk når noen deler andres private informasjon.',
      },
    },

    // ========== OPPSUMMERING ==========
    {
      id: 'norsk-10-4-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

### Nøkkelbegreper
- **Ytringsfrihet:** Retten til å uttrykke sine meninger fritt, beskyttet av Grunnloven § 100
- **Hatprat:** Ytringer som angriper personer/grupper basert på etnisitet, religion, seksuell orientering o.l.
- **Straffeloven § 185:** Norges lov mot hatytringer — forbyr å true/forhåne basert på gruppetilhørighet
- **Personvern:** Retten til å kontrollere informasjon om deg selv
- **GDPR:** EUs personvernforordning — gir deg rett til innsyn, sletting og kontroll over dine data
- **Datatilsynet:** Norsk tilsynsorgan som håndhever GDPR
- **Samtykke:** Du trenger tillatelse for å dele andres bilder og personlige informasjon
- **Digitalt medborgerskap:** Å delta aktivt, ansvarlig og kritisk i det digitale samfunnet
- **Nettvett:** Klok og ansvarlig oppførsel på internett
- **Nettmobbing:** Gjentatt negativ atferd mot en person via digitale kanaler

### Viktige sammenhenger
- Ytringsfrihet og personvern er begge grunnleggende rettigheter — men de kan komme i konflikt
- Ytringsfrihet gir deg rett til å mene hva du vil, men ikke til å true, hete eller krenke
- GDPR gir deg kontroll over dine data, men krever at du også respekterer andres
- Digitalt medborgerskap handler om å balansere rettigheter med ansvar`,
    },

    // ========== SAMLEOPPGAVE 1 ==========
    {
      id: 'norsk-10-4-2-ex-9-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-2-ex-9',
        number: '4.9',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Drøftingsoppgave: Ytringsfrihet i den digitale tidsalderen.

Skriv en argumenterende tekst (250–350 ord) der du drøfter:

«Ytringsfriheten bør begrenses mer på sosiale medier for å beskytte folk mot hatprat og nettmobbing.»

Du skal:
a) Forklare hva ytringsfrihet er og hvorfor den er viktig
b) Forklare problemet med hatprat og nettmobbing
c) Argumentere for strengere regulering
d) Argumentere mot strengere regulering
e) Ta stilling og begrunne ditt syn`,
        hints: [
          'Bruk fagbegrepene: ytringsfrihet, hatprat, § 185, personvern, sensur',
          'En god drøfting viser at du ser saken fra flere sider',
          'Tenk på: Hvem skal bestemme hva som er «hatprat» vs. «ubehagelig mening»?',
        ],
        solution: 'En god drøfting forklarer spenningen mellom ytringsfrihet og beskyttelse, bruker fagbegreper, ser saken fra flere sider, og tar en begrunnet stilling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 2 ==========
    {
      id: 'norsk-10-4-2-ex-10-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-2-ex-10',
        number: '4.10',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Prosjektoppgave: Din digitale hverdag.

Skriv en reflekterende tekst (300–400 ord) om ditt eget forhold til digitalt personvern og ytringsfrihet. Du skal:

a) Beskrive din egen digitale hverdag: Hvilke tjenester bruker du? Hva deler du?
b) Vurdere ditt eget personvern: Er du flink til å beskytte deg selv? Hva kunne du gjort bedre?
c) Reflektere over ditt eget ansvar: Har du noen gang delt noe du ikke burde? Har du opplevd hatprat eller nettmobbing?
d) Foreslå tre konkrete tiltak for bedre digitalt medborgerskap i klassen din`,
        hints: [
          'Vær ærlig, men del ikke noe du er ukomfortabel med',
          'Bruk fagbegreper: personvern, samtykke, digitalt medborgerskap, nettvett',
          'Konkrete tiltak er bedre enn vage ønsker',
        ],
        solution: 'En god tekst er personlig og ærlig, bruker fagbegreper, viser selvinnsikt, og foreslår konkrete, gjennomførbare tiltak.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },

    // ========== SAMLEOPPGAVE 3 ==========
    {
      id: 'norsk-10-4-2-ex-11-block',
      type: 'exercise',
      exercise: {
        id: 'norsk-10-4-2-ex-11',
        number: '4.11',
        type: 'classic',
        difficulty: 'vanskelig',
        task: `Tverrfaglig drøfting: Koble kapittel 4.1 og 4.2.

Skriv en tekst (200–300 ord) der du forklarer sammenhengen mellom mediekritikk (kapittel 4.1) og ytringsfrihet/personvern (kapittel 4.2).

Bruk minst tre fagbegreper fra hvert kapittel og forklar hvorfor det er viktig å forstå begge temaene for å være en god digital medborger.`,
        hints: [
          'Tenk på hvordan algoritmene påvirker ytringsfriheten',
          'Hvordan henger presseetikk sammen med personvern?',
          'Hva betyr mediekritikk for digitalt medborgerskap?',
        ],
        solution: 'En god tekst viser sammenhengen mellom mediekritikk og digitale rettigheter, bruker fagbegreper presist, og reflekterer over hva det betyr å være en opplyst, ansvarlig mediebruker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler i del 2
// ============================================================================

export const NORSK_10_DEL2_CHAPTERS = [
  CHAPTER_NORSK_10_3_1,
  CHAPTER_NORSK_10_3_2,
  CHAPTER_NORSK_10_4_1,
  CHAPTER_NORSK_10_4_2,
];
