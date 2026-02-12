/* eslint-disable */
// @ts-nocheck
/**
 * Frisør, blomster, interiør og eksponeringsdesign VG1 - Del 1: Frisørfaget
 * Kapittel 1.1-1.7
 */
import type { TextbookChapter } from '@/lib/types/textbook';

// ============================================================================
// KAPITTEL 1.1: Hår og hodebunnens oppbygning
// ============================================================================

export const CHAPTER_FB_VG1_1_1: TextbookChapter = {
  id: 'frisor-blomster-vg1-1-1',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '1.1',
  title: 'Hår og hodebunnens oppbygning',
  description: 'Lær om hårets struktur, ulike hårtyper og hårets vekstsyklus for å forstå grunnlaget for alt frisørarbeid.',
  estimatedMinutes: 45,
  competenceGoals: ['innhente og anvende kunnskap om materialer og produkters egenskaper i eget arbeid'],
  content: [
    {
      id: 'fb-1-1-intro',
      type: 'text',
      content: `## Hår og hodebunnens oppbygning

For å kunne jobbe profesjonelt med hår må du forstå hvordan håret og hodebunnen er bygd opp. Denne kunnskapen er grunnlaget for å velge riktige produkter, verktøy og behandlingsmetoder. Uansett om du skal klippe, farge eller style hår, må du vite hva du jobber med.

Et gjennomsnittlig menneske har mellom 80 000 og 120 000 hårstrå på hodet. Hvert hårstrå er en levende struktur som vokser fra en hårsekk (follikkel) i huden. Hårets tykkelse, farge og form varierer fra person til person, og påvirkes av genetikk, helse og alder.`,
    },
    {
      id: 'fb-1-1-def-1',
      type: 'definition',
      title: 'Hårets tre lag',
      content: `**Håret** består av tre lag, fra ytterst til innerst:

- **Kutikula (hårets ytre lag):** Består av flate, overlappende celler som ligner takstein. Beskytter hårets indre og gir glans når lagene ligger flatt.
- **Korteks (barklag):** Det tykkeste laget, som inneholder melanin (fargestoff) og keratinfibre. Gir håret styrke, elastisitet og farge.
- **Medulla (marg):** Det innerste laget, som finnes i tykkere hårstrå. Ikke alle hår har medulla.`,
    },
    {
      id: 'fb-1-1-text-1',
      type: 'text',
      content: `### Hodebunnens oppbygning

Hodebunnen er huden som dekker skallen, og den har en spesiell struktur som er viktig for hårvekst:

**Epidermis (overhuden):** Det ytterste laget som beskytter mot ytre påvirkninger. Cellene fornyes konstant.

**Dermis (lærhuden):** Inneholder blodkar, nerver og talgkjertler. Her ligger også hårsekken (follikkel) som produserer hårstrået.

**Subkutis (underhuden):** Det dypeste laget med fettvev som isolerer og beskytter.

Hodebunnen har mange talgkjertler som produserer talg (sebum). Talg smører håret naturlig og beskytter mot uttørking. Balansen i talgproduksjonen påvirker om hodebunnen er normal, tørr eller fet.`,
    },
    {
      id: 'fb-1-1-def-2',
      type: 'definition',
      title: 'Hårsekken (follikkel)',
      content: `**Hårsekken** er den rørformede strukturen i huden som hårstrået vokser fra. I bunnen av hårsekken finnes **hårløken (papillen)**, som inneholder blodkar som tilfører næring. Formen på hårsekken avgjør om håret blir rett, bølget eller krøllete:

- **Rund follikkel** → Rett hår
- **Oval follikkel** → Bølget hår
- **Flat/elliptisk follikkel** → Krøllete hår`,
    },
    {
      id: 'fb-1-1-text-2',
      type: 'text',
      content: `### Hårtyper

Hår klassifiseres gjerne etter tykkelse, tekstur og krøllemønster:

**Etter tykkelse:**
- **Fint hår:** Tynt hårstrå med liten diameter. Kan virke slapt og mangler volum.
- **Middels hår:** Normal tykkelse. Den vanligste hårtypen.
- **Tykt hår:** Stor diameter på hårstrået. Kan være vanskeligere å forme og style.

**Etter tekstur og krøllemønster:**
- **Type 1 – Rett hår:** Glatt og uten bølger. Reflekterer mye lys og kan virke glansfullt.
- **Type 2 – Bølget hår:** S-formet bølgemønster. Varierer fra lett bølget til tydelige bølger.
- **Type 3 – Krøllete hår:** Spiralformede krøller. Trenger ofte ekstra fuktighet.
- **Type 4 – Afrohår:** Svært tette, Z-formede krøller. Det skjøreste håret som trenger skånsom behandling.`,
    },
    {
      id: 'fb-1-1-text-3',
      type: 'text',
      content: `### Hårets vekstsyklus

Hvert hårstrå gjennomgår en syklus med tre faser:

**1. Anagenfasen (vekstfasen)**
- Håret vokser aktivt fra hårsekken
- Varer 2–7 år for hodehår
- Ca. 85–90 % av håret er i denne fasen til enhver tid
- Håret vokser ca. 1–1,5 cm per måned

**2. Katagenfasen (overgangsfasen)**
- Hårveksten stopper
- Hårsekken krymper
- Varer ca. 2–3 uker
- Ca. 1–2 % av håret er i denne fasen

**3. Telogenfasen (hvilefasen)**
- Håret sitter løst i hårsekken
- Et nytt hår begynner å dannes under det gamle
- Varer ca. 3–4 måneder
- Ca. 10–15 % av håret er i denne fasen
- Det er normalt å miste 50–100 hårstrå per dag

Stress, sykdom, hormonelle endringer og kosthold kan påvirke hårets vekstsyklus og føre til økt hårtap.`,
    },
    {
      id: 'fb-1-1-example-1',
      type: 'example',
      title: 'Eksempel: Vurdere hårtype',
      content: `**Situasjon:** En kunde kommer inn og ønsker råd om produkter. Du observerer at håret er tynt, glatt og uten krøller, men virker tørt i tuppene.

**Vurdering:**
- **Tykkelse:** Fint hår (liten diameter)
- **Tekstur:** Type 1 – Rett hår
- **Tilstand:** Tørre tupper tyder på at kutikula er skadet i tuppene

**Anbefaling:** Lett fuktighetsbalsam i tuppene, unngå tunge produkter som tynger ned fint hår. Anbefal volumgivende sjampo og balsam kun i lengdene.`,
    },
    {
      id: 'fb-1-1-summary',
      type: 'text',
      content: `## Oppsummering

- Håret består av tre lag: kutikula (ytre), korteks (bark) og medulla (marg).
- Hodebunnen har tre lag: epidermis, dermis og subkutis.
- Hårsekken (follikkel) produserer hårstrået, og formen på den bestemmer om håret blir rett, bølget eller krøllete.
- Hår klassifiseres etter tykkelse (fint, middels, tykt) og krøllemønster (type 1–4).
- Hårets vekstsyklus har tre faser: anagen (vekst), katagen (overgang) og telogen (hvile).
- Forståelse av hår og hodebunnens oppbygning er grunnlaget for å velge riktige produkter og behandlinger.`,
    },
  ],
  exercises: [
    {
      id: 'fb-1-1-ex-1',
      type: 'multiple-choice',
      question: 'Hva heter det ytterste laget av hårstrået?',
      options: ['Kutikula', 'Korteks', 'Medulla', 'Follikkel'],
      correctAnswer: 0,
      explanation: 'Kutikula er det ytterste laget av hårstrået, og består av flate, overlappende celler som beskytter hårets indre.',
    },
    {
      id: 'fb-1-1-ex-2',
      type: 'multiple-choice',
      question: 'Hvilken fase av hårets vekstsyklus er den lengste?',
      options: ['Anagenfasen (vekstfasen)', 'Katagenfasen (overgangsfasen)', 'Telogenfasen (hvilefasen)', 'Alle fasene er like lange'],
      correctAnswer: 0,
      explanation: 'Anagenfasen er den lengste fasen og varer 2–7 år for hodehår. Ca. 85–90 % av håret er i denne fasen til enhver tid.',
    },
    {
      id: 'fb-1-1-ex-3',
      type: 'multiple-choice',
      question: 'Hva bestemmer om håret blir rett, bølget eller krøllete?',
      options: ['Formen på hårsekken (follikkel)', 'Mengden melanin i håret', 'Tykkelsen på kutikula', 'Antall talgkjertler i hodebunnen'],
      correctAnswer: 0,
      explanation: 'Formen på hårsekken bestemmer hårets krøllemønster. En rund follikkel gir rett hår, en oval gir bølget hår, og en flat/elliptisk gir krøllete hår.',
    },
    {
      id: 'fb-1-1-ex-4',
      type: 'classic',
      task: 'Forklar med egne ord hva de tre lagene i hårstrået heter, og hva hvert lag gjør. Beskriv også hvorfor det er viktig for en frisør å kjenne til denne oppbygningen.',
      solution: 'Kutikula er det ytre beskyttelseslaget, korteks gir styrke og farge, og medulla er det innerste laget. En frisør trenger denne kunnskapen for å velge riktige produkter og behandlinger, for eksempel for å forstå hvordan farge trenger inn i håret via kutikula.',
    },
    {
      id: 'fb-1-1-ex-5',
      type: 'classic',
      task: 'En kunde forteller at hun mister mye hår i høstmånedene og er bekymret for hårtap. Bruk kunnskapen din om hårets vekstsyklus til å forklare hva som kan være årsaken, og gi kunden tryggende informasjon.',
      solution: 'Det er normalt å miste 50–100 hårstrå per dag. Sesongvariasjon kan føre til noe mer hårtap, spesielt om høsten. Mange hårstrå som var i telogenfasen (hvilefasen) faller ut samtidig. Hvis hårtapet er betydelig over tid, bør kunden oppsøke lege for å sjekke for eventuelle underliggende årsaker som stress eller ernæringsmangler.',
    },
  ],
  keyTerms: [
    { term: 'Kutikula', definition: 'Det ytterste beskyttende laget av hårstrået, bestående av overlappende flate celler.' },
    { term: 'Korteks', definition: 'Det midtre og tykkeste laget i hårstrået, som inneholder melanin og keratinfibre.' },
    { term: 'Follikkel', definition: 'Hårsekken i huden som hårstrået vokser fra.' },
    { term: 'Anagenfasen', definition: 'Hårets vekstfase, som varer 2–7 år for hodehår.' },
    { term: 'Melanin', definition: 'Fargestoff i hårets korteks som gir håret dets naturlige farge.' },
  ],
};

