/**
 * Teknologi- og industrifag VG1 - Tekstbokinnhold
 *
 * Dekker LK20 læreplan for Teknologi- og industrifag på VG1
 * 28 kapitler totalt (dette er del 1: kapittel 1-14)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Materiallære
// ============================================================================

export const CHAPTER_TIF_VG1_1: TextbookChapter = {
  id: 'tif-vg1-1',
  courseId: 'tif-vg1',
  chapterNumber: '1',
  title: 'Materiallære',
  description: 'Egenskaper og bruk av ulike materialer.',
  estimatedMinutes: 60,
  competenceGoals: [
    'kjenne til ulike materialers egenskaper',
    'velge riktig materiale for ulike formål',
  ],
  sections: [
    {
      title: 'Introduksjon til materialer',
      content: `## Introduksjon til materialer

Materialer er grunnlaget for all produksjon. Valg av riktig materiale er avgjørende for at et produkt skal fungere som tiltenkt. I industrien arbeider vi med mange ulike materialer, hver med sine særegne egenskaper.

**Hvorfor materiallære?**
- Forstå materialers egenskaper og begrensninger
- Velge riktig materiale for riktig bruk
- Unngå feil og svikt i produksjon
- Optimalisere kostnad og kvalitet
- Ivareta helse, miljø og sikkerhet

**Hovedgrupper av materialer:**
- Metaller (jern, stål, aluminium, kobber)
- Plast (termoplast, herdeoplast)
- Kompositter (fiberforsterket plast)
- Keramikk (porselen, glass)
- Tre og naturmaterialer`,
    },
    {
      title: 'Metaller',
      content: `## Metaller

Metaller er de mest brukte materialene i industrien. De har gode mekaniske egenskaper og kan formes på mange måter.

**Jernholdige metaller (ferrøse)**

**Jern og stål**
Jern er det mest brukte metallet i verden. Rent jern er for mykt til de fleste bruksområder, så vi legger til karbon og får stål.

- Lavkarbonstål (< 0,3% C): Lettbearbeidet, bøyelig, brukes til plater, rør
- Middelkarbonstål (0,3-0,6% C): Hardere, brukes til maskindeler
- Høykarbonstål (> 0,6% C): Meget hardt, brukes til verktøy

**Rustfritt stål**
Inneholder krom (minimum 10,5%) som danner et beskyttende lag mot rust.
- Brukes i matindustrien, kjøkken, medisinske instrumenter
- Dyrere enn vanlig stål
- Vanskeligere å bearbeide

**Støpejern**
Inneholder 2-4% karbon, hardt men sprøtt.
- Brukes til motorblokker, maskinfundamenter
- God vibrasjonsdempning
- Kan ikke sveises lett

**Ikke-jernholdige metaller (ikke-ferrøse)**

**Aluminium**
- Lett (⅓ av ståls vekt)
- God korrosjonsmotstand
- God elektrisk og termisk leder
- Brukes i fly, biler, båter, emballasje

**Kobber**
- Meget god elektrisk leder
- God termisk leder
- Brukes i elektriske ledninger, rør, varmevekslere
- Kan bøyes lett uten å brekke

**Messing (kobber + sink)**
- Gyllen farge
- Lett å bearbeide
- Brukes til ventiler, beslag, instrumenter

**Bronse (kobber + tinn)**
- Hardere enn messing
- God slitestyrke
- Brukes til lagre, busser, propeller`,
    },
    {
      title: 'Materialegenskaper',
      content: `## Materialegenskaper

For å velge riktig materiale må vi forstå materialegenskapene.

**Mekaniske egenskaper**

**Fasthet**
Materialets evne til å motstå brudd ved belastning. Måles i MPa (megapascal).
- Strekkfasthet: Motstand mot strekking
- Trykkfasthet: Motstand mot trykking
- Bøyefasthet: Motstand mot bøying

**Hardhet**
Materialets motstand mot riper og inntrykk. Jo hardere, jo mer slitesterkt.
- Måles med Brinell, Rockwell eller Vickers metoder
- Viktig for verktøy og slitedeler

**Seighet**
Evne til å absorbere energi før brudd. Seige materialer tåler slag.
- Stål er seigt
- Støpejern er sprøtt (liten seighet)

**Duktilitet**
Evne til å tøyes uten å brekke. Duktile materialer kan formes.
- Kobber er meget duktilt
- Støpejern er ikke duktilt

**Elastisitet**
Evne til å gå tilbake til opprinnelig form etter belastning.
- Gummi og fjærstål har god elastisitet

**Fysiske egenskaper**

**Tetthet**
Masse per volumenhet (kg/m³ eller g/cm³).
- Stål: 7,85 g/cm³
- Aluminium: 2,70 g/cm³
- Titan: 4,51 g/cm³

**Smeltepunkt**
Temperatur der materiale går fra fast til flytende.
- Jern: 1538°C
- Aluminium: 660°C
- Kobber: 1085°C

**Elektrisk ledningsevne**
Evne til å lede elektrisk strøm.
- Kobber og aluminium er gode ledere
- Rustfritt stål er dårligere leder

**Termisk ledningsevne**
Evne til å lede varme.
- Kobber har meget god varmeledning
- Rustfritt stål har dårlig varmeledning`,
    },
    {
      title: 'Plast og kompositter',
      content: `## Plast og kompositter

**Plast**

Plast er syntetiske materialer laget av polymerer (lange molekylkjeder).

**Termoplast**
Kan smeltes og formes om igjen.
- Polyetylen (PE): Plastposer, beholdere
- Polypropylen (PP): Møbler, bilkarosserideler
- PVC: Rør, vinduer, kabler
- Polykarbonat (PC): Beskyttelsesbriller, CD-er

Fordeler: Kan resirkuleres, lett å forme
Ulemper: Lavere styrke enn metall

**Herdeoplast**
Kan ikke smeltes om etter herding.
- Epoxy: Lim, belegg
- Polyester: Glassfiberarmert plast (GRP)
- Bakelit: Elektriske brytere

Fordeler: God temperaturbestandighet, stiv
Ulemper: Kan ikke resirkuleres lett

**Kompositter**

Kompositter består av to eller flere materialer kombinert for bedre egenskaper.

**Glassfiberarmert plast (GRP)**
- Glassfibrer i polyesterharpiks
- Lett og sterkt
- Brukes i båter, vindmøllevinger

**Karbonfiberarmert plast (CFRP)**
- Karbonfiber i epoxyharpiks
- Meget lett og sterkt
- Dyrt
- Brukes i fly, racerbiler, sykler

**Sandwich-konstruksjoner**
- To stive dekk med lett kjerne (skum, honeycomb)
- Meget stiv ved lav vekt
- Brukes i fly, båter`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-1-ex-1',
      task: 'Hva er forskjellen mellom jern og stål?',
      solution: 'Jern er grunnstoffet (Fe), mens stål er en legering av jern og karbon (vanligvis 0,02-2% karbon). Rent jern er for mykt til de fleste bruksområder, så vi legger til karbon for å gjøre det hardere og sterkere.',
    },
    {
      id: 'tif-vg1-1-ex-2',
      task: 'Hvorfor brukes aluminium i fly fremfor stål?',
      solution: 'Aluminium veier kun ⅓ av stål ved samme volum. I fly er vekt kritisk for drivstofforbruk og løfteevne. Aluminium har også god korrosjonsmotstand. Selv om det er svakere enn stål, gir vektbesparelsen stor fordel.',
    },
    {
      id: 'tif-vg1-1-ex-3',
      task: 'Forklar forskjellen mellom termoplast og herdeoplast.',
      solution: 'Termoplast kan smeltes og formes om flere ganger, som smør som kan smeltes. Herdeoplast herdes permanent ved oppvarming og kan ikke smeltes om igjen, som et stekt egg. Termoplast kan resirkuleres lettere.',
    },
    {
      id: 'tif-vg1-1-ex-4',
      task: 'Du skal lage et verktøy som må være meget hardt. Hvilken type stål velger du?',
      solution: 'Høykarbonstål (over 0,6% karbon) er best for verktøy fordi det kan herdes til meget høy hardhet. Dette stål brukes til bor, meisler, kniver og andre verktøy som må motstå slitasje.',
    },
    {
      id: 'tif-vg1-1-ex-5',
      task: 'Hva er en kompositt, og nevn et eksempel?',
      solution: 'En kompositt er et materiale sammensatt av to eller flere materialer for å få bedre egenskaper enn materialene hver for seg. Eksempel: Glassfiberarmert plast (GRP) består av glassfibrer (sterk i strekk) i polyesterharpiks (binder sammen), og brukes i båter.',
    },
  ],
  keyTerms: [
    { term: 'Stål', definition: 'Legering av jern og karbon med typisk 0,02-2% karbon.' },
    { term: 'Duktilitet', definition: 'Materialets evne til å tøyes uten å brekke.' },
    { term: 'Hardhet', definition: 'Materialets motstand mot riper og inntrykk.' },
    { term: 'Termoplast', definition: 'Plast som kan smeltes og formes om flere ganger.' },
    { term: 'Herdeoplast', definition: 'Plast som herdes permanent og ikke kan smeltes om.' },
    { term: 'Kompositt', definition: 'Materiale sammensatt av to eller flere materialer.' },
    { term: 'Tetthet', definition: 'Masse per volumenhet, målt i kg/m³ eller g/cm³.' },
    { term: 'Fasthet', definition: 'Materialets evne til å motstå brudd ved belastning.' },
  ],
};

// ============================================================================
// Kapittel 2: Sveising og sammenføyning
// ============================================================================

export const CHAPTER_TIF_VG1_2: TextbookChapter = {
  id: 'tif-vg1-2',
  courseId: 'tif-vg1',
  chapterNumber: '2',
  title: 'Sveising og sammenføyning',
  description: 'Teknikker for å sammenføye materialer.',
  estimatedMinutes: 65,
  competenceGoals: [
    'kjenne til ulike sveiseteknikker',
    'forstå prinsipper for sammenføyning',
  ],
  sections: [
    {
      title: 'Hva er sveising?',
      content: `## Hva er sveising?

Sveising er en sammenføyningsmetode der vi smelter sammen materialer, vanligvis metaller, ved hjelp av varme. De smeltede materialene flyter sammen og størkner til en fast forbindelse.

**Hvorfor sveise?**
- Sterk og permanent forbindelse
- Tett (væske- og gassdikt)
- Kan forbinde tynne og tykke materialer
- Brukes i bygg, skip, broer, biler, rørledninger

**Grunnleggende sveiseprinsipp:**
1. Tilføre varme til sammenføyningsstedet
2. Smelting av grunnmaterialet (og tilsetsmateriale)
3. Beskyttelse av smeltebadet mot luft
4. Størkne til fast sveisesøm

**Hovedtyper sveising:**
- Buesveising (elektrisk lysbue)
- Gasssveising (brenngass)
- Motstands sveising (elektrisk motstand)
- Laserveising og elektronstrålsveising`,
    },
    {
      title: 'MIG/MAG-sveising',
      content: `## MIG/MAG-sveising

MIG/MAG (Metal Inert/Active Gas) er den mest brukte sveiseteknikken i industrien.

**Prinsipp:**
En elektrisk lysbue dannes mellom en kontinuerlig matende metalltråd (elektrode) og arbeidsstykket. Tråden smelter og danner sveisesømmen. En beskyttelsesgass skjermer smeltebadet mot luft.

**MIG (Metal Inert Gas)**
Bruker inert (ikke-reaktiv) gass som argon eller helium.
- Brukes til aluminium, rustfritt stål
- Gir ren og fin sveisesøm

**MAG (Metal Active Gas)**
Bruker aktiv gass som CO₂ eller blandinger.
- Brukes til stål
- Billigere gass enn MIG
- Mest vanlig i industrien

**Fordeler:**
- Høy sveisehastighet
- Kontinuerlig sveising (ikke bytte elektroder)
- Lett å lære
- Kan sveise tynne og tykke materialer
- Lite etterarbeid

**Ulemper:**
- Krever gassflaske
- Kan ikke brukes i sterk vind (utendørs)
- Tungt utstyr

**Sveiseparametere:**
- Strømstyrke (ampere): Bestemmer innbrenning
- Spenning (volt): Påvirker buens lengde
- Trådhastighet: Hvor fort tråd mates frem
- Gasstilførsel: Riktig mengde beskyttelsesgass`,
    },
    {
      title: 'TIG-sveising og pinnesveising',
      content: `## TIG-sveising og pinnesveising

**TIG-sveising (Tungsten Inert Gas)**

TIG bruker en ikke-smeltende wolframelektrode og tilsettstådd separat.

**Prinsipp:**
Lysbuen dannes mellom wolframelektroden og arbeidsstykket. Sveiser tilsetter manuelt tilsettsmateriale (stavs) i smeltebadet. Inert gass (argon) beskytter.

**Fordeler:**
- Meget fin og ren sveisesøm
- Presis kontroll
- Kan sveise alle metaller
- Ingen sprut eller søl
- Brukes til kvalitetskritiske sveiser

**Ulemper:**
- Lav sveisehastighet
- Krever høy kompetanse
- Dyrt utstyr
- Begge hender opptatt

**Bruksområder:**
- Rustfritt stål i matindustrien
- Aluminium i fly og båter
- Rørsveising i petroleum
- Kunsthåndverk og smykker

**Pinnesveising (MMA - Manual Metal Arc)**

Eldste og enkleste sveiseteknikken, fortsatt mye brukt.

**Prinsipp:**
En pinnelektrode med belegg holder man i en tang. Lysbuen smelter både pinne og grunnmateriale. Belegget danner gass og slagg som beskytter sveisen.

**Fordeler:**
- Enkelt utstyr
- Billig
- Mobilt (ikke gassflaske)
- Tåler vind og vær
- Kan sveise i alle stillinger

**Ulemper:**
- Lav sveisehastighet
- Må bytte pinne ofte
- Slagg må fjernes
- Mye røyk

**Bruksområder:**
- Vedlikehold og reparasjon
- Byggeplasser
- Montering utendørs
- Gårdsbruk`,
    },
    {
      title: 'Andre sammenføyningsmetoder',
      content: `## Andre sammenføyningsmetoder

**Lodding**

Lodding forbinder metaller ved å smelte et tilsetsmateriale (loddetinn) med lavere smeltepunkt enn grunnmaterialet.

**Myklodding (< 450°C)**
- Bruker tinnbasert loddetinn
- Elektriske forbindelser, elektronikk
- Loddebolt eller loddekolbe

**Hardlodding (> 450°C)**
- Bruker sølv- eller messingbasert loddemateriale
- Sterkere forbindelse
- Rør, varmeovner, verktøy

**Liming**

Liming bruker kjemisk binding mellom lim og materialer.

**Typer lim:**
- Epoxylim: Meget sterkt, 2-komponent
- Cyanoacrylat: Sekundlim, rask herding
- Polyuretanlim: Fleksibelt, fuktbestandig
- Kontaktlim: For store flater

**Fordeler:**
- Kan forbinde ulike materialer
- Jevn spenningsfordeling
- Ingen varmedeformasjon
- Glatt overflate

**Ulemper:**
- Lavere styrke enn sveising
- Herdetid
- Temperaturavhengig

**Mekanisk sammenføyning**

**Bolter og skruer:**
- Demonterbar forbindelse
- Kan skiftes/justeres
- Brukes i maskiner, konstruksjoner

**Nagler:**
- Permanent forbindelse
- Fly, skip, stålkonstruksjoner
- Meget sterk skjærstyrke

**Klemming og pressing:**
- Ingen tilleggsmaterialer
- Rask sammensetting
- Rør, kabler, profiler`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-2-ex-1',
      task: 'Hva er forskjellen mellom MIG og MAG-sveising?',
      solution: 'MIG bruker inert (ikke-reaktiv) gass som argon, og brukes til aluminium og rustfritt stål. MAG bruker aktiv gass som CO₂ og brukes til vanlig stål. MAG er mest vanlig i industrien fordi gassen er billigere.',
    },
    {
      id: 'tif-vg1-2-ex-2',
      task: 'Når vil du velge TIG-sveising fremfor MIG/MAG-sveising?',
      solution: 'TIG velges når det kreves meget fin og ren sveisesøm, for eksempel ved sveising av rustfritt stål i matindustrien, aluminium i fly, eller kvalitetskritiske rørsveiser. TIG gir bedre kvalitet men er tregere.',
    },
    {
      id: 'tif-vg1-2-ex-3',
      task: 'Nevn to fordeler og én ulempe med pinnesveising.',
      solution: 'Fordeler: 1) Enkelt og mobilt utstyr uten gassflaske, 2) Tåler vind og vær ved utendørs arbeid. Ulempe: Lavere sveisehastighet og må ofte bytte pinne.',
    },
    {
      id: 'tif-vg1-2-ex-4',
      task: 'Hva er forskjellen mellom lodding og sveising?',
      solution: 'Ved sveising smelter vi grunnmaterialet som forbindes. Ved lodding smelter vi bare tilsettsmaterialet (loddetinn) som har lavere smeltepunkt enn grunnmaterialet. Lodding gir svakere forbindelse men er enklere og skåner materialene.',
    },
    {
      id: 'tif-vg1-2-ex-5',
      task: 'Du skal feste to aluminiumsplater som må kunne demonteres senere. Hvilken sammenføyningsmetode velger du?',
      solution: 'Mekanisk sammenføyning med bolter/skruer er best når forbindelsen må kunne demonteres. Sveising og liming er permanente metoder. Bolter gir også mulighet for justering.',
    },
    {
      id: 'tif-vg1-2-ex-6',
      task: 'Hvorfor bruker vi beskyttelsesgass ved MIG/MAG-sveising?',
      solution: 'Beskyttelsesgassen skjermer det smeltede metallet mot luftens oksygen og nitrogen. Uten beskyttelse ville oksygen reagere med smeltebadet og gi porøs og svak sveisesøm. Gassen skyver vekk luften rundt sveisen.',
    },
  ],
  keyTerms: [
    { term: 'MIG/MAG-sveising', definition: 'Buesveising med kontinuerlig trådelektrode og beskyttelsesgass.' },
    { term: 'TIG-sveising', definition: 'Buesveising med wolframelektrode og separat tilsettstav.' },
    { term: 'Pinnesveising', definition: 'Buesveising med belagt pinneelektrode.' },
    { term: 'Lodding', definition: 'Sammenføyning ved å smelte tilsettsmateriale med lavere smeltepunkt.' },
    { term: 'Beskyttelsesgass', definition: 'Gass som skjermer smeltebadet mot luftens påvirkning.' },
    { term: 'Smeltebadet', definition: 'Det smeltede metallområdet under sveising.' },
  ],
};

// ============================================================================
// Kapittel 3: Maskinering
// ============================================================================

export const CHAPTER_TIF_VG1_3: TextbookChapter = {
  id: 'tif-vg1-3',
  courseId: 'tif-vg1',
  chapterNumber: '3',
  title: 'Maskinering',
  description: 'Bearbeiding av metall og andre materialer.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forstå grunnleggende maskineringsteknikker',
    'kjenne til verktøy og maskiner for materialbear beiding',
  ],
  sections: [
    {
      title: 'Introduksjon til maskinering',
      content: `## Introduksjon til maskinering

Maskinering er bearbeiding av materialer ved å fjerne spon (materiale) med skjærende verktøy. Dette er en av de viktigste produksjonsmetodene i industrien.

**Hvorfor maskinere?**
- Lage nøyaktige former og dimensjoner
- Produsere komplekse geometrier
- Oppnå glatte overflater
- Lage gjenget og hull
- Høy presisjon (ned til tusendels millimeter)

**Hovedprosesser:**
- Dreining: Arbeidsstykke roterer, verktøy fjerner materiale
- Fresing: Verktøy roterer, arbeidsstykke fastmontert
- Boring: Lage hull med bormaskin
- Sliping: Finbearbeiding med slipeskive
- Saging: Kapping av materialer

**Viktige faktorer:**
- Skjærehastighet: Hvor fort verktøyet beveger seg gjennom materialet
- Matehastighet: Hvor fort verktøyet mates inn i materialet
- Skjæredybde: Hvor dypt verktøyet skjærer
- Kjølevæske: Kjøler og smører, fjerner spon`,
    },
    {
      title: 'Dreiebenk og dreining',
      content: `## Dreiebenk og dreining

Dreiebenken er en av de eldste og viktigste maskinverktøyene.

**Prinsipp:**
Arbeidsstykket roterer i chucken (spennhode), og et faststående skjærverktøy fjerner materiale når det mates inn.

**Hoveddeler på dreiebenk:**
- Chuck: Holder arbeidsstykket
- Senter: Støtte for lange emner
- Dreiesupport: Holder og mater verktøyet
- Stålholder: Holder skjærstålet
- Pinol: Holder boring og senterbor

**Dreioperasjoner:**

**Plan dreining**
Skjærer i endeplaten på arbeidsstykket for å få plan flate.

**Lengde dreining**
Skjærer langs arbeidsstykket for å redusere diameteren.

**Boring**
Lager hull i enden av arbeidsstykket med bor i pinol.

**Gjengeskjæring**
Skjærer gjenger (skruegjenger) med spesialt verktøy.

**Gradreining**
Lager koniske (kjegleformede) flater.

**Rilling**
Skjærer smale riller med rilleståål.

**Kapping**
Kapper av arbeidsstykket med kappeståål.

**Skjærverktøy**
- HSS (High Speed Steel): Standard stålverktøy
- Hardmetall: Meget hardt, tåler høyere hastigheter
- Keramikk og CBN: Ekstrem hardhet for spesialbruk

**Sikkerhetsregler:**
- Bruk vernebriller
- Fjern chuck-nøkkel før start
- Ikke ha løse klær eller smykker
- Stop maskinen før måling`,
    },
    {
      title: 'Fresemaskin og fresing',
      content: `## Fresemaskin og fresing

Fresemaskinen bruker et roterende flerkantet verktøy til å fjerne materiale fra et faststående arbeidsstykke.

**Prinsipp:**
Fresa roterer og arbeidsstykket er fastmontert på bordet. Bordet kan bevege seg i X, Y og Z-retning.

**Typer fresemaskiner:**

**Vertikalfres**
Fresa står vertikalt over bordet.
- Mest vanlig
- God for flatefresing, slissing, boring

**Horisontalfres**
Fresa står horisontalt.
- God for tung fjerning av materiale
- Kan bruke flere frese samtidig

**Freseoperasjoner:**

**Planfresing**
Fresing av flate overflater.
- Planfres med store innstikksplater

**Kantfresing**
Fresing av kanter og trinn.
- Sylinderfres eller hullfres

**Slissing og sporfresing**
Lage spalter og spor.
- Slissfres i ulike bredder

**Lomme- og hulromsfresing**
Lage fordypninger.
- Pinnefres eller kulefres

**Profifresing**
Lage komplekse profiler.
- Profilfres med ønsket form

**Freser (verktøy):**
- Sylinderfres: Vanligste, flere tenner
- Kulefres: Rund spiss, for 3D-former
- Pinnefres: Flat bunn, for lommer
- Fasfres: For avfasing (fasking) av kanter
- Spiralbor: For hullfresing

**Viktige parametere:**
- Turtall (rpm): Fresa roterer fort
- Matehastighet: Bordet beveger seg sakte
- Skjæredybde: Hvor dypt fresa skjærer
- Kjøling: Kjølevæske eller luft`,
    },
    {
      title: 'Boring og gevær',
      content: `## Boring og gevær

**Bormaskin**

Bormaskin brukes til å lage hull.

**Typer:**
- Håndbormaskin: Mobil, liten
- Søylebormaskin: Fastmontert, presis
- Radialbormaskin: Kan nå langt ut

**Spiralbor:**
Det vanligste borverktøyet.
- To skjærekanter i spiralform
- Kommer i standardstørrelser
- HSS for metall, hardmetall for hardt materiale

**Boretips:**
- Bruk senterbor først for å lage senker
- Bruk kjølevæske på metall
- Senk hastighet for store bor og harde materialer
- Spenn arbeidsstykket godt fast

**Senter boring**
For presisjonshull bruker vi senterbor som lager en konisk fordypning som guider spiralboret.

**Gevær (gevind skjæring)**

Gevær lager innvendig gjenger (i hull).

**Fremgangsmåte:**
1. Bor hull med kjernetappbor (litt mindre enn gjengediameter)
2. Bruk gevær i håndtak eller maskin
3. Skru geværet inn med kjølevæske
4. Vri litt tilbake for å bryte spon
5. Skru helt inn til ønsket dybde

**Gevær typer:**
- Gjennomgående: Skjærer hele gjenger
- Formgevær: Danner gjenger uten å fjerne materiale
- Maskingevær: For maskiner

**Sikkerhetsregler:**
- Spenn arbeidsstykket fast
- Bruk vernebriller
- Ikke berør spinn ende bor
- Fjern nøkler før start`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-3-ex-1',
      task: 'Hva er forskjellen mellom dreining og fresing?',
      solution: 'Ved dreining roterer arbeidsstykket og verktøyet står stille. Ved fresing roterer verktøyet (fresa) og arbeidsstykket står fast. Dreining brukes til sylindriske emner, fresing til flate og komplekse former.',
    },
    {
      id: 'tif-vg1-3-ex-2',
      task: 'Hvorfor bruker vi kjølevæske ved maskinering?',
      solution: 'Kjølevæske har tre funksjoner: 1) Kjøler verktøyet og arbeidsstykket, forlenger verktøyets levetid, 2) Smører og reduserer friksjon, 3) Skyller vekk spon fra skjæresonen og gir bedre overflatekvalitet.',
    },
    {
      id: 'tif-vg1-3-ex-3',
      task: 'Du skal lage et nøyaktig hull på 10mm. Beskriv fremgangsmåten.',
      solution: '1. Marker senter for hullet, 2. Bruk senterbor for å lage senker som guider boret, 3. Bor hull med spiralbor 10mm, 4. Bruk riktig hastighet og kjølevæske, 5. Spenn arbeidsstykket godt fast.',
    },
    {
      id: 'tif-vg1-3-ex-4',
      task: 'Nevn tre dreioperasjoner du kan gjøre på en dreiebenk.',
      solution: '1. Lengdedreining – skjære langs arbeidsstykket for å redusere diameter, 2. Plandreining – skjære endeplaten for plan flate, 3. Boring – lage hull i enden av arbeidsstykket.',
    },
    {
      id: 'tif-vg1-3-ex-5',
      task: 'Hva er hardmetall, og hvorfor brukes det i skjærverktøy?',
      solution: 'Hardmetall er et meget hardt materiale laget av wolframkarbid. Det brukes fordi det beholder skarpheten ved høye temperaturer og tåler mye høyere skjærehastigheter enn vanlig stål (HSS). Dette gir raskere produksjon og lengre verktøylevetid.',
    },
    {
      id: 'tif-vg1-3-ex-6',
      task: 'Hvorfor må du aldri la chuck-nøkkelen sitte i når du starter dreiebenken?',
      solution: 'Hvis chuck-nøkkelen sitter i når maskinen starter, vil den slynges vekk med stor kraft og kan forårsake alvorlig skade. Dette er en kritisk sikkerhetsregel – alltid fjern chuck-nøkkelen umiddelbart etter bruk.',
    },
  ],
  keyTerms: [
    { term: 'Maskinering', definition: 'Bearbeiding av materialer ved å fjerne spon med skjærende verktøy.' },
    { term: 'Dreiebenk', definition: 'Maskin der arbeidsstykket roterer og verktøyet står stille.' },
    { term: 'Fresemaskin', definition: 'Maskin der verktøyet (fresa) roterer og arbeidsstykket står fast.' },
    { term: 'Skjærehastighet', definition: 'Hastigheten verktøyet beveger seg gjennom materialet.' },
    { term: 'Kjølevæske', definition: 'Væske som kjøler, smører og fjerner spon ved maskinering.' },
    { term: 'Hardmetall', definition: 'Meget hardt verktøymateriale basert på wolframkarbid.' },
  ],
};

// ============================================================================
// Kapittel 4: Tegning og dokumentasjon
// ============================================================================

export const CHAPTER_TIF_VG1_4: TextbookChapter = {
  id: 'tif-vg1-4',
  courseId: 'tif-vg1',
  chapterNumber: '4',
  title: 'Tegning og dokumentasjon',
  description: 'Teknisk tegning og dokumentasjon av produksjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'lese og tolke tekniske tegninger',
    'forstå målsetting og toleranser',
  ],
  sections: [
    {
      title: 'Teknisk tegning',
      content: `## Teknisk tegning

Teknisk tegning er industriens universelle språk. En god tegning formidler eksakt hvordan et produkt skal produseres, uten misforståelser.

**Hvorfor tekniske tegninger?**
- Kommunikasjon mellom designer og produsent
- Nøyaktig beskrivelse av dimensjoner og toleranser
- Internasjonal standard som alle forstår
- Dokumentasjon for kvalitetskontroll
- Juridisk bevis ved konflikter

**Tegningsstandarder:**
I Norge bruker vi ISO-standarder (International Organization for Standardization). Dette sikrer at tegninger kan forstås på tvers av land og bransjer.

**Viktige normer:**
- ISO 128: Generelle prinsipper for framstilling
- ISO 129: Målsetting
- ISO 1101: Geometriske toleranser
- ISO 2768: Allmenne toleranser`,
    },
    {
      title: 'Projeksjonsmetoder',
      content: `## Projeksjonsmetoder

For å beskrive et tredimensjonalt objekt på et todimensjonalt papir bruker vi projeksjonsmetoder.

**Ortografisk projeksjonen (1. og 3. vinkel)**

Viser objektet fra ulike sider: Foran, over, side.

**1. vinkel projeksjonen (Europeisk)**
Objektet er mellom observatør og projeks jonsplan.
- Mest brukt i Norge og Europa
- Høyre sidevisning til venstre for forsiden
- Topp visning under forsiden

**3. vinkel projeksjonen (Amerikansk)**
Projeksjonsplan er mellom observatør og objekt.
- Brukt i USA
- Høyre sidevisning til høyre for forsiden
- Toppvisning over forsiden

**Isometrisk tegning**
Viser objektet i 3D-perspektiv med 30° vinkler.
- Lettere å forstå for ikke-fagfolk
- Gir oversikt over formen
- Ikke egnet for presise mål

**Snitt og seksjoner**
Viser innsiden av objektet ved å "skjære" det over.
- Skravering viser skårne flater
- Viktig for hulrom og indre detaljer`,
    },
    {
      title: 'Målsetting og toleranser',
      content: `## Målsetting og toleranser

**Målsetting**

Mål angis alltid i millimeter (mm) på tekniske tegninger, med mindre annet er oppgitt.

**Måltall:**
- 50 betyr 50mm
- Desimaler for presise mål: 50,5mm

**Mållinjer:**
- Tynne linjer med piler i endene
- Måltall plasseres midt over eller ved siden av mållinjen
- Måltall skrives horisontalt eller vertikalt

**Toleranser**

Ingen produksjon er perfekt. Toleranser angir tillatt avvik fra idealmål.

**Allmenne toleranser (ISO 2768)**
Gjelder når toleranse ikke er spesifikt angitt.
- Finhet: ±0,1mm
- Middels: ±0,2mm
- Grov: ±0,5mm

**Spesifikke toleranser**
Angis direkte på mål når høyere presisjon kreves.
- 50 +0,1/-0,05 (50mm med tol +0,1mm og -0,05mm)
- Øvre avvik og nedre avvik

**Pasninger**
Beskriver hvor tett eller løst to deler passer sammen.

**Clearance fit (spillepassning)**
Hull større enn aksel – deler kan bevege seg.
- Brukes i lagre, skyvende deler

**Transition fit (overgangspassning)**
Hull og aksel omtrent like – kan være lite spill eller lite press.
- Brukes ved justering

**Interference fit (presspassning)**
Aksel større enn hull – må presses sammen.
- Brukes for fast forbindelse

**Geometriske toleranser**
Kontrollerer form, retning, plassering.
- Retthet: Hvor rett en linje er
- Flathet: Hvor flat en flate er
- Rundhet: Hvor rund en sylinder er
- Posisjon: Nøyaktig plassering av hull`,
    },
    {
      title: 'CAD - Computer Aided Design',
      content: `## CAD - Computer Aided Design

CAD er dataassistert konstruksjon der vi lager tekniske tegninger på datamaskin.

**Fordeler med CAD:**
- Rask tegning og endring
- Nøyaktig og konsistent
- Lett å kopiere og gjenbruke
- 3D-modellering mulig
- Automatisk materialberegning
- Direkte eksport til CAM og CNC

**Populære CAD-programmer:**
- AutoCAD: 2D og 3D, industristandard
- SolidWorks: 3D-modellering, mekanikk
- Fusion 360: Sky-basert, gratis for hobbyister
- Inventor: Autodesk, mekanisk design
- FreeCAD: Open source

**2D vs 3D CAD:**

**2D CAD**
- Tegner i to dimensjoner (flat tegning)
- Raskere for enkle deler
- God for produksjonstegninger

**3D CAD**
- Bygger objektet virtuelt i 3D
- Lettere å visualisere
- Kan teste bevegelser og sammenstillinger
- Generere 2D-tegninger automatisk
- Beregne vekt, tyngdepunkt, styrke

**Fra CAD til produksjon:**
1. Design i CAD (3D-modell)
2. Generer 2D-produksjonstegninger
3. Eksporter til CAM (Computer Aided Manufacturing)
4. CAM genererer NC-kode
5. CNC-maskin produserer delen

**Grunnleggende CAD-operasjoner:**
- Sketch: Tegn 2D-profil
- Extrude: Trekk profil ut i 3D
- Revolve: Roter profil rundt akse
- Loft: Koble sammen flere profiler
- Fillet: Rund av hjørner
- Chamfer: Fas av kanter`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-4-ex-1',
      task: 'Hva er forskjellen mellom 1. og 3. vinkel projeksjonen?',
      solution: 'I 1. vinkel (europeisk) er objektet mellom observatør og projeksjon plan, så høyre sidevisning er til venstre. I 3. vinkel (amerikansk) er projeksjonsplan mellom observatør og objekt, så høyre sidevisning er til høyre. Norge bruker 1. vinkel.',
    },
    {
      id: 'tif-vg1-4-ex-2',
      task: 'En tegning viser målet 25 ±0,1mm. Hva betyr dette?',
      solution: 'Idealmålet er 25mm, men delen kan være mellom 24,9mm og 25,1mm og fortsatt være godkjent. Toleransen er ±0,1mm, som betyr tillatt avvik på 0,1mm i begge retninger.',
    },
    {
      id: 'tif-vg1-4-ex-3',
      task: 'Hva er en pasning, og nevn tre typer?',
      solution: 'Pasning beskriver hvordan to deler (aksel og hull) passer sammen. 1) Spillepassning – løst, deler kan bevege seg, 2) Overgangspassning – nøyaktig, lite spill eller press, 3) Presspassning – aksel presses inn i hull for fast forbindelse.',
    },
    {
      id: 'tif-vg1-4-ex-4',
      task: 'Nevn tre fordeler med å bruke CAD fremfor manuell tegning.',
      solution: '1) Rask endring – lett å justere og forbedre design, 2) Nøyaktighet – datamaskinen sikrer presise mål, 3) 3D-visualisering – kan se produktet virtuelt før produksjon og automatisk generere 2D-tegninger.',
    },
    {
      id: 'tif-vg1-4-ex-5',
      task: 'Hvorfor er det viktig med standardiserte tegninger (ISO-standarder)?',
      solution: 'Standardisering sikrer at alle forstår tegningen likt, uavhengig av land og språk. Det unngår misforståelser, feilproduksjon og kvalitetsproblemer. Tegninger kan brukes globalt uten oversettelse.',
    },
  ],
  keyTerms: [
    { term: 'Teknisk tegning', definition: 'Standardisert tegning som viser nøyaktig hvordan et produkt skal produseres.' },
    { term: 'Ortografisk projeksjonen', definition: 'Visning av objekt fra flere vinkler (foran, over, side).' },
    { term: 'Toleranse', definition: 'Tillatt avvik fra idealmål i produksjon.' },
    { term: 'Pasning', definition: 'Hvordan to deler (aksel og hull) passer sammen.' },
    { term: 'CAD', definition: 'Computer Aided Design – dataassistert konstruksjon og tegning.' },
    { term: 'Isometrisk tegning', definition: '3D-perspektiv tegning med 30° vinkler.' },
  ],
};

// ============================================================================
// Kapittel 5: HMS og sikkerhet
// ============================================================================

export const CHAPTER_TIF_VG1_5: TextbookChapter = {
  id: 'tif-vg1-5',
  courseId: 'tif-vg1',
  chapterNumber: '5',
  title: 'HMS og sikkerhet',
  description: 'Sikker arbeidsmetode i industrien.',
  estimatedMinutes: 50,
  competenceGoals: [
    'arbeide sikkert i industriell produksjon',
    'forstå HMS-regelverk og risikovurdering',
  ],
  sections: [
    {
      title: 'HMS i industrien',
      content: `## HMS i industrien

HMS (Helse, Miljø og Sikkerhet) er grunnlaget for alt arbeid i industrien. Riktig HMS-arbeid redder liv, forebygger skader og sikrer et godt arbeidsmiljø.

**Hvorfor HMS?**
- Forebygge ulykker og helseskader
- Beskytte arbeidstakere
- Redusere kostnader ved fravær og skader
- Overholde lovverk
- Bedre produktivitet og trivsel
- Beskytte miljøet

**HMS-lovgivning:**

**Arbeidsmiljøloven**
Hovedloven for arbeidsmiljø i Norge. Gir arbeidstakere rett til et fullt forsvarlig arbeidsmiljø.

**Internkontrollforskriften**
Krav til systematisk HMS-arbeid. Bedriften må:
- Kartlegge farer
- Vurdere risiko
- Iverksette tiltak
- Dokumentere arbeidet
- Følge opp og forbedre

**Maskinforskriften**
Krav til sikkerhet på maskiner og utstyr.`,
    },
    {
      title: 'Risikovurdering',
      content: `## Risikovurdering

Risikovurdering er systematisk kartlegging av farer og vurdering av risiko.

**Hva er risiko?**
Risiko = Sannsynlighet × Konsekvens

En hendelse med lav sannsynlighet men alvorlige konsekvenser kan ha høy risiko.

**Risikovurderingsprosessen:**

**1. Identifiser farer**
Hva kan gå galt?
- Maskiner med bevegelige deler
- Skarpe gjenstander og verktøy
- Tunge løft
- Støy og støv
- Kjemikalier
- Elektrisk utstyr

**2. Vurder risiko**
Hvor farlig er det?
- Sannsynlighet: Sjelden, Mindre sannsynlig, Sannsynlig, Meget sannsynlig
- Konsekvens: Ubetydelig, Lite alvorlig, Alvorlig, Meget alvorlig
- Risikomatrise kombinerer disse

**3. Iverksett tiltak**
Reduser risikoen:
1. Eliminere faren (best)
2. Erstatte med mindre farlig
3. Tekniske tiltak (vern, låsing)
4. Organisatoriske tiltak (rutiner, opplæring)
5. Personlig verneutstyr (siste utvei)

**4. Evaluer**
Virker tiltakene? Følg opp og forbedre.`,
    },
    {
      title: 'Personlig verneutstyr',
      content: `## Personlig verneutstyr (PVU)

Personlig verneutstyr er utstyr som beskytter arbeidstaker mot farer.

**Hodeveern**

**Vernebriller**
Beskytter øynene mot:
- Flyvende spon ved maskinering
- Gnister ved sveising
- Kjemikalier
- Støv

Typer:
- Klar: Mekanisk beskyttelse
- Mørk: Sveisebriller
- Ansiktsskjerm: Hel ansiktsbeskyttelse

**Vernebriller skal:**
- Være CE-merket
- Passe godt uten å dugge
- Være rene og skrapefrie

**Hjelm**
Beskytter hodet mot:
- Fall av gjenstander
- Støt mot konstruksjoner
- Brukes på byggeplasser, i produksjon

**Hørselsvern**
Beskytter hørselen mot støy.
- Ørepropper: Engangs eller gjenbruk
- Hørselskapsler: Bedre beskyttelse
- Bruk ved støynivå over 85 dB

**Håndvern**

**Hansker**
Beskytter hendene mot:
- Kutt og skader
- Kjemikalier
- Varme og kulde
- Vibrasjoner

Typer:
- Arbeidshansker: Generell beskyttelse
- Skjærebeskyttelse: Mot skarpe kanter
- Kjemikaliehansker: Mot løsemidler
- Varmeha nsker: Ved sveising

**VIKTIG:** Bruk ALDRI hansker ved roterende maskiner (dreiebenk, boremaskin) – hansker kan gripe tak og trekke inn hånden!

**Fotveern**

**Vernesko**
Beskytter føttene mot:
- Fall av tunge gjenstander (ståltåhette)
- Spiker og skarpe gjenstander (stålsåle)
- Glidning (sklisikker såle)
- Kjemikalier

Krav:
- CE-merket
- Riktig størrelse
- God grep i sålen

**Kroppsveern**

**Verneklær**
- Flammehemmende ved sveising
- Synlige (refleks) ved trafikkområder
- Kjemikaliebestandige ved behov
- Ikke løstsittende ved maskiner

**Åndedrettsvern**
Ved støv, gass, damp:
- Støvmasker: Engangs
- Halvmaske med filter: Gass og støv
- Helmaske: Meget giftige stoffer`,
    },
    {
      title: 'Sikker bruk av maskiner',
      content: `## Sikker bruk av maskiner

**Før du starter:**
1. Sjekk at maskinen er i orden
2. Vern er på plass og fungerer
3. Kjenner nødstopp-plasseringen
4. Riktig opplæring og kompetanse
5. Bruk påkrevd verneutstyr

**Under arbeidet:**
- Vær fullt konsentrert
- Ikke distraksjoner (mobil, musikk)
- Bruk riktig verktøy og parametere
- Hold orden og renhold
- Fjern spon med børste, ALDRI med hånden

**Generelle sikkerhe tsregler:**

**Roterende maskiner (dreiebenk, boremaskin)**
- Ingen hansker
- Ikke ha langt, løst hår (hårstrammer)
- Ingen løse klær eller smykker
- Fjern nøkler før oppstart
- Stop maskinen før måling eller justering

**Løfteutstyr**
- Kjenn maksimal løftekapasitet
- Kontroller stropper og kroks
- Sikre lasten
- Ikke gå under svevende last

**Elektrisk utstyr**
- Sjekk kabler og støpsel
- Bruk jordet utstyr
- Ikke bruk defekt utstyr
- Koble fra ved service

**Kjemikalier**
- Les sikkerhetsdatablad
- Bruk riktig PVU
- Korrekt oppbevaring
- Rydd søl umiddelbart

**Ved ulykke:**
1. Sikre situasjonen
2. Varsle (ring 113 ved alvorlig)
3. Gi førstehjelp
4. Dokumenter hendelsen`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-5-ex-1',
      task: 'Hva står HMS for, og hvorfor er det viktig i industrien?',
      solution: 'HMS står for Helse, Miljø og Sikkerhet. Det er viktig for å forebygge ulykker og helseskader, beskytte arbeidstakere, overholde lovverk, redusere kostnader ved fravær, og sikre god produktivitet og trivsel.',
    },
    {
      id: 'tif-vg1-5-ex-2',
      task: 'Forklar risiko som: Risiko = Sannsynlighet × Konsekvens med et eksempel.',
      solution: 'Risiko er kombinasjonen av hvor sannsynlig noe er og hvor alvorlig det er. Eksempel: Å kutte seg i en liten brødkniv har høy sannsynlighet men lav konsekvens (middels risiko). Å falle fra 5 meters høyde har lav sannsynlighet men meget alvorlig konsekvens (høy risiko).',
    },
    {
      id: 'tif-vg1-5-ex-3',
      task: 'Nevn de fem stegene i tiltakshierarkiet for risikoreduksjon, fra best til dårligst.',
      solution: '1. Eliminere faren (fjern risikoen), 2. Erstatte med mindre farlig (bytt til tryggere metode), 3. Tekniske tiltak (vern, låsing), 4. Organisatoriske tiltak (rutiner, opplæring), 5. Personlig verneutstyr (siste utvei).',
    },
    {
      id: 'tif-vg1-5-ex-4',
      task: 'Hvorfor skal du ALDRI bruke hansker ved arbeid med dreiebenk eller boremaskin?',
      solution: 'Hansker kan gripe tak i den roterende delen og trekke hele hånden inn i maskinen med stor kraft. Dette kan føre til alvorlige skader. Ved roterende maskiner skal hendene være nakne eller ha tettpassende hansker bare hvis maskinen er stoppet.',
    },
  ],
  keyTerms: [
    { term: 'HMS', definition: 'Helse, Miljø og Sikkerhet – systematisk arbeid for trygg arbeidsplass.' },
    { term: 'Risikovurdering', definition: 'Systematisk kartlegging av farer og vurdering av risiko.' },
    { term: 'PVU', definition: 'Personlig Verneutstyr – utstyr som beskytter arbeidstaker mot farer.' },
    { term: 'Internkontroll', definition: 'System for å sikre at HMS-krav overholdes i bedriften.' },
    { term: 'Tiltakshierarki', definition: 'Prioritert rekkefølge for risikoreduserende tiltak.' },
  ],
};

// ============================================================================
// Kapittel 6-14 fortsetter her...
// (Disse må legges til i neste melding pga lengdebegrensning)
// ============================================================================

// ============================================================================
// Eksporter kapittel 1-14
// ============================================================================

export const CHAPTERS_TIF_VG1_PART1 = [
  CHAPTER_TIF_VG1_1,
  CHAPTER_TIF_VG1_2,
  CHAPTER_TIF_VG1_3,
  CHAPTER_TIF_VG1_4,
  CHAPTER_TIF_VG1_5,
];
