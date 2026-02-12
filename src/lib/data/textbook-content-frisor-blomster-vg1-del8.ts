/* eslint-disable */
// @ts-nocheck
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 8.1: Yrkesroller og utdanningsveier
// ============================================================================

export const CHAPTER_FB_VG1_8_1: TextbookChapter = {
  id: 'frisor-blomster-vg1-8-1',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '8.1',
  title: 'Yrkesroller og utdanningsveier',
  description: 'Oversikt over yrkesroller innen frisør, blomster, interiør og eksponeringsdesign, samt utdanningsveier, fagbrev og sertifiseringer. Elevene lærer om karrieremuligheter og krav til de ulike yrkene.',
  estimatedMinutes: 40,
  competenceGoals: ['beskrive ulike yrkesroller og utdanningsveier i frisør-, blomster-, interiør- og eksponeringsdesignbransjen', 'gjøre rede for krav til fagbrev og sertifiseringer'],
  content: [
    {
      id: 'fb-8-1-intro',
      type: 'text',
      content: `## Yrkesroller og karriereveier i bransjen

Utdanningsprogrammet frisør, blomster, interiør og eksponeringsdesign åpner for et bredt spekter av yrkesroller. Etter VG1 velger du fordypning, og veien videre går gjennom VG2, eventuelt VG3, og deretter læretid i bedrift. Målet for de fleste er et fagbrev eller svennebrev, som dokumenterer din kompetanse og kvalifiserer deg til å jobbe selvstendig i faget.

I dette kapittelet skal du lære:
- Hvilke yrkesroller som finnes innenfor de ulike fagområdene
- Hvordan utdanningsløpet er bygd opp
- Hva fagbrev og svennebrev innebærer
- Muligheter for videre utdanning og spesialisering`,
    },
    {
      id: 'fb-8-1-def-1',
      type: 'definition',
      title: 'Fagbrev og svennebrev',
      content: `Et **fagbrev** er et offentlig dokument som bekrefter at du har bestått fag- eller svenneprøven i et bestemt fag. I håndverksfag som frisør brukes betegnelsen **svennebrev**. For å oppnå fagbrev/svennebrev må du fullføre VG1, VG2 og deretter to års læretid i bedrift, avsluttet med en fag- eller svenneprøve. Fagbrevet gir rett til å praktisere yrket selvstendig.`,
    },
    {
      id: 'fb-8-1-text-1',
      type: 'text',
      title: 'Yrkesroller i bransjen',
      content: `### Frisør

- **Frisør:** Klipper, farger, styler og pleier hår. Jobber i salong og gir rådgivning om hårpleie.
- **Damefrisør / herrefrisør:** Spesialisering innen dame- eller herrehår.
- **Salongleder:** Driver og administrerer en frisørsalong, ansvar for økonomi, personal og kunder.
- **Hår- og makeupstylist:** Jobber med hår og sminke for foto, film, teater og TV.

### Blomsterdekoratør

- **Blomsterdekoratør:** Lager buketter, dekorasjoner og arrangementer for ulike anledninger.
- **Butikkmedarbeider i blomsterbutikk:** Kundeservice, salg og vedlikehold av blomster.
- **Event- og bryllupsdekoratør:** Spesialiserer seg på dekorasjon til store arrangementer.

### Interiør og eksponeringsdesign

- **Interiørkonsulent:** Gir råd om farger, materialer, møbler og innredning.
- **Eksponeringsdesigner (visual merchandiser):** Utformer butikkutstillinger og visuelle konsepter.
- **Utstillingsdesigner:** Planlegger og gjennomfører utstillinger for messer og museer.`,
    },
    {
      id: 'fb-8-1-def-2',
      type: 'definition',
      title: 'Lærling',
      content: `En **lærling** er en person som har inngått en lærekontrakt med en bedrift for å få opplæring i et fag. Læretiden er normalt to år, der lærlingen arbeider under veiledning og følger en opplæringsplan. Lærlingen mottar lærlingelønn og har rett til opplæring i henhold til læreplanen. Etter endt læretid kan lærlingen gå opp til fag- eller svenneprøve.`,
    },
    {
      id: 'fb-8-1-text-2',
      type: 'text',
      title: 'Utdanningsløpet',
      content: `### Fra VG1 til fagbrev

Utdanningsløpet i yrkesfag følger en fast struktur:

**VG1 – Frisør, blomster, interiør og eksponeringsdesign:**
- Felles grunnlag for alle retningene
- Gir bred innføring i de ulike fagområdene

**VG2 – Fordypning:**
- Frisør
- Blomsterdekoratør
- Interiør og utstillingsdesign

**Læretid (2 år):**
- Praktisk opplæring i bedrift
- Følger opplæringsplan basert på læreplanen
- Veiledning fra instruktør/mester
- Underveisvurdering og halvårsvurderinger

**Fag-/svenneprøve:**
- Praktisk prøve der du viser kompetansen din
- Planleggingsdel, gjennomføringsdel og dokumentasjon
- Vurderes av en prøvenemnd
- Resultat: Bestått meget godt, Bestått eller Ikke bestått

### Videre muligheter

- **Mesterbrev:** Tilleggskompetanse for å drive egen bedrift i håndverksfag
- **Fagskole:** Kortere videreutdanninger innen spesialiserte felt
- **Høyere utdanning:** Med generell studiekompetanse (påbygg) kan du ta høyskole- eller universitetsutdanning`,
    },
    {
      id: 'fb-8-1-example-1',
      type: 'example',
      title: 'Eksempel: Utdanningsveien til frisør',
      problem: 'Sara er elev på VG1 frisør, blomster, interiør og eksponeringsdesign. Hun ønsker å bli frisør med eget foretak. Beskriv utdanningsveien hennes.',
      solution: `**Saras utdanningsvei:**

1. **VG1** – Frisør, blomster, interiør og eksponeringsdesign (1 år)
2. **VG2** – Frisør (1 år)
3. **Læretid** i frisørsalong (2 år) med opplæring i klipp, farging, styling og kundebehandling
4. **Svenneprøve** – praktisk prøve der hun viser kompetansen sin
5. **Svennebrev** – dokumenterer at hun er kvalifisert frisør
6. **Mesterbrev** (valgfritt) – gir kompetanse til å drive egen bedrift og ta inn lærlinger
7. **Etablering** av eget foretak

Sara bør også vurdere å ta kurs i økonomi, markedsføring og bedriftsledelse for å forberede seg på å drive egen virksomhet.`,
    },
    {
      id: 'fb-8-1-text-3',
      type: 'text',
      title: 'Sertifiseringer og spesialiseringer',
      content: `### Tilleggskompetanse

I tillegg til fagbrev finnes det flere sertifiseringer og kurs som kan styrke karrieren:

- **HMS-kurs:** Påkrevd for alle som jobber med kjemikalier i frisørfaget
- **Produktsertifiseringer:** Kurs fra leverandører i spesifikke produktlinjer
- **Trendkurs:** Oppdatering på nye teknikker og trender
- **Pedagogisk kompetanse:** For å bli instruktør eller lærer i faget
- **Bedriftsledelse:** Kurs for å starte og drive egen virksomhet

### Bransjekrav

Noen yrkesroller krever spesifikke sertifiseringer:
- Frisører som bruker kjemikalier må ha dokumentert HMS-opplæring
- Blomsterdekoratører som håndterer plantevern trenger sertifisering
- Interiørkonsulenter kan ta sertifiseringer i fargerådgivning og prosjektledelse`,
    },
    {
      id: 'fb-8-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Yrkesrollene** i bransjen spenner fra frisør og blomsterdekoratør til interiørkonsulent og eksponeringsdesigner
- **Utdanningsløpet** går fra VG1 via VG2 til læretid og fag-/svenneprøve
- **Fagbrev og svennebrev** dokumenterer kompetansen din og kvalifiserer deg for selvstendig yrkesutøvelse
- **Videre utdanning** kan inkludere mesterbrev, fagskole og høyere utdanning
- **Sertifiseringer** og kurs gir tilleggskompetanse og spesialisering`,
    },
  ],
  exercises: [
    {
      id: 'fb-8-1-ex-1',
      type: 'multiple-choice',
      task: 'Hvor lang er normalt læretiden i bedrift etter VG2?',
      options: [
        { id: 'a', text: '1 år', isCorrect: false },
        { id: 'b', text: '2 år', isCorrect: true },
        { id: 'c', text: '3 år', isCorrect: false },
        { id: 'd', text: '4 år', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'Læretiden i bedrift er normalt to år etter fullført VG2. I løpet av disse to årene får lærlingen praktisk opplæring under veiledning, og avslutter med en fag- eller svenneprøve.',
    },
    {
      id: 'fb-8-1-ex-2',
      type: 'multiple-choice',
      task: 'Hva er forskjellen mellom et fagbrev og et svennebrev?',
      options: [
        { id: 'a', text: 'Et svennebrev gir høyere lønn enn et fagbrev', isCorrect: false },
        { id: 'b', text: 'Svennebrev brukes i håndverksfag, fagbrev brukes i andre yrkesfag', isCorrect: true },
        { id: 'c', text: 'Fagbrev krever lengre læretid enn svennebrev', isCorrect: false },
        { id: 'd', text: 'Det er ingen forskjell, begrepene betyr det samme', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'Svennebrev brukes tradisjonelt i håndverksfag som frisør, mens fagbrev brukes i andre yrkesfag. Begge dokumenterer bestått fag- eller svenneprøve og gir rett til å praktisere yrket selvstendig.',
    },
    {
      id: 'fb-8-1-ex-3',
      type: 'classic',
      task: 'Velg en av yrkesrollene innen frisør, blomster, interiør eller eksponeringsdesign. Beskriv yrkesrollen, hvilken utdanning som kreves, og hvilke personlige egenskaper som er viktige for å lykkes i yrket.',
      hints: ['Tenk på både formell utdanning og personlige egenskaper som kreativitet, nøyaktighet og kundeservice'],
      solution: 'Besvarelsen bør inneholde: 1) Beskrivelse av yrkesrollen og typiske arbeidsoppgaver. 2) Utdanningsveien fra VG1 via VG2 til læretid og fagbrev/svennebrev. 3) Eventuelle tilleggskrav som sertifiseringer eller mesterbrev. 4) Personlige egenskaper som kreativitet, serviceinnstilling, nøyaktighet, fysisk utholdenhet og evne til å følge trender.',
    },
    {
      id: 'fb-8-1-ex-4',
      type: 'classic',
      task: 'Sammenlign utdanningsveien for en frisør med utdanningsveien for en interiørkonsulent. Hvilke likheter og forskjeller finnes det? Diskuter fordeler og ulemper ved de to veiene.',
      hints: ['Tenk på lengde, innhold, praktisk vs. teoretisk, og karrieremuligheter etter endt utdanning'],
      solution: 'Begge starter på VG1 frisør, blomster, interiør og eksponeringsdesign, men velger ulike fordypninger på VG2. Frisøren følger yrkesfagmodellen med læretid og svennebrev, mens interiørkonsulenten kan ta fagbrev eller velge påbygg til generell studiekompetanse og studere videre. Likheter: Begge krever kreativitet og kundeforståelse. Forskjeller: Frisøren får mer praktisk opplæring, mens interiørkonsulenten kan trenge mer teoretisk kunnskap om arkitektur og design.',
    },
  ],
  keyTerms: [
    { term: 'Fagbrev', definition: 'Offentlig dokument som bekrefter bestått fagprøve i et yrkesfag' },
    { term: 'Svennebrev', definition: 'Tilsvarende fagbrev, men brukt i håndverksfag som frisør' },
    { term: 'Lærling', definition: 'Person som har lærekontrakt med en bedrift og får opplæring i et fag' },
    { term: 'Mesterbrev', definition: 'Tilleggskompetanse for å drive egen bedrift i håndverksfag' },
    { term: 'Prøvenemnd', definition: 'Fagpersoner som vurderer fag- og svenneprøver' },
  ],
};

// ============================================================================
// Kapittel 8.2: Profesjonell yrkesutøvelse
// ============================================================================

export const CHAPTER_FB_VG1_8_2: TextbookChapter = {
  id: 'frisor-blomster-vg1-8-2',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '8.2',
  title: 'Profesjonell yrkesutøvelse',
  description: 'Hva det betyr å være profesjonell i frisør-, blomster- og interiørbransjen. Yrkesetikk, holdninger, kvalitetsbevissthet og kundebehandling som grunnlag for god yrkesutøvelse.',
  estimatedMinutes: 35,
  competenceGoals: ['reflektere over hva profesjonalitet innebærer i bransjen', 'vise forståelse for yrkesetikk og gode holdninger i yrkesutøvelsen'],
  content: [
    {
      id: 'fb-8-2-intro',
      type: 'text',
      content: `## Hva betyr det å være profesjonell?

Profesjonalitet handler om mer enn bare faglige ferdigheter. Det dreier seg om holdninger, etikk, pålitelighet og evne til å levere kvalitet i alt du gjør. I bransjer der du jobber tett med kunder, er profesjonell opptreden avgjørende for tillit og kundetilfredshet.

I dette kapittelet skal du lære:
- Hva profesjonalitet betyr i praksis
- Sentrale yrkesetiske prinsipper
- Betydningen av gode holdninger og personlig fremtreden
- Hvordan kvalitetsbevissthet styrker yrkesutøvelsen`,
    },
    {
      id: 'fb-8-2-def-1',
      type: 'definition',
      title: 'Profesjonalitet',
      content: `**Profesjonalitet** innebærer at du utfører arbeidet ditt med høy faglig standard, opptrer etisk og ansvarlig, og behandler kunder og kollegaer med respekt. Det omfatter punktlighet, pålitelighet, god kommunikasjon, ryddighet og vilje til kontinuerlig faglig utvikling. En profesjonell yrkesutøver representerer både seg selv og arbeidsplassen på en positiv måte.`,
    },
    {
      id: 'fb-8-2-text-1',
      type: 'text',
      title: 'Yrkesetikk',
      content: `### Etiske prinsipper i bransjen

Yrkesetikk handler om de moralske retningslinjene som styrer hvordan du opptrer i yrkeslivet:

**Taushetsplikt:**
- Personlig informasjon kunder deler, skal holdes konfidensielt
- Snakk aldri om andre kunders behandlinger eller personlige forhold
- Vær diskret om kundens utseende og ønsker

**Ærlighet og rådgivning:**
- Gi ærlige anbefalinger basert på kundens behov, ikke bare profitt
- Vær åpen om hva som er realistisk å oppnå
- Informer om priser og tidsbruk på forhånd

**Respekt:**
- Behandle alle kunder likt, uavhengig av bakgrunn
- Respekter kundens ønsker og grenser
- Vær lyttende og ta kundens meninger på alvor

**Ansvarlighet:**
- Ta ansvar for eget arbeid og eventuelle feil
- Følg HMS-rutiner og bransjestandarder
- Hold deg oppdatert på faglige krav og retningslinjer`,
    },
    {
      id: 'fb-8-2-def-2',
      type: 'definition',
      title: 'Yrkesstolthet',
      content: `**Yrkesstolthet** er en positiv følelse av tilhørighet og stolthet knyttet til faget ditt og arbeidet du utfører. Det innebærer at du verdsetter fagkunnskapen din, setter høye standarder for eget arbeid, og bidrar til å løfte bransjen. Yrkesstolthet motiverer til kontinuerlig forbedring og gir energi i hverdagen.`,
    },
    {
      id: 'fb-8-2-text-2',
      type: 'text',
      title: 'Holdninger og personlig fremtreden',
      content: `### Førsteinntrykket teller

I bransjer der du møter kunder ansikt til ansikt, er personlig fremtreden viktig:

**Utseende og hygiene:**
- Rent og ryddig arbeidstøy
- God personlig hygiene
- Passende fremtreden som representerer bransjen

**Kommunikasjon:**
- Vennlig og imøtekommende
- Tydelig og forståelig språk
- Aktiv lytting og oppfølgingsspørsmål
- Profesjonelt kroppsspråk

**Holdninger i praksis:**
- Punktlighet og pålitelighet
- Positiv innstilling, også i travle perioder
- Fleksibilitet og løsningsorientering
- Samarbeidsvilje med kollegaer
- Vilje til å lære og utvikle seg`,
    },
    {
      id: 'fb-8-2-example-1',
      type: 'example',
      title: 'Eksempel: Profesjonell håndtering av en misfornøyd kunde',
      problem: 'En kunde er misfornøyd med hårfargen som ble annerledes enn forventet. Hvordan bør frisøren håndtere situasjonen profesjonelt?',
      solution: `**Profesjonell håndtering:**

1. **Lytt:** La kunden forklare hva som er problemet uten å avbryte
2. **Vis forståelse:** Bekreft at du forstår kundens frustrasjon
3. **Vurder objektivt:** Se på resultatet og vurder om det avviker fra det avtalte
4. **Ta ansvar:** Hvis feilen er din, innrøm det uten unnskyldninger
5. **Tilby løsning:** Foreslå korrigering, ny behandling eller kompensasjon
6. **Gjennomfør:** Utfør korreksjon raskt og grundig
7. **Følg opp:** Kontakt kunden etter noen dager for å sikre at de er fornøyde

**Viktig:** Aldri argumenter mot kunden eller legg skylden på dem. En profesjonell frisør tar ansvar og bruker situasjonen til å styrke kundeforholdet.`,
    },
    {
      id: 'fb-8-2-text-3',
      type: 'text',
      title: 'Kvalitetsbevissthet',
      content: `### Kvalitet i alle ledd

Kvalitetsbevissthet betyr at du hele tiden streber etter å levere best mulig arbeid:

- **Forberedelse:** Grundig konsultasjon med kunden, riktig materialvalg
- **Gjennomføring:** Nøyaktighet og oppmerksomhet i arbeidet
- **Etterarbeid:** Rydding, rengjøring og vedlikehold av utstyr
- **Evaluering:** Vurder eget arbeid kritisk og lær av feil

### Faglig utvikling

En profesjonell yrkesutøver utvikler seg kontinuerlig:
- Delta på kurs og messer
- Følg med på trender og nye teknikker
- Les fagblader og følg bransjen i sosiale medier
- Øv på teknikker utenfor arbeidstiden
- Søk tilbakemeldinger fra kollegaer og kunder`,
    },
    {
      id: 'fb-8-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Profesjonalitet** handler om faglig dyktighet, etikk, holdninger og pålitelighet
- **Yrkesetikk** omfatter taushetsplikt, ærlighet, respekt og ansvarlighet
- **Personlig fremtreden** og kommunikasjon er avgjørende i kundemøter
- **Kvalitetsbevissthet** innebærer å strebe etter høy standard i alle deler av arbeidet
- **Faglig utvikling** er en kontinuerlig prosess gjennom hele karrieren`,
    },
  ],
  exercises: [
    {
      id: 'fb-8-2-ex-1',
      type: 'multiple-choice',
      task: 'Hvilken av følgende er IKKE en del av yrkesetikk i frisørbransjen?',
      options: [
        { id: 'a', text: 'Taushetsplikt om kunders personlige forhold', isCorrect: false },
        { id: 'b', text: 'Ærlig rådgivning basert på kundens behov', isCorrect: false },
        { id: 'c', text: 'Dele bilder av kunders behandlinger på sosiale medier uten samtykke', isCorrect: true },
        { id: 'd', text: 'Respektere kundens ønsker og grenser', isCorrect: false },
      ],
      correctAnswer: 2,
      solution: 'Å dele bilder av kunders behandlinger uten samtykke bryter med taushetsplikten og respekten for kundens privatliv. All deling krever eksplisitt samtykke fra kunden.',
    },
    {
      id: 'fb-8-2-ex-2',
      type: 'classic',
      task: 'Beskriv hva du legger i begrepet «profesjonalitet» med egne ord. Gi minst tre konkrete eksempler på profesjonell opptreden i en frisørsalong, blomsterbutikk eller interiørvirksomhet.',
      hints: ['Tenk på holdninger, kommunikasjon, faglig dyktighet og etikk'],
      solution: 'Profesjonalitet handler om å levere høy faglig kvalitet med gode holdninger og etisk bevissthet. Eksempler: 1) En frisør som gir ærlig rådgivning om hva som passer kundens hårtype, selv om det betyr en enklere behandling. 2) En blomsterdekoratør som ankommer tidlig for å rigge til en bryllupsdekorasjon og har en reserveplan dersom leveransen er ufullstendig. 3) En interiørkonsulent som holder seg innenfor kundens budsjett og anbefaler løsninger som passer deres livssituasjon, ikke bare det mest moderne.',
    },
    {
      id: 'fb-8-2-ex-3',
      type: 'classic',
      task: 'Du er lærling i en blomsterbutikk. En kunde klager på at buketten de kjøpte for to dager siden allerede har visnet. Beskriv trinn for trinn hvordan du håndterer denne situasjonen profesjonelt.',
      hints: ['Tenk på kommunikasjon, ansvar, løsning og forebygging'],
      solution: 'En god besvarelse inneholder: 1) Lytte til kunden og vise forståelse for skuffelsen. 2) Beklage og spørre om detaljer (når den ble kjøpt, hvordan den ble oppbevart). 3) Tilby en erstatning eller kompensasjon, for eksempel ny bukett. 4) Undersøke årsaken internt (var det noe galt med innkjøpet, ble blomstene ikke stelt riktig?). 5) Dokumentere hendelsen og lære av den for å unngå at det skjer igjen.',
    },
    {
      id: 'fb-8-2-ex-4',
      type: 'multiple-choice',
      task: 'Hva er den viktigste grunnen til kontinuerlig faglig utvikling i frisør- og interiørbransjen?',
      options: [
        { id: 'a', text: 'Arbeidsgiveren krever det', isCorrect: false },
        { id: 'b', text: 'Bransjen utvikler seg med nye trender, teknikker og produkter', isCorrect: true },
        { id: 'c', text: 'Det gir høyere lønn automatisk', isCorrect: false },
        { id: 'd', text: 'Det er et krav for å beholde fagbrevet', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'Bransjen er i stadig utvikling med nye trender, teknikker, produkter og kundeforventninger. Kontinuerlig faglig utvikling sikrer at du holder deg relevant og kan tilby kundene dine de beste løsningene.',
    },
  ],
  keyTerms: [
    { term: 'Profesjonalitet', definition: 'Å utføre arbeid med høy faglig standard, etikk og gode holdninger' },
    { term: 'Yrkesetikk', definition: 'Moralske retningslinjer for opptreden og handlinger i yrkeslivet' },
    { term: 'Taushetsplikt', definition: 'Plikten til å holde personlig informasjon om kunder konfidensielt' },
    { term: 'Yrkesstolthet', definition: 'Positiv følelse av tilhørighet og stolthet knyttet til eget fag' },
    { term: 'Kvalitetsbevissthet', definition: 'Bevisst streben etter å levere best mulig arbeid i alle ledd' },
  ],
};

// ============================================================================
// Kapittel 8.3: Arbeidsliv og partssamarbeid
// ============================================================================

export const CHAPTER_FB_VG1_8_3: TextbookChapter = {
  id: 'frisor-blomster-vg1-8-3',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '8.3',
  title: 'Arbeidsliv og partssamarbeid',
  description: 'Innføring i det norske arbeidslivet med fokus på partssamarbeid, fagforeninger, tariffavtaler og arbeidstakerrettigheter. Elevene lærer om hvordan arbeidslivet er organisert og hvilke rettigheter og plikter som gjelder.',
  estimatedMinutes: 40,
  competenceGoals: ['gjøre rede for partssamarbeidet i norsk arbeidsliv', 'beskrive rettigheter og plikter for arbeidstaker og arbeidsgiver'],
  content: [
    {
      id: 'fb-8-3-intro',
      type: 'text',
      content: `## Det norske arbeidslivet

Det norske arbeidslivet er bygget på et tett samarbeid mellom tre parter: arbeidstakere, arbeidsgivere og staten. Dette trepartssamarbeidet har skapt et trygt og velorganisert arbeidsliv med gode rettigheter og plikter for alle involverte.

I dette kapittelet skal du lære:
- Hva partssamarbeidet innebærer
- Fagforeningenes rolle og betydning
- Hva en tariffavtale er
- Hvilke rettigheter og plikter arbeidstakere og arbeidsgivere har`,
    },
    {
      id: 'fb-8-3-def-1',
      type: 'definition',
      title: 'Trepartssamarbeidet',
      content: `**Trepartssamarbeidet** er et samarbeid mellom arbeidstakerorganisasjoner (fagforeninger), arbeidsgiverorganisasjoner og staten. Disse tre partene forhandler sammen om lønn, arbeidsvilkår og lover som regulerer arbeidslivet. Samarbeidet er grunnlaget for den norske modellen og bidrar til stabilitet, likhet og forutsigbarhet i arbeidsmarkedet.`,
    },
    {
      id: 'fb-8-3-text-1',
      type: 'text',
      title: 'Fagforeninger og organisering',
      content: `### Fagforeningenes rolle

En fagforening er en organisasjon som ivaretar arbeidstakernes interesser. I frisør-, blomster- og interiørbransjen er dette blant annet:

- **Fagforbundet:** Organiserer mange ansatte i serviceyrker
- **Handel og Kontor (HK):** Organiserer ansatte i butikk og handel
- **Norsk Frisør- og Velværebedrifter (NFVB):** Arbeidsgiverorganisasjon for frisørbransjen

**Fagforeningens oppgaver:**
- Forhandle lønn og arbeidsvilkår
- Gi juridisk bistand ved konflikter
- Tilby kurs og etterutdanning
- Påvirke politiske beslutninger som angår bransjen
- Arbeide for trygge arbeidsplasser

### Arbeidsgiverorganisasjoner

Arbeidsgiverorganisasjoner representerer bedriftene og forhandler på deres vegne:
- **NHO (Næringslivets Hovedorganisasjon):** Norges største arbeidsgiverorganisasjon
- **Virke:** Organiserer bedrifter innen handel og tjenester`,
    },
    {
      id: 'fb-8-3-def-2',
      type: 'definition',
      title: 'Tariffavtale',
      content: `En **tariffavtale** er en skriftlig avtale mellom en fagforening og en arbeidsgiverorganisasjon (eller enkeltbedrift) om lønns- og arbeidsvilkår. Tariffavtalen regulerer blant annet minstelønn, arbeidstid, overtidsbetaling, ferie, pensjon og permisjonsrettigheter. Avtalen forhandles normalt hvert annet år, og gjelder for alle ansatte i bedriften som omfattes av avtalen.`,
    },
    {
      id: 'fb-8-3-text-2',
      type: 'text',
      title: 'Rettigheter og plikter',
      content: `### Arbeidstakerens rettigheter

Arbeidsmiljøloven gir arbeidstakere en rekke rettigheter:

- **Skriftlig arbeidsavtale:** Alle ansatte har krav på en skriftlig kontrakt
- **Regulert arbeidstid:** Normalt 37,5 timer per uke (kan variere med tariffavtale)
- **Overtidsbetaling:** Minst 40 % tillegg for arbeid ut over avtalt arbeidstid
- **Ferie:** Minimum 25 virkedager (4 uker + 1 dag) ferie per år
- **Sykepenger:** Rett til sykepenger ved sykdom
- **Verneombud:** Rett til representasjon i HMS-spørsmål
- **Varsling:** Rett til å varsle om kritikkverdige forhold uten frykt for represalier

### Arbeidstakerens plikter

- Utføre arbeidet i henhold til arbeidsavtalen
- Følge HMS-rutiner og bruke påkrevd verneutstyr
- Melde fra om sykdom og fravær i henhold til reglene
- Bidra til et godt arbeidsmiljø
- Holde seg faglig oppdatert

### Arbeidsgiverens plikter

- Sørge for et trygt og forsvarlig arbeidsmiljø
- Utbetale lønn til avtalt tid
- Tegne yrkesskadeforsikring
- Gi opplæring i HMS
- Gjennomføre medarbeidersamtaler`,
    },
    {
      id: 'fb-8-3-text-3',
      type: 'text',
      title: 'Lærlingens rettigheter',
      content: `### Spesielle regler for lærlinger

Som lærling har du i tillegg til vanlige arbeidstakerrettigheter:

- **Lærekontrakt:** Skriftlig avtale mellom lærling, bedrift og fylkeskommune
- **Opplæringsplan:** Rett til opplæring i henhold til læreplanen
- **Veiledning:** Rett til faglig veiledning fra instruktør
- **Underveisvurdering:** Rett til halvårlige vurderingssamtaler
- **Lærlingelønn:** Lønn i henhold til tariffavtale eller avtale
- **Heve lærekontrakt:** Mulighet til å heve kontrakten ved alvorlig mislighold

**Viktig:** Lærlinger skal ikke brukes som billig arbeidskraft. Opplæringen skal stå i sentrum, og lærlingen skal få arbeide med varierte oppgaver i tråd med læreplanen.`,
    },
    {
      id: 'fb-8-3-example-1',
      type: 'example',
      title: 'Eksempel: Tariffavtale i praksis',
      problem: 'Maria er ansatt som frisør i en salong som er bundet av tariffavtale. Bedriften ber henne jobbe to timer overtid en lørdag. Hvilke rettigheter har Maria?',
      solution: `**Marias rettigheter:**

1. **Overtidsbetaling:** Maria har krav på minst 40 % overtidstillegg for de to ekstra timene
2. **Arbeidstidsgrenser:** Arbeidsmiljøloven setter grenser for hvor mye overtid en ansatt kan pålegges (maks 10 timer per 7 dager, 25 timer per 4 uker)
3. **Lørdag:** Dersom tariffavtalen har egne regler om lørdagsarbeid (f.eks. lørdagstillegg), gjelder disse i tillegg
4. **Frivillighet:** I utgangspunktet kan arbeidsgiver pålegge nødvendig overtid, men det må være et reelt behov
5. **Kompensasjon:** Alternativt kan Maria avtale avspasering i stedet for overtidsbetaling, dersom dette er regulert i tariffavtalen

Tariffavtalen kan gi bedre vilkår enn lovens minstekrav.`,
    },
    {
      id: 'fb-8-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Trepartssamarbeidet** mellom arbeidstakere, arbeidsgivere og staten er grunnlaget for det norske arbeidslivet
- **Fagforeninger** ivaretar arbeidstakernes interesser og forhandler om lønn og arbeidsvilkår
- **Tariffavtaler** regulerer lønns- og arbeidsvilkår mellom partene i arbeidslivet
- **Arbeidstakere** har rettigheter som arbeidsavtale, regulert arbeidstid, ferie og sykepenger
- **Lærlinger** har spesielle rettigheter knyttet til opplæring, veiledning og lærekontrakt`,
    },
  ],
  exercises: [
    {
      id: 'fb-8-3-ex-1',
      type: 'multiple-choice',
      task: 'Hva er trepartssamarbeidet?',
      options: [
        { id: 'a', text: 'Samarbeid mellom tre bedrifter i samme bransje', isCorrect: false },
        { id: 'b', text: 'Samarbeid mellom arbeidstakerorganisasjoner, arbeidsgiverorganisasjoner og staten', isCorrect: true },
        { id: 'c', text: 'Samarbeid mellom lærling, instruktør og skolen', isCorrect: false },
        { id: 'd', text: 'Samarbeid mellom tre forskjellige fagforeninger', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'Trepartssamarbeidet er samarbeidet mellom arbeidstakerorganisasjoner (fagforeninger), arbeidsgiverorganisasjoner og staten. Disse tre partene forhandler sammen om lover, regler og avtaler som regulerer arbeidslivet.',
    },
    {
      id: 'fb-8-3-ex-2',
      type: 'classic',
      task: 'Forklar hva en tariffavtale er og gi eksempler på hva den kan inneholde. Hvorfor er tariffavtaler viktige for arbeidstakere?',
      hints: ['Tenk på lønn, arbeidstid, ferie og andre arbeidsvilkår'],
      solution: 'En tariffavtale er en skriftlig avtale mellom fagforening og arbeidsgiverorganisasjon om lønns- og arbeidsvilkår. Den kan inneholde regler om minstelønn, arbeidstid, overtidsbetaling, ferie, pensjon, permisjoner og HMS. Tariffavtaler er viktige fordi de sikrer arbeidstakere forutsigbare og rettferdige vilkår, og gir et minimum av lønn og rettigheter som arbeidsgiver ikke kan gå under.',
    },
    {
      id: 'fb-8-3-ex-3',
      type: 'classic',
      task: 'Du er lærling og opplever at du stort sett bare vasker hår og rydder i salongen, mens du sjelden får øve på klipp og farging. Hva kan du gjøre i denne situasjonen? Hvilke rettigheter har du som lærling?',
      hints: ['Tenk på lærekontrakten, opplæringsplanen og hvem du kan kontakte for hjelp'],
      solution: 'Som lærling har du rett til opplæring i henhold til læreplanen og opplæringsplanen. Steg: 1) Snakk med instruktøren og uttrykk ønske om mer variert opplæring. 2) Vis til opplæringsplanen og hvilke kompetansemål du skal jobbe med. 3) Kontakt opplæringskontoret dersom samtalen ikke fører til endring. 4) Fylkeskommunens opplæringsavdeling kan kontaktes hvis problemet vedvarer. 5) Fagforeningen kan gi råd og bistand. 6) I alvorlige tilfeller kan lærekontrakten heves.',
    },
  ],
  keyTerms: [
    { term: 'Trepartssamarbeid', definition: 'Samarbeid mellom arbeidstakerorganisasjoner, arbeidsgiverorganisasjoner og staten' },
    { term: 'Fagforening', definition: 'Organisasjon som ivaretar arbeidstakernes interesser' },
    { term: 'Tariffavtale', definition: 'Skriftlig avtale om lønns- og arbeidsvilkår mellom fagforening og arbeidsgiverorganisasjon' },
    { term: 'Arbeidsmiljøloven', definition: 'Lov som regulerer arbeidsforhold, arbeidstid, HMS og arbeidstakers rettigheter' },
    { term: 'Lærekontrakt', definition: 'Avtale mellom lærling, bedrift og fylkeskommune om opplæring i bedrift' },
  ],
};

// ============================================================================
// Kapittel 8.4: Bærekraft og miljøansvar i bransjen
// ============================================================================

export const CHAPTER_FB_VG1_8_4: TextbookChapter = {
  id: 'frisor-blomster-vg1-8-4',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '8.4',
  title: 'Bærekraft og miljøansvar i bransjen',
  description: 'Hvordan frisør-, blomster- og interiørbransjen kan ta miljøansvar gjennom bærekraftige praksiser, grønne valg og bevisst ressursbruk. Elevene lærer om miljøsertifiseringer, grønne produkter og bransjens påvirkning på miljøet.',
  estimatedMinutes: 45,
  competenceGoals: ['reflektere over bærekraft og miljøansvar i frisør-, blomster- og interiørbransjen', 'foreslå tiltak for å redusere miljøbelastningen i yrkesutøvelsen'],
  content: [
    {
      id: 'fb-8-4-intro',
      type: 'text',
      content: `## Bærekraft i frisør-, blomster- og interiørbransjen

Alle bransjer har et ansvar for å redusere sin miljøpåvirkning. Frisører bruker kjemikalier som påvirker vannmiljøet, blomsterbransjen har klimaavtrykk gjennom transport og avfall, og interiørbransjen påvirker gjennom materialvalg og forbruk. Bærekraftig yrkesutøvelse handler om å gjøre bevisste valg som reduserer den negative påvirkningen på miljøet.

I dette kapittelet skal du lære:
- Hva bærekraft betyr for bransjen
- Miljøutfordringer knyttet til de ulike fagområdene
- Grønne praksiser og miljøvennlige alternativer
- Miljøsertifiseringer og miljømerker`,
    },
    {
      id: 'fb-8-4-def-1',
      type: 'definition',
      title: 'Bærekraftig utvikling',
      content: `**Bærekraftig utvikling** er utvikling som tilfredsstiller dagens behov uten å ødelegge mulighetene for kommende generasjoner til å tilfredsstille sine behov. I bransjesammenheng betyr dette å drive virksomhet på en måte som tar hensyn til miljø, økonomi og sosiale forhold. FNs bærekraftsmål gir et rammeverk for dette arbeidet.`,
    },
    {
      id: 'fb-8-4-text-1',
      type: 'text',
      title: 'Miljøutfordringer i bransjen',
      content: `### Frisørbransjen

- **Kjemikalieutslipp:** Hårfarge, blonderpulver og permanentvæske inneholder stoffer som kan skade vannmiljøet
- **Vannforbruk:** Stor mengde vann brukes til vask og skylling
- **Energiforbruk:** Føner, rettetang, krølltang og belysning krever mye energi
- **Emballasje:** Store mengder plastemballasje fra produkter
- **Engangsprodukter:** Alufolie, engangshansker og håndklær

### Blomsterbransjen

- **Transport:** Mange blomster importeres fra andre verdensdeler med fly
- **Pesticider:** Bruk av plantevernstoffer i blomsterproduksjon
- **Avfall:** Store mengder organisk avfall fra avskjær og usolgte blomster
- **Oasis:** Tradisjonelt blomsterskum er laget av plast og brytes ikke ned naturlig
- **Emballasje:** Plastfolie og annen innpakning

### Interiør og eksponeringsdesign

- **Materialvalg:** Bruk av ikke-fornybare materialer og giftige stoffer
- **Transport:** Lange transportveier for møbler og materialer
- **Forbruk:** Hyppig utskifting av innredning og utstillinger
- **Avfall:** Store mengder avfall fra dekorasjoner og utstillingsmaterialer`,
    },
    {
      id: 'fb-8-4-def-2',
      type: 'definition',
      title: 'Miljøsertifisering',
      content: `En **miljøsertifisering** er en offisiell bekreftelse på at en bedrift, et produkt eller en tjeneste oppfyller bestemte miljøkrav. Eksempler er **Svanemerket** (nordisk miljømerke), **EU Ecolabel** (europeisk miljømerke) og **Grønt Punkt** (emballasjegjenvinnng). For frisørsalonger finnes egne sertifiseringsordninger som dokumenterer miljøvennlig drift.`,
    },
    {
      id: 'fb-8-4-text-2',
      type: 'text',
      title: 'Grønne praksiser',
      content: `### Tiltak i frisørsalongen

- **Miljøvennlige produkter:** Velge produkter med miljømerking og naturlige ingredienser
- **Redusere vannforbruk:** Bruke vannsparende dusjhoder og effektive vaskemetoder
- **Energisparing:** LED-belysning, energieffektive apparater, slå av utstyr
- **Kildesortering:** Sortere avfall og resirkulere emballasje
- **Gjenbruk av alufolie:** Bruke vaskbare klips og folier der mulig
- **Dosering:** Bruke riktig mengde produkter for å unngå sløsing

### Tiltak i blomsterbutikken

- **Sesongblomster:** Velge blomster som er i sesong lokalt
- **Norskproduserte blomster:** Støtte lokale produsenter for å redusere transport
- **Biologisk nedbrytbar oasis:** Bruke miljøvennlige alternativer til tradisjonell oasis
- **Kompostering:** Kompostere organisk avfall
- **Redusere plast:** Bruke papirinnpakning og gjenbrukbare vaser

### Tiltak i interiør og eksponeringsdesign

- **Bærekraftige materialer:** Velge resirkulert, gjenbrukt eller sertifisert materiale
- **Kvalitet over kvantitet:** Investere i holdbare produkter fremfor billige engangsvarer
- **Gjenbruk:** Redesigne og gjenbruke materialer fra tidligere utstillinger
- **Lokale leverandører:** Redusere transportavstander`,
    },
    {
      id: 'fb-8-4-example-1',
      type: 'example',
      title: 'Eksempel: Grønn omstilling i en frisørsalong',
      problem: 'En frisørsalong ønsker å bli mer miljøvennlig. Lag en plan med konkrete tiltak salongen kan gjennomføre.',
      solution: `**Plan for grønn omstilling:**

**Kortsiktige tiltak (0–3 måneder):**
- Innføre kildesortering med tydelig merkede avfallsbeholdere
- Bytte til LED-belysning i hele salongen
- Installere vannsparende dusjhoder ved vaskestasjonene
- Lage rutiner for å slå av utstyr som ikke er i bruk

**Mellomlangsiktige tiltak (3–12 måneder):**
- Gå over til miljømerkede produkter (Svanemerket eller tilsvarende)
- Erstatte engangshåndklær med vaskbare alternativer
- Innføre digitale kundekort for å redusere papirforbruk
- Utforske muligheten for å resirkulere hår (kan brukes til oljesanering)

**Langsiktige tiltak (1–3 år):**
- Søke om miljøsertifisering for salongen
- Installere energieffektiv oppvarming og ventilasjon
- Samarbeide med leverandører om å redusere emballasje
- Tilby kundene informasjon om miljøvennlig hårpleie hjemme`,
    },
    {
      id: 'fb-8-4-text-3',
      type: 'text',
      title: 'Miljømerker og sertifiseringer',
      content: `### Kjenne igjen miljømerker

Viktige miljømerker å kjenne til:

- **Svanemerket:** Det offisielle nordiske miljømerket. Stiller strenge krav til miljø, helse og kvalitet.
- **EU Ecolabel (EU-blomsten):** Det europeiske miljømerket med krav til hele produktets livssyklus.
- **ECOCERT / COSMOS:** Sertifisering for naturlig og økologisk kosmetikk.
- **Fairtrade:** Sikrer rettferdige arbeidsvilkår og priser for produsenter i utviklingsland.
- **FSC (Forest Stewardship Council):** Sertifisering for bærekraftig skogbruk, relevant for papir og trebaserte materialer.
- **Grønt Punkt:** Viser at produsenten bidrar til gjenvinning av emballasje.

### Sertifisering av virksomheter

Bedrifter kan sertifiseres gjennom ordninger som:
- **Miljøfyrtårn:** Norsk sertifiseringsordning for bedrifter som vil dokumentere miljøinnsatsen sin
- **Grønn Salong:** Spesiell sertifisering for frisørsalonger med fokus på miljøvennlig drift`,
    },
    {
      id: 'fb-8-4-note-1',
      type: 'note',
      title: 'Visste du?',
      content: `I Norge kastes det anslagsvis 10 000 tonn blomster og planter hvert år. Mye av dette er importerte blomster som har blitt fraktet med fly fra land som Kenya, Colombia og Ecuador. Ved å velge sesongblomster og norskproduserte alternativer kan både privatpersoner og blomsterbutikker bidra til å redusere klimaavtrykket.`,
    },
    {
      id: 'fb-8-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Bærekraft** handler om å tilfredsstille dagens behov uten å ødelegge for fremtidige generasjoner
- **Miljøutfordringer** i bransjen inkluderer kjemikalieutslipp, vannforbruk, transport, avfall og emballasje
- **Grønne praksiser** som miljøvennlige produkter, kildesortering, energisparing og gjenbruk reduserer miljøbelastningen
- **Miljømerker** som Svanemerket, EU Ecolabel og ECOCERT hjelper forbrukere og bedrifter med å gjøre miljøvennlige valg
- **Sertifiseringsordninger** som Miljøfyrtårn og Grønn Salong dokumenterer bedrifters miljøinnsats`,
    },
  ],
  exercises: [
    {
      id: 'fb-8-4-ex-1',
      type: 'multiple-choice',
      task: 'Hvilket miljømerke er det offisielle nordiske miljømerket?',
      options: [
        { id: 'a', text: 'EU Ecolabel', isCorrect: false },
        { id: 'b', text: 'Fairtrade', isCorrect: false },
        { id: 'c', text: 'Svanemerket', isCorrect: true },
        { id: 'd', text: 'Grønt Punkt', isCorrect: false },
      ],
      correctAnswer: 2,
      solution: 'Svanemerket er det offisielle nordiske miljømerket, etablert i 1989 av Nordisk ministerråd. Det stiller strenge krav til miljø, helse og kvalitet gjennom hele produktets livssyklus.',
    },
    {
      id: 'fb-8-4-ex-2',
      type: 'multiple-choice',
      task: 'Hva er den største miljøutfordringen knyttet til blomsterbransjen?',
      options: [
        { id: 'a', text: 'Strømforbruk i butikken', isCorrect: false },
        { id: 'b', text: 'Transport av importerte blomster og bruk av pesticider', isCorrect: true },
        { id: 'c', text: 'Bruk av vann til vanning av blomster', isCorrect: false },
        { id: 'd', text: 'Støy fra maskiner', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'Transport av blomster fra land som Kenya, Colombia og Ecuador med fly har et stort klimaavtrykk. I tillegg brukes det mye pesticider i blomsterproduksjon, noe som påvirker både miljø og arbeidernes helse.',
    },
    {
      id: 'fb-8-4-ex-3',
      type: 'classic',
      task: 'Velg enten frisørsalongen, blomsterbutikken eller interiørvirksomheten. Beskriv tre konkrete miljøutfordringer og foreslå tre tiltak for å løse eller redusere hver av dem.',
      hints: ['Tenk på hele verdikjeden: innkjøp, bruk, avfall og transport'],
      solution: 'Eksempel for blomsterbutikk: Utfordring 1: Importblomster med stort klimaavtrykk – Tiltak: Prioritere sesongblomster og norske produsenter. Utfordring 2: Plastavfall fra emballasje og oasis – Tiltak: Bruke biologisk nedbrytbar oasis, papirinnpakning og gjenbrukbare vaser. Utfordring 3: Organisk avfall fra usolgte blomster – Tiltak: Kompostere avskjær, donere blomster som nærmer seg slutten, og lage tørkede arrangementer av overskuddsvarer.',
    },
    {
      id: 'fb-8-4-ex-4',
      type: 'classic',
      task: 'Hva innebærer det for en frisørsalong å bli Miljøfyrtårn-sertifisert? Hvilke fordeler kan sertifiseringen gi for salongen og kundene?',
      hints: ['Tenk på krav, tiltak, omdømme og kundetillit'],
      solution: 'Miljøfyrtårn-sertifisering krever at salongen oppfyller bransjespesifikke krav innen energibruk, avfallshåndtering, innkjøp og arbeidsmiljø. Fordeler for salongen: Lavere kostnader gjennom energi- og ressurssparing, positivt omdømme, konkurransefortrinn og bevisst holdning hos ansatte. Fordeler for kundene: Trygghet for at salongen tar miljøansvar, eksponering for færre skadelige kjemikalier, og mulighet til å støtte en miljøbevisst bedrift.',
    },
    {
      id: 'fb-8-4-ex-5',
      type: 'classic',
      task: 'Undersøk hvilke miljømerker du finner på produkter i ditt nærområde (for eksempel i en matbutikk eller drogeriet). Lag en oversikt over minst fem produkter med miljømerking og forklar hva hvert merke betyr.',
      hints: ['Se etter Svanemerket, EU Ecolabel, Fairtrade, FSC og ECOCERT'],
      solution: 'Besvarelsen bør inneholde minst fem produkter med ulike miljømerker og en kort forklaring av hva merket betyr. Eksempel: Håndsåpe med Svanemerket (strenge krav til miljø og helse), kaffe med Fairtrade (rettferdige vilkår for produsenter), toalettpapir med FSC (bærekraftig skogbruk), sjampo med ECOCERT (naturlig og økologisk kosmetikk), oppvaskmiddel med EU Ecolabel (europeisk miljøstandard).',
    },
  ],
  keyTerms: [
    { term: 'Bærekraftig utvikling', definition: 'Utvikling som tilfredsstiller dagens behov uten å ødelegge for fremtidige generasjoner' },
    { term: 'Miljøsertifisering', definition: 'Offisiell bekreftelse på at en bedrift eller et produkt oppfyller bestemte miljøkrav' },
    { term: 'Svanemerket', definition: 'Det offisielle nordiske miljømerket med strenge krav til miljø, helse og kvalitet' },
    { term: 'Miljøfyrtårn', definition: 'Norsk sertifiseringsordning for bedrifter som dokumenterer sin miljøinnsats' },
    { term: 'Kildesortering', definition: 'Sortering av avfall i ulike fraksjoner for gjenvinning og forsvarlig behandling' },
    { term: 'Klimaavtrykk', definition: 'Den totale mengden klimagasser en aktivitet, et produkt eller en virksomhet forårsaker' },
  ],
};

// ============================================================================
// Kapittel 8.5: Kvalitet og ressursutnyttelse
// ============================================================================

export const CHAPTER_FB_VG1_8_5: TextbookChapter = {
  id: 'frisor-blomster-vg1-8-5',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '8.5',
  title: 'Kvalitet og ressursutnyttelse',
  description: 'Kvalitetssikring, ressursutnyttelse og avfallsreduksjon i frisør-, blomster- og interiørbransjen. Elevene lærer om kvalitetssystemer, effektiv bruk av materialer og økonomisk bærekraft.',
  estimatedMinutes: 40,
  competenceGoals: ['gjøre rede for kvalitetssikring og ressursutnyttelse i bransjen', 'foreslå tiltak for å redusere svinn og forbedre ressursutnyttelsen'],
  content: [
    {
      id: 'fb-8-5-intro',
      type: 'text',
      content: `## Kvalitet og smart ressursbruk

God kvalitet og effektiv ressursutnyttelse er avgjørende for å drive en lønnsom og bærekraftig virksomhet. Kvalitetssikring handler om å sikre at produkter og tjenester møter kundens forventninger, mens ressursutnyttelse handler om å bruke materialer, tid og energi så effektivt som mulig.

I dette kapittelet skal du lære:
- Hva kvalitetssikring innebærer i praksis
- Hvordan du kan bruke ressurser mer effektivt
- Metoder for å redusere svinn og avfall
- Sammenhengen mellom kvalitet, økonomi og bærekraft`,
    },
    {
      id: 'fb-8-5-def-1',
      type: 'definition',
      title: 'Kvalitetssikring',
      content: `**Kvalitetssikring** er systematisk arbeid for å sikre at produkter og tjenester oppfyller fastsatte krav og standarder. Det innebærer rutiner for kontroll, evaluering og forbedring i alle ledd av produksjonen. Kvalitetssikring handler ikke bare om sluttproduktet, men om hele prosessen fra planlegging til levering.`,
    },
    {
      id: 'fb-8-5-text-1',
      type: 'text',
      title: 'Kvalitetssikring i praksis',
      content: `### Kvalitetssystemer

Et kvalitetssystem består av rutiner og prosedyrer som sikrer jevn kvalitet:

**I frisørsalongen:**
- Konsultasjon med kunden før behandling (kartlegging av ønsker og forventninger)
- Standardiserte prosedyrer for farging, klipping og styling
- Kvalitetskontroll underveis i behandlingen
- Ettersjekk og kundetilfredshet etter behandling
- Produktkontroll ved varemottak

**I blomsterbutikken:**
- Kvalitetskontroll av blomster ved varemottak (friskhet, farge, stilklengde)
- Riktig temperatur og vanning for lagring
- Standard for bukettbinding og arrangement
- Kontroll av ferdige produkter før salg
- Rutiner for håndtering av reklamasjoner

**I interiør og eksponeringsdesign:**
- Grundig behovsanalyse med kunden
- Kvalitetskontroll av materialer og produkter
- Sjekklister for montering og installasjon
- Sluttkontroll av ferdig resultat
- Oppfølging og evaluering med kunden`,
    },
    {
      id: 'fb-8-5-def-2',
      type: 'definition',
      title: 'Svinn',
      content: `**Svinn** er tap av materialer, varer eller ressurser som ikke kommer til nytte. Det kan være produkter som kastes, materialer som sløses bort, eller tid som går tapt på grunn av dårlig planlegging. Svinn representerer både et økonomisk tap og en miljøbelastning. Å redusere svinn er en viktig del av bærekraftig og lønnsom drift.`,
    },
    {
      id: 'fb-8-5-text-2',
      type: 'text',
      title: 'Ressursutnyttelse og svinnreduksjon',
      content: `### Effektiv bruk av materialer

**Frisørsalongen:**
- Dosere produkter nøyaktig (riktig mengde farge, sjampo og balsam)
- Blande kun den mengden farge som trengs for behandlingen
- Bruke rester av farge til fargeprøver eller opplæring
- Vedlikeholde utstyr for å forlenge levetiden
- Gjenbruke alufolie der hygienisk forsvarlig

**Blomsterbutikken:**
- Bestille riktig mengde basert på salgsdata og sesong
- Rotere varelager etter «først inn, først ut»-prinsippet
- Bruke avskjær til småbukketter eller dekorasjoner
- Tørke blomster som begynner å visne for salg som tørket produkt
- Kompostere organisk avfall

**Interiør og eksponeringsdesign:**
- Planlegge materialforbruk nøyaktig med minimalt kapp
- Gjenbruke materialer fra tidligere prosjekter
- Velge modulbaserte løsninger som kan tilpasses ulike utstillinger
- Bruke digitale verktøy for planlegging og visualisering
- Samarbeide med andre virksomheter om deling av materialer`,
    },
    {
      id: 'fb-8-5-text-3',
      type: 'text',
      title: 'Økonomi og bærekraft',
      content: `### Sammenhengen mellom kvalitet, økonomi og bærekraft

Kvalitet og ressursutnyttelse henger tett sammen med lønnsomhet:

**Kostnadsbesparelse:**
- Mindre svinn betyr lavere materialkostnader
- Energisparing reduserer driftskostnader
- Færre reklamasjoner gir færre ekstra behandlinger og materialbruk
- God planlegging reduserer overtidsarbeid

**Kundetilfredshet:**
- Jevn høy kvalitet gir fornøyde kunder som kommer tilbake
- Fornøyde kunder anbefaler virksomheten videre
- Kvalitetsprodukter gir bedre resultat og lengre holdbarhet
- Miljøbevissthet tiltrekker miljøbevisste kunder

**Bærekraft:**
- Redusert svinn gir mindre avfall og miljøbelastning
- Effektiv ressursbruk sparer naturressurser
- Kvalitetsprodukter varer lenger og trenger ikke erstattes like ofte
- Sirkulær tenkning reduserer behovet for nye råvarer`,
    },
    {
      id: 'fb-8-5-example-1',
      type: 'example',
      title: 'Eksempel: Reduksjon av fargesvinn i frisørsalongen',
      problem: 'En frisørsalong bruker i gjennomsnitt 20 % mer hårfarge enn nødvendig per behandling. Hvordan kan de redusere svinnet?',
      solution: `**Tiltak for å redusere fargesvinn:**

1. **Måling og analyse:** Registrer forbruket per behandling i en periode for å identifisere omfanget
2. **Standardiserte oppskrifter:** Lag tabeller med anbefalte mengder farge basert på hårlengde og tykkelse
3. **Presis blanding:** Bruk vekt eller måleutstyr i stedet for øyemål
4. **Opplæring:** Lær opp alle ansatte i nøyaktig dosering
5. **Mindre blandinger:** Start med en mindre mengde og bland mer ved behov
6. **Utnyttelse av rester:** Bruk eventuelle rester til fargeprøver eller til å farge øvingshoder

**Resultat:** Ved å redusere svinnet fra 20 % til 5 % kan salongen spare betydelige beløp på materialkostnader årlig, samtidig som miljøbelastningen reduseres.`,
    },
    {
      id: 'fb-8-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kvalitetssikring** er systematisk arbeid for å sikre at produkter og tjenester møter fastsatte krav
- **Kvalitetssystemer** med rutiner og prosedyrer sikrer jevn kvalitet i alle ledd
- **Svinnreduksjon** gir både økonomiske besparelser og lavere miljøbelastning
- **Effektiv ressursbruk** krever god planlegging, nøyaktig dosering og kreativ utnyttelse av rester
- **Kvalitet, økonomi og bærekraft** henger tett sammen og forsterker hverandre`,
    },
  ],
  exercises: [
    {
      id: 'fb-8-5-ex-1',
      type: 'multiple-choice',
      task: 'Hva menes med svinn i en bedriftssammenheng?',
      options: [
        { id: 'a', text: 'Antall kunder som ikke kommer tilbake', isCorrect: false },
        { id: 'b', text: 'Tap av materialer, varer eller ressurser som ikke kommer til nytte', isCorrect: true },
        { id: 'c', text: 'Antall sykedager blant ansatte', isCorrect: false },
        { id: 'd', text: 'Nedgang i omsetning over tid', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'Svinn er tap av materialer, varer eller ressurser som ikke kommer til nytte. Det kan dreie seg om produkter som kastes, materialer som sløses, eller tid som går tapt på grunn av dårlig planlegging. Svinn er både et økonomisk tap og en miljøbelastning.',
    },
    {
      id: 'fb-8-5-ex-2',
      type: 'multiple-choice',
      task: 'Hvilket prinsipp brukes for lagerrotasjon av blomster?',
      options: [
        { id: 'a', text: 'De dyreste blomstene selges først', isCorrect: false },
        { id: 'b', text: 'De peneste blomstene selges først', isCorrect: false },
        { id: 'c', text: 'Først inn, først ut', isCorrect: true },
        { id: 'd', text: 'Sist inn, først ut', isCorrect: false },
      ],
      correctAnswer: 2,
      solution: 'Prinsippet «først inn, først ut» (FIFO) betyr at varene som ble mottatt først, selges først. For blomster er dette spesielt viktig fordi de er ferskvare med begrenset holdbarhet. God lagerrotasjon reduserer svinn og sikrer at kundene alltid får ferske blomster.',
    },
    {
      id: 'fb-8-5-ex-3',
      type: 'classic',
      task: 'Beskriv et kvalitetssystem for en valgfri virksomhet (frisørsalong, blomsterbutikk eller interiørfirma). Forklar hvilke rutiner og kontrollpunkter du vil innføre for å sikre jevn kvalitet.',
      hints: ['Tenk på hele prosessen fra kundehenvendelse til ferdig produkt, og inkluder rutiner for både kontroll og forbedring'],
      solution: 'En god besvarelse beskriver kvalitetsrutiner gjennom hele prosessen. Eksempel for frisørsalong: 1) Konsultasjon: Standardisert skjema for kartlegging av kundens ønsker og hårtype. 2) Forberedelse: Sjekkliste for produktvalg og utstyr. 3) Gjennomføring: Prosedyrer for ulike behandlinger med kvalitetskontroll underveis. 4) Ferdigstillelse: Kontroll av resultatet sammen med kunden. 5) Oppfølging: Kundetilfredshetsmåling etter besøket. 6) Forbedring: Regelmessig gjennomgang av rutiner basert på tilbakemeldinger og reklamasjoner.',
    },
    {
      id: 'fb-8-5-ex-4',
      type: 'classic',
      task: 'En blomsterbutikk kaster rundt 15 % av blomstene sine hver uke. Analyser mulige årsaker til dette svinnet og foreslå tiltak for å redusere det til under 5 %.',
      hints: ['Tenk på bestilling, lagring, presentasjon, prising og alternativ bruk av blomster som nærmer seg slutten'],
      solution: 'Mulige årsaker: Overbestilling, feil lagring (temperatur, vann), dårlig lagerrotasjon, manglende evne til å tilpasse bestilling etter sesong og etterspørsel. Tiltak: 1) Bruke salgsdata for å planlegge bestillinger mer nøyaktig. 2) Følge FIFO-prinsippet strengt. 3) Optimalisere lagringsforhold (riktig temperatur, friskt vann, kutting av stilker). 4) Tilby nedsatte priser på blomster som nærmer seg slutten. 5) Lage tørkede arrangementer av overskuddsvarer. 6) Donere til sykehjem eller veldedige formål. 7) Kompostere det som ikke kan brukes.',
    },
  ],
  keyTerms: [
    { term: 'Kvalitetssikring', definition: 'Systematisk arbeid for å sikre at produkter og tjenester oppfyller fastsatte krav' },
    { term: 'Svinn', definition: 'Tap av materialer, varer eller ressurser som ikke kommer til nytte' },
    { term: 'FIFO', definition: '«Først inn, først ut» – prinsipp for lagerrotasjon der eldste varer selges først' },
    { term: 'Kvalitetssystem', definition: 'Samling av rutiner og prosedyrer for å sikre jevn kvalitet i alle ledd' },
    { term: 'Ressursutnyttelse', definition: 'Effektiv bruk av materialer, tid og energi for å minimere sløsing' },
  ],
};

// ============================================================================
// Kapittel 8.6: Kulturforståelse og mangfold
// ============================================================================

export const CHAPTER_FB_VG1_8_6: TextbookChapter = {
  id: 'frisor-blomster-vg1-8-6',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '8.6',
  title: 'Kulturforståelse og mangfold',
  description: 'Betydningen av kulturforståelse, mangfold og inkludering i frisør-, blomster- og interiørbransjen. Elevene lærer om kulturelle forskjeller, tilpasning av tjenester og respektfull kommunikasjon.',
  estimatedMinutes: 35,
  competenceGoals: ['reflektere over kulturelt mangfold og inkludering i yrkesutøvelsen', 'tilpasse tjenester og kommunikasjon til kunder med ulik kulturell bakgrunn'],
  content: [
    {
      id: 'fb-8-6-intro',
      type: 'text',
      content: `## Mangfold i kunde- og kollegagruppene

Norge er et flerkulturelt samfunn, og det gjenspeiles i både kundegrunnlaget og arbeidsmiljøet i frisør-, blomster- og interiørbransjen. Å forstå og respektere kulturelle forskjeller er en viktig del av profesjonell yrkesutøvelse. Det gir bedre kundeopplevelser og et inkluderende arbeidsmiljø.

I dette kapittelet skal du lære:
- Hva kulturforståelse betyr i yrkessammenheng
- Hvordan kulturelle forskjeller kan påvirke kundemøtet
- Å tilpasse tjenester til kunder med ulik bakgrunn
- Betydningen av inkludering på arbeidsplassen`,
    },
    {
      id: 'fb-8-6-def-1',
      type: 'definition',
      title: 'Kulturforståelse',
      content: `**Kulturforståelse** er evnen til å forstå, respektere og forholde seg til mennesker med annen kulturell bakgrunn enn din egen. Det innebærer bevissthet om at verdier, normer, tradisjoner og kommunikasjonsmåter varierer mellom kulturer, og at det ikke finnes én «riktig» måte å gjøre ting på. Kulturforståelse er en kompetanse som kan utvikles gjennom kunnskap, erfaring og åpenhet.`,
    },
    {
      id: 'fb-8-6-text-1',
      type: 'text',
      title: 'Kulturelle forskjeller i bransjen',
      content: `### Hår og utseende

Hår har ulik betydning i ulike kulturer:

- **Hårtype og struktur:** Ulike etniske grupper har ulike hårtyper som krever tilpassede produkter og teknikker
- **Religiøse hensyn:** Noen kunder dekker håret av religiøse årsaker (hijab, turban) og har spesifikke ønsker for behandling
- **Kulturelle tradisjoner:** Bestemte frisyrer kan ha kulturell betydning (f.eks. rastafari-dreadlocks, tradisjonelle flettemønstre)
- **Kjønnsnormer:** Forventninger til hår og utseende varierer mellom kulturer

### Blomster og symbolikk

Blomster har ulik symbolikk i ulike kulturer:

- **Farger:** Hvite blomster symboliserer død og sorg i noen asiatiske kulturer, mens de symboliserer renhet og uskyld i vestlig tradisjon
- **Antall:** I noen kulturer har partall blomster en annen betydning enn oddetall
- **Blomstertyper:** Visse blomster kan ha religiøs eller kulturell symbolikk
- **Anledninger:** Tradisjoner for blomsterbruk varierer ved bryllup, begravelse og feiringer

### Interiør og estetikk

Estetiske preferanser er kulturelt betinget:

- **Fargepreferanser:** Ulike kulturer har ulike assosiasjoner til farger
- **Romorganisering:** Forestillinger om rombruk og innredning varierer
- **Symboler og dekor:** Religiøse og kulturelle symboler kan ha ulik betydning
- **Minimalisme vs. overflod:** Estetiske idealer varierer mellom kulturer`,
    },
    {
      id: 'fb-8-6-def-2',
      type: 'definition',
      title: 'Inkludering',
      content: `**Inkludering** betyr å skape et miljø der alle føler seg velkommen, respektert og verdsatt, uavhengig av bakgrunn, kultur, religion, kjønn, alder eller funksjonsevne. I arbeidslivet innebærer inkludering at alle ansatte og kunder behandles likeverdig, og at mangfold ses som en styrke. En inkluderende arbeidsplass tilpasser seg ulike behov og verdsetter forskjellighet.`,
    },
    {
      id: 'fb-8-6-text-2',
      type: 'text',
      title: 'Tilpasning og kommunikasjon',
      content: `### Tilpasning av tjenester

En profesjonell yrkesutøver tilpasser seg kundens behov:

- **Spør og lytt:** Ikke anta – spør kunden hva de ønsker og hva som er viktig for dem
- **Lær om ulike hårtyper:** Sørg for kompetanse på ulike hårstrukturer og -teksturer
- **Produktkunnskap:** Ha produkter som passer ulike hårtyper og hudtyper
- **Respekter grenser:** Noen kunder ønsker ikke å bli berørt av det motsatte kjønn
- **Fleksibilitet:** Tilpass åpningstider eller behandlingsrom ved behov

### Kommunikasjon på tvers av kulturer

- **Vær tydelig og konkret:** Bruk enkelt språk uten slang og faguttrykk
- **Bruk visuelle hjelpemidler:** Bilder og illustrasjoner kan kommunisere på tvers av språkbarrierer
- **Vær tålmodig:** Gi tid til å forstå og bli forstått
- **Unngå stereotypier:** Behandle hver kunde som et individ, ikke som representant for en gruppe
- **Vis interesse:** Spør med respekt og nysgjerrighet om kundens ønsker og preferanser`,
    },
    {
      id: 'fb-8-6-example-1',
      type: 'example',
      title: 'Eksempel: Kulturell tilpasning i blomsterbutikken',
      problem: 'En kunde bestiller blomster til en begravelse. Kunden nevner at den avdøde var fra en asiatisk kultur. Hva bør blomsterdekoratøren tenke på?',
      solution: `**Viktige hensyn:**

1. **Fargevalg:** I mange asiatiske kulturer forbindes hvitt med sorg og død, mens lyse farger kan være mer passende i noen vestlige tradisjoner. Spør kunden om preferanser.
2. **Blomstertyper:** Noen blomster har spesiell betydning – for eksempel er krysantemum vanlig i asiatiske sorgblomster, mens liljer ofte brukes i vestlig tradisjon.
3. **Arrangement:** Spør om det er spesifikke tradisjoner for form og oppsett.
4. **Symbolikk:** Unngå blomster eller farger som kan ha negativ symbolikk i kundens kultur.
5. **Kommunikasjon:** Spør kunden direkte: «Er det noen spesielle tradisjoner eller ønsker jeg bør ta hensyn til?»

**Hovedregel:** Spør alltid kunden om deres ønsker og preferanser i stedet for å anta.`,
    },
    {
      id: 'fb-8-6-text-3',
      type: 'text',
      title: 'Inkludering på arbeidsplassen',
      content: `### Et inkluderende arbeidsmiljø

Mangfold på arbeidsplassen er en styrke dersom det håndteres med respekt:

- **Rekruttering:** Verdsett ulik bakgrunn og erfaring ved ansettelser
- **Likeverdig behandling:** Alle ansatte skal ha like muligheter for utvikling og avansement
- **Språk og kommunikasjon:** Legg til rette for kollegaer som har et annet morsmål
- **Kulturelle hensyn:** Respekter ulike mattradisjoner, helligdager og kleskoder
- **Nulltoleranse for diskriminering:** Ha klare retningslinjer mot diskriminering og trakassering

### Fordeler med mangfold

- Bredere kompetanse og flere perspektiver
- Bedre forståelse av et variert kundegrunnlag
- Økt kreativitet og innovasjon
- Styrket omdømme som inkluderende arbeidsplass
- Tilgang til større rekrutteringsgrunnlag`,
    },
    {
      id: 'fb-8-6-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kulturforståelse** er evnen til å forstå og respektere mennesker med annen kulturell bakgrunn
- **Kulturelle forskjeller** påvirker forventninger til hår, blomster, interiør og kommunikasjon
- **Tilpasning** av tjenester og kommunikasjon til ulike kunder er en del av profesjonell yrkesutøvelse
- **Inkludering** betyr å skape et miljø der alle føler seg velkommen og verdsatt
- **Mangfold** på arbeidsplassen gir bredere kompetanse, bedre kundeforståelse og økt kreativitet`,
    },
  ],
  exercises: [
    {
      id: 'fb-8-6-ex-1',
      type: 'multiple-choice',
      task: 'Hva er den viktigste regelen når du er usikker på en kundes kulturelle preferanser?',
      options: [
        { id: 'a', text: 'Anta basert på kundens utseende', isCorrect: false },
        { id: 'b', text: 'Gjøre det samme som for alle andre kunder', isCorrect: false },
        { id: 'c', text: 'Spørre kunden direkte om deres ønsker og preferanser', isCorrect: true },
        { id: 'd', text: 'Søke opp informasjon om kundens kultur på internett', isCorrect: false },
      ],
      correctAnswer: 2,
      solution: 'Den viktigste regelen er å spørre kunden direkte. Aldri anta kulturelle preferanser basert på utseende eller bakgrunn. Hver kunde er et individ med egne ønsker, og direkte kommunikasjon viser respekt og profesjonalitet.',
    },
    {
      id: 'fb-8-6-ex-2',
      type: 'multiple-choice',
      task: 'Hvilken farge forbindes ofte med sorg i mange asiatiske kulturer?',
      options: [
        { id: 'a', text: 'Svart', isCorrect: false },
        { id: 'b', text: 'Rød', isCorrect: false },
        { id: 'c', text: 'Hvit', isCorrect: true },
        { id: 'd', text: 'Blå', isCorrect: false },
      ],
      correctAnswer: 2,
      solution: 'I mange asiatiske kulturer, inkludert kinesisk, japansk og koreansk kultur, forbindes hvit med sorg og død. Dette er viktig å vite for blomsterdekoratører som lager arrangementer for kunder med ulik kulturell bakgrunn.',
    },
    {
      id: 'fb-8-6-ex-3',
      type: 'classic',
      task: 'Gi eksempler på hvordan en frisørsalong kan tilpasse seg for å betjene kunder med ulike kulturelle bakgrunner. Tenk på både praktiske tiltak og holdninger.',
      hints: ['Tenk på produktutvalg, kompetanse, kommunikasjon, romløsninger og personalets holdninger'],
      solution: 'Praktiske tiltak: 1) Ha produkter for ulike hårtyper (afro, asiatisk, europeisk). 2) Sørge for kompetanse på ulike hårstrukturer gjennom kurs. 3) Tilby avskjermet behandlingsrom for kunder som ønsker privatliv. 4) Bruke bilder og visuell kommunikasjon for kunder med begrenset norskkunnskaper. 5) Ha informasjonsmateriell på flere språk. Holdninger: Åpenhet, nysgjerrighet, respekt, vilje til å lære og nulltoleranse for fordommer.',
    },
    {
      id: 'fb-8-6-ex-4',
      type: 'classic',
      task: 'Diskuter fordeler og eventuelle utfordringer med et flerkulturelt arbeidsmiljø i en blomsterbutikk eller frisørsalong. Hvordan kan ledelsen legge til rette for god inkludering?',
      hints: ['Tenk på kommunikasjon, kompetanse, kreativitet, arbeidskultur og ledelsens ansvar'],
      solution: 'Fordeler: Bredere kulturkompetanse som kommer kundene til gode, flere perspektiver på kreativt arbeid, bedre forståelse av et mangfoldig kundegrunnlag, og tilgang til et større rekrutteringsgrunnlag. Utfordringer: Språkbarrierer i kommunikasjon, ulike forventninger til arbeidskultur, mulige kulturelle misforståelser. Ledelsens ansvar: Etablere klare retningslinjer mot diskriminering, tilby norskopplæring ved behov, arrangere teambuilding, verdsette ulike perspektiver, og skape en kultur der spørsmål og åpenhet er velkomne.',
    },
  ],
  keyTerms: [
    { term: 'Kulturforståelse', definition: 'Evnen til å forstå og respektere mennesker med annen kulturell bakgrunn' },
    { term: 'Inkludering', definition: 'Å skape et miljø der alle føler seg velkommen og verdsatt uavhengig av bakgrunn' },
    { term: 'Mangfold', definition: 'Variasjon i menneskers bakgrunn, erfaringer, kultur og perspektiver' },
    { term: 'Flerkulturell kompetanse', definition: 'Kunnskap og ferdigheter for å kommunisere og samarbeide med mennesker fra ulike kulturer' },
  ],
};

// ============================================================================
// Kapittel 8.7: Innovasjon og fremtidens yrkesliv
// ============================================================================

export const CHAPTER_FB_VG1_8_7: TextbookChapter = {
  id: 'frisor-blomster-vg1-8-7',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '8.7',
  title: 'Innovasjon og fremtidens yrkesliv',
  description: 'Hvordan teknologiutvikling, innovasjon og nye trender former fremtidens yrkesliv innen frisør, blomster, interiør og eksponeringsdesign. Elevene lærer om digitalisering, nye forretningsmodeller og fremtidskompetanser.',
  estimatedMinutes: 40,
  competenceGoals: ['reflektere over hvordan innovasjon og teknologi påvirker frisør-, blomster- og interiørbransjen', 'drøfte hvilke kompetanser som blir viktige i fremtidens yrkesliv'],
  content: [
    {
      id: 'fb-8-7-intro',
      type: 'text',
      content: `## Fremtidens bransje

Teknologiutvikling og endrede forbrukertrender påvirker alle bransjer, også frisør, blomster, interiør og eksponeringsdesign. Digitalisering, bærekraft og nye kundeforventninger skaper både utfordringer og muligheter. De som klarer å tilpasse seg endringene og tenke nytt, vil ha de beste forutsetningene for å lykkes i fremtidens arbeidsliv.

I dette kapittelet skal du lære:
- Hvordan teknologi påvirker bransjen
- Eksempler på innovasjon innen frisør, blomster og interiør
- Nye forretningsmodeller og trender
- Hvilke kompetanser som blir viktige fremover`,
    },
    {
      id: 'fb-8-7-def-1',
      type: 'definition',
      title: 'Innovasjon',
      content: `**Innovasjon** betyr å skape noe nytt eller forbedre noe eksisterende på en måte som gir verdi. Det kan være nye produkter, tjenester, prosesser eller måter å organisere arbeidet på. Innovasjon trenger ikke å være banebrytende oppfinnelser – det kan være små forbedringer i hverdagen som gjør arbeidet mer effektivt, bærekraftig eller kundevennlig.`,
    },
    {
      id: 'fb-8-7-text-1',
      type: 'text',
      title: 'Teknologi i bransjen',
      content: `### Digitale verktøy og teknologi

Teknologien har allerede endret bransjen på mange måter:

**Frisørbransjen:**
- **Digital frisørkonsultasjon:** Apper som lar kunder prøve frisyrer og farger virtuelt før behandling
- **Bookingsystemer:** Nettbaserte timebestillingssystemer med påminnelser
- **Sosiale medier:** Instagram og TikTok som markedsføringsverktøy og inspirasjonskilde
- **Kasseløsninger:** Digitale betalingssystemer og kundekort
- **Trendanalyse:** Bruk av data for å forutse trender og kundepreferanser

**Blomsterbransjen:**
- **Netthandel:** Bestilling og levering av blomster via nett
- **Abonnementstjenester:** Faste leveranser av blomster til bedrifter og privatpersoner
- **Automasjon:** Automatiserte vanningssystemer og klimastyring i drivhus
- **Logistikk:** Optimalisert kjølekjede og leveringsruter
- **Design-apper:** Digitale verktøy for å planlegge arrangementer

**Interiør og eksponeringsdesign:**
- **3D-visualisering:** Kundene kan se resultatet i 3D før gjennomføring
- **AR (utvidet virkelighet):** Prøve møbler og farger virtuelt i eget rom
- **BIM (bygningsinformasjonsmodellering):** Avansert prosjekteringsverktøy
- **Smart hjem-teknologi:** Integrering av lys, lyd og temperatur i interiørdesign
- **Digital signage:** Digitale skjermer erstatter tradisjonelle utstillinger`,
    },
    {
      id: 'fb-8-7-text-2',
      type: 'text',
      title: 'Nye trender og forretningsmodeller',
      content: `### Trender som former fremtiden

**Bærekraft som konkurransefortrinn:**
- Kunder etterspør miljøvennlige produkter og tjenester
- Sirkulær økonomi: Gjenbruk, reparasjon og resirkulering
- Lokal produksjon og kortreiste varer
- Transparens om ingredienser og produksjonsforhold

**Personalisering:**
- Skreddersydde behandlinger basert på individuelle behov
- Personlig tilpassede produkter (f.eks. sjampo basert på håranalyse)
- Kundeopplevelser tilpasset den enkeltes preferanser

**Opplevelsesøkonomi:**
- Kunden søker opplevelser, ikke bare tjenester
- Salonger og butikker som sosiale møteplasser
- Workshops og kurs som tilleggstjenester
- Storytelling og merkevarebygging

**Helse og velvære:**
- Økt fokus på helhetlig velvære
- Naturlige og giftfrie produkter
- Stressreduserende behandlinger og miljøer
- Samarbeid mellom frisør, hudpleier og helsepersonell`,
    },
    {
      id: 'fb-8-7-def-2',
      type: 'definition',
      title: 'Digitalisering',
      content: `**Digitalisering** er prosessen med å ta i bruk digital teknologi for å endre hvordan oppgaver utføres, tjenester leveres og bedrifter drives. I frisør-, blomster- og interiørbransjen kan digitalisering innebære alt fra nettbestilling og digitale betalingsløsninger til bruk av AR-teknologi og kunstig intelligens for å forbedre kundeopplevelsen.`,
    },
    {
      id: 'fb-8-7-text-3',
      type: 'text',
      title: 'Fremtidskompetanser',
      content: `### Hva må du kunne i fremtiden?

Fremtidens yrkesliv krever en kombinasjon av faglige og overordnede kompetanser:

**Faglig kompetanse:**
- Solid grunnkompetanse i faget som alltid vil være relevant
- Evne til å lære nye teknikker og bruke nye produkter
- Digital kompetanse: Bruk av digitale verktøy og plattformer
- Forståelse for bærekraft og miljøhensyn

**Overordnede kompetanser (21st century skills):**
- **Kreativitet:** Evne til å tenke nytt og finne originale løsninger
- **Kritisk tenkning:** Vurdere informasjon og ta gode beslutninger
- **Kommunikasjon:** Tydelig og tilpasset kommunikasjon med ulike mennesker
- **Samarbeid:** Jobbe effektivt med andre, også på tvers av fagområder
- **Omstillingsevne:** Tilpasse seg endringer og lære nye ting raskt
- **Entreprenørskap:** Forstå forretningsdrift og se muligheter

### Livslang læring

I et arbeidsliv i stadig endring er evnen til å lære gjennom hele karrieren avgjørende:
- Delta på kurs og etterutdanning
- Hold deg oppdatert på bransjenyheter
- Lær av kollegaer og mentorer
- Vær nysgjerrig på nye teknologier og metoder
- Søk utfordringer som utvider kompetansen din`,
    },
    {
      id: 'fb-8-7-example-1',
      type: 'example',
      title: 'Eksempel: Innovasjon i en blomsterbutikk',
      problem: 'En blomsterbutikk ønsker å modernisere driften for å tiltrekke yngre kunder. Hvilke innovative tiltak kan de iverksette?',
      solution: `**Innovative tiltak:**

1. **Nettbutikk med abonnement:** Tilby ukentlige eller månedlige blomsterabonnementer med levering hjem
2. **Sosiale medier:** Aktiv tilstedeværelse på Instagram med vakre bilder og videoer av arrangementer
3. **Workshops:** Arrangere kurs i blomsterbinding, kransemaking og terrarium for privatpersoner
4. **Bærekraftsprofil:** Markedsføre seg med norske sesongblomster, biologisk nedbrytbar oasis og plastfri innpakning
5. **Personalisering:** La kunder designe egne buketter digitalt og bestille for levering
6. **Samarbeid:** Partnerskap med lokale kafeer, bakerier og bryllupsplanleggere
7. **Pop-up:** Midlertidige salgsstand på markeder, festivaler og i handlegater

**Resultater:** Disse tiltakene kan øke synligheten, tiltrekke nye kundegrupper og skape merverdi utover tradisjonelt blomsterslg.`,
    },
    {
      id: 'fb-8-7-tip-1',
      type: 'tip',
      title: 'Fremtidens fagarbeider',
      content: `Den viktigste egenskapen for fremtidens fagarbeider er ikke å kunne alt – det er å være villig til å lære nytt. Teknologi og trender endrer seg raskt, men grunnleggende fagkunnskap, kreativitet og evne til å bygge gode kunderelasjoner vil alltid være verdifullt.`,
    },
    {
      id: 'fb-8-7-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Teknologi** endrer bransjen gjennom digitale verktøy, AR, netthandel og smarte løsninger
- **Nye trender** som bærekraft, personalisering og opplevelsesøkonomi former fremtiden
- **Innovasjon** kan være alt fra nye produkter til nye måter å drive virksomhet på
- **Fremtidskompetanser** inkluderer digital kompetanse, kreativitet, omstillingsevne og samarbeid
- **Livslang læring** er nødvendig i et arbeidsliv i stadig endring`,
    },
  ],
  exercises: [
    {
      id: 'fb-8-7-ex-1',
      type: 'multiple-choice',
      task: 'Hva betyr innovasjon?',
      options: [
        { id: 'a', text: 'Å kopiere det konkurrentene gjør', isCorrect: false },
        { id: 'b', text: 'Å skape noe nytt eller forbedre noe eksisterende på en måte som gir verdi', isCorrect: true },
        { id: 'c', text: 'Å bruke kun tradisjonelle metoder', isCorrect: false },
        { id: 'd', text: 'Å investere i dyr teknologi', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'Innovasjon betyr å skape noe nytt eller forbedre noe eksisterende på en måte som gir verdi. Det trenger ikke å være store oppfinnelser – også små, smarte forbedringer i hverdagen regnes som innovasjon.',
    },
    {
      id: 'fb-8-7-ex-2',
      type: 'multiple-choice',
      task: 'Hva er AR (utvidet virkelighet) i interiørsammenheng?',
      options: [
        { id: 'a', text: 'En type maling som endrer farge', isCorrect: false },
        { id: 'b', text: 'Teknologi som lar deg se møbler og farger virtuelt i ditt eget rom', isCorrect: true },
        { id: 'c', text: 'Et dataprogram for å tegne plantegninger', isCorrect: false },
        { id: 'd', text: 'En metode for å måle rom digitalt', isCorrect: false },
      ],
      correctAnswer: 1,
      solution: 'AR (Augmented Reality / utvidet virkelighet) er teknologi som legger digitale elementer oppå den virkelige verden. I interiørsammenheng betyr det at du kan bruke telefonen eller nettbrettet til å se hvordan møbler, farger og dekor vil se ut i ditt eget rom, før du kjøper noe.',
    },
    {
      id: 'fb-8-7-ex-3',
      type: 'classic',
      task: 'Tenk deg at du skal starte en egen virksomhet innen frisør, blomster eller interiør om fem år. Beskriv hvordan du ville brukt teknologi og innovasjon for å skille deg ut fra konkurrentene.',
      hints: ['Tenk på kundeopplevelse, markedsføring, bærekraft, teknologi og personalisering'],
      solution: 'En god besvarelse viser kreativ tenkning og forståelse for teknologiens muligheter. Eksempel: En frisørsalong med: 1) App for virtuell frisørkonsultasjon der kunder kan prøve frisyrer. 2) Nettbasert booking med AI-baserte anbefalinger. 3) Bærekraftsprofil med miljømerkede produkter og synlig miljøarbeid. 4) Abonnementstjeneste for hårpleie levert hjem. 5) Aktiv innholdsproduksjon på sosiale medier. 6) Personlig håranalyse med tilpassede produktanbefalinger. 7) Lojalitetsprogram med digitale kundekort.',
    },
    {
      id: 'fb-8-7-ex-4',
      type: 'classic',
      task: 'Diskuter hvilke kompetanser du tror blir viktigst i fremtidens yrkesliv. Ranger de fem viktigste kompetansene og begrunn valgene dine.',
      hints: ['Tenk på både faglige ferdigheter og overordnede kompetanser som kreativitet, samarbeid og omstillingsevne'],
      solution: 'Besvarelsen bør inneholde en reflektert rangering med begrunnelser. Eksempel: 1) Omstillingsevne – arbeidslivet endrer seg raskt, og evnen til å lære nytt er avgjørende. 2) Digital kompetanse – alle bransjer digitaliseres, og grunnleggende digital forståelse er nødvendig. 3) Kreativitet – evnen til å se nye løsninger og skape unike kundeopplevelser skiller deg ut. 4) Kommunikasjon – god kommunikasjon med kunder og kollegaer er grunnlaget for alle serviceyrker. 5) Faglig kompetanse – solid fagkunnskap er fundamentet alt annet bygger på.',
    },
  ],
  keyTerms: [
    { term: 'Innovasjon', definition: 'Å skape noe nytt eller forbedre noe eksisterende på en måte som gir verdi' },
    { term: 'Digitalisering', definition: 'Prosessen med å ta i bruk digital teknologi for å endre arbeidsmåter og tjenesteleveranse' },
    { term: 'AR (utvidet virkelighet)', definition: 'Teknologi som legger digitale elementer oppå den virkelige verden' },
    { term: 'Sirkulær økonomi', definition: 'Økonomisk modell basert på gjenbruk, reparasjon og resirkulering for å minimere avfall' },
    { term: 'Livslang læring', definition: 'Kontinuerlig kunnskapstilegnelse og kompetanseutvikling gjennom hele yrkeskarrieren' },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const FRISOR_BLOMSTER_VG1_DEL8_CHAPTERS: TextbookChapter[] = [
  CHAPTER_FB_VG1_8_1,
  CHAPTER_FB_VG1_8_2,
  CHAPTER_FB_VG1_8_3,
  CHAPTER_FB_VG1_8_4,
  CHAPTER_FB_VG1_8_5,
  CHAPTER_FB_VG1_8_6,
  CHAPTER_FB_VG1_8_7,
];
