/* eslint-disable */
// @ts-nocheck
/**
 * Bygg- og anleggsteknikk VG1 - Del 2 (Kapittel 16-20)
 * Dekker LK20 kompetansemål
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 16: Anleggsteknikk og gravearbeid
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_16: TextbookChapter = {
  id: 'bygg-anlegg-vg1-16',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '16',
  title: 'Anleggsteknikk og gravearbeid',
  description: 'Grunnleggende anleggsteknikk, gravearbeid og masseforflytning.',
  estimatedMinutes: 70,
  competenceGoals: [
    'planlegge og bygge en konstruksjon',
    'velge og bruke maskiner og verktøy til ulike arbeidsoppdrag',
  ],
  sections: [
    {
      title: 'Introduksjon til anleggsteknikk',
      content: `## Introduksjon til anleggsteknikk

Anleggsteknikk omfatter alle arbeider som gjøres i og på bakken før og rundt bygninger. Dette inkluderer graving, masseforflytning, veibygging, VA-anlegg og terrengarbeid.

**Hva er anleggsteknikk?**
Anleggsteknikk er den delen av byggebransjen som handler om:
- Klargjøring av tomter for bygging
- Bygging av veier og parkeringsplasser
- Legging av rør for vann og avløp
- Terrengforming og landskapsarbeid
- Grunnarbeid for bygninger

**Hvorfor er anleggsteknikk viktig?**
Alt som bygges starter med godt grunnarbeid. Uten riktig forberedt tomt og grunn vil bygningen få problemer med:
- Setninger og bevegelser
- Vanninntrengning
- Dårlig drenering
- Ustabilitet

**Typiske anleggsprosjekter:**
- Boligfelt og næringsområder
- Veier og gang- og sykkelstier
- Parkeringsanlegg
- VA-anlegg (vann og avløp)
- Kabelgrøfter for strøm og fiber
- Støttemurer og terrenginngrep`,
    },
    {
      title: 'Gravearbeid og sikkerhet',
      content: `## Gravearbeid og sikkerhet

Graving er en av de farligste aktivitetene på en byggeplass. Mange ulykker skyldes ras i grøfter og utgravinger.

**Faremomenter ved graving:**
- Ras og utrasing av jordmasser
- Skjulte kabler og rør i grunnen
- Grunnvann som strømmer inn
- Maskiner som velter eller kolliderer
- Fall ned i grøfter

**Sikkerhetstiltak:**

**Før graving:**
- Innhent kabelpåvisning fra kommunen
- Sjekk tegninger for eksisterende rør og kabler
- Vurder jordtype og rasfare
- Planlegg hvor masser skal plasseres
- Sett opp sikring rundt graveområdet

**Under graving:**
- Hold avstand fra gravemaskiner
- Aldri gå ned i usikrede grøfter
- Bruk spunt eller grøftekasser ved dype grøfter
- Ha alltid rømningsvei
- Sjekk grøftekanter jevnlig

**Grøftesikring:**
Grøfter dypere enn 1,5 meter må sikres mot ras:
- Skråstilling av grøftesider (1:1 eller slakere)
- Grøftekasser av stål eller aluminium
- Spunting med stålplater
- Avstivning med bjelker og stag`,
    },
    {
      title: 'Maskiner i anleggsarbeid',
      content: `## Maskiner i anleggsarbeid

Anleggsarbeid krever tunge maskiner for å flytte store mengder jord og stein effektivt.

**Gravemaskiner:**

**Hjulgravere**
Går på hjul, rask forflytning mellom arbeidsområder. Brukes til lettere gravearbeid og der man må flytte seg ofte.

**Beltegravere**
Går på belter, bedre stabilitet og trekkraft. Brukes til tyngre gravearbeid og på bløt grunn.

**Minigravere**
Små, kompakte gravemaskiner. Brukes i trange områder, hager og innendørs.

**Hjullastere:**
Store maskiner med skuffe foran. Brukes til:
- Lasting av lastebiler
- Flytting av masser
- Planering av områder
- Snørydding

**Dumpere:**
Transportkjøretøy for løsmasser:
- Hjuldumpere: Raskere på vei
- Beltedumpere: Bedre i terreng

**Komprimeringsmaskiner:**
- Valser: Komprimerer store flater
- Vibroplater: Mindre områder
- Vibrostamper: Trange grøfter

**Krav til maskinførere:**
- Dokumentert opplæring
- Maskinførerbevis for aktuelle maskiner
- Daglig kontroll av maskin
- Kjennskap til sikkerhetssoner`,
    },
    {
      title: 'Masseberegning og transport',
      content: `## Masseberegning og transport

For å planlegge gravearbeid må vi beregne hvor mye masse som skal flyttes.

**Massetyper:**
- **Løsmasser:** Jord, sand, grus, leire
- **Fjell:** Fast berggrunn som må sprenges
- **Blandingsmasser:** Kombinasjon av løsmasser og stein

**Volumberegning:**
Volum = Lengde × Bredde × Dybde

**Eksempel:**
En grøft er 20 meter lang, 1 meter bred og 1,5 meter dyp:
Volum = 20 × 1 × 1,5 = 30 m³

**Svelling og komprimering:**
Når jord graves opp, øker volumet (svelling):
- Sand og grus: ca. 10-15% svelling
- Leire: ca. 20-30% svelling
- Fjell: ca. 40-60% svelling

Når masser legges tilbake og komprimeres, reduseres volumet igjen.

**Massetransport:**
- Korte avstander: Dumper eller hjullaster
- Lange avstander: Lastebil
- Beregn antall lass basert på volum og lastekapasitet

**Massehåndtering:**
- Sorter masser etter type
- Lagre matjord separat for gjenbruk
- Mellomlagre grus og pukk for tilbakefylling
- Kjør bort overskuddsmasser til godkjent mottak`,
    },
    {
      title: 'Eksempel: Planlegging av grøftegraving',
      content: `## Eksempel: Planlegging av grøftegraving

**Oppgave:**
Det skal graves en VA-grøft for legging av vannledning og avløpsrør. Grøften er 50 meter lang, 1,2 meter bred og 2 meter dyp.

**Løsning:**

**Steg 1: Beregn utgravingsvolum**
Volum = 50 × 1,2 × 2 = 120 m³

**Steg 2: Beregn svelling**
Med 15% svelling for grus/sand:
Løst volum = 120 × 1,15 = 138 m³

**Steg 3: Planlegg sikring**
Grøften er 2 meter dyp - må ha grøftesikring.
Velger grøftekasser som senkes ned etter hvert som vi graver.

**Steg 4: Sjekk for kabler og rør**
Bestill kabelpåvisning fra kommunen.
Graver forsiktig ved kryssing av eksisterende ledninger.

**Steg 5: Planlegg massetransport**
Matjord (ca. 30 m³) lagres på tomten for gjenbruk.
Resten (ca. 90 m³) mellomlagres for tilbakefylling.
Overskudd kjøres til mottak.

**Steg 6: Velg utstyr**
- Beltegraver 8 tonn til graving
- Dumper til masseforflytning
- Vibroplate til komprimering
- Grøftekasser til sikring

**Steg 7: Sikkerhetstiltak**
- Avsperring rundt graveområdet
- Sikkerhetsavstand til gravemaskin
- Grøftekasser før noen går ned
- Daglig kontroll av grøftekanter`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-16-ex-1',
      task: 'Nevn minst fire faremomenter ved gravearbeid.',
      solution: 'Faremomenter ved graving inkluderer: 1) Ras og utrasing av jordmasser, 2) Skjulte kabler og rør i grunnen som kan skades, 3) Grunnvann som strømmer inn i grøften, 4) Maskiner som velter eller kolliderer, 5) Fall ned i grøfter. Andre gyldige svar: klemfare, støy, vibrasjon.',
    },
    {
      id: 'bygg-anlegg-vg1-16-ex-2',
      task: 'Fra hvilken dybde må grøfter sikres mot ras, og nevn tre metoder for grøftesikring.',
      solution: 'Grøfter dypere enn 1,5 meter må sikres mot ras. Sikringsmetoder: 1) Skråstilling av grøftesider (1:1 eller slakere), 2) Grøftekasser av stål eller aluminium, 3) Spunting med stålplater, 4) Avstivning med bjelker og stag.',
    },
    {
      id: 'bygg-anlegg-vg1-16-ex-3',
      task: 'Hva er forskjellen på en hjulgraver og en beltegraver, og når brukes hver type?',
      solution: 'Hjulgraver går på hjul og kan forflytte seg raskt mellom arbeidsområder. Brukes til lettere gravearbeid og når man må flytte seg ofte. Beltegraver går på belter og har bedre stabilitet og trekkraft. Brukes til tyngre gravearbeid og på bløt eller ujevn grunn.',
    },
    {
      id: 'bygg-anlegg-vg1-16-ex-4',
      task: 'En grøft er 30 meter lang, 0,8 meter bred og 1,2 meter dyp. Beregn volumet som skal graves ut.',
      solution: 'Volum = Lengde × Bredde × Dybde = 30 × 0,8 × 1,2 = 28,8 m³. Det skal graves ut 28,8 kubikkmeter masse.',
    },
    {
      id: 'bygg-anlegg-vg1-16-ex-5',
      task: 'Hva menes med "svelling" av jordmasser, og hvorfor er dette viktig å ta hensyn til?',
      solution: 'Svelling betyr at jordmasser øker i volum når de graves opp, fordi de løsner og får luft mellom partiklene. Dette er viktig fordi man må beregne større volum for transport og mellomlagring enn det opprinnelige volumet i bakken. Sand/grus sveller ca. 10-15%, leire ca. 20-30%, fjell ca. 40-60%.',
    },
    // --- Samleoppgaver ---
    {
      id: 'bygg-anlegg-vg1-16-ex-6',
      task: 'Du skal planlegge graving av en kabelgrøft som er 80 meter lang, 0,5 meter bred og 0,8 meter dyp. Beskriv hele planleggingsprosessen: beregn volum, vurder sikringsbehov, og forklar hvilke forberedelser som må gjøres før graving.',
      solution: 'Volum = 80 × 0,5 × 0,8 = 32 m³. Siden grøften er 0,8 meter dyp (under 1,5 m), er ikke grøftesikring påkrevd, men grøftekantene bør sjekkes jevnlig. Før graving: 1) Bestill kabelpåvisning fra kommunen, 2) Sjekk tegninger for eksisterende rør/kabler, 3) Planlegg hvor massene skal lagres, 4) Sett opp avsperring, 5) Velg egnet maskin (minigraver egner seg), 6) Planlegg tilbakefylling med sand rundt kabelen.',
    },
    {
      id: 'bygg-anlegg-vg1-16-ex-7',
      task: 'Lag en sikkerhetsinstruks for arbeid i og rundt grøfter på en byggeplass. Inkluder tiltak før, under og etter graving.',
      solution: 'Sikkerhetsinstruks: FØR GRAVING: Innhent kabelpåvisning, sjekk tegninger, vurder jordtype og rasfare, sett opp avsperring. UNDER GRAVING: Hold sikkerhetsavstand til gravemaskin (minst 5 meter), bruk grøftesikring ved dybde over 1,5 m, aldri gå ned i usikret grøft, ha rømningsvei (stige hver 25. meter), bruk verneutstyr. ETTER ARBEIDET: Avsperr grøften om natten, kontroller sikring ved arbeidsslutt, fjern verktøy fra grøfteområdet, meld fra om farlige forhold.',
    },
  ],
  keyTerms: [
    { term: 'Anleggsteknikk', definition: 'Arbeider i og på bakken som graving, veibygging og VA-anlegg.' },
    { term: 'Grøftesikring', definition: 'Tiltak for å hindre ras i grøfter, som grøftekasser eller skråstilling.' },
    { term: 'Svelling', definition: 'Volumøkning når jordmasser graves opp og løsner.' },
    { term: 'Kabelpåvisning', definition: 'Informasjon fra kommunen om hvor kabler og rør ligger i grunnen.' },
    { term: 'Komprimering', definition: 'Sammenpressing av jordmasser for å øke bæreevne og stabilitet.' },
    { term: 'Spunting', definition: 'Sikringsmetode med stålplater som slås ned i grunnen.' },
  ],
};

// ============================================================================
// Kapittel 17: Veibygging og belegning
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_17: TextbookChapter = {
  id: 'bygg-anlegg-vg1-17',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '17',
  title: 'Veibygging og belegning',
  description: 'Oppbygging av veier, gang- og sykkelstier, og ulike belegningstyper.',
  estimatedMinutes: 65,
  competenceGoals: [
    'planlegge og bygge en konstruksjon',
    'velge og bruke materialer med hensyn til bærekraft',
  ],
  sections: [
    {
      title: 'Veiens oppbygning',
      content: `## Veiens oppbygning

En vei er bygget opp av flere lag som sammen gir styrke, stabilitet og holdbarhet.

**Vegkroppen:**
Vegkroppen er den menneskeskapte delen av veien, fra undergrunnen til veibanen.

**Lagene i en vei (fra bunn til topp):**

**1. Undergrunn (opprinnelig grunn)**
Den naturlige grunnen under veien. Må vurderes for bæreevne. Dårlig undergrunn forsterkes med fiberduk eller masseutskifting.

**2. Forsterkningslag**
Grov pukk eller sprengstein (0-300 mm). Fordeler lasten og hindrer opptrengning av finstoff.

**3. Bærelag**
Pukk i sorterte fraksjoner. Deles ofte i:
- Nedre bærelag: Grovere pukk (22-120 mm)
- Øvre bærelag: Finere pukk (0-32 mm)

**4. Slitelag**
Det øverste laget som trafikken kjører på:
- Asfalt (mest vanlig)
- Grus (grusveier)
- Betong (tungt belastede områder)
- Belegningsstein (gater, torg)

**Dimensjonering:**
Tykkelsen på lagene avhenger av:
- Trafikkbelastning (antall kjøretøy og tyngde)
- Undergrunnens bæreevne
- Klimaforhold (frost)
- Veiklasse og standard`,
    },
    {
      title: 'Drenering og fall',
      content: `## Drenering og fall

God drenering er avgjørende for at veien skal holde seg i god stand.

**Hvorfor drenering?**
- Vann svekker bæreevnen
- Frost i vannmettet grunn gir telehiv
- Vann på veibanen er farlig
- Hindrer erosjon og utrasing

**Takfall:**
Veibanen skal ha fall mot sidene for å lede vann bort:
- Normalt takfall: 3-4%
- Betyr at veibanen er 3-4 cm høyere i midten per meter bredde

**Sidefall:**
På svingete veier legges veibanen med dosering (ensidig fall) for at biler skal holde seg i svingen.

**Grøfter:**
Åpne grøfter langs veien samler opp vann:
- V-grøft: Vanlig langs landeveier
- Flate grøfter: I boligområder

**Stikkrenner:**
Rør under veien som leder vann fra den ene siden til den andre. Nødvendig der vann samler seg på oppsiden av veien.

**Drensrør:**
Perforerte rør under veikonstruksjonen som samler opp og leder bort grunnvann.

**Kantstein:**
Hevet kant langs veien som:
- Leder overvann til sluk
- Skiller kjørebane fra fortau
- Holder asfaltkanten på plass`,
    },
    {
      title: 'Asfaltarbeid',
      content: `## Asfaltarbeid

Asfalt er det vanligste slitelaget på norske veier.

**Hva er asfalt?**
Asfalt er en blanding av:
- Steinmaterialer (pukk og sand): ca. 95%
- Bitumen (bindemiddel fra olje): ca. 5%

**Asfalttyper:**

**Asfaltbetong (Ab)**
Tett, slitesterk asfalt. Brukes som slitelag på de fleste veier.

**Asfaltgrusbetong (Agb)**
Grovere struktur, brukes som bærelag eller på lavtrafikkerte veier.

**Mykasfalt (Ma)**
Mykere bitumen, brukes på grusveier og midlertidige overflater.

**Skjelettasfalt (Ska)**
Åpen struktur, god drenering. Reduserer vannsprut og støy.

**Legging av asfalt:**

**Forberedelse:**
- Underlaget må være tørt og rent
- Riktig temperatur (ikke for kaldt)
- Prime/klebing på eksisterende asfalt

**Utlegging:**
Asfaltutlegger legger ut jevnt lag. Tykkelse avhenger av asfalttype (3-10 cm).

**Komprimering:**
Valsing umiddelbart etter utlegging. Først tunge valser, deretter lettere for finpussing.

**Skjøter:**
Der to asfaltbaner møtes. Kritisk punkt som må utføres nøye for å unngå sprekker.`,
    },
    {
      title: 'Belegningsstein og heller',
      content: `## Belegningsstein og heller

Belegningsstein brukes på fortau, torg, innkjørsler og gågater.

**Materialer:**

**Betongstein**
Mest brukt. Mange former, farger og størrelser. Rimelig og holdbart.

**Naturstein**
Granitt, skifer, gneis. Eksklusivt utseende, meget holdbart. Dyrere.

**Teglstein**
Brent leire. Klassisk utseende, brukes ofte i historiske områder.

**Leggingsmønster:**
- Forbandt (forskjøvet mønster)
- Sildebensmønster
- Diagonalt mønster
- Romber og sirkler

**Oppbygning under belegningsstein:**

**1. Forsterkningslag**
Pukk for bæreevne (15-30 cm)

**2. Bærelag**
Pukk 0-32 mm (10-15 cm)

**3. Settelag**
Sand eller steinmel (3-5 cm). Her settes steinene.

**Legging:**

1. Avrett settelaget med rettholt
2. Sett steinene tett sammen
3. Bruk snor for rett linje
4. Bank ned med gummihammer
5. Sjekk fall og høyde
6. Fyll fugene med sand
7. Kompimer med vibroplate
8. Etterfyll fugene

**Kantstein:**
Settes i betong langs kanten for å holde belegningen på plass.`,
    },
    {
      title: 'Eksempel: Opparbeidelse av innkjørsel',
      content: `## Eksempel: Opparbeidelse av innkjørsel

**Oppgave:**
Opparbeide en innkjørsel på 4 × 10 meter med belegningsstein.

**Forutsetninger:**
- Området er planert
- Normal trafikkbelastning (personbil)
- Fallet skal gå mot veien (3%)

**Gjennomføring:**

**Steg 1: Planlegging**
- Areal: 40 m²
- Fall: 3% betyr 30 cm fall over 10 meter
- Tegn opp og sett snorer

**Steg 2: Utgraving**
- Grav ut 45 cm (30 cm oppbygning + 15 cm settelag og stein)
- Sjekk mål og fall
- Komprimer bunnen

**Steg 3: Forsterkningslag**
- Legg 15 cm pukk 22-120 mm
- Kompimer med vibroplate

**Steg 4: Bærelag**
- Legg 10 cm pukk 0-32 mm
- Rett av og kompimer

**Steg 5: Settelag**
- Legg 4 cm steinmel
- Rett av med rettholt
- Ikke kompimer (steinene skal sette seg)

**Steg 6: Kantstein**
- Sett kantstein i betong langs alle kanter
- Vent med legging til betongen har herdet

**Steg 7: Legging av stein**
- Start fra et hjørne
- Legg i forbandtmønster
- Bruk snor for rett linje

**Steg 8: Avslutning**
- Fyll fugene med sand
- Kompimer med vibroplate
- Etterfyll fuger`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-17-ex-1',
      task: 'Nevn de fire hovedlagene i en vei fra bunn til topp, og forklar hva hvert lag gjør.',
      solution: '1) Undergrunn - den naturlige grunnen som bærer veien. 2) Forsterkningslag - grov pukk som fordeler lasten og hindrer opptrengning av finstoff. 3) Bærelag - pukk som gir stabilitet og fordeler trafikklast. 4) Slitelag - det øverste laget (asfalt, grus eller stein) som trafikken kjører på.',
    },
    {
      id: 'bygg-anlegg-vg1-17-ex-2',
      task: 'Hva menes med "takfall" på en vei, og hvorfor er det viktig?',
      solution: 'Takfall betyr at veibanen er høyest i midten og heller mot sidene (normalt 3-4%). Dette er viktig for å lede regnvann bort fra veibanen slik at vannet ikke blir stående, noe som ville svekke veien og være farlig for trafikantene.',
    },
    {
      id: 'bygg-anlegg-vg1-17-ex-3',
      task: 'Hva består asfalt av, og nevn to ulike asfalttyper.',
      solution: 'Asfalt består av steinmaterialer (pukk og sand, ca. 95%) og bitumen som bindemiddel (ca. 5%). Asfalttyper: Asfaltbetong (Ab) - tett, slitesterk for de fleste veier. Asfaltgrusbetong (Agb) - grovere, brukes som bærelag. Mykasfalt (Ma) - mykere, for grusveier. Skjelettasfalt (Ska) - åpen struktur, god drenering.',
    },
    {
      id: 'bygg-anlegg-vg1-17-ex-4',
      task: 'Beskriv oppbygningen under belegningsstein og forklar hva settelaget er.',
      solution: 'Oppbygning fra bunn: 1) Forsterkningslag av pukk (15-30 cm), 2) Bærelag av pukk 0-32 mm (10-15 cm), 3) Settelag av sand eller steinmel (3-5 cm). Settelaget er det øverste laget der belegningssteinen legges i. Det jevnes ut med rettholt og skal ikke komprimeres før steinene legges, slik at steinene kan sette seg riktig.',
    },
    {
      id: 'bygg-anlegg-vg1-17-ex-5',
      task: 'Hvorfor må kantstein settes i betong når man legger belegningsstein?',
      solution: 'Kantstein settes i betong for å holde belegningen på plass. Uten kantstein vil steinene langs kanten bevege seg utover når de belastes, og hele belegningen vil gradvis løsne. Kantsteinene fungerer som en ramme som holder alt sammen og gir en pen avslutning.',
    },
    // --- Samleoppgaver ---
    {
      id: 'bygg-anlegg-vg1-17-ex-6',
      task: 'Du skal planlegge en parkeringsplass på 100 m² med belegningsstein for personbiler. Beskriv oppbygningen lag for lag med tykkelser, og forklar hvordan du sikrer god drenering.',
      solution: 'Oppbygning: 1) Utgraving ca. 45 cm, komprimer bunn. 2) Forsterkningslag 20 cm pukk 22-120 mm. 3) Bærelag 10 cm pukk 0-32 mm. 4) Settelag 4 cm steinmel. 5) Belegningsstein 6-8 cm. Drenering: Gi plassen takfall 2-3% mot sluk eller grøft. Legg drensrør i grunnen om nødvendig. Bruk gjennomtrengelig fugesand som lar vann sige gjennom. Sørg for at overvannet ledes til godkjent avløp.',
    },
    {
      id: 'bygg-anlegg-vg1-17-ex-7',
      task: 'Sammenlign asfalt og belegningsstein som slitelag. Diskuter fordeler og ulemper med hver type, og gi eksempler på hvor hver type passer best.',
      solution: 'ASFALT - Fordeler: Raskere å legge, jevn overflate, lavere kostnad på store flater, enkelt vedlikehold. Ulemper: Mindre estetisk, må byttes ved skader, krever varmt vær ved legging. Passer: Veier, parkeringsplasser, gang- og sykkelstier. BELEGNINGSSTEIN - Fordeler: Estetisk pent, kan tas opp og legges på nytt, lokale reparasjoner mulig, mange design. Ulemper: Dyrere, mer arbeidskrevende, kan bli ujevnt over tid. Passer: Innkjørsler, torg, gågater, hager.',
    },
  ],
  keyTerms: [
    { term: 'Vegkropp', definition: 'Den menneskeskapte delen av veien, fra undergrunn til slitelag.' },
    { term: 'Bærelag', definition: 'Lag av pukk som fordeler trafikklasten til undergrunnen.' },
    { term: 'Slitelag', definition: 'Det øverste laget i veien som trafikken kjører på.' },
    { term: 'Takfall', definition: 'Fall fra midten av veien mot sidene for å lede bort vann.' },
    { term: 'Settelag', definition: 'Lag av sand/steinmel der belegningsstein legges i.' },
    { term: 'Bitumen', definition: 'Bindemiddelet i asfalt, fremstilt fra råolje.' },
  ],
};

// ============================================================================
// Kapittel 18: VA-anlegg - vann og avløp
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_18: TextbookChapter = {
  id: 'bygg-anlegg-vg1-18',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '18',
  title: 'VA-anlegg - vann og avløp',
  description: 'Grunnleggende om vann- og avløpssystemer i grunnen.',
  estimatedMinutes: 65,
  competenceGoals: [
    'planlegge og bygge en konstruksjon',
    'forstå og arbeide etter tegninger og beskrivelser',
  ],
  sections: [
    {
      title: 'Introduksjon til VA-systemer',
      content: `## Introduksjon til VA-systemer

VA står for vann og avløp. VA-anlegg er rørsystemene som forsyner bygninger med rent vann og fører bort avløpsvann.

**Hva omfatter VA-anlegg?**
- Vannforsyning (drikkevann til bygninger)
- Spillvann (avløp fra toalett, dusj, vask)
- Overvann (regnvann og smeltevann)

**Hovedkomponenter:**

**Vannledninger:**
Fører rent drikkevann fra vannverket til bygninger. Ligger under frostfri dybde (1-2 meter).

**Spillvannsledninger:**
Fører brukt vann fra bygninger til renseanlegg. Legges med fall slik at vannet renner av seg selv (selvfall).

**Overvannsledninger:**
Fører regnvann fra tak og overflater til bekk, elv eller infiltrasjon. Separert fra spillvann i moderne anlegg.

**Kummer:**
Nedstigningspunkter for inspeksjon og vedlikehold. Plasseres ved retningsendringer og med jevne mellomrom.

**Sluk:**
Inntak for overvann i gater og på flater.

**Systemer:**
- **Separatsystem:** Spillvann og overvann i separate rør
- **Fellessystem:** Alt i samme rør (gammelt system)
- **Privat anlegg:** Septiktank eller minirenseanlegg`,
    },
    {
      title: 'Rørtyper og materialer',
      content: `## Rørtyper og materialer

Ulike materialer brukes til ulike formål i VA-anlegg.

**Vannledninger:**

**PE-rør (polyetylen)**
- Sort, blått eller svart med blå stripe
- Fleksibelt, lett å legge
- Mest brukt i dag
- Leveres i ruller eller rette lengder

**PVC-rør**
- Grått eller hvitt
- Stivere enn PE
- Brukes mindre i dag

**Støpejern**
- Brukes i trykksatte systemer
- Meget holdbart, men tungt

**Spillvannsledninger:**

**PP-rør (polypropylen)**
- Lysegrå eller sort
- Standard innendørs avløp
- Lett, rimelig, enkelt å jobbe med

**PVC-rør**
- Orange/brunt for utendørs
- Hvitt/grått for innendørs
- Stivt, må graves ned rett

**Betongrør**
- Brukes til store dimensjoner
- Svært holdbart
- Tungt, krever maskin for legging

**Dimensjoner:**
- Vannledning til bolig: 32-50 mm
- Spillvann fra toalett: 110 mm
- Spillvann hovedledning: 160-200 mm
- Overvannsledning: 110-200 mm`,
    },
    {
      title: 'Legging av rør',
      content: `## Legging av rør

Riktig legging er avgjørende for at VA-anlegget skal fungere.

**Grøftegraving:**
- Grøftebredde tilpasses rørdimensjon
- Dybde under frostfri dybde for vannledning
- Avløp legges dypere enn vannledning (unngå forurensning)

**Ledningssone:**
Området rett rundt røret krever spesielle masser:

**1. Fundament**
Jevnt underlag av sand eller pukk under røret. Løse steiner og røtter fjernes.

**2. Sidefylling**
Komprimert sand/grus langs sidene av røret opp til halve rørhøyden.

**3. Beskyttelseslag**
Sand/grus over røret, minimum 15 cm.

**4. Gjenfylling**
Resten av grøften kan fylles med stedlige masser.

**Fall på avløpsledninger:**
Avløp må ha fall for at vannet skal renne:
- Minimum fall: 1 cm per meter (1%)
- Normalt fall: 1-2 cm per meter
- For lite fall: Tilstopping
- For mye fall: Vann renner fra fast stoff

**Skjøting av rør:**
- Mufferør: Spissen tres inn i muffen
- Elektroskjøt: For PE-rør, sveises med strøm
- Mekanisk kobling: Klemmering rundt røret

**Tetthetsprøving:**
Etter legging må rørene tetthetsprøves med vann eller luft for å sikre at det ikke lekker.`,
    },
    {
      title: 'Kummer og sluk',
      content: `## Kummer og sluk

Kummer er viktige punkter i VA-systemet for tilgang og vedlikehold.

**Nedstigningskummer:**
- Store nok til at en person kan gå ned
- Diameter minimum 1000 mm
- Plasseres ved retningsendringer
- Maks avstand 80-100 meter mellom kummer

**Kumtyper:**

**Kontrollkum**
Standard inspeksjonskum for spillvann og overvann.

**Vannkum**
For stengeventiler på vannledning. Ofte mindre enn nedstigningskum.

**Sandfangkum**
Samler opp sand og grus fra overvann. Må tømmes jevnlig.

**Pumpekum**
Der selvfall ikke er mulig, samles vannet og pumpes videre.

**Oppbygning av kum:**
1. Bunnseksjon med renner/rør
2. Kumringer av betong
3. Kjegle for overgang til lokk
4. Kumramme og lokk

**Sluk:**
Inntak for overvann på overflaten:
- Gatesluk: I vegbanen
- Punktsluk: På flater og torg
- Rennesluk: Langs kanter

**Sandfang:**
Sluk har sandfang (dypere del) som samler opp løv, sand og søppel før vannet går videre.`,
    },
    {
      title: 'Eksempel: Tilkobling av ny bolig',
      content: `## Eksempel: Tilkobling av ny bolig

**Situasjon:**
En ny enebolig skal kobles til kommunalt vann- og avløpsnett.

**Nødvendige tilkoblinger:**
- Vannledning inn til bolig
- Spillvannsledning ut fra bolig
- Overvannsledning for takvann og drenering

**Planlegging:**

**Steg 1: Sjekk kommunale krav**
- Kontakt kommunen for påkoblingspunkt
- Få tegninger over eksisterende ledningsnett
- Søk om sanitærabonnement

**Steg 2: Prosjektering**
- Beregn rørdimensjoner
- Tegn ledningsplan
- Planlegg kumplasseringer
- Beregn fall på avløpsledninger

**Steg 3: Graving**
- Grav grøft fra bolig til kommunalt nett
- Dybde: Vann 1,5 m, avløp 2 m (under frost)
- Legg singel/sand i bunn

**Steg 4: Rørlegging**
- Legg spillvann først (dypest)
- Så overvann (middels)
- Vannledning øverst
- Minimum 30 cm mellom rør horisontalt

**Steg 5: Tilkobling**
- Tilkobling til kommunalt nett utføres av godkjent entreprenør
- Vannledning: Anboring på hovedledning
- Avløp: Tilkobling i kum eller grenrør

**Steg 6: Testing og kontroll**
- Tetthetsprøving av alle ledninger
- Innmåling av rør for kart
- Inspeksjon av kommunen
- Igangkjøring`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-18-ex-1',
      task: 'Forklar forskjellen på spillvann og overvann, og hvorfor disse ofte separeres i moderne anlegg.',
      solution: 'Spillvann er brukt vann fra toalett, dusj, vask og oppvaskmaskin som inneholder forurensning og må renses. Overvann er regnvann og smeltevann fra tak og overflater som er relativt rent. De separeres fordi spillvann må til renseanlegg, mens overvann kan slippes ut i naturen. Separatsystem hindrer også overbelastning av renseanlegg ved kraftig regn.',
    },
    {
      id: 'bygg-anlegg-vg1-18-ex-2',
      task: 'Hvilket materiale er mest vanlig for vannledninger i dag, og nevn to fordeler med dette materialet.',
      solution: 'PE-rør (polyetylen) er mest brukt. Fordeler: 1) Fleksibelt og lett å legge, kan leveres i ruller. 2) Korroderer ikke og har lang levetid. Andre fordeler: Lett vekt, enkelt å skjøte, tåler bevegelser i grunnen, rimelig pris.',
    },
    {
      id: 'bygg-anlegg-vg1-18-ex-3',
      task: 'Hvorfor må avløpsledninger legges med fall, og hva er normalt fall?',
      solution: 'Avløpsledninger må ha fall for at vannet skal renne av seg selv (selvfall) uten pumping. Normalt fall er 1-2 cm per meter (1-2%). For lite fall gir tilstopping fordi vannet ikke har kraft til å føre med seg fast stoff. For mye fall gjør at vannet renner fra det faste stoffet.',
    },
    {
      id: 'bygg-anlegg-vg1-18-ex-4',
      task: 'Hva er en nedstigningskum, og hvorfor plasseres de ved retningsendringer?',
      solution: 'En nedstigningskum er en stor kum (min. 1000 mm diameter) som gir tilgang til rørsystemet for inspeksjon, spyling og vedlikehold. De plasseres ved retningsendringer fordi her er det vanskelig å rengjøre rørene med spyling, og eventuelle tilstoppinger skjer ofte i kurver. Kummen gir direkte tilgang til problemområdet.',
    },
    {
      id: 'bygg-anlegg-vg1-18-ex-5',
      task: 'Beskriv oppbygningen i ledningssonen rundt et nedgravd avløpsrør.',
      solution: 'Ledningssonen består av: 1) Fundament - jevnt underlag av sand/pukk under røret. 2) Sidefylling - komprimert sand/grus langs sidene opp til halve rørhøyden. 3) Beskyttelseslag - sand/grus minimum 15 cm over røret. 4) Gjenfylling - stedlige masser fyller resten av grøften. God komprimering i hvert lag er viktig.',
    },
    // --- Samleoppgaver ---
    {
      id: 'bygg-anlegg-vg1-18-ex-6',
      task: 'En spillvannsledning skal legges over 60 meter med fall på 1,5%. Hvor mye lavere ligger røret ved enden sammenlignet med starten? Beskriv også hvordan du ville kontrollert fallet under legging.',
      solution: 'Med 1,5% fall over 60 meter: 60 × 0,015 = 0,9 meter. Røret ligger 90 cm lavere ved enden. Kontroll av fall: 1) Sett opp lasernivå i grøften, 2) Bruk vaterpass og rettholt mellom faste punkter, 3) Mål ned fra snor med kjent høyde, 4) Sjekk at bunnen av grøften har riktig fall før rørlegging.',
    },
    {
      id: 'bygg-anlegg-vg1-18-ex-7',
      task: 'Du skal prosjektere VA-anlegg for en ny enebolig. Lag en sjekkliste over alle trinn fra planlegging til ferdig anlegg, inkludert nødvendige tillatelser og kontroller.',
      solution: 'Sjekkliste: 1) PLANLEGGING: Kontakt kommunen for påkoblingspunkt, få tegninger, søk sanitærabonnement. 2) PROSJEKTERING: Beregn dimensjoner, tegn ledningsplan, planlegg kummer, beregn fall. 3) FORBEREDELSE: Bestill materialer, kabelpåvisning, sett opp snorer. 4) GRAVING: Grav til riktig dybde, legg fundament. 5) RØRLEGGING: Spillvann dypest, så overvann, vannledning øverst, skjøt og sikre rør. 6) TILKOBLING: Godkjent entreprenør kobler til kommunalt nett. 7) TESTING: Tetthetsprøving. 8) DOKUMENTASJON: Innmåling, foto, kontroll av kommunen. 9) GJENFYLLING: Komprimering i lag. 10) FERDIGMELDING.',
    },
  ],
  keyTerms: [
    { term: 'VA-anlegg', definition: 'Vann- og avløpsanlegg - rørsystemer for drikkevann og avløp.' },
    { term: 'Spillvann', definition: 'Avløpsvann fra toalett, dusj og vask som må renses.' },
    { term: 'Overvann', definition: 'Regnvann og smeltevann fra tak og overflater.' },
    { term: 'Selvfall', definition: 'Avløp som renner av seg selv på grunn av fall, uten pumping.' },
    { term: 'Separatsystem', definition: 'VA-system der spillvann og overvann går i separate rør.' },
    { term: 'Ledningssone', definition: 'Området rett rundt nedgravd rør med spesielle massekrav.' },
  ],
};

// ============================================================================
// Kapittel 19: Landmåling og utstikking
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_19: TextbookChapter = {
  id: 'bygg-anlegg-vg1-19',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '19',
  title: 'Landmåling og utstikking',
  description: 'Grunnleggende landmåling, utsetting av bygninger og høydemåling.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke digitale ressurser til å beregne, måle opp og merke etter beskrivelse og tegning',
    'forstå og arbeide etter tegninger og beskrivelser',
  ],
  sections: [
    {
      title: 'Introduksjon til landmåling',
      content: `## Introduksjon til landmåling

Landmåling handler om å bestemme posisjoner og høyder på jordoverflaten. I bygg og anlegg brukes landmåling til å stikke ut bygninger og kontrollere høyder.

**Hvorfor landmåling?**
- Plassere bygninger riktig på tomten
- Sikre at fundamenter får riktig høyde
- Kontrollere at konstruksjoner er i lodd og vater
- Dokumentere plassering av rør og kabler

**Grunnleggende begreper:**

**Koordinater**
Posisjoner angis med koordinater (nord og øst) i et rutenett. I Norge brukes UTM-koordinater eller lokale nett.

**Kote/høyde**
Høyder angis som meter over havet (m.o.h.) eller over et lokalt referansepunkt (fastmerke).

**Fastmerke**
Et punkt med kjent posisjon og høyde som brukes som referanse for måling.

**Polpunkt**
Punkt der måleinstrumentet settes opp.

**Sikting**
Retningen instrumentet peker mot.

**Typer landmåling:**
- **Utsetting:** Merke punkter i terrenget fra tegninger
- **Innmåling:** Måle punkter i terrenget til tegninger
- **Nivellering:** Måle høydeforskjeller`,
    },
    {
      title: 'Måleinstrumenter',
      content: `## Måleinstrumenter

Ulike instrumenter brukes til ulike måleopppgaver.

**Målebånd og meterstokk**
- Enkelt verktøy for kortere avstander
- Stålbånd mest nøyaktig
- Pass på strekk og temperatur

**Lasermåler**
- Måler avstander med laserstråle
- Rask og nøyaktig
- Viser avstand på display
- Kan beregne areal og volum

**Nivellerinstrument (nivellerkikkert)**
- Kikkert som alltid sikter horisontalt
- Brukes sammen med nivelleringsstang (latte)
- Måler høydeforskjeller
- Automatisk eller manuell horisontinnstilling

**Teodolitt**
- Måler vinkler horisontalt og vertikalt
- Brukes til utsetting av retninger
- Krever opplæring

**Totalstasjon**
- Kombinerer teodolitt og avstandsmåler
- Måler posisjon og høyde i ett
- Moderne "arbeidshest" i landmåling
- Kan kobles til datamaskin

**GPS/GNSS**
- Satellittbasert posisjonering
- Meget rask måling
- RTK-GPS gir centimeternøyaktighet
- Krever fri sikt til himmel

**Roterende laser**
- Sender ut horisontalt laserplan
- Brukes til nivåkontroll
- Mottaker på stang viser når man er i nivå`,
    },
    {
      title: 'Nivellering',
      content: `## Nivellering

Nivellering er måling av høydeforskjeller mellom punkter.

**Prinsippet:**
Et nivellerinstrument sikter horisontalt. Ved å lese av på en loddrett stang (latte) ved to punkter, kan vi beregne høydeforskjellen.

**Utstyr:**
- Nivellerinstrument på stativ
- Nivelleringsstang (latte) med cm-inndeling
- Notatblokk

**Fremgangsmåte:**

**1. Sett opp instrumentet**
Plasser instrumentet mellom punktene som skal måles. Juster til horisontalt (libelle i vater).

**2. Sikting bak (til kjent punkt)**
- Sikt mot latta på punktet med kjent høyde
- Les av på latta der trådkorset treffer
- Skriv ned avlesningen (baksikt)

**3. Beregn instrumenthøyde**
Instrumenthøyde = Kjent høyde + Baksikt

**4. Sikting frem (til nytt punkt)**
- Vri instrumentet mot det nye punktet
- Les av på latta (framsikt)

**5. Beregn ny høyde**
Ny høyde = Instrumenthøyde - Framsikt

**Eksempel:**
- Kjent høyde: 100,00 m
- Baksikt: 1,45 m
- Instrumenthøyde: 100,00 + 1,45 = 101,45 m
- Framsikt: 0,92 m
- Ny høyde: 101,45 - 0,92 = 100,53 m`,
    },
    {
      title: 'Utsetting av bygninger',
      content: `## Utsetting av bygninger

Utsetting betyr å markere hvor en bygning skal stå på tomten.

**Utgangspunkt:**
- Situasjonsplan med koordinater
- Kjente punkter på tomten (fastmerker)
- Grensemerker

**Enkel utsetting med målebånd:**

**1. Finn referansepunkter**
Identifiser grensemerker eller andre kjente punkter.

**2. Mål fra tegning**
Les av avstander fra referansepunkter til hushjørner.

**3. Stikk ut hjørner**
Mål og marker hvert hjørne med trepinne.

**4. Kontroller**
- Mål diagonalene (skal være like i rektangel)
- Sjekk at hjørnene er vinkelrette (3-4-5 metoden)

**Profilering:**

**Profiler** er midlertidige tverrstykker utenfor byggeområdet som beholder høyder og retninger under byggingen.

**Oppbygning:**
1. Sett stolper 1-2 meter utenfor hushjørnene
2. Fest tverrbord i riktig høyde
3. Marker vegglinjer med spiker eller snitt i bordet
4. Strekk snor mellom profilene for å finne vegglinjene

**Nøyaktighet:**
- Boligbygg: ± 2-3 cm
- Industribygg: ± 5 cm
- Viktige konstruksjoner: ± 1 cm`,
    },
    {
      title: 'Eksempel: Utsetting av garasje',
      content: `## Eksempel: Utsetting av garasje

**Oppgave:**
Sett ut en garasje 6 × 8 meter. Den skal ligge 3 meter fra tomtegrense i nord og 4 meter fra tomtegrense i øst.

**Utstyr:**
- 30 meter målebånd
- Vinkelprisma eller 3-4-5 metoden
- Trepinner og slegge
- Snor
- Spray (merkespray)

**Fremgangsmåte:**

**Steg 1: Finn referansepunkter**
Lokaliser grensemerker i nord og øst.

**Steg 2: Mål til første hjørne**
- Fra nordlig grense: 3 meter sørover
- Fra østlig grense: 4 meter vestover
- Marker nordøstre hjørne med pinne

**Steg 3: Stikk ut østvegg**
- Fra nordøstre hjørne, mål 8 meter mot sør
- Marker sørøstre hjørne

**Steg 4: Kontroller vinkel**
Bruk 3-4-5 metoden:
- 3 m langs østvegg
- 4 m vinkelrett vestover
- Diagonalen skal være 5 m
Juster til diagonalen stemmer.

**Steg 5: Stikk ut resten**
- 6 m vest fra nordøstre hjørne = nordvestre
- 6 m vest fra sørøstre hjørne = sørvestre

**Steg 6: Kontroller diagonaler**
- Diagonalen i 6×8 m rektangel: √(6² + 8²) = √100 = 10 m
- Begge diagonaler skal måle 10 m

**Steg 7: Sett opp profiler**
Profiler 1,5 m utenfor hjørnene med tverrbord i ferdig gulvhøyde.`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-19-ex-1',
      task: 'Forklar hva nivellering er og hva det brukes til i bygg og anlegg.',
      solution: 'Nivellering er måling av høydeforskjeller mellom punkter ved hjelp av et instrument som sikter horisontalt. Det brukes til å bestemme og kontrollere høyder på fundamenter, gulv, veier og andre konstruksjoner, samt til å overføre høyder fra kjente punkter til nye områder.',
    },
    {
      id: 'bygg-anlegg-vg1-19-ex-2',
      task: 'Hva er 3-4-5 metoden, og hvordan brukes den til å lage en rett vinkel?',
      solution: '3-4-5 metoden brukes til å lage en nøyaktig 90 graders vinkel. Man måler 3 meter langs en linje, 4 meter vinkelrett ut, og hvis diagonalen mellom disse punktene er nøyaktig 5 meter, har man en rett vinkel. Dette følger Pythagoras\' setning: 3² + 4² = 5² (9 + 16 = 25).',
    },
    {
      id: 'bygg-anlegg-vg1-19-ex-3',
      task: 'Et punkt har kjent høyde 125,50 m. Nivellerinstrumentet viser baksikt 1,32 m på dette punktet. Hva er instrumenthøyden?',
      solution: 'Instrumenthøyde = Kjent høyde + Baksikt = 125,50 + 1,32 = 126,82 m. Instrumentet står altså 126,82 meter over havet.',
    },
    {
      id: 'bygg-anlegg-vg1-19-ex-4',
      task: 'Med instrumenthøyde 126,82 m sikter du mot et nytt punkt og leser av framsikt 2,15 m. Hva er høyden på det nye punktet?',
      solution: 'Ny høyde = Instrumenthøyde - Framsikt = 126,82 - 2,15 = 124,67 m. Det nye punktet ligger 124,67 meter over havet.',
    },
    {
      id: 'bygg-anlegg-vg1-19-ex-5',
      task: 'Hva er profiler, og hvorfor brukes de ved utsetting av bygninger?',
      solution: 'Profiler er midlertidige tverrstykker (stolper med tverrbord) som settes opp utenfor byggeområdet. De brukes til å beholde hushjørnenes posisjoner og høyder under byggingen, siden de originale markeringene i bakken blir ødelagt ved graving. Snorer spennes mellom profilene for å finne vegglinjene.',
    },
    // --- Samleoppgaver ---
    {
      id: 'bygg-anlegg-vg1-19-ex-6',
      task: 'Du skal sette ut et rektangulært hus på 10 × 12 meter. Beregn diagonallengden som du kan bruke til å kontrollere at hjørnene er vinkelrette. Beskriv også hvordan du ville gjennomført utsettingen trinn for trinn.',
      solution: 'Diagonal = √(10² + 12²) = √(100 + 144) = √244 = 15,62 m. Begge diagonaler skal måle 15,62 m. Utsetting: 1) Finn referansepunkter (grensemerker). 2) Mål og marker første hjørne fra referansepunkt. 3) Mål 12 m langs første vegg, marker hjørne 2. 4) Bruk 3-4-5 for å lage vinkel. 5) Mål 10 m for kortvegg, marker hjørne 3. 6) Mål siste hjørne fra to retninger. 7) Kontroller at begge diagonaler er 15,62 m. 8) Sett opp profiler 1-2 m utenfor hjørnene.',
    },
    {
      id: 'bygg-anlegg-vg1-19-ex-7',
      task: 'Du skal kontrollere at et betongfundament har riktig høyde. Referansepunktet har høyde 85,20 m. Du leser baksikt 1,15 m på referansen og framsikt 0,85 m på fundamentet. Hva er høyden på fundamentet, og hvor mye avviker det fra prosjektert høyde 85,55 m?',
      solution: 'Instrumenthøyde = 85,20 + 1,15 = 86,35 m. Fundamenthøyde = 86,35 - 0,85 = 85,50 m. Avvik = 85,55 - 85,50 = 0,05 m = 5 cm for lavt. Fundamentet ligger 5 cm lavere enn prosjektert høyde. Dette kan være innenfor toleranse, men bør vurderes om det påvirker videre arbeid.',
    },
  ],
  keyTerms: [
    { term: 'Nivellering', definition: 'Måling av høydeforskjeller mellom punkter med horisontalt siktende instrument.' },
    { term: 'Kote', definition: 'Høyde over havet eller et referansepunkt.' },
    { term: 'Fastmerke', definition: 'Punkt med kjent posisjon og høyde brukt som referanse.' },
    { term: 'Baksikt', definition: 'Avlesning på latte ved punkt med kjent høyde.' },
    { term: 'Framsikt', definition: 'Avlesning på latte ved punkt der høyde skal bestemmes.' },
    { term: 'Profil', definition: 'Midlertidig konstruksjon for å beholde hushjørner og høyder under bygging.' },
  ],
};

// ============================================================================
// Kapittel 20: Vindu- og dørmontering
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_20: TextbookChapter = {
  id: 'bygg-anlegg-vg1-20',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '20',
  title: 'Vindu- og dørmontering',
  description: 'Montering av vinduer og dører i ulike veggkonstruksjoner.',
  estimatedMinutes: 65,
  competenceGoals: [
    'planlegge og bygge en konstruksjon',
    'velge og bruke materialer med hensyn til bærekraft',
  ],
  sections: [
    {
      title: 'Vindustyper og oppbygning',
      content: `## Vindustyper og oppbygning

Vinduer er viktige for dagslys, utsikt, ventilasjon og estetikk. Samtidig er de en utfordring for isolasjon og tetting.

**Vinduskomponenter:**

**Karm**
Den faste rammen som monteres i veggen.

**Ramme (vindusblad)**
Den bevegelige delen med glass som åpnes og lukkes.

**Glass**
Isolerglass med 2 eller 3 lag for varmeisolasjon.

**Hengsler**
Festepunkter for åpning av rammen.

**Låsbeslag**
Lukkemekanisme og håndtak.

**Vannbrett**
Plate på utsiden under vinduet som leder vann bort.

**Vindusåpninger:**

**Sidehengslet**
Åpnes til siden som en dør. Enkelt å pusse utside.

**Topphengslet**
Øverste kant hengslet, åpnes utover. Vanlig i soverom.

**Bunnhengslet**
Nederste kant hengslet, åpnes innover øverst. God ventilasjon.

**Vippevindu**
Roterer rundt en horisontal akse i midten. Enkelt rengjøring.

**Fast vindu**
Kan ikke åpnes. Brukes der ventilasjon ikke trengs.

**Energimerking:**
Vinduer merkes med energiklasse A-G. A-vinduer har best isolasjon med U-verdi under 0,8.`,
    },
    {
      title: 'Dørtyper',
      content: `## Dørtyper

Dører deles inn etter plassering, materiale og åpningsmåte.

**Etter plassering:**

**Ytterdør**
- Hovedinngang, sidefelt, balkongdør
- Krav til innbruddssikkerhet
- Må være isolert og tett
- Ofte med glass

**Innerdør**
- Mellom rom inne i bygningen
- Lettere konstruksjon
- Fokus på design og lyd

**Branndør**
- Mellom brannceller
- Klassifisert motstand (EI30, EI60)
- Selvlukkende

**Etter materiale:**

**Tredører**
Klassisk, god isolasjon, mange design. Krever vedlikehold.

**Aluminiumsdører**
Slitesterkt, vedlikeholdsfritt. Ofte med glassparti.

**Ståldører**
Meget robust. Brukes til tekniske rom og nødutganger.

**Glassdører**
Gir lys og romfølelse. Herdet sikkerhetsglass.

**Kompositdører**
Kombinerer materialer for beste egenskaper.

**Åpningsmåter:**
- Hengslet (standard)
- Skyvedør (plassbesparende)
- Foldedør (store åpninger)
- Svingdør (toveis åpning)`,
    },
    {
      title: 'Forberedelse til montering',
      content: `## Forberedelse til montering

God forberedelse er avgjørende for vellykket montasje.

**Kontroll av åpning:**

**Mål åpningen**
- Bredde øverst, i midten og nederst
- Høyde på begge sider og i midten
- Sjekk at åpningen er i lodd og vater

**Fugerom**
- Det skal være 10-15 mm mellom karm og vegg
- For stor fuge er vanskelig å tette
- For liten fuge gir ikke plass til bevegelse

**Klargjøring:**
- Fjern løst materiale fra veggen
- Sjekk at karmlister (karmfôr) er på plass
- Ha monteringsmateriell klart

**Utstyr for montering:**
- Vater og vinkel
- Bor og skrutrekker
- Monteringsskruer (rammedybler)
- PU-skum eller mineralull
- Fugebånd
- Kiler av tre eller plast
- Evt. løfteutstyr for store enheter

**Monteringsrekkefølge vindu:**
1. Kontroller åpning
2. Sett inn karm (uten glass/ramme)
3. Kil fast og juster
4. Sjekk lodd, vater og diagonal
5. Skru fast
6. Isoler fuge
7. Monter ramme/glass
8. Monter beslag
9. Sjekk funksjon

**Monteringsrekkefølge dør:**
1. Kontroller åpning
2. Sett karmdelene sammen
3. Plasser karm i åpning
4. Kil og juster
5. Sjekk lodd, vater, vinkel
6. Skru fast
7. Isoler fuge
8. Heng inn dørblad
9. Juster hengsler og lås
10. Monter fôring og listverk`,
    },
    {
      title: 'Montering og tetting',
      content: `## Montering og tetting

Riktig montering sikrer funksjon, tetthet og lang levetid.

**Festing av karm:**

**Skrufesting:**
- Skru gjennom karmen inn i karmfôr/stender
- Minimum 2 skruer per side
- Bruk rammedybler i mur/betong
- Ikke stram for hardt (karmen kan vri seg)

**Klemmefester:**
- Metallklemmer på karmen
- Festes til veggkonstruksjonen
- Gir litt bevegelse
- Skjuler festepunkter

**Tetting av fuge:**

Fugen mellom karm og vegg må være både isolert og lufttett.

**Isolering:**
- Mineralull presset forsiktig inn
- PU-skum (ekspanderende - bruk ikke for mye!)
- Skummet må ikke hindre drenering nederst

**Lufttetting - innside:**
- Dampsperre/vindsperre foldes inn mot karmen
- Tapes eller festes med fugebånd
- Tettprofiler i overgang karm/listverk

**Værbeskyttelse - utside:**
- Fugebånd eller fugemasse
- Må hindre vann og vind, men slippe ut fukt
- Vannbrett med fall utover

**Kontroll etter montering:**
- Dør/vindu åpnes og lukkes lett
- Ingen gnisning eller skraping
- Låsbeslag fungerer
- Pakning gir tett slutning
- Ingen dagslys synlig rundt rammen`,
    },
    {
      title: 'Eksempel: Montering av vindu i trevegg',
      content: `## Eksempel: Montering av vindu i trevegg

**Oppgave:**
Montere et vindu 120 × 120 cm i bindingsverksvegg.

**Forberedelse:**

**Steg 1: Kontroll**
- Mål vindusåpningen: 124 × 124 cm (OK, gir 2 cm fuge)
- Sjekk at karmfôr er i lodd og vater
- Vinduskarmen er 120 × 120 cm

**Steg 2: Klargjør vinduet**
- Ta ut rammer/glass for lettere håndtering
- Sjekk at karmen er hel og ren

**Montering:**

**Steg 3: Plasser karmen**
- Løft karmen inn i åpningen
- Sett kiler nederst og på sidene
- Karmen skal stå litt innenfor utvendig side

**Steg 4: Justering**
- Sjekk vater horisontalt nederst og øverst
- Sjekk lodd vertikalt på begge sider
- Mål diagonalene (skal være like)
- Juster med kiler til alt stemmer

**Steg 5: Festing**
- Forbor gjennom karmen
- Skru med rammedybler i karmfôr
- 2-3 skruer per side
- Sjekk at karmen ikke vrir seg

**Avslutning:**

**Steg 6: Isolering**
- Fyll fugen med mineralull (løst, ikke presset)
- Eller sprøyt PU-skum forsiktig

**Steg 7: Tetting**
- Innside: Teip vindsperre mot karm
- Utside: Fugebånd eller fugemasse

**Steg 8: Montering av ramme/glass**
- Sett rammen tilbake på hengsler
- Sjekk at vinduet åpnes og lukkes lett

**Steg 9: Beslag og listverk**
- Monter vannbrett utvendig
- Monter innvendige lister`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-20-ex-1',
      task: 'Nevn de viktigste delene i et vindu og forklar kort hva hver del gjør.',
      solution: 'Karm - den faste rammen som monteres i veggen. Ramme (vindusblad) - den bevegelige delen med glass. Glass - isolerglass med 2-3 lag for varmeisolasjon. Hengsler - festepunkter for åpning. Låsbeslag - lukkemekanisme og håndtak. Vannbrett - plate på utsiden som leder vann bort fra vinduet.',
    },
    {
      id: 'bygg-anlegg-vg1-20-ex-2',
      task: 'Hvor stort fugerom bør det være mellom vinduskarm og veggåpning, og hvorfor?',
      solution: 'Det bør være 10-15 mm fugerom mellom karm og vegg. Dette gir plass til isolering og tetting, tillater justeringer ved montering, og gir rom for små bevegelser i konstruksjonen. For stor fuge er vanskelig å tette godt, mens for liten fuge ikke gir nok plass til isolasjon og bevegelse.',
    },
    {
      id: 'bygg-anlegg-vg1-20-ex-3',
      task: 'Hva er forskjellen på en ytterdør og en innerdør når det gjelder krav og egenskaper?',
      solution: 'Ytterdør: Må være godt isolert og tett mot vær og vind, har krav til innbruddssikkerhet, ofte med glass for dagslys, tyngre konstruksjon. Innerdør: Lettere konstruksjon, fokus på design og lyddemping mellom rom, ingen værkrav, enklere låsemekanisme.',
    },
    {
      id: 'bygg-anlegg-vg1-20-ex-4',
      task: 'Hvorfor er det viktig å sjekke diagonalmålene når man monterer en vinduskarm?',
      solution: 'Ved å sjekke at begge diagonalene er like lange, kontrollerer man at karmen er vinkelrett (har rette hjørner). Hvis diagonalene er forskjellige, er karmen skjev, noe som vil gjøre at vinduet ikke lukkes ordentlig og kan gi problemer med tetting og funksjon.',
    },
    {
      id: 'bygg-anlegg-vg1-20-ex-5',
      task: 'Beskriv hvordan fugen mellom vinduskarm og vegg skal tettes for å være både isolert og lufttett.',
      solution: 'Fugen isoleres med mineralull (presset forsiktig inn) eller PU-skum. Innvendig tettes med dampsperre/vindsperre som festes mot karmen med tape eller fugebånd, og dekkes med listverk. Utvendig brukes fugebånd eller fugemasse som hindrer vann og vind, men slipper ut eventuell fukt. Nederst må dreneringsåpning beholdes.',
    },
    // --- Samleoppgaver ---
    {
      id: 'bygg-anlegg-vg1-20-ex-6',
      task: 'Du skal montere en ytterdør i en murvegg. Lag en komplett sjekkliste for hele montasjeprosessen fra forberedelse til ferdig montert dør.',
      solution: 'FORBEREDELSE: 1) Mål åpningen (bredde og høyde flere steder). 2) Kontroller at fugerom er 10-15 mm. 3) Sjekk at åpningen er i lodd og vater. 4) Ha alt utstyr klart: rammedybler, bor, vater, kiler, isolasjon, fugebånd. MONTERING: 5) Sett karmdelene sammen. 6) Plasser karm i åpning. 7) Kil fast provisorisk. 8) Juster til lodd og vater. 9) Sjekk diagonaler. 10) Bor og skru med rammedybler, min 2 per side. 11) Fjern kiler og isoler fuge. 12) Tape/fest vindsperre mot karm innvendig. 13) Fugebånd utvendig. 14) Heng inn dørblad. KONTROLL: 15) Test åpning/lukking. 16) Juster hengsler ved behov. 17) Test lås. 18) Monter fôring og listverk.',
    },
    {
      id: 'bygg-anlegg-vg1-20-ex-7',
      task: 'En vindusåpning måler 103 cm i bredde øverst, 102 cm i midten og 104 cm nederst. Vinduet som skal monteres har karm på 100 cm. Vurder om dette er akseptabelt og forklar eventuelle problemer.',
      solution: 'Fugerom varierer fra 1,5 cm (midten) til 2 cm (nederst/øverst). Dette er innenfor 10-15 mm anbefaling i midten, men litt stort øverst og nederst. Hovedproblemet er at åpningen ikke er parallell - den er skjev. Variasjon på 2 cm over veggtykkelsen viser at karmlister/veggen ikke er i lodd. Løsning: Justere åpningen med påfôring eller krymping, eller justere karmen med kiler og godta varierende fugerom. Viktig å sjekke at endelig fuge blir tett og at karmen blir vinkelrett selv om åpningen ikke er det.',
    },
  ],
  keyTerms: [
    { term: 'Karm', definition: 'Den faste rammen til vindu eller dør som monteres i veggen.' },
    { term: 'Fugerom', definition: 'Åpningen mellom karm og veggåpning, normalt 10-15 mm.' },
    { term: 'U-verdi', definition: 'Mål på varmegjennomgang - lavere verdi betyr bedre isolasjon.' },
    { term: 'Vannbrett', definition: 'Plate under vindu/dør på utsiden som leder vann bort fra veggen.' },
    { term: 'Rammedybel', definition: 'Skrue med hylse for festing i mur og betong.' },
    { term: 'Branndør', definition: 'Dør med klassifisert brannmotstand mellom brannceller.' },
  ],
};

// ============================================================================
// Eksporter kapitler 16-20
// ============================================================================

export const CHAPTERS_BYGG_ANLEGG_VG1_PART2 = [
  CHAPTER_BYGG_ANLEGG_VG1_16,
  CHAPTER_BYGG_ANLEGG_VG1_17,
  CHAPTER_BYGG_ANLEGG_VG1_18,
  CHAPTER_BYGG_ANLEGG_VG1_19,
  CHAPTER_BYGG_ANLEGG_VG1_20,
];
