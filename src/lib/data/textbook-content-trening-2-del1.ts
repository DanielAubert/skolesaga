/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Treningslare 2 (VG3) - Seksjon 1: Avansert treningsteori
 * Kapittel 1.1-1.5
 * Folger LK20 lareplan
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Treningsprinsipper paa hoeyt nivaa
// ============================================================================

export const CHAPTER_TRENING_2_1_1: TextbookChapter = {
  id: 'trening-2-1-1',
  courseId: 'trening-2',
  chapterNumber: '1.1',
  title: 'Treningsprinsipper paa hoeyt nivaa',
  description: 'Superkompensasjon, spesifisitet, reversibilitet og individualisering.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forstaa og anvende prinsippet om superkompensasjon i treningsplanlegging',
    'kunne forklare hvordan spesifisitetsprinsippet pavirker treningsadaptasjon',
    'kjenne til reversibilitet og individualisering som treningsprinsipper',
  ],
  content: [
    {
      id: 'tr2-1-1-intro',
      type: 'text',
      content: `# Treningsprinsipper paa hoeyt nivaa

Alle former for systematisk trening bygger paa et sett med grunnleggende prinsipper. Paa videregaaende nivaa i treningslaere er det avgjorende aa forstaa disse prinsippene i dybden, fordi de danner grunnlaget for all treningsplanlegging og periodisering. Uten solid forstaelse av treningsprinsippene risikerer man ineffektiv trening, stagnasjon eller i verste fall overtrening og skader.

I dette kapittelet ser vi naermere paa de fire mest sentrale treningsprinsippene: superkompensasjon, spesifisitet, reversibilitet og individualisering. Vi skal forstaa det fysiologiske grunnlaget bak hvert prinsipp, se paa praktiske konsekvenser for treningsplanlegging, og diskutere hvordan prinsippene henger sammen og pavirker hverandre.

For trenere og utovere paa hoyt nivaa er det ikke nok aa kjenne til prinsippene — man maa ogsaa kunne anvende dem i praksis for aa lage treningsopplegg som gir optimal utvikling over tid.`,
    },
    {
      id: 'tr2-1-1-def1',
      type: 'definition',
      title: 'Superkompensasjon',
      content: 'Superkompensasjon er kroppens evne til aa gjenopprette og overskyte det opprinnelige prestasjonsnivaaet etter en treningsbelastning. Naar kroppen utsettes for en tilstrekkelig treningsstimulus, brytes den ned (katabolsk fase). I restitusjonsperioden bygger kroppen seg opp igjen til et hoeyere nivaa enn utgangspunktet (anabolsk fase). Dersom neste treningsokt plasseres i dette superkompensasjonsvinduet, oppnaar man progressiv forbedring.',
    },
    {
      id: 'tr2-1-1-text1',
      type: 'text',
      title: 'Superkompensasjonsmodellen',
      content: `Superkompensasjon er det mest fundamentale prinsippet i treningslaere og forklarer hvorfor og hvordan kroppen blir sterkere, raskere og mer utholdende av trening.

**Fasene i superkompensasjon:**

**Fase 1 — Treningsbelastning (stimulus)**
Under trening brytes kroppen ned. Glykogenlagre tommes, muskelfibre faar mikroskader, nervesystemet utmattes, og hormonnivaaene endres. Jo hardere okten, desto storre nedbrytning.

**Fase 2 — Restitusjon**
Etter trening starter gjenoppbyggingsprosessen. Proteinsyntesen oker, glykogenlagre fylles opp, skadde muskelfibre repareres, og nervesystemet gjenvinner sin funksjon. Denne fasen kan vare fra timer til flere dager avhengig av belastningens omfang.

**Fase 3 — Superkompensasjon**
Kroppen bygger seg ikke bare tilbake til utgangspunktet, men overskyter det. Muskler blir litt sterkere, energilagrene blir litt storre, og nervesystemet blir mer effektivt. Dette er vinduet der ny trening bor legges for aa oppnaa videre fremgang.

**Fase 4 — Tilbakegang (reversibilitet)**
Dersom det gaar for lang tid uten ny treningsstimulus, faller prestasjonsnivaaet gradvis tilbake til utgangspunktet eller lavere.

**Praktisk anvendelse:**
- For styrketrening: 48-72 timer mellom okter for samme muskelgruppe
- For utholdenhetsovelser med moderat intensitet: 24-48 timer
- For svart intense okter (maksimal styrke, intervaller): 72-96 timer
- Timingen av neste okt er avgjorende — for tidlig gir overbelastning, for sent gir stagnasjon`,
    },
    {
      id: 'tr2-1-1-def2',
      type: 'definition',
      title: 'Spesifisitetsprinsippet',
      content: 'Spesifisitetsprinsippet (SAID-prinsippet: Specific Adaptation to Imposed Demands) sier at kroppen tilpasser seg spesifikt til den typen belastning den utsettes for. Trening gir spesifikke adaptasjoner i de musklene, bevegelsesmonstrene, energisystemene og nerveforbindelsene som aktiveres under treningen. For aa bli bedre i en bestemt ferdighet maa treningen derfor ligne paa den ferdigheten i storst mulig grad.',
    },
    {
      id: 'tr2-1-1-text2',
      type: 'text',
      title: 'Spesifisitet og reversibilitet',
      content: `**Spesifisitetsprinsippet i praksis**

Spesifisitetsprinsippet har vidtrekkende konsekvenser for treningsplanlegging:

- **Bevegelsesmoenster**: En sprintloper maa trene sprint for aa bli raskere — generell styrketrening alene er ikke tilstrekkelig
- **Energisystem**: En maratonloper maa trene det aerobe energisystemet, mens en 100-meterloper maa trene det anaerobe fosfagensystemet
- **Muskelgrupper**: Trening av overkropp forbedrer ikke benstyrken
- **Kontraksjonstype**: Eksentrisk trening gir primaert eksentriske tilpasninger
- **Hastighet**: Trening i lav hastighet gir primaert tilpasninger ved lav hastighet

Spesifisitet betyr likevel ikke at all trening maa vaere 100 % idrettsspesifikk. Generell fysisk trening danner et viktig fundament, men jo naermere man kommer konkurranse, desto mer spesifikk bor treningen bli.

**Reversibilitetsprinsippet**

Reversibilitet er det motsatte av treningseffekt: naar treningsstimulus fjernes, forsvinner tilpasningene gradvis. Dette kalles ogsaa dekondisjonering.

- Aerob kapasitet (VO2maks) reduseres med ca. 5-10 % etter 2-4 uker uten trening
- Maksimal styrke holder seg noe lenger, men synker merkbart etter 3-4 uker
- Nevrale tilpasninger (teknikk, koordinasjon) er de siste som forsvinner
- Utovere med lang treningsbakgrunn taper adaptasjoner saktere enn utrente

Reversibilitetsprinsippet understreker viktigheten av kontinuitet i trening og gjor vedlikeholdstrening viktig i perioder med redusert belastning.`,
    },
    {
      id: 'tr2-1-1-note1',
      type: 'note',
      title: 'Individualiseringsprinsippet',
      content: 'Alle mennesker responderer ulikt paa trening. Genetikk, alder, kjonn, treningsbakgrunn, ernaering, sovn og stressnivaa pavirker hvor raskt og hvor mye en person tilpasser seg en gitt treningsbelastning. Det finnes ingen universell treningsplan som fungerer optimalt for alle. Gode trenere tilpasser belastning, volum, intensitet og restitusjonstid til den enkelte utoveren. Noen utovere er «high responders» som tilpasser seg raskt, mens andre er «low responders» som trenger lengre tid og andre stimuli.',
    },
    {
      id: 'tr2-1-1-example1',
      type: 'example',
      title: 'Superkompensasjon i praksis',
      problem: 'En utover trener benstyrke paa mandag med hoeyt volum (5 ovelser, 4 sett, 8-12 reps). Naar bor neste benokt legges for aa treffe superkompensasjonsvinduet?',
      solution: `**Analyse av belastningen:**
Okten inneholder hoyt volum med 5 ovelser x 4 sett = 20 arbeidssett for beina. Repetisjonsomraadet 8-12 tilsier moderat til hoey intensitet, rettet mot hypertrofi.

**Estimert restitusjonstid:**
- Muskulaer restitusjon etter en slik okt: 48-72 timer
- Superkompensasjonsvinduet aapner typisk 48-96 timer etter okten

**Anbefaling:**
Neste benokt bor legges paa **onsdag eller torsdag** (48-72 timer etter mandag). Dersom utoveren er godt trent og restituerer raskt, kan onsdag vaere passende. For en utover med kortere treningsbakgrunn kan torsdag vaere mer hensiktsmessig.

**Viktig:** Dersom utoveren fortsatt kjenner betydelig stivhet (DOMS) i beina, er det et tegn paa at restitusjonen ikke er fullfort, og okten bor utsettes.`,
    },
    {
      id: 'tr2-1-1-tip1',
      type: 'tip',
      title: 'Bruk treningsdagbok',
      content: 'For aa kunne anvende superkompensasjonsprinsippet effektivt, er det avgjorende aa fore treningsdagbok. Registrer belastning, volum, opplevd anstrengelse (RPE), sovnkvalitet og subjektiv form. Over tid gir dette et monster som hjelper deg aa finne den optimale balansen mellom belastning og restitusjon for din kropp.',
    },
    {
      id: 'tr2-1-1-ex1',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-1-ex1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva menes med superkompensasjon?',
        options: [
          { id: 'a', text: 'At kroppen bryter ned muskulatur under trening', isCorrect: false },
          { id: 'b', text: 'At kroppen bygger seg opp til et hoeyere nivaa enn utgangspunktet etter restitusjon', isCorrect: true },
          { id: 'c', text: 'At treningseffekten forsvinner etter noen uker', isCorrect: false },
          { id: 'd', text: 'At man trener den samme muskelgruppen to ganger daglig', isCorrect: false },
        ],
        hints: ['Tenk paa hva som skjer i restitusjonsperioden etter trening.'],
        solution: 'Superkompensasjon innebarer at kroppen, etter en treningsbelastning og tilstrekkelig restitusjon, bygger seg opp til et hoeyere prestasjonsnivaa enn utgangspunktet. Dette er den fysiologiske mekanismen som gjor at man gradvis kan bli sterkere og raskere over tid.',
      },
    },
    {
      id: 'tr2-1-1-ex2',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-1-ex2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva sier spesifisitetsprinsippet (SAID-prinsippet)?',
        options: [
          { id: 'a', text: 'All trening gir lik effekt uansett type', isCorrect: false },
          { id: 'b', text: 'Kroppen tilpasser seg spesifikt til den typen belastning den utsettes for', isCorrect: true },
          { id: 'c', text: 'Man bor alltid trene alle egenskaper samtidig', isCorrect: false },
          { id: 'd', text: 'Generell trening er alltid best', isCorrect: false },
        ],
        solution: 'SAID-prinsippet (Specific Adaptation to Imposed Demands) sier at kroppen tilpasser seg spesifikt til den belastningen den utsettes for. Trener du tung styrke, blir du sterk. Trener du langdistanse, blir du utholdende. Tilpasningene er knyttet til muskler, bevegelsesmonstre, energisystemer og nerveforbindelser som aktiveres.',
      },
    },
    {
      id: 'tr2-1-1-ex3',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-1-ex3',
        number: '3',
        type: 'classic',
        task: 'Forklar sammenhengen mellom superkompensasjon og overtreningsrisiko.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva skjer dersom neste treningsokt legges for tidlig, foer restitusjonen er fullfort?',
            solution: 'Dersom man trener igjen foer kroppen har restituert, brytes man ned fra et allerede svekket nivaa. Over tid forer dette til en nedadgaaende spiral der prestasjonsevnen gradvis synker. Kroppen faar aldri mulighet til aa superkompensere, og man risikerer overtrening.',
            multipleChoiceOptions: [
              'Kroppen brytes ned fra et allerede svekket nivaa, som kan fore til overtrening',
              'Superkompensasjonen akselereres og man blir sterkere raskere',
              'Restitusjonen pavirkes ikke av ny belastning',
              'Musklene vokser dobbelt saa raskt',
            ],
          },
          {
            label: 'b',
            task: 'Hva skjer dersom man venter for lenge mellom treningsoktene?',
            solution: 'Dersom man venter for lenge, passerer man superkompensasjonsvinduet og prestasjonsnivaaet faller tilbake mot eller under utgangspunktet (reversibilitet). Man mister den potensielle framgangen og maa i praksis starte paa nytt fra samme nivaa.',
          },
        ],
        solution: 'Superkompensasjon krever presis timing av treningsbelastning og restitusjon. For tidlig ny belastning gir overtrening, mens for lang pause gir reversibilitet. Kunsten i treningsplanlegging er aa finne den optimale balansen mellom belastning og hvile.',
      },
    },
    {
      id: 'tr2-1-1-ex4',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-1-ex4',
        number: '4',
        type: 'classic',
        task: 'En fotballspiller onsker aa forbedre sprinten sin. Forklar med utgangspunkt i spesifisitetsprinsippet hvilke treningsformer som vil vaere mest effektive, og hva som vil ha begrenset effekt.',
        solution: 'Med utgangspunkt i spesifisitetsprinsippet maa treningen ligne paa sprint i fotball:\n\n**Mest effektive treningsformer:**\n- Sprinttrening over 10-30 meter med korte pauser (idrettsspesifikk distanse og intensitet)\n- Akselerasjonstrening og retningsskifter (fotballspesifikke bevegelsesmonstre)\n- Eksplosiv styrketrening for bein (kneboey, olympiske loft) som forbedrer kraftutviklingshastigheten\n- Plyometrisk trening (hopping, bounding) for aa utvikle strekk-forkortelsessyklusen\n\n**Begrenset effekt:**\n- Langdistanseloping (trener feil energisystem og gir sakte fibertilpasninger)\n- Styrketrening kun for overkropp (feil muskelgrupper for sprint)\n- Svomming eller sykling (feil bevegelsesmoenster og muskelaktivering)',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr2-1-1-ex5',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-1-ex5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvor lang tid tar det omtrent foer aerob kapasitet (VO2maks) begynner aa synke merkbart uten trening?',
        options: [
          { id: 'a', text: '1-3 dager', isCorrect: false },
          { id: 'b', text: '2-4 uker', isCorrect: true },
          { id: 'c', text: '3-6 maaneder', isCorrect: false },
          { id: 'd', text: 'Det tar over ett aar', isCorrect: false },
        ],
        solution: 'Aerob kapasitet (VO2maks) begynner aa synke med ca. 5-10 % etter 2-4 uker uten trening. Maksimal styrke holder seg noe lenger, men begynner ogsaa aa avta etter 3-4 uker. Nevrale tilpasninger som teknikk og koordinasjon er de siste som forsvinner. Utovere med lang treningsbakgrunn taper adaptasjoner saktere enn utrente.',
      },
    },
    {
      id: 'tr2-1-1-ex6',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-1-ex6',
        number: '6',
        type: 'classic',
        task: 'Diskuter hvorfor individualiseringsprinsippet er viktig i treningsplanlegging. Gi eksempler paa faktorer som gjor at to utovere kan respondere svart forskjellig paa samme treningsprogram.',
        solution: 'Individualiseringsprinsippet er viktig fordi alle mennesker har ulik fysiologi, genetikk og livssituasjon som pavirker treningsresponsen.\n\nFaktorer som gir ulik respons:\n- **Genetikk**: Fordelingen av type I og type II muskelfibre varierer. Noen har naturlig hoeyere andel raske fibre og responderer bedre paa eksplosiv trening.\n- **Treningsbakgrunn**: En nybegynner responderer raskt paa nesten all trening, mens en erfaren utover trenger mer spesifikke og intense stimuli.\n- **Alder**: Eldre trenger lengre restitusjon og responderer annerledes paa treningsbelastning.\n- **Kjonn**: Hormonelle forskjeller pavirker blant annet muskelvekst og restitusjon.\n- **Ernaering og sovn**: Utilstrekkelig naeringsinnak eller daarlig sovnkvalitet reduserer treningsresponsen betydelig.\n- **Psykologisk stress**: Hoyt stressnivaa i hverdagen kan redusere kroppens evne til restitusjon og adaptasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 1.2: Periodisering
// ============================================================================

export const CHAPTER_TRENING_2_1_2: TextbookChapter = {
  id: 'trening-2-1-2',
  courseId: 'trening-2',
  chapterNumber: '1.2',
  title: 'Periodisering',
  description: 'Lineaer, ondulerende og blokkperiodisering med makro-, meso- og mikrosykluser.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forstaa begrepene makrosyklus, mesosyklus og mikrosyklus',
    'kunne forklare og sammenligne lineaer, ondulerende og blokkperiodisering',
    'kunne anvende periodiseringsmodeller i treningsplanlegging',
  ],
  content: [
    {
      id: 'tr2-1-2-intro',
      type: 'text',
      content: `# Periodisering

Periodisering er den systematiske planleggingen av trening over tid, der belastning, volum, intensitet og treningsinnhold varieres for aa oppnaa optimal utvikling og toppform til riktig tidspunkt. Begrepet ble utviklet av den russiske treningsforskeren Lev Matveyev paa 1960-tallet og har siden blitt et av de mest sentrale verktoyene i moderne treningsplanlegging.

Uten periodisering risikerer utoveren stagnasjon, overtrening eller at toppformen inntreffar paa feil tidspunkt. Med god periodisering kan man styre treningsprosessen slik at de riktige egenskapene utvikles i riktig rekkefolge, og at kroppen faar tilstrekkelig restitusjon mellom intensive perioder.

I dette kapittelet gjennomgaar vi de viktigste periodiseringsmodellene og ser paa hvordan de kan brukes for utovere paa ulikt nivaa og i ulike idretter.`,
    },
    {
      id: 'tr2-1-2-def1',
      type: 'definition',
      title: 'Periodisering',
      content: 'Periodisering er den planmessige inndelingen av trening i definerte tidsperioder (sykluser) der treningsvariabler som volum, intensitet, ovelsevalg og restitusjon varieres systematisk. Maalet er aa maksimere adaptasjon, forebygge overtrening og styre toppform mot bestemte tidspunkt, for eksempel konkurranser.',
    },
    {
      id: 'tr2-1-2-text1',
      type: 'text',
      title: 'Treningssykluser',
      content: `Periodisering opererer med tre hovednivaaer av tidsinndeling:

**Makrosyklus (lang sikt)**
En makrosyklus dekker en lengre periode, typisk en hel sesong eller et aar. For en eliteutover kan dette vaere fra etter forrige hovedkonkurranse til neste. Makrosyklusen deles inn i forberedelsesperiode, konkurranseperiode og overgangsperiode.

- Forberedelsesperiode: Generell og spesifikk oppbygging av fysiske egenskaper
- Konkurranseperiode: Vedlikehold og topping mot viktige konkurranser
- Overgangsperiode: Aktiv hvile og regenerering etter sesongen

**Mesosyklus (mellomlang sikt)**
En mesosyklus varer typisk 3-6 uker og har et spesifikt treningsmaal. Eksempler: «Grunnleggende styrkefase» (4 uker med hypertrofifokus) eller «Topningsfase» (3 uker med redusert volum foer konkurranse).

Hver mesosyklus folger som regel en progresjon der belastningen oker over 2-4 uker, etterfulgt av en lettere «deload»-uke for restitusjon og superkompensasjon.

**Mikrosyklus (kort sikt)**
En mikrosyklus er typisk en treningsuke. Den beskriver den konkrete fordelingen av treningsokter, intensitet og hvile gjennom uken. Eksempel: mandag (tung styrke), tirsdag (lett utholdenhet), onsdag (hvile), torsdag (eksplosivitet), fredag (moderat styrke), helg (aktiv restitusjon).`,
    },
    {
      id: 'tr2-1-2-def2',
      type: 'definition',
      title: 'Deload-uke',
      content: 'En deload-uke er en planlagt lettere treningsuke som legges inn etter 2-4 uker med progressiv okning av belastning. Formaolet er aa gi kroppen og nervesystemet tid til fullstendig restitusjon og superkompensasjon. Typisk reduseres volumet med 40-60 % mens intensiteten holdes moderat (60-75 % av 1RM). Deload-uker er avgjorende for aa forebygge overtrening og oppnaa langsiktig fremgang.',
    },
    {
      id: 'tr2-1-2-text2',
      type: 'text',
      title: 'Periodiseringsmodeller',
      content: `Det finnes flere modeller for periodisering. De tre mest brukte er:

**1. Lineaer (klassisk) periodisering**
Utviklet av Matveyev. Innebarer en gradvis overgang fra hoyt volum og lav intensitet til lavt volum og hoey intensitet gjennom sesongen.

- Fase 1 (hypertrofi): 3-5 sett x 10-15 reps, 60-75 % av 1RM
- Fase 2 (grunnstyrke): 3-5 sett x 6-8 reps, 75-85 % av 1RM
- Fase 3 (maksimal styrke): 3-5 sett x 1-5 reps, 85-100 % av 1RM
- Fase 4 (topping/konkurranse): Redusert volum, hoey intensitet

Fordeler: Enkel aa forstaa og implementere. God for nybegynnere.
Ulemper: Egenskaper utviklet tidlig i programmet kan avta naar fokuset skifter.

**2. Ondulerende (boelge-) periodisering**
Treningsvariablene varieres hyppigere, ofte fra okt til okt eller fra uke til uke.

Daglig ondulerende (DUP):
- Mandag: 4x6 paa 80 % (styrke)
- Onsdag: 3x12 paa 65 % (hypertrofi)
- Fredag: 5x3 paa 90 % (maksimal styrke)

Fordeler: Opprettholder flere egenskaper samtidig. God variasjon hindrer stagnasjon.
Ulemper: Mer krevende aa planlegge og styre.

**3. Blokkperiodisering**
Utviklet av Vladimir Issurin. Treningen deles i konsentrerte blokker paa 2-4 uker der kun 1-2 egenskaper prioriteres om gangen.

- Akkumuleringsblokk: Hoyt volum, generell oppbygging (hypertrofi, aerob base)
- Transformasjonsblokk: Okt intensitet, spesifikk utvikling (styrke, kraft)
- Realiseringsblokk: Lavt volum, topping for konkurranse

Fordeler: Sterk fokusert utvikling av enkeltegenskaper. Velegnet for erfarne utovere.
Ulemper: Andre egenskaper kan midlertidig avta under en spesifikk blokk.`,
    },
    {
      id: 'tr2-1-2-example1',
      type: 'example',
      title: 'Lineaer periodisering for en haandballspiller',
      problem: 'En haandballspiller har 16 uker til sesongstart. Lag en overordnet lineaer periodiseringsplan med fire mesosykluser.',
      solution: `**Makrosyklus: 16 uker til sesongstart**

**Mesosyklus 1 — Generell forberedelse (uke 1-4): Hypertrofi**
- Maal: Bygge muskelmasse og generell styrke
- Volum: 3-4 sett x 10-12 reps per ovelse
- Intensitet: 65-75 % av 1RM
- Fokus: Sammensatte ovelser (kneboey, benkpress, markloeft, rodd)
- Uke 4: Deload (redusert volum)

**Mesosyklus 2 — Grunnstyrke (uke 5-8)**
- Maal: Oke maksimal styrke som grunnlag for power
- Volum: 4-5 sett x 5-8 reps
- Intensitet: 75-85 % av 1RM
- Fokus: Tyngre belastning, sammensatte ovelser
- Uke 8: Deload

**Mesosyklus 3 — Kraftutvikling (uke 9-12)**
- Maal: Omforme styrke til eksplosiv kraft relevant for haandball
- Volum: 3-4 sett x 3-5 reps + plyometri
- Intensitet: 85-95 % av 1RM, eksplosiv intensjon
- Fokus: Olympiske loft, plyometri, kast med medisinball
- Uke 12: Deload

**Mesosyklus 4 — Topping (uke 13-16)**
- Maal: Toppform til sesongstart
- Volum: Redusert (2-3 sett x 2-4 reps)
- Intensitet: Hoey, men med full restitusjon
- Fokus: Idrettsspesifikk trening, kamplignende situasjoner

Gjennom hele perioden oker intensiteten mens volumet gradvis reduseres, helt i traad med den lineaere modellen.`,
    },
    {
      id: 'tr2-1-2-tip1',
      type: 'tip',
      title: 'Deload-uker er ikke sloesing med tid',
      content: 'Mange utovere unnlater aa legge inn planlagte deload-uker fordi de foeler at de mister tid. I virkeligheten er deload-uken der mye av adaptasjonen og superkompensasjonen faktisk skjer. Kroppen trenger tid til aa bygge seg opp etter flere uker med progressiv overbelastning. En godt timet deload-uke kan gi storre fremgang enn en ekstra hard treningsuke.',
    },
    {
      id: 'tr2-1-2-ex1',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-2-ex1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er en mesosyklus?',
        options: [
          { id: 'a', text: 'En enkelt treningsokt', isCorrect: false },
          { id: 'b', text: 'En treningsperiode paa typisk 3-6 uker med et spesifikt treningsmaal', isCorrect: true },
          { id: 'c', text: 'Et helt treningsaar', isCorrect: false },
          { id: 'd', text: 'En ukes treningsprogram', isCorrect: false },
        ],
        hints: ['Tenk paa de tre nivaaene i periodisering: makro, meso og mikro.'],
        solution: 'En mesosyklus er en treningsperiode paa typisk 3-6 uker med et spesifikt treningsmaal, for eksempel hypertrofi, grunnstyrke eller topping. Flere mesosykluser utgjor en makrosyklus, og hver mesosyklus bestaar av flere mikrosykluser (treningsuker).',
      },
    },
    {
      id: 'tr2-1-2-ex2',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-2-ex2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva kjennetegner lineaer periodisering?',
        options: [
          { id: 'a', text: 'Treningsintensiteten er den samme gjennom hele programmet', isCorrect: false },
          { id: 'b', text: 'Volumet oker og intensiteten synker gjennom programmet', isCorrect: false },
          { id: 'c', text: 'Volumet synker gradvis mens intensiteten oker gjennom programmet', isCorrect: true },
          { id: 'd', text: 'Man trener forskjellige intensiteter hver dag', isCorrect: false },
        ],
        solution: 'Lineaer periodisering kjennetegnes av en gradvis overgang fra hoyt volum og lav intensitet til lavt volum og hoey intensitet. Typisk starter man med en hypertrofifase (mange repetisjoner, moderat vekt) og avslutter med en topningsfase (faa repetisjoner, tung vekt).',
      },
    },
    {
      id: 'tr2-1-2-ex3',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-2-ex3',
        number: '3',
        type: 'classic',
        task: 'Sammenlign lineaer periodisering og daglig ondulerende periodisering (DUP).',
        subTasks: [
          {
            label: 'a',
            task: 'Beskriv hvordan treningsvariablene varieres i de to modellene.',
            solution: 'I lineaer periodisering varieres volum og intensitet gradvis over uker og maaneder — man starter med hoyt volum og lav intensitet og beveger seg mot lavt volum og hoey intensitet. I DUP varieres variablene fra okt til okt innenfor samme uke, slik at man for eksempel trener hypertrofi mandag, styrke onsdag og power fredag.',
            multipleChoiceOptions: [
              'Lineaer: gradvis endring over uker; DUP: variasjon fra okt til okt',
              'Lineaer: daglig variasjon; DUP: gradvis endring over maaneder',
              'Begge modellene varierer treningen likt',
              'Ingen av modellene varierer treningsvariablene',
            ],
          },
          {
            label: 'b',
            task: 'For hvilke typer utovere passer de to modellene best?',
            solution: 'Lineaer periodisering passer best for nybegynnere og utovere i idretter med en tydelig sesongstruktur (for eksempel vektlofting), fordi den er enkel aa forstaa og gjennomfore. DUP passer bedre for viderekomne utovere og lagidrettsutovere som maa opprettholde flere egenskaper samtidig gjennom hele sesongen.',
          },
        ],
        solution: 'Lineaer periodisering gir en systematisk progresjon fra volum til intensitet og passer for nybegynnere og utovere med klar sesongstruktur. DUP gir hyppigere variasjon og opprettholder flere egenskaper samtidig, noe som passer for viderekomne og lagidrettsutovere.',
      },
    },
    {
      id: 'tr2-1-2-ex4',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-2-ex4',
        number: '4',
        type: 'classic',
        task: 'Forklar begrepet blokkperiodisering og beskriv de tre hovedblokkene (akkumulering, transformasjon, realisering).',
        solution: 'Blokkperiodisering er en periodiseringsmodell utviklet av Vladimir Issurin der treningen deles i konsentrerte blokker paa 2-4 uker med fokus paa 1-2 egenskaper.\n\n**Akkumuleringsblokk**: Hoyt volum, generell oppbygging. Fokus paa arbeidsk apasitet, hypertrofi og aerob base. Intensiteten er moderat.\n\n**Transformasjonsblokk**: Okt intensitet, redusert volum. Fokus paa aa omforme den generelle kapasiteten til spesifikke egenskaper som maksimal styrke, anaerob kapasitet eller eksplosiv kraft.\n\n**Realiseringsblokk**: Lavt volum, hoey spesifisitet. Fokus paa topping mot konkurranse. Kroppen faar tid til aa superkompensere fra de foregaaende blokkene.\n\nModellen egner seg best for erfarne utovere som trenger fokusert trening for aa utvikle spesifikke egenskaper videre.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr2-1-2-ex5',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-2-ex5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva er hovedformaalet med en deload-uke?',
        options: [
          { id: 'a', text: 'Aa trene saa hardt som mulig for aa presse kroppen videre', isCorrect: false },
          { id: 'b', text: 'Aa slutte helt med trening i en uke', isCorrect: false },
          { id: 'c', text: 'Aa gi kroppen og nervesystemet tid til fullstendig restitusjon og superkompensasjon', isCorrect: true },
          { id: 'd', text: 'Aa teste ny 1RM i alle ovelser', isCorrect: false },
        ],
        solution: 'Hovedformaalet med en deload-uke er aa gi kroppen og nervesystemet tid til fullstendig restitusjon og superkompensasjon etter flere uker med progressiv overbelastning. Volumet reduseres typisk med 40-60 % mens intensiteten holdes moderat. Man trener fortsatt, men med redusert belastning.',
      },
    },
    {
      id: 'tr2-1-2-ex6',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-2-ex6',
        number: '6',
        type: 'classic',
        task: 'En langrennsutover har 6 maaneder til VM. Lag en overordnet periodiseringsplan med passende mesosykluser. Begrunn valg av periodiseringsmodell.',
        solution: 'For en langrennsutover med 6 maaneder til VM anbefales en kombinasjon av lineaer og blokkperiodisering:\n\n**Mesosyklus 1-2 (uke 1-8): Akkumulering — Generell forberedelse**\nHoyt volum med langtur, rolig lopstrening, generell styrke. Bygge aerob base og muskulaer utholdenhet. Volum: 12-16 timer per uke.\n\n**Mesosyklus 3-4 (uke 9-16): Transformasjon — Spesifikk oppbygging**\nOkt andel idrettsspesifikk trening (rulleski, skigange). Intervalltrenig (4x4 min, terskelintervaller). Styrketrening med fokus paa eksplosivitet og styrkeutholdnehet. Volum: 10-14 timer per uke.\n\n**Mesosyklus 5 (uke 17-20): Realisering — Konkurranseforberedelse**\nHoey andel spesifikk trening, skarpe intervaller, skiteknikk. Redusert volum men okt intensitet. Volum: 8-12 timer per uke.\n\n**Mesosyklus 6 (uke 21-24): Topping — VM-forberedelse**\nYtterligere volumreduksjon (tapering). Kun kvalitetsokter og lett vedlikehold. Fokus paa aa vaere uthvilt og skarpt til VM.\n\nModellen kombinerer lineaer progresjon (fra generelt til spesifikt) med blokkperiodiseringens fokus paa konsentrerte utviklingsperioder, noe som passer godt for en erfaren langrennsutover.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 1.3: Belastning og restitusjon
// ============================================================================

export const CHAPTER_TRENING_2_1_3: TextbookChapter = {
  id: 'trening-2-1-3',
  courseId: 'trening-2',
  chapterNumber: '1.3',
  title: 'Belastning og restitusjon',
  description: 'Treningsbelastning, overtrening og restitusjonsstrategier.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forstaa sammenhengen mellom treningsbelastning og restitusjon',
    'kunne identifisere tegn paa overtrening og overbelastning',
    'kjenne til ulike restitusjonsstrategier og deres effekt',
  ],
  content: [
    {
      id: 'tr2-1-3-intro',
      type: 'text',
      content: `# Belastning og restitusjon

Balansen mellom treningsbelastning og restitusjon er selve kjernen i effektiv trening. All treningsfremgang avhenger av at kroppen utsettes for tilstrekkelig stimulus (belastning) og deretter faar nok tid og ressurser til aa tilpasse seg (restitusjon). Naar denne balansen brytes, enten ved for stor belastning eller utilstrekkelig hvile, risikerer utoveren overbelastning og i verste fall overtreningssyndrom.

I dette kapittelet utforsker vi hvordan treningsbelastning kan kvantifiseres og styres, hva som kjennetegner overtrening kontra funksjonell overbelastning, og hvilke restitusjonsstrategier som har dokumentert effekt. Vi ser ogsaa paa faktorer utenfor trening som pavirker restitusjon, som sovn, ernaering og psykologisk stress.

For trenere er evnen til aa styre belastning og restitusjon kanskje den viktigste kompetansen — det er her forskjellen mellom fremgang og stagnasjon ofte ligger.`,
    },
    {
      id: 'tr2-1-3-def1',
      type: 'definition',
      title: 'Treningsbelastning',
      content: 'Treningsbelastning er den totale paakjenningen kroppen utsettes for under trening, og kan deles i ekstern og intern belastning. Ekstern belastning er det objektive arbeidet som utfores (vekt, distanse, tid, repetisjoner). Intern belastning er kroppens fysiologiske og psykologiske respons paa arbeidet (hjertefrekvens, laktat, opplevd anstrengelse). To utovere som gjor samme eksterne belastning kan ha svart ulik intern belastning avhengig av treningsstatus og dagsform.',
    },
    {
      id: 'tr2-1-3-text1',
      type: 'text',
      title: 'Kvantifisering av treningsbelastning',
      content: `For aa styre treningen effektivt maa man kunne maale og overvake belastningen. Det finnes flere metoder:

**Fosters metode (session-RPE)**
En av de mest brukte metodene for aa kvantifisere treningsbelastning. Utoveren vurderer oaktens opplevde anstrengelse paa en skala fra 1-10 (RPE-skala) 30 minutter etter okten, og multipliserer med oaktens varighet i minutter.

Treningsbelastning = RPE x varighet (min)

Eksempel: En okt som varer 60 minutter og vurderes til RPE 7 gir belastning = 7 x 60 = 420 AU (arbitrary units).

**TRIMP (Training Impulse)**
Beregnes ut fra hjertefrekvensdata og tar hensyn til baade varighet og intensitet. Varier i hoey grad i sin opprinnelige form etter kjonn.

**Akutt:kronisk belastningsratio (ACWR)**
Forholdet mellom den siste ukens belastning (akutt) og gjennomsnittlig ukebelastning de siste 4 ukene (kronisk). En ratio mellom 0,8 og 1,3 anses som optimal for utvikling, mens verdier over 1,5 indikerer forhoeyet skaderisiko.

ACWR = akutt ukebelastning / gjennomsnittlig ukebelastning siste 4 uker

**Praktisk bruk:**
Ved aa registrere treningsbelastning systematisk kan man:
- Overvake treningsprogresjon objektivt
- Identifisere risiko for overbelastning tidlig
- Tilpasse belastningen til individuelle responser
- Planlegge deload-uker basert paa akkumulert belastning`,
    },
    {
      id: 'tr2-1-3-def2',
      type: 'definition',
      title: 'Overtreningssyndrom',
      content: 'Overtreningssyndrom (OTS) er en tilstand som oppstaar etter langvarig ubalanse mellom treningsbelastning og restitusjon. Kjennetegnes av vedvarende prestasjonsfall som ikke bedres av normal hvile (minimum 2 uker). Symptomer inkluderer kronisk tratthet, soevnproblemer, redusert appetitt, okt infeksjonsmottakelighet, nedstemthet, forhoeyet hvilepuls og hormonforstyrrelser. OTS kan ta maaneder aa komme seg fra og krever betydelig reduksjon eller fullstendig stopp i trening.',
    },
    {
      id: 'tr2-1-3-text2',
      type: 'text',
      title: 'Overbelastning versus overtrening',
      content: `Det er viktig aa skille mellom ulike stadier av for hoey treningsbelastning:

**Funksjonell overbelastning (functional overreaching)**
Planlagt og kontrollert overbelastning i korte perioder (1-2 uker) for aa fremprovosere superkompensasjon. Utoveren opplever midlertidig prestasjonsfall, men etter tilstrekkelig restitusjon oppnaar man et hoeyere prestasjonsnivaa. Dette er et legitimt treningsverktoy som brukes bevisst i periodisering.

**Ikke-funksjonell overbelastning (non-functional overreaching)**
Utilsiktet overbelastning som forer til prestasjonsfall som varer lengre enn forventet (2-4 uker). Utoveren trenger ekstra hvile for aa komme tilbake, og restitusjonen tar vesentlig lengre tid. Dette er et faresignal som krever justering av treningsprogrammet.

**Overtreningssyndrom (overtraining syndrome)**
Alvorlig tilstand med langvarig prestasjonsfall og systemiske symptomer. Kan ta maaneder aa restituere fra. Krever ofte medisinsk oppfolging.

**Tegn paa at belastningen er for hoey:**
- Prestasjonene stagnerer eller faller over flere uker
- Vedvarende tratthet som ikke bedres med normal hvile
- Forstyrret sovn (innsovningsproblemer, hyppige oppvaakninger)
- Okt hvilepuls (mer enn 5-10 slag over normalt)
- Hyppige forkjolelser og infeksjoner
- Tap av motivasjon og treningslyst
- Smerter i ledd og muskler som ikke gaar over
- Nedstemthet og irritabilitet`,
    },
    {
      id: 'tr2-1-3-note1',
      type: 'note',
      title: 'Sovn er den viktigste restitusjonsstrategien',
      content: 'Forskning viser gjennomgaaende at sovn er den mest effektive og viktigste restitusjonsstrategien. Under dyp sovn (NREM stadium 3-4) utskilles veksthormon som er avgjorende for muskelreparasjon og -vekst. Utovere som sover 8-10 timer per natt presterer betydelig bedre enn de som sover 6 timer eller mindre. Daarlig sovnkvalitet reduserer proteinsyntesen, svekker immunforsvaret og pavirker konsentrasjon og reaksjonstid negativt.',
    },
    {
      id: 'tr2-1-3-example1',
      type: 'example',
      title: 'Beregning av treningsbelastning med session-RPE',
      problem: 'En utover gjennomforer folgende treningsokter i en uke: Mandag: 75 min, RPE 8. Onsdag: 60 min, RPE 6. Fredag: 90 min, RPE 7. Lordag: 45 min, RPE 5. Beregn total ukebelastning og gjennomsnittlig oktbelastning.',
      solution: `**Beregning med Fosters metode (RPE x varighet):**

Mandag: 8 x 75 = 600 AU
Onsdag: 6 x 60 = 360 AU
Fredag: 7 x 90 = 630 AU
Lordag: 5 x 45 = 225 AU

**Total ukebelastning:** 600 + 360 + 630 + 225 = **1815 AU**

**Gjennomsnittlig oktbelastning:** 1815 / 4 = **ca. 454 AU per okt**

**Vurdering:**
Mandagens og fredagens okter har hoeyest belastning og krever mest restitusjon. Onsdagen og lordagen fungerer som lettere okter. Denne fordelingen gir en god variasjon i belastning gjennom uken.

Dersom utoverens gjennomsnittlige ukebelastning de siste 4 ukene har vaert 1500 AU, gir denne uken en ACWR paa 1815/1500 = 1,21, som er innenfor det optimale omraadet (0,8-1,3).`,
    },
    {
      id: 'tr2-1-3-tip1',
      type: 'tip',
      title: 'Den 80/20-regelen i treningsbelastning',
      content: 'Forskning paa eliteutovere i utholdenhetsidretter viser at de fleste vellykkede utovere folger en 80/20-fordeling: omtrent 80 % av treningsvolumet gjennomfores med lav intensitet (under anaerob terskel), mens ca. 20 % gjennomfores med hoey intensitet (over anaerob terskel). Denne polariserte treningsmodellen gir god utvikling med akseptabel belastning paa kroppen.',
    },
    {
      id: 'tr2-1-3-ex1',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-3-ex1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er forskjellen mellom ekstern og intern treningsbelastning?',
        options: [
          { id: 'a', text: 'Ekstern belastning er det objektive arbeidet, intern belastning er kroppens fysiologiske respons', isCorrect: true },
          { id: 'b', text: 'Ekstern belastning er utendorstrening, intern er innendorstrening', isCorrect: false },
          { id: 'c', text: 'Det er ingen forskjell — begrepene betyr det samme', isCorrect: false },
          { id: 'd', text: 'Ekstern belastning maaleslager med RPE, intern med vekt', isCorrect: false },
        ],
        hints: ['Tenk paa objektiv versus subjektiv belastning.'],
        solution: 'Ekstern belastning er det objektive arbeidet som utfores (vekt, distanse, tid, repetisjoner), mens intern belastning er kroppens fysiologiske og psykologiske respons (hjertefrekvens, laktat, opplevd anstrengelse). To utovere kan gjore samme eksterne belastning, men oppleve svart ulik intern belastning.',
      },
    },
    {
      id: 'tr2-1-3-ex2',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-3-ex2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hva indikerer en akutt:kronisk belastningsratio (ACWR) paa 1,8?',
        options: [
          { id: 'a', text: 'Optimal treningsbelastning for utvikling', isCorrect: false },
          { id: 'b', text: 'For lav belastning — utoveren trener for lite', isCorrect: false },
          { id: 'c', text: 'Forhoeyet risiko for skade og overbelastning', isCorrect: true },
          { id: 'd', text: 'Utoveren er i toppform', isCorrect: false },
        ],
        solution: 'En ACWR paa 1,8 betyr at den siste ukens belastning er 80 % hoeyere enn gjennomsnittet de siste 4 ukene. Verdier over 1,5 indikerer forhoeyet skaderisiko. Det optimale omraadet er 0,8-1,3. En ACWR paa 1,8 krever umiddelbar reduksjon av belastningen.',
      },
    },
    {
      id: 'tr2-1-3-ex3',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-3-ex3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom funksjonell overbelastning og overtreningssyndrom.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva er funksjonell overbelastning, og hvorfor kan det vaere nyttig i trening?',
            solution: 'Funksjonell overbelastning er en planlagt og kontrollert periode med okt treningsbelastning (1-2 uker) som midlertidig senker prestasjonsnivaaet. Etter tilstrekkelig restitusjon superkompenserer kroppen til et hoeyere nivaa. Det er nyttig fordi det gir sterkere treningsstimulus enn normal trening og kan brukes strategisk for aa bryte gjennom plataafaser.',
            multipleChoiceOptions: [
              'Planlagt overbelastning som gir superkompensasjon etter restitusjon',
              'En alvorlig tilstand som krever maaneder med hvile',
              'Trening med for lav intensitet',
              'Det samme som overtreningssyndrom',
            ],
          },
          {
            label: 'b',
            task: 'Hvilke symptomer skiller overtreningssyndrom fra vanlig tratthet etter hard trening?',
            solution: 'Overtreningssyndrom skiller seg fra vanlig tratthet ved at symptomene vedvarer i mer enn 2 uker til tross for hvile. Typiske symptomer er: vedvarende prestasjonsfall, kronisk tratthet, soevnforstyrrelser, tap av appetitt, okt infeksjonsmottakelighet, forhoeyet hvilepuls, hormonforstyrrelser, nedstemthet og motivasjonstap. Vanlig treningstratthet gaar over etter 1-3 dager med hvile.',
          },
        ],
        solution: 'Funksjonell overbelastning er en bevisst og kontrollert strategi som gir superkompensasjon etter kort tids restitusjon. Overtreningssyndrom er en alvorlig tilstand med langvarig prestasjonsfall og systemiske symptomer som krever uker til maaneder for aa komme seg fra.',
      },
    },
    {
      id: 'tr2-1-3-ex4',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-3-ex4',
        number: '4',
        type: 'classic',
        task: 'En utover har folgende ukebelastninger de siste 5 ukene: Uke 1: 1200 AU, Uke 2: 1400 AU, Uke 3: 1350 AU, Uke 4: 1500 AU, Uke 5: 2100 AU. Beregn ACWR for uke 5 og vurder skaderisikoen.',
        solution: 'ACWR = akutt ukebelastning / gjennomsnittlig ukebelastning siste 4 uker\n\nGjennomsnittlig kronisk belastning (uke 1-4): (1200 + 1400 + 1350 + 1500) / 4 = 5450 / 4 = 1362,5 AU\n\nAkutt belastning (uke 5): 2100 AU\n\nACWR = 2100 / 1362,5 = 1,54\n\nVurdering: En ACWR paa 1,54 er over den anbefalte grensen paa 1,3 og indikerer forhoeyet skaderisiko. Den siste uken representerer en okning paa 54 % over gjennomsnittet, noe som er for braat. Utoveren bor redusere belastningen de neste ukene og oke den mer gradvis (maksimalt 10-15 % okning per uke).',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr2-1-3-ex5',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-3-ex5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hvilken restitusjonstrategi anses som den viktigste basert paa forskning?',
        options: [
          { id: 'a', text: 'Isbad', isCorrect: false },
          { id: 'b', text: 'Massasje', isCorrect: false },
          { id: 'c', text: 'Sovn (8-10 timer per natt)', isCorrect: true },
          { id: 'd', text: 'Kompresjonsklar', isCorrect: false },
        ],
        solution: 'Forskning viser gjennomgaaende at sovn er den mest effektive og viktigste restitusjonsstrategien. Under dyp sovn utskilles veksthormon, proteinsyntesen er forhoeyet, og nervesystemet regenereres. Utovere som sover 8-10 timer per natt viser betydelig bedre prestasjon, raskere restitusjon og lavere skaderisiko enn de som sover for lite.',
      },
    },
    {
      id: 'tr2-1-3-ex6',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-3-ex6',
        number: '6',
        type: 'classic',
        task: 'En trener observerer at en av sine utovere har vist gradvis prestasjonsfall de siste 3 ukene, klager over daarlig sovn, har mistet appetitt og faar stadig forkjolelser. Beskriv hva som kan vaere galt, og lag en plan for hvordan situasjonen bor haandteres.',
        solution: 'Symptomene tyder sterkt paa ikke-funksjonell overbelastning som kan vaere i ferd med aa utvikle seg til overtreningssyndrom. De viktigste tegnene er vedvarende prestasjonsfall (3 uker), sovnforstyrrelser, appetittap og okt infeksjonsmottakelighet.\n\n**Handlingsplan:**\n1. **Umiddelbar belastningsreduksjon**: Reduser treningsvolumet med 50-70 % de neste 1-2 ukene. Kun lette, korte okter.\n2. **Sovnfokus**: Prioriter 9-10 timer sovn per natt. Faste leggetider, ingen skjermbruk siste time foer soening.\n3. **Ernaering**: Sikre tilstrekkelig energiinntak, spesielt karbohydrater for glykogenfylling og protein for muskelreparasjon. Kontroller at utoveren ikke er i energiunderskudd.\n4. **Stresskartlegging**: Kartlegg stressfaktorer utenfor treningen (skole, arbeid, relasjoner) som kan bidra til belastningen.\n5. **Medisinsk vurdering**: Dersom symptomene ikke bedres etter 2 uker med redusert belastning, bor utoveren undersokes av lege (blodprover, hormonstatus).\n6. **Gradvis opptrapping**: Naar symptomene er borte, trappes treningen gradvis opp med maksimalt 10 % okning i ukebelastning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 1.4: Adaptasjon og treningsrespons
// ============================================================================

export const CHAPTER_TRENING_2_1_4: TextbookChapter = {
  id: 'trening-2-1-4',
  courseId: 'trening-2',
  chapterNumber: '1.4',
  title: 'Adaptasjon og treningsrespons',
  description: 'Nevrale, muskulaere og metabolske tilpasninger til trening.',
  estimatedMinutes: 20,
  competenceGoals: [
    'forstaa nevrale tilpasninger som skjer ved styrketrening',
    'kunne forklare muskulaere adaptasjoner ved ulike treningsformer',
    'kjenne til metabolske tilpasninger ved utholdenhetstrening',
  ],
  content: [
    {
      id: 'tr2-1-4-intro',
      type: 'text',
      content: `# Adaptasjon og treningsrespons

Trening er i bunn og grunn en kontrollert paakjenning som tvinger kroppen til aa tilpasse seg. Disse tilpasningene — adaptasjonene — er det som gjor oss sterkere, raskere og mer utholdende. Adaptasjon skjer paa flere nivaaer: i nervesystemet (nevralt), i muskulaturen (muskulaert) og i stoffskiftet (metabolsk).

Ulike treningsformer gir ulike adaptasjoner. Tung styrketrening pavirker primaert nervesystemet og muskelfibrene, mens utholdenhetsrening endrer hjertets kapasitet, blodets oksygentransport og musklenes evne til aa utnytte oksygen. Ved aa forstaa hvilke adaptasjoner ulike treningsformer gir, kan trenere og utovere designe treningsopplegg som maalrettet utvikler de egenskapene som trengs.

I dette kapittelet ser vi systematisk paa de viktigste adaptasjonene som skjer i nervesystemet, muskulaturen og stoffskiftet som respons paa trening.`,
    },
    {
      id: 'tr2-1-4-def1',
      type: 'definition',
      title: 'Adaptasjon',
      content: 'Adaptasjon i treningssammenheng er kroppens fysiologiske tilpasning til gjentatt treningsbelastning. Adaptasjonene er spesifikke for den typen trening som utfores (spesifisitetsprinsippet) og forutsetter at belastningen er tilstrekkelig stor og at restitusjonen er adekvat. Adaptasjon kan vaere nevral (nervesystemet), strukturell (muskel, sene, bein) eller metabolsk (energisystemer, enzymer, mitokondrier).',
    },
    {
      id: 'tr2-1-4-text1',
      type: 'text',
      title: 'Nevrale adaptasjoner',
      content: `Nervesystemet er det forste som tilpasser seg ny trening, og nevrale adaptasjoner forklarer mye av styrkeframgangen man ser de forste ukene av et treningsprogram.

**Motorisk rekruttering**
Med trening laerer nervesystemet aa rekruttere flere motoriske enheter, spesielt de store type II-enhetene som har hoeyest kraftpotensial. En utrent person kan typisk bare viljestyrt aktivere 60-70 % av muskelens motoriske enheter, mens en godt trent utover kan aktivere opp mot 95 %.

**Fyringsfrekvens**
Nervesystemet oker hastigheten paa signalene som sendes til musklene. Raskere fyringsfrekvens gir sterkere og raskere muskelkontraksjon. Dette er saerlig viktig for eksplosiv kraft.

**Intermuskulaer koordinasjon**
Samspillet mellom agonister (primaermuskel), synergister (hjelpemuskler), stabilisatorer og antagonister (motstaaende muskler) forbedres. Bevegelsen blir mer okonomisk og kraftfull.

**Intramuskulaer koordinasjon**
Synkroniseringen av motoriske enheter innenfor en enkelt muskel forbedres, slik at flere enheter produserer kraft samtidig.

**Redusert antagonist-koaktivering**
Nervesystemet laerer aa slappe av antagonistene i storre grad under bevegelse, noe som reduserer intern motstand og gir storre nettokraft.

**Tidsforloep:**
Nevrale adaptasjoner dominerer styrkeframgangen de forste 6-8 ukene av trening. Deretter tar strukturelle (muskulaere) adaptasjoner gradvis over som den primaere driveren.`,
    },
    {
      id: 'tr2-1-4-def2',
      type: 'definition',
      title: 'Motorisk enhet',
      content: 'En motorisk enhet bestaar av en motorisk nervecelle (motoneuron) og alle muskelfibrene den innerverer. Det finnes smaa motoriske enheter med faa, langsomme type I-fibre (lav kraftproduksjon, hoey utholdenhet) og store motoriske enheter med mange, raske type II-fibre (hoey kraftproduksjon, lav utholdenhet). Rekrutteringen folger Henneman-prinsippet: smaa enheter forst, store enheter sist.',
    },
    {
      id: 'tr2-1-4-text2',
      type: 'text',
      title: 'Muskulaere og metabolske adaptasjoner',
      content: `**Muskulaere adaptasjoner ved styrketrening:**

- **Hypertrofi**: Okning i muskelfibrenes tverrsnitt gjennom okt proteinsyntese (mer aktin og myosin). Synlig etter 8-12 uker med regelmessig trening.
- **Fibertype-tilpasning**: Type IIx-fibre kan konverteres til type IIa-fibre ved utholdende trening, og omvendt kan type I-tendenser forsterkes med utholdenhetstrening.
- **Okt pennasjonsvinkel**: Muskelfibrene fester seg i en brattere vinkel, noe som gir plass til flere fibre og okt kraftpotensial.
- **Sene- og bindevevsadaptasjon**: Sener og bindevev styrkes og taalermer kraft, men tilpasningen tar lengre tid enn muskulaer adaptasjon (12-24 uker).

**Metabolske adaptasjoner ved utholdenhetstrening:**

- **Okt mitokondrievolum**: Mitokondriene (cellenes «kraftverk») oker i antall og storrelse, noe som forbedrer aerob energiproduksjon med 40-100 %.
- **Okt kapillaertetthet**: Flere smaa blodkar rundt muskelfibrene gir bedre oksygentilforsel og avfallstransport.
- **Okt aerobe enzymaktivitet**: Enzymene i sitronsyresyklusen og elektrontransportkjeden blir mer effektive.
- **Storre glykogenlagre**: Musklene lagrer mer glykogen, noe som gir okt utholdenhetskapasitet.
- **Hjertets tilpasning**: Ventrikkelvolum oker (eksentri hypertrofi), slagvolum oker, og hvilepuls synker. VO2maks forbedres med 15-30 % hos utrente.

**Hormoner og adaptasjon:**
Trening pavirker flere hormoner som er involvert i adaptasjon:
- Testosteron: Stimulerer proteinsyntese og muskelvekst
- Veksthormon: Fremmer vevsreparasjon og fettforbrenning
- Kortisol: Stresshormon som i for store mengder kan vaere katabolt
- Insulin: Regulerer naeringsopptak i musklene
- IGF-1: Vekstfaktor som stimulerer muskeladaptasjon`,
    },
    {
      id: 'tr2-1-4-note1',
      type: 'note',
      title: 'Gjentatt treningseffekt (repeated bout effect)',
      content: 'Naar man utforer en ny type trening for forste gang, oppstaar ofte betydelig muskelomhet (DOMS). Neste gang man gjor samme type trening, er DOMS mye mindre — selv om belastningen er den samme. Dette kalles «repeated bout effect» og skyldes at musklene har tilpasset seg den spesifikke belastningstypen. Tilpasningen varer i flere uker. Dette forklarer hvorfor nybegynnere opplever mest muskelomhet og hvorfor variasjon i trening kan gi ny stimulus.',
    },
    {
      id: 'tr2-1-4-example1',
      type: 'example',
      title: 'Adaptasjoner hos en nybegynner versus erfaren utover',
      problem: 'Sammenlign de viktigste adaptasjonene som skjer hos en nybegynner de forste 12 ukene av styrketrening med dem en erfaren utover opplever i en 12-ukers treningsperiode.',
      solution: `**Nybegynner (forste 12 uker):**

Uke 1-6 — Dominert av nevrale adaptasjoner:
- Okt motorisk rekruttering (fra ca. 60 % til 80 % aktivering)
- Bedre intermuskulaer koordinasjon
- Okt fyringsfrekvens
- Styrkeframgang: 20-40 % okning i 1RM
- Liten eller ingen synlig muskelvekst

Uke 7-12 — Begynnende strukturelle adaptasjoner:
- Hypertrofi begynner (synlig etter uke 8-10)
- Fortsatt nevral forbedring, men i avtagende grad
- Sener og bindevev begynner aa tilpasse seg
- Ytterligere 10-20 % styrkeframgang

Total: 30-60 % styrkeframgang, moderat muskelvekst.

**Erfaren utover (12 uker):**
- Minimal nevral forbedring (allerede naer potensial)
- Moderat hypertrofi (2-5 % okning i muskeltverrsnitt)
- Styrkeframgang: 2-5 % okning i 1RM
- Krever mer avansert periodisering og spesifikk stimulus
- Sene- og bindevevsadaptasjon fortsetter

Konklusjon: Nybegynnere oppnaar mye raskere og storre fremgang, primaert gjennom nevrale tilpasninger. Erfarne utovere maa jobbe mye hardere for mye mindre fremgang, og periodisering blir avgjorende.`,
    },
    {
      id: 'tr2-1-4-tip1',
      type: 'tip',
      title: 'Taal pasienten med senevev',
      content: 'Muskulaturen tilpasser seg trening raskere enn sener og bindevev. Muskler kan oke styrken med 20-40 % paa 6-8 uker, mens sener trenger 12-24 uker for tilsvarende tilpasning. Dette betyr at det i perioder oppstaar et misforhold der musklene er sterke nok til aa produsere krefter som senene ikke er klare for. Denne ubalansen er en vanlig aarsak til seneoverbelastningsskader hos ivrige nybegynnere. Oek belastningen gradvis!',
    },
    {
      id: 'tr2-1-4-ex1',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-4-ex1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hvilken adaptasjon dominerer styrkeframgangen de forste 6-8 ukene av et nytt treningsprogram?',
        options: [
          { id: 'a', text: 'Muskelvekst (hypertrofi)', isCorrect: false },
          { id: 'b', text: 'Nevrale tilpasninger (bedre rekruttering og koordinasjon)', isCorrect: true },
          { id: 'c', text: 'Okt senesstyrke', isCorrect: false },
          { id: 'd', text: 'Okt mitokondrievolum', isCorrect: false },
        ],
        hints: ['Tenk paa hva som skjer med nervesystemet foer muskelen begynner aa vokse.'],
        solution: 'De forste 6-8 ukene domineres styrkeframgangen av nevrale tilpasninger: bedre motorisk rekruttering, okt fyringsfrekvens, forbedret inter- og intramuskulaer koordinasjon, og redusert antagonist-koaktivering. Hypertrofi begynner vanligvis forst etter 8-12 uker.',
      },
    },
    {
      id: 'tr2-1-4-ex2',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-4-ex2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilken metabolsk adaptasjon er mest avgjorende for forbedret aerob kapasitet?',
        options: [
          { id: 'a', text: 'Okt glykogenlager', isCorrect: false },
          { id: 'b', text: 'Okt mitokondrievolum og kapillaertetthet', isCorrect: true },
          { id: 'c', text: 'Okt muskelstorrelse', isCorrect: false },
          { id: 'd', text: 'Hoeyere testosteronnivaa', isCorrect: false },
        ],
        solution: 'Okt mitokondrievolum (flere og storre mitokondrier) og okt kapillaertetthet (flere blodkar rundt muskelfibrene) er de mest avgjorende metabolske adaptasjonene for aerob kapasitet. Mitokondriene er cellens kraftverk for aerob energiproduksjon, og kapillaerene siker tilstrekkelig oksygentilforsel.',
      },
    },
    {
      id: 'tr2-1-4-ex3',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-4-ex3',
        number: '3',
        type: 'classic',
        task: 'Forklar begrepet motorisk enhet og Henneman-prinsippet.',
        subTasks: [
          {
            label: 'a',
            task: 'Hva bestaar en motorisk enhet av, og hva er forskjellen mellom smaa og store motoriske enheter?',
            solution: 'En motorisk enhet bestaar av en motorisk nervecelle (motoneuron) og alle muskelfibrene den innerverer. Smaa motoriske enheter har faa type I-fibre (langsomme, utholdende, lav kraft). Store motoriske enheter har mange type II-fibre (raske, kraftige, lite utholdende). Smaa enheter brukes til lette oppgaver, store enheter rekrutteres ved behov for hoey kraft.',
            multipleChoiceOptions: [
              'Et motoneuron og alle muskelfibrene det innerverer; smaa enheter har type I-fibre, store har type II-fibre',
              'En muskelfiber og alle nervecellene den er koblet til',
              'Alle motoriske enheter er like store',
              'En motorisk enhet er det samme som en muskelgruppe',
            ],
          },
          {
            label: 'b',
            task: 'Hvordan pavirker Henneman-prinsippet hvilke muskelfibre som rekrutteres under trening med ulik belastning?',
            solution: 'Henneman-prinsippet sier at motoriske enheter rekrutteres i stigende storrelse. Ved lett belastning rekrutteres kun smaa enheter med type I-fibre. Ettersom belastningen oker, rekrutteres gradvis storre enheter med type IIa og til slutt type IIx-fibre. For aa aktivere de storste og kraftigste fibrene maa belastningen vaere hoey (over 80 % av 1RM) eller bevegelsesintensjonen maa vaere maksimalt eksplosiv.',
          },
        ],
        solution: 'En motorisk enhet er et motoneuron med tilhorende muskelfibre. Henneman-prinsippet forklarer at rekrutteringen gaar fra smaa til store enheter etter behov, noe som betyr at tung belastning eller eksplosiv intensjon er nodvendig for aa aktivere de kraftigste type II-fibrene.',
      },
    },
    {
      id: 'tr2-1-4-ex4',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-4-ex4',
        number: '4',
        type: 'classic',
        task: 'Forklar hvorfor det oppstaar en periode med forhoeyet skaderisiko hos ivrige nybegynnere som oker treningsbelastningen raskt. Knytt svaret til ulik adaptasjonshastighet i forskjellige vev.',
        solution: 'Skaderisikoen oker fordi forskjellige vev tilpasser seg trening i ulik hastighet:\n\n- **Nervesystemet**: Tilpasser seg raskest (dager til uker). Utoveren blir raskt sterkere gjennom nevrale mekanismer.\n- **Muskulatur**: Tilpasser seg moderat raskt (6-12 uker). Musklene vokser og taler mer kraft.\n- **Sener og bindevev**: Tilpasser seg sakte (12-24 uker). Har lavere blodtilforsel og tregere stoffskifte.\n- **Bein**: Tilpasser seg svaert sakte (maaneder til aar).\n\nKonsekvensen: Etter 6-8 uker kan nervesystem og muskler produsere mye mer kraft enn foer, men senene har ikke rukket aa tilpasse seg tilsvarende. Utoveren kan dermed generere krefter som overskrider senenes toleranse, noe som forer til seneoverbelastning (tendinopati), senebetennelser eller i verste fall seneavrivning.\n\nForebygging: Oeek belastningen gradvis (maks 10 % per uke), bruk periodisering med deload-uker, og vaer oppmerksom paa smerter i sene- og leddomraader.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr2-1-4-ex5',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-4-ex5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva skjer med hjertet som adaptasjon til regelmessig utholdenhetstrening?',
        options: [
          { id: 'a', text: 'Hjerteveggene blir tykkere, men hjertekamrene blir mindre', isCorrect: false },
          { id: 'b', text: 'Hjertekamrene utvides (eksentrisk hypertrofi), slagvolumet oker og hvilepulsen synker', isCorrect: true },
          { id: 'c', text: 'Hjertet forblir uendret — det er kun musklene som tilpasser seg', isCorrect: false },
          { id: 'd', text: 'Hvilepulsen oker for aa sikre bedre blodtilforsel', isCorrect: false },
        ],
        solution: 'Regelmessig utholdenhetstrening gir eksentrisk hjertehypertrofi: hjertekamrene (spesielt venstre ventrikkel) utvides, slagvolumet oker (mer blod per slag), og hvilepulsen synker fordi hjertet jobber mer effektivt. Eliteutovere kan ha hvilepuls under 40 slag per minutt. Denne adaptasjonen er en av de viktigste for forbedret VO2maks.',
      },
    },
    {
      id: 'tr2-1-4-ex6',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-4-ex6',
        number: '6',
        type: 'classic',
        task: 'Du er trener for en elev som har trent styrke i 6 maaneder og opplever stagnasjon. Forklar med utgangspunkt i adaptasjonsprinsipper hvorfor stagnasjon oppstaar, og foresl tiltak for aa bryte gjennom plataafasen.',
        solution: 'Stagnasjon etter 6 maaneder kan forklares med flere adaptasjonsrelaterte faktorer:\n\n**Hvorfor stagnasjon oppstaar:**\n1. De nevrale adaptasjonene er i stor grad utnuttet etter 6 maaneder — videre framgang maa komme fra strukturelle endringer som tar lengre tid.\n2. Kroppen har tilpasset seg det gjeldende treningsstimuluset (tilvenning). Treningsprogrammet gir ikke lenger tilstrekkelig overbelastning.\n3. Manglende variasjon i treningen gjor at de samme motoriske enhetene og muskelfibrene belastes paa samme maate.\n4. Restitusjon kan vaere utilstrekkelig — etter 6 maaneder med progressiv overbelastning kan utoveren vaere kronisk undertrent.\n\n**Tiltak for aa bryte gjennom:**\n1. **Periodiseringsendring**: Bytt fra lineaer til ondulerende periodisering for aa variere stimuluset.\n2. **Ovelsesvariasjon**: Introduser nye ovelser som belaster musklene paa andre maater (ulike vinkler, grep, bevegelsesmonstre).\n3. **Deload-uke**: Legg inn 1-2 ukers redusert belastning for superkompensasjon.\n4. **Belastningsendring**: Veksle mellom faser med hoyt volum (hypertrofi) og hoey intensitet (styrke).\n5. **Ernaering og sovn**: Gjennomgaa og optimaliser kosthold (protein, energibalanse) og sovnrutiner.\n6. **Funksjonell overbelastning**: En planlagt uke med okt belastning etterfulgt av deload kan gi en kraftig superkompensasjonsrespons.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 1.5: Treningsplanlegging
// ============================================================================

export const CHAPTER_TRENING_2_1_5: TextbookChapter = {
  id: 'trening-2-1-5',
  courseId: 'trening-2',
  chapterNumber: '1.5',
  title: 'Treningsplanlegging',
  description: 'Behovsanalyse, maalsetting og progresjon i treningsopplegg.',
  estimatedMinutes: 20,
  competenceGoals: [
    'kunne gjennomfore en behovsanalyse for en utover eller idrett',
    'forstaa prinsippene for effektiv maalsetting (SMART-maal)',
    'kunne planlegge progresjon i et treningsopplegg over tid',
  ],
  content: [
    {
      id: 'tr2-1-5-intro',
      type: 'text',
      content: `# Treningsplanlegging

Treningsplanlegging er prosessen med aa designe et strukturert treningsprogram som tar utoveren fra naavaerende prestasjonsnivaa til et onsket maal. God treningsplanlegging krever systematikk, kunnskap om treningsprinsipper og evne til aa tilpasse planen basert paa utoverens respons.

De tre grunnsteinene i treningsplanlegging er behovsanalyse (hvor staar utoveren, og hva krever idretten?), maalsetting (hvor skal utoveren, og naar?) og progresjon (hvordan kommer utoveren dit paa en trygg og effektiv maate?).

I dette kapittelet gjennomgaar vi hver av disse komponentene og ser paa hvordan de henger sammen i praksis. Vi ser ogsaa paa hvordan man bruker treningsdata og tilbakemelding for aa justere planer underveis — fordi ingen plan overlever kontakten med virkeligheten uten tilpasning.`,
    },
    {
      id: 'tr2-1-5-def1',
      type: 'definition',
      title: 'Behovsanalyse',
      content: 'En behovsanalyse er en systematisk kartlegging av kravene idretten stiller og utoverens naavaerende kapasitet. Analysen identifiserer gapet mellom hva idretten krever og hva utoveren kan prestere, og dette gapet danner grunnlaget for treningsplanens prioriteringer. En behovsanalyse inkluderer typisk kravanalyse (hva krever idretten?), kapasitetsanalyse (hva kan utoveren?) og gapanalyse (hva maa forbedres?).',
    },
    {
      id: 'tr2-1-5-text1',
      type: 'text',
      title: 'Behovsanalysen i praksis',
      content: `En grundig behovsanalyse bestaar av tre hoveddeler:

**1. Kravanalyse — Hva krever idretten?**
- Hvilke fysiske egenskaper er viktigst? (styrke, utholdenhet, hurtighet, bevegelighet, koordinasjon)
- Hvilke energisystemer brukes? (aerobt, anaerobt laktisk, anaerobt alaktisk)
- Hvilke bevegelsesmonstre er sentrale? (sprint, hopp, kast, retningsskifter)
- Hvilke muskelgrupper belastes mest?
- Hva er de vanligste skadene, og hvordan kan de forebygges?

**2. Kapasitetsanalyse — Hva kan utoveren?**
- Fysiske tester: 1RM, VO2maks, spenst, sprint, bevegelighet
- Tekniske ferdigheter: Idrettsspesifikk teknikk
- Psykologiske faktorer: Motivasjon, konkurransementalitet, evne til aa haandtere press
- Helsehistorikk: Tidligere skader, kroniske plager, medisiner
- Treningsbakgrunn: Aar med trening, nivaa, spesialisering

**3. Gapanalyse — Hva maa forbedres?**
- Sammenlign kravanalysen med kapasitetsanalysen
- Identifiser svake omraader som begrenser prestasjonen
- Prioriter de omraadene som gir stoerst prestasjonsgevinst
- Vurder tidsrammen: Hva kan realistisk forbedres i den tilgjengelige tiden?

Behovsanalysen er utgangspunktet for all videre planlegging og bor oppdateres regelmessig (hver 8-12 uke) for aa fange opp endringer i utoverens kapasitet.`,
    },
    {
      id: 'tr2-1-5-def2',
      type: 'definition',
      title: 'SMART-maal',
      content: 'SMART er et rammeverk for effektiv maalsetting der hvert maal skal vaere: Spesifikt (tydelig definert), Maalbart (kan kvantifiseres), Ambisiost/oppnaelig (utfordrende men realistisk), Relevant (knyttet til overordnede maal) og Tidsbestemt (har en klar frist). Eksempel paa et SMART-maal: «Oke 1RM i kneboey fra 100 kg til 115 kg innen 12 uker.» Dette er spesifikt (kneboey 1RM), maalbart (fra 100 til 115 kg), ambisiost (15 % okning), relevant (styrke er viktig for idretten) og tidsbestemt (12 uker).',
    },
    {
      id: 'tr2-1-5-text2',
      type: 'text',
      title: 'Maalsetting og progresjon',
      content: `**Maalsetting i treningsplanlegging**

Effektive maal gir retning, motivasjon og et grunnlag for aa evaluere fremgang. I treningssammenheng opererer man med flere maaltyper:

**Resultatmaal** — Det endelige onskede resultatet
- Eksempel: «Vinne NM i sin klasse», «Lope 10 km under 40 minutter»
- Motiverende, men utoveren har begrenset kontroll (konkurrentene pavirker resultatet)

**Prestasjonsmaal** — Maalbare prestasjoner utoveren har kontroll over
- Eksempel: «Oke 1RM i kneboey til 120 kg», «Forbedre 3000 m-tiden til 9:30»
- Mer kontrollerbare og bedre egnet for daglig motivasjon

**Prosessmaal** — Handlinger utoveren forplikter seg til
- Eksempel: «Trene styrke 4 ganger per uke», «Sove minst 8 timer per natt»
- Mest kontrollerbare og viktige for aa bygge gode vaner

**Progresjon i treningsopplegg**

Progressiv overbelastning er drivkraften bak all treningsadaptasjon. Det finnes flere maater aa implementere progresjon paa:

**1. Okt belastning (vekt)**
Den mest apenbare formen for progresjon. Oke vekten med 2-5 % naar utoveren mestrer gjeldende belastning.

**2. Okt volum (sett/repetisjoner)**
Legg til ett ekstra sett eller 1-2 ekstra repetisjoner per sett.

**3. Okt frekvens**
Legg til en ekstra treningsokt per uke for en gitt muskelgruppe eller egenskap.

**4. Okt bevegelsesomfang**
Utfor ovelsene gjennom storre range of motion for okt mekanisk spenning.

**5. Redusert pause**
Kortere hvileperioder mellom sett oker den metabolske belastningen.

**6. Okt kompleksitet**
Introduser mer krevende ovelsesvarianter (for eksempel fra maskin til frivekter).

**Viktig prinsipp:** Oek kun en variabel om gangen. Dersom man oker baade vekt og volum samtidig, blir det umulig aa identifisere hva som virker og hva som eventuelt gir overbelastning.`,
    },
    {
      id: 'tr2-1-5-note1',
      type: 'note',
      title: 'Autoregulering — tilpass planen underveis',
      content: 'Ingen treningsplan bor folges slavisk. Autoregulering innebarer at man justerer treningsbelastningen fra okt til okt basert paa utoverens dagsform. En vanlig metode er aa bruke RPE (Rate of Perceived Exertion) eller RIR (Reps in Reserve) for aa styre belastningen. Eksempel: I stedet for aa planlegge «4x5 paa 85 % av 1RM» kan man planlegge «4x5 paa RPE 8» (dvs. at utoveren har ca. 2 repetisjoner igjen etter hvert sett). Paa gode dager blir vekten tyngre, paa daarlige dager lettere — men stimuluset er relativt likt.',
    },
    {
      id: 'tr2-1-5-example1',
      type: 'example',
      title: 'Behovsanalyse for en haandballspiller',
      problem: 'Gjennomfor en forenklet behovsanalyse for en 18 aar gammel mannlig haandballspiller som spiller back paa juniorlaget.',
      solution: `**Kravanalyse — Haandball (back):**
- Fysiske krav: Eksplosiv styrke, springevne, kastekraft, hopp, retningsskifter
- Energisystemer: Primaert anaerobt alaktisk (sprinter, kast) og aerobt (restitusjon mellom aksjonene)
- Sentrale bevegelsesmonstre: Sprint, hopp, kast, kroppskontakt, retningsskifter
- Viktigste muskelgrupper: Bein (sprint, hopp), kjernemuskulatur (stabilitet, kast), skulder/arm (kast)
- Vanlige skader: Fremre korsbaaand (ACL), skulder, ankel

**Kapasitetsanalyse — Utoveren (18 aar):**
- 1RM kneboey: 90 kg (kroppsvekt 80 kg → relativ styrke 1,13)
- Sprint 20 m: 3,2 sekunder
- Spenst (CMJ): 38 cm
- Kastehastighet: 85 km/t
- Aerob kapasitet: Ikke testet, men utoveren rapporterer at han sliter mot slutten av kamper

**Gapanalyse — Prioriteringer:**
1. Relativ styrke er lav (bor vaere >1,5 x kroppsvekt) — styrke er foersteprioritet
2. Spenst og sprinttid er under gjennomsnittet for nivaaet — eksplosivitetstrening
3. Utholdenheten bor forbedres for aa opprettholde prestasjon gjennom hele kamper
4. Kastehastigehten er akseptabel, men vil forbedres med okt styrke og eksplosivitet

**Treningsplanens hovedprioritering:** Oek relativ styrke og eksplosivitet de neste 12 ukene.`,
    },
    {
      id: 'tr2-1-5-tip1',
      type: 'tip',
      title: 'Start med de storste begrensningene',
      content: 'Naar behovsanalysen avdekker flere forbedringsomraader, bor man prioritere de egenskapene som utgjor den storste flaskehalsen for prestasjon. Ofte gir det storre gevinst aa forbedre den svakeste lenken enn aa optimalisere noe utoveren allerede er god paa. Spor deg selv: «Hva er det som hindrer denne utoveren mest i aa prestere bedre?»',
    },
    {
      id: 'tr2-1-5-ex1',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-5-ex1',
        number: '1',
        type: 'multiple-choice',
        task: 'Hva er de tre hoveddelene i en behovsanalyse?',
        options: [
          { id: 'a', text: 'Oppvarming, hoveddel og nedvarming', isCorrect: false },
          { id: 'b', text: 'Kravanalyse, kapasitetsanalyse og gapanalyse', isCorrect: true },
          { id: 'c', text: 'Styrke, utholdenhet og bevegelighet', isCorrect: false },
          { id: 'd', text: 'Makrosyklus, mesosyklus og mikrosyklus', isCorrect: false },
        ],
        hints: ['Tenk paa hva idretten krever, hva utoveren kan, og hva som mangler.'],
        solution: 'En behovsanalyse bestaar av kravanalyse (hva krever idretten?), kapasitetsanalyse (hva kan utoveren?) og gapanalyse (hva er forskjellen, og hva maa prioriteres?). Sammen danner disse tre delene grunnlaget for treningsplanens innhold og prioriteringer.',
      },
    },
    {
      id: 'tr2-1-5-ex2',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-5-ex2',
        number: '2',
        type: 'multiple-choice',
        task: 'Hvilket av folgende er et godt SMART-maal?',
        options: [
          { id: 'a', text: '«Jeg skal bli sterkere»', isCorrect: false },
          { id: 'b', text: '«Jeg skal trene mer»', isCorrect: false },
          { id: 'c', text: '«Jeg skal oke 1RM i benkpress fra 80 kg til 90 kg innen 8 uker»', isCorrect: true },
          { id: 'd', text: '«Jeg skal vinne alt»', isCorrect: false },
        ],
        solution: 'Alternativ C er et godt SMART-maal: Spesifikt (1RM benkpress), Maalbart (fra 80 til 90 kg), Ambisiost (12,5 % okning er utfordrende), Relevant (styrke) og Tidsbestemt (8 uker). De andre alternativene er for vage eller urealistiske.',
      },
    },
    {
      id: 'tr2-1-5-ex3',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-5-ex3',
        number: '3',
        type: 'classic',
        task: 'Forklar forskjellen mellom resultatmaal, prestasjonsmaal og prosessmaal, og gi eksempler paa hver type for en sprintloper.',
        subTasks: [
          {
            label: 'a',
            task: 'Definer de tre maaltypene og forklar forskjellen i kontrollerbarhet.',
            solution: 'Resultatmaal handler om utfall i konkurranse (f.eks. vinne medalje) — lav kontrollerbarhet fordi andre utovere pavirker resultatet. Prestasjonsmaal handler om maalbare prestasjoner (f.eks. lope 100 m paa 11,0 sek) — hoeyere kontrollerbarhet. Prosessmaal handler om handlinger (f.eks. trene sprint 5 ganger per uke) — hoeyest kontrollerbarhet.',
            multipleChoiceOptions: [
              'Resultatmaal = konkurranse (lav kontroll), prestasjonsmaal = maalbar prestasjon (middels kontroll), prosessmaal = handlinger (hoey kontroll)',
              'Alle maaltypene har lik kontrollerbarhet',
              'Prosessmaal har lavest kontrollerbarhet',
              'Resultatmaal er mest spesifikke',
            ],
          },
          {
            label: 'b',
            task: 'Gi konkrete eksempler paa hver maaltype for en 100 m-sprintloper.',
            solution: 'Resultatmaal: «Ta gull i NM paa 100 m.» Prestasjonsmaal: «Forbedre personlig rekord fra 11,2 til 10,9 sekunder innen 6 maaneder.» Prosessmaal: «Gjennomfore 4 sprintokter og 3 styrkeokter per uke, sove 9 timer per natt, og spise proteinrikt maaltid innen 30 minutter etter trening.»',
          },
        ],
        solution: 'De tre maaltypene utfyller hverandre: Resultatmaal gir motivasjon, prestasjonsmaal gir retning, og prosessmaal gir daglige handlingsplaner. En god treningsplan inkluderer alle tre nivaaer.',
      },
    },
    {
      id: 'tr2-1-5-ex4',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-5-ex4',
        number: '4',
        type: 'classic',
        task: 'Beskriv seks ulike maater aa implementere progressiv overbelastning paa, og forklar naar de ulike metodene er mest hensiktsmessige.',
        solution: '1. **Okt belastning (vekt)**: Oke vekten med 2-5 %. Best naar utoveren mestrer gjeldende vekt med god teknikk og har repetisjoner i reserve.\n\n2. **Okt volum (sett/repetisjoner)**: Legg til sett eller repetisjoner. Best naar man onsker aa oke treningsvolumet uten aa oke intensiteten, for eksempel i en hypertrofifase.\n\n3. **Okt frekvens**: Legg til en treningsokt. Best naar totalvolumet per okt er for hoyt og man onsker aa fordele volumet over flere dager.\n\n4. **Okt bevegelsesomfang**: Utfor ovelser med storre range of motion. Best naar bevegelighet eller styrke i ytterstillinger er en begrensning.\n\n5. **Redusert pause**: Kortere hvileperioder. Best for aa oke metabolsk belastning i hypertrofi- eller utholdenhetsrettede faser.\n\n6. **Okt kompleksitet**: Mer krevende ovelsesvarianter (f.eks. fra maskin til frivekter). Best naar utoveren har utvokst enkle ovelser og trenger storre utfordring for koordinasjon og stabilitet.\n\nViktig: Endre kun en variabel om gangen for aa kunne evaluere effekten og unngaa overbelastning.',
        allowsUpload: true,
        allowsCanvasDrawing: false,
      },
    },
    {
      id: 'tr2-1-5-ex5',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-5-ex5',
        number: '5',
        type: 'multiple-choice',
        task: 'Hva innebarer autoregulering i treningssammenheng?',
        options: [
          { id: 'a', text: 'At treningsplanen aldri endres', isCorrect: false },
          { id: 'b', text: 'At belastningen justeres fra okt til okt basert paa utoverens dagsform', isCorrect: true },
          { id: 'c', text: 'At utoveren trener uten plan', isCorrect: false },
          { id: 'd', text: 'At man alltid trener paa samme vekt', isCorrect: false },
        ],
        solution: 'Autoregulering innebarer at treningsbelastningen justeres fra okt til okt basert paa utoverens dagsform, typisk ved hjelp av RPE (Rate of Perceived Exertion) eller RIR (Reps in Reserve). Paa gode dager trener man tyngre, paa daarlige dager lettere, mens den relative anstrengelsen holdes stabil. Dette gir mer optimal treningsbelastning enn aa folge faste prosentandeler slavisk.',
      },
    },
    {
      id: 'tr2-1-5-ex6',
      type: 'exercise',
      exercise: {
        id: 'tr2-1-5-ex6',
        number: '6',
        type: 'classic',
        task: 'Du er trener for en 17 aar gammel kvinnelig fotballspiller som onsker aa bli bedre. Gjennomfor en forenklet behovsanalyse, sett tre SMART-maal (ett av hver type: resultat, prestasjon, prosess), og lag et overordnet treningsprogram for de neste 8 ukene med tydelig progresjon.',
        solution: '**Behovsanalyse:**\n\nKravanalyse (fotball, midtbanespiller): Sprint, retningsskifter, utholdenhet (aerobt og anaerobt), styrke, hoppevne, koordinasjon. Primaere energisystemer: Aerobt (restitusjon, langvarig lopsinnsats) og anaerobt alaktisk (sprinter, dueller).\n\nKapasitetsanalyse (17 aar, 2 aar paa juniorlag): 1RM kneboey: 60 kg (kroppsvekt 60 kg, relativ styrke 1,0). Sprint 20 m: 3,5 sek. YoYo IR1: Nivaa 16.4. Utoveren rapporterer at sprinten foeles treg og at hun taper mange dueller.\n\nGapanalyse: Relativ styrke er lav (bor vaere >1,3). Sprinttid kan forbedres. Utholdenhet er akseptabel men kan okes.\n\n**SMART-maal:**\n- Resultatmaal: «Bli tatt ut paa A-laget foer sesongstart i april.»\n- Prestasjonsmaal: «Oke 1RM i kneboey fra 60 til 72 kg innen 8 uker.» (Spesifikt, maalbart, ambisiost med 20 % okning for nybegynner, relevant, tidsbestemt.)\n- Prosessmaal: «Gjennomfore 3 styrkeokter og 2 fotballtreninger per uke, sove minst 8,5 timer per natt.»\n\n**8-ukers treningsprogram:**\n\nUke 1-4 (mesosyklus 1 — generell styrke og hypertrofi):\n- Styrke 3x/uke: Kneboey, utfall, markloeft, benkpress, rodd\n- Uke 1: 3x10 paa 60 % 1RM, uke 2: 3x10 paa 65 %, uke 3: 4x8 paa 70 %, uke 4 (deload): 2x8 paa 60 %\n- Fotball 2x/uke + kamp\n\nUke 5-8 (mesosyklus 2 — styrke og eksplosivitet):\n- Styrke 3x/uke: Samme ovelser + plyometri (kneboey hopp, boksehopp)\n- Uke 5: 4x6 paa 75 % 1RM, uke 6: 4x5 paa 80 %, uke 7: 5x4 paa 85 %, uke 8 (deload): 3x4 paa 70 %\n- Test ny 1RM etter deload i uke 8\n\nProgresjon: Belastningen oker med ca. 5 % per uke innenfor mesosykluser, med deload-uke for superkompensasjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Eksport av alle kapitler i seksjon 1
// ============================================================================

export const TRENING_2_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_2_1_1,
  CHAPTER_TRENING_2_1_2,
  CHAPTER_TRENING_2_1_3,
  CHAPTER_TRENING_2_1_4,
  CHAPTER_TRENING_2_1_5,
];
