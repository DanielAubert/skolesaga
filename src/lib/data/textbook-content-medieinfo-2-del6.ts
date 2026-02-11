/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Medie- og informasjonskunnskap 2 (VG3) - Del 6: Medieforskning og metode
 *
 * Kapittel 6.1-6.5
 * Dekker LK20-kompetansemål for medie- og informasjonskunnskap 2
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 6.1: Medieforskningens historie og tradisjoner
// ============================================================================

export const CHAPTER_MEDIEINFO_2_6_1: TextbookChapter = {
  id: 'medieinfo-2-6-1',
  courseId: 'medieinfo-2',
  chapterNumber: '6.1',
  title: 'Medieforskningens historie og tradisjoner',
  description: 'Fra effektforskning til resepsjonsteori. Du lærer om de viktigste forskningstradisjonene og hvordan synet på medienes påvirkningskraft har endret seg gjennom historien.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for sentrale tradisjoner og perspektiver innen medieforskning',
    'drøfte hvordan synet på medienes makt og påvirkning har endret seg over tid',
    'forklare forskjellen mellom effektforskning og resepsjonsteori',
  ],
  keyTerms: [
    { term: 'Effektforskning', definition: 'Forskningstradisjon som undersøker hvilke direkte virkninger medieinnhold har på publikum.' },
    { term: 'Bruksstudier', definition: 'Forskningstradisjon som spør hva folk bruker mediene til, i stedet for hva mediene gjør med folk.' },
    { term: 'Resepsjonsteori', definition: 'Forskningstradisjon som undersøker hvordan publikum aktivt tolker og skaper mening av medieinnhold.' },
    { term: 'Kultivering', definition: 'Teori om at langvarig mediebruk gradvis former publikums virkelighetsoppfatning.' },
    { term: 'Agendasetting', definition: 'Teori om at mediene påvirker hva folk tenker på, ved å bestemme hvilke saker som får oppmerksomhet.' },
  ],
  content: [
    {
      id: 'mi2-6-1-intro',
      type: 'text',
      content: `## Medieforskningens utvikling

Medieforskning er et relativt ungt fagfelt som vokste frem i løpet av 1900-tallet, parallelt med utviklingen av massemediene. Fra de første studiene av propagandaens virkninger under verdenskrigene til dagens forskning på algoritmer og sosiale medier, har fagfeltet gjennomgått store forandringer.

Det sentrale spørsmålet har alltid vært: **Hva gjør mediene med oss?** Men svaret har endret seg dramatisk. Mens de tidligste forskerne trodde at mediene hadde nærmest ubegrenset makt over et passivt publikum, har nyere forskning vist et langt mer nyansert bilde der publikum er aktive, kritiske og fortolkende mottakere.

I dette kapittelet skal du lære:
- Hvordan medieforskningen har utviklet seg fra tidlig 1900-tall til i dag
- De viktigste forskningstradisjonene og deres hovedfunn
- Hvordan synet på forholdet mellom medier og publikum har endret seg`,
    },
    {
      id: 'mi2-6-1-def-effektforskning',
      type: 'definition',
      title: 'Effektforskning',
      content: '**Effektforskning** er den eldste tradisjonen innen medieforskning, med røtter tilbake til 1920- og 1930-tallet. Effektforskningen undersøker hvilke direkte virkninger medieinnhold har på publikums holdninger, meninger og atferd. Den tidlige effektforskningen opererte med en **kanylemodell** (også kalt «injeksjonsnålmodellen»), der mediebudskap ble tenkt å virke direkte og ufiltrert på mottakerne, omtrent som en injeksjon.',
    },
    {
      id: 'mi2-6-1-tidlig-forskning',
      type: 'text',
      content: `### Tidlig medieforskning (1920-1950)

De første systematiske studiene av mediepåvirkning ble gjennomført i kjølvannet av første verdenskrig. Forskere som Harold Lasswell analyserte hvordan propaganda ble brukt for å påvirke befolkningen, og konkluderte med at mediene hadde stor makt.

**Kanylemodellen (stimulus-respons-modellen)**
Denne modellen så på kommunikasjon som en enveis prosess der mediene «sprøytet» budskap inn i et passivt publikum. Modellen antok at:
- Alle mottar budskapet likt
- Budskapet har direkte og forutsigbar virkning
- Publikum er passivt og forsvarsløst

**Lasswells kommunikasjonsmodell (1948)**
Lasswell formulerte det berømte spørsmålet som definerte medieforskningen:
*Hvem sier hva, gjennom hvilken kanal, til hvem, med hvilken effekt?*

Denne modellen var nyttig fordi den identifiserte de sentrale elementene i kommunikasjonsprosessen, men den overforenklet ved å ignorere kontekst, fortolkning og tilbakemelding.

**Payne Fund Studies (1929-1933)**
En av de første store empiriske studiene av mediepåvirkning undersøkte filmens virkning på barn og unge. Studien konkluderte med at film kunne påvirke barns holdninger og atferd, noe som førte til debatt om medienes ansvar og behov for regulering.`,
    },
    {
      id: 'mi2-6-1-example-propaganda',
      type: 'example',
      title: 'Eksempel: Propaganda og den sterke effektmodellen',
      content: `Et klassisk eksempel på tidlig effekttenkning er radiostasjonen CBS' sending av «The War of the Worlds» i 1938. Orson Welles dramatiserte H.G. Wells' science fiction-roman som en realistisk nyhetssending om en marsboer-invasjon. Tusenvis av lyttere ble angivelig grepet av panikk fordi de trodde invasjonen var ekte.

Denne hendelsen ble lenge brukt som bevis for medienes enorme makt over et passivt publikum. Men senere forskning har nyansert bildet:
- Bare en liten del av lytterne ble faktisk lurt
- Mange som ble redde, slo over til andre kanaler og skjønte raskt at det var fiksjon
- Avisene overdrev historien fordi de så radio som en truende konkurrent

Eksempelet viser hvordan tidlig medieforskning ofte overvurderte medienes direkte effekt, og hvordan forskning selv kan være preget av rådende antakelser.`,
    },
    {
      id: 'mi2-6-1-exercise-1',
      type: 'exercise',
      title: 'Oppgave 1',
      exerciseType: 'multiple-choice',
      task: 'Hva kjennetegner kanylemodellen i tidlig medieforskning?',
      options: [
        { id: 'a', text: 'Publikum tolker medieinnhold aktivt og selvstendig', isCorrect: false },
        { id: 'b', text: 'Mediebudskap virker direkte og ufiltrert på et passivt publikum', isCorrect: true },
        { id: 'c', text: 'Mediene bestemmer hva folk tenker på, men ikke hva de mener', isCorrect: false },
        { id: 'd', text: 'Publikum bruker mediene for å dekke sosiale og psykologiske behov', isCorrect: false },
      ],
      solution: 'Kanylemodellen (injeksjonsnålmodellen) ser på mediebudskap som noe som «sprøytes» direkte inn i et passivt publikum. Modellen antar at alle mottar budskapet likt og at virkningen er direkte og forutsigbar. Denne modellen var dominerende i tidlig medieforskning, men ble senere kritisert for å overforenkle kommunikasjonsprosessen.',
    },
    {
      id: 'mi2-6-1-def-bruksstudier',
      type: 'definition',
      title: 'Bruksstudier (Uses and Gratifications)',
      content: '**Bruksstudier** (Uses and Gratifications) er en forskningstradisjon som snur effektspørsmålet på hodet. I stedet for å spørre «hva gjør mediene med folk?» spør man «hva gjør folk med mediene?» Tradisjonen ble utviklet fra 1940-tallet og fremover av forskere som Elihu Katz og Jay Blumler. Hovedtanken er at publikum er aktivt og velger medieinnhold for å tilfredsstille bestemte behov — som informasjon, underholdning, sosial tilhørighet og identitetsbygging.',
    },
    {
      id: 'mi2-6-1-nyere-teorier',
      type: 'text',
      content: `### Nyere forskningsteorier (1970-tallet og fremover)

**Agendasetting (McCombs og Shaw, 1972)**
Agendasettingsteorien hevder at mediene kanskje ikke bestemmer *hva* folk mener, men de bestemmer *hva folk tenker på*. Ved å gi visse saker mye dekning og ignorere andre, setter mediene dagsordenen for den offentlige debatten.

**Kultiveringsteorien (George Gerbner, 1970-tallet)**
Gerbner forsket på TV-vold og fant at mennesker som ser mye på TV, har en tendens til å oppfatte verden som farligere og mer voldelig enn den faktisk er. Langvarig mediebruk «kultiverer» altså en bestemt virkelighetsoppfatning.

**Resepsjonsteori (Stuart Hall, 1973)**
Stuart Hall introduserte en modell der medietekster **kodes** av produsenten og **dekodes** av publikum. Hall identifiserte tre leseposisjoner:
- **Foretrukket lesning:** Publikum tolker teksten slik produsenten intenderte
- **Forhandlet lesning:** Publikum aksepterer noe, men tilpasser tolkningen til egne erfaringer
- **Opposisjonell lesning:** Publikum avviser den intenderte meningen og tolker teksten motsatt

**Kulturstudier (Birmingham-skolen)**
Fra 1960-tallet utviklet forskere ved Centre for Contemporary Cultural Studies i Birmingham en tradisjon som studerte medier som del av bredere kulturelle og maktpolitiske strukturer. Klasse, kjønn og etnisitet ble sentrale analysekategorier.`,
    },
    {
      id: 'mi2-6-1-example-hall',
      type: 'example',
      title: 'Eksempel: Stuart Halls kodingsmodell i praksis',
      content: `Tenk deg en nyhetssak om en streik blant lærere:

**Foretrukket lesning** (slik nyhetsprodusenten kanskje intenderer):
«Streiken skaper problemer for elever og foreldre. Det er viktig at partene finner en løsning raskt.»

**Forhandlet lesning** (delvis enig, delvis uenig):
«Ja, streiken er problematisk, men lærerne har gode grunner. De fortjener bedre lønn og arbeidsvilkår.»

**Opposisjonell lesning** (avviser det intenderte budskapet):
«Denne saken er vinklet for å få folk til å vende seg mot lærerne. Mediehuset er eid av kommersielle interesser som ikke vil at fagforeninger skal ha makt.»

Halls modell viser at samme medietekst kan tolkes helt ulikt avhengig av mottakerens bakgrunn, erfaringer og sosiale posisjon. Publikum er ikke passive mottakere, men aktive meningsskapere.`,
    },
    {
      id: 'mi2-6-1-exercise-2',
      type: 'exercise',
      title: 'Oppgave 2',
      exerciseType: 'multiple-choice',
      task: 'Hva menes med «agendasetting» i medieforskningen?',
      options: [
        { id: 'a', text: 'Mediene bestemmer direkte hva folk skal mene om ulike saker', isCorrect: false },
        { id: 'b', text: 'Mediene påvirker hvilke saker folk tenker på ved å gi dem oppmerksomhet', isCorrect: true },
        { id: 'c', text: 'Publikum bruker mediene for å sette sin egen dagsorden', isCorrect: false },
        { id: 'd', text: 'Politikere bruker mediene for å manipulere velgerne', isCorrect: false },
      ],
      solution: 'Agendasetting handler om at mediene påvirker hva folk tenker på, ikke nødvendigvis hva de mener. Ved å gi visse saker mye dekning og ignorere andre, setter mediene dagsordenen for den offentlige debatten. Teorien ble formulert av McCombs og Shaw i 1972.',
    },
    {
      id: 'mi2-6-1-exercise-3',
      type: 'exercise',
      title: 'Oppgave 3',
      task: 'Forklar forskjellen mellom kanylemodellen og Stuart Halls kodingsmodell. Hvilken modell gir etter din mening det beste bildet av hvordan medier påvirker mennesker i dag? Begrunn svaret ditt.',
      difficulty: 'medium',
      solution: 'Kanylemodellen ser på kommunikasjon som enveis, der medier «sprøyter» budskap direkte inn i et passivt publikum. Halls kodingsmodell ser derimot på kommunikasjon som en prosess der produsenter koder budskap og publikum dekoder dem på ulike måter (foretrukket, forhandlet eller opposisjonell lesning). Halls modell gir trolig et bedre bilde av dagens mediesituasjon fordi den tar høyde for at folk er aktive brukere som fortolker medieinnhold ut fra egne erfaringer, verdier og sosiale bakgrunn.',
    },
    {
      id: 'mi2-6-1-exercise-4',
      type: 'exercise',
      title: 'Oppgave 4',
      task: 'Gjør rede for hva bruksstudier (Uses and Gratifications) handler om. Gi eksempler på ulike behov mediebruk kan dekke, og vurder hvor aktuell denne tilnærmingen er i en tid med sosiale medier og strømmetjenester.',
      difficulty: 'medium',
      solution: 'Bruksstudier spør «hva gjør folk med mediene?» i stedet for «hva gjør mediene med folk?» Tilnærmingen hevder at publikum aktivt velger medieinnhold for å dekke behov som informasjon (nyheter), underholdning (serier, filmer), sosial tilhørighet (diskusjon på sosiale medier), identitetsbygging (influencere, livsstilsinnhold) og avkobling (spill, podcast). Med sosiale medier er tilnærmingen svært aktuell fordi brukerne i større grad enn noen gang velger selv hva de eksponeres for — men algoritmestyrt innhold utfordrer tanken om det helt frie valget.',
    },
    {
      id: 'mi2-6-1-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Nøkkelpunkter

- Medieforskningen har utviklet seg fra **kanylemodellen** (direkte, sterk effekt) til mer nyanserte perspektiver
- **Effektforskning** undersøker hva mediene gjør med folk, mens **bruksstudier** spør hva folk gjør med mediene
- **Agendasetting** handler om at mediene bestemmer hva vi tenker på, ikke hva vi mener
- **Kultiveringsteorien** viser at langvarig mediebruk former virkelighetsoppfatningen
- **Stuart Halls kodingsmodell** viser at publikum tolker medieinnhold ulikt (foretrukket, forhandlet, opposisjonell lesning)
- **Kulturstudier** analyserer medier som del av bredere kulturelle og maktpolitiske strukturer`,
    },
    {
      id: 'mi2-6-1-exercise-5',
      type: 'exercise',
      title: 'Oppgave 5',
      task: 'Velg en aktuell mediesak (for eksempel en debatt om sosiale medier, strømmetjenester eller nyhetsdekning). Analyser saken ved hjelp av minst to av teoriene du har lært om i dette kapittelet (agendasetting, kultivering, resepsjonsteori eller bruksstudier). Drøft hva de ulike teoriene kan forklare og hva de eventuelt ikke fanger opp.',
      difficulty: 'vanskelig',
      solution: 'Et godt svar velger en konkret sak og anvender minst to teorier systematisk. For eksempel kan man analysere debatten om skjermtid blant ungdom ved hjelp av kultiveringsteori (mye bruk former virkelighetsoppfatning) og bruksstudier (ungdom bruker sosiale medier for sosial tilhørighet og identitetsbygging). Svaret bør også drøfte begrensninger: kultiveringsteori ble utviklet for TV og fanger kanskje ikke opp den interaktive dimensjonen ved sosiale medier.',
    },
    {
      id: 'mi2-6-1-exercise-6',
      type: 'exercise',
      title: 'Samleoppgave',
      task: 'Lag en tidslinje over medieforskningens utvikling fra 1920-tallet til i dag. For hver periode bør du beskrive det rådende synet på medienes makt, de viktigste forskerne og teoriene, og gi et eksempel på en studie eller hendelse som illustrerer epoken. Drøft avslutningsvis hvilke utfordringer medieforskningen står overfor i dag med algoritmer, kunstig intelligens og sosiale medier.',
      difficulty: 'vanskelig',
      solution: 'Tidslinjen bør inkludere: 1920-40-tallet (kanylemodell, Lasswell, propaganda), 1940-60-tallet (bruksstudier, Katz, begrenset effekt), 1970-tallet (agendasetting, kultivering, Halls kodingsmodell), 1980-2000-tallet (kulturstudier, digital medier), 2010-tallet og fremover (algoritmeforskning, plattformstudier, desinformasjon). Drøftingen bør ta opp at klassiske modeller utfordres av algoritmestyrt innhold, ekkokamre, kunstig intelligens og at skillet mellom produsent og konsument er utvisket i sosiale medier.',
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.2: Kvantitative metoder i medieforskning
// ============================================================================

export const CHAPTER_MEDIEINFO_2_6_2: TextbookChapter = {
  id: 'medieinfo-2-6-2',
  courseId: 'medieinfo-2',
  chapterNumber: '6.2',
  title: 'Kvantitative metoder i medieforskning',
  description: 'Innholdsanalyse, spørreundersøkelser og statistisk analyse. Du lærer hvordan kvantitative metoder brukes for å studere medieinnhold og mediepublikum i stor skala.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for sentrale kvantitative metoder i medieforskning',
    'planlegge og gjennomføre en enkel kvantitativ innholdsanalyse',
    'vurdere styrker og svakheter ved kvantitative metoder',
  ],
  keyTerms: [
    { term: 'Kvantitativ metode', definition: 'Forskningsmetoder som samler inn og analyserer data i form av tall og mengder, ofte med store utvalg.' },
    { term: 'Innholdsanalyse', definition: 'Systematisk metode for å kategorisere og telle forekomster av bestemte egenskaper i medietekster.' },
    { term: 'Spørreundersøkelse', definition: 'Metode der et stort antall respondenter besvarer standardiserte spørsmål, ofte med faste svaralternativer.' },
    { term: 'Representativt utvalg', definition: 'Et utvalg som gjenspeiler sammensetningen i den populasjonen man ønsker å si noe om.' },
    { term: 'Operasjonalisering', definition: 'Prosessen med å gjøre abstrakte begreper målbare ved å definere konkrete indikatorer.' },
  ],
  content: [
    {
      id: 'mi2-6-2-intro',
      type: 'text',
      content: `## Kvantitative metoder — å telle og måle mediene

Kvantitative metoder handler om å samle inn data som kan uttrykkes i tall og analyseres statistisk. Disse metodene gir mulighet til å studere store mengder medieinnhold eller mange mediebrukere samtidig, og å trekke generaliserbare konklusjoner.

Kvantitative metoder i medieforskning brukes blant annet til å:
- Kartlegge representasjon av ulike grupper i mediene
- Måle hvor mye tid folk bruker på ulike medier
- Undersøke holdninger til medieinnhold i befolkningen
- Analysere mønstre i nyhetsdekning over tid

I dette kapittelet skal du lære:
- Hva kvantitativ innholdsanalyse er og hvordan den gjennomføres
- Hvordan spørreundersøkelser brukes i medieforskning
- Styrker og begrensninger ved kvantitative tilnærminger`,
    },
    {
      id: 'mi2-6-2-def-kvantitativ',
      type: 'definition',
      title: 'Kvantitativ metode',
      content: '**Kvantitativ metode** er en forskningsmetode som samler inn data i form av tall og mengder. Dataene analyseres med statistiske verktøy for å avdekke mønstre, sammenhenger og tendenser. Kvantitative metoder kjennetegnes av store utvalg, standardiserte måleinstrumenter, objektivitet og muligheten til å generalisere funnene til en større populasjon. I medieforskning brukes kvantitative metoder for å studere både medieinnhold (innholdsanalyse) og mediebrukere (spørreundersøkelser).',
    },
    {
      id: 'mi2-6-2-innholdsanalyse',
      type: 'text',
      content: `### Kvantitativ innholdsanalyse

Kvantitativ innholdsanalyse er en systematisk metode for å kartlegge hva mediene inneholder. Forskeren definerer kategorier og teller forekomster av bestemte egenskaper i et utvalg medietekster.

**Steg i en innholdsanalyse:**

1. **Definere forskningsspørsmål:** Hva ønsker du å finne ut? For eksempel: «Hvordan er kjønnsfordelingen blant kilder i norske nyheter?»

2. **Velge utvalg:** Hvilke medietekster skal analyseres? For eksempel: alle nyhetssaker fra NRK, VG og Aftenposten i én uke.

3. **Utvikle kodebok:** Definere kategorier og koder for det du skal registrere. For eksempel: Kildens kjønn (mann/kvinne/annet), Sakens tema (politikk/økonomi/kultur osv.), Kildens rolle (ekspert/politiker/vanlig borger).

4. **Gjennomføre koding:** Systematisk gjennomgå materialet og registrere data i henhold til kodeboken.

5. **Analysere data:** Bruke statistikk for å oppsummere og tolke funnene.

6. **Rapportere resultater:** Presentere funn med tabeller, diagrammer og fortolkninger.

**Viktige kvalitetskrav:**
- **Intersubjektivitet:** Ulike kodere bør komme frem til samme resultat
- **Systematikk:** Alle enheter behandles på samme måte
- **Etterprøvbarhet:** Andre skal kunne gjenta studien`,
    },
    {
      id: 'mi2-6-2-example-innholdsanalyse',
      type: 'example',
      title: 'Eksempel: Innholdsanalyse av kjønnsrepresentasjon i nyheter',
      content: `**Forskningsspørsmål:** Hvordan er kjønnsfordelingen blant ekspertkilder i norske TV-nyheter?

**Utvalg:** Alle nyhetssendinger på NRK og TV 2 i to uker (84 sendinger).

**Kodebok (utdrag):**
- Kilde-ID (løpenummer)
- Kildens kjønn (1 = mann, 2 = kvinne, 3 = annet)
- Kildens rolle (1 = ekspert, 2 = politiker, 3 = vanlig borger, 4 = annet)
- Sakens tema (1 = politikk, 2 = økonomi, 3 = sport, 4 = kultur, osv.)

**Funn (fiktive tall):**
| Kategori | Menn | Kvinner |
|----------|------|---------|
| Ekspertkilder | 67 % | 33 % |
| Politikerkilder | 58 % | 42 % |
| Vanlige borgere | 51 % | 49 % |

**Tolkning:** Studien viser en tydelig mannlig overrepresentasjon blant ekspertkilder i norske TV-nyheter. Jo høyere status kilden har, desto større er kjønnsforskjellen. Dette mønsteret er i tråd med funn fra internasjonale studier som Global Media Monitoring Project.`,
    },
    {
      id: 'mi2-6-2-exercise-1',
      type: 'exercise',
      title: 'Oppgave 1',
      exerciseType: 'multiple-choice',
      task: 'Hva er det første steget i en kvantitativ innholdsanalyse?',
      options: [
        { id: 'a', text: 'Utvikle en kodebok med kategorier', isCorrect: false },
        { id: 'b', text: 'Velge ut medietekster som skal analyseres', isCorrect: false },
        { id: 'c', text: 'Definere et klart forskningsspørsmål', isCorrect: true },
        { id: 'd', text: 'Gjennomføre koding av materialet', isCorrect: false },
      ],
      solution: 'Det første steget er alltid å definere et klart forskningsspørsmål. Forskningsspørsmålet styrer alle de etterfølgende valgene: hvilket utvalg du trenger, hvilke kategorier du skal kode, og hvordan dataene skal analyseres. Uten et tydelig spørsmål risikerer man å samle inn data uten retning.',
    },
    {
      id: 'mi2-6-2-def-survey',
      type: 'definition',
      title: 'Spørreundersøkelse (survey)',
      content: '**Spørreundersøkelse** (survey) er en metode der et stort antall respondenter besvarer standardiserte spørsmål, vanligvis med faste svaralternativer. I medieforskning brukes spørreundersøkelser for å kartlegge mediebruk, holdninger til medieinnhold og opplevelser av mediepåvirkning. For at resultatene skal kunne generaliseres, må utvalget være **representativt** — det vil si at det gjenspeiler sammensetningen i den befolkningen man ønsker å si noe om (med hensyn til kjønn, alder, bosted osv.).',
    },
    {
      id: 'mi2-6-2-survey-utdypning',
      type: 'text',
      content: `### Spørreundersøkelser i medieforskning

Spørreundersøkelser er den vanligste metoden for å samle data om folks mediebruk og medieopplevelser.

**Typer spørsmål:**
- **Lukkede spørsmål:** Faste svaralternativer (ja/nei, skala 1-5, flervalg). Enkle å analysere statistisk.
- **Åpne spørsmål:** Respondenten svarer fritt med egne ord. Gir dypere innsikt, men er vanskeligere å analysere kvantitativt.
- **Likert-skala:** Respondenten angir grad av enighet (f.eks. «helt uenig» til «helt enig»). Mye brukt for holdningsmålinger.

**Typiske feilkilder:**
- **Ledende spørsmål:** Spørsmålet er formulert slik at det styrer respondenten mot et bestemt svar
- **Doble spørsmål:** Spørsmålet inneholder to elementer som respondenten kan ha ulike meninger om
- **Sosial ønskelighet:** Respondenten svarer det de tror er «riktig» snarere enn det de faktisk mener
- **Frafall:** Ikke alle som blir spurt velger å svare, noe som kan skape skjevheter

**Eksempel på medieforskning med survey:**
Norsk mediebarometer (SSB) kartlegger hvert år nordmenns mediebruk gjennom spørreundersøkelser. Denne gir verdifull statistikk om for eksempel hvor mange som leser nettaviser, hører på podcast eller bruker sosiale medier.`,
    },
    {
      id: 'mi2-6-2-example-survey',
      type: 'example',
      title: 'Eksempel: Utforming av gode spørsmål',
      content: `**Dårlig spørsmål:** «Synes du ikke at sosiale medier er skadelig for ungdom?»
→ Ledende, inneholder en antakelse og styrer mot «ja».

**Bedre formulering:** «I hvilken grad mener du sosiale medier påvirker ungdoms psykiske helse?»
→ Nøytralt, med svaralternativer på en skala fra «svært positivt» til «svært negativt».

**Dårlig spørsmål:** «Hvor ofte bruker du sosiale medier og nettaviser?»
→ Dobbeltspørsmål — respondenten kan bruke sosiale medier mye og nettaviser lite.

**Bedre formulering:** Still to separate spørsmål:
1. «Hvor mange minutter bruker du på sosiale medier en vanlig dag?»
2. «Hvor mange minutter bruker du på nettaviser en vanlig dag?»

God spørreskjemautforming er avgjørende for datakvaliteten. Hvert spørsmål bør handle om én ting, være nøytralt formulert og ha klare svaralternativer.`,
    },
    {
      id: 'mi2-6-2-exercise-2',
      type: 'exercise',
      title: 'Oppgave 2',
      exerciseType: 'multiple-choice',
      task: 'Hva er en vanlig feilkilde i spørreundersøkelser?',
      options: [
        { id: 'a', text: 'For mange respondenter', isCorrect: false },
        { id: 'b', text: 'Bruk av Likert-skala', isCorrect: false },
        { id: 'c', text: 'Ledende spørsmål som styrer respondenten', isCorrect: true },
        { id: 'd', text: 'Anonyme besvarelser', isCorrect: false },
      ],
      solution: 'Ledende spørsmål er en vanlig feilkilde fordi de styrer respondenten mot et bestemt svar. Spørsmålet «Synes du ikke at...» antyder at forskeren forventer et ja-svar. Gode spørsmål skal være nøytrale og gi respondenten frihet til å svare ut fra sine egne meninger.',
    },
    {
      id: 'mi2-6-2-exercise-3',
      type: 'exercise',
      title: 'Oppgave 3',
      task: 'Forklar hva operasjonalisering betyr i medieforskning. Gi et eksempel der du operasjonaliserer begrepet «mediebruk» slik at det kan måles kvantitativt.',
      difficulty: 'medium',
      solution: 'Operasjonalisering er prosessen med å gjøre et abstrakt begrep målbart. «Mediebruk» er et bredt begrep som kan operasjonaliseres for eksempel som: antall minutter brukt på sosiale medier per dag, antall nyhetsartikler lest per uke, antall strømmetimer per uke, eller antall ulike medieplattformer brukt daglig. Valget av operasjonalisering påvirker hva studien faktisk måler, og det er viktig å begrunne hvorfor man har valgt akkurat denne måten å måle på.',
    },
    {
      id: 'mi2-6-2-exercise-4',
      type: 'exercise',
      title: 'Oppgave 4',
      task: 'Du skal undersøke hvordan ulike medier fremstiller unge mennesker. Lag en enkel plan for en kvantitativ innholdsanalyse: formuler forskningsspørsmål, velg utvalg (hvilke medier og tidsperiode), og lag utkast til en kodebok med minst fire kategorier.',
      difficulty: 'vanskelig',
      solution: 'Et godt svar inneholder: (1) Forskningsspørsmål, f.eks. «Hvordan fremstilles ungdom i norske nettaviser?» (2) Utvalg, f.eks. alle saker som omtaler ungdom/tenåringer i VG, Dagbladet og Aftenposten i to uker. (3) Kodebok med kategorier som: sakens tema (kriminalitet/utdanning/kultur/helse), ungdoms rolle (aktør/offer/ekspert/problem), tonen i saken (positiv/negativ/nøytral), kildebruk (ungdom som kilde ja/nei). God operasjonalisering og klare definisjoner av hver kategori er avgjørende.',
    },
    {
      id: 'mi2-6-2-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Nøkkelpunkter

- **Kvantitative metoder** samler inn data i tall og analyserer dem statistisk
- **Innholdsanalyse** kartlegger medieinnhold systematisk ved hjelp av en kodebok med kategorier
- **Spørreundersøkelser** samler data om mediebruk og holdninger fra et stort antall respondenter
- **Operasjonalisering** gjør abstrakte begreper målbare med konkrete indikatorer
- **Representativt utvalg** er viktig for å kunne generalisere resultater
- Vanlige feilkilder er ledende spørsmål, doble spørsmål og sosial ønskelighet
- Kvantitative metoder gir bredde og generaliserbarhet, men går mindre i dybden enn kvalitative metoder`,
    },
    {
      id: 'mi2-6-2-exercise-5',
      type: 'exercise',
      title: 'Oppgave 5',
      task: 'Formuler tre spørsmål til en spørreundersøkelse om ungdoms bruk av sosiale medier. Minst ett spørsmål skal bruke Likert-skala. Pass på å unngå vanlige feilkilder som ledende eller doble spørsmål.',
      difficulty: 'medium',
      solution: 'Eksempler på gode spørsmål: (1) «Omtrent hvor mange minutter bruker du på sosiale medier en vanlig skoledag?» (faste svaralternativer: under 30 min, 30-60 min, 1-2 timer, 2-3 timer, over 3 timer). (2) «I hvilken grad opplever du at sosiale medier påvirker humøret ditt?» (Likert: helt uenig – helt enig). (3) «Hvilke sosiale medier bruker du daglig?» (flervalg: TikTok, Instagram, Snapchat, YouTube, annet). Viktig: spørsmålene er nøytrale, handler om én ting, og har klare svaralternativer.',
    },
    {
      id: 'mi2-6-2-exercise-6',
      type: 'exercise',
      title: 'Samleoppgave',
      task: 'Drøft styrker og svakheter ved kvantitative metoder i medieforskning sammenlignet med kvalitative metoder. Bruk konkrete eksempler for å illustrere poengene dine. Når er det mest hensiktsmessig å bruke kvantitative metoder, og når bør man heller velge kvalitative tilnærminger?',
      difficulty: 'vanskelig',
      solution: 'Et godt svar drøfter: Styrker — stor bredde, generaliserbarhet, mulighet til å oppdage mønstre og sammenlikne over tid (f.eks. innholdsanalyse av mediedekning gjennom flere år). Svakheter — fanger ikke dybde, kontekst og nyanser, og kategoriseringen kan overforenkle virkeligheten (f.eks. kan en nyhetssak ha ambivalent tone som ikke fanges av «positiv/negativ/nøytral»). Kvantitative metoder egner seg best for å kartlegge omfang og fordeling, mens kvalitative metoder er bedre for å forstå mening, tolkninger og prosesser. Ofte er en kombinasjon (mixed methods) ideelt.',
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.3: Kvalitative metoder i medieforskning
// ============================================================================

export const CHAPTER_MEDIEINFO_2_6_3: TextbookChapter = {
  id: 'medieinfo-2-6-3',
  courseId: 'medieinfo-2',
  chapterNumber: '6.3',
  title: 'Kvalitative metoder i medieforskning',
  description: 'Tekstanalyse, intervjuer og etnografi. Du lærer hvordan kvalitative metoder brukes for å gå i dybden på medietekster, medieproduksjon og medieopplevelser.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for sentrale kvalitative metoder i medieforskning',
    'gjennomføre en enkel kvalitativ analyse av en medietekst',
    'vurdere styrker og svakheter ved kvalitative metoder',
  ],
  keyTerms: [
    { term: 'Kvalitativ metode', definition: 'Forskningsmetoder som undersøker mening, tolkninger og prosesser gjennom dybdeanalyse av et begrenset materiale.' },
    { term: 'Tekstanalyse', definition: 'Systematisk analyse av medietekster for å avdekke meningslag, virkemidler og ideologiske strukturer.' },
    { term: 'Semiotikk', definition: 'Læren om tegn og tegnenes betydning. Brukes til å analysere hvordan medier skaper mening gjennom tegn og koder.' },
    { term: 'Kvalitativt intervju', definition: 'Dybdeintervju der forskeren utforsker informantens erfaringer, meninger og tolkninger gjennom åpne spørsmål.' },
    { term: 'Etnografi', definition: 'Forskningsmetode der forskeren observerer og deltar i en sosial gruppe over tid for å forstå praksis og kultur.' },
  ],
  content: [
    {
      id: 'mi2-6-3-intro',
      type: 'text',
      content: `## Kvalitative metoder — å forstå i dybden

Mens kvantitative metoder teller og måler, handler kvalitative metoder om å **forstå mening**. Kvalitative forskere ønsker å gå i dybden på et begrenset materiale fremfor å kartlegge bredden i et stort. De stiller spørsmål som: Hva betyr denne medieteksten? Hvordan opplever folk medieinnhold? Hvilke mekanismer styrer medieproduksjon?

Kvalitative metoder er særlig nyttige når vi ønsker å:
- Forstå hvordan medietekster skaper mening
- Utforske hvordan mennesker opplever og tolker medieinnhold
- Undersøke praksiser og prosesser i mediebransjen
- Analysere maktforhold og ideologi i mediene

I dette kapittelet skal du lære:
- Hva tekstanalyse og semiotikk innebærer
- Hvordan kvalitative intervjuer gjennomføres
- Hva etnografisk medieforskning er
- Styrker og begrensninger ved kvalitative tilnærminger`,
    },
    {
      id: 'mi2-6-3-def-kvalitativ',
      type: 'definition',
      title: 'Kvalitativ metode',
      content: '**Kvalitativ metode** er en forskningsmetode som undersøker mening, tolkninger og prosesser gjennom grundig analyse av et begrenset materiale. I stedet for å generalisere til store populasjoner, søker kvalitative metoder å forstå fenomener i dybden. Data samles inn gjennom tekstanalyse, intervjuer, observasjon eller feltarbeid, og analyseres med fokus på mønster, temaer og meningsstrukturer. Kvalitative metoder er fortolkende — forskeren er aktivt med på å skape mening av materialet.',
    },
    {
      id: 'mi2-6-3-tekstanalyse',
      type: 'text',
      content: `### Tekstanalyse

I medieforskning er «tekst» et bredt begrep som omfatter alt fra avisartikler og TV-programmer til reklame, sosiale medier-innlegg og filmer. Tekstanalyse er en systematisk tilnærming til å forstå hva tekster betyr og hvordan de skaper mening.

**Nærlesing (close reading)**
Den enkleste formen for tekstanalyse er nærlesing: grundig, detaljert lesning av en tekst der man undersøker språkbruk, virkemidler, struktur og underliggende antakelser. I nærlesning stiller man spørsmål som:
- Hva er det eksplisitte budskapet?
- Hvilke virkemidler brukes?
- Hva tas for gitt? Hva utelates?
- Hvem er avsender og hvem er målgruppe?

**Diskursanalyse**
Diskursanalyse undersøker hvordan språk og medietekster konstruerer virkelighetsforståelse. En diskurs er en bestemt måte å snakke om og forstå et fenomen på. For eksempel kan mediedekningen av innvandring analyseres for å avdekke hvilke diskurser som dominerer: trussel-diskurs, ressurs-diskurs, humanitær diskurs osv.

**Narrativ analyse**
Narrativ analyse undersøker hvordan medietekster er strukturert som fortellinger. Hvem er helten? Hvem er skurken? Hvilken konflikt driver fortellingen? Hvordan løses den? Denne tilnærmingen er særlig nyttig for å analysere nyheter, dokumentarer og reklame.`,
    },
    {
      id: 'mi2-6-3-def-semiotikk',
      type: 'definition',
      title: 'Semiotikk',
      content: '**Semiotikk** er læren om tegn og tegnenes betydning. Semiotikken ble grunnlagt av den sveitsiske lingvisten Ferdinand de Saussure og den amerikanske filosofen Charles S. Peirce. I medieanalyse brukes semiotikken til å forstå hvordan bilder, lyd, ord og symboler skaper mening. Et tegn har to sider: **signifikanten** (uttrykket, det vi sanser) og **signifikatet** (innholdet, det vi forstår). Semiotikken skiller også mellom **denotasjon** (den bokstavelige betydningen) og **konnotasjon** (de overførte assosiasjoner og verdier som knyttes til tegnet).',
    },
    {
      id: 'mi2-6-3-example-semiotikk',
      type: 'example',
      title: 'Eksempel: Semiotisk analyse av et reklamebilde',
      content: `Tenk deg et reklamebilde for en luksusklokke:

**Denotasjon (hva vi ser):**
- En middelaldrende mann i dress sitter i en seilbåt
- Mannen har på seg en klokke
- Havet er blått og solen skinner
- Teksten sier: «Tid for det som betyr noe»

**Konnotasjon (hva vi forbinder med det):**
- Dress → suksess, profesjonalitet
- Seilbåt → frihet, velstand, fritid
- Havet → uendelighet, eventyr, natur
- Solen → optimisme, livskvalitet
- Middelaldrende mann → erfaring, modenhet, kjøpekraft

**Myte (dypere kulturelle betydninger, etter Roland Barthes):**
Reklamen bygger på myten om at materielle ting (en dyr klokke) gir tilgang til et meningsfullt liv med frihet og suksess. Den kobler produktet til drømmen om den perfekte tilværelsen.

En semiotisk analyse avdekker lag av mening som vi kanskje ikke er bevisst når vi ser reklamen i forbifarten.`,
    },
    {
      id: 'mi2-6-3-exercise-1',
      type: 'exercise',
      title: 'Oppgave 1',
      exerciseType: 'multiple-choice',
      task: 'Hva er forskjellen mellom denotasjon og konnotasjon i semiotikken?',
      options: [
        { id: 'a', text: 'Denotasjon handler om tekst, konnotasjon om bilder', isCorrect: false },
        { id: 'b', text: 'Denotasjon er den bokstavelige betydningen, konnotasjon er overførte assosiasjoner', isCorrect: true },
        { id: 'c', text: 'Denotasjon er subjektiv tolkning, konnotasjon er objektiv beskrivelse', isCorrect: false },
        { id: 'd', text: 'Denotasjon brukes i forskning, konnotasjon i journalistikk', isCorrect: false },
      ],
      solution: 'Denotasjon er den bokstavelige, direkte betydningen av et tegn — det vi faktisk ser eller hører. Konnotasjon er de overførte betydningene, assosiasjonene og verdiene som tegnet vekker. For eksempel denoterer et bilde av en rose en blomst, men konnoterer kjærlighet, romantikk eller sorg.',
    },
    {
      id: 'mi2-6-3-intervjuer',
      type: 'text',
      content: `### Kvalitative intervjuer

Kvalitative intervjuer brukes for å utforske menneskers erfaringer, meninger og tolkninger av medier. I motsetning til spørreundersøkelser med faste svaralternativer, bruker kvalitative intervjuer åpne spørsmål som gir informanten rom til å svare med egne ord.

**Typer kvalitative intervjuer:**
- **Semistrukturert intervju:** Forskeren har en intervjuguide med hovedtemaer, men kan følge opp interessante svar med nye spørsmål. Den vanligste formen.
- **Ustrukturert intervju:** Samtalen flyter fritt med minimal styring fra forskeren. Brukes for å utforske et nytt felt.
- **Fokusgruppe:** En gruppe på 6-10 personer diskuterer et tema under ledelse av en moderator. Gir innsikt i sosial meningsdanning.

**Gode intervjuspørsmål:**
- Er åpne: «Kan du fortelle om...?» fremfor «Synes du at...?»
- Er ikke-ledende: lar informanten forme svaret selv
- Utforsker: «Kan du utdype det?», «Hva mener du med det?»
- Er konkrete: «Tenk tilbake på sist du leste en nyhet på mobilen. Hva skjedde?»

### Etnografi og feltarbeid

Etnografisk medieforskning innebærer at forskeren tilbringer tid i en mediekontekst for å observere og forstå praksis innenfra. Det kan være å følge en nyhetsredaksjon gjennom en arbeidsdag, observere familienes TV-titting i hjemmet, eller delta i en online community.

**Kjennetegn ved etnografi:**
- Langvarig tilstedeværelse i feltet
- Kombinerer observasjon, deltakelse og samtaler
- Søker å forstå praksis fra deltakernes perspektiv
- Forskeren er selv et «instrument» som fortolker det som skjer`,
    },
    {
      id: 'mi2-6-3-example-fokusgruppe',
      type: 'example',
      title: 'Eksempel: Fokusgruppe om nyhetsbruk blant ungdom',
      content: `**Forskningsspørsmål:** Hvordan opplever ungdom nyheter på sosiale medier?

**Metode:** Tre fokusgrupper med 7 deltakere i alderen 16-18 år.

**Intervjuguide (utdrag):**
1. «Når hørte dere sist om en nyhetshendelse? Hvor hørte dere om den?»
2. «Hva gjør dere når dere scroller forbi en nyhet på sosiale medier?»
3. «Stoler dere på nyheter dere ser på TikTok eller Instagram? Hvorfor/hvorfor ikke?»
4. «Diskuterer dere nyheter med venner eller familie? I så fall, hvordan?»

**Funn (eksempler):**
Deltakerne beskrev at de sjelden oppsøker nyheter aktivt, men «snubler over dem» på sosiale medier. Flere uttrykte mistillit til overskrifter de opplever som clickbait, men erkjente at de sjelden sjekker kilden bak. Gruppediskusjonen avslørte at ungdommene hadde ulike strategier for å vurdere troverdighet — fra å sjekke kommentarfeltet til å google saken.

Fokusgruppen gir innsikt i sosiale prosesser og gruppedynamikk som individuelle intervjuer ikke fanger opp.`,
    },
    {
      id: 'mi2-6-3-exercise-2',
      type: 'exercise',
      title: 'Oppgave 2',
      exerciseType: 'multiple-choice',
      task: 'Hva kjennetegner et semistrukturert intervju?',
      options: [
        { id: 'a', text: 'Forskeren bruker et standardisert spørreskjema med faste svaralternativer', isCorrect: false },
        { id: 'b', text: 'Forskeren har en intervjuguide med hovedtemaer, men kan følge opp interessante svar', isCorrect: true },
        { id: 'c', text: 'Samtalen flyter helt fritt uten noen form for planlegging', isCorrect: false },
        { id: 'd', text: 'Forskeren stiller bare ja/nei-spørsmål', isCorrect: false },
      ],
      solution: 'Et semistrukturert intervju kjennetegnes av at forskeren har en intervjuguide med planlagte hovedtemaer, men at det samtidig er rom for å følge opp interessante svar med oppfølgingsspørsmål. Denne fleksibiliteten gjør at forskeren kan utforske uventede temaer som dukker opp, samtidig som intervjuet holder en viss struktur.',
    },
    {
      id: 'mi2-6-3-exercise-3',
      type: 'exercise',
      title: 'Oppgave 3',
      task: 'Velg et reklamebilde fra en avis, et magasin eller sosiale medier. Gjennomfør en enkel semiotisk analyse: beskriv først denotasjonen (hva du bokstavelig talt ser), deretter konnotasjonene (hvilke assosiasjoner og verdier bildet formidler). Hvem er målgruppen, og hvilken «myte» bygger reklamen på?',
      difficulty: 'medium',
      solution: 'Et godt svar beskriver denotasjonen konkret og presist (farger, personer, gjenstander, tekst), og knytter deretter konnotasjoner til kulturelle verdier og assosiasjoner. Mytebegrepet (fra Barthes) handler om dypere kulturelle fortellinger — for eksempel myten om at ungdom betyr frihet, eller at natur betyr autentisitet. Målgruppen bør identifiseres ut fra reklamens virkemidler.',
    },
    {
      id: 'mi2-6-3-exercise-4',
      type: 'exercise',
      title: 'Oppgave 4',
      task: 'Lag en intervjuguide med fem spørsmål for et kvalitativt intervju om ungdoms forhold til nyhetsmedier. Spørsmålene skal være åpne og ikke-ledende. Begrunn kort hvorfor du har valgt disse spørsmålene.',
      difficulty: 'medium',
      solution: 'Gode spørsmål er åpne, konkrete og ikke-ledende. Eksempel: (1) «Kan du beskrive en vanlig dag — når møter du nyheter?» (kartlegger praksis). (2) «Kan du fortelle om sist du leste en nyhet du fant interessant?» (konkret erfaring). (3) «Hva gjør du når du er usikker på om en nyhet er sann?» (kildekritikk). (4) «Hender det at du diskuterer nyheter med venner? Fortell.» (sosial dimensjon). (5) «Har du noen gang endret mening om noe etter å ha lest en nyhetssak?» (mediepåvirkning).',
    },
    {
      id: 'mi2-6-3-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Nøkkelpunkter

- **Kvalitative metoder** går i dybden på mening, tolkninger og prosesser
- **Tekstanalyse** undersøker medietekster gjennom nærlesing, diskursanalyse eller narrativ analyse
- **Semiotikk** analyserer hvordan tegn skaper mening gjennom denotasjon og konnotasjon
- **Kvalitative intervjuer** bruker åpne spørsmål for å utforske informanters erfaringer
- **Fokusgrupper** gir innsikt i sosial meningsdanning i grupper
- **Etnografi** innebærer langvarig tilstedeværelse i en mediekontekst
- Kvalitative metoder gir dybde og nyanser, men resultatene er ikke like generaliserbare som kvantitative studier`,
    },
    {
      id: 'mi2-6-3-exercise-5',
      type: 'exercise',
      title: 'Oppgave 5',
      task: 'Velg en kort nyhetssak fra en nettavis. Gjennomfør en enkel diskursanalyse: hvilke ord og uttrykk brukes for å beskrive saken? Hvilken virkelighetsforståelse bygger teksten opp? Er det alternative måter saken kunne vært fremstilt på?',
      difficulty: 'vanskelig',
      solution: 'Et godt svar identifiserer konkrete språkvalg og knytter dem til bredere diskurser. For eksempel: Dersom en sak om innvandring bruker ord som «strøm», «bølge» og «press», bygger den opp en trussel-diskurs med naturkatastrofe-metaforer. En alternativ fremstilling kunne brukt ord som «mennesker på flukt», «bidragsytere» og «mangfold», som aktiverer en humanitær eller ressurs-diskurs. Analysen bør vise bevissthet om at språkvalg aldri er nøytrale.',
    },
    {
      id: 'mi2-6-3-exercise-6',
      type: 'exercise',
      title: 'Samleoppgave',
      task: 'Velg et medietema du er opptatt av (for eksempel fremstilling av kjønn i reklame, nyhetsdekning av klimaendringer, eller influencerkultur). Beskriv hvordan du ville undersøkt dette temaet med en kvalitativ metode. Velg mellom tekstanalyse, intervju eller fokusgruppe. Begrunn metodevalget, beskriv materialet du ville analysert, og forklar hvilken type innsikt du håper å oppnå.',
      difficulty: 'vanskelig',
      solution: 'Svaret bør vise forståelse for sammenhengen mellom forskningsspørsmål og metodevalg. Eksempel: «Jeg ville undersøkt hvordan ungdom tolker influencer-reklame gjennom fokusgrupper, fordi jeg er interessert i hvordan ungdom diskuterer og forhandler mening kollektivt. Jeg ville rekruttert tre grupper à seks deltakere (16-18 år), vist dem tre eksempler på sponsede innlegg på Instagram, og stilt åpne spørsmål om hvordan de opplever innholdet, om de legger merke til at det er reklame, og hvordan det påvirker tilliten til influenceren.»',
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.4: Publikumsforskning
// ============================================================================

export const CHAPTER_MEDIEINFO_2_6_4: TextbookChapter = {
  id: 'medieinfo-2-6-4',
  courseId: 'medieinfo-2',
  chapterNumber: '6.4',
  title: 'Publikumsforskning',
  description: 'Publikumsmålinger, brukeratferd og mediebruk. Du lærer hvordan mediebransjen og forskere kartlegger og forstår publikums medievaner og adferdsmønstre.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for ulike metoder for å måle og forstå mediebruk',
    'drøfte hvordan publikumsmålinger brukes av mediebransjen',
    'vurdere utfordringer og etiske spørsmål knyttet til overvåking av brukeratferd',
  ],
  keyTerms: [
    { term: 'Publikumsmåling', definition: 'Systematisk innsamling av data om mediepublikums størrelse, sammensetning og atferd.' },
    { term: 'Rating', definition: 'Måltall for hvor mange som ser, hører eller leser et bestemt medieinnhold.' },
    { term: 'Brukeratferd', definition: 'Hvordan publikum faktisk bruker medier — hva de klikker på, hvor lenge de ser, og hvilke mønstre som oppstår.' },
    { term: 'Algoritme', definition: 'Automatiserte regler som bestemmer hvilket innhold en bruker får se, basert på data om tidligere atferd og preferanser.' },
    { term: 'Filterboble', definition: 'Fenomen der algoritmestyrt innhold skaper en personlig informasjonsboble som begrenser eksponeringen for andre perspektiver.' },
  ],
  content: [
    {
      id: 'mi2-6-4-intro',
      type: 'text',
      content: `## Publikumsforskning — hvem ser, leser og lytter?

Publikumsforskning handler om å forstå hvem medias publikum er, hva de bruker mediene til, og hvordan mediebruken endrer seg over tid. For mediebedriftene er dette avgjørende: annonseinntekter avhenger av publikumstall, og redaksjonelle valg påvirkes av hva publikum engasjerer seg i.

Men publikumsforskning handler om mer enn bare tall. Den berører også grunnleggende spørsmål om demokrati, makt og personvern: Hva vet mediebedriftene og teknologiselskapene om oss? Hvordan brukes denne kunnskapen? Og hva skjer med den offentlige samtalen når algoritmer bestemmer hva hver enkelt av oss ser?

I dette kapittelet skal du lære:
- Hvordan tradisjonelle og digitale publikumsmålinger fungerer
- Hva brukerdata og algoritmestyrt innhold innebærer
- Hvordan mediebruk har endret seg i den digitale tidsalderen
- Etiske utfordringer knyttet til overvåking av brukeratferd`,
    },
    {
      id: 'mi2-6-4-def-publikumsmaaling',
      type: 'definition',
      title: 'Publikumsmåling',
      content: '**Publikumsmåling** er systematisk innsamling av data om mediepublikums størrelse, sammensetning og atferd. Tradisjonelt har dette skjedd gjennom utvalgsundersøkelser (et panel som representerer befolkningen), men i den digitale tidsalderen kan brukeratferd måles direkte gjennom digitale spor — klikk, scroll, visninger og tid brukt på innhold. I Norge er Kantar det sentrale byrået for TV-målinger, mens Mediebedriftenes Landsforening (MBL) og SSBs mediebarometer er viktige kilder for bredere mediebruksdata.',
    },
    {
      id: 'mi2-6-4-tradisjonell',
      type: 'text',
      content: `### Tradisjonelle publikumsmålinger

**TV-målinger**
I Norge bruker Kantar et TV-panel bestående av rundt 1000 husstander som representerer den norske befolkningen. Disse husstandene har et måleapparat (people meter) koblet til TV-en som registrerer hva som ses og av hvem. Ut fra panelet beregnes seertall for alle programmer.

**Viktige begreper:**
- **Rating:** Prosentandelen av befolkningen som ser et program
- **Markedsandel (share):** Prosentandelen av de som ser TV på et gitt tidspunkt som ser et bestemt program
- **Rekkevidde (reach):** Hvor mange unike personer som har sett minst ett minutt av et program

**Radiolytting**
PPM-målinger (Portable People Meter) og dagbøker brukes for å måle radiolytting. Lytterne har med seg en liten enhet som registrerer hvilke radiokanaler de er eksponert for.

**Lesertall**
Forbruker & Media er en stor undersøkelse som kartlegger nordmenns mediebruk, inkludert avislesing, magasiner og nettbruk.

**Begrensninger ved tradisjonelle målinger:**
- Panelet representerer ikke nødvendigvis alle grupper like godt
- Måler ikke oppmerksomhet — bare at TV-en er på
- Fanger ikke opp tidsforsinkelsesseeing (opptak, strømming)
- Blir stadig mer utfordret av digital mediebruk`,
    },
    {
      id: 'mi2-6-4-example-seertall',
      type: 'example',
      title: 'Eksempel: Seertall og mediestrategi',
      content: `La oss se på hvordan seertall brukes i praksis:

**Scenario:** NRKs dramaserie «Lykkeland» har premiere en søndag kveld.

**Seertall etter første episode:**
- 823 000 seere på lineær TV (rating: ca. 19 %)
- 340 000 strømminger på NRK TV innen en uke
- Totalt: over 1,1 millioner seere

**Hva betyr tallene?**
- For NRK: Dokumentasjon på at lisensfinansiert innhold når et bredt publikum (viktig for NRKs legitimitet)
- For annonsører (i kommersielle kanaler): Grunnlag for å fastsette reklamepris
- For programutviklere: Bekrefter at norsk historisk drama har et stort publikum
- For bransjen: Viser at strømmetall utgjør en stadig større del av totalseertallet

Tallene påvirker fremtidige investeringer — en suksess fører gjerne til flere sesonger og lignende produksjoner.`,
    },
    {
      id: 'mi2-6-4-exercise-1',
      type: 'exercise',
      title: 'Oppgave 1',
      exerciseType: 'multiple-choice',
      task: 'Hva er forskjellen mellom «rating» og «markedsandel» (share) i TV-målinger?',
      options: [
        { id: 'a', text: 'Rating måler kvaliteten, share måler kvantiteten', isCorrect: false },
        { id: 'b', text: 'Rating viser andelen av alle som ser TV, share viser andelen av hele befolkningen', isCorrect: false },
        { id: 'c', text: 'Rating viser andelen av befolkningen som ser programmet, share viser andelen av de som ser TV akkurat da', isCorrect: true },
        { id: 'd', text: 'Rating gjelder nett-TV, share gjelder lineær TV', isCorrect: false },
      ],
      solution: 'Rating angir hvor stor andel av hele befolkningen som ser et program (for eksempel 19 % av alle nordmenn). Markedsandel (share) angir hvor stor andel av de som faktisk ser TV på det tidspunktet, som ser akkurat det programmet. En kanal kan ha lav rating (få i befolkningen ser TV kl. 14), men høy share (de fleste som ser TV akkurat da, ser den kanalen).',
    },
    {
      id: 'mi2-6-4-digital',
      type: 'text',
      content: `### Digital brukeratferd og algoritmestyrt innhold

I den digitale tidsalderen genererer hver enkelt mediebruker enorme mengder data. Hvert klikk, hver likt post, hver strømmet serie og hvert google-søk etterlater digitale spor som samles inn og analyseres.

**Hva måles digitalt?**
- **Sidevisninger:** Hvor mange ganger en side lastes
- **Unike brukere:** Antall forskjellige personer som besøker en side
- **Tid brukt:** Hvor lenge en bruker er på en side eller ser et videoklipp
- **Klikkrate (CTR):** Andelen som klikker på en lenke eller annonse
- **Engasjement:** Likes, delinger, kommentarer, lagringer
- **Scrolldybde:** Hvor langt ned på siden brukeren leser
- **Konvertering:** Handling som annonsøren ønsker (kjøp, abonnement, registrering)

**Algoritmer og personalisering**
Medieplattformer som Facebook, TikTok, YouTube og Spotify bruker algoritmer som analyserer brukerdata for å anbefale innhold. Algoritmene lærer av brukerens atferd og viser mer av det brukeren allerede engasjerer seg med.

**Konsekvenser:**
- **Filterbobler:** Brukeren eksponeres hovedsakelig for innhold som bekrefter eksisterende interesser og synspunkter
- **Ekkokamre:** Grupper av like meninger forsterker hverandre
- **Engasjementsdrevet innhold:** Kontroversielt, emosjonelt og polariserende innhold spres mer fordi det genererer engasjement
- **Tap av felles offentlighet:** Når alle ser forskjellig innhold, svekkes den felles referanserammen som offentlig debatt bygger på`,
    },
    {
      id: 'mi2-6-4-example-algoritmer',
      type: 'example',
      title: 'Eksempel: Algoritmenes virkning — fra underholdning til politikk',
      content: `**Scenario 1: Underholdning**
Maria ser én YouTube-video om matlagning. Algoritmen anbefaler lignende videoer. Etter en uke er hele forsiden hennes fylt med matvideoer. Maria opplever YouTube som en matkanal — men venninnen Sara, som ser på håndarbeid, opplever en helt annen YouTube.

**Scenario 2: Politikk**
Anders søker på «innvandring Norge» og klikker på en artikkel som er kritisk til innvandring. Algoritmen registrerer dette og viser flere lignende artikler. Etter en stund ser Anders hovedsakelig innhold som bekrefter hans skepsis — han opplever at «alle» deler hans syn. Dette er filterboblen i praksis.

**Scenario 3: Nyhetsstrøm**
TikToks algoritme viser 17-årige Lea korte nyhetsklipp fra brukerkontoer hun ikke følger, fordi algoritmen har lært at hun engasjerer seg i slike klipp. Men klippene er ofte dramatiserte, kontekstløse og vinklet for å skape sterke reaksjoner. Lea får et forvrengt bilde av verden uten å være klar over det.

Disse eksemplene viser at algoritmestyrt innhold ikke er nøytralt — det former vår oppfatning av virkeligheten på systematiske måter.`,
    },
    {
      id: 'mi2-6-4-exercise-2',
      type: 'exercise',
      title: 'Oppgave 2',
      exerciseType: 'multiple-choice',
      task: 'Hva menes med «filterboble» i sammenheng med algoritmestyrt innhold?',
      options: [
        { id: 'a', text: 'En teknisk feil som gjør at innhold ikke lastes', isCorrect: false },
        { id: 'b', text: 'Et bevisst valg brukeren tar om å filtrere bort uønsket innhold', isCorrect: false },
        { id: 'c', text: 'At algoritmer skaper en personlig informasjonsboble som begrenser hva man eksponeres for', isCorrect: true },
        { id: 'd', text: 'Et markedsføringsverktøy som bedrifter bruker for å nå riktig målgruppe', isCorrect: false },
      ],
      solution: 'Filterboble er et begrep lansert av Eli Pariser som beskriver fenomenet der algoritmestyrt innhold skaper en personlig informasjonsboble rundt brukeren. Algoritmen viser mer av det brukeren allerede engasjerer seg med, og brukeren eksponeres i stadig mindre grad for andre perspektiver og interesser. Dette kan begrense den enkeltes tilgang til et mangfold av synspunkter.',
    },
    {
      id: 'mi2-6-4-exercise-3',
      type: 'exercise',
      title: 'Oppgave 3',
      task: 'Forklar forskjellen mellom tradisjonelle publikumsmålinger (for eksempel TV-panel) og digitale målinger. Hva er fordelene og ulempene med hver tilnærming?',
      difficulty: 'medium',
      solution: 'Tradisjonelle målinger bruker et representativt panel som gjenspeiler befolkningen, men måler et begrenset antall husstander og fanger ikke opp oppmerksomhet (bare at TV-en er på). Digitale målinger samler data fra alle brukere automatisk og gir mye mer detaljerte data (klikk, tid, engasjement), men reiser personvernsspørsmål, måler ikke nødvendigvis faktisk oppmerksomhet, og dataene eies av teknologiselskapene snarere enn av uavhengige forskere.',
    },
    {
      id: 'mi2-6-4-exercise-4',
      type: 'exercise',
      title: 'Oppgave 4',
      task: 'Gjennomfør en liten selvundersøkelse av egen mediebruk i én dag. Registrer hvilke medier du bruker, hvor lenge, og hva du bruker dem til (informasjon, underholdning, kommunikasjon, annet). Reflekter over funnene: overrasker noe deg? Hva sier mediebruken din om deg som mediepublikum?',
      difficulty: 'medium',
      solution: 'Et godt svar inneholder en systematisk oversikt over mediebruk gjennom en dag, med tidsbruk og formål. Refleksjonen bør gå utover bare å rapportere: eleven bør vurdere hva mediebruken forteller om egne behov (jf. bruksstudier), om det er mønster de ikke var klar over, og om algoritmer påvirker hva de ser. Sammenligning med Norsk mediebarometer kan gi perspektiv.',
    },
    {
      id: 'mi2-6-4-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Nøkkelpunkter

- **Publikumsmålinger** kartlegger mediepublikums størrelse, sammensetning og atferd
- Tradisjonelle målinger bruker **paneler** (TV-meter, dagbøker), mens digitale målinger registrerer **brukeratferd direkte**
- **Rating** viser andel av befolkningen, **markedsandel** viser andel av de som ser TV
- **Algoritmer** analyserer brukerdata og anbefaler personalisert innhold
- **Filterbobler** og **ekkokamre** kan begrense tilgangen til mangfold av perspektiver
- Digital mediebruk genererer enorme mengder data som reiser spørsmål om **personvern** og **demokrati**`,
    },
    {
      id: 'mi2-6-4-exercise-5',
      type: 'exercise',
      title: 'Oppgave 5',
      task: 'Drøft fordeler og ulemper ved algoritmestyrt innhold for den enkelte bruker og for samfunnet. Bruk begrepene filterboble, ekkokammer og engasjementsdrevet innhold i svaret ditt.',
      difficulty: 'vanskelig',
      solution: 'Fordeler for brukeren: relevant innhold, tidsbesparelse, oppdager nytt innen egne interesser. Ulemper for brukeren: filterboble begrenser perspektiver, ekkokammer forsterker ensidige synspunkter, engasjementsdrevet innhold prioriterer det opprørende og kontroversielle. For samfunnet: algoritmene kan undergrave felles offentlighet og informert demokratisk debatt, da borgerne lever i ulike informasjonsvirkeligheter. Samtidig gjør algoritmene medieinnhold tilgjengelig for flere. Drøftingen bør være balansert og vise forståelse for kompleksiteten.',
    },
    {
      id: 'mi2-6-4-exercise-6',
      type: 'exercise',
      title: 'Samleoppgave',
      task: 'Publikumsforskning har gått fra å måle seertall på TV til å spore alt vi gjør på digitale plattformer. Drøft hvordan denne utviklingen påvirker forholdet mellom mediebransjen og publikum. Hva betyr det for personvernet, for demokratiet og for medienes innhold at brukeratferd kan spores og analyseres i detalj? Bruk eksempler for å belyse argumentene dine.',
      difficulty: 'vanskelig',
      solution: 'Et godt svar drøfter utviklingen systematisk med flere perspektiver: (1) Personvern — brukere er ofte ikke klar over omfanget av datainnsamling; GDPR og samtykke er viktige men utilstrekkelige tiltak. (2) Demokrati — når medieinnhold styres av engasjementsalgoritmer, prioriteres det polariserende; felles referanserammer svekkes. (3) Innhold — klikkjag kan føre til at medier prioriterer det sensasjonelle over det vesentlige. (4) Makt — teknologiselskapene kontrollerer data og algoritmer som medieselskapene er avhengige av. Eksempler bør være konkrete og aktuelle.',
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6.5: Forskningsetikk og kildekritikk
// ============================================================================

export const CHAPTER_MEDIEINFO_2_6_5: TextbookChapter = {
  id: 'medieinfo-2-6-5',
  courseId: 'medieinfo-2',
  chapterNumber: '6.5',
  title: 'Forskningsetikk og kildekritikk',
  description: 'Etiske retningslinjer, reliabilitet og validitet. Du lærer å vurdere forskning kritisk og å forstå hvilke etiske krav som stilles til medieforskning.',
  estimatedMinutes: 20,
  competenceGoals: [
    'gjøre rede for sentrale forskningsetiske prinsipper',
    'vurdere reliabilitet og validitet i medieforskning',
    'anvende kildekritiske prinsipper på forskningsresultater og medieinnhold',
  ],
  keyTerms: [
    { term: 'Forskningsetikk', definition: 'De etiske normene og retningslinjene som styrer hvordan forskning bør gjennomføres for å ivareta deltakere og samfunn.' },
    { term: 'Reliabilitet', definition: 'Pålitelighet — om forskningen gir konsistente og etterprøvbare resultater.' },
    { term: 'Validitet', definition: 'Gyldighet — om forskningen faktisk måler det den er ment å måle.' },
    { term: 'Informert samtykke', definition: 'At forskningsdeltakere får tilstrekkelig informasjon om studien og frivillig samtykker til å delta.' },
    { term: 'Kildekritikk', definition: 'Systematisk vurdering av en kildes troverdighet, relevans og pålitelighet.' },
  ],
  content: [
    {
      id: 'mi2-6-5-intro',
      type: 'text',
      content: `## Forskningsetikk og kildekritikk — kvalitet og ansvar

All forskning må følge etiske prinsipper som beskytter de som deltar, og kvalitetskrav som sikrer at resultatene er pålitelige. Medieforskning har egne etiske utfordringer fordi den ofte studerer menneskers meninger, opplevelser og mediebruk — noe som kan være privat og sensitivt.

I tillegg er kildekritikk en helt avgjørende ferdighet i medieforskning. Forskere må vurdere sine egne kilder grundig, og elever og borgere bør kunne vurdere forskningsresultater kritisk — spesielt når de presenteres i mediene, der nuanser ofte forsvinner.

I dette kapittelet skal du lære:
- De viktigste forskningsetiske prinsippene
- Hva reliabilitet og validitet betyr og hvorfor det er viktig
- Hvordan du kan vurdere forskningsresultater kildekritisk
- Vanlige feil og fallgruver i medieforskning`,
    },
    {
      id: 'mi2-6-5-def-etikk',
      type: 'definition',
      title: 'Forskningsetikk',
      content: '**Forskningsetikk** er det settet av normer og retningslinjer som styrer hvordan forskning bør gjennomføres. De viktigste prinsippene er **respekt for mennesker** (informert samtykke, frivillig deltakelse), **konfidensialitet** (personopplysninger beskyttes), **ikke skade** (deltakere skal ikke utsettes for fysisk eller psykisk belastning), og **integritet** (ærlig rapportering av funn, ingen fabrikasjon eller forfalskning av data). I Norge er De nasjonale forskningsetiske komiteene (FEK) og Norsk senter for forskningsdata (NSD/Sikt) sentrale institusjoner for forskningsetikk.',
    },
    {
      id: 'mi2-6-5-etiske-prinsipper',
      type: 'text',
      content: `### Grunnleggende forskningsetiske prinsipper

**1. Informert samtykke**
Alle som deltar i forskning, skal få vite hva studien handler om, hva deltakelsen innebærer, og at de når som helst kan trekke seg uten konsekvenser. Samtykket skal være frivillig og informert.

**2. Konfidensialitet og anonymitet**
Forskeren har plikt til å beskytte deltakernes personopplysninger. Data skal lagres trygt, og resultater skal presenteres slik at enkeltpersoner ikke kan identifiseres.

**3. Ikke skade**
Forskningen skal ikke påføre deltakerne unødvendig belastning — verken fysisk, psykisk eller sosialt. Forskeren må vurdere risikoen på forhånd.

**4. Integritet og ærlighet**
Forskeren skal rapportere sine funn ærlig, ikke fabrikere eller forfalske data, og ikke plagiere andres arbeid. Uventede eller «uønskede» funn skal også rapporteres.

**5. Uavhengighet**
Forskningen skal ikke styres av økonomiske eller politiske interesser. Oppdragsgivere og finansieringskilder skal oppgis, slik at leseren kan vurdere mulige interessekonflikter.

### Forskningsetikk i medieforskning

Medieforskning reiser noen særskilte etiske spørsmål:
- **Forskning på nettdebatt:** Er innlegg i åpne kommentarfelt offentlige og dermed tilgjengelige for forskning, eller har brukerne en forventning om privatliv?
- **Forskning på barn og unge:** Ungdom under 16 år krever foreldresamtykke. Hvordan sikre frivillig deltakelse?
- **Observasjon av mediebruk:** Å studere folks mediebruk kan oppleves som overvåking. Hvor går grensen?
- **Sensitive temaer:** Forskning på for eksempel hatprat eller medietraumer krever ekstra etisk varsomhet.`,
    },
    {
      id: 'mi2-6-5-example-etikk',
      type: 'example',
      title: 'Eksempel: Etiske dilemmaer i medieforskning',
      content: `**Case 1: Forskning på hatprat i kommentarfelt**
En forsker vil analysere hatprat i kommentarfeltene til store norske nettaviser. Kommentarene er offentlig tilgjengelige. Er dette etisk uproblematisk?

Selv om kommentarene er offentlige, kan brukerne ha skrevet dem uten å tenke på at de ville bli gjenstand for forskning. Forskeren bør:
- Anonymisere alt materiale slik at enkeltbrukere ikke kan identifiseres
- Vurdere om det er nødvendig å sitere ordrett (som kan gjøre det søkbart)
- Melde prosjektet til NSD/Sikt for vurdering

**Case 2: Fokusgruppe med tenåringer om kroppspress i medier**
En forsker vil gjennomføre fokusgrupper med 15-åringer om hvordan sosiale medier påvirker kroppsbildet.

Etiske hensyn:
- Foreldresamtykke er nødvendig (deltakerne er under 16)
- Temaet er sensitivt og kan vekke vanskelige følelser
- Forskeren bør ha en plan for oppfølging hvis noen blir berørt
- Deltakerne må trygt kunne velge å ikke svare eller trekke seg

Disse eksemplene viser at etisk forskning krever kontinuerlig refleksjon og avveining, ikke bare formell godkjenning.`,
    },
    {
      id: 'mi2-6-5-exercise-1',
      type: 'exercise',
      title: 'Oppgave 1',
      exerciseType: 'multiple-choice',
      task: 'Hva innebærer prinsippet om informert samtykke i forskning?',
      options: [
        { id: 'a', text: 'At forskeren informerer offentligheten om resultatene', isCorrect: false },
        { id: 'b', text: 'At deltakerne får informasjon om studien og frivillig samtykker til å delta', isCorrect: true },
        { id: 'c', text: 'At forskerens arbeidsgiver godkjenner prosjektet', isCorrect: false },
        { id: 'd', text: 'At alle kilder i studien oppgis i litteraturlisten', isCorrect: false },
      ],
      solution: 'Informert samtykke betyr at forskningsdeltakere skal få tilstrekkelig informasjon om hva studien handler om, hva deltakelsen innebærer, og hvordan data vil bli brukt. Deltakelsen skal være frivillig, og deltakerne skal kunne trekke seg når som helst uten å oppgi grunn.',
    },
    {
      id: 'mi2-6-5-def-reliabilitet',
      type: 'definition',
      title: 'Reliabilitet og validitet',
      content: '**Reliabilitet** (pålitelighet) handler om hvorvidt en studie gir konsistente og etterprøvbare resultater. Hvis andre forskere bruker samme metode på samme materiale og får tilsvarende resultater, har studien høy reliabilitet. **Validitet** (gyldighet) handler om hvorvidt studien faktisk måler det den er ment å måle. En studie kan ha høy reliabilitet men lav validitet — for eksempel dersom et spørreskjema gir konsistente svar, men spørsmålene egentlig måler noe annet enn det forskeren tror.',
    },
    {
      id: 'mi2-6-5-kvalitet',
      type: 'text',
      content: `### Reliabilitet og validitet i medieforskning

**Reliabilitet (pålitelighet)**
En studie har høy reliabilitet dersom den gir konsistente resultater under like forhold.

*I kvantitativ forskning:*
- **Interkoderreliabilitet:** Hvis to kodere analyserer samme medietekst og kommer til samme resultat, er reliabiliteten god
- **Test-retest:** Hvis samme test gir samme resultat ved gjentatte målinger, er reliabiliteten god
- **Intern konsistens:** Flere spørsmål som skal måle det samme, bør gi sammenfallende svar

*I kvalitativ forskning:*
- **Transparens:** Forskeren beskriver metode og analytisk prosess så grundig at andre kan følge resonnementet
- **Systematikk:** Analysen følger en konsistent fremgangsmåte
- **Refleksivitet:** Forskeren reflekterer over hvordan egen bakgrunn og posisjon kan påvirke tolkningen

**Validitet (gyldighet)**
En studie har høy validitet dersom den faktisk måler det den sier den måler.

- **Intern validitet:** Kan vi stole på at sammenhengen vi finner er reell, og ikke skyldes andre faktorer?
- **Ekstern validitet:** Kan funnene generaliseres utover det spesifikke utvalget?
- **Begrepsvaliditet:** Er de operasjonaliserte målene gode indikatorer for de begrepene vi ønsker å studere?

**Eksempel:** En studie måler «tillit til medier» ved å spørre «Leser du nettaviser?» Denne operasjonaliseringen har lav begrepsvaliditet — det å lese nettaviser sier lite om tillit. En bedre operasjonalisering ville vært å bruke en Likert-skala: «I hvilken grad stoler du på at norske nettaviser gir deg korrekt informasjon?»`,
    },
    {
      id: 'mi2-6-5-example-kildekritikk',
      type: 'example',
      title: 'Eksempel: Kildekritisk vurdering av en medieforskningsstudie',
      content: `**Studie:** «Sosiale medier gjør ungdom deprimert — ny studie viser klar sammenheng»

En avisartikkel presenterer dette som faktum. La oss vurdere studien kildekritisk:

**1. Hvem står bak?**
Studien er gjennomført av forskere ved et anerkjent universitet og publisert i et fagfellevurdert tidsskrift. ✓

**2. Metode**
Studien brukte en spørreundersøkelse blant 500 ungdommer. De ble spurt om mediebruk og deretter testet for depressive symptomer. ✓ Men: Er 500 nok? Er utvalget representativt?

**3. Sammenheng vs. årsak**
Studien fant en *korrelasjon* mellom mye sosiale medier-bruk og depressive symptomer. Men korrelasjon er ikke det samme som kausalitet! Kan det være at deprimerte ungdommer bruker *mer* sosiale medier (omvendt årsaksretning)? Eller at en tredje faktor (ensomhet, sosial angst) fører til begge deler?

**4. Nyhetsvinklingen**
Avisen skriver «gjør ungdom deprimert» — men studien fant bare en *sammenheng*, ikke en *årsaksforklaring*. Nyhetsvinklingen overforenkler forskningen.

**5. Finansiering**
Hvem betalte for studien? Dersom den er finansiert av en organisasjon med interesse i resultatet (for eksempel et selskap som selger foreldrekontrollprogramvare), bør vi være ekstra kritiske.

God kildekritikk innebærer å gå bak overskriften og vurdere metode, funn og presentasjon med kritisk blikk.`,
    },
    {
      id: 'mi2-6-5-exercise-2',
      type: 'exercise',
      title: 'Oppgave 2',
      exerciseType: 'multiple-choice',
      task: 'Hva er forskjellen mellom reliabilitet og validitet?',
      options: [
        { id: 'a', text: 'Reliabilitet handler om etikk, validitet om metode', isCorrect: false },
        { id: 'b', text: 'Reliabilitet handler om pålitelighet og konsistens, validitet om gyldighet og om man måler det man skal', isCorrect: true },
        { id: 'c', text: 'Reliabilitet gjelder kvantitativ forskning, validitet gjelder kvalitativ forskning', isCorrect: false },
        { id: 'd', text: 'Reliabilitet handler om utvalgets størrelse, validitet om statistisk analyse', isCorrect: false },
      ],
      solution: 'Reliabilitet handler om pålitelighet — gir studien konsistente resultater som kan etterprøves? Validitet handler om gyldighet — måler studien faktisk det den er ment å måle? En studie kan ha høy reliabilitet (gi konsistente resultater) men lav validitet (måle noe annet enn det forskeren tror). Begge kvalitetskravene må være oppfylt for at forskningen skal være god.',
    },
    {
      id: 'mi2-6-5-kildekritikk',
      type: 'text',
      content: `### Kildekritikk — verktøy for kritisk medieforståelse

Kildekritikk handler om systematisk å vurdere en kildes troverdighet, relevans og pålitelighet. Ferdighetene er like viktige enten du vurderer en vitenskapelig studie, en nyhetsartikkel eller et innlegg på sosiale medier.

**TONE-modellen for kildekritikk:**
- **T — Troverdighet:** Hvem er avsender? Har de kompetanse på feltet? Er kilden uavhengig?
- **O — Objektivitet:** Har avsenderen egeninteresser? Er fremstillingen balansert eller tendensiøs?
- **N — Nøyaktighet:** Stemmer opplysningene? Kan de bekreftes fra andre kilder?
- **E — Egnethet:** Er kilden relevant for spørsmålet du undersøker? Er den oppdatert?

**Vanlige fallgruver å se opp for:**
- **Korrelasjon forveksles med kausalitet:** «Folk som drikker kaffe lever lenger» betyr ikke at kaffe *forårsaker* lengre liv
- **Cherry-picking:** Å velge ut kun data som støtter eget syn og ignorere data som motsier det
- **Urepresentativt utvalg:** Å trekke konklusjoner for hele befolkningen basert på et skjevt utvalg
- **Fravær av fagfellevurdering:** Forskning som ikke er vurdert av andre eksperter bør behandles med ekstra forsiktighet
- **Interessekonflikter:** Forskning finansiert av aktører med kommersielle interesser kan være forutinntatt`,
    },
    {
      id: 'mi2-6-5-example-korrelasjon',
      type: 'example',
      title: 'Eksempel: Korrelasjon er ikke kausalitet',
      content: `Et klassisk eksempel som illustrerer forskjellen mellom korrelasjon og kausalitet:

**Observasjon:** Det er en positiv korrelasjon mellom iskremssalg og drukningsulykker — begge øker om sommeren.

**Feilslutning:** Iskrem forårsaker drukningsulykker!

**Riktig forklaring:** En tredje variabel — varmt vær — fører til at både iskremsalget og badeaktiviteten øker. Det er altså en **spuriøs korrelasjon** der en bakenforliggende faktor forklarer sammenhengen.

**I medieforskning ser vi lignende feilslutninger:**
- «Barn som spiller voldelige dataspill, er mer aggressive» → Kanskje aggressive barn trekkes mot voldelige spill, ikke omvendt?
- «Ungdom som bruker mye sosiale medier, sover dårligere» → Kanskje søvnproblemer fører til mer skjermbruk om natten?

Når du leser om forskning i mediene, still alltid spørsmålet: Er det en sammenheng eller en årsaksforklaring? Hvilke alternative forklaringer kan tenkes?`,
    },
    {
      id: 'mi2-6-5-exercise-3',
      type: 'exercise',
      title: 'Oppgave 3',
      task: 'Forklar hva korrelasjon og kausalitet betyr, og gi et eksempel fra medieforskning der de to kan forveksles. Forklar hvilke alternative forklaringer som finnes.',
      difficulty: 'medium',
      solution: 'Korrelasjon betyr at det finnes en statistisk sammenheng mellom to variabler — de varierer sammen. Kausalitet betyr at den ene variabelen faktisk forårsaker endring i den andre. Eksempel: Studier viser korrelasjon mellom mye skjermtid og dårligere skoleresultater. Men kausaliteten er uklar: kanskje fører dårlige skoleresultater til at elevene søker til skjermen for trøst (omvendt kausalitet), eller kanskje er sosioøkonomisk bakgrunn (tredje variabel) avgjørende for begge. For å fastslå kausalitet kreves eksperimentelle studier med kontrollgrupper.',
    },
    {
      id: 'mi2-6-5-exercise-4',
      type: 'exercise',
      title: 'Oppgave 4',
      task: 'Finn en nyhetsartikkel som omtaler en forskningsstudie. Vurder artikkelen og studien kildekritisk ved å bruke TONE-modellen (Troverdighet, Objektivitet, Nøyaktighet, Egnethet). Drøft om nyhetsartikkelen gir et riktig bilde av forskningens funn.',
      difficulty: 'vanskelig',
      solution: 'Et godt svar anvender TONE-modellen systematisk: Troverdighet — hvem har gjort studien, og er den publisert i et anerkjent tidsskrift? Objektivitet — har forskerne eller mediet en agenda? Nøyaktighet — gjengir artikkelen funnene korrekt, eller er de forvrengt (f.eks. korrelasjon fremstilt som kausalitet)? Egnethet — er studien relevant for det artikkelen handler om? Svaret bør inneholde konkrete eksempler fra artikkelen og studien.',
    },
    {
      id: 'mi2-6-5-summary',
      type: 'text',
      title: 'Oppsummering',
      content: `### Nøkkelpunkter

- **Forskningsetikk** sikrer at forskning gjennomføres ansvarlig med respekt for deltakere og samfunn
- **Informert samtykke**, **konfidensialitet** og **integritet** er grunnleggende etiske prinsipper
- **Reliabilitet** handler om pålitelighet og etterprøvbarhet
- **Validitet** handler om gyldighet — måler vi det vi faktisk vil måle?
- **Kildekritikk** (TONE-modellen) hjelper oss å vurdere forskning og medieinnhold kritisk
- **Korrelasjon er ikke kausalitet** — sammenheng betyr ikke årsak
- Vanlige feilkilder inkluderer cherry-picking, urepresentative utvalg og interessekonflikter`,
    },
    {
      id: 'mi2-6-5-exercise-5',
      type: 'exercise',
      title: 'Oppgave 5',
      task: 'Du skal gjennomføre en liten undersøkelse blant medelever om mediebruk. Beskriv tre forskningsetiske hensyn du må ivareta, og forklar konkret hva du vil gjøre for å ivareta hvert av dem.',
      difficulty: 'medium',
      solution: 'Tre viktige hensyn: (1) Informert samtykke — alle deltakere skal informeres om hva undersøkelsen handler om og at deltakelsen er frivillig. De skal også informeres om at de kan trekke seg når som helst. (2) Anonymitet/konfidensialitet — besvarelsene skal være anonyme, og data skal lagres trygt. Resultatene skal presenteres slik at ingen enkeltperson kan identifiseres. (3) Ikke skade — spørsmålene bør ikke omhandle svært sensitive temaer, og forskeren bør tenke gjennom om noen spørsmål kan oppleves som ubehagelige eller invaderende.',
    },
    {
      id: 'mi2-6-5-exercise-6',
      type: 'exercise',
      title: 'Samleoppgave',
      task: 'En avisoverskrift lyder: «Forskning beviser: TikTok ødelegger ungdoms konsentrasjonsevne». Drøft denne påstanden kritisk. Hvilke spørsmål bør du stille til studien bak overskriften? Vurder overskriftens troverdighet i lys av det du har lært om reliabilitet, validitet, korrelasjon versus kausalitet, og kildekritikk. Hva ville en god studie av dette temaet kreve?',
      difficulty: 'vanskelig',
      solution: 'Et godt svar stiller kritiske spørsmål: (1) Hvem står bak studien? Er den fagfellevurdert? Har forskerne interessekonflikter? (2) Metode — hvordan ble konsentrasjonsevne målt (validitet)? Hvor stort og representativt var utvalget? Kan resultatene etterprøves (reliabilitet)? (3) Kausalitet — ordet «ødelegger» antyder årsakssammenheng, men studien kan bare ha funnet en korrelasjon. Kanskje har ungdom med dårlig konsentrasjon en tendens til å bruke TikTok mer. (4) Overskriften — avisen forenkler trolig funnene for å få klikk. (5) En god studie ville krevd et longitudinelt design (følge ungdom over tid), kontrollgruppe, validerte måleinstrumenter for konsentrasjon, og kontroll for tredjevariabler som søvn, stress og sosioøkonomisk bakgrunn.',
    },
  ],
  exercises: [],
};

// ============================================================================
// Samle alle Del 6-kapitler
// ============================================================================

export const MEDIEINFO_2_DEL6_CHAPTERS: TextbookChapter[] = [
  CHAPTER_MEDIEINFO_2_6_1,
  CHAPTER_MEDIEINFO_2_6_2,
  CHAPTER_MEDIEINFO_2_6_3,
  CHAPTER_MEDIEINFO_2_6_4,
  CHAPTER_MEDIEINFO_2_6_5,
];

export function getMedieinfo2Del6Chapter(chapterId: string): TextbookChapter | undefined {
  return MEDIEINFO_2_DEL6_CHAPTERS.find(chapter => chapter.id === chapterId);
}
