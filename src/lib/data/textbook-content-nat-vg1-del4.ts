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
      id: 'nat-vg1-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Forklar forskjellen mellom monosakkarider, disakkarider og polysakkarider. Gi et eksempel på hver.',
        solution: 'Monosakkarider er enkle sukkerarter som består av ett sukkermolekyl, for eksempel glukose (druesukker). Disakkarider er satt sammen av to monosakkarider, for eksempel sukrose (bordsukker) som er satt sammen av glukose og fruktose. Polysakkarider er lange kjeder av mange monosakkarider, for eksempel stivelse som finnes i poteter og korn og fungerer som energilager i planter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilket av følgende er en disakkarid?',
        options: [
          { id: 'a', text: 'Glukose', isCorrect: false },
          { id: 'b', text: 'Stivelse', isCorrect: false },
          { id: 'c', text: 'Laktose', isCorrect: true },
          { id: 'd', text: 'Cellulose', isCorrect: false },
        ],
        solution: 'Laktose (melkesukker) er en disakkarid som består av glukose og galaktose. Glukose er en monosakkarid, mens stivelse og cellulose er polysakkarider.',
      },
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
      id: 'nat-vg1-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hvordan hormonene insulin og glukagon samarbeider for å regulere blodsukkernivået i kroppen. Hva skjer etter et karbohydratrikt måltid?',
        solution: 'Insulin og glukagon er hormoner fra bukspyttkjertelen som regulerer blodsukkeret i et samspill. Etter et karbohydratrikt måltid stiger blodsukkeret fordi karbohydratene brytes ned til glukose. Da skiller bukspyttkjertelen ut insulin, som hjelper cellene med å ta opp glukose fra blodet. Overskudd av glukose lagres som glykogen i lever og muskler. Blodsukkeret synker tilbake til normalt nivå. Mellom måltidene, når blodsukkeret er lavt, skilles glukagon ut. Glukagon stimulerer nedbrytning av glykogen til glukose, som frigjøres til blodet. Slik holdes blodsukkeret stabilt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hva er hovedfunksjonen til glykogen i kroppen?',
        options: [
          { id: 'a', text: 'Det bygger opp celleveggene i planteceller', isCorrect: false },
          { id: 'b', text: 'Det fungerer som korttids energilager i lever og muskler', isCorrect: true },
          { id: 'c', text: 'Det transporterer oksygen i blodet', isCorrect: false },
          { id: 'd', text: 'Det bryter ned fett til fettsyrer', isCorrect: false },
        ],
        solution: 'Glykogen er kroppens korttids energilager for karbohydrater og lagres i lever og muskler. Når blodsukkeret synker, kan glykogen raskt brytes ned til glukose. Celleveggbygging gjøres av cellulose (i planter), oksygentransport gjøres av hemoglobin, og nedbrytning av fett gjøres av lipaser.',
      },
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
    // --- Oppsummering ---
    {
      id: 'nat-vg1-7-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Karbohydrater er kroppens viktigste energikilde**: De gir 17 kJ per gram og brytes ned til glukose som cellene bruker i celleånding.
- **Tre typer karbohydrater**: Monosakkarider (enkle sukkerarter som glukose), disakkarider (doble sukkerarter som sukrose) og polysakkarider (sammensatte som stivelse og glykogen).
- **Fiber er ufordøyelige karbohydrater**: Løselig fiber senker blodsukker og kolesterol, uløselig fiber fremmer tarmhelse. Anbefalt inntak er 25-35 g per dag.
- **Blodsukkerregulering**: Insulin senker blodsukkeret, glukagon øker det. Glykemisk indeks (GI) måler hvor raskt mat øker blodsukkeret.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Monosakkarid | Enkel sukkerart, f.eks. glukose og fruktose |
| Disakkarid | To monosakkarider koblet sammen, f.eks. sukrose |
| Polysakkarid | Lang kjede av monosakkarider, f.eks. stivelse og glykogen |
| Fiber | Ufordøyelige karbohydrater fra plantemat |
| Glykemisk indeks (GI) | Mål på hvor raskt karbohydrater øker blodsukkeret |
| Insulin | Hormon som senker blodsukkeret |`,
    },
    // --- Samleoppgaver ---
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
    {
      id: 'nat-vg1-7-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-1-ex-7',
        number: '7',
        type: 'classic',
        task: 'En elev spiser et måltid med 60 g karbohydrater, 20 g protein og 10 g fett. Beregn det totale energiinnholdet i kilojoule, og finn prosentandelen av energien som kommer fra karbohydrater.',
        solution: 'Karbohydrater: 60 g x 17 kJ/g = 1020 kJ. Protein: 20 g x 17 kJ/g = 340 kJ. Fett: 10 g x 37 kJ/g = 370 kJ. Totalt: 1020 + 340 + 370 = 1730 kJ. Prosentandel fra karbohydrater: (1020 / 1730) x 100 % = 59 %. Omtrent 59 % av energien i dette måltidet kommer fra karbohydrater, noe som er i tråd med anbefalingene om at 45-60 % av energien bør komme fra karbohydrater.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-1-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Store norske leksikon: [Karbohydrater](https://snl.no/karbohydrater)
- Helsedirektoratet: [Kostråd om karbohydrater og fiber](https://www.helsedirektoratet.no/faglige-rad/kostradene)
- Folkehelseinstituttet: [Kosthold og helse](https://www.fhi.no/nettpub/hin/levevaner/kosthold/)
- Bærug, A. m.fl. (2019). *Biologi for helse- og oppvekstfag*. Gyldendal.`,
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
      id: 'nat-vg1-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er en peptidbinding?',
        options: [
          { id: 'a', text: 'En binding mellom to monosakkarider', isCorrect: false },
          { id: 'b', text: 'En binding mellom to fettsyrer og glyserol', isCorrect: false },
          { id: 'c', text: 'En kjemisk binding som kobler to aminosyrer sammen', isCorrect: true },
          { id: 'd', text: 'En hydrogenbinding mellom DNA-baser', isCorrect: false },
        ],
        solution: 'En peptidbinding er den kjemiske bindingen som kobler to aminosyrer sammen. Den dannes ved en kondensasjonsreaksjon der et vannmolekyl frigjøres. Mange aminosyrer koblet sammen med peptidbindinger danner et polypeptid, som kan folde seg til et funksjonelt protein.',
      },
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
      id: 'nat-vg1-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-2-ex-5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva skjer med et protein dersom det utsettes for sterk varme?',
        options: [
          { id: 'a', text: 'Det brytes ned til enkeltaminosyrer', isCorrect: false },
          { id: 'b', text: 'Det denatureres, dvs. den tredimensjonale formen ødelegges', isCorrect: true },
          { id: 'c', text: 'Det omdannes til karbohydrater', isCorrect: false },
          { id: 'd', text: 'Det blir mer effektivt og arbeider raskere', isCorrect: false },
        ],
        solution: 'Ved sterk varme denatureres proteinet, noe som betyr at den tredimensjonale strukturen ødelegges. Aminosyrekjeden foldes ikke lenger riktig, og proteinet mister sin funksjon. Et hverdagslig eksempel er steking av egg: det hvite (albumin) endres fra gjennomsiktig til hvitt fordi proteinet denatureres. Aminosyrene brytes ikke fra hverandre, men den romlige strukturen som gir funksjonen endres.',
      },
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
    // --- Oppsummering ---
    {
      id: 'nat-vg1-7-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Proteiner er bygget opp av aminosyrer**: 20 ulike aminosyrer kobles sammen med peptidbindinger til lange kjeder som folder seg til tredimensjonale strukturer.
- **Essensielle aminosyrer**: 8-9 aminosyrer kan ikke kroppen lage selv og må tilføres gjennom maten.
- **Proteiner har mange funksjoner**: Enzymer, antistoffer, hormoner, strukturproteiner (kollagen), transportproteiner (hemoglobin) og kontraktile proteiner (aktin, myosin).
- **Komplette vs. ufullstendige proteiner**: Animalske kilder er som regel komplette, mens vegetabilske kilder ofte krever kombinasjoner for å dekke alle essensielle aminosyrer.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Aminosyre | Byggestein i proteiner, har aminogruppe og karboksylgruppe |
| Peptidbinding | Kjemisk binding mellom to aminosyrer |
| Essensielle aminosyrer | Aminosyrer kroppen ikke kan lage selv |
| Enzym | Protein som fremskynder kjemiske reaksjoner |
| Komplett protein | Inneholder alle essensielle aminosyrer |`,
    },
    // --- Samleoppgaver ---
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
    {
      id: 'nat-vg1-7-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Forklar hva enzymer er, og beskriv hvorfor formen til et enzym er avgjørende for dets funksjon. Bruk begrepet «nøkkel-og-lås-prinsippet» i svaret ditt.',
        solution: 'Enzymer er proteiner som katalyserer (fremskynder) kjemiske reaksjoner i kroppen uten selv å bli brukt opp. Et enzym har et aktivt sete med en bestemt tredimensjonal form. Ifølge nøkkel-og-lås-prinsippet passer substratet (stoffet som skal omdannes) inn i enzymets aktive sete, slik en nøkkel passer i en lås. Bare substrater med riktig form kan binde seg til enzymet. Dersom enzymets form endres (f.eks. ved denaturering på grunn av høy temperatur eller feil pH), kan substratet ikke lenger binde seg, og enzymet mister sin funksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-2-ex-7',
        number: '7',
        type: 'multiple-choice',
        task: 'Hvilken kombinasjon gir komplementære proteiner for en veganer?',
        options: [
          { id: 'a', text: 'Egg og melk', isCorrect: false },
          { id: 'b', text: 'Kylling og ris', isCorrect: false },
          { id: 'c', text: 'Linser og fullkornsbrød', isCorrect: true },
          { id: 'd', text: 'Laks og poteter', isCorrect: false },
        ],
        solution: 'Linser og fullkornsbrød er begge plantekost og utfyller hverandre med aminosyrer: belgfrukter mangler metionin men har lysin, mens korn mangler lysin men har metionin. De andre alternativene inneholder animalske produkter (egg, melk, kylling, laks) og er ikke veganske.',
      },
    },
    {
      id: 'nat-vg1-7-2-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Store norske leksikon: [Proteiner](https://snl.no/proteiner)
- Helsedirektoratet: [Kostråd om proteiner](https://www.helsedirektoratet.no/faglige-rad/kostradene)
- Folkehelseinstituttet: [Næringsstoffer i kostholdet](https://www.fhi.no/nettpub/hin/levevaner/kosthold/)
- Henriksen, P. & Drevon, C.A. (2017). *Mat og medisin*. Cappelen Damm Akademisk.`,
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
      id: 'nat-vg1-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva kjennetegner et mettet fett sammenlignet med et umettet fett?',
        options: [
          { id: 'a', text: 'Det har dobbeltbindinger og er flytende ved romtemperatur', isCorrect: false },
          { id: 'b', text: 'Det har ingen dobbeltbindinger og er fast ved romtemperatur', isCorrect: true },
          { id: 'c', text: 'Det inneholder essensielle omega-3-fettsyrer', isCorrect: false },
          { id: 'd', text: 'Det finnes bare i plantebasert mat', isCorrect: false },
        ],
        solution: 'Mettede fettsyrer har ingen dobbeltbindinger mellom karbonatomene, noe som gjør at molekylene kan pakke seg tett sammen. Derfor er mettet fett fast ved romtemperatur (som smør og kjøttfett). Umettede fettsyrer har dobbeltbindinger som lager knekkpunkter i karbonkjeden, slik at de ikke pakker seg like tett og er flytende ved romtemperatur.',
      },
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
      id: 'nat-vg1-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hva transfett er, hvordan det lages industrielt, og hvorfor det anses som spesielt skadelig for helsen.',
        solution: 'Transfett lages industrielt ved å herde (hydrogenere) vegetabilsk olje, dvs. at dobbeltbindinger fjernes ved å tilsette hydrogen. Under denne prosessen kan noen dobbeltbindinger endre sin form fra cis- til trans-konfigurasjon. Transfett er spesielt skadelig fordi det har en dobbelt negativ effekt på kolesterolet: det øker LDL-kolesterolet (det «dårlige» kolesterolet som kan avleires i blodårene) og senker HDL-kolesterolet (det «gode» kolesterolet som frakter kolesterol tilbake til leveren). Dette øker risikoen for åreforkalkning, hjerteinfarkt og hjerneslag betydelig. Transfett bør derfor unngås helt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-3-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hvilke vitaminer krever fett i kosten for å kunne tas opp i tarmen?',
        options: [
          { id: 'a', text: 'Vitamin B og C', isCorrect: false },
          { id: 'b', text: 'Vitamin A, D, E og K', isCorrect: true },
          { id: 'c', text: 'Vitamin B12 og folat', isCorrect: false },
          { id: 'd', text: 'Bare vitamin D', isCorrect: false },
        ],
        solution: 'De fettløselige vitaminene A, D, E og K krever fett i kosten for å tas opp i tarmen. De løses i fett og transporteres sammen med fett. B-vitaminer og vitamin C er vannløselige og krever ikke fett for opptak.',
      },
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
    // --- Oppsummering ---
    {
      id: 'nat-vg1-7-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Fett er den mest energitette næringsstoffgruppen**: 37 kJ per gram, mer enn dobbelt så mye som karbohydrater og proteiner.
- **Tre typer fettsyrer**: Mettede (ingen dobbeltbindinger, bør begrenses), enumettede (én dobbeltbinding, gunstige) og flerumettede (flere dobbeltbindinger, inkludert essensielle omega-3 og omega-6).
- **Transfett bør unngås**: Industrielt fremstilt fett som øker risikoen for hjerte- og karsykdommer.
- **Fett har mange funksjoner**: Energireserve, cellemembranbygging, vitaminopptak (A, D, E, K), isolasjon og beskyttelse av organer.
- **Kolesterol**: LDL frakter kolesterol til cellene (kan avleires i blodårer), HDL frakter det tilbake til leveren.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Triglyserid | Fettmolekyl: glyserol + tre fettsyrer |
| Mettet fettsyre | Ingen dobbeltbindinger, fast ved romtemperatur |
| Umettet fettsyre | Har dobbeltbindinger, flytende ved romtemperatur |
| Omega-3 | Essensiell flerumettet fettsyre, viktig for hjerne og hjerte |
| Transfett | Industrielt herdet fett, bør unngås |
| LDL-kolesterol | Frakter kolesterol til cellene, kan gi åreforkalkning |`,
    },
    // --- Samleoppgaver ---
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
    {
      id: 'nat-vg1-7-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-3-ex-7',
        number: '7',
        type: 'classic',
        task: 'Forklar forskjellen mellom LDL-kolesterol og HDL-kolesterol, og beskriv hvordan kostholdet kan påvirke nivåene av disse.',
        solution: 'LDL-kolesterol (low density lipoprotein) frakter kolesterol fra leveren til cellene. Hvis det er for mye LDL, kan kolesterol avleires i blodåreveggene og føre til åreforkalkning og hjerte- og karsykdommer. HDL-kolesterol (high density lipoprotein) frakter kolesterol fra blodårene tilbake til leveren for nedbrytning, og virker dermed beskyttende mot hjertesykdom. Kostholdet påvirker nivåene: Mye mettet fett og transfett øker LDL, mens umettet fett (olivenolje, nøtter, fet fisk) kan senke LDL og øke HDL. Fysisk aktivitet øker også HDL-nivået.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-3-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Store norske leksikon: [Fettsyrer](https://snl.no/fettsyrer)
- Helsedirektoratet: [Kostråd om fett](https://www.helsedirektoratet.no/faglige-rad/kostradene)
- Folkehelseinstituttet: [Fett og helse](https://www.fhi.no/nettpub/hin/levevaner/kosthold/)
- WHO: [Healthy diet - facts on fats](https://www.who.int/news-room/fact-sheets/detail/healthy-diet)`,
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
      id: 'nat-vg1-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilket mineral er viktigst for transport av oksygen i blodet?',
        options: [
          { id: 'a', text: 'Kalsium', isCorrect: false },
          { id: 'b', text: 'Natrium', isCorrect: false },
          { id: 'c', text: 'Jern', isCorrect: true },
          { id: 'd', text: 'Jod', isCorrect: false },
        ],
        solution: 'Jern er en nødvendig del av hemoglobin, proteinet i røde blodceller som binder og transporterer oksygen fra lungene til kroppens celler. Mangel på jern gir jernmangelanemi, som fører til tretthet og nedsatt yteevne. Kalsium er viktig for benhelse, natrium for væskebalanse, og jod for skjoldbruskkjertelen.',
      },
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
      id: 'nat-vg1-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er det viktig for en person med vegansk kosthold å ta tilskudd av vitamin B12? Forklar hva B12-mangel kan føre til.',
        solution: 'Vitamin B12 finnes nesten utelukkende i animalske produkter som kjøtt, fisk, egg og melk. Vegansk kosthold inneholder dermed svært lite B12, og tilskudd er nødvendig. B12 er essensielt for dannelsen av røde blodceller, for nervesystemets funksjon og for DNA-syntese. Langvarig B12-mangel kan føre til megaloblastisk anemi (store, umodne røde blodceller som fungerer dårlig), nevrologiske skader (nummenhet, kribling, balanseproblemer) og tretthet. Fordi kroppen kan lagre B12 i leveren i flere år, kan det ta lang tid før mangelsymptomene viser seg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
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
    // --- Oppsummering ---
    {
      id: 'nat-vg1-7-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Vitaminer og mineraler er mikronæringsstoffer**: Kroppen trenger dem i små mengder, men de er avgjørende for normal funksjon.
- **Fettløselige vitaminer (A, D, E, K)** lagres i fettvev og lever, og krever fett for opptak. Vitamin D er spesielt viktig i Norge pga. lite vintersol.
- **Vannløselige vitaminer (B-vitaminer og C)** lagres ikke i kroppen og må tilføres jevnlig. B12 er viktig for veganere å supplementere.
- **Viktige mineraler**: Kalsium (benhelse), jern (oksygentransport), jod (stoffskifte).
- **Kostholdsanbefalinger**: Helsedirektoratet anbefaler variert kosthold med mye grønnsaker, fullkorn og fisk. EAT-Lancet viser at sunt kosthold og klimavennlig kosthold er mye av det samme.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Fettløselig vitamin | Vitamin som lagres i fettvev (A, D, E, K) |
| Vannløselig vitamin | Vitamin som ikke lagres, skilles ut i urin (B, C) |
| Mangelsykdom | Sykdom forårsaket av vitaminmangel, f.eks. skjørbuk (C-mangel) |
| EAT-Lancet | Vitenskapelig rapport om bærekraftig og sunt kosthold |`,
    },
    // --- Samleoppgaver ---
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
    {
      id: 'nat-vg1-7-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-4-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hva er hovedbudskapet i EAT-Lancet-rapporten?',
        options: [
          { id: 'a', text: 'At alle bør bli veganere for å redde klimaet', isCorrect: false },
          { id: 'b', text: 'At kosttilskudd kan erstatte et variert kosthold', isCorrect: false },
          { id: 'c', text: 'At vi bør halvere forbruket av rødt kjøtt og sukker, og doble inntaket av grønnsaker, frukt og belgfrukter', isCorrect: true },
          { id: 'd', text: 'At fisk er skadelig for miljøet og bør unngås', isCorrect: false },
        ],
        solution: 'EAT-Lancet-rapporten fra 2019 anbefaler en «planetarisk helsediett» som er bra for både menneskers helse og klodens bærekraft. Hovedbudskapet er å halvere forbruket av rødt kjøtt og sukker, og doble inntaket av grønnsaker, frukt, belgfrukter og nøtter. Rapporten anbefaler ikke veganisme, men mer plantekost og moderat inntak av fisk og animalske produkter.',
      },
    },
    {
      id: 'nat-vg1-7-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-4-ex-7',
        number: '7',
        type: 'classic',
        task: 'Beskriv tre ulike mangelsykdommer, hvilke vitaminer eller mineraler som mangler, og hvilke symptomer de gir.',
        solution: '1) Skjørbuk: Mangel på vitamin C. Symptomer er slapphet, blødende tannkjøtt, sår som ikke gror og i alvorlige tilfeller døden. Historisk vanlig blant sjøfolk. 2) Rakitt: Mangel på vitamin D. Gir bløte og deformerte knokler hos barn, fordi kalsium ikke tas opp ordentlig. 3) Jernmangelanemi: Mangel på jern. Gir for lite hemoglobin i blodet, noe som fører til tretthet, blekhet, svimmelhet og dårlig utholdenhet, fordi cellene ikke får nok oksygen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-4-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Store norske leksikon: [Vitaminer](https://snl.no/vitaminer)
- Helsedirektoratet: [Kostrådene](https://www.helsedirektoratet.no/faglige-rad/kostradene)
- Folkehelseinstituttet: [Vitamin D-status i Norge](https://www.fhi.no/nettpub/hin/levevaner/kosthold/)
- Willett, W. m.fl. (2019). Food in the Anthropocene: the EAT-Lancet Commission. *The Lancet*, 393(10170), 447-492.`,
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
      id: 'nat-vg1-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-5-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvor mange minutter fysisk aktivitet per dag anbefales for ungdom (13-17 år)?',
        options: [
          { id: 'a', text: '20 minutter', isCorrect: false },
          { id: 'b', text: '30 minutter', isCorrect: false },
          { id: 'c', text: '60 minutter', isCorrect: true },
          { id: 'd', text: '120 minutter', isCorrect: false },
        ],
        solution: 'Helsedirektoratet anbefaler at ungdom i alderen 13-17 år bør være fysisk aktive i minst 60 minutter per dag med moderat til høy intensitet. I tillegg anbefales aktiviteter som styrker muskler og skjelett minst 3 dager i uken. Stillesitting bør begrenses.',
      },
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
      id: 'nat-vg1-7-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar forskjellen mellom akutt og kronisk stress, og beskriv kroppens stressrespons med vekt på hormonene adrenalin og kortisol.',
        solution: 'Akutt stress er en kortvarig og naturlig reaksjon på en plutselig utfordring (f.eks. en prøve eller farlig situasjon). Kroppen aktiverer «kamp eller flukt»-responsen: binyrene skiller ut adrenalin som øker hjertefrekvens, blodtrykk og energitilgang, og kortisol som mobiliserer energilagre. Etter at trusselen er over, går kroppen tilbake til normal tilstand. Kronisk stress oppstår når kroppen er i konstant beredskap over lang tid (f.eks. vedvarende press, mobbing, konflikter). Nivåene av kortisol forblir høye, noe som svekker immunforsvaret, forstyrrer søvn, øker blodtrykk og kan føre til angst, depresjon og utbrenthet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-5-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hvor mange timer søvn per natt anbefales for ungdom i alderen 13-18 år?',
        options: [
          { id: 'a', text: '5-6 timer', isCorrect: false },
          { id: 'b', text: '6-7 timer', isCorrect: false },
          { id: 'c', text: '8-10 timer', isCorrect: true },
          { id: 'd', text: '11-12 timer', isCorrect: false },
        ],
        solution: 'Ungdom mellom 13 og 18 år anbefales 8-10 timer søvn per natt. Tilstrekkelig søvn er viktig for hukommelse og læring, immunforsvar, hormonbalanse (inkludert veksthormon), og psykisk helse. Mange ungdommer sover dessverre mindre enn anbefalt, blant annet på grunn av skjermbruk og forskjøvet døgnrytme.',
      },
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
    // --- Oppsummering ---
    {
      id: 'nat-vg1-7-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Livsstilssykdommer** som hjerte- og karsykdommer, type 2-diabetes og fedme påvirkes sterkt av kosthold, fysisk aktivitet, søvn og stressnivå.
- **Fysisk aktivitet** styrker hjerte, lunger, muskler og skjelett, og bedrer psykisk helse gjennom frigjøring av endorfiner. Ungdom anbefales minst 60 minutter daglig.
- **Søvn** (8-10 timer for ungdom) er avgjørende for hukommelse, immunforsvar, hormonbalanse og vekst.
- **Stress** kan være nyttig kortvarig (akutt), men kronisk stress svekker immunforsvaret og øker risikoen for sykdom.
- **Psykisk helse** påvirkes av sosiale relasjoner, mestring, søvn og fysisk aktivitet.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Livsstilssykdom | Sykdom påvirket av livsstilsvalg (kosthold, aktivitet, rusmidler) |
| Endorfiner | Kroppens egne «lykkestoffer», frigjøres ved fysisk aktivitet |
| Akutt stress | Kortvarig, naturlig stressrespons |
| Kronisk stress | Langvarig stress som er skadelig for helsen |
| Insulinresistens | Cellene reagerer dårlig på insulin, gir høyt blodsukker |`,
    },
    // --- Samleoppgaver ---
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
    {
      id: 'nat-vg1-7-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-5-ex-7',
        number: '7',
        type: 'classic',
        task: 'Sammenhengen mellom livsstil og helse er sammensatt. Velg en livsstilssykdom (f.eks. type 2-diabetes, hjerte- og karsykdom eller fedme) og drøft hvordan ulike livsstilsfaktorer kan bidra til og forebygge denne sykdommen.',
        solution: 'Eksempel: Hjerte- og karsykdommer. Bidragende faktorer: 1) Usunt kosthold med mye mettet fett, transfett og salt øker kolesterol og blodtrykk. 2) Fysisk inaktivitet svekker hjertet og øker risiko for overvekt. 3) Røyking skader blodåreveggene og fremskynder åreforkalkning. 4) Kronisk stress øker blodtrykket og betennelsesnivået. 5) Søvnmangel øker risikoen for høyt blodtrykk. Forebyggende tiltak: Spise mer umettet fett, fiber og grønnsaker, være fysisk aktiv minst 30-60 min daglig, unngå tobakk, håndtere stress, og sørge for tilstrekkelig søvn. Arvelige faktorer spiller også en rolle, men livsstilsvalg kan i stor grad redusere risikoen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-5-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Helsedirektoratet: [Anbefalinger om fysisk aktivitet](https://www.helsedirektoratet.no/faglige-rad/fysisk-aktivitet-for-barn-unge-voksne-eldre-og-gravide)
- Folkehelseinstituttet: [Folkehelserapporten - Fysisk aktivitet](https://www.fhi.no/nettpub/hin/levevaner/fysisk-aktivitet/)
- Folkehelseinstituttet: [Psykisk helse hos barn og unge](https://www.fhi.no/nettpub/hin/grupper/psykisk-helse-hos-barn-og-unge/)
- Helsenorge: [Søvn og søvnproblemer](https://www.helsenorge.no/sovn/)`,
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
      id: 'nat-vg1-7-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-6-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er fagfellevurdering (peer review)?',
        options: [
          { id: 'a', text: 'Når en journalist sjekker fakta i en artikkel', isCorrect: false },
          { id: 'b', text: 'Når andre forskere kritisk vurderer en vitenskapelig studie før den publiseres', isCorrect: true },
          { id: 'c', text: 'Når publikum stemmer over om forskning er god', isCorrect: false },
          { id: 'd', text: 'Når en forsker gjennomgår sin egen studie på nytt', isCorrect: false },
        ],
        solution: 'Fagfellevurdering (peer review) er en kvalitetskontroll der uavhengige eksperter på fagfeltet kritisk vurderer en vitenskapelig studie før den publiseres i et tidsskrift. De vurderer metoder, resultater og konklusjoner. Dette er en viktig mekanisme for å sikre kvaliteten på vitenskapelig forskning, selv om det ikke er et perfekt system.',
      },
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
      id: 'nat-vg1-7-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Du leser en artikkel på nettet som hevder at et bestemt kosttilskudd kan kurere alle sykdommer. Bruk det du har lært om kildekritikk til å vurdere denne påstanden. Hva ville du sett etter?',
        solution: 'Varselstegn: 1) «Mirakelkur»-påstand - ingen enkelt kosttilskudd kan kurere alle sykdommer, noe som gjør påstanden lite troverdig. 2) Sjekk hvem som står bak - er det en uavhengig forsker eller en som selger produktet? Kommersielle interesser svekker objektiviteten. 3) Kildehenvisninger - refereres det til fagfellevurderte studier, eller brukes bare anekdoter og pasienthistorier? 4) Sjekk mot pålitelige kilder som Helsedirektoratet eller FHI - hva sier de? 5) Er påstanden falsifiserbar? Seriøs forskning kan motbevises, pseudovitenskap avviser all kritikk. 6) «Hemmelig kunnskap» eller «legene vil ikke at du skal vite» er typiske tegn på pseudovitenskap.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    // --- Oppsummering ---
    {
      id: 'nat-vg1-7-6-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Kildekritikk er avgjørende** for å skille pålitelig helseinformasjon fra feilinformasjon og reklame.
- **TONE-kriteriene** (Troverdighet, Objektivitet, Nøyaktighet, Egnethet) er et nyttig verktøy for å vurdere kilder.
- **Korrelasjon er ikke kausalitet**: At to ting skjer samtidig betyr ikke at det ene forårsaker det andre.
- **Vitenskap vs. pseudovitenskap**: Vitenskap er etterprøvbar, fagfellevurdert og åpen for revisjon. Pseudovitenskap mangler vitenskapelig grunnlag og selger ofte produkter.
- **Pålitelige helsekilder** inkluderer Helsedirektoratet, FHI, Helsenorge og fagfellevurderte tidsskrifter.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| TONE-kriteriene | Troverdighet, Objektivitet, Nøyaktighet, Egnethet |
| Korrelasjon | Sammenheng mellom to variabler (ikke nødvendigvis årsak) |
| Kausalitet | Årsakssammenheng mellom to variabler |
| Fagfellevurdering | Kvalitetskontroll der andre forskere vurderer en studie |
| Pseudovitenskap | Påstander som fremstår som vitenskap uten vitenskapelig grunnlag |`,
    },
    // --- Samleoppgaver ---
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
    {
      id: 'nat-vg1-7-6-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-6-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hvilken av disse kildene er mest pålitelig for helseinformasjon?',
        options: [
          { id: 'a', text: 'En influencer som anbefaler et produkt på Instagram', isCorrect: false },
          { id: 'b', text: 'En anonym kommentar under en nyhetsartikkel', isCorrect: false },
          { id: 'c', text: 'Folkehelseinstituttets nettsider (fhi.no)', isCorrect: true },
          { id: 'd', text: 'En nettside som selger kosttilskudd', isCorrect: false },
        ],
        solution: 'Folkehelseinstituttet (FHI) er en offentlig, uavhengig fagmyndighet som baserer sine anbefalinger på systematiske gjennomganger av forskning. De har ingen kommersielle interesser og bruker vitenskapelig metode. Influencere kan ha kommersielle avtaler, anonyme kommentarer mangler troverdighet, og kosttilskuddssider har åpenbare salgsinteresser.',
      },
    },
    {
      id: 'nat-vg1-7-6-ex-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-7-6-ex-7',
        number: '7',
        type: 'classic',
        task: 'En venn sier: «Min bestemor røykte hele livet og ble 95 år, så røyking kan ikke være farlig.» Bruk det du har lært om vitenskapelig tenkning til å forklare hvorfor dette argumentet ikke er gyldig.',
        solution: 'Dette er et typisk eksempel på bruk av en enkelthistorie (anekdote) som bevis, noe som ikke er vitenskapelig holdbart. Problemet er: 1) Det er en enkeltobservasjon, ikke en systematisk studie. Vitenskapelige studier baserer seg på store grupper for å finne mønstre. 2) Bestemoren kan ha vært heldig - noen har gener som gir bedre motstandskraft. Det betyr ikke at røyking er ufarlig generelt. 3) Vi vet ikke om hun ville blitt enda eldre uten røyking. 4) Store befolkningsstudier med hundretusener av deltakere viser entydig at røyking øker risikoen for lungekreft, hjertesykdom og tidlig død. Det er et eksempel på at vi må vekte systematisk forskning høyere enn enkelthistorier.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-7-6-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Store norske leksikon: [Kildekritikk](https://snl.no/kildekritikk)
- Folkehelseinstituttet: [Helsestatistikk og forskning](https://www.fhi.no/)
- Helsenorge: [Pålitelig helseinformasjon](https://www.helsenorge.no/)
- Kolstø, S.D. & Knain, E. (2020). *Elever som forskere i naturfag*. Universitetsforlaget.`,
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
      id: 'nat-vg1-8-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvilken base parer med adenin (A) i et DNA-molekyl?',
        options: [
          { id: 'a', text: 'Cytosin (C)', isCorrect: false },
          { id: 'b', text: 'Guanin (G)', isCorrect: false },
          { id: 'c', text: 'Tymin (T)', isCorrect: true },
          { id: 'd', text: 'Uracil (U)', isCorrect: false },
        ],
        solution: 'I DNA parer adenin (A) alltid med tymin (T), og guanin (G) alltid med cytosin (C). Dette kalles komplementær baseparing. Uracil (U) finnes i RNA, ikke i DNA, der det erstatter tymin og parer med adenin.',
      },
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
      id: 'nat-vg1-8-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar forskjellen mellom genotype og fenotype. Gi et eksempel der to organismer har ulik genotype men lik fenotype.',
        solution: 'Genotype er den genetiske sammensetningen til en organisme, altså hvilke alleler (genvarianter) den har. Fenotype er de observerbare egenskapene, som er resultatet av genotypen pluss miljøpåvirkning. Eksempel: Hos mennesker er allelet for brune øyne (B) dominant over allelet for blå øyne (b). En person med genotypen BB (homozygot dominant) og en person med genotypen Bb (heterozygot) har ulik genotype, men begge har brun øyefarge som fenotype, fordi det dominante allelet B kommer til uttrykk i begge tilfeller.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-8-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-1-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hvor mange kromosomer har en normal menneskecelle?',
        options: [
          { id: 'a', text: '23', isCorrect: false },
          { id: 'b', text: '46', isCorrect: true },
          { id: 'c', text: '44', isCorrect: false },
          { id: 'd', text: '20 000', isCorrect: false },
        ],
        solution: 'En normal menneskecelle har 46 kromosomer, organisert i 23 par. 23 kromosomer arves fra mor (via eggcellen) og 23 fra far (via sædcellen). 22 par er autosomer (ikke-kjønnskromosomer) og 1 par er kjønnskromosomer (XX hos kvinner, XY hos menn). Kjønnscellene (egg og sæd) har bare 23 kromosomer (halvparten). 20 000 er antall gener, ikke kromosomer.',
      },
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
    // --- Oppsummering ---
    {
      id: 'nat-vg1-8-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **DNA (deoksyribonukleinsyre)** er arvematerialet i alle levende celler og har formen av en dobbelheliks.
- **Nukleotider** er byggesteinene i DNA, bestående av deoksyribose, fosfatgruppe og en av fire baser (A, T, G, C).
- **Komplementær baseparing**: A parer alltid med T, og G parer alltid med C.
- **Gen, kromosom og genom**: Et gen koder for ett protein, et kromosom er en pakket DNA-tråd med mange gener, og genomet er alt arvemateriale.
- **Genotype vs. fenotype**: Genotype er den genetiske sammensetningen, fenotype er de observerbare egenskapene.
- **DNA-replikasjon** er nøyaktig kopiering av DNA før celledeling, utført av DNA-polymerase.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| DNA | Deoksyribonukleinsyre, bærer av arveinformasjon |
| Nukleotid | Byggestein i DNA: sukker + fosfat + base |
| Gen | Avgrenset DNA-område som koder for ett protein |
| Kromosom | Pakket DNA-tråd med mange gener |
| Genom | Alt arvemateriale i en organisme |
| Genotype | Genetisk sammensetning (hvilke alleler) |
| Fenotype | Observerbare egenskaper (genotype + miljø) |`,
    },
    // --- Samleoppgaver ---
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
    {
      id: 'nat-vg1-8-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-1-ex-7',
        number: '7',
        type: 'classic',
        task: 'Beskriv de tre hovedstegene i DNA-replikasjon og forklar hva som menes med at replikasjonen er «semikonservativ».',
        solution: 'De tre hovedstegene i DNA-replikasjon: 1) Åpning: Enzymet helikase bryter hydrogenbindingene mellom baseparene og åpner dobbelheliksen, slik at de to trådene skilles. 2) Kopiering: Enzymet DNA-polymerase leser av hver av de gamle trådene og bygger en ny komplementær tråd ved å sette inn riktige nukleotider (A mot T, G mot C). 3) Resultat: To identiske DNA-molekyler dannes. «Semikonservativ» betyr at hvert nytt DNA-molekyl består av en gammel (original) tråd og en ny (nylaget) tråd. Halvparten av det opprinnelige molekylet er altså bevart i hver kopi.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-8-1-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Store norske leksikon: [DNA](https://snl.no/DNA)
- Store norske leksikon: [Gen](https://snl.no/gen)
- Norsk biografisk leksikon: [Rosalind Franklin](https://snl.no/Rosalind_Franklin)
- Campbell, N.A. m.fl. (2020). *Biology: A Global Approach*. Pearson.`,
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
      id: 'nat-vg1-8-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-2-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hvor i cellen foregår translasjon?',
        options: [
          { id: 'a', text: 'I cellekjernen', isCorrect: false },
          { id: 'b', text: 'I mitokondriene', isCorrect: false },
          { id: 'c', text: 'Ved ribosomene i cytoplasma', isCorrect: true },
          { id: 'd', text: 'I cellemembranene', isCorrect: false },
        ],
        solution: 'Translasjon (oversettelse av mRNA til protein) foregår ved ribosomene i cytoplasma. mRNA forlater cellekjernen gjennom kjerneporer og transporteres til ribosomene. Transkripsjon (kopiering av DNA til mRNA) skjer derimot i cellekjernen. Mitokondriene driver celleånding.',
      },
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
      id: 'nat-vg1-8-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hva det sentrale dogme i molekylærbiologien er, og beskriv rollene til mRNA, tRNA og ribosomer i proteinsyntesen.',
        solution: 'Det sentrale dogme beskriver informasjonsflyten i cellen: DNA -> RNA -> Protein. DNA inneholder oppskriften, mRNA kopierer oppskriften og bærer den ut av kjernen, og proteinet utfører funksjonen. mRNA (budbringer-RNA) bærer den genetiske informasjonen fra DNA i cellekjernen til ribosomene i cytoplasma. tRNA (transfer-RNA) transporterer aminosyrer til ribosomet og har et antikodon som matcher kodonet i mRNA, slik at riktig aminosyre settes inn. Ribosomet er cellens «proteinfabrikk» som leser av mRNA kodon for kodon, og kobler aminosyrene sammen med peptidbindinger til en proteinkjede.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
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
    // --- Oppsummering ---
    {
      id: 'nat-vg1-8-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Det sentrale dogme**: Informasjonsflyten i cellen går fra DNA til RNA til protein.
- **Transkripsjon**: DNA kopieres til mRNA i cellekjernen av RNA-polymerase. RNA bruker uracil (U) i stedet for tymin (T).
- **Den genetiske koden**: Tre baser (kodon) koder for en aminosyre. Koden er universal og degenerert (64 kodoner for 20 aminosyrer).
- **Translasjon**: mRNA oversettes til protein ved ribosomene. tRNA bringer aminosyrer, og ribosomet kobler dem sammen med peptidbindinger.
- **Start- og stoppkodoner**: AUG starter proteinsyntesen, UAA/UAG/UGA avslutter den.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Transkripsjon | Kopiering av DNA til mRNA i cellekjernen |
| Translasjon | Oversettelse av mRNA til protein ved ribosomene |
| Kodon | Tre baser i mRNA som koder for en aminosyre |
| mRNA | Budbringer-RNA, bærer genetisk informasjon fra DNA |
| tRNA | Transfer-RNA, transporterer aminosyrer til ribosomet |
| Ribosom | Cellens proteinfabrikk |`,
    },
    // --- Samleoppgaver ---
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
    {
      id: 'nat-vg1-8-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-2-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hva er den viktigste forskjellen mellom RNA og DNA?',
        options: [
          { id: 'a', text: 'RNA er dobbeltrådet, DNA er enkelttrådet', isCorrect: false },
          { id: 'b', text: 'RNA inneholder uracil (U) i stedet for tymin (T), og er enkelttrådet', isCorrect: true },
          { id: 'c', text: 'RNA finnes bare i cellekjernen, DNA finnes bare i cytoplasma', isCorrect: false },
          { id: 'd', text: 'RNA har fire baser, DNA har bare to baser', isCorrect: false },
        ],
        solution: 'RNA skiller seg fra DNA på tre viktige måter: 1) RNA bruker basen uracil (U) i stedet for tymin (T). 2) RNA er enkelttrådet (ikke dobbelheliks). 3) RNA har ribose som sukkermolekyl i stedet for deoksyribose. Begge har fire baser, og mRNA transporteres ut av cellekjernen til ribosomene i cytoplasma.',
      },
    },
    {
      id: 'nat-vg1-8-2-ex-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-2-ex-7',
        number: '7',
        type: 'classic',
        task: 'DNA-sekvensen TAC-AAA-GGC-ACT skal transkriberes og translateres. Finn mRNA-sekvensen og deretter aminosyresekvensen.',
        solution: 'Steg 1 - Transkripsjon (DNA til mRNA): DNA: TAC-AAA-GGC-ACT. Vi bruker baseparingsreglene for RNA (A->U, T->A, G->C, C->G): mRNA: AUG-UUU-CCG-UGA. Steg 2 - Translasjon (mRNA til protein): AUG = Metionin (start), UUU = Fenylalanin, CCG = Prolin, UGA = Stopp. Aminosyresekvensen blir Met-Phe-Pro (metionin-fenylalanin-prolin). Proteinet er tre aminosyrer langt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-8-2-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Store norske leksikon: [Proteinsyntese](https://snl.no/proteinsyntese)
- Store norske leksikon: [Genetisk kode](https://snl.no/genetisk_kode)
- NDLA: [Fra gen til protein](https://ndla.no/subject:1:f18b3af0-e8c0-4e32-b577-50e5c6e394f3)
- Campbell, N.A. m.fl. (2020). *Biology: A Global Approach*. Pearson.`,
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
      id: 'nat-vg1-8-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-3-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva mener vi med at et allel er «recessivt»?',
        options: [
          { id: 'a', text: 'At det alltid kommer til uttrykk i fenotypen', isCorrect: false },
          { id: 'b', text: 'At det bare kommer til uttrykk når organismen har to kopier av allelet (homozygot)', isCorrect: true },
          { id: 'c', text: 'At det er det vanligste allelet i populasjonen', isCorrect: false },
          { id: 'd', text: 'At det alltid forårsaker sykdom', isCorrect: false },
        ],
        solution: 'Et recessivt allel kommer bare til uttrykk i fenotypen når organismen har to kopier av det (er homozygot, f.eks. aa). I heterozygot tilstand (Aa) «dekkes» det recessive allelet av det dominante allelet. Recessiv betyr ikke at allelet er sjeldent eller at det forårsaker sykdom - det beskriver bare arvemønsteret.',
      },
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
      id: 'nat-vg1-8-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hva en frameshift-mutasjon er og hvorfor den ofte er mer skadelig enn en punktmutasjon.',
        solution: 'En frameshift-mutasjon oppstår når det settes inn eller fjernes et antall baser som ikke er delelig med 3. Siden den genetiske koden leses tre baser om gangen (kodoner), vil dette forskyve hele leserammen fra mutasjonspunktet og utover. Alle kodoner etter mutasjonen blir feil, noe som gir helt feil aminosyrer og vanligvis et ikke-funksjonelt protein. En punktmutasjon (bytte av en enkelt base) endrer bare ett kodon og kan i beste fall gi en stille mutasjon (samme aminosyre) eller bare endre en enkelt aminosyre. Frameshift-mutasjoner er derfor generelt mye mer skadelige fordi de ødelegger hele resten av proteinet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
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
    // --- Oppsummering ---
    {
      id: 'nat-vg1-8-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Mendels lover** beskriver grunnleggende arveregler med dominante og recessive alleler, og forklarer 3:1-forholdet i F2-generasjonen.
- **Genotype og fenotype**: Genotype er de genetiske allelene, fenotype er det som observeres (genotype + miljø).
- **Genetisk variasjon** oppstår gjennom mutasjoner, genetisk rekombinasjon ved meiose og tilfeldig befruktning.
- **Mutasjoner** kan være stille, missense, nonsense eller frameshift, og forårsakes av replikasjonsfeil, kjemiske stoffer eller stråling.
- **Genetisk variasjon er en forutsetning for evolusjon**: Uten variasjon har naturlig utvalg ingenting å virke på.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Allel | Ulike varianter av samme gen |
| Dominant | Allel som uttrykkes i heterozygot tilstand |
| Recessiv | Allel som bare uttrykkes i homozygot tilstand |
| Mutasjon | Tilfeldig endring i DNA-sekvensen |
| Meiose | Celledeling som gir kjønnsceller med halvt kromosomtall |
| Overkrysning | Utveksling av DNA mellom homologe kromosomer |`,
    },
    // --- Samleoppgaver ---
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
    {
      id: 'nat-vg1-8-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-3-ex-6',
        number: '6',
        type: 'classic',
        task: 'To foreldre er begge bærere av et recessivt allel for en arvelig sykdom (genotype Aa). Bruk et krysningsskjema (Punnett-rute) til å finne sannsynligheten for at barnet deres blir sykt.',
        solution: 'Krysningsskjema for Aa x Aa: Far gir enten A eller a, og mor gir enten A eller a. Resultater: AA (25 %), Aa (50 %), aa (25 %). Genotyper: 1 AA : 2 Aa : 1 aa. Barnet må ha genotypen aa (homozygot recessiv) for å få sykdommen, fordi allelet er recessivt. Sannsynligheten for at barnet blir sykt er 1/4 = 25 %. Det er 50 % sjanse for at barnet blir bærer (Aa) uten å vise symptomer, og 25 % sjanse for at barnet verken er bærer eller sykt (AA).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-8-3-ex-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-3-ex-7',
        number: '7',
        type: 'multiple-choice',
        task: 'Hva er overkrysning (crossing over)?',
        options: [
          { id: 'a', text: 'Når en DNA-base byttes ut med en annen', isCorrect: false },
          { id: 'b', text: 'Når hele kromosomer bytter plass i cellekjernen', isCorrect: false },
          { id: 'c', text: 'Når homologe kromosomer utveksler DNA-segmenter under meiose', isCorrect: true },
          { id: 'd', text: 'Når mRNA kopieres fra DNA i cellekjernen', isCorrect: false },
        ],
        solution: 'Overkrysning (crossing over) skjer under meiose (dannelse av kjønnsceller) når homologe kromosomer (ett fra mor, ett fra far) ligger tett inntil hverandre og utveksler deler av sine DNA-tråder. Dette gir nye genkombinasjoner på kromosomene som ikke fantes hos noen av foreldrene, og er en viktig kilde til genetisk variasjon.',
      },
    },
    {
      id: 'nat-vg1-8-3-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Store norske leksikon: [Genetikk](https://snl.no/genetikk)
- Store norske leksikon: [Gregor Mendel](https://snl.no/Gregor_Mendel)
- Store norske leksikon: [Mutasjon](https://snl.no/mutasjon)
- Campbell, N.A. m.fl. (2020). *Biology: A Global Approach*. Pearson.`,
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
      id: 'nat-vg1-8-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-4-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Antibiotikaresistens hos bakterier er et eksempel på evolusjon. Hva skjer i en bakteriepopulasjon som utsettes for antibiotika?',
        options: [
          { id: 'a', text: 'Alle bakteriene tilpasser seg og blir resistente', isCorrect: false },
          { id: 'b', text: 'Antibiotika forårsaker mutasjoner som gjør bakteriene resistente', isCorrect: false },
          { id: 'c', text: 'Bakterier som tilfeldigvis har resistensgener overlever og formerer seg, mens de andre dør', isCorrect: true },
          { id: 'd', text: 'Bakteriene lærer seg å unngå antibiotika over tid', isCorrect: false },
        ],
        solution: 'Antibiotikaresistens er naturlig utvalg i praksis. I en populasjon finnes det allerede noen få bakterier som tilfeldigvis har resistensgener (oppstått gjennom mutasjoner). Når antibiotika brukes, dør de fleste bakterier, men de resistente overlever og formerer seg uhindret. Over tid dominerer de resistente bakteriene. Antibiotikaet skaper ikke mutasjonene - det selekterer for allerede eksisterende variasjon.',
      },
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
      id: 'nat-vg1-8-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'En vanlig misforståelse er at «organismer tilpasser seg etter behov». Forklar hvorfor dette er feil, og beskriv hvordan tilpasninger faktisk oppstår.',
        solution: 'Organismer tilpasser seg ikke aktivt eller bevisst etter behov. Evolusjon er ikke målrettet. Det som faktisk skjer er: 1) Det finnes tilfeldig genetisk variasjon i populasjonen (fra mutasjoner og rekombinasjon). 2) Noen varianter gir tilfeldigvis bedre overlevelse og reproduksjon i det gjeldende miljøet. 3) Disse individene får flere avkom, som arver de fordelaktige genvariantene. 4) Over mange generasjoner endres populasjonens sammensetning. Individer «velger» ikke å utvikle nye egenskaper, og mutasjoner oppstår ikke fordi organismen «trenger» dem. Det er populasjonen som endrer seg over tid, ikke enkeltindividet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
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
    // --- Oppsummering ---
    {
      id: 'nat-vg1-8-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Evolusjon** er endring i genfrekvenser i en populasjon over generasjoner, først beskrevet av Charles Darwin i 1859.
- **Naturlig utvalg** krever variasjon, arv, konkurranse og differensiell reproduksjon. Det favoriserer egenskaper som øker overlevelse og reproduksjon.
- **Evolusjonære mekanismer**: Naturlig utvalg, seksuelt utvalg, genetisk drift, genflyt og mutasjoner driver evolusjon.
- **Tilpasning** er en arvelig egenskap som øker overlevelsesevnen. Den oppstår over mange generasjoner og er ikke planlagt.
- **Bjørkemåleren** er et klassisk eksempel på evolusjon i aksjon, der endringer i miljøet endret seleksjonstrykket.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Evolusjon | Endring i genfrekvenser i en populasjon over tid |
| Naturlig utvalg | De best tilpassede overlever og formerer seg mest |
| Seksuelt utvalg | Seleksjon for egenskaper som øker parringssuksess |
| Genetisk drift | Tilfeldige endringer i genfrekvenser |
| Tilpasning | Arvelig egenskap som øker overlevelse i et bestemt miljø |`,
    },
    // --- Samleoppgaver ---
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
    {
      id: 'nat-vg1-8-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-4-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Hva er seksuelt utvalg?',
        options: [
          { id: 'a', text: 'Naturlig utvalg som bare virker på kjønnsceller', isCorrect: false },
          { id: 'b', text: 'Seleksjon for egenskaper som øker sjansen for å finne en partner, selv om de kan redusere overlevelsen', isCorrect: true },
          { id: 'c', text: 'Menneskers bevisste utvalg av avlsdyr', isCorrect: false },
          { id: 'd', text: 'At bare det sterkeste kjønnet overlever i naturen', isCorrect: false },
        ],
        solution: 'Seksuelt utvalg er en form for evolusjon der egenskaper som øker sjansen for å tiltrekke seg en partner, favoriseres. Disse egenskapene kan til og med redusere overlevelsen, som påfuglens store, iøynefallende hale som gjør den mer synlig for rovdyr, men som tiltrekker hunner. Andre eksempler er hjortens gevir og fuglenes sang. Menneskers bevisste avl kalles kunstig utvalg.',
      },
    },
    {
      id: 'nat-vg1-8-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-4-ex-7',
        number: '7',
        type: 'classic',
        task: 'Bruk eksempelet med bjørkemåleren til å forklare alle fire forutsetningene for naturlig utvalg: variasjon, arv, konkurranse og differensiell reproduksjon.',
        solution: '1) Variasjon: Bjørkemålerpopulasjonen hadde individer med ulike fargevarianter (lyse og mørke). 2) Arv: Fargen var genetisk betinget og gikk i arv fra foreldre til avkom. 3) Konkurranse/overlevelse: Fugler spiste møllene, og møll som var dårlig kamuflert ble lettere oppdaget og spist. Ikke alle overlevde til reproduksjon. 4) Differensiell reproduksjon: Under industrialiseringen var mørke møll bedre kamuflert på sotete trær og ble sjeldnere spist. De overlevde oftere og fikk flere avkom som arvet den mørke fargen. Andelen mørke møll økte fra ca. 2 % til over 90 %. Da luften ble renere igjen, snudde seleksjonstrykket og lyse møll fikk igjen en fordel.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-8-4-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Store norske leksikon: [Evolusjon](https://snl.no/evolusjon)
- Store norske leksikon: [Naturlig utvalg](https://snl.no/naturlig_utvalg)
- Store norske leksikon: [Charles Darwin](https://snl.no/Charles_Darwin)
- Darwin, C. (1859). *On the Origin of Species*. John Murray.`,
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
      id: 'nat-vg1-8-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-5-ex-4',
        number: '4',
        type: 'multiple-choice',
        task: 'Hva er et overgangsfossil?',
        options: [
          { id: 'a', text: 'Et fossil av en art som finnes i dag', isCorrect: false },
          { id: 'b', text: 'Et fossil som viser trekk fra to ulike dyregrupper og demonstrerer en evolusjonær overgang', isCorrect: true },
          { id: 'c', text: 'Et fossil som er delvis bevart og delvis ødelagt', isCorrect: false },
          { id: 'd', text: 'Et fossil fra overgangen mellom to geologiske tidsperioder', isCorrect: false },
        ],
        solution: 'Et overgangsfossil har trekk fra to ulike dyregrupper og viser et evolusjonært mellomstadium. Archaeopteryx er et kjent eksempel: den hadde fjær og vinger som en fugl, men også tenner, klør på vingene og en benhale som en dinosaur. Tiktaalik er et annet eksempel: den hadde gjellelokk som en fisk, men også ribben og lemmelignende finner som et landlevende dyr. Slike fossiler er viktige bevis for evolusjon.',
      },
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
      id: 'nat-vg1-8-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Forklar hva konvergent evolusjon er, og gi et eksempel. Hvorfor utvikler ubeslektede arter noen ganger lignende egenskaper?',
        solution: 'Konvergent evolusjon er når ubeslektede arter uavhengig av hverandre utvikler lignende egenskaper fordi de lever i lignende miljøer og møter lignende utfordringer. Eksempel: Delfiner (pattedyr) og haier (bruskfisk) har lignende strømlinjeformet kroppsform, selv om de er svært fjernt beslektet. Begge lever i havet og har evolvert lignende løsninger for å svømme effektivt. Et annet eksempel er at både flaggermus (pattedyr) og insekter har utviklet vinger uavhengig av hverandre. Lignende miljøer gir lignende seleksjonstrykk, og naturlig utvalg favoriserer lignende løsninger uavhengig av utgangspunktet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-8-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-5-ex-6',
        number: '6',
        type: 'multiple-choice',
        task: 'Mennesker og sjimpanser deler ca. 98,7 % av DNA-et. Hva forteller dette oss?',
        options: [
          { id: 'a', text: 'At mennesker stammer direkte fra sjimpanser', isCorrect: false },
          { id: 'b', text: 'At mennesker og sjimpanser har en relativt nær felles forfader', isCorrect: true },
          { id: 'c', text: 'At mennesker og sjimpanser er den samme arten', isCorrect: false },
          { id: 'd', text: 'At DNA-sammenligninger ikke er pålitelige', isCorrect: false },
        ],
        solution: 'Den store likheten i DNA tyder på at mennesker og sjimpanser har en relativt nær felles forfader som levde for ca. 6-7 millioner år siden. Mennesker stammer ikke fra sjimpanser, men vi har felles opphav. De to artene har utviklet seg uavhengig av hverandre etter at evolusjonslinjene skilte lag. De er heller ikke samme art, ettersom de har tydelige anatomiske og atferdsmessige forskjeller og ikke kan få fruktbart avkom sammen.',
      },
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
    // --- Oppsummering ---
    {
      id: 'nat-vg1-8-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Artsdannelse (speciasjon)** skjer når populasjoner blir reproduktivt isolert og akkumulerer genetiske forskjeller over tid.
- **Allopatrisk artsdannelse** er den vanligste formen, der geografiske barrierer isolerer populasjoner (f.eks. Darwins finker).
- **Bevis for evolusjon** kommer fra fossiler, sammenlignende anatomi, embryologi, DNA-sammenligninger og biogeografi.
- **Homologe strukturer** (samme oppbygning, ulik funksjon) tyder på felles forfader (divergent evolusjon).
- **Analoge strukturer** (lik funksjon, ulik oppbygning) viser konvergent evolusjon i lignende miljøer.
- **Molekylære bevis**: Alle organismer deler DNA og den genetiske koden, og nært beslektede arter har likere DNA.

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Artsdannelse | Prosessen der nye arter oppstår |
| Allopatrisk | Artsdannelse ved geografisk isolasjon |
| Sympatrisk | Artsdannelse uten geografisk isolasjon |
| Homologe strukturer | Samme grunnstruktur, ulik funksjon (felles opphav) |
| Analoge strukturer | Lik funksjon, ulik oppbygning (uavhengig utvikling) |
| Konvergent evolusjon | Ubeslektede arter utvikler lignende egenskaper |
| Divergent evolusjon | Beslektede arter utvikler ulike egenskaper |`,
    },
    // --- Samleoppgaver ---
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
    {
      id: 'nat-vg1-8-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-5-ex-7',
        number: '7',
        type: 'classic',
        task: 'Et muldyr er avkommet av en hest og et esel. Muldyr er sterile (kan ikke få egne avkom). Forklar hva dette forteller oss om artsbegrepet og reproduktiv isolasjon.',
        solution: 'At muldyr er sterile viser at hest og esel er to ulike arter ifølge det biologiske artsbegrepet, som definerer en art som en gruppe organismer som kan formere seg med hverandre og få fruktbart avkom. Hest og esel kan pare seg og produsere et muldyr, men muldyret er sterilt fordi hest og esel har ulikt kromosomtall (hest: 64, esel: 62, muldyr: 63). Med et oddetall kromosomer kan ikke muldyret danne normale kjønnsceller gjennom meiose. Dette er et eksempel på genetisk inkompatibilitet som en mekanisme for reproduktiv isolasjon mellom arter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'nat-vg1-8-5-ex-8',
      type: 'exercise',
      exercise: {
        id: 'nat-vg1-8-5-ex-8',
        number: '8',
        type: 'multiple-choice',
        task: 'Hva er et rudimentært organ?',
        options: [
          { id: 'a', text: 'Et organ som er helt nyutviklet gjennom evolusjon', isCorrect: false },
          { id: 'b', text: 'Et redusert organ som hadde funksjon hos en forfader, men som har mistet sin opprinnelige funksjon', isCorrect: true },
          { id: 'c', text: 'Et organ som bare finnes hos insekter', isCorrect: false },
          { id: 'd', text: 'Et organ som er nødvendig for overlevelse', isCorrect: false },
        ],
        solution: 'Et rudimentært organ er et organ som er redusert i størrelse og har mistet sin opprinnelige funksjon gjennom evolusjon. Hos mennesker er blindtarmen (appendiks) et eksempel - den var trolig viktigere for fordøyelse av plantemateriale hos tidlige forfedre. Visdomstenner er et annet eksempel - de var nyttige for forfedre med større kjever. Hvalens beinrester av bakbein viser at hvalene stammer fra landlevende dyr. Rudimentære organer er bevis for evolusjon fordi de viser spor av artens evolusjonære historie.',
      },
    },
    {
      id: 'nat-vg1-8-5-kilder',
      type: 'text',
      content: `### Kilder og videre lesning

- Store norske leksikon: [Artsdannelse](https://snl.no/artsdannelse)
- Store norske leksikon: [Evolusjonære bevis](https://snl.no/evolusjon)
- Naturhistorisk museum, UiO: [Evolusjonsbiologi](https://www.nhm.uio.no/)
- Futuyma, D.J. & Kirkpatrick, M. (2017). *Evolution*. Sinauer Associates.`,
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