// ============================================================================
// KAPITTEL 1.2: Vasking, pleie og behandling av hår
// ============================================================================

export const CHAPTER_FB_VG1_1_2: TextbookChapter = {
  id: 'frisor-blomster-vg1-1-2',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '1.2',
  title: 'Vasking, pleie og behandling av hår',
  description: 'Lær om riktig hårvask, pleiebehandlinger og produktvalg for ulike hårtyper og hodebunnstilstander.',
  estimatedMinutes: 50,
  competenceGoals: ['innhente og anvende kunnskap om materialer og produkters egenskaper i eget arbeid'],
  content: [
    {
      id: 'fb-1-2-intro',
      type: 'text',
      content: `## Vasking, pleie og behandling av hår

Hårvask er noe de fleste kunder forventer som en del av frisørbesøket, og det er ofte den første kontakten frisøren har med kundens hår og hodebunn. En god hårvask er ikke bare rengjøring – det er også en mulighet til å vurdere hår og hodebunn, og gi kunden en behagelig opplevelse.

Som frisør må du kunne velge riktige produkter for ulike hårtyper og hodebunnstilstander. Du må også kjenne til ulike pleiebehandlinger som kan forbedre hårets tilstand.`,
    },
    {
      id: 'fb-1-2-def-1',
      type: 'definition',
      title: 'Sjampo',
      content: `**Sjampo** er et rengjøringsprodukt for hår og hodebunn. Sjampoens hovedoppgave er å fjerne smuss, talg og produktrester fra hår og hodebunn.

Sjampo inneholder **tensider** (overflateaktive stoffer) som løser opp fett og smuss slik at det kan skylles bort med vann. Det finnes mange typer sjampo tilpasset ulike behov:

- **Volumsjampo:** For fint, slapt hår. Inneholder ikke tunge ingredienser.
- **Fuktighetssjampo:** For tørt og skadet hår. Tilfører fuktighet.
- **Fargebevarende sjampo:** For farget hår. Skånsom og pH-balansert.
- **Flass-sjampo:** Inneholder aktive ingredienser mot flass (f.eks. sink pyrition).
- **Sølvsjampo:** For blondert eller grått hår. Nøytraliserer gule toner.`,
    },
    {
      id: 'fb-1-2-text-1',
      type: 'text',
      content: `### Riktig hårvask – steg for steg

En profesjonell hårvask i salongen følger disse stegene:

**1. Forberedelse**
- Dekk kunden med en klippecape
- Sjekk vanntemperaturen (behagelig, lunken)
- Spør kunden om trykk og temperatur er ok

**2. Fukt håret grundig**
- Start fra nakken og arbeid deg oppover
- Sørg for at alt håret er gjennomvåt

**3. Påfør sjampo**
- Dosér riktig mengde sjampo i hånden
- Fordel jevnt over hodebunnen med fingrene
- Massér hodebunnen med fingerputene (ALDRI med neglene)
- Arbeid sjampoen gjennom lengdene

**4. Skyll grundig**
- Skyll til alt sjamposkum er borte
- Vær ekstra nøye i nakke- og tinningområdet

**5. Gjenta ved behov**
- Første vask fjerner overflatesmus
- Andre vask rengjør grundigere

**6. Påfør balsam eller behandling**
- Fordel i lengder og tupper
- Unngå hodebunnen (med mindre det er en hodebunnsbehandling)
- La virke i anbefalt tid
- Skyll grundig`,
    },
    {
      id: 'fb-1-2-def-2',
      type: 'definition',
      title: 'Balsam og hårkur',
      content: `**Balsam (conditioner):** Et pleieprodukt som påføres etter sjampo. Balsam glatter kutikula, letter utreding og tilfører fuktighet. Virketid: 1–3 minutter.

**Hårkur (hair mask/treatment):** Et mer intensivt pleieprodukt enn balsam. Inneholder høyere konsentrasjon av pleiende ingredienser. Virketid: 5–20 minutter. Brukes ukentlig eller etter behov.

**Leave-in balsam:** En lett balsam som ikke skylles ut. Beskytter mot ytre påvirkninger og letter styling.`,
    },
    {
      id: 'fb-1-2-text-2',
      type: 'text',
      content: `### Hodebunnstilstander

En frisør møter ulike hodebunnstilstander og må kunne gjenkjenne dem:

**Normal hodebunn:** Balansert talgproduksjon, ingen synlige problemer.

**Tørr hodebunn:** Stram følelse, mulig kløe og flassing. Kan skyldes tørr luft, for varm vask eller feil produkter.

**Fet hodebunn:** Overproduksjon av talg. Håret blir raskt fettete etter vask.

**Flass (pityriasis):**
- *Tørt flass:* Små, hvite flak som drysser. Ofte forbundet med tørr hodebunn.
- *Fett flass:* Større, gulaktige flak som sitter fast. Kan skyldes soppinfeksjon.

**Sensitiv hodebunn:** Rødhet, kløe eller irritasjon. Krever milde produkter uten parfyme.

**Viktig:** Frisører skal IKKE diagnostisere hudlidelser. Ved mistanke om sykdom (f.eks. psoriasis, eksem, soppinfeksjon) skal kunden henvises til lege eller hudlege.`,
    },
    {
      id: 'fb-1-2-example-1',
      type: 'example',
      title: 'Eksempel: Produktvalg for en kunde',
      content: `**Situasjon:** En kunde med langt, farget hår klager over at håret er tørt og flokete. Hodebunnen virker normal.

**Analyse:**
- Farget hår har ofte skadet kutikula
- Tørt hår mangler fuktighet i korteks
- Normal hodebunn betyr at vi kan fokusere på hårets lengder

**Produktvalg:**
1. **Sjampo:** Fargebevarende sjampo (skånsom, bevarer fargen)
2. **Balsam:** Fuktighetsbalsam i lengder og tupper
3. **Behandling:** Anbefal ukentlig hårkur for ekstra pleie
4. **Leave-in:** Varmebeskyttende spray dersom kunden bruker varmeapparater`,
    },
    {
      id: 'fb-1-2-text-3',
      type: 'text',
      content: `### pH-verdi og hår

pH-verdien er et mål på hvor surt eller basisk et stoff er, på en skala fra 0 til 14:
- **pH under 7:** Surt
- **pH 7:** Nøytralt
- **pH over 7:** Basisk (alkalisk)

Hårets naturlige pH-verdi er ca. **4,5–5,5** (svakt surt). Denne sure pH-verdien holder kutikula lukket og gir glansfullt, sterkt hår.

- **Sjampo:** pH 4,5–6,5
- **Balsam:** pH 3,5–5,0
- **Permanent:** pH 8–9 (basisk, åpner kutikula)
- **Farging:** pH 9–11 (basisk, åpner kutikula for fargepigmenter)

Å forstå pH er viktig fordi mange behandlinger (farging, permanent) er basiske og åpner kutikula. Etterpå må pH-verdien senkes igjen med sure produkter for å lukke kutikula.`,
    },
    {
      id: 'fb-1-2-summary',
      type: 'text',
      content: `## Oppsummering

- Hårvask er en viktig del av frisørbesøket og følger faste steg.
- Sjampo rengjør håret med tensider, og finnes i mange varianter for ulike behov.
- Balsam og hårkur pleier håret etter vask – balsam er for daglig bruk, hårkur for intensiv pleie.
- Frisøren må gjenkjenne ulike hodebunnstilstander (tørr, fet, flass, sensitiv) og velge produkter deretter.
- Hårets naturlige pH er ca. 4,5–5,5. Mange behandlinger endrer pH-verdien, og det er viktig å gjenopprette balansen.
- Ved mistanke om hudsykdommer skal kunden henvises til lege.`,
    },
  ],
  exercises: [
    {
      id: 'fb-1-2-ex-1',
      type: 'multiple-choice',
      question: 'Hva er sjampoens hovedoppgave?',
      options: ['Fjerne smuss, talg og produktrester', 'Gi håret farge', 'Beskytte mot UV-stråling', 'Øke hårveksten'],
      correctAnswer: 0,
      explanation: 'Sjampoens hovedoppgave er å rengjøre hår og hodebunn ved å fjerne smuss, talg og produktrester ved hjelp av tensider.',
    },
    {
      id: 'fb-1-2-ex-2',
      type: 'multiple-choice',
      question: 'Hva er hårets naturlige pH-verdi?',
      options: ['Ca. 4,5–5,5 (svakt surt)', 'Ca. 7,0 (nøytralt)', 'Ca. 9,0 (basisk)', 'Ca. 2,0 (svært surt)'],
      correctAnswer: 0,
      explanation: 'Hårets naturlige pH-verdi er ca. 4,5–5,5, som er svakt surt. Denne pH-verdien holder kutikula lukket og gir glansfullt hår.',
    },
    {
      id: 'fb-1-2-ex-3',
      type: 'multiple-choice',
      question: 'Hvordan skal en frisør massere hodebunnen under hårvask?',
      options: ['Med fingerputene i sirkulære bevegelser', 'Med neglene for å løsne smuss', 'Med en børste for bedre gjennomtrengning', 'Med flat hånd i lange strøk'],
      correctAnswer: 0,
      explanation: 'Hodebunnen skal masseres med fingerputene, aldri med neglene. Negler kan skade hodebunnen og gi sår.',
    },
    {
      id: 'fb-1-2-ex-4',
      type: 'classic',
      task: 'En kunde med fint, slapt hår ønsker mer volum. Hodebunnen er lett fet. Hvilke produkter ville du anbefalt til vask og pleie, og hvorfor? Begrunn valget ditt.',
      solution: 'Volumsjampo som rengjør uten å tynge ned håret, lett balsam kun i tupper (unngå hodebunnen for å ikke gjøre den fetere), og eventuelt volumspray. Man bør unngå tunge produkter som hårkur og leave-in balsam som kan gjøre fint hår slapt.',
    },
    {
      id: 'fb-1-2-ex-5',
      type: 'classic',
      task: 'Forklar forskjellen mellom tørt flass og fett flass. Hvordan kan du som frisør hjelpe kunder med disse tilstandene?',
      solution: 'Tørt flass gir små, hvite flak som drysser og er ofte knyttet til tørr hodebunn. Fett flass gir større, gulaktige flak som sitter fast og kan skyldes soppinfeksjon. Frisøren kan anbefale flass-sjampo, men ved vedvarende problemer bør kunden henvises til lege eller hudlege.',
    },
    {
      id: 'fb-1-2-ex-6',
      type: 'multiple-choice',
      question: 'Hva er forskjellen mellom balsam og hårkur?',
      options: [
        'Hårkur er mer intensiv og har lengre virketid enn balsam',
        'Balsam er mer intensiv enn hårkur',
        'Det er ingen forskjell mellom balsam og hårkur',
        'Hårkur brukes bare på hodebunnen',
      ],
      correctAnswer: 0,
      explanation: 'Hårkur er et mer intensivt pleieprodukt enn balsam, med høyere konsentrasjon av pleiende ingredienser og lengre virketid (5–20 min mot 1–3 min for balsam).',
    },
  ],
  keyTerms: [
    { term: 'Tensider', definition: 'Overflateaktive stoffer i sjampo som løser opp fett og smuss.' },
    { term: 'pH-verdi', definition: 'Mål på hvor surt eller basisk et stoff er, fra 0 (surt) til 14 (basisk).' },
    { term: 'Flass (pityriasis)', definition: 'Hudtilstand der hodebunnen flasser. Kan være tørt eller fett flass.' },
    { term: 'Leave-in balsam', definition: 'Lett pleieprodukt som påføres i håret uten å skylles ut.' },
    { term: 'Kutikula', definition: 'Hårets ytterste beskyttende lag, bestående av overlappende celler.' },
  ],
};

