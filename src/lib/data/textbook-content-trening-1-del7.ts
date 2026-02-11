/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Treningslære 1 (VG2) - Seksjon 7: Ernæring og restitusjon
 * 5 delkapitler (7.1-7.5)
 *
 * Dekker LK20-kompetansemål for treningslære 1
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Næringsstoffer
// ============================================================================

export const CHAPTER_TRENING_1_7_1: TextbookChapter = {
  id: 'trening-1-7-1',
  courseId: 'trening-1',
  chapterNumber: '7.1',
  title: 'Næringsstoffer',
  description: 'Karbohydrater, proteiner, fett, vitaminer, mineraler og vann — kroppens byggeklosser og drivstoff.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for de ulike næringsstoffene og deres funksjoner i kroppen',
    'forklare forskjellen mellom makro- og mikronæringsstoffer',
    'vurdere sammensetningen av et balansert kosthold',
  ],
  content: [
    {
      id: 'tr-7-1-intro',
      type: 'text',
      content: `Kroppen trenger et bredt spekter av næringsstoffer for å fungere optimalt. For idrettsutøvere og fysisk aktive personer er det særlig viktig å forstå hva de ulike næringsstoffene gjør, og hvordan de bidrar til energi, restitusjon og helse. Vi deler næringsstoffene i to hovedgrupper: **makronæringsstoffer** (karbohydrater, proteiner og fett) som vi trenger i store mengder, og **mikronæringsstoffer** (vitaminer og mineraler) som vi trenger i små mengder. I tillegg er **vann** helt avgjørende for alle kroppens funksjoner.`,
    },
    {
      id: 'tr-7-1-def-makro',
      type: 'definition',
      title: 'Makronæringsstoffer',
      content: 'Makronæringsstoffer er næringsstoffer kroppen trenger i store mengder for å dekke energibehovet og bygge opp vev. De tre makronæringsstoffene er karbohydrater, proteiner og fett. Hver av dem har ulike funksjoner og gir ulik mengde energi per gram.',
    },
    {
      id: 'tr-7-1-text-karbo',
      type: 'text',
      title: 'Karbohydrater',
      content: `Karbohydrater er kroppens viktigste og mest tilgjengelige energikilde, særlig under fysisk aktivitet med høy intensitet.

**Energiinnhold:** 4 kcal (17 kJ) per gram

**Typer karbohydrater:**
- **Monosakkarider** (enkle sukkerarter): Glukose, fruktose og galaktose. Tas raskt opp i blodet.
- **Disakkarider** (sammensatte sukkerarter): Sukrose (vanlig sukker), laktose (melkesukker), maltose. Spaltes til monosakkarider under fordøyelsen.
- **Polysakkarider** (stivelse og fiber): Stivelse finnes i brød, pasta, ris og poteter. Fiber finnes i grønnsaker, frukt og fullkorn. Gir langvarig energi.

**Glykogen — kroppens karbohydratlager:**
- Kroppen lagrer karbohydrater som glykogen i lever og muskler.
- Leverglykogen (ca. 100 g) regulerer blodsukkeret.
- Muskelglykogen (ca. 400 g) brukes lokalt som energi under trening.
- Glykogenlagrene er begrenset og tømmes ved langvarig eller intensiv aktivitet.

**Karbohydrater og trening:**
- Ved høy intensitet (over 70 % av VO₂maks) er karbohydrater den dominerende energikilden.
- Glykogentomme muskler fører til utmattelse, ofte kalt «å gå i veggen».
- Etter trening er det viktig å fylle opp glykogenlagrene for optimal restitusjon.`,
    },
    {
      id: 'tr-7-1-text-protein',
      type: 'text',
      title: 'Proteiner',
      content: `Proteiner er kroppens byggemateriale og har en sentral rolle i oppbygging og reparasjon av muskelvev.

**Energiinnhold:** 4 kcal (17 kJ) per gram

**Oppbygning:**
- Proteiner er bygget opp av **aminosyrer**, som er lenket sammen i lange kjeder.
- Det finnes 20 ulike aminosyrer. Av disse er **9 essensielle** — de kan ikke kroppen lage selv og må tilføres gjennom kosten.
- **Komplett protein** inneholder alle essensielle aminosyrer (kjøtt, fisk, egg, meieriprodukter).
- **Inkomplett protein** mangler én eller flere essensielle aminosyrer (de fleste planteproteiner). Kan kombineres for å dekke behovet.

**Funksjoner i kroppen:**
- Bygging og reparasjon av muskelvev
- Enzymer og hormoner
- Immunforsvar (antistoffer)
- Transport av stoffer i blodet (hemoglobin, albumin)
- Energikilde ved mangel på karbohydrater og fett

**Proteinbehov:**
- Vanlig anbefaling: 0,8 g per kg kroppsvekt per dag
- Styrketrening: 1,6–2,2 g per kg kroppsvekt per dag
- Utholdenhetsidrett: 1,2–1,6 g per kg kroppsvekt per dag`,
    },
    {
      id: 'tr-7-1-text-fett',
      type: 'text',
      title: 'Fett',
      content: `Fett er kroppens mest energitette næringsstoff og en viktig energikilde ved lav til moderat intensitet.

**Energiinnhold:** 9 kcal (37 kJ) per gram

**Typer fettsyrer:**
- **Mettede fettsyrer:** Finnes i smør, ost, kjøtt. Bør begrenses, da høyt inntak er koblet til hjerte- og karsykdommer.
- **Enumettede fettsyrer:** Finnes i olivenolje, avokado, nøtter. Gunstig for helsen.
- **Flerumettede fettsyrer:** Inkluderer omega-3 (fet fisk, valnøtter) og omega-6 (solsikkeolje, mais). Essensielle — kroppen kan ikke lage dem selv.
- **Transfettsyrer:** Industrielt produsert. Bør unngås helt.

**Funksjoner i kroppen:**
- Energilager og energikilde (fettvev)
- Isolasjon og beskyttelse av organer
- Opptak av fettløselige vitaminer (A, D, E, K)
- Byggestein i cellemembraner
- Hormonproduksjon

**Fett og trening:**
- Ved lav til moderat intensitet (under 60 % av VO₂maks) er fett den viktigste energikilden.
- Godt utholdenhetstrente utøvere utnytter fett mer effektivt.
- Fettlagrene i kroppen er i praksis ubegrensede sammenlignet med glykogenlagrene.`,
    },
    {
      id: 'tr-7-1-def-mikro',
      type: 'definition',
      title: 'Mikronæringsstoffer',
      content: 'Mikronæringsstoffer er vitaminer og mineraler som kroppen trenger i små mengder for at stoffskiftet, immunforsvaret og cellefunksjonene skal fungere normalt. De gir ikke energi i seg selv, men er nødvendige for at energiomsetningen skal fungere.',
    },
    {
      id: 'tr-7-1-text-vitaminer',
      type: 'text',
      title: 'Vitaminer og mineraler',
      content: `**Vannløselige vitaminer** (B-vitaminer og vitamin C):
- Lagres ikke i kroppen — må tilføres daglig
- B-vitaminene er viktige for energiomsetningen
- Vitamin C styrker immunforsvaret og er nødvendig for kollagenproduksjon

**Fettløselige vitaminer** (A, D, E, K):
- Lagres i fettvev og lever
- Vitamin D er viktig for kalsiumopptak og benhelse — mange nordmenn har mangel vinterstid
- Vitamin E er en antioksidant som beskytter celler mot oksidativt stress

**Viktige mineraler for idrettsutøvere:**
- **Jern:** Nødvendig for oksygentransport i blodet (hemoglobin). Jernmangel gir tretthet og nedsatt prestasjon. Særlig aktuelt for kvinnelige utøvere.
- **Kalsium:** Avgjørende for sterke bein og muskelkontraksjon. Finnes i meieriprodukter, grønne grønnsaker og nøtter.
- **Magnesium:** Viktig for muskel- og nervefunksjon, samt energiomsetning.
- **Natrium og kalium:** Elektrolytter som regulerer væskebalansen. Tapes med svette under trening.
- **Sink:** Viktig for immunforsvar og sårheling.`,
    },
    {
      id: 'tr-7-1-text-vann',
      type: 'text',
      title: 'Vann',
      content: `Vann utgjør ca. 60 % av kroppsvekten og er involvert i nesten alle kroppens prosesser.

**Funksjoner:**
- Transportmedium for næringsstoffer og avfallsstoffer
- Temperaturregulering gjennom svette
- Smøremiddel i ledd
- Deltaker i kjemiske reaksjoner (hydrolyse)

**Væskebehov:**
- Generelt anbefalt: 2–3 liter per dag
- Under trening: 150–250 ml hvert 15.–20. minutt
- Etter trening: 1,5 liter per kg tapt kroppsvekt

**Dehydrering og prestasjon:**
- Allerede 2 % væsketap kan redusere prestasjonsevnen med 10–20 %
- Symptomer: tørste, hodepine, tretthet, svimmelhet, redusert konsentrasjon
- Alvorlig dehydrering er potensielt livstruende`,
    },
    {
      id: 'tr-7-1-note-1',
      type: 'note',
      title: 'Fargerik tallerken',
      content: 'En enkel tommelfingerregel for et balansert kosthold: spis variert og fargerikt. Ulike farger på frukt og grønnsaker indikerer ulike vitaminer og antioksidanter. Rød (tomat, paprika), oransje (gulrot, søtpotet), grønn (brokkoli, spinat), blå/lilla (blåbær, rødkål) og hvit (blomkål, hvitløk) bør alle være representert i kostholdet jevnlig.',
    },
    {
      id: 'tr-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-7-1-ex-1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket næringsstoff gir mest energi per gram?',
        options: [
          { id: 'a', text: 'Fett (9 kcal per gram)', isCorrect: true },
          { id: 'b', text: 'Karbohydrater (4 kcal per gram)', isCorrect: false },
          { id: 'c', text: 'Proteiner (4 kcal per gram)', isCorrect: false },
          { id: 'd', text: 'Vitaminer', isCorrect: false },
        ],
        solution: 'Fett gir 9 kcal (37 kJ) per gram, som er mer enn dobbelt så mye som karbohydrater og proteiner (begge 4 kcal per gram). Vitaminer og mineraler gir ikke energi.',
      },
    },
    {
      id: 'tr-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-7-1-ex-2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er essensielle aminosyrer?',
        options: [
          { id: 'a', text: 'Aminosyrer kroppen ikke kan lage selv og som må tilføres gjennom kosten', isCorrect: true },
          { id: 'b', text: 'Aminosyrer som bare finnes i kjøtt', isCorrect: false },
          { id: 'c', text: 'Aminosyrer som gir ekstra energi', isCorrect: false },
          { id: 'd', text: 'Aminosyrer som bare trengs av idrettsutøvere', isCorrect: false },
        ],
        solution: 'Essensielle aminosyrer er de 9 aminosyrene som kroppen ikke kan produsere selv. De må tilføres gjennom mat. Alle mennesker trenger dem, ikke bare idrettsutøvere.',
      },
    },
    {
      id: 'tr-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-7-1-ex-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom monosakkarider, disakkarider og polysakkarider. Gi eksempler på hver type og beskriv hvordan kroppen bruker dem.',
        solution: 'Monosakkarider (glukose, fruktose, galaktose) er enkle sukkerarter som tas raskt opp i blodet og gir rask energi. Disakkarider (sukrose, laktose, maltose) er sammensatt av to monosakkarider og må spaltes i fordøyelsen før opptak. Polysakkarider (stivelse, fiber, glykogen) er lange kjeder av monosakkarider. Stivelse fra brød, pasta og poteter gir langvarig energi fordi opptaket skjer gradvis. Fiber er ufordøyelig og viktig for tarmen. Glykogen er kroppens lagringsform for karbohydrater i lever og muskler.',
      },
    },
    {
      id: 'tr-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-7-1-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv de viktigste funksjonene til jern, kalsium og magnesium i kroppen. Hvorfor er disse mineralene spesielt viktige for idrettsutøvere?',
        solution: 'Jern er nødvendig for dannelsen av hemoglobin i røde blodceller, som transporterer oksygen til musklene. Jernmangel fører til anemi med symptomer som tretthet og nedsatt utholdenhet. Kalsium er avgjørende for beinbygging og muskelkontraksjon. Idrettsutøvere som trener mye, trenger sterke bein for å tåle belastningen. Magnesium er viktig for muskel- og nervefunksjon samt energiomsetning. Under trening øker behovet for alle disse mineralene på grunn av økt blodomsetning, muskelarbeid og svetteproduksjon.',
      },
    },
    {
      id: 'tr-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-7-1-ex-5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Lag et sammendrag der du forklarer hvordan de tre makronæringsstoffene samarbeider under en langvarig treningsøkt (for eksempel en 2-timers langdistanseløp). Beskriv hvilke næringsstoffer som brukes i ulike faser av økten og hva som skjer når glykogenlagrene tømmes.',
        solution: 'I starten av et langdistanseløp bruker kroppen hovedsakelig muskelglykogen (karbohydrater) som energikilde, særlig hvis intensiteten er moderat til høy. Samtidig bidrar fettforbrenningen med en del av energien. Etter hvert som løpet pågår og intensiteten holder seg moderat, øker andelen fett som energikilde gradvis. Etter 60–90 minutter begynner glykogenlagrene å bli lave. Leveren frigjør glukose for å opprettholde blodsukkeret. Når glykogenlagrene tømmes helt, opplever utøveren kraftig utmattelse — «å gå i veggen». Kroppen er da avhengig av fettforbrenning, som gir energi langsommere. Proteiner brukes normalt lite under trening, men ved langvarig aktivitet og tomme glykogenlagre kan kroppen bryte ned muskelprotein for å lage glukose (glukoneogenese). Dette er uønsket, da det bryter ned muskelmasse. Derfor er det viktig å innta karbohydrater underveis i langvarige økter.',
      },
    },
    {
      id: 'tr-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-7-1-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: En 70 kg tung mannlig fotballspiller spør deg om råd angående kostholdet sitt. Han trener 5 ganger i uken og spiser lite frukt og grønnsaker. Hvilke mikronæringsstoffer risikerer han å få for lite av, og hvilke konsekvenser kan dette ha for treningen og helsen hans? Gi konkrete kostholdsråd.',
        solution: 'Med lite frukt og grønnsaker risikerer fotballspilleren mangel på flere viktige mikronæringsstoffer. Vitamin C-mangel kan svekke immunforsvaret og øke risikoen for sykdom, noe som er kritisk med høy treningsbelastning. Antioksidantmangel (vitamin C, E, betakaroten) betyr at kroppen håndterer oksidativt stress fra hard trening dårligere. Jern kan være mangelfullt hvis han spiser lite grønne grønnsaker, noe som kan gi tretthet og redusert oksygentransport. Magnesium fra nøtter og grønne grønnsaker trengs for muskelkontraksjon — mangel kan gi kramper. Kalium fra frukt og grønnsaker er viktig for væskebalansen. Kostholdsråd: Spis minst 5 porsjoner frukt og grønnsaker daglig (varierte farger). Inkluder jernt rike matvarer som spinat og brokkoli. Spis nøtter og frø for magnesium. Spis frukt som bananer og appelsiner for kalium og vitamin C. Vurder vitamin D-tilskudd om vinteren. Et variert kosthold med nok frukt og grønnsaker vil styrke immunforsvaret, forbedre restitusjonen og støtte muskel- og nervefunksjonen.',
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 7.2: Energibehov og energibalanse
// ============================================================================

export const CHAPTER_TRENING_1_7_2: TextbookChapter = {
  id: 'trening-1-7-2',
  courseId: 'trening-1',
  chapterNumber: '7.2',
  title: 'Energibehov og energibalanse',
  description: 'Basalstoffskifte, aktivitetsnivå, kaloribalanse og energiomsetning under trening.',
  estimatedMinutes: 22,
  competenceGoals: [
    'forklare hva basalstoffskifte er og hvilke faktorer som påvirker det',
    'beregne omtrentlig daglig energibehov ut fra aktivitetsnivå',
    'gjøre rede for begrepene energibalanse, energioverskudd og energiunderskudd',
  ],
  content: [
    {
      id: 'tr-7-2-intro',
      type: 'text',
      content: `Energibehovet varierer stort fra person til person og avhenger av faktorer som kroppsstørrelse, kjønn, alder og aktivitetsnivå. For å prestere godt i idrett og opprettholde god helse, må energiinntaket gjennom mat og drikke tilpasses energiforbruket. Å forstå energibalansen er grunnleggende for å kunne planlegge et hensiktsmessig kosthold.`,
    },
    {
      id: 'tr-7-2-def-basal',
      type: 'definition',
      title: 'Basalstoffskifte (BMR)',
      content: 'Basalstoffskiftet (Basal Metabolic Rate, BMR) er den energimengden kroppen bruker i fullstendig hvile for å opprettholde livsnødvendige funksjoner som hjerteaktivitet, åndedrett, kroppstemperatur og cellefunksjoner. BMR utgjør vanligvis 60–75 % av det totale daglige energiforbruket.',
    },
    {
      id: 'tr-7-2-text-bmr',
      type: 'text',
      title: 'Faktorer som påvirker basalstoffskiftet',
      content: `**Muskelmasse:** Muskelvev er mer metabolsk aktivt enn fettvev. Mer muskelmasse gir høyere BMR.

**Kroppsstørrelse:** Større kropper har høyere BMR fordi det er mer vev å vedlikeholde.

**Alder:** BMR synker gradvis med alderen, delvis på grunn av tap av muskelmasse.

**Kjønn:** Menn har generelt høyere BMR enn kvinner, hovedsakelig på grunn av høyere andel muskelmasse og effekten av testosteron.

**Genetikk:** Individuelle forskjeller i stoffskiftehastighet er delvis genetisk bestemt.

**Hormoner:** Skjoldbruskkjertelhormoner (tyroksin) har stor innvirkning på BMR. Stresshormoner og veksthormoner påvirker også.

**Temperatur:** Kroppen bruker mer energi i kalde omgivelser for å opprettholde kroppstemperaturen.`,
    },
    {
      id: 'tr-7-2-text-energiforbruk',
      type: 'text',
      title: 'Totalt daglig energiforbruk',
      content: `Det totale daglige energiforbruket (TDEE — Total Daily Energy Expenditure) består av tre hovedkomponenter:

**1. Basalstoffskifte (BMR) — ca. 60–75 %**
Energi til grunnleggende livsfunksjoner i hvile.

**2. Termisk effekt av mat (TEF) — ca. 10 %**
Energi som brukes til å fordøye, absorbere og metabolisere mat. Proteiner har høyest termisk effekt (20–30 %), etterfulgt av karbohydrater (5–10 %) og fett (0–3 %).

**3. Aktivitetsrelatert energiforbruk — ca. 15–30 %**
All fysisk aktivitet utover hvile, fra daglige bevegelser til strukturert trening. Denne komponenten varierer mest mellom personer.

**PAL-faktor (Physical Activity Level):**
- Stillesittende: 1,2–1,4
- Lett aktiv: 1,4–1,6
- Moderat aktiv: 1,6–1,8
- Svært aktiv: 1,8–2,0
- Ekstremt aktiv (toppidrettsutøvere): 2,0–2,5

**Beregning:** TDEE = BMR × PAL-faktor`,
    },
    {
      id: 'tr-7-2-def-energibalanse',
      type: 'definition',
      title: 'Energibalanse',
      content: 'Energibalanse er forholdet mellom energiinntak (kalorier fra mat og drikke) og energiforbruk (basalstoffskifte + fysisk aktivitet + termisk effekt av mat). Når inntaket er lik forbruket, er man i energibalanse, og kroppsvekten holder seg stabil.',
    },
    {
      id: 'tr-7-2-text-balanse',
      type: 'text',
      title: 'Energibalanse, overskudd og underskudd',
      content: `**Energibalanse (inntak = forbruk):**
- Kroppsvekten er stabil
- Ideelt for vedlikehold av form og helse

**Energioverskudd (inntak > forbruk):**
- Kroppen lagrer overskuddsenergi, hovedsakelig som fett
- Nødvendig for muskelvekst i kombinasjon med styrketrening
- Kronisk overskudd fører til vektøkning og kan gi helseplager

**Energiunderskudd (inntak < forbruk):**
- Kroppen henter energi fra lagre (fett og glykogen)
- Nødvendig for vektreduksjon
- For stort underskudd kan føre til tap av muskelmasse, nedsatt prestasjon, hormonelle forstyrrelser og svekket immunforsvar

**Relativ energimangel i idrett (RED-S):**
RED-S oppstår når energiinntaket over tid er for lavt i forhold til treningsbelastningen. Konsekvenser kan være:
- Hormonforstyrrelser (bortfall av menstruasjon hos kvinner, lavt testosteron hos menn)
- Redusert beinmasse og økt risiko for stressbrudd
- Nedsatt prestasjon og restitusjon
- Psykiske plager og spiseforstyrrelser`,
    },
    {
      id: 'tr-7-2-warning-1',
      type: 'warning',
      title: 'Farene ved langvarig energiunderskudd',
      content: 'Langvarig og kraftig energiunderskudd er spesielt farlig for unge idrettsutøvere i vekst. Det kan føre til forsinket utvikling, svekket benhelse og spiseforstyrrelser. Vektregulering i idrett bør alltid skje gradvis, med maks 0,5–1 kg per uke, og helst i samarbeid med fagpersoner.',
    },
    {
      id: 'tr-7-2-example-1',
      type: 'example',
      title: 'Beregning av daglig energibehov',
      problem: 'En 18 år gammel mannlig fotballspiller veier 75 kg og har et estimert BMR på 1850 kcal. Han trener fotball 5 dager i uken og er ellers moderat aktiv i hverdagen. Beregn hans omtrentlige daglige energibehov.',
      solution: `**Løsning:**

Fotballspilleren er svært aktiv, noe som gir en PAL-faktor på ca. 1,9.

TDEE = BMR × PAL-faktor
TDEE = 1850 kcal × 1,9
TDEE ≈ **3515 kcal per dag**

For å holde stabil vekt bør han innta ca. 3500 kcal daglig. På treningsfrie dager kan behovet være lavere (PAL ca. 1,5), altså rundt 2775 kcal. Han bør justere inntaket etter aktivitetsnivået fra dag til dag.`,
    },
    {
      id: 'tr-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-7-2-ex-1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva utgjør den største andelen av det totale daglige energiforbruket hos de fleste mennesker?',
        options: [
          { id: 'a', text: 'Basalstoffskiftet (BMR)', isCorrect: true },
          { id: 'b', text: 'Fysisk aktivitet', isCorrect: false },
          { id: 'c', text: 'Termisk effekt av mat', isCorrect: false },
          { id: 'd', text: 'Hjerneaktivitet', isCorrect: false },
        ],
        solution: 'Basalstoffskiftet utgjør normalt 60–75 % av det totale daglige energiforbruket. Det er energien kroppen bruker på grunnleggende livsfunksjoner i hvile, som hjerteaktivitet, åndedrett og cellefunksjoner.',
      },
    },
    {
      id: 'tr-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-7-2-ex-2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er RED-S?',
        options: [
          { id: 'a', text: 'Relativ energimangel i idrett, der energiinntaket er for lavt i forhold til treningsbelastningen', isCorrect: true },
          { id: 'b', text: 'En treningsmetode for utholdenhetsidrett', isCorrect: false },
          { id: 'c', text: 'Et kosttilskudd for idrettsutøvere', isCorrect: false },
          { id: 'd', text: 'En type styrketreningsprogram', isCorrect: false },
        ],
        solution: 'RED-S (Relative Energy Deficiency in Sport) er en tilstand der energiinntaket over tid er utilstrekkelig i forhold til treningsbelastningen. Det kan ramme både kvinner og menn og fører til hormonforstyrrelser, redusert beinmasse, nedsatt prestasjon og andre helseproblemer.',
      },
    },
    {
      id: 'tr-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-7-2-ex-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som menes med termisk effekt av mat (TEF). Hvorfor har proteiner høyere TEF enn fett?',
        solution: 'Termisk effekt av mat (TEF) er den energien kroppen bruker på å fordøye, absorbere, transportere og metabolisere næringsstoffer. TEF utgjør ca. 10 % av det totale daglige energiforbruket. Proteiner har høyest TEF (20–30 %) fordi proteinnedbrytning og aminosyremetabolisme er komplekse prosesser som krever mye energi. Aminosyrene må deamineres, omdannes og brukes til proteinsyntese, noe som er energikrevende. Fett har lavest TEF (0–3 %) fordi fett kan lagres nesten direkte uten mye bearbeiding.',
      },
    },
    {
      id: 'tr-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-7-2-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En kvinnelig svømmer på 65 kg har et BMR på 1500 kcal. Hun trener svømming 6 dager i uken og er ellers aktiv. Beregn hennes daglige energibehov og fordel energien på makronæringsstoffene (anbefalt fordeling: 55 % karbohydrater, 20 % proteiner, 25 % fett).',
        solution: 'Med høyt aktivitetsnivå (6 treninger i uken) bruker vi PAL-faktor 2,0. TDEE = 1500 × 2,0 = 3000 kcal per dag. Fordeling på makronæringsstoffer: Karbohydrater (55 %): 3000 × 0,55 = 1650 kcal ÷ 4 kcal/g = 413 g. Proteiner (20 %): 3000 × 0,20 = 600 kcal ÷ 4 kcal/g = 150 g (tilsvarer 2,3 g/kg — passende for en idrettsutøver). Fett (25 %): 3000 × 0,25 = 750 kcal ÷ 9 kcal/g = 83 g. Totalt: 413 g karbohydrater, 150 g proteiner og 83 g fett per dag.',
      },
    },
    {
      id: 'tr-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-7-2-ex-5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: En ung håndballspiller ønsker å gå ned 3 kg i vekt for å bli raskere på banen, men uten å miste muskelmasse eller prestasjon. Bruk kunnskapen din om energibalanse, basalstoffskifte og næringsstoffer til å lage en plan. Diskuter også potensielle risikoer ved vektnedgang hos unge idrettsutøvere.',
        solution: 'En forsvarlig plan for vektnedgang innebærer et moderat energiunderskudd på 300–500 kcal per dag, som gir et vekttap på ca. 0,3–0,5 kg per uke. Med 3 kg å gå ned vil dette ta 6–10 uker. For å bevare muskelmasse er det viktig å opprettholde høyt proteininntak (1,6–2,2 g/kg/dag), fordelt på 4–5 måltider. Styrketreningen bør opprettholdes for å signalisere til kroppen at musklene trengs. Energiunderskuddet bør primært komme fra redusert fettinntak og noe redusert karbohydratinntak, men karbohydratinntaket rundt trening bør bevares. Risikoer ved vektnedgang hos unge utøvere inkluderer: RED-S med hormonforstyrrelser, redusert beinmasse og økt risiko for stressbrudd, svekket immunforsvar og økt sykdomsrisiko, nedsatt konsentrasjon og prestasjon, og risiko for å utvikle et usunt forhold til mat. Prosessen bør overvåkes av trener og eventuelt ernæringsfysiolog.',
      },
    },
    {
      id: 'tr-7-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-7-2-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Forklar hvordan de tre komponentene i det totale daglige energiforbruket (BMR, TEF og aktivitetsrelatert forbruk) påvirkes av henholdsvis stillesittende livsstil og et aktivt treningsprogram. Hva skjer med metabolismen over tid i hvert scenario?',
        solution: 'Ved stillesittende livsstil: BMR utgjør en svært stor andel av TDEE (opp mot 75 %). Aktivitetsrelatert forbruk er lavt (PAL ca. 1,2–1,4). Over tid fører inaktivitet til tap av muskelmasse, noe som senker BMR ytterligere. TEF forblir relativt konstant, men kan påvirkes av kostholdssammensetning. Resultatet er en negativ spiral der lavere BMR gjør det lettere å gå opp i vekt. Ved aktivt treningsprogram: Aktivitetsrelatert forbruk øker betydelig (PAL 1,8–2,5). Styrketrening øker muskelmassen, som hever BMR. Høyere energiforbruk krever mer matinntak, og TEF øker absolutt (men er fortsatt ca. 10 % av TDEE). Regelmessig trening kan også øke «afterburn»-effekten (EPOC — Excess Post-exercise Oxygen Consumption), som gir noe forhøyet energiforbruk i timene etter trening. Over tid gir et aktivt treningsprogram en positiv spiral med høyere BMR, bedre kroppssammensetning og mer effektiv energiomsetning.',
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 7.3: Kosthold for idrettsutøvere
// ============================================================================

export const CHAPTER_TRENING_1_7_3: TextbookChapter = {
  id: 'trening-1-7-3',
  courseId: 'trening-1',
  chapterNumber: '7.3',
  title: 'Kosthold for idrettsutøvere',
  description: 'Næringsstrategi før, under og etter trening, karbohydratlagring og periodisert ernæring.',
  estimatedMinutes: 23,
  competenceGoals: [
    'planlegge hensiktsmessig ernæring før, under og etter trening',
    'forklare prinsippene bak karbohydratlagring (karbohydratlading)',
    'vurdere næringsbehov for ulike idretter og treningsfaser',
  ],
  content: [
    {
      id: 'tr-7-3-intro',
      type: 'text',
      content: `Riktig ernæring til rett tid kan utgjøre en betydelig forskjell for prestasjon, restitusjon og langsiktig utvikling hos idrettsutøvere. Det handler ikke bare om hva du spiser, men også **når** og **hvordan** du planlegger måltidene i forhold til trening og konkurranse. I dette kapittelet ser vi på hvordan kostholdet bør tilpasses rundt treningsøkter og i ulike perioder av sesongen.`,
    },
    {
      id: 'tr-7-3-def-naeringsstrategi',
      type: 'definition',
      title: 'Næringsstrategi',
      content: 'En næringsstrategi er en bevisst plan for hva, hvor mye og når man skal spise og drikke for å optimalisere prestasjon, restitusjon og helse. Strategien tilpasses treningstype, intensitet, varighet og individuelle behov.',
    },
    {
      id: 'tr-7-3-text-for',
      type: 'text',
      title: 'Kosthold før trening',
      content: `Målet med måltidet før trening er å fylle glykogenlagrene, unngå sult og sikre god energitilgang under økten.

**Hovedmåltidet (3–4 timer før trening):**
- Karbohydratrikt, moderat protein, lite fett og fiber
- Eksempler: Pasta med kylling og tomatsaus, brødskiver med pålegg, ris med fisk
- Porsjonen bør være godt fordøyd før trening starter

**Lett mellommåltid (1–2 timer før trening):**
- Lettfordøyelige karbohydrater
- Eksempler: Banan, yoghurt med müsli, smoothie, brødskive med syltetøy
- Unngå mat som ligger tungt i magen

**Like før trening (0–30 minutter):**
- Eventuelt en liten karbohydratkilde
- Eksempler: Sportsdrikke, energigel, litt frukt
- Mange tåler ikke fast føde rett før intens trening

**Viktig:** Den individuelle toleransen varierer. Utøvere bør eksperimentere i trening — aldri prøve noe nytt på konkurransedag.`,
    },
    {
      id: 'tr-7-3-text-under',
      type: 'text',
      title: 'Kosthold under trening',
      content: `Behovet for næring under trening avhenger av aktivitetens varighet og intensitet.

**Kort trening (under 60 minutter):**
- Vann er som regel tilstrekkelig
- Glykogenlagrene rekker for de fleste aktiviteter

**Moderat varighet (60–90 minutter):**
- Sportsdrikke med karbohydrater og elektrolytter kan være gunstig
- Ca. 30–60 g karbohydrater per time

**Langvarig trening (over 90 minutter):**
- 60–90 g karbohydrater per time er anbefalt
- Kombinasjon av glukose og fruktose gir best opptak
- Eksempler: Sportsdrikke, energigeler, banan, rosiner
- Væskeinntak: 150–250 ml hvert 15.–20. minutt

**Elektrolytter:**
- Natrium er det viktigste elektrolyttet som tapes med svette
- Sportsdrikker inneholder natrium for å erstatte tap og fremme væskeopptak
- Ved langvarig aktivitet i varme kan salttabletter være aktuelt`,
    },
    {
      id: 'tr-7-3-text-etter',
      type: 'text',
      title: 'Kosthold etter trening',
      content: `Måltidene etter trening er avgjørende for restitusjonen. Hensikten er å fylle glykogenlagrene, starte muskelreparasjon og erstatte væske- og elektrolyttap.

**Det første 30–60 minuttene («det åpne vinduet»):**
- Kroppen er ekstra mottakelig for næringsopptak rett etter trening
- Karbohydrater: 1–1,2 g per kg kroppsvekt for å starte glykogengjenoppfylling
- Proteiner: 20–40 g for å stimulere muskelproteinsyntese
- Eksempler: Sjokolademelk, smoothie med banan og proteinpulver, yoghurt med frukt

**Hovedmåltid (1–3 timer etter trening):**
- Fullstendig måltid med karbohydrater, protein og noe fett
- Eksempler: Kylling med ris og grønnsaker, laks med pasta, omelett med brød

**Væskeerstatning:**
- Drikk 1,5 liter per kg tapt kroppsvekt
- Veie seg før og etter trening for å vurdere væsketapet
- Sportsdrikke eller vann med mat som inneholder natrium`,
    },
    {
      id: 'tr-7-3-def-karbolading',
      type: 'definition',
      title: 'Karbohydratlading',
      content: 'Karbohydratlading (karbolading) er en ernæringsstrategi der utøveren øker karbohydratinntaket i dagene før en langvarig konkurranse for å maksimere glykogenlagrene. Vanligvis økes karbohydratinntaket til 8–12 g per kg kroppsvekt i 1–3 dager før konkurranse, samtidig som treningsmengden reduseres.',
    },
    {
      id: 'tr-7-3-text-karbolading',
      type: 'text',
      title: 'Karbohydratlading i praksis',
      content: `**Hvem har nytte av karbohydratlading?**
- Utøvere i utholdenhetsidretter som varer over 90 minutter
- Maratonløpere, langrennsløpere, syklister, triatlonutøvere
- Mindre aktuelt for korte, intensive aktiviteter (sprint, styrketrening)

**Moderne metode (1–3 dager):**
1. Reduser treningsmengden gradvis siste 2–3 dager (tapering)
2. Øk karbohydratinntaket til 8–12 g per kg kroppsvekt
3. Velg lettfordøyelige karbohydrater: hvit pasta, ris, brød, sportsdrikke
4. Reduser fett- og fiberinntak for å unngå mageproblemer

**Effekt:**
- Kan øke glykogenlagrene med 50–100 % utover normalnivå
- Kan forbedre prestasjon med 2–3 % i langvarige konkurranser
- Utøveren kan føle seg tyngre og «oppblåst» på grunn av vannbinding (1 g glykogen binder ca. 3 g vann)`,
    },
    {
      id: 'tr-7-3-text-periodisering',
      type: 'text',
      title: 'Periodisert ernæring',
      content: `Akkurat som treningen periodiseres gjennom sesongen, bør også kostholdet tilpasses ulike faser.

**Grunntrening (store treningsmengder):**
- Høyt energiinntak for å dekke det store volumet
- Vekt på karbohydrater for å støtte høyt treningsvolum
- Fokus på næringsrik mat og god restitusjon

**Oppbyggingsfase (økt intensitet):**
- Tilpasset karbohydratinntak rundt de harde øktene
- Periodisert karbohydratinntak: mer rundt harde økter, mindre på lette dager
- Økt proteininntak for å støtte muskeloppbygging

**Konkurranse-/taperfase:**
- Karbohydratlading før nøkkelkonkurranser
- Testet og kjent mat — ingen eksperimenter
- Fokus på hydrering og velbehag

**Overgangsfase (friperiode):**
- Mer fleksibelt kosthold
- Moderat energiinntak tilpasset redusert aktivitet
- Mulighet for å «fylle på» med variert kost`,
    },
    {
      id: 'tr-7-3-tip-1',
      type: 'tip',
      title: 'Praktisk råd: Prøv i trening, ikke i konkurranse',
      content: 'Alle ernæringsstrategier bør testes i treningsperioden først. Mageproblemer under konkurranse er en av de vanligste årsakene til dårlige prestasjoner i utholdenhetsidretter. Finn ut hva som fungerer for deg gjennom systematisk utprøving i trening.',
    },
    {
      id: 'tr-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-7-3-ex-1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor mye karbohydrater anbefales per time under langvarig trening (over 90 minutter)?',
        options: [
          { id: 'a', text: '60–90 g per time', isCorrect: true },
          { id: 'b', text: '10–20 g per time', isCorrect: false },
          { id: 'c', text: '150–200 g per time', isCorrect: false },
          { id: 'd', text: 'Karbohydrater trengs ikke under trening', isCorrect: false },
        ],
        solution: 'Ved langvarig trening over 90 minutter anbefales 60–90 g karbohydrater per time. Kombinasjon av glukose og fruktose gir best opptak fordi de bruker ulike transportmekanismer i tarmen.',
      },
    },
    {
      id: 'tr-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-7-3-ex-2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hensikten med «det åpne vinduet» etter trening?',
        options: [
          { id: 'a', text: 'Kroppen er ekstra mottakelig for næringsopptak de første 30–60 minuttene etter trening', isCorrect: true },
          { id: 'b', text: 'Man bør unngå mat de første timene etter trening', isCorrect: false },
          { id: 'c', text: 'Vinduene i treningslokalet bør åpnes for frisk luft', isCorrect: false },
          { id: 'd', text: 'Kroppen forbrenner mest fett rett etter trening', isCorrect: false },
        ],
        solution: '«Det åpne vinduet» refererer til at kroppen er ekstra mottakelig for karbohydrat- og proteinopptak i de første 30–60 minuttene etter trening. Enzymaktiviteten for glykogensyntese er forhøyet, og musklene tar effektivt opp aminosyrer for reparasjon.',
      },
    },
    {
      id: 'tr-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-7-3-ex-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar prinsippet bak karbohydratlading. Når er det aktuelt å bruke denne strategien, og hvorfor fungerer den?',
        solution: 'Karbohydratlading innebærer at utøveren øker karbohydratinntaket til 8–12 g per kg kroppsvekt i 1–3 dager før en langvarig konkurranse, samtidig som treningsmengden reduseres (tapering). Strategien er aktuell for utholdenhetsidretter som varer over 90 minutter, som maraton, langrenn og sykling. Den fungerer fordi redusert trening gjør at musklene ikke tømmer glykogenlagrene, mens det høye karbohydratinntaket fyller dem opp utover normalnivå. Glykogenlagrene kan øke med 50–100 %, noe som gir utøveren tilgang på mer energi under konkurransen og kan utsette utmattelse. Et biprodukt er økt vannvekt, fordi 1 g glykogen binder ca. 3 g vann.',
      },
    },
    {
      id: 'tr-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-7-3-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Lag en kostplan for en håndballspiller som har kamp klokken 18:00. Beskriv hva hun bør spise til lunsj, mellommåltid og eventuelt like før kamp. Begrunn valgene dine.',
        solution: 'Lunsj (ca. kl. 13:00–14:00, 4 timer før kamp): Hovedmåltid med pasta og kylling i tomatsaus, med litt grønnsaker. Karbohydratrikt for å sikre fulle glykogenlagre. Moderat protein for metthet og muskelstøtte. Lite fett og fiber for god fordøyelse. Mellommåltid (ca. kl. 16:00, 2 timer før kamp): Yoghurt med müsli og banan, eller en smoothie. Lettfordøyelige karbohydrater som gir energi uten å ligge tungt i magen. Like før kamp (ca. kl. 17:30–17:45): En liten slurk sportsdrikke eller en energibar. Ikke nødvendig for alle, men noen opplever nytte av en liten karbohydratboost. Væske: Drikke jevnlig gjennom dagen, ca. 500 ml i de siste 2 timene før kamp. Urin bør være lysegul. Håndball varer ca. 60 minutter effektiv spilletid, så det viktigste er å stille med fulle glykogenlagre og god hydrering.',
      },
    },
    {
      id: 'tr-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-7-3-ex-5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Diskuter hvordan ernæringsstrategien bør tilpasses gjennom en hel treningssesong for en langrennsløper. Bruk begrepene periodisert ernæring, energibalanse, karbohydratlading og restitusjonsernæring i svaret ditt.',
        solution: 'Grunntrening (mai–september): Langrennsløperen trener store mengder, hovedsakelig lavintensivt. Energibehovet er høyt, og kostholdet bør ha høy karbohydratandel for å dekke det store volumet. Energibalansen bør være nøytral eller svakt positiv for å unngå overtrening. Proteininntak bør være 1,4–1,6 g/kg for å støtte muskelvedlikehold. Oppbyggingsfase (september–november): Intensiteten øker med intervalltrening. Periodisert ernæring betyr at karbohydratinntaket er høyt rundt harde økter og lavere på lette dager. Proteininntak økes noe (1,6–1,8 g/kg). Restitusjonsernæring etter harde økter er kritisk — 1 g/kg karbohydrater og 20–30 g protein innen 30–60 minutter. Konkurransefase (desember–mars): Karbohydratlading 1–3 dager før viktige renn med 8–12 g/kg/dag. Kun testet og kjent mat. Restitusjonsernæring mellom renn som ligger tett er avgjørende — rask glykogengjenoppfylling og proteininntak. Energibalansen må opprettholdes for å unngå RED-S i den mest krevende perioden. Overgangsfase (april–mai): Redusert treningsbelastning, mer fleksibelt kosthold. Energiinntaket justeres ned til redusert aktivitetsnivå. Fokus på variert kost for å fylle opp eventuelle næringsmangler. Gjennom hele sesongen er god hydrering og tilstrekkelig søvn viktige forutsetninger for at ernæringsstrategien skal virke optimalt.',
      },
    },
    {
      id: 'tr-7-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-7-3-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: En 17 år gammel svømmer forteller deg at hun ofte føler seg utmattet på trening og har blitt syk flere ganger de siste månedene. Hun trener 10 økter per uke og innrømmer at hun ofte hopper over frokost og sjelden spiser etter trening. Analyser situasjonen med utgangspunkt i ernæringsteori og gi henne konkrete, begrunnede råd.',
        solution: 'Symptomene (utmattelse og hyppig sykdom) kombinert med høy treningsbelastning og dårlige matvaner peker sterkt mot relativ energimangel (RED-S). Ved å hoppe over frokost starter hun treningsdagen med lave energilagre. Uten mat etter trening uteblir restitusjonen — glykogenlagrene fylles ikke opp, og muskelreparasjon hemmes. Med 10 økter per uke er energibehovet svært høyt (trolig PAL 2,0–2,2), og utilstrekkelig inntak over tid fører til kumulativt underskudd. Konsekvenser: Kronisk lav energitilgjengelighet svekker immunforsvaret (derav hyppig sykdom). Glykogentomme muskler gir utmattelse og dårlig treningskvalitet. Risiko for hormonforstyrrelser (bortfall av menstruasjon), redusert beinmasse og stressbrudd. Konkrete råd: 1) Frokost er obligatorisk — havregrøt med frukt og nøtter gir god, langvarig energi. 2) Restitusjonsmat innen 30 minutter etter trening — sjokolademelk eller smoothie er enkelt og effektivt. 3) Spis regelmessige måltider og mellommåltider (5–6 ganger daglig) for å dekke energibehovet. 4) Proteiner fordelt på alle måltider for muskelreparasjon. 5) Snakk med trener og eventuelt lege/ernæringsfysiolog for å kartlegge omfanget av energimangelen. Det viktigste er å øke energiinntaket til et nivå som matcher treningsbelastningen. Forbedring av matvaner vil sannsynligvis gi merkbar bedring i både energi, helse og prestasjon innen få uker.',
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 7.4: Restitusjon og søvn
// ============================================================================

export const CHAPTER_TRENING_1_7_4: TextbookChapter = {
  id: 'trening-1-7-4',
  courseId: 'trening-1',
  chapterNumber: '7.4',
  title: 'Restitusjon og søvn',
  description: 'Restitusjonsfaser, søvnkvalitet, aktiv restitusjon og strategier for optimal gjenoppbygging.',
  estimatedMinutes: 22,
  competenceGoals: [
    'gjøre rede for de ulike fasene i restitusjonen etter trening',
    'forklare søvnens betydning for prestasjon og restitusjon',
    'vurdere og anvende ulike restitusjonsstrategier',
  ],
  content: [
    {
      id: 'tr-7-4-intro',
      type: 'text',
      content: `Trening bryter ned kroppen — det er restitusjonen som bygger den opp igjen. Uten tilstrekkelig restitusjon vil ikke kroppen tilpasse seg treningsbelastningen, og risikoen for skader, overtrening og sykdom øker. Restitusjon handler om alt som skjer mellom treningsøktene: søvn, ernæring, aktiv hvile og mental gjenoppbygging. I dette kapittelet ser vi på hva som skjer i kroppen under restitusjonen og hvordan du kan optimalisere den.`,
    },
    {
      id: 'tr-7-4-def-restitusjon',
      type: 'definition',
      title: 'Restitusjon',
      content: 'Restitusjon er kroppens gjenoppbyggingsprosess etter fysisk belastning. Den omfatter reparasjon av muskelvev, gjenoppfylling av energilagre (glykogen), normalisering av hormonnivåer, fjerning av avfallsstoffer og tilpasning av kroppen til et høyere funksjonsnivå (superkompensasjon).',
    },
    {
      id: 'tr-7-4-text-faser',
      type: 'text',
      title: 'Restitusjonens faser',
      content: `Restitusjonen etter en treningsøkt kan deles inn i tre overlappende faser:

**Fase 1: Den raske restitusjonen (0–2 timer)**
- Gjenoppbygging av ATP og kreatinfosfat (energilagrene i muskelcellene)
- Fjerning av laktat og andre avfallsstoffer
- Normalisering av puls, blodtrykk og kroppstemperatur
- Start på gjenoppfylling av muskelglykogen
- Denne fasen fullføres relativt raskt og er grunnen til at du føler deg bedre kort tid etter trening

**Fase 2: Reparasjon og gjenoppbygging (2–48 timer)**
- Reparasjon av muskelfibre som er skadet under trening
- Fullstendig gjenoppfylling av glykogenlagrene (tar 24–48 timer)
- Proteinsyntes for muskeloppbygging
- Tilpasninger i bindevev, sener og ledd
- Normalisering av hormonnivåer (kortisol, testosteron, veksthormoner)

**Fase 3: Superkompensasjon (48–72+ timer)**
- Kroppen har bygget seg opp til et høyere funksjonsnivå enn før treningen
- Økt styrke, utholdenhet eller annen kapasitet avhengig av treningstype
- Det optimale tidspunktet for neste treningsøkt
- Dersom ny belastning ikke kommer, faller kroppen gradvis tilbake til utgangsnivået`,
    },
    {
      id: 'tr-7-4-text-restitusjonstid',
      type: 'text',
      title: 'Restitusjonstid for ulike typer trening',
      content: `Restitusjonstiden varierer betydelig avhengig av treningstype og intensitet:

**Kort, intensiv styrketrening:**
- Lokal muskelrestitusjon: 48–72 timer
- Nervesystemet: 24–48 timer
- Derfor kan man trene ulike muskelgrupper på påfølgende dager

**Langvarig utholdenhetsarbeid:**
- Glykogengjenoppfylling: 24–48 timer
- Full restitusjon etter langvarig, hard økt: 48–72 timer
- Etter maraton eller lignende: opptil 1–2 uker

**Lett til moderat trening:**
- Ofte fullstendig restituert innen 24 timer
- Kan gjerne trene daglig med moderat belastning

**Eksentrisk trening (nedbremsende muskelarbeid):**
- Gir mest muskelstølhet (DOMS — Delayed Onset Muscle Soreness)
- Restitusjonstid: 72–96 timer for full restitusjon
- DOMS topper seg typisk 24–48 timer etter trening

**Faktorer som påvirker restitusjonstiden:**
- Treningserfaring (trente restituerer raskere)
- Alder (eldre trenger lengre restitusjon)
- Ernæring og hydrering
- Søvnkvalitet og mengde
- Stressnivå i hverdagen`,
    },
    {
      id: 'tr-7-4-def-sovn',
      type: 'definition',
      title: 'Søvnsyklus',
      content: 'En søvnsyklus varer ca. 90 minutter og består av fire stadier: tre stadier med NREM-søvn (Non-Rapid Eye Movement) og ett stadium med REM-søvn. I løpet av en natt gjennomgår vi typisk 4–6 slike sykluser. Dyp søvn (NREM stadie 3) er spesielt viktig for fysisk restitusjon, mens REM-søvn er viktig for mental bearbeiding og læring.',
    },
    {
      id: 'tr-7-4-text-sovn',
      type: 'text',
      title: 'Søvnens betydning for idrettsutøvere',
      content: `Søvn er den viktigste enkeltfaktoren for restitusjon. Under søvn skjer flere avgjørende prosesser:

**Veksthormon (GH):**
- Mesteparten av døgnets veksthormon frigjøres under dyp søvn
- Veksthormon stimulerer muskelreparasjon, fettforbrenning og beinvekst
- Dårlig søvn reduserer veksthormonutskillelsen betydelig

**Muskelreparasjon:**
- Proteinsyntes er forhøyet under søvn
- Blodtilførselen til musklene øker i hvile
- Inflammasjonsprosesser etter trening reguleres ned

**Kognitiv funksjon:**
- Konsentrasjon, reaksjonsevne og beslutningstaking forbedres med god søvn
- Motorisk læring konsolideres under REM-søvn
- En natt med dårlig søvn kan redusere reaksjonstiden med opptil 300 %

**Immunforsvar:**
- Immunforsvaret styrkes under søvn
- Kronisk søvnmangel øker risikoen for sykdom med opptil 4 ganger

**Anbefalinger for idrettsutøvere:**
- **Mengde:** 8–10 timer per natt (ungdom trenger mer enn voksne)
- **Regelmessighet:** Legg deg og stå opp til samme tid, også i helgene
- **Kvalitet:** Mørkt, kjølig og stille soverom
- **Timing:** Unngå hard trening de siste 2–3 timene før leggetid
- **Skjermtid:** Reduser blålyseksponering 1 time før sengetid`,
    },
    {
      id: 'tr-7-4-text-aktiv-rest',
      type: 'text',
      title: 'Aktiv restitusjon og andre strategier',
      content: `**Aktiv restitusjon:**
Lett fysisk aktivitet (30–50 % av maks) dagen etter hard trening. Øker blodsirkulasjonen og fremskynder fjerning av avfallsstoffer uten å belaste kroppen ytterligere. Eksempler: lett jogging, sykling, svømming, gange.

**Tøying og mobilitetsarbeid:**
- Statisk tøying etter trening kan bidra til å redusere muskelspenninger
- Mobilitetsøvelser opprettholder bevegelighet og forebygger stivhet
- Bør gjøres regelmessig, ikke bare ved stølhet

**Nedvarming (cool-down):**
- 10–15 minutter med gradvis redusert intensitet etter treningsøkten
- Hjelper med å normalisere puls og blodtrykk
- Kan bidra til raskere fjerning av laktat

**Kaldt vann / isbad:**
- Kan redusere betennelse og hevelse etter hard trening
- Vanlig i toppidrett, men forskningen er delt om langsiktig effekt
- Kan hemme muskeltilpasninger ved styrketrening dersom det brukes rutinemessig

**Massasje og foam rolling:**
- Kan redusere muskelstølhet og øke bevegeligheten
- Foam rolling (selvmassasje med skumrulle) er tilgjengelig og effektivt
- Bør gjøres i 1–2 minutter per muskelgruppe

**Kompresjon:**
- Kompresjonsplagg kan gi en liten positiv effekt på restitusjon
- Kan redusere hevelse og muskelstølhet
- Mest aktuelt etter langvarig belastning`,
    },
    {
      id: 'tr-7-4-warning-1',
      type: 'warning',
      title: 'Tegn på utilstrekkelig restitusjon',
      content: 'Følgende tegn kan tyde på at du ikke restituerer godt nok: vedvarende muskelstølhet som ikke bedres, nedsatt prestasjon til tross for hard trening, forhøyet hvilepuls om morgenen, irritabilitet og humørsvingninger, hyppige forkjølelser og infeksjoner, søvnproblemer til tross for tretthet, tap av motivasjon for trening. Opplever du flere av disse symptomene, bør du redusere treningsbelastningen og fokusere på restitusjon.',
    },
    {
      id: 'tr-7-4-note-1',
      type: 'note',
      title: 'Restitusjon er individuelt',
      content: 'Restitusjonsbehovet er svært individuelt. Lær deg å lytte til kroppen din. Bruk gjerne objektive mål som hvilepuls om morgenen, søvnkvalitet og subjektiv opplevelse av energi for å vurdere om du er tilstrekkelig restituert for neste treningsøkt.',
    },
    {
      id: 'tr-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-7-4-ex-1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skjer hovedsakelig under den dype søvnen (NREM stadie 3)?',
        options: [
          { id: 'a', text: 'Veksthormon frigjøres og muskelreparasjon er på sitt mest aktive', isCorrect: true },
          { id: 'b', text: 'Hjernen behandler drømmer og følelser', isCorrect: false },
          { id: 'c', text: 'Kroppen er i en tilstand av full bevissthet', isCorrect: false },
          { id: 'd', text: 'Energiforbruket er på sitt høyeste', isCorrect: false },
        ],
        solution: 'Under dyp NREM-søvn (stadie 3) frigjøres mesteparten av døgnets veksthormon, som stimulerer muskelreparasjon, fettforbrenning og vevsvekst. Denne fasen er derfor spesielt viktig for fysisk restitusjon hos idrettsutøvere.',
      },
    },
    {
      id: 'tr-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-7-4-ex-2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er DOMS?',
        options: [
          { id: 'a', text: 'Forsinket muskelstølhet som typisk topper seg 24–48 timer etter trening', isCorrect: true },
          { id: 'b', text: 'En form for akutt skade som krever behandling', isCorrect: false },
          { id: 'c', text: 'Muskelkramper som oppstår under trening', isCorrect: false },
          { id: 'd', text: 'Et treningsprogram for styrketrening', isCorrect: false },
        ],
        solution: 'DOMS (Delayed Onset Muscle Soreness) er forsinket muskelstølhet som oppstår 24–48 timer etter uvant eller eksentrisk belastning. Det skyldes mikroskopiske skader i muskelfibrene og den påfølgende inflammasjonsprosessen. DOMS er normalt og et tegn på at musklene tilpasser seg.',
      },
    },
    {
      id: 'tr-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-7-4-ex-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv de tre fasene i restitusjonen etter en hard styrketreningsøkt. Hva skjer i kroppen i hver fase, og omtrent hvor lang tid tar de?',
        solution: 'Fase 1 — Rask restitusjon (0–2 timer): ATP og kreatinfosfat i muskelcellene gjenoppbygges. Laktat og andre avfallsstoffer fjernes. Puls, blodtrykk og kroppstemperatur normaliseres. Gjenoppfylling av glykogen starter. Fase 2 — Reparasjon og gjenoppbygging (2–48 timer): Muskelfibre som er skadet under treningen repareres gjennom proteinsyntese. Glykogenlagrene fylles fullstendig opp (tar 24–48 timer med riktig ernæring). Bindevev, sener og ledd tilpasser seg belastningen. Hormonnivåer (kortisol, testosteron, veksthormoner) normaliseres. Fase 3 — Superkompensasjon (48–72+ timer): Kroppen har bygget seg opp til et høyere nivå enn før treningsøkten. Muskelstyrken er økt sammenlignet med utgangspunktet. Dette er det optimale tidspunktet for å gjennomføre neste harde styrketreningsøkt for den samme muskelgruppen.',
      },
    },
    {
      id: 'tr-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-7-4-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva aktiv restitusjon er og hvorfor det kan være mer effektivt enn fullstendig hvile etter hard trening.',
        solution: 'Aktiv restitusjon innebærer lett fysisk aktivitet (30–50 % av maksimal kapasitet) dagen etter hard trening. Eksempler er lett jogging, rolig sykling, svømming eller gange. Aktiv restitusjon kan være mer effektivt enn fullstendig hvile fordi den lette aktiviteten øker blodsirkulasjonen til musklene, noe som fremskynder transporten av næringsstoffer til skadet vev og fjerner avfallsstoffer raskere. Den lette bevegelsen motvirker også stivhet og opprettholder bevegelighet. Samtidig er belastningen lav nok til at den ikke forstyrrer den pågående reparasjonsprosessen. Forutsetningen er at intensiteten holdes lav — for hard «restitusjonstrening» vil virke mot sin hensikt og forlenge restitusjonstiden.',
      },
    },
    {
      id: 'tr-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-7-4-ex-5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: En friidrettsutøver (sprinter) trener 6 dager i uken og sover i gjennomsnitt 6 timer per natt. De siste ukene har hun opplevd nedsatt prestasjon, forhøyet hvilepuls og dårligere humør. Bruk kunnskapen din om restitusjon, søvn og superkompensasjon til å analysere situasjonen og foreslå tiltak.',
        solution: 'Analyse: Symptomene (nedsatt prestasjon, forhøyet hvilepuls, humørsvingninger) er klassiske tegn på utilstrekkelig restitusjon og mulig begynnende overtrening. Med 6 timers søvn per natt får hun betydelig mindre enn de anbefalte 8–10 timene for unge idrettsutøvere. Sammenhengen mellom lite søvn og symptomene: Redusert veksthormonutskillelse hemmer muskelreparasjon og tilpasning. Immunforsvaret svekkes, økt risiko for sykdom. Nervesystemet restituerer ikke fullstendig, noe som påvirker reaksjonsevne og koordinasjon — kritisk for en sprinter. Kognitiv funksjon og motivasjon svekkes. Superkompensasjon skjer ikke optimalt fordi kroppen ikke rekker å fullføre reparasjonsfasen før neste belastning. Tiltak: 1) Øk søvnmengden gradvis til 8–9 timer (dette er det viktigste tiltaket). 2) Etabler en fast søvnrutine med samme leggetid og oppvåkningstid. 3) Reduser treningsbelastningen midlertidig — enten færre økter eller lavere intensitet — for å gi kroppen mulighet til å hente seg inn. 4) Innfør én til to fullstendige restitusjonsdager per uke. 5) Bruk aktiv restitusjon (lett jogging, tøying) på lette dager. 6) Sikre godt kosthold med tilstrekkelig karbohydrater og protein rundt treningsøktene. 7) Overvåk hvilepulsen daglig — fallende hvilepuls er et tegn på at restitusjonen bedres. 8) Vurder om stressfaktorer utenom trening (skole, sosialt) bidrar til det totale stressnivået. Forventet effekt: Ved å prioritere søvn og redusere treningsbelastningen midlertidig, vil kroppen få mulighet til å fullføre superkompensasjonsprosessen. Prestasjonene vil sannsynligvis bedres innen 1–3 uker.',
      },
    },
    {
      id: 'tr-7-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-7-4-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Sammenlign ulike restitusjonsstrategier (aktiv restitusjon, isbad, massasje/foam rolling, søvn og ernæring) og ranger dem etter hvor godt dokumentert effekten er. Diskuter fordeler og ulemper ved hver strategi.',
        solution: 'Rangering etter dokumentert effekt: 1) Søvn — Klart best dokumentert. Alle restitusjonsprosesser er avhengige av tilstrekkelig søvn. Veksthormon, proteinsyntese, immunforsvar og mental bearbeiding optimaliseres under søvn. Fordel: Gratis og tilgjengelig. Ulempe: Mange nedprioriterer søvn. 2) Ernæring — Svært godt dokumentert. Riktig næring til rett tid er avgjørende for glykogengjenoppfylling og muskelreparasjon. Protein innen 30–60 minutter etter trening stimulerer proteinsyntese. Fordel: Konkret og målbart. Ulempe: Krever planlegging. 3) Aktiv restitusjon — Godt dokumentert. Lett aktivitet øker blodsirkulasjon og fremskynder avfallstransport. Fordel: Enkelt å gjennomføre. Ulempe: Intensiteten må holdes lav, ellers blir det kontraproduktivt. 4) Massasje/foam rolling — Moderat dokumentert. Kan redusere muskelstølhet og øke bevegelighet. Foam rolling er tilgjengelig og kostnadseffektiv. Fordel: Gir subjektiv bedring og økt velvære. Ulempe: Effekten på faktisk restitusjon er begrenset. 5) Isbad/kaldt vann — Svakest dokumentert blant disse. Kan redusere betennelse og smerte akutt. Forskning tyder imidlertid på at regelmessig bruk kan hemme muskeltilpasninger ved styrketrening fordi inflammasjon er en del av tilpasningssignalet. Fordel: Kan gi rask smertelindring etter hard konkurranse. Ulempe: Kan hemme langsiktige treningstilpasninger. Konklusjon: Søvn og ernæring bør alltid prioriteres som grunnlag. De andre strategiene kan brukes som tillegg, men vil aldri kompensere for mangelfull søvn eller ernæring.',
      },
    },
    {
      id: 'tr-7-4-ex-7',
      type: 'exercise',
      exercise: {
        id: 'tr-7-4-ex-7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Lag en detaljert restitusjonsplan for en fotballspiller som har kamp lørdag og trening mandag, onsdag og fredag. Beskriv restitusjonsstrategi for hver dag i uken, inkludert søvn, ernæring, aktiv restitusjon og andre tiltak.',
        solution: 'Lørdag (kampdag): Kamp ettermiddag/kveld. Etter kamp: Restitusjonsmat innen 30 minutter (sjokolademelk, banan), deretter et fullstendig måltid med karbohydrater og protein. God hydrering. Nedvarming etter kampen. Soverutine som sikrer 8–9 timer søvn til tross for sent kampstart. Søndag: Restitusjonsdagen. Aktiv restitusjon: 20–30 minutter lett sykling eller svømming. Foam rolling for 15–20 minutter, fokus på bein. Næringsrik mat med god karbohydrat- og proteinbalanse for å fullføre glykogengjenoppfylling. Hvile og avkobling, 8–9 timer søvn. Mandag: Trening. God frokost 3–4 timer før trening. Mellommåltid 1–2 timer før. Restitusjonsmat innen 30 minutter etter trening. Fullstendig måltid innen 2 timer. 8–9 timer søvn. Tirsdag: Lett dag/restitusjon. Aktiv restitusjon: lett jogging eller gange, 20–30 minutter. Tøying og mobilitetsarbeid. Næringsrikt kosthold, moderat energiinntak. 8–9 timer søvn. Onsdag: Trening. Samme ernæringsstrategi som mandag. Restitusjonsmat og fullstendig måltid etter trening. 8–9 timer søvn. Torsdag: Lett dag/restitusjon. Aktiv restitusjon eller fri. Foam rolling. Balansert kosthold. 8–9 timer søvn. Fredag: Lett trening/kampforberedelse. Begynnende karbohydratfokus i kostholdet for å sikre fulle glykogenlagre til kampen. Tidlig soverutine, 9 timer søvn. Nøkkelprinsipper gjennom hele uken: Minimum 8 timer søvn hver natt, regelmessig leggetid. Protein fordelt på alle måltider (20–30 g per måltid). Karbohydratinntak tilpasset aktivitetsnivå — høyere på trenings- og kampdager. God hydrering gjennom hele uken.',
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 7.5: Kosttilskudd og doping
// ============================================================================

export const CHAPTER_TRENING_1_7_5: TextbookChapter = {
  id: 'trening-1-7-5',
  courseId: 'trening-1',
  chapterNumber: '7.5',
  title: 'Kosttilskudd og doping',
  description: 'Lovlige kosttilskudd, dopingregler, WADAs rolle og etiske perspektiver på prestasjonsfremmende midler.',
  estimatedMinutes: 25,
  competenceGoals: [
    'vurdere behovet for og effekten av ulike kosttilskudd',
    'gjøre rede for dopingreglene og WADAs rolle i antidopingarbeidet',
    'drøfte etiske dilemmaer knyttet til prestasjonsfremmende midler i idrett',
  ],
  content: [
    {
      id: 'tr-7-5-intro',
      type: 'text',
      content: `Kosttilskudd og prestasjonsfremmende midler er temaer som engasjerer mange idrettsutøvere. Noen tilskudd har dokumentert effekt, mens mange markedsføres med overdrevne påstander. Doping representerer den mørke siden av prestasjonsjaget — det er juks, det er helsefarlig, og det er forbudt. I dette kapittelet skiller vi mellom lovlige kosttilskudd og forbudte stoffer, og vi diskuterer de etiske sidene ved bruk av prestasjonsfremmende midler.`,
    },
    {
      id: 'tr-7-5-def-kosttilskudd',
      type: 'definition',
      title: 'Kosttilskudd',
      content: 'Kosttilskudd er produkter som inneholder næringsstoffer eller andre stoffer med ernæringsmessig eller fysiologisk effekt, og som er ment som et tillegg til vanlig kosthold. De leveres i form av tabletter, kapsler, pulver eller væske. Kosttilskudd er ikke legemidler og kan ikke erstatte et balansert kosthold.',
    },
    {
      id: 'tr-7-5-text-lovlige',
      type: 'text',
      title: 'Kosttilskudd med dokumentert effekt',
      content: `Forskningsbaserte kosttilskudd med dokumentert effekt for idrettsutøvere:

**Kreatin:**
- Et av de best dokumenterte tilskuddene for styrke- og kraftidretter
- Øker lagrene av kreatinfosfat i muskelcellene, noe som forbedrer korte, intense prestasjoner
- Typisk dose: 3–5 g per dag
- Effekt: 5–10 % bedre prestasjon i korte, eksplosive aktiviteter
- Trygt ved anbefalt dosering

**Koffein:**
- Stimulerer sentralnervesystemet og reduserer opplevd anstrengelse
- Kan forbedre utholdenhetsprestasjon med 2–4 %
- Effektiv dose: 3–6 mg per kg kroppsvekt, inntatt 30–60 minutter før aktivitet
- Finnes i kaffe, te, energidrikker og koffeintabletter
- Lovlig i idrett (ikke på WADAs dopingliste, men overvåkes)

**Protein- og karbohydrattilskudd:**
- Praktisk supplement når det er vanskelig å få i seg nok gjennom vanlig mat
- Proteinpulver (myseprotein, kasein) kan være nyttig rett etter trening
- Karbohydratdrikker er hensiktsmessig under langvarig trening
- Ikke nødvendig dersom kostholdet er godt planlagt

**Vitamin D:**
- Mange nordmenn har lave nivåer, særlig om vinteren
- Viktig for benhelse, muskelfunksjon og immunforsvar
- Tilskudd anbefales i vinterhalvåret for de fleste

**Jern:**
- Aktuelt ved dokumentert jernmangel (blodprøve)
- Skal kun brukes ved behov — for mye jern er skadelig
- Særlig relevant for kvinnelige utøvere og vegetarianere

**Omega-3:**
- Kan ha betennelsesdempende effekt
- Aktuelt hvis det er lite fisk i kostholdet
- Kan støtte hjernefunksjon og hjertehelse`,
    },
    {
      id: 'tr-7-5-warning-1',
      type: 'warning',
      title: 'Kosttilskudd uten dokumentert effekt',
      content: 'Markedet er fullt av kosttilskudd som markedsføres med overdrevne påstander uten god vitenskapelig støtte. Eksempler er mange fettforbrennere, testosteronboostere, og diverse urtekstrakter. I tillegg er kontaminering et reelt problem — studier har vist at opptil 15 % av kosttilskudd inneholder stoffer som ikke er oppgitt på etiketten, inkludert dopingmidler. Bruk kun tilskudd fra pålitelige produsenter og konsulter fagpersoner.',
    },
    {
      id: 'tr-7-5-def-doping',
      type: 'definition',
      title: 'Doping',
      content: 'Doping er bruk av forbudte stoffer eller metoder for å forbedre idrettsprestasjoner. Verdens antidopingbyrå (WADA) definerer doping som brudd på én eller flere av antidopingreglene, som inkluderer bruk, besittelse, distribusjon og forsøk på bruk av forbudte stoffer og metoder.',
    },
    {
      id: 'tr-7-5-text-wada',
      type: 'text',
      title: 'WADA og antidopingarbeidet',
      content: `**Verdens antidopingbyrå (WADA):**
- Grunnlagt i 1999 som et uavhengig internasjonalt byrå
- Utarbeider og oppdaterer den internasjonale dopinglisten årlig
- Koordinerer dopingkontroll og forskning globalt
- Vedlikeholder ADAMS-systemet der utøvere rapporterer sin tilgjengelighet for kontroll

**Antidoping Norge:**
- WADAs nasjonale partner i Norge
- Gjennomfører dopingkontroller i norsk idrett
- Driver forebyggende arbeid og informasjon
- Rene utøvere-programmet

**Dopinglisten — hovedkategorier av forbudte stoffer:**
1. **Anabole steroider** (testosteron, nandrolon): Øker muskelmasse og styrke
2. **Peptidhormoner** (EPO, veksthormon): EPO øker oksygentransport, veksthormon stimulerer vevsvekst
3. **Stimulerende midler** (amfetamin): Øker våkenhet og reaksjonsevne
4. **Narkotika** (morfin): Smertelindring
5. **Betablokkere** (i visse idretter): Reduserer skjelving og puls
6. **Diuretika**: Brukes til vektkontroll og maskering av andre stoffer

**Forbudte metoder:**
- Bloddoping (blodoverføring)
- Genmanipulering
- Manipulering av dopingprøver`,
    },
    {
      id: 'tr-7-5-text-konsekvenser',
      type: 'text',
      title: 'Helsekonsekvenser av doping',
      content: `Bruk av dopingmidler kan ha alvorlige og varige helsekonsekvenser:

**Anabole steroider:**
- Leverskader og økt risiko for leverkreft
- Hjerte- og karsykdommer (forstørret hjerte, høyt kolesterol)
- Hormonforstyrrelser (nedsatt egen testosteronproduksjon, infertilitet)
- Psykiske effekter (aggresjon, depresjon, psykoser)
- Hos ungdom: for tidlig lukking av vekstsonene (redusert slutthøyde)
- Hos kvinner: maskulinisering (dypere stemme, økt hårvekst)
- Kviser og hudproblemer

**EPO (erytropoietin):**
- Økt blodtykkelse (viskositet) gir fare for blodpropp
- Risiko for hjerteinfarkt og hjerneslag
- Flere dødsfall blant syklister er knyttet til EPO-bruk

**Veksthormon:**
- Akromegali (unormal vekst av bein, organer og bindevev)
- Økt risiko for diabetes
- Ledd- og muskelsmerter

**Stimulerende midler:**
- Hjerteproblemer og risiko for plutselig hjertedød
- Avhengighet
- Psykiske forstyrrelser`,
    },
    {
      id: 'tr-7-5-text-etikk',
      type: 'text',
      title: 'Etiske perspektiver på doping',
      content: `Kampen mot doping handler om mer enn regler — den handler om grunnleggende verdier i idretten.

**Argumenter mot doping:**
- **Rettferdighet:** Doping gir en urettmessig fordel og undergraver fair play
- **Helse:** Utøvere utsetter seg selv for alvorlig helserisiko
- **Forbildeeffekt:** Idrettsutøvere er forbilder — doping sender et dårlig signal til unge
- **Idrettens verdi:** Idretten mister mening hvis prestasjoner skyldes kjemi framfor talent og innsats
- **Press og tvang:** Dopingkultur kan tvinge utøvere til å dope seg for å være konkurransedyktige

**Etiske dilemmaer:**
- Hvor går grensen mellom lovlige og ulovlige prestasjonsfremmende midler?
- Er høydehus og -opphold en form for «lovlig doping»?
- Hvem har ansvaret når unge utøvere doper seg — utøveren, treneren eller systemet?
- Bør fokuset ligge på straff eller forebygging?
- Hvordan balansere utøveres rett til privatliv mot behovet for dopingkontroll?

**Fair play og egenverdien av idrett:**
Idretten har en egenverdi som går utover resultater. Den handler om personlig utvikling, samhold, mestring og glede. Doping undergraver alle disse verdiene. Ren idrett forutsetter at alle utøvere konkurrerer på like vilkår, med sin naturlige kapasitet som utgangspunkt.`,
    },
    {
      id: 'tr-7-5-note-1',
      type: 'note',
      title: 'Strengt ansvar',
      content: 'I antidopingreglene gjelder prinsippet om strengt ansvar. Det betyr at utøveren selv er ansvarlig for alt som påvises i sin kropp, uansett hvordan det havnet der. Det hjelper ikke å si «jeg visste ikke». Derfor er det avgjørende å sjekke alle produkter man bruker — også vanlige medisiner — mot dopinglisten. Antidoping Norge har appen «Medisinsjekk» som gjør dette enkelt.',
    },
    {
      id: 'tr-7-5-tip-1',
      type: 'tip',
      title: 'Trygg bruk av kosttilskudd',
      content: 'Hvis du velger å bruke kosttilskudd, bør du følge disse rådene: 1) Velg tilskudd fra produsenter som tester produktene for forbudte stoffer (f.eks. Informed Sport-sertifisering). 2) Sjekk med Antidoping Norge at tilskuddet er lovlig. 3) Diskuter med lege eller ernæringsfysiolog om du faktisk trenger tilskuddet. 4) Husk at et godt kosthold nesten alltid er tilstrekkelig — tilskudd bør være et supplement, ikke en erstatning.',
    },
    {
      id: 'tr-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-7-5-ex-1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket kosttilskudd har best vitenskapelig dokumentasjon for å forbedre korte, eksplosive prestasjoner?',
        options: [
          { id: 'a', text: 'Kreatin', isCorrect: true },
          { id: 'b', text: 'Omega-3', isCorrect: false },
          { id: 'c', text: 'Vitamin C', isCorrect: false },
          { id: 'd', text: 'Sink', isCorrect: false },
        ],
        solution: 'Kreatin er et av de best dokumenterte kosttilskuddene og øker lagrene av kreatinfosfat i muskelcellene. Dette forbedrer prestasjonen ved korte, eksplosive aktiviteter med 5–10 %. Omega-3, vitamin C og sink har andre funksjoner, men ikke direkte prestasjonsfremmende effekt ved kortvarig intensiv aktivitet.',
      },
    },
    {
      id: 'tr-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-7-5-ex-2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva betyr prinsippet om «strengt ansvar» i antidopingreglene?',
        options: [
          { id: 'a', text: 'Utøveren er selv ansvarlig for alt som påvises i kroppen, uansett årsak', isCorrect: true },
          { id: 'b', text: 'Treneren er alltid ansvarlig for utøverens dopingprøver', isCorrect: false },
          { id: 'c', text: 'Man straffes bare hvis man bevisst har dopet seg', isCorrect: false },
          { id: 'd', text: 'Det er bare forbudt å bruke doping under konkurranse', isCorrect: false },
        ],
        solution: 'Strengt ansvar betyr at utøveren personlig er ansvarlig for alle stoffer som påvises i dopingprøven, uavhengig av intensjon, uvitenhet eller forsøk fra andre. Det er ikke et gyldig forsvar å si «jeg visste ikke». Utøvere må sjekke alt de inntar mot dopinglisten.',
      },
    },
    {
      id: 'tr-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-7-5-ex-3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv tre hovedkategorier av forbudte stoffer på WADAs dopingliste og forklar hvordan de virker prestasjonsfremmende.',
        solution: '1) Anabole steroider: Syntetiske varianter av testosteron som øker proteinsyntesen i muskelcellene. Dette fører til raskere muskeloppbygging, økt styrke og kortere restitusjonstid. Utøvere kan trene hardere og oftere. 2) EPO (erytropoietin): Et hormon som stimulerer produksjonen av røde blodceller i beinmargen. Flere røde blodceller betyr økt oksygentransportkapasitet, noe som gir bedre utholdenhetsprestasjoner. EPO er særlig brukt i utholdenhetsidretter som sykling og langrenn. 3) Stimulerende midler (f.eks. amfetamin): Påvirker sentralnervesystemet og øker våkenhet, konsentrasjon og reaksjonsevne. De kan også redusere opplevd smerte og tretthet, slik at utøvere presser seg hardere. Alle disse stoffene har alvorlige helserisiko: steroider gir lever- og hjerteskader, EPO øker risikoen for blodpropp, og stimulerende midler kan gi hjerteproblemer og avhengighet.',
      },
    },
    {
      id: 'tr-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-7-5-ex-4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En kamerat forteller deg at han vurderer å bruke testosterontilskudd som han har funnet på internett for å få bedre resultater i styrketrening. Hva ville du sagt til ham? Begrunn svaret med kunnskap om helse, regelverk og etikk.',
        solution: 'Jeg ville sterkt frarådet dette av flere grunner. Helse: Anabole steroider har alvorlige bivirkninger, inkludert leverskade, hjerte- og karsykdommer, hormonforstyrrelser (nedsatt egen testosteronproduksjon, infertilitet), psykiske effekter som aggresjon og depresjon, og hos ungdom risiko for stans i lengdeveksten. Produkter kjøpt på internett er ofte av usikker kvalitet og kan inneholde farlige forurensninger. Regelverk: Bruk av anabole steroider uten resept er ulovlig i Norge, og det vil gi utestengelse fra organisert idrett ved positiv dopingprøve. Selv om man ikke konkurrerer, er besittelse og bruk ulovlig. Etikk: Gode resultater i styrketrening oppnås gjennom systematisk trening, riktig ernæring og god restitusjon over tid. Å ty til steroider er å ta en snarvei som ikke bare er juks, men som setter helsen i fare. Alternativet: Med riktig treningsprogram, tilstrekkelig protein (1,6–2,2 g/kg/dag), god søvn og tålmodighet kan man oppnå imponerende resultater naturlig.',
      },
    },
    {
      id: 'tr-7-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-7-5-ex-5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Drøft grensene mellom lovlige og ulovlige prestasjonsfremmende midler i idretten. Bruk eksempler som koffein, kreatin, høydehus og EPO i diskusjonen. Er det alltid en klar grense mellom hva som er akseptabelt og hva som er juks?',
        solution: 'Grensen mellom lovlig og ulovlig er ikke alltid intuitiv. Koffein er lovlig til tross for at det har dokumentert prestasjonsfremmende effekt (2–4 % bedre utholdenhetsprestasjoner). Kreatin er lovlig og kan gi 5–10 % bedre prestasjon i eksplosive aktiviteter. Begge endrer kroppens fysiologi for å forbedre prestasjon, men aksepteres fordi de anses som trygge og allment tilgjengelige. Høydehus (simulerer opphold i høyden for å stimulere økt produksjon av røde blodceller) er lovlig. EPO, som har nøyaktig samme fysiologiske effekt (økt produksjon av røde blodceller), er forbudt. Forskjellen er at høydehus bruker en naturlig stimulus (lavt oksygentrykk), mens EPO er et eksternt hormon som manipulerer kroppen direkte. Likevel er den praktiske effekten svært lik. Dette viser at grensen ikke alltid er logisk konsekvent. WADAs kriterier for å sette stoffer på dopinglisten er: 1) Stoffet kan forbedre prestasjon. 2) Stoffet kan utgjøre en helserisiko. 3) Bruk av stoffet strider mot idrettens ånd. Minst to av tre kriterier må oppfylles. Koffein oppfyller kun det første, og er derfor lovlig. Anabole steroider oppfyller alle tre. EPO oppfyller alle tre. Det finnes gråsoner: Smertestillende medisiner (NSAIDs) er lovlige, men brukes av mange utøvere for å trene gjennom smerter. Intravenøs væsketilførsel over 100 ml er forbudt. Smertesprøyter (kortison) er tillatt med medisinsk fritak. Konklusjon: Grensen er delvis pragmatisk og delvis prinsippiell. Den vil fortsette å bli diskutert etter hvert som ny teknologi og nye stoffer utvikles. Det viktigste prinsippet er at alle utøvere skal konkurrere på like vilkår, og at helsen ikke skal ofres for resultater.',
      },
    },
    {
      id: 'tr-7-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-7-5-ex-6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Samleoppgave: Tenk deg at du er idrettsrådgiver for et videregående skoleteam. Laget er frustrert over dårlige resultater, og noen utøvere har begynt å snakke om «tilskudd de har sett på YouTube». Lag et opplegg for et informasjonsmøte der du dekker: lovlige kosttilskudd, dopingregler, helsekonsekvenser og etikk. Begrunn innholdet med det du har lært.',
        solution: 'Informasjonsmøte: «Smart ernæring og ren idrett» — Del 1: Hva virker egentlig? (15 min) Start med å anerkjenne frustrasjonen over dårlige resultater. Forklar at det beste «tilskuddet» er grunnleggende: tilstrekkelig søvn (8–10 timer), godt kosthold med nok karbohydrater, proteiner og fett, riktig væskebalanse, og god restitusjonsplanlegging. Gå gjennom kosttilskudd med dokumentert effekt: kreatin (for styrke/kraft), koffein (for utholdenhet), proteinpulver (praktisk, men ikke nødvendig med godt kosthold), vitamin D (om vinteren). Understrek at de fleste unge utøvere ikke trenger tilskudd hvis kostholdet er godt. Del 2: Hva er farlig? (10 min) Informer om at opptil 15 % av kosttilskudd kan inneholde stoffer som ikke er oppgitt på etiketten, inkludert dopingmidler. Gå gjennom helsekonsekvensene av vanlige dopingmidler: anabole steroider (lever, hjerte, hormoner, psyke), EPO (blodpropp), stimulerende midler (hjerte, avhengighet). Vis at konsekvensene for unge kropper er ekstra alvorlige — for tidlig lukking av vekstsoner, varige hormonforstyrrelser. Del 3: Reglene (10 min) Forklar strengt ansvar-prinsippet. Vis frem WADAs dopingliste og kategoriene. Fortell om Antidoping Norges rolle og Medisinsjekk-appen. Konsekvenser av positiv prøve: utestengelse, offentlig kjent, tapt respekt. Del 4: Hvorfor ren idrett? (10 min) Diskuter etikken: fair play, forbildeeffekt, idrettens egenverdi. Spør: Ville seieren føles ekte hvis den skyldtes kjemi? Framhev at de beste utøverne i Norge (langrenn, friidrett) har oppnådd verdensklasse uten doping — det er inspirerende og ekte. Avslutning: Gi konkrete tips for å forbedre prestasjon lovlig: bedre søvnrutiner, ernæringsplan, mer målrettet trening, og tålmodighet. Tilby individuell oppfølging for de som ønsker konkrete kostholdsråd.',
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Eksporter alle kapitler
// ============================================================================

export const TRENING_1_DEL7_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_1_7_1,
  CHAPTER_TRENING_1_7_2,
  CHAPTER_TRENING_1_7_3,
  CHAPTER_TRENING_1_7_4,
  CHAPTER_TRENING_1_7_5,
];
