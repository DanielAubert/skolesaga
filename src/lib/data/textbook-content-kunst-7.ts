/**
 * Kunst og håndverk 7. klasse - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for kunst og håndverk på 7. trinn
 * Innhold tilpasset 12-13 åringer med fokus på mer avanserte teknikker,
 * perspektiv, digital kunst, arkitektur og bærekraftig design
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Tegning - Perspektiv og figur
// ============================================================================

export const CHAPTER_KUNST_7_1_1: TextbookChapter = {
  id: 'kunst-7-1-1',
  courseId: 'kunst-7',
  chapterNumber: '1.1',
  title: 'Perspektivtegning',
  description: 'Lær å skape dybde og rom i tegningene dine med perspektivteknikker.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke perspektiv til å skape illusjon av rom og dybde',
    'forstå og anvende ett- og topunktsperspektiv',
  ],
  content: [
    {
      id: 'kunst-7-1-1-intro',
      type: 'text',
      content: `Har du noen gang lurt på hvorfor veier ser ut til å bli smalere i det fjerne? Eller hvorfor bygninger langt unna ser mindre ut? Dette skyldes perspektiv - en teknikk kunstnere har brukt i over 500 år for å få flate bilder til å se tredimensjonale ut!`,
    },
    {
      id: 'kunst-7-1-1-def-1',
      type: 'definition',
      title: 'Perspektiv',
      content: `Perspektiv er en tegneteknikk som skaper illusjon av dybde på en flat overflate. Det handler om hvordan øyet vårt oppfatter verden - ting som er langt unna ser mindre ut, og parallelle linjer ser ut til å møtes i det fjerne.`,
    },
    {
      id: 'kunst-7-1-1-text-2',
      type: 'text',
      content: `**Viktige begreper i perspektivtegning**

- **Horisontlinje**: En vannrett linje der himmelen møter bakken. Denne linjen er på øyehøyde.
- **Forsvinningspunkt**: Et punkt på horisontlinjen der parallelle linjer ser ut til å møtes.
- **Siktlinjer**: Hjelpelinjer som går fra objekter til forsvinningspunktet.

Tenk deg at du står på en lang, rett vei. Veikantene ser ut til å møtes langt der fremme - det er forsvinningspunktet!`,
    },
    {
      id: 'kunst-7-1-1-text-3',
      type: 'text',
      content: `**Ettpunktsperspektiv**

Dette er den enkleste formen for perspektiv. Du bruker ETT forsvinningspunkt på horisontlinjen.

**Slik gjør du:**
1. Tegn en vannrett horisontlinje
2. Sett et punkt på linjen - dette er forsvinningspunktet
3. Tegn objekter (som bokser eller bygninger) foran
4. Trekk linjer fra hjørnene til forsvinningspunktet
5. Disse linjene viser hvordan sidene forsvinner i dybden

**Ettpunktsperspektiv passer til:**
- Veier og gater som går rett fram
- Korridorer og tunneler
- Jernbaneskinner`,
    },
    {
      id: 'kunst-7-1-1-example-1',
      type: 'example',
      title: 'Tegne en korridor i ettpunktsperspektiv',
      content: `1. Tegn horisontlinjen på midten av arket
2. Sett forsvinningspunktet midt på linjen
3. Tegn et rektangel rundt forsvinningspunktet (dette blir enden av korridoren)
4. Tegn et større rektangel som dekker hele arket (dette blir starten av korridoren)
5. Trekk linjer fra hjørnene av det store rektangelet til forsvinningspunktet
6. Legg til dører, vinduer og lamper langs sidelinjene
7. Husk: Jo nærmere forsvinningspunktet, jo mindre blir tingene!`,
    },
    {
      id: 'kunst-7-1-1-text-4',
      type: 'text',
      content: `**Topunktsperspektiv**

Topunktsperspektiv bruker TO forsvinningspunkter på horisontlinjen. Dette gir en mer dynamisk vinkel, som om du ser på et hushjørne.

**Slik gjør du:**
1. Tegn horisontlinjen
2. Sett to forsvinningspunkter langt fra hverandre på linjen
3. Tegn en loddrett linje (hjørnet av objektet)
4. Trekk linjer fra topp og bunn av denne linjen til begge forsvinningspunktene
5. Disse linjene danner sidene av objektet

**Topunktsperspektiv passer til:**
- Bygninger sett fra hjørnet
- Gatehjørner
- Møbler og bokser sett skrått`,
    },
    {
      id: 'kunst-7-1-1-tip-1',
      type: 'tip',
      title: 'Tips for bedre perspektiv',
      content: `- Bruk en linjal for nøyaktige linjer
- Tegn forsvinningspunktene utenfor arket for mer naturlige vinkler
- Start med lyse hjelpelinjer som du kan viske ut senere
- Objekter nærmere deg skal være mørkere og mer detaljerte
- Objekter langt unna kan være lysere og mindre detaljerte (luftperspektiv)`,
    },
    {
      id: 'kunst-7-1-1-text-5',
      type: 'text',
      content: `**Luftperspektiv**

I tillegg til linjeperspektiv finnes luftperspektiv. Dette handler om hvordan atmosfæren påvirker hvordan vi ser ting langt unna:

- **Farger blekner**: Fjerne ting ser mer blå-grå ut
- **Kontraster minsker**: Detaljer forsvinner i det fjerne
- **Skarphet avtar**: Ting langt unna er mer uskarpe

Kombinerer du linjeperspektiv med luftperspektiv, får du veldig realistiske landskap!`,
    },
    {
      id: 'kunst-7-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er et forsvinningspunkt?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Et punkt der parallelle linjer ser ut til å møtes',
            multipleChoiceOptions: ['Et punkt der parallelle linjer ser ut til å møtes', 'Et punkt der du starter tegningen', 'Midten av arket', 'Der fargene blandes'],
          },
        ],
        solution: 'Forsvinningspunktet er et punkt på horisontlinjen der parallelle linjer ser ut til å møtes i det fjerne.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor mange forsvinningspunkter brukes i topunktsperspektiv?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'To',
            multipleChoiceOptions: ['To', 'Ett', 'Tre', 'Fire'],
          },
        ],
        solution: 'Topunktsperspektiv bruker to forsvinningspunkter, ett på hver side av horisontlinjen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er luftperspektiv?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'At farger blekner og detaljer forsvinner i det fjerne',
            multipleChoiceOptions: ['At farger blekner og detaljer forsvinner i det fjerne', 'At man tegner fra et fly', 'At man bruker luftig penselstrøk', 'At linjene svever i luften'],
          },
        ],
        solution: 'Luftperspektiv handler om hvordan atmosfæren gjør at fjerne ting ser mer blå-grå, mindre detaljerte og mer uskarpe ut.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Praktisk oppgave: Tegn et rom i ettpunktsperspektiv. Rommet skal ha et vindu og minst to møbler.',
        solution: 'Tegn horisontlinje og forsvinningspunkt, deretter veggene, gulvet og taket med linjer til forsvinningspunktet. Plasser møbler og vindu langs perspektivlinjene.',
        hints: ['Start med horisontlinjen og forsvinningspunktet', 'Tegn rommet som en boks først', 'Husk at møblene også må følge perspektivet'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Praktisk oppgave: Tegn en bygning i topunktsperspektiv, som om du ser den fra hjørnet.',
        solution: 'Tegn horisontlinjen med to forsvinningspunkter langt fra hverandre. Start med en loddrett linje som hjørnet av bygningen, og trekk linjer til begge forsvinningspunkter.',
        hints: ['Plasser forsvinningspunktene langt fra hverandre', 'Den loddrette linjen i midten er hjørnet nærmest deg', 'Bruk lyse hjelpelinjer'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_7_1_2: TextbookChapter = {
  id: 'kunst-7-1-2',
  courseId: 'kunst-7',
  chapterNumber: '1.2',
  title: 'Portrett og figurtegning',
  description: 'Lær å tegne mennesker med riktige proporsjoner og uttrykk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'tegne mennesker med riktige proporsjoner',
    'observere og gjengi ansiktsuttrykk og kroppsspråk',
  ],
  content: [
    {
      id: 'kunst-7-1-2-intro',
      type: 'text',
      content: `Å tegne mennesker er noe av det vanskeligste - men også mest givende - i kunsten. Vi er eksperter på å gjenkjenne ansikter, så selv små feil blir veldig synlige. Men med kunnskap om proporsjoner og øvelse kan alle lære å tegne mennesker!`,
    },
    {
      id: 'kunst-7-1-2-def-1',
      type: 'definition',
      title: 'Proporsjoner',
      content: `Proporsjoner handler om størrelsesforholdet mellom ulike deler. I kunstfaget snakker vi om kroppens proporsjoner - hvordan hodets størrelse forholder seg til kroppen, hvor lange armene er i forhold til beina, osv.`,
    },
    {
      id: 'kunst-7-1-2-text-2',
      type: 'text',
      content: `**Ansiktets proporsjoner**

Et ansikt sett rett forfra kan deles inn slik:

- **Øynene** sitter på midten av hodet (fra hake til toppen av hodet)
- **Nesen** ender midt mellom øynene og haken
- **Munnen** er omtrent 1/3 ned fra nesen til haken
- **Ørene** strekker seg fra øyenhøyde til nesetippen
- **Avstanden mellom øynene** er omtrent ett øyes bredde

Disse reglene er et utgangspunkt - alle ansikter er unike!`,
    },
    {
      id: 'kunst-7-1-2-text-3',
      type: 'text',
      content: `**Tegne et ansikt steg for steg**

1. **Tegn en oval** for hodet
2. **Del ovalen i fire** med en vannrett og en loddrett linje
3. **Øynene** plasseres langs den vannrette linjen, med ett øyes avstand mellom
4. **Nesen** tegnes fra midten ned til midt mellom øyne og hake
5. **Munnen** plasseres omtrent 1/3 ned fra nesetippen
6. **Ørene** tegnes fra øyenivå til nese
7. **Håret** starter over pannen og følger hodets form
8. **Halsen** er smalere enn hodet`,
    },
    {
      id: 'kunst-7-1-2-tip-1',
      type: 'tip',
      title: 'Vanlige feil å unngå',
      content: `- Øynene for høyt: De sitter på MIDTEN av hodet!
- For lite panne: Husk at pannen tar ca. 1/3 av ansiktet
- Ørene på feil sted: De skal være mellom øyne og nese
- For smalt hode: Husk at hodet er bredere enn mange tror
- Øynene for store: Hos voksne fyller øynene bare omtrent 1/5 av ansiktets bredde`,
    },
    {
      id: 'kunst-7-1-2-text-4',
      type: 'text',
      content: `**Kroppens proporsjoner**

Kunstnere måler kroppen i "hoder" - hvor mange ganger hodet passer inn i høyden:

**Voksen:**
- Hele kroppen = ca. 7-8 hoder høy
- Midjen = ca. 3 hoder ned
- Skrittaet = ca. 4 hoder ned (midt på kroppen!)
- Knærne = ca. 6 hoder ned
- Armene når ned til midt på låret

**Ungdom (12-13 år):**
- Hele kroppen = ca. 6-7 hoder høy
- Hodet er litt større i forhold til kroppen enn hos voksne`,
    },
    {
      id: 'kunst-7-1-2-text-5',
      type: 'text',
      content: `**Ansiktsuttrykk**

Følelser vises i ansiktet gjennom:

**Øyenbryn:**
- Hevet = overrasket
- Senket mot midten = sint
- En opp, en ned = forvirret

**Øyne:**
- Vidåpne = overrasket eller redd
- Halvt lukket = trøtt, fornøyd eller mistenksom
- Smilende øyne = ekte glede (kinnet skyver underkant av øyet opp)

**Munn:**
- Opp i hjørnene = glad
- Ned i hjørnene = trist
- Åpen = overrasket eller redd
- Sammenpresset = sint`,
    },
    {
      id: 'kunst-7-1-2-example-1',
      type: 'example',
      title: 'Tegne en figur i bevegelse',
      content: `Bruk "pinnemannen" som utgangspunkt:

1. **Handlingslinje**: Tegn en buet linje for kroppens hovedbevegelse
2. **Hode**: Sirkel øverst på linjen
3. **Ryggrad**: Følg handlingslinjen
4. **Skulderlinjen**: Vannrett linje for skuldre
5. **Hoftelinjen**: Linje for hoftene (ofte vinklet motsatt av skuldrene)
6. **Bein og armer**: Linjer fra hofter og skuldre
7. **Bygg ut**: Legg til volum rundt linjene

Husk: Kroppen balanserer alltid - hvis overkroppen lener seg en vei, må underkroppen kompensere!`,
    },
    {
      id: 'kunst-7-1-2-text-6',
      type: 'text',
      content: `**Krokitegning**

Krokitegning er raske skisser av mennesker i bevegelse. Du tegner det viktigste på kort tid (30 sekunder til 5 minutter).

**Hvorfor er det nyttig?**
- Trener øyet til å se hovedformene
- Fanger bevegelse og energi
- Fjerner frykten for å gjøre feil
- Bygger tegneferdigheter raskt

**Tips:** Ikke tenk for mye! La hånden følge det øyet ser. Det er helt greit at tegningen ikke blir "perfekt".`,
    },
    {
      id: 'kunst-7-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvor på hodet sitter øynene?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'På midten av hodet, fra hake til topp',
            multipleChoiceOptions: ['På midten av hodet, fra hake til topp', 'Øverst på hodet', 'Nederst på hodet', 'En tredjedel ned fra toppen'],
          },
        ],
        solution: 'Øynene sitter på den vannrette midtlinjen av hodet. En vanlig feil er å tegne dem for høyt opp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvor mange "hoder" er en voksen kropp høy?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Ca. 7-8 hoder',
            multipleChoiceOptions: ['Ca. 7-8 hoder', 'Ca. 3-4 hoder', 'Ca. 5-6 hoder', 'Ca. 10-12 hoder'],
          },
        ],
        solution: 'En voksen kropp måler ca. 7-8 hoder i høyden. Ungdommer er litt kortere i forhold til hodet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er krokitegning?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Raske skisser av mennesker eller objekter',
            multipleChoiceOptions: ['Raske skisser av mennesker eller objekter', 'Langsomme, detaljerte tegninger', 'Tegning av kroker', 'En type maling'],
          },
        ],
        solution: 'Krokitegning er raske skisser (30 sekunder til noen minutter) som fanger hovedformen og bevegelsen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Praktisk oppgave: Tegn et selvportrett ved hjelp av proporsjonslinjene. Bruk et speil!',
        solution: 'Start med en oval, del den opp, og plasser øyne, nese og munn på riktig sted. Se på deg selv i speilet og juster etter det du faktisk ser.',
        hints: ['Tegn ovalen og delestrekene først', 'Se i speilet ofte mens du tegner', 'Sammenlign avstander hele tiden'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Praktisk oppgave: Tegn 5 ansikter med ulike ansiktsuttrykk: glad, trist, sint, overrasket og redd.',
        solution: 'Bruk de samme proporsjonene, men varier øyenbryn, øyne og munn for å vise følelsene. Tenk på hva som skjer med ansiktet når du selv føler disse følelsene.',
        hints: ['Start med samme grunnform', 'Fokuser på øyenbryn, øyne og munn', 'Prøv uttrykkene foran speilet først'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Forming og håndverk
// ============================================================================

export const CHAPTER_KUNST_7_2_1: TextbookChapter = {
  id: 'kunst-7-2-1',
  courseId: 'kunst-7',
  chapterNumber: '2.1',
  title: 'Skulptur',
  description: 'Utforsk tredimensjonal forming i ulike materialer.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lage skulpturer i ulike materialer',
    'forstå forskjellen mellom additive og subtraktive teknikker',
  ],
  content: [
    {
      id: 'kunst-7-2-1-intro',
      type: 'text',
      content: `Skulptur er kunst du kan gå rundt! I motsetning til malerier og tegninger, som er flate, har skulpturer tre dimensjoner: høyde, bredde og dybde. Fra gigantiske statuer til små figurer - skulpturer finnes overalt rundt oss.`,
    },
    {
      id: 'kunst-7-2-1-def-1',
      type: 'definition',
      title: 'Skulptur',
      content: `Skulptur er tredimensjonal kunst. Det betyr at verket har form i alle retninger og kan sees fra flere vinkler. Skulpturer kan lages av nesten alle materialer: stein, tre, metall, leire, glass, plast, og til og med is eller søppel!`,
    },
    {
      id: 'kunst-7-2-1-text-2',
      type: 'text',
      content: `**To hovedmetoder**

**Additiv metode (legge til)**
- Du bygger opp skulpturen ved å legge til materiale
- Eksempler: leire, papirmaché, voks, sveising
- Du kan alltid legge til mer
- Enklere å rette opp feil

**Subtraktiv metode (ta bort)**
- Du fjerner materiale fra en blokk
- Eksempler: hugge i stein, skjære i tre, spikking
- Du kan ikke legge til igjen!
- Krever god planlegging

Michelangelo sa at skulpturen allerede fantes inne i marmorblokken - han bare fjernet det som ikke skulle være der!`,
    },
    {
      id: 'kunst-7-2-1-text-3',
      type: 'text',
      content: `**Arbeid med leire - viderekomne teknikker**

**Hul skulptur**
Store skulpturer i leire må være hule, ellers:
- Tar det evig å tørke
- Kan leiren sprekke
- Kan eksplodere i brennovnen!

**Slik gjør du:**
1. Bygg opp formen solid først
2. Når formen er ferdig, kutt skulpturen i to
3. Hul ut innsiden (vegger ca. 1-2 cm tykke)
4. Skjær hull i bunnen for luftsirkulasjon
5. Bruk slip for å lime delene sammen igjen
6. Stryk over skjøtene så de ikke synes`,
    },
    {
      id: 'kunst-7-2-1-tip-1',
      type: 'tip',
      title: 'Armatur',
      content: `For større skulpturer kan du bruke armatur - et indre "skjelett" som gir støtte:
- Ståltråd bøyd til formen
- Alufolie for volum
- Avispapir surret rundt

Armaturet holdes inne i skulpturen og gir styrke mens du jobber. For leire som skal brennes, må armaturet kunne fjernes etterpå!`,
    },
    {
      id: 'kunst-7-2-1-text-4',
      type: 'text',
      content: `**Relieff**

Et relieff er en skulptur som stikker ut fra en flat bakgrunn:

- **Høyrelieff**: Figurene stikker langt ut
- **Lavrelieff (basrelieff)**: Figurene er nesten flate
- **Forsænkt relieff**: Figurene er hugget ned i overflaten

Relieffer finner du på mynter, bygninger, og som dekorasjon på møbler. De er enklere å lage enn fritstående skulpturer fordi du bare trenger å tenke på forsiden!`,
    },
    {
      id: 'kunst-7-2-1-text-5',
      type: 'text',
      content: `**Moderne skulptur**

Moderne kunstnere har utvidet hva skulptur kan være:

- **Kinetisk skulptur**: Skulpturer som beveger seg
- **Installasjoner**: Hele rom fylt med kunst
- **Assemblage**: Skulpturer laget av funne objekter
- **Miljøskulptur**: Kunst i naturen eller det offentlige rom

Kunstnere som Louise Bourgeois, Anish Kapoor og norske Bård Breivik har skapt skulpturer som utfordrer vår forståelse av hva kunst kan være.`,
    },
    {
      id: 'kunst-7-2-1-example-1',
      type: 'example',
      title: 'Lag en skulptur av funne objekter',
      content: `**Assemblage - kunsten å sette sammen**

1. **Samle materialer**: Knapper, skruer, treklosser, korker, plastflasker, etc.
2. **Sorter**: Legg lignende ting sammen og se på formene
3. **Eksperimenter**: Prøv ulike kombinasjoner
4. **Lim**: Bruk limpistol eller sterk lim
5. **Fullfør**: Mal eller la materialene synes

Tips: Tenk på hva materialene minner deg om. En gaffel kan bli en person, en flaske kan bli en kropp!`,
    },
    {
      id: 'kunst-7-2-1-warning-1',
      type: 'warning',
      title: 'Sikkerhet ved skulpturarbeid',
      content: `- Bruk vernebriller ved kutting og sliping
- Bruk hansker med skarpe verktøy
- Arbeid i godt ventilert rom med kjemikalier
- Ha alltid en voksen til stede med elektriske verktøy
- Løft riktig - skulpturer kan være tunge!`,
    },
    {
      id: 'kunst-7-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom additiv og subtraktiv metode?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Additiv legger til materiale, subtraktiv tar bort materiale',
            multipleChoiceOptions: ['Additiv legger til materiale, subtraktiv tar bort materiale', 'De er det samme', 'Additiv bruker maling, subtraktiv bruker leire', 'Additiv er moderne, subtraktiv er gammeldags'],
          },
        ],
        solution: 'Ved additiv metode bygger du opp skulpturen ved å legge til materiale. Ved subtraktiv metode fjerner du materiale fra en blokk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor må store leireskulpturer være hule?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'For å unngå sprekker og eksplosjoner i brennovnen',
            multipleChoiceOptions: ['For å unngå sprekker og eksplosjoner i brennovnen', 'For å spare leire', 'For at de skal veie mindre', 'Det må de ikke'],
          },
        ],
        solution: 'Store solide leireskulpturer tørker ujevnt og kan sprekke. I brennovnen kan fuktig luft inne i leiren utvides og føre til eksplosjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er et relieff?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'En skulptur som stikker ut fra en flat bakgrunn',
            multipleChoiceOptions: ['En skulptur som stikker ut fra en flat bakgrunn', 'En helt flat tegning', 'En skulptur som henger i taket', 'En skulptur av metall'],
          },
        ],
        solution: 'Et relieff er en skulptur som stikker ut fra en flat bakgrunn, som på mynter eller bygningsdekorasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Praktisk oppgave: Lag et relieff i leire eller plastilin som viser et motiv du velger selv.',
        solution: 'Start med en flat plate som bakgrunn. Bygg opp motivet ved å legge til leire. Husk å bruke slip for å feste delene godt.',
        hints: ['Kjevle ut en flat plate først', 'Skisser motivet med en spiss', 'Bygg opp lagvis fra bakgrunnen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-2-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-2-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Praktisk oppgave: Lag en assemblage-skulptur av funne objekter. Gi skulpturen en tittel.',
        solution: 'Samle interessante objekter, eksperimenter med hvordan de kan settes sammen, og lim dem fast. Tenk på hva skulpturen uttrykker eller forestiller.',
        hints: ['Se etter uvanlige former i hverdagsting', 'Prøv ulike kombinasjoner før du limer', 'La materialet inspirere formen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_7_2_2: TextbookChapter = {
  id: 'kunst-7-2-2',
  courseId: 'kunst-7',
  chapterNumber: '2.2',
  title: 'Tekstil og design',
  description: 'Lær grunnleggende tekstilteknikker og designe klær og produkter.',
  estimatedMinutes: 50,
  competenceGoals: [
    'arbeide med tekstil og ulike teknikker',
    'designe og sy enkle produkter',
  ],
  content: [
    {
      id: 'kunst-7-2-2-intro',
      type: 'text',
      content: `Tekstil omgir oss hele tiden - i klærne vi har på oss, sengetøyet vi sover i, og møblene vi sitter på. Å kunne jobbe med tekstil gir deg muligheten til å skape unike ting og kanskje til og med reparere eller tilpasse klær du allerede har!`,
    },
    {
      id: 'kunst-7-2-2-def-1',
      type: 'definition',
      title: 'Tekstil',
      content: `Tekstil er materialer laget av fiber som er spunnet til tråd og vevd, strikket eller filtet sammen. Det kan være naturlige materialer (bomull, ull, silke, lin) eller syntetiske (polyester, nylon, akryl).`,
    },
    {
      id: 'kunst-7-2-2-text-2',
      type: 'text',
      content: `**Ulike tekstilmaterialer**

**Naturlige fiber:**
- **Bomull**: Myk, absorberer fukt, tåler vask. Fra bomullsplanten.
- **Ull**: Varm, vannavstøtende, elastisk. Fra sauer og andre dyr.
- **Silke**: Glatt, glinsende, sterkt. Fra silkeorm.
- **Lin**: Kjølig, slitesterk. Fra linplanten.

**Syntetiske fiber:**
- **Polyester**: Slitesterk, tørker fort, krøller ikke
- **Nylon**: Veldig sterk, elastisk
- **Akryl**: Billig alternativ til ull

Blandingsstoffer kombinerer egenskapene fra flere materialer.`,
    },
    {
      id: 'kunst-7-2-2-text-3',
      type: 'text',
      content: `**Grunnleggende søm**

**Forkesting (hefting)**
- Lange, løse sting for midlertidig festing
- Sys for hånd, fjernes etterpå

**Rettsøm**
- Jevne sting i en rett linje
- Brukes til å sy sammen stoffer
- Kan sys for hånd eller med maskin

**Sikksakksting**
- Diagonale sting som hindrer at stoffet rakner
- Brukes langs kanter
- Viktig for elastiske stoffer

**Kastesting**
- Skråstilt over kanten
- Hindrer at stoffet rakner`,
    },
    {
      id: 'kunst-7-2-2-tip-1',
      type: 'tip',
      title: 'Tips for håndssøm',
      content: `- Bruk nål som passer til stofftykkelsen
- Trekk tråden gjennom bivoks for å hindre floker
- Hold stoffet stramt men ikke for stramt
- Sy mot deg selv for bedre kontroll
- Fest alltid stingene i starten og slutten`,
    },
    {
      id: 'kunst-7-2-2-text-4',
      type: 'text',
      content: `**Symaskin - grunnleggende**

Symaskinen gjør søm raskere og sterkere. Viktige deler:

- **Nålestang**: Holder nålen
- **Trykfot**: Holder stoffet nede
- **Spolehus**: Inneholder undertråden
- **Matehunder**: Beveger stoffet framover
- **Stinglengdevelger**: Justerer hvor lange stingene blir
- **Spenningsratt**: Justerer trådspenningen

**Før du starter:**
1. Sjekk at nålen er riktig satt inn
2. Tre overtråden riktig
3. Sett i spolehuset med undertråd
4. Prøv på en stoffbit først!`,
    },
    {
      id: 'kunst-7-2-2-text-5',
      type: 'text',
      content: `**Tekstildesign**

Å designe med tekstil handler om både funksjon og estetikk:

**Funksjon:**
- Hva skal produktet brukes til?
- Hvilke egenskaper trenger stoffet?
- Hvordan skal det vaskes?

**Estetikk:**
- Farger og mønstre
- Form og fasong
- Detaljer og pynt

**Designprosessen:**
1. Idé og skisse
2. Velge materialer
3. Lage mønster/mal
4. Klippe ut
5. Sy sammen
6. Finpuss og detaljer`,
    },
    {
      id: 'kunst-7-2-2-example-1',
      type: 'example',
      title: 'Sy en enkel stoffpose',
      content: `**Du trenger:** Stoffrektangel ca. 30x50 cm, tråd, nål/symaskin

1. **Brett** stoffet i to med rettsiden inn (så sømmen kommer på innsiden)
2. **Sy** langs begge sidene, ca. 1 cm fra kanten
3. **Brett inn** toppen ca. 3 cm og sy langs kanten (la hullet stå åpent for snoren)
4. **Snu** posen rettside ut
5. **Tre** en snor eller bånd gjennom åpningen øverst

Tips: Bruk sikksakksting langs kantene før du starter for å hindre at stoffet rakner!`,
    },
    {
      id: 'kunst-7-2-2-text-6',
      type: 'text',
      content: `**Upcycling - gi nytt liv til gamle klær**

Upcycling handler om å forandre noe gammelt til noe nytt og bedre:

**Ideer:**
- Sy om en stor t-skjorte til en topp
- Lag en veske av gamle jeans
- Sy lappetepper av stoffrester
- Lag puter av gamle skjorter
- Pynt med broderi eller påsydd mønster

Dette er bærekraftig mote - du lager noe unikt samtidig som du reduserer avfall!`,
    },
    {
      id: 'kunst-7-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på naturlige og syntetiske fiber?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Naturlige kommer fra planter eller dyr, syntetiske er menneskeskapte',
            multipleChoiceOptions: ['Naturlige kommer fra planter eller dyr, syntetiske er menneskeskapte', 'De er like', 'Naturlige er billigere', 'Syntetiske er alltid bedre'],
          },
        ],
        solution: 'Naturlige fiber kommer fra naturen (bomull fra planter, ull fra dyr), mens syntetiske fiber er laget av mennesker, ofte fra petroleum.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva brukes sikksakksting til?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Å hindre at stoffet rakner langs kantene',
            multipleChoiceOptions: ['Å hindre at stoffet rakner langs kantene', 'Å lage dekorasjoner', 'Å sy knapper', 'Å lage hull i stoffet'],
          },
        ],
        solution: 'Sikksakksting brukes langs stoffkanter for å hindre at trådene rakner opp. Det er spesielt viktig for elastiske stoffer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er upcycling?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Å forandre noe gammelt til noe nytt og bedre',
            multipleChoiceOptions: ['Å forandre noe gammelt til noe nytt og bedre', 'Å kaste gamle klær', 'Å kjøpe nye klær', 'Å vaske klær'],
          },
        ],
        solution: 'Upcycling betyr å gi gammle ting nytt liv ved å forandre dem til noe nytt, for eksempel sy om klær eller lage noe helt nytt av stoffet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Praktisk oppgave: Sy en enkel stoffpose eller pennalhus med håndssøm.',
        solution: 'Velg stoff, brett det i to med rettsiden inn, sy langs kantene med rettsøm, snu og bruk!',
        hints: ['Velg et stoff som ikke rakner lett', 'Husk å feste tråden i start og slutt', 'Sy ca. 1 cm fra kanten'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-2-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-2-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Praktisk oppgave: Design og lag noe nytt av et gammelt klesplagg (upcycling).',
        solution: 'Finn et klesplagg som ikke brukes, tenk på hva det kan bli, skisser ideen, og sy det om.',
        hints: ['Se på formen og stoffet - hva kan det bli?', 'Start enkelt', 'Prøv å bruke så mye av stoffet som mulig'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Digital kunst og arkitektur
// ============================================================================

export const CHAPTER_KUNST_7_3_1: TextbookChapter = {
  id: 'kunst-7-3-1',
  courseId: 'kunst-7',
  chapterNumber: '3.1',
  title: 'Digital kunst',
  description: 'Utforsk kunstskaping med digitale verktøy og programvare.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke digitale verktøy til å skape kunst',
    'forstå muligheter og begrensninger ved digital kunst',
  ],
  content: [
    {
      id: 'kunst-7-3-1-intro',
      type: 'text',
      content: `Digital kunst har revolusjonert hvordan vi skaper og deler kunst. Med en datamaskin eller nettbrett kan du tegne, male, manipulere bilder, lage animasjoner og mye mer. Mange profesjonelle kunstnere og designere jobber nå helt digitalt!`,
    },
    {
      id: 'kunst-7-3-1-def-1',
      type: 'definition',
      title: 'Digital kunst',
      content: `Digital kunst er kunst som er skapt ved hjelp av digitale verktøy som datamaskiner, nettbrett eller smarttelefoner. Det kan være alt fra digital tegning og maling til 3D-modeller, animasjoner og generativ kunst.`,
    },
    {
      id: 'kunst-7-3-1-text-2',
      type: 'text',
      content: `**Typer digital kunst**

**Digital tegning og maling**
- Bruker tegnebrett eller nettbrett
- Simulerer tradisjonelle verktøy
- Uendelig med lag og angremuligheter

**Bildemanipulering**
- Redigere og kombinere fotografier
- Lag fotomontasjer
- Retusjering og fargekorrigering

**Vektorgrafikk**
- Basert på matematiske former
- Skaleres uten å miste kvalitet
- Brukes til logoer og illustrasjoner

**3D-modellering**
- Lage tredimensjonale objekter
- Brukes i spill, film og produktdesign

**Pikselkunst**
- Kunst laget piksel for piksel
- Retrostil fra tidlige dataspill`,
    },
    {
      id: 'kunst-7-3-1-text-3',
      type: 'text',
      content: `**Grunnleggende verktøy**

**Gratis programmer:**
- **GIMP**: Kraftig bildebehandling (som Photoshop)
- **Krita**: Utmerket for digital maling
- **Inkscape**: Vektorgrafikk
- **Blender**: 3D-modellering
- **Piskel**: Pikselkunst i nettleseren

**Mobile apper:**
- Procreate (iPad)
- ibisPaint
- Sketchbook
- Canva

**Nettbaserte verktøy:**
- Canva (design)
- Photopea (bildebehandling)
- Pixlr (bildebehandling)`,
    },
    {
      id: 'kunst-7-3-1-text-4',
      type: 'text',
      content: `**Viktige konsepter**

**Lag (Layers)**
Tenk på lag som gjennomsiktige ark stablet oppå hverandre:
- Du kan tegne på ett lag uten å påvirke andre
- Flytt, skjul eller slett lag uavhengig
- Gjør det enkelt å eksperimentere

**Oppløsning**
- Måles i piksler (f.eks. 1920x1080)
- Høyere oppløsning = mer detaljer
- For web: 72-150 DPI
- For print: 300 DPI

**Filformater**
- **JPEG**: Komprimert, bra for foto
- **PNG**: Støtter gjennomsiktighet
- **PSD/KRA**: Beholder lag (Photoshop/Krita)
- **SVG**: Vektorformat`,
    },
    {
      id: 'kunst-7-3-1-tip-1',
      type: 'tip',
      title: 'Tips for digital tegning',
      content: `- Start med store former, detaljene kommer til slutt
- Bruk referansebilder - alle profesjonelle gjør det!
- Lag et nytt lag for hver del av tegningen
- Zoom ut ofte for å se helheten
- Bruk hurtigtaster for å jobbe effektivt
- Lagre ofte i prosjektformatet (med lag)
- Eksportér til JPEG/PNG når du er ferdig`,
    },
    {
      id: 'kunst-7-3-1-text-5',
      type: 'text',
      content: `**Fotomanipulering - grunnleggende**

**Justering av bilder:**
- Beskjæring (crop)
- Lysstyrke og kontrast
- Fargejustering
- Rotering og speiling

**Kreativ manipulering:**
- Kombinere flere bilder
- Fjerne eller legge til elementer
- Filtre og effekter
- Tekst og grafikk

**Etikk i bildemanipulering:**
- Manipulerte bilder kan villede folk
- Merk tydelig når bilder er endret
- Respekter andres rettigheter til egne bilder
- Vær kritisk til bilder du ser - ikke alt er ekte!`,
    },
    {
      id: 'kunst-7-3-1-example-1',
      type: 'example',
      title: 'Lag en digital collage',
      content: `1. **Samle bilder**: Finn 3-5 bilder med Creative Commons-lisens
2. **Åpne i GIMP eller Photopea**: Importer alle bildene
3. **Klipp ut elementer**: Bruk utvalgsverktøy
4. **Kombiner**: Lim inn på et nytt lerret
5. **Juster**: Skaler og roter elementene
6. **Blandingsmoduser**: Eksperimenter med hvordan lagene blandes
7. **Finpuss**: Legg til skygger, juster farger
8. **Eksporter**: Lagre som PNG eller JPEG`,
    },
    {
      id: 'kunst-7-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er lag (layers) i digital kunst?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Gjennomsiktige ark stablet oppå hverandre',
            multipleChoiceOptions: ['Gjennomsiktige ark stablet oppå hverandre', 'Ulike farger', 'Forskjellige filtyper', 'En type pensel'],
          },
        ],
        solution: 'Lag fungerer som gjennomsiktige ark oppå hverandre. Du kan tegne på ett lag uten å påvirke de andre, noe som gjør det enkelt å eksperimentere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken oppløsning (DPI) brukes vanligvis for bilder som skal trykkes?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: '300 DPI',
            multipleChoiceOptions: ['300 DPI', '72 DPI', '50 DPI', '1000 DPI'],
          },
        ],
        solution: 'For trykk brukes vanligvis 300 DPI for god kvalitet. For skjermvisning holder 72-150 DPI.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen på pikselgrafikk og vektorgrafikk?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Vektorgrafikk kan skaleres uten å miste kvalitet, pikselgrafikk blir uskarpt',
            multipleChoiceOptions: ['Vektorgrafikk kan skaleres uten å miste kvalitet, pikselgrafikk blir uskarpt', 'De er det samme', 'Pikselgrafikk er bedre', 'Vektorgrafikk brukes bare til 3D'],
          },
        ],
        solution: 'Vektorgrafikk er basert på matematiske former og kan forstørres i det uendelige uten kvalitetstap. Pikselgrafikk blir uskarpt når det forstørres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Praktisk oppgave: Lag et digitalt kunstverk ved hjelp av et program eller en app. Bruk minst 3 lag.',
        solution: 'Velg et program (Krita, GIMP, eller en app). Lag separate lag for bakgrunn, hovedmotiv og detaljer. Eksperimenter med ulike pensler og effekter.',
        hints: ['Start med bakgrunnen på et eget lag', 'Lag hovedmotivet på et nytt lag', 'Legg til detaljer og effekter på egne lag'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-3-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Praktisk oppgave: Lag en digital collage ved å kombinere minst 3 ulike bilder til ett kunstverk.',
        solution: 'Finn bilder med fri lisens, klipp ut elementer, kombiner dem i et bildebehandlingsprogram, og juster farger og effekter for et helhetlig resultat.',
        hints: ['Bruk bilder med Creative Commons-lisens', 'Tenk på en sammenheng eller et tema', 'Juster fargene så bildene passer sammen'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_7_3_2: TextbookChapter = {
  id: 'kunst-7-3-2',
  courseId: 'kunst-7',
  chapterNumber: '3.2',
  title: 'Arkitektur',
  description: 'Utforsk bygningskunst og lær å designe rom og bygninger.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå arkitektur som kunstform og funksjonelt design',
    'designe enkle bygninger og rom',
  ],
  content: [
    {
      id: 'kunst-7-3-2-intro',
      type: 'text',
      content: `Arkitektur er kunsten å designe bygninger og rom. Det handler om mye mer enn bare hvordan ting ser ut - en arkitekt må tenke på hvordan folk skal bruke bygningen, hvordan den påvirker omgivelsene, og hvordan den tåler vær og vind gjennom mange år.`,
    },
    {
      id: 'kunst-7-3-2-def-1',
      type: 'definition',
      title: 'Arkitektur',
      content: `Arkitektur er kunsten og vitenskapen om å designe og bygge strukturer. Det kombinerer estetikk (skjønnhet), funksjon (bruk), konstruksjon (byggeteknikk) og kontekst (omgivelser og miljø).`,
    },
    {
      id: 'kunst-7-3-2-text-2',
      type: 'text',
      content: `**Arkitekturens tre grunnprinsipper**

Den romerske arkitekten Vitruvius definerte for over 2000 år siden tre prinsipper som fortsatt gjelder:

**1. Firmitas (Styrke)**
- Bygningen må være solid og varig
- Materialene må tåle vær og bruk
- Konstruksjonen må være trygg

**2. Utilitas (Nytte)**
- Bygningen må fungere til sitt formål
- Rommene må ha riktig størrelse og plassering
- Det må være lett å bevege seg i bygningen

**3. Venustas (Skjønnhet)**
- Bygningen skal være vakker
- Proporsjonene skal være harmoniske
- Den skal passe inn i omgivelsene`,
    },
    {
      id: 'kunst-7-3-2-text-3',
      type: 'text',
      content: `**Arkitekturstiler gjennom historien**

**Antikken (ca. 800 f.Kr. - 500 e.Kr.)**
- Greske templer med søyler
- Romerske buer og kupler
- Parthenon i Athen, Colosseum i Roma

**Middelalderen (ca. 500-1400)**
- Romansk: Tykke vegger, små vinduer, rundbuer
- Gotikk: Spissbuer, høye hvelv, store vinduer med glassmaleri

**Renessansen (ca. 1400-1600)**
- Symmetri og harmoni
- Inspirert av antikken
- Kupler og søyler

**Moderne arkitektur (1900-tallet)**
- "Form følger funksjon"
- Mindre ornamentikk
- Nye materialer: stål, betong, glass
- Rene linjer og åpne planløsninger`,
    },
    {
      id: 'kunst-7-3-2-text-4',
      type: 'text',
      content: `**Bygningstyper**

Ulike bygninger har ulike behov:

**Boliger**
- Privatliv og komfort
- Lys og luft
- Praktisk planløsning

**Skoler**
- Gode læringsmiljøer
- Akustikk og belysning
- Sosiale områder

**Offentlige bygninger**
- Representerer fellesskapet
- Tilgjengelighet for alle
- Varige materialer

**Kontorer**
- Effektive arbeidsplasser
- Fleksibilitet
- Naturlig lys`,
    },
    {
      id: 'kunst-7-3-2-example-1',
      type: 'example',
      title: 'Norsk arkitektur - Opera i Oslo',
      content: `Operahuset i Oslo (2008) av Snøhetta Arkitekter er et moderne norsk landemerke:

**Konsept:**
- Taket er som et isfjell eller fjell som stiger opp av fjorden
- Du kan gå på taket - bygningen inviterer publikum inn

**Materiale:**
- Hvit marmor og granitt utvendig
- Mye tre innvendig
- Store glassflater mot fjorden

**Funksjon:**
- Operasal, ballettscene, prøvesaler
- Foajeer med utsikt
- Offentlig uterom på taket

Dette viser hvordan moderne arkitektur kan kombinere funksjon, skjønnhet og forbindelse til omgivelsene.`,
    },
    {
      id: 'kunst-7-3-2-tip-1',
      type: 'tip',
      title: 'Lage arkitekturmodeller',
      content: `**Materialer:**
- Papp og kartong
- Skumkartong (foam board)
- Ispinner og fyrstikker
- Tre og finer
- 3D-print

**Tips:**
- Start med grunnplanet
- Bruk linjal og vinkelhake
- Lim tørker - ha tålmodighet!
- Skaler riktig (f.eks. 1:50 = 2 cm i modellen = 1 meter i virkeligheten)`,
    },
    {
      id: 'kunst-7-3-2-text-5',
      type: 'text',
      content: `**Plantegning og snitt**

**Plantegning** viser bygningen sett rett ovenfra:
- Vegger tegnes som tykke streker
- Dører tegnes åpne (en bue som viser hvordan den åpnes)
- Vinduer tegnes som tynne streker i veggen
- Møbler kan tegnes for å vise romutnyttelse

**Snitt** viser bygningen "kuttet" i to:
- Viser høyder på rom
- Viser trapper og etasjer
- Viser takets form

**Fasade** viser bygningen utenfra:
- Viser vinduer og dører
- Viser takform
- Viser materialer og detaljer`,
    },
    {
      id: 'kunst-7-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er Vitruvius tre prinsipper for god arkitektur?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Styrke, nytte og skjønnhet',
            multipleChoiceOptions: ['Styrke, nytte og skjønnhet', 'Høyt, bredt og langt', 'Billig, raskt og enkelt', 'Moderne, gammelt og nytt'],
          },
        ],
        solution: 'Vitruvius tre prinsipper er firmitas (styrke), utilitas (nytte/funksjon) og venustas (skjønnhet). God arkitektur må ha alle tre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva kjennetegner gotisk arkitektur?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Spissbuer, høye hvelv og store vinduer med glassmaleri',
            multipleChoiceOptions: ['Spissbuer, høye hvelv og store vinduer med glassmaleri', 'Flate tak og mye glass', 'Tykke vegger og små vinduer', 'Pyramideform'],
          },
        ],
        solution: 'Gotisk arkitektur (ca. 1100-1400) kjennetegnes av spissbuer, høye hvelv og store vinduer med farget glass. Kjente eksempler er Notre-Dame i Paris og Nidarosdomen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva viser en plantegning?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Bygningen sett rett ovenfra',
            multipleChoiceOptions: ['Bygningen sett rett ovenfra', 'Bygningen sett fra siden', 'Bygningen sett nedenfra', 'En 3D-modell'],
          },
        ],
        solution: 'En plantegning viser bygningen sett rett ovenfra, med vegger, dører, vinduer og romfordelning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Praktisk oppgave: Tegn en plantegning av drømmerommet ditt. Inkluder møbler, dører og vinduer.',
        solution: 'Tegn rommet sett ovenfra. Bruk linjal for rette linjer. Vis vegger som tykke streker, dører med bue, vinduer som brudd i veggen, og plasser møbler der du vil ha dem.',
        hints: ['Start med å tegne veggene', 'Marker hvor dører og vinduer er', 'Tegn møblene sett ovenfra', 'Husk målestokk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-3-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Praktisk oppgave: Bygg en modell av en enkel bygning i papp eller annet materiale.',
        solution: 'Planlegg først med skisse. Kutt ut vegger med vinduer og dører. Lim veggene sammen. Legg til tak. Dekorer om ønskelig.',
        hints: ['Lag en enkel skisse først', 'Mål nøyaktig før du kutter', 'Bruk tape innvendig for sterkere konstruksjon', 'Start enkelt - et hus med fire vegger og tak'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Kunsthistorie og bærekraft
// ============================================================================

export const CHAPTER_KUNST_7_4_1: TextbookChapter = {
  id: 'kunst-7-4-1',
  courseId: 'kunst-7',
  chapterNumber: '4.1',
  title: 'Kunsthistorie - moderne kunst',
  description: 'Utforsk kunstretninger fra 1900-tallet og deres innflytelse i dag.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til viktige kunstretninger i moderne tid',
    'forstå hvordan kunst reflekterer og påvirker samfunnet',
  ],
  content: [
    {
      id: 'kunst-7-4-1-intro',
      type: 'text',
      content: `1900-tallet var en tid med enorme forandringer i kunsten. Kunstnere brøt med tradisjonene og utforsket helt nye måter å uttrykke seg på. La oss utforske noen av de viktigste retningene som fortsatt påvirker kunsten i dag!`,
    },
    {
      id: 'kunst-7-4-1-def-1',
      type: 'definition',
      title: 'Moderne kunst',
      content: `Moderne kunst refererer vanligvis til kunst fra ca. 1860 til ca. 1970. Det er ikke bare kunst fra "moderne tid", men kunstretninger som brøt med tradisjonell akademisk kunst og utforsket nye former, teknikker og ideer.`,
    },
    {
      id: 'kunst-7-4-1-text-2',
      type: 'text',
      content: `**Ekspresjonisme (ca. 1905-1920)**

Ekspresjonistene ville uttrykke følelser, ikke bare gjengi virkeligheten.

**Kjennetegn:**
- Sterke, ofte unaturlige farger
- Forvrengte former
- Kraftige penselstrøk
- Følelser er viktigere enn realisme

**Kjente kunstnere:**
- Edvard Munch (Norge) - "Skrik"
- Ernst Ludwig Kirchner (Tyskland)
- Egon Schiele (Østerrike)

Ekspresjonismen var spesielt sterk i Norge og Tyskland!`,
    },
    {
      id: 'kunst-7-4-1-text-3',
      type: 'text',
      content: `**Kubisme (ca. 1907-1920)**

Kubistene brøt opp objekter i geometriske former og viste dem fra flere vinkler samtidig.

**Kjennetegn:**
- Geometriske former (kuber, sylindre, kjegler)
- Flere perspektiver samtidig
- Fragmenterte former
- Ofte dempede farger

**Kjente kunstnere:**
- Pablo Picasso (Spania/Frankrike)
- Georges Braque (Frankrike)
- Juan Gris (Spania)

Kubismen forandret for alltid hvordan vi tenker på perspektiv i kunst!`,
    },
    {
      id: 'kunst-7-4-1-text-4',
      type: 'text',
      content: `**Surrealisme (ca. 1924-1960-tallet)**

Surrealistene utforsket drømmer og det ubevisste sinn.

**Kjennetegn:**
- Drømmeaktige, umulige scener
- Overraskende kombinasjoner
- Ofte veldig detaljert og realistisk teknikk
- Symboler fra drømmer og psykoanalyse

**Kjente kunstnere:**
- Salvador Dalí (Spania) - "De myke urene"
- René Magritte (Belgia) - "Mannens sønn"
- Frida Kahlo (Mexico)

Surrealistene ble inspirert av Sigmund Freuds teorier om drømmer!`,
    },
    {
      id: 'kunst-7-4-1-text-5',
      type: 'text',
      content: `**Abstrakt kunst (fra ca. 1910)**

Abstrakt kunst viser ikke gjenkjennelige objekter - den fokuserer på form, farge og linje for sin egen del.

**Typer abstrakt kunst:**
- **Geometrisk abstraksjon**: Rene geometriske former
- **Lyrisk abstraksjon**: Mer organiske, flytende former
- **Minimisme**: Ekstremt forenklet

**Kjente kunstnere:**
- Wassily Kandinsky (Russland) - En av de første abstrakte kunstnerne
- Piet Mondrian (Nederland) - Kjent for rutenett i primærfarger
- Mark Rothko (USA) - Store felt av farge

Abstrakt kunst spør: Må kunst forestille noe for å være kunst?`,
    },
    {
      id: 'kunst-7-4-1-text-6',
      type: 'text',
      content: `**Pop-art (ca. 1950-1970)**

Pop-art hentet inspirasjon fra populærkultur og reklame.

**Kjennetegn:**
- Bilder fra reklame, tegneserier, produkter
- Sterke, knalle farger
- Gjentakelse og serigraf
- Ironi og kommentar til forbrukersamfunnet

**Kjente kunstnere:**
- Andy Warhol (USA) - Campbell's suppebokser, Marilyn Monroe
- Roy Lichtenstein (USA) - Tegneseriestil
- Jasper Johns (USA) - Amerikanske flagg

Pop-art visker ut grensen mellom "høy" og "lav" kultur!`,
    },
    {
      id: 'kunst-7-4-1-tip-1',
      type: 'tip',
      title: 'Hvordan se på kunst',
      content: `Når du ser på et kunstverk, spør deg selv:
1. Hva ser jeg? (Beskriv det objektivt)
2. Hvordan føler jeg meg når jeg ser på det?
3. Hva tror jeg kunstneren ville uttrykke?
4. Hvilke teknikker er brukt?
5. Hva slags sammenheng ble det laget i?

Du trenger ikke "forstå" eller "like" all kunst - det viktigste er å være nysgjerrig!`,
    },
    {
      id: 'kunst-7-4-1-example-1',
      type: 'example',
      title: 'Analyse av Munchs Skrik',
      content: `**Hva ser vi?**
En figur på en bro, holder hendene mot hodet og skriker. Bølgende linjer i himmelen og landskapet. To figurer i bakgrunnen.

**Teknikk:**
- Ekspresjonistisk stil
- Sterke, unaturlige farger (rød-oransje himmel)
- Bølgende linjer som gjentar figurens angst
- Forenklet, fordreid figur

**Betydning:**
Munch sa han følte "et uendelig skrik gjennom naturen". Maleriet uttrykker angst og fremmedgjøring - følelser som var vanlige i det moderne samfunnet.

**Kontekst:**
Malt i 1893 da Munch hadde psykiske problemer. Bildet er blitt et symbol på moderne angst.`,
    },
    {
      id: 'kunst-7-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva kjennetegner ekspresjonismen?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Sterke farger og forvrengte former for å uttrykke følelser',
            multipleChoiceOptions: ['Sterke farger og forvrengte former for å uttrykke følelser', 'Geometriske former og flere perspektiver', 'Drømmeaktige, umulige scener', 'Bilder fra reklame og tegneserier'],
          },
        ],
        solution: 'Ekspresjonismen fokuserer på å uttrykke følelser gjennom sterke, ofte unaturlige farger og forvrengte former.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvilken kunstretning er Salvador Dalí mest kjent for?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Surrealisme',
            multipleChoiceOptions: ['Surrealisme', 'Kubisme', 'Pop-art', 'Ekspresjonisme'],
          },
        ],
        solution: 'Salvador Dalí var en av de mest kjente surrealistene, kjent for drømmeaktige malerier som "De myke urene" (smeltende klokker).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er abstrakt kunst?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Kunst som ikke viser gjenkjennelige objekter, men fokuserer på form, farge og linje',
            multipleChoiceOptions: ['Kunst som ikke viser gjenkjennelige objekter, men fokuserer på form, farge og linje', 'Kunst som viser drømmer', 'Kunst med geometriske objekter', 'Kunst fra middelalderen'],
          },
        ],
        solution: 'Abstrakt kunst viser ikke gjenkjennelige objekter, men bruker form, farge og linje for deres egen estetiske verdi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Praktisk oppgave: Lag et kunstverk inspirert av én av kunstretningene du har lært om. Velg ekspresjonisme, kubisme, surrealisme eller pop-art.',
        solution: 'Velg en retning og studer kjennetegnene. Bruk disse teknikkene i ditt eget verk. For ekspresjonisme: vis en følelse med sterke farger. For kubisme: vis et objekt fra flere vinkler. For surrealisme: kombiner uventede elementer. For pop-art: bruk bilder fra populærkultur.',
        hints: ['Velg én kunstretning', 'Studer kjennetegnene', 'La stilen påvirke fargevalg og teknikk'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-4-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-4-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Skriftlig oppgave: Velg et kunstverk av en moderne kunstner og analyser det. Beskriv hva du ser, hvilken stil det er, og hva du tror kunstneren vil uttrykke.',
        solution: 'Beskriv først objektivt hva du ser (former, farger, motiv). Identifiser stilen og teknikkene. Diskuter hva verket kan bety og hva kunstneren kanskje ville uttrykke.',
        hints: ['Bruk spørsmålene fra tips-boksen', 'Beskriv før du tolker', 'Det finnes ikke ett riktig svar på hva kunst betyr'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_KUNST_7_4_2: TextbookChapter = {
  id: 'kunst-7-4-2',
  courseId: 'kunst-7',
  chapterNumber: '4.2',
  title: 'Bærekraftig design',
  description: 'Lær om design som tar hensyn til miljø og fremtid.',
  estimatedMinutes: 45,
  competenceGoals: [
    'designe med hensyn til miljø og bærekraft',
    'forstå sirkulær økonomi og gjenbruk i design',
  ],
  content: [
    {
      id: 'kunst-7-4-2-intro',
      type: 'text',
      content: `Vi lever i en verden med begrensede ressurser, men vi produserer og kaster mer enn noen gang. Designere har en unik mulighet - og et ansvar - til å lage produkter som er gode for både mennesker og planeten. Dette kalles bærekraftig design.`,
    },
    {
      id: 'kunst-7-4-2-def-1',
      type: 'definition',
      title: 'Bærekraftig design',
      content: `Bærekraftig design handler om å lage produkter og løsninger som dekker dagens behov uten å ødelegge for fremtidige generasjoner. Det tar hensyn til miljø, sosiale forhold og økonomi gjennom hele produktets levetid.`,
    },
    {
      id: 'kunst-7-4-2-text-2',
      type: 'text',
      content: `**Lineær vs. sirkulær økonomi**

**Lineær økonomi (den gamle måten):**
Ta råvarer → Lag produkter → Bruk → Kast
- Ressurser brukes opp
- Søppel hoper seg opp
- Ikke bærekraftig

**Sirkulær økonomi (den nye måten):**
Design → Lag → Bruk → Reparer/Gjenbruk → Resirkuler → Design igjen...
- Ressurser går i sirkel
- Minimalt avfall
- Bærekraftig

Som designer kan du bidra til sirkulær økonomi ved å tenke på hele produktets livsløp fra starten!`,
    },
    {
      id: 'kunst-7-4-2-text-3',
      type: 'text',
      content: `**De 5 R-ene for bærekraft**

**1. Refuse (Avvis)**
Trenger vi egentlig dette produktet? Kan problemet løses uten?

**2. Reduce (Reduser)**
Kan vi bruke mindre materiale? Mindre energi?

**3. Reuse (Gjenbruk)**
Kan produktet brukes igjen? Kan delene brukes til noe annet?

**4. Repair (Reparer)**
Kan produktet repareres? Er delene tilgjengelige?

**5. Recycle (Resirkuler)**
Kan materialene resirkuleres til slutt?

Rekkefølgen er viktig - det beste er å ikke lage noe unødvendig i det hele tatt!`,
    },
    {
      id: 'kunst-7-4-2-text-4',
      type: 'text',
      content: `**Materialvalg**

**Bærekraftige materialer:**
- **Tre fra bærekraftig skogbruk** (se etter FSC-merket)
- **Bambus** - vokser veldig raskt
- **Resirkulerte materialer** - plast, metall, tekstil
- **Biologisk nedbrytbare materialer**
- **Lokale materialer** - kort transport

**Materialer å unngå:**
- Plast fra fossil olje (når det finnes alternativer)
- Materialer med giftige stoffer
- Materialer som er vanskelige å resirkulere
- Materialer som innebærer utbytting av arbeidere

Tenk også på emballasje - trengs den? Kan den gjenbrukes?`,
    },
    {
      id: 'kunst-7-4-2-tip-1',
      type: 'tip',
      title: 'Spørsmål å stille når du designer',
      content: `1. Er dette produktet nødvendig?
2. Finnes det en mer bærekraftig løsning?
3. Hva er produktet laget av? Hvor kommer materialet fra?
4. Hvor lang levetid har produktet?
5. Kan det repareres?
6. Hva skjer når produktet er utslitt?
7. Kan materialene resirkuleres?
8. Hvordan påvirker produksjonen mennesker og miljø?`,
    },
    {
      id: 'kunst-7-4-2-text-5',
      type: 'text',
      content: `**Designstrategier for bærekraft**

**Design for holdbarhet**
- Bruk materialer av høy kvalitet
- Lag tidløst design som ikke går ut på dato
- Bygg solid konstruksjon

**Design for reparasjon**
- Gjør det lett å bytte deler
- Bruk standarddeler
- Lag reparasjonsguider

**Design for demontering**
- Produktet kan tas fra hverandre
- Materialer kan sorteres og resirkuleres
- Unngå å lime forskjellige materialer sammen

**Design for emosjonell holdbarhet**
- Lag noe folk blir glad i og vil beholde
- Personlige produkter kastes sjeldnere
- Historie og håndverk gir verdi`,
    },
    {
      id: 'kunst-7-4-2-example-1',
      type: 'example',
      title: 'Patagonia - bærekraftig klesdesign',
      content: `Friluftsmerklet Patagonia er kjent for bærekraftig design:

**Hva de gjør:**
- Bruker resirkulert polyester og organisk bomull
- Lager klær som varer lenge
- Tilbyr gratis reparasjon av klærne sine
- Har bruktmarked for egne produkter
- Sier "ikke kjøp denne jakken" i reklamer!

**Resultat:**
Folk kjøper færre klær, men beholder dem lenger. Materialene går i sirkel. Merkevaren har lojale kunder som stoler på dem.

Dette viser at bærekraft kan være god business!`,
    },
    {
      id: 'kunst-7-4-2-text-6',
      type: 'text',
      content: `**Kreativt gjenbruk i kunst og design**

Mange kunstnere og designere lager fantastiske ting av avfall:

**Ideer:**
- Møbler av paller og kassert tre
- Smykker av elektronikkomponenter
- Skulpturer av plastsøppel fra havet
- Vesker av gamle dekk og bannere
- Lamper av brukte flasker
- Kunst av tekstilavfall

**Hvorfor er dette viktig?**
- Reduserer avfall
- Viser at "søppel" har verdi
- Inspirerer andre til å tenke nytt
- Setter fokus på miljøproblemer`,
    },
    {
      id: 'kunst-7-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen på lineær og sirkulær økonomi?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Lineær: ta-lag-bruk-kast. Sirkulær: materialer går i sirkel og gjenbrukes',
            multipleChoiceOptions: ['Lineær: ta-lag-bruk-kast. Sirkulær: materialer går i sirkel og gjenbrukes', 'De er det samme', 'Lineær er nytt, sirkulær er gammelt', 'Sirkulær handler om sirkler i design'],
          },
        ],
        solution: 'I lineær økonomi går ressurser fra utvinning til søppel. I sirkulær økonomi designes produkter slik at materialer kan gjenbrukes og resirkuleres i en kontinuerlig syklus.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er de 5 R-ene for bærekraft, i riktig rekkefølge?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'Refuse, Reduce, Reuse, Repair, Recycle',
            multipleChoiceOptions: ['Refuse, Reduce, Reuse, Repair, Recycle', 'Recycle, Reduce, Reuse, Repair, Refuse', 'Reuse, Recycle, Reduce, Repair, Refuse', 'Repair, Reduce, Reuse, Refuse, Recycle'],
          },
        ],
        solution: 'De 5 R-ene er Refuse (avvis), Reduce (reduser), Reuse (gjenbruk), Repair (reparer) og Recycle (resirkuler). Rekkefølgen viser hva som er mest bærekraftig - det beste er å ikke lage noe unødvendig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva betyr "design for demontering"?',
        subTasks: [
          {
            label: 'a',
            task: 'Velg riktig svar.',
            solution: 'At produktet kan tas fra hverandre så materialene kan sorteres og resirkuleres',
            multipleChoiceOptions: ['At produktet kan tas fra hverandre så materialene kan sorteres og resirkuleres', 'At produktet ødelegges lett', 'At produktet ser ut som det er demontert', 'At produktet er laget av deler'],
          },
        ],
        solution: 'Design for demontering betyr at produktet er laget slik at det enkelt kan tas fra hverandre når det er utslitt, slik at de ulike materialene kan sorteres og resirkuleres.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Praktisk oppgave: Design et bærekraftig produkt. Tegn designet og beskriv materialvalg, levetid og hva som skjer når produktet er utslitt.',
        solution: 'Velg et produkt (f.eks. veske, lampe, oppbevaring). Tegn designet. Beskriv hvilke materialer som brukes og hvorfor, hvor lenge det skal vare, hvordan det kan repareres, og hva som skjer med materialene til slutt.',
        hints: ['Tenk gjennom alle de 5 R-ene', 'Velg materialer som kan resirkuleres', 'Design slik at det kan repareres', 'Lag noe folk vil beholde lenge'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'kunst-7-4-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'kunst-7-4-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Praktisk oppgave: Lag et kunstverk eller bruksgjenstand av materialer som ellers ville blitt kastet.',
        solution: 'Samle materialer som aviser, kartonger, flaskelokk, stoffrester etc. Tenk på hva materialene kan bli. Lag noe nyttig eller dekorativt. Dokumenter hva du lagde og hvilke materialer du brukte.',
        hints: ['Se på materialene med nye øyne - hva kan de bli?', 'Både funksjonelle gjenstander og kunst teller', 'Ta bilde før og etter', 'Tenk på holdbarhet - skal det vare?'],
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const KUNST_7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_KUNST_7_1_1,
  CHAPTER_KUNST_7_1_2,
  CHAPTER_KUNST_7_2_1,
  CHAPTER_KUNST_7_2_2,
  CHAPTER_KUNST_7_3_1,
  CHAPTER_KUNST_7_3_2,
  CHAPTER_KUNST_7_4_1,
  CHAPTER_KUNST_7_4_2,
];