// ============================================================================
// KAPITTEL 1.3: Klippeteknikker og verktøybruk
// ============================================================================

export const CHAPTER_FB_VG1_1_3: TextbookChapter = {
  id: 'frisor-blomster-vg1-1-3',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '1.3',
  title: 'Klippeteknikker og verktøybruk',
  description: 'Lær om ulike klippeteknikker, riktig bruk av saks, maskin og andre verktøy, samt sikkerhet og hygiene på arbeidsplassen.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke relevante teknikker, verktøy og materialer på en fagmessig måte',
    'ivareta helse, miljø og sikkerhet i eget arbeid',
  ],
  content: [
    {
      id: 'fb-1-3-intro',
      type: 'text',
      content: `## Klippeteknikker og verktøybruk

Klipping er kjernen i frisøryrket. En dyktig frisør behersker mange ulike klippeteknikker og vet hvilken teknikk som passer til ulike frisyrer og hårtyper. Like viktig er det å kunne bruke verktøyene riktig – både for å oppnå et godt resultat og for å ivareta egen helse og sikkerhet.

I dette kapittelet lærer du om de viktigste klippeteknikkene, verktøyene du bruker, og hvordan du holder dem i god stand.`,
    },
    {
      id: 'fb-1-3-def-1',
      type: 'definition',
      title: 'Klippesaks',
      content: `**Klippesaks** er frisørens viktigste verktøy. En god frisørsaks har følgende egenskaper:

- **Bladlengde:** Vanligvis 5–7 tommer, avhengig av personlig preferanse og teknikk.
- **Materiale:** Høykvalitets stål (ofte japansk stål) som holder skarpheten lenge.
- **Ergonomi:** Grep og fingerringer som passer hånden, med justerbar skrue.

**Effileringssaks (uttynningssaks):** En saks der det ene bladet har tenner. Brukes til å tynne ut tykke partier uten å forkorte lengden synlig. Gir mykere overganger og fjerner volum.`,
    },
    {
      id: 'fb-1-3-text-1',
      type: 'text',
      content: `### Grunnleggende klippeteknikker

**1. Rett klipp (blunt cut)**
- Håret klippes i en rett linje
- Gir tunge, fyldige tupper
- Passer best til fint hår som trenger fylde i tuppene
- Viktig: Hold saksen parallelt med kammen

**2. Gradert klipp (layering)**
- Håret klippes i ulike lengder
- Skaper bevegelse, volum og tekstur
- Lange lag gir myk bevegelse, korte lag gir mye volum
- Overdireksjon brukes for å bestemme lengdeforskjellen mellom lagene

**3. Effilering (texturizing)**
- Brukes for å fjerne volum og vekt
- Kan gjøres med effileringssaks, vanlig saks eller kniv
- Point cutting: Saksen holdes vertikalt og klipper i tuppen av håret
- Slide cutting: Saksen glir langs hårstrået

**4. Underklipp (undercutting)**
- Korte sider og nakke, lengre hår på toppen
- Bruker ofte klippemaskin i ulike lengder
- Populært i mange moderne frisyrer for både kvinner og menn`,
    },
    {
      id: 'fb-1-3-text-2',
      type: 'text',
      content: `### Seksjonsoppdeling

Før klipping deles håret inn i seksjoner for systematisk arbeid. Vanlig oppdeling:

**Fire hovedseksjoner:**
1. **Topp:** Fra pannen til kronen
2. **Høyre side:** Fra skillen til bak øret
3. **Venstre side:** Fra skillen til bak øret
4. **Nakke:** Fra øre til øre, bak

**Viktige referansepunkter:**
- **Kronen:** Høyeste punkt på hodet
- **Oksipitalbenet:** Benframspringet bak på hodet
- **Mastoidbenene:** Bak ørene
- **Pannelinjen:** Hårfestet i pannen

Riktig seksjonering er avgjørende for et jevnt og kontrollert resultat.`,
    },
    {
      id: 'fb-1-3-def-2',
      type: 'definition',
      title: 'Klippemaskin (trimmer)',
      content: `**Klippemaskin** brukes til korte hårklipp, fading og konturering. Viktige komponenter:

- **Bladhodet:** Har to blader som beveger seg mot hverandre. Kan justeres for ulike klippelengder.
- **Oppstikkere/guards:** Plastdeksler i ulike størrelser (vanligvis 1–12 mm og mer) som bestemmer klippelengden.
- **Motor:** Roterende eller vibrerende mekanisme som driver bladene.

**Trimmer:** En mindre og smalere maskin brukt til detaljer, konturer og presisjon i nakke, rundt ørene og i barter.`,
    },
    {
      id: 'fb-1-3-text-3',
      type: 'text',
      content: `### Fading-teknikk

Fading er en populær teknikk der hårlengden gradvis øker fra kort til lengre:

**Low fade:** Overgangen starter lavt, nær nakkelinjen.
**Mid fade:** Overgangen starter midt på hodet, rundt ørene.
**High fade:** Overgangen starter høyt, nær kronen.

**Fremgangsmåte:**
1. Start med korteste oppstikker nederst
2. Arbeid deg oppover med gradvis lengre oppstikkere
3. Bruk teknikken "flicking out" – vipp maskinen ut fra hodet i overgangssonen
4. Blend overgangene med blending-kam eller effileringssaks
5. Kontroller resultatet fra ulike vinkler`,
    },
    {
      id: 'fb-1-3-text-4',
      type: 'text',
      content: `### Sikkerhet og hygiene

**Verktøyhygiene:**
- Desinfiser saks, kammar og maskiner mellom hver kunde
- Bruk barbicide-løsning eller UV-sterilisator
- Skift bladhodet på maskinen regelmessig
- Oljing av maskin etter bruk for å holde den i god stand

**Ergonomi og HMS:**
- Hold saksen riktig: ringfinger og tommel i ringene, lillefinger på fingerknotten
- Stå med rett rygg og unngå å bøye deg for mye
- Bruk anti-fatigue-matter på gulvet
- Ta regelmessige pauser for å unngå belastningsskader i skuldre, nakke og hender

**Sikkerhetsregler:**
- Saks og skarpe verktøy legges alltid med bladet lukket
- Klippemaskin slås av før bladbytte
- Vær forsiktig rundt ørene og nakken – beveg deg sakte og kontrollert
- Sjekk alltid at bladene er rene og skarpe – sløve blader kan rive i håret og skade huden`,
    },
    {
      id: 'fb-1-3-example-1',
      type: 'example',
      title: 'Eksempel: Planlegge en klipp',
      content: `**Situasjon:** En mannlig kunde ønsker kort hår med fade på sidene og lengre hår på toppen som kan styles bakover.

**Planlegging:**
1. **Konsultasjon:** Avklar eksakt ønsket lengde. Vis bilder for å sikre felles forståelse.
2. **Verktøy:** Klippemaskin med oppstikkere (1–3 mm i bunnen, gradvis lengre), saks for toppen.
3. **Teknikk:** Mid fade på sidene, sakseklipp med overdireksjon på toppen for å beholde lengde.
4. **Seksjoner:** Start med å definere fadegrensen. Klipp sidene med maskin, deretter toppen med saks.
5. **Finish:** Blend overgangene, rydd opp i konturer med trimmer, og style toppen med pomade.`,
    },
    {
      id: 'fb-1-3-summary',
      type: 'text',
      content: `## Oppsummering

- De viktigste klippeteknikkene er rett klipp, gradert klipp, effilering og underklipp.
- Frisørsaks og klippemaskin er de to viktigste verktøyene.
- Seksjonsoppdeling er avgjørende for systematisk og jevnt klippearbeid.
- Fading er en teknikk der hårlengden gradvis øker fra kort til lengre.
- Hygiene (desinfisering av verktøy), ergonomi og sikkerhet er sentrale deler av frisøryrket.
- Riktig verktøyvedlikehold forlenger levetiden og gir bedre resultater.`,
    },
  ],
  exercises: [
    {
      id: 'fb-1-3-ex-1',
      type: 'multiple-choice',
      question: 'Hva er forskjellen mellom en vanlig klippesaks og en effileringssaks?',
      options: [
        'Effileringssaks har tenner på det ene bladet for å tynne ut håret',
        'Effileringssaks er lengre enn vanlig saks',
        'Effileringssaks brukes bare til barber',
        'Det er ingen forskjell',
      ],
      correctAnswer: 0,
      explanation: 'En effileringssaks (uttynningssaks) har tenner på det ene bladet, noe som gjør at den fjerner volum uten å forkorte lengden synlig.',
    },
    {
      id: 'fb-1-3-ex-2',
      type: 'multiple-choice',
      question: 'Hva betyr "mid fade"?',
      options: [
        'Overgangen fra kort til langt hår starter midt på hodet, rundt ørene',
        'Håret er like langt over hele hodet',
        'Overgangen starter ved nakkelinjen',
        'Bare toppen av hodet er klippet',
      ],
      correctAnswer: 0,
      explanation: 'Mid fade betyr at den gradvise overgangen fra kort til lengre hår starter omtrent midt på hodet, typisk rundt ørene.',
    },
    {
      id: 'fb-1-3-ex-3',
      type: 'classic',
      task: 'Beskriv de fire hovedseksjonene håret deles inn i før klipping, og forklar hvorfor seksjonsoppdeling er viktig.',
      solution: 'De fire hovedseksjonene er topp (panne til krone), høyre side (skill til bak øret), venstre side (skill til bak øret) og nakke (øre til øre bak). Seksjonering er viktig for å arbeide systematisk, sikre jevnt resultat og ha kontroll over lengdene i ulike deler av håret.',
    },
    {
      id: 'fb-1-3-ex-4',
      type: 'classic',
      task: 'Forklar tre viktige hygienerutiner en frisør bør følge mellom hver kunde, og begrunn hvorfor de er viktige.',
      solution: 'Tre viktige rutiner: 1) Desinfisere saks, kammar og maskiner – forhindrer spredning av bakterier og sopp mellom kunder. 2) Rengjøre arbeidsstasjonen og stolen – gir en hygienisk arbeidsplass og profesjonelt inntrykk. 3) Bruke rene håndklær og caper for hver kunde – forhindrer kontaktsmitte og viser profesjonalitet.',
    },
    {
      id: 'fb-1-3-ex-5',
      type: 'multiple-choice',
      question: 'Hvilken teknikk gir mest volum og bevegelse i håret?',
      options: [
        'Gradert klipp (layering)',
        'Rett klipp (blunt cut)',
        'Effilering alene',
        'Kun maskineklipp',
      ],
      correctAnswer: 0,
      explanation: 'Gradert klipp (layering) skaper bevegelse og volum ved at håret klippes i ulike lengder, slik at lagene gir form og tekstur.',
    },
    {
      id: 'fb-1-3-ex-6',
      type: 'classic',
      task: 'En kunde med svært tykt, tungt hår ønsker en lettere frisyre uten å miste for mye lengde. Hvilke klippeteknikker ville du brukt, og hvorfor?',
      solution: 'Man kan bruke en kombinasjon av gradert klipp for å skape lag og bevegelse, samt effilering (med effileringssaks eller point cutting) for å fjerne volum og vekt. Effilering i lengdene reduserer tykkelsen uten å forkorte den synlige lengden vesentlig. Eventuelt kan slide cutting brukes for å lage myke overganger.',
    },
    {
      id: 'fb-1-3-ex-7',
      type: 'multiple-choice',
      question: 'Hvordan skal en frisørsaks holdes riktig?',
      options: [
        'Ringfinger og tommel i ringene, lillefinger på fingerknotten',
        'Pekefinger og tommel i ringene',
        'Med hele hånden rundt saksen',
        'Det spiller ingen rolle hvordan man holder saksen',
      ],
      correctAnswer: 0,
      explanation: 'Riktig grep er ringfinger og tommel i ringene, med lillefinger på fingerknotten (tang). Dette gir best kontroll og er mest ergonomisk for å forebygge belastningsskader.',
    },
  ],
  keyTerms: [
    { term: 'Blunt cut', definition: 'Rett klipp der håret klippes i en rett linje, gir tunge fyldige tupper.' },
    { term: 'Layering', definition: 'Gradert klipp der håret klippes i ulike lengder for å skape bevegelse og volum.' },
    { term: 'Effilering', definition: 'Teknikk for å fjerne volum og vekt uten å forkorte lengden synlig.' },
    { term: 'Fading', definition: 'Klippeteknikk der hårlengden gradvis øker fra kort til lengre.' },
    { term: 'Seksjonsoppdeling', definition: 'Inndeling av håret i seksjoner for systematisk og kontrollert klipping.' },
    { term: 'Overdireksjon', definition: 'Å løfte en hårseksjon utover sin naturlige fallretning for å kontrollere lengdeforskjeller.' },
  ],
};

