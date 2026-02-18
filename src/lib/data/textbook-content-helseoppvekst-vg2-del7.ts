/**
 * Helse- og oppvekstfag VG2 - Del 7: Ernæring, hygiene og smittevern
 * Kapittel 7.1-7.6
 *
 * Dekker LK20 kompetansemål:
 * - gjøre rede for ernæring og kosthold tilpasset ulike brukergrupper
 * - ivareta hygiene og smittevern i yrkesutøvelsen
 * - forebygge smitte og infeksjoner i helse- og omsorgstjenesten
 * - sikre mattrygghet og næringsmiddelhygiene
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 7.1: Ernæring og kosthold
// ============================================================================

export const CHAPTER_HOV2_7_1: TextbookChapter = {
  id: 'hov2-7-1',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '7.1',
  title: 'Ernæring og kosthold',
  description: 'Grunnleggende kunnskap om næringsstoffer, energibehov, nasjonale kostholdsråd og nøkkelhullsmerket. Lær hvordan kosthold påvirker helse og funksjon.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for ernæring og kosthold tilpasset ulike brukergrupper',
  ],
  content: [
    {
      id: 'hov2-7-1-intro',
      type: 'text',
      content: `## Ernæring og helse

Riktig ernæring er grunnleggende for god helse, vekst og utvikling. Som helsefagarbeider møter du brukere med ulike ernæringsbehov, og du har en viktig rolle i å sikre at de får i seg tilstrekkelig og riktig næring.

I dette kapittelet lærer du:
- Hva næringsstoffer er og hvilken funksjon de har
- Energibehov og energibalanse
- Nasjonale kostholdsråd
- Nøkkelhullsmerket og matmerking`,
    },
    {
      id: 'hov2-7-1-def-1',
      type: 'definition',
      title: 'Næringsstoffer',
      content: `**Næringsstoffer** er stoffer i maten som kroppen trenger for å fungere. De deles inn i **makronæringsstoffer** (karbohydrater, proteiner og fett) som gir energi, og **mikronæringsstoffer** (vitaminer og mineraler) som trengs i små mengder for å regulere kroppens prosesser. I tillegg trenger kroppen vann og kostfiber.`,
    },
    {
      id: 'hov2-7-1-text-1',
      type: 'text',
      content: `### Makronæringsstoffer

**Karbohydrater – kroppens viktigste energikilde**
- Finnes i brød, ris, pasta, poteter, frukt og grønnsaker
- Deles inn i enkle (sukker) og sammensatte (stivelse og fiber)
- Sammensatte karbohydrater gir langvarig energi og jevnere blodsukker
- Bør utgjøre 45-60 % av energiinntaket
- Kostfiber er viktig for fordøyelsen og forebygger forstoppelse

**Proteiner – kroppens byggestener**
- Finnes i kjøtt, fisk, egg, melkeprodukter, bønner og nøtter
- Nødvendig for oppbygging og reparasjon av celler og vev
- Viktig for immunforsvaret og enzymer
- Bør utgjøre 10-20 % av energiinntaket
- Essensielle aminosyrer må tilføres gjennom kosten

**Fett – energi og beskyttelse**
- Finnes i olje, smør, nøtter, avokado, fisk og meieriprodukter
- Gir mest energi per gram (9 kcal/g mot 4 kcal/g for karbohydrater og proteiner)
- Umettede fettsyrer (fisk, olivenolje, nøtter) er gunstige for hjertet
- Mettede fettsyrer (smør, fløte, rødt kjøtt) bør begrenses
- Bør utgjøre 25-40 % av energiinntaket
- Omega-3-fettsyrer er spesielt viktige for hjerne og hjerte`,
    },
    {
      id: 'hov2-7-1-text-2',
      type: 'text',
      content: `### Mikronæringsstoffer

**Vitaminer:**
- **Vitamin A**: Syn, hud og immunforsvar – finnes i lever, gulrot, egg
- **Vitamin B-gruppen**: Energiomsetning og nervefunksjon – finnes i fullkorn, kjøtt, fisk
- **Vitamin C**: Immunforsvar, sårhelning – finnes i frukt og grønnsaker
- **Vitamin D**: Kalsiumopptak og skjeletthelse – dannes i huden ved sollys, finnes i fisk og tran
- **Vitamin K**: Blodkoagulasjon – finnes i grønne bladgrønnsaker

**Mineraler:**
- **Kalsium**: Skjelett og tenner – melk, ost, grønnkål
- **Jern**: Oksygentransport i blodet – rødt kjøtt, bønner, fullkorn
- **Natrium**: Væskebalanse – salt (bør begrenses til 5 g per dag)
- **Kalium**: Nervefunksjon og muskelarbeid – bananer, poteter, grønnsaker
- **Sink**: Immunforsvar og sårhelning – kjøtt, sjømat, nøtter

### Vann
- Kroppen består av ca. 60 % vann
- Anbefalt inntak: ca. 1,5-2 liter væske per dag
- Eldre har ofte redusert tørstefølelse og er utsatt for dehydrering
- Dehydrering kan gi forvirring, forstoppelse og nedsatt nyrefunksjon`,
    },
    {
      id: 'hov2-7-1-def-2',
      type: 'definition',
      title: 'Energibalanse',
      content: `**Energibalanse** innebærer at energiinntaket fra mat og drikke samsvarer med energiforbruket gjennom basalstoffskifte, fysisk aktivitet og termogenese. Positiv energibalanse (mer inntak enn forbruk) fører til vektøkning, mens negativ energibalanse fører til vekttap. Energi måles i kilojoule (kJ) eller kilokalorier (kcal).`,
    },
    {
      id: 'hov2-7-1-text-3',
      type: 'text',
      content: `### Nasjonale kostholdsråd

Helsedirektoratet gir kostholdsråd basert på forskning:

**De viktigste rådene:**
1. Ha et variert kosthold med mye grønnsaker, frukt og bær
2. Velg fullkornsprodukter fremfor fint mel
3. Spis fisk 2-3 ganger i uken
4. Velg magre meieriprodukter
5. Begrens rødt og bearbeidet kjøtt
6. Velg matoljer og myke margariner fremfor smør
7. Begrens inntak av tilsatt sukker
8. Begrens salt til maks 5 g per dag
9. Drikk vann som tørstedrikk
10. Vær fysisk aktiv i minst 150 minutter per uke

### Nøkkelhullsmerket

**Nøkkelhullsmerket** er et felles nordisk merke som gjør det enklere å velge sunnere matvarer. Matvarer med nøkkelhullet inneholder:
- Mindre fett og sukker
- Mer fiber og fullkorn
- Mindre salt
- Sunnere fettsammensetning

Merket finnes på produkter i butikken og i storkjøkkenprodukter brukt i helseinstitusjoner.`,
    },
    {
      id: 'hov2-7-1-tip-1',
      type: 'tip',
      title: 'Kosthold for eldre',
      content: `Eldre har ofte lavere energibehov, men like stort eller økt behov for næringsstoffer. Det betyr at maten må være næringstett – altså inneholde mye næring i forhold til energimengden. Proteiner er spesielt viktig for å forebygge muskeltap (sarkopeni). Vitamin D og kalsium er viktig for skjeletthelsen. Husk at mange eldre har nedsatt appetitt, tørst og smaksopplevelse.`,
    },
    {
      id: 'hov2-7-1-example-1',
      type: 'example',
      title: 'Eksempel: Kostholdsplanlegging på sykehjem',
      content: `**Situasjon**: Du arbeider på et sykehjem og skal sikre at beboerne får riktig ernæring gjennom dagen.

**Anbefalt måltidsrytme:**
- **Frokost (kl. 08:00)**: Brød med pålegg, egg, frukt og melk
- **Formiddagsmat (kl. 10:30)**: Frukt, yoghurt eller smoothie
- **Lunsj/middag (kl. 12:00)**: Varm mat med kjøtt/fisk, grønnsaker og poteter/ris
- **Ettermiddagsmat (kl. 14:30)**: Kaffe med brød eller kake
- **Kveldsmat (kl. 17:30)**: Brødmåltid med variert pålegg
- **Senkveldsmat (kl. 20:00)**: Lett måltid, f.eks. grøt eller yoghurt

**Viktige hensyn:**
- Minst 4-5 måltider per dag for jevn energitilførsel
- Nattfasten bør ikke overstige 11 timer
- Tilpass konsistens ved tygge- og svelgevansker
- Server næringstett mat til de med liten appetitt
- Dokumenter matinntak for beboere med ernæringsrisiko`,
    },
    {
      id: 'hov2-7-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-1-ex-1',
        number: '7.1.1',
        type: 'multiple-choice',
        task: 'Hvilket næringsstoff gir mest energi per gram?',
        options: [
          { id: 'a', text: 'Karbohydrater', isCorrect: false },
          { id: 'b', text: 'Proteiner', isCorrect: false },
          { id: 'c', text: 'Fett', isCorrect: true },
          { id: 'd', text: 'Kostfiber', isCorrect: false },
        ],
        solution: 'Fett gir mest energi per gram – 9 kcal/g – sammenlignet med karbohydrater og proteiner som begge gir 4 kcal/g. Dette er grunnen til at fettrik mat gir mye energi i små porsjoner.',
      },
    },
    {
      id: 'hov2-7-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-1-ex-2',
        number: '7.1.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom makronæringsstoffer og mikronæringsstoffer, og gi eksempler på hver.',
        solution: 'Makronæringsstoffer trengs i store mengder og gir energi: karbohydrater (brød, ris), proteiner (kjøtt, fisk, egg) og fett (olje, smør). Mikronæringsstoffer trengs i små mengder og regulerer kroppens prosesser: vitaminer (vitamin C i frukt, vitamin D fra sollys) og mineraler (kalsium i melk, jern i kjøtt). Begge grupper er nødvendige for god helse.',
      },
    },
    {
      id: 'hov2-7-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-1-ex-3',
        number: '7.1.3',
        type: 'multiple-choice',
        task: 'Hva betyr nøkkelhullsmerket på en matvare?',
        options: [
          { id: 'a', text: 'At matvaren er økologisk produsert', isCorrect: false },
          { id: 'b', text: 'At matvaren er et sunnere valg innen sin produktgruppe', isCorrect: true },
          { id: 'c', text: 'At matvaren er allergenfri', isCorrect: false },
          { id: 'd', text: 'At matvaren inneholder ekstra vitaminer', isCorrect: false },
        ],
        solution: 'Nøkkelhullsmerket er et nordisk merke som viser at matvaren er et sunnere valg innen sin produktgruppe. Den inneholder mindre fett, sukker og salt, og mer fiber og fullkorn sammenlignet med lignende produkter uten merket.',
      },
    },
    {
      id: 'hov2-7-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-1-ex-4',
        number: '7.1.4',
        type: 'classic',
        task: 'Beskriv fem av de nasjonale kostholdsrådene fra Helsedirektoratet.',
        solution: '1) Ha et variert kosthold med mye grønnsaker, frukt og bær. 2) Velg fullkornsprodukter fremfor fint mel. 3) Spis fisk 2-3 ganger i uken. 4) Begrens inntak av rødt og bearbeidet kjøtt. 5) Begrens salt til maks 5 g per dag. Andre relevante råd inkluderer å velge magre meieriprodukter, begrense tilsatt sukker og drikke vann som tørstedrikk.',
      },
    },
    {
      id: 'hov2-7-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-1-ex-5',
        number: '7.1.5',
        type: 'multiple-choice',
        task: 'Hvorfor er det ekstra viktig at eldre får nok proteiner?',
        options: [
          { id: 'a', text: 'Fordi proteiner gir mest energi', isCorrect: false },
          { id: 'b', text: 'For å forebygge muskeltap (sarkopeni)', isCorrect: true },
          { id: 'c', text: 'Fordi eldre ikke kan fordøye fett', isCorrect: false },
          { id: 'd', text: 'For å øke blodtrykket', isCorrect: false },
        ],
        solution: 'Eldre er spesielt utsatt for sarkopeni – aldersrelatert muskeltap. Tilstrekkelig proteininntak er viktig for å opprettholde muskelmasse og muskelstyrke. Dette er avgjørende for mobilitet, balanse og forebygging av fall.',
      },
    },
    {
      id: 'hov2-7-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-1-ex-6',
        number: '7.1.6',
        type: 'classic',
        task: 'En eldre beboer på sykehjemmet spiser lite og har gått ned 3 kg den siste måneden. Hvilke tiltak kan du iverksette for å bedre næringstilførselen?',
        solution: 'Tiltak kan inkludere: Tilby små, hyppige måltider (5-6 per dag). Servere næringstett mat – berike maten med fløte, smør, olje eller proteinpulver. Tilby drikkbar næring som næringsdrikker mellom måltidene. Sørge for en trivelig spisesituasjon med sosialt samvær. Tilpasse konsistens om nødvendig. Dokumentere matinntak og rapportere til sykepleier. Veie beboeren regelmessig og følge opp med ernæringsscreening.',
      },
    },
    {
      id: 'hov2-7-1-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Næringsstoffer** deles i makro- (karbohydrater, proteiner, fett) og mikronæringsstoffer (vitaminer, mineraler)
- **Energibalanse** handler om forholdet mellom energiinntak og energiforbruk
- **Kostholdsrådene** gir veiledning for et sunt og variert kosthold
- **Nøkkelhullsmerket** hjelper forbrukere å velge sunnere alternativer

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Næringsstoffer | Stoffer i maten kroppen trenger for å fungere |
| Energibalanse | Samsvar mellom energiinntak og energiforbruk |
| Nøkkelhullsmerket | Nordisk merke for sunnere matvarevalg |
| Sarkopeni | Aldersrelatert tap av muskelmasse og muskelstyrke |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Næringsstoffer', definition: 'Stoffer i maten som kroppen trenger for å fungere, delt i makro- og mikronæringsstoffer' },
    { term: 'Energibalanse', definition: 'Samsvar mellom energi man får i seg gjennom mat og energi kroppen forbruker' },
    { term: 'Nøkkelhullsmerket', definition: 'Nordisk merke som viser at matvaren er et sunnere valg innen sin produktgruppe' },
    { term: 'Sarkopeni', definition: 'Aldersrelatert muskeltap som kan forebygges med tilstrekkelig protein og aktivitet' },
    { term: 'Næringstett mat', definition: 'Mat som inneholder mye næring i forhold til energimengden' },
  ],
};

// ============================================================================
// Kapittel 7.2: Feil- og underernæring
// ============================================================================

export const CHAPTER_HOV2_7_2: TextbookChapter = {
  id: 'hov2-7-2',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '7.2',
  title: 'Feil- og underernæring',
  description: 'Årsaker til og symptomer på feil- og underernæring, screeningverktøy for å identifisere ernæringsrisiko, og tiltak for å forebygge og behandle underernæring.',
  estimatedMinutes: 50,
  competenceGoals: [
    'gjøre rede for ernæring og kosthold tilpasset ulike brukergrupper',
  ],
  content: [
    {
      id: 'hov2-7-2-intro',
      type: 'text',
      content: `## Når kostholdet ikke strekker til

Feil- og underernæring er et utbredt problem i helsetjenesten, spesielt blant eldre og kronisk syke. Helsefagarbeidere har en viktig rolle i å oppdage ernæringsproblemer tidlig og iverksette tiltak.

I dette kapittelet lærer du:
- Forskjellen mellom feilernæring og underernæring
- Årsaker og risikofaktorer
- Symptomer og tegn
- Screeningverktøy og tiltak`,
    },
    {
      id: 'hov2-7-2-def-1',
      type: 'definition',
      title: 'Underernæring',
      content: `**Underernæring** er en tilstand der kroppen ikke får tilstrekkelig næring til å dekke sitt behov. Det kan skyldes for lite mat, feil sammensetning av kosten eller økt næringsbehov ved sykdom. Underernæring fører til tap av muskelmasse, nedsatt immunforsvar, dårligere sårhelning og økt sykelighet. Omlag 30-50 % av eldre på sykehjem er underernærte eller i risiko for underernæring.`,
    },
    {
      id: 'hov2-7-2-text-1',
      type: 'text',
      content: `### Feilernæring versus underernæring

**Feilernæring** innebærer at kostholdet har feil sammensetning – for mye av noen næringsstoffer og for lite av andre. En person kan være overvektig og samtidig feilernært dersom kosten mangler viktige vitaminer og mineraler.

**Underernæring** betyr at det totale næringsopptaket er for lavt i forhold til behovet. Det finnes flere former:
- **Proteinenergiunderernæring**: Mangel på både energi og proteiner
- **Mikronæringsstoffmangel**: Mangel på spesifikke vitaminer eller mineraler
- **Kakeksi**: Alvorlig avmagring ved kronisk sykdom, som kreft

### Årsaker til underernæring

**Fysiske årsaker:**
- Tygge- og svelgevansker (dysfagi)
- Kvalme, oppkast og diaré
- Smerter ved spising
- Munnsårhet og dårlig tannhelse
- Nedsatt smaks- og luktesans
- Bivirkninger av legemidler

**Psykiske og sosiale årsaker:**
- Depresjon og angst
- Demens og forvirring
- Ensomhet og manglende motivasjon
- Sorgreaksjon
- Rusmisbruk

**Sykdomsrelaterte årsaker:**
- Økt behov ved infeksjoner og feber
- Kreft og kroniske sykdommer
- Kirurgiske inngrep
- KOLS og hjertesvikt`,
    },
    {
      id: 'hov2-7-2-def-2',
      type: 'definition',
      title: 'Ernæringsscreening',
      content: `**Ernæringsscreening** er en systematisk kartlegging for å identifisere personer i risiko for underernæring. Screeningen gjennomføres ved innleggelse i helseinstitusjon og jevnlig under oppholdet. Vanlige verktøy er **MNA** (Mini Nutritional Assessment) for eldre og **NRS 2002** (Nutritional Risk Screening) for sykehuspasienter.`,
    },
    {
      id: 'hov2-7-2-text-2',
      type: 'text',
      content: `### Symptomer og tegn på underernæring

**Tidlige tegn:**
- Vekttap (mer enn 5 % over 3 måneder)
- Nedsatt appetitt over tid
- Klær som blir for store
- Tretthet og slapphet
- Manglende interesse for mat

**Sene tegn:**
- Synlig avmagring
- Tørr, flassende hud
- Dårlig sårhelning
- Hyppige infeksjoner
- Muskelsvakhet og falltendens
- Trykksår
- Hårtap og sprø negler

### Screeningverktøy

**MNA (Mini Nutritional Assessment):**
- Utviklet spesielt for eldre over 65 år
- Enkel screening med 6 spørsmål
- Vurderer matinntak, vekttap, mobilitet, BMI og psykisk helse
- Resultatet deler inn i normal ernæringsstatus, risiko eller underernæring

**NRS 2002:**
- Brukes i sykehus
- Vurderer ernæringsstatus og sykdommens alvorlighetsgrad
- Score 3 eller mer indikerer ernæringsrisiko

**MUST (Malnutrition Universal Screening Tool):**
- Brukes i kommunehelsetjenesten
- Vurderer BMI, ufrivillig vekttap og akutt sykdom
- Enkel og rask å gjennomføre`,
    },
    {
      id: 'hov2-7-2-text-3',
      type: 'text',
      content: `### Tiltak ved underernæring

**Ernæringstiltak – trinn for trinn:**

**Trinn 1: Tilpass måltidene**
- Hyppige, små måltider (5-6 per dag)
- Trivelig og rolig spisemiljø
- Nok tid til å spise
- Tilpasset konsistens og temperatur
- Mat som pasienten liker

**Trinn 2: Berik maten**
- Tilsett fløte, smør eller olje i mat og drikke
- Bruk egg og ost i matlaging
- Proteinpulver i grøt eller suppe
- Næringstett mellommåltid

**Trinn 3: Næringsdrikker**
- Ferdiglagede næringsdrikker som supplement
- Gis mellom måltider, ikke i stedet for mat
- Ulike smaker og sammensetninger

**Trinn 4: Sondeernæring eller intravenøs ernæring**
- Sonde gjennom nesen til magesekken (nasogastrisk)
- PEG-sonde direkte til magesekken
- Intravenøs ernæring (parenteral ernæring) når tarmen ikke fungerer

**Dokumentasjon:**
- Registrere matinntak daglig
- Vekt ukentlig (eller oftere ved behov)
- Ernæringsplan med individuelle mål
- Rapportere endringer til sykepleier eller klinisk ernæringsfysiolog`,
    },
    {
      id: 'hov2-7-2-example-1',
      type: 'example',
      title: 'Eksempel: Ernæringsscreening av Gunnar',
      content: `**Situasjon**: Gunnar, 81 år, er innlagt på sykehjem etter hofteoperasjon. Du skal gjennomføre ernæringsscreening med MNA.

**Kartlegging:**
- Matinntak siste 3 måneder: Spiser betydelig mindre enn før (nedsatt appetitt)
- Vekttap: Gått ned 4 kg den siste måneden
- Mobilitet: Sengeliggende etter operasjonen
- BMI: 19,5 (undervektig)
- Psykisk helse: Nedstemt etter operasjonen

**Resultat**: MNA-score indikerer underernæring.

**Tiltak:**
1. Lage individuell ernæringsplan i samarbeid med sykepleier
2. Tilby 6 små måltider daglig med næringstett mat
3. Berike maten med ekstra energi og proteiner
4. Bestille næringsdrikker mellom måltider
5. Sørge for trivelig spisemiljø – spise sammen med andre
6. Registrere daglig matinntak og ukentlig vekt
7. Evaluere tiltakene etter 2 uker

**Viktig**: Gunnar trenger ekstra proteiner for sårhelning etter operasjonen og for å forebygge ytterligere muskeltap.`,
    },
    {
      id: 'hov2-7-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-2-ex-1',
        number: '7.2.1',
        type: 'multiple-choice',
        task: 'Hva regnes som betydelig ufrivillig vekttap?',
        options: [
          { id: 'a', text: '1 % over 6 måneder', isCorrect: false },
          { id: 'b', text: '5 % over 3 måneder', isCorrect: true },
          { id: 'c', text: '10 % over 2 år', isCorrect: false },
          { id: 'd', text: '2 % over 1 måned', isCorrect: false },
        ],
        solution: 'Et ufrivillig vekttap på mer enn 5 % over 3 måneder (eller mer enn 10 % over 6 måneder) regnes som betydelig og bør utløse ernæringstiltak. Vekttap er et av de viktigste tegnene på underernæring.',
      },
    },
    {
      id: 'hov2-7-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-2-ex-2',
        number: '7.2.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom feilernæring og underernæring, og gi eksempler.',
        solution: 'Feilernæring betyr at kostholdet har feil sammensetning – man kan få nok energi, men mangle viktige næringsstoffer. Eksempel: en person som spiser mye hurtigmat får nok kalorier, men mangler vitaminer og mineraler. Underernæring betyr at det totale næringsopptaket er for lavt. Eksempel: en eldre person med nedsatt appetitt som spiser svært lite over lengre tid, og som taper vekt og muskelmasse.',
      },
    },
    {
      id: 'hov2-7-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-2-ex-3',
        number: '7.2.3',
        type: 'multiple-choice',
        task: 'Hvilket screeningverktøy er utviklet spesielt for eldre over 65 år?',
        options: [
          { id: 'a', text: 'NRS 2002', isCorrect: false },
          { id: 'b', text: 'MUST', isCorrect: false },
          { id: 'c', text: 'MNA', isCorrect: true },
          { id: 'd', text: 'BMI', isCorrect: false },
        ],
        solution: 'MNA (Mini Nutritional Assessment) er utviklet spesielt for ernæringsscreening av eldre over 65 år. NRS 2002 brukes i sykehus, og MUST brukes i kommunehelsetjenesten. BMI er et mål på kroppsmasse, men ikke et screeningverktøy alene.',
      },
    },
    {
      id: 'hov2-7-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-2-ex-4',
        number: '7.2.4',
        type: 'classic',
        task: 'Beskriv de fire trinnene i tiltak ved underernæring.',
        solution: 'Trinn 1: Tilpass måltidene – hyppige, små måltider, trivelig spisemiljø, tilpasset konsistens og mat pasienten liker. Trinn 2: Berik maten – tilsett fløte, smør, olje, egg og proteinpulver for mer energi og næring. Trinn 3: Næringsdrikker – ferdiglagede drikker som supplement mellom måltider. Trinn 4: Sondeernæring eller intravenøs ernæring – når pasienten ikke kan ta til seg nok næring via munnen.',
      },
    },
    {
      id: 'hov2-7-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-2-ex-5',
        number: '7.2.5',
        type: 'classic',
        task: 'Nevn fem tegn på underernæring og forklar hvorfor helsefagarbeideren har en viktig rolle i å oppdage disse.',
        solution: 'Tegn på underernæring: 1) Vekttap og klær som blir for store. 2) Nedsatt appetitt og manglende interesse for mat. 3) Tretthet og slapphet. 4) Dårlig sårhelning og hyppige infeksjoner. 5) Tørr hud, hårtap og sprø negler. Helsefagarbeideren har tett kontakt med pasienten i hverdagen og er ofte den første til å merke endringer i matinntak, vekt og funksjonsnivå. Tidlig oppdagelse er avgjørende for å kunne iverksette tiltak før tilstanden forverres.',
      },
    },
    {
      id: 'hov2-7-2-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Feilernæring** er feil sammensetning, **underernæring** er for lite næring totalt
- **Årsaker** kan være fysiske, psykiske, sosiale eller sykdomsrelaterte
- **Ernæringsscreening** med verktøy som MNA identifiserer risiko
- **Tiltak** følger en trinnvis tilnærming fra tilpasning til sondeernæring

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Underernæring | For lite næring i forhold til kroppens behov |
| Feilernæring | Feil sammensetning av kostholdet |
| Ernæringsscreening | Systematisk kartlegging av ernæringsrisiko |
| MNA | Screeningverktøy for ernæring hos eldre |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Underernæring', definition: 'Tilstand der kroppen ikke får tilstrekkelig næring til å dekke sitt behov' },
    { term: 'Feilernæring', definition: 'Kosthold med feil sammensetning – for mye av noe og for lite av annet' },
    { term: 'Ernæringsscreening', definition: 'Systematisk kartlegging for å identifisere ernæringsrisiko' },
    { term: 'MNA', definition: 'Mini Nutritional Assessment – screeningverktøy for eldre over 65 år' },
    { term: 'Kakeksi', definition: 'Alvorlig avmagring knyttet til kronisk sykdom som kreft' },
  ],
};

// ============================================================================
// Kapittel 7.3: Måltidsplanlegging og tilpasning
// ============================================================================

export const CHAPTER_HOV2_7_3: TextbookChapter = {
  id: 'hov2-7-3',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '7.3',
  title: 'Måltidsplanlegging og tilpasning',
  description: 'Praktisk måltidsplanlegging, spesialkost ved ulike sykdommer og tilstander, kulturelle hensyn ved matlaging, og konsistenstilpasning ved tygge- og svelgevansker.',
  estimatedMinutes: 55,
  competenceGoals: [
    'gjøre rede for ernæring og kosthold tilpasset ulike brukergrupper',
  ],
  content: [
    {
      id: 'hov2-7-3-intro',
      type: 'text',
      content: `## Måltider tilpasset den enkelte

Måltidsplanlegging handler om mer enn å lage mat – det handler om å sikre at hver enkelt bruker får riktig ernæring tilpasset sine behov, preferanser og kulturelle bakgrunn. Som helsefagarbeider er du ofte den som serverer mat og observerer matinntaket.

I dette kapittelet lærer du:
- Hvordan planlegge næringsrike måltider
- Spesialkost ved ulike sykdommer
- Kulturelle og religiøse hensyn
- Konsistenstilpasning ved dysfagi`,
    },
    {
      id: 'hov2-7-3-def-1',
      type: 'definition',
      title: 'Spesialkost',
      content: `**Spesialkost** er kosthold som er tilpasset en bestemt medisinsk tilstand, allergi, intoleranse eller annet behov. Eksempler er diabeteskost (regulert sukker og karbohydrater), glutenfri kost (ved cøliaki), laktosefri kost (ved laktoseintoleranse) og konsistenstilpasset kost (ved svelgevansker). Spesialkost forordnes av lege eller klinisk ernæringsfysiolog.`,
    },
    {
      id: 'hov2-7-3-text-1',
      type: 'text',
      content: `### Måltidsplanlegging

**Grunnprinsipper:**
- Variert kosthold som dekker alle næringsbehov
- Jevn måltidsrytme med 4-6 måltider per dag
- Nattfasten bør ikke overstige 11 timer
- Tilpasset mengde og næringsinnhold til den enkelte
- Sesongbaserte råvarer og variert meny

**Planlegging i institusjon:**
- Ukemeny som rullerer for variasjon
- Hensyn til individuelle behov og preferanser
- Budsjetthensyn uten å gå på kompromiss med kvalitet
- Dokumentasjon av spesialkost og allergier
- Samarbeid mellom kjøkken, pleiere og ernæringsfysiolog

**Måltidsmiljø:**
- Trivelig og rolig atmosfære
- Dekket bord med servise og pynt
- Sosialt fellesskap der det er mulig
- Nok tid til å spise
- Tilpasset sittestilling og hjelpemidler`,
    },
    {
      id: 'hov2-7-3-text-2',
      type: 'text',
      content: `### Spesialkost ved ulike tilstander

**Diabeteskost:**
- Regelmessige måltider med jevn fordeling av karbohydrater
- Velg sammensatte karbohydrater (fullkorn, grønnsaker) fremfor sukker
- Begrens tilsatt sukker og sukkerholdig drikke
- Fokus på fiber, grønnsaker og sunne fett
- Samarbeid med diabetessykepleier om kostveiledning

**Hjerte- og karvennlig kost:**
- Begrens salt til under 5 g per dag
- Velg umettede fettsyrer (fisk, olivenolje, nøtter)
- Mye frukt, grønnsaker og fullkorn
- Begrens rødt og bearbeidet kjøtt
- Middelhavskosthold er godt dokumentert

**Nyrevennlig kost:**
- Tilpasset protein- og saltinntak
- Begrensning av kalium og fosfor ved alvorlig nyresvikt
- Nøye væskekontroll
- Individuelt tilpasset av ernæringsfysiolog

**Glutenfri kost (ved cøliaki):**
- Unngå hvete, rug og bygg
- Erstattes med ris, mais, bokhvete, havre (glutenfri) og poteter
- Viktig å unngå kryssforurensning i matlaging

**Laktosefri kost:**
- Unngå melk og melkeprodukter, eller velg laktosefrie varianter
- Vær oppmerksom på skjult laktose i ferdigprodukter
- Sikre kalsiuminntak gjennom andre kilder eller tilskudd`,
    },
    {
      id: 'hov2-7-3-def-2',
      type: 'definition',
      title: 'Dysfagi',
      content: `**Dysfagi** er vansker med å tygge eller svelge mat og drikke. Tilstanden er vanlig etter hjerneslag, ved demens, Parkinsons sykdom og hos eldre generelt. Dysfagi øker risikoen for aspirasjon (mat eller væske kommer ned i lungene), kvelning og underernæring. Behandling inkluderer konsistenstilpasset kost og spesialteknikker for trygg svelging.`,
    },
    {
      id: 'hov2-7-3-text-3',
      type: 'text',
      content: `### Konsistenstilpasning

**IDDSI-rammerverket** (International Dysphagia Diet Standardisation Initiative) brukes for å standardisere konsistens på mat og drikke:

**Mat (nivå 3-7):**
- **Nivå 7 – Vanlig**: Normal konsistens, ingen tilpasning
- **Nivå 6 – Myk og bitmyk**: Myk mat som kan moses med gaffel
- **Nivå 5 – Findelt og fuktig**: Små biter (maks 4 mm), fuktig
- **Nivå 4 – Moselig**: Kan moses med gaffel, glatt og uten klumper
- **Nivå 3 – Flytende**: Tykk, glatt konsistens som kan drikkes

**Drikke (nivå 0-4):**
- **Nivå 0 – Tynn**: Vanlig væske (vann, kaffe, juice)
- **Nivå 1 – Lett tyknet**: Litt tykkere enn vann
- **Nivå 2 – Middels tyknet**: Flyter sakte fra skje
- **Nivå 3 – Mye tyknet**: Kan holdes på skje, flyter ikke
- **Nivå 4 – Ekstremt tyknet**: Holder form, spises med skje

### Kulturelle og religiøse hensyn

**Islam (halal):**
- Svinekjøtt og alkohol er forbudt
- Kjøtt skal være halal-slaktet
- Under ramadan faster mange fra soloppgang til solnedgang

**Jødedom (kosher):**
- Svin og skalldyr er forbudt
- Kjøtt og melk skal ikke blandes
- Egne regler for tilberedning

**Hinduisme:**
- Mange er vegetarianere – ku er hellig
- Noen unngår også egg og løk

**Veganisme og vegetarianisme:**
- Vegetar: Unngår kjøtt og fisk
- Vegansk: Unngår alle animalske produkter
- Sikre tilstrekkelig B12, jern, kalsium og protein`,
    },
    {
      id: 'hov2-7-3-tip-1',
      type: 'tip',
      title: 'Maten som medisin',
      content: `Riktig tilpasset ernæring kan bidra til raskere tilfriskning, bedre livskvalitet og redusert behov for medisiner. Husk at måltidet også er en sosial hendelse – det handler om mer enn næringsstoffer. Respekter brukerens ønsker og vaner, og involver dem i matvalg så langt det er mulig. Et godt måltid kan være dagens høydepunkt for mange beboere.`,
    },
    {
      id: 'hov2-7-3-example-1',
      type: 'example',
      title: 'Eksempel: Tilpasset måltid for ulike behov',
      content: `**Situasjon**: Du jobber på sykehjem og skal servere middag til fire beboere med ulike behov.

**Beboer 1 – Martha, 88 år (dysfagi etter hjerneslag):**
- Findelt og fuktig konsistens (IDDSI nivå 5)
- Tyknet drikke (nivå 2)
- Sitte oppreist under og 30 minutter etter måltidet
- Små biter og god tid

**Beboer 2 – Ahmed, 72 år (diabetes type 2):**
- Vanlig konsistens, men regulert karbohydratinnhold
- Fullkornris i stedet for hvit ris
- Grønnsaker som hoveddel av måltidet
- Frukt til dessert i stedet for sukkerholdige alternativer

**Beboer 3 – Fatima, 79 år (halal-kost):**
- Ingen svineprodukter – sjekk alle ingredienser
- Halal-kjøtt bestilt separat
- Under ramadan: tilpasset måltidstidspunkt

**Beboer 4 – Per, 91 år (underernæring):**
- Beriket mat med ekstra fløte og smør
- Næringsdrikk mellom måltider
- Små, hyppige porsjoner
- Registrere matinntak

**Konklusjon**: Hver beboer har individuelle behov som må dokumenteres og respekteres.`,
    },
    {
      id: 'hov2-7-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-3-ex-1',
        number: '7.3.1',
        type: 'multiple-choice',
        task: 'Hva er anbefalt maksimal varighet for nattfasten i institusjoner?',
        options: [
          { id: 'a', text: '8 timer', isCorrect: false },
          { id: 'b', text: '11 timer', isCorrect: true },
          { id: 'c', text: '14 timer', isCorrect: false },
          { id: 'd', text: '16 timer', isCorrect: false },
        ],
        solution: 'Nattfasten bør ikke overstige 11 timer. For lang faste kan føre til nedbrytning av muskelmasse og forverring av ernæringsstatus, spesielt hos eldre og underernærte. Et senkveldsmat kan bidra til å forkorte nattfasten.',
      },
    },
    {
      id: 'hov2-7-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-3-ex-2',
        number: '7.3.2',
        type: 'classic',
        task: 'Forklar hva dysfagi er og hvilke konsekvenser tilstanden kan ha.',
        solution: 'Dysfagi er vansker med å tygge eller svelge mat og drikke. Tilstanden er vanlig etter hjerneslag, ved demens og Parkinsons sykdom. Konsekvenser kan være: aspirasjon (mat/drikke i lungene), som kan gi aspirasjonspneumoni. Kvelningsfare. Underernæring fordi pasienten spiser for lite. Dehydrering fordi det er vanskelig å drikke nok. Nedsatt livskvalitet og redsel for å spise.',
      },
    },
    {
      id: 'hov2-7-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-3-ex-3',
        number: '7.3.3',
        type: 'multiple-choice',
        task: 'Hvilken kost er riktig for en person med cøliaki?',
        options: [
          { id: 'a', text: 'Laktosefri kost', isCorrect: false },
          { id: 'b', text: 'Lavprotein kost', isCorrect: false },
          { id: 'c', text: 'Glutenfri kost', isCorrect: true },
          { id: 'd', text: 'Saltfattig kost', isCorrect: false },
        ],
        solution: 'Cøliaki er en autoimmun sykdom der tynntarmen reagerer på gluten. Behandlingen er livslang glutenfri kost, som innebærer å unngå hvete, rug og bygg. Glutenfrie alternativer er ris, mais, bokhvete, glutenfri havre og poteter.',
      },
    },
    {
      id: 'hov2-7-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-3-ex-4',
        number: '7.3.4',
        type: 'classic',
        task: 'Beskriv tre kulturelle eller religiøse hensyn du må ta ved måltidsplanlegging i en helseinstitusjon.',
        solution: '1) Halal-kost (islam): Ingen svinekjøtt eller alkohol, kjøttet skal være halal-slaktet. Under ramadan tilpasses måltidstidspunktene. 2) Kosher-kost (jødedom): Forbud mot svin og skalldyr, kjøtt og melk skal ikke blandes i samme måltid. 3) Hinduisme: Mange er vegetarianere, ku er hellig og unngås i matlaging. Noen unngår også egg. I alle tilfeller er det viktig å spørre den enkelte om deres behov og preferanser.',
      },
    },
    {
      id: 'hov2-7-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-3-ex-5',
        number: '7.3.5',
        type: 'multiple-choice',
        task: 'Hva er riktig tiltak for en pasient med dysfagi og IDDSI nivå 4 for drikke?',
        options: [
          { id: 'a', text: 'Gi vanlig tynn drikke', isCorrect: false },
          { id: 'b', text: 'Gi lett tyknet drikke', isCorrect: false },
          { id: 'c', text: 'Unngå all drikke', isCorrect: false },
          { id: 'd', text: 'Gi ekstremt tyknet drikke som spises med skje', isCorrect: true },
        ],
        solution: 'IDDSI nivå 4 for drikke er ekstremt tyknet konsistens. Drikken holder form og spises med skje – den renner ikke av en gaffel. Dette er det tykkeste nivået for drikke og brukes for pasienter med alvorlige svelgevansker der tynnere konsistens gir fare for aspirasjon.',
      },
    },
    {
      id: 'hov2-7-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-3-ex-6',
        number: '7.3.6',
        type: 'classic',
        task: 'Lag en enkel dagsplan for måltider til en eldre person med diabetes type 2 og underernæring. Forklar valgene dine.',
        solution: 'Frokost (kl. 08): Havregrøt med bær og nøtter, egg, te. Mellommåltid (kl. 10:30): Yoghurt med proteinpulver og knekkebrød med ost. Lunsj (kl. 12): Laks med fullkornris og grønnsaker, olivenoljedressing. Ettermiddagsmat (kl. 14:30): Næringsdrikk og frukt. Kveldsmat (kl. 17:30): Kyllingsuppe med grovt brød og smør. Senkveldsmat (kl. 20): Brød med ost og avokado. Begrunnelse: Hyppige måltider for jevnt blodsukker (diabetes) og bedre næringsinntak (underernæring). Sammensatte karbohydrater for stabil blodsukkerregulering. Beriket mat med ekstra fett og protein for å øke energi- og næringsinnhold.',
      },
    },
    {
      id: 'hov2-7-3-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Måltidsplanlegging** krever hensyn til næringsbehov, preferanser og medisinsk tilstand
- **Spesialkost** tilpasses ved diabetes, hjertesykdom, cøliaki, laktoseintoleranse med mer
- **Kulturelle hensyn** som halal, kosher og vegetarianisme må respekteres
- **Konsistenstilpasning** ved dysfagi følger IDDSI-rammerverket

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Spesialkost | Kosthold tilpasset medisinsk tilstand eller annet behov |
| Dysfagi | Vansker med å tygge eller svelge mat og drikke |
| IDDSI | Internasjonalt rammeverk for konsistenstilpasning |
| Halal | Matkrav i islam – blant annet forbud mot svin |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Spesialkost', definition: 'Kosthold tilpasset en medisinsk tilstand, allergi eller annet spesifikt behov' },
    { term: 'Dysfagi', definition: 'Vansker med å tygge eller svelge mat og drikke' },
    { term: 'IDDSI', definition: 'International Dysphagia Diet Standardisation Initiative – rammeverk for konsistenstilpasning' },
    { term: 'Aspirasjon', definition: 'Når mat eller væske kommer ned i luftveiene i stedet for spiserøret' },
    { term: 'Næringstett mat', definition: 'Mat som gir mye næring i forhold til energiinnholdet' },
  ],
};

// ============================================================================
// Kapittel 7.4: Hygiene og smittevern
// ============================================================================

export const CHAPTER_HOV2_7_4: TextbookChapter = {
  id: 'hov2-7-4',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '7.4',
  title: 'Hygiene og smittevern',
  description: 'Håndhygiene, smitteveier, basale smittevernrutiner og isoleringsregimer. Lær å forebygge smitte i helse- og omsorgstjenesten.',
  estimatedMinutes: 55,
  competenceGoals: [
    'ivareta hygiene og smittevern i yrkesutøvelsen',
  ],
  content: [
    {
      id: 'hov2-7-4-intro',
      type: 'text',
      content: `## Smittevern i praksis

Smittevern er en av de viktigste oppgavene i helse- og omsorgstjenesten. Infeksjoner er en hyppig årsak til forverring og død hos sårbare pasienter. Som helsefagarbeider er du i front for å forebygge smittespredning gjennom gode hygieniske rutiner.

I dette kapittelet lærer du:
- Håndhygiene og riktig teknikk
- Smitteveier og smittekjeden
- Basale smittevernrutiner
- Isoleringsregimer`,
    },
    {
      id: 'hov2-7-4-def-1',
      type: 'definition',
      title: 'Smittekjeden',
      content: `**Smittekjeden** beskriver de seks leddene som må være til stede for at smitte skal kunne overføres: 1) **Smittestoff** (bakterie, virus, sopp), 2) **Smittekilde** (person, dyr, gjenstander), 3) **Utgangsport** (f.eks. luftveier, sår, avføring), 4) **Smittevei** (kontakt, dråpe, luft, blod), 5) **Inngangsport** (slimhinner, sår, luftveier) og 6) **Mottaker** (person med redusert motstandskraft). Brytes ett ledd, stoppes smitten.`,
    },
    {
      id: 'hov2-7-4-text-1',
      type: 'text',
      content: `### Håndhygiene – den viktigste smitteforebyggende tiltaket

**Håndvask med såpe og vann:**
- Brukes ved synlig skitne eller forurensede hender
- Etter toalettbesøk
- Ved kontakt med kroppsvæsker
- Vask i minst 40-60 sekunder
- Tørk hendene godt med engangshåndkle

**Teknikk for håndvask:**
1. Fukt hendene med vann
2. Påfør tilstrekkelig såpe
3. Gni håndflate mot håndflate
4. Gni høyre håndflate over venstre håndbak og omvendt
5. Gni håndflate mot håndflate med flettet fingre
6. Gni fingerbakene mot motstående håndflate
7. Roter høyre tommel i venstre håndflate og omvendt
8. Gni fingertupper i motstående håndflate i sirkulær bevegelse
9. Skyll hendene grundig
10. Tørk med engangshåndkle og bruk det til å skru av kranen

**Hånddesinfeksjon med alkoholbasert middel:**
- Brukes når hendene er synlig rene
- Før og etter pasientkontakt
- Før rene og etter urene prosedyrer
- Påfør 2-3 ml og gni inn i minst 20-30 sekunder
- Dekk hele hånden inkludert mellom fingrene og rundt neglene

**Verdens helseorganisasjons (WHO) fem indikasjoner:**
1. Før pasientkontakt
2. Før rene/aseptiske prosedyrer
3. Etter risiko for kontakt med kroppsvæsker
4. Etter pasientkontakt
5. Etter kontakt med pasientens omgivelser`,
    },
    {
      id: 'hov2-7-4-text-2',
      type: 'text',
      content: `### Smitteveier

**Kontaktsmitte (den vanligste):**
- **Direkte kontakt**: Berøring mellom smittekilde og mottaker (f.eks. hender)
- **Indirekte kontakt**: Via forurensede gjenstander (dørhåndtak, utstyr, sengetøy)
- Eksempler: MRSA, norovirus, skabb

**Dråpesmitte:**
- Store dråper som dannes ved hosting, nysing og snakking
- Dråpene faller til bakken innen 1-2 meter
- Eksempler: influensa, RS-virus, kikhoste
- Tiltak: Munnbind, avstand og hoste-/nyseetikette

**Luftbåren smitte (aerosol):**
- Små partikler som svever i luften over lengre tid og avstand
- Eksempler: tuberkulose, meslinger, vannkopper
- Tiltak: Åndedrettsvern (FFP2/FFP3), undertrykksrom

**Fekal-oral smitte:**
- Smittestoffer fra avføring overføres til munnen
- Eksempler: norovirus, salmonella, hepatitt A
- Tiltak: God håndhygiene, renhold av toaletter

**Blodsmitte:**
- Via blod og andre kroppsvæsker gjennom hud- eller slimhinnelesjoner
- Eksempler: hepatitt B og C, hiv
- Tiltak: Hansker, beskyttelsesutstyr, forsiktighet med skarpe gjenstander`,
    },
    {
      id: 'hov2-7-4-def-2',
      type: 'definition',
      title: 'Basale smittevernrutiner',
      content: `**Basale smittevernrutiner** er et sett med standardtiltak som skal gjelde for all pasientkontakt, uavhengig av kjent smittestatus. Prinsippet er at alle kroppsvæsker (unntatt svette) kan inneholde smittestoffer. Rutinene inkluderer håndhygiene, bruk av personlig verneutstyr, sikker håndtering av avfall og tekstiler, renhold og desinfeksjon, samt trygg håndtering av stikkende og skjærende utstyr.`,
    },
    {
      id: 'hov2-7-4-text-3',
      type: 'text',
      content: `### Basale smittevernrutiner i detalj

**Personlig verneutstyr (PVU):**
- **Hansker**: Ved kontakt med kroppsvæsker, slimhinner eller skadet hud
- **Munnbind**: Ved risiko for dråpesmitte eller sprut
- **Beskyttelsesfrakk**: Ved risiko for søl av kroppsvæsker
- **Øyebeskyttelse**: Ved risiko for sprut i øynene
- Skift hansker mellom pasienter og mellom urene og rene oppgaver

**Renhold og desinfeksjon:**
- Daglig renhold av pasientrom og fellesarealer
- Desinfeksjon av berøringspunkter (dørhåndtak, lysbrytere, sengehester)
- Alkoholbasert desinfeksjon av medisinsk utstyr mellom pasienter
- Grundig sluttrengjøring ved utskrivelse

**Avfallshåndtering:**
- Smitteavfall i gule avfallsbeholdere
- Stikkende/skjærende avfall i spesielle bokser
- Aldri sett tilbake beskyttelseshylse på brukte kanyler
- Vanlig avfall sorteres etter gjeldende rutiner

### Isoleringsregimer

**Kontaktisolering:**
- Eget rom med sluse
- Hansker og frakk ved pasientkontakt
- Eksempler: MRSA, VRE, Clostridioides difficile

**Dråpeisolering:**
- Eget rom, dør holdes lukket
- Munnbind innenfor 1-2 meter fra pasienten
- Eksempler: influensa, RS-virus

**Luftsmitteisolering:**
- Undertrykksrom (luft suges ut)
- Åndedrettsvern (FFP3) for alle som går inn
- Eksempler: tuberkulose, meslinger

**Beskyttende isolering (omvendt isolering):**
- Beskytter immunsvekkede pasienter fra omgivelsene
- Strengt renhold, begrensning av besøkende
- Eksempler: pasienter etter stamcelletransplantasjon`,
    },
    {
      id: 'hov2-7-4-tip-1',
      type: 'tip',
      title: 'Håndhygiene redder liv',
      content: `Studier viser at god håndhygiene kan forebygge opptil 50 % av helsetjenesteassosierte infeksjoner. Likevel viser undersøkelser at helsepersonell i gjennomsnitt utfører håndhygiene i bare 40-60 % av tilfellene der det er indisert. Vær en rollemodell for god håndhygiene – det er det viktigste enkelttiltaket du kan gjøre for å beskytte pasientene.`,
    },
    {
      id: 'hov2-7-4-example-1',
      type: 'example',
      title: 'Eksempel: Smittevern ved morgenstellet',
      content: `**Situasjon**: Du skal hjelpe en beboer med morgenstell. Beboeren har ingen kjent smitte, men du følger basale smittevernrutiner.

**Fremgangsmåte:**
1. **Håndhygiene** med alkoholbasert hånddesinfeksjon før du går inn på rommet
2. Ta på **engangshansker** og **stellefrakk**
3. Utfør morgenstellet med rene kluter og varmt vann
4. Skift hansker mellom nedre og øvre kroppsdel (fra urent til rent)
5. Fjern hansker og frakk etter stellet
6. **Håndhygiene** igjen etter at hansker er fjernet
7. Legg brukt sengetøy og klær i riktig beholder
8. Tørk av kontaktpunkter (sengehest, nattbord) med desinfeksjon
9. **Håndhygiene** før du forlater rommet

**Viktig prinsipp**: Håndhygiene utføres alltid etter at hansker er tatt av – hansker erstatter ikke håndhygiene!`,
    },
    {
      id: 'hov2-7-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-4-ex-1',
        number: '7.4.1',
        type: 'multiple-choice',
        task: 'Hva er den vanligste smitteveien i helsetjenesten?',
        options: [
          { id: 'a', text: 'Luftbåren smitte', isCorrect: false },
          { id: 'b', text: 'Kontaktsmitte', isCorrect: true },
          { id: 'c', text: 'Blodsmitte', isCorrect: false },
          { id: 'd', text: 'Dråpesmitte', isCorrect: false },
        ],
        solution: 'Kontaktsmitte er den vanligste smitteveien i helsetjenesten. Smitte overføres via hender, hudkontakt eller forurensede gjenstander. Derfor er god håndhygiene det viktigste enkelttiltaket for å forebygge smittespredning.',
      },
    },
    {
      id: 'hov2-7-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-4-ex-2',
        number: '7.4.2',
        type: 'classic',
        task: 'Beskriv de seks leddene i smittekjeden og forklar hvordan man kan bryte kjeden.',
        solution: '1) Smittestoff – drep mikroben med desinfeksjon eller antibiotika. 2) Smittekilde – isoler smittekilden eller behandle infeksjonen. 3) Utgangsport – dekk sår, bruk munnbind ved hosting. 4) Smittevei – håndhygiene, renhold, bruk av verneutstyr bryter smitteveien. 5) Inngangsport – beskytt sår og slimhinner, bruk hansker. 6) Mottaker – styrk immunforsvaret gjennom vaksinasjon og god ernæring. Det mest effektive tiltaket er å bryte smitteveien gjennom god håndhygiene.',
      },
    },
    {
      id: 'hov2-7-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-4-ex-3',
        number: '7.4.3',
        type: 'multiple-choice',
        task: 'Når skal du bruke håndvask med såpe og vann i stedet for alkoholbasert hånddesinfeksjon?',
        options: [
          { id: 'a', text: 'Alltid – håndvask er bedre enn desinfeksjon', isCorrect: false },
          { id: 'b', text: 'Før pasientkontakt', isCorrect: false },
          { id: 'c', text: 'Når hendene er synlig skitne eller forurenset', isCorrect: true },
          { id: 'd', text: 'Etter pasientkontakt', isCorrect: false },
        ],
        solution: 'Håndvask med såpe og vann skal brukes når hendene er synlig skitne eller forurenset med kroppsvæsker, etter toalettbesøk og ved kontakt med enkelte mikrober som norovirus og Clostridioides difficile (som er motstandsdyktige mot alkohol). I alle andre situasjoner er alkoholbasert hånddesinfeksjon tilstrekkelig og mer skånsomt for hendene.',
      },
    },
    {
      id: 'hov2-7-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-4-ex-4',
        number: '7.4.4',
        type: 'classic',
        task: 'Forklar hva basale smittevernrutiner innebærer og hvorfor de er viktige.',
        solution: 'Basale smittevernrutiner er standardtiltak som gjelder for all pasientkontakt, uavhengig av om pasienten har kjent smitte. De inkluderer: håndhygiene, bruk av personlig verneutstyr (hansker, munnbind, frakk, øyebeskyttelse), sikker håndtering av avfall og stikkende utstyr, renhold og desinfeksjon, og trygg håndtering av tekstiler. De er viktige fordi mange infeksjoner ikke er diagnostisert, og alle kroppsvæsker kan potensielt inneholde smittestoffer. Ved å følge basale rutiner alltid, beskytter man både pasienter og seg selv.',
      },
    },
    {
      id: 'hov2-7-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-4-ex-5',
        number: '7.4.5',
        type: 'multiple-choice',
        task: 'Hvilket isoleringsregime brukes for en pasient med tuberkulose?',
        options: [
          { id: 'a', text: 'Kontaktisolering', isCorrect: false },
          { id: 'b', text: 'Dråpeisolering', isCorrect: false },
          { id: 'c', text: 'Luftsmitteisolering', isCorrect: true },
          { id: 'd', text: 'Beskyttende isolering', isCorrect: false },
        ],
        solution: 'Tuberkulose smitter via luftbårne partikler (aerosoler) som kan sveve i luften over lang tid. Derfor kreves luftsmitteisolering med undertrykksrom og åndedrettsvern (FFP3-masker) for alle som går inn på rommet. Dråpeisolering er ikke tilstrekkelig fordi tuberkulosebakterier finnes i svært små partikler.',
      },
    },
    {
      id: 'hov2-7-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-4-ex-6',
        number: '7.4.6',
        type: 'classic',
        task: 'Du skal stelle en pasient som er kontaktisolert på grunn av MRSA. Beskriv fremgangsmåten for på- og avkledning av verneutstyr.',
        solution: 'Påkledning (i slusen): 1) Utfør håndhygiene. 2) Ta på beskyttelsesfrakk og knyt den bak. 3) Ta på munnbind om nødvendig. 4) Ta på hansker slik at de dekker frakkens ermer. Avkledning (i slusen): 1) Ta av hanskene ved å vrenge dem av. 2) Utfør håndhygiene. 3) Løs opp frakken og trekk den av slik at utsiden er inn. 4) Kast frakk og hansker i smitteavfall. 5) Ta av eventuelt munnbind ved å ta i stroppene. 6) Utfør grundig håndhygiene med såpe og vann. Viktig: Berør aldri utsiden av verneutstyret med rene hender.',
      },
    },
    {
      id: 'hov2-7-4-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Håndhygiene** er det viktigste enkelttiltaket mot smittespredning
- **Smittekjeden** har seks ledd som alle kan brytes for å stoppe smitte
- **Basale smittevernrutiner** gjelder for all pasientkontakt
- **Isoleringsregimer** tilpasses smitteveien (kontakt, dråpe, luft)

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Smittekjeden | Seks ledd som må være til stede for smitteoverføring |
| Basale smittevernrutiner | Standardtiltak som gjelder for all pasientkontakt |
| Kontaktsmitte | Vanligste smittevei – via hender og gjenstander |
| Isoleringsregime | Tiltak for å hindre smittespredning fra isolert pasient |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Smittekjeden', definition: 'Seks ledd som må være til stede for at smitte skal overføres' },
    { term: 'Basale smittevernrutiner', definition: 'Standardtiltak for all pasientkontakt uavhengig av kjent smittestatus' },
    { term: 'Kontaktsmitte', definition: 'Smitte overført via direkte eller indirekte berøring – den vanligste smitteveien' },
    { term: 'Håndhygiene', definition: 'Håndvask eller hånddesinfeksjon for å fjerne eller drepe mikroorganismer' },
    { term: 'Isoleringsregime', definition: 'Tiltak for å hindre smittespredning, tilpasset smitteveien' },
  ],
};

// ============================================================================
// Kapittel 7.5: Antibiotikaresistens og infeksjoner
// ============================================================================

export const CHAPTER_HOV2_7_5: TextbookChapter = {
  id: 'hov2-7-5',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '7.5',
  title: 'Antibiotikaresistens og infeksjoner',
  description: 'Antibiotikaresistens som global trussel, resistente bakterier som MRSA og VRE, norovirus og andre vanlige infeksjoner, og strategier for smitteforebygging.',
  estimatedMinutes: 50,
  competenceGoals: [
    'forebygge smitte og infeksjoner i helse- og omsorgstjenesten',
  ],
  content: [
    {
      id: 'hov2-7-5-intro',
      type: 'text',
      content: `## En voksende trussel

Antibiotikaresistens er en av de største truslene mot global helse. Bakterier som har blitt motstandsdyktige mot antibiotika, gjør infeksjoner vanskeligere å behandle og kan føre til lengre sykdom og økt dødelighet. Som helsefagarbeider har du en viktig rolle i å forebygge både spredning av resistente bakterier og unødvendig antibiotikabruk.

I dette kapittelet lærer du:
- Hva antibiotikaresistens er og hvorfor det oppstår
- Viktige resistente bakterier (MRSA, VRE, ESBL)
- Vanlige infeksjoner i helsetjenesten
- Strategier for å begrense resistensutvikling`,
    },
    {
      id: 'hov2-7-5-def-1',
      type: 'definition',
      title: 'Antibiotikaresistens',
      content: `**Antibiotikaresistens** oppstår når bakterier utvikler motstandskraft mot antibiotika som tidligere drepte dem eller hemmet veksten deres. Resistens utvikles naturlig over tid, men overforbruk og feil bruk av antibiotika akselererer prosessen dramatisk. Resistente bakterier kan overføre resistensgener til andre bakterier, noe som gjør problemet enda større.`,
    },
    {
      id: 'hov2-7-5-text-1',
      type: 'text',
      content: `### Hvordan resistens oppstår

**Naturlig utvalg:**
1. En bakteriepopulasjon utsettes for antibiotika
2. De fleste bakteriene dør, men noen få har genetiske endringer som gjør dem motstandsdyktige
3. De resistente bakteriene overlever og formerer seg
4. Over tid dominerer de resistente bakteriene

**Faktorer som driver resistensutvikling:**
- Overforbruk av antibiotika i helsevesenet
- Unødvendig forskrivning (f.eks. ved virusinfeksjoner)
- Pasienter som ikke fullfører antibiotikakurer
- Bruk av antibiotika i husdyrhold
- Dårlig smittevern som sprer resistente bakterier
- Reisevirksomhet som sprer resistens mellom land

### Viktige resistente bakterier

**MRSA (meticillinresistente Staphylococcus aureus):**
- Gullstafylokokker som er resistente mot vanlige antibiotika
- Kan gi hud- og sårinfeksjoner, lungebetennelse og blodforgiftning
- Spres hovedsakelig via kontaktsmitte (hender)
- Kontaktisolering og strengt smittevern
- Kan bæres uten å gi sykdom (bærerskap)

**VRE (vankomycinresistente enterokokker):**
- Tarmbakterier resistente mot vankomycin
- Vanlig hos pasienter med langvarig antibiotikabehandling
- Spres via kontaktsmitte
- Kontaktisolering

**ESBL-produserende bakterier:**
- Tarmbakterier som produserer enzymer som bryter ned vanlige antibiotika
- Økende problem globalt
- Spres via kontakt- og fekal-oral smitte
- Ofte knyttet til urinveisinfeksjoner`,
    },
    {
      id: 'hov2-7-5-def-2',
      type: 'definition',
      title: 'Helsetjenesteassosierte infeksjoner',
      content: `**Helsetjenesteassosierte infeksjoner (HAI)** er infeksjoner som oppstår i forbindelse med opphold i helseinstitusjon, og som ikke var til stede ved innleggelse. De vanligste er urinveisinfeksjoner, postoperative sårinfeksjoner, nedre luftveisinfeksjoner og blodbaneinfeksjoner. HAI forlenger sykehusoppholdet, øker lidelse og kostnader, og kan i verste fall være dødelig.`,
    },
    {
      id: 'hov2-7-5-text-2',
      type: 'text',
      content: `### Vanlige infeksjoner i helsetjenesten

**Norovirus (omgangssyke):**
- Svært smittsom virus som gir oppkast og diaré
- Spres via kontakt- og fekal-oral smitte
- Kan overleve lenge på overflater
- Alkoholbasert hånddesinfeksjon er ikke tilstrekkelig – bruk såpe og vann
- Syke ansatte skal holde seg hjemme i 48 timer etter symptomfrihet
- Utbrudd kan ramme hele avdelinger og sykehjem

**Urinveisinfeksjoner:**
- Vanligste HAI, ofte knyttet til urinveiskateter
- Forebygging: Minimer bruk av kateter, aseptisk innlegging, god hygiene
- Symptomer: Svie, hyppig vannlating, uklar urin, feber

**Influensa:**
- Sesonginfeksjon som kan ha alvorlig forløp hos eldre og immunsvekkede
- Spres via dråpesmitte
- Forebygging: Vaksinasjon av helsepersonell og risikogrupper
- Dråpeisolering ved påvist smitte

**Clostridioides difficile:**
- Tarmbakterie som kan gi alvorlig diaré
- Oppstår ofte etter antibiotikabehandling
- Sporedannende – overlever alkoholdesinfeksjon
- Krever håndvask med såpe og vann
- Kontaktisolering med eget toalett`,
    },
    {
      id: 'hov2-7-5-text-3',
      type: 'text',
      content: `### Strategier for å begrense antibiotikaresistens

**I helsetjenesten:**
- Følge nasjonale retningslinjer for antibiotikabruk
- Kun bruke antibiotika når det er indisert (bakteriell infeksjon)
- Velge smalspektrede antibiotika når mulig
- Fullføre hele antibiotikakuren
- God håndhygiene og smittevern for å hindre spredning
- Screening av risikopasienter for resistente bakterier

**Som helsefagarbeider kan du bidra ved å:**
- Følge basale smittevernrutiner nøye
- Utføre korrekt håndhygiene mellom hver pasient
- Observere og rapportere tegn på infeksjon tidlig
- Aldri presse lege til å skrive ut antibiotika
- Informere pasienter om riktig bruk av antibiotika
- Melde fra om avvik i smittevernrutiner

**Nasjonale tiltak i Norge:**
- Handlingsplan mot antibiotikaresistens
- Mål om 30 % reduksjon i antibiotikabruk
- NORM (Norsk overvåkingssystem for antibiotikaresistens)
- Obligatorisk rapportering av resistente bakterier
- Strenge regler for antibiotika i husdyrhold`,
    },
    {
      id: 'hov2-7-5-example-1',
      type: 'example',
      title: 'Eksempel: Norovirus-utbrudd på sykehjem',
      content: `**Situasjon**: Tre beboere på avdelingen din har fått oppkast og diaré. Det mistenkes norovirus.

**Tiltak ved utbrudd:**
1. **Isolering**: Berørte beboere isoleres på egne rom med eget toalett
2. **Håndhygiene**: Håndvask med såpe og vann – alkohol virker dårlig mot norovirus
3. **Verneutstyr**: Hansker og frakk ved all kontakt med syke
4. **Renhold**: Grundig rengjøring med klorbaserte midler av alle overflater
5. **Kohortering**: Personalet som steller syke beboere, steller ikke friske
6. **Besøkskontroll**: Begrens besøk til avdelingen
7. **Ansatte**: Syke ansatte skal ikke komme på jobb før 48 timer etter siste symptom
8. **Dokumentasjon**: Registrer alle tilfeller med tid for symptomstart
9. **Meldeplikt**: Varsle kommuneoverlegen ved utbrudd

**Viktig**: Norovirus er ekstremt smittsomt – det trengs bare noen få viruspartikler for å bli syk. Streng hygiene er avgjørende for å begrense utbruddet.`,
    },
    {
      id: 'hov2-7-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-5-ex-1',
        number: '7.5.1',
        type: 'multiple-choice',
        task: 'Hva er MRSA?',
        options: [
          { id: 'a', text: 'Et virus som gir diaré', isCorrect: false },
          { id: 'b', text: 'En gullstafylokokk som er resistent mot vanlige antibiotika', isCorrect: true },
          { id: 'c', text: 'En sopp som gir hudinfeksjon', isCorrect: false },
          { id: 'd', text: 'En parasitt som overføres via mat', isCorrect: false },
        ],
        solution: 'MRSA står for meticillinresistente Staphylococcus aureus. Det er gullstafylokokker som har utviklet motstandskraft mot mange vanlige antibiotika. MRSA kan gi alt fra hudinfeksjoner til alvorlige infeksjoner som blodforgiftning, og spres hovedsakelig via kontaktsmitte.',
      },
    },
    {
      id: 'hov2-7-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-5-ex-2',
        number: '7.5.2',
        type: 'classic',
        task: 'Forklar hvordan antibiotikaresistens utvikles og hva som driver denne utviklingen.',
        solution: 'Antibiotikaresistens utvikles gjennom naturlig utvalg: Når bakterier utsettes for antibiotika, dør de fleste, men noen få med genetiske endringer overlever og formerer seg. Over tid dominerer de resistente bakteriene. Denne prosessen drives av: overforbruk av antibiotika i helsevesenet, unødvendig forskrivning (f.eks. ved virusinfeksjoner), pasienter som ikke fullfører kurer, bruk av antibiotika i husdyrhold, og dårlig smittevern som sprer resistente bakterier.',
      },
    },
    {
      id: 'hov2-7-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-5-ex-3',
        number: '7.5.3',
        type: 'multiple-choice',
        task: 'Hvorfor er håndvask med såpe og vann viktigere enn alkoholbasert desinfeksjon ved norovirus?',
        options: [
          { id: 'a', text: 'Fordi norovirus er et stort virus', isCorrect: false },
          { id: 'b', text: 'Fordi alkoholbasert desinfeksjon ikke er effektivt mot norovirus', isCorrect: true },
          { id: 'c', text: 'Fordi håndvask er billigere', isCorrect: false },
          { id: 'd', text: 'Fordi norovirus kun smitter via hendene', isCorrect: false },
        ],
        solution: 'Norovirus er et ikke-kappekledd virus som er motstandsdyktig mot alkoholbasert hånddesinfeksjon. Håndvask med såpe og vann fjerner viruset fysisk fra hendene og er derfor det foretrukne tiltaket. Det samme gjelder for Clostridioides difficile-sporer.',
      },
    },
    {
      id: 'hov2-7-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-5-ex-4',
        number: '7.5.4',
        type: 'classic',
        task: 'Beskriv fire tiltak helsefagarbeidere kan gjøre for å bidra til å begrense antibiotikaresistens.',
        solution: '1) Følge basale smittevernrutiner nøye – god håndhygiene mellom hver pasient hindrer spredning av resistente bakterier. 2) Observere og rapportere tegn på infeksjon tidlig – slik at riktig behandling kan startes. 3) Informere pasienter om at antibiotika ikke virker mot virus, og at kuren alltid må fullføres. 4) Melde fra om avvik i smittevernrutiner slik at rutinene kan forbedres.',
      },
    },
    {
      id: 'hov2-7-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-5-ex-5',
        number: '7.5.5',
        type: 'classic',
        task: 'Det oppstår et utbrudd av norovirus på sykehjemmet der du jobber. Beskriv de viktigste tiltakene du iverksetter.',
        solution: 'Viktige tiltak: 1) Isolere syke beboere på egne rom med eget toalett. 2) Bruke håndvask med såpe og vann (ikke alkoholdesinfeksjon). 3) Ta på hansker og beskyttelsesfrakk ved kontakt med syke. 4) Kohorte personalet – de som steller syke skal ikke ha kontakt med friske beboere. 5) Grundig rengjøring av alle overflater med klorbaserte midler. 6) Begrense besøk til avdelingen. 7) Syke ansatte holder seg hjemme i minst 48 timer etter siste symptom. 8) Registrere og rapportere alle tilfeller til kommuneoverlegen.',
      },
    },
    {
      id: 'hov2-7-5-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Antibiotikaresistens** oppstår ved overforbruk og feil bruk av antibiotika
- **MRSA, VRE og ESBL** er viktige resistente bakterier i helsetjenesten
- **Norovirus og C. difficile** krever spesielle smitteverntiltak
- **Forebygging** krever innsats fra alle nivåer – fra helsefagarbeideren til nasjonale myndigheter

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Antibiotikaresistens | Bakterier som har blitt motstandsdyktige mot antibiotika |
| MRSA | Gullstafylokokker resistente mot vanlige antibiotika |
| Norovirus | Svært smittsomt virus som gir oppkast og diaré |
| HAI | Helsetjenesteassosierte infeksjoner |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Antibiotikaresistens', definition: 'Bakterier som har utviklet motstandskraft mot antibiotika' },
    { term: 'MRSA', definition: 'Meticillinresistente Staphylococcus aureus – gullstafylokokker resistente mot vanlige antibiotika' },
    { term: 'Norovirus', definition: 'Svært smittsomt virus som gir omgangssyke med oppkast og diaré' },
    { term: 'HAI', definition: 'Helsetjenesteassosierte infeksjoner – infeksjoner som oppstår under opphold i helseinstitusjon' },
    { term: 'ESBL', definition: 'Bakterier som produserer enzymer som bryter ned vanlige antibiotika' },
  ],
};

// ============================================================================
// Kapittel 7.6: Mattrygghet og næringsmiddelhygiene
// ============================================================================

export const CHAPTER_HOV2_7_6: TextbookChapter = {
  id: 'hov2-7-6',
  courseId: 'helseoppvekst-vg2',
  chapterNumber: '7.6',
  title: 'Mattrygghet og næringsmiddelhygiene',
  description: 'Grunnleggende næringsmiddelhygiene, temperaturstyring ved oppbevaring og tilberedning, håndtering av allergener, og forebygging av matbårne sykdommer.',
  estimatedMinutes: 45,
  competenceGoals: [
    'sikre mattrygghet og næringsmiddelhygiene',
  ],
  content: [
    {
      id: 'hov2-7-6-intro',
      type: 'text',
      content: `## Trygg mat i helsetjenesten

Mattrygghet er avgjørende i helseinstitusjoner der beboere og pasienter ofte har nedsatt immunforsvar. Feil håndtering av mat kan føre til alvorlige matbårne sykdommer. Som helsefagarbeider må du kjenne til grunnleggende prinsipper for næringsmiddelhygiene.

I dette kapittelet lærer du:
- Prinsipper for næringsmiddelhygiene
- Temperaturstyring og oppbevaring
- Håndtering av allergener
- Vanlige matbårne sykdommer`,
    },
    {
      id: 'hov2-7-6-def-1',
      type: 'definition',
      title: 'Næringsmiddelhygiene',
      content: `**Næringsmiddelhygiene** er alle tiltak og betingelser som er nødvendige for å sikre at mat er trygg å spise gjennom hele produksjons- og distribusjonskjeden. Det handler om å forebygge at mat forurenses av bakterier, virus, parasitter, kjemikalier eller fremmedlegemer. I helseinstitusjoner reguleres dette av **IK-mat-forskriften** (internkontrollforskriften for næringsmidler).`,
    },
    {
      id: 'hov2-7-6-text-1',
      type: 'text',
      content: `### Grunnprinsipper for næringsmiddelhygiene

**Personlig hygiene:**
- Grundig håndvask før matlaging og matservering
- Rent arbeidstøy og forkle
- Dekke sår og kutt på hendene med plaster og hansker
- Langt hår samles under hette eller hårnett
- Ikke arbeide med mat ved sykdom (diaré, oppkast, hudinfeksjoner)

**Renhold i kjøkken:**
- Rengjøring av arbeidsflater, utstyr og redskaper mellom bruk
- Separate skjærebrett for rå og ferdig mat
- Oppvaskmaskiner med høy temperatur (minst 80 °C i skyllevannet)
- Regelmessig rengjøring av kjøleskap og fryser
- Kontroll av sluk og avløp

**Kryssforurensning:**
- Hold rå og ferdig mat adskilt
- Bruk separate redskaper for rå og kokt mat
- Vask hendene mellom håndtering av rått kjøtt og andre matvarer
- Oppbevar rått kjøtt under ferdig mat i kjøleskapet
- Aldri bruk marinade fra rått kjøtt uten oppvarming`,
    },
    {
      id: 'hov2-7-6-def-2',
      type: 'definition',
      title: 'Faresonen',
      content: `**Faresonen** er temperaturområdet mellom 5 °C og 65 °C der bakterier kan vokse raskt i matvarer. Innenfor dette området kan bakterietallet dobles hvert 20. minutt under gunstige forhold. Mat bør oppbevares enten under 5 °C (kjøling) eller over 65 °C (varmt), og maten bør tilbringe minst mulig tid i faresonen.`,
    },
    {
      id: 'hov2-7-6-text-2',
      type: 'text',
      content: `### Temperaturstyring

**Kjøling:**
- Kjøleskap: 0-4 °C
- Kontroller temperaturen daglig
- Plasser matvarer riktig i kjøleskapet
- Kjøl ned varm mat raskt – innen 2 timer til under 8 °C

**Frysing:**
- Fryser: -18 °C eller kaldere
- Tining skal skje i kjøleskap, ikke ved romtemperatur
- Fryst mat som er tint, skal ikke fryses igjen
- Merk all mat med dato for innfrysing

**Tilberedning:**
- Kjøtt og fjærkre skal gjennomstekes til minst 75 °C i kjernetemperatur
- Gjenoppvarming til minst 75 °C i kjernetemperatur
- Bruk mattermometer for å kontrollere temperaturen
- Matrester som ikke er avkjølt innen 2 timer, skal kastes

**Servering:**
- Varm mat holdes over 65 °C
- Kald mat holdes under 5 °C
- Mat som har stått fremme mer enn 2 timer i romtemperatur, kastes
- Bruk riktige serveringsbeholdere med temperaturkontroll

### Holdbarhet og merking

**Siste forbruksdag («Siste forbruksdag»):**
- Finnes på lett bedervelige varer (kjøtt, fisk, ferske meieriprodukter)
- Mat skal ikke brukes etter denne datoen
- Viktig for mattrygghet

**Best før-dato («Best før»):**
- Finnes på mer holdbare varer
- Kvaliteten kan reduseres etter datoen, men maten kan fortsatt være trygg
- Bruk sansene: se, lukt og smak`,
    },
    {
      id: 'hov2-7-6-text-3',
      type: 'text',
      content: `### Allergener og matintoleranse

**De 14 deklarasjonspliktige allergenene i EU/EØS:**
- Gluten (hvete, rug, bygg, havre)
- Melk (laktose og melkeprotein)
- Egg
- Fisk
- Skalldyr
- Nøtter (mandler, hasselnøtter, valnøtter m.fl.)
- Peanøtter
- Soya
- Selleri
- Sennep
- Sesam
- Sulfitter
- Lupin
- Bløtdyr

**Viktige tiltak:**
- All mat i institusjoner skal merkes med allergener
- Personalet skal kjenne til ingrediensene i maten
- Ha rutiner for å forebygge kryssforurensning
- Alvorlige allergier kan gi anafylaktisk sjokk – livstruende!
- Dokumenter allergier og intoleranser i pasientjournalen

### Vanlige matbårne sykdommer

**Salmonellose:**
- Forårsaket av Salmonella-bakterier
- Smittekilde: Rått fjærkre, egg, upasteurisert melk
- Symptomer: Diaré, magesmerter, feber etter 6-72 timer
- Forebygging: Gjennomsteking, god hygiene

**Campylobakteriose:**
- Vanligste matbårne sykdommen i Norge
- Smittekilde: Kylling, forurenset vann
- Symptomer: Blodig diaré, magesmerter, feber
- Forebygging: Gjennomsteke kylling, unngå kryssforurensning

**Listeriose:**
- Forårsaket av Listeria monocytogenes
- Smittekilde: Upasteurisert ost, røkt fisk, spekemat
- Særlig farlig for gravide, eldre og immunsvekkede
- Forebygging: Unngå risikoprodukter for risikogrupper

**Stafylokokkforgiftning:**
- Toksin produsert av gullstafylokokker
- Smittekilde: Mat som har stått for lenge i romtemperatur
- Rask innsettende kvalme og oppkast (1-6 timer)
- Forebygging: Korrekt temperaturhåndtering`,
    },
    {
      id: 'hov2-7-6-tip-1',
      type: 'tip',
      title: 'HACCP-prinsippene',
      content: `**HACCP** (Hazard Analysis and Critical Control Points) er et systematisk verktøy for å sikre mattrygghet. Det innebærer å identifisere farer, bestemme kritiske kontrollpunkter (f.eks. temperatur ved tilberedning), sette grenseverdier, overvåke og dokumentere. I helseinstitusjoner brukes HACCP-prinsippene som grunnlag for internkontrollen i kjøkkenet.`,
    },
    {
      id: 'hov2-7-6-example-1',
      type: 'example',
      title: 'Eksempel: Matservering på sykehjem',
      content: `**Situasjon**: Du skal servere middag til beboerne og mottar ferdig tilberedt mat fra sentralkjøkkenet.

**Fremgangsmåte for trygg matservering:**
1. **Personlig hygiene**: Vask hendene grundig og ta på rent forkle
2. **Mottakskontroll**: Sjekk at varm mat har kjernetemperatur over 65 °C
3. **Allergenhensyn**: Kontroller at spesialkost er riktig merket og fordelt
4. **Servering**: Hold varm mat over 65 °C i varmeskap frem til servering
5. **Dokumentasjon**: Noter temperatur ved mottak i HACCP-skjema
6. **Rester**: Mat som har stått fremme i mer enn 2 timer, kastes
7. **Renhold**: Rydd og rengjør serveringsområdet etter måltidet

**Spesielle hensyn:**
- Sjekk at Martha (glutenallergi) får sin glutenfrie porsjon
- Sjekk at Ahmed (halal) ikke får svin
- Kontroller at Per (dysfagi) får findelt mat
- Dokumenter at alle beboere har fått riktig kost

**Viktig**: Avvik fra temperaturkrav eller allergenrutiner skal meldes som avvik i kvalitetssystemet.`,
    },
    {
      id: 'hov2-7-6-ex-1',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-6-ex-1',
        number: '7.6.1',
        type: 'multiple-choice',
        task: 'Hva er «faresonen» for bakterievekst i mat?',
        options: [
          { id: 'a', text: '0-10 °C', isCorrect: false },
          { id: 'b', text: '5-65 °C', isCorrect: true },
          { id: 'c', text: '20-40 °C', isCorrect: false },
          { id: 'd', text: '65-100 °C', isCorrect: false },
        ],
        solution: 'Faresonen for bakterievekst er mellom 5 og 65 °C. I dette temperaturområdet kan bakterier formere seg raskt. Mat bør derfor oppbevares enten kald (under 5 °C) eller varm (over 65 °C), og maten bør tilbringe minst mulig tid i faresonen.',
      },
    },
    {
      id: 'hov2-7-6-ex-2',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-6-ex-2',
        number: '7.6.2',
        type: 'classic',
        task: 'Forklar forskjellen mellom «siste forbruksdag» og «best før»-dato, og hvorfor dette er viktig i helseinstitusjoner.',
        solution: '«Siste forbruksdag» finnes på lett bedervelige varer og angir siste dag maten er trygg å spise – den skal ikke brukes etter denne datoen. «Best før»-dato finnes på mer holdbare varer og angir at kvaliteten kan reduseres etter datoen, men maten kan fortsatt være trygg. I helseinstitusjoner er dette særlig viktig fordi beboerne ofte har nedsatt immunforsvar og er mer utsatt for matbårne sykdommer. Streng overholdelse av siste forbruksdag er derfor avgjørende for matsikkerheten.',
      },
    },
    {
      id: 'hov2-7-6-ex-3',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-6-ex-3',
        number: '7.6.3',
        type: 'multiple-choice',
        task: 'Hva er den vanligste matbårne sykdommen i Norge?',
        options: [
          { id: 'a', text: 'Salmonellose', isCorrect: false },
          { id: 'b', text: 'Listeriose', isCorrect: false },
          { id: 'c', text: 'Campylobakteriose', isCorrect: true },
          { id: 'd', text: 'Stafylokokkforgiftning', isCorrect: false },
        ],
        solution: 'Campylobakteriose er den vanligste matbårne sykdommen i Norge. Den forårsakes oftest av dårlig gjennomstekt kylling eller kryssforurensning fra rå kylling til annen mat. Symptomene inkluderer blodig diaré, magesmerter og feber.',
      },
    },
    {
      id: 'hov2-7-6-ex-4',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-6-ex-4',
        number: '7.6.4',
        type: 'classic',
        task: 'Beskriv tre viktige tiltak for å forebygge kryssforurensning i matlaging.',
        solution: '1) Hold rå og ferdig mat adskilt – bruk separate skjærebrett og redskaper for rå og kokt mat. 2) Vask hendene grundig mellom håndtering av rått kjøtt og andre matvarer for å hindre overføring av bakterier. 3) Oppbevar rått kjøtt under ferdig mat i kjøleskapet slik at væske fra rått kjøtt ikke kan dryppe ned på annen mat. Andre tiltak er å aldri bruke marinade fra rått kjøtt uten oppvarming og å rengjøre arbeidsflater mellom ulike oppgaver.',
      },
    },
    {
      id: 'hov2-7-6-ex-5',
      type: 'exercise',
      exercise: {
        id: 'hov2-7-6-ex-5',
        number: '7.6.5',
        type: 'classic',
        task: 'En beboer på sykehjemmet har nøtteallergi. Beskriv hvilke hensyn du må ta ved matservering og forklar konsekvensene av å ikke ta disse hensynene.',
        solution: 'Hensyn: Kontroller alle ingredienser i maten for nøtter og spor av nøtter. Bruk separate redskaper og utstyr for å unngå kryssforurensning. Merk beboerens plass og tallerken tydelig. Sjekk merking på alle ferdigprodukter. Informer kolleger om allergien. Dokumenter allergien i journalen og kostoversikten. Konsekvenser av manglende hensyn: Nøtteallergi kan gi anafylaktisk sjokk – en livstruende allergisk reaksjon med pustebesvær, blodtrykksfall og bevisstløshet. Uten rask behandling med adrenalin kan det være dødelig.',
      },
    },
    {
      id: 'hov2-7-6-summary',
      type: 'text',
      content: `## Oppsummering

I dette kapittelet har du lært:

- **Næringsmiddelhygiene** forebygger matbårne sykdommer gjennom personlig hygiene, renhold og riktig håndtering
- **Temperaturstyring** holder mat utenfor faresonen (5-65 °C)
- **Allergenhåndtering** er livsviktig – 14 allergener er deklarasjonspliktige
- **Matbårne sykdommer** forebygges gjennom god hygiene og korrekt temperaturhåndtering

### Nøkkelbegreper
| Begrep | Forklaring |
|--------|------------|
| Næringsmiddelhygiene | Tiltak for å sikre at mat er trygg å spise |
| Faresonen | Temperaturområdet 5-65 °C der bakterier vokser raskt |
| Kryssforurensning | Overføring av smittestoffer mellom matvarer |
| HACCP | Systematisk verktøy for å sikre mattrygghet |`,
    },
  ],
  exercises: [],
  keyTerms: [
    { term: 'Næringsmiddelhygiene', definition: 'Tiltak og betingelser for å sikre at mat er trygg gjennom hele kjeden' },
    { term: 'Faresonen', definition: 'Temperaturområdet 5-65 °C der bakterier kan vokse raskt i mat' },
    { term: 'Kryssforurensning', definition: 'Overføring av bakterier eller allergener mellom ulike matvarer eller overflater' },
    { term: 'HACCP', definition: 'Hazard Analysis and Critical Control Points – systematisk verktøy for mattrygghet' },
    { term: 'Anafylaktisk sjokk', definition: 'Livstruende allergisk reaksjon som krever umiddelbar behandling med adrenalin' },
  ],
};

// ============================================================================
// Eksport
// ============================================================================

export const HELSEOPPVEKST_VG2_DEL7_CHAPTERS = [
  CHAPTER_HOV2_7_1,
  CHAPTER_HOV2_7_2,
  CHAPTER_HOV2_7_3,
  CHAPTER_HOV2_7_4,
  CHAPTER_HOV2_7_5,
  CHAPTER_HOV2_7_6,
];
