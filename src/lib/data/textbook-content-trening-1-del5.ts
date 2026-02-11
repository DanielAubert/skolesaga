/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Treningslære 1 (VG2) - Del 5: Utholdenhetstrening
 *
 * Dekker LK20-kompetansemål for treningslære 1
 * Kapittel 5.1-5.5: Aerob utholdenhet, anaerob utholdenhet, treningsmetoder,
 * testing og utholdenhetstrening i ulike idretter
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 5.1: Aerob utholdenhet
// ============================================================================

export const CHAPTER_TRENING_1_5_1: TextbookChapter = {
  id: 'trening-1-5-1',
  courseId: 'trening-1',
  chapterNumber: '5.1',
  title: 'Aerob utholdenhet',
  description: 'VO2max, laktatterskel, aerob kapasitet og treningssoner for utholdenhetstrening.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare hva aerob utholdenhet er og hvilke faktorer som påvirker den',
    'gjøre rede for VO2max og laktatterskel som mål på aerob kapasitet',
    'forstå og anvende treningssoner basert på hjertefrekvens',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr-5-1-intro',
      type: 'text',
      content: `# Aerob utholdenhet

Aerob utholdenhet er kroppens evne til å arbeide over lengre tid med tilstrekkelig oksygentilførsel. Når du jogger, sykler eller går langrenn i et moderat tempo, er det det aerobe energisystemet som dominerer. Aerob kapasitet er en av de viktigste faktorene for helse og prestasjon i de fleste idretter.`,
    },
    {
      id: 'tr-5-1-def-aerob',
      type: 'definition',
      title: 'Aerob utholdenhet',
      content: `Aerob utholdenhet er evnen til å utføre arbeid over lengre tid ved hjelp av oksygenbasert energifrigjøring. Musklene får energi ved at karbohydrater og fett brytes ned med oksygen i mitokondriene.`,
    },
    {
      id: 'tr-5-1-text-vo2max',
      type: 'text',
      title: 'VO2max — Maksimalt oksygenopptak',
      content: `**VO2max** er det maksimale volumet oksygen kroppen kan ta opp og bruke per minutt under maksimalt arbeid. Det oppgis vanligvis i milliliter per kilo kroppsvekt per minutt (ml/kg/min).

**Typiske VO2max-verdier:**
- Utrente menn: 35–45 ml/kg/min
- Utrente kvinner: 27–38 ml/kg/min
- Godt trente mosjonister: 50–60 ml/kg/min
- Eliteutøvere utholdenhet: 70–90 ml/kg/min

**Faktorer som bestemmer VO2max:**
1. **Hjertets minuttvolum** — Hvor mye blod hjertet pumper per minutt (slagvolum × hjertefrekvens)
2. **Hemoglobinmengde** — Blodets evne til å transportere oksygen
3. **Kapillærtetthet** — Antall små blodårer rundt muskelfibrene
4. **Mitokondrievolum** — Muskelcellenes evne til å bruke oksygen
5. **Genetikk** — Arvelige faktorer setter et øvre tak for VO2max`,
    },
    {
      id: 'tr-5-1-def-laktat',
      type: 'definition',
      title: 'Laktatterskel',
      content: `Laktatterskelen er den treningsintensiteten der laktatproduksjonen begynner å overstige kroppens evne til å fjerne laktat fra blodet. Over denne terskelen stiger laktatnivået raskt, og utøveren kan ikke opprettholde tempoet over lang tid. Laktatterskelen ligger vanligvis ved 60–85 % av VO2max, avhengig av treningsnivå.`,
    },
    {
      id: 'tr-5-1-text-kapasitet',
      type: 'text',
      title: 'Aerob kapasitet vs. aerob effekt',
      content: `Det er viktig å skille mellom to sentrale begreper:

**Aerob kapasitet** (utholdenhetskapasitet):
- Evnen til å arbeide på en stor andel av VO2max over lang tid
- Påvirkes av laktatterskel, arbeidsøkonomi og fettforbrenning
- En utøver med høy aerob kapasitet kan holde et høyt tempo lenge

**Aerob effekt** (maksimalt oksygenopptak):
- Det absolutte taket for oksygenopptak (VO2max)
- Trenes best med høyintensiv intervalltrening
- Genetisk betinget, men kan forbedres med 15–30 % gjennom trening

**Arbeidsøkonomi:**
Arbeidsøkonomi handler om hvor mye energi du bruker ved en gitt hastighet. God teknikk og effektiv bevegelse gir bedre arbeidsøkonomi, slik at du kan løpe raskere med samme oksygenforbruk.`,
    },
    {
      id: 'tr-5-1-text-soner',
      type: 'text',
      title: 'Treningssoner',
      content: `Treningssoner brukes for å styre intensiteten i utholdenhets­trening. De vanligste sonene er basert på prosent av maksimal hjertefrekvens (MHF) eller laktatnivå.

**Sone 1 — Rolig (50–60 % av MHF)**
Lett aktivitet og aktiv restitusjon. Forbedrer grunnleggende fettforbrenning.

**Sone 2 — Lett aerob (60–70 % av MHF)**
Lang, rolig trening. Bygger aerob grunnkapasitet og forbedrer fettforbrenningen.

**Sone 3 — Moderat aerob (70–80 % av MHF)**
Behagelig, men merkbart tempo. Forbedrer aerob kapasitet og laktatterskel.

**Sone 4 — Terskel (80–90 % av MHF)**
Hardt, men kontrollerbart. Trening rundt laktatterskelen, forbedrer tempoet du kan holde over tid.

**Sone 5 — Høyintensiv (90–100 % av MHF)**
Nær maksimal innsats. Forbedrer VO2max og anaerob kapasitet. Korte intervaller.`,
    },
    {
      id: 'tr-5-1-note-mhf',
      type: 'note',
      title: 'Beregning av maksimal hjertefrekvens',
      content: `En mye brukt formel for å estimere maksimal hjertefrekvens er: **MHF = 220 − alder**. Denne formelen er imidlertid bare et grovt estimat med stor individuell variasjon (±10–15 slag/min). Den mest nøyaktige metoden er å måle MHF med en makstest under kontrollerte forhold.`,
    },
    {
      id: 'tr-5-1-example-1',
      type: 'example',
      title: 'Eksempel: Beregning av treningssoner',
      problem: `En 17 år gammel elev ønsker å beregne sine treningssoner basert på hjertefrekvens. Eleven har testet sin maksimale hjertefrekvens til 198 slag/min.

**Oppgave:** Beregn grensene for sone 2 (60–70 % av MHF) og sone 4 (80–90 % av MHF).`,
      solution: `**Sone 2 (60–70 % av MHF):**
- Nedre grense: 198 × 0,60 = 118,8 ≈ 119 slag/min
- Øvre grense: 198 × 0,70 = 138,6 ≈ 139 slag/min
- Sone 2: **119–139 slag/min**

**Sone 4 (80–90 % av MHF):**
- Nedre grense: 198 × 0,80 = 158,4 ≈ 158 slag/min
- Øvre grense: 198 × 0,90 = 178,2 ≈ 178 slag/min
- Sone 4: **158–178 slag/min**

Eleven bør bruke pulsklokke under trening og ligge innenfor disse grensene avhengig av treningsøktens formål.`,
    },
    {
      id: 'tr-5-1-tip-1',
      type: 'tip',
      title: 'Snakketesten',
      content: `En enkel måte å vurdere intensitet på er snakketesten: I sone 2 skal du klare å føre en samtale uten problemer. I sone 3 kan du snakke i korte setninger. I sone 4 klarer du bare å si enkeltord. I sone 5 er det umulig å snakke.`,
    },
    {
      id: 'tr-5-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-5-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er VO2max?',
        options: [
          { id: 'a', text: 'Det maksimale volumet oksygen kroppen kan ta opp og bruke per minutt', isCorrect: true },
          { id: 'b', text: 'Den maksimale hjertefrekvensen under trening', isCorrect: false },
          { id: 'c', text: 'Den maksimale mengden laktat musklene kan produsere', isCorrect: false },
          { id: 'd', text: 'Den maksimale kraften musklene kan utvikle', isCorrect: false },
        ],
        solution: 'VO2max er det maksimale oksygenopptaket — altså det høyeste volumet oksygen (i ml/kg/min) kroppen kan ta opp og benytte under maksimalt arbeid.',
      },
    },
    {
      id: 'tr-5-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-5-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva skjer ved laktatterskelen?',
        options: [
          { id: 'a', text: 'Laktatproduksjonen overstiger kroppens evne til å fjerne laktat', isCorrect: true },
          { id: 'b', text: 'Kroppen slutter å produsere laktat', isCorrect: false },
          { id: 'c', text: 'Hjertefrekvensen når sitt maksimum', isCorrect: false },
          { id: 'd', text: 'Fettforbrenningen stopper helt', isCorrect: false },
        ],
        solution: 'Ved laktatterskelen overstiger produksjonen av laktat kroppens evne til å fjerne det. Over denne terskelen stiger laktatnivået raskt i blodet, og utøveren kan ikke opprettholde intensiteten lenge.',
      },
    },
    {
      id: 'tr-5-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-5-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom aerob kapasitet og aerob effekt. Gi eksempler på hvordan hver av dem påvirker prestasjonen i utholdenhetsidretter.',
        solution: 'Aerob effekt er det maksimale oksygenopptaket (VO2max) — det absolutte taket for hvor mye oksygen kroppen kan bruke. Aerob kapasitet er evnen til å utnytte en stor andel av VO2max over lang tid, og bestemmes av laktatterskel, arbeidsøkonomi og fettforbrenning. En maratonløper trenger høy aerob kapasitet for å holde et jevnt høyt tempo over 42 km, mens en 3000-meterløper trenger høy aerob effekt for å kunne produsere mye energi over kortere tid.',
        hints: ['Tenk på aerob effekt som taket og aerob kapasitet som andelen av taket du kan bruke over tid'],
      },
    },
    {
      id: 'tr-5-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-5-1-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En utøver har MHF på 195 slag/min. Beregn treningssonene 1–5 for denne utøveren.',
        solution: 'Sone 1 (50–60 %): 98–117 slag/min. Sone 2 (60–70 %): 117–137 slag/min. Sone 3 (70–80 %): 137–156 slag/min. Sone 4 (80–90 %): 156–176 slag/min. Sone 5 (90–100 %): 176–195 slag/min. Beregning: MHF × nedre grenseprosent = nedre pulssone, MHF × øvre grenseprosent = øvre pulssone.',
        hints: ['Bruk formelen: sone-grense = MHF × prosent'],
      },
    },
    {
      id: 'tr-5-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-5-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Nevn og forklar fire faktorer som bestemmer VO2max. Hvordan kan trening påvirke hver av disse faktorene?',
        solution: '1) Hjertets slagvolum — øker med utholdenhets­trening fordi hjertemuskulaturen blir sterkere. 2) Hemoglobinmengde — øker noe med høydetrening og utholdenhets­trening. 3) Kapillærtetthet — aerob trening skaper nye kapillærer rundt muskelfibrene, som gir bedre oksygentilførsel. 4) Mitokondrievolum — mitokondriene øker i antall og størrelse med utholdenhets­trening, slik at musklene kan utnytte mer oksygen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-5-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-5-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar sammenhengen mellom VO2max, laktatterskel og arbeidsøkonomi. Drøft hvorfor en utøver med lavere VO2max kan slå en utøver med høyere VO2max i et langdistanseløp.',
        solution: 'VO2max angir det absolutte taket for oksygenopptak, men prestasjon over lang distanse avhenger også av hvor stor andel av VO2max utøveren kan bruke uten at laktat hoper seg opp (laktatterskel), og hvor effektivt kroppen beveger seg (arbeidsøkonomi). En utøver med VO2max på 65 ml/kg/min og laktatterskel ved 85 % kan holde et effektivt tempo ved ca. 55 ml/kg/min, mens en utøver med VO2max på 72 og laktatterskel ved 70 % bare holder ca. 50 ml/kg/min. I tillegg kan bedre arbeidsøkonomi gi høyere hastighet ved samme oksygenforbruk. Dermed vinner den med lavere VO2max hvis laktatterskel og arbeidsøkonomi er vesentlig bedre.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-5-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'tr-5-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En fotballspiller, en maratonløper og en sprinter ønsker alle å forbedre sin aerobe utholdenhet. Forklar hvorfor de bør trene ulikt, med vekt på treningssoner, og drøft hvilke tilpasninger de kan forvente.',
        solution: 'Fotballspilleren trenger variert aerob kapasitet med evne til gjentatte sprinter, og bør kombinere sone 2-trening (grunnlag) med sone 4-intervaller og korte eksplosive drag. Maratonløperen trenger svært høy aerob kapasitet og bør hovedsakelig trene i sone 2–3 med noe terskeltrening i sone 4 for å heve laktatterskelen. Sprinteren har mindre behov for tradisjonell aerob trening, men kan ha nytte av sone 2-arbeid for restitusjon og generell helse, pluss korte sone 5-intervaller for å forbedre oksygengjelden. Tilpasninger: Maratonløperen får størst økning i kapillærtetthet og fettforbrenning. Fotballspilleren utvikler god aerob grunnform med evne til å restituere raskt mellom sprinter. Sprinteren forbedrer primært restitusjonsevnen mellom intensive drag.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.2: Anaerob utholdenhet
// ============================================================================

export const CHAPTER_TRENING_1_5_2: TextbookChapter = {
  id: 'trening-1-5-2',
  courseId: 'trening-1',
  chapterNumber: '5.2',
  title: 'Anaerob utholdenhet',
  description: 'Anaerob terskel, melkesyretoleranse, bufferkapasitet og de anaerobe energisystemene.',
  estimatedMinutes: 22,
  competenceGoals: [
    'forklare hva anaerob utholdenhet er og hvordan den skiller seg fra aerob utholdenhet',
    'gjøre rede for anaerob terskel og melkesyretoleranse',
    'forstå bufferkapasitet og dens betydning for prestasjon',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr-5-2-intro',
      type: 'text',
      content: `# Anaerob utholdenhet

Anaerob utholdenhet er kroppens evne til å arbeide med høy intensitet over kortere perioder, der oksygentilførselen ikke er tilstrekkelig til å dekke energibehovet. De anaerobe energisystemene supplerer det aerobe systemet og er avgjørende i idretter med høy intensitet.`,
    },
    {
      id: 'tr-5-2-def-anaerob',
      type: 'definition',
      title: 'Anaerob utholdenhet',
      content: `Anaerob utholdenhet er evnen til å utføre intensivt arbeid der energi frigjøres uten tilstrekkelig oksygen. De to anaerobe energisystemene er det anaerobe alaktiske systemet (ATP-CP) for svært korte, eksplosive belastninger (under 10 sekunder), og det anaerobe laktiske systemet (anaerob glykolyse) for belastninger fra 10 sekunder til ca. 2–3 minutter.`,
    },
    {
      id: 'tr-5-2-text-systemer',
      type: 'text',
      title: 'De anaerobe energisystemene',
      content: `**1. Det alaktiske systemet (ATP-CP)**
- Bruker lagret ATP og kreatinfosfat (CP) i musklene
- Gir umiddelbar energi i 6–10 sekunder
- Ingen opphopning av laktat
- Viktig for sprint, hopp og eksplosive bevegelser
- Full restitusjon tar 2–5 minutter

**2. Det laktiske systemet (anaerob glykolyse)**
- Bryter ned glukose uten oksygen
- Produserer energi i 10 sekunder til ca. 2–3 minutter
- Biprodukter: laktat og hydrogenioner (H⁺)
- Opphopning av H⁺ gir den «brennende» følelsen i musklene
- Viktig for mellom­distanseløp, svømming og intense perioder i lagspill`,
    },
    {
      id: 'tr-5-2-def-terskel',
      type: 'definition',
      title: 'Anaerob terskel',
      content: `Den anaerobe terskelen er den intensiteten der laktatproduksjonen øker markant og overstiger fjerningskapasiteten. Over denne terskelen hoper laktat og hydrogenioner seg opp, noe som tvinger utøveren til å redusere intensiteten. Den anaerobe terskelen samsvarer omtrent med laktatterskelen, men fokuserer spesifikt på overgangen til anaerob energifrigjøring.`,
    },
    {
      id: 'tr-5-2-text-melkesyre',
      type: 'text',
      title: 'Melkesyretoleranse',
      content: `**Hva er melkesyretoleranse?**

Melkesyretoleranse er kroppens evne til å tåle høye nivåer av laktat og hydrogenioner i musklene og blodet uten at prestasjonen faller dramatisk. Utøvere med god melkesyre­toleranse kan opprettholde høy intensitet selv når laktatnivået er svært høyt.

**Hvorfor faller prestasjonen ved høyt laktatnivå?**
- Hydrogenioner (H⁺) senker pH-verdien i musklene
- Sur pH hemmer enzymene som deltar i energifrigjøring
- Muskelkontraksjonen svekkes
- Sentralnervesystemet sender signaler om å redusere intensiteten

**Hvordan forbedre melkesyre­toleransen?**
- Intervalltrening med høy intensitet og korte pauser
- Gjentatte belastninger over anaerob terskel
- Progressiv økning av varighet ved høy intensitet
- Spesifikk trening i den aktuelle idretten`,
    },
    {
      id: 'tr-5-2-def-buffer',
      type: 'definition',
      title: 'Bufferkapasitet',
      content: `Bufferkapasitet er kroppens evne til å nøytralisere syrer (hydrogenioner) som dannes under intensivt arbeid. Buffersubstanser som bikarbonat i blodet og karnozin i musklene binder H⁺ og bremser pH-fallet. Høyere bufferkapasitet gjør at utøveren tåler mer laktat før prestasjonen faller.`,
    },
    {
      id: 'tr-5-2-text-tilpasninger',
      type: 'text',
      title: 'Anaerobe tilpasninger ved trening',
      content: `Regelmessig anaerob trening gir en rekke tilpasninger:

**Muskulære tilpasninger:**
- Økt mengde ATP og CP i musklene
- Økt aktivitet i glykolytiske enzymer
- Økt bufferkapasitet (mer karnozin og bikarbonat)
- Bedre evne til å rekruttere raske muskelfibre (type II)

**Metabolske tilpasninger:**
- Forbedret toleranse for høye laktatnivåer
- Raskere fjerning av laktat fra blodet
- Mer effektiv resyntese av ATP og CP etter belastning

**Nevrale tilpasninger:**
- Bedre rekruttering og koordinering av motoriske enheter
- Høyere fyringsfrekvens i motoriske nerver
- Mer effektiv muskelprekontrasjon`,
    },
    {
      id: 'tr-5-2-warning-1',
      type: 'warning',
      title: 'Anaerob trening krever god grunnform',
      content: `Intensiv anaerob trening er svært belastende for kroppen. Uten et godt aerob grunnlag øker risikoen for overtrening og skader. Bygg alltid opp en solid aerob base før du trapper opp den anaerobe treningen.`,
    },
    {
      id: 'tr-5-2-example-1',
      type: 'example',
      title: 'Eksempel: Energisystemer i ulike idretter',
      problem: `Beskriv hvilke energisystemer som dominerer i følgende aktiviteter: a) 100 meter sprint, b) 800 meter løp, c) maraton.`,
      solution: `**a) 100 meter sprint (ca. 10–12 sek):**
Dominerende system: Alaktisk (ATP-CP). Nesten all energi kommer fra lagret ATP og kreatinfosfat. Det laktiske systemet bidrar noe mot slutten.

**b) 800 meter løp (ca. 2 min):**
Blanding av anaerob og aerob energi. Det laktiske systemet bidrar kraftig (ca. 40–50 %), det aerobe systemet bidrar ca. 40 %, og det alaktiske systemet bidrar i starten (ca. 10 %). Høye laktatnivåer.

**c) Maraton (ca. 2–5 timer):**
Dominerende system: Aerobt (over 95 %). Fettforbrenning er viktig for å spare glykogenlagrene. Det anaerobe systemet bidrar kun ved spurter og bakkeløp.`,
    },
    {
      id: 'tr-5-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-5-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilket energisystem gir energi de første 6–10 sekundene av en maksimal belastning?',
        options: [
          { id: 'a', text: 'Det alaktiske systemet (ATP-CP)', isCorrect: true },
          { id: 'b', text: 'Det laktiske systemet (anaerob glykolyse)', isCorrect: false },
          { id: 'c', text: 'Det aerobe systemet', isCorrect: false },
          { id: 'd', text: 'Fettforbrenningssystemet', isCorrect: false },
        ],
        solution: 'Det alaktiske systemet (ATP-CP) gir umiddelbar energi ved å spalte lagret ATP og kreatinfosfat. Det varer i 6–10 sekunder og produserer ingen laktat.',
      },
    },
    {
      id: 'tr-5-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-5-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedårsaken til at musklene «brenner» under intensivt arbeid?',
        options: [
          { id: 'a', text: 'Opphopning av hydrogenioner (H⁺) som senker pH i musklene', isCorrect: true },
          { id: 'b', text: 'For mye oksygen i musklene', isCorrect: false },
          { id: 'c', text: 'Mangel på fett som energikilde', isCorrect: false },
          { id: 'd', text: 'For høy kroppstemperatur', isCorrect: false },
        ],
        solution: 'Under intensivt anaerobt arbeid produseres store mengder hydrogenioner (H⁺) som senker pH i musklene. Denne forsurningen hemmer enzymer og forstyrrer muskelkontraksjonen, noe som oppleves som en brennende følelse.',
      },
    },
    {
      id: 'tr-5-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-5-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom det alaktiske og det laktiske anaerobe energisystemet. Gi eksempler på idrettsaktiviteter der hvert system dominerer.',
        solution: 'Det alaktiske systemet (ATP-CP) gir energi i 6–10 sekunder ved å spalte lagret ATP og kreatinfosfat, uten laktatproduksjon. Eksempler: 100 m sprint, lengdehopp, vektløfting. Det laktiske systemet (anaerob glykolyse) bryter ned glukose uten oksygen og produserer laktat, og gir energi i 10 sek til 2–3 min. Eksempler: 400 m løp, 200 m svømming, intens styrketrening med mange repetisjoner.',
        hints: ['Tenk på varighet og biprodukt for hvert system'],
      },
    },
    {
      id: 'tr-5-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-5-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Hva er bufferkapasitet, og hvordan kan den forbedres gjennom trening?',
        solution: 'Bufferkapasitet er kroppens evne til å nøytralisere hydrogenioner (H⁺) som dannes under intensivt arbeid. Buffersubstanser som bikarbonat i blodet og karnozin i musklene binder H⁺ og bremser pH-fallet. Trening forbedrer bufferkapasiteten ved at kroppen produserer mer karnozin i musklene og mer bikarbonat i blodet. Intervalltrening med høy intensitet og korte pauser er mest effektivt for å øke bufferkapasiteten.',
      },
    },
    {
      id: 'tr-5-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-5-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvorfor anaerob trening krever en god aerob grunnform. Forklar sammenhengen mellom det aerobe og det anaerobe energisystemet under belastninger nær anaerob terskel.',
        solution: 'Det aerobe systemet er grunnlaget for all utholdenhet. God aerob kapasitet gjør at kroppen kan fjerne laktat raskere (laktat oksideres i aerobe muskelfibre og i hjertet), resyntetisere ATP og CP raskere mellom intensive drag, og opprettholde lengre treningsøkter med høy kvalitet. Nær anaerob terskel arbeider begge systemene samtidig: det aerobe leverer mesteparten av energien, mens det anaerobe laktiske systemet fyller energigapet. Uten god aerob grunnform blir restitusjonen mellom intensive intervaller for lang, laktat fjernes for sakte, og utøveren greier ikke å gjennomføre nok kvalitetsdrag i treningen.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-5-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-5-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En 400-meterløper og en 10 000-meterløper trener begge anaerob utholdenhet, men på ulike måter. Beskriv hvordan treningsoppleggene vil skille seg med hensyn til intensitet, varighet og pausetid, og begrunn forskjellene med energisystemteori.',
        solution: '400-meterløperen trener primært det laktiske systemet: svært høy intensitet (95–100 % av maks), korte arbeidsdrag (30–60 sek), lange pauser (3–5 min for å muliggjøre ny maksimal innsats). Formålet er å øke melkesyretoleransen og bufferkapasiteten. 10 000-meterløperen trener anaerob terskel: noe lavere intensitet (85–92 % av MHF), lengre arbeidsdrag (3–8 min), kortere pauser (1–2 min). Formålet er å heve laktatterskelen slik at utøveren kan holde et høyt aerob tempo over lang tid. Forskjellen skyldes at 400 m krever evne til å produsere og tåle mye laktat, mens 10 000 m krever evne til å holde seg like under eller ved laktatterskelen uten at laktat hoper seg opp.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.3: Treningsmetoder for utholdenhet
// ============================================================================

export const CHAPTER_TRENING_1_5_3: TextbookChapter = {
  id: 'trening-1-5-3',
  courseId: 'trening-1',
  chapterNumber: '5.3',
  title: 'Treningsmetoder for utholdenhet',
  description: 'Langkjøring, intervalltrening, fartlek og terskeltrening som metoder for å utvikle utholdenhet.',
  estimatedMinutes: 25,
  competenceGoals: [
    'beskrive og sammenligne ulike treningsmetoder for utholdenhet',
    'forklare når og hvorfor de ulike metodene brukes',
    'kunne planlegge utholdenhets­økter med riktig metode for ulike mål',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr-5-3-intro',
      type: 'text',
      content: `# Treningsmetoder for utholdenhet

For å utvikle utholdenhet finnes det flere ulike treningsmetoder, og hver metode påvirker kroppen på litt forskjellige måter. Valget av metode avhenger av trenings­mål, utøverens nivå og idretten det trenes for. De vanligste metodene er langkjøring, intervalltrening, fartlek og terskeltrening.`,
    },
    {
      id: 'tr-5-3-def-langkjoring',
      type: 'definition',
      title: 'Langkjøring (kontinuerlig trening)',
      content: `Langkjøring er sammenhengende trening med jevn, moderat intensitet over lengre tid (vanligvis 30 minutter til flere timer). Intensiteten ligger i sone 2–3. Metoden bygger aerob grunnkapasitet, forbedrer fettforbrenningen og øker kapillærtettheten i musklene.`,
    },
    {
      id: 'tr-5-3-text-langkjoring',
      type: 'text',
      title: 'Langkjøring i praksis',
      content: `**Kjennetegn:**
- Jevn intensitet i sone 2–3 (60–80 % av MHF)
- Varighet: 30 minutter til 2+ timer
- Utøveren skal kunne prate underveis (snakketesten)

**Fordeler:**
- Bygger aerob grunnkapasitet
- Forbedrer fettforbrenning og sparer glykogenlagre
- Øker kapillærtetthet og mitokondrietetthet
- Lav skaderisiko
- Gir mental utholdenhet

**Ulemper:**
- Forbedrer VO2max i liten grad hos allerede trente utøvere
- Kan bli monotont
- Tidkrevende

**Varianter:**
- **Rolig langkjøring**: Sone 2, lett og behagelig
- **Moderat langkjøring**: Sone 3, litt mer krevende
- **Progressiv langkjøring**: Starter i sone 2 og øker gradvis til sone 3–4 mot slutten`,
    },
    {
      id: 'tr-5-3-def-intervall',
      type: 'definition',
      title: 'Intervalltrening',
      content: `Intervalltrening er trening der arbeidsdrag med høy intensitet veksler med pauser (aktiv eller passiv hvile). Lengden på arbeidsdragene, intensiteten og pausetidens lengde tilpasses etter hva slags utholdenhetsevne man ønsker å utvikle.`,
    },
    {
      id: 'tr-5-3-text-intervall',
      type: 'text',
      title: 'Ulike typer intervalltrening',
      content: `**Korte intervaller (15–60 sekunder)**
- Intensitet: 90–100 % av MHF / nær maksimalt
- Pause: Like lang som eller kortere enn arbeidsdraget
- Trener: Anaerob kapasitet og VO2max
- Eksempel: 30 sek sprint / 30 sek pause × 10

**Mellomintervaller (2–5 minutter)**
- Intensitet: 85–95 % av MHF
- Pause: 50–100 % av arbeidstiden
- Trener: VO2max og laktatterskel
- Eksempel: 4 × 4 min med 3 min aktiv pause (kjent som 4×4-metoden)

**Lange intervaller (5–15 minutter)**
- Intensitet: 80–90 % av MHF
- Pause: 2–5 minutter
- Trener: Laktatterskel og aerob kapasitet
- Eksempel: 3 × 10 min med 3 min pause

**4×4-metoden (Hoff-metoden):**
Denne metoden, utviklet ved NTNU, har vist seg svært effektiv for å forbedre VO2max. Fire arbeidsdrag på 4 minutter i sone 4–5 (90–95 % av MHF) med 3 minutters aktiv pause i sone 1.`,
    },
    {
      id: 'tr-5-3-def-fartlek',
      type: 'definition',
      title: 'Fartlek',
      content: `Fartlek (svensk for «fartlek» / «hastighetsspill») er en ustrukturert treningsform der utøveren veksler mellom ulike intensiteter etter eget ønske og terreng. Metoden kombinerer elementer av langkjøring og intervalltrening og gir variert belastning på de ulike energisystemene.`,
    },
    {
      id: 'tr-5-3-text-fartlek',
      type: 'text',
      title: 'Fartlek i praksis',
      content: `**Kjennetegn:**
- Veksler fritt mellom intensiteter (sone 1–5)
- Utøveren styrer selv varigheten av hvert drag
- Terreng og lyst bestemmer tempoet
- Ingen fastsatte pauser

**Fordeler:**
- Variert og motiverende
- Trener flere energisystemer i samme økt
- Passer godt i kupert terreng
- Fleksibelt — kan tilpasses dagsform
- God for mentalt overskudd

**Ulemper:**
- Vanskelig å kontrollere intensiteten nøyaktig
- Utøvere kan trene for hardt eller for lett
- Ikke ideelt for spesifikk terskeltrening

**Eksempel på fartlek-økt (45 min):**
10 min rolig oppvarming → 2 min hardt i oppoverbakke → 3 min lett → 1 min spurt → 2 min lett → 5 min moderat tempo → 3 min lett → gjenta med variasjon → 10 min nedjogg`,
    },
    {
      id: 'tr-5-3-def-terskel',
      type: 'definition',
      title: 'Terskeltrening',
      content: `Terskeltrening er trening ved eller like under laktatterskelen (sone 4, ca. 80–90 % av MHF). Formålet er å heve laktatterskelen, slik at utøveren kan holde et høyere tempo over lang tid uten at laktat hoper seg opp.`,
    },
    {
      id: 'tr-5-3-text-terskel',
      type: 'text',
      title: 'Terskeltrening i praksis',
      content: `**Kjennetegn:**
- Intensitet: Sone 4 (80–90 % av MHF)
- «Behagelig hardt» — du kan si korte setninger
- Varighet: 20–60 minutter sammenhengende, eller intervaller på 5–15 min

**Metoder:**
- **Sammenhengende terskelløp**: 20–40 min i jevnt terskeltempo
- **Cruise-intervaller**: 3–6 × 5–10 min med 1–2 min pause
- **Tempointervaller**: Noe kortere drag med litt høyere intensitet

**Effekt av terskeltrening:**
- Hever laktatterskelen (kan holde høyere tempo over tid)
- Forbedrer laktatfjerning
- Øker aerob kapasitet
- Forbedrer arbeidsøkonomi ved høy intensitet`,
    },
    {
      id: 'tr-5-3-note-1',
      type: 'note',
      title: 'Polarisert treningsmodell',
      content: `Forskning viser at mange eliteutøvere trener etter en polarisert modell: ca. 80 % av treningen i lav intensitet (sone 1–2) og ca. 20 % i høy intensitet (sone 4–5), med svært lite i sone 3. Denne fordelingen ser ut til å gi best langsiktig utvikling av VO2max og aerob kapasitet.`,
    },
    {
      id: 'tr-5-3-example-1',
      type: 'example',
      title: 'Eksempel: Valg av treningsmetode',
      problem: `En 17-årig langdistanseløper har VO2max på 55 ml/kg/min og laktatterskel ved 75 % av VO2max. Treneren ønsker å forbedre begge deler. Foreslå en typisk treningsuke.`,
      solution: `**Mandag:** Rolig langkjøring 50 min, sone 2 (bygge aerob kapasitet)
**Tirsdag:** 4×4-intervall i sone 4–5, 90–95 % av MHF, 3 min aktiv pause (forbedre VO2max)
**Onsdag:** Hviledag eller lett aktivitet 30 min, sone 1
**Torsdag:** Terskeltrening: 3×10 min i sone 4 med 2 min pause (heve laktatterskel)
**Fredag:** Rolig langkjøring 40 min, sone 2
**Lørdag:** Fartlek 60 min i variert terreng (variasjon og mental trening)
**Søndag:** Hviledag

Denne uken gir ca. 80 % lav intensitet og 20 % høy intensitet, i tråd med den polariserte modellen.`,
    },
    {
      id: 'tr-5-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-5-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva kjennetegner langkjøring som treningsmetode?',
        options: [
          { id: 'a', text: 'Sammenhengende trening med jevn, moderat intensitet over lengre tid', isCorrect: true },
          { id: 'b', text: 'Korte, intensive drag med pauser', isCorrect: false },
          { id: 'c', text: 'Varierende intensitet etter eget ønske og terreng', isCorrect: false },
          { id: 'd', text: 'Trening ved maksimal hjertefrekvens', isCorrect: false },
        ],
        solution: 'Langkjøring er sammenhengende trening med jevn, moderat intensitet (sone 2–3) over lengre tid. Utøveren skal kunne prate underveis.',
      },
    },
    {
      id: 'tr-5-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-5-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er hovedformålet med terskeltrening?',
        options: [
          { id: 'a', text: 'Å heve laktatterskelen slik at utøveren kan holde et høyere tempo over tid', isCorrect: true },
          { id: 'b', text: 'Å forbedre sprintevnen', isCorrect: false },
          { id: 'c', text: 'Å bygge maksimal styrke', isCorrect: false },
          { id: 'd', text: 'Å øke bevegelighetenn', isCorrect: false },
        ],
        solution: 'Terskeltrening gjennomføres ved eller like under laktatterskelen. Formålet er å heve denne terskelen, slik at utøveren kan holde et høyere tempo uten at laktat hoper seg opp.',
      },
    },
    {
      id: 'tr-5-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-5-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv 4×4-metoden for intervalltrening. Forklar hvilke fysiologiske tilpasninger denne metoden gir, og i hvilken treningssone arbeidsdragene skal gjennomføres.',
        solution: '4×4-metoden består av 4 arbeidsdrag på 4 minutter i sone 4–5 (90–95 % av MHF) med 3 minutters aktiv pause (sone 1). Totalt treningsvolum er 16 minutter med høy intensitet. Metoden gir følgende tilpasninger: økt VO2max gjennom forbedret slagvolum og minuttvolum i hjertet, økt kapillærtetthet, økt mitokondrievolum, og forbedret laktatfjerning. Forskning ved NTNU har vist at denne metoden er svært effektiv for å øke VO2max hos både trente og utrente.',
        hints: ['Metoden er utviklet ved NTNU'],
      },
    },
    {
      id: 'tr-5-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-5-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Sammenlign fartlek og tradisjonell intervalltrening. Nevn fordeler og ulemper med hver metode.',
        solution: 'Fartlek: Fordeler — variert, motiverende, trener flere energisystemer, fleksibelt, passer godt i kupert terreng. Ulemper — vanskelig å kontrollere intensitet, kan bli for hardt eller lett, ikke ideelt for spesifikk terskeltrening. Tradisjonell intervalltrening: Fordeler — nøyaktig kontroll av intensitet, pause og volum, kan målrettet trene spesifikke energisystemer, lett å måle fremgang. Ulemper — kan bli monotont, krever bane eller flat løype, mindre fleksibelt. Fartlek passer godt for variasjon og mental trening, mens strukturert intervall er bedre når man har spesifikke intensitetsmål.',
      },
    },
    {
      id: 'tr-5-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-5-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hva den polariserte treningsmodellen innebærer. Drøft hvorfor denne modellen kan være mer effektiv enn å trene mye i moderat intensitet (sone 3).',
        solution: 'Den polariserte modellen innebærer at ca. 80 % av treningen gjøres i lav intensitet (sone 1–2) og ca. 20 % i høy intensitet (sone 4–5), med minimalt i sone 3. Mye trening i sone 3 (det såkalte «svart hull» / «no man\'s land») er for hardt til å gi god restitusjon, men for lett til å stimulere VO2max-utvikling. Lav-intensitetstrening gir gode aerobe tilpasninger (kapillærer, mitokondrier, fettforbrenning) med lav belastning, slik at utøveren kan trene mye uten overbelastning. Høyintensitetsøktene gir spesifikke stimuli for VO2max og laktatterskel. Kombinasjonen gir best langsiktig utvikling sammenlignet med å trene mye i «grå sonen» der belastningen er for stor til å restituere, men for lav til å gi maksimal tilpasning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-5-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-5-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Lag en treningsplan for en uke for en mosjonist som ønsker å forbedre sin utholdenhet for å fullføre et halvmaraton. Begrunn valg av treningsmetoder og intensiteter.',
        solution: 'Mandag: Rolig langkjøring 40 min i sone 2 — bygger aerob grunnkapasitet med lav belastning. Tirsdag: Terskeltrening 3×8 min i sone 4 med 2 min joggepause — hever laktatterskelen. Onsdag: Hviledag eller lett gåtur — restitusjon. Torsdag: Mellomintervaller 5×3 min i sone 4–5 med 2 min aktiv pause — forbedrer VO2max. Fredag: Hviledag. Lørdag: Lang rolig tur 60–75 min i sone 2 — bygger aerob kapasitet og mental utholdenhet for distanse. Søndag: Fartlek 30 min — variasjon og glede. Begrunnelse: 80/20-fordeling med mesteparten i lav sone, to harde økter for å løfte VO2max og laktatterskel, og gradvis økning av langturens lengde mot halvmaratonmålet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.4: Testing av utholdenhet
// ============================================================================

export const CHAPTER_TRENING_1_5_4: TextbookChapter = {
  id: 'trening-1-5-4',
  courseId: 'trening-1',
  chapterNumber: '5.4',
  title: 'Testing av utholdenhet',
  description: 'Cooper-test, bip-test, laktatprofil og VO2max-test for å kartlegge og følge opp utholdenhetsutvikling.',
  estimatedMinutes: 22,
  competenceGoals: [
    'beskrive ulike tester for utholdenhet og hva de måler',
    'gjennomføre og tolke resultater fra enkle utholdenhetstester',
    'vurdere styrker og svakheter ved ulike testmetoder',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr-5-4-intro',
      type: 'text',
      content: `# Testing av utholdenhet

Testing av utholdenhet er viktig for å kartlegge utøverens nåværende form, sette realistiske treningsmål og evaluere effekten av treningen over tid. Testene varierer fra enkle felttester som kan gjennomføres på en friidrettsbane, til avanserte laboratorietester med gassmåling og blodprøver.`,
    },
    {
      id: 'tr-5-4-def-felttest',
      type: 'definition',
      title: 'Felttest vs. laboratorietest',
      content: `En **felttest** gjennomføres utendørs eller i en idrettshall uten avansert utstyr. Fordeler: billig, enkel å gjennomføre, kan teste mange samtidig. Ulempe: mindre nøyaktig. En **laboratorietest** gjennomføres under kontrollerte forhold med avansert utstyr (gassanalysator, ergometersykkel, tredemølle). Fordeler: svært nøyaktig. Ulempe: dyrt og tidkrevende.`,
    },
    {
      id: 'tr-5-4-text-cooper',
      type: 'text',
      title: 'Cooper-test (12-minutters løpetest)',
      content: `**Hva er Cooper-testen?**
Cooper-testen ble utviklet av den amerikanske legen Kenneth Cooper i 1968. Utøveren løper så langt som mulig på 12 minutter. Distansen brukes til å estimere VO2max.

**Gjennomføring:**
1. Varm opp i 10–15 minutter
2. Løp på flat bane (helst 400 m friidrettsbane)
3. Start alle samtidig på signal
4. Løp jevnt — unngå for rask start
5. Mål distansen etter nøyaktig 12 minutter

**Estimering av VO2max:**
VO2max (ml/kg/min) ≈ (distanse i meter − 504,9) ÷ 44,73

**Normverdier (gutter 16–19 år):**
| Karakter | Distanse |
|----------|----------|
| Svært god | Over 2800 m |
| God | 2500–2800 m |
| Gjennomsnittlig | 2200–2499 m |
| Under gjennomsnitt | 1900–2199 m |
| Svak | Under 1900 m |

**Normverdier (jenter 16–19 år):**
| Karakter | Distanse |
|----------|----------|
| Svært god | Over 2400 m |
| God | 2100–2400 m |
| Gjennomsnittlig | 1800–2099 m |
| Under gjennomsnitt | 1500–1799 m |
| Svak | Under 1500 m |`,
    },
    {
      id: 'tr-5-4-text-biptest',
      type: 'text',
      title: 'Bip-test (Beep-test / Multi-stage fitness test)',
      content: `**Hva er bip-testen?**
Bip-testen er en progressiv utholdenhetstest der utøveren løper fram og tilbake mellom to linjer 20 meter fra hverandre. Tempoet styres av et lydopptak («bip»), og hastigheten øker gradvis for hvert nivå.

**Gjennomføring:**
1. Marker to linjer med 20 meters avstand
2. Start på signal — løp til den andre linjen før neste bip
3. Hastigheten starter på 8,5 km/t (nivå 1) og øker med 0,5 km/t per nivå
4. Testen er over når utøveren ikke rekker linjen på to påfølgende bip
5. Resultatet er det siste fullførte nivået og antall baner

**Fordeler:**
- Krever lite utstyr og plass
- Kan teste mange samtidig
- Godt egnet for lagspillere (retningsendringer)
- Motiverende gruppeformat

**Tolkning:**
Nivå og antall baner brukes i tabeller for å estimere VO2max. For eksempel tilsvarer nivå 8.8 ca. 44 ml/kg/min, mens nivå 13.1 tilsvarer ca. 60 ml/kg/min.`,
    },
    {
      id: 'tr-5-4-text-laktatprofil',
      type: 'text',
      title: 'Laktatprofiltest',
      content: `**Hva er en laktatprofiltest?**
En laktatprofiltest kartlegger forholdet mellom treningsintensitet og laktatnivå i blodet. Utøveren gjennomfører flere arbeidsdrag med økende intensitet, og det tas blodprøve (fra fingertuppen eller øreflippen) etter hvert drag.

**Gjennomføring (eksempel på tredemølle):**
1. Start med lett jogg (8–10 km/t) i 4–5 minutter
2. Ta blodprøve og registrer hjertefrekvens
3. Øk hastigheten med 1 km/t
4. Gjenta steg 2–3 til utmattelse (vanligvis 5–8 drag)
5. Plot laktatverdiene mot hastighet

**Hva forteller laktatprofilen?**
- **Aerob terskel**: Der laktaten begynner å stige over hvilenivå (ca. 2 mmol/L)
- **Anaerob terskel**: Der laktaten stiger bratt (ca. 4 mmol/L)
- **Hastighet ved tersklene**: Avgjørende for treningsplanlegging

**Betydning for trening:**
- Treningssoner kan settes presist ut fra individuelle terskelverdier
- Endring i laktatprofil over tid viser treningseffekt
- Kurven kan forskyves mot høyre (bedre) med riktig trening`,
    },
    {
      id: 'tr-5-4-text-vo2maxtest',
      type: 'text',
      title: 'Direkte VO2max-test',
      content: `**Hva er en direkte VO2max-test?**
Den mest nøyaktige målingen av VO2max gjøres i et fysiologisk laboratorium med gassanalysator. Utøveren bruker maske som samler pustegassen, og utstyret måler nøyaktig hvor mye oksygen som tas opp og CO₂ som avgis.

**Gjennomføring (på tredemølle):**
1. Utøveren starter med moderat hastighet
2. Hastigheten eller stigningen økes hvert 1–2 minutt
3. Oksygenopptak, CO₂-produksjon og hjertefrekvens registreres kontinuerlig
4. Testen fortsetter til utmattelse
5. VO2max er nådd når oksygenopptaket flater ut («platå») til tross for økt belastning

**Kriterier for at VO2max er nådd:**
- Oksygenopptaket flater ut (platå)
- Respirasjonskvotient (RER) over 1,10
- Hjertefrekvens nær beregnet maksimum
- Laktat over 8 mmol/L etter testen

**Fordeler og ulemper:**
- Fordel: Gir den mest presise verdien
- Ulempe: Krever dyrt utstyr, trent testpersonell, og er tidkrevende`,
    },
    {
      id: 'tr-5-4-note-1',
      type: 'note',
      title: 'Validitet og reliabilitet i testing',
      content: `**Validitet** betyr at testen måler det den er ment å måle. Cooper-testen har moderat validitet for VO2max — den estimerer, men måler ikke direkte. **Reliabilitet** betyr at testen gir konsistente resultater. For å sikre reliabilitet bør testen gjennomføres under like forhold: samme tidspunkt, oppvarming, underlag, vær og motivasjon.`,
    },
    {
      id: 'tr-5-4-example-1',
      type: 'example',
      title: 'Eksempel: Tolke Cooper-test-resultater',
      problem: `En gutt på 17 år løper 2650 meter på Cooper-testen. Estimer VO2max og vurder resultatet.`,
      solution: `**Beregning av VO2max:**
VO2max ≈ (2650 − 504,9) ÷ 44,73
VO2max ≈ 2145,1 ÷ 44,73
VO2max ≈ **48,0 ml/kg/min**

**Vurdering:**
Ifølge normtabellen for gutter 16–19 år er 2650 m et «godt» resultat (2500–2800 m). Estimert VO2max på 48 ml/kg/min tilsier at eleven har god aerob kapasitet sammenlignet med jevnaldrende.

**Merk:** Coopertest-formelen er et estimat. Den faktiske VO2max kan avvike med ±5 ml/kg/min. Løpeteknikk, motivasjon og evne til å disponere løpet påvirker resultatet.`,
    },
    {
      id: 'tr-5-4-tip-1',
      type: 'tip',
      title: 'Tips for best mulig testresultat',
      content: `For å få et pålitelig resultat på en utholdenhetstest: 1) Varm godt opp i 10–15 min. 2) Ha hvilet godt dagen før (ingen hard trening). 3) Spis et lett måltid 2–3 timer før. 4) Bruk riktige sko og klær. 5) Disponer innsatsen jevnt — ikke start for hardt. 6) Gjennomfør testen under lignende forhold hver gang for sammenlignbare resultater.`,
    },
    {
      id: 'tr-5-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-5-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva måler Cooper-testen?',
        options: [
          { id: 'a', text: 'Den estimerer VO2max basert på løpt distanse på 12 minutter', isCorrect: true },
          { id: 'b', text: 'Den måler den maksimale sprinttiden over 100 meter', isCorrect: false },
          { id: 'c', text: 'Den måler laktatnivået i blodet', isCorrect: false },
          { id: 'd', text: 'Den måler muskelstyrke i bena', isCorrect: false },
        ],
        solution: 'Cooper-testen er en 12-minutters løpetest der distansen brukes til å estimere VO2max med formelen: VO2max ≈ (distanse i meter − 504,9) ÷ 44,73.',
      },
    },
    {
      id: 'tr-5-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-5-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er den viktigste forskjellen mellom en felttest og en laboratorietest?',
        options: [
          { id: 'a', text: 'Laboratorietest gjøres under kontrollerte forhold med avansert utstyr, felttest gjøres utendørs med enkelt utstyr', isCorrect: true },
          { id: 'b', text: 'Felttester er alltid mer nøyaktige enn laboratorietester', isCorrect: false },
          { id: 'c', text: 'Laboratorietester kan bare gjøres av leger', isCorrect: false },
          { id: 'd', text: 'Felttester måler alltid VO2max direkte', isCorrect: false },
        ],
        solution: 'Laboratorietester gjennomføres under kontrollerte forhold med avansert utstyr (gassanalysator, ergometersykkel) og gir svært nøyaktige resultater. Felttester er enklere og billigere, men mindre presise.',
      },
    },
    {
      id: 'tr-5-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-5-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'En jente på 17 år løper 2250 meter på Cooper-testen. Beregn estimert VO2max og vurder resultatet i forhold til normtabellen.',
        solution: 'VO2max ≈ (2250 − 504,9) ÷ 44,73 = 1745,1 ÷ 44,73 ≈ 39,0 ml/kg/min. Ifølge normtabellen for jenter 16–19 år er 2250 m et «godt» resultat (2100–2400 m). Eleven har god aerob kapasitet sammenlignet med jevnaldrende jenter.',
        hints: ['Bruk formelen: VO2max ≈ (distanse − 504,9) ÷ 44,73'],
      },
    },
    {
      id: 'tr-5-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-5-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv hvordan en laktatprofiltest gjennomføres. Forklar hva resultatene forteller om utøverens treningsform.',
        solution: 'Utøveren løper eller sykler med gradvis økende intensitet i arbeidsdrag på 4–5 minutter. Etter hvert drag tas en blodprøve fra fingertuppen for å måle laktatnivået, og hjertefrekvens registreres. Intensiteten økes til utmattelse. Resultatene plottes i et diagram med intensitet på x-aksen og laktat på y-aksen. Kurven viser aerob terskel (der laktaten begynner å stige, ca. 2 mmol/L) og anaerob terskel (der laktaten stiger bratt, ca. 4 mmol/L). Hastigheten ved tersklene forteller hvor raskt utøveren kan løpe uten opphopning av laktat — jo høyere hastighet ved terskelen, jo bedre utholdenhetsform.',
      },
    },
    {
      id: 'tr-5-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-5-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Sammenlign Cooper-testen, bip-testen og den direkte VO2max-testen med hensyn til validitet, reliabilitet, praktisk gjennomføring og egnethet for ulike grupper. Hvilken test vil du anbefale for en skoleklasse, og hvilken for en eliteutøver? Begrunn svaret.',
        solution: 'Cooper-testen: God validitet for å estimere VO2max (korrelasjon ca. 0,9), god reliabilitet ved standardiserte forhold, enkel å gjennomføre, krever bane og stoppeklokke. Passer godt for en skoleklasse — alle løper samtidig, enkelt utstyr. Bip-testen: Moderat validitet, god reliabilitet, krever lite plass (20 m) og lydopptak. Passer godt for innendørs testing av lagspillere. VO2max-test i lab: Høyest validitet (direkte måling), høy reliabilitet, krever dyrt utstyr og trenet personell, tester en person om gangen. For skoleklasse: Cooper-test — enkel, billig, motiverende. For eliteutøver: Direkte VO2max-test i laboratorium — gir nøyaktige verdier og tilleggsinformasjon om laktatterskel og arbeidsøkonomi som er avgjørende for presis treningsplanlegging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-5-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-5-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En utøver gjennomfører en laktatprofiltest i september og igjen i desember etter tre måneder med målrettet utholdenhets­trening. I september var laktatnivået 4 mmol/L ved 14 km/t. I desember var laktatnivået 4 mmol/L ved 15,5 km/t. Forklar hva dette betyr, og drøft hvilke fysiologiske tilpasninger som kan ligge bak forbedringen.',
        solution: 'At laktatterskelen (4 mmol/L) nå ligger ved 15,5 km/t i stedet for 14 km/t betyr at utøveren kan løpe 1,5 km/t raskere før laktat hoper seg opp. Laktatkurven er forskjøvet mot høyre — utøveren har bedre utholdenhetsform. Fysiologiske tilpasninger bak forbedringen: 1) Økt kapillærtetthet — bedre oksygentilførsel til musklene. 2) Flere og større mitokondrier — mer effektiv aerob energiproduksjon. 3) Økt aktivitet i oksidative enzymer — raskere aerob nedbryting av glukose og fett. 4) Forbedret laktatfjerning — musklene og leveren fjerner laktat raskere. 5) Bedre arbeidsøkonomi — utøveren bruker mindre energi ved samme hastighet. Samlet betyr dette at utøveren kan trene og konkurrere med høyere fart ved gitt anstrengelsesnivå.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Kapittel 5.5: Utholdenhetstrening i ulike idretter
// ============================================================================

export const CHAPTER_TRENING_1_5_5: TextbookChapter = {
  id: 'trening-1-5-5',
  courseId: 'trening-1',
  chapterNumber: '5.5',
  title: 'Utholdenhetstrening i ulike idretter',
  description: 'Hvordan utholdenhetstrening tilpasses løping, sykling, svømming, langrenn og ballspill.',
  estimatedMinutes: 25,
  competenceGoals: [
    'beskrive hvordan utholdenhets­trening tilpasses ulike idretter',
    'forstå hvorfor spesifisitetsprinsippet er sentralt i utholdenhets­trening',
    'kunne planlegge idrettsspesifikk utholdenhets­trening for ulike idretter',
  ],
  keyTerms: [],
  content: [
    {
      id: 'tr-5-5-intro',
      type: 'text',
      content: `# Utholdenhetstrening i ulike idretter

Utholdenhet er viktig i nesten alle idretter, men kravene varierer betydelig. En maratonløper trenger en annen type utholdenhet enn en fotballspiller. Spesifisitetsprinsippet forteller oss at treningen må gjenspeile de kravene idretten stiller — både med hensyn til bevegelsesmønster, intensitet, varighet og energisystem.`,
    },
    {
      id: 'tr-5-5-def-spesifisitet',
      type: 'definition',
      title: 'Spesifisitetsprinsippet i utholdenhetstrening',
      content: `Spesifisitetsprinsippet innebærer at trenings­tilpasningene er spesifikke for den belastningen kroppen utsettes for. For best overføringsverdi til konkurranse bør treningen ligne mest mulig på de kravene idretten stiller, både med hensyn til bevegelsesmønster, muskelgrupper, intensitet og energisystem.`,
    },
    {
      id: 'tr-5-5-text-loping',
      type: 'text',
      title: 'Utholdenhetstrening for løping',
      content: `**Krav i løpeidretter:**
Løping stiller store krav til aerob kapasitet, arbeidsøkonomi og energilagre. Distansen avgjør hvilke energisystemer som dominerer.

**Treningsopplegg for langdistanseløping (5 km – maraton):**
- **Langkjøring** (70–80 % av treningsvolumet): Rolig løping i sone 2 for å bygge aerob grunnkapasitet
- **Terskeltrening** (10–15 %): Tempo-løp og cruise-intervaller for å heve laktatterskelen
- **Intervalltrening** (10–15 %): 4×4 min eller 1000 m-intervaller for å forbedre VO2max
- **Spesifikk løpsteknikk**: Stigningsløp, strideslengde-økter

**Spesielle hensyn:**
- Belastning på ledd og sener — gradvis økning av mengde
- Underlagsvariasjon (asfalt, grus, skog) for å redusere overbelastningsskader
- Innslag av styrketrening for å forebygge skader`,
    },
    {
      id: 'tr-5-5-text-sykling',
      type: 'text',
      title: 'Utholdenhetstrening for sykling',
      content: `**Krav i sykling:**
Sykling er en ikke-vektbærende utholdenhets­idrett med stor andel aerob energifrigjøring. Kravene varierer med disiplin — landevei, terreng, tempo eller sprint.

**Treningsopplegg for landeveissykling:**
- **Langtur** (60–70 % av treningsvolumet): 2–5 timer i sone 2 for å bygge aerob grunnkapasitet
- **Sweetspot-trening**: 88–93 % av FTP (Functional Threshold Power) i 10–20 min — effektivt for å heve terskel
- **VO2max-intervaller**: 3–8 min i sone 5 for å forbedre maksimalt oksygenopptak
- **Bakkeintervaller**: Hardt i oppoverbakker for spesifikk styrke-utholdenhet

**Spesielle hensyn:**
- Lav skaderisiko (ikke vektbærende)
- Mulig å trene mye volum
- Wattmåler gir presis intensitetsstyring
- Ergonomisk tilpasning av sykkel er viktig for å unngå overbelastning`,
    },
    {
      id: 'tr-5-5-text-svomming',
      type: 'text',
      title: 'Utholdenhetstrening for svømming',
      content: `**Krav i svømming:**
Svømming krever utholdenhet, teknikk og styrke i overkroppen. Vannets motstand gjør at arbeidsøkonomi (svømmeteknikk) er ekstremt viktig.

**Treningsopplegg for svømmere:**
- **Grunntrening** (aerob): Lange serier med moderat intensitet, f.eks. 10 × 200 m med 20 sek pause
- **Terskeltrening**: 4–8 × 100–200 m i terskeltempo med kort pause
- **Sprinttrening**: 8–12 × 25–50 m med lang pause for å utvikle fart
- **Teknikktrening**: Drill og øvelser med fokus på glidephase, armtak og sparkfrekvens

**Spesielle hensyn:**
- Teknikk er avgjørende — dårlig teknikk bruker mer energi
- Svømming bruker primært overkropps­muskulatur — krever spesifikk styrketrening
- Trening i vann gir mindre belastning på ledd
- Pust-timing er kritisk — feil pustemønster kan begrense oksygenopptaket`,
    },
    {
      id: 'tr-5-5-text-langrenn',
      type: 'text',
      title: 'Utholdenhetstrening for langrenn',
      content: `**Krav i langrenn:**
Langrenn regnes som en av de mest krevende utholdenhetsidretter­ene fordi den bruker store muskelgrupper i både overkropp og underkropp. Langrennsløpere har blant de høyeste VO2max-verdiene i idretten.

**Treningsopplegg for langrenn:**
- **Langtur med rulleski, løping eller sykling** (70–80 %): Bygger aerob grunnkapasitet
- **Intervalltrening på rulleski** (10–15 %): 4×4 min eller 6×5 min i sone 4–5
- **Terskeltrening** (10–15 %): 20–40 min sammenhengende i terskeltempo
- **Styrketrening**: Staking, drag og styrkeøvelser spesifikk for langrenn
- **Alternativ trening**: Løping, sykling og padling for å bygge volum med variasjon

**Spesielle hensyn:**
- Sesongbasert: sommertrening med rulleski, løping og sykling — vintertrening på snø
- Krevende å trene spesifikt om sommeren (snømangel)
- Høyt totalt treningsvolum (eliteutøvere: 700–900 timer/år)
- Dobbelstaving krever betydelig overkroppsstyrke-utholdenhet`,
    },
    {
      id: 'tr-5-5-text-ballspill',
      type: 'text',
      title: 'Utholdenhetstrening for ballspill',
      content: `**Krav i ballspill (fotball, håndball, basketball):**
Ballspill krever en kombinasjon av aerob grunnkapasitet (holde ut en hel kamp) og gjentatt sprintevne (repeated sprint ability — RSA). Utøverne veksler mellom perioder med lav, moderat og høy intensitet.

**Treningsopplegg for ballspillere:**
- **Aerob grunntrening** (2–3 økter/uke): Rolig løping 30–40 min i sone 2
- **Høyintensitetsintervaller** (1–2 økter/uke): 4×4 min i sone 5, eller smålagsspill med høy intensitet
- **Gjentatt sprinttrening** (RSA): 6–10 × 30 m sprint med 20–30 sek pause
- **Idrettsspesifikk kondisjon**: Smålagsspill (3v3, 4v4, 5v5) med intensitetsstyring

**Spesielle hensyn:**
- Smålagsspill gir både kondisjon og teknisk/taktisk trening
- Kondisjonstrening bør ikke gå på bekostning av teknisk trening
- Kampbelastning varierer mellom posisjoner (midtbanespillere løper mest)
- Restitusjonstid mellom kamper påvirker treningsplanlegging`,
    },
    {
      id: 'tr-5-5-note-1',
      type: 'note',
      title: 'Kryss-trening og overføringsverdi',
      content: `Kryss-trening (å trene en annen aktivitet enn hoved­idretten) kan bygge aerob kapasitet med lavere skaderisiko, men overføringsverdien er begrenset. En syklist som løper får aerob effekt, men utvikler ikke spesifikk styrke-utholdenhet i bena for sykling. For best effekt bør hoveddelen av treningen være idrettsspesifikk.`,
    },
    {
      id: 'tr-5-5-example-1',
      type: 'example',
      title: 'Eksempel: Sammenligning av utholdenhetskrav',
      problem: `Sammenlign utholdenhetskravene for en maratonløper og en fotballspiller. Beskriv likheter og forskjeller.`,
      solution: `**Likheter:**
- Begge trenger god aerob grunnkapasitet
- Begge har nytte av høy laktatterskel
- Begge må kunne holde ut over lang tid (2–5 timer / 90+ min)

**Forskjeller:**
| | Maratonløper | Fotballspiller |
|---|---|---|
| Bevegelsesmønster | Jevn løping framover | Vekslende: spurt, jogg, gange, retningsendring |
| Dominerende system | Aerobt (>95 %) | Aerobt med gjentatte anaerobe drag |
| Intensitetsprofil | Jevn, terskel | Varierende, intermittent |
| Viktigste egenskap | Aerob kapasitet, arbeidsøkonomi | Gjentatt sprintevne (RSA), aerob restitusjon |
| Treningsfokus | Langkjøring, terskel | Smålagsspill, intervall, RSA |
| Typisk VO2max | 65–85 ml/kg/min | 55–70 ml/kg/min |`,
    },
    {
      id: 'tr-5-5-tip-1',
      type: 'tip',
      title: 'Periodisering av utholdenhets­trening',
      content: `I de fleste idretter deles treningsåret inn i perioder: forberedelsesperiode (bygge grunnkapasitet), konkurranseperiode (vedlikeholde og spisse) og overgangstid (restitusjon). I forberedelsesperioden trenes mye volum i lav intensitet. Når konkurranse nærmer seg, reduseres volumet og intensiteten økes for å bli «klar» til konkurranse.`,
    },
    {
      id: 'tr-5-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-5-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva innebærer spesifisitetsprinsippet i utholdenhets­trening?',
        options: [
          { id: 'a', text: 'Treningen bør ligne mest mulig på kravene i idretten med hensyn til bevegelse, intensitet og energisystem', isCorrect: true },
          { id: 'b', text: 'All utholdenhets­trening bør gjøres som langkjøring', isCorrect: false },
          { id: 'c', text: 'Utøvere bør bare trene en idrett', isCorrect: false },
          { id: 'd', text: 'Spesifikk trening betyr alltid høy intensitet', isCorrect: false },
        ],
        solution: 'Spesifisitetsprinsippet innebærer at trenings­tilpasningene er spesifikke for den belastningen kroppen utsettes for. For best overføringsverdi til konkurranse bør treningen ligne på idrettens krav.',
      },
    },
    {
      id: 'tr-5-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-5-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken idrett stiller typisk de høyeste kravene til VO2max?',
        options: [
          { id: 'a', text: 'Langrenn', isCorrect: true },
          { id: 'b', text: 'Fotball', isCorrect: false },
          { id: 'c', text: 'Svømming', isCorrect: false },
          { id: 'd', text: 'Basketball', isCorrect: false },
        ],
        solution: 'Langrenn regnes som en av de mest krevende utholdenhets­idrettene fordi den bruker store muskelgrupper i både over- og underkropp. Langrennsløpere har blant de høyeste VO2max-verdiene, ofte 75–90 ml/kg/min hos eliteutøvere.',
      },
    },
    {
      id: 'tr-5-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-5-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvorfor smålagsspill (f.eks. 4v4) er en effektiv treningsmetode for ballspillere. Beskriv hvilke fysiologiske og idrettsspesifikke fordeler denne metoden gir.',
        solution: 'Smålagsspill gir høy hjertefrekvens (ofte sone 4–5) fordi hver spiller er involvert i mye spill. Fysiologiske fordeler: forbedrer VO2max, gjentatt sprintevne (RSA), og laktatfjerning mellom intense drag. Idrettsspesifikke fordeler: trener teknikk under press, taktisk forståelse, raske beslutninger, spillforståelse og samarbeid — alt i en øvelse. Utøverne får kondisjonstrening som er direkte overførbar til kamp, noe som gjør smålagsspill mer effektivt enn isolert løping for mange ballspillere.',
        hints: ['Tenk på både fysiologiske og spillmessige fordeler'],
      },
    },
    {
      id: 'tr-5-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-5-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv hvordan utholdenhets­trening for en svømmer skiller seg fra trening for en langdistanseløper. Legg vekt på treningsmetoder, muskelgrupper og spesielle hensyn.',
        solution: 'Svømming: Trener primært overkropps­muskulatur, krever utmerket teknikk for god arbeidsøkonomi, gjennomføres i vann (ikke vektbærende, lavere skaderisiko). Trening: lange serier i basseng (f.eks. 10×200 m), teknikkdrill, sprinttrening. Spesielle hensyn: pustetiming, vannmotstand, behov for separat styrketrening. Langdistanseløping: Trener primært underkropps­muskulatur, vektbærende (høyere belastning på ledd), arbeidsøkonomi handler om strideslengde og steghastighet. Trening: langkjøring, terskeltempo, intervaller på bane. Spesielle hensyn: stor belastning på knær, hofter og legger, behov for underlagsvariasjon og gradvis mengdeøkning for å unngå overbelastningsskader.',
      },
    },
    {
      id: 'tr-5-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-5-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Velg en idrett du kjenner godt. Analyser utholdenhetskravene i denne idretten, og lag et forslag til et 4-ukers treningsopplegg for utholdenhets­forbedring. Begrunn valgene dine med treningsteori.',
        solution: 'Eksempel for fotball: Krav: Aerob grunnkapasitet (holde ut 90 min), gjentatt sprintevne, rask restitusjon mellom intense perioder. Uke 1–2 (oppbygging): 3 kondisjonstrening/uke — mandag: rolig langkjøring 35 min sone 2 (aerob grunnkapasitet); onsdag: 4×4 min intervall sone 5 med 3 min pause (VO2max); fredag: smålagsspill 4v4 i 4×5 min (idrettsspesifikk kondisjon + RSA). Uke 3–4 (progresjon): øk til 4 økter/uke — legg til torsdag: gjentatt sprinttrening 8×30 m med 25 sek pause (spesifikk RSA-trening). Øk langkjøring til 40 min, og intervallene til 5×4 min. Begrunnelse: Polarisert fordeling (80/20), idrettsspesifisitet gjennom smålagsspill, gradvis progresjon i volum og intensitet, og dekning av alle relevante energisystemer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-5-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-5-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En langrennsløper, en syklist og en svømmer har alle VO2max på 65 ml/kg/min. Drøft hvorfor de likevel kan prestere svært ulikt dersom de bytter idrett. Bruk spesifisitetsprinsippet og begrepet arbeidsøkonomi i forklaringen.',
        solution: 'Selv om alle tre har VO2max på 65 ml/kg/min, er prestasjonsevnen idrettsspesifikk. Spesifisitetsprinsippet: Trenings­tilpasningene (muskelrekruttering, motoriske mønstre, lokale muskulære tilpasninger) er spesifikke for bevegelsesmønsteret de har trent. Langrennsløperen har tilpasset overkropp og underkropp for skipresjon og staking, syklisten har spesifikk utholdenhet i lårmuskulatur for trappearbeid, og svømmeren har tilpasset overkropps­muskulatur for svømmeteknikk. Arbeidsøkonomi: Hver utøver har utviklet effektiv teknikk i sin idrett gjennom tusenvis av timer. Dårlig teknikk i en ny idrett betyr høyere energiforbruk ved samme hastighet. Svømmeren har f.eks. dårlig løpeteknikk og bruker mer energi per km løpt. Syklisten mangler skiteknikk og spilder energi på ustødig skigang. Konklusjon: VO2max er et mål på det generelle aerobe potensialet, men prestasjon avhenger i stor grad av idrettsspesifikk arbeidsøkonomi og muskulære tilpasninger.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
};

// ============================================================================
// Eksporter alle kapitler i del 5
// ============================================================================

export const TRENING_1_DEL5_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_1_5_1,
  CHAPTER_TRENING_1_5_2,
  CHAPTER_TRENING_1_5_3,
  CHAPTER_TRENING_1_5_4,
  CHAPTER_TRENING_1_5_5,
];