// ============================================================================
// KAPITTEL 1.4: Føning og styling
// ============================================================================

export const CHAPTER_FB_VG1_1_4: TextbookChapter = {
  id: 'frisor-blomster-vg1-1-4',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '1.4',
  title: 'Føning og styling',
  description: 'Lær om føneteknikker, bruk av varmeapparater, stylingprodukter og hvordan du skaper ulike frisyrer med riktige verktøy.',
  estimatedMinutes: 55,
  competenceGoals: [
    'bruke relevante teknikker, verktøy og materialer på en fagmessig måte',
  ],
  content: [
    {
      id: 'fb-1-4-intro',
      type: 'text',
      content: `## Føning og styling

Føning og styling er en sentral del av frisørtjenesten. Det er her du gir frisyren sin endelige form og viser kunden hvordan de kan gjenskape looken hjemme. God føningsteknikk kan forvandle en klipp og gi håret volum, bevegelse og struktur.

I dette kapittelet lærer du om ulike føningsteknikker, bruk av varmeapparater, stylingprodukter og viktige prinsipper for varmestyling.`,
    },
    {
      id: 'fb-1-4-def-1',
      type: 'definition',
      title: 'Føntørker',
      content: `**Føntørker (hårtørker)** er det viktigste stylingverktøyet i salongen. Moderne profesjonelle føntørkere har:

- **Ioneteknologi:** Bryter ned vannmolekyler for raskere tørking og mindre krusning.
- **Flere varmeinnstillinger:** Lav, middels og høy varme.
- **Flere hastighetstrinn:** For kontroll over luftstrømmen.
- **Kaldluft-knapp (cool shot):** Brukes til å "låse" formen etter styling. Kald luft lukker kutikula og fikserer frisyren.
- **Munnstykke (nozzle):** Konsentrerer luftstrømmen for presis styling.
- **Diffuser:** Sprer luftstrømmen over et større område. Perfekt for krøllete hår.`,
    },
    {
      id: 'fb-1-4-text-1',
      type: 'text',
      content: `### Grunnleggende føningsteknikker

**1. Rundbørsteføning**
- Bruker en rund børste for å gi volum og form
- Håret vikles rundt børsten og tørkes med føner rettet fra rot til tupp
- Stor børste = store, myke bølger. Liten børste = stramme, definerte krøller
- Avgjørende: Alltid retning fra rot til tupp for å lukke kutikula og gi glans

**2. Flatbørsteføning**
- Bruker en flat paddle-børste
- Gir glatt, rett hår med naturlig bevegelse
- Godt egnet for langt hår som skal være glatt

**3. Fingerfring**
- Bruker fingrene til å løfte og forme håret mens det tørkes
- Gir et mer uanstrengt, naturlig resultat
- Passer til kort hår og teksturerte klipp

**4. Diffusing**
- Bruker diffuser-tilbehøret på føntørkeren
- Krøllete hår legges forsiktig i diffuseren uten å røre for mye
- Bevarer det naturlige krøllemønsteret
- Bruk lav varme og lav hastighet for best resultat`,
    },
    {
      id: 'fb-1-4-def-2',
      type: 'definition',
      title: 'Varmebeskyttelse',
      content: `**Varmebeskyttende spray/serum** er et produkt som påføres i håret FØR bruk av varmeapparater. Det danner en beskyttende film rundt hårstrået som:

- Reduserer fuktighetstap ved varmeeksponering
- Beskytter kutikula mot skade
- Tåler temperaturer opp til 200–230 °C avhengig av produkt

**Viktig:** Varmebeskyttelse bør ALLTID brukes ved fønretting, rettetang og krølltang. Uten beskyttelse kan varme over 180 °C forårsake varig skade på hårets proteinstruktur.`,
    },
    {
      id: 'fb-1-4-text-2',
      type: 'text',
      content: `### Varmeapparater

**Rettetang (flat iron):**
- To oppvarmede keramiske eller titanplater som klemmer håret flatt
- Temperatur: 150–230 °C avhengig av hårtype
- Fint/skadet hår: 150–170 °C
- Normalt hår: 170–200 °C
- Tykt/grovt hår: 200–230 °C
- Trekk tangen jevnt gjennom håret, ALDRI stopp opp midt i

**Krølltang:**
- En oppvarmet sylinder som håret vikles rundt
- Ulike diametre gir ulike typer krøller
- 13–19 mm: Stramme krøller
- 25 mm: Mellomstore krøller
- 32–38 mm: Store, løse bølger
- Hold håret rundt tangen i 5–10 sekunder

**Varmestyling uten tang:**
- Velcro-ruller: Settes i fuktig eller tørt hår og føntørkes
- Flexi-rods: Myke ruller for krøller uten varme
- Papillotter: Tradisjonelle ruller for ulike krøllmønstre`,
    },
    {
      id: 'fb-1-4-text-3',
      type: 'text',
      content: `### Stylingprodukter

Det finnes mange typer stylingprodukter, og valget avhenger av ønsket resultat og hårtype:

**For volum:**
- **Mousse:** Skum som påføres i fuktig hår. Gir løft og fylde.
- **Volumspray:** Sprayes på røttene for ekstra løft.
- **Pudder:** Matterende pudder på røttene for umiddelbart volum.

**For hold:**
- **Hårspray:** Finisheringprodukt for å fiksere frisyren. Finnes i lett, middels og sterkt hold.
- **Gelé:** Gir sterkt hold og definisjon. Kan gi en våt look.
- **Voks:** Gir tekstur og hold med et mattere finish.

**For glans og kontroll:**
- **Serum:** Olje- eller silikonbasert. Gir glans og temmer krusning.
- **Pomade:** Gir glans og kontroll. Populært for klassiske herrefrisyrer.
- **Krem:** Lett styling med naturlig finish. God for tekstur.`,
    },
    {
      id: 'fb-1-4-example-1',
      type: 'example',
      title: 'Eksempel: Føningsteknikk for volum',
      content: `**Situasjon:** En kunde med skulderlang, fint hår ønsker mer volum og bevegelse etter klipping.

**Fremgangsmåte:**
1. **Forberedelse:** Påfør volumspray i røttene og varmebeskyttende spray i lengdene på fuktig hår.
2. **Føningsteknikk:** Bruk rundbørste. Start i nakken og arbeid deg oppover.
3. **Løfteteknikk:** Løft håret ved roten med børsten og hold føntørkeren under. Varm luft opp i røttene gir løft.
4. **Form i lengdene:** Vikle lengdene rundt rundbørsten og tørk med føner fra rot til tupp.
5. **Cool shot:** Bruk kaldluft for å låse formen etter hver seksjon.
6. **Finish:** Sprayt lett med hårspray for hold. Eventuelt litt pudder i røttene for ekstra volum.

**Resultat:** Voluminøst, bevegelig hår med glans og holdbarhet.`,
    },
    {
      id: 'fb-1-4-summary',
      type: 'text',
      content: `## Oppsummering

- Føning er en viktig del av styling og gir frisyren sin endelige form.
- Rundbørstefning gir volum og bølger, flatbørste gir glatt hår, diffuser bevarer krøller.
- Varmebeskyttelse skal ALLTID brukes før varmeapparater for å forhindre hårskade.
- Rettetang og krølltang skal brukes i riktig temperatur tilpasset hårtypen.
- Kaldluft (cool shot) brukes for å fiksere formen etter styling.
- Stylingprodukter velges ut fra ønsket resultat: volum, hold, glans eller tekstur.`,
    },
  ],
  exercises: [
    {
      id: 'fb-1-4-ex-1',
      type: 'multiple-choice',
      question: 'Hva er funksjonen til "cool shot"-knappen på en føntørker?',
      options: [
        'Låse frisyrens form ved å lukke kutikula med kald luft',
        'Senke temperaturen for å spare strøm',
        'Tørke håret raskere',
        'Gi håret mer volum',
      ],
      correctAnswer: 0,
      explanation: 'Cool shot (kaldluft) brukes etter varmestyling for å lukke kutikula og fiksere frisyrens form. Kald luft "låser" formen på plass.',
    },
    {
      id: 'fb-1-4-ex-2',
      type: 'multiple-choice',
      question: 'Hvilken temperatur bør du bruke på rettetang for fint eller skadet hår?',
      options: ['150–170 °C', '170–200 °C', '200–230 °C', '250 °C og over'],
      correctAnswer: 0,
      explanation: 'Fint eller skadet hår tåler mindre varme. 150–170 °C er anbefalt for å unngå ytterligere skade på kutikula og korteks.',
    },
    {
      id: 'fb-1-4-ex-3',
      type: 'classic',
      task: 'En kunde med naturlige krøller ønsker å beholde krøllene, men vil at de skal bli mer definerte og uten krusning. Beskriv hvilken føningsteknikk og hvilke produkter du ville brukt.',
      solution: 'Bruk diffuser på lav varme og lav hastighet for å tørke krøllene uten å forstyrre krøllemønsteret. Påfør krølldefinerende krem eller mousse i fuktig hår først, og eventuelt en anti-frizz serum. Ikke rør håret for mye mens det tørker. Finish med lett hårspray for hold.',
    },
    {
      id: 'fb-1-4-ex-4',
      type: 'multiple-choice',
      question: 'Hvorfor bør luftstrømmen fra føntørkeren rettes fra rot til tupp?',
      options: [
        'For å lukke kutikula og gi håret glans',
        'Fordi det tørker håret raskere',
        'For å skape mer varme',
        'Fordi det gir mer volum',
      ],
      correctAnswer: 0,
      explanation: 'Å rette luftstrømmen fra rot til tupp glatter kutikulas overlappende celler nedover, noe som gir glans og reduserer krusning. Luft mot vekstretningen åpner kutikula og gir matt, bustete hår.',
    },
    {
      id: 'fb-1-4-ex-5',
      type: 'classic',
      task: 'Lag en oversikt over tre ulike stylingprodukter. For hvert produkt, beskriv hva det er, når det brukes, og hvilken hårtype det passer for.',
      solution: '1) Mousse: Skum som påføres i fuktig hår, gir volum og lett hold. Passer fint/middels hår. 2) Voks: Gir tekstur og hold med matt finish, påføres i tørt hår. Passer kort til middels langt hår. 3) Serum: Oljebasert produkt for glans og kontroll, påføres i lengder/tupper. Passer tørt, kruset eller tykt hår.',
    },
    {
      id: 'fb-1-4-ex-6',
      type: 'multiple-choice',
      question: 'Hvilken børstetype er best egnet for å gi store, løse bølger under føning?',
      options: [
        'Stor rundbørste',
        'Liten rundbørste',
        'Flat paddle-børste',
        'Kam med grove tenner',
      ],
      correctAnswer: 0,
      explanation: 'En stor rundbørste gir store, myke bølger fordi håret vikles i en vid bue. Jo mindre børste, desto strammere og mer definerte krøller.',
    },
  ],
  keyTerms: [
    { term: 'Diffuser', definition: 'Tilbehør til føntørker som sprer luftstrømmen, brukes for å tørke krøllete hår uten å forstyrre krøllene.' },
    { term: 'Cool shot', definition: 'Kaldluft-funksjon på føntørker som fikserer frisyren og lukker kutikula.' },
    { term: 'Varmebeskyttelse', definition: 'Produkt som påføres håret før varmeapparater for å beskytte mot varmeskade.' },
    { term: 'Mousse', definition: 'Stylingskum som påføres i fuktig hår for volum og lett hold.' },
    { term: 'Pomade', definition: 'Stylingprodukt som gir glans og kontroll, populært for klassiske herrefrisyrer.' },
  ],
};

