/* eslint-disable */
// @ts-nocheck

/**
 * Tekstbok innhold for Treningslære 1 (VG2) - Del 1: Grunnleggende treningslære
 *
 * Utvider Seksjon 1 til 5 delkapitler (1.1-1.5).
 * Dekker LK20-kompetansemål for treningslære 1 (IDR03-02)
 */

import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// Kapittel 1.1: Hva er treningslære?
// ============================================================================

export const CHAPTER_TRENING_1_1_1: TextbookChapter = {
  id: 'trening-1-1-1',
  courseId: 'trening-1',
  chapterNumber: '1.1',
  title: 'Hva er treningslære?',
  description: 'Definisjon av treningslære, forskjellen mellom fysisk aktivitet og trening, og de viktigste helsegevinstene ved regelmessig trening.',
  estimatedMinutes: 20,
  competenceGoals: [
    'definere treningslære som fagfelt',
    'skille mellom fysisk aktivitet og trening',
    'gjøre rede for helsegevinster ved regelmessig trening',
  ],
  content: [
    {
      id: 'tr-1-1-intro',
      type: 'text',
      content: `# Hva er treningslære?

Treningslære er det fagfeltet som studerer hvordan planlagt fysisk belastning påvirker kroppen, og hvordan vi systematisk kan forbedre fysisk form og helse. Faget bygger på kunnskap fra fysiologi, anatomi, biomekanikk og idrettspsykologi.

I dette kapittelet skal du lære:

- Hva treningslære handler om som fagfelt
- Forskjellen mellom fysisk aktivitet og trening
- Hvilke helsegevinster regelmessig trening gir`,
    },
    {
      id: 'tr-1-1-def-treningslare',
      type: 'definition',
      title: 'Treningslære',
      content: 'Treningslære er læren om hvordan planlagt, systematisk fysisk belastning påvirker kroppens strukturer og funksjoner, og hvordan trening kan tilrettelegges for å oppnå bestemte mål knyttet til prestasjon, helse eller rehabilitering.',
    },
    {
      id: 'tr-1-1-text-fagfelt',
      type: 'text',
      title: 'Treningslære som fagfelt',
      content: `Treningslære er et tverrfaglig felt som henter kunnskap fra flere vitenskapelige disipliner:

**Treningsfysiologi** undersøker hvordan kroppen responderer på akutt belastning (her og nå) og hvordan den tilpasser seg ved gjentatt trening over tid (kroniske adaptasjoner).

**Biomekanikk** analyserer bevegelsesmønstre, krefter og leddvinkler for å optimalisere teknikk og forebygge skader.

**Idrettsernæring** ser på hvordan kosthold og væskeinntak påvirker treningskapasitet, restitusjon og kroppsammensetning.

**Idrettspsykologi** studerer motivasjon, mental trening, prestasjon under press og hvordan psykologiske faktorer påvirker treningsatferd.

Til sammen gir disse fagfeltene et helhetlig grunnlag for å forstå og planlegge effektiv trening.`,
    },
    {
      id: 'tr-1-1-def-fysisk-aktivitet',
      type: 'definition',
      title: 'Fysisk aktivitet',
      content: 'Fysisk aktivitet er enhver kroppslig bevegelse produsert av skjelettmuskulatur som resulterer i energiforbruk utover hvilenivå. Dette inkluderer alt fra husarbeid og gåing til organisert trening og idrett.',
    },
    {
      id: 'tr-1-1-def-trening',
      type: 'definition',
      title: 'Trening',
      content: 'Trening er en planlagt, strukturert og gjentatt form for fysisk aktivitet der målet er å forbedre eller vedlikeholde en eller flere komponenter av fysisk form, som styrke, utholdenhet, bevegelighet, hurtighet eller koordinasjon.',
    },
    {
      id: 'tr-1-1-text-forskjell',
      type: 'text',
      title: 'Fysisk aktivitet vs. trening',
      content: `Det er viktig å skille mellom fysisk aktivitet og trening, selv om begge bidrar til god helse:

**Fysisk aktivitet** er det overordnede begrepet og omfatter all bevegelse som øker energiforbruket. Å gå til skolen, rake løv i hagen eller leke i friminuttet er eksempler på fysisk aktivitet.

**Trening** er en delmengde av fysisk aktivitet som kjennetegnes av at den er:
- **Planlagt** - du har bestemt på forhånd hva du skal gjøre
- **Strukturert** - innholdet er organisert etter et program eller en metode
- **Målrettet** - du har et klart formål med aktiviteten
- **Gjentatt** - du utfører den regelmessig over tid

| Kjennetegn | Fysisk aktivitet | Trening |
|------------|------------------|---------|
| Planlegging | Ofte spontan | Alltid planlagt |
| Struktur | Varierende | Systematisk |
| Mål | Kan mangle | Definert |
| Regelmessighet | Tilfeldig | Gjentatt |
| Eksempler | Gåing, husarbeid, lek | Styrkeøkter, løpeprogram, intervalltrening |

Begge formene for bevegelse gir helsegevinster, men trening gir større og mer målrettede tilpasninger fordi belastningen er styrt.`,
    },
    {
      id: 'tr-1-1-example-daglig',
      type: 'example',
      title: 'Eksempel: Aktivitet eller trening?',
      problem: 'Kari sykler til jobb hver dag (20 minutter), og tre ganger i uken løper hun intervaller i 45 minutter etter en fast plan for å forbedre VO₂maks. Hva er fysisk aktivitet og hva er trening?',
      solution: `**Sykling til jobb** er fysisk aktivitet. Selv om den er regelmessig, er den primært transport og ikke planlagt for å forbedre en bestemt fysisk egenskap.

**Intervalltrening** er trening. Den er planlagt (tre ganger per uke), strukturert (faste intervaller), målrettet (forbedre VO₂maks) og gjentatt over tid.

Merk at sykling til jobb likevel gir helsegevinster og bidrar til å oppfylle anbefalingene om 150 minutter moderat fysisk aktivitet per uke.`,
    },
    {
      id: 'tr-1-1-text-helsegevinster',
      type: 'text',
      title: 'Helsegevinster ved regelmessig trening',
      content: `Forskning viser at regelmessig fysisk aktivitet og trening gir omfattende helsegevinster:

**Hjerte-kar-systemet**
- Lavere hvilepuls og blodtrykk
- Økt slagvolum og hjertets pumpekapasitet
- Bedre blodlipidprofil (høyere HDL, lavere LDL)
- Redusert risiko for hjerte- og karsykdom med opptil 50 %

**Muskel- og skjelettsystemet**
- Økt muskelstyrke og muskelmasse
- Høyere beintetthet og redusert risiko for osteoporose
- Bedre leddstabilitet og bevegelighet
- Forebygging av belastningslidelser

**Metabolske effekter**
- Bedre insulinsensitivitet og blodsukkerregulering
- Økt forbrenning og gunstig kroppsammensetning
- Redusert risiko for type 2-diabetes med opptil 60 %

**Mental helse**
- Redusert risiko for depresjon og angst
- Bedre søvnkvalitet
- Økt selvbilde og mestringsopplevelse
- Bedre kognitiv funksjon og konsentrasjon

**Immunforsvaret**
- Moderat trening styrker immunforsvaret
- Raskere restitusjon ved sykdom
- Lavere forekomst av infeksjoner i øvre luftveier`,
    },
    {
      id: 'tr-1-1-note-anbefalinger',
      type: 'note',
      title: 'Helsedirektoratets anbefalinger',
      content: `Helsedirektoratet anbefaler voksne minst 150 minutter moderat fysisk aktivitet eller 75 minutter høyintensitetsaktivitet per uke. I tillegg bør man utføre styrketrening for de store muskelgruppene minst to ganger per uke. For barn og unge er anbefalingen minst 60 minutter daglig med moderat til høy intensitet.`,
    },
    {
      id: 'tr-1-1-warning-inaktivitet',
      type: 'warning',
      title: 'Fysisk inaktivitet',
      content: 'Fysisk inaktivitet er en av de største risikofaktorene for livsstilssykdommer globalt. Verdens helseorganisasjon (WHO) anslår at inaktivitet forårsaker omtrent 3,2 millioner dødsfall årlig. I Norge er stillesitting et økende problem, særlig blant unge.',
    },
    {
      id: 'tr-1-1-tip-start',
      type: 'tip',
      title: 'Kom i gang',
      content: 'Du trenger ikke å trene hardt for å oppnå helsegevinster. Selv en daglig spasertur på 30 minutter gir betydelig helseeffekt sammenlignet med å være inaktiv. Det viktigste er å komme i gang og være regelmessig over tid.',
    },
    {
      id: 'tr-1-1-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Treningslære** er et tverrfaglig fagfelt som studerer sammenhengen mellom fysisk belastning og kroppens tilpasninger
- **Fysisk aktivitet** er all bevegelse som øker energiforbruket, mens **trening** er planlagt, strukturert og målrettet fysisk aktivitet
- Regelmessig trening gir helsegevinster for hjerte-kar-systemet, muskel-skjelett, metabolisme, mental helse og immunforsvaret
- Helsedirektoratet anbefaler minst 150 minutter moderat aktivitet eller 75 minutter høy intensitet per uke`,
    },
  ],
  exercises: [
    {
      id: 'tr-1-1-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kjennetegner trening til forskjell fra generell fysisk aktivitet?',
      options: [
        { id: 'a', text: 'Den er planlagt, strukturert, målrettet og gjentatt', isCorrect: true },
        { id: 'b', text: 'Den må alltid foregå innendørs', isCorrect: false },
        { id: 'c', text: 'Den krever alltid spesialutstyr', isCorrect: false },
        { id: 'd', text: 'Den skal alltid utføres med høy intensitet', isCorrect: false },
      ],
      solution: 'Trening skiller seg fra generell fysisk aktivitet ved at den er planlagt, strukturert, målrettet og gjentatt. Det handler ikke om utstyr, sted eller intensitet, men om at aktiviteten er bevisst organisert mot et bestemt mål.',
    },
    {
      id: 'tr-1-1-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva er Helsedirektoratets anbefaling for moderat fysisk aktivitet per uke for voksne?',
      options: [
        { id: 'a', text: 'Minst 150 minutter', isCorrect: true },
        { id: 'b', text: 'Minst 30 minutter', isCorrect: false },
        { id: 'c', text: 'Minst 300 minutter', isCorrect: false },
        { id: 'd', text: 'Minst 60 minutter', isCorrect: false },
      ],
      solution: 'Helsedirektoratet anbefaler minst 150 minutter moderat fysisk aktivitet per uke for voksne, alternativt 75 minutter med høy intensitet. I tillegg anbefales styrketrening minst to ganger per uke.',
    },
    {
      id: 'tr-1-1-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken av følgende er IKKE en helsegevinst av regelmessig trening?',
      options: [
        { id: 'a', text: 'Økt hvilepuls', isCorrect: true },
        { id: 'b', text: 'Bedre insulinsensitivitet', isCorrect: false },
        { id: 'c', text: 'Høyere beintetthet', isCorrect: false },
        { id: 'd', text: 'Redusert risiko for depresjon', isCorrect: false },
      ],
      solution: 'Regelmessig trening fører til lavere hvilepuls, ikke høyere. Hjertet blir sterkere og pumper mer blod per slag (økt slagvolum), slik at det trenger færre slag per minutt for å dekke kroppens behov i hvile.',
    },
    {
      id: 'tr-1-1-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom fysisk aktivitet og trening, og gi to eksempler på hver.',
      solution: '**Fysisk aktivitet** er enhver kroppslig bevegelse som øker energiforbruket. Eksempler: gå til butikken, rake løv i hagen.\n\n**Trening** er planlagt, strukturert og gjentatt fysisk aktivitet med et klart mål. Eksempler: følge et styrketreningsprogram tre ganger i uken, løpe intervaller etter en treningsplan.\n\nHovedforskjellen er at trening er bevisst organisert mot et bestemt mål, mens fysisk aktivitet kan være spontan og uten definert formål.',
    },
    {
      id: 'tr-1-1-ex5',
      type: 'classic',
      difficulty: 'medium',
      task: 'Gjør rede for tre helsegevinster av regelmessig trening, og forklar de fysiologiske mekanismene bak.',
      solution: '**1. Redusert risiko for hjerte-karsykdom:** Trening styrker hjertemuskelen, øker slagvolumet og senker hvilepulsen. Blodtrykket synker og blodlipidprofilen bedres (mer HDL, mindre LDL), noe som reduserer åreforkalkning.\n\n**2. Bedre blodsukkerregulering:** Trening øker insulinsensitiviteten i muskelcellene, slik at glukose tas opp mer effektivt fra blodet. GLUT4-transportører flyttes til celleoverflaten under trening, noe som senker blodsukkeret.\n\n**3. Bedre mental helse:** Under trening frigjøres endorfiner og serotonin, som gir økt velvære. Regelmessig trening øker også BDNF (brain-derived neurotrophic factor) i hjernen, som fremmer nervecellenes vekst og plastisitet.',
    },
    {
      id: 'tr-1-1-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Treningslære er et tverrfaglig felt. Velg to av fagdisiplinene (treningsfysiologi, biomekanikk, idrettsernæring, idrettspsykologi) og forklar hvordan de bidrar til å forbedre en idrettsutøvers prestasjon.',
      solution: '**Treningsfysiologi** bidrar ved å kartlegge utøverens fysiologiske kapasitet (VO₂maks, laktatterskel, muskelfibersammensetning) og tilpasse treningen etter kroppens responser. Ved å forstå superkompensasjon og dose-respons kan man optimalisere belastning og restitusjon for å unngå overtrenning og sikre fremgang.\n\n**Idrettsernæring** bidrar ved å tilpasse kostholdet til treningens krav. Riktig timing og sammensetning av karbohydrater, protein og fett sikrer fulle energilagre før konkurranse, optimal restitusjon etter trening, og riktig kroppsammensetning for idretten. For eksempel vil en langdistanseløper trenge karbohydratlading før maraton, mens en styrkeløfter prioriterer proteininntak for muskelvekst.\n\nSammen gir disiplinene et helhetlig bilde som gjør at utøveren kan trene smartere, restituere bedre og prestere optimalt.',
    },
    {
      id: 'tr-1-1-ex7',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Diskuter hvorfor fysisk inaktivitet er et folkehelseproblem. Bruk kunnskap om helsegevinster ved trening til å argumentere for hvorfor samfunnet bør legge til rette for mer fysisk aktivitet.',
      solution: 'Fysisk inaktivitet er knyttet til økt risiko for en rekke livsstilssykdommer: hjerte-karsykdom, type 2-diabetes, enkelte kreftformer, depresjon og muskel-skjelettlidelser. WHO anslår at inaktivitet forårsaker omtrent 3,2 millioner dødsfall årlig globalt.\n\n**Samfunnsøkonomiske konsekvenser:** Livsstilssykdommer fører til høye helseutgifter, økt sykefravær og uføretrygd. Investering i tilrettelegging for fysisk aktivitet kan spare samfunnet for store kostnader.\n\n**Tiltak:** Samfunnet bør legge til rette gjennom trygg infrastruktur for gåing og sykling, tilgjengelige treningsfasiliteter, fysisk aktivitet i skolen, kampanjer som fremmer aktive transportvalg, og arbeidsgivere som tilrettelegger for bevegelse i arbeidstiden.\n\nRegelmessig moderat fysisk aktivitet kan redusere risikoen for hjerte-karsykdom med opptil 50 % og type 2-diabetes med opptil 60 %. Selv beskjedne tiltak som daglig gåing gir betydelig effekt.',
    },
  ],
  keyTerms: [],
};

// ============================================================================
// Kapittel 1.2: Treningsprinsipper
// ============================================================================

export const CHAPTER_TRENING_1_1_2: TextbookChapter = {
  id: 'trening-1-1-2',
  courseId: 'trening-1',
  chapterNumber: '1.2',
  title: 'Treningsprinsipper',
  description: 'De fem sentrale treningsprinsippene: overbelastning, progresjon, spesifisitet, reversibilitet og variasjon.',
  estimatedMinutes: 25,
  competenceGoals: [
    'gjøre rede for overbelastningsprinsippet og progresjonsprinsippet',
    'forklare spesifisitetsprinsippet og reversibilitetsprinsippet',
    'forstå betydningen av variasjon i trening',
  ],
  content: [
    {
      id: 'tr-1-2-intro',
      type: 'text',
      content: `# Treningsprinsipper

For at trening skal gi resultater, må den følge bestemte prinsipper. Disse prinsippene er basert på kunnskap om hvordan kroppen responderer på fysisk belastning, og de gjelder uansett om du trener for helse, idrett eller rehabilitering.

I dette kapittelet lærer du om de fem sentrale treningsprinsippene:

1. Overbelastningsprinsippet
2. Progresjonsprinsippet
3. Spesifisitetsprinsippet
4. Reversibilitetsprinsippet
5. Variasjonsprinsippet`,
    },
    {
      id: 'tr-1-2-def-overbelastning',
      type: 'definition',
      title: 'Overbelastningsprinsippet',
      content: 'Overbelastningsprinsippet sier at kroppen må utsettes for en belastning som overstiger det den er tilvent, for å stimulere til fysiologisk tilpasning. Belastningen må ligge over en terskelverdi for å utløse en treningsrespons. Uten tilstrekkelig overbelastning vil kroppen ikke ha behov for å tilpasse seg.',
    },
    {
      id: 'tr-1-2-text-overbelastning',
      type: 'text',
      title: 'Overbelastningsprinsippet i praksis',
      content: `Overbelastning betyr ikke at du skal trene deg i senk. Det handler om å gi kroppen en stimulus som er litt større enn det den er vant til. Hvor stor overbelastningen må være, avhenger av treningsnivå:

**Nybegynnere** trenger relativt lite overbelastning for å oppleve fremgang. Selv lette økter gir tydelig respons fordi kroppen ikke er tilvent til trening.

**Trente utøvere** trenger sterkere stimuli fordi kroppen allerede er godt tilpasset. Treningsbelastningen må økes i intensitet, volum eller kompleksitet for å oppnå videre fremgang.

**Terskelbelastning** er den minste belastningen som utløser en tilpasningsrespons. Under denne terskelen skjer ingen fremgang. Over terskelen starter kroppens adaptasjonsprosesser.

Overbelastning kan oppnås ved å justere en eller flere treningsvariabler:
- Øke vekten (intensitet)
- Øke antall repetisjoner eller sett (volum)
- Redusere pausetiden
- Øke treningsfrekvensen
- Gjøre øvelsene mer komplekse`,
    },
    {
      id: 'tr-1-2-def-progresjon',
      type: 'definition',
      title: 'Progresjonsprinsippet',
      content: 'Progresjonsprinsippet innebærer at treningsbelastningen må økes gradvis over tid for å sikre fortsatt tilpasning og utvikling. Etter hvert som kroppen tilpasser seg et gitt belastningsnivå, må belastningen økes for å opprettholde stimulusen for videre forbedring.',
    },
    {
      id: 'tr-1-2-text-progresjon',
      type: 'text',
      title: 'Progresjon i praksis',
      content: `Progresjon henger tett sammen med overbelastning. Når kroppen har tilpasset seg en belastning, er denne belastningen ikke lenger tilstrekkelig overbelastning. Da må den økes.

**Lineær progresjon** er den enkleste formen: belastningen økes med et fast beløp fra økt til økt eller uke til uke. For eksempel å legge til 2,5 kg på knebøy hver uke. Denne metoden egner seg best for nybegynnere.

**Bølget progresjon** varierer belastningen fra økt til økt, men med en stigende trend over tid. En uke kan se slik ut: mandag tung, onsdag lett, fredag moderat. Over flere uker øker den gjennomsnittlige belastningen. Denne metoden egner seg for viderekomne.

**Blokkperiodisering** deler treningsåret inn i blokker med ulikt fokus. For eksempel fire uker med volumfokus, fire uker med styrke, fire uker med kraft. Denne metoden brukes ofte av konkurranseutøvere.

**Tommelregel:** Øk treningsbelastningen med maksimalt 5-10 % per uke for å unngå skader og overtrenning.`,
    },
    {
      id: 'tr-1-2-example-progresjon',
      type: 'example',
      title: 'Eksempel: Lineær progresjon i benkpress',
      problem: 'Lars starter et styrketreningsprogram med benkpress. Han løfter 60 kg i 3 sett x 8 repetisjoner. Treningsplanen sier at han skal øke vekten med 2,5 kg når han klarer alle sett og repetisjoner. Hva vil vekten hans være etter 6 uker med ukentlig progresjon?',
      solution: `**Beregning:**

Startsvekt: 60 kg

Uke 1: 60 kg
Uke 2: 62,5 kg
Uke 3: 65 kg
Uke 4: 67,5 kg
Uke 5: 70 kg
Uke 6: 72,5 kg

Etter 6 uker løfter Lars 72,5 kg, en økning på 12,5 kg (ca. 21 %).

**Merk:** I praksis vil progresjonen sjelden være så jevn. Noen uker kan det være vanskelig å øke vekten, og da kan man i stedet øke antall repetisjoner eller sett. Det viktige er at den totale belastningen øker over tid.`,
    },
    {
      id: 'tr-1-2-def-spesifisitet',
      type: 'definition',
      title: 'Spesifisitetsprinsippet',
      content: 'Spesifisitetsprinsippet (SAID-prinsippet: Specific Adaptation to Imposed Demands) sier at kroppen tilpasser seg spesifikt til den typen belastning den utsettes for. Treningseffekten er størst i de muskelgruppene, bevegelsesmønstrene og energisystemene som belastes under treningen.',
    },
    {
      id: 'tr-1-2-text-spesifisitet',
      type: 'text',
      title: 'Spesifisitet i praksis',
      content: `Spesifisitetsprinsippet har flere dimensjoner:

**Muskelspesifisitet:** Trener du bein, blir beina sterkere - ikke armene. Treningen belaster bestemte muskelgrupper, og det er disse som tilpasser seg.

**Bevegelsesmønsterspesifisitet:** Kroppen blir bedre i de eksakte bevegelsene du trener. En knebøy forbedrer knebøyprestasjonen mer enn beinpress, selv om begge trener beina.

**Energisystemspesifisitet:** Trening ved ulike intensiteter belaster ulike energisystemer. Sprinttrening forbedrer det anaerobe systemet, mens langkjøring forbedrer det aerobe systemet.

**Hastighetsspesifisitet:** Trener du med lav hastighet, blir du best på lave hastigheter. Vil du bli eksplosiv, må du trene eksplosivt.

**Overføringsverdi:** Selv om treningen er spesifikk, er det noe overføringsverdi mellom lignende aktiviteter. En sterk knebøy kan forbedre hopphøyden, men ikke like mye som spesifikk hopptrening.`,
    },
    {
      id: 'tr-1-2-def-reversibilitet',
      type: 'definition',
      title: 'Reversibilitetsprinsippet',
      content: 'Reversibilitetsprinsippet sier at treningseffekten gradvis går tapt dersom treningen opphører eller reduseres vesentlig. Kroppen tilpasser seg det den utsettes for, og uten tilstrekkelig stimulus vil den gradvis vende tilbake mot utgangsnivået. Prinsippet oppsummeres ofte med uttrykket "use it or lose it".',
    },
    {
      id: 'tr-1-2-text-reversibilitet',
      type: 'text',
      title: 'Reversibilitet i praksis',
      content: `Hvor fort treningseffekten tapes, avhenger av flere faktorer:

**Utholdenhet tapes raskt:** Etter bare 2-3 uker uten trening kan VO₂maks synke merkbart. Etter 2-3 måneder kan en godt trent person ha mistet opptil 50 % av utholdenhetsgevinsten.

**Styrke tapes saktere:** Maksimal styrke kan opprettholdes i 3-4 uker uten trening. Etter 2-3 måneder kan styrketapet være 10-15 %. Muskelmasse tapes enda saktere enn styrke.

**Bevegelighet tapes moderat:** Uten tøyetrening stivner muskulatur og bindevev gradvis. Det kan ta 4-8 uker å miste merkbar bevegelighet.

**Muskelminne:** En viktig nyanse er at muskler som tidligere har vært store, kan gjenoppbygges raskere enn de ble bygd første gang. Muskelcellenes cellekjerner beholdes selv etter muskeltap, noe som gjør gjenopptrening raskere.

Reversibilitet er grunnen til at regelmessig trening er avgjørende. Sporadisk trening gir begrenset langtidseffekt.`,
    },
    {
      id: 'tr-1-2-def-variasjon',
      type: 'definition',
      title: 'Variasjonsprinsippet',
      content: 'Variasjonsprinsippet sier at treningen bør varieres systematisk for å unngå stagnasjon, forebygge belastningsskader og opprettholde motivasjon. Variasjon kan skje i form av øvelsesutvalg, intensitet, volum, treningsmetode eller treningsform.',
    },
    {
      id: 'tr-1-2-text-variasjon',
      type: 'text',
      title: 'Variasjon i praksis',
      content: `Variasjon må balanseres mot spesifisitet. For mye variasjon gir lite spesifikk tilpasning, mens for lite variasjon kan føre til stagnasjon og overbelastningsskader.

**Hvorfor variasjon er viktig:**
- Forebygger ensidig belastning og skader
- Stimulerer muskulatur og nervesystem på nye måter
- Bryter gjennom treningsplatåer
- Opprettholder motivasjon og treningsglede

**Former for variasjon:**
- Bytte øvelser som trener samme muskelgruppe (benkpress → brystpress)
- Variere intensitet og volum (tunge og lette dager)
- Bruke ulike treningsmetoder (intervall, langkjøring, fartlek)
- Periodisere treningen i faser med ulikt fokus
- Prøve nye idretter eller aktiviteter

**Planlagt vs. tilfeldig variasjon:** Variasjon bør være planlagt og systematisk, ikke tilfeldig. Tilfeldige endringer gjør det vanskelig å spore fremgang og tilpasse treningen.`,
    },
    {
      id: 'tr-1-2-note-sammenheng',
      type: 'note',
      title: 'Prinsippene henger sammen',
      content: 'De fem treningsprinsippene er ikke uavhengige - de virker sammen. Overbelastning uten progresjon gir stagnasjon. Progresjon uten variasjon kan gi skader. Spesifisitet uten variasjon kan gi ensidighet. En god treningsplan balanserer alle prinsippene for å sikre trygg og effektiv fremgang.',
    },
    {
      id: 'tr-1-2-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Overbelastning** - kroppen må belastes utover det den er tilvent for å stimulere tilpasning
- **Progresjon** - belastningen må økes gradvis over tid
- **Spesifisitet** - kroppen tilpasser seg den spesifikke belastningen den utsettes for
- **Reversibilitet** - treningseffekt tapes gradvis uten vedlikeholdstrening
- **Variasjon** - systematisk endring forebygger stagnasjon og skader`,
    },
  ],
  exercises: [
    {
      id: 'tr-1-2-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva sier overbelastningsprinsippet?',
      options: [
        { id: 'a', text: 'Kroppen må belastes utover det den er tilvent for å tilpasse seg', isCorrect: true },
        { id: 'b', text: 'Man bør alltid trene til utmattelse', isCorrect: false },
        { id: 'c', text: 'Trening må alltid være så hard som mulig', isCorrect: false },
        { id: 'd', text: 'Overbelastning er alltid skadelig', isCorrect: false },
      ],
      solution: 'Overbelastningsprinsippet sier at treningsbelastningen må overstige det kroppen er vant til for å utløse en tilpasningsrespons. Det betyr ikke at man skal trene til utmattelse, men at belastningen må ligge over en terskelverdi.',
    },
    {
      id: 'tr-1-2-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva betyr SAID-prinsippet?',
      options: [
        { id: 'a', text: 'Specific Adaptation to Imposed Demands', isCorrect: true },
        { id: 'b', text: 'Simple Approach to Individual Development', isCorrect: false },
        { id: 'c', text: 'Systematic Application of Intense Drills', isCorrect: false },
        { id: 'd', text: 'Strength And Intensity Determination', isCorrect: false },
      ],
      solution: 'SAID står for Specific Adaptation to Imposed Demands og er et annet navn for spesifisitetsprinsippet. Det betyr at kroppen tilpasser seg spesifikt til den typen belastning den utsettes for.',
    },
    {
      id: 'tr-1-2-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken fysisk egenskap tapes raskest uten trening?',
      options: [
        { id: 'a', text: 'Utholdenhet', isCorrect: true },
        { id: 'b', text: 'Maksimal styrke', isCorrect: false },
        { id: 'c', text: 'Muskelmasse', isCorrect: false },
        { id: 'd', text: 'Bevegelighet', isCorrect: false },
      ],
      solution: 'Utholdenhet tapes raskest uten trening. Allerede etter 2-3 uker kan VO₂maks synke merkbart, og etter 2-3 måneder kan opptil 50 % av utholdenhetsgevinsten være tapt. Styrke og muskelmasse tapes saktere.',
    },
    {
      id: 'tr-1-2-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar sammenhengen mellom overbelastningsprinsippet og progresjonsprinsippet. Hvorfor er begge nødvendige for å oppnå fremgang?',
      solution: 'Overbelastning og progresjon henger tett sammen. **Overbelastning** sikrer at kroppen får en stimulus som er sterk nok til å utløse tilpasning. Men etter at kroppen har tilpasset seg, er den samme belastningen ikke lenger tilstrekkelig overbelastning. **Progresjon** sikrer at belastningen økes gradvis slik at overbelastningsstimulus opprettholdes over tid. Uten progresjon vil kroppen tilpasse seg belastningen og fremgangen stopper opp (stagnasjon). Sammen sikrer prinsippene kontinuerlig utvikling.',
    },
    {
      id: 'tr-1-2-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En fotballspiller ønsker å bli raskere i sprint. Han bestemmer seg for å bare løpe langkjøring fordi det er lettere. Bruk treningsprinsippene til å forklare hvorfor dette trolig ikke vil gi ønsket resultat, og foreslå en bedre tilnærming.',
      solution: '**Spesifisitetsprinsippet** tilsier at langkjøring primært forbedrer det aerobe energisystemet og langsom muskelfiber-rekruttering. Sprint krever derimot det anaerobe systemet og rekruttering av hurtige muskelfibre. Langkjøring er altså ikke spesifikk nok for sprintforbedring.\n\n**Bedre tilnærming:**\n- Sprinttrening over korte distanser (10-40 m) for å trene hurtige muskelfibre og anaerob kapasitet\n- Eksplosiv styrketrening (knebøy, markløft) for å utvikle kraftproduksjon\n- Plyometrisk trening (hoppøvelser) for å forbedre power og akselerasjon\n- Noe langkjøring kan inkluderes for generell aerob base, men hovedfokus må være spesifikk sprinttrening\n\nVariasjonsprinsippet tilsier likevel at noe aerob trening kan være nyttig for restitusjonsevne, men den må ikke dominere treningsprogrammet.',
    },
    {
      id: 'tr-1-2-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Drøft hvordan de fem treningsprinsippene kan brukes sammen for å lage et godt treningsprogram for en nybegynner som ønsker å bedre den generelle formen sin.',
      solution: '**Overbelastning:** Nybegynneren trenger relativt lite overbelastning i starten. Selv lett-moderat trening vil gi respons. Viktig å starte forsiktig for å unngå skader.\n\n**Progresjon:** Øke belastningen gradvis med maksimalt 5-10 % per uke. For eksempel starte med 20 minutter gange og øke til 30 minutter, deretter øke til joggetempo.\n\n**Spesifisitet:** Trene både styrke og utholdenhet for allsidig utvikling. Velge øvelser som er relevante for dagliglivets krav.\n\n**Reversibilitet:** Legge opp til regelmessig trening (minst 3 ganger per uke) for å unngå at effekten tapes mellom øktene.\n\n**Variasjon:** Variere mellom styrke, utholdenhet og bevegelighet. Bytte øvelser med noen ukers mellomrom for å holde motivasjonen oppe og belaste kroppen allsidig.\n\n**Eksempeluke:** Mandag: styrketrening, onsdag: gange/jogging, fredag: styrketrening, søndag: sykling eller svømming. Gradvis øke intensitet og varighet over ukene.',
    },
  ],
  keyTerms: [],
};

