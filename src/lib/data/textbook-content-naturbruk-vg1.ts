/**
 * Naturbruk VG1 - Tekstbokinnhold
 *
 * Dekker LK20 lareplan for Naturbruk pa VG1
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1: Okosystemer og naturmangfold
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_1: TextbookChapter = {
  id: 'naturbruk-vg1-1',
  courseId: 'naturbruk-vg1',
  chapterNumber: '1',
  title: 'Okosystemer og naturmangfold',
  description: 'Naturens sammenhenger og artsmangfold.',
  estimatedMinutes: 60,
  competenceGoals: [
    'forklare sammenhenger i okosystemer',
    'gjore rede for betydningen av biologisk mangfold',
  ],
  content: [
    {
      id: 'naturbruk-vg1-1-intro',
      type: 'text',
      content: `Okosystemer er grunnlaget for alt liv pa jorda. A forsta hvordan arter og miljo henger sammen er avgjorende for a kunne forvalte naturen pa en barekraftig mate. I dette kapittelet skal vi se pa hva et okosystem er, hvordan det fungerer, og hvorfor biologisk mangfold er sa viktig.`,
    },
    {
      id: 'naturbruk-vg1-1-def-1',
      type: 'definition',
      title: 'Okosystem',
      content: `Et okosystem er et avgrenset omrade i naturen der levende organismer (planter, dyr, mikroorganismer) lever sammen og pavirker hverandre og det ikke-levende miljoet (vann, jord, luft, temperatur).`,
    },
    {
      id: 'naturbruk-vg1-1-text-1',
      type: 'text',
      content: `**Okosystemets bestanddeler**

Et okosystem bestar av to hovedkomponenter:

**1. Biotiske faktorer (levende)**
- Produsenter (planter, alger) - lager naring gjennom fotosyntese
- Konsumenter (planteetere, rovdyr) - spiser andre organismer
- Nedbrytere (sopp, bakterier) - bryter ned dodt organisk materiale

**2. Abiotiske faktorer (ikke-levende)**
- Sollys og temperatur
- Vann og nedbor
- Jordsmonn og berggrunn
- Luft og vindforhold`,
    },
    {
      id: 'naturbruk-vg1-1-def-2',
      type: 'definition',
      title: 'Naringskjede',
      content: `En naringskjede viser hvordan naring (energi) overfores fra en organisme til en annen. Den starter alltid med en produsent og gar via konsumenter til toppen av kjeden.`,
    },
    {
      id: 'naturbruk-vg1-1-text-2',
      type: 'text',
      content: `**Naringskjeder og naringsnett**

**Enkel naringskjede i skog:**
Plante -> Hare -> Rev -> Ornen

**Trofiske nivaer:**
1. Produsenter (planter)
2. Primarekonsumenter (planteetere)
3. Sekundarkonsumenter (smarovdyr)
4. Tertiarkonsumenter (topprovdyr)

**Naringsnett:**
I virkeligheten er naringskjedene sammenkoblet i komplekse naringsnett der en art kan ha flere matkilder og flere predatorer.

**Energioverflring:**
- Kun ca. 10% av energien overfores til neste niva
- Resten brukes til stoffskifte eller tapes som varme
- Derfor er det alltid flere organismer pa lavere nivaer`,
    },
    {
      id: 'naturbruk-vg1-1-def-3',
      type: 'definition',
      title: 'Biologisk mangfold',
      content: `Biologisk mangfold (biodiversitet) er variasjonen av liv pa jorda - mangfoldet av arter, gener innenfor artene, og okosystemene de lever i.`,
    },
    {
      id: 'naturbruk-vg1-1-text-3',
      type: 'text',
      content: `**Biologisk mangfold**

**Tre nivaer av biodiversitet:**
1. **Genetisk mangfold** - variasjonen innenfor en art
2. **Artsmangfold** - antall ulike arter i et omrade
3. **Okosystemmangfold** - variasjonen av naturtyper

**Hvorfor er biologisk mangfold viktig?**
- Okosystemtjenester (pollinering, vannrensing, karbonlagring)
- Matproduksjon og medisin
- Motstandskraft mot endringer
- Estetisk og kulturell verdi

**Trusler mot biologisk mangfold:**
- Arealendringer og habitatodeleggelse
- Klimaendringer
- Forurensning
- Fremmede arter
- Overhosting`,
    },
    {
      id: 'naturbruk-vg1-1-tip-1',
      type: 'tip',
      title: 'Nokklelarter',
      content: `Nokkelarter er arter som har uforholdsmessig stor betydning for okosystemet. Hvis de forsvinner, kan hele okosystemet endres dramatisk. Eksempel: Beveren skaper damner som gir leveomrade for mange andre arter.`,
    },
    {
      id: 'naturbruk-vg1-1-text-4',
      type: 'text',
      content: `**Norske naturtyper**

**Skog (38% av Norges areal)**
- Barskog (gran, furu)
- Loovskog (bjork, or, osp)
- Gammelskog med dodt trevirke

**Fjell og vidde**
- Snaufjell over tregrensen
- Palsmyr og fjellmyr
- Rabber og snoleier

**Vaetmarker**
- Myrer (torvmoser, starr)
- Deltaer og elvemunninger
- Tidevannssoner

**Kyst og hav**
- Strandsone
- Tareskoger
- Korallrev

**Kulturlandskap**
- Slattenger og beitemaker
- Kystlynghei
- Lauveng`,
    },
    {
      id: 'naturbruk-vg1-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-1-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er et okosystem?',
        subTasks: [
          {
            label: 'a',
            task: 'Forklar hva et okosystem er med egne ord.',
            solution: 'Et okosystem er et avgrenset omrade der levende organismer lever sammen og pavirker hverandre og det ikke-levende miljoet rundt seg.',
          },
          {
            label: 'b',
            task: 'Gi eksempler pa biotiske og abiotiske faktorer.',
            solution: 'Biotiske: planter, dyr, sopp, bakterier. Abiotiske: temperatur, vann, sollys, jordsmonn.',
          },
        ],
        solution: 'Et okosystem er et avgrenset naturomrade med levende organismer og deres ikke-levende miljo som pavirker hverandre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-1-ex-2',
        number: '2',
        type: 'classic',
        task: 'Lag en naringskjede med fire ledd fra et norsk skogsokosystem.',
        solution: 'Eksempel: Blabarbusk -> Hare -> Rev -> Kongeorn. Eller: Gras -> Elg -> Ulv. Viktig at den starter med en produsent (plante).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-1-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er biologisk mangfold, og hvorfor er det viktig?',
        solution: 'Biologisk mangfold er variasjonen av liv pa tre nivaer: gener, arter og okosystemer. Det er viktig fordi det gir okosystemtjenester, mat og medisin, og gjor naturen mer motstandsdyktig mot endringer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-1-ex-4',
        number: '4',
        type: 'classic',
        task: 'Nevn fire trusler mot biologisk mangfold.',
        solution: 'Arealendringer/habitatodeleggelse, klimaendringer, forurensning, fremmede arter og overhosting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-1-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er en nokkelart? Gi et eksempel.',
        solution: 'En nokkelart er en art som har uforholdsmessig stor betydning for okosystemet. Eksempel: Beveren som skaper dammer og vatomrader som gir leveomrader for mange andre arter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 2: Jord og plantelare
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_2: TextbookChapter = {
  id: 'naturbruk-vg1-2',
  courseId: 'naturbruk-vg1',
  chapterNumber: '2',
  title: 'Jord og plantelare',
  description: 'Jordtyper, jordkvalitet og plantevekst.',
  estimatedMinutes: 65,
  competenceGoals: [
    'beskrive ulike jordtyper og deres egenskaper',
    'forklare hva planter trenger for a vokse',
  ],
  content: [
    {
      id: 'naturbruk-vg1-2-intro',
      type: 'text',
      content: `Jord er grunnlaget for det meste av matproduksjonen var og for mange okosystemer. A forsta jordens oppbygning og planters behov er avgjorende for a lykkes med dyrking og forvaltning av naturressurser.`,
    },
    {
      id: 'naturbruk-vg1-2-def-1',
      type: 'definition',
      title: 'Jord',
      content: `Jord er det overste laget av jordskorpen der planter kan vokse. Den bestar av mineraler, organisk materiale, luft, vann og levende organismer.`,
    },
    {
      id: 'naturbruk-vg1-2-text-1',
      type: 'text',
      content: `**Jordens oppbygning**

**Jordprofil - lag fra overflaten og nedover:**

**O-sjiktet (strofallet)**
- Dodt organisk materiale
- Lov, barnaler, kvister

**A-sjiktet (matjordlaget)**
- Mork farge, rikt pa humus
- Mest biologisk aktivitet
- Viktigst for plantevekst

**B-sjiktet (utfellingssjiktet)**
- Mineraler som er vasket ned
- Ofte rustfarget (jernforbindelser)

**C-sjiktet (opphavsmaterialet)**
- Loft eller fast berggrunn
- Utgangspunktet for jorddannelse`,
    },
    {
      id: 'naturbruk-vg1-2-def-2',
      type: 'definition',
      title: 'Humus',
      content: `Humus er det vel omdannede organiske materialet i jorda. Det gir jorda mork farge, bedrer strukturen, holder pa vann og naeringsstoffer, og er viktig for jordas fruktbarhet.`,
    },
    {
      id: 'naturbruk-vg1-2-text-2',
      type: 'text',
      content: `**Jordtyper basert pa kornstorrelse**

**Sand (0,06-2 mm)**
- Store porer, god drenering
- Varmes raskt opp
- Holder darlig pa vann og naring
- Lett a arbeide med

**Silt (0,002-0,06 mm)**
- Middels porer
- God naeringskapasitet
- Kan fa skorpe og pakkes

**Leire (< 0,002 mm)**
- Sma porer, holder godt pa vann
- Rik pa naeringsstoffer
- Tung a arbeide med
- Kan bli vannmettet

**Idealjord (moldrik leirholdig sand)**
- Blanding av sand, silt og leire
- God struktur og drenering
- Holder pa naring og vann`,
    },
    {
      id: 'naturbruk-vg1-2-text-3',
      type: 'text',
      content: `**Hva planter trenger for a vokse**

**1. Lys**
- Energikilde for fotosyntese
- Ulike planter har ulike lyskrav

**2. Vann**
- Transport av naeringsstoffer
- Kjolning gjennom fordampning
- Byggestein i fotosyntese

**3. Karbondioksid (CO2)**
- Tas opp gjennom bladene
- Brukes i fotosyntese

**4. Naeringsstoffer**
Makronaeringsstoffer:
- Nitrogen (N) - bladvekst
- Fosfor (P) - rotvekst og blomstring
- Kalium (K) - motstandskraft

Mikronaeringsstoffer:
- Jern, mangan, sink, kobber m.fl.

**5. Oksygen**
- Til rotandingen
- Viktig med god jordstruktur`,
    },
    {
      id: 'naturbruk-vg1-2-def-3',
      type: 'definition',
      title: 'Fotosyntese',
      content: `Fotosyntese er prosessen der planter bruker sollys til a omdanne karbondioksid og vann til sukker (glukose) og oksygen. Det er grunnlaget for nesten alt liv pa jorda.`,
    },
    {
      id: 'naturbruk-vg1-2-text-4',
      type: 'text',
      content: `**pH og kalking**

**pH-skalaen:**
- 0-6: Surt
- 7: Noytral
- 8-14: Basisk/alkalisk

**Optimal pH for de fleste planter: 6,0-7,0**

**Virkning av pH:**
- Pavirker tilgjengeligheten av naeringsstoffer
- For sur jord: Aluminium kan bli giftig
- For basisk jord: Jern og mangan blir utilgjengelig

**Kalking:**
- Hever pH i sur jord
- Kalktyper: Dolomitkalk, skjellsand
- Ma gjores jevnlig i omrader med mye nedbor`,
    },
    {
      id: 'naturbruk-vg1-2-tip-1',
      type: 'tip',
      title: 'Jordtest',
      content: `Ta jordprover og send til analyse for a finne ut pH, naeringsinnhold og jordtype. Dette gir grunnlag for riktig gjodsling og kalking. Ta prover fra flere steder og bland sammen for et representativt resultat.`,
    },
    {
      id: 'naturbruk-vg1-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-2-ex-1',
        number: '1',
        type: 'classic',
        task: 'Beskriv de fire hovedsjiktene i en jordprofil.',
        solution: 'O-sjikt (strofal med dodt organisk materiale), A-sjikt (matjordlag med humus), B-sjikt (utfellingslag med utvaskede mineraler), C-sjikt (opphavsmateriale/berggrunn).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-2-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er forskjellen pa sandjord og leirjord?',
        solution: 'Sandjord har store porer, god drenering, varmes raskt opp, men holder darlig pa vann og naring. Leirjord har sma porer, holder godt pa vann og naring, men er tung a arbeide med og kan bli vannmettet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-2-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn fem ting planter trenger for a vokse.',
        solution: 'Lys, vann, karbondioksid (CO2), naeringsstoffer og oksygen til rotene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-2-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er humus og hvorfor er det viktig?',
        solution: 'Humus er vel omdannet organisk materiale i jorda. Det er viktig fordi det gir jorda god struktur, holder pa vann og naeringsstoffer, og bidrar til jordas fruktbarhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-2-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor kalker man jord, og hva er optimal pH for de fleste planter?',
        solution: 'Man kalker for a heve pH i sur jord, noe som gjor naeringsstoffer mer tilgjengelige for plantene. Optimal pH for de fleste planter er 6,0-7,0.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-2-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hva er fotosyntese?',
        solution: 'Fotosyntese er prosessen der planter bruker sollys til a omdanne karbondioksid og vann til sukker (glukose) og oksygen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 3: Skogbruk
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_3: TextbookChapter = {
  id: 'naturbruk-vg1-3',
  courseId: 'naturbruk-vg1',
  chapterNumber: '3',
  title: 'Skogbruk',
  description: 'Skogforvaltning og trevirke.',
  estimatedMinutes: 60,
  competenceGoals: [
    'beskrive ulike former for skogsdrift',
    'forklare skogens betydning for samfunn og miljo',
  ],
  content: [
    {
      id: 'naturbruk-vg1-3-intro',
      type: 'text',
      content: `Norge er et skogland. Omtrent 38% av landarealet er dekket av skog, og skogbruket har vart en viktig naring i hundrevis av ar. I dag er barekraftig skogforvaltning viktigere enn noen gang - bade for okonomien og for klimaet.`,
    },
    {
      id: 'naturbruk-vg1-3-def-1',
      type: 'definition',
      title: 'Skogbruk',
      content: `Skogbruk er naeringen som omfatter dyrking, stell og hosting av skog. Det inkluderer alt fra planting av nye trar til hogst, transport og salg av tommervirke.`,
    },
    {
      id: 'naturbruk-vg1-3-text-1',
      type: 'text',
      content: `**Norske treslag**

**Bartrær:**
- **Gran** - Norges viktigste tommer, lange fibre
- **Furu** - Hardere ved, brukes til konstruksjon
- **Lerk** - Svart holdbar, brukes utendors

**Lovtrer:**
- **Bjork** - Vanligst, brukes til ved og finér
- **Or** - Vokser raskt, brukes til finér
- **Osp** - Lett ved, brukes til fyrstikker og papir
- **Eik** - Hardved, mobler og parkettgulv
- **Ask, lonn, alm** - Verdifulle lovtrer`,
    },
    {
      id: 'naturbruk-vg1-3-def-2',
      type: 'definition',
      title: 'Bestand',
      content: `Et bestand er et avgrenset skogsomrade med noenlunde ensartet tresetting nar det gjelder treslag, alder og tetthet. Bestandet er grunnenheten i skogforvaltning.`,
    },
    {
      id: 'naturbruk-vg1-3-text-2',
      type: 'text',
      content: `**Skogproduksjon - fra fro til tommer**

**1. Etablering**
- Planting av skogsplanter
- Naturlig foryngelse
- Saing (sjelden brukt)

**2. Ungskogpleie**
- Rydding av konkurrerende vegetasjon
- Tynning for a gi de beste traerne plass

**3. Tynning**
- Fjerning av noen trer for a gi bedre vekst
- Gir inntekt underveis
- Foretast flere ganger

**4. Slutthogstn**
- Flatehogst (alt tas pa en gang)
- Lukkede hogster (selektiv hogst)
- Normalt etter 60-120 ar`,
    },
    {
      id: 'naturbruk-vg1-3-text-3',
      type: 'text',
      content: `**Hogstformer**

**Flatehogst**
- All skog i et omrade hogges
- Effektivt og lonsomt
- Krever nyplanting
- Stor visuell pavirkning

**Lukket hogst**
- Uttak av enkelttrær eller grupper
- Skogen forynger seg selv
- Bevarer skogfolelsen
- Mer arbeidskrevende

**Frøtresilling**
- Noen store trer settes igjen
- Gir fro til naturlig foryngelse
- Trerene hogges etter noen ar`,
    },
    {
      id: 'naturbruk-vg1-3-def-3',
      type: 'definition',
      title: 'PEFC og FSC',
      content: `PEFC (Programme for the Endorsement of Forest Certification) og FSC (Forest Stewardship Council) er internasjonale sertifiseringsordninger som garanterer at trevirke kommer fra barekraftig forvaltet skog.`,
    },
    {
      id: 'naturbruk-vg1-3-text-4',
      type: 'text',
      content: `**Skogens betydning**

**Okonomisk betydning:**
- Tommer til bygg og konstruksjon
- Papir og papp
- Bioenergi (ved, pellets)
- Arbeidsplasser i distriktene

**Miljobetydning:**
- Karbonlagring (skog binder CO2)
- Biologisk mangfold
- Vannrensing og flomdemping
- Luftkvalitet

**Sosial betydning:**
- Friluftsliv og rekreasjon
- Jakt og fiske
- Kulturhistoriske verdier
- Helse og velvare`,
    },
    {
      id: 'naturbruk-vg1-3-tip-1',
      type: 'tip',
      title: 'Skogfond',
      content: `Alle som selger tommer i Norge ma sette av penger til skogfond. Disse pengene brukes til tiltak i egen skog, som planting, ungskogpleie og bygging av skogsbilveier.`,
    },
    {
      id: 'naturbruk-vg1-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn tre vanlige bartrær og tre vanlige lovtrer i norsk skog.',
        solution: 'Bartrar: Gran, furu, lerk. Lovtrer: Bjork, or, osp (eller eik, ask, lonn, alm).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv de fire fasene i skogproduksjon.',
        solution: '1. Etablering (planting eller naturlig foryngelse), 2. Ungskogpleie (rydding og tynning), 3. Tynning (fjerning av noen trar), 4. Slutthogst (hogst av moden skog).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er forskjellen pa flatehogst og lukket hogst?',
        solution: 'Flatehogst: All skog i et omrade hogges pa en gang, krever nyplanting. Lukket hogst: Uttak av enkelttrær eller grupper, skogen forynger seg selv, bevarer skogfolelsen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er PEFC og FSC?',
        solution: 'PEFC og FSC er internasjonale sertifiseringsordninger som garanterer at trevirke kommer fra barekraftig forvaltet skog.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-3-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn tre okonomiske, tre miljo- og tre sosiale betydninger av skog.',
        solution: 'Okonomisk: Tommer, papir, bioenergi. Miljo: Karbonlagring, biologisk mangfold, vannrensing. Sosial: Friluftsliv, jakt/fiske, helse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 4: Dyrehold og dyrevelferd
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_4: TextbookChapter = {
  id: 'naturbruk-vg1-4',
  courseId: 'naturbruk-vg1',
  chapterNumber: '4',
  title: 'Dyrehold og dyrevelferd',
  description: 'Husdyrhold og ansvarlig dyrestell.',
  estimatedMinutes: 60,
  competenceGoals: [
    'beskrive grunnleggende dyrevelferd',
    'forklare dyrs grunnleggende behov',
  ],
  content: [
    {
      id: 'naturbruk-vg1-4-intro',
      type: 'text',
      content: `Dyrehold har lang tradisjon i Norge, og dyrevelferd star hoyt pa agendaen. A forstå dyrs behov og hvordan vi kan ivareta dem pa en god mate er en viktig del av naturbruksfaget.`,
    },
    {
      id: 'naturbruk-vg1-4-def-1',
      type: 'definition',
      title: 'Dyrevelferd',
      content: `Dyrevelferd handler om dyrs livskvalitet - bade fysisk og psykisk. God dyrevelferd innebarer at dyret har det bra, er friskt, far dekket sine naturlige behov og kan utfolde naturlig atferd.`,
    },
    {
      id: 'naturbruk-vg1-4-text-1',
      type: 'text',
      content: `**De fem friheter**

I 1965 formulerte Brambell-kommisjonen i Storbritannia de fem friheter som grunnlag for dyrevelferd:

**1. Frihet fra sult og torste**
- Tilgang pa friskt vann
- Foring tilpasset art og behov

**2. Frihet fra fysisk ubehag**
- Egnet oppholdssted
- Beskyttelse mot var og kulde

**3. Frihet fra smerte, skade og sykdom**
- Forebygging og rask behandling
- Tilsyn fra veterinaer

**4. Frihet til a utove naturlig atferd**
- Nok plass og stimuli
- Kontakt med artsfrender

**5. Frihet fra frykt og stress**
- Behandling som unngår lidelse
- Trygge omgivelser`,
    },
    {
      id: 'naturbruk-vg1-4-def-2',
      type: 'definition',
      title: 'Dyrevelferdsloven',
      content: `Dyrevelferdsloven er den norske loven som regulerer dyrehold. Den slår fast at dyr har egenverdi uavhengig av nytten de har for mennesker, og at de skal behandles godt og beskyttes mot fare for unodige pastninger og belastninger.`,
    },
    {
      id: 'naturbruk-vg1-4-text-2',
      type: 'text',
      content: `**Vanlige husdyr i Norge**

**Storfe (kyr og okser)**
- Melkeproduksjon og kjott
- Behovn: Beite, fribevegelse, sosialt samvar

**Sau**
- Kjott og ull
- Utmarksbeite sommerstid
- Behov: Flokk, beite, ly

**Gris**
- Kjottroduksjon
- Behov: Rotingsmuligheter, stimuli, sosialt

**Hons**
- Egg og kjott
- Behov: Vagle, sandbad, hakke/skrape

**Hest**
- Sport, rekreasjon, arbeid
- Behov: Bevegelse, sosialt, beite

**Geit**
- Melk og kjott
- Behov: Klatre, bevegelse, sosialt`,
    },
    {
      id: 'naturbruk-vg1-4-text-3',
      type: 'text',
      content: `**Grunnleggende dyrestell**

**Foring**
- Tilpasset art, alder og produksjon
- Fast foringsrutine
- Rent for og friskt vann
- Tilgang til mineraler/vitaminer

**Renhold**
- Rene liggeomrader
- Ren pels/fjordrakt
- Forebygger sykdom

**Tilsyn**
- Daglig sjekk av alle dyr
- Observere atferd og helse
- Oppdage sykdom tidlig

**Handtering**
- Rolig og sikker handtering
- Kjenne dyras atferd
- Bygge tillit over tid`,
    },
    {
      id: 'naturbruk-vg1-4-tip-1',
      type: 'tip',
      title: 'Tegn pa god dyrevelferd',
      content: `Friske dyr er nysgjerrige, har blanke oyne, god appetitt, normal avforing og normal aktivitet. De soker kontakt med artsfrender og viser artstypisk atferd. Lar deg a kjenne normalatferden for a oppdage avvik tidlig.`,
    },
    {
      id: 'naturbruk-vg1-4-text-4',
      type: 'text',
      content: `**Forebygging av sykdom**

**Smittevern**
- Karantene for nye dyr
- Renhold av stall og utstyr
- Begrenset besok fra uvedkommende

**Vaksinering**
- Forebygger alvorlige sykdommer
- Folg veterinarens anbefalinger

**Parasittkontroll**
- Avlusning og ormekurer
- Veksle beiteomrader

**Stress og sykdom**
- Stress svekker immunforsvaret
- Rolige rutiner forebygger sykdom`,
    },
    {
      id: 'naturbruk-vg1-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er de fem friheter?',
        solution: 'De fem friheter er: 1. Frihet fra sult og torste, 2. Frihet fra fysisk ubehag, 3. Frihet fra smerte, skade og sykdom, 4. Frihet til a utove naturlig atferd, 5. Frihet fra frykt og stress.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva sier dyrevelferdsloven om dyrs egenverdi?',
        solution: 'Dyrevelferdsloven slar fast at dyr har egenverdi uavhengig av nytten de har for mennesker, og at de skal behandles godt og beskyttes mot fare for unodige pastninger og belastninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre vanlige husdyr i Norge og deres viktigste behov.',
        solution: 'Eksempel: Sau (flokk, beite, ly), Gris (rotingsmuligheter, stimuli, sosialt), Hons (vagle, sandbad, hakke/skrape).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvordan kan man forebygge sykdom hos husdyr?',
        solution: 'Smittevern (karantene, renhold), vaksinering, parasittkontroll og redusere stress gjennom rolige rutiner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-4-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvordan kan du se at et dyr har god dyrevelferd?',
        solution: 'Friske dyr er nysgjerrige, har blanke oyne, god appetitt, normal avforing og aktivitet. De soker kontakt med artsfrender og viser artstypisk atferd.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5: Landbruk og matproduksjon
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_5: TextbookChapter = {
  id: 'naturbruk-vg1-5',
  courseId: 'naturbruk-vg1',
  chapterNumber: '5',
  title: 'Landbruk og matproduksjon',
  description: 'Plantedyrking og matproduksjon.',
  estimatedMinutes: 65,
  competenceGoals: [
    'beskrive ulike former for planteproduksjon',
    'forklare matproduksjonens betydning for samfunnet',
  ],
  content: [
    {
      id: 'naturbruk-vg1-5-intro',
      type: 'text',
      content: `Landbruket er grunnlaget for matforsyningen var. I Norge produserer vi en betydelig del av maten vi spiser selv, noe som er viktig bade for mattryggheten og for a opprettholde bosetting i distriktene.`,
    },
    {
      id: 'naturbruk-vg1-5-def-1',
      type: 'definition',
      title: 'Landbruk',
      content: `Landbruk er naringen som omfatter dyrking av planter og hold av husdyr for a produsere mat, for og andre ravarer. Det inkluderer akerdrift, husdyrhold, hagebruk og skogbruk.`,
    },
    {
      id: 'naturbruk-vg1-5-text-1',
      type: 'text',
      content: `**Planteproduksjon i Norge**

**Korn**
- Hvete, bygg, havre, rug
- Hovedsakelig Ostlandet og Trondelag
- Brukes til mat, for og ol

**Poteter**
- Dyrkes over hele landet
- Viktig matplante
- Lagres gjennom vinteren

**Gronnsaker**
- Gulrot, kalrot, kal, lok
- Dyrkes pa friland og i veksthus

**Frukt og bar**
- Epler, parer, plommer
- Moreller, jorbar, bringebaer
- Hardanger, Sogn, Lade

**Gras og for**
- Viktigst malt i areal
- For til husdyr
- Eng og beite`,
    },
    {
      id: 'naturbruk-vg1-5-def-2',
      type: 'definition',
      title: 'Vekstskifte',
      content: `Vekstskifte er a dyrke ulike vekster pa samme jord fra ar til ar. Dette forebygger sykdom og skadedyr, forbedrer jordstrukturen og utnytter naeringsstoffene bedre.`,
    },
    {
      id: 'naturbruk-vg1-5-text-2',
      type: 'text',
      content: `**Arets gang pa garden**

**Var (mars-mai)**
- Jordarbeiding og saing
- Gjodsling
- Utplanting av planter
- Dyrene slippes ut

**Sommer (juni-august)**
- Slatt og hoying
- Vatning ved torke
- Plantevern
- Inhosting av tidlige vekster

**Host (september-november)**
- Korntresking
- Potet- og gronnsakhosti
- Ploying for vinteren
- Dyrene tas inn

**Vinter (desember-februar)**
- Inneforing av dyr
- Vedlikehold av maskiner
- Planlegging av neste sesong`,
    },
    {
      id: 'naturbruk-vg1-5-text-3',
      type: 'text',
      content: `**Gjodsling**

**Hvorfor gjodsle?**
- Erstatte naeringsstoffer som tas ut ved hosting
- Oke avlingene
- Sikre plantenes naringsbehov

**Typer gjodsel:**

**Mineralgjodsel (kunstgjodsel)**
- Industrielt fremstilt
- Presise naeringsinnhold
- NPK: Nitrogen, fosfor, kalium

**Husdyrgjodsel**
- Naturlig fra dyrehold
- Inneholder organisk materiale
- Forbedrer jordstrukturen

**Kompost**
- Nedbrutt organisk materiale
- Forbedrer jord og naering`,
    },
    {
      id: 'naturbruk-vg1-5-def-3',
      type: 'definition',
      title: 'Selvforsyningsgrad',
      content: `Selvforsyningsgraden er andelen av matforbruket som dekkes av norsk produksjon. Norges selvforsyningsgrad er ca. 45-50%, men den varierer mellom ulike matvarer.`,
    },
    {
      id: 'naturbruk-vg1-5-text-4',
      type: 'text',
      content: `**Norsk matproduksjon**

**Hoy selvforsyning:**
- Melk og meieriprodukter (100%)
- Kjott av storfe, sau, svin (90%+)
- Egg (100%)
- Poteter (75%)

**Lav selvforsyning:**
- Korn til mat (30%)
- Frukt og gronnsaker (varierende)
- Fisk (vi eksporterer mye)

**Utfordringer:**
- Begrenset dyrkbart areal
- Kort vekstsesong
- Hoye produksjonskostnader
- Klimaendringer`,
    },
    {
      id: 'naturbruk-vg1-5-tip-1',
      type: 'tip',
      title: 'Presisjonsjordbruk',
      content: `Moderne teknologi som GPS, droner og sensorer brukes for a optimalisere gjodsling, vatning og plantevern. Dette reduserer miljopavirkingen og oker effektiviteten.`,
    },
    {
      id: 'naturbruk-vg1-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn fem typer planteproduksjon i Norge.',
        solution: 'Korn (hvete, bygg), poteter, gronnsaker, frukt og bar, gras og for.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er vekstskifte og hvorfor er det viktig?',
        solution: 'Vekstskifte er a dyrke ulike vekster pa samme jord fra ar til ar. Det er viktig fordi det forebygger sykdom og skadedyr, forbedrer jordstrukturen og utnytter naeringsstoffene bedre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-ex-3',
        number: '3',
        type: 'classic',
        task: 'Beskriv de viktigste oppgavene pa garden gjennom arets fire arsider.',
        solution: 'Var: Jordarbeiding, saing, gjodsling. Sommer: Slatt, vatning, plantevern. Host: Tresking, hosting, ploying. Vinter: Inneforing, vedlikehold, planlegging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er forskjellen pa mineralgjodsel og husdyrgjodsel?',
        solution: 'Mineralgjodsel er industrielt fremstilt med presise naeringsinnhold. Husdyrgjodsel er naturlig fra dyrehold, inneholder organisk materiale og forbedrer jordstrukturen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er Norges selvforsyningsgrad, og hvilke matvarer har vi hoy selvforsyning pa?',
        solution: 'Norges selvforsyningsgrad er ca. 45-50%. Vi har hoy selvforsyning pa melk og meieriprodukter (100%), kjott (90%+), egg (100%) og poteter (75%).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-5-ex-6',
        number: '6',
        type: 'classic',
        task: 'Hva menes med NPK i gjodsling?',
        solution: 'NPK star for Nitrogen (N), Fosfor (P) og Kalium (K), de tre viktigste naeringsstoffene for plantevekst.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 6: Akvakultur og fiskeri
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_6: TextbookChapter = {
  id: 'naturbruk-vg1-6',
  courseId: 'naturbruk-vg1',
  chapterNumber: '6',
  title: 'Akvakultur og fiskeri',
  description: 'Fiskeoppdrett og ressursforvaltning i havet.',
  estimatedMinutes: 55,
  competenceGoals: [
    'beskrive akvakultur og fiskeri i Norge',
    'forklare utfordringer med barekraftig havbruk',
  ],
  content: [
    {
      id: 'naturbruk-vg1-6-intro',
      type: 'text',
      content: `Norge er en av verdens storste sjomatnasjoner. Kystlinjen var strekker seg over 100 000 kilometer, og havet har i uminnelige tider gitt oss mat og inntekter. I dag er oppdrett av laks var nest storste eksportnaring etter olje og gass.`,
    },
    {
      id: 'naturbruk-vg1-6-def-1',
      type: 'definition',
      title: 'Akvakultur',
      content: `Akvakultur er kontrollert oppdrett av vannlevende organismer som fisk, skalldyr, blotdyr og tang/tare. Det skjer i merder i sjoen, kar pa land eller i dammer.`,
    },
    {
      id: 'naturbruk-vg1-6-text-1',
      type: 'text',
      content: `**Oppdrett i Norge**

**Laks (atlanterhavslaks)**
- Viktigste oppdrettsart
- Ca. 1,5 millioner tonn arlig
- Oppdrett i merder i sjoen

**Orret (regnbueorret)**
- Nummer to i volum
- Oppdrett lignende laks

**Andre arter:**
- Torsk (under utvikling)
- Kveite
- Blaskjell
- Osters
- Tang og tare`,
    },
    {
      id: 'naturbruk-vg1-6-def-2',
      type: 'definition',
      title: 'Merd',
      content: `En merd er en not- eller garnkonstruksjon som holder fisken pa plass i sjoen. Moderne merder er store, opptil 50-60 meter i diameter, og kan romme hundretusenvis av fisk.`,
    },
    {
      id: 'naturbruk-vg1-6-text-2',
      type: 'text',
      content: `**Laksens livssyklus i oppdrett**

**1. Stamfisk**
- Utvalgte avlsfisk
- Rogn og melke strykes

**2. Klekking (ferskvann)**
- Rogn klekker etter ca. 60 dager
- Yngel med plommesekk

**3. Settefisk (ferskvann)**
- Vokser til 60-100 gram
- Smoltifisering

**4. Utsett i sjo**
- Smolten tilpasser seg saltvann
- Overflres til merder

**5. Produksjon (sjo)**
- Vokser i 12-24 maneder
- For, stell og tilsyn

**6. Slakting**
- Ved 4-6 kg
- Bedoving, avliving, sloying`,
    },
    {
      id: 'naturbruk-vg1-6-text-3',
      type: 'text',
      content: `**Tradisjonelt fiske**

**Kystfiske:**
- Sma bater
- Garn, line, ruser
- Torsk, sei, hyse

**Havfiske:**
- Tralere og ringnotfartoy
- Sild, makrell, lodde
- Kvoteregulert

**Viktige fiskeslag:**
- Torsk
- Sild
- Makrell
- Sei
- Hyse
- Reker
- Krabbe`,
    },
    {
      id: 'naturbruk-vg1-6-text-4',
      type: 'text',
      content: `**Utfordringer i akvakultur**

**Lakselus**
- Parasitt som angriper laks
- Sprer seg til villaks
- Krever behandling

**Romming**
- Oppdrettslaks kan romme
- Genetisk pavirking av villaks

**Forurensning**
- Utslipp av for og avfall
- Lokal pavirking av sjobunnen

**For**
- Inneholder fiskeolje og fiskemel
- Utfordring a finne barekraftige kilder

**Sykdom**
- Virussjukdommer
- Bakterieinfeksjoner`,
    },
    {
      id: 'naturbruk-vg1-6-tip-1',
      type: 'tip',
      title: 'Barekraftig havbruk',
      content: `Naringen jobber med mange losninger: Lukkede anlegg pa land, sterile laks (kan ikke formere seg), biologisk lusekontroll med rensefisk, og utvikling av plantebasert for.`,
    },
    {
      id: 'naturbruk-vg1-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er akvakultur?',
        solution: 'Akvakultur er kontrollert oppdrett av vannlevende organismer som fisk, skalldyr, blotdyr og tang/tare.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-ex-2',
        number: '2',
        type: 'classic',
        task: 'Beskriv laksens livssyklus i oppdrett.',
        solution: '1. Stamfisk gir rogn og melke, 2. Klekking i ferskvann, 3. Settefisk vokser i ferskvann, 4. Smolt settes ut i sjo, 5. Vokser i merder i 12-24 maneder, 6. Slaktes ved 4-6 kg.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre utfordringer i oppdrettsnaeringen.',
        solution: 'Lakselus, romming av fisk og genetisk pavirkning av villaks, forurensning/utslipp, fôrutfordringer, sykdommer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva er en merd?',
        solution: 'En merd er en not- eller garnkonstruksjon som holder fisken pa plass i sjoen. Moderne merder kan vare opptil 50-60 meter i diameter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-6-ex-5',
        number: '5',
        type: 'classic',
        task: 'Nevn tre viktige fiskeslag i norsk fiske.',
        solution: 'Torsk, sild, makrell, sei, hyse, reker eller krabbe.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 7: Utmarksforvaltning
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_7: TextbookChapter = {
  id: 'naturbruk-vg1-7',
  courseId: 'naturbruk-vg1',
  chapterNumber: '7',
  title: 'Utmarksforvaltning',
  description: 'Jakt, fiske og barekraftig forvaltning.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forklare prinsipper for barekraftig utmarksforvaltning',
    'beskrive rettigheter og plikter i utmark',
  ],
  content: [
    {
      id: 'naturbruk-vg1-7-intro',
      type: 'text',
      content: `Utmarka dekker det meste av Norges areal. Her finner vi ressurser som vilt, fisk, beite og bar. Forvaltning av disse ressursene krever kunnskap, ansvar og samarbeid mellom grunneiere, jegere, fiskere og myndigheter.`,
    },
    {
      id: 'naturbruk-vg1-7-def-1',
      type: 'definition',
      title: 'Utmark',
      content: `Utmark er omrader som ikke er innmark (jordbruksareal eller inngjerdet). Utmark omfatter skog, fjell, myr og vann som ikke er i privat opparbeidet stand.`,
    },
    {
      id: 'naturbruk-vg1-7-text-1',
      type: 'text',
      content: `**Allemannsretten**

Allemannsretten gir alle rett til a ferdes og oppholde seg i norsk utmark, uavhengig av hvem som eier grunnen.

**Du har rett til:**
- Ferdes til fots i utmark
- Sykle og ri pa stier og veier
- Bade og padle
- Telte i inntil 2 netter (150 m fra hus)
- Plukke bar, sopp og blomster

**Begrensninger:**
- Respekter dyrket mark
- Ikke forsople
- Vis hensyn til naturen
- Folg lokale regler
- Hold avstand til boliger`,
    },
    {
      id: 'naturbruk-vg1-7-def-2',
      type: 'definition',
      title: 'Barekraftig hosting',
      content: `Barekraftig hosting betyr a ta ut ressurser (vilt, fisk, bar) pa en mate som sikrer at bestandene opprettholdes for fremtiden. Vi hoster ikke mer enn naturen produserer.`,
    },
    {
      id: 'naturbruk-vg1-7-text-2',
      type: 'text',
      content: `**Viltforvaltning**

**Formal:**
- Sikre levedyktige bestander
- Gi mulighet for jakt
- Begrense skader pa jordbruk

**Verktoy:**
- Jakttider (nar jakt er tillatt)
- Kvoter (hvor mye kan felles)
- Fredning (arer eller omrader)

**Storvilt i Norge:**
- Elg
- Hjort
- Radyr
- Villrein
- Rovdyr (ulv, bjorn, gaupe, jerv)`,
    },
    {
      id: 'naturbruk-vg1-7-text-3',
      type: 'text',
      content: `**Fiskef orvaltning**

**Ferskvannsfiske:**
- Laks og sjoorre (krev fiskekort)
- Innlandsfisk (varierende regler)
- Kultivering og utsetting

**Reguleringer:**
- Fisketider
- Minstemaal
- Redskapsregler
- Fangstrapportering

**Organisering:**
- Grunneierlag
- Elveeierlag
- Fylkeskommunen
- Statsforvalteren`,
    },
    {
      id: 'naturbruk-vg1-7-text-4',
      type: 'text',
      content: `**Andre utmarksressurser**

**Beite:**
- Sau, geit, storfe
- Utmarksbeite sommerstid
- Beitelag og organisering

**Baer og sopp:**
- Molte, tytebaer, blaabar
- Kantarell, steinsopp
- Allemannsretten gjelder

**Rekreasjon:**
- Turgaing og friluftsliv
- Naturbasert reiseliv
- Okende betydning`,
    },
    {
      id: 'naturbruk-vg1-7-tip-1',
      type: 'tip',
      title: 'Grunneiers rettigheter',
      content: `Grunneieren har jakt- og fiskerett pa sin eiendom, men ma ogsa forvalte ressursene ansvarlig. Jakt og fiske kan selges eller leies ut til andre. Inntekter fra utmark kan vaere viktig for mange gardsbruk.`,
    },
    {
      id: 'naturbruk-vg1-7-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva er allemannsretten?',
        solution: 'Allemannsretten gir alle rett til a ferdes og oppholde seg i norsk utmark, uavhengig av hvem som eier grunnen. Den inkluderer rett til a ga, sykle, bade, telte og plukke bar.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva menes med barekraftig hosting?',
        solution: 'Barekraftig hosting betyr a ta ut ressurser pa en mate som sikrer at bestandene opprettholdes for fremtiden. Vi hoster ikke mer enn naturen produserer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre verktoy som brukes i viltforvaltning.',
        solution: 'Jakttider (nar jakt er tillatt), kvoter (hvor mye kan felles) og fredning (arter eller omrader).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-7-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-7-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hvilke storvilt har vi i Norge?',
        solution: 'Elg, hjort, radyr, villrein og rovdyr (ulv, bjorn, gaupe, jerv).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 8: Friluftsliv og naturveiledning
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_8: TextbookChapter = {
  id: 'naturbruk-vg1-8',
  courseId: 'naturbruk-vg1',
  chapterNumber: '8',
  title: 'Friluftsliv og naturveiledning',
  description: 'Naturopplevelser og veiledning.',
  estimatedMinutes: 50,
  competenceGoals: [
    'planlegge og gjennomfore friluftsaktiviteter',
    'formidle kunnskap om natur',
  ],
  content: [
    {
      id: 'naturbruk-vg1-8-intro',
      type: 'text',
      content: `Friluftsliv er en viktig del av norsk kultur og identitet. A ferdes i naturen gir bade fysiske og psykiske helsegevinster. Naturveiledning handler om a dele kunnskap og begeistring for naturen med andre.`,
    },
    {
      id: 'naturbruk-vg1-8-def-1',
      type: 'definition',
      title: 'Friluftsliv',
      content: `Friluftsliv er opphold og fysisk aktivitet i friluft i fritiden, med sikte pa miljofornming og naturopplevelse. Det omfatter alt fra spaserturer til fjellklatring.`,
    },
    {
      id: 'naturbruk-vg1-8-text-1',
      type: 'text',
      content: `**Friluftsaktiviteter**

**Sommer:**
- Fottur og fjelltur
- Sykling
- Padling (kano, kajakk)
- Fisking
- Bading
- Klatring

**Vinter:**
- Skigaing
- Truger og snoskogaing
- Isfiske
- Skoyting
- Hundekjoring

**Helars:**
- Fugletitting
- Sopp- og barplukking
- Fotografering
- Orientering`,
    },
    {
      id: 'naturbruk-vg1-8-def-2',
      type: 'definition',
      title: 'Naturveiledning',
      content: `Naturveiledning er a formidle kunnskap om natur, okologi og miljo til andre. En naturveileder bruker opplevelser og praktiske aktiviteter for a skape interesse og forstaelse for naturen.`,
    },
    {
      id: 'naturbruk-vg1-8-text-2',
      type: 'text',
      content: `**Planlegging av tur**

**For turen:**
- Sjekk varsel og forhold
- Planlegg rute
- Informer andre om planer
- Pakk riktig utstyr

**Fjellvettreglene:**
1. Planlegg turen og meld fra
2. Tilpass turen etter evne og forhold
3. Ta hensyn til var- og skredvarsel
4. Vaer forberedt pa uvaar og kulde
5. Ta med nodvendig utstyr
6. Ta trygge valg i bratt terreng
7. Bruk kart og kompass
8. Vend i tide
9. Spar pa kreftene og sok ly ved behov

**Pakkeliste:**
- Ekstra klar og varme lag
- Mat og varme drikker
- Kart og kompass
- Forstehjelp
- Lommelykt
- Fyrstikker/lighter`,
    },
    {
      id: 'naturbruk-vg1-8-text-3',
      type: 'text',
      content: `**Naturveiledning i praksis**

**Gode formidlingsmetoder:**
- Fortell historier
- Bruk sansene (se, hore, lukte, ta pa)
- Still sporsmaal
- La deltakerne oppdage selv
- Tilpass til malgruppen

**Eksempel pa aktiviteter:**
- Artsjakt med lupe
- Sporing av dyr
- Natursti med poster
- Fugletitting
- Innsamling og pressing av planter

**Sikkerhet:**
- Kjennskapet til omradet
- Vurder gruppens ferdighetsniva
- Ha nodvendig utstyr
- Forsikring og ansvar`,
    },
    {
      id: 'naturbruk-vg1-8-tip-1',
      type: 'tip',
      title: 'Sporloshet',
      content: `"Leave No Trace" - la naturen vaere slik du fant den. Ta med alt du tok med, folg stier, unnga a forstyrre dyreliv, og la blomster sta slik at andre ogsa kan glede seg over dem.`,
    },
    {
      id: 'naturbruk-vg1-8-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn fem ulike friluftsaktiviteter.',
        solution: 'Eksempler: Fottur, skitur, padling, fisking, sykling, klatring, fugletitting.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-ex-2',
        number: '2',
        type: 'classic',
        task: 'List opp minst fem av fjellvettreglene.',
        solution: 'Planlegg turen, tilpass etter evne og forhold, ta hensyn til varsel, vaer forberedt pa uvear, ta med nodvendig utstyr, vend i tide, bruk kart og kompass.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hva er naturveiledning?',
        solution: 'Naturveiledning er a formidle kunnskap om natur, okologi og miljo til andre, gjerne gjennom opplevelser og praktiske aktiviteter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-8-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-8-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva bor du ha med pa en dagstur i fjellet?',
        solution: 'Ekstra klar, varme lag, mat og drikke, kart og kompass, forstehjelp, lommelykt, fyrstikker/lighter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 9: Maskinlaere og verktoy
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_9: TextbookChapter = {
  id: 'naturbruk-vg1-9',
  courseId: 'naturbruk-vg1',
  chapterNumber: '9',
  title: 'Maskinlaere og verktoy',
  description: 'Maskiner og utstyr i naturbruk.',
  estimatedMinutes: 60,
  competenceGoals: [
    'beskrive vanlige maskiner og redskaper i naturbruk',
    'forklare sikker bruk og vedlikehold',
  ],
  content: [
    {
      id: 'naturbruk-vg1-9-intro',
      type: 'text',
      content: `Maskiner og redskaper er uunnvaerlige i moderne naturbruk. Fra traktoren pa garden til motorsaga i skogen - teknologien gjor arbeidet mer effektivt. Men maskiner krever kunnskap om sikker bruk og godt vedlikehold.`,
    },
    {
      id: 'naturbruk-vg1-9-def-1',
      type: 'definition',
      title: 'Traktor',
      content: `En traktor er et motorisert kjoretoy beregnet pa a trekke redskaper og tilhengere. Den har stor motorkraft, firehjulstrekk og kraftuttak (PTO) for a drive redskaper.`,
    },
    {
      id: 'naturbruk-vg1-9-text-1',
      type: 'text',
      content: `**Vanlige maskiner i naturbruk**

**Traktor**
- Mest brukte maskinen
- Trekker plog, slaamaskin, vogn
- Kraftuttak (PTO) driver redskaper
- Hydraulikk for lofting

**ATV/UTV**
- All Terrain Vehicle
- Til transport i ulendt terreng
- Tilsyn, gjeting, jakt

**Motorsag**
- Felling og kvisting av traer
- Krever opplaering og verneutstyr
- Elektriske og bensinmotorer

**Ryddesag/kantklippar**
- Rydding av kratt og gress
- Lettere enn motorsag`,
    },
    {
      id: 'naturbruk-vg1-9-def-2',
      type: 'definition',
      title: 'Kraftuttak (PTO)',
      content: `Kraftuttak (Power Take-Off) er en roterande aksel pa traktoren som overforer kraft til tilkoblede redskaper. Standard hastighet er 540 eller 1000 omdreininger per minutt.`,
    },
    {
      id: 'naturbruk-vg1-9-text-2',
      type: 'text',
      content: `**Redskaper til traktor**

**Jordarbeiding:**
- Plog - snur jorda
- Harv - finfordeler og jevner
- Kultivator - losner jorda

**Saing og planting:**
- Samaskin
- Kunstgjodselspreder
- Potetsettemaskin

**Hosting:**
- Slaamaskin
- Rive
- Rundballepresse
- Skurtresker (stor maskin)

**Annet:**
- Frontlaster
- Vogn/henger
- Snofresar`,
    },
    {
      id: 'naturbruk-vg1-9-text-3',
      type: 'text',
      content: `**Handverktoy**

**Graveredskaper:**
- Spade (graving)
- Greip (lofting, kompost)
- Hakke (loshakking)

**Klipperedskaper:**
- Sekatorer (sma greiner)
- Hekksaks
- Grensag

**Annet:**
- Rive
- Trillebaar
- Hammer og tang
- Skrutrekkere`,
    },
    {
      id: 'naturbruk-vg1-9-text-4',
      type: 'text',
      content: `**Vedlikehold av maskiner**

**Daglig tilsyn:**
- Sjekk oljeniva
- Kontroller dekk/belter
- Se etter lekkasjer
- Rengjor luft/oljefilter

**Periodisk vedlikehold:**
- Oljeskift (motor, hydraulikk)
- Filterskift
- Smoring av ledd og lagre
- Kontroll av bremser

**Sesongbasert:**
- Vinterlagring (tap av drivstoff, batteri)
- Vargjoring (service, sjekk)
- Rustbehandling`,
    },
    {
      id: 'naturbruk-vg1-9-tip-1',
      type: 'tip',
      title: 'Instruktionsbok',
      content: `Les alltid instruksjonsboken for nye maskiner. Den inneholder viktig informasjon om sikker bruk, vedlikeholdsintervaller og feilsoking. Oppbevar den pa et tilgjengelig sted.`,
    },
    {
      id: 'naturbruk-vg1-9-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-9-ex-1',
        number: '1',
        type: 'classic',
        task: 'Nevn fire vanlige maskiner i naturbruk.',
        solution: 'Traktor, ATV/UTV, motorsag, ryddesag, skurtresker, rundballepresse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-9-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-9-ex-2',
        number: '2',
        type: 'classic',
        task: 'Hva er et kraftuttak (PTO)?',
        solution: 'Kraftuttak er en roterende aksel pa traktoren som overforer kraft til tilkoblede redskaper. Standard hastighet er 540 eller 1000 omdreininger per minutt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-9-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-9-ex-3',
        number: '3',
        type: 'classic',
        task: 'Nevn tre redskaper som brukes til jordarbeiding.',
        solution: 'Plog (snur jorda), harv (finfordeler), kultivator (losner jorda).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-9-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-9-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva bor man sjekke ved daglig tilsyn av traktor?',
        solution: 'Oljeniva, dekk/belter, lekkasjer, luft- og oljefilter.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-9-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-9-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hvorfor er vedlikehold av maskiner viktig?',
        solution: 'Vedlikehold forlenger maskinens levetid, sikrer at den fungerer optimalt, forebygger dyre reparasjoner og reduserer risikoen for uhell.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 10: HMS og sikkerhet
// ============================================================================

export const CHAPTER_NATURBRUK_VG1_10: TextbookChapter = {
  id: 'naturbruk-vg1-10',
  courseId: 'naturbruk-vg1',
  chapterNumber: '10',
  title: 'HMS og sikkerhet',
  description: 'Arbeidsmiljo og sikkerhet i naturbruk.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjore rede for HMS-krav i naturbruk',
    'identifisere farer og forebygge ulykker',
  ],
  content: [
    {
      id: 'naturbruk-vg1-10-intro',
      type: 'text',
      content: `Naturbruk inneberer arbeid med maskiner, dyr og i ulendt terreng. Dette gjor det til en av naringene med flest arbeidsulykker. God kunnskap om HMS (Helse, Miljo og Sikkerhet) er avgjorende for a forebygge skader og ulykker.`,
    },
    {
      id: 'naturbruk-vg1-10-def-1',
      type: 'definition',
      title: 'HMS',
      content: `HMS star for Helse, Miljo og Sikkerhet. Det handler om a forebygge skader og sykdom pa arbeidsplassen, ta vare pa det ytre miljoet og sikre trygg drift.`,
    },
    {
      id: 'naturbruk-vg1-10-text-1',
      type: 'text',
      content: `**Risikoer i naturbruk**

**Maskinarbeid:**
- Velt med traktor
- Klemskader
- Kraftuttaksskader
- Motorsagulykker

**Dyrehandtering:**
- Spark og stanging
- Klemming
- Allergier

**Fallulykker:**
- Fall fra hoyder
- Snubling
- Utglidning

**Miljopavirkning:**
- Kjemikalier og plantevernmidler
- Stov og allergener
- Stoy`,
    },
    {
      id: 'naturbruk-vg1-10-def-2',
      type: 'definition',
      title: 'Verneutstyr',
      content: `Verneutstyr er personlig sikkerhetsutstyr som beskytter mot skader. Eksempler er hjelm, vernesko, horselsvern, vernebriller, hansker og verneklaer.`,
    },
    {
      id: 'naturbruk-vg1-10-text-2',
      type: 'text',
      content: `**Verneutstyr i naturbruk**

**Motorsagarbeid:**
- Hjelm med visir og horselsvern
- Vernebukse med sagbeskyttelse
- Vernesko med staletaa
- Hansker

**Traktorarbeid:**
- Hoysynlighetsklâr
- Vernesko
- Horselsvern ved behov

**Dyrehandtering:**
- Vernesko
- Hansker
- Hoysynlighetsvest

**Sproyting:**
- Drakt og hansker
- Andingsvern
- Vernebriller`,
    },
    {
      id: 'naturbruk-vg1-10-text-3',
      type: 'text',
      content: `**Sikkert arbeid med maskiner**

**Generelle regler:**
- Aldri arbeid alene med farlige oppgaver
- Bruk verneutstyr
- Folg instrukser og prosedyrer
- Vear oppmerksom og uthvilt

**Traktor:**
- Bruk belte
- Kjor med veltebuyle
- Tilpass hastighet til terreng
- Koble fra kraftuttak for av-/pasmg

**Motorsag:**
- Kun etter gjennomgaat opplaering
- Sikker felling teknikk
- Hold avstand til andre
- Vear oppmerksom pa "kickback"`,
    },
    {
      id: 'naturbruk-vg1-10-text-4',
      type: 'text',
      content: `**Forstehjelp**

**Viktige prinsipper:**
- Sikre skadestedet
- Varsle nodvendig hjelp (113)
- Gi livreddende forstehjelp

**Grunnleggende forstehjelp:**
- Stopp blodning (trykk og elevasjon)
- Stabilt sideleie ved bevisstloshet
- HLR ved hjertestans
- Sjokk: Varme og berolige

**Forstehjelpsveske:**
- Ha tilgjengelig pa arbeidsstedet
- Inneholder bandasjer, plaster, saks
- Sjekk innhold jevnlig`,
    },
    {
      id: 'naturbruk-vg1-10-tip-1',
      type: 'tip',
      title: 'Risikovurdering',
      content: `For du starter en arbeidsoppgave: Stopp og tenk. Hvilke farer er det? Hva kan ga galt? Hvordan kan jeg gjore arbeidet tryggere? Denne rutinen kan forebygge mange ulykker.`,
    },
    {
      id: 'naturbruk-vg1-10-ex-1',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-10-ex-1',
        number: '1',
        type: 'classic',
        task: 'Hva star HMS for?',
        solution: 'HMS star for Helse, Miljo og Sikkerhet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-10-ex-2',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-10-ex-2',
        number: '2',
        type: 'classic',
        task: 'Nevn fire risikoer ved arbeid i naturbruk.',
        solution: 'Maskinulykker (velt, klemskader), dyrehandtering (spark, klemming), fallulykker, miljopavirkning (kjemikalier, stov, stoy).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-10-ex-3',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-10-ex-3',
        number: '3',
        type: 'classic',
        task: 'Hvilket verneutstyr trengs ved motorsagarbeid?',
        solution: 'Hjelm med visir og horselsvern, vernebukse med sagbeskyttelse, vernesko med staletaa, og hansker.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-10-ex-4',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-10-ex-4',
        number: '4',
        type: 'classic',
        task: 'Hva bor du gjore for a gi forstehjelp ved en ulykke?',
        solution: 'Sikre skadestedet, varsle nodvendig hjelp (ring 113), gi livreddende forstehjelp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'naturbruk-vg1-10-ex-5',
      type: 'exercise',
      exercise: {
        id: 'naturbruk-vg1-10-ex-5',
        number: '5',
        type: 'classic',
        task: 'Hva er en risikovurdering?',
        solution: 'En risikovurdering er a stoppe og tenke for man starter et arbeid: Hvilke farer finnes? Hva kan ga galt? Hvordan kan arbeidet gjores tryggere?',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// Eksporter alle kapitler som en array
export const CHAPTERS_NATURBRUK_VG1 = [
  CHAPTER_NATURBRUK_VG1_1,
  CHAPTER_NATURBRUK_VG1_2,
  CHAPTER_NATURBRUK_VG1_3,
  CHAPTER_NATURBRUK_VG1_4,
  CHAPTER_NATURBRUK_VG1_5,
  CHAPTER_NATURBRUK_VG1_6,
  CHAPTER_NATURBRUK_VG1_7,
  CHAPTER_NATURBRUK_VG1_8,
  CHAPTER_NATURBRUK_VG1_9,
  CHAPTER_NATURBRUK_VG1_10,
];
