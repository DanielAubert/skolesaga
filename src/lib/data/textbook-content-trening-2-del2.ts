/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Treningslare 2 (VG3) - Seksjon 2: Avansert styrketrening
 * Kapittel 2.1-2.5
 * Folger LK20 lareplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 2.1: Maksimal styrke
// ============================================================================

export const CHAPTER_TRENING_2_2_1: TextbookChapter = {
  id: 'trening-2-2-1',
  courseId: 'trening-2',
  chapterNumber: '2.1',
  title: 'Maksimal styrke',
  description: 'Forstaa 1RM-testing, nevral styrke og motorisk rekruttering for utvikling av maksimal styrke.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forstaa begrepet maksimal styrke og metoder for aa teste det',
    'kunne forklare nevrale mekanismer bak styrkeutvikling',
    'kjenne til prinsippene for trening av maksimal styrke',
  ],
  content: [
    {
      id: 'tr2-2-1-intro',
      type: 'text',
      content: `# Maksimal styrke

Maksimal styrke er den storste kraften en muskel eller muskelgruppe kan produsere i en enkelt, viljestyrt kontraksjon. Det er en av de mest fundamentale egenskapene innen styrketrening, og utgjor grunnlaget for de fleste andre styrkeegenskaper som eksplosiv kraft, styrkeutholdenhetsevne og kraftutvikling.

I dette kapittelet skal vi se naermere paa hvordan maksimal styrke defineres og testes, hvilke nevrale mekanismer som ligger bak, og hvordan trening kan tilpasses for aa utvikle denne egenskapen mest mulig effektivt. Vi skal ogsaa se paa forskjellen mellom nevrale og strukturelle tilpasninger, og hvorfor nybegynnere ofte opplever rask styrkeframgang uten tilsvarende muskelvekst.

For utovere paa toppnivaa er maksimal styrke en avgjorende prestasjonsfaktor i idretter som vektlofting, bryting, kasteovelser og sprint. Men ogsaa for mosjonister og eldre er maksimal styrke viktig for funksjonell kapasitet og skadeforebygging.`,
    },
    {
      id: 'tr2-2-1-def1',
      type: 'definition',
      title: '1RM (en repetisjons maksimum)',
      content: '1RM er den tyngste vekten en person kan lofte en gang med korrekt teknikk gjennom fullt bevegelsesomfang i en gitt ovelse. Det er gullstandarden for aa maale maksimal styrke. 1RM uttrykkes i kilogram og brukes som referanseverdi for aa beregne treningsbelastninger, for eksempel 80 % av 1RM.',
    },
    {
      id: 'tr2-2-1-text1',
      type: 'text',
      title: 'Testing av maksimal styrke',
      content: `Det finnes flere metoder for aa teste maksimal styrke:

**Direkte 1RM-testing**
- Utoveren jobber seg opp til den tyngste vekten han eller hun klarer for en repetisjon
- Krever god oppvarming og gradvis opptrapping
- Protokoll: Varm opp med 5-10 reps paa 50 %, deretter 3-5 reps paa 70 %, 1-2 reps paa 85 %, og forsok paa 1RM
- Hvile mellom forsok: 3-5 minutter
- Fordeler: Mest noyaktig maal paa faktisk maksimal styrke
- Ulemper: Krever erfaring og god teknikk, skaderisiko ved daarlig utforelse

**Indirekte 1RM-estimering (submaksimal testing)**
- Utoveren lofter en gitt vekt til utmattelse med flere repetisjoner
- 1RM estimeres med formler, for eksempel Epley-formelen:
  - 1RM = vekt x (1 + repetisjoner / 30)
- Eksempel: Dersom du tar 80 kg i 8 repetisjoner, estimeres 1RM til 80 x (1 + 8/30) = ca. 101 kg
- Fordeler: Tryggere, spesielt for nybegynnere
- Ulemper: Estimatet blir mindre noyaktig jo flere repetisjoner som utfores

**Isometrisk styrketesting**
- Maalinger av maksimal kraft i en fast vinkel med dynamometer
- Brukes i forskning og klinisk testing
- Gir ikke informasjon om dynamisk styrke gjennom fullt bevegelsesomfang`,
    },
    {
      id: 'tr2-2-1-def2',
      type: 'definition',
      title: 'Nevral styrke',
      content: 'Nevral styrke refererer til nervesystemets evne til aa aktivere muskulaturen effektivt. Dette inkluderer rekruttering av motoriske enheter, fyringsfrekvens (hvor raskt nervesignalene sendes), synkronisering av motoriske enheter og intermuskulaer koordinasjon (samspill mellom muskler). Nevrale tilpasninger er den primaere aarsaken til styrkeframgang de forste 6-8 ukene av et treningsprogram.',
    },
    {
      id: 'tr2-2-1-text2',
      type: 'text',
      title: 'Nevrale mekanismer bak styrke',
      content: `Styrke er ikke bare avhengig av muskelens storrelse. Nervesystemet spiller en avgjorende rolle for hvor mye kraft du kan produsere. De viktigste nevrale mekanismene er:

**1. Motorisk rekruttering**
Muskler er organisert i motoriske enheter, der hver motorisk enhet bestaar av en motorisk nervecelle og alle muskelfibrene den styrer. Ved lav kraftinnsats rekrutteres kun smaa motoriske enheter med type I-fibre. Nar kraftbehovet oker, rekrutteres stadig storre enheter med type II-fibre. Dette folger Henneman-prinsippet (storrelsessorteringsprinsippet).

Trening av maksimal styrke forbedrer evnen til aa rekruttere de storste og kraftigste motoriske enhetene, noe som er avgjorende for aa generere hoye krefter.

**2. Fyringsfrekvens (rate coding)**
Styrken oker ogsaa med okt fyringsfrekvens i de motoriske nervecellene. Raskere signalfrekvens gir sterkere og raskere kontraksjon. Utrente personer utnytter typisk bare 70-80 % av sitt nevrale potensial, mens veltrente kan aktivere opp mot 95 %.

**3. Synkronisering**
I en utrent person fyrer de motoriske enhetene asynkront. Med trening laerer nervesystemet aa synkronisere fyringen, slik at flere enheter produserer kraft samtidig. Dette gir en merkbar okning i maksimal kraft.

**4. Intermuskulaer koordinasjon**
Effektiv styrke krever at agonister, synergister og stabilisatorer samarbeider optimalt, mens antagonistene avspennes i riktig grad. Denne koordinasjonen forbedres med spesifikk ovelse.`,
    },
    {
      id: 'tr2-2-1-note1',
      type: 'note',
      title: 'Hvorfor nybegynnere blir sterke uten aa bli storre',
      content: 'De forste 6-8 ukene av et styrketreningsprogram ser man ofte stor framgang i styrke uten tilsvarende okning i muskelstorrelse. Dette skyldes at de nevrale tilpasningene skjer raskere enn de strukturelle. Hjernen laerer aa rekruttere flere motoriske enheter, oker fyringsfrekvensen og forbedrer koordinasjonen. Muskelvekst (hypertrofi) krever lengre tid og oppstaar vanligvis etter 8-12 uker med regelmessig trening.',
    },
    {
      id: 'tr2-2-1-example1',
      type: 'example',
      title: 'Beregning av 1RM med Epley-formelen',
      problem: 'En utover klarer 100 kg i benkpress for 5 repetisjoner. Estimer 1RM med Epley-formelen.',
      solution: `**Epley-formelen:** 1RM = vekt x (1 + repetisjoner / 30)

1RM = 100 x (1 + 5/30)
1RM = 100 x (1 + 0,167)
1RM = 100 x 1,167
**1RM = ca. 117 kg**

Dette betyr at utoverens estimerte maksimale loft i benkpress er omtrent 117 kg. Dersom treneren onsker at utoveren skal trene paa 85 % av 1RM, blir det:
0,85 x 117 = ca. 99 kg

Merk at estimatet er mest noyaktig naar antall repetisjoner er lavt (under 10). Ved hoyere repetisjonstall oker usikkerheten.`,
    },
    {
      id: 'tr2-2-1-text3',
      type: 'text',
      title: 'Treningsmetoder for maksimal styrke',
      content: `For aa utvikle maksimal styrke brukes tunge belastninger og faa repetisjoner:

**Typiske treningsparametere:**
- Intensitet: 85-100 % av 1RM
- Repetisjoner: 1-5 per sett
- Sett: 3-6 per ovelse
- Pause mellom sett: 3-5 minutter (full restitusjon av nervesystemet)
- Tempo: Kontrollert eksentrisk fase, eksplosiv konsentrisk fase
- Frekvens: 2-4 okter per muskelgruppe per uke

**Vanlige programmodeller:**
- **5x5-metoden**: 5 sett med 5 repetisjoner paa 80-85 % av 1RM
- **Pyramidetrening**: Gradvis okning av vekt og reduksjon av repetisjoner (f.eks. 8-6-4-2-1)
- **Tunge singler**: Arbeid med 90-100 % av 1RM for 1-3 repetisjoner
- **Bolgeprogrammering**: Variasjon av intensitet og volum over uker og mesosykluser

**Viktige prinsipper:**
- Progressiv overbelastning er avgjorende: enten mer vekt, flere sett, eller bedre kvalitet
- God teknikk maa aldri ofres for tyngre vekter
- Tilstrekkelig restitusjon mellom okter er helt nodvendig
- Sammensatte ovelser (kneboey, markloeft, benkpress) gir storst nevral stimulering`,
    },
    {
      id: 'tr2-2-1-tip1',
      type: 'tip',
      title: 'Intensitetsstyring',
      content: 'Bruk prosentandeler av 1RM for aa styre treningsintensiteten. En enkel tommelfingerregel: 85 % av 1RM tilsvarer ca. 5 repetisjoner, 90 % tilsvarer ca. 3 repetisjoner, og 95 % tilsvarer ca. 1-2 repetisjoner. Test eller estimer 1RM jevnlig (hver 4-8 uke) for aa justere treningsvektene.',
    },
    {
      id: 'tr2-2-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-1-ex1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er 1RM?',
        options: [
          { id: 'a', text: 'Den vekten du kan lofte 10 ganger', isCorrect: false },
          { id: 'b', text: 'Den tyngste vekten du kan lofte en gang med korrekt teknikk', isCorrect: true },
          { id: 'c', text: 'Gjennomsnittsvekten du bruker i trening', isCorrect: false },
          { id: 'd', text: 'Vekten du varmer opp med', isCorrect: false },
        ],
        hints: ['RM staar for repetisjons maksimum.'],
        solution: '1RM (en repetisjons maksimum) er den tyngste vekten en person kan lofte en gang med korrekt teknikk gjennom fullt bevegelsesomfang. Det er gullstandarden for aa maale maksimal styrke.',
      },
    },
    {
      id: 'tr2-2-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-1-ex2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er den primaere aarsaken til styrkeframgang de forste 6-8 ukene av et treningsprogram?',
        options: [
          { id: 'a', text: 'Muskelvekst (hypertrofi)', isCorrect: false },
          { id: 'b', text: 'Okt beinmineraltetthet', isCorrect: false },
          { id: 'c', text: 'Nevrale tilpasninger (bedre rekruttering og koordinasjon)', isCorrect: true },
          { id: 'd', text: 'Okt blodvolum', isCorrect: false },
        ],
        solution: 'De forste ukene av styrketrening domineres styrkeframgangen av nevrale tilpasninger: bedre motorisk rekruttering, okt fyringsfrekvens, synkronisering av motoriske enheter og forbedret intermuskulaer koordinasjon. Hypertrofi kommer senere.',
      },
    },
    {
      id: 'tr2-2-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Forklar Henneman-prinsippet og dets betydning for styrketrening.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva sier Henneman-prinsippet (storrelsessorteringsprinsippet) om rekruttering av motoriske enheter?',
            solution: 'Henneman-prinsippet sier at motoriske enheter rekrutteres i stigende rekkefolge etter storrelse. Smaa motoriske enheter med type I-fibre rekrutteres forst, og ettersom kraftbehovet oker, rekrutteres stadig storre enheter med type II-fibre.',
            multipleChoiceOptions: [
              'Motoriske enheter rekrutteres fra smaa til store etter behov',
              'Alle motoriske enheter aktiveres samtidig',
              'De storste enhetene rekrutteres alltid forst',
              'Rekrutteringen er tilfeldig',
            ],
          },
          {
            label: 'b',
            task: 'Hvorfor maa man trene med tunge vekter for aa utvikle maksimal styrke?',
            solution: 'For aa rekruttere de storste motoriske enhetene med type IIx-fibre, som har hoeyest kraftpotensial, maa belastningen vaere hoey nok til at kroppen tvinges til aa aktivere disse enhetene. Med lette vekter vil kun de minste enhetene med type I-fibre vaere tilstrekkelig, og de store kraftfulle enhetene faar ikke treningsstimulus.',
          },
        ],
        solution: 'Henneman-prinsippet forklarer at motoriske enheter rekrutteres i stigende rekkefolge etter storrelse. Dette betyr at man maa bruke tunge belastninger for aa naa de storste, kraftigste motoriske enhetene, noe som er avgjorende for utvikling av maksimal styrke.',
      },
    },
    {
      id: 'tr2-2-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-1-ex4',
        number: '4',
        type: 'classic',
        task: 'En utover klarer 70 kg i kneboey for 8 repetisjoner. Bruk Epley-formelen til aa estimere 1RM, og beregn deretter treningsvekten for 85 % av 1RM.',
        solution: 'Epley-formelen: 1RM = vekt x (1 + repetisjoner / 30)\n1RM = 70 x (1 + 8/30) = 70 x 1,267 = ca. 89 kg\n85 % av 1RM = 0,85 x 89 = ca. 76 kg\nUtoveren bor trene med omtrent 76 kg for aa treffe 85 % av estimert 1RM.',
      },
    },
    {
      id: 'tr2-2-1-ex5',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-1-ex5',
        number: '5',
        type: 'classic',
        task: 'Sammenlign direkte 1RM-testing med submaksimal testing. Diskuter fordeler og ulemper med begge metoder, og anbefal hvilken metode som passer best for ulike utovergrupper.',
        solution: 'Direkte 1RM-testing gir det mest noyaktige maalet paa maksimal styrke, men krever god teknikk, erfaring og medforer noe skaderisiko. Den passer best for erfarne utovere i kontrollerte ovelser som benkpress og kneboey.\n\nSubmaksimal testing er tryggere og enklere aa gjennomfore, men estimatet blir mer unoyaktig ved hoeye repetisjonstall. Den passer best for nybegynnere, ungdom, eldre og i rehabiliteringssituasjoner.\n\nAnbefaling: Nybegynnere og ungdom bor bruke submaksimal testing med 5-8 repetisjoner. Erfarne utovere kan bruke direkte 1RM-testing i periodiseringsopplegg. I klinisk sammenheng er submaksimal testing tryggest.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr2-2-1-ex6',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-1-ex6',
        number: '6',
        type: 'classic',
        task: 'Lag et 4-ukers treningsprogram for aa utvikle maksimal styrke i kneboey. Angi intensitet (% av 1RM), repetisjoner, sett og pause for hver uke, og forklar progresjonen.',
        solution: 'Uke 1: 4 sett x 5 reps paa 80 % av 1RM, 3 min pause - Tilvenning og teknikkfokus.\nUke 2: 5 sett x 4 reps paa 85 % av 1RM, 3-4 min pause - Okt belastning, noe redusert volum.\nUke 3: 5 sett x 3 reps paa 90 % av 1RM, 4-5 min pause - Hoey intensitet, ytterligere volumnedgang.\nUke 4 (deload): 3 sett x 3 reps paa 75 % av 1RM, 3 min pause - Restitusjon for superkompenasjon.\n\nProgresjonen folger en lineaer periodisering der intensiteten oker og volumet reduseres over tre uker, etterfulgt av en lettere uke for restitusjon. Etter uke 4 kan man teste ny 1RM og starte en ny syklus med hoeyere utgangspunkt.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 2.2: Hypertrofi
// ============================================================================

export const CHAPTER_TRENING_2_2_2: TextbookChapter = {
  id: 'trening-2-2-2',
  courseId: 'trening-2',
  chapterNumber: '2.2',
  title: 'Hypertrofi',
  description: 'Forstaa mekanismene bak muskelvekst: mekanisk spenning, metabolsk stress og treningsvolumets rolle.',
  estimatedMinutes: 20,
  competenceGoals: [
    'kunne forklare de primaere mekanismene bak hypertrofi',
    'forstaa sammenhengen mellom treningsvolum og muskelvekst',
    'kjenne til forskjellen mellom myofibriller og sarkoplasmatisk hypertrofi',
  ],
  content: [
    {
      id: 'tr2-2-2-intro',
      type: 'text',
      content: `# Hypertrofi

Hypertrofi betyr okning i muskelens storrelse og er et av de mest ettertraktede resultatene av styrketrening. Enten maalet er bedre idrettsprestasjon, forbedret kroppssammensetning eller okt funksjonell kapasitet, er forstaelse av mekanismene bak muskelvekst helt sentralt.

Moderne forskning har identifisert flere mekanismer som driver hypertrofi, og det er blitt klart at treningsvolum, intensitet og programmering maa tilpasses for aa maksimere muskelveksten. I dette kapittelet dykker vi ned i vitenskapen bak hypertrofi og ser paa hvordan treningsvariabler kan manipuleres for aa oppnaa optimale resultater.`,
    },
    {
      id: 'tr2-2-2-def1',
      type: 'definition',
      title: 'Hypertrofi',
      content: 'Hypertrofi er okning i muskelcellenes storrelse, noe som forer til storre muskeltverrsnitt og okt kraftpotensial. Det skilles mellom myofibriller hypertrofi (okning i kontraktile proteiner som aktin og myosin, gir okt styrke) og sarkoplasmatisk hypertrofi (okning i cellevaeske, glykogen og andre ikke-kontraktile elementer, gir okt muskelvolum). Styrketrening fremmer begge typer, men forholdet pavirkes av treningsmetode.',
    },
    {
      id: 'tr2-2-2-text1',
      type: 'text',
      title: 'Mekanismer bak muskelvekst',
      content: `Forskning har identifisert tre hovedmekanismer som stimulerer hypertrofi:

**1. Mekanisk spenning**
Mekanisk spenning anses som den viktigste driveren for hypertrofi. Naar muskelen utsettes for hoey kraft, registrerer mekanosensorer i muskelcellene (spesielt i sarkolemma og cytoskjelettet) belastningen og sender signaler som starter proteinsyntesen. Jo storre mekanisk spenning over tid, desto sterkere vekststimulus.

Mekanisk spenning er produktet av kraft og tid under spenning. Bade tunge vekter med faa repetisjoner og moderate vekter med flere repetisjoner kan gi tilstrekkelig mekanisk spenning, men tunge belastninger gir typisk sterkere signal per repetisjon.

**2. Metabolsk stress**
Metabolsk stress oppstaar naar muskelen arbeider under delvis anaerobe forhold, noe som forer til opphopning av metabolitter som laktat, hydrogenioner og uorganisk fosfat. Denne metabolske belastningen trigger frigjoring av vekstfremmende hormoner og cellesignaler.

Metabolsk stress er grunnen til at moderat-tungt treningsarbeid med 8-15 repetisjoner og korte pauser er saerlig effektivt for hypertrofi. Den karakteristiske "pumpen" under trening er et tegn paa metabolsk stress.

**3. Muskelskade**
Mikroskopiske skader i muskelfibrene utloser en inflammatorisk respons og aktiverer satellittceller som bidrar til reparasjon og vekst. Eksentriske kontraksjoner gir mest muskelskade.

Merk: Moderat muskelskade er gunstig, men overdreven skade (som ved altfor hard trening) kan hemme veksten og forlenge restitusjonstiden. Muskelstolhet (DOMS) er ikke nodvendigvis et godt maal paa effektiv trening.`,
    },
    {
      id: 'tr2-2-2-def2',
      type: 'definition',
      title: 'Treningsvolum',
      content: 'Treningsvolum er den totale mengden arbeid utfort i trening, vanligvis beregnet som antall sett x repetisjoner x vekt (tonnasje), eller forenklet som antall arbeidsett per muskelgruppe per uke. Forskning viser at volum er den viktigste treningsvariabelen for hypertrofi, med en dose-respons-sammenheng der mer volum gir mer vekst opp til et visst punkt.',
    },
    {
      id: 'tr2-2-2-text2',
      type: 'text',
      title: 'Treningsvariabler for hypertrofi',
      content: `For aa optimalisere hypertrofi maa flere treningsvariabler styres riktig:

**Intensitet (% av 1RM)**
- Anbefalt omraade: 60-85 % av 1RM
- Mest vanlig: 65-75 % av 1RM (tilsvarer ca. 8-12 repetisjoner)
- Nyere forskning viser at ogsaa lavere intensiteter (30-50 % av 1RM) kan gi hypertrofi dersom settene utfores til naer utmattelse

**Repetisjoner**
- Klassisk hypertrofiomraade: 6-12 repetisjoner per sett
- Nyere forskning: Et bredere spekter (6-30 repetisjoner) kan vaere effektivt saa lenge innsatsen er hoey nok
- Variasjon i repetisjonsomraade kan vaere fordelaktig

**Sett per muskelgruppe per uke**
- Minimum for framgang: 10 sett per muskelgruppe per uke
- Optimalt for de fleste: 15-20 sett per muskelgruppe per uke
- Avanserte utovere kan ha nytte av opp til 20-30 sett
- Viktig: Volumet maa okes gradvis og tilpasses individets restitusjonskapasitet

**Pause mellom sett**
- 60-120 sekunder for aa opprettholde metabolsk stress
- Lengre pauser (2-3 min) kan vaere fordelaktig for aa opprettholde volum og kvalitet
- Kort pause gir mer metabolsk stress, lang pause gir bedre prestasjon per sett

**Frekvens**
- Minst 2 ganger per muskelgruppe per uke
- Fordelen med hoeyere frekvens er at volumet kan fordeles over flere okter
- Eksempel: 20 sett per uke fordelt paa 2 okter (10+10) er mer overkommelig enn 1 okt (20 sett)`,
    },
    {
      id: 'tr2-2-2-note1',
      type: 'note',
      title: 'Satellittceller og muskelvekst',
      content: 'Satellittceller er stamceller som ligger langs muskelfibrenes overflate i en inaktiv tilstand. Naar muskelfibre skades av trening, aktiveres satellittcellene, formerer seg og fusjonerer med de skadede fibrene. De donerer nye cellekjerner (myonuklei) til muskelfibrene, noe som oker cellens kapasitet for proteinsyntese. Denne prosessen er sentral for langsiktig muskelvekst, og forklarer hvorfor muskelminne eksisterer: ekstra cellekjerner beholdes selv etter en treningspause.',
    },
    {
      id: 'tr2-2-2-example1',
      type: 'example',
      title: 'Beregning av ukentlig treningsvolum',
      problem: 'En utover trener bryst to ganger i uken. Mandag gjor hun 4 sett benkpress og 3 sett flyes. Torsdag gjor hun 3 sett skraa benkpress og 3 sett brystpress i maskin. Beregn totalt ukentlig volum for bryst.',
      solution: `**Mandag:**
- Benkpress: 4 sett
- Flyes: 3 sett
- Totalt mandag: 7 sett

**Torsdag:**
- Skraa benkpress: 3 sett
- Brystpress i maskin: 3 sett
- Totalt torsdag: 6 sett

**Ukentlig volum for bryst: 7 + 6 = 13 sett**

Dette ligger i det nedre omraadet av det anbefalte volumet (10-20 sett per uke). For aa oke hypertrofiresponsen kan hun vurdere aa legge til 2-4 sett til per uke over tid, for eksempel et ekstra sett i hver ovelse.`,
    },
    {
      id: 'tr2-2-2-text3',
      type: 'text',
      title: 'Proteinsyntese og det anabole vinduet',
      content: `Etter en treningsokt oker muskelproteinsyntesen (MPS) i 24-48 timer. Denne perioden er avgjorende for muskelvekst, og det er viktig aa tilrettelegge for optimal restitusjon:

**Naering og timing:**
- Proteininntak paa 1,6-2,2 gram per kg kroppsvekt per dag er anbefalt for aa stotte hypertrofi
- Fordelingen over dagen er viktig: 20-40 gram protein per maaltid, spredt paa 3-5 maaltider
- Det finnes et "anabolt vindu" etter trening der kroppen er saerlig mottakelig for naering, men dette vinduet er bredere enn tidligere antatt (trolig 4-6 timer)

**Sovn og restitusjon:**
- Storstedelen av veksthormonproduksjonen skjer under dyp sovn
- 7-9 timer sovn per natt er anbefalt for optimal restitusjon
- Kronisk sovnmangel kan redusere proteinsyntesen med opptil 18 %

**Hormonell respons:**
- Styrketrening stimulerer frigjoring av testosteron, veksthormon og IGF-1
- Disse hormonene stotter proteinsyntese og muskelvekst
- Kronisk stress og overtrenning oker kortisolnivaet, som kan hemme anabole prosesser`,
    },
    {
      id: 'tr2-2-2-warning1',
      type: 'warning',
      title: 'Mer er ikke alltid bedre',
      content: 'Selv om hoeyere treningsvolum generelt gir mer hypertrofi, finnes det en ovre grense (MRV - Maximum Recoverable Volume) der mer trening faktisk hemmer veksten fordi restitusjonskapasiteten overskrides. Tegn paa for hoyt volum inkluderer: vedvarende stolhet, fallende prestasjoner, soevnproblemer, og nedsatt motivasjon. Etter perioder med hoyt volum bor det folge en deload-uke med redusert volum.',
    },
    {
      id: 'tr2-2-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-2-ex1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken mekanisme anses som den viktigste driveren for hypertrofi?',
        options: [
          { id: 'a', text: 'Metabolsk stress', isCorrect: false },
          { id: 'b', text: 'Muskelskade', isCorrect: false },
          { id: 'c', text: 'Mekanisk spenning', isCorrect: true },
          { id: 'd', text: 'Hormonell respons', isCorrect: false },
        ],
        solution: 'Mekanisk spenning anses som den primaere og viktigste mekanismen bak hypertrofi. Naar muskelen utsettes for kraft, registrerer mekanosensorer belastningen og igangsetter proteinsyntese. Metabolsk stress og muskelskade er sekundaere mekanismer.',
      },
    },
    {
      id: 'tr2-2-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-2-ex2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er anbefalt antall arbeidsett per muskelgruppe per uke for optimal hypertrofi?',
        options: [
          { id: 'a', text: '3-5 sett', isCorrect: false },
          { id: 'b', text: '5-10 sett', isCorrect: false },
          { id: 'c', text: '10-20 sett', isCorrect: true },
          { id: 'd', text: '30-40 sett', isCorrect: false },
        ],
        hints: ['Tenk paa dose-respons-sammenhengen for treningsvolum.'],
        solution: 'Forskning viser at 10-20 arbeidsett per muskelgruppe per uke er optimalt for de fleste. Minimum for framgang er omtrent 10 sett, og avanserte utovere kan ha nytte av opp til 20-30 sett. Volumet bor okes gradvis.',
      },
    },
    {
      id: 'tr2-2-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Forklar de tre hovedmekanismene bak hypertrofi.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er mekanisk spenning, og hvorfor er det viktig for muskelvekst?',
            solution: 'Mekanisk spenning er kraften som virker paa muskelfibrene under kontraksjon. Mekanosensorer i muskelcellene registrerer belastningen og sender signaler som igangsetter proteinsyntese. Det anses som den viktigste driveren for hypertrofi.',
            multipleChoiceOptions: [
              'Kraft paa muskelfibrene som trigger proteinsyntese via mekanosensorer',
              'Opphopning av laktat i musklene',
              'Riving av muskelfibrer som maa repareres',
              'Hormonell respons etter trening',
            ],
          },
          {
            label: 'b',
            task: 'Hva er metabolsk stress, og hvilke treningsmetoder fremmer det?',
            solution: 'Metabolsk stress oppstaar ved opphopning av metabolitter (laktat, hydrogenioner, uorganisk fosfat) under anaerobt muskelarbeid. Det fremmes av trening med moderate vekter (8-15 repetisjoner), korte pauser (60-90 sekunder) og hoeyt repetisjonsvolum. Den karakteristiske "pumpen" er et tegn paa metabolsk stress.',
          },
        ],
        solution: 'De tre hovedmekanismene er mekanisk spenning (kraft paa muskelfibrene), metabolsk stress (opphopning av metabolitter) og muskelskade (mikroskopiske fiberriss). Mekanisk spenning er viktigst, mens metabolsk stress og muskelskade bidrar som sekundaere mekanismer.',
      },
    },
    {
      id: 'tr2-2-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-2-ex4',
        number: '4',
        type: 'classic',
        task: 'En utover trener rygg tre ganger per uke med folgende opplegg: Mandag - 4 sett pulldowns + 3 sett roing. Onsdag - 3 sett pullups + 3 sett kabelroing. Fredag - 3 sett roing + 2 sett facepulls. Beregn totalt ukentlig volum og vurder om det er tilstrekkelig for hypertrofi.',
        solution: 'Mandag: 4 + 3 = 7 sett. Onsdag: 3 + 3 = 6 sett. Fredag: 3 + 2 = 5 sett. Totalt ukentlig volum: 7 + 6 + 5 = 18 sett for rygg. Dette ligger godt innenfor det anbefalte omraadet paa 10-20 sett per uke og er tilstrekkelig for god hypertrofirespons. Fordelingen over tre okter er gunstig fordi det gir hyppig proteinsyntesestimulering og overkommelig volum per okt.',
      },
    },
    {
      id: 'tr2-2-2-ex5',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-2-ex5',
        number: '5',
        type: 'classic',
        task: 'Forklar begrepet muskelminne og satelittcellenes rolle i hypertrofi. Hvorfor kan en person som har trent for gjenvinne muskelmasse raskere enn en som aldri har trent?',
        solution: 'Naar muskelfibre utsettes for treningsstimuli, aktiveres satellittceller som donerer nye cellekjerner (myonuklei) til fibrene. Disse ekstra kjernene oker cellens kapasitet for proteinsyntese. Det sentrale med muskelminne er at disse kjernene beholdes selv etter en lang treningspause, selv om muskelmassen avtar. Naar personen begynner aa trene igjen, har muskelfibrene allerede et hoeyere antall kjerner og kan dermed oke proteinsyntesen raskere enn hos en som aldri har trent og maa bygge opp cellekjerner fra starten. Derfor opplever de som har trent for en raskere gjenvinning av muskelmasse.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr2-2-2-ex6',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-2-ex6',
        number: '6',
        type: 'classic',
        task: 'Diskuter forskjellen mellom myofibriller hypertrofi og sarkoplasmatisk hypertrofi. Hvilken treningsform fremmer primert hvilken type, og hva er de praktiske konsekvensene for en utover?',
        solution: 'Myofibriller hypertrofi innebarer okning i kontraktile proteiner (aktin og myosin), noe som gir okt styrke i tillegg til storre muskler. Denne typen fremmes av tung trening med lavt repetisjonstall (1-6 reps) og hoey intensitet.\n\nSarkoplasmatisk hypertrofi innebarer okning i ikke-kontraktile elementer som cellevaeske, glykogen, mitokondrier og enzymer. Dette gir okt muskelvolum, men ikke proporsjonalt okt styrke. Denne typen fremmes av moderat trening med hoeyere repetisjonstall (8-15 reps) og kortere pauser.\n\nPraktiske konsekvenser: En vektlofter bor prioritere myofibriller hypertrofi for aa oke styrken per kilo kroppsvekt. En kroppsbygger vil dra nytte av begge typer for maksimalt muskelvolum. De fleste utovere bor kombinere begge tilnaerminger gjennom periodisering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 2.3: Eksplosiv styrke og power
// ============================================================================

export const CHAPTER_TRENING_2_2_3: TextbookChapter = {
  id: 'trening-2-2-3',
  courseId: 'trening-2',
  chapterNumber: '2.3',
  title: 'Eksplosiv styrke og power',
  description: 'Forstaa kraftutviklingshastighet (RFD), plyometrisk trening og ballistiske metoder for eksplosiv styrke.',
  estimatedMinutes: 20,
  competenceGoals: [
    'kunne forklare begrepet kraftutviklingshastighet (RFD) og dets betydning',
    'forstaa prinsippene bak plyometrisk trening og stretch-shortening cycle',
    'kjenne til ballistiske treningsmetoder og deres anvendelse',
  ],
  content: [
    {
      id: 'tr2-2-3-intro',
      type: 'text',
      content: `# Eksplosiv styrke og power

I mange idretter er det ikke nok aa vaere sterk - du maa ogsaa vaere rask. Eksplosiv styrke, ofte kalt power, er evnen til aa produsere stor kraft paa kort tid. Det er denne egenskapen som skiller en god sprinter fra en utmerket, og som gjer at en basketballspiller kan hoppe hoeyere enn en annen med samme maksimale styrke.

Power er definert som kraft multiplisert med hastighet (P = F x v). Det betyr at bade styrke og hurtighet er viktige komponenter, og trening for eksplosivitet maa adressere begge. I dette kapittelet skal vi utforske de fysiologiske grunnlagene for eksplosiv styrke, og se paa treningsmetoder som plyometri og ballistisk trening.`,
    },
    {
      id: 'tr2-2-3-def1',
      type: 'definition',
      title: 'Rate of Force Development (RFD)',
      content: 'Rate of Force Development (RFD), eller kraftutviklingshastighet, er et maal paa hvor raskt en muskel kan produsere kraft. Det maales som endring i kraft per tidsenhet (N/s) og er avgjorende i idretter der bevegelsestiden er kort, som sprint (kontakttid 80-100 ms), hopp og kast. Hoey RFD betyr at utoveren kan generere stor kraft i lopet av svart kort tid.',
    },
    {
      id: 'tr2-2-3-text1',
      type: 'text',
      title: 'Kraft-hastighetsforholdet',
      content: `Forholdet mellom kraft og hastighet i muskelkontraksjoner folger en invers kurve: jo hoeyere hastigheten er, desto lavere er kraften muskelen kan produsere, og omvendt.

**Kraft-hastighetskurven viser at:**
- Ved lav hastighet (tunge loft) kan muskelen produsere hoey kraft
- Ved hoey hastighet (raske bevegelser) er kraften lavere
- Power (kraft x hastighet) er maksimal ved ca. 30-60 % av maksimal kraft og hastighet

**Betydning for trening:**
Ulike posisjoner paa kraft-hastighetskurven krever ulik trening:
- **Styrkesiden** (hoey kraft, lav hastighet): Tung styrketrening med 85-100 % av 1RM
- **Midt paa kurven** (moderat kraft og hastighet): Olympiske loft, medisinballkast
- **Hastighetssiden** (lav kraft, hoey hastighet): Sprinttrening, lette ballistiske ovelser

For aa utvikle eksplosivitet bor utovere trene hele spekteret, med saerlig vekt paa den delen av kurven som er mest relevant for deres idrett. En sprinter trenger mer hastighetsarbeid, mens en brytar trenger mer arbeid paa styrkesiden.`,
    },
    {
      id: 'tr2-2-3-def2',
      type: 'definition',
      title: 'Stretch-Shortening Cycle (SSC)',
      content: 'Stretch-Shortening Cycle (SSC), eller strekk-forkortingssyklusen, er en bevegelsesmekanisme der muskelen forst strekkes eksentrisk (forlaenges under belastning) og deretter kontraherer konsentrisk (forkortes). Den eksentriske fasen lagrer elastisk energi i sener og muskelfibre, og aktiverer strekkerefleksen, noe som gir en kraftigere og raskere konsentrisk kontraksjon enn om bevegelsen startet fra stillstand. Eksempler: hopp med forhopp (countermovement jump), loeping og kast.',
    },
    {
      id: 'tr2-2-3-text2',
      type: 'text',
      title: 'Plyometrisk trening',
      content: `Plyometrisk trening er spesialdesignet for aa forbedre stretch-shortening cycle og dermed eksplosiv kraft. Metodene baserer seg paa raske, kraftige bevegelser med kort kontakttid.

**Grunnprinsipper for plyometri:**
- Kort kontakttid med bakken (minimal amortiseringsfase)
- Maksimal innsats i hver repetisjon
- Full restitusjon mellom sett og repetisjoner
- Kvalitet over kvantitet - ikke tren plyometri i utmattet tilstand

**Progresjon i plyometrisk trening:**

**Nivaa 1 - Lav intensitet:**
- Hoppetau
- Smaa hopp paa stedet
- Anklehopp (rask hoppebevegelse fra anklene)

**Nivaa 2 - Moderat intensitet:**
- Bokshopp (box jumps)
- Sidehopp (lateral bounds)
- Medisinballkast

**Nivaa 3 - Hoey intensitet:**
- Dybdehopp (depth jumps) fra 30-80 cm
- Single-leg bounds
- Reactive hurdle jumps

**Nivaa 4 - Svart hoey intensitet:**
- Dybdehopp med ekstra last
- Shock jumps fra store hoyder
- Kombinasjonsovelser med vekter

**Volum og restitusjon:**
- Nybegynnere: 60-100 bakkekontakter per okt
- Avanserte: 100-150 bakkekontakter per okt
- Minst 48-72 timer restitusjon mellom plyometriske okter
- Plyometri bor gjores etter oppvarming og for styrketrening`,
    },
    {
      id: 'tr2-2-3-text3',
      type: 'text',
      title: 'Ballistisk trening',
      content: `Ballistisk trening skiller seg fra tradisjonell styrketrening ved at belastningen akselereres gjennom hele bevegelsesomfanget og slippes eller kastes. I tradisjonell styrketrening maa utoveren bremse vekten mot slutten av bevegelsen, noe som reduserer hastigheten og kraftutviklingen i den siste delen.

**Eksempler paa ballistiske ovelser:**
- **Medisinballkast**: Brystkast, overkast, rotasjonskast
- **Jump squats**: Kneboey med hopp i topposisjonen (med 20-40 % av 1RM)
- **Bench throw**: Benkpress der stangen kastes opp (i Smith-maskin med fangsystem)
- **Kettlebell swings**: Eksplosiv hoftestrekk med kettlebell

**Olympiske loft:**
Rykk (snatch) og stoet (clean and jerk) er klassiske ballistiske ovelser som krever maksimal kraftutvikling gjennom hele bevegelsen. De er blant de mest effektive ovelsene for aa utvikle power, men krever betydelig teknisk kompetanse.

**Treningsparametere for ballistisk trening:**
- Vekt: 30-60 % av 1RM (varierer med ovelsetype)
- Repetisjoner: 3-6 per sett (kvalitet er avgjorende)
- Sett: 3-6
- Pause: 2-4 minutter (full restitusjon av nervesystemet)
- Fokus: Maksimal hastighet og akselerasjon i hver repetisjon`,
    },
    {
      id: 'tr2-2-3-note1',
      type: 'note',
      title: 'Styrke som fundament for power',
      content: 'Maksimal styrke er fundamentet for eksplosiv styrke. Uten en solid styrkebase vil utoveren mangle kraften som trengs for aa generere hoey power. Forskning viser at utovere med hoeyere 1RM ogsaa tenderer til aa ha hoeyere power-output. Derfor bor perioder med maksimal styrketrening legges for perioder med power-fokusert trening i et periodisert treningsprogram.',
    },
    {
      id: 'tr2-2-3-example1',
      type: 'example',
      title: 'RFD i praksis - sprint vs. styrkeloft',
      problem: 'Forklar hvorfor RFD er viktigere for en sprinter enn for en styrkelofter, selv om styrkelofteren produserer storre absolutt kraft.',
      solution: `**Sprinteren:**
- Kontakttid med bakken er 80-100 millisekunder
- Utoveren har ekstremt kort tid til aa produsere kraft
- Hoey RFD er avgjorende fordi kun en brodel av maksimal kraft kan utnyttes paa saa kort tid
- En sprinter med bedre RFD produserer mer kraft i lopet av kontakttiden, noe som gir raskere akselerasjon

**Styrkelofteren:**
- Et tungt loft tar 1-3 sekunder aa fullfoere
- Utoveren har god tid til aa bygge opp kraft
- Absolutt kraftnivaa (1RM) er viktigere enn hastigheten kraften produseres med
- RFD er fortsatt viktig for starten av loftet, men total kraftutvikling veier tyngre

**Konklusjon:** Sprinteren trenger evnen til aa produsere mye kraft veldig raskt (hoey RFD), mens styrkelofteren primaert trenger aa produsere mest mulig kraft totalt. Begge trenger styrke, men vektleggingen av RFD vs. absolutt styrke er ulik.`,
    },
    {
      id: 'tr2-2-3-tip1',
      type: 'tip',
      title: 'Kontrasttrening',
      content: 'Kontrasttrening (complex training) kombinerer en tung styrkeovelse med en lett, eksplosiv ovelse for samme muskelgruppe i superset. For eksempel: tungt sett med kneboey etterfulgt av vertikale hopp. Den tunge ovelsen aktiverer nervesystemet fullt ut (post-activation potentiation), noe som gir et midlertidig hoeyere kraftpotensial i den pafolgende eksplosive ovelsen. Denne metoden er svart effektiv for avanserte utovere.',
    },
    {
      id: 'tr2-2-3-ex1',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-3-ex1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva menes med Rate of Force Development (RFD)?',
        options: [
          { id: 'a', text: 'Maksimal kraft en muskel kan produsere', isCorrect: false },
          { id: 'b', text: 'Hvor raskt en muskel kan produsere kraft', isCorrect: true },
          { id: 'c', text: 'Hvor lenge muskelen kan opprettholde kraft', isCorrect: false },
          { id: 'd', text: 'Mengden energi muskelen bruker', isCorrect: false },
        ],
        hints: ['Tenk paa hva som er viktigst for en sprinter: total kraft eller hastigheten kraften utvikles med?'],
        solution: 'RFD (Rate of Force Development) er et maal paa hvor raskt en muskel kan produsere kraft, maalt som endring i kraft per tidsenhet (N/s). Det er avgjorende i idretter med korte kontakttider som sprint, hopp og kast.',
      },
    },
    {
      id: 'tr2-2-3-ex2',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-3-ex2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva er stretch-shortening cycle (SSC)?',
        options: [
          { id: 'a', text: 'En toeyemetode der muskelen holdes i strekk lenge', isCorrect: false },
          { id: 'b', text: 'En bevegelse der muskelen forst strekkes eksentrisk og deretter kontraherer konsentrisk', isCorrect: true },
          { id: 'c', text: 'En kontraksjon der muskelen holder seg i ro', isCorrect: false },
          { id: 'd', text: 'En metode for aa redusere muskelstolhet', isCorrect: false },
        ],
        solution: 'Stretch-shortening cycle er en bevegelsesmekanisme der muskelen forst strekkes (eksentrisk fase) og deretter kontraherer (konsentrisk fase). Den eksentriske fasen lagrer elastisk energi og aktiverer strekkerefleksen, noe som gir en kraftigere konsentrisk kontraksjon.',
      },
    },
    {
      id: 'tr2-2-3-ex3',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-3-ex3',
        number: '3',
        type: 'classic',
        task: 'Forklar kraft-hastighetsforholdet og dets betydning for trening.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva skjer med kraftproduksjonen naar bevegelseshastigheten oker?',
            solution: 'Naar bevegelseshastigheten oker, reduseres kraftproduksjonen. Dette skyldes at det er et invers (omvendt) forhold mellom kraft og hastighet i muskelkontraksjoner. Muskelen kan produsere mest kraft ved lav hastighet.',
            multipleChoiceOptions: [
              'Kraften synker fordi kraft og hastighet har et invers forhold',
              'Kraften oker proporsjonalt med hastigheten',
              'Kraften forblir uendret',
              'Kraften oker forst og synker deretter',
            ],
          },
          {
            label: 'b',
            task: 'Hvordan kan en utover trene for aa forbedre den eksplosive delen av kraft-hastighetskurven?',
            solution: 'For aa forbedre den eksplosive delen av kurven bor utoveren trene med lette til moderate belastninger (30-60 % av 1RM) med maksimal hastighet og akselerasjon. Ballistiske ovelser som medisinballkast, jump squats, olympiske loft og plyometrisk trening er saerlig effektive. Kontrasttrening (tung ovelse etterfulgt av eksplosiv ovelse) er ogsaa en effektiv metode.',
          },
        ],
        solution: 'Kraft-hastighetsforholdet viser at det er et omvendt forhold mellom kraft og hastighet. For aa utvikle eksplosivitet maa man trene med belastninger og hastigheter som er relevante for idretten, typisk 30-60 % av 1RM med maksimal akselerasjon.',
      },
    },
    {
      id: 'tr2-2-3-ex4',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-3-ex4',
        number: '4',
        type: 'classic',
        task: 'Forklar hva plyometrisk trening er, og lag en progresjon fra nybegynner til avansert nivaa med minst tre ovelser paa hvert nivaa.',
        solution: 'Plyometrisk trening er ovelser som utnytter stretch-shortening cycle for aa utvikle eksplosiv styrke. Prinsippet er en rask eksentrisk fase etterfulgt av en umiddelbar konsentrisk kontraksjon.\n\nNybegynnernivaa: Hoppetau, smaa ankelhopp paa stedet, lette skvatthopp.\nModerat nivaa: Bokshopp, sidehopp (lateral bounds), medisinballkast mot vegg.\nAvansert nivaa: Dybdehopp fra 40-60 cm, ettbeins bounds, reactive hurdle jumps.\n\nProgresjon baseres paa aa mestre lavere nivaa for man gaar videre. Volumet starter paa 60-80 bakkekontakter og kan okes til 100-150 for avanserte. Minst 48-72 timer restitusjon mellom okter er nodvendig.',
      },
    },
    {
      id: 'tr2-2-3-ex5',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-3-ex5',
        number: '5',
        type: 'classic',
        task: 'Lag et kontrasttreningsprogram (4 supersett) for en fotballspiller som onsker aa forbedre sprintakselerasjon og hopphoyde. Forklar valg av ovelser og begrunnelsen bak programmet.',
        solution: 'Supersett 1: Tung kneboey (3-5 reps paa 85 % av 1RM) + vertikale hopp (5 reps) - Trener kraftproduksjon i kne- og hoftestrekk, fulgt av eksplosiv utnyttelse via post-activation potentiation.\n\nSupersett 2: Romansk markloeft (4 reps paa 80 %) + bredehopp (5 reps) - Trener bakre kjede tungt, fulgt av horisontal eksplosivitet relevant for akselerasjon.\n\nSupersett 3: Hoftetrekk/hip thrust (4 reps paa 85 %) + sprintstart (3x10 m) - Maksimal hofteekstensjonskraft kombinert med idrettsspesifikk akselerasjon.\n\nSupersett 4: Ettbeins beinpress (5 reps per bein) + ettbeins hopp (4 per bein) - Unilateral styrke og stabilitet kombinert med enbeinsseksplosivitet.\n\nPause: 3-4 min mellom tung ovelse og eksplosiv, 2 min mellom supersett. Begrunnelse: Kontrastmetoden utnytter post-activation potentiation der det tunge loftet potenserer nervesystemet for den eksplosive ovelsen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-2-3-ex6',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-3-ex6',
        number: '6',
        type: 'classic',
        task: 'Sammenlign tradisjonell styrketrening med ballistisk trening. Forklar den viktigste forskjellen i bevegelsesutforelse, og diskuter naa man bor velge den ene fremfor den andre.',
        solution: 'Den viktigste forskjellen er at i tradisjonell styrketrening maa utoveren bremse (deselerere) vekten mot slutten av bevegelsen for aa beholde kontrollen, mens i ballistisk trening akselereres belastningen gjennom hele bevegelsesomfanget og slippes eller kastes.\n\nDette betyr at ballistisk trening gir hoeyre gjennomsnittlig kraftutvikling og hastighet gjennom hele bevegelsen, noe som er mer relevant for idrettsbevegelser som kast, hopp og sprint.\n\nNaar velge tradisjonell styrketrening: For aa bygge maksimal styrke og muskelmasse, for nybegynnere, og naar teknikk maa laeres. Naar velge ballistisk trening: For aa utvikle eksplosivitet og power, naar utoveren har en solid styrkebase, og naar man onsker aa overfoere styrke til idrettsspesifikke bevegelser. Begge bor inngaa i et helhetlig treningsprogram gjennom periodisering.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 2.4: Styrkeutholdenhetsstrening
// ============================================================================

export const CHAPTER_TRENING_2_2_4: TextbookChapter = {
  id: 'trening-2-2-4',
  courseId: 'trening-2',
  chapterNumber: '2.4',
  title: 'Styrkeutholdenhetsstrening',
  description: 'Forstaa trening med submaksimale belastninger, sirkeltrening og metoder for aa utvikle muskelens utholdenhetsevne.',
  estimatedMinutes: 20,
  competenceGoals: [
    'kunne forklare begrepet styrkeutholdenhetsevne og dets fysiologiske grunnlag',
    'kjenne til treningsmetoder for styrkeutholdenhetsevne, inkludert sirkeltrening',
    'forstaa forskjellen mellom lokal og generell muskelutholdenhetsevne',
  ],
  content: [
    {
      id: 'tr2-2-4-intro',
      type: 'text',
      content: `# Styrkeutholdenhetsstrening

Styrkeutholdenhetsevne er muskelens evne til aa opprettholde kraft over tid eller gjenta kraftproduksjon mange ganger uten vesentlig reduksjon i prestasjon. Denne egenskapen er avgjorende i mange idretter og daglige aktiviteter, fra roing og sykling til aa baere tunge handleposer opp trapper.

Mens maksimal styrke handler om aa produsere mest mulig kraft i ett forsok, handler styrkeutholdenhetsevne om aa holde ut. En roer trenger kraft i hvert aaretak gjennom hele loepet, en svommer trenger det i hvert armtak, og en fjellklatrer maa opprettholde grepsstyrke over lang tid. I dette kapittelet ser vi paa det fysiologiske grunnlaget og de mest effektive treningsmetodene for aa utvikle denne egenskapen.`,
    },
    {
      id: 'tr2-2-4-def1',
      type: 'definition',
      title: 'Styrkeutholdenhetsevne',
      content: 'Styrkeutholdenhetsevne er muskelens evne til aa utfore gjentatte kontraksjoner mot en motstand over tid, eller aa opprettholde en submaksimal kontraksjon saa lenge som mulig. Det avhenger av bade muskelens aerobe kapasitet (oksygentilforsel, mitokondriefunksjon) og anaerobe kapasitet (bufferkapasitet, laktattoleranse), samt nervesystemets evne til aa opprettholde motorisk rekruttering under tretthet.',
    },
    {
      id: 'tr2-2-4-text1',
      type: 'text',
      title: 'Fysiologisk grunnlag',
      content: `Styrkeutholdenhetsevne avhenger av flere fysiologiske systemer:

**Energisystemer:**
- **Aerob energiomsetning**: For langvarig arbeid med moderat belastning brukes oksygen til aa omdanne fett og karbohydrater til ATP. Type I-fibre med mange mitokondrier er spesielt viktige.
- **Anaerob glykolyse**: Ved hoeyere belastninger brukes karbohydrater uten oksygen, noe som produserer laktat. Evnen til aa tolerere og fjerne laktat er viktig.
- **Kreatin-fosfatsystemet**: Gir rask energi til korte kraftanstrengelser og er viktig for gjentatte kraftinnsatser med korte pauser.

**Muskulaere tilpasninger:**
- Okt mitokondrievolum og -funksjon (bedre aerob kapasitet i muskelcellene)
- Okt kapillaertetthet (bedre blodtilforsel og oksygentransport)
- Forbedret laktatmetabolisme (okt bufferkapasitet og raskere fjerning)
- Okt glykogenlager i musklene
- Type IIa-fibre utvikler mer oksidative egenskaper

**Nevromuskulaere tilpasninger:**
- Bedre evne til aa opprettholde motorisk rekruttering under tretthet
- Forbedret fyringsfrekvens over tid
- Okt motstand mot sentral tretthet (hjernen opprettholder motorisk drive)`,
    },
    {
      id: 'tr2-2-4-def2',
      type: 'definition',
      title: 'Submaksimal belastning',
      content: 'Submaksimal belastning er enhver belastning som ligger under den maksimale kapasiteten (under 1RM). I styrkeutholdenhetsstrening brukes vanligvis belastninger paa 30-60 % av 1RM, som gir rom for mange repetisjoner. Formaaalet er aa utvikle muskelens evne til vedvarende arbeid fremfor aa maksimere kraftproduksjonen i enkeltrepetasjoner.',
    },
    {
      id: 'tr2-2-4-text2',
      type: 'text',
      title: 'Treningsmetoder for styrkeutholdenhetsevne',
      content: `Det finnes flere effektive metoder for aa trene styrkeutholdenhetsevne:

**1. Tradisjonell styrkeutholdenhetsstrening**
- Belastning: 30-60 % av 1RM
- Repetisjoner: 15-30+ per sett
- Sett: 2-4 per ovelse
- Pause: 30-60 sekunder mellom sett
- Tempo: Kontrollert, ofte med korte pauser i ytterstilling
- Egnet for: Nybegynnere, rehabilitering, generell kondisjon

**2. Sirkeltrening (circuit training)**
- 6-12 ovelsestasjoner som dekker hele kroppen
- 30-60 sekunder arbeid per stasjon
- Minimal pause mellom stasjoner (direkte overgang eller maks 15-30 sek)
- 2-4 runder totalt med 1-3 min pause mellom runder
- Kombinerer styrke og kondisjon
- Kan tilpasses alle nivaaer ved aa justere vekter og varigheter

**3. Supersett og gigantsett**
- Supersett: To ovelser rett etter hverandre uten pause
- Gigantsett: Tre eller flere ovelser rett etter hverandre
- Kan vaere for samme muskelgruppe (ekstrem lokal utmattelse) eller ulike (okt metabolsk effekt)
- Eksempel supersett: Beinpress + leg curl (ulike muskelgrupper, minimal hvile)

**4. Tidsbasert trening (AMRAP/EMOM)**
- AMRAP (As Many Reps/Rounds As Possible): Gjor flest mulig repetisjoner/runder innen en tidsramme
- EMOM (Every Minute On the Minute): Utfor et gitt antall reps i starten av hvert minutt, resten er pause
- Tabata-intervaller: 20 sek arbeid / 10 sek pause x 8 (4 min total)
- Gir hoey metabolsk belastning og tidseffektiv trening`,
    },
    {
      id: 'tr2-2-4-example1',
      type: 'example',
      title: 'Sirkeltrening for helkropp',
      problem: 'Lag en sirkeltreningsokt med 8 stasjoner som trener hele kroppen, med 40 sekunders arbeid og 20 sekunders pause per stasjon.',
      solution: `**Sirkeltreningsokt (8 stasjoner, 40 sek arbeid / 20 sek pause):**

1. **Kneboey med kroppsvekt** - Underkropp (quadriceps, gluteus)
2. **Push-ups** - Overkropp trykk (bryst, triceps, skulder)
3. **Roing med strikk** - Overkropp trekk (rygg, biceps)
4. **Utfall (alternerende)** - Underkropp (quadriceps, gluteus, balanse)
5. **Planke med skuldertapp** - Baal (kjernemuskulatur, stabilitet)
6. **Kettlebell swings** - Bakre kjede (gluteus, hamstrings, rygg)
7. **Sidehev med manualer** - Skuldre (deltoideus)
8. **Mountain climbers** - Helkropp med kondisjonsfokus

**Gjennomforing:**
- Total tid per runde: 8 min (inkludert pauser)
- Antall runder: 3
- Pause mellom runder: 2 minutter
- Total tid: ca. 30 minutter

Denne sirkelen trener alle store muskelgrupper, veksler mellom overkropp og underkropp for lokal restitusjon, og gir betydelig metabolsk og kardiovaskulaer belastning.`,
    },
    {
      id: 'tr2-2-4-text3',
      type: 'text',
      title: 'Lokal vs. generell muskelutholdenhetsevne',
      content: `Det er viktig aa skille mellom lokal og generell muskelutholdenhetsevne:

**Lokal muskelutholdenhetsevne**
- Evnen til en spesifikk muskel eller muskelgruppe til aa jobbe lenge
- Avhenger primaert av muskelens egne egenskaper: mitokondrier, kapillaertetthet, glykogenlager
- Eksempel: Grepsstyrkeutholdenhetsevne hos en klatrer, skulderutholdenhetsevne hos en svommer
- Trenes med isolerte ovelser og hoye repetisjoner for den aktuelle muskelgruppen

**Generell muskelutholdenhetsevne**
- Evnen til aa opprettholde arbeid med mange muskelgrupper over tid
- Avhenger ogsaa av det sentrale kardiovaskulaere systemet (hjertekapasitet, blodvolum)
- Eksempel: Kapasiteten til aa gjennomfore en lang sirkeltreningsokt eller en lang rokonkurranse
- Trenes med helkroppsovelser, sirkeltrening og intervalltrening

**Kombinasjon i praksis:**
De fleste idretter krever bade lokal og generell muskelutholdenhetsevne. En roer trenger sterk lokal utholdenhetsevne i rygg, armer og bein, men ogsaa generell kapasitet til aa opprettholde arbeidet over hele loepet. Treningsprogrammet bor dermed inkludere bade spesifikke og generelle metoder.`,
    },
    {
      id: 'tr2-2-4-note1',
      type: 'note',
      title: 'Styrkeutholdenhetsevne og helse',
      content: 'Styrkeutholdenhetsstrening har betydelige helsegevinster utover idrettsprestasjon. Trening med submaksimale belastninger og mange repetisjoner forbedrer insulinsensitivitet, senker blodtrykk, forbedrer blodfettprofilet og oker basalmetabolismen. Sirkeltrening gir ogsaa god kondisjonstrening. Dette gjor styrkeutholdenhetsstrening til et utmerket valg for generell helsefremmende aktivitet.',
    },
    {
      id: 'tr2-2-4-warning1',
      type: 'warning',
      title: 'Teknikk under tretthet',
      content: 'Ved styrkeutholdenhetsstrening er det avgjorende aa opprettholde god teknikk selv naar tretthet inntreffer. Naar musklene trettes, er det fristende aa kompensere med daarlig form eller aa bruke andre muskler enn de tiltenkte. Dette oker skaderisikoen betydelig. Velg heller aa redusere vekt eller repetisjoner enn aa ofre teknikk. I sirkeltrening bor man velge ovelser man behersker godt teknisk.',
    },
    {
      id: 'tr2-2-4-ex1',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-4-ex1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilket intensitetsomraade (% av 1RM) brukes vanligvis i styrkeutholdenhetsstrening?',
        options: [
          { id: 'a', text: '85-100 % av 1RM', isCorrect: false },
          { id: 'b', text: '70-85 % av 1RM', isCorrect: false },
          { id: 'c', text: '30-60 % av 1RM', isCorrect: true },
          { id: 'd', text: '1-10 % av 1RM', isCorrect: false },
        ],
        hints: ['Styrkeutholdenhetsevne handler om mange repetisjoner med submaksimal belastning.'],
        solution: 'Styrkeutholdenhetsstrening bruker vanligvis 30-60 % av 1RM, noe som gir rom for 15-30+ repetisjoner per sett. Denne belastningen er tilstrekkelig til aa gi motstand, men lav nok til at muskelens utholdenhetsegenskaper utfordres.',
      },
    },
    {
      id: 'tr2-2-4-ex2',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-4-ex2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva kjennetegner sirkeltrening?',
        options: [
          { id: 'a', text: 'Kun en ovelse med mange sett', isCorrect: false },
          { id: 'b', text: 'Flere ovelsestasjoner med minimal pause som gjennomfores i runder', isCorrect: true },
          { id: 'c', text: 'Bare aerob trening uten vekter', isCorrect: false },
          { id: 'd', text: 'Tung styrketrening med lange pauser', isCorrect: false },
        ],
        solution: 'Sirkeltrening bestaar av 6-12 ovelsestasjoner som gjennomfores etter hverandre med minimal pause. Man gjor 2-4 runder av sirkelen. Metoden kombinerer styrke og kondisjon effektivt og kan tilpasses alle nivaaer.',
      },
    },
    {
      id: 'tr2-2-4-ex3',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-4-ex3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom lokal og generell muskelutholdenhetsevne.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva bestemmer lokal muskelutholdenhetsevne?',
            solution: 'Lokal muskelutholdenhetsevne bestemmes primaert av muskelens egne egenskaper: antall og funksjon av mitokondrier, kapillaertetthet (blodtilforsel), glykogenlager, og evnen til aa tolerere og fjerne metabolske avfallsstoffer som laktat.',
            multipleChoiceOptions: [
              'Muskelens mitokondrier, kapillaerer og glykogenlager',
              'Hjertets pumpekapasitet',
              'Lungekapasiteten',
              'Mengden kroppsfett',
            ],
          },
          {
            label: 'b',
            task: 'Gi et eksempel paa en idrett der lokal muskelutholdenhetsevne er spesielt viktig, og forklar hvorfor.',
            solution: 'Klatring krever svart god lokal muskelutholdenhetsevne i underarmer og fingre (grepsstyrkeutholdenhetsevne). En klatrer maa opprettholde kraftig grep over lang tid og gjennom mange tak. Lokal tretthet i underarmene er ofte den begrensende faktoren, ikke generell kondisjon.',
          },
        ],
        solution: 'Lokal muskelutholdenhetsevne avhenger av muskelens egne egenskaper (mitokondrier, kapillaerer, glykogen), mens generell muskelutholdenhetsevne ogsaa avhenger av det kardiovaskulaere systemet. Begge typer er viktige i de fleste idretter.',
      },
    },
    {
      id: 'tr2-2-4-ex4',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-4-ex4',
        number: '4',
        type: 'classic',
        task: 'Lag en sirkeltreningsokt tilpasset en fotballspiller i sesongforberedelsen. Velg 6 stasjoner, angi arbeidstid og pausetid, og forklar valget av ovelser.',
        solution: 'Fotballspesifikk sirkeltrening (6 stasjoner, 45 sek arbeid / 15 sek pause, 3 runder):\n\n1. Jump squats (lette) - Eksplosiv beinsstyrke for sprint og hopp.\n2. Push-ups med rotasjon - Overkropp og kjerne, viktig for dueller og balanse.\n3. Single-leg romansk markloeft - Bakre kjede og ettbeins stabilitet, forebygger hamstringsskader.\n4. Lateral shuffle med motstand - Sideveis bevegelse og retningsforandring, idrettsspesifikt.\n5. Planke med albuedrag - Kjerneutholdenhetsevne og skulderstabilitet.\n6. Bur-pees - Helkropp og kondisjon, simulerer opp-og-ned-bevegelser i kamp.\n\nPause mellom runder: 2 min. Total tid ca. 24 min. Ovelsene er valgt for aa trene styrkeutholdenhetsevne i bevegelsesmonster relevante for fotball, med vekt paa ettbeins stabilitet, eksplosivitet og evne til gjentatte sprintinnsatser.',
      },
    },
    {
      id: 'tr2-2-4-ex5',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-4-ex5',
        number: '5',
        type: 'classic',
        task: 'Forklar de fysiologiske tilpasningene som skjer ved styrkeutholdenhetsstrening over tid. Beskriv minst fire tilpasninger og forklar hvordan de forbedrer prestasjonen.',
        solution: '1. Okt mitokondrievolum: Flere og storre mitokondrier i muskelcellene gir bedre aerob energiproduksjon, saa muskelen kan jobbe lengre for den gaar over til anaerob energiomsetning.\n\n2. Okt kapillaertetthet: Flere blodkar rundt muskelfibrene gir bedre tilforsel av oksygen og naering, og raskere fjerning av avfallsstoffer. Dette forsinkerer tretthet.\n\n3. Forbedret laktatmetabolisme: Okt bufferkapasitet i musklene og blodet gjor at utoveren kan tolerere hoeyere laktaatnivaaer for tretheten inntreffer. I tillegg oker evnen til aa bruke laktat som brensel.\n\n4. Okt glykogenlager: Musklene lagrer mer glykogen, som er hovedbrenselet for moderat til hoey intensitetsarbeid. Storre lager betyr lengre arbeidstid for laagrene tommes.\n\n5. Type IIa-fibre blir mer oksidative: De raske, oksidative fibrene utvikler bedre utholdenhetsegenskaper, noe som gir en storre andel fibre som kan bidra til langvarig arbeid.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr2-2-4-ex6',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-4-ex6',
        number: '6',
        type: 'classic',
        task: 'Sammenlign tradisjonell styrkeutholdenhetsstrening med AMRAP-metoden (As Many Reps As Possible). Diskuter fordeler, ulemper og hvilke situasjoner hver metode egner seg best for.',
        solution: 'Tradisjonell styrkeutholdenhetsstrening bruker fastsatt antall repetisjoner (f.eks. 3 sett x 20 reps) med kort pause. Fordeler: Forutsigbar belastning, enkel aa periodisere, god kontroll paa volum. Ulemper: Kan bli monotont, krever ikke maksimal innsats hvis antallet er for lavt.\n\nAMRAP-metoden gir en tidsramme (f.eks. 10 minutter) og utoveren gjor flest mulig reps eller runder. Fordeler: Motiverende (konkurranse med seg selv), sikrer hoey innsats, tidseffektivt, gir et objektivt maal paa framgang. Ulemper: Kan friste til aa ofre teknikk for aa faa flere reps, vanskelig aa kontrollere belastningen presist, kan vaere mentalt krevende.\n\nTradisjonell metode egner seg best for nybegynnere, rehabilitering og perioder med teknikkfokus. AMRAP egner seg godt for avanserte utovere, testing av framgang, og som variasjon i treningsprogrammet. Begge metodene kan kombineres i et helhetlig program.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 2.5: Avanserte styrketreningsmetoder
// ============================================================================

export const CHAPTER_TRENING_2_2_5: TextbookChapter = {
  id: 'trening-2-2-5',
  courseId: 'trening-2',
  chapterNumber: '2.5',
  title: 'Avanserte styrketreningsmetoder',
  description: 'Utforsk avanserte metoder som cluster sets, drop sets og eksentrisk trening for aa bryte gjennom plataaer.',
  estimatedMinutes: 20,
  competenceGoals: [
    'kjenne til avanserte styrketreningsmetoder og deres fysiologiske grunnlag',
    'forstaa naar og hvorfor avanserte metoder bor brukes',
    'kunne forklare prinsippene bak eksentrisk overbelastningstrening',
  ],
  content: [
    {
      id: 'tr2-2-5-intro',
      type: 'text',
      content: `# Avanserte styrketreningsmetoder

Etter en periode med regelmessig styrketrening vil de fleste utovere oppleve at framgangen avtar. Kroppen har tilpasset seg treningsstimuliene, og de vanlige metodene gir ikke lenger tilstrekkelig stimulus for videre utvikling. I slike situasjoner kan avanserte treningsmetoder vaere nodvendige for aa bryte gjennom plataaer og fortsette utviklingen.

Avanserte metoder boer brukes med omhu. De gir kraftigere treningsstimuli, men krever ogsaa mer restitusjon og medforer hoeyere risiko for overtrenning dersom de overbrukes. I dette kapittelet gjennomgaar vi flere avanserte teknikker, deres fysiologiske grunnlag, og retningslinjer for hensiktsmessig bruk.

Det er viktig aa understreke at avanserte metoder er nettopp det - avanserte. De bor reserveres for utovere som har minst 1-2 aars erfaring med regelmessig styrketrening og som har naad et plataa med tradisjonelle metoder.`,
    },
    {
      id: 'tr2-2-5-def1',
      type: 'definition',
      title: 'Cluster sets',
      content: 'Cluster sets er en treningsmetode der et tradisjonelt sett brytes opp i mindre grupper (clusters) med korte pauser (10-30 sekunder) mellom gruppene. For eksempel i stedet for 1 sett med 6 repetisjoner, gjores 3 clusters med 2 repetisjoner og 15 sekunders pause mellom. Dette tillater bruk av tyngre vekter eller flere repetisjoner ved en gitt vekt, fordi de korte pausene gir delvis restitusjon av energisystemene (kreatin-fosfat) og nervesystemet.',
    },
    {
      id: 'tr2-2-5-text1',
      type: 'text',
      title: 'Cluster sets i detalj',
      content: `Cluster sets utnytter kroppens raske restitusjon av kreatin-fosfatsystemet for aa opprettholde hoeyre kraftproduksjon gjennom settet.

**Hvordan cluster sets fungerer:**
- Kreatin-fosfatsystemet (ATP-CP) restitueres ca. 50 % paa 30 sekunder og ca. 85 % paa 60 sekunder
- Ved aa ta korte pauser midt i settet kan utoveren opprettholde hoeyere kraftproduksjon og bevegelseshastighet i hver repetisjon
- Resultatet er okt mekanisk spenning og hoeyere treningskvalitet

**Varianter av cluster sets:**

**1. Styrke-cluster:**
- Vekt: 85-93 % av 1RM
- Cluster-struktur: 1-2 reps + 15-30 sek pause, gjenta 3-5 ganger
- Totalt per sett: 5-8 reps med svart tung vekt
- Formaal: Maksimal styrke og nevral tilpasning

**2. Power-cluster:**
- Vekt: 50-70 % av 1RM
- Cluster-struktur: 2-3 reps + 20 sek pause, gjenta 3-4 ganger
- Fokus paa maksimal hastighet i hver repetisjon
- Formaal: Opprettholde hoey hastighet og kraftutvikling

**3. Hypertrofi-cluster:**
- Vekt: 70-80 % av 1RM
- Cluster-struktur: 3-4 reps + 15-20 sek pause, gjenta 3-5 ganger
- Totalt per sett: 12-20 reps med relativt tung vekt
- Formaal: Hoey mekanisk spenning kombinert med hoyt volum`,
    },
    {
      id: 'tr2-2-5-text2',
      type: 'text',
      title: 'Drop sets og mekaniske drop sets',
      content: `**Drop sets (nedtrappingssett):**
Drop sets er en intensitetsteknikk der du utforer repetisjoner til naer utmattelse, deretter umiddelbart reduserer vekten med 20-30 % og fortsetter med flere repetisjoner. Prosessen kan gjentas 2-4 ganger.

Eksempel: Benkpress med 80 kg til utmattelse (8 reps), reduser til 60 kg og fortsett (6 reps), reduser til 45 kg og fortsett (8 reps).

**Fysiologisk grunnlag:**
- Naar du naar utmattelse med en gitt vekt, er det primaert de rekrutterte motoriske enhetene som er utmattet
- Ved aa redusere vekten kan de gjenvaerende, friskere enhetene overta arbeidet
- Resultatet er ekstrem metabolsk stress og total muskelutmattelse

**Mekaniske drop sets:**
I stedet for aa redusere vekten, endrer du ovelsen til en mekanisk enklere variant:
- Eksempel 1: Skraa benkpress (vanskeligst) -> flat benkpress -> skraa benkpress med negative hoelling (enklest)
- Eksempel 2: Staaende bicepscurl -> sittende bicepscurl -> hammer curl
- Prinsippet: Naar du er utmattet i den vanskeligste varianten, gir den enklere varianten mekanisk fordel slik at du kan fortsette

**Retningslinjer for drop sets:**
- Bruk primaert i isolasjonsovelser eller maskiner (tryggere)
- 1-2 ovelser med drop sets per okt er vanligvis nok
- Brukes typisk i det siste settet av en ovelse
- Krever ekstra restitusjon - ikke bruk i hver okt`,
    },
    {
      id: 'tr2-2-5-def2',
      type: 'definition',
      title: 'Eksentrisk overbelastning',
      content: 'Eksentrisk overbelastning (eccentric overload) er en treningsmetode der den eksentriske (bremsende) fasen belastes tyngre enn den konsentriske (loeftende) fasen. Muskelen kan produsere 20-40 % mer kraft eksentrisk enn konsentrisk. Ved aa utnytte dette potensialet med supramaksimale belastninger (over 100 % av konsentrisk 1RM) i den eksentriske fasen, oppnaas en unik treningsstimulus som gir betydelige nevrale og strukturelle tilpasninger.',
    },
    {
      id: 'tr2-2-5-text3',
      type: 'text',
      title: 'Eksentrisk trening',
      content: `Eksentrisk trening fokuserer paa den bremsende fasen av bevegelsen og gir unike tilpasninger:

**Fordeler med eksentrisk trening:**
- Storre mekanisk spenning per muskelfiber (faerre fibre er aktive eksentrisk)
- Kraftigere stimulus for muskelvekst og strukturelle tilpasninger
- Forbedrer senevev og bindevev
- Effektiv for rehabilitering av seneskader (tendinopati)
- Oker fasikkellengde (lengre muskelfibre), noe som kan forebygge muskelstrekk

**Metoder for eksentrisk trening:**

**1. Negativ-only (eksentrisk-only):**
- Utoveren belastes kun i den eksentriske fasen (100-130 % av konsentrisk 1RM)
- Hjelpere eller maskin assisterer den konsentriske fasen
- Eksempel: Ekstremt tungt eksentrisk benkpress der to hjelpere lofter stangen opp
- Svart krevende for nervesystemet - maks 2-3 sett

**2. Aksentrisk brems:**
- Normal konsentrisk fase, forlenget og kontrollert eksentrisk fase (3-6 sekunder)
- Kan gjores med normal treningsvekt
- Lavere risiko, men fortsatt god eksentrisk stimulus
- Eksempel: 3-0-1 tempo (3 sek ned, ingen pause, 1 sek opp)

**3. Flywheel-trening:**
- Spesialutstyr som gir variabel motstand med okt eksentrisk belastning
- Svinghjulet lagrer energi konsentrisk og returnerer den eksentrisk
- Gir automatisk eksentrisk overbelastning uten behov for hjelpere

**4. Eksentrisk bremset plyometri:**
- Fokus paa aa absorbere krefter ved landing (f.eks. dybdelandinger)
- Bygger eksentrisk styrke i idrettsspesifikke bevegelser
- Viktig for skadeforebygging, spesielt korsbandskader`,
    },
    {
      id: 'tr2-2-5-text4',
      type: 'text',
      title: 'Andre avanserte metoder',
      content: `**Rest-pause-metoden:**
- Utfor repetisjoner til naer utmattelse, ta 10-20 sekunders pause, fortsett med 2-4 reps til
- Gjenta 2-3 ganger per sett
- Ligner paa cluster sets, men starter fra utmattelse i stedet for med frisk muskulatur
- Gir ekstrem metabolsk stress og total muskelrekruttering

**Tvungne repetisjoner (forced reps):**
- En treningspartner assisterer minimalt naar utoveren naar utmattelse
- Utoveren kan da fullfoere 2-4 ekstra repetisjoner
- Gir okt tid under spenning og total muskelutmattelse
- Bor brukes sparsomt (1-2 sett per okt) da det er svart krevende

**Supramaksimale hold (overloads):**
- Hold en vekt over konsentrisk 1RM i en isometrisk posisjon
- For eksempel: Hold 110 % av 1RM i lockout-posisjon i benkpress i 5-10 sekunder
- Vender nervesystemet til aa haandtere tyngre belastninger
- Kan forbedre psykologisk selvtillit med hoeyere vekter

**Blood Flow Restriction (BFR) training:**
- En mansjett begrenser blodstrommen ut av muskelen under okt trening med lav belastning (20-40 % av 1RM)
- Skaper metabolsk stress og cellulart signalering som normalt krever tyngre vekter
- Spesielt nyttig i rehabilitering og for aa gi hypertrofistimulus med lave belastninger
- Maa utfores korrekt for aa vaere trygt (riktig trykk, begrenset varighet)`,
    },
    {
      id: 'tr2-2-5-example1',
      type: 'example',
      title: 'Cluster sets vs. tradisjonelt sett',
      problem: 'Sammenlign et tradisjonelt sett med 6 repetisjoner paa 85 % av 1RM med et cluster set med samme vekt. Forklar forskjellene i prestasjon og stimulus.',
      solution: `**Tradisjonelt sett (6 reps paa 85 % av 1RM):**
- Rep 1-3: God hastighet, hoey kraftproduksjon
- Rep 4-5: Hastigheten avtar merkbart, tretthet oker
- Rep 6: Lav hastighet, kanskje behov for grind
- Resultat: Avtagende kraftproduksjon og hastighet gjennom settet

**Cluster set (3x2 reps med 20 sek pause, 85 % av 1RM):**
- Cluster 1 (rep 1-2): Hoey hastighet og kraft
- 20 sek pause: Delvis restitusjon av ATP-CP, nervesystemet henter seg
- Cluster 2 (rep 3-4): Fortsatt hoey hastighet og kraft
- 20 sek pause: Ny restitusjon
- Cluster 3 (rep 5-6): Noe redusert, men fortsatt hoeyre kvalitet enn rep 5-6 i tradisjonelt sett

**Sammenligning:**
Begge settene har 6 totale repetisjoner med samme vekt, men cluster settet gir hoeyere gjennomsnittlig kraftutvikling og hastighet. Det tradisjonelle settet gir mer metabolsk stress (uavbrutt arbeid). Cluster sets er dermed bedre for styrke og power-utvikling, mens tradisjonelle sett kan vaere bedre for hypertrofi gjennom metabolsk stress.`,
    },
    {
      id: 'tr2-2-5-note1',
      type: 'note',
      title: 'Progressiv bruk av avanserte metoder',
      content: 'Avanserte metoder bor introduseres gradvis og brukes i begrensede perioder (2-4 uker), etterfulgt av perioder med tradisjonell trening. Dersom man bruker avanserte metoder konstant, tilpasser kroppen seg og de mister sin spesielle effekt. I tillegg oker risikoen for overtrenning og skader. En god strategi er aa bruke en avansert metode om gangen, integrert i et periodisert treningsprogram.',
    },
    {
      id: 'tr2-2-5-warning1',
      type: 'warning',
      title: 'Sikkerhet ved avanserte metoder',
      content: 'Flere av disse metodene (eksentrisk overbelastning, tvungne repetisjoner, supramaksimale hold) innebarer hoey skaderisiko dersom de utfores feil. De krever: (1) Solid treningserfaring og god grunnteknikk. (2) Kompetent treningspartner eller trener. (3) Riktig utstyr (sikkerhetsstenger, Smith-maskin for visse ovelser). (4) Grundig oppvarming. Aldri forsok eksentrisk overbelastning eller supramaksimale hold uten erfarne hjelpere.',
    },
    {
      id: 'tr2-2-5-tip1',
      type: 'tip',
      title: 'Velg riktig metode for riktig maal',
      content: 'Cluster sets er best for maksimal styrke og power. Drop sets er best for hypertrofi og metabolsk stress. Eksentrisk trening er best for strukturelle tilpasninger, rehabilitering og forebygging. Rest-pause er en allsidig metode som kan tilpasses bade styrke- og hypertrofimaael. Velg metoden basert paa ditt primaere treningsmaal i den aktuelle perioden.',
    },
    {
      id: 'tr2-2-5-ex1',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-5-ex1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er hovedprinsippet bak cluster sets?',
        options: [
          { id: 'a', text: 'Aa bruke svart lette vekter for mange repetisjoner', isCorrect: false },
          { id: 'b', text: 'Aa dele opp et sett i smaa grupper med korte pauser for aa opprettholde hoey kraftproduksjon', isCorrect: true },
          { id: 'c', text: 'Aa trene kun eksentrisk', isCorrect: false },
          { id: 'd', text: 'Aa redusere vekten progressivt gjennom settet', isCorrect: false },
        ],
        hints: ['Tenk paa hvordan korte pauser midt i settet pavirker restitusjonen av ATP-CP-systemet.'],
        solution: 'Cluster sets deler opp et tradisjonelt sett i smaa grupper (clusters) med 10-30 sekunders pause mellom. De korte pausene tillater delvis restitusjon av kreatin-fosfatsystemet og nervesystemet, slik at utoveren kan opprettholde hoeyere kraftproduksjon og hastighet gjennom settet.',
      },
    },
    {
      id: 'tr2-2-5-ex2',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-5-ex2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvor mye mer kraft kan en muskel produsere eksentrisk sammenlignet med konsentrisk?',
        options: [
          { id: 'a', text: '5-10 % mer', isCorrect: false },
          { id: 'b', text: '20-40 % mer', isCorrect: true },
          { id: 'c', text: '50-100 % mer', isCorrect: false },
          { id: 'd', text: 'Lik kraft i begge faser', isCorrect: false },
        ],
        solution: 'Muskelen kan produsere 20-40 % mer kraft i eksentrisk (bremsende) kontraksjon sammenlignet med konsentrisk (loeftende). Dette skyldes at faerre motoriske enheter trengs for aa kontrollere en gitt belastning eksentrisk, og at elastiske strukturer (bindevev, titinfilamenter) bidrar til kraftproduksjonen.',
      },
    },
    {
      id: 'tr2-2-5-ex3',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-5-ex3',
        number: '3',
        type: 'classic',
        task: 'Forklar drop sets og mekaniske drop sets.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er forskjellen mellom vanlige drop sets og mekaniske drop sets?',
            solution: 'I vanlige drop sets reduseres vekten naar utoveren naar utmattelse, slik at flere repetisjoner kan utfores. I mekaniske drop sets beholdes vekten, men ovelsen endres til en mekanisk enklere variant som gir bedre loftearm eller aktiverer sterkere muskler. Begge metoder forlenger settet forbi normal utmattelse.',
            multipleChoiceOptions: [
              'Drop sets reduserer vekten, mekaniske drop sets endrer ovelsen til enklere variant',
              'Det er ingen forskjell mellom dem',
              'Drop sets bruker tyngre vekt, mekaniske drop sets bruker lettere',
              'Mekaniske drop sets brukes bare med maskiner',
            ],
          },
          {
            label: 'b',
            task: 'Hvorfor bor drop sets primaert brukes i isolasjonsovelser eller maskiner?',
            solution: 'Drop sets krever hurtig vektreduksjon og fortsettelse med utmattet muskulatur. I sammensatte ovelser med frivekter (som kneboey eller markloeft) oker skaderisikoen betydelig naar teknikken svikter under tretthet. Maskiner gir styrt bevegelsesbane og enkel vektjustering, noe som gjor drop sets tryggere. Isolasjonsovelser involverer faerre ledd og lavere kompleksitet.',
          },
        ],
        solution: 'Drop sets forlenger settet ved aa redusere vekten ved utmattelse. Mekaniske drop sets endrer ovelsen i stedet for vekten. Begge metoder gir ekstrem metabolsk stress og bor primaert brukes i maskiner eller isolasjonsovelser for sikkerhetens skyld.',
      },
    },
    {
      id: 'tr2-2-5-ex4',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-5-ex4',
        number: '4',
        type: 'classic',
        task: 'Forklar prinsippene bak eksentrisk overbelastningstrening og gi to eksempler paa metoder som brukes.',
        solution: 'Eksentrisk overbelastning utnytter at muskelen kan produsere 20-40 % mer kraft eksentrisk enn konsentrisk. Ved aa belaste den eksentriske fasen med supramaksimale vekter (over 100 % av konsentrisk 1RM) faar muskel- og senevev en unik treningsstimulus som gir kraftige nevrale og strukturelle tilpasninger.\n\nMetode 1: Negativ-only trening. Utoveren belastes kun i den eksentriske fasen med 100-130 % av konsentrisk 1RM. Hjelpere eller maskin assisterer den konsentriske fasen. For eksempel eksentrisk benkpress der to hjelpere lofter stangen opp og utoveren bremser den ned kontrollert.\n\nMetode 2: Flywheel-trening. Et svinghjul lagrer energi under den konsentriske fasen og returnerer den med okt motstand i den eksentriske fasen. Dette gir automatisk eksentrisk overbelastning uten behov for hjelpere og er spesielt populaert i idrettsmiljoer og rehabilitering.',
      },
    },
    {
      id: 'tr2-2-5-ex5',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-5-ex5',
        number: '5',
        type: 'classic',
        task: 'En erfaren styrkelofter har naad et plataa i benkpress paa 120 kg 1RM. Han har trent tradisjonelt i over to aar. Foreslaa et 4-ukers program som integrerer avanserte metoder for aa bryte gjennom plataaet. Begrunn valgene dine.',
        solution: 'Uke 1: Cluster sets. Benkpress 4 sett x (2+2+2) reps paa 105 kg (87 % av 1RM) med 20 sek pause mellom clusters, fulgt av drop set i brystpress maskin (2 drops). Begrunnelse: Cluster sets opprettholder hoey kraftproduksjon og gir nevral stimulus med tung belastning.\n\nUke 2: Eksentrisk fokus. Benkpress 3 sett x 5 reps med 4 sekunder eksentrisk tempo paa 95 kg, pluss 2 sett negativ-only med 130 kg (108 % av 1RM) med hjelpere (3 reps per sett). Begrunnelse: Eksentrisk overbelastning gir unik strukturell stimulus og vender nervesystemet til tyngre vekter.\n\nUke 3: Kontrasttrening. 3 supersett av tung benkpress (2 reps paa 110 kg) + eksplosive medisinballkast (5 reps). Pluss rest-pause sett i skraa benkpress (8 reps + 15 sek + 3 reps + 15 sek + 2 reps). Begrunnelse: Post-activation potentiation for okt kraftutvikling, rest-pause for ekstra volum med tung vekt.\n\nUke 4: Deload. 3 sett x 3 reps paa 90 kg (75 % av 1RM) med fokus paa teknikk og hastighet. Begrunnelse: Restitusjon for superkompenasjon for ny 1RM-test.\n\nEtter uke 4 testes ny 1RM. Programmet kombinerer ulike avanserte metoder for aa gi variert og kraftig stimulus.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr2-2-5-ex6',
      type: 'exercise',
      exercise: {
        id: 'tr2-2-5-ex6',
        number: '6',
        type: 'classic',
        task: 'Diskuter Blood Flow Restriction (BFR) training. Forklar mekanismen, fordeler, risikoer og hvilke grupper som kan ha saerlig nytte av metoden.',
        solution: 'BFR-trening innebarer at en mansjett legges rundt ovre del av armen eller beinet for aa begrense venost blodretur (blodet ut av muskelen) mens arteriell tilforsel delvis opprettholdes. Treningen utfores med lave belastninger (20-40 % av 1RM).\n\nMekanisme: Begrenset blodretur skaper metabolsk stress (opphopning av laktat og andre metabolitter) og cellesvelling, som trigger anabole signalveier og veksthormonfrigjoring. Rekruttering av type II-fibre skjer ved lavere belastninger enn normalt fordi type I-fibrene raskt utmattes av oksygenmangel.\n\nFordeler: Gir hypertrofi- og styrkestimulus med lave belastninger som normalt ville vaert utilstrekkelige. Lav mekanisk belastning paa ledd, sener og bindevev.\n\nRisikoer: Feil trykk kan foere til nerveskade eller blodpropp i sjeldne tilfeller. Ubehag og smerte under trening. Bor ikke brukes av personer med kardiovaskulaer sykdom, blodpropphistorikk eller graviditeter.\n\nGrupper med saerlig nytte: Pasienter i rehabilitering etter operasjon som ikke taaeler tung belastning, eldre med leddproblemer, utovere med akutte skader som onsker aa opprettholde muskelmasse, og astronauter (brukes av NASA for aa motvirke muskelsvinn i vektloshet).',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Eksport av alle kapitler i seksjon 2
// ============================================================================

export const TRENING_2_DEL2_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_2_2_1,
  CHAPTER_TRENING_2_2_2,
  CHAPTER_TRENING_2_2_3,
  CHAPTER_TRENING_2_2_4,
  CHAPTER_TRENING_2_2_5,
];