// ============================================================================
// KAPITTEL 1.5: Oppsettinger og fletter
// ============================================================================

export const CHAPTER_FB_VG1_1_5: TextbookChapter = {
  id: 'frisor-blomster-vg1-1-5',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '1.5',
  title: 'Oppsettinger og fletter',
  description: 'Lær om ulike typer oppsettinger, fletteteknikker og anledningsfrisyrer for bryllup, konfirmasjon og andre begivenheter.',
  estimatedMinutes: 60,
  competenceGoals: [
    'bruke relevante teknikker, verktøy og materialer på en fagmessig måte',
    'planlegge og gjennomføre arbeidsoppgaver tilpasset ulike kundegrupper',
  ],
  content: [
    {
      id: 'fb-1-5-intro',
      type: 'text',
      content: `## Oppsettinger og fletter

Oppsettinger og fletter er en viktig del av frisørfaget, spesielt i forbindelse med anledninger som bryllup, konfirmasjon, ball og andre festlige begivenheter. En dyktig frisør behersker ulike teknikker for å skape vakre oppsettinger tilpasset kundens ønsker, hårtype og anledning.

Å mestre oppsettinger krever øvelse, tålmodighet og forståelse for hvordan håret kan formes og festes for å holde gjennom hele arrangementet.`,
    },
    {
      id: 'fb-1-5-def-1',
      type: 'definition',
      title: 'Oppsetting',
      content: `**Oppsetting** er en frisyre der håret er løftet opp og festet, helt eller delvis. Oppsettinger kan være:

- **Klassisk oppsatt:** Alt håret samlet i en knute, snurr eller sammenrulling. Elegant og tidløst.
- **Halvt oppsatt:** Deler av håret er samlet opp, resten henger fritt. Mykt og romantisk.
- **Løst oppsatt:** Håret er samlet løst med bevisst "uferdige" elementer. Uanstrengt og moderne.

**Vanlige verktøy for oppsettinger:**
- Hårpinner (bobby pins) og nåler
- Hårstrikker (snodder) i matchende farge
- Hårnett for å skjule festinger
- Hårdonuts og fyllere for volum
- Hårspray for fiksering`,
    },
    {
      id: 'fb-1-5-text-1',
      type: 'text',
      content: `### Grunnleggende fletteteknikker

**1. Tretrådsflette (klassisk flette)**
- Den mest grunnleggende fletteteknikken
- Tre hårpartier krysses vekselvis over hverandre
- Kan gjøres løst eller stramt, tynn eller tykk

**2. Fransk flette (innfelling)**
- Starter på toppen av hodet
- Nye hårpartier "felles inn" for hvert kryss
- Fletten ligger tett inntil hodet
- Kan gjøres som én sentral flette, to sidefletter eller i ulike mønstre

**3. Hollandsk flette (omvendt fransk flette)**
- Samme teknikk som fransk flette, men partiene krysses UNDER i stedet for over
- Gir en flette som hever seg fra hodet (3D-effekt)
- Populær for mer synlige, dekorative fletter

**4. Fishtail-flette (fiskebensflette)**
- Bruker to hoveddeler i stedet for tre
- Tynne tråder krysses fra side til side
- Gir et detaljert, vevd mønster
- Svært effektfull i tykt hår

**5. Tvinnet flette (rope braid)**
- To hårpartier tvinnes rundt hverandre
- Enkel teknikk med flott resultat
- Kan brukes som element i oppsettinger`,
    },
    {
      id: 'fb-1-5-text-2',
      type: 'text',
      content: `### Anledningsfrisyrer

**Bryllup:**
- Konsultasjon og prøveoppsetting er viktig
- Tilpass frisyren til brudekjolen, sløret og hodepynten
- Hold og holdbarhet er avgjørende – frisyren skal vare hele dagen
- Ha med en nødboks med ekstra pinner, spray og kam

**Konfirmasjon:**
- Myke, ungdommelige frisyrer er populære
- Halvt oppsatt eller løse bølger med en dekorativ detalj
- Tilpass til alder og personlig stil

**Ball og galla:**
- Glamorøse oppsettinger med volum og detaljer
- Hollywood-bølger er en klassiker for galla
- Fletter kombinert med oppsetting gir et unikt resultat

**Tips for holdbare anledningsfrisyrer:**
1. Start med dagsgammelt hår (ikke nåvasket) – gir bedre grep
2. Bruk teksturspray eller tørrsjampo for ekstra grep
3. Fest grundig med hårpinner i kryss-mønster
4. Bruk hårspray i lag underveis, ikke bare til slutt
5. Test holdbarheten ved å be kunden riste forsiktig på hodet`,
    },
    {
      id: 'fb-1-5-example-1',
      type: 'example',
      title: 'Eksempel: Planlegge en brudeoppsetting',
      content: `**Situasjon:** En brud med middels langt, fint hår ønsker en romantisk, halvt oppsatt frisyre med løse krøller.

**Konsultasjon:**
- Hårtype: Fint og glatt, trenger ekstra grep og volum
- Brudekjole: V-utringet – frisyren kan gjerne vise nakken delvis
- Smykker: Enkel hårkam i sølv

**Plan:**
1. **Dag før:** Anbefal kunden å ikke vaske håret (bedre grep)
2. **Forberedelse:** Påfør teksturspray i hele håret. Krøll alt hår med krølltang (25 mm).
3. **Oppsetting:** Samle den øvre halvdelen i en løs, tvinnet knute i nakken. Fest med pinner.
4. **Detaljer:** Dra ut noen løse tråder rundt ansiktet. Sett inn hårkammen.
5. **Fiksering:** Hårspray i flere lag for holdbarhet. Test med forsiktig risting.

**Viktig:** Gjennomfør alltid en prøveoppsetting minst 2–4 uker før bryllupet!`,
    },
    {
      id: 'fb-1-5-text-3',
      type: 'text',
      content: `### Hårtilbehør og dekorasjoner

Tilbehør kan løfte en oppsetting fra enkel til spektakulær:

- **Blomster:** Ekte eller kunstige blomster flettet inn i håret. Populært for bryllup og sommer.
- **Hårband og diadem:** Gir en elegant ramme rundt frisyren.
- **Hårkammer og klips:** Dekorative elementer som kan settes inn i oppsettinger.
- **Perler og krystaller:** Kan tres inn i fletter eller festes med pinner.
- **Slør:** For bruder – festes med kammar eller pinner i oppsettingen.

Valg av tilbehør bør alltid tilpasses anledningen, kundens stil og frisyrens form.`,
    },
    {
      id: 'fb-1-5-summary',
      type: 'text',
      content: `## Oppsummering

- Oppsettinger kan være klassiske, halvt oppsatte eller løse, avhengig av anledning og ønsket stil.
- De viktigste fletteteknikkene er tretrådsflette, fransk flette, hollandsk flette, fishtail og tvinnet flette.
- Anledningsfrisyrer krever konsultasjon og gjerne prøveoppsetting.
- Dagsgammelt hår med teksturspray gir best grep for oppsettinger.
- Holdbarhet sikres med grundig festing, hårspray i lag og testing.
- Hårtilbehør løfter frisyren og skal tilpasses anledningen.`,
    },
  ],
  exercises: [
    {
      id: 'fb-1-5-ex-1',
      type: 'multiple-choice',
      question: 'Hva er forskjellen mellom en fransk flette og en hollandsk flette?',
      options: [
        'I fransk flette krysses partiene over, i hollandsk under',
        'Fransk flette bruker to partier, hollandsk tre',
        'Det er ingen forskjell',
        'Hollandsk flette starter i nakken',
      ],
      correctAnswer: 0,
      explanation: 'I en fransk flette krysses hårpartiene over hverandre (fletten ligger flatt mot hodet), mens i en hollandsk flette krysses de under (fletten hever seg fra hodet i en 3D-effekt).',
    },
    {
      id: 'fb-1-5-ex-2',
      type: 'classic',
      task: 'Forklar hvorfor det anbefales å bruke dagsgammelt hår (ikke nåvasket) for oppsettinger. Hvilke produkter kan brukes som alternativ dersom kunden har vasket håret samme dag?',
      solution: 'Dagsgammelt hår har naturlig talg som gir bedre grep og tekstur, slik at håret er lettere å forme og feste. Nåvasket hår er glatt og glir lett ut av festingene. Alternativt kan man bruke tørrsjampo eller teksturspray for å gi håret mer grep og tekstur.',
    },
    {
      id: 'fb-1-5-ex-3',
      type: 'multiple-choice',
      question: 'Hvilken flettetype bruker kun to hoveddeler der tynne tråder krysses fra side til side?',
      options: ['Fishtail-flette (fiskebensflette)', 'Fransk flette', 'Tretrådsflette', 'Hollandsk flette'],
      correctAnswer: 0,
      explanation: 'Fishtail-fletten (fiskebensflette) bruker to hoveddeler der tynne hårpartier krysses fra den ene siden til den andre, noe som gir et detaljert, vevd mønster.',
    },
    {
      id: 'fb-1-5-ex-4',
      type: 'classic',
      task: 'En konfirmant med langt, tykt hår ønsker en halvt oppsatt frisyre med fletteelementer. Beskriv steg for steg hvordan du ville laget denne frisyren.',
      solution: 'Start med å krølle alt hår med stor krølltang for myk bevegelse. Del håret i en øvre og nedre del. Ta to partier fra tinningene og lag hollandske fletter langs hodet mot baksiden. Fest flettene sammen i nakken med en hårpinne. La resten av håret henge fritt. Dra forsiktig ut flettene for å gi dem bredde. Finish med hårspray og eventuelt en dekorativ klips der flettene møtes.',
    },
    {
      id: 'fb-1-5-ex-5',
      type: 'multiple-choice',
      question: 'Hvor lenge i forveien bør en brud ha prøveoppsetting før bryllupet?',
      options: ['2–4 uker', '1 dag', '6 måneder', 'Prøveoppsetting er ikke nødvendig'],
      correctAnswer: 0,
      explanation: 'En prøveoppsetting bør gjennomføres 2–4 uker før bryllupet. Da er det tid til eventuelle justeringer, og man får testet holdbarhet og utseende. For tidlig kan hårfarge og lengde endre seg.',
    },
  ],
  keyTerms: [
    { term: 'Fransk flette', definition: 'Fletteteknikk der nye hårpartier felles inn for hvert kryss, fletten ligger tett mot hodet.' },
    { term: 'Hollandsk flette', definition: 'Omvendt fransk flette der partiene krysses under, gir en hevet 3D-flette.' },
    { term: 'Fishtail-flette', definition: 'Flette med to hoveddeler der tynne tråder krysses fra side til side i et fiskebeinmønster.' },
    { term: 'Prøveoppsetting', definition: 'Testfrisyre laget i forkant av en begivenhet for å avklare utseende og holdbarhet.' },
    { term: 'Teksturspray', definition: 'Produkt som gir håret grep og tekstur, nyttig for oppsettinger.' },
  ],
};

