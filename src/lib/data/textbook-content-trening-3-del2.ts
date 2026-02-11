/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Treningslaere 3 (VG3) – Seksjon 2: Alderstilpasset trening
 * Kapittel 2.1–2.5
 * Foelger LK20 laereplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Barns utvikling og trening
// ============================================================================

export const CHAPTER_TRENING_3_2_1: TextbookChapter = {
  id: 'trening-3-2-1',
  courseId: 'trening-3',
  chapterNumber: '2.1',
  title: 'Barns utvikling og trening',
  description: 'Laer om motorisk utvikling hos barn, sensitive perioder for laering av motoriske ferdigheter, og prinsipper for alderstilpasset barnetrening.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forstaa hovedtrekkene i motorisk utvikling hos barn',
    'kunne forklare hva sensitive perioder er og hvorfor de er viktige',
    'kjenne til prinsipper for god barnetrening',
  ],
  content: [
    {
      id: 'tr3-2-1-intro',
      type: 'text',
      content: `# Barns utvikling og trening

Barn er ikke miniatyrvoksne. De har en kropp som er i stadig vekst og utvikling, og dette pavirker hvordan de responderer pa fysisk aktivitet og trening. For a kunne tilrettelegge god trening for barn, ma vi forstaa de biologiske og motoriske utviklingsprosessene som preger barndommen.

Barns motoriske utvikling folger et relativt forutsigbart monster, men tempoet varierer betydelig fra barn til barn. Noen barn laerer a ga ved 9 maneders alder, andre ved 15 maneder, og begge deler er helt normalt. Det som er felles er at alle barn gar gjennom de samme utviklingsfasene, bare i ulikt tempo.

I treningslaere er det avgjorende a forstaa at barns treningsbehov og treningsrespons er fundamentalt forskjellig fra voksnes. Trening for barn ma vaere lekbasert, allsidig og tilpasset barnets utviklingsniva. Feil tilnaerming kan i verste fall hemme utviklingen eller fore til skader.`,
    },
    {
      id: 'tr3-2-1-def1',
      type: 'definition',
      title: 'Motorisk utvikling',
      content: 'Motorisk utvikling er prosessen der barn gradvis tilegner seg evnen til a kontrollere kroppsbevegelser. Den folger to hovedprinsipper: cephalokaudalt (fra hode til fot) og proksimodistalt (fra kroppens sentrum til ytterkantene). Forst kontrollerer barnet hodebevegelser, deretter overkropp, sa armer og bein, og til slutt fingre og taer.',
    },
    {
      id: 'tr3-2-1-text1',
      type: 'text',
      title: 'Faser i motorisk utvikling',
      content: `Motorisk utvikling deles gjerne inn i fire hovedfaser:

**1. Refleksfasen (0-1 ar)**
- Bevegelser styres av medfodte reflekser
- Griperefleks, sugerefleks, Moro-refleks
- Refleksene erstattes gradvis av viljestyrte bevegelser
- Barnet laerer a rulle, sitte og sta

**2. Rudimentaer fase (1-2 ar)**
- De forste viljestyrte bevegelsene utvikles
- Barnet laerer a ga, klatre og gripe gjenstander
- Bevegelsene er enna umodne og upresis
- Balanse og koordinasjon forbedres gradvis

**3. Grunnleggende bevegelser (2-7 ar)**
- Utvikling av fundamentale bevegelsesmoenstre: loping, hopping, kasting, sparking, klatring
- Bevegelsene gar fra umodne til modne former
- Allsidig bevegelseserfaring er avgjorende i denne fasen
- Barn som ikke far nok bevegelseserfaring, kan fa forsinket utvikling

**4. Spesialisert bevegelsesfase (7 ar og oppover)**
- Grunnleggende bevegelser kombineres og forfines
- Bevegelsene tilpasses spesifikke idretter og aktiviteter
- Ferdigheter automatiseres gjennom ovelse
- Tidlig spesialisering bor unngaas til fordel for allsidighet`,
    },
    {
      id: 'tr3-2-1-def2',
      type: 'definition',
      title: 'Sensitive perioder',
      content: 'Sensitive perioder (ogsa kalt vindu for optimal trening) er tidsrom i barns utvikling der kroppen og nervesystemet er spesielt mottakelige for visse typer stimuli. I disse periodene er laeringen raskere og mer effektiv enn pa andre tidspunkter. Eksempler inkluderer en sensitiv periode for balanse og koordinasjon rundt 6-10 ar, og en sensitiv periode for hurtighet rundt 7-12 ar.',
    },
    {
      id: 'tr3-2-1-text2',
      type: 'text',
      title: 'Sensitive perioder og treningsegenskaper',
      content: `Forskning har identifisert flere sensitive perioder for utvikling av ulike fysiske egenskaper hos barn:

**Koordinasjon og balanse (6-10 ar)**
- Nervesystemet er svart mottakelig for nye bevegelseserfaringer
- Perfekt tid for a laere sykkel, skoyter, turn, dans og ballspill
- Jo flere bevegelseserfaringer, jo bedre motorisk grunnlag

**Hurtighet og reaksjonstid (7-12 ar)**
- Nervesystemet utvikler raske signalbaner
- Leker og spill med raske retningsforandringer, reaksjoner og akselerasjon
- Grunnlaget for eksplosivitet legges i denne perioden

**Utholdenhet (aerob kapasitet) (10-14 ar)**
- Hjertet og lungene vokser raskt
- Barn taler godt utholdende aktivitet med moderat intensitet
- Allsidig aerob aktivitet anbefales fremfor lang, monoton loping

**Styrke (etter puberteten)**
- For puberteten: styrketrening gir forbedret nevromuskulaer kontroll, men liten muskelvekst
- Etter puberteten: hormoner (spesielt testosteron) muliggjor reell muskelvekst
- Barn kan trene styrke med egenkroppsvekt og lav belastning fra ca. 7-8 ar

**Bevegelighet (hele barndommen)**
- Barn er naturlig mer bevegelige enn voksne
- Bevegelighet bor vedlikeholdes gjennom allsidig aktivitet
- Statisk toying er mindre viktig for barn enn for voksne`,
    },
    {
      id: 'tr3-2-1-note1',
      type: 'note',
      title: 'Tidlig spesialisering',
      content: 'Tidlig spesialisering betyr at et barn fokuserer pa kun en idrett fra ung alder (for 12 ar). Forskning viser at dette oker risikoen for belastningsskader, utbrenthet og frafall fra idretten. Unntaket er idretter som krever tidlig teknisk laering, som turn og kunstlop. For de fleste idretter anbefales allsidighet frem til 12-14 ar, etterfulgt av gradvis spesialisering.',
    },
    {
      id: 'tr3-2-1-example1',
      type: 'example',
      title: 'Alderstilpasset treningsplan for 8-aringer',
      problem: 'Lag et eksempel pa en treningstime for en gruppe 8-aringer i et fleridrettsmiljo.',
      solution: `**Treningstime for 8-aringer (60 minutter):**

**Oppvarming med lek (10 min)**
- Fangeleker med ulike varianter (sisten, boksen, frysesisten)
- Hensikt: heve pulsen, jobbe med hurtighet og retningsforandringer

**Koordinasjonsovelser (15 min)**
- Hinderloype med klatring, krabbegange, rulling og hopping
- Balansering pa benker og bommer
- Hensikt: utnytte den sensitive perioden for koordinasjon og balanse

**Ferdighetslaering gjennom lek (20 min)**
- Ballspill med forenklete regler (kaste, gripe, sparke)
- Stafetter med ulike bevegelsesmoenstre
- Hensikt: utvikle grunnleggende bevegelsesferdigheter i en lekbasert kontekst

**Styrke og stabilitet (10 min)**
- Dyrebevegelser: krabbe, bjorn, frosk, kanin
- Tautrekking, slasskamp pa knarne
- Hensikt: bygge grunnleggende styrke med egenkroppsvekt

**Avspenning og oppsummering (5 min)**
- Rolig strekking og pusteovelser
- Positiv tilbakemelding og motivasjon

Noekkelen er at alt er lekbasert, allsidig og gir mestringsfoleolse.`,
    },
    {
      id: 'tr3-2-1-text3',
      type: 'text',
      title: 'Prinsipper for barnetrening',
      content: `God barnetrening bygger pa folgende prinsipper:

**1. Allsidighet fremfor spesialisering**
- Barn bor prove mange ulike idretter og aktiviteter
- Et bredt motorisk grunnlag gir bedre forutsetninger for senere spesialisering
- Anbefalt: minst 60 minutter variert fysisk aktivitet daglig

**2. Lek og mestring fremfor konkurranse**
- Barn laerer best gjennom lek og positiv forsterkning
- Mestringsopplevelser bygger motivasjon og selvtillit
- Overdreven konkurransefokus kan fore til press og frafall

**3. Prosess fremfor resultat**
- Fokus pa innsats, forbedring og glede, ikke resultater og seire
- Ros innsats, ikke bare talent
- Alle barn skal fole seg inkludert og verdsatt

**4. Gradvis progresjon**
- Ovelser og belastning tilpasses barnets utviklingsniva
- Aldri press et barn til a gjore noe det ikke er klart for
- Kroppen ma fa tid til a tilpasse seg

**5. Trygghet og trivsel**
- Trygge rammer, bade fysisk og psykisk
- Gode relasjoner mellom trener og barn
- Nulltoleranse for mobbing og utestenging`,
    },
    {
      id: 'tr3-2-1-tip1',
      type: 'tip',
      title: 'Fysisk aktivitetsanbefaling for barn',
      content: 'Helsedirektoratet anbefaler at barn og unge er i fysisk aktivitet i minst 60 minutter daglig. Aktiviteten bor vaere variert og inkludere bade moderat og hoy intensitet. I tillegg anbefales aktiviteter som styrker muskler og skjelett minst tre ganger i uken.',
    },
    {
      id: 'tr3-2-1-ex-block1',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-1-ex1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva menes med sensitive perioder i barns utvikling?',
        options: [
          { id: 'a', text: 'Perioder der barn er spesielt saarbare for skader', isCorrect: false },
          { id: 'b', text: 'Tidsrom der kroppen er spesielt mottakelig for visse typer stimuli og laering', isCorrect: true },
          { id: 'c', text: 'Perioder der barn ikke bor trene', isCorrect: false },
          { id: 'd', text: 'Perioder med spesielt rask hoydevekst', isCorrect: false },
        ],
        hints: ['Tenk pa det som vinduer der laering er spesielt effektiv.'],
        solution: 'Sensitive perioder er tidsrom i barns utvikling der kroppen og nervesystemet er spesielt mottakelige for visse typer stimuli. Laering av bestemte ferdigheter gar raskere og mer effektivt i disse periodene.',
      },
    },
    {
      id: 'tr3-2-1-ex-block2',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-1-ex2',
        number: '2',
        type: 'multiple-choice',
        task: 'I hvilken aldersperiode er den sensitive perioden for koordinasjon og balanse?',
        options: [
          { id: 'a', text: '0-3 ar', isCorrect: false },
          { id: 'b', text: '6-10 ar', isCorrect: true },
          { id: 'c', text: '14-18 ar', isCorrect: false },
          { id: 'd', text: '18-25 ar', isCorrect: false },
        ],
        solution: 'Den sensitive perioden for koordinasjon og balanse er rundt 6-10 ar. I denne perioden er nervesystemet spesielt mottakelig for nye bevegelseserfaringer, og allsidige aktiviteter gir stor effekt.',
      },
    },
    {
      id: 'tr3-2-1-ex-block3',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Forklar de to hovedprinsippene i motorisk utvikling: cephalokaudal og proksimodistal utvikling.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva betyr cephalokaudal utvikling?',
            solution: 'Cephalokaudal utvikling betyr at motorisk kontroll utvikles fra hodet og nedover mot foettene. Barnet kontrollerer forst hodebevegelser, deretter overkropp, sa bein og til slutt foetter.',
            multipleChoiceOptions: [
              'Utvikling fra hode til fot',
              'Utvikling fra fot til hode',
              'Utvikling fra sentrum til ytterkant',
              'Utvikling fra ytterkant til sentrum',
            ],
          },
          {
            label: 'b',
            task: 'Hva betyr proksimodistal utvikling, og gi et eksempel.',
            solution: 'Proksimodistal utvikling betyr at motorisk kontroll utvikles fra kroppens sentrum og utover mot ytterkantene. Eksempel: Et barn laerer forst a kontrollere skulderbevegelser, deretter albuen, sa handleddet, og til slutt finmotorikk i fingrene.',
          },
        ],
        solution: 'Cephalokaudal utvikling gar fra hode til fot, mens proksimodistal utvikling gar fra sentrum til ytterkant. Disse to prinsippene forklarer rekkefolgen barns motoriske kontroll utvikler seg i.',
      },
    },
    {
      id: 'tr3-2-1-ex-block4',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-1-ex4',
        number: '4',
        type: 'classic',
        task: 'Diskuter fordeler og ulemper ved tidlig spesialisering i idrett. Bruk konkrete eksempler.',
        solution: 'Fordeler med tidlig spesialisering: mer tid til a utvikle idrettsspesifikke ferdigheter, mulig fordel i teknisk krevende idretter som turn og kunstlop. Ulemper: okt risiko for belastningsskader pa grunn av ensidig belastning, hoeyere risiko for utbrenthet og psykisk press, smalere motorisk grunnlag som kan begrense utvikling pa sikt, og hoeyere frafallsrate. For de fleste idretter viser forskning at en allsidig bakgrunn frem til 12-14 ar gir bedre langsiktige resultater enn tidlig spesialisering. Eksempel: Mange toppidrettsutoevere i ballidretter drev med flere idretter som barn for de spesialiserte seg.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr3-2-1-ex-block5',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-1-ex5',
        number: '5',
        type: 'classic',
        task: 'Planlegg en ukes aktivitetsplan for en 9-aring som oppfyller Helsedirektoratets anbefalinger. Planen skal inkludere bade organisert og uorganisert aktivitet.',
        solution: 'Eksempel pa ukeplan for en 9-aring:\n\nMandag: Fotballtrening (60 min organisert) + frilek i skolegarden (30 min)\nTirsdag: Sykling til skolen (20 min), friminutt med lek (45 min), lek ute etter skolen (30 min)\nOnsdag: Svommekurs (45 min organisert) + lek pa lekeplass (30 min)\nTorsdag: Sykling til skolen (20 min), friminutt (45 min), klatring i traer med venner (30 min)\nFredag: Fotballtrening (60 min organisert) + utelek (30 min)\nLordag: Familietur i skogen (90 min), lek ute (60 min)\nSondag: Skitur eller sykling (60 min), fri lek (45 min)\n\nDenne planen gir daglig aktivitet godt over 60 minutter, er allsidig med mange ulike bevegelsesformer, kombinerer organisert og uorganisert aktivitet, og inkluderer bade moderat og hoy intensitet. Flere av aktivitetene styrker ogsa muskler og skjelett (klatring, fotball, svomming).',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-2-1-ex-block6',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-1-ex6',
        number: '6',
        type: 'classic',
        task: 'Forklar hvorfor allsidighet er viktigere enn spesialisering for barn under 12 ar. Knytt svaret til sensitive perioder og motorisk utvikling.',
        solution: 'Allsidighet er viktigere enn spesialisering for barn under 12 ar av flere grunner: For det forste sammenfaller perioden 6-12 ar med sensitive perioder for koordinasjon, balanse og hurtighet. Allsidig trening utnytter disse vinduene optimalt ved a eksponere barnet for mange ulike bevegelseserfaringer. For det andre bygger allsidighet et bredt motorisk repertoar – jo flere bevegelseserfaringer barnet far, jo lettere blir det a laere nye og mer komplekse ferdigheter senere. For det tredje forebygger allsidighet ensidig belastning og dermed belastningsskader. For det fjerde reduserer det risikoen for utbrenthet og frafall. Forskning viser at de mest suksessrike senioridrettsutoeverne ofte hadde en allsidig bakgrunn som barn, fordi det ga dem et bredere motorisk fundament a bygge spesialiserte ferdigheter pa.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 2.2: Ungdomstrening
// ============================================================================

export const CHAPTER_TRENING_3_2_2: TextbookChapter = {
  id: 'trening-3-2-2',
  courseId: 'trening-3',
  chapterNumber: '2.2',
  title: 'Ungdomstrening',
  description: 'Laer om puberteten og vekstspurt, forskjellen mellom tidlig og sen modning, og hvordan trening bor tilpasses ungdom i vekst.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forstaa hvordan puberteten pavirker treningskapasitet og treningsrespons',
    'kunne forklare utfordringer knyttet til vekstspurt og treningsbelastning',
    'kjenne til forskjellene mellom tidlig og sen modning og konsekvenser for idrett',
  ],
  content: [
    {
      id: 'tr3-2-2-intro',
      type: 'text',
      content: `# Ungdomstrening

Ungdomsarene er en periode med enorme fysiske, psykiske og sosiale forandringer. Puberteten medforer en vekstspurt, hormonelle endringer og en gradvis overgang fra barnekropp til voksen kropp. Disse endringene har stor betydning for treningskapasitet, treningsrespons og skaderisiko.

For trenere og idrettsutoevere er det viktig a forstaa at ungdom i puberteten ikke er ferdigutviklet, og at treningsbelastningen ma tilpasses den enkeltes biologiske modenhet. To 14-aringer kan vaere pa helt ulike stadier av puberteten, og det som passer for den ene, kan vaere for mye eller for lite for den andre.

I dette kapittelet ser vi pa de fysiologiske endringene i puberteten, fenomenet vekstspurt, og konsekvensene av tidlig versus sen modning for idrettsprestasjon og treningsplanlegging.`,
    },
    {
      id: 'tr3-2-2-def1',
      type: 'definition',
      title: 'Pubertet',
      content: 'Puberteten er perioden der kroppen gjennomgar en biologisk modning fra barn til voksen. Den utloses av okt produksjon av kjonnshormonene testosteron (hos gutter) og oestrogen (hos jenter) fra hypofysen. Puberteten starter vanligvis mellom 8-13 ar hos jenter og 9-14 ar hos gutter, og varer i gjennomsnitt 3-5 ar.',
    },
    {
      id: 'tr3-2-2-text1',
      type: 'text',
      title: 'Vekstspurten',
      content: `Vekstspurten (Peak Height Velocity, PHV) er den perioden under puberteten der hoydeveksten er raskest. Dette er en avgjorende fase for treningsplanlegging.

**Tidspunkt for vekstspurt:**
- Jenter: vanligvis rundt 11-12 ar (ca. 8-9 cm/ar)
- Gutter: vanligvis rundt 13-14 ar (ca. 9-10 cm/ar)
- Stor individuell variasjon – noen starter tidlig, andre sent

**Fysiologiske konsekvenser av vekstspurten:**

**1. Midlertidig klossete fase**
- Rask lengdevekst i roerknokler gjor at kroppens proporsjoner endres
- Nervesystemet trenger tid til a tilpasse seg ny kroppslengde
- Koordinasjon og balanse kan midlertidig forverres
- Bevegelser som tidligere var automatiserte kan bli upresis

**2. Okt skaderisiko**
- Vekstsonene (epifyseskivene) er saarbare under rask vekst
- Senefesteproblemer som Osgood-Schlatters sykdom (under kneet) og Severs sykdom (hael) er vanlige
- Muskler og sener vokser ikke like raskt som knoklene, noe som gir okt stramhet
- Stressfrakturer kan oppsta ved for stor belastning

**3. Endret kroppssammensetning**
- Gutter: okt muskelmasse og redusert kroppsfett pa grunn av testosteron
- Jenter: okt kroppsfett og bredere hofter pa grunn av oestrogen
- Disse endringene pavirker prestasjon, selvbilde og motivasjon`,
    },
    {
      id: 'tr3-2-2-def2',
      type: 'definition',
      title: 'PHV (Peak Height Velocity)',
      content: 'PHV (Peak Height Velocity) er det tidspunktet under puberteten der hoydeveksten er pa sitt raskeste. PHV brukes som en biologisk markoor for a vurdere pubertal modenhet og tilpasse trening. Rundt PHV er kroppen spesielt saarbar for overbelastning, men ogsa spesielt mottakelig for visse typer treningsstimuli.',
    },
    {
      id: 'tr3-2-2-text2',
      type: 'text',
      title: 'Tidlig og sen modning',
      content: `En av de storste utfordringene i ungdomsidretten er at ungdom i samme aldersgruppe kan vaere pa svart ulike stadier av biologisk modenhet.

**Tidlig modning (early maturers)**
- Kommer i puberteten for jevnaldrende
- Fysiske fordeler: storere, sterkere, raskere enn jevnaldrende
- Dominerer ofte i ungdomsidretten
- Risiko: kan bli overvurdert og overbelastet, kan miste motivasjon nar andre tar dem igjen

**Sen modning (late maturers)**
- Kommer i puberteten senere enn jevnaldrende
- Fysiske ulemper: mindre, svakere enn jevnaldrende
- Kan bli oversett i seleksjonsprosesser
- Fordeler pa sikt: utvikler ofte bedre teknikk og taktikk for a kompensere for fysisk underlegenhet

**Relativ alderseffekt (RAE)**
- Barn fodt tidlig pa aret (januar-mars) er opptil 11 maneder eldre enn dem fodt sent pa aret
- I ungdomsidretten gir dette en betydelig fysisk fordel
- Forskning viser at en uforholdsmessig stor andel av utvalgte ungdomsutoevere er fodt tidlig pa aret
- Mange talentfulle senfodte faller fra fordi de ikke blir valgt ut

**Konsekvens for trenere:**
- Vurder biologisk modenhet, ikke bare kronologisk alder
- Gi senmodnende ungdom tid og muligheter
- Unnga a selektere for hardt i unge aldersgrupper
- Anerkjenn at dagens tapere kan bli morgendagens vinnere`,
    },
    {
      id: 'tr3-2-2-note1',
      type: 'note',
      title: 'Biologisk vs. kronologisk alder',
      content: 'Kronologisk alder er antall ar siden fodsel. Biologisk alder er kroppens faktiske modenhetsgrad. To 13-aringer kan ha opptil 4-5 ars forskjell i biologisk alder. Biologisk alder kan vurderes gjennom skjelettmodning (rontgen av handleddet), PHV-beregning, eller vurdering av sekundaere kjonnstrekk (Tanners skala). I treningssammenheng bor biologisk alder tillegges storre vekt enn kronologisk alder.',
    },
    {
      id: 'tr3-2-2-example1',
      type: 'example',
      title: 'Treningsbelastning under vekstspurten',
      problem: 'En 13 ar gammel fotballspiller er midt i vekstspurten og klager over smerter under kneet. Hva kan dette vaere, og hvordan bor treningen tilpasses?',
      solution: `**Sannsynlig diagnose:** Osgood-Schlatters sykdom – en vanlig tilstand under vekstspurten der senen fra quadriceps (patellasenen) irriterer vekstsonen pa skinnbeinets ovre del (tuberositas tibiae).

**Arsak:** Under vekstspurten vokser knoklene raskere enn muskler og sener. Quadriceps-senen trekker pa den enna umodne vekstsonen, noe som gir betennelse, smerte og hevelse.

**Tilpasning av trening:**
- Reduser mengden hopping, sprint og skudd
- Unnga ovelser med stor belastning pa kneleddet (dype kneboy, spenst)
- Fokuser pa styrking av hoftemuskulatur og hamstrings for a avlaste kneet
- Toying av quadriceps og hofteboyere for a redusere stramhet
- La spilleren styre egen smerteterskel – tren med moderat ubehag, men aldri gjennom skarp smerte
- Tilstanden er selvbegrensende og gar over nar vekstsonen lukker seg

**Viktig:** Spilleren bor ikke slutte helt med aktivitet, men belastningen ma tilpasses. Fullstendig hvile er sjelden nodvendig.`,
    },
    {
      id: 'tr3-2-2-text3',
      type: 'text',
      title: 'Treningsprinsipper for ungdom',
      content: `God treningsplanlegging for ungdom tar hensyn til den enkeltes biologiske modenhetsgrad:

**For vekstspurt (pre-PHV):**
- Fortsett med allsidig, lekbasert trening
- Fokus pa koordinasjon, hurtighet og teknikk
- Introduser grunnleggende styrketrening med egenkroppsvekt
- Oppretthold bevegelighet gjennom dynamisk toying

**Under vekstspurt (rundt PHV):**
- Reduser total belastning og intensitet
- Vær ekstra oppmerksom pa vekstrelaterte plager
- Toying og mobilitet blir ekstra viktig
- Tillat midlertidig prestasjonsnedgang uten a oeke presset
- Fokus pa teknikk og taktikk fremfor fysiske krav

**Etter vekstspurt (post-PHV):**
- Gradvis okning av treningsbelastning
- Styrketrening med vekter kan introduseres mer systematisk
- Aerob kapasitet kan trenes mer malstyrt
- Gradvis overgang mot mer spesialisert trening

**Generelle prinsipper for all ungdomstrening:**
- Individualisering basert pa biologisk modenhet
- Periodisering med tilstrekkelig restitusjon
- Fokus pa langsiktig utvikling, ikke kortsiktige resultater
- Oppmerksomhet pa psykisk helse, selvbilde og motivasjon
- God kommunikasjon mellom trener, utover og foreldre`,
    },
    {
      id: 'tr3-2-2-warning1',
      type: 'warning',
      title: 'RED-S: Relativ energimangel i idrett',
      content: 'RED-S (Relative Energy Deficiency in Sport) er en tilstand som oppstar nar energiinntaket er for lavt i forhold til energiforbruket. Ungdom i vekst er spesielt saarbare fordi de trenger ekstra energi til bade vekst og trening. Symptomer inkluderer redusert prestasjon, hyppige skader, manglende menstruasjon hos jenter, tretthet og dearlig restitusjon. Trenere bor vaere oppmerksomme pa tegn til RED-S og sikre at unge utoevere far tilstrekkelig naering.',
    },
    {
      id: 'tr3-2-2-ex-block1',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-2-ex1',
        number: '1',
        type: 'multiple-choice',
        task: 'Nar intraeffer vekstspurten (PHV) vanligvis hos gutter?',
        options: [
          { id: 'a', text: 'Rundt 9-10 ar', isCorrect: false },
          { id: 'b', text: 'Rundt 11-12 ar', isCorrect: false },
          { id: 'c', text: 'Rundt 13-14 ar', isCorrect: true },
          { id: 'd', text: 'Rundt 16-17 ar', isCorrect: false },
        ],
        hints: ['Gutter kommer vanligvis i puberteten ca. 2 ar etter jenter.'],
        solution: 'Vekstspurten hos gutter intraeffer vanligvis rundt 13-14 ar, omtrent 2 ar etter jenter som typisk har sin vekstspurt rundt 11-12 ar. Det er stor individuell variasjon.',
      },
    },
    {
      id: 'tr3-2-2-ex-block2',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-2-ex2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er relativ alderseffekt (RAE)?',
        options: [
          { id: 'a', text: 'At eldre utoevere presterer bedre enn yngre', isCorrect: false },
          { id: 'b', text: 'At barn fodt tidlig pa aret har en fysisk fordel over barn fodt sent pa aret i samme arskull', isCorrect: true },
          { id: 'c', text: 'At biologisk alder alltid tilsvarer kronologisk alder', isCorrect: false },
          { id: 'd', text: 'At alle barn utvikler seg i samme tempo', isCorrect: false },
        ],
        solution: 'Relativ alderseffekt (RAE) innebarer at barn fodt tidlig pa aret (f.eks. januar) kan vaere opptil 11 maneder eldre enn barn fodt sent pa aret (f.eks. desember) i samme arskull. Denne forskjellen gir betydelige fysiske fordeler i ungdomsidretten, noe som forer til skjev seleksjon.',
      },
    },
    {
      id: 'tr3-2-2-ex-block3',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Forklar hvorfor koordinasjonen ofte forverres midlertidig under vekstspurten.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva skjer med kroppens proporsjoner under rask hoydevekst?',
            solution: 'Under vekstspurten vokser roerknoklene raskt, noe som endrer kroppens proporsjoner. Armer og bein blir lengre i forhold til overkroppen, og tyngdepunktet forskyves.',
            multipleChoiceOptions: [
              'Armer og bein vokser raskt og endrer kroppens proporsjoner',
              'Kroppen vokser jevnt i alle retninger',
              'Bare overkroppen vokser',
              'Knoklene stopper a vokse',
            ],
          },
          {
            label: 'b',
            task: 'Hvorfor trenger nervesystemet tid til a tilpasse seg?',
            solution: 'Nervesystemet har laert a styre bevegelser basert pa kroppens tidligere dimensjoner. Nar kroppen plutselig endrer lengde og proporsjoner, ma nervesystemet rekalibrere sine bevegelsesprogrammer. Dette tar tid, og i mellomtiden kan utoeveren oppleve redusert koordinasjon og presisjon.',
          },
        ],
        solution: 'Under vekstspurten endres kroppens proporsjoner raskt, og nervesystemet trenger tid til a tilpasse seg de nye dimensjonene. Dette gir en midlertidig klossete fase der koordinasjon og presisjon kan vaere redusert.',
      },
    },
    {
      id: 'tr3-2-2-ex-block4',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Sammenlign tidlig og sen modning i ungdomsidretten. Diskuter fordeler og ulemper pa kort og lang sikt for begge grupper.',
        solution: 'Tidligmodnende ungdom har kortsiktige fordeler: de er fysisk storere, sterkere og raskere enn jevnaldrende, noe som gir gode prestasjoner og ofte seleksjon til talentgrupper. Ulempene er at de kan bli overvurdert basert pa fysiske fremfor tekniske ferdigheter, kan bli overbelastet, og kan miste motivasjon nar andre tar dem igjen fysisk. Senmodnende ungdom har kortsiktige ulemper: de er fysisk underlegne og risikerer a bli oversett i seleksjon. Fordelene pa lang sikt er at de ofte utvikler bedre teknikk, taktikk og mental styrke for a kompensere for fysisk underlegenhet. Forskning viser at senmodnende utoevere som overlever ungdomsseleksjonen, ofte presterer like godt eller bedre pa seniorniva. Trenere bor derfor unnga for hard seleksjon i unge aldersgrupper og vurdere biologisk modenhet, ikke bare prestasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr3-2-2-ex-block5',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-2-ex5',
        number: '5',
        type: 'classic',
        task: 'Lag en plan for treningsanpassning for et fotballag i 14-arsklassen der noen spillere er midt i vekstspurten mens andre er pre-PHV.',
        solution: 'Treningsanpassning for 14-arslag med ulik modenhetsgrad:\n\nFelles trening: Teknisk og taktisk trening som passer alle. Oppvarming med dynamisk toying og koordinasjonsovelser. Smaspill og spillovelser med tilpassede baner.\n\nFor spillere i vekstspurt: Redusert hoppebelastning og sprintmengde. Ekstra tid til toying, saerlig quadriceps, hamstrings og leggmuskler. Individuell oppfolging av eventuelle vekstrelaterte plager. Tillat pauser ved smerter. Redusert kampbelastning om nodvendig.\n\nFor spillere pre-PHV: Normal til hoy treningsbelastning. Ekstra fokus pa koordinasjon og hurtighet (sensitiv periode). Introduksjon av grunnleggende styrkeovelser med egenkroppsvekt. Allsidige ovelser som bygger bredt motorisk grunnlag.\n\nGenerelt: Kommuniser aapent med spillere og foreldre om individuelle forskjeller. Bruk differensiert trening innenfor fellestreningene. Evaluer spillere basert pa utvikling, ikke bare prestasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-2-2-ex-block6',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-2-ex6',
        number: '6',
        type: 'classic',
        task: 'Forklar hva RED-S er og hvorfor ungdom i vekst er spesielt saarbare for denne tilstanden. Beskriv minst tre tegn en trener bor vaere oppmerksom pa.',
        solution: 'RED-S (Relative Energy Deficiency in Sport) er en tilstand der energiinntaket er for lavt i forhold til energiforbruket. Ungdom i vekst er spesielt saarbare fordi de trenger energi til tre formal: normal kroppsfunksjon, vekst og utvikling, samt trening og idrettsprestasjon. Hvis energiinntaket ikke dekker alle tre behovene, kan kroppen nedprioritere vekst og hormonproduksjon.\n\nTegn en trener bor vaere oppmerksom pa:\n1. Gjentatte skader og lang helingstid – kroppen far ikke nok energi til a reparere vev\n2. Redusert prestasjon tross okt treningsbelastning – kroppen klarer ikke a tilpasse seg\n3. Tretthet, irritabilitet og konsentrasjonsvansker – hjernen og nervesystemet far for lite energi\n4. Manglende menstruasjon hos jenter (amenore) – hormonproduksjonen reduseres\n5. Sykdom – immunforsvaret svekkes ved energimangel\n6. Endrede spisevaner, overdreven opptatthet av vekt eller kropp\n\nTrenere har et ansvar for a skape et sunt forsteholdsklima og henvis til helsepersonell ved mistanke.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 2.3: Trening for voksne
// ============================================================================

export const CHAPTER_TRENING_3_2_3: TextbookChapter = {
  id: 'trening-3-2-3',
  courseId: 'trening-3',
  chapterNumber: '2.3',
  title: 'Trening for voksne',
  description: 'Laer om treningsbehov for voksne i ulike livsfaser, vedlikeholdstrening, livsstilstrening og tilpasning til arbeidsliv.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forstaa treningsbehovet for voksne i ulike livsfaser',
    'kunne forklare prinsippene for vedlikeholdstrening og livsstilstrening',
    'kjenne til tilpasning av trening til arbeidslivets krav',
  ],
  content: [
    {
      id: 'tr3-2-3-intro',
      type: 'text',
      content: `# Trening for voksne

Voksenlivet strekker seg fra ca. 20 til 65 ar og omfatter svart ulike livsfaser med ulike treningsbehov. Fra den unge voksne som bygger karriere, til foreldre med sma barn, til den etablerte voksne som prioriterer helse og velvare – treningsbehovene og mulighetene endrer seg gjennom livet.

Den fysiske prestasjonsevnen nar sitt toppunkt rundt 25-35 ar for de fleste egenskaper. Etter dette begynner en gradvis nedgang i muskelstyrke, utholdenhet, bevegelighet og reaksjonsevne. Denne nedgangen er delvis biologisk betinget, men kan i betydelig grad bremses og motvirkes gjennom regelmessig fysisk aktivitet.

For voksne handler trening ikke bare om prestasjon, men i okt grad om helsefremming, sykdomsforebygging, livskvalitet og mestring av dagliglivets krav. Livsstilstrening har blitt et sentralt begrep for trening tilpasset voksnes behov og hverdag.`,
    },
    {
      id: 'tr3-2-3-def1',
      type: 'definition',
      title: 'Livsstilstrening',
      content: 'Livsstilstrening er fysisk aktivitet som er integrert i hverdagen og tilpasset den enkeltes livssituasjon, maal og forutsetninger. I motsetning til tradisjonell prestasjonstrening fokuserer livsstilstrening pa helse, velvare og funksjonalitet. Malet er a gjore fysisk aktivitet til en naturlig og barekraftig del av livet, ikke noe man gjor i korte, intense perioder.',
    },
    {
      id: 'tr3-2-3-text1',
      type: 'text',
      title: 'Fysiologiske endringer gjennom voksenlivet',
      content: `Etter 30-arsalderen begynner kroppen en gradvis nedgang i flere fysiske egenskaper:

**Muskelstyrke og muskelmasse**
- Tap av 3-8 % muskelmasse per tiar etter 30 ar (uten trening)
- Tapet akselererer etter 50 ar
- Spesielt raske muskelfibre (type II) reduseres
- Styrketrening kan bremse og delvis reversere tapet

**Aerob kapasitet (VO2maks)**
- Faller med ca. 10 % per tiar etter 25-30 ar (uten trening)
- Regelmessig utholdenhetstrening kan halve denne nedgangen
- Maksimal hjertefrekvens synker med ca. 1 slag per ar

**Bevegelighet**
- Ledd og bindevev blir stivere med alderen
- Tap av bevegelighet akselererer etter 40 ar
- Regelsmessig toying og mobilitetstrening er viktig

**Kroppsammensetning**
- Okt andel kroppsfett, saerlig visceralt fett (rundt organene)
- Redusert muskelmasse (se over)
- Okt risiko for metabolsk syndrom
- Kombinasjon av styrke- og utholdenhetstrening motvirker dette

**Beinmasse**
- Beinmassen nar sitt hoeyeste rundt 25-30 ar
- Gradvis tap etter dette, raskere hos kvinner etter overgangsalderen
- Vektbaerende trening og styrketrening bremser beintapet`,
    },
    {
      id: 'tr3-2-3-text2',
      type: 'text',
      title: 'Treningsanbefalinger for voksne',
      content: `Helsedirektoratets anbefalinger for voksne (18-64 ar):

**Aerob aktivitet:**
- Minst 150 minutter moderat intensitet per uke (f.eks. rask gange, sykling)
- ELLER minst 75 minutter hoey intensitet per uke (f.eks. loping, intervaller)
- ELLER en kombinasjon av begge
- Aktiviteten bor fordeles over minst 3 dager i uken

**Styrketrening:**
- Minst 2 ganger per uke
- Alle store muskelgrupper bor trenes
- 2-4 sett med 8-12 repetisjoner per ovelse
- Motstand som gir tretthet etter siste repetisjon

**Bevegelighet:**
- Regelsmessig toying av alle store muskelgrupper
- Minst 2-3 ganger per uke
- Hold strekken i 20-60 sekunder

**Reduksjon av stillesitting:**
- Bryt opp langvarig sitting med bevegelse
- Sta opp minst hvert 30. minutt
- Erstatt stillesitting med lett aktivitet nar mulig

**Viktig:** Dette er minimumsanbefalinger. For ytterligere helsegevinst anbefales det a doble aktivitetsnivaaet.`,
    },
    {
      id: 'tr3-2-3-def2',
      type: 'definition',
      title: 'Vedlikeholdstrening',
      content: 'Vedlikeholdstrening er trening som har som formal a opprettholde et allerede oppnadd fysisk nivaa, snarere enn a forbedre det. Prinsippet er at det kreves mindre treningsstimulus for a vedlikeholde en egenskap enn for a bygge den opp. Vedlikeholdstrening er relevant i perioder med redusert treningstid, f.eks. ved sykdom, travle arbeidsperioder eller ferie.',
    },
    {
      id: 'tr3-2-3-text3',
      type: 'text',
      title: 'Trening tilpasset arbeidslivet',
      content: `Arbeidslivet pavirker bade treningsbehovet og treningsmuligheten for voksne. Ulike yrker stiller ulike krav til kroppen:

**Stillesittende arbeid (kontor, IT, administrasjon)**
- Hovedutfordring: langvarig sitting, statiske belastninger, lite bevegelse
- Treningsbehov: styrke kjernemuskulatur, mobilisere hofte og brystrygg, aerob aktivitet
- Forebygge: nakkesmerter, ryggsmerter, metabolsk syndrom
- Tips: sta-arbeidsbord, korte bevegelsespauser, gange til/fra jobb

**Fysisk tungt arbeid (bygg, helse, industri)**
- Hovedutfordring: tung lofting, repetitive bevegelser, uheldige arbeidsstillinger
- Treningsbehov: styrke kjernemuskulatur og rygg, forbedre lofteteknikk, utholdenhet
- Forebygge: ryggskader, belastningsskader, slitasje
- Tips: Atletisk trening som forberedelse til arbeidskravene, aktiv restitusjon

**Skiftarbeid (helse, transport, industri)**
- Hovedutfordring: forstyrret sovnrytme, uregelmessige maltider, stress
- Treningsbehov: vedlikehold av aktivitetsnivaa tross uregelmessig timeplan
- Forebygge: overvekt, hjerte- og karsykdom, soevnproblemer
- Tips: Korte, effektive okter, planlegg trening i kalenderen, prioriter sovn

**Arbeidsfysiologi-perspektiv:**
Forskning viser at fysisk tungt arbeid i seg selv ikke gir de samme helsegevinstene som strukturert trening. Arsaken er at arbeid ofte medforer statisk belastning, uheldige stillinger og for lite variasjon. Selv personer med fysisk tungt arbeid trenger regelmessig fritidstrening for a forebygge skader og opprettholde god helse.`,
    },
    {
      id: 'tr3-2-3-example1',
      type: 'example',
      title: 'Treningsprogram for en kontorarbeider',
      problem: 'En 35 ar gammel kontorarbeider sitter 8 timer daglig, har litt ryggplager og onsker a komme i bedre form. Lag et realistisk treningsopplegg.',
      solution: `**Treningsopplegg for kontorarbeider (3-4 okter/uke):**

**Mandag: Styrke overkropp og kjerne (45 min)**
- Oppvarming: roing pa maskin 5 min
- Roing med stang: 3x10
- Benkpress med manualer: 3x10
- Skulderpress: 3x10
- Planke: 3x45 sek
- Dead bugs: 3x10 per side
- Toying av bryst og hoftebeoyere

**Onsdag: Aerob okt (30-45 min)**
- Rask gange, jogging eller sykling
- Moderat intensitet (kan fore en samtale)
- Alternativt: svomming for a avlaste ryggen

**Fredag: Styrke underkropp og kjerne (45 min)**
- Oppvarming: ergometersykkel 5 min
- Kneboy med vekt: 3x10
- Romansk markloeft: 3x10
- Utfall: 3x10 per bein
- Hip thrusts: 3x12
- Bird dogs: 3x10 per side
- Toying av hamstrings og hoftebeoyere

**Sondag: Lett aktivitet (30-60 min)**
- Tur i naturen, sykling eller svomming
- Fokus pa bevegelsesglede og restitusjon

**I tillegg daglig:**
- Bevegelsespauser fra skrivebordet hver 30. minutt
- 5 minutter toying morgen og kveld (fokus pa hoftebeoyere og brystrygg)
- Ga eller sykle til jobb om mulig

Programmet adresserer de viktigste utfordringene: styrker kjernemuskulatur for ryggen, motvirker stillesitting, bygger aerob kapasitet og forbedrer bevegelighet.`,
    },
    {
      id: 'tr3-2-3-note1',
      type: 'note',
      title: 'Treningsregelmessighet er nokkelen',
      content: 'Forskning viser konsekvent at regelmessighet er den viktigste faktoren for treningseffekt hos voksne. Det er bedre a trene 30 minutter tre ganger i uken i 52 uker, enn a trene intenst i 6 uker og deretter slutte. Finn en treningsform du liker, gjor den til en vane, og varer taalmodig. Helsemessige gevinster av trening er kumulative over tid.',
    },
    {
      id: 'tr3-2-3-tip1',
      type: 'tip',
      title: 'Tidsklemma-trening',
      content: 'For voksne med lite tid finnes effektive strategier: Hoyintensitetsintervaller (HIIT) gir stor effekt pa kort tid (20-30 min). Styrketrening med sammensatte ovelser (kneboy, markloeft, benkpress) trener mange muskler samtidig. Aktiv transport (ga eller sykle til jobb) gir daglig aktivitet uten ekstra tidsbruk. Korte okter (10-15 min) er ogsa verdifulle og kan legges inn i pauser.',
    },
    {
      id: 'tr3-2-3-ex-block1',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-3-ex1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvor mye moderat aerob aktivitet anbefaler Helsedirektoratet per uke for voksne?',
        options: [
          { id: 'a', text: 'Minst 60 minutter', isCorrect: false },
          { id: 'b', text: 'Minst 150 minutter', isCorrect: true },
          { id: 'c', text: 'Minst 300 minutter', isCorrect: false },
          { id: 'd', text: 'Minst 30 minutter', isCorrect: false },
        ],
        hints: ['Anbefalingen kan ogsa oppfylles med 75 minutter hoey intensitet.'],
        solution: 'Helsedirektoratet anbefaler minst 150 minutter moderat aerob aktivitet per uke for voksne, eller 75 minutter med hoey intensitet, fordelt over minst 3 dager.',
      },
    },
    {
      id: 'tr3-2-3-ex-block2',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-3-ex2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvor mye muskelmasse taper en inaktiv voksen omtrent per tiar etter 30-arsalderen?',
        options: [
          { id: 'a', text: 'Ca. 1 %', isCorrect: false },
          { id: 'b', text: 'Ca. 3-8 %', isCorrect: true },
          { id: 'c', text: 'Ca. 15-20 %', isCorrect: false },
          { id: 'd', text: 'Ingen, muskelmasse er stabil hele livet', isCorrect: false },
        ],
        solution: 'Uten trening taper voksne ca. 3-8 % av muskelmassen per tiar etter 30 ar. Tapet akselererer etter 50 ar. Regelsmessig styrketrening kan bremse og delvis reversere dette tapet betydelig.',
      },
    },
    {
      id: 'tr3-2-3-ex-block3',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-3-ex3',
        number: '3',
        type: 'classic',
        task: 'Forklar hva vedlikeholdstrening er og nar det er relevant.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er prinsippet bak vedlikeholdstrening?',
            solution: 'Prinsippet er at det kreves mindre treningsstimulus for a opprettholde et fysisk nivaa enn for a bygge det opp. Man kan vedlikeholde styrke og utholdenhet med faerre okter og lavere volum enn det som var nodvendig for a oppnaa nivaaet.',
            multipleChoiceOptions: [
              'Det kreves mindre stimulus for a vedlikeholde enn for a forbedre',
              'Man ma trene like mye for a vedlikeholde som for a forbedre',
              'Vedlikehold krever mer trening enn oppbygging',
              'Vedlikeholdstrening er kun for eldre',
            ],
          },
          {
            label: 'b',
            task: 'Gi et eksempel pa nar vedlikeholdstrening er relevant i en voksen persons liv.',
            solution: 'Vedlikeholdstrening er relevant i perioder med begrenset tid eller energi, for eksempel under travle prosjekter pa jobb, nar man har nyfodt barn, under reiser, ved mild sykdom, eller i ferieperioder. I stedet for a slutte helt med trening, reduserer man volum og frekvens for a beholde sa mye som mulig av oppnadd form.',
          },
        ],
        solution: 'Vedlikeholdstrening handler om a opprettholde et fysisk nivaa med minst mulig innsats i perioder der full trening ikke er mulig. Det er et viktig konsept for voksne som opplever svingninger i tilgjengelig tid og energi.',
      },
    },
    {
      id: 'tr3-2-3-ex-block4',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-3-ex4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvorfor fysisk tungt arbeid ikke erstatter behovet for fritidstrening. Bruk arbeidsfysiologisk kunnskap i svaret ditt.',
        solution: 'Selv om fysisk tungt arbeid medforer bevegelse og belastning, erstatter det ikke fritidstrening av flere grunner: 1) Arbeidsbelastning er ofte statisk og ensformig, mens trening er dynamisk og variert. 2) Arbeidsstillinger er ofte uheldige (boyde, vridde posisjoner) som sliter pa kroppen fremfor a styrke den. 3) Intensiteten i arbeid er ofte for lav for aerob forbedring, men for hoey for restitusjon over lang tid. 4) Arbeid gir sjelden tilstrekkelig stimulus for styrkeoekning eller bedret utholdenhet. 5) Forskning viser at tungt fysisk arbeid faktisk er forbundet med okt risiko for hjerte-karsykdom, mens fritidstrening er forbundet med redusert risiko. Derfor trenger ogsa personer med fysisk tungt arbeid strukturert fritidstrening for a styrke kroppen, motvirke ensidig belastning og oppnaa helsegevinster.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr3-2-3-ex-block5',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-3-ex5',
        number: '5',
        type: 'classic',
        task: 'Lag et realistisk treningsopplegg for en 45 ar gammel sykepleier som jobber turnus (dag, kveld og nattevakter) og har begrenset tid. Forklar valgene dine.',
        solution: 'Treningsopplegg for sykepleier i turnus (3 korte okter/uke):\n\nOkt 1 - Styrke helkropp (30 min): Kneboy 3x10, benkpress 3x10, roing 3x10, planke 3x30 sek, toying 5 min. Kan gjores hjemme med manualer.\n\nOkt 2 - HIIT kondisjon (20 min): 5 min oppvarming, 8x30 sek hoey intensitet / 90 sek pause (sykkel, trappegang eller loping), 5 min nedkjoling. Tidseffektiv okt som gir stor aerob effekt.\n\nOkt 3 - Mobilitet og lett styrke (25 min): Yoga eller mobilitetsrutine, fokus pa rygg, skuldre og hofter. Lett styrke for kjernemuskulatur. Spesielt viktig for a motvirke belastninger fra loefting av pasienter.\n\nTilpasning til turnus: Tren pa frie dager eller for dagvakter. Etter nattevakter: prioriter soevn fremfor trening. Ha en fast ukeplan, men vaer fleksibel med hvilke dager oektene legges pa. Korte okter (10-15 min) er bedre enn ingen okt.\n\nBegrunnelse: Korte, effektive okter passer inn i en travel turnus. Styrketrening motvirker belastning fra tungt pasientarbeid. Mobilitet forebygger rygg- og skulderplager. HIIT gir mye helsegevinst pa kort tid.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-2-3-ex-block6',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-3-ex6',
        number: '6',
        type: 'classic',
        task: 'Diskuter begrepet livsstilstrening. Hva skiller det fra tradisjonell prestasjonstrening, og hvorfor er det relevant for voksne?',
        solution: 'Livsstilstrening skiller seg fra tradisjonell prestasjonstrening pa flere mater: Malet er helse, velvare og funksjonalitet, ikke maksimal prestasjon. Tilnaermingen er helhetlig og integrert i hverdagen, ikke noe som kun skjer pa et treningssenter. Tidsperspektivet er livslangt og barekraftig, ikke periodisert mot konkurranser. Intensiteten er moderat og tilpasset den enkelte, ikke grensesperrende.\n\nLivsstilstrening er spesielt relevant for voksne fordi: 1) De fleste voksne er ikke konkurranseutoevere og trenger ikke prestasjonstrening. 2) Livsstilstrening er enklere a opprettholde over tid og tilpasse til skiftende livssituasjoner. 3) Det fokuserer pa det som faktisk gir helsegevinst for den gjennomsnittlige voksne. 4) Det reduserer barrierer for a vaere aktiv ved a gjore trening tilgjengelig og overkommelig. 5) Forskning viser at moderat, regelmessig aktivitet gir storst helsegevinst for den inaktive delen av befolkningen – det er forskjellen mellom a vaere helt inaktiv og a vaere moderat aktiv som gir storst utslag pa helse.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 2.4: Trening for eldre
// ============================================================================

export const CHAPTER_TRENING_3_2_4: TextbookChapter = {
  id: 'trening-3-2-4',
  courseId: 'trening-3',
  chapterNumber: '2.4',
  title: 'Trening for eldre',
  description: 'Laer om sarkopeni, fallforebygging, funksjonsevne og treningsanpassning for eldre voksne over 65 ar.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forstaa hva sarkopeni er og hvordan styrketrening kan motvirke det',
    'kunne forklare prinsipper for fallforebygging gjennom trening',
    'kjenne til treningsanpassninger for a opprettholde funksjonsevne hos eldre',
  ],
  content: [
    {
      id: 'tr3-2-4-intro',
      type: 'text',
      content: `# Trening for eldre

Befolkningen i Norge og resten av den vestlige verden blir stadig eldre. Andelen over 65 ar oeker, og det er et oekende fokus pa hvordan fysisk aktivitet kan bidra til a opprettholde helse, selvstendighet og livskvalitet i alderdommen.

Aldring medforer en rekke fysiologiske endringer som pavirker fysisk funksjon: muskler svinner, balansen forverres, knoklene blir svakere og reaksjonsevnen avtar. Disse endringene er delvis biologisk betinget, men i overraskende stor grad pavirket av aktivitetsnivaa. Forskning viser at regelmessig trening kan bremse aldringsprosessen og i mange tilfeller reversere tap av funksjon.

Fall er den storste enkelttrusselen mot eldres helse og selvstendighet. Hvert ar faller omtrent en tredjedel av alle over 65 ar, og konsekvensene kan vaere alvorlige: hoftebrudd, hodeskader, tap av selvstendighet og nedsatt livskvalitet. Trening er det mest effektive tiltaket for a forebygge fall.`,
    },
    {
      id: 'tr3-2-4-def1',
      type: 'definition',
      title: 'Sarkopeni',
      content: 'Sarkopeni er aldersbetinget tap av muskelmasse og muskelstyrke. Tilstanden starter typisk etter 50 ar og akselererer etter 65-70 ar. Uten tiltak kan eldre tape opptil 1-2 % muskelmasse per ar. Sarkopeni forer til redusert kraft, langsommere gange, nedsatt balanse, oekt fallrisiko og tap av selvstendighet. Styrketrening er den mest effektive behandlingen.',
    },
    {
      id: 'tr3-2-4-text1',
      type: 'text',
      title: 'Fysiologiske endringer ved aldring',
      content: `Aldring medforer en rekke endringer som pavirker treningskapasitet og treningsbehov:

**Muskel- og skjelettsystemet**
- Muskelmasse og -styrke reduseres (sarkopeni)
- Spesielt type II-fibre (raske fibre) rammes
- Sener og ligamenter mister elastisitet
- Beinmassen reduseres (osteoporose-risiko)
- Leddbrusk slites (artrose)

**Hjerte- og karsystemet**
- Maksimal hjertefrekvens synker
- Hjertets pumpefunksjon reduseres
- Blodkarene blir stivere
- VO2maks synker med 5-15 % per tiar etter 30 ar
- Blodtrykket oeker ofte

**Nervesystemet**
- Reaksjonstiden oeker
- Koordinasjonen forverres
- Balansen svekkes (vestibularsystemet, propriosepsjon)
- Motoriske enheter reduseres

**Sanseapparatet**
- Synet forverres (pavirker balanse og orientering)
- Hoeorselen svekkes
- Propriosepsjon (stillingssans) reduseres
- Vestibularsystemet (balanseorganet) svekkes

**Viktig a vite:** Selv om disse endringene er uunngaaelige, varierer hastigheten enormt mellom individer. Fysisk aktive eldre har betydelig bedre funksjon enn inaktive jevnaldrende. En sprek 75-aring kan ha bedre fysisk funksjon enn en inaktiv 55-aring.`,
    },
    {
      id: 'tr3-2-4-text2',
      type: 'text',
      title: 'Fallforebygging gjennom trening',
      content: `Fall er den vanligste aarsaken til skader og sykehusinnleggelser blant eldre. Heldigvis er fall i stor grad forebyggbare gjennom riktig trening.

**Risikofaktorer for fall:**
- Nedsatt muskelstyrke (saerlig i bein og kjerne)
- Darlig balanse og koordinasjon
- Redusert bevegelighet
- Nedsatt syn
- Medikamenter som gir svimmelhet
- Fottoy og hjemmemiljoe

**Treningskomponenter for fallforebygging:**

**1. Balansetrening**
- Sta pa ett bein (med og uten stotte)
- Tandemgang (fot foran fot pa linje)
- Bevegelser med lukkede oeyne (forsiktig, med stotte)
- Tai chi – dokumentert effektivt for balanse hos eldre
- Gradvis oekende vanskelighetsgrad

**2. Styrketrening for underekstremitetene**
- Reise seg fra stol uten a bruke hendene
- Kneboy (med stotte om nodvendig)
- Taaheev
- Steg opp pa trinn
- Hofteabduksjon (loefte beinet ut til siden)

**3. Gangetrening**
- Rask gange med variert tempo
- Gange med retningsforandringer
- Gange over hindringer
- Gange pa ujevnt underlag

**4. Bevegelighet og mobilitet**
- Toying av hoftebeoyere, hamstrings og legger
- Rotasjon i brystrygg
- Ankelbevegelighet (dorsalfleksjon)

Forskning viser at et kombinert treningsprogram med balansetrening og styrketrening kan redusere fallrisikoen med opptil 30-40 %.`,
    },
    {
      id: 'tr3-2-4-def2',
      type: 'definition',
      title: 'Funksjonsevne',
      content: 'Funksjonsevne beskriver en persons evne til a utfoere dagligdagse aktiviteter selvstendig, som a kle pa seg, lage mat, handle, ga i trapper og vaere sosialt aktiv. Opprettholdelse av funksjonsevne er hovedmaalet med trening for eldre. Nar funksjonsevnen faller under et kritisk nivaa, mister personen evnen til a bo selvstendig og blir avhengig av hjelp.',
    },
    {
      id: 'tr3-2-4-example1',
      type: 'example',
      title: 'Stol-til-staaende-test',
      problem: 'Forklar hvordan stol-til-staaende-testen (sit-to-stand) brukes som mal pa funksjonell styrke hos eldre, og hva den forteller oss.',
      solution: `**Stol-til-staaende-testen (30-sekunder sit-to-stand):**

**Utfoerelse:**
- Personen sitter pa en stol med vanlig hoyde (43 cm), armer i kryss over brystet
- Pa signal reiser personen seg helt opp og setter seg helt ned igjen sa mange ganger som mulig pa 30 sekunder
- Tell antall fullstendige repetisjoner

**Referanseverdier (gjennomsnitt):**
- 60-64 ar: kvinner 12-17, menn 14-19
- 65-69 ar: kvinner 11-16, menn 12-18
- 70-74 ar: kvinner 10-15, menn 12-17
- 75-79 ar: kvinner 10-15, menn 11-17
- 80-84 ar: kvinner 9-14, menn 10-15
- 85-89 ar: kvinner 8-13, menn 8-14

**Hva testen forteller oss:**
- Maler funksjonell styrke i underekstremitetene
- Direkte relevant for dagligdagse aktiviteter som a reise seg fra stol, seng eller toalett
- Et resultat under referanseverdiene indikerer oekt risiko for funksjonstap og fall
- Brukes bade til kartlegging og som treningsmal for fremgang

Denne enkle testen er et godt eksempel pa funksjonell testing: den maler en egenskap som er direkte relevant for den eldres hverdag og selvstendighet.`,
    },
    {
      id: 'tr3-2-4-text3',
      type: 'text',
      title: 'Treningsanbefalinger for eldre (65+)',
      content: `Helsedirektoratets anbefalinger for eldre (65+ ar) er i hovedsak de samme som for voksne, med noen viktige tillegg:

**Aerob aktivitet:**
- Minst 150 minutter moderat intensitet eller 75 minutter hoey intensitet per uke
- Gange er den vanligste og mest tilgjengelige aktivitetsformen
- Svoemming og sykling er skånsomme alternativer

**Styrketrening:**
- Minst 2 ganger per uke, helst 3
- Alle store muskelgrupper
- Spesielt viktig: bein, kjerne og rygg
- Start lett, oek gradvis
- Maskin- eller strikketrening kan vaere tryggere enn frie vekter for nybegynnere

**Balansetrening:**
- Minst 3 ganger per uke for eldre med oekt fallrisiko
- Integrert i daglige rutiner (sta pa ett bein mens du pusser tenner)
- Tai chi, dans og yoga er effektive balanseaktiviteter

**Bevegelighet:**
- Daglig toying og mobilitetsoevelser
- Saerlig viktig for hofter, ankler og brystrygg
- Yoga og pilates er gode alternativer

**Spesielle hensyn:**
- Start forsiktig og oek gradvis (saerlig for de som har vaert inaktive)
- Ta hensyn til eventuelle sykdommer og medisiner
- Samarbeid med lege ved kroniske tilstander
- Tren gjerne i grupper – den sosiale komponenten er viktig for motivasjon
- Det er aldri for sent a begynne – selv 90-aringer har dokumentert effekt av styrketrening`,
    },
    {
      id: 'tr3-2-4-warning1',
      type: 'warning',
      title: 'Osteoporose og trening',
      content: 'Ved kjent osteoporose bor man unnga ovelser med sterk fleksjon (boeying) eller rotasjon i ryggsoeylene under belastning, da dette kan oeke risikoen for kompresjonsfrakturer i ryggvirvlene. Vektbaerende ovelser som gange, taaheev og forsiktig styrketrening er derimot anbefalt og kan styrke knoklene. Raadfoer deg med lege eller fysioterapeut for individuelt tilpasset program.',
    },
    {
      id: 'tr3-2-4-note1',
      type: 'note',
      title: 'Aldri for sent',
      content: 'Et klassisk studie fra 1990 viste at beboere pa sykehjem i alderen 87-96 ar oppnaadde en gjennomsnittlig styrkeoekning pa 174 % etter 8 uker med styrketrening. Flere av deltakerne gikk fra rullestol til a ga med gaastol. Dette viser at treningsrespons er mulig i alle aldersgrupper, og at det aldri er for sent a begynne.',
    },
    {
      id: 'tr3-2-4-ex-block1',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-4-ex1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er sarkopeni?',
        options: [
          { id: 'a', text: 'Aldersbetinget tap av beinmasse', isCorrect: false },
          { id: 'b', text: 'Aldersbetinget tap av muskelmasse og muskelstyrke', isCorrect: true },
          { id: 'c', text: 'Aldersbetinget tap av bevegelighet', isCorrect: false },
          { id: 'd', text: 'Aldersbetinget tap av utholdenhet', isCorrect: false },
        ],
        hints: ['Begrepet kommer fra gresk: sarx (kjoett) og penia (tap/fattigdom).'],
        solution: 'Sarkopeni er aldersbetinget tap av muskelmasse og muskelstyrke. Tilstanden forer til redusert kraft, nedsatt balanse, oekt fallrisiko og tap av selvstendighet. Styrketrening er den mest effektive behandlingen.',
      },
    },
    {
      id: 'tr3-2-4-ex-block2',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-4-ex2',
        number: '2',
        type: 'multiple-choice',
        task: 'Med hvor mange prosent kan kombinert balanse- og styrketrening redusere fallrisikoen hos eldre?',
        options: [
          { id: 'a', text: 'Ca. 5-10 %', isCorrect: false },
          { id: 'b', text: 'Ca. 10-20 %', isCorrect: false },
          { id: 'c', text: 'Ca. 30-40 %', isCorrect: true },
          { id: 'd', text: 'Ca. 70-80 %', isCorrect: false },
        ],
        solution: 'Forskning viser at et kombinert treningsprogram med balansetrening og styrketrening kan redusere fallrisikoen med opptil 30-40 %. Dette gjor trening til det mest effektive fallforebyggende tiltaket.',
      },
    },
    {
      id: 'tr3-2-4-ex-block3',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-4-ex3',
        number: '3',
        type: 'classic',
        task: 'Forklar sammenhengen mellom sarkopeni, fall og tap av selvstendighet hos eldre.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvordan forer sarkopeni til oekt fallrisiko?',
            solution: 'Sarkopeni gir redusert muskelstyrke i bein og kjerne, noe som svekker balansen og evnen til a korrigere for ustoehet. Saerlig tapet av raske type II-fibre er kritisk, fordi disse er nodvendige for raske, korrigerende bevegelser nar man holder pa a falle.',
            multipleChoiceOptions: [
              'Redusert styrke svekker balanse og korreksjonsevne',
              'Sarkopeni pavirker kun armstyrke',
              'Eldre med sarkopeni har bedre balanse',
              'Sarkopeni pavirker ikke fallrisiko',
            ],
          },
          {
            label: 'b',
            task: 'Hvorfor kan et fall vaere sa alvorlig for en eldre person med sarkopeni?',
            solution: 'En eldre person med sarkopeni har ofte ogsa redusert beinmasse (osteoporose), som gjor knoklene skjoerere og oeker risikoen for brudd. Et hoftebrudd medforer ofte langvarig immobilisering, som ytterligere akselererer muskeltapet. Mange eldre gjenvinner aldri fullt funksjonsnivaa etter et hoftebrudd, og det kan fore til varig tap av selvstendighet og behov for institusjonsplass.',
          },
        ],
        solution: 'Sarkopeni skaper en ond sirkel: muskeltap forer til nedsatt balanse og oekt fallrisiko. Fall kan gi brudd, som forer til immobilisering, som gir ytterligere muskeltap. Trening bryter denne sirkelen ved a styrke muskler, forbedre balanse og styrke knokler.',
      },
    },
    {
      id: 'tr3-2-4-ex-block4',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-4-ex4',
        number: '4',
        type: 'classic',
        task: 'Lag et fallforebyggende treningsprogram for en 75-aring som er relativt sprek, men har opplevd to nesten-fall det siste aret.',
        solution: 'Fallforebyggende treningsprogram for 75-aring (3 ganger/uke, 30-40 min):\n\nBaelanse (10 min): Sta pa ett bein (hold i stol om nodvendig) 3x20 sek per bein. Tandemgang frem og tilbake (10 meter). Sta pa taer og holde 3x10 sek. Gange med hodet vriddd til sidene. Gradvis oeke vanskeligheten (f.eks. lukke oeynene, mykere underlag).\n\nStyrke (15 min): Reise-sette seg fra stol uten hender 3x8. Taaheev (hold i stolrygg) 3x12. Kneboy med stotte 3x8. Hofteabduksjon (loefte beinet ut til siden) 3x10 per side. Steg opp pa lavt trinn 3x8 per bein.\n\nGange og koordinasjon (10 min): Rask gange med tempovariasjoner. Gange over smaa hindringer (puter pa gulvet). Gange med retningsforandringer pa signal. Gange pa ujevnt underlag (f.eks. matte).\n\nBevegelighet (5 min): Ankelmobilisering. Hoftebeoyertoying. Lett rotasjon i brystrygg. Leggtoying mot vegg.\n\nProgresjon: Oek vanskeligheten gradvis (reduser stotte, oek tempo, oek motstand). Maal: forbedre stol-til-staaende-test og oppleve tryggere gange i dagliglivet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr3-2-4-ex-block5',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-4-ex5',
        number: '5',
        type: 'classic',
        task: 'Forklar begrepet funksjonsevne og hvorfor det er det viktigste maalet for trening hos eldre.',
        solution: 'Funksjonsevne er en persons evne til a utfoere dagligdagse aktiviteter selvstendig, som a sta opp fra sengen, kle pa seg, lage mat, handle, ga i trapper og vaere sosialt aktiv. For eldre er funksjonsevne viktigere enn tradisjonelle treningsmal som VO2maks eller 1RM, fordi det direkte bestemmer livskvalitet og selvstendighet.\n\nDet finnes et kritisk nivaa for funksjonsevne: nar styrke, balanse eller utholdenhet faller under dette nivaaet, mister personen evnen til a utfoere grunnleggende aktiviteter selvstendig. Malet med trening for eldre er a holde funksjonsevnen over dette kritiske nivaaet sa lenge som mulig.\n\nEksempel: En eldre person trenger tilstrekkelig beinstyrke til a reise seg fra en stol. Hvis styrken faller under dette nivaaet, blir personen avhengig av hjelp. Styrketrening som oeker beinstyrken med 30-50 % kan bety forskjellen mellom selvstendighet og avhengighet.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr3-2-4-ex-block6',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-4-ex6',
        number: '6',
        type: 'classic',
        task: 'Diskuter paastanden: "Det er for sent a begynne med styrketrening nar man er 80 ar." Bruk forskning og fysiologisk kunnskap i argumentasjonen.',
        solution: 'Paastanden er feil. Forskning viser tydelig at styrketrening gir positiv effekt i alle aldersgrupper, ogsa blant de eldste eldre. Det klassiske studiet av Fiatarone et al. (1990) viste at sykehjemsbeboere i alderen 87-96 ar oppnaadde en gjennomsnittlig styrkeoekning pa 174 % etter bare 8 uker med styrketrening. Flere deltakere gikk fra rullestol til gaaing med gaastol.\n\nFysiologisk sett beholder kroppen evnen til a bygge muskelmasse og styrke livet ut, selv om responsen er langsommere enn hos yngre. Mekanismene er de samme: muskelfibre stimuleres, proteinsyntesen oeker, og nervesystemet forbedrer rekrutteringen av motoriske enheter.\n\nPraktisk sett kan selv beskjeden styrkeoekning ha stor funksjonell betydning for en 80-aring. En oekning pa 20-30 % i beinstyrke kan vaere nok til a krysse grensen fra a ikke klare a reise seg fra stolen til a klare det selvstendig. Styrketrening reduserer ogsa fallrisiko, motvirker osteoporose, forbedrer metabolsk helse og bedrer livskvalitet.\n\nKonklusjon: Det er aldri for sent a begynne med tilpasset styrketrening, og gevinstene kan vaere livsforandrende.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 2.5: Kjoensforskjeller i trening
// ============================================================================

export const CHAPTER_TRENING_3_2_5: TextbookChapter = {
  id: 'trening-3-2-5',
  courseId: 'trening-3',
  chapterNumber: '2.5',
  title: 'Kjoensforskjeller i trening',
  description: 'Laer om fysiologiske forskjeller mellom kjoenn, hvordan de pavirker treningskapasitet, og hvordan trening bor tilpasses.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forstaa de viktigste fysiologiske forskjellene mellom kjoenn som pavirker treningskapasitet',
    'kunne forklare hvordan hormonelle forskjeller pavirker treningsrespons',
    'kjenne til relevante tilpasninger av trening basert pa kjoenn',
  ],
  content: [
    {
      id: 'tr3-2-5-intro',
      type: 'text',
      content: `# Kjoensforskjeller i trening

Det finnes reelle fysiologiske forskjeller mellom kjoennene som pavirker fysisk prestasjonsevne og treningsrespons. Disse forskjellene er viktige a forstaa for a kunne tilpasse trening optimalt, men de bor ikke brukes til a begrense noens treningsmuligheter.

De fysiologiske forskjellene mellom menn og kvinner er i hovedsak et resultat av ulike hormonnivaaer, saerlig testosteron og oestrogen, samt forskjeller i kroppsstoerrelse og kroppssammensetning. Disse forskjellene blir tydelige etter puberteten og vedvarer gjennom voksenlivet.

Det er viktig a understreke at variasjonen innenfor hvert kjoenn er stor – mange kvinner er sterkere, raskere eller mer utholdende enn mange menn. Kjoensforskjellene beskriver gjennomsnittlige forskjeller pa gruppenivaa, ikke absolutte grenser for hva enkeltpersoner kan oppnaa.`,
    },
    {
      id: 'tr3-2-5-def1',
      type: 'definition',
      title: 'Testosteron og oestrogen',
      content: 'Testosteron er det dominerende kjoenshormonet hos menn, produsert hovedsakelig i testiklene. Det fremmer muskelvekst, beinoppbygging, produksjon av roede blodceller og fettforbrenning. Menn har 10-20 ganger hoeyere testosteronnivaaer enn kvinner. Oestrogen er det dominerende kjoenshormonet hos kvinner, produsert hovedsakelig i eggstokkene. Det regulerer menstruasjonssyklusen, fremmer fettlagring, beskytter knoklene og pavirker ligamentelastisitet.',
    },
    {
      id: 'tr3-2-5-text1',
      type: 'text',
      title: 'Fysiologiske forskjeller',
      content: `De viktigste fysiologiske forskjellene mellom menn og kvinner som pavirker treningskapasitet:

**Kroppsstoerrelse og -sammensetning**
- Menn er i gjennomsnitt 10-15 cm hoeyere og 10-15 kg tyngre
- Menn har gjennomsnittlig 35-45 % muskelmasse, kvinner 28-35 %
- Kvinner har gjennomsnittlig 20-25 % kroppsfett, menn 12-18 %
- Menns hoeyere muskelmasse skyldes hovedsakelig testosteronens anabole effekt

**Hjerte- og karsystemet**
- Menn har gjennomsnittlig stoerre hjerte og hoeyere slagvolum
- Menn har hoeyere hemoglobinnivaa (14-18 vs. 12-16 g/dL), som gir bedre oksygentransport
- VO2maks er gjennomsnittlig 15-30 % hoeyere hos menn
- Forskjellen reduseres til 10-15 % nar VO2maks uttrykkes per kg kroppsvekt

**Muskelstyrke**
- Menn er gjennomsnittlig 40-60 % sterkere i overkroppen
- Forskjellen i underkroppen er mindre: 25-30 %
- Per kilo muskelmasse er styrkeforskjellen minimal (5-10 %)
- Muskelkvaliteten (kraft per tverrsnitt) er tilnaermet lik

**Bevegelighet**
- Kvinner er gjennomsnittlig mer bevegelige enn menn
- Oestrogen pavirker ligamenter og bindevev og gjor dem mer elastiske
- Denne forskjellen er tydeligst i hofter, skuldre og ryggsoeyle

**Metabolisme**
- Kvinner bruker relativt mer fett som energikilde under moderat intensitet
- Menn bruker relativt mer karbohydrater
- Kvinner har bedre fettoksidasjon under langvarig aktivitet
- Dette kan gi kvinner en relativ fordel i ultrautholdenhetsaktiviteter`,
    },
    {
      id: 'tr3-2-5-text2',
      type: 'text',
      title: 'Menstruasjonssyklusen og trening',
      content: `Menstruasjonssyklusen pavirker kvinners fysiologi og kan ha konsekvenser for treningsplanlegging:

**Menstruasjonssyklusens faser:**

**1. Menstruasjonsfasen (dag 1-5)**
- Oestrogen og progesteron er pa sitt laveste
- Noen opplever smerter, tretthet og nedsatt motivasjon
- Prestasjon trenger ikke vaere pavirket – individuelle forskjeller er store

**2. Follikkelfasen (dag 6-14)**
- Oestrogen stiger gradvis
- Mange opplever okt energi og styrke
- Kan vaere gunstig for tung styrketrening og intensive okter

**3. Ovulasjon (rundt dag 14)**
- Oestrogen er pa sitt hoeyeste
- Okt ligamentelastisitet kan gi lett okt skaderisiko (saerlig korsbandskader)
- Vaer oppmerksom pa leddstabilitet

**4. Lutealfasen (dag 15-28)**
- Progesteron stiger, oestrogen synker
- Kan oppleve okt kroppstemperatur, vaeskeretensjon og PMS-symptomer
- Utholdenhetsprestasjon kan vaere noe redusert hos noen

**Viktige poenger:**
- De individuelle forskjellene er mye stoerre enn de gjennomsnittlige sykluseffektene
- De fleste kvinner kan trene normalt gjennom hele syklusen
- Lyttil kroppen og tilpass om nodvendig, men ikke bruk syklusen som unnskyldning for a ikke trene
- Manglende menstruasjon (amenore) hos aktive kvinner er et alvorlig varselsignal som krever medisinsk oppfolging`,
    },
    {
      id: 'tr3-2-5-def2',
      type: 'definition',
      title: 'Den kvinnelige idrettsutoeverens triade',
      content: 'Den kvinnelige idrettsutoeverens triade (naa del av RED-S) er en tilstand bestaaende av tre sammenhengende problemer: lav energitilgjengelighet (for lite mat i forhold til aktivitet), menstruasjonsforstyrrelser (uregelmessig eller manglende menstruasjon) og redusert beinmineraltetthet (oekt risiko for stressfrakturer og osteoporose). Tilstanden er spesielt vanlig i idretter med vektklasser, estetisk vurdering eller der lav kroppsvekt anses fordelaktig.',
    },
    {
      id: 'tr3-2-5-text3',
      type: 'text',
      title: 'Tilpasning av trening basert pa kjoenn',
      content: `Mens de grunnleggende treningsprinsippene er de samme for bade menn og kvinner, finnes det noen relevante tilpasninger:

**Styrketrening**
- Kvinner responderer like godt pa styrketrening som menn (relativt sett)
- Kvinner bygger sjelden like stor muskelmasse som menn pa grunn av lavere testosteronnivaaer
- Kvinner kan ofte taale hoeyere treningsvolum og kortere pauser mellom sett
- Overkroppen har stoeorst forbedringspotensial hos mange kvinner

**Korsbaandskader**
- Kvinner har 2-8 ganger hoeyere risiko for korsbaandskader enn menn
- Aarsaker: hoeyere ligamentelastisitet, smalere knevinkel (Q-vinkel), hormonelle svingninger, nevromuskulaere kontrollmoenstre
- Forebygging: spesifikke landingsteknikkovelser, styrking av hamstrings og hoftemuskulatur, balansetrening, nevromuskulaer trening (FIFA 11+)

**Graviditet og trening**
- Trening under graviditet er trygt og anbefalt for de fleste friske kvinner
- Anbefalinger: moderat intensitet, unnga kontaktidretter og aktiviteter med fallrisiko
- Bekkenbunnstrening er spesielt viktig
- Etter foedsel: gradvis opptrapping, vurder bekkenbunnsfunksjonen foerst

**Overgangsalderen (menopausen)**
- Oestrogennivaaet synker kraftig, noe som oeker risikoen for osteoporose
- Styrketrening og vektbaerende aktiviteter er spesielt viktige
- Varierte treningsformer anbefales for a motvirke okt kroppsfett og muskeltap
- Trening kan lindre klimakteriesymptomer som hetetokter og soevnproblemer

**Generelt for begge kjoenn:**
- Tren det du vil trene – det finnes ingen ovelser som er forbeholdt ett kjoenn
- Kvinner boer ikke vaere redde for styrketrening – det gir ikke automatisk stor muskelmasse
- Menn boer ogsa trene bevegelighet og mobilitet
- Individuell tilpasning er viktigere enn kjoensbaserte retningslinjer`,
    },
    {
      id: 'tr3-2-5-example1',
      type: 'example',
      title: 'Korsbaandskader og forebygging',
      problem: 'En jenteklubb i handball har hatt tre korsbaandskader siste sesong. Forklar hvorfor kvinner er mer utsatt, og foreslaa forebyggende tiltak.',
      solution: `**Hvorfor kvinner er mer utsatt for korsbaandskader:**

1. **Anatomiske faktorer:** Kvinner har generelt smalere interkondylaergruve (der korsbanddet loper), stoerre Q-vinkel (vinkel mellom hofta og kneet, som gir mer valgustress) og bredere bekken.

2. **Hormonelle faktorer:** Oestrogen pavirker ligamentelastisiteten, og korsbanddet har ooestrogenreseptorer. Rundt ovulasjon (hoeyest oestrogen) kan ligamentelastisiteten oeke, noe som kan gjore korsbanddet mer saarbart.

3. **Nevromuskulaere faktorer:** Kvinner lander oftere med strake knaar, innoverroterte knaar (valgus) og dominans av quadriceps over hamstrings. Dette belagstningsmonsteret oeker kraften pa korsbanddet.

**Forebyggende tiltak:**
- **FIFA 11+ programmet:** 15 minutter oppvarming med loping, styrke, balanse og spenst, dokumentert a redusere korsbaandskader med 50-70 %
- **Landingstrening:** Oeve pa a lande med boyede knaar, knarne over taerne, myk landing
- **Styrking av hamstrings og hoftemuskulatur:** Hamstrings er korsbandets viktigste muskulaere beskytter
- **Balansetrening:** Forbedrer propriosepsjon og reaktiv leddstabilitet
- **Plyometrisk trening:** Oever eksplosive bevegelser med korrekt teknikk
- **Bevissthet:** Laer spillerne a gjenkjenne risikosituasjoner (landing, retningsforandring)

Programmet bor gjennomfoeres som del av oppvarming minst 2-3 ganger per uke gjennom hele sesongen.`,
    },
    {
      id: 'tr3-2-5-note1',
      type: 'note',
      title: 'Styrketrening gjor deg ikke stor og maskulin',
      content: 'En vanlig myte er at kvinner som trener styrke blir store og maskuline. Virkeligheten er at kvinner har 10-20 ganger lavere testosteronnivaaer enn menn, noe som gjor det fysiologisk svart vanskelig a bygge store muskler. Styrketrening gir kvinner strammere muskler, bedre holdning, sterkere knokler, raskere forbrenning og bedre funksjonalitet – uten uonsket maskulinisering.',
    },
    {
      id: 'tr3-2-5-tip1',
      type: 'tip',
      title: 'Like prinsipper, individuell tilpasning',
      content: 'De grunnleggende treningsprinsippene (overbelastning, spesifisitet, progresjon, variasjon, restitusjon) gjelder uavhengig av kjoenn. Den viktigste tilpasningen er individuell, ikke kjoensbasert. To kvinner kan ha veldig forskjellige treningsbehov, akkurat som to menn. Bruk kjoensforskjeller som bakgrunnskunnskap, men la individet styre tilpasningen.',
    },
    {
      id: 'tr3-2-5-ex-block1',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-5-ex1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvor mye hoeyere er menns gjennomsnittlige testosteronnivaa sammenlignet med kvinners?',
        options: [
          { id: 'a', text: 'Ca. 2-3 ganger hoeyere', isCorrect: false },
          { id: 'b', text: 'Ca. 5-8 ganger hoeyere', isCorrect: false },
          { id: 'c', text: 'Ca. 10-20 ganger hoeyere', isCorrect: true },
          { id: 'd', text: 'Ca. 50-100 ganger hoeyere', isCorrect: false },
        ],
        hints: ['Testosteron er hovedaarsaken til forskjeller i muskelmasse mellom kjoennene.'],
        solution: 'Menn har 10-20 ganger hoeyere testosteronnivaaer enn kvinner. Dette er hovedaarsaken til forskjeller i muskelmasse og styrke mellom kjoennene etter puberteten.',
      },
    },
    {
      id: 'tr3-2-5-ex-block2',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-5-ex2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvor mange ganger hoeyere risiko har kvinner for korsbaandskader sammenlignet med menn?',
        options: [
          { id: 'a', text: 'Lik risiko', isCorrect: false },
          { id: 'b', text: '2-8 ganger hoeyere', isCorrect: true },
          { id: 'c', text: '10-15 ganger hoeyere', isCorrect: false },
          { id: 'd', text: 'Lavere risiko enn menn', isCorrect: false },
        ],
        solution: 'Kvinner har 2-8 ganger hoeyere risiko for korsbaandskader enn menn. Arsaker inkluderer anatomiske forskjeller (Q-vinkel, ligamentelastisitet), hormonelle faktorer og nevromuskulaere kontrollmoenstre. Forebyggende trening kan redusere denne risikoen betydelig.',
      },
    },
    {
      id: 'tr3-2-5-ex-block3',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-5-ex3',
        number: '3',
        type: 'classic',
        task: 'Forklar de viktigste fysiologiske forskjellene mellom menn og kvinner nar det gjelder muskelstyrke.',
        subTasks: [
          {
            label: 'a',
            task: 'Hvor stor er styrkeforskjellen i over- og underkropp?',
            solution: 'Menn er gjennomsnittlig 40-60 % sterkere i overkroppen og 25-30 % sterkere i underkroppen. Forskjellen er stoerst i overkroppen fordi menn har relativt mer muskelmasse her.',
            multipleChoiceOptions: [
              '40-60 % i overkropp, 25-30 % i underkropp',
              '10 % i bade over- og underkropp',
              '80-90 % i begge',
              'Ingen forskjell',
            ],
          },
          {
            label: 'b',
            task: 'Hva skjer med styrkeforskjellen nar man sammenligner styrke per kilo muskelmasse?',
            solution: 'Nar styrke uttrykkes per kilo muskelmasse (muskelkvalitet), reduseres forskjellen til bare 5-10 %. Dette viser at muskelkvaliteten er tilnaermet lik mellom kjoennene, og at den absolute styrkeforskjellen hovedsakelig skyldes forskjell i muskelmasse.',
          },
        ],
        solution: 'Menn er i gjennomsnitt sterkere enn kvinner, men forskjellen skyldes hovedsakelig stoerre muskelmasse pa grunn av hoeyere testosteronnivaaer. Per kilo muskelmasse er styrkeforskjellen minimal, noe som viser at muskelkvaliteten er lik.',
      },
    },
    {
      id: 'tr3-2-5-ex-block4',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-5-ex4',
        number: '4',
        type: 'classic',
        task: 'Forklar den kvinnelige idrettsutoeverens triade (RED-S). Beskriv de tre komponentene og hvordan de henger sammen.',
        solution: 'Den kvinnelige idrettsutoeverens triade (naa regnet som del av RED-S) bestaar av tre sammenkoblede problemer:\n\n1. Lav energitilgjengelighet: Energiinntaket fra mat er for lavt i forhold til energiforbruket fra trening og daglige funksjoner. Dette kan vaere bevisst (restriktiv spising) eller ubevisst (underestimering av energibehov).\n\n2. Menstruasjonsforstyrrelser: Lav energitilgjengelighet forer til at kroppen nedprioriterer reproduktive funksjoner. Hormonproduksjonen (oestrogen, progesteron) reduseres, noe som gir uregelmessig eller manglende menstruasjon (amenore).\n\n3. Redusert beinmineraltetthet: Lavt oestrogennivaa, kombinert med utilstrekkelig naering (kalsium, vitamin D, energi), forer til redusert beinoppbygging og okt beinnedbrytning. Resultatet er svakere knokler, okt risiko for stressfrakturer og potensielt tidlig osteoporose.\n\nDe tre komponentene henger sammen i en ond sirkel: lav energi forer til hormonforstyrrelser, som forer til svakere knokler, som oeker risikoen for skader, som kan fore til enda mer restriktiv spising. Forebygging krever bevissthet, tilstrekkelig naering og et sunt idrettsmiljoe.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr3-2-5-ex-block5',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-5-ex5',
        number: '5',
        type: 'classic',
        task: 'Forklar hvordan menstruasjonssyklusens ulike faser kan pavirke treningskapasitet, og diskuter i hvilken grad det bor pavirke treningsplanlegging.',
        solution: 'Menstruasjonssyklusen har fire faser som kan pavirke treningskapasitet:\n\nMenstruasjonsfasen (dag 1-5): Lave hormonnivaaer, noen opplever kramper, tretthet og nedsatt motivasjon. Forskning viser imidlertid at prestasjonsevnen sjelden er vesentlig redusert.\n\nFollikkelfasen (dag 6-14): Okt oestrogen kan gi okt energi, bedre restitusjon og hoeyere styrke. Mange opplever dette som en god periode for intensiv trening.\n\nOvulasjon (rundt dag 14): Hoeyest oestrogennivaa kan gi okt ligamentelastisitet og noe hoeyere skaderisiko.\n\nLutealfasen (dag 15-28): Okt progesteron og kroppstemperatur, mulig vaeskeretensjon og PMS. Noen opplever redusert utholdenhetsprestasjon.\n\nNaar det gjelder treningsplanlegging: De individuelle variasjonene er langt stoerre enn de gjennomsnittlige sykluseffektene. De fleste kvinner kan trene normalt gjennom hele syklusen. Syklusbasert treningsplanlegging kan vaere nyttig for noen, men bor ikke brukes som en absolutt mal. Det viktigste er a lytte til kroppen og tilpasse individuelt, fremfor a folge rigide syklusbaserte modeller.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr3-2-5-ex-block6',
      type: 'exercise',
      exercise: {
        id: 'tr3-2-5-ex6',
        number: '6',
        type: 'classic',
        task: 'Diskuter hvorfor det er viktig at kvinner driver med styrketrening, saerlig i lys av livsfaser som overgangsalder og alderdom.',
        solution: 'Styrketrening er spesielt viktig for kvinner gjennom hele livet, og betydningen oeker med alderen:\n\nFor puberteten og ungdom: Styrketrening bygger beinmasse. Maksimal beinmasse oppnaas rundt 25-30 ar, og jo hoeyere toppverdi, jo bedre beskyyttelse mot osteoporose senere.\n\nVoksen alder: Styrketrening vedlikeholder muskelmasse, styrker knokler, forbedrer metabolsk helse og forebygger belastningsskader. Det gir ogsa bedre holdning og funksjonalitet.\n\nOvergangsalderen: Nar oestrogennivaaet synker, mister kvinner den beskyttende effekten oestrogen har pa knoklene. Beinmassen kan synke raskt. Styrketrening og vektbaerende aktiviteter er det mest effektive tiltaket (utenom medisiner) for a bremse beintapet. I tillegg motvirker styrketrening oekningen i kroppsfett og tapet av muskelmasse som folger med overgangsalderen. Trening kan ogsa lindre klimakteriesymptomer som hetetokter og soevnforstyrrelser.\n\nAlderdom: Kvinner lever i gjennomsnitt lenger enn menn, men har hoeyere risiko for osteoporose og hoftebrudd. Styrketrening vedlikeholder funksjonsevne, forebygger fall og opprettholder selvstendighet. En sterk 80 ar gammel kvinne kan bo selvstendig, mens en svak jevnaldrende kan vaere avhengig av hjelp.\n\nKonklusjon: Styrketrening er en livslang investering i helse og funksjonsevne for kvinner, og den relative betydningen oeker med alderen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Eksport av alle kapitler i seksjon 2
// ============================================================================

export const TRENING_3_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_3_2_1,
  CHAPTER_TRENING_3_2_2,
  CHAPTER_TRENING_3_2_3,
  CHAPTER_TRENING_3_2_4,
  CHAPTER_TRENING_3_2_5,
];
