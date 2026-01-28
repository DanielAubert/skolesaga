/**
 * Tekstbok innhold for Historie DEL 1: Kapittel 1-4
 * Historisk metode, antikken og middelalderen
 *
 * Dekker LK20 kompetansemål for VG2 og VG3.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1: Historisk metode
// ============================================================================

export const CHAPTER_HISTORIE_1_1: TextbookChapter = {
  id: 'historie-1-1',
  courseId: 'historie',
  chapterNumber: '1.1',
  title: 'Hva er historie?',
  description: 'Historiefagets egenart og hvordan fortiden former oss.',
  estimatedMinutes: 45,
  competenceGoals: ['reflektere over hvordan fortiden former oss'],
  content: [
    {
      id: 'historie-1-1-intro',
      type: 'text',
      content: `## Hva er historie?

Historie er studiet av fortiden og hvordan mennesker har levd, tenkt og handlet gjennom tidene. Men historie handler ikke bare om å huske datoer og navn - det handler om å forstå hvorfor ting skjedde, og hvordan fortiden fortsetter å forme oss i dag.

**Historiefagets hovedsporsmal:**
- Hva skjedde, og nar?
- Hvorfor skjedde det?
- Hva ble konsekvensene?
- Hvordan pavirker dette oss i dag?

Historikere arbeider som detektiver. De samler inn bevis fra fortiden, analyserer dem kritisk, og forsøker å sette sammen et bilde av hvordan ting egentlig var. Men i motsetning til naturvitenskap, kan vi aldri gjenta fortiden for å teste teoriene våre.`,
    },
    {
      id: 'historie-1-1-def-1',
      type: 'definition',
      title: 'Historiefaget',
      content: `**Historie** er vitenskapen om fortiden. Faget undersøker menneskelige samfunn, kulturer og hendelser gjennom tidene.

**Historiker** er en person som forsker på og skriver om fortiden, basert på systematisk analyse av kilder.

**Historiografi** betyr "historieskriving" og refererer til hvordan historie blir skrevet og tolket. Historiografien studerer også hvordan historikeres syn har endret seg over tid.`,
    },
    {
      id: 'historie-1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar med egne ord hva som skiller historiefaget fra andre fag. Hvorfor kan vi ikke "bevise" historiske teorier på samme måte som i naturvitenskap?',
        hints: ['Tenk på at fortiden ikke kan gjentas'],
        solution: 'Historiefaget skiller seg fra naturvitenskap ved at vi ikke kan gjenta eller eksperimentere med fortiden. Historikere må basere seg på kilder og levninger fra fortiden, og disse gir aldri et komplett bilde. Ulike historikere kan tolke de samme kildene forskjellig, og vårt syn på fortiden endres over tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-1-def-2',
      type: 'definition',
      title: 'Historiebevissthet',
      content: `**Historiebevissthet** er forståelsen av sammenhengen mellom fortid, nåtid og fremtid. Det handler om å se at:

- Fortiden har formet nåtiden
- Nåtiden påvirker hvordan vi forstår fortiden
- Våre handlinger i dag vil forme fremtiden

En person med god historiebevissthet forstår at samfunnet vi lever i er et resultat av historiske prosesser, og at ting kunne ha blitt annerledes hvis historien hadde tatt en annen retning.`,
    },
    {
      id: 'historie-1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gi et eksempel på hvordan fortiden har formet noe i din egen hverdag. Det kan være noe fysisk (en bygning, en vei) eller noe abstrakt (en lov, en tradisjon).',
        hints: ['Se deg rundt - bygninger, lover, tradisjoner, språk'],
        solution: 'Eksempler kan være: Grunnloven fra 1814 gir oss ytringsfrihet i dag. 17. mai-feiringen er en tradisjon som startet etter 1814. Gamle bygg i sentrum forteller om tidligere tiders arkitektur. Veier følger ofte gamle ferdselsårer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Hvordan fortiden former oss',
      problem: 'Hvordan påvirker andre verdenskrig oss i dag, over 80 år senere?',
      solution: `**Andre verdenskrigs ettervirkninger:**

1. **Internasjonale organisasjoner:** FN ble opprettet i 1945 for å hindre nye verdenskonfliker. NATO ble dannet i 1949.

2. **Menneskerettigheter:** FNs menneskerettighetserklæring (1948) kom som direkte respons på krigens grusomheter.

3. **Europeisk samarbeid:** EU har røtter i ønsket om å knytte europeiske land så tett sammen at krig blir umulig.

4. **Minnekultur:** Frigjøringsdagen 8. mai, krigsminnesmerker, og holocaustundervisning holder minnene levende.

5. **Geopolitikk:** Grenser, allianser og internasjonale relasjoner i dag er fortsatt preget av krigens utfall.`,
    },
    {
      id: 'historie-1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Velg en historisk hendelse (ikke andre verdenskrig) og forklar minst tre måter den fortsatt påvirker samfunnet vårt i dag.',
        hints: ['Tenk på hendelser som den franske revolusjon, den industrielle revolusjon, eller norsk selvstendighet 1905'],
        solution: 'Eksempel - Den industrielle revolusjon: 1) Fabrikkproduksjon la grunnlaget for moderne økonomi. 2) Urbanisering - folk flyttet til byer, som fortsatt er befolkningssentre. 3) Arbeiderbevegelsen oppsto, og vi har fortsatt fagforeninger og arbeiderrettigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft påstanden: "Den som ikke kjenner historien, er dømt til å gjenta den." Er du enig eller uenig? Begrunn svaret ditt med eksempler.',
        hints: ['Tenk på eksempler der historie har gjentatt seg', 'Tenk også på om kunnskap alltid forhindrer feil'],
        solution: 'Argumenter for: Kjennskap til tidligere kriger og konflikter kan hjelpe oss å unngå lignende situasjoner. Holocaust-undervisning skal hindre at folkemord skjer igjen. Argumenter mot: Selv med historiekunnskap gjør mennesker lignende feil. Økonomiske kriser gjentar seg tross kunnskap om tidligere kriser. Konklusjon: Historiekunnskap er nødvendig, men ikke tilstrekkelig for å unngå feil.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_1_2: TextbookChapter = {
  id: 'historie-1-2',
  courseId: 'historie',
  chapterNumber: '1.2',
  title: 'Kilder og kildekritikk',
  description: 'Lær å arbeide med og vurdere historiske kilder.',
  estimatedMinutes: 50,
  competenceGoals: ['utforske fortiden - stille spørsmål, bruke historisk materiale'],
  content: [
    {
      id: 'historie-1-2-intro',
      type: 'text',
      content: `## Kilder - vinduet til fortiden

Alt vi vet om fortiden kommer fra kilder. Kilder er spor eller levninger fra fortiden som gir oss informasjon om hvordan mennesker levde, tenkte og handlet. Uten kilder har vi ingen historie - bare spekulasjoner.

**Historikere arbeider systematisk med kilder:**
1. Finne relevante kilder
2. Analysere hva kildene forteller
3. Vurdere kildenes troverdighet
4. Sette sammen informasjonen til en helhetlig fremstilling

Ikke alle kilder er like pålitelige. Derfor er kildekritikk en av de viktigste ferdighetene en historiker må ha.`,
    },
    {
      id: 'historie-1-2-def-1',
      type: 'definition',
      title: 'Kildetyper',
      content: `**Primærkilder** er førstehåndsberetninger fra den tiden vi studerer:
- Dagbøker og brev
- Offisielle dokumenter (lover, traktater)
- Aviser og tidsskrifter fra perioden
- Fotografier og film
- Gjenstander og bygninger

**Sekundærkilder** er tolkninger og analyser laget i ettertid:
- Historiebøker og artikler
- Leksikon og oppslagsverk
- Dokumentarer
- Lærebøker (som denne)

**Levning vs. beretning:**
- **Levning**: Kilden er et direkte spor fra fortiden (en gjenstand, en bygning)
- **Beretning**: Kilden forteller om noe (en dagbok, et vitnesbyrd)`,
    },
    {
      id: 'historie-1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Klassifiser følgende kilder som primær- eller sekundærkilder:\na) En avisartikkel fra 1940 om invasjonen av Norge\nb) En lærebok om andre verdenskrig skrevet i 2020\nc) Et brev fra en soldat til familien sin under krigen\nd) En dokumentar om okkupasjonen laget i 2015',
        solution: 'a) Primærkilde - skrevet samtidig med hendelsen. b) Sekundærkilde - skrevet i ettertid, basert på analyse av andre kilder. c) Primærkilde - førstehåndsberetning fra en som var der. d) Sekundærkilde - laget lenge etter hendelsene, tolker og sammenstiller informasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-2-def-2',
      type: 'definition',
      title: 'Kildekritikk',
      content: `**Kildekritikk** er systematisk vurdering av en kildes troverdighet og brukbarhet. Vi stiller fire hovedspørsmål:

**1. Opphav - Hvem står bak kilden?**
- Hvem har laget kilden?
- Hvilken bakgrunn og posisjon hadde personen?
- Hadde vedkommende noe å vinne eller tape?

**2. Formål - Hvorfor ble kilden laget?**
- Hva var hensikten?
- Hvem var målgruppen?
- Skulle kilden overbevise, informere eller underholde?

**3. Tid og sted - Når og hvor ble kilden laget?**
- Er den fra samme tid som hendelsen?
- Hadde opphavsmannen direkte kjennskap?

**4. Samsvar - Støttes kilden av andre kilder?**
- Bekrefter andre kilder det samme?
- Finnes det motstridende informasjon?`,
    },
    {
      id: 'historie-1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor det er viktig å vite hvem som har laget en kilde. Gi et eksempel på hvordan opphavsmannens bakgrunn kan påvirke innholdet i en kilde.',
        hints: ['Tenk på perspektiv og egeninteresser'],
        solution: 'Opphavsmannens bakgrunn påvirker hva som inkluderes og hvordan det fremstilles. Eksempel: En konges kronikk vil fremstille kongen positivt, mens opprørere ville skrevet en helt annen versjon. En arbeiders dagbok gir et annet bilde av industrialiseringen enn en fabrikkeieres regnskaper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Kildekritisk analyse',
      problem: 'Analyser følgende kilde kildekritisk: En nazistisk propagandaplakat fra 1942 som oppfordrer nordmenn til å melde seg til fronttjeneste.',
      solution: `**Kildekritisk analyse:**

**1. Opphav:**
- Laget av den tyske okkupasjonsmakten eller NS (Nasjonal Samling)
- Representerer okkupantenes synspunkt
- Har klar politisk agenda

**2. Formål:**
- Overtale nordmenn til å støtte den tyske krigsinnsatsen
- Propaganda - ikke nøytral informasjon
- Målgruppe: norske menn i vernepliktig alder

**3. Tid og sted:**
- Fra okkupasjonstiden (1942)
- Laget i Norge under tysk kontroll

**4. Hva kan kilden brukes til?**
- Forteller IKKE sannheten om krigen
- MEN: Verdifull kilde til å forstå tysk propaganda
- Viser hvilke argumenter okkupantene brukte
- Gir innblikk i okkupasjonspolitikken`,
    },
    {
      id: 'historie-1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Du finner en dagbok fra 1814 skrevet av en norsk bonde. Hvilke kildekritiske spørsmål ville du stilt, og hva kan denne kilden fortelle oss - og hva kan den IKKE fortelle oss?',
        hints: ['Tenk på bondens perspektiv og begrensninger'],
        solution: 'Spørsmål: Hvor bodde bonden? Kunne han skrive godt? Hva visste han om rikspolitikk? Kilden kan fortelle: Hverdagsliv på bygda, lokale forhold, bondens personlige opplevelser av 1814. Kilden kan IKKE fortelle: Hva som skjedde på Eidsvoll, diplomatiske forhandlinger, bylivet. Bonden hadde begrenset tilgang til informasjon og et lokalt perspektiv.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft påstanden: "Primærkilder er alltid mer pålitelige enn sekundærkilder." Er dette riktig? Begrunn svaret ditt.',
        hints: ['Tenk på at primærkilder også kan være partiske', 'Sekundærkilder kan ha sammenlignet mange kilder'],
        solution: 'Påstanden er IKKE alltid riktig. Primærkilder kan være partiske, feilaktige eller ufullstendige. En soldat som skriver dagbok kan huske feil eller overdrive. Sekundærkilder har fordelen av å kunne sammenligne mange primærkilder og se helheten. Men sekundærkilder kan også ha feil tolkninger. Konklusjon: Begge kildetyper må vurderes kritisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_1_3: TextbookChapter = {
  id: 'historie-1-3',
  courseId: 'historie',
  chapterNumber: '1.3',
  title: 'Periodisering av fortiden',
  description: 'Hvordan vi deler inn historien i perioder og epoker.',
  estimatedMinutes: 40,
  competenceGoals: ['periodisering av fortiden'],
  content: [
    {
      id: 'historie-1-3-intro',
      type: 'text',
      content: `## Å dele opp historien

Menneskets historie strekker seg over hundretusenvis av år. For å gjøre denne enorme tidsperioden håndterlig, deler historikere den inn i mindre perioder eller epoker.

**Hvorfor periodiserer vi?**
- Gjør historien mer oversiktlig
- Hjelper oss å se mønstre og sammenhenger
- Letter kommunikasjon mellom historikere
- Gir et rammeverk for undervisning

**Men husk:** Periodisering er menneskeskapt! Historien "vet" ikke at middelalderen sluttet i 1500. Periodegrensene er omstridte og varierer mellom ulike land og kulturer.`,
    },
    {
      id: 'historie-1-3-def-1',
      type: 'definition',
      title: 'Epoker i verdenshistorien',
      content: `**Forhistorisk tid** (før ca. 3000 f.Kr.)
- Tiden før skriftlige kilder
- Steinalder, bronsealder, jernalder
- Kunnskap basert på arkeologi

**Antikken** (ca. 3000 f.Kr. - 500 e.Kr.)
- De første høykulturene (Egypt, Mesopotamia)
- Det greske og romerske imperiet
- Slutter med Vestromerrikets fall (476)

**Middelalderen** (ca. 500 - 1500)
- Også kalt "den mørke tid" (omstridt begrep)
- Føydalsamfunn og kirkens dominans
- Slutter rundt renessansen/reformasjonen

**Tidlig moderne tid** (ca. 1500 - 1800)
- Renessanse, reformasjon, opplysningstid
- De store oppdagelsene og kolonialismen

**Moderne tid** (ca. 1800 - i dag)
- Industrialisering og nasjonalisme
- Verdenskrigene
- Globalisering`,
    },
    {
      id: 'historie-1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Plasser følgende hendelser i riktig epoke (antikken, middelalderen, tidlig moderne tid eller moderne tid):\na) Svartedauden\nb) Den franske revolusjon\nc) Romerrikets fall\nd) Første verdenskrig',
        solution: 'a) Svartedauden (1349) - middelalderen. b) Den franske revolusjon (1789) - tidlig moderne tid. c) Romerrikets fall (476) - slutten av antikken. d) Første verdenskrig (1914-1918) - moderne tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-3-def-2',
      type: 'definition',
      title: 'Norsk periodisering',
      content: `Norge har også sin egen periodisering tilpasset norsk historie:

**Vikingtiden** (ca. 800 - 1050)
- Vikingferder og norrøn kultur
- Rikssamling under Harald Hårfagre

**Norsk middelalder** (ca. 1050 - 1537)
- Kristningen av Norge
- Høymiddelalder med storhetstid
- Kalmarunionen og dansk styre fra 1380

**Dansketiden** (1537 - 1814)
- Norge under dansk styre
- Reformasjonen (1537)
- Eneveldet (1660)

**Unionen med Sverige** (1814 - 1905)
- Grunnloven 1814
- Nasjonsbygging

**Selvstendig Norge** (1905 - i dag)
- Unionsoppløsningen
- Verdenskrigene
- Oljealderen`,
    },
    {
      id: 'historie-1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hvorfor periodiseringen av norsk historie er annerledes enn den europeiske. Gi eksempler på hendelser som er viktige for Norge, men ikke for Europa generelt.',
        hints: ['Tenk på norske vendepunkter som 1814, 1905'],
        solution: 'Norsk periodisering følger norske vendepunkter: Kristningen, reformasjonen i 1537, 1814 og 1905. Disse årene markerer store endringer for Norge, men ikke nødvendigvis for Europa. Eksempel: 1814 var viktig for Norge (Grunnloven), men i europeisk sammenheng var Napoleonskrigenes slutt viktigere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Når sluttet middelalderen?',
      problem: 'Ulike land og historikere bruker forskjellige årstall for slutten av middelalderen. Hvorfor?',
      solution: `**Ulike dateringer for middelalderens slutt:**

- **1453**: Konstantinopels fall (Bysants)
- **1492**: Columbus oppdager Amerika
- **1517**: Luthers teser (reformasjonen)
- **1537**: Reformasjonen i Norge
- **Ca. 1500**: Renessansens gjennombrudd

**Hvorfor varierer det?**

1. **Ulike perspektiver**: For Italia var renessansen viktigst, for Tyskland reformasjonen, for Norge dansk maktovertakelse.

2. **Gradvise endringer**: Middelalderen "sluttet" ikke på én dag. Endringene skjedde over lang tid.

3. **Geografiske forskjeller**: Renessansen kom til Skandinavia senere enn til Italia.

**Konklusjon**: Det finnes ikke ett "riktig" svar. Periodegrenser er verktøy for å forstå, ikke absolutte sannheter.`,
    },
    {
      id: 'historie-1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor tror du middelalderen tidligere ble kalt "den mørke tid"? Er dette et rettferdig bilde av perioden?',
        hints: ['Tenk på hvem som ga middelalderen dette navnet', 'Hva skjedde i middelalderen som var positivt?'],
        solution: 'Renessansehumanistene kalte middelalderen "mørk" fordi de mente den var en nedgang fra antikkens høykultur. Dette er urettferdig: Middelalderen hadde store fremskritt innen arkitektur (katedraler), utdanning (universiteter), teknologi (vindmøller, brillier) og kunst. Begrepet reflekterer renessansetidens forakt for perioden, ikke en objektiv vurdering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: "All periodisering av historien er kunstig og vilkårlig." Er du enig? Hva er fordelene og ulempene med å dele historien inn i perioder?',
        hints: ['Tenk på både praktisk nytte og faren for forenkling'],
        solution: 'Fordeler: Gjør historien håndterlig, letter kommunikasjon, hjelper å se mønstre. Ulemper: Kan skjule kontinuitet, grensene er vilkårlige, eurosentrisme (periodene passer ikke for andre kulturer). Konklusjon: Periodisering er nyttig som verktøy, men vi må huske at det er en forenkling av en kompleks virkelighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_1_4: TextbookChapter = {
  id: 'historie-1-4',
  courseId: 'historie',
  chapterNumber: '1.4',
  title: 'Historiebruk og historiebevissthet',
  description: 'Hvordan historie brukes og tolkes i ulike sammenhenger.',
  estimatedMinutes: 45,
  competenceGoals: ['fortolkninger av fortiden preget av nåtid', 'historiebruk av ulike aktører'],
  content: [
    {
      id: 'historie-1-4-intro',
      type: 'text',
      content: `## Hvordan brukes historien?

Historie er ikke bare et akademisk fag - det brukes aktivt av politikere, medier, kunstnere og vanlige mennesker for å argumentere, legitimere og skape identitet. Hvordan vi fremstiller og bruker fortiden, sier ofte like mye om oss i dag som om fortiden selv.

**Sentrale spørsmål:**
- Hvem bruker historie, og til hva?
- Hvordan påvirker nåtiden vår forståelse av fortiden?
- Kan historie misbrukes?
- Hva betyr det å ha en kritisk historiebevissthet?`,
    },
    {
      id: 'historie-1-4-def-1',
      type: 'definition',
      title: 'Historiebruk',
      content: `**Historiebruk** handler om hvordan fortiden brukes i nåtiden av ulike aktører og med ulike formål.

**Typer historiebruk:**

**1. Vitenskapelig bruk**
- Akademisk forskning for å forstå fortiden
- Kritisk, kildebasert og åpen for revisjon

**2. Politisk bruk**
- Legitimere makt eller politiske standpunkter
- Nasjonsbygging og identitetsskaping
- Kan være både konstruktiv og manipulativ

**3. Kommersiell bruk**
- Turisme, film, spill, romaner
- Underholdning basert på historiske temaer

**4. Privat/personlig bruk**
- Slektsforskning og familiehistorie
- Søken etter røtter og tilhørighet`,
    },
    {
      id: 'historie-1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-1-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Gi eksempler på kommersiell historiebruk du kjenner til. Det kan være filmer, TV-serier, spill eller turistattraksjoner. Hvordan fremstilles historien i disse?',
        hints: ['Tenk på populære historiske filmer eller spill'],
        solution: 'Eksempler: Vikings (TV-serie), Assassins Creed (spill), Vikingskipshuset (museum). I kommersielle fremstillinger forenkles ofte historien, det dramatiseres, og noen elementer overdimensjoneres for underholdningsverdi. Vikinger fremstilles ofte mer voldelige og eksotiske enn de var.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-4-def-2',
      type: 'definition',
      title: 'Historiemisbruk',
      content: `**Historiemisbruk** oppstår når fortiden bevisst fordreies eller manipuleres for å tjene bestemte formål.

**Kjennetegn på historiemisbruk:**
- Selektiv bruk av fakta (utelater det som ikke passer)
- Overdrivelse eller underdrivelse
- Anakronismer (overføre moderne ideer til fortiden)
- Falske påstander presentert som fakta

**Eksempler på historiemisbruk:**
- Holocaustfornektelse
- Nasjonalistisk propaganda som glorifiserer fortiden
- Rasistiske fremstillinger av "primitive" kulturer
- Politikere som feilsiterer historien

**Hvorfor er historiemisbruk farlig?**
- Kan brukes til å rettferdiggjøre overgrep
- Undergraver tillit til kunnskap
- Kan skape konflikter basert på falske minner`,
    },
    {
      id: 'historie-1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-1-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom legitim historiebruk og historiemisbruk. Hvem avgjør hva som er misbruk?',
        hints: ['Tenk på hensikt og metode'],
        solution: 'Legitim bruk er åpen om kilder og usikkerhet, aksepterer kritikk og endrer syn ved nye bevis. Misbruk kjennetegnes av bevisst fordreiing, selektiv faktabruk og motstand mot korreksjon. Det kan være vanskelig å trekke grensen - noen ganger er det uenighet mellom historikere. Akademiske standarder og fagfellevurdering er viktige kontrollmekanismer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Vikingene - fra barbarer til helter',
      problem: 'Hvordan har synet på vikingene endret seg over tid, og hva forteller dette oss om historiebruk?',
      solution: `**Vikingenes omdømme gjennom tidene:**

**Middelalderen:**
Samtidige kilder (ofte skrevet av munker som var ofre for raid) fremstilte vikingene som brutale hedninger og barbarer.

**1800-tallet - Nasjonsbygging:**
I Norge og Skandinavia ble vikingene romantisert som sterke, frie nordmenn. De ble et symbol på nasjonal stolthet i tiden rundt 1905.

**Nazismen:**
Nazistene misbrukte vikingsymboler for å fremme ideer om "nordisk overlegenhet" - et grovt historiemisbruk.

**I dag:**
Nyansert bilde: Vikingene var både handelsmenn, håndverkere, bønder og krigere. De hadde avansert kultur og teknologi.

**Hva lærer vi?**
Synet på fortiden endres med samfunnets behov og verdier. Vikingene er de samme - det er vi som ser dem forskjellig.`,
    },
    {
      id: 'historie-1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvordan brukes 17. mai-feiringen til å skape nasjonal identitet? Hvilke sider av Norges historie fremheves, og hva tones ned?',
        hints: ['Tenk på hva som feires og hva som ikke nevnes'],
        solution: '17. mai fremhever demokrati, frihet, Grunnloven og barneopptog. Det skaper et bilde av Norge som fredelig og demokratisk. Det som tones ned: Unionen med Sverige varte til 1905, Grunnloven utelukket jøder, kvinner fikk ikke stemmerett før 1913. Feiringen er legitim nasjonsbygging, men gir et forenklet bilde.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-1-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: "All historieskriving er påvirket av forfatterens samtid." Betyr dette at vi aldri kan vite hva som virkelig skjedde i fortiden?',
        hints: ['Tenk på forskjellen mellom relativisme og kritisk realisme'],
        solution: 'Det er sant at alle historikere påvirkes av sin samtid - de stiller spørsmål som er relevante for sin tid. Men dette betyr IKKE at alt er relativt. Kildekritikk, fagfellevurdering og åpenhet gjør at noen fremstillinger er bedre enn andre. Vi kan aldri få et perfekt bilde av fortiden, men vi kan komme nærmere sannheten gjennom kritisk metode.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 2: Å arbeide med historie
// ============================================================================

export const CHAPTER_HISTORIE_2_1: TextbookChapter = {
  id: 'historie-2-1',
  courseId: 'historie',
  chapterNumber: '2.1',
  title: 'Problemstillinger og undersøkelser',
  description: 'Formulere spørsmål og gjennomføre historiske undersøkelser.',
  estimatedMinutes: 50,
  competenceGoals: ['formulere problemstillinger, finne og vurdere materiale'],
  content: [
    {
      id: 'historie-2-1-intro',
      type: 'text',
      content: `## Å undersøke fortiden

Historisk forskning starter alltid med et spørsmål. Uten gode spørsmål får vi ingen gode svar. Å formulere en presis problemstilling er derfor en av de viktigste ferdighetene i historiefaget.

**Stegene i en historisk undersøkelse:**
1. Velge tema og formulere problemstilling
2. Finne relevante kilder
3. Analysere kildene kritisk
4. Tolke og sammenstille informasjonen
5. Presentere funnene

En god historiker er nysgjerrig, systematisk og ærlig om det han eller hun ikke vet.`,
    },
    {
      id: 'historie-2-1-def-1',
      type: 'definition',
      title: 'Problemstilling',
      content: `En **problemstilling** er et presist formulert spørsmål som styrer undersøkelsen.

**Kjennetegn på en god problemstilling:**
- Avgrenset - ikke for vid
- Undersøkbar - mulig å finne kilder
- Åpen - ikke ja/nei-spørsmål
- Relevant - interessant og meningsfull

**Dårlig problemstilling:**
"Hvordan var middelalderen?" (for vid)

**Bedre problemstilling:**
"Hvordan endret svartedauden maktforholdene mellom bønder og godseiere i England?"

**Enda mer presis:**
"Hvilken betydning hadde svartedauden for lønninger og arbeidsvilkår for engelske bønder i perioden 1350-1400?"`,
    },
    {
      id: 'historie-2-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-2-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Vurder disse problemstillingene - hvilke er gode, og hvilke trenger forbedring? Begrunn svaret.\na) Hva skjedde i andre verdenskrig?\nb) Hvordan påvirket okkupasjonen hverdagslivet til kvinner i Oslo 1940-1945?\nc) Var Hitler ond?',
        solution: 'a) For vid - dekker et enormt tema uten avgrensning. b) God - avgrenset i tid, sted, gruppe og tema. Mulig å undersøke. c) Dårlig - ja/nei-spørsmål som inviterer til moralsk dom, ikke historisk analyse. Bedre versjon: "Hvordan rettferdiggjorde naziregimet sine handlinger?"',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-2-1-def-2',
      type: 'definition',
      title: 'Kildesøk og kildeutvalg',
      content: `**Hvor finner vi kilder?**

**Arkiver:**
- Riksarkivet og statsarkivene
- Kommunearkiver
- Bedriftsarkiver
- Digitale arkiver (Digitalarkivet.no)

**Biblioteker:**
- Nasjonalbiblioteket (nb.no)
- Universitetsbiblioteker
- Lokalhistoriske samlinger

**Museer:**
- Gjenstander og fotografier
- Utstillinger og fagfolk

**Digitale ressurser:**
- Aviser på nett (atekst.no, nb.no)
- Akademiske databaser (Oria, JSTOR)
- Lokalhistoriske nettsider

**Kildeutvalg:**
Du kan ikke lese alt - du må velge kilder som er relevante for din problemstilling. Dokumenter valgene dine og vær åpen om hva du IKKE har undersøkt.`,
    },
    {
      id: 'historie-2-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-2-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Du skal undersøke hvordan livet var for barn på din skoles sted for 100 år siden. Hvilke kilder ville du lete etter, og hvor ville du lete?',
        hints: ['Tenk på både skriftlige kilder og andre kilder'],
        solution: 'Kilder: Skolens gamle protokoller, elevlister, karakterbøker. Lokale aviser fra perioden. Folketellinger (Digitalarkivet). Fotografier fra lokalhistorisk arkiv. Mulige informanter: Eldre mennesker som kan fortelle hva deres besteforeldre fortalte. Bygninger fra perioden. Steder: Kommunearkivet, lokalhistorisk forening, biblioteket.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
    {
      id: 'historie-2-1-example-1',
      type: 'example',
      title: 'Eksempel: En historisk undersøkelse',
      problem: 'Hvordan gjennomfører man en historisk undersøkelse om et lokalt tema?',
      solution: `**Eksempel: Undersøke skolens historie**

**1. Problemstilling:**
"Hvordan endret undervisningen seg ved [skolens navn] fra 1950 til 1970?"

**2. Kildesøk:**
- Skolens arkiv: Protokoller, timeplaner, reglement
- Kommunearkivet: Skolebudsjettet, vedtak
- Aviser: Lokalavisen kan ha omtalt skolen
- Muntlige kilder: Tidligere elever og lærere

**3. Kildekritikk:**
- Hvem skrev protokollene? (Rektor - autoritativt perspektiv)
- Hva sier ikke kildene? (Elevenes opplevelser)
- Stemmer kildene overens?

**4. Analyse:**
- Sammenlikne timeplaner fra 1950 og 1970
- Se etter endringer i fag, metoder, regler

**5. Konklusjon:**
- Besvar problemstillingen
- Vær ærlig om usikkerhet og mangler`,
    },
    {
      id: 'historie-2-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-2-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Formuler tre ulike problemstillinger om andre verdenskrig i Norge - en som fokuserer på politikk, en på hverdagsliv, og en på motstand.',
        hints: ['Husk å avgrense i tid, sted og tema'],
        solution: 'Politikk: "Hvordan forsøkte Quisling-regjeringen å nazifisere det norske samfunnet 1940-1945?" Hverdagsliv: "Hvordan påvirket rasjoneringen matvanene til familier i Bergen 1942-1945?" Motstand: "Hvilke former for sivil motstand praktiserte lærerne under okkupasjonen, og hvilke konsekvenser fikk det?"',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-2-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-2-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hva er fordelene og ulempene med å bruke muntlige kilder (intervjuer med tidsvitner) i historisk forskning?',
        hints: ['Tenk på hukommelse, perspektiv og tilgjengelighet'],
        solution: 'Fordeler: Gir innsikt i hverdagsliv som skriftlige kilder ikke fanger. Kan stille oppfølgingsspørsmål. Fanger følelser og opplevelser. Ulemper: Hukommelsen er upålitelig - folk glemmer, blander sammen, omformer minner. Ettertidens hendelser påvirker hvordan man husker. Informanten kan ha motiver for å fremstille seg selv positivt. Konklusjon: Verdifulle kilder, men må brukes kritisk sammen med andre kilder.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_2_2: TextbookChapter = {
  id: 'historie-2-2',
  courseId: 'historie',
  chapterNumber: '2.2',
  title: 'Ulike framstillinger og perspektiver',
  description: 'Sammenligne og vurdere ulike historiske framstillinger.',
  estimatedMinutes: 45,
  competenceGoals: ['sammenligne ulike framstillinger'],
  content: [
    {
      id: 'historie-2-2-intro',
      type: 'text',
      content: `## Historien har mange stemmer

Den samme historiske hendelsen kan fremstilles på svært ulike måter. En krig ser helt forskjellig ut fra vinnernes og tapernes perspektiv. En revolusjon fremstilles ulikt av de som tjente og de som tapte på den.

**Hvorfor varierer fremstillingene?**
- Ulike kilder gir ulik informasjon
- Historikere stiller ulike spørsmål
- Politisk og kulturell bakgrunn påvirker
- Nytt kildemateriale dukker opp
- Samfunnets verdier endres over tid

Å forstå og sammenligne ulike fremstillinger er en sentral ferdighet i historiefaget.`,
    },
    {
      id: 'historie-2-2-def-1',
      type: 'definition',
      title: 'Perspektiv og ståsted',
      content: `**Perspektiv** i historie handler om hvem sin synsvinkel vi ser hendelsene fra.

**Vanlige perspektiver:**
- **Ovenfra-perspektiv**: Konger, politikere, makthavere
- **Nedenfra-perspektiv**: Vanlige folk, arbeidere, kvinner, barn
- **Innenfra**: De som var med
- **Utenfra**: Observatører, fremmede

**Historiografiske retninger:**
- **Politisk historie**: Fokus på stater, kriger, diplomati
- **Sosialhistorie**: Fokus på samfunnsgrupper og strukturer
- **Kulturhistorie**: Fokus på mentalitet, verdier, hverdagsliv
- **Kjønnshistorie**: Fokus på kjønnsroller og kvinners erfaring
- **Globalhistorie**: Fokus på forbindelser på tvers av kulturer

Ingen perspektiv er "riktigere" enn andre - de belyser ulike sider av fortiden.`,
    },
    {
      id: 'historie-2-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-2-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvordan ville den norske unionsoppløsningen i 1905 blitt fremstilt ulikt fra a) norsk og b) svensk perspektiv?',
        hints: ['Tenk på hvem som "vant" og hvem som "tapte"'],
        solution: 'Norsk perspektiv: Fremhever frigjøring, nasjonal seier, demokrati. Norge frigjorde seg fra svensk dominans. Svensk perspektiv: Kan fremheve at unionen var fredelig, at Sverige lot Norge gå, eller fokusere på tapet av stormaktstatus og nederlaget. Norsk historieskriving feirer 1905, mens svensk historie ofte toner ned hendelsen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-2-2-def-2',
      type: 'definition',
      title: 'Sammenligning av fremstillinger',
      content: `Når vi sammenligner historiske fremstillinger, ser vi etter:

**1. Utvalg av fakta**
- Hva tas med, hva utelates?
- Hvilke hendelser fremheves?
- Hvem får være med i historien?

**2. Ordvalg og tone**
- Brukes positive eller negative ladede ord?
- Er tonen nøytral eller engasjert?
- Hvem fremstilles som helter/skurker?

**3. Årsaksforklaringer**
- Hva pekes ut som årsaker?
- Legges skylden på individer eller strukturer?
- Sees hendelsene som uunngåelige eller tilfeldige?

**4. Kontekst**
- Når ble fremstillingen skrevet?
- Av hvem og for hvem?
- Hvilken tradisjon tilhører forfatteren?`,
    },
    {
      id: 'historie-2-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-2-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Koloniseringen av Amerika kan fremstilles som "oppdagelse" eller "invasjon". Forklar hvordan ordvalget påvirker vår forståelse av historien.',
        hints: ['Hvem oppdaget hva for hvem?'],
        solution: '"Oppdagelse" impliserer at Amerika var ukjent og uviktig før europeerne kom - det ignorerer urbefolkningen. "Invasjon" fremhever at landet allerede var bebodd og at europeerne tok det med makt. Ordvalget avslører perspektiv: europeisk vs. urfolksperspektiv. Moderne historikere bruker ofte mer nøytrale begreper som "europeisk ekspansjon" eller "kontakt mellom kulturer".',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-2-2-example-1',
      type: 'example',
      title: 'Eksempel: Vikingene i ulike fremstillinger',
      problem: 'Sammenlign hvordan vikingene fremstilles i en engelsk kilde fra 800-tallet og en norsk lærebok fra 1900-tallet.',
      solution: `**Engelsk kilde fra 800-tallet (Angelsaksisk krønike):**
"I dette året kom hedningenes herjinger til Lindisfarne og ødela Guds kirke med plyndring og drap."
- Perspektiv: Ofrene (engelske munker)
- Fokus: Vold, ødeleggelse, hedenskap
- Vikinger = barbarer, Guds fiender

**Norsk lærebok fra 1900-tallet:**
"Vikingene var dyktige sjøfarere som oppdaget nye land og drev handel over store avstander."
- Perspektiv: Etterkommere som vil være stolte
- Fokus: Ferdigheter, handel, oppdagelser
- Vikinger = helter, forfedrene våre

**Analyse:**
Begge er sanne, men ufullstendige. Vikingene var begge deler - handelsmenn OG krigere. Fremstillingen avhenger av hvem som skriver og hvorfor.`,
    },
    {
      id: 'historie-2-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-2-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Velg en historisk hendelse du kjenner godt. Skriv to korte avsnitt om den - ett fra "vinnernes" perspektiv og ett fra "tapernes" perspektiv.',
        hints: ['Det kan være en krig, en revolusjon, en kolonisering'],
        solution: 'Eksempel - Den amerikanske revolusjon. Amerikansk perspektiv: "Frihetselskende kolonister reiste seg mot britisk tyranni og vant sin uavhengighet gjennom mot og offervilje." Britisk perspektiv: "Illojale undersåtter nektet å betale sin rettmessige andel av forsvarsutgiftene, og med fransk hjelp løsrev de seg fra moderlandet."',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-2-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-2-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hvis all historieskriving er perspektivavhengig, betyr det at alle fremstillinger er like gyldige? Hvordan kan vi vurdere om en fremstilling er bedre enn en annen?',
        hints: ['Tenk på kilder, metode og åpenhet'],
        solution: 'Nei, ikke alle fremstillinger er like gyldige. Vi kan vurdere kvalitet ut fra: 1) Kildebruk - er fremstillingen basert på relevante og pålitelige kilder? 2) Metode - er kildene analysert kritisk? 3) Åpenhet - erkjenner forfatteren sitt perspektiv og usikkerhet? 4) Fagfellevurdering - har andre eksperter godkjent analysen? En fremstilling som ignorerer kilder eller bevisst fordreier fakta er dårligere enn en som er åpen og kritisk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_2_3: TextbookChapter = {
  id: 'historie-2-3',
  courseId: 'historie',
  chapterNumber: '2.3',
  title: 'Brudd og kontinuitet',
  description: 'Forstå historiske endringer og det som vedvarer.',
  estimatedMinutes: 45,
  competenceGoals: ['brudd eller kontinuitet i historien'],
  content: [
    {
      id: 'historie-2-3-intro',
      type: 'text',
      content: `## Endring og varighet i historien

Historien er full av dramatiske vendepunkter - revolusjoner, kriger, oppdagelser. Men ved siden av de store bruddene finnes det strukturer og mønstre som varer ved over lang tid. Å forstå forholdet mellom brudd og kontinuitet er sentralt for å forstå historiske prosesser.

**Nøkkelspørsmål:**
- Hva endret seg, og hva forble det samme?
- Var endringen brå eller gradvis?
- Hvem opplevde endring, og hvem merket lite?
- Er det vi tror er brudd egentlig bare overflateendringer?`,
    },
    {
      id: 'historie-2-3-def-1',
      type: 'definition',
      title: 'Brudd og kontinuitet',
      content: `**Brudd** (diskontinuitet) er dramatiske endringer som bryter med det som var før:
- Revolusjoner (den franske revolusjon 1789)
- Kriger som endrer grenser og maktforhold
- Teknologiske gjennombrudd (boktrykkerkunsten)
- Naturkatastrofer og pandemier (svartedauden)

**Kontinuitet** er det som fortsetter på tross av endringer:
- Kulturelle tradisjoner og verdier
- Språk og religion
- Sosiale strukturer og hierarkier
- Geografiske og klimatiske forhold

**Viktig innsikt:**
Store brudd på ett område kan skje samtidig med kontinuitet på andre. Den franske revolusjon endret politikken radikalt, men bøndenes dagligliv endret seg mye saktere.`,
    },
    {
      id: 'historie-2-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-2-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Gi eksempler på både brudd og kontinuitet knyttet til innføringen av kristendommen i Norge (ca. 1000-tallet).',
        hints: ['Tenk på hva som endret seg og hva som fortsatte'],
        solution: 'Brudd: Ny religion erstattet norrøn tro, nye lover og moral, kirker ble bygget, ny skriftkultur (latin), Norge ble del av europeisk kristenhet. Kontinuitet: Språket (norrønt) fortsatte, sosiale strukturer besto, mange norrøne skikker ble innlemmet i kristen praksis (julefeiring), bondesamfunnet fortsatte som før.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-2-3-def-2',
      type: 'definition',
      title: 'Tempo og dybde i endring',
      content: `Endringer skjer i ulikt tempo og på ulike nivåer:

**Hendelser (kort tid)**
- Slag, traktater, attentater
- Synlige og dramatiske
- Ofte det historien handler om

**Konjunkturer (mellomlang tid)**
- Økonomiske sykluser, generasjonsskifter
- Varer i tiår eller generasjoner
- Krever statistikk og oversikt å se

**Strukturer (lang tid)**
- Mentaliteter, klima, geografiske forhold
- Endres over århundrer
- Ofte usynlige for samtiden

**Eksempel - Den industrielle revolusjon:**
- Hendelse: Oppfinnelsen av dampmaskinen
- Konjunktur: Urbaniseringen over 100 år
- Struktur: Endring fra jordbrukssamfunn til industrisamfunn`,
    },
    {
      id: 'historie-2-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-2-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom hendelser, konjunkturer og strukturer med utgangspunkt i Norges oljehistorie.',
        hints: ['Tenk på enkelthendelser, utviklingstrekk over tiår, og dype samfunnsendringer'],
        solution: 'Hendelse: Funnet av Ekofisk i 1969. Konjunktur: Oppbyggingen av oljeindustrien 1970-2000, oljefondet, økt velstand. Struktur: Endring fra industrisamfunn til oljeavhengig økonomi, nye verdier (miljøbevissthet vs. oljevelstand), endret norsk identitet fra fattig til rikt land.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-2-3-example-1',
      type: 'example',
      title: 'Eksempel: Den franske revolusjon - brudd eller kontinuitet?',
      problem: 'Den franske revolusjon (1789) regnes som et av historiens store brudd. Men hvor dypt stakk endringene egentlig?',
      solution: `**Klare brudd:**
- Monarkiet avskaffet, republikk innført
- Adelens privilegier opphevet
- Ny kalender, nye mål og vekt
- Menneskerettighetserklæringen
- Kirkens makt redusert

**Tydelig kontinuitet:**
- Frankrike forble en sentralstyrt stat
- Bøndenes hverdag endret seg langsomt
- Kvinner fikk ikke stemmerett
- Sosiale forskjeller bestod
- Napoleon gjeninnførte mange gamle strukturer

**Konklusjon:**
Revolusjonen var et dramatisk politisk brudd, men dype samfunnsstrukturer endret seg mye saktere. Historikere har diskutert i 200 år hvor dypt bruddet egentlig var. Det viser at "brudd" og "kontinuitet" ikke er absolutte kategorier - virkeligheten er kompleks.`,
    },
    {
      id: 'historie-2-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-2-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Tenk på ditt eget liv og din families historie. Identifiser ett eksempel på brudd og ett på kontinuitet over tre generasjoner (deg, foreldrene, besteforeldrene).',
        hints: ['Tenk på teknologi, arbeidsliv, familiestrukturer, boforhold'],
        solution: 'Eksempel på brudd: Digital teknologi - besteforeldre vokste opp uten TV, foreldre uten internett, jeg med smarttelefon. Dette har endret kommunikasjon, arbeid og underholdning fundamentalt. Eksempel på kontinuitet: Familieverdier, dialekt, tilknytning til hjemsted, feiringstradisjoner som jul og 17. mai kan ha holdt seg ganske like.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
    {
      id: 'historie-2-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-2-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Gir det mening å snakke om "historiens vendepunkter"? Er noen hendelser virkelig så viktige at de endrer alt, eller er det bare noe vi konstruerer i ettertid?',
        hints: ['Tenk på hvordan vi velger ut "viktige" hendelser'],
        solution: 'Argument for vendepunkter: Noen hendelser (verdenskrigene, industrialiseringen) hadde så omfattende konsekvenser at de kvalifiserer som vendepunkter. De endret retningen på utviklingen. Argument mot: Vi velger ut vendepunkter i ettertid basert på hva vi synes er viktig. Samtiden så det kanskje annerledes. Mange "vendepunkter" var del av lengre prosesser. Konklusjon: Vendepunkter er nyttige, men vi må huske at de er konstruksjoner - historien hadde ikke visst at den var ved et vendepunkt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_2_4: TextbookChapter = {
  id: 'historie-2-4',
  courseId: 'historie',
  chapterNumber: '2.4',
  title: 'Lokalt og nasjonalt minne',
  description: 'Utforske minnekultur og historiske steder.',
  estimatedMinutes: 40,
  competenceGoals: ['lokalt og nasjonalt minne'],
  content: [
    {
      id: 'historie-2-4-intro',
      type: 'text',
      content: `## Hvordan husker samfunn?

Samfunn husker fortiden gjennom monumenter, minnedager, museer og fortellinger. Denne kollektive hukommelsen - eller minnekulturen - er viktig for identitet og fellesskap. Men hvem bestemmer hva som skal huskes, og hva som glemmes?

**Minnekultur finnes på flere nivåer:**
- Familier husker sine forfedre
- Lokalsamfunn husker sin historie
- Nasjoner har sine helter og hendelser
- Menneskeheten har globale minner (Holocaust)

Å utforske minnekultur handler om å forstå hvorfor vi husker det vi husker - og hva det sier om oss i dag.`,
    },
    {
      id: 'historie-2-4-def-1',
      type: 'definition',
      title: 'Minnekultur',
      content: `**Minnekultur** (også kalt kollektiv erindring) er måten et samfunn husker og markerer fortiden.

**Former for minnekultur:**

**Fysiske minnesmerker:**
- Statuer og monumenter
- Gravsteder og minnesmerker
- Historiske bygninger
- Museer og utstillinger

**Tidsmessige markeringer:**
- Minnedager (17. mai, 8. mai)
- Jubileer (Grunnlovsjubileet 2014)
- Ritualer og seremonier

**Narrative former:**
- Nasjonale fortellinger
- Lokale sagn og historier
- Lærebøker og offisiell historieskrivning

**Hvem former minnekulturen?**
Staten, kirken, organisasjoner, medier og enkeltpersoner er alle med på å forme hva som huskes og hvordan.`,
    },
    {
      id: 'historie-2-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-2-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Finn et minnesmerke eller en historisk markering i ditt nærmiljø. Beskriv hva det minnes, når det ble laget, og hvem som sto bak.',
        hints: ['Det kan være en statue, en minneplate, et gatenavn'],
        solution: 'Svaret vil variere. Et godt svar beskriver: Hva minnesmerket viser/minnes, konteksten for når og hvorfor det ble satt opp, hvem som tok initiativet (kommune, forening, stat), og reflekterer over hva valget av akkurat dette minnet sier om lokalsamfunnet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
    {
      id: 'historie-2-4-def-2',
      type: 'definition',
      title: 'Nasjonalt og lokalt minne',
      content: `**Nasjonalt minne** er den felles historieforståelsen som binder en nasjon sammen:
- Grunnleggende myter (1814, 1905, 1945)
- Nasjonale helter (Fridtjof Nansen, Camilla Collett)
- Traumer og seire som deles av alle

**Lokalt minne** er stedsspesifikke historier og tradisjoner:
- Lokale helter og hendelser
- Industri- og arbeidshistorie
- Naturkatastrofer og ulykker
- Stedsnavn og lokale tradisjoner

**Spenninger mellom nivåene:**
Lokal historie kan utfordre eller nyansere nasjonal historie. Norsk krigshistorie ser annerledes ut fra et samisk perspektiv eller fra Nord-Norge enn fra Østlandet.

**Marginaliserte minner:**
Noen gruppers historie har blitt glemt eller undertrykt: samer, romanifolk, kvinner, arbeiderklassen.`,
    },
    {
      id: 'historie-2-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-2-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign hvordan andre verdenskrig minnes nasjonalt (f.eks. 8. mai) med hvordan den kanskje minnes annerledes lokalt i ulike deler av Norge.',
        hints: ['Tenk på Finnmark, Trondheim, Oslo, motstandsbevegelsen'],
        solution: 'Nasjonalt: 8. mai feirer frigjøring, motstandskamp og alliert seier. Lokalt: Finnmark opplevde tvangsevakuering og nedbrenning. Trondheim var hovedsete for tysk marine. Bygder som hadde mange NS-medlemmer har vanskeligere minner. Lofoten opplevde kommandoraid. Den nasjonale fortellingen forenkler en kompleks lokal virkelighet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
    {
      id: 'historie-2-4-example-1',
      type: 'example',
      title: 'Eksempel: Debatt om statuer',
      problem: 'Hvorfor har det vært debatt om å fjerne statuer av historiske personer, og hva sier debatten om minnekultur?',
      solution: `**Eksempler på statuedebatter:**
- USA: Statuer av sørstatsgeneraler fra borgerkrigen
- Belgia: Statuer av kong Leopold II (Kongo)
- Norge: Debatt om Winston Churchill (Bengal-hungersnøden)

**Argumenter for å fjerne:**
- Statuene ærer personer som begikk overgrep
- De representerer undertrykkelse for mange
- Offentlig rom bør ikke hylle problematiske skikkelser

**Argumenter for å beholde:**
- Vi kan ikke bedømme fortiden med dagens standarder
- Statuer er historiske dokumenter i seg selv
- Fjernelse er historieløst

**Mellomløsninger:**
- Kontekstualisering (informasjonsskilt)
- Flytte til museum
- Sette opp motvekt/nye statuer

**Hva lærer vi?**
Minnekultur er ikke nøytral - den er politisk. Hva vi minnes og hvordan, sier mye om maktforhold og verdier i samtiden.`,
    },
    {
      id: 'historie-2-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-2-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor tror du noen gruppers historie (som samenes eller kvinners) lenge var mindre synlig i norsk minnekultur? Har dette endret seg?',
        hints: ['Tenk på hvem som har hatt makt til å definere hva som er viktig'],
        solution: 'Historisk har makthavere (menn, majoritetsbefolkningen, eliten) bestemt hva som var "viktig" historie. Samisk historie ble sett som perifer, kvinners innsats som privat/uviktig. Dette har endret seg: Samisk kulturarv er nå beskyttet, kvinnehistorie er del av læreplanen, Sannhets- og forsoningskommisjonen gransker fornorskningspolitikken. Men det tar tid å endre etablerte narrativer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-2-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-2-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Bør gamle statuer og minnesmerker bevares selv om de ærer personer som i dag sees kritisk, eller bør de fjernes/endres? Begrunn svaret ditt.',
        hints: ['Tenk på balansen mellom å huske og å hedre'],
        solution: 'Argumenter varierer. En god drøfting bør: 1) Skille mellom å huske (bevissthet om fortiden) og å hedre (feire og opphøye). 2) Vurdere kontekst - er statuen satt opp for å feire eller for å informere? 3) Anerkjenne at minnekultur endres over tid. 4) Foreslå mulige løsninger (kontekstualisering, flytting, nye monumenter). Det finnes ikke ett riktig svar, men evnen til å se flere sider er viktig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_2_5: TextbookChapter = {
  id: 'historie-2-5',
  courseId: 'historie',
  chapterNumber: '2.5',
  title: 'Å skrive i historiefaget',
  description: 'Lære å skrive gode fagtekster, drøftinger og kildeanalyser i historie.',
  estimatedMinutes: 50,
  competenceGoals: ['formulere problemstillinger, finne og vurdere materiale', 'sammenligne ulike framstillinger'],
  content: [
    {
      id: 'historie-2-5-intro',
      type: 'text',
      content: `## Å skrive i historiefaget

Skriving er en av de viktigste ferdighetene du utvikler i historiefaget. Gjennom skriving viser du at du forstår historiske sammenhenger, kan bruke kilder kritisk, og evner å drøfte komplekse spørsmål. Å skrive i historie handler ikke bare om å gjengi fakta - det handler om å argumentere, analysere og reflektere.

**Hvorfor er skriving viktig i historie?**
- Du lærer å tenke systematisk og strukturert
- Du øver på å underbygge påstander med kilder og eksempler
- Du utvikler evnen til å se saker fra flere sider
- Du forbereder deg til skriftlig eksamen

I dette kapittelet skal du lære om de ulike skrivesjangrene i historiefaget, hvordan du bygger opp en god fagtekst, og hvordan du bruker kilder og fagbegreper på en overbevisende måte.`,
    },
    {
      id: 'historie-2-5-def-1',
      type: 'definition',
      title: 'Fagtekst i historie',
      content: `**Fagtekst** er en saklig, velbegrunnet tekst som bruker fagbegreper og kilder for å belyse et historisk emne.

**Kjennetegn på en god fagtekst i historie:**
- Klar problemstilling eller tematisk fokus
- Logisk oppbygging med innledning, hoveddel og avslutning
- Bruk av relevante kilder og kildehenvisninger
- Presis bruk av historiske fagbegreper
- Balansert framstilling som viser flere perspektiver
- Egne refleksjoner og vurderinger, ikke bare gjengivelse

**Vanlige sjangre i historiefaget:**
- **Kildeanalyse** - systematisk analyse av en eller flere historiske kilder
- **Drøftingsoppgave** - diskusjon av et historisk spørsmål fra flere sider
- **Sammenligningsoppgave** - sammenligning av hendelser, perioder eller framstillinger
- **Framstillingsoppgave** - redegjørelse for en historisk utvikling eller hendelse`,
    },
    {
      id: 'historie-2-5-text-2',
      type: 'text',
      content: `## Oppbygging og struktur

En god historisk fagtekst følger en tydelig struktur. Uansett om du skriver en kort oppgave eller en lengre drøfting, bør teksten ha tre hoveddeler:

**Innledning:**
- Presenter emnet og sett det i kontekst
- Formuler en klar problemstilling eller tese
- Fortell kort hva du skal gjøre i teksten
- Gi leseren en «veiviser» for resten av teksten

**Hoveddel:**
- Bygg opp argumentasjonen steg for steg
- Bruk avsnitt med tydelige temasetninger
- Underbygg påstander med kilder og eksempler
- Vis at du kan se saken fra flere sider
- Bruk fagbegreper presist

**Avslutning:**
- Oppsummer de viktigste poengene
- Svar på problemstillingen
- Løft blikket - hva er de større sammenhengene?
- Unngå å introdusere helt nye poenger

**Husk:** Hvert avsnitt bør ha én hovedidé. Start med en temasetning som forteller hva avsnittet handler om, utdyp med fakta og eksempler, og avslutt med en kobling tilbake til problemstillingen.`,
    },
    {
      id: 'historie-2-5-text-3',
      type: 'text',
      content: `## Kildebruk og kildehenvisning

I historiefaget er det helt avgjørende å vise hvor du har informasjonen fra. God kildebruk styrker argumentasjonen din og viser faglig integritet.

**Hvordan bruke kilder i teksten:**
- **Direkte sitat** - når du gjengir nøyaktig det kilden sier (bruk anførselstegn)
- **Parafrase** - når du gjengir innholdet med egne ord (referer likevel til kilden)
- **Referanse** - når du viser til en kilde som støtte for et poeng

**Kildehenvisning i teksten:**
Bruk fotnoter eller parenteser for å vise hvor informasjonen kommer fra.
- Eksempel med parentes: «Mange bønder mistet gårdene sine under svartedauden (Moseng m.fl., 2007, s. 234).»
- Eksempel med fotnote: «Mange bønder mistet gårdene sine under svartedauden.¹»

**Kildeliste:**
Oppgi alle kilder du har brukt i en egen liste til slutt i teksten. Inkluder forfatter, tittel, utgiver, årstall og eventuelt sidetall.

**Viktige prinsipper:**
- Bruk flere kilder for å belyse et emne, ikke bare én
- Vurder kildene kritisk - hvem har skrevet dette, og i hvilken kontekst?
- Skill mellom primærkilder (fra samtiden) og sekundærkilder (historikeres tolkninger)
- Vær ærlig om usikkerhet og uenighet mellom kilder`,
    },
    {
      id: 'historie-2-5-def-2',
      type: 'definition',
      title: 'Argumentasjon og drøfting',
      content: `**Drøfting** betyr å belyse et spørsmål fra flere sider og veie argumentene mot hverandre for å komme fram til en begrunnet konklusjon.

**PBE-modellen (Påstand - Begrunnelse - Eksempel):**
- **Påstand** - hva du mener eller hevder
- **Begrunnelse** - hvorfor du mener dette (logisk resonnement)
- **Eksempel** - konkret historisk bevis som støtter påstanden

**Drøftingsord du bør bruke:**
- «På den ene siden ... på den andre siden ...»
- «Et argument for dette er ... men det kan også hevdes at ...»
- «Til tross for ... kan vi likevel se at ...»
- «Selv om ... er det rimelig å hevde at ...»
- «En innvending mot dette synspunktet er ...»

**Viktig:** Å drøfte er ikke det samme som å liste opp argumenter. Du må aktivt veie argumentene mot hverandre og ta stilling til hva som er mest overbevisende.`,
    },
    {
      id: 'historie-2-5-example-1',
      type: 'example',
      title: 'Eksempel: Oppbygging av et drøftingsavsnitt',
      problem: 'Hvordan strukturerer du et godt drøftingsavsnitt om årsaker til den franske revolusjon?',
      solution: `**Eksempel på et godt strukturert drøftingsavsnitt:**

«En viktig årsak til den franske revolusjon var de store sosiale ulikhetene i det franske samfunnet. **(Påstand)** Den tredje stand, som utgjorde over 95 prosent av befolkningen, måtte bære nesten hele skattebyrden, mens adel og geistlighet var fritatt. **(Begrunnelse med fakta)** Opplysningsfilosofen Rousseau kritiserte dette systemet og argumenterte for at all makt burde utgå fra folket. **(Eksempel/kilde)** Det kan imidlertid innvendes at sosial ulikhet hadde eksistert i århundrer uten å utløse revolusjon. **(Motargument)** Det som var nytt i 1789, var kombinasjonen av økonomisk krise, politisk handlingslammelse og nye ideer om folkestyre som gjorde at befolkningen ikke lenger aksepterte urettferdigheten. **(Vurdering/konklusjon)**»

**Hva gjør dette avsnittet godt?**
1. Det starter med en tydelig påstand
2. Påstanden underbygges med konkrete fakta
3. Det trekker inn en relevant kilde (Rousseau)
4. Det viser evne til å se motargumenter
5. Det avslutter med en vurdering som binder argumentene sammen`,
    },
    {
      id: 'historie-2-5-example-2',
      type: 'example',
      title: 'Eksempel: Innledning til en historisk drøftingsoppgave',
      problem: 'Hvordan skriver du en god innledning til oppgaven: «Vurder betydningen av den industrielle revolusjon for utviklingen av det moderne samfunnet»?',
      solution: `**Eksempel på en god innledning:**

«Den industrielle revolusjon, som startet i Storbritannia på slutten av 1700-tallet, regnes ofte som et av de viktigste vendepunktene i menneskehetens historie. Overgangen fra håndverk og jordbruk til maskinbasert industriproduksjon endret ikke bare økonomien, men også samfunnsstrukturer, politikk og menneskers dagligliv. Men hvor stor var egentlig betydningen av denne omveltningen? I denne oppgaven vil jeg drøfte hvordan den industrielle revolusjon påvirket utviklingen av det moderne samfunnet, med vekt på økonomiske, sosiale og politiske endringer. Jeg vil argumentere for at den industrielle revolusjon la grunnlaget for det moderne samfunnet slik vi kjenner det, men at den også skapte nye problemer som vi fortsatt sliter med i dag.»

**Hva gjør denne innledningen god?**
1. **Kontekstualisering** - plasserer emnet i tid og sted
2. **Relevans** - forklarer hvorfor dette er viktig
3. **Problemstilling** - stiller et tydelig spørsmål
4. **Veiviser** - forteller hva teksten skal handle om
5. **Tese** - antyder hva forfatteren vil argumentere for`,
    },
    {
      id: 'historie-2-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-2-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Skriv et drøftingsavsnitt der du bruker PBE-modellen (Påstand - Begrunnelse - Eksempel) til å besvare følgende spørsmål: Var vikingtiden hovedsakelig preget av plyndring og vold, eller var handel og kulturutveksling like viktig?',
        hints: [
          'Start med en tydelig påstand som svarer på spørsmålet',
          'Bruk konkrete historiske eksempler som bevis',
          'Husk å vise at du ser saken fra flere sider',
        ],
        solution: 'Et godt svar bruker PBE-modellen: Påstand (f.eks. «Vikingtiden var preget av både vold og handel, men handelen har blitt undervurdert»), Begrunnelse (vikingene etablerte handelsruter fra Skandinavia til Bysants og Bagdad), Eksempel (handelsbyene Birka og Hedeby, arabiske sølvmynter funnet i Skandinavia). Et sterkt svar inkluderer også et motargument (kildene fra klostrene som ble plyndret gir et ensidig bilde) og en avsluttende vurdering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-2-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-2-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Skriv en innledning til følgende drøftingsoppgave: «Vurder hvordan svartedauden påvirket det norske samfunnet på kort og lang sikt.» Innledningen skal inneholde kontekstualisering, problemstilling og veiviser.',
        hints: [
          'Plasser svartedauden i tid og sted i innledningen',
          'Formuler et tydelig spørsmål du vil besvare',
          'Fortell kort hva du vil ta opp i hoveddelen',
        ],
        solution: 'En god innledning kontekstualiserer (svartedauden kom til Norge i 1349, drepte anslagsvis halvparten av befolkningen), stiller en tydelig problemstilling (hvordan påvirket dette samfunnet?), og gir en veiviser (jeg vil se på konsekvenser for økonomi, politikk og sosiale forhold på kort sikt, og deretter vurdere langtidsvirkningene). En tese kan antydes: at svartedauden var en katastrofe på kort sikt, men at den på lang sikt bidro til sosiale endringer som gagnet de overlevende.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-2-5-text-4',
      type: 'text',
      content: `## Ulike skriveoppgaver i historie

I historiefaget møter du flere typer skriveoppgaver, og hver type krever sin egen tilnærming:

**Kildeanalyse:**
Her skal du analysere en eller flere historiske kilder systematisk. Du bør vurdere:
- Hva slags kilde er dette? (brev, lov, tale, bilde, statistikk)
- Hvem har laget kilden, når og hvorfor?
- Hva forteller kilden oss om tiden den ble laget i?
- Hvor pålitelig er kilden, og hva kan den ikke fortelle oss?

**Drøftingsoppgave:**
Her skal du diskutere et historisk spørsmål fra flere sider. Du bør:
- Presentere ulike perspektiver og argumenter
- Veie argumentene mot hverandre
- Bruke kilder og eksempler som bevis
- Konkludere med din egen vurdering

**Sammenligningsoppgave:**
Her skal du finne likheter og forskjeller mellom to eller flere historiske fenomener. Du bør:
- Velge klare sammenligningskriterier
- Behandle begge sider likt grundig
- Forklare hvorfor det er interessant å sammenligne dem
- Vurdere hva likhetene og forskjellene forteller oss

**Framstillingsoppgave:**
Her skal du redegjøre for en historisk utvikling eller hendelse. Du bør:
- Strukturere framstillingen kronologisk eller tematisk
- Forklare årsaker, forløp og konsekvenser
- Sette hendelsen i en større sammenheng`,
    },
    {
      id: 'historie-2-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-2-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Du skal skrive en kort kildeanalyse (ca. 300 ord). Velg én av følgende kilder: a) Et fotografi fra en norsk fabrikk rundt 1900, b) En tale av Martin Luther King Jr. fra 1963, c) En propagandaplakat fra andre verdenskrig. Bruk spørsmålene i teksten over som utgangspunkt for analysen.',
        hints: [
          'Begynn med å identifisere kildetypen og opphavet',
          'Sett kilden i historisk kontekst',
          'Vurder kildens pålitelighet og begrensninger',
        ],
        solution: 'En god kildeanalyse følger en systematisk tilnærming: 1) Presentasjon av kilden (type, opphav, tidspunkt), 2) Historisk kontekst (hva skjedde i samtiden?), 3) Innholdsanalyse (hva forteller kilden?), 4) Kildekritisk vurdering (pålitelighet, tendenser, begrensninger). For eksempel ved et fabrikkfotografi fra 1900: Kilden er et fotografi, trolig tatt av en profesjonell fotograf. Det viser arbeidsforhold under industrialiseringen. Fotografiet kan gi et realistisk inntrykk, men fotografen kan ha valgt motiv bevisst. Hvem bestilte bildet, og i hvilken hensikt?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-2-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-2-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Skriv en sammenligningsoppgave (ca. 400 ord) der du sammenligner den franske revolusjon (1789) med den amerikanske revolusjon (1776). Bruk minst to sammenligningskriterier (f.eks. årsaker, ideologisk grunnlag, utfall).',
        hints: [
          'Lag en tabell med likheter og forskjeller før du begynner å skrive',
          'Behandle begge revolusjonene like grundig',
          'Bruk sammenligningsord som «i likhet med», «til forskjell fra», «på samme måte»',
        ],
        solution: 'Et godt svar struktureres tematisk (ikke først den ene, så den andre). For eksempel: 1) Årsaker - begge hadde bakgrunn i opplysningsfilosofien og motstand mot urettferdig styre, men den amerikanske handlet om frigjøring fra kolonimakt mens den franske handlet om intern omveltning. 2) Ideologisk grunnlag - begge bygde på ideer om frihet og rettigheter, men den franske gikk lenger i sosial omveltning. 3) Utfall - den amerikanske førte til en stabil republikk, mens den franske førte til terror og til slutt Napoleons diktatur. Konklusjonen bør reflektere over hva sammenligningen viser oss om revolusjoner generelt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-2-5-tip-1',
      type: 'tip',
      title: 'Tips for eksamensskriving i historie',
      content: `**Før eksamen:**
- Øv på å skrive under tidspress - sett en tidsbegrensning og skriv
- Lag deg et repertoar av historiske eksempler du kan bruke
- Repeter fagbegreper og sørg for at du bruker dem korrekt
- Øv på å lage disposisjoner raskt

**Under eksamen:**
- Les oppgaven nøye - hva er det du faktisk blir bedt om å gjøre?
- Bruk 10-15 minutter på å planlegge før du skriver
- Lag en kort disposisjon med hovedpoengene
- Skriv tydelig og strukturert med avsnitt
- Bruk fagbegreper og vis at du kan dem
- Referer til kilder og konkrete eksempler
- Svar på det oppgaven spør om - ikke skriv alt du kan om emnet

**Typiske feil å unngå:**
- Å bare gjengi fakta uten å analysere eller drøfte
- Å glemme å svare på problemstillingen
- Å skrive for lange innledninger på bekostning av hoveddelen
- Å presentere bare én side av en sak i en drøftingsoppgave
- Å bruke upresist eller hverdagslig språk i stedet for fagbegreper`,
    },
    {
      id: 'historie-2-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-2-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Velg én av følgende problemstillinger og skriv en komplett fagtekst (ca. 500-700 ord) med innledning, hoveddel og avslutning: a) «Vurder betydningen av reformasjonen for utviklingen av det norske samfunnet.» b) «Drøft i hvilken grad kolonialismen kan forklare fattigdom i Afrika i dag.» c) «Sammenlign årsaker til første og andre verdenskrig.»',
        hints: [
          'Lag en disposisjon med minst tre hovedpoenger før du skriver',
          'Bruk PBE-modellen i hvert avsnitt i hoveddelen',
          'Sørg for at innledningen inneholder problemstilling og veiviser',
          'Avslutningen skal oppsummere og svare på problemstillingen',
        ],
        solution: 'Et godt svar følger tydelig tredelt struktur: Innledningen kontekstualiserer emnet, formulerer problemstillingen tydelig og gir en veiviser. Hoveddelen er organisert i avsnitt som hvert bruker PBE-modellen, med klar argumentasjon og konkrete historiske eksempler. Teksten viser evne til å se saken fra flere sider og bruker fagbegreper presist. Avslutningen oppsummerer hovedfunnene og gir et klart svar på problemstillingen, gjerne med en refleksjon om relevansen for vår tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_2_6: TextbookChapter = {
  id: 'historie-2-6',
  courseId: 'historie',
  chapterNumber: '2.6',
  title: 'Muntlige ferdigheter og debatt',
  description: 'Utvikle muntlige ferdigheter gjennom presentasjoner, debatter og rollespill i historie.',
  estimatedMinutes: 45,
  competenceGoals: ['sammenligne ulike framstillinger', 'historiebruk av ulike aktører'],
  content: [
    {
      id: 'historie-2-6-intro',
      type: 'text',
      content: `## Muntlige ferdigheter i historiefaget

Muntlig kommunikasjon er en grunnleggende ferdighet i historiefaget. Å kunne presentere historisk kunnskap muntlig, delta i debatter og diskusjoner, og formidle komplekse sammenhenger til andre, er ferdigheter du trenger både på eksamen og i livet ellers.

**Muntlige ferdigheter i historie handler om å:**
- Formidle historisk kunnskap klart og strukturert
- Argumentere for et synspunkt med historiske kilder som grunnlag
- Lytte kritisk til andres framstillinger og stille gode spørsmål
- Sette seg inn i ulike perspektiver og formidle dem troverdig
- Bruke fagspråk presist i muntlige framstillinger

I læreplanen (LK20) legges det vekt på at elevene skal kunne sammenligne ulike framstillinger og vurdere hvordan ulike aktører bruker historie. Muntlige ferdigheter er sentrale for å mestre dette.`,
    },
    {
      id: 'historie-2-6-def-1',
      type: 'definition',
      title: 'Muntlig framstilling og retorikk',
      content: `**Muntlig framstilling** i historie betyr å presentere historisk kunnskap, analyser eller vurderinger gjennom tale.

**Retorikk** er kunsten å overbevise gjennom tale. De tre klassiske appellformene er:
- **Etos** - troverdighet: Vis at du har kunnskap og er pålitelig. I historie betyr dette å bruke kilder og fagbegreper korrekt.
- **Patos** - følelser: Engasjer tilhørerne gjennom konkrete eksempler, fortellinger og levende framstilling.
- **Logos** - logikk: Bygg opp argumentene logisk og sammenhengende. Underbygg påstander med fakta og kilder.

**Formidlingsevne** er evnen til å gjøre komplekst stoff forståelig og interessant for tilhørerne. God formidling krever at du tilpasser språk og innhold til målgruppen.`,
    },
    {
      id: 'historie-2-6-text-2',
      type: 'text',
      content: `## Å holde en historisk presentasjon

Enten du holder et foredrag i klassen, presenterer et prosjekt eller forbereder deg til muntlig eksamen, gjelder de samme grunnprinsippene for en god historisk presentasjon.

**Struktur for en historisk presentasjon:**

**1. Åpning (fang oppmerksomheten):**
- Start med et spørsmål, et sitat eller en overraskende opplysning
- Presenter emnet og problemstillingen tydelig
- Fortell hva du skal snakke om (veiviser)

**2. Hoveddel (presenter innholdet):**
- Organiser stoffet tematisk eller kronologisk
- Ha 3-4 hovedpoenger - ikke prøv å dekke alt
- Bruk konkrete eksempler og kildereferanser
- Vis at du kan drøfte, ikke bare gjengi

**3. Avslutning (oppsummer og konkluder):**
- Oppsummer hovedpoengene kort
- Svar på problemstillingen
- Avslutt med en tankevekkende refleksjon eller et spørsmål

**Praktiske råd:**
- Bruk stikkord, ikke ferdigskrevet manus du leser opp
- Ha øyekontakt med tilhørerne
- Varier stemmebruk - tempo, volum og pauser
- Bruk visuelle hjelpemidler (bilder, kart, tidslinje) med måte
- Hold deg innenfor tidsrammen - øv med klokke`,
    },
    {
      id: 'historie-2-6-example-1',
      type: 'example',
      title: 'Eksempel: Struktur for en presentasjon om den industrielle revolusjon',
      problem: 'Hvordan kan en 10-minutters presentasjon om den industrielle revolusjonens konsekvenser struktureres?',
      solution: `**Forslag til presentasjonsstruktur:**

**Åpning (1-2 minutter):**
«Visste dere at en tekstilarbeider i Manchester i 1830 jobbet 14-16 timer om dagen, seks dager i uken, og at barn helt ned i fem-årsalderen ble brukt som arbeidskraft? Den industrielle revolusjon forandret verden - men til det bedre, eller til det verre? I denne presentasjonen vil jeg se på tre konsekvenser: økonomiske, sosiale og miljømessige.»

**Hovedpoeng 1: Økonomiske konsekvenser (2-3 minutter)**
- Enorm økning i produksjon og rikdom
- Men rikdommen var svært ujevnt fordelt
- Kildeeksempel: Statistikk over BNP-vekst i Storbritannia

**Hovedpoeng 2: Sosiale konsekvenser (2-3 minutter)**
- Urbanisering og nye sosiale klasser
- Elendige arbeids- og boforhold for arbeiderklassen
- Kildeeksempel: Friedrich Engels' beskrivelse av Manchester

**Hovedpoeng 3: Miljøkonsekvenser (2 minutter)**
- Forurensning og naturødeleggelse
- Starten på klimaendringene vi ser i dag
- Kildeeksempel: Samtidige beskrivelser av London-smog

**Avslutning (1-2 minutter):**
«Den industrielle revolusjon la grunnlaget for velstanden vi nyter i dag, men prisen var høy - for arbeiderne den gang, og for miljøet vårt i dag.»

**Denne strukturen fungerer fordi den:**
- Starter med noe konkret og engasjerende
- Har tre klare hovedpoenger (ikke for mange)
- Bruker kilder i hvert hovedpoeng
- Avslutter med en refleksjon som knytter fortid og nåtid sammen`,
    },
    {
      id: 'historie-2-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-2-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Lag en disposisjon for en 10-minutters presentasjon om ett av følgende emner: a) Den franske revolusjonens betydning for demokratiutviklingen, b) Hvordan andre verdenskrig endret kvinners rolle i samfunnet, c) Kolonialismens konsekvenser i Afrika. Disposisjonen skal inneholde åpning, tre hovedpoenger med kildereferanser, og avslutning.',
        hints: [
          'Bruk strukturen fra eksempelet over',
          'Tenk på en engasjerende åpning som fanger oppmerksomheten',
          'Hvert hovedpoeng bør ha minst én kildereferanse',
        ],
        solution: 'En god disposisjon har: 1) En konkret og engasjerende åpning (spørsmål, sitat, overraskende fakta), 2) Tre avgrenset hovedpoenger som til sammen belyser emnet, 3) Kildereferanser knyttet til hvert poeng, 4) En avslutning som oppsummerer og reflekterer. For eksempel om den franske revolusjonens betydning: Åpning med erklæringen om menneskerettighetene, hovedpoenger om politiske rettigheter, folkesuverenitetsideen og inspirasjon for senere revolusjoner, avslutning om arven fra 1789 i dagens demokratier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-2-6-text-3',
      type: 'text',
      content: `## Debatt og diskusjon i historiefaget

Historisk debatt er en viktig læringsform der du øver på å argumentere, lytte kritisk og se saker fra flere sider. I en historisk debatt bruker du kunnskap og kilder som våpen - ikke personlige meninger uten grunnlag.

**Regler for god historisk debatt:**
- Baser argumentene dine på historiske fakta og kilder
- Lytt til motpartens argumenter før du svarer
- Angrip argumenter, ikke personer
- Innrøm når motparten har gode poenger
- Bruk fagspråk og vær presis
- Hold deg til temaet

**Debatteknikker:**
- **Tilbakevisning:** Vis at motpartens argument bygger på feil fakta eller svak logikk
- **Nyansering:** Anerkjenn motpartens poeng, men vis at bildet er mer komplekst
- **Kontekstualisering:** Sett motpartens argument i en bredere sammenheng som svekker det
- **Kildebruk:** Trekk inn en kilde som motbeviser motpartens påstand

**Diskusjonsformer i historiefaget:**
- **Plenumsdebatt:** Hele klassen diskuterer et tema med ordstyrer
- **Paneldebatt:** En gruppe debatterer mens resten av klassen observerer og stiller spørsmål
- **Rollespill-debatt:** Elevene inntar roller som historiske personer eller grupper
- **Filosofisk samtale:** Åpen utforsking av et historisk spørsmål uten forhåndsbestemte svar`,
    },
    {
      id: 'historie-2-6-def-2',
      type: 'definition',
      title: 'Historisk empati og perspektivtaking',
      content: `**Historisk empati** er evnen til å sette seg inn i hvordan mennesker i fortiden tenkte, følte og handlet ut fra sin tids forutsetninger. Det betyr ikke å unnskylde eller godta alt som ble gjort, men å forsøke å forstå hvorfor mennesker handlet som de gjorde.

**Perspektivtaking** betyr å se en historisk hendelse fra ulike aktørers synspunkt. For eksempel kan kolonialismen ses fra:
- Kolonimaktenes perspektiv
- De kolonisertes perspektiv
- Handelsselskapenes perspektiv
- Misjonærenes perspektiv

**Viktige prinsipper:**
- Unngå **presentisme** - å bedømme fortiden utelukkende med nåtidens verdier
- Anerkjenn at mennesker i fortiden hadde andre kunnskaper, verdier og muligheter enn vi har
- Skill mellom å **forstå** og å **forsvare** historiske handlinger
- Bruk kilder fra samtiden for å forstå hvordan mennesker faktisk tenkte

**Rollespill** er en effektiv metode for å trene historisk empati. Ved å innta en historisk persons rolle, tvinges du til å tenke deg inn i deres situasjon.`,
    },
    {
      id: 'historie-2-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-2-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forbered og gjennomfør en debatt i grupper: «Var unionsoppløsningen i 1905 det viktigste vendepunktet i norsk historie?» Del klassen i to - én gruppe argumenterer for, én gruppe argumenterer mot. Bruk minst tre historiske argumenter med kildereferanser på hver side.',
        hints: [
          'Tenk på alternative vendepunkter: 1814, 1884, 1945, EF-avstemningen 1972',
          'Bruk konkrete historiske kilder og fakta, ikke bare meninger',
          'Forbered også motargumenter til det dere tror motparten vil si',
        ],
        solution: 'For-siden kan argumentere med: Norges selvstendighet som nasjon, betydningen for demokratisk utvikling, og nasjonal identitet. Mot-siden kan peke på 1814 (Grunnloven), 1884 (parlamentarisme) eller 1945 (frigjøring fra okkupasjon) som viktigere vendepunkter. Gode debattanter bruker kilder (f.eks. Grunnloven, taler fra 1905, statistikk over stemmegivning ved folkeavstemningen) og nyanserer ved å anerkjenne motpartens poenger. Det viktigste er ikke hvem som «vinner», men kvaliteten på argumentasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-2-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-2-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Rollespill: Du skal innta rollen som én av følgende historiske personer og holde en kort tale (2-3 minutter) der du forsvarer ditt synspunkt: a) En norsk bonde under Grunnlovsforsamlingen i 1814, b) En suffragette som kjemper for kvinners stemmerett rundt 1910, c) En samisk aktivist under Alta-konflikten i 1981. Forbered talen skriftlig før du framfører den.',
        hints: [
          'Undersøk den historiske personen/gruppens faktiske argumenter og situasjon',
          'Bruk språk og argumenter som er troverdige for tidsperioden',
          'Prøv å formidle personens følelser og motivasjon, ikke bare fakta',
        ],
        solution: 'En god rolletale viser historisk empati ved å bruke argumenter og språk som er troverdig for tiden. For bonden i 1814: argumenter om bondestanden som nasjonens ryggrad, krav om representasjon. For suffragetten: argumenter om likestilling, kvinner som skattebetalere og samfunnsborgere. For den samiske aktivisten: argumenter om urfolksrettigheter, naturvern, kulturell overlevelse. Viktig: bruk faktisk historisk kunnskap, ikke bare det du tror personen ville sagt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-2-6-text-4',
      type: 'text',
      content: `## Lytting og kritisk vurdering

En viktig del av muntlige ferdigheter er å lytte kritisk til andres framstillinger av historie. Enten det er en medelev som presenterer, en politiker som bruker historiske argumenter, eller en dokumentar du ser, bør du stille deg selv noen viktige spørsmål.

**Kritiske spørsmål til muntlige framstillinger:**
- Hva er framstillingens hovedbudskap?
- Hvilke kilder og bevis brukes? Er de troverdige?
- Hvilke perspektiver kommer fram - og hvilke mangler?
- Er framstillingen balansert, eller er den ensidig?
- Brukes det retoriske virkemidler for å overbevise? Hvilke?
- Stemmer framstillingen med det du allerede vet om emnet?

**Å gi konstruktiv tilbakemelding:**
Når du skal vurdere en medelevs presentasjon, bør du:
- Starte med det som fungerte godt
- Peke på konkrete ting som kan forbedres
- Gi faglige tilbakemeldinger (innhold, kildebruk, argumentasjon)
- Gi formelle tilbakemeldinger (struktur, formidling, tidsbruk)
- Være saklig og respektfull

**Å stille gode spørsmål:**
Gode spørsmål etter en presentasjon er ikke «gotcha-spørsmål» designet for å ta presentatøren, men spørsmål som utdyper forståelsen:
- «Kan du utdype hva du mente med...?»
- «Hvordan ville du svart på innvendingen om at...?»
- «Hvilke andre perspektiver finnes på dette?»
- «Hvilke kilder brukte du for å komme fram til denne konklusjonen?»`,
    },
    {
      id: 'historie-2-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-2-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Se eller lytt til en historisk dokumentar, en politisk tale som bruker historiske argumenter, eller en medelevs presentasjon. Skriv en kort kritisk vurdering (ca. 200 ord) der du svarer på: Hva er hovedbudskapet? Hvilke kilder brukes? Hvilke perspektiver mangler? Er framstillingen balansert?',
        hints: [
          'Bruk de kritiske spørsmålene fra teksten over som utgangspunkt',
          'Vær konkret - pek på spesifikke eksempler',
          'Skille mellom faglig innhold og formidlingsform',
        ],
        solution: 'En god kritisk vurdering identifiserer tydelig framstillingens hovedbudskap, vurderer kildebruken (er det primærkilder eller sekundærkilder? Hvor mange?), peker på perspektiver som mangler (f.eks. en dokumentar om kolonialismen som bare viser europeisk perspektiv), og vurderer balansen (presenteres flere sider av saken?). Vurderingen bør være saklig og begrunnet, ikke bare «bra» eller «dårlig».',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-2-6-tip-1',
      type: 'tip',
      title: 'Tips for muntlig eksamen i historie',
      content: `**Forberedelse til muntlig eksamen:**
- Lag oversikter over de viktigste emnene i læreplanen
- Øv på å snakke om historiske emner uten manus - bruk stikkord
- Forbered deg på å bli stilt oppfølgingsspørsmål
- Øv med en venn eller foran speilet - ta tiden
- Lag et «eksempelbibliotek» med historiske eksempler du kan bruke

**Under eksamen:**
- Les oppgaven grundig og bruk forberedelsestiden godt
- Lag en kort disposisjon med stikkord
- Start med en tydelig innledning der du viser at du forstår oppgaven
- Bruk fagbegreper og vis at du kan dem
- Trekk inn konkrete eksempler og kildereferanser
- Vis at du kan drøfte - ikke bare gjengi
- Vær forberedt på å svare på spørsmål fra sensor
- Avslutt med en tydelig konklusjon

**Vanlige fallgruver:**
- Å lese rett fra manus uten øyekontakt
- Å snakke for fort eller for lavt
- Å bare ramse opp fakta uten analyse
- Å ikke svare på spørsmålene sensor stiller
- Å gå tom for stoff fordi du ikke har øvd nok

**Husk:** Sensor ser etter om du kan bruke historisk kunnskap aktivt - ikke bare om du kan gjengi det. Vis at du forstår sammenhenger, kan drøfte og vurdere.`,
    },
    {
      id: 'historie-2-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-2-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Tren til muntlig eksamen: Trekk et emne fra læreplanen i historie (eller velg selv) og forbered en 5-minutters presentasjon. Bruk 30 minutter på forberedelse med stikkordark. Framfør presentasjonen for en medelev, som deretter stiller tre oppfølgingsspørsmål. Bytt roller.',
        hints: [
          'Bruk forberedelsestiden til å lage en disposisjon, ikke et ferdigskrevet manus',
          'Sørg for å ha en tydelig innledning, hoveddel og avslutning',
          'Forbered deg på å bli spurt om kilder, perspektiver og sammenhenger',
        ],
        solution: 'Denne øvelsen simulerer en ekte eksamenssituasjon. Et godt resultat viser: 1) Strukturert presentasjon med innledning, hoveddel og avslutning, 2) Bruk av fagbegreper og konkrete historiske eksempler, 3) Evne til å drøfte og ikke bare gjengi, 4) Evne til å svare saklig og faglig på oppfølgingsspørsmål. Den som stiller spørsmål, øver på kritisk lytting og på å formulere gode faglige spørsmål.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// FORHISTORIE: Menneskets utvikling og de første samfunnene
// ============================================================================

export const CHAPTER_HISTORIE_FORHISTORIE_1: TextbookChapter = {
  id: 'historie-forhistorie-1',
  courseId: 'historie',
  chapterNumber: '3.1',
  title: 'Menneskets utvikling og steinalderen',
  description:
    'Fra de tidligste hominidene til steinalderens jeger-sanker-samfunn, hulemaleriene og de første menneskene i Norden.',
  estimatedMinutes: 55,
  competenceGoals: ['reflektere over hvordan fortiden former oss'],
  content: [
    {
      id: 'historie-forhistorie-1-intro',
      type: 'text',
      content: `## Menneskets lange reise

Historien om menneskeheten begynner ikke med de første byene eller skriftspråkene -- den begynner millioner av år tilbake, på det afrikanske kontinentet. Her utviklet våre tidligste forfedre seg fra apeliknende skapninger til det moderne mennesket vi kjenner i dag. Forhistorien -- tiden før skriftens oppfinnelse -- utgjør den aller lengste delen av menneskets historie, og det er i denne perioden de mest grunnleggende trekkene ved det å være menneske ble formet.

**Forhistorien deles gjerne inn i:**
- **Eldre steinalder** (paleolitikum): ca. 2,5 millioner år siden -- ca. 10 000 f.Kr.
- **Yngre steinalder** (neolitikum): ca. 10 000 -- ca. 1800 f.Kr. (i Norden)
- **Bronsealder**: ca. 1800 -- 500 f.Kr. (i Norden)
- **Jernalder**: ca. 500 f.Kr. -- ca. 1050 e.Kr. (i Norden)

Disse periodene overlapper geografisk -- ulike deler av verden gikk gjennom fasene til ulik tid. I dette kapittelet fokuserer vi på den eldste perioden: menneskets opprinnelse og eldre steinalder.`,
    },
    {
      id: 'historie-forhistorie-1-def-1',
      type: 'definition',
      title: 'Hominider og Homo sapiens',
      content: `**Hominider** er den biologiske familien som inkluderer mennesker og våre nærmeste utdødde slektninger. De viktigste er:

**Australopithecus** (ca. 4--2 millioner år siden):
- Tidlige hominider som levde i Afrika
- Gikk oppreist, men hadde små hjerner
- "Lucy" (funnet i Etiopia, 1974) er det mest kjente fossilet

**Homo erectus** (ca. 1,9 millioner -- 100 000 år siden):
- Første hominid til å forlate Afrika
- Større hjerne enn Australopithecus
- Brukte avanserte steinredskaper og kontrollerte ild

**Homo sapiens** (ca. 300 000 år siden -- nå):
- Det moderne mennesket
- Oppsto i Afrika
- Utviklet språk, kunst og kompleks tenkning
- Den eneste gjenlevende menneskearten

**Viktig:** Mennesket "stammer ikke fra apene". Vi deler en felles forfader med moderne aper, men har utviklet oss langs ulike evolusjonære linjer.`,
    },
    {
      id: 'historie-forhistorie-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-forhistorie-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom Australopithecus, Homo erectus og Homo sapiens. Hva var de viktigste utviklingstrekkene fra den ene arten til den neste?',
        hints: [
          'Tenk på hjernestørrelse, verktøybruk, spredning og evne til abstrakt tenkning',
        ],
        solution:
          'Australopithecus gikk oppreist, men hadde liten hjerne og brukte enkle verktøy. Homo erectus hadde større hjerne, brukte mer avanserte steinredskaper, kontrollerte ild og var første hominid til å forlate Afrika. Homo sapiens har den største hjernen, utviklet språk, kunst og evne til abstrakt tenkning. De viktigste utviklingstrekkene er: 1) Økende hjernestørrelse. 2) Stadig mer avansert verktøybruk. 3) Bedre kommunikasjon og sosialt samarbeid. 4) Evne til å tilpasse seg ulike miljøer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-forhistorie-1-text-2',
      type: 'text',
      content: `## "Out of Africa" -- menneskets spredning

Den rådende vitenskapelige teorien om menneskets opprinnelse kalles "Out of Africa"-teorien (også kalt "den afrikanske opprinnelsesmodellen"). Den hevder at alle moderne mennesker stammer fra en felles populasjon som levde i Afrika, og at grupper av Homo sapiens vandret ut derfra og spredte seg over hele kloden.

**Hovedtrekkene i "Out of Africa"-teorien:**
- Homo sapiens oppsto i Afrika for ca. 300 000 år siden
- For ca. 70 000--100 000 år siden begynte grupper å vandre ut av Afrika
- De spredte seg først til Midtøsten, deretter til Asia, Europa og til slutt Amerika og Oseania
- Alle ikke-afrikanske mennesker nedstammer fra disse utvandrergruppene
- Eldre menneskearter (som neandertalerne i Europa) døde ut, men noe genblanding fant sted

**Bevisene:**
- DNA-studier viser at alle mennesker har afrikansk opprinnelse
- Fossilfunn støtter tidslinjen
- Ikke-afrikanere har 1--4 % neandertaler-DNA, noe som viser at artene møttes og fikk barn`,
    },
    {
      id: 'historie-forhistorie-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-forhistorie-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Drøft: "Out of Africa"-teorien viser at alle mennesker har felles opprinnelse. Hvilken betydning kan denne kunnskapen ha for hvordan vi ser på forskjeller mellom mennesker i dag?',
        hints: [
          'Tenk på rasisme, nasjonalisme og identitet',
          'Hva betyr det at genetiske forskjeller mellom menneskegrupper er minimale?',
        ],
        solution:
          'En god drøfting kan peke på at: 1) Alle mennesker er biologisk sett én art med felles opprinnelse, noe som undergraver rasistiske ideologier. 2) Genetiske forskjeller mellom menneskegrupper er svært små (ca. 0,1 % variasjon). 3) Ytre trekk som hudfarge er overfladiske tilpasninger til ulike miljøer. 4) Kulturelle forskjeller skyldes historiske og geografiske forhold, ikke biologiske. 5) Kunnskapen kan fremme fellesskap og forståelse på tvers av kulturer, men den kan også bli ignorert av de som ønsker å opprettholde skillelinjer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-forhistorie-1-text-3',
      type: 'text',
      content: `## Livet som jeger og sanker

I hundretusener av år levde mennesker som jegere og sankere. Dette betyr at de fikk maten sin ved å jakte på dyr, fiske og samle inn spiselige planter, nøtter, bær og røtter. De produserte ikke mat -- de hentet det naturen tilbød.

**Kjennetegn ved jeger-sanker-samfunn:**
- **Små grupper:** Typisk 20--50 personer i en flokk
- **Nomadisk livsstil:** Fulgte byttedyrene og sesongene
- **Arbeidsdeling:** Menn jaktet gjerne storvilt, kvinner samlet planter (men dette var ikke absolutt)
- **Egalitært samfunn:** Lite sosial lagdeling, ingen formelle ledere med makt
- **Muntlig kultur:** Kunnskap og tradisjoner ble overført gjennom fortellertradisjoner
- **Kort arbeidstid:** Studier av moderne jeger-sankere viser at de "arbeidet" bare 3--5 timer daglig

**Verktøy og teknologi:**
- Steinredskaper (håndøkser, skrapere, pilspisser)
- Ild til matlaging, varme og beskyttelse
- Klær av dyrehuder
- Våpen som spyd, bue og pil (fra ca. 70 000 år siden)

**Sosial organisering:**
Jeger-sanker-samfunn var preget av samarbeid og deling. Mat ble delt i gruppen, og gjensidig avhengighet var nødvendig for overlevelse. Eldre medlemmer hadde viktige roller som kunnskapsbærere.`,
    },
    {
      id: 'historie-forhistorie-1-def-2',
      type: 'definition',
      title: 'Steinalderens perioder',
      content: `**Paleolitikum** (eldre steinalder, ca. 2,5 millioner -- ca. 10 000 f.Kr.):
- Mennesker lever som jegere og sankere
- Steinredskapene er hugget, ikke slipt
- Nomadisk livsstil
- Deles inn i eldre, midtre og yngre paleolitikum

**Mesolitikum** (mellomsteinalder, ca. 10 000 -- ca. 4000 f.Kr. i Norden):
- Overgangsfase etter istiden
- Mer variert kosthold (mer fisk og skalldyr)
- Mindre, mer spesialiserte verktøy
- Begynnende bofasthet i noen områder

**Neolitikum** (yngre steinalder, ca. 4000 -- ca. 1800 f.Kr. i Norden):
- Jordbruk introduseres
- Slipte steinredskaper
- Bofasthet og de første landsbyene
- Keramikk og veving

Dateringene varierer sterkt mellom ulike deler av verden. I Midtøsten begynte neolitikum allerede ca. 10 000 f.Kr., mens det i Norden først kom ca. 4000 f.Kr.`,
    },
    {
      id: 'historie-forhistorie-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-forhistorie-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Noen forskere har kalt jeger-sanker-samfunnet for "det opprinnelige velstandssamfunnet" fordi folk hadde rikelig fritid og få materielle bekymringer. Drøft denne påstanden. Hva var fordelene og ulempene med jeger-sanker-livsstilen sammenlignet med moderne liv?',
        hints: [
          'Tenk på arbeidstid, helse, frihet, men også risiko, barnedødelighet og sult',
        ],
        solution:
          'Fordeler: 1) Kort arbeidstid (3--5 timer daglig). 2) Variert kosthold ga god ernæring. 3) Egalitært samfunn uten formelt hierarki. 4) Sterk sosial tilhørighet. 5) Ingen gjeld, skatt eller lønnsslaveri. Ulemper: 1) Høy barnedødelighet. 2) Kort forventet levealder (ca. 30--35 år). 3) Sårbar for naturkatastrofer, sykdom og skader. 4) Begrenset befolkningsvekst. 5) Ingen medisin, skrift eller akkumulert kunnskap på tvers av generasjoner. Påstanden er delvis riktig -- det var et godt liv på mange måter, men med store risikoer vi ikke aksepterer i dag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-forhistorie-1-text-4',
      type: 'text',
      content: `## Hulemaleriene -- den første kunsten

Blant de mest fascinerende sporene fra forhistorien er hulemaleriene. Disse maleriene, som finnes i huler i Europa, Afrika, Asia og Australia, gir oss et unikt innblikk i fortidens menneskers tankegang og kreativitet.

**De mest kjente hulemaleriene:**
- **Lascaux** (Frankrike, ca. 17 000 år gamle): Fargerike malerier av hester, okser, hjorter og andre dyr
- **Altamira** (Spania, ca. 15 000 år gamle): Bisonokser malt med okerfarge
- **Chauvet** (Frankrike, ca. 36 000 år gamle): Noen av de eldste kjente hulemaleriene, med løver, neshorn og mammuter

**Hva forteller hulemaleriene oss?**
1. **Kunstnerisk evne:** Menneskene hadde utviklet abstrakt tenkning og estetisk sans
2. **Symbolsk tenkning:** Evnen til å representere virkeligheten gjennom bilder
3. **Religion og magi:** Mange forskere tror maleriene hadde rituell betydning, kanskje knyttet til jaktmagi
4. **Sosiale strukturer:** Noen huler ble brukt gjentatte ganger over lang tid, noe som tyder på tradisjon og fellesskap
5. **Observasjonsevne:** Dyrene er malt med imponerende realisme og detaljrikdom

Hulemaleriene viser at mennesker for titusenvis av år siden hadde de samme grunnleggende kognitive evnene som oss -- evnen til å tenke abstrakt, uttrykke seg kreativt og skape mening.`,
    },
    {
      id: 'historie-forhistorie-1-example-1',
      type: 'example',
      title: 'Eksempel: Hva kan vi lese ut av hulemaleriet i Lascaux?',
      problem:
        'I Lascaux-hulen i Frankrike finnes det over 600 malerier og 1500 innrissede figurer. De fleste forestiller dyr. Hva kan vi lære om steinaldermennesker ut fra disse maleriene?',
      solution: `**Analyse av Lascaux-maleriene:**

Maleriene i Lascaux ble oppdaget i 1940 av fire tenåringer. Her er hva vi kan tolke:

**1. Dyremotivene:**
- Hester, okser, hjorter og steinbukker dominerer
- Rovdyr er sjeldne -- dette kan tyde på at maleriene er knyttet til byttedyr
- Dyrene er malt i bevegelse, noe som viser observasjonsevne

**2. Teknikken:**
- Brukte naturlige pigmenter (oker, trekull, jernoksid)
- Noen malerier utnytter hulens naturlige form for å skape 3D-effekt
- Hender ble brukt som sjablong (håndavtrykk)

**3. Mulige tolkninger:**
- **Jaktmagi:** Å male byttedyr kunne være et ritual for å sikre vellykket jakt
- **Undervisning:** Maleriene kunne brukes til å lære unge jegere om dyr
- **Religiøse ritualer:** Hulene kan ha vært hellige steder
- **Ren kunst:** Kanskje menneskene rett og slett likte å lage vakre bilder

**Konklusjon:** Vi kan ikke være sikre på hensikten, men maleriene viser at steinaldermennesker var intelligente, kreative og hadde et rikt indre liv.`,
    },
    {
      id: 'historie-forhistorie-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-forhistorie-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvorfor tror du steinaldermennesker malte bilder på huleveggene? Vurder minst to ulike teorier og begrunn hvilken du synes er mest sannsynlig.',
        hints: [
          'Tenk på jaktmagi, religion, undervisning og ren kunstnerisk utfoldelse',
          'Husk at vi ikke kan spørre dem -- vi tolker ut fra det vi finner',
        ],
        solution:
          'Ulike teorier: 1) Jaktmagi -- å male dyr ga makt over dem og sikret god jakt. Støtter dette: de fleste motiver er byttedyr, maleriene finnes dypt inne i huler (hellige steder). 2) Undervisning -- maleriene ble brukt til å lære unge om dyr og jakt. Støtter dette: detaljert og realistisk fremstilling av dyrene. 3) Religion/ritualer -- hulene var hellige steder for seremonier. Støtter dette: maleriene finnes ofte i utilgjengelige områder, ikke der folk bodde. 4) Sosial tilhørighet -- maleriene styrket gruppens identitet og fellesskap. Eleven bør argumentere for sitt valg med konkrete begrunnelser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-forhistorie-1-text-5',
      type: 'text',
      content: `## Steinalderen i Norden og Norge

Nordens forhistorie er tett knyttet til istiden og dens ettervirkninger. Under den siste istiden (ca. 110 000 -- 10 000 f.Kr.) var store deler av Skandinavia dekket av en enorm isbre som var opptil tre kilometer tykk. Norden var rett og slett ubeboelig.

**Istidens slutt og de første menneskene:**
- Ca. 10 000 f.Kr. begynte isen å smelte
- Kysten ble isfri først, deretter innlandet
- De første menneskene kom til Norge langs kysten, trolig nordfra og sørfra
- **Fosna-kulturen** (på Vestlandet) og **Komsa-kulturen** (i Nord-Norge) er de eldste kjente kulturene i Norge (ca. 9500--8000 f.Kr.)
- De levde av jakt på sel, fisk, fugl og reinsdyr

**Landskapsendringer:**
- Isen hadde trykket ned landmassene -- nå hevet landet seg (landhevning)
- Havnivået var annerledes enn i dag
- Vegetasjonen endret seg fra tundra til skog
- Nye dyrearter vandret inn etter hvert som klimaet ble varmere

**Mellomsteinalder i Norge (ca. 8000--4000 f.Kr.):**
- Befolkningen økte sakte
- Rikere kystmiljø ga bedre mattilgang
- Fangst av sel, hval, fisk og skalldyr
- Noen av de eldste bosetningene i Nord-Europa finnes langs norskekysten
- Helleristninger (bilder risset i stein) fra denne perioden viser jaktscener`,
    },
    {
      id: 'historie-forhistorie-1-note-1',
      type: 'note',
      title: 'Norges eldste bosettinger',
      content: `Det finnes flere steder i Norge med svært gamle spor etter mennesker:

**Blomvåg (Øygarden, Vestland):** Et av de eldste funnstedene i Norge, datert til ca. 10 000 f.Kr. Her er det funnet steinredskaper.

**Meling (Rogaland):** Spor etter bosetning fra ca. 9500 f.Kr.

**Kirkehelleren (Nordland):** Hulelokale med funn fra ca. 9000 f.Kr.

Felles for de eldste funnstedene er at de ligger langs kysten. De første nordmennene var kystfolk som utnyttet havets ressurser. Innlandet ble kolonisert senere, etter hvert som isen smeltet og skogen vokste frem.`,
    },
    {
      id: 'historie-forhistorie-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-forhistorie-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hvorfor de første menneskene i Norge bosatte seg langs kysten og ikke i innlandet. Hvilke ressurser og fordeler ga kystlivet?',
        hints: [
          'Tenk på mat, klima og isens utbredelse',
          'Kysten var isfri først',
        ],
        solution:
          'De første menneskene bosatte seg langs kysten fordi: 1) Kysten var isfri først -- innlandet var fortsatt dekket av is. 2) Havet ga rikelig tilgang på mat: fisk, sel, hval, skalldyr og sjøfugl. 3) Golfstrømmen ga et mildere klima langs kysten enn i innlandet. 4) Kysten ga transportmuligheter med båt. 5) Strandflaten ga boplasser med utsikt og tilgang til havet. Innlandet ble først beboelig etter hvert som isen smeltet og skog og dyreliv etablerte seg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-forhistorie-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-forhistorie-1-ex-6',
        number: '6',
        type: 'classic',
        task: 'Drøft: Hva kan steinalderen lære oss om hva det vil si å være menneske? Pek på minst tre trekk ved steinaldersamfunnet som fortsatt er relevante i dag.',
        hints: [
          'Tenk på samarbeid, kunst, fellesskap, tilpasningsevne og forholdet til naturen',
        ],
        solution:
          'Relevante trekk: 1) Samarbeid -- steinaldermennesker overlevde gjennom samarbeid i grupper, og vi er fortsatt fundamentalt sosiale vesener. 2) Kreativitet og kunst -- hulemaleriene viser at behovet for å uttrykke seg kreativt er grunnleggende menneskelig. 3) Tilpasningsevne -- mennesket spredte seg over hele kloden og tilpasset seg vidt forskjellige miljøer, noe vi fortsatt gjør. 4) Forholdet til naturen -- jeger-sankere var avhengige av og levde i pakt med naturen, noe vi i dag må gjenoppdage i lys av klimakrisen. 5) Muntlig tradisjon og kunnskapsoverføring -- vi deler fortsatt kunnskap mellom generasjoner, nå gjennom skrift og teknologi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_FORHISTORIE_2: TextbookChapter = {
  id: 'historie-forhistorie-2',
  courseId: 'historie',
  chapterNumber: '3.2',
  title: 'Jordbruksrevolusjonen og de første byene',
  description:
    'Den neolittiske revolusjon, overgangen til jordbruk, de første bosettingene og konsekvensene for menneskehetens utvikling.',
  estimatedMinutes: 55,
  competenceGoals: [
    'reflektere over hvordan fortiden former oss',
    'matproduksjon og naturressurser - bærekraft',
  ],
  content: [
    {
      id: 'historie-forhistorie-2-intro',
      type: 'text',
      content: `## Den største omveltningen i menneskets historie

For omtrent 12 000 år siden begynte noen menneskegrupper å gjøre noe helt nytt: i stedet for å lete etter mat i naturen, begynte de å dyrke planter og holde dyr. Denne overgangen fra jakt og sanking til jordbruk kalles den neolittiske revolusjon, og den endret menneskets livsvilkår fundamentalt.

**Hvorfor er dette så viktig?**
- For første gang kunne mennesker produsere sin egen mat
- Dette gjorde det mulig å bo fast på ett sted
- Befolkningen kunne vokse dramatisk
- Sosiale strukturer ble mer komplekse
- Det la grunnlaget for byer, stater og sivilisasjoner

Den neolittiske revolusjon regnes som et av de viktigste vendepunktene i menneskets historie -- kanskje det aller viktigste. Alt som kom etterpå -- byer, kongeriker, skrift, industri -- bygger på denne ene endringen: at mennesker begynte å dyrke jorda.`,
    },
    {
      id: 'historie-forhistorie-2-warning-1',
      type: 'warning',
      title: 'Vær forsiktig med ordet "revolusjon"',
      content: `Begrepet "den neolittiske revolusjon" kan være misvisende. Overgangen til jordbruk skjedde **ikke** plutselig, men over tusenvis av år. Mange samfunn kombinerte jordbruk med jakt og sanking i lang tid. Dessuten skjedde overgangen uavhengig på forskjellige steder i verden til ulik tid.

Ordet "revolusjon" brukes her fordi **konsekvensene** var revolusjonære -- de endret menneskets liv fullstendig -- ikke fordi endringen skjedde raskt.`,
    },
    {
      id: 'historie-forhistorie-2-def-1',
      type: 'definition',
      title: 'Neolittisk revolusjon og domestisering',
      content: `**Den neolittiske revolusjon** (fra gresk neos = ny, lithos = stein) er betegnelsen på overgangen fra jeger-sanker-livsstil til jordbruk. Den begynte uavhengig på flere steder i verden:

- **Den fruktbare halvmåne** (Midtøsten): ca. 10 000 f.Kr. -- det tidligste kjente jordbruksområdet
- **Kina**: ca. 8000 f.Kr. (ris og hirse)
- **Mellom-Amerika**: ca. 5000 f.Kr. (mais, bønner, squash)
- **Afrika sør for Sahara**: ca. 3000 f.Kr. (durra, hirse)

**Domestisering** betyr at mennesker bevisst avler planter og dyr for å forsterke ønskede egenskaper:

**Planter:** Hvete, bygg, linser, erter (Midtøsten); ris (Asia); mais (Amerika)

**Dyr:** Hund (det første tamme dyret, ca. 15 000 f.Kr.), sau, geit, storfe, gris

Domestisering er en langsiktig prosess der mennesker over generasjoner velger ut de plantene og dyrene med best egenskaper for videre avl.`,
    },
    {
      id: 'historie-forhistorie-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-forhistorie-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvorfor tror du overgangen til jordbruk begynte akkurat i Den fruktbare halvmåne? Hva var det med dette området som gjorde det egnet for tidlig jordbruk?',
        hints: [
          'Tenk på klima, ville plantearter, dyr, geografi og tilgang på vann',
        ],
        solution:
          'Den fruktbare halvmåne (området fra dagens Israel/Palestina via Syria og Tyrkia til Irak) hadde flere fordeler: 1) Villkorn som hvete og bygg vokste naturlig her. 2) Klimaet var gunstig med tilstrekkelig nedbør. 3) Det fantes ville dyr som lot seg domestisere (sau, geit, storfe). 4) Elvene Eufrat og Tigris ga vann til irrigasjon. 5) Variert topografi med fjell, sletter og elvesletter ga ulike økologiske nisjer. 6) Etter istiden ga klimaendringer bedre vilkår for korndyrking.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-forhistorie-2-text-2',
      type: 'text',
      content: `## Konsekvenser av jordbruket

Overgangen til jordbruk forandret ikke bare maten mennesker spiste -- den endret hele måten vi organiserer samfunnet på. Konsekvensene var enorme og vidtrekkende.

**Bofasthet:**
- Bønder må bli på ett sted for å pleie avlingene
- Faste bosettinger og landsbyer oppsto
- Folk bygde permanente hus av leire, tre og stein
- Eiendom ble viktig -- jorda tilhørte noen

**Befolkningsvekst:**
- Jordbruk ga mer forutsigbar mattilgang
- Kvinner kunne få flere barn (fordi de ikke lenger måtte bære dem på vandring)
- Befolkningen vokste fra noen få millioner til titalls millioner på noen tusen år

**Sosial lagdeling:**
- Jordbruksoverskudd betydde at ikke alle trengte å produsere mat
- Noen ble håndverkere, prester, krigere, ledere
- De som kontrollerte jorda og overskuddet fikk makt
- Hierarkier og ulikhet oppsto -- noe jeger-sankere i stor grad hadde vært uten

**Nye utfordringer:**
- Sykdommer spredte seg lettere i tette bosettinger
- Nærhet til dyr ga nye sykdommer (zoonoser)
- Ensidig kost (mye korn) ga dårligere ernæring enn jeger-sanker-kosten
- Konflikter om jord og ressurser økte
- Kvinner fikk ofte en mer underordnet rolle enn i jeger-sanker-samfunn`,
    },
    {
      id: 'historie-forhistorie-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-forhistorie-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Historikeren Yuval Noah Harari har kalt jordbruksrevolusjonen for "historiens største svindel" -- fordi den førte til hardere arbeid, dårligere helse og mer ulikhet. Drøft denne påstanden. Var overgangen til jordbruk et fremskritt eller et tilbakeskritt for menneskeheten?',
        hints: [
          'Tenk på både fordeler og ulemper',
          'Hva menes med "fremskritt"?',
          'Kan noe være et fremskritt for arten, men ikke for individet?',
        ],
        solution:
          'Argumenter for at det var et tilbakeskritt: 1) Hardere og mer monotont arbeid. 2) Dårligere ernæring (ensidig kosthold). 3) Flere sykdommer. 4) Mer sosial ulikhet. 5) Tap av frihet og mobilitet. Argumenter for at det var et fremskritt: 1) Større og mer stabile samfunn. 2) Teknologisk utvikling muliggjort av spesialisering. 3) Skrift, vitenskap og kunst ble mulig. 4) Befolkningsvekst (flere mennesker ble født). Konklusjon: Svaret avhenger av hva vi mener med "fremskritt". For individet var jeger-sanker-livet kanskje bedre, men uten jordbruk ville ingen av de tingene vi forbinder med sivilisasjon vært mulig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-forhistorie-2-text-3',
      type: 'text',
      content: `## Yngre steinalder og bronsealder i Norden

Jordbruket nådde Norden relativt sent -- først rundt 4000 f.Kr. -- flere tusen år etter Midtøsten. Men når det først kom, endret det de nordiske samfunnene fundamentalt.

**Yngre steinalder i Norden (ca. 4000--1800 f.Kr.):**
- **Traktbegerkulturen** (ca. 4000--2800 f.Kr.) brakte jordbruket til Skandinavia
- Dyrket hvete og bygg, holdt storfe, sau og gris
- Bygde megalittgraver (store steingraver som dysser og jettestuer)
- Kombinerte jordbruk med jakt og fiske
- Keramikk med traktformet munning (derav navnet)
- Bosetningene var små gårder spredt i landskapet

**Stridsøkskulturen** (ca. 2800--2400 f.Kr.):
- Ny kultur med andre gravskikker og keramikk
- Stridsøkser som statusgjenstand
- Muligens innvandring fra øst

**Bronsealder i Norden (ca. 1800--500 f.Kr.):**
- Bronse (legering av kobber og tinn) ble importert fra sør
- Rikere materiell kultur med smykker, våpen og redskaper
- Helleristninger med skip, solvogner og menneskefigurer
- Sterkere sosial lagdeling -- høvdinger og stormenn
- Handelsnettverk strakte seg over hele Europa

**Jernalder i Norden (ca. 500 f.Kr.--1050 e.Kr.):**
- Jern kunne utvinnes lokalt (fra myrmalm)
- Billigere enn bronse -- flere fikk tilgang til metallredskaper
- Jordbruket ble effektivisert med jernplogen
- Perioden ender med vikingtiden`,
    },
    {
      id: 'historie-forhistorie-2-def-2',
      type: 'definition',
      title: 'Traktbegerkulturen',
      content: `**Traktbegerkulturen** (ca. 4000--2800 f.Kr.) var den første jordbrukskulturen i Skandinavia. Kjennetegn:

**Navn:** Oppkalt etter keramikkens traktformede munning

**Utbredelse:** Danmark, Sør-Sverige, Sør-Norge og Nord-Tyskland

**Jordbruk:** Dyrket hvete og bygg, holdt storfe, sau, geit og gris

**Gravskikker:** Bygde megalittgraver -- store steinkonstruksjoner:
- **Dysser:** Gravkamre av store steinheller
- **Jettestuer (gangganger):** Store gravkamre med inngangsgang
- Disse monumentene krevde stort arbeid og viser organisert samarbeid

**Betydning:** Traktbegerkulturen markerer overgangen fra jeger-sanker-samfunn til bondesamfunn i Norden. Den viser at jordbruk, bofasthet og nye sosiale strukturer hang tett sammen.`,
    },
    {
      id: 'historie-forhistorie-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-forhistorie-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Megalittgravene (dysser og jettestuer) krevde enormt arbeid å bygge. Hvorfor tror du steinalderens mennesker investerte så mye tid og krefter i gravmonumenter? Hva kan gravene fortelle oss om samfunnet?',
        hints: [
          'Tenk på religion, sosial organisering og makt',
          'Hva betyr det at noen fikk storslagne graver mens andre ikke fikk det?',
        ],
        solution:
          'Gravene forteller oss: 1) Religion -- troen på et liv etter døden var viktig, og de døde måtte få en verdig "bolig". 2) Sosial organisering -- byggingen krevde koordinering av mange menneskers arbeid, noe som forutsetter ledelse. 3) Sosial lagdeling -- ikke alle fikk slike graver, noe som tyder på at noen hadde høyere status. 4) Territorium -- monumentene markerte tilhørighet til et område og en gruppe. 5) Fellesskap -- det å bygge sammen styrket gruppens samhold. 6) Overskudd -- folk hadde tid til annet enn matproduksjon, noe som tyder på et visst jordbruksoverskudd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-forhistorie-2-text-4',
      type: 'text',
      content: `## Fra landsby til by: de første byene

Etter hvert som jordbruket ble mer effektivt, vokste bosettingene. De første "byene" oppsto i Midtøsten tusenvis av år før de klassiske sivilisasjonene i Mesopotamia og Egypt.

**Jeriko (dagens Palestina):**
- En av verdens eldste kontinuerlig bebodde byer
- Bosetting fra ca. 9000 f.Kr.
- Hadde en bymur og et stort steintårn allerede ca. 8000 f.Kr.
- Befolkning på kanskje 2000--3000 mennesker
- Livnærte seg av jordbruk i den fruktbare Jordandalen

**Catalhoyuk (dagens Tyrkia):**
- Stor bosetting fra ca. 7500--5700 f.Kr.
- Opptil 8000 innbyggere -- en stor "by" etter datidens målestokk
- Husene var bygd tett i tett, uten gater -- man gikk på takene
- Inngang via stiger gjennom hull i taket
- Veggmalerier, skulpturer og religiøse symboler
- Overraskende lite tegn til sosial lagdeling -- et relativt egalitært samfunn
- Ingen tydelig leder eller tempel -- religionen var knyttet til hjemmet

**Fra landsby til by:**
Overgangen fra landsby til by innebar mer enn bare større befolkning:
- Spesialisering av yrker
- Handel med andre bosettinger
- Behov for felles regler og ledelse
- Offentlige bygninger (templer, lager)
- Begynnende ulikhet og hierarki`,
    },
    {
      id: 'historie-forhistorie-2-example-1',
      type: 'example',
      title: 'Eksempel: Catalhoyuk -- en by uten gater',
      problem:
        'Catalhoyuk i Tyrkia er en av verdens eldste byer. Den hadde en svært uvanlig utforming. Hva kan arkitekturen og funnene fortelle oss om samfunnet?',
      solution: `**Catalhoyuk -- et vindu til fortiden:**

**Arkitekturen:**
- Husene var bygd vegg i vegg, uten gater eller mellomrom
- Man gikk på takene og klatret ned i husene via stiger
- Hvert hus hadde en ildplass, lagerplass og soveplass
- De døde ble gravlagt under husgulvet

**Hva funnene forteller:**
1. **Likhet:** Husene er omtrent like store -- ingen "palass" eller spesielt store hus. Dette tyder på et relativt egalitært samfunn.
2. **Religion i hjemmet:** Veggmalerier med oksehorn, jaktscener og fruktbarhetssymboler finnes i mange hus, men det er ikke funnet noe sentralt tempel.
3. **Fellesskap:** Den tette bebyggelsen tyder på et samfunn der folk levde nært hverandre og samarbeidet.
4. **Overgang:** Catalhoyuk representerer et tidlig stadium i overgangen fra landsby til by -- større enn en landsby, men uten de sosiale strukturene vi forbinder med senere byer.

**Betydning for forskningen:** Catalhoyuk utfordrer antakelsen om at byer alltid innebar hierarki og ulikhet. Det viser at tidlige storbosettinger kunne være relativt egalitære.`,
    },
    {
      id: 'historie-forhistorie-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-forhistorie-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign livet i Catalhoyuk med livet i en norsk by i dag. Hva er likt og hva er forskjellig? Tenk på både fysiske forhold og sosial organisering.',
        hints: [
          'Tenk på bolig, arbeidsdeling, styreform, religion og fellesskap',
        ],
        solution:
          'Likheter: 1) Folk bor tett -- både Catalhoyuk og moderne byer har konsentrert bebyggelse. 2) Handel og spesialisering -- folk har ulike yrker. 3) Fellesskap og sosial interaksjon. 4) Behov for regler for sameksistens. Forskjeller: 1) Catalhoyuk hadde ingen gater, offentlige bygninger eller sentral ledelse -- moderne byer har alt dette. 2) Catalhoyuk var mer egalitært, mens moderne byer har stor sosial ulikhet. 3) Religion var privat i Catalhoyuk, mens moderne byer har kirker/templer. 4) Catalhoyuk hadde ingen skrift, penger eller formelt rettssystem. 5) Størrelsesforskjell: 8000 vs. hundretusener/millioner av innbyggere.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-forhistorie-2-text-5',
      type: 'text',
      content: `## Matproduksjon og bærekraft i historisk perspektiv

Jordbruksrevolusjonen endret ikke bare menneskets forhold til hverandre -- den endret også forholdet til naturen. For første gang begynte mennesker å omforme naturlandskapet i stor skala. Dette er et tema med stor relevans i dag.

**Jordbrukets miljøpåvirkning gjennom historien:**
- Skog ble ryddet for å gi plass til åkrer (svedjebruk)
- Overbeiting førte til erosjon og ørkenspredning
- Irrigasjonssystemer endret vannstrømninger
- I noen områder (som Mesopotamia) førte intensivt jordbruk til forsalting av jorda

**Den fruktbare halvmåne i dag:**
Det er tankevekkende at området der jordbruket først oppsto -- Den fruktbare halvmåne -- i dag er langt tørrere og mindre fruktbart enn for tusenvis av år siden. Årelang overutnyttelse av jorda har bidratt til dette.

**Læringspunkter for vår tid:**
- Jordbruk kan være både skapende og ødeleggende
- Overutnyttelse av naturressurser er ikke et moderne fenomen
- Bærekraftig matproduksjon har vært en utfordring gjennom hele menneskets historie
- Klimaendringer har alltid påvirket sivilisasjoners skjebne
- I dag står vi overfor lignende utfordringer i mye større skala

**Statistikk i perspektiv:**
- Ca. 10 000 f.Kr.: Verdens befolkning var ca. 5--10 millioner
- Ca. 1 e.Kr.: Ca. 200--300 millioner
- I dag: Over 8 milliarder
- Denne veksten ble muliggjort av jordbruket, men den utfordrer planetens bæreevne`,
    },
    {
      id: 'historie-forhistorie-2-def-3',
      type: 'definition',
      title: 'Bærekraft i historisk perspektiv',
      content: `**Bærekraft** betyr å dekke dagens behov uten å ødelegge mulighetene for fremtidige generasjoner. Begrepet er moderne, men utfordringen er eldgammel.

**Historiske eksempler på manglende bærekraft:**
- Mesopotamia: Intensiv irrigasjon førte til forsalting av jorda
- Romerriket: Avskoging rundt Middelhavet førte til erosjon
- Påskeøyas sivilisasjon: Overutnyttelse av ressurser førte til samfunnskollaps

**Historiske eksempler på bærekraft:**
- Vekselsbruk i europeisk middelalder (treskiftebruk)
- Tradisjonell norsk seterdrift -- utnyttet ulike soner etter sesong
- Urfolks forvaltning av naturressurser gjennom tusenvis av år

**LK20-relevans:** Kompetansemålet om "matproduksjon og naturressurser -- bærekraft" handler om å forstå at historien til matproduksjon gir viktige lærdommer for fremtiden.`,
    },
    {
      id: 'historie-forhistorie-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'historie-forhistorie-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Drøft: Hvilke lærdommer kan vi trekke fra jordbruksrevolusjonen og tidlige sivilisasjoners erfaringer med matproduksjon, når vi i dag står overfor utfordringer med bærekraftig matproduksjon og klimaendringer?',
        hints: [
          'Tenk på overutnyttelse, monokultur, avhengighet av få arter',
          'Se på historiske eksempler på både bærekraft og kollaps',
        ],
        solution:
          'Lærdommer: 1) Overutnyttelse av jord og vann kan få katastrofale konsekvenser (Mesopotamias forsalting, avskogingen rundt Middelhavet). 2) Avhengighet av få avlingstyper (monokultur) gjør samfunn sårbare. 3) Klimaendringer har alltid påvirket matproduksjon og kan utløse kriser. 4) Bærekraftige praksiser (vekselsbruk, mangfoldig jordbruk) har historisk vist seg mer holdbare. 5) Befolkningsvekst øker presset på ressursene -- en utfordring som er mye større i dag. 6) Teknologiske løsninger (irrigasjon den gang, genteknologi i dag) kan hjelpe, men kan også skape nye problemer. Historien viser at matproduksjon krever langsiktig tenkning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-forhistorie-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'historie-forhistorie-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Lag en tidslinje som viser de viktigste hendelsene fra menneskets opprinnelse (ca. 300 000 år siden) til de første bystatene (ca. 3500 f.Kr.). Inkluder minst 8 hendelser og forklar kort hvorfor hver hendelse var viktig.',
        hints: [
          'Bruk hendelser fra både dette og forrige kapittel',
          'Tenk på teknologi, sosial organisering og miljøendringer',
        ],
        solution:
          'Tidslinje: 1) Ca. 300 000 år siden: Homo sapiens oppstår i Afrika -- det moderne mennesket. 2) Ca. 70 000 år siden: "Out of Africa" -- mennesket sprer seg ut av Afrika. 3) Ca. 40 000 år siden: Hulemaleriene i Europa (Chauvet) -- symbolsk tenkning. 4) Ca. 15 000 år siden: Hunden domestiseres -- første tamme dyr. 5) Ca. 10 000 f.Kr.: Jordbruksrevolusjonen begynner i Den fruktbare halvmåne. 6) Ca. 9000 f.Kr.: Jeriko grunnlegges -- en av verdens første byer. 7) Ca. 7500 f.Kr.: Catalhoyuk -- stor tidlig bosetting med opptil 8000 innbyggere. 8) Ca. 4000 f.Kr.: Traktbegerkulturen bringer jordbruk til Norden. 9) Ca. 3500 f.Kr.: De første bystatene i Mesopotamia -- sivilisasjonens begynnelse. Hver hendelse representerer et viktig steg i menneskets utvikling mot stadig mer komplekse samfunn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 3: Antikken
// ============================================================================

export const CHAPTER_HISTORIE_3_1: TextbookChapter = {
  id: 'historie-3-1',
  courseId: 'historie',
  chapterNumber: '3.1',
  title: 'De første sivilisasjonene',
  description: 'Mesopotamia, Egypt og de tidlige høykulturene.',
  estimatedMinutes: 50,
  competenceGoals: ['reflektere over hvordan fortiden former oss'],
  content: [
    {
      id: 'historie-3-1-intro',
      type: 'text',
      content: `## Sivilisasjonenes vugge

For rundt 5000 år siden skjedde noe revolusjonerende i menneskets historie: De første byene og statene oppsto langs de store elvene i Midtøsten. Her ble skriften oppfunnet, lovene nedskrevet, og komplekse samfunn med arbeidsdeling og hierarkier utviklet seg.

**De tidlige høykulturene:**
- Mesopotamia (dagens Irak) - mellom Eufrat og Tigris
- Egypt - langs Nilen
- Indusdalen (dagens Pakistan)
- Kina - langs Huang He (Den gule elven)

Disse sivilisasjonene la grunnlaget for mye av det vi tar for gitt i dag: skrift, lover, matematikk, og ideen om staten.`,
    },
    {
      id: 'historie-3-1-def-1',
      type: 'definition',
      title: 'Sivilisasjon',
      content: `**Sivilisasjon** brukes om komplekse samfunn med følgende kjennetegn:

**Byer:** Større befolkningskonsentrasjoner enn landsbyer

**Skrift:** System for å registrere informasjon

**Spesialisering:** Arbeidsdeling - ikke alle er bønder

**Sosial lagdeling:** Hierarki med herskere, prester, håndverkere, bønder

**Organisert religion:** Templer og presterskap

**Sentralisert styring:** Stat med lover og administrasjon

**Viktig:** Begrepet "sivilisasjon" har vært misbrukt til å nedvurdere andre samfunn som "usiviliserte". Moderne historikere bruker begrepet nøytralt for å beskrive en bestemt samfunnstype, ikke for å rangere kulturer.`,
    },
    {
      id: 'historie-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-3-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvorfor tror du de første sivilisasjonene oppsto langs store elver? Hvilke fordeler ga elvene?',
        hints: ['Tenk på vann, mat, transport'],
        solution: 'Elvene ga: 1) Vann til jordbruk i ellers tørre områder. 2) Fruktbar jord fra årlige oversvømmelser (særlig i Egypt). 3) Transport - lettere å frakte varer med båt. 4) Fisk og mat. 5) Forutsigbarhet - elvene kom hvert år. Jordbruksoverskudd frigjorde folk til andre oppgaver (håndverk, handel, administrasjon).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-3-1-def-2',
      type: 'definition',
      title: 'Mesopotamia og Egypt',
      content: `**Mesopotamia** (ca. 3500 f.Kr. - 539 f.Kr.):
- Beliggenhet: Mellom Eufrat og Tigris (dagens Irak)
- Sumererne oppfant kileskriften (ca. 3200 f.Kr.)
- Skiftende riker: Sumer, Akkad, Babylon, Assyria
- Hammurabi lovsamling (ca. 1750 f.Kr.) - en av verdens eldste lovsamlinger
- Utviklet 60-tallssystemet (derfor har vi 60 minutter)

**Egypt** (ca. 3100 f.Kr. - 30 f.Kr.):
- Beliggenhet: Langs Nilen i Nordøst-Afrika
- Forent under farao ca. 3100 f.Kr.
- Hieroglyfer - eget skriftsystem
- Pyramider og templer - monumentale byggverk
- Mumifisering og tro på livet etter døden
- Stabilt rike i 3000 år`,
    },
    {
      id: 'historie-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-3-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Sammenlign Mesopotamia og Egypt: Hva hadde de til felles, og hva var forskjellig?',
        hints: ['Tenk på geografi, stabilitet, religion, skrift'],
        solution: 'Felles: Begge var elvebaserte jordbrukssamfunn, hadde skrift, bygde monumenter, hadde kongemakt og presteskap, utviklet matematikk og astronomi. Forskjeller: Egypt var mer stabilt (ett rike i 3000 år) vs. Mesopotamias skiftende riker. Egypt var beskyttet av ørken, Mesopotamia mer åpent for invasjoner. Ulike skriftsystemer (hieroglyfer vs. kileskrift). Ulik arkitektur (pyramider vs. ziggurater).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Hammurabis lov',
      problem: 'Hva kan Hammurabis lovsamling fortelle oss om samfunnet i Babylon for nesten 4000 år siden?',
      solution: `**Hammurabis lov (ca. 1750 f.Kr.):**

Lovsamlingen inneholder 282 lover og er bevart på en steinplate. Noen eksempler:

**"Øye for øye":**
"Hvis en mann slår ut øyet på en annen mann, skal hans eget øye slås ut."

**Sosiale forskjeller:**
Straffen varierte etter offerets status - overgrep mot frie borgere straffes hardere enn mot slaver.

**Hva lovene forteller oss:**
1. **Lagdelt samfunn:** Frie borgere, halvfrie, slaver
2. **Kvinner:** Hadde noen rettigheter (arv, skilsmisse), men underordnet menn
3. **Eiendom:** Detaljerte regler for handel og kontrakter
4. **Yrker:** Leger, håndverkere, bønder nevnes
5. **Familierett:** Regler for ekteskap, barn, arv

**Viktig:** Lovene viser et komplekst samfunn med behov for skriftlige regler - et stort steg fra muntlig tradisjon.`,
    },
    {
      id: 'historie-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-3-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Prinsippet "øye for øye" i Hammurabis lov virker brutalt for oss i dag. Men hvordan kan dette prinsippet ha vært et fremskritt sammenlignet med hevn uten regler?',
        hints: ['Tenk på begrensning og forholdsmessighet'],
        solution: '"Øye for øye" setter en GRENSE for gjengjeldelse - du kan ikke drepe noen fordi de skadet deg. Uten slike regler kunne en konflikt eskalere uendelig (blodfeider). Loven sikrer også at straffen behandles av staten, ikke av private. Det er et fremskritt fra kaotisk hevn til regulert rettferdighet, selv om vi i dag foretrekker andre prinsipper.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-3-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hvilken arv fra de tidlige sivilisasjonene lever videre i dag? Nevn minst tre konkrete eksempler på hvordan Mesopotamia eller Egypt fortsatt påvirker oss.',
        hints: ['Tenk på skrift, tid, lover, arkitektur, religion'],
        solution: 'Eksempler: 1) Skriften - alfabetet vårt stammer fra utviklingen som startet med kileskrift og hieroglyfer. 2) Tidsregning - 60 minutter i en time og 60 sekunder i et minutt kommer fra mesopotamisk 60-tallssystem. 3) Lovgivning - ideen om nedskrevne lover som gjelder for alle. 4) Kalender - egypternes 365-dagers kalender er grunnlaget for vår. 5) Arkitektur - buer og hvelvinger fra Mesopotamia brukes fortsatt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_3_2: TextbookChapter = {
  id: 'historie-3-2',
  courseId: 'historie',
  chapterNumber: '3.2',
  title: 'Det greske demokratiet',
  description: 'Demokratiets fødsel i Aten og sammenligning med i dag.',
  estimatedMinutes: 55,
  competenceGoals: ['demokrati i antikken vs i dag'],
  content: [
    {
      id: 'historie-3-2-intro',
      type: 'text',
      content: `## Demokratiets fødsel

I Aten på 400-tallet f.Kr. utviklet det seg en helt ny styreform: demokrati - folkestyre. For første gang i historien hadde vanlige borgere direkte makt til å bestemme lover og politikk. Dette var en radikal idé i en verden dominert av konger og tyranner.

**Grekenland var ikke ett land:**
- Bestod av hundrevis av bystater (polis)
- Hver bystat hadde egen styreform
- Aten, Sparta, Korint, Theben var de mektigste
- Felles språk, religion og kultur bandt dem sammen

Det athenske demokratiet har inspirert politisk tenkning helt frem til i dag, men var det virkelig et folkestyre?`,
    },
    {
      id: 'historie-3-2-def-1',
      type: 'definition',
      title: 'Det athenske demokratiet',
      content: `**Demokrati** kommer fra gresk: demos (folk) + kratos (styre) = folkestyre

**Hovedinstitusjonene i Aten:**

**Folkeforsamlingen (Ekklesia):**
- Alle mannlige borgere over 18 år kunne delta
- Møttes 40 ganger i året på Pnyx-høyden
- Vedtok lover, erklærte krig, valgte embetsmenn
- Flertallsbeslutninger gjaldt

**Rådet (Boule):**
- 500 medlemmer valgt ved loddtrekning
- Forberedte saker for folkeforsamlingen
- Styrte den daglige administrasjonen

**Domstolene (Dikasterion):**
- Borgere valgt ved loddtrekning som dommere
- Ingen profesjonelle dommere
- Avgjorde rettsaker ved avstemning

**Loddtrekning** var sentralt - det sikret at makten ble fordelt og ikke monopolisert av eliten.`,
    },
    {
      id: 'historie-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-3-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvorfor brukte athenerne loddtrekning i stedet for valg til mange verv? Hva var fordelene og ulempene med dette?',
        hints: ['Tenk på makt, korrupsjon og kompetanse'],
        solution: 'Fordeler: Hindret at de rike/veltalende monopoliserte makten, alle borgere deltok, vanskeligere å bestikke tilfeldige borgere, spredte erfaring med styring. Ulemper: Ingen garanti for kompetanse, kritikere (som Platon) mente det førte til dårlige beslutninger, erfarne folk kunne bli utelatt mens uerfarne ble valgt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-3-2-def-2',
      type: 'definition',
      title: 'Begrensningene i athensk demokrati',
      content: `Det athenske demokratiet var **ikke** et demokrati i moderne forstand:

**Hvem var UTELUKKET?**

**Kvinner:**
- Ingen politiske rettigheter
- Kunne ikke eie eiendom
- Stod under mannlig formynderskap

**Slaver:**
- Ca. 30-40% av befolkningen
- Ingen rettigheter overhodet
- Arbeidet i hjemmene, gruvene, på jordene

**Innflyttere (metoiker):**
- Frie ikke-atenere som bodde i byen
- Betalte skatt, men kunne ikke stemme
- Drev ofte handel og håndverk

**Hvem HADDE rettigheter?**
- Kun frie menn født av athenske foreldre
- Anslagsvis 10-20% av befolkningen
- Krevde tid og ressurser å delta aktivt

**Paradokset:**
Atensk demokrati var mulig delvis FORDI det fantes slaver som frigjorde borgernes tid til politikk.`,
    },
    {
      id: 'historie-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-3-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Kan vi kalle Aten et "demokrati" når kvinner, slaver og innflyttere var utelukket? Begrunn svaret ditt.',
        hints: ['Tenk på hva "demokrati" betyr og hvem som er "folket"'],
        solution: 'Ja og nei. Ja: For de som var definert som borgere, var det reelt folkestyre - de bestemte direkte. Ordet "demokrati" ble oppfunnet her. Nei: Flertallet av befolkningen (kvinner, slaver, innflyttere) var utelukket. I moderne forstand ville vi kalle det et oligarki. Viktig: Vi kan anerkjenne det som et demokrati for sin tid, mens vi påpeker begrensningene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Athensk demokrati vs. norsk demokrati',
      problem: 'Sammenlign det athenske demokratiet med det norske demokratiet i dag.',
      solution: `**Sammenligning:**

| Aspekt | Aten (400-tallet f.Kr.) | Norge (i dag) |
|--------|-------------------------|---------------|
| Type | Direkte demokrati | Representativt demokrati |
| Stemmerett | Frie menn | Alle over 18 år |
| Deltakelse | Møte opp personlig | Velge representanter |
| Valg | Loddtrekning | Frie valg |
| Størrelse | Ca. 30 000 borgere | 4+ millioner velgere |

**Likheter:**
- Ideen om at folket skal styre
- Flertallsbeslutninger
- Likhet for loven (for borgere)

**Forskjeller:**
- Norge: Alle voksne har stemmerett
- Norge: Vi velger representanter (kan ikke møte opp alle)
- Norge: Menneskerettigheter beskytter minoriteter
- Aten: Direkte deltakelse, men kun for få

**Konklusjon:** Ideen om folkestyre stammer fra Aten, men vi har utvidet "folket" til å inkludere alle.`,
    },
    {
      id: 'historie-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-3-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sokrates, Platon og Aristoteles var kritiske til demokratiet. Platon mente at "filosofkonger" burde styre. Hvilke argumenter kan de ha hatt mot demokrati?',
        hints: ['Tenk på kompetanse, populisme og beslutningskvalitet'],
        solution: 'Kritikernes argumenter: 1) Folk flest mangler kunnskap til å ta gode beslutninger. 2) Demokrati fører til populisme - folk stemmer for det som føles bra, ikke det som er klokt. 3) Folkemengden kan manipuleres av gode talere (demagoger). 4) Dødsdommen mot Sokrates viste at demokratiet kunne ta urettferdige beslutninger. Platon mente eksperter (filosofer) burde styre, som en lege styrer behandlingen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-3-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Kunne direkte demokrati som i Aten fungere i Norge i dag? Hva ville vært fordelene og ulempene?',
        hints: ['Tenk på størrelse, teknologi, kompleksitet'],
        solution: 'Argumenter for: Teknologi (internett) gjør det enklere, folk er bedre utdannet, ville øke engasjementet. Argumenter mot: Norge har 4 millioner velgere vs. Athens 30 000. Sakene er mer komplekse (økonomi, utenrikspolitikk). Folk har ikke tid til å sette seg inn i alt. Risiko for populisme og manipulasjon. Kompromiss: Folkeavstemninger om enkeltsaker (som Brexit, EU-avstemningen 1994) kombinert med representativt demokrati.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_3_3: TextbookChapter = {
  id: 'historie-3-3',
  courseId: 'historie',
  chapterNumber: '3.3',
  title: 'Romerriket og arven fra antikken',
  description: 'Romas vekst og fall, og antikkens varige betydning.',
  estimatedMinutes: 55,
  competenceGoals: ['demokrati i antikken vs i dag'],
  content: [
    {
      id: 'historie-3-3-intro',
      type: 'text',
      content: `## Fra bystat til verdensrike

Roma begynte som en liten bystat i Italia, men vokste til å bli det største riket verden hadde sett. På sitt mektigste strakte Romerriket seg fra Britannia i nord til Egypt i sør, fra Spania i vest til Mesopotamia i øst. Rundt 60 millioner mennesker levde under romersk styre.

**Romas utvikling:**
- Kongedømme (753-509 f.Kr.)
- Republikk (509-27 f.Kr.)
- Keiserdømme (27 f.Kr. - 476 e.Kr.)

Romerriket etterlot seg en enorm arv: språk, lover, arkitektur, infrastruktur og politiske ideer som fortsatt preger oss i dag.`,
    },
    {
      id: 'historie-3-3-def-1',
      type: 'definition',
      title: 'Den romerske republikken',
      content: `**Republikk** kommer fra latin: res publica = "offentlig sak/fellessak"

**Styret i republikken:**

**Senatet:**
- Forsamling av ca. 300 eldre adelsmenn
- Rådgivende makt, men stor innflytelse
- Kontrollerte finanser og utenrikspolitikk

**Folkeforsamlingene:**
- Valgte embetsmenn
- Vedtok lover
- Alle frie menn kunne delta (men de rikes stemmer talte mer)

**Embetsmenn:**
- Konsuler (2 stk) - øverste ledere, valgt for ett år
- Pretorer - dommere
- Kvestorer - finansforvaltere
- Censorer - folketelling og moral

**Maktbalanse:**
Makten var delt for å hindre tyranni. Kollegialitet (to konsuler) og ettårige verv begrenset enkeltpersoners makt.

**Patrisiere vs. plebeiere:**
Adelen (patrisiere) dominerte først, men vanlige borgere (plebeiere) kjempet seg til flere rettigheter over tid.`,
    },
    {
      id: 'historie-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-3-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Sammenlign maktfordelingen i den romerske republikken med maktfordelingsprinsippet i Norge i dag. Hva er likt og hva er forskjellig?',
        hints: ['Tenk på Stortinget, regjeringen og domstolene'],
        solution: 'Likheter: Begge har deling av makt mellom ulike institusjoner, folkevalgte forsamlinger, og tidsbegrensede verv. Forskjeller: Roma hadde ingen grunnlov som sikret rettigheter, de rikes stemmer talte mer, kvinner og slaver var utelukket, og makten var mer konsentrert hos adelen. Norge har uavhengige domstoler, menneskerettigheter og allmenn stemmerett.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-3-3-def-2',
      type: 'definition',
      title: 'Keisertiden og rikets fall',
      content: `**Overgangen til keiserdømme:**
Borgerkriger og maktkamper svekket republikken. Julius Caesar tok makten, og hans adoptivsønn Augustus ble den første keiser (27 f.Kr.).

**Pax Romana (Den romerske freden):**
- Ca. 200 års relativ fred og stabilitet
- Handel og kultur blomstret
- Veier, akvedukter og byer ble bygget

**Vestromerrikets fall (476 e.Kr.):**
Mange faktorer bidro:
- **Ytre press:** Germanske folk presset på grensene
- **Indre svakhet:** Korrupsjon, økonomiske problemer
- **Militære problemer:** Vanskeligere å forsvare enorme grenser
- **Politisk ustabilitet:** Hyppige keiserskifter

**Østromerriket (Bysants):**
Overlevde som Bysants med hovedstad i Konstantinopel til 1453.`,
    },
    {
      id: 'historie-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-3-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor falt Vestromerriket? Ranger de tre viktigste årsakene og begrunn valget ditt.',
        hints: ['Tenk på indre og ytre årsaker, kortsiktige og langsiktige'],
        solution: 'Svar vil variere. Viktige årsaker: 1) Ytre press fra germanske folk - direkte årsak til at grensene brøt sammen. 2) Økonomiske problemer - inflasjon, skattetrykk, handel som stoppet opp. 3) Politisk ustabilitet - keisere myrdet og erstattet, ingen stabil styring. Andre: Størrelsen gjorde riket uhåndterlig, slaveriet hindret teknologisk utvikling, befolkningsnedgang etter pest.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Arven fra antikken',
      problem: 'Hvilken arv fra antikken (Hellas og Roma) lever videre i dag?',
      solution: `**Politikk og lov:**
- Demokrati-ideen fra Aten
- Republikk-begrepet fra Roma
- Maktfordelingsprinsippet
- Rettsprinsipper (uskyldspresumpsjon, skriftlige lover)

**Språk:**
- Latin er grunnlag for romanske språk (spansk, fransk, italiensk)
- Latinske ord i juss, medisin, vitenskap
- Alfabetet vårt er latinsk

**Arkitektur:**
- Søyler, buer, kupler
- Offentlige bygninger inspirert av antikken

**Filosofi og vitenskap:**
- Logikk og vitenskapelig metode
- Demokrati-kritikk og etikk

**Litteratur:**
- Drama og teater fra Hellas
- Episk diktning (Iliaden, Æneiden)

**Infrastruktur:**
- Veier og akvedukter
- Byplanlegging`,
    },
    {
      id: 'historie-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-3-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Finn tre latinske ord eller uttrykk som brukes i norsk (eller i fagspråk du kjenner). Forklar hva de betyr.',
        hints: ['Tenk på juss, medisin, politikk'],
        solution: 'Eksempler: "Et cetera" (etc.) = og så videre. "Status quo" = tingenes tilstand, slik det er nå. "Veto" = jeg forbyr (brukes om nektingsrett). "Alibi" = andre steder (bevis for at man var annetsteds). "Agenda" = ting som skal gjøres (møteliste). "Virus" = gift/slim. "Ultimatum" = siste krav.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
        isInvestigation: true,
      },
    },
    {
      id: 'historie-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-3-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Hvorfor har antikken (særlig Hellas og Roma) fått så stor plass i vestlig historieskriving? Er dette uttrykk for eurosentrisme, eller var disse kulturene faktisk spesielt viktige?',
        hints: ['Tenk på perspektiv, innflytelse og makt'],
        solution: 'Argumenter for eurosentrisme: Andre sivilisasjoner (Kina, India, Islam) var like avanserte. Vestlig dominans har ført til at vestlig historie prioriteres. Argumenter for at de var viktige: Demokrati og republikk oppsto her. Latin/gresk preget europeisk kultur. Renessansen gjenoppdaget antikken. Konklusjon: Antikken var viktig for europeisk utvikling, men vi bør utvide perspektivet og inkludere andre sivilisasjoners bidrag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_3_4: TextbookChapter = {
  id: 'historie-3-4',
  courseId: 'historie',
  chapterNumber: '3.4',
  title: 'Religionenes fremvekst',
  description: 'Tidlige religioner og kristendommens spredning.',
  estimatedMinutes: 45,
  competenceGoals: ['religionens betydning for samfunn og makt'],
  content: [
    {
      id: 'historie-3-4-intro',
      type: 'text',
      content: `## Religion i antikken

Religion var uatskillelig fra samfunnet i antikken. Gudene var overalt - i naturen, i hjemmet, i politikken. Det fantes ingen "privat tro" atskilt fra offentlig liv. Men i denne perioden oppsto også nye religiøse ideer som skulle forme verdenshistorien: monoteisme og universelle frelsesreligioner.

**Religionenes rolle i antikken:**
- Forklarte naturens krefter og menneskets plass
- Legitimerte makt (konger som guder eller guders utvalgte)
- Bandt samfunnet sammen gjennom ritualer
- Ga lover og moral guddommelig autoritet`,
    },
    {
      id: 'historie-3-4-def-1',
      type: 'definition',
      title: 'Polyteisme og monoteisme',
      content: `**Polyteisme** = tro på mange guder
- Vanlig i de fleste antikke kulturer
- Gudene hadde ulike ansvarsområder (krig, kjærlighet, hav)
- Tolererande - man kunne tilbe andre folks guder
- Eksempler: Gresk, romersk, egyptisk, norrøn religion

**Monoteisme** = tro på én gud
- Oppsto med jødedommen (ca. 1200 f.Kr.)
- Eksklusiv - andre guder avvises som falske
- Utviklet seg til kristendom og senere islam
- Radikal idé i en polyteistisk verden

**Jødedommens betydning:**
Jødene var et lite folk, men deres idé om én universell Gud, en pakt mellom Gud og mennesker, og nedskrevne hellige tekster (Toraen) ble fundamentet for kristendom og islam.`,
    },
    {
      id: 'historie-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-3-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er forskjellen mellom polyteisme og monoteisme? Hvorfor var monoteisme en kontroversiell idé i antikken?',
        hints: ['Tenk på toleranse og eksklusivitet'],
        solution: 'Polyteisme innebar tro på mange guder, ofte med ulike funksjoner. Man kunne tilbe andres guder uten å fornekte sine egne. Monoteisme hevder at det bare finnes én sann Gud - alle andre er falske. Dette var provoserende fordi det avviste andres guder som avguder. Romerne aksepterte de fleste religioner, men hadde problemer med jøder og kristne som nektet å delta i keiserkult.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-3-4-def-2',
      type: 'definition',
      title: 'Kristendommens fremvekst',
      content: `**Jesus fra Nasaret** (ca. 4 f.Kr. - ca. 30 e.Kr.)
- Jødisk predikant i Palestina
- Forkynte Guds rike, nestekjærlighet, tilgivelse
- Korsfestet av romerne
- Tilhengerne trodde han var Messias og oppsto fra de døde

**Fra jødisk sekt til verdensreligion:**
1. **Urkirken:** Jesu tilhengere i Jerusalem
2. **Paulus:** Spredte budskapet til ikke-jøder (hedninger)
3. **Forfølgelser:** Kristne nektet keiserkult, ble forfulgt
4. **Konstantin (313):** Toleranseediktet tillot kristendom
5. **Theodosius (380):** Kristendom ble statsreligion

**Hvorfor spredte kristendommen seg?**
- Budskap om frelse for alle (ikke bare ett folk)
- Fellesskap og omsorg for fattige
- Løfte om evig liv
- Infrastruktur: Romernes veier og felles språk (gresk, latin)`,
    },
    {
      id: 'historie-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-3-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn minst tre faktorer som bidro til at kristendommen spredte seg så raskt i Romerriket.',
        hints: ['Tenk på budskap, infrastruktur og samfunnsforhold'],
        solution: '1) Universelt budskap - frelse for alle, ikke bare jøder. 2) Romersk infrastruktur - veier, felles språk, sikker reising gjorde misjon enklere. 3) Sosial omsorg - kristne tok vare på fattige og syke, noe som tiltrakk folk. 4) Løfte om evig liv - appellerte i en usikker tid. 5) Martyrenes mot - de som døde for troen imponerte mange. 6) Organisasjon - kirken utviklet effektive strukturer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-3-4-example-1',
      type: 'example',
      title: 'Eksempel: Religion og makt i Romerriket',
      problem: 'Hvordan var forholdet mellom religion og politisk makt i Romerriket?',
      solution: `**Religion og makt i Roma:**

**Før kristendommen:**
- Keiseren var øverste religiøse leder
- Keiserkult: Levende og døde keisere ble æret som guder
- Religion legitimerte keiserens makt
- Religiøse ritualer var del av statsseremonier

**Konflikten med kristendommen:**
- Kristne nektet å ofre til keiseren (avgudsdyrkelse)
- Ble sett som illojale og statsfiendtlige
- Forfølgelser under flere keisere

**Etter Konstantin (313):**
- Keiseren beskyttet kirken
- Kirken støttet keiserens autoritet
- Biskoper fikk politisk makt
- Keiseren grep inn i teologiske stridigheter

**Arven:**
Alliansen mellom kirke og stat preget Europa i over tusen år - en arv vi fortsatt diskuterer (stat-kirke-forhold, sekularisme).`,
    },
    {
      id: 'historie-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-3-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvorfor tror du romerne forfulgte de kristne? Hva var det ved kristendommen som ble sett som truende?',
        hints: ['Tenk på keiserkult, lojalitet og eksklusivitet'],
        solution: 'Romerne forfulgte kristne fordi: 1) De nektet å delta i keiserkult - sett som illojalitet mot staten. 2) De var ekskluderende - avviste andre guder som falske. 3) De møttes i hemmelighet - vekket mistanke. 4) De snakket om et annet rike (Guds rike) - kunne tolkes som opprør. 5) De nektet militærtjeneste (noen). Romerne tolererte de fleste religioner, men kristendommens nekting av kompromiss var uakseptabel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-3-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Var kristendommen en revolusjonær kraft som endret Romerriket fundamentalt, eller ble den tilpasset og absorbert av den romerske maktstrukturen?',
        hints: ['Tenk på både ideologi og institusjoner'],
        solution: 'Begge deler. Revolusjonært: Ny etikk (nestekjærlighet, likeverd for Gud), monoteisme erstattet polyteisme, utfordret sosiale hierarkier (slaver og frie likeverdige i menigheten). Tilpasset: Kirken overtok romerske strukturer (bispedømmer fulgte administrative grenser), keiseren ble kirkens beskytter, kirkens hierarki lignet statens. Konklusjon: Kristendommen endret mye, men ble også formet av samfunnet den vokste i.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// KAPITTEL 4: Middelalderen
// ============================================================================

export const CHAPTER_HISTORIE_4_1: TextbookChapter = {
  id: 'historie-4-1',
  courseId: 'historie',
  chapterNumber: '4.1',
  title: 'Europa i middelalderen',
  description: 'Føydalsamfunnet og maktstrukturer i middelalderen.',
  estimatedMinutes: 55,
  competenceGoals: ['makt fra middelalderen til tidlig nytid'],
  content: [
    {
      id: 'historie-4-1-intro',
      type: 'text',
      content: `## Middelalderen - en ny samfunnsorden

Etter Romerrikets fall i 476 oppsto en ny samfunnsorden i Europa. Sentralisert statsmakt ble erstattet av lokale herrer, og kirken ble den viktigste samlende institusjonen. Denne perioden - middelalderen - varte i rundt tusen år og la grunnlaget for det Europa vi kjenner i dag.

**Middelalderens kjennetegn:**
- Desentralisert makt (føydalisme)
- Kirkens dominans i kultur og politikk
- Jordbrukssamfunn med liten handel
- Standssamfunn med lite sosial mobilitet

Lenge ble middelalderen kalt "den mørke tid", men dette er en urettferdig betegnelse. Det var en periode med stor kulturell utvikling, fra gotiske katedraler til de første universitetene.`,
    },
    {
      id: 'historie-4-1-def-1',
      type: 'definition',
      title: 'Føydalisme',
      content: `**Føydalisme** var det dominerende makt- og samfunnssystemet i middelalderen.

**Grunnprinsippet:**
Jord i bytte mot lojalitet og tjeneste. Kongen "eide" all jord, men ga den videre til vasaller mot at de stilte med soldater.

**Hierarkiet:**
1. **Kongen** - øverste lensherre
2. **Stormenn/Baroner** - fikk store len, stilte mange soldater
3. **Riddere** - fikk mindre len, pliktet krigstjeneste
4. **Bønder** - arbeidet på jorden

**Len (fief):**
Jordområde gitt mot tjeneste. Lenet fulgte ofte med plikter som å holde rettssaker og opprettholde orden.

**Vasallbånd:**
Personlig lojalitetsforhold mellom herre og vasall, bekreftet gjennom ed og seremoni.

**Viktig:** Føydalisme var ikke et enhetlig "system" som ble innført, men et begrep historikere bruker for å beskrive lignende forhold i ulike land.`,
    },
    {
      id: 'historie-4-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-4-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvordan føydalismen fungerte som et system for å organisere både makt og forsvar. Hvorfor var det praktisk i en tid uten sterk sentralmakt?',
        hints: ['Tenk på kommunikasjon, reising og sikkerhet'],
        solution: 'Uten sterk stat eller moderne kommunikasjon var det umulig å styre sentralt. Føydalismen løste dette ved å delegere makt lokalt: Kongen ga jord til vasaller som ble ansvarlige for sitt område. De holdt orden, dømte, og stilte med soldater ved behov. Lojalitetsbånd erstattet byråkrati. Det var praktisk fordi folk bodde spredt, transport var langsom, og trusler kom lokalt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-4-1-def-2',
      type: 'definition',
      title: 'Standssamfunnet',
      content: `Middelaldersamfunnet var delt i **stender** - sosiale grupper med ulike rettigheter og plikter.

**De tre stendene:**

**1. Geistligheten (de som ber)**
- Paven, biskoper, prester, munker
- Ansvar for sjelene, utdanning, fattigomsorg
- Skattefrie, egen domsmakt

**2. Adelen (de som slåss)**
- Konger, fyrster, riddere
- Ansvar for forsvar og styring
- Privilegier: skattefrihet, jaktrett

**3. Bøndene (de som arbeider)**
- 90% av befolkningen
- Frie bønder, leilendinger, livegne
- Produserte mat og betalte skatt

**Standstilhørighet:**
Man ble vanligvis født inn i sin stand. Sosial mobilitet var begrenset. Unntakene var kirken (også fattige kunne bli prester) og handel (rike kjøpmenn kunne oppnå adel).`,
    },
    {
      id: 'historie-4-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-4-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan ble standssamfunnet rettferdiggjort i middelalderen? Hvorfor aksepterte folk at noen var født til å herske og andre til å arbeide?',
        hints: ['Tenk på religion og verdensbilde'],
        solution: 'Standssamfunnet ble rettferdiggjort religiøst: Gud hadde skapt samfunnet slik, og enhver hadde sin plass i Guds plan. Prester ba for alle, adelen beskyttet alle, bønder brødfødte alle - alle trengte hverandre. Å protestere mot sin stand var å protestere mot Guds orden. I tillegg ga systemet en viss trygghet: Herren skulle beskytte sine undersåtter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-4-1-example-1',
      type: 'example',
      title: 'Eksempel: Livet på et middelalder-gods',
      problem: 'Hvordan var hverdagen organisert på et typisk gods i middelalderen?',
      solution: `**Godset som enhet:**

**Herregården:**
- Herrens bolig, ofte forsterket
- Administrasjon og rettssaker
- Lagre for mat og utstyr

**Landsbyene:**
- Bøndenes hus i klynger
- Felles jordbruksareal rundt

**Jordbruksystemet:**
- Toskiftebruk eller treskiftebruk
- Åker, eng, skog og utmark
- Teiger (striper) fordelt mellom bøndene

**Bøndenes plikter:**
- Arbeidsplikt på herrens jord (hoveri)
- Avgifter i form av korn, dyr, produkter
- Plikt til å bruke herrens mølle og ovn (mot betaling)

**Herrens plikter:**
- Beskytte bøndene mot fiender
- Holde rettssaker (domsmakt)
- Vedlikeholde veier og broer

**Sesongene styrte alt:**
Såing, innhøsting, slakting fulgte årstidene. Alle arbeidet, fra barn til gamle.`,
    },
    {
      id: 'historie-4-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-4-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Sammenlign livet til en livegen bonde i middelalderen med livet til en moderne arbeidstaker. Hva er likt, og hva er forskjellig?',
        hints: ['Tenk på frihet, trygghet, rettigheter'],
        solution: 'Forskjeller: Den livegne var bundet til jorden og kunne ikke flytte, hadde begrenset personlig frihet, måtte arbeide for herren. Moderne arbeidstakere kan si opp, flytte, har juridiske rettigheter. Likheter: Begge arbeider for andre, begge er avhengige av "systemet", begge har visse rettigheter (den livegne kunne ikke selges som slave, hadde rett til egen jordlapp). Moderne arbeidere har langt mer frihet og rettigheter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-4-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-4-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Var føydalismen et "rettferdig" system? Bruk ulike perspektiver (herre, bonde, prest) i svaret ditt.',
        hints: ['Tenk på hva "rettferdighet" betydde da vs. nå'],
        solution: 'Herrens perspektiv: Ja - jeg tar risiko i krig, administrerer, og har rett til belønning for byrden. Bondens perspektiv: Delvis - jeg får beskyttelse og tilhørighet, men har lite frihet og mye arbeid for andre. Prestens perspektiv: Ja - dette er Guds orden, alle har sin plass. Moderne perspektiv: Nei - folk er ikke født med ulike rettigheter. Konklusjon: "Rettferdighet" er historisk betinget. For sin tid ga føydalismen en viss orden og trygghet, men bygde på ulikhet vi i dag avviser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_4_2: TextbookChapter = {
  id: 'historie-4-2',
  courseId: 'historie',
  chapterNumber: '4.2',
  title: 'Norge i middelalderen',
  description: 'Rikssamling, kristning og høymiddelalder i Norge.',
  estimatedMinutes: 50,
  competenceGoals: ['makt fra middelalderen til tidlig nytid'],
  content: [
    {
      id: 'historie-4-2-intro',
      type: 'text',
      content: `## Norge blir et rike

I vikingtiden var Norge delt mellom lokale høvdinger og småkonger. Gjennom rikssamlingen ble disse områdene gradvis samlet under én konge. Samtidig ble Norge kristnet og knyttet tettere til det europeiske fellesskapet.

**Hovedtrekk i norsk middelalder:**
- Rikssamling (800-1100-tallet)
- Kristning (ca. 1000)
- Høymiddelalderen - en storhetstid (1200-tallet)
- Svartedauden og nedgang (1349)
- Union med Danmark (1380)

Norsk middelalder var kortere enn den europeiske - fra vikingtiden til svartedauden var det bare rundt 500 år.`,
    },
    {
      id: 'historie-4-2-def-1',
      type: 'definition',
      title: 'Rikssamlingen',
      content: `**Rikssamlingen** var prosessen der Norge ble samlet fra mange småriker til ett kongedømme.

**Viktige konger:**

**Harald Hårfagre (ca. 870-930):**
- Tradisjonelt regnet som den første samleren
- Slaget ved Hafrsfjord (ca. 872)
- Samlet Vestlandet, men riket falt fra hverandre etter hans død

**Olav Tryggvason (995-1000):**
- Startet systematisk kristning
- Grunnla Nidaros (Trondheim)

**Olav Haraldsson (Olav den hellige, 1015-1028):**
- Fullførte kristningen med makt
- Falt i slaget på Stiklestad (1030)
- Ble helgen - symbolet på kristent Norge

**Harald Hardråde (1046-1066):**
- Styrket kongemakten
- Falt ved Stamford Bridge i England

**Viktig:** Rikssamlingen var ikke en sammenhengende prosess, men perioder med samling og oppløsning over flere hundre år.`,
    },
    {
      id: 'historie-4-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-4-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvorfor tok det så lang tid å samle Norge til ett rike? Hvilke hindringer sto i veien for rikssamlingen?',
        hints: ['Tenk på geografi, kommunikasjon og lokale interesser'],
        solution: 'Hindringer: 1) Geografi - fjell, fjorder og avstander gjorde det vanskelig å kontrollere hele landet. 2) Lokale høvdinger ville ikke gi fra seg makt. 3) Arvestrider - når en konge døde, ble riket ofte delt mellom sønner. 4) Ingen fast hovedstad eller administrasjon. 5) Motstand fra bønder som ville bevare lokal selvråderett. Kommunikasjon og transport var langsom, og det var vanskelig å holde kontroll.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-4-2-def-2',
      type: 'definition',
      title: 'Kristningen av Norge',
      content: `**Kristningen** var overgangen fra norrøn religion til kristendom.

**Kronologi:**
- 900-tallet: Første kontakt med kristendom (handelsmenn, vikingferder)
- Håkon den gode (945-961): Forsøkte kristning, møtte motstand
- Olav Tryggvason (995-1000): Startet systematisk kristning med makt
- Olav Haraldsson (1015-1028): Fullførte kristningen
- 1030 og fremover: Kirkeorganisasjon bygges ut

**Metoder:**
- Misjon og overtalelse
- Kongens makt - kristning påbudt
- Tvang og vold mot motstandere
- Ødeleggelse av norrøne helligdommer

**Betydning:**
- Norge ble del av europeisk kristent fellesskap
- Ny skriftkultur (latin)
- Nye lover og moral
- Kirken ble mektig institusjon
- Brudd med norrøn tradisjon - men mye ble videreført i ny form`,
    },
    {
      id: 'historie-4-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-4-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvordan hjalp kristningen kongene i rikssamlingen? Hvorfor var det en fordel for kongene at Norge ble kristent?',
        hints: ['Tenk på legitimering, allianser og organisasjon'],
        solution: 'Kristningen hjalp kongene fordi: 1) Legitimering - kongen styrte "av Guds nåde", ikke bare av egen makt. 2) Én gud, én konge - monoteisme støttet ideen om én hersker. 3) Allianser - kristent Norge kunne samarbeide med europeiske konger. 4) Organisasjon - kirken brakte skriftkultur og administrasjon. 5) Svekket lokale høvdinger som hadde religiøs makt i norrøn tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-4-2-example-1',
      type: 'example',
      title: 'Eksempel: Høymiddelalderen i Norge',
      problem: 'Hvorfor regnes 1200-tallet som en storhetstid i norsk historie?',
      solution: `**Norges storhetstid (1200-tallet):**

**Politisk stabilitet:**
- Borgerkrigsperioden (1130-1240) var over
- Håkon Håkonsson (1217-1263) samlet riket
- Arveloven av 1260 sikret fredelig tronskifte

**Territorium:**
- Norge på sitt største: Grønland, Island, Færøyene, Orknøyene, Shetland, Man
- Hålogaland (Nord-Norge) fullt integrert

**Kultur og bygging:**
- Håkonshallen i Bergen (1261)
- Steinkirker over hele landet
- Norrøn litteratur ble skrevet ned (sagaer, Edda)

**Administrasjon:**
- Landsloven (1274) - felles lov for hele Norge
- Sysselmannssystemet - kongelige embetsmenn
- Bergen som hovedstad og handelssentrum

**Svartedauden (1349):**
Storhetstiden tok slutt da pesten drepte kanskje halvparten av befolkningen. Norge gikk inn i en lang nedgangsperiode.`,
    },
    {
      id: 'historie-4-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-4-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Magnus Lagabøtes landslov (1274) innførte felles lov for hele Norge. Hvorfor var dette viktig for rikssamlingen og utviklingen av staten?',
        hints: ['Tenk på likhet, forutsigbarhet og kongemakt'],
        solution: 'Landsloven var viktig fordi: 1) Felles regler - alle nordmenn levde under samme lov, uansett hvor de bodde. 2) Kongens makt - loven ble gitt av kongen, ikke lokale ting. 3) Rettssikkerhet - forutsigbarhet om hva som var lovlig. 4) Nasjonal identitet - felles lov skapte fellesskap. 5) Modernisering - skriftlige lover erstattet muntlig tradisjon. Landsloven varte helt til Christian Vs lov i 1687.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-4-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-4-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Var kristningen av Norge positiv eller negativ for landet og folket? Se saken fra ulike perspektiver.',
        hints: ['Tenk på kultur, makt, identitet og vold'],
        solution: 'Positive sider: Norge ble del av europeisk sivilisasjon, fikk skriftkultur og utdanning, nye lover og organisasjon, kirken tok seg av fattige og syke. Negative sider: Norrøn kultur og religion ble undertrykt, kristningen skjedde delvis med tvang og vold, kirken samlet stor makt og rikdom, bønder måtte betale tiende. Konklusjon: Kristningen hadde både positive og negative sider. Det var et kulturelt skifte med store konsekvenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_4_3: TextbookChapter = {
  id: 'historie-4-3',
  courseId: 'historie',
  chapterNumber: '4.3',
  title: 'Kirken og religionens makt',
  description: 'Kirkens rolle som maktfaktor i middelalderen.',
  estimatedMinutes: 50,
  competenceGoals: ['religionens betydning for samfunn og makt'],
  content: [
    {
      id: 'historie-4-3-intro',
      type: 'text',
      content: `## Kirken - middelalderens supermakt

I middelalderen var kirken den mektigste institusjonen i Europa. Paven i Roma krevde makt over både det åndelige og det verdslige, og kirken eide enorme jordeiendommer. For vanlige mennesker gjennomsyret religionen hele tilværelsen - fra fødsel til død.

**Kirkens makt hvilte på flere søyler:**
- Monopol på frelse - bare kirken kunne formidle Guds nåde
- Utdanning og skriftkultur - kirken eide kunnskapen
- Jordeiendommer - kirken var største grunneier
- Internasjonal organisasjon - kirken var overnasjonal

Kirken og kongemakten samarbeidet ofte, men kom også i konflikt om hvem som hadde den øverste myndigheten.`,
    },
    {
      id: 'historie-4-3-def-1',
      type: 'definition',
      title: 'Kirkens organisasjon',
      content: `**Kirkehierarkiet:**

**Paven:**
- Biskopen av Roma
- Guds stedfortreder på jorden
- Øverste autoritet i tros- og moralspørsmål

**Kardinaler:**
- Pavens nærmeste rådgivere
- Valgte ny pave

**Erkebiskoper:**
- Ledet en kirkeprovins
- Norge hadde erkebispesete i Nidaros fra 1152

**Biskoper:**
- Ledet et bispedømme (stift)
- Stor verdslig og åndelig makt

**Prester:**
- Forvaltet sakramentene lokalt
- Sokneprester, kapellaner

**Munker og nonner:**
- Levde etter klosterregler
- Viktige sentre for lærdom og jordbruk

**Viktig:** Kirken var en parallell maktstruktur til kongedømmet, med egen domsmakt, skatt (tiende) og administrasjon.`,
    },
    {
      id: 'historie-4-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-4-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvorfor var det viktig for kirken å ha monopol på sakramentene (dåp, nattverd, skriftemål, siste olje osv.)? Hvordan ga dette makt?',
        hints: ['Tenk på frelse, kontroll og avhengighet'],
        solution: 'Sakramentene var nødvendige for frelse - uten dem risikerte man evig fortapelse. Kirkens monopol betydde at: 1) Alle var avhengige av kirken for evig liv. 2) Kirken kunne nekte sakramenter (ekskommunikasjon) som straff. 3) Folk måtte betale for tjenester (messer, begravelser). 4) Presten hadde makt gjennom skriftemålet - han kjente alles hemmeligheter. Dette ga enorm sosial kontroll.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-4-3-def-2',
      type: 'definition',
      title: 'Kirkens makt i samfunnet',
      content: `**Økonomisk makt:**
- Tienden: 10% av all avling til kirken
- Enorme jordeiendommer (opptil 1/3 av jorda i Norge)
- Testamenter - folk ga til kirken for sjelemesser
- Pilegrimsreiser og avlat

**Kulturell makt:**
- Monopol på utdanning - katedralskoler, universiteter
- Skriftkultur - munker kopierte bøker
- Kunst og arkitektur - katedraler, kirkekunst
- Kalender og helligdager

**Politisk makt:**
- Kroning - konger trengte kirkens godkjenning
- Ekskommunikasjon - kunne utelukke konger fra kirken
- Diplomati - paven megler mellom konger
- Investiturstriden - kamp om hvem som utnevnte biskoper

**Sosial makt:**
- Definerte rett og galt (moral)
- Ekteskap, arv, seksualitet regulert av kirken
- Fattigomsorg og sykehus`,
    },
    {
      id: 'historie-4-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-4-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva ekskommunikasjon var, og hvorfor det var et så effektivt maktmiddel i middelalderen.',
        hints: ['Tenk på sosiale og religiøse konsekvenser'],
        solution: 'Ekskommunikasjon betydde å bli utelukket fra kirken og sakramentene. Konsekvenser: 1) Religiøst: Ingen tilgang til frelse - evig fortapelse truet. 2) Sosialt: Ingen kunne omgås en ekskommunisert uten selv å risikere straff. 3) Rettslig: Ekskommuniserte mistet rettigheter, kontrakter ble ugyldige. 4) Politisk: Undersåtter ble løst fra troskap til ekskommunisert konge. I en tid da alle trodde på himmel og helvete, var dette en dødsdom for sjelen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-4-3-example-1',
      type: 'example',
      title: 'Eksempel: Investiturstriden',
      problem: 'Hva var investiturstriden, og hva forteller den oss om forholdet mellom kirke og kongemakt?',
      solution: `**Investiturstriden (1075-1122):**

**Hva var problemet?**
Hvem skulle utnevne (investere) biskoper - paven eller kongen? Biskoper hadde både åndelig og verdslig makt, så begge parter ville kontrollere dem.

**Konflikten:**
- Pave Gregor VII krevde at bare paven kunne utnevne biskoper
- Keiser Henrik IV motsatte seg dette
- Gregor VII ekskommuniserte Henrik IV (1076)
- Henrik måtte gjøre bot i Canossa (1077) for å bli tatt inn i kirken igjen

**Kompromisset (Wormskonkordatet 1122):**
- Paven utnevner biskoper til åndelig embete
- Keiseren gir dem verdslige len

**Betydning:**
- Viser kirkens enorme makt - selv keisere måtte bøye seg
- Men også grenser for pavemakten
- Etablerte prinsippet om adskillelse mellom åndelig og verdslig makt

Investiturstriden er et tidlig eksempel på konflikten mellom religion og stat som fortsatt debatteres.`,
    },
    {
      id: 'historie-4-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-4-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Klostrene var viktige institusjoner i middelalderen. Hvilke funksjoner hadde de utover det religiøse?',
        hints: ['Tenk på kunnskap, jordbruk, omsorg'],
        solution: 'Klostrenes funksjoner: 1) Lærdom - kopierte bøker, bevarte antikkens tekster. 2) Utdanning - underviste prester og andre. 3) Jordbruk - utviklet nye metoder, ryddet ny jord. 4) Fattigomsorg - ga mat og ly til fattige. 5) Sykehus - pleide syke. 6) Gjestfrihet - overnatting for reisende. 7) Økonomi - drev handel, håndverk, brygging. Klostrene var som små samfunn som fylte mange av funksjonene vi i dag har offentlige institusjoner for.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-4-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-4-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Var kirkens makt i middelalderen hovedsakelig positiv eller negativ for vanlige mennesker? Bruk konkrete eksempler.',
        hints: ['Tenk på både tjenester og kontroll'],
        solution: 'Positive sider: Kirken ga mening og trøst i en hard tilværelse, drev skoler og sykehus, tok seg av fattige, skapte kunst og arkitektur, ga rettsvern gjennom kirkeretten. Negative sider: Krevde tiende og avgifter fra fattige, kontrollerte folks liv (seksualitet, ekteskap), straffet annerledestenkende (kjettere), skapte frykt for helvete, prester misbrukte makten. Konklusjon: Kirken var både omsorgsinstitusjon og maktapparat - den ga tjenester, men krevde underkastelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_HISTORIE_4_4: TextbookChapter = {
  id: 'historie-4-4',
  courseId: 'historie',
  chapterNumber: '4.4',
  title: 'Handel og økonomiske systemer',
  description: 'Handelsveger, markeder og økonomisk utvikling.',
  estimatedMinutes: 45,
  competenceGoals: ['handel og økonomiske systemer'],
  content: [
    {
      id: 'historie-4-4-intro',
      type: 'text',
      content: `## Handel i middelalderen

Middelalderen var ikke bare en tid med jordbruk og isolerte gods. Handel knyttet Europa sammen, og kjøpmenn ble en stadig viktigere gruppe. Byer vokste frem som handelssentre, og nye økonomiske systemer utviklet seg.

**Handelsutviklingen:**
- Tidlig middelalder: Begrenset handel, hovedsakelig lokalt
- Høymiddelalder: Fjernhandel vokser, byer blomstrer
- Senmiddelalder: Komplekse handelssystemer, bankvirksomhet

For Norges del var handelen med fisk og tømmer avgjørende - og her kom Hansaforbundet til å spille en sentral rolle.`,
    },
    {
      id: 'historie-4-4-def-1',
      type: 'definition',
      title: 'Handelssystemer og byer',
      content: `**Pengeøkonomi vs. naturaløkonomi:**
- Tidlig middelalder: Byttehandel dominerte
- Etter hvert: Penger (mynter) brukes mer
- Overgangen var gradvis og ujevn

**Byenes vekst:**
- Byer som markeder og håndverkssentre
- Kjøpmenn og håndverkere organisert i laug (gilder)
- Byprivilegier ga byene selvstyre
- Befolkning: Fra noen hundre til titusenvis

**Viktige handelsvarer:**
- Krydder fra Østen (pepper, kanel)
- Klede fra Flandern
- Ull fra England
- Fisk fra Norge og Island
- Tømmer og pelsverk fra Norden
- Salt til konservering
- Vin fra Sør-Europa

**Markedene:**
- Årlige messer (Champagne-messene var størst)
- Lokale torv og ukemarkeder
- Spesialiserte markeder (hester, korn)`,
    },
    {
      id: 'historie-4-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'historie-4-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hvorfor vokste byene i høymiddelalderen? Nevn minst tre faktorer som bidro til byveksten.',
        hints: ['Tenk på handel, sikkerhet, frihet'],
        solution: 'Faktorer: 1) Handelen økte - byer var naturlige møteplasser for kjøp og salg. 2) Håndverksspesialisering - håndverkere trengte marked for varene sine. 3) Overskudd fra jordbruket - flere mennesker kunne brødfødes uten å dyrke selv. 4) Frihet - "byluft gjør fri" - livegne som flyktet til byen kunne bli frie. 5) Sikkerhet - bymurer beskyttet. 6) Kirkelige sentre - bispeseter tiltrakk folk.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-4-4-def-2',
      type: 'definition',
      title: 'Hansaforbundet',
      content: `**Hansaforbundet** (ca. 1200-1600) var et forbund av tyske handelsbyer som dominerte handelen i Nord-Europa.

**Kjennetegn:**
- Opptil 200 medlemsbyer
- Hovedkvarter i Lübeck
- Kontorer (handelsposter) i utlandet
- Felles handelspolitikk og forsvar

**Handelsposter (kontorer):**
- **Bergen** - Norges viktigste (Tyskebryggen)
- London (Steelyard)
- Brugge
- Novgorod

**Varer:**
- Eksporterte: klede, korn, øl, salt
- Importerte fra Norge: tørrfisk, tran, huder, pelsverk

**Hanseatenes makt i Norge:**
- Kontrollerte eksporten av tørrfisk
- Hadde privilegier og egen rettsmyndighet i Bergen
- Norske kjøpmenn ble marginalisert
- Hanseatene hadde ofte konflikter med norske myndigheter`,
    },
    {
      id: 'historie-4-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'historie-4-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hanseatene dominerte handelen i Bergen i flere hundre år. Hva var fordelene og ulempene med dette for Norge?',
        hints: ['Tenk på marked, priser, selvstendighet'],
        solution: 'Fordeler: 1) Sikret marked for norsk fisk - uten hanseatene ville det vært vanskelig å selge så mye fisk. 2) Bragte varer Norge trengte (korn, klede). 3) Tilførte kapital og handelsekspertise. Ulemper: 1) Norske kjøpmenn ble utkonkurrert. 2) Prisene ble satt av utlendinger. 3) Profitten gikk ut av landet. 4) Hanseatene krevde privilegier som svekket norsk suverenitet. 5) Avhengighet - Norge ble sårbar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-4-4-example-1',
      type: 'example',
      title: 'Eksempel: Tørrfiskhandelen',
      problem: 'Hvorfor var tørrfisk så viktig for handelen i middelalderen?',
      solution: `**Tørrfisk - Nordens gull:**

**Hva var tørrfisk?**
Torsk som ble hengt til tørking i kald vinterluft. Kunne lagres i årevis og fraktes over lange avstander.

**Hvorfor var den så verdifull?**
1. **Fastetider:** Kirken forbød kjøtt mange dager i året - fisk var alternativet
2. **Konservering:** I en tid uten kjøleskap var tørrfisk mat som holdt seg
3. **Næringsrik:** Lett å transportere, mye energi per kilo
4. **Etterspørsel:** Stor befolkning i Sør-Europa trengte mat

**Produksjon:**
- Hovedsakelig i Lofoten og Nord-Norge
- Sesongfiske om vinteren
- Tørking på hjell (trestativer)

**Handelskjeden:**
Fisker → Oppkjøper i Nord-Norge → Bergen → Hanseatene → Europa

**Betydning for Norge:**
Tørrfisken var Norges viktigste eksportvare i middelalderen og bandt det spredte landet økonomisk sammen. Nord-Norge var uunnværlig for landets økonomi.`,
    },
    {
      id: 'historie-4-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'historie-4-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Laugene (håndverkerforeningene) regulerte håndverk og handel strengt. Hva var hensikten med denne reguleringen, og hvem tjente på det?',
        hints: ['Tenk på kvalitet, konkurranse og priser'],
        solution: 'Laugenes regler: Fastsatte priser, kvalitetskrav, hvem som kunne drive håndverk, opplæringstid. Hensikt: 1) Sikre kvalitet - dårlige produkter skadet alle. 2) Begrense konkurranse - beskytte medlemmene. 3) Kontrollere tilgang til yrket. Hvem tjente: Etablerte mestere (beskyttet mot konkurranse), forbrukere (kvalitet garantert). Hvem tapte: De som ville inn i yrket (lang læretid), forbrukere (høyere priser pga. manglende konkurranse).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'historie-4-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'historie-4-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Drøft: Var middelalderens handelssystemer (Hansaforbundet, laugene) mer like eller ulike moderne handel? Trekk sammenligninger med dagens globaliserte økonomi.',
        hints: ['Tenk på frihandel, monopol, regulering'],
        solution: 'Likheter: Internasjonal handel over store avstander, spesialisering (Norge solgte fisk, kjøpte korn), handelsposter i utlandet (som multinasjonale selskaper). Forskjeller: 1) Mye mer regulert - laug og privilegier vs. frihandel. 2) Monopoler var akseptert - i dag bekjempes de. 3) Langsommere transport. 4) Færre varer. Konklusjon: Middelalderens handel var overraskende "global" for sin tid, men langt mer regulert og begrenset enn i dag. Både dengang og nå debatteres frihandel vs. beskyttelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const HISTORIE_CHAPTERS_DEL1 = [
  CHAPTER_HISTORIE_1_1,
  CHAPTER_HISTORIE_1_2,
  CHAPTER_HISTORIE_1_3,
  CHAPTER_HISTORIE_1_4,
  CHAPTER_HISTORIE_2_1,
  CHAPTER_HISTORIE_2_2,
  CHAPTER_HISTORIE_2_3,
  CHAPTER_HISTORIE_2_4,
  CHAPTER_HISTORIE_2_5,
  CHAPTER_HISTORIE_2_6,
  CHAPTER_HISTORIE_FORHISTORIE_1,
  CHAPTER_HISTORIE_FORHISTORIE_2,
  CHAPTER_HISTORIE_3_1,
  CHAPTER_HISTORIE_3_2,
  CHAPTER_HISTORIE_3_3,
  CHAPTER_HISTORIE_3_4,
  CHAPTER_HISTORIE_4_1,
  CHAPTER_HISTORIE_4_2,
  CHAPTER_HISTORIE_4_3,
  CHAPTER_HISTORIE_4_4,
];