// ============================================================================
// KAPITTEL 1.6: Farging og toning av hår
// ============================================================================

export const CHAPTER_FB_VG1_1_6: TextbookChapter = {
  id: 'frisor-blomster-vg1-1-6',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '1.6',
  title: 'Farging og toning av hår',
  description: 'Lær om hårfargingsprosessen, fargesirkelen, ulike fargetyper, allergitesting og sikkerhet ved kjemiske behandlinger.',
  estimatedMinutes: 65,
  competenceGoals: [
    'innhente og anvende kunnskap om materialer og produkters egenskaper i eget arbeid',
    'ivareta helse, miljø og sikkerhet i eget arbeid',
  ],
  content: [
    {
      id: 'fb-1-6-intro',
      type: 'text',
      content: `## Farging og toning av hår

Hårfarging er en av de mest populære behandlingene i salongen. Mange kunder ønsker å endre, forsterke eller dekke grått hår. Som frisør må du forstå kjemien bak fargeprosessen, kjenne til ulike fargetyper og teknikker, og ikke minst kunne ivareta kundens sikkerhet gjennom allergitesting og riktig bruk av produkter.

Farging er en kjemisk prosess der pigmenter tilsettes eller fjernes fra håret. Riktig utført kan det gi fantastiske resultater – feil utført kan det skade håret og hodebunnen.`,
    },
    {
      id: 'fb-1-6-def-1',
      type: 'definition',
      title: 'Fargesirkelen',
      content: `**Fargesirkelen** er et grunnleggende verktøy i hårfarging. Den viser forholdet mellom farger og er avgjørende for å velge riktig farge og nøytralisere uønskede toner.

**Primærfarger:** Rød, gul, blå – kan ikke blandes av andre farger.
**Sekundærfarger:** Oransje (rød + gul), grønn (gul + blå), fiolett (rød + blå).

**Komplementærfarger** står overfor hverandre i fargesirkelen og nøytraliserer hverandre:
- Rød nøytraliserer grønn
- Gul nøytraliserer fiolett
- Oransje nøytraliserer blå

Eksempel: Hvis farget hår blir for gult, brukes en fiolett toning (sølvsjampo) for å nøytralisere.`,
    },
    {
      id: 'fb-1-6-text-1',
      type: 'text',
      content: `### Typer hårfarge

**1. Midlertidig farge (temporary)**
- Legger seg utenpå kutikula
- Varer til neste vask
- Ingen kjemisk reaksjon i håret
- Eksempler: Fargesjampo, fargespray, fargemousse
- Skadefritt, men dekker ikke grått hår

**2. Semi-permanent farge (toning)**
- Trenger delvis inn i kutikula
- Varer 6–12 vask
- Ingen hydrogenperoksid (oksidant) tilsatt
- Friser opp eksisterende farge, gir glans
- Dekker ikke grått hår fullstendig

**3. Demi-permanent farge**
- Trenger inn i kutikula med lav konsentrasjon oksidant
- Varer 20–28 vask
- Kan gi opptil 1–2 nyanser mørkere
- Dekker opptil 50 % grått hår
- Skader håret minimalt

**4. Permanent farge (oksidasjonsfarge)**
- Trenger gjennom kutikula og inn i korteks
- Varig fargeendring som ikke vaskes ut
- Krever hydrogenperoksid (oksidant) for å fungere
- Kan lysne og mørkne håret
- Dekker grått hår fullstendig
- Mest skadelig for håret av alle fargetyper

**5. Bleking (avfarging)**
- Fjerner melanin fra korteks
- Bruker blekemiddel (pulver eller krem) + oksidant
- Kan lysne håret flere nyanser
- Mest skadelig prosess – krever stor forsiktighet
- Brukes som forbehandling før lyse farger`,
    },
    {
      id: 'fb-1-6-def-2',
      type: 'definition',
      title: 'Hydrogenperoksid (oksidant)',
      content: `**Hydrogenperoksid (H₂O₂)** er det kjemiske stoffet som blandes med hårfarge for å starte fargeaksjonen. Det finnes i ulike styrker:

- **3 % (10 vol):** For toning og mørkere farger. Minimal lysning.
- **6 % (20 vol):** Standard for permanent farge. Lysner 1–2 nyanser.
- **9 % (30 vol):** For lysning opp til 3 nyanser.
- **12 % (40 vol):** For maksimal lysning (opptil 4 nyanser). Brukes med forsiktighet.

**Viktig:** Sterkere oksidant = mer lysning, men også mer skade på håret. Bruk alltid den laveste styrken som gir ønsket resultat.`,
    },
    {
      id: 'fb-1-6-text-2',
      type: 'text',
      content: `### Allergitesting

**Allergitesting er lovpålagt** ved bruk av oksidasjonshårfarge i Norge. Mange hårfarger inneholder PPD (parafenylendiamin) og andre kjemikalier som kan gi allergiske reaksjoner.

**Slik utføres en allergitest:**
1. Bland en liten mengde farge med oksidant (som du ville brukt i behandlingen)
2. Påfør en tynt lag bak øret eller i albuebøyen
3. La det sitte i 48 timer
4. Kunden skal observere området for reaksjoner

**Tegn på allergisk reaksjon:**
- Rødhet
- Kløe
- Hevelse
- Blemmer eller utslett

**Viktig:**
- Test MÅ utføres 48 timer FØR farging
- Ny test ved bytte av fargemerke eller produkt
- Ved reaksjon: IKKE utfør fargebehandlingen
- Dokumenter alle allergitester i kundekort
- Allergitesting skal gjøres selv om kunden har farget håret før`,
    },
    {
      id: 'fb-1-6-text-3',
      type: 'text',
      content: `### Fargeteknikker

**Helfarging:** Hele håret farges i én farge. Brukes for å endre grunnfarge eller dekke grått.

**Highlights (lyse striper):** Utvalgte hårpartier lysnes. Gir dybde og dimensjon. Kan gjøres med:
- **Folie:** Hårpartier pakkes inn i folie med blekemiddel. Presis kontroll.
- **Hette:** Hår dras gjennom hull i en hette. Enklere metode for tynne striper.
- **Balayage:** Frihåndsmalingsteteknikk der blekemiddel påføres med pensel. Gir naturlige, solfargede overganger.

**Lowlights (mørke striper):** Utvalgte hårpartier gjøres mørkere for dybde og kontrast.

**Ombre/sombre:** Gradvis overgang fra mørkere røtter til lysere tupper. Sombre er en mykere versjon.

**Fargebad (gloss/toning):** Semi-permanent farge over hele håret for å friske opp, gi glans eller justere tone.`,
    },
    {
      id: 'fb-1-6-example-1',
      type: 'example',
      title: 'Eksempel: Bruk av fargesirkelen',
      content: `**Situasjon:** En kunde har bleket håret, men det har fått en uønsket gul/oransje tone (messing).

**Analyse med fargesirkelen:**
- Uønsket tone: Gul/oransje
- Komplementærfarge til gul = fiolett
- Komplementærfarge til oransje = blå

**Løsning:**
1. For gule toner: Bruk en aske/fiolett toning
2. For oransje toner: Bruk en blå/aske toning
3. Alternativt: Sølvsjampo (inneholder fiolette pigmenter) for vedlikehold hjemme

**Resultat:** De fiolette/blå pigmentene nøytraliserer de varme tonene og gir en kjøligere, mer naturlig blond farge.`,
    },
    {
      id: 'fb-1-6-summary',
      type: 'text',
      content: `## Oppsummering

- Hårfarge finnes i fem typer: midlertidig, semi-permanent, demi-permanent, permanent og bleking.
- Fargesirkelen er et essensielt verktøy for å forstå og nøytralisere uønskede toner.
- Komplementærfarger nøytraliserer hverandre: rød-grønn, gul-fiolett, oransje-blå.
- Hydrogenperoksid (oksidant) finnes i ulike styrker fra 3 % til 12 %, og sterkere betyr mer lysning men også mer skade.
- Allergitesting er lovpålagt 48 timer før fargebehandling med oksidasjonshårfarge.
- Vanlige fargeteknikker inkluderer helfarging, highlights (folie/balayage), lowlights og ombre.
- Sikkerhet og kjemikaliehåndtering er avgjørende ved alle fargebehandlinger.`,
    },
  ],
  exercises: [
    {
      id: 'fb-1-6-ex-1',
      type: 'multiple-choice',
      question: 'Hvilken farge nøytraliserer gule toner i bleket hår?',
      options: ['Fiolett', 'Rød', 'Grønn', 'Oransje'],
      correctAnswer: 0,
      explanation: 'Ifølge fargesirkelen er fiolett komplementærfargen til gul. Fiolette pigmenter nøytraliserer derfor gule toner i håret. Sølvsjampo inneholder nettopp fiolette pigmenter.',
    },
    {
      id: 'fb-1-6-ex-2',
      type: 'multiple-choice',
      question: 'Hvor lenge i forveien skal allergitesting utføres før hårfarging?',
      options: ['48 timer', '24 timer', '1 uke', 'Allergitesting er ikke nødvendig'],
      correctAnswer: 0,
      explanation: 'Allergitesting skal utføres minst 48 timer før fargebehandling. Det er lovpålagt i Norge ved bruk av oksidasjonshårfarge, da allergiske reaksjoner kan ta tid å utvikle seg.',
    },
    {
      id: 'fb-1-6-ex-3',
      type: 'classic',
      task: 'Forklar forskjellen mellom semi-permanent farge (toning), demi-permanent farge og permanent farge. Inkluder holdbarhet, bruk av oksidant og grad av skade på håret.',
      solution: 'Semi-permanent farge trenger delvis inn i kutikula uten oksidant, varer 6–12 vask og er skånsom. Demi-permanent farge bruker lav konsentrasjon oksidant, varer 20–28 vask og gir minimal skade. Permanent farge bruker oksidant for å trenge inn i korteks, gir varig fargeendring og er mest skadelig. Permanent farge kan lysne håret, mens de andre bare kan gi farge på samme nivå eller mørkere.',
    },
    {
      id: 'fb-1-6-ex-4',
      type: 'multiple-choice',
      question: 'Hva er balayage?',
      options: [
        'En frihåndsmalingsteknikk for naturlige lyseffekter',
        'En type permanent farge',
        'En maskin for hårfarging',
        'Et produkt for å fjerne hårfarge',
      ],
      correctAnswer: 0,
      explanation: 'Balayage er en frihåndsmalingsteknikk der blekemiddel påføres med pensel direkte på utvalgte hårpartier. Det gir naturlige, solfargede overganger uten skarpe linjer.',
    },
    {
      id: 'fb-1-6-ex-5',
      type: 'classic',
      task: 'En kunde ønsker å gå fra mørk brunette til lys blond. Beskriv hvilke utfordringer dette innebærer, hvilke steg som kreves, og hvilke sikkerhetstiltak du må ta.',
      solution: 'Store utfordringer: Mye lysning kreves (flere nyanser), risiko for hårskade og uønskede varme toner (oransje/gul). Steg: 1) Allergitesting 48 timer i forveien. 2) Bleking med blekemiddel og oksidant, muligens i flere omganger over flere besøk for å skåne håret. 3) Toning med ønsket blondtone for å nøytralisere varme undertoner. 4) Intensiv pleie med hårkur og proteinbehandling. Sikkerhet: Allergitesting, sjekke hårets tilstand underveis, ikke bleke over skadet hår, bruke riktig styrke oksidant, og følge produsentens anbefalinger.',
    },
  ],
  keyTerms: [
    { term: 'Fargesirkelen', definition: 'Verktøy som viser fargeforhold og brukes til å velge riktig farge og nøytralisere uønskede toner.' },
    { term: 'Hydrogenperoksid', definition: 'Oksidant (H₂O₂) som blandes med hårfarge for å starte fargereaksjonen. Finnes i styrker fra 3 % til 12 %.' },
    { term: 'Balayage', definition: 'Frihåndsmalingsteknikk for hårfarging som gir naturlige, solfargede overganger.' },
    { term: 'PPD', definition: 'Parafenylendiamin – vanlig kjemikalie i hårfarge som kan gi allergiske reaksjoner.' },
    { term: 'Komplementærfarger', definition: 'Farger som står overfor hverandre i fargesirkelen og nøytraliserer hverandre.' },
    { term: 'Bleking', definition: 'Kjemisk prosess som fjerner melanin fra håret for å lysne det.' },
  ],
};

