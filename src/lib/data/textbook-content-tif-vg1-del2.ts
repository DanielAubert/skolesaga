/* eslint-disable */
// @ts-nocheck
/**
 * Teknologi- og industrifag VG1 - Del 2: Sveising og sammenføyning
 *
 * Kapittel 2.1-2.7: Sveising og sammenføyning
 * Dekker LK20 kompetansemål for sammenføyningsmetoder
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Grunnleggende sveisemetoder
// ============================================================================

export const CHAPTER_TIF_VG1_2_1: TextbookChapter = {
  id: 'tif-vg1-2-1',
  courseId: 'tif-vg1',
  chapterNumber: '2.1',
  title: 'Grunnleggende sveisemetoder',
  description: 'Oversikt over de vanligste sveisemetodene som MIG/MAG, TIG og lysbuesveising.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjennomføre og gjøre rede for termiske, kjemiske og mekaniske sammenføyingsmetoder',
  ],
  sections: [
    {
      title: 'Hva er sveising?',
      content: `## Hva er sveising?

Sveising er en sammenføyningsmetode der materialer forenes ved smelting eller kombinasjon av varme og trykk. Det er en av de mest brukte og viktigste sammenføyningsmetodene i industrien.

**Hvorfor sveise?**
- Permanent, uløselig forbindelse
- Høy styrke - kan være like sterk som grunnmaterialet
- Tett forbindelse (væske- og gassdikt)
- Kan utføres i alle posisjoner
- Effektiv for mange materialer og tykkelser

**Grunnleggende sveiseprinsipper:**

**Smeltesveising:**
Grunnmaterialet smeltes, ofte med tilsetsmateriale, og størkner til en sammenhengende sveis.

**Trykkveising:**
Materialene presses sammen, ofte med oppvarming, uten å smelte helt.

**Sveisesømmens oppbygning:**
- Smeltebadet: Flytende metall under sveising
- Varmepåvirket sone (HAZ): Område ved siden av sveisen som er varmet
- Sveisegods: Størknet tilsetsmateriale og smeltet grunnmateriale

**Sveiseposisjoner:**
- PA: Flatstilling (nedovervendt)
- PB: Horisontal-vertikal kilsveis
- PC: Horisontalstilling
- PD: Horisontal-vertikal over hodet
- PE: Overhodesstilling
- PF: Vertikal oppover
- PG: Vertikal nedover`,
    },
    {
      title: 'MIG/MAG-sveising',
      content: `## MIG/MAG-sveising

MIG (Metal Inert Gas) og MAG (Metal Active Gas) er de mest brukte sveiseteknikker i industrien. De kjennetegnes av kontinuerlig trådforing og gassbeskyttelse.

**Prinsipp:**
En elektrisk lysbue dannes mellom en kontinuerlig matet trådelektrode og arbeidsstykket. Tråden smelter og fyller fugen. Beskyttelsesgass strømmer rundt lysbuen og beskytter smeltebadet mot atmosfærens oksygen og nitrogen.

**MIG-sveising:**
- Bruker inert (ikke-reaktiv) gass: Argon eller helium
- For aluminium, rustfritt stål, kobber
- Gir ren, fin sveisesøm
- Dyrere gass

**MAG-sveising:**
- Bruker aktiv (reaktiv) gass: CO₂ eller blandinger (Ar + CO₂)
- For ulegert og lavlegert stål
- Mest brukt i industrien
- Billigere gass

**Fordeler med MIG/MAG:**
- Høy sveisehastighet (produktivitet)
- Kontinuerlig sveising uten å bytte elektrode
- Lite etterarbeid (lite sprut med riktig innstilling)
- Lett å lære grunnleggende teknikk
- Kan automatiseres

**Ulemper:**
- Krever gassforsyning
- Følsom for vind og trekk (utendørs problematisk)
- Relativt tungt og komplekst utstyr

**Eksempel - MAG-sveising av stålramme:**
Parametere for 5mm konstruksjonsstål:
- Tråd: 1,0mm SG2
- Strøm: 180-200A
- Spenning: 22-24V
- Gass: 82% Ar + 18% CO₂, 15 l/min
- Stikking (stick-out): 15-18mm`,
    },
    {
      title: 'TIG-sveising',
      content: `## TIG-sveising

TIG (Tungsten Inert Gas), også kalt GTAW, gir den høyeste sveisekvaliteten av alle lysbuesveiseteknikker.

**Prinsipp:**
Lysbuen dannes mellom en ikke-smeltende wolframelektrode og arbeidsstykket. Tilsetsmateriale tilføres manuelt som en separat stav. Inert beskyttelsesgass (argon) beskytter smeltebadet og elektroden.

**Wolframelektroder:**
- Grønn: Ren wolfram (for aluminium, AC)
- Rød: Thoriert wolfram (for stål, DC)
- Gull: Lantanert wolfram (allsidig alternativ)
- Grå: Ceriert wolfram (god tennbarhet)

**Strømtyper:**
- DC- (likstrøm, elektrode minus): Stål, rustfritt stål
- AC (vekselstrøm): Aluminium (bryter oksidlag)
- DC+ (likstrøm, elektrode pluss): Sjelden brukt

**Fordeler med TIG:**
- Beste sveisekvalitet
- Presis kontroll over smeltebad
- Ingen sprut
- Kan sveise alle metaller
- Meget rent resultat

**Ulemper:**
- Lav sveisehastighet
- Krever høy kompetanse
- Dyrere utstyr
- Begge hender opptatt

**Typiske bruksområder:**
- Rørsveising i offshore/petroleum
- Rustfritt stål i næringsmiddelindustri
- Aluminium i fly og marine
- Kvalitetskritiske sveiser
- Første streng (rotstreng) før fylling med MIG/MAG

**Eksempel - TIG-sveising av rustfritt stålrør:**
Parametere for 2mm rustfritt (304):
- Elektrode: 1,6mm thoriert
- Tilsett: 1,6mm ER308L
- Strøm: 50-70A (DC-)
- Gass: Argon, 8-10 l/min
- Bakengas anbefales`,
    },
    {
      title: 'Lysbuesveising med dekkede elektroder',
      content: `## Lysbuesveising med dekkede elektroder (MMA/SMAW)

Manuell lysbuesveising med dekkede elektroder, også kalt pinnesveising eller SMAW (Shielded Metal Arc Welding), er den eldste og enkleste elektriske sveiseteknikken.

**Prinsipp:**
En elektrode med belegg holdes i en elektrodeholder. Lysbuen dannes mellom elektroden og arbeidsstykket. Elektroden smelter og belegget danner beskyttende gass og slagg.

**Elektrodebeleggets funksjoner:**
- Danner beskyttende gass
- Danner slagg som beskytter sveisesømmen
- Stabiliserer lysbuen
- Tilfører legeringselementer
- Påvirker sveiseegenskapene

**Elektodetyper (beleggtyper):**
- Rutil (R): Lettsveiset, god for nybegynnere
- Basisk (B): Best mekaniske egenskaper, krever tørking
- Cellulose (C): Dyp innbrenning, for rørmontering
- Syre: Sjelden brukt i dag

**Fordeler med MMA:**
- Enkelt, billig utstyr
- Mobilt - ingen gassflaske
- Tåler vind og vær
- Kan sveise i alle stillinger
- Mange elektodetyper tilgjengelig

**Ulemper:**
- Lav sveisehastighet
- Må bytte elektroder ofte
- Slagg må fjernes
- Mye røykutvikling
- Mer sprut enn MIG/TIG

**Typiske bruksområder:**
- Vedlikehold og reparasjon
- Utendørs konstruksjonsarbeid
- Montering på byggeplasser
- Gårdsbruk og mindre verksteder
- Steder uten strøm (generatordrift)

**Eksempel - Pinnesveising av stålplate:**
Sveising av 8mm konstruksjonsstål:
- Elektrode: 3,2mm rutil (OK 48.00)
- Strøm: 100-130A (DC+ eller AC)
- Sveisehastighet: ca. 15 cm/min
- Fjern slagg mellom strengene`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-2-1-ex-1',
      type: 'classic',
      task: 'Forklar hovedforskjellen mellom MIG og MAG-sveising, og beskriv når hver metode brukes.',
      solution: 'MIG (Metal Inert Gas) bruker inert gass som argon eller helium og brukes for aluminium, rustfritt stål og kobber. Gassen reagerer ikke med smeltebadet. MAG (Metal Active Gas) bruker aktiv gass som CO₂ eller blandinger og brukes for ulegert og lavlegert stål. CO₂ er billigere men gir litt mer sprut. MAG er mest vanlig i industrien for stålkonstruksjoner.',
    },
    {
      id: 'tif-vg1-2-1-ex-2',
      type: 'multiple-choice',
      task: 'Hvilken sveisemetode gir generelt best sveisekvalitet?',
      options: [
        { id: 'a', text: 'TIG-sveising', isCorrect: true },
        { id: 'b', text: 'MAG-sveising', isCorrect: false },
        { id: 'c', text: 'Pinnesveising', isCorrect: false },
        { id: 'd', text: 'Punktsveising', isCorrect: false },
      ],
      solution: 'TIG-sveising gir best sveisekvalitet fordi operatøren har presis kontroll over smeltebad, varmetilførsel og tilsettmengde. Det gir ingen sprut og en meget ren sveis, derfor brukes TIG til kvalitetskritiske sveiser.',
    },
    {
      id: 'tif-vg1-2-1-ex-3',
      type: 'classic',
      task: 'En sveiser skal jobbe utendørs på en byggeplass med mye vind. Hvilken sveisemetode anbefaler du, og hvorfor?',
      solution: 'Pinnesveising (MMA) anbefales for utendørs arbeid i vind fordi: 1) Elektrodebelegget gir beskyttelse uavhengig av gass - vinden blåser ikke bort beskyttelsen. 2) Enkelt utstyr uten gassflaske. 3) Kan brukes med generator hvis ikke strømtilgang. 4) Tåler krevende forhold. MIG/MAG og TIG krever gassbeskyttelse som forstyrres av vind.',
    },
    {
      id: 'tif-vg1-2-1-ex-4',
      type: 'multiple-choice',
      task: 'Hva er funksjonen til beskyttelsesgassen ved MIG/MAG-sveising?',
      options: [
        { id: 'a', text: 'Beskytte smeltebadet mot atmosfærens oksygen og nitrogen', isCorrect: true },
        { id: 'b', text: 'Kjøle sveisesømmen raskt', isCorrect: false },
        { id: 'c', text: 'Øke temperaturen i lysbuen', isCorrect: false },
        { id: 'd', text: 'Gjøre sveisesømmen hardere', isCorrect: false },
      ],
      solution: 'Beskyttelsesgassen danner en beskyttende atmosfære rundt lysbuen og smeltebadet. Dette hindrer at atmosfærens oksygen og nitrogen reagerer med det smeltede metallet, noe som ville gitt porøs og svak sveis.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-2-1-ex-5',
      type: 'classic',
      task: 'Sammenlign TIG, MIG/MAG og pinnesveising med hensyn til: sveisekvalitet, produktivitet, kompetansekrav og typiske bruksområder.',
      solution: 'TIG: Kvalitet: Best. Produktivitet: Lav. Kompetanse: Høy. Bruk: Kvalitetskritiske sveiser, rustfritt, aluminium, rørsveising. MIG/MAG: Kvalitet: God. Produktivitet: Høy. Kompetanse: Middels. Bruk: Industriproduksjon, stålkonstruksjoner, bilreparasjon. PINNE (MMA): Kvalitet: Varierende. Produktivitet: Lav-middels. Kompetanse: Middels. Bruk: Utendørs, vedlikehold, byggeplasser, steder uten gassforsyning.',
    },
    {
      id: 'tif-vg1-2-1-ex-6',
      type: 'classic',
      task: 'En bedrift skal velge sveisemetode for produksjon av stålrekkverk som skal masseproduseres innendørs. Begrunn ditt metodevalg.',
      solution: 'MAG-sveising anbefales fordi: 1) Høy produktivitet - kontinuerlig trådforing gir rask sveising og egner seg for masseproduksjon. 2) Innendørs produksjon - gassbesyttelse fungerer godt uten vind. 3) Stål - MAG med CO₂-blanding er økonomisk og gir godt resultat på stål. 4) Repeterbarhet - lett å standardisere parametere for konsistent kvalitet. 5) Kan delvis automatiseres med sveiserobot etter hvert. 6) Lavere kompetansekrav enn TIG gjør opplæring enklere.',
    },
  ],
  keyTerms: [
    { term: 'MIG', definition: 'Metal Inert Gas - sveising med inert beskyttelsesgass (argon/helium).' },
    { term: 'MAG', definition: 'Metal Active Gas - sveising med aktiv beskyttelsesgass (CO₂/blandinger).' },
    { term: 'TIG', definition: 'Tungsten Inert Gas - sveising med wolframelektrode og separat tilsett.' },
    { term: 'MMA/SMAW', definition: 'Pinnesveising med dekkede elektroder.' },
    { term: 'Smeltebad', definition: 'Området med flytende metall under sveising.' },
    { term: 'HAZ', definition: 'Heat Affected Zone - varmepåvirket sone ved siden av sveisen.' },
  ],
};

// ============================================================================
// Kapittel 2.2: Sveiseforberedelse og tilsatsmaterialer
// ============================================================================

export const CHAPTER_TIF_VG1_2_2: TextbookChapter = {
  id: 'tif-vg1-2-2',
  courseId: 'tif-vg1',
  chapterNumber: '2.2',
  title: 'Sveiseforberedelse og tilsatsmaterialer',
  description: 'Forberedelse av arbeidsstykker, valg av tilsatsmaterialer og innstilling av sveiseparametere.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjennomføre og gjøre rede for termiske, kjemiske og mekaniske sammenføyingsmetoder',
    'planlegge, gjennomføre og dokumentere et praktisk arbeid innenfor produksjon og vedlikehold av maskiner og utstyr i samsvar med aktuelle standarder og prosedyrer',
  ],
  sections: [
    {
      title: 'Kantpreparering',
      content: `## Kantpreparering

Riktig kantpreparering er avgjørende for sveisekvaliteten. Fugeformen velges ut fra materialtykkelse, sveisemetode og tilgjengelighet.

**Vanlige fugeformer:**

**I-fuge (kantsveis)**
- Rett kant mot rett kant
- For tynne materialer (opptil 3-6mm)
- Ingen preparering nødvendig
- Risiko for gjennombrenning på tynt materiale

**V-fuge**
- En eller begge kanter skråskjært (30-35° per side)
- Total fugeåpning ca. 60-70°
- For materialtykkelser 6-20mm
- Vanligste fugeform for buttsveiser

**X-fuge (dobbel V-fuge)**
- V-fuge fra begge sider
- For materialtykkelser over 15-20mm
- Halverer sveisegodsmengden
- Krever tilgang fra begge sider

**U-fuge**
- Avrundet bunn
- For tykke materialer
- Mindre sveisegods enn V-fuge
- Krever maskinell preparering

**Kilsveis (T-forbindelse)**
- En plate mot en annen i 90°
- Fugeforberedelse vanligvis ikke nødvendig
- a-mål angir sveisens størrelse

**Rotspalte og rotflate:**
- Rotspalte: Åpning mellom delene (1-4mm)
- Rotflate: Ubearbeidet kant i bunnen av V-fuge
- Sikrer full gjennombrenning

**Eksempel - V-fuge for 12mm stål:**
- Fugevinkel: 60° (30° per side)
- Rotspalte: 2-3mm
- Rotflate: 1-2mm
- Prepareres med vinkelsliper eller brennskjæring`,
    },
    {
      title: 'Rengjøring og forberedelse',
      content: `## Rengjøring og forberedelse

Sveiseflatene må være rene for å oppnå god sveisekvalitet.

**Forurensninger som må fjernes:**
- Rust og glødeskall
- Olje og fett
- Maling og belegg
- Fuktighet
- Oksidlag (spesielt på aluminium)

**Rengjøringsmetoder:**

**Mekanisk rengjøring:**
- Stålbørsting: Fjerner løs rust
- Sliping: Fjerner tykkere lag
- Sandblåsing: Effektiv for store flater
- Fjerning av sink ved galvanisert stål

**Kjemisk rengjøring:**
- Avfetting med løsemiddel eller avfettingsmiddel
- Syrebeising for rustfritt stål
- Spesialrens for aluminium (fjerner oksidlag)

**Viktig ved aluminium:**
- Oksidlaget må fjernes rett før sveising
- Bruk rustfri stålbørste (ikke karbon stål)
- Nytt oksidlag dannes raskt

**Oppvarming før sveising:**
Forvarming kan være nødvendig for:
- Tykke materialer (reduserer avkjølingshastighet)
- Høykarbonstål (unngå sprekker)
- Støpejern (reduserer sprøhet)
- Fuktige forhold (fjerner fuktighet)

**Typiske forvarmetemperaturer:**
- Lavkarbonstål > 25mm: 100-150°C
- Høykarbonstål: 200-300°C
- Støpejern: 300-400°C

**Eksempel - Forberedelse av aluminiumsveis:**
1. Avfett med aceton eller isopropanol
2. Børst med ren rustfri stålbørste
3. Sveis innen 2 timer (før nytt oksidlag)
4. Bruk rene hansker - ingen fingeravtrykk`,
    },
    {
      title: 'Tilsatsmaterialer',
      content: `## Tilsatsmaterialer

Tilsatsmaterialet må være tilpasset grunnmaterialet og sveisemetoden.

**Valg av tilsatsmateriale:**

**Hovedregel:**
Tilsatsmaterialet skal ha minst like gode egenskaper som grunnmaterialet.

**For stål (MIG/MAG):**
- SG2: Ulegert og lavlegert stål, mest brukt
- SG3: Høyere styrke
- ER316L: Rustfritt stål

**For stål (TIG):**
- ER70S-6: Ulegert stål
- ER308L: Rustfritt stål 304
- ER316L: Rustfritt stål 316

**For aluminium:**
- ER4043: Mest brukt, god flyt
- ER5356: Høyere styrke, marine
- ER4047: Beste flytegenskaper

**Dimensjonering:**
- MIG/MAG tråd: 0,8mm, 1,0mm eller 1,2mm
- TIG-stav: 1,6mm, 2,4mm eller 3,2mm
- Velges etter materialtykkelse

**Oppbevaring:**
- Tørt og temperert lager
- Basiske elektroder i tørkeskap (150°C)
- Aluminium beskyttet mot fuktighet
- Rustfritt stål separat fra karbonstål

**Eksempel - Valg av tilsatsmateriale:**
Oppgave: Sveise 304 rustfritt stål med TIG.
Valg: ER308L tilsettsstav.
Begrunnelse: 308L har matchende sammensetning, L betyr lavt karboninnhold som reduserer risiko for korrosjon i varmepåvirket sone.`,
    },
    {
      title: 'Sveiseparametere',
      content: `## Sveiseparametere

Riktige sveiseparametere er avgjørende for sveisekvaliteten.

**MIG/MAG-parametere:**

**Strømstyrke (ampere):**
- Bestemmer innbrenning og mengde smeltet materiale
- Høyere strøm = dypere innbrenning
- For lav = manglende innbrenning
- For høy = gjennombrenning

**Spenning (volt):**
- Påvirker buelengde og bredde
- Høyere spenning = bredere sveis
- For lav = ustabil bue, sprut
- For høy = flat, bred sveis, porøsitet

**Trådhastighet:**
- Følger strømstyrken (synergistiske maskiner)
- Mer tråd = høyere strøm

**Gasstilførsel:**
- Typisk 15-20 l/min
- For lite = porøsitet
- For mye = turbulens, porøsitet

**Sticking (kontakttupp til emne):**
- Typisk 15-20mm for MIG/MAG
- Påvirker strøm og penetrasjon

**TIG-parametere:**

**Strømstyrke:**
- Hovedkontroll av varmetilførsel
- Lavere enn MIG/MAG ved samme tykkelse
- Puls kan brukes for tynne materialer

**Gassmengde:**
- 8-12 l/min argon
- Bakengas (purging) på rustfritt stålrør

**Eksempel - Parametervalg for MIG/MAG:**
10mm stålplate, buttsveis, V-fuge:
| Parameter | Rotstreng | Fyllestrenger |
|-----------|-----------|---------------|
| Strøm | 180A | 220-250A |
| Spenning | 22V | 26-28V |
| Tråd | 1,0mm | 1,2mm |
| Gass | 18 l/min | 18 l/min |`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-2-2-ex-1',
      type: 'classic',
      task: 'Forklar hvorfor kantpreparering er viktig, og beskriv når du vil bruke V-fuge versus I-fuge.',
      solution: 'Kantpreparering er viktig for å sikre: 1) Full innbrenning gjennom hele materialtykkelsen, 2) Tilgang for sveiseutstyr til å nå hele fugen, 3) Kontrollert sveisegodsmengde. I-fuge (rette kanter) brukes for tynne materialer opptil 3-6mm der full gjennombrenning oppnås uten preparering. V-fuge brukes for tykkere materialer (6-20mm) der skråkuttede kanter gir tilgang for sveiseutstyr til hele materialtykkelsen.',
    },
    {
      id: 'tif-vg1-2-2-ex-2',
      type: 'multiple-choice',
      task: 'Hvilket tilsatsmateriale brukes vanligvis for MIG/MAG-sveising av konstruksjonsstål?',
      options: [
        { id: 'a', text: 'SG2', isCorrect: true },
        { id: 'b', text: 'ER308L', isCorrect: false },
        { id: 'c', text: 'ER4043', isCorrect: false },
        { id: 'd', text: 'ER5356', isCorrect: false },
      ],
      solution: 'SG2 er standard tilsatsmateriale for MIG/MAG-sveising av ulegert og lavlegert konstruksjonsstål. ER308L er for rustfritt stål, ER4043 og ER5356 er for aluminium.',
    },
    {
      id: 'tif-vg1-2-2-ex-3',
      type: 'classic',
      task: 'Før sveising av aluminium må overflaten forberedes spesielt. Beskriv prosedyren og forklar hvorfor.',
      solution: 'Prosedyre: 1) Avfett med løsemiddel (aceton/isopropanol), 2) Børst oksidlag med REN rustfri stålbørste, 3) Sveis innen 2 timer. Hvorfor: Aluminium danner umiddelbart et oksidlag (Al₂O₃) som har mye høyere smeltepunkt (2050°C) enn aluminium (660°C). Oksidlaget hindrer sveisen og kan gi inneslutninger. Det må derfor fjernes rett før sveising. Bruk aldri karbonstål-børste - det forurenser aluminiumet.',
    },
    {
      id: 'tif-vg1-2-2-ex-4',
      type: 'multiple-choice',
      task: 'Hva skjer hvis gasstilførselen er for lav ved MIG/MAG-sveising?',
      options: [
        { id: 'a', text: 'Porøsitet i sveisesømmen', isCorrect: true },
        { id: 'b', text: 'For dyp innbrenning', isCorrect: false },
        { id: 'c', text: 'Sveisesømmen blir for bred', isCorrect: false },
        { id: 'd', text: 'Økt sveisehastighet', isCorrect: false },
      ],
      solution: 'For lav gasstilførsel gir utilstrekkelig beskyttelse mot atmosfæren. Oksygen og nitrogen trenger inn i smeltebadet og danner gasslommer som blir til porer i den størknede sveisen. Porøsitet svekker sveisen betydelig.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-2-2-ex-5',
      type: 'classic',
      task: 'Du skal MAG-sveise to 15mm stålplater i en buttsveis. Beskriv hele forberedelsesprosessen inkludert fugeform, rengjøring og hefting.',
      solution: 'Forberedelsesprosess: 1) FUGEFORM: V-fuge med 60° fugevinkel (30° per side), 2mm rotspalte, 1,5mm rotflate. Prepareres med vinkelsliper. 2) RENGJØRING: Fjern rust, olje og forurensninger 50mm på hver side av fugen. Bruk vinkelsliper og avfetting. 3) POSISJONERING: Plasser platene med jevn rotspalte, bruk avstandsklosser. 4) HEFTING: Korte heftsveiser (10-15mm) med 100-150mm mellomrom. Start fra midten og arbeid utover for å kontrollere vridning. 5) KONTROLL: Sjekk at rotspalten er jevn og platene ligger i plan.',
    },
    {
      id: 'tif-vg1-2-2-ex-6',
      type: 'classic',
      task: 'Lag en tabell som viser anbefalt fugeform for ulike materialtykkelser (3mm, 8mm, 15mm og 25mm) ved buttsveis av stål.',
      solution: 'Fugeform etter materialtykkelse:\n\n| Tykkelse | Fugeform | Fugevinkel | Rotspalte | Rotflate |\n|----------|----------|------------|-----------|----------|\n| 3mm | I-fuge | 0° | 1-2mm | - |\n| 8mm | V-fuge | 60° | 2mm | 1-2mm |\n| 15mm | V-fuge | 60° | 2-3mm | 1,5mm |\n| 25mm | X-fuge | 60° (hver side) | 2-3mm | 2mm |\n\nMerknader: X-fuge ved 25mm halverer sveisegodsmengden og gir bedre kontroll over vridning. Rotstreng sveises ofte med TIG eller lavere parametere for bedre kontroll.',
    },
  ],
  keyTerms: [
    { term: 'V-fuge', definition: 'Kantpreparering med skråkuttede kanter som danner V-form.' },
    { term: 'Rotspalte', definition: 'Åpning mellom delene i bunnen av fugen.' },
    { term: 'Rotflate', definition: 'Ubearbeidet kant i bunnen av V-fuge.' },
    { term: 'Tilsatsmateriale', definition: 'Materiale som tilføres og smeltes inn i sveisesømmen.' },
    { term: 'Forvarming', definition: 'Oppvarming av arbeidsstykket før sveising.' },
    { term: 'Hefting', definition: 'Korte punktsveiser for å holde delene på plass før hovedsveising.' },
  ],
};

// ============================================================================
// Kapittel 2.3: Lodding og limning
// ============================================================================

export const CHAPTER_TIF_VG1_2_3: TextbookChapter = {
  id: 'tif-vg1-2-3',
  courseId: 'tif-vg1',
  chapterNumber: '2.3',
  title: 'Lodding og limning',
  description: 'Teknikker for lodding og limning som alternative sammenføyingsmetoder.',
  estimatedMinutes: 40,
  competenceGoals: [
    'gjennomføre og gjøre rede for termiske, kjemiske og mekaniske sammenføyingsmetoder',
  ],
  sections: [
    {
      title: 'Grunnleggende om lodding',
      content: `## Grunnleggende om lodding

Lodding er en sammenføyningsmetode der et tilsatsmateriale (lodd) med lavere smeltepunkt enn grunnmaterialet smeltes og flyter inn i spalten mellom delene.

**Forskjell fra sveising:**
- Ved lodding smelter IKKE grunnmaterialet
- Binding skjer ved diffusjon og adhesjon
- Lavere temperaturer - mindre vridning
- Kan forbinde ulike materialer

**Typer lodding:**

**Myklodding (< 450°C)**
- Loddetinn (Sn-Pb, Sn-Cu, Sn-Ag)
- Smeltepunkt typisk 180-300°C
- Lav mekanisk styrke
- Brukes til elektronikk, rørinstallasjoner

**Hardlodding (> 450°C)**
- Sølvlodd, kobberloge, messinglodd
- Smeltepunkt 600-900°C
- God mekanisk styrke
- Brukes til rør, verktøy, VVS

**Kapillarvirkning:**
Loddet flyter inn i spalten på grunn av kapillarkrefter. For god kapillarvirkning:
- Riktig spaltebredde (0,05-0,2mm)
- Rene overflater
- Riktig fluks

**Flussmidler:**
Flussmiddel fjerner oksider og forbedrer flyteegenskapene.
- Myklodding: Fluskjerne i loddetinnen, eller separate
- Hardlodding: Borax-baserte flussmidler
- Viktig: Fjern flussmiddelrester etter lodding`,
    },
    {
      title: 'Myklodding',
      content: `## Myklodding

Myklodding brukes primært i elektronikk og rørinstallasjoner.

**Loddetinn-typer:**

**Blyfri loddetinn (RoHS-kompatibel):**
- Sn99,3Cu0,7: Standard blyfri
- Sn96,5Ag3Cu0,5: SAC305, god for elektronikk
- Smeltepunkt: 217-227°C

**Blyholdig loddetinn (eldre):**
- Sn60Pb40: Eutetktisk, smeltepunkt 183°C
- Sn63Pb37: Mest brukt historisk
- Fases ut pga. helse- og miljøhensyn

**Utstyr for myklodding:**
- Lodebolt: Håndholdt, for punktlodding
- Loddekolbe: Med loddespiss, for elektronikk
- Loddepistoler: Rask oppvarming
- Gasflamme: For rør

**Teknikk:**
1. Rengjør og avfett flatene
2. Påfør flussmiddel om nødvendig
3. Forvarm delene (ikke loddetinnen)
4. Tilsett loddetinn når flatene er varme
5. La loddet flyte ved kapillarvirkning
6. Kjøl uten bevegelse
7. Rengjør flussmiddelrester

**Eksempel - Lodding av elektronikk:**
Lodding av komponent til kretskort:
1. Forvarm loddespissen (300-350°C for blyfri)
2. Plasser spissen mot komponentben og pute
3. Tilsett loddetinn etter 1-2 sekunder
4. Fjern loddetinn, deretter spissen
5. Bra lodd: Blank, konisk form`,
    },
    {
      title: 'Hardlodding',
      content: `## Hardlodding

Hardlodding gir sterkere forbindelser enn myklodding og tåler høyere temperaturer.

**Loddmaterialer:**

**Sølvlodd:**
- Ag-Cu-Zn-legeringer
- Smeltepunkt: 620-720°C
- Høy styrke, god kapillarvirkning
- Dyrt, men allsidig
- For stål, kobber, messing

**Kobberledd:**
- Cu-P-legeringer (for kobber-kobber)
- Trenger ikke fluks på rent kobber
- Rimelig, god for VVS

**Messinglodd:**
- Cu-Zn-legeringer
- Smeltepunkt: 850-900°C
- For stål, støpejern
- Høy temperaturbestandighet

**Oppvarming:**
- Gassflamme (acetylen-oksygen, propan-oksygen)
- Induksjonsoppvarming
- Ovnlodding (store serier)

**Teknikk:**
1. Monter delene med riktig spalte (0,05-0,2mm)
2. Påfør flussmiddel
3. Varm jevnt rundt forbindelsen
4. Tilsett lodd når temperaturen er riktig
5. Loddet flyter mot varmen
6. Rengjør flussmiddelrester

**Eksempel - Hardlodding av kobberrør:**
VVS-forbindelse med sølvlodd:
1. Rengjør rør og muffe grundig
2. Påfør flussmiddel
3. Monter med lett press
4. Varm jevnt med propanflamme
5. Tilsett sølvlodd når flussmiddelet er aktivt
6. Loddet flyter inn i spalten
7. La avkjøle, spyl flussmiddel`,
    },
    {
      title: 'Industriell limning',
      content: `## Industriell limning

Liming er en viktig sammenføyningsmetode i moderne industri, spesielt for kompositter og materialer som er vanskelige å sveise.

**Fordeler med liming:**
- Kan forbinde ulike materialer
- Jevn spenningsfordeling
- Ingen varmepåvirkning
- Tett og glatt forbindelse
- Demper vibrasjoner
- Lav vekt

**Ulemper:**
- Lavere styrke enn sveising (ofte)
- Herdetid kreves
- Temperaturavhengig styrke
- Overflatepreparering kritisk
- Vanskelig å inspisere

**Limtyper:**

**Epoksylim:**
- To-komponent (harpiks + herder)
- Høy styrke (opptil 30 MPa)
- God kjemikaliebestandighet
- Herdetid: Timer til døgn

**Akryllim:**
- Rask herding
- God på metaller
- Fleksibelt eller stivt

**Polyuretanlim:**
- Fleksibelt
- God på plast og tre
- Skummer ved herding

**Cyanoacrylat (sekundlim):**
- Meget rask herding
- Lav viskositet
- For små flater
- Sprøtt

**Anaerobe lim:**
- Herder uten luft (i spalter)
- For gjenger og lagre
- Gjengesikring, tetning

**Overflatepreparering:**
God adhesjon krever:
- Rengjøring og avfetting
- Oppruhing for mekanisk binding
- Primer for enkelte materialer
- Kontroll av fuktighet

**Eksempel - Strukturell liming:**
Limning av aluminiumsprofiler i bil:
1. Sandblås eller sliplimflater
2. Avfett med isopropanol
3. Påfør primer for aluminium
4. Bland to-komponent epoksy
5. Påfør jevnt, unngå luftbobler
6. Monter og fiksér
7. Herd ved 60°C i 2 timer (eller 24t ved romtemperatur)`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-2-3-ex-1',
      type: 'classic',
      task: 'Forklar hovedforskjellen mellom lodding og sveising, og beskriv når lodding foretrekkes.',
      solution: 'Hovedforskjell: Ved sveising smelter grunnmaterialet, ved lodding smelter kun tilsatsmaterialet (loddet). Lodding foretrekkes når: 1) Materialene har svært forskjellig smeltepunkt, 2) Ulike materialer skal forbindes (kobber til stål), 3) Varmepåvirkning må minimeres (elektronikk, tynne materialer), 4) Demontering kan være ønskelig, 5) Presisjonsdeler som ikke tåler deformasjon.',
    },
    {
      id: 'tif-vg1-2-3-ex-2',
      type: 'multiple-choice',
      task: 'Hva er forskjellen mellom myklodding og hardlodding?',
      options: [
        { id: 'a', text: 'Myklodding bruker lodd med smeltepunkt under 450°C, hardlodding over 450°C', isCorrect: true },
        { id: 'b', text: 'Myklodding brukes kun på myke materialer', isCorrect: false },
        { id: 'c', text: 'Hardlodding gir svakere forbindelse', isCorrect: false },
        { id: 'd', text: 'Myklodding krever ikke flussmiddel', isCorrect: false },
      ],
      solution: 'Grensen mellom myklodding og hardlodding går ved 450°C. Myklodding (under 450°C) bruker loddetinn og gir lavere styrke. Hardlodding (over 450°C) bruker sølv-, kobber- eller messinglodd og gir høyere styrke og temperaturbestandighet.',
    },
    {
      id: 'tif-vg1-2-3-ex-3',
      type: 'classic',
      task: 'Beskriv prosessen for å lodde en komponent på et kretskort med blyfri loddetinn.',
      solution: 'Loddeprosess: 1) Still loddekolben til riktig temperatur (300-350°C for blyfri). 2) Rengjør loddespissen på våt svamp. 3) Plasser komponentben i hullet/på puten. 4) Plasser loddespissen så den berører BÅDE komponentben OG kobberpute. 5) Vent 1-2 sekunder for oppvarming. 6) Tilsett loddetinn på motsatt side av spissen. 7) La loddet flyte rundt - fjern loddetinn først, deretter spissen. 8) Ikke beveg før loddet har størknet. Bra resultat: Blank, konisk form uten bobler.',
    },
    {
      id: 'tif-vg1-2-3-ex-4',
      type: 'multiple-choice',
      task: 'Hvilken limtype er best for strukturell liming av metall der høy styrke kreves?',
      options: [
        { id: 'a', text: 'Epoksylim (to-komponent)', isCorrect: true },
        { id: 'b', text: 'Cyanoacrylat (sekundlim)', isCorrect: false },
        { id: 'c', text: 'Kontaktlim', isCorrect: false },
        { id: 'd', text: 'Polyuretanlim', isCorrect: false },
      ],
      solution: 'To-komponent epoksylim gir høyest styrke (opptil 30 MPa) og best kjemikaliebestandighet for strukturell liming av metall. Sekundlim er for sprøtt for strukturelle forbindelser.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-2-3-ex-5',
      type: 'classic',
      task: 'En VVS-rørlegger skal forbinde kobberrør i et drikkevannssystem. Diskuter valg mellom myklodding og hardlodding, og begrunn anbefalingen.',
      solution: 'Anbefaling: Myklodding med blyfritt loddetinn for drikkevannsinstallasjoner. Begrunnelse: 1) Blyfritt lovkrav for drikkevann (helse). 2) Lavere temperatur reduserer risiko for skade på rør og omgivelser. 3) Enklere teknikk, raskere utførelse. 4) Tilstrekkelig styrke for vannsystemer uten trykk/temperaturpåkjenning. Hardlodding brukes ved: Høytrykksystemer, varmeanlegg over 110°C, eller når mekanisk styrke er kritisk. NB: Kontroller lokale forskrifter.',
    },
    {
      id: 'tif-vg1-2-3-ex-6',
      type: 'classic',
      task: 'Sammenlign sveising, hardlodding og liming for sammenføyning av to aluminiumsplater. Diskuter styrke, prosess og bruksområder.',
      solution: 'SVEISING (TIG/MIG): Styrke: Høyest, nær grunnmaterialets styrke. Prosess: Krever fjerning av oksidlag, spesielle tilsatsmaterialer, beskyttelsesgass. Bruk: Strukturelle forbindelser der høyeste styrke kreves. HARDLODDING: Styrke: God (60-80% av grunnmateriale). Prosess: Krever fluks, varme, kontroll av spalte. Bruk: VVS, varmevekslere, der sveisevarme må unngås. LIMING: Styrke: God ved riktig design (jevn spenningsfordeling). Prosess: Krever grundig rengjøring, ofte primer, herdetid. Bruk: Kompositter, karosseri, der vektbesparelse og ingen varmedeformasjon er viktig.',
    },
  ],
  keyTerms: [
    { term: 'Myklodding', definition: 'Lodding med tilsatsmateriale som smelter under 450°C.' },
    { term: 'Hardlodding', definition: 'Lodding med tilsatsmateriale som smelter over 450°C.' },
    { term: 'Flussmiddel', definition: 'Kjemikalie som fjerner oksider og forbedrer loddets flytegenskaper.' },
    { term: 'Kapillarvirkning', definition: 'Fenomenet der væske (lodd) trekkes inn i smale spalter.' },
    { term: 'Epoksylim', definition: 'To-komponent lim med høy styrke for strukturell liming.' },
    { term: 'Anaerobt lim', definition: 'Lim som herder i fravær av luft, for gjenger og lagre.' },
  ],
};

// ============================================================================
// Kapittel 2.4: Mekaniske sammenføyninger
// ============================================================================

export const CHAPTER_TIF_VG1_2_4: TextbookChapter = {
  id: 'tif-vg1-2-4',
  courseId: 'tif-vg1',
  chapterNumber: '2.4',
  title: 'Mekaniske sammenføyninger',
  description: 'Oversikt over mekaniske sammenføyningsmetoder som bolting, nagling og pressing.',
  estimatedMinutes: 40,
  competenceGoals: [
    'gjennomføre og gjøre rede for termiske, kjemiske og mekaniske sammenføyingsmetoder',
    'demontere og montere maskinelementer i relevante arbeidsoppgaver',
  ],
  sections: [
    {
      title: 'Boltforbindelser',
      content: `## Boltforbindelser

Boltforbindelser er den mest brukte mekaniske sammenføyningsmetoden fordi de er demonterbare og kan justeres.

**Komponenter:**
- Bolt/skrue: Sylindrisk stang med gjenger
- Mutter: Innvendig gjenget del som holder bolten
- Skive: Fordeler lasten, beskytter overflaten

**Gjengtyper:**
- Metrisk grovgjenge (M): Standard
- Metrisk fingjenge (MF): Tettere stigning
- Whitworth: Eldre britisk standard
- UNC/UNF: Amerikansk standard

**Fasthetsklasser for stålbolter:**
- 4.6: Lav styrke (byggbolter)
- 8.8: Middels styrke (maskinbolter)
- 10.9: Høy styrke (bilindustri)
- 12.9: Høyeste styrke (spesielle krav)

Første tall: 1/100 av strekkfasthet (MPa)
Andre tall: 10 × forholdet flytegrense/strekkfasthet

**Eksempel - Fasthetsklasse 8.8:**
- Strekkfasthet: 8 × 100 = 800 MPa
- Flytegrense: 0,8 × 800 = 640 MPa

**Tiltrekningsmoment:**
Riktig tiltrekningsmoment er kritisk:
- For lite: Forbindelsen løsner
- For mye: Bolten kan ryke

Moment = 0,2 × Diameter × Kraft

**Eksempel - M10 bolt 8.8:**
Anbefalt moment: ca. 40 Nm
Bruk momentnøkkel for nøyaktig tiltrekking`,
    },
    {
      title: 'Sikring av boltforbindelser',
      content: `## Sikring av boltforbindelser

Bolter kan løsne på grunn av vibrasjoner, temperaturendringer eller belastning. Sikring er ofte nødvendig.

**Sikringsmetoder:**

**Låsemutter:**
- Nylok-mutter: Plastinnlegg griper i gjengene
- All-metal låsemutter: Deformert topp
- Slisset mutter med splint: For kritiske anvendelser

**Sikringsskiver:**
- Fjærskive: Opprettholder spenning
- Tannskive: Griper inn i overflaten
- Nord-Lock: Kileskiver, meget effektiv
- Tab-skive: Bøyes rundt mutter

**Gjengesikring:**
- Anaerobt lim (Loctite): Herder i gjengene
- Blå: Medium styrke, kan demonteres
- Rød: Høy styrke, krever varme for demontering

**Låsewire:**
- Tråd som forhindrer rotasjon
- For flyindustri og kritiske anvendelser

**Valg av sikring:**
- Vibrasjon: Nylok eller Nord-Lock
- Høy temperatur: All-metal, låsewire
- Enkel demontering: Fjærskive, blå gjengesikring
- Permanent: Rød gjengesikring, låsewire

**Eksempel - Sikring av hjulbolter:**
Hjulbolter på bil:
- Konisk anlegg gir selvsikring
- Riktig moment (100-120 Nm typisk)
- Krysstilstramming for jevn spenning
- Ettertrekking etter 50 km`,
    },
    {
      title: 'Nagling og pressing',
      content: `## Nagling og pressing

**Nagling:**

Nagling er en permanent sammenføyningsmetode der en nagle deformeres for å holde delene sammen.

**Typer nagler:**

**Massiv nagle:**
- Varmnagles eller kaldnagles
- For bærende konstruksjoner
- Historisk viktig (broer, skip)
- I dag erstattet av sveising

**Blindnagle (popnagle):**
- Krever kun tilgang fra én side
- Settes med nagleverktøy
- Mye brukt i tynnplatekonstruksjoner
- Aluminium, stål eller rustfritt

**Strukturnagler:**
- Blindnagler med høy styrke
- For fly og bilindustri
- Kan erstatte bolter

**Pressing/krymping:**

**Presspassning:**
- Aksel presses inn i hull der hullet er litt mindre
- Friksjonsforbindelse
- Brukes for lagre, busser, tapper

**Krympeforbindelse:**
- Ytterdelelen varmes og utvider seg
- Innerdelen kjøles og krymper (eventuelt)
- Ved romtemperatur: Meget stram passning

**Fordeler:**
- Ingen ekstra komponenter
- Symmetrisk belastning
- Kan overføre stort moment

**Eksempel - Blindnagling:**
Feste av aluminiumsplate:
1. Bor hull 0,1mm større enn naglediameter
2. Sett inn blindnagle
3. Aktiver nagleverktøy
4. Trekktappen brekker av
5. Naglen ekspanderer og låser`,
    },
    {
      title: 'Spesielle forbindelser',
      content: `## Spesielle forbindelser

**Klemmeforbindelser:**

**Slangeklemmer:**
- Ormsrueklemmer: Justerbare
- Fjærklemmer: Engangs, rask
- T-bolt-klemmer: Høytrykk

**Rørkoblinger:**
- Clamp-koblinger: Rask demontering
- Flenskoblinger: Boltet, tettet
- Kompresjonsfittings: For rør

**Kileforbindelser:**

**Kile og not:**
- Overfører rotasjon fra aksel til nav
- Parallellkile: Rektangulært tverrsnitt
- Woodruff-kile: Halvmåneformet
- Tangent kiler: For store momenter

**Splineforbindelser:**
- Flere "tenner" rundt akselen
- Overfører stort moment
- Tillater aksiell bevegelse

**Snap-fit (klikkforbindelser):**

Plastdeler som klikkes sammen:
- Fjærer tilbake og låser
- Rask montering uten verktøy
- Mye brukt i elektronikk og forbrukerprodukter
- Design krever nøye beregning

**Eksempel - Kileforbindelse:**
Tannhjul på aksel:
1. Maskinér kilespor i aksel
2. Maskinér kilespor i nav
3. Sett inn kile (lett presspassning)
4. Monter tannhjul
5. Sikre med stillskrue eller låsemutter`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-2-4-ex-1',
      type: 'classic',
      task: 'Forklar hva fasthetsklasse 10.9 betyr for en stålbolt.',
      solution: 'Fasthetsklasse 10.9 indikerer: Første tall (10): Strekkfasthet = 10 × 100 = 1000 MPa. Andre tall (9): Flytegrense = 0,9 × 1000 = 900 MPa. Dette er en høyfasthetsbolt som brukes der det kreves stor styrke, f.eks. i bilindustri, maskiner med høye belastninger. Krever riktig momenttiltrekking og ofte sikring mot løsning.',
    },
    {
      id: 'tif-vg1-2-4-ex-2',
      type: 'multiple-choice',
      task: 'Hvilken sikringsmetode er best mot løsning ved sterke vibrasjoner?',
      options: [
        { id: 'a', text: 'Nord-Lock kileskiver', isCorrect: true },
        { id: 'b', text: 'Vanlig fjærskive', isCorrect: false },
        { id: 'c', text: 'Flat skive', isCorrect: false },
        { id: 'd', text: 'Økt tiltrekningsmoment', isCorrect: false },
      ],
      solution: 'Nord-Lock kileskiver er spesielt utviklet for vibrasjonssikring. De har kileformede tenner som griper inn i hverandre og forhindrer løsning selv ved ekstreme vibrasjoner. Vanlige fjærskiver gir lite beskyttelse mot vibrasjonsløsning.',
    },
    {
      id: 'tif-vg1-2-4-ex-3',
      type: 'classic',
      task: 'Beskriv når du vil velge blindnagler fremfor bolter for å feste komponenter.',
      solution: 'Blindnagler velges når: 1) Tilgang kun fra én side (lukket konstruksjon, bokser), 2) Rask montering er viktig (mange festepunkter), 3) Permanent forbindelse er akseptabelt, 4) Tynt materiale der bolter ville hatt for store hoder, 5) Lett vekt er kritisk. Bolter velges når: Demontering kan bli nødvendig, høyere belastning kreves, justering trengs, eller tykt materiale.',
    },
    {
      id: 'tif-vg1-2-4-ex-4',
      type: 'multiple-choice',
      task: 'Hva er funksjonen til en kileforbindelse?',
      options: [
        { id: 'a', text: 'Overføre rotasjon fra aksel til nav', isCorrect: true },
        { id: 'b', text: 'Forhindre aksial bevegelse', isCorrect: false },
        { id: 'c', text: 'Dempe vibrasjoner', isCorrect: false },
        { id: 'd', text: 'Tette mot lekkasje', isCorrect: false },
      ],
      solution: 'En kileforbindelse overfører dreiemoment (rotasjon) fra aksel til nav eller omvendt. Kilen sitter i spor i både aksel og nav og forhindrer relativ rotasjon mellom delene.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-2-4-ex-5',
      type: 'classic',
      task: 'Du skal montere en maskinkomponent med M12 bolter (fasthetsklasse 8.8) som vil utsettes for vibrasjoner. Beskriv monteringsprosedyren inkludert sikring.',
      solution: 'Monteringsprosedyre: 1) FORBEREDELSE: Rengjør hull og anleggflater, sjekk at gjengene er hele. 2) SIKRINGSVALG: Velg Nord-Lock skiver eller Nylok-mutter pga. vibrasjoner. 3) MONTERING: Sett inn bolt med skive, Nord-Lock-par, og mutter. 4) TILTREKKING: Bruk momentnøkkel - M12 8.8 ca. 80-90 Nm. Trekk til i kryss/diagonalt for jevn spenning. 5) VERIFIKASJON: Sjekk at alle bolter har riktig moment. 6) DOKUMENTASJON: Noter moment og eventuelle avvik.',
    },
    {
      id: 'tif-vg1-2-4-ex-6',
      type: 'classic',
      task: 'Sammenlign boltforbindelse, nagling og sveising for sammenføyning av to stålplater. Diskuter styrke, demonterbarhet og bruksområder.',
      solution: 'BOLTFORBINDELSE: Styrke: God, avhenger av bolt-dimensjon og antall. Demonterbar: Ja, enkel. Bruksområder: Maskiner, konstruksjoner som kan trenge service, justerbare forbindelser. NAGLING: Styrke: God, permanent forbindelse. Demonterbar: Nei (ødelegger naglen). Bruksområder: Fly, tynnplatearbeid, der tilgang kun fra én side, permanent forbindelse OK. SVEISING: Styrke: Høyest, kontinuerlig forbindelse. Demonterbar: Nei (må skjæres). Bruksområder: Bærende konstruksjoner, trykksatt utstyr, der maksimal styrke og tetthet kreves.',
    },
  ],
  keyTerms: [
    { term: 'Fasthetsklasse', definition: 'Klassifisering av bolters styrkeegenskaper (f.eks. 8.8, 10.9).' },
    { term: 'Tiltrekningsmoment', definition: 'Moment brukt for å trekke til boltforbindelse.' },
    { term: 'Låsemutter', definition: 'Mutter med innebygd sikring mot løsning.' },
    { term: 'Blindnagle', definition: 'Nagle som monteres fra kun én side.' },
    { term: 'Presspassning', definition: 'Forbindelse der deler presses sammen med overgangspassning.' },
    { term: 'Kileforbindelse', definition: 'Forbindelse som overfører rotasjon via en kile i spor.' },
  ],
};

// ============================================================================
// Kapittel 2.5: Sveisefeil og kvalitetskontroll
// ============================================================================

export const CHAPTER_TIF_VG1_2_5: TextbookChapter = {
  id: 'tif-vg1-2-5',
  courseId: 'tif-vg1',
  chapterNumber: '2.5',
  title: 'Sveisefeil og kvalitetskontroll',
  description: 'Identifisering av vanlige sveisefeil og metoder for kvalitetskontroll.',
  estimatedMinutes: 45,
  competenceGoals: [
    'planlegge, gjennomføre og dokumentere et praktisk arbeid innenfor produksjon og vedlikehold av maskiner og utstyr i samsvar med aktuelle standarder og prosedyrer',
  ],
  sections: [
    {
      title: 'Vanlige sveisefeil',
      content: `## Vanlige sveisefeil

Sveisefeil svekker sveiseforbindelsen og må identifiseres og korrigeres.

**Porer og gasslommer:**
Runde hulrom i sveisegodset forårsaket av gass som ikke slapp ut før størkning.
- Årsaker: For rask sveising, forurenset overflate, utilstrekkelig gass
- Forebygging: Rengjør godt, riktig gasmengde, reduser hastighet

**Sprekker:**
Alvorlig feil som kan føre til brudd.
- Varmsprekker: Oppstår under størkning
- Kaldsprekker: Oppstår etter avkjøling
- Årsaker: Feil materialvalg, for høy avkjølingshastighet, hydrogen
- Forebygging: Forvarming, riktig tilsatsmateriale, langsom avkjøling

**Manglende innbrenning:**
Sveisegodset har ikke smeltet sammen med grunnmaterialet.
- Årsaker: For lav strøm, for høy hastighet, feil vinkel
- Forebygging: Øk strøm, senk hastighet, korriger teknikk

**Bindingsfeil:**
Manglende sammensmelting mellom sveisestrenger eller ved fugekant.
- Alvorlig feil - sveisen kan se bra ut, men er svak
- Årsaker: For lav temperatur, feil teknikk, oksidasjon
- Forebygging: Riktige parametere, god rengjøring, riktig teknikk

**Gjennombrenning:**
Hull gjennom materialet.
- Årsaker: For høy strøm, for lav hastighet, for tynt materiale
- Forebygging: Reduser strøm, øk hastighet, bruk backing

**Slagginneslutninger:**
Slagg fanget i sveisegodset.
- Aktuelt for pinnesveising og flusssveising
- Årsaker: Utilstrekkelig slaggfjerning mellom strenger
- Forebygging: Fjern slagg grundig, riktig sveisevinkel`,
    },
    {
      title: 'Visuelle feil',
      content: `## Visuelle feil

Feil som kan identifiseres ved visuell inspeksjon.

**Undersnitt:**
Fordypning langs kanten av sveisen i grunnmaterialet.
- Svekker materialet ved sveisekanten
- Årsaker: For høy strøm, feil vinkel, for høy hastighet
- Akseptgrense avhenger av standard (ofte max 0,5mm)

**For høy/lav sveiseforsterkning:**
Sveisesømmen stikker for mye opp eller er for flat.
- For høy: Spenningskonsentrasjon, merarbeid ved sliping
- For lav: Utilstrekkelig styrke
- Akseptgrense: Typisk 1-3mm over grunnmateriale

**Sprut:**
Metallkuler festet på overflaten rundt sveisen.
- Ikke nødvendigvis svekende, men uønsket
- Årsaker: Feil parametere, forurenset overflate
- Forebygging: Korrekt spenning/strøm, antisputmiddel

**Forskyvning/ujevnhet:**
Platene ligger ikke i plan, kantforskyvning.
- Svekker forbindelsen, spenningskonsentrasjon
- Årsaker: Dårlig oppstilling, vridning under sveising
- Forebygging: Grundig oppspenning, balansert sveiserekkefølge

**Kratersprekk:**
Sprekk i kraterets (endepunktets) senter.
- Oppstår ved plutselig avslutning
- Forebygging: Gradvis avslutning, krater-fyll-funksjon

**Eksempel - Visuell inspeksjon:**
Sjekkliste for visuell kontroll:
☐ Ingen synlige sprekker
☐ Undersnitt innenfor toleranse
☐ Sveiseforsterkning 1-3mm
☐ Ingen synlige porer
☐ Akseptabel sprut
☐ Jevn sveisesøm
☐ Fullstendig fylling`,
    },
    {
      title: 'Ikke-destruktiv testing (NDT)',
      content: `## Ikke-destruktiv testing (NDT)

NDT-metoder avdekker feil uten å skade arbeidsstykket.

**Visuell testing (VT):**
- Enkleste metoden
- Krever god belysning og ofte forstørrelse
- Avdekker kun overflatefeil
- Første steg i all kvalitetskontroll

**Penetranttesting (PT):**
- Væske trenger inn i overflatefeil
- Overskudd fjernes, fremkaller drar ut penetranten
- Synlige indikasjoner av sprekker
- For ikke-magnetiske materialer
- Avdekker kun overflatefeil

**Magnetpulverprøving (MT):**
- Magnetfelt induseres i materialet
- Magnetpulver samler seg ved feil
- For magnetiske materialer
- Avdekker overflate- og nær-overflate-feil

**Ultralydtesting (UT):**
- Lydbølger sendes gjennom materialet
- Reflekteres fra feil
- Avdekker indre feil
- Kan måle tykkelse og dybde av feil
- Krever opplært operatør

**Radiografisk testing (RT):**
- Røntgen eller gammastråling
- Avbilder indre feil
- Porer, inneslutninger, sprekker synlige
- Dokumenterbar (film eller digitalt)
- Krever strålevern og sertifisering

**Valg av metode:**
- Overflatefeil, alle materialer: PT
- Overflatefeil, magnetiske materialer: MT
- Indre feil, enkel geometri: RT
- Indre feil, kompleks geometri: UT`,
    },
    {
      title: 'Kvalitetssystemer og dokumentasjon',
      content: `## Kvalitetssystemer og dokumentasjon

**Sveiseprosedyrespesifikasjon (WPS):**
Dokument som beskriver hvordan en sveis skal utføres:
- Sveisemetode
- Materialtyper og tykkelser
- Tilsatsmateriale
- Posisjon
- Parametere
- For- og etterbehandling

**Prosedyrekvalifiseringsprotokoll (PQR):**
Dokumentasjon som viser at WPS gir tilfredsstillende resultater.
- Prøvestykke sveises etter WPS
- Testing (strekk, bøy, slag, makro)
- Resultater dokumenteres

**Sveisersertifikat:**
Bevis på at sveiser har kompetanse:
- ISO 9606 (stål), ISO 9606-2 (aluminium)
- Spesifikk for metode, materiale, posisjon
- Gyldig i begrenset periode
- Krever fornyet testing

**Sveisejournal:**
Løpende dokumentasjon av sveisearbeid:
- Dato og sveiser
- WPS-referanse
- Materialspesifikasjon
- Inspeksjonsresultater
- Eventuelle avvik

**ISO 3834 - Kvalitetskrav til sveising:**
- Del 2: Fullstendige kvalitetskrav
- Del 3: Standard kvalitetskrav
- Del 4: Grunnleggende kvalitetskrav

**Eksempel - Dokumentasjonskjede:**
1. Sveiseren er sertifisert (ISO 9606)
2. Sveiser etter godkjent WPS
3. Fører sveisejournal
4. Inspeksjon dokumenteres
5. Eventuell NDT dokumenteres
6. Ferdigdokumentasjon arkiveres`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-2-5-ex-1',
      type: 'classic',
      task: 'Forklar forskjellen mellom porer og sprekker i en sveis, og beskriv årsaker til hver feil.',
      solution: 'PORER: Runde hulrom forårsaket av innelukket gass. Årsaker: Forurenset overflate, utilstrekkelig beskyttelsesgass, for høy sveisehastighet, fuktig tilsatsmateriale. SPREKKER: Linjeformede brudd i materialet. Årsaker: Feil materialvalg, for rask avkjøling (kaldsprekker), høyt hydrogeninnhold, høy indre spenning, feil sveiserekkefølge. Sprekker er generelt mer alvorlige enn porer fordi de kan vokse under belastning.',
    },
    {
      id: 'tif-vg1-2-5-ex-2',
      type: 'multiple-choice',
      task: 'Hvilken NDT-metode er best egnet for å finne overflatefeil på rustfritt stål?',
      options: [
        { id: 'a', text: 'Penetranttesting (PT)', isCorrect: true },
        { id: 'b', text: 'Magnetpulverprøving (MT)', isCorrect: false },
        { id: 'c', text: 'Ultralydtesting (UT)', isCorrect: false },
        { id: 'd', text: 'Radiografisk testing (RT)', isCorrect: false },
      ],
      solution: 'Penetranttesting (PT) er best for overflatefeil på rustfritt stål fordi rustfritt stål er ikke-magnetisk og MT fungerer ikke. PT bruker en farget eller fluorescerende væske som trenger inn i sprekker og gjør dem synlige.',
    },
    {
      id: 'tif-vg1-2-5-ex-3',
      type: 'classic',
      task: 'Hva er en WPS (Weld Procedure Specification), og hvorfor er den viktig?',
      solution: 'WPS (Sveiseprosedyrespesifikasjon) er et dokument som beskriver nøyaktig hvordan en sveis skal utføres - inkludert sveisemetode, materialer, parametere, posisjon og tilsatsmateriale. Den er viktig fordi: 1) Sikrer repeterbar kvalitet - alle sveiser likt. 2) Dokumenterer at metoden gir tilfredsstillende resultat (støttet av PQR). 3) Er et krav i kvalitetsstandarder (ISO 3834). 4) Gir referanse ved inspeksjon og avvik. 5) Sikrer sporbarhet ved problemer.',
    },
    {
      id: 'tif-vg1-2-5-ex-4',
      type: 'multiple-choice',
      task: 'Hva er den vanligste årsaken til undersnitt i en sveis?',
      options: [
        { id: 'a', text: 'For høy strømstyrke eller feil sveisevinkel', isCorrect: true },
        { id: 'b', text: 'For lav strømstyrke', isCorrect: false },
        { id: 'c', text: 'For mye tilsatsmateriale', isCorrect: false },
        { id: 'd', text: 'For langsom sveisehastighet', isCorrect: false },
      ],
      solution: 'Undersnitt oppstår når lysbuen smelter bort grunnmateriale ved kanten uten at det fylles med sveisegods. Dette skjer typisk ved for høy strømstyrke, for høy spenning, feil sveisevinkel, eller for høy sveisehastighet.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-2-5-ex-5',
      type: 'classic',
      task: 'Du observerer følgende ved inspeksjon av en MIG/MAG-sveis: Mange porer, mye sprut, og ujevn sveisesøm. Analyser mulige årsaker og foreslå korrigerende tiltak.',
      solution: 'Analyse og tiltak: PORER: Årsaker: Utilstrekkelig gass (sjekk gasmengde, lekkasjer), forurenset overflate (sjekk rengjøring), fuktig miljø. Tiltak: Øk gass til 18-20 l/min, rengjør bedre, sjekk for trekk. SPRUT: Årsaker: Feil spenning/strøm-forhold, for lang sticking. Tiltak: Juster parametere, korriger avstanden (15-18mm). UJEVN SØM: Årsaker: Ustabil hastighet, dårlig teknikk, ustabil bue. Tiltak: Tren på jevn bevegelse, kontroller parameterstabilitet, sjekk kontakttupp for slitasje.',
    },
    {
      id: 'tif-vg1-2-5-ex-6',
      type: 'classic',
      task: 'Lag en sjekkliste for visuell inspeksjon av en buttsveis i stål. List opp minst 8 punkter som skal kontrolleres.',
      solution: 'Sjekkliste for visuell inspeksjon:\n1. ☐ Ingen synlige sprekker i sveisesøm eller HAZ\n2. ☐ Undersnitt innenfor toleranse (maks 0,5mm)\n3. ☐ Sveiseforsterkning 1-3mm over grunnmateriale\n4. ☐ Ingen synlige porer på overflaten\n5. ☐ Sprut innenfor akseptabelt nivå\n6. ☐ Jevn sveisebredde langs hele sveisen\n7. ☐ Ingen kratersprekk i endepunkter\n8. ☐ Fullstendig gjennombrenning synlig på baksiden\n9. ☐ Ingen kantforskyvning eller vinkeldeformasjon\n10. ☐ Sveisen følger tegningen (plassering, lengde)',
    },
  ],
  keyTerms: [
    { term: 'Pore', definition: 'Hulrom i sveis forårsaket av innelukket gass.' },
    { term: 'Undersnitt', definition: 'Fordypning langs sveisekanten i grunnmaterialet.' },
    { term: 'Bindingsfeil', definition: 'Manglende sammensmelting mellom sveisegods og grunnmateriale.' },
    { term: 'NDT', definition: 'Non-Destructive Testing - testing uten å skade arbeidsstykket.' },
    { term: 'WPS', definition: 'Weld Procedure Specification - sveiseprosedyrespesifikasjon.' },
    { term: 'PT', definition: 'Penetrant Testing - overflatefeildeteksjon med væske.' },
  ],
};

// ============================================================================
// Kapittel 2.6: HMS ved sveising og sammenføyning
// ============================================================================

export const CHAPTER_TIF_VG1_2_6: TextbookChapter = {
  id: 'tif-vg1-2-6',
  courseId: 'tif-vg1',
  chapterNumber: '2.6',
  title: 'HMS ved sveising og sammenføyning',
  description: 'Sikkerhetskrav og verneutstyr ved sveise- og sammenføyningsarbeid.',
  estimatedMinutes: 35,
  competenceGoals: [
    'bruke materialer, teknikker og utstyr i samsvar med gjeldende regelverk for helse, miljø og sikkerhet',
  ],
  sections: [
    {
      title: 'Farer ved sveising',
      content: `## Farer ved sveising

Sveising innebærer flere alvorlige helse- og sikkerhetsrisikoer som må håndteres.

**Strålefare:**

**UV-stråling:**
- Lysbuen sender ut intens UV-stråling
- "Sveiseblind" (fotokeratitt) ved øyeeksponering
- Hudforbrenning ved langvarig eksponering
- Skader kan oppstå på sekunder

**IR-stråling (infrarød):**
- Varme fra lysbue og smeltet metall
- Kan skade netthinnen ved langvarig eksponering
- Bidrar til varmepåkjenning

**Synlig lys:**
- Meget intenst lys
- Midlertidig blindhet
- Hodepine og tretthet

**Sveiserøyk:**

Sveiserøyk inneholder partikler og gasser som er helsefarlige:
- Metalloksider (jern, mangan, krom, nikkel)
- Ozon (fra UV-stråling)
- Karbonmonoksid (fra MAG med CO₂)
- Nitrogenoksider

**Helseeffekter:**
- Akutt: Irritasjon i luftveier, hodepine, svimmelhet
- Kronisk: Lungeskader, "metallfeber", kreftrisiko

**Andre farer:**
- Elektrisk støt (spesielt ved TIG/MMA)
- Brann og eksplosjon
- Støy
- Ergonomiske belastninger`,
    },
    {
      title: 'Personlig verneutstyr',
      content: `## Personlig verneutstyr for sveising

**Øye- og ansiktsvern:**

**Sveisehjelm/-skjerm:**
- Automatisk mørkende (LCD): DIN 9-13
- Fast filter: Velges etter sveisemetode
- Må dekke hele ansiktet
- LCD reagerer på lysbuen i millisekunder

**Filtervalg:**
| Sveisemetode | Strømområde | DIN-nummer |
|--------------|-------------|------------|
| MIG/MAG | 100-200A | 10-12 |
| MIG/MAG | 200-350A | 12-13 |
| TIG | 50-100A | 9-10 |
| MMA | 100-150A | 10-11 |

**Åndedrettsvern:**

**Halvmaske med filter:**
- P3-filter for partikler
- A2-filter for gasser
- Kombinasjonsfilter A2P3

**Friskluftmaske:**
- Ved intenst sveisearbeid
- I trange rom
- Ved sveising av rustfritt/galvanisert

**Kroppsvern:**

**Sveiseklær:**
- Flammehemmende materiale
- Lær eller behandlet bomull
- Krage som lukkes
- Lange ermer
- Ingen syntetiske materialer!

**Sveisehansker:**
- Lange skaft (MIG/MAG, MMA)
- TIG-hansker: Tynnere for følsomhet
- Lær eller kevlar

**Verneforkle:**
- Ved mye sprut
- Ekstra beskyttelse

**Vernesko:**
- Ståltå
- Høye for sprut
- Sklisikre`,
    },
    {
      title: 'Ventilasjon og arbeidsmiljø',
      content: `## Ventilasjon og arbeidsmiljø

**Ventilasjonskrav:**

Sveiserøyk skal fjernes ved kilden før den når sveiserens pustesone.

**Punktavsug:**
- Sugearm posisjoneres nær sveisepunktet
- 10-15 cm fra lysbuen
- Flyttbar, følger arbeidet
- Mest effektiv metode

**Generell ventilasjon:**
- Supplerer punktavsug
- Erstatter ikke punktavsug i tette rom
- Sørger for frisk lufttilførsel

**Trange rom:**
- Spesielle regler (varme arbeider)
- Kontinuerlig ventilasjon
- Gassdetektor kan kreves
- Aldri sveis i tank uten sikring

**Grenseverdier (administrativ norm):**

| Stoff | Grenseverdi |
|-------|-------------|
| Sveiserøyk (generelt) | 5 mg/m³ |
| Krom VI | 0,005 mg/m³ |
| Nikkel | 0,05 mg/m³ |
| Mangan | 0,2 mg/m³ |

**Merknad:** Grenseverdier skal ikke overskrides i løpet av arbeidsdagen.

**Arbeidsplassutforming:**
- God belysning
- Riktig arbeidshøyde
- Tilgang til verneutstyr
- Førstehjelpsutstyr tilgjengelig
- Brannslukningsapparat i nærheten`,
    },
    {
      title: 'Brann og beredskap',
      content: `## Brann og beredskap

**Brannfare ved sveising:**

Sveising er en vesentlig brannkilde. Gnister og slagg kan antenne brennbart materiale.

**Varme arbeider:**
I Norge defineres "varme arbeider" som arbeid med åpen flamme, sveising, sliping og lignende som kan forårsake brann.

**Krav ved varme arbeider:**
- Sertifikat for varme arbeider påkrevd
- Risikovurdering før start
- Fjern brennbart materiale (10m radius)
- Dekk til det som ikke kan flyttes
- Ha brannslukningsapparat klart
- Brannvakt i 1 time etter arbeidsslutt

**Sikkerhetsrutiner:**

**Før sveising:**
- Sjekk at området er fritt for brennbare materialer
- Kontroller gassflasker og slanger
- Sjekk jordingsklemme
- Ha slukkeutstyr klart
- Varsle andre i området

**Under sveising:**
- Observer kontinuerlig for antennelse
- Ikke forlat arbeidsplassen med pågående prosess
- Hold orden

**Etter sveising:**
- Rydd arbeidsplassen
- Kontroller for ulming/gløding
- Brannvakt ved behov
- Steng gassventiler

**Ved brann:**
1. Varsle
2. Evakuer
3. Slukk hvis mulig
4. Møt brannvesen

**Ved strømulykke:**
1. Bryt strømmen!
2. Ikke berør skadde før strømløs
3. Førstehjelp (HLR om bevisstløs)
4. Ring 113`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-2-6-ex-1',
      type: 'classic',
      task: 'Forklar farene ved UV-stråling fra sveising og hvordan man beskytter seg.',
      solution: 'UV-stråling fra lysbuen er intens og kan skade øyne og hud på sekunder. Øyeskade (sveiseblind/fotokeratitt) gir smerte, tåreflod og lysfølsomhet timer etter eksponering. Hudeksponering kan gi forbrenning. Beskyttelse: 1) Sveisehjelm med riktig DIN-filter (9-13 avhengig av metode), 2) Flammehemmende klær som dekker all hud, 3) Sveisehansker med lange skaft, 4) Sveisegardiner for å beskytte andre i området.',
    },
    {
      id: 'tif-vg1-2-6-ex-2',
      type: 'multiple-choice',
      task: 'Hva er mest effektiv metode for å fjerne sveiserøyk?',
      options: [
        { id: 'a', text: 'Punktavsug nær lysbuen', isCorrect: true },
        { id: 'b', text: 'Åpne vinduer', isCorrect: false },
        { id: 'c', text: 'Vifte i rommet', isCorrect: false },
        { id: 'd', text: 'Kun åndedrettsvern', isCorrect: false },
      ],
      solution: 'Punktavsug plassert 10-15 cm fra lysbuen fanger sveiserøyken ved kilden, før den når sveiserens pustesone. Generell ventilasjon er et supplement, men punktavsug er langt mer effektivt for å redusere eksponering.',
    },
    {
      id: 'tif-vg1-2-6-ex-3',
      type: 'classic',
      task: 'Beskriv kravene som gjelder for "varme arbeider" i Norge.',
      solution: 'Varme arbeider (sveising, sliping, brenning) krever: 1) Sertifikat - alle som utfører varme arbeider må ha gyldig sertifikat. 2) Risikovurdering - vurdere brannfaren før start. 3) Klargjøring - fjerne brennbart materiale innen 10m, dekke til det som ikke kan flyttes. 4) Slukkeutstyr - ha slukkeapparat eller vannslange klart. 5) Brannvakt - holde vakt i minimum 1 time etter arbeidsslutt. 6) Ved midlertidig arbeidsplass: Skriftlig tillatelse fra eier/forvalter.',
    },
    {
      id: 'tif-vg1-2-6-ex-4',
      type: 'multiple-choice',
      task: 'Hvilket DIN-nummer brukes typisk for MIG/MAG-sveising ved 150A?',
      options: [
        { id: 'a', text: 'DIN 10-11', isCorrect: true },
        { id: 'b', text: 'DIN 5-6', isCorrect: false },
        { id: 'c', text: 'DIN 14-15', isCorrect: false },
        { id: 'd', text: 'DIN 3-4', isCorrect: false },
      ],
      solution: 'Ved MIG/MAG-sveising med 100-200A brukes typisk DIN 10-12. DIN-nummeret øker med strømstyrken fordi lysbuen blir sterkere. For høyere strømmer (200-350A) brukes DIN 12-13.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-2-6-ex-5',
      type: 'classic',
      task: 'Du skal utføre MIG/MAG-sveising av rustfritt stål i et verksted. List opp nødvendig verneutstyr og sikkerhetstiltak.',
      solution: 'Verneutstyr for sveising av rustfritt stål: 1) Sveisehjelm med DIN 10-12. 2) Friskluftmaske eller halvmaske med A2P3-filter (krom- og nikkeldamp). 3) Flammehemmende jakke og bukse. 4) Lange sveisehansker i lær. 5) Vernesko med ståltå. Sikkerhetstiltak: 1) Punktavsug nær sveisepunktet (krom VI er kreftfremkallende). 2) Sjekk at ventilasjon fungerer. 3) Hold andre borte fra området (sveisegardiner). 4) Fjern brennbart materiale. 5) Ha brannslukker klar. 6) Kontroller utstyr før start.',
    },
    {
      id: 'tif-vg1-2-6-ex-6',
      type: 'classic',
      task: 'Lag en risikovurdering for sveising i et tett rom (f.eks. innsiden av en tank). Identifiser farer og foreslå tiltak.',
      solution: 'Risikovurdering for trang rom-sveising:\n\nFARER:\n1. Sveiserøyk - konsentreres raskt\n2. Oksygenmangel - gasser fortrenger oksygen\n3. Eksplosjon - brennbare gasser kan samles\n4. Elektrisk støt - fuktig/ledende miljø\n5. Varmepåkjenning - begrenset luftsirkulasjon\n\nTILTAK:\n1. Kontinuerlig tilførselsventilasjon med frisk luft\n2. Gassdetektor for O₂, LEL (brennbare gasser)\n3. Friskluftmaske påkrevd\n4. Vakt utenfor med kommunikasjon\n5. Sikkerhetsline for rask evakuering\n6. Arbeidstillatelse og nøddokumentasjon\n7. Regelmessige pauser\n8. Jordet utstyr, isolerte kabler',
    },
  ],
  keyTerms: [
    { term: 'Sveiseblind', definition: 'Fotokeratitt - øyeskade fra UV-stråling ved sveising.' },
    { term: 'Sveiserøyk', definition: 'Helseskadelig blanding av metalloksider og gasser fra sveising.' },
    { term: 'DIN-nummer', definition: 'Klassifisering av sveisefilterets mørkhet.' },
    { term: 'Varme arbeider', definition: 'Arbeid med åpen flamme eller gnistdannende verktøy.' },
    { term: 'Punktavsug', definition: 'Lokal avtrekksventilasjon som fanger forurensning ved kilden.' },
    { term: 'Brannvakt', definition: 'Overvåkning etter varme arbeider for å oppdage brann.' },
  ],
};

// ============================================================================
// Kapittel 2.7: Termisk skjæring
// ============================================================================

export const CHAPTER_TIF_VG1_2_7: TextbookChapter = {
  id: 'tif-vg1-2-7',
  courseId: 'tif-vg1',
  chapterNumber: '2.7',
  title: 'Termisk skjæring og brennskjæring',
  description: 'Teknikker for termisk skjæring med gass, plasma og laser i industriproduksjon.',
  estimatedMinutes: 45,
  competenceGoals: [
    'gjennomføre og gjøre rede for termiske, kjemiske og mekaniske sammenføyingsmetoder',
    'bruke materialer, teknikker og utstyr i samsvar med gjeldende regelverk for helse, miljø og sikkerhet',
  ],
  sections: [
    {
      title: 'Brennskjæring',
      content: `## Brennskjæring

Brennskjæring (autogen skjæring) er den eldste termiske skjæremetoden og fortsatt mye brukt for stål.

**Prinsipp:**
1. Stålet varmes til tenntemperatur (ca. 900°C) med forvarmesflamme
2. Ren oksygen blåses på
3. Jernet forbrenner (oksiderer) eksotermt
4. Det smeltede oksidet blåses vekk

**Kjemisk reaksjon:**
3Fe + 2O₂ → Fe₃O₄ + varme

**Brennskjæringsutstyr:**
- Oksygen: Høytrykk (10-25 bar), høy renhet (99,5%+)
- Brenngass: Acetylen, propan eller MAPP-gass
- Brenner: Skjæremunnstykke med oksygensenter
- Slanger: Rød for brenngass, blå for oksygen
- Regulatorer: For riktig trykk

**Brenngass-sammenligning:**

| Gass | Flammetemperatur | Fordeler | Ulemper |
|------|------------------|----------|---------|
| Acetylen | 3100°C | Høyest temp, rask forvarming | Dyrere, eksplosiv |
| Propan | 2800°C | Billig, sikker | Tregere forvarming |
| MAPP | 2900°C | God mellomting | Begrenset tilgjengelighet |

**Materialbegrensninger:**
- Fungerer på: Ulegert og lavlegert stål
- Fungerer IKKE på: Rustfritt stål, aluminium, kobber
  (Oksidet smelter ikke riktig eller hindrer forbrenning)

**Tykkelsesområde:**
- 3mm til over 300mm
- Mest effektiv: 6-50mm`,
    },
    {
      title: 'Brennskjæringsteknikk',
      content: `## Brennskjæringsteknikk

**Forberedelse:**
1. Rengjør overflaten for rust og maling
2. Velg riktig munnstykke for tykkelse
3. Still inn forvarme- og skjæretrykk
4. Kontroller utstyr for lekkasjer

**Skjæretrykk (oksygen):**

| Materialtykkelse | Skjæretrykk |
|------------------|-------------|
| 3-6mm | 2-3 bar |
| 6-25mm | 3-4 bar |
| 25-50mm | 4-5 bar |
| 50-100mm | 5-6 bar |

**Skjæreprosess:**
1. Tenn forvarmesflammen
2. Juster til nøytral flamme (blå kjerne)
3. Forvarme startkanten til lysende rødvarme
4. Åpne skjæreoksygen
5. Beveg brenneren jevnt langs linjen
6. Avslut uten å stoppe opp

**Skjærekvalitet:**

**Godt snitt:**
- Vertikale rillemerkinger (drag lines)
- Ren underkant uten hengende slagg
- Liten varmepåvirket sone

**Vanlige feil:**
- Hengende slagg: For høy hastighet eller feil munnstykke
- Kraftige drag lines: For høy hastighet
- Bredt snitt: For stor avstand eller feil munnstykke
- Ujevn kant: Ustø hånd eller feil teknikk

**Maskinbrenneskjæring:**
- CNC-styrte brennebord
- Flere brennere samtidig
- Nøyaktig programmert kontur
- Høy produktivitet`,
    },
    {
      title: 'Plasmaskjæring',
      content: `## Plasmaskjæring

Plasmaskjæring bruker en ionisert gasskolonne (plasma) som kan skjære alle elektrisk ledende materialer.

**Prinsipp:**
1. Gass (ofte trykkluft) ioniseres i lysbuen
2. Plasma dannes med temperatur 15 000-30 000°C
3. Den fokuserte plasmastrålen smelter og blåser vekk materiale
4. Hjelpegass (luft) fjerner smeltet materiale

**Fordeler:**
- Kan skjære alle metaller (stål, rustfritt, aluminium)
- Høy hastighet på tynt materiale
- Smalere snitt enn brennskjæring
- Mindre varmepåvirket sone
- Kan skjære under vann (mindre støy/røyk)

**Ulemper:**
- Begrenset tykkelse (opptil ca. 50mm)
- Snittvinkel (smal øverst, bredere nederst)
- Dyrere utstyr enn brennskjæring
- Mer støy og UV-stråling

**Utstyrstyper:**

**Konvensjonell plasma:**
- 0-160A
- Manuell eller mekanisert
- Tykkelse opptil 25mm

**HD-plasma (High Definition):**
- 100-400A
- CNC-styrt
- Tykkelse opptil 50mm
- Meget god kvalitet

**Plasmaskjæring av aluminium:**
- Utmerket metode for aluminium
- Ren luft eller nitrogen som plasmagass
- Høy hastighet, fin kantkvalitet`,
    },
    {
      title: 'Laserskjæring',
      content: `## Laserskjæring

Laserskjæring bruker en fokusert laserstråle for å smelte eller fordampe materiale med høy presisjon.

**Lasertyper:**

**CO₂-laser:**
- Bølgelengde 10,6 µm
- God for stål, tre, plast, akryl
- Reflekteres av metaller (aluminiumspeil)
- Etablert teknologi

**Fiberlaser:**
- Bølgelengde 1,06 µm
- Absorberes bedre av metaller
- Høy effektivitet
- Lavere driftskostnader
- Dominerer i dag for metall

**Fordeler med laser:**
- Ekstrem presisjon (±0,1mm)
- Smalt snitt (0,1-0,3mm)
- Minimal varmepåvirkning
- Ingen mekanisk kontakt
- Komplekse konturer mulig
- Høy automatiseringsgrad

**Ulemper:**
- Meget høy investeringskostnad
- Begrenset tykkelse (stål: opptil 25-30mm)
- Krever reflekterende eller absorberende materiale
- Sikkerhetskrav (strålingsfare)

**Bruksområder:**
- Finmekanikk
- Elektronikkindustri
- Bilindustri (karosserideler)
- Skiltproduksjon
- Prototyper og småserier

**Typiske materialtykkelser:**
- Stål: Opptil 25mm (fiberlaser)
- Aluminium: Opptil 15mm
- Rustfritt: Opptil 20mm

**Sammenligning av metoder:**

| Egenskap | Brennskjæring | Plasma | Laser |
|----------|---------------|--------|-------|
| Materialtyper | Kun stål | Alle metaller | Alle + ikke-metaller |
| Maks tykkelse | >300mm | 50mm | 25-30mm |
| Snittbredde | 2-4mm | 1-3mm | 0,1-0,3mm |
| Presisjon | ±1mm | ±0,5mm | ±0,1mm |
| Investering | Lav | Middels | Høy |`,
    },
  ],
  exercises: [
    {
      id: 'tif-vg1-2-7-ex-1',
      type: 'classic',
      task: 'Forklar prinsippet bak brennskjæring og beskriv hvorfor metoden kun fungerer på stål.',
      solution: 'Brennskjæring fungerer ved at: 1) Stålet forvarmes til tenntemperatur (ca. 900°C), 2) Ren oksygen blåses på det varme stålet, 3) Jernet forbrenner (oksiderer) eksotermisk og smelter, 4) Det smeltede oksidet blåses vekk. Metoden fungerer kun på stål fordi: Jernoksidet (slagg) har lavere smeltepunkt enn stål og kan blåses vekk. For rustfritt stål danner kromoksid et beskyttende lag. For aluminium er aluminiumoksidets smeltepunkt høyere enn metallet selv.',
    },
    {
      id: 'tif-vg1-2-7-ex-2',
      type: 'multiple-choice',
      task: 'Hvilken termisk skjæremetode egner seg best for å skjære 10mm aluminiumsplate?',
      options: [
        { id: 'a', text: 'Plasmaskjæring', isCorrect: true },
        { id: 'b', text: 'Brennskjæring', isCorrect: false },
        { id: 'c', text: 'Autogenskjæring', isCorrect: false },
        { id: 'd', text: 'Sliping', isCorrect: false },
      ],
      solution: 'Plasmaskjæring er best for aluminium fordi brennskjæring ikke fungerer på aluminium (aluminiumoksid hindrer prosessen). Plasma kan skjære alle elektrisk ledende materialer inkludert aluminium, med høy hastighet og god kvalitet.',
    },
    {
      id: 'tif-vg1-2-7-ex-3',
      type: 'classic',
      task: 'Sammenlign brennskjæring og plasmaskjæring med hensyn til bruksområder, fordeler og begrensninger.',
      solution: 'BRENNSKJÆRING: Bruk: Ulegert/lavlegert stål, tykke materialer (6-300mm+). Fordeler: Billig utstyr, enkelt, store tykkelser. Begrensninger: Kun stål, tregt, bred snittfuge, varmepåvirkning. PLASMASKJÆRING: Bruk: Alle metaller, tynt til medium (opptil 50mm). Fordeler: Rask, alle metaller, smalere snitt, mindre varmepåvirkning. Begrensninger: Dyrere, begrenset tykkelse, snittvinkel, mer støy. Velg brennskjæring for tykt stål, plasma for rustfritt/aluminium eller når hastighet er viktig.',
    },
    {
      id: 'tif-vg1-2-7-ex-4',
      type: 'multiple-choice',
      task: 'Hva er den viktigste fordelen med laserskjæring sammenlignet med plasma?',
      options: [
        { id: 'a', text: 'Høyere presisjon og smalere snitt', isCorrect: true },
        { id: 'b', text: 'Kan skjære tykkere materialer', isCorrect: false },
        { id: 'c', text: 'Lavere investeringskostnad', isCorrect: false },
        { id: 'd', text: 'Fungerer på flere materialer', isCorrect: false },
      ],
      solution: 'Laserskjæring gir meget høy presisjon (±0,1mm mot ±0,5mm for plasma) og smalt snitt (0,1-0,3mm mot 1-3mm). Dette er ideelt for presisjonsarbeid og minimerer materialsvinn.',
    },
    // --- Samleoppgaver ---
    {
      id: 'tif-vg1-2-7-ex-5',
      type: 'classic',
      task: 'En bedrift skal velge skjæreutstyr for produksjon av maskindeler. Materialene er hovedsakelig 5-20mm stålplater og noe rustfritt. Begrunn din anbefaling.',
      solution: 'Anbefaling: CNC-plasmaskjærer med HD (High Definition) plasma. Begrunnelse: 1) Kan skjære både stål og rustfritt (brennskjæring fungerer ikke på rustfritt). 2) Tykkelsesområdet 5-20mm er ideelt for plasma. 3) God kvalitet på HD-plasma, nær laser for dette tykkelsesområdet. 4) Lavere investering enn laser. 5) Høy produktivitet med CNC-styring. 6) Fleksibilitet - kan enkelt endre til nye deler. Alternativ: Fiberlaser hvis presisjonskravene er svært høye eller serier er store nok til å forsvare investeringen.',
    },
    {
      id: 'tif-vg1-2-7-ex-6',
      type: 'classic',
      task: 'Du skal brennskjære en 25mm stålplate. Beskriv forberedelse, parametervalg og tegn på god skjærekvalitet.',
      solution: 'Forberedelse: 1) Rengjør overflaten for rust, maling og olje. 2) Merk skjærelinjen. 3) Velg munnstykke for 25mm (sjekk produsentens tabell). 4) Still inn skjæretrykk (oksygen ca. 4 bar). 5) Kontroller slanger og koblinger for lekkasjer. 6) Tenn og juster til nøytral flamme. Skjæring: 1) Forvarm startkanten til lys rødvarme. 2) Åpne skjæreoksygen når tenntemperatur er nådd. 3) Beveg jevnt 300-400mm/min. God kvalitet: Vertikale drag lines, ren underkant uten hengende slagg, smal varmepåvirket sone, rett snittflate uten vinkel.',
    },
  ],
  keyTerms: [
    { term: 'Brennskjæring', definition: 'Termisk skjæring ved oksidasjon av stål med ren oksygen.' },
    { term: 'Plasmaskjæring', definition: 'Skjæring med ionisert gass (plasma) ved 15000-30000°C.' },
    { term: 'Laserskjæring', definition: 'Presisjonsskjæring med fokusert laserstråle.' },
    { term: 'Drag lines', definition: 'Rillemønster på snittflaten ved termisk skjæring.' },
    { term: 'HD-plasma', definition: 'High Definition plasma - forbedret plasmateknologi med høyere kvalitet.' },
    { term: 'Fiberlaser', definition: 'Moderne lasertype med høy effektivitet for metallskjæring.' },
  ],
};

// ============================================================================
// Eksport av del 2 kapitler
// ============================================================================

export const TIF_VG1_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TIF_VG1_2_1,
  CHAPTER_TIF_VG1_2_2,
  CHAPTER_TIF_VG1_2_3,
  CHAPTER_TIF_VG1_2_4,
  CHAPTER_TIF_VG1_2_5,
  CHAPTER_TIF_VG1_2_6,
  CHAPTER_TIF_VG1_2_7,
];
