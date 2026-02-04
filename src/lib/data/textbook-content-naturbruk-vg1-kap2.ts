/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck

/**
 * Tekstbok innhold for Naturbruk VG1 - Kapittel 2: Skogbruk og trevirke
 *
 * Dekker LK20-kompetansemål for naturbruk VG1 (NAB01-03)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Skogens økosystem og funksjoner
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_2_1: TextbookChapter = {
  id: 'naturbruk-vg1-2-1',
  courseId: 'naturbruk-vg1',
  chapterNumber: '2.1',
  title: 'Skogens økosystem og funksjoner',
  description: 'Skogen som økosystem, næringskjeder, artsmangfold og skogens viktige funksjoner for natur og samfunn.',
  estimatedMinutes: 60,
  competenceGoals: [
    'beskrive skogen som økosystem og forklare samspillet mellom arter',
    'gjøre rede for skogens ulike funksjoner og økosystemtjenester',
    'forklare betydningen av biologisk mangfold i skogen',
    'drøfte bærekraftig bruk av skogressurser',
  ],
  content: [
    {
      id: 'nb-2-1-intro',
      type: 'text',
      content: `# Skogens økosystem og funksjoner

Skogen er et av Norges viktigste økosystemer og dekker omtrent 38 % av landarealet. Den er hjem til et stort mangfold av arter og utfører viktige funksjoner for både natur og samfunn.

## Skogen som økosystem

Et økosystem består av alle levende organismer i et område og det fysiske miljøet de lever i. I skogen finner vi et komplekst samspill mellom:

- **Produsenter**: Trær, busker, moser og andre grønne planter som driver fotosyntese
- **Konsumenter**: Dyr som spiser planter (herbivorer) eller andre dyr (karnivorer)
- **Nedbrytere**: Sopp og bakterier som bryter ned dødt organisk materiale

Dette samspillet danner grunnlaget for energiflyt og næringssirkulasjon i skogen.`,
    },
    {
      id: 'nb-2-1-def-okosystem',
      type: 'definition',
      title: 'Økosystem',
      content: 'Et økosystem er et avgrenset naturområde der levende organismer (planter, dyr, sopp, mikroorganismer) samspiller med hverandre og med det ikke-levende miljøet (jord, vann, luft, lys). I et økosystem sirkulerer næringsstoffer, mens energi strømmer fra solen gjennom næringskjedene.',
    },
    {
      id: 'nb-2-1-def-naringskjede',
      type: 'definition',
      title: 'Næringskjede',
      content: 'En næringskjede viser hvordan energi og næring overføres fra én organisme til en annen i et økosystem. Den starter alltid med en produsent (plante) og fortsetter til ulike nivåer av konsumenter. Eksempel fra skogen: Gran (produsent) -> Barkbille (primærkonsument) -> Hakkespett (sekundærkonsument) -> Hønsehauk (tertiærkonsument).',
    },
    {
      id: 'nb-2-1-def-biodiversitet',
      type: 'definition',
      title: 'Biologisk mangfold (biodiversitet)',
      content: 'Biologisk mangfold omfatter variasjonen av liv på tre nivåer: genetisk variasjon innen arter, variasjon mellom arter i et område, og variasjon mellom ulike økosystemer. Høyt biologisk mangfold gjør økosystemer mer robuste og motstandsdyktige mot forstyrrelser.',
    },
    {
      id: 'nb-2-1-skogtyper',
      type: 'text',
      content: `## Norske skogtyper

Norge har hovedsakelig tre skogtyper:

### Barskog
- Dominert av gran og furu
- Finnes i innlandet og i høyereliggende strøk
- Størst utbredelse i Sør- og Midt-Norge
- Granskog på næringsrik jord, furuskog på skrinn jord

### Løvskog
- Dominert av bjørk, osp, or og andre løvtrær
- Finnes langs kysten og i fjellbjørkeskogen
- Viktig for mange insekter og fugler

### Blandingsskog
- Kombinasjon av bar- og løvtrær
- Ofte høyest biologisk mangfold
- Vanlig i overgangssoner`,
    },
    {
      id: 'nb-2-1-def-okosystemtjenester',
      type: 'definition',
      title: 'Økosystemtjenester',
      content: 'Økosystemtjenester er goder og tjenester som naturen gir oss mennesker. Skogen leverer mange slike tjenester: tømmer og ved (forsynende), karbonlagring og vannrensing (regulerende), friluftsliv og rekreasjon (kulturelle), og jorddannelse og næringssirkulasjon (støttende).',
    },
    {
      id: 'nb-2-1-funksjoner',
      type: 'text',
      content: `## Skogens viktige funksjoner

### Karbonlagring
- Trær tar opp CO2 gjennom fotosyntese
- Karbon lagres i biomasse og jord
- Viktig for å dempe klimaendringer
- Norsk skog binder årlig ca. 25-30 millioner tonn CO2

### Vannregulering
- Skogen holder på vann og demper flom
- Trærøtter stabiliserer jord og hindrer erosjon
- Skogsjord fungerer som naturlig vannfilter
- Viktig for grunnvannsmagasiner

### Biologisk mangfold
- Levested for tusenvis av arter
- Gamle trær og død ved er spesielt viktige
- Mange truede arter er avhengige av skog
- Rødlista viser at mange skogarter er truet`,
    },
    {
      id: 'nb-2-1-def-rodliste',
      type: 'definition',
      title: 'Rødlista',
      content: 'Rødlista er en oversikt over arter som er vurdert å ha en viss risiko for å dø ut fra Norge. Artene kategoriseres fra "livskraftig" til "kritisk truet" basert på vitenskapelige kriterier. Mange arter på rødlista er knyttet til gammel skog og død ved.',
    },
    {
      id: 'nb-2-1-example-1',
      type: 'example',
      title: 'Eksempel: Næringsnett i barskogen',
      problem: 'Beskriv et forenklet næringsnett i en norsk barskog med minst tre næringskjeder som deler minst én organisme.',
      solution: `**Løsning:**

Et næringsnett i barskogen kan se slik ut:

**Næringskjede 1:** Gran -> Granbarkbille -> Tretåspett -> Hønsehauk

**Næringskjede 2:** Gran (frø) -> Ekorn -> Mår -> (toppredator i systemet)

**Næringskjede 3:** Blåbær -> Orrfugl -> Hønsehauk

**Felles organismer:**
- Hønsehauk er toppredator i flere kjeder
- Gran er produsent som gir næring til både barkbiller og frøspisere
- Blåbær og andre bunnvegetasjon spises av flere arter

Dette viser hvordan artene i skogen er koblet sammen i et komplekst nett av relasjoner.`,
    },
    {
      id: 'nb-2-1-example-2',
      type: 'example',
      title: 'Eksempel: Skogens økosystemtjenester',
      problem: 'En kommune vurderer å hogge et skogsområde for å bygge boliger. Hvilke økosystemtjenester kan gå tapt, og hvordan kan dette påvirke lokalsamfunnet?',
      solution: `**Løsning:**

**Forsynende tjenester som går tapt:**
- Fremtidig tømmerproduksjon
- Bær- og soppsanking
- Jaktmuligheter

**Regulerende tjenester som går tapt:**
- Karbonlagring (frigjøring av lagret CO2)
- Vannregulering og flomdemping
- Luftrensing og støydemping
- Temperaturregulering (kjøling om sommeren)

**Kulturelle tjenester som går tapt:**
- Turområde og rekreasjonsverdi
- Estetisk verdi og naturopplevelser
- Pedagogisk verdi for skoler

**Mulige konsekvenser for lokalsamfunnet:**
- Økt flomrisiko ved kraftig nedbør
- Redusert luftkvalitet
- Tap av friluftsområde
- Lavere livskvalitet for beboere
- Mulig redusert eiendomsverdi for nærliggende boliger`,
    },
    {
      id: 'nb-2-1-tip',
      type: 'tip',
      title: 'Tips: Utforsk din lokale skog',
      content: 'Gå en tur i skogen nær deg og observer de ulike lagene: bunnskikt (moser, lav), feltskikt (urter, gress, bærlyngplanter), buskskikt og treskikt. Legg merke til hvilke treslag som dominerer, og se etter spor av dyr. Prøv å identifisere minst tre arter fra hvert lag. Ta gjerne bilder og lag din egen artsliste!',
    },
  ],
  exercises: [
    {
      id: 'nb-2-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er den viktigste funksjonen til nedbrytere i skogøkosystemet?',
      options: [
        { id: 'a', text: 'De bryter ned dødt organisk materiale og frigjør næringsstoffer', isCorrect: true },
        { id: 'b', text: 'De produserer oksygen gjennom fotosyntese', isCorrect: false },
        { id: 'c', text: 'De jakter på andre dyr', isCorrect: false },
        { id: 'd', text: 'De bestøver blomster', isCorrect: false },
      ],
      solution: 'Nedbrytere som sopp og bakterier er essensielle fordi de bryter ned dødt organisk materiale (blader, døde trær, dyrerester) og frigjør næringsstoffer som planter kan ta opp igjen. Dette holder næringssirkulasjonen i gang.',
    },
    {
      id: 'nb-2-1-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva som menes med økosystemtjenester, og gi to eksempler på regulerende tjenester som skogen gir oss.',
      solution: 'Økosystemtjenester er goder og tjenester som naturen gir mennesker. Regulerende tjenester fra skogen inkluderer: 1) Karbonlagring - trær binder CO2 og lagrer karbon, noe som demper klimaendringer. 2) Vannregulering - skogen holder på vann, demper flom og filtrerer vann. Andre eksempler er erosjonskontroll, luftrensing og temperaturregulering.',
    },
    {
      id: 'nb-2-1-ex3',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken skogtype dominerer i det norske innlandet?',
      options: [
        { id: 'a', text: 'Barskog med gran og furu', isCorrect: true },
        { id: 'b', text: 'Løvskog med eik og bøk', isCorrect: false },
        { id: 'c', text: 'Regnskog', isCorrect: false },
        { id: 'd', text: 'Mangroveskog', isCorrect: false },
      ],
      solution: 'Barskog med gran og furu dominerer i det norske innlandet. Gran trives best på næringsrik jord, mens furu tåler mer næringsfattig og tørr jord. Løvskog finnes hovedsakelig langs kysten og i fjellet (bjørk).',
    },
    {
      id: 'nb-2-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hvorfor er biologisk mangfold viktig for et økosystems stabilitet? Bruk skogen som eksempel.',
      solution: 'Høyt biologisk mangfold gjør økosystemer mer robuste fordi: 1) Flere arter kan fylle samme økologiske rolle - hvis én art forsvinner, kan andre ta over funksjonen. 2) Komplekse næringsnett er mer stabile enn enkle næringskjeder. 3) Genetisk variasjon gjør arter bedre rustet mot sykdommer og klimaendringer. I skogen betyr dette at en skog med mange treslag tåler skadedyr og sykdom bedre enn monokultur.',
    },
    {
      id: 'nb-2-1-ex5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor mye CO2 binder norsk skog årlig (omtrentlig)?',
      options: [
        { id: 'a', text: '25-30 millioner tonn', isCorrect: true },
        { id: 'b', text: '1-2 millioner tonn', isCorrect: false },
        { id: 'c', text: '100-150 millioner tonn', isCorrect: false },
        { id: 'd', text: '5-10 millioner tonn', isCorrect: false },
      ],
      solution: 'Norsk skog binder årlig ca. 25-30 millioner tonn CO2. Dette tilsvarer omtrent halvparten av Norges totale utslipp av klimagasser. Skogen er derfor svært viktig i klimasammenheng.',
    },
    {
      id: 'nb-2-1-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Diskuter hvordan hogst av gammel skog kan påvirke det biologiske mangfoldet. Nevn minst tre konkrete konsekvenser.',
      solution: 'Hogst av gammel skog påvirker biologisk mangfold på flere måter: 1) Tap av levesteder for arter som er avhengige av gammel skog, som hakkespetter som trenger store trær til reirbygging og mange lavarter som kun vokser på gamle trær. 2) Fjerning av død ved (læger og gadd) fjerner levesteder for ca. 8000 arter i Norge, inkludert mange truede sopp og insekter. 3) Endring i mikroklima - gammel skog har stabilt, fuktig klima som mange arter er avhengige av. 4) Fragmentering av leveområder gjør det vanskelig for arter å spre seg. 5) Tap av kontinuitet - mange arter bruker lang tid på å etablere seg og kan ikke raskt rekolonisere ny skog.',
    },
  ],
};

// ============================================================================
// Kapittel 2.2: Skogens livssyklus og bestandspleie
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_2_2: TextbookChapter = {
  id: 'naturbruk-vg1-2-2',
  courseId: 'naturbruk-vg1',
  chapterNumber: '2.2',
  title: 'Skogens livssyklus og bestandspleie',
  description: 'Skogens naturlige suksesjon, skogbestand og bestandsutvikling, ungskogpleie og tynning.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for skogens naturlige suksesjon og utviklingsfaser',
    'forklare hva et skogbestand er og beskrive bestandets utvikling',
    'beskrive tiltak for ungskogpleie og tynning',
    'vurdere når og hvorfor skjøtselstiltak bør gjennomføres',
  ],
  content: [
    {
      id: 'nb-2-2-intro',
      type: 'text',
      content: `# Skogens livssyklus og bestandspleie

Skogen er i stadig utvikling. Enten den får vokse naturlig eller blir forvaltet av mennesker, går den gjennom ulike faser. Å forstå disse fasene er grunnleggende for god skogskjøtsel.

## Naturlig suksesjon

Suksesjon er den gradvise endringen i artssammensetning over tid. Etter en forstyrrelse (brann, hogst, storm) starter skogen på nytt:

1. **Pionerfase**: Lyskrevende arter som bjørk, osp og vier etablerer seg
2. **Yngre suksesjonsfase**: Gran og furu vokser opp i ly av pionertrærne
3. **Moden fase**: Bartrær dominerer, pionertrær dør ut
4. **Gammelskogfase**: Stabil skog med gamle trær og mye død ved`,
    },
    {
      id: 'nb-2-2-def-suksesjon',
      type: 'definition',
      title: 'Suksesjon',
      content: 'Suksesjon er den naturlige prosessen der artssammensetningen i et område endrer seg over tid. I skogen går dette fra pionerarter (ofte løvtrær) til klimakssamfunn (ofte barskog i Norge). Primær suksesjon starter på bart underlag, sekundær suksesjon starter etter en forstyrrelse der jord og frøbank allerede finnes.',
    },
    {
      id: 'nb-2-2-def-bestand',
      type: 'definition',
      title: 'Skogbestand',
      content: 'Et skogbestand er et avgrenset skogsområde som er relativt ensartet med hensyn til treslag, alder, tetthet og vekstforhold. Bestandet er grunnenheten i praktisk skogforvaltning og brukes for planlegging av skjøtsel og hogst. Et bestand kan variere fra noen dekar til flere hundre dekar.',
    },
    {
      id: 'nb-2-2-def-bonitet',
      type: 'definition',
      title: 'Bonitet',
      content: 'Bonitet er et mål på skogsmarkens produksjonsevne, altså hvor raskt trærne kan vokse på et gitt areal. Bonitet angis som forventet høyde (i meter) på de beste trærne ved 40 års alder (for gran og furu). Høy bonitet (f.eks. G20) betyr god vekst, lav bonitet (f.eks. G8) betyr dårlig vekst.',
    },
    {
      id: 'nb-2-2-bestandsutvikling',
      type: 'text',
      content: `## Bestandets utviklingsfaser

Et skogbestand går gjennom følgende faser fra etablering til hogstmodenhet:

### 1. Foryngelse (0-10 år)
- Nye trær etableres etter hogst eller naturlig foryngelse
- Høy konkurranse fra gress, urter og kratt
- Sårbar fase som krever oppfølging

### 2. Ungskog (10-30 år)
- Trærne begynner å konkurrere med hverandre
- Naturlig avgang starter (selvtynning)
- Tid for ungskogpleie

### 3. Yngre produksjonsskog (30-60 år)
- Rask volumtilvekst
- Tid for tynning
- Kronelukning - lite lys når bakken

### 4. Eldre produksjonsskog (60-100 år)
- Fortsatt god tilvekst
- Kvalitetsutvikling i de beste trærne
- Eventuelt flere tynninger

### 5. Hogstmoden skog (80-120+ år)
- Tilveksten avtar
- Trærne har nådd ønsket dimensjon
- Tid for sluttavvirkning og ny foryngelse`,
    },
    {
      id: 'nb-2-2-ungskogpleie',
      type: 'text',
      content: `## Ungskogpleie

Ungskogpleie er skjøtselstiltak som gjøres i ung skog for å sikre god kvalitet og riktig tetthet i det fremtidige bestandet.

### Hensikt
- Regulere tetthet og treantall
- Fjerne uønskede treslag
- Favorisere de beste individene
- Gi plass til fremtidstrærne

### Tidspunkt
- Vanligvis når trærne er 2-5 meter høye
- Før kronekonkurransen blir for sterk
- Typisk 10-20 år etter foryngelse

### Metoder
- **Avstandsregulering**: Fjerne trær for å gi jevn avstand
- **Stammeutvalg**: Beholde de beste, fjerne feil og skader
- **Lauvrydding**: Fjerne løvtrær som hemmer bartrærne`,
    },
    {
      id: 'nb-2-2-def-tynning',
      type: 'definition',
      title: 'Tynning',
      content: 'Tynning er hogst av en del av trærne i et bestand for å gi de gjenstående trærne bedre vekstvilkår. Ved tynning fjernes svake, skadde eller dårlig plasserte trær, slik at de beste trærne får mer lys, vann og næring. Tynningsvirke kan selges, i motsetning til virke fra ungskogpleie.',
    },
    {
      id: 'nb-2-2-tynning',
      type: 'text',
      content: `## Tynning

Tynning gjøres i produksjonsskog for å øke verdien av sluttavvirkningen.

### Typer tynning

**Lavtynning (tynning fra undersiden)**
- Fjerner undertrykte og svake trær
- Etterligner naturlig selvtynning
- Tradisjonell metode

**Høytynning (tynning fra oversiden)**
- Fjerner noen av de største trærne
- Gir bedre plass til mellomstore trær
- Brukes sjeldnere

**Fristilling**
- Kombinasjon av lav- og høytynning
- Fokus på å frigi de beste fremtidstrærne

### Tynningsstyrke
- **Svak tynning**: 15-25 % av volumet
- **Moderat tynning**: 25-35 % av volumet
- **Sterk tynning**: Over 35 % av volumet

### Antall tynninger
- God bonitet: 2-3 tynninger
- Middels bonitet: 1-2 tynninger
- Lav bonitet: 0-1 tynning`,
    },
    {
      id: 'nb-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Planlegging av ungskogpleie',
      problem: 'Du skal vurdere behovet for ungskogpleie i et 15 år gammelt granbestand. Treantallet er ca. 3500 trær per dekar, og trærne er 3-4 meter høye. Hva ville du anbefale?',
      solution: `**Løsning:**

**Vurdering av situasjonen:**
- 3500 trær/dekar er svært tett
- Optimal tetthet etter ungskogpleie er ca. 200-250 trær/dekar for gran
- Trærne er i riktig høyde for ungskogpleie (3-4 m)
- Det haster med tiltak for å unngå at trærne blir for tynne og svake

**Anbefaling:**
1. **Gjennomfør ungskogpleie snarest**
2. **Mål**: Reduser til ca. 200-250 trær/dekar
3. **Utvelgelse**: Behold de beste trærne med god stammeform, rett vekst og frisk krone
4. **Avstand**: Ca. 2-2,5 meter mellom gjenstående trær
5. **Fjernes**: Skadde trær, gankvist, dobbelttopper, trær med dårlig stammeform

**Resultat:**
- De gjenstående trærne får bedre plass
- Økt diameter-tilvekst
- Bedre stabilitet mot vind og snø
- Høyere kvalitet og verdi ved sluttavvirkning`,
    },
    {
      id: 'nb-2-2-tip',
      type: 'tip',
      title: 'Tips: Kjenn igjen bestandsfasene',
      content: 'Når du er ute i skogen, prøv å vurdere hvilken utviklingsfase bestandet er i. Se på trærnes høyde, tykkelse og kroneform. Er kronene lange og trærne tynne? Da trengs trolig tynning. Er det mange døde trær i underskogen? Det er tegn på naturlig selvtynning. Øv deg på å se skogen med "skogbrukerens blikk".',
    },
  ],
  exercises: [
    {
      id: 'nb-2-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er riktig rekkefølge i naturlig suksesjon etter hogst i Norge?',
      options: [
        { id: 'a', text: 'Pionertrær (løv) -> Bartrær vokser opp -> Barskog dominerer', isCorrect: true },
        { id: 'b', text: 'Bartrær først -> Løvtrær tar over -> Blandingsskog', isCorrect: false },
        { id: 'c', text: 'Gress og urter -> Busker -> Ingen trær', isCorrect: false },
        { id: 'd', text: 'Gammel skog -> Ung skog -> Pionerskog', isCorrect: false },
      ],
      solution: 'Etter hogst etablerer lyskrevende pionertrær som bjørk og osp seg først. I ly av disse vokser skyggetålende bartrær som gran opp. Etter hvert dør pionertrærne, og barskogen dominerer.',
    },
    {
      id: 'nb-2-2-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva bonitet er, og hvorfor det er viktig for skogforvaltning.',
      solution: 'Bonitet er et mål på skogsmarkens produksjonsevne, uttrykt som forventet høyde på de beste trærne ved 40 års alder. For eksempel betyr G17 at trærne forventes å være 17 meter høye ved 40 år. Bonitet er viktig fordi den bestemmer: 1) Hvor mye tømmer som kan produseres, 2) Omløpstid (tid fra planting til hogst), 3) Hvor mange tynninger som er lønnsomme, 4) Hvilke treslag som egner seg best. Høy bonitet gir mer tømmer på kortere tid.',
    },
    {
      id: 'nb-2-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Når bør ungskogpleie vanligvis gjennomføres?',
      options: [
        { id: 'a', text: 'Når trærne er 2-5 meter høye', isCorrect: true },
        { id: 'b', text: 'Når trærne er under 1 meter høye', isCorrect: false },
        { id: 'c', text: 'Når trærne er over 10 meter høye', isCorrect: false },
        { id: 'd', text: 'Rett etter planting', isCorrect: false },
      ],
      solution: 'Ungskogpleie gjøres vanligvis når trærne er 2-5 meter høye, typisk 10-20 år etter foryngelse. På dette tidspunktet er det mulig å se hvilke trær som har best kvalitet, og det er før konkurransen har skadet trærne for mye.',
    },
    {
      id: 'nb-2-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er forskjellen mellom ungskogpleie og tynning?',
      solution: 'Ungskogpleie gjøres i ung skog (trær 2-5 m) og virket har ingen salgsverdi - det er en investering i fremtidig kvalitet. Formålet er å regulere tetthet og fjerne uønskede trær. Tynning gjøres i eldre produksjonsskog der trærne har fått salgbar dimensjon. Tynningsvirket kan selges og gi inntekt. Begge tiltak handler om å gi de beste trærne bedre vekstvilkår, men tynning er økonomisk lønnsom mens ungskogpleie er en kostnad.',
    },
    {
      id: 'nb-2-2-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er et skogbestand?',
      options: [
        { id: 'a', text: 'Et avgrenset skogsområde med ensartet treslag, alder og tetthet', isCorrect: true },
        { id: 'b', text: 'Et enkelt tre', isCorrect: false },
        { id: 'c', text: 'En gruppe dyr som lever i skogen', isCorrect: false },
        { id: 'd', text: 'Et verktøy for å måle trær', isCorrect: false },
      ],
      solution: 'Et skogbestand er et avgrenset skogsområde som er relativt ensartet med hensyn til treslag, alder, tetthet og vekstforhold. Det er grunnenheten i praktisk skogforvaltning.',
    },
    {
      id: 'nb-2-2-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Du har et granbestand på god bonitet (G17). Lag en skisse over bestandets utvikling fra planting til sluttavvirkning, med angivelse av tidspunkt for skjøtselstiltak.',
      solution: 'Skisse for granbestand på G17:\n\n**År 0**: Planting med ca. 2000-2500 planter per dekar\n**År 5-10**: Eventuell suppleringsplanting hvis mange planter har gått ut\n**År 15-20**: Ungskogpleie - reduser til ca. 200-250 trær/dekar\n**År 35-40**: Første tynning - ta ut 25-30% av volumet\n**År 50-55**: Andre tynning - ta ut 25% av volumet (valgfri)\n**År 70-80**: Sluttavvirkning\n\nTotal omløpstid: 70-80 år på G17. På lavere bonitet ville omløpstiden være lengre (100+ år på G11), og færre tynninger ville være lønnsomt.',
    },
  ],
};

// ============================================================================
// Kapittel 2.3: Hogst og hogstmetoder
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_2_3: TextbookChapter = {
  id: 'naturbruk-vg1-2-3',
  courseId: 'naturbruk-vg1',
  chapterNumber: '2.3',
  title: 'Hogst og hogstmetoder',
  description: 'Ulike hogstformer, flatehogst, lukket hogst, fleraldret skog og miljøhensyn ved hogst.',
  estimatedMinutes: 60,
  competenceGoals: [
    'beskrive og sammenligne ulike hogstformer',
    'vurdere fordeler og ulemper ved forskjellige hogstmetoder',
    'forklare hvordan hogst påvirker skogøkosystemet',
    'gjøre rede for miljøhensyn og kantsoner ved hogst',
  ],
  content: [
    {
      id: 'nb-2-3-intro',
      type: 'text',
      content: `# Hogst og hogstmetoder

Hogst er den prosessen der trær felles og tømmeret tas ut av skogen. Valg av hogstmetode påvirker både økonomi, foryngelse og miljø. I dag er det vanlig å skille mellom åpen hogst (flatehogst) og lukket hogst (selektiv hogst).

## Hvorfor hogge?

Hogst tjener flere formål:
- **Økonomisk**: Salg av tømmer og massevirke
- **Skjøtsel**: Fornye skogen og starte ny vekstfase
- **Miljø**: Kan brukes til å skape variasjon og bevare arter
- **Samfunn**: Råstoff til byggematerialer og bioenergi`,
    },
    {
      id: 'nb-2-3-def-flatehogst',
      type: 'definition',
      title: 'Flatehogst',
      content: 'Flatehogst (også kalt snauhogst eller kalavvirkning) er en hogstform der alle eller nesten alle trær på et avgrenset område fjernes i én operasjon. Etter flatehogst forynges området ved planting eller naturlig foryngelse. Dette er den vanligste hogstformen i norsk skogbruk.',
    },
    {
      id: 'nb-2-3-def-lukket-hogst',
      type: 'definition',
      title: 'Lukket hogst',
      content: 'Lukket hogst (selektiv hogst, plukkhogst) er hogstformer der bare en del av trærne fjernes, slik at et permanent skogdekke opprettholdes. Foryngelsen skjer kontinuerlig under det gjenstående trekronetaket. Eksempler er plukkhogst, skjermstillingshogst og gruppehogst.',
    },
    {
      id: 'nb-2-3-flatehogst',
      type: 'text',
      content: `## Flatehogst

Flatehogst er den dominerende hogstformen i Norge og brukes på ca. 95 % av hogstarealet.

### Fordeler
- Effektiv og rasjonell - lave driftskostnader
- Gir god kontroll over foryngelsen
- Passer for gran som er lyskrevende i etableringsfasen
- Enkelt å planlegge og gjennomføre

### Ulemper
- Dramatisk inngrep i landskapet
- Tap av biologisk mangfold midlertidig
- Erosjonsrisiko på bratte arealer
- Kan gi økt avrenning og næringsstap
- Negativ opplevelse for friluftsliv

### Krav og reguleringer
- Maksimalt 200 dekar sammenhengende flatehogst
- Kantsoner mot vann og myr skal bevares
- Livsløpstrær og død ved skal settes igjen
- Minsteareal for foryngelse er regulert i forskrift`,
    },
    {
      id: 'nb-2-3-def-kantsone',
      type: 'definition',
      title: 'Kantsone',
      content: 'En kantsone er et belte med trær og vegetasjon som bevares langs vassdrag, myrer, jordbruksmark eller andre naturtyper ved hogst. Kantsoner beskytter vannkvalitet, gir skygge til bekker, fungerer som korridorer for dyreliv og bevarer estetiske verdier. Bredden varierer fra 5-30 meter avhengig av terreng og naturtype.',
    },
    {
      id: 'nb-2-3-lukket-hogst',
      type: 'text',
      content: `## Lukket hogst

Lukket hogst omfatter flere metoder der skogdekket opprettholdes.

### Plukkhogst
- Enkelttrær eller små grupper hogges
- Foryngelse skjer kontinuerlig i små lysglugger
- Gir flersjiktet, uensaldret skog
- Krever mer planlegging og oppfølging

### Skjermstillingshogst
- En del av trærne fjernes for å gi lys til foryngelse
- Skjermtrærne beskytter mot frost og uttørking
- Etter foryngelse er etablert, fjernes skjermen
- Brukes særlig på frostlendte arealer

### Gruppehogst (småflatehogst)
- Små flater (0,5-2 dekar) hogges
- Mellomløsning mellom flatehogst og plukkhogst
- Gir variasjon i aldersfordeling`,
    },
    {
      id: 'nb-2-3-def-livsloptre',
      type: 'definition',
      title: 'Livsløpstrær',
      content: 'Livsløpstrær er trær som bevisst settes igjen ved hogst og får stå til de dør og brytes ned naturlig. De skal sikre kontinuitet i tilgangen på store, gamle trær og død ved i landskapet. Livsløpstrær velges blant grove, gamle trær, gjerne med spesiell form, hullheter eller andre biologiske kvaliteter.',
    },
    {
      id: 'nb-2-3-miljohensyn',
      type: 'text',
      content: `## Miljøhensyn ved hogst

Moderne skogbruk tar mange miljøhensyn for å redusere negative konsekvenser av hogst.

### Tiltak for biologisk mangfold
- **Kantsoner**: Bevare skog langs vann og våtmark
- **Livsløpstrær**: La gamle trær stå
- **Død ved**: Sette igjen høgstubber og læger
- **Nøkkelbiotoper**: Unngå hogst i særlig verdifulle områder
- **Hekketid**: Unngå hogst i hekke- og yngletid

### Tiltak mot erosjon og avrenning
- Unngå hogst i bratt terreng
- Planlegge kjørespor for å unngå markskader
- Legge kvist i kjørespor
- Ikke kjøre i våte perioder

### Landskapshensyn
- Tilpasse hogstflater til terrengformer
- Bevare skogsbryn og utsiktspunkter
- Varierende arrondering av flatene
- Hogstfrie belter langs veier og stier`,
    },
    {
      id: 'nb-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Valg av hogstform',
      problem: 'Du skal planlegge hogst i et granbestand på 50 dekar som ligger langs en populær tursti og grenser til en bekk. Hvilke hensyn må du ta, og hvilken hogstform ville du anbefale?',
      solution: `**Løsning:**

**Hensyn som må tas:**
1. **Bekken**: Må bevare kantsone på minst 10-15 meter
2. **Turstien**: Bør ta landskapshensyn og unngå snauhogst helt inntil stien
3. **Friluftsinteresser**: Mange brukere - estetikk er viktig
4. **Effektivitet**: Må fortsatt være økonomisk forsvarlig

**Anbefaling:**
Jeg ville anbefalt en kombinasjon:

1. **Kantsone mot bekk**: 15 meter bred sone som ikke hogges
2. **Langs turstien**: Belte på 20-30 meter med gruppehogst eller skjermstillingshogst
3. **Resten av arealet**: Flatehogst, men med myke overganger mot kantsonen
4. **Livsløpstrær**: Sett igjen 5-10 grove trær spredt utover flata
5. **Høgstubber**: Lag 5-10 høgstubber per dekar for insekter og fugler

**Resultat:**
- Bekken beskyttes
- Turstien får fortsatt skogpreg
- Effektiv drift på hoveddelen av arealet
- Biologiske verdier ivaretas`,
    },
    {
      id: 'nb-2-3-example-2',
      type: 'example',
      title: 'Eksempel: Fleraldret skog',
      problem: 'Forklar hvordan plukkhogst over tid skaper en flersjiktet, uensaldret skog.',
      solution: `**Løsning:**

**Utgangspunkt:**
Ved plukkhogst fjernes enkelttrær eller små grupper spredt i bestandet.

**Prosessen:**
1. **Hogst skaper lysåpninger**: Når et stort tre fjernes, kommer lys ned til skogbunnen
2. **Foryngelse i glugger**: Frø spirer og småplanter etableres i de nye lysåpningene
3. **Gjentatte hogster**: Nye lysglugger skapes ved neste hogstinngrep
4. **Kontinuerlig prosess**: Over tid oppstår trær i alle aldersklasser

**Resultatet - flersjiktet skog:**
- **Øvre sjikt**: Store, gamle trær (100+ år)
- **Mellomsjikt**: Mellomstore trær (50-100 år)
- **Nedre sjikt**: Unge trær og foryngelse (0-50 år)

**Fordeler med flersjiktet skog:**
- Kontinuerlig skogdekke
- Jevnere inntekter over tid
- Høyere biologisk mangfold
- Bedre estetikk og friluftsverdi
- Mer stabil mot storm

**Utfordringer:**
- Krever mer kunnskap og oppfølging
- Lavere volumproduksjon
- Mer komplisert drift`,
    },
    {
      id: 'nb-2-3-tip',
      type: 'tip',
      title: 'Tips: Observer hogstflater i nærheten',
      content: 'Besøk en nylig hogstflate i ditt nærområde. Observer: Hvor bred er kantsonen mot eventuelle bekker? Er det satt igjen livsløpstrær? Finner du høgstubber? Hvordan ser kjøresporene ut? Prøv å vurdere om hogsten er gjort i tråd med god miljøstandard. Dokumenter med bilder og noter dine observasjoner.',
    },
  ],
  exercises: [
    {
      id: 'nb-2-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken hogstform er mest brukt i Norge?',
      options: [
        { id: 'a', text: 'Flatehogst', isCorrect: true },
        { id: 'b', text: 'Plukkhogst', isCorrect: false },
        { id: 'c', text: 'Skjermstillingshogst', isCorrect: false },
        { id: 'd', text: 'Gruppehogst', isCorrect: false },
      ],
      solution: 'Flatehogst brukes på ca. 95 % av hogstarealet i Norge. Metoden er effektiv og rasjonell, og passer godt for gran som er den viktigste trearten i norsk skogbruk.',
    },
    {
      id: 'nb-2-3-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Nevn tre miljøtiltak som gjøres ved moderne flatehogst for å ivareta biologisk mangfold.',
      solution: 'Tre viktige miljøtiltak ved flatehogst: 1) Kantsoner - bevare skog langs bekker, vann og våtmark for å beskytte vannkvalitet og gi korridorer for dyreliv. 2) Livsløpstrær - sette igjen grove, gamle trær som får stå til de dør naturlig, for å sikre kontinuitet i tilgang på store trær. 3) Død ved - lage høgstubber og legge igjen læger (liggende døde stammer) som er levested for tusenvis av arter. Andre tiltak inkluderer å unngå nøkkelbiotoper og ta hensyn til hekketid.',
    },
    {
      id: 'nb-2-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva er hovedforskjellen mellom flatehogst og lukket hogst?',
      options: [
        { id: 'a', text: 'Ved lukket hogst opprettholdes et permanent skogdekke', isCorrect: true },
        { id: 'b', text: 'Flatehogst brukes bare på løvskog', isCorrect: false },
        { id: 'c', text: 'Lukket hogst gir mer tømmer per areal', isCorrect: false },
        { id: 'd', text: 'Ved flatehogst plantes det ikke nye trær', isCorrect: false },
      ],
      solution: 'Hovedforskjellen er at ved lukket hogst (plukkhogst, skjermstilling) bevares et permanent trekronedekke, mens ved flatehogst fjernes alle eller nesten alle trær. Ved lukket hogst skjer foryngelse kontinuerlig under de gjenstående trærne.',
    },
    {
      id: 'nb-2-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er en kantsone, og hvorfor er den viktig ved hogst?',
      solution: 'En kantsone er et belte med trær og vegetasjon som bevares langs vassdrag, myrer eller andre naturtyper ved hogst. Kantsoner er viktige fordi de: 1) Beskytter vannkvaliteten ved å filtrere avrenning og hindre erosjon. 2) Gir skygge til bekker, noe som holder vanntemperaturen nede (viktig for fisk). 3) Fungerer som korridorer for dyreliv mellom skogsområder. 4) Bevarer estetiske verdier i landskapet. 5) Er levested for mange arter som trenger fuktig skogmiljø. Bredden varierer fra 5-30 meter avhengig av terreng og naturtype.',
    },
    {
      id: 'nb-2-3-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er livsløpstrær?',
      options: [
        { id: 'a', text: 'Trær som settes igjen ved hogst og får stå til de dør naturlig', isCorrect: true },
        { id: 'b', text: 'Trær som plantes etter hogst', isCorrect: false },
        { id: 'c', text: 'De yngste trærne i skogen', isCorrect: false },
        { id: 'd', text: 'Trær som brukes til papirproduksjon', isCorrect: false },
      ],
      solution: 'Livsløpstrær er trær som bevisst settes igjen ved hogst og får stå til de dør og brytes ned naturlig. De sikrer kontinuitet i tilgangen på store, gamle trær og død ved i landskapet, noe mange arter er avhengige av.',
    },
    {
      id: 'nb-2-3-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Diskuter fordeler og ulemper ved plukkhogst sammenlignet med flatehogst. Når kan plukkhogst være et bedre valg?',
      solution: 'Fordeler med plukkhogst: 1) Kontinuerlig skogdekke gir bedre estetikk og friluftsverdi. 2) Høyere biologisk mangfold med flersjiktet struktur. 3) Bedre beskyttelse mot erosjon og avrenning. 4) Mer stabil mot stormfelling. 5) Jevnere inntekter over tid. Ulemper: 1) Lavere volumproduksjon totalt. 2) Krever mer kunnskap og planlegging. 3) Høyere driftskostnader per kubikkmeter. 4) Mer komplisert logistikk. 5) Vanskeligere å få god foryngelse av gran. Plukkhogst kan være bedre valg i: friluftsområder, verneområder, bratt terreng, frostlendte områder, bynær skog, og der flersjiktet skog allerede finnes.',
    },
  ],
};

// ============================================================================
// Kapittel 2.4: Trevirkets egenskaper og bruk
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_2_4: TextbookChapter = {
  id: 'naturbruk-vg1-2-4',
  courseId: 'naturbruk-vg1',
  chapterNumber: '2.4',
  title: 'Trevirkets egenskaper og bruk',
  description: 'Trevirkets oppbygning, egenskaper hos ulike treslag, tørking og bearbeiding, og bruksområder for trevirke.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive trevirkets oppbygning og struktur',
    'forklare egenskaper hos ulike norske treslag',
    'gjøre rede for tørking og bearbeiding av trevirke',
    'vurdere bruksområder for ulike typer trevirke',
  ],
  content: [
    {
      id: 'nb-2-4-intro',
      type: 'text',
      content: `# Trevirkets egenskaper og bruk

Trevirke er et av verdens mest allsidige og bærekraftige materialer. For å bruke det riktig må vi forstå hvordan det er bygd opp og hvilke egenskaper de ulike treslagene har.

## Trevirkets oppbygning

Et tre består av flere lag fra ytterst til innerst:

1. **Bark (ytre og indre)**: Beskytter treet
2. **Kambium**: Vekstlag der nye celler dannes
3. **Splintved**: Yngre, aktiv ved som transporterer vann og næring
4. **Kjerneved**: Eldre, hardere ved i sentrum (ikke alle treslag har kjerneved)
5. **Marg**: Sentrum av stammen, ofte svakere struktur`,
    },
    {
      id: 'nb-2-4-def-arsringer',
      type: 'definition',
      title: 'Arsringer',
      content: 'Arsringer er konsentriske ringer i tverrsnittet av en trestamme som viser årlig tilvekst. Hver ring består av en lys del (vårved, dannet om våren med store celler for vanntransport) og en mørk del (sommerved/høstved, dannet senere med tettere celler). Ved å telle arsringer kan man bestemme treets alder, og ringenes bredde forteller om vekstforholdene det året.',
    },
    {
      id: 'nb-2-4-def-densitet',
      type: 'definition',
      title: 'Densitet (egenvekt)',
      content: 'Densitet er et mål på hvor tungt et materiale er i forhold til volumet, målt i kg/m3. Trevirkets densitet varierer med treslag og fuktighet. Tyngre treslag som eik (ca. 700 kg/m3) er hardere og mer slitesterke enn lettere treslag som gran (ca. 450 kg/m3). Densiteten påvirker styrke, hardhet og varmeledningsevne.',
    },
    {
      id: 'nb-2-4-def-fiber',
      type: 'definition',
      title: 'Fiberretning',
      content: 'Fiberretning angir hvordan trefibrene er orientert i vedstykket. Fibrene går langs stammens lengderetning. Tre er sterkest i fiberretningen og svakest på tvers. Ved bearbeiding er det viktig å ta hensyn til fiberretningen for å få styrke og god overflate. Vridd fiber eller "vrang ved" gir svakere virke.',
    },
    {
      id: 'nb-2-4-treslag',
      type: 'text',
      content: `## Egenskaper hos norske treslag

### Gran
- **Farge**: Hvit til gulhvit, lyst
- **Densitet**: Ca. 450 kg/m³
- **Egenskaper**: Bløt, lett å bearbeide, god styrke i forhold til vekt
- **Bruk**: Konstruksjonsvirke, panel, papir og papp
- **Særtrekk**: Ingen tydelig kjerneved, lang fiber (god til papir)

### Furu
- **Farge**: Gulhvit splint, rødlig kjerneved
- **Densitet**: Ca. 500 kg/m³
- **Egenskaper**: Harder enn gran, naturlig kvaeinnhold gir noe bestandighet
- **Bruk**: Gulv, møbler, utendørs kledning, vinduer
- **Særtrekk**: Tydelig kjerneved, mer kvistete enn gran

### Bjørk
- **Farge**: Hvit til lysebrun
- **Densitet**: Ca. 650 kg/m³
- **Egenskaper**: Hardt, finmasket, slitesterkt, fint å beise
- **Bruk**: Møbler, parkett, finér, ved
- **Særtrekk**: Ikke varig utendørs, tar lett flammer

### Eik
- **Farge**: Brun kjerneved, lys splint
- **Densitet**: Ca. 700 kg/m³
- **Egenskaper**: Svært hardt og varig, naturlig bestandig mot råte
- **Bruk**: Møbler, gulv, båtbygging, utendørs konstruksjoner
- **Særtrekk**: Inneholder tanniner som beskytter mot råte`,
    },
    {
      id: 'nb-2-4-fukt',
      type: 'text',
      content: `## Fuktighet og tørking

### Fuktighet i tre
- **Rått tre**: 40-200 % fuktinnhold (vann i forhold til tørrvekt)
- **Lufttørket**: 15-20 % fuktinnhold
- **Ovnstørket (teknisk tørket)**: 8-12 % fuktinnhold
- **Fibermetningspunkt**: Ca. 28-30 % - grensen der fritt vann er borte

### Tørkemetoder
**Lufttørking:**
- Virket stables utendørs med strø mellom
- Tar lang tid (måneder til år)
- Billig men gir høyere sluttfuktighet
- Passer for ved og grovt konstruksjonsvirke

**Teknisk tørking (ovnstørking):**
- Tørkes i kammer med kontrollert temperatur og fuktighet
- Tar dager til uker
- Gir lavt, jevnt fuktinnhold
- Nødvendig for innendørs bruk som møbler og panel

### Hvorfor tørke?
- Reduserer vekt og transportkostnader
- Hindrer soppangrep og råte
- Forhindrer sprekking og vridning ved bruk
- Bedrer bearbeidbarhet og limbarhet`,
    },
    {
      id: 'nb-2-4-def-sortiment',
      type: 'definition',
      title: 'Sortiment',
      content: 'Sortiment er betegnelsen på ulike kategorier av tømmer basert på dimensjon og kvalitet. Hovedsortimentene er: Sagtømmer (til trelast og plank), massevirke (til papir og cellulose), stolper og spesialvirke. Prisen varierer betydelig mellom sortimentene, der sagtømmer av god kvalitet gir høyest pris.',
    },
    {
      id: 'nb-2-4-produkter',
      type: 'text',
      content: `## Produkter av trevirke

### Trelast
- Plank, bord, lekter, panel
- Limes til limtre og kryssfiner
- Brukes i bygg og konstruksjoner

### Trebaserte plater
- **Kryssfiner**: Tynne sjikt limt på tvers
- **Sponplater**: Treflis limt med lim
- **MDF**: Finmalt fiber presset med lim
- **OSB**: Orienterte spon i lag

### Papir og cellulose
- Avispapir, bokpapir, kartong
- Hygieneprodukter
- Tekstilfiber (viskose)

### Bioenergi
- Ved og flis til forbrenning
- Pellets til fyring
- Råstoff til biodrivstoff`,
    },
    {
      id: 'nb-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Valg av treslag til ulike formål',
      problem: 'Du skal gi råd om valg av treslag til følgende bruksområder: a) Utvendig kledning på hytte, b) Stuebenk innendørs, c) Gulv i entré med mye slitasje.',
      solution: `**Løsning:**

**a) Utvendig kledning:**
- **Anbefalt**: Malmfuru (furu med mye kjerneved) eller eik
- **Begrunnelse**: Utendørs bruk krever bestandighet mot fukt og råte. Malmfuru har naturlig kvaeinnhold i kjernveden som beskytter. Eik er naturlig råtebestandig. Gran kan brukes hvis det beis/males godt og vedlikeholdes.
- **Tips**: Unngå bjørk utendørs - den råtner raskt.

**b) Stuebenk innendørs:**
- **Anbefalt**: Furu, bjørk eller eik
- **Begrunnelse**: Innendørs er fukt ikke et problem. Valget avhenger av stil og budsjett. Bjørk gir fin, lys overflate og tar beis godt. Furu er rimeligere og gir varmere preg. Eik er eksklusivt og varig.

**c) Gulv i entré:**
- **Anbefalt**: Eik eller ask
- **Begrunnelse**: Høy slitasje krever hardt treslag. Eik har høy densitet (700 kg/m³) og tåler slitasje svært godt. Ask er også hardt. Bjørk kan brukes, men er noe bløtere. Unngå gran og furu i høytrafikkerte områder.`,
    },
    {
      id: 'nb-2-4-tip',
      type: 'tip',
      title: 'Tips: Kjenn igjen treslag',
      content: 'Lær deg å skille mellom gran og furu på virket: Gran er lysere og mer jevn i fargen, mens furu har tydelig rødlig kjerneved og mer kvister. Se på endeveden - gran har jevnere arsringer. Furu lukter mer av kvae. Prøv å studere tømmer på en byggeplass eller i en byggvarehandel, og se om du kan identifisere treslagene.',
    },
  ],
  exercises: [
    {
      id: 'nb-2-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket lag i trestammen er vekstlaget der nye celler dannes?',
      options: [
        { id: 'a', text: 'Kambium', isCorrect: true },
        { id: 'b', text: 'Kjerneved', isCorrect: false },
        { id: 'c', text: 'Bark', isCorrect: false },
        { id: 'd', text: 'Marg', isCorrect: false },
      ],
      solution: 'Kambium er det tynne vekstlaget mellom barken og veden der nye celler dannes. Her produseres ny ved innover og ny bark utover, noe som gir treets tykkelsevekst.',
    },
    {
      id: 'nb-2-4-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hvorfor tre er sterkest i fiberretningen og hva dette betyr for bruk av trevirke.',
      solution: 'Trefibrene er lange, rørformede celler som går langs stammens lengderetning. De er designet for å motstå strekkrefter når treet svaier i vind. På tvers av fibrene er det lettere å skille cellene fra hverandre. For bruk betyr dette: 1) Bjelker legges slik at fibrene går i lengderetningen for å tåle bøyning. 2) Ved splitting følger man fiberretningen for lett arbeid. 3) Skjæring på tvers gir ru overflate og er tyngre. 4) Spiker og skruer holder bedre på tvers av fibrene. 5) Tre sprekker lettere langs fiberretningen.',
    },
    {
      id: 'nb-2-4-ex3',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilket treslag er hardest og mest slitesterkt av disse?',
      options: [
        { id: 'a', text: 'Eik', isCorrect: true },
        { id: 'b', text: 'Gran', isCorrect: false },
        { id: 'c', text: 'Furu', isCorrect: false },
        { id: 'd', text: 'Osp', isCorrect: false },
      ],
      solution: 'Eik har høyest densitet (ca. 700 kg/m³) av de nevnte treslagene og er dermed hardest og mest slitesterkt. Gran er blløtest med ca. 450 kg/m³.',
    },
    {
      id: 'nb-2-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er fibermetningspunktet, og hvorfor er det viktig ved tørking av tre?',
      solution: 'Fibermetningspunktet er fuktigheten (ca. 28-30 %) der alt fritt vann i cellerommene er borte, men celleveggene fortsatt er mettet med bundet vann. Det er viktig fordi: 1) Over fibermetningspunktet endres ikke treets dimensjoner - vann forsvinner fra hulrom. 2) Under fibermetningspunktet begynner treet å krympe fordi bundet vann forlater celleveggene. 3) For å unngå sprekking og vridning må tørkingen under fibermetningspunktet skje langsomt og kontrollert. 4) All dimensjonsendring (svinn) skjer under dette punktet.',
    },
    {
      id: 'nb-2-4-ex5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor er gran foretrukket til papirproduksjon?',
      options: [
        { id: 'a', text: 'Gran har lange fibre som gir sterkt papir', isCorrect: true },
        { id: 'b', text: 'Gran er hardere enn andre treslag', isCorrect: false },
        { id: 'c', text: 'Gran har mest kjerneved', isCorrect: false },
        { id: 'd', text: 'Gran er det billigste treslaget', isCorrect: false },
      ],
      solution: 'Gran har lange, tynne fibre som gir sterkt og jevnt papir. De lange fibrene flettes godt sammen og gir god strekkstyrke. Gran har også lys farge og lite kvae, noe som gjør bleking enklere og gir hvitere papir.',
    },
    {
      id: 'nb-2-4-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Sammenlign fordeler og ulemper ved lufttørking og teknisk tørking (ovnstørking) av trevirke. Når egner hver metode seg best?',
      solution: 'Lufttørking: Fordeler - billig, ingen energikostnader, skånsom for veden. Ulemper - tar lang tid (måneder-år), værvarighet, gir høyere sluttfuktighet (15-20%), sesongavhengig, krever mye plass. Egner seg for: ved til brensel, grovt konstruksjonsvirke, utendørs bruk. Teknisk tørking: Fordeler - rask (dager-uker), gir lavt og jevnt fuktinnhold (8-12%), kontrollerbare forhold, værungvhengig. Ulemper - høye energikostnader, krever utstyr og kompetanse, risiko for tørkeskader ved feil. Egner seg for: innendørs bruk, møbler, panel, liming, all bruk der presise dimensjoner kreves.',
    },
  ],
};

// ============================================================================
// Kapittel 2.5: Skogsmaskiner og teknologi
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_2_5: TextbookChapter = {
  id: 'naturbruk-vg1-2-5',
  courseId: 'naturbruk-vg1',
  chapterNumber: '2.5',
  title: 'Skogsmaskiner og teknologi',
  description: 'Moderne skogsmaskiner, hogstmaskin og lassbærer, GPS og digital teknologi i skogbruket.',
  estimatedMinutes: 50,
  competenceGoals: [
    'beskrive funksjonen til vanlige skogsmaskiner',
    'forklare arbeidsprosessen ved mekanisert hogst',
    'gjøre rede for bruk av digital teknologi i skogbruket',
    'vurdere fordeler og ulemper ved mekanisering',
  ],
  content: [
    {
      id: 'nb-2-5-intro',
      type: 'text',
      content: `# Skogsmaskiner og teknologi

Moderne skogbruk er høyteknologisk. Effektive maskiner og digital teknologi har revolusjonert hvordan vi høster og forvalter skog. Dette har økt produktiviteten enormt, men stiller også nye krav til kompetanse og miljøhensyn.

## Utviklingen av skogbruket

- **Før 1950**: Manuell hogst med øks og buesag, hest til transport
- **1950-70**: Motorsag innføres, traktorer overtar
- **1970-90**: De første hogstmaskinene kommer
- **1990-i dag**: Helmekanisert drift med avanserte maskiner og IT-systemer`,
    },
    {
      id: 'nb-2-5-def-hogstmaskin',
      type: 'definition',
      title: 'Hogstmaskin (harvester)',
      content: 'En hogstmaskin er et selvgående skogskjøretøy som feller, kvister og kapper trær til sortimenter. Maskinen har et aggregat (hogstaggregat) på en kran som griper treet, feller det, mater stammen gjennom mens kvister sages av, og kapper til ønsket lengde. Moderne maskiner måler automatisk diameter og lengde.',
    },
    {
      id: 'nb-2-5-def-lassbaerer',
      type: 'definition',
      title: 'Lassbærer (forwarder)',
      content: 'En lassbærer er et skogskjøretøy som transporterer tømmer fra hogstfeltet til bilvei. Den har en kran for lasting og et lasteplan som bærer virket over bakken (i motsetning til sleping). Lassbæreren kjører i kjøresporene etter hogstmaskinen og sorterer virket ved leveringssted.',
    },
    {
      id: 'nb-2-5-maskinpark',
      type: 'text',
      content: `## Skogbrukets maskinpark

### Hogstmaskin (Harvester)
**Funksjon:**
- Feller trær med sag i aggregatet
- Kvister stammen ved å mate den gjennom kvistknivert
- Kapper til riktig lengde (sortimenter)
- Måler og registrerer hvert tre

**Kapasitet:**
- 15-30 trær per time i normalbestand
- Én operatør kan produsere 100-200 m³ per skift

### Lassbærer (Forwarder)
**Funksjon:**
- Henter virke fra hogstflata
- Sorterer etter sortiment ved bilvei
- Bygger velter for videre transport

**Kapasitet:**
- Lasteevne: 10-20 tonn
- Typisk 80-150 m³ per skift

### Andre maskiner
- **Markberedningsmaskin**: Bearbeider jorda for planting
- **Plantemaskin**: Maskinell planting (lite brukt i Norge)
- **Vinsj**: For drift i bratt terreng
- **Taubane**: For transport i svært bratt terreng`,
    },
    {
      id: 'nb-2-5-def-apteringscomputer',
      type: 'definition',
      title: 'Apteringscomputer',
      content: 'Apteringscmputeren er datasystemet i hogstmaskinen som styrer hvordan stammen kappes (apteres) for å gi høyest mulig verdi. Systemet bruker prisinformasjon for ulike sortimenter og måler kontinuerlig diameter for å beregne optimal kapping. Operatøren kan overstyre ved behov.',
    },
    {
      id: 'nb-2-5-teknologi',
      type: 'text',
      content: `## Digital teknologi i skogbruket

### GPS og kartløsninger
- Maskinene vet alltid nøyaktig hvor de er
- Digitale kart viser bestand, veier og hindringer
- Kantsoner og nøkkelbiotoper markeres for å unngå inngrep
- Sporingssystemer dokumenterer hvor maskinen har kjørt

### Produksjonsdata
- Hogstmaskinen registrerer hvert tre: antall, dimensjon, volum
- Data overføres til tømmerkjøper og skogeier i sanntid
- Grunnlag for oppgjør og statistikk
- Kan kobles til skogbruksplaner

### Fjernmåling og droner
- Satellittbilder for kartlegging av skog
- Droner for detaljplanlegging og tilsyn
- Laserskanning (LiDAR) for nøyaktig terrengmodell og volumestimater

### Maskinens datadisplay
- 3D-visning av terrenget
- Oversikt over sortimenter og volum
- Kommunikasjon med lassbærer
- Produksjonsstatistikk i sanntid`,
    },
    {
      id: 'nb-2-5-def-gps',
      type: 'definition',
      title: 'GPS i skogbruket',
      content: 'GPS (Global Positioning System) brukes i skogbruket for navigasjon, dokumentasjon og planlegging. Maskinene har innebygd GPS som viser posisjon på digitale kart og logger kjøreruter. Dette brukes til å planlegge kjørespor, unngå sensitive områder, og dokumentere at miljøhensyn er fulgt.',
    },
    {
      id: 'nb-2-5-prosess',
      type: 'text',
      content: `## Arbeidsprosessen ved mekanisert hogst

### 1. Planlegging
- Digitalt kart over bestandet lastes inn
- Kjøreruter og driftsveier planlegges
- Kantsoner og nøkkelbiotoper markeres
- Sortimenter og priser programmeres i apteringscomputer

### 2. Hogst
- Hogstmaskin feller og apterer fra kjørespor
- Virke legges sortert i lunner ved kjøresporet
- Kvist legges i sporet for markbeskyttelse
- Data om hvert tre registreres

### 3. Fremkjøring
- Lassbærer henter virke fra lunnene
- Kjører i samme spor som hogstmaskinen
- Sorterer ved bilvei i velter
- Dokumenterer volum per sortiment

### 4. Transport
- Tømmerbil henter virke fra veltene
- Leveres til sagbruk eller industri
- Volum og kvalitet kontrolleres ved mottak`,
    },
    {
      id: 'nb-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Beregning av driftskapasitet',
      problem: 'En hogstmaskin produserer i gjennomsnitt 20 m³ per time i et granbestand. Skiftet varer 8 timer, hvorav 1 time går til pauser og forflytning. Hvor mange dager tar det å hogge et bestand på 2000 m³?',
      solution: `**Løsning:**

**Effektiv arbeidstid per skift:**
8 timer - 1 time = 7 timer effektiv hogst

**Produksjon per skift:**
20 m³/time × 7 timer = 140 m³ per skift

**Antall skift for 2000 m³:**
2000 m³ ÷ 140 m³/skift = 14,3 skift

**Svar:**
Det tar ca. 15 arbeidsdager (skift) å hogge bestandet.

**Kommentar:**
I praksis vil produksjonen variere med terreng, trestørrelse og operatørens erfaring. På god bonitet med store trær kan produksjonen være høyere, i vanskelig terreng lavere.`,
    },
    {
      id: 'nb-2-5-tip',
      type: 'tip',
      title: 'Tips: Se skogsmaskiner i arbeid',
      content: 'Følg med på hvor det pågår hogst i ditt nærområde. Ta kontakt med skogeier eller entreprenør og spør om du kan få se maskinene i arbeid. Mange er positive til besøk når det passes inn. Observer hvordan operatøren jobber, hvordan virket sorteres, og legg merke til miljøhensyn som kantsoner og kvistdeponering i kjørespor.',
    },
  ],
  exercises: [
    {
      id: 'nb-2-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedfunksjonen til en hogstmaskin (harvester)?',
      options: [
        { id: 'a', text: 'Felle, kviste og kappe trær til sortimenter', isCorrect: true },
        { id: 'b', text: 'Transportere tømmer til bilvei', isCorrect: false },
        { id: 'c', text: 'Plante nye trær', isCorrect: false },
        { id: 'd', text: 'Frese stubber', isCorrect: false },
      ],
      solution: 'En hogstmaskin (harvester) feller treet, kvister stammen ved å mate den gjennom kvistkniver, og kapper til ønsket lengde og sortiment. Alt gjøres av én operatør fra førerhytta.',
    },
    {
      id: 'nb-2-5-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva en apteringscomputer er og hvordan den bidrar til verdiskapning i skogbruket.',
      solution: 'En apteringscomputer er datasystemet i hogstmaskinen som beregner optimal kapping av stammen. Den bruker: 1) Prisinformasjon for ulike sortimenter (sagtømmer, massevirke, etc.). 2) Kontinuerlig måling av stammens diameter. 3) Kvalitetsvurdering fra operatøren. Computeren beregner hvor det lønner seg å kappe for å få høyest mulig samlet verdi. For eksempel kan det være lønnsomt å kappe en lang sagtømmerstokk selv om enden er litt tynn, framfor å få mer massevirke. Optimal aptering kan øke verdien med 5-15 % sammenlignet med manuell vurdering.',
    },
    {
      id: 'nb-2-5-ex3',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva brukes GPS til i moderne skogsmaskiner?',
      options: [
        { id: 'a', text: 'Navigasjon, dokumentasjon og unngå sensitive områder', isCorrect: true },
        { id: 'b', text: 'Kun til å finne veien ut av skogen', isCorrect: false },
        { id: 'c', text: 'Bare til å registrere tømmervolumet', isCorrect: false },
        { id: 'd', text: 'GPS brukes ikke i skogsmaskiner', isCorrect: false },
      ],
      solution: 'GPS i skogsmaskiner brukes til navigasjon på digitale kart, dokumentasjon av kjøreruter, og for å markere og unngå sensitive områder som kantsoner og nøkkelbiotoper. Posisjonen logges også for miljødokumentasjon.',
    },
    {
      id: 'nb-2-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv arbeidsprosessen fra et tre felles til virket er levert på sagbruket.',
      solution: 'Prosessen: 1) Hogstmaskin feller treet, kvister og kapper til sortimenter. Virket legges sortert ved kjøresporet. 2) Lassbærer kjører i samme spor og laster virket på lasteplanet med kran. 3) Lassbærer transporterer virket til velteplass ved bilvei og sorterer i separate velter per sortiment. 4) Tømmerbil med henger henter veltene og transporterer til sagbruk eller treforedlingsindustri. 5) Ved mottak måles og kontrolleres volum og kvalitet før oppgjør til skogeier. Hele prosessen dokumenteres digitalt fra hogstmaskinens datalogger.',
    },
    {
      id: 'nb-2-5-ex5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvorfor legges kvist i kjøresporene ved hogst?',
      options: [
        { id: 'a', text: 'For å beskytte marka mot pakking og erosjon', isCorrect: true },
        { id: 'b', text: 'For å skjule sporene etterpå', isCorrect: false },
        { id: 'c', text: 'Fordi kvisten ikke kan brukes til noe', isCorrect: false },
        { id: 'd', text: 'For at maskinen skal kjøre raskere', isCorrect: false },
      ],
      solution: 'Kvist legges i kjøresporene (kvistmatting) for å beskytte skogbunnen mot markskader. Tunge maskiner kan pakke jorda og ødelegge strukturen, noe som reduserer vanninfiltrasjonen og kan skade trærøtter. Kvistmatta fordeler trykket og beskytter jordlaget.',
    },
    {
      id: 'nb-2-5-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Diskuter fordeler og ulemper ved mekanisert skogsdrift sammenlignet med manuell drift med motorsag. Når kan manuell drift fortsatt være aktuelt?',
      solution: 'Fordeler mekanisering: 1) Svært høy produktivitet - én operatør produserer 100-200 m³/dag vs 5-10 m³/dag manuelt. 2) Sikrere arbeidsmiljø - operatøren sitter beskyttet i hytta. 3) Lavere kostnader per kubikkmeter. 4) Bedre dokumentasjon og sporbarhet. 5) Jevnere kvalitet på apteringen. Ulemper: 1) Høye investeringskostnader (maskin koster 5-8 mill. kr). 2) Markskader ved våte forhold. 3) Krever god veistandard. 4) Ikke egnet for alle terrengtyper. 5) Høyt energiforbruk. Manuell drift aktuelt: bratt terreng der maskiner ikke kommer til, små volum som ikke forsvarer maskin, spesielle hensyn (plukkhogst i sårbare områder), ved vindfallrydding, og ved selvhogst for skogeiere.',
    },
  ],
};

// ============================================================================
// Kapittel 2.6: Sertifisering og miljøstandarder
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_2_6: TextbookChapter = {
  id: 'naturbruk-vg1-2-6',
  courseId: 'naturbruk-vg1',
  chapterNumber: '2.6',
  title: 'Sertifisering og miljøstandarder',
  description: 'Skogsertifisering, PEFC og FSC, miljøstandarder og sporbarhet i verdikjeden.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjøre rede for hva skogsertifisering innebærer',
    'beskrive de viktigste sertifiseringsordningene PEFC og FSC',
    'forklare hvordan sporbarhet sikres i verdikjeden',
    'vurdere betydningen av sertifisering for bærekraftig skogbruk',
  ],
  content: [
    {
      id: 'nb-2-6-intro',
      type: 'text',
      content: `# Sertifisering og miljøstandarder

I en verden med økende fokus på bærekraft og miljø, krever forbrukere og bedrifter dokumentasjon på at produkter er produsert på en ansvarlig måte. Skogsertifisering er et verktøy som bekrefter at skogen forvaltes bærekraftig.

## Hva er skogsertifisering?

Skogsertifisering er en frivillig ordning der en uavhengig tredjepart kontrollerer at skogforvaltningen oppfyller fastsatte standarder for:

- Miljøhensyn og bevaring av biologisk mangfold
- Sosiale forhold og arbeidstakerrettigheter
- Økonomisk bærekraft
- Lovlig hogst og sporbarhet`,
    },
    {
      id: 'nb-2-6-def-pefc',
      type: 'definition',
      title: 'PEFC (Programme for the Endorsement of Forest Certification)',
      content: 'PEFC er verdens største skogsertifiseringssystem målt i sertifisert areal. Det er et rammeverk som godkjenner nasjonale sertifiseringssystemer. I Norge er det Norsk PEFC Skogstandard som gjelder. Ca. 90 % av norsk produktiv skog er PEFC-sertifisert gjennom gruppesertifisering.',
    },
    {
      id: 'nb-2-6-def-fsc',
      type: 'definition',
      title: 'FSC (Forest Stewardship Council)',
      content: 'FSC er en internasjonal sertifiseringsordning grunnlagt av miljøorganisasjoner, næringsliv og sosiale bevegelser. FSC har strenge krav til miljøhensyn og setter av større arealer til vern. I Norge er mindre skog FSC-sertifisert enn PEFC, men ordningen brukes i tropiske områder og er viktig i internasjonal handel.',
    },
    {
      id: 'nb-2-6-def-sporbarhet',
      type: 'definition',
      title: 'Sporbarhet (Chain of Custody)',
      content: 'Sporbarhet eller Chain of Custody (CoC) er dokumentasjon som følger trevirket gjennom hele verdikjeden fra skog til ferdig produkt. Alle ledd i kjeden (skogeier, entreprenør, sagbruk, byggevarehandel) må være sertifisert for at sluttproduktet skal kunne merkes med sertifiseringslogo. Dette sikrer at sertifisert virke ikke blandes med usertifisert.',
    },
    {
      id: 'nb-2-6-standarder',
      type: 'text',
      content: `## Hva krever standardene?

### Miljøkrav (eksempler fra Norsk PEFC)
- Bevare kantsoner mot vann og våtmark
- Sette igjen livsløpstrær og død ved
- Unngå hogst i nøkkelbiotoper
- Begrense bruk av plantevernmidler
- Ta hensyn til truede arter
- Ikke hogge urskog eller gammel naturskog

### Sosiale krav
- Respektere urfolks rettigheter (samiske interesser)
- Sikre arbeidstakeres HMS og rettigheter
- Ta hensyn til friluftsliv og rekreasjon
- Informere og involvere lokalsamfunn

### Økonomiske krav
- Langsiktig forvaltning med foryngelsesplikt
- Dokumentert eiendomsrett
- Overholdelse av lover og forskrifter`,
    },
    {
      id: 'nb-2-6-norsk-standard',
      type: 'text',
      content: `## Norsk PEFC Skogstandard

I Norge er ca. 90 % av produktiv skog sertifisert etter PEFC. Dette skjer gjennom gruppesertifisering:

### Hvordan fungerer gruppesertifisering?
1. Skogeierorganisasjonene har en gruppeseritifisering
2. Enkeltse skogeiere melder seg inn i gruppen
3. Skogeier forplikter seg til å følge standarden
4. Stikkprøvekontroller utføres av sertifiseringsorgan
5. Tømmeret kan selges som sertifisert

### Kravpunkter i standarden
Norsk PEFC Skogstandard inneholder 30 kravpunkter som dekker:
- Planlegging og dokumentasjon
- Biologisk mangfold og miljø
- Skogproduksjon og foryngelse
- Sosiale hensyn og arbeidsmiljø

### Avvik og sanksjoner
- Mindre avvik: Må rettes innen frist
- Større avvik: Kan føre til suspensjon
- Gjentatte avvik: Kan miste sertifikatet`,
    },
    {
      id: 'nb-2-6-marked',
      type: 'text',
      content: `## Markedets krav til sertifisering

### Hvorfor etterspørres sertifisert trevirke?
- **Offentlige innkjøp**: Staten krever ofte sertifisert virke
- **Byggevarekjeder**: De store kjedene krever dokumentasjon
- **Eksportmarkedet**: Internasjonale kunder krever sertifisering
- **Forbrukerkrav**: Økende bevissthet om bærekraft
- **Klimakrav**: Dokumentasjon av karbonavtrykk

### Prispremie?
- Begrenset prispremie i Norge for sertifisert virke
- Men usertifisert virke kan være vanskelig å selge
- Sertifisering er ofte en forutsetning for markedsadgang

### Fremtiden
- EU-krav til dokumentasjon av lovlig hogst (EUTR)
- Ny EU-forordning om avskogingsfrie produkter (EUDR)
- Økende krav til klima- og miljødokumentasjon`,
    },
    {
      id: 'nb-2-6-example-1',
      type: 'example',
      title: 'Eksempel: Sporbarhet i praksis',
      problem: 'Beskriv hvordan sporbarhet sikres fra et tre hogges i norsk skog til en forbruker kjøper et PEFC-merket møbel.',
      solution: `**Løsning:**

**1. Skogeier (sertifisert)**
- Har gyldig PEFC-gruppesertifikat
- Hogst utføres i henhold til standarden
- Virke merkes med sertifikatnummer ved salg

**2. Tømmerkjøper/sagbruk (CoC-sertifisert)**
- Mottar virke med dokumentasjon på opprinnelse
- Egen CoC-sertifisering sikrer at virket holdes adskilt
- Trelast som selges videre merkes med CoC-nummer

**3. Møbelprodusent (CoC-sertifisert)**
- Kjøper dokumentert sertifisert trelast
- Egen CoC-sertifisering
- Fører regnskap over sertifisert virke inn og ut
- Merker ferdige møbler med PEFC-logo

**4. Møbelbutikk**
- Kan selge produktet med PEFC-logo
- Forbrukeren ser logoen og vet at trevirket kommer fra bærekraftig forvaltet skog

**Brudd i kjeden = ingen logo**
Hvis ett ledd mangler sertifisering, kan ikke sluttproduktet merkes. Derfor må alle ledd være sertifisert.`,
    },
    {
      id: 'nb-2-6-tip',
      type: 'tip',
      title: 'Tips: Se etter sertifiseringsmerker',
      content: 'Neste gang du er i en byggevarehandel eller møbelbutikk, se etter PEFC- eller FSC-logoene på produktene. Sjekk også papirvarer og emballasje. Du kan skanne QR-koder på noen produkter for å se sporbarhetsinformasjon. Reflekter over hvor mye trevirke du omgir deg med daglig og hvorvidt det er sertifisert.',
    },
  ],
  exercises: [
    {
      id: 'nb-2-6-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er hovedformålet med skogsertifisering?',
      options: [
        { id: 'a', text: 'Bekrefte at skogen forvaltes bærekraftig gjennom uavhengig kontroll', isCorrect: true },
        { id: 'b', text: 'Øke tømmerprisen for skogeier', isCorrect: false },
        { id: 'c', text: 'Hindre all hogst i skogen', isCorrect: false },
        { id: 'd', text: 'Gi staten kontroll over privat skog', isCorrect: false },
      ],
      solution: 'Skogsertifisering bekrefter at skogforvaltningen oppfyller fastsatte standarder for miljø, sosiale forhold og økonomisk bærekraft. En uavhengig tredjepart kontrollerer at kravene følges.',
    },
    {
      id: 'nb-2-6-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom PEFC og FSC sertifisering.',
      solution: 'PEFC (Programme for the Endorsement of Forest Certification) er verdens største system målt i areal og fungerer som et rammeverk som godkjenner nasjonale standarder. Det dominerer i Europa og Nord-Amerika. FSC (Forest Stewardship Council) ble grunnlagt av miljøorganisasjoner og har generelt strengere miljøkrav, blant annet større krav til vern av areal. FSC er viktigst i tropiske områder. I Norge er ca. 90 % PEFC-sertifisert gjennom gruppesertifisering, mens FSC-arealet er mye mindre. Begge systemer krever sporbarhet (CoC) gjennom verdikjeden.',
    },
    {
      id: 'nb-2-6-ex3',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor stor andel av norsk produktiv skog er PEFC-sertifisert?',
      options: [
        { id: 'a', text: 'Ca. 90 %', isCorrect: true },
        { id: 'b', text: 'Ca. 50 %', isCorrect: false },
        { id: 'c', text: 'Ca. 25 %', isCorrect: false },
        { id: 'd', text: 'Ca. 10 %', isCorrect: false },
      ],
      solution: 'Ca. 90 % av norsk produktiv skog er PEFC-sertifisert gjennom gruppesertifisering organisert av skogeierorganisasjonene.',
    },
    {
      id: 'nb-2-6-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er sporbarhet (Chain of Custody), og hvorfor er det viktig for sertifiseringssystemet?',
      solution: 'Sporbarhet (Chain of Custody/CoC) er dokumentasjon som følger trevirket gjennom hele verdikjeden fra skog til ferdig produkt. Hvert ledd (skogeier, sagbruk, fabrikk, forhandler) må være CoC-sertifisert og føre regnskap over sertifisert virke som kommer inn og går ut. Det er viktig fordi: 1) Det sikrer at sertifisert og usertifisert virke ikke blandes. 2) Forbrukeren kan stole på at et merket produkt virkelig kommer fra sertifisert skog. 3) Det gir troverdighet til hele sertifiseringssystemet. Hvis ett ledd i kjeden mangler CoC-sertifisering, kan ikke sluttproduktet merkes med sertifiseringslogo.',
    },
    {
      id: 'nb-2-6-ex5',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken type kontroll gjennomføres for å sikre at sertifiseringskrav følges?',
      options: [
        { id: 'a', text: 'Uavhengig tredjepart gjør stikkprøvekontroller', isCorrect: true },
        { id: 'b', text: 'Skogeier rapporterer selv', isCorrect: false },
        { id: 'c', text: 'Kommunen kontrollerer all skog årlig', isCorrect: false },
        { id: 'd', text: 'Ingen kontroll utføres', isCorrect: false },
      ],
      solution: 'Sertifiseringen kontrolleres gjennom uavhengige revisjoner utført av akkrediterte sertifiseringsorganer. For gruppesertifisering gjøres stikkprøvekontroller hos et utvalg skogeiere hvert år. Ved avvik må skogeier rette opp, og gjentatte eller alvorlige avvik kan føre til tap av sertifikat.',
    },
    {
      id: 'nb-2-6-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Diskuter hvilken rolle skogsertifisering kan spille i arbeidet mot global avskoging og klimaendringer.',
      solution: 'Skogsertifisering kan bidra til å bekjempe avskoging og klimaendringer på flere måter: 1) Dokumentasjon av lovlig hogst hindrer ulovlig avvirkning som ofte fører til avskoging. 2) Krav om foryngelse sikrer at skog fornyes etter hogst - ikke konverteres til annen arealbruk. 3) Bevaring av karbonrike områder som gammelskog og myr. 4) Sporbarhet i verdikjeden gjør det mulig å unngå produkter fra avskoging. 5) EUs nye EUDR-forordning krever dokumentasjon av avskogingsfrie verdikjeder - sertifisering kan være ett verktøy for å oppfylle dette. Begrensninger: Sertifisering er frivillig og dekker ikke all skog, særlig ikke i høyrisikoland. Den hindrer ikke nødvendigvis lovlig avskoging. Likevel er sertifisering et viktig verktøy i en større verktøykasse for bærekraftig skogforvaltning globalt.',
    },
  ],
};

// ============================================================================
// Kapittel 2.7: Skog og klima
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_2_7: TextbookChapter = {
  id: 'naturbruk-vg1-2-7',
  courseId: 'naturbruk-vg1',
  chapterNumber: '2.7',
  title: 'Skog og klima',
  description: 'Skogens rolle i klimareguleringen, karbonkretsløpet, klimatilpasning og skogbrukets klimabidrag.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forklare skogens rolle i karbonkretsløpet og klimareguleringen',
    'beskrive hvordan klimaendringer påvirker skogen',
    'vurdere hvordan skogbruk kan bidra til klimatiltak',
    'drøfte avveininger mellom karbonlagring og andre hensyn',
  ],
  content: [
    {
      id: 'nb-2-7-intro',
      type: 'text',
      content: `# Skog og klima

Skogen spiller en nøkkelrolle i jordens klimasystem. Den binder CO2 gjennom fotosyntese og lagrer karbon i biomasse og jord. Samtidig påvirkes skogen av klimaendringene, og skogbruk kan enten bidra positivt eller negativt til klimaregnskapet.

## Skogens klimabetydning

Globalt binder verdens skoger ca. 30 % av de menneskeskapte CO2-utslippene årlig. Norsk skog binder tilsvarende omtrent halvparten av Norges totale klimagassutslipp. Dette gjør skogen til en viktig brikke i klimapolitikken.`,
    },
    {
      id: 'nb-2-7-def-karbonkretslopet',
      type: 'definition',
      title: 'Karbonkretsløpet',
      content: 'Karbonkretsløpet beskriver hvordan karbon sirkulerer mellom atmosfæren, biosfæren (levende organismer), havet og jordskorpen. I skogen tas CO2 opp gjennom fotosyntese og lagres i biomasse. Når trær dør og brytes ned, eller når ved brennes, frigjøres karbonet tilbake til atmosfæren. I et balansert kretsløp er opptak og utslipp like store.',
    },
    {
      id: 'nb-2-7-def-karbonlager',
      type: 'definition',
      title: 'Karbonlager',
      content: 'Et karbonlager er en "tank" som holder på karbon over tid. I skogøkosystemet finnes karbon lagret i: levende biomasse (stammer, grener, røtter, blader), død ved og strø, og i skogsjorda (humus og organisk materiale). Skogsjorda kan inneholde like mye karbon som den stående skogen, spesielt i boreale skoger.',
    },
    {
      id: 'nb-2-7-karbonbinding',
      type: 'text',
      content: `## Skogens karbonbinding

### Hvordan binder skogen karbon?

**Fotosyntese:**
$$6CO_2 + 6H_2O + \\text{lysenergi} \\rightarrow C_6H_{12}O_6 + 6O_2$$

Trærne tar opp CO2 fra lufta og vann fra jorda, og bruker solenergi til å lage sukker (glukose). Sukkeret brukes til vekst og bygges inn i cellevegger som cellulose og lignin.

### Hvor lagres karbonet?

| Karbonlager | Andel i norsk skog |
|-------------|-------------------|
| Levende biomasse | ca. 35 % |
| Død ved og strø | ca. 15 % |
| Skogsjord | ca. 50 % |

### Netto karbonbinding

Norsk skog har vært et netto karbonsluk i mange tiår:
- Årlig brutto opptak: ca. 35 mill. tonn CO2
- Årlig utslipp (hogst, nedbrytning): ca. 10 mill. tonn CO2
- Netto binding: ca. 25 mill. tonn CO2/år`,
    },
    {
      id: 'nb-2-7-def-karbonsluk',
      type: 'definition',
      title: 'Karbonsluk',
      content: 'Et karbonsluk er et system som tar opp mer karbon enn det slipper ut over tid. Norsk skog er et karbonsluk fordi tilveksten (netto binding) er større enn hogst og naturlig nedbrytning. Dette skyldes at skogen etter krigen har vokst til etter tidligere overutnyttelse, og at store arealer er plantet til.',
    },
    {
      id: 'nb-2-7-klimapavirkning',
      type: 'text',
      content: `## Klimaendringenes påvirkning på skogen

### Positive effekter (på kort sikt)
- Lengre vekstsesong gir økt tilvekst
- Høyere CO2-nivå stimulerer fotosyntese
- Skoggrensen kan flytte seg høyere

### Negative effekter
- Økt risiko for skogbrann
- Mer stormskader med mer ekstremvær
- Flere skadegjørere (barkbiller, sopp)
- Tørkestress i varme perioder
- Utsatt for nye fremmede arter

### Observerte endringer i Norge
- Økt tilvekst de siste tiårene
- Granens utbredelse beveger seg nordover
- Flere granbarkbilleangrep etter varme, tørre somre
- Endret fenologi (tidligere vår, senere høst)`,
    },
    {
      id: 'nb-2-7-tiltak',
      type: 'text',
      content: `## Skogbruk som klimatiltak

### Øke karbonbindingen
- **Planting på nye arealer**: Skogreising på tidligere jordbruksmark
- **Tettere foryngelse**: Flere trær binder mer karbon
- **Riktig treslag**: Gran binder mer enn bjørk og furu
- **Gjødsling**: Øker tilveksten (men omdiskutert miljømessig)

### Bevare karbonlagre
- **Unngå avskoging**: Ikke konvertere skog til annen bruk
- **Bevare gammelskog**: Store karbonlagre i jord og biomasse
- **Skåne myr i skog**: Torvjord inneholder mye karbon

### Substitusjonseffekten
- Bruke tre istedenfor stål og betong i bygg
- Tre har lavere klimaavtrykk enn andre materialer
- Karbonet forblir lagret i treproduktene
- Bioenergi erstatter fossil energi (men krever foryngelse)

### Avveininger
- Hogst frigjør karbon, men gir råstoff til substitusjon
- Vern bevarer karbon, men gir ikke råstoff
- Balanse mellom lagring og bruk er komplisert`,
    },
    {
      id: 'nb-2-7-def-substitusjon',
      type: 'definition',
      title: 'Substitusjon (klimaeffekt)',
      content: 'Substitusjonseffekten oppstår når trevirke erstatter materialer med høyere klimaavtrykk. For eksempel har et trehus lavere utslipp enn et tilsvarende betonghus. Når trematerialer erstatter stål, aluminium eller plast, unngås utslipp fra produksjonen av disse materialene. Denne effekten kan være like viktig som selve karbonlagringen i treet.',
    },
    {
      id: 'nb-2-7-example-1',
      type: 'example',
      title: 'Eksempel: Karbonregnskap for et bestand',
      problem: 'Et granbestand på 100 dekar har et stående volum på 25 m³/dekar. Ved hogst tas 80 % av volumet ut som tømmer, resten blir igjen som hogstavfall. Beregn: a) Hvor mye karbon er lagret i bestandet før hogst? b) Hvor mye CO2 frigjøres direkte ved hogst (hogstavfall brytes ned)?',
      solution: `**Løsning:**

**Gitt:**
- Areal: 100 dekar
- Stående volum: 25 m³/dekar
- Uttak: 80 %
- Gran: ca. 450 kg tørrvekt per m³, ca. 50 % karbon

**a) Karbon lagret før hogst:**
Totalt volum: 100 dekar × 25 m³/dekar = 2500 m³
Tørrvekt: 2500 m³ × 450 kg/m³ = 1 125 000 kg = 1125 tonn
Karbon: 1125 tonn × 0,50 = **562,5 tonn C**
(Tilsvarende ca. 2063 tonn CO2 hvis alt frigjøres)

**b) CO2 fra hogstavfall:**
Hogstavfall: 20 % av volumet = 500 m³
Tørrvekt hogstavfall: 500 m³ × 450 kg/m³ = 225 tonn
Karbon i hogstavfall: 225 × 0,50 = 112,5 tonn C
CO2 når dette brytes ned: 112,5 × 3,67 = **413 tonn CO2**

**Kommentar:**
De resterende 80 % (450 tonn C) blir til tømmerprodukter. Noe lagres lenge i bygninger, noe brennes som energi, og noe brytes ned som papir og emballasje. Over tid frigjøres også dette, men substitusjonseffekten kan gi klimagevinst.`,
    },
    {
      id: 'nb-2-7-example-2',
      type: 'example',
      title: 'Eksempel: Klimatilpasning i skogbruket',
      problem: 'Som skogeier i Sør-Norge er du bekymret for klimaendringenes påvirkning på granskogen din. Hvilke tilpasningstiltak kan du vurdere?',
      solution: `**Løsning:**

**Vurdering av risiko:**
- Gran er følsom for tørke og barkbiller
- Varmere somre øker risikoen for skader
- Mer ekstremvær gir økt stormfarerisiko

**Tilpasningstiltak:**

**1. Trevalg ved foryngelse:**
- Vurdere furu på tørre, utsatte områder
- Blandingsskog med løvinnslag gir risikospreding
- Bruke klimatilpasset plantemateriale

**2. Skjøtsel:**
- Tynne tidlig for å gi stabile trær med god rotsystem
- Unngå for tett skog som stresser trærne
- Variert aldersfordeling reduserer skadesår

**3. Hogstalder:**
- Vurdere å hogge tidligere for å redusere risiko
- Men: Tidligere hogst gir lavere karbonlager

**4. Overvåking:**
- Følge med på tegn til tørkestress
- Handle raskt ved barkbilleangrep
- Ha beredskap for stormhogst

**5. Diversifisering:**
- Spre risiko på flere bestand og treslag
- Ikke ha all hogstmoden skog samtidig`,
    },
    {
      id: 'nb-2-7-tip',
      type: 'tip',
      title: 'Tips: Beregn ditt eget karbonavtrykk fra tre',
      content: 'Neste gang du ser et tre, prøv å estimere hvor mye CO2 det har bundet. En tommelfingerregel: Et voksent tre binder ca. 20-25 kg CO2 per år. En kubikkmeter stående granskog inneholder ca. 0,9 tonn CO2. Se deg rundt i skogen og tenk på at alt du ser - stammer, greiner, røtter - er bygget av karbon fra lufta!',
    },
  ],
  exercises: [
    {
      id: 'nb-2-7-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva skjer med CO2 når trær driver fotosyntese?',
      options: [
        { id: 'a', text: 'CO2 tas opp og karbonet bygges inn i treet', isCorrect: true },
        { id: 'b', text: 'CO2 slippes ut i lufta', isCorrect: false },
        { id: 'c', text: 'CO2 omdannes til oksygen', isCorrect: false },
        { id: 'd', text: 'CO2 lagres i jorda uten å påvirke treet', isCorrect: false },
      ],
      solution: 'Ved fotosyntese tar trær opp CO2 fra lufta og bruker solenergi til å omdanne det til sukker (glukose). Karbonet fra CO2 bygges inn i cellulose, lignin og andre forbindelser som utgjør treets biomasse. Oksygen frigjøres som biprodukt.',
    },
    {
      id: 'nb-2-7-ex2',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar hva som menes med at norsk skog er et "karbonsluk", og hvorfor den har blitt det.',
      solution: 'Et karbonsluk er et system som tar opp mer karbon enn det slipper ut. Norsk skog er et karbonsluk fordi årlig tilvekst (ca. 25 mill. tonn CO2 netto binding) overstiger hogst og naturlig nedbrytning. Årsaker: 1) Etter andre verdenskrig var skogen overutnyttet og ung - den har siden vokst til. 2) Store arealer er plantet til med produktiv skog. 3) Hogsten har vært lavere enn tilveksten i flere tiår. 4) Lengre vekstsesong og høyere CO2-nivå har økt tilveksten. Resultatet er at stående volum og karbonlager har økt betydelig de siste 100 årene.',
    },
    {
      id: 'nb-2-7-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvor lagres mest karbon i et norsk skogøkosystem?',
      options: [
        { id: 'a', text: 'I skogsjorda', isCorrect: true },
        { id: 'b', text: 'I de stående trærnes stammer', isCorrect: false },
        { id: 'c', text: 'I bladene/nålene', isCorrect: false },
        { id: 'd', text: 'I lufta over skogen', isCorrect: false },
      ],
      solution: 'I norsk boreal skog lagres omtrent 50 % av karbonet i skogsjorda (humus, organisk materiale). Levende biomasse (stammer, røtter, greiner) utgjør ca. 35 %, og død ved og strø ca. 15 %. Dette betyr at jordkarbonet er svært viktig å bevare.',
    },
    {
      id: 'nb-2-7-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Hva er substitusjonseffekten, og hvorfor er den viktig i klimasammenheng?',
      solution: 'Substitusjonseffekten er klimagevinsten som oppstår når trevirke erstatter materialer med høyere klimaavtrykk. Eksempler: 1) Trehus istedenfor betonghus sparer store CO2-utslipp fra sementproduksjon. 2) Biomasse til energi erstatter fossil olje og gass. 3) Trefiber erstatter plast i emballasje. Substitusjonseffekten er viktig fordi den kan være like stor eller større enn karbonlagringen i selve treet. Et tre som hogges og brukes til byggemateriale kan gi større klimanytte enn om det sto og til slutt råtnet ned, forutsatt at skogen forynges.',
    },
    {
      id: 'nb-2-7-ex5',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvordan påvirker klimaendringer risikoen for granbarkbilleangrep?',
      options: [
        { id: 'a', text: 'Varmere somre og tørkestress øker risikoen for angrep', isCorrect: true },
        { id: 'b', text: 'Kaldere vintre dreper flere biller', isCorrect: false },
        { id: 'c', text: 'Klimaendringer har ingen effekt på barkbiller', isCorrect: false },
        { id: 'd', text: 'Mer nedbør fjerner alle barkbiller', isCorrect: false },
      ],
      solution: 'Varmere og tørrere somre stresser grantrærne og gjør dem mer sårbare for angrep. Samtidig får barkbillene flere generasjoner per år i varmt vær, og flere overlever milde vintre. Dette har ført til økte barkbilleskader i Norge og særlig i Mellom-Europa de siste årene.',
    },
    {
      id: 'nb-2-7-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Diskuter avveiningen mellom å hogge skog for treprodukter (med substitusjonseffekt) versus å la skogen stå for karbonlagring. Hva er argumentene for og mot hver tilnærming?',
      solution: 'For hogst og bruk: 1) Substitusjonseffekten kan gi stor klimagevinst når tre erstatter betong, stål og plast. 2) Treprodukter lagrer karbon, noen i over 100 år. 3) Ung skog binder CO2 raskere enn gammel skog. 4) Skogen gir arbeidsplasser og inntekter. 5) Råtnende trær slipper ut CO2 uansett. Mot hogst/for vern: 1) Hogst frigjør umiddelbart CO2 fra hogstavfall og forstyrrelser i jord. 2) Gammelskog har store stabile karbonlagre, særlig i jorda. 3) Biologisk mangfold i gammelskog har egenverdi. 4) Lang tid før ny skog binder like mye som gammel skog inneholdt. 5) Risiko for at arealet ikke forynges godt. Balanse: Den optimale løsningen avhenger av tidsperspektiv, alternativ bruk av trevirke, og verdien av andre økosystemtjenester. Det finnes ingen enkel fasit.',
    },
  ],
};

// ============================================================================
// Samleksport av alle kapitler
// ============================================================================

export const NATURBRUK_VG1_KAP2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_NATURBRUK_VG1_2_1,
  CHAPTER_NATURBRUK_VG1_2_2,
  CHAPTER_NATURBRUK_VG1_2_3,
  CHAPTER_NATURBRUK_VG1_2_4,
  CHAPTER_NATURBRUK_VG1_2_5,
  CHAPTER_NATURBRUK_VG1_2_6,
  CHAPTER_NATURBRUK_VG1_2_7,
];
