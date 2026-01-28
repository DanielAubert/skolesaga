/* eslint-disable */
// @ts-nocheck
/**
 * Bygg- og anleggsteknikk VG1 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for Bygg- og anleggsteknikk på VG1
 * 29 kapitler totalt (dette er del 1: kapittel 1-15)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Byggematerialer
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_1: TextbookChapter = {
  id: 'bygg-anlegg-vg1-1',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '1',
  title: 'Byggematerialer',
  description: 'Egenskaper og bruk av byggematerialer.',
  estimatedMinutes: 60,
  competenceGoals: [
    'kjenne til ulike byggematerialer',
    'forstå materialers egenskaper og bruksområder',
  ],
  sections: [
    {
      title: 'Introduksjon til byggematerialer',
      content: `## Introduksjon til byggematerialer

Byggematerialer er grunnlaget for all konstruksjon. Valg av riktig materiale avhenger av byggverkets funksjon, belastning, klima og økonomi. I Norge bruker vi hovedsakelig tre, betong, tegl og stål som bærekonstruksjoner.

**Hvorfor er materialvalg viktig?**
- Bygningens levetid og holdbarhet
- Energieffektivitet og isolasjonsevne
- Kostnad ved bygging og vedlikehold
- Miljøpåvirkning og bærekraft
- Brannsikkerhet og sikkerhet

**Historisk perspektiv**
Byggematerialene har utviklet seg gjennom tusenvis av år. Fra enkle materialer som stein, tre og leire, til moderne komposittmaterialer og høyteknologiske løsninger. I Norge har vi lange tradisjoner med trebygging, men betong og stål ble dominerende på 1900-tallet.`,
    },
    {
      title: 'Tre som byggemateriale',
      content: `## Tre som byggemateriale

Tre er Norges mest tradisjonelle byggemateriale. Vi har rike skogressurser og lang erfaring med trebygging.

**Fordeler med tre:**
- Fornybar ressurs
- God isolasjonsevne
- Lett å bearbeide
- Miljøvennlig (binder CO2)
- Lett materiale (redusert fundamentering)
- Godt arbeidsklima

**Ulemper med tre:**
- Brennbart
- Kan råtne ved fukt
- Krever vedlikehold
- Kan krympe og svelle

**Treslag i bygg:**

**Gran**
Mest brukt i Norge. Lett, rett vokst, lett å bearbeide. Brukes til bærekonstruksjoner, panel, vinduer.

**Furu**
Hardere enn gran, mer kvistet. Brukes til gulv, panel, utvendig kledning.

**Lerk**
Meget holdbart, tåler fukt godt. Brukes utendørs uten behandling. Dyrt.

**Trevirke-produkter:**
- Massivtre: Heltre planker og bjelker
- Limtre: Sammenlimt til store dimensjoner
- Krysslimte trevirke (CLT): Krysslimte plater, meget sterkt
- Sponplater, finerplater: Plateprodukter`,
    },
    {
      title: 'Betong som byggemateriale',
      content: `## Betong som byggemateriale

Betong er en blanding av sement, vann, sand og grus (tilslag). Det er verdens mest brukte byggemateriale etter vann.

**Betongsammensetning:**
- Sement (bindemiddel): 10-15%
- Vann: 5-10%
- Tilslag (sand og grus): 65-75%
- Eventuelt tilsetningsstoffer

**Fordeler med betong:**
- Meget sterkt i trykk
- Formbart (kan støpes i alle former)
- Brannsikkert
- Vanntett
- Holdbart
- Rimelig

**Ulemper med betong:**
- Svakt i strekkbelastning (må armeres)
- Tungt (krever sterke fundamenter)
- Energikrevende produksjon
- CO2-utslipp fra sementproduksjon

**Betongens herdning:**
Betong herdes gjennom en kjemisk reaksjon mellom sement og vann. Dette kalles hydratisering. Prosessen tar tid:
- Etter 7 dager: ca. 70% styrke
- Etter 28 dager: full nominell styrke
- Fortsetter å herde i flere år

**Fasthetsklasser:**
Betong klassifiseres etter trykkfasthet etter 28 dager:
- B20: 20 MPa (ikke bærende)
- B25: 25 MPa (vanlig i boliger)
- B35: 35 MPa (høyere belastning)`,
    },
    {
      title: 'Tegl og murstein',
      content: `## Tegl og murstein

Tegl er et av verdens eldste byggematerialer. Laget av brent leire.

**Typer murstein:**

**Teglstein**
Massiv brent leire. Klassisk rødbrun farge. Brukes til fasader, piper, dekorative formål.

**Lettklinkerblokker**
Hule blokker av lettbetong. Lette, gode isolasjonsegenskaper. Brukes til yttervegger.

**Betonghullstein**
Hule blokker av betong. Sterke, brukes til bærende vegger, kjellervegger.

**Gasbetongblokker (Leca, Ytong)**
Meget lette blokker med god isolasjonsevne. Lett å bearbeide. Populært i moderne bygg.

**Fordeler med mur:**
- Brannsikkert
- Holdbart
- Godt lydmiljø
- Lite vedlikehold
- Lagrer varme (termisk masse)

**Ulemper med mur:**
- Tungt
- Arbeidskrevende
- Vanskelig å endre
- Krever kompetanse

**Murmetoder:**
- Helblokkmur: Massiv mur
- Hulrommur: Dobbel mur med luftspalt
- Forblending: Tegl foran en annen konstruksjon`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-1-ex-1',
      task: 'Nevn tre fordeler og to ulemper med tre som byggemateriale.',
      solution: 'Fordeler: 1) Fornybar ressurs, 2) God isolasjonsevne, 3) Lett å bearbeide. Ulemper: 1) Brennbart, 2) Kan råtne ved fukt. Andre gyldige svar: Miljøvennlig, lett materiale som fordeler. Krever vedlikehold som ulempe.',
    },
    {
      id: 'bygg-anlegg-vg1-1-ex-2',
      task: 'Hva er hovedbestanddelene i betong, og hva er omtrentlig prosentfordeling?',
      solution: 'Betong består av: Sement (10-15%), Vann (5-10%), Tilslag som sand og grus (65-75%), og eventuelt tilsetningsstoffer. Tilslaget utgjør størst andel.',
    },
    {
      id: 'bygg-anlegg-vg1-1-ex-3',
      task: 'Forklar hva som menes med at betong er sterkt i trykk, men svakt i strekk.',
      solution: 'Betong tåler stor belastning når den presses sammen (trykk), som i søyler og fundamenter. Men når den blir strukket eller bøyd, sprekker den lett. Derfor armeres betong med stålnett eller armeringsjern som tar opp strekkrefter.',
    },
    {
      id: 'bygg-anlegg-vg1-1-ex-4',
      task: 'Hvilke treslag er mest vanlig i norsk byggebransje, og hva brukes de til?',
      solution: 'Gran er mest brukt, til bærekonstruksjoner, panel og vinduer. Furu brukes til gulv, panel og utvendig kledning. Lerk er svært holdbart og brukes utendørs, men er dyrt.',
    },
    {
      id: 'bygg-anlegg-vg1-1-ex-5',
      task: 'Hva er forskjellen på lettklinkerblokker og gasbetongblokker?',
      solution: 'Lettklinkerblokker er hule blokker av lettbetong med leca-korn, gode isolasjonsegenskaper. Gasbetongblokker (Ytong/Leca) er enda lettere, porøse blokker med meget god isolasjonsevne og enklere å bearbeide (kan sages). Begge brukes til yttervegger.',
    },
  ],
  keyTerms: [
    { term: 'Limtre', definition: 'Trevirke der planker er limt sammen til store dimensjoner, meget sterkt.' },
    { term: 'Betong', definition: 'Byggemateriale av sement, vann, sand og grus som herdes til stein.' },
    { term: 'Armering', definition: 'Stålnett eller jern i betong for å ta opp strekkrefter.' },
    { term: 'Teglstein', definition: 'Murstein av brent leire, klassisk byggemateriale.' },
    { term: 'Gasbetong', definition: 'Lett betongmateriale med luftbobler, god isolasjonsevne.' },
    { term: 'Hydratisering', definition: 'Kjemisk reaksjon mellom sement og vann som gjør at betong herder.' },
    { term: 'Fasthetsklasse', definition: 'Klassifisering av betong etter trykkfasthet (f.eks. B25).' },
    { term: 'CLT', definition: 'Cross-Laminated Timber - krysslimte treplater, meget sterkt.' },
  ],
};

// ============================================================================
// Kapittel 2: Tegning og BIM
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_2: TextbookChapter = {
  id: 'bygg-anlegg-vg1-2',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '2',
  title: 'Tegning og BIM',
  description: 'Byggetegninger og digitale verktøy.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og forstå byggetegninger',
    'kjenne til BIM-teknologi',
  ],
  sections: [
    {
      title: 'Byggetegninger',
      content: `## Byggetegninger

Byggetegninger er byggeplassens språk. De kommuniserer hvordan en bygning skal konstrueres. Alle på byggeplass må kunne lese og forstå tegninger.

**Typer tegninger:**

**Situasjonsplan**
Viser tomt, bygning, veier, parkering, terreng. Forteller hvor på tomta bygget skal plasseres.

**Plantegning**
Viser bygningen ovenfra (horisontalt snitt). En plantegning per etasje. Viser rom, dører, vinduer, vegger.

**Fasadetegning**
Viser bygningens utside fra hver side (nord, sør, øst, vest). Viser vinduer, dører, takform, kledning.

**Snitttegning**
Viser bygningen i vertikalt snitt (som om den er skåret over). Viser konstruksjon, høyder, etasjer, fundamenter.

**Detaljtegning**
Viser spesifikke detaljer i stor skala, for eksempel vindusfeste, takovergang, hjørneløsninger.

**Viktige elementer på tegninger:**
- Målestokk (1:50, 1:100, etc.)
- Målsetting (kotehøyder)
- Materialsymboler
- Tegnforklaringer
- Stemplinger (arkitekt, dato, revisjon)`,
    },
    {
      title: 'Målestokk',
      content: `## Målestokk

Målestokk angir forholdet mellom tegningens størrelse og virkeligheten.

**Vanlige målestokker:**

**1:100**
1 cm på tegningen = 100 cm (1 meter) i virkeligheten.
Brukes til plantegninger, fasader.

**1:50**
1 cm på tegningen = 50 cm i virkeligheten.
Mer detaljerte plantegninger.

**1:20**
1 cm på tegningen = 20 cm i virkeligheten.
Detaljtegninger, mindre bygg.

**1:10 eller 1:5**
Veldig detaljerte tegninger av spesielle detaljer.

**Beregning fra målestokk:**
Hvis du måler 5 cm på en 1:100 tegning:
5 cm × 100 = 500 cm = 5 meter i virkeligheten.

**Viktig:**
- Alltid sjekk målestokk før du måler
- Bruk målestokklinjal for nøyaktighet
- Mål aldri direkte fra tegning uten å sjekke målestokk`,
    },
    {
      title: 'BIM - Building Information Modeling',
      content: `## BIM - Building Information Modeling

BIM er en digital arbeidsmetode der alle aktører jobber i en felles 3D-modell av bygget.

**Hva er BIM?**
BIM er mer enn bare 3D-tegning. Det er en database med all informasjon om bygget:
- Geometri (form og størrelse)
- Materialer
- Kostnader
- Tidsplan
- Vedlikeholdsinformasjon

**Fordeler med BIM:**
- Færre feil og kollisjoner
- Bedre samarbeid mellom fagene
- Raskere prosjektering
- Enklere endringer
- Bedre kostnadskontroll
- Nyttig i driftsfasen

**BIM-nivåer:**

**BIM nivå 1**
2D-tegninger med noe digital dokumentasjon.

**BIM nivå 2**
3D-modell der alle jobber i egne modeller som samordnes.

**BIM nivå 3**
Full integrasjon, alle jobber i samme modell samtidig (cloud-basert).

**BIM-programvare:**
- Revit (mest brukt i Norge)
- ArchiCAD
- Tekla Structures (stål og betong)
- Solibri (kollisjonskontroll)

**BIM i praksis:**
Alle fag (arkitekt, rørlegger, elektriker, byggmester) lager sin modell. Disse samordnes, og systemet varsler om kollisjoner (f.eks. rør som går gjennom en bjelke).`,
    },
    {
      title: 'Symboler og standarder',
      content: `## Symboler og standarder

Byggetegninger bruker standardiserte symboler slik at alle forstår dem likt.

**Vanlige symboler:**

**Vegger:**
- Tykke svarte linjer: Bærende vegger
- Tynne linjer: Lettvegg/skillevegg

**Dører:**
- Bue viser hvordan døren åpnes
- Tall angir bredde (81, 91 cm)

**Vinduer:**
- Tynne linjer i veggen
- Tall angir dimensjon

**Trapper:**
- Pil viser oppgangsretning
- Tall viser antall trinn

**Kotehøyder:**
- Angir høyde over havet eller referansepunkt
- Eksempel: +2.40 (2,40 meter over referanse)

**Norske standarder:**
- NS 3420: Betegnelser for byggverk
- NS 3940: Tegningsregler
- Byggforsk: Veiledninger og detaljer

**Linjestørrelser:**
- 0,2 mm: Hjelpelinje, mållinjer
- 0,4 mm: Synlige kanter
- 0,8 mm: Snittlinjer, viktige konturer`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-2-ex-1',
      task: 'Hva viser en plantegning, og hva viser en snitttegning?',
      solution: 'Plantegning viser bygningen ovenfra (horisontalt snitt) og viser rom, vegger, dører og vinduer. Snitttegning viser bygningen i vertikalt snitt (som om den er skåret over) og viser konstruksjon, etasjehøyder og fundamenter.',
    },
    {
      id: 'bygg-anlegg-vg1-2-ex-2',
      task: 'Du måler 8 cm på en tegning med målestokk 1:50. Hvor langt er dette i virkeligheten?',
      solution: '8 cm × 50 = 400 cm = 4 meter. I virkeligheten er det 4 meter.',
    },
    {
      id: 'bygg-anlegg-vg1-2-ex-3',
      task: 'Nevn tre fordeler med BIM sammenlignet med tradisjonelle 2D-tegninger.',
      solution: '1) Færre feil og kollisjoner mellom fag, 2) Bedre samarbeid og kommunikasjon, 3) Enklere å gjøre endringer (oppdateres automatisk i alle tegninger). Andre gyldige: Bedre kostnadskontroll, nyttig i driftsfasen.',
    },
    {
      id: 'bygg-anlegg-vg1-2-ex-4',
      task: 'En vegg er tegnet på en plantegning i målestokk 1:100. Veggen måler 6,5 cm på tegningen. Hvor lang er veggen i virkeligheten?',
      solution: '6,5 cm × 100 = 650 cm = 6,5 meter. Veggen er 6,5 meter lang.',
    },
    {
      id: 'bygg-anlegg-vg1-2-ex-5',
      task: 'Hva er forskjellen på en bærende vegg og en skillevegg på en tegning?',
      solution: 'Bærende vegg tegnes med tykke, sorte linjer fordi de bærer last fra etasjer og tak over. Skillevegg (lettvegg) tegnes med tynne linjer fordi de kun skiller rom og kan flyttes uten å påvirke konstruksjonen.',
    },
  ],
  keyTerms: [
    { term: 'Plantegning', definition: 'Tegning som viser bygningen ovenfra (horisontalt snitt).' },
    { term: 'Snitttegning', definition: 'Tegning som viser bygningen i vertikalt snitt (skåret over).' },
    { term: 'Målestokk', definition: 'Forholdet mellom tegningens størrelse og virkeligheten (f.eks. 1:100).' },
    { term: 'BIM', definition: 'Building Information Modeling - digital 3D-modell med all bygningsinformasjon.' },
    { term: 'Kotehøyde', definition: 'Høyde over referansepunkt, angis på tegninger (f.eks. +2.40).' },
    { term: 'Fasadetegning', definition: 'Tegning som viser bygningens utside fra én side.' },
  ],
};

// ============================================================================
// Kapittel 3: Grunnarbeid og betong
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_3: TextbookChapter = {
  id: 'bygg-anlegg-vg1-3',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '3',
  title: 'Grunnarbeid og betong',
  description: 'Fundamentering og betongarbeider.',
  estimatedMinutes: 65,
  competenceGoals: [
    'forstå grunnarbeid og fundamentering',
    'kjenne til betongstøping og forskaling',
  ],
  sections: [
    {
      title: 'Grunnundersøkelser',
      content: `## Grunnundersøkelser

Før bygging må grunnen undersøkes for å finne bæreevne og grunnforhold.

**Hvorfor grunnundersøkelser?**
- Finne grunnens bæreevne
- Avdekke problematisk grunn (leire, kvikkleire)
- Dimensjonere fundamenter riktig
- Unngå setningsskader
- Planlegge drenering

**Grunnboringer:**
Borer ned i grunnen for å ta ut prøver. Analyserer jordlag, bergdybde og grunnvannsnivå.

**Trykksondering:**
En spiss presses ned i grunnen, og motstanden måles. Gir informasjon om bæreevne.

**Grunntyper:**

**Berg**
Best fundament. Direkte på berg gir høy bæreevne.

**Grus og sand**
God bæreevne, lite setninger. Vanlig i Norge.

**Silt**
Middels bæreevne. Kan sette seg ved belastning.

**Leire**
Dårlig bæreevne, store setninger. Krever spesielle tiltak.

**Kvikkleire**
Farlig. Kan flyte ut ved rystelser. Må unngås eller stabiliseres.

**Torv og myr**
Meget dårlig. Må graves ut eller bygges på påler.`,
    },
    {
      title: 'Fundamentering',
      content: `## Fundamentering

Fundamentet overfører byggets last ned til grunnen.

**Typer fundamenter:**

**Plate på mark**
En helstøpt betongplate direkte på grunnen. Brukes ved god grunn og lave bygg. Billig og enkelt.

**Søylefundament**
Enkeltfundamenter under hver søyle. Brukes til tyngre bygg.

**Stripefundament**
Langt, smalt fundament under vegger. Bruker ved tyngre vegger.

**Peler**
Lange søyler som går ned til fast grunn eller berg. Brukes ved dårlig grunn. Kan være av tre, betong eller stål.

**Bergskrue**
Skrues ned i berg. Brukes der bergoverflaten er ujevn.

**Fundamentering i praksis:**

1. Grave ut til frostfri dybde (min. 1 meter i Sør-Norge, 1,4 meter i Nord-Norge)
2. Legge drenslag (grus) i bunn
3. Legge drensledning rundt bygget
4. Legge frostsikring (isolasjon) ved behov
5. Legge plastduk (radonsperre)
6. Armere og støpe fundament`,
    },
    {
      title: 'Forskaling',
      content: `## Forskaling

Forskaling er formen som betongen støpes i. Fjernes når betongen er herdnet.

**Typer forskaling:**

**Treforskalingssystem for fundamenter:**
- Planker og bord settes opp som form
- Avstivet med stag og pinner
- Må være tett og sterk nok

**Systemforskaling:**
- Prefabrikkerte elementer (f.eks. PERI, DOKA)
- Raskere montering
- Kan brukes om igjen
- Dyrt i innkjøp

**Glidforskaling:**
- Brukes til høye konstruksjoner (silo, tårn)
- Forskalingen "glir" oppover etter hvert

**Krav til forskaling:**
- Tett (betong skal ikke renne ut)
- Sterk (tåle betongens trykk)
- Dimensjonsstabil (ikke bøye seg)
- Riktig plassert (nøyaktige mål)
- Lett å demontere

**Formvæske:**
Påføres forskalingen slik at betongen ikke fester seg. Gjør demontering enklere og gir finere overflate.

**Armering:**
Før støping legges armeringsjern eller armeringsnett i forskalingen. Dette tar opp strekkrefter i betongen.

**Overdekning:**
Armeringen må ha minst 3-5 cm betong rundt seg (overdekning) for beskyttelse mot rust.`,
    },
    {
      title: 'Betongstøping',
      content: `## Betongstøping

Støping av betong krever nøyaktighet og riktig teknikk.

**Forberedelser:**
1. Sjekk at forskalingen er tett og stødig
2. Sjekk at armering er riktig plassert med riktig overdekning
3. Fukte forskalingen (slik at den ikke suger vann fra betongen)
4. Ha nok folk og utstyr klart

**Støpeprosessen:**

**Mottak av betong:**
Betongbil leverer ferdig betong. Sjekk konsistens og mengde.

**Utstøping:**
Betongen helles i forskalingen. Viktig å:
- Støpe i lag (maks 50 cm høyde om gangen)
- Unngå at betongen faller fra stor høyde (segregering)
- Støpe kontinuerlig (unngå arbeidsskjøter)

**Vibrering:**
En vibrator stikkes ned i betongen for å:
- Fjerne luftbobler
- Få betongen til å fylle hele formen
- Sikre god kontakt med armeringen
Viktig: Ikke overvibrer (bindemiddel kan skille seg fra tilslag)

**Avretning:**
Overflaten jevnes med bor eller avrettingsliste.

**Etterbehandling:**
- Hold betongen fuktig i minst 7 dager (dekk med plast eller vann)
- Beskytt mot frost (varmekabler eller presenning ved kaldt vær)
- Ikke belast før tilstrekkelig fasthet (minimum 7 dager)

**Arbeidsskjøter:**
Hvis støping må avbrytes, lages en arbeidsskjøt. Dette er et svakt punkt og må planlegges nøye.`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-3-ex-1',
      task: 'Hvorfor må vi gjøre grunnundersøkelser før vi bygger?',
      solution: 'For å finne grunnens bæreevne og unngå setningsskader. Grunnundersøkelser avdekker problematisk grunn som kvikkleire, hjelper oss dimensjonere fundamenter riktig og planlegge drenering.',
    },
    {
      id: 'bygg-anlegg-vg1-3-ex-2',
      task: 'Hva er frostfri dybde, og hvorfor er det viktig?',
      solution: 'Frostfri dybde er dybden der grunnen ikke fryser om vinteren (minimum 1 meter i Sør-Norge, 1,4 meter i Nord-Norge). Fundamenter må ligge under denne dybden for å unngå frosthiv som kan løfte og skade bygget.',
    },
    {
      id: 'bygg-anlegg-vg1-3-ex-3',
      task: 'Nevn tre typer fundamenter og forklar når de brukes.',
      solution: '1) Plate på mark: Ved god grunn og lave bygg, billig og enkelt. 2) Peler: Ved dårlig grunn, går ned til fast grunn eller berg. 3) Stripefundament: Under bærende vegger i tyngre bygg.',
    },
    {
      id: 'bygg-anlegg-vg1-3-ex-4',
      task: 'Hva er formålet med å vibrere betong under støping?',
      solution: 'Vibrering fjerner luftbobler fra betongen, får betongen til å fylle hele forskalingen og sikrer god kontakt med armeringen. Dette gir sterkere og mer holdbar betong.',
    },
    {
      id: 'bygg-anlegg-vg1-3-ex-5',
      task: 'Hvorfor må betong holdes fuktig i minst 7 dager etter støping?',
      solution: 'Betong trenger vann for å herde skikkelig (hydratisering). Hvis den tørker for raskt, får den ikke full styrke og kan sprekke. Ved å holde den fuktig sikrer vi optimal herdning.',
    },
    {
      id: 'bygg-anlegg-vg1-3-ex-6',
      task: 'Hva menes med "overdekning" av armering, og hvorfor er det viktig?',
      solution: 'Overdekning er betonglaget rundt armeringen (minst 3-5 cm). Det beskytter armeringen mot rust og oksydasjon. Uten tilstrekkelig overdekning vil armeringen ruste, utvide seg og sprekke betongen.',
    },
  ],
  keyTerms: [
    { term: 'Bæreevne', definition: 'Grunnens evne til å bære last fra bygget uten å sette seg.' },
    { term: 'Kvikkleire', definition: 'Ustabil leiretype som kan flyte ut ved rystelser, meget farlig.' },
    { term: 'Frostfri dybde', definition: 'Dybde der grunnen ikke fryser, fundament må ligge under dette.' },
    { term: 'Forskaling', definition: 'Form som betongen støpes i, fjernes når betongen er herdnet.' },
    { term: 'Armering', definition: 'Stålnett eller jern i betong som tar opp strekkrefter.' },
    { term: 'Vibrering', definition: 'Risting av betong for å fjerne luftbobler og få god komprimering.' },
    { term: 'Overdekning', definition: 'Betonglaget rundt armeringen som beskytter mot rust.' },
  ],
};

// ============================================================================
// Kapittel 4: Trekonstruksjoner
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_4: TextbookChapter = {
  id: 'bygg-anlegg-vg1-4',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '4',
  title: 'Trekonstruksjoner',
  description: 'Bygging med tre og trekonstruksjoner.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå bindingsverk og rammekonstruksjoner',
    'kjenne til takstolkonstruksjoner',
  ],
  sections: [
    {
      title: 'Bindingsverk',
      content: `## Bindingsverk

Bindingsverk er den vanligste konstruksjonsmetoden for trehus i Norge.

**Prinsipp:**
Veggen består av vertikale stendere (stolper) med langsgående sviller i topp og bunn. Mellom stenderne fylles det med isolasjon.

**Komponenter i bindingsverk:**

**Svillstokk (undre sville)**
Liggende trevirke nederst i veggen, boltes til fundamentet. Danner grunnlag for stenderne.

**Stendere**
Vertikale bærende elementer, vanligvis 48×98 mm eller 48×148 mm. Plasseres med 60 cm senteravstand (c/c).

**Toppsving (øvre sville)**
Liggende trevirke øverst i veggen. Forbinder stenderne og bærer tak eller neste etasje.

**Kne/vindkryss**
Diagonale avstivninger som gjør veggen stiv mot sidevind og horisontalkreftene.

**Fordeler med bindingsverk:**
- Lett konstruksjon
- Enkelt å bygge
- Fleksibel planløsning
- God isolasjonsevne
- Rask byggetid

**Ulemper:**
- Må beskyttes mot fukt
- Brannfare (må brannisoleres)
- Kan krympe ved tørking`,
    },
    {
      title: 'Gulvkonstruksjoner',
      content: `## Gulvkonstruksjoner

Gulvet må bære last fra mennesker, møbler og innredning.

**Tregulv på bjelkelag:**

**Bærebjelker**
Horisontale treelementer som bærer gulvlasten. Dimensjon avhenger av spennvidde og last. Vanlig: 48×198 mm eller 48×248 mm.

**Bjelkeavstand**
Vanligvis 60 cm senteravstand (c/c).

**Undergulv**
Plater som ligger på bjelkene. Sponplater (22-25 mm) eller OSB-plater.

**Isolasjon**
Fyller rom mellom bjelkene. Gir lyddemping og varmeisolasjon.

**Undergulv + toppgulv**
Ovenpå undergulvet legges dampsperre og toppgulv (parkett, laminat, fliser).

**Avstivning:**
Diagonale avstivninger eller kryssfiner under bjelkelaget for å forhindre skjevstilling.

**Plate på mark:**
Alternativ til tregulv. Betongplate støpt direkte på grunnen. Isolasjon under platen.

**Krav til gulv:**
- Bæreevne: Tåle lasten
- Stivhet: Ikke svinge eller vibrere
- Lyddemping: Begrense støy mellom etasjer
- Fuktsperre: Hindre fukt fra grunn`,
    },
    {
      title: 'Takstol og takkonstruksjoner',
      content: `## Takstol og takkonstruksjoner

Taket beskytter bygget mot vær og vind. Takstolen bærer lasten fra taket.

**Saltak:**
Takflate som heller én vei. Enklest å bygge.

**Pulttak:**
To takflater som møtes i en topp (møne). Vanligst i Norge.

**Valmet tak:**
Fire takflater. Mer komplisert, brukes sjeldnere.

**Flatt tak:**
Lite fall (2-5°). Krever god tetting og drenering.

**Takstoler:**

**Sperbindingsverk**
Enkle sperrer som går fra vegg til møne. Brukes ved mindre spenn. Kan gi brukbart loft.

**Takstoler (trekantfagverk)**
Prefabrikkerte trelementer i trekantform. Kan spenne langt uten mellomliggende støtter. Gir ikke brukbart loftarom.

**Komponenter:**
- **Sperrer**: Skrå elementer som bærer taket
- **Møneås**: Øverste horisontale bjelke der sperrene møtes
- **Hanebjelke**: Horisontal bjelke som binder sperrene sammen
- **Stag**: Diagonale elementer som tar opp krefter

**Takvinkel:**
Helningen på taket måles i grader eller i brøk (1:3 betyr 1 m stigning per 3 m horisontal lengde).

**Vurdering av takvinkel:**
- Flatt: 5-15°
- Middels: 15-30°
- Bratt: 30-45°

Brattere tak i snørike områder.`,
    },
    {
      title: 'Sammenføyninger i tre',
      content: `## Sammenføyninger i tre

Trevirke må skjøtes og sammenføyes på riktig måte.

**Mekaniske forbindelser:**

**Spikring**
Vanligste metode. Bruk riktig spiker til formålet:
- Vanlige spiker: 3-4 ganger tykkelsen på den tynneste delen
- Skråspikring: Til endeforbindelser

**Skruing**
Sterkere enn spikring. Gjenget skrue gir bedre grep.

**Bolter**
For tyngre forbindelser. Gjennomgående bolt med mutter.

**Limforbindelser**

**Limt fuge**
To flater limes sammen. Brukes i limtre-produksjon.

**Tappeforbindelser:**

**Overlappsskjøt**
To virker overlapper hverandre og festes.

**Tapp og hull**
En del har tapp som passer i hull i den andre delen. Klassisk håndverksmetode.

**Skjevskjøt**
Skrå snitt på begge deler som passer sammen.

**Moderne sammenføyninger:**
- Nagleplate (takstolplater)
- Stålbeslag og vinkler
- Limtreleverandører`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-4-ex-1',
      task: 'Hva er bindingsverk, og hva er hovedkomponentene?',
      solution: 'Bindingsverk er en veggkonstruksjon med vertikale stendere mellom en undre og øvre sville. Hovedkomponenter: Svillstokk (bunn), stendere (vertikale stolper), toppsving (topp), og kne/vindkryss (diagonal avstivning).',
    },
    {
      id: 'bygg-anlegg-vg1-4-ex-2',
      task: 'Hvorfor bruker vi 60 cm senteravstand (c/c) på stendere i bindingsverk?',
      solution: '60 cm er standardmål som passer med isolasjonsplater og platestørrelser (120 cm bredde = 2 spenn). Det gir også god stabilitet og bæreevne uten å bruke unødvendig mye materiale.',
    },
    {
      id: 'bygg-anlegg-vg1-4-ex-3',
      task: 'Hva er forskjellen på en takstol (trekantfagverk) og sperbindingsverk?',
      solution: 'Takstol er prefabrikkert trekantfagverk som kan spenne langt uten mellomstøtter, men gir ikke brukbart loft. Sperbindingsverk har enkle sperrer fra vegg til møne, brukes ved mindre spenn og kan gi brukbart loftsrom.',
    },
    {
      id: 'bygg-anlegg-vg1-4-ex-4',
      task: 'Nevn tre krav til en gulvkonstruksjon.',
      solution: '1) Bæreevne: Må tåle lasten fra mennesker og møbler. 2) Stivhet: Skal ikke svinge eller vibrere. 3) Lyddemping: Begrense støy mellom etasjer. Andre gyldige: Fuktsperre, varmeisolasjon.',
    },
    {
      id: 'bygg-anlegg-vg1-4-ex-5',
      task: 'Hvorfor har vi brattere takvinkel i områder med mye snø?',
      solution: 'Brattere tak gjør at snøen lettere sklir av, slik at taket ikke får for stor snølast. Flate tak må bære all snøen og kan kollapse ved store snømengder.',
    },
    {
      id: 'bygg-anlegg-vg1-4-ex-6',
      task: 'Hva er fordelen med limtre sammenlignet med vanlig trelast?',
      solution: 'Limtre er laget av sammenlimt trevirke og kan produseres i mye større dimensjoner enn massivtre. Det er også sterkere, mer dimensjonsstabilt og har færre feil som kvister og råte.',
    },
  ],
  keyTerms: [
    { term: 'Bindingsverk', definition: 'Veggkonstruksjon med vertikale stendere mellom sviller.' },
    { term: 'Stender', definition: 'Vertikal bærende stolpe i bindingsverk.' },
    { term: 'Svillstokk', definition: 'Undre horisontale bjelke i bindingsverk som boltes til fundament.' },
    { term: 'Takstol', definition: 'Prefabrikkert trekantfagverk som bærer taket.' },
    { term: 'Sperrer', definition: 'Skrå bærende elementer i takkonstruksjon.' },
    { term: 'Møneås', definition: 'Øverste horisontale bjelke der sperrene møtes.' },
    { term: 'c/c', definition: 'Center til center - avstand målt fra senter av ett element til senter av neste.' },
  ],
};

// ============================================================================
// Kapittel 5: Muring og pussing
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_5: TextbookChapter = {
  id: 'bygg-anlegg-vg1-5',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '5',
  title: 'Muring og pussing',
  description: 'Murverksteknikk og overflatebehandling.',
  estimatedMinutes: 60,
  competenceGoals: [
    'utføre grunnleggende murarbeid',
    'kjenne til puss og overflatebehandling',
  ],
  sections: [
    {
      title: 'Murblokker og murstein',
      content: `## Murblokker og murstein

Mur består av blokker eller stein som mures sammen med mørtel.

**Typer murblokker:**

**Lettklinkerblokker (Leca)**
Hule blokker av lettbetong med leca-korn (ekspandert leire).
- Dimensjon: Vanligvis 50 cm lang, 25 cm høy
- Tykkelse: 20, 25, 30 eller 35 cm
- God isolasjonsevne
- Lett å arbeide med

**Gasbetongblokker (Ytong)**
Massive, porøse blokker av gasbetong.
- Meget lett
- Utmerket isolasjonsevne
- Kan sages, bores, høvles
- Suger vann, må beskyttes

**Betonghullstein**
Hule blokker av vanlig betong.
- Tyngre og sterkere
- Brukes til kjellervegger, bærende vegger
- Dårligere isolasjonsevne

**Teglstein**
Massiv brent leire.
- Tradisjonell fasademur
- Holdbar, lite vedlikehold
- Klassisk estetikk
- Dyrt

**Standardformat:**
De fleste murblokker har moduler som passer sammen. Høyde + fugethykkelse gir runde tall (25 cm).`,
    },
    {
      title: 'Mørtel og fugning',
      content: `## Mørtel og fugning

Mørtel binder blokkene sammen og fordeler lasten.

**Mørteltyper:**

**Sementmørtel**
Blanding av sement, sand og vann. Vanligst i dag.
- Sterk
- Vannbestandig
- Relativt rask herdning

**Kalkmørtel**
Blanding av kalk, sand og vann. Brukes i gamle bygninger.
- Mykere
- Bedre fukttransport
- Tradisjonelt håndverk

**Lettklinker mørtel**
Spesialmørtel for leca-blokker med leca-korn.
- Bedre isolasjon i fuger
- Samme varmemotstand som blokkene

**Mørtelklasser:**
- M5: 5 MPa trykkfasthet (lett mur)
- M10: 10 MPa (vanlig bærende mur)
- M20: 20 MPa (tung belastning)

**Fugethykkelse:**
Vanligvis 10-15 mm. Skal være jevn.

**Fugebehandling:**

**Glattstrykning**
Fugen strykes glatt med murskje mens mørtel er våt.

**Fuging**
Fugen tas ut litt og fylles med egen fugemasse. Gir finere utseende.

**Profiler:**
- Konveks fuge: Buet utover
- Konkav fuge: Buet innover
- Rettskåren fuge: Rett avskåret`,
    },
    {
      title: 'Mureteknikk',
      content: `## Mureteknikk

Riktig mureteknikk gir sterk og varig mur.

**Forberedelser:**
1. Sett ut muren med snor og lodd
2. Fuktefrie blokker suger vann fra mørtel (særlig gasbetong)
3. Blande mørtel til riktig konsistens (ikke for våt eller tørr)

**Muring trinn for trinn:**

**1. Murpuss (snor)**
Strekk snor mellom yttermurklosser i riktig høyde.

**2. Legg mørtel**
Legg mørtelbed på underlaget (ca. 2 cm tykt, 10-15 cm bredt).

**3. Sett blokk**
Sett blokk i mørtelbedet. Bank ned med murhammerens gummihode til riktig høyde (følg snoren).

**4. Loddrett og vater**
Sjekk at blokken står loddrett (vertikalt) og i vater (horisontalt).

**5. Skift**
Neste skifte (rad) legges slik at vertikalfugene ikke står over hverandre. Vanlig skift er halvt sprangskift (blokkens halvdel forskyves).

**6. Avrett**
Stryk overflødig mørtel av med murskje.

**Viktige prinsipper:**
- Alltid mur fra hjørnet
- Bruk vatervekt og lodd
- Hold murpussen stram
- Jevn fugethykkelse
- Godt forband (ikke fuger over hverandre)`,
    },
    {
      title: 'Puss og overflatebehandling',
      content: `## Puss og overflatebehandling

Puss beskytter veggen og gir fin overflate.

**Typer puss:**

**Utvendig puss**
Beskytter muren mot vær og vind.
- Grovpuss (grunnpuss)
- Finpuss (toppuss)
- Ofte armert med nett

**Innvendig puss**
Glatt overflate til maling eller tapet.
- Gipspuss (vanligst)
- Sementpuss (våtrom)

**Lagdeling:**

**1. Grunnpuss**
Første lag, grovere. Ca. 10-15 mm tykt. Jevner ut ujevnheter.

**2. Finpuss**
Tynnere lag (5-10 mm) som gir glatt overflate.

**Pussing trinn for trinn:**

**1. Rengjør underlaget**
Fjern støv og løse partikler.

**2. Fukting**
Fukt underlaget (ikke med gasbetong, tørker for raskt).

**3. Grunning**
Påfør grunningsmiddel for bedre feste.

**4. Armering (utvendig)**
Legg armøringsnett ved hjørner og sprekker.

**5. Påføring**
Kast puss på veggen med murskje. Bygg ut fra bunnen.

**6. Avrett**
Trekk av med lang rettbrett (kartse).

**7. Gni**
Når pussen begynner å stivne, gni med svamp eller trillebrett.

**Sparkelpuss:**
Tynt lag (1-3 mm) spackel for å jevne små ujevnheter. Brukes på innvendige vegger før maling.`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-5-ex-1',
      task: 'Hva er forskjellen på lettklinkerblokker (Leca) og gasbetongblokker (Ytong)?',
      solution: 'Lettklinkerblokker er hule og inneholder leca-korn, god isolasjonsevne. Gasbetongblokker er massive, porøse blokker med enda bedre isolasjonsevne. Gasbetong kan sages og bearbeides lettere, men suger vann og må beskyttes. Begge er lette å jobbe med.',
    },
    {
      id: 'bygg-anlegg-vg1-5-ex-2',
      task: 'Hvorfor skal vertikalfugene ikke stå over hverandre i mur?',
      solution: 'Hvis vertikalfugene står over hverandre, dannes svake linjer i muren som kan få den til å sprekke eller kollapse. Ved å forskyve blokkene (sprangskift) fordeles lasten bedre og muren blir sterkere.',
    },
    {
      id: 'bygg-anlegg-vg1-5-ex-3',
      task: 'Hva er standard fugethykkelse i mur, og hvorfor er det viktig at den er jevn?',
      solution: 'Standard fugethykkelse er 10-15 mm. Jevn fugethykkelse gir jevn lastfordeling, bedre estetikk og forhindrer at enkelte fuger blir svake punkt som kan sprekke.',
    },
    {
      id: 'bygg-anlegg-vg1-5-ex-4',
      task: 'Forklar forskjellen på grunnpuss og finpuss.',
      solution: 'Grunnpuss er første lag, grovere struktur og tykkere (10-15 mm). Den jevner ut store ujevnheter og gir godt feste. Finpuss er tynnere (5-10 mm), finere struktur og gir den glatte, ferdige overflaten.',
    },
    {
      id: 'bygg-anlegg-vg1-5-ex-5',
      task: 'Hvorfor fuktes underlaget før pussing?',
      solution: 'Fukting forhindrer at underlaget suger vann fra pussen for raskt. Hvis pussen tørker for raskt får den ikke herde skikkelig og kan sprekke eller få dårlig feste. Unntak: Gasbetong fuktes ikke, da den suger for mye.',
    },
  ],
  keyTerms: [
    { term: 'Lettklinker', definition: 'Lett betongmateriale med leca-korn (ekspandert leire).' },
    { term: 'Gasbetong', definition: 'Lett, porøst betongmateriale med utmerket isolasjonsevne.' },
    { term: 'Mørtel', definition: 'Bindemiddel av sement/kalk, sand og vann som binder murblokker.' },
    { term: 'Sprangskift', definition: 'Murmetode der blokkene forskyves slik at fuger ikke står over hverandre.' },
    { term: 'Murpuss', definition: 'Snor strukket mellom yttermurklosser som høydereferanse under muring.' },
    { term: 'Grunnpuss', definition: 'Første, grove lag puss som jevner ut ujevnheter.' },
    { term: 'Finpuss', definition: 'Siste, fine lag puss som gir glatt overflate.' },
  ],
};

// ============================================================================
// Kapittel 6: Verktøy og maskiner
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_6: TextbookChapter = {
  id: 'bygg-anlegg-vg1-6',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '6',
  title: 'Verktøy og maskiner',
  description: 'Bruk og vedlikehold av byggverktøy.',
  estimatedMinutes: 50,
  competenceGoals: [
    'bruke håndverktøy og maskiner sikkert',
    'utføre grunnleggende vedlikehold',
  ],
  sections: [
    {
      title: 'Håndverktøy',
      content: `## Håndverktøy

Håndverktøy er grunnlaget for alt håndverksarbeid. Riktig bruk og vedlikehold sikrer kvalitet og sikkerhet.

**Måle- og merkeverktøy:**

**Tommestokk/Målebånd**
Viktigst verktøy på byggeplass. Brukes til å måle lengder.
- 2-5 meter tommestokk for presise mål
- 5-10 meter målebånd for lengre avstander

**Vater**
Sjekker om noe er horisontalt (i vater). Luftboble mellom to streker = i vater.

**Lodd**
Sjekker om noe er vertikalt (loddrett). Tyngde på snor som henger fritt.

**Vatervekt/Laser**
Kombinerer vater og lodd. Laservater projiserer laserlinje.

**Vinkelhake**
Måler 90-graders vinkel. Brukes til utsetting og kontroll.

**Skjære- og sageverktøy:**

**Håndsag**
Brukes til å sage trevirke. Ulike tenntyper for ulike materialer.

**Bøylesag**
Finsag for nøyaktige snitt og kurvesaging.

**Stikksag**
Elektrisk sag for kurvesaging og utskjæringer.

**Sirkelsag**
Kraftig elektrisk sag for rette snitt. Farlig - krever opplæring.

**Kappesag**
Elektrisk kapsag for presis kapping i bestemte vinkler.

**Festeverktøy:**

**Hammer**
Ulike typer: Klauhamm er (utdra spiker), klubbe (slag), gummihammer (banking uten merker).

**Skrutrekker**
Kryssliss og spisslis. Bruk riktig størrelse.

**Slagtrekker**
Batteridrevet skrutrekker. Spar tid og krefter.`,
    },
    {
      title: 'Elektriske håndverktøy',
      content: `## Elektriske håndverktøy

Elektroverktøy øker effektivitet, men krever opplæring og forsiktighet.

**Boring:**

**Borhammer**
Borer i betong, stein, tegl. Slag og rotasjon. Ulike bits til ulike materialer.

**Batteridrill**
Borer i tre, metall, plast. Vanligste verktøy på byggeplass.

**Saging:**

**Sirkelsag**
Rette snitt i trevirke og plater. Farlig - alltid bruk verneutstyr.

**Stikksag**
Kurver og utskjæringer. Mindre farlig enn sirkelsag.

**Kappesag (gjærsag)**
Presis kapping i vinkler. God for lister, gerikter.

**Høvling og sliping:**

**Elektrisk høvel**
Høvler trevirke. Juster tykkelse.

**Slipemaskin**
Pusser og glatter treoverflater. Ulike typer: Eksentersliper, båndslipper, vinkelsliper.

**Spikring:**

**Spikerpistol**
Skyter spiker med trykk luft eller gass. Rask, men farlig.

**Sikkerhet:**
- Alltid bruk vernebriller
- Sikre arbeidsstykket
- Sjekk at verktøyet er i orden før bruk
- Koble fra strøm ved vedlikehold
- Bruk riktig verktøy til jobben`,
    },
    {
      title: 'Maskiner på byggeplass',
      content: `## Maskiner på byggeplass

Større maskiner krever sertifisering og opplæring.

**Gravemaskin**
Graver fundamenter, grøfter, planerer tomt. Krever maskinførersertifikat.

**Hjullaster**
Laster, transporterer, planerer masser. Krever sertifikat.

**Dumper/Minidumper**
Transporterer masse på byggeplass. Enklere modeller krever ikke sertifikat.

**Komprimeringsmaskin:**

**Platevibraplatevibretor**
Komprimerer grus og sand. Brukes under fundamenter og veier.

**Valseutstyr**
Komprimerer større områder.

**Stillas og løfteustyr:**

**Lift/Sakselift**
Hever folk til arbeidshøyde. Krever opplæring.

**Tårnkran**
Løfter tunge materialer. Krever kranførersertifikat.

**Betongblander**
Blander betong/mørtel på stedet. Vanlig på mindre byggeplasser.

**Betonpumpe**
Pumper betong til støpested. Brukes ved større støp.`,
    },
    {
      title: 'Vedlikehold av verktøy',
      content: `## Vedlikehold av verktøy

Godt vedlikehold gir lengre levetid og sikrere arbeid.

**Daglig vedlikehold:**

**Rengjøring**
Fjern sagflis, støv, betongsprut etter bruk. Rene verktøy fungerer bedre.

**Smøring**
Smør bevegelige deler på maskiner. Forhindrer rust.

**Visuell kontroll**
Sjekk for skader, slitte deler, løse deler.

**Oppbevaring**
Tørt og sikkert. Verktøykasse eller verktøyskap.

**Periodisk vedlikehold:**

**Skifte slitedeler**
Sagblad, borb its, slipepapir må skiftes når de er slitt.

**Justering**
Sjekk at maskiner er nøyaktige. Juster ved behov.

**Elektrisk kontroll**
Sjekk kabler, plugger, brytere. Skift hvis skadet.

**Service**
Send maskiner til service etter produsentens anbefaling.

**Skjerping:**

**Sag og høveljern**
Skjerp kniver og sagblad med slipemaskin eller slip estein.

**Sikkerhet:**
- Aldri bruk defekt verktøy
- Merk defekt verktøy slik at andre ikke bruker det
- Reparer eller kast
- Hold verktøy utilgjengelig for uvedkommende`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-6-ex-1',
      task: 'Hva er forskjellen på vater og lodd?',
      solution: 'Vater sjekker om noe er horisontalt (vannrett). Lodd sjekker om noe er vertikalt (loddrett). Begge er nødvendige for å sikre at konstruksjoner er rette.',
    },
    {
      id: 'bygg-anlegg-vg1-6-ex-2',
      task: 'Hvorfor må vi bruke vernebriller når vi bruker elektriske verktøy?',
      solution: 'Vernebriller beskytter øynene mot flis, støv, gnister og løse partikler som kan sprute fra verktøyet. Øyeskader kan være permanente, så verneutstyr er avgjørende.',
    },
    {
      id: 'bygg-anlegg-vg1-6-ex-3',
      task: 'Nevn tre daglige vedlikeholdsoppgaver for verktøy.',
      solution: '1) Rengjøring - fjern støv og rester, 2) Smøring - smør bevegelige deler, 3) Visuell kontroll - sjekk for skader og slitte deler.',
    },
    {
      id: 'bygg-anlegg-vg1-6-ex-4',
      task: 'Hvilken sag bruker du til å sage kurver og utskjæringer?',
      solution: 'Stikksag brukes til å sage kurver og utskjæringer. Den har et smalt sagblad som kan følge buede linjer.',
    },
    {
      id: 'bygg-anlegg-vg1-6-ex-5',
      task: 'Hva skal du gjøre hvis du oppdager at et elektrisk verktøy har skadet kabel?',
      solution: 'Koble fra strømmen umiddelbart, merk verktøyet som defekt slik at andre ikke bruker det, og send til reparasjon eller kast det. Aldri bruk elektrisk verktøy med skadet kabel - livsfarlig!',
    },
  ],
  keyTerms: [
    { term: 'Vater', definition: 'Verktøy som sjekker om noe er horisontalt (vannrett).' },
    { term: 'Lodd', definition: 'Verktøy som sjekker om noe er vertikalt (loddrett).' },
    { term: 'Borhammer', definition: 'Elektrisk verktøy som borer i betong og stein med slag.' },
    { term: 'Sirkelsag', definition: 'Elektrisk sag med rundt blad for rette snitt.' },
    { term: 'Stikksag', definition: 'Elektrisk sag for kurver og utskjæringer.' },
    { term: 'Spikerpistol', definition: 'Verktøy som skyter spiker med trykkluft eller gass.' },
  ],
};

// ============================================================================
// Kapittel 7: HMS og sikkerhet
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_7: TextbookChapter = {
  id: 'bygg-anlegg-vg1-7',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '7',
  title: 'HMS og sikkerhet',
  description: 'Sikker arbeidsmetode på byggeplass.',
  estimatedMinutes: 50,
  competenceGoals: [
    'arbeide sikkert på byggeplass',
    'kjenne til HMS-regelverk',
  ],
  sections: [
    {
      title: 'HMS i byggebransjen',
      content: `## HMS i byggebransjen

HMS (Helse, Miljø og Sikkerhet) er avgjørende i byggebransjen. Byggeplassen er en av de farligste arbeidsplassene.

**Hvorfor er HMS viktig?**
- Forebygge ulykker og dødsfall
- Redusere arbeidsrelaterte sykdommer
- Beskytte miljøet
- Sikre et godt arbeidsmiljø
- Overholde lovverk
- Redusere kostnader ved skader

**Statistikk:**
Byggebransjen har høy ulykkesfrekvens. Vanlige ulykker:
- Fall fra høyder
- Treff av gjenstander
- Klem mellom gjenstander
- Snubling og fall på same plan
- Elektriske ulykker

**Lovverk:**

**Arbeidsmiljøloven**
Hovedloven for arbeidsmiljø i Norge. Gir rettigheter og plikter for arbeidsgivere og arbeidstakere.

**Byggherreforskriften (SHA)**
Sikkerhet, Helse og Arbeidsmiljø på bygge- og anleggsplasser. Krever SHA-plan.

**Internkontrollforskriften**
Arbeidsgiveren må ha system for å sikre at HMS ivaretas.

**Byggeforfatter (TEK17)**
Tekniske krav til byggverk.`,
    },
    {
      title: 'Personlig verneutstyr',
      content: `## Personlig verneutstyr (PVU)

PVU beskytter deg mot farer på byggeplass.

**Obligatorisk PVU:**

**Hjelm**
Beskytter hodet mot fall ende gjenstander og støt.
- Må være godkjent (CE-merket)
- Juster riktig (ikke for løs eller stram)
- Skift ved skade eller etter 5 år

**Vernesko**
Støttøtte, sklisikre, beskytter mot spiker.
- S3-klasse (vanligst på byggeplass)
- Gjennomstikkesikker såle
- Tåvern av stål eller kompositt

**Vernebriller**
Beskytter øyne mot støv, flis, gnister.
- Bruk ved saging, boring, sliping
- Må være sklisikre og komfortable

**Hørselsvern**
Beskytter mot støyskader.
- Bruk ved støy over 80 dB
- Ørepropper eller ørekokker
- Støy skader hørsel permanent

**Vernehansker**
Beskytter hender mot kutt, skrubber, kjemikalier.
- Ulike typer til ulike oppgaver
- Skift når slitt

**Støvmaske/åndedrettsvern**
Beskytter mot farlig støv og partikler.
- P2-maske ved støv fra saging, sliping
- P3-maske ved farlige materialer (asbest, silika)

**Refleksvest**
Gjør deg synlig. Obligatorisk i trafikkerte områder.

**Annet PVU:**
- Kneputervern (ved arbeid på kne)
- Fallsikringsutstyr (ved arbeid i høyden)
- Ansiktsskjerm (ved sliping, sveising)`,
    },
    {
      title: 'Sikker arbeidspraksis',
      content: `## Sikker arbeidspraksis

Riktig arbeidsmetode forhindrer ulykker.

**Arbeid i høyden:**

**Aldri jobb i høyden uten sikring!**
- Bruk stillas, lift eller stige
- Fallsikringsutstyr over 2 meter
- Aldri stå på ustabil base

**Stillas:**
- Må være godkjent og forsvarlig oppbygd
- Rekkverk på alle sider
- Fast underlag
- Kontrollert før bruk

**Stige:**
- Minst 1 meter over arbeidspunkt
- 75-graders vinkel (1:4 forhold)
- Sikre topp og bunn
- Aldri stå på øverste trinn

**Elektrisk sikkerhet:**

**Farlige spenninger:**
- 230V kan drepe
- Våte omgivelser øker fare
- Beskadigede kabler er livsfarlige

**Sikkerhet:**
- Bruk jordfeilbryter (FO-bryter)
- Kontroller utstyr før bruk
- Aldri jobb på anlegg under spenning
- Meld fra om defekt utstyr

**Løfting:**

**Riktig løfteteknikk:**
- Bøy i knær, ikke i ryggen
- Hold byrden nær kroppen
- Snu med føttene, ikke med ryggen
- Be om hjelp ved tunge løft

**Hjelpemidler:**
- Bruk tralle, skanevogn
- Løft mekanisk der mulig

**Orden og rydde:**
- Ryddig byggeplass = trygg byggeplass
- Fjern søppel og rester
- Lagre materialer forsvarlig
- Sikre farlige områder`,
    },
    {
      title: 'Førstehjel p og beredskap',
      content: `## Førstehjelp og beredskap

Ved ulykke kan riktig førstehjelp redde liv.

**Nødnummer:**
- 113: Politiet
- 110: Brannvesen
- 112: Ambulanse

**Ved ulykke:**

**1. Sikre situasjonen**
- Stopp arbeidet
- Sikre området (slik at ikke flere skades)
- Vurder faren

**2. Tilkall hjelp**
- Ring 112/113
- Gi klar beskjed om sted og skade
- Følg instruksjoner fra operatør

**3. Førstehjelp**
- Sjekk bevissthet og pust
- Fri luftveier
- Stopp blødning (trykk direkte på såret)
- Ikke flytt skadede (ved mistanke om rygg-/nakkeskade)

**Førstehjelpsutstyr:**
Byggeplassen må ha:
- Førstehjelpsskrinn
- Brannslokkingsapparat
- Øyeskyll
- Nødtelefon

**HLR (Hjerte-lungeredning):**
Ved hjertestans:
1. Sjekk bevissthet og pust
2. Ring 112
3. 30 brystkompresjoner, 2 innblåsninger
4. Fortsett til ambulanse kommer
5. Bruk hjertestarter (AED) hvis tilgjengelig

**Forbrenninger:**
- Kjøl med lunkent vann i 20 minutter
- Dekk med ren duk
- Søk lege ved alvorlige brannsår

**Kutt og sår:**
- Stopp blødning (trykk med ren duk)
- Rengjør
- Bandasjer
- Søk lege ved dype kutt`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-7-ex-1',
      task: 'Nevn fem typer obligatorisk verneutstyr på byggeplass.',
      solution: '1) Hjelm, 2) Vernesko, 3) Vernebriller, 4) Hørselsvern, 5) Refleksvest. Andre gyldige: Vernehansker, støvmaske.',
    },
    {
      id: 'bygg-anlegg-vg1-7-ex-2',
      task: 'Fra hvilken høyde må du bruke fallsikringsutstyr?',
      solution: 'Fra 2 meters høyde må du bruke fallsikringsutstyr. Dette kan være stillas med rekkverk, lift, eller sele med line.',
    },
    {
      id: 'bygg-anlegg-vg1-7-ex-3',
      task: 'Hva er riktig løfteteknikk for å unngå ryggskader?',
      solution: 'Bøy i knærne (ikke i ryggen), hold byrden nær kroppen, snu med føttene (ikke vri ryggen), og be om hjelp ved tunge løft.',
    },
    {
      id: 'bygg-anlegg-vg1-7-ex-4',
      task: 'Hva står SHA for, og hva innebærer det?',
      solution: 'SHA står for Sikkerhet, Helse og Arbeidsmiljø. Det er en forskrift som krever at alle byggeprosjekter har en SHA-plan som beskriver hvordan HMS skal ivaretas på byggeplassen.',
    },
  ],
  keyTerms: [
    { term: 'HMS', definition: 'Helse, Miljø og Sikkerhet - systematisk arbeid for trygg arbeidsplass.' },
    { term: 'PVU', definition: 'Personlig Verneutstyr - utstyr som beskytter arbeidstaker.' },
    { term: 'SHA', definition: 'Sikkerhet, Helse og Arbeidsmiljø - forskrift for byggeplasser.' },
    { term: 'Fallsikring', definition: 'Utstyr og tiltak for å hindre fall fra høyden.' },
    { term: 'Jordfeilbryter', definition: 'Sikkerhetsutstyr som bryter strømmen ved feil (FO-bryter).' },
    { term: 'HLR', definition: 'Hjerte-lungeredning - livreddende førstehjelp ved hjertestans.' },
  ],
};

// ============================================================================
// Kapittel 8: Isolasjon og tetting
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_8: TextbookChapter = {
  id: 'bygg-anlegg-vg1-8',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '8',
  title: 'Isolasjon og tetting',
  description: 'Energi og fuktsperre i bygninger.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå isolasjonsprinsipper',
    'kjenne til dampsperre og lufttetting',
  ],
  sections: [
    {
      title: 'Isolasjonsmaterialer',
      content: `## Isolasjonsmaterialer

Isolasjon reduserer varmetap og gir lavere energikostnader.

**Hvorfor isolere?**
- Spare energi og penger
- Bedre innemiljø (jevn temperatur)
- Redusere CO2-utslipp
- Lovkrav (TEK17)

**Isolasjonstyper:**

**Mineralull (glasull/steinull)**
Mest brukt i Norge.
- Ikke brennbart
- God lyddemping
- Relativt billig
- Tåler ikke fukt (mister isolasjonsevne)
- Lambda-verdi: 0,035-0,040 W/mK

**EPS (Eksandert polystyren - Isopor)**
Hvite plater, lette.
- Meget god isolasjonsevne
- Tåler fukt godt
- Lett å arbeide med
- Brennbart
- Lambda: 0,035-0,040 W/mK

**XPS (Ekstrudert polystyren)**
Grønne/blå plater, tettere enn EPS.
- Bedre isolasjonsevne enn EPS
- Tåler trykk godt
- Brukes i fundament, gulv på mark
- Lambda: 0,030-0,035 W/mK

**PIR/PUR (Polyuretan)**
Gule plater, beste isolasjonsevne.
- Tynnere isolasjon ved samme effekt
- Dyrt
- Brukes der plass er begrenset
- Lambda: 0,020-0,025 W/mK

**Celluloseisolasjon**
Miljøvennlig, laget av resirkulert papir.
- Bærekraftig
- God lyddemping
- Blåses inn i hulrom
- Lambda: 0,040 W/mK

**Lambda-verdi (λ):**
Beskriver isolasjonsevne. Jo lavere verdi, jo bedre isolerer materialet.`,
    },
    {
      title: 'Isolering av vegg, tak og gulv',
      content: `## Isolering av vegg, tak og gulv

Ulike bygningsdeler isoleres forskjellig.

**Ytterveggisolering:**

**Bindingsverk:**
Mineralull mellom stenderne (148-198 mm). Eventuelt tilleggsisolasjon utvendig eller innvendig.

**Hulrom i mur:**
EPS-plater eller innblåst isolasjon i hulrom.

**Kompakt konstruksjon:**
Tykk isolasjon utvendig med kledning eller puss.

**Takisolering:**

**Kaldt loft:**
Isolasjon i loftsgulvet. Enklest og billigst. Loftet blir kaldt.

**Varmtoft:**
Isolasjon mellom og under sperrene. Gir brukbart loftsrom.

**Kompakt tak:**
Isolasjon oppå sperrene. Brukes ved flate tak.

**Krav:**
Minimum 300 mm mineralull eller tilsvarende (TEK17).

**Gulvisolering:**

**Tregulv på bjelkelag:**
Mineralull mellom bjelkene.

**Plate på mark:**
EPS eller XPS under betongplaten.

**Tykkelser:**
- Gulv på grunn: 200-300 mm
- Yttervegg: 150-250 mm
- Tak: 300-500 mm

**Kuldebroer:**
Steder der isolasjonen brytes (f.eks. ved bjelkeender, hjørner). Må minimeres for å unngå varmetap og fuktskader.`,
    },
    {
      title: 'Dampsperre og lufttetting',
      content: `## Dampsperre og lufttetting

Fukt og luftlekkasjer er bygningers største fiende.

**Dampsperre:**

**Hva er dampsperre?**
Plastfolie (ofte 0,15-0,20 mm) på varm side av isolasjonen. Hindrer fukt fra inneluften fra å trenge inn i isolasjonen.

**Hvorfor dampsperre?**
Varm inneluft inneholder fukt (damp). Når dampen møter kald isolasjon kondenserer den til vann. Vått isolasjon mister isolasjonsevne og kan gi råte og mugg.

**Plassering:**
- Yttervegger: På innesiden av isolasjonen
- Tak: Under innertak
- Gulv: Over isolasjonen

**Tetting:**
Dampsperre må være helt tett. Overganger, hull for kabler og rør må tettes med:
- Dampsperretape
- Dampsperre mansjetter
- Tetningsmasse

**Vindsperre:**
På kald side av isolasjonen (utvendig). Stopper vind, men slipper gjennom damp.

**Lufttetting:**

**Luftlekkasjer:**
Utett bygg gir:
- Stort varmetap (opptil 25% av totalt tap)
- Trekk og dårlig komfort
- Fuktskader (varm, fuktig luft lekker ut i isolasjonen)

**Tettepunkter:**
- Rundt vinduer og dører
- Gjennomføringer (rør, kabler)
- Overganger (vegg/gulv, vegg/tak)
- Stikkontakter og bryttere

**Lekkasjesøking:**
Trykktest (blowerdoor-test) finner lekkasjer. Anbefalt før innvendig kledning.`,
    },
    {
      title: 'Energikrav og U-verdi',
      content: `## Energikrav og U-verdi

TEK17 setter krav til bygningers energibruk.

**U-verdi:**
Beskriver hvor mye varme som går gjennom en bygningsdel. Måles i W/m²K.

**Jo lavere U-verdi, jo bedre isolasjon.**

**Krav til U-verdi (TEK17):**
- Yttervegg: U ≤ 0,18 W/m²K
- Tak: U ≤ 0,13 W/m²K
- Gulv på grunn: U ≤ 0,10 W/m²K
- Vinduer: U ≤ 0,80 W/m²K

**Beregning:**
U = 1 / R (R er varmemotstanden)
R = d / λ (d = tykkelse, λ = lambda-verdi)

**Eksempel:**
200 mm mineralull med λ = 0,040 W/mK
R = 0,20 / 0,040 = 5 m²K/W
U = 1 / 5 = 0,20 W/m²K

**Energimerking:**
Bygninger energimerkes A-G (A best, G dårligst). Basert på beregnet og målt energibruk.

**Passivhus:**
Ekstra strengt energikrav:
- Netto energibehov < 15 kWh/m²/år
- Tykkere isolasjon
- Bedre vinduer
- Varmegjenvinning`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-8-ex-1',
      task: 'Hva er forskjellen på dampsperre og vindsperre?',
      solution: 'Dampsperre er på varm side (innvendig) og hindrer fukt fra inneluften fra å trenge inn i isolasjonen. Vindsperre er på kald side (utvendig), stopper vind men slipper gjennom damp slik at isolasjonen kan tørke ut.',
    },
    {
      id: 'bygg-anlegg-vg1-8-ex-2',
      task: 'Hvorfor mister mineralull isolasjonsevnen hvis den blir våt?',
      solution: 'Mineralull isolerer ved å ha luftlommer mellom fibrene. Når den blir våt fyller vannet luftlommene, og vann leder varme mye bedre enn luft. Derfor mister våt mineralull isolasjonsevnen drastisk.',
    },
    {
      id: 'bygg-anlegg-vg1-8-ex-3',
      task: 'Hvor tykk må takets isolasjon minimum være ifølge TEK17?',
      solution: 'Taket må ha U-verdi ≤ 0,13 W/m²K, som typisk tilsvarer minimum 300 mm mineralull eller tilsvarende isolasjonsmateriale.',
    },
    {
      id: 'bygg-anlegg-vg1-8-ex-4',
      task: 'Hva er en kuldebro, og hvorfor er det et problem?',
      solution: 'En kuldebro er et sted der isolasjonen brytes, for eksempel ved bjelkeender eller hjørner. Det gir lokalt varmetap og kan føre til at overflaten blir kald, noe som kan gi kondens, mugg og fuktskader.',
    },
    {
      id: 'bygg-anlegg-vg1-8-ex-5',
      task: 'Forklar hva Lambda-verdi (λ) er.',
      solution: 'Lambda-verdi beskriver materialets evne til å lede varme. Jo lavere lambda, jo bedre isolerer materialet. Måles i W/mK. Eksempel: Mineralull har λ ≈ 0,040 W/mK, PIR har λ ≈ 0,022 W/mK (bedre).',
    },
  ],
  keyTerms: [
    { term: 'Isolasjon', definition: 'Materiale som reduserer varmetap ved å ha lav varmeledningsevne.' },
    { term: 'Dampsperre', definition: 'Plastfolie på varm side av isolasjon som hindrer fukt fra å trenge inn.' },
    { term: 'Vindsperre', definition: 'Duk på kald side av isolasjon som stopper vind, men slipper gjennom damp.' },
    { term: 'U-verdi', definition: 'Mål på varmegjennomgang gjennom bygningsdel, W/m²K. Lavere = bedre.' },
    { term: 'Lambda-verdi', definition: 'Materialets varmeledningsevne, W/mK. Lavere = bedre isolasjon.' },
    { term: 'Kuldebro', definition: 'Sted der isolasjonen brytes, gir lokalt varmetap.' },
    { term: 'Mineralull', definition: 'Isolasjonsmateriale av glass- eller steinfiber, vanligst i Norge.' },
  ],
};

// ============================================================================
// Kapittel 9: Bygningsfysikk
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_9: TextbookChapter = {
  id: 'bygg-anlegg-vg1-9',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '9',
  title: 'Bygningsfysikk',
  description: 'Varme, fukt og lyd i bygninger.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå bygningsfysiske prinsipper',
    'kjenne til fukt- og lydproblematikk',
  ],
  sections: [
    {
      title: 'Varmetransport',
      content: `## Varmetransport

Varme transporteres på tre måter: ledning, stråling og konveksjon.

**Varmeledning:**
Varme ledes gjennom materialer. Metall leder godt, isolasjon leder dårlig.

**Eksempel:**
Varme fra varm inneluft ledes gjennom veggen til kald uteluft.

**Lambda-verdi (λ)** beskriver materialets evne til å lede varme.

**Varmestråling:**
Varmestråler går gjennom luft og rom. Solen varmer huset via stråling.

**Konveksjon:**
Varm luft stiger, kald luft synker. Dette skaper luftbevegelser (konveksjon).

**Eksempel:**
Varm luft ved varmeovnen stiger opp, kjølig luft ved vindu synker ned. Dette skaper luftsirkulasjon.

**Varmetap i bygninger:**
- Transmisjon: Varme som ledes gjennom vegger, tak, gulv, vinduer (60-70%)
- Ventilasjon: Varm luft ut, kald luft inn (20-30%)
- Luftlekkasjer: Utett bygg (5-15%)

**Reduksjon av varmetap:**
- God isolasjon (reduserer transmisjon)
- Tette bygg (reduserer lekkasjer)
- Varmegjenvinning (reduserer ventilasjonstap)`,
    },
    {
      title: 'Fukt og kondensering',
      content: `## Fukt og kondensering

Fukt er bygningers største utfordring. Fuktskader koster milliarder årlig.

**Fuktkilder:**
- Mennesker (ånding, svette)
- Matlaging, dusj, klesvask
- Dyr og planter
- Lekkasjer (tak, rør, grunnfukt)
- Byggfukt (fukt fra betong, mørtel)

**Relativ luftfuktighet (RF):**
Prosent av maksimal fukt luften kan inneholde ved gitt temperatur.

**Dugpunkt:**
Temperatur der luften blir mettet og fukt kondenserer (blir til vann).

**Eksempel:**
Varm dusj (høy RF). Når dusj-damp møter kald vegg/speil kondenserer den.

**Kondensering i bygningskonstruksjon:**

Varm inneluft (+20°C, 50% RF) trenger inn i veggen. Når den kommer til kaldere lag synker temperaturen. Ved dugpunktet kondenserer fukt i isolasjonen.

**Slik forhindres:**
- Dampsperre på varm side (hindrer fukt inn i isolasjonen)
- Vindsperre på kald side (slipper fukt ut)
- God ventilasjon (fjerner fuktig luft)

**Kapillærfukt:**
Vann suges opp i porøse materialer (tre, tegl, betong). Derfor må fundamenter beskyttes med membran, og utvendig kledning holdes over terreng.

**Fuktsikre konstruksjoner:**
- Riktig lagoppbygging (dampsperre, vindsperre)
- Drenering rundt huset
- Takutstikk (beskytter fasade)
- Slakt terreng (vann bort fra hus)`,
    },
    {
      title: 'Lyd og lyddemping',
      content: `## Lyd og lyddemping

God lyddemping gir bedre inneklima og mindre stress.

**Lyd:**
Lyd er trykkbølger i luft. Måles i desibel (dB).

**Lydnivåer:**
- 30 dB: Stille bibliotek
- 60 dB: Normal samtale
- 80 dB: Trafikkstøy
- 100 dB: Bygningsplass, hørselsskadelig
- 120 dB: Smertegrense

**Lydtyper:**

**Luftlyd:**
Lyd som sprer seg gjennom luft: Stemmer, musikk, TV.

**Kroppslyd/trinnlyd:**
Lyd som sprer seg gjennom konstruksjonen: Skritt i gulvet, banking i veggen.

**Lyddemping:**

**Mot luftlyd:**
- Tunge materialer (masse): Betongvegg stopper bedre enn lettvegg
- Luftspalter: Doble vegger med luftspalt
- Absorpsjon: Porøse materialer (mineralull)

**Mot kroppslyd/trinnlyd:**
- Myk belegg: Teppe på gulvet
- Fløtende gulv: Gulv som ikke har direkte kontakt med bærekonstruksjon
- Lydisolasjon: Mineralull under gulvet

**Krav (TEK17):**

**Luftlyd mellom leiligheter:**
Minimum 55 dB lyddemping (R'w ≥ 55 dB)

**Trinnlyd mellom etasjer:**
Maksimum 53 dB trinnlyd (L'n,w ≤ 53 dB)

**Praktisk lyddemping:**
- Mineralull mellom loftsbjelker (demper trinnlyd)
- Dobbel gipsvegg med mineralull (demper luftlyd)
- Fløtende gulv (gulv på isolasjonsmatte)
- Tette dører og vinduer`,
    },
    {
      title: 'Ventilasjon og inneklima',
      content: `## Ventilasjon og inneklima

God ventilasjon er nødvendig for helse og trivsel.

**Hvorfor ventilere?**
- Fjerne fuktig luft
- Fjerne forurensning (CO2, støv, lukter)
- Tilføre frisk luft (oksygen)
- Unngå mugg og råte

**Ventilasjonstyper:**

**Naturlig ventilasjon:**
Luftsprekker, vinduer, dører. Avhengig av vind og temperatur.
- Billig
- Ingen drift
- Uforutsigbar
- Stort varmetap

**Mekanisk ventilasjon:**

**Avtrekksventilasjon:**
Vifte suger luft ut (bad, kjøkken). Frisk luft kommer inn via sprekker/ventiler.
- Enkelt
- Stort varmetap

**Balansert ventilasjon:**
Vifte blåser ut, vifte blåser inn. Kontrollert luftmengde.
- God kontroll
- Kan ha varmegjenvinning

**Balansert med varmegjenvinning (FTX):**
Varme fra utluften brukes til å varme innluften (varmeveksler).
- Sparer energi (80-90% gjenvinning)
- Reduserer driftskostnader
- Mest vanlig i nye boliger

**Luftmengder:**
Krav: Minimum 1,2 m³/h per m² oppvarmet areal, eller 26 m³/h per person.

**Praktisk:**
Små boliger: Ca. 0,5 luftskifter per time.

**Inneklima:**
- Temperatur: 20-22°C (vinter)
- Relativ fuktighet: 30-50%
- CO2-nivå: Under 1000 ppm
- Støvkonsentrasjon: Lav`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-9-ex-1',
      task: 'Nevn de tre måtene varme transporteres på.',
      solution: '1) Varmeledning - gjennom materialer, 2) Varmestråling - via stråler, 3) Konveksjon - via luftbevegelser (varm luft stiger).',
    },
    {
      id: 'bygg-anlegg-vg1-9-ex-2',
      task: 'Hva er dugpunkt, og hvordan henger det sammen med kondensering?',
      solution: 'Dugpunkt er temperaturen der luft blir mettet med fukt og fukt kondenserer til vann. Når varm, fuktig luft avkjøles til dugpunktet, kondenserer fukten. Dette skjer for eksempel på kaldt speil etter dusj.',
    },
    {
      id: 'bygg-anlegg-vg1-9-ex-3',
      task: 'Hva er forskjellen på luftlyd og kroppslyd, og hvordan dempes de?',
      solution: 'Luftlyd sprer seg gjennom luft (stemmer, musikk), dempes med masse og absorbering. Kroppslyd sprer seg gjennom konstruksjonen (skritt i gulv), dempes med myk belegg, fløtende gulv og isolasjon.',
    },
    {
      id: 'bygg-anlegg-vg1-9-ex-4',
      task: 'Hva er fordelen med balansert ventilasjon med varmegjenvinning (FTX)?',
      solution: 'FTX bruker varme fra utluften til å varme innluften i en varmeveksler. Dette gjenvin ner 80-90% av varmen og reduserer energikostnadene betydelig sammenlignet med vanlig avtrekksventilasjon.',
    },
    {
      id: 'bygg-anlegg-vg1-9-ex-5',
      task: 'Hvorfor er god ventilasjon viktig for et sunt inneklima?',
      solution: 'God ventilasjon fjerner fuktig luft (forhindrer mugg), fjerner forurensning som CO2 og lukter, og tilføre frisk luft med oksygen. Dette gir sunnere og bedre inneklima.',
    },
  ],
  keyTerms: [
    { term: 'Varmeledning', definition: 'Transport av varme gjennom materialer.' },
    { term: 'Konveksjon', definition: 'Transport av varme via luftbevegelser (varm luft stiger).' },
    { term: 'Dugpunkt', definition: 'Temperatur der luft blir mettet og fukt kondenserer.' },
    { term: 'Relativ fuktighet', definition: 'Prosent av maksimal fukt luften kan inneholde ved gitt temperatur.' },
    { term: 'Luftlyd', definition: 'Lyd som sprer seg gjennom luft (stemmer, musikk).' },
    { term: 'Kroppslyd', definition: 'Lyd som sprer seg gjennom konstruksjonen (skritt, banking).' },
    { term: 'FTX', definition: 'Balansert ventilasjon med varmegjenvinning (Från/Till/X-veksler).' },
  ],
};

// ============================================================================
// Kapittel 10: Prosjektplanlegging
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_10: TextbookChapter = {
  id: 'bygg-anlegg-vg1-10',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '10',
  title: 'Prosjektplanlegging',
  description: 'Planlegging av byggeprosjekter.',
  estimatedMinutes: 60,
  competenceGoals: [
    'planlegge et byggeprosjekt',
    'beregne kostnader og tidsbruk',
  ],
  sections: [
    {
      title: 'Byggeprosjektets faser',
      content: `## Byggeprosjektets faser

Et byggeprosjekt består av flere faser fra idé til ferdig bygg.

**1. Konseptfase (Idéfase)**
- Skissere behov og ønsker
- Vurdere alternativer
- Grov kostnadsestimering
- Velge løsning

**2. Prosjekteringsfase**
- Arkitekt tegner bygget
- Ingeniør dimensjonerer konstruksjon
- RIV-fag (Rør, Elektro, Ventilasjon) planlegger
- Søknader og godkjenninger
- Detaljerte tegninger
- Nøyaktig kalkyle

**3. Entreprisefase (Bygging)**
- Klargjøring av tomt
- Grunnarbeid og fundament
- Oppføring av rå bygg
- Taktekking
- Innvendig arbeid
- Installasjoner

**4. Ferdigstillelse**
- Sluttarbeider
- Kontroll og testing
- Overtakelse
- Rydding av byggeplass

**5. Bruk og drift**
- Drift og vedlikehold
- Garantiperiode (5 år)

**Aktører i byggeprosjekt:**
- **Byggherren**: Eier, bestiller bygget
- **Prosjektleder**: Styrer prosjektet
- **Arkitekt**: Tegner bygget
- **Ingeniør**: Dimensjonerer konstruksjon
- **Entreprenør**: Utfører byggearbeidet
- **Underentreprenører**: RIV-fag, murer, snekker, etc.
- **Myndigheter**: Kommunen (byggesa k, tilsyn)`,
    },
    {
      title: 'Fremdriftsplanlegging',
      content: `## Fremdriftsplanlegging

Tidsplanlegging sikrer at prosjektet blir ferdig i tide.

**Gantt-diagram:**
Visuell plan der aktiviteter vises som søyler over tid.

**Hvordan lage fremdriftsplan:**

**1. List opp aktiviteter**
Alle arbeidsoppgaver som må gjøres.

**Eksempel (enkelt hytteprosjekt):**
- Klargjøring tomt (1 uke)
- Graving fundament (1 uke)
- Støp fundament (1 uke + 1 uke herdning)
- Bygging vegger (3 uker)
- Taktekking (2 uker)
- Vinduer og dører (1 uke)
- Elektro og rør (2 uker)
- Isolasjon (2 uker)
- Innvendig kledning (2 uker)
- Maling og finish (1 uke)

**2. Fastsett varighet**
Hvor lang tid tar hver aktivitet?

**3. Avhengigheter**
Hvilke aktiviteter må være ferdig før andre kan starte?
- Fundament MÅ være ferdig før vegger kan bygges
- Vegger MÅ være ferdig før tak kan legges

**4. Kritisk linje**
Lengste vei gjennom prosjektet. Forsinkelse på kritisk linje forsinker hele prosjektet.

**5. Parallellaktiviteter**
Noen aktiviteter kan gjøres samtidig:
- Mens elektriker jobber i én del av huset, kan snekker jobbe i en annen

**Buffer:**
Legg inn buffertid for uforutsette hendelser (dårlig vær, forsinkede leveranser).`,
    },
    {
      title: 'Kostnadsberegning',
      content: `## Kostnadsberegning

Nøyaktig kalkyle er avgjørende for økonomi.

**Kostnadstyper:**

**Materialkostnader**
Alle materialer som trengs: Trevirke, betong, spiker, isolasjon, etc.

**Timeverk (arbeidskraft)**
Timepris for håndverkere × antall timer.

**Maskinleie**
Leiepris for gravemaskin, lift, etc.

**Indirekte kostnader**
- Rigg og drift av byggeplass
- Strøm, vann
- Forsikring
- Avfallshåndtering
- Prosjektledelse

**Kalkulasjon:**

**Enhetspr iskalkyle:**
Beregn pris per enhet.

**Eksempel:**
- Muring: 500 kr per m² ferdig mur
- Areal: 100 m² vegg
- Totalt: 100 × 500 = 50 000 kr

**Detaljkalkyle:**
Regn ut alt i detalj:
- Antall murblokker
- Mørtel
- Timer til muring
- Stillas

**Påslag:**
- Risikotillegg: 5-10% (uforutsett)
- Påslag/fortjeneste: 10-20%

**Eksempel detaljkalkyle (10 m² mur):**
- 200 murblokker à 25 kr = 5 000 kr
- 5 sekker mørtel à 120 kr = 600 kr
- 15 timer arbeid à 600 kr = 9 000 kr
- Stilllasleie = 1 000 kr
- SUM = 15 600 kr
- Risiko 10% = 1 560 kr
- Påslag 15% = 2 574 kr
- **Totalt: 19 734 kr**`,
    },
    {
      title: 'Ressursplanlegging',
      content: `## Ressursplanlegging

Riktig ressursbruk sikrer effektivitet.

**Menneskelige ressurser:**

**Kompetanse:**
- Riktig fagfolk til riktig jobb
- Murer til murarbeid, snekker til trearbeid

**Antall:**
- Nok folk til å holde fremdrift
- Ikke for mange (trenger seg)

**Planlegging:**
- Hvem skal gjøre hva når?
- Unngå at folk venter på hverandre

**Materielle ressurser:**

**Materialer:**
- Bestill i god tid
- Lagerplass på byggeplass
- Just-in-time levering (unngå lager)

**Maskiner:**
- Lei når det trengs
- Returnere når ferdig (dyrt å ha stående)

**Verktøy:**
- Sørg for at alle har riktig verktøy
- Vedlikehold og reparasjon

**Logistikk:**

**Byggeplassrigging:**
- Brakker (velferdsbrakke, lagerbrakke)
- Toalett
- Strøm og vann
- Gjerder og sikring

**Materialflyt:**
- Hvor leveres materialer?
- Hvor lagres?
- Hvordan transporteres på plass?
- Unngå unødvendig flytting

**Avfallshåndtering:**
- Containere for ulike avfallstyper
- Sortering (tre, metall, restavfall)
- Tømming

**Sikkerhet:**
- HMS-plan
- Verneutstyr
- Opplæring
- Rutiner`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-10-ex-1',
      task: 'Nevn de fem hovedfasene i et byggeprosjekt.',
      solution: '1) Konseptfase (idéutvikling), 2) Prosjekteringsfase (tegning og planlegging), 3) Entreprisefase (bygging), 4) Ferdigstillelse, 5) Bruk og drift.',
    },
    {
      id: 'bygg-anlegg-vg1-10-ex-2',
      task: 'Hva er kritisk linje i et byggeprosjekt?',
      solution: 'Kritisk linje er lengste vei gjennom prosjektet, dvs. rekkefølgen av aktiviteter som tar lengst tid. Forsinkelse på kritisk linje forsinker hele prosjektet.',
    },
    {
      id: 'bygg-anlegg-vg1-10-ex-3',
      task: 'Du skal mure 50 m² vegg. Enhetsprisen er 450 kr/m². Beregn totalkostnad.',
      solution: '50 m² × 450 kr/m² = 22 500 kr. Totalkostnad er 22 500 kr.',
    },
    {
      id: 'bygg-anlegg-vg1-10-ex-4',
      task: 'Hvorfor legger vi inn buffertid i fremdriftsplanen?',
      solution: 'Buffertid er reserve for uforutsette hendelser som dårlig vær, forsinkede leveranser, sykdom eller problemer som oppstår. Uten buffer vil små forsinkelser forsinke hele prosjektet.',
    },
    {
      id: 'bygg-anlegg-vg1-10-ex-5',
      task: 'Hva er forskjellen på direkte og indirekte kostnader i et byggeprosjekt?',
      solution: 'Direkte kostnader er materialer og arbeidskraft som går direkte til bygget. Indirekte kostnader er rigg, drift, forsikring, prosjektledelse, avfall - kostnader som ikke er direkte knyttet til konstruksjonen.',
    },
    {
      id: 'bygg-anlegg-vg1-10-ex-6',
      task: 'En aktivitet krever 3 håndverkere i 8 timer. Timeprisen er 650 kr. Beregn arbeidskostnad.',
      solution: '3 personer × 8 timer × 650 kr/time = 15 600 kr. Arbeidskostnad er 15 600 kr.',
    },
  ],
  keyTerms: [
    { term: 'Gantt-diagram', definition: 'Visuell fremdriftsplan der aktiviteter vises som søyler over tid.' },
    { term: 'Kritisk linje', definition: 'Lengste vei gjennom prosjektet, forsinkelse her forsinker alt.' },
    { term: 'Enhetspriskalkyle', definition: 'Kostnadsberegning basert på pris per enhet (kr/m², kr/stk).' },
    { term: 'Påslag', definition: 'Fortjeneste lagt oppå kostnader, vanligvis 10-20%.' },
    { term: 'Risikotillegg', definition: 'Buffer i kalkylen for uforutsette kostnader, vanligvis 5-10%.' },
    { term: 'Byggeplassrigg', definition: 'Klargjøring av byggeplass med brakker, strøm, vann, gjerder.' },
  ],
};

// ============================================================================
// Kapittel 11: Miljø og bærekraft
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_11: TextbookChapter = {
  id: 'bygg-anlegg-vg1-11',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '11',
  title: 'Miljø og bærekraft',
  description: 'Miljøvennlig bygging og gjenbruk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forstå bærekraftig bygging',
    'kjenne til miljøsertifiseringer',
  ],
  sections: [
    {
      title: 'Bærekraftig bygging',
      content: `## Bærekraftig bygging

Byggebransjen står for stor andel av verdens ressursbruk og utslipp. Bærekraftig bygging reduserer miljøpåvirkningen.

**Byggebransjen påvirkning:**
- 40% av energiforbruket
- 30% av avfallet
- 25% av CO2-utslippene
- Stor bruk av naturressurser

**Prinsipper for bærekraftig bygging:**

**1. Energieffektivitet**
- God isolasjon
- Tette bygninger
- Energieffektive vinduer
- Varmegjenvinning
- Passivhus-standard

**2. Bærekraftige materialer**
- Fornybare ressurser (tre)
- Lokale materialer (reduserer transport)
- Resirkulerte materialer
- Miljøvennlig produksjon
- Lang levetid

**3. Vannhåndtering**
- Redusert vannforbruk
- Gjenbruk av gråvann
- Oppsamling av regnvann
- Permeable overflater

**4. Avfallsreduksjon**
- Nøyaktig planlegging (mindre svinn)
- Sortering og gjenvinning
- Gjenbruk av materialer
- Miljøvennlig avfallshåndtering

**5. Inneklima**
- Sunt innemiljø
- God luftkvalitet
- Dagslys
- Komfort

**6. Plassering og transport**
- Nær kollektivtrafikk
- Sykkelveier
- Gode utearealer
- Bevare naturområder`,
    },
    {
      title: 'Miljøsertifiseringer',
      content: `## Miljøsertifiseringer

Sertifiseringer dokumenterer at bygget oppfyller miljøkrav.

**BREEAM-NOR**
(Building Research Establishment Environmental Assessment Method)

Britisk sertifiseringssystem tilpasset Norge. Mest brukt i Norge.

**Kategorier:**
- Energi (25%)
- Inneklima og helse (15%)
- Materialer (12,5%)
- Vann (6%)
- Avfall (7,5%)
- Transport (8%)
- Ledelse (12%)
- Forurensning (10%)
- Økologi (10%)

**Klassifisering:**
- Pass: 30-44%
- Good: 45-54%
- Very Good: 55-69%
- Excellent: 70-84%
- Outstanding: ≥ 85%

**Svanemerket**
Nordisk miljømerke. Strenge krav til materialer, energi, innemiljø.

**Passivhus**
Høy energistandard. Ekstremt lavt energibehov (<15 kWh/m²/år).

**Plusshus**
Produserer mer energi enn det bruker (solceller).

**Miljøfyrtårn**
Sertifisering for bedrifter. Fokus på miljøledelse.

**Fordeler med sertifisering:**
- Dokumentasjon av miljøkvalitet
- Lavere driftskostnader
- Bedre arbeidsmiljø
- Høyere markedsverdi
- Markedsføring`,
    },
    {
      title: 'Sirkulær økonomi i bygg',
      content: `## Sirkulær økonomi i bygg

Sirkulær økonomi handler om å holde ressurser i bruk lengst mulig.

**Lineær økonomi (tradisjonell):**
Ta → Lag → Kast

**Sirkulær økonomi:**
Reduser → Gjenbruk → Resirkul er → Energigjenvinning

**Tiltak for sirkulæritet:**

**Design for demontering**
Bygg slik at komponenter kan demonteres og brukes om igjen:
- Skrudd sammen i stedet for limt/spikret
- Standardiserte dimensjoner
- Enkle sammenføyninger
- Dokumentasjon av materialer

**Gjenbruk av byggematerialer**
- Vinduer, dører
- Trevirke (bjelker, panel)
- Murstein, takstein
- Sanitærutstyr

**Resirkulering**
- Betong knuses til nytt tilslag
- Metallskrot smeltes om
- Isolasjon males ned
- Gips til ny gips

**Byggevare deklarasjoner (EPD)**
Miljødeklarasjon for byggevarer. Viser miljøpåvirkning gjennom hele livsløpet:
- Råvareuttakk
- Produksjon
- Transport
- Bruk
- Avhending

**Materialdatabasen**
Norsk database over byggevarers miljøpåvirkning. Brukes i prosjektering.

**Eksempler på sirkul ære løsninger:**
- Betongplater fra revet bygg brukes i nytt fundament
- Gamle vinduer fra renovering brukes i anneks
- Treverk fra taket blir fasadekledning
- Teglstein vaskes og brukes i ny mur`,
    },
    {
      title: 'Avfallshåndtering på byggeplass',
      content: `## Avfallshåndtering på byggeplass

Byggebransjen produserer store mengder avfall. Riktig håndtering reduserer miljøpåvirkning.

**Avfallstyper:**

**Rent trevirke**
Kan brennes til energi. Må sorteres fra behandlet tre.

**Impregnert/behandlet tre**
Farlig avfall. Må leveres til godkjent mottak.

**Betong og stein**
Knuses til nytt tilslag. Stort gjenvinningspotensial.

**Metall**
Høy gjenvinningsverdi. Separate containere for metall.

**Gips**
Kan resirkuleres til ny gips. Må holdes tørt.

**Isolasjon**
Enkelte typer kan resirkuleres (EPS). Mineralull deponeres.

**Farlig avfall**
- Asbest
- PCB
- Oljer og kjemikalier
- Elektronikk
- Batterier

**Restavfall**
Blandet avfall som ikke kan sorteres. Minimer dette.

**Sortering på byggeplass:**

**Containere:**
- Egen container for hver avfallstype
- Tydelig merking
- Plassering som gjør sortering enkelt

**Miljøstasjon:**
Område på byggeplass med alle containere samlet.

**Ansvar:**
- Hver håndverker sorterer sitt avfall
- Entrepren ør ansvarlig for avfallsplan
- Kommunen kontrollerer

**Avfallsplan:**
Alle større byggeprosjekter må ha avfallsplan som viser:
- Forventet avfallsmengde
- Sorteringsopplegg
- Leveringsmottak
- Ansvar

**Kostnader:**
- Restavfall: Dyrt (deponiavgift)
- Sortert avfall: Billigere, noe gir pant (metall)
- Sortering lønner seg!`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-11-ex-1',
      task: 'Hvor stor andel av verdens energiforbruk står byggebransjen for?',
      solution: 'Byggebransjen står for ca. 40% av verdens energiforbruk, 30% av avfallet og 25% av CO2-utslippene.',
    },
    {
      id: 'bygg-anlegg-vg1-11-ex-2',
      task: 'Hva er BREEAM-NOR, og hva måler det?',
      solution: 'BREEAM-NOR er et miljøsertifiseringssystem for bygninger. Det måler miljøprestasjon innen energi, inneklima, materialer, vann, avfall, transport, ledelse, forurensning og økologi. Bygget klassifiseres fra Pass til Outstanding.',
    },
    {
      id: 'bygg-anlegg-vg1-11-ex-3',
      task: 'Forklar forskjellen mellom lineær økonomi og sirkulær økonomi.',
      solution: 'Lineær økonomi: Ta → Lag → Kast (bruk ressurser én gang). Sirkulær økonomi: Reduser → Gjenbruk → Resirkul er (hold ressurser i bruk lengst mulig ved gjenbruk og resirkulering).',
    },
    {
      id: 'bygg-anlegg-vg1-11-ex-4',
      task: 'Hvorfor er det viktig å sortere bygningsavfall?',
      solution: 'Sortert avfall kan resirkuleres eller brukes til energi, noe som reduserer miljøpåvirkning og deponibruk. Det er også billigere - restavfall koster mer enn sortert avfall på grunn av deponiavgift.',
    },
  ],
  keyTerms: [
    { term: 'Bærekraftig bygging', definition: 'Bygging som minimerer miljøpåvirkning og ivaretar fremtidige generasjoner.' },
    { term: 'BREEAM-NOR', definition: 'Miljøsertifiseringssystem for bygninger, mest brukt i Norge.' },
    { term: 'Passivhus', definition: 'Byggestandard med ekstremt lavt energibehov (<15 kWh/m²/år).' },
    { term: 'Sirkulær økonomi', definition: 'Økonomisk system der ressurser holdes i bruk lengst mulig gjennom gjenbruk og resirkulering.' },
    { term: 'EPD', definition: 'Environmental Product Declaration - miljødeklarasjon for byggevarer.' },
  ],
};

// ============================================================================
// Kapittel 12: Yrkesmuligheter
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_12: TextbookChapter = {
  id: 'bygg-anlegg-vg1-12',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '12',
  title: 'Yrkesmuligheter',
  description: 'Karriereveier innen bygg og anlegg.',
  estimatedMinutes: 45,
  competenceGoals: [
    'kjenne til ulike yrker i bygg og anlegg',
    'forstå veien til fagbrev',
  ],
  sections: [
    {
      title: 'Yrker i bygg og anlegg',
      content: `## Yrker i bygg og anlegg

Bygg- og anleggsbransjen er Norges største fastlandsnæring med over 200 000 ansatte.

**Byggfag:**

**Tømmermann**
Bygger trekonstruksjoner. Vegger, tak, gulv. Jobber med nybygg og rehabilitering.

**Murer**
Bygger murkonstruksjoner. Murer vegger, piper, fasader.

**Betongfagarbeider**
Forskaling, armering, støping av betong. Fundamenter, vegger, dekker.

**Taktekkere**
Legger tak. Takstein, papp, blikk. Jobber i høyden.

**Stillasbygger**
Bygger og demonterer stillas. Sikrer arbeidsplasser i høyden.

**Anleggsfag:**

**Anleggsmaskinfører**
Kjører anleggsmaskiner. Gravemaskin, hjullaster, dumper.

**Anleggsarbeider**
Graving, planering, veibygging, kloakkarbeid.

**Sprengningsarbeider**
Jobber med sprengning i berg.

**RIV-fag (Rørlegger, Elektriker, Ventilasjonsmontrør):**

**Rørlegger**
Installerer vann, avløp, varme. Baderom, kjøkken.

**Elektriker**
Elektriske installasjoner. Kabeltrekking, tavlemontering.

**Ventilasjonsmont ør (VVS)**
Installerer ventilasjonsanlegg.

**Andre yrker:**

**Prosjektleder**
Leder byggeprosjekter. Planlegging, økonomi, fremdrift.

**Byggmester**
Entreprenør med ansvar for hele byggeprosjekt.

**Arbeidsleder/Formmann**
Leder håndverkere på byggeplass daglig.`,
    },
    {
      title: 'Utdanningsløp',
      content: `## Utdanningsløp

Veien til fagbrev i bygg og anlegg.

**VG1 Bygg- og anleggsteknikk**
Grunnleggende kunnskaper i bygg og anlegg. Prøver ut ulike yrker.

**VG2 Tømrer eller Murer eller Betong**
Spesialisering i ett fag. Mer praktisk arbeid.

**VG3 Lærlingtid (2 år)**
Lærer i bedrift. Arbeider som lærling med lønn. Får opplæring av fagarbeider.

**Fagprøve**
Etter 2 år lærlingtid avlegges fagprøve. Viser at du behersker faget.

**Fagbrev**
Når fagprøven er bestått får du fagbrev. Du er nå fagarbeider!

**Alternativt løp:**

**Praksiskandidatordningen:**
Har du jobbet i faget i mange år uten fagbrev, kan du ta fagprøven etter dokumentert praksis.

**Videreutdanning:**

**Mesterbrev**
Etter 2-4 års praksis kan du ta mesterbrev. Gir kompetanse til å drive egen bedrift og utdanne lærlinger.

**Teknisk fagskole**
2-årig høyere yrkesfaglig utdanning. Bygningsingeniør, byggeleder.

**Universitet/høyskole**
Sivilingeniør, arkitekt. Krever generell studiekompetanse (påbygg).`,
    },
    {
      title: 'Arbeidsliv og lønn',
      content: `## Arbeidsliv og lønn

Bygg og anlegg tilbyr godt betalt arbeid og sikre jobber.

**Arbeidstid:**
Vanlig 37,5 timer per uke. Ofte 7-15 eller 7-16.

**Overtid:**
Ved behov. Godt betalt (tillegg 40-100%).

**Lønn:**

**Lærling:**
- 1. lærår: Ca. 30-40% av fagarbeiderlønn
- 2. lærår: Ca. 50-60% av fagarbeiderlønn

**Fagarbeider:**
- Startlønn: 400 000 - 500 000 kr/år
- Erfaren: 500 000 - 700 000 kr/år

**Formenn/arbeidsledere:**
500 000 - 800 000 kr/år

**Prosjektledere/byggmestere:**
600 000 - 1 000 000+ kr/år

**Tariffavtale:**
De fleste bedrifter følger tariffavtale mellom Byggnæringens Landsforening (BNL) og Fellesforbundet. Sikrer minstelønn, ferie, pensjon.

**Arbeidsforhold:**

**Fordeler:**
- Sikre jobber (stor etterspørsel)
- Godt betalt
- Variert arbeid
- Synlige resultater
- Godt arbeidsmiljø

**Utfordringer:**
- Fysisk krevende
- Vær og vind (utendørs arbeid)
- Støy og støv
- Tidlig start
- Risikoyrker (HMS viktig)

**Jobbmuligheter:**
- Store og små bedrifter
- Egentreprenuør (starte for seg selv)
- Utland (etterspørsel etter norske håndverkere)
- Byggeleder/prosjektleder
- Underviser på yrkesskole`,
    },
    {
      title: 'Fremtidens byggbransje',
      content: `## Fremtidens byggbransje

Byggbransjen er i endring. Ny teknologi og bærekraft preger fremtiden.

**Digitalisering:**

**BIM**
Alle jobber i 3D-modeller. Mer effektiv planlegging.

**Droner**
Kartlegging, inspeksjon, fremdriftskontroll.

**Roboter og automatisering**
Roboter som murer, 3D-printer betong.

**VR/AR**
Virtuell visning av bygg før det er bygget. Opplæring i VR.

**Prefabrikasjon:**
Mer bygging på fabrikk, mindre på byggeplass.
- Raskere bygging
- Bedre kvalitet
- Mindre vær-påvirkning
- Tryggere (mindre høydearbeid)

**Bærekraft:**

**Grønne bygg**
Økte krav til miljø og energi.

**Sirkulær økonomi**
Gjenbruk og resirkulering.

**Nye materialer**
Treteknologi (CLT), lavkarbonbetong, nye isolasjonsmat erialer.

**Kompetansebehov:**

Fremtidens håndverkere må kunne:
- Bruke digitale verktøy (BIM, nettbrett)
- Jobbe miljøvennlig
- Samarbeide på tvers av fag
- Kontinuerlig lære nytt

**Etterspørsel:**
Stor mangel på fagarbeidere. Gode jobbmuligheter i mange år fremover.

**Internasjonalisering:**
Norske fagarbeidere er etterspurt i utlandet. Mulighet for arbeid i andre land.`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-12-ex-1',
      task: 'Beskriv utdanningsløpet fra VG1 til fagbrev.',
      solution: 'VG1 Bygg- og anleggsteknikk (grunnleggende) → VG2 Spesialisering (f.eks. Tømrer) → VG3 Lærlingtid i bedrift (2 år) → Fagprøve → Fagbrev.',
    },
    {
      id: 'bygg-anlegg-vg1-12-ex-2',
      task: 'Hva er forskjellen på en tømrerma nn og en murer?',
      solution: 'Tømmermann bygger trekonstruksjoner (vegger, tak, gulv i tre). Murer bygger murkonstruksjoner (vegger, fasader, piper i murstein/blokker).',
    },
    {
      id: 'bygg-anlegg-vg1-12-ex-3',
      task: 'Nevn tre måter digitalisering påvirker byggbransjen.',
      solution: '1) BIM - alle jobber i 3D-modeller, 2) Droner - brukes til kartlegging og inspeksjon, 3) VR/AR - virtuell visning og opplæring. Andre gyldige: Roboter, 3D-printing, nettbrett på byggeplass.',
    },
    {
      id: 'bygg-anlegg-vg1-12-ex-4',
      task: 'Hva er mesterbrev, og når kan du ta det?',
      solution: 'Mesterbrev er videreutdanning etter fagbrev. Kan tas etter 2-4 års praksis som fagarbeider. Gir kompetanse til å drive egen bedrift og utdanne lærlinger.',
    },
  ],
  keyTerms: [
    { term: 'Fagbrev', definition: 'Bevis på at du er utdannet fagarbeider i et håndverksfag.' },
    { term: 'Lærlingtid', definition: 'To år med opplæring i bedrift etter VG2, før fagprøven.' },
    { term: 'Fagprøve', definition: 'Praktisk prøve som viser at du behersker faget, gir fagbrev.' },
    { term: 'Mesterbrev', definition: 'Videreutdanning etter fagbrev, gir rett til å drive bedrift og ta inn lærlinger.' },
    { term: 'BIM', definition: 'Building Information Modeling - digital 3D-modell av bygget.' },
    { term: 'Prefabrikasjon', definition: 'Produksjon av bygningsdeler på fabrikk før montering på byggeplass.' },
  ],
};

// ============================================================================
// Kapittel 13: Drenering og fuktsikring
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_13: TextbookChapter = {
  id: 'bygg-anlegg-vg1-13',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '13',
  title: 'Drenering og fuktsikring',
  description: 'Drenering av bygninger og håndtering av fukt.',
  estimatedMinutes: 55,
  competenceGoals: [
    'forstå prinsipper for drenering',
    'kjenne til fuktsikring av bygninger',
  ],
  sections: [
    {
      title: 'Hvorfor drenering?',
      content: `## Hvorfor drenering?

Vann er bygningers største fiende. Riktig drenering beskytter fundamentet og kjelleren mot fukt.

**Fuktproblemer uten drenering:**
- Fukt inn i kjellervegger
- Fukt opp i grunnmur (kapillærsuging)
- Frostskader på fundament
- Råte i trekonstruksjoner
- Mugg og helseplager
- Redusert isolasjonsevne

**Vannkilder:**

**Overflatevann**
Regnvann som renner på overflaten. Skal ledes bort fra bygget.

**Grunnvann**
Vann i grunnen. Følger grunnvannsnivået. Kan stå høyt ved mye nedbør.

**Sigevann**
Vann som siver gjennom grunnen. Samler seg mot fundament.

**Perkolerende vann**
Nedbør som siger ned gjennom grunnen vertikalt.

**Dreneringens oppgave:**
Samle opp vann rundt bygget og lede det bort til egnet utslipp.`,
    },
    {
      title: 'Dreneringssystem',
      content: `## Dreneringssystem

Et komplett dreneringssystem består av flere komponenter.

**Drensledning:**

**Typer:**
- Perforert plastrør (drensrør): Hull på undersiden, samler vann
- Diameter: Vanligvis 110 mm

**Plassering:**
- Rundt hele bygget
- På utsiden av fundamentet
- I frostfri dybde (under fundament)
- Med fall mot utslipp (min. 1:100)

**Drenslag:**

**Singel/pukk rundt drensledningen:**
- Lag på minst 30 cm rundt røret
- Kornstørrelse 8-16 mm
- Stopper ikke til med sand/silt
- Vann siger lett gjennom

**Fiberduk:**

**Beskytter mot tilstopping:**
- Legges rundt drenslaget
- Slipper vann gjennom, stopper jord
- Forhindrer at finstoff tetter drenslaget

**Utslipp:**

**Hvor skal vannet?**
- Kommunal overvannsledning (hvis tilgjengelig)
- Naturlig terrengutslipp (bekk, grøft)
- Infiltrasjon i grunnen (hvis god drenering)
- ALDRI til kloakk (overfylt ved regnvær)

**Kontrollkum:**
- Inspeksjonspunkter
- Mulighet for spyling
- Hver 20-30 meter
- Ved retningsendringer

**Pumpesum:**
Hvis utslippspunkt er høyere enn drensledning, må vann pumpes opp.

**Lagdeling drenering:**
Nedenfra og opp:
1. Drensledning (perforert rør)
2. Singel/pukk (30 cm rundt)
3. Fiberduk (rundt pukk laget)
4. Tilbakefylling med masser`,
    },
    {
      title: 'Fuktsikring av fundament og vegger',
      content: `## Fuktsikring av fundament og vegger

Drenering alene er ikke nok. Fundamentet må også beskyttes mot fukt.

**Membran:**

**Hva er membran?**
Tett plastduk (noppefolie) som legges utvendig på kjeller/grunnmur.

**Funksjoner:**
- Hindrer fukt inn i kjellerveggen
- Beskytter fukt isolasjon
- Leder vann ned til drensledning
- Beskytter fundamentet

**Typer:**
- Glatt folie: Enklest
- Noppefolie: Ekstra beskyttelse, dreneringsmulighet

**Montering:**
- Fra fundament til overkant grunnmur
- Overlapp minimum 10 cm
- Tettet i skjøter
- Beskyttet ved tilbakefylling

**Fuktisolasjon innvendig:**

Ved innvendig fuktisolering (f.eks. kjeller uten utvendig membran):
- Membraner på innsiden
- Drenering innvendig
- Pumpesump for vann
- Mindre effektivt enn utvendig

**Radonsperre:**

**Radon:**
Radioaktiv gass fra grunnen. Helsefarlig i høye konsentrasjoner.

**Radonsperrre:**
Tett plastfolie (minimum 0,20 mm) under betongplate på mark.
- Tetter mot radon fra grunnen
- Tettes nøye i skjøter (min. 30 cm overlapp)
- Tettes rundt gjennomføringer

**Kapillærsperre:**

**Kapillærsuging:**
Vann suges opp i porøse materialer (betong, tegl).

**Kapillærsperre:**
- Lag med pukk/singel under fundamentet
- Hindrer vann i å stige opp
- Plastfolie oppå pukk (ekstra beskyttelse)

**Grunnmursplater:**
Vanntette betongplater til kjellervegger. Reduserer fuktproblem.`,
    },
    {
      title: 'Overvannshåndtering',
      content: `## Overvannshåndtering

Overflatevann må ledes bort fra bygget.

**Takrenner og nedløp:**

**Takrenner:**
Samler regnvann fra taket.
- Fall mot nedløpsrør (1:100)
- Rengjøres regelmessig (løv)

**Nedløp:**
Fører vann fra renne til grunn.
- Fast montert til vegg
- Sluk ved bunn

**Sluk og overvannsledning:**

**Sluk:**
Tar imot vann fra nedløp.
- Sandfang (hindrer sand inn i ledning)
- Rist/deksel

**Overvannsledning:**
Fører vann bort fra bygget.
- Til kommunal overvann eller terreng
- Fall minimum 1:100
- Diameter 110-160 mm

**Terrengforming:**

**Slakt vekk fra bygget:**
- Minimum 1:20 fall første 3 meter fra huset
- Leder overflatevann bort
- Hindrer vannansamling mot fundamentet

**Permeable overflater:**

**Gressplener, grus:**
Vann siger ned i grunnen.

**Permeabel asfalt/belegg:**
Nyere teknologi som slipper vann gjennom.

**Fordeler:**
- Reduserer belastning på overvannssystem
- Grunnvannsfylling
- Mindre flom

**Problemområder:**

**Platting/asfalt mot hus:**
Vann renner mot fundamentet. Må ha sluk og fall bort fra huset!

**Plantering mot vegg:**
Vanning kan gi fukt inn i veggen. Bruk membran eller avstand.`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-13-ex-1',
      task: 'Hva er formålet med drenering rundt et fundament?',
      solution: 'Drenering samler opp vann rundt fundamentet og leder det bort til utslipp. Dette beskytter fundamentet og kjellervegger mot fukt, forhindrer råte, mugg og frostskader.',
    },
    {
      id: 'bygg-anlegg-vg1-13-ex-2',
      task: 'Nevn de fire hovedkomponentene i et dreneringssystem.',
      solution: '1) Drensledning (perforert rør), 2) Drenslag (singel/pukk rundt røret), 3) Fiberduk (beskytter mot tilstopping), 4) Utslipp (til overvann, terreng eller infiltrasjon).',
    },
    {
      id: 'bygg-anlegg-vg1-13-ex-3',
      task: 'Hva er membran, og hvor plasseres den?',
      solution: 'Membran er tett plastduk (noppefolie) som hindrer fukt inn i kjellerveggen. Den plasseres utvendig på kjeller/grunnmur fra fundament til overkant grunnmur, og leder vann ned til drensledning.',
    },
    {
      id: 'bygg-anlegg-vg1-13-ex-4',
      task: 'Hva er radonsperre, og hvorfor er den viktig?',
      solution: 'Radonsperre er tett plastfolie (min. 0,20 mm) under betongplate på mark. Den hindrer radioaktiv radongass fra grunnen fra å trenge inn i bygget. Radon er helsefarlig i høye konsentrasjoner.',
    },
    {
      id: 'bygg-anlegg-vg1-13-ex-5',
      task: 'Hvordan skal terrenget rundt huset formes for å lede vann bort?',
      solution: 'Terrenget skal slaktes bort fra huset med minimum 1:20 fall de første 3 meterne. Dette leder overflatevann bort fra fundamentet og forhindrer vannansamling.',
    },
  ],
  keyTerms: [
    { term: 'Drenering', definition: 'System for å samle og lede bort vann fra fundamentet.' },
    { term: 'Drensledning', definition: 'Perforert plastrør som samler opp vann.' },
    { term: 'Drenslag', definition: 'Lag av singel/pukk rundt drensledning som vann siger gjennom.' },
    { term: 'Membran', definition: 'Tett plastduk utvendig på kjeller som hindrer fukt inn i veggen.' },
    { term: 'Radonsperre', definition: 'Tett plastfolie under plate på mark som hindrer radongass.' },
    { term: 'Kapillærsperre', definition: 'Lag av pukk som hindrer vann i å stige opp i fundamentet.' },
    { term: 'Fiberduk', definition: 'Duk som slipper vann gjennom, men stopper jord og finstoff.' },
  ],
};

// ============================================================================
// Kapittel 14: Stillas og fallsikring
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_14: TextbookChapter = {
  id: 'bygg-anlegg-vg1-14',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '14',
  title: 'Stillas og fallsikring',
  description: 'Oppbygging av stillaser og sikring mot fall.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bygge og bruke stillas sikkert',
    'kjenne til fallsikringsutstyr',
  ],
  sections: [
    {
      title: 'Stillastyper',
      content: `## Stillastyper

Stillas gir sikker arbeidsplattform i høyden.

**Fasadestillas:**
Monteres langs fasaden. Vanligste type.

**Komponenter:**
- Vertikaler (stender): Vertikale rør
- Horisontaler (rigler): Horisontale rør
- Diagonal: Avstivning
- Dekker (plattformer): Arbeidsplattform
- Fotlist: Hindrer verktøy/materialer i å falle ned
- Rekkverk: Beskytter mot fall (1 m høyt)

**Bredde:**
Minimum 60 cm arbeidsplattform. Ofte 90-120 cm.

**Underlag:**
Fast og plant underlag. Fotplater under vertikaler.

**Rullestillas:**
Mindre stillas på hjul. Mobilt. Brukes innendørs og ved mindre arbeid.

**Krav:**
- Stabil base
- Lås hjulene under arbeid
- Ikke flytt med folk på

**Tårnstillas:**
Frittståend e stillas. Brukes der fasadestillas ikke passer.

**Hengestillas:**
Henges ned fra taket. Brukes ved høye bygninger. Krever spesiell opplæring.

**Arbeidsbukk:**
Enkle bukker med planke. Maks 2 meter høyde. Brukes ved kortvarig arbeid.

**Stige:**
Ikke egentlig stillas, men brukes ved kortvarige jobber. Maksimum 1 times arbeid på stige!`,
    },
    {
      title: 'Oppbyggning av stillas',
      content: `## Oppbygging av stillas

Riktig oppbygging er avgjørende for sikkerhet.

**Planlegging:**

**Før oppbygging:**
- Vurder om stillas er nødvendig (alternativ: lift, plattform)
- Velg riktig type
- Sjekk underlaget
- Vurder værforhold
- Bestill/lei utstyr

**Underlag:**

**Krav:**
- Fast og plant underlag
- Tåle lasten
- Fotplater under hver vertikal
- Avrett med kiler om nødvendig

**Montere:**

**1. Sett opp første ramme**
- Vertikaler med fotplater
- Kople sammen med horisontaler
- Sjekk loddrett og vater

**2. Legg gulvdekker**
- Plasser på riglene
- Fest/lås
- Ingen gap (maks 25 mm)

**3. Bygg oppover**
- Neste etasje på samme måte
- Avstiv med diagonaler
- Sjekk loddrett for hver etasje

**4. Rekkverk**
- Øverste rigle: 1 meter over dekke (topprekkverk)
- Mellomrigle: 50 cm over dekke (mellomrekkverk)
- Fotlist: 15 cm høy (beskytter mot fall av verktøy)

**5. Forankring**

**Fasadestillas må forankres til bygget:**
- Hver 4. meter horisontalt
- Hver 4. meter vertikalt
- Hindrer at stillas velter

**Adkomst:**

**Oppgang:**
- Stige eller trapp innvendig i stillas
- Stige må stikke 1 m over plattformen
- Luker i dekker for oppgang

**Kvalitetskontroll:**

**Før bruk:**
- Sjekk at alt er montert riktig
- Sjekk at rekkverk er på plass
- Sjekk forankring
- Stillas skal skiltesmed maks belastning

**Merkina d:**
- Grønn: Godkjent og klar til bruk
- Gul: Under oppbygging/demontering - ikke bruk
- Rød: Ikke bruk`,
    },
    {
      title: 'Fallsikring',
      content: `## Fallsikring

Fall fra høyden er hovedårsak til dødsulykker i bygg.

**Krav:**
Over 2 meters høyde må fallsikring på plass!

**Tre sikringsnivåer:**

**1. Kollektiv sikring (beste)**
Beskytter alle automatisk:
- Stillas med rekkverk
- Plattform med rekkverk
- Nett

**Fordel:** Trenger ikke individuelt utstyr

**2. Individuell sikring**
Personlig fallsikringsutstyr:
- Sele
- Line med støtdemper
- Forankringspunkt

**Når:** Når kollektiv sikring ikke er mulig

**3. Administrative tiltak (siste utvei)**
- Begrense tilgang
- Kort eksponeringstid
- Kun erfarne folk

**Personlig fallsikringsutstyr:**

**Sele:**
Fullt kroppssele (ikke belte). Fordeler krefter ved fall.

**Line:**
- Forbinder sele med forankringspunkt
- Med støtdemper (reduserer støt ved fall)
- Lengde: Så kort som mulig (reduserer fallhøyde)

**Forankringspunkt:**
- Må tåle minst 10 kN (ca. 1000 kg)
- Godt festet til konstruksjon
- Riktig plassert (over bruker)

**Typer liner:**

**Fast line:**
Fast lengde. Enkel.

**Inntrekkbar line:**
Trekkes automatisk inn. Stopper raskt ved fall.

**Horisontal livline:**
Line strukket langs takryggen. Kan bevege seg langs linen.

**Bruk av fallsikring:**

**1. Sjekk utstyret**
- Ingen skader, slitasje
- Innen bruksdato

**2. Ta på selen**
- Stram riktig
- Sjekk alle spenner

**3. Koble linen til selen**
- Riktig karabinkrok
- Låst

**4. Koble til forankringspunkt**
- Kontroller at forankringen er solid
- Plasser forankring over deg (reduserer fallhøyde)

**5. Arbeid**
- Hold linen kort
- Vær oppmerksom
- Unngå skarpe kanter

**Redning:**
Ved fall i sele må personen reddes raskt (hengingstrauma).`,
    },
    {
      title: 'Arbeid på stige',
      content: `## Arbeid på stige

Stige brukes kun ved kortvarig arbeid (maks 1 time).

**Stigetyper:**

**Enkeltstige:**
Fast lengde. Enkel å håndtere.

**Skyvestige:**
Flere deler som skyves ut. Kan nå høyere.

**Trappestige:**
Står selv. Brukes innendørs.

**Riktig bruk av stige:**

**Plassering:**

**Vinkel:**
75 grader vinkel mot veggen.
Tommelfingerregel: 1:4 forhold (1 m ut for hver 4 m opp).

**Underlag:**
- Fast og plant
- Ikke glatt (is, olje)
- Fotplater/gummifot

**Topp:**
- Stigen må stikke minst 1 meter over arbeidspunktet
- Fest toppen (surr fast)

**Arbeid på stige:**

**Sikkerhet:**
- Tre kontaktpunkter alltid (2 hender + 1 fot, eller 2 føtter + 1 hånd)
- Ikke strekk deg til siden (flytt stigen)
- Ikke stå på øverste 3 trinn
- Maksimalt 1 person på stigen
- Bær ikke tungt utstyr opp (bruk tau)
- Maksimum 1 times arbeid

**Kontroll før bruk:**
- Ingen skader (sprekker, bøyde trinn)
- Ren (ikke mud, olje)
- Låsemekanismer fungerer (på skyvestige)

**Vanlige feil:**
- For bratt vinkel (stige glir ut)
- For lav vinkel (stige velter bakover)
- Står på øverste trinn
- Strekker seg til siden
- Arbeider lenge på stige (bruk stillas!)`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-14-ex-1',
      task: 'Hva er de tre hovedkomponentene i et fasadestillas?',
      solution: '1) Vertikaler (vertikale rør/stender), 2) Horisontaler/rigler (horisontale rør), 3) Dekker (arbeidsplattformer). I tillegg: Diagonaler (avstivning), rekkverk og fotlist.',
    },
    {
      id: 'bygg-anlegg-vg1-14-ex-2',
      task: 'Fra hvilken høyde må fallsikring være på plass?',
      solution: 'Fra 2 meters høyde og oppover må fallsikring være på plass. Dette kan være kollektiv sikring (rekkverk, nett) eller individuell sikring (sele, line).',
    },
    {
      id: 'bygg-anlegg-vg1-14-ex-3',
      task: 'Hva er forskjellen på kollektiv og individuell fallsikring?',
      solution: 'Kollektiv sikring beskytter alle automatisk (f.eks. rekkverk, nett) og er beste løsning. Individuell sikring er personlig utstyr (sele, line) og brukes når kollektiv sikring ikke er mulig.',
    },
    {
      id: 'bygg-anlegg-vg1-14-ex-4',
      task: 'Hvilken vinkel skal en stige ha mot veggen, og hvordan måler du dette?',
      solution: 'Stigen skal ha 75 graders vinkel mot veggen. Tommelfingerregel: 1:4 forhold - 1 meter ut fra veggen for hver 4 meter opp. Dette gir riktig vinkel.',
    },
    {
      id: 'bygg-anlegg-vg1-14-ex-5',
      task: 'Hvor ofte må fasadestillas forankres til bygget?',
      solution: 'Fasadestillas må forankres hver 4. meter både horisontalt og vertikalt. Dette hindrer at stillas velter eller flytter seg.',
    },
    {
      id: 'bygg-anlegg-vg1-14-ex-6',
      task: 'Hva er kravet til hvor høyt et rekkverk på stillas skal være?',
      solution: 'Topprekkverk skal være 1 meter over dekket. I tillegg skal det være mellomrekkverk på 50 cm og fotlist på 15 cm. Dette beskytter mot fall av mennesker og gjenstander.',
    },
  ],
  keyTerms: [
    { term: 'Stillas', definition: 'Midlertidig konstruksjon som gir sikker arbeidsplattform i høyden.' },
    { term: 'Fasadestillas', definition: 'Stillas montert langs fasaden av et bygg.' },
    { term: 'Kollektiv sikring', definition: 'Fallsikring som beskytter alle automatisk (rekkverk, nett).' },
    { term: 'Individuell sikring', definition: 'Personlig fallsikringsutstyr (sele, line, forankringspunkt).' },
    { term: 'Sele', definition: 'Fullt kroppssele for fallsikring, fordeler krefter ved fall.' },
    { term: 'Forankringspunkt', definition: 'Festepunkt for fallsikringslina, må tåle minst 10 kN.' },
    { term: 'Fotlist', definition: '15 cm høy kant på stillasplattform som hindrer verktøy i å falle ned.' },
  ],
};

// ============================================================================
// Kapittel 15: Takarbeid og taktekking
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_15: TextbookChapter = {
  id: 'bygg-anlegg-vg1-15',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '15',
  title: 'Takarbeid og taktekking',
  description: 'Takkonstruksjoner og ulike typer taktekking.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå takkonstruksjoner',
    'kjenne til ulike taktekkingsmaterialer',
  ],
  sections: [
    {
      title: 'Takformer',
      content: `## Takformer

Taket beskytter bygget mot vær og vind. Takformen påvirker byggets utseende og funksjon.

**Saltak:**
Én takflate som heller til én side.
- Enklest å bygge
- Billigst
- Brukes ofte til anneks, skur

**Pulttak:**
To takflater som møtes i møne (toppen).
- Vanligst i Norge
- Klassisk utseende
- Gir loft eller romkapasitet

**Valmet tak:**
Fire takflater som møtes i møne.
- Mer komplisert
- Flott utseende
- Sjeldnere

**Flatt tak:**
Lite fall (2-5 grader).
- Moderne utseende
- Krever god tetting
- Drenering viktig
- Brukes ofte på moderne hus

**Takvinkel:**

**Lav vinkel (5-15°):**
- Lite snøproblemer, men krever god tetting
- Papp, membran

**Middels (15-30°):**
- Vanligst
- Takstein, skifer, papp

**Bratt (30-45°+):**
- Mye snø sklir av
- Takstein, skifer, trepanel

**Norsk standard:**
Brattere tak i snørike områder (fjell, nord). Lavere tak i sør og kystområder.`,
    },
    {
      title: 'Takkonstruksjoner',
      content: `## Takkonstruksjoner

Takkonstruksjonen bærer taket og overfører lasten til veggene.

**Sperreg:**

**Enkelt sperbindingsverk:**
- Sperrer går fra vegg til møne
- Hanebjelke forbinder sperrene
- Gir brukbart loft
- Brukes ved mindre spenn (opp til 8-10 m)

**Sperrer:**
Skrå bærende elementer, vanligvis 48×198 mm eller 48×223 mm.

**Senteravstand:**
Vanligvis 60 cm c/c (center til center).

**Møneås:**
Horisontalbjelke på toppen der sperrene møtes.

**Hanebjelke:**
Horisontal bjelke som binder sperrene sammen, forhindrer at de skyver veggene ut.

**Takstoler (fagverk):**

**Prefabrikkerte trekantfagverk:**
- Produseres på fabrikk
- Leveres ferdig til byggeplass
- Monteres raskt
- Kan spenne langt (opp til 15+ m)
- Gir ikke brukbart loft (kryssende stag)

**Sammensatte av:**
- Overstreng (sperrene)
- Understreng (hanebjke)
- Stag og stolper (overfører laster)

**Fordeler:**
- Rask montering
- Nøyaktig dimensjonert
- Billigere ved masseproduksjon

**Limtrebjelker:**

**Bærebjelker av limtre:**
- Kan spenne veldig langt
- Brukes ved store spenn (idrettshaller, svømmehaller)
- Estetisk pent (synlige bjelker)
- Dyrt

**Takpanel og undertak:**

**Tekking:**
Plater eller bord oppå sperrene som taktekking monteres på.

**Typer:**
- Sponplater (tåler ikke fukt - kun på varmt tak)
- Kryssfiner (tåler fukt bedre)
- Bord (tradisjonelt)

**Undertak/tak lufting:**
- Luftespalt mellom isolasjon og tekking
- Lufter bort fukt
- Forhindrer råte
- 50-100 mm luftespalt`,
    },
    {
      title: 'Taktekkingsmaterialer',
      content: `## Taktekkingsmaterialer

Taktekking beskytter mot vær og gir bygget estetikk.

**Takstein:**

**Teglstein:**
Brent leire. Klassisk og holdbart.
- Levetid: 50-100 år
- Tungt (krever sterk konstruksjon)
- Dyrt
- Lite vedlikehold
- Klassisk utseende

**Betongstein:**
Billigere alternativ til tegl.
- Levetid: 30-60 år
- Lettere enn tegl
- Mange farger og profiler

**Montering:**
- Legges på lekter
- Hektes eller skrus fast
- Krever takvinkel min. 18-22°

**Takpapp:**

**Takpapp (bitumin):**
Filt med bitumen (tjære).
- Billig
- Enkel montering
- Levetid: 15-25 år
- Brukes på lave tak

**Typer:**
- Enkeltlagt: Enklest, korteste levetid
- Dobbeltlagt: Bedre beskyttelse
- Selvklebende: Enkel montering

**Montering:**
- Kleb res eller sømmes med varme
- Overlapp mellom baner

**Membran (plasttak):**

**Moderne taktekkingssystem:**
- Plast- eller gummimembran
- Svært tett
- Levetid: 20-40 år
- Brukes på flate tak
- Kan gå på (lett tilgjengelig)

**Typer:**
- PVC-membran
- EPDM (gummi)

**Skifer:**

**Naturstein:**
- Meget holdbart (50-100+ år)
- Flott utseende
- Dyrt
- Tungt
- Tradisjonelt i vestkyst-områder

**Fibersementplater (eternitt):**

**Moderne alternativ:**
- Lette plater
- Holdbart
- Billigere enn skifer og tegl
- Ulike profiler

**OBS:** Gamle eternittplater kan inneholde asbest (farlig). Må håndteres av godkjent firma.

**Metalltak:**

**Stål eller aluminiumsplater:**
- Lett
- Holdbart (30-50 år)
- Kan ha mye støy ved regn
- Brukes ofte på næringsbygg

**Torvtak:**

**Tradisjonelt norsk:**
- Torv og gress på taket
- God isolasjon
- Trenger vedlikehold (klipping, ugrasrensing)
- Tungt`,
    },
    {
      title: 'Montasje og sikkerhet',
      content: `## Montasje og sikkerhet

Takarbeid er farlig. Riktig utstyr og sikkerhet er avgjørende.

**Forberedelser:**

**Før taktekking:**
1. Sjekk takkonstruksjon (sperre r, tekking)
2. Legg underlagspapp eller vindsperre
3. Monter lekter (for takstein) eller tekking (for papp)
4. Sørg for fallsikring

**Underlagspapp:**
Ekstra lag under taktekking.
- Beskytter mot regn under montasje
- Sekundær tetting
- Vindsperre

**Lekter:**
Tverrgående lister som takstein festes til.
- Avstand tilpasset takstein
- Dimensjon: 38×48 mm eller 48×48 mm

**Fallsikring ved takarbeid:**

**Kritisk viktig!**
Fall fra tak er dødsfarlig.

**Sikring:**
- Stillas rundt bygget (ideelt)
- Sele med line til forankringspunkt
- Takkant sikring (rekkverk)
- Horisontal livline langs møneås

**Takluke/taklem:**
Sikringspunkt på taket for line.

**Værforhold:**
- Ikke arbeid på tak ved regn, is, snø (glatt!)
- Ikke arbeid ved sterk vind
- Sjekk værvarsel

**Montering takstein:**

**1. Start nederst**
Begynner i takr ennen.

**2. Legg første rad**
Undertegl (halve steiner) først.

**3. Monter radvis oppover**
Overlapp mellom radene (150-200 mm).

**4. Hekt eller skru**
Takstein hektes på lekter eller skrues fast.

**5. Møne og gesims**
Spesialstykker ved møne (topp) og gesims (kant).

**Montering papp:**

**1. Rull ut fra bunnen**
Start ved takrenne.

**2. Overlapp**
Min. 10 cm overlapp mellom baner.

**3. Fest**
Kleber eller sømmes med varme.

**4. Kant og gjennomføringer**
Tettet nøye.`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-15-ex-1',
      task: 'Hva er forskjellen på pulttak og saltak?',
      solution: 'Pulttak har to takflater som møtes i en møne (topp). Saltak har bare én takflate som heller til én side. Pulttak er vanligst i Norge.',
    },
    {
      id: 'bygg-anlegg-vg1-15-ex-2',
      task: 'Hva er forskjellen på enkelt sperbindingsverk og takstoler?',
      solution: 'Enkelt sperbindingsverk har enkle sperrer fra vegg til møne og gir brukbart loft. Takstoler er prefabrikkerte trekantfagverk med kryssende stag, kan spenne lenger, men gir ikke brukbart loft.',
    },
    {
      id: 'bygg-anlegg-vg1-15-ex-3',
      task: 'Hvilket taktekkingsmateriale har lengst levetid?',
      solution: 'Teglstein og skifer har lengst levetid (50-100+ år). Tegl er brent leire, skifer er naturstein. Begge er holdbare og krever lite vedlikehold, men er dyre og tunge.',
    },
    {
      id: 'bygg-anlegg-vg1-15-ex-4',
      task: 'Hvorfor er fallsikring ekstra viktig ved takarbeid?',
      solution: 'Takarbeid er svært farlig fordi man arbeider i stor høyde, ofte på skrå flater. Fall fra tak er en av hovedårsakene til dødsulykker i bygg. Man må alltid bruke sele, line og forankringspunkt, eller stillas rundt bygget.',
    },
    {
      id: 'bygg-anlegg-vg1-15-ex-5',
      task: 'Hva er formålet med underlagspapp under taktekking?',
      solution: 'Underlagspapp er ekstra lag som beskytter mot regn under montasje, fungerer som sekundær tetting hvis taktekking lekker, og fungerer som vindsperre.',
    },
    {
      id: 'bygg-anlegg-vg1-15-ex-6',
      task: 'Hvor stor overlapp skal det være mellom takpannebaner?',
      solution: 'Minimum 10 cm overlapp mellom takpappbaner for å sikre god tetthet. Ved taksteinlegning er overlappen 150-200 mm mellom radene.',
    },
  ],
  keyTerms: [
    { term: 'Pulttak', definition: 'Takform med to takflater som møtes i en møne (topp).' },
    { term: 'Sperrer', definition: 'Skrå bærende elementer i takkonstruksjon.' },
    { term: 'Møneås', definition: 'Horisontalbjelke på toppen der sperrene møtes.' },
    { term: 'Takstol', definition: 'Prefabrikkert trekantfagverk som bærer taket.' },
    { term: 'Teglstein', definition: 'Taktekkingsmateriale av brent leire, meget holdbart.' },
    { term: 'Underlagspapp', definition: 'Ekstra lag under taktekking for beskyttelse og vindsperre.' },
    { term: 'Lekter', definition: 'Tverrgående lister som takstein festes til.' },
  ],
};

// ============================================================================
// Eksporter kapitler 1-15
// ============================================================================

export const CHAPTERS_BYGG_ANLEGG_VG1_PART1 = [
  CHAPTER_BYGG_ANLEGG_VG1_1,
  CHAPTER_BYGG_ANLEGG_VG1_2,
  CHAPTER_BYGG_ANLEGG_VG1_3,
  CHAPTER_BYGG_ANLEGG_VG1_4,
  CHAPTER_BYGG_ANLEGG_VG1_5,
  CHAPTER_BYGG_ANLEGG_VG1_6,
  CHAPTER_BYGG_ANLEGG_VG1_7,
  CHAPTER_BYGG_ANLEGG_VG1_8,
  CHAPTER_BYGG_ANLEGG_VG1_9,
  CHAPTER_BYGG_ANLEGG_VG1_10,
  CHAPTER_BYGG_ANLEGG_VG1_11,
  CHAPTER_BYGG_ANLEGG_VG1_12,
  CHAPTER_BYGG_ANLEGG_VG1_13,
  CHAPTER_BYGG_ANLEGG_VG1_14,
  CHAPTER_BYGG_ANLEGG_VG1_15,
];
