/**
 * Tekstbok innhold for Naturfag VG1 DEL 4
 * Seksjon 7: Ernæring, helse og livsstil (7.1-7.6)
 * Seksjon 8: Arv og evolusjon (8.1-8.5)
 *
 * Dekker LK20 kompetansemål for NAT01-04.
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// SEKSJON 7: Ernæring, helse og livsstil
// ============================================================================

export const CHAPTER_NAT_VG1_7_1: TextbookChapter = {
  id: 'nat-vg1-7-1',
  courseId: 'nat-vg1',
  chapterNumber: '7.1',
  title: 'Karbohydrater og fiber',
  description: 'Lær om karbohydratenes oppbygning, typer og funksjon som energikilde, samt fiberens rolle for helsen.',
  estimatedMinutes: 45,
  competenceGoals: ['gjøre rede for funksjonene til noen næringsstoffer'],
  content: [
    {
      id: 'nat-vg1-7-1-intro',
      type: 'text',
      content: `## Karbohydrater - kroppens viktigste drivstoff

**Karbohydrater** er den viktigste energikilden for kroppen. Navnet kommer av at molekylene inneholder karbon (C), hydrogen (H) og oksygen (O).

Karbohydrater finnes i mat som brød, ris, pasta, poteter, frukt og sukker. Når vi spiser karbohydrater, brytes de ned til **glukose** (blodsukker) som cellene bruker til energiproduksjon gjennom celleånding.

**Karbohydrater deles inn etter størrelse:**
- **Monosakkarider** (enkle sukkerarter)
- **Disakkarider** (doble sukkerarter)
- **Polysakkarider** (sammensatte karbohydrater)

Energiinnholdet i karbohydrater er **17 kJ per gram** (4 kcal/g).`,
    },
    {
      id: 'nat-vg1-7-1-def-1',
      type: 'definition',
      title: 'Monosakkarider og disakkarider',
      content: `**Monosakkarider** (enkle sukkerarter) er de minste karbohydratene:
- **Glukose** (druesukker): Kroppens foretrukne energikilde. Finnes i frukt og honning.
- **Fruktose** (fruktsukker): Finnes i frukt, bær og honning. Smaker søtere enn glukose.
- **Galaktose:** Finnes som del av laktose i melk.

**Disakkarider** (doble sukkerarter) er bygget opp av to monosakkarider:
- **Sukrose** (bordsukker) = glukose + fruktose. Utvinnes fra sukkerrør eller sukkerbete.
- **Laktose** (melkesukker) = glukose + galaktose. Noen mennesker mangler enzymet laktase og tåler ikke laktose (laktoseintoleranse).
- **Maltose** (maltsukker) = glukose + glukose. Dannes når stivelse brytes ned.`,
    },
    {
      id: 'nat-vg1-7-1-def-2',
      type: 'definition',
      title: 'Polysakkarider',
      content: `**Polysakkarider** er lange kjeder av mange monosakkarider koblet sammen:

**Stivelse:**
- Plantenes energilager
- Finnes i poteter, ris, korn, pasta
- Brytes ned til glukose i fordøyelsen

**Glykogen:**
- Dyrenes (og menneskets) energilager
- Lagres i lever og muskler
- Omdannes raskt til glukose ved behov
- Begrenset lager (ca. 500 g hos voksne)

**Cellulose:**
- Byggemateriale i planteceller (cellevegg)
- Mennesker kan ikke bryte ned cellulose
- Fungerer som uløselig fiber i kostholdet`,
    },
    {
      id: 'nat-vg1-7-1-def-3',
      type: 'definition',
      title: 'Fiber og blodsukkerregulering',
      content: `**Fiber** er ufordøyelige karbohydrater fra plantemat.

**To typer fiber:**
- **Løselig fiber:** Løser seg i vann og danner en gel. Finnes i havregryn, belgfrukter, frukt. Senker blodsukker- og kolesterolnivå.
- **Uløselig fiber:** Løser seg ikke i vann. Finnes i fullkorn, grønnsaker, nøtter. Øker volumet i tarmen og fremmer tarmhelse.

**Anbefalt inntak:** 25-35 g fiber per dag.

**Blodsukkerregulering:**
Hormonet **insulin** (fra bukspyttkjertelen) senker blodsukkeret ved å hjelpe cellene med å ta opp glukose. Hormonet **glukagon** øker blodsukkeret ved å frigjøre glukose fra glykogenlagrene.

**Glykemisk indeks (GI):**
Et mål på hvor raskt et karbohydrat øker blodsukkeret. Lav GI (fullkorn, belgfrukter) gir jevnere blodsukker enn høy GI (hvitt brød, sukker).`,
    },
    {
      id: 'nat-vg1-7-1-example-1',
      type: 'example',
      title: 'Eksempel: Beregning av energi fra karbohydrater',
      problem: 'En skive grovbrød inneholder ca. 20 g karbohydrater. Hvor mye energi gir dette i kJ?',
      solution: `**Løsning:**

Energiinnhold i karbohydrater: 17 kJ/g

Energi = mengde x energiinnhold per gram
Energi = 20 g x 17 kJ/g = **340 kJ**

Til sammenligning: Daglig energibehov for en ungdom er ca. 9000-11 000 kJ. En skive grovbrød dekker altså ca. 3-4 % av dagsbehovet.`,
    },
    {
      id: 'nat-vg1-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom monosakkarider, disakkarider og polysakkarider. Gi et eksempel på hver.',
        solution: 'Monosakkarider er enkle sukkerarter som best&aring;r av ett sukkermolelkyl, for eksempel glukose (druesukker). Disakkarider er satt sammen av to monosakkarider, for eksempel sukrose (bordsukker) som er satt sammen av glukose og fruktose. Polysakkarider er lange kjeder av mange monosakkarider, for eksempel stivelse som finnes i poteter og korn og fungerer som energilager i planter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar hva glykemisk indeks (GI) er, og hvorfor mat med lav GI anbefales.',
        solution: 'Glykemisk indeks (GI) er et mål på hvor raskt karbohydrater i maten øker blodsukkeret etter at vi har spist. Mat med lav GI (som fullkornsprodukter og belgfrukter) gir en langsom og jevn blodsukkerstigning, noe som gir langvarig metthet og stabil energi. Mat med høy GI (som hvitt brød og sukker) gir rask blodsukkerstigning etterfulgt av et raskt fall, som kan føre til at man blir sulten igjen fort og kan bidra til overvekt og type 2-diabetes over tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvorfor fiber er viktig i kostholdet, selv om vi ikke kan fordøye det.',
        solution: 'Selv om kroppen ikke kan bryte ned fiber og hente energi fra det, har fiber viktige funksjoner: 1) Løselig fiber danner en gel i tarmen som senker opptaket av sukker og kolesterol, noe som gir jevnere blodsukker og bedre hjertehelse. 2) Uløselig fiber øker volumet i tarmen, fremmer tarmperistaltikken (tarmbevegelsene) og forebygger forstoppelse. 3) Fiber gir metthetsfølelse og hjelper med å regulere vekten. 4) Fiber er mat for de gode tarmbakteriene (prebiotisk effekt), noe som er viktig for tarmhelsen og immunforsvaret.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_7_2: TextbookChapter = {
  id: 'nat-vg1-7-2',
  courseId: 'nat-vg1',
  chapterNumber: '7.2',
  title: 'Proteiner og aminosyrer',
  description: 'Forstå proteinenes oppbygning, essensielle aminosyrer og proteinets mange funksjoner i kroppen.',
  estimatedMinutes: 45,
  competenceGoals: ['gjøre rede for funksjonene til noen næringsstoffer'],
  content: [
    {
      id: 'nat-vg1-7-2-intro',
      type: 'text',
      content: `## Proteiner - kroppens allsidige byggesteiner

**Proteiner** (eggehvitestoffer) er livets viktigste molekyler. De har et enormt antall funksjoner i kroppen, fra å bygge opp muskler og vev til å styre kjemiske reaksjoner.

Proteiner er bygget opp av **aminosyrer** som er koblet sammen i lange kjeder. Rekkefølgen av aminosyrene bestemmer proteinets tredimensjonale form, og formen avgjør funksjonen.

Det finnes 20 ulike aminosyrer. Av disse er **8-9 essensielle**, det vil si at kroppen ikke kan lage dem selv. De må tilføres gjennom maten vi spiser.

**Energiinnhold:** 17 kJ per gram (4 kcal/g), det samme som karbohydrater. Kroppen bruker primært protein som byggemateriale, men kan bruke det som energikilde hvis karbohydrat- og fettlagrene er tomme.`,
    },
    {
      id: 'nat-vg1-7-2-def-1',
      type: 'definition',
      title: 'Aminosyrer og peptidbindinger',
      content: `**Aminosyre:** Et lite organisk molekyl som har en aminogruppe (-NH₂) og en karboksylgruppe (-COOH) bundet til samme karbonatom. I tillegg har hver aminosyre en unik sidegruppe (R-gruppe) som gir den spesielle egenskaper.

**Peptidbinding:** Den kjemiske bindingen som kobler to aminosyrer sammen. Dannes ved en kondensasjonsreaksjon der ett vannmolekyl frigjøres.

**Peptider og proteiner:**
- **Dipeptid:** To aminosyrer koblet sammen
- **Polypeptid:** Mange aminosyrer i en kjede
- **Protein:** Ett eller flere polypeptider som folder seg til en bestemt tredimensjonal struktur

**Essensielle aminosyrer** (kan ikke lages i kroppen):
Leucin, isoleucin, valin, lysin, metionin, fenylalanin, treonin, tryptofan (+ histidin for barn)`,
    },
    {
      id: 'nat-vg1-7-2-def-2',
      type: 'definition',
      title: 'Proteinenes funksjoner',
      content: `Proteiner har svært mange ulike funksjoner i kroppen:

**Enzymer:** Proteiner som katalyserer (fremskynder) kjemiske reaksjoner. Eksempel: Amylase bryter ned stivelse, laktase bryter ned laktose.

**Antistoffer:** Proteiner i immunforsvaret som gjenkjenner og nøytraliserer fremmede stoffer (antigener).

**Hormoner:** Mange hormoner er proteiner, f.eks. insulin som regulerer blodsukkeret.

**Strukturproteiner:** Gir styrke og form til vev. Eksempler: Kollagen i hud og sener, keratin i hår og negler.

**Transportproteiner:** Frakter stoffer i kroppen. Eksempel: Hemoglobin frakter oksygen i blodet.

**Kontraktile proteiner:** Gir muskler evnen til å trekke seg sammen. Aktin og myosin.`,
    },
    {
      id: 'nat-vg1-7-2-def-3',
      type: 'definition',
      title: 'Komplette og ufullstendige proteiner',
      content: `**Komplett protein:** Inneholder alle essensielle aminosyrer i tilstrekkelige mengder.
- Kilder: Kjøtt, fisk, egg, melkeprodukter, soya, quinoa

**Ufullstendig protein:** Mangler én eller flere essensielle aminosyrer.
- Kilder: De fleste belgfrukter, korn, nøtter (hver for seg)

**Komplementære proteiner:**
Ved å kombinere ulike plantekilder kan man få inn alle essensielle aminosyrer:
- Ris + bønner
- Brød + hummus (kikerter)
- Linser + korn

**Animalsk vs. vegetabilsk protein:**
Animalsk protein er som regel komplett, mens vegetabilsk protein ofte krever kombinasjoner. Et vegetarisk eller vegansk kosthold kan dekke proteinbehovet, men krever mer bevisst sammensetning av måltidene.`,
    },
    {
      id: 'nat-vg1-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn fire ulike funksjoner proteiner har i kroppen, og gi et eksempel på et protein for hver funksjon.',
        solution: '1) Enzymer: Proteiner som fremskynder kjemiske reaksjoner, f.eks. amylase som bryter ned stivelse i munnen. 2) Antistoffer: Proteiner i immunforsvaret som bekjemper infeksjoner, f.eks. immunglobuliner som binder seg til virus. 3) Strukturproteiner: Gir styrke til vev, f.eks. kollagen som er hovedproteinet i hud, sener og knokler. 4) Transportproteiner: Frakter stoffer i kroppen, f.eks. hemoglobin som frakter oksygen i blodet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er essensielle aminosyrer, og hvorfor er det viktig å få dem gjennom maten?',
        solution: 'Essensielle aminosyrer er aminosyrer som kroppen ikke kan lage selv og som derfor må tilføres gjennom kostholdet. Det finnes 8-9 essensielle aminosyrer. De er nødvendige for å bygge proteiner som kroppen trenger for vekst, reparasjon av vev, enzymer, hormoner og immunforsvar. Mangler man essensielle aminosyrer over tid, kan kroppen ikke lage viktige proteiner, noe som kan føre til svekket muskelmasse, dårligere immunforsvar og hemmet vekst hos barn.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva som menes med komplette og ufullstendige proteiner, og beskriv hvordan en person som spiser vegetarisk kan få i seg alle essensielle aminosyrer.',
        solution: 'Et komplett protein inneholder alle essensielle aminosyrer i tilstrekkelige mengder, som kjøtt, fisk, egg og soya. Et ufullstendig protein mangler én eller flere essensielle aminosyrer, som de fleste belgfrukter og kornprodukter hver for seg. En vegetarianer kan få alle essensielle aminosyrer ved å kombinere ulike proteinkiler i løpet av dagen, for eksempel ris sammen med bønner, brød med hummus, eller linser med korn. Soya og quinoa er plantekilder som er komplette i seg selv. Det er ikke nødvendig å kombinere i hvert måltid, men over dagen bør man variere kildene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_7_3: TextbookChapter = {
  id: 'nat-vg1-7-3',
  courseId: 'nat-vg1',
  chapterNumber: '7.3',
  title: 'Fett og fettsyrer',
  description: 'Lær om fettets oppbygning, ulike typer fettsyrer og fettets viktige roller i kroppen.',
  estimatedMinutes: 45,
  competenceGoals: ['gjøre rede for funksjonene til noen næringsstoffer'],
  content: [
    {
      id: 'nat-vg1-7-3-intro',
      type: 'text',
      content: `## Fett - mer enn bare energi

**Fett** (lipider) er den mest energitette av næringsstoffene, med **37 kJ per gram** (9 kcal/g) - mer enn dobbelt så mye som karbohydrater og proteiner.

Fett har fått et ufortjent dårlig rykte. I virkeligheten er fett helt nødvendig for kroppen. Det som betyr noe, er hvilken **type fett** vi spiser.

Et fettmolekyl (triglyserid) er bygget opp av:
- **Glyserol** (en tre-karbon alkohol)
- **Tre fettsyrer** bundet til glyserol

Fettsyrenes egenskaper avhenger av lengden på karbonkjeden og om det finnes **dobbeltbindinger** mellom karbonatomene.`,
    },
    {
      id: 'nat-vg1-7-3-def-1',
      type: 'definition',
      title: 'Mettede og umettede fettsyrer',
      content: `**Mettede fettsyrer:**
- Ingen dobbeltbindinger mellom karbonatomene
- Karbonkjeden er "mettet" med hydrogen
- Fast konsistens ved romtemperatur
- Kilder: Smør, ost, kjøttfett, kokosolje
- Bør begrenses i kostholdet (øker LDL-kolesterol)

**Enumettede fettsyrer:**
- Har én dobbeltbinding i karbonkjeden
- Flytende ved romtemperatur
- Kilder: Olivenolje, rapsolje, avokado, nøtter
- Gunstig for hjertehelsen

**Flerumettede fettsyrer:**
- Har to eller flere dobbeltbindinger
- Flytende ved romtemperatur
- Inkluderer de essensielle fettsyrene omega-3 og omega-6
- Kilder: Fet fisk, linfrø, valnøtter, solsikkeolje`,
    },
    {
      id: 'nat-vg1-7-3-def-2',
      type: 'definition',
      title: 'Omega-3, omega-6 og transfett',
      content: `**Omega-3-fettsyrer:**
- Essensielle (kroppen kan ikke lage dem selv)
- Viktig for hjerneutvikling, syn og hjertehelse
- Demper betennelsesreaksjoner
- Kilder: Fet fisk (laks, makrell, sild), linfrø, valnøtter

**Omega-6-fettsyrer:**
- Også essensielle
- Viktig for cellemembranene og immunforsvaret
- Kilder: Solsikkeolje, maisolje, nøtter, frø
- De fleste får nok omega-6, men for lite omega-3

**Transfett:**
- Industrielt fremstilt ved herding av vegetabilsk olje
- Øker LDL-kolesterol (det "dårlige") og senker HDL-kolesterol (det "gode")
- Øker risikoen for hjerte- og karsykdommer
- Bør unngås helt
- Finnes i noe hurtigmat, kjeks, kaker og snacks`,
    },
    {
      id: 'nat-vg1-7-3-def-3',
      type: 'definition',
      title: 'Fettets funksjoner og kolesterol',
      content: `**Fettets funksjoner i kroppen:**
- **Energireserve:** Fettvev lagrer energi effektivt (dobbelt så mye per gram som karbohydrater)
- **Cellemembran:** Fosfolipider er hovedbestanddelen i alle cellemembraner
- **Vitaminopptak:** Fettløselige vitaminer (A, D, E, K) krever fett for å tas opp i tarmen
- **Isolasjon:** Fettvev isolerer mot kulde
- **Beskyttelse:** Fett beskytter indre organer mot støt
- **Hormoner:** Noen hormoner lages fra fett (f.eks. steroidhormoner)

**Kolesterol:**
- Fettlignende stoff laget i leveren
- Nødvendig for cellemembraner, gallesalter og vitamin D-produksjon
- LDL-kolesterol ("dårlig"): Frakter kolesterol til cellene, kan avleires i blodårene
- HDL-kolesterol ("bra"): Frakter kolesterol tilbake til leveren
- Kosthold med mye mettet fett øker LDL-kolesterol`,
    },
    {
      id: 'nat-vg1-7-3-example-1',
      type: 'example',
      title: 'Eksempel: Sammenligning av energiinnhold',
      problem: 'Sammenlign energiinnholdet i 10 g smør (ca. 80 % fett) og 10 g sukker (100 % karbohydrat).',
      solution: `**Løsning:**

**Smør (10 g, 80 % fett):**
Fettmengde = 10 g x 0,80 = 8 g fett
Energi = 8 g x 37 kJ/g = 296 kJ

**Sukker (10 g, 100 % karbohydrat):**
Energi = 10 g x 17 kJ/g = 170 kJ

**Sammenligning:** 10 g smør gir 296 kJ, mens 10 g sukker gir 170 kJ.

Smøret gir nesten dobbelt så mye energi per vektenhet, selv om det bare er 80 % fett. Dette illustrerer hvorfor fett er en så effektiv energikilde (37 kJ/g vs. 17 kJ/g).`,
    },
    {
      id: 'nat-vg1-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom mettet, enumettet og flerumettet fett. Gi eksempler på matvarer som inneholder de ulike typene.',
        solution: 'Mettet fett har ingen dobbeltbindinger mellom karbonatomene, er fast ved romtemperatur og finnes i smør, ost og kjøttfett. Enumettet fett har én dobbeltbinding, er flytende ved romtemperatur og finnes i olivenolje, avokado og nøtter. Flerumettet fett har to eller flere dobbeltbindinger, er flytende ved romtemperatur og finnes i fet fisk (omega-3), linfrø og solsikkeolje (omega-6). Generelt anbefales det å bytte ut mettet fett med umettet fett for bedre hjertehelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor er omega-3-fettsyrer viktige, og hvilke matvarer er gode kilder?',
        solution: 'Omega-3-fettsyrer er essensielle fettsyrer som kroppen ikke kan lage selv. De er viktige for hjernens utvikling og funksjon, for synet, og for hjertehelsen. Omega-3 demper betennelsesreaksjoner i kroppen og kan redusere risikoen for hjerte- og karsykdommer. De beste kildene er fet fisk som laks, makrell, sild og sardiner. Vegetabilske kilder inkluderer linfrø, chiafrø og valnøtter, men disse inneholder en annen type omega-3 (ALA) som kroppen må omdanne til de mest aktive formene (EPA og DHA).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'En avokado inneholder ca. 2 g karbohydrater, 2 g protein og 15 g fett. Beregn det totale energiinnholdet i kJ og finn ut hvor stor prosentandel av energien som kommer fra fett.',
        solution: 'Karbohydrater: 2 g x 17 kJ/g = 34 kJ. Protein: 2 g x 17 kJ/g = 34 kJ. Fett: 15 g x 37 kJ/g = 555 kJ. Totalt: 34 + 34 + 555 = 623 kJ. Prosentandel fra fett: (555 / 623) x 100 % = 89 %. Nesten 90 % av energien i avokado kommer fra fett, hovedsakelig enumettet fett som er gunstig for helsen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_7_4: TextbookChapter = {
  id: 'nat-vg1-7-4',
  courseId: 'nat-vg1',
  chapterNumber: '7.4',
  title: 'Vitaminer, mineraler og et variert kosthold',
  description: 'Lær om viktige vitaminer og mineraler, mangelsykdommer og anbefalinger for et bærekraftig kosthold.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for funksjonene til noen næringsstoffer',
    'diskutere hvorfor et variert kosthold er viktig i et helse- og bærekraftsperspektiv',
  ],
  content: [
    {
      id: 'nat-vg1-7-4-intro',
      type: 'text',
      content: `## Vitaminer og mineraler - mikronæringsstoffer

Selv om kroppen bare trenger **vitaminer** og **mineraler** i svært små mengder, er de helt avgjørende for at kroppen skal fungere normalt. Mangel på selv ett vitamin kan gi alvorlige sykdommer.

**Vitaminer** er organiske forbindelser som kroppen ikke kan lage nok av selv. De deles inn i:
- **Fettløselige vitaminer** (A, D, E, K) - lagres i fettvev og lever
- **Vannløselige vitaminer** (B-vitaminene og C) - lagres ikke, overskudd skilles ut i urinen

**Mineraler** er uorganiske grunnstoffer som trengs for mange kroppsfunksjoner. Viktige mineraler inkluderer kalsium, jern, jod og natrium.

Et **variert kosthold** er den beste måten å sikre at vi får alle mikronæringsstoffene vi trenger.`,
    },
    {
      id: 'nat-vg1-7-4-def-1',
      type: 'definition',
      title: 'Fettløselige vitaminer (A, D, E, K)',
      content: `**Vitamin A:**
- Funksjon: Syn (spesielt nattsyn), hud, immunforsvar
- Kilder: Lever, gulrot, søtpotet, spinat (som betakaroten)
- Mangel: Nattblindhet, tørr hud

**Vitamin D:**
- Funksjon: Opptak av kalsium, benhelse, immunforsvar
- Kilder: Sollys (huden lager vitamin D), fet fisk, tran, beriket melk
- Mangel: Rakitt (bløte knokler hos barn), beinskjørhet hos voksne
- Viktig i Norge pga. lite sol om vinteren

**Vitamin E:**
- Funksjon: Antioksidant, beskytter cellemembraner
- Kilder: Vegetabilske oljer, nøtter, frø

**Vitamin K:**
- Funksjon: Blodkoagulering (levring), benhelse
- Kilder: Grønne bladgrønnsaker, brokkoli

**NB:** Fettløselige vitaminer krever fett i kosten for å tas opp i tarmen.`,
    },
    {
      id: 'nat-vg1-7-4-def-2',
      type: 'definition',
      title: 'Vannløselige vitaminer og mineraler',
      content: `**B-vitaminer** (B1, B2, B3, B5, B6, B7, B9, B12):
- Funksjoner: Energiomsetning, nervefunksjon, celledeling
- B12 finnes nesten bare i animalske produkter - viktig for veganere å ta tilskudd
- B9 (folat) er viktig for gravide (forebygger nevralrørsdefekter)

**Vitamin C:**
- Funksjon: Antioksidant, immunforsvar, kollagenproduksjon, jernopptak
- Kilder: Sitrusfrukter, paprika, brokkoli, jordbær
- Mangel: Skjørbuk (slapphet, blødende tannkjøtt, sår som ikke gror)

**Viktige mineraler:**
- **Kalsium:** Benhelse, muskelsammentrekning, nervesignaler. Kilder: Melk, ost, brokkoli, grønnkål.
- **Jern:** Oksygentransport (i hemoglobin). Kilder: Rødt kjøtt, belgfrukter, spinat. Mangel: Anemi (blodmangel).
- **Jod:** Skjoldbruskkjertelfunksjon (stoffskifte). Kilder: Sjømat, jodert salt, melk.
- **Natrium:** Væskebalanse, nervefunksjon. For mye gir høyt blodtrykk.`,
    },
    {
      id: 'nat-vg1-7-4-def-3',
      type: 'definition',
      title: 'Kostholdsanbefalinger og bærekraftig mat',
      content: `**Helsedirektoratets kostråd:**
1. Spis variert med mye grønnsaker, frukt og bær
2. Velg grove kornprodukter
3. Spis fisk 2-3 ganger i uken
4. Velg magre meieriprodukter
5. Begrens rødt og bearbeidet kjøtt
6. Velg matoljer og myk margarin
7. Begrens sukker, salt og alkohol
8. Drikk vann

**Bærekraftig kosthold:**
Et sunt kosthold og et klimavennlig kosthold er i stor grad det samme:
- Mer plantekost, mindre rødt kjøtt
- Norsk sesongvare og sjømat
- Redusert matsvinn

**EAT-Lancet-dietten (2019):**
Vitenskapelig rapport som anbefaler et kosthold som er bra for både helse og klima. Hovedbudskap: Halvere forbruket av rødt kjøtt og sukker, doble inntaket av grønnsaker, frukt, belgfrukter og nøtter.`,
    },
    {
      id: 'nat-vg1-7-4-example-1',
      type: 'example',
      title: 'Eksempel: Skjørbuk - en historisk mangelsykdom',
      problem: 'Forklar hva skjørbuk er og hvorfor sjøfolk var spesielt utsatt for denne sykdommen.',
      solution: `**Skjørbuk** er en mangelsykdom forårsaket av for lite vitamin C.

**Symptomer:** Slapphet, blødende tannkjøtt, tenner som faller ut, sår som ikke gror, blødninger under huden, og i alvorlige tilfeller døden.

**Hvorfor sjøfolk?**
På lange sjøreiser (1500-1800-tallet) hadde sjøfolk begrenset tilgang på fersk mat. Kosten bestod hovedsakelig av tørket kjøtt, kjeks og saltet fisk - ingen vitamin C.

**Løsningen:**
Den britiske marinekirurgen James Lind viste i 1747 at sitrusfrukter kurerte skjørbuk. Senere ble det påbudt å ha sitroner og lime om bord på britiske skip. Vitamin C trengs for å lage kollagen, et strukturprotein i hud, blodårer og bindevev. Uten vitamin C brytes disse vevene ned.`,
    },
    {
      id: 'nat-vg1-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom fettløselige og vannløselige vitaminer, og gi eksempler på hver.',
        solution: 'Fettløselige vitaminer (A, D, E, K) løses i fett og lagres i kroppens fettvev og lever. De krever fett i kosten for å tas opp i tarmen. Fordi de lagres, kan man i teorien få for mye av dem. Vannløselige vitaminer (B-vitaminene og C) løses i vann og lagres ikke i kroppen. Overskudd skilles ut med urinen, og de må derfor tilføres regelmessig. Eksempler: Vitamin D (fettløselig) er viktig for benhelse og lages i huden ved sollys. Vitamin C (vannløselig) er viktig for immunforsvaret og finnes i sitrusfrukter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor er vitamin D-mangel et spesielt problem i Norge? Hva kan man gjøre for å få nok vitamin D?',
        solution: 'Norge ligger langt nord, og om vinteren (oktober-mars) er solen så lavt på himmelen at huden ikke kan produsere vitamin D fra sollys. I tillegg tilbringer mange mye tid innendørs. Tiltak: 1) Spise mat som er rik på vitamin D, som fet fisk (laks, makrell), tran og beriket melk og margarin. 2) Ta tran eller vitamin D-tilskudd, spesielt om vinteren. 3) Få sollys om sommeren (men beskytte seg mot forbrenning). Helsedirektoratet anbefaler vitamin D-tilskudd til alle i Norge om vinteren.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter hvorfor et variert kosthold er viktig sett fra både et helse- og et bærekraftsperspektiv.',
        solution: 'Helseperspektiv: Et variert kosthold sikrer at vi får alle nødvendige vitaminer, mineraler, essensielle aminosyrer og fettsyrer. Ensidighet øker risikoen for mangeltilstander og livsstilssykdommer. Bærekraftsperspektiv: Et kosthold basert på mer plantekost og mindre kjøtt har lavere klimaavtrykk. Å spise variert med sesongvarer og lokale produkter reduserer transportutslipp. Å redusere matsvinn er bra for både økonomi og klima. EAT-Lancet-rapporten viser at det som er bra for helsen (mer grønnsaker, belgfrukter, fisk, mindre rødt kjøtt og sukker) også er bra for planeten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_7_5: TextbookChapter = {
  id: 'nat-vg1-7-5',
  courseId: 'nat-vg1',
  chapterNumber: '7.5',
  title: 'Livsstil og helseutfordringer',
  description: 'Drøft sammenhengen mellom livsstil, helse og sykdom, inkludert fysisk aktivitet, søvn, stress og psykisk helse.',
  estimatedMinutes: 50,
  competenceGoals: ['drøfte aktuelle helse- og livsstilsspørsmål'],
  content: [
    {
      id: 'nat-vg1-7-5-intro',
      type: 'text',
      content: `## Livsstilsfaktorer og helse

**Livsstilssykdommer** er sykdommer som i stor grad påvirkes av hvordan vi lever:

**Viktige livsstilsfaktorer:**
- Kosthold
- Fysisk aktivitet
- Søvn
- Stress
- Rusmidler (alkohol, tobakk)
- Sosiale relasjoner
- Skjermtid

**Vanlige livsstilssykdommer:**
- Hjerte- og karsykdommer
- Type 2-diabetes
- Fedme
- Noen typer kreft
- Psykiske lidelser

Mange av disse sykdommene kan forebygges gjennom sunne livsstilsvalg. Samfunnet kan også legge til rette for gode valg gjennom tilgjengelige fritidsarenaer, regulering av usunne produkter og god informasjon.`,
    },
    {
      id: 'nat-vg1-7-5-def-1',
      type: 'definition',
      title: 'Fysisk aktivitet og helse',
      content: `**Anbefalinger for ungdom (13-17 år):**
- Minst 60 minutter moderat til høy intensitet daglig
- Aktiviteter som styrker muskler og skjelett minst 3 dager i uken
- Redusere stillesitting

**Helseeffekter av fysisk aktivitet:**
- Styrker hjerte og lunger
- Bygger muskler og styrker skjelettet
- Reduserer risiko for fedme, diabetes, hjertesykdom
- Bedrer psykisk helse (reduserer angst og depresjon)
- Forbedrer søvn, konsentrasjon og læring
- Frigjør endorfiner (kroppens eget "lykkestoff")

**Risiko ved fysisk inaktivitet:**
- Økt risiko for livsstilssykdommer
- Svekket muskelstyrke og utholdenhet
- Redusert benhelse og økt risiko for beinskjørhet
- Økt risiko for psykiske plager`,
    },
    {
      id: 'nat-vg1-7-5-def-2',
      type: 'definition',
      title: 'Søvn og psykisk helse',
      content: `**Søvn:**
Ungdom 13-18 år trenger 8-10 timer søvn per natt.

**Hvorfor søvn er viktig:**
- Hjernen rydder opp, bearbeider inntrykk og lagrer minner
- Kroppen reparerer og bygger vev
- Immunforsvaret styrkes
- Hormonbalansen reguleres (veksthormoner utskilles)

**Konsekvenser av søvnmangel:**
- Svekket konsentrasjon og hukommelse
- Dårligere immunforsvar
- Økt risiko for fedme og diabetes
- Psykiske problemer (irritabilitet, angst)

**Psykisk helse:**
Psykisk helse er like viktig som fysisk helse. Risikofaktorer for psykiske plager hos ungdom inkluderer ensomhet, mobbing, høyt press, søvnmangel og sosiale medier. Beskyttende faktorer inkluderer gode relasjoner, fysisk aktivitet, mestring og tilhørighet.`,
    },
    {
      id: 'nat-vg1-7-5-def-3',
      type: 'definition',
      title: 'Stress og stressmestring',
      content: `**Stress** er kroppens reaksjon på utfordringer og krav.

**Kortvarig (akutt) stress:**
- Naturlig og kan være nyttig
- Øker oppmerksomhet og ytelse
- "Kamp eller flukt"-respons (adrenalin og kortisol frigjøres)

**Langvarig (kronisk) stress:**
- Skadelig for helsen
- Øker risiko for hjertesykdom, depresjon, søvnproblemer
- Svekker immunforsvaret
- Kan føre til utbrenthet

**Stressmestring:**
- Fysisk aktivitet
- God søvn
- Sosial støtte (familie, venner)
- Avslapningsteknikker (pusteøvelser, mindfulness)
- Tidsstyring og prioritering
- Begrense skjermtid og sosiale medier`,
    },
    {
      id: 'nat-vg1-7-5-example-1',
      type: 'example',
      title: 'Eksempel: Sammenhengen mellom livsstil og type 2-diabetes',
      problem: 'Forklar hvordan livsstilsfaktorer kan føre til type 2-diabetes.',
      solution: `**Type 2-diabetes:**
Kroppen produserer insulin, men cellene reagerer ikke godt nok på det (insulinresistens). Blodsukker forblir høyt.

**Livsstilsfaktorer som øker risikoen:**

1. **Overvekt:** Fettvev, spesielt rundt magen, fører til økt insulinresistens.

2. **Fysisk inaktivitet:** Muskler bruker blodsukker. Mindre aktivitet = mindre sukkerforbruk = høyere blodsukker.

3. **Kosthold:** Mye sukker og raffinerte karbohydrater gir store blodsukkerstigninger. Over tid sliter dette ut systemet.

4. **Søvnmangel:** Påvirker hormonbalansen og øker insulinresistens.

**Forebygging:**
- Sunn vekt
- Regelmessig fysisk aktivitet
- Balansert kosthold med fiber og fullkorn
- Tilstrekkelig søvn`,
    },
    {
      id: 'nat-vg1-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hvordan fysisk aktivitet påvirker helsen positivt, og nevn helseeffekter for både kropp og psyke.',
        solution: 'Fysisk aktivitet styrker hjerte og kretsløp, forbedrer lungekapasiteten, bygger muskler og styrker skjelettet. Det hjelper å holde normal vekt, reduserer risikoen for type 2-diabetes og hjertesykdom. Psykisk sett bedrer fysisk aktivitet psykisk helse ved å frigjøre endorfiner, reduserer stress, angst og depresjon, og forbedrer søvnkvalitet, selvfølelse, konsentrasjon og læring.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hvorfor er kronisk stress skadelig for helsen? Nevn minst tre helsekonsekvenser og forklar hva man kan gjøre for å håndtere stress.',
        solution: 'Kronisk stress holder kroppen i konstant beredskap, noe som sliter på systemene. Konsekvenser: 1) Økt risiko for hjerte- og karsykdommer (høyt blodtrykk, betennelse). 2) Svekket immunforsvar (mer sårbar for infeksjoner). 3) Psykiske problemer (angst, depresjon, utbrenthet). 4) Søvnproblemer. 5) Fordøyelsesproblemer. Stressmestring: Fysisk aktivitet, god søvnhygiene, sosial støtte fra familie og venner, avslapningsteknikker som pusteøvelser og mindfulness, og å sette realistiske grenser.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Diskuter hvorfor mange ungdommer ikke får nok søvn, og hva som kan gjøres for å forbedre søvnvanene.',
        solution: 'Årsaker til søvnmangel hos ungdom: Biologisk forskyving av døgnrytmen (naturlig å sovne senere i puberteten), tidlig skolestart, mye skjermbruk om kvelden (blått lys hemmer melatonin), sosiale medier, lekser og prestasjonspress, fritidsaktiviteter. Tiltak: Etablere faste legge-rutiner, redusere skjermbruk den siste timen før sengetid, unngå koffein på ettermiddag/kveld, gjøre soverommet mørkt og stille, fysisk aktivitet på dagtid (men ikke rett før sengetid), og være bevisst på at søvn er like viktig som trening og skole.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_7_6: TextbookChapter = {
  id: 'nat-vg1-7-6',
  courseId: 'nat-vg1',
  chapterNumber: '7.6',
  title: 'Kildekritikk og helseinformasjon',
  description: 'Lær å vurdere påliteligheten i helseinformasjon fra ulike kilder og å skille mellom vitenskap og pseudovitenskap.',
  estimatedMinutes: 45,
  competenceGoals: ['vurdere pålitelighet i informasjon fra ulike kilder'],
  content: [
    {
      id: 'nat-vg1-7-6-intro',
      type: 'text',
      content: `## Helseinformasjon i mediene

Vi møter daglig påstander om helse i sosiale medier, aviser og fra venner. Hvordan vet vi hva vi kan stole på?

**Utfordringer:**
- Feilinformasjon spres raskt i sosiale medier
- Overskrifter overdriver ofte forskningsfunn
- Kommersielle interesser påvirker innholdet
- Enkelthistorier og anekdoter kan være misvisende

**Viktig å huske:**
- En studie beviser sjelden noe endelig
- Korrelasjon er ikke det samme som kausalitet
- Anekdoter er ikke vitenskapelig bevis
- "Naturlig" betyr ikke automatisk "trygt" eller "effektivt"
- Ekstraordinære påstander krever ekstraordinære bevis`,
    },
    {
      id: 'nat-vg1-7-6-def-1',
      type: 'definition',
      title: 'TONE-kriteriene for kildevurdering',
      content: `**TONE-kriteriene** er en metode for å vurdere påliteligheten til en kilde:

**T - Troverdighet:**
Hvem står bak informasjonen? Er det en anerkjent institusjon, forsker eller en tilfeldig blogg? Har avsenderen relevant kompetanse?

**O - Objektivitet:**
Er informasjonen balansert, eller prøver noen å selge noe? Finnes det interessekonflikter? Presenteres ulike synspunkter?

**N - Nøyaktighet:**
Stemmer faktapåstandene med andre kilder? Er det henvist til vitenskapelig forskning? Er tallene og fakta riktige?

**E - Egnethet:**
Er kilden relevant for det du leter etter? Er informasjonen oppdatert?

**Ekstra spørsmål å stille:**
- Når ble informasjonen publisert?
- Hvem finansierte forskningen?
- Er studien fagfellevurdert (peer reviewed)?`,
    },
    {
      id: 'nat-vg1-7-6-def-2',
      type: 'definition',
      title: 'Vitenskap vs. pseudovitenskap',
      content: `**Vitenskap:**
- Bygger på systematiske, etterprøvbare undersøkelser
- Resultatene kan gjentas av andre forskere (reproduserbarhet)
- Åpen for kritikk og revisjon
- Publiseres i fagfellevurderte tidsskrifter
- Konklusjoner justeres når ny kunnskap tilsier det

**Pseudovitenskap:**
- Fremstår som vitenskap, men mangler vitenskapelig grunnlag
- Påstander kan ikke testes eller motbevises (falsifiseres)
- Refererer ofte til "hemmelig kunnskap" eller "undertrykt forskning"
- Selger ofte produkter eller behandlinger
- Ignorerer eller avviser motbevis

**Eksempler på pseudovitenskap i helse:**
- Homeopati (ekstremt fortynnede "medisiner")
- Krystallhealing
- Mange udokumenterte kosttilskudd-påstander
- Detox-kurer uten vitenskapelig grunnlag`,
    },
    {
      id: 'nat-vg1-7-6-def-3',
      type: 'definition',
      title: 'Pålitelige helsekilder',
      content: `**Offentlige myndigheter:**
- Helsedirektoratet (helsedirektoratet.no)
- Folkehelseinstituttet (fhi.no)
- Helsenorge (helsenorge.no)
- WHO - Verdens helseorganisasjon (who.int)

**Fagfellevurderte tidsskrifter:**
- PubMed (database for medisinsk forskning)
- Tidsskrifter som The Lancet, JAMA, BMJ, New England Journal of Medicine

**Interesseorganisasjoner:**
- Kreftforeningen, Diabetesforbundet, Landsforeningen for hjerte- og lungesyke

**Varseltegn for useriøse kilder:**
- Påstander om "mirakelkurer"
- Angrep på etablert medisin og forskning
- Salg av produkter koblet til helsepåstander
- Manglende kildehenvisninger
- Bruk av enkeltstående pasienthistorier som "bevis"`,
    },
    {
      id: 'nat-vg1-7-6-example-1',
      type: 'example',
      title: 'Eksempel: Vurdere en helsepåstand',
      problem: 'Du ser en annonse på Instagram som sier: "Denne teen brenner fett mens du sover! Ned 10 kg på 2 uker - vitenskapelig bevist!" Vurder påliteligheten.',
      solution: `**Varseltegn:**

1. **For godt til å være sant:** 10 kg på 2 uker er urealistisk og potensielt farlig. Trygt vekttap er 0,5-1 kg per uke.

2. **Kommersielt formål:** Noen prøver å selge et produkt. Objektiv informasjon er lite sannsynlig.

3. **Vage referanser:** "Vitenskapelig bevist" uten konkret kilde til studien.

4. **Sosiale medier:** Lite kvalitetskontroll av annonser og påstander.

5. **Mirakelkur-retorikk:** Lover enkle løsninger på komplekse problemer.

**Konklusjon:** Svært lav troverdighet. Det finnes ingen dokumentert te som kan "brenne fett mens du sover". Vekttap krever kaloriunderskudd over tid, gjennom kostholdsendring og fysisk aktivitet.

**Bedre tilnærming:** Søk informasjon hos Helsedirektoratet om sunt vekttap.`,
    },
    {
      id: 'nat-vg1-7-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva TONE-kriteriene er, og bruk dem til å vurdere en helsepåstand du har sett i sosiale medier eller aviser.',
        solution: 'TONE-kriteriene er en metode for å vurdere pålitelighet: T (Troverdighet) - hvem står bak informasjonen? O (Objektivitet) - er informasjonen balansert? N (Nøyaktighet) - stemmer påstandene med andre kilder? E (Egnethet) - er kilden relevant og oppdatert? Eksempel: En avisartikkel om at "kaffe forårsaker kreft" - Troverdighet: Hvem er journalisten og avisen? Objektivitet: Er artikkelen balansert eller sensasjonspreget? Nøyaktighet: Hva sier originalstudien og andre kilder (WHO)? Egnethet: Er artikkelen nylig publisert?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom korrelasjon og kausalitet med et eksempel relatert til helse.',
        solution: 'Korrelasjon betyr at to ting skjer samtidig eller følger hverandre, men det betyr ikke at det ene forårsaker det andre. Kausalitet betyr at det ene faktisk forårsaker det andre. Eksempel: Studier kan vise at mennesker som spiser mye sjokolade er tynnere (korrelasjon), men det betyr ikke at sjokolade gjør deg tynnere (kausalitet). Forklaringen kan være en tredje faktor, for eksempel at tynne mennesker spiser sjokolade uten å bekymre seg for vekten. I helseforskning er det viktig å skille mellom disse, slik at vi ikke trekker feil konklusjoner om hva som er sunt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom vitenskap og pseudovitenskap, og beskriv hvordan du kan gjenkjenne pseudovitenskap.',
        solution: 'Vitenskap bygger på systematiske undersøkelser, er etterprøvbar, publiseres i fagfellevurderte tidsskrifter og er åpen for kritikk og korrigering. Pseudovitenskap fremstår som vitenskap men mangler vitenskapelig grunnlag. Kjennetegn på pseudovitenskap: 1) Påstander som ikke kan testes eller motbevises. 2) Referanser til "hemmelig kunnskap" eller "det legene ikke vil at du skal vite". 3) Ofte koblet til salg av produkter. 4) Bruker enkeltstående anekdoter som bevis. 5) Avviser all kritikk i stedet for å justere konklusjonene. Eksempler inkluderer homeopati og diverse "detox-kurer" som ikke har dokumentert effekt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// SEKSJON 8: Arv og evolusjon
// ============================================================================

export const CHAPTER_NAT_VG1_8_1: TextbookChapter = {
  id: 'nat-vg1-8-1',
  courseId: 'nat-vg1',
  chapterNumber: '8.1',
  title: 'DNA - arvematerialet',
  description: 'Lær om DNA-molekylets struktur og funksjon.',
  estimatedMinutes: 55,
  competenceGoals: ['beskrive DNA og hvordan egenskaper arves'],
  content: [
    {
      id: 'nat-vg1-8-1-intro',
      type: 'text',
      content: `## Arv og DNA

**Arv** er overføring av egenskaper fra foreldre til avkom. Det som overføres, er genetisk informasjon lagret i **DNA** (deoksyribonukleinsyre).

**Hvor finnes DNA?**
- I cellekjernen til alle levende celler
- Organisert i strukturer kalt **kromosomer**
- Mennesker har 46 kromosomer (23 par)

DNA inneholder oppskriften på alle proteiner kroppen lager, og dermed indirekte oppskriften på hvordan kroppen bygges opp og fungerer.

Oppdagelsen av DNA-strukturen i 1953 av James Watson og Francis Crick (basert på Rosalind Franklins røntgenbilder) var et av de viktigste gjennombruddene i biologiens historie.`,
    },
    {
      id: 'nat-vg1-8-1-def-1',
      type: 'definition',
      title: 'DNA-molekylets struktur',
      content: `**Dobbelheliks:** DNA har form som en vridd stige (dobbeltspiral)

**Byggesteiner - nukleotider:**
Hver nukleotid består av:
- Sukkermolekyl (deoksyribose)
- Fosfatgruppe
- Nitrogenbase (A, T, G eller C)

**De fire basene:**
- **A**denin - parer med Tymin
- **T**ymin - parer med Adenin
- **G**uanin - parer med Cytosin
- **C**ytosin - parer med Guanin

**Komplementær baseparing:**
A-T og G-C holder de to DNA-trådene sammen med hydrogenbindinger. Sukker-fosfat-kjedene danner "stolpene" i stigen, mens baseparene danner "trinnene".`,
    },
    {
      id: 'nat-vg1-8-1-def-2',
      type: 'definition',
      title: 'Gener og genom',
      content: `**Gen:** Et avgrenset område på DNA som inneholder oppskriften på ett protein (eller RNA-molekyl). Hvert gen kan ha flere varianter (alleler).

**Genom:** Hele arvematerialet til en organisme. Menneskets genom består av ca. 20 000 gener fordelt på 46 kromosomer, men genene utgjør bare ca. 2 % av DNA-et. Resten har regulerende eller ukjente funksjoner.

**Kromosom:** En lang DNA-tråd pakket sammen med proteiner (histoner). Inneholder mange hundre til tusenvis av gener.

**Genotype:** En organismes genetiske sammensetning - hvilke alleler den har.

**Fenotype:** De observerbare egenskapene (utseende, blodtype osv.) - resultat av genotype + miljø.`,
    },
    {
      id: 'nat-vg1-8-1-def-3',
      type: 'definition',
      title: 'DNA-replikasjon',
      content: `Før en celle deler seg, må DNA kopieres slik at begge dattercellene får et komplett sett.

**Steg i DNA-replikasjon:**
1. **Åpning:** Enzymet helikase åpner dobbelheliksen ved å bryte hydrogenbindingene mellom basene
2. **Kopiering:** DNA-polymerase leser av en tråd og bygger en komplementær tråd ved å sette inn riktige nukleotider
3. **To kopier:** Hver nye DNA-molekyl har en gammel og en ny tråd (semikonservativ replikasjon)

**Nøyaktighet:** DNA-polymerase gjør svært få feil (ca. 1 per milliard basepar). Korrekturlesing og reparasjonssystemer retter opp de fleste feil. De feilene som ikke rettes, kan bli mutasjoner.`,
    },
    {
      id: 'nat-vg1-8-1-example-1',
      type: 'example',
      title: 'Eksempel: Komplementær basesekvens',
      problem: 'Hvis den ene DNA-tråden har sekvensen 5\'-ATGCCGTA-3\', hva er sekvensen på den komplementære tråden?',
      solution: `**Løsning:**

Bruker baseparingsreglene: A-T og G-C

Original tråd: 5'-A T G C C G T A-3'
               |  |  |  |  |  |  |  |
Komplementær:  3'-T A C G G C A T-5'

**Svar:** Den komplementære tråden er 3'-TACGGCAT-5'
(eller skrevet fra 5' til 3': 5'-TACGGCAT-3' lest baklengs)

**Huskeregel:**
- A parer alltid med T (og omvendt)
- G parer alltid med C (og omvendt)`,
    },
    {
      id: 'nat-vg1-8-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv strukturen til DNA-molekylet.',
        solution: 'DNA er bygget opp som en dobbelheliks - to tråder som snor seg rundt hverandre. Hver tråd består av nukleotider, som igjen er bygget opp av et sukkermolekyl (deoksyribose), en fosfatgruppe og en nitrogenbase. Det finnes fire baser: adenin (A), tymin (T), guanin (G) og cytosin (C). De to trådene holdes sammen av hydrogenbindinger mellom basene: A parer med T, og G parer med C. Sukker-fosfat-kjedene danner sidene i stigen, mens baseparene danner trinnene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-8-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Forklar forskjellen mellom gen, kromosom og genom.',
        solution: 'Et gen er et avgrenset område på DNA som inneholder oppskriften på ett protein. Et kromosom er en lang DNA-tråd pakket sammen med proteiner, og inneholder mange gener. Genomet er hele arvematerialet til en organisme, altså summen av alle genene fordelt på alle kromosomene. Mennesker har ca. 20 000 gener fordelt på 46 kromosomer (23 par).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-8-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'En DNA-tråd har sekvensen GCATTAGC. Skriv den komplementære sekvensen og forklar hvorfor DNA-replikasjon er viktig.',
        solution: 'Ved å bruke baseparingsreglene (A-T og G-C): G parer med C, C parer med G, A parer med T, T parer med A. Original: GCATTAGC. Komplementær: CGTAATCG. DNA-replikasjon er viktig fordi alle celler i kroppen trenger et komplett sett med DNA. Før en celle kan dele seg, må hele DNA-et kopieres nøyaktig, slik at begge dattercellene får sin egen fullstendige kopi av arvematerialet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_8_2: TextbookChapter = {
  id: 'nat-vg1-8-2',
  courseId: 'nat-vg1',
  chapterNumber: '8.2',
  title: 'Gener og proteinsyntese',
  description: 'Forstå hvordan genetisk informasjon omsettes til proteiner gjennom transkripsjon og translasjon.',
  estimatedMinutes: 55,
  competenceGoals: ['beskrive DNA og hvordan egenskaper arves'],
  content: [
    {
      id: 'nat-vg1-8-2-intro',
      type: 'text',
      content: `## Fra DNA til protein

Gener inneholder informasjon, men det er **proteiner** som utfører det meste av arbeidet i cellen.

**Det sentrale dogme i molekylærbiologien:**
DNA --> RNA --> Protein

Informasjonen i DNA oversettes til proteiner i to hovedsteg:
1. **Transkripsjon:** DNA kopieres til mRNA (budbringer-RNA) i cellekjernen
2. **Translasjon:** mRNA leses av og oversettes til protein ved ribosomene i cytoplasma

Tre baser i DNA/RNA kalles et **kodon** og koder for en bestemt aminosyre. Denne kodetabellen kalles den genetiske koden.`,
    },
    {
      id: 'nat-vg1-8-2-def-1',
      type: 'definition',
      title: 'Transkripsjon',
      content: `**Transkripsjon** = Å skrive om DNA-sekvensen til mRNA (budbringer-RNA)

**Steg:**
1. RNA-polymerase binder seg til starten av genet (promotorområdet)
2. DNA-dobbelheliksen åpnes
3. RNA-polymerase leser av den ene DNA-tråden og bygger en komplementær mRNA-tråd
4. mRNA forlater cellekjernen gjennom kjerneporer og fraktes til ribosomene

**RNA vs DNA:**
- RNA har uracil (U) i stedet for tymin (T)
- RNA har ribose i stedet for deoksyribose som sukkermolekyl
- RNA er enkelttrådet (ikke dobbelheliks)

Baseparingen ved transkripsjon: A i DNA gir U i RNA, T i DNA gir A i RNA, G gir C, C gir G.`,
    },
    {
      id: 'nat-vg1-8-2-def-2',
      type: 'definition',
      title: 'Den genetiske koden',
      content: `**Kodon:** Tre baser i mRNA som koder for en bestemt aminosyre

Med 4 baser og 3 posisjoner: 4 x 4 x 4 = 64 mulige kodoner

**Egenskaper ved den genetiske koden:**
- **Universal:** Samme kode brukes i nesten alle organismer (fra bakterier til mennesker)
- **Degenerert:** Flere kodoner kan kode for samme aminosyre (64 kodoner for 20 aminosyrer)
- **Startkodon:** AUG koder for aminosyren metionin og signaliserer start
- **Stoppkodoner:** UAA, UAG, UGA signaliserer at proteinet er ferdig

Eksempler: UUU = fenylalanin, GCA = alanin, AAA = lysin, GGG = glycin`,
    },
    {
      id: 'nat-vg1-8-2-def-3',
      type: 'definition',
      title: 'Translasjon',
      content: `**Translasjon** = Å oversette mRNA-sekvensen til protein ved ribosomene

**Komponenter:**
- **mRNA:** Bærer den genetiske informasjonen fra DNA
- **tRNA (transfer-RNA):** Transporterer aminosyrer. Har et antikodon som matcher kodonet i mRNA
- **Ribosom:** Cellens "proteinfabrikk" som setter sammen aminosyrene

**Steg:**
1. mRNA bindes til ribosomet
2. tRNA med riktig antikodon bringer en aminosyre til ribosomet
3. Aminosyrene kobles sammen med peptidbindinger
4. Ribosomet beveger seg langs mRNA kodon for kodon
5. Prosessen stopper når ribosomet når et stoppkodon
6. Den ferdige proteinkjeden frigjøres og folder seg til sin tredimensjonale form`,
    },
    {
      id: 'nat-vg1-8-2-example-1',
      type: 'example',
      title: 'Eksempel: Fra DNA til aminosyresekvens',
      problem: 'DNA-sekvensen TAC-GCA-AAA-ATT skal transkriberes og translateres. Hva blir aminosyresekvensen?',
      solution: `**Steg 1: Transkripsjon (DNA --> mRNA)**
DNA:  TAC - GCA - AAA - ATT
      |     |     |     |
mRNA: AUG - CGU - UUU - UAA

(Husk: A<->U og G<->C i RNA)

**Steg 2: Translasjon (mRNA --> protein)**
Bruk kodetabellen:
- AUG = Metionin (startkodon)
- CGU = Arginin
- UUU = Fenylalanin
- UAA = STOPP

**Svar:** Aminosyresekvensen blir Met-Arg-Phe (metionin-arginin-fenylalanin)`,
    },
    {
      id: 'nat-vg1-8-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom transkripsjon og translasjon.',
        solution: 'Transkripsjon er prosessen der DNA-sekvensen kopieres over til mRNA. Dette skjer i cellekjernen, og enzymet RNA-polymerase bygger mRNA-tråden. Translasjon er prosessen der mRNA-sekvensen oversettes til en aminosyresekvens (protein). Dette skjer ved ribosomene i cytoplasma, der tRNA bringer aminosyrer som kobles sammen basert på mRNA-kodonene. Kort sagt: transkripsjon = DNA til mRNA (avskrift), translasjon = mRNA til protein (oversettelse).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-8-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er et kodon, og hvorfor trenger vi tre baser for å kode for en aminosyre?',
        solution: 'Et kodon er en sekvens av tre nukleotidbaser i mRNA som koder for en bestemt aminosyre. Vi trenger tre baser fordi det finnes 20 ulike aminosyrer, men bare 4 ulike baser. Med bare en base kunne vi kode for 4 aminosyrer (4 i 1. = 4), med to baser 16 aminosyrer (4 i 2. = 16). Først med tre baser får vi 64 muligheter (4 i 3. = 64), nok til å dekke alle 20 aminosyrer pluss start- og stoppkodoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-8-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'mRNA-sekvensen er AUG-GGC-UCA-UGA. Bruk en kodetabell til å finne aminosyresekvensen.',
        solution: 'AUG = Metionin (start), GGC = Glycin, UCA = Serin, UGA = Stopp. Aminosyresekvensen blir derfor Met-Gly-Ser (metionin-glycin-serin). Proteinet er tre aminosyrer langt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_8_3: TextbookChapter = {
  id: 'nat-vg1-8-3',
  courseId: 'nat-vg1',
  chapterNumber: '8.3',
  title: 'Arv og genetisk variasjon',
  description: 'Lær om hvordan egenskaper arves etter Mendels lover og hvordan genetisk variasjon oppstår.',
  estimatedMinutes: 50,
  competenceGoals: ['beskrive DNA og hvordan egenskaper arves, og gjøre rede for hvordan arv er en forutsetning for evolusjon'],
  content: [
    {
      id: 'nat-vg1-8-3-intro',
      type: 'text',
      content: `## Hvordan arves egenskaper?

Ved seksuell formering får avkommet gener fra begge foreldrene. Dette gir genetisk variasjon - en grunnleggende forutsetning for evolusjon.

**Mendels lover:**
Gregor Mendel oppdaget grunnleggende arveregler på 1800-tallet ved å studere erteplanter. Han er kjent som "genetikkens far".

**Viktige begreper:**
- **Alleler:** Ulike varianter av samme gen (f.eks. allelet for blå øyne og allelet for brune øyne)
- **Homozygot:** To like alleler (AA eller aa)
- **Heterozygot:** To ulike alleler (Aa)
- **Dominant:** Allel som kommer til uttrykk selv i heterozygot tilstand (A)
- **Recessiv:** Allel som bare kommer til uttrykk i homozygot tilstand (a)`,
    },
    {
      id: 'nat-vg1-8-3-def-1',
      type: 'definition',
      title: 'Kilder til genetisk variasjon',
      content: `**1. Mutasjoner:**
Tilfeldige endringer i DNA-sekvensen
- Punktmutasjoner (en base endres)
- Delesjoner (baser fjernes)
- Insersjoner (baser legges til)
- Kan være nøytrale, skadelige eller fordelaktige
- Er den ultimate kilden til nye alleler

**2. Genetisk rekombinasjon:**
Ved meiose (dannelse av kjønnsceller) blandes gener fra mor og far
- Overkrysning mellom homologe kromosomer (utveksling av DNA-segmenter)
- Tilfeldig fordeling av kromosomer til kjønnscellene

**3. Tilfeldig befruktning:**
Hvilken sædcelle som befrukter hvilken eggcelle er tilfeldig, noe som gir unike genkombinasjoner i hvert avkom`,
    },
    {
      id: 'nat-vg1-8-3-def-2',
      type: 'definition',
      title: 'Mutasjoner og deres konsekvenser',
      content: `**Typer mutasjoner:**

**Stille mutasjon:** Endringen gir samme aminosyre (fordi den genetiske koden er degenerert - flere kodoner koder for samme aminosyre)

**Missense-mutasjon:** Endringen gir en annen aminosyre, som kan endre proteinets funksjon

**Nonsense-mutasjon:** Endringen skaper et stoppkodon, som gir et forkortet og vanligvis ikke-funksjonelt protein

**Frameshift-mutasjon:** Innsetting eller fjerning av baser som ikke er delelig med 3, slik at hele leserammen forskyves. Gir oftest et helt ødelagt protein.

**Årsaker til mutasjoner:**
- Feil ved DNA-replikasjon (spontane mutasjoner)
- Kjemiske stoffer (mutagener, f.eks. stoffer i tobakksrøyk)
- Stråling (UV-stråling, radioaktiv stråling)`,
    },
    {
      id: 'nat-vg1-8-3-example-1',
      type: 'example',
      title: 'Eksempel: Krysning med Mendels lover',
      problem: 'En erteplante med gule erter (YY) krysses med en plante med grønne erter (yy). Gul farge er dominant. Hva blir fenotypen i F1-generasjonen og F2-generasjonen?',
      solution: `**F1-generasjon (YY x yy):**

Foreldrekryss:
     Y    Y
y   Yy   Yy
y   Yy   Yy

Alle F1-avkom blir **Yy** (heterozygote)
Fenotype: **100 % gule erter** (Y er dominant)

**F2-generasjon (Yy x Yy):**

     Y    y
Y   YY   Yy
y   Yy   yy

Genotyper: 1 YY : 2 Yy : 1 yy
Fenotyper: **3 gule : 1 gronn** (75 % gule, 25 % gronne)

Dette er det klassiske 3:1-forholdet Mendel oppdaget.`,
    },
    {
      id: 'nat-vg1-8-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom genotype og fenotype, og gi et eksempel.',
        solution: 'Genotype er organismens genetiske sammensetning - hvilke alleler den har for et gen (f.eks. Aa eller AA). Fenotype er de observerbare egenskapene som kommer til uttrykk (f.eks. brun øyefarge). Fenotypen er resultatet av genotypen pluss påvirkning fra miljøet. Eksempel: To planter med genotypene AA (homozygot dominant) og Aa (heterozygot) kan ha samme fenotype (gule erter) fordi A er dominant over a.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-8-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn tre kilder til genetisk variasjon og forklar kort hver av dem.',
        solution: '1) Mutasjoner: Tilfeldige endringer i DNA-sekvensen som kan gi nye alleler. De er den ultimate kilden til ny genetisk variasjon. 2) Genetisk rekombinasjon: Ved meiose blandes gener fra mor og far gjennom overkrysning (utveksling av DNA mellom homologe kromosomer) og tilfeldig kromosomfordeling. 3) Tilfeldig befruktning: Hvilke kjønnsceller som møtes ved befruktning er tilfeldig, noe som gir nye genkombinasjoner i hvert avkom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-8-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvorfor genetisk variasjon er viktig for evolusjon.',
        solution: 'Evolusjon krever variasjon i populasjonen som naturlig utvalg kan virke på. Uten genetisk variasjon ville alle individer vært genetisk like, og det ville ikke vært noe råmateriale for utvalg. Når miljøet endrer seg, er det de individene med de best tilpassede egenskapene som overlever og formerer seg. Genetisk variasjon sikrer at det alltid finnes individer med ulike egenskaper som kan være fordelaktige under nye forhold. Uten variasjon ville en art ikke kunne tilpasse seg og ville risikere utryddelse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_8_4: TextbookChapter = {
  id: 'nat-vg1-8-4',
  courseId: 'nat-vg1',
  chapterNumber: '8.4',
  title: 'Evolusjon og naturlig utvalg',
  description: 'Forstå evolusjonsteoriens grunnprinsipper og mekanismene bak evolusjon.',
  estimatedMinutes: 55,
  competenceGoals: ['gjøre rede for hvordan arv er en forutsetning for evolusjon'],
  content: [
    {
      id: 'nat-vg1-8-4-intro',
      type: 'text',
      content: `## Hva er evolusjon?

**Evolusjon** er endring i sammensetningen av gener (allelfrekvenser) i en populasjon over generasjoner.

**Charles Darwin (1859):**
I verket "Artenes opprinnelse" presenterte Darwin teorien om evolusjon ved naturlig utvalg, en av de mest innflytelsesrike vitenskapelige ideene noensinne.

**Darwins observasjoner:**
1. Individer i en populasjon varierer i sine egenskaper
2. Noen av disse variasjonene er arvelige
3. Flere individer fødes enn som overlever til voksen alder (konkurranse om ressurser)
4. Individer med fordelaktige egenskaper overlever og formerer seg oftere

Dette fører til at fordelaktige egenskaper blir mer vanlige i populasjonen over tid.`,
    },
    {
      id: 'nat-vg1-8-4-def-1',
      type: 'definition',
      title: 'Naturlig utvalg',
      content: `**Naturlig utvalg** er prosessen der individer med egenskaper som gir bedre overlevelse og reproduksjon, etterlater seg flere avkom.

**Forutsetninger:**
1. **Variasjon:** Individer i populasjonen er forskjellige
2. **Arv:** Egenskapene kan arves (genetisk grunnlag)
3. **Overlevelse:** Ikke alle overlever til reproduksjon (kamp om ressurser)
4. **Reproduksjon:** De best tilpassede får flere avkom som arver de fordelaktige egenskapene

**Resultat:** Over tid endres egenskapene i populasjonen:
- Fordelaktige egenskaper øker i frekvens
- Ufordelaktige egenskaper reduseres

**Viktig:** Naturlig utvalg virker på fenotyper (de synlige egenskapene), men det er genotypene (genene) som arves. Naturlig utvalg skaper ikke nye egenskaper, det favoriserer de som allerede finnes.`,
    },
    {
      id: 'nat-vg1-8-4-def-2',
      type: 'definition',
      title: 'Evolusjonære mekanismer',
      content: `Evolusjon drives av flere mekanismer:

**1. Naturlig utvalg:**
Seleksjon for egenskaper som øker overlevelse og reproduksjon. Den viktigste mekanismen for tilpasning.

**2. Seksuelt utvalg:**
Seleksjon for egenskaper som øker sjansen for å få en partner, selv om de ikke øker overlevelse (f.eks. påfuglens hale, hjortens gevir).

**3. Genetisk drift:**
Tilfeldige endringer i genfrekvenser som ikke skyldes seleksjon. Spesielt viktig i små populasjoner der tilfeldigheter kan ha stor effekt.

**4. Genflyt:**
Gener spres mellom populasjoner gjennom migrasjon av individer. Øker likheten mellom populasjoner.

**5. Mutasjoner:**
Gir nye alleler som utvalg kan virke på. Er det ultimate råmaterialet for all evolusjon.`,
    },
    {
      id: 'nat-vg1-8-4-def-3',
      type: 'definition',
      title: 'Tilpasning',
      content: `**Tilpasning:** En arvelig egenskap som øker en organismes evne til å overleve og formere seg i sitt miljø. Tilpasninger oppstår over mange generasjoner gjennom naturlig utvalg.

**Eksempler på tilpasninger:**
- Kamelens pukkel (fettlager for energi i ørken)
- Isbjørnens hvite pels (kamuflasje i snø)
- Kaktusens torner (beskyttelse og redusert vanntap)
- Kolibrienes lange nebb (tilpasset blomsterformer)
- Bakteriers antibiotikaresistens

**Viktig å forstå:**
- Tilpasninger er ikke "planlagte" - de oppstår gjennom naturlig utvalg over tid
- Organismer tilpasser seg ikke aktivt - det er populasjonen som endrer seg over generasjoner
- Ikke alle egenskaper er tilpasninger - noen er tilfeldige (genetisk drift)
- Tilpasning er alltid til et bestemt miljø - endrer miljøet seg, kan tilpasningen bli ugunstig`,
    },
    {
      id: 'nat-vg1-8-4-example-1',
      type: 'example',
      title: 'Eksempel: Bjørkemåleren (peppered moth)',
      problem: 'Forklar hvordan industrialiseringen i England førte til endring i fargene hos bjørkemålere.',
      solution: `**Bakgrunn:**
Bjørkemålere finnes i lys og mørk variant. Før industrialiseringen var den lyse varianten vanligst fordi den var godt kamuflert på lysfarget bjørkebark dekket av lav.

**Under industrialiseringen (1800-tallet):**
1. Sot fra fabrikker dekket trærne og drepte laven
2. Barken ble mørk
3. Lyse møll ble lett synlige for fugler og ble spist
4. Mørke møll var godt kamuflert og overlevde og formerte seg
5. Andelen mørke møll økte fra ca. 2 % til over 90 %

**Etter renere luft (1900-tallet):**
1. Luftforurensningen ble redusert
2. Lav vokste tilbake, barken ble lysere igjen
3. Lyse møll ble igjen bedre kamuflert
4. Andelen lyse møll økte igjen

**Dette er evolusjon i aksjon:** Endring i genfrekvenser (mørk/lys) drevet av naturlig utvalg (fuglenes predasjon) som respons på miljøendringer.`,
    },
    {
      id: 'nat-vg1-8-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva naturlig utvalg er og hvilke forutsetninger som må være til stede.',
        solution: 'Naturlig utvalg er prosessen der individer med egenskaper som gir bedre overlevelse og reproduksjon, etterlater seg flere avkom. Forutsetninger: 1) Det må finnes variasjon i populasjonen. 2) Variasjonen må være arvelig (genetisk grunnlag). 3) Ikke alle individer overlever til reproduksjon (kamp om ressurser). 4) De best tilpassede individene får flere avkom som arver de fordelaktige egenskapene. Over tid fører dette til at fordelaktige egenskaper blir vanligere i populasjonen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-8-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Gi et eksempel på en tilpasning hos et dyr eller en plante, og forklar hvordan denne tilpasningen kan ha utviklet seg gjennom naturlig utvalg.',
        solution: 'Eksempel: Sjiraffens lange hals. Opprinnelig varierte halslengden i sjiraffpopulasjonen på grunn av genetisk variasjon. I perioder med konkurranse om mat kunne sjiraffer med litt lengre hals nå blader høyere opp i trærne som andre ikke kunne nå. Disse overlevde bedre og fikk flere avkom som arvet genene for lengre hals. Over mange generasjoner ble lengre hals stadig vanligere i populasjonen, fordi individer med kortere hals fikk færre avkom.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-8-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom naturlig utvalg og genetisk drift.',
        solution: 'Naturlig utvalg er en retningsbestemt prosess der egenskaper som øker overlevelse og reproduksjon blir vanligere i populasjonen. Det er forutsigbart i den forstand at fordelaktige egenskaper øker i frekvens. Genetisk drift er tilfeldige endringer i genfrekvenser som ikke skyldes seleksjon. Drift er spesielt viktig i små populasjoner, der tilfeldige hendelser (som at noen individer ikke får avkom av ren tilfeldighet) kan føre til at alleler forsvinner eller blir dominerende uavhengig av om de er fordelaktige. Naturlig utvalg fører til tilpasning, mens drift gir tilfeldige endringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

export const CHAPTER_NAT_VG1_8_5: TextbookChapter = {
  id: 'nat-vg1-8-5',
  courseId: 'nat-vg1',
  chapterNumber: '8.5',
  title: 'Artsdannelse og evolusjonsbevis',
  description: 'Lær om hvordan nye arter dannes og hvilke bevis vi har for evolusjon.',
  estimatedMinutes: 50,
  competenceGoals: ['gjøre rede for hvordan arv er en forutsetning for evolusjon'],
  content: [
    {
      id: 'nat-vg1-8-5-intro',
      type: 'text',
      content: `## Hvordan oppstår nye arter?

**Artsdannelse** (speciasjon) er prosessen der en populasjon splittes i to eller flere nye arter som ikke lenger kan formere seg med hverandre.

For at artsdannelse skal skje, må populasjoner bli **reproduktivt isolert** - de må slutte å utveksle gener. Over tid akkumuleres genetiske forskjeller gjennom naturlig utvalg, genetisk drift og mutasjoner, inntil populasjonene blir så ulike at de ikke lenger kan få fruktbart avkom sammen.

Evolusjon har pågått i over 3,5 milliarder år og har gitt opphav til alt det biologiske mangfoldet vi ser i dag. Men hvordan vet vi at evolusjon faktisk har skjedd? Bevisene kommer fra mange ulike vitenskapelige fagfelt.`,
    },
    {
      id: 'nat-vg1-8-5-def-1',
      type: 'definition',
      title: 'Typer artsdannelse',
      content: `**Allopatrisk artsdannelse** (geografisk isolasjon):
Den vanligste formen for artsdannelse. En fysisk barriere (fjellkjede, elv, hav, isbre) deler en populasjon i to grupper som ikke lenger kan utveksle gener.
- Eksempel: Darwins finker på Galapagosøyene - forfedrene ankom fra fastlandet og utviklet seg til ulike arter på ulike øyer med ulike nisjer.
- Eksempel: Ekornet i Grand Canyon - nordlig og sørlig populasjon ble isolert og utviklet seg til ulike underarter.

**Sympatrisk artsdannelse** (uten geografisk isolasjon):
Artsdannelse innenfor samme geografiske område. Kan skje gjennom:
- Polyploidi (fordobling av kromosomtallet, vanlig hos planter)
- Spesialisering på ulike nisjer eller matkilder
- Endring i parringstidspunkt

**Reproduktiv isolasjon** kan skyldes:
- Geografiske barrierer
- Ulik parringsatferd eller partnervalg
- Ulik parringstid (sesong)
- Mekanisk inkompatibilitet
- Genetisk inkompatibilitet (avkom er sterile, f.eks. muldyr)`,
    },
    {
      id: 'nat-vg1-8-5-def-2',
      type: 'definition',
      title: 'Bevis for evolusjon',
      content: `Evolusjon støttes av overveldende bevis fra mange fagfelt:

**1. Fossiler:**
- Viser hvordan arter har endret seg over tid
- Overgangsfossiler (f.eks. Tiktaalik - mellom fisk og landlevende dyr, Archaeopteryx - mellom dinosaur og fugl)
- Fossiler finnes i riktig geologisk rekkefølge

**2. Sammenlignende anatomi:**
- **Homologe strukturer:** Samme grunnleggende oppbygning, men ulik funksjon (f.eks. armene til menneske, vingen til fugl, luffen til hval - alle har de samme knoklene)
- **Analoge strukturer:** Ulik opprinnelse, men lik funksjon (f.eks. vingen til insekt og fugl)
- **Rudimentære organer:** Reduserte organer uten tydelig funksjon (f.eks. blindtarmen, visdomstenner)

**3. Embryologi:**
Fostere hos virveldyr ligner hverandre i tidlige stadier (f.eks. gjellespalter, hale)`,
    },
    {
      id: 'nat-vg1-8-5-def-3',
      type: 'definition',
      title: 'Molekylære bevis og biogeografi',
      content: `**4. DNA og molekylære bevis:**
- Alle levende organismer bruker DNA som arvemateriale og den samme genetiske koden - dette tyder på felles opphav
- Nært beslektede arter har likere DNA-sekvenser enn fjernt beslektede
- DNA-sammenligninger brukes til å bygge stamtrær (fylogenetiske trær)
- Mennesker og sjimpanser deler ca. 98,7 % av DNA-et

**5. Biogeografi (artenes utbredelse):**
- Øyarter ligner arter på nærmeste fastland (ikke arter på andre øyer med likt klima)
- Isolerte områder (Australia, Madagaskar) har unik fauna
- Innvandringsruter kan spores gjennom fossiler og DNA

**Konvergent vs. divergent evolusjon:**
- **Konvergent:** Ubeslektede arter utvikler lignende egenskaper i lignende miljøer (f.eks. delfin og hai har lik kroppsform)
- **Divergent:** Nærbeslektede arter utvikler ulike egenskaper i ulike miljøer (f.eks. Darwins finker med ulike nebbformer)`,
    },
    {
      id: 'nat-vg1-8-5-example-1',
      type: 'example',
      title: 'Eksempel: Homologe strukturer som evolusjonsbevis',
      problem: 'Forklar hvorfor armen til et menneske, vingen til en fugl og luffen til en hval regnes som homologe strukturer, og hva dette forteller oss om evolusjon.',
      solution: `**Homologe strukturer** er strukturer som har ulik funksjon, men samme grunnleggende oppbygning, fordi de stammer fra en felles forfader.

**Sammenligning av forlemmene:**
- **Menneskearm:** Griper, bærer, bruker verktøy
- **Fuglevinge:** Flyving
- **Hvalluffe:** Svømming
- **Flaggermusvinge:** Flyving

**Likhetene:**
Alle har de samme knoklene: overarmsben, to underarmsben (radius og ulna), håndrotben, mellomhandsben og fingerben. Knoklene er tilpasset ulike funksjoner, men grunnmønsteret er det samme.

**Konklusjon:**
Denne likheten i grunnstruktur tyder på at alle disse dyrene stammer fra en felles forfader som hadde dette grunnleggende knokkelmønsteret. Over tid har naturlig utvalg formet forlemmene til ulike funksjoner i ulike miljøer. Hadde de vært skapt uavhengig av hverandre, ville det ikke vært noen grunn til at de hadde samme grunnstruktur.`,
    },
    {
      id: 'nat-vg1-8-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar hva allopatrisk artsdannelse er, og gi et eksempel.',
        solution: 'Allopatrisk artsdannelse skjer når en populasjon deles i to eller flere grupper av en geografisk barriere (fjellkjede, elv, hav) slik at gruppene ikke lenger kan utveksle gener. Over tid utsettes gruppene for ulike seleksjonstrykk og akkumulerer genetiske forskjeller gjennom naturlig utvalg, drift og mutasjoner. Til slutt blir de så forskjellige at de ikke kan formere seg med hverandre - de har blitt separate arter. Eksempel: Darwins finker på Galapagosøyene stammet fra en felles forfader fra fastlandet, men utviklet seg til ulike arter med ulike nebbformer tilpasset ulike matkilder på de forskjellige øyene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-8-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn og forklar tre ulike typer bevis for evolusjon.',
        solution: '1) Fossiler: Bevarte rester av utdødde organismer viser hvordan arter har endret seg over tid. Overgangsfossiler som Archaeopteryx (mellom dinosaur og fugl) viser evolusjonære mellomformer. 2) Sammenlignende anatomi: Homologe strukturer (f.eks. armen til menneske, vingen til fugl og luffen til hval) har samme grunnleggende oppbygning men ulik funksjon, noe som tyder på felles forfader. 3) DNA-bevis: Alle organismer bruker DNA og den samme genetiske koden. Nært beslektede arter har likere DNA, f.eks. deler mennesker og sjimpanser ca. 98,7 % av DNA-sekvensene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-8-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom homologe og analoge strukturer, og hva de forteller oss om evolusjon.',
        solution: 'Homologe strukturer har samme grunnleggende oppbygning (de stammer fra en felles forfader) men kan ha ulik funksjon. Eksempel: Forlemmer hos menneske, fugl og hval har alle de samme knoklene (overarmsben, underarmsben, håndrotben osv.) selv om de brukes til å gripe, fly og svømme. Dette er bevis for felles avstamning (divergent evolusjon). Analoge strukturer har lik funksjon men ulik oppbygning og ulikt evolusjonært opphav. Eksempel: Insektvinge og fuglevinge brukes begge til å fly, men de har helt forskjellig struktur og har utviklet seg uavhengig av hverandre. Dette kalles konvergent evolusjon og viser at lignende miljøutfordringer kan gi lignende løsninger hos ubeslektede arter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Export av alle kapitler i DEL 4
// ============================================================================

export const NAT_VG1_CHAPTERS_DEL4: TextbookChapter[] = [
  // Seksjon 7: Ernæring, helse og livsstil
  CHAPTER_NAT_VG1_7_1,
  CHAPTER_NAT_VG1_7_2,
  CHAPTER_NAT_VG1_7_3,
  CHAPTER_NAT_VG1_7_4,
  CHAPTER_NAT_VG1_7_5,
  CHAPTER_NAT_VG1_7_6,
  // Seksjon 8: Arv og evolusjon
  CHAPTER_NAT_VG1_8_1,
  CHAPTER_NAT_VG1_8_2,
  CHAPTER_NAT_VG1_8_3,
  CHAPTER_NAT_VG1_8_4,
  CHAPTER_NAT_VG1_8_5,
];
