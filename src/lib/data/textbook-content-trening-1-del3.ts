/* eslint-disable */
// @ts-nocheck
/**
 * Tekstbok innhold for Treningslære 1 (VG2) - Seksjon 3: Fysiologi og energi
 *
 * Dekker LK20-kompetansemål for treningslære 1
 * Energisystemer, hjerte-kar, respirasjon, nervesystem og hormoner
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 3.1: Energisystemer
// ============================================================================

export const CHAPTER_TRENING_1_3_1: TextbookChapter = {
  id: 'trening-1-3-1',
  courseId: 'trening-1',
  chapterNumber: '3.1',
  title: 'Energisystemer',
  description: 'Forstå kroppens tre energisystemer: ATP og kreatinfosfatsystemet, anaerob glykolyse og aerob forbrenning.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare hva ATP er og hvorfor det er viktig for muskelarbeid',
    'beskrive kreatinfosfatsystemets rolle i kortvarig, intensiv aktivitet',
    'gjøre rede for anaerob glykolyse og melkesyreproduksjon',
    'forklare aerob forbrenning og dens betydning for utholdenhetsaktiviteter',
  ],
  content: [
    {
      id: 'tr-3-1-intro',
      type: 'text',
      content: `# Energisystemer

All muskelaktivitet krever energi. Kroppen henter denne energien fra maten vi spiser, men muskelcellene kan bare bruke energi i form av adenosintrifosfat (ATP). Kroppen har tre ulike systemer for å produsere ATP, og hvilket system som dominerer avhenger av aktivitetens intensitet og varighet.

Å forstå energisystemene er grunnleggende for å planlegge effektiv trening. Ulike idretter stiller ulike krav til energiproduksjon, og treningen må tilpasses deretter.`,
    },
    {
      id: 'tr-3-1-def-atp',
      type: 'definition',
      title: 'ATP (Adenosintrifosfat)',
      content: 'ATP er kroppens universelle energivaluta. Molekylet består av adenosin bundet til tre fosfatgrupper. Når den ytterste fosfatbindingen brytes, frigjøres energi som muskelcellene bruker til kontraksjon. ATP brytes ned til ADP (adenosindifosfat) og en fri fosfatgruppe.',
    },
    {
      id: 'tr-3-1-text-1',
      type: 'text',
      title: 'Oversikt over energisystemene',
      content: `Kroppen har tre energisystemer som arbeider parallelt, men med ulik dominans avhengig av belastningen:

| Energisystem | Dominerer ved | Varighet | Oksygenbehov |
|---|---|---|---|
| Kreatinfosfatsystemet | Maksimal intensitet | 0–10 sekunder | Uten oksygen |
| Anaerob glykolyse | Høy intensitet | 10 sek – 2 min | Uten oksygen |
| Aerob forbrenning | Lav til moderat intensitet | Over 2 minutter | Med oksygen |

Alle tre systemene er aktive samtidig, men bidrar i ulik grad. Ved kort, eksplosiv aktivitet dominerer kreatinfosfatsystemet, mens aerob forbrenning tar over ved langvarig aktivitet.`,
    },
    {
      id: 'tr-3-1-def-kreatinfosfat',
      type: 'definition',
      title: 'Kreatinfosfatsystemet (det fosfagene systemet)',
      content: 'Kreatinfosfatsystemet er det raskeste energisystemet. Kreatinfosfat (KF) donerer sin fosfatgruppe til ADP for å gjendanne ATP. Systemet gir umiddelbar energi uten oksygen, men lagrene er begrenset og tømmes etter ca. 6–10 sekunder med maksimal innsats. Full gjenoppbygging tar 2–5 minutter med hvile.',
    },
    {
      id: 'tr-3-1-text-2',
      type: 'text',
      title: 'Kreatinfosfatsystemet i detalj',
      content: `**Hvordan det fungerer:**

1. Muskelcellene har et lite lager av ferdig ATP (rekker til ca. 1–2 sekunders arbeid)
2. Kreatinkinase-enzymet katalyserer overføring av fosfatgruppe fra kreatinfosfat til ADP
3. Ny ATP dannes umiddelbart: KF + ADP → Kreatin + ATP
4. Lagrene tømmes etter 6–10 sekunders maksimalt arbeid

**Når systemet dominerer:**
- Spurt (100 m løp)
- Hopp og kast
- Vektløfting (enkeltløft)
- Eksplosive handlinger i lagidrett

**Restitusjon av kreatinfosfatlagrene:**
- 50 % gjenoppfylt etter ca. 30 sekunder
- 85 % etter ca. 90 sekunder
- Full gjenoppfylling etter 2–5 minutter
- Krever oksygen for gjenoppbygging`,
    },
    {
      id: 'tr-3-1-text-3',
      type: 'text',
      title: 'Anaerob glykolyse',
      content: `**Hva er anaerob glykolyse?**

Anaerob glykolyse er nedbrytning av glukose (blodsukker) eller glykogen (lagret sukker i muskler) uten oksygen. Prosessen gir rask energi, men er mindre effektiv enn aerob forbrenning.

**Prosessen steg for steg:**

1. Glukose (6 karbonatomer) spaltes til to molekyler pyruvat (3 karbonatomer)
2. Netto utbytte: 2 ATP per glukosemolekyl
3. Uten tilstrekkelig oksygen omdannes pyruvat til laktat (melkesyre)
4. Opphopning av laktat og hydrogenioner (H⁺) fører til surere miljø i muskelen

**Konsekvenser av laktatopphopning:**
- Brennende følelse i musklene
- Redusert evne til muskelkontraksjon
- Tvinger utøveren til å senke intensiteten
- Laktat fjernes i løpet av 30–60 minutter etter avsluttet arbeid

**Idrettseksempler:**
- 400 m løp
- 100 m svømming
- Intensiv intervaltrening
- Gjentatte spurter i lagidretter`,
    },
    {
      id: 'tr-3-1-def-laktat',
      type: 'definition',
      title: 'Laktat (melkesyre)',
      content: 'Laktat er et biprodukt av anaerob glykolyse. Når pyruvat ikke kan transporteres inn i mitokondriene raskt nok, omdannes det til laktat. Laktat er ikke et avfallsprodukt, men kan brukes som energikilde av hjertet, leveren og andre muskler. Laktatterskel er den intensiteten der laktatproduksjonen overstiger fjerningen.',
    },
    {
      id: 'tr-3-1-text-4',
      type: 'text',
      title: 'Aerob forbrenning',
      content: `**Hva er aerob forbrenning?**

Aerob forbrenning er nedbrytning av karbohydrater, fett og (i liten grad) proteiner med oksygen i mitokondriene. Dette er det mest effektive energisystemet og dominerer ved aktivitet med lav til moderat intensitet.

**Prosessen:**

1. **Glykolyse** → Pyruvat (i cytoplasma)
2. **Sitronsyresyklusen (Krebs' syklus)** → CO₂ og elektronbærere (i mitokondriene)
3. **Elektrontransportkjeden** → Vann og store mengder ATP (i mitokondriene)

**Energiutbytte:**
- Fra karbohydrater: ca. 36–38 ATP per glukosemolekyl
- Fra fett: opptil 130 ATP per fettmolekyl (avhenger av fettsyrens lengde)
- Fett gir mest energi, men forbrenningen er langsommere

**Når systemet dominerer:**
- Jogging og langdistanseløp
- Sykling over lengre tid
- Langrenn
- All aktivitet med lav til moderat intensitet over 2 minutter

**Fordeler med godt utviklet aerobt system:**
- Bedre utholdenhet
- Raskere restitusjon mellom intensive perioder
- Økt evne til å forbrenne fett
- Bedre helse og livskvalitet`,
    },
    {
      id: 'tr-3-1-note-1',
      type: 'note',
      title: 'Energisystemene samarbeider',
      content: 'Det er viktig å forstå at energisystemene alltid arbeider samtidig. Ved en 800 m løp bidrar alle tre systemer i ulik grad gjennom løpet. I starten dominerer kreatinfosfatsystemet, deretter overtar anaerob glykolyse, mens aerob forbrenning bidrar stadig mer utover i løpet. God trening av alle systemene gir best samlet prestasjon.',
    },
    {
      id: 'tr-3-1-example-1',
      type: 'example',
      title: 'Eksempel: Energisystemer i fotball',
      problem: 'En fotballspiller løper gjentatte spurter på 10–30 meter, jogger mellom spurtene, og spiller i 90 minutter. Hvilke energisystemer brukes og når?',
      solution: `**Analyse:**

- **Spurtene (0–6 sek):** Kreatinfosfatsystemet dominerer. Gir eksplosiv kraft til akselerasjoner og retningsendringer.
- **Intense dueller (6–30 sek):** Anaerob glykolyse bidrar mest. Spilleren kjenner "melkesyre" i bena etter gjentatte intensive aksjoner.
- **Jogging og gang mellom aksjoner:** Aerob forbrenning dominerer. Gir også mulighet til å restituere kreatinfosfatlagrene.
- **Over hele kampen (90 min):** Det aerobe systemet er grunnlaget. En spiller med god aerob kapasitet kan opprettholde høy intensitet lenger og restituere raskere mellom intensive perioder.

**Konklusjon:** Fotball krever et godt utviklet aerobt grunnlag kombinert med gode anaerobe egenskaper for gjentatte intensive aksjoner.`,
    },
    {
      id: 'tr-3-1-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-3-1-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er ATP?',
        options: [
          { id: 'a', text: 'Kroppens universelle energimolekyl som gir energi til muskelarbeid', isCorrect: true },
          { id: 'b', text: 'Et hormon som regulerer blodsukkeret', isCorrect: false },
          { id: 'c', text: 'En type protein som bygger muskler', isCorrect: false },
          { id: 'd', text: 'Et vitamin som styrker immunforsvaret', isCorrect: false },
        ],
        solution: 'ATP (adenosintrifosfat) er kroppens universelle energivaluta. Når den ytterste fosfatbindingen brytes, frigjøres energi som muskelcellene bruker til kontraksjon.',
      },
    },
    {
      id: 'tr-3-1-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-3-1-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor lenge varer kreatinfosfatlagrene ved maksimal intensitet?',
        options: [
          { id: 'a', text: 'Ca. 6–10 sekunder', isCorrect: true },
          { id: 'b', text: 'Ca. 2 minutter', isCorrect: false },
          { id: 'c', text: 'Ca. 30 minutter', isCorrect: false },
          { id: 'd', text: 'Ca. 1 sekund', isCorrect: false },
        ],
        solution: 'Kreatinfosfatlagrene tømmes etter ca. 6–10 sekunders maksimalt arbeid. Systemet gir umiddelbar energi for svært korte, eksplosive aktiviteter.',
      },
    },
    {
      id: 'tr-3-1-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-3-1-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hva som skjer i anaerob glykolyse, og hvorfor opphopning av laktat fører til at du må senke intensiteten.',
        solution: 'I anaerob glykolyse brytes glukose ned til pyruvat uten oksygen. Nettoutbytte er 2 ATP per glukosemolekyl. Uten tilstrekkelig oksygen omdannes pyruvat til laktat. Sammen med laktat produseres hydrogenioner (H⁺) som gjør miljøet i muskelcellen surere. Dette hemmer enzymene som styrer muskelkontraksjonen og energiproduksjonen, noe som gir en brennende følelse og tvinger utøveren til å senke intensiteten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-3-1-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-3-1-ex-4',
        number: '4',
        type: 'multiple-choice',
        difficulty: 'medium',
        task: 'Hva er det mest effektive energisystemet målt i ATP-utbytte per glukosemolekyl?',
        options: [
          { id: 'a', text: 'Aerob forbrenning (ca. 36–38 ATP)', isCorrect: true },
          { id: 'b', text: 'Anaerob glykolyse (ca. 2 ATP)', isCorrect: false },
          { id: 'c', text: 'Kreatinfosfatsystemet', isCorrect: false },
          { id: 'd', text: 'Alle gir like mye ATP', isCorrect: false },
        ],
        solution: 'Aerob forbrenning gir ca. 36–38 ATP per glukosemolekyl, mens anaerob glykolyse bare gir 2 ATP. Kreatinfosfatsystemet bruker ikke glukose, men overfører fosfatgrupper fra kreatinfosfat til ADP.',
      },
    },
    {
      id: 'tr-3-1-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-3-1-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Gjør rede for de tre energisystemene og forklar hvilke idrettsaktiviteter som hovedsakelig bruker hvert system. Gi minst to eksempler for hvert energisystem.',
        solution: '1) Kreatinfosfatsystemet: Leverer energi i 6–10 sekunder ved maksimal intensitet uten oksygen. Eksempler: 100 m sprint, vektløfting, høydehopp, kulestøt. 2) Anaerob glykolyse: Nedbrytning av glukose uten oksygen, dominerer ved 10 sek–2 min med høy intensitet. Gir 2 ATP per glukose og produserer laktat. Eksempler: 400 m løp, 100 m svømming, gjentatte spurter, intensiv intervaltrening. 3) Aerob forbrenning: Nedbrytning av karbohydrater og fett med oksygen i mitokondriene. Gir ca. 36–38 ATP per glukose. Dominerer ved aktivitet over 2 min. Eksempler: maraton, langdistanse sykling, langrenn, jogging.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-3-1-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-3-1-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'En skiløper konkurrerer i 15 km klassisk. Drøft hvordan alle tre energisystemene bidrar i løpet av konkurransen, og forklar hvorfor et godt utviklet aerobt system er viktigst, selv om løperen gjør korte spurter i motbakkene.',
        solution: 'I et 15 km skirenn dominerer aerob forbrenning fordi aktiviteten er langvarig (30–50 min). Det aerobe systemet bryter ned karbohydrater og fett med oksygen i mitokondriene og gir store mengder ATP. I motbakker øker intensiteten og anaerob glykolyse bidrar mer, noe som gir laktatopphopning. Kreatinfosfatsystemet brukes ved korte akselerasjoner og spurter. Selv om alle tre systemene bidrar, er det aerobe grunnlaget avgjørende fordi: 1) Det leverer mesteparten av energien over tid, 2) Det muliggjør raskere restitusjon av kreatinfosfatlagrene mellom intensive perioder, 3) Det hjelper med å fjerne laktat som produseres i intensive faser, 4) En høy VO₂max gjør at utøveren kan holde høyere tempo aerob uten å gå inn i laktatakkumulering.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-3-1-ex-7',
      type: 'exercise',
      exercise: {
        id: 'tr-3-1-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du er trener for en håndballspiller. Lag et treningsopplegg for én uke som trener alle tre energisystemene. Begrunn valgene dine med tanke på energisystemenes egenskaper og restitusjonsbehov.',
        solution: 'Eksempel på ukeplan: Mandag: Styrke og eksplosivitet (kreatinfosfatsystemet) – korte sprinter 5×30 m med full restitusjon (3 min pause), pluss styrketrening med tunge løft. Tirsdag: Intervalltrening (anaerob glykolyse) – 8×200 m løp med 90 sek pause, eller 6×1 min høyintensiv arbeid med 1 min pause. Onsdag: Lett aerob trening / restitusjon – 30 min lett jogging eller sykling. Torsdag: Spilltrening med høy intensitet (alle systemer). Fredag: Aerob utholdenhetsøkt – 40–60 min rolig løping eller sykling (aerob forbrenning). Lørdag: Kamp eller kamplik trening. Søndag: Hvile. Begrunnelse: Eksplosivitetstrening krever full restitusjon mellom serier for å restituere kreatinfosfatlagrene. Anaerobe intervaller trener laktattoleranse og glykolytisk kapasitet. Aerobe økter bygger grunnlaget for utholdenhet og restitusjon. Hvile- og restitusjonsdager forhindrer overtrenning.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 3.2: Hjerte og blodsirkulasjon
// ============================================================================

export const CHAPTER_TRENING_1_3_2: TextbookChapter = {
  id: 'trening-1-3-2',
  courseId: 'trening-1',
  chapterNumber: '3.2',
  title: 'Hjerte og blodsirkulasjon',
  description: 'Lær om hjertets oppbygning, blodkarrene, blodtrykk, hvilepuls og maksimal puls, og hvordan trening påvirker hjerte-kar-systemet.',
  estimatedMinutes: 25,
  competenceGoals: [
    'beskrive hjertets oppbygning og funksjon',
    'forklare det lille og det store kretsløpet',
    'gjøre rede for blodtrykk og pulsmåling',
    'forklare hvordan utholdenhetstrening påvirker hjerte-kar-systemet',
  ],
  content: [
    {
      id: 'tr-3-2-intro',
      type: 'text',
      content: `# Hjerte og blodsirkulasjon

Hjerte-kar-systemet (det kardiovaskulære systemet) er kroppens transportsystem. Det frakter oksygen, næringsstoffer og hormoner til cellene, og fjerner karbondioksid og andre avfallsstoffer. Under trening øker kravene til hjerte-kar-systemet dramatisk, og regelmessig trening fører til viktige tilpasninger.`,
    },
    {
      id: 'tr-3-2-def-hjerte',
      type: 'definition',
      title: 'Hjertet',
      content: 'Hjertet er en muskuløs pumpe på størrelse med en knyttneve som slår ca. 100 000 ganger per døgn. Det består av fire kamre: høyre forkammer (atrium), høyre hjertekammer (ventrikkel), venstre forkammer og venstre hjertekammer. Hjertet pumper blodet gjennom to kretsløp: det lille (til lungene) og det store (til resten av kroppen).',
    },
    {
      id: 'tr-3-2-text-1',
      type: 'text',
      title: 'Hjertets oppbygning',
      content: `**De fire kamrene:**

- **Høyre forkammer** mottar oksygenfattig blod fra kroppen via øvre og nedre hulvene
- **Høyre hjertekammer** pumper blodet til lungene via lungearterien
- **Venstre forkammer** mottar oksygenrikt blod fra lungene via lungevenene
- **Venstre hjertekammer** pumper blodet ut i kroppen via aorta (den store kroppspulsåren)

**Hjerteklaffene:**
Klaffene sikrer at blodet bare strømmer i én retning:
- Trikuspidalklaffeen (mellom høyre forkammer og hjertekammer)
- Pulmonalklaffeen (mellom høyre hjertekammer og lungearterien)
- Mitralklaffeen (mellom venstre forkammer og hjertekammer)
- Aortaklaffeen (mellom venstre hjertekammer og aorta)

**Hjerteveggen:**
- Endokard (indre lag)
- Myokard (hjertemuskelen – det tykkeste laget)
- Epikard/perikard (ytre hinne)
- Venstre hjertekammer har tykkere vegg enn høyre fordi det må pumpe blod gjennom hele kroppen`,
    },
    {
      id: 'tr-3-2-text-2',
      type: 'text',
      title: 'De to kretsløpene',
      content: `**Det lille kretsløpet (lungekretsløpet):**
1. Oksygenfattig blod fra høyre hjertekammer → lungearterien
2. Blodet passerer lungekapillærene → CO₂ avgis, O₂ tas opp
3. Oksygenrikt blod → lungevenene → venstre forkammer

**Det store kretsløpet (kroppskretsløpet):**
1. Oksygenrikt blod fra venstre hjertekammer → aorta
2. Blodet fordeles via arterier til kapillærer i hele kroppen
3. I kapillærene: O₂ og næring avgis til cellene, CO₂ og avfall tas opp
4. Oksygenfattig blod → vener → hulvenene → høyre forkammer

Ved hvile pumper hjertet ca. 5 liter blod per minutt (minuttvolum). Under maksimal anstrengelse kan dette øke til 20–40 liter per minutt hos godt trente utøvere.`,
    },
    {
      id: 'tr-3-2-def-blodkar',
      type: 'definition',
      title: 'Blodkar',
      content: 'Blodkarene er kroppens rørsystem for blodtransport. Arterier fører blod vekk fra hjertet (tykke, elastiske vegger for å tåle høyt trykk). Kapillærer er svært tynne blodkar der utveksling av stoffer skjer mellom blod og vev. Vener fører blod tilbake til hjertet (tynnere vegger, har klaffer for å hindre tilbakestrømning).',
    },
    {
      id: 'tr-3-2-text-3',
      type: 'text',
      title: 'Blodtrykk og puls',
      content: `**Blodtrykk:**

Blodtrykk er trykket blodet utøver på blodkarveggen. Det måles i mmHg (millimeter kvikksølv) og oppgis med to verdier:
- **Systolisk trykk** (overtrykk): Trykket når hjertet trekker seg sammen (normalt ca. 120 mmHg)
- **Diastolisk trykk** (undertrykk): Trykket når hjertet hviler mellom slag (normalt ca. 80 mmHg)
- Normalt blodtrykk: ca. 120/80 mmHg
- Høyt blodtrykk (hypertensjon): over 140/90 mmHg

**Puls:**

Puls er antall hjerteslag per minutt (slag/min).

- **Hvilepuls:** Normalt 60–80 slag/min hos voksne. Godt trente kan ha hvilepuls ned mot 35–50 slag/min.
- **Maksimal puls (HFmax):** Den høyeste pulsen du kan oppnå. Estimeres ofte med formelen: HFmax ≈ 220 – alder (grov tommelfingerregel).
- **Treningspuls:** Pulsen under trening, ofte angitt som prosent av maksimal puls.

**Minuttvolum:**
Minuttvolum = Slagvolum × Pulsfrekvens

- Slagvolum: Mengden blod hjertet pumper per slag (ca. 70 ml i hvile)
- Under trening øker både slagvolum og pulsfrekvens`,
    },
    {
      id: 'tr-3-2-text-4',
      type: 'text',
      title: 'Treningens effekt på hjerte-kar-systemet',
      content: `Regelmessig utholdenhetstrening gir betydelige tilpasninger i hjerte-kar-systemet:

**Hjertet:**
- Økt slagvolum (hjertet pumper mer blod per slag)
- Lavere hvilepuls (hjertet trenger færre slag for å pumpe nok blod)
- Økt hjertestørrelse (spesielt venstre hjertekammer)
- Sterkere hjertemuskel

**Blodkarene:**
- Økt kapillærtetthet i muskulaturen (flere småkar = bedre oksygentilførsel)
- Bedre elastisitet i arteriene
- Lavere blodtrykk i hvile
- Bedre blodgjennomstrømning

**Blodet:**
- Økt blodvolum (opptil 20–25 % mer blod)
- Flere røde blodceller og mer hemoglobin
- Bedre oksygentransportkapasitet

**Praktisk betydning:**
Et godt trent hjerte pumper mer blod per slag, slik at det trenger færre slag per minutt for å dekke kroppens behov. Derfor har utholdenhetsutøvere lav hvilepuls.`,
    },
    {
      id: 'tr-3-2-tip-1',
      type: 'tip',
      title: 'Mål din hvilepuls',
      content: 'Mål hvilepulsen din om morgenen før du står opp. Tell slag i 60 sekunder, eller i 15 sekunder og gang med 4. Gjør dette flere dager på rad for et pålitelig resultat. En synkende hvilepuls over tid kan tyde på bedre hjertekapasitet som følge av trening.',
    },
    {
      id: 'tr-3-2-example-1',
      type: 'example',
      title: 'Eksempel: Beregning av minuttvolum',
      problem: 'En utøver har slagvolum på 80 ml og puls på 70 slag/min i hvile. Under maksimal belastning er slagvolumet 140 ml og pulsen 190 slag/min. Beregn minuttvolumet i hvile og under maksimal belastning.',
      solution: `**Hvile:**
Minuttvolum = Slagvolum × Puls = 80 ml × 70 slag/min = 5600 ml/min = **5,6 liter/min**

**Maksimal belastning:**
Minuttvolum = 140 ml × 190 slag/min = 26 600 ml/min = **26,6 liter/min**

**Økning:** Minuttvolumet øker nesten fem ganger fra hvile til maksimal belastning. Dette viser hjertets enorme kapasitet til å tilpasse seg treningens krav.`,
    },
    {
      id: 'tr-3-2-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-3-2-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor mange kamre har hjertet?',
        options: [
          { id: 'a', text: 'Fire: to forkamre og to hjertekamre', isCorrect: true },
          { id: 'b', text: 'To: et forkammer og et hjertekammer', isCorrect: false },
          { id: 'c', text: 'Tre: to forkamre og ett hjertekammer', isCorrect: false },
          { id: 'd', text: 'Seks: tre forkamre og tre hjertekamre', isCorrect: false },
        ],
        solution: 'Hjertet har fire kamre: høyre og venstre forkammer (atrium) og høyre og venstre hjertekammer (ventrikkel). Høyre side håndterer oksygenfattig blod, venstre side håndterer oksygenrikt blod.',
      },
    },
    {
      id: 'tr-3-2-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-3-2-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er normalt blodtrykk for en frisk voksen person?',
        options: [
          { id: 'a', text: 'Ca. 120/80 mmHg', isCorrect: true },
          { id: 'b', text: 'Ca. 160/100 mmHg', isCorrect: false },
          { id: 'c', text: 'Ca. 90/50 mmHg', isCorrect: false },
          { id: 'd', text: 'Ca. 200/120 mmHg', isCorrect: false },
        ],
        solution: 'Normalt blodtrykk er ca. 120/80 mmHg. Den første verdien er systolisk trykk (når hjertet slår), den andre er diastolisk trykk (når hjertet hviler). Blodtrykk over 140/90 regnes som høyt blodtrykk.',
      },
    },
    {
      id: 'tr-3-2-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-3-2-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom det lille og det store kretsløpet.',
        solution: 'Det lille kretsløpet (lungekretsløpet) går fra høyre hjertekammer til lungene og tilbake til venstre forkammer. Her avgir blodet CO₂ og tar opp O₂. Det store kretsløpet (kroppskretsløpet) går fra venstre hjertekammer ut til hele kroppen og tilbake til høyre forkammer. Her leverer blodet O₂ og næring til cellene og tar opp CO₂ og avfallsstoffer.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-3-2-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-3-2-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En person har hvilepuls på 72 slag/min og slagvolum på 70 ml. Beregn minuttvolumet. Hva skjer med minuttvolumet under hard trening?',
        solution: 'Minuttvolum = Slagvolum × Puls = 70 ml × 72 slag/min = 5040 ml/min ≈ 5 liter/min. Under hard trening øker både slagvolumet (til 100–140 ml) og pulsen (opptil 180–200 slag/min). Minuttvolumet kan øke til 20–30 liter/min eller mer hos godt trente. Denne økningen er nødvendig for å levere nok oksygen og næringsstoffer til de arbeidende musklene.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-3-2-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-3-2-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv minst fire tilpasninger som skjer i hjerte-kar-systemet som følge av regelmessig utholdenhetstrening.',
        solution: 'Fire viktige tilpasninger ved regelmessig utholdenhetstrening: 1) Økt slagvolum – hjertet pumper mer blod per slag, spesielt venstre hjertekammer blir større og sterkere. 2) Lavere hvilepuls – fordi hjertet pumper mer per slag, trenger det færre slag per minutt for å dekke kroppens behov i hvile. 3) Økt kapillærtetthet – flere småkar i muskulaturen gir bedre oksygentilførsel og avfallstransport. 4) Økt blodvolum – kroppen produserer mer blod (opptil 20–25 % mer), inkludert flere røde blodceller og hemoglobin, noe som forbedrer oksygentransportkapasiteten.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-3-2-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-3-2-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft hvorfor utholdenhetsutøvere ofte har lavere hvilepuls enn utrente personer. Bruk begrepene slagvolum, minuttvolum og hjertetilpasninger i svaret ditt.',
        solution: 'Utholdenhetsutøvere har lavere hvilepuls fordi hjertet deres har gjennomgått viktige tilpasninger gjennom langvarig trening. Slagvolumet er betydelig økt – venstre hjertekammer har blitt større (eksentrisk hypertrofi) og pumper mer blod per slag (f.eks. 100–120 ml mot 70 ml hos utrente). Siden kroppens oksygenbehov i hvile er det samme uavhengig av treningsnivå (minuttvolumet i hvile er ca. 5 liter/min), og minuttvolum = slagvolum × puls, betyr økt slagvolum at hjertet trenger færre slag per minutt for å opprettholde samme minuttvolum. Dermed synker hvilepulsen. En utholdenhetsutøver med slagvolum på 100 ml trenger bare 50 slag/min for å pumpe 5 liter, mens en utrent med 70 ml slagvolum trenger ca. 71 slag/min. I tillegg bidrar bedre regulering av det autonome nervesystemet (økt parasympatisk tonus) til lavere hvilepuls.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 3.3: Respirasjon og gassutveksling
// ============================================================================

export const CHAPTER_TRENING_1_3_3: TextbookChapter = {
  id: 'trening-1-3-3',
  courseId: 'trening-1',
  chapterNumber: '3.3',
  title: 'Respirasjon og gassutveksling',
  description: 'Lær om lungenes oppbygning, gassutveksling, VO₂max, oksygenopptak og ventilasjon under trening.',
  estimatedMinutes: 22,
  competenceGoals: [
    'beskrive lungenes oppbygning og gassutvekslingens mekanismer',
    'forklare hva VO₂max er og hvorfor det er viktig for prestasjon',
    'gjøre rede for hvordan ventilasjon reguleres under trening',
    'forstå sammenhengen mellom respirasjon og energiproduksjon',
  ],
  content: [
    {
      id: 'tr-3-3-intro',
      type: 'text',
      content: `# Respirasjon og gassutveksling

Respirasjonssystemet sørger for å tilføre kroppen oksygen og fjerne karbondioksid. Under trening øker oksygenbehovet dramatisk, og respirasjonssystemets kapasitet blir en avgjørende faktor for prestasjonsevnen. I dette kapittelet ser vi på hvordan lungene fungerer, hva VO₂max betyr, og hvordan trening påvirker pusteevnen.`,
    },
    {
      id: 'tr-3-3-def-respirasjon',
      type: 'definition',
      title: 'Respirasjon',
      content: 'Respirasjon (åndedrett) er prosessen der kroppen tar opp oksygen fra luften og avgir karbondioksid. Ytre respirasjon er gassutveksling mellom luft og blod i lungene. Indre respirasjon (cellulær respirasjon) er gassutveksling mellom blod og celler, samt forbrenning av næringsstoffer i cellenes mitokondrier.',
    },
    {
      id: 'tr-3-3-text-1',
      type: 'text',
      title: 'Lungenes oppbygning',
      content: `**Luftveiene:**

Luften passerer gjennom følgende strukturer:
1. **Nese/munn** – luften varmes opp, fuktes og filtreres
2. **Svelg (farynks)** – felles vei for luft og mat
3. **Strupehodet (larynks)** – inneholder stemmebåndene
4. **Luftrøret (trakea)** – rørformet, forsterket med bruskhringer
5. **Bronkier** – luftrøret deler seg i to hovedbronkier, én til hver lunge
6. **Bronkioler** – stadig finere forgreininger
7. **Alveoler (lungeblærer)** – her skjer gassutvekslingen

**Alveolene:**
- Ca. 300 millioner alveoler i lungene
- Total overflate: ca. 70–100 m² (tilsvarer omtrent en tennisbane)
- Svært tynn vegg (0,2–0,5 mikrometer) for effektiv gassutveksling
- Omgitt av et tett nettverk av kapillærer
- Surfaktant holder alveolene åpne og hindrer at de klapper sammen`,
    },
    {
      id: 'tr-3-3-text-2',
      type: 'text',
      title: 'Gassutveksling og oksygentransport',
      content: `**Gassutveksling i alveolene:**

Gasser beveger seg ved diffusjon – fra høy til lav konsentrasjon:
- O₂ diffunderer fra alveolene (høy konsentrasjon) → blodet (lav konsentrasjon)
- CO₂ diffunderer fra blodet (høy konsentrasjon) → alveolene (lav konsentrasjon)

**Oksygentransport i blodet:**
- Ca. 98,5 % av oksygenet bundet til hemoglobin i røde blodceller
- Ca. 1,5 % løst direkte i blodplasmaet
- Hvert hemoglobinmolekyl kan binde fire O₂-molekyler
- I musklene overtar myoglobin oksygenet og lagrer det i muskelcellene

**Gassutveksling i vevet:**
- O₂ frigjøres fra hemoglobin og diffunderer inn i cellene
- CO₂ produsert i cellene diffunderer ut i blodet
- CO₂ transporteres tilbake til lungene (løst, som bikarbonat, eller bundet til hemoglobin)`,
    },
    {
      id: 'tr-3-3-def-vo2max',
      type: 'definition',
      title: 'VO₂max (Maksimalt oksygenopptak)',
      content: 'VO₂max er den maksimale mengden oksygen kroppen kan ta opp og bruke per minutt ved maksimal fysisk anstrengelse. Det måles i ml O₂/kg/min (milliliter oksygen per kilo kroppsvekt per minutt) eller i L/min (liter per minutt). VO₂max er den viktigste enkeltfaktoren for utholdenhetskapasitet og bestemmes av hjertets pumpeevne, lungenes kapasitet, blodets oksygenbærerevne og musklenes evne til å utnytte oksygen.',
    },
    {
      id: 'tr-3-3-text-3',
      type: 'text',
      title: 'VO₂max og prestasjon',
      content: `**Typiske VO₂max-verdier:**

| Gruppe | VO₂max (ml/kg/min) |
|---|---|
| Utrent mann | 35–45 |
| Utrent kvinne | 27–38 |
| Mosjonist | 45–55 |
| Godt trent utholdenhetsutøver | 60–75 |
| Verdenselite (menn) | 80–95 |
| Verdenselite (kvinner) | 65–80 |

**Faktorer som påvirker VO₂max:**
- **Genetikk:** Forklarer ca. 50 % av variasjonen mellom individer
- **Trening:** Kan forbedres med 15–30 % gjennom systematisk utholdenhetstrening
- **Alder:** Synker med ca. 10 % per tiår etter 30 år (kan bremses med trening)
- **Kjønn:** Menn har gjennomsnittlig 15–20 % høyere VO₂max enn kvinner (på grunn av mer hemoglobin, større hjerte og mer muskelmasse)
- **Høyde over havet:** Lavere lufttrykk gir lavere VO₂max

**Fick-prinsippet:**
VO₂max = Minuttvolum × Arteriovenøs oksygendifferanse
VO₂max = (Slagvolum × Puls) × (O₂ i arterieblod − O₂ i veneblod)`,
    },
    {
      id: 'tr-3-3-text-4',
      type: 'text',
      title: 'Ventilasjon under trening',
      content: `**Hva er ventilasjon?**

Ventilasjon (lungeventilasjon) er luftmengden som pustes inn og ut per minutt.

Ventilasjon = Tidalvolum × Pustefrekvens

- **Tidalvolum:** Luftmengde per pust (ca. 0,5 liter i hvile)
- **Pustefrekvens:** Antall pust per minutt (ca. 12–20 i hvile)
- **Ventilasjon i hvile:** ca. 6–10 liter/min
- **Ventilasjon under maksimalt arbeid:** opptil 150–200 liter/min hos godt trente

**Regulering av ventilasjon:**
- **Kjemoreseptorer** i hjernen og blodkarene registrerer endringer i CO₂, O₂ og pH
- Økt CO₂ er den viktigste stimulatoren for økt ventilasjon
- Under trening øker pustefrekvensen og tidalvolumet
- Ved veldig høy intensitet øker pustefrekvensen mest (tidalvolumet har en øvre grense)

**Ventilatorisk terskel:**
Ved en viss intensitet begynner ventilasjonen å øke uforholdsmessig mye. Dette skyldes økt CO₂-produksjon fra bufring av laktat og kalles ventilatorisk terskel. Denne terskelen korrelerer med laktatterskel og er et tegn på overgang fra hovedsakelig aerob til anaerob energiproduksjon.`,
    },
    {
      id: 'tr-3-3-note-1',
      type: 'note',
      title: 'Respirasjon er sjelden den begrensende faktoren',
      content: 'Hos friske personer er det vanligvis ikke lungene som begrenser prestasjonen, men hjertets pumpeevne og musklenes evne til å utnytte oksygen. Lungene har stor reservekapasitet og klarer normalt å mette blodet med oksygen selv ved maksimal anstrengelse. Unntaket kan være eliteutøvere med ekstremt høy VO₂max, der lungenes kapasitet kan bli begrensende.',
    },
    {
      id: 'tr-3-3-example-1',
      type: 'example',
      title: 'Eksempel: Beregning av ventilasjon',
      problem: 'En person puster 15 ganger per minutt med et tidalvolum på 0,5 liter i hvile. Under trening øker pustefrekvensen til 40 pust/min og tidalvolumet til 2,5 liter. Beregn ventilasjonen i hvile og under trening.',
      solution: `**I hvile:**
Ventilasjon = Tidalvolum × Pustefrekvens = 0,5 L × 15 = **7,5 liter/min**

**Under trening:**
Ventilasjon = 2,5 L × 40 = **100 liter/min**

**Økning:** Ventilasjonen øker ca. 13 ganger fra hvile til trening. Denne store økningen er nødvendig for å tilføre nok oksygen til de arbeidende musklene og fjerne CO₂ som produseres.`,
    },
    {
      id: 'tr-3-3-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-3-3-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvor skjer gassutvekslingen i lungene?',
        options: [
          { id: 'a', text: 'I alveolene (lungeblærene)', isCorrect: true },
          { id: 'b', text: 'I bronkiene', isCorrect: false },
          { id: 'c', text: 'I luftrøret', isCorrect: false },
          { id: 'd', text: 'I svelget', isCorrect: false },
        ],
        solution: 'Gassutvekslingen skjer i alveolene (lungeblærene). Her er veggen så tynn at oksygen kan diffundere fra luften over i blodet, og karbondioksid kan diffundere fra blodet ut i luften.',
      },
    },
    {
      id: 'tr-3-3-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-3-3-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva måler VO₂max?',
        options: [
          { id: 'a', text: 'Den maksimale mengden oksygen kroppen kan ta opp og bruke per minutt', isCorrect: true },
          { id: 'b', text: 'Hvor mye luft lungene kan romme totalt', isCorrect: false },
          { id: 'c', text: 'Antall røde blodceller i blodet', isCorrect: false },
          { id: 'd', text: 'Lungevolumet i hvile', isCorrect: false },
        ],
        solution: 'VO₂max er den maksimale mengden oksygen kroppen kan ta opp og bruke per minutt ved maksimal anstrengelse. Det er den viktigste enkeltfaktoren for utholdenhetskapasitet.',
      },
    },
    {
      id: 'tr-3-3-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-3-3-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar hvordan oksygen transporteres fra lungene til muskelcellene. Bruk begrepene alveoler, hemoglobin, kapillærer og myoglobin i svaret ditt.',
        solution: 'Oksygen fra innåndingsluften diffunderer gjennom alveolenes tynne vegg over i kapillærene som omgir lungeblærene. I blodet binder ca. 98,5 % av oksygenet seg til hemoglobin i de røde blodcellene. Blodet transporteres via hjertet og arterier ut til muskulaturen. I kapillærene rundt muskelcellene frigjøres oksygenet fra hemoglobin (fordi oksygenkonsentrasjonen er lavere i vevet) og diffunderer inn i muskelcellene. I muskelcellene overtar myoglobin oksygenet og transporterer det videre til mitokondriene, der det brukes i aerob forbrenning for å produsere ATP.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-3-3-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-3-3-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'En person puster 18 ganger per minutt med et tidalvolum på 0,5 liter i hvile. Under trening øker pustefrekvensen til 45 pust/min og tidalvolumet til 2,8 liter. Beregn ventilasjonen i hvile og under trening, og forklar hvorfor ventilasjonen øker.',
        solution: 'Hvile: Ventilasjon = 0,5 L × 18 = 9 liter/min. Under trening: Ventilasjon = 2,8 L × 45 = 126 liter/min. Økningen (ca. 14 ganger) skyldes at arbeidende muskler trenger mye mer oksygen og produserer mye mer CO₂ under trening. Kjemoreseptorer registrerer økt CO₂ og sendt pH i blodet, og sender signaler til pustesenteret i hjernestammen om å øke ventilasjonen. Både pustefrekvens og tidalvolum øker for å møte det økte behovet for gassutveksling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-3-3-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-3-3-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Gjør rede for hva VO₂max er, hvilke faktorer som påvirker VO₂max, og forklar hvorfor VO₂max er den viktigste enkeltfaktoren for utholdenhetsprestasjoner.',
        solution: 'VO₂max er den maksimale mengden oksygen kroppen kan ta opp og bruke per minutt, målt i ml/kg/min. Faktorer som påvirker VO₂max: 1) Genetikk (forklarer ca. 50 % av variasjonen), 2) Treningstilstand (kan forbedres 15–30 % med trening), 3) Alder (synker ca. 10 % per tiår etter 30), 4) Kjønn (menn har 15–20 % høyere pga. mer hemoglobin og større hjerte), 5) Høyde over havet. VO₂max er avgjørende for utholdenhet fordi: Det bestemmer hvor mye oksygen som er tilgjengelig for aerob forbrenning, som er det dominerende energisystemet ved langvarig aktivitet. Ifølge Fick-prinsippet er VO₂max = minuttvolum × arteriovenøs O₂-differanse, altså produktet av hjertets pumpeevne og musklenes evne til å utnytte oksygen. Høyere VO₂max betyr at utøveren kan opprettholde høyere intensitet aerobt uten å bli avhengig av anaerob energiproduksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-3-3-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-3-3-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hva ventilatorisk terskel er, og drøft sammenhengen mellom ventilatorisk terskel, laktatterskel og prestasjonsevne i utholdenhetsidrett.',
        solution: 'Ventilatorisk terskel er den treningsintensiteten der ventilasjonen begynner å øke uforholdsmessig mye i forhold til oksygenopptaket. Dette skjer fordi økt laktatproduksjon fører til bufring av melkesyre med bikarbonat, noe som produserer ekstra CO₂. Kjemoreseptorene reagerer på økt CO₂ med å stimulere økt ventilasjon. Ventilatorisk terskel korrelerer med laktatterskel – den intensiteten der laktatproduksjonen overstiger fjerningen. Begge markerer overgangen fra hovedsakelig aerob til betydelig anaerob energiproduksjon. For prestasjonsevne er disse tersklene viktige fordi de bestemmer hvilken intensitet utøveren kan opprettholde over tid. En utøver med høy laktat-/ventilatorisk terskel (f.eks. ved 85 % av VO₂max) kan holde høyere tempo enn en med lavere terskel (f.eks. ved 70 % av VO₂max). Terskeltrening er derfor svært effektiv for å forbedre utholdenhetsprestasjoner.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 3.4: Nervesystemet og motorikk
// ============================================================================

export const CHAPTER_TRENING_1_3_4: TextbookChapter = {
  id: 'trening-1-3-4',
  courseId: 'trening-1',
  chapterNumber: '3.4',
  title: 'Nervesystemet og motorikk',
  description: 'Forstå sentralnervesystemets rolle i bevegelse, motoriske enheter, reflekser og koordinasjon.',
  estimatedMinutes: 22,
  competenceGoals: [
    'beskrive sentralnervesystemets oppbygning og funksjon i bevegelsesstyring',
    'forklare hva motoriske enheter er og hvordan de rekrutteres',
    'gjøre rede for reflekser og deres betydning for bevegelse og beskyttelse',
    'forstå hva koordinasjon er og hvordan den utvikles gjennom trening',
  ],
  content: [
    {
      id: 'tr-3-4-intro',
      type: 'text',
      content: `# Nervesystemet og motorikk

Nervesystemet styrer alle kroppens bevegelser, fra enkle reflekser til komplekse idrettsbevegelser. For å forstå hvordan trening forbedrer prestasjon, er det viktig å kjenne til hvordan nervesystemet kontrollerer muskelaktivitet. Mye av den tidlige fremgangen i styrketrening skyldes nervøse tilpasninger, ikke muskelmasseøkning.`,
    },
    {
      id: 'tr-3-4-def-snervesystem',
      type: 'definition',
      title: 'Sentralnervesystemet (SNS)',
      content: 'Sentralnervesystemet består av hjernen og ryggmargen. Hjernen behandler sanseinntrykk, planlegger bevegelser og sender motoriske signaler. Ryggmargen fungerer som en informasjonshighway mellom hjernen og resten av kroppen, og er også senter for reflekser. SNS samarbeider med det perifere nervesystemet (nerver utenfor hjerne og ryggmarg) for å styre all muskelaktivitet.',
    },
    {
      id: 'tr-3-4-text-1',
      type: 'text',
      title: 'Nervesystemets oppbygning',
      content: `**Inndelingen av nervesystemet:**

**Sentralnervesystemet (SNS):**
- Hjernen (styring, planlegging, koordinering)
- Ryggmargen (ledningsvei og reflekssenter)

**Det perifere nervesystemet (PNS):**
- Somatiske nervesystem (viljestyrt – styrer skjelettmuskler)
- Autonome nervesystem (ubevisst – styrer indre organer)
  - Sympatisk del ("fight or flight" – aktivering)
  - Parasympatisk del ("rest and digest" – avslapning)

**Nervecellen (nevronet):**
- **Cellekroppen** – inneholder cellekjernen
- **Dendritter** – mottar signaler fra andre nevroner
- **Akson** – sender signaler videre (kan være opptil 1 meter langt)
- **Myelinskjede** – isolerende lag rundt aksonet som øker signalhastigheten
- **Synapse** – koblingspunktet mellom to nevroner (signal overføres med nevrotransmittere)

**Signaloverføring:**
Nervesignaler (aksjonspotensialer) er elektriske impulser som beveger seg langs aksonet med hastigheter opptil 120 m/s i myeliniserte fibre.`,
    },
    {
      id: 'tr-3-4-def-motorisk-enhet',
      type: 'definition',
      title: 'Motorisk enhet',
      content: 'En motorisk enhet består av én motornevrn (nervecelle) og alle muskelfibrene den innerverer (styrer). Når motornevronet sender et signal, kontraherer alle muskelfibrene i den motoriske enheten samtidig (alt-eller-ingenting-prinsippet). Små motoriske enheter (få fibre) gir presis kontroll, mens store motoriske enheter (mange fibre) gir stor kraft.',
    },
    {
      id: 'tr-3-4-text-2',
      type: 'text',
      title: 'Motoriske enheter og rekruttering',
      content: `**Typer motoriske enheter:**

| Type | Muskelfibertype | Egenskaper |
|---|---|---|
| Små (type I) | Langsomme oksidative fibre | Lav kraft, høy utholdenhet, rekrutteres først |
| Mellomstore (type IIa) | Raske oksidativ-glykolytiske | Moderat kraft og utholdenhet |
| Store (type IIx) | Raske glykolytiske fibre | Høy kraft, lav utholdenhet, rekrutteres sist |

**Størrelsesprinsippet (Hennemans prinsipp):**

Motoriske enheter rekrutteres i rekkefølge fra de minste til de største:
1. Ved lav belastning: Bare de små (type I) motoriske enhetene aktiveres
2. Ved moderat belastning: Type I + type IIa rekrutteres
3. Ved maksimal belastning: Alle typer rekrutteres, inkludert de store type IIx

**Kraftregulering skjer på to måter:**
- **Rekruttering** – flere motoriske enheter aktiveres
- **Fyringsfrekvens** – motoriske enheter fyrer raskere (tetanisk kontraksjon)

**Trening og nervøse tilpasninger:**
- Bedre rekruttering av motoriske enheter (aktivere flere enheter)
- Økt fyringsfrekvens
- Bedre synkronisering (motoriske enheter fyrer mer samtidig)
- Redusert hemming fra beskyttelsesmekanismer`,
    },
    {
      id: 'tr-3-4-text-3',
      type: 'text',
      title: 'Reflekser',
      content: `**Hva er en refleks?**

En refleks er en rask, automatisk og ubevisst reaksjon på en stimulus. Reflekser er viktige for beskyttelse og grunnleggende bevegelseskontroll.

**Refleksbuen:**
1. **Reseptor** – registrerer stimulus (f.eks. strekk i muskel)
2. **Sensorisk nevron** – sender signal til ryggmargen
3. **Integreringssenter** – ryggmargen (eller hjernestammen) behandler signalet
4. **Motorisk nevron** – sender signal til muskel
5. **Effektor** – muskel utfører respons (kontraksjon)

**Viktige reflekser for trening:**

**Strekkrefleksen (myotatisk refleks):**
- Muskelen kontraherer automatisk når den strekkes raskt
- Muskelspolen registrerer strekk og sender signal via ryggmargen
- Beskytter mot overstrekking
- Brukes i plyometrisk trening

**Golgi-seneorganets refleks (invers strekkerefleks):**
- Seneorganet registrerer høy spenning i senen
- Hemmer muskelkontraksjonen (avslapper muskelen)
- Beskytter mot for stor belastning på sener og ledd
- Kan hemmes delvis gjennom trening (løfte tyngre vekter)

**Reciprok hemming:**
- Når en muskel (agonist) aktiveres, hemmes motstandermuskelen (antagonist)
- Muliggjør effektiv bevegelse uten motstand
- Viktig i alle koordinerte bevegelser`,
    },
    {
      id: 'tr-3-4-text-4',
      type: 'text',
      title: 'Koordinasjon og motorisk læring',
      content: `**Hva er koordinasjon?**

Koordinasjon er evnen til å utføre bevegelser effektivt, presist og med riktig timing. God koordinasjon krever samspill mellom nervesystemet, sanser og muskler.

**Komponenter av koordinasjon:**
- **Balanse** – evnen til å opprettholde kroppens likevekt
- **Romoppfatning** – bevissthet om kroppens posisjon i rommet
- **Timing** – riktig tidspunkt for muskelaktiverng
- **Differensieringsevne** – tilpasse kraft og bevegelsesutslag
- **Reaksjonsevne** – raskt svare på stimuli
- **Rytmeevne** – tilpasse bevegelser til en rytme

**Stadier i motorisk læring:**

1. **Kognitivt stadium** – Bevegelsen krever mye bevisst oppmerksomhet. Mange feil. "Tenke seg gjennom bevegelsen."
2. **Assosiativt stadium** – Færre feil, bevegelsen blir mer flytende. Fokus skifter til å finpusse detaljer.
3. **Autonomt stadium** – Bevegelsen er automatisert og krever lite bevisst oppmerksomhet. Utøveren kan fokusere på taktikk og omgivelser.

**Praktisk betydning for trening:**
- Teknikktrening bør legges tidlig i økten (når nervesystemet er uthvilt)
- Variasjon i trening stimulerer motorisk læring
- Mengdetrening (repetisjoner) er avgjørende for automatisering
- Det tar ca. 10 000 repetisjoner å automatisere en kompleks bevegelse`,
    },
    {
      id: 'tr-3-4-note-1',
      type: 'note',
      title: 'Styrkeøkning uten muskelmasseøkning',
      content: 'De første 6–8 ukene med styrketrening skyldes styrkeøkningen hovedsakelig nervøse tilpasninger, ikke økt muskelmasse. Kroppen lærer å rekruttere flere motoriske enheter, øke fyringsfrekvensen og synkronisere bedre. Derfor kan nybegynnere oppleve rask fremgang i styrke uten synlig muskelmasseøkning.',
    },
    {
      id: 'tr-3-4-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-3-4-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva består sentralnervesystemet av?',
        options: [
          { id: 'a', text: 'Hjernen og ryggmargen', isCorrect: true },
          { id: 'b', text: 'Alle nerver i kroppen', isCorrect: false },
          { id: 'c', text: 'Hjertet og lungene', isCorrect: false },
          { id: 'd', text: 'Musklene og skjelettet', isCorrect: false },
        ],
        solution: 'Sentralnervesystemet (SNS) består av hjernen og ryggmargen. Hjernen styrer, planlegger og koordinerer bevegelser, mens ryggmargen fungerer som ledningsvei og reflekssenter.',
      },
    },
    {
      id: 'tr-3-4-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-3-4-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er en motorisk enhet?',
        options: [
          { id: 'a', text: 'Én motornevrn og alle muskelfibrene den styrer', isCorrect: true },
          { id: 'b', text: 'En hel muskelgruppe som arbeider sammen', isCorrect: false },
          { id: 'c', text: 'En spesiell type muskelfiber', isCorrect: false },
          { id: 'd', text: 'Nervesystemets sentralenhet i hjernen', isCorrect: false },
        ],
        solution: 'En motorisk enhet består av én motornevrn (nervecelle) og alle muskelfibrene den innerverer. Når nevronet sender et signal, kontraherer alle fibrene i den motoriske enheten samtidig.',
      },
    },
    {
      id: 'tr-3-4-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-3-4-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar størrelsesprinsippet (Hennemans prinsipp) for rekruttering av motoriske enheter, og gi et praktisk eksempel.',
        solution: 'Størrelsesprinsippet sier at motoriske enheter rekrutteres i rekkefølge fra de minste til de største. Ved lav belastning aktiveres bare de små motoriske enhetene med langsomme (type I) muskelfibre. Når belastningen øker, rekrutteres stadig større motoriske enheter med raske fibre (type IIa og IIx). Praktisk eksempel: Når du løfter en liten kopp kaffe, bruker du bare de små motoriske enhetene. Når du løfter en tung vekt i knebøy, rekrutteres gradvis alle motoriske enheter – fra de minste type I til de største type IIx – for å generere nok kraft.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-3-4-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-3-4-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv de tre stadiene i motorisk læring og gi eksempler fra en idrett du kjenner til.',
        solution: 'De tre stadiene i motorisk læring: 1) Kognitivt stadium: Utøveren må tenke aktivt gjennom bevegelsen. Mange feil forekommer. Eksempel: En nybegynner i basketball som prøver å lære trippeltrusselen – må aktivt tenke på hvordan føttene skal stå, hvordan ballen holdes, og hvor å se. 2) Assosiativt stadium: Bevegelsen blir mer flytende og feil reduseres. Utøveren jobber med å finpusse detaljer. Eksempel: Basketballspilleren kan utføre trippeltrusselen ganske bra, men jobber med timing og lesing av forsvarsspilleren. 3) Autonomt stadium: Bevegelsen er automatisert og krever minimal bevisst oppmerksomhet. Eksempel: En erfaren spiller utfører trippeltrusselen automatisk og kan fokusere på å lese spillet, finne åpne medspillere og velge riktig handling.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-3-4-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-3-4-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar strekkrefleksen og Golgi-seneorganets refleks. Drøft hvordan disse refleksene påvirker styrketrening og plyometrisk trening.',
        solution: 'Strekkrefleksen: Når en muskel strekkes raskt, registrerer muskelspolen dette og sender signal via sensorisk nevron til ryggmargen, som automatisk sender signal tilbake via motorisk nevron for å kontraherer muskelen. Denne refleksen beskytter mot overstrekking. I plyometrisk trening utnyttes strekkrefleksen: En rask eksentrisk strekk (f.eks. nedhopp) aktiverer strekkrefleksen som bidrar til en kraftigere konsentrisk kontraksjon (opphopp). Golgi-seneorganets refleks: Seneorganet registrerer høy spenning i senen og sender hemmende signaler som reduserer muskelkontraksjonen. Dette beskytter mot skader. I styrketrening kan denne refleksen begrense maksimal kraftutvikling. Gjennom trening kan hemningen reduseres, slik at utøveren kan utnytte en større andel av muskelens kraftpotensial. Praktisk: Plyometrisk trening trener nervesystemet til å utnytte strekkrefleksen effektivt og tolerere hurtige strekkbelastninger. Tung styrketrening trener nervesystemet til å "overstyre" Golgi-seneorganets beskyttelsesmekanisme, noe som muliggjør større kraftproduksjon.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-3-4-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-3-4-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar hvorfor en nybegynner i styrketrening kan bli betydelig sterkere de første ukene uten at muskelmassen øker nevneverdig. Bruk kunnskap om nervøse tilpasninger, motoriske enheter og rekruttering i svaret.',
        solution: 'Styrkeøkningen de første 6–8 ukene skyldes hovedsakelig nervøse tilpasninger: 1) Bedre rekruttering: Nervesystemet lærer å aktivere flere motoriske enheter i den aktuelle muskelen, slik at mer av muskelens potensial utnyttes. 2) Økt fyringsfrekvens: Motornevronene sender signaler raskere, som gir kraftigere muskelkontraksjoner (mot tetanisk kontraksjon). 3) Bedre synkronisering: Motoriske enheter lærer å fyre mer samtidig, noe som gir høyere toppkraft. 4) Redusert antagonisthemming: Nervesystemet lærer å redusere aktiveringen av motstandermuskulaturen, slik at agonisten kan arbeide mer effektivt. 5) Redusert Golgi-seneorganets hemming: Nervesystemet "tillater" større kraft ved å redusere den beskyttende hemningen. Disse tilpasningene skjer i nervesystemet og krever ikke tid for muskeloppbygging. Hypertrofi (muskelmasseøkning) krever typisk 8–12 uker med systematisk trening før det blir tydelig.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Kapittel 3.5: Hormoner og trening
// ============================================================================

export const CHAPTER_TRENING_1_3_5: TextbookChapter = {
  id: 'trening-1-3-5',
  courseId: 'trening-1',
  chapterNumber: '3.5',
  title: 'Hormoner og trening',
  description: 'Forstå hvordan hormoner som testosteron, veksthormoner, kortisol, adrenalin og insulin påvirker trening, restitusjon og tilpasning.',
  estimatedMinutes: 23,
  competenceGoals: [
    'forklare hva hormoner er og hvordan de påvirker kroppen under og etter trening',
    'beskrive testosteronets og veksthormonets rolle for muskelvekst og restitusjon',
    'gjøre rede for kortisolens funksjon og sammenhengen mellom stress og overtrenning',
    'forstå adrenalins og insulins betydning for prestasjon og energitilgang',
  ],
  content: [
    {
      id: 'tr-3-5-intro',
      type: 'text',
      content: `# Hormoner og trening

Hormoner er kjemiske budbringere som regulerer en rekke prosesser i kroppen, fra muskelvekst og fettforbrenning til energimobilisering og restitusjon. Trening har stor innvirkning på hormonnivåene, og hormoner spiller en avgjørende rolle for kroppens tilpasning til trening. I dette kapittelet ser vi på de viktigste hormonene for trening og fysisk prestasjon.`,
    },
    {
      id: 'tr-3-5-def-hormon',
      type: 'definition',
      title: 'Hormon',
      content: 'Et hormon er et kjemisk signalstoff som produseres i endokrine kjertler (f.eks. binyrene, hypofysen, testiklene/eggstokkene, bukspyttkjertelen) og transporteres med blodet til målorganer. Hormoner virker ved å binde seg til spesifikke reseptorer på eller i målcellene, og regulerer prosesser som vekst, stoffskifte, reproduksjon og stressrespons.',
    },
    {
      id: 'tr-3-5-text-1',
      type: 'text',
      title: 'Testosteron',
      content: `**Hva er testosteron?**

Testosteron er et androgent (mannlig kjønns-) hormon som produseres hovedsakelig i testiklene hos menn og i mindre mengder i eggstokkene og binyrene hos kvinner.

**Effekter på trening og muskelvekst:**
- Stimulerer proteinsyntese (muskeloppbygging)
- Øker muskelmasse og styrke
- Fremmer dannelse av røde blodceller
- Bidrar til raskere restitusjon
- Øker benmineraltetthet

**Testosteron og trening:**
- Tung styrketrening (80–95 % av 1RM) gir den største akutte økningen i testosteron
- Store muskelgrupper og flerleddsøvelser gir størst hormonrespons
- Korte pauser (30–90 sek) mellom sett kan øke testosteronutskillelsen
- Kronisk overtrenning kan senke testosteronnivået

**Kjønnsforskjeller:**
- Menn har 10–20 ganger høyere testosteronnivå enn kvinner
- Dette forklarer mye av forskjellen i muskelmasse og styrke mellom kjønn
- Kvinner responderer likevel godt på styrketrening gjennom andre mekanismer (veksthormon, IGF-1)`,
    },
    {
      id: 'tr-3-5-text-2',
      type: 'text',
      title: 'Veksthormoner (GH og IGF-1)',
      content: `**Veksthormon (GH – Growth Hormone):**

Veksthormon produseres i hypofysen (den fremre lappen) og har brede effekter på kroppen:

**Viktige funksjoner:**
- Stimulerer muskelvekst og vevsreparasjon
- Øker fettforbrenningen (lipolyse)
- Fremmer benvekst og benmineralisering
- Styrker immunforsvaret
- Stimulerer produksjonen av IGF-1 i leveren

**GH og trening:**
- Høyintensiv trening med kort pausetid gir størst GH-utskillelse
- Intervalltrening og tungstyrketrening stimulerer GH-produksjonen
- Melkesyreakkumulering er en sterk stimulus for GH-frigjøring
- Søvn er viktig – den største GH-utskillelsen skjer under dyp søvn

**IGF-1 (Insulin-like Growth Factor 1):**
- Produseres hovedsakelig i leveren som respons på GH
- Produseres også lokalt i muskelvev
- Fremmer muskelcellevekst og -reparasjon
- Stimulerer satelittcelleaktivering (stamceller i muskelvev)
- Viktig for langsiktig muskeltilpasning til trening`,
    },
    {
      id: 'tr-3-5-def-kortisol',
      type: 'definition',
      title: 'Kortisol',
      content: 'Kortisol er et stresshormon som produseres i binyrebarken. Det frigjøres som respons på fysisk og psykisk stress, og har katabole (nedbrytende) effekter: det bryter ned muskelvev for å frigjøre aminosyrer til energi, øker blodsukkeret, hemmer immunforsvaret og reduserer betennelse. Kortisol er nødvendig i normale mengder, men kronisk forhøyet kortisol (f.eks. ved overtrenning) hemmer muskelvekst og restitusjon.',
    },
    {
      id: 'tr-3-5-text-3',
      type: 'text',
      title: 'Kortisol – stresshormonet',
      content: `**Kortisolens rolle under trening:**

- Frigjøres ved fysisk belastning, spesielt langvarig og intensiv trening
- Mobiliserer energi ved å bryte ned glykogen, fett og proteiner
- Øker blodsukkernivået for å sikre energitilgang til hjernen og musklene
- Reduserer betennelsesreaksjoner

**Akutt vs. kronisk kortisolpåvirkning:**

**Akutt (under og rett etter trening):**
- Normal og nødvendig del av treningsresponsen
- Hjelper med å mobilisere energi
- Bidrar til tilpasningsprosessen

**Kronisk forhøyet (ved overtrenning eller mye stress):**
- Bryter ned muskelvev (katabolsk effekt)
- Hemmer immunforsvaret → økt infeksjonsrisiko
- Forstyrrer søvnkvaliteten
- Kan føre til økt fettlagring (spesielt rundt magen)
- Reduserer testosteronproduksjonen

**Testosteron/kortisol-forholdet:**
Forholdet mellom testosteron (anabolt) og kortisol (katabolt) brukes som indikator på treningsbalansen. Et synkende T/C-forhold kan tyde på overtrenning eller utilstrekkelig restitusjon.`,
    },
    {
      id: 'tr-3-5-text-4',
      type: 'text',
      title: 'Adrenalin og noradrenalin',
      content: `**Katekolaminer:**

Adrenalin og noradrenalin er stresshormoner (katekolaminer) som produseres i binyremargen. De aktiverer kroppens "fight or flight"-respons.

**Effekter under trening:**
- Øker hjertefrekvens og slagvolum (mer blod til musklene)
- Utvider luftveiene (bronkodilatasjon) for bedre ventilasjon
- Øker blodsukker (glykogennedbrytning i lever)
- Fremmer fettforbrenning (lipolyse)
- Omfordeler blodstrøm fra fordøyelsesorganer til muskler
- Øker muskelkraft og reaksjonsevne
- Skjerper mental fokus og oppmerksomhet

**Når frigjøres adrenalin?**
- Ved fysisk aktivitet (jo høyere intensitet, jo mer adrenalin)
- Ved psykisk stress og spenning (f.eks. før konkurranse)
- Ved fare og truende situasjoner
- Virkningen er rask og kortvarig (sekunder til minutter)

**Praktisk betydning:**
Adrenalinrushet før konkurranse kan forbedre prestasjon ved å øke beredskap og energimobilisering. For mye adrenalin kan imidlertid føre til nervøsitet og nedsatt finmotorikk.`,
    },
    {
      id: 'tr-3-5-text-5',
      type: 'text',
      title: 'Insulin og glukagon',
      content: `**Insulin:**

Insulin produseres i betacellene i bukspyttkjertelen (Langerhanske øyer) og er kroppens viktigste anabole hormon for energilagring.

**Insulinets funksjoner:**
- Senker blodsukkeret ved å stimulere opptak av glukose i muskel- og fettceller
- Fremmer glykogensyntese (lagring av glukose i muskler og lever)
- Stimulerer proteinsyntese og hemmer proteinnedbryting
- Fremmer fettlagring og hemmer fettforbrenning
- Er viktig for muskelrestitusjon etter trening

**Insulin og trening:**
- Under trening synker insulinnivået (musklene tar opp glukose uten insulin ved hjelp av GLUT4-transportører)
- Etter trening øker insulinfølsomheten (musklene tar opp glukose mer effektivt)
- Regelmessig trening forbedrer insulinfølsomheten langvarig (forebygger diabetes type 2)

**Glukagon:**
- Produseres i alfacellene i bukspyttkjertelen
- Virker motsatt av insulin: øker blodsukkeret
- Stimulerer nedbrytning av glykogen i leveren
- Frigjøres ved lavt blodsukker og under langvarig trening
- Samarbeider med adrenalin for å opprettholde blodsukkeret under trening

**Posttrening-ernæring:**
Etter trening er det gunstig å innta karbohydrater og protein. Karbohydratene stimulerer insulinfrigjøring, som igjen fremmer muskeloppbygging (proteinsyntese) og gjenoppfylling av glykogenlagrene.`,
    },
    {
      id: 'tr-3-5-warning-1',
      type: 'warning',
      title: 'Doping og hormoner',
      content: 'Bruk av syntetiske hormoner (anabole steroider, veksthormon, EPO) for å forbedre prestasjon er forbudt i idrett og ulovlig uten medisinsk indikasjon. Bivirkninger inkluderer leverskade, hjerte-kar-sykdom, hormonelle forstyrrelser, psykiske problemer og avhengighet. Kroppen reduserer egen hormonproduksjon ved tilførsel utenfra, noe som kan gi langvarige helseskader.',
    },
    {
      id: 'tr-3-5-tip-1',
      type: 'tip',
      title: 'Naturlig hormonoptimalisering',
      content: 'Du kan optimalisere hormonproduksjonen naturlig gjennom: tilstrekkelig søvn (7–9 timer – viktig for GH og testosteron), balansert ernæring med nok protein og sunt fett, tung styrketrening med store muskelgrupper, tilstrekkelig restitusjon mellom harde økter, og stressmestring i hverdagen (for å unngå kronisk forhøyet kortisol).',
    },
    {
      id: 'tr-3-5-example-1',
      type: 'example',
      title: 'Eksempel: Hormonrespons etter styrketrening',
      problem: 'En utøver gjennomfører en tung styrkeøkt med knebøy, markløft og benkpress (5 sett × 5 repetisjoner med 85 % av 1RM, 2 min pause). Beskriv den forventede hormonresponsen.',
      solution: `**Forventet hormonrespons:**

**Under treningen:**
- Adrenalin og noradrenalin øker kraftig → økt hjertefrekvens, mobilisering av energi
- Insulin synker → glukose frigjøres fra glykogenlagre
- Kortisol stiger → mobilisering av energi og aminosyrer

**Rett etter treningen (0–30 min):**
- Testosteron øker (akutt) → stimulerer proteinsyntese
- Veksthormon (GH) øker markant → fremmer fettforbrenning og vevsreparasjon
- Kortisol er fortsatt forhøyet → energimobilisering pågår

**1–24 timer etter trening:**
- Testosteron normaliseres, men proteinsyntesen er forhøyet
- GH utskilles i pulser, spesielt under søvn
- IGF-1 øker → langsiktig muskelreparasjon og vekst
- Kortisol synker tilbake til normalt nivå med god restitusjon

**Konklusjon:** Den anabole hormonresponsen (testosteron, GH, IGF-1) stimulerer muskelvekst og restitusjon, mens den katabole responsen (kortisol) er midlertidig og nødvendig for energimobilisering.`,
    },
    {
      id: 'tr-3-5-ex-1',
      type: 'exercise',
      exercise: {
        id: 'tr-3-5-ex-1',
        number: '1',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hvilken hovedfunksjon har testosteron i forbindelse med trening?',
        options: [
          { id: 'a', text: 'Stimulerer proteinsyntese og muskelvekst', isCorrect: true },
          { id: 'b', text: 'Bryter ned muskelvev', isCorrect: false },
          { id: 'c', text: 'Senker blodsukkeret', isCorrect: false },
          { id: 'd', text: 'Reduserer hjertefrekvensen', isCorrect: false },
        ],
        solution: 'Testosteron er et anabolt hormon som stimulerer proteinsyntese (muskeloppbygging), øker muskelmasse og styrke, fremmer dannelse av røde blodceller og bidrar til raskere restitusjon etter trening.',
      },
    },
    {
      id: 'tr-3-5-ex-2',
      type: 'exercise',
      exercise: {
        id: 'tr-3-5-ex-2',
        number: '2',
        type: 'multiple-choice',
        difficulty: 'lett',
        task: 'Hva er kortisol?',
        options: [
          { id: 'a', text: 'Et stresshormon fra binyrebarken med katabole (nedbrytende) effekter', isCorrect: true },
          { id: 'b', text: 'Et muskeloppbyggende hormon fra hypofysen', isCorrect: false },
          { id: 'c', text: 'Et blodsukkersenkende hormon fra bukspyttkjertelen', isCorrect: false },
          { id: 'd', text: 'Et hormon som kun produseres under søvn', isCorrect: false },
        ],
        solution: 'Kortisol er et stresshormon som produseres i binyrebarken. Det har katabole effekter som nedbryting av muskelvev, økt blodsukker og hemming av immunforsvaret. Kronisk forhøyet kortisol kan hemme muskelvekst og restitusjon.',
      },
    },
    {
      id: 'tr-3-5-ex-3',
      type: 'exercise',
      exercise: {
        id: 'tr-3-5-ex-3',
        number: '3',
        type: 'classic',
        difficulty: 'medium',
        task: 'Forklar forskjellen mellom anabole og katabole hormoner, og gi minst to eksempler på hver type.',
        solution: 'Anabole hormoner fremmer oppbygging av kroppsvev, spesielt muskler. Eksempler: 1) Testosteron – stimulerer proteinsyntese og muskelvekst. 2) Veksthormon (GH) – fremmer muskelvekst, fettforbrenning og vevsreparasjon. 3) Insulin – fremmer opptak av næringsstoffer og proteinsyntese. Katabole hormoner bryter ned kroppsvev for å frigjøre energi. Eksempler: 1) Kortisol – bryter ned muskelvev og glykogen for å frigjøre energi. 2) Glukagon – stimulerer nedbrytning av glykogen i leveren for å øke blodsukkeret. 3) Adrenalin – mobiliserer energireserver ved å bryte ned glykogen og fett. For optimal muskelvekst bør trening og restitusjon balanseres slik at anabole prosesser dominerer over katabole.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-3-5-ex-4',
      type: 'exercise',
      exercise: {
        id: 'tr-3-5-ex-4',
        number: '4',
        type: 'classic',
        difficulty: 'medium',
        task: 'Beskriv adrenalins effekter på kroppen under trening. Hvorfor kalles dette "fight or flight"-responsen?',
        solution: 'Adrenalin (og noradrenalin) frigjøres fra binyremargen og aktiverer en rekke fysiologiske responser: økt hjertefrekvens og slagvolum (mer blod til musklene), utvidelse av luftveiene (bedre pusting), økt blodsukker (energi tilgjengelig), økt fettforbrenning, omfordeling av blod fra fordøyelsesorganer til muskler, og økt mental skarphet. Det kalles "fight or flight"-responsen fordi det er den evolusjonære mekanismen som forbereder kroppen på enten å kjempe eller flykte fra fare. De samme fysiologiske endringene som hjalp forfedrene våre med å overleve trusler, hjelper i dag utøvere med å prestere bedre under trening og konkurranse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-3-5-ex-5',
      type: 'exercise',
      exercise: {
        id: 'tr-3-5-ex-5',
        number: '5',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Drøft sammenhengen mellom testosteron/kortisol-forholdet og overtrenning. Hvordan kan en trener bruke kunnskap om dette forholdet i praksis?',
        solution: 'Testosteron/kortisol-forholdet (T/C-forholdet) er en indikator på balansen mellom anabole (oppbyggende) og katabole (nedbrytende) prosesser. Et normalt eller høyt T/C-forhold tyder på at kroppen er i en anabol tilstand som fremmer muskelvekst og restitusjon. Et synkende T/C-forhold kan indikere overtrenning: testosteronnivået synker (pga. kronisk belastning) mens kortisolnivået forblir forhøyet (pga. vedvarende stress). Dette fører til redusert muskelvekst, dårligere restitusjon, nedsatt immunforsvar og fallende prestasjon. I praksis kan en trener: 1) Overvåke utøvernes velvære, søvnkvalitet og prestasjonsutvikling som indirekte mål på hormonbalanse. 2) Sikre tilstrekkelig restitusjon mellom harde økter. 3) Periodisere treningen med variasjon i intensitet og volum. 4) Redusere treningsbelastning ved tegn på overtrenning (vedvarende tretthet, nedsatt prestasjon, sykdom). 5) Legge til rette for god søvn, ernæring og stressmestring som støtter optimal hormonbalanse.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-3-5-ex-6',
      type: 'exercise',
      exercise: {
        id: 'tr-3-5-ex-6',
        number: '6',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Forklar insulinets rolle under og etter trening, og drøft hvorfor det er viktig å innta karbohydrater og protein etter en hard treningsøkt.',
        solution: 'Under trening synker insulinnivået fordi musklene kan ta opp glukose uavhengig av insulin (via GLUT4-transportører som aktiveres av muskelkontraksjon). Lavt insulin tillater også frigjøring av fett fra fettlagrene som energikilde. Etter trening er insulinfølsomheten økt, noe som betyr at musklene tar opp glukose mer effektivt. Inntak av karbohydrater etter trening stimulerer insulinfrigjøring, som har flere gunstige effekter: 1) Rask gjenoppfylling av glykogenlagre i musklene (viktig for neste treningsøkt). 2) Insulin stimulerer proteinsyntese og hemmer proteinnedbrytning, noe som fremmer muskelreparasjon og -vekst. 3) Insulin fremmer opptak av aminosyrer i muskelcellene. Kombinasjonen av karbohydrater og protein etter trening er optimal fordi: karbohydratene gir insulinrespons og glykogengjenoppfylling, mens proteinet gir aminosyrer som byggesteiner for muskelreparasjon. Tidspunktet er viktig – de første 30–60 minuttene etter trening er det et "vindu" med økt insulinfølsomhet og proteinsyntese.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
    {
      id: 'tr-3-5-ex-7',
      type: 'exercise',
      exercise: {
        id: 'tr-3-5-ex-7',
        number: '7',
        type: 'classic',
        difficulty: 'vanskelig',
        task: 'Du skal gi råd til en utøver som ønsker å optimalisere hormonnivåene sine for best mulig treningseffekt – uten bruk av doping. Lag en plan med konkrete tiltak innen trening, ernæring, søvn og stressmestring, og begrunn hvert tiltak med kunnskap om hormoner.',
        solution: 'Plan for naturlig hormonoptimalisering: TRENING: 1) Tung styrketrening med flerleddsøvelser (knebøy, markløft, benkpress) 2–3 ganger per uke for å stimulere testosteron- og GH-utskillelse. 2) Intensiv intervaltrening 1–2 ganger per uke for å øke GH-frigjøring (melkesyreakkumulering er sterk stimulus). 3) Unngå for høyt treningsvolum – mer enn 60–90 min hard trening per økt kan gi uforholdsmessig høy kortisolrespons. 4) God periodisering med lettere uker for å unngå kronisk forhøyet kortisol. ERNÆRING: 1) Tilstrekkelig proteininntak (1,6–2,2 g/kg/dag) for å støtte proteinsyntese stimulert av testosteron og GH. 2) Nok karbohydrater for å opprettholde glykogenlagre og unngå kronisk lav energi (som senker testosteron). 3) Sunt fett (25–35 % av kalorier) – fett er nødvendig for testosteronproduksjon. 4) Posttrening-måltid med karbohydrater og protein innen 30–60 min for å utnytte insulinvinduet. SØVN: 1) 7–9 timer per natt – største GH-utskillelse skjer under dyp søvn. 2) Fast leggerutine – testosteronproduksjon er høyest om natten. 3) Unngå skjermbruk sent for bedre søvnkvalitet. STRESSMESTRING: 1) Mindfulness eller avspenning for å senke kronisk kortisolnivå. 2) Sosial støtte og positivt treningsmiljø. 3) Balanse mellom trening og andre belastninger i livet.',
        allowsUpload: true,
        allowsCanvasDrawing: true,
      },
    },
  ],
  exercises: [],
  keyTerms: [],
};

// ============================================================================
// Eksport av alle kapitler
// ============================================================================

export const TRENING_1_DEL3_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_1_3_1,
  CHAPTER_TRENING_1_3_2,
  CHAPTER_TRENING_1_3_3,
  CHAPTER_TRENING_1_3_4,
  CHAPTER_TRENING_1_3_5,
];
