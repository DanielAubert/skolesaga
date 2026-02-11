/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Deltakelseskultur og algoritmisk kultur
// ============================================================================

export const CHAPTER_KOMKULT3_7_1: TextbookChapter = {
  id: 'komkult3-7-1',
  courseId: 'komkult-3',
  chapterNumber: '7.1',
  title: 'Deltakelseskultur og algoritmisk kultur',
  description: 'Henry Jenkins sitt begrep om deltakelseskultur, hvordan algoritmer former kulturproduksjon og distribusjon, og spenningen mellom brukermedvirkning og algoritmisk styring i digitale medier.',
  estimatedMinutes: 22,
  competenceGoals: [
    'analysere hvordan digitale medier endrer kulturproduksjon og deltakelse',
    'drøfte algoritmers rolle i kulturell formidling og meningsdannelse',
  ],
  keyTerms: [],
  content: [
    {
      id: 'kk3-7-1-intro',
      type: 'text',
      content: `## Fra passiv mottaker til aktiv deltaker

Fremveksten av internett og sosiale medier har grunnleggende endret forholdet mellom kulturprodusenter og publikum. Der vi tidligere var passive mottakere av medieinnhold, kan vi nå kommentere, dele, remikse og skape eget innhold. Samtidig styres mye av det vi ser og opplever av algoritmer vi verken ser eller forstår.

I dette kapittelet skal du lære:
- Hva Henry Jenkins mener med deltakelseskultur
- Hvordan algoritmer former kulturell produksjon og distribusjon
- Spenningen mellom brukermedvirkning og algoritmisk kontroll
- Hva det betyr for demokrati og kulturelt mangfold`,
    },
    {
      id: 'kk3-7-1-def-1',
      type: 'definition',
      title: 'Deltakelseskultur (participatory culture)',
      content: `**Deltakelseskultur** er et begrep utviklet av medieforskeren Henry Jenkins (2006). Det beskriver en kultur der medlemmene ikke bare konsumerer medieinnhold, men aktivt bidrar til å skape, dele og omforme det. Jenkins identifiserer fem kjennetegn:

1. **Lave barrierer** for kreativt uttrykk og samfunnsdeltakelse
2. **Sterk støtte** for å skape og dele det man lager
3. **Uformell veiledning** der erfarne deler kunnskap med nybegynnere
4. **Medlemmene opplever at bidragene deres betyr noe**
5. **Sosial tilknytning** gjennom felles interesser og fellesskap

Eksempler inkluderer fanfiction-miljøer, YouTube-skapere, Wikipedia-bidragsytere, modding-samfunn i dataspill og podkast-produsenter.`,
    },
    {
      id: 'kk3-7-1-example-1',
      type: 'example',
      title: 'Eksempel: Deltakelseskultur i praksis',
      problem: 'Hvordan illustrerer fenomenet fanfiction Jenkins sitt begrep om deltakelseskultur?',
      solution: `**Fanfiction som deltakelseskultur:**

- **Lave barrierer:** Hvem som helst kan skrive og publisere på plattformer som AO3 (Archive of Our Own) eller Wattpad, uten behov for forlag eller redaktører.
- **Deling og støtte:** Lesere gir tilbakemeldinger, kudos og kommentarer. Forfattere oppmuntrer hverandre.
- **Uformell veiledning:** Erfarne forfattere fungerer som beta-lesere og veileder nybegynnere i skriveteknikk.
- **Betydning:** Forfattere opplever at tekstene deres leses og verdsettes av et fellesskap.
- **Sosial tilknytning:** Fandom-fellesskap knytter folk sammen på tvers av geografi, alder og bakgrunn.

Fanfiction viser hvordan publikum ikke bare konsumerer populærkultur, men aktivt omformer og beriker den. Samtidig oppstår spenninger rundt opphavsrett og eierskap til fiksjonelle universer.`,
    },
    {
      id: 'kk3-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-1-ex-1',
        number: '7.1.1',
        type: 'multiple-choice',
        task: 'Hvilket av følgende er IKKE et kjennetegn på deltakelseskultur ifølge Henry Jenkins?',
        options: [
          { id: 'a', text: 'Lave barrierer for kreativt uttrykk', isCorrect: false },
          { id: 'b', text: 'Sterk støtte for å dele det man skaper', isCorrect: false },
          { id: 'c', text: 'Streng portvokter-kontroll over hvem som kan delta', isCorrect: true },
          { id: 'd', text: 'Medlemmene opplever at bidragene deres betyr noe', isCorrect: false },
        ],
        solution: 'Jenkins sin deltakelseskultur handler nettopp om fravær av strenge portvokter-mekanismer. Det er de lave barrierene som gjør det mulig for alle å bidra, i motsetning til tradisjonelle medier der redaktører og produsenter bestemmer hva som publiseres.',
      },
    },
    {
      id: 'kk3-7-1-def-2',
      type: 'definition',
      title: 'Algoritmisk kultur',
      content: `**Algoritmisk kultur** refererer til hvordan algoritmer i økende grad former kulturproduksjon, distribusjon og konsum. Algoritmer er sett med regler og instruksjoner som datamaskiner følger for å sortere, rangere og anbefale innhold.

**Sentrale mekanismer:**
- **Anbefalingsalgoritmer** bestemmer hva du ser i nyhetsstrømmen (TikTok, Instagram, YouTube)
- **Søkealgoritmer** styrer hvilken informasjon du finner (Google)
- **Filterbobler** oppstår når algoritmer viser deg innhold som bekrefter dine eksisterende preferanser
- **Ekkokamre** forsterker dette ved at du hovedsakelig eksponeres for meninger du allerede deler

Begrepet peker på at kultur i stadig større grad formes av teknologiske systemer som opererer utenfor menneskelig bevissthet.`,
    },
    {
      id: 'kk3-7-1-text-1',
      type: 'text',
      content: `### Spenningen mellom deltakelse og algoritmer

Henry Jenkins sin visjon om deltakelseskultur er optimistisk: internett gir alle mulighet til å skape og dele. Men utviklingen av algoritmisk kultur skaper nye utfordringer:

**Algoritmisk portvokting:**
Der tradisjonelle medier hadde redaktører som portvoktere, har digitale plattformer algoritmer. En YouTube-video kan nå millioner eller ingen, avhengig av algoritmens dom. Skapere tilpasser innholdet sitt til algoritmene fremfor til publikum.

**Oppmerksomhetsøkonomi:**
Algoritmer belønner innhold som skaper engasjement, ikke nødvendigvis kvalitet. Provoserende, emosjonelt og sensasjonelt innhold spres raskere enn nyansernt og saklig innhold.

**Homogenisering:**
Når alle optimaliserer for de samme algoritmene, kan kulturuttrykk bli likere. TikTok-videoer følger ofte samme maler, YouTube-thumbnails bruker de samme teknikkene, og nyhetsartikler skrives for å rangere i Google.

**Demokratisering vs. konsentrasjon:**
Selv om alle kan publisere, styres synligheten av noen få store plattformer (Meta, Google, ByteDance). Makten er forskjøvet, men ikke nødvendigvis desentralisert.`,
    },
    {
      id: 'kk3-7-1-example-2',
      type: 'example',
      title: 'Eksempel: TikToks algoritmiske kultur',
      problem: 'Hvordan illustrerer TikTok spenningen mellom deltakelseskultur og algoritmisk kultur?',
      solution: `**Deltakelseskultur på TikTok:**
- Lave barrierer: hvem som helst kan filme og publisere en video
- Trender spres gjennom imitasjon og remiks (duetter, stitch)
- Fellesskap dannes rundt hashtags og nisjeinteresser
- Uformell veiledning gjennom «how-to»-videoer og samarbeid

**Algoritmisk kultur på TikTok:**
- «For You Page»-algoritmen bestemmer hva milliarder av brukere ser
- Skapere tilpasser innhold etter hva algoritmen belønner (hook i de første sekundene, trender, bestemte lengder)
- Algoritmen kan gjøre noen virale over natten, men også gjøre andre usynlige
- Filterbobler: brukere får mer av det de allerede liker, noe som kan innsnevre perspektivet

**Konklusjon:** TikTok er både den ultimate deltakelsesplattformen og det tydeligste eksempelet på algoritmisk makt. Brukerne skaper innholdet, men algoritmen bestemmer hvem som ser det.`,
    },
    {
      id: 'kk3-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-1-ex-2',
        number: '7.1.2',
        type: 'multiple-choice',
        task: 'Hva menes med en "filterboble"?',
        options: [
          { id: 'a', text: 'Et verktøy for å blokkere uønsket reklame', isCorrect: false },
          { id: 'b', text: 'Når algoritmer viser deg innhold som bekrefter dine eksisterende preferanser', isCorrect: true },
          { id: 'c', text: 'En type kryptering som beskytter personvernet ditt', isCorrect: false },
          { id: 'd', text: 'Et nettverk av personer som deler samme hobby', isCorrect: false },
        ],
        solution: 'En filterboble oppstår når algoritmer tilpasser innholdet til dine preferanser og tidligere atferd, slik at du i stadig større grad bare ser innhold som bekrefter det du allerede mener og liker. Begrepet ble populært gjennom Eli Parisers bok "The Filter Bubble" (2011).',
      },
    },
    {
      id: 'kk3-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-1-ex-3',
        number: '7.1.3',
        type: 'classic',
        task: 'Drøft forholdet mellom deltakelseskultur og algoritmisk kultur. Er det mulig å ha en ekte deltakelseskultur når algoritmer styrer hva som blir synlig? Begrunn svaret ditt med eksempler.',
        hints: ['Tenk på hvordan skapere tilpasser seg algoritmer, og hva det gjør med kreativ frihet'],
        solution: 'Et godt svar diskuterer spenningen mellom brukerens frihet til å skape (deltakelseskultur) og plattformens makt til å styre synlighet (algoritmisk kultur). Man kan argumentere for at deltakelseskultur fortsatt eksisterer fordi barrierene for å skape er lave, men at algoritmisk styring begrenser hvem som faktisk når ut. Eksempler kan inkludere YouTube-skapere som endrer stil for å tilfredsstille algoritmen, eller TikTok-trender som standardiserer kreativt uttrykk.',
      },
    },
    {
      id: 'kk3-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-1-ex-4',
        number: '7.1.4',
        type: 'classic',
        task: 'Velg en digital plattform du bruker (TikTok, YouTube, Instagram, Snapchat e.l.). Analyser hvordan plattformen fungerer som deltakelseskultur og som algoritmisk kultur. Bruk Jenkins sine kjennetegn og begrepene filterboble og ekkokammer i analysen.',
        hints: ['Vær konkret: gi eksempler fra din egen bruk av plattformen'],
        solution: 'Eleven bør identifisere konkrete deltakelseskulturelle trekk (kan lage innhold, dele, kommentere, samarbeide) og algoritmiske trekk (anbefalingsalgoritme, filtrering, trender) på den valgte plattformen. Et godt svar bruker Jenkins sine fem kjennetegn systematisk og reflekterer over filterbobler og ekkokamre med personlige eksempler.',
      },
    },
    {
      id: 'kk3-7-1-tip-1',
      type: 'tip',
      title: 'Husk',
      content: `Deltakelseskultur og algoritmisk kultur er ikke motsetninger, men to sider av dagens digitale mediekultur. Utfordringen er å forstå hvordan de samspiller, og å være bevisst på algoritmenes makt over hva vi ser og skaper.`,
    },
    {
      id: 'kk3-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-1-ex-5',
        number: '7.1.5',
        type: 'multiple-choice',
        task: 'Hvilken konsekvens kan algoritmisk kultur ha for kulturelt mangfold?',
        options: [
          { id: 'a', text: 'Algoritmer sikrer at alle kulturuttrykk får lik synlighet', isCorrect: false },
          { id: 'b', text: 'Algoritmer kan føre til homogenisering fordi skapere tilpasser seg det som belønnes', isCorrect: true },
          { id: 'c', text: 'Algoritmer har ingen innvirkning på kulturelt mangfold', isCorrect: false },
          { id: 'd', text: 'Algoritmer fjerner behovet for menneskelig kreativitet', isCorrect: false },
        ],
        solution: 'Når skapere optimaliserer for algoritmer, kan kulturuttrykk bli likere fordi alle følger de samme malene for hva som gir synlighet. Dette kan redusere mangfoldet, selv om potensielt flere mennesker har mulighet til å skape.',
      },
    },
    {
      id: 'kk3-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-1-ex-6',
        number: '7.1.6',
        type: 'classic',
        task: 'Forklar hva Henry Jenkins mener med deltakelseskultur, og gi to konkrete eksempler på deltakelseskultur fra din egen hverdag.',
        hints: ['Tenk på situasjoner der du ikke bare konsumerer, men også skaper eller deler digitalt innhold'],
        solution: 'Jenkins sin deltakelseskultur kjennetegnes av lave barrierer for å skape, støtte for deling, uformell veiledning, opplevelse av at bidrag betyr noe, og sosial tilknytning. Eksempler kan inkludere å lage og dele TikTok-videoer, bidra til et online-fellesskap, skrive anmeldelser, redigere Wikipedia, delta i spillmodding eller lignende.',
      },
    },
    {
      id: 'kk3-7-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Deltakelseskultur** (Jenkins) beskriver hvordan digitale medier gjør det mulig for alle å skape, dele og remikse kulturinnhold
- **Algoritmisk kultur** handler om hvordan algoritmer styrer hva vi ser, hører og leser
- **Filterbobler** og **ekkokamre** oppstår når algoritmer tilpasser innhold til eksisterende preferanser
- Spenningen mellom deltakelse og algoritmisk kontroll er en sentral utfordring i dagens mediekultur

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Deltakelseskultur | Kultur der alle kan bidra til å skape og dele medieinnhold |
| Algoritmisk kultur | Kulturproduksjon og -distribusjon styrt av algoritmer |
| Filterboble | Når algoritmer viser deg innhold som bekrefter dine preferanser |
| Ekkokammer | Informasjonsmiljø der du hovedsakelig møter meninger du allerede deler |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.2: Kunstig intelligens og kulturproduksjon
// ============================================================================

export const CHAPTER_KOMKULT3_7_2: TextbookChapter = {
  id: 'komkult3-7-2',
  courseId: 'komkult-3',
  chapterNumber: '7.2',
  title: 'Kunstig intelligens og kulturproduksjon',
  description: 'AI-generert kunst, tekst og musikk, spørsmål om opphavsrett og kreativitet, og hvordan kunstig intelligens utfordrer tradisjonelle forestillinger om kunstnerisk skaperkraft.',
  estimatedMinutes: 25,
  competenceGoals: [
    'drøfte hvordan kunstig intelligens utfordrer tradisjonelle begreper om kreativitet og opphavsrett',
    'analysere AI-genererte kulturuttrykk med relevante teoretiske perspektiver',
  ],
  keyTerms: [],
  content: [
    {
      id: 'kk3-7-2-intro',
      type: 'text',
      content: `## Når maskinen blir kunstner

Kunstig intelligens kan nå skrive dikt, komponere musikk, male bilder og skrive romaner. AI-verktøy som ChatGPT, Midjourney, DALL-E og Suno utfordrer grunnleggende forestillinger om hva kreativitet er, hvem som er kunstner, og hvem som eier et kunstverk.

I dette kapittelet skal du lære:
- Hva generativ AI er og hvordan den fungerer
- Eksempler på AI i kunst, tekst og musikk
- Opphavsrettslige utfordringer ved AI-generert innhold
- Filosofiske spørsmål om kreativitet og maskinell skaperkraft`,
    },
    {
      id: 'kk3-7-2-def-1',
      type: 'definition',
      title: 'Generativ AI',
      content: `**Generativ AI** er en type kunstig intelligens som kan skape nytt innhold basert på mønstre den har lært fra store mengder treningsdata. Systemene bruker maskinlæring og nevrale nettverk til å generere tekst, bilder, musikk, video og kode.

**Sentrale teknologier:**
- **Stor språkmodell (LLM):** Genererer tekst ved å forutsi neste ord basert på kontekst (f.eks. GPT-4, Claude)
- **Diffusjonsmodeller:** Genererer bilder fra tekstbeskrivelser ved å gradvis fjerne støy fra et tilfeldig bilde (f.eks. Midjourney, DALL-E, Stable Diffusion)
- **Generative adversarial networks (GAN):** To nevrale nettverk konkurrerer, der det ene skaper innhold og det andre evaluerer det
- **Musikkgenerering:** AI-systemer som komponerer musikk basert på tekstbeskrivelser eller stilreferanser (f.eks. Suno, Udio)`,
    },
    {
      id: 'kk3-7-2-example-1',
      type: 'example',
      title: 'Eksempel: AI i kunstverden',
      problem: 'Høsten 2022 vant Jason Allen førsteplassen i en kunstkonkurranse i Colorado med bildet "Théâtre D\'Opéra Spatial", som var laget med AI-verktøyet Midjourney. Hvilke spørsmål reiser dette?',
      solution: `**Hendelsen reiste flere fundamentale spørsmål:**

**Om kreativitet:** Er det kreativt å skrive en god tekstbeskrivelse (prompt) som får AI-en til å lage et vakkert bilde? Allen brukte timer på å forfine prompten sin. Er det vesentlig annerledes enn en fotograf som velger motiv og innstillinger?

**Om opphavsrett:** Hvem eier bildet? Allen, Midjourney, eller kunstnerne hvis verk ble brukt til å trene modellen? I flere land har myndighetene slått fast at rent AI-genererte verk ikke kan opphavsrettsbeskyttes.

**Om kunstbegrepet:** Utfordrer AI selve definisjonen av kunst? Tradisjonelt har kunst krevd menneskelig intensjon, følelser og håndverk. AI har ingen av delene, men resultatet kan likevel berøre oss estetisk.

**Om rettferdighet:** Andre deltakere i konkurransen hadde brukt timer og år på å utvikle sine ferdigheter. Er det rettferdig at et AI-generert verk konkurrerer på like vilkår?`,
    },
    {
      id: 'kk3-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-2-ex-1',
        number: '7.2.1',
        type: 'multiple-choice',
        task: 'Hva er generativ AI?',
        options: [
          { id: 'a', text: 'AI som kun analyserer eksisterende data uten å skape noe nytt', isCorrect: false },
          { id: 'b', text: 'AI som kan skape nytt innhold basert på mønstre lært fra treningsdata', isCorrect: true },
          { id: 'c', text: 'AI som erstatter menneskelig bevissthet fullstendig', isCorrect: false },
          { id: 'd', text: 'AI som bare brukes til vitenskapelig forskning', isCorrect: false },
        ],
        solution: 'Generativ AI skaper nytt innhold (tekst, bilder, musikk, kode) basert på mønstre den har lært fra store mengder treningsdata. Den erstatter ikke menneskelig bevissthet, men kan produsere resultater som ligner menneskeskapt innhold.',
      },
    },
    {
      id: 'kk3-7-2-def-2',
      type: 'definition',
      title: 'Opphavsrett og AI',
      content: `**Opphavsrett** gir skaperen av et originalt verk enerett til å bestemme over bruken av verket. AI-generert innhold utfordrer dette på to måter:

**1. Treningsdata-problemet:**
AI-modeller trenes på enorme mengder eksisterende tekst, bilder og musikk, ofte uten samtykke fra eller betaling til de opprinnelige skaperne. Kunstnere og forfattere har saksøkt AI-selskaper for dette (f.eks. New York Times mot OpenAI, bildedatabasen Getty Images mot Stability AI).

**2. Eierskaps-problemet:**
Hvem eier et AI-generert verk? Brukeren som skrev prompten? Selskapet bak AI-en? Kunstnerne hvis verk ble brukt i treningen? I mange jurisdiksjoner kan kun mennesker ha opphavsrett, noe som betyr at rent AI-genererte verk faller utenfor.

**Norsk og europeisk kontekst:**
EU arbeider med AI Act som regulerer bruken av AI, inkludert krav om transparens om treningsdata. I Norge gjelder åndsverkloven, som krever menneskelig skaperkraft for opphavsrettsbeskyttelse.`,
    },
    {
      id: 'kk3-7-2-text-1',
      type: 'text',
      content: `### Kreativitet: menneske vs. maskin

Spørsmålet om AI kan være kreativ berører dype filosofiske problemstillinger:

**Argumenter for at AI kan være kreativ:**
- AI produserer resultater som mennesker opplever som originale og estetisk verdifulle
- AI kan kombinere stiler og ideer på måter ingen menneske har gjort før
- Kreativitet kan defineres ut fra resultatet, ikke prosessen
- Mange menneskelige kunstnere bygger også på andres verk og teknikker

**Argumenter mot at AI er kreativ:**
- AI har ingen intensjon, følelser eller opplevelser
- AI forstår ikke hva den lager, den gjenkjenner mønstre statistisk
- Kreativitet krever bevissthet og evne til å tillegge mening
- AI kan ikke overraske seg selv eller ha et gjennombrudd

**Mellomposisjon:**
AI er et verktøy som utvider menneskelig kreativitet, på samme måte som kameraet, synthesizeren eller Photoshop. Det kreative ligger i samspillet mellom menneske og maskin.`,
    },
    {
      id: 'kk3-7-2-example-2',
      type: 'example',
      title: 'Eksempel: AI-musikk og autentisitet',
      problem: 'I 2023 gikk en AI-generert sang som imiterte stemmen til Drake og The Weeknd viralt under navnet "Heart on My Sleeve". Hva forteller dette om AI og kulturproduksjon?',
      solution: `**Analysen av "Heart on My Sleeve":**

**Teknologisk:** Sangen demonstrerte at AI kan imitere bestemte artisters stemmer og stil overbevisende nok til at mange trodde den var ekte. Teknologien bak kalles stemmekloning.

**Opphavsrettslig:** Universal Music fikk sangen fjernet fra streamingplattformer, men det var juridisk uklart hva som faktisk var krenket. Melodien var original, teksten var ny, men stemmen imiterte eksisterende artister. Eksisterende lovgivning er ikke laget for dette scenariet.

**Kulturelt:** Sangen reiste spørsmål om autentisitet. Musikk er knyttet til artistens identitet og livserfaring. Når AI kan kopiere dette, hva skjer med forholdet mellom artist og publikum?

**Økonomisk:** Hvis AI kan produsere uendelig musikk i kjente artisters stil, truer det artistenes levebrød og musikkbransjens forretningsmodeller.`,
    },
    {
      id: 'kk3-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-2-ex-2',
        number: '7.2.2',
        type: 'multiple-choice',
        task: 'Hvorfor er opphavsrett knyttet til AI-generert innhold problematisk?',
        options: [
          { id: 'a', text: 'Fordi AI-generert innhold alltid er av lav kvalitet', isCorrect: false },
          { id: 'b', text: 'Fordi det er uklart hvem som eier verket, og AI trenes ofte på andres verk uten samtykke', isCorrect: true },
          { id: 'c', text: 'Fordi AI-selskaper ikke ønsker å tjene penger', isCorrect: false },
          { id: 'd', text: 'Fordi all AI-generert kunst automatisk er plagiat', isCorrect: false },
        ],
        solution: 'AI-generert innhold reiser to hovedproblemer: (1) AI-modeller trenes på eksisterende verk uten nødvendigvis å ha samtykke, og (2) det er uklart hvem som eier det ferdige produktet, siden opphavsrett tradisjonelt krever menneskelig skaperkraft.',
      },
    },
    {
      id: 'kk3-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-2-ex-3',
        number: '7.2.3',
        type: 'classic',
        task: 'Drøft om AI kan være kreativ. Presenter argumenter for og imot, og ta stilling til spørsmålet. Bruk konkrete eksempler i argumentasjonen din.',
        hints: ['Tenk over hva du legger i begrepet kreativitet, og om definisjonen din krever bevissthet'],
        solution: 'Et godt svar presenterer balanserte argumenter. For: AI lager originale og estetisk verdifulle resultater, kombinerer stiler på nye måter. Mot: AI mangler intensjon, bevissthet og evne til å tillegge mening. En mellomposisjon kan være at AI er et kreativt verktøy som utvider menneskelig skaperkraft. Eksempler kan inkludere AI-kunst, AI-musikk eller AI-tekst.',
      },
    },
    {
      id: 'kk3-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-2-ex-4',
        number: '7.2.4',
        type: 'classic',
        task: 'En kunstner oppdager at AI-modellen Stable Diffusion har blitt trent på hundrevis av bildene hennes uten hennes samtykke. Drøft situasjonen fra ulike perspektiver: kunstnerens, AI-selskapets og samfunnets.',
        hints: ['Vurder rettferdighet, innovasjon og økonomiske konsekvenser fra hvert perspektiv'],
        solution: 'Kunstnerens perspektiv: Krenking av opphavsrett, tap av inntekt, respektløst overfor skapende arbeid. AI-selskapets perspektiv: Treningsdata er nødvendig for innovasjon, bildene er offentlig tilgjengelige, AI lager nye verk som ikke kopierer direkte. Samfunnets perspektiv: Behov for balanse mellom innovasjon og rettigheter, regulering er nødvendig, demokratisering av kreativitet kan være positivt.',
      },
    },
    {
      id: 'kk3-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-2-ex-5',
        number: '7.2.5',
        type: 'multiple-choice',
        task: 'Hva er en mellomposisjon i debatten om AI og kreativitet?',
        options: [
          { id: 'a', text: 'AI er fullt ut kreativ på lik linje med mennesker', isCorrect: false },
          { id: 'b', text: 'AI kan aldri bidra til noe kreativt overhodet', isCorrect: false },
          { id: 'c', text: 'AI er et verktøy som utvider menneskelig kreativitet i samspill mellom menneske og maskin', isCorrect: true },
          { id: 'd', text: 'Kreativitet er et meningsløst begrep i AI-alderen', isCorrect: false },
        ],
        solution: 'Mellomposisjonen ser AI som et verktøy som utvider menneskelig kreativitet, på linje med andre teknologier som kameraet, synthesizeren eller digital redigering. Det kreative ligger i samspillet mellom menneske og maskin, ikke i maskinen alene.',
      },
    },
    {
      id: 'kk3-7-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Generativ AI** kan skape tekst, bilder, musikk og video basert på treningsdata
- AI-generert kunst reiser spørsmål om **kreativitet**, **autentisitet** og **originalitet**
- **Opphavsretten** utfordres både når det gjelder treningsdata og eierskap til AI-genererte verk
- Debatten handler om hvorvidt AI er et kreativt verktøy eller en erstatning for menneskelig skaperkraft

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Generativ AI | AI som skaper nytt innhold basert på lærte mønstre |
| Diffusjonsmodell | AI-teknikk som genererer bilder fra tekstbeskrivelser |
| Stemmekloning | AI-teknologi som imiterer en persons stemme |
| Opphavsrett | Skaperens enerett til å bestemme over bruken av verket |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.3: Digitalt personvern og overvåking
// ============================================================================

export const CHAPTER_KOMKULT3_7_3: TextbookChapter = {
  id: 'komkult3-7-3',
  courseId: 'komkult-3',
  chapterNumber: '7.3',
  title: 'Digitalt personvern og overvåking',
  description: 'GDPR, overvåkingskapitalisme, Shoshana Zuboffs teori, Snowden-avsløringene og sporingsteknologi. Hvordan digital overvåking påvirker individ og samfunn.',
  estimatedMinutes: 23,
  competenceGoals: [
    'analysere hvordan digital overvåking påvirker personvern og ytringsfrihet',
    'drøfte spenningen mellom sikkerhet og personvern i digitale samfunn',
  ],
  keyTerms: [],
  content: [
    {
      id: 'kk3-7-3-intro',
      type: 'text',
      content: `## Hvem ser deg?

Hver gang du bruker mobilen, søker på Google, handler på nett eller går forbi et overvåkingskamera, etterlater du digitale spor. Disse sporene samles, analyseres og brukes av både kommersielle aktører og myndigheter. Personvern har blitt en av de viktigste utfordringene i det digitale samfunnet.

I dette kapittelet skal du lære:
- Hva digitalt personvern innebærer og hvorfor det er viktig
- Shoshana Zuboffs teori om overvåkingskapitalisme
- Snowden-avsløringene og statlig overvåking
- GDPR og europeisk personvernlovgivning
- Hvordan sporingsteknologi fungerer i praksis`,
    },
    {
      id: 'kk3-7-3-def-1',
      type: 'definition',
      title: 'Overvåkingskapitalisme',
      content: `**Overvåkingskapitalisme** er et begrep utviklet av den amerikanske sosiologen Shoshana Zuboff i boken *The Age of Surveillance Capitalism* (2019). Det beskriver en økonomisk modell der menneskelig erfaring utvinnes som råmateriale for å forutsi og påvirke atferd.

**Zuboffs hovedpoenger:**
- **Atferdsoverskudd:** Teknologiselskaper samler inn mer data enn de trenger for å levere tjenester. Overskuddet brukes til å forutsi og påvirke brukerens atferd.
- **Forutsigelsesprodukter:** Dataene omsettes i «forutsigelsesmarkeder» der annonsører kjøper tilgang til svært målrettet påvirkning.
- **Instrumentær makt:** En ny form for makt som ikke bruker tvang, men som former atferd gjennom usynlige mekanismer.
- **Enveisbildet:** Overvåkingskapitalismen er som et enveisvindu: selskapene ser alt om oss, men vi vet nesten ingenting om hva de gjør med dataene.

Zuboff sammenligner overvåkingskapitalismens utnyttelse av menneskelig erfaring med industrikapitalismens utnyttelse av naturen.`,
    },
    {
      id: 'kk3-7-3-example-1',
      type: 'example',
      title: 'Eksempel: Overvåkingskapitalisme i hverdagen',
      problem: 'Forklar med et konkret eksempel hvordan overvåkingskapitalisme fungerer i praksis.',
      solution: `**Eksempel: Googles forretningsmodell**

1. **Datainnsamling:** Du søker på Google, bruker Gmail, ser på YouTube, navigerer med Google Maps, og bruker Android-telefonen din. Google samler inn data om alt: søkeord, e-poster, videopreferanser, lokasjoner og bevegelsesmønstre.

2. **Atferdsoverskudd:** Google trenger noe data for å gi deg gode søkeresultater. Men mye av dataene er «overskudd» som brukes til å bygge en detaljert profil av deg: hva du liker, hva du trenger, hva du sannsynligvis kommer til å gjøre.

3. **Forutsigelsesprodukter:** Denne profilen selges til annonsører som kan målrette annonser med ekstrem presisjon. Google vet at du snart trenger nye sko fordi du har søkt på løpetrening og din nåværende skomodell nærmer seg slutten av levetiden.

4. **Påvirkning:** Annonsene dukker opp i rett øyeblikk for å påvirke ditt neste kjøp. Du tror du tar et fritt valg, men valget er formet av usynlig datainnsamling og analyse.

Zuboff mener dette representerer en fundamental trussel mot menneskelig autonomi.`,
    },
    {
      id: 'kk3-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-3-ex-1',
        number: '7.3.1',
        type: 'multiple-choice',
        task: 'Hva mener Shoshana Zuboff med "atferdsoverskudd"?',
        options: [
          { id: 'a', text: 'At teknologiselskaper samler inn mer data enn de trenger for tjenestene, og bruker overskuddet til å forutsi atferd', isCorrect: true },
          { id: 'b', text: 'At folk bruker for mye tid på sosiale medier', isCorrect: false },
          { id: 'c', text: 'At det finnes for mange apper og tjenester tilgjengelig', isCorrect: false },
          { id: 'd', text: 'At mennesker er mer produktive når de overvåkes', isCorrect: false },
        ],
        solution: 'Atferdsoverskudd er Zuboffs begrep for dataene teknologiselskaper samler inn utover det som er nødvendig for å levere tjenesten. Dette overskuddet brukes til å lage forutsigelsesprodukter som selges til annonsører.',
      },
    },
    {
      id: 'kk3-7-3-def-2',
      type: 'definition',
      title: 'GDPR og personvernlovgivning',
      content: `**GDPR** (General Data Protection Regulation) er EUs personvernforordning som trådte i kraft i 2018. Den gjelder også i Norge gjennom EØS-avtalen og er implementert i personopplysningsloven.

**Sentrale rettigheter under GDPR:**
- **Rett til informasjon:** Du har rett til å vite hvilke data som samles inn om deg
- **Rett til innsyn:** Du kan kreve å få se alle data et selskap har om deg
- **Rett til sletting:** Du kan kreve at data om deg slettes ("retten til å bli glemt")
- **Rett til dataportabilitet:** Du kan ta med deg dataene dine til en annen tjeneste
- **Samtykke:** Selskaper må ha et gyldig og informert samtykke for å behandle dine personopplysninger
- **Formålsbegrensning:** Data kan bare brukes til det formålet de ble samlet inn for

**I Norge:** Datatilsynet er ansvarlig for å håndheve personvernlovgivningen og kan ilegge bøter på opptil 4 % av global omsetning ved brudd.`,
    },
    {
      id: 'kk3-7-3-text-1',
      type: 'text',
      content: `### Snowden-avsløringene og statlig overvåking

I 2013 lekket den amerikanske varsleren Edward Snowden tusenvis av hemmelige dokumenter fra NSA (National Security Agency). Avsløringene viste at amerikanske myndigheter bedrev massiv, global overvåking av elektronisk kommunikasjon.

**Hva Snowden avslørte:**
- **PRISM-programmet:** NSA hadde direkte tilgang til serverne til Google, Facebook, Apple, Microsoft og andre teknologiselskaper
- **Masseinnsamling av metadata:** NSA samlet inn informasjon om hvem som ringte hvem, når og hvor lenge, for milliarder av telefonsamtaler
- **Overvåking av allierte:** Selv ledere i allierte land (inkludert Tysklands forbundskansler Angela Merkel) ble overvåket
- **Samarbeid med britisk etterretning:** GCHQ (britisk etterretning) tappet fiberoptiske kabler for å samle inn enorme mengder internett-trafikk

**Konsekvenser:**
- Global debatt om spenningen mellom sikkerhet og personvern
- Reformer av overvåkingslovgivning i flere land
- Økt bruk av kryptering i meldingstjenester
- Snowden lever i eksil i Russland, anklaget for spionasje i USA`,
    },
    {
      id: 'kk3-7-3-example-2',
      type: 'example',
      title: 'Eksempel: Sporingsteknologi i hverdagen',
      problem: 'Hvilke former for digital sporing møter en typisk norsk ungdom i løpet av en vanlig dag?',
      solution: `**En dag med digital sporing:**

**Morgen:** Vekkerklokken på telefonen registrerer søvnmønstre. Telefonens GPS logger posisjonen din. Smartklokken registrerer puls og aktivitet.

**På vei til skolen:** Google Maps eller Apple Maps logger ruten din. Busskortet registrerer reisen. Overvåkingskameraer filmer deg.

**På skolen:** Skolens digitale plattformer (Google Workspace, Microsoft Teams) logger aktiviteten din. Wi-Fi-nettverket registrerer når du kobler deg på.

**I friminuttet:** TikTok, Snapchat og Instagram samler inn data om hva du ser, liker, kommenterer og deler. Tredjepartssporere (cookies) følger deg mellom nettsider.

**Etter skolen:** Netthandel registrerer hva du ser på og kjøper. Spotify logger musikkpreferanser. Netflix registrerer seervaner. Spillplattformer logger spilletid og atferd.

**Totalt:** En gjennomsnittlig person etterlater tusenvis av datapunkter daglig. Tilsammen gir disse et svært detaljert bilde av hvem du er, hva du gjør og hva du tenker.`,
    },
    {
      id: 'kk3-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-3-ex-2',
        number: '7.3.2',
        type: 'multiple-choice',
        task: 'Hva avslørte Edward Snowden i 2013?',
        options: [
          { id: 'a', text: 'At teknologiselskaper hacket myndighetenes databaser', isCorrect: false },
          { id: 'b', text: 'At amerikanske myndigheter bedrev massiv global overvåking av elektronisk kommunikasjon', isCorrect: true },
          { id: 'c', text: 'At sosiale medier var utrygge for barn', isCorrect: false },
          { id: 'd', text: 'At klimadata ble forfalsket av forskere', isCorrect: false },
        ],
        solution: 'Snowden avslørte at NSA (National Security Agency) hadde programmer for massiv overvåking av global elektronisk kommunikasjon, inkludert direkte tilgang til data fra store teknologiselskaper gjennom PRISM-programmet.',
      },
    },
    {
      id: 'kk3-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-3-ex-3',
        number: '7.3.3',
        type: 'classic',
        task: 'Drøft spenningen mellom sikkerhet og personvern. Bør myndigheter ha lov til å overvåke innbyggernes kommunikasjon for å forhindre terror og kriminalitet? Begrunn svaret ditt med argumenter fra begge sider.',
        hints: ['Vurder hva som skjer hvis myndighetene har for mye makt, og hva som skjer hvis de har for lite'],
        solution: 'For overvåking: Terrortrusler krever at myndigheter kan avlytte mistenkte, overvåking kan avverge angrep, den som ikke har noe å skjule har ingenting å frykte. Mot overvåking: Masseovervåking rammer alle, ikke bare mistenkte. Det undergraver tillit og demokrati, kan misbrukes politisk, og har en nedkjølende effekt på ytringsfrihet. Et godt svar anerkjenner at målrettet overvåking med rettslig kjennelse er noe annet enn masseovervåking.',
      },
    },
    {
      id: 'kk3-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-3-ex-4',
        number: '7.3.4',
        type: 'classic',
        task: 'Forklar Shoshana Zuboffs begrep overvåkingskapitalisme med egne ord, og gi to eksempler fra din egen digital hverdag som illustrerer konseptet.',
        hints: ['Tenk på situasjoner der du har opplevd reklame som virket uvanlig treffende'],
        solution: 'Eleven bør forklare at overvåkingskapitalisme handler om at teknologiselskaper utvinner data fra menneskelig atferd for å forutsi og påvirke fremtidig atferd, og at dette er grunnlaget for deres forretningsmodell. Eksempler kan inkludere målrettet reklame basert på søkehistorikk, anbefalinger på sosiale medier eller nettbutikker som vet hva du trenger før du selv vet det.',
      },
    },
    {
      id: 'kk3-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-3-ex-5',
        number: '7.3.5',
        type: 'multiple-choice',
        task: 'Hvilken rettighet gir GDPR deg?',
        options: [
          { id: 'a', text: 'Rett til å kreve gratis produkter fra teknologiselskaper', isCorrect: false },
          { id: 'b', text: 'Rett til å kreve at data om deg slettes ("retten til å bli glemt")', isCorrect: true },
          { id: 'c', text: 'Rett til å overvåke teknologiselskapenes ansatte', isCorrect: false },
          { id: 'd', text: 'Rett til å kopiere andres personopplysninger', isCorrect: false },
        ],
        solution: 'GDPR gir blant annet retten til sletting ("retten til å bli glemt"), retten til innsyn i egne data, retten til å ta med seg data til en annen tjeneste (dataportabilitet), og krav om informert samtykke.',
      },
    },
    {
      id: 'kk3-7-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Overvåkingskapitalisme** (Zuboff) beskriver en økonomi basert på utvinning av menneskelig atferd som råmateriale
- **Snowden-avsløringene** viste at statlig overvåking foregår i mye større skala enn antatt
- **GDPR** gir europeiske borgere viktige rettigheter knyttet til persondata
- **Sporingsteknologi** gjennomtrenger hverdagen og samler enorme mengder data om oss

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Overvåkingskapitalisme | Økonomisk modell basert på utvinning av atferdsdata |
| Atferdsoverskudd | Data som samles inn utover det tjenesten trenger |
| GDPR | EUs personvernforordning, gjelder også i Norge |
| Nedkjølingseffekt | Selvsensurett som følge av vissheten om overvåking |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.4: Deepfakes og digital manipulasjon
// ============================================================================

export const CHAPTER_KOMKULT3_7_4: TextbookChapter = {
  id: 'komkult3-7-4',
  courseId: 'komkult-3',
  chapterNumber: '7.4',
  title: 'Deepfakes og digital manipulasjon',
  description: 'Deepfake-teknologi, syntetiske medier, tillitskrise i mediene og deteksjonsverktøy. Hvordan manipulert innhold truer sannheten i offentlig debatt.',
  estimatedMinutes: 20,
  competenceGoals: [
    'vurdere kritisk autentisiteten til digitalt medieinnhold',
    'analysere hvordan deepfakes og syntetiske medier utfordrer tillit og sannhetsbegreper',
  ],
  keyTerms: [],
  content: [
    {
      id: 'kk3-7-4-intro',
      type: 'text',
      content: `## Når du ikke kan stole på det du ser

I en verden der video og lyd kan fabrikkeres fra bunnen av, utfordres selve fundamentet for vår tillit til medieinnhold. Deepfakes og digital manipulasjon representerer en ny type trussel mot sannhet, tillit og demokrati.

I dette kapittelet skal du lære:
- Hva deepfakes er og hvordan teknologien fungerer
- Eksempler på bruk og misbruk av syntetiske medier
- Tillitskrisen i medielandskapet
- Verktøy og strategier for å avsløre manipulert innhold`,
    },
    {
      id: 'kk3-7-4-def-1',
      type: 'definition',
      title: 'Deepfake',
      content: `**Deepfake** er syntetisk medieinnhold der en persons ansikt, stemme eller kropp erstattes med en annen persons, ved hjelp av dyp læring (deep learning). Begrepet er en sammenslåing av «deep learning» og «fake».

**Teknologien bak:**
- **Ansiktsbytte (face swap):** AI bytter ut et ansikt med et annet i video eller bilde. Modellen trenes på mange bilder av begge personene.
- **Stemmekloning:** AI gjenskaper en persons stemme basert på lydopptak, slik at man kan få «personen» til å si hva som helst.
- **Hel kroppsgenerering:** AI kan generere realistiske videoer av personer som aldri har eksistert.
- **Leppsynkronisering (lip sync):** AI tilpasser munnbevegelser til ny lyd, slik at det ser ut som personen sier noe annet enn originalen.

Teknologien har blitt stadig mer tilgjengelig. Det som tidligere krevde eksperter og kraftige datamaskiner, kan nå gjøres med gratis apper på en mobiltelefon.`,
    },
    {
      id: 'kk3-7-4-text-1',
      type: 'text',
      content: `### Bruksområder og misbruk

Deepfake-teknologi kan brukes til mye, men det er misbrukspotensialet som har skapt størst bekymring:

**Legitim bruk:**
- **Film og underholdning:** Digitalt gjenskapte skuespillere, aldring/foryngning, dubbing til andre språk med leppsynk
- **Utdanning:** Historiske personer som «snakker» til elevene, simulering av samtaler
- **Tilgjengelighet:** Oversettelse av videoinnhold med bevarte ansiktsuttrykk

**Problematisk bruk:**
- **Politisk manipulasjon:** Falske videoer av politikere som sier ting de aldri har sagt, brukt for å påvirke valg eller skape kaos
- **Seksuelt misbruk:** Deepfake-pornografi der offerets ansikt settes på en annen kropp uten samtykke. Dette er den vanligste formen for deepfake-misbruk.
- **Svindel:** AI-genererte samtaler brukt til å lure ansatte til å overføre penger
- **Desinformasjon:** Falske videobevis brukt for å diskreditere personer eller forvrenge hendelser
- **Identitetstyveri:** Bruk av deepfake for å omgå ansiktsgjenkjenning og biometriske sikkerhetssystemer`,
    },
    {
      id: 'kk3-7-4-example-1',
      type: 'example',
      title: 'Eksempel: Deepfake i politikken',
      problem: 'I mars 2022, kort etter Russlands invasjon av Ukraina, dukket en deepfake-video av Ukrainas president Zelenskyj opp der han ba ukrainske soldater legge ned våpnene. Hvordan illustrerer dette truslene ved deepfakes?',
      solution: `**Analysen av Zelenskyj-deepfaken:**

**Teknisk:** Videoen var relativt enkelt å avsløre for eksperter fordi ansiktets proporsjoner var unaturlige og leppebevegelsene ikke stemte perfekt. Men for en vanlig bruker, spesielt i en kaotisk krigssituasjon, kunne den virke overbevisende ved første øyekast.

**Strategisk:** Videoen var ment å undergrave den ukrainske motstanden ved å så tvil om presidentens lederskap. Den ble spredt på sosiale medier og til og med plassert på en hacket ukrainsk nyhetsnettside.

**Tillit:** Hendelsen viste at deepfakes kan brukes som våpen i informasjonskrig. Selv om videoen raskt ble avslørt, sådde den tvil: «Hvis denne videoen var falsk, kan da noen av de andre videoene også være falske?»

**Paradoks:** Den kanskje farligste effekten er det som kalles «liar's dividend» - muligheten for å avvise ekte videobevis som deepfakes. Autoritære ledere kan nå kalle ethvert ugunstig opptak for en deepfake.`,
    },
    {
      id: 'kk3-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-4-ex-1',
        number: '7.4.1',
        type: 'multiple-choice',
        task: 'Hva er en deepfake?',
        options: [
          { id: 'a', text: 'En type datavirus som stjeler personlig informasjon', isCorrect: false },
          { id: 'b', text: 'Syntetisk medieinnhold der AI erstatter en persons ansikt, stemme eller kropp', isCorrect: true },
          { id: 'c', text: 'En falsk nettside som utgir seg for å være en ekte nettside', isCorrect: false },
          { id: 'd', text: 'En type kryptovaluta brukt til ulovlige formål', isCorrect: false },
        ],
        solution: 'En deepfake er syntetisk medieinnhold laget med dyp læring (deep learning) der en persons ansikt, stemme eller kropp erstattes med en annen persons. Teknologien bruker AI til å skape overbevisende, men falske, videoer, bilder eller lydklipp.',
      },
    },
    {
      id: 'kk3-7-4-def-2',
      type: 'definition',
      title: 'Tillitskrise og informasjonssammenbrudd',
      content: `**Tillitskrise i mediene** oppstår når folk mister evnen til å skille mellom ekte og falskt innhold. Deepfakes forsterker dette ved å undergrave den grunnleggende tilliten til audiovisuelt materiale.

**Sentrale begreper:**
- **Liar's dividend (løgnerens utbytte):** Gevinsten en løgner oppnår når deepfakes eksisterer, fordi enhver video nå kan avvises som falsk. Ekte bevis kan diskrediteres.
- **Informasjonsapokalypse:** Et scenario der det blir umulig for folk å skille sannhet fra løgn, og tillit til alle informasjonskilder kollapser.
- **Epistemic crisis (kunnskapskrise):** Når et samfunn mister felles referanserammer for hva som er sant.
- **Zero-trust media environment:** Et medielandskap der standardinnstillingen er mistillit, og alt innhold må verifiseres.`,
    },
    {
      id: 'kk3-7-4-text-2',
      type: 'text',
      content: `### Deteksjon og forsvar

Kampen mot deepfakes er et kappløp mellom de som lager dem og de som forsøker å avsløre dem:

**Teknologiske verktøy:**
- **AI-deteksjon:** Algoritmer som analyserer videoer for artefakter som er usynlige for det menneskelige øyet (uregelmessig blunking, feil skygger, teksturforskjeller)
- **Blockchain-verifisering:** Originalt innhold kan tidsstemples og verifiseres med blokkjedeteknologi
- **C2PA-standarden:** Content Credentials-initiativet merker bilder og video med opphavsinformasjon fra kameraet
- **Vannmerking:** Usynlige digitale vannmerker legges inn i bilder og videoer for å spore opphav

**Menneskelige strategier:**
- **Kildekritikk:** Hvem publiserte innholdet? Finnes det andre uavhengige kilder?
- **Kontekst:** Gir innholdet mening i konteksten? Er det urealistisk eller ut av karakter?
- **Tekniske tegn:** Se etter unaturlige overganger, merkelige hårbevegelser, ujevne kanter rundt ansiktet
- **Omvendt bildesøk:** Sjekk om bildet dukker opp i andre sammenhenger`,
    },
    {
      id: 'kk3-7-4-example-2',
      type: 'example',
      title: 'Eksempel: Å avsløre en deepfake',
      problem: 'En video av en kjent norsk politiker sprer seg på sosiale medier der vedkommende tilsynelatende innrømmer korrupsjon. Hvordan kan du vurdere om videoen er ekte?',
      solution: `**Sjekkliste for å avsløre mulig deepfake:**

1. **Kilde:** Hvem publiserte videoen først? Er det en troverdig kilde, eller en anonym konto?
2. **Andre kilder:** Har noen anerkjent nyhetskanal dekket saken? Har politikeren selv kommentert?
3. **Ansikt og kropp:** Se nøye etter unaturlige bevegelser, spesielt rundt øyne, munn og hårgrense. Stemmer skygger og belysning?
4. **Lyd:** Høres stemmen naturlig ut? Er det merkelige pauser eller tonefall?
5. **Kontekst:** Gir uttalelsen mening? Er det sannsynlig at en politiker ville innrømme dette på denne måten?
6. **Tekniske verktøy:** Kjør videoen gjennom deteksjonsverktøy som Deepware Scanner eller Microsoft Video Authenticator.
7. **Metadata:** Sjekk om videoen har intakte metadata (tidspunkt, enhet, sted).

**Viktigst:** Ikke del videoen videre før du har sjekket. Ved å spre ubekreftet innhold bidrar du til problemet.`,
    },
    {
      id: 'kk3-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-4-ex-2',
        number: '7.4.2',
        type: 'multiple-choice',
        task: 'Hva menes med "liar\'s dividend" (løgnerens utbytte)?',
        options: [
          { id: 'a', text: 'At det er lønnsomt å lage deepfakes for underholdning', isCorrect: false },
          { id: 'b', text: 'At løgnere kan avvise ekte bevis som deepfakes fordi folk vet at deepfakes eksisterer', isCorrect: true },
          { id: 'c', text: 'At teknologiselskaper tjener penger på å spre løgner', isCorrect: false },
          { id: 'd', text: 'At politikere ofte lyver i mediene', isCorrect: false },
        ],
        solution: 'Liar\'s dividend beskriver paradokset der selve eksistensen av deepfake-teknologi gir løgnere en fordel: de kan avvise ethvert ugunstig videobevis som en deepfake, selv om det er ekte. Dette undergraver muligheten for å holde mektige personer ansvarlige.',
      },
    },
    {
      id: 'kk3-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-4-ex-3',
        number: '7.4.3',
        type: 'classic',
        task: 'Diskuter: Bør det være ulovlig å lage deepfakes? Begrunn svaret ditt, og vurder argumenter for og imot et totalforbud versus regulering av spesifikke bruksområder.',
        hints: ['Tenk på skillet mellom lovlig bruk (film, satire) og skadelig bruk (svindel, overgrep)'],
        solution: 'Et godt svar skiller mellom deepfakes som teknologi og spesifikke bruksområder. Et totalforbud ville ramme legitim bruk som film, utdanning og satire. Regulering av spesifikke skadelige bruksområder (som deepfake-pornografi uten samtykke, valgmanipulasjon og svindel) er mer målrettet. Svaret bør også diskutere utfordringer med håndhevelse i et globalt internett.',
      },
    },
    {
      id: 'kk3-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-4-ex-4',
        number: '7.4.4',
        type: 'classic',
        task: 'Forklar begrepet "informasjonsapokalypse" og drøft om du tror vi er på vei dit. Hvilke tiltak mener du er viktigst for å forhindre et slikt scenario?',
        hints: ['Tenk på teknologi, utdanning, regulering og medienes rolle'],
        solution: 'Informasjonsapokalypse er scenariet der det blir umulig å skille sannhet fra løgn. Eleven bør drøfte utviklingstrekk som peker i denne retningen (stadig bedre deepfakes, desinformasjon, polarisering) og mulige mottiltak: teknologisk (deteksjonsverktøy, verifiseringssystemer), pedagogisk (mediekompetanse, kildekritikk), regulatorisk (lovgivning mot misbruk) og institusjonelt (uavhengige medier, faktasjekk-organisasjoner).',
      },
    },
    {
      id: 'kk3-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-4-ex-5',
        number: '7.4.5',
        type: 'multiple-choice',
        task: 'Hva er den vanligste formen for deepfake-misbruk?',
        options: [
          { id: 'a', text: 'Politisk manipulasjon', isCorrect: false },
          { id: 'b', text: 'Svindel og bedrageri', isCorrect: false },
          { id: 'c', text: 'Deepfake-pornografi uten samtykke', isCorrect: true },
          { id: 'd', text: 'Underholdning og satire', isCorrect: false },
        ],
        solution: 'Studier viser at den desidert vanligste formen for deepfake-misbruk er ikke-samtykkebasert pornografi, der offerets ansikt settes inn i seksuelt materiale. Dette rammer særlig kvinner og kan ha alvorlige konsekvenser for ofrene.',
      },
    },
    {
      id: 'kk3-7-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Deepfakes** er AI-generert syntetisk medieinnhold som kan bytte ut ansikt, stemme og kropp
- Teknologien kan brukes legitimt (film, utdanning) men misbrukes også (pornografi, politisk manipulasjon, svindel)
- **Liar's dividend** gjør at ekte bevis kan avvises som falskt
- **Tillitskrisen** i mediene forverres av syntetiske medier
- Det finnes teknologiske og menneskelige strategier for å avsløre deepfakes

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Deepfake | AI-generert syntetisk medieinnhold |
| Liar's dividend | Fordelen løgnere får av at deepfakes eksisterer |
| Informasjonsapokalypse | Scenariet der sannhet og løgn ikke kan skilles |
| C2PA | Standard for å merke medieinnhold med opphavsinformasjon |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7.5: Digital etikk og fremtiden
// ============================================================================

export const CHAPTER_KOMKULT3_7_5: TextbookChapter = {
  id: 'komkult3-7-5',
  courseId: 'komkult-3',
  chapterNumber: '7.5',
  title: 'Digital etikk og fremtiden',
  description: 'Teknologietikk, digital dannelse, ansvarsspørsmål i den digitale tidsalderen og perspektiver på fremtidens kommunikasjonslandskap.',
  estimatedMinutes: 18,
  competenceGoals: [
    'drøfte etiske utfordringer knyttet til digital teknologi og kommunikasjon',
    'reflektere over eget digitalt medborgerskap og ansvar',
  ],
  keyTerms: [],
  content: [
    {
      id: 'kk3-7-5-intro',
      type: 'text',
      content: `## Etikk i en digital verden

Teknologien utvikler seg raskere enn lovverket og de etiske rammene våre. Kunstig intelligens, sosiale medier, overvåkingsteknologi og syntetiske medier reiser spørsmål som samfunnet ennå ikke har gode svar på. Digital etikk handler om å navigere i dette landskapet med bevissthet og ansvar.

I dette kapittelet skal du lære:
- Hva digital etikk og teknologietikk innebærer
- Sentrale etiske rammeverk for å vurdere teknologi
- Hva digital dannelse (Bildung) betyr i praksis
- Hvem som har ansvar for teknologiens konsekvenser
- Perspektiver på fremtidens kommunikasjon`,
    },
    {
      id: 'kk3-7-5-def-1',
      type: 'definition',
      title: 'Digital etikk',
      content: `**Digital etikk** (også kalt teknologietikk eller dataetikk) er et felt som undersøker moralske spørsmål knyttet til utvikling, bruk og konsekvenser av digital teknologi.

**Sentrale spørsmål:**
- **Rettferdighet:** Er algoritmene rettferdige, eller forsterker de eksisterende diskriminering?
- **Åpenhet:** Kan brukere forstå hvordan teknologien fungerer og påvirker dem?
- **Autonomi:** Respekterer teknologien brukernes evne til å ta frie valg?
- **Samtykke:** Har brukerne reell mulighet til å velge bort datainnsamling?
- **Ansvar:** Hvem er ansvarlig når en algoritme gjør skade?
- **Inkludering:** Hvem får tilgang til teknologien, og hvem faller utenfor?

Digital etikk bygger bro mellom teknologisk utvikling og grunnleggende menneskelige verdier som frihet, rettferdighet, verdighet og privatliv.`,
    },
    {
      id: 'kk3-7-5-example-1',
      type: 'example',
      title: 'Eksempel: Algoritmisk diskriminering',
      problem: 'Undersøkelser har vist at ansiktsgjenkjenningsteknologi har mye høyere feilrate for mørkhudede kvinner enn for hvite menn. Hvordan kan vi analysere dette etisk?',
      solution: `**Etisk analyse av algoritmisk diskriminering:**

**Hva skjedde:** Forsker Joy Buolamwini ved MIT viste at kommersielle ansiktsgjenkjenningssystemer fra IBM, Microsoft og Face++ hadde feilrate på opptil 34 % for mørkhudede kvinner, mot under 1 % for hvite menn. Årsaken var skjevhet i treningsdataene: AI-en var trent på et flertall bilder av hvite menn.

**Rettferdighet:** Teknologien forsterker eksisterende ulikhet. Når ansiktsgjenkjenning brukes av politi, betyr høyere feilrate at mørkhudede oftere feilidentifiseres.

**Åpenhet:** Brukere (og de som overvåkes) vet sjelden om disse feilratene. Systemene presenteres som objektive og nøyaktige.

**Ansvar:** Hvem er ansvarlig? Utviklerne som brukte skjeve treningsdata? Selskapene som solgte produktet? Politiet som tok det i bruk? Politikerne som tillot det?

**Konsekvens:** Saken viser at teknologi aldri er nøytral. Den gjenspeiler og forsterker maktstrukturene i samfunnet den utvikles i.`,
    },
    {
      id: 'kk3-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-5-ex-1',
        number: '7.5.1',
        type: 'multiple-choice',
        task: 'Hva handler digital etikk om?',
        options: [
          { id: 'a', text: 'Kun om personvern og GDPR', isCorrect: false },
          { id: 'b', text: 'Moralske spørsmål knyttet til utvikling, bruk og konsekvenser av digital teknologi', isCorrect: true },
          { id: 'c', text: 'Tekniske sikkerhetstiltak for å beskytte datamaskiner', isCorrect: false },
          { id: 'd', text: 'Regler for god oppførsel på sosiale medier', isCorrect: false },
        ],
        solution: 'Digital etikk er et bredt felt som undersøker moralske spørsmål om teknologiens utvikling, bruk og konsekvenser. Det handler om rettferdighet, åpenhet, autonomi, samtykke, ansvar og inkludering i den digitale verden.',
      },
    },
    {
      id: 'kk3-7-5-def-2',
      type: 'definition',
      title: 'Digital dannelse (digital Bildung)',
      content: `**Digital dannelse** handler om å utvikle evnen til kritisk, reflektert og ansvarlig deltakelse i den digitale verden. Begrepet bygger på den tyske dannelsestradisjonen (Bildung) og tilpasser den til en digital kontekst.

**Digital dannelse innebærer:**
- **Kritisk mediekompetanse:** Evne til å vurdere informasjon, gjenkjenne manipulasjon og tenke selvstendig
- **Teknologiforståelse:** Grunnleggende forståelse av hvordan digitale systemer fungerer og påvirker oss
- **Etisk refleksjon:** Evne til å vurdere teknologiske handlinger i lys av verdier og konsekvenser
- **Digitalt medborgerskap:** Ansvarlig deltakelse i digitale fellesskap og offentlighet
- **Selvbevissthet:** Forståelse av hvordan teknologien påvirker egne vaner, tanker og relasjoner

Digital dannelse handler ikke bare om tekniske ferdigheter, men om å utvikle klokskap og dømmekraft i en teknologisk verden.`,
    },
    {
      id: 'kk3-7-5-text-1',
      type: 'text',
      content: `### Ansvar i den digitale tidsalderen

Et sentralt spørsmål i digital etikk er: hvem har ansvar for teknologiens konsekvenser?

**Teknologiselskapene:**
- Har ansvar for å utvikle produkter som respekterer brukernes rettigheter
- Bør gjennomføre konsekvensanalyser før lansering av nye teknologier
- Har økonomisk insentiv til å prioritere profitt fremfor etikk

**Utviklerne og designerne:**
- Tar daglige valg som former teknologien (valg av treningsdata, grensesnittdesign, standardinnstillinger)
- Kan bygge inn etiske hensyn i designprosessen («ethics by design»)
- Står i et spenningsfelt mellom faglige idealer og arbeidsgivers krav

**Myndighetene:**
- Har ansvar for å regulere teknologien og beskytte borgernes rettigheter
- Ligger ofte etter teknologiutviklingen med lovgivning
- Må balansere innovasjon, konkurranseevne og beskyttelse

**Brukerne:**
- Har ansvar for egne digitale handlinger (hva man deler, sprer og støtter)
- Men brukernes ansvar begrenses av manglende informasjon og asymmetriske maktforhold
- Å legge hele ansvaret på individet er problematisk når systemene er designet for å manipulere`,
    },
    {
      id: 'kk3-7-5-example-2',
      type: 'example',
      title: 'Eksempel: Etikk i AI-utvikling',
      problem: 'Et norsk teknologiselskap utvikler en AI som analyserer jobbsøknader for å sortere ut kandidater. Hvilke etiske problemstillinger bør vurderes?',
      solution: `**Etisk vurdering av AI i rekruttering:**

**Rettferdighet:** Kan AI-en diskriminere basert på kjønn, alder, etnisitet eller bosted? Hvis treningsdataene gjenspeiler historisk diskriminering (f.eks. at menn oftere ble ansatt i teknologiyrker), vil AI-en reprodusere dette mønsteret.

**Åpenhet:** Vet søkerne at en AI vurderer dem? Kan de forstå hvorfor de ble sortert ut? EU har foreslått at AI-systemer som påvirker folks rettigheter må være forklarbare.

**Samtykke:** Har søkerne gitt samtykke til AI-behandling? GDPR gir rett til å nekte «automatiserte individuelle avgjørelser».

**Ansvar:** Hvem er ansvarlig hvis en kvalifisert søker feilaktig sorteres ut? Selskapet som bruker systemet? Utvikleren? AI-en selv (kan en maskin holdes ansvarlig)?

**Menneskelig overstyring:** Bør det alltid være et menneske som tar den endelige avgjørelsen? De fleste etiske retningslinjer for AI anbefaler «human in the loop» for viktige beslutninger.`,
    },
    {
      id: 'kk3-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-5-ex-2',
        number: '7.5.2',
        type: 'multiple-choice',
        task: 'Hva innebærer digital dannelse?',
        options: [
          { id: 'a', text: 'Kun tekniske ferdigheter som programmering og databehandling', isCorrect: false },
          { id: 'b', text: 'Evne til kritisk, reflektert og ansvarlig deltakelse i den digitale verden', isCorrect: true },
          { id: 'c', text: 'At man bruker sosiale medier daglig', isCorrect: false },
          { id: 'd', text: 'At man alltid er skeptisk til all teknologi', isCorrect: false },
        ],
        solution: 'Digital dannelse handler om mer enn tekniske ferdigheter. Det innebærer kritisk mediekompetanse, etisk refleksjon, teknologiforståelse, digitalt medborgerskap og selvbevissthet i den digitale verden.',
      },
    },
    {
      id: 'kk3-7-5-text-2',
      type: 'text',
      content: `### Fremtidens kommunikasjonslandskap

Teknologisk utvikling vil fortsette å endre hvordan vi kommuniserer, skaper kultur og forholder oss til hverandre:

**Immersive medier:**
VR (virtuell virkelighet) og AR (utvidet virkelighet) vil gjøre kommunikasjon mer innlevende. Metaverset lover virtuelle rom der vi kan møtes som avatarer. Hva betyr dette for begreper som tilstedeværelse, autentisitet og identitet?

**AI som kommunikasjonspartner:**
AI-chatbotter og virtuelle assistenter blir stadig mer sofistikerte. Noen utvikler emosjonelle bånd til AI-systemer. Hva skjer med mellommenneskelig kommunikasjon når maskiner kan simulere empati?

**Desentraliserte medier:**
Blokkjedeteknologi muliggjør plattformer uten sentral kontroll. Kan dette motvirke plattformenes makt, eller skaper det nye problemer med desinformasjon og ansvarsfraskrivelse?

**Nevralteknologi:**
Hjerne-maskin-grensesnitt kan en dag muliggjøre direkte kommunikasjon mellom hjerner. Hva betyr det for tankefriheten, personvernet og menneskelig autonomi?`,
    },
    {
      id: 'kk3-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-5-ex-3',
        number: '7.5.3',
        type: 'classic',
        task: 'Hvem har størst ansvar for teknologiens konsekvenser: selskapene, myndighetene eller brukerne? Drøft spørsmålet og ta stilling.',
        hints: ['Vurder maktforhold: hvem har mest kunnskap, mest innflytelse og mest å tjene på teknologien?'],
        solution: 'Et godt svar drøfter alle tre perspektiver: Selskapene har mest kunnskap og økonomisk vinning, myndighetene har reguleringsmakt og demokratisk mandat, brukerne har begrenset innsikt og valgfrihet. De fleste argumenterer for at ansvaret må deles, men at selskapene og myndighetene har et større ansvar enn individuelle brukere fordi maktforholdet er asymmetrisk.',
      },
    },
    {
      id: 'kk3-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-5-ex-4',
        number: '7.5.4',
        type: 'classic',
        task: 'Skriv et kort essay (200-300 ord) der du reflekterer over din egen digitale dannelse. Hva gjør du allerede bra? Hva kan du bli bedre på? Bruk minst tre begreper fra dette kapittelet i teksten.',
        hints: ['Tenk på kildekritikk, personvern, digitalt medborgerskap og etisk refleksjon'],
        solution: 'Eleven bør reflektere konkret over egne digitale vaner og knytte dem til begreper som kritisk mediekompetanse, digitalt medborgerskap, personvern eller etisk refleksjon. Et godt svar er ærlig om både styrker og forbedringspotensial.',
      },
    },
    {
      id: 'kk3-7-5-tip-1',
      type: 'tip',
      title: 'Refleksjon',
      content: `Digital etikk handler ikke om å finne enkle svar, men om å stille de riktige spørsmålene. Teknologien i seg selv er verken god eller ond. Det er vi mennesker som gjennom valgene våre bestemmer om den brukes til å bygge opp eller bryte ned.`,
    },
    {
      id: 'kk3-7-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-5-ex-5',
        number: '7.5.5',
        type: 'multiple-choice',
        task: 'Hva menes med "ethics by design"?',
        options: [
          { id: 'a', text: 'At etikk-kurs er obligatorisk for alle designere', isCorrect: false },
          { id: 'b', text: 'At etiske hensyn bygges inn i teknologien fra begynnelsen av utviklingsprosessen', isCorrect: true },
          { id: 'c', text: 'At brukerne selv må velge mellom etiske og uetiske innstillinger', isCorrect: false },
          { id: 'd', text: 'At bare designere med filosofibakgrunn får jobbe med teknologi', isCorrect: false },
        ],
        solution: 'Ethics by design betyr at etiske hensyn integreres i selve utviklingsprosessen fra starten, i stedet for å legges til som et ettertanke. Det handler om å bygge verdier som rettferdighet, åpenhet og respekt for autonomi inn i teknologiske systemer.',
      },
    },
    {
      id: 'kk3-7-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'kk3-7-5-ex-6',
        number: '7.5.6',
        type: 'classic',
        task: 'Velg en av fremtidens teknologier nevnt i dette kapittelet (VR/metaverset, AI-chatbotter, desentraliserte medier eller nevralteknologi). Drøft etiske muligheter og utfordringer ved teknologien for kommunikasjon og kultur.',
        hints: ['Tenk på hvordan teknologien kan endre forholdet mellom mennesker, og hvilke verdier som utfordres'],
        solution: 'Eleven bør velge en teknologi og analysere den fra et kommunikasjons- og kulturperspektiv. Et godt svar identifiserer både positive muligheter (bedre kontakt, nye uttrykksformer, inkludering) og utfordringer (personvern, manipulasjon, avhengighet, sosial isolasjon) og knytter det til etiske begreper som autonomi, rettferdighet og menneskelig verdighet.',
      },
    },
    {
      id: 'kk3-7-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Digital etikk** undersøker moralske spørsmål om teknologiens utvikling, bruk og konsekvenser
- **Digital dannelse** innebærer kritisk, reflektert og ansvarlig deltakelse i den digitale verden
- Ansvaret for teknologiens konsekvenser deles mellom **selskaper**, **myndigheter** og **brukere**
- **Ethics by design** betyr å bygge etiske hensyn inn i teknologien fra starten
- Fremtidens kommunikasjonslandskap reiser nye etiske spørsmål om identitet, autonomi og tillit

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Digital etikk | Moralske spørsmål knyttet til digital teknologi |
| Digital dannelse | Kritisk, reflektert deltakelse i den digitale verden |
| Ethics by design | Å bygge etiske hensyn inn i teknologien fra starten |
| Algoritmisk diskriminering | Når algoritmer forsterker eksisterende ulikhet |`,
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksport
// ============================================================================

export const KOMKULT3_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KOMKULT3_7_1,
  CHAPTER_KOMKULT3_7_2,
  CHAPTER_KOMKULT3_7_3,
  CHAPTER_KOMKULT3_7_4,
  CHAPTER_KOMKULT3_7_5,
];