// ============================================================================
// Kapittel 1.3: Superkompensasjon
// ============================================================================

export const CHAPTER_TRENING_1_1_3: TextbookChapter = {
  id: 'trening-1-1-3',
  courseId: 'trening-1',
  chapterNumber: '1.3',
  title: 'Superkompensasjon',
  description: 'Superkompensasjonsmodellen, forholdet mellom belastning, restitusjon og tilpasning, og treningsresponsens faser.',
  estimatedMinutes: 25,
  competenceGoals: [
    'forklare superkompensasjonsmodellen med dens faser',
    'forstå sammenhengen mellom belastning, restitusjon og adaptasjon',
    'vurdere optimal timing av treningsøkter basert på superkompensasjon',
  ],
  content: [
    {
      id: 'tr-1-3-intro',
      type: 'text',
      content: `# Superkompensasjon

Superkompensasjon er en sentral modell i treningslæren som beskriver hvordan kroppen responderer på treningsbelastning. Modellen forklarer hvorfor vi trenger hvile mellom treningsøkter og hvordan riktig timing av trening gir fremgang.

I dette kapittelet skal du lære:

- Hva superkompensasjon er og hvordan den fungerer
- De fire fasene i superkompensasjonsmodellen
- Hvordan timing av treningsøkter påvirker resultatet
- Hva som skjer ved for mye eller for lite belastning`,
    },
    {
      id: 'tr-1-3-def-superkompensasjon',
      type: 'definition',
      title: 'Superkompensasjon',
      content: 'Superkompensasjon er en fysiologisk tilpasningsrespons der kroppen, etter en treningsbelastning og tilstrekkelig restitusjon, gjenoppbygger seg til et høyere funksjonsnivå enn utgangspunktet. Kroppen "overkompenserer" for belastningen ved å bli litt sterkere, raskere eller mer utholdende enn den var før treningen.',
    },
    {
      id: 'tr-1-3-text-modellen',
      type: 'text',
      title: 'Superkompensasjonsmodellen',
      content: `Superkompensasjonsmodellen beskriver fire faser som kroppen gjennomgår etter en treningsøkt:

**Fase 1: Belastning (trening)**
Under selve treningsøkten brytes kroppen ned. Energilagrene (glykogen, kreatinfosfat) tømmes, muskelfibre får mikroskader, og hormoner som kortisol øker. Funksjonsnivået synker under og rett etter trening.

**Fase 2: Restitusjon (gjenoppbygging)**
Etter trening starter kroppen med å reparere skader og fylle opp energilagrene. Proteinsyntesen øker for å reparere muskelfibre. Enzymer, mitokondrier og andre strukturer gjenoppbygges. Funksjonsnivået stiger tilbake mot utgangspunktet.

**Fase 3: Superkompensasjon (overkompensasjon)**
Kroppen stopper ikke ved utgangsnivået, men bygger seg opp til et høyere nivå. Dette er kroppens "sikkerhetsbuffer" - den forbereder seg på at lignende belastning kan komme igjen. Det er i denne fasen du er sterkere, raskere eller mer utholdende enn før.

**Fase 4: Tilbakegang (dekompensasjon)**
Dersom ingen ny treningsbelastning kommer, synker funksjonsnivået gradvis tilbake mot utgangspunktet. Kroppen ser ingen grunn til å opprettholde det forhøyede nivået uten ny stimulus.`,
    },
    {
      id: 'tr-1-3-note-modell',
      type: 'note',
      title: 'En forenklet modell',
      content: 'Superkompensasjonsmodellen er en forenkling av virkeligheten. I praksis tilpasser ikke kroppen seg i perfekte kurver, og ulike fysiologiske systemer har ulike restitusjonstider. Likevel er modellen svært nyttig for å forstå grunnprinsippene for treningsplanlegging.',
    },
    {
      id: 'tr-1-3-text-timing',
      type: 'text',
      title: 'Optimal timing av neste treningsøkt',
      content: `Tidspunktet for neste treningsøkt i forhold til superkompensasjonskurven avgjør om du får fremgang, stagnasjon eller tilbakegang:

**Scenario 1: Optimal timing**
Neste økt legges i superkompensasjonsfasen (fase 3). Utgangspunktet for den nye økten er høyere enn forrige gang. Over tid gir dette en trappetrinnseffekt der hvert treningsløft starter fra et høyere nivå. Resultatet er jevn og sikker fremgang.

**Scenario 2: For tidlig (underrestitusjon)**
Neste økt legges før kroppen er ferdig restituert (fase 2). Utgangspunktet er lavere enn normalt. Gjentatte økter uten tilstrekkelig restitusjon fører til akkumulert tretthet, nedsatt prestasjon og risiko for overtrenning.

**Scenario 3: For sent (tapt effekt)**
Neste økt legges etter at superkompensasjonseffekten har avtatt (fase 4). Kroppen har allerede vendt tilbake mot utgangsnivået. Treningen gir ikke fremgang, bare vedlikehold eller til og med stagnasjon.

Optimal timing varierer betydelig mellom ulike treningsformer, muskelgrupper og individer.`,
    },
    {
      id: 'tr-1-3-example-timing',
      type: 'example',
      title: 'Eksempel: Restitusjonstider',
      problem: 'En utøver trener styrke (bein) på mandag og lurer på når hun bør trene bein igjen. Hva er typisk restitusjonstid, og hvilken dag bør hun legge neste beinøkt?',
      solution: `**Typiske restitusjonstider for styrketrening:**
- Små muskelgrupper (armer, skuldre): 24-48 timer
- Store muskelgrupper (bein, rygg): 48-72 timer
- Tung maksimalstyrke: 72-96 timer

Etter en tung beinøkt på mandag er typisk restitusjonstid 48-72 timer. Superkompensasjonsfasen inntreffer ca. 2-4 dager etter økten.

**Optimal neste beinøkt:** Onsdag (48 timer) til torsdag (72 timer), avhengig av øktens intensitet og utøverens treningsnivå.

Hvis hun trener igjen allerede tirsdag, risikerer hun å trene før restitusjonen er fullført. Venter hun til fredag eller lørdag, kan deler av superkompensasjonseffekten allerede ha avtatt.`,
    },
    {
      id: 'tr-1-3-def-restitusjon',
      type: 'definition',
      title: 'Restitusjon',
      content: 'Restitusjon er prosessen der kroppen reparerer treningsindusert skade, fyller opp energilagre og tilpasser seg belastningen. Restitusjon er en aktiv biologisk prosess som krever tilstrekkelig søvn, ernæring og hvile. Restitusjonstiden varierer med treningens intensitet, varighet, muskelgrupper involvert, alder og treningsstatus.',
    },
    {
      id: 'tr-1-3-text-restitusjonsfaktorer',
      type: 'text',
      title: 'Faktorer som påvirker restitusjon',
      content: `Restitusjonstiden er ikke fast - den påvirkes av mange faktorer:

**Søvn**
Veksthormon frigjøres hovedsakelig under dyp søvn. 7-9 timer søvn per natt er anbefalt for optimal restitusjon. Dårlig søvn kan forlenge restitusjonstiden med opptil 50 %.

**Ernæring**
- Karbohydrater fyller opp glykogenlagrene
- Protein gir aminosyrer til muskelreparasjon
- Tilstrekkelig væske er nødvendig for alle kroppsprosesser
- Tidspunkt: inntak innen 30-60 minutter etter trening optimaliserer gjenoppbyggingen

**Treningsstatus**
- Godt trente utøvere restituerer raskere enn utrente
- Kroppen blir bedre til å reparere seg med erfaring

**Alder**
- Unge restituerer raskere enn eldre
- Etter 30-årsalderen øker restitusjonstiden gradvis

**Stress**
- Psykisk stress øker kortisolnivået og hemmer restitusjon
- Balanse mellom treningsbelastning og øvrig livsbelastning er viktig

**Aktiv restitusjon**
Lett aktivitet (gåturer, lett sykling) kan fremme restitusjonen ved å øke blodsirkulasjonen uten å belaste kroppen ytterligere.`,
    },
    {
      id: 'tr-1-3-warning-overtrenning',
      type: 'warning',
      title: 'Overtrenning vs. overrekning',
      content: 'Det er viktig å skille mellom **overrekning** (overreaching) og **overtrenning** (overtraining). Overrekning er kortvarig prestasjonsfall etter en periode med hard trening og kan være planlagt som del av et treningsopplegg. Etter noen dagers hvile opplever utøveren superkompensasjon. Overtrenning er derimot et mer alvorlig og langvarig syndrom som kan ta uker eller måneder å komme ut av. Symptomer inkluderer kronisk tretthet, søvnproblemer, nedsatt immunforsvar og humørforstyrrelser.',
    },
    {
      id: 'tr-1-3-text-treningsrespons',
      type: 'text',
      title: 'Treningsrespons og dose-respons',
      content: `**Akutt treningsrespons** er kroppens umiddelbare reaksjon på en treningsøkt: økt puls, økt respirasjonsfrekvens, hormonutskillelse, økt blodgjennomstrømning til arbeidsmuskulatur.

**Kronisk treningstilpasning** er de varige endringene som oppstår over tid med gjentatt trening: økt muskelmasse, flere mitokondrier, økt blodvolum, lavere hvilepuls.

**Dose-respons-forholdet** beskriver sammenhengen mellom treningsmengde (dose) og treningseffekt (respons):

- **For lav dose:** Belastningen er under terskel. Ingen tilpasning skjer.
- **Optimal dose:** Belastningen er tilstrekkelig til å utløse superkompensasjon. Kroppen tilpasser seg og prestasjonsnivået øker.
- **For høy dose:** Belastningen overstiger kroppens restitusjonskapasitet. Risiko for overtrenning, skade og prestasjonsfall.

Den optimale dosen er individuell og avhenger av treningsstatus, alder, genetikk, søvn, ernæring og øvrig stressnivå.`,
    },
    {
      id: 'tr-1-3-tip-praktisk',
      type: 'tip',
      title: 'Praktisk bruk av superkompensasjon',
      content: 'I praksis trenger du ikke beregne superkompensasjonskurven eksakt. Bruk i stedet disse signalene: Føler du deg uthvilt og sterk? Da er du trolig i superkompensasjonsfasen. Er du fortsatt stiv og sliten? Da trenger du mer hvile. Treningsdagbok og RPE-skala (Rate of Perceived Exertion) er nyttige verktøy for å spore restitusjon.',
    },
    {
      id: 'tr-1-3-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Superkompensasjon** betyr at kroppen bygger seg opp til et høyere nivå etter trening og restitusjon
- Modellen har fire faser: belastning, restitusjon, superkompensasjon og tilbakegang
- **Optimal timing** av neste treningsøkt er i superkompensasjonsfasen
- Restitusjon påvirkes av søvn, ernæring, treningsstatus, alder og stress
- **Dose-respons-forholdet** viser at det finnes en optimal belastning som gir best fremgang`,
    },
  ],
  exercises: [
    {
      id: 'tr-1-3-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva skjer i superkompensasjonsfasen?',
      options: [
        { id: 'a', text: 'Kroppen bygger seg opp til et høyere funksjonsnivå enn utgangspunktet', isCorrect: true },
        { id: 'b', text: 'Kroppen brytes ned under trening', isCorrect: false },
        { id: 'c', text: 'Energilagrene tømmes', isCorrect: false },
        { id: 'd', text: 'Funksjonsnivået synker permanent', isCorrect: false },
      ],
      solution: 'I superkompensasjonsfasen har kroppen fullført restitusjonen og bygget seg opp til et høyere funksjonsnivå enn før treningen. Dette er kroppens "overkompensasjon" som forberedelse på fremtidig belastning.',
    },
    {
      id: 'tr-1-3-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvor mange faser har superkompensasjonsmodellen?',
      options: [
        { id: 'a', text: '4 faser', isCorrect: true },
        { id: 'b', text: '2 faser', isCorrect: false },
        { id: 'c', text: '3 faser', isCorrect: false },
        { id: 'd', text: '6 faser', isCorrect: false },
      ],
      solution: 'Superkompensasjonsmodellen har 4 faser: 1) Belastning (trening), 2) Restitusjon (gjenoppbygging), 3) Superkompensasjon (overkompensasjon), og 4) Tilbakegang (dekompensasjon).',
    },
    {
      id: 'tr-1-3-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hva kan skje dersom en utøver trener for hyppig uten tilstrekkelig restitusjon over tid?',
      options: [
        { id: 'a', text: 'Overtrenning med kronisk tretthet og prestasjonsfall', isCorrect: true },
        { id: 'b', text: 'Raskere fremgang enn normalt', isCorrect: false },
        { id: 'c', text: 'Bedre restitusjon mellom øktene', isCorrect: false },
        { id: 'd', text: 'Uendret prestasjonsnivå', isCorrect: false },
      ],
      solution: 'Trening uten tilstrekkelig restitusjon fører til at kroppen aldri rekker å gjenoppbygge seg fullstendig. Over tid akkumuleres trettheten, og utøveren risikerer overtrenning med symptomer som kronisk tretthet, nedsatt prestasjon, søvnproblemer og økt skaderisiko.',
    },
    {
      id: 'tr-1-3-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Beskriv de fire fasene i superkompensasjonsmodellen og forklar hva som skjer fysiologisk i hver fase.',
      solution: '**Fase 1 - Belastning:** Under trening tømmes energilagre (glykogen, kreatinfosfat), muskelfibre får mikroskader, og stresshormoner som kortisol øker. Funksjonsnivået synker.\n\n**Fase 2 - Restitusjon:** Kroppen reparerer muskelskader gjennom økt proteinsyntese, fyller opp glykogenlagrene og gjenoppbygger strukturer. Funksjonsnivået stiger gradvis tilbake mot utgangspunktet.\n\n**Fase 3 - Superkompensasjon:** Kroppen bygger seg opp utover utgangsnivået. Muskelfibrene blir sterkere, antall mitokondrier øker, energilagrene blir større. Det er i denne fasen man er best forberedt på ny belastning.\n\n**Fase 4 - Tilbakegang:** Uten ny stimulus avtar superkompensasjonseffekten. Kroppen tilpasser seg nedover mot utgangsnivået fordi den ikke ser behov for å opprettholde det forhøyede nivået.',
    },
    {
      id: 'tr-1-3-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Forklar forskjellen mellom overrekning (overreaching) og overtrenning (overtraining). Hvorfor kan planlagt overrekning være en del av et treningsprogram?',
      solution: '**Overrekning (overreaching)** er en kortvarig tilstand der utøveren bevisst trener mer enn normalt over en begrenset periode (typisk 1-2 uker). Prestasjonen faller midlertidig, men etter en planlagt restitusjonsperiode oppnår utøveren kraftig superkompensasjon og et høyere prestasjonsnivå enn før. Dette kalles "funksjonell overrekning" og brukes av mange toppidrettsutøvere.\n\n**Overtrenning (overtraining)** er en alvorlig og langvarig tilstand som oppstår etter uker eller måneder med for høy treningsbelastning i forhold til restitusjonskapasiteten. Symptomer inkluderer kronisk tretthet, søvnforstyrrelser, nedsatt immunforsvar, humørsvingninger, appetittendringer og vedvarende prestasjonsfall. Restitusjon fra overtrenning kan ta måneder.\n\n**Planlagt overrekning** brukes fordi den kraftige superkompensasjonsresponsen kan gi større prestasjonsfremgang enn vanlig trening. Nøkkelen er at den alltid etterfølges av en planlagt nedtrappingsperiode der kroppen får restituere fullt ut. Risikoen er at grensen mellom overrekning og overtrenning er individuell og vanskelig å treffe nøyaktig.',
    },
    {
      id: 'tr-1-3-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'En langrennsløper trener 6 dager i uken. Hun merker at hun er konstant sliten, sover dårlig og presterer dårligere enn for noen uker siden. Bruk kunnskapen om superkompensasjon til å analysere situasjonen og foreslå tiltak.',
      solution: '**Analyse:** Symptomene (konstant tretthet, dårlig søvn, prestasjonsfall) tyder på at utøveren trener i restitusjonfasen (fase 2) uten å nå superkompensasjon (fase 3). Hun trener for hyppig eller for intensivt i forhold til restitusjonskapasiteten, og akkumulert tretthet fører til en negativ spiral.\n\n**Tiltak:**\n1. **Umiddelbart:** Legge inn 2-3 dager med full hvile eller kun lett aktiv restitusjon for å gi kroppen tid til å komme i balanse\n2. **Kort sikt:** Redusere treningsfrekvens til 4-5 dager per uke og sikre minst én hel hviledag\n3. **Restitusjonsstrategi:** Prioritere 8-9 timer søvn, sikre tilstrekkelig karbohydrat- og proteininntak, og redusere øvrig stress\n4. **Monitorering:** Føre treningsdagbok med RPE-score, søvnkvalitet og humør for å oppdage negative trender tidlig\n5. **Langsiktig:** Periodisere treningen med veksling mellom belastningsuker og lettere uker for å sikre at superkompensasjon finner sted',
    },
  ],
  keyTerms: [],
};

// ============================================================================
// Kapittel 1.4: Treningsvariabler
// ============================================================================

export const CHAPTER_TRENING_1_1_4: TextbookChapter = {
  id: 'trening-1-1-4',
  courseId: 'trening-1',
  chapterNumber: '1.4',
  title: 'Treningsvariabler',
  description: 'De sentrale treningsvariablene intensitet, volum, frekvens, varighet og hvile, og hvordan de brukes til å styre treningsbelastningen.',
  estimatedMinutes: 25,
  competenceGoals: [
    'definere og forklare de viktigste treningsvariablene',
    'forstå hvordan intensitet måles i styrke- og utholdenhetstrening',
    'kunne bruke treningsvariabler til å styre belastning',
  ],
  content: [
    {
      id: 'tr-1-4-intro',
      type: 'text',
      content: `# Treningsvariabler

Treningsvariabler er de justerbare faktorene som bestemmer hvordan en treningsøkt er sammensatt. Ved å manipulere disse variablene kan vi styre treningsbelastningen presist og tilpasse treningen til ulike mål.

I dette kapittelet skal du lære om:

- De fem sentrale treningsvariablene
- Hvordan intensitet måles og beregnes
- Sammenhengen mellom volum og intensitet
- Hvordan hvile og frekvens påvirker treningseffekten`,
    },
    {
      id: 'tr-1-4-def-intensitet',
      type: 'definition',
      title: 'Intensitet',
      content: 'Intensitet angir hvor hardt du trener og refererer til graden av belastning i forhold til maksimal kapasitet. I styrketrening måles intensitet ofte som prosent av 1RM (én repetisjon maksimum). I utholdenhetstrening måles intensitet som prosent av maksimal hjertefrekvens (HFmaks), prosent av VO₂maks, eller etter Borgs skala for opplevd anstrengelse (RPE).',
    },
    {
      id: 'tr-1-4-text-intensitet',
      type: 'text',
      title: 'Intensitet i praksis',
      content: `Intensitet er trolig den viktigste treningsvariabelen fordi den bestemmer hvilke fysiologiske systemer som belastes:

**Intensitet i styrketrening**

Intensitet angis som prosent av 1RM (én repetisjon maksimum):

| Intensitetssone | % av 1RM | Repetisjoner | Primær effekt |
|-----------------|----------|--------------|---------------|
| Svært høy | 90-100 % | 1-3 | Maksimal styrke, nervesystem |
| Høy | 80-90 % | 3-6 | Styrke og kraft |
| Moderat-høy | 70-80 % | 6-12 | Hypertrofi (muskelvekst) |
| Moderat | 60-70 % | 12-20 | Muskulær utholdenhet |
| Lav | Under 60 % | 20+ | Utholdenhet, rehabilitering |

**Intensitet i utholdenhetstrening**

Intensitet angis som prosent av HFmaks eller etter intensitetssoner:

| Sone | Intensitet | % av HFmaks | Beskrivelse |
|------|-----------|-------------|-------------|
| 1 | Svært lav | 50-60 % | Lett aktivitet, restitusjon |
| 2 | Lav | 60-70 % | Grunnleggende utholdenhet |
| 3 | Moderat | 70-80 % | Aerob terskel |
| 4 | Høy | 80-90 % | Anaerob terskel |
| 5 | Svært høy | 90-100 % | VO₂maks-trening |

**Borgs RPE-skala** er et subjektivt mål på intensitet der utøveren vurderer sin egen anstrengelse på en skala fra 6 (ingen anstrengelse) til 20 (maksimal anstrengelse).`,
    },
    {
      id: 'tr-1-4-example-intensitet',
      type: 'example',
      title: 'Eksempel: Beregning av treningsintensitet',
      problem: 'Ole har testet at han klarer å ta 100 kg i benkpress for én repetisjon (1RM). Treneren hans sier at han skal trene med 75 % intensitet. Hvor mye vekt skal Ole bruke?',
      solution: `**Beregning:**

$$\\text{Treningsvekt} = \\text{1RM} \\times \\frac{\\text{Intensitet}}{100}$$

$$\\text{Treningsvekt} = 100 \\text{ kg} \\times \\frac{75}{100} = 75 \\text{ kg}$$

Ole skal bruke 75 kg. Ved 75 % av 1RM kan han typisk utføre 8-12 repetisjoner per sett, noe som er ideelt for hypertrofi (muskelvekst).`,
    },
    {
      id: 'tr-1-4-def-volum',
      type: 'definition',
      title: 'Volum',
      content: 'Volum er den totale mengden arbeid som utføres i en treningsøkt eller treningsperiode. I styrketrening beregnes volum som antall sett × repetisjoner × vekt (volumbelastning). I utholdenhetstrening kan volum måles som total distanse, total tid eller total arbeidsmengde.',
    },
    {
      id: 'tr-1-4-text-volum',
      type: 'text',
      title: 'Volum i praksis',
      content: `Volum og intensitet står i et omvendt forhold til hverandre: jo høyere intensitet, desto lavere volum er mulig (og ønskelig), og omvendt.

**Volumbelastning i styrketrening:**

$$\\text{Volumbelastning} = \\text{sett} \\times \\text{repetisjoner} \\times \\text{vekt (kg)}$$

Eksempel: 4 sett × 8 repetisjoner × 80 kg = 2 560 kg volumbelastning

**Anbefalte volumer:**
- Nybegynnere: 3-6 sett per muskelgruppe per uke
- Middels trente: 6-12 sett per muskelgruppe per uke
- Avanserte: 12-20 sett per muskelgruppe per uke

**Volum i utholdenhetstrening:**
- Nybegynnere: 60-120 minutter per uke
- Mosjonister: 150-300 minutter per uke
- Konkurranseutøvere: 5-20+ timer per uke

**Effektivt volum:** Ikke alt volum gir like god effekt. Forskning tyder på at det finnes et minimalt effektivt volum (under dette skjer lite tilpasning), et optimalt volum (best balanse mellom stimuli og restitusjon), og et maksimalt adaptativt volum (over dette gir mer volum ikke mer fremgang og kan hemme restitusjon).`,
    },
    {
      id: 'tr-1-4-def-frekvens',
      type: 'definition',
      title: 'Frekvens',
      content: 'Treningsfrekvens angir hvor ofte du trener, vanligvis oppgitt som antall treningsøkter per uke. Frekvensen kan referere til totalt antall økter eller til hvor mange ganger en bestemt muskelgruppe eller egenskap trenes per uke.',
    },
    {
      id: 'tr-1-4-text-frekvens',
      type: 'text',
      title: 'Frekvens og varighet',
      content: `**Treningsfrekvens**

Optimal treningsfrekvens avhenger av mål, treningsnivå og restitusjonskapasitet:

| Mål | Anbefalt frekvens |
|-----|-------------------|
| Generell helse | 3-5 økter per uke |
| Styrke (nybegynner) | 2-3 helkroppsøkter per uke |
| Styrke (avansert) | 4-6 økter per uke (splittet) |
| Utholdenhet (mosjonist) | 3-4 økter per uke |
| Utholdenhet (konkurranse) | 5-10+ økter per uke |

**Muskelgruppens frekvens** er minst like viktig som total frekvens. Forskning viser at de fleste har nytte av å trene hver muskelgruppe 2-3 ganger per uke for optimal proteinsynteserespons.

**Varighet**

Varighet er lengden på en treningsøkt. Anbefalingene varierer med mål og intensitet:

- Styrkeøkt: Typisk 45-75 minutter
- Utholdenhetsøkt (moderat): 30-90 minutter
- Utholdenhetsøkt (høy intensitet): 20-45 minutter
- Bevegelighetsøkt: 15-30 minutter

Lange økter (over 90 minutter) kan føre til økt kortisolnivå og redusert treningskvalitet. Det er ofte bedre å fordele treningen på flere kortere økter enn å gjennomføre svært lange økter.`,
    },
    {
      id: 'tr-1-4-def-hvile',
      type: 'definition',
      title: 'Hvile (pausetid)',
      content: 'Hvile refererer til pausetiden mellom sett og øvelser i en treningsøkt, samt tiden mellom treningsøkter (restitusjonstid). Pauselengden påvirker hvilke energisystemer som rekker å restituere og dermed hvilken treningseffekt man oppnår.',
    },
    {
      id: 'tr-1-4-text-hvile',
      type: 'text',
      title: 'Hvile mellom sett og øvelser',
      content: `Pausetiden mellom sett er en viktig, men ofte undervurdert treningsvariabel:

**Korte pauser (30-60 sekunder)**
- Gir stor metabolsk stress (melkesyre, hormoner)
- Egner seg for muskulær utholdenhet og fettforbrenning
- Musklene rekker ikke å restituere fullt ut mellom sett

**Moderate pauser (60-120 sekunder)**
- God balanse mellom metabolsk stress og styrke
- Egner seg for hypertrofi (muskelvekst)
- Delvis restitusjon av energisystemene

**Lange pauser (2-5 minutter)**
- Nesten full restitusjon av kreatinfosfatsystemet
- Egner seg for maksimal styrke og kraft
- Tillater høy kraftutvikling i hvert sett

| Treningsmål | Anbefalt pausetid |
|-------------|-------------------|
| Maksimal styrke | 3-5 minutter |
| Hypertrofi | 60-120 sekunder |
| Muskulær utholdenhet | 30-60 sekunder |
| Kraft/eksplosivitet | 2-5 minutter |

**Hvile mellom økter** styres av superkompensasjonsmodellen. Generelt trenger store muskelgrupper 48-72 timer og små muskelgrupper 24-48 timer for full restitusjon etter moderat til tung styrketrening.`,
    },
    {
      id: 'tr-1-4-example-volum',
      type: 'example',
      title: 'Eksempel: Beregning av treningsvolum',
      problem: 'Ane gjennomfører følgende beinøkt: Knebøy 4 × 8 med 70 kg, beinpress 3 × 12 med 100 kg, og utfall 3 × 10 med 20 kg (i hver hånd, totalt 40 kg). Beregn den totale volumbelastningen for økten.',
      solution: `**Beregning av volumbelastning per øvelse:**

Knebøy: 4 × 8 × 70 kg = 2 240 kg
Beinpress: 3 × 12 × 100 kg = 3 600 kg
Utfall: 3 × 10 × 40 kg = 1 200 kg

**Total volumbelastning:**
$$2\\,240 + 3\\,600 + 1\\,200 = 7\\,040 \\text{ kg}$$

Ane løfter totalt 7 040 kg i denne beinøkten. For å øke volumet neste uke kan hun legge til ett sett, øke repetisjonstallet, eller øke vekten noe.`,
    },
    {
      id: 'tr-1-4-note-sammenheng',
      type: 'note',
      title: 'Variablene henger sammen',
      content: 'De fem treningsvariablene (intensitet, volum, frekvens, varighet og hvile) må alltid ses i sammenheng. Øker du intensiteten betydelig, bør volumet reduseres. Øker du frekvensen, må volumet per økt kanskje senkes. Reduserer du pausetiden, kan du trolig ikke opprettholde like høy intensitet. God treningsplanlegging handler om å finne den riktige balansen mellom alle variablene.',
    },
    {
      id: 'tr-1-4-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Intensitet** (hvor hardt) måles som % av 1RM i styrke eller % av HFmaks i utholdenhet
- **Volum** (hvor mye) beregnes som sett × repetisjoner × vekt i styrketrening
- **Frekvens** (hvor ofte) angir antall økter per uke, optimalt 2-3 ganger per muskelgruppe
- **Varighet** (hvor lenge) er øktens lengde, typisk 45-75 minutter for styrke
- **Hvile** (pausetid) varierer fra 30 sekunder til 5 minutter avhengig av treningsmål
- Variablene må balanseres mot hverandre for optimal treningseffekt`,
    },
  ],
  exercises: [
    {
      id: 'tr-1-4-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva angir treningsintensitet?',
      options: [
        { id: 'a', text: 'Hvor hardt du trener i forhold til maksimal kapasitet', isCorrect: true },
        { id: 'b', text: 'Hvor mange timer du trener per uke', isCorrect: false },
        { id: 'c', text: 'Antall øvelser i en treningsøkt', isCorrect: false },
        { id: 'd', text: 'Hvor motivert du er for å trene', isCorrect: false },
      ],
      solution: 'Intensitet angir hvor hardt du trener i forhold til din maksimale kapasitet. I styrketrening måles det ofte som prosent av 1RM, og i utholdenhetstrening som prosent av HFmaks eller VO₂maks.',
    },
    {
      id: 'tr-1-4-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken pausetid anbefales for trening med mål om maksimal styrke?',
      options: [
        { id: 'a', text: '3-5 minutter', isCorrect: true },
        { id: 'b', text: '30-60 sekunder', isCorrect: false },
        { id: 'c', text: '60-90 sekunder', isCorrect: false },
        { id: 'd', text: '10-15 minutter', isCorrect: false },
      ],
      solution: 'Ved trening for maksimal styrke anbefales lange pauser på 3-5 minutter. Dette gir nesten full restitusjon av kreatinfosfatsystemet, slik at utøveren kan utvikle høy kraft i hvert sett.',
    },
    {
      id: 'tr-1-4-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'En utøver trener benkpress med 80 kg i 4 sett med 10 repetisjoner. Hva er den totale volumbelastningen?',
      options: [
        { id: 'a', text: '3 200 kg', isCorrect: true },
        { id: 'b', text: '800 kg', isCorrect: false },
        { id: 'c', text: '320 kg', isCorrect: false },
        { id: 'd', text: '4 000 kg', isCorrect: false },
      ],
      solution: 'Volumbelastning = sett × repetisjoner × vekt = 4 × 10 × 80 kg = 3 200 kg. Dette er et vanlig mål for å sammenligne treningsvolum mellom økter og over tid.',
    },
    {
      id: 'tr-1-4-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar sammenhengen mellom intensitet og volum. Hvorfor kan man ikke ha både svært høy intensitet og svært høyt volum i samme økt?',
      solution: 'Intensitet og volum har et omvendt forhold. Ved høy intensitet (f.eks. 90 % av 1RM) kan kroppen bare utføre få repetisjoner per sett før muskulaturen er utmattet. Nervesystemet belastes tungt, og energilagrene (spesielt kreatinfosfat) tømmes raskt. Det er fysisk umulig å utføre mange repetisjoner med nær-maksimal vekt.\n\nVed lav intensitet (f.eks. 50 % av 1RM) kan man utføre mange repetisjoner fordi belastningen per repetisjon er lav. Muskulaturen utmattes saktere, og energisystemene rekker delvis å restituere.\n\nI treningsplanlegging betyr dette at man velger enten høy intensitet med lavt volum (for styrke/kraft) eller lavere intensitet med høyere volum (for hypertrofi/utholdenhet). Å forsøke begge samtidig fører til for høy totalbelastning, dårlig teknikk og økt skaderisiko.',
    },
    {
      id: 'tr-1-4-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Mari har 1RM på 80 kg i knebøy. Lag et eksempel på ett styrketreningssett som er tilpasset henholdsvis a) maksimal styrke, b) hypertrofi, og c) muskulær utholdenhet. Oppgi intensitet, antall repetisjoner og pausetid for hvert alternativ.',
      solution: '**a) Maksimal styrke:**\n- Intensitet: 90 % av 1RM = 72 kg\n- Repetisjoner: 3 per sett\n- Pausetid: 3-5 minutter\n- Begrunnelse: Høy belastning med få repetisjoner rekrutterer flest motoriske enheter og trener nervesystemets evne til kraftutvikling.\n\n**b) Hypertrofi (muskelvekst):**\n- Intensitet: 75 % av 1RM = 60 kg\n- Repetisjoner: 8-10 per sett\n- Pausetid: 60-120 sekunder\n- Begrunnelse: Moderat belastning med tilstrekkelig volum gir optimal mekanisk spenning og metabolsk stress for muskelvekst.\n\n**c) Muskulær utholdenhet:**\n- Intensitet: 55 % av 1RM = 44 kg\n- Repetisjoner: 15-20 per sett\n- Pausetid: 30-60 sekunder\n- Begrunnelse: Lav belastning med høyt repetisjonstall og korte pauser trener musklenes evne til å opprettholde arbeid over tid.',
    },
    {
      id: 'tr-1-4-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Du skal planlegge en treningsuke for en mosjonist som ønsker å trene styrke og utholdenhet. Bruk kunnskapen om treningsvariabler til å sette opp en ukeplan med anbefalt frekvens, intensitet, volum og pausetider. Begrunn valgene dine.',
      solution: '**Treningsuke for mosjonist:**\n\n**Mandag - Styrke (overkropp)**\n- Intensitet: 70-80 % av 1RM\n- Volum: 3-4 øvelser, 3 sett × 8-12 repetisjoner\n- Pausetid: 90-120 sekunder\n- Varighet: Ca. 50 minutter\n\n**Tirsdag - Utholdenhet (moderat)**\n- Intensitet: 60-70 % av HFmaks (sone 2)\n- Volum: 30-40 minutter sammenhengende\n- Eksempel: Rolig jogging eller sykling\n\n**Onsdag - Hviledag** (evt. lett tøying/gåtur)\n\n**Torsdag - Styrke (underkropp)**\n- Intensitet: 70-80 % av 1RM\n- Volum: 3-4 øvelser, 3 sett × 8-12 repetisjoner\n- Pausetid: 90-120 sekunder\n- Varighet: Ca. 50 minutter\n\n**Fredag - Utholdenhet (intervall)**\n- Intensitet: 80-90 % av HFmaks (sone 4)\n- Volum: 4 × 4 minutter med 3 minutter pause\n- Varighet: Ca. 35 minutter inkl. oppvarming\n\n**Lørdag/søndag - Hviledag + evt. lavintensiv aktivitet**\n\n**Begrunnelse:** Frekvensen (4 økter) er tilstrekkelig for mosjonister. Styrke trenes 2 ganger per uke med splittet overkropp/underkropp for 48-72 timers restitusjon per muskelgruppe. Utholdenhet varieres mellom moderat og høy intensitet for allsidig utvikling. Hviledag mellom styrkeøktene sikrer restitusjon.',
    },
  ],
  keyTerms: [],
};

