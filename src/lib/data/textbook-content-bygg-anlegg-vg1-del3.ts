/* eslint-disable */
// @ts-nocheck
/**
 * Bygg- og anleggsteknikk VG1 - Del 3 (Kapittel 21-25)
 * Dekker LK20 kompetansemål
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 21: Innvendig kledning og gipsarbeid
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_21: TextbookChapter = {
  id: 'bygg-anlegg-vg1-21',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '21',
  title: 'Innvendig kledning og gipsarbeid',
  description: 'Montering av gipsplater, innervegger og overflatebehandling.',
  estimatedMinutes: 65,
  competenceGoals: [
    'planlegge og bygge en konstruksjon',
    'velge og bruke materialer med hensyn til bærekraft',
  ],
  sections: [
    {
      title: 'Gipsplater og anvendelser',
      content: `## Gipsplater og anvendelser

Gipsplater er det vanligste materialet for innvendig kledning i moderne bygg.

**Hva er gipsplater?**
Gipsplater består av en gipskjerne mellom to lag papir eller fiberduk. Gips er et naturlig mineral som er brannhemmende og gir god lyddemping.

**Fordeler med gipsplater:**
- Rask montering
- Jevn, glatt overflate
- Brannhemmende egenskaper
- God lyddemping
- Miljøvennlig (kan resirkuleres)
- Rimelig pris

**Gipsplatetyper:**

**Standard gipsplater (grå)**
Normal plate for tørre rom. Vanligst i boliger.

**Våtromsgips (grønn)**
Fuktsikker plate for bad og våtrom. Impregnert kjerne.

**Branngips (rosa)**
Ekstra brannmotstand. Brukes i brannceller og rømningsveier.

**Støtfast gips**
Forsterket for slitesterke områder som trapper og korridorer.

**Lydgips**
Ekstra tyngde for bedre lyddemping mellom rom.

**Standarddimensjoner:**
- Tykkelse: 9,5 mm, 12,5 mm, 15 mm
- Bredde: 900 mm eller 1200 mm
- Lengde: 2400 mm, 2700 mm, 3000 mm

**Kanttutforming:**
- AK (avfaset kant) - for sparkelpuss
- FK (flat kant) - for synlige skjøter
- RK (rund kant) - for sprøytepuss`,
    },
    {
      title: 'Stålstendere og rammeverk',
      content: `## Stålstendere og rammeverk

Innervegger bygges ofte med stålstendere som er raske å montere.

**Stålstenderprofilder:**

**U-skinne (horisontal)**
Festes i gulv og tak. Stendere settes inn i denne.

**C-stender (vertikal)**
Stående profil som danner veggens rammeverk. Settes med 60 cm avstand (c/c).

**UA-profil**
Forsterket profil for døråpninger og store belastninger.

**Dimensjoner:**
- 45 mm bredde: Tynne skillevegger
- 70 mm: Standard skillevegg
- 95 mm: Vegger med ekstra isolasjon
- 120 mm: Tykke vegger, installasjonsvegger

**Montering av stålstenderverk:**

**1. Planlegging**
Tegn veggforløp. Marker på gulv og tak.

**2. Monter U-skinne i gulv**
Lim på lydstripe under. Skru fast med 60 cm avstand.

**3. Monter U-skinne i tak**
Bruk laser eller loddsnor for å få den rett over gulvskinnen.

**4. Sett inn C-stendere**
Tre stendere inn i U-skinnen. Maks 60 cm avstand. Stendere i ytterkant og ved døråpninger.

**5. Feste**
Stendere trenger ikke skrues fast - de holdes av platene. Ved dør: bruk UA-profil, skru fast.

**Lydstripe:**
Selvklebende stripe under U-skinnen som hindrer lydoverføring via gulv og tak.`,
    },
    {
      title: 'Montering av gipsplater',
      content: `## Montering av gipsplater

Riktig montering gir god overflate og lang holdbarhet.

**Verktøy:**
- Gipsskrutrekker (stopper ved riktig dybde)
- Gipssag eller kniv
- Rettholt og vinkelhake
- Kanthovel for avfasing

**Platekutting:**

**Med kniv:**
1. Mål og marker
2. Skjær gjennom papiret med kniv langs rettholt
3. Brekk platen bakover
4. Skjær gjennom papiret på baksiden

**Med sag:**
Gipssag eller stikksag for utsparinger og kurver.

**Skruing:**

**Skruavstand:**
- Langs kanter: 15-20 cm
- I felt: 25-30 cm
- Minimum 10 mm fra kant

**Skrudybde:**
Skruen skal gå litt under overflaten uten å bryte papiret. Bruk gipsskrutrekker med dybdestopp.

**Monteringsrekkefølge:**

**1. Start i hjørne**
Begynn fra et hjørne og jobb utover.

**2. Skru øverste plate først**
Start ovenfra ved montering på vegg.

**3. Forskyv skjøtene**
Plateskjøter skal ikke ligge i linje. Forskyv med minst 40 cm.

**4. Etterlat fuge i bunn**
5-10 mm fuge mot gulv for bevegelse.

**To lag gips:**
- Skru første lag
- Lim og skru andre lag med forskjøvne skjøter
- Bedre lyd og brannmotstand`,
    },
    {
      title: 'Sparkling og overflatebehandling',
      content: `## Sparkling og overflatebehandling

Etter montering må skjøter og skruehull sparkles for jevn overflate.

**Sparkelmasse:**
- Ferdigblandet sparkel (hendig, litt dyrere)
- Pulversparkel (blandes selv, rimeligere)
- Finnsparkel (sluttstrøk)
- Breddesparkel (store flater)

**Fugebånd:**
Papir- eller fiberbånd som legges i skjøter for å hindre sprekkdannelse.

**Sparkling trinn for trinn:**

**Steg 1: Grunnsparkling av skjøter**
- Legg sparkel i skjøten
- Press fugebånd ned i sparkelen
- Stryk over med tynt lag sparkel
- Tørketid: 12-24 timer

**Steg 2: Andre strøk**
- Bred ut sparkelen ca. 15-20 cm
- Jevn overflate
- La tørke

**Steg 3: Tredje strøk (finnsparkling)**
- Bred ut til ca. 25-30 cm
- Veldig tynt lag
- Skal være helt jevn med platen

**Steg 4: Sliping**
- Slip forsiktig med fint papir (120-150 korn)
- Fjern støv med klut
- Kontroller i sidelys

**Skruehull:**
- Fyll med sparkel
- Ett eller to strøk
- Slip jevnt

**Hjørner:**
- Innvendige: Bruk hjørnesparkel og fugebånd
- Utvendige: Bruk hjørneprofil av plast eller metall

**Overflatebehandling:**
- Maling direkte på sparklet gips
- Veggpapir/tapet
- Fliser (på egnet underlag)`,
    },
    {
      title: 'Eksempel: Bygge en skillevegg',
      content: `## Eksempel: Bygge en skillevegg

**Oppgave:**
Bygge en 4 meter lang skillevegg med dør, standard høyde 2,4 m.

**Materialer:**
- Stålstendere 70 mm (C-profil og U-skinne)
- UA-profil til døråpning
- Gipsplater 12,5 mm (dobbelt lag)
- Mineralull 70 mm
- Sparkelmasse og fugebånd

**Gjennomføring:**

**Dag 1: Rammeverk**

1. Marker veggforløp på gulv med kritt/laser
2. Marker døråpning (standard 90 cm + 10 cm for karm)
3. Lim lydstripe under U-skinne
4. Skru U-skinne i gulv (ikke i døråpning)
5. Monter U-skinne i tak rett over
6. Sett inn C-stendere med 60 cm avstand
7. Monter UA-profiler i døråpning
8. Skru fast UA-profiler i gulv- og takskinne
9. Monter horisontal bjelke over dør

**Dag 2: Kledning side 1**

1. Start med første lag gips fra et hjørne
2. Skru med 25 cm avstand
3. Forskyv skjøter mellom platene
4. Kapp ut for døråpning

**Dag 3: Isolasjon og kledning side 2**

1. Trekk eventuelle kabler
2. Legg mineralull mellom stendere
3. Monter gips på andre siden
4. Lag 2 gips med forskjøvne skjøter begge sider

**Dag 4-5: Sparkling**

1. Grunnsparkling med fugebånd
2. Tørking
3. Andre og tredje strøk
4. Sliping
5. Ferdig for maling`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-21-ex-1',
      task: 'Nevn tre ulike typer gipsplater og forklar hvor hver type brukes.',
      solution: '1) Standard gipsplater (grå) - brukes i tørre rom som stue og soverom. 2) Våtromsgips (grønn) - impregnert for bad og våtrom med høy fuktighet. 3) Branngips (rosa) - ekstra brannmotstand, brukes i brannceller, trapperom og rømningsveier.',
    },
    {
      id: 'bygg-anlegg-vg1-21-ex-2',
      task: 'Hva er en UA-profil, og når brukes den?',
      solution: 'UA-profil er en forsterket stålstender som er tykkere og sterkere enn vanlig C-stender. Den brukes ved døråpninger der karmen skal festes, og ved andre steder med store belastninger eller der det skal monteres tunge ting på veggen.',
    },
    {
      id: 'bygg-anlegg-vg1-21-ex-3',
      task: 'Hvor tett skal gipsskruene plasseres langs kanten av platen og inne i feltet?',
      solution: 'Langs kantene skal skruene plasseres med 15-20 cm avstand, og inne i feltet (midt på platen mot stender) med 25-30 cm avstand. Skruene skal være minimum 10 mm fra platekanten.',
    },
    {
      id: 'bygg-anlegg-vg1-21-ex-4',
      task: 'Forklar hvorfor plateskjøtene skal forskyves og ikke ligge i linje.',
      solution: 'Plateskjøter skal forskyves med minst 40 cm for å hindre lange, sammenhengende svake linjer i veggen. Hvis alle skjøter ligger i linje, øker risikoen for sprekker og bevegelse, og veggen blir svakere. Forskyvning gir en sterkere, mer stabil konstruksjon.',
    },
    {
      id: 'bygg-anlegg-vg1-21-ex-5',
      task: 'Beskriv de tre hovedstrøkene ved sparkling av gipsskjøter.',
      solution: '1) Grunnsparkling - sparkel i skjøten, fugebånd presses ned, tynt overlag. 2) Andre strøk - bredere ut til 15-20 cm, fyller ujevnheter, jevn overflate. 3) Tredje strøk (finnsparkling) - bredest ut til 25-30 cm, veldig tynt lag som gjør overgangen usynlig.',
    },
    // --- Samleoppgaver ---
    {
      id: 'bygg-anlegg-vg1-21-ex-6',
      task: 'Du skal bygge en 6 meter lang skillevegg med stålstendere på 60 cm avstand (c/c). Beregn hvor mange stendere du trenger, og lag en liste over nødvendige materialer for enkel gipskledning på begge sider.',
      solution: 'Antall stendere: 6 m / 0,6 m + 1 = 11 stendere. Materialer: 11 stk C-stendere 70mm, 2 stk U-skinne (gulv og tak) à 3m = 4 lengder, lydstripe 6m, gipsplater 12,5mm ca. 12-14 plater (6m × 2,4m × 2 sider = 28,8 m², plater er 2,88 m²), mineralull 70mm ca. 15 m², gipsskruer ca. 400 stk, sparkelmasse ca. 2-3 bøtter, fugebånd ca. 15m, hjørneprofiler.',
    },
    {
      id: 'bygg-anlegg-vg1-21-ex-7',
      task: 'En vegg med gipsplater skal ha brannmotstand EI30. Beskriv hvordan du ville bygget denne veggen, inkludert valg av materialer og spesielle hensyn.',
      solution: 'For EI30-vegg: Bruk branngips (rosa) i minst ett lag på hver side, gjerne dobbelt lag 12,5mm. Stålstendere 70mm med mineralull som ikke er brennbar. Alle gjennomføringer (kabler, rør) må branntettes med godkjent masse. Skjøter sparkles fullstendig. Ingen hull eller åpninger. Eventuell dør må være EI30-klassifisert branndør. Veggen må gå fra gulv til himling over. Dokumenter at veggoppbygningen er testet og godkjent for EI30.',
    },
  ],
  keyTerms: [
    { term: 'Gipsplate', definition: 'Bygningsplate med gipskjerne mellom papirlag, for innvendig kledning.' },
    { term: 'C-stender', definition: 'Vertikal stålprofil som danner rammeverket i lettvegger.' },
    { term: 'U-skinne', definition: 'Horisontal stålprofil i gulv og tak der stendere settes inn.' },
    { term: 'Fugebånd', definition: 'Papir- eller fiberbånd som legges i plateskjøter for å hindre sprekker.' },
    { term: 'Lydstripe', definition: 'Selvklebende stripe under U-skinne som demper lydoverføring.' },
    { term: 'Sparkling', definition: 'Fylling og utjevning av skjøter og skruehull med sparkelmasse.' },
  ],
};

// ============================================================================
// Kapittel 22: Gulvlegging
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_22: TextbookChapter = {
  id: 'bygg-anlegg-vg1-22',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '22',
  title: 'Gulvlegging',
  description: 'Undergulv, gulvbelegg og ulike gulvtyper.',
  estimatedMinutes: 60,
  competenceGoals: [
    'planlegge og bygge en konstruksjon',
    'velge og bruke materialer med hensyn til bærekraft',
  ],
  sections: [
    {
      title: 'Undergulv og avretting',
      content: `## Undergulv og avretting

Et godt undergulv er grunnlaget for all gulvlegging.

**Typer undergulv:**

**Betong**
Vanligst i kjeller, garasje og næringbygg. Må tørke tilstrekkelig før belegg legges.

**Trebasert undergulv**
Sponplater, OSB eller kryssfiner på bjelkelag. Vanlig i boliger.

**Tørr avretting**
Lettklinker eller EPS med plater oppå. Brukes ved etterisolering.

**Krav til undergulv:**
- Jevnhet: maks 2-3 mm avvik per 2 meter
- Tørr: fuktinnhold under grenseverdier
- Rent: fritt for støv, fett og løse partikler
- Fast: ingen bevegelse eller svikt

**Avrettingsmasse:**
Når undergulvet ikke er jevnt nok, brukes avrettingsmasse.

**Typer:**
- Sementbasert (vanligst)
- Gipsbasert (raskere tørking)
- Fiberarmert (ekstra styrke)

**Utførelse:**
1. Rengjør og støvsug undergulvet
2. Påfør primer der det trengs
3. Bland avrettingsmassen etter anvisning
4. Hell ut og fordel med avrettingsrakel
5. Massen flyter utover og jevnes selv
6. La tørke (følg produsentens anvisning)

**Fuktmåling:**
Før gulvbelegg legges, må fuktinnholdet sjekkes:
- Betong: maks 85-90% RF (relativ fuktighet)
- Tre: maks 10-12% fuktinnhold
Bruk fuktighetsmåler og dokumenter målingen.`,
    },
    {
      title: 'Parkett og laminat',
      content: `## Parkett og laminat

Parkett og laminat er populære gulvtyper som gir varmt og naturlig utseende.

**Parkett:**
Ekte tregulv med slitelag av edle tresorter.

**Typer parkett:**
- Massiv parkett: Heltre, kan slipes mange ganger
- Flerskikts parkett: Tynn topplag, krysslimte lag under
- Mosaikparkett: Små trefelt i mønster

**Fordeler:** Ekte tre, varmt, kan slipes, lang levetid
**Ulemper:** Dyrere, følsom for fukt, krever vedlikehold

**Laminat:**
Sammenpresset plate med fotoprintlag som etterligner tre.

**Oppbygning:**
- Dekorlag (bilde av tre)
- Bærende kjerne av HDF
- Motreaksjonssjikt under

**Fordeler:** Rimelig, slitesterkt, lett å legge
**Ulemper:** Kan ikke slipes, føles "kaldere", mindre autentisk

**Legging av flytende gulv:**

**1. Forberedelse**
- Sjekk undergulvets jevnhet og fukt
- Legg ut underlag (skum eller kork)
- Start planleggingen fra lengste, retteste vegg

**2. Legging**
- Første rad legges med not mot vegg
- Hold 8-10 mm ekspansjonsfuge til vegg
- Klikk bordene sammen på langside først
- Forskyv skjøtene minst 30 cm mellom rader

**3. Kapping**
- Siste bord i raden kappes til riktig lengde
- Avkappet starter neste rad
- Bruk dramboss for å slå bordene tett

**4. Avslutning**
- Monter fotlister som skjuler ekspansjonsfugen
- Ved overganger: bruk overgangsprofiler`,
    },
    {
      title: 'Vinylgulv og linoleum',
      content: `## Vinylgulv og linoleum

Myke gulvbelegg som er vanntette og lette å vedlikeholde.

**Vinyl:**
Syntetisk materiale (PVC) med trykt mønster.

**Typer:**
- Vinylbane: Ruller, limes ned
- Klikk-vinyl: Fliser eller planker med klikksystem
- Selvklebende vinyl: DIY-løsning

**Fordeler:** Vanntett, rimelig, mange design, mykt å gå på
**Ulemper:** Ikke naturlig materiale, kan avgi gasser

**Linoleum:**
Naturlig materiale av linolje, treharpiks, kork og jute.

**Fordeler:** Naturlig, antibakterielt, holdbart, miljøvennlig
**Ulemper:** Dyrere, krever god liming, følsom for fukt i bunnen

**Legging av vinyl-/linoleumsbaner:**

**1. Akklimatisering**
Rull ut og la ligge i rommet 24 timer.

**2. Tilpasning**
- Legg banen med overskudd mot vegger
- Marker og skjær til med kniv
- Bruk profil for nøyaktige kutt mot vegg

**3. Liming**
- Brett halve banen tilbake
- Påfør lim på undergulvet
- Legg banen ned og press ut luft
- Gjenta på andre halvdel
- Bruk tung vals for god kontakt

**4. Skjøter**
- Legg baner med overlapp
- Skjær gjennom begge lag
- Fjern avskjær, lim og press sammen
- Eventuelt sveis skjøtene med varmluft

**5. Sokkel**
- Hulkil eller fotlist i overgang til vegg`,
    },
    {
      title: 'Flislegging',
      content: `## Flislegging

Fliser brukes på gulv i våtrom, gang, kjøkken og utendørs.

**Flistyper:**

**Keramiske fliser**
Brent leire. Glaserte eller ubehandlede. Vanligst innendørs.

**Porselenfliser**
Tettere og sterkere enn keramisk. Tåler frost, brukes utendørs.

**Naturstein**
Granitt, marmor, skifer. Eksklusivt, krever impregnering.

**Mosaikk**
Små fliser på nett. Følger kurver og ujevnheter.

**Underlag for fliser:**
- Betong (vanligst)
- Avrettingsmasse
- Våtromsplater (Litex, Wedi)
- Fiberarmert sementplate

**Verktøy:**
- Fliseskjærer
- Tannspackel
- Fugegummi
- Kryssavstandere
- Vater og snor

**Legging av gulvfliser:**

**1. Planlegging**
- Finn midtpunkt i rommet
- Beregn flisfordeling for å unngå smale biter langs veggene
- Sjekk fall mot sluk i våtrom

**2. Limlegging**
- Bland flislim etter anvisning
- Påfør med tannspackel i striper
- Legg flisen med vridebevegelse
- Sett inn kryssavstandere
- Kontroller plan og retthet kontinuerlig

**3. Kutting**
- Rett kutt med fliseskjærer
- Kurver med flisekneipe eller vinkelsliper

**4. Fuging**
- Vent til limet har herdet (24-48 timer)
- Fjern avstandere
- Påfør fugemasse med fugegummi på skrå
- Vask av overskudd med svamp
- Etterrengjør etter tørking`,
    },
    {
      title: 'Eksempel: Legging av laminatgulv',
      content: `## Eksempel: Legging av laminatgulv

**Oppgave:**
Legge laminatgulv i en stue på 4 × 5 meter.

**Materialer:**
- Laminat ca. 22 m² (med 10% påslag)
- Underlag ca. 22 m²
- Fotlister ca. 18 løpemeter
- Ekspansjonskiler
- Dramboss og slagekloss

**Forberedelse:**

**Dag før:**
- La laminatpakkene akklimatiseres i rommet
- Sjekk undergulvets jevnhet og fukt
- Rengjør grundig

**Dag 1: Legging**

**Steg 1: Underlag**
- Rull ut underlag over hele gulvet
- Tape skjøtene med teip
- Ikke overlapp, kant mot kant

**Steg 2: Planlegging**
- Mål rommet
- Beregn bordbredden ved siste rad (bør være min. 5 cm)
- Eventuelt kapp første rad smalere for å få bredere avslutning

**Steg 3: Første rad**
- Legg første bord i hjørnet med not mot vegg
- Sett ekspansjonskiler (10 mm)
- Klikk sammen bordene på kortsiden
- Kapp siste bord til riktig lengde

**Steg 4: Videre rader**
- Start med avkappet fra forrige rad
- Forskyv skjøter minst 30 cm
- Klikk først langside, så kortside
- Bruk slagekloss og dramboss

**Steg 5: Siste rad**
- Mål bredden som trengs
- Kapp bordene i lengderetning
- Bruk brekkjern for å få plass

**Steg 6: Avslutning**
- Fjern ekspansjonskiler
- Monter fotlister
- Overgangslister mot andre rom`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-22-ex-1',
      task: 'Hva er kravene til et undergulv før gulvbelegg kan legges?',
      solution: 'Et undergulv må være: 1) Jevnt - maks 2-3 mm avvik per 2 meter. 2) Tørt - fuktinnhold under grenseverdier (betong maks 85-90% RF, tre maks 10-12%). 3) Rent - fritt for støv, fett og løse partikler. 4) Fast - ingen bevegelse eller svikt i underlaget.',
    },
    {
      id: 'bygg-anlegg-vg1-22-ex-2',
      task: 'Forklar forskjellen på parkett og laminat.',
      solution: 'Parkett er ekte tregulv med slitelag av edle tresorter, kan slipes og oljes på nytt, gir autentisk trefølelse og lang levetid. Laminat har en kjerne av sammenpresset fiberplate med et fotoprintlag som etterligner tre, kan ikke slipes, er rimeligere og slitesterk, men føles mindre autentisk.',
    },
    {
      id: 'bygg-anlegg-vg1-22-ex-3',
      task: 'Hvorfor må det være ekspansjonsfuge mellom laminatgulv og vegg?',
      solution: 'Laminat og parkett utvider og trekker seg sammen med endringer i temperatur og fuktighet. Ekspansjonsfugen (8-10 mm) gir plass til denne bevegelsen. Uten fuge vil gulvet presse mot veggen og kan bulke opp, få buer eller sprekke.',
    },
    {
      id: 'bygg-anlegg-vg1-22-ex-4',
      task: 'Beskriv trinnene ved liming av vinylbane på gulv.',
      solution: '1) Akklimatiser banen i rommet 24 timer. 2) Legg banen med overskudd, marker og skjær til. 3) Brett halve banen tilbake, påfør lim på underlaget. 4) Legg banen ned og press ut luft med hånd eller rakel. 5) Gjenta på andre halvdel. 6) Vals med tung vals for god limkontakt. 7) Behandle skjøter med overlappskjæring.',
    },
    {
      id: 'bygg-anlegg-vg1-22-ex-5',
      task: 'Hva er forskjellen på keramiske fliser og porselenfliser?',
      solution: 'Keramiske fliser er laget av brent leire og er mest brukt innendørs, finnes glaserte eller ubehandlede. Porselenfliser er tettere og sterkere, brent ved høyere temperatur, absorberer mindre vann og tåler derfor frost - kan brukes utendørs.',
    },
    // --- Samleoppgaver ---
    {
      id: 'bygg-anlegg-vg1-22-ex-6',
      task: 'Et rom på 3,5 × 4 meter skal ha nytt laminatgulv. Beregn hvor mange kvadratmeter laminat som trengs (med 10% påslag), og lag en komplett materialliste for jobben.',
      solution: 'Areal = 3,5 × 4 = 14 m². Med 10% påslag: 14 × 1,1 = 15,4 m² laminat. Materialliste: Laminat 15,4 m² (3-4 pakker avhengig av pakkestørrelse), underlag 15 m², fotlister 15 løpemeter (rommet er 15 m i omkrets), teip for underlag, ekspansjonskiler 20-30 stk, overgangslister for dør(er), eventuelt terskel.',
    },
    {
      id: 'bygg-anlegg-vg1-22-ex-7',
      task: 'Du skal legge fliser på et badegulv på 6 m². Gulvet har fall mot sluk. Beskriv hele prosessen fra forberedelse til ferdig gulv, inkludert spesielle hensyn for våtrom.',
      solution: 'FORBEREDELSE: Sjekk at fall mot sluk er korrekt (min 1:50). Underlaget må være godkjent våtromsunderlag eller membranbehandlet. Sjekk at membran er intakt. PLANLEGGING: Beregn flisfordeling, helst hele fliser rundt sluk. LEGGING: Bland flislim til våtrom (flexlim). Start ved sluk eller vegg avhengig av fall. Bruk tannspackel, kammehøyde tilpasset flisestørrelse. Legg flisene med riktig fall, kontroller med vater. Kryssavstandere for jevne fuger. FUGING: Vent 24-48 timer. Bruk fugemasse for våtrom (sementbasert, eventuelt med tettende tilsetning). AVSLUTNING: Fuge mot sluk og vegger med våtromsilikon. Dokumenter arbeidet.',
    },
  ],
  keyTerms: [
    { term: 'Avrettingsmasse', definition: 'Selvutjevnende masse for å jevne ut ujevne undergulv.' },
    { term: 'Flytende gulv', definition: 'Gulv som ikke limes fast, men ligger løst på underlag.' },
    { term: 'Ekspansjonsfuge', definition: 'Mellomrom mellom gulv og vegg som gir plass til bevegelse.' },
    { term: 'RF (relativ fuktighet)', definition: 'Mål på fuktinnhold i betong, angis i prosent.' },
    { term: 'Kryssavstandere', definition: 'Plastbiter som holder lik avstand mellom fliser.' },
    { term: 'Tannspackel', definition: 'Spackel med tagger for å legge flislim i jevne striper.' },
  ],
};

// ============================================================================
// Kapittel 23: Våtrom og membranarbeid
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_23: TextbookChapter = {
  id: 'bygg-anlegg-vg1-23',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '23',
  title: 'Våtrom og membranarbeid',
  description: 'Krav til våtrom, membranlegging og tettesjikt.',
  estimatedMinutes: 70,
  competenceGoals: [
    'planlegge og bygge en konstruksjon',
    'forstå og arbeide etter tegninger og beskrivelser',
  ],
  sections: [
    {
      title: 'Krav til våtrom',
      content: `## Krav til våtrom

Våtrom er rom med gulvsluk og/eller badekar/dusj der det forventes regelmessig vannsøl.

**Hvorfor strenge krav?**
Fuktskader på bad er blant de vanligste og dyreste byggskadene i Norge. Vann som trenger inn i konstruksjonen gir:
- Råteskader i tre
- Muggsopp og helseproblemer
- Korrosjon i armering
- Store reparasjonskostnader

**Våtromsnormen:**
Bransjens våtromsnorm (BBF) setter standarder for våtrom. Arbeidet bør utføres av godkjente våtromsbedrifter.

**Soner i våtrom:**

**Sone 0 (våtsone)**
Områder med direkte vannpåkjenning:
- Inne i dusj/badekar
- Gulv med sluk
- Krav: Fullstendig vanntett membran

**Sone 1 (fuktsone)**
Områder som kan få vannsprut:
- Vegg rundt dusj/badekar til 1,2 m høyde
- Gulv inntil 50 cm fra dusjsone
- Krav: Vanntett membran

**Sone 2 (fuktbelastet)**
Resten av våtrommet:
- Vegger og tak over 1,2 m høyde
- Krav: Fuktbestandige materialer

**Dokumentasjonskrav:**
- Sertifikat fra våtromsbedrift
- Foto av membranarbeidet
- Kontrollskjema for hvert trinn
- Oppbevares i FDV-dokumentasjon`,
    },
    {
      title: 'Membrantyper og materialer',
      content: `## Membrantyper og materialer

Membran er det vanntette sjiktet som beskytter konstruksjonen.

**Smøremembraner:**
Flytende produkt som påføres med kost eller rull.

**Typer:**
- Polymerbasert (vanligst)
- Sementbasert med polymer
- Epoksybasert (industri)

**Fordeler:** Følger alle former, enkelt over hjørner, billigere
**Ulemper:** Krever jevnt underlag, flere strøk, tørketid

**Folemembraner:**
Prefabrikkert duk som limes ned.

**Typer:**
- PVC-duk
- Polyolefinbasert
- Butylgummi

**Fordeler:** Jevn tykkelse, raskere å legge
**Ulemper:** Vanskelig i hjørner, krever skjøtsvising

**Platemembraner:**
Ferdige plater med vanntett overflate.

**Typer:**
- XPS med membran (Wedi, Litex)
- Sementbaserte plater med membran
- Kombinert isolasjon og membran

**Fordeler:** Raskt, gir isolasjon, jevnt underlag for flis
**Ulemper:** Dyrere, krever nøyaktig montering

**Valg av membran:**
- Gulv: Smøremembran vanligst
- Vegger: Smøremembran eller plater
- Rundt sluk/rør: Mansjetter og forsterkningsprodukter`,
    },
    {
      title: 'Legging av smøremembran',
      content: `## Legging av smøremembran

Smøremembran er den vanligste metoden for membranarbeid.

**Underlag:**
- Rent, tørt, støvfritt
- Jevnt (maks 2 mm avvik per meter)
- Primet om nødvendig

**Verktøy:**
- Kost eller rull
- Smalt pensel for detaljer
- Målestav for tykkelseskontroll
- Armeringsduk

**Fremgangsmåte:**

**Steg 1: Forberedelse**
- Rengjør grundig
- Fjern løst materiale
- Primer underlaget etter produsentens anvisning

**Steg 2: Detaljer først**
- Monter slukmansjett
- Sett rørmansjetter
- Forsegl alle gjennomføringer

**Steg 3: Hjørner og overganger**
- Påfør membran i hjørner først
- Legg inn armeringsremse i alle hjørner
- Vegg-gulv, vegg-vegg, rundt sluk

**Steg 4: Flater**
- Påfør første strøk med kost/rull
- Jobb i én retning
- La tørke helt (følg produsentens tid)

**Steg 5: Andre strøk**
- Påfør på tvers av første strøk
- Kontroller at tykkelsen er riktig (min. 0,8-1 mm våtfilmtykkelse)

**Steg 6: Kontroll**
- Visuell sjekk: Ingen hull, tynne områder, bobler
- Dokumenter med foto
- Fyll ut kontrollskjema

**Tørketid:**
- Mellom strøk: 4-12 timer (avhengig av produkt og temperatur)
- Før flislegging: 24-48 timer`,
    },
    {
      title: 'Sluk og gjennomføringer',
      content: `## Sluk og gjennomføringer

Sluk og rørgjennomføringer er kritiske punkter der det ofte oppstår lekkasjer.

**Sluktyper for våtrom:**

**Bunnsluk**
Tradisjonelt sluk montert i gulvet. Membran festes til slukekrage.

**Veggsluk**
Sluk montert i vegg, avløp går i konstruksjonen. Renere design.

**Rennesluk**
Langsgående sluk langs vegg eller dusj. Populært i moderne bad.

**Montering av sluk:**

**1. Plassering**
- Laveste punkt i gulvet
- Minimum 50 cm fra vegg
- Slukekrage i riktig høyde

**2. Fall**
- Minimum fall 1:50 (2 cm per meter)
- Jevnt fall i alle retninger mot sluk
- Sjekk med vater og vann

**3. Membrantilslutning**
- Slukmansjett limes til gulvmembran
- Klemmering sikrer forbindelsen
- Ingen hull eller gliper

**Rørgjennomføringer:**

**Prinsipp:**
Alle rør gjennom membran må ha godkjent mansjett.

**Utførelse:**
1. Monter røret i riktig posisjon
2. Sett rørmansjett (prefabrikkert gummimansjett)
3. Lim mansjetten til membranen
4. Tett med membranmasse i overgang

**Skruer og festepunkter:**
- Unngå gjennomhulling av membran
- Bruk monteringsbeslag over membran
- Tett alle nødvendige hull med membranmasse`,
    },
    {
      title: 'Eksempel: Membranarbeid på bad',
      content: `## Eksempel: Membranarbeid på bad

**Oppgave:**
Legge membran på et bad 2 × 3 meter med dusj i hjørne.

**Soner:**
- Dusjhjørne (1 × 1 m gulv, vegger til tak): Sone 0/1
- Resten av gulv: Sone 0
- Vegger til 1,2 m høyde: Sone 1
- Vegger over 1,2 m og tak: Sone 2

**Materiale:**
- Smøremembran (2-komponent)
- Primer
- Armeringsremser for hjørner
- Slukmansjett
- Rørmansjetter

**Dag 1: Forberedelse og detaljer**

**Morgen:**
- Rengjør alle flater grundig
- Støvsug og tørk av
- Primer gulv og vegger til 1,5 m høyde

**Ettermiddag:**
- Monter slukmansjett med klemring
- Sett mansjetter på rør (vann, avløp)
- Påfør membran i alle hjørner med armeringsremse
- La tørke over natten

**Dag 2: Gulvmembran**

**Morgen:**
- Første strøk på gulv
- Jobb fra innerste hjørne mot dør
- Opp på vegg 10-15 cm

**Ettermiddag (etter tørking):**
- Andre strøk på tvers
- Kontroller tykkelse og dekning
- Ta foto

**Dag 3: Veggmembran**

- Første og andre strøk på vegger i dusjsone
- Full høyde i dusj
- 1,2 m høyde på øvrige vegger
- Dokumenter ferdig arbeid

**Dag 4: Kontroll og dokumentasjon**

- Visuell inspeksjon
- Vanntest om ønskelig
- Fyll ut kontrollskjema
- Foto av ferdig membranarbeid
- Klart for flislegging`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-23-ex-1',
      task: 'Forklar de tre sonene i et våtrom og hvilke krav som gjelder for hver sone.',
      solution: 'Sone 0 (våtsone): Områder med direkte vannpåkjenning som inne i dusj og gulv med sluk. Krav: Fullstendig vanntett membran. Sone 1 (fuktsone): Områder med vannsprut, vegg rundt dusj til 1,2 m høyde og gulv nær dusjsone. Krav: Vanntett membran. Sone 2 (fuktbelastet): Resten av våtrommet. Krav: Fuktbestandige materialer.',
    },
    {
      id: 'bygg-anlegg-vg1-23-ex-2',
      task: 'Nevn tre typer membraner og forklar kort forskjellen mellom dem.',
      solution: '1) Smøremembran - flytende produkt som påføres med kost/rull, følger alle former lett, vanligst brukt. 2) Foliemembran - prefabrikkert duk som limes ned, gir jevn tykkelse men vanskelig i hjørner. 3) Platemembraner - ferdige plater med vanntett overflate, gir isolasjon og jevnt underlag men er dyrere.',
    },
    {
      id: 'bygg-anlegg-vg1-23-ex-3',
      task: 'Hvorfor må det legges armeringsremse i hjørner når man legger smøremembran?',
      solution: 'Armeringsremse forsterker membranen i hjørner fordi dette er områder med bevegelse og spenninger mellom gulv og vegg. Uten armering kan membranen sprekke i hjørnene over tid. Armeringen holder membranen sammen og fordeler bevegelsene over et større område.',
    },
    {
      id: 'bygg-anlegg-vg1-23-ex-4',
      task: 'Hva er minimum fall til sluk på et badegulv, og hvorfor er riktig fall viktig?',
      solution: 'Minimum fall er 1:50 (2 cm per meter). Riktig fall er viktig for at vannet skal renne mot sluk og ikke bli stående på gulvet. Stillestående vann kan trenge inn i fuger og skade konstruksjonen over tid, og det gir også dårlig hygiene og glatt gulv.',
    },
    {
      id: 'bygg-anlegg-vg1-23-ex-5',
      task: 'Hvordan skal rørgjennomføringer i membran utføres for å være vanntette?',
      solution: 'Alle rør gjennom membran må ha godkjent mansjett. Utførelse: 1) Monter røret i riktig posisjon. 2) Sett prefabrikkert rørmansjett rundt røret. 3) Lim mansjettens kant til gulv-/veggmembranen. 4) Tett overgangen med membranmasse. Mansjetten sikrer vanntett overgang mellom rør og membran.',
    },
    // --- Samleoppgaver ---
    {
      id: 'bygg-anlegg-vg1-23-ex-6',
      task: 'Du skal planlegge membranarbeid på et bad med mål 2,5 × 2 meter. Dusjnisje er i ene hjørnet (1 × 1 m). Beregn arealet som trenger membran på gulv og på vegger (til 1,2 m høyde utenom i dusj der det går til tak 2,4 m).',
      solution: 'GULV: Hele gulvet trenger membran = 2,5 × 2 = 5 m². VEGGER: Omkrets = 2×(2,5 + 2) = 9 m. Veggene til 1,2 m = 9 × 1,2 = 10,8 m². I dusjnisje tillegg fra 1,2 til 2,4 m: 2 vegger × 1 m × 1,2 m = 2,4 m². Total vegg: 10,8 + 2,4 = 13,2 m². TOTALT membran: ca. 5 + 13,2 = 18,2 m². Med påslag for armeringsremser og overlapp: ca. 20-22 m² membran.',
    },
    {
      id: 'bygg-anlegg-vg1-23-ex-7',
      task: 'Lag en komplett sjekkliste for kvalitetskontroll av membranarbeid på et våtrom, inkludert dokumentasjonskrav.',
      solution: 'SJEKKLISTE: FØR MEMBRAN: Underlag jevnt (maks 2mm/m), tørt, rent. Primer påført. DETALJER: Slukmansjett montert med klemring. Rørmansjetter på alle gjennomføringer. HJØRNER: Armeringsremse i alle hjørner gulv/vegg og vegg/vegg. MEMBRAN: Første strøk jevnt påført. Tørketid overholdt. Andre strøk på tvers. Riktig tykkelse (min 0,8-1 mm). Ingen hull, bobler eller tynne områder. Dekning i alle soner korrekt. DOKUMENTASJON: Foto av slukmontering, hjørnearmering, ferdig gulv, ferdig vegg. Kontrollskjema utfylt med dato og signatur. Produktdatablad arkivert. Leveres til FDV-dokumentasjon.',
    },
  ],
  keyTerms: [
    { term: 'Våtrom', definition: 'Rom med gulvsluk/dusj der det forventes regelmessig vannsøl.' },
    { term: 'Membran', definition: 'Vanntett sjikt som beskytter konstruksjonen mot fukt.' },
    { term: 'Våtsone (sone 0)', definition: 'Område med direkte vannpåkjenning som krever full membran.' },
    { term: 'Slukmansjett', definition: 'Prefabrikkert tetteprodukt for overgang mellom membran og sluk.' },
    { term: 'Armeringsremse', definition: 'Forsterkning i membran over hjørner og overganger.' },
    { term: 'Våtromsnormen', definition: 'Bransjens standard (BBF) for utførelse av våtrom.' },
  ],
};

// ============================================================================
// Kapittel 24: Brannsikring
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_24: TextbookChapter = {
  id: 'bygg-anlegg-vg1-24',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '24',
  title: 'Brannsikring',
  description: 'Brannklasser, brannceller og branntetting i bygninger.',
  estimatedMinutes: 65,
  competenceGoals: [
    'planlegge og bygge en konstruksjon',
    'beskrive hvilke krav og forventninger samfunnet stiller til en profesjonell yrkesutøver',
  ],
  sections: [
    {
      title: 'Brannkrav i bygninger',
      content: `## Brannkrav i bygninger

Brannsikkerhet er et av de viktigste områdene i byggeregelverket. Formålet er å beskytte menneskers liv og helse.

**Hvorfor brannkrav?**
- Gi tid til rømning
- Hindre brannspredning mellom bygninger
- Beskytte bærende konstruksjoner
- Gjøre det trygt for brannvesenet

**Risikoklasser:**
Bygninger deles inn etter hvor stor brannrisiko de har.

**Risikoklasse 1:** Lav risiko (garasjer, lager)
**Risikoklasse 2:** Boligbygninger
**Risikoklasse 3:** Arbeidsplasser, butikker
**Risikoklasse 4:** Forsamlingslokaler
**Risikoklasse 5:** Sykehus, pleieinstitusjoner
**Risikoklasse 6:** Overnattingssteder

**Brannklasser for materialer:**

**A1:** Ubrennbart (betong, stål, gips)
**A2:** Nesten ubrennbart (gips med papir)
**B:** Svært begrenset brennbarhet
**C:** Begrenset brennbarhet
**D:** Akseptabel brennbarhet (behandlet tre)
**E:** Akseptabel ytelse (ubehandlet tre)
**F:** Ikke testet/ikke godkjent

**Motstandsklasser:**
Angir hvor lenge en konstruksjon motstår brann.

**R:** Bæreevne (Resistance)
**E:** Integritet (hindrer flammer/røyk)
**I:** Isolasjon (hindrer varmegjennomgang)

Eksempel: REI60 = Bæreevne, integritet og isolasjon i 60 minutter`,
    },
    {
      title: 'Brannceller og seksjonering',
      content: `## Brannceller og seksjonering

En branncelle er et avgrenset område der brann ikke skal spre seg til nabocellene innenfor en viss tid.

**Hva er en branncelle?**
Et område som er omgitt av branncellebegrensende vegger, gulv og himling som hindrer brannspredning.

**Typiske brannceller:**
- Hver leilighet i boligblokk
- Trapperom/rømningsvei
- Tekniske rom
- Garasje adskilt fra bolig
- Heissjakt

**Krav til branncellebegrensende konstruksjon:**

**Boligblokk:**
Mellom leiligheter: EI60 (60 min brannmotstand)
Mot trapperom: EI60 med dør EI30

**Rekkehus:**
Mellom boenheter: REI60 fra fundament til tak

**Småhus:**
Mot garasje: EI30

**Seksjonering:**
Store bygninger deles inn i brannseksjoner - større områder enn brannceller. Brannseksjonerende vegger går ofte fra fundament til over tak.

**Viktige prinsipper:**
- Vegger må gå helt til tett konstruksjon
- Ingen hull eller åpninger uten branntetting
- Dører må ha riktig brannmotstand
- Vinduer nær seksjoneringsvegg må være brannvinduer eller ha avstand`,
    },
    {
      title: 'Branntetting',
      content: `## Branntetting

Alle gjennomføringer (hull) i branncellebegrensende konstruksjoner må branntettes.

**Typiske gjennomføringer:**
- Elektriske kabler og kanaler
- Rør for vann, varme, avløp
- Ventilasjonskanaler
- Kabelbroer

**Branntettingsprodukter:**

**Brannskum**
Ekspanderende skum som fyller hull og sveller ved brann.
Bruk: Mindre kabelhull, ujevne åpninger.

**Brannmasse/brannkitt**
Pasta som påføres rundt gjennomføringer.
Bruk: Rørgjennomføringer, kabelkryss.

**Brannmansjetter**
Metalring med ekspanderende materiale som monteres rundt plastrør.
Bruk: Avløpsrør i plast.

**Brannplugger**
Ferdige plugger for kabelhull.
Bruk: Standardiserte gjennomføringer.

**Mørtel og blokker**
For større åpninger og kabelkryss.
Bruk: Store gjennomføringer.

**Utførelse av branntetting:**

1. **Identifiser konstruksjonen**
   Hva er brannkravet? (EI30, EI60, etc.)

2. **Velg godkjent produkt**
   Produktet må være testet for denne konstruksjonen.

3. **Følg monteringsanvisning**
   Feil montering gir ingen brannmotstand.

4. **Dokumenter**
   Foto, produktdatablad, plassering.

5. **Merk tettingen**
   Klistre på etikett med produkt, dato, utfører.`,
    },
    {
      title: 'Branndører og rømningsveier',
      content: `## Branndører og rømningsveier

Branndører og rømningsveier er kritiske for sikker evakuering.

**Branndører:**
Dører med klassifisert brannmotstand.

**Klasser:**
- EI30: 30 minutters brannmotstand (vanlig i boliger)
- EI60: 60 minutters brannmotstand
- EI30-C: Med dørpumpe som lukker automatisk
- EI30-Sa: Røyktett

**Krav til branndører:**
- Selvlukkende (dørpumpe)
- Må lukke helt
- Tettelist mot karm
- Ikke settes i åpen stilling
- Eventuelt magnethold med røykdetektor

**Rømningsveier:**
Trygge veier ut av bygningen ved brann.

**Krav:**
- Tilstrekkelig bredde (min. 90 cm)
- Maks avstand til utgang
- Dører slår ut i rømningsretning
- Ingen hindringer
- Markert med skilt og nødlys
- Egen branncelle (trapperom)

**Trapperom:**
- Må være egen branncelle
- Rykk og brannfri
- Vinduer for røyklufting
- Dører med brannmotstand
- Rekkverk og håndløper

**Evakueringsplan:**
- Vises på veggen i alle etasjer
- Markerer rømningsveier og møteplass
- Alle beboere/brukere må kjenne planen`,
    },
    {
      title: 'Eksempel: Branntetting av teknisk rom',
      content: `## Eksempel: Branntetting av teknisk rom

**Situasjon:**
Et teknisk rom (fyrrom) skal være egen branncelle med EI60. Det går flere rør og kabler gjennom veggene.

**Gjennomføringer:**
- 4 stk vannrør (kobber Ø22 mm)
- 2 stk avløpsrør (plast Ø110 mm)
- Kabelgjennomføring (10 kabler)
- Ventilasjonskanal (rektangulær 30×20 cm)

**Utførelse:**

**1. Vannrør (kobber)**
- Metall er ubrennbart, lite tiltak nødvendig
- Tett hull rundt rørene med steinullpropp
- Forsegl med brannakryl

**2. Avløpsrør (plast)**
- Plast brenner og smelter - kritisk punkt
- Monter brannmansjett på begge sider av vegg
- Mansjetten sveller og lukker hullet når plasten smelter

**3. Kabelgjennomføring**
- Installer kabelgjennomføringsramme (Roxtec eller tilsvarende)
- Moduler tilpasset kabeldimensjoner
- Komprimeres til tett slutning

**4. Ventilasjonskanal**
- Monter brannspjeld inne i kanalen
- Spjeldet lukker automatisk ved brann
- Eventuelt isoler kanalen med brannbatts

**Dokumentasjon:**
- Foto av hver gjennomføring før og etter
- Liste over produkter brukt (med ETA-godkjenning)
- Kontrollskjema signert
- Merkelapper på hver tetting
- Leveres til FDV-dokumentasjon`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-24-ex-1',
      task: 'Forklar hva som menes med klassifiseringen REI60 for en konstruksjon.',
      solution: 'REI60 betyr at konstruksjonen har brannmotstand i 60 minutter for: R (Resistance/bæreevne) - beholder bæreevnen, E (integritet) - hindrer flammer og røyk fra å trenge gjennom, I (isolasjon) - hindrer at varmen kommer gjennom. Alle tre egenskapene opprettholdes i minst 60 minutter.',
    },
    {
      id: 'bygg-anlegg-vg1-24-ex-2',
      task: 'Hva er en branncelle, og nevn tre eksempler på typiske brannceller.',
      solution: 'En branncelle er et avgrenset område omgitt av branncellebegrensende konstruksjoner (vegger, gulv, himling) der brann ikke skal spre seg til nabocellene innenfor en bestemt tid. Eksempler: 1) Hver leilighet i boligblokk, 2) Trapperom/rømningsvei, 3) Garasje adskilt fra bolig. Andre: tekniske rom, heissjakt.',
    },
    {
      id: 'bygg-anlegg-vg1-24-ex-3',
      task: 'Hvorfor må det monteres brannmansjett på plastavløpsrør gjennom branncellebegrensende vegg?',
      solution: 'Plastrør brenner og smelter i brann, noe som vil skape et åpent hull i veggen der flammer og røyk kan spre seg. Brannmansjetten inneholder ekspanderende materiale som sveller opp når det blir varmt og lukker hullet når plastrøret smelter bort. Dette opprettholder veggenes brannmotstand.',
    },
    {
      id: 'bygg-anlegg-vg1-24-ex-4',
      task: 'Hvilke krav stilles til branndører i en boligblokk?',
      solution: 'Branndører i boligblokk skal typisk ha klasse EI30 (30 min brannmotstand). Kravene inkluderer: Selvlukkende med dørpumpe, må lukke helt mot karm, ha tettelist, ikke settes i åpen stilling. Ved trapperom kan det være krav om automatisk lukking med magnethold koblet til røykdetektor. Dør mot trapperom er ofte EI30-C (med dørpumpe).',
    },
    {
      id: 'bygg-anlegg-vg1-24-ex-5',
      task: 'Hvilken dokumentasjon kreves for branntettingsarbeid?',
      solution: 'Dokumentasjon for branntetting inkluderer: 1) Foto av hver gjennomføring før og etter tetting, 2) Liste over produkter brukt med godkjenningsnummer (ETA), 3) Kontrollskjema signert av utfører og eventuelt kontrollør, 4) Merkelapper festet på selve tettingen med produkt, dato og utfører, 5) Alt leveres til FDV-dokumentasjon for bygget.',
    },
    // --- Samleoppgaver ---
    {
      id: 'bygg-anlegg-vg1-24-ex-6',
      task: 'Et boligbygg med 6 leiligheter har felles trapperom. Beskriv hvilke brannkrav som gjelder for trapperommet og veggene mellom leilighetene, inkludert dører.',
      solution: 'TRAPPEROM: Egen branncelle, typisk EI60. Røykfritt - ingen brennbare materialer. Vinduer/lufting for røykventilasjon. Nødlys og skilt. Dører fra leiligheter til trapperom: EI30-C (selvlukkende). VEGGER MELLOM LEILIGHETER: EI60, må gå fra gulv til tett mot himling/etasjeskille. Alle gjennomføringer (rør, kabler) må branntettes med godkjente produkter. DØRER til leiligheter: Fra gang kan være EI30, innvendige dører i leilighet har normalt ikke brannkrav.',
    },
    {
      id: 'bygg-anlegg-vg1-24-ex-7',
      task: 'Du oppdager at en branndør i et trapperom står permanent åpen ved hjelp av en kile. Forklar hvorfor dette er alvorlig og hvilke konsekvenser det kan ha ved brann.',
      solution: 'Dette er et alvorlig brudd på brannsikkerheten fordi: 1) Trapperommet mister sin funksjon som branncelle - røyk og flammer kan spre seg fra leilighet til trapperom umiddelbart. 2) Trapperommet er rømningsvei - røykfylling gjør rømning umulig og kan føre til at beboere omkommer. 3) Brannspredningen akselererer når oksygen fra trapperommet når brannen. 4) Brannvesenet får redusert tid og mulighet til å redde liv. TILTAK: Fjern kilen umiddelbart, informer huseier/brannansvarlig, rapporter avviket. Om nødvendig kan det installeres magnethold med kobling til brannalarm som holder døren åpen i normal drift men slipper den ved alarm.',
    },
  ],
  keyTerms: [
    { term: 'Branncelle', definition: 'Avgrenset område som hindrer brannspredning i en viss tid.' },
    { term: 'REI', definition: 'Klassifisering: R=bæreevne, E=integritet, I=isolasjon + tid i minutter.' },
    { term: 'Brannmotstand', definition: 'Hvor lenge en konstruksjon motstår brann.' },
    { term: 'Brannmansjett', definition: 'Ekspanderende ring rundt plastrør som lukker hull ved brann.' },
    { term: 'Rømningsvei', definition: 'Trygg vei ut av bygning ved brann, ofte eget trapperom.' },
    { term: 'Branntetting', definition: 'Tetting av gjennomføringer for å opprettholde brannmotstand.' },
  ],
};

// ============================================================================
// Kapittel 25: Rehabilitering og vedlikehold
// ============================================================================

export const CHAPTER_BYGG_ANLEGG_VG1_25: TextbookChapter = {
  id: 'bygg-anlegg-vg1-25',
  courseId: 'bygg-anlegg-vg1',
  chapterNumber: '25',
  title: 'Rehabilitering og vedlikehold',
  description: 'Rehabilitering av eksisterende bygninger og forebyggende vedlikehold.',
  estimatedMinutes: 65,
  competenceGoals: [
    'velge og bruke materialer med hensyn til bærekraft',
    'utforske og presentere kjennetegn ved kulturarv og byggeskikk',
  ],
  sections: [
    {
      title: 'Tilstandsvurdering',
      content: `## Tilstandsvurdering

Før rehabilitering må bygningens tilstand kartlegges grundig.

**Hva er tilstandsvurdering?**
En systematisk gjennomgang av bygningens tekniske tilstand for å avdekke skader, slitasje og vedlikeholdsbehov.

**Hvorfor tilstandsvurdering?**
- Avdekke skjulte skader
- Planlegge vedlikehold og rehabilitering
- Budsjettere kostnader
- Prioritere tiltak
- Dokumentere tilstand (kjøp/salg)

**Tilstandsgrader (NS 3424):**

**TG0:** Ingen symptomer
**TG1:** Svake symptomer, lite vedlikeholdsbehov
**TG2:** Middels symptomer, moderat vedlikeholdsbehov
**TG3:** Kraftige symptomer, stort vedlikeholdsbehov

**Gjennomgang av bygningsdeler:**

**Tak:**
- Taktekking (slitasje, lekkasjer)
- Beslag og renner
- Takutstikk og lufting

**Fasade:**
- Kledning (råte, maling)
- Vinduer og dører
- Fuger og overganger

**Grunn og kjeller:**
- Fuktproblemer
- Dreneringssystem
- Sprekker i mur

**Innvendig:**
- Våtrom (membran, sluk)
- Gulv, vegger, tak
- Tekniske installasjoner

**Dokumentasjon:**
- Fotografier
- Målinger (fukt, temperatur)
- Beskrivelse av tilstand
- Anbefaling av tiltak`,
    },
    {
      title: 'Vanlige skader og utbedring',
      content: `## Vanlige skader og utbedring

Ulike skadetyper krever ulike utbedringsmetoder.

**Råteskader i tre:**

**Årsaker:**
- Fukt over tid
- Dårlig ventilasjon
- Konstruksjonsfeil

**Utbedring:**
1. Fjern alt råttent materiale
2. Finn og utbedre fuktkilden
3. Sørg for ventilasjon
4. Erstatt med nytt, impregnert materiale
5. Overflatebehandl

**Fuktskader:**

**Typer:**
- Oppfuktning fra grunn
- Innvendig kondens
- Lekkasjer fra tak/vegger

**Utbedring:**
- Utbedre kilden først
- Tørk ut konstruksjonen
- Saneringsvask ved muggsopp
- Erstatt ødelagte materialer

**Sprekker og setninger:**

**Årsaker:**
- Setninger i grunnen
- Temperatursvingninger
- Overbelastning
- Dårlig fundament

**Utbedring:**
- Stabilisering av grunn (injeksjon)
- Fundamentforsterkning
- Utfylling av sprekker
- Strukturell forsterkning

**Betongrehabilitering:**

**Skadetyper:**
- Armeringskorrosjon
- Frostsprengning
- Alkalireaksjoner

**Utbedring:**
1. Hugge bort skadet betong
2. Rengjøre armering
3. Korrosjonsbeskyttelse på armering
4. Reparasjonsmørtel
5. Overflatebehandling`,
    },
    {
      title: 'Forebyggende vedlikehold',
      content: `## Forebyggende vedlikehold

Forebyggende vedlikehold forlenger byggets levetid og reduserer kostnader.

**Prinsipper:**
- Periodisk kontroll og inspeksjon
- Utbedre små feil før de blir store
- Følge vedlikeholdsprogram
- Dokumentere alt vedlikehold

**Vedlikeholdsplan:**
En plan som angir når ulike vedlikeholdsoppgaver skal utføres.

**Eksempel årshjul:**

**Vår:**
- Sjekk tak etter vinteren
- Inspiser takrenner og nedløp
- Sjekk kjellervindu og drenering
- Vask og inspiser fasade

**Sommer:**
- Male utvendig kledning
- Bytte takstein ved behov
- Reparere fuger
- Etterse utvendige trapper

**Høst:**
- Rens takrenner for løv
- Sjekk vinduer og dørtetting
- Forbered drenering for regn
- Kontroller fyringsanlegg

**Vinter:**
- Fjern snø fra tak ved behov
- Sjekk isdannelse
- Kontroller innendørs fukt

**Intervaller for større vedlikehold:**

- Maling/beising utvendig: 5-10 år
- Takstein/takplater: 25-50 år
- Vinduer: 20-40 år
- Drenering: 30-50 år
- Våtrom: 20-30 år
- VVS-anlegg: 30-40 år`,
    },
    {
      title: 'Energirehabilitering',
      content: `## Energirehabilitering

Oppgradering av eldre bygg for bedre energieffektivitet.

**Hvorfor energirehabilitering?**
- Redusert energiforbruk og kostnader
- Bedre inneklima
- Høyere boligverdi
- Miljøhensyn

**Typiske tiltak:**

**Etterisolering av tak:**
- Blåse inn isolasjon på loft
- Legge isolasjon på kaldt loft
- Isolere skråtak innenfra

**Etterisolering av vegger:**
- Utvendig tilleggsisolasjon + ny kledning
- Innblåsing i hulrom (eldre mur)
- Innvendig isolering (mister areal)

**Vinduer og dører:**
- Bytte til energivinduer
- Tetting av eksisterende vinduer
- Isolerende innerdører

**Gulv og grunn:**
- Isolere kryperom
- Legge gulvvarme ved gulvbytte
- Isolere ringmur

**Ventilasjon:**
- Installere balansert ventilasjon med varmegjenvinning
- Erstatter gammel avtrekk- eller naturlig ventilasjon

**Utfordringer:**
- Fuktproblemer ved feil utførelse
- Estetiske hensyn (særlig vernede bygg)
- Kostnader vs. besparelse
- Bygningsfysiske konsekvenser

**TEK-krav ved rehabilitering:**
Ved større rehabilitering kan TEK-krav utløses. Planlegg i samråd med kommunen.`,
    },
    {
      title: 'Eksempel: Rehabilitering av eldre bolig',
      content: `## Eksempel: Rehabilitering av eldre bolig

**Situasjon:**
Enebolig fra 1960, 120 m². Tilstandsanalyse viser flere problemer.

**Funn fra tilstandsanalyse:**

1. **Tak (TG2):** Gammel takstein, noen knekte, undertak mangler
2. **Fasade (TG2):** Maling flasser, noe råte i kledning
3. **Kjeller (TG3):** Fuktinnsig, gammel drenering
4. **Vinduer (TG2):** Originale 2-lags vinduer, trekk
5. **Våtrom (TG3):** Gammelt, ingen membran

**Prioritering og plan:**

**År 1: Kritiske tiltak**
- Drenering og grunnmur
- Våtromsrehabilitering

Begrunnelse: Fuktproblemer forverrer seg og kan skade konstruksjonen.

**År 2: Klimaskall**
- Nytt tak med undertak
- Vindusbytte

Begrunnelse: Hindrer videre vannskader og gir energibesparelse.

**År 3: Fasade og etterisolering**
- Male fasade (skifte råtten kledning)
- Utvendig etterisolering

Begrunnelse: Estetisk og energimessig oppgradering.

**Estimerte kostnader:**
- Drenering: 150 000 kr
- Våtrom: 200 000 kr
- Tak: 250 000 kr
- Vinduer: 150 000 kr
- Fasade og isolering: 300 000 kr
- Totalt over 3 år: ca. 1 050 000 kr

**Alternativ:**
- Gjøre alt på en gang: Mulig rabatt, men høyere finansieringsbehov
- Søke Enova-støtte til energitiltak`,
    },
  ],
  exercises: [
    {
      id: 'bygg-anlegg-vg1-25-ex-1',
      task: 'Forklar hva de fire tilstandsgradene (TG0-TG3) i NS 3424 betyr.',
      solution: 'TG0: Ingen symptomer - bygningsdelen er i god stand. TG1: Svake symptomer - lite vedlikeholdsbehov, normal slitasje. TG2: Middels symptomer - moderat vedlikeholdsbehov, bør utbedres innen rimelig tid. TG3: Kraftige symptomer - stort vedlikeholdsbehov, bør utbedres snarest for å unngå følgeskader eller sikkerhetsrisiko.',
    },
    {
      id: 'bygg-anlegg-vg1-25-ex-2',
      task: 'Hva er de viktigste trinnene ved utbedring av råteskader i tre?',
      solution: '1) Fjern alt råttent materiale helt til friskt tre. 2) Finn og utbedre fuktkilden som forårsaket råten. 3) Sørg for god ventilasjon slik at konstruksjonen kan tørke og forbli tørr. 4) Erstatt med nytt materiale, gjerne impregnert/behandlet. 5) Overflatebehandl med maling, beis eller olje for beskyttelse.',
    },
    {
      id: 'bygg-anlegg-vg1-25-ex-3',
      task: 'Nevn fire områder der forebyggende vedlikehold bør utføres på våren.',
      solution: 'På våren bør man: 1) Sjekke tak etter vinteren for skader fra snø og is. 2) Inspiser takrenner og nedløp for lekkasjer og tilstoppinger. 3) Sjekke kjellervinduer og drenering før vårflom. 4) Vaske og inspisere fasade for skader etter vinteren. Andre: sjekke utvendige trapper, inspiser terrassse/balkong.',
    },
    {
      id: 'bygg-anlegg-vg1-25-ex-4',
      task: 'Hvilke tiltak inngår typisk i energirehabilitering av en eldre bolig?',
      solution: 'Typiske tiltak: 1) Etterisolering av tak/loft. 2) Etterisolering av vegger (utvendig eller innvendig). 3) Bytte til energivinduer og tette dører. 4) Isolere gulv/kryperom. 5) Installere balansert ventilasjon med varmegjenvinning. Andre: bytte til varmepumpe, installere solceller, isolere rør og kanaler.',
    },
    {
      id: 'bygg-anlegg-vg1-25-ex-5',
      task: 'Hvorfor bør fuktproblemer i kjeller utbedres før man etterisolerer fasaden?',
      solution: 'Fuktproblemer må løses først fordi: 1) Fukt kan spre seg til ny isolasjon og ødelegge den. 2) Etterisolering endrer bygningens fukttransport - eksisterende fuktproblemer kan forverres. 3) Det er lite nyttig å isolere en konstruksjon som er våt - isolasjonen virker ikke. 4) Fukt kan føre til muggsopp som blir innekapslet. 5) Man unngår å måtte rive ny isolasjon for å fikse grunnproblemet senere.',
    },
    // --- Samleoppgaver ---
    {
      id: 'bygg-anlegg-vg1-25-ex-6',
      task: 'Lag en enkel vedlikeholdsplan (årshjul) for en enebolig. Ta med minst tre aktiviteter per årstid og begrunn valget.',
      solution: 'VÅR: 1) Inspiser tak for vinterskader (is og snø kan ha skadet takstein), 2) Rens takrenner (fjern høstløv og kontroller at vann renner fritt), 3) Sjekk drenering og kjeller for fuktinntrengning (snøsmelting gir mye vann). SOMMER: 1) Male utvendige flater (best vær for maling), 2) Inspiser og reparer fuger/vindtetting (kan jobbe utendørs), 3) Etterse terrasse og uteplass (sesong for bruk). HØST: 1) Rens takrenner for løv (før vinteren kommer), 2) Sjekk vinduer og dørtetning (unngå trekk i fyringssesongen), 3) Service fyringsanlegg (før full bruk). VINTER: 1) Fjern snø fra tak ved behov (unngå overbelastning), 2) Kontroller istapper og isdammer, 3) Sjekk innendørs fukt/kondens (tett hus + varme gir kondens).',
    },
    {
      id: 'bygg-anlegg-vg1-25-ex-7',
      task: 'En 60 år gammel bolig har følgende problemer: fukt i kjeller (TG3), gamle vinduer med trekk (TG2), slitt fasadekledning (TG2). Lag en prioritert plan for rehabilitering med begrunnelse for rekkefølgen.',
      solution: 'PRIORITERT PLAN: 1. FØRST: Fukt i kjeller (TG3). Begrunnelse: Alvorligst problem, kan skade bærende konstruksjoner, vil forverres over tid, må løses før andre tiltak (ellers fuktes ny isolasjon). Tiltak: Utbedre drenering, fuktsperre på grunnmur, eventuelt innvendig tiltak. 2. DERETTER: Vinduer (TG2). Begrunnelse: Trekk gir energitap og ubehag, vinduer er relativt enkelt å bytte, gir umiddelbar forbedring av komfort og energibruk. Tiltak: Bytte til 3-lags energivinduer. 3. TIL SLUTT: Fasadekledning (TG2). Begrunnelse: Mest kosmetisk, kan kombineres med etterisolering, bør vente til fuktproblemet er løst. Tiltak: Skifte skadet kledning, male/beise, vurder utvendig etterisolering samtidig.',
    },
  ],
  keyTerms: [
    { term: 'Tilstandsvurdering', definition: 'Systematisk gjennomgang av bygningens tekniske tilstand.' },
    { term: 'Tilstandsgrad (TG)', definition: 'Klassifisering av bygningsdelers tilstand fra TG0 til TG3.' },
    { term: 'Rehabilitering', definition: 'Større utbedring og oppgradering av eksisterende bygning.' },
    { term: 'Vedlikeholdsplan', definition: 'Plan for periodisk vedlikehold av bygningsdeler.' },
    { term: 'Energirehabilitering', definition: 'Oppgradering for bedre energieffektivitet.' },
    { term: 'Etterisolering', definition: 'Tilføre isolasjon til eksisterende konstruksjon.' },
  ],
};

// ============================================================================
// Eksporter kapitler 21-25
// ============================================================================

export const CHAPTERS_BYGG_ANLEGG_VG1_PART3 = [
  CHAPTER_BYGG_ANLEGG_VG1_21,
  CHAPTER_BYGG_ANLEGG_VG1_22,
  CHAPTER_BYGG_ANLEGG_VG1_23,
  CHAPTER_BYGG_ANLEGG_VG1_24,
  CHAPTER_BYGG_ANLEGG_VG1_25,
];