// ============================================================================
// KAPITTEL 1.7: Mote, trender og stilhistorie i frisørfaget
// ============================================================================

export const CHAPTER_FB_VG1_1_7: TextbookChapter = {
  id: 'frisor-blomster-vg1-1-7',
  courseId: 'frisor-blomster-vg1',
  chapterNumber: '1.7',
  title: 'Mote, trender og stilhistorie i frisørfaget',
  description: 'Utforsk frisyrehistorien fra antikken til i dag, forstå hvordan motetrender påvirker frisørfaget, og lær å holde deg oppdatert.',
  estimatedMinutes: 45,
  competenceGoals: [
    'innhente og anvende kunnskap om stilhistorie, trender og utviklingstrekk innen eget fagområde',
  ],
  content: [
    {
      id: 'fb-1-7-intro',
      type: 'text',
      content: `## Mote, trender og stilhistorie i frisørfaget

Hår har alltid vært en viktig del av menneskers identitet og uttrykk. Gjennom historien har frisyrer reflektert alt fra sosial status og kulturell tilhørighet til politiske bevegelser og individuelle valg. Som frisør er det verdifullt å forstå denne historien – den gir inspirasjon og perspektiv på faget ditt.

I dette kapittelet ser vi på frisyrehistorien gjennom tidene, viktige stilperioder, og hvordan mote og trender påvirker frisøryrket i dag.`,
    },
    {
      id: 'fb-1-7-text-1',
      type: 'text',
      content: `### Frisyrehistorie gjennom tidene

**Antikken (3000 f.Kr.–500 e.Kr.)**
- **Egypt:** Parykker og elaborerte hårpynter. Barbering av eget hår og bruk av parykker i ulike stilarter var vanlig blant overklassen.
- **Hellas:** Naturlige, oppsatte frisyrer med bånd og diadem. Krøller ble skapt med varme jernstenger.
- **Roma:** Kompliserte oppsettinger for kvinner. Blondt hår var moteriktig, og romerne brukte bleking.

**Middelalderen (500–1500)**
- Kvinner dekket ofte håret med slør og hodeplagg av religiøse grunner.
- Høy panne var moteriktig – noen barberte hårfestet bakover.
- Menn hadde ofte langt hår og skjegg.

**Renessansen (1400–1600)**
- Elaborate frisyrer kom tilbake, inspirert av antikken.
- Lyse hårfarger var idealet – kvinner bleket håret i solen.
- Hårvask var sjelden, og parykker ble mer utbredt.`,
    },
    {
      id: 'fb-1-7-text-2',
      type: 'text',
      content: `### 1600–1900-tallet

**Barokken og rokokkoen (1600–1780)**
- Parykktiden: Store, pudrede parykker for både menn og kvinner.
- Ludvig XIV av Frankrike populariserte de enorme parykkene.
- Rokokkoen: Frisyrer ble enda større og mer ekstravagante, med hår bygd opp over rammer.
- Marie Antoinette var kjent for sine meterhøye håronstruksjoner.

**1800-tallet**
- Victoriansk tid: Oppsettinger med midtskill, krøller og fletter for kvinner.
- Menn: Korte frisyrer med barter og kinnskjegg.
- Marcel-bølger: Oppfunnet i 1872 av Marcel Grateau med varmt jern. Revolusjonerte styling.
- Første permanentbølgemaskin utviklet av Karl Nessler i 1906.

**Tidlig 1900-tall**
- 1920-tallet: Bob-frisyren og finger waves. Kvinner klippet seg kort for første gang i stor skala. Symboliserte frigjøring.
- 1930–40-tallet: Hollywood-glamour med store bølger og Victory Rolls under krigen.`,
    },
    {
      id: 'fb-1-7-text-3',
      type: 'text',
      content: `### Fra 1950-tallet til i dag

**1950-tallet**
- Pompadour og rock'n'roll-frisyrer for menn (Elvis Presley).
- Kvinner: Store krøller, pyntelig styling. Hårspray ble allemannseie.

**1960-tallet**
- Vidal Sassoon revolusjonerte klipping med presise, geometriske former (den berømte bob-en).
- Beehive-frisyren: Stort, toupért hår.
- Hippie-bevegelsen: Langt, naturlig hår som uttrykk for motkultur.

**1970-tallet**
- Afro: Naturlig hår som symbol på svart stolthet.
- Farrah Fawcett-bølger: Lagdelt, tilbakefønt hår.
- Punk: Mohawk, spisse pigger, neonfarger – hår som protest.

**1980-tallet**
- Stort er vakkert: Volum, permanent og toupering.
- Mullet: Kort foran, langt bak.
- Hårbånd og scrunchies.

**1990-tallet**
- "The Rachel" (Jennifer Aniston): Lagdelt, highlights.
- Grunge: Uanstrengt, "uvasket" look.
- Spiky hår og frosted tips for menn.

**2000-tallet og videre**
- Flatiron-boomen: Glatt, rett hår.
- Balayage og naturlige overganger erstatter tradisjonelle highlights.
- Sosiale medier endrer alt: Instagram og TikTok driver trender raskere enn noen gang.
- Naturlig hår-bevegelse: Aksept for naturlige teksturer og krøller.`,
    },
    {
      id: 'fb-1-7-def-1',
      type: 'definition',
      title: 'Trend vs. klassiker',
      content: `**Trend:** En frisyre eller stil som er populær i en begrenset periode. Trender kommer og går, ofte påvirket av kjendiser, sosiale medier og moteindustrien.

**Klassiker:** En frisyre som har bestått over tid og forblir stilfull uavhengig av trender. Eksempler: bob, pompadour, enkel hestehale.

Som frisør bør du kunne både trendbaserte frisyrer og klassikere. Mange kunder ønsker en kombinasjon – en klassisk base med trendriktige detaljer.`,
    },
    {
      id: 'fb-1-7-text-4',
      type: 'text',
      content: `### Holde seg oppdatert

Frisørfaget er i stadig utvikling. Slik holder du deg oppdatert:

- **Sosiale medier:** Følg ledende frisører og salonger på Instagram, TikTok og YouTube.
- **Fagblader:** Les norske og internasjonale frisørblader som Hair Magazine, Behind the Chair.
- **Kurs og messer:** Delta på fagmesser som Scandinavian Hair Festival og kurs fra produktleverandører.
- **Nettverkskolleger:** Diskuter teknikker og trender med kolleger.
- **Lookbooks og mood boards:** Samle inspirasjon og vis kunder aktuelle trender.

**Kulturell bevissthet:** Vær oppmerksom på at frisyrer har kulturell betydning. Noen frisyrer (som locs, cornrows og afrohår) har dyp historisk og kulturell tilknytning. Vis respekt og forståelse for kundenes kulturelle bakgrunn.`,
    },
    {
      id: 'fb-1-7-example-1',
      type: 'example',
      title: 'Eksempel: Trendinspirasjon i praksis',
      content: `**Situasjon:** En kunde viser deg et bilde fra Instagram av en curtain bangs-frisyre med face-framing highlights og ber om denne looken.

**Analyse:**
- **Curtain bangs:** En pannelugg som deler seg i midten og rammer inn ansiktet. Klassisk 70-tallselement som er blitt en trend igjen.
- **Face-framing highlights:** Lyse partier rundt ansiktet for å fremheve ansiktstrekk.

**Gjennomføring:**
1. Konsultasjon: Vurder kundens hårtype, ansiktsform og vedlikeholdsnivå
2. Klipp: Lag curtain bangs med myk effilering i tuppene
3. Farge: Balayage-teknikk for face-framing highlights
4. Styling: Fønrette panneluggen med rundbørste for å få curtain-effekten

**Lærdom:** Å kjenne til stilhistorien hjelper deg å gjenkjenne at curtain bangs er inspirert av 1970-tallets Farrah Fawcett-stil.`,
    },
    {
      id: 'fb-1-7-summary',
      type: 'text',
      content: `## Oppsummering

- Frisyrehistorien strekker seg fra antikkens parykker til dagens sosiale medier-trender.
- Viktige milepæler inkluderer Marcel-bølger (1872), bob-frisyren (1920-tallet), Vidal Sassoons geometriske klipp (1960-tallet) og balayage-boomen (2000-tallet).
- Motetrender påvirkes av kjendiser, sosiale medier, musikk og kulturelle bevegelser.
- Forskjellen mellom trender (midlertidige) og klassikere (tidløse) er viktig å forstå.
- En profesjonell frisør holder seg oppdatert gjennom fagblader, messer, sosiale medier og nettverk.
- Kulturell bevissthet rundt frisyrer og deres betydning er en viktig del av profesjonaliteten.`,
    },
  ],
  exercises: [
    {
      id: 'fb-1-7-ex-1',
      type: 'multiple-choice',
      question: 'Hvem revolusjonerte klipping på 1960-tallet med presise, geometriske former?',
      options: ['Vidal Sassoon', 'Marcel Grateau', 'Karl Nessler', 'Farrah Fawcett'],
      correctAnswer: 0,
      explanation: 'Vidal Sassoon revolusjonerte frisørfaget på 1960-tallet med sine presise, geometriske klipp, spesielt den berømte fem-punkts bob-en som eliminerte behovet for daglig styling.',
    },
    {
      id: 'fb-1-7-ex-2',
      type: 'multiple-choice',
      question: 'Hvilken frisyre ble et symbol på kvinnefrigjøring på 1920-tallet?',
      options: ['Bob-frisyren', 'Beehive', 'Victory Rolls', 'Afro'],
      correctAnswer: 0,
      explanation: 'Bob-frisyren ble et symbol på kvinnefrigjøring på 1920-tallet da kvinner for første gang i stor skala klippet seg kort. Det representerte et brudd med tradisjonelle kjønnsroller.',
    },
    {
      id: 'fb-1-7-ex-3',
      type: 'classic',
      task: 'Velg tre ulike tiår (f.eks. 1960-tallet, 1980-tallet og 2020-tallet) og beskriv de mest typiske frisyretrendene for hvert tiår. Reflekter over hva som kan ha påvirket disse trendene (kulturelle, politiske eller teknologiske faktorer).',
      solution: 'Eksempel: 1960-tallet – Vidal Sassoons geometriske bob, beehive og hippie-langt hår. Påvirket av ungdomsopprør, feminisme og motkultur. 1980-tallet – Stort volum, permanent og mullet. Påvirket av popmusikk (Madonna, Michael Jackson), glamour og "mer er mer"-mentalitet. 2020-tallet – Balayage, naturlig tekstur, curtain bangs, aksept for gråning. Påvirket av sosiale medier, bærekraft og naturlighetstrenden. Teknologi gjør at trender sprer seg raskere enn noensinne via Instagram og TikTok.',
    },
    {
      id: 'fb-1-7-ex-4',
      type: 'classic',
      task: 'Forklar forskjellen mellom en trend og en klassiker innen frisyrer. Gi to eksempler på hver kategori og begrunn hvorfor du plasserer dem der.',
      solution: 'En trend er en midlertidig, populær stil som kommer og går (f.eks. mullet fra 1980-tallet, frosted tips fra 1990-tallet). En klassiker er en tidløs frisyre som forblir stilfull (f.eks. bob-frisyren som har vært populær siden 1920-tallet, og den enkle hestehalen som alltid fungerer). Klassikere har gjerne en enkel, ren form som tilpasser seg ulike epoker, mens trender ofte er mer ekstreme og knyttet til en bestemt tidsperiode.',
    },
  ],
  keyTerms: [
    { term: 'Marcel-bølger', definition: 'Bølgeteknikk oppfunnet i 1872 av Marcel Grateau, skapt med varmt jern.' },
    { term: 'Bob', definition: 'Kort frisyre i jevn lengde, populært siden 1920-tallet. Klassiker i frisørfaget.' },
    { term: 'Balayage', definition: 'Frihåndsmalingsteknikk for naturlige fargeffekter, dominerende trend fra 2010-tallet.' },
    { term: 'Curtain bangs', definition: 'Pannelugg som deler seg i midten og rammer inn ansiktet, inspirert av 1970-tallets stil.' },
  ],
};

// ============================================================================
// EKSPORT
// ============================================================================

export const FRISOR_BLOMSTER_VG1_DEL1_CHAPTERS: TextbookChapter[] = [
  CHAPTER_FB_VG1_1_1, CHAPTER_FB_VG1_1_2, CHAPTER_FB_VG1_1_3,
  CHAPTER_FB_VG1_1_4, CHAPTER_FB_VG1_1_5, CHAPTER_FB_VG1_1_6, CHAPTER_FB_VG1_1_7,
];