// ============================================================================
// Kapittel 1.5: Treningsformer
// ============================================================================

export const CHAPTER_TRENING_1_1_5: TextbookChapter = {
  id: 'trening-1-1-5',
  courseId: 'trening-1',
  chapterNumber: '1.5',
  title: 'Treningsformer',
  description: 'De fem hovedformene for trening: styrke, utholdenhet, bevegelighet, hurtighet og koordinasjon, med metoder og praktiske eksempler.',
  estimatedMinutes: 25,
  competenceGoals: [
    'beskrive de fem hovedformene for trening og deres fysiologiske grunnlag',
    'kjenne til ulike treningsmetoder innenfor hver treningsform',
    'forstå hvordan de ulike treningsformene utfyller hverandre',
  ],
  content: [
    {
      id: 'tr-1-5-intro',
      type: 'text',
      content: `# Treningsformer

Fysisk form er sammensatt av flere komponenter, og trening kan deles inn i ulike former etter hvilken komponent som er hovedfokus. De fem grunnleggende treningsformene er styrke, utholdenhet, bevegelighet, hurtighet og koordinasjon.

I dette kapittelet skal du lære:

- Hva som kjennetegner de fem treningsformene
- Hvilke metoder som brukes innenfor hver form
- Hvordan de ulike formene henger sammen og utfyller hverandre`,
    },
    {
      id: 'tr-1-5-def-styrke',
      type: 'definition',
      title: 'Styrketrening',
      content: 'Styrketrening er trening som har som mål å øke muskulaturens evne til å utvikle kraft. Dette oppnås ved å belaste musklene med motstand (vekter, kroppsvekt, strikker eller maskiner) gjennom gjentatte repetisjoner. Styrketrening gir adaptasjoner både i nervesystemet (bedre rekruttering av motoriske enheter) og i selve muskelvevet (hypertrofi).',
    },
    {
      id: 'tr-1-5-text-styrke',
      type: 'text',
      title: 'Styrketrening',
      content: `Styrke kan deles inn i flere underkategorier:

**Maksimal styrke** er den største kraften en muskel eller muskelgruppe kan utvikle i én enkelt kontraksjon. Trenes med tung belastning (85-100 % av 1RM) og få repetisjoner (1-5). Hovedsakelig nervøse tilpasninger.

**Hypertrofi** (muskelvekst) handler om å øke muskelens tverrsnittsareal. Trenes med moderat belastning (65-80 % av 1RM) og 6-12 repetisjoner. Mekanisk spenning og metabolsk stress driver muskelveksten.

**Muskulær utholdenhet** er muskelens evne til å opprettholde kraftutvikling over tid. Trenes med lett belastning (under 65 % av 1RM) og høyt repetisjonstall (15+).

**Eksplosiv styrke (power)** er evnen til å utvikle stor kraft på kort tid. Trenes med moderat belastning og høy bevegelseshastighet (olympiske løft, kastserie, plyometri).

**Treningsmetoder for styrke:**
- Frivekter (manualer, vektstang) - krever stabilisering, funksjonelt
- Maskiner - isolerer muskelgrupper, tryggere for nybegynnere
- Kroppsvektøvelser - tilgjengelig overalt, god for grunnstyrke
- Strikker og slynger - varierende motstand, reisetrening`,
    },
    {
      id: 'tr-1-5-def-utholdenhet',
      type: 'definition',
      title: 'Utholdenhetstrening',
      content: 'Utholdenhetstrening er trening som forbedrer kroppens evne til å opprettholde fysisk arbeid over tid. Dette innebærer tilpasninger i hjerte-kar-systemet (økt slagvolum, flere kapillærer), respirasjonssystemet (bedre gassutveksling) og muskulaturen (flere mitokondrier, økt fettsyreoksidasjon).',
    },
    {
      id: 'tr-1-5-text-utholdenhet',
      type: 'text',
      title: 'Utholdenhetstrening',
      content: `Utholdenhet kan deles inn etter energisystem og varighet:

**Aerob utholdenhet** er evnen til å arbeide over lang tid med oksygentilgang. VO₂maks (maksimalt oksygenopptak) er det viktigste målet på aerob kapasitet. Trenes ved moderat til høy intensitet.

**Anaerob utholdenhet** er evnen til å arbeide intenst i kortere perioder (opp til ca. 2 minutter) uten tilstrekkelig oksygentilførsel. Laktattoleranse og anaerob kapasitet er sentrale faktorer.

**Treningsmetoder for utholdenhet:**

**Langkjøring (kontinuerlig trening)**
- Lav til moderat intensitet (60-75 % av HFmaks)
- Lang varighet (30-90 minutter)
- Bygger aerob grunnkapasitet og fettforbrenning

**Intervalltrening**
- Veksling mellom høy intensitet og aktiv pause
- Korte intervaller: 15-60 sekunder arbeid (90-100 % av HFmaks)
- Lange intervaller: 3-8 minutter arbeid (85-95 % av HFmaks)
- Effektivt for å øke VO₂maks og anaerob terskel

**Terskeltrening**
- Trening rundt anaerob terskel (ca. 85 % av HFmaks)
- Typisk 20-40 minutter sammenhengende
- Forbedrer melkesyretoleranse og løpsøkonomi

**Fartlek**
- Ustrukturert variasjon i intensitet, ofte i terreng
- Kombinerer aerobe og anaerobe belastninger
- Variert og motiverende treningsform`,
    },
    {
      id: 'tr-1-5-def-bevegelighet',
      type: 'definition',
      title: 'Bevegelighet',
      content: 'Bevegelighet (fleksibilitet) er evnen til å bevege ledd gjennom hele det anatomisk mulige bevegelsesutslaget. Bevegelighet avhenger av muskel- og senevev, leddkapsler, bindevev og nervesystemets toleranse for strekk. God bevegelighet er viktig for bevegelseskvalitet, prestasjonsevne og skadeforebygging.',
    },
    {
      id: 'tr-1-5-text-bevegelighet',
      type: 'text',
      title: 'Bevegelighetstrening',
      content: `Bevegelighetstrening handler om å opprettholde eller øke leddenes bevegelsesutslag:

**Statisk tøying**
- Hold en stretchstilling i 15-60 sekunder
- 2-4 repetisjoner per muskelgruppe
- Trygg og effektiv for å øke bevegelighet
- Best utført etter trening eller som egen økt

**Dynamisk tøying**
- Kontrollerte bevegelser gjennom hele bevegelsesutslaget
- 10-15 repetisjoner per bevegelse
- Egner seg godt som oppvarming
- Aktiverer muskulaturen samtidig som bevegelsesutslaget utforskes

**PNF-tøying (Proprioceptiv Nevromuskulær Fasilitering)**
- Veksling mellom kontraksjon og avspenning
- Hold-slipp-strekk-metode
- Svært effektiv for å øke bevegelighet
- Krever ofte en partner

**Yoga og mobilitetstrening**
- Kombinerer bevegelighet med styrke og kroppskontroll
- Fokuserer på funksjonell bevegelighet i sammensatte bevegelser
- Inkluderer pusteøvelser og mental trening

**Tips:** Tøying bør gjøres på oppvarmet muskulatur. Kald muskulatur er stivere og har høyere risiko for skade ved strekk.`,
    },
    {
      id: 'tr-1-5-def-hurtighet',
      type: 'definition',
      title: 'Hurtighet',
      content: 'Hurtighet er evnen til å utføre bevegelser med høy hastighet. Hurtighet er avhengig av nervesystemets evne til å sende raske signaler, muskelfibrenes kontraksjonstid (andel type II-fibre), kraft og teknikk. Hurtighet er i stor grad genetisk bestemt, men kan forbedres med målrettet trening.',
    },
    {
      id: 'tr-1-5-text-hurtighet',
      type: 'text',
      title: 'Hurtighetstrening',
      content: `Hurtighet kan deles inn i flere kategorier:

**Reaksjonshurtighet** er evnen til å reagere raskt på et signal (visuelt, auditivt eller taktilt). Viktig i ballspill og startsituasjoner.

**Akselerasjonshurtighet** er evnen til å nå høy fart raskt fra stillstand. Avhenger av eksplosiv styrke og teknikk.

**Maksimal hurtighet** er den høyeste hastigheten som kan oppnås. Avhenger av skrittlengde, skrittfrekvens og løpsteknikk.

**Retningsforandringshurtighet (agility)** er evnen til å endre retning raskt under fart. Krever både fart, styrke og koordinasjon.

**Treningsmetoder for hurtighet:**
- Sprinttrening over korte distanser (10-60 m)
- Reaksjonsøvelser med ulike stimuli
- Agility-øvelser med retningsforandringer
- Plyometrisk trening for eksplosiv kraft
- Motstandsspurt (med bremse, slede eller bakke)

**Viktig:** Hurtighetstrening krever full restitusjon mellom forsøk (2-5 minutter pause). Trening på trett nervesystem trener utholdenhet, ikke hurtighet.`,
    },
    {
      id: 'tr-1-5-def-koordinasjon',
      type: 'definition',
      title: 'Koordinasjon',
      content: 'Koordinasjon er nervesystemets evne til å styre og samordne bevegelser presist og effektivt. God koordinasjon innebærer at riktige muskler aktiveres i riktig rekkefølge, med riktig kraft og timing. Koordinasjon er grunnlaget for all bevegelseskompetanse og teknisk ferdighet i idrett.',
    },
    {
      id: 'tr-1-5-text-koordinasjon',
      type: 'text',
      title: 'Koordinasjonstrening',
      content: `Koordinasjon kan deles inn i flere delkomponenter:

**Balanse** - evnen til å holde og gjenvinne likevekt, både i ro (statisk balanse) og i bevegelse (dynamisk balanse).

**Rytme** - evnen til å tilpasse bevegelser til en ytre eller indre rytme, viktig i dans, løping og ballspill.

**Romorienteringsevne** - evnen til å orientere seg i rommet og vurdere avstander, vinkler og posisjoner.

**Differensieringsevne** - evnen til å dosere kraft og bevegelse presist, for eksempel å kaste en ball nøyaktig til et mål.

**Kopplingsevne** - evnen til å koordinere bevegelser mellom ulike kroppsdeler samtidig.

**Treningsmetoder for koordinasjon:**
- Øvelser med varierte og ukjente bevegelsesmønstre
- Balanseøvelser (balansebrett, ett ben, ustabilt underlag)
- Øvelser som krever simultane bevegelser (jonglering, stigeøvelser)
- Idrettsspesifikke ferdighetsøvelser
- Lek og improvisasjon som utfordrer tilpasningsevne

**Gullalder for koordinasjon:** Barn utvikler koordinasjon raskest mellom 6 og 12 år. I denne perioden bør treningen være variert og lekpreget for å bygge et bredt bevegelsesrepertoar.`,
    },
    {
      id: 'tr-1-5-note-allsidighet',
      type: 'note',
      title: 'Allsidig trening',
      content: 'De fem treningsformene utfyller hverandre. Styrke gir grunnlag for hurtighet og eksplosivitet. Utholdenhet gir evne til å opprettholde prestasjon over tid og restituere mellom intense perioder. Bevegelighet sikrer optimalt bevegelsesutslag og forebygger skader. Hurtighet og koordinasjon gir ferdigheter som kan brukes i idrett og dagligliv. Et godt treningsprogram inkluderer elementer av alle fem formene, med vekting etter individuelle mål.',
    },
    {
      id: 'tr-1-5-example-kombinasjon',
      type: 'example',
      title: 'Eksempel: Treningsformer i fotball',
      problem: 'Forklar hvilke av de fem treningsformene som er viktige for en fotballspiller, og gi eksempler på øvelser innenfor hver form.',
      solution: `En fotballspiller trenger alle fem treningsformer:

**Styrke:** Beinpress, knebøy og core-øvelser for skuddkraft, duellstyrke og skadeforebygging.

**Utholdenhet:** Langkjøring for aerob base, intervalltrening (4 × 4 minutter) for VO₂maks, og gjentatte sprinter for anaerob kapasitet.

**Bevegelighet:** Dynamisk tøying av hoftefleksorer, hamstrings og leggmuskulatur for optimalt bevegelsesutslag i sparking og løping.

**Hurtighet:** Akselerasjonssprinter (10-30 m), retningsforandringsøvelser med kjegler, og reaksjonsøvelser med ball.

**Koordinasjon:** Ballbehandling, finter, pasningsspill, og øvelser som kombinerer løping med ballkontakt.

Fordelingen mellom formene avhenger av sesongfase og individuelle behov.`,
    },
    {
      id: 'tr-1-5-oppsummering',
      type: 'text',
      content: `## Oppsummering

- **Styrketrening** øker musklenes evne til kraftutvikling (metoder: frivekter, maskiner, kroppsvekt)
- **Utholdenhetstrening** forbedrer evnen til å arbeide over tid (metoder: langkjøring, intervall, terskel, fartlek)
- **Bevegelighetstrening** opprettholder eller øker leddenes bevegelsesutslag (metoder: statisk, dynamisk, PNF)
- **Hurtighetstrening** utvikler evnen til raske bevegelser (metoder: sprint, reaksjon, agility, plyometri)
- **Koordinasjonstrening** forbedrer bevegelsespresisjonen og kroppsstyringen (metoder: balanseøvelser, ferdighetsøvelser, lek)
- Et godt treningsprogram inkluderer elementer av alle fem treningsformene`,
    },
  ],
  exercises: [
    {
      id: 'tr-1-5-ex1',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hvilken treningsform har som mål å øke muskulaturens evne til å utvikle kraft?',
      options: [
        { id: 'a', text: 'Styrketrening', isCorrect: true },
        { id: 'b', text: 'Utholdenhetstrening', isCorrect: false },
        { id: 'c', text: 'Bevegelighetstrening', isCorrect: false },
        { id: 'd', text: 'Koordinasjonstrening', isCorrect: false },
      ],
      solution: 'Styrketrening har som hovedmål å øke muskulaturens evne til å utvikle kraft. Dette oppnås ved å belaste musklene med motstand gjennom gjentatte repetisjoner, noe som gir adaptasjoner i nervesystemet og muskelvevet.',
    },
    {
      id: 'tr-1-5-ex2',
      type: 'multiple-choice',
      difficulty: 'lett',
      task: 'Hva kjennetegner intervalltrening?',
      options: [
        { id: 'a', text: 'Veksling mellom perioder med høy intensitet og aktive pauser', isCorrect: true },
        { id: 'b', text: 'Sammenhengende løping med jevn intensitet', isCorrect: false },
        { id: 'c', text: 'Statisk tøying i 30 sekunder per muskelgruppe', isCorrect: false },
        { id: 'd', text: 'Tung styrketrening med lange pauser', isCorrect: false },
      ],
      solution: 'Intervalltrening kjennetegnes av systematisk veksling mellom perioder med høy intensitet (arbeidsperioder) og perioder med lavere intensitet eller hvile (pauseperioder). Metoden er svært effektiv for å forbedre VO₂maks og anaerob terskel.',
    },
    {
      id: 'tr-1-5-ex3',
      type: 'multiple-choice',
      difficulty: 'medium',
      task: 'Hvilken tøyemetode bruker veksling mellom kontraksjon og avspenning for å øke bevegeligheten?',
      options: [
        { id: 'a', text: 'PNF-tøying', isCorrect: true },
        { id: 'b', text: 'Statisk tøying', isCorrect: false },
        { id: 'c', text: 'Dynamisk tøying', isCorrect: false },
        { id: 'd', text: 'Ballistisk tøying', isCorrect: false },
      ],
      solution: 'PNF-tøying (Proprioceptiv Nevromuskulær Fasilitering) bruker en hold-slipp-strekk-metode der muskelen først kontraheres isometrisk, deretter slappes av, og til slutt strekkes videre. Denne metoden er svært effektiv for å øke bevegelighet.',
    },
    {
      id: 'tr-1-5-ex4',
      type: 'classic',
      difficulty: 'medium',
      task: 'Forklar forskjellen mellom aerob og anaerob utholdenhet, og gi en treningsmetode som er egnet for hver.',
      solution: '**Aerob utholdenhet** er evnen til å arbeide over lang tid med tilstrekkelig oksygentilgang. Energien kommer hovedsakelig fra aerob forbrenning av karbohydrater og fett i mitokondriene. VO₂maks er det viktigste målet.\n- **Egnet treningsmetode:** Langkjøring med moderat intensitet (60-75 % av HFmaks) i 30-60 minutter. Bygger aerob grunnkapasitet, øker antall mitokondrier og kapillærer.\n\n**Anaerob utholdenhet** er evnen til å arbeide med høy intensitet i kortere perioder (opptil ca. 2 minutter) uten tilstrekkelig oksygentilførsel. Energien kommer fra anaerob glykolyse, og melkesyre akkumuleres.\n- **Egnet treningsmetode:** Korte intervaller med høy intensitet, for eksempel 8 × 30 sekunder sprint med 90 sekunders pause. Trener laktattoleranse og anaerob kapasitet.',
    },
    {
      id: 'tr-1-5-ex5',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Diskuter hvorfor hurtighetstrening krever full restitusjon mellom forsøk. Hva skjer fysiologisk dersom man trener hurtighet på et utslitt nervesystem?',
      solution: 'Hurtighetstrening stiller svært høye krav til nervesystemets signalhastighet og muskelfibrenes kontraksjonsrate. Under maksimal sprint sendes nervesignaler med høy frekvens til type II-muskelfibre (hurtige fibre) for å oppnå rask og kraftfull kontraksjon.\n\n**Hvorfor full restitusjon er nødvendig:**\n- Kreatinfosfatsystemet (ATP-CP) brukes opp på 5-10 sekunder og trenger 2-5 minutter for full gjenoppfylling\n- Nervesystemet trenger tid til å restituere mellom maksimale aktiveringer\n- Muskelfibrer rekrutteres optimalt kun når nervesystemet er uthvilt\n\n**Trening på utslitt nervesystem:**\n- Bevegelseshastigheten synker fordi nervesystemet ikke kan sende signaler raskt nok\n- Kroppen kompenserer ved å rekruttere type I-fibre (langsomme) i stedet for type II\n- Man trener da reelt sett anaerob utholdenhet eller muskulær utholdenhet - ikke hurtighet\n- Bevegelsesmønsteret kan bli upresist og ineffektivt, noe som kan "programmere inn" dårlig teknikk\n- Risikoen for muskelskader øker ved submaksimal sprint på trett muskulatur\n\nDerfor er det bedre å gjøre færre repetisjoner med full innsats og full restitusjon enn mange repetisjoner med dalende kvalitet.',
    },
    {
      id: 'tr-1-5-ex6',
      type: 'classic',
      difficulty: 'vanskelig',
      task: 'Lag en kortfattet treningsplan for en uke som inkluderer alle fem treningsformene. Forklar hvorfor du har fordelt formene slik du har gjort, og hvordan de utfyller hverandre.',
      solution: '**Treningsplan for én uke:**\n\n**Mandag: Styrke + bevegelighet**\nStyrkeøkt (60 min): Knebøy, benkpress, roing, skulderpress, core. 3 sett × 8-12 reps.\nStatisk tøying etter økten (15 min): Alle store muskelgrupper.\n*Begrunnelse:* Styrke legges tidlig i uken når kroppen er uthvilt. Tøying etter er effektivt på oppvarmet muskulatur.\n\n**Tirsdag: Utholdenhet (langkjøring)**\n40 minutter rolig løping (65-70 % av HFmaks).\n*Begrunnelse:* Aerob base trenes med lav intensitet dagen etter styrke for å ikke hemme restitusjon for styrke.\n\n**Onsdag: Koordinasjon + hurtighet**\nOppvarming med koordinasjonsøvelser (15 min): Stigeøvelser, balanse, jonglering.\nHurtighetstrening (20 min): 6 × 30 m sprint med 3 min pause, agility-øvelser.\n*Begrunnelse:* Hurtighet og koordinasjon trenes på uthvilt nervesystem. Kombineres fordi begge krever friskt nervesystem og kompletterer hverandre.\n\n**Torsdag: Hviledag** (lett gåtur som aktiv restitusjon)\n\n**Fredag: Styrke + bevegelighet**\nStyrkeøkt (60 min): Markløft, militærpress, lunges, chins, core. 3 sett × 8-12 reps.\nDynamisk mobilitet og tøying (15 min).\n\n**Lørdag: Utholdenhet (intervall)**\n4 × 4 min intervaller på 85-90 % av HFmaks, 3 min aktiv pause.\n*Begrunnelse:* Intervall legges til lørdag for å ha restitusjon søndag etter. Varierer utholdenhetstreningen fra tirsdagens langkjøring.\n\n**Søndag: Hviledag**\n\n**Helhetlig begrunnelse:** Styrke trenes 2 ganger per uke med 2 dagers mellomrom for restitusjon. Hurtighet legges etter hviledag for ferskt nervesystem. Utholdenhet varieres mellom langkjøring og intervall. Bevegelighet integreres i styrkeøktene. To fulle hviledager sikrer total restitusjon.',
    },
  ],
  keyTerms: [],
};

// ============================================================================
// Eksport av alle kapitler i Seksjon 1
// ============================================================================

export const TRENING_1_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_TRENING_1_1_1,
  CHAPTER_TRENING_1_1_2,
  CHAPTER_TRENING_1_1_3,
  CHAPTER_TRENING_1_1_4,
  CHAPTER_TRENING_1_1_5,
];
